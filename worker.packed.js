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
// This keeps the worker.js script simple, without requiring much build tooling!

const naclfast_base64 = `IWZ1bmN0aW9uKGkpeyJ1c2Ugc3RyaWN0Ijt2YXIgdj1mdW5jdGlvbihyKXt2YXIgdCxuPW5ldyBGbG9hdDY0QXJyYXkoMTYpO2lmKHIpZm9yKHQ9MDt0PHIubGVuZ3RoO3QrKyluW3RdPXJbdF07cmV0dXJuIG59LGg9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoIm5vIFBSTkciKX0sbz1uZXcgVWludDhBcnJheSgxNiksbj1uZXcgVWludDhBcnJheSgzMik7blswXT05O3ZhciBzPXYoKSx1PXYoWzFdKSxwPXYoWzU2MTI5LDFdKSxjPXYoWzMwODgzLDQ5NTMsMTk5MTQsMzAxODcsNTU0NjcsMTY3MDUsMjYzNywxMTIsNTk1NDQsMzA1ODUsMTY1MDUsMzYwMzksNjUxMzksMTExMTksMjc4ODYsMjA5OTVdKSx5PXYoWzYxNzg1LDk5MDYsMzk4MjgsNjAzNzQsNDUzOTgsMzM0MTEsNTI3NCwyMjQsNTM1NTIsNjExNzEsMzMwMTAsNjU0Miw2NDc0MywyMjIzOSw1NTc3Miw5MjIyXSksZT12KFs1NDU1NCwzNjY0NSwxMTYxNiw1MTU0Miw0MjkzMCwzODE4MSw1MTA0MCwyNjkyNCw1NjQxMiw2NDk4Miw1NzkwNSw0OTMxNiwyMTUwMiw1MjU5MCwxNDAzNSw4NTUzXSksYT12KFsyNjIwMCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNCwyNjIxNF0pLGw9dihbNDExMzYsMTg5NTgsNjk1MSw1MDQxNCw1ODQ4OCw0NDMzNSw2MTUwLDEyMDk5LDU1MjA3LDE1ODY3LDE1MywxMTA4NSw1NzA5OSwyMDQxNyw5MzQ0LDExMTM5XSk7ZnVuY3Rpb24gZihyLHQsbixlKXtyW3RdPW4+PjI0JjI1NSxyW3QrMV09bj4+MTYmMjU1LHJbdCsyXT1uPj44JjI1NSxyW3QrM109MjU1Jm4sclt0KzRdPWU+PjI0JjI1NSxyW3QrNV09ZT4+MTYmMjU1LHJbdCs2XT1lPj44JjI1NSxyW3QrN109MjU1JmV9ZnVuY3Rpb24gdyhyLHQsbixlLG8pe3ZhciBpLGg9MDtmb3IoaT0wO2k8bztpKyspaHw9clt0K2ldXm5bZStpXTtyZXR1cm4oMSZoLTE+Pj44KS0xfWZ1bmN0aW9uIGIocix0LG4sZSl7cmV0dXJuIHcocix0LG4sZSwxNil9ZnVuY3Rpb24gZyhyLHQsbixlKXtyZXR1cm4gdyhyLHQsbixlLDMyKX1mdW5jdGlvbiBBKHIsdCxuLGUpeyFmdW5jdGlvbihyLHQsbixlKXtmb3IodmFyIG8saT0yNTUmZVswXXwoMjU1JmVbMV0pPDw4fCgyNTUmZVsyXSk8PDE2fCgyNTUmZVszXSk8PDI0LGg9MjU1Jm5bMF18KDI1NSZuWzFdKTw8OHwoMjU1Jm5bMl0pPDwxNnwoMjU1Jm5bM10pPDwyNCxhPTI1NSZuWzRdfCgyNTUmbls1XSk8PDh8KDI1NSZuWzZdKTw8MTZ8KDI1NSZuWzddKTw8MjQsZj0yNTUmbls4XXwoMjU1Jm5bOV0pPDw4fCgyNTUmblsxMF0pPDwxNnwoMjU1Jm5bMTFdKTw8MjQscz0yNTUmblsxMl18KDI1NSZuWzEzXSk8PDh8KDI1NSZuWzE0XSk8PDE2fCgyNTUmblsxNV0pPDwyNCx1PTI1NSZlWzRdfCgyNTUmZVs1XSk8PDh8KDI1NSZlWzZdKTw8MTZ8KDI1NSZlWzddKTw8MjQsYz0yNTUmdFswXXwoMjU1JnRbMV0pPDw4fCgyNTUmdFsyXSk8PDE2fCgyNTUmdFszXSk8PDI0LHk9MjU1JnRbNF18KDI1NSZ0WzVdKTw8OHwoMjU1JnRbNl0pPDwxNnwoMjU1JnRbN10pPDwyNCxsPTI1NSZ0WzhdfCgyNTUmdFs5XSk8PDh8KDI1NSZ0WzEwXSk8PDE2fCgyNTUmdFsxMV0pPDwyNCx3PTI1NSZ0WzEyXXwoMjU1JnRbMTNdKTw8OHwoMjU1JnRbMTRdKTw8MTZ8KDI1NSZ0WzE1XSk8PDI0LHY9MjU1JmVbOF18KDI1NSZlWzldKTw8OHwoMjU1JmVbMTBdKTw8MTZ8KDI1NSZlWzExXSk8PDI0LHA9MjU1Jm5bMTZdfCgyNTUmblsxN10pPDw4fCgyNTUmblsxOF0pPDwxNnwoMjU1Jm5bMTldKTw8MjQsYj0yNTUmblsyMF18KDI1NSZuWzIxXSk8PDh8KDI1NSZuWzIyXSk8PDE2fCgyNTUmblsyM10pPDwyNCxnPTI1NSZuWzI0XXwoMjU1Jm5bMjVdKTw8OHwoMjU1Jm5bMjZdKTw8MTZ8KDI1NSZuWzI3XSk8PDI0LEE9MjU1Jm5bMjhdfCgyNTUmblsyOV0pPDw4fCgyNTUmblszMF0pPDwxNnwoMjU1Jm5bMzFdKTw8MjQsXz0yNTUmZVsxMl18KDI1NSZlWzEzXSk8PDh8KDI1NSZlWzE0XSk8PDE2fCgyNTUmZVsxNV0pPDwyNCxVPWksZD1oLEU9YSx4PWYsTT1zLG09dSxCPWMsUz15LGs9bCxLPXcsWT12LEw9cCxUPWIsej1nLFI9QSxQPV8sTj0wO048MjA7Tis9MilVXj0obz0oVF49KG89KGtePShvPShNXj0obz1VK1R8MCk8PDd8bz4+PjI1KStVfDApPDw5fG8+Pj4yMykrTXwwKTw8MTN8bz4+PjE5KStrfDApPDwxOHxvPj4+MTQsbV49KG89KGRePShvPSh6Xj0obz0oS149KG89bStkfDApPDw3fG8+Pj4yNSkrbXwwKTw8OXxvPj4+MjMpK0t8MCk8PDEzfG8+Pj4xOSkrenwwKTw8MTh8bz4+PjE0LFlePShvPShCXj0obz0oRV49KG89KFJePShvPVkrQnwwKTw8N3xvPj4+MjUpK1l8MCk8PDl8bz4+PjIzKStSfDApPDwxM3xvPj4+MTkpK0V8MCk8PDE4fG8+Pj4xNCxQXj0obz0oTF49KG89KFNePShvPSh4Xj0obz1QK0x8MCk8PDd8bz4+PjI1KStQfDApPDw5fG8+Pj4yMykreHwwKTw8MTN8bz4+PjE5KStTfDApPDwxOHxvPj4+MTQsVV49KG89KHhePShvPShFXj0obz0oZF49KG89VSt4fDApPDw3fG8+Pj4yNSkrVXwwKTw8OXxvPj4+MjMpK2R8MCk8PDEzfG8+Pj4xOSkrRXwwKTw8MTh8bz4+PjE0LG1ePShvPShNXj0obz0oU149KG89KEJePShvPW0rTXwwKTw8N3xvPj4+MjUpK218MCk8PDl8bz4+PjIzKStCfDApPDwxM3xvPj4+MTkpK1N8MCk8PDE4fG8+Pj4xNCxZXj0obz0oS149KG89KGtePShvPShMXj0obz1ZK0t8MCk8PDd8bz4+PjI1KStZfDApPDw5fG8+Pj4yMykrTHwwKTw8MTN8bz4+PjE5KStrfDApPDwxOHxvPj4+MTQsUF49KG89KFJePShvPSh6Xj0obz0oVF49KG89UCtSfDApPDw3fG8+Pj4yNSkrUHwwKTw8OXxvPj4+MjMpK1R8MCk8PDEzfG8+Pj4xOSkrenwwKTw8MTh8bz4+PjE0O1U9VStpfDAsZD1kK2h8MCxFPUUrYXwwLHg9eCtmfDAsTT1NK3N8MCxtPW0rdXwwLEI9QitjfDAsUz1TK3l8MCxrPWsrbHwwLEs9Syt3fDAsWT1ZK3Z8MCxMPUwrcHwwLFQ9VCtifDAsej16K2d8MCxSPVIrQXwwLFA9UCtffDAsclswXT1VPj4+MCYyNTUsclsxXT1VPj4+OCYyNTUsclsyXT1VPj4+MTYmMjU1LHJbM109VT4+PjI0JjI1NSxyWzRdPWQ+Pj4wJjI1NSxyWzVdPWQ+Pj44JjI1NSxyWzZdPWQ+Pj4xNiYyNTUscls3XT1kPj4+MjQmMjU1LHJbOF09RT4+PjAmMjU1LHJbOV09RT4+PjgmMjU1LHJbMTBdPUU+Pj4xNiYyNTUsclsxMV09RT4+PjI0JjI1NSxyWzEyXT14Pj4+MCYyNTUsclsxM109eD4+PjgmMjU1LHJbMTRdPXg+Pj4xNiYyNTUsclsxNV09eD4+PjI0JjI1NSxyWzE2XT1NPj4+MCYyNTUsclsxN109TT4+PjgmMjU1LHJbMThdPU0+Pj4xNiYyNTUsclsxOV09TT4+PjI0JjI1NSxyWzIwXT1tPj4+MCYyNTUsclsyMV09bT4+PjgmMjU1LHJbMjJdPW0+Pj4xNiYyNTUsclsyM109bT4+PjI0JjI1NSxyWzI0XT1CPj4+MCYyNTUsclsyNV09Qj4+PjgmMjU1LHJbMjZdPUI+Pj4xNiYyNTUsclsyN109Qj4+PjI0JjI1NSxyWzI4XT1TPj4+MCYyNTUsclsyOV09Uz4+PjgmMjU1LHJbMzBdPVM+Pj4xNiYyNTUsclszMV09Uz4+PjI0JjI1NSxyWzMyXT1rPj4+MCYyNTUsclszM109az4+PjgmMjU1LHJbMzRdPWs+Pj4xNiYyNTUsclszNV09az4+PjI0JjI1NSxyWzM2XT1LPj4+MCYyNTUsclszN109Sz4+PjgmMjU1LHJbMzhdPUs+Pj4xNiYyNTUsclszOV09Sz4+PjI0JjI1NSxyWzQwXT1ZPj4+MCYyNTUscls0MV09WT4+PjgmMjU1LHJbNDJdPVk+Pj4xNiYyNTUscls0M109WT4+PjI0JjI1NSxyWzQ0XT1MPj4+MCYyNTUscls0NV09TD4+PjgmMjU1LHJbNDZdPUw+Pj4xNiYyNTUscls0N109TD4+PjI0JjI1NSxyWzQ4XT1UPj4+MCYyNTUscls0OV09VD4+PjgmMjU1LHJbNTBdPVQ+Pj4xNiYyNTUscls1MV09VD4+PjI0JjI1NSxyWzUyXT16Pj4+MCYyNTUscls1M109ej4+PjgmMjU1LHJbNTRdPXo+Pj4xNiYyNTUscls1NV09ej4+PjI0JjI1NSxyWzU2XT1SPj4+MCYyNTUscls1N109Uj4+PjgmMjU1LHJbNThdPVI+Pj4xNiYyNTUscls1OV09Uj4+PjI0JjI1NSxyWzYwXT1QPj4+MCYyNTUscls2MV09UD4+PjgmMjU1LHJbNjJdPVA+Pj4xNiYyNTUscls2M109UD4+PjI0JjI1NX0ocix0LG4sZSl9ZnVuY3Rpb24gXyhyLHQsbixlKXshZnVuY3Rpb24ocix0LG4sZSl7Zm9yKHZhciBvLGk9MjU1JmVbMF18KDI1NSZlWzFdKTw8OHwoMjU1JmVbMl0pPDwxNnwoMjU1JmVbM10pPDwyNCxoPTI1NSZuWzBdfCgyNTUmblsxXSk8PDh8KDI1NSZuWzJdKTw8MTZ8KDI1NSZuWzNdKTw8MjQsYT0yNTUmbls0XXwoMjU1Jm5bNV0pPDw4fCgyNTUmbls2XSk8PDE2fCgyNTUmbls3XSk8PDI0LGY9MjU1Jm5bOF18KDI1NSZuWzldKTw8OHwoMjU1Jm5bMTBdKTw8MTZ8KDI1NSZuWzExXSk8PDI0LHM9MjU1Jm5bMTJdfCgyNTUmblsxM10pPDw4fCgyNTUmblsxNF0pPDwxNnwoMjU1Jm5bMTVdKTw8MjQsdT0yNTUmZVs0XXwoMjU1JmVbNV0pPDw4fCgyNTUmZVs2XSk8PDE2fCgyNTUmZVs3XSk8PDI0LGM9MjU1JnRbMF18KDI1NSZ0WzFdKTw8OHwoMjU1JnRbMl0pPDwxNnwoMjU1JnRbM10pPDwyNCx5PTI1NSZ0WzRdfCgyNTUmdFs1XSk8PDh8KDI1NSZ0WzZdKTw8MTZ8KDI1NSZ0WzddKTw8MjQsbD0yNTUmdFs4XXwoMjU1JnRbOV0pPDw4fCgyNTUmdFsxMF0pPDwxNnwoMjU1JnRbMTFdKTw8MjQsdz0yNTUmdFsxMl18KDI1NSZ0WzEzXSk8PDh8KDI1NSZ0WzE0XSk8PDE2fCgyNTUmdFsxNV0pPDwyNCx2PTI1NSZlWzhdfCgyNTUmZVs5XSk8PDh8KDI1NSZlWzEwXSk8PDE2fCgyNTUmZVsxMV0pPDwyNCxwPTI1NSZuWzE2XXwoMjU1Jm5bMTddKTw8OHwoMjU1Jm5bMThdKTw8MTZ8KDI1NSZuWzE5XSk8PDI0LGI9MjU1Jm5bMjBdfCgyNTUmblsyMV0pPDw4fCgyNTUmblsyMl0pPDwxNnwoMjU1Jm5bMjNdKTw8MjQsZz0yNTUmblsyNF18KDI1NSZuWzI1XSk8PDh8KDI1NSZuWzI2XSk8PDE2fCgyNTUmblsyN10pPDwyNCxBPTI1NSZuWzI4XXwoMjU1Jm5bMjldKTw8OHwoMjU1Jm5bMzBdKTw8MTZ8KDI1NSZuWzMxXSk8PDI0LF89MjU1JmVbMTJdfCgyNTUmZVsxM10pPDw4fCgyNTUmZVsxNF0pPDwxNnwoMjU1JmVbMTVdKTw8MjQsVT0wO1U8MjA7VSs9MilpXj0obz0oYl49KG89KGxePShvPShzXj0obz1pK2J8MCk8PDd8bz4+PjI1KStpfDApPDw5fG8+Pj4yMykrc3wwKTw8MTN8bz4+PjE5KStsfDApPDwxOHxvPj4+MTQsdV49KG89KGhePShvPShnXj0obz0od149KG89dStofDApPDw3fG8+Pj4yNSkrdXwwKTw8OXxvPj4+MjMpK3d8MCk8PDEzfG8+Pj4xOSkrZ3wwKTw8MTh8bz4+PjE0LHZePShvPShjXj0obz0oYV49KG89KEFePShvPXYrY3wwKTw8N3xvPj4+MjUpK3Z8MCk8PDl8bz4+PjIzKStBfDApPDwxM3xvPj4+MTkpK2F8MCk8PDE4fG8+Pj4xNCxfXj0obz0ocF49KG89KHlePShvPShmXj0obz1fK3B8MCk8PDd8bz4+PjI1KStffDApPDw5fG8+Pj4yMykrZnwwKTw8MTN8bz4+PjE5KSt5fDApPDwxOHxvPj4+MTQsaV49KG89KGZePShvPShhXj0obz0oaF49KG89aStmfDApPDw3fG8+Pj4yNSkraXwwKTw8OXxvPj4+MjMpK2h8MCk8PDEzfG8+Pj4xOSkrYXwwKTw8MTh8bz4+PjE0LHVePShvPShzXj0obz0oeV49KG89KGNePShvPXUrc3wwKTw8N3xvPj4+MjUpK3V8MCk8PDl8bz4+PjIzKStjfDApPDwxM3xvPj4+MTkpK3l8MCk8PDE4fG8+Pj4xNCx2Xj0obz0od149KG89KGxePShvPShwXj0obz12K3d8MCk8PDd8bz4+PjI1KSt2fDApPDw5fG8+Pj4yMykrcHwwKTw8MTN8bz4+PjE5KStsfDApPDwxOHxvPj4+MTQsX149KG89KEFePShvPShnXj0obz0oYl49KG89XytBfDApPDw3fG8+Pj4yNSkrX3wwKTw8OXxvPj4+MjMpK2J8MCk8PDEzfG8+Pj4xOSkrZ3wwKTw8MTh8bz4+PjE0O3JbMF09aT4+PjAmMjU1LHJbMV09aT4+PjgmMjU1LHJbMl09aT4+PjE2JjI1NSxyWzNdPWk+Pj4yNCYyNTUscls0XT11Pj4+MCYyNTUscls1XT11Pj4+OCYyNTUscls2XT11Pj4+MTYmMjU1LHJbN109dT4+PjI0JjI1NSxyWzhdPXY+Pj4wJjI1NSxyWzldPXY+Pj44JjI1NSxyWzEwXT12Pj4+MTYmMjU1LHJbMTFdPXY+Pj4yNCYyNTUsclsxMl09Xz4+PjAmMjU1LHJbMTNdPV8+Pj44JjI1NSxyWzE0XT1fPj4+MTYmMjU1LHJbMTVdPV8+Pj4yNCYyNTUsclsxNl09Yz4+PjAmMjU1LHJbMTddPWM+Pj44JjI1NSxyWzE4XT1jPj4+MTYmMjU1LHJbMTldPWM+Pj4yNCYyNTUsclsyMF09eT4+PjAmMjU1LHJbMjFdPXk+Pj44JjI1NSxyWzIyXT15Pj4+MTYmMjU1LHJbMjNdPXk+Pj4yNCYyNTUsclsyNF09bD4+PjAmMjU1LHJbMjVdPWw+Pj44JjI1NSxyWzI2XT1sPj4+MTYmMjU1LHJbMjddPWw+Pj4yNCYyNTUsclsyOF09dz4+PjAmMjU1LHJbMjldPXc+Pj44JjI1NSxyWzMwXT13Pj4+MTYmMjU1LHJbMzFdPXc+Pj4yNCYyNTV9KHIsdCxuLGUpfXZhciBVPW5ldyBVaW50OEFycmF5KFsxMDEsMTIwLDExMiw5NywxMTAsMTAwLDMyLDUxLDUwLDQ1LDk4LDEyMSwxMTYsMTAxLDMyLDEwN10pO2Z1bmN0aW9uIGQocix0LG4sZSxvLGksaCl7dmFyIGEsZixzPW5ldyBVaW50OEFycmF5KDE2KSx1PW5ldyBVaW50OEFycmF5KDY0KTtmb3IoZj0wO2Y8MTY7ZisrKXNbZl09MDtmb3IoZj0wO2Y8ODtmKyspc1tmXT1pW2ZdO2Zvcig7NjQ8PW87KXtmb3IoQSh1LHMsaCxVKSxmPTA7Zjw2NDtmKyspclt0K2ZdPW5bZStmXV51W2ZdO2ZvcihhPTEsZj04O2Y8MTY7ZisrKWE9YSsoMjU1JnNbZl0pfDAsc1tmXT0yNTUmYSxhPj4+PTg7by09NjQsdCs9NjQsZSs9NjR9aWYoMDxvKWZvcihBKHUscyxoLFUpLGY9MDtmPG87ZisrKXJbdCtmXT1uW2UrZl1edVtmXTtyZXR1cm4gMH1mdW5jdGlvbiBFKHIsdCxuLGUsbyl7dmFyIGksaCxhPW5ldyBVaW50OEFycmF5KDE2KSxmPW5ldyBVaW50OEFycmF5KDY0KTtmb3IoaD0wO2g8MTY7aCsrKWFbaF09MDtmb3IoaD0wO2g8ODtoKyspYVtoXT1lW2hdO2Zvcig7NjQ8PW47KXtmb3IoQShmLGEsbyxVKSxoPTA7aDw2NDtoKyspclt0K2hdPWZbaF07Zm9yKGk9MSxoPTg7aDwxNjtoKyspaT1pKygyNTUmYVtoXSl8MCxhW2hdPTI1NSZpLGk+Pj49ODtuLT02NCx0Kz02NH1pZigwPG4pZm9yKEEoZixhLG8sVSksaD0wO2g8bjtoKyspclt0K2hdPWZbaF07cmV0dXJuIDB9ZnVuY3Rpb24geChyLHQsbixlLG8pe3ZhciBpPW5ldyBVaW50OEFycmF5KDMyKTtfKGksZSxvLFUpO2Zvcih2YXIgaD1uZXcgVWludDhBcnJheSg4KSxhPTA7YTw4O2ErKyloW2FdPWVbYSsxNl07cmV0dXJuIEUocix0LG4saCxpKX1mdW5jdGlvbiBNKHIsdCxuLGUsbyxpLGgpe3ZhciBhPW5ldyBVaW50OEFycmF5KDMyKTtfKGEsaSxoLFUpO2Zvcih2YXIgZj1uZXcgVWludDhBcnJheSg4KSxzPTA7czw4O3MrKylmW3NdPWlbcysxNl07cmV0dXJuIGQocix0LG4sZSxvLGYsYSl9dmFyIG09ZnVuY3Rpb24ocil7dmFyIHQsbixlLG8saSxoLGEsZjt0aGlzLmJ1ZmZlcj1uZXcgVWludDhBcnJheSgxNiksdGhpcy5yPW5ldyBVaW50MTZBcnJheSgxMCksdGhpcy5oPW5ldyBVaW50MTZBcnJheSgxMCksdGhpcy5wYWQ9bmV3IFVpbnQxNkFycmF5KDgpLHRoaXMubGVmdG92ZXI9MCx0PTI1NSZyW3RoaXMuZmluPTBdfCgyNTUmclsxXSk8PDgsdGhpcy5yWzBdPTgxOTEmdCxuPTI1NSZyWzJdfCgyNTUmclszXSk8PDgsdGhpcy5yWzFdPTgxOTEmKHQ+Pj4xM3xuPDwzKSxlPTI1NSZyWzRdfCgyNTUmcls1XSk8PDgsdGhpcy5yWzJdPTc5MzkmKG4+Pj4xMHxlPDw2KSxvPTI1NSZyWzZdfCgyNTUmcls3XSk8PDgsdGhpcy5yWzNdPTgxOTEmKGU+Pj43fG88PDkpLGk9MjU1JnJbOF18KDI1NSZyWzldKTw8OCx0aGlzLnJbNF09MjU1JihvPj4+NHxpPDwxMiksdGhpcy5yWzVdPWk+Pj4xJjgxOTAsaD0yNTUmclsxMF18KDI1NSZyWzExXSk8PDgsdGhpcy5yWzZdPTgxOTEmKGk+Pj4xNHxoPDwyKSxhPTI1NSZyWzEyXXwoMjU1JnJbMTNdKTw8OCx0aGlzLnJbN109ODA2NSYoaD4+PjExfGE8PDUpLGY9MjU1JnJbMTRdfCgyNTUmclsxNV0pPDw4LHRoaXMucls4XT04MTkxJihhPj4+OHxmPDw4KSx0aGlzLnJbOV09Zj4+PjUmMTI3LHRoaXMucGFkWzBdPTI1NSZyWzE2XXwoMjU1JnJbMTddKTw8OCx0aGlzLnBhZFsxXT0yNTUmclsxOF18KDI1NSZyWzE5XSk8PDgsdGhpcy5wYWRbMl09MjU1JnJbMjBdfCgyNTUmclsyMV0pPDw4LHRoaXMucGFkWzNdPTI1NSZyWzIyXXwoMjU1JnJbMjNdKTw8OCx0aGlzLnBhZFs0XT0yNTUmclsyNF18KDI1NSZyWzI1XSk8PDgsdGhpcy5wYWRbNV09MjU1JnJbMjZdfCgyNTUmclsyN10pPDw4LHRoaXMucGFkWzZdPTI1NSZyWzI4XXwoMjU1JnJbMjldKTw8OCx0aGlzLnBhZFs3XT0yNTUmclszMF18KDI1NSZyWzMxXSk8PDh9O2Z1bmN0aW9uIEIocix0LG4sZSxvLGkpe3ZhciBoPW5ldyBtKGkpO3JldHVybiBoLnVwZGF0ZShuLGUsbyksaC5maW5pc2gocix0KSwwfWZ1bmN0aW9uIFMocix0LG4sZSxvLGkpe3ZhciBoPW5ldyBVaW50OEFycmF5KDE2KTtyZXR1cm4gQihoLDAsbixlLG8saSksYihyLHQsaCwwKX1mdW5jdGlvbiBrKHIsdCxuLGUsbyl7dmFyIGk7aWYobjwzMilyZXR1cm4tMTtmb3IoTShyLDAsdCwwLG4sZSxvKSxCKHIsMTYsciwzMixuLTMyLHIpLGk9MDtpPDE2O2krKylyW2ldPTA7cmV0dXJuIDB9ZnVuY3Rpb24gSyhyLHQsbixlLG8pe3ZhciBpLGg9bmV3IFVpbnQ4QXJyYXkoMzIpO2lmKG48MzIpcmV0dXJuLTE7aWYoeChoLDAsMzIsZSxvKSwwIT09Uyh0LDE2LHQsMzIsbi0zMixoKSlyZXR1cm4tMTtmb3IoTShyLDAsdCwwLG4sZSxvKSxpPTA7aTwzMjtpKyspcltpXT0wO3JldHVybiAwfWZ1bmN0aW9uIFkocix0KXt2YXIgbjtmb3Iobj0wO248MTY7bisrKXJbbl09MHx0W25dfWZ1bmN0aW9uIEwocil7dmFyIHQsbixlPTE7Zm9yKHQ9MDt0PDE2O3QrKyluPXJbdF0rZSs2NTUzNSxlPU1hdGguZmxvb3Iobi82NTUzNiksclt0XT1uLTY1NTM2KmU7clswXSs9ZS0xKzM3KihlLTEpfWZ1bmN0aW9uIFQocix0LG4pe2Zvcih2YXIgZSxvPX4obi0xKSxpPTA7aTwxNjtpKyspZT1vJihyW2ldXnRbaV0pLHJbaV1ePWUsdFtpXV49ZX1mdW5jdGlvbiB6KHIsdCl7dmFyIG4sZSxvLGk9digpLGg9digpO2ZvcihuPTA7bjwxNjtuKyspaFtuXT10W25dO2ZvcihMKGgpLEwoaCksTChoKSxlPTA7ZTwyO2UrKyl7Zm9yKGlbMF09aFswXS02NTUxNyxuPTE7bjwxNTtuKyspaVtuXT1oW25dLTY1NTM1LShpW24tMV0+PjE2JjEpLGlbbi0xXSY9NjU1MzU7aVsxNV09aFsxNV0tMzI3NjctKGlbMTRdPj4xNiYxKSxvPWlbMTVdPj4xNiYxLGlbMTRdJj02NTUzNSxUKGgsaSwxLW8pfWZvcihuPTA7bjwxNjtuKyspclsyKm5dPTI1NSZoW25dLHJbMipuKzFdPWhbbl0+Pjh9ZnVuY3Rpb24gUihyLHQpe3ZhciBuPW5ldyBVaW50OEFycmF5KDMyKSxlPW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4geihuLHIpLHooZSx0KSxnKG4sMCxlLDApfWZ1bmN0aW9uIFAocil7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiB6KHQsciksMSZ0WzBdfWZ1bmN0aW9uIE4ocix0KXt2YXIgbjtmb3Iobj0wO248MTY7bisrKXJbbl09dFsyKm5dKyh0WzIqbisxXTw8OCk7clsxNV0mPTMyNzY3fWZ1bmN0aW9uIE8ocix0LG4pe2Zvcih2YXIgZT0wO2U8MTY7ZSsrKXJbZV09dFtlXStuW2VdfWZ1bmN0aW9uIEMocix0LG4pe2Zvcih2YXIgZT0wO2U8MTY7ZSsrKXJbZV09dFtlXS1uW2VdfWZ1bmN0aW9uIEYocix0LG4pe3ZhciBlLG8saT0wLGg9MCxhPTAsZj0wLHM9MCx1PTAsYz0wLHk9MCxsPTAsdz0wLHY9MCxwPTAsYj0wLGc9MCxBPTAsXz0wLFU9MCxkPTAsRT0wLHg9MCxNPTAsbT0wLEI9MCxTPTAsaz0wLEs9MCxZPTAsTD0wLFQ9MCx6PTAsUj0wLFA9blswXSxOPW5bMV0sTz1uWzJdLEM9blszXSxGPW5bNF0sST1uWzVdLFo9bls2XSxHPW5bN10scT1uWzhdLEQ9bls5XSxWPW5bMTBdLFg9blsxMV0saj1uWzEyXSxIPW5bMTNdLEo9blsxNF0sUT1uWzE1XTtpKz0oZT10WzBdKSpQLGgrPWUqTixhKz1lKk8sZis9ZSpDLHMrPWUqRix1Kz1lKkksYys9ZSpaLHkrPWUqRyxsKz1lKnEsdys9ZSpELHYrPWUqVixwKz1lKlgsYis9ZSpqLGcrPWUqSCxBKz1lKkosXys9ZSpRLGgrPShlPXRbMV0pKlAsYSs9ZSpOLGYrPWUqTyxzKz1lKkMsdSs9ZSpGLGMrPWUqSSx5Kz1lKlosbCs9ZSpHLHcrPWUqcSx2Kz1lKkQscCs9ZSpWLGIrPWUqWCxnKz1lKmosQSs9ZSpILF8rPWUqSixVKz1lKlEsYSs9KGU9dFsyXSkqUCxmKz1lKk4scys9ZSpPLHUrPWUqQyxjKz1lKkYseSs9ZSpJLGwrPWUqWix3Kz1lKkcsdis9ZSpxLHArPWUqRCxiKz1lKlYsZys9ZSpYLEErPWUqaixfKz1lKkgsVSs9ZSpKLGQrPWUqUSxmKz0oZT10WzNdKSpQLHMrPWUqTix1Kz1lKk8sYys9ZSpDLHkrPWUqRixsKz1lKkksdys9ZSpaLHYrPWUqRyxwKz1lKnEsYis9ZSpELGcrPWUqVixBKz1lKlgsXys9ZSpqLFUrPWUqSCxkKz1lKkosRSs9ZSpRLHMrPShlPXRbNF0pKlAsdSs9ZSpOLGMrPWUqTyx5Kz1lKkMsbCs9ZSpGLHcrPWUqSSx2Kz1lKloscCs9ZSpHLGIrPWUqcSxnKz1lKkQsQSs9ZSpWLF8rPWUqWCxVKz1lKmosZCs9ZSpILEUrPWUqSix4Kz1lKlEsdSs9KGU9dFs1XSkqUCxjKz1lKk4seSs9ZSpPLGwrPWUqQyx3Kz1lKkYsdis9ZSpJLHArPWUqWixiKz1lKkcsZys9ZSpxLEErPWUqRCxfKz1lKlYsVSs9ZSpYLGQrPWUqaixFKz1lKkgseCs9ZSpKLE0rPWUqUSxjKz0oZT10WzZdKSpQLHkrPWUqTixsKz1lKk8sdys9ZSpDLHYrPWUqRixwKz1lKkksYis9ZSpaLGcrPWUqRyxBKz1lKnEsXys9ZSpELFUrPWUqVixkKz1lKlgsRSs9ZSpqLHgrPWUqSCxNKz1lKkosbSs9ZSpRLHkrPShlPXRbN10pKlAsbCs9ZSpOLHcrPWUqTyx2Kz1lKkMscCs9ZSpGLGIrPWUqSSxnKz1lKlosQSs9ZSpHLF8rPWUqcSxVKz1lKkQsZCs9ZSpWLEUrPWUqWCx4Kz1lKmosTSs9ZSpILG0rPWUqSixCKz1lKlEsbCs9KGU9dFs4XSkqUCx3Kz1lKk4sdis9ZSpPLHArPWUqQyxiKz1lKkYsZys9ZSpJLEErPWUqWixfKz1lKkcsVSs9ZSpxLGQrPWUqRCxFKz1lKlYseCs9ZSpYLE0rPWUqaixtKz1lKkgsQis9ZSpKLFMrPWUqUSx3Kz0oZT10WzldKSpQLHYrPWUqTixwKz1lKk8sYis9ZSpDLGcrPWUqRixBKz1lKkksXys9ZSpaLFUrPWUqRyxkKz1lKnEsRSs9ZSpELHgrPWUqVixNKz1lKlgsbSs9ZSpqLEIrPWUqSCxTKz1lKkosays9ZSpRLHYrPShlPXRbMTBdKSpQLHArPWUqTixiKz1lKk8sZys9ZSpDLEErPWUqRixfKz1lKkksVSs9ZSpaLGQrPWUqRyxFKz1lKnEseCs9ZSpELE0rPWUqVixtKz1lKlgsQis9ZSpqLFMrPWUqSCxrKz1lKkosSys9ZSpRLHArPShlPXRbMTFdKSpQLGIrPWUqTixnKz1lKk8sQSs9ZSpDLF8rPWUqRixVKz1lKkksZCs9ZSpaLEUrPWUqRyx4Kz1lKnEsTSs9ZSpELG0rPWUqVixCKz1lKlgsUys9ZSpqLGsrPWUqSCxLKz1lKkosWSs9ZSpRLGIrPShlPXRbMTJdKSpQLGcrPWUqTixBKz1lKk8sXys9ZSpDLFUrPWUqRixkKz1lKkksRSs9ZSpaLHgrPWUqRyxNKz1lKnEsbSs9ZSpELEIrPWUqVixTKz1lKlgsays9ZSpqLEsrPWUqSCxZKz1lKkosTCs9ZSpRLGcrPShlPXRbMTNdKSpQLEErPWUqTixfKz1lKk8sVSs9ZSpDLGQrPWUqRixFKz1lKkkseCs9ZSpaLE0rPWUqRyxtKz1lKnEsQis9ZSpELFMrPWUqVixrKz1lKlgsSys9ZSpqLFkrPWUqSCxMKz1lKkosVCs9ZSpRLEErPShlPXRbMTRdKSpQLF8rPWUqTixVKz1lKk8sZCs9ZSpDLEUrPWUqRix4Kz1lKkksTSs9ZSpaLG0rPWUqRyxCKz1lKnEsUys9ZSpELGsrPWUqVixLKz1lKlgsWSs9ZSpqLEwrPWUqSCxUKz1lKkoseis9ZSpRLF8rPShlPXRbMTVdKSpQLGgrPTM4KihkKz1lKk8pLGErPTM4KihFKz1lKkMpLGYrPTM4Kih4Kz1lKkYpLHMrPTM4KihNKz1lKkkpLHUrPTM4KihtKz1lKlopLGMrPTM4KihCKz1lKkcpLHkrPTM4KihTKz1lKnEpLGwrPTM4KihrKz1lKkQpLHcrPTM4KihLKz1lKlYpLHYrPTM4KihZKz1lKlgpLHArPTM4KihMKz1lKmopLGIrPTM4KihUKz1lKkgpLGcrPTM4Kih6Kz1lKkopLEErPTM4KihSKz1lKlEpLGk9KGU9KGkrPTM4KihVKz1lKk4pKSsobz0xKSs2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaD0oZT1oK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGE9KGU9YStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxmPShlPWYrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkscz0oZT1zK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHU9KGU9dStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxjPShlPWMrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkseT0oZT15K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGw9KGU9bCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSx3PShlPXcrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksdj0oZT12K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHA9KGU9cCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxiPShlPWIrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksZz0oZT1nK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLEE9KGU9QStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxfPShlPV8rbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaT0oZT0oaSs9by0xKzM3KihvLTEpKSsobz0xKSs2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaD0oZT1oK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGE9KGU9YStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxmPShlPWYrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkscz0oZT1zK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHU9KGU9dStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxjPShlPWMrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSkseT0oZT15K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLGw9KGU9bCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSx3PShlPXcrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksdj0oZT12K28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLHA9KGU9cCtvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxiPShlPWIrbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksZz0oZT1nK28rNjU1MzUpLTY1NTM2KihvPU1hdGguZmxvb3IoZS82NTUzNikpLEE9KGU9QStvKzY1NTM1KS02NTUzNioobz1NYXRoLmZsb29yKGUvNjU1MzYpKSxfPShlPV8rbys2NTUzNSktNjU1MzYqKG89TWF0aC5mbG9vcihlLzY1NTM2KSksaSs9by0xKzM3KihvLTEpLHJbMF09aSxyWzFdPWgsclsyXT1hLHJbM109ZixyWzRdPXMscls1XT11LHJbNl09YyxyWzddPXkscls4XT1sLHJbOV09dyxyWzEwXT12LHJbMTFdPXAsclsxMl09YixyWzEzXT1nLHJbMTRdPUEsclsxNV09X31mdW5jdGlvbiBJKHIsdCl7RihyLHQsdCl9ZnVuY3Rpb24gWihyLHQpe3ZhciBuLGU9digpO2ZvcihuPTA7bjwxNjtuKyspZVtuXT10W25dO2ZvcihuPTI1MzswPD1uO24tLSlJKGUsZSksMiE9PW4mJjQhPT1uJiZGKGUsZSx0KTtmb3Iobj0wO248MTY7bisrKXJbbl09ZVtuXX1mdW5jdGlvbiBHKHIsdCl7dmFyIG4sZT12KCk7Zm9yKG49MDtuPDE2O24rKyllW25dPXRbbl07Zm9yKG49MjUwOzA8PW47bi0tKUkoZSxlKSwxIT09biYmRihlLGUsdCk7Zm9yKG49MDtuPDE2O24rKylyW25dPWVbbl19ZnVuY3Rpb24gcShyLHQsbil7dmFyIGUsbyxpPW5ldyBVaW50OEFycmF5KDMyKSxoPW5ldyBGbG9hdDY0QXJyYXkoODApLGE9digpLGY9digpLHM9digpLHU9digpLGM9digpLHk9digpO2ZvcihvPTA7bzwzMTtvKyspaVtvXT10W29dO2ZvcihpWzMxXT0xMjcmdFszMV18NjQsaVswXSY9MjQ4LE4oaCxuKSxvPTA7bzwxNjtvKyspZltvXT1oW29dLHVbb109YVtvXT1zW29dPTA7Zm9yKGFbMF09dVswXT0xLG89MjU0OzA8PW87LS1vKVQoYSxmLGU9aVtvPj4+M10+Pj4oNyZvKSYxKSxUKHMsdSxlKSxPKGMsYSxzKSxDKGEsYSxzKSxPKHMsZix1KSxDKGYsZix1KSxJKHUsYyksSSh5LGEpLEYoYSxzLGEpLEYocyxmLGMpLE8oYyxhLHMpLEMoYSxhLHMpLEkoZixhKSxDKHMsdSx5KSxGKGEscyxwKSxPKGEsYSx1KSxGKHMscyxhKSxGKGEsdSx5KSxGKHUsZixoKSxJKGYsYyksVChhLGYsZSksVChzLHUsZSk7Zm9yKG89MDtvPDE2O28rKyloW28rMTZdPWFbb10saFtvKzMyXT1zW29dLGhbbys0OF09ZltvXSxoW28rNjRdPXVbb107dmFyIGw9aC5zdWJhcnJheSgzMiksdz1oLnN1YmFycmF5KDE2KTtyZXR1cm4gWihsLGwpLEYodyx3LGwpLHoocix3KSwwfWZ1bmN0aW9uIEQocix0KXtyZXR1cm4gcShyLHQsbil9ZnVuY3Rpb24gVihyLHQpe3JldHVybiBoKHQsMzIpLEQocix0KX1mdW5jdGlvbiBYKHIsdCxuKXt2YXIgZT1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIHEoZSxuLHQpLF8ocixvLGUsVSl9bS5wcm90b3R5cGUuYmxvY2tzPWZ1bmN0aW9uKHIsdCxuKXtmb3IodmFyIGUsbyxpLGgsYSxmLHMsdSxjLHksbCx3LHYscCxiLGcsQSxfLFUsZD10aGlzLmZpbj8wOjIwNDgsRT10aGlzLmhbMF0seD10aGlzLmhbMV0sTT10aGlzLmhbMl0sbT10aGlzLmhbM10sQj10aGlzLmhbNF0sUz10aGlzLmhbNV0saz10aGlzLmhbNl0sSz10aGlzLmhbN10sWT10aGlzLmhbOF0sTD10aGlzLmhbOV0sVD10aGlzLnJbMF0sej10aGlzLnJbMV0sUj10aGlzLnJbMl0sUD10aGlzLnJbM10sTj10aGlzLnJbNF0sTz10aGlzLnJbNV0sQz10aGlzLnJbNl0sRj10aGlzLnJbN10sST10aGlzLnJbOF0sWj10aGlzLnJbOV07MTY8PW47KXk9Yz0wLHkrPShFKz04MTkxJihlPTI1NSZyW3QrMF18KDI1NSZyW3QrMV0pPDw4KSkqVCx5Kz0oeCs9ODE5MSYoZT4+PjEzfChvPTI1NSZyW3QrMl18KDI1NSZyW3QrM10pPDw4KTw8MykpKig1KlopLHkrPShNKz04MTkxJihvPj4+MTB8KGk9MjU1JnJbdCs0XXwoMjU1JnJbdCs1XSk8PDgpPDw2KSkqKDUqSSkseSs9KG0rPTgxOTEmKGk+Pj43fChoPTI1NSZyW3QrNl18KDI1NSZyW3QrN10pPDw4KTw8OSkpKig1KkYpLGM9KHkrPShCKz04MTkxJihoPj4+NHwoYT0yNTUmclt0KzhdfCgyNTUmclt0KzldKTw8OCk8PDEyKSkqKDUqQykpPj4+MTMseSY9ODE5MSx5Kz0oUys9YT4+PjEmODE5MSkqKDUqTykseSs9KGsrPTgxOTEmKGE+Pj4xNHwoZj0yNTUmclt0KzEwXXwoMjU1JnJbdCsxMV0pPDw4KTw8MikpKig1Kk4pLHkrPShLKz04MTkxJihmPj4+MTF8KHM9MjU1JnJbdCsxMl18KDI1NSZyW3QrMTNdKTw8OCk8PDUpKSooNSpQKSx5Kz0oWSs9ODE5MSYocz4+Pjh8KHU9MjU1JnJbdCsxNF18KDI1NSZyW3QrMTVdKTw8OCk8PDgpKSooNSpSKSxsPWMrPSh5Kz0oTCs9dT4+PjV8ZCkqKDUqeikpPj4+MTMsbCs9RSp6LGwrPXgqVCxsKz1NKig1KlopLGwrPW0qKDUqSSksYz0obCs9QiooNSpGKSk+Pj4xMyxsJj04MTkxLGwrPVMqKDUqQyksbCs9ayooNSpPKSxsKz1LKig1Kk4pLGwrPVkqKDUqUCksYys9KGwrPUwqKDUqUikpPj4+MTMsbCY9ODE5MSx3PWMsdys9RSpSLHcrPXgqeix3Kz1NKlQsdys9bSooNSpaKSxjPSh3Kz1CKig1KkkpKT4+PjEzLHcmPTgxOTEsdys9UyooNSpGKSx3Kz1rKig1KkMpLHcrPUsqKDUqTyksdys9WSooNSpOKSx2PWMrPSh3Kz1MKig1KlApKT4+PjEzLHYrPUUqUCx2Kz14KlIsdis9TSp6LHYrPW0qVCxjPSh2Kz1CKig1KlopKT4+PjEzLHYmPTgxOTEsdis9UyooNSpJKSx2Kz1rKig1KkYpLHYrPUsqKDUqQyksdis9WSooNSpPKSxwPWMrPSh2Kz1MKig1Kk4pKT4+PjEzLHArPUUqTixwKz14KlAscCs9TSpSLHArPW0qeixjPShwKz1CKlQpPj4+MTMscCY9ODE5MSxwKz1TKig1KlopLHArPWsqKDUqSSkscCs9SyooNSpGKSxwKz1ZKig1KkMpLGI9Yys9KHArPUwqKDUqTykpPj4+MTMsYis9RSpPLGIrPXgqTixiKz1NKlAsYis9bSpSLGM9KGIrPUIqeik+Pj4xMyxiJj04MTkxLGIrPVMqVCxiKz1rKig1KlopLGIrPUsqKDUqSSksYis9WSooNSpGKSxnPWMrPShiKz1MKig1KkMpKT4+PjEzLGcrPUUqQyxnKz14Kk8sZys9TSpOLGcrPW0qUCxjPShnKz1CKlIpPj4+MTMsZyY9ODE5MSxnKz1TKnosZys9aypULGcrPUsqKDUqWiksZys9WSooNSpJKSxBPWMrPShnKz1MKig1KkYpKT4+PjEzLEErPUUqRixBKz14KkMsQSs9TSpPLEErPW0qTixjPShBKz1CKlApPj4+MTMsQSY9ODE5MSxBKz1TKlIsQSs9ayp6LEErPUsqVCxBKz1ZKig1KlopLF89Yys9KEErPUwqKDUqSSkpPj4+MTMsXys9RSpJLF8rPXgqRixfKz1NKkMsXys9bSpPLGM9KF8rPUIqTik+Pj4xMyxfJj04MTkxLF8rPVMqUCxfKz1rKlIsXys9Syp6LF8rPVkqVCxVPWMrPShfKz1MKig1KlopKT4+PjEzLFUrPUUqWixVKz14KkksVSs9TSpGLFUrPW0qQyxjPShVKz1CKk8pPj4+MTMsVSY9ODE5MSxVKz1TKk4sVSs9aypQLFUrPUsqUixVKz1ZKnosRT15PTgxOTEmKGM9KGM9KChjKz0oVSs9TCpUKT4+PjEzKTw8MikrY3wwKSsoeSY9ODE5MSl8MCkseD1sKz1jPj4+PTEzLE09dyY9ODE5MSxtPXYmPTgxOTEsQj1wJj04MTkxLFM9YiY9ODE5MSxrPWcmPTgxOTEsSz1BJj04MTkxLFk9XyY9ODE5MSxMPVUmPTgxOTEsdCs9MTYsbi09MTY7dGhpcy5oWzBdPUUsdGhpcy5oWzFdPXgsdGhpcy5oWzJdPU0sdGhpcy5oWzNdPW0sdGhpcy5oWzRdPUIsdGhpcy5oWzVdPVMsdGhpcy5oWzZdPWssdGhpcy5oWzddPUssdGhpcy5oWzhdPVksdGhpcy5oWzldPUx9LG0ucHJvdG90eXBlLmZpbmlzaD1mdW5jdGlvbihyLHQpe3ZhciBuLGUsbyxpLGg9bmV3IFVpbnQxNkFycmF5KDEwKTtpZih0aGlzLmxlZnRvdmVyKXtmb3IoaT10aGlzLmxlZnRvdmVyLHRoaXMuYnVmZmVyW2krK109MTtpPDE2O2krKyl0aGlzLmJ1ZmZlcltpXT0wO3RoaXMuZmluPTEsdGhpcy5ibG9ja3ModGhpcy5idWZmZXIsMCwxNil9Zm9yKG49dGhpcy5oWzFdPj4+MTMsdGhpcy5oWzFdJj04MTkxLGk9MjtpPDEwO2krKyl0aGlzLmhbaV0rPW4sbj10aGlzLmhbaV0+Pj4xMyx0aGlzLmhbaV0mPTgxOTE7Zm9yKHRoaXMuaFswXSs9NSpuLG49dGhpcy5oWzBdPj4+MTMsdGhpcy5oWzBdJj04MTkxLHRoaXMuaFsxXSs9bixuPXRoaXMuaFsxXT4+PjEzLHRoaXMuaFsxXSY9ODE5MSx0aGlzLmhbMl0rPW4saFswXT10aGlzLmhbMF0rNSxuPWhbMF0+Pj4xMyxoWzBdJj04MTkxLGk9MTtpPDEwO2krKyloW2ldPXRoaXMuaFtpXStuLG49aFtpXT4+PjEzLGhbaV0mPTgxOTE7Zm9yKGhbOV0tPTgxOTIsZT0oMV5uKS0xLGk9MDtpPDEwO2krKyloW2ldJj1lO2ZvcihlPX5lLGk9MDtpPDEwO2krKyl0aGlzLmhbaV09dGhpcy5oW2ldJmV8aFtpXTtmb3IodGhpcy5oWzBdPTY1NTM1Jih0aGlzLmhbMF18dGhpcy5oWzFdPDwxMyksdGhpcy5oWzFdPTY1NTM1Jih0aGlzLmhbMV0+Pj4zfHRoaXMuaFsyXTw8MTApLHRoaXMuaFsyXT02NTUzNSYodGhpcy5oWzJdPj4+Nnx0aGlzLmhbM108PDcpLHRoaXMuaFszXT02NTUzNSYodGhpcy5oWzNdPj4+OXx0aGlzLmhbNF08PDQpLHRoaXMuaFs0XT02NTUzNSYodGhpcy5oWzRdPj4+MTJ8dGhpcy5oWzVdPDwxfHRoaXMuaFs2XTw8MTQpLHRoaXMuaFs1XT02NTUzNSYodGhpcy5oWzZdPj4+Mnx0aGlzLmhbN108PDExKSx0aGlzLmhbNl09NjU1MzUmKHRoaXMuaFs3XT4+PjV8dGhpcy5oWzhdPDw4KSx0aGlzLmhbN109NjU1MzUmKHRoaXMuaFs4XT4+Pjh8dGhpcy5oWzldPDw1KSxvPXRoaXMuaFswXSt0aGlzLnBhZFswXSx0aGlzLmhbMF09NjU1MzUmbyxpPTE7aTw4O2krKylvPSh0aGlzLmhbaV0rdGhpcy5wYWRbaV18MCkrKG8+Pj4xNil8MCx0aGlzLmhbaV09NjU1MzUmbztyW3QrMF09dGhpcy5oWzBdPj4+MCYyNTUsclt0KzFdPXRoaXMuaFswXT4+PjgmMjU1LHJbdCsyXT10aGlzLmhbMV0+Pj4wJjI1NSxyW3QrM109dGhpcy5oWzFdPj4+OCYyNTUsclt0KzRdPXRoaXMuaFsyXT4+PjAmMjU1LHJbdCs1XT10aGlzLmhbMl0+Pj44JjI1NSxyW3QrNl09dGhpcy5oWzNdPj4+MCYyNTUsclt0KzddPXRoaXMuaFszXT4+PjgmMjU1LHJbdCs4XT10aGlzLmhbNF0+Pj4wJjI1NSxyW3QrOV09dGhpcy5oWzRdPj4+OCYyNTUsclt0KzEwXT10aGlzLmhbNV0+Pj4wJjI1NSxyW3QrMTFdPXRoaXMuaFs1XT4+PjgmMjU1LHJbdCsxMl09dGhpcy5oWzZdPj4+MCYyNTUsclt0KzEzXT10aGlzLmhbNl0+Pj44JjI1NSxyW3QrMTRdPXRoaXMuaFs3XT4+PjAmMjU1LHJbdCsxNV09dGhpcy5oWzddPj4+OCYyNTV9LG0ucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihyLHQsbil7dmFyIGUsbztpZih0aGlzLmxlZnRvdmVyKXtmb3Iobjwobz0xNi10aGlzLmxlZnRvdmVyKSYmKG89biksZT0wO2U8bztlKyspdGhpcy5idWZmZXJbdGhpcy5sZWZ0b3ZlcitlXT1yW3QrZV07aWYobi09byx0Kz1vLHRoaXMubGVmdG92ZXIrPW8sdGhpcy5sZWZ0b3ZlcjwxNilyZXR1cm47dGhpcy5ibG9ja3ModGhpcy5idWZmZXIsMCwxNiksdGhpcy5sZWZ0b3Zlcj0wfWlmKDE2PD1uJiYobz1uLW4lMTYsdGhpcy5ibG9ja3Mocix0LG8pLHQrPW8sbi09byksbil7Zm9yKGU9MDtlPG47ZSsrKXRoaXMuYnVmZmVyW3RoaXMubGVmdG92ZXIrZV09clt0K2VdO3RoaXMubGVmdG92ZXIrPW59fTt2YXIgaj1rLEg9Szt2YXIgSj1bMTExNjM1MjQwOCwzNjA5NzY3NDU4LDE4OTk0NDc0NDEsNjAyODkxNzI1LDMwNDkzMjM0NzEsMzk2NDQ4NDM5OSwzOTIxMDA5NTczLDIxNzMyOTU1NDgsOTYxOTg3MTYzLDQwODE2Mjg0NzIsMTUwODk3MDk5MywzMDUzODM0MjY1LDI0NTM2MzU3NDgsMjkzNzY3MTU3OSwyODcwNzYzMjIxLDM2NjQ2MDk1NjAsMzYyNDM4MTA4MCwyNzM0ODgzMzk0LDMxMDU5ODQwMSwxMTY0OTk2NTQyLDYwNzIyNTI3OCwxMzIzNjEwNzY0LDE0MjY4ODE5ODcsMzU5MDMwNDk5NCwxOTI1MDc4Mzg4LDQwNjgxODIzODMsMjE2MjA3ODIwNiw5OTEzMzYxMTMsMjYxNDg4ODEwMyw2MzM4MDMzMTcsMzI0ODIyMjU4MCwzNDc5Nzc0ODY4LDM4MzUzOTA0MDEsMjY2NjYxMzQ1OCw0MDIyMjI0Nzc0LDk0NDcxMTEzOSwyNjQzNDcwNzgsMjM0MTI2Mjc3Myw2MDQ4MDc2MjgsMjAwNzgwMDkzMyw3NzAyNTU5ODMsMTQ5NTk5MDkwMSwxMjQ5MTUwMTIyLDE4NTY0MzEyMzUsMTU1NTA4MTY5MiwzMTc1MjE4MTMyLDE5OTYwNjQ5ODYsMjE5ODk1MDgzNywyNTU0MjIwODgyLDM5OTk3MTkzMzksMjgyMTgzNDM0OSw3NjY3ODQwMTYsMjk1Mjk5NjgwOCwyNTY2NTk0ODc5LDMyMTAzMTM2NzEsMzIwMzMzNzk1NiwzMzM2NTcxODkxLDEwMzQ0NTcwMjYsMzU4NDUyODcxMSwyNDY2OTQ4OTAxLDExMzkyNjk5MywzNzU4MzI2MzgzLDMzODI0MTg5NSwxNjg3MTc5MzYsNjY2MzA3MjA1LDExODgxNzk5NjQsNzczNTI5OTEyLDE1NDYwNDU3MzQsMTI5NDc1NzM3MiwxNTIyODA1NDg1LDEzOTYxODIyOTEsMjY0MzgzMzgyMywxNjk1MTgzNzAwLDIzNDM1MjczOTAsMTk4NjY2MTA1MSwxMDE0NDc3NDgwLDIxNzcwMjYzNTAsMTIwNjc1OTE0MiwyNDU2OTU2MDM3LDM0NDA3NzYyNywyNzMwNDg1OTIxLDEyOTA4NjM0NjAsMjgyMDMwMjQxMSwzMTU4NDU0MjczLDMyNTk3MzA4MDAsMzUwNTk1MjY1NywzMzQ1NzY0NzcxLDEwNjIxNzAwOCwzNTE2MDY1ODE3LDM2MDYwMDgzNDQsMzYwMDM1MjgwNCwxNDMyNzI1Nzc2LDQwOTQ1NzE5MDksMTQ2NzAzMTU5NCwyNzU0MjMzNDQsODUxMTY5NzIwLDQzMDIyNzczNCwzMTAwODIzNzUyLDUwNjk0ODYxNiwxMzYzMjU4MTk1LDY1OTA2MDU1NiwzNzUwNjg1NTkzLDg4Mzk5Nzg3NywzNzg1MDUwMjgwLDk1ODEzOTU3MSwzMzE4MzA3NDI3LDEzMjI4MjIyMTgsMzgxMjcyMzQwMywxNTM3MDAyMDYzLDIwMDMwMzQ5OTUsMTc0Nzg3Mzc3OSwzNjAyMDM2ODk5LDE5NTU1NjIyMjIsMTU3NTk5MDAxMiwyMDI0MTA0ODE1LDExMjU1OTI5MjgsMjIyNzczMDQ1MiwyNzE2OTA0MzA2LDIzNjE4NTI0MjQsNDQyNzc2MDQ0LDI0Mjg0MzY0NzQsNTkzNjk4MzQ0LDI3NTY3MzQxODcsMzczMzExMDI0OSwzMjA0MDMxNDc5LDI5OTkzNTE1NzMsMzMyOTMyNTI5OCwzODE1OTIwNDI3LDMzOTE1Njk2MTQsMzkyODM4MzkwMCwzNTE1MjY3MjcxLDU2NjI4MDcxMSwzOTQwMTg3NjA2LDM0NTQwNjk1MzQsNDExODYzMDI3MSw0MDAwMjM5OTkyLDExNjQxODQ3NCwxOTE0MTM4NTU0LDE3NDI5MjQyMSwyNzMxMDU1MjcwLDI4OTM4MDM1NiwzMjAzOTkzMDA2LDQ2MDM5MzI2OSwzMjA2MjAzMTUsNjg1NDcxNzMzLDU4NzQ5NjgzNiw4NTIxNDI5NzEsMTA4Njc5Mjg1MSwxMDE3MDM2Mjk4LDM2NTU0MzEwMCwxMTI2MDAwNTgwLDI2MTgyOTc2NzYsMTI4ODAzMzQ3MCwzNDA5ODU1MTU4LDE1MDE1MDU5NDgsNDIzNDUwOTg2NiwxNjA3MTY3OTE1LDk4NzE2NzQ2OCwxODE2NDAyMzE2LDEyNDYxODk1OTFdO2Z1bmN0aW9uIFEocix0LG4sZSl7Zm9yKHZhciBvLGksaCxhLGYscyx1LGMseSxsLHcsdixwLGIsZyxBLF8sVSxkLEUseCxNLG0sQixTPW5ldyBJbnQzMkFycmF5KDE2KSxrPW5ldyBJbnQzMkFycmF5KDE2KSxLPXJbMF0sWT1yWzFdLEw9clsyXSxUPXJbM10sej1yWzRdLFI9cls1XSxQPXJbNl0sTj1yWzddLE89dFswXSxDPXRbMV0sRj10WzJdLEk9dFszXSxaPXRbNF0sRz10WzVdLHE9dFs2XSxEPXRbN10sVj0wOzEyODw9ZTspe2ZvcihfPTA7XzwxNjtfKyspVT04Kl8rVixTW19dPW5bVSswXTw8MjR8bltVKzFdPDwxNnxuW1UrMl08PDh8bltVKzNdLGtbX109bltVKzRdPDwyNHxuW1UrNV08PDE2fG5bVSs2XTw8OHxuW1UrN107Zm9yKF89MDtfPDgwO18rKylpZihvPVksaT1MLGg9VCxjPUMseT1GLGw9SSx4PTY1NTM1JihFPUQpLE09RT4+PjE2LG09NjU1MzUmKGQ9TiksQj1kPj4+MTYseCs9NjU1MzUmKEU9KCh3PVopPj4+MTR8KGE9eik8PDE4KV4oWj4+PjE4fHo8PDE0KV4oej4+Pjl8Wjw8MjMpKSxNKz1FPj4+MTYsbSs9NjU1MzUmKGQ9KHo+Pj4xNHxaPDwxOCleKHo+Pj4xOHxaPDwxNCleKFo+Pj45fHo8PDIzKSksQis9ZD4+PjE2LHgrPTY1NTM1JihFPVomKHY9RyleflomKHA9cSkpLE0rPUU+Pj4xNixtKz02NTUzNSYoZD16JihmPVIpXn56JihzPVApKSxCKz1kPj4+MTYsZD1KWzIqX10seCs9NjU1MzUmKEU9SlsyKl8rMV0pLE0rPUU+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixkPVNbXyUxNl0sTSs9KEU9a1tfJTE2XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixtKz0oTSs9KHgrPTY1NTM1JkUpPj4+MTYpPj4+MTYseD02NTUzNSYoRT1BPTY1NTM1Jnh8TTw8MTYpLE09RT4+PjE2LG09NjU1MzUmKGQ9Zz02NTUzNSZtfChCKz1tPj4+MTYpPDwxNiksQj1kPj4+MTYseCs9NjU1MzUmKEU9KE8+Pj4yOHxLPDw0KV4oSz4+PjJ8Tzw8MzApXihLPj4+N3xPPDwyNSkpLE0rPUU+Pj4xNixtKz02NTUzNSYoZD0oSz4+PjI4fE88PDQpXihPPj4+MnxLPDwzMCleKE8+Pj43fEs8PDI1KSksQis9ZD4+PjE2LE0rPShFPU8mQ15PJkZeQyZGKT4+PjE2LG0rPTY1NTM1JihkPUsmWV5LJkxeWSZMKSxCKz1kPj4+MTYsdT02NTUzNSYobSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KXwoQis9bT4+PjE2KTw8MTYsYj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9bCksTT1FPj4+MTYsbT02NTUzNSYoZD1oKSxCPWQ+Pj4xNixNKz0oRT1BKT4+PjE2LG0rPTY1NTM1JihkPWcpLEIrPWQ+Pj4xNixZPUssTD1vLFQ9aSx6PWg9NjU1MzUmKG0rPShNKz0oeCs9NjU1MzUmRSk+Pj4xNik+Pj4xNil8KEIrPW0+Pj4xNik8PDE2LFI9YSxQPWYsTj1zLEs9dSxDPU8sRj1jLEk9eSxaPWw9NjU1MzUmeHxNPDwxNixHPXcscT12LEQ9cCxPPWIsXyUxNj09MTUpZm9yKFU9MDtVPDE2O1UrKylkPVNbVV0seD02NTUzNSYoRT1rW1VdKSxNPUU+Pj4xNixtPTY1NTM1JmQsQj1kPj4+MTYsZD1TWyhVKzkpJTE2XSx4Kz02NTUzNSYoRT1rWyhVKzkpJTE2XSksTSs9RT4+PjE2LG0rPTY1NTM1JmQsQis9ZD4+PjE2LGc9U1soVSsxKSUxNl0seCs9NjU1MzUmKEU9KChBPWtbKFUrMSklMTZdKT4+PjF8Zzw8MzEpXihBPj4+OHxnPDwyNCleKEE+Pj43fGc8PDI1KSksTSs9RT4+PjE2LG0rPTY1NTM1JihkPShnPj4+MXxBPDwzMSleKGc+Pj44fEE8PDI0KV5nPj4+NyksQis9ZD4+PjE2LGc9U1soVSsxNCklMTZdLE0rPShFPSgoQT1rWyhVKzE0KSUxNl0pPj4+MTl8Zzw8MTMpXihnPj4+Mjl8QTw8MyleKEE+Pj42fGc8PDI2KSk+Pj4xNixtKz02NTUzNSYoZD0oZz4+PjE5fEE8PDEzKV4oQT4+PjI5fGc8PDMpXmc+Pj42KSxCKz1kPj4+MTYsQis9KG0rPShNKz0oeCs9NjU1MzUmRSk+Pj4xNik+Pj4xNik+Pj4xNixTW1VdPTY1NTM1Jm18Qjw8MTYsa1tVXT02NTUzNSZ4fE08PDE2O3g9NjU1MzUmKEU9TyksTT1FPj4+MTYsbT02NTUzNSYoZD1LKSxCPWQ+Pj4xNixkPXJbMF0sTSs9KEU9dFswXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMF09Sz02NTUzNSZtfEI8PDE2LHRbMF09Tz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9QyksTT1FPj4+MTYsbT02NTUzNSYoZD1ZKSxCPWQ+Pj4xNixkPXJbMV0sTSs9KEU9dFsxXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMV09WT02NTUzNSZtfEI8PDE2LHRbMV09Qz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RiksTT1FPj4+MTYsbT02NTUzNSYoZD1MKSxCPWQ+Pj4xNixkPXJbMl0sTSs9KEU9dFsyXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbMl09TD02NTUzNSZtfEI8PDE2LHRbMl09Rj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9SSksTT1FPj4+MTYsbT02NTUzNSYoZD1UKSxCPWQ+Pj4xNixkPXJbM10sTSs9KEU9dFszXSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbM109VD02NTUzNSZtfEI8PDE2LHRbM109ST02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9WiksTT1FPj4+MTYsbT02NTUzNSYoZD16KSxCPWQ+Pj4xNixkPXJbNF0sTSs9KEU9dFs0XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNF09ej02NTUzNSZtfEI8PDE2LHRbNF09Wj02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RyksTT1FPj4+MTYsbT02NTUzNSYoZD1SKSxCPWQ+Pj4xNixkPXJbNV0sTSs9KEU9dFs1XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNV09Uj02NTUzNSZtfEI8PDE2LHRbNV09Rz02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9cSksTT1FPj4+MTYsbT02NTUzNSYoZD1QKSxCPWQ+Pj4xNixkPXJbNl0sTSs9KEU9dFs2XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbNl09UD02NTUzNSZtfEI8PDE2LHRbNl09cT02NTUzNSZ4fE08PDE2LHg9NjU1MzUmKEU9RCksTT1FPj4+MTYsbT02NTUzNSYoZD1OKSxCPWQ+Pj4xNixkPXJbN10sTSs9KEU9dFs3XSk+Pj4xNixtKz02NTUzNSZkLEIrPWQ+Pj4xNixCKz0obSs9KE0rPSh4Kz02NTUzNSZFKT4+PjE2KT4+PjE2KT4+PjE2LHJbN109Tj02NTUzNSZtfEI8PDE2LHRbN109RD02NTUzNSZ4fE08PDE2LFYrPTEyOCxlLT0xMjh9cmV0dXJuIGV9ZnVuY3Rpb24gVyhyLHQsbil7dmFyIGUsbz1uZXcgSW50MzJBcnJheSg4KSxpPW5ldyBJbnQzMkFycmF5KDgpLGg9bmV3IFVpbnQ4QXJyYXkoMjU2KSxhPW47Zm9yKG9bMF09MTc3OTAzMzcwMyxvWzFdPTMxNDQxMzQyNzcsb1syXT0xMDEzOTA0MjQyLG9bM109Mjc3MzQ4MDc2MixvWzRdPTEzNTk4OTMxMTksb1s1XT0yNjAwODIyOTI0LG9bNl09NTI4NzM0NjM1LG9bN109MTU0MTQ1OTIyNSxpWzBdPTQwODkyMzU3MjAsaVsxXT0yMjI3ODczNTk1LGlbMl09NDI3MTE3NTcyMyxpWzNdPTE1OTU3NTAxMjksaVs0XT0yOTE3NTY1MTM3LGlbNV09NzI1NTExMTk5LGlbNl09NDIxNTM4OTU0NyxpWzddPTMyNzAzMzIwOSxRKG8saSx0LG4pLG4lPTEyOCxlPTA7ZTxuO2UrKyloW2VdPXRbYS1uK2VdO2ZvcihoW25dPTEyOCxoWyhuPTI1Ni0xMjgqKG48MTEyPzE6MCkpLTldPTAsZihoLG4tOCxhLzUzNjg3MDkxMnwwLGE8PDMpLFEobyxpLGgsbiksZT0wO2U8ODtlKyspZihyLDgqZSxvW2VdLGlbZV0pO3JldHVybiAwfWZ1bmN0aW9uICQocix0KXt2YXIgbj12KCksZT12KCksbz12KCksaT12KCksaD12KCksYT12KCksZj12KCkscz12KCksdT12KCk7QyhuLHJbMV0sclswXSksQyh1LHRbMV0sdFswXSksRihuLG4sdSksTyhlLHJbMF0sclsxXSksTyh1LHRbMF0sdFsxXSksRihlLGUsdSksRihvLHJbM10sdFszXSksRihvLG8seSksRihpLHJbMl0sdFsyXSksTyhpLGksaSksQyhoLGUsbiksQyhhLGksbyksTyhmLGksbyksTyhzLGUsbiksRihyWzBdLGgsYSksRihyWzFdLHMsZiksRihyWzJdLGYsYSksRihyWzNdLGgscyl9ZnVuY3Rpb24gcnIocix0LG4pe3ZhciBlO2ZvcihlPTA7ZTw0O2UrKylUKHJbZV0sdFtlXSxuKX1mdW5jdGlvbiB0cihyLHQpe3ZhciBuPXYoKSxlPXYoKSxvPXYoKTtaKG8sdFsyXSksRihuLHRbMF0sbyksRihlLHRbMV0sbykseihyLGUpLHJbMzFdXj1QKG4pPDw3fWZ1bmN0aW9uIG5yKHIsdCxuKXt2YXIgZSxvO2ZvcihZKHJbMF0scyksWShyWzFdLHUpLFkoclsyXSx1KSxZKHJbM10scyksbz0yNTU7MDw9bzstLW8pcnIocix0LGU9bltvLzh8MF0+Pig3Jm8pJjEpLCQodCxyKSwkKHIscikscnIocix0LGUpfWZ1bmN0aW9uIGVyKHIsdCl7dmFyIG49W3YoKSx2KCksdigpLHYoKV07WShuWzBdLGUpLFkoblsxXSxhKSxZKG5bMl0sdSksRihuWzNdLGUsYSksbnIocixuLHQpfWZ1bmN0aW9uIG9yKHIsdCxuKXt2YXIgZSxvPW5ldyBVaW50OEFycmF5KDY0KSxpPVt2KCksdigpLHYoKSx2KCldO2ZvcihufHxoKHQsMzIpLFcobyx0LDMyKSxvWzBdJj0yNDgsb1szMV0mPTEyNyxvWzMxXXw9NjQsZXIoaSxvKSx0cihyLGkpLGU9MDtlPDMyO2UrKyl0W2UrMzJdPXJbZV07cmV0dXJuIDB9dmFyIGlyPW5ldyBGbG9hdDY0QXJyYXkoWzIzNywyMTEsMjQ1LDkyLDI2LDk5LDE4LDg4LDIxNCwxNTYsMjQ3LDE2MiwyMjIsMjQ5LDIyMiwyMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxNl0pO2Z1bmN0aW9uIGhyKHIsdCl7dmFyIG4sZSxvLGk7Zm9yKGU9NjM7MzI8PWU7LS1lKXtmb3Iobj0wLG89ZS0zMixpPWUtMTI7bzxpOysrbyl0W29dKz1uLTE2KnRbZV0qaXJbby0oZS0zMildLG49TWF0aC5mbG9vcigodFtvXSsxMjgpLzI1NiksdFtvXS09MjU2Km47dFtvXSs9bix0W2VdPTB9Zm9yKG89bj0wO288MzI7bysrKXRbb10rPW4tKHRbMzFdPj40KSppcltvXSxuPXRbb10+PjgsdFtvXSY9MjU1O2ZvcihvPTA7bzwzMjtvKyspdFtvXS09bippcltvXTtmb3IoZT0wO2U8MzI7ZSsrKXRbZSsxXSs9dFtlXT4+OCxyW2VdPTI1NSZ0W2VdfWZ1bmN0aW9uIGFyKHIpe3ZhciB0LG49bmV3IEZsb2F0NjRBcnJheSg2NCk7Zm9yKHQ9MDt0PDY0O3QrKyluW3RdPXJbdF07Zm9yKHQ9MDt0PDY0O3QrKylyW3RdPTA7aHIocixuKX1mdW5jdGlvbiBmcihyLHQsbixlKXt2YXIgbyxpLGg9bmV3IFVpbnQ4QXJyYXkoNjQpLGE9bmV3IFVpbnQ4QXJyYXkoNjQpLGY9bmV3IFVpbnQ4QXJyYXkoNjQpLHM9bmV3IEZsb2F0NjRBcnJheSg2NCksdT1bdigpLHYoKSx2KCksdigpXTtXKGgsZSwzMiksaFswXSY9MjQ4LGhbMzFdJj0xMjcsaFszMV18PTY0O3ZhciBjPW4rNjQ7Zm9yKG89MDtvPG47bysrKXJbNjQrb109dFtvXTtmb3Iobz0wO288MzI7bysrKXJbMzIrb109aFszMitvXTtmb3IoVyhmLHIuc3ViYXJyYXkoMzIpLG4rMzIpLGFyKGYpLGVyKHUsZiksdHIocix1KSxvPTMyO288NjQ7bysrKXJbb109ZVtvXTtmb3IoVyhhLHIsbis2NCksYXIoYSksbz0wO288NjQ7bysrKXNbb109MDtmb3Iobz0wO288MzI7bysrKXNbb109ZltvXTtmb3Iobz0wO288MzI7bysrKWZvcihpPTA7aTwzMjtpKyspc1tvK2ldKz1hW29dKmhbaV07cmV0dXJuIGhyKHIuc3ViYXJyYXkoMzIpLHMpLGN9ZnVuY3Rpb24gc3Iocix0LG4sZSl7dmFyIG8saT1uZXcgVWludDhBcnJheSgzMiksaD1uZXcgVWludDhBcnJheSg2NCksYT1bdigpLHYoKSx2KCksdigpXSxmPVt2KCksdigpLHYoKSx2KCldO2lmKG48NjQpcmV0dXJuLTE7aWYoZnVuY3Rpb24ocix0KXt2YXIgbj12KCksZT12KCksbz12KCksaT12KCksaD12KCksYT12KCksZj12KCk7aWYoWShyWzJdLHUpLE4oclsxXSx0KSxJKG8sclsxXSksRihpLG8sYyksQyhvLG8sclsyXSksTyhpLHJbMl0saSksSShoLGkpLEkoYSxoKSxGKGYsYSxoKSxGKG4sZixvKSxGKG4sbixpKSxHKG4sbiksRihuLG4sbyksRihuLG4saSksRihuLG4saSksRihyWzBdLG4saSksSShlLHJbMF0pLEYoZSxlLGkpLFIoZSxvKSYmRihyWzBdLHJbMF0sbCksSShlLHJbMF0pLEYoZSxlLGkpLFIoZSxvKSlyZXR1cm4gMTtQKHJbMF0pPT09dFszMV0+PjcmJkMoclswXSxzLHJbMF0pLEYoclszXSxyWzBdLHJbMV0pfShmLGUpKXJldHVybi0xO2ZvcihvPTA7bzxuO28rKylyW29dPXRbb107Zm9yKG89MDtvPDMyO28rKylyW28rMzJdPWVbb107aWYoVyhoLHIsbiksYXIoaCksbnIoYSxmLGgpLGVyKGYsdC5zdWJhcnJheSgzMikpLCQoYSxmKSx0cihpLGEpLG4tPTY0LGcodCwwLGksMCkpe2ZvcihvPTA7bzxuO28rKylyW29dPTA7cmV0dXJuLTF9Zm9yKG89MDtvPG47bysrKXJbb109dFtvKzY0XTtyZXR1cm4gbn1mdW5jdGlvbiB1cihyLHQpe2lmKDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQga2V5IHNpemUiKTtpZigyNCE9PXQubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG5vbmNlIHNpemUiKX1mdW5jdGlvbiBjcigpe2Zvcih2YXIgcj0wO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspaWYoIShhcmd1bWVudHNbcl1pbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKXRocm93IG5ldyBUeXBlRXJyb3IoInVuZXhwZWN0ZWQgdHlwZSwgdXNlIFVpbnQ4QXJyYXkiKX1mdW5jdGlvbiB5cihyKXtmb3IodmFyIHQ9MDt0PHIubGVuZ3RoO3QrKylyW3RdPTB9aS5sb3dsZXZlbD17Y3J5cHRvX2NvcmVfaHNhbHNhMjA6XyxjcnlwdG9fc3RyZWFtX3hvcjpNLGNyeXB0b19zdHJlYW06eCxjcnlwdG9fc3RyZWFtX3NhbHNhMjBfeG9yOmQsY3J5cHRvX3N0cmVhbV9zYWxzYTIwOkUsY3J5cHRvX29uZXRpbWVhdXRoOkIsY3J5cHRvX29uZXRpbWVhdXRoX3ZlcmlmeTpTLGNyeXB0b192ZXJpZnlfMTY6YixjcnlwdG9fdmVyaWZ5XzMyOmcsY3J5cHRvX3NlY3JldGJveDprLGNyeXB0b19zZWNyZXRib3hfb3BlbjpLLGNyeXB0b19zY2FsYXJtdWx0OnEsY3J5cHRvX3NjYWxhcm11bHRfYmFzZTpELGNyeXB0b19ib3hfYmVmb3Jlbm06WCxjcnlwdG9fYm94X2FmdGVybm06aixjcnlwdG9fYm94OmZ1bmN0aW9uKHIsdCxuLGUsbyxpKXt2YXIgaD1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIFgoaCxvLGkpLGoocix0LG4sZSxoKX0sY3J5cHRvX2JveF9vcGVuOmZ1bmN0aW9uKHIsdCxuLGUsbyxpKXt2YXIgaD1uZXcgVWludDhBcnJheSgzMik7cmV0dXJuIFgoaCxvLGkpLEgocix0LG4sZSxoKX0sY3J5cHRvX2JveF9rZXlwYWlyOlYsY3J5cHRvX2hhc2g6VyxjcnlwdG9fc2lnbjpmcixjcnlwdG9fc2lnbl9rZXlwYWlyOm9yLGNyeXB0b19zaWduX29wZW46c3IsY3J5cHRvX3NlY3JldGJveF9LRVlCWVRFUzozMixjcnlwdG9fc2VjcmV0Ym94X05PTkNFQllURVM6MjQsY3J5cHRvX3NlY3JldGJveF9aRVJPQllURVM6MzIsY3J5cHRvX3NlY3JldGJveF9CT1haRVJPQllURVM6MTYsY3J5cHRvX3NjYWxhcm11bHRfQllURVM6MzIsY3J5cHRvX3NjYWxhcm11bHRfU0NBTEFSQllURVM6MzIsY3J5cHRvX2JveF9QVUJMSUNLRVlCWVRFUzozMixjcnlwdG9fYm94X1NFQ1JFVEtFWUJZVEVTOjMyLGNyeXB0b19ib3hfQkVGT1JFTk1CWVRFUzozMixjcnlwdG9fYm94X05PTkNFQllURVM6MjQsY3J5cHRvX2JveF9aRVJPQllURVM6MzIsY3J5cHRvX2JveF9CT1haRVJPQllURVM6MTYsY3J5cHRvX3NpZ25fQllURVM6NjQsY3J5cHRvX3NpZ25fUFVCTElDS0VZQllURVM6MzIsY3J5cHRvX3NpZ25fU0VDUkVUS0VZQllURVM6NjQsY3J5cHRvX3NpZ25fU0VFREJZVEVTOjMyLGNyeXB0b19oYXNoX0JZVEVTOjY0LGdmOnYsRDpjLEw6aXIscGFjazI1NTE5OnosdW5wYWNrMjU1MTk6TixNOkYsQTpPLFM6SSxaOkMscG93MjUyMzpHLGFkZDokLHNldDI1NTE5OlksbW9kTDpocixzY2FsYXJtdWx0Om5yLHNjYWxhcmJhc2U6ZXJ9LGkucmFuZG9tQnl0ZXM9ZnVuY3Rpb24ocil7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkocik7cmV0dXJuIGgodCxyKSx0fSxpLnNlY3JldGJveD1mdW5jdGlvbihyLHQsbil7Y3Iocix0LG4pLHVyKG4sdCk7Zm9yKHZhciBlPW5ldyBVaW50OEFycmF5KDMyK3IubGVuZ3RoKSxvPW5ldyBVaW50OEFycmF5KGUubGVuZ3RoKSxpPTA7aTxyLmxlbmd0aDtpKyspZVtpKzMyXT1yW2ldO3JldHVybiBrKG8sZSxlLmxlbmd0aCx0LG4pLG8uc3ViYXJyYXkoMTYpfSxpLnNlY3JldGJveC5vcGVuPWZ1bmN0aW9uKHIsdCxuKXtjcihyLHQsbiksdXIobix0KTtmb3IodmFyIGU9bmV3IFVpbnQ4QXJyYXkoMTYrci5sZW5ndGgpLG89bmV3IFVpbnQ4QXJyYXkoZS5sZW5ndGgpLGk9MDtpPHIubGVuZ3RoO2krKyllW2krMTZdPXJbaV07cmV0dXJuIGUubGVuZ3RoPDMyfHwwIT09SyhvLGUsZS5sZW5ndGgsdCxuKT9udWxsOm8uc3ViYXJyYXkoMzIpfSxpLnNlY3JldGJveC5rZXlMZW5ndGg9MzIsaS5zZWNyZXRib3gubm9uY2VMZW5ndGg9MjQsaS5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGg9MTYsaS5zY2FsYXJNdWx0PWZ1bmN0aW9uKHIsdCl7aWYoY3Iocix0KSwzMiE9PXIubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG4gc2l6ZSIpO2lmKDMyIT09dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgcCBzaXplIik7dmFyIG49bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBxKG4scix0KSxufSxpLnNjYWxhck11bHQuYmFzZT1mdW5jdGlvbihyKXtpZihjcihyKSwzMiE9PXIubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIG4gc2l6ZSIpO3ZhciB0PW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4gRCh0LHIpLHR9LGkuc2NhbGFyTXVsdC5zY2FsYXJMZW5ndGg9MzIsaS5zY2FsYXJNdWx0Lmdyb3VwRWxlbWVudExlbmd0aD0zMixpLmJveD1mdW5jdGlvbihyLHQsbixlKXt2YXIgbz1pLmJveC5iZWZvcmUobixlKTtyZXR1cm4gaS5zZWNyZXRib3gocix0LG8pfSxpLmJveC5iZWZvcmU9ZnVuY3Rpb24ocix0KXtjcihyLHQpLGZ1bmN0aW9uKHIsdCl7aWYoMzIhPT1yLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBwdWJsaWMga2V5IHNpemUiKTtpZigzMiE9PXQubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIHNlY3JldCBrZXkgc2l6ZSIpfShyLHQpO3ZhciBuPW5ldyBVaW50OEFycmF5KDMyKTtyZXR1cm4gWChuLHIsdCksbn0saS5ib3guYWZ0ZXI9aS5zZWNyZXRib3gsaS5ib3gub3Blbj1mdW5jdGlvbihyLHQsbixlKXt2YXIgbz1pLmJveC5iZWZvcmUobixlKTtyZXR1cm4gaS5zZWNyZXRib3gub3BlbihyLHQsbyl9LGkuYm94Lm9wZW4uYWZ0ZXI9aS5zZWNyZXRib3gub3BlbixpLmJveC5rZXlQYWlyPWZ1bmN0aW9uKCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoMzIpLHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBWKHIsdCkse3B1YmxpY0tleTpyLHNlY3JldEtleTp0fX0saS5ib3gua2V5UGFpci5mcm9tU2VjcmV0S2V5PWZ1bmN0aW9uKHIpe2lmKGNyKHIpLDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2VjcmV0IGtleSBzaXplIik7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpO3JldHVybiBEKHQscikse3B1YmxpY0tleTp0LHNlY3JldEtleTpuZXcgVWludDhBcnJheShyKX19LGkuYm94LnB1YmxpY0tleUxlbmd0aD0zMixpLmJveC5zZWNyZXRLZXlMZW5ndGg9MzIsaS5ib3guc2hhcmVkS2V5TGVuZ3RoPTMyLGkuYm94Lm5vbmNlTGVuZ3RoPTI0LGkuYm94Lm92ZXJoZWFkTGVuZ3RoPWkuc2VjcmV0Ym94Lm92ZXJoZWFkTGVuZ3RoLGkuc2lnbj1mdW5jdGlvbihyLHQpe2lmKGNyKHIsdCksNjQhPT10Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBzZWNyZXQga2V5IHNpemUiKTt2YXIgbj1uZXcgVWludDhBcnJheSg2NCtyLmxlbmd0aCk7cmV0dXJuIGZyKG4scixyLmxlbmd0aCx0KSxufSxpLnNpZ24ub3Blbj1mdW5jdGlvbihyLHQpe2lmKGNyKHIsdCksMzIhPT10Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBwdWJsaWMga2V5IHNpemUiKTt2YXIgbj1uZXcgVWludDhBcnJheShyLmxlbmd0aCksZT1zcihuLHIsci5sZW5ndGgsdCk7aWYoZTwwKXJldHVybiBudWxsO2Zvcih2YXIgbz1uZXcgVWludDhBcnJheShlKSxpPTA7aTxvLmxlbmd0aDtpKyspb1tpXT1uW2ldO3JldHVybiBvfSxpLnNpZ24uZGV0YWNoZWQ9ZnVuY3Rpb24ocix0KXtmb3IodmFyIG49aS5zaWduKHIsdCksZT1uZXcgVWludDhBcnJheSg2NCksbz0wO288ZS5sZW5ndGg7bysrKWVbb109bltvXTtyZXR1cm4gZX0saS5zaWduLmRldGFjaGVkLnZlcmlmeT1mdW5jdGlvbihyLHQsbil7aWYoY3Iocix0LG4pLDY0IT09dC5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2lnbmF0dXJlIHNpemUiKTtpZigzMiE9PW4ubGVuZ3RoKXRocm93IG5ldyBFcnJvcigiYmFkIHB1YmxpYyBrZXkgc2l6ZSIpO3ZhciBlLG89bmV3IFVpbnQ4QXJyYXkoNjQrci5sZW5ndGgpLGk9bmV3IFVpbnQ4QXJyYXkoNjQrci5sZW5ndGgpO2ZvcihlPTA7ZTw2NDtlKyspb1tlXT10W2VdO2ZvcihlPTA7ZTxyLmxlbmd0aDtlKyspb1tlKzY0XT1yW2VdO3JldHVybiAwPD1zcihpLG8sby5sZW5ndGgsbil9LGkuc2lnbi5rZXlQYWlyPWZ1bmN0aW9uKCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoMzIpLHQ9bmV3IFVpbnQ4QXJyYXkoNjQpO3JldHVybiBvcihyLHQpLHtwdWJsaWNLZXk6cixzZWNyZXRLZXk6dH19LGkuc2lnbi5rZXlQYWlyLmZyb21TZWNyZXRLZXk9ZnVuY3Rpb24ocil7aWYoY3IociksNjQhPT1yLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJhZCBzZWNyZXQga2V5IHNpemUiKTtmb3IodmFyIHQ9bmV3IFVpbnQ4QXJyYXkoMzIpLG49MDtuPHQubGVuZ3RoO24rKyl0W25dPXJbMzIrbl07cmV0dXJue3B1YmxpY0tleTp0LHNlY3JldEtleTpuZXcgVWludDhBcnJheShyKX19LGkuc2lnbi5rZXlQYWlyLmZyb21TZWVkPWZ1bmN0aW9uKHIpe2lmKGNyKHIpLDMyIT09ci5sZW5ndGgpdGhyb3cgbmV3IEVycm9yKCJiYWQgc2VlZCBzaXplIik7Zm9yKHZhciB0PW5ldyBVaW50OEFycmF5KDMyKSxuPW5ldyBVaW50OEFycmF5KDY0KSxlPTA7ZTwzMjtlKyspbltlXT1yW2VdO3JldHVybiBvcih0LG4sITApLHtwdWJsaWNLZXk6dCxzZWNyZXRLZXk6bn19LGkuc2lnbi5wdWJsaWNLZXlMZW5ndGg9MzIsaS5zaWduLnNlY3JldEtleUxlbmd0aD02NCxpLnNpZ24uc2VlZExlbmd0aD0zMixpLnNpZ24uc2lnbmF0dXJlTGVuZ3RoPTY0LGkuaGFzaD1mdW5jdGlvbihyKXtjcihyKTt2YXIgdD1uZXcgVWludDhBcnJheSg2NCk7cmV0dXJuIFcodCxyLHIubGVuZ3RoKSx0fSxpLmhhc2guaGFzaExlbmd0aD02NCxpLnZlcmlmeT1mdW5jdGlvbihyLHQpe3JldHVybiBjcihyLHQpLDAhPT1yLmxlbmd0aCYmMCE9PXQubGVuZ3RoJiYoci5sZW5ndGg9PT10Lmxlbmd0aCYmMD09PXcociwwLHQsMCxyLmxlbmd0aCkpfSxpLnNldFBSTkc9ZnVuY3Rpb24ocil7aD1yfSxmdW5jdGlvbigpe3ZhciBvPSJ1bmRlZmluZWQiIT10eXBlb2Ygc2VsZj9zZWxmLmNyeXB0b3x8c2VsZi5tc0NyeXB0bzpudWxsO2lmKG8mJm8uZ2V0UmFuZG9tVmFsdWVzKXtpLnNldFBSTkcoZnVuY3Rpb24ocix0KXt2YXIgbixlPW5ldyBVaW50OEFycmF5KHQpO2ZvcihuPTA7bjx0O24rPTY1NTM2KW8uZ2V0UmFuZG9tVmFsdWVzKGUuc3ViYXJyYXkobixuK01hdGgubWluKHQtbiw2NTUzNikpKTtmb3Iobj0wO248dDtuKyspcltuXT1lW25dO3lyKGUpfSl9ZWxzZSJ1bmRlZmluZWQiIT10eXBlb2YgcmVxdWlyZSYmKG89cmVxdWlyZSgiY3J5cHRvIikpJiZvLnJhbmRvbUJ5dGVzJiZpLnNldFBSTkcoZnVuY3Rpb24ocix0KXt2YXIgbixlPW8ucmFuZG9tQnl0ZXModCk7Zm9yKG49MDtuPHQ7bisrKXJbbl09ZVtuXTt5cihlKX0pfSgpfSgidW5kZWZpbmVkIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM6c2VsZi5uYWNsPXNlbGYubmFjbHx8e30pOw==
`; // eslint-disable-line
const argon2bundled_base64 = `IWZ1bmN0aW9uKEEsSSl7Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzJiYib2JqZWN0Ij09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1JKCk6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sSSk6Im9iamVjdCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuYXJnb24yPUkoKTpBLmFyZ29uMj1JKCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuKCgpPT57dmFyIEEsSSxnPXs3NzM6KEEsSSxnKT0+e3ZhciBCLFE9InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmJiZ2b2lkIDAhPT1zZWxmLk1vZHVsZT9zZWxmLk1vZHVsZTp7fSxDPXt9O2ZvcihCIGluIFEpUS5oYXNPd25Qcm9wZXJ0eShCKSYmKENbQl09UVtCXSk7dmFyIEUsaSxvLEQsZT1bXTtFPSJvYmplY3QiPT10eXBlb2Ygd2luZG93LGk9ImZ1bmN0aW9uIj09dHlwZW9mIGltcG9ydFNjcmlwdHMsbz0ib2JqZWN0Ij09dHlwZW9mIHByb2Nlc3MmJiJvYmplY3QiPT10eXBlb2YgcHJvY2Vzcy52ZXJzaW9ucyYmInN0cmluZyI9PXR5cGVvZiBwcm9jZXNzLnZlcnNpb25zLm5vZGUsRD0hRSYmIW8mJiFpO3ZhciBuLHQsYSxyLHMseT0iIjtvPyh5PWk/Zyg5NjcpLmRpcm5hbWUoeSkrIi8iOiIvLyIsbj1mdW5jdGlvbihBLEkpe3JldHVybiByfHwocj1nKDE0NSkpLHN8fChzPWcoOTY3KSksQT1zLm5vcm1hbGl6ZShBKSxyLnJlYWRGaWxlU3luYyhBLEk/bnVsbDoidXRmOCIpfSxhPWZ1bmN0aW9uKEEpe3ZhciBJPW4oQSwhMCk7cmV0dXJuIEkuYnVmZmVyfHwoST1uZXcgVWludDhBcnJheShJKSksRyhJLmJ1ZmZlciksSX0scHJvY2Vzcy5hcmd2Lmxlbmd0aD4xJiZwcm9jZXNzLmFyZ3ZbMV0ucmVwbGFjZSgvXFwvZywiLyIpLGU9cHJvY2Vzcy5hcmd2LnNsaWNlKDIpLEEuZXhwb3J0cz1RLHByb2Nlc3Mub24oInVuY2F1Z2h0RXhjZXB0aW9uIiwoZnVuY3Rpb24oQSl7aWYoIShBIGluc3RhbmNlb2YgVikpdGhyb3cgQX0pKSxwcm9jZXNzLm9uKCJ1bmhhbmRsZWRSZWplY3Rpb24iLHUpLFEuaW5zcGVjdD1mdW5jdGlvbigpe3JldHVybiJbRW1zY3JpcHRlbiBNb2R1bGUgb2JqZWN0XSJ9KTpEPygidW5kZWZpbmVkIiE9dHlwZW9mIHJlYWQmJihuPWZ1bmN0aW9uKEEpe3JldHVybiByZWFkKEEpfSksYT1mdW5jdGlvbihBKXt2YXIgSTtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2YgcmVhZGJ1ZmZlcj9uZXcgVWludDhBcnJheShyZWFkYnVmZmVyKEEpKTooRygib2JqZWN0Ij09dHlwZW9mKEk9cmVhZChBLCJiaW5hcnkiKSkpLEkpfSwidW5kZWZpbmVkIiE9dHlwZW9mIHNjcmlwdEFyZ3M/ZT1zY3JpcHRBcmdzOnZvaWQgMCE9PWFyZ3VtZW50cyYmKGU9YXJndW1lbnRzKSwidW5kZWZpbmVkIiE9dHlwZW9mIHByaW50JiYoInVuZGVmaW5lZCI9PXR5cGVvZiBjb25zb2xlJiYoY29uc29sZT17fSksY29uc29sZS5sb2c9cHJpbnQsY29uc29sZS53YXJuPWNvbnNvbGUuZXJyb3I9InVuZGVmaW5lZCIhPXR5cGVvZiBwcmludEVycj9wcmludEVycjpwcmludCkpOihFfHxpKSYmKGk/eT1zZWxmLmxvY2F0aW9uLmhyZWY6InVuZGVmaW5lZCIhPXR5cGVvZiBkb2N1bWVudCYmZG9jdW1lbnQuY3VycmVudFNjcmlwdCYmKHk9ZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLHk9MCE9PXkuaW5kZXhPZigiYmxvYjoiKT95LnN1YnN0cigwLHkubGFzdEluZGV4T2YoIi8iKSsxKToiIixuPWZ1bmN0aW9uKEEpe3ZhciBJPW5ldyBYTUxIdHRwUmVxdWVzdDtyZXR1cm4gSS5vcGVuKCJHRVQiLEEsITEpLEkuc2VuZChudWxsKSxJLnJlc3BvbnNlVGV4dH0saSYmKGE9ZnVuY3Rpb24oQSl7dmFyIEk9bmV3IFhNTEh0dHBSZXF1ZXN0O3JldHVybiBJLm9wZW4oIkdFVCIsQSwhMSksSS5yZXNwb25zZVR5cGU9ImFycmF5YnVmZmVyIixJLnNlbmQobnVsbCksbmV3IFVpbnQ4QXJyYXkoSS5yZXNwb25zZSl9KSx0PWZ1bmN0aW9uKEEsSSxnKXt2YXIgQj1uZXcgWE1MSHR0cFJlcXVlc3Q7Qi5vcGVuKCJHRVQiLEEsITApLEIucmVzcG9uc2VUeXBlPSJhcnJheWJ1ZmZlciIsQi5vbmxvYWQ9ZnVuY3Rpb24oKXsyMDA9PUIuc3RhdHVzfHwwPT1CLnN0YXR1cyYmQi5yZXNwb25zZT9JKEIucmVzcG9uc2UpOmcoKX0sQi5vbmVycm9yPWcsQi5zZW5kKG51bGwpfSksUS5wcmludHx8Y29uc29sZS5sb2cuYmluZChjb25zb2xlKTt2YXIgRixjLHc9US5wcmludEVycnx8Y29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7Zm9yKEIgaW4gQylDLmhhc093blByb3BlcnR5KEIpJiYoUVtCXT1DW0JdKTtDPW51bGwsUS5hcmd1bWVudHMmJihlPVEuYXJndW1lbnRzKSxRLnRoaXNQcm9ncmFtJiZRLnRoaXNQcm9ncmFtLFEucXVpdCYmUS5xdWl0LFEud2FzbUJpbmFyeSYmKEY9US53YXNtQmluYXJ5KSxRLm5vRXhpdFJ1bnRpbWUsIm9iamVjdCIhPXR5cGVvZiBXZWJBc3NlbWJseSYmdSgibm8gbmF0aXZlIHdhc20gc3VwcG9ydCBkZXRlY3RlZCIpO3ZhciBoPSExO2Z1bmN0aW9uIEcoQSxJKXtBfHx1KCJBc3NlcnRpb24gZmFpbGVkOiAiK0kpfXZhciBOLFIsZj0idW5kZWZpbmVkIiE9dHlwZW9mIFRleHREZWNvZGVyP25ldyBUZXh0RGVjb2RlcigidXRmOCIpOnZvaWQgMDtmdW5jdGlvbiBVKEEpe049QSxRLkhFQVA4PW5ldyBJbnQ4QXJyYXkoQSksUS5IRUFQMTY9bmV3IEludDE2QXJyYXkoQSksUS5IRUFQMzI9bmV3IEludDMyQXJyYXkoQSksUS5IRUFQVTg9Uj1uZXcgVWludDhBcnJheShBKSxRLkhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KEEpLFEuSEVBUFUzMj1uZXcgVWludDMyQXJyYXkoQSksUS5IRUFQRjMyPW5ldyBGbG9hdDMyQXJyYXkoQSksUS5IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoQSl9US5JTklUSUFMX01FTU9SWTt2YXIgTSxZPVtdLFM9W10sSD1bXSxkPTAsaz1udWxsLEo9bnVsbDtmdW5jdGlvbiB1KEEpe3Rocm93IFEub25BYm9ydCYmUS5vbkFib3J0KEEpLHcoQSs9IiIpLGg9ITAsQT0iYWJvcnQoIitBKyIpLiBCdWlsZCB3aXRoIC1zIEFTU0VSVElPTlM9MSBmb3IgbW9yZSBpbmZvLiIsbmV3IFdlYkFzc2VtYmx5LlJ1bnRpbWVFcnJvcihBKX1mdW5jdGlvbiBwKEEpe3JldHVybiBBLnN0YXJ0c1dpdGgoImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKX1mdW5jdGlvbiBMKEEpe3JldHVybiBBLnN0YXJ0c1dpdGgoImZpbGU6Ly8iKX1RLnByZWxvYWRlZEltYWdlcz17fSxRLnByZWxvYWRlZEF1ZGlvcz17fTt2YXIgbCxLPSJhcmdvbjIud2FzbSI7ZnVuY3Rpb24gcShBKXt0cnl7aWYoQT09SyYmRilyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoRik7aWYoYSlyZXR1cm4gYShBKTt0aHJvdyJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCJ9Y2F0Y2goQSl7dShBKX19ZnVuY3Rpb24gYihBKXtmb3IoO0EubGVuZ3RoPjA7KXt2YXIgST1BLnNoaWZ0KCk7aWYoImZ1bmN0aW9uIiE9dHlwZW9mIEkpe3ZhciBnPUkuZnVuYzsibnVtYmVyIj09dHlwZW9mIGc/dm9pZCAwPT09SS5hcmc/TS5nZXQoZykoKTpNLmdldChnKShJLmFyZyk6Zyh2b2lkIDA9PT1JLmFyZz9udWxsOkkuYXJnKX1lbHNlIEkoUSl9fWZ1bmN0aW9uIHgoQSl7dHJ5e3JldHVybiBjLmdyb3coQS1OLmJ5dGVMZW5ndGgrNjU1MzU+Pj4xNiksVShjLmJ1ZmZlciksMX1jYXRjaChBKXt9fXAoSyl8fChsPUssSz1RLmxvY2F0ZUZpbGU/US5sb2NhdGVGaWxlKGwseSk6eStsKTt2YXIgbSxYPXthOmZ1bmN0aW9uKEEsSSxnKXtSLmNvcHlXaXRoaW4oQSxJLEkrZyl9LGI6ZnVuY3Rpb24oQSl7dmFyIEksZz1SLmxlbmd0aCxCPTIxNDc0MTgxMTI7aWYoKEE+Pj49MCk+QilyZXR1cm4hMTtmb3IodmFyIFE9MTtRPD00O1EqPTIpe3ZhciBDPWcqKDErLjIvUSk7aWYoQz1NYXRoLm1pbihDLEErMTAwNjYzMjk2KSx4KE1hdGgubWluKEIsKChJPU1hdGgubWF4KEEsQykpJTY1NTM2PjAmJihJKz02NTUzNi1JJTY1NTM2KSxJKSkpKXJldHVybiEwfXJldHVybiExfX0sVz0oZnVuY3Rpb24oKXt2YXIgQT17YTpYfTtmdW5jdGlvbiBJKEEsSSl7dmFyIGcsQj1BLmV4cG9ydHM7US5hc209QixVKChjPVEuYXNtLmMpLmJ1ZmZlciksTT1RLmFzbS5rLGc9US5hc20uZCxTLnVuc2hpZnQoZyksZnVuY3Rpb24oQSl7aWYoZC0tLFEubW9uaXRvclJ1bkRlcGVuZGVuY2llcyYmUS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzKGQpLDA9PWQmJihudWxsIT09ayYmKGNsZWFySW50ZXJ2YWwoayksaz1udWxsKSxKKSl7dmFyIEk9SjtKPW51bGwsSSgpfX0oKX1mdW5jdGlvbiBnKEEpe0koQS5pbnN0YW5jZSl9ZnVuY3Rpb24gQihJKXtyZXR1cm4gZnVuY3Rpb24oKXtpZighRiYmKEV8fGkpKXtpZigiZnVuY3Rpb24iPT10eXBlb2YgZmV0Y2gmJiFMKEspKXJldHVybiBmZXRjaChLLHtjcmVkZW50aWFsczoic2FtZS1vcmlnaW4ifSkudGhlbigoZnVuY3Rpb24oQSl7aWYoIUEub2spdGhyb3ciZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIitLKyInIjtyZXR1cm4gQS5hcnJheUJ1ZmZlcigpfSkpLmNhdGNoKChmdW5jdGlvbigpe3JldHVybiBxKEspfSkpO2lmKHQpcmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihBLEkpe3QoSywoZnVuY3Rpb24oSSl7QShuZXcgVWludDhBcnJheShJKSl9KSxJKX0pKX1yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gcShLKX0pKX0oKS50aGVuKChmdW5jdGlvbihJKXtyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoSSxBKX0pKS50aGVuKEksKGZ1bmN0aW9uKEEpe3coImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIrQSksdShBKX0pKX1pZihkKyssUS5tb25pdG9yUnVuRGVwZW5kZW5jaWVzJiZRLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoZCksUS5pbnN0YW50aWF0ZVdhc20pdHJ5e3JldHVybiBRLmluc3RhbnRpYXRlV2FzbShBLEkpfWNhdGNoKEEpe3JldHVybiB3KCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiK0EpLCExfUZ8fCJmdW5jdGlvbiIhPXR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ3x8cChLKXx8TChLKXx8ImZ1bmN0aW9uIiE9dHlwZW9mIGZldGNoP0IoZyk6ZmV0Y2goSyx7Y3JlZGVudGlhbHM6InNhbWUtb3JpZ2luIn0pLnRoZW4oKGZ1bmN0aW9uKEkpe3JldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhJLEEpLnRoZW4oZywoZnVuY3Rpb24oQSl7cmV0dXJuIHcoIndhc20gc3RyZWFtaW5nIGNvbXBpbGUgZmFpbGVkOiAiK0EpLHcoImZhbGxpbmcgYmFjayB0byBBcnJheUJ1ZmZlciBpbnN0YW50aWF0aW9uIiksQihnKX0pKX0pKX0oKSxRLl9fX3dhc21fY2FsbF9jdG9ycz1mdW5jdGlvbigpe3JldHVybihRLl9fX3dhc21fY2FsbF9jdG9ycz1RLmFzbS5kKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl9oYXNoPWZ1bmN0aW9uKCl7cmV0dXJuKFEuX2FyZ29uMl9oYXNoPVEuYXNtLmUpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fbWFsbG9jPWZ1bmN0aW9uKCl7cmV0dXJuKFc9US5fbWFsbG9jPVEuYXNtLmYpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0pLFQ9KFEuX2ZyZWU9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fZnJlZT1RLmFzbS5nKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl92ZXJpZnk9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX3ZlcmlmeT1RLmFzbS5oKS5hcHBseShudWxsLGFyZ3VtZW50cyl9LFEuX2FyZ29uMl9lcnJvcl9tZXNzYWdlPWZ1bmN0aW9uKCl7cmV0dXJuKFEuX2FyZ29uMl9lcnJvcl9tZXNzYWdlPVEuYXNtLmkpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fYXJnb24yX2VuY29kZWRsZW49ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX2VuY29kZWRsZW49US5hc20uaikuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxRLl9hcmdvbjJfaGFzaF9leHQ9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX2hhc2hfZXh0PVEuYXNtLmwpLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sUS5fYXJnb24yX3ZlcmlmeV9leHQ9ZnVuY3Rpb24oKXtyZXR1cm4oUS5fYXJnb24yX3ZlcmlmeV9leHQ9US5hc20ubSkuYXBwbHkobnVsbCxhcmd1bWVudHMpfSxRLnN0YWNrQWxsb2M9ZnVuY3Rpb24oKXtyZXR1cm4oVD1RLnN0YWNrQWxsb2M9US5hc20ubikuYXBwbHkobnVsbCxhcmd1bWVudHMpfSk7ZnVuY3Rpb24gVihBKXt0aGlzLm5hbWU9IkV4aXRTdGF0dXMiLHRoaXMubWVzc2FnZT0iUHJvZ3JhbSB0ZXJtaW5hdGVkIHdpdGggZXhpdCgiK0ErIikiLHRoaXMuc3RhdHVzPUF9ZnVuY3Rpb24gaihBKXtmdW5jdGlvbiBJKCl7bXx8KG09ITAsUS5jYWxsZWRSdW49ITAsaHx8KGIoUyksUS5vblJ1bnRpbWVJbml0aWFsaXplZCYmUS5vblJ1bnRpbWVJbml0aWFsaXplZCgpLGZ1bmN0aW9uKCl7aWYoUS5wb3N0UnVuKWZvcigiZnVuY3Rpb24iPT10eXBlb2YgUS5wb3N0UnVuJiYoUS5wb3N0UnVuPVtRLnBvc3RSdW5dKTtRLnBvc3RSdW4ubGVuZ3RoOylBPVEucG9zdFJ1bi5zaGlmdCgpLEgudW5zaGlmdChBKTt2YXIgQTtiKEgpfSgpKSl9QT1BfHxlLGQ+MHx8KGZ1bmN0aW9uKCl7aWYoUS5wcmVSdW4pZm9yKCJmdW5jdGlvbiI9PXR5cGVvZiBRLnByZVJ1biYmKFEucHJlUnVuPVtRLnByZVJ1bl0pO1EucHJlUnVuLmxlbmd0aDspQT1RLnByZVJ1bi5zaGlmdCgpLFkudW5zaGlmdChBKTt2YXIgQTtiKFkpfSgpLGQ+MHx8KFEuc2V0U3RhdHVzPyhRLnNldFN0YXR1cygiUnVubmluZy4uLiIpLHNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7c2V0VGltZW91dCgoZnVuY3Rpb24oKXtRLnNldFN0YXR1cygiIil9KSwxKSxJKCl9KSwxKSk6SSgpKSl9aWYoUS5hbGxvY2F0ZT1mdW5jdGlvbihBLEkpe3ZhciBnO3JldHVybiBnPTE9PUk/VChBLmxlbmd0aCk6VyhBLmxlbmd0aCksQS5zdWJhcnJheXx8QS5zbGljZT9SLnNldChBLGcpOlIuc2V0KG5ldyBVaW50OEFycmF5KEEpLGcpLGd9LFEuVVRGOFRvU3RyaW5nPWZ1bmN0aW9uKEEsSSl7cmV0dXJuIEE/ZnVuY3Rpb24oQSxJLGcpe2Zvcih2YXIgQj1JK2csUT1JO0FbUV0mJiEoUT49Qik7KSsrUTtpZihRLUk+MTYmJkEuc3ViYXJyYXkmJmYpcmV0dXJuIGYuZGVjb2RlKEEuc3ViYXJyYXkoSSxRKSk7Zm9yKHZhciBDPSIiO0k8UTspe3ZhciBFPUFbSSsrXTtpZigxMjgmRSl7dmFyIGk9NjMmQVtJKytdO2lmKDE5MiE9KDIyNCZFKSl7dmFyIG89NjMmQVtJKytdO2lmKChFPTIyND09KDI0MCZFKT8oMTUmRSk8PDEyfGk8PDZ8bzooNyZFKTw8MTh8aTw8MTJ8bzw8Nnw2MyZBW0krK10pPDY1NTM2KUMrPVN0cmluZy5mcm9tQ2hhckNvZGUoRSk7ZWxzZXt2YXIgRD1FLTY1NTM2O0MrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8RD4+MTAsNTYzMjB8MTAyMyZEKX19ZWxzZSBDKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCgzMSZFKTw8NnxpKX1lbHNlIEMrPVN0cmluZy5mcm9tQ2hhckNvZGUoRSl9cmV0dXJuIEN9KFIsQSxJKToiIn0sUS5BTExPQ19OT1JNQUw9MCxKPWZ1bmN0aW9uIEEoKXttfHxqKCksbXx8KEo9QSl9LFEucnVuPWosUS5wcmVJbml0KWZvcigiZnVuY3Rpb24iPT10eXBlb2YgUS5wcmVJbml0JiYoUS5wcmVJbml0PVtRLnByZUluaXRdKTtRLnByZUluaXQubGVuZ3RoPjA7KVEucHJlSW5pdC5wb3AoKSgpO2ooKSxBLmV4cG9ydHM9USxRLnVubG9hZFJ1bnRpbWU9ZnVuY3Rpb24oKXsidW5kZWZpbmVkIiE9dHlwZW9mIHNlbGYmJmRlbGV0ZSBzZWxmLk1vZHVsZSxRPWM9TT1OPVI9dm9pZCAwLGRlbGV0ZSBBLmV4cG9ydHN9fSw2MzE6ZnVuY3Rpb24oQSxJLGcpe3ZhciBCLFE7InVuZGVmaW5lZCIhPXR5cGVvZiBzZWxmJiZzZWxmLHZvaWQgMD09PShRPSJmdW5jdGlvbiI9PXR5cGVvZihCPWZ1bmN0aW9uKCl7Y29uc3QgQT0idW5kZWZpbmVkIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLEk9e0FyZ29uMmQ6MCxBcmdvbjJpOjEsQXJnb24yaWQ6Mn07ZnVuY3Rpb24gQihJKXtpZihCLl9wcm9taXNlKXJldHVybiBCLl9wcm9taXNlO2lmKEIuX21vZHVsZSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEIuX21vZHVsZSk7bGV0IEM7cmV0dXJuIEM9QS5wcm9jZXNzJiZBLnByb2Nlc3MudmVyc2lvbnMmJkEucHJvY2Vzcy52ZXJzaW9ucy5ub2RlP1EoKS50aGVuKChBPT5uZXcgUHJvbWlzZSgoST0+e0EucG9zdFJ1bj0oKT0+SShBKX0pKSkpOihBLmxvYWRBcmdvbjJXYXNtQmluYXJ5P0EubG9hZEFyZ29uMldhc21CaW5hcnkoKTpQcm9taXNlLnJlc29sdmUoZyg3MjEpKS50aGVuKChBPT5mdW5jdGlvbihBKXtjb25zdCBJPWF0b2IoQSksZz1uZXcgVWludDhBcnJheShuZXcgQXJyYXlCdWZmZXIoSS5sZW5ndGgpKTtmb3IobGV0IEE9MDtBPEkubGVuZ3RoO0ErKylnW0FdPUkuY2hhckNvZGVBdChBKTtyZXR1cm4gZ30oQSkpKSkudGhlbigoZz0+ZnVuY3Rpb24oSSxnKXtyZXR1cm4gbmV3IFByb21pc2UoKEI9PihBLk1vZHVsZT17d2FzbUJpbmFyeTpJLHdhc21NZW1vcnk6Zyxwb3N0UnVuKCl7QihNb2R1bGUpfX0sUSgpKSkpfShnLEk/ZnVuY3Rpb24oQSl7Y29uc3QgST0xMDI0LGc9NjQqSSxCPSgxMDI0KkkqMTAyNCoyLTY0KkkpL2csUT1NYXRoLm1pbihNYXRoLm1heChNYXRoLmNlaWwoQSpJL2cpLDI1NikrMjU2LEIpO3JldHVybiBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHtpbml0aWFsOlEsbWF4aW11bTpCfSl9KEkpOnZvaWQgMCkpKSxCLl9wcm9taXNlPUMsQy50aGVuKChBPT4oQi5fbW9kdWxlPUEsZGVsZXRlIEIuX3Byb21pc2UsQSkpKX1mdW5jdGlvbiBRKCl7cmV0dXJuIEEubG9hZEFyZ29uMldhc21Nb2R1bGU/QS5sb2FkQXJnb24yV2FzbU1vZHVsZSgpOlByb21pc2UucmVzb2x2ZShnKDc3MykpfWZ1bmN0aW9uIEMoQSxJKXtyZXR1cm4gQS5hbGxvY2F0ZShJLCJpOCIsQS5BTExPQ19OT1JNQUwpfWZ1bmN0aW9uIEUoQSxJKXtyZXR1cm4gQyhBLG5ldyBVaW50OEFycmF5KFsuLi5JLDBdKSl9ZnVuY3Rpb24gaShBKXtpZigic3RyaW5nIiE9dHlwZW9mIEEpcmV0dXJuIEE7aWYoImZ1bmN0aW9uIj09dHlwZW9mIFRleHRFbmNvZGVyKXJldHVybihuZXcgVGV4dEVuY29kZXIpLmVuY29kZShBKTtpZigiZnVuY3Rpb24iPT10eXBlb2YgQnVmZmVyKXJldHVybiBCdWZmZXIuZnJvbShBKTt0aHJvdyBuZXcgRXJyb3IoIkRvbid0IGtub3cgaG93IHRvIGVuY29kZSBVVEY4Iil9cmV0dXJue0FyZ29uVHlwZTpJLGhhc2g6ZnVuY3Rpb24oQSl7Y29uc3QgZz1BLm1lbXx8MTAyNDtyZXR1cm4gQihnKS50aGVuKChCPT57Y29uc3QgUT1BLnRpbWV8fDEsbz1BLnBhcmFsbGVsaXNtfHwxLEQ9aShBLnBhc3MpLGU9RShCLEQpLG49RC5sZW5ndGgsdD1pKEEuc2FsdCksYT1FKEIsdCkscj10Lmxlbmd0aCxzPUEudHlwZXx8SS5BcmdvbjJkLHk9Qi5hbGxvY2F0ZShuZXcgQXJyYXkoQS5oYXNoTGVufHwyNCksImk4IixCLkFMTE9DX05PUk1BTCksRj1BLnNlY3JldD9DKEIsQS5zZWNyZXQpOjAsYz1BLnNlY3JldD9BLnNlY3JldC5ieXRlTGVuZ3RoOjAsdz1BLmFkP0MoQixBLmFkKTowLGg9QS5hZD9BLmFkLmJ5dGVMZW5ndGg6MCxHPUEuaGFzaExlbnx8MjQsTj1CLl9hcmdvbjJfZW5jb2RlZGxlbihRLGcsbyxyLEcscyksUj1CLmFsbG9jYXRlKG5ldyBBcnJheShOKzEpLCJpOCIsQi5BTExPQ19OT1JNQUwpO2xldCBmLFUsTTt0cnl7VT1CLl9hcmdvbjJfaGFzaF9leHQoUSxnLG8sZSxuLGEscix5LEcsUixOLHMsRixjLHcsaCwxOSl9Y2F0Y2goQSl7Zj1BfWlmKDAhPT1VfHxmKXt0cnl7Znx8KGY9Qi5VVEY4VG9TdHJpbmcoQi5fYXJnb24yX2Vycm9yX21lc3NhZ2UoVSkpKX1jYXRjaChBKXt9TT17bWVzc2FnZTpmLGNvZGU6VX19ZWxzZXtsZXQgQT0iIjtjb25zdCBJPW5ldyBVaW50OEFycmF5KEcpO2ZvcihsZXQgZz0wO2c8RztnKyspe2NvbnN0IFE9Qi5IRUFQOFt5K2ddO0lbZ109USxBKz0oIjAiKygyNTUmUSkudG9TdHJpbmcoMTYpKS5zbGljZSgtMil9TT17aGFzaDpJLGhhc2hIZXg6QSxlbmNvZGVkOkIuVVRGOFRvU3RyaW5nKFIpfX10cnl7Qi5fZnJlZShlKSxCLl9mcmVlKGEpLEIuX2ZyZWUoeSksQi5fZnJlZShSKSx3JiZCLl9mcmVlKHcpLEYmJkIuX2ZyZWUoRil9Y2F0Y2goQSl7fWlmKGYpdGhyb3cgTTtyZXR1cm4gTX0pKX0sdmVyaWZ5OmZ1bmN0aW9uKEEpe3JldHVybiBCKCkudGhlbigoZz0+e2NvbnN0IEI9aShBLnBhc3MpLFE9RShnLEIpLG89Qi5sZW5ndGgsRD1BLnNlY3JldD9DKGcsQS5zZWNyZXQpOjAsZT1BLnNlY3JldD9BLnNlY3JldC5ieXRlTGVuZ3RoOjAsbj1BLmFkP0MoZyxBLmFkKTowLHQ9QS5hZD9BLmFkLmJ5dGVMZW5ndGg6MCxhPUUoZyxpKEEuZW5jb2RlZCkpO2xldCByLHMseSxGPUEudHlwZTtpZih2b2lkIDA9PT1GKXtsZXQgZz1BLmVuY29kZWQuc3BsaXQoIiQiKVsxXTtnJiYoZz1nLnJlcGxhY2UoImEiLCJBIiksRj1JW2ddfHxJLkFyZ29uMmQpfXRyeXtzPWcuX2FyZ29uMl92ZXJpZnlfZXh0KGEsUSxvLEQsZSxuLHQsRil9Y2F0Y2goQSl7cj1BfWlmKHN8fHIpe3RyeXtyfHwocj1nLlVURjhUb1N0cmluZyhnLl9hcmdvbjJfZXJyb3JfbWVzc2FnZShzKSkpfWNhdGNoKEEpe315PXttZXNzYWdlOnIsY29kZTpzfX10cnl7Zy5fZnJlZShRKSxnLl9mcmVlKGEpfWNhdGNoKEEpe31pZihyKXRocm93IHk7cmV0dXJuIHl9KSl9LHVubG9hZFJ1bnRpbWU6ZnVuY3Rpb24oKXtCLl9tb2R1bGUmJihCLl9tb2R1bGUudW5sb2FkUnVudGltZSgpLGRlbGV0ZSBCLl9wcm9taXNlLGRlbGV0ZSBCLl9tb2R1bGUpfX19KT9CLmFwcGx5KEksW10pOkIpfHwoQS5leHBvcnRzPVEpfSw3MjE6ZnVuY3Rpb24oQSxJKXtBLmV4cG9ydHM9IkFHRnpiUUVBQUFBQmt3RVNZQU4vZjM4QmYyQUJmd0YvWUFKL2Z3QmdBbjkvQVg5Z0FYOEFZQVIvZjM5L0FYOWdBMzkvZndCZ0JIOS9mMzhBWUFKL2ZnQmdBbjUvQVg1Z0FuNStBWDVnQlg5L2YzOS9BR0FHZjN4L2YzOS9BWDlnQUFCZ0NIOS9mMzkvZjM5L0FYOWdFWDkvZjM5L2YzOS9mMzkvZjM5L2YzOS9BWDlnQm45L2YzOS9md0YvWUExL2YzOS9mMzkvZjM5L2YzOS9BWDhDRFFJQllRRmhBQUFCWVFGaUFBRURQRHNKQ2dJQUFBSUVBUUVBQVFzR0FRQUhBQUlCQXdJQ0F3SUlCUUVDQXdFSERRTUJCZ1FHQVFFRkJRRUFBQUlFQUFBSUFRQU9Ed1FRQVFVUkF3UUZBWEFCQXdNRkJ3RUJnQUwvL3dFR0NRRi9BVUdRbzhBQ0N3Y3hEQUZqQWdBQlpBQWhBV1VBT3dGbUFBa0Jad0FJQVdnQU9nRnBBRGtCYWdBNEFXc0JBQUZzQURZQmJRQTFBVzRBTXdrSUFRQkJBUXNDQ3pRS3diTUJPd2dBSUFBZ0FhMktDeDRBSUFBZ0FYd2dBRUlCaGtMKy8vLy9INE1nQVVMLy8vLy9ENE4rZkFzWEFFSHdIQ2dDQUVVZ0FFVnlSUVJBSUFBZ0FSQWRDd3VEQkFFRGZ5QUNRWUFFVHdSQUlBQWdBU0FDRUFBYUlBQVBDeUFBSUFKcUlRTUNRQ0FBSUFGelFRTnhSUVJBQWtBZ0FFRURjVVVFUUNBQUlRSU1BUXNnQWtFQlNBUkFJQUFoQWd3QkN5QUFJUUlEUUNBQ0lBRXRBQUE2QUFBZ0FVRUJhaUVCSUFKQkFXb2lBa0VEY1VVTkFTQUNJQU5KRFFBTEN3SkFJQU5CZkhFaUJFSEFBRWtOQUNBQ0lBUkJRR29pQlVzTkFBTkFJQUlnQVNnQ0FEWUNBQ0FDSUFFb0FnUTJBZ1FnQWlBQktBSUlOZ0lJSUFJZ0FTZ0NERFlDRENBQ0lBRW9BaEEyQWhBZ0FpQUJLQUlVTmdJVUlBSWdBU2dDR0RZQ0dDQUNJQUVvQWh3MkFod2dBaUFCS0FJZ05nSWdJQUlnQVNnQ0pEWUNKQ0FDSUFFb0FpZzJBaWdnQWlBQktBSXNOZ0lzSUFJZ0FTZ0NNRFlDTUNBQ0lBRW9BalEyQWpRZ0FpQUJLQUk0TmdJNElBSWdBU2dDUERZQ1BDQUJRVUJySVFFZ0FrRkFheUlDSUFWTkRRQUxDeUFDSUFSUERRRURRQ0FDSUFFb0FnQTJBZ0FnQVVFRWFpRUJJQUpCQkdvaUFpQUVTUTBBQ3d3QkN5QURRUVJKQkVBZ0FDRUNEQUVMSUFBZ0EwRUVheUlFU3dSQUlBQWhBZ3dCQ3lBQUlRSURRQ0FDSUFFdEFBQTZBQUFnQWlBQkxRQUJPZ0FCSUFJZ0FTMEFBam9BQWlBQ0lBRXRBQU02QUFNZ0FVRUVhaUVCSUFKQkJHb2lBaUFFVFEwQUN3c2dBaUFEU1FSQUEwQWdBaUFCTFFBQU9nQUFJQUZCQVdvaEFTQUNRUUZxSWdJZ0EwY05BQXNMSUFBTHp3RUJBMzhDUUNBQ1JRMEFRWDhoQXlBQVJTQUJSWElOQUNBQUtRTlFRZ0JTRFFBQ1FDQUFLQUxnQVNJRElBSnFRWUVCU1EwQUlBQkI0QUJxSWdVZ0Eyb2dBVUdBQVNBRGF5SUVFQVVhSUFCQ2dBRVFHaUFBSUFVUUdVRUFJUU1nQUVFQU5nTGdBU0FCSUFScUlRRWdBaUFFYXlJQ1FZRUJTUTBBQTBBZ0FFS0FBUkFhSUFBZ0FSQVpJQUZCZ0FGcUlRRWdBa0dBQVdzaUFrR0FBVXNOQUFzZ0FDZ0M0QUVoQXdzZ0FDQURha0hnQUdvZ0FTQUNFQVVhSUFBZ0FDZ0M0QUVnQW1vMkF1QUJRUUFoQXdzZ0F3c0pBQ0FBSUFFMkFBQUxwd3dCQjM4Q1FDQUFSUTBBSUFCQkNHc2lBeUFBUVFScktBSUFJZ0ZCZUhFaUFHb2hCUUpBSUFGQkFYRU5BQ0FCUVFOeFJRMEJJQU1nQXlnQ0FDSUJheUlEUWJBZktBSUFTUTBCSUFBZ0FXb2hBQ0FEUWJRZktBSUFSd1JBSUFGQi93Rk5CRUFnQXlnQ0NDSUNJQUZCQTNZaUJFRURkRUhJSDJwR0dpQUNJQU1vQWd3aUFVWUVRRUdnSDBHZ0h5Z0NBRUYrSUFSM2NUWUNBQXdEQ3lBQ0lBRTJBZ3dnQVNBQ05nSUlEQUlMSUFNb0FoZ2hCZ0pBSUFNZ0F5Z0NEQ0lCUndSQUlBTW9BZ2dpQWlBQk5nSU1JQUVnQWpZQ0NBd0JDd0pBSUFOQkZHb2lBaWdDQUNJRURRQWdBMEVRYWlJQ0tBSUFJZ1FOQUVFQUlRRU1BUXNEUUNBQ0lRY2dCQ0lCUVJScUlnSW9BZ0FpQkEwQUlBRkJFR29oQWlBQktBSVFJZ1FOQUFzZ0IwRUFOZ0lBQ3lBR1JRMEJBa0FnQXlBREtBSWNJZ0pCQW5SQjBDRnFJZ1FvQWdCR0JFQWdCQ0FCTmdJQUlBRU5BVUdrSDBHa0h5Z0NBRUYrSUFKM2NUWUNBQXdEQ3lBR1FSQkJGQ0FHS0FJUUlBTkdHMm9nQVRZQ0FDQUJSUTBDQ3lBQklBWTJBaGdnQXlnQ0VDSUNCRUFnQVNBQ05nSVFJQUlnQVRZQ0dBc2dBeWdDRkNJQ1JRMEJJQUVnQWpZQ0ZDQUNJQUUyQWhnTUFRc2dCU2dDQkNJQlFRTnhRUU5IRFFCQnFCOGdBRFlDQUNBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBOExJQU1nQlU4TkFDQUZLQUlFSWdGQkFYRkZEUUFDUUNBQlFRSnhSUVJBSUFWQnVCOG9BZ0JHQkVCQnVCOGdBellDQUVHc0gwR3NIeWdDQUNBQWFpSUFOZ0lBSUFNZ0FFRUJjallDQkNBRFFiUWZLQUlBUncwRFFhZ2ZRUUEyQWdCQnRCOUJBRFlDQUE4TElBVkJ0QjhvQWdCR0JFQkJ0QjhnQXpZQ0FFR29IMEdvSHlnQ0FDQUFhaUlBTmdJQUlBTWdBRUVCY2pZQ0JDQUFJQU5xSUFBMkFnQVBDeUFCUVhoeElBQnFJUUFDUUNBQlFmOEJUUVJBSUFVb0FnZ2lBaUFCUVFOMklnUkJBM1JCeUI5cVJob2dBaUFGS0FJTUlnRkdCRUJCb0I5Qm9COG9BZ0JCZmlBRWQzRTJBZ0FNQWdzZ0FpQUJOZ0lNSUFFZ0FqWUNDQXdCQ3lBRktBSVlJUVlDUUNBRklBVW9BZ3dpQVVjRVFDQUZLQUlJSWdKQnNCOG9BZ0JKR2lBQ0lBRTJBZ3dnQVNBQ05nSUlEQUVMQWtBZ0JVRVVhaUlDS0FJQUlnUU5BQ0FGUVJCcUlnSW9BZ0FpQkEwQVFRQWhBUXdCQ3dOQUlBSWhCeUFFSWdGQkZHb2lBaWdDQUNJRURRQWdBVUVRYWlFQ0lBRW9BaEFpQkEwQUN5QUhRUUEyQWdBTElBWkZEUUFDUUNBRklBVW9BaHdpQWtFQ2RFSFFJV29pQkNnQ0FFWUVRQ0FFSUFFMkFnQWdBUTBCUWFRZlFhUWZLQUlBUVg0Z0FuZHhOZ0lBREFJTElBWkJFRUVVSUFZb0FoQWdCVVliYWlBQk5nSUFJQUZGRFFFTElBRWdCallDR0NBRktBSVFJZ0lFUUNBQklBSTJBaEFnQWlBQk5nSVlDeUFGS0FJVUlnSkZEUUFnQVNBQ05nSVVJQUlnQVRZQ0dBc2dBeUFBUVFGeU5nSUVJQUFnQTJvZ0FEWUNBQ0FEUWJRZktBSUFSdzBCUWFnZklBQTJBZ0FQQ3lBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBc2dBRUgvQVUwRVFDQUFRUU4ySWdGQkEzUkJ5QjlxSVFBQ2YwR2dIeWdDQUNJQ1FRRWdBWFFpQVhGRkJFQkJvQjhnQVNBQ2NqWUNBQ0FBREFFTElBQW9BZ2dMSVFJZ0FDQUROZ0lJSUFJZ0F6WUNEQ0FESUFBMkFnd2dBeUFDTmdJSUR3dEJIeUVDSUFOQ0FEY0NFQ0FBUWYvLy93ZE5CRUFnQUVFSWRpSUJJQUZCZ1A0L2FrRVFka0VJY1NJQmRDSUNJQUpCZ09BZmFrRVFka0VFY1NJQ2RDSUVJQVJCZ0lBUGFrRVFka0VDY1NJRWRFRVBkaUFCSUFKeUlBUnlheUlCUVFGMElBQWdBVUVWYW5aQkFYRnlRUnhxSVFJTElBTWdBallDSENBQ1FRSjBRZEFoYWlFQkFrQUNRQUpBUWFRZktBSUFJZ1JCQVNBQ2RDSUhjVVVFUUVHa0h5QUVJQWR5TmdJQUlBRWdBellDQUNBRElBRTJBaGdNQVFzZ0FFRUFRUmtnQWtFQmRtc2dBa0VmUmh0MElRSWdBU2dDQUNFQkEwQWdBU0lFS0FJRVFYaHhJQUJHRFFJZ0FrRWRkaUVCSUFKQkFYUWhBaUFFSUFGQkJIRnFJZ2RCRUdvb0FnQWlBUTBBQ3lBSElBTTJBaEFnQXlBRU5nSVlDeUFESUFNMkFnd2dBeUFETmdJSURBRUxJQVFvQWdnaUFDQUROZ0lNSUFRZ0F6WUNDQ0FEUVFBMkFoZ2dBeUFFTmdJTUlBTWdBRFlDQ0F0QndCOUJ3QjhvQWdCQkFXc2lBRUYvSUFBYk5nSUFDd3VVTFFFTWZ5TUFRUkJySWd3a0FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUNBQVFmUUJUUVJBUWFBZktBSUFJZ1ZCRUNBQVFRdHFRWGh4SUFCQkMwa2JJZ2hCQTNZaUFuWWlBVUVEY1FSQUlBRkJmM05CQVhFZ0Ftb2lBMEVEZENJQlFkQWZhaWdDQUNJRVFRaHFJUUFDUUNBRUtBSUlJZ0lnQVVISUgyb2lBVVlFUUVHZ0h5QUZRWDRnQTNkeE5nSUFEQUVMSUFJZ0FUWUNEQ0FCSUFJMkFnZ0xJQVFnQTBFRGRDSUJRUU55TmdJRUlBRWdCR29pQVNBQktBSUVRUUZ5TmdJRURBMExJQWhCcUI4b0FnQWlDazBOQVNBQkJFQUNRRUVDSUFKMElnQkJBQ0FBYTNJZ0FTQUNkSEVpQUVFQUlBQnJjVUVCYXlJQUlBQkJESFpCRUhFaUFuWWlBVUVGZGtFSWNTSUFJQUp5SUFFZ0FIWWlBVUVDZGtFRWNTSUFjaUFCSUFCMklnRkJBWFpCQW5FaUFISWdBU0FBZGlJQlFRRjJRUUZ4SWdCeUlBRWdBSFpxSWdOQkEzUWlBRUhRSDJvb0FnQWlCQ2dDQ0NJQklBQkJ5QjlxSWdCR0JFQkJvQjhnQlVGK0lBTjNjU0lGTmdJQURBRUxJQUVnQURZQ0RDQUFJQUUyQWdnTElBUkJDR29oQUNBRUlBaEJBM0kyQWdRZ0JDQUlhaUlDSUFOQkEzUWlBU0FJYXlJRFFRRnlOZ0lFSUFFZ0JHb2dBellDQUNBS0JFQWdDa0VEZGlJQlFRTjBRY2dmYWlFSFFiUWZLQUlBSVFRQ2Z5QUZRUUVnQVhRaUFYRkZCRUJCb0I4Z0FTQUZjallDQUNBSERBRUxJQWNvQWdnTElRRWdCeUFFTmdJSUlBRWdCRFlDRENBRUlBYzJBZ3dnQkNBQk5nSUlDMEcwSHlBQ05nSUFRYWdmSUFNMkFnQU1EUXRCcEI4b0FnQWlCa1VOQVNBR1FRQWdCbXR4UVFGcklnQWdBRUVNZGtFUWNTSUNkaUlCUVFWMlFRaHhJZ0FnQW5JZ0FTQUFkaUlCUVFKMlFRUnhJZ0J5SUFFZ0FIWWlBVUVCZGtFQ2NTSUFjaUFCSUFCMklnRkJBWFpCQVhFaUFISWdBU0FBZG1wQkFuUkIwQ0ZxS0FJQUlnRW9BZ1JCZUhFZ0NHc2hBeUFCSVFJRFFBSkFJQUlvQWhBaUFFVUVRQ0FDS0FJVUlnQkZEUUVMSUFBb0FnUkJlSEVnQ0dzaUFpQURJQUlnQTBraUFoc2hBeUFBSUFFZ0Foc2hBU0FBSVFJTUFRc0xJQUVnQ0dvaUNTQUJUUTBDSUFFb0FoZ2hDeUFCSUFFb0Fnd2lCRWNFUUNBQktBSUlJZ0JCc0I4b0FnQkpHaUFBSUFRMkFnd2dCQ0FBTmdJSURBd0xJQUZCRkdvaUFpZ0NBQ0lBUlFSQUlBRW9BaEFpQUVVTkJDQUJRUkJxSVFJTEEwQWdBaUVISUFBaUJFRVVhaUlDS0FJQUlnQU5BQ0FFUVJCcUlRSWdCQ2dDRUNJQURRQUxJQWRCQURZQ0FBd0xDMEYvSVFnZ0FFRy9mMHNOQUNBQVFRdHFJZ0JCZUhFaENFR2tIeWdDQUNJSlJRMEFRUUFnQ0dzaEF3SkFBa0FDUUFKL1FRQWdDRUdBQWtrTkFCcEJIeUFJUWYvLy93ZExEUUFhSUFCQkNIWWlBQ0FBUVlEK1AycEJFSFpCQ0hFaUFuUWlBQ0FBUVlEZ0gycEJFSFpCQkhFaUFYUWlBQ0FBUVlDQUQycEJFSFpCQW5FaUFIUkJEM1lnQVNBQ2NpQUFjbXNpQUVFQmRDQUlJQUJCRldwMlFRRnhja0VjYWdzaUJVRUNkRUhRSVdvb0FnQWlBa1VFUUVFQUlRQU1BUXRCQUNFQUlBaEJBRUVaSUFWQkFYWnJJQVZCSDBZYmRDRUJBMEFDUUNBQ0tBSUVRWGh4SUFocklnY2dBMDhOQUNBQ0lRUWdCeUlERFFCQkFDRURJQUloQUF3REN5QUFJQUlvQWhRaUJ5QUhJQUlnQVVFZGRrRUVjV29vQWhBaUFrWWJJQUFnQnhzaEFDQUJRUUYwSVFFZ0FnMEFDd3NnQUNBRWNrVUVRRUVBSVFSQkFpQUZkQ0lBUVFBZ0FHdHlJQWx4SWdCRkRRTWdBRUVBSUFCcmNVRUJheUlBSUFCQkRIWkJFSEVpQW5ZaUFVRUZka0VJY1NJQUlBSnlJQUVnQUhZaUFVRUNka0VFY1NJQWNpQUJJQUIySWdGQkFYWkJBbkVpQUhJZ0FTQUFkaUlCUVFGMlFRRnhJZ0J5SUFFZ0FIWnFRUUowUWRBaGFpZ0NBQ0VBQ3lBQVJRMEJDd05BSUFBb0FnUkJlSEVnQ0dzaUFTQURTU0VDSUFFZ0F5QUNHeUVESUFBZ0JDQUNHeUVFSUFBb0FoQWlBUVIvSUFFRklBQW9BaFFMSWdBTkFBc0xJQVJGRFFBZ0EwR29IeWdDQUNBSWEwOE5BQ0FFSUFocUlnWWdCRTBOQVNBRUtBSVlJUVVnQkNBRUtBSU1JZ0ZIQkVBZ0JDZ0NDQ0lBUWJBZktBSUFTUm9nQUNBQk5nSU1JQUVnQURZQ0NBd0tDeUFFUVJScUlnSW9BZ0FpQUVVRVFDQUVLQUlRSWdCRkRRUWdCRUVRYWlFQ0N3TkFJQUloQnlBQUlnRkJGR29pQWlnQ0FDSUFEUUFnQVVFUWFpRUNJQUVvQWhBaUFBMEFDeUFIUVFBMkFnQU1DUXNnQ0VHb0h5Z0NBQ0lDVFFSQVFiUWZLQUlBSVFNQ1FDQUNJQWhySWdGQkVFOEVRRUdvSHlBQk5nSUFRYlFmSUFNZ0NHb2lBRFlDQUNBQUlBRkJBWEkyQWdRZ0FpQURhaUFCTmdJQUlBTWdDRUVEY2pZQ0JBd0JDMEcwSDBFQU5nSUFRYWdmUVFBMkFnQWdBeUFDUVFOeU5nSUVJQUlnQTJvaUFDQUFLQUlFUVFGeU5nSUVDeUFEUVFocUlRQU1Dd3NnQ0VHc0h5Z0NBQ0lHU1FSQVFhd2ZJQVlnQ0dzaUFUWUNBRUc0SDBHNEh5Z0NBQ0lDSUFocUlnQTJBZ0FnQUNBQlFRRnlOZ0lFSUFJZ0NFRURjallDQkNBQ1FRaHFJUUFNQ3d0QkFDRUFJQWhCTDJvaUNRSi9RZmdpS0FJQUJFQkJnQ01vQWdBTUFRdEJoQ05DZnpjQ0FFSDhJa0tBb0lDQWdJQUVOd0lBUWZnaUlBeEJER3BCY0hGQjJLclZxZ1Z6TmdJQVFZd2pRUUEyQWdCQjNDSkJBRFlDQUVHQUlBc2lBV29pQlVFQUlBRnJJZ2R4SWdJZ0NFME5Da0hZSWlnQ0FDSUVCRUJCMENJb0FnQWlBeUFDYWlJQklBTk5JQUVnQkV0eURRc0xRZHdpTFFBQVFRUnhEUVVDUUFKQVFiZ2ZLQUlBSWdNRVFFSGdJaUVBQTBBZ0F5QUFLQUlBSWdGUEJFQWdBU0FBS0FJRWFpQURTdzBEQ3lBQUtBSUlJZ0FOQUFzTFFRQVFEQ0lCUVg5R0RRWWdBaUVGUWZ3aUtBSUFJZ05CQVdzaUFDQUJjUVJBSUFJZ0FXc2dBQ0FCYWtFQUlBTnJjV29oQlFzZ0JTQUlUU0FGUWY3Ly8vOEhTM0lOQmtIWUlpZ0NBQ0lFQkVCQjBDSW9BZ0FpQXlBRmFpSUFJQU5OSUFBZ0JFdHlEUWNMSUFVUURDSUFJQUZIRFFFTUNBc2dCU0FHYXlBSGNTSUZRZjcvLy84SFN3MEZJQVVRRENJQklBQW9BZ0FnQUNnQ0JHcEdEUVFnQVNFQUN5QUFRWDlHSUFoQk1Hb2dCVTF5UlFSQVFZQWpLQUlBSWdFZ0NTQUZhMnBCQUNBQmEzRWlBVUgrLy8vL0Iwc0VRQ0FBSVFFTUNBc2dBUkFNUVg5SEJFQWdBU0FGYWlFRklBQWhBUXdJQzBFQUlBVnJFQXdhREFVTElBQWlBVUYvUncwR0RBUUxBQXRCQUNFRURBY0xRUUFoQVF3RkN5QUJRWDlIRFFJTFFkd2lRZHdpS0FJQVFRUnlOZ0lBQ3lBQ1FmNy8vLzhIU3cwQklBSVFEQ0lCUVg5R1FRQVFEQ0lBUVg5R2NpQUFJQUZOY2cwQklBQWdBV3NpQlNBSVFTaHFUUTBCQzBIUUlrSFFJaWdDQUNBRmFpSUFOZ0lBUWRRaUtBSUFJQUJKQkVCQjFDSWdBRFlDQUFzQ1FBSkFBa0JCdUI4b0FnQWlCd1JBUWVBaUlRQURRQ0FCSUFBb0FnQWlBeUFBS0FJRUlnSnFSZzBDSUFBb0FnZ2lBQTBBQ3d3Q0MwR3dIeWdDQUNJQVFRQWdBQ0FCVFJ0RkJFQkJzQjhnQVRZQ0FBdEJBQ0VBUWVRaUlBVTJBZ0JCNENJZ0FUWUNBRUhBSDBGL05nSUFRY1FmUWZnaUtBSUFOZ0lBUWV3aVFRQTJBZ0FEUUNBQVFRTjBJZ05CMEI5cUlBTkJ5QjlxSWdJMkFnQWdBMEhVSDJvZ0FqWUNBQ0FBUVFGcUlnQkJJRWNOQUF0QnJCOGdCVUVvYXlJRFFYZ2dBV3RCQjNGQkFDQUJRUWhxUVFkeEd5SUFheUlDTmdJQVFiZ2ZJQUFnQVdvaUFEWUNBQ0FBSUFKQkFYSTJBZ1FnQVNBRGFrRW9OZ0lFUWJ3ZlFZZ2pLQUlBTmdJQURBSUxJQUF0QUF4QkNIRWdBeUFIUzNJZ0FTQUhUWElOQUNBQUlBSWdCV28yQWdSQnVCOGdCMEY0SUFkclFRZHhRUUFnQjBFSWFrRUhjUnNpQUdvaUFqWUNBRUdzSDBHc0h5Z0NBQ0FGYWlJQklBQnJJZ0EyQWdBZ0FpQUFRUUZ5TmdJRUlBRWdCMnBCS0RZQ0JFRzhIMEdJSXlnQ0FEWUNBQXdCQzBHd0h5Z0NBQ0FCU3dSQVFiQWZJQUUyQWdBTElBRWdCV29oQWtIZ0lpRUFBa0FDUUFKQUFrQUNRQUpBQTBBZ0FpQUFLQUlBUndSQUlBQW9BZ2dpQUEwQkRBSUxDeUFBTFFBTVFRaHhSUTBCQzBIZ0lpRUFBMEFnQnlBQUtBSUFJZ0pQQkVBZ0FpQUFLQUlFYWlJRUlBZExEUU1MSUFBb0FnZ2hBQXdBQ3dBTElBQWdBVFlDQUNBQUlBQW9BZ1FnQldvMkFnUWdBVUY0SUFGclFRZHhRUUFnQVVFSWFrRUhjUnRxSWdrZ0NFRURjallDQkNBQ1FYZ2dBbXRCQjNGQkFDQUNRUWhxUVFkeEcyb2lCU0FJSUFscUlnWnJJUUlnQlNBSFJnUkFRYmdmSUFZMkFnQkJyQjlCckI4b0FnQWdBbW9pQURZQ0FDQUdJQUJCQVhJMkFnUU1Bd3NnQlVHMEh5Z0NBRVlFUUVHMEh5QUdOZ0lBUWFnZlFhZ2ZLQUlBSUFKcUlnQTJBZ0FnQmlBQVFRRnlOZ0lFSUFBZ0Jtb2dBRFlDQUF3REN5QUZLQUlFSWdCQkEzRkJBVVlFUUNBQVFYaHhJUWNDUUNBQVFmOEJUUVJBSUFVb0FnZ2lBeUFBUVFOMklnQkJBM1JCeUI5cVJob2dBeUFGS0FJTUlnRkdCRUJCb0I5Qm9COG9BZ0JCZmlBQWQzRTJBZ0FNQWdzZ0F5QUJOZ0lNSUFFZ0F6WUNDQXdCQ3lBRktBSVlJUWdDUUNBRklBVW9BZ3dpQVVjRVFDQUZLQUlJSWdBZ0FUWUNEQ0FCSUFBMkFnZ01BUXNDUUNBRlFSUnFJZ0FvQWdBaUF3MEFJQVZCRUdvaUFDZ0NBQ0lERFFCQkFDRUJEQUVMQTBBZ0FDRUVJQU1pQVVFVWFpSUFLQUlBSWdNTkFDQUJRUkJxSVFBZ0FTZ0NFQ0lERFFBTElBUkJBRFlDQUFzZ0NFVU5BQUpBSUFVZ0JTZ0NIQ0lEUVFKMFFkQWhhaUlBS0FJQVJnUkFJQUFnQVRZQ0FDQUJEUUZCcEI5QnBCOG9BZ0JCZmlBRGQzRTJBZ0FNQWdzZ0NFRVFRUlFnQ0NnQ0VDQUZSaHRxSUFFMkFnQWdBVVVOQVFzZ0FTQUlOZ0lZSUFVb0FoQWlBQVJBSUFFZ0FEWUNFQ0FBSUFFMkFoZ0xJQVVvQWhRaUFFVU5BQ0FCSUFBMkFoUWdBQ0FCTmdJWUN5QUZJQWRxSVFVZ0FpQUhhaUVDQ3lBRklBVW9BZ1JCZm5FMkFnUWdCaUFDUVFGeU5nSUVJQUlnQm1vZ0FqWUNBQ0FDUWY4QlRRUkFJQUpCQTNZaUFFRURkRUhJSDJvaEFnSi9RYUFmS0FJQUlnRkJBU0FBZENJQWNVVUVRRUdnSHlBQUlBRnlOZ0lBSUFJTUFRc2dBaWdDQ0FzaEFDQUNJQVkyQWdnZ0FDQUdOZ0lNSUFZZ0FqWUNEQ0FHSUFBMkFnZ01Bd3RCSHlFQUlBSkIvLy8vQjAwRVFDQUNRUWgySWdBZ0FFR0EvajlxUVJCMlFRaHhJZ04wSWdBZ0FFR0E0QjlxUVJCMlFRUnhJZ0YwSWdBZ0FFR0FnQTlxUVJCMlFRSnhJZ0IwUVE5MklBRWdBM0lnQUhKcklnQkJBWFFnQWlBQVFSVnFka0VCY1hKQkhHb2hBQXNnQmlBQU5nSWNJQVpDQURjQ0VDQUFRUUowUWRBaGFpRUVBa0JCcEI4b0FnQWlBMEVCSUFCMElnRnhSUVJBUWFRZklBRWdBM0kyQWdBZ0JDQUdOZ0lBSUFZZ0JEWUNHQXdCQ3lBQ1FRQkJHU0FBUVFGMmF5QUFRUjlHRzNRaEFDQUVLQUlBSVFFRFFDQUJJZ01vQWdSQmVIRWdBa1lOQXlBQVFSMTJJUUVnQUVFQmRDRUFJQU1nQVVFRWNXb2lCQ2dDRUNJQkRRQUxJQVFnQmpZQ0VDQUdJQU0yQWhnTElBWWdCallDRENBR0lBWTJBZ2dNQWd0QnJCOGdCVUVvYXlJRFFYZ2dBV3RCQjNGQkFDQUJRUWhxUVFkeEd5SUFheUlDTmdJQVFiZ2ZJQUFnQVdvaUFEWUNBQ0FBSUFKQkFYSTJBZ1FnQVNBRGFrRW9OZ0lFUWJ3ZlFZZ2pLQUlBTmdJQUlBY2dCRUVuSUFSclFRZHhRUUFnQkVFbmEwRUhjUnRxUVM5cklnQWdBQ0FIUVJCcVNSc2lBa0ViTmdJRUlBSkI2Q0lwQWdBM0FoQWdBa0hnSWlrQ0FEY0NDRUhvSWlBQ1FRaHFOZ0lBUWVRaUlBVTJBZ0JCNENJZ0FUWUNBRUhzSWtFQU5nSUFJQUpCR0dvaEFBTkFJQUJCQnpZQ0JDQUFRUWhxSVFFZ0FFRUVhaUVBSUFFZ0JFa05BQXNnQWlBSFJnMERJQUlnQWlnQ0JFRitjVFlDQkNBSElBSWdCMnNpQkVFQmNqWUNCQ0FDSUFRMkFnQWdCRUgvQVUwRVFDQUVRUU4ySWdCQkEzUkJ5QjlxSVFJQ2YwR2dIeWdDQUNJQlFRRWdBSFFpQUhGRkJFQkJvQjhnQUNBQmNqWUNBQ0FDREFFTElBSW9BZ2dMSVFBZ0FpQUhOZ0lJSUFBZ0J6WUNEQ0FISUFJMkFnd2dCeUFBTmdJSURBUUxRUjhoQUNBSFFnQTNBaEFnQkVILy8vOEhUUVJBSUFSQkNIWWlBQ0FBUVlEK1AycEJFSFpCQ0hFaUFuUWlBQ0FBUVlEZ0gycEJFSFpCQkhFaUFYUWlBQ0FBUVlDQUQycEJFSFpCQW5FaUFIUkJEM1lnQVNBQ2NpQUFjbXNpQUVFQmRDQUVJQUJCRldwMlFRRnhja0VjYWlFQUN5QUhJQUEyQWh3Z0FFRUNkRUhRSVdvaEF3SkFRYVFmS0FJQUlnSkJBU0FBZENJQmNVVUVRRUdrSHlBQklBSnlOZ0lBSUFNZ0J6WUNBQ0FISUFNMkFoZ01BUXNnQkVFQVFSa2dBRUVCZG1zZ0FFRWZSaHQwSVFBZ0F5Z0NBQ0VCQTBBZ0FTSUNLQUlFUVhoeElBUkdEUVFnQUVFZGRpRUJJQUJCQVhRaEFDQUNJQUZCQkhGcUlnTW9BaEFpQVEwQUN5QURJQWMyQWhBZ0J5QUNOZ0lZQ3lBSElBYzJBZ3dnQnlBSE5nSUlEQU1MSUFNb0FnZ2lBQ0FHTmdJTUlBTWdCallDQ0NBR1FRQTJBaGdnQmlBRE5nSU1JQVlnQURZQ0NBc2dDVUVJYWlFQURBVUxJQUlvQWdnaUFDQUhOZ0lNSUFJZ0J6WUNDQ0FIUVFBMkFoZ2dCeUFDTmdJTUlBY2dBRFlDQ0F0QnJCOG9BZ0FpQUNBSVRRMEFRYXdmSUFBZ0NHc2lBVFlDQUVHNEgwRzRIeWdDQUNJQ0lBaHFJZ0EyQWdBZ0FDQUJRUUZ5TmdJRUlBSWdDRUVEY2pZQ0JDQUNRUWhxSVFBTUF3dEIzQjVCTURZQ0FFRUFJUUFNQWdzQ1FDQUZSUTBBQWtBZ0JDZ0NIQ0lDUVFKMFFkQWhhaUlBS0FJQUlBUkdCRUFnQUNBQk5nSUFJQUVOQVVHa0h5QUpRWDRnQW5keElnazJBZ0FNQWdzZ0JVRVFRUlFnQlNnQ0VDQUVSaHRxSUFFMkFnQWdBVVVOQVFzZ0FTQUZOZ0lZSUFRb0FoQWlBQVJBSUFFZ0FEWUNFQ0FBSUFFMkFoZ0xJQVFvQWhRaUFFVU5BQ0FCSUFBMkFoUWdBQ0FCTmdJWUN3SkFJQU5CRDAwRVFDQUVJQU1nQ0dvaUFFRURjallDQkNBQUlBUnFJZ0FnQUNnQ0JFRUJjallDQkF3QkN5QUVJQWhCQTNJMkFnUWdCaUFEUVFGeU5nSUVJQU1nQm1vZ0F6WUNBQ0FEUWY4QlRRUkFJQU5CQTNZaUFFRURkRUhJSDJvaEFnSi9RYUFmS0FJQUlnRkJBU0FBZENJQWNVVUVRRUdnSHlBQUlBRnlOZ0lBSUFJTUFRc2dBaWdDQ0FzaEFDQUNJQVkyQWdnZ0FDQUdOZ0lNSUFZZ0FqWUNEQ0FHSUFBMkFnZ01BUXRCSHlFQUlBTkIvLy8vQjAwRVFDQURRUWgySWdBZ0FFR0EvajlxUVJCMlFRaHhJZ0owSWdBZ0FFR0E0QjlxUVJCMlFRUnhJZ0YwSWdBZ0FFR0FnQTlxUVJCMlFRSnhJZ0IwUVE5MklBRWdBbklnQUhKcklnQkJBWFFnQXlBQVFSVnFka0VCY1hKQkhHb2hBQXNnQmlBQU5nSWNJQVpDQURjQ0VDQUFRUUowUWRBaGFpRUNBa0FDUUNBSlFRRWdBSFFpQVhGRkJFQkJwQjhnQVNBSmNqWUNBQ0FDSUFZMkFnQWdCaUFDTmdJWURBRUxJQU5CQUVFWklBQkJBWFpySUFCQkgwWWJkQ0VBSUFJb0FnQWhDQU5BSUFnaUFTZ0NCRUY0Y1NBRFJnMENJQUJCSFhZaEFpQUFRUUYwSVFBZ0FTQUNRUVJ4YWlJQ0tBSVFJZ2dOQUFzZ0FpQUdOZ0lRSUFZZ0FUWUNHQXNnQmlBR05nSU1JQVlnQmpZQ0NBd0JDeUFCS0FJSUlnQWdCallDRENBQklBWTJBZ2dnQmtFQU5nSVlJQVlnQVRZQ0RDQUdJQUEyQWdnTElBUkJDR29oQUF3QkN3SkFJQXRGRFFBQ1FDQUJLQUljSWdKQkFuUkIwQ0ZxSWdBb0FnQWdBVVlFUUNBQUlBUTJBZ0FnQkEwQlFhUWZJQVpCZmlBQ2QzRTJBZ0FNQWdzZ0MwRVFRUlFnQ3lnQ0VDQUJSaHRxSUFRMkFnQWdCRVVOQVFzZ0JDQUxOZ0lZSUFFb0FoQWlBQVJBSUFRZ0FEWUNFQ0FBSUFRMkFoZ0xJQUVvQWhRaUFFVU5BQ0FFSUFBMkFoUWdBQ0FFTmdJWUN3SkFJQU5CRDAwRVFDQUJJQU1nQ0dvaUFFRURjallDQkNBQUlBRnFJZ0FnQUNnQ0JFRUJjallDQkF3QkN5QUJJQWhCQTNJMkFnUWdDU0FEUVFGeU5nSUVJQU1nQ1dvZ0F6WUNBQ0FLQkVBZ0NrRURkaUlBUVFOMFFjZ2ZhaUVFUWJRZktBSUFJUUlDZjBFQklBQjBJZ0FnQlhGRkJFQkJvQjhnQUNBRmNqWUNBQ0FFREFFTElBUW9BZ2dMSVFBZ0JDQUNOZ0lJSUFBZ0FqWUNEQ0FDSUFRMkFnd2dBaUFBTmdJSUMwRzBIeUFKTmdJQVFhZ2ZJQU0yQWdBTElBRkJDR29oQUFzZ0RFRVFhaVFBSUFBTGZ3RURmeUFBSVFFQ1FDQUFRUU54QkVBRFFDQUJMUUFBUlEwQ0lBRkJBV29pQVVFRGNRMEFDd3NEUUNBQklnSkJCR29oQVNBQ0tBSUFJZ05CZjNNZ0EwR0Jnb1FJYTNGQmdJR0NoSGh4UlEwQUN5QURRZjhCY1VVRVFDQUNJQUJyRHdzRFFDQUNMUUFCSVFNZ0FrRUJhaUlCSVFJZ0F3MEFDd3NnQVNBQWF3dnlBZ0lDZndGK0FrQWdBa1VOQUNBQUlBSnFJZ05CQVdzZ0FUb0FBQ0FBSUFFNkFBQWdBa0VEU1EwQUlBTkJBbXNnQVRvQUFDQUFJQUU2QUFFZ0EwRURheUFCT2dBQUlBQWdBVG9BQWlBQ1FRZEpEUUFnQTBFRWF5QUJPZ0FBSUFBZ0FUb0FBeUFDUVFsSkRRQWdBRUVBSUFCclFRTnhJZ1JxSWdNZ0FVSC9BWEZCZ1lLRUNHd2lBVFlDQUNBRElBSWdCR3RCZkhFaUJHb2lBa0VFYXlBQk5nSUFJQVJCQ1VrTkFDQURJQUUyQWdnZ0F5QUJOZ0lFSUFKQkNHc2dBVFlDQUNBQ1FReHJJQUUyQWdBZ0JFRVpTUTBBSUFNZ0FUWUNHQ0FESUFFMkFoUWdBeUFCTmdJUUlBTWdBVFlDRENBQ1FSQnJJQUUyQWdBZ0FrRVVheUFCTmdJQUlBSkJHR3NnQVRZQ0FDQUNRUnhySUFFMkFnQWdCQ0FEUVFSeFFSaHlJZ1JySWdKQklFa05BQ0FCclVLQmdJQ0FFSDRoQlNBRElBUnFJUUVEUUNBQklBVTNBeGdnQVNBRk53TVFJQUVnQlRjRENDQUJJQVUzQXdBZ0FVRWdhaUVCSUFKQklHc2lBa0VmU3cwQUN3c2dBQXRQQVFKL1FkZ2VLQUlBSWdFZ0FFRURha0Y4Y1NJQ2FpRUFBa0FnQWtFQUlBQWdBVTBiRFFBZ0FEOEFRUkIwU3dSQUlBQVFBVVVOQVF0QjJCNGdBRFlDQUNBQkR3dEIzQjVCTURZQ0FFRi9DMjBCQVg4akFFR0FBbXNpQlNRQUlBUkJnTUFFY1NBQ0lBTk1ja1VFUUNBRklBRkIvd0Z4SUFJZ0Eyc2lBa0dBQWlBQ1FZQUNTU0lCR3hBTEdpQUJSUVJBQTBBZ0FDQUZRWUFDRUE0Z0FrR0FBbXNpQWtIL0FVc05BQXNMSUFBZ0JTQUNFQTRMSUFWQmdBSnFKQUFMblFJQkEzOGdBQzBBQUVFZ2NVVUVRQUpBSUFFaEJBSkFJQUlnQUNJQktBSVFJZ0FFZnlBQUJRSi9JQUVpQUNBQkxRQktJZ05CQVdzZ0EzSTZBRW9nQVNnQ0FDSURRUWh4QkVBZ0FDQURRU0J5TmdJQVFYOE1BUXNnQUVJQU53SUVJQUFnQUNnQ0xDSUROZ0ljSUFBZ0F6WUNGQ0FBSUFNZ0FDZ0NNR28yQWhCQkFBc05BU0FCS0FJUUN5QUJLQUlVSWdWclN3UkFJQUVnQkNBQ0lBRW9BaVFSQUFBYURBSUxBbjhnQVN3QVMwRi9TZ1JBSUFJaEFBTkFJQUlnQUNJRFJRMENHaUFFSUFOQkFXc2lBR290QUFCQkNrY05BQXNnQVNBRUlBTWdBU2dDSkJFQUFDQURTUTBDSUFNZ0JHb2hCQ0FCS0FJVUlRVWdBaUFEYXd3QkN5QUNDeUVBSUFVZ0JDQUFFQVVhSUFFZ0FTZ0NGQ0FBYWpZQ0ZBc0xDd3NLQUNBQVFUQnJRUXBKQzJNQkFuOGdBa1VFUUVFQUR3c0NmeUFBTFFBQUlnTUVRQU5BQWtBQ1FDQUJMUUFBSWdSRkRRQWdBa0VCYXlJQ1JRMEFJQU1nQkVZTkFRc2dBd3dEQ3lBQlFRRnFJUUVnQUMwQUFTRURJQUJCQVdvaEFDQUREUUFMQzBFQUN5QUJMUUFBYXd1Y0RRSVFmaEIvSXdCQmdCQnJJaFFrQUNBVVFZQUlhaUFCRUJjZ0ZFR0FDR29nQUJBV0lCUWdGRUdBQ0dvUUZ5QURCRUFnRkNBQ0VCWUxRUUFoQUVFQUlRRURRQ0FVUVlBSWFpQUJRUWQwSWdOQndBQnlhaUlWS1FNQUlCUkJnQWhxSUFOQjRBQnlhaUlXS1FNQUlCUkJnQWhxSUFOcUloY3BBd0FnRkVHQUNHb2dBMEVnY21vaUdDa0RBQ0lJRUFNaUJJVkJJQkFDSWdVUUF5SUdJQWlGUVJnUUFpRUlJQWdnQmlBRklBUWdDQkFESWdlRlFSQVFBaUlLRUFNaUVZVkJQeEFDSVFnZ0ZFR0FDR29nQTBISUFISnFJaGtwQXdBZ0ZFR0FDR29nQTBIb0FISnFJaG9wQXdBZ0ZFR0FDR29nQTBFSWNtb2lHeWtEQUNBVVFZQUlhaUFEUVNoeWFpSWNLUU1BSWdRUUF5SUZoVUVnRUFJaUJoQURJZ3NnQklWQkdCQUNJUVFnQkNBTElBWWdCU0FFRUFNaUM0VkJFQkFDSWhJUUF5SVRoVUUvRUFJaEJDQVVRWUFJYWlBRFFkQUFjbW9pSFNrREFDQVVRWUFJYWlBRFFmQUFjbW9pSGlrREFDQVVRWUFJYWlBRFFSQnlhaUlmS1FNQUlCUkJnQWhxSUFOQk1ISnFJaUFwQXdBaUJSQURJZ2FGUVNBUUFpSU1FQU1pRFNBRmhVRVlFQUloQlNBRklBMGdEQ0FHSUFVUUF5SU5oVUVRRUFJaURCQURJZzZGUVQ4UUFpRUZJQlJCZ0FocUlBTkIyQUJ5YWlJaEtRTUFJQlJCZ0FocUlBTkIrQUJ5YWlJaUtRTUFJQlJCZ0FocUlBTkJHSEpxSWlNcEF3QWdGRUdBQ0dvZ0EwRTRjbW9pQXlrREFDSUdFQU1pRDRWQklCQUNJZ2tRQXlJUUlBYUZRUmdRQWlFR0lBWWdFQ0FKSUE4Z0JoQURJZytGUVJBUUFpSUpFQU1pRUlWQlB4QUNJUVlnRnlBSElBUVFBeUlISUFRZ0RpQUhJQW1GUVNBUUFpSUhFQU1pRG9WQkdCQUNJZ1FRQXlJSk53TUFJQ0lnQnlBSmhVRVFFQUlpQnpjREFDQWRJQTRnQnhBRElnYzNBd0FnSENBRUlBZUZRVDhRQWpjREFDQWJJQXNnQlJBRElnUWdCU0FRSUFRZ0NvVkJJQkFDSWdRUUF5SUhoVUVZRUFJaUJSQURJZ28zQXdBZ0ZpQUVJQXFGUVJBUUFpSUVOd01BSUNFZ0J5QUVFQU1pQkRjREFDQWdJQVFnQllWQlB4QUNOd01BSUI4Z0RTQUdFQU1pQkNBR0lCRWdCQ0FTaFVFZ0VBSWlCQkFESWdXRlFSZ1FBaUlHRUFNaUJ6Y0RBQ0FhSUFRZ0I0VkJFQkFDSWdRM0F3QWdGU0FGSUFRUUF5SUVOd01BSUFNZ0JDQUdoVUUvRUFJM0F3QWdJeUFQSUFnUUF5SUVJQWdnRXlBRUlBeUZRU0FRQWlJRUVBTWlCWVZCR0JBQ0lnZ1FBeUlHTndNQUlCNGdCQ0FHaFVFUUVBSWlCRGNEQUNBWklBVWdCQkFESWdRM0F3QWdHQ0FFSUFpRlFUOFFBamNEQUNBQlFRRnFJZ0ZCQ0VjTkFBc0RRQ0FBUVFSMElnTWdGRUdBQ0dwcUlnRWlGVUdBQkdvcEF3QWdBU2tEZ0FZZ0FTa0RBQ0FCS1FPQUFpSUlFQU1pQklWQklCQUNJZ1VRQXlJR0lBaUZRUmdRQWlFSUlBZ2dCaUFGSUFRZ0NCQURJZ2VGUVJBUUFpSUtFQU1pRVlWQlB4QUNJUWdnQVNrRGlBUWdBU2tEaUFZZ0ZFR0FDR29nQTBFSWNtb2lBeWtEQUNBQktRT0lBaUlFRUFNaUJZVkJJQkFDSWdZUUF5SUxJQVNGUVJnUUFpRUVJQVFnQ3lBR0lBVWdCQkFESWd1RlFSQVFBaUlTRUFNaUU0VkJQeEFDSVFRZ0FTa0RnQVVnQVNrRGdBY2dBU2tEZ0FFZ0FTa0RnQU1pQlJBRElnYUZRU0FRQWlJTUVBTWlEU0FGaFVFWUVBSWhCU0FGSUEwZ0RDQUdJQVVRQXlJTmhVRVFFQUlpREJBRElnNkZRVDhRQWlFRklBRXBBNGdGSUFFcEE0Z0hJQUVwQTRnQklBRXBBNGdESWdZUUF5SVBoVUVnRUFJaUNSQURJaEFnQm9WQkdCQUNJUVlnQmlBUUlBa2dEeUFHRUFNaUQ0VkJFQkFDSWdrUUF5SVFoVUUvRUFJaEJpQUJJQWNnQkJBRElnY2dCQ0FPSUFjZ0NZVkJJQkFDSWdjUUF5SU9oVUVZRUFJaUJCQURJZ2szQXdBZ0FTQUhJQW1GUVJBUUFpSUhOd09JQnlBQklBNGdCeEFESWdjM0E0QUZJQUVnQkNBSGhVRS9FQUkzQTRnQ0lBTWdDeUFGRUFNaUJDQUZJQkFnQkNBS2hVRWdFQUlpQkJBRElnZUZRUmdRQWlJRkVBTWlDamNEQUNBQklBUWdDb1ZCRUJBQ0lnUTNBNEFHSUFFZ0J5QUVFQU1pQkRjRGlBVWdBU0FFSUFXRlFUOFFBamNEZ0FNZ0FTQU5JQVlRQXlJRUlBWWdFU0FFSUJLRlFTQVFBaUlFRUFNaUJZVkJHQkFDSWdZUUF5SUhOd09BQVNBQklBUWdCNFZCRUJBQ0lnUTNBNGdHSUJVZ0JTQUVFQU1pQkRjRGdBUWdBU0FFSUFhRlFUOFFBamNEaUFNZ0FTQVBJQWdRQXlJRUlBZ2dFeUFFSUF5RlFTQVFBaUlFRUFNaUJZVkJHQkFDSWdnUUF5SUdOd09JQVNBQklBUWdCb1ZCRUJBQ0lnUTNBNEFISUFFZ0JTQUVFQU1pQkRjRGlBUWdBU0FFSUFpRlFUOFFBamNEZ0FJZ0FFRUJhaUlBUVFoSERRQUxJQUlnRkJBWElBSWdGRUdBQ0dvUUZpQVVRWUFRYWlRQUM4TUJBUU4vSXdCQlFHb2lBeVFBSUFOQkFFSEFBQkFMSVFSQmZ5RURBa0FnQUVVZ0FVVnlEUUFnQUNnQzVBRWdBa3NOQUNBQUtRTlFRZ0JTRFFBZ0FDQUFOUUxnQVJBYUlBQVFKVUVBSVFNZ0FFSGdBR29pQWlBQUtBTGdBU0lGYWtFQVFZQUJJQVZyRUFzYUlBQWdBaEFaQTBBZ0JDQURRUU4wSWdWcUlBQWdCV29wQXdBUU1pQURRUUZxSWdOQkNFY05BQXNnQVNBRUlBQW9BdVFCRUFVYUlBUkJ3QUFRQkNBQ1FZQUJFQVFnQUVIQUFCQUVRUUFoQXdzZ0JFRkFheVFBSUFNTDFBTUJCbjhqQUVFUWF5SUVKQUFnQkNBQk5nSU1Jd0JCb0FGcklnTWtBQ0FEUVFocVFZQVlRWkFCRUFVYUlBTWdBRFlDTkNBRElBQTJBaHdnQTBGK0lBQnJJZ0pCLy8vLy93Y2dBa0gvLy8vL0Iwa2JJZ1UyQWpnZ0F5QUFJQVZxSWdBMkFpUWdBeUFBTmdJWUlBTkJDR29oQUNNQVFkQUJheUlDSkFBZ0FpQUJOZ0xNQVNBQ1FhQUJha0VBUVNnUUN4b2dBaUFDS0FMTUFUWUN5QUVDUUVFQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCdEJBRWdOQUNBQUtBSk1RUUJPSVFZZ0FDZ0NBQ0VCSUFBc0FFcEJBRXdFUUNBQUlBRkJYM0UyQWdBTElBRkJJSEVoQndKL0lBQW9BakFFUUNBQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCc01BUXNnQUVIUUFEWUNNQ0FBSUFKQjBBQnFOZ0lRSUFBZ0FqWUNIQ0FBSUFJMkFoUWdBQ2dDTENFQklBQWdBallDTENBQUlBSkJ5QUZxSUFKQjBBQnFJQUpCb0FGcUVCc2dBVVVOQUJvZ0FFRUFRUUFnQUNnQ0pCRUFBQm9nQUVFQU5nSXdJQUFnQVRZQ0xDQUFRUUEyQWh3Z0FFRUFOZ0lRSUFBb0FoUWFJQUJCQURZQ0ZFRUFDeG9nQUNBQUtBSUFJQWR5TmdJQUlBWkZEUUFMSUFKQjBBRnFKQUFnQlFSQUlBTW9BaHdpQUNBQUlBTW9BaGhHYTBFQU9nQUFDeUFEUWFBQmFpUUFJQVJCRUdva0FBczBBUUYvUVFFaEFRSkFJQUJCQ2trTkFFRUNJUUVEUUNBQVFlUUFTUTBCSUFGQkFXb2hBU0FBUVFwdUlRQU1BQXNBQ3lBQkM0VUJBUWQvQWtBZ0FDMEFBQ0lHUVRCclFmOEJjVUVKU3cwQUlBWWhBZ05BSUFRaEJ5QURRWm16NXN3QlN3MEJJQUpCL3dGeFFUQnJJZ0lnQTBFS2JDSUVRWDl6U3cwQklBSWdCR29oQXlBQUlBZEJBV29pQkdvaUNDMEFBQ0lDUVRCclFmOEJjVUVLU1EwQUN5QUdRVEJHUVFBZ0J4c05BQ0FCSUFNMkFnQWdDQ0VGQ3lBRkN6RUJBMzhEUUNBQUlBSkJBM1FpQTJvaUJDQUVLUU1BSUFFZ0Eyb3BBd0NGTndNQUlBSkJBV29pQWtHQUFVY05BQXNMREFBZ0FDQUJRWUFJRUFVYUMxNEJBbjhqQUVGQWFpSUNKQUJCZnlFREFrQWdBRVVOQUNBQlFRRnJRY0FBVHdSQUlBQVFOd3dCQ3lBQ1FRRTZBQU1nQWtHQUFqc0FBU0FDSUFFNkFBQWdBa0VFY2tFQVFUd1FDeG9nQUNBQ0VEd2hBd3NnQWtGQWF5UUFJQU1McEFvQ0EzOFJmaU1BUVlBQ2F5SURKQUFEUUNBQ1FRTjBJZ1FnQTBHQUFXcHFJQUVnQkdvcEFBQTNBd0FnQWtFQmFpSUNRUkJIRFFBTElBTWdBRUhBQUJBRklRRWdBQ2tEV0VMNXd2aWJrYU96OE5zQWhTRUxJQUFwQTFCQzYvcUcycisxOXNFZmhTRU1JQUFwQTBoQ245ajUyY0tSMm9LYmY0VWhEU0FBS1FOQVF0R0ZtdS82ejVTSDBRQ0ZJUTVDOGUzMCtLV24vYWVsZnlFUFFxdncwL1N2N3J5M1BDRVNRcnZPcXFiWTBPdXp1MzhoRUVLSWt2T2QvOHo1aE9vQUlRVkJBQ0VESUFFcEF6Z2hCaUFCS1FNWUlSUWdBU2tETUNFSElBRXBBeEFoRlNBQktRTW9JUWdnQVNrRENDRVJJQUVwQXlBaENTQUJLUU1BSVFvRFFDQUpJQVVnRGlBQlFZQUJhaUFEUVFaMElnSkJ3QWhxS0FJQVFRTjBhaWtEQUNBSklBcDhmQ0lLaFVFZ0VBSWlEbndpRTRWQkdCQUNJUVVnQlNBVElBNGdBVUdBQVdvZ0FrSEVDR29vQWdCQkEzUnFLUU1BSUFVZ0NueDhJZ3FGUVJBUUFpSU9mQ0lUaFVFL0VBSWhDU0FJSUJBZ0RTQUJRWUFCYWlBQ1FjZ0lhaWdDQUVFRGRHb3BBd0FnQ0NBUmZId2lFWVZCSUJBQ0lnMThJaENGUVJnUUFpRUZJQVVnRUNBTklBRkJnQUZxSUFKQnpBaHFLQUlBUVFOMGFpa0RBQ0FGSUJGOGZDSVJoVUVRRUFJaURYd2lFSVZCUHhBQ0lRVWdFaUFNSUFGQmdBRnFJQUpCMEFocUtBSUFRUU4wYWlrREFDQUhJQlY4ZkNJSWhVRWdFQUlpREh3aUVpQUhoVUVZRUFJaEJ5QUhJQklnRENBQlFZQUJhaUFDUWRRSWFpZ0NBRUVEZEdvcEF3QWdCeUFJZkh3aUZZVkJFQkFDSWd4OElnaUZRVDhRQWlFSElBOGdDeUFCUVlBQmFpQUNRZGdJYWlnQ0FFRURkR29wQXdBZ0JpQVVmSHdpRW9WQklCQUNJZ3Q4SWc4Z0JvVkJHQkFDSVFZZ0JpQUxJQUZCZ0FGcUlBSkIzQWhxS0FJQVFRTjBhaWtEQUNBR0lCSjhmQ0lVaFVFUUVBSWlDeUFQZkNJUGhVRS9FQUloQmlBRklBZ2dDeUFCUVlBQmFpQUNRZUFJYWlnQ0FFRURkR29wQXdBZ0JTQUtmSHdpQ29WQklCQUNJZ3Q4SWdpRlFSZ1FBaUVGSUFVZ0NDQUxJQUZCZ0FGcUlBSkI1QWhxS0FJQVFRTjBhaWtEQUNBRklBcDhmQ0lLaFVFUUVBSWlDM3dpRW9WQlB4QUNJUWdnQnlBUElBNGdBVUdBQVdvZ0FrSG9DR29vQWdCQkEzUnFLUU1BSUFjZ0VYeDhJZytGUVNBUUFpSU9mQ0lSaFVFWUVBSWhCU0FGSUJFZ0RpQUJRWUFCYWlBQ1Fld0lhaWdDQUVFRGRHb3BBd0FnQlNBUGZId2lFWVZCRUJBQ0lnNThJZytGUVQ4UUFpRUhJQVlnRFNBQlFZQUJhaUFDUWZBSWFpZ0NBRUVEZEdvcEF3QWdCaUFWZkh3aUJZVkJJQkFDSWcwZ0Uzd2lFNFZCR0JBQ0lRWWdCaUFUSUEwZ0FVR0FBV29nQWtIMENHb29BZ0JCQTNScUtRTUFJQVVnQm54OEloV0ZRUkFRQWlJTmZDSUZoVUUvRUFJaEJpQUpJQkFnRENBQlFZQUJhaUFDUWZnSWFpZ0NBRUVEZEdvcEF3QWdDU0FVZkh3aUVJVkJJQkFDSWd4OEloT0ZRUmdRQWlFSklBa2dFeUFNSUFGQmdBRnFJQUpCL0FocUtBSUFRUU4wYWlrREFDQUpJQkI4ZkNJVWhVRVFFQUlpREh3aUVJVkJQeEFDSVFrZ0EwRUJhaUlEUVF4SERRQUxJQUVnRGpjRFlDQUJJQWszQXlBZ0FTQU5Od05vSUFFZ0NEY0RLQ0FCSUJFM0F3Z2dBU0FRTndOSUlBRWdERGNEY0NBQklBYzNBekFnQVNBVk53TVFJQUVnRWpjRFVDQUJJQXMzQTNnZ0FTQUdOd000SUFFZ0ZEY0RHQ0FCSUE4M0ExZ2dBU0FGTndOQUlBRWdDamNEQUNBQUlBb2dBQ2tEQUlVZ0JZVTNBd0JCQVNFQ0EwQWdBQ0FDUVFOMElnTnFJZ1FnQVNBRGFpSURLUU1BSUFRcEF3Q0ZJQU5CUUdzcEF3Q0ZOd01BSUFKQkFXb2lBa0VJUncwQUN5QUJRWUFDYWlRQUN5WUJBWDRnQUNBQklBQXBBMEFpQVh3aUFqY0RRQ0FBSUFBcEEwZ2dBU0FDVnExOE53TklDNkFVQWhCL0FuNGpBRUhRQUdzaUJpUUFJQVpCeWc0MkFrd2dCa0UzYWlFVElBWkJPR29oRUFOQUFrQWdEa0VBU0EwQVFmLy8vLzhISUE1cklBUklCRUJCM0I1QlBUWUNBRUYvSVE0TUFRc2dCQ0FPYWlFT0N5QUdLQUpNSWdjaEJBSkFBa0FDUUFKQUFrQUNRQUpBQWtBZ0JnSi9Ba0FnQnkwQUFDSUZCRUFEUUFKQUFrQWdCVUgvQVhFaUJVVUVRQ0FFSVFVTUFRc2dCVUVsUncwQklBUWhCUU5BSUFRdEFBRkJKVWNOQVNBR0lBUkJBbW9pQ0RZQ1RDQUZRUUZxSVFVZ0JDMEFBaUVMSUFnaEJDQUxRU1ZHRFFBTEN5QUZJQWRySVFRZ0FBUkFJQUFnQnlBRUVBNExJQVFORFNBR0tBSk1MQUFCRUE4aEJTQUdLQUpNSVFRZ0JVVU5BeUFFTFFBQ1FTUkhEUU1nQkN3QUFVRXdheUVQUVFFaEVTQUVRUU5xREFRTElBWWdCRUVCYWlJSU5nSk1JQVF0QUFFaEJTQUlJUVFNQUFzQUN5QU9JUXdnQUEwSUlCRkZEUUpCQVNFRUEwQWdBeUFFUVFKMGFpZ0NBQ0lBQkVBZ0FpQUVRUU4wYWlBQUlBRVFKRUVCSVF3Z0JFRUJhaUlFUVFwSERRRU1DZ3NMUVFFaERDQUVRUXBQRFFnRFFDQURJQVJCQW5ScUtBSUFEUWdnQkVFQmFpSUVRUXBIRFFBTERBZ0xRWDhoRHlBRVFRRnFDeUlFTmdKTVFRQWhDQUpBSUFRc0FBQWlEVUVnYXlJRlFSOUxEUUJCQVNBRmRDSUZRWW5SQkhGRkRRQURRQUpBSUFZZ0JFRUJhaUlJTmdKTUlBUXNBQUVpRFVFZ2F5SUVRU0JQRFFCQkFTQUVkQ0lFUVluUkJIRkZEUUFnQkNBRmNpRUZJQWdoQkF3QkN3c2dDQ0VFSUFVaENBc0NRQ0FOUVNwR0JFQWdCZ0ovQWtBZ0JDd0FBUkFQUlEwQUlBWW9Ba3dpQkMwQUFrRWtSdzBBSUFRc0FBRkJBblFnQTJwQndBRnJRUW8yQWdBZ0JDd0FBVUVEZENBQ2FrR0FBMnNvQWdBaENrRUJJUkVnQkVFRGFnd0JDeUFSRFFoQkFDRVJRUUFoQ2lBQUJFQWdBU0FCS0FJQUlnUkJCR28yQWdBZ0JDZ0NBQ0VLQ3lBR0tBSk1RUUZxQ3lJRU5nSk1JQXBCZjBvTkFVRUFJQXBySVFvZ0NFR0F3QUJ5SVFnTUFRc2dCa0hNQUdvUUl5SUtRUUJJRFFZZ0JpZ0NUQ0VFQzBGL0lRa0NRQ0FFTFFBQVFTNUhEUUFnQkMwQUFVRXFSZ1JBQWtBZ0JDd0FBaEFQUlEwQUlBWW9Ba3dpQkMwQUEwRWtSdzBBSUFRc0FBSkJBblFnQTJwQndBRnJRUW8yQWdBZ0JDd0FBa0VEZENBQ2FrR0FBMnNvQWdBaENTQUdJQVJCQkdvaUJEWUNUQXdDQ3lBUkRRY2dBQVIvSUFFZ0FTZ0NBQ0lFUVFScU5nSUFJQVFvQWdBRlFRQUxJUWtnQmlBR0tBSk1RUUpxSWdRMkFrd01BUXNnQmlBRVFRRnFOZ0pNSUFaQnpBQnFFQ01oQ1NBR0tBSk1JUVFMUVFBaEJRTkFJQVVoRWtGL0lRd2dCQ3dBQUVIQkFHdEJPVXNOQnlBR0lBUkJBV29pRFRZQ1RDQUVMQUFBSVFVZ0RTRUVJQVVnRWtFNmJHcEJ6eGhxTFFBQUlnVkJBV3RCQ0VrTkFBc2dCVUVUUmcwQ0lBVkZEUVlnRDBFQVRnUkFJQU1nRDBFQ2RHb2dCVFlDQUNBR0lBSWdEMEVEZEdvcEF3QTNBMEFNQkFzZ0FBMEJDMEVBSVF3TUJRc2dCa0ZBYXlBRklBRVFKQ0FHS0FKTUlRME1BZ3NnRDBGL1NnMERDMEVBSVFRZ0FFVU5CQXNnQ0VILy8zdHhJZ3NnQ0NBSVFZREFBSEViSVFWQkFDRU1RY0FPSVE4Z0VDRUlBa0FDUUFKQUFuOENRQUpBQWtBQ1FBSi9Ba0FDUUFKQUFrQUNRQUpBQWtBZ0RVRUJheXdBQUNJRVFWOXhJQVFnQkVFUGNVRURSaHNnQkNBU0d5SUVRZGdBYXc0aEJCSVNFaElTRWhJU0RoSVBCZzRPRGhJR0VoSVNFZ0lGQXhJU0NSSUJFaElFQUFzQ1FDQUVRY0VBYXc0SERoSUxFZzRPRGdBTElBUkIwd0JHRFFrTUVRc2dCaWtEUUNFVVFjQU9EQVVMUVFBaEJBSkFBa0FDUUFKQUFrQUNRQUpBSUJKQi93RnhEZ2dBQVFJREJCY0ZCaGNMSUFZb0FrQWdEallDQUF3V0N5QUdLQUpBSUE0MkFnQU1GUXNnQmlnQ1FDQU9yRGNEQUF3VUN5QUdLQUpBSUE0N0FRQU1Fd3NnQmlnQ1FDQU9PZ0FBREJJTElBWW9Ba0FnRGpZQ0FBd1JDeUFHS0FKQUlBNnNOd01BREJBTElBbEJDQ0FKUVFoTEd5RUpJQVZCQ0hJaEJVSDRBQ0VFQ3lBUUlRY2dCRUVnY1NFTElBWXBBMEFpRkZCRkJFQURRQ0FIUVFGcklnY2dGS2RCRDNGQjRCeHFMUUFBSUF0eU9nQUFJQlJDRDFZaERTQVVRZ1NJSVJRZ0RRMEFDd3NnQlVFSWNVVWdCaWtEUUZCeURRTWdCRUVFZGtIQURtb2hEMEVDSVF3TUF3c2dFQ0VFSUFZcEEwQWlGRkJGQkVBRFFDQUVRUUZySWdRZ0ZLZEJCM0ZCTUhJNkFBQWdGRUlIVmlFSElCUkNBNGdoRkNBSERRQUxDeUFFSVFjZ0JVRUljVVVOQWlBSklCQWdCMnNpQkVFQmFpQUVJQWxJR3lFSkRBSUxJQVlwQTBBaUZFSi9Wd1JBSUFaQ0FDQVVmU0lVTndOQVFRRWhERUhBRGd3QkN5QUZRWUFRY1FSQVFRRWhERUhCRGd3QkMwSENEa0hBRGlBRlFRRnhJZ3diQ3lFUElCQWhCQUpBSUJSQ2dJQ0FnQkJVQkVBZ0ZDRVZEQUVMQTBBZ0JFRUJheUlFSUJRZ0ZFSUtnQ0lWUWdwK2ZhZEJNSEk2QUFBZ0ZFTC8vLy8vbndGV0lRY2dGU0VVSUFjTkFBc0xJQlduSWdjRVFBTkFJQVJCQVdzaUJDQUhJQWRCQ200aUMwRUtiR3RCTUhJNkFBQWdCMEVKU3lFTklBc2hCeUFORFFBTEN5QUVJUWNMSUFWQi8vOTdjU0FGSUFsQmYwb2JJUVVnQmlrRFFDSVVRZ0JTSUFseVJRUkFRUUFoQ1NBUUlRY01DZ3NnQ1NBVVVDQVFJQWRyYWlJRUlBUWdDVWdiSVFrTUNRc0NmeUFKSWdSQkFFY2hDQUpBQWtBQ1FDQUdLQUpBSWdWQjR4WWdCUnNpQnlJRlFRTnhSU0FFUlhJTkFBTkFJQVV0QUFCRkRRSWdCRUVCYXlJRVFRQkhJUWdnQlVFQmFpSUZRUU54UlEwQklBUU5BQXNMSUFoRkRRRUxBa0FnQlMwQUFFVWdCRUVFU1hJTkFBTkFJQVVvQWdBaUNFRi9jeUFJUVlHQ2hBaHJjVUdBZ1lLRWVIRU5BU0FGUVFScUlRVWdCRUVFYXlJRVFRTkxEUUFMQ3lBRVJRMEFBMEFnQlNBRkxRQUFSUTBDR2lBRlFRRnFJUVVnQkVFQmF5SUVEUUFMQzBFQUN5SUVJQWNnQ1dvZ0JCc2hDQ0FMSVFVZ0JDQUhheUFKSUFRYklRa01DQXNnQ1FSQUlBWW9Ba0FNQWd0QkFDRUVJQUJCSUNBS1FRQWdCUkFOREFJTElBWkJBRFlDRENBR0lBWXBBMEErQWdnZ0JpQUdRUWhxTmdKQVFYOGhDU0FHUVFocUN5RUlRUUFoQkFKQUEwQWdDQ2dDQUNJSFJRMEJJQVpCQkdvZ0J4QWlJZ2RCQUVnaUN5QUhJQWtnQkd0TGNrVUVRQ0FJUVFScUlRZ2dDU0FFSUFkcUlnUkxEUUVNQWdzTFFYOGhEQ0FMRFFVTElBQkJJQ0FLSUFRZ0JSQU5JQVJGQkVCQkFDRUVEQUVMUVFBaENDQUdLQUpBSVEwRFFDQU5LQUlBSWdkRkRRRWdCa0VFYWlBSEVDSWlCeUFJYWlJSUlBUktEUUVnQUNBR1FRUnFJQWNRRGlBTlFRUnFJUTBnQkNBSVN3MEFDd3NnQUVFZ0lBb2dCQ0FGUVlEQUFITVFEU0FLSUFRZ0JDQUtTQnNoQkF3RkN5QUFJQVlyQTBBZ0NpQUpJQVVnQkVFQUVRd0FJUVFNQkFzZ0JpQUdLUU5BUEFBM1FRRWhDU0FUSVFjZ0N5RUZEQUlMUVg4aERBc2dCa0hRQUdva0FDQU1Ed3NnQUVFZ0lBd2dDQ0FIYXlJTElBa2dDU0FMU0JzaUNXb2lDQ0FLSUFnZ0Nrb2JJZ1FnQ0NBRkVBMGdBQ0FQSUF3UURpQUFRVEFnQkNBSUlBVkJnSUFFY3hBTklBQkJNQ0FKSUF0QkFCQU5JQUFnQnlBTEVBNGdBRUVnSUFRZ0NDQUZRWURBQUhNUURRd0FDd0FMa3dJQkFuOGdBRVVFUUVGbkR3c2dBQ2dDQUVVRVFFRi9Ed3NDUUFKL1FYNGdBQ2dDQkVFRVNRMEFHaUFBS0FJSVJRUkFRVzRnQUNnQ0RBMEJHZ3NnQUNnQ0ZDRUJJQUFvQWhCRkRRRkJlaUFCUVFoSkRRQWFJQUFvQWhoRkJFQkJiQ0FBS0FJY0RRRWFDeUFBS0FJZ1JRUkFRV3NnQUNnQ0pBMEJHZ3RCY2lBQUtBSXNJZ0ZCQ0VrTkFCcEJjU0FCUVlDQWdBRkxEUUFhUVhJZ0FTQUFLQUl3SWdKQkEzUkpEUUFhSUFBb0FpaEZCRUJCZEE4TElBSkZCRUJCY0E4TFFXOGdBa0gvLy84SFN3MEFHaUFBS0FJMElnRkZCRUJCWkE4TFFXTWdBVUgvLy84SFN3MEFHaUFBS0FKQUlRRUNRQ0FBS0FJOEJFQWdBUTBCUVdrUEMwRm9JQUVOQVJvTFFRQUxEd3RCYlVGNklBRWJDemdCQVg4akFFRVFheUlDSkFBZ0FpQUFOZ0lNSUFJZ0FUWUNDQ0FDS0FJTVFRQWdBaWdDQ0VIOEZ5Z0NBQkVBQUJvZ0FrRVFhaVFBQzRNU0FoTi9BbjRqQUVFd2F5SUpKQUFDUUNBQUVCd2lCQTBBUVdZaEJDQUJRUUpMRFFBZ0FDZ0NMQ0VESUFBb0FqQWhCQ0FBS0FJNElRSWdDVUVBTmdJQUlBa2dBallDQkNBQUtBSW9JUUlnQ1NBRU5nSVlJQWtnQWpZQ0NDQUpJQVJCQTNRaUFpQURJQUlnQTBzYklBUkJBblFpQW00aUF6WUNFQ0FKSUFOQkFuUTJBaFFnQ1NBQ0lBTnNOZ0lNSUFBb0FqUWhBeUFKSUFFMkFpQWdDU0FETmdJY0lBTWdCRXNFUUNBSklBUTJBaHdMSXdCQjBBQnJJZ3NrQUVGbklRUUNRQ0FKSWdGRklBQWlBMFZ5RFFBZ0FTQUROZ0lvSUFNaEJTQUJLQUlNSVFaQmFpRUNBa0FnQVNJRVJRMEFJQWF0UWdxR0loVkNJSWluRFFBZ0ZhY2hBZ0pBSUFVb0Fqd2lCUVJBSUFRZ0FpQUZFUU1BR2lBRUtBSUFJUUlNQVFzZ0JDQUNFQWtpQWpZQ0FBdEJBRUZxSUFJYklRSUxJQUlpQkEwQUlBRW9BaUFoQlNNQVFZQUNheUlDSkFBZ0EwVWdDeUlFUlhKRkJFQWdBa0VRYWtIQUFCQVlHaUFDUVF4cUlBTW9BakFRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BZ1FRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BaXdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BaWdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBTW9BamdRQnlBQ1FSQnFJQUpCREdwQkJCQUdHaUFDUVF4cUlBVVFCeUFDUVJCcUlBSkJER3BCQkJBR0dpQUNRUXhxSUFNb0Fnd1FCeUFDUVJCcUlBSkJER3BCQkJBR0dnSkFJQU1vQWdnaUJVVU5BQ0FDUVJCcUlBVWdBeWdDREJBR0dpQURMUUJFUVFGeFJRMEFJQU1vQWdnZ0F5Z0NEQkFkSUFOQkFEWUNEQXNnQWtFTWFpQURLQUlVRUFjZ0FrRVFhaUFDUVF4cVFRUVFCaG9nQXlnQ0VDSUZCRUFnQWtFUWFpQUZJQU1vQWhRUUJob0xJQUpCREdvZ0F5Z0NIQkFISUFKQkVHb2dBa0VNYWtFRUVBWWFBa0FnQXlnQ0dDSUZSUTBBSUFKQkVHb2dCU0FES0FJY0VBWWFJQU10QUVSQkFuRkZEUUFnQXlnQ0dDQURLQUljRUIwZ0EwRUFOZ0ljQ3lBQ1FReHFJQU1vQWlRUUJ5QUNRUkJxSUFKQkRHcEJCQkFHR2lBREtBSWdJZ1VFUUNBQ1FSQnFJQVVnQXlnQ0pCQUdHZ3NnQWtFUWFpQUVRY0FBRUJJYUN5QUNRWUFDYWlRQUlBdEJRR3RCQ0JBRVFRQWhBaU1BUVlBSWF5SURKQUFnQVNnQ0dBUkFJQVJCeEFCcUlRWWdCRUZBYXlFRkEwQWdCVUVBRUFjZ0JpQUNFQWNnQTBHQUNDQUVRY2dBRUNBZ0FTZ0NBQ0FCS0FJVUlBSnNRUXAwYWlBREVDNGdCVUVCRUFjZ0EwR0FDQ0FFUWNnQUVDQWdBU2dDQUNBQktBSVVJQUpzUVFwMGFrR0FDR29nQXhBdUlBSkJBV29pQWlBQktBSVlTUTBBQ3dzZ0EwR0FDQkFFSUFOQmdBaHFKQUFnQzBISUFCQUVRUUFoQkFzZ0MwSFFBR29rQUNBRURRQkJaeUVFQWtBZ0NVVU5BQ0FCS0FJWVJRMEFJd0JCSUdzaUJTUUFJQUVpQ3lnQ0NBUkFJQXNvQWhnaEJBTkFJQVFoQTBFQUlROERRRUVBSVJCQkFDRUNJQU1FUUFOQUlBVWdEem9BR0NBRlFRQTJBaHdnQlNBRktRTVlOd01JSUFVZ0VqWUNFQ0FGSUJBMkFoUWdCU0FGS1FNUU53TUFJQVVoQkVFQUlSRWpBRUdBR0dzaUJ5UUFBa0FnQ3lJRFJRMEFBa0FDUUFKQUFuOENmd0pBQWtBQ1FDQURLQUlnUVFGckRnSUNBUUFMSUFRb0FnQWhDRUVBREFNTElBUW9BZ0FOQTBFQUlBUXRBQWdpREVFQ1NRMEJHaUFFTFFBSUlnaEZRUUYwSVF3TUJRc2dCQzBBQ0NFTUlBUW9BZ0FMSVFnZ0J4QXZJQWRCZ0FocUVDOGdCeUFJclRjRGdBZ2dCRFVDQkNFVklBY2dESzFDL3dHRE53T1FDQ0FISUJVM0E0Z0lJQWNnQXpVQ0REY0RtQWdnQnlBRE5RSUlOd09nQ0NBSElBTTFBaUEzQTZnSVFRRUxJUkVnQ0VVTkFRc2dCQzBBQ0NFSVFRQWhEQXdCQ3lBRUxRQUlJZ2hGUVFGMElRd2dDQ0FSUlhJTkFDQUhRWUFRYWlBSFFZQUlhaUFIRUNaQkFpRU1RUUFoQ0FzZ0RDQURLQUlRSWdaUERRQkJmeUFES0FJVUlnSkJBV3NnQWlBRUtBSUViQ0FNYWlBR0lBaEIvd0Z4YkdvaUNDQUNjQnNnQ0dvaEJnTkFJQWhCQVdzZ0JpQUlJQUp3UVFGR0d5RU9BbjhnRVFSQUlBeEIvd0J4SWdKRkJFQWdCMEdBRUdvZ0IwR0FDR29nQnhBbUN5QUhRWUFRYWlBQ1FRTjBhZ3dCQ3lBREtBSUFJQTVCQ25ScUN5RUNJQU1vQWhnaENpQUNLUU1BSVJVZ0JDQU1OZ0lNSUFNaEJpQVZweUVVSUJWQ0lJaW5JQXB3clNJVklCVWdCRFVDQkNJVklBUXRBQWdiSUFRb0FnQWJJaFlnRlZFaENnSitJQVFpQWlnQ0FFVUVRQ0FDTFFBSUlnMUZCRUFnQWlnQ0RFRUJheUVLUWdBTUFnc2dCaWdDRUNBTmJDRU5JQUlvQWd3aEFpQUtCRUFnQWlBTmFrRUJheUVLUWdBTUFnc2dEU0FDUldzaENrSUFEQUVMSUFZb0FoQWhEU0FHS0FJVUlSTUNmeUFLQkVBZ0FpZ0NEQ0FUSUExQmYzTnFhZ3dCQ3lBVElBMXJJQUlvQWd4RmF3c2hDa0lBSUFJdEFBZ2lBa0VEUmcwQUdpQU5JQUpCQVdwc3JRc2hGU0FWSUFwQkFXdXRmQ0FLclNBVXJTSVZJQlYrUWlDSWZrSWdpSDBnQmpVQ0ZJS25JUVlnQXlnQ0FDSUNJQU1vQWhRZ0ZxZHNRUXAwYWlBR1FRcDBhaUVHSUFJZ0NFRUtkR29oQ2dKQUlBTW9BZ1JCRUVZRVFDQUNJQTVCQ25ScUlBWWdDa0VBRUJFTUFRc2dBaUFPUVFwMGFpRUNJQVFvQWdCRkJFQWdBaUFHSUFwQkFCQVJEQUVMSUFJZ0JpQUtRUUVRRVFzZ0RFRUJhaUlNSUFNb0FoQlBEUUVnQ0VFQmFpRUlJQTVCQVdvaEJpQURLQUlVSVFJTUFBc0FDeUFIUVlBWWFpUUFJQXNvQWhnaUJDRUNJQkJCQVdvaUVDQUVTUTBBQ3dzZ0FpRURJQTlCQVdvaUQwRUVSdzBBQ3lBU1FRRnFJaElnQ3lnQ0NFa05BQXNMSUFWQklHb2tBRUVBSVFRTElBUU5BQ01BUVlBUWF5SURKQUFnQUVVZ0NVVnlSUVJBSUFOQmdBaHFJQUVvQWdBZ0FTZ0NGRUVLZEdwQmdBaHJFQmNnQVNnQ0dFRUNUd1JBUVFFaEJBTkFJQU5CZ0FocUlBRW9BZ0FnQVNnQ0ZDSUNJQUlnQkd4cVFRcDBha0dBQ0dzUUZpQUVRUUZxSWdRZ0FTZ0NHRWtOQUFzTElBTWlBa0dBQ0dvaEMwRUFJUVFEUUNBQ0lBUkJBM1FpQldvZ0JTQUxhaWtEQUJBeUlBUkJBV29pQkVHQUFVY05BQXNnQUNnQ0FDQUFLQUlFSUFOQmdBZ1FJQ0FEUVlBSWFrR0FDQkFFSUFOQmdBZ1FCQ0FCS0FJQUlnUWdBU2dDREVFS2RDSUJFQVFDUUNBQUtBSkFJZ0FFUUNBRUlBRWdBQkVDQUF3QkN5QUVFQWdMQ3lBRFFZQVFhaVFBUVFBaEJBc2dDVUV3YWlRQUlBUUxKd0VCZndKQUFrQUNRQUpBSUFBT0F3QUJBZ01MUWRBVER3dEJpeEVQQzBHZUV5RUJDeUFCQzQ4REFRRi9Jd0JCZ0FOcklnUWtBQ0FFUVFBMkFvd0JJQVJCakFGcUlBRVFCd0pBSUFGQndBQk5CRUFnQkVHUUFXb2dBUkFZUVFCSURRRWdCRUdRQVdvZ0JFR01BV3BCQkJBR1FRQklEUUVnQkVHUUFXb2dBaUFERUFaQkFFZ05BU0FFUVpBQmFpQUFJQUVRRWhvTUFRc2dCRUdRQVdwQndBQVFHRUVBU0EwQUlBUkJrQUZxSUFSQmpBRnFRUVFRQmtFQVNBMEFJQVJCa0FGcUlBSWdBeEFHUVFCSURRQWdCRUdRQVdvZ0JFRkFhMEhBQUJBU1FRQklEUUFnQUNBRUtRTkFOd0FBSUFBZ0JDa0RTRGNBQ0NBQUlBUXBBMWczQUJnZ0FDQUVLUU5RTndBUUlBQkJJR29oQUNBQlFTQnJJZ0pCd1FCUEJFQURRQ0FFSUFSQlFHdEJ3QUFRQlNJQlFVQnJRY0FBSUFFUU1VRUFTQTBDSUFBZ0FTa0RRRGNBQUNBQUlBRXBBMGczQUFnZ0FDQUVLUU5ZTndBWUlBQWdCQ2tEVURjQUVDQUFRU0JxSVFBZ0FrRWdheUlDUWNBQVN3MEFDd3NnQkNBRVFVQnJRY0FBRUFVaUFVRkFheUFDSUFFUU1VRUFTQTBBSUFBZ0FVRkFheUFDRUFVYUN5QUVRWkFCYWtId0FSQUVJQVJCZ0FOcUpBQUxBd0FCQzVrQ0FDQUFSUVJBUVFBUEN3Si9Ba0FnQUFSL0lBRkIvd0JORFFFQ1FFR2dIaWdDQUNnQ0FFVUVRQ0FCUVlCL2NVR0F2d05HRFFNTUFRc2dBVUgvRDAwRVFDQUFJQUZCUDNGQmdBRnlPZ0FCSUFBZ0FVRUdka0hBQVhJNkFBQkJBZ3dFQ3lBQlFZQ3dBMDlCQUNBQlFZQkFjVUdBd0FOSEcwVUVRQ0FBSUFGQlAzRkJnQUZ5T2dBQ0lBQWdBVUVNZGtIZ0FYSTZBQUFnQUNBQlFRWjJRVDl4UVlBQmNqb0FBVUVEREFRTElBRkJnSUFFYTBILy96OU5CRUFnQUNBQlFUOXhRWUFCY2pvQUF5QUFJQUZCRW5aQjhBRnlPZ0FBSUFBZ0FVRUdka0UvY1VHQUFYSTZBQUlnQUNBQlFReDJRVDl4UVlBQmNqb0FBVUVFREFRTEMwSGNIa0VaTmdJQVFYOEZRUUVMREFFTElBQWdBVG9BQUVFQkN3dFFBUU4vQWtBZ0FDZ0NBQ3dBQUJBUFJRUkFEQUVMQTBBZ0FDZ0NBQ0lDTEFBQUlRTWdBQ0FDUVFGcU5nSUFJQUVnQTJwQk1Hc2hBU0FDTEFBQkVBOUZEUUVnQVVFS2JDRUJEQUFMQUFzZ0FRdTdBZ0FDUUNBQlFSUkxEUUFDUUFKQUFrQUNRQUpBQWtBQ1FBSkFBa0FDUUNBQlFRbHJEZ29BQVFJREJBVUdCd2dKQ2dzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQktBSUFOZ0lBRHdzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQk5BSUFOd01BRHdzZ0FpQUNLQUlBSWdGQkJHbzJBZ0FnQUNBQk5RSUFOd01BRHdzZ0FpQUNLQUlBUVFkcVFYaHhJZ0ZCQ0dvMkFnQWdBQ0FCS1FNQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTWdFQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTXdFQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTUFBQU53TUFEd3NnQWlBQ0tBSUFJZ0ZCQkdvMkFnQWdBQ0FCTVFBQU53TUFEd3NnQWlBQ0tBSUFRUWRxUVhoeElnRkJDR28yQWdBZ0FDQUJLd01BT1FNQUR3c2dBQ0FDUVFBUkFnQUxDeGtBSUFBdEFPZ0JCRUFnQUVKL053TllDeUFBUW44M0ExQUxJd0FnQVNBQktRTXdRZ0Y4TndNd0lBSWdBU0FBUVFBUUVTQUNJQUFnQUVFQUVCRUxPUUVDZnlBQVFRTnVJZ0pCQW5RaEFRSkFBa0FDUUNBQ1FRTnNRWDl6SUFCcURnSUJBQUlMSUFGQkFYSWhBUXNnQVVFQ2FpRUJDeUFCQzNvQkFuOGdBRUhBL3dCelFRRnFRUWgyUVg5elFTOXhJQUJCd2Y4QWMwRUJha0VJZGtGL2MwRXJjU0FBUWViL0EycEJDSFpCL3dGeElnRWdBRUhCQUdweGNuSWdBRUhNL3dOcVFRaDJJZ0lnQUVISEFHcHhJQUZCL3dGemNYSWdBRUg4QVdvZ0FFSEMvd05xUVFoMmNTQUNRWDl6Y1VIL0FYRnlDOVlCQVFWL1FYOGhCQ0FEUVFOdUlnWkJBblFoQlFKQUFrQUNRQ0FHUVFOc1FYOXpJQU5xRGdJQkFBSUxJQVZCQVhJaEJRc2dCVUVDYWlFRkN5QUJJQVZMQkg4Q1FDQURSUTBBUVFBaEFVRUlJUVFEUUNBQklBSXRBQUFpQ0hJaEJ3TkFJQUFpQVNBSElBUWlCa0VHYXlJRWRrRS9jUkFvT2dBQUlBRkJBV29oQUNBRVFRVkxEUUFMSUFOQkFXc2lBd1JBSUFKQkFXb2hBaUFIUVFoMElRRWdCRUVJYWlFRURBRUxDeUFFUlEwQUlBRWdDRUVNSUFacmRFRS9jUkFvT2dBQklBRkJBbW9oQUFzZ0FFRUFPZ0FBSUFVRklBUUxDOG9FQVFOL0l3QkI0QUJySWdRa0FDQURFQjhoQlNBQ0VCd2hBd0pBQWtBZ0JVVU5BQ0FERFFFZ0FVRUNTUTBBSUFCQkpEc0FBQ0FCUVFGcklnTWdCUkFLSWdGTkRRQWdBRUVCYWlBRklBRkJBV29RQlNFQUlBTWdBV3NpQTBFRVNRMEFJQUFnQVdvaUFVR2s3UFVCTmdBQUlBUWdBaWdDT0RZQ01DQUVRVUJySUFSQk1Hb1FFeUFEUVFOcklnTWdCRUZBYXhBS0lnQk5EUUFnQVVFRGFpQUVRVUJySUFCQkFXb1FCU0VCSUFNZ0FHc2lBMEVFU1EwQUlBQWdBV29pQVVHazJ2VUJOZ0FBSUFRZ0FpZ0NMRFlDSUNBRVFVQnJJQVJCSUdvUUV5QURRUU5ySWdNZ0JFRkFheEFLSWdCTkRRQWdBVUVEYWlBRVFVQnJJQUJCQVdvUUJTRUJJQU1nQUdzaUEwRUVTUTBBSUFBZ0FXb2lBVUdzNlBVQk5nQUFJQVFnQWlnQ0tEWUNFQ0FFUVVCcklBUkJFR29RRXlBRFFRTnJJZ01nQkVGQWF4QUtJZ0JORFFBZ0FVRURhaUFFUVVCcklBQkJBV29RQlNFQklBTWdBR3NpQTBFRVNRMEFJQUFnQVdvaUFVR3M0UFVCTmdBQUlBUWdBaWdDTURZQ0FDQUVRVUJySUFRUUV5QURRUU5ySWdNZ0JFRkFheEFLSWdCTkRRQWdBVUVEYWlBRVFVQnJJQUJCQVdvUUJTRUJJQU1nQUdzaUEwRUNTUTBBSUFBZ0FXb2lBRUVrT3dBQUlBQkJBV29pQUNBRFFRRnJJZ1lnQWlnQ0VDQUNLQUlVRUNraUFVRi9SaUlGRFFCQllTRURJQVpCQUNBQklBVWJheUlHUVFKSkRRRWdBQ0FBSUFGcUlBVWJJZ0JCSkRzQUFDQUFRUUZxSUFaQkFXc2dBaWdDQUNBQ0tBSUVFQ2toQUNBRVFlQUFhaVFBUVdGQkFDQUFRWDlHR3c4TFFXRWhBd3NnQkVIZ0FHb2tBQ0FEQzdnQkFRRi9RUUFnQUVFRWFpQUFRZEQvQTJwQkNIWkJmM054UVRrZ0FHdEJDSFpCZjNOeFFmOEJjU0FBUWNFQWF5SUJJQUZCQ0haQmYzTnhRZG9BSUFCclFRaDJRWDl6Y1VIL0FYRWdBRUc1QVdvZ0FFR2Yvd05xUVFoMlFYOXpjVUg2QUNBQWEwRUlka0YvYzNGQi93RnhJQUJCMFA4QWMwRUJha0VJZGtGL2MwRS9jU0FBUWRUL0FITkJBV3BCQ0haQmYzTkJQbkZ5Y25KeUlnRnJRUWgyUVg5eklBQkJ2djhEYzBFQmFrRUlkbkZCL3dGeElBRnlDNjRCQVFSL0FuOENmeUFDTEFBQUVDc2lCa0gvQVVZRVFFRi9EQUVMQTBBZ0JDQUdhaUVFQWtBZ0EwRUdhaUlHUVFoSkJFQWdCaUVEREFFTElBRW9BZ0FnQlUwRVFFRUFEd3NnQUNBRUlBTkJBbXNpQTNZNkFBQWdBRUVCYWlFQUlBVkJBV29oQlFzZ0FrRUJhaUlDTEFBQUVDc2lCa0gvQVVjRVFDQUVRUVowSVFRTUFRc0xRUUFnQTBFRVN3MEJHa0YvSUFOMEN5RURRUUFnQkNBRFFYOXpjUTBBR2lBQklBVTJBZ0FnQWdzTHJBTUJCWDhqQUVFUWF5SURKQUFnQUNnQ0JDRUdJQUFvQWhRaEJ3SkFJQUlRSHlJRVJRUkFRV1loQWd3QkMwRmdJUUlnQVMwQUFDSUZRU1JIRFFBZ0FVRUJhaUFCSUFWQkpFWWJJZ0VnQkNBRUVBb2lCQkFRSWdVTkFDQUFRUkEyQWpnZ0FTQUJJQVJxSWdFZ0JSc2lCRUhmRkVFREVCQkZCRUFnQkVFRGFpQURRUXhxRUJVaUFVVU5BU0FBSUFNb0FndzJBamdMSUFGQjZ4UkJBeEFRRFFBZ0FVRURhaUFEUVF4cUVCVWlBVVVOQUNBQUlBTW9BZ3cyQWl3Z0FVSGpGRUVERUJBTkFDQUJRUU5xSUFOQkRHb1FGU0lCUlEwQUlBQWdBeWdDRERZQ0tDQUJRZWNVUVFNUUVBMEFJQUZCQTJvZ0EwRU1haEFWSWdGRkRRQWdBQ0FES0FJTUlnUTJBakFnQUNBRU5nSTBJQUV0QUFCQkpFY05BQ0FESUFjMkFnd2dBQ2dDRUNBRFFReHFJQUZCQVdvUUxDSUJSUTBBSUFBZ0F5Z0NERFlDRkNBQkxRQUFRU1JIRFFBZ0F5QUdOZ0lNSUFBb0FnQWdBMEVNYWlBQlFRRnFFQ3dpQVVVTkFDQUFJQU1vQWd3MkFnUWdBRUVBTmdKRUlBQkNBRGNDUENBQVFnQTNBaGdnQUVJQU53SWdJQUFRSENJQ0RRQkJZRUVBSUFFdEFBQWJJUUlMSUFOQkVHb2tBQ0FDQ3lrQkFuOERRQ0FBSUFKQkEzUWlBMm9nQVNBRGFpa0FBRGNEQUNBQ1FRRnFJZ0pCZ0FGSERRQUxDd3dBSUFCQkFFR0FDQkFMR2d0bEFRSi9JQUFnQWhBZUlnSUVmeUFDQlVGZFFRQUNmeUFBS0FJQUlRUkJBQ0VDSUFBb0FnUWlBQVIvQTBBZ0F5QUNJQVJxTFFBQUlBRWdBbW90QUFCemNpRURJQUpCQVdvaUFpQUFSdzBBQ3lBRFFRRnJRUWgyUVFGeFFRRnJCVUVBQ3dzYkN3dGRBUUovSXdCQjhBRnJJZ01rQUVGL0lRUUNRQ0FDUlNBQVJTQUJSWEp5SUFGQndBQkxjZzBBSUFNZ0FSQVlRUUJJRFFBZ0F5QUNRY0FBRUFaQkFFZ05BQ0FESUFBZ0FSQVNJUVFMSUFOQjhBRVFCQ0FEUWZBQmFpUUFJQVFMQ1FBZ0FDQUJOd0FBQ3hBQUl3QWdBR3RCY0hFaUFDUUFJQUFMTXdFQmZ5QUFLQUlVSWdNZ0FTQUNJQUFvQWhBZ0Eyc2lBU0FCSUFKTEd5SUJFQVVhSUFBZ0FDZ0NGQ0FCYWpZQ0ZDQUNDOW9CQVFSL0l3QkIwQUJySWdna0FBSkFJQUJGQkVCQllDRUFEQUVMSUFnZ0FCQUtJZ2syQWd3Z0NDQUpOZ0ljSUFnZ0NSQUpJZ28yQWhnZ0NDQUpFQWtpQ3pZQ0NFRUFJUWtDUUFKQUlBcEZJQXRGY2cwQUlBZ2dBallDRkNBSUlBRTJBaEFnQ0VFSWFpQUFJQWNRTFNJQURRRWdDQ2dDQ0NFSklBZ2dDQ2dDREJBSklnQTJBZ2dnQUVVTkFDQUlJQVkyQWl3Z0NDQUZOZ0lvSUFnZ0JEWUNKQ0FJSUFNMkFpQWdDRUVJYWlBSklBY1FNQ0VBREFFTFFXb2hBQXNnQ0NnQ0dCQUlJQWdvQWdnUUNDQUpFQWdMSUFoQjBBQnFKQUFnQUF1UUFnRURmeU1BUWRBQWF5SVJKQUJCZmlFVEFrQWdDRUVFU1EwQUlBZ1FDU0lTUlFSQVFXb2hFd3dCQ3lBUlFRQTJBa3dnRVVJQU53SkVJQkVnQWpZQ1BDQVJJQUkyQWpnZ0VTQUJOZ0kwSUJFZ0FEWUNNQ0FSSUE4MkFpd2dFU0FPTmdJb0lCRWdEVFlDSkNBUklBdzJBaUFnRVNBR05nSWNJQkVnQlRZQ0dDQVJJQVEyQWhRZ0VTQUROZ0lRSUJFZ0NEWUNEQ0FSSUJJMkFnZ2dFU0FRTmdKQUFrQWdFVUVJYWlBTEVCNGlFd1JBSUJJZ0NCQUVEQUVMSUFjRVFDQUhJQklnQ0JBRkdnc0NRQ0FKUlNBS1JYSU5BQ0FKSUFvZ0VVRUlhaUFMRUNwRkRRQWdFaUFJRUFRZ0NTQUtFQVJCWVNFVERBRUxJQklnQ0JBRVFRQWhFd3NnRWhBSUN5QVJRZEFBYWlRQUlCTUxEUUFnQUVId0FSQUVJQUFRSlFzcEFDQUZFQjhRQ2lBQUVCUnFJQUVRRkdvZ0FoQVVhaUFERUNkcUlBUVFKMnBCRXhBVWFrRVFhZ3NmQUNBQVFTTnFJZ0JCSTAwRVFDQUFRUUowUWV3V2FpZ0NBQThMUVlzVEM3NEJBUVIvSXdCQjBBQnJJZ1FrQUFKQUlBQkZCRUJCWUNFQURBRUxJQVFnQUJBS0lnVTJBZ3dnQkNBRk5nSWNJQVFnQlJBSklnWTJBaGdnQkNBRkVBa2lCellDQ0VFQUlRVUNRQUpBSUFaRklBZEZjZzBBSUFRZ0FqWUNGQ0FFSUFFMkFoQWdCRUVJYWlBQUlBTVFMU0lBRFFFZ0JDZ0NDQ0VGSUFRZ0JDZ0NEQkFKSWdBMkFnZ2dBRVVOQUNBRVFRaHFJQVVnQXhBd0lRQU1BUXRCYWlFQUN5QUVLQUlZRUFnZ0JDZ0NDQkFJSUFVUUNBc2dCRUhRQUdva0FDQUFDNElDQVFOL0l3QkIwQUJySWcwa0FFRitJUThDUUNBSVFRUkpEUUFnQ0JBSklnNUZCRUJCYWlFUERBRUxJQTFDQURjREtDQU5RZ0EzQXlBZ0RTQUdOZ0ljSUEwZ0JUWUNHQ0FOSUFRMkFoUWdEU0FETmdJUUlBMGdDRFlDRENBTklBNDJBZ2dnRFVFQU5nSk1JQTFDQURjQ1JDQU5JQUkyQWp3Z0RTQUNOZ0k0SUEwZ0FUWUNOQ0FOSUFBMkFqQWdEU0FNTmdKQUFrQWdEVUVJYWlBTEVCNGlEd1JBSUE0Z0NCQUVEQUVMSUFjRVFDQUhJQTRnQ0JBRkdnc0NRQ0FKUlNBS1JYSU5BQ0FKSUFvZ0RVRUlhaUFMRUNwRkRRQWdEaUFJRUFRZ0NTQUtFQVJCWVNFUERBRUxJQTRnQ0JBRVFRQWhEd3NnRGhBSUN5QU5RZEFBYWlRQUlBOExZZ0VEZnlBQlJTQUFSWElFZjBGL0JTQUFRVUJyUVFCQnNBRVFDeG9nQUVHQUNFSEFBQkFGR2dOQUlBQWdBa0VEZENJRGFpSUVJQUVnQTJvcEFBQWdCQ2tEQUlVM0F3QWdBa0VCYWlJQ1FRaEhEUUFMSUFBZ0FTMEFBRFlDNUFGQkFBc0xDL0lTRkFCQmdBZ0x1UVVJeWJ6elorWUphanVueW9TRnJtZTdLL2lVL25MemJqenhOaDFmT3ZWUHBkR0M1cTEvVWc1UkgydytLNHhvQlp0cnZVSDdxOW1ESDNraGZoTVp6ZUJiQUFBQUFBRUFBQUFDQUFBQUF3QUFBQVFBQUFBRkFBQUFCZ0FBQUFjQUFBQUlBQUFBQ1FBQUFBb0FBQUFMQUFBQURBQUFBQTBBQUFBT0FBQUFEd0FBQUE0QUFBQUtBQUFBQkFBQUFBZ0FBQUFKQUFBQUR3QUFBQTBBQUFBR0FBQUFBUUFBQUF3QUFBQUFBQUFBQWdBQUFBc0FBQUFIQUFBQUJRQUFBQU1BQUFBTEFBQUFDQUFBQUF3QUFBQUFBQUFBQlFBQUFBSUFBQUFQQUFBQURRQUFBQW9BQUFBT0FBQUFBd0FBQUFZQUFBQUhBQUFBQVFBQUFBa0FBQUFFQUFBQUJ3QUFBQWtBQUFBREFBQUFBUUFBQUEwQUFBQU1BQUFBQ3dBQUFBNEFBQUFDQUFBQUJnQUFBQVVBQUFBS0FBQUFCQUFBQUFBQUFBQVBBQUFBQ0FBQUFBa0FBQUFBQUFBQUJRQUFBQWNBQUFBQ0FBQUFCQUFBQUFvQUFBQVBBQUFBRGdBQUFBRUFBQUFMQUFBQURBQUFBQVlBQUFBSUFBQUFBd0FBQUEwQUFBQUNBQUFBREFBQUFBWUFBQUFLQUFBQUFBQUFBQXNBQUFBSUFBQUFBd0FBQUFRQUFBQU5BQUFBQndBQUFBVUFBQUFQQUFBQURnQUFBQUVBQUFBSkFBQUFEQUFBQUFVQUFBQUJBQUFBRHdBQUFBNEFBQUFOQUFBQUJBQUFBQW9BQUFBQUFBQUFCd0FBQUFZQUFBQURBQUFBQ1FBQUFBSUFBQUFJQUFBQUN3QUFBQTBBQUFBTEFBQUFCd0FBQUE0QUFBQU1BQUFBQVFBQUFBTUFBQUFKQUFBQUJRQUFBQUFBQUFBUEFBQUFCQUFBQUFnQUFBQUdBQUFBQWdBQUFBb0FBQUFHQUFBQUR3QUFBQTRBQUFBSkFBQUFDd0FBQUFNQUFBQUFBQUFBQ0FBQUFBd0FBQUFDQUFBQURRQUFBQWNBQUFBQkFBQUFCQUFBQUFvQUFBQUZBQUFBQ2dBQUFBSUFBQUFJQUFBQUJBQUFBQWNBQUFBR0FBQUFBUUFBQUFVQUFBQVBBQUFBQ3dBQUFBa0FBQUFPQUFBQUF3QUFBQXdBQUFBTkFFSEVEUXU1Q2dFQUFBQUNBQUFBQXdBQUFBUUFBQUFGQUFBQUJnQUFBQWNBQUFBSUFBQUFDUUFBQUFvQUFBQUxBQUFBREFBQUFBMEFBQUFPQUFBQUR3QUFBQTRBQUFBS0FBQUFCQUFBQUFnQUFBQUpBQUFBRHdBQUFBMEFBQUFHQUFBQUFRQUFBQXdBQUFBQUFBQUFBZ0FBQUFzQUFBQUhBQUFBQlFBQUFBTUFBQUF0S3lBZ0lEQllNSGdBSld4MUFFOTFkSEIxZENCcGN5QjBiMjhnYzJodmNuUUFVMkZzZENCcGN5QjBiMjhnYzJodmNuUUFVMlZqY21WMElHbHpJSFJ2YnlCemFHOXlkQUJRWVhOemQyOXlaQ0JwY3lCMGIyOGdjMmh2Y25RQVFYTnpiMk5wWVhSbFpDQmtZWFJoSUdseklIUnZieUJ6YUc5eWRBQlRiMjFsSUc5bUlHVnVZMjlrWldRZ2NHRnlZVzFsZEdWeWN5QmhjbVVnZEc5dklHeHZibWNnYjNJZ2RHOXZJSE5vYjNKMEFFMXBjM05wYm1jZ1lYSm5kVzFsYm5SekFGUnZieUJ0WVc1NUlHeGhibVZ6QUZSdmJ5Qm1aWGNnYkdGdVpYTUFWRzl2SUcxaGJua2dkR2h5WldGa2N3Qk9iM1FnWlc1dmRXZG9JSFJvY21WaFpITUFUV1Z0YjNKNUlHRnNiRzlqWVhScGIyNGdaWEp5YjNJQVRXVnRiM0o1SUdOdmMzUWdhWE1nZEc5dklITnRZV3hzQUZScGJXVWdZMjl6ZENCcGN5QjBiMjhnYzIxaGJHd0FZWEpuYjI0eWFRQkJjbWR2YmpKcEFGUm9aU0J3WVhOemQyOXlaQ0JrYjJWeklHNXZkQ0J0WVhSamFDQjBhR1VnYzNWd2NHeHBaV1FnYUdGemFBQlBkWFJ3ZFhRZ2NHOXBiblJsY2lCdGFYTnRZWFJqYUFCUGRYUndkWFFnYVhNZ2RHOXZJR3h2Ym1jQVUyRnNkQ0JwY3lCMGIyOGdiRzl1WndCVFpXTnlaWFFnYVhNZ2RHOXZJR3h2Ym1jQVVHRnpjM2R2Y21RZ2FYTWdkRzl2SUd4dmJtY0FRWE56YjJOcFlYUmxaQ0JrWVhSaElHbHpJSFJ2YnlCc2IyNW5BRlJvY21WaFpHbHVaeUJtWVdsc2RYSmxBRTFsYlc5eWVTQmpiM04wSUdseklIUnZieUJzWVhKblpRQlVhVzFsSUdOdmMzUWdhWE1nZEc5dklHeGhjbWRsQUZWdWEyNXZkMjRnWlhKeWIzSWdZMjlrWlFCaGNtZHZiakpwWkFCQmNtZHZiakpwWkFCRmJtTnZaR2x1WnlCbVlXbHNaV1FBUkdWamIyUnBibWNnWm1GcGJHVmtBR0Z5WjI5dU1tUUFRWEpuYjI0eVpBQkJjbWR2YmpKZlEyOXVkR1Y0ZENCamIyNTBaWGgwSUdseklFNVZURXdBVDNWMGNIVjBJSEJ2YVc1MFpYSWdhWE1nVGxWTVRBQlVhR1VnWVd4c2IyTmhkR1VnYldWdGIzSjVJR05oYkd4aVlXTnJJR2x6SUU1VlRFd0FWR2hsSUdaeVpXVWdiV1Z0YjNKNUlHTmhiR3hpWVdOcklHbHpJRTVWVEV3QVQwc0FKSFk5QUN4MFBRQXNjRDBBSkcwOUFGUm9aWEpsSUdseklHNXZJSE4xWTJnZ2RtVnljMmx2YmlCdlppQkJjbWR2YmpJQVUyRnNkQ0J3YjJsdWRHVnlJR2x6SUU1VlRFd3NJR0oxZENCellXeDBJR3hsYm1kMGFDQnBjeUJ1YjNRZ01BQlRaV055WlhRZ2NHOXBiblJsY2lCcGN5Qk9WVXhNTENCaWRYUWdjMlZqY21WMElHeGxibWQwYUNCcGN5QnViM1FnTUFCUVlYTnpkMjl5WkNCd2IybHVkR1Z5SUdseklFNVZURXdzSUdKMWRDQndZWE56ZDI5eVpDQnNaVzVuZEdnZ2FYTWdibTkwSURBQVFYTnpiMk5wWVhSbFpDQmtZWFJoSUhCdmFXNTBaWElnYVhNZ1RsVk1UQ3dnWW5WMElHRmtJR3hsYm1kMGFDQnBjeUJ1YjNRZ01BQW9iblZzYkNrQUFBQ2JDQUFBdXdjQUFFa0pBQURBQ1FBQXNBa0FBUEFIQUFBZkNBQUFNQWdBQU1rSUFBQnZDZ0FBNEFrQUFCWUtBQUE3Q2dBQVF3Z0FBQ3NMQUFEQkNnQUFrZ29BQVBRS0FBQUNDQUFBRVFnQUFGc0pBQUJiQ0FBQWRBa0FBSFFJQUFBRkNRQUFkQWNBQUMwSkFBQ2VCd0FBOUFnQUFHSUhBQUFZQ1FBQWlBY0FBT0VJQUFCT0J3QUEvd2tBQUZ3S0FBQUJBRUdrR0FzQkFnQkJ5eGdMQmYvLy8vLy9BRUdRR1F0QkVRQUtBQkVSRVFBQUFBQUZBQUFBQUFBQUNRQUFBQUFMQUFBQUFBQUFBQUFSQUE4S0VSRVJBd29IQUFFQUNRc0xBQUFKQmdzQUFBc0FCaEVBQUFBUkVSRUFRZUVaQ3lFTEFBQUFBQUFBQUFBUkFBb0tFUkVSQUFvQUFBSUFDUXNBQUFBSkFBc0FBQXNBUVpzYUN3RU1BRUduR2dzVkRBQUFBQUFNQUFBQUFBa01BQUFBQUFBTUFBQU1BRUhWR2dzQkRnQkI0Um9MRlEwQUFBQUVEUUFBQUFBSkRnQUFBQUFBRGdBQURnQkJqeHNMQVJBQVFac2JDeDRQQUFBQUFBOEFBQUFBQ1JBQUFBQUFBQkFBQUJBQUFCSUFBQUFTRWhJQVFkSWJDdzRTQUFBQUVoSVNBQUFBQUFBQUNRQkJneHdMQVFzQVFZOGNDeFVLQUFBQUFBb0FBQUFBQ1FzQUFBQUFBQXNBQUFzQVFiMGNDd0VNQUVISkhBc25EQUFBQUFBTUFBQUFBQWtNQUFBQUFBQU1BQUFNQUFBd01USXpORFUyTnpnNVFVSkRSRVZHQUVId0hBc0JBUUJCb0I0TEFvZ1BBRUhZSGdzRGtCRlEifSwxNDU6KCk9Pnt9LDk2NzooKT0+e319LEI9e307ZnVuY3Rpb24gUShBKXt2YXIgST1CW0FdO2lmKHZvaWQgMCE9PUkpcmV0dXJuIEkuZXhwb3J0czt2YXIgQz1CW0FdPXtleHBvcnRzOnt9fTtyZXR1cm4gZ1tBXS5jYWxsKEMuZXhwb3J0cyxDLEMuZXhwb3J0cyxRKSxDLmV4cG9ydHN9cmV0dXJuIEk9T2JqZWN0LmdldFByb3RvdHlwZU9mP0E9Pk9iamVjdC5nZXRQcm90b3R5cGVPZihBKTpBPT5BLl9fcHJvdG9fXyxRLnQ9ZnVuY3Rpb24oZyxCKXtpZigxJkImJihnPXRoaXMoZykpLDgmQilyZXR1cm4gZztpZigib2JqZWN0Ij09dHlwZW9mIGcmJmcpe2lmKDQmQiYmZy5fX2VzTW9kdWxlKXJldHVybiBnO2lmKDE2JkImJiJmdW5jdGlvbiI9PXR5cGVvZiBnLnRoZW4pcmV0dXJuIGd9dmFyIEM9T2JqZWN0LmNyZWF0ZShudWxsKTtRLnIoQyk7dmFyIEU9e307QT1BfHxbbnVsbCxJKHt9KSxJKFtdKSxJKEkpXTtmb3IodmFyIGk9MiZCJiZnOyJvYmplY3QiPT10eXBlb2YgaSYmIX5BLmluZGV4T2YoaSk7aT1JKGkpKU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGkpLmZvckVhY2goKEE9PkVbQV09KCk9PmdbQV0pKTtyZXR1cm4gRS5kZWZhdWx0PSgpPT5nLFEuZChDLEUpLEN9LFEuZD0oQSxJKT0+e2Zvcih2YXIgZyBpbiBJKVEubyhJLGcpJiYhUS5vKEEsZykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBLGcse2VudW1lcmFibGU6ITAsZ2V0OklbZ119KX0sUS5vPShBLEkpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoQSxJKSxRLnI9QT0+eyJ1bmRlZmluZWQiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShBLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6Ik1vZHVsZSJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoQSwiX19lc01vZHVsZSIse3ZhbHVlOiEwfSl9LFEoNjMxKX0pKCl9KSk7
`; // eslint-disable-line
const qrcode_base64 = `dmFyIFFSQ29kZTsoZnVuY3Rpb24oKXtmdW5jdGlvbiB0b1VURjgodGV4dCl7Y29uc3QgY29kZT1lbmNvZGVVUklDb21wb25lbnQodGV4dCk7bGV0IGJ5dGVzPVtdO2ZvcihsZXQgaT0wO2k8Y29kZS5sZW5ndGg7aSsrKXtjb25zdCBjPWNvZGUuY2hhckF0KGkpO2lmKGM9PT0iJSIpe2NvbnN0IGhleD1jb2RlLmNoYXJBdChpKzEpK2NvZGUuY2hhckF0KGkrMik7Y29uc3QgaGV4VmFsPXBhcnNlSW50KGhleCwxNik7Ynl0ZXMucHVzaChoZXhWYWwpO2krPTJ9ZWxzZXtieXRlcy5wdXNoKGMuY2hhckNvZGVBdCgwKSl9fXJldHVybiBieXRlc31mdW5jdGlvbiBRUjhiaXRCeXRlKGRhdGEpe3RoaXMubW9kZT1RUk1vZGUuTU9ERV84QklUX0JZVEU7dGhpcy5kYXRhPWRhdGE7dGhpcy5wYXJzZWREYXRhPXRvVVRGOChkYXRhKX1RUjhiaXRCeXRlLnByb3RvdHlwZT17Z2V0TGVuZ3RoOmZ1bmN0aW9uKGJ1ZmZlcil7cmV0dXJuIHRoaXMucGFyc2VkRGF0YS5sZW5ndGh9LHdyaXRlOmZ1bmN0aW9uKGJ1ZmZlcil7Zm9yKHZhciBpPTAsbD10aGlzLnBhcnNlZERhdGEubGVuZ3RoO2k8bDtpKyspe2J1ZmZlci5wdXQodGhpcy5wYXJzZWREYXRhW2ldLDgpfX19O2Z1bmN0aW9uIFFSQ29kZU1vZGVsKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpe3RoaXMudHlwZU51bWJlcj10eXBlTnVtYmVyO3RoaXMuZXJyb3JDb3JyZWN0TGV2ZWw9ZXJyb3JDb3JyZWN0TGV2ZWw7dGhpcy5tb2R1bGVzPW51bGw7dGhpcy5tb2R1bGVDb3VudD0wO3RoaXMuZGF0YUNhY2hlPW51bGw7dGhpcy5kYXRhTGlzdD1bXX1RUkNvZGVNb2RlbC5wcm90b3R5cGU9e2FkZERhdGE6ZnVuY3Rpb24oZGF0YSl7dmFyIG5ld0RhdGE9bmV3IFFSOGJpdEJ5dGUoZGF0YSk7dGhpcy5kYXRhTGlzdC5wdXNoKG5ld0RhdGEpO3RoaXMuZGF0YUNhY2hlPW51bGx9LGlzRGFyazpmdW5jdGlvbihyb3csY29sKXtpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93fHxjb2w8MHx8dGhpcy5tb2R1bGVDb3VudDw9Y29sKXt0aHJvdyBuZXcgRXJyb3Iocm93KyIsIitjb2wpfXJldHVybiB0aGlzLm1vZHVsZXNbcm93XVtjb2xdfSxnZXRNb2R1bGVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vZHVsZUNvdW50fSxtYWtlOmZ1bmN0aW9uKCl7dGhpcy5tYWtlSW1wbChmYWxzZSx0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKX0sbWFrZUltcGw6ZnVuY3Rpb24odGVzdCxtYXNrUGF0dGVybil7dGhpcy5tb2R1bGVDb3VudD10aGlzLnR5cGVOdW1iZXIqNCsxNzt0aGlzLm1vZHVsZXM9bmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO2Zvcih2YXIgcm93PTA7cm93PHRoaXMubW9kdWxlQ291bnQ7cm93Kyspe3RoaXMubW9kdWxlc1tyb3ddPW5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtmb3IodmFyIGNvbD0wO2NvbDx0aGlzLm1vZHVsZUNvdW50O2NvbCsrKXt0aGlzLm1vZHVsZXNbcm93XVtjb2xdPW51bGx9fXRoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybigwLDApO3RoaXMuc2V0dXBQb3NpdGlvblByb2JlUGF0dGVybih0aGlzLm1vZHVsZUNvdW50LTcsMCk7dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsdGhpcy5tb2R1bGVDb3VudC03KTt0aGlzLnNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuKCk7dGhpcy5zZXR1cFRpbWluZ1BhdHRlcm4oKTt0aGlzLnNldHVwVHlwZUluZm8odGVzdCxtYXNrUGF0dGVybik7aWYodGhpcy50eXBlTnVtYmVyPj03KXt0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KX1pZih0aGlzLmRhdGFDYWNoZT09bnVsbCl7dGhpcy5kYXRhQ2FjaGU9UVJDb2RlTW9kZWwuY3JlYXRlRGF0YSh0aGlzLnR5cGVOdW1iZXIsdGhpcy5lcnJvckNvcnJlY3RMZXZlbCx0aGlzLmRhdGFMaXN0KX10aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsbWFza1BhdHRlcm4pfSxzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuOmZ1bmN0aW9uKHJvdyxjb2wpe2Zvcih2YXIgcj0tMTtyPD03O3IrKyl7aWYocm93K3I8PS0xfHx0aGlzLm1vZHVsZUNvdW50PD1yb3crciljb250aW51ZTtmb3IodmFyIGM9LTE7Yzw9NztjKyspe2lmKGNvbCtjPD0tMXx8dGhpcy5tb2R1bGVDb3VudDw9Y29sK2MpY29udGludWU7aWYoMDw9ciYmcjw9NiYmKGM9PTB8fGM9PTYpfHwwPD1jJiZjPD02JiYocj09MHx8cj09Nil8fDI8PXImJnI8PTQmJjI8PWMmJmM8PTQpe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWV9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZX19fX0sZ2V0QmVzdE1hc2tQYXR0ZXJuOmZ1bmN0aW9uKCl7dmFyIG1pbkxvc3RQb2ludD0wO3ZhciBwYXR0ZXJuPTA7Zm9yKHZhciBpPTA7aTw4O2krKyl7dGhpcy5tYWtlSW1wbCh0cnVlLGkpO3ZhciBsb3N0UG9pbnQ9UVJVdGlsLmdldExvc3RQb2ludCh0aGlzKTtpZihpPT0wfHxtaW5Mb3N0UG9pbnQ+bG9zdFBvaW50KXttaW5Mb3N0UG9pbnQ9bG9zdFBvaW50O3BhdHRlcm49aX19cmV0dXJuIHBhdHRlcm59LGNyZWF0ZU1vdmllQ2xpcDpmdW5jdGlvbih0YXJnZXRfbWMsaW5zdGFuY2VfbmFtZSxkZXB0aCl7dmFyIHFyX21jPXRhcmdldF9tYy5jcmVhdGVFbXB0eU1vdmllQ2xpcChpbnN0YW5jZV9uYW1lLGRlcHRoKTt2YXIgY3M9MTt0aGlzLm1ha2UoKTtmb3IodmFyIHJvdz0wO3Jvdzx0aGlzLm1vZHVsZXMubGVuZ3RoO3JvdysrKXt2YXIgeT1yb3cqY3M7Zm9yKHZhciBjb2w9MDtjb2w8dGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoO2NvbCsrKXt2YXIgeD1jb2wqY3M7dmFyIGRhcms9dGhpcy5tb2R1bGVzW3Jvd11bY29sXTtpZihkYXJrKXtxcl9tYy5iZWdpbkZpbGwoMCwxMDApO3FyX21jLm1vdmVUbyh4LHkpO3FyX21jLmxpbmVUbyh4K2NzLHkpO3FyX21jLmxpbmVUbyh4K2NzLHkrY3MpO3FyX21jLmxpbmVUbyh4LHkrY3MpO3FyX21jLmVuZEZpbGwoKX19fXJldHVybiBxcl9tY30sc2V0dXBUaW1pbmdQYXR0ZXJuOmZ1bmN0aW9uKCl7Zm9yKHZhciByPTg7cjx0aGlzLm1vZHVsZUNvdW50LTg7cisrKXtpZih0aGlzLm1vZHVsZXNbcl1bNl0hPW51bGwpe2NvbnRpbnVlfXRoaXMubW9kdWxlc1tyXVs2XT1yJTI9PTB9Zm9yKHZhciBjPTg7Yzx0aGlzLm1vZHVsZUNvdW50LTg7YysrKXtpZih0aGlzLm1vZHVsZXNbNl1bY10hPW51bGwpe2NvbnRpbnVlfXRoaXMubW9kdWxlc1s2XVtjXT1jJTI9PTB9fSxzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybjpmdW5jdGlvbigpe3ZhciBwb3M9UVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO2Zvcih2YXIgaT0wO2k8cG9zLmxlbmd0aDtpKyspe2Zvcih2YXIgaj0wO2o8cG9zLmxlbmd0aDtqKyspe3ZhciByb3c9cG9zW2ldO3ZhciBjb2w9cG9zW2pdO2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbF0hPW51bGwpe2NvbnRpbnVlfWZvcih2YXIgcj0tMjtyPD0yO3IrKyl7Zm9yKHZhciBjPS0yO2M8PTI7YysrKXtpZihyPT0tMnx8cj09Mnx8Yz09LTJ8fGM9PTJ8fHI9PTAmJmM9PTApe3RoaXMubW9kdWxlc1tyb3crcl1bY29sK2NdPXRydWV9ZWxzZXt0aGlzLm1vZHVsZXNbcm93K3JdW2NvbCtjXT1mYWxzZX19fX19fSxzZXR1cFR5cGVOdW1iZXI6ZnVuY3Rpb24odGVzdCl7dmFyIGJpdHM9UVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtmb3IodmFyIGk9MDtpPDE4O2krKyl7dmFyIG1vZD0hdGVzdCYmKGJpdHM+PmkmMSk9PTE7dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaS8zKV1baSUzK3RoaXMubW9kdWxlQ291bnQtOC0zXT1tb2R9Zm9yKHZhciBpPTA7aTwxODtpKyspe3ZhciBtb2Q9IXRlc3QmJihiaXRzPj5pJjEpPT0xO3RoaXMubW9kdWxlc1tpJTMrdGhpcy5tb2R1bGVDb3VudC04LTNdW01hdGguZmxvb3IoaS8zKV09bW9kfX0sc2V0dXBUeXBlSW5mbzpmdW5jdGlvbih0ZXN0LG1hc2tQYXR0ZXJuKXt2YXIgZGF0YT10aGlzLmVycm9yQ29ycmVjdExldmVsPDwzfG1hc2tQYXR0ZXJuO3ZhciBiaXRzPVFSVXRpbC5nZXRCQ0hUeXBlSW5mbyhkYXRhKTtmb3IodmFyIGk9MDtpPDE1O2krKyl7dmFyIG1vZD0hdGVzdCYmKGJpdHM+PmkmMSk9PTE7aWYoaTw2KXt0aGlzLm1vZHVsZXNbaV1bOF09bW9kfWVsc2UgaWYoaTw4KXt0aGlzLm1vZHVsZXNbaSsxXVs4XT1tb2R9ZWxzZXt0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudC0xNStpXVs4XT1tb2R9fWZvcih2YXIgaT0wO2k8MTU7aSsrKXt2YXIgbW9kPSF0ZXN0JiYoYml0cz4+aSYxKT09MTtpZihpPDgpe3RoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50LWktMV09bW9kfWVsc2UgaWYoaTw5KXt0aGlzLm1vZHVsZXNbOF1bMTUtaS0xKzFdPW1vZH1lbHNle3RoaXMubW9kdWxlc1s4XVsxNS1pLTFdPW1vZH19dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQtOF1bOF09IXRlc3R9LG1hcERhdGE6ZnVuY3Rpb24oZGF0YSxtYXNrUGF0dGVybil7dmFyIGluYz0tMTt2YXIgcm93PXRoaXMubW9kdWxlQ291bnQtMTt2YXIgYml0SW5kZXg9Nzt2YXIgYnl0ZUluZGV4PTA7Zm9yKHZhciBjb2w9dGhpcy5tb2R1bGVDb3VudC0xO2NvbD4wO2NvbC09Mil7aWYoY29sPT02KWNvbC0tO3doaWxlKHRydWUpe2Zvcih2YXIgYz0wO2M8MjtjKyspe2lmKHRoaXMubW9kdWxlc1tyb3ddW2NvbC1jXT09bnVsbCl7dmFyIGRhcms9ZmFsc2U7aWYoYnl0ZUluZGV4PGRhdGEubGVuZ3RoKXtkYXJrPShkYXRhW2J5dGVJbmRleF0+Pj5iaXRJbmRleCYxKT09MX12YXIgbWFzaz1RUlV0aWwuZ2V0TWFzayhtYXNrUGF0dGVybixyb3csY29sLWMpO2lmKG1hc2spe2Rhcms9IWRhcmt9dGhpcy5tb2R1bGVzW3Jvd11bY29sLWNdPWRhcms7Yml0SW5kZXgtLTtpZihiaXRJbmRleD09LTEpe2J5dGVJbmRleCsrO2JpdEluZGV4PTd9fX1yb3crPWluYztpZihyb3c8MHx8dGhpcy5tb2R1bGVDb3VudDw9cm93KXtyb3ctPWluYztpbmM9LWluYzticmVha319fX19O1FSQ29kZU1vZGVsLlBBRDA9MjM2O1FSQ29kZU1vZGVsLlBBRDE9MTc7UVJDb2RlTW9kZWwuY3JlYXRlRGF0YT1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsLGRhdGFMaXN0KXt2YXIgcnNCbG9ja3M9UVJSU0Jsb2NrLmdldFJTQmxvY2tzKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO3ZhciBidWZmZXI9bmV3IFFSQml0QnVmZmVyO2Zvcih2YXIgaT0wO2k8ZGF0YUxpc3QubGVuZ3RoO2krKyl7dmFyIGRhdGE9ZGF0YUxpc3RbaV07YnVmZmVyLnB1dChkYXRhLm1vZGUsNCk7YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLHR5cGVOdW1iZXIpKTtkYXRhLndyaXRlKGJ1ZmZlcil9dmFyIHRvdGFsRGF0YUNvdW50PTA7Zm9yKHZhciBpPTA7aTxyc0Jsb2Nrcy5sZW5ndGg7aSsrKXt0b3RhbERhdGFDb3VudCs9cnNCbG9ja3NbaV0uZGF0YUNvdW50fWlmKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKT50b3RhbERhdGFDb3VudCo4KXt0aHJvdyBuZXcgRXJyb3IoImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoIitidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkrIj4iK3RvdGFsRGF0YUNvdW50KjgrIikiKX1pZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkrNDw9dG90YWxEYXRhQ291bnQqOCl7YnVmZmVyLnB1dCgwLDQpfXdoaWxlKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSU4IT0wKXtidWZmZXIucHV0Qml0KGZhbHNlKX13aGlsZSh0cnVlKXtpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+PXRvdGFsRGF0YUNvdW50Kjgpe2JyZWFrfWJ1ZmZlci5wdXQoUVJDb2RlTW9kZWwuUEFEMCw4KTtpZihidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCk+PXRvdGFsRGF0YUNvdW50Kjgpe2JyZWFrfWJ1ZmZlci5wdXQoUVJDb2RlTW9kZWwuUEFEMSw4KX1yZXR1cm4gUVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXMoYnVmZmVyLHJzQmxvY2tzKX07UVJDb2RlTW9kZWwuY3JlYXRlQnl0ZXM9ZnVuY3Rpb24oYnVmZmVyLHJzQmxvY2tzKXt2YXIgb2Zmc2V0PTA7dmFyIG1heERjQ291bnQ9MDt2YXIgbWF4RWNDb3VudD0wO3ZhciBkY2RhdGE9bmV3IEFycmF5KHJzQmxvY2tzLmxlbmd0aCk7dmFyIGVjZGF0YT1uZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtmb3IodmFyIHI9MDtyPHJzQmxvY2tzLmxlbmd0aDtyKyspe3ZhciBkY0NvdW50PXJzQmxvY2tzW3JdLmRhdGFDb3VudDt2YXIgZWNDb3VudD1yc0Jsb2Nrc1tyXS50b3RhbENvdW50LWRjQ291bnQ7bWF4RGNDb3VudD1NYXRoLm1heChtYXhEY0NvdW50LGRjQ291bnQpO21heEVjQ291bnQ9TWF0aC5tYXgobWF4RWNDb3VudCxlY0NvdW50KTtkY2RhdGFbcl09bmV3IEFycmF5KGRjQ291bnQpO2Zvcih2YXIgaT0wO2k8ZGNkYXRhW3JdLmxlbmd0aDtpKyspe2RjZGF0YVtyXVtpXT0yNTUmYnVmZmVyLmJ1ZmZlcltpK29mZnNldF19b2Zmc2V0Kz1kY0NvdW50O3ZhciByc1BvbHk9UVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7dmFyIHJhd1BvbHk9bmV3IFFSUG9seW5vbWlhbChkY2RhdGFbcl0scnNQb2x5LmdldExlbmd0aCgpLTEpO3ZhciBtb2RQb2x5PXJhd1BvbHkubW9kKHJzUG9seSk7ZWNkYXRhW3JdPW5ldyBBcnJheShyc1BvbHkuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTxlY2RhdGFbcl0ubGVuZ3RoO2krKyl7dmFyIG1vZEluZGV4PWkrbW9kUG9seS5nZXRMZW5ndGgoKS1lY2RhdGFbcl0ubGVuZ3RoO2VjZGF0YVtyXVtpXT1tb2RJbmRleD49MD9tb2RQb2x5LmdldChtb2RJbmRleCk6MH19dmFyIHRvdGFsQ29kZUNvdW50PTA7Zm9yKHZhciBpPTA7aTxyc0Jsb2Nrcy5sZW5ndGg7aSsrKXt0b3RhbENvZGVDb3VudCs9cnNCbG9ja3NbaV0udG90YWxDb3VudH12YXIgZGF0YT1uZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO3ZhciBpbmRleD0wO2Zvcih2YXIgaT0wO2k8bWF4RGNDb3VudDtpKyspe2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7aWYoaTxkY2RhdGFbcl0ubGVuZ3RoKXtkYXRhW2luZGV4KytdPWRjZGF0YVtyXVtpXX19fWZvcih2YXIgaT0wO2k8bWF4RWNDb3VudDtpKyspe2Zvcih2YXIgcj0wO3I8cnNCbG9ja3MubGVuZ3RoO3IrKyl7aWYoaTxlY2RhdGFbcl0ubGVuZ3RoKXtkYXRhW2luZGV4KytdPWVjZGF0YVtyXVtpXX19fXJldHVybiBkYXRhfTt2YXIgUVJNb2RlPXtNT0RFX05VTUJFUjoxPDwwLE1PREVfQUxQSEFfTlVNOjE8PDEsTU9ERV84QklUX0JZVEU6MTw8MixNT0RFX0tBTkpJOjE8PDN9O3ZhciBRUkVycm9yQ29ycmVjdExldmVsPXtMOjEsTTowLFE6MyxIOjJ9O3ZhciBRUk1hc2tQYXR0ZXJuPXtQQVRURVJOMDAwOjAsUEFUVEVSTjAwMToxLFBBVFRFUk4wMTA6MixQQVRURVJOMDExOjMsUEFUVEVSTjEwMDo0LFBBVFRFUk4xMDE6NSxQQVRURVJOMTEwOjYsUEFUVEVSTjExMTo3fTt2YXIgUVJVdGlsPXtQQVRURVJOX1BPU0lUSU9OX1RBQkxFOltbXSxbNiwxOF0sWzYsMjJdLFs2LDI2XSxbNiwzMF0sWzYsMzRdLFs2LDIyLDM4XSxbNiwyNCw0Ml0sWzYsMjYsNDZdLFs2LDI4LDUwXSxbNiwzMCw1NF0sWzYsMzIsNThdLFs2LDM0LDYyXSxbNiwyNiw0Niw2Nl0sWzYsMjYsNDgsNzBdLFs2LDI2LDUwLDc0XSxbNiwzMCw1NCw3OF0sWzYsMzAsNTYsODJdLFs2LDMwLDU4LDg2XSxbNiwzNCw2Miw5MF0sWzYsMjgsNTAsNzIsOTRdLFs2LDI2LDUwLDc0LDk4XSxbNiwzMCw1NCw3OCwxMDJdLFs2LDI4LDU0LDgwLDEwNl0sWzYsMzIsNTgsODQsMTEwXSxbNiwzMCw1OCw4NiwxMTRdLFs2LDM0LDYyLDkwLDExOF0sWzYsMjYsNTAsNzQsOTgsMTIyXSxbNiwzMCw1NCw3OCwxMDIsMTI2XSxbNiwyNiw1Miw3OCwxMDQsMTMwXSxbNiwzMCw1Niw4MiwxMDgsMTM0XSxbNiwzNCw2MCw4NiwxMTIsMTM4XSxbNiwzMCw1OCw4NiwxMTQsMTQyXSxbNiwzNCw2Miw5MCwxMTgsMTQ2XSxbNiwzMCw1NCw3OCwxMDIsMTI2LDE1MF0sWzYsMjQsNTAsNzYsMTAyLDEyOCwxNTRdLFs2LDI4LDU0LDgwLDEwNiwxMzIsMTU4XSxbNiwzMiw1OCw4NCwxMTAsMTM2LDE2Ml0sWzYsMjYsNTQsODIsMTEwLDEzOCwxNjZdLFs2LDMwLDU4LDg2LDExNCwxNDIsMTcwXV0sRzE1OjE8PDEwfDE8PDh8MTw8NXwxPDw0fDE8PDJ8MTw8MXwxPDwwLEcxODoxPDwxMnwxPDwxMXwxPDwxMHwxPDw5fDE8PDh8MTw8NXwxPDwyfDE8PDAsRzE1X01BU0s6MTw8MTR8MTw8MTJ8MTw8MTB8MTw8NHwxPDwxLGdldEJDSFR5cGVJbmZvOmZ1bmN0aW9uKGRhdGEpe3ZhciBkPWRhdGE8PDEwO3doaWxlKFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSk+PTApe2RePVFSVXRpbC5HMTU8PFFSVXRpbC5nZXRCQ0hEaWdpdChkKS1RUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSl9cmV0dXJuKGRhdGE8PDEwfGQpXlFSVXRpbC5HMTVfTUFTS30sZ2V0QkNIVHlwZU51bWJlcjpmdW5jdGlvbihkYXRhKXt2YXIgZD1kYXRhPDwxMjt3aGlsZShRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpPj0wKXtkXj1RUlV0aWwuRzE4PDxRUlV0aWwuZ2V0QkNIRGlnaXQoZCktUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpfXJldHVybiBkYXRhPDwxMnxkfSxnZXRCQ0hEaWdpdDpmdW5jdGlvbihkYXRhKXt2YXIgZGlnaXQ9MDt3aGlsZShkYXRhIT0wKXtkaWdpdCsrO2RhdGE+Pj49MX1yZXR1cm4gZGlnaXR9LGdldFBhdHRlcm5Qb3NpdGlvbjpmdW5jdGlvbih0eXBlTnVtYmVyKXtyZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlci0xXX0sZ2V0TWFzazpmdW5jdGlvbihtYXNrUGF0dGVybixpLGope3N3aXRjaChtYXNrUGF0dGVybil7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6cmV0dXJuKGkraiklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTpyZXR1cm4gaSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOnJldHVybiBqJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6cmV0dXJuKGkraiklMz09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDpyZXR1cm4oTWF0aC5mbG9vcihpLzIpK01hdGguZmxvb3Ioai8zKSklMj09MDtjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMTpyZXR1cm4gaSpqJTIraSpqJTM9PTA7Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMTA6cmV0dXJuKGkqaiUyK2kqaiUzKSUyPT0wO2Nhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTExOnJldHVybihpKmolMysoaStqKSUyKSUyPT0wO2RlZmF1bHQ6dGhyb3cgbmV3IEVycm9yKCJiYWQgbWFza1BhdHRlcm46IittYXNrUGF0dGVybil9fSxnZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsOmZ1bmN0aW9uKGVycm9yQ29ycmVjdExlbmd0aCl7dmFyIGE9bmV3IFFSUG9seW5vbWlhbChbMV0sMCk7Zm9yKHZhciBpPTA7aTxlcnJvckNvcnJlY3RMZW5ndGg7aSsrKXthPWEubXVsdGlwbHkobmV3IFFSUG9seW5vbWlhbChbMSxRUk1hdGguZ2V4cChpKV0sMCkpfXJldHVybiBhfSxnZXRMZW5ndGhJbkJpdHM6ZnVuY3Rpb24obW9kZSx0eXBlKXtpZigxPD10eXBlJiZ0eXBlPDEwKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEwO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiA5O2Nhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOnJldHVybiA4O2Nhc2UgUVJNb2RlLk1PREVfS0FOSkk6cmV0dXJuIDg7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZSBpZih0eXBlPDI3KXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDEyO2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMTtjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTA7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZSBpZih0eXBlPDQxKXtzd2l0Y2gobW9kZSl7Y2FzZSBRUk1vZGUuTU9ERV9OVU1CRVI6cmV0dXJuIDE0O2Nhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNOnJldHVybiAxMztjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTpyZXR1cm4gMTY7Y2FzZSBRUk1vZGUuTU9ERV9LQU5KSTpyZXR1cm4gMTI7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoIm1vZGU6Iittb2RlKX19ZWxzZXt0aHJvdyBuZXcgRXJyb3IoInR5cGU6Iit0eXBlKX19LGdldExvc3RQb2ludDpmdW5jdGlvbihxckNvZGUpe3ZhciBtb2R1bGVDb3VudD1xckNvZGUuZ2V0TW9kdWxlQ291bnQoKTt2YXIgbG9zdFBvaW50PTA7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQ7cm93Kyspe2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXt2YXIgc2FtZUNvdW50PTA7dmFyIGRhcms9cXJDb2RlLmlzRGFyayhyb3csY29sKTtmb3IodmFyIHI9LTE7cjw9MTtyKyspe2lmKHJvdytyPDB8fG1vZHVsZUNvdW50PD1yb3crcil7Y29udGludWV9Zm9yKHZhciBjPS0xO2M8PTE7YysrKXtpZihjb2wrYzwwfHxtb2R1bGVDb3VudDw9Y29sK2Mpe2NvbnRpbnVlfWlmKHI9PTAmJmM9PTApe2NvbnRpbnVlfWlmKGRhcms9PXFyQ29kZS5pc0Rhcmsocm93K3IsY29sK2MpKXtzYW1lQ291bnQrK319fWlmKHNhbWVDb3VudD41KXtsb3N0UG9pbnQrPTMrc2FtZUNvdW50LTV9fX1mb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudC0xO3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC0xO2NvbCsrKXt2YXIgY291bnQ9MDtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKzEpKWNvdW50Kys7aWYocXJDb2RlLmlzRGFyayhyb3crMSxjb2wrMSkpY291bnQrKztpZihjb3VudD09MHx8Y291bnQ9PTQpe2xvc3RQb2ludCs9M319fWZvcih2YXIgcm93PTA7cm93PG1vZHVsZUNvdW50O3JvdysrKXtmb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudC02O2NvbCsrKXtpZihxckNvZGUuaXNEYXJrKHJvdyxjb2wpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzEpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrMikmJnFyQ29kZS5pc0Rhcmsocm93LGNvbCszKSYmcXJDb2RlLmlzRGFyayhyb3csY29sKzQpJiYhcXJDb2RlLmlzRGFyayhyb3csY29sKzUpJiZxckNvZGUuaXNEYXJrKHJvdyxjb2wrNikpe2xvc3RQb2ludCs9NDB9fX1mb3IodmFyIGNvbD0wO2NvbDxtb2R1bGVDb3VudDtjb2wrKyl7Zm9yKHZhciByb3c9MDtyb3c8bW9kdWxlQ291bnQtNjtyb3crKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSYmIXFyQ29kZS5pc0Rhcmsocm93KzEsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crMixjb2wpJiZxckNvZGUuaXNEYXJrKHJvdyszLGNvbCkmJnFyQ29kZS5pc0Rhcmsocm93KzQsY29sKSYmIXFyQ29kZS5pc0Rhcmsocm93KzUsY29sKSYmcXJDb2RlLmlzRGFyayhyb3crNixjb2wpKXtsb3N0UG9pbnQrPTQwfX19dmFyIGRhcmtDb3VudD0wO2Zvcih2YXIgY29sPTA7Y29sPG1vZHVsZUNvdW50O2NvbCsrKXtmb3IodmFyIHJvdz0wO3Jvdzxtb2R1bGVDb3VudDtyb3crKyl7aWYocXJDb2RlLmlzRGFyayhyb3csY29sKSl7ZGFya0NvdW50Kyt9fX12YXIgcmF0aW89TWF0aC5hYnMoMTAwKmRhcmtDb3VudC9tb2R1bGVDb3VudC9tb2R1bGVDb3VudC01MCkvNTtsb3N0UG9pbnQrPXJhdGlvKjEwO3JldHVybiBsb3N0UG9pbnR9fTt2YXIgUVJNYXRoPXtnbG9nOmZ1bmN0aW9uKG4pe2lmKG48MSl7dGhyb3cgbmV3IEVycm9yKCJnbG9nKCIrbisiKSIpfXJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dfSxnZXhwOmZ1bmN0aW9uKG4pe3doaWxlKG48MCl7bis9MjU1fXdoaWxlKG4+PTI1Nil7bi09MjU1fXJldHVybiBRUk1hdGguRVhQX1RBQkxFW25dfSxFWFBfVEFCTEU6bmV3IEFycmF5KDI1NiksTE9HX1RBQkxFOm5ldyBBcnJheSgyNTYpfTtmb3IodmFyIGk9MDtpPDg7aSsrKXtRUk1hdGguRVhQX1RBQkxFW2ldPTE8PGl9Zm9yKHZhciBpPTg7aTwyNTY7aSsrKXtRUk1hdGguRVhQX1RBQkxFW2ldPVFSTWF0aC5FWFBfVEFCTEVbaS00XV5RUk1hdGguRVhQX1RBQkxFW2ktNV1eUVJNYXRoLkVYUF9UQUJMRVtpLTZdXlFSTWF0aC5FWFBfVEFCTEVbaS04XX1mb3IodmFyIGk9MDtpPDI1NTtpKyspe1FSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXV09aX1mdW5jdGlvbiBRUlBvbHlub21pYWwobnVtLHNoaWZ0KXtpZihudW0ubGVuZ3RoPT11bmRlZmluZWQpe3Rocm93IG5ldyBFcnJvcihudW0ubGVuZ3RoKyIvIitzaGlmdCl9dmFyIG9mZnNldD0wO3doaWxlKG9mZnNldDxudW0ubGVuZ3RoJiZudW1bb2Zmc2V0XT09MCl7b2Zmc2V0Kyt9dGhpcy5udW09bmV3IEFycmF5KG51bS5sZW5ndGgtb2Zmc2V0K3NoaWZ0KTtmb3IodmFyIGk9MDtpPG51bS5sZW5ndGgtb2Zmc2V0O2krKyl7dGhpcy5udW1baV09bnVtW2krb2Zmc2V0XX19UVJQb2x5bm9taWFsLnByb3RvdHlwZT17Z2V0OmZ1bmN0aW9uKGluZGV4KXtyZXR1cm4gdGhpcy5udW1baW5kZXhdfSxnZXRMZW5ndGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5udW0ubGVuZ3RofSxtdWx0aXBseTpmdW5jdGlvbihlKXt2YXIgbnVtPW5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpK2UuZ2V0TGVuZ3RoKCktMSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7Zm9yKHZhciBqPTA7ajxlLmdldExlbmd0aCgpO2orKyl7bnVtW2kral1ePVFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKHRoaXMuZ2V0KGkpKStRUk1hdGguZ2xvZyhlLmdldChqKSkpfX1yZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCl9LG1vZDpmdW5jdGlvbihlKXtpZih0aGlzLmdldExlbmd0aCgpLWUuZ2V0TGVuZ3RoKCk8MCl7cmV0dXJuIHRoaXN9dmFyIHJhdGlvPVFSTWF0aC5nbG9nKHRoaXMuZ2V0KDApKS1RUk1hdGguZ2xvZyhlLmdldCgwKSk7dmFyIG51bT1uZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSk7Zm9yKHZhciBpPTA7aTx0aGlzLmdldExlbmd0aCgpO2krKyl7bnVtW2ldPXRoaXMuZ2V0KGkpfWZvcih2YXIgaT0wO2k8ZS5nZXRMZW5ndGgoKTtpKyspe251bVtpXV49UVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkpK3JhdGlvKX1yZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sMCkubW9kKGUpfX07ZnVuY3Rpb24gUVJSU0Jsb2NrKHRvdGFsQ291bnQsZGF0YUNvdW50KXt0aGlzLnRvdGFsQ291bnQ9dG90YWxDb3VudDt0aGlzLmRhdGFDb3VudD1kYXRhQ291bnR9UVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFPVtbMSwyNiwxOV0sWzEsMjYsMTZdLFsxLDI2LDEzXSxbMSwyNiw5XSxbMSw0NCwzNF0sWzEsNDQsMjhdLFsxLDQ0LDIyXSxbMSw0NCwxNl0sWzEsNzAsNTVdLFsxLDcwLDQ0XSxbMiwzNSwxN10sWzIsMzUsMTNdLFsxLDEwMCw4MF0sWzIsNTAsMzJdLFsyLDUwLDI0XSxbNCwyNSw5XSxbMSwxMzQsMTA4XSxbMiw2Nyw0M10sWzIsMzMsMTUsMiwzNCwxNl0sWzIsMzMsMTEsMiwzNCwxMl0sWzIsODYsNjhdLFs0LDQzLDI3XSxbNCw0MywxOV0sWzQsNDMsMTVdLFsyLDk4LDc4XSxbNCw0OSwzMV0sWzIsMzIsMTQsNCwzMywxNV0sWzQsMzksMTMsMSw0MCwxNF0sWzIsMTIxLDk3XSxbMiw2MCwzOCwyLDYxLDM5XSxbNCw0MCwxOCwyLDQxLDE5XSxbNCw0MCwxNCwyLDQxLDE1XSxbMiwxNDYsMTE2XSxbMyw1OCwzNiwyLDU5LDM3XSxbNCwzNiwxNiw0LDM3LDE3XSxbNCwzNiwxMiw0LDM3LDEzXSxbMiw4Niw2OCwyLDg3LDY5XSxbNCw2OSw0MywxLDcwLDQ0XSxbNiw0MywxOSwyLDQ0LDIwXSxbNiw0MywxNSwyLDQ0LDE2XSxbNCwxMDEsODFdLFsxLDgwLDUwLDQsODEsNTFdLFs0LDUwLDIyLDQsNTEsMjNdLFszLDM2LDEyLDgsMzcsMTNdLFsyLDExNiw5MiwyLDExNyw5M10sWzYsNTgsMzYsMiw1OSwzN10sWzQsNDYsMjAsNiw0NywyMV0sWzcsNDIsMTQsNCw0MywxNV0sWzQsMTMzLDEwN10sWzgsNTksMzcsMSw2MCwzOF0sWzgsNDQsMjAsNCw0NSwyMV0sWzEyLDMzLDExLDQsMzQsMTJdLFszLDE0NSwxMTUsMSwxNDYsMTE2XSxbNCw2NCw0MCw1LDY1LDQxXSxbMTEsMzYsMTYsNSwzNywxN10sWzExLDM2LDEyLDUsMzcsMTNdLFs1LDEwOSw4NywxLDExMCw4OF0sWzUsNjUsNDEsNSw2Niw0Ml0sWzUsNTQsMjQsNyw1NSwyNV0sWzExLDM2LDEyXSxbNSwxMjIsOTgsMSwxMjMsOTldLFs3LDczLDQ1LDMsNzQsNDZdLFsxNSw0MywxOSwyLDQ0LDIwXSxbMyw0NSwxNSwxMyw0NiwxNl0sWzEsMTM1LDEwNyw1LDEzNiwxMDhdLFsxMCw3NCw0NiwxLDc1LDQ3XSxbMSw1MCwyMiwxNSw1MSwyM10sWzIsNDIsMTQsMTcsNDMsMTVdLFs1LDE1MCwxMjAsMSwxNTEsMTIxXSxbOSw2OSw0Myw0LDcwLDQ0XSxbMTcsNTAsMjIsMSw1MSwyM10sWzIsNDIsMTQsMTksNDMsMTVdLFszLDE0MSwxMTMsNCwxNDIsMTE0XSxbMyw3MCw0NCwxMSw3MSw0NV0sWzE3LDQ3LDIxLDQsNDgsMjJdLFs5LDM5LDEzLDE2LDQwLDE0XSxbMywxMzUsMTA3LDUsMTM2LDEwOF0sWzMsNjcsNDEsMTMsNjgsNDJdLFsxNSw1NCwyNCw1LDU1LDI1XSxbMTUsNDMsMTUsMTAsNDQsMTZdLFs0LDE0NCwxMTYsNCwxNDUsMTE3XSxbMTcsNjgsNDJdLFsxNyw1MCwyMiw2LDUxLDIzXSxbMTksNDYsMTYsNiw0NywxN10sWzIsMTM5LDExMSw3LDE0MCwxMTJdLFsxNyw3NCw0Nl0sWzcsNTQsMjQsMTYsNTUsMjVdLFszNCwzNywxM10sWzQsMTUxLDEyMSw1LDE1MiwxMjJdLFs0LDc1LDQ3LDE0LDc2LDQ4XSxbMTEsNTQsMjQsMTQsNTUsMjVdLFsxNiw0NSwxNSwxNCw0NiwxNl0sWzYsMTQ3LDExNyw0LDE0OCwxMThdLFs2LDczLDQ1LDE0LDc0LDQ2XSxbMTEsNTQsMjQsMTYsNTUsMjVdLFszMCw0NiwxNiwyLDQ3LDE3XSxbOCwxMzIsMTA2LDQsMTMzLDEwN10sWzgsNzUsNDcsMTMsNzYsNDhdLFs3LDU0LDI0LDIyLDU1LDI1XSxbMjIsNDUsMTUsMTMsNDYsMTZdLFsxMCwxNDIsMTE0LDIsMTQzLDExNV0sWzE5LDc0LDQ2LDQsNzUsNDddLFsyOCw1MCwyMiw2LDUxLDIzXSxbMzMsNDYsMTYsNCw0NywxN10sWzgsMTUyLDEyMiw0LDE1MywxMjNdLFsyMiw3Myw0NSwzLDc0LDQ2XSxbOCw1MywyMywyNiw1NCwyNF0sWzEyLDQ1LDE1LDI4LDQ2LDE2XSxbMywxNDcsMTE3LDEwLDE0OCwxMThdLFszLDczLDQ1LDIzLDc0LDQ2XSxbNCw1NCwyNCwzMSw1NSwyNV0sWzExLDQ1LDE1LDMxLDQ2LDE2XSxbNywxNDYsMTE2LDcsMTQ3LDExN10sWzIxLDczLDQ1LDcsNzQsNDZdLFsxLDUzLDIzLDM3LDU0LDI0XSxbMTksNDUsMTUsMjYsNDYsMTZdLFs1LDE0NSwxMTUsMTAsMTQ2LDExNl0sWzE5LDc1LDQ3LDEwLDc2LDQ4XSxbMTUsNTQsMjQsMjUsNTUsMjVdLFsyMyw0NSwxNSwyNSw0NiwxNl0sWzEzLDE0NSwxMTUsMywxNDYsMTE2XSxbMiw3NCw0NiwyOSw3NSw0N10sWzQyLDU0LDI0LDEsNTUsMjVdLFsyMyw0NSwxNSwyOCw0NiwxNl0sWzE3LDE0NSwxMTVdLFsxMCw3NCw0NiwyMyw3NSw0N10sWzEwLDU0LDI0LDM1LDU1LDI1XSxbMTksNDUsMTUsMzUsNDYsMTZdLFsxNywxNDUsMTE1LDEsMTQ2LDExNl0sWzE0LDc0LDQ2LDIxLDc1LDQ3XSxbMjksNTQsMjQsMTksNTUsMjVdLFsxMSw0NSwxNSw0Niw0NiwxNl0sWzEzLDE0NSwxMTUsNiwxNDYsMTE2XSxbMTQsNzQsNDYsMjMsNzUsNDddLFs0NCw1NCwyNCw3LDU1LDI1XSxbNTksNDYsMTYsMSw0NywxN10sWzEyLDE1MSwxMjEsNywxNTIsMTIyXSxbMTIsNzUsNDcsMjYsNzYsNDhdLFszOSw1NCwyNCwxNCw1NSwyNV0sWzIyLDQ1LDE1LDQxLDQ2LDE2XSxbNiwxNTEsMTIxLDE0LDE1MiwxMjJdLFs2LDc1LDQ3LDM0LDc2LDQ4XSxbNDYsNTQsMjQsMTAsNTUsMjVdLFsyLDQ1LDE1LDY0LDQ2LDE2XSxbMTcsMTUyLDEyMiw0LDE1MywxMjNdLFsyOSw3NCw0NiwxNCw3NSw0N10sWzQ5LDU0LDI0LDEwLDU1LDI1XSxbMjQsNDUsMTUsNDYsNDYsMTZdLFs0LDE1MiwxMjIsMTgsMTUzLDEyM10sWzEzLDc0LDQ2LDMyLDc1LDQ3XSxbNDgsNTQsMjQsMTQsNTUsMjVdLFs0Miw0NSwxNSwzMiw0NiwxNl0sWzIwLDE0NywxMTcsNCwxNDgsMTE4XSxbNDAsNzUsNDcsNyw3Niw0OF0sWzQzLDU0LDI0LDIyLDU1LDI1XSxbMTAsNDUsMTUsNjcsNDYsMTZdLFsxOSwxNDgsMTE4LDYsMTQ5LDExOV0sWzE4LDc1LDQ3LDMxLDc2LDQ4XSxbMzQsNTQsMjQsMzQsNTUsMjVdLFsyMCw0NSwxNSw2MSw0NiwxNl1dO1FSUlNCbG9jay5nZXRSU0Jsb2Nrcz1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKXt2YXIgcnNCbG9jaz1RUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlKHR5cGVOdW1iZXIsZXJyb3JDb3JyZWN0TGV2ZWwpO2lmKHJzQmxvY2s9PXVuZGVmaW5lZCl7dGhyb3cgbmV3IEVycm9yKCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOiIrdHlwZU51bWJlcisiL2Vycm9yQ29ycmVjdExldmVsOiIrZXJyb3JDb3JyZWN0TGV2ZWwpfXZhciBsZW5ndGg9cnNCbG9jay5sZW5ndGgvMzt2YXIgbGlzdD1bXTtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3ZhciBjb3VudD1yc0Jsb2NrW2kqMyswXTt2YXIgdG90YWxDb3VudD1yc0Jsb2NrW2kqMysxXTt2YXIgZGF0YUNvdW50PXJzQmxvY2tbaSozKzJdO2Zvcih2YXIgaj0wO2o8Y291bnQ7aisrKXtsaXN0LnB1c2gobmV3IFFSUlNCbG9jayh0b3RhbENvdW50LGRhdGFDb3VudCkpfX1yZXR1cm4gbGlzdH07UVJSU0Jsb2NrLmdldFJzQmxvY2tUYWJsZT1mdW5jdGlvbih0eXBlTnVtYmVyLGVycm9yQ29ycmVjdExldmVsKXtzd2l0Y2goZXJyb3JDb3JyZWN0TGV2ZWwpe2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5MOnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCswXTtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTTpyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyLTEpKjQrMV07Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLlE6cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlci0xKSo0KzJdO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5IOnJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXItMSkqNCszXTtkZWZhdWx0OnJldHVybiB1bmRlZmluZWR9fTtmdW5jdGlvbiBRUkJpdEJ1ZmZlcigpe3RoaXMuYnVmZmVyPVtdO3RoaXMubGVuZ3RoPTB9UVJCaXRCdWZmZXIucHJvdG90eXBlPXtnZXQ6ZnVuY3Rpb24oaW5kZXgpe3ZhciBidWZJbmRleD1NYXRoLmZsb29yKGluZGV4LzgpO3JldHVybih0aGlzLmJ1ZmZlcltidWZJbmRleF0+Pj43LWluZGV4JTgmMSk9PTF9LHB1dDpmdW5jdGlvbihudW0sbGVuZ3RoKXtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKyspe3RoaXMucHV0Qml0KChudW0+Pj5sZW5ndGgtaS0xJjEpPT0xKX19LGdldExlbmd0aEluQml0czpmdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0scHV0Qml0OmZ1bmN0aW9uKGJpdCl7dmFyIGJ1ZkluZGV4PU1hdGguZmxvb3IodGhpcy5sZW5ndGgvOCk7aWYodGhpcy5idWZmZXIubGVuZ3RoPD1idWZJbmRleCl7dGhpcy5idWZmZXIucHVzaCgwKX1pZihiaXQpe3RoaXMuYnVmZmVyW2J1ZkluZGV4XXw9MTI4Pj4+dGhpcy5sZW5ndGglOH10aGlzLmxlbmd0aCsrfX07dmFyIFFSQ29kZUxpbWl0TGVuZ3RoPVtbMTcsMTQsMTEsN10sWzMyLDI2LDIwLDE0XSxbNTMsNDIsMzIsMjRdLFs3OCw2Miw0NiwzNF0sWzEwNiw4NCw2MCw0NF0sWzEzNCwxMDYsNzQsNThdLFsxNTQsMTIyLDg2LDY0XSxbMTkyLDE1MiwxMDgsODRdLFsyMzAsMTgwLDEzMCw5OF0sWzI3MSwyMTMsMTUxLDExOV0sWzMyMSwyNTEsMTc3LDEzN10sWzM2NywyODcsMjAzLDE1NV0sWzQyNSwzMzEsMjQxLDE3N10sWzQ1OCwzNjIsMjU4LDE5NF0sWzUyMCw0MTIsMjkyLDIyMF0sWzU4Niw0NTAsMzIyLDI1MF0sWzY0NCw1MDQsMzY0LDI4MF0sWzcxOCw1NjAsMzk0LDMxMF0sWzc5Miw2MjQsNDQyLDMzOF0sWzg1OCw2NjYsNDgyLDM4Ml0sWzkyOSw3MTEsNTA5LDQwM10sWzEwMDMsNzc5LDU2NSw0MzldLFsxMDkxLDg1Nyw2MTEsNDYxXSxbMTE3MSw5MTEsNjYxLDUxMV0sWzEyNzMsOTk3LDcxNSw1MzVdLFsxMzY3LDEwNTksNzUxLDU5M10sWzE0NjUsMTEyNSw4MDUsNjI1XSxbMTUyOCwxMTkwLDg2OCw2NThdLFsxNjI4LDEyNjQsOTA4LDY5OF0sWzE3MzIsMTM3MCw5ODIsNzQyXSxbMTg0MCwxNDUyLDEwMzAsNzkwXSxbMTk1MiwxNTM4LDExMTIsODQyXSxbMjA2OCwxNjI4LDExNjgsODk4XSxbMjE4OCwxNzIyLDEyMjgsOTU4XSxbMjMwMywxODA5LDEyODMsOTgzXSxbMjQzMSwxOTExLDEzNTEsMTA1MV0sWzI1NjMsMTk4OSwxNDIzLDEwOTNdLFsyNjk5LDIwOTksMTQ5OSwxMTM5XSxbMjgwOSwyMjEzLDE1NzksMTIxOV0sWzI5NTMsMjMzMSwxNjYzLDEyNzNdXTtmdW5jdGlvbiBfaXNTdXBwb3J0Q2FudmFzKCl7cmV0dXJuIHR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQhPSJ1bmRlZmluZWQifWZ1bmN0aW9uIF9nZXRBbmRyb2lkKCl7dmFyIGFuZHJvaWQ9ZmFsc2U7dmFyIHNBZ2VudD1uYXZpZ2F0b3IudXNlckFnZW50O2lmKC9hbmRyb2lkL2kudGVzdChzQWdlbnQpKXthbmRyb2lkPXRydWU7dmFyIGFNYXQ9c0FnZW50LnRvU3RyaW5nKCkubWF0Y2goL2FuZHJvaWQgKFswLTldXC5bMC05XSkvaSk7aWYoYU1hdCYmYU1hdFsxXSl7YW5kcm9pZD1wYXJzZUZsb2F0KGFNYXRbMV0pfX1yZXR1cm4gYW5kcm9pZH12YXIgc3ZnRHJhd2VyPWZ1bmN0aW9uKCl7dmFyIERyYXdpbmc9ZnVuY3Rpb24oZWwsaHRPcHRpb24pe3RoaXMuX2VsPWVsO3RoaXMuX2h0T3B0aW9uPWh0T3B0aW9ufTtEcmF3aW5nLnByb3RvdHlwZS5kcmF3PWZ1bmN0aW9uKG9RUkNvZGUpe3ZhciBfaHRPcHRpb249dGhpcy5faHRPcHRpb247dmFyIF9lbD10aGlzLl9lbDt2YXIgbkNvdW50PW9RUkNvZGUuZ2V0TW9kdWxlQ291bnQoKTt2YXIgbldpZHRoPU1hdGguZmxvb3IoX2h0T3B0aW9uLndpZHRoL25Db3VudCk7dmFyIG5IZWlnaHQ9TWF0aC5mbG9vcihfaHRPcHRpb24uaGVpZ2h0L25Db3VudCk7dGhpcy5jbGVhcigpO2Z1bmN0aW9uIG1ha2VTVkcodGFnLGF0dHJzKXt2YXIgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIsdGFnKTtmb3IodmFyIGsgaW4gYXR0cnMpaWYoYXR0cnMuaGFzT3duUHJvcGVydHkoaykpZWwuc2V0QXR0cmlidXRlKGssYXR0cnNba10pO3JldHVybiBlbH12YXIgc3ZnPW1ha2VTVkcoInN2ZyIse3ZpZXdCb3g6IjAgMCAiK1N0cmluZyhuQ291bnQpKyIgIitTdHJpbmcobkNvdW50KSx3aWR0aDoiMTAwJSIsaGVpZ2h0OiIxMDAlIixmaWxsOl9odE9wdGlvbi5jb2xvckxpZ2h0fSk7c3ZnLnNldEF0dHJpYnV0ZU5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLyIsInhtbG5zOnhsaW5rIiwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIpO19lbC5hcHBlbmRDaGlsZChzdmcpO3N2Zy5hcHBlbmRDaGlsZChtYWtlU1ZHKCJyZWN0Iix7ZmlsbDpfaHRPcHRpb24uY29sb3JMaWdodCx3aWR0aDoiMTAwJSIsaGVpZ2h0OiIxMDAlIn0pKTtzdmcuYXBwZW5kQ2hpbGQobWFrZVNWRygicmVjdCIse2ZpbGw6X2h0T3B0aW9uLmNvbG9yRGFyayx3aWR0aDoiMSIsaGVpZ2h0OiIxIixpZDoidGVtcGxhdGUifSkpO2Zvcih2YXIgcm93PTA7cm93PG5Db3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXtpZihvUVJDb2RlLmlzRGFyayhyb3csY29sKSl7dmFyIGNoaWxkPW1ha2VTVkcoInVzZSIse3g6U3RyaW5nKGNvbCkseTpTdHJpbmcocm93KX0pO2NoaWxkLnNldEF0dHJpYnV0ZU5TKCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiwiaHJlZiIsIiN0ZW1wbGF0ZSIpO3N2Zy5hcHBlbmRDaGlsZChjaGlsZCl9fX19O0RyYXdpbmcucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7d2hpbGUodGhpcy5fZWwuaGFzQ2hpbGROb2RlcygpKXRoaXMuX2VsLnJlbW92ZUNoaWxkKHRoaXMuX2VsLmxhc3RDaGlsZCl9O3JldHVybiBEcmF3aW5nfSgpO3ZhciB1c2VTVkc9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKT09PSJzdmciO3ZhciBEcmF3aW5nPXVzZVNWRz9zdmdEcmF3ZXI6IV9pc1N1cHBvcnRDYW52YXMoKT9mdW5jdGlvbigpe3ZhciBEcmF3aW5nPWZ1bmN0aW9uKGVsLGh0T3B0aW9uKXt0aGlzLl9lbD1lbDt0aGlzLl9odE9wdGlvbj1odE9wdGlvbn07RHJhd2luZy5wcm90b3R5cGUuZHJhdz1mdW5jdGlvbihvUVJDb2RlKXt2YXIgX2h0T3B0aW9uPXRoaXMuX2h0T3B0aW9uO3ZhciBfZWw9dGhpcy5fZWw7dmFyIG5Db3VudD1vUVJDb2RlLmdldE1vZHVsZUNvdW50KCk7dmFyIG5XaWR0aD1NYXRoLmZsb29yKF9odE9wdGlvbi53aWR0aC9uQ291bnQpO3ZhciBuSGVpZ2h0PU1hdGguZmxvb3IoX2h0T3B0aW9uLmhlaWdodC9uQ291bnQpO3ZhciBhSFRNTD1bJzx0YWJsZSBzdHlsZT0iYm9yZGVyOjA7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyI+J107Zm9yKHZhciByb3c9MDtyb3c8bkNvdW50O3JvdysrKXthSFRNTC5wdXNoKCI8dHI+Iik7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXthSFRNTC5wdXNoKCc8dGQgc3R5bGU9ImJvcmRlcjowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtwYWRkaW5nOjA7bWFyZ2luOjA7d2lkdGg6JytuV2lkdGgrInB4O2hlaWdodDoiK25IZWlnaHQrInB4O2JhY2tncm91bmQtY29sb3I6Iisob1FSQ29kZS5pc0Rhcmsocm93LGNvbCk/X2h0T3B0aW9uLmNvbG9yRGFyazpfaHRPcHRpb24uY29sb3JMaWdodCkrJzsiPjwvdGQ+Jyl9YUhUTUwucHVzaCgiPC90cj4iKX1hSFRNTC5wdXNoKCI8L3RhYmxlPiIpO19lbC5pbm5lckhUTUw9YUhUTUwuam9pbigiIik7dmFyIGVsVGFibGU9X2VsLmNoaWxkTm9kZXNbMF07dmFyIG5MZWZ0TWFyZ2luVGFibGU9KF9odE9wdGlvbi53aWR0aC1lbFRhYmxlLm9mZnNldFdpZHRoKS8yO3ZhciBuVG9wTWFyZ2luVGFibGU9KF9odE9wdGlvbi5oZWlnaHQtZWxUYWJsZS5vZmZzZXRIZWlnaHQpLzI7aWYobkxlZnRNYXJnaW5UYWJsZT4wJiZuVG9wTWFyZ2luVGFibGU+MCl7ZWxUYWJsZS5zdHlsZS5tYXJnaW49blRvcE1hcmdpblRhYmxlKyJweCAiK25MZWZ0TWFyZ2luVGFibGUrInB4In19O0RyYXdpbmcucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fZWwuaW5uZXJIVE1MPSIifTtyZXR1cm4gRHJhd2luZ30oKTpmdW5jdGlvbigpe2Z1bmN0aW9uIF9vbk1ha2VJbWFnZSgpe3RoaXMuX2VsSW1hZ2Uuc3JjPXRoaXMuX2VsQ2FudmFzLnRvRGF0YVVSTCgiaW1hZ2UvcG5nIik7dGhpcy5fZWxJbWFnZS5zdHlsZS5kaXNwbGF5PSJibG9jayI7dGhpcy5fZWxDYW52YXMuc3R5bGUuZGlzcGxheT0ibm9uZSJ9aWYodGhpcy5fYW5kcm9pZCYmdGhpcy5fYW5kcm9pZDw9Mi4xKXt2YXIgZmFjdG9yPTEvd2luZG93LmRldmljZVBpeGVsUmF0aW87dmFyIGRyYXdJbWFnZT1DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZTtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdJbWFnZT1mdW5jdGlvbihpbWFnZSxzeCxzeSxzdyxzaCxkeCxkeSxkdyxkaCl7aWYoIm5vZGVOYW1lImluIGltYWdlJiYvaW1nL2kudGVzdChpbWFnZS5ub2RlTmFtZSkpe2Zvcih2YXIgaT1hcmd1bWVudHMubGVuZ3RoLTE7aT49MTtpLS0pe2FyZ3VtZW50c1tpXT1hcmd1bWVudHNbaV0qZmFjdG9yfX1lbHNlIGlmKHR5cGVvZiBkdz09InVuZGVmaW5lZCIpe2FyZ3VtZW50c1sxXSo9ZmFjdG9yO2FyZ3VtZW50c1syXSo9ZmFjdG9yO2FyZ3VtZW50c1szXSo9ZmFjdG9yO2FyZ3VtZW50c1s0XSo9ZmFjdG9yfWRyYXdJbWFnZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fWZ1bmN0aW9uIF9zYWZlU2V0RGF0YVVSSShmU3VjY2VzcyxmRmFpbCl7dmFyIHNlbGY9dGhpcztzZWxmLl9mRmFpbD1mRmFpbDtzZWxmLl9mU3VjY2Vzcz1mU3VjY2VzcztpZihzZWxmLl9iU3VwcG9ydERhdGFVUkk9PT1udWxsKXt2YXIgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaW1nIik7dmFyIGZPbkVycm9yPWZ1bmN0aW9uKCl7c2VsZi5fYlN1cHBvcnREYXRhVVJJPWZhbHNlO2lmKHNlbGYuX2ZGYWlsKXtzZWxmLl9mRmFpbC5jYWxsKHNlbGYpfX07dmFyIGZPblN1Y2Nlc3M9ZnVuY3Rpb24oKXtzZWxmLl9iU3VwcG9ydERhdGFVUkk9dHJ1ZTtpZihzZWxmLl9mU3VjY2Vzcyl7c2VsZi5fZlN1Y2Nlc3MuY2FsbChzZWxmKX19O2VsLm9uYWJvcnQ9Zk9uRXJyb3I7ZWwub25lcnJvcj1mT25FcnJvcjtlbC5vbmxvYWQ9Zk9uU3VjY2VzcztlbC5zcmM9ImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBRkNBWUFBQUNOYnlibEFBQUFIRWxFUVZRSTEyUDQvLzgvdzM4R0lBWERJQktFMERIeGdsak5CQUFPOVRYTDBZNE9Id0FBQUFCSlJVNUVya0pnZ2c9PSI7cmV0dXJufWVsc2UgaWYoc2VsZi5fYlN1cHBvcnREYXRhVVJJPT09dHJ1ZSYmc2VsZi5fZlN1Y2Nlc3Mpe3NlbGYuX2ZTdWNjZXNzLmNhbGwoc2VsZil9ZWxzZSBpZihzZWxmLl9iU3VwcG9ydERhdGFVUkk9PT1mYWxzZSYmc2VsZi5fZkZhaWwpe3NlbGYuX2ZGYWlsLmNhbGwoc2VsZil9fXZhciBEcmF3aW5nPWZ1bmN0aW9uKGVsLGh0T3B0aW9uKXt0aGlzLl9iSXNQYWludGVkPWZhbHNlO3RoaXMuX2FuZHJvaWQ9X2dldEFuZHJvaWQoKTt0aGlzLl9odE9wdGlvbj1odE9wdGlvbjt0aGlzLl9lbENhbnZhcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJjYW52YXMiKTt0aGlzLl9lbENhbnZhcy53aWR0aD1odE9wdGlvbi53aWR0aDt0aGlzLl9lbENhbnZhcy5oZWlnaHQ9aHRPcHRpb24uaGVpZ2h0O2VsLmFwcGVuZENoaWxkKHRoaXMuX2VsQ2FudmFzKTt0aGlzLl9lbD1lbDt0aGlzLl9vQ29udGV4dD10aGlzLl9lbENhbnZhcy5nZXRDb250ZXh0KCIyZCIpO3RoaXMuX2JJc1BhaW50ZWQ9ZmFsc2U7dGhpcy5fZWxJbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpbWciKTt0aGlzLl9lbEltYWdlLmFsdD0iU2NhbiBtZSEiO3RoaXMuX2VsSW1hZ2Uuc3R5bGUuZGlzcGxheT0ibm9uZSI7dGhpcy5fZWwuYXBwZW5kQ2hpbGQodGhpcy5fZWxJbWFnZSk7dGhpcy5fYlN1cHBvcnREYXRhVVJJPW51bGx9O0RyYXdpbmcucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24ob1FSQ29kZSl7dmFyIF9lbEltYWdlPXRoaXMuX2VsSW1hZ2U7dmFyIF9vQ29udGV4dD10aGlzLl9vQ29udGV4dDt2YXIgX2h0T3B0aW9uPXRoaXMuX2h0T3B0aW9uO3ZhciBuQ291bnQ9b1FSQ29kZS5nZXRNb2R1bGVDb3VudCgpO3ZhciBuV2lkdGg9X2h0T3B0aW9uLndpZHRoL25Db3VudDt2YXIgbkhlaWdodD1faHRPcHRpb24uaGVpZ2h0L25Db3VudDt2YXIgblJvdW5kZWRXaWR0aD1NYXRoLnJvdW5kKG5XaWR0aCk7dmFyIG5Sb3VuZGVkSGVpZ2h0PU1hdGgucm91bmQobkhlaWdodCk7X2VsSW1hZ2Uuc3R5bGUuZGlzcGxheT0ibm9uZSI7dGhpcy5jbGVhcigpO2Zvcih2YXIgcm93PTA7cm93PG5Db3VudDtyb3crKyl7Zm9yKHZhciBjb2w9MDtjb2w8bkNvdW50O2NvbCsrKXt2YXIgYklzRGFyaz1vUVJDb2RlLmlzRGFyayhyb3csY29sKTt2YXIgbkxlZnQ9Y29sKm5XaWR0aDt2YXIgblRvcD1yb3cqbkhlaWdodDtfb0NvbnRleHQuc3Ryb2tlU3R5bGU9YklzRGFyaz9faHRPcHRpb24uY29sb3JEYXJrOl9odE9wdGlvbi5jb2xvckxpZ2h0O19vQ29udGV4dC5saW5lV2lkdGg9MTtfb0NvbnRleHQuZmlsbFN0eWxlPWJJc0Rhcms/X2h0T3B0aW9uLmNvbG9yRGFyazpfaHRPcHRpb24uY29sb3JMaWdodDtfb0NvbnRleHQuZmlsbFJlY3QobkxlZnQsblRvcCxuV2lkdGgsbkhlaWdodCk7X29Db250ZXh0LnN0cm9rZVJlY3QoTWF0aC5mbG9vcihuTGVmdCkrLjUsTWF0aC5mbG9vcihuVG9wKSsuNSxuUm91bmRlZFdpZHRoLG5Sb3VuZGVkSGVpZ2h0KTtfb0NvbnRleHQuc3Ryb2tlUmVjdChNYXRoLmNlaWwobkxlZnQpLS41LE1hdGguY2VpbChuVG9wKS0uNSxuUm91bmRlZFdpZHRoLG5Sb3VuZGVkSGVpZ2h0KX19dGhpcy5fYklzUGFpbnRlZD10cnVlfTtEcmF3aW5nLnByb3RvdHlwZS5tYWtlSW1hZ2U9ZnVuY3Rpb24oKXtpZih0aGlzLl9iSXNQYWludGVkKXtfc2FmZVNldERhdGFVUkkuY2FsbCh0aGlzLF9vbk1ha2VJbWFnZSl9fTtEcmF3aW5nLnByb3RvdHlwZS5pc1BhaW50ZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYklzUGFpbnRlZH07RHJhd2luZy5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9vQ29udGV4dC5jbGVhclJlY3QoMCwwLHRoaXMuX2VsQ2FudmFzLndpZHRoLHRoaXMuX2VsQ2FudmFzLmhlaWdodCk7dGhpcy5fYklzUGFpbnRlZD1mYWxzZX07RHJhd2luZy5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24obk51bWJlcil7aWYoIW5OdW1iZXIpe3JldHVybiBuTnVtYmVyfXJldHVybiBNYXRoLmZsb29yKG5OdW1iZXIqMWUzKS8xZTN9O3JldHVybiBEcmF3aW5nfSgpO2Z1bmN0aW9uIF9nZXRUeXBlTnVtYmVyKHNUZXh0LG5Db3JyZWN0TGV2ZWwpe3ZhciBuVHlwZT0xO3ZhciBsZW5ndGg9X2dldFVURjhMZW5ndGgoc1RleHQpO2Zvcih2YXIgaT0wLGxlbj1RUkNvZGVMaW1pdExlbmd0aC5sZW5ndGg7aTw9bGVuO2krKyl7dmFyIG5MaW1pdD0wO3N3aXRjaChuQ29ycmVjdExldmVsKXtjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpuTGltaXQ9UVJDb2RlTGltaXRMZW5ndGhbaV1bMF07YnJlYWs7Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLk06bkxpbWl0PVFSQ29kZUxpbWl0TGVuZ3RoW2ldWzFdO2JyZWFrO2Nhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5ROm5MaW1pdD1RUkNvZGVMaW1pdExlbmd0aFtpXVsyXTticmVhaztjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpuTGltaXQ9UVJDb2RlTGltaXRMZW5ndGhbaV1bM107YnJlYWt9aWYobGVuZ3RoPD1uTGltaXQpe2JyZWFrfWVsc2V7blR5cGUrK319aWYoblR5cGU+UVJDb2RlTGltaXRMZW5ndGgubGVuZ3RoKXt0aHJvdyBuZXcgRXJyb3IoIlRvbyBsb25nIGRhdGEiKX1yZXR1cm4gblR5cGV9ZnVuY3Rpb24gX2dldFVURjhMZW5ndGgoc1RleHQpe3JldHVybiB0b1VURjgoc1RleHQpLmxlbmd0aH1RUkNvZGU9ZnVuY3Rpb24oZWwsdk9wdGlvbil7dGhpcy5faHRPcHRpb249e3dpZHRoOjI1NixoZWlnaHQ6MjU2LHR5cGVOdW1iZXI6NCxjb2xvckRhcms6IiMwMDAwMDAiLGNvbG9yTGlnaHQ6IiNmZmZmZmYiLGNvcnJlY3RMZXZlbDpRUkVycm9yQ29ycmVjdExldmVsLkh9O2lmKHR5cGVvZiB2T3B0aW9uPT09InN0cmluZyIpe3ZPcHRpb249e3RleHQ6dk9wdGlvbn19aWYodk9wdGlvbil7Zm9yKHZhciBpIGluIHZPcHRpb24pe3RoaXMuX2h0T3B0aW9uW2ldPXZPcHRpb25baV19fWlmKHR5cGVvZiBlbD09InN0cmluZyIpe2VsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsKX1pZih0aGlzLl9odE9wdGlvbi51c2VTVkcpe0RyYXdpbmc9c3ZnRHJhd2VyfXRoaXMuX2FuZHJvaWQ9X2dldEFuZHJvaWQoKTt0aGlzLl9lbD1lbDt0aGlzLl9vUVJDb2RlPW51bGw7dGhpcy5fb0RyYXdpbmc9bmV3IERyYXdpbmcodGhpcy5fZWwsdGhpcy5faHRPcHRpb24pO2lmKHRoaXMuX2h0T3B0aW9uLnRleHQpe3RoaXMubWFrZUNvZGUodGhpcy5faHRPcHRpb24udGV4dCl9fTtRUkNvZGUucHJvdG90eXBlLm1ha2VDb2RlPWZ1bmN0aW9uKHNUZXh0KXt0aGlzLl9vUVJDb2RlPW5ldyBRUkNvZGVNb2RlbChfZ2V0VHlwZU51bWJlcihzVGV4dCx0aGlzLl9odE9wdGlvbi5jb3JyZWN0TGV2ZWwpLHRoaXMuX2h0T3B0aW9uLmNvcnJlY3RMZXZlbCk7dGhpcy5fb1FSQ29kZS5hZGREYXRhKHNUZXh0KTt0aGlzLl9vUVJDb2RlLm1ha2UoKTt0aGlzLl9lbC50aXRsZT1zVGV4dDt0aGlzLl9vRHJhd2luZy5kcmF3KHRoaXMuX29RUkNvZGUpO3RoaXMubWFrZUltYWdlKCl9O1FSQ29kZS5wcm90b3R5cGUubWFrZUltYWdlPWZ1bmN0aW9uKCl7aWYodHlwZW9mIHRoaXMuX29EcmF3aW5nLm1ha2VJbWFnZT09ImZ1bmN0aW9uIiYmKCF0aGlzLl9hbmRyb2lkfHx0aGlzLl9hbmRyb2lkPj0zKSl7dGhpcy5fb0RyYXdpbmcubWFrZUltYWdlKCl9fTtRUkNvZGUucHJvdG90eXBlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5fb0RyYXdpbmcuY2xlYXIoKX07UVJDb2RlLkNvcnJlY3RMZXZlbD1RUkVycm9yQ29ycmVjdExldmVsfSkoKTsK
`; // eslint-disable-line
const marked_base64 = `LyoqCiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyCiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDIxLCBDaHJpc3RvcGhlciBKZWZmcmV5LiAoTUlUIExpY2Vuc2VkKQogKiBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkCiAqLwohZnVuY3Rpb24oZSx1KXsib2JqZWN0Ij09dHlwZW9mIGV4cG9ydHMmJiJ1bmRlZmluZWQiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXUoKToiZnVuY3Rpb24iPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh1KTooZT0idW5kZWZpbmVkIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczplfHxzZWxmKS5tYXJrZWQ9dSgpfSh0aGlzLGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHIoZSx1KXtmb3IodmFyIHQ9MDt0PHUubGVuZ3RoO3QrKyl7dmFyIG49dVt0XTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCwidmFsdWUiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1mdW5jdGlvbiBpKGUsdSl7KG51bGw9PXV8fHU+ZS5sZW5ndGgpJiYodT1lLmxlbmd0aCk7Zm9yKHZhciB0PTAsbj1uZXcgQXJyYXkodSk7dDx1O3QrKyluW3RdPWVbdF07cmV0dXJuIG59ZnVuY3Rpb24gYyhlLHUpe3ZhciB0O2lmKCJ1bmRlZmluZWQiIT10eXBlb2YgU3ltYm9sJiZudWxsIT1lW1N5bWJvbC5pdGVyYXRvcl0pcmV0dXJuKHQ9ZVtTeW1ib2wuaXRlcmF0b3JdKCkpLm5leHQuYmluZCh0KTtpZihBcnJheS5pc0FycmF5KGUpfHwodD1mdW5jdGlvbihlLHUpe2lmKGUpe2lmKCJzdHJpbmciPT10eXBlb2YgZSlyZXR1cm4gaShlLHUpO3ZhciB0PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm4iTWFwIj09PSh0PSJPYmplY3QiPT09dCYmZS5jb25zdHJ1Y3Rvcj9lLmNvbnN0cnVjdG9yLm5hbWU6dCl8fCJTZXQiPT09dD9BcnJheS5mcm9tKGUpOiJBcmd1bWVudHMiPT09dHx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCk/aShlLHUpOnZvaWQgMH19KGUpKXx8dSYmZSYmIm51bWJlciI9PXR5cGVvZiBlLmxlbmd0aCl7dCYmKGU9dCk7dmFyIG49MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbj49ZS5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOmVbbisrXX19fXRocm93IG5ldyBUeXBlRXJyb3IoIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKX1mdW5jdGlvbiB0KGUpe3JldHVybiBEW2VdfXZhciBlLHU9KGZ1bmN0aW9uKHUpe2Z1bmN0aW9uIGUoKXtyZXR1cm57YmFzZVVybDpudWxsLGJyZWFrczohMSxnZm06ITAsaGVhZGVySWRzOiEwLGhlYWRlclByZWZpeDoiIixoaWdobGlnaHQ6bnVsbCxsYW5nUHJlZml4OiJsYW5ndWFnZS0iLG1hbmdsZTohMCxwZWRhbnRpYzohMSxyZW5kZXJlcjpudWxsLHNhbml0aXplOiExLHNhbml0aXplcjpudWxsLHNpbGVudDohMSxzbWFydExpc3RzOiExLHNtYXJ0eXBhbnRzOiExLHRva2VuaXplcjpudWxsLHdhbGtUb2tlbnM6bnVsbCx4aHRtbDohMX19dS5leHBvcnRzPXtkZWZhdWx0czplKCksZ2V0RGVmYXVsdHM6ZSxjaGFuZ2VEZWZhdWx0czpmdW5jdGlvbihlKXt1LmV4cG9ydHMuZGVmYXVsdHM9ZX19fShlPXtleHBvcnRzOnt9fSksZS5leHBvcnRzKSxuPS9bJjw+IiddLyxzPS9bJjw+IiddL2csbD0vWzw+IiddfCYoPyEjP1x3KzspLyxhPS9bPD4iJ118Jig/ISM/XHcrOykvZyxEPXsiJiI6IiZhbXA7IiwiPCI6IiZsdDsiLCI+IjoiJmd0OyIsJyInOiImcXVvdDsiLCInIjoiJiMzOTsifTt2YXIgbz0vJigjKD86XGQrKXwoPzojeFswLTlBLUZhLWZdKyl8KD86XHcrKSk7Py9naTtmdW5jdGlvbiBoKGUpe3JldHVybiBlLnJlcGxhY2UobyxmdW5jdGlvbihlLHUpe3JldHVybiJjb2xvbiI9PT0odT11LnRvTG93ZXJDYXNlKCkpPyI6IjoiIyI9PT11LmNoYXJBdCgwKT8ieCI9PT11LmNoYXJBdCgxKT9TdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHUuc3Vic3RyaW5nKDIpLDE2KSk6U3RyaW5nLmZyb21DaGFyQ29kZSgrdS5zdWJzdHJpbmcoMSkpOiIifSl9dmFyIHA9LyhefFteXFtdKVxeL2c7dmFyIGc9L1teXHc6XS9nLGY9L14kfF5bYS16XVthLXowLTkrLi1dKjp8Xls/I10vaTt2YXIgRj17fSxBPS9eW146XSs6XC8qW14vXSokLyxDPS9eKFteOl0rOilbXHNcU10qJC8sZD0vXihbXjpdKzpcLypbXi9dKilbXHNcU10qJC87ZnVuY3Rpb24gRShlLHUpe0ZbIiAiK2VdfHwoQS50ZXN0KGUpP0ZbIiAiK2VdPWUrIi8iOkZbIiAiK2VdPWsoZSwiLyIsITApKTt2YXIgdD0tMT09PShlPUZbIiAiK2VdKS5pbmRleE9mKCI6Iik7cmV0dXJuIi8vIj09PXUuc3Vic3RyaW5nKDAsMik/dD91OmUucmVwbGFjZShDLCIkMSIpK3U6Ii8iPT09dS5jaGFyQXQoMCk/dD91OmUucmVwbGFjZShkLCIkMSIpK3U6ZSt1fWZ1bmN0aW9uIGsoZSx1LHQpe3ZhciBuPWUubGVuZ3RoO2lmKDA9PT1uKXJldHVybiIiO2Zvcih2YXIgcj0wO3I8bjspe3ZhciBpPWUuY2hhckF0KG4tci0xKTtpZihpIT09dXx8dCl7aWYoaT09PXV8fCF0KWJyZWFrO3IrK31lbHNlIHIrK31yZXR1cm4gZS5zdWJzdHIoMCxuLXIpfXZhciBtPWZ1bmN0aW9uKGUsdSl7aWYodSl7aWYobi50ZXN0KGUpKXJldHVybiBlLnJlcGxhY2Uocyx0KX1lbHNlIGlmKGwudGVzdChlKSlyZXR1cm4gZS5yZXBsYWNlKGEsdCk7cmV0dXJuIGV9LGI9aCx4PWZ1bmN0aW9uKHQsZSl7dD10LnNvdXJjZXx8dCxlPWV8fCIiO3ZhciBuPXtyZXBsYWNlOmZ1bmN0aW9uKGUsdSl7cmV0dXJuIHU9KHU9dS5zb3VyY2V8fHUpLnJlcGxhY2UocCwiJDEiKSx0PXQucmVwbGFjZShlLHUpLG59LGdldFJlZ2V4OmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBSZWdFeHAodCxlKX19O3JldHVybiBufSxCPWZ1bmN0aW9uKGUsdSx0KXtpZihlKXt2YXIgbjt0cnl7bj1kZWNvZGVVUklDb21wb25lbnQoaCh0KSkucmVwbGFjZShnLCIiKS50b0xvd2VyQ2FzZSgpfWNhdGNoKGUpe3JldHVybiBudWxsfWlmKDA9PT1uLmluZGV4T2YoImphdmFzY3JpcHQ6Iil8fDA9PT1uLmluZGV4T2YoInZic2NyaXB0OiIpfHwwPT09bi5pbmRleE9mKCJkYXRhOiIpKXJldHVybiBudWxsfXUmJiFmLnRlc3QodCkmJih0PUUodSx0KSk7dHJ5e3Q9ZW5jb2RlVVJJKHQpLnJlcGxhY2UoLyUyNS9nLCIlIil9Y2F0Y2goZSl7cmV0dXJuIG51bGx9cmV0dXJuIHR9LHc9e2V4ZWM6ZnVuY3Rpb24oKXt9fSx2PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdSx0LG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKWZvcih0IGluIHU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1LHQpJiYoZVt0XT11W3RdKTtyZXR1cm4gZX0seT1mdW5jdGlvbihlLHUpe3ZhciB0PWUucmVwbGFjZSgvXHwvZyxmdW5jdGlvbihlLHUsdCl7Zm9yKHZhciBuPSExLHI9dTswPD0tLXImJiJcXCI9PT10W3JdOyluPSFuO3JldHVybiBuPyJ8IjoiIHwifSkuc3BsaXQoLyBcfC8pLG49MDtpZih0Lmxlbmd0aD51KXQuc3BsaWNlKHUpO2Vsc2UgZm9yKDt0Lmxlbmd0aDx1Oyl0LnB1c2goIiIpO2Zvcig7bjx0Lmxlbmd0aDtuKyspdFtuXT10W25dLnRyaW0oKS5yZXBsYWNlKC9cXFx8L2csInwiKTtyZXR1cm4gdH0sXz1mdW5jdGlvbihlLHUpe2lmKC0xPT09ZS5pbmRleE9mKHVbMV0pKXJldHVybi0xO2Zvcih2YXIgdD1lLmxlbmd0aCxuPTAscj0wO3I8dDtyKyspaWYoIlxcIj09PWVbcl0pcisrO2Vsc2UgaWYoZVtyXT09PXVbMF0pbisrO2Vsc2UgaWYoZVtyXT09PXVbMV0mJi0tbjwwKXJldHVybiByO3JldHVybi0xfSx6PWZ1bmN0aW9uKGUpe2UmJmUuc2FuaXRpemUmJiFlLnNpbGVudCYmY29uc29sZS53YXJuKCJtYXJrZWQoKTogc2FuaXRpemUgYW5kIHNhbml0aXplciBwYXJhbWV0ZXJzIGFyZSBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMC43LjAsIHNob3VsZCBub3QgYmUgdXNlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmUuIFJlYWQgbW9yZSBoZXJlOiBodHRwczovL21hcmtlZC5qcy5vcmcvIy9VU0lOR19BRFZBTkNFRC5tZCNvcHRpb25zIil9LCQ9ZnVuY3Rpb24oZSx1KXtpZih1PDEpcmV0dXJuIiI7Zm9yKHZhciB0PSIiOzE8dTspMSZ1JiYodCs9ZSksdT4+PTEsZSs9ZTtyZXR1cm4gdCtlfSxTPXUuZGVmYXVsdHMsVD1rLEk9eSxSPW0sWj1fO2Z1bmN0aW9uIHEoZSx1LHQpe3ZhciBuPXUuaHJlZixyPXUudGl0bGU/Uih1LnRpdGxlKTpudWxsLHU9ZVsxXS5yZXBsYWNlKC9cXChbXFtcXV0pL2csIiQxIik7cmV0dXJuIiEiIT09ZVswXS5jaGFyQXQoMCk/e3R5cGU6ImxpbmsiLHJhdzp0LGhyZWY6bix0aXRsZTpyLHRleHQ6dX06e3R5cGU6ImltYWdlIixyYXc6dCxocmVmOm4sdGl0bGU6cix0ZXh0OlIodSl9fXZhciBPPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLm9wdGlvbnM9ZXx8U312YXIgdT1lLnByb3RvdHlwZTtyZXR1cm4gdS5zcGFjZT1mdW5jdGlvbihlKXtlPXRoaXMucnVsZXMuYmxvY2submV3bGluZS5leGVjKGUpO2lmKGUpcmV0dXJuIDE8ZVswXS5sZW5ndGg/e3R5cGU6InNwYWNlIixyYXc6ZVswXX06e3JhdzoiXG4ifX0sdS5jb2RlPWZ1bmN0aW9uKGUpe3ZhciB1PXRoaXMucnVsZXMuYmxvY2suY29kZS5leGVjKGUpO2lmKHUpe2U9dVswXS5yZXBsYWNlKC9eIHsxLDR9L2dtLCIiKTtyZXR1cm57dHlwZToiY29kZSIscmF3OnVbMF0sY29kZUJsb2NrU3R5bGU6ImluZGVudGVkIix0ZXh0OnRoaXMub3B0aW9ucy5wZWRhbnRpYz9lOlQoZSwiXG4iKX19fSx1LmZlbmNlcz1mdW5jdGlvbihlKXt2YXIgdT10aGlzLnJ1bGVzLmJsb2NrLmZlbmNlcy5leGVjKGUpO2lmKHUpe3ZhciB0PXVbMF0sZT1mdW5jdGlvbihlLHUpe2lmKG51bGw9PT0oZT1lLm1hdGNoKC9eKFxzKykoPzpgYGApLykpKXJldHVybiB1O3ZhciB0PWVbMV07cmV0dXJuIHUuc3BsaXQoIlxuIikubWFwKGZ1bmN0aW9uKGUpe3ZhciB1PWUubWF0Y2goL15ccysvKTtyZXR1cm4gbnVsbCE9PXUmJnVbMF0ubGVuZ3RoPj10Lmxlbmd0aD9lLnNsaWNlKHQubGVuZ3RoKTplfSkuam9pbigiXG4iKX0odCx1WzNdfHwiIik7cmV0dXJue3R5cGU6ImNvZGUiLHJhdzp0LGxhbmc6dVsyXSYmdVsyXS50cmltKCksdGV4dDplfX19LHUuaGVhZGluZz1mdW5jdGlvbihlKXt2YXIgdT10aGlzLnJ1bGVzLmJsb2NrLmhlYWRpbmcuZXhlYyhlKTtpZih1KXt2YXIgdD11WzJdLnRyaW0oKTtyZXR1cm4vIyQvLnRlc3QodCkmJihlPVQodCwiIyIpLCF0aGlzLm9wdGlvbnMucGVkYW50aWMmJmUmJiEvICQvLnRlc3QoZSl8fCh0PWUudHJpbSgpKSkse3R5cGU6ImhlYWRpbmciLHJhdzp1WzBdLGRlcHRoOnVbMV0ubGVuZ3RoLHRleHQ6dH19fSx1Lm5wdGFibGU9ZnVuY3Rpb24oZSl7ZT10aGlzLnJ1bGVzLmJsb2NrLm5wdGFibGUuZXhlYyhlKTtpZihlKXt2YXIgdT17dHlwZToidGFibGUiLGhlYWRlcjpJKGVbMV0ucmVwbGFjZSgvXiAqfCAqXHwgKiQvZywiIikpLGFsaWduOmVbMl0ucmVwbGFjZSgvXiAqfFx8ICokL2csIiIpLnNwbGl0KC8gKlx8ICovKSxjZWxsczplWzNdP2VbM10ucmVwbGFjZSgvXG4kLywiIikuc3BsaXQoIlxuIik6W10scmF3OmVbMF19O2lmKHUuaGVhZGVyLmxlbmd0aD09PXUuYWxpZ24ubGVuZ3RoKXtmb3IodmFyIHQ9dS5hbGlnbi5sZW5ndGgsbj0wO248dDtuKyspL14gKi0rOiAqJC8udGVzdCh1LmFsaWduW25dKT91LmFsaWduW25dPSJyaWdodCI6L14gKjotKzogKiQvLnRlc3QodS5hbGlnbltuXSk/dS5hbGlnbltuXT0iY2VudGVyIjovXiAqOi0rICokLy50ZXN0KHUuYWxpZ25bbl0pP3UuYWxpZ25bbl09ImxlZnQiOnUuYWxpZ25bbl09bnVsbDtmb3IodD11LmNlbGxzLmxlbmd0aCxuPTA7bjx0O24rKyl1LmNlbGxzW25dPUkodS5jZWxsc1tuXSx1LmhlYWRlci5sZW5ndGgpO3JldHVybiB1fX19LHUuaHI9ZnVuY3Rpb24oZSl7ZT10aGlzLnJ1bGVzLmJsb2NrLmhyLmV4ZWMoZSk7aWYoZSlyZXR1cm57dHlwZToiaHIiLHJhdzplWzBdfX0sdS5ibG9ja3F1b3RlPWZ1bmN0aW9uKGUpe3ZhciB1PXRoaXMucnVsZXMuYmxvY2suYmxvY2txdW90ZS5leGVjKGUpO2lmKHUpe2U9dVswXS5yZXBsYWNlKC9eICo+ID8vZ20sIiIpO3JldHVybnt0eXBlOiJibG9ja3F1b3RlIixyYXc6dVswXSx0ZXh0OmV9fX0sdS5saXN0PWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5ibG9jay5saXN0LmV4ZWMoZSk7aWYoZSl7Zm9yKHZhciB1LHQsbixyLGkscyxsPWVbMF0sYT1lWzJdLEQ9MTxhLmxlbmd0aCxvPXt0eXBlOiJsaXN0IixyYXc6bCxvcmRlcmVkOkQsc3RhcnQ6RD8rYS5zbGljZSgwLC0xKToiIixsb29zZTohMSxpdGVtczpbXX0sYz1lWzBdLm1hdGNoKHRoaXMucnVsZXMuYmxvY2suaXRlbSksaD0hMSxwPWMubGVuZ3RoLGc9dGhpcy5ydWxlcy5ibG9jay5saXN0SXRlbVN0YXJ0LmV4ZWMoY1swXSksZj0wO2Y8cDtmKyspe2lmKGw9dT1jW2ZdLHRoaXMub3B0aW9ucy5wZWRhbnRpY3x8KHM9dS5tYXRjaChuZXcgUmVnRXhwKCJcXG5cXHMqXFxuIHswLCIrKGdbMF0ubGVuZ3RoLTEpKyJ9XFxTIikpKSYmKHQ9dS5sZW5ndGgtcy5pbmRleCtjLnNsaWNlKGYrMSkuam9pbigiXG4iKS5sZW5ndGgsby5yYXc9by5yYXcuc3Vic3RyaW5nKDAsby5yYXcubGVuZ3RoLXQpLGw9dT11LnN1YnN0cmluZygwLHMuaW5kZXgpLHA9ZisxKSxmIT09cC0xKXtpZihuPXRoaXMucnVsZXMuYmxvY2subGlzdEl0ZW1TdGFydC5leGVjKGNbZisxXSksdGhpcy5vcHRpb25zLnBlZGFudGljP25bMV0ubGVuZ3RoPmdbMV0ubGVuZ3RoOm5bMV0ubGVuZ3RoPj1nWzBdLmxlbmd0aHx8MzxuWzFdLmxlbmd0aCl7Yy5zcGxpY2UoZiwyLGNbZl0rKCF0aGlzLm9wdGlvbnMucGVkYW50aWMmJm5bMV0ubGVuZ3RoPGdbMF0ubGVuZ3RoJiYhY1tmXS5tYXRjaCgvXG4kLyk/IiI6IlxuIikrY1tmKzFdKSxmLS0scC0tO2NvbnRpbnVlfSghdGhpcy5vcHRpb25zLnBlZGFudGljfHx0aGlzLm9wdGlvbnMuc21hcnRMaXN0cz9uWzJdW25bMl0ubGVuZ3RoLTFdIT09YVthLmxlbmd0aC0xXTpEPT0oMT09PW5bMl0ubGVuZ3RoKSkmJih0PWMuc2xpY2UoZisxKS5qb2luKCJcbiIpLmxlbmd0aCxvLnJhdz1vLnJhdy5zdWJzdHJpbmcoMCxvLnJhdy5sZW5ndGgtdCksZj1wLTEpLGc9bn1uPXUubGVuZ3RoLH4odT11LnJlcGxhY2UoL14gKihbKistXXxcZCtbLildKSA/LywiIikpLmluZGV4T2YoIlxuICIpJiYobi09dS5sZW5ndGgsdT10aGlzLm9wdGlvbnMucGVkYW50aWM/dS5yZXBsYWNlKC9eIHsxLDR9L2dtLCIiKTp1LnJlcGxhY2UobmV3IFJlZ0V4cCgiXiB7MSwiK24rIn0iLCJnbSIpLCIiKSksdT1UKHUsIlxuIiksZiE9PXAtMSYmKGwrPSJcbiIpLG49aHx8L1xuXG4oPyFccyokKS8udGVzdChsKSxmIT09cC0xJiYoaD0iXG5cbiI9PT1sLnNsaWNlKC0yKSxuPW58fGgpLG4mJihvLmxvb3NlPSEwKSx0aGlzLm9wdGlvbnMuZ2ZtJiYoaT12b2lkIDAsKHI9L15cW1sgeFhdXF0gLy50ZXN0KHUpKSYmKGk9IiAiIT09dVsxXSx1PXUucmVwbGFjZSgvXlxbWyB4WF1cXSArLywiIikpKSxvLml0ZW1zLnB1c2goe3R5cGU6Imxpc3RfaXRlbSIscmF3OmwsdGFzazpyLGNoZWNrZWQ6aSxsb29zZTpuLHRleHQ6dX0pfXJldHVybiBvfX0sdS5odG1sPWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5ibG9jay5odG1sLmV4ZWMoZSk7aWYoZSlyZXR1cm57dHlwZTp0aGlzLm9wdGlvbnMuc2FuaXRpemU/InBhcmFncmFwaCI6Imh0bWwiLHJhdzplWzBdLHByZTohdGhpcy5vcHRpb25zLnNhbml0aXplciYmKCJwcmUiPT09ZVsxXXx8InNjcmlwdCI9PT1lWzFdfHwic3R5bGUiPT09ZVsxXSksdGV4dDp0aGlzLm9wdGlvbnMuc2FuaXRpemU/dGhpcy5vcHRpb25zLnNhbml0aXplcj90aGlzLm9wdGlvbnMuc2FuaXRpemVyKGVbMF0pOlIoZVswXSk6ZVswXX19LHUuZGVmPWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5ibG9jay5kZWYuZXhlYyhlKTtpZihlKXJldHVybiBlWzNdJiYoZVszXT1lWzNdLnN1YnN0cmluZygxLGVbM10ubGVuZ3RoLTEpKSx7dGFnOmVbMV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9ccysvZywiICIpLHJhdzplWzBdLGhyZWY6ZVsyXSx0aXRsZTplWzNdfX0sdS50YWJsZT1mdW5jdGlvbihlKXtlPXRoaXMucnVsZXMuYmxvY2sudGFibGUuZXhlYyhlKTtpZihlKXt2YXIgdT17dHlwZToidGFibGUiLGhlYWRlcjpJKGVbMV0ucmVwbGFjZSgvXiAqfCAqXHwgKiQvZywiIikpLGFsaWduOmVbMl0ucmVwbGFjZSgvXiAqfFx8ICokL2csIiIpLnNwbGl0KC8gKlx8ICovKSxjZWxsczplWzNdP2VbM10ucmVwbGFjZSgvXG4kLywiIikuc3BsaXQoIlxuIik6W119O2lmKHUuaGVhZGVyLmxlbmd0aD09PXUuYWxpZ24ubGVuZ3RoKXt1LnJhdz1lWzBdO2Zvcih2YXIgdD11LmFsaWduLmxlbmd0aCxuPTA7bjx0O24rKykvXiAqLSs6ICokLy50ZXN0KHUuYWxpZ25bbl0pP3UuYWxpZ25bbl09InJpZ2h0IjovXiAqOi0rOiAqJC8udGVzdCh1LmFsaWduW25dKT91LmFsaWduW25dPSJjZW50ZXIiOi9eICo6LSsgKiQvLnRlc3QodS5hbGlnbltuXSk/dS5hbGlnbltuXT0ibGVmdCI6dS5hbGlnbltuXT1udWxsO2Zvcih0PXUuY2VsbHMubGVuZ3RoLG49MDtuPHQ7bisrKXUuY2VsbHNbbl09SSh1LmNlbGxzW25dLnJlcGxhY2UoL14gKlx8ICp8ICpcfCAqJC9nLCIiKSx1LmhlYWRlci5sZW5ndGgpO3JldHVybiB1fX19LHUubGhlYWRpbmc9ZnVuY3Rpb24oZSl7ZT10aGlzLnJ1bGVzLmJsb2NrLmxoZWFkaW5nLmV4ZWMoZSk7aWYoZSlyZXR1cm57dHlwZToiaGVhZGluZyIscmF3OmVbMF0sZGVwdGg6Ij0iPT09ZVsyXS5jaGFyQXQoMCk/MToyLHRleHQ6ZVsxXX19LHUucGFyYWdyYXBoPWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5ibG9jay5wYXJhZ3JhcGguZXhlYyhlKTtpZihlKXJldHVybnt0eXBlOiJwYXJhZ3JhcGgiLHJhdzplWzBdLHRleHQ6IlxuIj09PWVbMV0uY2hhckF0KGVbMV0ubGVuZ3RoLTEpP2VbMV0uc2xpY2UoMCwtMSk6ZVsxXX19LHUudGV4dD1mdW5jdGlvbihlKXtlPXRoaXMucnVsZXMuYmxvY2sudGV4dC5leGVjKGUpO2lmKGUpcmV0dXJue3R5cGU6InRleHQiLHJhdzplWzBdLHRleHQ6ZVswXX19LHUuZXNjYXBlPWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5pbmxpbmUuZXNjYXBlLmV4ZWMoZSk7aWYoZSlyZXR1cm57dHlwZToiZXNjYXBlIixyYXc6ZVswXSx0ZXh0OlIoZVsxXSl9fSx1LnRhZz1mdW5jdGlvbihlLHUsdCl7ZT10aGlzLnJ1bGVzLmlubGluZS50YWcuZXhlYyhlKTtpZihlKXJldHVybiF1JiYvXjxhIC9pLnRlc3QoZVswXSk/dT0hMDp1JiYvXjxcL2E+L2kudGVzdChlWzBdKSYmKHU9ITEpLCF0JiYvXjwocHJlfGNvZGV8a2JkfHNjcmlwdCkoXHN8PikvaS50ZXN0KGVbMF0pP3Q9ITA6dCYmL148XC8ocHJlfGNvZGV8a2JkfHNjcmlwdCkoXHN8PikvaS50ZXN0KGVbMF0pJiYodD0hMSkse3R5cGU6dGhpcy5vcHRpb25zLnNhbml0aXplPyJ0ZXh0IjoiaHRtbCIscmF3OmVbMF0saW5MaW5rOnUsaW5SYXdCbG9jazp0LHRleHQ6dGhpcy5vcHRpb25zLnNhbml0aXplP3RoaXMub3B0aW9ucy5zYW5pdGl6ZXI/dGhpcy5vcHRpb25zLnNhbml0aXplcihlWzBdKTpSKGVbMF0pOmVbMF19fSx1Lmxpbms9ZnVuY3Rpb24oZSl7dmFyIHU9dGhpcy5ydWxlcy5pbmxpbmUubGluay5leGVjKGUpO2lmKHUpe3ZhciB0PXVbMl0udHJpbSgpO2lmKCF0aGlzLm9wdGlvbnMucGVkYW50aWMmJi9ePC8udGVzdCh0KSl7aWYoIS8+JC8udGVzdCh0KSlyZXR1cm47ZT1UKHQuc2xpY2UoMCwtMSksIlxcIik7aWYoKHQubGVuZ3RoLWUubGVuZ3RoKSUyPT0wKXJldHVybn1lbHNle3ZhciBuPVoodVsyXSwiKCkiKTstMTxuJiYoaT0oMD09PXVbMF0uaW5kZXhPZigiISIpPzU6NCkrdVsxXS5sZW5ndGgrbix1WzJdPXVbMl0uc3Vic3RyaW5nKDAsbiksdVswXT11WzBdLnN1YnN0cmluZygwLGkpLnRyaW0oKSx1WzNdPSIiKX12YXIgcixuPXVbMl0saT0iIjtyZXR1cm4gdGhpcy5vcHRpb25zLnBlZGFudGljPyhyPS9eKFteJyJdKlteXHNdKVxzKyhbJyJdKSguKilcMi8uZXhlYyhuKSkmJihuPXJbMV0saT1yWzNdKTppPXVbM10/dVszXS5zbGljZSgxLC0xKToiIixuPW4udHJpbSgpLHEodSx7aHJlZjoobj0vXjwvLnRlc3Qobik/dGhpcy5vcHRpb25zLnBlZGFudGljJiYhLz4kLy50ZXN0KHQpP24uc2xpY2UoMSk6bi5zbGljZSgxLC0xKTpuKSYmbi5yZXBsYWNlKHRoaXMucnVsZXMuaW5saW5lLl9lc2NhcGVzLCIkMSIpLHRpdGxlOmkmJmkucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5fZXNjYXBlcywiJDEiKX0sdVswXSl9fSx1LnJlZmxpbms9ZnVuY3Rpb24oZSx1KXtpZigodD10aGlzLnJ1bGVzLmlubGluZS5yZWZsaW5rLmV4ZWMoZSkpfHwodD10aGlzLnJ1bGVzLmlubGluZS5ub2xpbmsuZXhlYyhlKSkpe2U9KHRbMl18fHRbMV0pLnJlcGxhY2UoL1xzKy9nLCIgIik7aWYoKGU9dVtlLnRvTG93ZXJDYXNlKCldKSYmZS5ocmVmKXJldHVybiBxKHQsZSx0WzBdKTt2YXIgdD10WzBdLmNoYXJBdCgwKTtyZXR1cm57dHlwZToidGV4dCIscmF3OnQsdGV4dDp0fX19LHUuZW1TdHJvbmc9ZnVuY3Rpb24oZSx1LHQpe3ZvaWQgMD09PXQmJih0PSIiKTt2YXIgbj10aGlzLnJ1bGVzLmlubGluZS5lbVN0cm9uZy5sRGVsaW0uZXhlYyhlKTtpZihuJiYoIW5bM118fCF0Lm1hdGNoKC8oPzpbMC05QS1aYS16XHhBQVx4QjJceEIzXHhCNVx4QjlceEJBXHhCQy1ceEJFXHhDMC1ceEQ2XHhEOC1ceEY2XHhGOC1cdTAyQzFcdTAyQzYtXHUwMkQxXHUwMkUwLVx1MDJFNFx1MDJFQ1x1MDJFRVx1MDM3MC1cdTAzNzRcdTAzNzZcdTAzNzdcdTAzN0EtXHUwMzdEXHUwMzdGXHUwMzg2XHUwMzg4LVx1MDM4QVx1MDM4Q1x1MDM4RS1cdTAzQTFcdTAzQTMtXHUwM0Y1XHUwM0Y3LVx1MDQ4MVx1MDQ4QS1cdTA1MkZcdTA1MzEtXHUwNTU2XHUwNTU5XHUwNTYwLVx1MDU4OFx1MDVEMC1cdTA1RUFcdTA1RUYtXHUwNUYyXHUwNjIwLVx1MDY0QVx1MDY2MC1cdTA2NjlcdTA2NkVcdTA2NkZcdTA2NzEtXHUwNkQzXHUwNkQ1XHUwNkU1XHUwNkU2XHUwNkVFLVx1MDZGQ1x1MDZGRlx1MDcxMFx1MDcxMi1cdTA3MkZcdTA3NEQtXHUwN0E1XHUwN0IxXHUwN0MwLVx1MDdFQVx1MDdGNFx1MDdGNVx1MDdGQVx1MDgwMC1cdTA4MTVcdTA4MUFcdTA4MjRcdTA4MjhcdTA4NDAtXHUwODU4XHUwODYwLVx1MDg2QVx1MDhBMC1cdTA4QjRcdTA4QjYtXHUwOEM3XHUwOTA0LVx1MDkzOVx1MDkzRFx1MDk1MFx1MDk1OC1cdTA5NjFcdTA5NjYtXHUwOTZGXHUwOTcxLVx1MDk4MFx1MDk4NS1cdTA5OENcdTA5OEZcdTA5OTBcdTA5OTMtXHUwOUE4XHUwOUFBLVx1MDlCMFx1MDlCMlx1MDlCNi1cdTA5QjlcdTA5QkRcdTA5Q0VcdTA5RENcdTA5RERcdTA5REYtXHUwOUUxXHUwOUU2LVx1MDlGMVx1MDlGNC1cdTA5RjlcdTA5RkNcdTBBMDUtXHUwQTBBXHUwQTBGXHUwQTEwXHUwQTEzLVx1MEEyOFx1MEEyQS1cdTBBMzBcdTBBMzJcdTBBMzNcdTBBMzVcdTBBMzZcdTBBMzhcdTBBMzlcdTBBNTktXHUwQTVDXHUwQTVFXHUwQTY2LVx1MEE2Rlx1MEE3Mi1cdTBBNzRcdTBBODUtXHUwQThEXHUwQThGLVx1MEE5MVx1MEE5My1cdTBBQThcdTBBQUEtXHUwQUIwXHUwQUIyXHUwQUIzXHUwQUI1LVx1MEFCOVx1MEFCRFx1MEFEMFx1MEFFMFx1MEFFMVx1MEFFNi1cdTBBRUZcdTBBRjlcdTBCMDUtXHUwQjBDXHUwQjBGXHUwQjEwXHUwQjEzLVx1MEIyOFx1MEIyQS1cdTBCMzBcdTBCMzJcdTBCMzNcdTBCMzUtXHUwQjM5XHUwQjNEXHUwQjVDXHUwQjVEXHUwQjVGLVx1MEI2MVx1MEI2Ni1cdTBCNkZcdTBCNzEtXHUwQjc3XHUwQjgzXHUwQjg1LVx1MEI4QVx1MEI4RS1cdTBCOTBcdTBCOTItXHUwQjk1XHUwQjk5XHUwQjlBXHUwQjlDXHUwQjlFXHUwQjlGXHUwQkEzXHUwQkE0XHUwQkE4LVx1MEJBQVx1MEJBRS1cdTBCQjlcdTBCRDBcdTBCRTYtXHUwQkYyXHUwQzA1LVx1MEMwQ1x1MEMwRS1cdTBDMTBcdTBDMTItXHUwQzI4XHUwQzJBLVx1MEMzOVx1MEMzRFx1MEM1OC1cdTBDNUFcdTBDNjBcdTBDNjFcdTBDNjYtXHUwQzZGXHUwQzc4LVx1MEM3RVx1MEM4MFx1MEM4NS1cdTBDOENcdTBDOEUtXHUwQzkwXHUwQzkyLVx1MENBOFx1MENBQS1cdTBDQjNcdTBDQjUtXHUwQ0I5XHUwQ0JEXHUwQ0RFXHUwQ0UwXHUwQ0UxXHUwQ0U2LVx1MENFRlx1MENGMVx1MENGMlx1MEQwNC1cdTBEMENcdTBEMEUtXHUwRDEwXHUwRDEyLVx1MEQzQVx1MEQzRFx1MEQ0RVx1MEQ1NC1cdTBENTZcdTBENTgtXHUwRDYxXHUwRDY2LVx1MEQ3OFx1MEQ3QS1cdTBEN0ZcdTBEODUtXHUwRDk2XHUwRDlBLVx1MERCMVx1MERCMy1cdTBEQkJcdTBEQkRcdTBEQzAtXHUwREM2XHUwREU2LVx1MERFRlx1MEUwMS1cdTBFMzBcdTBFMzJcdTBFMzNcdTBFNDAtXHUwRTQ2XHUwRTUwLVx1MEU1OVx1MEU4MVx1MEU4Mlx1MEU4NFx1MEU4Ni1cdTBFOEFcdTBFOEMtXHUwRUEzXHUwRUE1XHUwRUE3LVx1MEVCMFx1MEVCMlx1MEVCM1x1MEVCRFx1MEVDMC1cdTBFQzRcdTBFQzZcdTBFRDAtXHUwRUQ5XHUwRURDLVx1MEVERlx1MEYwMFx1MEYyMC1cdTBGMzNcdTBGNDAtXHUwRjQ3XHUwRjQ5LVx1MEY2Q1x1MEY4OC1cdTBGOENcdTEwMDAtXHUxMDJBXHUxMDNGLVx1MTA0OVx1MTA1MC1cdTEwNTVcdTEwNUEtXHUxMDVEXHUxMDYxXHUxMDY1XHUxMDY2XHUxMDZFLVx1MTA3MFx1MTA3NS1cdTEwODFcdTEwOEVcdTEwOTAtXHUxMDk5XHUxMEEwLVx1MTBDNVx1MTBDN1x1MTBDRFx1MTBEMC1cdTEwRkFcdTEwRkMtXHUxMjQ4XHUxMjRBLVx1MTI0RFx1MTI1MC1cdTEyNTZcdTEyNThcdTEyNUEtXHUxMjVEXHUxMjYwLVx1MTI4OFx1MTI4QS1cdTEyOERcdTEyOTAtXHUxMkIwXHUxMkIyLVx1MTJCNVx1MTJCOC1cdTEyQkVcdTEyQzBcdTEyQzItXHUxMkM1XHUxMkM4LVx1MTJENlx1MTJEOC1cdTEzMTBcdTEzMTItXHUxMzE1XHUxMzE4LVx1MTM1QVx1MTM2OS1cdTEzN0NcdTEzODAtXHUxMzhGXHUxM0EwLVx1MTNGNVx1MTNGOC1cdTEzRkRcdTE0MDEtXHUxNjZDXHUxNjZGLVx1MTY3Rlx1MTY4MS1cdTE2OUFcdTE2QTAtXHUxNkVBXHUxNkVFLVx1MTZGOFx1MTcwMC1cdTE3MENcdTE3MEUtXHUxNzExXHUxNzIwLVx1MTczMVx1MTc0MC1cdTE3NTFcdTE3NjAtXHUxNzZDXHUxNzZFLVx1MTc3MFx1MTc4MC1cdTE3QjNcdTE3RDdcdTE3RENcdTE3RTAtXHUxN0U5XHUxN0YwLVx1MTdGOVx1MTgxMC1cdTE4MTlcdTE4MjAtXHUxODc4XHUxODgwLVx1MTg4NFx1MTg4Ny1cdTE4QThcdTE4QUFcdTE4QjAtXHUxOEY1XHUxOTAwLVx1MTkxRVx1MTk0Ni1cdTE5NkRcdTE5NzAtXHUxOTc0XHUxOTgwLVx1MTlBQlx1MTlCMC1cdTE5QzlcdTE5RDAtXHUxOURBXHUxQTAwLVx1MUExNlx1MUEyMC1cdTFBNTRcdTFBODAtXHUxQTg5XHUxQTkwLVx1MUE5OVx1MUFBN1x1MUIwNS1cdTFCMzNcdTFCNDUtXHUxQjRCXHUxQjUwLVx1MUI1OVx1MUI4My1cdTFCQTBcdTFCQUUtXHUxQkU1XHUxQzAwLVx1MUMyM1x1MUM0MC1cdTFDNDlcdTFDNEQtXHUxQzdEXHUxQzgwLVx1MUM4OFx1MUM5MC1cdTFDQkFcdTFDQkQtXHUxQ0JGXHUxQ0U5LVx1MUNFQ1x1MUNFRS1cdTFDRjNcdTFDRjVcdTFDRjZcdTFDRkFcdTFEMDAtXHUxREJGXHUxRTAwLVx1MUYxNVx1MUYxOC1cdTFGMURcdTFGMjAtXHUxRjQ1XHUxRjQ4LVx1MUY0RFx1MUY1MC1cdTFGNTdcdTFGNTlcdTFGNUJcdTFGNURcdTFGNUYtXHUxRjdEXHUxRjgwLVx1MUZCNFx1MUZCNi1cdTFGQkNcdTFGQkVcdTFGQzItXHUxRkM0XHUxRkM2LVx1MUZDQ1x1MUZEMC1cdTFGRDNcdTFGRDYtXHUxRkRCXHUxRkUwLVx1MUZFQ1x1MUZGMi1cdTFGRjRcdTFGRjYtXHUxRkZDXHUyMDcwXHUyMDcxXHUyMDc0LVx1MjA3OVx1MjA3Ri1cdTIwODlcdTIwOTAtXHUyMDlDXHUyMTAyXHUyMTA3XHUyMTBBLVx1MjExM1x1MjExNVx1MjExOS1cdTIxMURcdTIxMjRcdTIxMjZcdTIxMjhcdTIxMkEtXHUyMTJEXHUyMTJGLVx1MjEzOVx1MjEzQy1cdTIxM0ZcdTIxNDUtXHUyMTQ5XHUyMTRFXHUyMTUwLVx1MjE4OVx1MjQ2MC1cdTI0OUJcdTI0RUEtXHUyNEZGXHUyNzc2LVx1Mjc5M1x1MkMwMC1cdTJDMkVcdTJDMzAtXHUyQzVFXHUyQzYwLVx1MkNFNFx1MkNFQi1cdTJDRUVcdTJDRjJcdTJDRjNcdTJDRkRcdTJEMDAtXHUyRDI1XHUyRDI3XHUyRDJEXHUyRDMwLVx1MkQ2N1x1MkQ2Rlx1MkQ4MC1cdTJEOTZcdTJEQTAtXHUyREE2XHUyREE4LVx1MkRBRVx1MkRCMC1cdTJEQjZcdTJEQjgtXHUyREJFXHUyREMwLVx1MkRDNlx1MkRDOC1cdTJEQ0VcdTJERDAtXHUyREQ2XHUyREQ4LVx1MkRERVx1MkUyRlx1MzAwNS1cdTMwMDdcdTMwMjEtXHUzMDI5XHUzMDMxLVx1MzAzNVx1MzAzOC1cdTMwM0NcdTMwNDEtXHUzMDk2XHUzMDlELVx1MzA5Rlx1MzBBMS1cdTMwRkFcdTMwRkMtXHUzMEZGXHUzMTA1LVx1MzEyRlx1MzEzMS1cdTMxOEVcdTMxOTItXHUzMTk1XHUzMUEwLVx1MzFCRlx1MzFGMC1cdTMxRkZcdTMyMjAtXHUzMjI5XHUzMjQ4LVx1MzI0Rlx1MzI1MS1cdTMyNUZcdTMyODAtXHUzMjg5XHUzMkIxLVx1MzJCRlx1MzQwMC1cdTREQkZcdTRFMDAtXHU5RkZDXHVBMDAwLVx1QTQ4Q1x1QTREMC1cdUE0RkRcdUE1MDAtXHVBNjBDXHVBNjEwLVx1QTYyQlx1QTY0MC1cdUE2NkVcdUE2N0YtXHVBNjlEXHVBNkEwLVx1QTZFRlx1QTcxNy1cdUE3MUZcdUE3MjItXHVBNzg4XHVBNzhCLVx1QTdCRlx1QTdDMi1cdUE3Q0FcdUE3RjUtXHVBODAxXHVBODAzLVx1QTgwNVx1QTgwNy1cdUE4MEFcdUE4MEMtXHVBODIyXHVBODMwLVx1QTgzNVx1QTg0MC1cdUE4NzNcdUE4ODItXHVBOEIzXHVBOEQwLVx1QThEOVx1QThGMi1cdUE4RjdcdUE4RkJcdUE4RkRcdUE4RkVcdUE5MDAtXHVBOTI1XHVBOTMwLVx1QTk0Nlx1QTk2MC1cdUE5N0NcdUE5ODQtXHVBOUIyXHVBOUNGLVx1QTlEOVx1QTlFMC1cdUE5RTRcdUE5RTYtXHVBOUZFXHVBQTAwLVx1QUEyOFx1QUE0MC1cdUFBNDJcdUFBNDQtXHVBQTRCXHVBQTUwLVx1QUE1OVx1QUE2MC1cdUFBNzZcdUFBN0FcdUFBN0UtXHVBQUFGXHVBQUIxXHVBQUI1XHVBQUI2XHVBQUI5LVx1QUFCRFx1QUFDMFx1QUFDMlx1QUFEQi1cdUFBRERcdUFBRTAtXHVBQUVBXHVBQUYyLVx1QUFGNFx1QUIwMS1cdUFCMDZcdUFCMDktXHVBQjBFXHVBQjExLVx1QUIxNlx1QUIyMC1cdUFCMjZcdUFCMjgtXHVBQjJFXHVBQjMwLVx1QUI1QVx1QUI1Qy1cdUFCNjlcdUFCNzAtXHVBQkUyXHVBQkYwLVx1QUJGOVx1QUMwMC1cdUQ3QTNcdUQ3QjAtXHVEN0M2XHVEN0NCLVx1RDdGQlx1RjkwMC1cdUZBNkRcdUZBNzAtXHVGQUQ5XHVGQjAwLVx1RkIwNlx1RkIxMy1cdUZCMTdcdUZCMURcdUZCMUYtXHVGQjI4XHVGQjJBLVx1RkIzNlx1RkIzOC1cdUZCM0NcdUZCM0VcdUZCNDBcdUZCNDFcdUZCNDNcdUZCNDRcdUZCNDYtXHVGQkIxXHVGQkQzLVx1RkQzRFx1RkQ1MC1cdUZEOEZcdUZEOTItXHVGREM3XHVGREYwLVx1RkRGQlx1RkU3MC1cdUZFNzRcdUZFNzYtXHVGRUZDXHVGRjEwLVx1RkYxOVx1RkYyMS1cdUZGM0FcdUZGNDEtXHVGRjVBXHVGRjY2LVx1RkZCRVx1RkZDMi1cdUZGQzdcdUZGQ0EtXHVGRkNGXHVGRkQyLVx1RkZEN1x1RkZEQS1cdUZGRENdfFx1RDgwMFtcdURDMDAtXHVEQzBCXHVEQzBELVx1REMyNlx1REMyOC1cdURDM0FcdURDM0NcdURDM0RcdURDM0YtXHVEQzREXHVEQzUwLVx1REM1RFx1REM4MC1cdURDRkFcdUREMDctXHVERDMzXHVERDQwLVx1REQ3OFx1REQ4QVx1REQ4Qlx1REU4MC1cdURFOUNcdURFQTAtXHVERUQwXHVERUUxLVx1REVGQlx1REYwMC1cdURGMjNcdURGMkQtXHVERjRBXHVERjUwLVx1REY3NVx1REY4MC1cdURGOURcdURGQTAtXHVERkMzXHVERkM4LVx1REZDRlx1REZEMS1cdURGRDVdfFx1RDgwMVtcdURDMDAtXHVEQzlEXHVEQ0EwLVx1RENBOVx1RENCMC1cdURDRDNcdURDRDgtXHVEQ0ZCXHVERDAwLVx1REQyN1x1REQzMC1cdURENjNcdURFMDAtXHVERjM2XHVERjQwLVx1REY1NVx1REY2MC1cdURGNjddfFx1RDgwMltcdURDMDAtXHVEQzA1XHVEQzA4XHVEQzBBLVx1REMzNVx1REMzN1x1REMzOFx1REMzQ1x1REMzRi1cdURDNTVcdURDNTgtXHVEQzc2XHVEQzc5LVx1REM5RVx1RENBNy1cdURDQUZcdURDRTAtXHVEQ0YyXHVEQ0Y0XHVEQ0Y1XHVEQ0ZCLVx1REQxQlx1REQyMC1cdUREMzlcdUREODAtXHVEREI3XHVEREJDLVx1RERDRlx1REREMi1cdURFMDBcdURFMTAtXHVERTEzXHVERTE1LVx1REUxN1x1REUxOS1cdURFMzVcdURFNDAtXHVERTQ4XHVERTYwLVx1REU3RVx1REU4MC1cdURFOUZcdURFQzAtXHVERUM3XHVERUM5LVx1REVFNFx1REVFQi1cdURFRUZcdURGMDAtXHVERjM1XHVERjQwLVx1REY1NVx1REY1OC1cdURGNzJcdURGNzgtXHVERjkxXHVERkE5LVx1REZBRl18XHVEODAzW1x1REMwMC1cdURDNDhcdURDODAtXHVEQ0IyXHVEQ0MwLVx1RENGMlx1RENGQS1cdUREMjNcdUREMzAtXHVERDM5XHVERTYwLVx1REU3RVx1REU4MC1cdURFQTlcdURFQjBcdURFQjFcdURGMDAtXHVERjI3XHVERjMwLVx1REY0NVx1REY1MS1cdURGNTRcdURGQjAtXHVERkNCXHVERkUwLVx1REZGNl18XHVEODA0W1x1REMwMy1cdURDMzdcdURDNTItXHVEQzZGXHVEQzgzLVx1RENBRlx1RENEMC1cdURDRThcdURDRjAtXHVEQ0Y5XHVERDAzLVx1REQyNlx1REQzNi1cdUREM0ZcdURENDRcdURENDdcdURENTAtXHVERDcyXHVERDc2XHVERDgzLVx1RERCMlx1RERDMS1cdUREQzRcdURERDAtXHVERERBXHVERERDXHVEREUxLVx1RERGNFx1REUwMC1cdURFMTFcdURFMTMtXHVERTJCXHVERTgwLVx1REU4Nlx1REU4OFx1REU4QS1cdURFOERcdURFOEYtXHVERTlEXHVERTlGLVx1REVBOFx1REVCMC1cdURFREVcdURFRjAtXHVERUY5XHVERjA1LVx1REYwQ1x1REYwRlx1REYxMFx1REYxMy1cdURGMjhcdURGMkEtXHVERjMwXHVERjMyXHVERjMzXHVERjM1LVx1REYzOVx1REYzRFx1REY1MFx1REY1RC1cdURGNjFdfFx1RDgwNVtcdURDMDAtXHVEQzM0XHVEQzQ3LVx1REM0QVx1REM1MC1cdURDNTlcdURDNUYtXHVEQzYxXHVEQzgwLVx1RENBRlx1RENDNFx1RENDNVx1RENDN1x1RENEMC1cdURDRDlcdUREODAtXHVEREFFXHVEREQ4LVx1REREQlx1REUwMC1cdURFMkZcdURFNDRcdURFNTAtXHVERTU5XHVERTgwLVx1REVBQVx1REVCOFx1REVDMC1cdURFQzlcdURGMDAtXHVERjFBXHVERjMwLVx1REYzQl18XHVEODA2W1x1REMwMC1cdURDMkJcdURDQTAtXHVEQ0YyXHVEQ0ZGLVx1REQwNlx1REQwOVx1REQwQy1cdUREMTNcdUREMTVcdUREMTZcdUREMTgtXHVERDJGXHVERDNGXHVERDQxXHVERDUwLVx1REQ1OVx1RERBMC1cdUREQTdcdUREQUEtXHVEREQwXHVEREUxXHVEREUzXHVERTAwXHVERTBCLVx1REUzMlx1REUzQVx1REU1MFx1REU1Qy1cdURFODlcdURFOURcdURFQzAtXHVERUY4XXxcdUQ4MDdbXHVEQzAwLVx1REMwOFx1REMwQS1cdURDMkVcdURDNDBcdURDNTAtXHVEQzZDXHVEQzcyLVx1REM4Rlx1REQwMC1cdUREMDZcdUREMDhcdUREMDlcdUREMEItXHVERDMwXHVERDQ2XHVERDUwLVx1REQ1OVx1REQ2MC1cdURENjVcdURENjdcdURENjhcdURENkEtXHVERDg5XHVERDk4XHVEREEwLVx1RERBOVx1REVFMC1cdURFRjJcdURGQjBcdURGQzAtXHVERkQ0XXxcdUQ4MDhbXHVEQzAwLVx1REY5OV18XHVEODA5W1x1REMwMC1cdURDNkVcdURDODAtXHVERDQzXXxbXHVEODBDXHVEODFDLVx1RDgyMFx1RDgyMlx1RDg0MC1cdUQ4NjhcdUQ4NkEtXHVEODZDXHVEODZGLVx1RDg3Mlx1RDg3NC1cdUQ4NzlcdUQ4ODAtXHVEODgzXVtcdURDMDAtXHVERkZGXXxcdUQ4MERbXHVEQzAwLVx1REMyRV18XHVEODExW1x1REMwMC1cdURFNDZdfFx1RDgxQVtcdURDMDAtXHVERTM4XHVERTQwLVx1REU1RVx1REU2MC1cdURFNjlcdURFRDAtXHVERUVEXHVERjAwLVx1REYyRlx1REY0MC1cdURGNDNcdURGNTAtXHVERjU5XHVERjVCLVx1REY2MVx1REY2My1cdURGNzdcdURGN0QtXHVERjhGXXxcdUQ4MUJbXHVERTQwLVx1REU5Nlx1REYwMC1cdURGNEFcdURGNTBcdURGOTMtXHVERjlGXHVERkUwXHVERkUxXHVERkUzXXxcdUQ4MjFbXHVEQzAwLVx1REZGN118XHVEODIzW1x1REMwMC1cdURDRDVcdUREMDAtXHVERDA4XXxcdUQ4MkNbXHVEQzAwLVx1REQxRVx1REQ1MC1cdURENTJcdURENjQtXHVERDY3XHVERDcwLVx1REVGQl18XHVEODJGW1x1REMwMC1cdURDNkFcdURDNzAtXHVEQzdDXHVEQzgwLVx1REM4OFx1REM5MC1cdURDOTldfFx1RDgzNFtcdURFRTAtXHVERUYzXHVERjYwLVx1REY3OF18XHVEODM1W1x1REMwMC1cdURDNTRcdURDNTYtXHVEQzlDXHVEQzlFXHVEQzlGXHVEQ0EyXHVEQ0E1XHVEQ0E2XHVEQ0E5LVx1RENBQ1x1RENBRS1cdURDQjlcdURDQkJcdURDQkQtXHVEQ0MzXHVEQ0M1LVx1REQwNVx1REQwNy1cdUREMEFcdUREMEQtXHVERDE0XHVERDE2LVx1REQxQ1x1REQxRS1cdUREMzlcdUREM0ItXHVERDNFXHVERDQwLVx1REQ0NFx1REQ0Nlx1REQ0QS1cdURENTBcdURENTItXHVERUE1XHVERUE4LVx1REVDMFx1REVDMi1cdURFREFcdURFREMtXHVERUZBXHVERUZDLVx1REYxNFx1REYxNi1cdURGMzRcdURGMzYtXHVERjRFXHVERjUwLVx1REY2RVx1REY3MC1cdURGODhcdURGOEEtXHVERkE4XHVERkFBLVx1REZDMlx1REZDNC1cdURGQ0JcdURGQ0UtXHVERkZGXXxcdUQ4MzhbXHVERDAwLVx1REQyQ1x1REQzNy1cdUREM0RcdURENDAtXHVERDQ5XHVERDRFXHVERUMwLVx1REVFQlx1REVGMC1cdURFRjldfFx1RDgzQVtcdURDMDAtXHVEQ0M0XHVEQ0M3LVx1RENDRlx1REQwMC1cdURENDNcdURENEJcdURENTAtXHVERDU5XXxcdUQ4M0JbXHVEQzcxLVx1RENBQlx1RENBRC1cdURDQUZcdURDQjEtXHVEQ0I0XHVERDAxLVx1REQyRFx1REQyRi1cdUREM0RcdURFMDAtXHVERTAzXHVERTA1LVx1REUxRlx1REUyMVx1REUyMlx1REUyNFx1REUyN1x1REUyOS1cdURFMzJcdURFMzQtXHVERTM3XHVERTM5XHVERTNCXHVERTQyXHVERTQ3XHVERTQ5XHVERTRCXHVERTRELVx1REU0Rlx1REU1MVx1REU1Mlx1REU1NFx1REU1N1x1REU1OVx1REU1Qlx1REU1RFx1REU1Rlx1REU2MVx1REU2Mlx1REU2NFx1REU2Ny1cdURFNkFcdURFNkMtXHVERTcyXHVERTc0LVx1REU3N1x1REU3OS1cdURFN0NcdURFN0VcdURFODAtXHVERTg5XHVERThCLVx1REU5Qlx1REVBMS1cdURFQTNcdURFQTUtXHVERUE5XHVERUFCLVx1REVCQl18XHVEODNDW1x1REQwMC1cdUREMENdfFx1RDgzRVtcdURGRjAtXHVERkY5XXxcdUQ4NjlbXHVEQzAwLVx1REVERFx1REYwMC1cdURGRkZdfFx1RDg2RFtcdURDMDAtXHVERjM0XHVERjQwLVx1REZGRl18XHVEODZFW1x1REMwMC1cdURDMURcdURDMjAtXHVERkZGXXxcdUQ4NzNbXHVEQzAwLVx1REVBMVx1REVCMC1cdURGRkZdfFx1RDg3QVtcdURDMDAtXHVERkUwXXxcdUQ4N0VbXHVEQzAwLVx1REUxRF18XHVEODg0W1x1REMwMC1cdURGNEFdKS8pKSl7dmFyIHI9blsxXXx8blsyXXx8IiI7aWYoIXJ8fHImJigiIj09PXR8fHRoaXMucnVsZXMuaW5saW5lLnB1bmN0dWF0aW9uLmV4ZWModCkpKXt2YXIgaSxzPW5bMF0ubGVuZ3RoLTEsbD1zLGE9MCxEPSIqIj09PW5bMF1bMF0/dGhpcy5ydWxlcy5pbmxpbmUuZW1TdHJvbmcuckRlbGltQXN0OnRoaXMucnVsZXMuaW5saW5lLmVtU3Ryb25nLnJEZWxpbVVuZDtmb3IoRC5sYXN0SW5kZXg9MCx1PXUuc2xpY2UoLTEqZS5sZW5ndGgrcyk7bnVsbCE9KG49RC5leGVjKHUpKTspaWYoaT1uWzFdfHxuWzJdfHxuWzNdfHxuWzRdfHxuWzVdfHxuWzZdKWlmKGk9aS5sZW5ndGgsblszXXx8bls0XSlsKz1pO2Vsc2UgaWYoISgobls1XXx8bls2XSkmJnMlMyl8fChzK2kpJTMpe2lmKCEoMDwobC09aSkpKXtpZihsK2EtaTw9MCYmIXUuc2xpY2UoRC5sYXN0SW5kZXgpLm1hdGNoKEQpJiYoaT1NYXRoLm1pbihpLGkrbCthKSksTWF0aC5taW4ocyxpKSUyKXJldHVybnt0eXBlOiJlbSIscmF3OmUuc2xpY2UoMCxzK24uaW5kZXgraSsxKSx0ZXh0OmUuc2xpY2UoMSxzK24uaW5kZXgraSl9O2lmKE1hdGgubWluKHMsaSklMj09MClyZXR1cm57dHlwZToic3Ryb25nIixyYXc6ZS5zbGljZSgwLHMrbi5pbmRleCtpKzEpLHRleHQ6ZS5zbGljZSgyLHMrbi5pbmRleCtpLTEpfX19ZWxzZSBhKz1pfX19LHUuY29kZXNwYW49ZnVuY3Rpb24oZSl7dmFyIHU9dGhpcy5ydWxlcy5pbmxpbmUuY29kZS5leGVjKGUpO2lmKHUpe3ZhciB0PXVbMl0ucmVwbGFjZSgvXG4vZywiICIpLG49L1teIF0vLnRlc3QodCksZT0vXiAvLnRlc3QodCkmJi8gJC8udGVzdCh0KTtyZXR1cm4gbiYmZSYmKHQ9dC5zdWJzdHJpbmcoMSx0Lmxlbmd0aC0xKSksdD1SKHQsITApLHt0eXBlOiJjb2Rlc3BhbiIscmF3OnVbMF0sdGV4dDp0fX19LHUuYnI9ZnVuY3Rpb24oZSl7ZT10aGlzLnJ1bGVzLmlubGluZS5ici5leGVjKGUpO2lmKGUpcmV0dXJue3R5cGU6ImJyIixyYXc6ZVswXX19LHUuZGVsPWZ1bmN0aW9uKGUpe2U9dGhpcy5ydWxlcy5pbmxpbmUuZGVsLmV4ZWMoZSk7aWYoZSlyZXR1cm57dHlwZToiZGVsIixyYXc6ZVswXSx0ZXh0OmVbMl19fSx1LmF1dG9saW5rPWZ1bmN0aW9uKGUsdSl7ZT10aGlzLnJ1bGVzLmlubGluZS5hdXRvbGluay5leGVjKGUpO2lmKGUpe3ZhciB0LHU9IkAiPT09ZVsyXT8ibWFpbHRvOiIrKHQ9Uih0aGlzLm9wdGlvbnMubWFuZ2xlP3UoZVsxXSk6ZVsxXSkpOnQ9UihlWzFdKTtyZXR1cm57dHlwZToibGluayIscmF3OmVbMF0sdGV4dDp0LGhyZWY6dSx0b2tlbnM6W3t0eXBlOiJ0ZXh0IixyYXc6dCx0ZXh0OnR9XX19fSx1LnVybD1mdW5jdGlvbihlLHUpe3ZhciB0LG4scixpO2lmKHQ9dGhpcy5ydWxlcy5pbmxpbmUudXJsLmV4ZWMoZSkpe2lmKCJAIj09PXRbMl0pcj0ibWFpbHRvOiIrKG49Uih0aGlzLm9wdGlvbnMubWFuZ2xlP3UodFswXSk6dFswXSkpO2Vsc2V7Zm9yKDtpPXRbMF0sdFswXT10aGlzLnJ1bGVzLmlubGluZS5fYmFja3BlZGFsLmV4ZWModFswXSlbMF0saSE9PXRbMF07KTtuPVIodFswXSkscj0id3d3LiI9PT10WzFdPyJodHRwOi8vIituOm59cmV0dXJue3R5cGU6ImxpbmsiLHJhdzp0WzBdLHRleHQ6bixocmVmOnIsdG9rZW5zOlt7dHlwZToidGV4dCIscmF3Om4sdGV4dDpufV19fX0sdS5pbmxpbmVUZXh0PWZ1bmN0aW9uKGUsdSx0KXtlPXRoaXMucnVsZXMuaW5saW5lLnRleHQuZXhlYyhlKTtpZihlKXt0PXU/dGhpcy5vcHRpb25zLnNhbml0aXplP3RoaXMub3B0aW9ucy5zYW5pdGl6ZXI/dGhpcy5vcHRpb25zLnNhbml0aXplcihlWzBdKTpSKGVbMF0pOmVbMF06Uih0aGlzLm9wdGlvbnMuc21hcnR5cGFudHM/dChlWzBdKTplWzBdKTtyZXR1cm57dHlwZToidGV4dCIscmF3OmVbMF0sdGV4dDp0fX19LGV9KCkseT13LF89eCx3PXYseD17bmV3bGluZTovXig/OiAqKD86XG58JCkpKy8sY29kZTovXiggezR9W15cbl0rKD86XG4oPzogKig/OlxufCQpKSopPykrLyxmZW5jZXM6L14gezAsM30oYHszLH0oPz1bXmBcbl0qXG4pfH57Myx9KShbXlxuXSopXG4oPzp8KFtcc1xTXSo/KVxuKSg/OiB7MCwzfVwxW35gXSogKig/OlxuK3wkKXwkKS8saHI6L14gezAsM30oKD86LSAqKXszLH18KD86XyAqKXszLH18KD86XCogKil7Myx9KSg/OlxuK3wkKS8saGVhZGluZzovXiB7MCwzfSgjezEsNn0pKD89XHN8JCkoLiopKD86XG4rfCQpLyxibG9ja3F1b3RlOi9eKCB7MCwzfT4gPyhwYXJhZ3JhcGh8W15cbl0qKSg/OlxufCQpKSsvLGxpc3Q6L14oIHswLDN9KShidWxsKSBbXHNcU10rPyg/OmhyfGRlZnxcbnsyLH0oPyEgKSg/ISB7MCwzfWJ1bGwgKVxuKnxccyokKS8saHRtbDoiXiB7MCwzfSg/Ojwoc2NyaXB0fHByZXxzdHlsZSlbXFxzPl1bXFxzXFxTXSo/KD86PC9cXDE+W15cXG5dKlxcbit8JCl8Y29tbWVudFteXFxuXSooXFxuK3wkKXw8XFw/W1xcc1xcU10qPyg/OlxcPz5cXG4qfCQpfDwhW0EtWl1bXFxzXFxTXSo/KD86Plxcbip8JCl8PCFcXFtDREFUQVxcW1tcXHNcXFNdKj8oPzpcXF1cXF0+XFxuKnwkKXw8Lz8odGFnKSg/OiArfFxcbnwvPz4pW1xcc1xcU10qPyg/OlxcbnsyLH18JCl8PCg/IXNjcmlwdHxwcmV8c3R5bGUpKFthLXpdW1xcdy1dKikoPzphdHRyaWJ1dGUpKj8gKi8/Pig/PVsgXFx0XSooPzpcXG58JCkpW1xcc1xcU10qPyg/OlxcbnsyLH18JCl8PC8oPyFzY3JpcHR8cHJlfHN0eWxlKVthLXpdW1xcdy1dKlxccyo+KD89WyBcXHRdKig/OlxcbnwkKSlbXFxzXFxTXSo/KD86XFxuezIsfXwkKSkiLGRlZjovXiB7MCwzfVxbKGxhYmVsKVxdOiAqXG4/ICo8PyhbXlxzPl0rKT4/KD86KD86ICtcbj8gKnwgKlxuICopKHRpdGxlKSk/ICooPzpcbit8JCkvLG5wdGFibGU6eSx0YWJsZTp5LGxoZWFkaW5nOi9eKFteXG5dKylcbiB7MCwzfSg9K3wtKykgKig/OlxuK3wkKS8sX3BhcmFncmFwaDovXihbXlxuXSsoPzpcbig/IWhyfGhlYWRpbmd8bGhlYWRpbmd8YmxvY2txdW90ZXxmZW5jZXN8bGlzdHxodG1sfCArXG4pW15cbl0rKSopLyx0ZXh0Oi9eW15cbl0rLyxfbGFiZWw6Lyg/IVxzKlxdKSg/OlxcW1xbXF1dfFteXFtcXV0pKy8sX3RpdGxlOi8oPzoiKD86XFwiP3xbXiJcXF0pKiJ8J1teJ1xuXSooPzpcblteJ1xuXSspKlxuPyd8XChbXigpXSpcKSkvfTt4LmRlZj1fKHguZGVmKS5yZXBsYWNlKCJsYWJlbCIseC5fbGFiZWwpLnJlcGxhY2UoInRpdGxlIix4Ll90aXRsZSkuZ2V0UmVnZXgoKSx4LmJ1bGxldD0vKD86WyorLV18XGR7MSw5fVsuKV0pLyx4Lml0ZW09L14oICopKGJ1bGwpID9bXlxuXSooPzpcbig/ISAqYnVsbCA/KVteXG5dKikqLyx4Lml0ZW09Xyh4Lml0ZW0sImdtIikucmVwbGFjZSgvYnVsbC9nLHguYnVsbGV0KS5nZXRSZWdleCgpLHgubGlzdEl0ZW1TdGFydD1fKC9eKCAqKShidWxsKSAqLykucmVwbGFjZSgiYnVsbCIseC5idWxsZXQpLmdldFJlZ2V4KCkseC5saXN0PV8oeC5saXN0KS5yZXBsYWNlKC9idWxsL2cseC5idWxsZXQpLnJlcGxhY2UoImhyIiwiXFxuKyg/PVxcMT8oPzooPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXCogKil7Myx9KSg/Olxcbit8JCkpIikucmVwbGFjZSgiZGVmIiwiXFxuKyg/PSIreC5kZWYuc291cmNlKyIpIikuZ2V0UmVnZXgoKSx4Ll90YWc9ImFkZHJlc3N8YXJ0aWNsZXxhc2lkZXxiYXNlfGJhc2Vmb250fGJsb2NrcXVvdGV8Ym9keXxjYXB0aW9ufGNlbnRlcnxjb2x8Y29sZ3JvdXB8ZGR8ZGV0YWlsc3xkaWFsb2d8ZGlyfGRpdnxkbHxkdHxmaWVsZHNldHxmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8Zm9ybXxmcmFtZXxmcmFtZXNldHxoWzEtNl18aGVhZHxoZWFkZXJ8aHJ8aHRtbHxpZnJhbWV8bGVnZW5kfGxpfGxpbmt8bWFpbnxtZW51fG1lbnVpdGVtfG1ldGF8bmF2fG5vZnJhbWVzfG9sfG9wdGdyb3VwfG9wdGlvbnxwfHBhcmFtfHNlY3Rpb258c291cmNlfHN1bW1hcnl8dGFibGV8dGJvZHl8dGR8dGZvb3R8dGh8dGhlYWR8dGl0bGV8dHJ8dHJhY2t8dWwiLHguX2NvbW1lbnQ9LzwhLS0oPyEtPz4pW1xzXFNdKj8oPzotLT58JCkvLHguaHRtbD1fKHguaHRtbCwiaSIpLnJlcGxhY2UoImNvbW1lbnQiLHguX2NvbW1lbnQpLnJlcGxhY2UoInRhZyIseC5fdGFnKS5yZXBsYWNlKCJhdHRyaWJ1dGUiLC8gK1thLXpBLVo6X11bXHcuOi1dKig/OiAqPSAqIlteIlxuXSoifCAqPSAqJ1teJ1xuXSonfCAqPSAqW15ccyInPTw+YF0rKT8vKS5nZXRSZWdleCgpLHgucGFyYWdyYXBoPV8oeC5fcGFyYWdyYXBoKS5yZXBsYWNlKCJociIseC5ocikucmVwbGFjZSgiaGVhZGluZyIsIiB7MCwzfSN7MSw2fSAiKS5yZXBsYWNlKCJ8bGhlYWRpbmciLCIiKS5yZXBsYWNlKCJibG9ja3F1b3RlIiwiIHswLDN9PiIpLnJlcGxhY2UoImZlbmNlcyIsIiB7MCwzfSg/OmB7Myx9KD89W15gXFxuXSpcXG4pfH57Myx9KVteXFxuXSpcXG4iKS5yZXBsYWNlKCJsaXN0IiwiIHswLDN9KD86WyorLV18MVsuKV0pICIpLnJlcGxhY2UoImh0bWwiLCI8Lz8oPzp0YWcpKD86ICt8XFxufC8/Pil8PCg/OnNjcmlwdHxwcmV8c3R5bGV8IS0tKSIpLnJlcGxhY2UoInRhZyIseC5fdGFnKS5nZXRSZWdleCgpLHguYmxvY2txdW90ZT1fKHguYmxvY2txdW90ZSkucmVwbGFjZSgicGFyYWdyYXBoIix4LnBhcmFncmFwaCkuZ2V0UmVnZXgoKSx4Lm5vcm1hbD13KHt9LHgpLHguZ2ZtPXcoe30seC5ub3JtYWwse25wdGFibGU6Il4gKihbXnxcXG4gXS4qXFx8LiopXFxuIHswLDN9KFstOl0rICpcXHxbLXwgOl0qKSg/OlxcbigoPzooPyFcXG58aHJ8aGVhZGluZ3xibG9ja3F1b3RlfGNvZGV8ZmVuY2VzfGxpc3R8aHRtbCkuKig/OlxcbnwkKSkqKVxcbip8JCkiLHRhYmxlOiJeICpcXHwoLispXFxuIHswLDN9XFx8PyggKlstOl0rWy18IDpdKikoPzpcXG4gKigoPzooPyFcXG58aHJ8aGVhZGluZ3xibG9ja3F1b3RlfGNvZGV8ZmVuY2VzfGxpc3R8aHRtbCkuKig/OlxcbnwkKSkqKVxcbip8JCkifSkseC5nZm0ubnB0YWJsZT1fKHguZ2ZtLm5wdGFibGUpLnJlcGxhY2UoImhyIix4LmhyKS5yZXBsYWNlKCJoZWFkaW5nIiwiIHswLDN9I3sxLDZ9ICIpLnJlcGxhY2UoImJsb2NrcXVvdGUiLCIgezAsM30+IikucmVwbGFjZSgiY29kZSIsIiB7NH1bXlxcbl0iKS5yZXBsYWNlKCJmZW5jZXMiLCIgezAsM30oPzpgezMsfSg/PVteYFxcbl0qXFxuKXx+ezMsfSlbXlxcbl0qXFxuIikucmVwbGFjZSgibGlzdCIsIiB7MCwzfSg/OlsqKy1dfDFbLildKSAiKS5yZXBsYWNlKCJodG1sIiwiPC8/KD86dGFnKSg/OiArfFxcbnwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfCEtLSkiKS5yZXBsYWNlKCJ0YWciLHguX3RhZykuZ2V0UmVnZXgoKSx4LmdmbS50YWJsZT1fKHguZ2ZtLnRhYmxlKS5yZXBsYWNlKCJociIseC5ocikucmVwbGFjZSgiaGVhZGluZyIsIiB7MCwzfSN7MSw2fSAiKS5yZXBsYWNlKCJibG9ja3F1b3RlIiwiIHswLDN9PiIpLnJlcGxhY2UoImNvZGUiLCIgezR9W15cXG5dIikucmVwbGFjZSgiZmVuY2VzIiwiIHswLDN9KD86YHszLH0oPz1bXmBcXG5dKlxcbil8fnszLH0pW15cXG5dKlxcbiIpLnJlcGxhY2UoImxpc3QiLCIgezAsM30oPzpbKistXXwxWy4pXSkgIikucmVwbGFjZSgiaHRtbCIsIjwvPyg/OnRhZykoPzogK3xcXG58Lz8+KXw8KD86c2NyaXB0fHByZXxzdHlsZXwhLS0pIikucmVwbGFjZSgidGFnIix4Ll90YWcpLmdldFJlZ2V4KCkseC5wZWRhbnRpYz13KHt9LHgubm9ybWFsLHtodG1sOl8oIl4gKig/OmNvbW1lbnQgKig/OlxcbnxcXHMqJCl8PCh0YWcpW1xcc1xcU10rPzwvXFwxPiAqKD86XFxuezIsfXxcXHMqJCl8PHRhZyg/OlwiW15cIl0qXCJ8J1teJ10qJ3xcXHNbXidcIi8+XFxzXSopKj8vPz4gKig/OlxcbnsyLH18XFxzKiQpKSIpLnJlcGxhY2UoImNvbW1lbnQiLHguX2NvbW1lbnQpLnJlcGxhY2UoL3RhZy9nLCIoPyEoPzphfGVtfHN0cm9uZ3xzbWFsbHxzfGNpdGV8cXxkZm58YWJicnxkYXRhfHRpbWV8Y29kZXx2YXJ8c2FtcHxrYmR8c3VifHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkb3xzcGFufGJyfHdicnxpbnN8ZGVsfGltZylcXGIpXFx3Kyg/ITp8W15cXHdcXHNAXSpAKVxcYiIpLmdldFJlZ2V4KCksZGVmOi9eICpcWyhbXlxdXSspXF06ICo8PyhbXlxzPl0rKT4/KD86ICsoWyIoXVteXG5dK1siKV0pKT8gKig/OlxuK3wkKS8saGVhZGluZzovXigjezEsNn0pKC4qKSg/OlxuK3wkKS8sZmVuY2VzOnkscGFyYWdyYXBoOl8oeC5ub3JtYWwuX3BhcmFncmFwaCkucmVwbGFjZSgiaHIiLHguaHIpLnJlcGxhY2UoImhlYWRpbmciLCIgKiN7MSw2fSAqW15cbl0iKS5yZXBsYWNlKCJsaGVhZGluZyIseC5saGVhZGluZykucmVwbGFjZSgiYmxvY2txdW90ZSIsIiB7MCwzfT4iKS5yZXBsYWNlKCJ8ZmVuY2VzIiwiIikucmVwbGFjZSgifGxpc3QiLCIiKS5yZXBsYWNlKCJ8aHRtbCIsIiIpLmdldFJlZ2V4KCl9KTt5PXtlc2NhcGU6L15cXChbISIjJCUmJygpKissXC0uLzo7PD0+P0BcW1xdXFxeX2B7fH1+XSkvLGF1dG9saW5rOi9ePChzY2hlbWU6W15cc1x4MDAtXHgxZjw+XSp8ZW1haWwpPi8sdXJsOnksdGFnOiJeY29tbWVudHxePC9bYS16QS1aXVtcXHc6LV0qXFxzKj58XjxbYS16QS1aXVtcXHctXSooPzphdHRyaWJ1dGUpKj9cXHMqLz8+fF48XFw/W1xcc1xcU10qP1xcPz58XjwhW2EtekEtWl0rXFxzW1xcc1xcU10qPz58XjwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPiIsbGluazovXiE/XFsobGFiZWwpXF1cKFxzKihocmVmKSg/OlxzKyh0aXRsZSkpP1xzKlwpLyxyZWZsaW5rOi9eIT9cWyhsYWJlbClcXVxbKD8hXHMqXF0pKCg/OlxcW1xbXF1dP3xbXlxbXF1cXF0pKylcXS8sbm9saW5rOi9eIT9cWyg/IVxzKlxdKSgoPzpcW1teXFtcXV0qXF18XFxbXFtcXV18W15cW1xdXSkqKVxdKD86XFtcXSk/LyxyZWZsaW5rU2VhcmNoOiJyZWZsaW5rfG5vbGluayg/IVxcKCkiLGVtU3Ryb25nOntsRGVsaW06L14oPzpcKisoPzooW3B1bmN0X10pfFteXHMqXSkpfF5fKyg/OihbcHVuY3QqXSl8KFteXHNfXSkpLyxyRGVsaW1Bc3Q6L1xfXF9bXl9dKj9cKlteX10qP1xfXF98W3B1bmN0X10oXCorKSg/PVtcc118JCl8W15wdW5jdCpfXHNdKFwqKykoPz1bcHVuY3RfXHNdfCQpfFtwdW5jdF9cc10oXCorKSg/PVtecHVuY3QqX1xzXSl8W1xzXShcKispKD89W3B1bmN0X10pfFtwdW5jdF9dKFwqKykoPz1bcHVuY3RfXSl8W15wdW5jdCpfXHNdKFwqKykoPz1bXnB1bmN0Kl9cc10pLyxyRGVsaW1VbmQ6L1wqXCpbXipdKj9cX1teKl0qP1wqXCp8W3B1bmN0Kl0oXF8rKSg/PVtcc118JCl8W15wdW5jdCpfXHNdKFxfKykoPz1bcHVuY3QqXHNdfCQpfFtwdW5jdCpcc10oXF8rKSg/PVtecHVuY3QqX1xzXSl8W1xzXShcXyspKD89W3B1bmN0Kl0pfFtwdW5jdCpdKFxfKykoPz1bcHVuY3QqXSkvfSxjb2RlOi9eKGArKShbXmBdfFteYF1bXHNcU10qP1teYF0pXDEoPyFgKS8sYnI6L14oIHsyLH18XFwpXG4oPyFccyokKS8sZGVsOnksdGV4dDovXihgK3xbXmBdKSg/Oig/PSB7Mix9XG4pfFtcc1xTXSo/KD86KD89W1xcPCFcW2AqX118XGJffCQpfFteIF0oPz0gezIsfVxuKSkpLyxwdW5jdHVhdGlvbjovXihbXHNwdW5jdHVhdGlvbl0pLyxfcHVuY3R1YXRpb246IiFcIiMkJSYnKCkrXFwtLiwvOjs8PT4/QFxcW1xcXWBee3x9fiJ9O3kucHVuY3R1YXRpb249Xyh5LnB1bmN0dWF0aW9uKS5yZXBsYWNlKC9wdW5jdHVhdGlvbi9nLHkuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpLHkuYmxvY2tTa2lwPS9cW1teXF1dKj9cXVwoW15cKV0qP1wpfGBbXmBdKj9gfDxbXj5dKj8+L2cseS5lc2NhcGVkRW1TdD0vXFxcKnxcXF8vZyx5Ll9jb21tZW50PV8oeC5fY29tbWVudCkucmVwbGFjZSgiKD86LS1ceDNlfCQpIiwiLS1ceDNlIikuZ2V0UmVnZXgoKSx5LmVtU3Ryb25nLmxEZWxpbT1fKHkuZW1TdHJvbmcubERlbGltKS5yZXBsYWNlKC9wdW5jdC9nLHkuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpLHkuZW1TdHJvbmcuckRlbGltQXN0PV8oeS5lbVN0cm9uZy5yRGVsaW1Bc3QsImciKS5yZXBsYWNlKC9wdW5jdC9nLHkuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpLHkuZW1TdHJvbmcuckRlbGltVW5kPV8oeS5lbVN0cm9uZy5yRGVsaW1VbmQsImciKS5yZXBsYWNlKC9wdW5jdC9nLHkuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpLHkuX2VzY2FwZXM9L1xcKFshIiMkJSYnKCkqKyxcLS4vOjs8PT4/QFxbXF1cXF5fYHt8fX5dKS9nLHkuX3NjaGVtZT0vW2EtekEtWl1bYS16QS1aMC05Ky4tXXsxLDMxfS8seS5fZW1haWw9L1thLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rKEApW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKyg/IVstX10pLyx5LmF1dG9saW5rPV8oeS5hdXRvbGluaykucmVwbGFjZSgic2NoZW1lIix5Ll9zY2hlbWUpLnJlcGxhY2UoImVtYWlsIix5Ll9lbWFpbCkuZ2V0UmVnZXgoKSx5Ll9hdHRyaWJ1dGU9L1xzK1thLXpBLVo6X11bXHcuOi1dKig/OlxzKj1ccyoiW14iXSoifFxzKj1ccyonW14nXSonfFxzKj1ccypbXlxzIic9PD5gXSspPy8seS50YWc9Xyh5LnRhZykucmVwbGFjZSgiY29tbWVudCIseS5fY29tbWVudCkucmVwbGFjZSgiYXR0cmlidXRlIix5Ll9hdHRyaWJ1dGUpLmdldFJlZ2V4KCkseS5fbGFiZWw9Lyg/OlxbKD86XFwufFteXFtcXVxcXSkqXF18XFwufGBbXmBdKmB8W15cW1xdXFxgXSkqPy8seS5faHJlZj0vPCg/OlxcLnxbXlxuPD5cXF0pKz58W15cc1x4MDAtXHgxZl0qLyx5Ll90aXRsZT0vIig/OlxcIj98W14iXFxdKSoifCcoPzpcXCc/fFteJ1xcXSkqJ3xcKCg/OlxcXCk/fFteKVxcXSkqXCkvLHkubGluaz1fKHkubGluaykucmVwbGFjZSgibGFiZWwiLHkuX2xhYmVsKS5yZXBsYWNlKCJocmVmIix5Ll9ocmVmKS5yZXBsYWNlKCJ0aXRsZSIseS5fdGl0bGUpLmdldFJlZ2V4KCkseS5yZWZsaW5rPV8oeS5yZWZsaW5rKS5yZXBsYWNlKCJsYWJlbCIseS5fbGFiZWwpLmdldFJlZ2V4KCkseS5yZWZsaW5rU2VhcmNoPV8oeS5yZWZsaW5rU2VhcmNoLCJnIikucmVwbGFjZSgicmVmbGluayIseS5yZWZsaW5rKS5yZXBsYWNlKCJub2xpbmsiLHkubm9saW5rKS5nZXRSZWdleCgpLHkubm9ybWFsPXcoe30seSkseS5wZWRhbnRpYz13KHt9LHkubm9ybWFsLHtzdHJvbmc6e3N0YXJ0Oi9eX198XCpcKi8sbWlkZGxlOi9eX18oPz1cUykoW1xzXFNdKj9cUylfXyg/IV8pfF5cKlwqKD89XFMpKFtcc1xTXSo/XFMpXCpcKig/IVwqKS8sZW5kQXN0Oi9cKlwqKD8hXCopL2csZW5kVW5kOi9fXyg/IV8pL2d9LGVtOntzdGFydDovXl98XCovLG1pZGRsZTovXigpXCooPz1cUykoW1xzXFNdKj9cUylcKig/IVwqKXxeXyg/PVxTKShbXHNcU10qP1xTKV8oPyFfKS8sZW5kQXN0Oi9cKig/IVwqKS9nLGVuZFVuZDovXyg/IV8pL2d9LGxpbms6XygvXiE/XFsobGFiZWwpXF1cKCguKj8pXCkvKS5yZXBsYWNlKCJsYWJlbCIseS5fbGFiZWwpLmdldFJlZ2V4KCkscmVmbGluazpfKC9eIT9cWyhsYWJlbClcXVxzKlxbKFteXF1dKilcXS8pLnJlcGxhY2UoImxhYmVsIix5Ll9sYWJlbCkuZ2V0UmVnZXgoKX0pLHkuZ2ZtPXcoe30seS5ub3JtYWwse2VzY2FwZTpfKHkuZXNjYXBlKS5yZXBsYWNlKCJdKSIsIn58XSkiKS5nZXRSZWdleCgpLF9leHRlbmRlZF9lbWFpbDovW0EtWmEtejAtOS5fKy1dKyhAKVthLXpBLVowLTktX10rKD86XC5bYS16QS1aMC05LV9dKlthLXpBLVowLTldKSsoPyFbLV9dKS8sdXJsOi9eKCg/OmZ0cHxodHRwcz8pOlwvXC98d3d3XC4pKD86W2EtekEtWjAtOVwtXStcLj8pK1teXHM8XSp8XmVtYWlsLyxfYmFja3BlZGFsOi8oPzpbXj8hLiw6OypffigpJl0rfFwoW14pXSpcKXwmKD8hW2EtekEtWjAtOV0rOyQpfFs/IS4sOjsqX34pXSsoPyEkKSkrLyxkZWw6L14ofn4/KSg/PVteXHN+XSkoW1xzXFNdKj9bXlxzfl0pXDEoPz1bXn5dfCQpLyx0ZXh0Oi9eKFtgfl0rfFteYH5dKSg/Oig/PSB7Mix9XG4pfFtcc1xTXSo/KD86KD89W1xcPCFcW2Aqfl9dfFxiX3xodHRwcz86XC9cL3xmdHA6XC9cL3x3d3dcLnwkKXxbXiBdKD89IHsyLH1cbil8W15hLXpBLVowLTkuISMkJSYnKitcLz0/X2B7XHx9fi1dKD89W2EtekEtWjAtOS4hIyQlJicqK1wvPT9fYHtcfH1+LV0rQCkpfCg/PVthLXpBLVowLTkuISMkJSYnKitcLz0/X2B7XHx9fi1dK0ApKS99KSx5LmdmbS51cmw9Xyh5LmdmbS51cmwsImkiKS5yZXBsYWNlKCJlbWFpbCIseS5nZm0uX2V4dGVuZGVkX2VtYWlsKS5nZXRSZWdleCgpLHkuYnJlYWtzPXcoe30seS5nZm0se2JyOl8oeS5icikucmVwbGFjZSgiezIsfSIsIioiKS5nZXRSZWdleCgpLHRleHQ6Xyh5LmdmbS50ZXh0KS5yZXBsYWNlKCJcXGJfIiwiXFxiX3wgezIsfVxcbiIpLnJlcGxhY2UoL1x7MixcfS9nLCIqIikuZ2V0UmVnZXgoKX0pO3ZhciB5PXtibG9jazp4LGlubGluZTp5fSxqPXUuZGVmYXVsdHMsVT15LmJsb2NrLFA9eS5pbmxpbmUsTD0kO2Z1bmN0aW9uIE0oZSl7cmV0dXJuIGUucmVwbGFjZSgvLS0tL2csIuKAlCIpLnJlcGxhY2UoLy0tL2csIuKAkyIpLnJlcGxhY2UoLyhefFstXHUyMDE0LyhcW3siXHNdKScvZywiJDHigJgiKS5yZXBsYWNlKC8nL2csIuKAmSIpLnJlcGxhY2UoLyhefFstXHUyMDE0LyhcW3tcdTIwMThcc10pIi9nLCIkMeKAnCIpLnJlcGxhY2UoLyIvZywi4oCdIikucmVwbGFjZSgvXC57M30vZywi4oCmIil9ZnVuY3Rpb24gTihlKXtmb3IodmFyIHUsdD0iIixuPWUubGVuZ3RoLHI9MDtyPG47cisrKXU9ZS5jaGFyQ29kZUF0KHIpLHQrPSImIyIrKHU9LjU8TWF0aC5yYW5kb20oKT8ieCIrdS50b1N0cmluZygxNik6dSkrIjsiO3JldHVybiB0fXZhciBYPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlKXt0aGlzLnRva2Vucz1bXSx0aGlzLnRva2Vucy5saW5rcz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMub3B0aW9ucz1lfHxqLHRoaXMub3B0aW9ucy50b2tlbml6ZXI9dGhpcy5vcHRpb25zLnRva2VuaXplcnx8bmV3IE8sdGhpcy50b2tlbml6ZXI9dGhpcy5vcHRpb25zLnRva2VuaXplcix0aGlzLnRva2VuaXplci5vcHRpb25zPXRoaXMub3B0aW9ucztlPXtibG9jazpVLm5vcm1hbCxpbmxpbmU6UC5ub3JtYWx9O3RoaXMub3B0aW9ucy5wZWRhbnRpYz8oZS5ibG9jaz1VLnBlZGFudGljLGUuaW5saW5lPVAucGVkYW50aWMpOnRoaXMub3B0aW9ucy5nZm0mJihlLmJsb2NrPVUuZ2ZtLHRoaXMub3B0aW9ucy5icmVha3M/ZS5pbmxpbmU9UC5icmVha3M6ZS5pbmxpbmU9UC5nZm0pLHRoaXMudG9rZW5pemVyLnJ1bGVzPWV9dC5sZXg9ZnVuY3Rpb24oZSx1KXtyZXR1cm4gbmV3IHQodSkubGV4KGUpfSx0LmxleElubGluZT1mdW5jdGlvbihlLHUpe3JldHVybiBuZXcgdCh1KS5pbmxpbmVUb2tlbnMoZSl9O3ZhciBlLHUsbj10LnByb3RvdHlwZTtyZXR1cm4gbi5sZXg9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZS5yZXBsYWNlKC9cclxufFxyL2csIlxuIikucmVwbGFjZSgvXHQvZywiICAgICIpLHRoaXMuYmxvY2tUb2tlbnMoZSx0aGlzLnRva2VucywhMCksdGhpcy5pbmxpbmUodGhpcy50b2tlbnMpLHRoaXMudG9rZW5zfSxuLmJsb2NrVG9rZW5zPWZ1bmN0aW9uKGUsdSx0KXt2YXIgbixyLGkscztmb3Iodm9pZCAwPT09dSYmKHU9W10pLHZvaWQgMD09PXQmJih0PSEwKSx0aGlzLm9wdGlvbnMucGVkYW50aWMmJihlPWUucmVwbGFjZSgvXiArJC9nbSwiIikpO2U7KWlmKG49dGhpcy50b2tlbml6ZXIuc3BhY2UoZSkpZT1lLnN1YnN0cmluZyhuLnJhdy5sZW5ndGgpLG4udHlwZSYmdS5wdXNoKG4pO2Vsc2UgaWYobj10aGlzLnRva2VuaXplci5jb2RlKGUpKWU9ZS5zdWJzdHJpbmcobi5yYXcubGVuZ3RoKSwocz11W3UubGVuZ3RoLTFdKSYmInBhcmFncmFwaCI9PT1zLnR5cGU/KHMucmF3Kz0iXG4iK24ucmF3LHMudGV4dCs9IlxuIituLnRleHQpOnUucHVzaChuKTtlbHNlIGlmKG49dGhpcy50b2tlbml6ZXIuZmVuY2VzKGUpKWU9ZS5zdWJzdHJpbmcobi5yYXcubGVuZ3RoKSx1LnB1c2gobik7ZWxzZSBpZihuPXRoaXMudG9rZW5pemVyLmhlYWRpbmcoZSkpZT1lLnN1YnN0cmluZyhuLnJhdy5sZW5ndGgpLHUucHVzaChuKTtlbHNlIGlmKG49dGhpcy50b2tlbml6ZXIubnB0YWJsZShlKSllPWUuc3Vic3RyaW5nKG4ucmF3Lmxlbmd0aCksdS5wdXNoKG4pO2Vsc2UgaWYobj10aGlzLnRva2VuaXplci5ocihlKSllPWUuc3Vic3RyaW5nKG4ucmF3Lmxlbmd0aCksdS5wdXNoKG4pO2Vsc2UgaWYobj10aGlzLnRva2VuaXplci5ibG9ja3F1b3RlKGUpKWU9ZS5zdWJzdHJpbmcobi5yYXcubGVuZ3RoKSxuLnRva2Vucz10aGlzLmJsb2NrVG9rZW5zKG4udGV4dCxbXSx0KSx1LnB1c2gobik7ZWxzZSBpZihuPXRoaXMudG9rZW5pemVyLmxpc3QoZSkpe2ZvcihlPWUuc3Vic3RyaW5nKG4ucmF3Lmxlbmd0aCksaT1uLml0ZW1zLmxlbmd0aCxyPTA7cjxpO3IrKyluLml0ZW1zW3JdLnRva2Vucz10aGlzLmJsb2NrVG9rZW5zKG4uaXRlbXNbcl0udGV4dCxbXSwhMSk7dS5wdXNoKG4pfWVsc2UgaWYobj10aGlzLnRva2VuaXplci5odG1sKGUpKWU9ZS5zdWJzdHJpbmcobi5yYXcubGVuZ3RoKSx1LnB1c2gobik7ZWxzZSBpZih0JiYobj10aGlzLnRva2VuaXplci5kZWYoZSkpKWU9ZS5zdWJzdHJpbmcobi5yYXcubGVuZ3RoKSx0aGlzLnRva2Vucy5saW5rc1tuLnRhZ118fCh0aGlzLnRva2Vucy5saW5rc1tuLnRhZ109e2hyZWY6bi5ocmVmLHRpdGxlOm4udGl0bGV9KTtlbHNlIGlmKG49dGhpcy50b2tlbml6ZXIudGFibGUoZSkpZT1lLnN1YnN0cmluZyhuLnJhdy5sZW5ndGgpLHUucHVzaChuKTtlbHNlIGlmKG49dGhpcy50b2tlbml6ZXIubGhlYWRpbmcoZSkpZT1lLnN1YnN0cmluZyhuLnJhdy5sZW5ndGgpLHUucHVzaChuKTtlbHNlIGlmKHQmJihuPXRoaXMudG9rZW5pemVyLnBhcmFncmFwaChlKSkpZT1lLnN1YnN0cmluZyhuLnJhdy5sZW5ndGgpLHUucHVzaChuKTtlbHNlIGlmKG49dGhpcy50b2tlbml6ZXIudGV4dChlKSllPWUuc3Vic3RyaW5nKG4ucmF3Lmxlbmd0aCksKHM9dVt1Lmxlbmd0aC0xXSkmJiJ0ZXh0Ij09PXMudHlwZT8ocy5yYXcrPSJcbiIrbi5yYXcscy50ZXh0Kz0iXG4iK24udGV4dCk6dS5wdXNoKG4pO2Vsc2UgaWYoZSl7dmFyIGw9IkluZmluaXRlIGxvb3Agb24gYnl0ZTogIitlLmNoYXJDb2RlQXQoMCk7aWYodGhpcy5vcHRpb25zLnNpbGVudCl7Y29uc29sZS5lcnJvcihsKTticmVha310aHJvdyBuZXcgRXJyb3IobCl9cmV0dXJuIHV9LG4uaW5saW5lPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdSx0LG4scixpLHM9ZS5sZW5ndGgsbD0wO2w8cztsKyspc3dpdGNoKChpPWVbbF0pLnR5cGUpe2Nhc2UicGFyYWdyYXBoIjpjYXNlInRleHQiOmNhc2UiaGVhZGluZyI6aS50b2tlbnM9W10sdGhpcy5pbmxpbmVUb2tlbnMoaS50ZXh0LGkudG9rZW5zKTticmVhaztjYXNlInRhYmxlIjpmb3IoaS50b2tlbnM9e2hlYWRlcjpbXSxjZWxsczpbXX0sbj1pLmhlYWRlci5sZW5ndGgsdT0wO3U8bjt1KyspaS50b2tlbnMuaGVhZGVyW3VdPVtdLHRoaXMuaW5saW5lVG9rZW5zKGkuaGVhZGVyW3VdLGkudG9rZW5zLmhlYWRlclt1XSk7Zm9yKG49aS5jZWxscy5sZW5ndGgsdT0wO3U8bjt1KyspZm9yKHI9aS5jZWxsc1t1XSxpLnRva2Vucy5jZWxsc1t1XT1bXSx0PTA7dDxyLmxlbmd0aDt0KyspaS50b2tlbnMuY2VsbHNbdV1bdF09W10sdGhpcy5pbmxpbmVUb2tlbnMoclt0XSxpLnRva2Vucy5jZWxsc1t1XVt0XSk7YnJlYWs7Y2FzZSJibG9ja3F1b3RlIjp0aGlzLmlubGluZShpLnRva2Vucyk7YnJlYWs7Y2FzZSJsaXN0Ijpmb3Iobj1pLml0ZW1zLmxlbmd0aCx1PTA7dTxuO3UrKyl0aGlzLmlubGluZShpLml0ZW1zW3VdLnRva2Vucyl9cmV0dXJuIGV9LG4uaW5saW5lVG9rZW5zPWZ1bmN0aW9uKGUsdSx0LG4pe3ZhciByO3ZvaWQgMD09PXUmJih1PVtdKSx2b2lkIDA9PT10JiYodD0hMSksdm9pZCAwPT09biYmKG49ITEpO3ZhciBpLHMsbCxhPWU7aWYodGhpcy50b2tlbnMubGlua3Mpe3ZhciBEPU9iamVjdC5rZXlzKHRoaXMudG9rZW5zLmxpbmtzKTtpZigwPEQubGVuZ3RoKWZvcig7bnVsbCE9KGk9dGhpcy50b2tlbml6ZXIucnVsZXMuaW5saW5lLnJlZmxpbmtTZWFyY2guZXhlYyhhKSk7KUQuaW5jbHVkZXMoaVswXS5zbGljZShpWzBdLmxhc3RJbmRleE9mKCJbIikrMSwtMSkpJiYoYT1hLnNsaWNlKDAsaS5pbmRleCkrIlsiK0woImEiLGlbMF0ubGVuZ3RoLTIpKyJdIithLnNsaWNlKHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5yZWZsaW5rU2VhcmNoLmxhc3RJbmRleCkpfWZvcig7bnVsbCE9KGk9dGhpcy50b2tlbml6ZXIucnVsZXMuaW5saW5lLmJsb2NrU2tpcC5leGVjKGEpKTspYT1hLnNsaWNlKDAsaS5pbmRleCkrIlsiK0woImEiLGlbMF0ubGVuZ3RoLTIpKyJdIithLnNsaWNlKHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5ibG9ja1NraXAubGFzdEluZGV4KTtmb3IoO251bGwhPShpPXRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5lc2NhcGVkRW1TdC5leGVjKGEpKTspYT1hLnNsaWNlKDAsaS5pbmRleCkrIisrIithLnNsaWNlKHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5lc2NhcGVkRW1TdC5sYXN0SW5kZXgpO2Zvcig7ZTspaWYoc3x8KGw9IiIpLHM9ITEscj10aGlzLnRva2VuaXplci5lc2NhcGUoZSkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHUucHVzaChyKTtlbHNlIGlmKHI9dGhpcy50b2tlbml6ZXIudGFnKGUsdCxuKSl7ZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHQ9ci5pbkxpbmssbj1yLmluUmF3QmxvY2s7dmFyIG89dVt1Lmxlbmd0aC0xXTtvJiYidGV4dCI9PT1yLnR5cGUmJiJ0ZXh0Ij09PW8udHlwZT8oby5yYXcrPXIucmF3LG8udGV4dCs9ci50ZXh0KTp1LnB1c2gocil9ZWxzZSBpZihyPXRoaXMudG9rZW5pemVyLmxpbmsoZSkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLCJsaW5rIj09PXIudHlwZSYmKHIudG9rZW5zPXRoaXMuaW5saW5lVG9rZW5zKHIudGV4dCxbXSwhMCxuKSksdS5wdXNoKHIpO2Vsc2UgaWYocj10aGlzLnRva2VuaXplci5yZWZsaW5rKGUsdGhpcy50b2tlbnMubGlua3MpKXtlPWUuc3Vic3RyaW5nKHIucmF3Lmxlbmd0aCk7bz11W3UubGVuZ3RoLTFdOyJsaW5rIj09PXIudHlwZT8oci50b2tlbnM9dGhpcy5pbmxpbmVUb2tlbnMoci50ZXh0LFtdLCEwLG4pLHUucHVzaChyKSk6byYmInRleHQiPT09ci50eXBlJiYidGV4dCI9PT1vLnR5cGU/KG8ucmF3Kz1yLnJhdyxvLnRleHQrPXIudGV4dCk6dS5wdXNoKHIpfWVsc2UgaWYocj10aGlzLnRva2VuaXplci5lbVN0cm9uZyhlLGEsbCkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHIudG9rZW5zPXRoaXMuaW5saW5lVG9rZW5zKHIudGV4dCxbXSx0LG4pLHUucHVzaChyKTtlbHNlIGlmKHI9dGhpcy50b2tlbml6ZXIuY29kZXNwYW4oZSkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHUucHVzaChyKTtlbHNlIGlmKHI9dGhpcy50b2tlbml6ZXIuYnIoZSkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHUucHVzaChyKTtlbHNlIGlmKHI9dGhpcy50b2tlbml6ZXIuZGVsKGUpKWU9ZS5zdWJzdHJpbmcoci5yYXcubGVuZ3RoKSxyLnRva2Vucz10aGlzLmlubGluZVRva2VucyhyLnRleHQsW10sdCxuKSx1LnB1c2gocik7ZWxzZSBpZihyPXRoaXMudG9rZW5pemVyLmF1dG9saW5rKGUsTikpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHUucHVzaChyKTtlbHNlIGlmKHR8fCEocj10aGlzLnRva2VuaXplci51cmwoZSxOKSkpe2lmKHI9dGhpcy50b2tlbml6ZXIuaW5saW5lVGV4dChlLG4sTSkpZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLCJfIiE9PXIucmF3LnNsaWNlKC0xKSYmKGw9ci5yYXcuc2xpY2UoLTEpKSxzPSEwLChjPXVbdS5sZW5ndGgtMV0pJiYidGV4dCI9PT1jLnR5cGU/KGMucmF3Kz1yLnJhdyxjLnRleHQrPXIudGV4dCk6dS5wdXNoKHIpO2Vsc2UgaWYoZSl7dmFyIGM9IkluZmluaXRlIGxvb3Agb24gYnl0ZTogIitlLmNoYXJDb2RlQXQoMCk7aWYodGhpcy5vcHRpb25zLnNpbGVudCl7Y29uc29sZS5lcnJvcihjKTticmVha310aHJvdyBuZXcgRXJyb3IoYyl9fWVsc2UgZT1lLnN1YnN0cmluZyhyLnJhdy5sZW5ndGgpLHUucHVzaChyKTtyZXR1cm4gdX0sZT10LHU9W3trZXk6InJ1bGVzIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57YmxvY2s6VSxpbmxpbmU6UH19fV0sKG49bnVsbCkmJnIoZS5wcm90b3R5cGUsbiksdSYmcihlLHUpLHR9KCksRz11LmRlZmF1bHRzLFY9QixIPW0sSj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5vcHRpb25zPWV8fEd9dmFyIHU9ZS5wcm90b3R5cGU7cmV0dXJuIHUuY29kZT1mdW5jdGlvbihlLHUsdCl7dmFyIG49KHV8fCIiKS5tYXRjaCgvXFMqLylbMF07cmV0dXJuIXRoaXMub3B0aW9ucy5oaWdobGlnaHR8fG51bGwhPSh1PXRoaXMub3B0aW9ucy5oaWdobGlnaHQoZSxuKSkmJnUhPT1lJiYodD0hMCxlPXUpLGU9ZS5yZXBsYWNlKC9cbiQvLCIiKSsiXG4iLG4/JzxwcmU+PGNvZGUgY2xhc3M9IicrdGhpcy5vcHRpb25zLmxhbmdQcmVmaXgrSChuLCEwKSsnIj4nKyh0P2U6SChlLCEwKSkrIjwvY29kZT48L3ByZT5cbiI6IjxwcmU+PGNvZGU+IisodD9lOkgoZSwhMCkpKyI8L2NvZGU+PC9wcmU+XG4ifSx1LmJsb2NrcXVvdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIjxibG9ja3F1b3RlPlxuIitlKyI8L2Jsb2NrcXVvdGU+XG4ifSx1Lmh0bWw9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHUuaGVhZGluZz1mdW5jdGlvbihlLHUsdCxuKXtyZXR1cm4gdGhpcy5vcHRpb25zLmhlYWRlcklkcz8iPGgiK3UrJyBpZD0iJyt0aGlzLm9wdGlvbnMuaGVhZGVyUHJlZml4K24uc2x1Zyh0KSsnIj4nK2UrIjwvaCIrdSsiPlxuIjoiPGgiK3UrIj4iK2UrIjwvaCIrdSsiPlxuIn0sdS5ocj1mdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMueGh0bWw/Ijxoci8+XG4iOiI8aHI+XG4ifSx1Lmxpc3Q9ZnVuY3Rpb24oZSx1LHQpe3ZhciBuPXU/Im9sIjoidWwiO3JldHVybiI8IituKyh1JiYxIT09dD8nIHN0YXJ0PSInK3QrJyInOiIiKSsiPlxuIitlKyI8LyIrbisiPlxuIn0sdS5saXN0aXRlbT1mdW5jdGlvbihlKXtyZXR1cm4iPGxpPiIrZSsiPC9saT5cbiJ9LHUuY2hlY2tib3g9ZnVuY3Rpb24oZSl7cmV0dXJuIjxpbnB1dCAiKyhlPydjaGVja2VkPSIiICc6IiIpKydkaXNhYmxlZD0iIiB0eXBlPSJjaGVja2JveCInKyh0aGlzLm9wdGlvbnMueGh0bWw/IiAvIjoiIikrIj4gIn0sdS5wYXJhZ3JhcGg9ZnVuY3Rpb24oZSl7cmV0dXJuIjxwPiIrZSsiPC9wPlxuIn0sdS50YWJsZT1mdW5jdGlvbihlLHUpe3JldHVybiI8dGFibGU+XG48dGhlYWQ+XG4iK2UrIjwvdGhlYWQ+XG4iKyh1PXUmJiI8dGJvZHk+Iit1KyI8L3Rib2R5PiIpKyI8L3RhYmxlPlxuIn0sdS50YWJsZXJvdz1mdW5jdGlvbihlKXtyZXR1cm4iPHRyPlxuIitlKyI8L3RyPlxuIn0sdS50YWJsZWNlbGw9ZnVuY3Rpb24oZSx1KXt2YXIgdD11LmhlYWRlcj8idGgiOiJ0ZCI7cmV0dXJuKHUuYWxpZ24/IjwiK3QrJyBhbGlnbj0iJyt1LmFsaWduKyciPic6IjwiK3QrIj4iKStlKyI8LyIrdCsiPlxuIn0sdS5zdHJvbmc9ZnVuY3Rpb24oZSl7cmV0dXJuIjxzdHJvbmc+IitlKyI8L3N0cm9uZz4ifSx1LmVtPWZ1bmN0aW9uKGUpe3JldHVybiI8ZW0+IitlKyI8L2VtPiJ9LHUuY29kZXNwYW49ZnVuY3Rpb24oZSl7cmV0dXJuIjxjb2RlPiIrZSsiPC9jb2RlPiJ9LHUuYnI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sPyI8YnIvPiI6Ijxicj4ifSx1LmRlbD1mdW5jdGlvbihlKXtyZXR1cm4iPGRlbD4iK2UrIjwvZGVsPiJ9LHUubGluaz1mdW5jdGlvbihlLHUsdCl7aWYobnVsbD09PShlPVYodGhpcy5vcHRpb25zLnNhbml0aXplLHRoaXMub3B0aW9ucy5iYXNlVXJsLGUpKSlyZXR1cm4gdDtlPSc8YSBocmVmPSInK0goZSkrJyInO3JldHVybiB1JiYoZSs9JyB0aXRsZT0iJyt1KyciJyksZSs9Ij4iK3QrIjwvYT4ifSx1LmltYWdlPWZ1bmN0aW9uKGUsdSx0KXtpZihudWxsPT09KGU9Vih0aGlzLm9wdGlvbnMuc2FuaXRpemUsdGhpcy5vcHRpb25zLmJhc2VVcmwsZSkpKXJldHVybiB0O3Q9JzxpbWcgc3JjPSInK2UrJyIgYWx0PSInK3QrJyInO3JldHVybiB1JiYodCs9JyB0aXRsZT0iJyt1KyciJyksdCs9dGhpcy5vcHRpb25zLnhodG1sPyIvPiI6Ij4ifSx1LnRleHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGV9KCksSz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9dmFyIHU9ZS5wcm90b3R5cGU7cmV0dXJuIHUuc3Ryb25nPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx1LmVtPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx1LmNvZGVzcGFuPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx1LmRlbD1mdW5jdGlvbihlKXtyZXR1cm4gZX0sdS5odG1sPWZ1bmN0aW9uKGUpe3JldHVybiBlfSx1LnRleHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHUubGluaz1mdW5jdGlvbihlLHUsdCl7cmV0dXJuIiIrdH0sdS5pbWFnZT1mdW5jdGlvbihlLHUsdCl7cmV0dXJuIiIrdH0sdS5icj1mdW5jdGlvbigpe3JldHVybiIifSxlfSgpLFE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dGhpcy5zZWVuPXt9fXZhciB1PWUucHJvdG90eXBlO3JldHVybiB1LnNlcmlhbGl6ZT1mdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC88WyFcL2Etel0uKj8+L2dpLCIiKS5yZXBsYWNlKC9bXHUyMDAwLVx1MjA2Rlx1MkUwMC1cdTJFN0ZcXCchIiMkJSYoKSorLC4vOjs8PT4/QFtcXV5ge3x9fl0vZywiIikucmVwbGFjZSgvXHMvZywiLSIpfSx1LmdldE5leHRTYWZlU2x1Zz1mdW5jdGlvbihlLHUpe3ZhciB0PWUsbj0wO2lmKHRoaXMuc2Vlbi5oYXNPd25Qcm9wZXJ0eSh0KSlmb3Iobj10aGlzLnNlZW5bZV07dD1lKyItIisgKytuLHRoaXMuc2Vlbi5oYXNPd25Qcm9wZXJ0eSh0KTspO3JldHVybiB1fHwodGhpcy5zZWVuW2VdPW4sdGhpcy5zZWVuW3RdPTApLHR9LHUuc2x1Zz1mdW5jdGlvbihlLHUpe3ZvaWQgMD09PXUmJih1PXt9KTt2YXIgdD10aGlzLnNlcmlhbGl6ZShlKTtyZXR1cm4gdGhpcy5nZXROZXh0U2FmZVNsdWcodCx1LmRyeXJ1bil9LGV9KCksVz11LmRlZmF1bHRzLFk9YixlZT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoZSl7dGhpcy5vcHRpb25zPWV8fFcsdGhpcy5vcHRpb25zLnJlbmRlcmVyPXRoaXMub3B0aW9ucy5yZW5kZXJlcnx8bmV3IEosdGhpcy5yZW5kZXJlcj10aGlzLm9wdGlvbnMucmVuZGVyZXIsdGhpcy5yZW5kZXJlci5vcHRpb25zPXRoaXMub3B0aW9ucyx0aGlzLnRleHRSZW5kZXJlcj1uZXcgSyx0aGlzLnNsdWdnZXI9bmV3IFF9dC5wYXJzZT1mdW5jdGlvbihlLHUpe3JldHVybiBuZXcgdCh1KS5wYXJzZShlKX0sdC5wYXJzZUlubGluZT1mdW5jdGlvbihlLHUpe3JldHVybiBuZXcgdCh1KS5wYXJzZUlubGluZShlKX07dmFyIGU9dC5wcm90b3R5cGU7cmV0dXJuIGUucGFyc2U9ZnVuY3Rpb24oZSx1KXt2b2lkIDA9PT11JiYodT0hMCk7Zm9yKHZhciB0LG4scixpLHMsbCxhLEQsbyxjLGgscCxnLGYsRixBPSIiLEM9ZS5sZW5ndGgsZD0wO2Q8QztkKyspc3dpdGNoKChEPWVbZF0pLnR5cGUpe2Nhc2Uic3BhY2UiOmNvbnRpbnVlO2Nhc2UiaHIiOkErPXRoaXMucmVuZGVyZXIuaHIoKTtjb250aW51ZTtjYXNlImhlYWRpbmciOkErPXRoaXMucmVuZGVyZXIuaGVhZGluZyh0aGlzLnBhcnNlSW5saW5lKEQudG9rZW5zKSxELmRlcHRoLFkodGhpcy5wYXJzZUlubGluZShELnRva2Vucyx0aGlzLnRleHRSZW5kZXJlcikpLHRoaXMuc2x1Z2dlcik7Y29udGludWU7Y2FzZSJjb2RlIjpBKz10aGlzLnJlbmRlcmVyLmNvZGUoRC50ZXh0LEQubGFuZyxELmVzY2FwZWQpO2NvbnRpbnVlO2Nhc2UidGFibGUiOmZvcihsPW89IiIscj1ELmhlYWRlci5sZW5ndGgsdD0wO3Q8cjt0KyspbCs9dGhpcy5yZW5kZXJlci50YWJsZWNlbGwodGhpcy5wYXJzZUlubGluZShELnRva2Vucy5oZWFkZXJbdF0pLHtoZWFkZXI6ITAsYWxpZ246RC5hbGlnblt0XX0pO2ZvcihvKz10aGlzLnJlbmRlcmVyLnRhYmxlcm93KGwpLGE9IiIscj1ELmNlbGxzLmxlbmd0aCx0PTA7dDxyO3QrKyl7Zm9yKGw9IiIsaT0ocz1ELnRva2Vucy5jZWxsc1t0XSkubGVuZ3RoLG49MDtuPGk7bisrKWwrPXRoaXMucmVuZGVyZXIudGFibGVjZWxsKHRoaXMucGFyc2VJbmxpbmUoc1tuXSkse2hlYWRlcjohMSxhbGlnbjpELmFsaWduW25dfSk7YSs9dGhpcy5yZW5kZXJlci50YWJsZXJvdyhsKX1BKz10aGlzLnJlbmRlcmVyLnRhYmxlKG8sYSk7Y29udGludWU7Y2FzZSJibG9ja3F1b3RlIjphPXRoaXMucGFyc2UoRC50b2tlbnMpLEErPXRoaXMucmVuZGVyZXIuYmxvY2txdW90ZShhKTtjb250aW51ZTtjYXNlImxpc3QiOmZvcihvPUQub3JkZXJlZCxFPUQuc3RhcnQsYz1ELmxvb3NlLHI9RC5pdGVtcy5sZW5ndGgsYT0iIix0PTA7dDxyO3QrKylnPShwPUQuaXRlbXNbdF0pLmNoZWNrZWQsZj1wLnRhc2ssaD0iIixwLnRhc2smJihGPXRoaXMucmVuZGVyZXIuY2hlY2tib3goZyksYz8wPHAudG9rZW5zLmxlbmd0aCYmInRleHQiPT09cC50b2tlbnNbMF0udHlwZT8ocC50b2tlbnNbMF0udGV4dD1GKyIgIitwLnRva2Vuc1swXS50ZXh0LHAudG9rZW5zWzBdLnRva2VucyYmMDxwLnRva2Vuc1swXS50b2tlbnMubGVuZ3RoJiYidGV4dCI9PT1wLnRva2Vuc1swXS50b2tlbnNbMF0udHlwZSYmKHAudG9rZW5zWzBdLnRva2Vuc1swXS50ZXh0PUYrIiAiK3AudG9rZW5zWzBdLnRva2Vuc1swXS50ZXh0KSk6cC50b2tlbnMudW5zaGlmdCh7dHlwZToidGV4dCIsdGV4dDpGfSk6aCs9RiksaCs9dGhpcy5wYXJzZShwLnRva2VucyxjKSxhKz10aGlzLnJlbmRlcmVyLmxpc3RpdGVtKGgsZixnKTtBKz10aGlzLnJlbmRlcmVyLmxpc3QoYSxvLEUpO2NvbnRpbnVlO2Nhc2UiaHRtbCI6QSs9dGhpcy5yZW5kZXJlci5odG1sKEQudGV4dCk7Y29udGludWU7Y2FzZSJwYXJhZ3JhcGgiOkErPXRoaXMucmVuZGVyZXIucGFyYWdyYXBoKHRoaXMucGFyc2VJbmxpbmUoRC50b2tlbnMpKTtjb250aW51ZTtjYXNlInRleHQiOmZvcihhPUQudG9rZW5zP3RoaXMucGFyc2VJbmxpbmUoRC50b2tlbnMpOkQudGV4dDtkKzE8QyYmInRleHQiPT09ZVtkKzFdLnR5cGU7KWErPSJcbiIrKChEPWVbKytkXSkudG9rZW5zP3RoaXMucGFyc2VJbmxpbmUoRC50b2tlbnMpOkQudGV4dCk7QSs9dT90aGlzLnJlbmRlcmVyLnBhcmFncmFwaChhKTphO2NvbnRpbnVlO2RlZmF1bHQ6dmFyIEU9J1Rva2VuIHdpdGggIicrRC50eXBlKyciIHR5cGUgd2FzIG5vdCBmb3VuZC4nO2lmKHRoaXMub3B0aW9ucy5zaWxlbnQpcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihFKTt0aHJvdyBuZXcgRXJyb3IoRSl9cmV0dXJuIEF9LGUucGFyc2VJbmxpbmU9ZnVuY3Rpb24oZSx1KXt1PXV8fHRoaXMucmVuZGVyZXI7Zm9yKHZhciB0LG49IiIscj1lLmxlbmd0aCxpPTA7aTxyO2krKylzd2l0Y2goKHQ9ZVtpXSkudHlwZSl7Y2FzZSJlc2NhcGUiOm4rPXUudGV4dCh0LnRleHQpO2JyZWFrO2Nhc2UiaHRtbCI6bis9dS5odG1sKHQudGV4dCk7YnJlYWs7Y2FzZSJsaW5rIjpuKz11LmxpbmsodC5ocmVmLHQudGl0bGUsdGhpcy5wYXJzZUlubGluZSh0LnRva2Vucyx1KSk7YnJlYWs7Y2FzZSJpbWFnZSI6bis9dS5pbWFnZSh0LmhyZWYsdC50aXRsZSx0LnRleHQpO2JyZWFrO2Nhc2Uic3Ryb25nIjpuKz11LnN0cm9uZyh0aGlzLnBhcnNlSW5saW5lKHQudG9rZW5zLHUpKTticmVhaztjYXNlImVtIjpuKz11LmVtKHRoaXMucGFyc2VJbmxpbmUodC50b2tlbnMsdSkpO2JyZWFrO2Nhc2UiY29kZXNwYW4iOm4rPXUuY29kZXNwYW4odC50ZXh0KTticmVhaztjYXNlImJyIjpuKz11LmJyKCk7YnJlYWs7Y2FzZSJkZWwiOm4rPXUuZGVsKHRoaXMucGFyc2VJbmxpbmUodC50b2tlbnMsdSkpO2JyZWFrO2Nhc2UidGV4dCI6bis9dS50ZXh0KHQudGV4dCk7YnJlYWs7ZGVmYXVsdDp2YXIgcz0nVG9rZW4gd2l0aCAiJyt0LnR5cGUrJyIgdHlwZSB3YXMgbm90IGZvdW5kLic7aWYodGhpcy5vcHRpb25zLnNpbGVudClyZXR1cm4gdm9pZCBjb25zb2xlLmVycm9yKHMpO3Rocm93IG5ldyBFcnJvcihzKX1yZXR1cm4gbn0sdH0oKSx1ZT12LHRlPXosbmU9bSxtPXUuZ2V0RGVmYXVsdHMscmU9dS5jaGFuZ2VEZWZhdWx0cyx1PXUuZGVmYXVsdHM7ZnVuY3Rpb24gaWUoZSx0LG4pe2lmKG51bGw9PWUpdGhyb3cgbmV3IEVycm9yKCJtYXJrZWQoKTogaW5wdXQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBudWxsIik7aWYoInN0cmluZyIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcigibWFya2VkKCk6IGlucHV0IHBhcmFtZXRlciBpcyBvZiB0eXBlICIrT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKyIsIHN0cmluZyBleHBlY3RlZCIpO2lmKCJmdW5jdGlvbiI9PXR5cGVvZiB0JiYobj10LHQ9bnVsbCksdD11ZSh7fSxpZS5kZWZhdWx0cyx0fHx7fSksdGUodCksbil7dmFyIHIsaT10LmhpZ2hsaWdodDt0cnl7cj1YLmxleChlLHQpfWNhdGNoKGUpe3JldHVybiBuKGUpfXZhciBzPWZ1bmN0aW9uKHUpe3ZhciBlO2lmKCF1KXRyeXtlPWVlLnBhcnNlKHIsdCl9Y2F0Y2goZSl7dT1lfXJldHVybiB0LmhpZ2hsaWdodD1pLHU/bih1KTpuKG51bGwsZSl9O2lmKCFpfHxpLmxlbmd0aDwzKXJldHVybiBzKCk7aWYoZGVsZXRlIHQuaGlnaGxpZ2h0LCFyLmxlbmd0aClyZXR1cm4gcygpO3ZhciBsPTA7cmV0dXJuIGllLndhbGtUb2tlbnMocixmdW5jdGlvbih0KXsiY29kZSI9PT10LnR5cGUmJihsKyssc2V0VGltZW91dChmdW5jdGlvbigpe2kodC50ZXh0LHQubGFuZyxmdW5jdGlvbihlLHUpe3JldHVybiBlP3MoZSk6KG51bGwhPXUmJnUhPT10LnRleHQmJih0LnRleHQ9dSx0LmVzY2FwZWQ9ITApLHZvaWQoMD09PS0tbCYmcygpKSl9KX0sMCkpfSksdm9pZCgwPT09bCYmcygpKX10cnl7dmFyIHU9WC5sZXgoZSx0KTtyZXR1cm4gdC53YWxrVG9rZW5zJiZpZS53YWxrVG9rZW5zKHUsdC53YWxrVG9rZW5zKSxlZS5wYXJzZSh1LHQpfWNhdGNoKGUpe2lmKGUubWVzc2FnZSs9IlxuUGxlYXNlIHJlcG9ydCB0aGlzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZWRqcy9tYXJrZWQuIix0LnNpbGVudClyZXR1cm4iPHA+QW4gZXJyb3Igb2NjdXJyZWQ6PC9wPjxwcmU+IituZShlLm1lc3NhZ2UrIiIsITApKyI8L3ByZT4iO3Rocm93IGV9fXJldHVybiBpZS5vcHRpb25zPWllLnNldE9wdGlvbnM9ZnVuY3Rpb24oZSl7cmV0dXJuIHVlKGllLmRlZmF1bHRzLGUpLHJlKGllLmRlZmF1bHRzKSxpZX0saWUuZ2V0RGVmYXVsdHM9bSxpZS5kZWZhdWx0cz11LGllLnVzZT1mdW5jdGlvbihsKXt2YXIgdSx0PXVlKHt9LGwpO2wucmVuZGVyZXImJmZ1bmN0aW9uKCl7dmFyIGUscz1pZS5kZWZhdWx0cy5yZW5kZXJlcnx8bmV3IEo7Zm9yKGUgaW4gbC5yZW5kZXJlcikhZnVuY3Rpb24ocil7dmFyIGk9c1tyXTtzW3JdPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdT1uZXcgQXJyYXkoZSksdD0wO3Q8ZTt0KyspdVt0XT1hcmd1bWVudHNbdF07dmFyIG49bC5yZW5kZXJlcltyXS5hcHBseShzLHUpO3JldHVybiBuPSExPT09bj9pLmFwcGx5KHMsdSk6bn19KGUpO3QucmVuZGVyZXI9c30oKSxsLnRva2VuaXplciYmZnVuY3Rpb24oKXt2YXIgZSxzPWllLmRlZmF1bHRzLnRva2VuaXplcnx8bmV3IE87Zm9yKGUgaW4gbC50b2tlbml6ZXIpIWZ1bmN0aW9uKHIpe3ZhciBpPXNbcl07c1tyXT1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHU9bmV3IEFycmF5KGUpLHQ9MDt0PGU7dCsrKXVbdF09YXJndW1lbnRzW3RdO3ZhciBuPWwudG9rZW5pemVyW3JdLmFwcGx5KHMsdSk7cmV0dXJuIG49ITE9PT1uP2kuYXBwbHkocyx1KTpufX0oZSk7dC50b2tlbml6ZXI9c30oKSxsLndhbGtUb2tlbnMmJih1PWllLmRlZmF1bHRzLndhbGtUb2tlbnMsdC53YWxrVG9rZW5zPWZ1bmN0aW9uKGUpe2wud2Fsa1Rva2VucyhlKSx1JiZ1KGUpfSksaWUuc2V0T3B0aW9ucyh0KX0saWUud2Fsa1Rva2Vucz1mdW5jdGlvbihlLHUpe2Zvcih2YXIgdCxuPWMoZSk7ISh0PW4oKSkuZG9uZTspe3ZhciByPXQudmFsdWU7c3dpdGNoKHUociksci50eXBlKXtjYXNlInRhYmxlIjpmb3IodmFyIGk9YyhyLnRva2Vucy5oZWFkZXIpOyEocz1pKCkpLmRvbmU7KXt2YXIgcz1zLnZhbHVlO2llLndhbGtUb2tlbnMocyx1KX1mb3IodmFyIGwsYT1jKHIudG9rZW5zLmNlbGxzKTshKGw9YSgpKS5kb25lOylmb3IodmFyIEQ9YyhsLnZhbHVlKTshKG89RCgpKS5kb25lOyl7dmFyIG89by52YWx1ZTtpZS53YWxrVG9rZW5zKG8sdSl9YnJlYWs7Y2FzZSJsaXN0IjppZS53YWxrVG9rZW5zKHIuaXRlbXMsdSk7YnJlYWs7ZGVmYXVsdDpyLnRva2VucyYmaWUud2Fsa1Rva2VucyhyLnRva2Vucyx1KX19fSxpZS5wYXJzZUlubGluZT1mdW5jdGlvbihlLHUpe2lmKG51bGw9PWUpdGhyb3cgbmV3IEVycm9yKCJtYXJrZWQucGFyc2VJbmxpbmUoKTogaW5wdXQgcGFyYW1ldGVyIGlzIHVuZGVmaW5lZCBvciBudWxsIik7aWYoInN0cmluZyIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcigibWFya2VkLnBhcnNlSW5saW5lKCk6IGlucHV0IHBhcmFtZXRlciBpcyBvZiB0eXBlICIrT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKyIsIHN0cmluZyBleHBlY3RlZCIpO3U9dWUoe30saWUuZGVmYXVsdHMsdXx8e30pLHRlKHUpO3RyeXt2YXIgdD1YLmxleElubGluZShlLHUpO3JldHVybiB1LndhbGtUb2tlbnMmJmllLndhbGtUb2tlbnModCx1LndhbGtUb2tlbnMpLGVlLnBhcnNlSW5saW5lKHQsdSl9Y2F0Y2goZSl7aWYoZS5tZXNzYWdlKz0iXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL21hcmtlZGpzL21hcmtlZC4iLHUuc2lsZW50KXJldHVybiI8cD5BbiBlcnJvciBvY2N1cnJlZDo8L3A+PHByZT4iK25lKGUubWVzc2FnZSsiIiwhMCkrIjwvcHJlPiI7dGhyb3cgZX19LGllLlBhcnNlcj1lZSxpZS5wYXJzZXI9ZWUucGFyc2UsaWUuUmVuZGVyZXI9SixpZS5UZXh0UmVuZGVyZXI9SyxpZS5MZXhlcj1YLGllLmxleGVyPVgubGV4LGllLlRva2VuaXplcj1PLGllLlNsdWdnZXI9USxpZS5wYXJzZT1pZX0pOw==
`; // eslint-disable-line

const ENCODING_LEN = ENCODING.length;
const TIME_LEN = 10;
const RANDOM_LEN = 16;

// embedded libraries only change on deploy; content can linger as long as delete propagation (~3min)
const CACHE_STATIC = {
  "Cache-Control": "public, max-age=86400"
};
const CACHE_CONTENT = {
  "Cache-Control": "public, max-age=300"
};

addEventListener("fetch", (fetch_event) => {
  // configure primary entrypoint
  fetch_event.respondWith(HANDLER(fetch_event));
});

// main entrypoint for all requests
async function HANDLER(fetch_event) {
  const now = Date.now();
  const request = fetch_event.request;
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

  // first bytes of the request body, captured wherever the body is actually read -
  // used by /headers and the error handler without buffering every upload twice
  let requestBodyForDebug = null;

  // wrap main handler in a try/catch exception logging & reporting block, for easy debug
  try {
    url.protocol = "https:";

    if (url.pathname === "/post" || url.pathname === "/") {
      if (request.method === "POST") {
        // deletion is a POST so link-preview crawlers fetching a delete URL can't destroy content
        if (url.searchParams.has("key") && url.searchParams.has("del")) {
          return await deletePost(url);
        }
        // Accept any reasonable content for uploads
        const blob = await request.arrayBuffer();
        requestBodyForDebug = blob.slice(0, 20);

        // advertised limit is 10MB (plus slack for the encryption container overhead)
        if (blob.byteLength > 10 * 1024 * 1024 + 4096) {
          return buildResponse(
            "Sorry, content exceeds the 10MB limit!",
            DEFAULT_MIME_TEXT, {},
            413,
            url,
          );
        }

        // Generate keys
        const storeKey = ulid(now);
        const editKey = ulid(now);
        const deleteKey = ulid(now);

        // Handle TTL. Passing the operator secret (PERMANENT_KEY binding) as X-TTL
        // stores with no expiry - this gates permalinks to the operator so the
        // public can't fill KV with content that never ages out.
        const xTtlRaw = requestHeadersAndFriends["x-ttl"];
        let xTtlSeconds = 365 * 24 * 60 * 60; // 1 year
        let permanent = false;
        if (typeof PERMANENT_KEY !== "undefined" && PERMANENT_KEY && xTtlRaw === PERMANENT_KEY) {
          permanent = true;
        } else if (xTtlRaw !== undefined) {
          xTtlSeconds = parseInt(xTtlRaw, 10);
          // Validate parsed value - must be a positive number
          if (isNaN(xTtlSeconds) || xTtlSeconds <= 0) {
            xTtlSeconds = 365 * 24 * 60 * 60; // default to 1 year
          } else if (xTtlSeconds < 60) {
            xTtlSeconds = 60; // KV rejects expirationTtl below 60 seconds
          }
        }

        const expiryTime = permanent ?
          "never" :
          new Date(xTtlSeconds * 1000 + now).toISOString();

        // Store the content - omit expirationTtl entirely for permanent posts
        const putOptions = {
          metadata: {
            edit: editKey,
            del: deleteKey
          }
        };
        if (permanent) {
          putOptions.metadata.permanent = true;
        } else {
          putOptions.expirationTtl = xTtlSeconds;
          putOptions.metadata.expiry = expiryTime;
        }
        await NAMESPACE.put(storeKey, blob, putOptions);

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

        // Check for CLI tools as fallback when Accept header is generic
        const isCLITool = isCliRequest(requestHeadersAndFriends);

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
      } else if (request.method === "GET" || request.method === "HEAD") {
        // the runtime strips the body from HEAD responses, so HEAD can share the GET path
        const key = url.searchParams.get("key");
        const raw = url.searchParams.has("raw");
        const customContentType = url.searchParams.get("content_type");
        const customTitle = url.searchParams.get("title");

        // if no key parameter provided, return the upload prompt so user can upload
        if (!url.searchParams.has("key")) {
          const upload = `<html><head>
<title>GetPost</title>
<meta name="title" content="GetPost: encrypted file sharing">
<meta name="description" content="End-to-end encrypted file sharing. No accounts, no tracking, globally distributed.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url.toString()}">
<meta property="twitter:title" content="GetPost: encrypted file sharing">
<meta property="twitter:description" content="End-to-end encrypted file sharing. No accounts, no tracking.">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: #0d0d0d;
    color: #b0b0b0;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    font-size: 14px;
}

.top-bar {
    display: flex;
    justify-content: space-between;
    color: #555;
    font-size: 12px;
    margin-bottom: 2rem;
}

.top-bar a { color: #555; text-decoration: none; }
.top-bar a:hover { color: #888; }

.prompt {
    color: #666;
    margin-bottom: 1rem;
}

.prompt .cursor {
    display: inline-block;
    width: 8px;
    height: 14px;
    background: #b0b0b0;
    vertical-align: text-bottom;
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}

.drop-zone {
    flex: 1;
    border: 1px solid #2a2a2a;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color 0.2s;
    margin-bottom: 1rem;
}

.drop-zone:hover,
.drop-zone.dragover {
    border-color: #48bb78;
}

.drop-zone p {
    color: #555;
    font-size: 13px;
}

.drop-zone p a {
    color: #48bb78;
    text-decoration: none;
}

.drop-zone p a:hover { text-decoration: underline; }

.drop-zone.text-mode {
    cursor: text;
    align-items: stretch;
    justify-content: flex-start;
}

#textInput {
    display: none;
    flex: 1;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    resize: none;
    color: #b0b0b0;
    font-family: inherit;
    font-size: 13px;
    padding: 1rem;
}

#textInput.active { display: block; }

.file-meta {
    display: none;
    text-align: left;
    font-size: 13px;
    width: 100%;
    max-width: 400px;
}

.file-meta .line {
    color: #666;
    margin: 0.2rem 0;
}

.file-meta .val {
    color: #48bb78;
}

.status-line {
    margin-top: 0.4rem;
    color: #888;
}

.status-line .spinner {
    display: inline-block;
    animation: spin 0.6s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.status-line.ok { color: #48bb78; }
.status-line.ok a { color: #48bb78; }
.status-line.err { color: #e53e3e; }

.password-section {
    display: none;
    margin-bottom: 1rem;
}

.password-section.active {
    display: block;
}

.password-label {
    color: #666;
    margin-bottom: 0.4rem;
    font-size: 12px;
}

.password-row {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.password-row input[type="text"] {
    flex: 1;
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 2px;
    color: #48bb78;
    font-family: inherit;
    font-size: 13px;
    padding: 0.5rem 0.6rem;
    outline: none;
}

.password-row input[type="text"]:focus {
    border-color: #48bb78;
}

.dice-btn {
    background: none;
    border: 1px solid #333;
    border-radius: 2px;
    color: #666;
    font-size: 14px;
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    font-family: inherit;
    transition: border-color 0.2s, color 0.2s;
}

.dice-btn:hover {
    border-color: #48bb78;
    color: #48bb78;
}

.upload-btn {
    display: none;
    background: none;
    border: 1px solid #48bb78;
    border-radius: 2px;
    color: #48bb78;
    font-family: inherit;
    font-size: 13px;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    transition: background 0.2s;
}

.upload-btn:hover {
    background: rgba(72, 187, 120, 0.1);
}

.upload-btn.active {
    display: inline-block;
}

.ttl-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    font-size: 12px;
    color: #666;
}

.ttl-row select {
    background: #1a1a1a;
    border: 1px solid #333;
    border-radius: 2px;
    color: #888;
    font-family: inherit;
    font-size: 12px;
    padding: 0.3rem 0.4rem;
    outline: none;
    cursor: pointer;
}

.ttl-row select:focus {
    border-color: #48bb78;
}

.qr-section {
    display: none;
    margin-bottom: 1rem;
    text-align: center;
}

.qr-section.active {
    display: block;
}

.qr-section #qrcode {
    display: inline-block;
    padding: 12px;
    background: white;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.share-url {
    display: block;
    font-size: 12px;
    color: #48bb78;
    word-break: break-all;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #222;
    border-radius: 2px;
    margin-top: 0.5rem;
    transition: border-color 0.2s;
}

.share-url:hover {
    border-color: #48bb78;
}

.copy-hint {
    font-size: 11px;
    color: #444;
    margin-top: 0.3rem;
}

.delete-url {
    font-size: 11px;
    color: #555;
    word-break: break-all;
    margin-top: 0.6rem;
}

.delete-url a { color: #777; text-decoration: none; }
.delete-url a:hover { color: #e53e3e; }

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333;
    font-size: 12px;
}

.bottom a { color: #333; text-decoration: none; }
.bottom a:hover { color: #555; }

input[type="file"] { display: none; }
</style>
</head>
<body>

<div class="top-bar">
    <span>getpost</span>
    <a href="/about">[?]</a>
</div>

<div class="prompt">$ upload <span class="cursor"></span></div>

<div class="drop-zone" id="dropZone" onclick="dropZoneClick()">
    <p id="dropHint">drop file here, click to select, or <a href="#" id="pasteToggle">paste text</a></p>
    <div class="file-meta" id="fileMeta">
        <div class="line">name: <span class="val" id="metaName"></span></div>
        <div class="line">type: <span class="val" id="metaType"></span></div>
        <div class="line">size: <span class="val" id="metaSize"></span></div>
    </div>
    <textarea id="textInput" placeholder="type or paste text here" spellcheck="false"></textarea>
    <div class="line status-line" id="statusLine"></div>
</div>

<div class="password-section" id="passwordSection">
    <div class="password-label">passphrase (auto-generated, click to edit):</div>
    <div class="password-row">
        <input type="text" id="passphrase" readonly onfocus="this.select(); this.removeAttribute('readonly');" onblur="this.setAttribute('readonly', true);">
        <button class="dice-btn" onclick="regeneratePassphrase()" title="regenerate">[dice]</button>
        <button class="upload-btn active" id="uploadBtn" onclick="doUpload()">upload</button>
    </div>
    <div class="ttl-row">
        <label for="ttlSelect">expires:</label>
        <select id="ttlSelect">
            <option value="3600">1 hour</option>
            <option value="86400">1 day</option>
            <option value="604800">1 week</option>
            <option value="2592000">30 days</option>
            <option value="31536000" selected>1 year</option>
        </select>
    </div>
</div>

<div class="qr-section" id="qrSection">
    <div id="qrcode"></div>
    <div class="share-url" id="shareUrl" onclick="copyShareUrl()"></div>
    <div class="copy-hint" id="copyHint">click to copy</div>
    <div class="delete-url" id="deleteUrl"></div>
</div>

<div class="bottom">
    <span>e2e encrypted (web uploads)</span>
    <span>curl --data-binary @file ${url.toString()} &mdash; stored unencrypted</span>
</div>

<input type="file" id="fileInput">

<script src="/naclfast.min.js"></script>
<script src="/argon2bundled.min.js"></script>
<script src="/qrcode.min.js"></script>
<script>
const adjectives = {"visual":["opalescent","prismatic","mottled","dappled","kaleidoscopic","vivid","pastel","neon","matte","glossy","diaphanous","translucent","iridescent","scintillating","lurid","sepia-toned"],"textural":["granular","silken","gossamer","corrugated","velutinous","spongy","brittle","ductile","resilient","supple","coarse","feathery","ribbed","fluted","knurled","burnished"],"emotional":["melancholic","euphoric","wistful","luminous","desolate","ecstatic","morose","jubilant","forlorn","exhilarated","pensive","crestfallen","elated","dejected","rapt","giddy"],"intellectual":["erudite","inscrutable","arcane","liminal","recondite","pellucid","labyrinthine","didactic","polemical","sophistic","hermetic","epistemic","ontological","tautological","heuristic","noetic"],"movement":["swirling","meandering","sinuous","spasmodic","languid","turbulent","saccadic","pendular","peristaltic","gyrating","whirling","gliding","jerky","fluid","staccato","undulating"],"temporal":["evanescent","archaic","primordial","contemporary","futuristic","antediluvian","bygone","nascent","perpetual","ephemeral","immemorial","anachronistic","prehistoric","posthumous","eternal","fleeting"],"auditory":["dulcet","cacophonous","resonant","plangent","stentorian","muffled","sonorous","raucous","mellifluous","strident","percussive","sibilant","tinny","booming","whispering","euphonious"],"olfactory":["musky","aromatic","pungent","petrichor","floral","woody","citrusy","earthy","smoky","fragrant","acrid","cloying","heady","resinous","balsamic","ozonic"],"gustatory":["piquant","saccharine","acerbic","umami","tangy","tannic","briny","mellow","zesty","peppery","buttery","sour","bittersweet","savory","syrupy","tart"],"tactile":["supple","abrasive","lubricious","gritty","slick","tacky","fleecy","waxy","smooth","rough","spiky","slimy","furry","prickly","plush","metallic"],"luminous":["glimmering","fluorescent","phosphorescent","twinkling","incandescent","coruscating","lambent","effulgent","glistening","shimmering","radiant","dazzling","flickering","beaming","lustrous","scintillant"],"spatial":["labyrinthine","vast","cramped","cavernous","infinitesimal","colossal","lilliputian","panoramic","vertiginous","expansive","claustrophobic","towering","minute","immense","capacious","compressed"],"mythic":["primordial","chthonic","eldritch","divine","infernal","numinous","sacred","profane","faerie","demonic","angelic","shamanic","totemic","oracular","runecarved","phantasmal"],"organic":["verdant","fungal","arboreal","ligneous","herbaceous","rhizomatic","fleshy","osseous","cartilaginous","sinewy","visceral","leafy","blooming","decaying","fruiting","sporadic"],"metaphysical":["transcendent","ineffable","noumenal","sublime","ethereal","immutable","ephemeral","immanent","transitory","absolute","relative","contingent","necessary","possible","infinite","finite"],"artistic":["baroque","surreal","rococo","cubist","pointillist","expressionist","fauvist","minimalist","impressionist","symbolist","dadaist","romantic","gothic","renascent","avant-garde","kitsch"]};

const nouns = {"architecture":["cathedral","spire","arcade","colonnade","rotunda","parapet","pavilion","atrium","gargoyle","minaret","vestibule","citadel","bastion","cloister","balustrade","campanile"],"mythology":["phoenix","chimera","gryphon","sphinx","hydra","kraken","wyvern","basilisk","manticore","nymph","satyr","dryad","sylph","titan","oracle","harbinger"],"botany":["blossom","tendril","taproot","canopy","thicket","fern","lichen","pollen","petal","sprout","bramble","ivy","sap","nectar","pod","herb"],"geology":["crystal","strata","geode","obsidian","magma","fissure","basalt","granite","sediment","flint","marble","slate","crag","scree","stalactite","ore"],"astronomy":["quasar","pulsar","nebula","singularity","corona","parallax","zenith","nadir","eclipse","supernova","asteroid","constellation","galaxy","void","cosmos","equinox"],"oceanography":["coral","abyss","lagoon","riptide","atoll","fjord","estuary","kelp","trench","mangrove","seafoam","whirlpool","breaker","mariner","siren","leviathan"],"weather":["tempest","zephyr","squall","monsoon","gale","doldrums","mistral","chinook","haboob","derecho","blizzard","sirocco","cyclone","drizzle","hoarfrost","mackerel sky"],"culinary":["saffron","nectar","ambrosia","morsel","elixir","essence","aroma","infusion","bouquet","dulcet","cordial","pâté","confit","soufflé","zest","umami"],"literature":["sonnet","stanza","canto","prose","soliloquy","couplet","vignette","epigraph","palimpsest","lexicon","elegy","ode","satire","allegory","parable","epic"],"fabric":["velvet","linen","brocade","taffeta","muslin","chiffon","damask","tulle","gossamer","cashmere","organza","suede","lace","corduroy","satin","tweed"],"emotion":["rapture","ire","ennui","verve","trepidation","pathos","elan","dread","bliss","anguish","fervor","apathy","ecstasy","malice","tenderness","awe"],"philosophy":["absurd","ethos","telos","dichotomy","syllogism","dialectic","axiom","postulate","qualia","tabula rasa","entelechy","monad","tao","karma","dharma","nirvana"],"machinery":["clockwork","engine","gyroscope","pendulum","turbine","piston","flywheel","escapement","contraption","apparatus","gizmo","mechanism","orrey","automaton","servo","cog"],"sound":["timbre","resonance","dissonance","overtone","cadence","reverb","vibrato","tremolo","glissando","arpeggio","staccato","legato","crescendo","diminuendo","falsetto","ostinato"],"color":["indigo","carmine","cinnabar","chartreuse","fuchsia","periwinkle","sepia","aquamarine","verdigris","gamboge","magenta","cerulean","mauve","russet","taupe","viridian"],"mysticism":["oracle","sigil","rune","talisman","amulet","grimoire","cauldron","phylactery","mandala","seance","familiar","incantation","occult","quintessence","elixir","philosopher's stone"]};

const adjList = Object.values(adjectives).flat();
const nounList = Object.values(nouns).flat();

function randItem(arr) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return arr[buf[0] % arr.length];
}

function generatePassphrase() {
    return randItem(adjList) + ' ' + randItem(nounList) + ' ' + randItem(adjList) + ' ' + randItem(nounList);
}

function regeneratePassphrase() {
    document.getElementById('passphrase').value = generatePassphrase();
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function showFile(f) {
    document.getElementById('dropHint').style.display = 'none';
    const meta = document.getElementById('fileMeta');
    meta.style.display = 'block';
    document.getElementById('metaName').textContent = f.name;
    document.getElementById('metaType').textContent = f.type || 'application/octet-stream';
    document.getElementById('metaSize').textContent = formatSize(f.size);

    // clear any previous status
    document.getElementById('statusLine').innerHTML = '';
    document.getElementById('statusLine').className = 'line status-line';

    if (f.size > 10 * 1024 * 1024) {
        setStatus('error: file exceeds the 10MB limit', 'err');
        document.getElementById('passwordSection').classList.remove('active');
        return;
    }

    var pw = document.getElementById('passwordSection');
    pw.classList.add('active');
    if (!document.getElementById('passphrase').value) {
        document.getElementById('passphrase').value = generatePassphrase();
    }
}

var selectedFile = null;
var fileBuffer = null;
var currentShareUrl = '';
var textMode = false;

function dropZoneClick() {
    if (textMode) return;
    document.getElementById('fileInput').click();
}

function enterTextMode() {
    textMode = true;
    selectedFile = null;
    fileBuffer = null;
    document.getElementById('dropZone').classList.add('text-mode');
    document.getElementById('dropHint').style.display = 'none';
    document.getElementById('fileMeta').style.display = 'none';
    var ta = document.getElementById('textInput');
    ta.classList.add('active');
    ta.focus();
    document.getElementById('passwordSection').classList.add('active');
    if (!document.getElementById('passphrase').value) {
        document.getElementById('passphrase').value = generatePassphrase();
    }
}

function exitTextMode() {
    textMode = false;
    document.getElementById('dropZone').classList.remove('text-mode');
    document.getElementById('textInput').classList.remove('active');
}

function showQRCode(shareUrl) {
    currentShareUrl = shareUrl;
    var qrSection = document.getElementById('qrSection');
    var qrcodeDiv = document.getElementById('qrcode');
    var shareUrlDiv = document.getElementById('shareUrl');

    qrcodeDiv.innerHTML = '';
    new QRCode(qrcodeDiv, {
        text: shareUrl,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M
    });

    shareUrlDiv.textContent = shareUrl;
    qrSection.classList.add('active');
}

function showDeleteUrl(deleteUrl) {
    if (!deleteUrl) return;
    var el = document.getElementById('deleteUrl');
    el.innerHTML = '';
    el.appendChild(document.createTextNode('delete link (save it): '));
    var a = document.createElement('a');
    a.href = deleteUrl;
    a.textContent = deleteUrl;
    el.appendChild(a);
}

function copyShareUrl() {
    navigator.clipboard.writeText(currentShareUrl).then(function() {
        document.getElementById('copyHint').textContent = 'copied!';
        setTimeout(function() {
            document.getElementById('copyHint').textContent = 'click to copy';
        }, 2000);
    });
}

function setStatus(msg, cls) {
    var el = document.getElementById('statusLine');
    el.className = 'line status-line' + (cls ? ' ' + cls : '');
    el.innerHTML = msg;
}

async function deriveKey(password, salt) {
    var passwordBytes = new TextEncoder().encode(password);
    var result = await argon2.hash({
        pass: passwordBytes,
        salt: salt,
        time: 4,
        mem: 65536,
        hashLen: 32,
        parallelism: 1,
        type: argon2.ArgonType.Argon2id
    });
    return new Uint8Array(result.hash);
}

async function doUpload() {
    var uploadName, uploadType;
    if (textMode) {
        var text = document.getElementById('textInput').value;
        if (!text) {
            setStatus('error: nothing to paste', 'err');
            return;
        }
        fileBuffer = new TextEncoder().encode(text).buffer;
        uploadName = 'paste.txt';
        uploadType = 'text/plain';
    } else {
        if (!selectedFile) return;
        if (!fileBuffer) {
            // the read kicked off in handleFile may still be in flight for large files
            fileBuffer = await selectedFile.arrayBuffer();
        }
        uploadName = selectedFile.name;
        uploadType = selectedFile.type || 'application/octet-stream';
    }

    if (fileBuffer.byteLength > 10 * 1024 * 1024) {
        setStatus('error: content exceeds the 10MB limit', 'err');
        return;
    }

    var password = document.getElementById('passphrase').value;
    if (!password) {
        setStatus('error: passphrase is empty', 'err');
        return;
    }

    var uploadBtn = document.getElementById('uploadBtn');
    uploadBtn.disabled = true;
    uploadBtn.style.opacity = '0.4';
    uploadBtn.style.cursor = 'not-allowed';

    try {
        // step 1: generate salt
        setStatus('<span class="spinner">|</span> generating salt...');
        await new Promise(function(r) { setTimeout(r, 50); });
        var salt = nacl.randomBytes(16);

        // step 2: derive key (the slow part)
        setStatus('<span class="spinner">|</span> deriving key (argon2id)...');
        await new Promise(function(r) { setTimeout(r, 50); });
        var t0 = performance.now();
        var key = await deriveKey(password, salt);
        var keyMs = Math.round(performance.now() - t0);
        setStatus('key derived in ' + (keyMs / 1000).toFixed(1) + 's, encrypting...');
        await new Promise(function(r) { setTimeout(r, 50); });

        // step 3: encrypt
        var message = new Uint8Array(fileBuffer);
        var nonce = nacl.randomBytes(nacl.secretbox.nonceLength);
        var ciphertext = nacl.secretbox(message, nonce, key);

        var magic = [0, 0x47, 0x50, 0x45, 0x31]; // 0x00 "GPE1"
        var output = new Uint8Array(magic.length + salt.length + nonce.length + ciphertext.length);
        output.set(magic, 0);
        output.set(salt, magic.length);
        output.set(nonce, magic.length + salt.length);
        output.set(ciphertext, magic.length + salt.length + nonce.length);

        setStatus('<span class="spinner">|</span> uploading (' + formatSize(output.length) + ')...');

        // step 4: upload with progress
        await new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/post', true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('X-TTL', document.getElementById('ttlSelect').value);
            xhr.responseType = 'json';

            xhr.upload.addEventListener('progress', function(e) {
                if (e.lengthComputable) {
                    var pct = Math.round((e.loaded / e.total) * 100);
                    setStatus('<span class="spinner">|</span> uploading... ' + pct + '%');
                }
            });

            xhr.onload = function() {
                if (xhr.response && xhr.response.share_url) {
                    var shareUrl = xhr.response.share_url + '#;;;' +
                        encodeURIComponent(password) + ';;;' +
                        encodeURIComponent(uploadType) + ';;;' +
                        encodeURIComponent(uploadName);
                    setStatus('done', 'ok');
                    showQRCode(shareUrl);
                    showDeleteUrl(xhr.response.delete_url);
                    resolve();
                } else {
                    setStatus('error: unexpected response', 'err');
                    reject(new Error('bad response'));
                }
            };

            xhr.onerror = function() {
                setStatus('error: upload failed', 'err');
                reject(new Error('upload failed'));
            };

            xhr.send(new Blob([output], { type: 'application/octet-stream' }));
        });

    } catch (e) {
        setStatus('error: ' + e.message, 'err');
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.style.opacity = '';
        uploadBtn.style.cursor = '';
    }
}

var dropZone = document.getElementById('dropZone');
var fileInput = document.getElementById('fileInput');

dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropZone.classList.add('dragover');
});
dropZone.addEventListener('dragleave', function() { dropZone.classList.remove('dragover'); });
dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handleFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener('change', function(e) { if (e.target.files[0]) handleFile(e.target.files[0]); });

function handleFile(f) {
    exitTextMode();
    selectedFile = f;
    f.arrayBuffer().then(function(buf) { fileBuffer = buf; });
    showFile(f);
}

document.getElementById('pasteToggle').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation(); // don't trigger the drop zone's file picker
    enterTextMode();
});
</script>
</body>
</html>
`; // eslint-disable-line
          return buildResponse(upload, DEFAULT_MIME_HTML, {}, 200, url);
        }
        // deleting requires a POST (so link-preview crawlers can't trigger it) - GET shows a confirmation
        if (url.searchParams.has("del")) {
          return buildDeleteConfirmation(url, requestHeadersAndFriends);
        }
        // edge cache: serve repeat views from this PoP without touching KV.
        // silently inert on *.workers.dev (the Cache API needs a custom-domain zone);
        // staleness after delete is bounded by CACHE_CONTENT's max-age and the purge in deletePost
        const edgeCache = caches.default;
        if (request.method === "GET") {
          const cachedResponse = await edgeCache.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }
        }
        // ULID is len26
        if (key.length === 26 || key.length === 91) {
          const {
            value: contentFromKeyAsArrayBuffer,
            metadata
          } =
          await NAMESPACE.getWithMetadata(key, "arrayBuffer");
          if (contentFromKeyAsArrayBuffer === null) {
            return buildResponse(
              "Sorry, invalid key!",
              DEFAULT_MIME_TEXT, {},
              404,
              url,
            );
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
            return cacheAndReturn(fetch_event, edgeCache, buildResponse(
              contentFromKeyAsArrayBuffer,
              responseContentType,
              CACHE_CONTENT,
              200,
              url,
            ));
          }
          // otherwise, return the wrapped body with the text/html mimetype
          else {
            return cacheAndReturn(fetch_event, edgeCache, buildResponse(
              generatedBodyHtml,
              DEFAULT_MIME_HTML,
              CACHE_CONTENT,
              200,
              url,
            ));
          }
        } else {
          return buildResponse(
            "Sorry, invalid key!",
            DEFAULT_MIME_TEXT, {},
            404,
            url,
          );
        }
      } else {
        // other methods (PUT/DELETE/...) used to fall through to an undefined response
        return buildResponse(
          "Method not allowed - use GET or POST.",
          DEFAULT_MIME_TEXT, {
            Allow: "GET, HEAD, POST, OPTIONS"
          },
          405,
          url,
        );
      }
    } else if (url.pathname === "/headers") {
      // helpful debug endpoint - return the headersAndFriends object, as a nicely formatted string
      requestHeadersAndFriends.url = url.toString();
      requestHeadersAndFriends.method = request.method;
      // first 20 bytes (hex-encoded) of the request
      if (request.body) {
        requestBodyForDebug = await request.arrayBuffer();
      }
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
    } else if (url.pathname === "/naclfast.min.js") {
      // return NaCl crypto library (base64 decoded)
      return buildResponse(str2ab(atob(naclfast_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/argon2bundled.min.js") {
      // return Argon2 key derivation library (base64 decoded)
      return buildResponse(str2ab(atob(argon2bundled_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/qrcode.min.js") {
      // return QR code generation library (base64 decoded)
      return buildResponse(str2ab(atob(qrcode_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/marked.min.js") {
      // return Marked markdown parser (base64 decoded)
      return buildResponse(str2ab(atob(marked_base64)), "application/javascript", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/pastebin-crypted.py") {
      // each instance serves its own E2E encrypted CLI client
      const pastebin_crypted = `#!/usr/bin/env python3
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
import re
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

    ARGON2_VARIANT = nacl.pwhash.argon2id
    SALT_SIZE = 16
    ENCRYPTED_MARKER = b'\\x00GPE1'

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
        """Derive encryption key using Argon2id"""
        return self.ARGON2_VARIANT.kdf(
            size=32,
            password=password,
            salt=salt,
            opslimit=4,
            memlimit=67108864,  # 64 MB
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

    # Check for encrypted container (0x00 "GPE1" magic)
    if content[:5] == b'\\x00GPE1':
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

    # EBML container - WebM / Matroska
    if header == '1a45dfa3':
        return 'video/webm'

    # OggS
    if header == '4f676753':
        return 'audio/ogg'

    # fLaC
    if header == '664c6143':
        return 'audio/flac'

    # RIFF container - WebP or WAV
    if header == '52494646' and len(content) >= 12:
        riff = content[8:12].hex()
        if riff == '57454250':  # WEBP
            return 'image/webp'
        if riff == '57415645':  # WAVE
            return 'audio/wav'

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
        # SVG is XML text whose root element is <svg
        head = text.lstrip('﻿').lstrip()
        if head.startswith('<svg') or (
            head.startswith(('<?xml', '<!--')) and re.search(r'<svg[\\s>]', head, re.I)
        ):
            return 'image/svg+xml'
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
        print("\\nError: No content provided", file=sys.stderr)
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

        print(f"\\n✅ Upload successful!", file=sys.stderr)
        print(f"🔗 Share URL:", file=sys.stderr)
        print(share_url)

        # Also print just the URL to stdout for piping
        if sys.stderr.isatty():
            print(f"\\n💡 Tip: The password is embedded in the URL fragment", file=sys.stderr)
            print(f"   Anyone with this link can decrypt the content", file=sys.stderr)

    except KeyboardInterrupt:
        print("\\n\\n❌ Cancelled by user", file=sys.stderr)
        sys.exit(130)
    except Exception as e:
        print(f"\\n❌ Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
`; // eslint-disable-line
      return buildResponse(pastebin_crypted, "text/plain; charset=UTF-8", CACHE_STATIC, 200, url);
    } else if (url.pathname === "/about") {
      // return about/docs page
      const about_page = `<html><head>
<title>GetPost — About</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: #0d0d0d;
    color: #b0b0b0;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    max-width: 720px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-size: 14px;
    line-height: 1.7;
}

a { color: #48bb78; text-decoration: none; }
a:hover { text-decoration: underline; }

h1 {
    color: #e0e0e0;
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
}

h2 {
    color: #999;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #222;
    padding-bottom: 0.3rem;
}

p { margin-bottom: 0.75rem; }

pre {
    background: #141414;
    border: 1px solid #222;
    border-radius: 2px;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    overflow-x: auto;
    font-size: 13px;
    line-height: 1.6;
}

code {
    background: #1a1a1a;
    padding: 0.1rem 0.3rem;
    border-radius: 2px;
    font-size: 13px;
}

pre code {
    background: none;
    padding: 0;
}

ul {
    list-style: none;
    margin-bottom: 1rem;
}

ul li {
    margin-bottom: 0.3rem;
}

ul li:before {
    content: "- ";
    color: #444;
}

.back {
    display: inline-block;
    margin-bottom: 2rem;
    color: #555;
    font-size: 12px;
}

.back:hover { color: #888; }

.muted { color: #555; }
.footer { margin-top: 3rem; color: #333; font-size: 12px; border-top: 1px solid #1a1a1a; padding-top: 1rem; }
</style>
</head>
<body>

<a href="/" class="back">&lt; back</a>

<h1>getpost</h1>
<p>End-to-end encrypted file sharing on Cloudflare Workers. No accounts, no tracking, globally distributed.</p>
<p>All uploads are encrypted in your browser before leaving your device. The server never sees your plaintext or your passphrase.</p>

<h2>web upload</h2>
<p>Drop a file on the <a href="/">main page</a>. A passphrase is generated automatically. Share the resulting link &mdash; the passphrase is embedded in the URL fragment (never sent to the server).</p>

<h2>command line</h2>
<pre><code># basic upload
curl --data-binary @myfile.txt ${url.toString()}

# upload from clipboard (macOS)
pbpaste | curl --data-binary @- ${url.toString()}

# custom expiration (1 hour)
curl -H "X-TTL: 3600" --data-binary @file.txt ${url.toString()}</code></pre>

<p>CLI uploads are stored unencrypted unless you encrypt first &mdash; see below.</p>

<h2>encrypted command line</h2>
<p>This instance serves its own E2E encrypted CLI client (needs <code>python3</code> and <a href="https://pynacl.readthedocs.io/">PyNaCl</a>):</p>
<pre><code># fetch the client from this instance
curl -sO https://${url.host}/pastebin-crypted.py

# encrypted upload (prints a share link with the passphrase in the fragment)
echo "secret" | PASTEBIN=https://${url.host} python3 pastebin-crypted.py

# encrypt a file
PASTEBIN=https://${url.host} python3 pastebin-crypted.py myfile.txt</code></pre>

<h2>one-liner script</h2>
<p>Save as <code>/usr/local/bin/pastebin</code> and make executable:</p>
<pre><code>#!/bin/bash
curl --data-binary @\${1:--} ${url.toString()}</code></pre>
<p>Usage: <code>pastebin myfile.txt</code> or <code>echo "hello" | pastebin</code></p>

<h2>features</h2>
<ul>
<li>E2E encryption &mdash; NaCl SecretBox (XSalsa20-Poly1305) + Argon2id key derivation</li>
<li>Text &amp; markdown rendered automatically</li>
<li>Images, PDFs, videos, any file up to 10 MB</li>
<li>Append <code>&amp;raw</code> to any link for the original file</li>
<li>Default expiry: 1 year, configurable via <code>X-TTL</code> header (seconds)</li>
<li>Every upload gets a unique delete key</li>
</ul>

<h2>headers &amp; parameters</h2>
<pre><code># custom expiration
X-TTL: 3600          # seconds until expiry

# URL parameters
?raw                 # return original file
?cors=1              # enable CORS headers

# delete a post (deletion requires POST; GET shows a confirmation page)
curl -X POST "https://your.domain/post?key=KEY&amp;del=DELETE_KEY"</code></pre>

<h2>deploy your own</h2>
<p>GetPost runs on Cloudflare Workers &mdash; zero servers, global distribution, generous free tier (100k reads, 1k uploads daily).</p>
<ul>
<li>Clone: <code>git clone https://github.com/getpost-loves-you/getpost</code></li>
<li>Setup: follow <code>SETUP.md</code></li>
<li>Deploy: <code>./deploy.sh mydomain</code></li>
</ul>

<h2>technical details</h2>
<ul>
<li>Architecture: Cloudflare Workers + KV storage, edge computing</li>
<li>Encryption: NaCl SecretBox + Argon2id (4 iterations, 64 MB memory)</li>
<li>IDs: ULID-based, separate delete tokens</li>
<li>Performance: sub-100ms response times worldwide</li>
</ul>

<div class="footer">
    <p>CC0 &mdash; No Rights Reserved. <a href="https://github.com/getpost-loves-you/getpost">source</a></p>
</div>

</body>
</html>
`; // eslint-disable-line
      return buildResponse(about_page, DEFAULT_MIME_HTML, {}, 200, url);
    } else if (url.pathname === "/favicon.ico") {
      // returning binary requires UTF-16 JS strings to be converted to ie) UTF-8 bytes
      return buildResponse(
        str2ab(atob(favicon_gzip)),
        "image/x-icon",
        Object.assign({
          "Content-Encoding": "gzip"
        }, CACHE_STATIC),
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
    return buildResponse(
      JSON.stringify(requestHeadersAndFriends, null, 2),
      "application/json", {},
      500,
      url,
    );
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

// store a content response in the PoP-local cache and return it (the Cache API only accepts GET)
function cacheAndReturn(fetch_event, edgeCache, response) {
  if (fetch_event.request.method === "GET") {
    fetch_event.waitUntil(edgeCache.put(fetch_event.request, response.clone()));
  }
  return response;
}

// detect CLI tools (curl/wget/etc) for content negotiation when Accept is generic
function isCliRequest(requestHeadersAndFriends) {
  const userAgent = requestHeadersAndFriends["user-agent"] || "";
  return userAgent.startsWith("curl/") ||
    userAgent.toLowerCase().includes("wget") ||
    userAgent.toLowerCase().includes("python") ||
    userAgent.toLowerCase().includes("node") ||
    userAgent.toLowerCase().includes("go-http-client");
}

// validate a delete key against stored metadata and delete the post
async function deletePost(url) {
  const key = url.searchParams.get("key");
  const del = url.searchParams.get("del");
  if (!key || (key.length !== 26 && key.length !== 91)) {
    return buildResponse("Sorry, invalid key!", DEFAULT_MIME_TEXT, {}, 404, url);
  }
  // metadata-only read - we don't need the content bytes just to verify the delete key
  const { metadata } = await NAMESPACE.getWithMetadata(key, "text");
  if (metadata === null) {
    return buildResponse("Sorry, invalid key!", DEFAULT_MIME_TEXT, {}, 404, url);
  }
  if (del && del.length === 26 && del === metadata.del) {
    await NAMESPACE.delete(key);
    // best-effort purge of this PoP's cached copies so the deleter sees it gone
    // immediately; other PoPs age out via CACHE_CONTENT's max-age
    const edgeCache = caches.default;
    for (const path of ["/", "/post"]) {
      await edgeCache.delete(url.origin + path + "?key=" + key);
      await edgeCache.delete(url.origin + path + "?key=" + key + "&raw");
    }
    return buildResponse(
      `OK, sent command to delete ${key} - please wait 3min for full delete.`,
      DEFAULT_MIME_TEXT, {},
      200,
      url,
    );
  }
  return buildResponse("Sorry, invalid del key!", DEFAULT_MIME_TEXT, {}, 404, url);
}

// GET on a delete link returns instructions (CLI) or a confirmation page (browser) that POSTs back
function buildDeleteConfirmation(url, requestHeadersAndFriends) {
  if (isCliRequest(requestHeadersAndFriends)) {
    return buildResponse(
      `Deleting requires a POST:\n\n  curl -X POST "${url.href}"\n`,
      DEFAULT_MIME_TEXT, {},
      200,
      url,
    );
  }
  const confirmPage = `<html><head><title>GetPost - delete</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { background: #0d0d0d; color: #b0b0b0; font-family: 'SF Mono', 'Menlo', 'Consolas', monospace; font-size: 14px; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
.box { border: 1px solid #2a2a2a; border-radius: 4px; padding: 2rem; max-width: 420px; }
.box .heading { color: #888; margin-bottom: 1.25rem; }
button { width: 100%; padding: 0.5rem; background: none; color: #e53e3e; border: 1px solid #e53e3e; border-radius: 2px; font-family: inherit; font-size: 13px; cursor: pointer; }
button:hover { background: rgba(229, 62, 62, 0.1); }
#result { margin-top: 0.75rem; font-size: 12px; color: #888; line-height: 1.5; overflow-wrap: anywhere; }
</style></head><body>
<div class="box">
  <div class="heading">delete this post?</div>
  <button onclick="doDelete()">delete permanently</button>
  <div id="result"></div>
</div>
<script>
async function doDelete() {
  var r = await fetch(window.location.pathname + window.location.search, { method: "POST" });
  document.getElementById("result").textContent = await r.text();
}
</script>
</body></html>`;
  return buildResponse(confirmPage, DEFAULT_MIME_HTML, {}, 200, url);
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

// get "len" random base32 characters from the worker's (cryptographically secure) RNG
function encodeRandom(len) {
  const bytes = new Uint8Array(len);
  crypto.getRandomValues(bytes);
  let str = "";
  for (let i = 0; i < len; i++) {
    // 256 % 32 === 0, so the modulo is unbiased
    str += ENCODING.charAt(bytes[i] % ENCODING_LEN);
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

// Sanitize HTML to prevent XSS attacks
function sanitizeHtml(str) {
  if (!str) return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// wrap verbatim text in a fenced code block, escaping backtick runs that would
// close the fence early and tagging an optional language for highlight class hooks
function toCodeFence(text, lang) {
  let longest = 0;
  const runs = text.match(/`+/g);
  if (runs) {
    for (const run of runs) longest = Math.max(longest, run.length);
  }
  const fence = "`".repeat(Math.max(3, longest + 1));
  const tag = lang ? String(lang).replace(/[^a-zA-Z0-9+#-]/g, "").slice(0, 20) : "";
  return fence + tag + "\n" + text + "\n" + fence;
}

// detect SVG: XML text whose root element is <svg, allowing a leading <?xml/comment/BOM
function looksLikeSvg(str) {
  const head = str.slice(0, 1000).replace(/^﻿/, "").trimStart();
  if (head.startsWith("<svg")) return true;
  if (head.startsWith("<?xml") || head.startsWith("<!--")) {
    return /<svg[\s>]/i.test(head);
  }
  return false;
}

// detect a shortlink: the entire content (trimmed) is one line, at most 2048
// characters, and parses as a single http/https URL - the viewer page shows a
// cancellable countdown before redirecting (no server-side redirect)
function looksLikeUrl(str) {
  const trimmed = str.trim();
  if (trimmed.length === 0 || trimmed.length > 2048) return false;
  if (trimmed.includes("\n") || trimmed.includes("\r")) return false;
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return false;
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (e) {
    return false;
  }
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

  // encrypted container: 0x00 "GPE1" + salt + nonce + ciphertext
  const isEncrypted = hex(contentAsUint8Array.slice(0, 5)) === "0047504531";

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
      if (hex(contentAsUint8Array.slice(4, 12)) === "667479706d703432") {
        type = "video/mp4";
      } else {
        type = "application/octet-stream";
      }
      break;
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
    case "1a45dfa3":
      // EBML container - WebM (video) or Matroska (.mkv); both are video/webm-ish to browsers
      type = "video/webm";
      break;
    case "4f676753":
      // OggS - could be audio or video; audio/ogg covers the common case
      type = "audio/ogg";
      break;
    case "664c6143":
      // fLaC
      type = "audio/flac";
      break;
    case "52494646":
      // RIFF container - WebP if bytes 8-12 are "WEBP", otherwise WAV if "WAVE"
      if (hex(contentAsUint8Array.slice(8, 12)) === "57454250") {
        type = "image/webp";
      } else if (hex(contentAsUint8Array.slice(8, 12)) === "57415645") {
        type = "audio/wav";
      } else {
        type = "application/octet-stream";
      }
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
        // SVG is XML text; sniff a leading <svg or <?xml ... <svg before treating as markdown
        if (looksLikeSvg(contentAsString)) {
          type = "image/svg+xml";
        } else if (looksLikeUrl(contentAsString)) {
          // a bare single-line URL becomes a shortlink with a countdown viewer
          type = "text/x-url";
        } else {
          type = DEFAULT_MIME_TEXT;
        }
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
    case "image/webp":
    case "image/svg+xml":
      // images render inline below via the imageUrl branch
      break;
    case "application/x-encrypted":
      // Encrypted content - let the HTML wrapper handle decryption
      injectorScript = "";
      break;
    case "audio/mp3":
    case "audio/ogg":
    case "audio/flac":
    case "audio/wav":
    case "video/mp4":
    case "video/webm":
    case "application/pdf":
    case "application/zip":
    case "application/octet-stream":
      injectorScript = "window.location.assign(window.location.href+'&raw')";
      break;
    case "text/x-url":
      // NO server-side redirect - the viewer page fetches the raw URL, validates
      // it, and shows a cancellable countdown before navigating
      injectorScript = "";
      break;
    case DEFAULT_MIME_TEXT:
    default:
      injectorScript = "";
      break;
  }
  // Sanitize customTitle to prevent XSS, and limit length
  const sanitizedTitle = customTitle ? sanitizeHtml(customTitle).substring(0, 100) : null;
  const TITLE = sanitizedTitle || `GetPost: ${type}`;
  let contentAsHtmlFromMarked = "";
  let imageUrl = "";
  let description = "";
  // future use
  const encodedPayload = "";
  // strip non-url characters from description
  if (type === DEFAULT_MIME_TEXT) {
    const text = new TextDecoder("utf-8").decode(content);
    // markdown by default; an explicit ?content_type of code/* or text other than
    // markdown, or a ?lang= hint, renders verbatim in a fenced code block instead
    const ct = (url && url.searchParams.get("content_type") || "").toLowerCase();
    const lang = url && url.searchParams.get("lang");
    const forceCode = !!lang ||
      (ct && ct.indexOf("text/markdown") === -1 &&
        (ct.indexOf("text/plain") === -1) && ct.indexOf("text/") === 0) ||
      ct.indexOf("application/") === 0;
    if (forceCode) {
      contentAsHtmlFromMarked = marked(toCodeFence(text, lang));
    } else {
      contentAsHtmlFromMarked = marked(text);
    }
    // use the first 140 characters that aren't special, as the description!
    description = new TextDecoder("utf-8")
      .decode(new Uint8Array(content.slice(0, 140)))
      .replace(/[^0-9a-z\\\ \.\:\?]/gi, "");
  } else if (type === "text/x-url") {
    // don't render the URL as page content - the viewer JS owns the display
    description = "GetPost: redirect";
  } else {
    description = "GetPost: " + type;
  }
  if (type.startsWith("image/")) {
    imageUrl = url.toString() + "&raw";
    injectorScript = "";
  }
  const contentAsWrappedHtml = `<html>
<head>
<title>${TITLE}</title>
<meta name="title" content="${TITLE}">
<meta name="description" content="${description}">
<meta property="og:url" content="${url.toString()}">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="${url.toString()}">
<meta property="twitter:title" content="${TITLE}">
<meta property="twitter:description" content="${description}">
<meta property="twitter:image" content="${imageUrl}">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: #0d0d0d;
    color: #b0b0b0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* top bar - terminal style */
.top-bar {
    background: #111;
    color: #555;
    border-bottom: 1px solid #1a1a1a;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 12px;
    padding: 0.6rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-bar a { color: #555; text-decoration: none; }
.top-bar a:hover { color: #888; }
.top-bar .expires { color: #444; }

/* content area */
.content-wrap {
    flex: 1;
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
    padding: 2.5rem 2rem;
}

/* rendered markdown / text */
#markdownContent,
#decryptedContent {
    font-family: 'Charter', 'Bitstream Charter', 'Sitka Text', 'Cambria', Georgia, serif;
    font-size: 17px;
    line-height: 1.7;
    color: #ccc;
}

#markdownContent h1, #decryptedContent h1 { font-size: 1.8em; margin: 0.8em 0 0.4em; color: #e0e0e0; font-weight: 600; }
#markdownContent h2, #decryptedContent h2 { font-size: 1.4em; margin: 1.2em 0 0.4em; color: #e0e0e0; font-weight: 600; }
#markdownContent h3, #decryptedContent h3 { font-size: 1.15em; margin: 1em 0 0.3em; color: #e0e0e0; font-weight: 600; }

#markdownContent p, #decryptedContent p { margin-bottom: 1em; }

#markdownContent a, #decryptedContent a { color: #48bb78; text-decoration: underline; text-decoration-color: #2d7a4d; }
#markdownContent a:hover, #decryptedContent a:hover { text-decoration-color: #48bb78; }

#markdownContent code, #decryptedContent code {
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    background: #1a1a1a;
    padding: 0.15em 0.35em;
    border-radius: 3px;
    font-size: 0.88em;
    color: #c8c8c8;
}

#markdownContent pre, #decryptedContent pre {
    background: #141414;
    color: #c8c8c8;
    border: 1px solid #222;
    padding: 1rem 1.25rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 1em 0;
    line-height: 1.5;
}

#markdownContent pre code, #decryptedContent pre code {
    background: none;
    padding: 0;
    color: inherit;
    font-size: 13px;
}

#markdownContent blockquote, #decryptedContent blockquote {
    border-left: 3px solid #333;
    padding-left: 1em;
    margin: 1em 0;
    color: #888;
    font-style: italic;
}

#markdownContent ul, #markdownContent ol,
#decryptedContent ul, #decryptedContent ol {
    margin: 0.5em 0 1em 1.5em;
}

#markdownContent li, #decryptedContent li { margin-bottom: 0.3em; }

#markdownContent img, #decryptedContent img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1em 0;
}

#markdownContent hr, #decryptedContent hr {
    border: none;
    border-top: 1px solid #2a2a2a;
    margin: 2em 0;
}

/* image content */
#content img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* decrypt interface */
.decrypt-interface {
    max-width: 420px;
    margin: 80px auto;
    padding: 2rem;
    border: 1px solid #2a2a2a;
    border-radius: 4px;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 13px;
}

.decrypt-interface .heading {
    color: #888;
    margin-bottom: 1.25rem;
}

.decrypt-field {
    margin-bottom: 1rem;
    position: relative;
}

.decrypt-field label {
    display: block;
    margin-bottom: 0.4rem;
    color: #666;
    font-size: 12px;
}

.decrypt-field input {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.6rem;
    border: 1px solid #333;
    border-radius: 2px;
    font-family: inherit;
    font-size: 13px;
    background: #1a1a1a;
    color: #48bb78;
    outline: none;
    box-sizing: border-box;
}

.decrypt-field input:focus {
    border-color: #48bb78;
}

.password-toggle {
    position: absolute;
    right: 6px;
    top: 26px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #555;
    user-select: none;
    padding: 4px;
}

.password-toggle:hover { color: #888; }

.decrypt-button {
    width: 100%;
    padding: 0.5rem;
    background: none;
    color: #48bb78;
    border: 1px solid #48bb78;
    border-radius: 2px;
    font-family: inherit;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.2s;
}

.decrypt-button:hover {
    background: rgba(72, 187, 120, 0.1);
}

.decrypt-button:disabled {
    color: #555;
    border-color: #333;
    cursor: not-allowed;
}

.decrypt-status {
    margin-top: 0.75rem;
    font-size: 12px;
    display: none;
}

.decrypt-status.error { color: #e53e3e; }
.decrypt-status.success { color: #48bb78; }
.decrypt-status.info { color: #888; }

.download-encrypted {
    display: block;
    margin-top: 1rem;
    font-size: 11px;
    color: #555;
    text-decoration: none;
}

.download-encrypted:hover { color: #888; }

.hidden {
    display: none !important;
}

/* url shortlink countdown */
#redirectNotice .redirect-dest {
    margin-bottom: 1rem;
    overflow-wrap: anywhere;
}

#redirectNotice .redirect-dest a {
    color: #48bb78;
    text-decoration: underline;
    text-decoration-color: #2d7a4d;
}

#redirectNotice .redirect-dest a:hover { text-decoration-color: #48bb78; }

#redirectNotice .redirect-count {
    color: #888;
    margin-bottom: 1rem;
}

#redirectNotice .redirect-go {
    display: block;
    margin-bottom: 1rem;
    color: #48bb78;
    text-decoration: none;
}

#redirectNotice .redirect-go:hover { text-decoration: underline; }

#decryptedContent {
    margin-top: 0;
}

/* download button for binary content */
.download-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #0d0d0d;
    color: #48bb78;
    text-decoration: none;
    border: 1px solid #333;
    border-radius: 2px;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 13px;
    margin-top: 1rem;
    transition: border-color 0.2s;
}

.download-btn:hover {
    border-color: #48bb78;
}

/* download bar */
.download-bar {
    display: none;
    background: #111;
    border-bottom: 1px solid #1a1a1a;
    padding: 0.5rem 1.5rem;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 12px;
}

.download-bar.active {
    display: block;
}

.download-bar a {
    color: #48bb78;
    text-decoration: none;
    border: 1px solid #2a2a2a;
    border-radius: 2px;
    padding: 0.3rem 0.7rem;
    transition: border-color 0.2s;
}

.download-bar a:hover {
    border-color: #48bb78;
}

/* footer */
.footer-bar {
    background: #111;
    border-top: 1px solid #1a1a1a;
    color: #333;
    font-family: 'SF Mono', 'Menlo', 'Consolas', monospace;
    font-size: 11px;
    padding: 0.5rem 1.5rem;
    text-align: center;
}

.footer-bar a { color: #444; text-decoration: none; }
.footer-bar a:hover { color: #666; }
</style>
</head>

<body>
<div class="top-bar">
    <a href="/">getpost</a>
    <span class="expires">expires ${expiryTime}</span>
</div>
<div class="download-bar" id="downloadBar"></div>

<div class="content-wrap">
    <div id="encryptedNotice" class="hidden">
        <div class="decrypt-interface">
            <div class="heading">encrypted content</div>
            <div class="decrypt-field">
                <label for="decryptPassword">passphrase:</label>
                <input type="password" id="decryptPassword" placeholder="enter passphrase" autocomplete="off">
                <button type="button" class="password-toggle" onclick="toggleDecryptPasswordVisibility()">show</button>
            </div>
            <button class="decrypt-button" id="decryptButton" onclick="decryptContent()">decrypt</button>
            <div class="decrypt-status" id="decryptStatus"></div>
            <a class="download-encrypted" id="downloadEncrypted" download="encrypted.gpe1">download encrypted contents</a>
        </div>
    </div>

    <div id="redirectNotice" class="hidden">
        <div class="decrypt-interface">
            <div class="heading">redirecting to</div>
            <div class="redirect-dest"><a id="redirectLink" rel="noopener noreferrer"></a></div>
            <div class="redirect-count" id="redirectCount"></div>
            <a class="redirect-go" id="redirectGo" rel="noopener noreferrer">go now</a>
            <button class="decrypt-button" id="redirectCancel" onclick="cancelRedirect()">cancel</button>
        </div>
    </div>

    <div id="content">
        <img id="imgContent" src="${imageUrl}">
    </div>
    <div id="markdownContent">${contentAsHtmlFromMarked}</div>
    <div id="decryptedContent" class="hidden"></div>
</div>

<div class="footer-bar">
    <a href="/">getpost</a> &middot; <a href="/about">about</a>
</div>

<script src="/naclfast.min.js"></script>
<script src="/argon2bundled.min.js"></script>
<script src="/marked.min.js"></script>
<script>
    var payloadType = "${type}";
    var encodedPayload = "${encodedPayload}";
    var isEncrypted = false;
    var encryptedData = null;
    var originalMimeType = null;
    var originalFilename = null;

    // map common filename extensions to a marked/highlight language hint
    var EXT_LANG = {
        py: 'python', js: 'javascript', mjs: 'javascript', ts: 'typescript',
        jsx: 'jsx', tsx: 'tsx', json: 'json', html: 'html', htm: 'html',
        css: 'css', sh: 'bash', bash: 'bash', zsh: 'bash', rb: 'ruby',
        go: 'go', rs: 'rust', c: 'c', h: 'c', cpp: 'cpp', cc: 'cpp',
        hpp: 'cpp', java: 'java', kt: 'kotlin', swift: 'swift', php: 'php',
        sql: 'sql', yaml: 'yaml', yml: 'yaml', toml: 'toml', ini: 'ini',
        xml: 'xml', md: 'markdown', diff: 'diff', patch: 'diff', lua: 'lua',
        pl: 'perl', r: 'r', scala: 'scala', clj: 'clojure', ex: 'elixir',
        exs: 'elixir', hs: 'haskell', dockerfile: 'dockerfile'
    };

    function fileExt(filename) {
        if (!filename) return '';
        var dot = filename.lastIndexOf('.');
        if (dot < 0 || dot === filename.length - 1) return '';
        var ext = filename.slice(dot + 1);
        return /^[A-Za-z0-9]+$/.test(ext) ? ext.toLowerCase() : '';
    }

    // decide whether printable content should be rendered as rich markdown.
    // markdown only for markdown mime/extensions; a .txt extension always forces plain.
    function renderAsMarkdown(mimeType, filename) {
        var ext = fileExt(filename);
        if (ext === 'txt') return false;
        if (ext === 'md' || ext === 'mkd' || ext === 'markdown') return true;
        var mt = (mimeType || '').toLowerCase();
        if (mt.indexOf('text/markdown') !== -1) return true;
        // default for unknown text (and explicit text/plain) is markdown, matching legacy behavior
        return ext === '' && (mt === '' || mt.indexOf('text/plain') !== -1);
    }

    // wrap verbatim text in a fenced code block, escaping any backtick runs that
    // would otherwise close the fence, and tagging a language from the extension.
    // NB: this file is embedded inside a backtick template literal in worker.js, so
    // JS backslash escapes (newline, dot, etc) are consumed at pack time - avoid them
    // in embedded code AND comments; build the newline via char code instead.
    var NL = String.fromCharCode(10);
    function toCodeFence(text, filename) {
        var lang = EXT_LANG[fileExt(filename)] || '';
        var longest = 0;
        var runs = text.match(/\`+/g);
        if (runs) for (var i = 0; i < runs.length; i++) longest = Math.max(longest, runs[i].length);
        var fence = '\`'.repeat(Math.max(3, longest + 1));
        return fence + lang + NL + text + NL + fence;
    }

    // --- url shortlink countdown ---
    // a paste whose entire content is one http/https URL acts as a shortlink:
    // the viewer shows the destination plus a cancellable 5 second countdown.
    var redirectTimer = null;
    var CR = String.fromCharCode(13);

    // same rule the server uses: single line, at most 2048 chars, http/https only
    function isValidRedirectUrl(s) {
        if (!s || s.length > 2048) return false;
        if (s.indexOf(NL) !== -1 || s.indexOf(CR) !== -1) return false;
        if (s.indexOf('http://') !== 0 && s.indexOf('https://') !== 0) return false;
        try {
            var parsed = new URL(s);
            return parsed.protocol === 'http:' || parsed.protocol === 'https:';
        } catch (e) {
            return false;
        }
    }

    // show the destination text inertly (no link, no redirect) when validation fails
    function showInertText(text) {
        var md = document.getElementById('markdownContent');
        md.classList.remove('hidden');
        md.textContent = text;
    }

    function showRedirectCountdown(destUrl) {
        if (!isValidRedirectUrl(destUrl)) {
            showInertText(destUrl);
            return;
        }
        document.getElementById('content').classList.add('hidden');
        document.getElementById('markdownContent').classList.add('hidden');
        document.getElementById('redirectNotice').classList.remove('hidden');
        // attacker-controlled URL: only ever textContent / setAttribute, never innerHTML
        var link = document.getElementById('redirectLink');
        link.textContent = destUrl;
        link.setAttribute('href', destUrl);
        document.getElementById('redirectGo').setAttribute('href', destUrl);
        var count = document.getElementById('redirectCount');
        var remaining = 5;
        count.textContent = 'redirecting in ' + remaining + 's';
        redirectTimer = setInterval(function() {
            remaining = remaining - 1;
            if (remaining <= 0) {
                clearInterval(redirectTimer);
                redirectTimer = null;
                window.location.assign(destUrl);
            } else {
                count.textContent = 'redirecting in ' + remaining + 's';
            }
        }, 1000);
    }

    function cancelRedirect() {
        if (redirectTimer) {
            clearInterval(redirectTimer);
            redirectTimer = null;
        }
        document.getElementById('redirectCount').textContent = 'cancelled';
    }

    // server typed the payload as text/x-url: fetch the raw text, validate it
    // client-side, and start the countdown (or show it inertly if invalid)
    async function checkIfUrlRedirect() {
        if (payloadType !== 'text/x-url') return false;
        try {
            var rawUrl = window.location.href.split('#')[0] + '&raw';
            var response = await fetch(rawUrl, {
                mode: 'cors',
                credentials: 'omit',
                referrerPolicy: 'no-referrer',
                cache: 'no-cache'
            });
            if (!response.ok) return false;
            var text = (await response.text()).trim();
            if (isValidRedirectUrl(text)) {
                showRedirectCountdown(text);
            } else {
                showInertText(text);
            }
            return true;
        } catch (error) {
            console.error('Error checking url redirect:', error);
            return false;
        }
    }

    async function checkIfEncrypted() {
        // the server already typed the payload - only refetch the raw bytes when it's encrypted
        if (payloadType !== 'application/x-encrypted') return false;
        try {
            var rawUrl = window.location.href.split('#')[0] + '&raw';
            var response = await fetch(rawUrl, {
                mode: 'cors',
                credentials: 'omit',
                referrerPolicy: 'no-referrer',
                cache: 'no-cache'
            });

            if (!response.ok) return false;

            var arrayBuffer = await response.arrayBuffer();
            var data = new Uint8Array(arrayBuffer);

            if (data.length > 5 && data[0] === 0 && data[1] === 0x47 &&
                data[2] === 0x50 && data[3] === 0x45 && data[4] === 0x31) {
                isEncrypted = true;
                encryptedData = data;
                showDecryptInterface();

                var hash = window.location.hash;
                if (hash && hash.length > 1) {
                    var fragment = hash.substring(1);
                    var parts = fragment.split(';;;');
                    if (parts.length >= 2 && parts[1]) {
                        document.getElementById('decryptPassword').value = decodeURIComponent(parts[1]);
                        if (parts.length >= 3 && parts[2]) {
                            originalMimeType = decodeURIComponent(parts[2]);
                        }
                        if (parts.length >= 4 && parts[3]) {
                            originalFilename = decodeURIComponent(parts[3]);
                        }
                        showStatus('passphrase loaded, decrypting...', 'info');
                        setTimeout(function() { decryptContent(); }, 500);
                        // keep the fragment: stripping it made the address-bar URL unshareable
                    }
                }
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
        // let people save the still-encrypted container without the passphrase
        document.getElementById('downloadEncrypted').href =
            window.location.href.split('#')[0] + '&raw';
    }

    function showStatus(message, type) {
        var status = document.getElementById('decryptStatus');
        status.textContent = message;
        status.className = 'decrypt-status ' + type;
        status.style.display = 'block';
    }

    async function deriveKey(password, salt) {
        var passwordBytes = new TextEncoder().encode(password);
        var result = await argon2.hash({
            pass: passwordBytes,
            salt: salt,
            time: 4,
            mem: 65536,
            hashLen: 32,
            parallelism: 1,
            type: argon2.ArgonType.Argon2id
        });
        return new Uint8Array(result.hash);
    }

    async function decryptContent() {
        var password = document.getElementById('decryptPassword').value;

        if (!password) {
            showStatus('enter a passphrase', 'error');
            return;
        }

        if (!encryptedData) {
            showStatus('no encrypted data available', 'error');
            return;
        }

        try {
            document.getElementById('decryptButton').disabled = true;
            showStatus('deriving key (argon2id)...', 'info');

            // container: 0x00 "GPE1" + salt(16) + nonce(24) + ciphertext
            if (encryptedData.length <= 5 ||
                encryptedData[0] !== 0 || encryptedData[1] !== 0x47 ||
                encryptedData[2] !== 0x50 || encryptedData[3] !== 0x45 ||
                encryptedData[4] !== 0x31) {
                throw new Error('invalid encrypted data format');
            }

            var salt = encryptedData.slice(5, 21);
            var nonceAndCiphertext = encryptedData.slice(21);
            var nonceSize = nacl.secretbox.nonceLength;

            if (nonceAndCiphertext.length < nonceSize) {
                throw new Error('invalid encrypted data');
            }

            var nonce = nonceAndCiphertext.slice(0, nonceSize);
            var ciphertext = nonceAndCiphertext.slice(nonceSize);

            var t0 = performance.now();
            var key = await deriveKey(password, salt);
            var keyMs = Math.round(performance.now() - t0);
            showStatus('key derived in ' + (keyMs / 1000).toFixed(1) + 's, decrypting...', 'info');

            var decrypted = nacl.secretbox.open(ciphertext, nonce, key);

            if (!decrypted) {
                throw new Error('incorrect passphrase or corrupted data');
            }

            showStatus('decrypted', 'success');
            displayDecryptedContent(decrypted);

            setTimeout(function() {
                document.getElementById('encryptedNotice').classList.add('hidden');
            }, 800);

        } catch (error) {
            console.error('Decryption error:', error);
            showStatus('failed: ' + error.message, 'error');
            document.getElementById('decryptButton').disabled = false;
        }
    }

    function showDownloadBar(decryptedData) {
        var mimeType = originalMimeType || 'application/octet-stream';
        var blob = new Blob([decryptedData], { type: mimeType });
        var blobUrl = URL.createObjectURL(blob);
        var filename = originalFilename || 'decrypted-file';

        var bar = document.getElementById('downloadBar');
        var link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.textContent = 'download ' + filename;
        bar.innerHTML = '';
        bar.appendChild(link);
        bar.classList.add('active');
    }

    function displayDecryptedContent(decryptedData) {
        var decryptedDiv = document.getElementById('decryptedContent');
        var dataString = new TextDecoder('utf-8').decode(decryptedData);

        // encrypted shortlink: a decrypted payload that is just a single-line
        // http/https URL gets the same countdown redirect as a plaintext one
        if (isValidRedirectUrl(dataString.trim())) {
            showRedirectCountdown(dataString.trim());
            return;
        }

        decryptedDiv.classList.remove('hidden');

        showDownloadBar(decryptedData);

        var isPrintable = true;
        for (var i = 0; i < Math.min(dataString.length, 1000); i++) {
            var code = dataString.charCodeAt(i);
            if (code > 127 || (code < 32 && code !== 9 && code !== 10 && code !== 13)) {
                isPrintable = false;
                break;
            }
        }

        if (isPrintable) {
            try {
                if (typeof marked === 'undefined') throw new Error('no marked');
                if (renderAsMarkdown(originalMimeType, originalFilename)) {
                    // prose / markdown documents render as rich text
                    decryptedDiv.innerHTML = marked(dataString);
                } else {
                    // source, configs, logs, plain .txt: render verbatim in a fenced
                    // code block so whitespace is kept and nothing is reinterpreted
                    decryptedDiv.innerHTML = marked(toCodeFence(dataString, originalFilename));
                }
            } catch (e) {
                decryptedDiv.innerHTML = '<pre style="white-space: pre-wrap; word-wrap: break-word;">' +
                    dataString.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>';
            }
        } else {
            var mimeType = originalMimeType || 'application/octet-stream';
            var blob = new Blob([decryptedData], { type: mimeType });
            var blobUrl = URL.createObjectURL(blob);

            var canDisplayInline = mimeType.startsWith('image/') ||
                                   mimeType.startsWith('video/') ||
                                   mimeType.startsWith('audio/') ||
                                   mimeType === 'application/pdf';

            if (canDisplayInline) {
                if (mimeType.startsWith('image/')) {
                    decryptedDiv.innerHTML = '<img src="' + blobUrl + '" style="max-width: 100%; height: auto;">';
                } else if (mimeType.startsWith('video/')) {
                    decryptedDiv.innerHTML = '<video controls style="max-width: 100%;"><source src="' + blobUrl + '" type="' + mimeType + '"></video>';
                } else if (mimeType.startsWith('audio/')) {
                    decryptedDiv.innerHTML = '<audio controls style="width: 100%;"><source src="' + blobUrl + '" type="' + mimeType + '"></audio>';
                } else if (mimeType === 'application/pdf') {
                    decryptedDiv.innerHTML = '<iframe src="' + blobUrl + '" style="width: 100%; height: 600px; border: none;"></iframe>';
                }
            } else {
                decryptedDiv.innerHTML = '<p>Binary content decrypted.</p>';
            }
        }
    }

    function toggleDecryptPasswordVisibility() {
        var input = document.getElementById('decryptPassword');
        var button = document.querySelector('.decrypt-field .password-toggle');
        if (input.type === 'password') {
            input.type = 'text';
            button.textContent = 'hide';
        } else {
            input.type = 'password';
            button.textContent = 'show';
        }
    }

    var decryptInput = document.getElementById('decryptPassword');
    if (decryptInput) {
        decryptInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') decryptContent();
        });
    }

    window.addEventListener('load', async function() {
        // the url shortlink path needs no crypto libs - run it before the guard
        if (payloadType === 'text/x-url') {
            try {
                await checkIfUrlRedirect();
            } catch (error) {
                console.error('Failed url redirect check:', error);
            }
            return;
        }

        if (typeof nacl === 'undefined' || typeof argon2 === 'undefined') {
            console.error('Crypto libraries failed to load');
            showStatus('failed to load encryption libraries — refresh the page', 'error');
            return;
        }

        try {
            await checkIfEncrypted();
        } catch (error) {
            console.error('Failed to initialize encryption:', error);
            showStatus('failed to initialize decryption — refresh the page', 'error');
        }
    });

    ${injectorScript};
</script>
</body>
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
  // copy rather than mutate, so shared header constants stay clean across requests
  const headersObj = Object.assign({}, headers, {
    "content-type": type
  });

  // Add CORS headers if cors parameter is present
  if (url) {
    addCorsHeaders(headersObj, url);
  }

  // statusText is left default - the human-readable reason already lives in the body,
  // and only a restricted charset is legal on the HTTP status line
  return new Response(blob, {
    status: statuscode,
    headers: headersObj
  });
}