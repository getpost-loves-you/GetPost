#!/usr/bin/env python3
"""
End-to-end encrypted pastebin uploader
Encrypts content locally before uploading to GetPost-compatible pastebin

Usage:
    pastebin-crypted.py "content to paste"
    echo "content" | pastebin-crypted.py
    cat file.txt | pastebin-crypted.py
    pastebin-crypted.py < file.txt

Environment variables:
    PASTEBIN - Custom pastebin URL (default: https://staging.getpost.workers.dev)
    PASTEBIN_PASSWORD - Pre-set password (optional, generates random if not set)
"""

import sys
import os
import secrets
import urllib.request
import urllib.error
import json
from typing import Optional

try:
    import nacl.secret
    import nacl.pwhash
except ImportError:
    print("Error: PyNaCl is required. Install with: pip install PyNaCl", file=sys.stderr)
    sys.exit(1)


class PastebinCrypter:
    """Encrypt and upload content to pastebin with E2E encryption"""

    ARGON2_VARIANT = nacl.pwhash.argon2i
    SALT_SIZE = 16
    ENCRYPTED_MARKER = b'\x00'

    # Curated wordlist for password generation - evocative and memorable (from deps/wordlist.txt)
    WORDLIST = [
        "penumbra", "crepuscular", "littoral", "estuary", "interregnum", "threshold", "cusp", "vesper", "gloaming", "dusk",
        "aubade", "solstice", "equinox", "perihelion", "aphelion", "tidal_pool", "ecotone", "hypnagogia", "fugue_state", "limbo",
        "antechamber", "vestibule", "margin", "borderland", "twilight", "eventide", "phosphorescence", "bioluminescence", "afterglow", "half-light",
        "petrichor", "vellichor", "sonder", "kenopsia", "anemoia", "chrysalism", "onism", "liberosis", "nodus_tollens", "occhiolism",
        "monachopsis", "mauerbauertraurigkeit", "jouska", "ellipsism", "exulansis", "opia", "gnossienne", "énouement", "lachesism", "rubatosis",
        "altschmerz", "vemodalen", "anecdoche", "nighthawk", "aporia", "aporetic", "eudaimonia", "ataraxia", "epoché", "dasein",
        "weltanschauung", "gestalt", "qualia", "telos", "entelechy", "haecceity", "thisness", "contingency", "immanence", "transcendence",
        "noumena", "phenomena", "intersubjectivity", "hermeneutics", "dialectic", "sublation", "aufhebung", "becoming", "différance", "trace",
        "supplement", "apophatic", "cataphatic", "palimpsest", "pharmakon", "chiasmus", "mise_en_abyme", "susurrus", "sibilant", "murmuration",
        "ululation", "plangent", "mellifluous", "dulcet", "sonorous", "euphonious", "diaphanous", "gossamer", "lambent", "effulgent",
        "incandescent", "opalescent", "iridescent", "crepitation", "tintinnabulation", "caesura", "enjambment", "syncopation", "tremolo", "vibrato",
        "glissando", "sfumato", "chiaroscuro", "pianissimo", "crescendo", "fermata", "déjà_vu", "jamais_vu", "presque_vu", "l'appel_du_vide",
        "pareidolia", "apophenia", "uncanny_valley", "doppelgänger", "revenant", "fetch", "wraith", "simulacrum", "eerie", "weird",
        "spectral", "phantasmagoria", "oneiric", "somnambulant", "hypnopompic", "eidetic", "afterimage", "persistence_of_vision", "entoptic", "floaters",
        "scotoma", "phosphene", "aura", "quark", "lepton", "fermion", "boson", "hadron", "planck_length", "angstrom",
        "micron", "organelle", "mitochondrion", "axon", "dendrite", "synapse", "connectome", "biosphere", "noosphere", "heliosphere",
        "magnetosphere", "parsec", "light_year", "astronomical_unit", "hubble_volume", "observable_universe", "multiverse", "plenum", "void", "singularity",
        "event_horizon", "anachronism", "prolepsis", "flashforward", "palimpsest_time", "eternal_return", "kairos", "chronos", "aeon", "durée",
        "deep_time", "geological_time", "entropy", "arrow_of_time", "simultaneity", "retrocausality", "block_universe", "presentism", "eternalism", "growing_block",
        "temporal_parts", "perdurance", "endurantism", "fugacity", "transience", "impermanence", "wabi-sabi", "metamorphosis", "chrysalis", "pupation",
        "molting", "ecdysis", "sublimation", "phase_transition", "superposition", "entanglement", "decoherence", "emergence", "autopoiesis", "morphogenesis",
        "differentiation", "invagination", "gastrulation", "apoptosis", "autophagy", "senescence", "neoteny", "paedomorphosis", "exaptation", "spandrel",
        "bricolage", "kintsugi", "ablation", "proprioception", "interoception", "exteroception", "nociception", "saccade", "fixation", "foveal",
        "peripheral_awareness", "selective_attention", "inattentional_blindness", "change_blindness", "binding_problem", "global_workspace", "access_consciousness", "phenomenal_consciousness", "metacognition", "introspection",
        "mindfulness", "flow_state", "absorption", "presence", "witnessing", "bare_attention", "choiceless_awareness", "beginner's_mind", "shoshin", "aurora",
        "corona", "zodiacal_light", "gegenschein", "airglow", "noctilucent_clouds", "nacreous_clouds", "glory", "Brocken_spectre", "fata_morgana",
        "green_flash", "crepuscular_rays", "anticrepuscular", "circumhorizon_arc", "parhelion", "moonbow", "fogbow", "supernumerary", "kelvin-helmholtz", "mammatus",
        "lenticular", "asperitas", "virga", "graupel", "hoarfrost", "rime", "verglas", "firn", "atrium", "clerestory",
        "ambulatory", "narthex", "apse", "transept", "nave", "cloister", "scriptorium", "ossuary", "hypogeum", "catacomb",
        "cenote", "grotto", "folly", "gazebo", "belvedere", "cupola", "lantern", "oculus", "fenestration", "rustication",
        "pilaster", "colonnade", "arcade", "loggia", "portico", "pergola", "trompe_l'œil", "voussoir", "marginalia", "gloss",
        "scholium", "colophon", "incipit", "explicit", "lacuna", "crux", "hapax_legomenon", "ghost_word", "calque", "loan_word",
        "portmanteau", "neologism", "archaism", "anacoluthon", "aposiopesis", "paralepsis", "litotes", "meiosis", "hyperbaton", "tmesis",
        "diacope", "epistrophe", "anaphora", "antimetabole", "zeugma", "syllepsis", "hendiadys", "merism", "stillness", "hush",
        "lull", "respite", "reprieve", "interlude", "hiatus", "rest", "tacet", "negative_space", "ma", "sunyata",
        "emptiness", "clearing", "lichtung", "opening", "aletheia", "disclosure", "unconcealment", "presencing", "givenness", "thereness",
        "isness", "suchness", "tathata", "quiddity", "essence", "ousia", "ablution", "aspersion", "lustration", "genuflection",
        "prostration", "circumambulation", "pilgrimage", "vigil", "vespers", "compline", "matins", "lauds", "prime", "terce",
        "sext", "none", "lectio_divina", "centering_prayer", "hesychasm", "dhikr", "mantra", "japa", "zazen", "kinhin",
        "gasshō", "mudra", "offering", "libation", "incense", "votary", "ex-voto", "tardigrade", "nematode", "rotifer",
        "copepod", "diatom", "foraminifera", "radiolaria", "dinoflagellate", "coccolithophore", "cyanobacteria", "archaea", "extremophile", "halophile",
        "thermophile", "psychrophile", "endolith", "lithoautotroph", "mycorrhiza", "lichen", "slime_mold", "plasmodium", "fruiting_body", "sporangium",
        "gemmule", "statoblast", "diapause", "cryptobiosis", "anhydrobiosis", "ametabolous", "holometabolous", "melancholia", "ennui", "languor",
        "malaise", "restlessness", "disquiet", "unease", "foreboding", "presentiment", "apprehension", "wistfulness", "longing", "yearning",
        "pining", "nostalgia", "homesickness", "fernweh", "wanderlust", "sehnsucht", "hiraeth", "saudade", "toska", "mono_no_aware",
        "lacrimae_rerum", "weltschmerz", "angst", "existential_dread", "numinous_terror", "awe", "wonder", "astonishment", "bewilderment", "perplexity"
    ]

    def __init__(self, pastebin_url: str, password: Optional[str] = None):
        self.pastebin_url = pastebin_url.rstrip('/')
        self.password = password or self.generate_password()

    @classmethod
    def generate_password(cls) -> str:
        """Generate a strong memorable password using words and numbers"""
        selected = [secrets.choice(cls.WORDLIST) for _ in range(4)]
        number = secrets.randbelow(1000)
        return f"{'-'.join(selected)}-{number}"

    def derive_key(self, password: bytes, salt: bytes) -> bytes:
        """Derive encryption key using Argon2i"""
        return self.ARGON2_VARIANT.kdf(
            size=32,
            password=password,
            salt=salt,
            opslimit=nacl.pwhash.OPSLIMIT_MODERATE,
            memlimit=nacl.pwhash.MEMLIMIT_MODERATE,
        )

    def encrypt(self, content: bytes) -> bytes:
        """Encrypt content using NaCl SecretBox"""
        password_bytes = self.password.encode('utf-8')

        # Generate random salt
        salt = secrets.token_bytes(self.SALT_SIZE)

        # Derive key
        key = self.derive_key(password_bytes, salt)

        # Create SecretBox and encrypt
        box = nacl.secret.SecretBox(key)
        encrypted = box.encrypt(content)

        # Format: marker + salt + nonce + ciphertext
        # (matching the frontend format from upload.html)
        return self.ENCRYPTED_MARKER + salt + encrypted.nonce + encrypted.ciphertext

    def upload(self, encrypted_data: bytes, mime_type: str = 'text/plain', filename: str = 'paste.txt') -> str:
        """Upload encrypted data to pastebin"""
        url = f"{self.pastebin_url}/post"

        # Prepare request with headers that work with Cloudflare
        headers = {
            'Content-Type': 'application/octet-stream',
            'Accept': 'application/json',
            'User-Agent': 'pastebin-crypted/1.0 (compatible; curl/8.0)',
        }

        req = urllib.request.Request(url, data=encrypted_data, headers=headers, method='POST')

        try:
            with urllib.request.urlopen(req) as response:
                result = json.loads(response.read().decode('utf-8'))
                share_url = result.get('share_url')

                if not share_url:
                    raise ValueError("No share_url in response")

                # Encode password, MIME type, and filename in fragment
                # Format: #;;;password;;;mime-type;;;filename
                from urllib.parse import quote
                fragment = f"#;;;{quote(self.password)};;;{quote(mime_type)};;;{quote(filename)}"

                return share_url + fragment

        except urllib.error.HTTPError as e:
            error_body = e.read().decode('utf-8', errors='ignore')
            raise Exception(f"Upload failed with HTTP {e.code}: {error_body}")
        except urllib.error.URLError as e:
            raise Exception(f"Network error: {e.reason}")

    def paste(self, content: bytes, mime_type: str = 'text/plain', filename: str = 'paste.txt') -> str:
        """Encrypt and upload content, return shareable URL"""
        encrypted = self.encrypt(content)
        return self.upload(encrypted, mime_type, filename)


def detect_mime_type(content: bytes) -> str:
    """MIME type detection based on file signatures (matches worker.js logic)"""
    if len(content) < 4:
        return 'application/octet-stream'

    # Get first 4 bytes as hex string for comparison
    header = content[:4].hex()

    # Check for encrypted content (first byte is 0x00)
    if len(content) > 0 and content[0] == 0:
        return 'application/x-encrypted'

    # Match file signatures (following worker.js logic)
    # MP4 video - special case, needs to check bytes 4-12
    if header in ['00000018', '0000001c']:
        if len(content) >= 12:
            ftyp_check = content[4:12].hex()
            if ftyp_check == '667479706d703432':  # "ftypmp42"
                return 'video/mp4'

    # PDF
    if header == '25504446':  # %PDF
        return 'application/pdf'

    # PNG
    if header == '89504e47':  # .PNG
        return 'image/png'

    # GIF
    if header == '47494638':  # GIF8
        return 'image/gif'

    # MP3
    if header == '49443304':  # ID3.
        return 'audio/mp3'

    # ZIP
    if header == '504b0304':  # PK..
        return 'application/zip'

    # JPEG (multiple possible headers)
    if header in ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2', 'ffd8ffe3', 'ffd8ffe8']:
        return 'image/jpeg'

    # Check if content is printable UTF-8 text
    # Test first 1000 bytes to see if all characters are printable
    content_is_printable = True
    try:
        text = content[:1000].decode('utf-8')
        for char in text:
            code = ord(char)
            # Allow printable ASCII plus tab, newline, carriage return
            if code > 127 or (code < 32 and code not in [9, 10, 13]):
                content_is_printable = False
                break
    except UnicodeDecodeError:
        content_is_printable = False

    if content_is_printable:
        return 'text/plain'

    return 'application/octet-stream'


def main():
    """Main entry point"""
    # Get pastebin URL from environment or use default
    pastebin_url = os.environ.get('PASTEBIN', 'https://staging.getpost.workers.dev')

    # Get password from environment or generate
    password = os.environ.get('PASTEBIN_PASSWORD')

    # Read content from stdin or argv
    content = None
    filename = 'paste.txt'

    if not sys.stdin.isatty():
        # Reading from pipe/redirect
        content = sys.stdin.buffer.read()
        filename = 'stdin.txt'
    elif len(sys.argv) > 1:
        # Reading from command line argument
        content = open(sys.argv[-1], "rb").read()
        filename = 'argument.txt'
    else:
        print(__doc__)
        print("\nError: No content provided", file=sys.stderr)
        print("Provide content via stdin or as an argument", file=sys.stderr)
        sys.exit(1)

    if not content:
        print("Error: Empty content", file=sys.stderr)
        sys.exit(1)

    # Detect MIME type
    mime_type = detect_mime_type(content)

    try:
        crypter = PastebinCrypter(pastebin_url, password)

        # Show info
        print(f"📦 Content size: {len(content):,} bytes", file=sys.stderr)
        print(f"🔐 Encrypting with password: {crypter.password}", file=sys.stderr)
        print(f"📤 Uploading to: {pastebin_url}", file=sys.stderr)

        # Encrypt and upload
        share_url = crypter.paste(content, mime_type, filename)

        print(f"\n✅ Upload successful!", file=sys.stderr)
        print(f"🔗 Share URL:", file=sys.stderr)
        print(share_url)

        # Also print just the URL to stdout for piping
        if sys.stderr.isatty():
            print(f"\n💡 Tip: The password is embedded in the URL fragment", file=sys.stderr)
            print(f"   Anyone with this link can decrypt the content", file=sys.stderr)

    except KeyboardInterrupt:
        print("\n\n❌ Cancelled by user", file=sys.stderr)
        sys.exit(130)
    except Exception as e:
        print(f"\n❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
