// Copyleft 2021: AKA Infra
// Formally: PUBLIC DOMAIN / CC0
// Informally: "an ye harm none, do what ye will"

// declaration parsed by autoinsert.py; inserts the literal contents of deps/marked.min.js
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,u){"object"==typeof exports&&"undefined"!=typeof module?module.exports=u():"function"==typeof define&&define.amd?define(u):(e="undefined"!=typeof globalThis?globalThis:e||self).marked=u()}(this,function(){"use strict";function r(e,u){for(var t=0;t<u.length;t++){var n=u[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,u){(null==u||u>e.length)&&(u=e.length);for(var t=0,n=new Array(u);t<u;t++)n[t]=e[t];return n}function c(e,u){var t;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(t=e[Symbol.iterator]()).next.bind(t);if(Array.isArray(e)||(t=function(e,u){if(e){if("string"==typeof e)return i(e,u);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,u):void 0}}(e))||u&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e){return D[e]}var e,u=(function(u){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}u.exports={defaults:e(),getDefaults:e,changeDefaults:function(e){u.exports.defaults=e}}}(e={exports:{}}),e.exports),n=/[&<>"']/,s=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,a=/[<>"']|&(?!#?\w+;)/g,D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(o,function(e,u){return"colon"===(u=u.toLowerCase())?":":"#"===u.charAt(0)?"x"===u.charAt(1)?String.fromCharCode(parseInt(u.substring(2),16)):String.fromCharCode(+u.substring(1)):""})}var p=/(^|[^\[])\^/g;var g=/[^\w:]/g,f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var F={},A=/^[^:]+:\/*[^/]*$/,C=/^([^:]+:)[\s\S]*$/,d=/^([^:]+:\/*[^/]*)[\s\S]*$/;function E(e,u){F[" "+e]||(A.test(e)?F[" "+e]=e+"/":F[" "+e]=k(e,"/",!0));var t=-1===(e=F[" "+e]).indexOf(":");return"//"===u.substring(0,2)?t?u:e.replace(C,"$1")+u:"/"===u.charAt(0)?t?u:e.replace(d,"$1")+u:e+u}function k(e,u,t){var n=e.length;if(0===n)return"";for(var r=0;r<n;){var i=e.charAt(n-r-1);if(i!==u||t){if(i===u||!t)break;r++}else r++}return e.substr(0,n-r)}var m=function(e,u){if(u){if(n.test(e))return e.replace(s,t)}else if(l.test(e))return e.replace(a,t);return e},b=h,x=function(t,e){t=t.source||t,e=e||"";var n={replace:function(e,u){return u=(u=u.source||u).replace(p,"$1"),t=t.replace(e,u),n},getRegex:function(){return new RegExp(t,e)}};return n},B=function(e,u,t){if(e){var n;try{n=decodeURIComponent(h(t)).replace(g,"").toLowerCase()}catch(e){return null}if(0===n.indexOf("javascript:")||0===n.indexOf("vbscript:")||0===n.indexOf("data:"))return null}u&&!f.test(t)&&(t=E(u,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch(e){return null}return t},w={exec:function(){}},v=function(e){for(var u,t,n=1;n<arguments.length;n++)for(t in u=arguments[n])Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);return e},y=function(e,u){var t=e.replace(/\|/g,function(e,u,t){for(var n=!1,r=u;0<=--r&&"\\"===t[r];)n=!n;return n?"|":" |"}).split(/ \|/),n=0;if(t.length>u)t.splice(u);else for(;t.length<u;)t.push("");for(;n<t.length;n++)t[n]=t[n].trim().replace(/\\\|/g,"|");return t},_=function(e,u){if(-1===e.indexOf(u[1]))return-1;for(var t=e.length,n=0,r=0;r<t;r++)if("\\"===e[r])r++;else if(e[r]===u[0])n++;else if(e[r]===u[1]&&--n<0)return r;return-1},z=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},$=function(e,u){if(u<1)return"";for(var t="";1<u;)1&u&&(t+=e),u>>=1,e+=e;return t+e},S=u.defaults,T=k,I=y,R=m,Z=_;function q(e,u,t){var n=u.href,r=u.title?R(u.title):null,u=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:t,href:n,title:r,text:u}:{type:"image",raw:t,href:n,title:r,text:R(u)}}var O=function(){function e(e){this.options=e||S}var u=e.prototype;return u.space=function(e){e=this.rules.block.newline.exec(e);if(e)return 1<e[0].length?{type:"space",raw:e[0]}:{raw:"\n"}},u.code=function(e){var u=this.rules.block.code.exec(e);if(u){e=u[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:u[0],codeBlockStyle:"indented",text:this.options.pedantic?e:T(e,"\n")}}},u.fences=function(e){var u=this.rules.block.fences.exec(e);if(u){var t=u[0],e=function(e,u){if(null===(e=e.match(/^(\s+)(?:```)/)))return u;var t=e[1];return u.split("\n").map(function(e){var u=e.match(/^\s+/);return null!==u&&u[0].length>=t.length?e.slice(t.length):e}).join("\n")}(t,u[3]||"");return{type:"code",raw:t,lang:u[2]&&u[2].trim(),text:e}}},u.heading=function(e){var u=this.rules.block.heading.exec(e);if(u){var t=u[2].trim();return/#$/.test(t)&&(e=T(t,"#"),!this.options.pedantic&&e&&!/ $/.test(e)||(t=e.trim())),{type:"heading",raw:u[0],depth:u[1].length,text:t}}},u.nptable=function(e){e=this.rules.block.nptable.exec(e);if(e){var u={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[],raw:e[0]};if(u.header.length===u.align.length){for(var t=u.align.length,n=0;n<t;n++)/^ *-+: *$/.test(u.align[n])?u.align[n]="right":/^ *:-+: *$/.test(u.align[n])?u.align[n]="center":/^ *:-+ *$/.test(u.align[n])?u.align[n]="left":u.align[n]=null;for(t=u.cells.length,n=0;n<t;n++)u.cells[n]=I(u.cells[n],u.header.length);return u}}},u.hr=function(e){e=this.rules.block.hr.exec(e);if(e)return{type:"hr",raw:e[0]}},u.blockquote=function(e){var u=this.rules.block.blockquote.exec(e);if(u){e=u[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:u[0],text:e}}},u.list=function(e){e=this.rules.block.list.exec(e);if(e){for(var u,t,n,r,i,s,l=e[0],a=e[2],D=1<a.length,o={type:"list",raw:l,ordered:D,start:D?+a.slice(0,-1):"",loose:!1,items:[]},c=e[0].match(this.rules.block.item),h=!1,p=c.length,g=this.rules.block.listItemStart.exec(c[0]),f=0;f<p;f++){if(l=u=c[f],this.options.pedantic||(s=u.match(new RegExp("\\n\\s*\\n {0,"+(g[0].length-1)+"}\\S")))&&(t=u.length-s.index+c.slice(f+1).join("\n").length,o.raw=o.raw.substring(0,o.raw.length-t),l=u=u.substring(0,s.index),p=f+1),f!==p-1){if(n=this.rules.block.listItemStart.exec(c[f+1]),this.options.pedantic?n[1].length>g[1].length:n[1].length>=g[0].length||3<n[1].length){c.splice(f,2,c[f]+(!this.options.pedantic&&n[1].length<g[0].length&&!c[f].match(/\n$/)?"":"\n")+c[f+1]),f--,p--;continue}(!this.options.pedantic||this.options.smartLists?n[2][n[2].length-1]!==a[a.length-1]:D==(1===n[2].length))&&(t=c.slice(f+1).join("\n").length,o.raw=o.raw.substring(0,o.raw.length-t),f=p-1),g=n}n=u.length,~(u=u.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(n-=u.length,u=this.options.pedantic?u.replace(/^ {1,4}/gm,""):u.replace(new RegExp("^ {1,"+n+"}","gm"),"")),u=T(u,"\n"),f!==p-1&&(l+="\n"),n=h||/\n\n(?!\s*$)/.test(l),f!==p-1&&(h="\n\n"===l.slice(-2),n=n||h),n&&(o.loose=!0),this.options.gfm&&(i=void 0,(r=/^\[[ xX]\] /.test(u))&&(i=" "!==u[1],u=u.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:l,task:r,checked:i,loose:n,text:u})}return o}},u.html=function(e){e=this.rules.block.html.exec(e);if(e)return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):R(e[0]):e[0]}},u.def=function(e){e=this.rules.block.def.exec(e);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},u.table=function(e){e=this.rules.block.table.exec(e);if(e){var u={type:"table",header:I(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(u.header.length===u.align.length){u.raw=e[0];for(var t=u.align.length,n=0;n<t;n++)/^ *-+: *$/.test(u.align[n])?u.align[n]="right":/^ *:-+: *$/.test(u.align[n])?u.align[n]="center":/^ *:-+ *$/.test(u.align[n])?u.align[n]="left":u.align[n]=null;for(t=u.cells.length,n=0;n<t;n++)u.cells[n]=I(u.cells[n].replace(/^ *\| *| *\| *$/g,""),u.header.length);return u}}},u.lheading=function(e){e=this.rules.block.lheading.exec(e);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1]}},u.paragraph=function(e){e=this.rules.block.paragraph.exec(e);if(e)return{type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1]}},u.text=function(e){e=this.rules.block.text.exec(e);if(e)return{type:"text",raw:e[0],text:e[0]}},u.escape=function(e){e=this.rules.inline.escape.exec(e);if(e)return{type:"escape",raw:e[0],text:R(e[1])}},u.tag=function(e,u,t){e=this.rules.inline.tag.exec(e);if(e)return!u&&/^<a /i.test(e[0])?u=!0:u&&/^<\/a>/i.test(e[0])&&(u=!1),!t&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?t=!0:t&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(t=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:u,inRawBlock:t,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):R(e[0]):e[0]}},u.link=function(e){var u=this.rules.inline.link.exec(e);if(u){var t=u[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;e=T(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{var n=Z(u[2],"()");-1<n&&(i=(0===u[0].indexOf("!")?5:4)+u[1].length+n,u[2]=u[2].substring(0,n),u[0]=u[0].substring(0,i).trim(),u[3]="")}var r,n=u[2],i="";return this.options.pedantic?(r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n))&&(n=r[1],i=r[3]):i=u[3]?u[3].slice(1,-1):"",n=n.trim(),q(u,{href:(n=/^</.test(n)?this.options.pedantic&&!/>$/.test(t)?n.slice(1):n.slice(1,-1):n)&&n.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},u[0])}},u.reflink=function(e,u){if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){e=(t[2]||t[1]).replace(/\s+/g," ");if((e=u[e.toLowerCase()])&&e.href)return q(t,e,t[0]);var t=t[0].charAt(0);return{type:"text",raw:t,text:t}}},u.emStrong=function(e,u,t){void 0===t&&(t="");var n=this.rules.inline.emStrong.lDelim.exec(e);if(n&&(!n[3]||!t.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var r=n[1]||n[2]||"";if(!r||r&&(""===t||this.rules.inline.punctuation.exec(t))){var i,s=n[0].length-1,l=s,a=0,D="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(D.lastIndex=0,u=u.slice(-1*e.length+s);null!=(n=D.exec(u));)if(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6])if(i=i.length,n[3]||n[4])l+=i;else if(!((n[5]||n[6])&&s%3)||(s+i)%3){if(!(0<(l-=i))){if(l+a-i<=0&&!u.slice(D.lastIndex).match(D)&&(i=Math.min(i,i+l+a)),Math.min(s,i)%2)return{type:"em",raw:e.slice(0,s+n.index+i+1),text:e.slice(1,s+n.index+i)};if(Math.min(s,i)%2==0)return{type:"strong",raw:e.slice(0,s+n.index+i+1),text:e.slice(2,s+n.index+i-1)}}}else a+=i}}},u.codespan=function(e){var u=this.rules.inline.code.exec(e);if(u){var t=u[2].replace(/\n/g," "),n=/[^ ]/.test(t),e=/^ /.test(t)&&/ $/.test(t);return n&&e&&(t=t.substring(1,t.length-1)),t=R(t,!0),{type:"codespan",raw:u[0],text:t}}},u.br=function(e){e=this.rules.inline.br.exec(e);if(e)return{type:"br",raw:e[0]}},u.del=function(e){e=this.rules.inline.del.exec(e);if(e)return{type:"del",raw:e[0],text:e[2]}},u.autolink=function(e,u){e=this.rules.inline.autolink.exec(e);if(e){var t,u="@"===e[2]?"mailto:"+(t=R(this.options.mangle?u(e[1]):e[1])):t=R(e[1]);return{type:"link",raw:e[0],text:t,href:u,tokens:[{type:"text",raw:t,text:t}]}}},u.url=function(e,u){var t,n,r,i;if(t=this.rules.inline.url.exec(e)){if("@"===t[2])r="mailto:"+(n=R(this.options.mangle?u(t[0]):t[0]));else{for(;i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0],i!==t[0];);n=R(t[0]),r="www."===t[1]?"http://"+n:n}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}},u.inlineText=function(e,u,t){e=this.rules.inline.text.exec(e);if(e){t=u?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):R(e[0]):e[0]:R(this.options.smartypants?t(e[0]):e[0]);return{type:"text",raw:e[0],text:t}}},e}(),y=w,_=x,w=v,x={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:y,table:y,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};x.def=_(x.def).replace("label",x._label).replace("title",x._title).getRegex(),x.bullet=/(?:[*+-]|\d{1,9}[.)])/,x.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,x.item=_(x.item,"gm").replace(/bull/g,x.bullet).getRegex(),x.listItemStart=_(/^( *)(bull) */).replace("bull",x.bullet).getRegex(),x.list=_(x.list).replace(/bull/g,x.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+x.def.source+")").getRegex(),x._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",x._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,x.html=_(x.html,"i").replace("comment",x._comment).replace("tag",x._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),x.paragraph=_(x._paragraph).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",x._tag).getRegex(),x.blockquote=_(x.blockquote).replace("paragraph",x.paragraph).getRegex(),x.normal=w({},x),x.gfm=w({},x.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),x.gfm.nptable=_(x.gfm.nptable).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",x._tag).getRegex(),x.gfm.table=_(x.gfm.table).replace("hr",x.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",x._tag).getRegex(),x.pedantic=w({},x.normal,{html:_("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",x._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:y,paragraph:_(x.normal._paragraph).replace("hr",x.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",x.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});y={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:y,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:y,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};y.punctuation=_(y.punctuation).replace(/punctuation/g,y._punctuation).getRegex(),y.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,y.escapedEmSt=/\\\*|\\_/g,y._comment=_(x._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),y.emStrong.lDelim=_(y.emStrong.lDelim).replace(/punct/g,y._punctuation).getRegex(),y.emStrong.rDelimAst=_(y.emStrong.rDelimAst,"g").replace(/punct/g,y._punctuation).getRegex(),y.emStrong.rDelimUnd=_(y.emStrong.rDelimUnd,"g").replace(/punct/g,y._punctuation).getRegex(),y._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,y._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,y._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,y.autolink=_(y.autolink).replace("scheme",y._scheme).replace("email",y._email).getRegex(),y._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,y.tag=_(y.tag).replace("comment",y._comment).replace("attribute",y._attribute).getRegex(),y._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,y._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,y._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,y.link=_(y.link).replace("label",y._label).replace("href",y._href).replace("title",y._title).getRegex(),y.reflink=_(y.reflink).replace("label",y._label).getRegex(),y.reflinkSearch=_(y.reflinkSearch,"g").replace("reflink",y.reflink).replace("nolink",y.nolink).getRegex(),y.normal=w({},y),y.pedantic=w({},y.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",y._label).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",y._label).getRegex()}),y.gfm=w({},y.normal,{escape:_(y.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),y.gfm.url=_(y.gfm.url,"i").replace("email",y.gfm._extended_email).getRegex(),y.breaks=w({},y.gfm,{br:_(y.br).replace("{2,}","*").getRegex(),text:_(y.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var y={block:x,inline:y},j=u.defaults,U=y.block,P=y.inline,L=$;function M(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function N(e){for(var u,t="",n=e.length,r=0;r<n;r++)u=e.charCodeAt(r),t+="&#"+(u=.5<Math.random()?"x"+u.toString(16):u)+";";return t}var X=function(){function t(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||j,this.options.tokenizer=this.options.tokenizer||new O,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;e={block:U.normal,inline:P.normal};this.options.pedantic?(e.block=U.pedantic,e.inline=P.pedantic):this.options.gfm&&(e.block=U.gfm,this.options.breaks?e.inline=P.breaks:e.inline=P.gfm),this.tokenizer.rules=e}t.lex=function(e,u){return new t(u).lex(e)},t.lexInline=function(e,u){return new t(u).inlineTokens(e)};var e,u,n=t.prototype;return n.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},n.blockTokens=function(e,u,t){var n,r,i,s;for(void 0===u&&(u=[]),void 0===t&&(t=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),n.type&&u.push(n);else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),(s=u[u.length-1])&&"paragraph"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text):u.push(n);else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.nptable(e))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),n.tokens=this.blockTokens(n.text,[],t),u.push(n);else if(n=this.tokenizer.list(e)){for(e=e.substring(n.raw.length),i=n.items.length,r=0;r<i;r++)n.items[r].tokens=this.blockTokens(n.items[r].text,[],!1);u.push(n)}else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),u.push(n);else if(t&&(n=this.tokenizer.def(e)))e=e.substring(n.raw.length),this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),u.push(n);else if(t&&(n=this.tokenizer.paragraph(e)))e=e.substring(n.raw.length),u.push(n);else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),(s=u[u.length-1])&&"text"===s.type?(s.raw+="\n"+n.raw,s.text+="\n"+n.text):u.push(n);else if(e){var l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}return u},n.inline=function(e){for(var u,t,n,r,i,s=e.length,l=0;l<s;l++)switch((i=e[l]).type){case"paragraph":case"text":case"heading":i.tokens=[],this.inlineTokens(i.text,i.tokens);break;case"table":for(i.tokens={header:[],cells:[]},n=i.header.length,u=0;u<n;u++)i.tokens.header[u]=[],this.inlineTokens(i.header[u],i.tokens.header[u]);for(n=i.cells.length,u=0;u<n;u++)for(r=i.cells[u],i.tokens.cells[u]=[],t=0;t<r.length;t++)i.tokens.cells[u][t]=[],this.inlineTokens(r[t],i.tokens.cells[u][t]);break;case"blockquote":this.inline(i.tokens);break;case"list":for(n=i.items.length,u=0;u<n;u++)this.inline(i.items[u].tokens)}return e},n.inlineTokens=function(e,u,t,n){var r;void 0===u&&(u=[]),void 0===t&&(t=!1),void 0===n&&(n=!1);var i,s,l,a=e;if(this.tokens.links){var D=Object.keys(this.tokens.links);if(0<D.length)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(a));)D.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,i.index)+"["+L("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(a));)a=a.slice(0,i.index)+"["+L("a",i[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(a));)a=a.slice(0,i.index)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(l=""),s=!1,r=this.tokenizer.escape(e))e=e.substring(r.raw.length),u.push(r);else if(r=this.tokenizer.tag(e,t,n)){e=e.substring(r.raw.length),t=r.inLink,n=r.inRawBlock;var o=u[u.length-1];o&&"text"===r.type&&"text"===o.type?(o.raw+=r.raw,o.text+=r.text):u.push(r)}else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),"link"===r.type&&(r.tokens=this.inlineTokens(r.text,[],!0,n)),u.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);o=u[u.length-1];"link"===r.type?(r.tokens=this.inlineTokens(r.text,[],!0,n),u.push(r)):o&&"text"===r.type&&"text"===o.type?(o.raw+=r.raw,o.text+=r.text):u.push(r)}else if(r=this.tokenizer.emStrong(e,a,l))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],t,n),u.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),u.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),u.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),r.tokens=this.inlineTokens(r.text,[],t,n),u.push(r);else if(r=this.tokenizer.autolink(e,N))e=e.substring(r.raw.length),u.push(r);else if(t||!(r=this.tokenizer.url(e,N))){if(r=this.tokenizer.inlineText(e,n,M))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(l=r.raw.slice(-1)),s=!0,(c=u[u.length-1])&&"text"===c.type?(c.raw+=r.raw,c.text+=r.text):u.push(r);else if(e){var c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}throw new Error(c)}}else e=e.substring(r.raw.length),u.push(r);return u},e=t,u=[{key:"rules",get:function(){return{block:U,inline:P}}}],(n=null)&&r(e.prototype,n),u&&r(e,u),t}(),G=u.defaults,V=B,H=m,J=function(){function e(e){this.options=e||G}var u=e.prototype;return u.code=function(e,u,t){var n=(u||"").match(/\S*/)[0];return!this.options.highlight||null!=(u=this.options.highlight(e,n))&&u!==e&&(t=!0,e=u),e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+H(n,!0)+'">'+(t?e:H(e,!0))+"</code></pre>\n":"<pre><code>"+(t?e:H(e,!0))+"</code></pre>\n"},u.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},u.html=function(e){return e},u.heading=function(e,u,t,n){return this.options.headerIds?"<h"+u+' id="'+this.options.headerPrefix+n.slug(t)+'">'+e+"</h"+u+">\n":"<h"+u+">"+e+"</h"+u+">\n"},u.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},u.list=function(e,u,t){var n=u?"ol":"ul";return"<"+n+(u&&1!==t?' start="'+t+'"':"")+">\n"+e+"</"+n+">\n"},u.listitem=function(e){return"<li>"+e+"</li>\n"},u.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},u.paragraph=function(e){return"<p>"+e+"</p>\n"},u.table=function(e,u){return"<table>\n<thead>\n"+e+"</thead>\n"+(u=u&&"<tbody>"+u+"</tbody>")+"</table>\n"},u.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},u.tablecell=function(e,u){var t=u.header?"th":"td";return(u.align?"<"+t+' align="'+u.align+'">':"<"+t+">")+e+"</"+t+">\n"},u.strong=function(e){return"<strong>"+e+"</strong>"},u.em=function(e){return"<em>"+e+"</em>"},u.codespan=function(e){return"<code>"+e+"</code>"},u.br=function(){return this.options.xhtml?"<br/>":"<br>"},u.del=function(e){return"<del>"+e+"</del>"},u.link=function(e,u,t){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return t;e='<a href="'+H(e)+'"';return u&&(e+=' title="'+u+'"'),e+=">"+t+"</a>"},u.image=function(e,u,t){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return t;t='<img src="'+e+'" alt="'+t+'"';return u&&(t+=' title="'+u+'"'),t+=this.options.xhtml?"/>":">"},u.text=function(e){return e},e}(),K=function(){function e(){}var u=e.prototype;return u.strong=function(e){return e},u.em=function(e){return e},u.codespan=function(e){return e},u.del=function(e){return e},u.html=function(e){return e},u.text=function(e){return e},u.link=function(e,u,t){return""+t},u.image=function(e,u,t){return""+t},u.br=function(){return""},e}(),Q=function(){function e(){this.seen={}}var u=e.prototype;return u.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},u.getNextSafeSlug=function(e,u){var t=e,n=0;if(this.seen.hasOwnProperty(t))for(n=this.seen[e];t=e+"-"+ ++n,this.seen.hasOwnProperty(t););return u||(this.seen[e]=n,this.seen[t]=0),t},u.slug=function(e,u){void 0===u&&(u={});var t=this.serialize(e);return this.getNextSafeSlug(t,u.dryrun)},e}(),W=u.defaults,Y=b,ee=function(){function t(e){this.options=e||W,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new K,this.slugger=new Q}t.parse=function(e,u){return new t(u).parse(e)},t.parseInline=function(e,u){return new t(u).parseInline(e)};var e=t.prototype;return e.parse=function(e,u){void 0===u&&(u=!0);for(var t,n,r,i,s,l,a,D,o,c,h,p,g,f,F,A="",C=e.length,d=0;d<C;d++)switch((D=e[d]).type){case"space":continue;case"hr":A+=this.renderer.hr();continue;case"heading":A+=this.renderer.heading(this.parseInline(D.tokens),D.depth,Y(this.parseInline(D.tokens,this.textRenderer)),this.slugger);continue;case"code":A+=this.renderer.code(D.text,D.lang,D.escaped);continue;case"table":for(l=o="",r=D.header.length,t=0;t<r;t++)l+=this.renderer.tablecell(this.parseInline(D.tokens.header[t]),{header:!0,align:D.align[t]});for(o+=this.renderer.tablerow(l),a="",r=D.cells.length,t=0;t<r;t++){for(l="",i=(s=D.tokens.cells[t]).length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(s[n]),{header:!1,align:D.align[n]});a+=this.renderer.tablerow(l)}A+=this.renderer.table(o,a);continue;case"blockquote":a=this.parse(D.tokens),A+=this.renderer.blockquote(a);continue;case"list":for(o=D.ordered,E=D.start,c=D.loose,r=D.items.length,a="",t=0;t<r;t++)g=(p=D.items[t]).checked,f=p.task,h="",p.task&&(F=this.renderer.checkbox(g),c?0<p.tokens.length&&"text"===p.tokens[0].type?(p.tokens[0].text=F+" "+p.tokens[0].text,p.tokens[0].tokens&&0<p.tokens[0].tokens.length&&"text"===p.tokens[0].tokens[0].type&&(p.tokens[0].tokens[0].text=F+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:F}):h+=F),h+=this.parse(p.tokens,c),a+=this.renderer.listitem(h,f,g);A+=this.renderer.list(a,o,E);continue;case"html":A+=this.renderer.html(D.text);continue;case"paragraph":A+=this.renderer.paragraph(this.parseInline(D.tokens));continue;case"text":for(a=D.tokens?this.parseInline(D.tokens):D.text;d+1<C&&"text"===e[d+1].type;)a+="\n"+((D=e[++d]).tokens?this.parseInline(D.tokens):D.text);A+=u?this.renderer.paragraph(a):a;continue;default:var E='Token with "'+D.type+'" type was not found.';if(this.options.silent)return void console.error(E);throw new Error(E)}return A},e.parseInline=function(e,u){u=u||this.renderer;for(var t,n="",r=e.length,i=0;i<r;i++)switch((t=e[i]).type){case"escape":n+=u.text(t.text);break;case"html":n+=u.html(t.text);break;case"link":n+=u.link(t.href,t.title,this.parseInline(t.tokens,u));break;case"image":n+=u.image(t.href,t.title,t.text);break;case"strong":n+=u.strong(this.parseInline(t.tokens,u));break;case"em":n+=u.em(this.parseInline(t.tokens,u));break;case"codespan":n+=u.codespan(t.text);break;case"br":n+=u.br();break;case"del":n+=u.del(this.parseInline(t.tokens,u));break;case"text":n+=u.text(t.text);break;default:var s='Token with "'+t.type+'" type was not found.';if(this.options.silent)return void console.error(s);throw new Error(s)}return n},t}(),ue=v,te=z,ne=m,m=u.getDefaults,re=u.changeDefaults,u=u.defaults;function ie(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(n=t,t=null),t=ue({},ie.defaults,t||{}),te(t),n){var r,i=t.highlight;try{r=X.lex(e,t)}catch(e){return n(e)}var s=function(u){var e;if(!u)try{e=ee.parse(r,t)}catch(e){u=e}return t.highlight=i,u?n(u):n(null,e)};if(!i||i.length<3)return s();if(delete t.highlight,!r.length)return s();var l=0;return ie.walkTokens(r,function(t){"code"===t.type&&(l++,setTimeout(function(){i(t.text,t.lang,function(e,u){return e?s(e):(null!=u&&u!==t.text&&(t.text=u,t.escaped=!0),void(0===--l&&s()))})},0))}),void(0===l&&s())}try{var u=X.lex(e,t);return t.walkTokens&&ie.walkTokens(u,t.walkTokens),ee.parse(u,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+ne(e.message+"",!0)+"</pre>";throw e}}return ie.options=ie.setOptions=function(e){return ue(ie.defaults,e),re(ie.defaults),ie},ie.getDefaults=m,ie.defaults=u,ie.use=function(l){var u,t=ue({},l);l.renderer&&function(){var e,s=ie.defaults.renderer||new J;for(e in l.renderer)!function(r){var i=s[r];s[r]=function(){for(var e=arguments.length,u=new Array(e),t=0;t<e;t++)u[t]=arguments[t];var n=l.renderer[r].apply(s,u);return n=!1===n?i.apply(s,u):n}}(e);t.renderer=s}(),l.tokenizer&&function(){var e,s=ie.defaults.tokenizer||new O;for(e in l.tokenizer)!function(r){var i=s[r];s[r]=function(){for(var e=arguments.length,u=new Array(e),t=0;t<e;t++)u[t]=arguments[t];var n=l.tokenizer[r].apply(s,u);return n=!1===n?i.apply(s,u):n}}(e);t.tokenizer=s}(),l.walkTokens&&(u=ie.defaults.walkTokens,t.walkTokens=function(e){l.walkTokens(e),u&&u(e)}),ie.setOptions(t)},ie.walkTokens=function(e,u){for(var t,n=c(e);!(t=n()).done;){var r=t.value;switch(u(r),r.type){case"table":for(var i=c(r.tokens.header);!(s=i()).done;){var s=s.value;ie.walkTokens(s,u)}for(var l,a=c(r.tokens.cells);!(l=a()).done;)for(var D=c(l.value);!(o=D()).done;){var o=o.value;ie.walkTokens(o,u)}break;case"list":ie.walkTokens(r.items,u);break;default:r.tokens&&ie.walkTokens(r.tokens,u)}}},ie.parseInline=function(e,u){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");u=ue({},ie.defaults,u||{}),te(u);try{var t=X.lexInline(e,u);return u.walkTokens&&ie.walkTokens(t,u.walkTokens),ee.parseInline(t,u)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",u.silent)return"<p>An error occurred:</p><pre>"+ne(e.message+"",!0)+"</pre>";throw e}},ie.Parser=ee,ie.parser=ee.parse,ie.Renderer=J,ie.TextRenderer=K,ie.Lexer=X,ie.lexer=X.lex,ie.Tokenizer=O,ie.Slugger=Q,ie.parse=ie}); // prettier-ignore

const ENCODING = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

const DEFAULT_MIME_TEXT = "text/raw; charset=UTF-8";
const DEFAULT_MIME_HTML = "text/html; charset=UTF-8";
const favicon_gzip =
  "H4sIAO9PM2AAA+2UMQrCQBBF36wbNZUBiUKa2MXOI9il9Rh6DMHKyjOls/UKVpYqFimEOBpE4yYXkLzls7Pzh+FXC6InCHix8mCk91T1bE1UQr80hQ9fdZIk+L6PMQZrLWmaIiJEUUQYhrS0tPwx3crLOIXj9vCaJ5o3//Y6VUNwqVvg5nl/cA2JbZ1bbs7ncFrCfgNbDbArVGdY5DBTxTfVFQYXKFTrA2RDOI7hHsMDH7d8sX4FAAA=";

// This is non-standard, but very convenient and relatively simple:
// specific interpolated strings - those wrapped in single-backticks (`) - and prefaced by AUTOINSERT_
// are found by a regular-expression search autoinsert.py and converted into corresponding filenames
//
// For example, AUTOINSERT_NOTPACMAN__SVG is replaced with the contents of notpacman.svg, in the deps directory
//
// This keeps the worker.js script simple, without requiring much build tooling!

const notpacman_svg = `<svg version="1.0" viewBox="0 0 42.28 42.28" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<radialGradient id="a" cx="8.1144" cy="-3.2957" r="11.096" gradientTransform="matrix(1.1664 -.0051021 .0057143 1.3063 -1.5277 .68564)" gradientUnits="userSpaceOnUse">
<stop stop-color="#fff" offset="0"/>
<stop stop-color="#ff0" offset="1"/>
</radialGradient>
</defs>
<g transform="translate(.645 15.11)" stroke="#000">
<path transform="matrix(1.5736 0 0 1.4684 -1.1223 2.5823)" d="m24.473 7.9a11.4 11.4 0 1 1 -1e-6 -11.4l-9.8727 5.7z" fill="url(#a)" stroke-width="1.0004"/>
<path transform="matrix(1.5748 0 0 1.4684 -8.0682 4.3444)" d="m20-6a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z" stroke-width="1.5"/>
</g>
</svg>
`; // eslint-disable-line
const getpost_css = `/* latin */
@font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(data:font/woff2;base64,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) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
    font-family: 'Ubuntu Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(data:font/woff2;base64,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) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@media only screen and (max-width: 599px) {
    html {
        font-size: 20px;
    }
}

@media only screen and (min-width: 1201px) {
    html {
        font-size: 18px;
    }
}

html {
    font-family: Ubuntu;
    background-color: #222020;
    color: #f5f3f3;
    margin-left: 0.5em;
}

body {
    margin: 0 auto;
    line-height: 1;
    max-width: 960px;
    padding: 0.75em;
}

h1, h2, h3, h4 {
    font-weight: 400;
}

h1, h2, h3, h4, h5, p {
    padding: 0;
}

h1 {
    font-size: 3em;
}

h2 {
    margin-top: 1.29em;
}

h4 {
    line-height: 1.095em;
    font-size: 1.3125em;
}

a {
    color: #f5f3f3;
}

a:hover {
    text-decoration: none;
    color: #63f363;
}

ul, ol {
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 0.125em;
}

li, ul {
    margin-left: 1em;
    margin-right: 1em;
}

p, ul, ol {
    font-size: 1.05em;
    line-height: 1.5em;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 0 1.5em;
    margin-left: 1em;
    margin-right: 1em;
}

code {
    font-family: Ubuntu Mono;
    line-height: 1.5em;
}

blockquote {
    border-left: 0.25em solid #f5f3f3;
    padding: 0 1em;
}

blockquote > p {
    color: #b6b6b6;
    font-size: 0.672em;
}

h2 {
    font-size: 1.75em;
    font-weight: 700;
    line-height: 1.286em;
}

h3 {
    font-size: 1.5625em;
    font-weight: 700;
    line-height: 1.28em;
}

p {
    font-size: 1.25em;
    line-height: 1.6em;
}

blockquote {
    font-size: 1.5625em;
    line-height: 1.905em;
    margin-left: 0.85em;
    margin-right: 0.85em;
}

pre {
    font-size: 1em;
    line-height: 2em;
    background-color: #121010;
    padding-top: 1em;
    padding-bottom: 1em;
}

input[type=button] {
    background-color: #f5f3f3;
    border: none;
    color: #222020;
    padding: 0.55em 1.5em;
    cursor: pointer;
    font-family: Ubuntu;
    border-radius: 3px;
}

input[type=button]:hover {
    background-color: #63f363;
}`; // eslint-disable-line
const naclfast_base64 = `IWZ1bmN0aW9uKGkpeyJ1c2Ugc3RyaWN0Ijt2YXIgdj1mdW5jdGlvbihyKXt2YXIgdCxuPW5ldyBGbG9hdDY0QXJyYXkoMTYpO2lmKHIpZm9yKHQ9MDt0PHIubGVuZ3RoO3QrKyluW3RdPXJbdF07cmV0dXJuIG59LGg9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoIm5vIFBSTkciKX0sbz1uZXcgVWludDhBcnJheSgxNiksbj1uZXcgVWludDhBcnJheSgzMik7blswXT05O3ZhciBzPXYoKSx1PXYoWzFdKSxwPXYoWzU2MTI5LDFdKSxjPXYoWzMwODgzLDQ5NTMsMTk5MTQsMzAxODcsNTU0NjcsMTY3MDUsMjYzNywxMTIsNTk1NDQsMzA1ODUsMTY1MDUsMzYwMzksNjUxMzksMTExMTksMjc4ODYsMjA5OTVdKSx5PXYoWzYxNzg1LDk5MDYsMzk4MjgsNjAzNzQsNDUzOTgsMzM0MTEsNTI3NCwyMjQsNTM1NTIsNjExNzEsMzMwMTAsNjU0Miw2NDc0MywyMjIzOSw1NTc3Miw5MjIyXSksZT12KFs1NDU1NCwzNjY0NSwxMTYxNiw1MTU0Miw0MjkzMCwzODE4MSw1MTA0MCwyNjkyNCw1NjQxMiw2NDk4Miw1NzkwNSw0OTMxNiwyMTUwMiw1MjU5MCwxNDAzNSw4NTUzXSksYT12KFsyNjIwMCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNF0pLGw9dihbNDExMzYsMTg5NTgsNjk1MSw1MDQxNCw1ODQ4OCw0NDMzNSw2MTUwLDEyMDk5LDU1MjA3LDE1ODY3LDE1MywxMTA4NSw1NzA5OSwyMDQxNyw5MzQ0LDExMTM5XSk7ZnVuY3Rpb24gZihyLHQsbixlKXtyW3RdPW4+PjI0JjI1NSxyW3QrMV09bj4+MTYmMjU1LHJbdCsyXT1uPj44JjI1NSxyW3QrM109MjU1Jm4sclt0KzRdPWU+PjI0JjI1NSxyW3QrNV09ZT4+MTYmMjU1LHJbdCs2XT1lPj44JjI1NSxyW3QrN109MjU1JmV9ZnVuY3Rpb24gdyhyLHQsbixlLG8pe3ZhciBpLGg9MDtmb3IoaT0wO2k8bztpKyspaHw9clt0K2ldXm5bZStpXTtyZXR1cm4oMSZoLTE+Pj44KS0xfWZ1bmN0aW9uIGIocix0LG4sZSl7cmV0dXJuIHcocix0LG4sZSwxNil9ZnVuY3Rpb24gZyhyLHQsbixlKXtyZXR1cm4gdyhyLHQsbixlLDMyKX1mdW5jdGlvbiBBKHIsdCxuLGUpeyFmdW5jdGlvbihyLHQsbixlKXtmb3IodmFyIG8saT0yNTUmZVswXXwoMjU1JmVbMV0pPDw4fCgyNTUmZVsyXSk8PDE2fCgyNTUmZVszXSk8PDI0LGg9MjU1Jm5bMF18KDI1NSZuWzFdKTw8OHwoMjU1Jm5bMl0pPDwxNnwoMjU1Jm5bM10pPDwyNCxhPTI1NSZuWzRdfCgyNTUmbls1XSk8PDh8KDI1NSZuWzZdKTw8MTZ8KDI1NSZuWzddKTw8MjQsZj0yNTUmbls4XXwoMjU1Jm5bOV0pPDw4fCgyNTUmblsxMF0pPDwxNnwoMjU1Jm5bMTFdKTw8MjQscz0yNTUmblsxMl18KDI1NSZuWzEzXSk8PDh8KDI1NSZuWzE0XSk8PDE2fCgyNTUmblsxNV0pPDwyNCx1PTI1NSZlWzRdfCgyNTUmZVs1XSk8PDh8KDI1NSZlWzZdKTw8MTZ8KDI1NSZlWzddKTw8MjQsYz0yNTUmdFswXXwoMjU1JnRbMV0pPDw4fCgyNTUmdFsyXSk8PDE2fCgyNTUmdFszXSk8PDI0LHk9MjU1JnRbNF18KDI1NSZ0WzVdKTw8OHwoMjU1JnRbNl0pPDwxNnwoMjU1JnRbN10pPDwyNCxsPTI1NSZ0WzhdfCgyNTUmdFs5XSk8PDh8KDI1NSZ0WzEwXSk8PDE2fCgyNTUmdFsxMV0pPDwyNCx3PTI1NSZ0WzEyXXwoMjU1JnRbMTNdKTw8OHwoMjU1JnRbMTRdKTw8MTZ8KDI1NSZ0WzE1XSk8PDI0LHY9MjU1JmVbOF18KDI1NSZlWzldKTw8OHwoMjU1JmVbMTBdKTw8MTZ8KDI1NSZlWzExXSk8PDI0LHA9MjU1Jm5bMTZdfCgyNTUmblsxN10pPDw4fCgyNTUmblsxOF0pPDwxNnwoMjU1Jm5bMTldKTw8MjQsYj0yNTUmblsyMF18KDI1NSZuWzIxXSk8PDh8KDI1NSZuWzIyXSk8PDE2fCgyNTUmblsyM10pPDwyNCxnPTI1NSZuWzI0XXwoMjU1Jm5bMjVdKTw8OHwoMjU1Jm5bMjZdKTw8MTZ8KDI1NSZuWzI3XSk8PDI0LEE9MjU1Jm5bMjhdfCgyNTUmblsyOV0pPDw4fCgyNTUmblszMF0pPDwxNnwoMjU1Jm5bMzFdKTw8MjQsXz0yNTUmZVsxMl18KDI1NSZlWzEzXSk8PDh8KDI1NSZlWzE0XSk8PDE2fCgyNTUmZVsxNV0pPDwyNCxVPWksZD1oLEU9YSx4PWYsTT1zLG09dSxCPWMsUz15LGs9bCxLPXcsWT12LEw9cCxUPWIsej1nLFI9QSxQPV8sTj0wO048MjA7Tis9MilVXj0obz0oVF49KG89KGtePShvPShNXj0obz1VK1R8MCk8PDd8bz4+PjI1KStVfDApPDw5fG8+Pj4yMykrTXwwKTw8MTN8bz4+PjE5KStrfDApPDwxOHxvPj4+MTQsbV49KG89KGRePShvPSh6Xj0obz0oS149KG89bStkfDApPDw3fG8+Pj4yNSkrbXwwKTw8OXxvPj4+MjMpK0t8MCk8PDEzfG8+Pj4xOSkrenwwKTw8MTh8bz4+PjE0LFlePShvPShCXj0obz0oRV49KG89KFJePShvPVkrQnwwKTw8N3xvPj4+MjUpK1l8MCk8PDl8bz4+PjIzKStSfDApPDwxM3xvPj4+MTkpK0V8MCk8PDE4fG8+Pj4xNCxQXj0obz0oTF49KG89KFNePShvPSh4Xj0obz1QK0x8MCk8PDd8bz4+PjI1KStQfDApPDw5fG8+Pj4yMykreHwwKTw8MTN8bz4+PjE5KStTfDApPDwxOHxvPj4+MTQsVV49KG89KHhePShvPShFXj0obz0oZF49KG89VSt4fDApPDw3fG8+Pj4yNSkrVXwwKTw8OXxvPj4+MjMpK2R8MCk8PDEzfG8+Pj4xOSkrRXwwKTw8MTh8bz4+PjE0LG1ePShvPShNXj0obz0oU149KG89KEJePShvPW0rTXwwKTw8N3xvPj4+MjUpK218MCk8PDl8bz4+PjIzKStCfDApPDwxM3xvPj4+MTkpK1N8MCk8PDE4fG8+Pj4xNCxZXj0obz0oS149KG89KGtePShvPShMXj0obz1ZK0t8MCk8PDd8bz4+PjI1KStZfDApPDw5fG8+Pj4yMykrTHwwKTw8MTN8bz4+PjE5KStrfDApPDwxOHxvPj4+MTQsUF49KG89KFJePShvPSh6Xj0obz0oVF49KG89UCtSfDApPDw3fG8+Pj4yNSkrUHwwKTw8OXxvPj4+MjMpK1R8MCk8PDEzfG8+Pj4xOSkrenwwKTw8MTh8bz4+PjE0O1U9VStpfDAsZD1kK2h8MCxFPUUrYXwwLHg9eCtmfDAsTT1NK3N8MCxtPW0rdXwwLEI9QitjfDAsUz1TK3l8MCxrPWsrbHwwLEs9Syt3fDAsWT1ZK3Z8MCxMPUwrcHwwLFQ9VCtifDAsej16K2d8MCxSPVIrQXwwLFA9UCtffDAsclswXT1VPj4+MCYyNTUsclsxXT1VPj4+OCYyNTUsclsyXT1VPj4+MTYmMjU1LHJbM109VT4+PjI0JjI1NSxyWzRdPWQ+Pj4wJjI1NSxyWzVdPWQ+Pj44JjI1NSxyWzZdPWQ+Pj4xNiYyNTUscls3XT1kPj4+MjQmMjU1LHJbOF09RT4+PjAmMjU1LHJbOV09RT4+PjgmMjU1LHJbMTBdPUU+Pj4xNiYyNTUsclsxMV09RT4+PjI0JjI1NSxyWzEyXT14Pj4+MCYyNTUsclsxM109eD4+PjgmMjU1LHJbMTRdPXg+Pj4xNiYyNTUsclsxNV09eD4+PjI0JjI1NSxyWzE2XT1NPj4+MCYyNTUsclsxN109TT4+PjgmMjU1LHJbMThdPU0+Pj4xNiYyNTUsclsxOV09TT4+PjI0JjI1NSxyWzIwXT1tPj4+MCYyNTUsclsyMV09bT4+PjgmMjU1LHJbMjJdPW0+Pj4xNiYyNTUsclsyM109bT4+PjI0JjI1NSxyWzI0XT1CPj4+MCYyNTUsclsyNV09Qj4+PjgmMjU1LHJbMjZdPUI+Pj4xNiYyNTUsclsyN109Qj4+PjI0JjI1NSxyWzI4XT1TPj4+MCYyNTUsclsyOV09Uz4+PjgmMjU1LHJbMzBdPVM+Pj4xNiYyNTUsclszMV09Uz4+PjI0JjI1NSxyWzMyXT1rPj4+MCYyNTUsclszM109az4+PjgmMjU1LHJbMzRdPWs+Pj4xNiYyNTUsclszNV09az4+PjI0JjI1NSxyWzM2XT1LPj4+MCYyNTUsclszN109Sz4+PjgmMjU1LHJbMzhdPUs+Pj4xNiYyNTUsclszOV09Sz4+PjI0JjI1NSxyWzQwXT1ZPj4+MCYyNTUscls0MV09WT4+PjgmMjU1LHJbNDJdPVk+Pj4xNiYyNTUscls0M109WT4+PjI0JjI1NSxyWzQ0XT1MPj4+MCYyNTUscls0NV09TD4+PjgmMjU1LHJbNDZdPUw+Pj4xNiYyNTUscls0N109TD4+PjI0JjI1NSxyWzQ4XT1UPj4+MCYyNTUscls0OV09VD4+PjgmMjU1LHJbNTBdPVQ+Pj4xNiYyNTUscls1MV09VD4+PjI0JjI1NSxyWzUyXT16Pj4+MCYyNTUscls1M109ej4+PjgmMjU1LHJbNTRdPXo+Pj4xNiYyNTUscls1NV09ej4+PjI0JjI1NSxyWzU2XT1SPj4+MCYyNTUscls1N109Uj4+PjgmMjU1LHJbNThdPVI+Pj4xNiYyNTUscls1OV09Uj4+PjI0JjI1NSxyWzYwXT1QPj4+MCYyNTUscls2MV09UD4+PjgmMjU1LHJbNjJdPVA+Pj4xNiYyNTUscls2M109UD4+PjI0JjI1NX0ocix0LG4sZSl9ZnVuY3Rpb24gXyhyLHQsbixlKXshZnVuY3Rpb24ocix0LG4sZSl7Zm9yKHZhciBvLGk9MjU1JmVbMF18KDI1NSZlWzFdKTw8OHwoMjU1JmVbMl0pPDwxNnwoMjU1JmVbM10pPDwyNCxoPTI1NSZuWzBdfCgyNTUmblsxXSk8PDh8KDI1NSZuWzJdKTw8MTZ8KDI1NSZuWzNdKTw8MjQsYT0yNTUmbls0XXwoMjU1Jm5bNV0pPDw4fCgyNTUmbls2XSk8PDE2fCgyNTUmbls3XSk8PDI0LGY9MjU1Jm5bOF18KDI1NSZuWzldKTw8OHwoMjU1Jm5bMTBdKTw8MTZ8KDI1NSZuWzExXSk8PDI0LHM9MjU1Jm5bMTJdfCgyNTUmblsxM10pPDw4fCgyNTUmblsxNF0pPDwxNnwoMjU1Jm5bMTVdKTw8MjQsdT0yNTUmZVs0XXwoMjU1JmVbNV0pPDw4fCgyNTUmZVs2XSk8PDE2fCgyNTUmZVs3XSk8PDI0LGM9MjU1JnRbMF18KDI1NSZ0WzFdKTw8OHwoMjU1JnRbMl0pPDwxNnwoMjU1JnRbM10pPDwyNCx5PTI1NSZ0WzRdfCgyNTUmdFs1XSk8PDh8KDI1NSZ0WzZdKTw8MTZ8KDI1NSZ0WzddKTw8MjQsbD0yNTUmdFs4XXwoMjU1JnRbOV0pPDw4fCgyNTUmdFsxMF0pPDwxNnwoMjU1JnRbMTFdKTw8MjQsdz0yNTUmdFsxMl18KDI1NSZ0WzEzXSk8PDh8KDI1NSZ0WzE0XSk8PDE2fCgyNTUmdFsxNV0pPDwyNCx2PTI1NSZlWzhdfCgyNTUmZVs5XSk8PDh8KDI1NSZlWzEwXSk8PDE2fCgyNTUmZVsxMV0pPDwyNCxwPTI1NSZuWzE2XXwoMjU1Jm5bMTddKTw8OHwoMjU1Jm5bMThdKTw8MTZ8KDI1NSZuWzE5XSk8PDI0LGI9MjU1Jm5bMjBdfCgyNTUmblsyMV0pPDw4fCgyNTUmblsyMl0pPDwxNnwoMjU1Jm5bMjNdKTw8MjQsZz0yNTUmblsyNF18KDI1NSZuWzI1XSk8PDh8KDI1NSZuWzI2XSk8PDE2fCgyNTUmblsyN10pPDwyNCxBPTI1NSZuWzI4XXwoMjU1Jm5bMjldKTw8OHwoMjU1Jm5bMzBdKTw8MTZ8KDI1NSZuWzMxXSk8PDI0LF89MjU1JmVbMTJdfCgyNTUmZVsxM10pPDw4fCgyNTUmZVsxNF0pPDwxNnwoMjU1JmVbMTVdKTw8MjQsVT0wO1U8MjA7VSs9MilpXj0obz0oYl49KG89KGxePShvPShzXj0obz1pK2J8MCk8PDd8bz4+PjI1KStpfDApPDw5fG8+Pj4yMykrc3wwKTw8MTN8bz4+PjE5KStsfDApPDwxOHxvPj4+MTQsdV49KG89KGhePShvPShnXj0obz0od149KG89dStofDApPDw3fG8+Pj4yNSkrdXwwKTw8OXxvPj4+MjMpK3d8MCk8PDEzfG8+Pj4xOSkrZ3wwKTw8MTh8bz4+PjE0LHZePShvPShjXj0obz0oYV49KG89KEFePShvPXYrY3wwKTw8N3xvPj4+MjUpK3Z8MCk8PDl8bz4+PjIzKStBfDApPDwxM3xvPj4+MTkpK2F8MCk8PDE4fG8+Pj4xNCxfXj0obz0ocF49KG89KHlePShvPShmXj0obz1fK3B8MCk8PDd8bz4+PjI1KStffDApPDw5fG8+Pj4yMykrZnwwKTw8MTN8bz4+PjE5KSt5fDApPDwxOHxvPj4+MTQsaV49KG89KGZePShvPShhXj0obz0oaF49KG89aStmfDApPDw3fG8+Pj4yNSkraXwwKTw8OXxvPj4+MjMpK2h8MCk8PDEzfG8+Pj4xOSkrYXwwKTw8MTh8bz4+PjE0LHVePShvPShzXj0obz0oeV49KG89KGNePShvPXUrc3wwKTw8N3xvPj4+MjUpK3V8MCk8PDl8bz4+PjIzKStjfDApPDwxM3xvPj4+MTkpK3l8MCk8PDE4fG8+Pj4xNCx2Xj0obz0od149KG89KGxePShvPShwXj0obz12K3d8MCk8PDd8bz4+PjI1KSt2fDApPDw5fG8+Pj4yMykrcHwwKTw8MTN8bz4+PjE5KStsfDApPDwxOHxvPj4+MTQsX149KG89KEFePShvPShnXj0obz0oYl49KG89XytBfDApPDw3fG8+Pj4yNSkrX3wwKTw8OXxvPj4+MjMpK2J8MCk8PDEzfG8+Pj4xOSkrZ3wwKTw8MTh8bz4+PjE0O3JbMF09aT4+PjAmMjU1LHJbMV09aT4+PjgmMjU1LHJbMl09aT4+PjE2JjI1NSxyWzNdPWk+Pj4yNCYyNTUscls0XT11Pj4+MCYyNTUscls1XT11Pj4+OCYyNTUscls2XT11Pj4+MTYmMjU1LHJbN109dT4+PjI0JjI1NSxyWzhdPXY+Pj4wJjI1NSxyWzldPXY+Pj44JjI1NSxyWzEwXT12Pj4+MTYmMjU1LHJbMTFdPXY+Pj4yNCYyNTUsclsxMl09Xz4+PjAmMjU1LHJbMTNdPV8+Pj44JjI1NSxyWzE0XT1fPj4+MTYmMjU1LHJbMTVdPV8+Pj4yNCYyNTUsclsxNl09Yz4+PjAmMjU1LHJbMTddPWM+Pj44JjI1NSxyWzE4XT1jPj4+MTYmMjU1LHJbMTldPWM+Pj4yNCYyNTUsclsyMF09eT4+PjAmMjU1LHJbMjFdPXk+Pj44JjI1NSxyWzIyXT15Pj4+MTYmMjU1LHJbMjNdPXk+Pj4yNCYyNTUsclsyNF09bD4+PjAmMjU1LHJbMjVdPWw+Pj44JjI1NSxyWzI2XT1sPj4+MTYmMjU1LHJbMjddPWw+Pj4yNCYyNTUsclsyOF09dz4+PjAmMjU1LHJbMjldPXc+Pj44JjI1NSxyWzMwXT13Pj4+MTYmMjU1LHJbMzFdPXc+Pj4yNCYyNTV9KHIsdCxuLGUpfXZhciBVPW5ldyBVaW50OEFycmF5KFsxMDEsMTIwLDExMiw5NywxMTAsMTAwLDMyLDUxLDUwLDQ1LDk4LDEyMSwxMTYsMTAxLDMyLDEwN10pO2Z1bmN0aW9uIGQocix0LG4sZSxvLGksaCl7dmFyIGEsZixzPW5ldyBVaW50OEFycmF5KDE2KSx1PW5ldyBVaW50OEFycmF5KDY0KTtmb3IoZj0wO2Y8MTY7ZisrKXNbZl09MDtmb3IoZj0wO2Y8ODtmKyspc1tmXT1pW2ZdO2Zvcig7NjQ8PW87KXtmb3IoQSh1LHMsaCxVKSxmPTA7Zjw2NDtmKyspclt0K2ZdPW5bZStmXV51W2ZdO2ZvcihhPTEsZj04O2Y8MTY7ZisrKWE9YSsoMjU1JnNbZl0pfDAsc1tmXT0yNTUmYSxhPj4+PTg7by09NjQsdCs9NjQsZSs9NjR9aWYoMDxvKWZvcihBKHUscyxoLFUpLGY9MDtmPG87ZisrKXJbdCtmXT1uW2UrZl1edVtmXTtyZXR1cm4gMH1mdW5jdGlvbiBFKHIsdCxuLGUsbyl7dmFyIGksaCxhPW5ldyBVaW50OEFycmF5KDE2KSxmPW5ldyBVaW50OEFycmF5KDY0KTtmb3IoaD0wO2g8MTY7aCsrKWFbaF09MDtmb3IoaD0wO2g8ODtoKyspYVtoXT1lW2hdO2Zvcig7NjQ8PW47KXtmb3IoQShmLGEsbyxVKSxoPTA7aDw2NDtoKyspclt0K2hdPWZbaF07Zm9yKGk9MSxoPTg7aDwxNjtoKyspaT1pKygyNTUmYVtoXSl8MCxhW2hdPTI1NSZpLGk+Pj49ODtuLT02NCx0Kz02NH1pZigwPG4pZm9yKEEoZixhLG8sVSksaD0wO2g8bjtoKyspclt0K2hdPWZbaF07cmV0dXJuIDB9ZnVuY3Rpb24geChyLHQsbixlLG8pe3ZhciBpPW5ldyBVaW50OEFycmF5KDMyKTtfKGksZSxvLFUpO2Zvcih2YXIgaD1uZXcgVWludDhBcnJheSg4KSxhPTA7YTw4O2ErKyloW2FdPWVbYSsxNl07cmV0dXJuIEUocix0LG4saCxpKX1mdW5jdGlvbiBNKHIsdCxuLGUsbyxpLGgpe3ZhciBhPW5ldyBVaW50OEFycmF5KDMyKTtfKGEsaSxoLFUpO2Zvcih2YXIgZj1uZXcgVWludDhBcnJheSg4KSxzPTA7czw4O3MrKylmW3NdPWlbcysxNl07cmV0dXJuIGQocix0LG4sZSxvLGYsYSl9dmFyIG09ZnVuY3Rpb24ocil7dmFyIHQsbixlLG8saSxoLGEsZjt0aGlzLmJ1ZmZlcj1uZXcgVWludDhBcnJheSgxNiksdGhpcy5yPW5ldyBVaW50MTZBcnJheSgxMCksdGhpcy5oPW5ldyBVaW50MTZBcnJheSgxMCksdGhpcy5wYWQ9bmV3IFVpbnQxNkFycmF5KDgpLHRoaXMubGVmdG92ZXI9MCx0PTI1NSZyW3RoaXMuZmluPTBdfCgyNTUmclsxXSk8PDgsdGhpcy5yWzBdPTgxOTEmdCxuPTI1NSZyWzJdfCgyNTUmclszXSk8PDgsdGhpcy5yWzFdPTgxOTEmKHQ+Pj4xM3xuPDwzKSxlPTI1NSZyWzRdfCgyNTUmcls1XSk8PDgsdGhpcy5yWzJdPTc5MzkmKG4+Pj4xMHxlPDw2KSxvPTI1NSZyWzZdfCgyNTUmcls3XSk8PDgsdGhpcy5yWzNdPTgxOTEmKGU+Pj43fG88PDkpLGk9MjU1JnJbOF18KDI1NSZyWzldKTw8OCx0aGlzLnJbNF09MjU1JihvPj4+NHxpPDwxMiksdGhpcy5yWzVdPWk+Pj4xJjgxOTAsaD0yNTUmclsxMF18KDI1NSZyWzExXSk8PDgsdGhpcy5yWzZdPTgxOTEmKGk+Pj4xNHxoPDwyKSxhPTI1NSZyWzEyXXwoMjU1JnJbMTNdKTw8OCx0aGlzLnJbN109ODA2NSYoaD4+PjExfGE8PDUpLGY9MjU1JnJbMTRdfCgyNTUmclsxNV0pPDw4LHRoaXMucls4XT04MTkxJihhPj4+OHxmPDw4KSx0aGlzLnJbOV09Zj4+PjUmMTI3LHRoaXMucGFkWzBdPTI1NSZyWzE2XXwoMjU1JnJbMTddKTw8OCx0aGlzLnBhZFsxXT0yNTUmclsxOF18KDI1NSZyWzE5XSk8PDgsdGhpcy5wYWRbMl09MjU1JnJbMjBdfCgyNTUmclsyMV0pPDw4LHRoaXMucGFkWzNdPTI1NSZyWzIyXXwoMjU1JnJbMjNdKTw8OCx0aGlzLnBhZFs0XT0yNTUmclsyNF18KDI1NSZyWzI1XSk8PDgsdGhpcy5wYWRbNV09MjU1JnJbMjZdfCgyNTUmclsyN10pPDw4LHRoaXMucGFkWzZdPTI1NSZyWzI4XXwoMjU1JnJbMjldKTw8OCx0aGlzLnBhZFs3XT0yNTUmclszMF18KDI1NSZyWzMxXSk8PDh9O2Z1bmN0aW9uIEIocix0LG4sZSxvLGkpe3ZhciBoPW5ldyBtKGkpO3JldHVybiBoLnVwZGF0ZShuLGUsbyksaC5maW5pc2gocix0KSwwfWZ1bmN0aW9uIFMocix0LG4sZSxvLGkpe3ZhciBoPW5ldyBVaW50OEFycmF5KDE2KTtyZXR1cm4gQihoLDAsbixlLG8saSksYihyLHQsaCwwKX1mdW5jdGlvbiBrKHIsdCxuLGUsbyl7dmFyIGk7aWYobjwzMilyZXR1cm4tMTtmb3IoTShyLDAsdCwwLG4sZSxvKSxCKHIsMTYsciwzMixuLTMyLHIpLGk9MDtpPDE2O2krKylyW2ldPTA7cmV0dXJuIDB9ZnVuY3Rpb24gSyhyLHQsbixlLG8pe3ZhciBpLGg9bmV3IFVpbnQ4QXJyYXkoMzIpO2lmKG48MzIpcmV0dXJuLTE7aWYoeChoLDAsMzIsZSxvKSwwIT09Uyh0LDE2LHQsMzIsbi0zMixoKSlyZXR1cm4tMTtmb3IoTShyLDAsdCwwLG4sZSxvKSxpPTA7aTwzMjtpKyspcltpXT0wO3JldHVybiAwfWZ1bmN0aW9uIFkocix0KXt2YXIgbjtmb3Iobj0wO248MTY7bisrKXJbbl09MHx0W25dfWZ1bmN0aW9uIEwocil7dmFyIHQsbixlPTE7Zm9yKHQ9MDt0PDE2O3QrKyluPXJbdF0rZSs2NTUzNSxlPU1hdGguZmxvb3Iobi82NTUzNiksclt0XT1uLTY1NTM2KmU7clswXSs9ZS0xKzM3KihlLTEpfWZ1bmN0aW9uIFQocix0LG4pe2Zvcih2YXIgZSxvPX4obi0xKSxpPTA7aTwxNjtpKyspZT1vJihyW2ldXnRbaV0pLHJbaV1ePWUsdFtpXV49ZX1mdW5jdGlvbiB6KHIsdCl7dmFyIG4sZSxvLGk9digpLGg9digpO2ZvcihuPTA7bjwxNjtuKyspaFtuXT10W25dO2ZvcihMKGgpLEwoaCksTChoKSxlPTA7ZTwyO2UrKyl7Zm9yKGlbMF09aFswXS02NTUxNyxuPTE7bjwxNTtuKyspaVtuXT1oW25dLTY1NTM1LShpW24tMV0+PjE2JjEpLGlbbi0xXSY9NjU1MzU7aVsxNV09aFsxNV0tMzI3NjctKGlbMTRdPj4xNiYxKSxvPWlbMTVdPj4xNiYxLGlbMTRdJj02NTUzNSxUKGgsaSwxLW8pfWZvcihuPTA7bjwxNjtuKyspclsyKm5dPTI1NSZoW25dLHJbMipuKzFdPWhbbl0+Pjh9ZnVuY3Rpb24gUihyLHQpe3ZhciBuPW5ldyBVaW50OEFycmF5KDMyKSxlPW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4geihuLHIpLHooZSx0KSxnKG4sMCxlLDApfWZ1bmN0aW9uIFAocil7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiB6KHQsciksMSZ0WzBdfWZ1bmN0aW9uIE4ocix0KXt2YXIgbjtmb3Iobj0wO248MTY7bisrKXJbbl09dFsyKm5dKyh0WzIqbisxXTw8OCk7clsxNV0mPTMyNzY3fWZ1bmN0aW9uIE8ocix0LG4pe2Zvcih2YXIgZT0wO2U8MTY7ZSsrKXJbZV09dFtlXStuW2VdfWZ1bmN0aW9uIEMocix0LG4pe2Zvcih2YXIgZT0wO2U8MTY7ZSsrKXJbZV09dFtlXS1uW2VdfWZ1bmN0aW9uIEYocix0LG4pe3ZhciBlLG8saT0wLGg9MCxhPTAsZj0wLHM9MCx1PTAsYz0wLHk9MCxsPTAsdz0wLHY9MCxwPTAsYj0wLGc9MCxBPTAsXz0wLFU9MCxkPTAsRT0wLHg9MCxNPTAsbT0wLEI9MCxTPTAsaz0wLEs9MCxZPTAsTD0wLFQ9MCx6PTAsUj0wLFA9blswXSxOPW5bMV0sTz1uWzJdLEM9blszXSxGPW5bNF0sST1uWzVdLFo9bls2XSxHPW5bN10scT1uWzhdLEQ9bls5XSxWPW5bMTBdLFg9blsxMV0saj1uWzEyXSxIPW5bMTNdLEo9blsxNF0sUT1uWzE1XTtpKz0oZT10WzBdKSpQLGgrPWUqTixhKz1lKk8sZis9ZSpDLHMrPWUqRix1Kz1lKkksYys9ZSpaLHkrPWUqRyxsKz1lKnEsdys9ZSpELHYrPWUqVixwKz1lKlgsYis9ZSpqLGcrPWUqSCxBKz1lKkosXys9ZSpRLGgrPShlPXRbMV0pKlAsYSs9ZSpOLGYrPWUqTyxzKz1lKkMsdSs9ZSpGLGMrPWUqSSx5Kz1lKlosbCs9ZSpHLHcrPWUqcSx2Kz1lKkQscCs9ZSpWLGIrPWUqWCxnKz1lKmosQSs9ZSpILF8rPWUqSixVKz1lKlEsYSs9KGU9dFsyXSkqUCxmKz1lKk4scys9ZSpPLHUrPWUqQyxjKz1lKkYseSs9ZSpJLGwrPWUqWix3Kz1lKkcsdis9ZSpxLHArPWUqRCxiKz1lKlYsZys9ZSpYLEErPWUqaixfKz1lKkgsVSs9ZSpKLGQrPWUqUSxmKz0oZT10WzNdKSpQLHMrPWUqTix1Kz1lKk8sYys9ZSpDLHkrPWUqRixsKz1lKkksdys9ZSpaLHYrPWUqRyxwKz1lKnEsYis9ZSpELGcrPWUqVixBKz1lKlgsXys9ZSpqLFUrPWUqSCxkKz1lKkosRSs9ZSpRLHMrPShlPXRbNF0pKlAsdSs9ZSpOLGMrPWUqTyx5Kz1lKkMsbCs9ZSpGLHcrPWUqSSx2Kz1lKloscCs9ZSpHLGIrPWUqcSxnKz1lKkQsQSs9ZSpWLF8rPWUqWCxVKz1lKmosZCs9ZSpILEUrPWUqSix4Kz1lKlEsdSs9KGU9dFs1XSkqUCxjKz1lKk4seSs9ZSpPLGwrPWUqQyx3Kz1lKkYsdis9ZSpJLHArPWUqWixiKz1lKkcsZys9ZSpxLEErPWUqRCxfKz1lKlYsVSs9ZSpYLGQrPWUqaixFKz1lKkgseCs9ZSpKLE0rPWUqUSxjKz0oZT10WzZdKSpQLHkrPWUqTixsKz1lKk8sdys9ZSpDLHYrPWUqRixwKz1lKkksYis9ZSpaLGcrPWUqRyxBKz1lKnEsXys9ZSpELFUrPWUqVixkKz1lKlgsRSs9ZSpqLHgrPWUqSCxNKz1lKkosbSs9ZSpRLHkrPShlPXRbN10pKlAsbCs9ZSpOLHcrPWUqTyx2Kz1lKkMscCs9ZSpGLGIrPWUqSSxnKz1lKlosQSs9ZSpHLF8rPWUqcSxVKz1lKkQsZCs9ZSpWLEUrPWUqWCx4Kz1lKmosTSs9ZSpILG0rPWUqSixCKz1lKlEsbCs9KGU9dFs4XSkqUCx3Kz1lKk4sdis9ZSpPLHArPWUqQyxiKz1lKkYsZys9ZSpJLEErPWUqWixfKz1lKkcsVSs9ZSpxLGQrPWUqRCxFKz1lKlYseCs9ZSpYLE0rPWUqaixtKz1lKkgsQis9ZSpKLFMrPWUqUSx3Kz0oZT10WzldKSpQLHYrPWUqTixwKz1lKk8sYis9ZSpDLGcrPWUqRixBKz1lKkksXys9ZSpaLFUrPWUqRyxkKz1lKnEsRSs9ZSpELHgrPWUqVixNKz1lKlgsbSs9ZSpqLEIrPWUqSCxTKz1lKkosays9ZSpRLHYrPShlPXRbMTBdKSpQLHArPWUqTixiKz1lKk8sZys9ZSpDLEErPWUqRixfKz1lKkksVSs9ZSpaLGQrPWUqRyxFKz1lKnEseCs9ZSpELE0rPWUqVixtKz1lKlgsQis9ZSpqLFMrPWUqSCxrKz1lKkosSys9ZSpRLHArPShlPXRbMTFdKSpQLGIrPWUqTixnKz1lKk8sQSs9ZSpDLF8rPWUqRixVKz1lKkksZCs9ZSpaLEUrPWUqRyx4Kz1lKnEsTSs9ZSpELG0rPWUqVixCKz1lKlgsUys9ZSpqLGsrPWUqSCxLKz1lKkosWSs9ZSpRLGIrPShlPXRbMTJdKSpQLGcrPWUqTixBKz1lKk8sXys9ZSpDLFUrPWUqRixkKz1lKkksRSs9ZSpaLHgrPWUqRyxNKz1lKnEsbSs9ZSpELEIrPWUqVixTKz1lKlgsays9ZSpqLEsrPWUqSCxZKz1lKkosTCs9ZSpRLGcrPShlPXRbMTNdKSpQLEErPWUqTixfKz1lKk8sVSs9ZSpDLGQrPWUqRixFKz1lKkkseCs9ZSpaLE0rPWUqRyxtKz1lKnEsQis9ZSpELFMrPWUqVixrKz1lKlgsSys9ZSpqLFkrPWUqSCxMKz1lKkosVCs9ZSpRLEErPShlPXRbMTRdKSpQLF8rPWUqTixVKz1lKk8sZCs9ZSpDLEUrPWUqRix4Kz1lKkksTSs9ZSpaLG0rPWUqRyxCKz1lKnEsUys9ZSpELGsrPWUqVixLKz1lKlgsWSs9ZSpqLEwrPWUqSCxUKz1lKkoseis9ZSpRLF8rPShlPXRbMTVdKSpQLGgrPTM4KihkKz1lKk8pLGErPTM4KihFKz1lKkMpLGYrPTM4Kih4Kz1lKkYpLHMrPTM4KihNKz1lKkkpLHUrPTM4KihtKz1lKlopLGMrPTM4KihCKz1lKkcpLHkrPTM4KihTKz1lKnEpLGwrPTM4KihrKz1lKkQpLHcrPTM4KihLKz1lKlYpLHYrPTM4KihZKz1lKlgpLHArPTM4KihMKz1lKmopLGIrPTM4KihUKz1lKkgpLGcrPTM4Kih6Kz1lKkopLEErPTM4KihSKz1lKlEpLGk9KGU9KGkrPTM4KihVKz1lKk4pKSsobz0xKSs2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaD0oZT1oK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGE9KGU9YStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxmPShlPWYrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkscz0oZT1zK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHU9KGU9dStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxjPShlPWMrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkseT0oZT15K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGw9KGU9bCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSx3PShlPXcrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksdj0oZT12K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHA9KGU9cCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxiPShlPWIrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksZz0oZT1nK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLEE9KGU9QStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxfPShlPV8rbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaT0oZT0oaSs9by0xKzM3KihvLTEpKSsobz0xKSs2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaD0oZT1oK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGE9KGU9YStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxmPShlPWYrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkscz0oZT1zK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHU9KGU9dStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxjPShlPWMrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkseT0oZT15K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGw9KGU9bCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSx3PShlPXcrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksdj0oZT12K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHA9KGU9cCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxiPShlPWIrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksZz0oZT1nK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLEE9KGU9QStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxfPShlPV8rbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaSs9by0xKzM3KihvLTEpLHJbMF09aSxyWzFdPWgsclsyXT1hLHJbM109ZixyWzRdPXMscls1XT11LHJbNl09YyxyWzddPXkscls4XT1sLHJbOV09dyxyWzEwXT12LHJbMTFdPXAsclsxMl09YixyWzEzXT1nLHJbMTRdPUEsclsxNV09X31mdW5jdGlvbiBJKHIsdCl7RihyLHQsdCl9ZnVuY3Rpb24gWihyLHQpe3ZhciBuLGU9digpO2ZvcihuPTA7bjwxNjtuKyspZVtuXT10W25dO2ZvcihuPTI1MzswPD1uO24tLSlJKGUsZSksMiE9PW4mJjQhPT1uJiZGKGUsZSx0KTtmb3Iobj0wO248MTY7bisrKXJbbl09ZVtuXX1mdW5jdGlvbiBHKHIsdCl7dmFyIG4sZT12KCk7Zm9yKG49MDtuPDE2O24rKyllW25dPXRbbl07Zm9yKG49MjUwOzA8PW47bi0tKUkoZSxlKSwxIT09biYmRihlLGUsdCk7Zm9yKG49MDtuPDE2O24rKylyW25dPWVbbl19ZnVuY3Rpb24gcShyLHQsbil7dmFyIGUsbyxpPW5ldyBVaW50OEFycmF5KDMyKSxoPW5ldyBGbG9hdDY0QXJyYXkoODApLGE9digpLGY9digpLHM9digpLHU9digpLGM9digpLHk9digpO2ZvcihvPTA7bzwzMTtvKyspaVtvXT10W29dO2ZvcihpWzMxXT0xMjcmdFszMV18NjQsaVswXSY9MjQ4LE4oaCxuKSxvPTA7bzwxNjtvKyspZltvXT1oW29dLHVbb109YVtvXT1zW29dPTA7Zm9yKGFbMF09dVswXT0xLG89MjU0OzA8PW87LS1vKVQoYSxmLGU9aVtvPj4+M10+Pj4oNyZvKSYxKSxUKHMsdSxlKSxPKGMsYSxzKSxDKGEsYSxzKSxPKHMsZix1KSxDKGYsZix1KSxJKHUsYyksSSh5LGEpLEYoYSxzLGEpLEYocyxmLGMpLE8oYyxhLHMpLEMoYSxhLHMpLEkoZixhKSxDKHMsdSx5KSxGKGEscyxwKSxPKGEsYSx1KSxGKHMscyxhKSxGKGEsdSx5KSxGKHUsZixoKSxJKGYsYyksVChhLGYsZSksVChzLHUsZSk7Zm9yKG89MDtvPDE2O28rKyloW28rMTZdPWFbb10saFtvKzMyXT1zW29dLGhbbys0OF09ZltvXSxoW28rNjRdPXVbb107dmFyIGw9aC5zdWJhcnJheSgzMiksdz1oLnN1YmFycmF5KDE2KTtyZXR1cm4gWihsLGwpLEYodyx3LGwpLHoocix3KSwwfWZ1bmN0aW9uIEQocix0KXtyZXR1cm4gcShyLHQsbil9ZnVuY3Rpb24gVihyLHQpe3JldHVybiBoKHQsMzIpLEQocix0KX1mdW5jdGlvbiBYKHIsdCxuKXt2YXIgZT1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIHEoZSxuLHQpLF8ocixvLGUsVSl9bS5wcm90b3R5cGUuYmxvY2tzPWZ1bmN0aW9uKHIsdCxuKXtmb3IodmFyIGUsbyxpLGgsYSxmLHMsdSxjLHksbCx3LHYscCxiLGcsQSxfLFUsZD10aGlzLmZpbj8wOjIwNDgsRT10aGlzLmhbMF0seD10aGlzLmhbMV0sTT10aGlzLmhbMl0sbT10aGlzLmhbM10sQj10aGlzLmhbNF0sUz10aGlzLmhbNV0saz10aGlzLmhbNl0sSz10aGlzLmhbN10sWT10aGlzLmhbOF0sTD10aGlzLmhbOV0sVD10aGlzLnJbMF0sej10aGlzLnJbMV0sUj10aGlzLnJbMl0sUD10aGlzLnJbM10sTj10aGlzLnJbNF0sTz10aGlzLnJbNV0sQz10aGlzLnJbNl0sRj10aGlzLnJbN10sST10aGlzLnJbOF0sWj10aGlzLnJbOV07MTY8PW47KXk9Yz0wLHkrPShFKz04MTkxJihlPTI1NSZyW3QrMF18KDI1NSZyW3QrMV0pPDw4KSkqVCx5Kz0oeCs9ODE5MSYoZT4+PjEzfChvPTI1NSZyW3QrMl18KDI1NSZyW3QrM10pPDw4KTw8MykpKig1KlopLHkrPShNKz04MTkxJihvPj4+MTB8KGk9MjU1JnJbdCs0XXwoMjU1JnJbdCs1XSk8PDgpPDw2KSkqKDUqSSkseSs9KG0rPTgxOTEmKGk+Pj43fChoPTI1NSZyW3QrNl18KDI1NSZyW3QrN10pPDw4KTw8OSkpKig1KkYpLGM9KHkrPShCKz04MTkxJihoPj4+NHwoYT0yNTUmclt0KzhdfCgyNTUmclt0KzldKTw8OCk8PDEyKSkqKDUqQykpPj4+MTMseSY9ODE5MSx5Kz0oUys9YT4+PjEmODE5MSkqKDUqTykseSs9KGsrPTgxOTEmKGE+Pj4xNHwoZj0yNTUmclt0KzEwXXwoMjU1JnJbdCsxMV0pPDw4KTw8MikpKig1Kk4pLHkrPShLKz04MTkxJihmPj4+MTF8KHM9MjU1JnJbdCsxMl18KDI1NSZyW3QrMTNdKTw8OCk8PDUpKSooNSpQKSx5Kz0oWSs9ODE5MSYocz4+Pjh8KHU9MjU1JnJbdCsxNF18KDI1NSZyW3QrMTVdKTw8OCk8PDgpKSooNSpSKSxsPWMrPSh5Kz0oTCs9dT4+PjV8ZCkqKDUqeikpPj4+MTMsbCs9RSp6LGwrPXgqVCxsKz1NKig1KlopLGwrPW0qKDUqSSksYz0obCs9QiooNSpGKSk+Pj4xMyxsJj04MTkxLGwrPVMqKDUqQyksbCs9ayooNSpPKSxsKz1LKig1Kk4pLGwrPVkqKDUqUCksYys9KGwrPUwqKDUqUikpPj4+MTMsbCY9ODE5MSx3PWMsdys9RSpSLHcrPXgqeix3Kz1NKlQsdys9bSooNSpaKSxjPSh3Kz1CKig1KkkpKT4+PjEzLHcmPTgxOTEsdys9UyooNSpGKSx3Kz1rKig1KkMpLHcrPUsqKDUqTyksdys9WSooNSpOKSx2PWMrPSh3Kz1MKig1KlApKT4+PjEzLHYrPUUqUCx2Kz14KlIsdis9TSp6LHYrPW0qVCxjPSh2Kz1CKig1KlopKT4+PjEzLHYmPTgxOTEsdis9UyooNSpJKSx2Kz1rKig1KkYpLHYrPUsqKDUqQyksdis9WSooNSpPKSxwPWMrPSh2Kz1MKig1Kk4pKT4+PjEzLHArPUUqTixwKz14KlAscCs9TSpSLHArPW0qeixjPShwKz1CKlQpPj4+MTMscCY9ODE5MSxwKz1TKig1KlopLHArPWsqKDUqSSkscCs9SyooNSpGKSxwKz1ZKig1KkMpLGI9Yys9KHArPUwqKDUqTykpPj4+MTMsYis9RSpPLGIrPXgqTixiKz1NKlAsYis9bSpSLGM9KGIrPUIqeik+Pj4xMyxiJj04MTkxLGIrPVMqVCxiKz1rKig1KlopLGIrPUsqKDUqSSksYis9WSooNSpGKSxnPWMrPShiKz1MKig1KkMpKT4+PjEzLGcrPUUqQyxnKz14Kk8sZys9TSpOLGcrPW0qUCxjPShnKz1CKlIpPj4+MTMsZyY9ODE5MSxnKz1TKnosZys9aypULGcrPUsqKDUqWiksZys9WSooNSpJKSxBPWMrPShnKz1MKig1KkYpKT4+PjEzLEErPUUqRixBKz14KkMsQSs9TSpPLEErPW0qTixjPShBKz1CKlApPj4+MTMsQSY9ODE5MSxBKz1TKlIsQSs9ayp6LEErPUsqVCxBKz1ZKig1KlopLF89Yys9KEErPUwqKDUqSSkpPj4+MTMsXys9RSpJLF8rPXgqRixfKz1NKkMsXys9bSpPLGM9KF8rPUIqTik+Pj4xMyxfJj04MTkxLF8rPVMqUCxfKz1rKlIsXys9Syp6LF8rPVkqVCxVPWMrPShfKz1MKig1KlopKT4+PjEzLFUrPUUqWixVKz14KkksVSs9TSpGLFUrPW0qQyxjPShVKz1CKk8pPj4+MTMsVSY9ODE5MSxVKz1TKk4sVSs9aypQLFUrPUsqUixVKz1ZKnosRT15PTgxOTEmKGM9KGM9KChjKz0oVSs9TCpUKT4+PjEzKTw8MikrY3wwKSsoeSY9ODE5MSl8MCkseD1sKz1jPj4+PTEzLE09dyY9ODE5MSxtPXYmPTgxOTEsQj1wJj04MTkxLFM9YiY9ODE5MSxrPWcmPTgxOTEsSz1BJj04MTkxLFk9XyY9ODE5MSxMPVUmPTgxOTEsdCs9MTYsbi09MTY7dGhpcy5oWzBdPUUsdGhpcy5oWzFdPXgsdGhpcy5oWzJdPU0sdGhpcy5oWzNdPW0sdGhpcy5oWzRdPUIsdGhpcy5oWzVdPVMsdGhpcy5oWzZdPWssdGhpcy5oWzddPUssdGhpcy5oWzhdPVksdGhpcy5oWzldPUx9LG0ucHJvdG90eXBlLmZpbmlzaD1mdW5jdGlvbihyLHQpe3ZhciBuLGUsbyxpLGg9bmV3IFVpbnQxNkFycmF5KDEwKTtpZih0aGlzLmxlZnRvdmVyKXtmb3IoaT10aGlzLmxlZnRvdmVyLHRoaXMuYnVmZmVyW2krK109MTtpPDE2O2krKyl0aGlzLmJ1ZmZlcltpXT0wO3RoaXMuZmluPTEsdGhpcy5ibG9ja3ModGhpcy5idWZmZXIsMCwxNil9Zm9yKG49dGhpcy5oWzFdPj4+MTMsdGhpcy5oWzFdJj04MTkxLGk9MjtpPDEwO2krKyl0aGlzLmhbaV0rPW4sbj10aGlzLmhbaV0+Pj4xMyx0aGlzLmhbaV0mPTgxOTE7Zm9yKHRoaXMuaFswXSs9NSpuLG49dGhpcy5oWzBdPj4+MTMsdGhpcy5oWzBdJj04MTkxLHRoaXMuaFsxXSs9bixuPXRoaXMuaFsxXT4+PjEzLHRoaXMuaFsxXSY9ODE5MSx0aGlzLmhbMl0rPW4saFswXT10aGlzLmhbMF0rNSxuPWhbMF0+Pj4xMyxoWzBdJj04MTkxLGk9MTtpPDEwO2krKyloW2ldPXRoaXMuaFtpXStuLG49aFtpXT4+PjEzLGhbaV0mPTgxOTE7Zm9yKGhbOV0tPTgxOTIsZT0oMV5uKS0xLGk9MDtpPDEwO2krKyloW2ldJj1lO2ZvcihlPX5lLGk9MDtpPDEwO2krKyl0aGlzLmhbaV09dGhpcy5oW2ldJmV8aFtpXTtmb3IodGhpcy5oWzBdPTY1NTM1Jih0aGlzLmhbMF18dGhpcy5oWzFdPDwxMyksdGhpcy5oWzFdPTY1NTM1Jih0aGlzLmhbMV0+Pj4zfHRoaXMuaFsyXTw8MTApLHRoaXMuaFsyXT02NTUzNSYodGhpcy5oWzJdPj4+Nnx0aGlzLmhbM108PDcpLHRoaXMuaFszXT02NTUzNSYodGhpcy5oWzNdPj4+OXx0aGlzLmhbNF08PDQpLHRoaXMuaFs0XT02NTUzNSYodGhpcy5oWzRdPj4+MTJ8dGhpcy5oWzVdPDwxfHRoaXMuaFs2XTw8MTQpLHRoaXMuaFs1XT02NTUzNSYodGhpcy5oWzZdPj4+Mnx0aGlzLmhbN108PDExKSx0aGlzLmhbNl09NjU1MzUmKHRoaXMuaFs3XT4+PjV8dGhpcy5oWzhdPDw4KSx0aGlzLmhbN109NjU1MzUmKHRoaXMuaFs4XT4+Pjh8dGhpcy5oWzldPDw1KSxvPXRoaXMuaFswXSt0aGlzLnBhZFswXSx0aGlzLmhbMF09NjU1MzUmbyxpPTE7aTw4O2krKylvPSh0aGlzLmhbaV0rdGhpcy5wYWRbaV18MCkrKG8+Pj4xNil8MCx0aGlzLmhbaV09NjU1MzUmbztyW3QrMF09dGhpcy5oWzBdPj4+MCYyNTUsclt0KzFdPXRoaXMuaFswXT4+PjgmMjU1LHJbdCsyXT10aGlzLmhbMV0+Pj4wJjI1NSxyW3QrM109dGhpcy5oWzFdPj4+OCYyNTUsclt0KzRdPXRoaXMuaFsyXT4+PjAmMjU1LHJbdCs1XT10aGlzLmhbMl0+Pj44JjI1NSxyW3QrNl09dGhpcy5oWzNdPj4+MCYyNTUsclt0KzddPXRoaXMuaFszXT4+PjgmMjU1LHJbdCs4XT10aGlzLmhbNF0+Pj4wJjI1NSxyW3QrOV09dGhpcy5oWzRdPj4+OCYyNTUsclt0KzEwXT10aGlzLmhbNV0+Pj4wJjI1NSxyW3QrMTFdPXRoaXMuaFs1XT4+PjgmMjU1LHJbdCsxMl09dGhpcy5oWzZdPj4+MCYyNTUsclt0KzEzXT10aGlzLmhbNl0+Pj44JjI1NSxyW3QrMTRdPXRoaXMuaFs3XT4+PjAmMjU1LHJbdCsxNV09dGhpcy5oWzddPj4+OCYyNTV9LG0ucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihyLHQsbil7dmFyIGUsbztpZih0aGlzLmxlZnRvdmVyKXtmb3Iobjwobz0xNi10aGlzLmxlZnRvdmVyKSYmKG89biksZT0wO2U8bztlKyspdGhpcy5idWZmZXJbdGhpcy5sZWZ0b3ZlcitlXT1yW3QrZV07aWYobi09byx0Kz1vLHRoaXMubGVmdG92ZXIrPW8sdGhpcy5sZWZ0b3ZlcjwxNilyZXR1cm47dGhpcy5ibG9ja3ModGhpcy5idWZmZXIsMCwxNiksdGhpcy5sZWZ0b3Zlcj0wfWlmKDE2PD1uJiYobz1uLW4lMTYsdGhpcy5ibG9ja3Mocix0LG8pLHQrPW8sbi09byksbil7Zm9yKGU9MDtlPG47ZSsrKXRoaXMuYnVmZmVyW3RoaXMubGVmdG92ZXIrZV09clt0K2VdO3RoaXMubGVmdG92ZXIrPW59fTt2YXIgaj1rLEg9Szt2YXIgSj1bMTExNjM1MjQwOCwzNjA5NzY3NDU4LDE4OTk0NDc0NDEsNjAyODkxNzI1LDMwNDkzMjM0NzEsMzk2NDQ4NDM5OSwzOTIxMDA5NTczLDIxNzMyOTU1NDgsOTYxOTg3MTYzLDQwODE2Mjg0NzIsMTUwODk3MDk5MywzMDUzODM0MjY1LDI0NTM2MzU3NDgsMjkzNzY3MTU3OSwyODcwNzYzMjIxLDM2NjQ2MDk1NjAsMzYyNDM4MTA4MCwyNzM0ODgzMzk0LDMxMDU5ODQwMSwxMTY0OTk2NTQyLDYwNzIyNTI3OCwxMzIzNjEwNzY0LDE0MjY4ODE5ODcsMzU5MDMwNDk5NCwxOTI1MDc4Mzg4LDQwNjgxODIzODMsMjE2MjA3ODIwNiw5OTEzMzYxMTMsMjYxNDg4ODEwMyw2MzM4MDMzMTcsMzI0ODIyMjU4MCwzNDc5Nzc0ODY4LDM4MzUzOTA0MDEsMjY2NjYxMzQ1OCw0MDIyMjI0Nzc0LDk0NDcxMTEzOSwyNjQzNDcwNzgsMjM0MTI2Mjc3Myw2MDQ4MDc2MjgsMjAwNzgwMDkzMyw3NzAyNTU5ODMsMTQ5NTk5MDkwMSwxMjQ5MTUwMTIyLDE4NTY0MzEyMzUsMTU1NTA4MTY5MiwzMTc1MjE4MTMyLDE5OTYwNjQ5ODYsMjE5ODk1MDgzNywyNTU0MjIwODgyLDM5OTk3MTkzMzksMjgyMTgzNDM0OSw3NjY3ODQwMTYsMjk1Mjk5NjgwOCwyNTY2NTk0ODc5LDMyMTAzMTM2NzEsMzIwMzMzNzk1NiwzMzM2NTcxODkxLDEwMzQ0NTcwMjYsMzU4NDUyODcxMSwyNDY2OTQ4OTAxLDExMzkyNjk5MywzNzU4MzI2MzgzLDMzODI0MTg5NSwxNjg3MTc5MzYsNjY2MzA3MjA1LDExODgxNzk5NjQsNzczNTI5OTEyLDE1NDYwNDU3MzQsMTI5NDc1NzM3MiwxNTIyODA1NDg1LDEzOTYxODIyOTEsMjY0MzgzMzgyMywxNjk1MTgzNzAwLDIzNDM1MjczOTAsMTk4NjY2MTA1MSwxMDE0NDc3NDgwLDIxNzcwMjYzNTAsMTIwNjc1OTE0MiwyNDU2OTU2MDM3LDM0NDA3NzYyNywyNzMwNDg1OTIxLDEyOTA4NjM0NjAsMjgyMDMwMjQxMSwzMTU4NDU0MjczLDMyNTk3MzA4MDAsMzUwNTk1MjY1NywzMzQ1NzY0NzcxLDEwNjIxNzAwOCwzNTE2MDY1ODE3LDM2MDYwMDgzNDQsMzYwMDM1MjgwNCwxNDMyNzI1Nzc2LDQwOTQ1NzE5MDksMTQ2NzAzMTU5NCwyNzU0MjMzNDQsODUxMTY5NzIwLDQzMDIyNzczNCwzMTAwODIzNzUyLDUwNjk0ODYxNiwxMzYzMjU4MTk1LDY1OTA2MDU1NiwzNzUwNjg1NTkzLDg4Mzk5Nzg3NywzNzg1MDUwMjgwLDk1ODEzOTU3MSwzMzE4MzA3NDI3LDEzMjI4MjIyMTgsMzgxMjcyMzQwMywxNTM3MDAyMDYzLDIwMDMwMzQ5OTUsMTc0Nzg3Mzc3OSwzNjAyMDM2ODk5LDE5NTU1NjIyMjIsMTU3NTk5MDAxMiwyMDI0MTA0ODE1LDExMjU1OTI5MjgsMjIyNzczMDQ1MiwyNzE2OTA0MzA2LDIzNjE4NTI0MjQsNDQyNzc2MDQ0LDI0Mjg0MzY0NzQsNTkzNjk4MzQ0LDI3NTY3MzQxODcsMzczMzExMDI0OSwzMjA0MDMxNDc5LDI5OTkzNTE1NzMsMzMyOTMyNTI5OCwzODE1OTIwNDI3LDMzOTE1Njk2MTQsMzkyODM4MzkwMCwzNTE1MjY3MjcxLDU2NjI4MDcxMSwzOTQwMTg3NjA2LDM0NTQwNjk1MzQsNDExODYzMDI3MSw0MDAwMjM5OTkyLDExNjQxODQ3NCwxOTE0MTM4NTU0LDE3NDI5MjQyMSwyNzMxMDU1MjcwLDI4OTM4MDM1NiwzMjAzOTkzMDA2LDQ2MDM5MzI2OSwzMjA2MjAzMTUsNjg1NDcxNzMzLDU4NzQ5NjgzNiw4NTIxNDI5NzEsMTA4Njc5Mjg1MSwxMDE3MDM2Mjk4LDM2NTU0MzEwMCwxMTI2MDAwNTgwLDI2MTgyOTc2NzYsMTI4ODAzMzQ3MCwzNDA5ODU1MTU4LDE1MDE1MDU5NDgsNDIzNDUwOTg2NiwxNjA3MTY3OTE1LDk4NzE2NzQ2OCwxODE2NDAyMzE2LDEyNDYxODk1OTFdO2Z1bmN0aW9uIFEocix0LG4sZSl7Zm9yKHZhciBvLGksaCxhLGYscyx1LGMseSxsLHcsdixwLGIsZyxBLF8sVSxkLEUseCxNLG0sQixTPW5ldyBJbnQzMkFycmF5KDE2KSxrPW5ldyBJbnQzMkFycmF5KDE2KSxLPXJbMF0sWT1yWzFdLEw9clsyXSxUPXJbM10sej1yWzRdLFI9cls1XSxQPXJbNl0sTj1yWzddLE89dFswXSxDPXRbMV0sRj10WzJdLEk9dFszXSxaPXRbNF0sRz10WzVdLHE9dFs2XSxEPXRbN10sVj0wOzEyODw9ZTspe2ZvcihfPTA7XzwxNjtfKyspVT04Kl8rVixTW19dPW5bVSswXTw8MjR8bltVKzFdPDwxNnxuW1UrMl08PDh8bltVKzNdLGtbX109bltVKzRdPDwyNHxuW1UrNV08PDE2fG5bVSs2XTw8OHxuW1UrN107Zm9yKF89MDtfPDgwO18rKylpZihvPVksaT1MLGg9VCxjPUMseT1GLGw9SSx4PTY1NTM1JihFPUQpLE09RT4+PjE2LG09NjU1MzUmKGQ9TiksQj1kPj4+MTYseCs9NjU1MzUmKEU9KCh3PVopPj4+MTR8KGE9eik8PDE4KV4oWj4+PjE4fHo8PDE0KV4oej4+Pjl8Wjw8MjMpKSxNKz1FPj4+MTYsbSs9NjU1MzUmKGQ9KHo+Pj4xNHxaPDwxOCleKHo+Pj4xOHxaPDwxNCleKFo+Pj45fHo8PDIzKSksQis9ZD4+PjE2LHgrPTY1NTM1JihFPVomKHY9RyleflomKHA9cSkpLE0rPUU+Pj4xNixtKz02NTUzNSYoZD16JihmPVIpXn56JihzPVApKSxCKz1kPj4+MTYsZD1KWzIqX10seCs9NjU1MzUmKEU9SlsyKl8rMV0pLE0rPUU+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixkPVNbXyUxNl0sTSs9KEU9a1tfJTE2XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixtKz0oTSs9KHgrPTY1NTM1JkUpPj4+MTYpPj4+MTYseD02NTUzNSYoRT1BPTY1NTM1Jnh8TTw8MTYpLE09RT4+PjE2LG09NjU1MzUmKGQ9Zz02NTUzNSZtfChCKz1tPj4+MTYpPDwxNiksQj1kPj4+MTYseCs9NjU1MzUmKEU9KE8+Pj4yOHxLPDw0KV4oSz4+PjJ8Tzw8MzApXihLPj4+N3xPPDwyNSkpLE0rPUU+Pj4xNixtKz02NTUzNSYoZD0oSz4+PjI4fE88PDQpXihPPj4+MnxLPDwzMCleKE8+Pj43fEs8PDI1KSksQis9ZD4+PjE2LE0rPShFPU8mQ15PJkZeQyZGKT4+PjE2LG0rPTY1NTM1JihkPUsmWV5LJkxeWSZMKSxCKz1kPj4+MTYsdT02NTUzNSYobSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KXwoQis9bT4+PjE2KTw8MTYsYj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9bCksTT1FPj4+MTYsbT02NTUzNSYoZD1oKSxCPWQ+Pj4xNixNKz0oRT1BKT4+PjE2LG0rPTY1NTM1JihkPWcpLEIrPWQ+Pj4xNixZPUssTD1vLFQ9aSx6PWg9NjU1MzUmKG0rPShNKz0oeCs9NjU1MzUmRSk+Pj4xNik+Pj4xNil8KEIrPW0+Pj4xNik8PDE2LFI9YSxQPWYsTj1zLEs9dSxDPU8sRj1jLEk9eSxaPWw9NjU1MzUmeHxNPDwxNixHPXcscT12LEQ9cCxPPWIsXyUxNj09MTUpZm9yKFU9MDtVPDE2O1UrKylkPVNbVV0seD02NTUzNSYoRT1rW1VdKSxNPUU+Pj4xNixtPTY1NTM1JmQsQj1kPj4+MTYsZD1TWyhVKzkpJTE2XSx4Kz02NTUzNSYoRT1rWyhVKzkpJTE2XSksTSs9RT4+PjE2LG0rPTY1NTM1JmQsQis9ZD4+PjE2LGc9U1soVSsxKSUxNl0seCs9NjU1MzUmKEU9KChBPWtbKFUrMSklMTZdKT4+PjF8Zzw8MzEpXihBPj4+OHxnPDwyNCleKEE+Pj43fGc8PDI1KSksTSs9RT4+PjE2LG0rPTY1NTM1JihkPShnPj4+MXxBPDwzMSleKGc+Pj44fEE8PDI0KV5nPj4+NyksQis9ZD4+PjE2LGc9U1soVSsxNCklMTZdLE0rPShFPSgoQT1rWyhVKzE0KSUxNl0pPj4+MTl8Zzw8MTMpXihnPj4+Mjl8QTw8MyleKEE+Pj42fGc8PDI2KSk+Pj4xNixtKz02NTUzNSYoZD0oZz4+PjE5fEE8PDEzKV4oQT4+PjI5fGc8PDMpXmc+Pj42KSxCKz1kPj4+MTYsQis9KG0rPShNKz0oeCs9NjU1MzUmRSk+Pj4xNik+Pj4xNik+Pj4xNixTW1VdPTY1NTM1Jm18Qjw8MTYsa1tVXT02NTUzNSZ4fE08PDE2O3g9NjU1MzUmKEU9TyksTT1FPj4+MTYsbT02NTUzNSYoZD1LKSxCPWQ+Pj4xNixkPXJbMF0sTSs9KEU9dFswXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMF09Sz02NTUzNSZtfEI8PDE2LHRbMF09Tz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9QyksTT1FPj4+MTYsbT02NTUzNSYoZD1ZKSxCPWQ+Pj4xNixkPXJbMV0sTSs9KEU9dFsxXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMV09WT02NTUzNSZtfEI8PDE2LHRbMV09Qz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RiksTT1FPj4+MTYsbT02NTUzNSYoZD1MKSxCPWQ+Pj4xNixkPXJbMl0sTSs9KEU9dFsyXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMl09TD02NTUzNSZtfEI8PDE2LHRbMl09Rj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9SSksTT1FPj4+MTYsbT02NTUzNSYoZD1UKSxCPWQ+Pj4xNixkPXJbM10sTSs9KEU9dFszXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbM109VD02NTUzNSZtfEI8PDE2LHRbM109ST02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9WiksTT1FPj4+MTYsbT02NTUzNSYoZD16KSxCPWQ+Pj4xNixkPXJbNF0sTSs9KEU9dFs0XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNF09ej02NTUzNSZtfEI8PDE2LHRbNF09Wj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RyksTT1FPj4+MTYsbT02NTUzNSYoZD1SKSxCPWQ+Pj4xNixkPXJbNV0sTSs9KEU9dFs1XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNV09Uj02NTUzNSZtfEI8PDE2LHRbNV09Rz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9cSksTT1FPj4+MTYsbT02NTUzNSYoZD1QKSxCPWQ+Pj4xNixkPXJbNl0sTSs9KEU9dFs2XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNl09UD02NTUzNSZtfEI8PDE2LHRbNl09cT02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RCksTT1FPj4+MTYsbT02NTUzNSYoZD1OKSxCPWQ+Pj4xNixkPXJbN10sTSs9KEU9dFs3XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbN109Tj02NTUzNSZtfEI8PDE2LHRbN109RD02NTUzNSZ4fE08PDE2LFYrPTEyOCxlLT0xMjh9cmV0dXJuIGV9ZnVuY3Rpb24gVyhyLHQsbil7dmFyIGUsbz1uZXcgSW50MzJBcnJheSg4KSxpPW5ldyBJbnQzMkFycmF5KDgpLGg9bmV3IFVpbnQ4QXJyYXkoMjU2KSxhPW47Zm9yKG9bMF09MTc3OTAzMzcwMyxvWzFdPTMxNDQxMzQyNzcsb1syXT0xMDEzOTA0MjQyLG9bM109Mjc3MzQ4MDc2MixvWzRdPTEzNTk4OTMxMTksb1s1XT0yNjAwODIyOTI0LG9bNl09NTI4NzM0NjM1LG9bN109MTU0MTQ1OTIyNSxpWzBdPTQwODkyMzU3MjAsaVsxXT0yMjI3ODczNTk1LGlbMl09NDI3MTE3NTcyMyxpWzNdPTE1OTU3NTAxMjksaVs0XT0yOTE3NTY1MTM3LGlbNV09NzI1NTExMTk5LGlbNl09NDIxNTM4OTU0NyxpWzddPTMyNzAzMzIwOSxRKG8saSx0LG4pLG4lPTEyOCxlPTA7ZTxuO2UrKyloW2VdPXRbYS1uK2VdO2ZvcihoW25dPTEyOCxoWyhuPTI1Ni0xMjgqKG48MTEyPzE6MCkpLTldPTAsZihoLG4tOCxhLzUzNjg3MDkxMnwwLGE8PDMpLFEobyxpLGgsbiksZT0wO2U8ODtlKyspZihyLDgqZSxvW2VdLGlbZV0pO3JldHVybiAwfWZ1bmN0aW9uICQocix0KXt2YXIgbj12KCksZT12KCksbz12KCksaT12KCksaD12KCksYT12KCksZj12KCkscz12KCksdT12KCk7QyhuLHJbMV0sclswXSksQyh1LHRbMV0sdFswXSksRihuLG4sdSksTyhlLHJbMF0sclsxXSksTyh1LHRbMF0sdFsxXSksRihlLGUsdSksRihvLHJbM10sdFszXSksRihvLG8seSksRihpLHJbMl0sdFsyXSksTyhpLGksaSksQyhoLGUsbiksQyhhLGksbyksTyhmLGksbyksTyhzLGUsbiksRihyWzBdLGgsYSksRihyWzFdLHMsZiksRihyWzJdLGYsYSksRihyWzNdLGgscyl9ZnVuY3Rpb24gcnIocix0LG4pe3ZhciBlO2ZvcihlPTA7ZTw0O2UrKylUKHJbZV0sdFtlXSxuKX1mdW5jdGlvbiB0cihyLHQpe3ZhciBuPXYoKSxlPXYoKSxvPXYoKTtaKG8sdFsyXSksRihuLHRbMF0sbyksRihlLHRbMV0sbykseihyLGUpLHJbMzFdXj1QKG4pPDw3fWZ1bmN0aW9uIG5yKHIsdCxuKXt2YXIgZSxvO2ZvcihZKHJbMF0scyksWShyWzFdLHUpLFkoclsyXSx1KSxZKHJbM10scyksbz0yNTU7MDw9bzstLW8pcnIocix0LGU9bltvLzh8MF0+Pig3Jm8pJjEpLCQodCxyKSwkKHIscikscnIocix0LGUpfWZ1bmN0aW9uIGVyKHIsdCl7dmFyIG49W3YoKSx2KCksdigpLHYoKV07WShuWzBdLGUpLFkoblsxXSxhKSxZKG5bMl0sdSksRihuWzNdLGUsYSksbnIocixuLHQpfWZ1bmN0aW9uIG9yKHIsdCxuKXt2YXIgZSxvPW5ldyBVaW50OEFycmF5KDY0KSxpPVt2KCksdigpLHYoKSx2KCldO2ZvcihufHxoKHQsMzIpLFcobyx0LDMyKSxvWzBdJj0yNDgsb1szMV0mPTEyNyxvWzMxXXw9NjQsZXIoaSxvKSx0cihyLGkpLGU9MDtlPDMyO2UrKyl0W2UrMzJdPXJbZV07cmV0dXJuIDB9dmFyIGlyPW5ldyBGbG9hdDY0QXJyYXkoWzIzNywyMTEsMjQ1LDkyLDI2LDk5LDE4LDg4LDIxNCwxNTYsMjQ3LDE2MiwyMjIsMjQ5LDIyMiwyMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxNl0pO2Z1bmN0aW9uIGhyKHIsdCl7dmFyIG4sZSxvLGk7Zm9yKGU9NjM7MzI8PWU7LS1lKXtmb3Iobj0wLG89ZS0zMixpPWUtMTI7bzxpOysrbyl0W29dKz1uLTE2KnRbZV0qaXJbby0oZS0zMildLG49TWF0aC5mbG9vcigodFtvXSsxMjgpLzI1NiksdFtvXS09MjU2Km47dFtvXSs9bix0W2VdPTB9Zm9yKG89bj0wO288MzI7bysrKXRbb10rPW4tKHRbMzFdPj40KSppcltvXSxuPXRbb10+PjgsdFtvXSY9MjU1O2ZvcihvPTA7bzwzMjtvKyspdFtvXS09bippcltvXTtmb3IoZT0wO2U8MzI7ZSsrKXRbZSsxXSs9dFtlXT4+OCxyW2VdPTI1NSZ0W2VdfWZ1bmN0aW9uIGFyKHIpe3ZhciB0LG49bmV3IEZsb2F0NjRBcnJheSg2NCk7Zm9yKHQ9MDt0PDY0O3QrKyluW3RdPXJbdF07Zm9yKHQ9MDt0PDY0O3QrKylyW3RdPTA7aHIocixuKX1mdW5jdGlvbiBmcihyLHQsbixlKXt2YXIgbyxpLGg9bmV3IFVpbnQ4QXJyYXkoNjQpLGE9bmV3IFVpbnQ4QXJyYXkoNjQpLGY9bmV3IFVpbnQ4QXJyYXkoNjQpLHM9bmV3IEZsb2F0NjRBcnJheSg2NCksdT1bdigpLHYoKSx2KCksdigpXTtXKGgsZSwzMiksaFswXSY9MjQ4LGhbMzFdJj0xMjcsaFszMV18PTY0O3ZhciBjPW4rNjQ7Zm9yKG89MDtvPG47bysrKXJbNjQrb109dFtvXTtmb3Iobz0wO288MzI7bysrKXJbMzIrb109aFszMitvXTtmb3IoVyhmLHIuc3ViYXJyYXkoMzIpLG4rMzIpLGFyKGYpLGVyKHUsZiksdHIocix1KSxvPTMyO288NjQ7bysrKXJbb109ZVtvXTtmb3IoVyhhLHIsbis2NCksYXIoYSksbz0wO288NjQ7bysrKXNbb109MDtmb3Iobz0wO288MzI7bysrKXNbb109ZltvXTtmb3Iobz0wO288MzI7bysrKWZvcihpPTA7aTwzMjtpKyspc1tvK2ldKz1hW29dKmhbaV07cmV0dXJuIGhyKHIuc3ViYXJyYXkoMzIpLHMpLGN9ZnVuY3Rpb24gc3Iocix0LG4sZSl7dmFyIG8saT1uZXcgVWludDhBcnJheSgzMiksaD1uZXcgVWludDhBcnJheSg2NCksYT1bdigpLHYoKSx2KCksdigpXSxmPVt2KCksdigpLHYoKSx2KCldO2lmKG48NjQpcmV0dXJuLTE7aWYoZnVuY3Rpb24ocix0KXt2YXIgbj12KCksZT12KCksbz12KCksaT12KCksaD12KCksYT12KCksZj12KCk7aWYoWShyWzJdLHUpLE4oclsxXSx0KSxJKG8sclsxXSksRihpLG8sYyksQyhvLG8sclsyXSksTyhpLHJbMl0saSksSShoLGkpLEkoYSxoKSxGKGYsYSxoKSxGKG4sZixvKSxGKG4sbixpKSxHKG4sbiksRihuLG4sbyksRihuLG4saSksRihuLG4saSksRihyWzBdLG4saSksSShlLHJbMF0pLEYoZSxlLGkpLFIoZSxvKSYmRihyWzBdLHJbMF0sbCksSShlLHJbMF0pLEYoZSxlLGkpLFIoZSxvKSlyZXR1cm4gMTtQKHJbMF0pPT09dFszMV0+PjcmJkMoclswXSxzLHJbMF0pLEYoclszXSxyWzBdLHJbMV0pfShmLGUpKXJldHVybi0xO2ZvcihvPTA7bzxuO28rKylyW29dPXRbb107Zm9yKG89MDtvPDMyO28rKylyW28rMzJdPWVbb107aWYoVyhoLHIsbiksYXIoaCksbnIoYSxmLGgpLGVyKGYsdC5zdWJhcnJheSgzMikpLCQoYSxmKSx0cihpLGEpLG4tPTY0LGcodCwwLGksMCkpe2ZvcihvPTA7bzxuO28rKylyW29dPTA7cmV0dXJuLTF9Zm9yKG89MDtvPG47bysrKXJbb109dFtvKzY0XTtyZXR1cm4gbn1mdW5jdGlvbiB1cihyLHQpe2lmKDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQga2V5IHNpemUiKTtpZigyNCE9PXQubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG5vbmNlIHNpemUiKX1mdW5jdGlvbiBjcigpe2Zvcih2YXIgcj0wO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspaWYoIShhcmd1bWVudHNbcl1pbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKXRocm93IG5ldyBUeXBlRXJyb3IoInVuZXhwZWN0ZWQgdHlwZSwgdXNlIFVpbnQ4QXJyYXkiKX1mdW5jdGlvbiB5cihyKXtmb3IodmFyIHQ9MDt0PHIubGVuZ3RoO3QrKylyW3RdPTB9aS5sb3dsZXZlbD17Y3J5cHRvX2NvcmVfaHNhbHNhMjA6XyxjcnlwdG9fc3RyZWFtX3hvcjpNLGNyeXB0b19zdHJlYW06eCxjcnlwdG9fc3RyZWFtX3NhbHNhMjBfeG9yOmQsY3J5cHRvX3N0cmVhbV9zYWxzYTIwOkUsY3J5cHRvX29uZXRpbWVhdXRoOkIsY3J5cHRvX29uZXRpbWVhdXRoX3ZlcmlmeTpTLGNyeXB0b192ZXJpZnlfMTY6YixjcnlwdG9fdmVyaWZ5XzMyOmcsY3J5cHRvX3NlY3JldGJveDprLGNyeXB0b19zZWNyZXRib3hfb3BlbjpLLGNyeXB0b19zY2FsYXJtdWx0OnEsY3J5cHRvX3NjYWxhcm11bHRfYmFzZTpELGNyeXB0b19ib3hfYmVmb3Jlbm06WCxjcnlwdG9fYm94X2FmdGVybm06aixjcnlwdG9fYm94OmZ1bmN0aW9uKHIsdCxuLGUsbyxpKXt2YXIgaD1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIFgoaCxvLGkpLGoocix0LG4sZSxoKX0sY3J5cHRvX2JveF9vcGVuOmZ1bmN0aW9uKHIsdCxuLGUsbyxpKXt2YXIgaD1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIFgoaCxvLGkpLEgocix0LG4sZSxoKX0sY3J5cHRvX2JveF9rZXlwYWlyOlYsY3J5cHRvX2hhc2g6VyxjcnlwdG9fc2lnbjpmcixjcnlwdG9fc2lnbl9rZXlwYWlyOm9yLGNyeXB0b19zaWduX29wZW46c3IsY3J5cHRvX3NlY3JldGJveF9LRVlCWVRFUzozMixjcnlwdG9fc2VjcmV0Ym94X05PTkNFQllURVM6MjQsY3J5cHRvX3NlY3JldGJveF9aRVJPQllURVM6MzIsY3J5cHRvX3NlY3JldGJveF9CT1haRVJPQllURVM6MTYsY3J5cHRvX3NjYWxhcm11bHRfQllURVM6MzIsY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVM6MzIsY3J5cHRvX2JveF9QVUJMSUNLRVlCWVRFUzozMixjcnlwdG9fYm94X1NFQ1JFVEtFWUJZVEVTOjMyLGNyeXB0b19ib3hfQkVGT1JFTk1CWVRFUzozMixjcnlwdG9fYm94X05PTkNFQllURVM6MjQsY3J5cHRvX2JveF9aRVJPQllURVM6MzIsY3J5cHRvX2JveF9CT1haRVJPQllURVM6MTYsY3J5cHRvX3NpZ25fQllURVM6NjQsY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVM6MzIsY3J5cHRvX3NpZ25fU0VDUkVUS0VZQllURVM6NjQsY3J5cHRvX3NpZ25fU0VFREJZVEVTOjMyLGNyeXB0b19oYXNoX0JZVEVTOjY0LGdmOnYsRDpjLEw6aXIscGFjazI1NTE5OnosdW5wYWNrMjU1MTk6TixNOkYsQTpPLFM6SSxaOkMscG93MjUyMzpHLGFkZDokLHNldDI1NTE5OlksbW9kTDpocixzY2FsYXJtdWx0Om5yLHNjYWxhcmJhc2U6ZXJ9LGkucmFuZG9tQnl0ZXM9ZnVuY3Rpb24ocil7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkocik7cmV0dXJuIGgodCxyKSx0fSxpLnNlY3JldGJveD1mdW5jdGlvbihyLHQsbil7Y3Iocix0LG4pLHVyKG4sdCk7Zm9yKHZhciBlPW5ldyBVaW50OEFycmF5KDMyK3IubGVuZ3RoKSxvPW5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSxpPTA7aTxyLmxlbmd0aDtpKyspZVtpKzMyXT1yW2ldO3JldHVybiBrKG8sZSxlLmxlbmd0aCx0LG4pLG8uc3ViYXJyYXkoMTYpfSxpLnNlY3JldGJveC5vcGVuPWZ1bmN0aW9uKHIsdCxuKXtjcihyLHQsbiksdXIobix0KTtmb3IodmFyIGU9bmV3IFVpbnQ4QXJyYXkoMTYrci5sZW5ndGgpLG89bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpLGk9MDtpPHIubGVuZ3RoO2krKyllW2krMTZdPXJbaV07cmV0dXJuIGUubGVuZ3RoPDMyfHwwIT09SyhvLGUsZS5sZW5ndGgsdCxuKT9udWxsOm8uc3ViYXJyYXkoMzIpfSxpLnNlY3JldGJveC5rZXlMZW5ndGg9MzIsaS5zZWNyZXRib3gubm9uY2VMZW5ndGg9MjQsaS5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGg9MTYsaS5zY2FsYXJNdWx0PWZ1bmN0aW9uKHIsdCl7aWYoY3Iocix0KSwzMiE9PXIubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG4gc2l6ZSIpO2lmKDMyIT09dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgcCBzaXplIik7dmFyIG49bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBxKG4scix0KSxufSxpLnNjYWxhck11bHQuYmFzZT1mdW5jdGlvbihyKXtpZihjcihyKSwzMiE9PXIubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG4gc2l6ZSIpO3ZhciB0PW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4gRCh0LHIpLHR9LGkuc2NhbGFyTXVsdC5zY2FsYXJMZW5ndGg9MzIsaS5zY2FsYXJNdWx0Lmdyb3VwRWxlbWVudExlbmd0aD0zMixpLmJveD1mdW5jdGlvbihyLHQsbixlKXt2YXIgbz1pLmJveC5iZWZvcmUobixlKTtyZXR1cm4gaS5zZWNyZXRib3gocix0LG8pfSxpLmJveC5iZWZvcmU9ZnVuY3Rpb24ocix0KXtjcihyLHQpLGZ1bmN0aW9uKHIsdCl7aWYoMzIhPT1yLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBwdWJsaWMga2V5IHNpemUiKTtpZigzMiE9PXQubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIHNlY3JldCBrZXkgc2l6ZSIpfShyLHQpO3ZhciBuPW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4gWChuLHIsdCksbn0saS5ib3guYWZ0ZXI9aS5zZWNyZXRib3gsaS5ib3gub3Blbj1mdW5jdGlvbihyLHQsbixlKXt2YXIgbz1pLmJveC5iZWZvcmUobixlKTtyZXR1cm4gaS5zZWNyZXRib3gub3BlbihyLHQsbyl9LGkuYm94Lm9wZW4uYWZ0ZXI9aS5zZWNyZXRib3gub3BlbixpLmJveC5rZXlQYWlyPWZ1bmN0aW9uKCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoMzIpLHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBWKHIsdCkse3B1YmxpY0tleTpyLHNlY3JldEtleTp0fX0saS5ib3gua2V5UGFpci5mcm9tU2VjcmV0S2V5PWZ1bmN0aW9uKHIpe2lmKGNyKHIpLDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2VjcmV0IGtleSBzaXplIik7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBEKHQscikse3B1YmxpY0tleTp0LHNlY3JldEtleTpuZXcgVWludDhBcnJheShyKX19LGkuYm94LnB1YmxpY0tleUxlbmd0aD0zMixpLmJveC5zZWNyZXRLZXlMZW5ndGg9MzIsaS5ib3guc2hhcmVkS2V5TGVuZ3RoPTMyLGkuYm94Lm5vbmNlTGVuZ3RoPTI0LGkuYm94Lm92ZXJoZWFkTGVuZ3RoPWkuc2VjcmV0Ym94Lm92ZXJoZWFkTGVuZ3RoLGkuc2lnbj1mdW5jdGlvbihyLHQpe2lmKGNyKHIsdCksNjQhPT10Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBzZWNyZXQga2V5IHNpemUiKTt2YXIgbj1uZXcgVWludDhBcnJheSg2NCtyLmxlbmd0aCk7cmV0dXJuIGZyKG4scixyLmxlbmd0aCx0KSxufSxpLnNpZ24ub3Blbj1mdW5jdGlvbihyLHQpe2lmKGNyKHIsdCksMzIhPT10Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBwdWJsaWMga2V5IHNpemUiKTt2YXIgbj1uZXcgVWludDhBcnJheShyLmxlbmd0aCksZT1zcihuLHIsci5sZW5ndGgsdCk7aWYoZTwwKXJldHVybiBudWxsO2Zvcih2YXIgbz1uZXcgVWludDhBcnJheShlKSxpPTA7aTxvLmxlbmd0aDtpKyspb1tpXT1uW2ldO3JldHVybiBvfSxpLnNpZ24uZGV0YWNoZWQ9ZnVuY3Rpb24ocix0KXtmb3IodmFyIG49aS5zaWduKHIsdCksZT1uZXcgVWludDhBcnJheSg2NCksbz0wO288ZS5sZW5ndGg7bysrKWVbb109bltvXTtyZXR1cm4gZX0saS5zaWduLmRldGFjaGVkLnZlcmlmeT1mdW5jdGlvbihyLHQsbil7aWYoY3Iocix0LG4pLDY0IT09dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2lnbmF0dXJlIHNpemUiKTtpZigzMiE9PW4ubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIHB1YmxpYyBrZXkgc2l6ZSIpO3ZhciBlLG89bmV3IFVpbnQ4QXJyYXkoNjQrci5sZW5ndGgpLGk9bmV3IFVpbnQ4QXJyYXkoNjQrci5sZW5ndGgpO2ZvcihlPTA7ZTw2NDtlKyspb1tlXT10W2VdO2ZvcihlPTA7ZTxyLmxlbmd0aDtlKyspb1tlKzY0XT1yW2VdO3JldHVybiAwPD1zcihpLG8sby5sZW5ndGgsbil9LGkuc2lnbi5rZXlQYWlyPWZ1bmN0aW9uKCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoMzIpLHQ9bmV3IFVpbnQ4QXJyYXkoNjQpO3JldHVybiBvcihyLHQpLHtwdWJsaWNLZXk6cixzZWNyZXRLZXk6dH19LGkuc2lnbi5rZXlQYWlyLmZyb21TZWNyZXRLZXk9ZnVuY3Rpb24ocil7aWYoY3IociksNjQhPT1yLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBzZWNyZXQga2V5IHNpemUiKTtmb3IodmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPXJbMzIrbl07cmV0dXJue3B1YmxpY0tleTp0LHNlY3JldEtleTpuZXcgVWludDhBcnJheShyKX19LGkuc2lnbi5rZXlQYWlyLmZyb21TZWVkPWZ1bmN0aW9uKHIpe2lmKGNyKHIpLDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2VlZCBzaXplIik7Zm9yKHZhciB0PW5ldyBVaW50OEFycmF5KDMyKSxuPW5ldyBVaW50OEFycmF5KDY0KSxlPTA7ZTwzMjtlKyspbltlXT1yW2VdO3JldHVybiBvcih0LG4sITApLHtwdWJsaWNLZXk6dCxzZWNyZXRLZXk6bn19LGkuc2lnbi5wdWJsaWNLZXlMZW5ndGg9MzIsaS5zaWduLnNlY3JldEtleUxlbmd0aD02NCxpLnNpZ24uc2VlZExlbmd0aD0zMixpLnNpZ24uc2lnbmF0dXJlTGVuZ3RoPTY0LGkuaGFzaD1mdW5jdGlvbihyKXtjcihyKTt2YXIgdD1uZXcgVWludDhBcnJheSg2NCk7cmV0dXJuIFcodCxyLHIubGVuZ3RoKSx0fSxpLmhhc2guaGFzaExlbmd0aD02NCxpLnZlcmlmeT1mdW5jdGlvbihyLHQpe3JldHVybiBjcihyLHQpLDAhPT1yLmxlbmd0aCYmMCE9PXQubGVuZ3RoJiYoci5sZW5ndGg9PT10Lmxlbmd0aCYmMD09PXcociwwLHQsMCxyLmxlbmd0aCkpfSxpLnNldFBSTkc9ZnVuY3Rpb24ocil7aD1yfSxmdW5jdGlvbigpe3ZhciBvPSJ1bmRlZmluZWQiIT10eXBlb2Ygc2VsZj9zZWxmLmNyeXB0b3x8c2VsZi5tc0NyeXB0bzpudWxsO2lmKG8mJm8uZ2V0UmFuZG9tVmFsdWVzKXtpLnNldFBSTkcoZnVuY3Rpb24ocix0KXt2YXIgbixlPW5ldyBVaW50OEFycmF5KHQpO2ZvcihuPTA7bjx0O24rPTY1NTM2KW8uZ2V0UmFuZG9tVmFsdWVzKGUuc3ViYXJyYXkobixuK01hdGgubWluKHQtbiw2NTUzNikpKTtmb3Iobj0wO248dDtuKyspcltuXT1lW25dO3lyKGUpfSl9ZWxzZSJ1bmRlZmluZWQiIT10eXBlb2YgcmVxdWlyZSYmKG89cmVxdWlyZSgiY3J5cHRvIikpJiZvLnJhbmRvbUJ5dGVzJiZpLnNldFBSTkcoZnVuY3Rpb24ocix0KXt2YXIgbixlPW8ucmFuZG9tQnl0ZXModCk7Zm9yKG49MDtuPHQ7bisrKXJbbl09ZVtuXTt5cihlKX0pfSgpfSgidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM6c2VsZi5uYWNsPXNlbGYubmFjbHx8e30pOw==
`; // eslint-disable-line
const argon2bundled_base64 = `IWZ1bmN0aW9uKEEsSSl7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYib2JqZWN0Ij09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1JKCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sSSk6Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuYXJnb24yPUkoKTpBLmFyZ29uMj1JKCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuKCgpPT57dmFyIEEsSSxnPXs3NzM6KEEsSSxnKT0+e3ZhciBCLFE9InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmJiZ2b2lkIDAhPT1zZWxmLk1vZHVsZT9zZWxmLk1vZHVsZTp7fSxDPXt9O2ZvcihCIGluIFEpUS5oYXNPd25Qcm9wZXJ0eShCKSYmKENbQl09UVtCXSk7dmFyIEUsaSxvLEQsZT1bXTtFPSJvYmplY3QiPT10eXBlb2Ygd2luZG93LGk9ImZ1bmN0aW9uIj09dHlwZW9mIGltcG9ydFNjcmlwdHMsbz0ib2JqZWN0Ij09dHlwZW9mIHByb2Nlc3MmJiJvYmplY3QiPT10eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyYmInN0cmluZyI9PXR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUsRD0hRSYmIW8mJiFpO3ZhciBuLHQsYSxyLHMseT0iIjtvPyh5PWk/Zyg5NjcpLmRpcm5hbWUoeSkrIi8iOiIvLyIsbj1mdW5jdGlvbihBLEkpe3JldHVybiByfHwocj1nKDE0NSkpLHN8fChzPWcoOTY3KSksQT1zLm5vcm1hbGl6ZShBKSxyLnJlYWRGaWxlU3luYyhBLEk/bnVsbDoidXRmOCIpfSxhPWZ1bmN0aW9uKEEpe3ZhciBJPW4oQSwhMCk7cmV0dXJuIEkuYnVmZmVyfHwoST1uZXcgVWludDhBcnJheShJKSksRyhJLmJ1ZmZlciksSX0scHJvY2Vzcy5hcmd2Lmxlbmd0aD4xJiZwcm9jZXNzLmFyZ3ZbMV0ucmVwbGFjZSgvXFwvZywiLyIpLGU9cHJvY2Vzcy5hcmd2LnNsaWNlKDIpLEEuZXhwb3J0cz1RLHByb2Nlc3Mub24oInVuY2F1Z2h0RXhjZXB0aW9uIiwoZnVuY3Rpb24oQSl7aWYoIShBIGluc3RhbmNlb2YgVikpdGhyb3cgQX0pKSxwcm9jZXNzLm9uKCJ1bmhhbmRsZWRSZWplY3Rpb24iLHUpLFEuaW5zcGVjdD1mdW5jdGlvbigpe3JldHVybiJbRW1zY3JpcHRlbiBNb2R1bGUgb2JqZWN0XSJ9KTpEPygidW5kZWZpbmVkIiE9dHlwZW9mIHJlYWQmJihuPWZ1bmN0aW9uKEEpe3JldHVybiByZWFkKEEpfSksYT1mdW5jdGlvbihBKXt2YXIgSTtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgcmVhZGJ1ZmZlcj9uZXcgVWludDhBcnJheShyZWFkYnVmZmVyKEEpKTooRygib2JqZWN0Ij09dHlwZW9mKEk9cmVhZChBLCJiaW5hcnkiKSkpLEkpfSwidW5kZWZpbmVkIiE9dHlwZW9mIHNjcmlwdEFyZ3M/ZT1zY3JpcHRBcmdzOnZvaWQgMCE9PWFyZ3VtZW50cyYmKGU9YXJndW1lbnRzKSwidW5kZWZpbmVkIiE9dHlwZW9mIHByaW50JiYoInVuZGVmaW5lZCI9PXR5cGVvZiBjb25zb2xlJiYoY29uc29sZT17fSksY29uc29sZS5sb2c9cHJpbnQsY29uc29sZS53YXJuPWNvbnNvbGUuZXJyb3I9InVuZGVmaW5lZCIhPXR5cGVvZiBwcmludEVycj9wcmludEVycjpwcmludCkpOihFfHxpKSYmKGk/eT1zZWxmLmxvY2F0aW9uLmhyZWY6InVuZGVmaW5lZCIhPXR5cGVvZiBkb2N1bWVudCYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCYmKHk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLHk9MCE9PXkuaW5kZXhPZigiYmxvYjoiKT95LnN1YnN0cigwLHkubGFzdEluZGV4T2YoIi8iKSsxKToiIixuPWZ1bmN0aW9uKEEpe3ZhciBJPW5ldyBYTUxIdHRwUmVxdWVzdDtyZXR1cm4gSS5vcGVuKCJHRVQiLEEsITEpLEkuc2VuZChudWxsKSxJLnJlc3BvbnNlVGV4dH0saSYmKGE9ZnVuY3Rpb24oQSl7dmFyIEk9bmV3IFhNTEh0dHBSZXF1ZXN0O3JldHVybiBJLm9wZW4oIkdFVCIsQSwhMSksSS5yZXNwb25zZVR5cGU9ImFycmF5YnVmZmVyIixJLnNlbmQobnVsbCksbmV3IFVpbnQ4QXJyYXkoSS5yZXNwb25zZSl9KSx0PWZ1bmN0aW9uKEEsSSxnKXt2YXIgQj1uZXcgWE1MSHR0cFJlcXVlc3Q7Qi5vcGVuKCJHRVQiLEEsITApLEIucmVzcG9uc2VUeXBlPSJhcnJheWJ1ZmZlciIsQi5vbmxvYWQ9ZnVuY3Rpb24oKXsyMDA9PUIuc3RhdHVzfHwwPT1CLnN0YXR1cyYmQi5yZXNwb25zZT9JKEIucmVzcG9uc2UpOmcoKX0sQi5vbmVycm9yPWcsQi5zZW5kKG51bGwpfSksUS5wcmludHx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgRixjLHc9US5wcmludEVycnx8Y29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7Zm9yKEIgaW4gQylDLmhhc093blByb3BlcnR5KEIpJiYoUVtCXT1DW0JdKTtDPW51bGwsUS5hcmd1bWVudHMmJihlPVEuYXJndW1lbnRzKSxRLnRoaXNQcm9ncmFtJiZRLnRoaXNQcm9ncmFtLFEucXVpdCYmUS5xdWl0LFEud2FzbUJpbmFyeSYmKEY9US53YXNtQmluYXJ5KSxRLm5vRXhpdFJ1bnRpbWUsIm9iamVjdCIhPXR5cGVvZiBXZWJBc3NlbWJseSYmdSgibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpO3ZhciBoPSExO2Z1bmN0aW9uIEcoQSxJKXtBfHx1KCJBc3NlcnRpb24gZmFpbGVkOiAiK0kpfXZhciBOLFIsZj0idW5kZWZpbmVkIiE9dHlwZW9mIFRleHREZWNvZGVyP25ldyBUZXh0RGVjb2RlcigidXRmOCIpOnZvaWQgMDtmdW5jdGlvbiBVKEEpe049QSxRLkhFQVA4PW5ldyBJbnQ4QXJyYXkoQSksUS5IRUFQMTY9bmV3IEludDE2QXJyYXkoQSksUS5IRUFQMzI9bmV3IEludDMyQXJyYXkoQSksUS5IRUFQVTg9Uj1uZXcgVWludDhBcnJheShBKSxRLkhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KEEpLFEuSEVBUFUzMj1uZXcgVWludDMyQXJyYXkoQSksUS5IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoQSksUS5IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoQSl9US5JTklUSUFMX01FTU9SWTt2YXIgTSxZPVtdLFM9W10sSD1bXSxkPTAsaz1udWxsLEo9bnVsbDtmdW5jdGlvbiB1KEEpe3Rocm93IFEub25BYm9ydCYmUS5vbkFib3J0KEEpLHcoQSs9IiIpLGg9ITAsQT0iYWJvcnQoIitBKyIpLiBCdWlsZCB3aXRoIC1zIEFTU0VSVElPTlM9MSBmb3IgbW9yZSBpbmZvLiIsbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcihBKX1mdW5jdGlvbiBwKEEpe3JldHVybiBBLnN0YXJ0c1dpdGgoImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKX1mdW5jdGlvbiBMKEEpe3JldHVybiBBLnN0YXJ0c1dpdGgoImZpbGU6Ly8iKX1RLnByZWxvYWRlZEltYWdlcz17fSxRLnByZWxvYWRlZEF1ZGlvcz17fTt2YXIgbCxLPSJhcmdvbjIud2FzbSI7ZnVuY3Rpb24gcShBKXt0cnl7aWYoQT09SyYmRilyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoRik7aWYoYSlyZXR1cm4gYShBKTt0aHJvdyJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCJ9Y2F0Y2goQSl7dShBKX19ZnVuY3Rpb24gYihBKXtmb3IoO0EubGVuZ3RoPjA7KXt2YXIgST1BLnNoaWZ0KCk7aWYoImZ1bmN0aW9uIiE9dHlwZW9mIEkpe3ZhciBnPUkuZnVuYzsibnVtYmVyIj09dHlwZW9mIGc/dm9pZCAwPT09SS5hcmc/TS5nZXQoZykoKTpNLmdldChnKShJLmFyZyk6Zyh2b2lkIDA9PT1JLmFyZz9udWxsOkkuYXJnKX1lbHNlIEkoUSl9fWZ1bmN0aW9uIHgoQSl7dHJ5e3JldHVybiBjLmdyb3coQS1OLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNiksVShjLmJ1ZmZlciksMX1jYXRjaChBKXt9fXAoSyl8fChsPUssSz1RLmxvY2F0ZUZpbGU/US5sb2NhdGVGaWxlKGwseSk6eStsKTt2YXIgbSxYPXthOmZ1bmN0aW9uKEEsSSxnKXtSLmNvcHlXaXRoaW4oQSxJLEkrZyl9LGI6ZnVuY3Rpb24oQSl7dmFyIEksZz1SLmxlbmd0aCxCPTIxNDc0MTgxMTI7aWYoKEE+Pj49MCk+QilyZXR1cm4hMTtmb3IodmFyIFE9MTtRPD00O1EqPTIpe3ZhciBDPWcqKDErLjIvUSk7aWYoQz1NYXRoLm1pbihDLEErMTAwNjYzMjk2KSx4KE1hdGgubWluKEIsKChJPU1hdGgubWF4KEEsQykpJTY1NTM2PjAmJihJKz02NTUzNi1JJTY1NTM2KSxJKSkpKXJldHVybiEwfXJldHVybiExfX0sVz0oZnVuY3Rpb24oKXt2YXIgQT17YTpYfTtmdW5jdGlvbiBJKEEsSSl7dmFyIGcsQj1BLmV4cG9ydHM7US5hc209QixVKChjPVEuYXNtLmMpLmJ1ZmZlciksTT1RLmFzbS5rLGc9US5hc20uZCxTLnVuc2hpZnQoZyksZnVuY3Rpb24oQSl7aWYoZC0tLFEubW9uaXRvclJ1bkRlcGVuZGVuY2llcyYmUS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKGQpLDA9PWQmJihudWxsIT09ayYmKGNsZWFySW50ZXJ2YWwoayksaz1udWxsKSxKKSl7dmFyIEk9SjtKPW51bGwsSSgpfX0oKX1mdW5jdGlvbiBnKEEpe0koQS5pbnN0YW5jZSl9ZnVuY3Rpb24gQihJKXtyZXR1cm4gZnVuY3Rpb24oKXtpZighRiYmKEV8fGkpKXtpZigiZnVuY3Rpb24iPT10eXBlb2YgZmV0Y2gmJiFMKEspKXJldHVybiBmZXRjaChLLHtjcmVkZW50aWFsczoic2FtZS1vcmlnaW4ifSkudGhlbigoZnVuY3Rpb24oQSl7aWYoIUEub2spdGhyb3ciZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIitLKyInIjtyZXR1cm4gQS5hcnJheUJ1ZmZlcigpfSkpLmNhdGNoKChmdW5jdGlvbigpe3JldHVybiBxKEspfSkpO2lmKHQpcmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihBLEkpe3QoSywoZnVuY3Rpb24oSSl7QShuZXcgVWludDhBcnJheShJKSl9KSxJKX0pKX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gcShLKX0pKX0oKS50aGVuKChmdW5jdGlvbihJKXtyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoSSxBKX0pKS50aGVuKEksKGZ1bmN0aW9uKEEpe3coImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIrQSksdShBKX0pKX1pZihkKyssUS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzJiZRLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoZCksUS5pbnN0YW50aWF0ZVdhc20pdHJ5e3JldHVybiBRLmluc3RhbnRpYXRlV2FzbShBLEkpfWNhdGNoKEEpe3JldHVybiB3KCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiK0EpLCExfUZ8fCJmdW5jdGlvbiIhPXR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ3x8cChLKXx8TChLKXx8ImZ1bmN0aW9uIiE9dHlwZW9mIGZldGNoP0IoZyk6ZmV0Y2goSyx7Y3JlZGVudGlhbHM6InNhbWUtb3JpZ2luIn0pLnRoZW4oKGZ1bmN0aW9uKEkpe3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhJLEEpLnRoZW4oZywoZnVuY3Rpb24oQSl7cmV0dXJuIHcoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiK0EpLHcoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksQihnKX0pKX0pKX0oKSxRLl9fX3dhc21fY2FsbF9jdG9ycz1mdW5jdGlvbigpe3JldHVybihRLl9fX3dhc21fY2FsbF9jdG9ycz1RLmFzbS5kKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl9oYXNoPWZ1bmN0aW9uKCl7cmV0dXJuKFEuX2FyZ29uMl9oYXNoPVEuYXNtLmUpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fbWFsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKFc9US5fbWFsbG9jPVEuYXNtLmYpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0pLFQ9KFEuX2ZyZWU9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fZnJlZT1RLmFzbS5nKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl92ZXJpZnk9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX3ZlcmlmeT1RLmFzbS5oKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl9lcnJvcl9tZXNzYWdlPWZ1bmN0aW9uKCl7cmV0dXJuKFEuX2FyZ29uMl9lcnJvcl9tZXNzYWdlPVEuYXNtLmkpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fYXJnb24yX2VuY29kZWRsZW49ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX2VuY29kZWRsZW49US5hc20uaikuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxRLl9hcmdvbjJfaGFzaF9leHQ9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX2hhc2hfZXh0PVEuYXNtLmwpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fYXJnb24yX3ZlcmlmeV9leHQ9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX3ZlcmlmeV9leHQ9US5hc20ubSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxRLnN0YWNrQWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oVD1RLnN0YWNrQWxsb2M9US5hc20ubikuYXBwbHkobnVsbCxhcmd1bWVudHMpfSk7ZnVuY3Rpb24gVihBKXt0aGlzLm5hbWU9IkV4aXRTdGF0dXMiLHRoaXMubWVzc2FnZT0iUHJvZ3JhbSB0ZXJtaW5hdGVkIHdpdGggZXhpdCgiK0ErIikiLHRoaXMuc3RhdHVzPUF9ZnVuY3Rpb24gaihBKXtmdW5jdGlvbiBJKCl7bXx8KG09ITAsUS5jYWxsZWRSdW49ITAsaHx8KGIoUyksUS5vblJ1bnRpbWVJbml0aWFsaXplZCYmUS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLGZ1bmN0aW9uKCl7aWYoUS5wb3N0UnVuKWZvcigiZnVuY3Rpb24iPT10eXBlb2YgUS5wb3N0UnVuJiYoUS5wb3N0UnVuPVtRLnBvc3RSdW5dKTtRLnBvc3RSdW4ubGVuZ3RoOylBPVEucG9zdFJ1bi5zaGlmdCgpLEgudW5zaGlmdChBKTt2YXIgQTtiKEgpfSgpKSl9QT1BfHxlLGQ+MHx8KGZ1bmN0aW9uKCl7aWYoUS5wcmVSdW4pZm9yKCJmdW5jdGlvbiI9PXR5cGVvZiBRLnByZVJ1biYmKFEucHJlUnVuPVtRLnByZVJ1bl0pO1EucHJlUnVuLmxlbmd0aDspQT1RLnByZVJ1bi5zaGlmdCgpLFkudW5zaGlmdChBKTt2YXIgQTtiKFkpfSgpLGQ+MHx8KFEuc2V0U3RhdHVzPyhRLnNldFN0YXR1cygiUnVubmluZy4uLiIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXtRLnNldFN0YXR1cygiIil9KSwxKSxJKCl9KSwxKSk6SSgpKSl9aWYoUS5hbGxvY2F0ZT1mdW5jdGlvbihBLEkpe3ZhciBnO3JldHVybiBnPTE9PUk/VChBLmxlbmd0aCk6VyhBLmxlbmd0aCksQS5zdWJhcnJheXx8QS5zbGljZT9SLnNldChBLGcpOlIuc2V0KG5ldyBVaW50OEFycmF5KEEpLGcpLGd9LFEuVVRGOFRvU3RyaW5nPWZ1bmN0aW9uKEEsSSl7cmV0dXJuIEE/ZnVuY3Rpb24oQSxJLGcpe2Zvcih2YXIgQj1JK2csUT1JO0FbUV0mJiEoUT49Qik7KSsrUTtpZihRLUk+MTYmJkEuc3ViYXJyYXkmJmYpcmV0dXJuIGYuZGVjb2RlKEEuc3ViYXJyYXkoSSxRKSk7Zm9yKHZhciBDPSIiO0k8UTspe3ZhciBFPUFbSSsrXTtpZigxMjgmRSl7dmFyIGk9NjMmQVtJKytdO2lmKDE5MiE9KDIyNCZFKSl7dmFyIG89NjMmQVtJKytdO2lmKChFPTIyND09KDI0MCZFKT8oMTUmRSk8PDEyfGk8PDZ8bzooNyZFKTw8MTh8aTw8MTJ8bzw8Nnw2MyZBW0krK10pPDY1NTM2KUMrPVN0cmluZy5mcm9tQ2hhckNvZGUoRSk7ZWxzZXt2YXIgRD1FLTY1NTM2O0MrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8RD4+MTAsNTYzMjB8MTAyMyZEKX19ZWxzZSBDKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCgzMSZFKTw8NnxpKX1lbHNlIEMrPVN0cmluZy5mcm9tQ2hhckNvZGUoRSl9cmV0dXJuIEN9KFIsQSxJKToiIn0sUS5BTExPQ19OT1JNQUw9MCxKPWZ1bmN0aW9uIEEoKXttfHxqKCksbXx8KEo9QSl9LFEucnVuPWosUS5wcmVJbml0KWZvcigiZnVuY3Rpb24iPT10eXBlb2YgUS5wcmVJbml0JiYoUS5wcmVJbml0PVtRLnByZUluaXRdKTtRLnByZUluaXQubGVuZ3RoPjA7KVEucHJlSW5pdC5wb3AoKSgpO2ooKSxBLmV4cG9ydHM9USxRLnVubG9hZFJ1bnRpbWU9ZnVuY3Rpb24oKXsidW5kZWZpbmVkIiE9dHlwZW9mIHNlbGYmJmRlbGV0ZSBzZWxmLk1vZHVsZSxRPWM9TT1OPVI9dm9pZCAwLGRlbGV0ZSBBLmV4cG9ydHN9fSw2MzE6ZnVuY3Rpb24oQSxJLGcpe3ZhciBCLFE7InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmJiZzZWxmLHZvaWQgMD09PShRPSJmdW5jdGlvbiI9PXR5cGVvZihCPWZ1bmN0aW9uKCl7Y29uc3QgQT0idW5kZWZpbmVkIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLEk9e0FyZ29uMmQ6MCxBcmdvbjJpOjEsQXJnb24yaWQ6Mn07ZnVuY3Rpb24gQihJKXtpZihCLl9wcm9taXNlKXJldHVybiBCLl9wcm9taXNlO2lmKEIuX21vZHVsZSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEIuX21vZHVsZSk7bGV0IEM7cmV0dXJuIEM9QS5wcm9jZXNzJiZBLnByb2Nlc3MudmVyc2lvbnMmJkEucHJvY2Vzcy52ZXJzaW9ucy5ub2RlP1EoKS50aGVuKChBPT5uZXcgUHJvbWlzZSgoST0+e0EucG9zdFJ1bj0oKT0+SShBKX0pKSkpOihBLmxvYWRBcmdvbjJXYXNtQmluYXJ5P0EubG9hZEFyZ29uMldhc21CaW5hcnkoKTpQcm9taXNlLnJlc29sdmUoZyg3MjEpKS50aGVuKChBPT5mdW5jdGlvbihBKXtjb25zdCBJPWF0b2IoQSksZz1uZXcgVWludDhBcnJheShuZXcgQXJyYXlCdWZmZXIoSS5sZW5ndGgpKTtmb3IobGV0IEE9MDtBPEkubGVuZ3RoO0ErKylnW0FdPUkuY2hhckNvZGVBdChBKTtyZXR1cm4gZ30oQSkpKSkudGhlbigoZz0+ZnVuY3Rpb24oSSxnKXtyZXR1cm4gbmV3IFByb21pc2UoKEI9PihBLk1vZHVsZT17d2FzbUJpbmFyeTpJLHdhc21NZW1vcnk6Zyxwb3N0UnVuKCl7QihNb2R1bGUpfX0sUSgpKSkpfShnLEk/ZnVuY3Rpb24oQSl7Y29uc3QgST0xMDI0LGc9NjQqSSxCPSgxMDI0KkkqMTAyNCoyLTY0KkkpL2csUT1NYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwoQSpJL2cpLDI1NikrMjU2LEIpO3JldHVybiBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHtpbml0aWFsOlEsbWF4aW11bTpCfSl9KEkpOnZvaWQgMCkpKSxCLl9wcm9taXNlPUMsQy50aGVuKChBPT4oQi5fbW9kdWxlPUEsZGVsZXRlIEIuX3Byb21pc2UsQSkpKX1mdW5jdGlvbiBRKCl7cmV0dXJuIEEubG9hZEFyZ29uMldhc21Nb2R1bGU/QS5sb2FkQXJnb24yV2FzbU1vZHVsZSgpOlByb21pc2UucmVzb2x2ZShnKDc3MykpfWZ1bmN0aW9uIEMoQSxJKXtyZXR1cm4gQS5hbGxvY2F0ZShJLCJpOCIsQS5BTExPQ19OT1JNQUwpfWZ1bmN0aW9uIEUoQSxJKXtyZXR1cm4gQyhBLG5ldyBVaW50OEFycmF5KFsuLi5JLDBdKSl9ZnVuY3Rpb24gaShBKXtpZigic3RyaW5nIiE9dHlwZW9mIEEpcmV0dXJuIEE7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFRleHRFbmNvZGVyKXJldHVybihuZXcgVGV4dEVuY29kZXIpLmVuY29kZShBKTtpZigiZnVuY3Rpb24iPT10eXBlb2YgQnVmZmVyKXJldHVybiBCdWZmZXIuZnJvbShBKTt0aHJvdyBuZXcgRXJyb3IoIkRvbid0IGtub3cgaG93IHRvIGVuY29kZSBVVEY4Iil9cmV0dXJue0FyZ29uVHlwZTpJLGhhc2g6ZnVuY3Rpb24oQSl7Y29uc3QgZz1BLm1lbXx8MTAyNDtyZXR1cm4gQihnKS50aGVuKChCPT57Y29uc3QgUT1BLnRpbWV8fDEsbz1BLnBhcmFsbGVsaXNtfHwxLEQ9aShBLnBhc3MpLGU9RShCLEQpLG49RC5sZW5ndGgsdD1pKEEuc2FsdCksYT1FKEIsdCkscj10Lmxlbmd0aCxzPUEudHlwZXx8SS5BcmdvbjJkLHk9Qi5hbGxvY2F0ZShuZXcgQXJyYXkoQS5oYXNoTGVufHwyNCksImk4IixCLkFMTE9DX05PUk1BTCksRj1BLnNlY3JldD9DKEIsQS5zZWNyZXQpOjAsYz1BLnNlY3JldD9BLnNlY3JldC5ieXRlTGVuZ3RoOjAsdz1BLmFkP0MoQixBLmFkKTowLGg9QS5hZD9BLmFkLmJ5dGVMZW5ndGg6MCxHPUEuaGFzaExlbnx8MjQsTj1CLl9hcmdvbjJfZW5jb2RlZGxlbihRLGcsbyxyLEcscyksUj1CLmFsbG9jYXRlKG5ldyBBcnJheShOKzEpLCJpOCIsQi5BTExPQ19OT1JNQUwpO2xldCBmLFUsTTt0cnl7VT1CLl9hcmdvbjJfaGFzaF9leHQoUSxnLG8sZSxuLGEscix5LEcsUixOLHMsRixjLHcsaCwxOSl9Y2F0Y2goQSl7Zj1BfWlmKDAhPT1VfHxmKXt0cnl7Znx8KGY9Qi5VVEY4VG9TdHJpbmcoQi5fYXJnb24yX2Vycm9yX21lc3NhZ2UoVSkpKX1jYXRjaChBKXt9TT17bWVzc2FnZTpmLGNvZGU6VX19ZWxzZXtsZXQgQT0iIjtjb25zdCBJPW5ldyBVaW50OEFycmF5KEcpO2ZvcihsZXQgZz0wO2c8RztnKyspe2NvbnN0IFE9Qi5IRUFQOFt5K2ddO0lbZ109USxBKz0oIjAiKygyNTUmUSkudG9TdHJpbmcoMTYpKS5zbGljZSgtMil9TT17aGFzaDpJLGhhc2hIZXg6QSxlbmNvZGVkOkIuVVRGOFRvU3RyaW5nKFIpfX10cnl7Qi5fZnJlZShlKSxCLl9mcmVlKGEpLEIuX2ZyZWUoeSksQi5fZnJlZShSKSx3JiZCLl9mcmVlKHcpLEYmJkIuX2ZyZWUoRil9Y2F0Y2goQSl7fWlmKGYpdGhyb3cgTTtyZXR1cm4gTX0pKX0sdmVyaWZ5OmZ1bmN0aW9uKEEpe3JldHVybiBCKCkudGhlbigoZz0+e2NvbnN0IEI9aShBLnBhc3MpLFE9RShnLEIpLG89Qi5sZW5ndGgsRD1BLnNlY3JldD9DKGcsQS5zZWNyZXQpOjAsZT1BLnNlY3JldD9BLnNlY3JldC5ieXRlTGVuZ3RoOjAsbj1BLmFkP0MoZyxBLmFkKTowLHQ9QS5hZD9BLmFkLmJ5dGVMZW5ndGg6MCxhPUUoZyxpKEEuZW5jb2RlZCkpO2xldCByLHMseSxGPUEudHlwZTtpZih2b2lkIDA9PT1GKXtsZXQgZz1BLmVuY29kZWQuc3BsaXQoIiQiKVsxXTtnJiYoZz1nLnJlcGxhY2UoImEiLCJBIiksRj1JW2ddfHxJLkFyZ29uMmQpfXRyeXtzPWcuX2FyZ29uMl92ZXJpZnlfZXh0KGEsUSxvLEQsZSxuLHQsRil9Y2F0Y2goQSl7cj1BfWlmKHN8fHIpe3RyeXtyfHwocj1nLlVURjhUb1N0cmluZyhnLl9hcmdvbjJfZXJyb3JfbWVzc2FnZShzKSkpfWNhdGNoKEEpe315PXttZXNzYWdlOnIsY29kZTpzfX10cnl7Zy5fZnJlZShRKSxnLl9mcmVlKGEpfWNhdGNoKEEpe31pZihyKXRocm93IHk7cmV0dXJuIHl9KSl9LHVubG9hZFJ1bnRpbWU6ZnVuY3Rpb24oKXtCLl9tb2R1bGUmJihCLl9tb2R1bGUudW5sb2FkUnVudGltZSgpLGRlbGV0ZSBCLl9wcm9taXNlLGRlbGV0ZSBCLl9tb2R1bGUpfX19KT9CLmFwcGx5KEksW10pOkIpfHwoQS5leHBvcnRzPVEpfSw3MjE6ZnVuY3Rpb24oQSxJKXtBLmV4cG9ydHM9IkFHRnpiUUVBQUFBQmt3RVNZQU4vZjM4QmYyQUJmd0YvWUFKL2Z3QmdBbjkvQVg5Z0FYOEFZQVIvZjM5L0FYOWdBMzkvZndCZ0JIOS9mMzhBWUFKL2ZnQmdBbjUvQVg1Z0FuNStBWDVnQlg5L2YzOS9BR0FHZjN4L2YzOS9BWDlnQUFCZ0NIOS9mMzkvZjM5L0FYOWdFWDkvZjM5L2YzOS9mMzkvZjM5L2YzOS9BWDlnQm45L2YzOS9md0YvWUExL2YzOS9mMzkvZjM5L2YzOS9BWDhDRFFJQllRRmhBQUFCWVFGaUFBRURQRHNKQ2dJQUFBSUVBUUVBQVFzR0FRQUhBQUlCQXdJQ0F3SUlCUUVDQXdFSERRTUJCZ1FHQVFFRkJRRUFBQUlFQUFBSUFRQU9Ed1FRQVFVUkF3UUZBWEFCQXdNRkJ3RUJnQUwvL3dFR0NRRi9BVUdRbzhBQ0N3Y3hEQUZqQWdBQlpBQWhBV1VBT3dGbUFBa0Jad0FJQVdnQU9nRnBBRGtCYWdBNEFXc0JBQUZzQURZQmJRQTFBVzRBTXdrSUFRQkJBUXNDQ3pRS3diTUJPd2dBSUFBZ0FhMktDeDRBSUFBZ0FYd2dBRUlCaGtMKy8vLy9INE1nQVVMLy8vLy9ENE4rZkFzWEFFSHdIQ2dDQUVVZ0FFVnlSUVJBSUFBZ0FSQWRDd3VEQkFFRGZ5QUNRWUFFVHdSQUlBQWdBU0FDRUFBYUlBQVBDeUFBSUFKcUlRTUNRQ0FBSUFGelFRTnhSUVJBQWtBZ0FFRURjVVVFUUNBQUlRSU1BUXNnQWtFQlNBUkFJQUFoQWd3QkN5QUFJUUlEUUNBQ0lBRXRBQUE2QUFBZ0FVRUJhaUVCSUFKQkFXb2lBa0VEY1VVTkFTQUNJQU5KRFFBTEN3SkFJQU5CZkhFaUJFSEFBRWtOQUNBQ0lBUkJRR29pQlVzTkFBTkFJQUlnQVNnQ0FEWUNBQ0FDSUFFb0FnUTJBZ1FnQWlBQktBSUlOZ0lJSUFJZ0FTZ0NERFlDRENBQ0lBRW9BaEEyQWhBZ0FpQUJLQUlVTmdJVUlBSWdBU2dDR0RZQ0dDQUNJQUVvQWh3MkFod2dBaUFCS0FJZ05nSWdJQUlnQVNnQ0pEWUNKQ0FDSUFFb0FpZzJBaWdnQWlBQktBSXNOZ0lzSUFJZ0FTZ0NNRFlDTUNBQ0lBRW9BalEyQWpRZ0FpQUJLQUk0TmdJNElBSWdBU2dDUERZQ1BDQUJRVUJySVFFZ0FrRkFheUlDSUFWTkRRQUxDeUFDSUFSUERRRURRQ0FDSUFFb0FnQTJBZ0FnQVVFRWFpRUJJQUpCQkdvaUFpQUVTUTBBQ3d3QkN5QURRUVJKQkVBZ0FDRUNEQUVMSUFBZ0EwRUVheUlFU3dSQUlBQWhBZ3dCQ3lBQUlRSURRQ0FDSUFFdEFBQTZBQUFnQWlBQkxRQUJPZ0FCSUFJZ0FTMEFBam9BQWlBQ0lBRXRBQU02QUFNZ0FVRUVhaUVCSUFKQkJHb2lBaUFFVFEwQUN3c2dBaUFEU1FSQUEwQWdBaUFCTFFBQU9nQUFJQUZCQVdvaEFTQUNRUUZxSWdJZ0EwY05BQXNMSUFBTHp3RUJBMzhDUUNBQ1JRMEFRWDhoQXlBQVJTQUJSWElOQUNBQUtRTlFRZ0JTRFFBQ1FDQUFLQUxnQVNJRElBSnFRWUVCU1EwQUlBQkI0QUJxSWdVZ0Eyb2dBVUdBQVNBRGF5SUVFQVVhSUFCQ2dBRVFHaUFBSUFVUUdVRUFJUU1nQUVFQU5nTGdBU0FCSUFScUlRRWdBaUFFYXlJQ1FZRUJTUTBBQTBBZ0FFS0FBUkFhSUFBZ0FSQVpJQUZCZ0FGcUlRRWdBa0dBQVdzaUFrR0FBVXNOQUFzZ0FDZ0M0QUVoQXdzZ0FDQURha0hnQUdvZ0FTQUNFQVVhSUFBZ0FDZ0M0QUVnQW1vMkF1QUJRUUFoQXdzZ0F3c0pBQ0FBSUFFMkFBQUxwd3dCQjM4Q1FDQUFSUTBBSUFCQkNHc2lBeUFBUVFScktBSUFJZ0ZCZUhFaUFHb2hCUUpBSUFGQkFYRU5BQ0FCUVFOeFJRMEJJQU1nQXlnQ0FDSUJheUlEUWJBZktBSUFTUTBCSUFBZ0FXb2hBQ0FEUWJRZktBSUFSd1JBSUFGQi93Rk5CRUFnQXlnQ0NDSUNJQUZCQTNZaUJFRURkRUhJSDJwR0dpQUNJQU1vQWd3aUFVWUVRRUdnSDBHZ0h5Z0NBRUYrSUFSM2NUWUNBQXdEQ3lBQ0lBRTJBZ3dnQVNBQ05nSUlEQUlMSUFNb0FoZ2hCZ0pBSUFNZ0F5Z0NEQ0lCUndSQUlBTW9BZ2dpQWlBQk5nSU1JQUVnQWpZQ0NBd0JDd0pBSUFOQkZHb2lBaWdDQUNJRURRQWdBMEVRYWlJQ0tBSUFJZ1FOQUVFQUlRRU1BUXNEUUNBQ0lRY2dCQ0lCUVJScUlnSW9BZ0FpQkEwQUlBRkJFR29oQWlBQktBSVFJZ1FOQUFzZ0IwRUFOZ0lBQ3lBR1JRMEJBa0FnQXlBREtBSWNJZ0pCQW5SQjBDRnFJZ1FvQWdCR0JFQWdCQ0FCTmdJQUlBRU5BVUdrSDBHa0h5Z0NBRUYrSUFKM2NUWUNBQXdEQ3lBR1FSQkJGQ0FHS0FJUUlBTkdHMm9nQVRZQ0FDQUJSUTBDQ3lBQklBWTJBaGdnQXlnQ0VDSUNCRUFnQVNBQ05nSVFJQUlnQVRZQ0dBc2dBeWdDRkNJQ1JRMEJJQUVnQWpZQ0ZDQUNJQUUyQWhnTUFRc2dCU2dDQkNJQlFRTnhRUU5IRFFCQnFCOGdBRFlDQUNBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBOExJQU1nQlU4TkFDQUZLQUlFSWdGQkFYRkZEUUFDUUNBQlFRSnhSUVJBSUFWQnVCOG9BZ0JHQkVCQnVCOGdBellDQUVHc0gwR3NIeWdDQUNBQWFpSUFOZ0lBSUFNZ0FFRUJjallDQkNBRFFiUWZLQUlBUncwRFFhZ2ZRUUEyQWdCQnRCOUJBRFlDQUE4TElBVkJ0QjhvQWdCR0JFQkJ0QjhnQXpZQ0FFR29IMEdvSHlnQ0FDQUFhaUlBTmdJQUlBTWdBRUVCY2pZQ0JDQUFJQU5xSUFBMkFnQVBDeUFCUVhoeElBQnFJUUFDUUNBQlFmOEJUUVJBSUFVb0FnZ2lBaUFCUVFOMklnUkJBM1JCeUI5cVJob2dBaUFGS0FJTUlnRkdCRUJCb0I5Qm9COG9BZ0JCZmlBRWQzRTJBZ0FNQWdzZ0FpQUJOZ0lNSUFFZ0FqWUNDQXdCQ3lBRktBSVlJUVlDUUNBRklBVW9BZ3dpQVVjRVFDQUZLQUlJSWdKQnNCOG9BZ0JKR2lBQ0lBRTJBZ3dnQVNBQ05nSUlEQUVMQWtBZ0JVRVVhaUlDS0FJQUlnUU5BQ0FGUVJCcUlnSW9BZ0FpQkEwQVFRQWhBUXdCQ3dOQUlBSWhCeUFFSWdGQkZHb2lBaWdDQUNJRURRQWdBVUVRYWlFQ0lBRW9BaEFpQkEwQUN5QUhRUUEyQWdBTElBWkZEUUFDUUNBRklBVW9BaHdpQWtFQ2RFSFFJV29pQkNnQ0FFWUVRQ0FFSUFFMkFnQWdBUTBCUWFRZlFhUWZLQUlBUVg0Z0FuZHhOZ0lBREFJTElBWkJFRUVVSUFZb0FoQWdCVVliYWlBQk5nSUFJQUZGRFFFTElBRWdCallDR0NBRktBSVFJZ0lFUUNBQklBSTJBaEFnQWlBQk5nSVlDeUFGS0FJVUlnSkZEUUFnQVNBQ05nSVVJQUlnQVRZQ0dBc2dBeUFBUVFGeU5nSUVJQUFnQTJvZ0FEWUNBQ0FEUWJRZktBSUFSdzBCUWFnZklBQTJBZ0FQQ3lBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBc2dBRUgvQVUwRVFDQUFRUU4ySWdGQkEzUkJ5QjlxSVFBQ2YwR2dIeWdDQUNJQ1FRRWdBWFFpQVhGRkJFQkJvQjhnQVNBQ2NqWUNBQ0FBREFFTElBQW9BZ2dMSVFJZ0FDQUROZ0lJSUFJZ0F6WUNEQ0FESUFBMkFnd2dBeUFDTmdJSUR3dEJIeUVDSUFOQ0FEY0NFQ0FBUWYvLy93ZE5CRUFnQUVFSWRpSUJJQUZCZ1A0L2FrRVFka0VJY1NJQmRDSUNJQUpCZ09BZmFrRVFka0VFY1NJQ2RDSUVJQVJCZ0lBUGFrRVFka0VDY1NJRWRFRVBkaUFCSUFKeUlBUnlheUlCUVFGMElBQWdBVUVWYW5aQkFYRnlRUnhxSVFJTElBTWdBallDSENBQ1FRSjBRZEFoYWlFQkFrQUNRQUpBUWFRZktBSUFJZ1JCQVNBQ2RDSUhjVVVFUUVHa0h5QUVJQWR5TmdJQUlBRWdBellDQUNBRElBRTJBaGdNQVFzZ0FFRUFRUmtnQWtFQmRtc2dBa0VmUmh0MElRSWdBU2dDQUNFQkEwQWdBU0lFS0FJRVFYaHhJQUJHRFFJZ0FrRWRkaUVCSUFKQkFYUWhBaUFFSUFGQkJIRnFJZ2RCRUdvb0FnQWlBUTBBQ3lBSElBTTJBaEFnQXlBRU5nSVlDeUFESUFNMkFnd2dBeUFETmdJSURBRUxJQVFvQWdnaUFDQUROZ0lNSUFRZ0F6WUNDQ0FEUVFBMkFoZ2dBeUFFTmdJTUlBTWdBRFlDQ0F0QndCOUJ3QjhvQWdCQkFXc2lBRUYvSUFBYk5nSUFDd3VVTFFFTWZ5TUFRUkJySWd3a0FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUNBQVFmUUJUUVJBUWFBZktBSUFJZ1ZCRUNBQVFRdHFRWGh4SUFCQkMwa2JJZ2hCQTNZaUFuWWlBVUVEY1FSQUlBRkJmM05CQVhFZ0Ftb2lBMEVEZENJQlFkQWZhaWdDQUNJRVFRaHFJUUFDUUNBRUtBSUlJZ0lnQVVISUgyb2lBVVlFUUVHZ0h5QUZRWDRnQTNkeE5nSUFEQUVMSUFJZ0FUWUNEQ0FCSUFJMkFnZ0xJQVFnQTBFRGRDSUJRUU55TmdJRUlBRWdCR29pQVNBQktBSUVRUUZ5TmdJRURBMExJQWhCcUI4b0FnQWlDazBOQVNBQkJFQUNRRUVDSUFKMElnQkJBQ0FBYTNJZ0FTQUNkSEVpQUVFQUlBQnJjVUVCYXlJQUlBQkJESFpCRUhFaUFuWWlBVUVGZGtFSWNTSUFJQUp5SUFFZ0FIWWlBVUVDZGtFRWNTSUFjaUFCSUFCMklnRkJBWFpCQW5FaUFISWdBU0FBZGlJQlFRRjJRUUZ4SWdCeUlBRWdBSFpxSWdOQkEzUWlBRUhRSDJvb0FnQWlCQ2dDQ0NJQklBQkJ5QjlxSWdCR0JFQkJvQjhnQlVGK0lBTjNjU0lGTmdJQURBRUxJQUVnQURZQ0RDQUFJQUUyQWdnTElBUkJDR29oQUNBRUlBaEJBM0kyQWdRZ0JDQUlhaUlDSUFOQkEzUWlBU0FJYXlJRFFRRnlOZ0lFSUFFZ0JHb2dBellDQUNBS0JFQWdDa0VEZGlJQlFRTjBRY2dmYWlFSFFiUWZLQUlBSVFRQ2Z5QUZRUUVnQVhRaUFYRkZCRUJCb0I4Z0FTQUZjallDQUNBSERBRUxJQWNvQWdnTElRRWdCeUFFTmdJSUlBRWdCRFlDRENBRUlBYzJBZ3dnQkNBQk5nSUlDMEcwSHlBQ05nSUFRYWdmSUFNMkFnQU1EUXRCcEI4b0FnQWlCa1VOQVNBR1FRQWdCbXR4UVFGcklnQWdBRUVNZGtFUWNTSUNkaUlCUVFWMlFRaHhJZ0FnQW5JZ0FTQUFkaUlCUVFKMlFRUnhJZ0J5SUFFZ0FIWWlBVUVCZGtFQ2NTSUFjaUFCSUFCMklnRkJBWFpCQVhFaUFISWdBU0FBZG1wQkFuUkIwQ0ZxS0FJQUlnRW9BZ1JCZUhFZ0NHc2hBeUFCSVFJRFFBSkFJQUlvQWhBaUFFVUVRQ0FDS0FJVUlnQkZEUUVMSUFBb0FnUkJlSEVnQ0dzaUFpQURJQUlnQTBraUFoc2hBeUFBSUFFZ0Foc2hBU0FBSVFJTUFRc0xJQUVnQ0dvaUNTQUJUUTBDSUFFb0FoZ2hDeUFCSUFFb0Fnd2lCRWNFUUNBQktBSUlJZ0JCc0I4b0FnQkpHaUFBSUFRMkFnd2dCQ0FBTmdJSURBd0xJQUZCRkdvaUFpZ0NBQ0lBUlFSQUlBRW9BaEFpQUVVTkJDQUJRUkJxSVFJTEEwQWdBaUVISUFBaUJFRVVhaUlDS0FJQUlnQU5BQ0FFUVJCcUlRSWdCQ2dDRUNJQURRQUxJQWRCQURZQ0FBd0xDMEYvSVFnZ0FFRy9mMHNOQUNBQVFRdHFJZ0JCZUhFaENFR2tIeWdDQUNJSlJRMEFRUUFnQ0dzaEF3SkFBa0FDUUFKL1FRQWdDRUdBQWtrTkFCcEJIeUFJUWYvLy93ZExEUUFhSUFCQkNIWWlBQ0FBUVlEK1AycEJFSFpCQ0hFaUFuUWlBQ0FBUVlEZ0gycEJFSFpCQkhFaUFYUWlBQ0FBUVlDQUQycEJFSFpCQW5FaUFIUkJEM1lnQVNBQ2NpQUFjbXNpQUVFQmRDQUlJQUJCRldwMlFRRnhja0VjYWdzaUJVRUNkRUhRSVdvb0FnQWlBa1VFUUVFQUlRQU1BUXRCQUNFQUlBaEJBRUVaSUFWQkFYWnJJQVZCSDBZYmRDRUJBMEFDUUNBQ0tBSUVRWGh4SUFocklnY2dBMDhOQUNBQ0lRUWdCeUlERFFCQkFDRURJQUloQUF3REN5QUFJQUlvQWhRaUJ5QUhJQUlnQVVFZGRrRUVjV29vQWhBaUFrWWJJQUFnQnhzaEFDQUJRUUYwSVFFZ0FnMEFDd3NnQUNBRWNrVUVRRUVBSVFSQkFpQUZkQ0lBUVFBZ0FHdHlJQWx4SWdCRkRRTWdBRUVBSUFCcmNVRUJheUlBSUFCQkRIWkJFSEVpQW5ZaUFVRUZka0VJY1NJQUlBSnlJQUVnQUhZaUFVRUNka0VFY1NJQWNpQUJJQUIySWdGQkFYWkJBbkVpQUhJZ0FTQUFkaUlCUVFGMlFRRnhJZ0J5SUFFZ0FIWnFRUUowUWRBaGFpZ0NBQ0VBQ3lBQVJRMEJDd05BSUFBb0FnUkJlSEVnQ0dzaUFTQURTU0VDSUFFZ0F5QUNHeUVESUFBZ0JDQUNHeUVFSUFBb0FoQWlBUVIvSUFFRklBQW9BaFFMSWdBTkFBc0xJQVJGRFFBZ0EwR29IeWdDQUNBSWEwOE5BQ0FFSUFocUlnWWdCRTBOQVNBRUtBSVlJUVVnQkNBRUtBSU1JZ0ZIQkVBZ0JDZ0NDQ0lBUWJBZktBSUFTUm9nQUNBQk5nSU1JQUVnQURZQ0NBd0tDeUFFUVJScUlnSW9BZ0FpQUVVRVFDQUVLQUlRSWdCRkRRUWdCRUVRYWlFQ0N3TkFJQUloQnlBQUlnRkJGR29pQWlnQ0FDSUFEUUFnQVVFUWFpRUNJQUVvQWhBaUFBMEFDeUFIUVFBMkFnQU1DUXNnQ0VHb0h5Z0NBQ0lDVFFSQVFiUWZLQUlBSVFNQ1FDQUNJQWhySWdGQkVFOEVRRUdvSHlBQk5nSUFRYlFmSUFNZ0NHb2lBRFlDQUNBQUlBRkJBWEkyQWdRZ0FpQURhaUFCTmdJQUlBTWdDRUVEY2pZQ0JBd0JDMEcwSDBFQU5nSUFRYWdmUVFBMkFnQWdBeUFDUVFOeU5nSUVJQUlnQTJvaUFDQUFLQUlFUVFGeU5nSUVDeUFEUVFocUlRQU1Dd3NnQ0VHc0h5Z0NBQ0lHU1FSQVFhd2ZJQVlnQ0dzaUFUWUNBRUc0SDBHNEh5Z0NBQ0lDSUFocUlnQTJBZ0FnQUNBQlFRRnlOZ0lFSUFJZ0NFRURjallDQkNBQ1FRaHFJUUFNQ3d0QkFDRUFJQWhCTDJvaUNRSi9RZmdpS0FJQUJFQkJnQ01vQWdBTUFRdEJoQ05DZnpjQ0FFSDhJa0tBb0lDQWdJQUVOd0lBUWZnaUlBeEJER3BCY0hGQjJLclZxZ1Z6TmdJQVFZd2pRUUEyQWdCQjNDSkJBRFlDQUVHQUlBc2lBV29pQlVFQUlBRnJJZ2R4SWdJZ0NFME5Da0hZSWlnQ0FDSUVCRUJCMENJb0FnQWlBeUFDYWlJQklBTk5JQUVnQkV0eURRc0xRZHdpTFFBQVFRUnhEUVVDUUFKQVFiZ2ZLQUlBSWdNRVFFSGdJaUVBQTBBZ0F5QUFLQUlBSWdGUEJFQWdBU0FBS0FJRWFpQURTdzBEQ3lBQUtBSUlJZ0FOQUFzTFFRQVFEQ0lCUVg5R0RRWWdBaUVGUWZ3aUtBSUFJZ05CQVdzaUFDQUJjUVJBSUFJZ0FXc2dBQ0FCYWtFQUlBTnJjV29oQlFzZ0JTQUlUU0FGUWY3Ly8vOEhTM0lOQmtIWUlpZ0NBQ0lFQkVCQjBDSW9BZ0FpQXlBRmFpSUFJQU5OSUFBZ0JFdHlEUWNMSUFVUURDSUFJQUZIRFFFTUNBc2dCU0FHYXlBSGNTSUZRZjcvLy84SFN3MEZJQVVRRENJQklBQW9BZ0FnQUNnQ0JHcEdEUVFnQVNFQUN5QUFRWDlHSUFoQk1Hb2dCVTF5UlFSQVFZQWpLQUlBSWdFZ0NTQUZhMnBCQUNBQmEzRWlBVUgrLy8vL0Iwc0VRQ0FBSVFFTUNBc2dBUkFNUVg5SEJFQWdBU0FGYWlFRklBQWhBUXdJQzBFQUlBVnJFQXdhREFVTElBQWlBVUYvUncwR0RBUUxBQXRCQUNFRURBY0xRUUFoQVF3RkN5QUJRWDlIRFFJTFFkd2lRZHdpS0FJQVFRUnlOZ0lBQ3lBQ1FmNy8vLzhIU3cwQklBSVFEQ0lCUVg5R1FRQVFEQ0lBUVg5R2NpQUFJQUZOY2cwQklBQWdBV3NpQlNBSVFTaHFUUTBCQzBIUUlrSFFJaWdDQUNBRmFpSUFOZ0lBUWRRaUtBSUFJQUJKQkVCQjFDSWdBRFlDQUFzQ1FBSkFBa0JCdUI4b0FnQWlCd1JBUWVBaUlRQURRQ0FCSUFBb0FnQWlBeUFBS0FJRUlnSnFSZzBDSUFBb0FnZ2lBQTBBQ3d3Q0MwR3dIeWdDQUNJQVFRQWdBQ0FCVFJ0RkJFQkJzQjhnQVRZQ0FBdEJBQ0VBUWVRaUlBVTJBZ0JCNENJZ0FUWUNBRUhBSDBGL05nSUFRY1FmUWZnaUtBSUFOZ0lBUWV3aVFRQTJBZ0FEUUNBQVFRTjBJZ05CMEI5cUlBTkJ5QjlxSWdJMkFnQWdBMEhVSDJvZ0FqWUNBQ0FBUVFGcUlnQkJJRWNOQUF0QnJCOGdCVUVvYXlJRFFYZ2dBV3RCQjNGQkFDQUJRUWhxUVFkeEd5SUFheUlDTmdJQVFiZ2ZJQUFnQVdvaUFEWUNBQ0FBSUFKQkFYSTJBZ1FnQVNBRGFrRW9OZ0lFUWJ3ZlFZZ2pLQUlBTmdJQURBSUxJQUF0QUF4QkNIRWdBeUFIUzNJZ0FTQUhUWElOQUNBQUlBSWdCV28yQWdSQnVCOGdCMEY0SUFkclFRZHhRUUFnQjBFSWFrRUhjUnNpQUdvaUFqWUNBRUdzSDBHc0h5Z0NBQ0FGYWlJQklBQnJJZ0EyQWdBZ0FpQUFRUUZ5TmdJRUlBRWdCMnBCS0RZQ0JFRzhIMEdJSXlnQ0FEWUNBQXdCQzBHd0h5Z0NBQ0FCU3dSQVFiQWZJQUUyQWdBTElBRWdCV29oQWtIZ0lpRUFBa0FDUUFKQUFrQUNRQUpBQTBBZ0FpQUFLQUlBUndSQUlBQW9BZ2dpQUEwQkRBSUxDeUFBTFFBTVFRaHhSUTBCQzBIZ0lpRUFBMEFnQnlBQUtBSUFJZ0pQQkVBZ0FpQUFLQUlFYWlJRUlBZExEUU1MSUFBb0FnZ2hBQXdBQ3dBTElBQWdBVFlDQUNBQUlBQW9BZ1FnQldvMkFnUWdBVUY0SUFGclFRZHhRUUFnQVVFSWFrRUhjUnRxSWdrZ0NFRURjallDQkNBQ1FYZ2dBbXRCQjNGQkFDQUNRUWhxUVFkeEcyb2lCU0FJSUFscUlnWnJJUUlnQlNBSFJnUkFRYmdmSUFZMkFnQkJyQjlCckI4b0FnQWdBbW9pQURZQ0FDQUdJQUJCQVhJMkFnUU1Bd3NnQlVHMEh5Z0NBRVlFUUVHMEh5QUdOZ0lBUWFnZlFhZ2ZLQUlBSUFKcUlnQTJBZ0FnQmlBQVFRRnlOZ0lFSUFBZ0Jtb2dBRFlDQUF3REN5QUZLQUlFSWdCQkEzRkJBVVlFUUNBQVFYaHhJUWNDUUNBQVFmOEJUUVJBSUFVb0FnZ2lBeUFBUVFOMklnQkJBM1JCeUI5cVJob2dBeUFGS0FJTUlnRkdCRUJCb0I5Qm9COG9BZ0JCZmlBQWQzRTJBZ0FNQWdzZ0F5QUJOZ0lNSUFFZ0F6WUNDQXdCQ3lBRktBSVlJUWdDUUNBRklBVW9BZ3dpQVVjRVFDQUZLQUlJSWdBZ0FUWUNEQ0FCSUFBMkFnZ01BUXNDUUNBRlFSUnFJZ0FvQWdBaUF3MEFJQVZCRUdvaUFDZ0NBQ0lERFFCQkFDRUJEQUVMQTBBZ0FDRUVJQU1pQVVFVWFpSUFLQUlBSWdNTkFDQUJRUkJxSVFBZ0FTZ0NFQ0lERFFBTElBUkJBRFlDQUFzZ0NFVU5BQUpBSUFVZ0JTZ0NIQ0lEUVFKMFFkQWhhaUlBS0FJQVJnUkFJQUFnQVRZQ0FDQUJEUUZCcEI5QnBCOG9BZ0JCZmlBRGQzRTJBZ0FNQWdzZ0NFRVFRUlFnQ0NnQ0VDQUZSaHRxSUFFMkFnQWdBVVVOQVFzZ0FTQUlOZ0lZSUFVb0FoQWlBQVJBSUFFZ0FEWUNFQ0FBSUFFMkFoZ0xJQVVvQWhRaUFFVU5BQ0FCSUFBMkFoUWdBQ0FCTmdJWUN5QUZJQWRxSVFVZ0FpQUhhaUVDQ3lBRklBVW9BZ1JCZm5FMkFnUWdCaUFDUVFGeU5nSUVJQUlnQm1vZ0FqWUNBQ0FDUWY4QlRRUkFJQUpCQTNZaUFFRURkRUhJSDJvaEFnSi9RYUFmS0FJQUlnRkJBU0FBZENJQWNVVUVRRUdnSHlBQUlBRnlOZ0lBSUFJTUFRc2dBaWdDQ0FzaEFDQUNJQVkyQWdnZ0FDQUdOZ0lNSUFZZ0FqWUNEQ0FHSUFBMkFnZ01Bd3RCSHlFQUlBSkIvLy8vQjAwRVFDQUNRUWgySWdBZ0FFR0EvajlxUVJCMlFRaHhJZ04wSWdBZ0FFR0E0QjlxUVJCMlFRUnhJZ0YwSWdBZ0FFR0FnQTlxUVJCMlFRSnhJZ0IwUVE5MklBRWdBM0lnQUhKcklnQkJBWFFnQWlBQVFSVnFka0VCY1hKQkhHb2hBQXNnQmlBQU5nSWNJQVpDQURjQ0VDQUFRUUowUWRBaGFpRUVBa0JCcEI4b0FnQWlBMEVCSUFCMElnRnhSUVJBUWFRZklBRWdBM0kyQWdBZ0JDQUdOZ0lBSUFZZ0JEWUNHQXdCQ3lBQ1FRQkJHU0FBUVFGMmF5QUFRUjlHRzNRaEFDQUVLQUlBSVFFRFFDQUJJZ01vQWdSQmVIRWdBa1lOQXlBQVFSMTJJUUVnQUVFQmRDRUFJQU1nQVVFRWNXb2lCQ2dDRUNJQkRRQUxJQVFnQmpZQ0VDQUdJQU0yQWhnTElBWWdCallDRENBR0lBWTJBZ2dNQWd0QnJCOGdCVUVvYXlJRFFYZ2dBV3RCQjNGQkFDQUJRUWhxUVFkeEd5SUFheUlDTmdJQVFiZ2ZJQUFnQVdvaUFEWUNBQ0FBSUFKQkFYSTJBZ1FnQVNBRGFrRW9OZ0lFUWJ3ZlFZZ2pLQUlBTmdJQUlBY2dCRUVuSUFSclFRZHhRUUFnQkVFbmEwRUhjUnRxUVM5cklnQWdBQ0FIUVJCcVNSc2lBa0ViTmdJRUlBSkI2Q0lwQWdBM0FoQWdBa0hnSWlrQ0FEY0NDRUhvSWlBQ1FRaHFOZ0lBUWVRaUlBVTJBZ0JCNENJZ0FUWUNBRUhzSWtFQU5nSUFJQUpCR0dvaEFBTkFJQUJCQnpZQ0JDQUFRUWhxSVFFZ0FFRUVhaUVBSUFFZ0JFa05BQXNnQWlBSFJnMERJQUlnQWlnQ0JFRitjVFlDQkNBSElBSWdCMnNpQkVFQmNqWUNCQ0FDSUFRMkFnQWdCRUgvQVUwRVFDQUVRUU4ySWdCQkEzUkJ5QjlxSVFJQ2YwR2dIeWdDQUNJQlFRRWdBSFFpQUhGRkJFQkJvQjhnQUNBQmNqWUNBQ0FDREFFTElBSW9BZ2dMSVFBZ0FpQUhOZ0lJSUFBZ0J6WUNEQ0FISUFJMkFnd2dCeUFBTmdJSURBUUxRUjhoQUNBSFFnQTNBaEFnQkVILy8vOEhUUVJBSUFSQkNIWWlBQ0FBUVlEK1AycEJFSFpCQ0hFaUFuUWlBQ0FBUVlEZ0gycEJFSFpCQkhFaUFYUWlBQ0FBUVlDQUQycEJFSFpCQW5FaUFIUkJEM1lnQVNBQ2NpQUFjbXNpQUVFQmRDQUVJQUJCRldwMlFRRnhja0VjYWlFQUN5QUhJQUEyQWh3Z0FFRUNkRUhRSVdvaEF3SkFRYVFmS0FJQUlnSkJBU0FBZENJQmNVVUVRRUdrSHlBQklBSnlOZ0lBSUFNZ0J6WUNBQ0FISUFNMkFoZ01BUXNnQkVFQVFSa2dBRUVCZG1zZ0FFRWZSaHQwSVFBZ0F5Z0NBQ0VCQTBBZ0FTSUNLQUlFUVhoeElBUkdEUVFnQUVFZGRpRUJJQUJCQVhRaEFDQUNJQUZCQkhGcUlnTW9BaEFpQVEwQUN5QURJQWMyQWhBZ0J5QUNOZ0lZQ3lBSElBYzJBZ3dnQnlBSE5nSUlEQU1MSUFNb0FnZ2lBQ0FHTmdJTUlBTWdCallDQ0NBR1FRQTJBaGdnQmlBRE5nSU1JQVlnQURZQ0NBc2dDVUVJYWlFQURBVUxJQUlvQWdnaUFDQUhOZ0lNSUFJZ0J6WUNDQ0FIUVFBMkFoZ2dCeUFDTmdJTUlBY2dBRFlDQ0F0QnJCOG9BZ0FpQUNBSVRRMEFRYXdmSUFBZ0NHc2lBVFlDQUVHNEgwRzRIeWdDQUNJQ0lBaHFJZ0EyQWdBZ0FDQUJRUUZ5TmdJRUlBSWdDRUVEY2pZQ0JDQUNRUWhxSVFBTUF3dEIzQjVCTURZQ0FFRUFJUUFNQWdzQ1FDQUZSUTBBQWtBZ0JDZ0NIQ0lDUVFKMFFkQWhhaUlBS0FJQUlBUkdCRUFnQUNBQk5nSUFJQUVOQVVHa0h5QUpRWDRnQW5keElnazJBZ0FNQWdzZ0JVRVFRUlFnQlNnQ0VDQUVSaHRxSUFFMkFnQWdBVVVOQVFzZ0FTQUZOZ0lZSUFRb0FoQWlBQVJBSUFFZ0FEWUNFQ0FBSUFFMkFoZ0xJQVFvQWhRaUFFVU5BQ0FCSUFBMkFoUWdBQ0FCTmdJWUN3SkFJQU5CRDAwRVFDQUVJQU1nQ0dvaUFFRURjallDQkNBQUlBUnFJZ0FnQUNnQ0JFRUJjallDQkF3QkN5QUVJQWhCQTNJMkFnUWdCaUFEUVFGeU5nSUVJQU1nQm1vZ0F6WUNBQ0FEUWY4QlRRUkFJQU5CQTNZaUFFRURkRUhJSDJvaEFnSi9RYUFmS0FJQUlnRkJBU0FBZENJQWNVVUVRRUdnSHlBQUlBRnlOZ0lBSUFJTUFRc2dBaWdDQ0FzaEFDQUNJQVkyQWdnZ0FDQUdOZ0lNSUFZZ0FqWUNEQ0FHSUFBMkFnZ01BUXRCSHlFQUlBTkIvLy8vQjAwRVFDQURRUWgySWdBZ0FFR0EvajlxUVJCMlFRaHhJZ0owSWdBZ0FFR0E0QjlxUVJCMlFRUnhJZ0YwSWdBZ0FFR0FnQTlxUVJCMlFRSnhJZ0IwUVE5MklBRWdBbklnQUhKcklnQkJBWFFnQXlBQVFSVnFka0VCY1hKQkhHb2hBQXNnQmlBQU5nSWNJQVpDQURjQ0VDQUFRUUowUWRBaGFpRUNBa0FDUUNBSlFRRWdBSFFpQVhGRkJFQkJwQjhnQVNBSmNqWUNBQ0FDSUFZMkFnQWdCaUFDTmdJWURBRUxJQU5CQUVFWklBQkJBWFpySUFCQkgwWWJkQ0VBSUFJb0FnQWhDQU5BSUFnaUFTZ0NCRUY0Y1NBRFJnMENJQUJCSFhZaEFpQUFRUUYwSVFBZ0FTQUNRUVJ4YWlJQ0tBSVFJZ2dOQUFzZ0FpQUdOZ0lRSUFZZ0FUWUNHQXNnQmlBR05nSU1JQVlnQmpZQ0NBd0JDeUFCS0FJSUlnQWdCallDRENBQklBWTJBZ2dnQmtFQU5nSVlJQVlnQVRZQ0RDQUdJQUEyQWdnTElBUkJDR29oQUF3QkN3SkFJQXRGRFFBQ1FDQUJLQUljSWdKQkFuUkIwQ0ZxSWdBb0FnQWdBVVlFUUNBQUlBUTJBZ0FnQkEwQlFhUWZJQVpCZmlBQ2QzRTJBZ0FNQWdzZ0MwRVFRUlFnQ3lnQ0VDQUJSaHRxSUFRMkFnQWdCRVVOQVFzZ0JDQUxOZ0lZSUFFb0FoQWlBQVJBSUFRZ0FEWUNFQ0FBSUFRMkFoZ0xJQUVvQWhRaUFFVU5BQ0FFSUFBMkFoUWdBQ0FFTmdJWUN3SkFJQU5CRDAwRVFDQUJJQU1nQ0dvaUFFRURjallDQkNBQUlBRnFJZ0FnQUNnQ0JFRUJjallDQkF3QkN5QUJJQWhCQTNJMkFnUWdDU0FEUVFGeU5nSUVJQU1nQ1dvZ0F6WUNBQ0FLQkVBZ0NrRURkaUlBUVFOMFFjZ2ZhaUVFUWJRZktBSUFJUUlDZjBFQklBQjBJZ0FnQlhGRkJFQkJvQjhnQUNBRmNqWUNBQ0FFREFFTElBUW9BZ2dMSVFBZ0JDQUNOZ0lJSUFBZ0FqWUNEQ0FDSUFRMkFnd2dBaUFBTmdJSUMwRzBIeUFKTmdJQVFhZ2ZJQU0yQWdBTElBRkJDR29oQUFzZ0RFRVFhaVFBSUFBTGZ3RURmeUFBSVFFQ1FDQUFRUU54QkVBRFFDQUJMUUFBUlEwQ0lBRkJBV29pQVVFRGNRMEFDd3NEUUNBQklnSkJCR29oQVNBQ0tBSUFJZ05CZjNNZ0EwR0Jnb1FJYTNGQmdJR0NoSGh4UlEwQUN5QURRZjhCY1VVRVFDQUNJQUJyRHdzRFFDQUNMUUFCSVFNZ0FrRUJhaUlCSVFJZ0F3MEFDd3NnQVNBQWF3dnlBZ0lDZndGK0FrQWdBa1VOQUNBQUlBSnFJZ05CQVdzZ0FUb0FBQ0FBSUFFNkFBQWdBa0VEU1EwQUlBTkJBbXNnQVRvQUFDQUFJQUU2QUFFZ0EwRURheUFCT2dBQUlBQWdBVG9BQWlBQ1FRZEpEUUFnQTBFRWF5QUJPZ0FBSUFBZ0FUb0FBeUFDUVFsSkRRQWdBRUVBSUFCclFRTnhJZ1JxSWdNZ0FVSC9BWEZCZ1lLRUNHd2lBVFlDQUNBRElBSWdCR3RCZkhFaUJHb2lBa0VFYXlBQk5nSUFJQVJCQ1VrTkFDQURJQUUyQWdnZ0F5QUJOZ0lFSUFKQkNHc2dBVFlDQUNBQ1FReHJJQUUyQWdBZ0JFRVpTUTBBSUFNZ0FUWUNHQ0FESUFFMkFoUWdBeUFCTmdJUUlBTWdBVFlDRENBQ1FSQnJJQUUyQWdBZ0FrRVVheUFCTmdJQUlBSkJHR3NnQVRZQ0FDQUNRUnhySUFFMkFnQWdCQ0FEUVFSeFFSaHlJZ1JySWdKQklFa05BQ0FCclVLQmdJQ0FFSDRoQlNBRElBUnFJUUVEUUNBQklBVTNBeGdnQVNBRk53TVFJQUVnQlRjRENDQUJJQVUzQXdBZ0FVRWdhaUVCSUFKQklHc2lBa0VmU3cwQUN3c2dBQXRQQVFKL1FkZ2VLQUlBSWdFZ0FFRURha0Y4Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiRFFBZ0FEOEFRUkIwU3dSQUlBQVFBVVVOQVF0QjJCNGdBRFlDQUNBQkR3dEIzQjVCTURZQ0FFRi9DMjBCQVg4akFFR0FBbXNpQlNRQUlBUkJnTUFFY1NBQ0lBTk1ja1VFUUNBRklBRkIvd0Z4SUFJZ0Eyc2lBa0dBQWlBQ1FZQUNTU0lCR3hBTEdpQUJSUVJBQTBBZ0FDQUZRWUFDRUE0Z0FrR0FBbXNpQWtIL0FVc05BQXNMSUFBZ0JTQUNFQTRMSUFWQmdBSnFKQUFMblFJQkEzOGdBQzBBQUVFZ2NVVUVRQUpBSUFFaEJBSkFJQUlnQUNJQktBSVFJZ0FFZnlBQUJRSi9JQUVpQUNBQkxRQktJZ05CQVdzZ0EzSTZBRW9nQVNnQ0FDSURRUWh4QkVBZ0FDQURRU0J5TmdJQVFYOE1BUXNnQUVJQU53SUVJQUFnQUNnQ0xDSUROZ0ljSUFBZ0F6WUNGQ0FBSUFNZ0FDZ0NNR28yQWhCQkFBc05BU0FCS0FJUUN5QUJLQUlVSWdWclN3UkFJQUVnQkNBQ0lBRW9BaVFSQUFBYURBSUxBbjhnQVN3QVMwRi9TZ1JBSUFJaEFBTkFJQUlnQUNJRFJRMENHaUFFSUFOQkFXc2lBR290QUFCQkNrY05BQXNnQVNBRUlBTWdBU2dDSkJFQUFDQURTUTBDSUFNZ0JHb2hCQ0FCS0FJVUlRVWdBaUFEYXd3QkN5QUNDeUVBSUFVZ0JDQUFFQVVhSUFFZ0FTZ0NGQ0FBYWpZQ0ZBc0xDd3NLQUNBQVFUQnJRUXBKQzJNQkFuOGdBa1VFUUVFQUR3c0NmeUFBTFFBQUlnTUVRQU5BQWtBQ1FDQUJMUUFBSWdSRkRRQWdBa0VCYXlJQ1JRMEFJQU1nQkVZTkFRc2dBd3dEQ3lBQlFRRnFJUUVnQUMwQUFTRURJQUJCQVdvaEFDQUREUUFMQzBFQUN5QUJMUUFBYXd1Y0RRSVFmaEIvSXdCQmdCQnJJaFFrQUNBVVFZQUlhaUFCRUJjZ0ZFR0FDR29nQUJBV0lCUWdGRUdBQ0dvUUZ5QURCRUFnRkNBQ0VCWUxRUUFoQUVFQUlRRURRQ0FVUVlBSWFpQUJRUWQwSWdOQndBQnlhaUlWS1FNQUlCUkJnQWhxSUFOQjRBQnlhaUlXS1FNQUlCUkJnQWhxSUFOcUloY3BBd0FnRkVHQUNHb2dBMEVnY21vaUdDa0RBQ0lJRUFNaUJJVkJJQkFDSWdVUUF5SUdJQWlGUVJnUUFpRUlJQWdnQmlBRklBUWdDQkFESWdlRlFSQVFBaUlLRUFNaUVZVkJQeEFDSVFnZ0ZFR0FDR29nQTBISUFISnFJaGtwQXdBZ0ZFR0FDR29nQTBIb0FISnFJaG9wQXdBZ0ZFR0FDR29nQTBFSWNtb2lHeWtEQUNBVVFZQUlhaUFEUVNoeWFpSWNLUU1BSWdRUUF5SUZoVUVnRUFJaUJoQURJZ3NnQklWQkdCQUNJUVFnQkNBTElBWWdCU0FFRUFNaUM0VkJFQkFDSWhJUUF5SVRoVUUvRUFJaEJDQVVRWUFJYWlBRFFkQUFjbW9pSFNrREFDQVVRWUFJYWlBRFFmQUFjbW9pSGlrREFDQVVRWUFJYWlBRFFSQnlhaUlmS1FNQUlCUkJnQWhxSUFOQk1ISnFJaUFwQXdBaUJSQURJZ2FGUVNBUUFpSU1FQU1pRFNBRmhVRVlFQUloQlNBRklBMGdEQ0FHSUFVUUF5SU5oVUVRRUFJaURCQURJZzZGUVQ4UUFpRUZJQlJCZ0FocUlBTkIyQUJ5YWlJaEtRTUFJQlJCZ0FocUlBTkIrQUJ5YWlJaUtRTUFJQlJCZ0FocUlBTkJHSEpxSWlNcEF3QWdGRUdBQ0dvZ0EwRTRjbW9pQXlrREFDSUdFQU1pRDRWQklCQUNJZ2tRQXlJUUlBYUZRUmdRQWlFR0lBWWdFQ0FKSUE4Z0JoQURJZytGUVJBUUFpSUpFQU1pRUlWQlB4QUNJUVlnRnlBSElBUVFBeUlISUFRZ0RpQUhJQW1GUVNBUUFpSUhFQU1pRG9WQkdCQUNJZ1FRQXlJSk53TUFJQ0lnQnlBSmhVRVFFQUlpQnpjREFDQWRJQTRnQnhBRElnYzNBd0FnSENBRUlBZUZRVDhRQWpjREFDQWJJQXNnQlJBRElnUWdCU0FRSUFRZ0NvVkJJQkFDSWdRUUF5SUhoVUVZRUFJaUJSQURJZ28zQXdBZ0ZpQUVJQXFGUVJBUUFpSUVOd01BSUNFZ0J5QUVFQU1pQkRjREFDQWdJQVFnQllWQlB4QUNOd01BSUI4Z0RTQUdFQU1pQkNBR0lCRWdCQ0FTaFVFZ0VBSWlCQkFESWdXRlFSZ1FBaUlHRUFNaUJ6Y0RBQ0FhSUFRZ0I0VkJFQkFDSWdRM0F3QWdGU0FGSUFRUUF5SUVOd01BSUFNZ0JDQUdoVUUvRUFJM0F3QWdJeUFQSUFnUUF5SUVJQWdnRXlBRUlBeUZRU0FRQWlJRUVBTWlCWVZCR0JBQ0lnZ1FBeUlHTndNQUlCNGdCQ0FHaFVFUUVBSWlCRGNEQUNBWklBVWdCQkFESWdRM0F3QWdHQ0FFSUFpRlFUOFFBamNEQUNBQlFRRnFJZ0ZCQ0VjTkFBc0RRQ0FBUVFSMElnTWdGRUdBQ0dwcUlnRWlGVUdBQkdvcEF3QWdBU2tEZ0FZZ0FTa0RBQ0FCS1FPQUFpSUlFQU1pQklWQklCQUNJZ1VRQXlJR0lBaUZRUmdRQWlFSUlBZ2dCaUFGSUFRZ0NCQURJZ2VGUVJBUUFpSUtFQU1pRVlWQlB4QUNJUWdnQVNrRGlBUWdBU2tEaUFZZ0ZFR0FDR29nQTBFSWNtb2lBeWtEQUNBQktRT0lBaUlFRUFNaUJZVkJJQkFDSWdZUUF5SUxJQVNGUVJnUUFpRUVJQVFnQ3lBR0lBVWdCQkFESWd1RlFSQVFBaUlTRUFNaUU0VkJQeEFDSVFRZ0FTa0RnQVVnQVNrRGdBY2dBU2tEZ0FFZ0FTa0RnQU1pQlJBRElnYUZRU0FRQWlJTUVBTWlEU0FGaFVFWUVBSWhCU0FGSUEwZ0RDQUdJQVVRQXlJTmhVRVFFQUlpREJBRElnNkZRVDhRQWlFRklBRXBBNGdGSUFFcEE0Z0hJQUVwQTRnQklBRXBBNGdESWdZUUF5SVBoVUVnRUFJaUNSQURJaEFnQm9WQkdCQUNJUVlnQmlBUUlBa2dEeUFHRUFNaUQ0VkJFQkFDSWdrUUF5SVFoVUUvRUFJaEJpQUJJQWNnQkJBRElnY2dCQ0FPSUFjZ0NZVkJJQkFDSWdjUUF5SU9oVUVZRUFJaUJCQURJZ2szQXdBZ0FTQUhJQW1GUVJBUUFpSUhOd09JQnlBQklBNGdCeEFESWdjM0E0QUZJQUVnQkNBSGhVRS9FQUkzQTRnQ0lBTWdDeUFGRUFNaUJDQUZJQkFnQkNBS2hVRWdFQUlpQkJBRElnZUZRUmdRQWlJRkVBTWlDamNEQUNBQklBUWdDb1ZCRUJBQ0lnUTNBNEFHSUFFZ0J5QUVFQU1pQkRjRGlBVWdBU0FFSUFXRlFUOFFBamNEZ0FNZ0FTQU5JQVlRQXlJRUlBWWdFU0FFSUJLRlFTQVFBaUlFRUFNaUJZVkJHQkFDSWdZUUF5SUhOd09BQVNBQklBUWdCNFZCRUJBQ0lnUTNBNGdHSUJVZ0JTQUVFQU1pQkRjRGdBUWdBU0FFSUFhRlFUOFFBamNEaUFNZ0FTQVBJQWdRQXlJRUlBZ2dFeUFFSUF5RlFTQVFBaUlFRUFNaUJZVkJHQkFDSWdnUUF5SUdOd09JQVNBQklBUWdCb1ZCRUJBQ0lnUTNBNEFISUFFZ0JTQUVFQU1pQkRjRGlBUWdBU0FFSUFpRlFUOFFBamNEZ0FJZ0FFRUJhaUlBUVFoSERRQUxJQUlnRkJBWElBSWdGRUdBQ0dvUUZpQVVRWUFRYWlRQUM4TUJBUU4vSXdCQlFHb2lBeVFBSUFOQkFFSEFBQkFMSVFSQmZ5RURBa0FnQUVVZ0FVVnlEUUFnQUNnQzVBRWdBa3NOQUNBQUtRTlFRZ0JTRFFBZ0FDQUFOUUxnQVJBYUlBQVFKVUVBSVFNZ0FFSGdBR29pQWlBQUtBTGdBU0lGYWtFQVFZQUJJQVZyRUFzYUlBQWdBaEFaQTBBZ0JDQURRUU4wSWdWcUlBQWdCV29wQXdBUU1pQURRUUZxSWdOQkNFY05BQXNnQVNBRUlBQW9BdVFCRUFVYUlBUkJ3QUFRQkNBQ1FZQUJFQVFnQUVIQUFCQUVRUUFoQXdzZ0JFRkFheVFBSUFNTDFBTUJCbjhqQUVFUWF5SUVKQUFnQkNBQk5nSU1Jd0JCb0FGcklnTWtBQ0FEUVFocVFZQVlRWkFCRUFVYUlBTWdBRFlDTkNBRElBQTJBaHdnQTBGK0lBQnJJZ0pCLy8vLy93Y2dBa0gvLy8vL0Iwa2JJZ1UyQWpnZ0F5QUFJQVZxSWdBMkFpUWdBeUFBTmdJWUlBTkJDR29oQUNNQVFkQUJheUlDSkFBZ0FpQUJOZ0xNQVNBQ1FhQUJha0VBUVNnUUN4b2dBaUFDS0FMTUFUWUN5QUVDUUVFQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCdEJBRWdOQUNBQUtBSk1RUUJPSVFZZ0FDZ0NBQ0VCSUFBc0FFcEJBRXdFUUNBQUlBRkJYM0UyQWdBTElBRkJJSEVoQndKL0lBQW9BakFFUUNBQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCc01BUXNnQUVIUUFEWUNNQ0FBSUFKQjBBQnFOZ0lRSUFBZ0FqWUNIQ0FBSUFJMkFoUWdBQ2dDTENFQklBQWdBallDTENBQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCc2dBVVVOQUJvZ0FFRUFRUUFnQUNnQ0pCRUFBQm9nQUVFQU5nSXdJQUFnQVRZQ0xDQUFRUUEyQWh3Z0FFRUFOZ0lRSUFBb0FoUWFJQUJCQURZQ0ZFRUFDeG9nQUNBQUtBSUFJQWR5TmdJQUlBWkZEUUFMSUFKQjBBRnFKQUFnQlFSQUlBTW9BaHdpQUNBQUlBTW9BaGhHYTBFQU9nQUFDeUFEUWFBQmFpUUFJQVJCRUdva0FBczBBUUYvUVFFaEFRSkFJQUJCQ2trTkFFRUNJUUVEUUNBQVFlUUFTUTBCSUFGQkFXb2hBU0FBUVFwdUlRQU1BQXNBQ3lBQkM0VUJBUWQvQWtBZ0FDMEFBQ0lHUVRCclFmOEJjVUVKU3cwQUlBWWhBZ05BSUFRaEJ5QURRWm16NXN3QlN3MEJJQUpCL3dGeFFUQnJJZ0lnQTBFS2JDSUVRWDl6U3cwQklBSWdCR29oQXlBQUlBZEJBV29pQkdvaUNDMEFBQ0lDUVRCclFmOEJjVUVLU1EwQUN5QUdRVEJHUVFBZ0J4c05BQ0FCSUFNMkFnQWdDQ0VGQ3lBRkN6RUJBMzhEUUNBQUlBSkJBM1FpQTJvaUJDQUVLUU1BSUFFZ0Eyb3BBd0NGTndNQUlBSkJBV29pQWtHQUFVY05BQXNMREFBZ0FDQUJRWUFJRUFVYUMxNEJBbjhqQUVGQWFpSUNKQUJCZnlFREFrQWdBRVVOQUNBQlFRRnJRY0FBVHdSQUlBQVFOd3dCQ3lBQ1FRRTZBQU1nQWtHQUFqc0FBU0FDSUFFNkFBQWdBa0VFY2tFQVFUd1FDeG9nQUNBQ0VEd2hBd3NnQWtGQWF5UUFJQU1McEFvQ0EzOFJmaU1BUVlBQ2F5SURKQUFEUUNBQ1FRTjBJZ1FnQTBHQUFXcHFJQUVnQkdvcEFBQTNBd0FnQWtFQmFpSUNRUkJIRFFBTElBTWdBRUhBQUJBRklRRWdBQ2tEV0VMNXd2aWJrYU96OE5zQWhTRUxJQUFwQTFCQzYvcUcycisxOXNFZmhTRU1JQUFwQTBoQ245ajUyY0tSMm9LYmY0VWhEU0FBS1FOQVF0R0ZtdS82ejVTSDBRQ0ZJUTVDOGUzMCtLV24vYWVsZnlFUFFxdncwL1N2N3J5M1BDRVNRcnZPcXFiWTBPdXp1MzhoRUVLSWt2T2QvOHo1aE9vQUlRVkJBQ0VESUFFcEF6Z2hCaUFCS1FNWUlSUWdBU2tETUNFSElBRXBBeEFoRlNBQktRTW9JUWdnQVNrRENDRVJJQUVwQXlBaENTQUJLUU1BSVFvRFFDQUpJQVVnRGlBQlFZQUJhaUFEUVFaMElnSkJ3QWhxS0FJQVFRTjBhaWtEQUNBSklBcDhmQ0lLaFVFZ0VBSWlEbndpRTRWQkdCQUNJUVVnQlNBVElBNGdBVUdBQVdvZ0FrSEVDR29vQWdCQkEzUnFLUU1BSUFVZ0NueDhJZ3FGUVJBUUFpSU9mQ0lUaFVFL0VBSWhDU0FJSUJBZ0RTQUJRWUFCYWlBQ1FjZ0lhaWdDQUVFRGRHb3BBd0FnQ0NBUmZId2lFWVZCSUJBQ0lnMThJaENGUVJnUUFpRUZJQVVnRUNBTklBRkJnQUZxSUFKQnpBaHFLQUlBUVFOMGFpa0RBQ0FGSUJGOGZDSVJoVUVRRUFJaURYd2lFSVZCUHhBQ0lRVWdFaUFNSUFGQmdBRnFJQUpCMEFocUtBSUFRUU4wYWlrREFDQUhJQlY4ZkNJSWhVRWdFQUlpREh3aUVpQUhoVUVZRUFJaEJ5QUhJQklnRENBQlFZQUJhaUFDUWRRSWFpZ0NBRUVEZEdvcEF3QWdCeUFJZkh3aUZZVkJFQkFDSWd4OElnaUZRVDhRQWlFSElBOGdDeUFCUVlBQmFpQUNRZGdJYWlnQ0FFRURkR29wQXdBZ0JpQVVmSHdpRW9WQklCQUNJZ3Q4SWc4Z0JvVkJHQkFDSVFZZ0JpQUxJQUZCZ0FGcUlBSkIzQWhxS0FJQVFRTjBhaWtEQUNBR0lCSjhmQ0lVaFVFUUVBSWlDeUFQZkNJUGhVRS9FQUloQmlBRklBZ2dDeUFCUVlBQmFpQUNRZUFJYWlnQ0FFRURkR29wQXdBZ0JTQUtmSHdpQ29WQklCQUNJZ3Q4SWdpRlFSZ1FBaUVGSUFVZ0NDQUxJQUZCZ0FGcUlBSkI1QWhxS0FJQVFRTjBhaWtEQUNBRklBcDhmQ0lLaFVFUUVBSWlDM3dpRW9WQlB4QUNJUWdnQnlBUElBNGdBVUdBQVdvZ0FrSG9DR29vQWdCQkEzUnFLUU1BSUFjZ0VYeDhJZytGUVNBUUFpSU9mQ0lSaFVFWUVBSWhCU0FGSUJFZ0RpQUJRWUFCYWlBQ1Fld0lhaWdDQUVFRGRHb3BBd0FnQlNBUGZId2lFWVZCRUJBQ0lnNThJZytGUVQ4UUFpRUhJQVlnRFNBQlFZQUJhaUFDUWZBSWFpZ0NBRUVEZEdvcEF3QWdCaUFWZkh3aUJZVkJJQkFDSWcwZ0Uzd2lFNFZCR0JBQ0lRWWdCaUFUSUEwZ0FVR0FBV29nQWtIMENHb29BZ0JCQTNScUtRTUFJQVVnQm54OEloV0ZRUkFRQWlJTmZDSUZoVUUvRUFJaEJpQUpJQkFnRENBQlFZQUJhaUFDUWZnSWFpZ0NBRUVEZEdvcEF3QWdDU0FVZkh3aUVJVkJJQkFDSWd4OEloT0ZRUmdRQWlFSklBa2dFeUFNSUFGQmdBRnFJQUpCL0FocUtBSUFRUU4wYWlrREFDQUpJQkI4ZkNJVWhVRVFFQUlpREh3aUVJVkJQeEFDSVFrZ0EwRUJhaUlEUVF4SERRQUxJQUVnRGpjRFlDQUJJQWszQXlBZ0FTQU5Od05vSUFFZ0NEY0RLQ0FCSUJFM0F3Z2dBU0FRTndOSUlBRWdERGNEY0NBQklBYzNBekFnQVNBVk53TVFJQUVnRWpjRFVDQUJJQXMzQTNnZ0FTQUdOd000SUFFZ0ZEY0RHQ0FCSUE4M0ExZ2dBU0FGTndOQUlBRWdDamNEQUNBQUlBb2dBQ2tEQUlVZ0JZVTNBd0JCQVNFQ0EwQWdBQ0FDUVFOMElnTnFJZ1FnQVNBRGFpSURLUU1BSUFRcEF3Q0ZJQU5CUUdzcEF3Q0ZOd01BSUFKQkFXb2lBa0VJUncwQUN5QUJRWUFDYWlRQUN5WUJBWDRnQUNBQklBQXBBMEFpQVh3aUFqY0RRQ0FBSUFBcEEwZ2dBU0FDVnExOE53TklDNkFVQWhCL0FuNGpBRUhRQUdzaUJpUUFJQVpCeWc0MkFrd2dCa0UzYWlFVElBWkJPR29oRUFOQUFrQWdEa0VBU0EwQVFmLy8vLzhISUE1cklBUklCRUJCM0I1QlBUWUNBRUYvSVE0TUFRc2dCQ0FPYWlFT0N5QUdLQUpNSWdjaEJBSkFBa0FDUUFKQUFrQUNRQUpBQWtBZ0JnSi9Ba0FnQnkwQUFDSUZCRUFEUUFKQUFrQWdCVUgvQVhFaUJVVUVRQ0FFSVFVTUFRc2dCVUVsUncwQklBUWhCUU5BSUFRdEFBRkJKVWNOQVNBR0lBUkJBbW9pQ0RZQ1RDQUZRUUZxSVFVZ0JDMEFBaUVMSUFnaEJDQUxRU1ZHRFFBTEN5QUZJQWRySVFRZ0FBUkFJQUFnQnlBRUVBNExJQVFORFNBR0tBSk1MQUFCRUE4aEJTQUdLQUpNSVFRZ0JVVU5BeUFFTFFBQ1FTUkhEUU1nQkN3QUFVRXdheUVQUVFFaEVTQUVRUU5xREFRTElBWWdCRUVCYWlJSU5nSk1JQVF0QUFFaEJTQUlJUVFNQUFzQUN5QU9JUXdnQUEwSUlCRkZEUUpCQVNFRUEwQWdBeUFFUVFKMGFpZ0NBQ0lBQkVBZ0FpQUVRUU4wYWlBQUlBRVFKRUVCSVF3Z0JFRUJhaUlFUVFwSERRRU1DZ3NMUVFFaERDQUVRUXBQRFFnRFFDQURJQVJCQW5ScUtBSUFEUWdnQkVFQmFpSUVRUXBIRFFBTERBZ0xRWDhoRHlBRVFRRnFDeUlFTmdKTVFRQWhDQUpBSUFRc0FBQWlEVUVnYXlJRlFSOUxEUUJCQVNBRmRDSUZRWW5SQkhGRkRRQURRQUpBSUFZZ0JFRUJhaUlJTmdKTUlBUXNBQUVpRFVFZ2F5SUVRU0JQRFFCQkFTQUVkQ0lFUVluUkJIRkZEUUFnQkNBRmNpRUZJQWdoQkF3QkN3c2dDQ0VFSUFVaENBc0NRQ0FOUVNwR0JFQWdCZ0ovQWtBZ0JDd0FBUkFQUlEwQUlBWW9Ba3dpQkMwQUFrRWtSdzBBSUFRc0FBRkJBblFnQTJwQndBRnJRUW8yQWdBZ0JDd0FBVUVEZENBQ2FrR0FBMnNvQWdBaENrRUJJUkVnQkVFRGFnd0JDeUFSRFFoQkFDRVJRUUFoQ2lBQUJFQWdBU0FCS0FJQUlnUkJCR28yQWdBZ0JDZ0NBQ0VLQ3lBR0tBSk1RUUZxQ3lJRU5nSk1JQXBCZjBvTkFVRUFJQXBySVFvZ0NFR0F3QUJ5SVFnTUFRc2dCa0hNQUdvUUl5SUtRUUJJRFFZZ0JpZ0NUQ0VFQzBGL0lRa0NRQ0FFTFFBQVFTNUhEUUFnQkMwQUFVRXFSZ1JBQWtBZ0JDd0FBaEFQUlEwQUlBWW9Ba3dpQkMwQUEwRWtSdzBBSUFRc0FBSkJBblFnQTJwQndBRnJRUW8yQWdBZ0JDd0FBa0VEZENBQ2FrR0FBMnNvQWdBaENTQUdJQVJCQkdvaUJEWUNUQXdDQ3lBUkRRY2dBQVIvSUFFZ0FTZ0NBQ0lFUVFScU5nSUFJQVFvQWdBRlFRQUxJUWtnQmlBR0tBSk1RUUpxSWdRMkFrd01BUXNnQmlBRVFRRnFOZ0pNSUFaQnpBQnFFQ01oQ1NBR0tBSk1JUVFMUVFBaEJRTkFJQVVoRWtGL0lRd2dCQ3dBQUVIQkFHdEJPVXNOQnlBR0lBUkJBV29pRFRZQ1RDQUVMQUFBSVFVZ0RTRUVJQVVnRWtFNmJHcEJ6eGhxTFFBQUlnVkJBV3RCQ0VrTkFBc2dCVUVUUmcwQ0lBVkZEUVlnRDBFQVRnUkFJQU1nRDBFQ2RHb2dCVFlDQUNBR0lBSWdEMEVEZEdvcEF3QTNBMEFNQkFzZ0FBMEJDMEVBSVF3TUJRc2dCa0ZBYXlBRklBRVFKQ0FHS0FKTUlRME1BZ3NnRDBGL1NnMERDMEVBSVFRZ0FFVU5CQXNnQ0VILy8zdHhJZ3NnQ0NBSVFZREFBSEViSVFWQkFDRU1RY0FPSVE4Z0VDRUlBa0FDUUFKQUFuOENRQUpBQWtBQ1FBSi9Ba0FDUUFKQUFrQUNRQUpBQWtBZ0RVRUJheXdBQUNJRVFWOXhJQVFnQkVFUGNVRURSaHNnQkNBU0d5SUVRZGdBYXc0aEJCSVNFaElTRWhJU0RoSVBCZzRPRGhJR0VoSVNFZ0lGQXhJU0NSSUJFaElFQUFzQ1FDQUVRY0VBYXc0SERoSUxFZzRPRGdBTElBUkIwd0JHRFFrTUVRc2dCaWtEUUNFVVFjQU9EQVVMUVFBaEJBSkFBa0FDUUFKQUFrQUNRQUpBSUJKQi93RnhEZ2dBQVFJREJCY0ZCaGNMSUFZb0FrQWdEallDQUF3V0N5QUdLQUpBSUE0MkFnQU1GUXNnQmlnQ1FDQU9yRGNEQUF3VUN5QUdLQUpBSUE0N0FRQU1Fd3NnQmlnQ1FDQU9PZ0FBREJJTElBWW9Ba0FnRGpZQ0FBd1JDeUFHS0FKQUlBNnNOd01BREJBTElBbEJDQ0FKUVFoTEd5RUpJQVZCQ0hJaEJVSDRBQ0VFQ3lBUUlRY2dCRUVnY1NFTElBWXBBMEFpRkZCRkJFQURRQ0FIUVFGcklnY2dGS2RCRDNGQjRCeHFMUUFBSUF0eU9nQUFJQlJDRDFZaERTQVVRZ1NJSVJRZ0RRMEFDd3NnQlVFSWNVVWdCaWtEUUZCeURRTWdCRUVFZGtIQURtb2hEMEVDSVF3TUF3c2dFQ0VFSUFZcEEwQWlGRkJGQkVBRFFDQUVRUUZySWdRZ0ZLZEJCM0ZCTUhJNkFBQWdGRUlIVmlFSElCUkNBNGdoRkNBSERRQUxDeUFFSVFjZ0JVRUljVVVOQWlBSklCQWdCMnNpQkVFQmFpQUVJQWxJR3lFSkRBSUxJQVlwQTBBaUZFSi9Wd1JBSUFaQ0FDQVVmU0lVTndOQVFRRWhERUhBRGd3QkN5QUZRWUFRY1FSQVFRRWhERUhCRGd3QkMwSENEa0hBRGlBRlFRRnhJZ3diQ3lFUElCQWhCQUpBSUJSQ2dJQ0FnQkJVQkVBZ0ZDRVZEQUVMQTBBZ0JFRUJheUlFSUJRZ0ZFSUtnQ0lWUWdwK2ZhZEJNSEk2QUFBZ0ZFTC8vLy8vbndGV0lRY2dGU0VVSUFjTkFBc0xJQlduSWdjRVFBTkFJQVJCQVdzaUJDQUhJQWRCQ200aUMwRUtiR3RCTUhJNkFBQWdCMEVKU3lFTklBc2hCeUFORFFBTEN5QUVJUWNMSUFWQi8vOTdjU0FGSUFsQmYwb2JJUVVnQmlrRFFDSVVRZ0JTSUFseVJRUkFRUUFoQ1NBUUlRY01DZ3NnQ1NBVVVDQVFJQWRyYWlJRUlBUWdDVWdiSVFrTUNRc0NmeUFKSWdSQkFFY2hDQUpBQWtBQ1FDQUdLQUpBSWdWQjR4WWdCUnNpQnlJRlFRTnhSU0FFUlhJTkFBTkFJQVV0QUFCRkRRSWdCRUVCYXlJRVFRQkhJUWdnQlVFQmFpSUZRUU54UlEwQklBUU5BQXNMSUFoRkRRRUxBa0FnQlMwQUFFVWdCRUVFU1hJTkFBTkFJQVVvQWdBaUNFRi9jeUFJUVlHQ2hBaHJjVUdBZ1lLRWVIRU5BU0FGUVFScUlRVWdCRUVFYXlJRVFRTkxEUUFMQ3lBRVJRMEFBMEFnQlNBRkxRQUFSUTBDR2lBRlFRRnFJUVVnQkVFQmF5SUVEUUFMQzBFQUN5SUVJQWNnQ1dvZ0JCc2hDQ0FMSVFVZ0JDQUhheUFKSUFRYklRa01DQXNnQ1FSQUlBWW9Ba0FNQWd0QkFDRUVJQUJCSUNBS1FRQWdCUkFOREFJTElBWkJBRFlDRENBR0lBWXBBMEErQWdnZ0JpQUdRUWhxTmdKQVFYOGhDU0FHUVFocUN5RUlRUUFoQkFKQUEwQWdDQ2dDQUNJSFJRMEJJQVpCQkdvZ0J4QWlJZ2RCQUVnaUN5QUhJQWtnQkd0TGNrVUVRQ0FJUVFScUlRZ2dDU0FFSUFkcUlnUkxEUUVNQWdzTFFYOGhEQ0FMRFFVTElBQkJJQ0FLSUFRZ0JSQU5JQVJGQkVCQkFDRUVEQUVMUVFBaENDQUdLQUpBSVEwRFFDQU5LQUlBSWdkRkRRRWdCa0VFYWlBSEVDSWlCeUFJYWlJSUlBUktEUUVnQUNBR1FRUnFJQWNRRGlBTlFRUnFJUTBnQkNBSVN3MEFDd3NnQUVFZ0lBb2dCQ0FGUVlEQUFITVFEU0FLSUFRZ0JDQUtTQnNoQkF3RkN5QUFJQVlyQTBBZ0NpQUpJQVVnQkVFQUVRd0FJUVFNQkFzZ0JpQUdLUU5BUEFBM1FRRWhDU0FUSVFjZ0N5RUZEQUlMUVg4aERBc2dCa0hRQUdva0FDQU1Ed3NnQUVFZ0lBd2dDQ0FIYXlJTElBa2dDU0FMU0JzaUNXb2lDQ0FLSUFnZ0Nrb2JJZ1FnQ0NBRkVBMGdBQ0FQSUF3UURpQUFRVEFnQkNBSUlBVkJnSUFFY3hBTklBQkJNQ0FKSUF0QkFCQU5JQUFnQnlBTEVBNGdBRUVnSUFRZ0NDQUZRWURBQUhNUURRd0FDd0FMa3dJQkFuOGdBRVVFUUVGbkR3c2dBQ2dDQUVVRVFFRi9Ed3NDUUFKL1FYNGdBQ2dDQkVFRVNRMEFHaUFBS0FJSVJRUkFRVzRnQUNnQ0RBMEJHZ3NnQUNnQ0ZDRUJJQUFvQWhCRkRRRkJlaUFCUVFoSkRRQWFJQUFvQWhoRkJFQkJiQ0FBS0FJY0RRRWFDeUFBS0FJZ1JRUkFRV3NnQUNnQ0pBMEJHZ3RCY2lBQUtBSXNJZ0ZCQ0VrTkFCcEJjU0FCUVlDQWdBRkxEUUFhUVhJZ0FTQUFLQUl3SWdKQkEzUkpEUUFhSUFBb0FpaEZCRUJCZEE4TElBSkZCRUJCY0E4TFFXOGdBa0gvLy84SFN3MEFHaUFBS0FJMElnRkZCRUJCWkE4TFFXTWdBVUgvLy84SFN3MEFHaUFBS0FKQUlRRUNRQ0FBS0FJOEJFQWdBUTBCUVdrUEMwRm9JQUVOQVJvTFFRQUxEd3RCYlVGNklBRWJDemdCQVg4akFFRVFheUlDSkFBZ0FpQUFOZ0lNSUFJZ0FUWUNDQ0FDS0FJTVFRQWdBaWdDQ0VIOEZ5Z0NBQkVBQUJvZ0FrRVFhaVFBQzRNU0FoTi9BbjRqQUVFd2F5SUpKQUFDUUNBQUVCd2lCQTBBUVdZaEJDQUJRUUpMRFFBZ0FDZ0NMQ0VESUFBb0FqQWhCQ0FBS0FJNElRSWdDVUVBTmdJQUlBa2dBallDQkNBQUtBSW9JUUlnQ1NBRU5nSVlJQWtnQWpZQ0NDQUpJQVJCQTNRaUFpQURJQUlnQTBzYklBUkJBblFpQW00aUF6WUNFQ0FKSUFOQkFuUTJBaFFnQ1NBQ0lBTnNOZ0lNSUFBb0FqUWhBeUFKSUFFMkFpQWdDU0FETmdJY0lBTWdCRXNFUUNBSklBUTJBaHdMSXdCQjBBQnJJZ3NrQUVGbklRUUNRQ0FKSWdGRklBQWlBMFZ5RFFBZ0FTQUROZ0lvSUFNaEJTQUJLQUlNSVFaQmFpRUNBa0FnQVNJRVJRMEFJQWF0UWdxR0loVkNJSWluRFFBZ0ZhY2hBZ0pBSUFVb0Fqd2lCUVJBSUFRZ0FpQUZFUU1BR2lBRUtBSUFJUUlNQVFzZ0JDQUNFQWtpQWpZQ0FBdEJBRUZxSUFJYklRSUxJQUlpQkEwQUlBRW9BaUFoQlNNQVFZQUNheUlDSkFBZ0EwVWdDeUlFUlhKRkJFQWdBa0VRYWtIQUFCQVlHaUFDUVF4cUlBTW9BakFRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BZ1FRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BaXdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BaWdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BamdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBVVFCeUFDUVJCcUlBSkJER3BCQkJBR0dpQUNRUXhxSUFNb0Fnd1FCeUFDUVJCcUlBSkJER3BCQkJBR0dnSkFJQU1vQWdnaUJVVU5BQ0FDUVJCcUlBVWdBeWdDREJBR0dpQURMUUJFUVFGeFJRMEFJQU1vQWdnZ0F5Z0NEQkFkSUFOQkFEWUNEQXNnQWtFTWFpQURLQUlVRUFjZ0FrRVFhaUFDUVF4cVFRUVFCaG9nQXlnQ0VDSUZCRUFnQWtFUWFpQUZJQU1vQWhRUUJob0xJQUpCREdvZ0F5Z0NIQkFISUFKQkVHb2dBa0VNYWtFRUVBWWFBa0FnQXlnQ0dDSUZSUTBBSUFKQkVHb2dCU0FES0FJY0VBWWFJQU10QUVSQkFuRkZEUUFnQXlnQ0dDQURLQUljRUIwZ0EwRUFOZ0ljQ3lBQ1FReHFJQU1vQWlRUUJ5QUNRUkJxSUFKQkRHcEJCQkFHR2lBREtBSWdJZ1VFUUNBQ1FSQnFJQVVnQXlnQ0pCQUdHZ3NnQWtFUWFpQUVRY0FBRUJJYUN5QUNRWUFDYWlRQUlBdEJRR3RCQ0JBRVFRQWhBaU1BUVlBSWF5SURKQUFnQVNnQ0dBUkFJQVJCeEFCcUlRWWdCRUZBYXlFRkEwQWdCVUVBRUFjZ0JpQUNFQWNnQTBHQUNDQUVRY2dBRUNBZ0FTZ0NBQ0FCS0FJVUlBSnNRUXAwYWlBREVDNGdCVUVCRUFjZ0EwR0FDQ0FFUWNnQUVDQWdBU2dDQUNBQktBSVVJQUpzUVFwMGFrR0FDR29nQXhBdUlBSkJBV29pQWlBQktBSVlTUTBBQ3dzZ0EwR0FDQkFFSUFOQmdBaHFKQUFnQzBISUFCQUVRUUFoQkFzZ0MwSFFBR29rQUNBRURRQkJaeUVFQWtBZ0NVVU5BQ0FCS0FJWVJRMEFJd0JCSUdzaUJTUUFJQUVpQ3lnQ0NBUkFJQXNvQWhnaEJBTkFJQVFoQTBFQUlROERRRUVBSVJCQkFDRUNJQU1FUUFOQUlBVWdEem9BR0NBRlFRQTJBaHdnQlNBRktRTVlOd01JSUFVZ0VqWUNFQ0FGSUJBMkFoUWdCU0FGS1FNUU53TUFJQVVoQkVFQUlSRWpBRUdBR0dzaUJ5UUFBa0FnQ3lJRFJRMEFBa0FDUUFKQUFuOENmd0pBQWtBQ1FDQURLQUlnUVFGckRnSUNBUUFMSUFRb0FnQWhDRUVBREFNTElBUW9BZ0FOQTBFQUlBUXRBQWdpREVFQ1NRMEJHaUFFTFFBSUlnaEZRUUYwSVF3TUJRc2dCQzBBQ0NFTUlBUW9BZ0FMSVFnZ0J4QXZJQWRCZ0FocUVDOGdCeUFJclRjRGdBZ2dCRFVDQkNFVklBY2dESzFDL3dHRE53T1FDQ0FISUJVM0E0Z0lJQWNnQXpVQ0REY0RtQWdnQnlBRE5RSUlOd09nQ0NBSElBTTFBaUEzQTZnSVFRRUxJUkVnQ0VVTkFRc2dCQzBBQ0NFSVFRQWhEQXdCQ3lBRUxRQUlJZ2hGUVFGMElRd2dDQ0FSUlhJTkFDQUhRWUFRYWlBSFFZQUlhaUFIRUNaQkFpRU1RUUFoQ0FzZ0RDQURLQUlRSWdaUERRQkJmeUFES0FJVUlnSkJBV3NnQWlBRUtBSUViQ0FNYWlBR0lBaEIvd0Z4YkdvaUNDQUNjQnNnQ0dvaEJnTkFJQWhCQVdzZ0JpQUlJQUp3UVFGR0d5RU9BbjhnRVFSQUlBeEIvd0J4SWdKRkJFQWdCMEdBRUdvZ0IwR0FDR29nQnhBbUN5QUhRWUFRYWlBQ1FRTjBhZ3dCQ3lBREtBSUFJQTVCQ25ScUN5RUNJQU1vQWhnaENpQUNLUU1BSVJVZ0JDQU1OZ0lNSUFNaEJpQVZweUVVSUJWQ0lJaW5JQXB3clNJVklCVWdCRFVDQkNJVklBUXRBQWdiSUFRb0FnQWJJaFlnRlZFaENnSitJQVFpQWlnQ0FFVUVRQ0FDTFFBSUlnMUZCRUFnQWlnQ0RFRUJheUVLUWdBTUFnc2dCaWdDRUNBTmJDRU5JQUlvQWd3aEFpQUtCRUFnQWlBTmFrRUJheUVLUWdBTUFnc2dEU0FDUldzaENrSUFEQUVMSUFZb0FoQWhEU0FHS0FJVUlSTUNmeUFLQkVBZ0FpZ0NEQ0FUSUExQmYzTnFhZ3dCQ3lBVElBMXJJQUlvQWd4RmF3c2hDa0lBSUFJdEFBZ2lBa0VEUmcwQUdpQU5JQUpCQVdwc3JRc2hGU0FWSUFwQkFXdXRmQ0FLclNBVXJTSVZJQlYrUWlDSWZrSWdpSDBnQmpVQ0ZJS25JUVlnQXlnQ0FDSUNJQU1vQWhRZ0ZxZHNRUXAwYWlBR1FRcDBhaUVHSUFJZ0NFRUtkR29oQ2dKQUlBTW9BZ1JCRUVZRVFDQUNJQTVCQ25ScUlBWWdDa0VBRUJFTUFRc2dBaUFPUVFwMGFpRUNJQVFvQWdCRkJFQWdBaUFHSUFwQkFCQVJEQUVMSUFJZ0JpQUtRUUVRRVFzZ0RFRUJhaUlNSUFNb0FoQlBEUUVnQ0VFQmFpRUlJQTVCQVdvaEJpQURLQUlVSVFJTUFBc0FDeUFIUVlBWWFpUUFJQXNvQWhnaUJDRUNJQkJCQVdvaUVDQUVTUTBBQ3dzZ0FpRURJQTlCQVdvaUQwRUVSdzBBQ3lBU1FRRnFJaElnQ3lnQ0NFa05BQXNMSUFWQklHb2tBRUVBSVFRTElBUU5BQ01BUVlBUWF5SURKQUFnQUVVZ0NVVnlSUVJBSUFOQmdBaHFJQUVvQWdBZ0FTZ0NGRUVLZEdwQmdBaHJFQmNnQVNnQ0dFRUNUd1JBUVFFaEJBTkFJQU5CZ0FocUlBRW9BZ0FnQVNnQ0ZDSUNJQUlnQkd4cVFRcDBha0dBQ0dzUUZpQUVRUUZxSWdRZ0FTZ0NHRWtOQUFzTElBTWlBa0dBQ0dvaEMwRUFJUVFEUUNBQ0lBUkJBM1FpQldvZ0JTQUxhaWtEQUJBeUlBUkJBV29pQkVHQUFVY05BQXNnQUNnQ0FDQUFLQUlFSUFOQmdBZ1FJQ0FEUVlBSWFrR0FDQkFFSUFOQmdBZ1FCQ0FCS0FJQUlnUWdBU2dDREVFS2RDSUJFQVFDUUNBQUtBSkFJZ0FFUUNBRUlBRWdBQkVDQUF3QkN5QUVFQWdMQ3lBRFFZQVFhaVFBUVFBaEJBc2dDVUV3YWlRQUlBUUxKd0VCZndKQUFrQUNRQUpBSUFBT0F3QUJBZ01MUWRBVER3dEJpeEVQQzBHZUV5RUJDeUFCQzQ4REFRRi9Jd0JCZ0FOcklnUWtBQ0FFUVFBMkFvd0JJQVJCakFGcUlBRVFCd0pBSUFGQndBQk5CRUFnQkVHUUFXb2dBUkFZUVFCSURRRWdCRUdRQVdvZ0JFR01BV3BCQkJBR1FRQklEUUVnQkVHUUFXb2dBaUFERUFaQkFFZ05BU0FFUVpBQmFpQUFJQUVRRWhvTUFRc2dCRUdRQVdwQndBQVFHRUVBU0EwQUlBUkJrQUZxSUFSQmpBRnFRUVFRQmtFQVNBMEFJQVJCa0FGcUlBSWdBeEFHUVFCSURRQWdCRUdRQVdvZ0JFRkFhMEhBQUJBU1FRQklEUUFnQUNBRUtRTkFOd0FBSUFBZ0JDa0RTRGNBQ0NBQUlBUXBBMWczQUJnZ0FDQUVLUU5RTndBUUlBQkJJR29oQUNBQlFTQnJJZ0pCd1FCUEJFQURRQ0FFSUFSQlFHdEJ3QUFRQlNJQlFVQnJRY0FBSUFFUU1VRUFTQTBDSUFBZ0FTa0RRRGNBQUNBQUlBRXBBMGczQUFnZ0FDQUVLUU5ZTndBWUlBQWdCQ2tEVURjQUVDQUFRU0JxSVFBZ0FrRWdheUlDUWNBQVN3MEFDd3NnQkNBRVFVQnJRY0FBRUFVaUFVRkFheUFDSUFFUU1VRUFTQTBBSUFBZ0FVRkFheUFDRUFVYUN5QUVRWkFCYWtId0FSQUVJQVJCZ0FOcUpBQUxBd0FCQzVrQ0FDQUFSUVJBUVFBUEN3Si9Ba0FnQUFSL0lBRkIvd0JORFFFQ1FFR2dIaWdDQUNnQ0FFVUVRQ0FCUVlCL2NVR0F2d05HRFFNTUFRc2dBVUgvRDAwRVFDQUFJQUZCUDNGQmdBRnlPZ0FCSUFBZ0FVRUdka0hBQVhJNkFBQkJBZ3dFQ3lBQlFZQ3dBMDlCQUNBQlFZQkFjVUdBd0FOSEcwVUVRQ0FBSUFGQlAzRkJnQUZ5T2dBQ0lBQWdBVUVNZGtIZ0FYSTZBQUFnQUNBQlFRWjJRVDl4UVlBQmNqb0FBVUVEREFRTElBRkJnSUFFYTBILy96OU5CRUFnQUNBQlFUOXhRWUFCY2pvQUF5QUFJQUZCRW5aQjhBRnlPZ0FBSUFBZ0FVRUdka0UvY1VHQUFYSTZBQUlnQUNBQlFReDJRVDl4UVlBQmNqb0FBVUVFREFRTEMwSGNIa0VaTmdJQVFYOEZRUUVMREFFTElBQWdBVG9BQUVFQkN3dFFBUU4vQWtBZ0FDZ0NBQ3dBQUJBUFJRUkFEQUVMQTBBZ0FDZ0NBQ0lDTEFBQUlRTWdBQ0FDUVFGcU5nSUFJQUVnQTJwQk1Hc2hBU0FDTEFBQkVBOUZEUUVnQVVFS2JDRUJEQUFMQUFzZ0FRdTdBZ0FDUUNBQlFSUkxEUUFDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUNBQlFRbHJEZ29BQVFJREJBVUdCd2dKQ2dzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQktBSUFOZ0lBRHdzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQk5BSUFOd01BRHdzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQk5RSUFOd01BRHdzZ0FpQUNLQUlBUVFkcVFYaHhJZ0ZCQ0dvMkFnQWdBQ0FCS1FNQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTWdFQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTXdFQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTUFBQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTVFBQU53TUFEd3NnQWlBQ0tBSUFRUWRxUVhoeElnRkJDR28yQWdBZ0FDQUJLd01BT1FNQUR3c2dBQ0FDUVFBUkFnQUxDeGtBSUFBdEFPZ0JCRUFnQUVKL053TllDeUFBUW44M0ExQUxJd0FnQVNBQktRTXdRZ0Y4TndNd0lBSWdBU0FBUVFBUUVTQUNJQUFnQUVFQUVCRUxPUUVDZnlBQVFRTnVJZ0pCQW5RaEFRSkFBa0FDUUNBQ1FRTnNRWDl6SUFCcURnSUJBQUlMSUFGQkFYSWhBUXNnQVVFQ2FpRUJDeUFCQzNvQkFuOGdBRUhBL3dCelFRRnFRUWgyUVg5elFTOXhJQUJCd2Y4QWMwRUJha0VJZGtGL2MwRXJjU0FBUWViL0EycEJDSFpCL3dGeElnRWdBRUhCQUdweGNuSWdBRUhNL3dOcVFRaDJJZ0lnQUVISEFHcHhJQUZCL3dGemNYSWdBRUg4QVdvZ0FFSEMvd05xUVFoMmNTQUNRWDl6Y1VIL0FYRnlDOVlCQVFWL1FYOGhCQ0FEUVFOdUlnWkJBblFoQlFKQUFrQUNRQ0FHUVFOc1FYOXpJQU5xRGdJQkFBSUxJQVZCQVhJaEJRc2dCVUVDYWlFRkN5QUJJQVZMQkg4Q1FDQURSUTBBUVFBaEFVRUlJUVFEUUNBQklBSXRBQUFpQ0hJaEJ3TkFJQUFpQVNBSElBUWlCa0VHYXlJRWRrRS9jUkFvT2dBQUlBRkJBV29oQUNBRVFRVkxEUUFMSUFOQkFXc2lBd1JBSUFKQkFXb2hBaUFIUVFoMElRRWdCRUVJYWlFRURBRUxDeUFFUlEwQUlBRWdDRUVNSUFacmRFRS9jUkFvT2dBQklBRkJBbW9oQUFzZ0FFRUFPZ0FBSUFVRklBUUxDOG9FQVFOL0l3QkI0QUJySWdRa0FDQURFQjhoQlNBQ0VCd2hBd0pBQWtBZ0JVVU5BQ0FERFFFZ0FVRUNTUTBBSUFCQkpEc0FBQ0FCUVFGcklnTWdCUkFLSWdGTkRRQWdBRUVCYWlBRklBRkJBV29RQlNFQUlBTWdBV3NpQTBFRVNRMEFJQUFnQVdvaUFVR2s3UFVCTmdBQUlBUWdBaWdDT0RZQ01DQUVRVUJySUFSQk1Hb1FFeUFEUVFOcklnTWdCRUZBYXhBS0lnQk5EUUFnQVVFRGFpQUVRVUJySUFCQkFXb1FCU0VCSUFNZ0FHc2lBMEVFU1EwQUlBQWdBV29pQVVHazJ2VUJOZ0FBSUFRZ0FpZ0NMRFlDSUNBRVFVQnJJQVJCSUdvUUV5QURRUU5ySWdNZ0JFRkFheEFLSWdCTkRRQWdBVUVEYWlBRVFVQnJJQUJCQVdvUUJTRUJJQU1nQUdzaUEwRUVTUTBBSUFBZ0FXb2lBVUdzNlBVQk5nQUFJQVFnQWlnQ0tEWUNFQ0FFUVVCcklBUkJFR29RRXlBRFFRTnJJZ01nQkVGQWF4QUtJZ0JORFFBZ0FVRURhaUFFUVVCcklBQkJBV29RQlNFQklBTWdBR3NpQTBFRVNRMEFJQUFnQVdvaUFVR3M0UFVCTmdBQUlBUWdBaWdDTURZQ0FDQUVRVUJySUFRUUV5QURRUU5ySWdNZ0JFRkFheEFLSWdCTkRRQWdBVUVEYWlBRVFVQnJJQUJCQVdvUUJTRUJJQU1nQUdzaUEwRUNTUTBBSUFBZ0FXb2lBRUVrT3dBQUlBQkJBV29pQUNBRFFRRnJJZ1lnQWlnQ0VDQUNLQUlVRUNraUFVRi9SaUlGRFFCQllTRURJQVpCQUNBQklBVWJheUlHUVFKSkRRRWdBQ0FBSUFGcUlBVWJJZ0JCSkRzQUFDQUFRUUZxSUFaQkFXc2dBaWdDQUNBQ0tBSUVFQ2toQUNBRVFlQUFhaVFBUVdGQkFDQUFRWDlHR3c4TFFXRWhBd3NnQkVIZ0FHb2tBQ0FEQzdnQkFRRi9RUUFnQUVFRWFpQUFRZEQvQTJwQkNIWkJmM054UVRrZ0FHdEJDSFpCZjNOeFFmOEJjU0FBUWNFQWF5SUJJQUZCQ0haQmYzTnhRZG9BSUFCclFRaDJRWDl6Y1VIL0FYRWdBRUc1QVdvZ0FFR2Yvd05xUVFoMlFYOXpjVUg2QUNBQWEwRUlka0YvYzNGQi93RnhJQUJCMFA4QWMwRUJha0VJZGtGL2MwRS9jU0FBUWRUL0FITkJBV3BCQ0haQmYzTkJQbkZ5Y25KeUlnRnJRUWgyUVg5eklBQkJ2djhEYzBFQmFrRUlkbkZCL3dGeElBRnlDNjRCQVFSL0FuOENmeUFDTEFBQUVDc2lCa0gvQVVZRVFFRi9EQUVMQTBBZ0JDQUdhaUVFQWtBZ0EwRUdhaUlHUVFoSkJFQWdCaUVEREFFTElBRW9BZ0FnQlUwRVFFRUFEd3NnQUNBRUlBTkJBbXNpQTNZNkFBQWdBRUVCYWlFQUlBVkJBV29oQlFzZ0FrRUJhaUlDTEFBQUVDc2lCa0gvQVVjRVFDQUVRUVowSVFRTUFRc0xRUUFnQTBFRVN3MEJHa0YvSUFOMEN5RURRUUFnQkNBRFFYOXpjUTBBR2lBQklBVTJBZ0FnQWdzTHJBTUJCWDhqQUVFUWF5SURKQUFnQUNnQ0JDRUdJQUFvQWhRaEJ3SkFJQUlRSHlJRVJRUkFRV1loQWd3QkMwRmdJUUlnQVMwQUFDSUZRU1JIRFFBZ0FVRUJhaUFCSUFWQkpFWWJJZ0VnQkNBRUVBb2lCQkFRSWdVTkFDQUFRUkEyQWpnZ0FTQUJJQVJxSWdFZ0JSc2lCRUhmRkVFREVCQkZCRUFnQkVFRGFpQURRUXhxRUJVaUFVVU5BU0FBSUFNb0FndzJBamdMSUFGQjZ4UkJBeEFRRFFBZ0FVRURhaUFEUVF4cUVCVWlBVVVOQUNBQUlBTW9BZ3cyQWl3Z0FVSGpGRUVERUJBTkFDQUJRUU5xSUFOQkRHb1FGU0lCUlEwQUlBQWdBeWdDRERZQ0tDQUJRZWNVUVFNUUVBMEFJQUZCQTJvZ0EwRU1haEFWSWdGRkRRQWdBQ0FES0FJTUlnUTJBakFnQUNBRU5nSTBJQUV0QUFCQkpFY05BQ0FESUFjMkFnd2dBQ2dDRUNBRFFReHFJQUZCQVdvUUxDSUJSUTBBSUFBZ0F5Z0NERFlDRkNBQkxRQUFRU1JIRFFBZ0F5QUdOZ0lNSUFBb0FnQWdBMEVNYWlBQlFRRnFFQ3dpQVVVTkFDQUFJQU1vQWd3MkFnUWdBRUVBTmdKRUlBQkNBRGNDUENBQVFnQTNBaGdnQUVJQU53SWdJQUFRSENJQ0RRQkJZRUVBSUFFdEFBQWJJUUlMSUFOQkVHb2tBQ0FDQ3lrQkFuOERRQ0FBSUFKQkEzUWlBMm9nQVNBRGFpa0FBRGNEQUNBQ1FRRnFJZ0pCZ0FGSERRQUxDd3dBSUFCQkFFR0FDQkFMR2d0bEFRSi9JQUFnQWhBZUlnSUVmeUFDQlVGZFFRQUNmeUFBS0FJQUlRUkJBQ0VDSUFBb0FnUWlBQVIvQTBBZ0F5QUNJQVJxTFFBQUlBRWdBbW90QUFCemNpRURJQUpCQVdvaUFpQUFSdzBBQ3lBRFFRRnJRUWgyUVFGeFFRRnJCVUVBQ3dzYkN3dGRBUUovSXdCQjhBRnJJZ01rQUVGL0lRUUNRQ0FDUlNBQVJTQUJSWEp5SUFGQndBQkxjZzBBSUFNZ0FSQVlRUUJJRFFBZ0F5QUNRY0FBRUFaQkFFZ05BQ0FESUFBZ0FSQVNJUVFMSUFOQjhBRVFCQ0FEUWZBQmFpUUFJQVFMQ1FBZ0FDQUJOd0FBQ3hBQUl3QWdBR3RCY0hFaUFDUUFJQUFMTXdFQmZ5QUFLQUlVSWdNZ0FTQUNJQUFvQWhBZ0Eyc2lBU0FCSUFKTEd5SUJFQVVhSUFBZ0FDZ0NGQ0FCYWpZQ0ZDQUNDOW9CQVFSL0l3QkIwQUJySWdna0FBSkFJQUJGQkVCQllDRUFEQUVMSUFnZ0FCQUtJZ2syQWd3Z0NDQUpOZ0ljSUFnZ0NSQUpJZ28yQWhnZ0NDQUpFQWtpQ3pZQ0NFRUFJUWtDUUFKQUlBcEZJQXRGY2cwQUlBZ2dBallDRkNBSUlBRTJBaEFnQ0VFSWFpQUFJQWNRTFNJQURRRWdDQ2dDQ0NFSklBZ2dDQ2dDREJBSklnQTJBZ2dnQUVVTkFDQUlJQVkyQWl3Z0NDQUZOZ0lvSUFnZ0JEWUNKQ0FJSUFNMkFpQWdDRUVJYWlBSklBY1FNQ0VBREFFTFFXb2hBQXNnQ0NnQ0dCQUlJQWdvQWdnUUNDQUpFQWdMSUFoQjBBQnFKQUFnQUF1UUFnRURmeU1BUWRBQWF5SVJKQUJCZmlFVEFrQWdDRUVFU1EwQUlBZ1FDU0lTUlFSQVFXb2hFd3dCQ3lBUlFRQTJBa3dnRVVJQU53SkVJQkVnQWpZQ1BDQVJJQUkyQWpnZ0VTQUJOZ0kwSUJFZ0FEWUNNQ0FSSUE4MkFpd2dFU0FPTmdJb0lCRWdEVFlDSkNBUklBdzJBaUFnRVNBR05nSWNJQkVnQlRZQ0dDQVJJQVEyQWhRZ0VTQUROZ0lRSUJFZ0NEWUNEQ0FSSUJJMkFnZ2dFU0FRTmdKQUFrQWdFVUVJYWlBTEVCNGlFd1JBSUJJZ0NCQUVEQUVMSUFjRVFDQUhJQklnQ0JBRkdnc0NRQ0FKUlNBS1JYSU5BQ0FKSUFvZ0VVRUlhaUFMRUNwRkRRQWdFaUFJRUFRZ0NTQUtFQVJCWVNFVERBRUxJQklnQ0JBRVFRQWhFd3NnRWhBSUN5QVJRZEFBYWlRQUlCTUxEUUFnQUVId0FSQUVJQUFRSlFzcEFDQUZFQjhRQ2lBQUVCUnFJQUVRRkdvZ0FoQVVhaUFERUNkcUlBUVFKMnBCRXhBVWFrRVFhZ3NmQUNBQVFTTnFJZ0JCSTAwRVFDQUFRUUowUWV3V2FpZ0NBQThMUVlzVEM3NEJBUVIvSXdCQjBBQnJJZ1FrQUFKQUlBQkZCRUJCWUNFQURBRUxJQVFnQUJBS0lnVTJBZ3dnQkNBRk5nSWNJQVFnQlJBSklnWTJBaGdnQkNBRkVBa2lCellDQ0VFQUlRVUNRQUpBSUFaRklBZEZjZzBBSUFRZ0FqWUNGQ0FFSUFFMkFoQWdCRUVJYWlBQUlBTVFMU0lBRFFFZ0JDZ0NDQ0VGSUFRZ0JDZ0NEQkFKSWdBMkFnZ2dBRVVOQUNBRVFRaHFJQVVnQXhBd0lRQU1BUXRCYWlFQUN5QUVLQUlZRUFnZ0JDZ0NDQkFJSUFVUUNBc2dCRUhRQUdva0FDQUFDNElDQVFOL0l3QkIwQUJySWcwa0FFRitJUThDUUNBSVFRUkpEUUFnQ0JBSklnNUZCRUJCYWlFUERBRUxJQTFDQURjREtDQU5RZ0EzQXlBZ0RTQUdOZ0ljSUEwZ0JUWUNHQ0FOSUFRMkFoUWdEU0FETmdJUUlBMGdDRFlDRENBTklBNDJBZ2dnRFVFQU5nSk1JQTFDQURjQ1JDQU5JQUkyQWp3Z0RTQUNOZ0k0SUEwZ0FUWUNOQ0FOSUFBMkFqQWdEU0FNTmdKQUFrQWdEVUVJYWlBTEVCNGlEd1JBSUE0Z0NCQUVEQUVMSUFjRVFDQUhJQTRnQ0JBRkdnc0NRQ0FKUlNBS1JYSU5BQ0FKSUFvZ0RVRUlhaUFMRUNwRkRRQWdEaUFJRUFRZ0NTQUtFQVJCWVNFUERBRUxJQTRnQ0JBRVFRQWhEd3NnRGhBSUN5QU5RZEFBYWlRQUlBOExZZ0VEZnlBQlJTQUFSWElFZjBGL0JTQUFRVUJyUVFCQnNBRVFDeG9nQUVHQUNFSEFBQkFGR2dOQUlBQWdBa0VEZENJRGFpSUVJQUVnQTJvcEFBQWdCQ2tEQUlVM0F3QWdBa0VCYWlJQ1FRaEhEUUFMSUFBZ0FTMEFBRFlDNUFGQkFBc0xDL0lTRkFCQmdBZ0x1UVVJeWJ6elorWUphanVueW9TRnJtZTdLL2lVL25MemJqenhOaDFmT3ZWUHBkR0M1cTEvVWc1UkgydytLNHhvQlp0cnZVSDdxOW1ESDNraGZoTVp6ZUJiQUFBQUFBRUFBQUFDQUFBQUF3QUFBQVFBQUFBRkFBQUFCZ0FBQUFjQUFBQUlBQUFBQ1FBQUFBb0FBQUFMQUFBQURBQUFBQTBBQUFBT0FBQUFEd0FBQUE0QUFBQUtBQUFBQkFBQUFBZ0FBQUFKQUFBQUR3QUFBQTBBQUFBR0FBQUFBUUFBQUF3QUFBQUFBQUFBQWdBQUFBc0FBQUFIQUFBQUJRQUFBQU1BQUFBTEFBQUFDQUFBQUF3QUFBQUFBQUFBQlFBQUFBSUFBQUFQQUFBQURRQUFBQW9BQUFBT0FBQUFBd0FBQUFZQUFBQUhBQUFBQVFBQUFBa0FBQUFFQUFBQUJ3QUFBQWtBQUFBREFBQUFBUUFBQUEwQUFBQU1BQUFBQ3dBQUFBNEFBQUFDQUFBQUJnQUFBQVVBQUFBS0FBQUFCQUFBQUFBQUFBQVBBQUFBQ0FBQUFBa0FBQUFBQUFBQUJRQUFBQWNBQUFBQ0FBQUFCQUFBQUFvQUFBQVBBQUFBRGdBQUFBRUFBQUFMQUFBQURBQUFBQVlBQUFBSUFBQUFBd0FBQUEwQUFBQUNBQUFBREFBQUFBWUFBQUFLQUFBQUFBQUFBQXNBQUFBSUFBQUFBd0FBQUFRQUFBQU5BQUFBQndBQUFBVUFBQUFQQUFBQURnQUFBQUVBQUFBSkFBQUFEQUFBQUFVQUFBQUJBQUFBRHdBQUFBNEFBQUFOQUFBQUJBQUFBQW9BQUFBQUFBQUFCd0FBQUFZQUFBQURBQUFBQ1FBQUFBSUFBQUFJQUFBQUN3QUFBQTBBQUFBTEFBQUFCd0FBQUE0QUFBQU1BQUFBQVFBQUFBTUFBQUFKQUFBQUJRQUFBQUFBQUFBUEFBQUFCQUFBQUFnQUFBQUdBQUFBQWdBQUFBb0FBQUFHQUFBQUR3QUFBQTRBQUFBSkFBQUFDd0FBQUFNQUFBQUFBQUFBQ0FBQUFBd0FBQUFDQUFBQURRQUFBQWNBQUFBQkFBQUFCQUFBQUFvQUFBQUZBQUFBQ2dBQUFBSUFBQUFJQUFBQUJBQUFBQWNBQUFBR0FBQUFBUUFBQUFVQUFBQVBBQUFBQ3dBQUFBa0FBQUFPQUFBQUF3QUFBQXdBQUFBTkFFSEVEUXU1Q2dFQUFBQUNBQUFBQXdBQUFBUUFBQUFGQUFBQUJnQUFBQWNBQUFBSUFBQUFDUUFBQUFvQUFBQUxBQUFBREFBQUFBMEFBQUFPQUFBQUR3QUFBQTRBQUFBS0FBQUFCQUFBQUFnQUFBQUpBQUFBRHdBQUFBMEFBQUFHQUFBQUFRQUFBQXdBQUFBQUFBQUFBZ0FBQUFzQUFBQUhBQUFBQlFBQUFBTUFBQUF0S3lBZ0lEQllNSGdBSld4MUFFOTFkSEIxZENCcGN5QjBiMjhnYzJodmNuUUFVMkZzZENCcGN5QjBiMjhnYzJodmNuUUFVMlZqY21WMElHbHpJSFJ2YnlCemFHOXlkQUJRWVhOemQyOXlaQ0JwY3lCMGIyOGdjMmh2Y25RQVFYTnpiMk5wWVhSbFpDQmtZWFJoSUdseklIUnZieUJ6YUc5eWRBQlRiMjFsSUc5bUlHVnVZMjlrWldRZ2NHRnlZVzFsZEdWeWN5QmhjbVVnZEc5dklHeHZibWNnYjNJZ2RHOXZJSE5vYjNKMEFFMXBjM05wYm1jZ1lYSm5kVzFsYm5SekFGUnZieUJ0WVc1NUlHeGhibVZ6QUZSdmJ5Qm1aWGNnYkdGdVpYTUFWRzl2SUcxaGJua2dkR2h5WldGa2N3Qk9iM1FnWlc1dmRXZG9JSFJvY21WaFpITUFUV1Z0YjNKNUlHRnNiRzlqWVhScGIyNGdaWEp5YjNJQVRXVnRiM0o1SUdOdmMzUWdhWE1nZEc5dklITnRZV3hzQUZScGJXVWdZMjl6ZENCcGN5QjBiMjhnYzIxaGJHd0FZWEpuYjI0eWFRQkJjbWR2YmpKcEFGUm9aU0J3WVhOemQyOXlaQ0JrYjJWeklHNXZkQ0J0WVhSamFDQjBhR1VnYzNWd2NHeHBaV1FnYUdGemFBQlBkWFJ3ZFhRZ2NHOXBiblJsY2lCdGFYTnRZWFJqYUFCUGRYUndkWFFnYVhNZ2RHOXZJR3h2Ym1jQVUyRnNkQ0JwY3lCMGIyOGdiRzl1WndCVFpXTnlaWFFnYVhNZ2RHOXZJR3h2Ym1jQVVHRnpjM2R2Y21RZ2FYTWdkRzl2SUd4dmJtY0FRWE56YjJOcFlYUmxaQ0JrWVhSaElHbHpJSFJ2YnlCc2IyNW5BRlJvY21WaFpHbHVaeUJtWVdsc2RYSmxBRTFsYlc5eWVTQmpiM04wSUdseklIUnZieUJzWVhKblpRQlVhVzFsSUdOdmMzUWdhWE1nZEc5dklHeGhjbWRsQUZWdWEyNXZkMjRnWlhKeWIzSWdZMjlrWlFCaGNtZHZiakpwWkFCQmNtZHZiakpwWkFCRmJtTnZaR2x1WnlCbVlXbHNaV1FBUkdWamIyUnBibWNnWm1GcGJHVmtBR0Z5WjI5dU1tUUFRWEpuYjI0eVpBQkJjbWR2YmpKZlEyOXVkR1Y0ZENCamIyNTBaWGgwSUdseklFNVZURXdBVDNWMGNIVjBJSEJ2YVc1MFpYSWdhWE1nVGxWTVRBQlVhR1VnWVd4c2IyTmhkR1VnYldWdGIzSjVJR05oYkd4aVlXTnJJR2x6SUU1VlRFd0FWR2hsSUdaeVpXVWdiV1Z0YjNKNUlHTmhiR3hpWVdOcklHbHpJRTVWVEV3QVQwc0FKSFk5QUN4MFBRQXNjRDBBSkcwOUFGUm9aWEpsSUdseklHNXZJSE4xWTJnZ2RtVnljMmx2YmlCdlppQkJjbWR2YmpJQVUyRnNkQ0J3YjJsdWRHVnlJR2x6SUU1VlRFd3NJR0oxZENCellXeDBJR3hsYm1kMGFDQnBjeUJ1YjNRZ01BQlRaV055WlhRZ2NHOXBiblJsY2lCcGN5Qk9WVXhNTENCaWRYUWdjMlZqY21WMElHeGxibWQwYUNCcGN5QnViM1FnTUFCUVlYTnpkMjl5WkNCd2IybHVkR1Z5SUdseklFNVZURXdzSUdKMWRDQndZWE56ZDI5eVpDQnNaVzVuZEdnZ2FYTWdibTkwSURBQVFYTnpiMk5wWVhSbFpDQmtZWFJoSUhCdmFXNTBaWElnYVhNZ1RsVk1UQ3dnWW5WMElHRmtJR3hsYm1kMGFDQnBjeUJ1YjNRZ01BQW9iblZzYkNrQUFBQ2JDQUFBdXdjQUFFa0pBQURBQ1FBQXNBa0FBUEFIQUFBZkNBQUFNQWdBQU1rSUFBQnZDZ0FBNEFrQUFCWUtBQUE3Q2dBQVF3Z0FBQ3NMQUFEQkNnQUFrZ29BQVBRS0FBQUNDQUFBRVFnQUFGc0pBQUJiQ0FBQWRBa0FBSFFJQUFBRkNRQUFkQWNBQUMwSkFBQ2VCd0FBOUFnQUFHSUhBQUFZQ1FBQWlBY0FBT0VJQUFCT0J3QUEvd2tBQUZ3S0FBQUJBRUdrR0FzQkFnQkJ5eGdMQmYvLy8vLy9BRUdRR1F0QkVRQUtBQkVSRVFBQUFBQUZBQUFBQUFBQUNRQUFBQUFMQUFBQUFBQUFBQUFSQUE4S0VSRVJBd29IQUFFQUNRc0xBQUFKQmdzQUFBc0FCaEVBQUFBUkVSRUFRZUVaQ3lFTEFBQUFBQUFBQUFBUkFBb0tFUkVSQUFvQUFBSUFDUXNBQUFBSkFBc0FBQXNBUVpzYUN3RU1BRUduR2dzVkRBQUFBQUFNQUFBQUFBa01BQUFBQUFBTUFBQU1BRUhWR2dzQkRnQkI0Um9MRlEwQUFBQUVEUUFBQUFBSkRnQUFBQUFBRGdBQURnQkJqeHNMQVJBQVFac2JDeDRQQUFBQUFBOEFBQUFBQ1JBQUFBQUFBQkFBQUJBQUFCSUFBQUFTRWhJQVFkSWJDdzRTQUFBQUVoSVNBQUFBQUFBQUNRQkJneHdMQVFzQVFZOGNDeFVLQUFBQUFBb0FBQUFBQ1FzQUFBQUFBQXNBQUFzQVFiMGNDd0VNQUVISkhBc25EQUFBQUFBTUFBQUFBQWtNQUFBQUFBQU1BQUFNQUFBd01USXpORFUyTnpnNVFVSkRSRVZHQUVId0hBc0JBUUJCb0I0TEFvZ1BBRUhZSGdzRGtCRlEifSwxNDU6KCk9Pnt9LDk2NzooKT0+e319LEI9e307ZnVuY3Rpb24gUShBKXt2YXIgST1CW0FdO2lmKHZvaWQgMCE9PUkpcmV0dXJuIEkuZXhwb3J0czt2YXIgQz1CW0FdPXtleHBvcnRzOnt9fTtyZXR1cm4gZ1tBXS5jYWxsKEMuZXhwb3J0cyxDLEMuZXhwb3J0cyxRKSxDLmV4cG9ydHN9cmV0dXJuIEk9T2JqZWN0LmdldFByb3RvdHlwZU9mP0E9Pk9iamVjdC5nZXRQcm90b3R5cGVPZihBKTpBPT5BLl9fcHJvdG9fXyxRLnQ9ZnVuY3Rpb24oZyxCKXtpZigxJkImJihnPXRoaXMoZykpLDgmQilyZXR1cm4gZztpZigib2JqZWN0Ij09dHlwZW9mIGcmJmcpe2lmKDQmQiYmZy5fX2VzTW9kdWxlKXJldHVybiBnO2lmKDE2JkImJiJmdW5jdGlvbiI9PXR5cGVvZiBnLnRoZW4pcmV0dXJuIGd9dmFyIEM9T2JqZWN0LmNyZWF0ZShudWxsKTtRLnIoQyk7dmFyIEU9e307QT1BfHxbbnVsbCxJKHt9KSxJKFtdKSxJKEkpXTtmb3IodmFyIGk9MiZCJiZnOyJvYmplY3QiPT10eXBlb2YgaSYmIX5BLmluZGV4T2YoaSk7aT1JKGkpKU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGkpLmZvckVhY2goKEE9PkVbQV09KCk9PmdbQV0pKTtyZXR1cm4gRS5kZWZhdWx0PSgpPT5nLFEuZChDLEUpLEN9LFEuZD0oQSxJKT0+e2Zvcih2YXIgZyBpbiBJKVEubyhJLGcpJiYhUS5vKEEsZykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBLGcse2VudW1lcmFibGU6ITAsZ2V0OklbZ119KX0sUS5vPShBLEkpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQSxJKSxRLnI9QT0+eyJ1bmRlZmluZWQiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6Ik1vZHVsZSJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQSwiX19lc01vZHVsZSIse3ZhbHVlOiEwfSl9LFEoNjMxKX0pKCl9KSk7
`; // eslint-disable-line
const qrcode_base64 = `dmFyIFFSQ29kZTsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0b1VURjgodGV4dCl7Y29uc3QgY29kZT1lbmNvZGVVUklDb21wb25lbnQodGV4dCk7bGV0IGJ5dGVzPVtdO2ZvcihsZXQgaT0wO2k8Y29kZS5sZW5ndGg7aSsrKXtjb25zdCBjPWNvZGUuY2hhckF0KGkpO2lmKGM9PT0iJSIpe2NvbnN0IGhleD1jb2RlLmNoYXJBdChpKzEpK2NvZGUuY2hhckF0KGkrMik7Y29uc3QgaGV4VmFsPXBhcnNlSW50KGhleCwxNik7Ynl0ZXMucHVzaChoZXhWYWwpO2krPTJ9ZWxzZXtieXRlcy5wdXNoKGMuY2hhckNvZGVBdCgwKSl9fXJldHVybiBieXRlc31mdW5jdGlvbiBRUjhiaXRCeXRlKGRhdGEpe3RoaXMubW9kZT1RUk1vZGUuTU9ERV84QklUX0JZVEU7dGhpcy5kYXRhPWRhdGE7dGhpcy5wYXJzZWREYXRhPXRvVVRGOChkYXRhKX1RUjhiaXRCeXRlLnByb3RvdHlwZT17Z2V0TGVuZ3RoOmZ1bmN0aW9uKGJ1ZmZlcil7cmV0dXJuIHRoaXMucGFyc2VkRGF0YS5sZW5ndGh9LHdyaXRlOmZ1bmN0aW9uKGJ1ZmZlcil7Zm9yKHZhciBpPTAsbD10aGlzLnBhcnNlZERhdGEubGVuZ3RoO2k8bDtpKyspe2J1ZmZlci5wdXQodGhpcy5wYXJzZWREYXRhW2ldLDgpfX19O2Z1bmN0aW9uIFFSQ29kZU1vZGVsKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpe3RoaXMudHlwZU51bWJlcj10eXBlTnVtYmVyO3RoaXMuZXJyb3JDb3JyZWN0TGV2ZWw9ZXJyb3JDb3JyZWN0TGV2ZWw7dGhpcy5tb2R1bGVzPW51bGw7dGhpcy5tb2R1bGVDb3VudD0wO3RoaXMuZGF0YUNhY2hlPW51bGw7dGhpcy5kYXRhTGlzdD1bXX1RUkNvZGVNb2RlbC5wcm90b3R5cGU9e2FkZERhdGE6ZnVuY3Rpb24oZGF0YSl7dmFyIG5ld0RhdGE9bmV3IFFSOGJpdEJ5dGUoZGF0YSk7dGhpcy5kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO3RoaXMuZGF0YUNhY2hlPW51bGx9LGlzRGFyazpmdW5jdGlvbihyb3csY29sKXtpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93fHxjb2w8MHx8dGhpcy5tb2R1bGVDb3VudDw9Y29sKXt0aHJvdyBuZXcgRXJyb3Iocm93KyIsIitjb2wpfXJldHVybiB0aGlzLm1vZHVsZXNbcm93XVtjb2xdfSxnZXRNb2R1bGVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZHVsZUNvdW50fSxtYWtlOmZ1bmN0aW9uKCl7dGhpcy5tYWtlSW1wbChmYWxzZSx0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKX0sbWFrZUltcGw6ZnVuY3Rpb24odGVzdCxtYXNrUGF0dGVybil7dGhpcy5tb2R1bGVDb3VudD10aGlzLnR5cGVOdW1iZXIqNCsxNzt0aGlzLm1vZHVsZXM9bmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO2Zvcih2YXIgcm93PTA7cm93PHRoaXMubW9kdWxlQ291bnQ7cm93Kyspe3RoaXMubW9kdWxlc1tyb3ddPW5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtmb3IodmFyIGNvbD0wO2NvbDx0aGlzLm1vZHVsZUNvdW50O2NvbCsrKXt0aGlzLm1vZHVsZXNbcm93XVtjb2xdPW51bGx9fXRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApO3RoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCk7dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KTt0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTt0aGlzLnNldHVwVHlwZUluZm8odGVzdCxtYXNrUGF0dGVybik7aWYodGhpcy50eXBlTnVtYmVyPj03KXt0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KX1pZih0aGlzLmRhdGFDYWNoZT09bnVsbCl7dGhpcy5kYXRhQ2FjaGU9UVJDb2RlTW9kZWwuY3JlYXRlRGF0YSh0aGlzLnR5cGVOdW1iZXIsdGhpcy5lcnJvckNvcnJlY3RMZXZlbCx0aGlzLmRhdGFMaXN0KX10aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsbWFza1BhdHRlcm4pfSxzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuOmZ1bmN0aW9uKHJvdyxjb2wpe2Zvcih2YXIgcj0tMTtyPD03O3IrKyl7aWYocm93K3I8PS0xfHx0aGlzLm1vZHVsZUNvdW50PD1yb3crciljb250aW51ZTtmb3IodmFyIGM9LTE7Yzw9NztjKyspe2lmKGNvbCtjPD0tMXx8dGhpcy5tb2R1bGVDb3VudDw9Y29sK2MpY29udGludWU7aWYoMDw9ciYmcjw9NiYmKGM9PTB8fGM9PTYpfHwwPD1jJiZjPD02JiYocj09MHx8cj09Nil8fDI8PXImJnI8PTQmJjI8PWMmJmM8PTQpe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWV9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZX19fX0sZ2V0QmVzdE1hc2tQYXR0ZXJuOmZ1bmN0aW9uKCl7dmFyIG1pbkxvc3RQb2ludD0wO3ZhciBwYXR0ZXJuPTA7Zm9yKHZhciBpPTA7aTw4O2krKyl7dGhpcy5tYWtlSW1wbCh0cnVlLGkpO3ZhciBsb3N0UG9pbnQ9UVJVdGlsLmdldExvc3RQb2ludCh0aGlzKTtpZihpPT0wfHxtaW5Mb3N0UG9pbnQ+bG9zdFBvaW50KXttaW5Mb3N0UG9pbnQ9bG9zdFBvaW50O3BhdHRlcm49aX19cmV0dXJuIHBhdHRlcm59LGNyZWF0ZU1vdmllQ2xpcDpmdW5jdGlvbih0YXJnZXRfbWMsaW5zdGFuY2VfbmFtZSxkZXB0aCl7dmFyIHFyX21jPXRhcmdldF9tYy5jcmVhdGVFbXB0eU1vdmllQ2xpcChpbnN0YW5jZV9uYW1lLGRlcHRoKTt2YXIgY3M9MTt0aGlzLm1ha2UoKTtmb3IodmFyIHJvdz0wO3Jvdzx0aGlzLm1vZHVsZXMubGVuZ3RoO3JvdysrKXt2YXIgeT1yb3cqY3M7Zm9yKHZhciBjb2w9MDtjb2w8dGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoO2NvbCsrKXt2YXIgeD1jb2wqY3M7dmFyIGRhcms9dGhpcy5tb2R1bGVzW3Jvd11bY29sXTtpZihkYXJrKXtxcl9tYy5iZWdpbkZpbGwoMCwxMDApO3FyX21jLm1vdmVUbyh4LHkpO3FyX21jLmxpbmVUbyh4K2NzLHkpO3FyX21jLmxpbmVUbyh4K2NzLHkrY3MpO3FyX21jLmxpbmVUbyh4LHkrY3MpO3FyX21jLmVuZEZpbGwoKX19fXJldHVybiBxcl9tY30sc2V0dXBUaW1pbmdQYXR0ZXJuOmZ1bmN0aW9uKCl7Zm9yKHZhciByPTg7cjx0aGlzLm1vZHVsZUNvdW50LTg7cisrKXtpZih0aGlzLm1vZHVsZXNbcl1bNl0hPW51bGwpe2NvbnRpbnVlfXRoaXMubW9kdWxlc1tyXVs2XT1yJTI9PTB9Zm9yKHZhciBjPTg7Yzx0aGlzLm1vZHVsZUNvdW50LTg7YysrKXtpZih0aGlzLm1vZHVsZXNbNl1bY10hPW51bGwpe2NvbnRpbnVlfXRoaXMubW9kdWxlc1s2XVtjXT1jJTI9PTB9fSxzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybjpmdW5jdGlvbigpe3ZhciBwb3M9UVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO2Zvcih2YXIgaT0wO2k8cG9zLmxlbmd0aDtpKyspe2Zvcih2YXIgaj0wO2o8cG9zLmxlbmd0aDtqKyspe3ZhciByb3c9cG9zW2ldO3ZhciBjb2w9cG9zW2pdO2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbF0hPW51bGwpe2NvbnRpbnVlfWZvcih2YXIgcj0tMjtyPD0yO3IrKyl7Zm9yKHZhciBjPS0yO2M8PTI7YysrKXtpZihyPT0tMnx8cj09Mnx8Yz09LTJ8fGM9PTJ8fHI9PTAmJmM9PTApe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWV9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZX19fX19fSxzZXR1cFR5cGVOdW1iZXI6ZnVuY3Rpb24odGVzdCl7dmFyIGJpdHM9UVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtmb3IodmFyIGk9MDtpPDE4O2krKyl7dmFyIG1vZD0hdGVzdCYmKGJpdHM+PmkmMSk9PTE7dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaS8zKV1baSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXT1tb2R9Zm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9IXRlc3QmJihiaXRzPj5pJjEpPT0xO3RoaXMubW9kdWxlc1tpJTMrdGhpcy5tb2R1bGVDb3VudC04LTNdW01hdGguZmxvb3IoaS8zKV09bW9kfX0sc2V0dXBUeXBlSW5mbzpmdW5jdGlvbih0ZXN0LG1hc2tQYXR0ZXJuKXt2YXIgZGF0YT10aGlzLmVycm9yQ29ycmVjdExldmVsPDwzfG1hc2tQYXR0ZXJuO3ZhciBiaXRzPVFSVXRpbC5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtmb3IodmFyIGk9MDtpPDE1O2krKyl7dmFyIG1vZD0hdGVzdCYmKGJpdHM+PmkmMSk9PTE7aWYoaTw2KXt0aGlzLm1vZHVsZXNbaV1bOF09bW9kfWVsc2UgaWYoaTw4KXt0aGlzLm1vZHVsZXNbaSsxXVs4XT1tb2R9ZWxzZXt0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudC0xNStpXVs4XT1tb2R9fWZvcih2YXIgaT0wO2k8MTU7aSsrKXt2YXIgbW9kPSF0ZXN0JiYoYml0cz4+aSYxKT09MTtpZihpPDgpe3RoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50LWktMV09bW9kfWVsc2UgaWYoaTw5KXt0aGlzLm1vZHVsZXNbOF1bMTUtaS0xKzFdPW1vZH1lbHNle3RoaXMubW9kdWxlc1s4XVsxNS1pLTFdPW1vZH19dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtOF1bOF09IXRlc3R9LG1hcERhdGE6ZnVuY3Rpb24oZGF0YSxtYXNrUGF0dGVybil7dmFyIGluYz0tMTt2YXIgcm93PXRoaXMubW9kdWxlQ291bnQtMTt2YXIgYml0SW5kZXg9Nzt2YXIgYnl0ZUluZGV4PTA7Zm9yKHZhciBjb2w9dGhpcy5tb2R1bGVDb3VudC0xO2NvbD4wO2NvbC09Mil7aWYoY29sPT02KWNvbC0tO3doaWxlKHRydWUpe2Zvcih2YXIgYz0wO2M8MjtjKyspe2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbC1jXT09bnVsbCl7dmFyIGRhcms9ZmFsc2U7aWYoYnl0ZUluZGV4PGRhdGEubGVuZ3RoKXtkYXJrPShkYXRhW2J5dGVJbmRleF0+Pj5iaXRJbmRleCYxKT09MX12YXIgbWFzaz1RUlV0aWwuZ2V0TWFzayhtYXNrUGF0dGVybixyb3csY29sLWMpO2lmKG1hc2spe2Rhcms9IWRhcmt9dGhpcy5tb2R1bGVzW3Jvd11bY29sLWNdPWRhcms7Yml0SW5kZXgtLTtpZihiaXRJbmRleD09LTEpe2J5dGVJbmRleCsrO2JpdEluZGV4PTd9fX1yb3crPWluYztpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93KXtyb3ctPWluYztpbmM9LWluYzticmVha319fX19O1FSQ29kZU1vZGVsLlBBRDA9MjM2O1FSQ29kZU1vZGVsLlBBRDE9MTc7UVJDb2RlTW9kZWwuY3JlYXRlRGF0YT1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsLGRhdGFMaXN0KXt2YXIgcnNCbG9ja3M9UVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO3ZhciBidWZmZXI9bmV3IFFSQml0QnVmZmVyO2Zvcih2YXIgaT0wO2k8ZGF0YUxpc3QubGVuZ3RoO2krKyl7dmFyIGRhdGE9ZGF0YUxpc3RbaV07YnVmZmVyLnB1dChkYXRhLm1vZGUsNCk7YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLHR5cGVOdW1iZXIpKTtkYXRhLndyaXRlKGJ1ZmZlcil9dmFyIHRvdGFsRGF0YUNvdW50PTA7Zm9yKHZhciBpPTA7aTxyc0Jsb2Nrcy5sZW5ndGg7aSsrKXt0b3RhbERhdGFDb3VudCs9cnNCbG9ja3NbaV0uZGF0YUNvdW50fWlmKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKT50b3RhbERhdGFDb3VudCo4KXt0aHJvdyBuZXcgRXJyb3IoImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoIitidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkrIj4iK3RvdGFsRGF0YUNvdW50KjgrIikiKX1pZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkrNDw9dG90YWxEYXRhQ291bnQqOCl7YnVmZmVyLnB1dCgwLDQpfXdoaWxlKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSU4IT0wKXtidWZmZXIucHV0Qml0KGZhbHNlKX13aGlsZSh0cnVlKXtpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+PXRvdGFsRGF0YUNvdW50Kjgpe2JyZWFrfWJ1ZmZlci5wdXQoUVJDb2RlTW9kZWwuUEFEMCw4KTtpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+PXRvdGFsRGF0YUNvdW50Kjgpe2JyZWFrfWJ1ZmZlci5wdXQoUVJDb2RlTW9kZWwuUEFEMSw4KX1yZXR1cm4gUVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXMoYnVmZmVyLHJzQmxvY2tzKX07UVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXM9ZnVuY3Rpb24oYnVmZmVyLHJzQmxvY2tzKXt2YXIgb2Zmc2V0PTA7dmFyIG1heERjQ291bnQ9MDt2YXIgbWF4RWNDb3VudD0wO3ZhciBkY2RhdGE9bmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7dmFyIGVjZGF0YT1uZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtmb3IodmFyIHI9MDtyPHJzQmxvY2tzLmxlbmd0aDtyKyspe3ZhciBkY0NvdW50PXJzQmxvY2tzW3JdLmRhdGFDb3VudDt2YXIgZWNDb3VudD1yc0Jsb2Nrc1tyXS50b3RhbENvdW50LWRjQ291bnQ7bWF4RGNDb3VudD1NYXRoLm1heChtYXhEY0NvdW50LGRjQ291bnQpO21heEVjQ291bnQ9TWF0aC5tYXgobWF4RWNDb3VudCxlY0NvdW50KTtkY2RhdGFbcl09bmV3IEFycmF5KGRjQ291bnQpO2Zvcih2YXIgaT0wO2k8ZGNkYXRhW3JdLmxlbmd0aDtpKyspe2RjZGF0YVtyXVtpXT0yNTUmYnVmZmVyLmJ1ZmZlcltpK29mZnNldF19b2Zmc2V0Kz1kY0NvdW50O3ZhciByc1BvbHk9UVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7dmFyIHJhd1BvbHk9bmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0scnNQb2x5LmdldExlbmd0aCgpLTEpO3ZhciBtb2RQb2x5PXJhd1BvbHkubW9kKHJzUG9seSk7ZWNkYXRhW3JdPW5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTxlY2RhdGFbcl0ubGVuZ3RoO2krKyl7dmFyIG1vZEluZGV4PWkrbW9kUG9seS5nZXRMZW5ndGgoKS1lY2RhdGFbcl0ubGVuZ3RoO2VjZGF0YVtyXVtpXT1tb2RJbmRleD49MD9tb2RQb2x5LmdldChtb2RJbmRleCk6MH19dmFyIHRvdGFsQ29kZUNvdW50PTA7Zm9yKHZhciBpPTA7aTxyc0Jsb2Nrcy5sZW5ndGg7aSsrKXt0b3RhbENvZGVDb3VudCs9cnNCbG9ja3NbaV0udG90YWxDb3VudH12YXIgZGF0YT1uZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO3ZhciBpbmRleD0wO2Zvcih2YXIgaT0wO2k8bWF4RGNDb3VudDtpKyspe2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7aWYoaTxkY2RhdGFbcl0ubGVuZ3RoKXtkYXRhW2luZGV4KytdPWRjZGF0YVtyXVtpXX19fWZvcih2YXIgaT0wO2k8bWF4RWNDb3VudDtpKyspe2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7aWYoaTxlY2RhdGFbcl0ubGVuZ3RoKXtkYXRhW2luZGV4KytdPWVjZGF0YVtyXVtpXX19fXJldHVybiBkYXRhfTt2YXIgUVJNb2RlPXtNT0RFX05VTUJFUjoxPDwwLE1PREVfQUxQSEFfTlVNOjE8PDEsTU9ERV84QklUX0JZVEU6MTw8MixNT0RFX0tBTkpJOjE8PDN9O3ZhciBRUkVycm9yQ29ycmVjdExldmVsPXtMOjEsTTowLFE6MyxIOjJ9O3ZhciBRUk1hc2tQYXR0ZXJuPXtQQVRURVJOMDAwOjAsUEFUVEVSTjAwMToxLFBBVFRFUk4wMTA6MixQQVRURVJOMDExOjMsUEFUVEVSTjEwMDo0LFBBVFRFUk4xMDE6NSxQQVRURVJOMTEwOjYsUEFUVEVSTjExMTo3fTt2YXIgUVJVdGlsPXtQQVRURVJOX1BPU0lUSU9OX1RBQkxFOltbXSxbNiwxOF0sWzYsMjJdLFs2LDI2XSxbNiwzMF0sWzYsMzRdLFs2LDIyLDM4XSxbNiwyNCw0Ml0sWzYsMjYsNDZdLFs2LDI4LDUwXSxbNiwzMCw1NF0sWzYsMzIsNThdLFs2LDM0LDYyXSxbNiwyNiw0Niw2Nl0sWzYsMjYsNDgsNzBdLFs2LDI2LDUwLDc0XSxbNiwzMCw1NCw3OF0sWzYsMzAsNTYsODJdLFs2LDMwLDU4LDg2XSxbNiwzNCw2Miw5MF0sWzYsMjgsNTAsNzIsOTRdLFs2LDI2LDUwLDc0LDk4XSxbNiwzMCw1NCw3OCwxMDJdLFs2LDI4LDU0LDgwLDEwNl0sWzYsMzIsNTgsODQsMTEwXSxbNiwzMCw1OCw4NiwxMTRdLFs2LDM0LDYyLDkwLDExOF0sWzYsMjYsNTAsNzQsOTgsMTIyXSxbNiwzMCw1NCw3OCwxMDIsMTI2XSxbNiwyNiw1Miw3OCwxMDQsMTMwXSxbNiwzMCw1Niw4MiwxMDgsMTM0XSxbNiwzNCw2MCw4NiwxMTIsMTM4XSxbNiwzMCw1OCw4NiwxMTQsMTQyXSxbNiwzNCw2Miw5MCwxMTgsMTQ2XSxbNiwzMCw1NCw3OCwxMDIsMTI2LDE1MF0sWzYsMjQsNTAsNzYsMTAyLDEyOCwxNTRdLFs2LDI4LDU0LDgwLDEwNiwxMzIsMTU4XSxbNiwzMiw1OCw4NCwxMTAsMTM2LDE2Ml0sWzYsMjYsNTQsODIsMTEwLDEzOCwxNjZdLFs2LDMwLDU4LDg2LDExNCwxNDIsMTcwXV0sRzE1OjE8PDEwfDE8PDh8MTw8NXwxPDw0fDE8PDJ8MTw8MXwxPDwwLEcxODoxPDwxMnwxPDwxMXwxPDwxMHwxPDw5fDE8PDh8MTw8NXwxPDwyfDE8PDAsRzE1X01BU0s6MTw8MTR8MTw8MTJ8MTw8MTB8MTw8NHwxPDwxLGdldEJDSFR5cGVJbmZvOmZ1bmN0aW9uKGRhdGEpe3ZhciBkPWRhdGE8PDEwO3doaWxlKFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSk+PTApe2RePVFSVXRpbC5HMTU8PFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSl9cmV0dXJuKGRhdGE8PDEwfGQpXlFSVXRpbC5HMTVfTUFTS30sZ2V0QkNIVHlwZU51bWJlcjpmdW5jdGlvbihkYXRhKXt2YXIgZD1kYXRhPDwxMjt3aGlsZShRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpPj0wKXtkXj1RUlV0aWwuRzE4PDxRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpfXJldHVybiBkYXRhPDwxMnxkfSxnZXRCQ0hEaWdpdDpmdW5jdGlvbihkYXRhKXt2YXIgZGlnaXQ9MDt3aGlsZShkYXRhIT0wKXtkaWdpdCsrO2RhdGE+Pj49MX1yZXR1cm4gZGlnaXR9LGdldFBhdHRlcm5Qb3NpdGlvbjpmdW5jdGlvbih0eXBlTnVtYmVyKXtyZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlci0xXX0sZ2V0TWFzazpmdW5jdGlvbihtYXNrUGF0dGVybixpLGope3N3aXRjaChtYXNrUGF0dGVybil7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6cmV0dXJuKGkraiklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpyZXR1cm4gaSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOnJldHVybiBqJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6cmV0dXJuKGkraiklMz09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpyZXR1cm4oTWF0aC5mbG9vcihpLzIpK01hdGguZmxvb3Ioai8zKSklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMTpyZXR1cm4gaSpqJTIraSpqJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6cmV0dXJuKGkqaiUyK2kqaiUzKSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExOnJldHVybihpKmolMysoaStqKSUyKSUyPT0wO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKCJiYWQgbWFza1BhdHRlcm46IittYXNrUGF0dGVybil9fSxnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOmZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCl7dmFyIGE9bmV3IFFSUG9seW5vbWlhbChbMV0sMCk7Zm9yKHZhciBpPTA7aTxlcnJvckNvcnJlY3RMZW5ndGg7aSsrKXthPWEubXVsdGlwbHkobmV3IFFSUG9seW5vbWlhbChbMSxRUk1hdGguZ2V4cChpKV0sMCkpfXJldHVybiBhfSxnZXRMZW5ndGhJbkJpdHM6ZnVuY3Rpb24obW9kZSx0eXBlKXtpZigxPD10eXBlJiZ0eXBlPDEwKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEwO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiA5O2Nhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOnJldHVybiA4O2Nhc2UgUVJNb2RlLk1PREVfS0FOSkk6cmV0dXJuIDg7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZSBpZih0eXBlPDI3KXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEyO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMTtjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTA7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZSBpZih0eXBlPDQxKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDE0O2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMztjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTI7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZXt0aHJvdyBuZXcgRXJyb3IoInR5cGU6Iit0eXBlKX19LGdldExvc3RQb2ludDpmdW5jdGlvbihxckNvZGUpe3ZhciBtb2R1bGVDb3VudD1xckNvZGUuZ2V0TW9kdWxlQ291bnQoKTt2YXIgbG9zdFBvaW50PTA7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQ7cm93Kyspe2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXt2YXIgc2FtZUNvdW50PTA7dmFyIGRhcms9cXJDb2RlLmlzRGFyayhyb3csY29sKTtmb3IodmFyIHI9LTE7cjw9MTtyKyspe2lmKHJvdytyPDB8fG1vZHVsZUNvdW50PD1yb3crcil7Y29udGludWV9Zm9yKHZhciBjPS0xO2M8PTE7YysrKXtpZihjb2wrYzwwfHxtb2R1bGVDb3VudDw9Y29sK2Mpe2NvbnRpbnVlfWlmKHI9PTAmJmM9PTApe2NvbnRpbnVlfWlmKGRhcms9PXFyQ29kZS5pc0Rhcmsocm93K3IsY29sK2MpKXtzYW1lQ291bnQrK319fWlmKHNhbWVDb3VudD41KXtsb3N0UG9pbnQrPTMrc2FtZUNvdW50LTV9fX1mb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudC0xO3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC0xO2NvbCsrKXt2YXIgY291bnQ9MDtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKzEpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wrMSkpY291bnQrKztpZihjb3VudD09MHx8Y291bnQ9PTQpe2xvc3RQb2ludCs9M319fWZvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50O3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC02O2NvbCsrKXtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzEpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrMikmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCszKSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzQpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzUpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrNikpe2xvc3RQb2ludCs9NDB9fX1mb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudDtjb2wrKyl7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQtNjtyb3crKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSYmIXFyQ29kZS5pc0Rhcmsocm93KzEsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crMixjb2wpJiZxckNvZGUuaXNEYXJrKHJvdyszLGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzQsY29sKSYmIXFyQ29kZS5pc0Rhcmsocm93KzUsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crNixjb2wpKXtsb3N0UG9pbnQrPTQwfX19dmFyIGRhcmtDb3VudD0wO2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXtmb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudDtyb3crKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSl7ZGFya0NvdW50Kyt9fX12YXIgcmF0aW89TWF0aC5hYnMoMTAwKmRhcmtDb3VudC9tb2R1bGVDb3VudC9tb2R1bGVDb3VudC01MCkvNTtsb3N0UG9pbnQrPXJhdGlvKjEwO3JldHVybiBsb3N0UG9pbnR9fTt2YXIgUVJNYXRoPXtnbG9nOmZ1bmN0aW9uKG4pe2lmKG48MSl7dGhyb3cgbmV3IEVycm9yKCJnbG9nKCIrbisiKSIpfXJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dfSxnZXhwOmZ1bmN0aW9uKG4pe3doaWxlKG48MCl7bis9MjU1fXdoaWxlKG4+PTI1Nil7bi09MjU1fXJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dfSxFWFBfVEFCTEU6bmV3IEFycmF5KDI1NiksTE9HX1RBQkxFOm5ldyBBcnJheSgyNTYpfTtmb3IodmFyIGk9MDtpPDg7aSsrKXtRUk1hdGguRVhQX1RBQkxFW2ldPTE8PGl9Zm9yKHZhciBpPTg7aTwyNTY7aSsrKXtRUk1hdGguRVhQX1RBQkxFW2ldPVFSTWF0aC5FWFBfVEFCTEVbaS00XV5RUk1hdGguRVhQX1RBQkxFW2ktNV1eUVJNYXRoLkVYUF9UQUJMRVtpLTZdXlFSTWF0aC5FWFBfVEFCTEVbaS04XX1mb3IodmFyIGk9MDtpPDI1NTtpKyspe1FSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXV09aX1mdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLHNoaWZ0KXtpZihudW0ubGVuZ3RoPT11bmRlZmluZWQpe3Rocm93IG5ldyBFcnJvcihudW0ubGVuZ3RoKyIvIitzaGlmdCl9dmFyIG9mZnNldD0wO3doaWxlKG9mZnNldDxudW0ubGVuZ3RoJiZudW1bb2Zmc2V0XT09MCl7b2Zmc2V0Kyt9dGhpcy5udW09bmV3IEFycmF5KG51bS5sZW5ndGgtb2Zmc2V0K3NoaWZ0KTtmb3IodmFyIGk9MDtpPG51bS5sZW5ndGgtb2Zmc2V0O2krKyl7dGhpcy5udW1baV09bnVtW2krb2Zmc2V0XX19UVJQb2x5bm9taWFsLnByb3RvdHlwZT17Z2V0OmZ1bmN0aW9uKGluZGV4KXtyZXR1cm4gdGhpcy5udW1baW5kZXhdfSxnZXRMZW5ndGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5udW0ubGVuZ3RofSxtdWx0aXBseTpmdW5jdGlvbihlKXt2YXIgbnVtPW5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpK2UuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7Zm9yKHZhciBqPTA7ajxlLmdldExlbmd0aCgpO2orKyl7bnVtW2kral1ePVFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKStRUk1hdGguZ2xvZyhlLmdldChqKSkpfX1yZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCl9LG1vZDpmdW5jdGlvbihlKXtpZih0aGlzLmdldExlbmd0aCgpLWUuZ2V0TGVuZ3RoKCk8MCl7cmV0dXJuIHRoaXN9dmFyIHJhdGlvPVFSTWF0aC5nbG9nKHRoaXMuZ2V0KDApKS1RUk1hdGguZ2xvZyhlLmdldCgwKSk7dmFyIG51bT1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7bnVtW2ldPXRoaXMuZ2V0KGkpfWZvcih2YXIgaT0wO2k8ZS5nZXRMZW5ndGgoKTtpKyspe251bVtpXV49UVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkpK3JhdGlvKX1yZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCkubW9kKGUpfX07ZnVuY3Rpb24gUVJSU0Jsb2NrKHRvdGFsQ291bnQsZGF0YUNvdW50KXt0aGlzLnRvdGFsQ291bnQ9dG90YWxDb3VudDt0aGlzLmRhdGFDb3VudD1kYXRhQ291bnR9UVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFPVtbMSwyNiwxOV0sWzEsMjYsMTZdLFsxLDI2LDEzXSxbMSwyNiw5XSxbMSw0NCwzNF0sWzEsNDQsMjhdLFsxLDQ0LDIyXSxbMSw0NCwxNl0sWzEsNzAsNTVdLFsxLDcwLDQ0XSxbMiwzNSwxN10sWzIsMzUsMTNdLFsxLDEwMCw4MF0sWzIsNTAsMzJdLFsyLDUwLDI0XSxbNCwyNSw5XSxbMSwxMzQsMTA4XSxbMiw2Nyw0M10sWzIsMzMsMTUsMiwzNCwxNl0sWzIsMzMsMTEsMiwzNCwxMl0sWzIsODYsNjhdLFs0LDQzLDI3XSxbNCw0MywxOV0sWzQsNDMsMTVdLFsyLDk4LDc4XSxbNCw0OSwzMV0sWzIsMzIsMTQsNCwzMywxNV0sWzQsMzksMTMsMSw0MCwxNF0sWzIsMTIxLDk3XSxbMiw2MCwzOCwyLDYxLDM5XSxbNCw0MCwxOCwyLDQxLDE5XSxbNCw0MCwxNCwyLDQxLDE1XSxbMiwxNDYsMTE2XSxbMyw1OCwzNiwyLDU5LDM3XSxbNCwzNiwxNiw0LDM3LDE3XSxbNCwzNiwxMiw0LDM3LDEzXSxbMiw4Niw2OCwyLDg3LDY5XSxbNCw2OSw0MywxLDcwLDQ0XSxbNiw0MywxOSwyLDQ0LDIwXSxbNiw0MywxNSwyLDQ0LDE2XSxbNCwxMDEsODFdLFsxLDgwLDUwLDQsODEsNTFdLFs0LDUwLDIyLDQsNTEsMjNdLFszLDM2LDEyLDgsMzcsMTNdLFsyLDExNiw5MiwyLDExNyw5M10sWzYsNTgsMzYsMiw1OSwzN10sWzQsNDYsMjAsNiw0NywyMV0sWzcsNDIsMTQsNCw0MywxNV0sWzQsMTMzLDEwN10sWzgsNTksMzcsMSw2MCwzOF0sWzgsNDQsMjAsNCw0NSwyMV0sWzEyLDMzLDExLDQsMzQsMTJdLFszLDE0NSwxMTUsMSwxNDYsMTE2XSxbNCw2NCw0MCw1LDY1LDQxXSxbMTEsMzYsMTYsNSwzNywxN10sWzExLDM2LDEyLDUsMzcsMTNdLFs1LDEwOSw4NywxLDExMCw4OF0sWzUsNjUsNDEsNSw2Niw0Ml0sWzUsNTQsMjQsNyw1NSwyNV0sWzExLDM2LDEyXSxbNSwxMjIsOTgsMSwxMjMsOTldLFs3LDczLDQ1LDMsNzQsNDZdLFsxNSw0MywxOSwyLDQ0LDIwXSxbMyw0NSwxNSwxMyw0NiwxNl0sWzEsMTM1LDEwNyw1LDEzNiwxMDhdLFsxMCw3NCw0NiwxLDc1LDQ3XSxbMSw1MCwyMiwxNSw1MSwyM10sWzIsNDIsMTQsMTcsNDMsMTVdLFs1LDE1MCwxMjAsMSwxNTEsMTIxXSxbOSw2OSw0Myw0LDcwLDQ0XSxbMTcsNTAsMjIsMSw1MSwyM10sWzIsNDIsMTQsMTksNDMsMTVdLFszLDE0MSwxMTMsNCwxNDIsMTE0XSxbMyw3MCw0NCwxMSw3MSw0NV0sWzE3LDQ3LDIxLDQsNDgsMjJdLFs5LDM5LDEzLDE2LDQwLDE0XSxbMywxMzUsMTA3LDUsMTM2LDEwOF0sWzMsNjcsNDEsMTMsNjgsNDJdLFsxNSw1NCwyNCw1LDU1LDI1XSxbMTUsNDMsMTUsMTAsNDQsMTZdLFs0LDE0NCwxMTYsNCwxNDUsMTE3XSxbMTcsNjgsNDJdLFsxNyw1MCwyMiw2LDUxLDIzXSxbMTksNDYsMTYsNiw0NywxN10sWzIsMTM5LDExMSw3LDE0MCwxMTJdLFsxNyw3NCw0Nl0sWzcsNTQsMjQsMTYsNTUsMjVdLFszNCwzNywxM10sWzQsMTUxLDEyMSw1LDE1MiwxMjJdLFs0LDc1LDQ3LDE0LDc2LDQ4XSxbMTEsNTQsMjQsMTQsNTUsMjVdLFsxNiw0NSwxNSwxNCw0NiwxNl0sWzYsMTQ3LDExNyw0LDE0OCwxMThdLFs2LDczLDQ1LDE0LDc0LDQ2XSxbMTEsNTQsMjQsMTYsNTUsMjVdLFszMCw0NiwxNiwyLDQ3LDE3XSxbOCwxMzIsMTA2LDQsMTMzLDEwN10sWzgsNzUsNDcsMTMsNzYsNDhdLFs3LDU0LDI0LDIyLDU1LDI1XSxbMjIsNDUsMTUsMTMsNDYsMTZdLFsxMCwxNDIsMTE0LDIsMTQzLDExNV0sWzE5LDc0LDQ2LDQsNzUsNDddLFsyOCw1MCwyMiw2LDUxLDIzXSxbMzMsNDYsMTYsNCw0NywxN10sWzgsMTUyLDEyMiw0LDE1MywxMjNdLFsyMiw3Myw0NSwzLDc0LDQ2XSxbOCw1MywyMywyNiw1NCwyNF0sWzEyLDQ1LDE1LDI4LDQ2LDE2XSxbMywxNDcsMTE3LDEwLDE0OCwxMThdLFszLDczLDQ1LDIzLDc0LDQ2XSxbNCw1NCwyNCwzMSw1NSwyNV0sWzExLDQ1LDE1LDMxLDQ2LDE2XSxbNywxNDYsMTE2LDcsMTQ3LDExN10sWzIxLDczLDQ1LDcsNzQsNDZdLFsxLDUzLDIzLDM3LDU0LDI0XSxbMTksNDUsMTUsMjYsNDYsMTZdLFs1LDE0NSwxMTUsMTAsMTQ2LDExNl0sWzE5LDc1LDQ3LDEwLDc2LDQ4XSxbMTUsNTQsMjQsMjUsNTUsMjVdLFsyMyw0NSwxNSwyNSw0NiwxNl0sWzEzLDE0NSwxMTUsMywxNDYsMTE2XSxbMiw3NCw0NiwyOSw3NSw0N10sWzQyLDU0LDI0LDEsNTUsMjVdLFsyMyw0NSwxNSwyOCw0NiwxNl0sWzE3LDE0NSwxMTVdLFsxMCw3NCw0NiwyMyw3NSw0N10sWzEwLDU0LDI0LDM1LDU1LDI1XSxbMTksNDUsMTUsMzUsNDYsMTZdLFsxNywxNDUsMTE1LDEsMTQ2LDExNl0sWzE0LDc0LDQ2LDIxLDc1LDQ3XSxbMjksNTQsMjQsMTksNTUsMjVdLFsxMSw0NSwxNSw0Niw0NiwxNl0sWzEzLDE0NSwxMTUsNiwxNDYsMTE2XSxbMTQsNzQsNDYsMjMsNzUsNDddLFs0NCw1NCwyNCw3LDU1LDI1XSxbNTksNDYsMTYsMSw0NywxN10sWzEyLDE1MSwxMjEsNywxNTIsMTIyXSxbMTIsNzUsNDcsMjYsNzYsNDhdLFszOSw1NCwyNCwxNCw1NSwyNV0sWzIyLDQ1LDE1LDQxLDQ2LDE2XSxbNiwxNTEsMTIxLDE0LDE1MiwxMjJdLFs2LDc1LDQ3LDM0LDc2LDQ4XSxbNDYsNTQsMjQsMTAsNTUsMjVdLFsyLDQ1LDE1LDY0LDQ2LDE2XSxbMTcsMTUyLDEyMiw0LDE1MywxMjNdLFsyOSw3NCw0NiwxNCw3NSw0N10sWzQ5LDU0LDI0LDEwLDU1LDI1XSxbMjQsNDUsMTUsNDYsNDYsMTZdLFs0LDE1MiwxMjIsMTgsMTUzLDEyM10sWzEzLDc0LDQ2LDMyLDc1LDQ3XSxbNDgsNTQsMjQsMTQsNTUsMjVdLFs0Miw0NSwxNSwzMiw0NiwxNl0sWzIwLDE0NywxMTcsNCwxNDgsMTE4XSxbNDAsNzUsNDcsNyw3Niw0OF0sWzQzLDU0LDI0LDIyLDU1LDI1XSxbMTAsNDUsMTUsNjcsNDYsMTZdLFsxOSwxNDgsMTE4LDYsMTQ5LDExOV0sWzE4LDc1LDQ3LDMxLDc2LDQ4XSxbMzQsNTQsMjQsMzQsNTUsMjVdLFsyMCw0NSwxNSw2MSw0NiwxNl1dO1FSUlNCbG9jay5nZXRSU0Jsb2Nrcz1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKXt2YXIgcnNCbG9jaz1RUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO2lmKHJzQmxvY2s9PXVuZGVmaW5lZCl7dGhyb3cgbmV3IEVycm9yKCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOiIrdHlwZU51bWJlcisiL2Vycm9yQ29ycmVjdExldmVsOiIrZXJyb3JDb3JyZWN0TGV2ZWwpfXZhciBsZW5ndGg9cnNCbG9jay5sZW5ndGgvMzt2YXIgbGlzdD1bXTtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3ZhciBjb3VudD1yc0Jsb2NrW2kqMyswXTt2YXIgdG90YWxDb3VudD1yc0Jsb2NrW2kqMysxXTt2YXIgZGF0YUNvdW50PXJzQmxvY2tbaSozKzJdO2Zvcih2YXIgaj0wO2o8Y291bnQ7aisrKXtsaXN0LnB1c2gobmV3IFFSUlNCbG9jayh0b3RhbENvdW50LGRhdGFDb3VudCkpfX1yZXR1cm4gbGlzdH07UVJSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZT1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKXtzd2l0Y2goZXJyb3JDb3JyZWN0TGV2ZWwpe2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5MOnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCswXTtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTTpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrMV07Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLlE6cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlci0xKSo0KzJdO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5IOnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCszXTtkZWZhdWx0OnJldHVybiB1bmRlZmluZWR9fTtmdW5jdGlvbiBRUkJpdEJ1ZmZlcigpe3RoaXMuYnVmZmVyPVtdO3RoaXMubGVuZ3RoPTB9UVJCaXRCdWZmZXIucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24oaW5kZXgpe3ZhciBidWZJbmRleD1NYXRoLmZsb29yKGluZGV4LzgpO3JldHVybih0aGlzLmJ1ZmZlcltidWZJbmRleF0+Pj43LWluZGV4JTgmMSk9PTF9LHB1dDpmdW5jdGlvbihudW0sbGVuZ3RoKXtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3RoaXMucHV0Qml0KChudW0+Pj5sZW5ndGgtaS0xJjEpPT0xKX19LGdldExlbmd0aEluQml0czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0scHV0Qml0OmZ1bmN0aW9uKGJpdCl7dmFyIGJ1ZkluZGV4PU1hdGguZmxvb3IodGhpcy5sZW5ndGgvOCk7aWYodGhpcy5idWZmZXIubGVuZ3RoPD1idWZJbmRleCl7dGhpcy5idWZmZXIucHVzaCgwKX1pZihiaXQpe3RoaXMuYnVmZmVyW2J1ZkluZGV4XXw9MTI4Pj4+dGhpcy5sZW5ndGglOH10aGlzLmxlbmd0aCsrfX07dmFyIFFSQ29kZUxpbWl0TGVuZ3RoPVtbMTcsMTQsMTEsN10sWzMyLDI2LDIwLDE0XSxbNTMsNDIsMzIsMjRdLFs3OCw2Miw0NiwzNF0sWzEwNiw4NCw2MCw0NF0sWzEzNCwxMDYsNzQsNThdLFsxNTQsMTIyLDg2LDY0XSxbMTkyLDE1MiwxMDgsODRdLFsyMzAsMTgwLDEzMCw5OF0sWzI3MSwyMTMsMTUxLDExOV0sWzMyMSwyNTEsMTc3LDEzN10sWzM2NywyODcsMjAzLDE1NV0sWzQyNSwzMzEsMjQxLDE3N10sWzQ1OCwzNjIsMjU4LDE5NF0sWzUyMCw0MTIsMjkyLDIyMF0sWzU4Niw0NTAsMzIyLDI1MF0sWzY0NCw1MDQsMzY0LDI4MF0sWzcxOCw1NjAsMzk0LDMxMF0sWzc5Miw2MjQsNDQyLDMzOF0sWzg1OCw2NjYsNDgyLDM4Ml0sWzkyOSw3MTEsNTA5LDQwM10sWzEwMDMsNzc5LDU2NSw0MzldLFsxMDkxLDg1Nyw2MTEsNDYxXSxbMTE3MSw5MTEsNjYxLDUxMV0sWzEyNzMsOTk3LDcxNSw1MzVdLFsxMzY3LDEwNTksNzUxLDU5M10sWzE0NjUsMTEyNSw4MDUsNjI1XSxbMTUyOCwxMTkwLDg2OCw2NThdLFsxNjI4LDEyNjQsOTA4LDY5OF0sWzE3MzIsMTM3MCw5ODIsNzQyXSxbMTg0MCwxNDUyLDEwMzAsNzkwXSxbMTk1MiwxNTM4LDExMTIsODQyXSxbMjA2OCwxNjI4LDExNjgsODk4XSxbMjE4OCwxNzIyLDEyMjgsOTU4XSxbMjMwMywxODA5LDEyODMsOTgzXSxbMjQzMSwxOTExLDEzNTEsMTA1MV0sWzI1NjMsMTk4OSwxNDIzLDEwOTNdLFsyNjk5LDIwOTksMTQ5OSwxMTM5XSxbMjgwOSwyMjEzLDE1NzksMTIxOV0sWzI5NTMsMjMzMSwxNjYzLDEyNzNdXTtmdW5jdGlvbiBfaXNTdXBwb3J0Q2FudmFzKCl7cmV0dXJuIHR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQhPSJ1bmRlZmluZWQifWZ1bmN0aW9uIF9nZXRBbmRyb2lkKCl7dmFyIGFuZHJvaWQ9ZmFsc2U7dmFyIHNBZ2VudD1uYXZpZ2F0b3IudXNlckFnZW50O2lmKC9hbmRyb2lkL2kudGVzdChzQWdlbnQpKXthbmRyb2lkPXRydWU7dmFyIGFNYXQ9c0FnZW50LnRvU3RyaW5nKCkubWF0Y2goL2FuZHJvaWQgKFswLTldXC5bMC05XSkvaSk7aWYoYU1hdCYmYU1hdFsxXSl7YW5kcm9pZD1wYXJzZUZsb2F0KGFNYXRbMV0pfX1yZXR1cm4gYW5kcm9pZH12YXIgc3ZnRHJhd2VyPWZ1bmN0aW9uKCl7dmFyIERyYXdpbmc9ZnVuY3Rpb24oZWwsaHRPcHRpb24pe3RoaXMuX2VsPWVsO3RoaXMuX2h0T3B0aW9uPWh0T3B0aW9ufTtEcmF3aW5nLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKG9RUkNvZGUpe3ZhciBfaHRPcHRpb249dGhpcy5faHRPcHRpb247dmFyIF9lbD10aGlzLl9lbDt2YXIgbkNvdW50PW9RUkNvZGUuZ2V0TW9kdWxlQ291bnQoKTt2YXIgbldpZHRoPU1hdGguZmxvb3IoX2h0T3B0aW9uLndpZHRoL25Db3VudCk7dmFyIG5IZWlnaHQ9TWF0aC5mbG9vcihfaHRPcHRpb24uaGVpZ2h0L25Db3VudCk7dGhpcy5jbGVhcigpO2Z1bmN0aW9uIG1ha2VTVkcodGFnLGF0dHJzKXt2YXIgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIsdGFnKTtmb3IodmFyIGsgaW4gYXR0cnMpaWYoYXR0cnMuaGFzT3duUHJvcGVydHkoaykpZWwuc2V0QXR0cmlidXRlKGssYXR0cnNba10pO3JldHVybiBlbH12YXIgc3ZnPW1ha2VTVkcoInN2ZyIse3ZpZXdCb3g6IjAgMCAiK1N0cmluZyhuQ291bnQpKyIgIitTdHJpbmcobkNvdW50KSx3aWR0aDoiMTAwJSIsaGVpZ2h0OiIxMDAlIixmaWxsOl9odE9wdGlvbi5jb2xvckxpZ2h0fSk7c3ZnLnNldEF0dHJpYnV0ZU5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLyIsInhtbG5zOnhsaW5rIiwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIpO19lbC5hcHBlbmRDaGlsZChzdmcpO3N2Zy5hcHBlbmRDaGlsZChtYWtlU1ZHKCJyZWN0Iix7ZmlsbDpfaHRPcHRpb24uY29sb3JMaWdodCx3aWR0aDoiMTAwJSIsaGVpZ2h0OiIxMDAlIn0pKTtzdmcuYXBwZW5kQ2hpbGQobWFrZVNWRygicmVjdCIse2ZpbGw6X2h0T3B0aW9uLmNvbG9yRGFyayx3aWR0aDoiMSIsaGVpZ2h0OiIxIixpZDoidGVtcGxhdGUifSkpO2Zvcih2YXIgcm93PTA7cm93PG5Db3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXtpZihvUVJDb2RlLmlzRGFyayhyb3csY29sKSl7dmFyIGNoaWxkPW1ha2VTVkcoInVzZSIse3g6U3RyaW5nKGNvbCkseTpTdHJpbmcocm93KX0pO2NoaWxkLnNldEF0dHJpYnV0ZU5TKCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiwiaHJlZiIsIiN0ZW1wbGF0ZSIpO3N2Zy5hcHBlbmRDaGlsZChjaGlsZCl9fX19O0RyYXdpbmcucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7d2hpbGUodGhpcy5fZWwuaGFzQ2hpbGROb2RlcygpKXRoaXMuX2VsLnJlbW92ZUNoaWxkKHRoaXMuX2VsLmxhc3RDaGlsZCl9O3JldHVybiBEcmF3aW5nfSgpO3ZhciB1c2VTVkc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PSJzdmciO3ZhciBEcmF3aW5nPXVzZVNWRz9zdmdEcmF3ZXI6IV9pc1N1cHBvcnRDYW52YXMoKT9mdW5jdGlvbigpe3ZhciBEcmF3aW5nPWZ1bmN0aW9uKGVsLGh0T3B0aW9uKXt0aGlzLl9lbD1lbDt0aGlzLl9odE9wdGlvbj1odE9wdGlvbn07RHJhd2luZy5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbihvUVJDb2RlKXt2YXIgX2h0T3B0aW9uPXRoaXMuX2h0T3B0aW9uO3ZhciBfZWw9dGhpcy5fZWw7dmFyIG5Db3VudD1vUVJDb2RlLmdldE1vZHVsZUNvdW50KCk7dmFyIG5XaWR0aD1NYXRoLmZsb29yKF9odE9wdGlvbi53aWR0aC9uQ291bnQpO3ZhciBuSGVpZ2h0PU1hdGguZmxvb3IoX2h0T3B0aW9uLmhlaWdodC9uQ291bnQpO3ZhciBhSFRNTD1bJzx0YWJsZSBzdHlsZT0iYm9yZGVyOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyI+J107Zm9yKHZhciByb3c9MDtyb3c8bkNvdW50O3JvdysrKXthSFRNTC5wdXNoKCI8dHI+Iik7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXthSFRNTC5wdXNoKCc8dGQgc3R5bGU9ImJvcmRlcjowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtwYWRkaW5nOjA7bWFyZ2luOjA7d2lkdGg6JytuV2lkdGgrInB4O2hlaWdodDoiK25IZWlnaHQrInB4O2JhY2tncm91bmQtY29sb3I6Iisob1FSQ29kZS5pc0Rhcmsocm93LGNvbCk/X2h0T3B0aW9uLmNvbG9yRGFyazpfaHRPcHRpb24uY29sb3JMaWdodCkrJzsiPjwvdGQ+Jyl9YUhUTUwucHVzaCgiPC90cj4iKX1hSFRNTC5wdXNoKCI8L3RhYmxlPiIpO19lbC5pbm5lckhUTUw9YUhUTUwuam9pbigiIik7dmFyIGVsVGFibGU9X2VsLmNoaWxkTm9kZXNbMF07dmFyIG5MZWZ0TWFyZ2luVGFibGU9KF9odE9wdGlvbi53aWR0aC1lbFRhYmxlLm9mZnNldFdpZHRoKS8yO3ZhciBuVG9wTWFyZ2luVGFibGU9KF9odE9wdGlvbi5oZWlnaHQtZWxUYWJsZS5vZmZzZXRIZWlnaHQpLzI7aWYobkxlZnRNYXJnaW5UYWJsZT4wJiZuVG9wTWFyZ2luVGFibGU+MCl7ZWxUYWJsZS5zdHlsZS5tYXJnaW49blRvcE1hcmdpblRhYmxlKyJweCAiK25MZWZ0TWFyZ2luVGFibGUrInB4In19O0RyYXdpbmcucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fZWwuaW5uZXJIVE1MPSIifTtyZXR1cm4gRHJhd2luZ30oKTpmdW5jdGlvbigpe2Z1bmN0aW9uIF9vbk1ha2VJbWFnZSgpe3RoaXMuX2VsSW1hZ2Uuc3JjPXRoaXMuX2VsQ2FudmFzLnRvRGF0YVVSTCgiaW1hZ2UvcG5nIik7dGhpcy5fZWxJbWFnZS5zdHlsZS5kaXNwbGF5PSJibG9jayI7dGhpcy5fZWxDYW52YXMuc3R5bGUuZGlzcGxheT0ibm9uZSJ9aWYodGhpcy5fYW5kcm9pZCYmdGhpcy5fYW5kcm9pZDw9Mi4xKXt2YXIgZmFjdG9yPTEvd2luZG93LmRldmljZVBpeGVsUmF0aW87dmFyIGRyYXdJbWFnZT1DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZTtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZT1mdW5jdGlvbihpbWFnZSxzeCxzeSxzdyxzaCxkeCxkeSxkdyxkaCl7aWYoIm5vZGVOYW1lImluIGltYWdlJiYvaW1nL2kudGVzdChpbWFnZS5ub2RlTmFtZSkpe2Zvcih2YXIgaT1hcmd1bWVudHMubGVuZ3RoLTE7aT49MTtpLS0pe2FyZ3VtZW50c1tpXT1hcmd1bWVudHNbaV0qZmFjdG9yfX1lbHNlIGlmKHR5cGVvZiBkdz09InVuZGVmaW5lZCIpe2FyZ3VtZW50c1sxXSo9ZmFjdG9yO2FyZ3VtZW50c1syXSo9ZmFjdG9yO2FyZ3VtZW50c1szXSo9ZmFjdG9yO2FyZ3VtZW50c1s0XSo9ZmFjdG9yfWRyYXdJbWFnZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIF9zYWZlU2V0RGF0YVVSSShmU3VjY2VzcyxmRmFpbCl7dmFyIHNlbGY9dGhpcztzZWxmLl9mRmFpbD1mRmFpbDtzZWxmLl9mU3VjY2Vzcz1mU3VjY2VzcztpZihzZWxmLl9iU3VwcG9ydERhdGFVUkk9PT1udWxsKXt2YXIgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW1nIik7dmFyIGZPbkVycm9yPWZ1bmN0aW9uKCl7c2VsZi5fYlN1cHBvcnREYXRhVVJJPWZhbHNlO2lmKHNlbGYuX2ZGYWlsKXtzZWxmLl9mRmFpbC5jYWxsKHNlbGYpfX07dmFyIGZPblN1Y2Nlc3M9ZnVuY3Rpb24oKXtzZWxmLl9iU3VwcG9ydERhdGFVUkk9dHJ1ZTtpZihzZWxmLl9mU3VjY2Vzcyl7c2VsZi5fZlN1Y2Nlc3MuY2FsbChzZWxmKX19O2VsLm9uYWJvcnQ9Zk9uRXJyb3I7ZWwub25lcnJvcj1mT25FcnJvcjtlbC5vbmxvYWQ9Zk9uU3VjY2VzcztlbC5zcmM9ImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBRkNBWUFBQUNOYnlibEFBQUFIRWxFUVZRSTEyUDQvLzgvdzM4R0lBWERJQktFMERIeGdsak5CQUFPOVRYTDBZNE9Id0FBQUFCSlJVNUVya0pnZ2c9PSI7cmV0dXJufWVsc2UgaWYoc2VsZi5fYlN1cHBvcnREYXRhVVJJPT09dHJ1ZSYmc2VsZi5fZlN1Y2Nlc3Mpe3NlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZil9ZWxzZSBpZihzZWxmLl9iU3VwcG9ydERhdGFVUkk9PT1mYWxzZSYmc2VsZi5fZkZhaWwpe3NlbGYuX2ZGYWlsLmNhbGwoc2VsZil9fXZhciBEcmF3aW5nPWZ1bmN0aW9uKGVsLGh0T3B0aW9uKXt0aGlzLl9iSXNQYWludGVkPWZhbHNlO3RoaXMuX2FuZHJvaWQ9X2dldEFuZHJvaWQoKTt0aGlzLl9odE9wdGlvbj1odE9wdGlvbjt0aGlzLl9lbENhbnZhcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJjYW52YXMiKTt0aGlzLl9lbENhbnZhcy53aWR0aD1odE9wdGlvbi53aWR0aDt0aGlzLl9lbENhbnZhcy5oZWlnaHQ9aHRPcHRpb24uaGVpZ2h0O2VsLmFwcGVuZENoaWxkKHRoaXMuX2VsQ2FudmFzKTt0aGlzLl9lbD1lbDt0aGlzLl9vQ29udGV4dD10aGlzLl9lbENhbnZhcy5nZXRDb250ZXh0KCIyZCIpO3RoaXMuX2JJc1BhaW50ZWQ9ZmFsc2U7dGhpcy5fZWxJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpbWciKTt0aGlzLl9lbEltYWdlLmFsdD0iU2NhbiBtZSEiO3RoaXMuX2VsSW1hZ2Uuc3R5bGUuZGlzcGxheT0ibm9uZSI7dGhpcy5fZWwuYXBwZW5kQ2hpbGQodGhpcy5fZWxJbWFnZSk7dGhpcy5fYlN1cHBvcnREYXRhVVJJPW51bGx9O0RyYXdpbmcucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24ob1FSQ29kZSl7dmFyIF9lbEltYWdlPXRoaXMuX2VsSW1hZ2U7dmFyIF9vQ29udGV4dD10aGlzLl9vQ29udGV4dDt2YXIgX2h0T3B0aW9uPXRoaXMuX2h0T3B0aW9uO3ZhciBuQ291bnQ9b1FSQ29kZS5nZXRNb2R1bGVDb3VudCgpO3ZhciBuV2lkdGg9X2h0T3B0aW9uLndpZHRoL25Db3VudDt2YXIgbkhlaWdodD1faHRPcHRpb24uaGVpZ2h0L25Db3VudDt2YXIgblJvdW5kZWRXaWR0aD1NYXRoLnJvdW5kKG5XaWR0aCk7dmFyIG5Sb3VuZGVkSGVpZ2h0PU1hdGgucm91bmQobkhlaWdodCk7X2VsSW1hZ2Uuc3R5bGUuZGlzcGxheT0ibm9uZSI7dGhpcy5jbGVhcigpO2Zvcih2YXIgcm93PTA7cm93PG5Db3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXt2YXIgYklzRGFyaz1vUVJDb2RlLmlzRGFyayhyb3csY29sKTt2YXIgbkxlZnQ9Y29sKm5XaWR0aDt2YXIgblRvcD1yb3cqbkhlaWdodDtfb0NvbnRleHQuc3Ryb2tlU3R5bGU9YklzRGFyaz9faHRPcHRpb24uY29sb3JEYXJrOl9odE9wdGlvbi5jb2xvckxpZ2h0O19vQ29udGV4dC5saW5lV2lkdGg9MTtfb0NvbnRleHQuZmlsbFN0eWxlPWJJc0Rhcms/X2h0T3B0aW9uLmNvbG9yRGFyazpfaHRPcHRpb24uY29sb3JMaWdodDtfb0NvbnRleHQuZmlsbFJlY3QobkxlZnQsblRvcCxuV2lkdGgsbkhlaWdodCk7X29Db250ZXh0LnN0cm9rZVJlY3QoTWF0aC5mbG9vcihuTGVmdCkrLjUsTWF0aC5mbG9vcihuVG9wKSsuNSxuUm91bmRlZFdpZHRoLG5Sb3VuZGVkSGVpZ2h0KTtfb0NvbnRleHQuc3Ryb2tlUmVjdChNYXRoLmNlaWwobkxlZnQpLS41LE1hdGguY2VpbChuVG9wKS0uNSxuUm91bmRlZFdpZHRoLG5Sb3VuZGVkSGVpZ2h0KX19dGhpcy5fYklzUGFpbnRlZD10cnVlfTtEcmF3aW5nLnByb3RvdHlwZS5tYWtlSW1hZ2U9ZnVuY3Rpb24oKXtpZih0aGlzLl9iSXNQYWludGVkKXtfc2FmZVNldERhdGFVUkkuY2FsbCh0aGlzLF9vbk1ha2VJbWFnZSl9fTtEcmF3aW5nLnByb3RvdHlwZS5pc1BhaW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYklzUGFpbnRlZH07RHJhd2luZy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9vQ29udGV4dC5jbGVhclJlY3QoMCwwLHRoaXMuX2VsQ2FudmFzLndpZHRoLHRoaXMuX2VsQ2FudmFzLmhlaWdodCk7dGhpcy5fYklzUGFpbnRlZD1mYWxzZX07RHJhd2luZy5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24obk51bWJlcil7aWYoIW5OdW1iZXIpe3JldHVybiBuTnVtYmVyfXJldHVybiBNYXRoLmZsb29yKG5OdW1iZXIqMWUzKS8xZTN9O3JldHVybiBEcmF3aW5nfSgpO2Z1bmN0aW9uIF9nZXRUeXBlTnVtYmVyKHNUZXh0LG5Db3JyZWN0TGV2ZWwpe3ZhciBuVHlwZT0xO3ZhciBsZW5ndGg9X2dldFVURjhMZW5ndGgoc1RleHQpO2Zvcih2YXIgaT0wLGxlbj1RUkNvZGVMaW1pdExlbmd0aC5sZW5ndGg7aTw9bGVuO2krKyl7dmFyIG5MaW1pdD0wO3N3aXRjaChuQ29ycmVjdExldmVsKXtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpuTGltaXQ9UVJDb2RlTGltaXRMZW5ndGhbaV1bMF07YnJlYWs7Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06bkxpbWl0PVFSQ29kZUxpbWl0TGVuZ3RoW2ldWzFdO2JyZWFrO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5ROm5MaW1pdD1RUkNvZGVMaW1pdExlbmd0aFtpXVsyXTticmVhaztjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpuTGltaXQ9UVJDb2RlTGltaXRMZW5ndGhbaV1bM107YnJlYWt9aWYobGVuZ3RoPD1uTGltaXQpe2JyZWFrfWVsc2V7blR5cGUrK319aWYoblR5cGU+UVJDb2RlTGltaXRMZW5ndGgubGVuZ3RoKXt0aHJvdyBuZXcgRXJyb3IoIlRvbyBsb25nIGRhdGEiKX1yZXR1cm4gblR5cGV9ZnVuY3Rpb24gX2dldFVURjhMZW5ndGgoc1RleHQpe3JldHVybiB0b1VURjgoc1RleHQpLmxlbmd0aH1RUkNvZGU9ZnVuY3Rpb24oZWwsdk9wdGlvbil7dGhpcy5faHRPcHRpb249e3dpZHRoOjI1NixoZWlnaHQ6MjU2LHR5cGVOdW1iZXI6NCxjb2xvckRhcms6IiMwMDAwMDAiLGNvbG9yTGlnaHQ6IiNmZmZmZmYiLGNvcnJlY3RMZXZlbDpRUkVycm9yQ29ycmVjdExldmVsLkh9O2lmKHR5cGVvZiB2T3B0aW9uPT09InN0cmluZyIpe3ZPcHRpb249e3RleHQ6dk9wdGlvbn19aWYodk9wdGlvbil7Zm9yKHZhciBpIGluIHZPcHRpb24pe3RoaXMuX2h0T3B0aW9uW2ldPXZPcHRpb25baV19fWlmKHR5cGVvZiBlbD09InN0cmluZyIpe2VsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKX1pZih0aGlzLl9odE9wdGlvbi51c2VTVkcpe0RyYXdpbmc9c3ZnRHJhd2VyfXRoaXMuX2FuZHJvaWQ9X2dldEFuZHJvaWQoKTt0aGlzLl9lbD1lbDt0aGlzLl9vUVJDb2RlPW51bGw7dGhpcy5fb0RyYXdpbmc9bmV3IERyYXdpbmcodGhpcy5fZWwsdGhpcy5faHRPcHRpb24pO2lmKHRoaXMuX2h0T3B0aW9uLnRleHQpe3RoaXMubWFrZUNvZGUodGhpcy5faHRPcHRpb24udGV4dCl9fTtRUkNvZGUucHJvdG90eXBlLm1ha2VDb2RlPWZ1bmN0aW9uKHNUZXh0KXt0aGlzLl9vUVJDb2RlPW5ldyBRUkNvZGVNb2RlbChfZ2V0VHlwZU51bWJlcihzVGV4dCx0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpLHRoaXMuX2h0T3B0aW9uLmNvcnJlY3RMZXZlbCk7dGhpcy5fb1FSQ29kZS5hZGREYXRhKHNUZXh0KTt0aGlzLl9vUVJDb2RlLm1ha2UoKTt0aGlzLl9lbC50aXRsZT1zVGV4dDt0aGlzLl9vRHJhd2luZy5kcmF3KHRoaXMuX29RUkNvZGUpO3RoaXMubWFrZUltYWdlKCl9O1FSQ29kZS5wcm90b3R5cGUubWFrZUltYWdlPWZ1bmN0aW9uKCl7aWYodHlwZW9mIHRoaXMuX29EcmF3aW5nLm1ha2VJbWFnZT09ImZ1bmN0aW9uIiYmKCF0aGlzLl9hbmRyb2lkfHx0aGlzLl9hbmRyb2lkPj0zKSl7dGhpcy5fb0RyYXdpbmcubWFrZUltYWdlKCl9fTtRUkNvZGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fb0RyYXdpbmcuY2xlYXIoKX07UVJDb2RlLkNvcnJlY3RMZXZlbD1RUkVycm9yQ29ycmVjdExldmVsfSkoKTsK
`; // eslint-disable-line
const wordlist_txt = `penumbra
crepuscular
littoral
estuary
interregnum
threshold
cusp
vesper
gloaming
dusk
aubade
solstice
equinox
perihelion
aphelion
tidal_pool
ecotone
hypnagogia
fugue_state
limbo
antechamber
vestibule
margin
borderland
twilight
eventide
phosphorescence
bioluminescence
afterglow
half-light
petrichor
vellichor
sonder
kenopsia
anemoia
chrysalism
onism
liberosis
nodus_tollens
occhiolism
monachopsis
mauerbauertraurigkeit
jouska
ellipsism
exulansis
opia
gnossienne
énouement
lachesism
rubatosis
altschmerz
vemodalen
anecdoche
nighthawk
aporia
aporetic
eudaimonia
ataraxia
epoché
dasein
weltanschauung
gestalt
qualia
telos
entelechy
haecceity
thisness
contingency
immanence
transcendence
noumena
phenomena
intersubjectivity
hermeneutics
dialectic
sublation
aufhebung
becoming
différance
trace
supplement
apophatic
cataphatic
palimpsest
pharmakon
chiasmus
mise_en_abyme
susurrus
sibilant
murmuration
ululation
plangent
mellifluous
dulcet
sonorous
euphonious
diaphanous
gossamer
lambent
effulgent
incandescent
opalescent
iridescent
crepitation
tintinnabulation
caesura
enjambment
syncopation
tremolo
vibrato
glissando
sfumato
chiaroscuro
pianissimo
crescendo
fermata
déjà_vu
jamais_vu
presque_vu
l'appel_du_vide
pareidolia
apophenia
uncanny_valley
doppelgänger
revenant
fetch
wraith
simulacrum
eerie
weird
spectral
phantasmagoria
oneiric
somnambulant
hypnopompic
eidetic
afterimage
persistence_of_vision
entoptic
floaters
scotoma
phosphene
aura
quark
lepton
fermion
boson
hadron
planck_length
angstrom
micron
organelle
mitochondrion
axon
dendrite
synapse
connectome
biosphere
noosphere
heliosphere
magnetosphere
parsec
light_year
astronomical_unit
hubble_volume
observable_universe
multiverse
plenum
void
singularity
event_horizon
anachronism
prolepsis
flashforward
palimpsest_time
eternal_return
kairos
chronos
aeon
durée
deep_time
geological_time
entropy
arrow_of_time
simultaneity
retrocausality
block_universe
presentism
eternalism
growing_block
temporal_parts
perdurance
endurantism
fugacity
transience
impermanence
wabi-sabi
metamorphosis
chrysalis
pupation
molting
ecdysis
sublimation
phase_transition
superposition
entanglement
decoherence
emergence
autopoiesis
morphogenesis
differentiation
invagination
gastrulation
apoptosis
autophagy
senescence
neoteny
paedomorphosis
exaptation
spandrel
bricolage
kintsugi
ablation
proprioception
interoception
exteroception
nociception
saccade
fixation
foveal
peripheral_awareness
selective_attention
inattentional_blindness
change_blindness
binding_problem
global_workspace
access_consciousness
phenomenal_consciousness
metacognition
introspection
mindfulness
flow_state
absorption
presence
witnessing
bare_attention
choiceless_awareness
beginner's_mind
shoshin
aurora
corona
zodiacal_light
gegenschein
airglow
noctilucent_clouds
nacreous_clouds
glory
Brocken_spectre
fata_morgana
green_flash
crepuscular_rays
anticrepuscular
circumhorizon_arc
parhelion
moonbow
fogbow
supernumerary
kelvin-helmholtz
mammatus
lenticular
asperitas
virga
graupel
hoarfrost
rime
verglas
firn
atrium
clerestory
ambulatory
narthex
apse
transept
nave
cloister
scriptorium
ossuary
hypogeum
catacomb
cenote
grotto
folly
gazebo
belvedere
cupola
lantern
oculus
fenestration
rustication
pilaster
colonnade
arcade
loggia
portico
pergola
trompe_l'œil
voussoir
marginalia
gloss
scholium
colophon
incipit
explicit
lacuna
crux
hapax_legomenon
ghost_word
calque
loan_word
portmanteau
neologism
archaism
anacoluthon
aposiopesis
paralepsis
litotes
meiosis
hyperbaton
tmesis
diacope
epistrophe
anaphora
antimetabole
zeugma
syllepsis
hendiadys
merism
stillness
hush
lull
respite
reprieve
interlude
hiatus
rest
tacet
negative_space
ma
sunyata
emptiness
clearing
lichtung
opening
aletheia
disclosure
unconcealment
presencing
givenness
thereness
isness
suchness
tathata
quiddity
essence
ousia
ablution
aspersion
lustration
genuflection
prostration
circumambulation
pilgrimage
vigil
vespers
compline
matins
lauds
prime
terce
sext
none
lectio_divina
centering_prayer
hesychasm
dhikr
mantra
japa
zazen
kinhin
gasshō
mudra
offering
libation
incense
votary
ex-voto
tardigrade
nematode
rotifer
copepod
diatom
foraminifera
radiolaria
dinoflagellate
coccolithophore
cyanobacteria
archaea
extremophile
halophile
thermophile
psychrophile
endolith
lithoautotroph
mycorrhiza
lichen
slime_mold
plasmodium
fruiting_body
sporangium
gemmule
statoblast
diapause
cryptobiosis
anhydrobiosis
ametabolous
holometabolous
melancholia
ennui
languor
malaise
restlessness
disquiet
unease
foreboding
presentiment
apprehension
wistfulness
longing
yearning
pining
nostalgia
homesickness
fernweh
wanderlust
sehnsucht
hiraeth
saudade
toska
mono_no_aware
lacrimae_rerum
weltschmerz
angst
existential_dread
numinous_terror
awe
wonder
astonishment
bewilderment
perplexity
`; // eslint-disable-line

const ENCODING_LEN = ENCODING.length;
const TIME_LEN = 10;
const RANDOM_LEN = 16;

addEventListener("fetch", (fetch_event) => {
  // configure primary entrypoint
  fetch_event.respondWith(HANDLER(fetch_event));
});

// main entrypoint for all requests
async function HANDLER(fetch_event) {
  const now = Date.now();
  request = fetch_event.request;
  let headers = [...request.headers];
  for (const key in request.cf) {
    headers = headers.concat([
      ["cf-" + key, request.cf[key]]
    ]);
  }
  // massage headers and cloudflare metadata into "requestHeadersAndFriends" - an object containing helpful metadata for a given request
  const requestHeadersAndFriends = {};
  for (const header_index in headers) {
    requestHeadersAndFriends[headers[header_index][0].toLowerCase()] =
      headers[header_index][1];
  }
  const url = new URL(request.url);

  // Handle CORS preflight requests
  if (request.method === "OPTIONS") {
    return handleCorsPreflightRequest(url);
  }

  // Clone the request to avoid "body already used" errors in error handling
  let requestBodyForDebug = null;
  try {
    if (request.body) {
      const clonedRequest = request.clone();
      requestBodyForDebug = await clonedRequest.arrayBuffer();
    }
  } catch (e) {
    // If cloning fails, we'll just not have debug info
    requestBodyForDebug = new ArrayBuffer(0);
  }

  // wrap main handler in a try/catch exception logging & reporting block, for easy debug
  try {
    url.protocol = "https:";

    if (url.pathname === "/post" || url.pathname === "/") {
      if (request.method === "POST") {
        // Accept any reasonable content for uploads
        let blob = await request.arrayBuffer();
        blob = await new Blob([blob]).arrayBuffer();

        // Generate keys
        const storeKey = ulid(now);
        const editKey = ulid(now);
        const deleteKey = ulid(now);

        // Handle TTL
        let xTtlSeconds = requestHeadersAndFriends["x-ttl"];
        if (xTtlSeconds === undefined) {
          xTtlSeconds = 24 * 60 * 60 * 30 * 12; // 1 year
        } else {
          xTtlSeconds = parseInt(xTtlSeconds, 10);
        }

        const expiryTime = new Date(xTtlSeconds * 1000 + now).toISOString();

        // Store the content
        await NAMESPACE.put(storeKey, blob, {
          expirationTtl: xTtlSeconds,
          metadata: {
            edit: editKey,
            del: deleteKey,
            expiry: expiryTime
          }
        });

        // Prepare response data
        const responseData = {
          message: `GetPost stored ${blob.byteLength} bytes!`,
          size: blob.byteLength,
          key: storeKey,
          share_url: `${url.href}?key=${storeKey}`,
          raw_url: `${url.href}?key=${storeKey}&raw`,
          delete_url: `${url.href}?key=${storeKey}&del=${deleteKey}`,
          expires_at: expiryTime
        };

        // Content negotiation based on Accept header with user-agent fallback
        const acceptHeader = requestHeadersAndFriends["accept"] || "";
        const userAgent = requestHeadersAndFriends["user-agent"] || "";

        // Check for CLI tools as fallback when Accept header is generic
        const isCLITool = userAgent.startsWith("curl/") ||
          userAgent.toLowerCase().includes("wget") ||
          userAgent.toLowerCase().includes("python") ||
          userAgent.toLowerCase().includes("node") ||
          userAgent.toLowerCase().includes("go-http-client");

        if (acceptHeader.includes("application/json")) {
          // JSON response for API clients
          return buildResponse(JSON.stringify(responseData, null, 2), "application/json", {}, 200, url);
        } else if (acceptHeader.includes("text/plain") && !acceptHeader.includes("text/html")) {
          // Plain text response explicitly requested
          const textResp = `${responseData.message}

share link: ${responseData.share_url}
raw link: ${responseData.raw_url}
delete link: ${responseData.delete_url}
expires at: ${responseData.expires_at}`;
          return buildResponse(textResp, DEFAULT_MIME_TEXT, {}, 200, url);
        } else if (isCLITool && !acceptHeader.includes("text/html")) {
          // Fallback: CLI tools get plain text when Accept header is generic (*/* or missing)
          const textResp = `${responseData.message}

share link: ${responseData.share_url}
raw link: ${responseData.raw_url}
delete link: ${responseData.delete_url}
expires at: ${responseData.expires_at}`;
          return buildResponse(textResp, DEFAULT_MIME_TEXT, {}, 200, url);
        } else {
          // HTML response for browsers (with markdown parsing)
          const htmlResp = marked(`${responseData.message}

**Share link:** ${responseData.share_url}
**Raw link:** ${responseData.raw_url}
**Delete link:** ${responseData.delete_url}
**Expires at:** ${responseData.expires_at}`);
          return buildResponse(htmlResp, DEFAULT_MIME_HTML, {}, 200, url);
        }
      } else if (request.method === "GET") {
        const del = url.searchParams.get("del");
        const key = url.searchParams.get("key");
        const raw = url.searchParams.has("raw");
        const customContentType = url.searchParams.get("content_type");
        const customTitle = url.searchParams.get("title");

        // if no key parameter provided, return the upload prompt so user can upload
        if (!url.searchParams.has("key")) {
          const upload = `<html><head>
<link rel="stylesheet" href="/getpost.css">
<title>GetPost: Secure Upload</title>
<meta name="title" content="GetPost: Libre linking for poems and memes">
<meta name="description" content="Run your own instance for free on any domain. No accounts, no tracking, globally distributed. Now with E2E encryption!">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url.toString()}">
<meta property="twitter:title" content="GetPost: Libre linking for poems and memes">
<meta property="twitter:description" content="Run your own instance for free on any domain. No accounts, no tracking, globally distributed.">
<style>
.encryption-section {
    background: #2a2828;
    border: 2px solid #48bb78;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}
.encryption-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #f5f3f3;
}
.encryption-toggle input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.password-fields {
    display: none;
    margin-top: 15px;
}
.password-fields.active {
    display: block;
}
.password-field {
    margin-bottom: 10px;
    position: relative;
}
.password-field label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #f5f3f3;
}
.password-field input {
    width: 100%;
    padding: 10px 40px 10px 10px;
    border: 2px solid #555;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
    background: #1a1818;
    color: #f5f3f3;
}
.password-field input:focus {
    outline: none;
    border-color: #48bb78;
}
.password-toggle {
    position: absolute;
    right: 10px;
    top: 35px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    color: #999;
    user-select: none;
}
.password-toggle:hover {
    color: #f5f3f3;
}
.password-generate {
    margin-top: 10px;
    padding: 8px 16px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 600;
}
.password-generate:hover {
    background: #5568d3;
}
.encryption-info {
    background: #3a3838;
    border: 1px solid #fbbf24;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
    font-size: 13px;
    color: #fbbf24;
}
.qr-container {
    display: none;
    margin-top: 20px;
    padding: 20px;
    background: #2a2828;
    border: 2px solid #48bb78;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.qr-container.active {
    display: block;
}
#qrcode {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
}
.share-links {
    margin-top: 15px;
}
.share-link {
    display: block;
    padding: 8px;
    background: #1a1818;
    border: 1px solid #555;
    border-radius: 4px;
    margin: 5px 0;
    font-size: 12px;
    word-break: break-all;
    color: #f5f3f3;
    cursor: pointer;
    transition: all 0.2s;
}
.share-link:hover {
    background: #2a2828;
    border-color: #48bb78;
}
.share-link.copied {
    background: #1f3a2f;
    border-color: #48bb78;
}
.copy-feedback {
    display: inline-block;
    margin-left: 10px;
    color: #48bb78;
    font-weight: 600;
    font-size: 13px;
    opacity: 0;
    transition: opacity 0.3s;
}
.copy-feedback.show {
    opacity: 1;
}
</style>
</head>
<body>

<h1>GetPost</h1>
<h2>Libre linking for poems and memes</h2>
<h3>🚀 Run your own instance for free on any domain</h3>

<p>Share text, images, and files up to 10MB. No accounts, no tracking, globally distributed.</p>

<div class="encryption-section">
    <div class="encryption-toggle">
        <input type="checkbox" id="encryptToggle">
        <label for="encryptToggle">🔒 Enable End-to-End Encryption</label>
    </div>
    <div class="password-fields" id="passwordFields">
        <div class="password-field">
            <label for="encryptPassword">Encryption Password:</label>
            <input type="password" id="encryptPassword" placeholder="Enter a strong password">
            <button type="button" class="password-toggle" onclick="togglePasswordVisibility('encryptPassword', this)">👁️</button>
        </div>
        <div class="password-field">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password">
            <button type="button" class="password-toggle" onclick="togglePasswordVisibility('confirmPassword', this)">👁️</button>
        </div>
        <button type="button" class="password-generate" onclick="generateStrongPassword()">🎲 Generate Strong Password</button>
        <div class="encryption-info">
            ⚠️ <strong>Zero-knowledge encryption:</strong> Your files are encrypted in your browser before upload.
            The password never leaves your device. If you lose it, your data is unrecoverable.
        </div>
    </div>
</div>

<div id="wrap">
    <div id="form">
      <form method="post" enctype="multipart/form-data" action="/post" method="post">
        <input id="upfile" name="upfile" type="file">
        <input value="Post" onclick="upload_file_directly()" type="button">
      </form>
    </div>
</div>

<table id="userinfo">
<tr id="upfilename"></tr>
<tr id="upfilesize"></tr>
<tr id="upfiletype"></tr>
<tr>
<div id="notpacman" style="width: 30%; height: auto">
    ${notpacman_svg}
</div>
</tr>
<tr><td id="message">Drag files here or click to upload<br/></td></tr>
</table>

<div class="qr-container" id="qrContainer">
    <h3>✅ Upload Successful!</h3>
    <div id="qrcode"></div>
    <div class="share-links" id="shareLinks"></div>
</div>

<h2>Quick Start</h2>

<h3>Web Upload</h3>
<p>Drag and drop files above, or click to browse. Markdown files are rendered automatically.</p>
<p>✨ <strong>New:</strong> Enable encryption for zero-knowledge privacy. Share the generated link with password embedded.</p>

<h3>Command Line</h3>
<pre><code># Basic upload
curl --data-binary @myfile.txt ${url.toString()}

# Upload from clipboard (macOS)
pbpaste | curl --data-binary @- ${url.toString()}

# Custom expiration (1 hour)
curl -H "X-TTL: 3600" --data-binary @file.txt ${url.toString()}</code></pre>

<h4>One-liner Script</h4>
<p>Save this as <code>/usr/local/bin/pastebin</code> and make executable:</p>
<pre><code>#!/bin/bash
curl --data-binary @$\{1:--\} ${url.toString()}</code></pre>

<p>Usage: <code>pastebin myfile.txt</code> or <code>echo "hello" | pastebin</code></p>

<h2>Features</h2>

<ul>
<li><strong>🔐 E2E Encryption</strong> - Optional zero-knowledge encryption in browser</li>
<li><strong>📝 Text & Markdown</strong> - Automatic rendering of markdown</li>
<li><strong>🖼️ Images</strong> - PNG, JPEG, GIF with instant preview</li>
<li><strong>📄 Documents</strong> - PDFs, videos, any file type up to 10MB</li>
<li><strong>🔗 Shareable Links</strong> - Append <code>&raw</code> for direct file access</li>
<li><strong>⏰ Auto-Expiry</strong> - Default 1 year, configurable with X-TTL header</li>
<li><strong>🗑️ Delete Control</strong> - Every upload gets a unique delete key</li>
<li><strong>📱 QR Codes</strong> - Instant QR codes for easy mobile sharing</li>
</ul>

<h2>Deploy Your Own</h2>

<p>GetPost runs on <strong>Cloudflare Workers</strong> - zero servers, global distribution, generous free tier (100k reads, 1k uploads daily).</p>

<ol>
<li>Clone: <code>git clone https://github.com/getpost-loves-you/getpost</code></li>
<li>Setup: Follow <code>SETUP.md</code> for one-click Cloudflare deployment</li>
<li>Deploy: <code>./deploy.sh mydomain</code></li>
<li>Hack: Modify CSS, add features, make it yours!</li>
</ol>

<h3>Why Self-Host?</h3>
<ul>
<li><strong>Free Forever</strong> - No hosting costs on Cloudflare's free tier</li>
<li><strong>Your Domain</strong> - Custom branding and control</li>
<li><strong>Zero Maintenance</strong> - No servers, no updates, no downtime</li>
<li><strong>Privacy</strong> - Your data stays in your KV namespace</li>
<li><strong>E2E Encryption</strong> - Optional zero-knowledge security</li>
</ul>

<h2>Advanced Usage</h2>

<h3>Headers & Parameters</h3>
<pre><code># Custom expiration
X-TTL: 3600          # Seconds until expiry

# Parameters
?raw                 # Return original file
?cors=1              # Enable CORS headers</code></pre>

<h3>Integration Examples</h3>
<pre><code># GitHub Actions artifact sharing
- run: ./deploy.sh | curl --data-binary @- $GETPOST_URL

# Screenshot sharing (macOS)
screencapture -c && pbpaste | curl --data-binary @- $GETPOST_URL

# Log sharing
tail -f app.log | curl --data-binary @- $GETPOST_URL</code></pre>

<h2>Technical Details</h2>

<p><strong>Architecture:</strong> Cloudflare Workers + KV storage, globally distributed edge computing</p>
<p><strong>Encryption:</strong> NaCl SecretBox (XSalsa20-Poly1305) + Argon2i key derivation</p>
<p><strong>Security:</strong> ULID-based access control, separate delete tokens, no central database</p>
<p><strong>Performance:</strong> Sub-100ms response times worldwide, automatic CDN caching</p>
<p><strong>Privacy:</strong> No tracking, no ads, no accounts required. Optional E2E encryption.</p>

<blockquote>
<p><strong>Open Source:</strong> CC0; No Rights Reserved. Fork it, hack it, improve it, deploy it everywhere.</p>
</blockquote>

<p><a href="https://github.com/getpost-loves-you/getpost">📄 Source Code</a> | <a href="https://github.com/getpost-loves-you/getpost/blob/main/SETUP.md">🚀 Deploy Guide</a> | <a href="https://github.com/getpost-loves-you/getpost/issues">🐛 Report Issues</a></p>

<script src="/naclfast.min.js"></script>
<script src="/argon2bundled.min.js"></script>
<script src="/qrcode.min.js"></script>
<script>
// Curated wordlist for password generation - loaded from /wordlist.txt
// Initialize with fallback wordlist to prevent race conditions
let WORDLIST = [
    'penumbra', 'twilight', 'aurora', 'vesper', 'chrysalis', 'petrichor', 'solstice', 'liminal', 'threshold', 'ephemeral',
    'luminous', 'nebula', 'cascade', 'resonance', 'prismatic', 'quintessence', 'ephemera', 'meridian', 'cipher', 'enigma'
];
const pattern = String.fromCharCode(92) + 'r' + '?' + String.fromCharCode(92) + 'n';
// Load full wordlist from server (will replace fallback when loaded)
fetch('/wordlist.txt')
    .then(response => response.text())
    .then(text => {
        const words = text.trim().split(new RegExp(pattern)).filter(word => word.length > 0);
        if (words.length > 0) {
            WORDLIST = words;
            console.log('Loaded ' + words.length + ' words for password generation');
        }
    })
    .catch(err => {
        console.warn('Failed to load full wordlist, using fallback:', err);
    });

var file;
var file_buffer;
var isEncryptionEnabled = false;
const dropArea = document.getElementById('notpacman');
const encryptToggle = document.getElementById('encryptToggle');
const passwordFields = document.getElementById('passwordFields');

function togglePasswordVisibility(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
}

function generateStrongPassword() {
    // Use crypto.getRandomValues for secure entropy
    const numWords = 4;
    const words = [];

    for (let i = 0; i < numWords; i++) {
        const randomValues = new Uint32Array(1);
        crypto.getRandomValues(randomValues);
        const index = randomValues[0] % WORDLIST.length;
        words.push(WORDLIST[index]);
    }

    // Add a random number for extra entropy
    const randomNum = crypto.getRandomValues(new Uint32Array(1))[0] % 1000;

    const password = words.join('-') + '-' + randomNum;

    document.getElementById('encryptPassword').value = password;
    document.getElementById('confirmPassword').value = password;

    // Briefly show the generated password
    const encryptInput = document.getElementById('encryptPassword');
    const confirmInput = document.getElementById('confirmPassword');
    encryptInput.type = 'text';
    confirmInput.type = 'text';

    // Update eye buttons
    document.querySelectorAll('.password-toggle').forEach(btn => btn.textContent = '🙈');
}

encryptToggle.addEventListener('change', function() {
    isEncryptionEnabled = this.checked;
    if (isEncryptionEnabled) {
        passwordFields.classList.add('active');
    } else {
        passwordFields.classList.remove('active');
    }
});

dropArea.addEventListener('dragover', (event) => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
});

dropArea.addEventListener('drop', (event) => {
  event.stopPropagation();
  event.preventDefault();
  file = event.dataTransfer.files[0];
    file.arrayBuffer().then((l,r)=>{file_buffer=l})
    document.getElementById("upfilesize").innerHTML = "Size: " + file.size + " bytes";
    document.getElementById("upfiletype").innerHTML = "Type: " + file.type;
    document.getElementById("upfilename").innerHTML = "Filename: " + file.name;
});

async function deriveKey(password, salt) {
    const passwordBytes = new TextEncoder().encode(password);
    const opslimit = 3;
    const memlimit = 262144;

    const result = await argon2.hash({
        pass: passwordBytes,
        salt: salt,
        time: opslimit,
        mem: memlimit,
        hashLen: 32,
        parallelism: 1,
        type: argon2.ArgonType.Argon2i
    });

    return new Uint8Array(result.hash);
}

async function encryptFile(fileBuffer, password) {
    const message = new Uint8Array(fileBuffer);
    const salt = nacl.randomBytes(16);
    const key = await deriveKey(password, salt);
    const nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
    const ciphertext = nacl.secretbox(message, nonce, key);

    const output = new Uint8Array(1 + salt.length + nonce.length + ciphertext.length);
    output[0] = 0;
    output.set(salt, 1);
    output.set(nonce, 1 + salt.length);
    output.set(ciphertext, 1 + salt.length + nonce.length);

    return output;
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        element.classList.add('copied');
        const feedback = element.querySelector('.copy-feedback');
        if (feedback) {
            feedback.classList.add('show');
        }

        setTimeout(() => {
            element.classList.remove('copied');
            if (feedback) {
                feedback.classList.remove('show');
            }
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy to clipboard');
    });
}

function showQRCode(shareUrl) {
    const qrContainer = document.getElementById('qrContainer');
    const qrcodeDiv = document.getElementById('qrcode');
    const shareLinksDiv = document.getElementById('shareLinks');

    qrcodeDiv.innerHTML = '';

    new QRCode(qrcodeDiv, {
        text: shareUrl,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });

    // Create elements properly to avoid escaping issues
    const strongEl = document.createElement('strong');
    strongEl.textContent = '📎 Share this link:';

    const linkDiv = document.createElement('div');
    linkDiv.className = 'share-link';
    linkDiv.title = 'Click to copy';
    linkDiv.textContent = shareUrl;
    linkDiv.onclick = function() { copyToClipboard(shareUrl, this); };

    const feedback = document.createElement('span');
    feedback.className = 'copy-feedback';
    feedback.textContent = '✓ Copied!';
    linkDiv.appendChild(feedback);

    shareLinksDiv.innerHTML = '';
    shareLinksDiv.appendChild(strongEl);
    shareLinksDiv.appendChild(linkDiv);

    qrContainer.classList.add('active');

    // Scroll to the QR container so it's visible
    setTimeout(() => {
        qrContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

async function upload_file_directly() {
    let uploadBuffer = file_buffer;
    let password = '';
    let originalMimeType = file.type || 'application/octet-stream';

    if (isEncryptionEnabled) {
        password = document.getElementById('encryptPassword').value;
        const confirmPass = document.getElementById('confirmPassword').value;

        if (!password) {
            alert('Please enter a password for encryption');
            return;
        }

        if (password !== confirmPass) {
            alert('Passwords do not match!');
            return;
        }

        document.getElementById('message').innerHTML = 'Encrypting file...<br/>';

        try {
            uploadBuffer = await encryptFile(file_buffer, password);
            document.getElementById('message').innerHTML = 'File encrypted! Uploading...<br/>';
        } catch (error) {
            alert('Encryption failed: ' + error.message);
            return;
        }
    }

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/post", true);
    oReq.setRequestHeader("Accept", "application/json");
    oReq.responseType = 'json';
    oReq.onload = function (oEvent) {
        console.log(oReq.response);

        if (oReq.response && oReq.response.share_url) {
            let shareUrl = oReq.response.share_url;

            if (isEncryptionEnabled && password) {
                // Encode MIME type and filename in fragment along with password
                shareUrl = shareUrl + '#;;;' + encodeURIComponent(password) + ';;;' + encodeURIComponent(originalMimeType) + ';;;' + encodeURIComponent(file.name);
            }

            showQRCode(shareUrl);
            document.getElementById('message').innerHTML = '✅ Upload successful!<br/>';
        } else {
            document.body.innerHTML = JSON.stringify(oReq.response);
        }
    };
    oReq.onerror = function() {
        alert('Upload failed!');
    };

    var blob = new Blob([uploadBuffer], {type: 'application/x-www-form-urlencoded'});
    oReq.send(blob);
};

document.getElementById("upfile").addEventListener("change", function(event) {
    file = event.target.files[0];
    file.arrayBuffer().then((l,r)=>{file_buffer=l})
    document.getElementById("upfilesize").innerHTML = "Size: " + file.size + " bytes";
    document.getElementById("upfiletype").innerHTML = "Type: " + file.type;
    document.getElementById("upfilename").innerHTML = "Filename: " + file.name;
}, false);
</script>
</body>
</html>
`; // eslint-disable-line
          return buildResponse(upload, DEFAULT_MIME_HTML, {}, 200, url);
        }
        // ULID is len26
        if (key.length === 26 || key.length === 91) {
          let {
            contentFromKeyAsArrayBuffer,
            metadata
          } =
          await NAMESPACE.getWithMetadata(key, "arrayBuffer");
          // if either key dne, or old format
          if (metadata === null) {
            // check to see if old (pre-metadata)
            contentFromKeyAsArrayBuffer = await NAMESPACE.get(
              key,
              "arrayBuffer",
            );
            if (contentFromKeyAsArrayBuffer !== null) {
              contentFromKeyAsArrayBuffer = contentFromKeyAsArrayBuffer.slice(
                0,
                -26,
              );
            } else {
              return buildResponse(
                "Sorry, invalid key!",
                DEFAULT_MIME_TEXT, {},
                404,
                url,
              );
            }
          } else {
            // this second get should not be required... it appears getWithMetadata doesn't support returning arrayBuffers!?
            contentFromKeyAsArrayBuffer = await NAMESPACE.get(
              key,
              "arrayBuffer",
            );
          }
          // if both key and delete key...
          if (url.searchParams.has("del") && del.length == 26) {
            if (del === metadata.del) {
              const deleted_target_key = await NAMESPACE.delete(key);
              return buildResponse(
                `OK, sent command to delete ${key} using ${del} - please wait 3min for full delete.`,
                DEFAULT_MIME_TEXT, {},
                200,
                url,
              );
            } else {
              return buildResponse(
                "Sorry, invalid del key!",
                DEFAULT_MIME_TEXT, {},
                404,
                url,
              );
            }
          }
          const [generatedBodyHtml, type] = generateHtmlBasedOnType(
            contentFromKeyAsArrayBuffer,
            url,
            metadata,
            customTitle
          );
          if (raw) {
            // Check if custom content type is provided and validate it
            let responseContentType = type;
            if (customContentType) {
              if (isValidContentType(customContentType)) {
                responseContentType = customContentType;
              } else {
                return buildResponse(
                  "Sorry, invalid content_type parameter!",
                  DEFAULT_MIME_TEXT, {},
                  400,
                  url,
                );
              }
            }

            // if requested as raw, return the original resp object with detected or custom MIME type
            return buildResponse(
              contentFromKeyAsArrayBuffer,
              responseContentType, {},
              200,
              url,
            );
          }
          // otherwise, return the wrapped body with the text/html mimetype
          else {
            return buildResponse(
              generatedBodyHtml,
              DEFAULT_MIME_HTML, {},
              200,
              url,
            );
          }
        } else {
          return buildResponse(
            "Sorry, invalid key!",
            DEFAULT_MIME_TEXT, {},
            404,
            url,
          );
        }
      }
    } else if (url.pathname === "/headers") {
      // helpful debug endpoint - return the headersAndFriends object, as a nicely formatted string
      requestHeadersAndFriends.url = url.toString();
      requestHeadersAndFriends.method = request.method;
      // first 20 bytes (hex-encoded) of the request
      if (requestBodyForDebug && requestBodyForDebug.byteLength > 0) {
        requestHeadersAndFriends.startBodyHex = hex(
          requestBodyForDebug.slice(0, 20),
        );
      } else {
        requestHeadersAndFriends.startBodyHex = "";
      }
      return buildResponse(
        JSON.stringify(requestHeadersAndFriends, null, 2) + "\n",
        "application/json", {},
        200,
        url,
      );
    } else if (url.pathname === "/echo") {
      // helpful debug endpoint - return the request body
      return buildResponse(
        await request.arrayBuffer(),
        "application/octet-stream", {},
        200,
        url,
      );
    } else if (url.pathname === "/raise_exception") {
      // trigger an exception
      this_method_does_not_exist();
    } else if (url.pathname === "/getpost.css") {
      // return static css content
      return buildResponse(getpost_css, "text/css", {}, 200, url);
    } else if (url.pathname === "/naclfast.min.js") {
      // return NaCl crypto library (base64 decoded)
      return buildResponse(str2ab(atob(naclfast_base64)), "application/javascript", {}, 200, url);
    } else if (url.pathname === "/argon2bundled.min.js") {
      // return Argon2 key derivation library (base64 decoded)
      return buildResponse(str2ab(atob(argon2bundled_base64)), "application/javascript", {}, 200, url);
    } else if (url.pathname === "/qrcode.min.js") {
      // return QR code generation library (base64 decoded)
      return buildResponse(str2ab(atob(qrcode_base64)), "application/javascript", {}, 200, url);
    } else if (url.pathname === "/wordlist.txt") {
      // return wordlist for password generation
      return buildResponse(wordlist_txt, "text/plain; charset=UTF-8", {}, 200, url);
    } else if (url.pathname === "/favicon.ico") {
      // returning binary requires UTF-16 JS strings to be converted to ie) UTF-8 bytes
      return buildResponse(
        str2ab(atob(favicon_gzip)),
        "image/x-icon", {
          "Content-Encoding": "gzip"
        },
        200,
        url,
      );
    } else {
      return buildResponse(
        `You probably want ${url.host}/post, not ${url.pathname}!`,
        DEFAULT_MIME_HTML, {},
        404,
        url,
      );
    }
  } catch (err) {
    // very helpful traceback functionality, such that users can report errors
    requestHeadersAndFriends.url = url.toString();
    requestHeadersAndFriends.method = request.method;
    requestHeadersAndFriends.traceback = err.stack.split("\n");
    // include the first 20 bytes, as 40 hex characters - use pre-cloned body
    if (requestBodyForDebug && requestBodyForDebug.byteLength > 0) {
      requestHeadersAndFriends.startBodyHex = hex(
        requestBodyForDebug.slice(0, 20),
      );
    } else {
      requestHeadersAndFriends.startBodyHex = "";
    }
    return new Response(JSON.stringify(requestHeadersAndFriends, null, 2), {
      status: 500,
      statusText: "caught exception in worker",
      headers: addCorsHeaders({}, url),
    });
  }
}

// Validate content type parameter
function isValidContentType(contentType) {
  // Basic validation for content type format
  // Allow common patterns like "text/html", "application/json", etc.
  const contentTypeRegex = /^[a-zA-Z][a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_.+]*(?:\s*;\s*[a-zA-Z0-9!#$&\-\^_]+=[a-zA-Z0-9!#$&\-\^_.+]*)*$/;

  if (!contentTypeRegex.test(contentType)) {
    return false;
  }

  // Additional length check for security
  if (contentType.length > 200) {
    return false;
  }

  return true;
}

// Handle CORS preflight requests
function handleCorsPreflightRequest(url) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-TTL",
    "Access-Control-Max-Age": "86400", // 24 hours
  };

  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

// Add CORS headers if cors=1 parameter is present
function addCorsHeaders(headers, url) {
  if (url && url.searchParams.has("cors")) {
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type, X-TTL";
  }
  return headers;
}

// returns a single byte from the Cloudflare worker's (cryptographically secure) RNG
function prng() {
  const buffer = new Uint8Array(8);
  crypto.getRandomValues(buffer);
  return buffer[0] / 0xff;
}

// get a random character from the set of encodings
function randomChar() {
  let rand = Math.floor(prng() * ENCODING_LEN);
  if (rand === ENCODING_LEN) {
    rand = ENCODING_LEN - 1;
  }
  return ENCODING.charAt(rand);
}

// shove time (or any integer) into "len" base32 characters
function encodeTime(now, len) {
  let mod;
  let str = "";
  for (; len > 0; len--) {
    mod = now % ENCODING_LEN;
    str = ENCODING.charAt(mod) + str;
    now = (now - mod) / ENCODING_LEN;
  }
  return str;
}

// get "len" random base32 characters
function encodeRandom(len) {
  let str = "";
  for (; len > 0; len--) {
    str = randomChar() + str;
  }
  return str;
}

// return a ULID from an optional time, comprised of TIME_LEN characters of timestamp and RANDOM_LEN characters of entropy
function ulid(seedTime) {
  // if no seedTime is provided, use the current time
  if (isNaN(seedTime)) {
    seedTime = Date.now();
  }
  return encodeTime(seedTime, TIME_LEN) + encodeRandom(RANDOM_LEN);
}

// helper to turn a string into an array buffer
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i) & 0xff;
  }
  return buf;
}

// Uint8Array -> hex string
function hex(uint8arr_or_arraybuffer) {
  const uint8arr = new Uint8Array(uint8arr_or_arraybuffer);
  if (!uint8arr) {
    return "";
  }
  let hexStr = "";
  for (let i = 0; i < uint8arr.length; i++) {
    let hex = (uint8arr[i] & 0xff).toString(16);
    hex = hex.length === 1 ? "0" + hex : hex;
    hexStr += hex;
  }
  return hexStr;
}

// content (and optional url) to wrapper html and detected type
function generateHtmlBasedOnType(content, url = "", metadata = null, customTitle = null) {
  let expiryTime = "Unknown";
  if (metadata) {
    if (metadata.permanent) {
      expiryTime = "Never (permanent)";
    } else if (metadata.expiry) {
      expiryTime = metadata.expiry.split('T')[0];
    }
  }
  if (content === null || content === undefined) {
    return ["CONTENT NOT FOUND", DEFAULT_MIME_TEXT];
  }
  const contentAsUint8Array = new Uint8Array(content);

  // Check if content is encrypted (first byte is 0x00)
  const isEncrypted = contentAsUint8Array.length > 0 && contentAsUint8Array[0] === 0;

  const contentAsString = new TextDecoder("utf-8").decode(contentAsUint8Array);
  // checks to see if characters are all plausibly utf-8 / printable
  let contentIsPrintable = true;
  for (let i = 0; i < Math.min(contentAsString.length, 1000); i++) {
    const code = contentAsString.charCodeAt(i);
    if (code > 127 || (code < 32 && code !== 9 && code !== 10 && code !== 13)) {
      contentIsPrintable = false;
      break;
    }
  }
  const header = hex(contentAsUint8Array.slice(0, 4));
  let injectorScript, type;

  // Handle encrypted content specially - don't auto-redirect
  if (isEncrypted) {
    type = "application/x-encrypted";
    injectorScript = "";
  } else {
  // matches the first four bytes of the uploaded file
  switch (header) {
    // echo -n 'ftypmp42' | xxd
    // 00000000: 6674 7970 6d70 3432                      ftypmp42
    case "00000018":
    case "0000001c":
      if (hex(contentAsUint8Array.slice(4, 12)) == "667479706d703432") {
        type = "video/mp4";
        break;
      }
    case "25504446":
      type = "application/pdf";
      break;
    case "89504e47":
      type = "image/png";
      break;
    case "47494638":
      type = "image/gif";
      break;
    case "49443304":
      type = "audio/mp3";
      break;
    case "504b0304":
      type = "application/zip";
      break;
    case "ffd8ffe0":
    case "ffd8ffe1":
    case "ffd8ffe2":
    case "ffd8ffe3":
    case "ffd8ffe8":
      type = "image/jpeg";
      break;
    default:
      if (contentIsPrintable === true) {
        type = DEFAULT_MIME_TEXT;
      } else {
        type = "application/octet-stream";
      }
      break;
  }
  } // end encrypted check

  switch (type) {
    case "image/png":
    case "image/gif":
    case "image/jpeg":
      break;
    case "application/x-encrypted":
      // Encrypted content - let the HTML wrapper handle decryption
      injectorScript = "";
      break;
    case "audio/mp3":
    case "video/mp4":
    case "application/pdf":
    case "application/zip":
    case "application/octet-stream":
      injectorScript = "window.location.assign(window.location.href+'&raw')";
      break;
    case DEFAULT_MIME_TEXT:
    default:
      injectorScript = "";
      break;
  }
  const TITLE = customTitle || `GetPost: ${type}`;
  let contentAsHtmlFromMarked = "";
  let imageUrl = "";
  let description = "";
  // future use
  const encodedPayload = "";
  // strip non-url characters from description
  if (type === DEFAULT_MIME_TEXT) {
    contentAsHtmlFromMarked = marked(new TextDecoder("utf-8").decode(content));
    // use the first 140 characters that aren't special, as the description!
    description = new TextDecoder("utf-8")
      .decode(new Uint8Array(content.slice(0, 140)))
      .replace(/[^0-9a-z\\\ \.\:\?]/gi, "");
  } else {
    description = "GetPost: " + type;
  }
  if (type.startsWith("image/")) {
    imageUrl = url.toString() + "&raw";
    injectorScript = "";
  }
  const contentAsWrappedHtml = `<html>
<head>
<!-- Primary Meta Tags -->
<title>GetPost: Content</title>
<meta name="title" content="${TITLE}">
<meta name="description" content="${description}">

<!-- Open Graph / Facebook -->
<meta property="og:url" content="${url.toString()}">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url.toString()}">
<meta property="twitter:title" content="${TITLE}">
<meta property="twitter:description" content="${description}">
<meta property="twitter:image" content="${imageUrl}">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">
<style>
.decrypt-interface {
    max-width: 600px;
    margin: 40px auto;
    padding: 30px;
    background: #2a2828;
    border: 2px solid #ed8936;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
.decrypt-interface h2 {
    margin-top: 0;
    color: #f5f3f3;
}
.decrypt-interface p {
    color: #d1d0d0;
}
.decrypt-field {
    margin: 20px 0;
    position: relative;
}
.decrypt-field label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #f5f3f3;
}
.decrypt-field input {
    width: 100%;
    padding: 12px 40px 12px 12px;
    border: 2px solid #555;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    background: #1a1818;
    color: #f5f3f3;
}
.decrypt-field input:focus {
    outline: none;
    border-color: #ed8936;
}
.password-toggle {
    position: absolute;
    right: 10px;
    top: 38px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    color: #999;
    user-select: none;
}
.password-toggle:hover {
    color: #f5f3f3;
}
.decrypt-button {
    width: 100%;
    padding: 14px;
    background: #ed8936;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}
.decrypt-button:hover {
    background: #dd6b20;
}
.decrypt-button:disabled {
    background: #555;
    cursor: not-allowed;
}
.decrypt-status {
    margin-top: 15px;
    padding: 12px;
    border-radius: 6px;
    display: none;
}
.decrypt-status.error {
    background: #3a2020;
    border: 1px solid #ef4444;
    color: #fca5a5;
}
.decrypt-status.success {
    background: #1f3a2f;
    border: 1px solid #10b981;
    color: #6ee7b7;
}
.decrypt-status.info {
    background: #1e2a3a;
    border: 1px solid #3b82f6;
    color: #93c5fd;
}
.encrypted-badge {
    display: inline-block;
    background: #fbbf24;
    color: #1a1818;
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    margin-left: 10px;
}
.hidden {
    display: none !important;
}
#decryptedContent {
    margin-top: 20px;
}
.qr-section {
    margin: 30px auto;
    padding: 20px;
    max-width: 400px;
    background: #2a2828;
    border: 2px solid #48bb78;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    text-align: center;
}
#qrcode {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 15px;
    background: white;
    border-radius: 8px;
}
</style>
</head>

<body>
<link rel="stylesheet" href="getpost.css">
  <div id="encryptedNotice" class="hidden">
      <div class="decrypt-interface">
          <h2>🔒 Encrypted Content <span class="encrypted-badge">E2E ENCRYPTED</span></h2>
          <p>This content is end-to-end encrypted. Enter the password to decrypt and view.</p>
          <div class="decrypt-field">
              <label for="decryptPassword">Password:</label>
              <input type="password" id="decryptPassword" placeholder="Enter decryption password" autocomplete="off">
              <button type="button" class="password-toggle" onclick="toggleDecryptPasswordVisibility()">👁️</button>
          </div>
          <button class="decrypt-button" id="decryptButton" onclick="decryptContent()">🔓 Decrypt Content</button>
          <div class="decrypt-status" id="decryptStatus"></div>
      </div>
  </div>

  <div id="content">
      <img id="imgContent" src="${imageUrl}"></img>
  </div>
  <div id="markdownContent">${contentAsHtmlFromMarked}</div>
  <div id="decryptedContent" class="hidden"></div>

  <div class="qr-section hidden" id="qrSection">
      <h3>📱 Share with QR Code</h3>
      <div id="qrcode"></div>
      <p style="font-size: 13px; color: #64748b;">Scan to share this encrypted link</p>
  </div>

  <script src="/naclfast.min.js"></script>
  <script src="/argon2bundled.min.js"></script>
  <script src="/qrcode.min.js"></script>
  <script>
      var payloadType = "${type}";
      var encodedPayload = "${encodedPayload}";
      var isEncrypted = false;
      var encryptedData = null;
      var originalMimeType = null;
      var originalFilename = null;
      const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

      async function checkIfEncrypted() {
          try {
              const rawUrl = window.location.href.split('#')[0] + '&raw';
              const response = await fetch(rawUrl, {
                  mode: 'cors',
                  credentials: 'omit',
                  referrerPolicy: 'no-referrer',
                  cache: 'no-cache'
              });

              if (!response.ok) {
                  return false;
              }

              const arrayBuffer = await response.arrayBuffer();
              const data = new Uint8Array(arrayBuffer);

              if (data.length > 0 && data[0] === 0) {
                  isEncrypted = true;
                  encryptedData = data;
                  showDecryptInterface();

                  const hash = window.location.hash;
                  if (hash && hash.length > 1) {
                      const fragment = hash.substring(1);
                      const parts = fragment.split(';;;');
                      if (parts.length >= 2 && parts[1]) {
                          // parts[0] is empty, parts[1] is password, parts[2] is MIME type, parts[3] is filename
                          document.getElementById('decryptPassword').value = decodeURIComponent(parts[1]);
                          if (parts.length >= 3 && parts[2]) {
                              originalMimeType = decodeURIComponent(parts[2]);
                          }
                          if (parts.length >= 4 && parts[3]) {
                              originalFilename = decodeURIComponent(parts[3]);
                          }
                          showStatus('Password loaded from URL. Decrypting...', 'info');
                          setTimeout(() => decryptContent(), 500);
                          history.replaceState(null, null, window.location.pathname + window.location.search);
                      }
                  }

                  generateQRCode();
                  return true;
              }

              return false;
          } catch (error) {
              console.error('Error checking encryption:', error);
              return false;
          }
      }

      function showDecryptInterface() {
          document.getElementById('content').classList.add('hidden');
          document.getElementById('markdownContent').classList.add('hidden');
          document.getElementById('encryptedNotice').classList.remove('hidden');
      }

      function showStatus(message, type) {
          const status = document.getElementById('decryptStatus');
          status.textContent = message;
          status.className = 'decrypt-status ' + type;
          status.style.display = 'block';
      }

      async function deriveKey(password, salt) {
          const passwordBytes = new TextEncoder().encode(password);
          const opslimit = 3;
          const memlimit = 262144;

          const result = await argon2.hash({
              pass: passwordBytes,
              salt: salt,
              time: opslimit,
              mem: memlimit,
              hashLen: 32,
              parallelism: 1,
              type: argon2.ArgonType.Argon2i
          });

          return new Uint8Array(result.hash);
      }

      async function decryptContent() {
          const password = document.getElementById('decryptPassword').value;

          if (!password) {
              showStatus('Please enter a password', 'error');
              return;
          }

          if (!encryptedData) {
              showStatus('No encrypted data available', 'error');
              return;
          }

          try {
              document.getElementById('decryptButton').disabled = true;
              showStatus('Decrypting...', 'info');

              if (encryptedData[0] !== 0) {
                  throw new Error('Invalid encrypted data format');
              }

              const salt = encryptedData.slice(1, 17);
              const nonceAndCiphertext = encryptedData.slice(17);
              const nonceSize = nacl.secretbox.nonceLength;

              if (nonceAndCiphertext.length < nonceSize) {
                  throw new Error('Invalid encrypted data');
              }

              const nonce = nonceAndCiphertext.slice(0, nonceSize);
              const ciphertext = nonceAndCiphertext.slice(nonceSize);

              const key = await deriveKey(password, salt);
              const decrypted = nacl.secretbox.open(ciphertext, nonce, key);

              if (!decrypted) {
                  throw new Error('Incorrect password or corrupted data');
              }

              showStatus('✅ Successfully decrypted!', 'success');

              displayDecryptedContent(decrypted);

              setTimeout(() => {
                  document.getElementById('encryptedNotice').classList.add('hidden');
              }, 1000);

          } catch (error) {
              console.error('Decryption error:', error);
              showStatus('❌ Decryption failed: ' + error.message, 'error');
              document.getElementById('decryptButton').disabled = false;
          }
      }

      function displayDecryptedContent(decryptedData) {
          const decryptedDiv = document.getElementById('decryptedContent');
          decryptedDiv.classList.remove('hidden');

          const dataString = new TextDecoder('utf-8').decode(decryptedData);
          // Check if content is printable ASCII (avoid regex issues with template literals)
          let isPrintable = true;
          for (let i = 0; i < Math.min(dataString.length, 1000); i++) {
              const code = dataString.charCodeAt(i);
              if (code > 127 || (code < 32 && code !== 9 && code !== 10 && code !== 13)) {
                  isPrintable = false;
                  break;
              }
          }

          if (isPrintable) {
              try {
                  if (typeof marked !== 'undefined') {
                      decryptedDiv.innerHTML = marked(dataString);
                  } else {
                      decryptedDiv.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word;">' +
                          dataString.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
                  }
              } catch (e) {
                  decryptedDiv.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word;">' +
                      dataString.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
              }
          } else {
              // Binary content - create blob with original MIME type if available
              const mimeType = originalMimeType || 'application/octet-stream';
              const blob = new Blob([decryptedData], { type: mimeType });
              const url = URL.createObjectURL(blob);

              // Determine if we should try to display inline
              const canDisplayInline = mimeType.startsWith('image/') ||
                                       mimeType.startsWith('video/') ||
                                       mimeType.startsWith('audio/') ||
                                       mimeType === 'application/pdf';

              if (canDisplayInline) {
                  // Try to display inline
                  if (mimeType.startsWith('image/')) {
                      decryptedDiv.innerHTML = '<img src="' + url + '" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 20px;">';
                  } else if (mimeType.startsWith('video/')) {
                      decryptedDiv.innerHTML = '<video controls style="max-width: 100%; margin-top: 20px;"><source src="' + url + '" type="' + mimeType + '"></video>';
                  } else if (mimeType.startsWith('audio/')) {
                      decryptedDiv.innerHTML = '<audio controls style="width: 100%; margin-top: 20px;"><source src="' + url + '" type="' + mimeType + '"></audio>';
                  } else if (mimeType === 'application/pdf') {
                      decryptedDiv.innerHTML = '<iframe src="' + url + '" style="width: 100%; height: 600px; border: none; margin-top: 20px;"></iframe>';
                  }
              } else {
                  decryptedDiv.innerHTML = '<p>Binary content decrypted successfully.</p>';
              }

              // Always add download button
              const downloadBtn = document.createElement('a');
              downloadBtn.href = url;
              downloadBtn.download = originalFilename || 'decrypted-file';
              downloadBtn.textContent = '📥 Download ' + (originalFilename || 'Decrypted File');
              downloadBtn.style.cssText = 'display: inline-block; padding: 12px 24px; background: #10b981; color: white; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 20px;';
              decryptedDiv.appendChild(downloadBtn);
          }
      }

      function generateQRCode() {
          // Check if we have an encrypted URL with password in fragment
          const hash = window.location.hash;
          if (!hash || hash.indexOf(';;;') === -1) {
              return;
          }

          const qrSection = document.getElementById('qrSection');
          const qrcodeDiv = document.getElementById('qrcode');

          if (!qrSection || !qrcodeDiv) return;

          try {
              qrcodeDiv.innerHTML = '';
              // Generate QR code with full URL including fragment
              const fullUrl = window.location.href;
              new QRCode(qrcodeDiv, {
                  text: fullUrl,
                  width: 200,
                  height: 200,
                  colorDark: "#000000",
                  colorLight: "#ffffff",
                  correctLevel: QRCode.CorrectLevel.M
              });
              qrSection.classList.remove('hidden');
          } catch (e) {
              console.error('QR code generation failed:', e);
          }
      }

      function toggleDecryptPasswordVisibility() {
          const input = document.getElementById('decryptPassword');
          const button = document.querySelector('.decrypt-field .password-toggle');
          if (input.type === 'password') {
              input.type = 'text';
              button.textContent = '🙈';
          } else {
              input.type = 'password';
              button.textContent = '👁️';
          }
      }

      document.getElementById('decryptPassword')?.addEventListener('keypress', function(e) {
          if (e.key === 'Enter') {
              decryptContent();
          }
      });

      window.addEventListener('load', function() {
          checkIfEncrypted();
      });

      ${injectorScript};
  </script>
</body>

<hr>
<blockquote>
  <p><strong>Powered by <a href="/">GetPost</a></strong> |
     <a href="https://github.com/getpost-loves-you/getpost">📄 Source</a> |
     <a href="https://github.com/getpost-loves-you/getpost/blob/main/SETUP.md">🚀 Deploy Your Own</a> |
     Expires: ${expiryTime}</p>
</blockquote>
</html>
`; // eslint-disable-line
  return [contentAsWrappedHtml, type];
}

function buildResponse(
  blob,
  type = DEFAULT_MIME_HTML,
  headers = {},
  statuscode = 200,
  url = null
) {
  const headersObj = Object.assign(headers, {
    "content-type": type
  });

  // Add CORS headers if cors parameter is present
  if (url) {
    addCorsHeaders(headersObj, url);
  }

  if (statuscode !== 200) {
    return new Response(blob, {
      status: statuscode,
      statusText: blob,
      headers: headersObj,
    });
  }
  return new Response(blob, {
    status: statuscode,
    headers: headersObj
  });
}