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

        // if no key parameter provided, return the upload prompt so user can upload
        if (!url.searchParams.has("key")) {
          const upload = `<html><head>
<link rel="stylesheet" href="/getpost.css">
<title>GetPost: Upload</title>
<meta name="title" content="GetPost: Libre linking for poems and memes">
<meta name="description" content="Run your own instance for free on any domain. No accounts, no tracking, globally distributed.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url.toString()}">
<meta property="twitter:title" content="GetPost: Libre linking for poems and memes">
<meta property="twitter:description" content="Run your own instance for free on any domain. No accounts, no tracking, globally distributed.">
</head>
<body>

<h1>GetPost</h1>
<h2>Libre linking for poems and memes</h2>
<h3>🚀 Run your own instance for free on any domain</h3>

<p>Share text, images, and files up to 10MB. No accounts, no tracking, globally distributed.</p>

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

<h2>Quick Start</h2>

<h3>Web Upload</h3>
<p>Drag and drop files above, or click to browse. Markdown files are rendered automatically.</p>

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
<li><strong>📝 Text & Markdown</strong> - Automatic rendering of markdown</li>
<li><strong>🖼️ Images</strong> - PNG, JPEG, GIF with instant preview</li>
<li><strong>📄 Documents</strong> - PDFs, videos, any file type up to 10MB</li>
<li><strong>🔗 Shareable Links</strong> - Append <code>&raw</code> for direct file access</li>
<li><strong>⏰ Auto-Expiry</strong> - Default 1 year, configurable with X-TTL header</li>
<li><strong>🗑️ Delete Control</strong> - Every upload gets a unique delete key</li>
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
<p><strong>Security:</strong> ULID-based access control, separate delete tokens, no central database</p>
<p><strong>Performance:</strong> Sub-100ms response times worldwide, automatic CDN caching</p>
<p><strong>Privacy:</strong> No tracking, no ads, no accounts required</p>

<blockquote>
<p><strong>Open Source:</strong> CC0; No Rights Reserved. Fork it, hack it, improve it, deploy it everywhere.</p>
</blockquote>

<p><a href="https://github.com/getpost-loves-you/getpost">📄 Source Code</a> | <a href="https://github.com/getpost-loves-you/getpost/blob/main/SETUP.md">🚀 Deploy Guide</a> | <a href="https://github.com/getpost-loves-you/getpost/issues">🐛 Report Issues</a></p>

<script>
var file;
var file_buffer;
const dropArea = document.getElementById('notpacman');

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

function upload_file_directly() {
    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/post", true);
    oReq.onload = function (oEvent) {
        console.log(oReq.response);
        document.body.innerHTML = oReq.response
    };
    oReq.overrideMimeType(document.getElementById("upfiletype").innerHTML);
    var blob = new Blob([file_buffer], {type: 'application/x-www-form-urlencoded'});
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
            metadata
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
function generateHtmlBasedOnType(content, url = "", metadata = null) {
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
  const contentAsString = new TextDecoder("utf-8").decode(contentAsUint8Array);
  // checks to see if characters are all plausibly utf-8 / printable
  const contentIsPrintable = /^[\x00-\x7F]*$/m.test(contentAsString);
  const header = hex(contentAsUint8Array.slice(0, 4));
  let injectorScript, type;
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
  switch (type) {
    case "image/png":
    case "image/gif":
    case "image/jpeg":
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
  const TITLE = `GetPost: ${type}`;
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
</head>

<body>
<link rel="stylesheet" href="getpost.css">
  <div id="content">
      <img id="imgContent" src="${imageUrl}"></img>
  </div>
  <div id="markdownContent">${contentAsHtmlFromMarked}</div>
  <script>
      var payloadType = "${type}";
      </script>
  <script>
      var encodedPayload = "${encodedPayload}";
      </script>
  <script>
  const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
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