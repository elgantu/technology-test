(()=>{var F4=Object.create;var Qs=Object.defineProperty;var C4=Object.getOwnPropertyDescriptor;var R4=Object.getOwnPropertyNames,Zc=Object.getOwnPropertySymbols,L4=Object.getPrototypeOf,Qc=Object.prototype.hasOwnProperty,P4=Object.prototype.propertyIsEnumerable;var ru=(e,t,r)=>t in e?Qs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,t1=(e,t)=>{for(var r in t||(t={}))Qc.call(t,r)&&ru(e,r,t[r]);if(Zc)for(var r of Zc(t))P4.call(t,r)&&ru(e,r,t[r]);return e};var He=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Wt=(e,t)=>{for(var r in t)Qs(e,r,{get:t[r],enumerable:!0})},M4=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of R4(t))!Qc.call(e,o)&&o!==r&&Qs(e,o,{get:()=>t[o],enumerable:!(n=C4(t,o))||n.enumerable});return e};var nu=(e,t,r)=>(r=e!=null?F4(L4(e)):{},M4(t||!e||!e.__esModule?Qs(r,"default",{value:e,enumerable:!0}):r,e));var Ft=(e,t,r)=>(ru(e,typeof t!="symbol"?t+"":t,r),r);var r1=He(e1=>{(function(){"use strict";var e;function t(m){var d=0;return function(){return d<m.length?{done:!1,value:m[d++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(m,d,b){return m==Array.prototype||m==Object.prototype||(m[d]=b.value),m};function n(m){m=[typeof globalThis=="object"&&globalThis,m,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var d=0;d<m.length;++d){var b=m[d];if(b&&b.Math==Math)return b}throw Error("Cannot find global object")}var o=n(this);function s(m,d){if(d)t:{var b=o;m=m.split(".");for(var A=0;A<m.length-1;A++){var R=m[A];if(!(R in b))break t;b=b[R]}m=m[m.length-1],A=b[m],d=d(A),d!=A&&d!=null&&r(b,m,{configurable:!0,writable:!0,value:d})}}s("Symbol",function(m){function d(V){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new b(A+(V||"")+"_"+R++,V)}function b(V,M){this.g=V,r(this,"description",{configurable:!0,writable:!0,value:M})}if(m)return m;b.prototype.toString=function(){return this.g};var A="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return d}),s("Symbol.iterator",function(m){if(m)return m;m=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),b=0;b<d.length;b++){var A=o[d[b]];typeof A=="function"&&typeof A.prototype[m]!="function"&&r(A.prototype,m,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return m});function a(m){return m={next:m},m[Symbol.iterator]=function(){return this},m}function i(m){var d=typeof Symbol<"u"&&Symbol.iterator&&m[Symbol.iterator];return d?d.call(m):{next:t(m)}}function u(m){if(!(m instanceof Array)){m=i(m);for(var d,b=[];!(d=m.next()).done;)b.push(d.value);m=b}return m}var c=typeof Object.create=="function"?Object.create:function(m){function d(){}return d.prototype=m,new d},p;if(typeof Object.setPrototypeOf=="function")p=Object.setPrototypeOf;else{var f;t:{var x={a:!0},T={};try{T.__proto__=x,f=T.a;break t}catch(m){}f=!1}p=f?function(m,d){if(m.__proto__=d,m.__proto__!==d)throw new TypeError(m+" is not extensible");return m}:null}var k=p;function O(m,d){if(m.prototype=c(d.prototype),m.prototype.constructor=m,k)k(m,d);else for(var b in d)if(b!="prototype")if(Object.defineProperties){var A=Object.getOwnPropertyDescriptor(d,b);A&&Object.defineProperty(m,b,A)}else m[b]=d[b];m.ea=d.prototype}function D(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function C(m){if(m.l)throw new TypeError("Generator is already running");m.l=!0}D.prototype.o=function(m){this.h=m};function K(m,d){m.j={U:d,V:!0},m.g=m.m||m.s}D.prototype.return=function(m){this.j={return:m},this.g=this.s};function P(m,d,b){return m.g=b,{value:d}}function G(m){this.g=new D,this.h=m}function q(m,d){C(m.g);var b=m.g.i;return b?z(m,"return"in b?b.return:function(A){return{value:A,done:!0}},d,m.g.return):(m.g.return(d),rt(m))}function z(m,d,b,A){try{var R=d.call(m.g.i,b);if(!(R instanceof Object))throw new TypeError("Iterator result "+R+" is not an object");if(!R.done)return m.g.l=!1,R;var V=R.value}catch(M){return m.g.i=null,K(m.g,M),rt(m)}return m.g.i=null,A.call(m.g,V),rt(m)}function rt(m){for(;m.g.g;)try{var d=m.h(m.g);if(d)return m.g.l=!1,{value:d.value,done:!1}}catch(b){m.g.h=void 0,K(m.g,b)}if(m.g.l=!1,m.g.j){if(d=m.g.j,m.g.j=null,d.V)throw d.U;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function it(m){this.next=function(d){return C(m.g),m.g.i?d=z(m,m.g.i.next,d,m.g.o):(m.g.o(d),d=rt(m)),d},this.throw=function(d){return C(m.g),m.g.i?d=z(m,m.g.i.throw,d,m.g.o):(K(m.g,d),d=rt(m)),d},this.return=function(d){return q(m,d)},this[Symbol.iterator]=function(){return this}}function Y(m,d){return d=new it(new G(d)),k&&m.prototype&&k(d,m.prototype),d}function ot(m,d){m instanceof String&&(m+="");var b=0,A=!1,R={next:function(){if(!A&&b<m.length){var V=b++;return{value:d(V,m[V]),done:!1}}return A=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}var xt=typeof Object.assign=="function"?Object.assign:function(m,d){for(var b=1;b<arguments.length;b++){var A=arguments[b];if(A)for(var R in A)Object.prototype.hasOwnProperty.call(A,R)&&(m[R]=A[R])}return m};s("Object.assign",function(m){return m||xt}),s("Promise",function(m){function d(M){this.h=0,this.i=void 0,this.g=[],this.o=!1;var j=this.j();try{M(j.resolve,j.reject)}catch(J){j.reject(J)}}function b(){this.g=null}function A(M){return M instanceof d?M:new d(function(j){j(M)})}if(m)return m;b.prototype.h=function(M){if(this.g==null){this.g=[];var j=this;this.i(function(){j.l()})}this.g.push(M)};var R=o.setTimeout;b.prototype.i=function(M){R(M,0)},b.prototype.l=function(){for(;this.g&&this.g.length;){var M=this.g;this.g=[];for(var j=0;j<M.length;++j){var J=M[j];M[j]=null;try{J()}catch(st){this.j(st)}}}this.g=null},b.prototype.j=function(M){this.i(function(){throw M})},d.prototype.j=function(){function M(st){return function(dt){J||(J=!0,st.call(j,dt))}}var j=this,J=!1;return{resolve:M(this.C),reject:M(this.l)}},d.prototype.C=function(M){if(M===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(M instanceof d)this.F(M);else{t:switch(typeof M){case"object":var j=M!=null;break t;case"function":j=!0;break t;default:j=!1}j?this.u(M):this.m(M)}},d.prototype.u=function(M){var j=void 0;try{j=M.then}catch(J){this.l(J);return}typeof j=="function"?this.G(j,M):this.m(M)},d.prototype.l=function(M){this.s(2,M)},d.prototype.m=function(M){this.s(1,M)},d.prototype.s=function(M,j){if(this.h!=0)throw Error("Cannot settle("+M+", "+j+"): Promise already settled in state"+this.h);this.h=M,this.i=j,this.h===2&&this.D(),this.A()},d.prototype.D=function(){var M=this;R(function(){if(M.B()){var j=o.console;typeof j<"u"&&j.error(M.i)}},1)},d.prototype.B=function(){if(this.o)return!1;var M=o.CustomEvent,j=o.Event,J=o.dispatchEvent;return typeof J>"u"?!0:(typeof M=="function"?M=new M("unhandledrejection",{cancelable:!0}):typeof j=="function"?M=new j("unhandledrejection",{cancelable:!0}):(M=o.document.createEvent("CustomEvent"),M.initCustomEvent("unhandledrejection",!1,!0,M)),M.promise=this,M.reason=this.i,J(M))},d.prototype.A=function(){if(this.g!=null){for(var M=0;M<this.g.length;++M)V.h(this.g[M]);this.g=null}};var V=new b;return d.prototype.F=function(M){var j=this.j();M.J(j.resolve,j.reject)},d.prototype.G=function(M,j){var J=this.j();try{M.call(j,J.resolve,J.reject)}catch(st){J.reject(st)}},d.prototype.then=function(M,j){function J(Tt,yt){return typeof Tt=="function"?function(at){try{st(Tt(at))}catch(l){dt(l)}}:yt}var st,dt,_t=new d(function(Tt,yt){st=Tt,dt=yt});return this.J(J(M,st),J(j,dt)),_t},d.prototype.catch=function(M){return this.then(void 0,M)},d.prototype.J=function(M,j){function J(){switch(st.h){case 1:M(st.i);break;case 2:j(st.i);break;default:throw Error("Unexpected state: "+st.h)}}var st=this;this.g==null?V.h(J):this.g.push(J),this.o=!0},d.resolve=A,d.reject=function(M){return new d(function(j,J){J(M)})},d.race=function(M){return new d(function(j,J){for(var st=i(M),dt=st.next();!dt.done;dt=st.next())A(dt.value).J(j,J)})},d.all=function(M){var j=i(M),J=j.next();return J.done?A([]):new d(function(st,dt){function _t(at){return function(l){Tt[at]=l,yt--,yt==0&&st(Tt)}}var Tt=[],yt=0;do Tt.push(void 0),yt++,A(J.value).J(_t(Tt.length-1),dt),J=j.next();while(!J.done)})},d}),s("Object.is",function(m){return m||function(d,b){return d===b?d!==0||1/d===1/b:d!==d&&b!==b}}),s("Array.prototype.includes",function(m){return m||function(d,b){var A=this;A instanceof String&&(A=String(A));var R=A.length;for(b=b||0,0>b&&(b=Math.max(b+R,0));b<R;b++){var V=A[b];if(V===d||Object.is(V,d))return!0}return!1}}),s("String.prototype.includes",function(m){return m||function(d,b){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,b||0)!==-1}}),s("Array.prototype.keys",function(m){return m||function(){return ot(this,function(d){return d})}});var $t=this||self;function ht(m,d){m=m.split(".");var b=$t;m[0]in b||typeof b.execScript>"u"||b.execScript("var "+m[0]);for(var A;m.length&&(A=m.shift());)m.length||d===void 0?b[A]&&b[A]!==Object.prototype[A]?b=b[A]:b=b[A]={}:b[A]=d}function Yt(m,d){return d=String.fromCharCode.apply(null,d),m==null?d:m+d}var te,pr=typeof TextDecoder<"u",ce,mr=typeof TextEncoder<"u";function Qe(m){if(mr)m=(ce||(ce=new TextEncoder)).encode(m);else{var d=void 0;d=d===void 0?!1:d;for(var b=0,A=new Uint8Array(3*m.length),R=0;R<m.length;R++){var V=m.charCodeAt(R);if(128>V)A[b++]=V;else{if(2048>V)A[b++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&R<m.length){var M=m.charCodeAt(++R);if(56320<=M&&57343>=M){V=1024*(V-55296)+M-56320+65536,A[b++]=V>>18|240,A[b++]=V>>12&63|128,A[b++]=V>>6&63|128,A[b++]=V&63|128;continue}else R--}if(d)throw Error("Found an unpaired surrogate");V=65533}A[b++]=V>>12|224,A[b++]=V>>6&63|128}A[b++]=V&63|128}}m=A.subarray(0,b)}return m}var Sn={},Tr=null;function Ds(m,d){d===void 0&&(d=0),Cs(),d=Sn[d];for(var b=Array(Math.floor(m.length/3)),A=d[64]||"",R=0,V=0;R<m.length-2;R+=3){var M=m[R],j=m[R+1],J=m[R+2],st=d[M>>2];M=d[(M&3)<<4|j>>4],j=d[(j&15)<<2|J>>6],J=d[J&63],b[V++]=st+M+j+J}switch(st=0,J=A,m.length-R){case 2:st=m[R+1],J=d[(st&15)<<2]||A;case 1:m=m[R],b[V]=d[m>>2]+d[(m&3)<<4|st>>4]+J+A}return b.join("")}function Uo(m){var d=m.length,b=3*d/4;b%3?b=Math.floor(b):"=.".indexOf(m[d-1])!=-1&&(b="=.".indexOf(m[d-2])!=-1?b-2:b-1);var A=new Uint8Array(b),R=0;return Fs(m,function(V){A[R++]=V}),A.subarray(0,R)}function Fs(m,d){function b(J){for(;A<m.length;){var st=m.charAt(A++),dt=Tr[st];if(dt!=null)return dt;if(!/^[\s\xa0]*$/.test(st))throw Error("Unknown base64 encoding at char: "+st)}return J}Cs();for(var A=0;;){var R=b(-1),V=b(0),M=b(64),j=b(64);if(j===64&&R===-1)break;d(R<<2|V>>4),M!=64&&(d(V<<4&240|M>>2),j!=64&&d(M<<6&192|j))}}function Cs(){if(!Tr){Tr={};for(var m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],b=0;5>b;b++){var A=m.concat(d[b].split(""));Sn[b]=A;for(var R=0;R<A.length;R++){var V=A[R];Tr[V]===void 0&&(Tr[V]=R)}}}}var Nr=typeof Uint8Array.prototype.slice=="function",jo;function oo(m,d,b){return d===b?jo||(jo=new Uint8Array(0)):Nr?m.slice(d,b):new Uint8Array(m.subarray(d,b))}var tr=0,er=0;function Jt(m,d){d=d===void 0?{}:d,d=d.v===void 0?!1:d.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=d,m&&en(this,m)}function en(m,d){d=d.constructor===Uint8Array?d:d.constructor===ArrayBuffer?new Uint8Array(d):d.constructor===Array?new Uint8Array(d):d.constructor===String?Uo(d):d instanceof Uint8Array?new Uint8Array(d.buffer,d.byteOffset,d.byteLength):new Uint8Array(0),m.h=d,m.l=0,m.j=m.h.length,m.g=m.l}Jt.prototype.reset=function(){this.g=this.l};function kn(m){for(var d=128,b=0,A=0,R=0;4>R&&128<=d;R++)d=m.h[m.g++],b|=(d&127)<<7*R;if(128<=d&&(d=m.h[m.g++],b|=(d&127)<<28,A|=(d&127)>>4),128<=d)for(R=0;5>R&&128<=d;R++)d=m.h[m.g++],A|=(d&127)<<7*R+3;if(128>d)return m=b>>>0,d=A>>>0,(A=d&2147483648)&&(m=~m+1>>>0,d=~d>>>0,m==0&&(d=d+1>>>0)),m=4294967296*d+(m>>>0),A?-m:m;m.m=!0}Jt.prototype.i=function(){var m=this.h,d=m[this.g],b=d&127;return 128>d?(this.g+=1,b):(d=m[this.g+1],b|=(d&127)<<7,128>d?(this.g+=2,b):(d=m[this.g+2],b|=(d&127)<<14,128>d?(this.g+=3,b):(d=m[this.g+3],b|=(d&127)<<21,128>d?(this.g+=4,b):(d=m[this.g+4],b|=(d&15)<<28,128>d?(this.g+=5,b>>>0):(this.g+=5,128<=m[this.g++]&&128<=m[this.g++]&&128<=m[this.g++]&&128<=m[this.g++]&&this.g++,b)))))},Jt.prototype.o=function(){var m=this.h[this.g],d=this.h[this.g+1],b=this.h[this.g+2],A=this.h[this.g+3];return this.g+=4,b=(m<<0|d<<8|b<<16|A<<24)>>>0,m=2*(b>>31)+1,d=b>>>23&255,b&=8388607,d==255?b?NaN:1/0*m:d==0?m*Math.pow(2,-149)*b:m*Math.pow(2,d-150)*(b+Math.pow(2,23))};var so=[];function rr(){this.g=new Uint8Array(64),this.h=0}rr.prototype.push=function(m){if(!(this.h+1<this.g.length)){var d=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(d)}this.g[this.h++]=m},rr.prototype.length=function(){return this.h},rr.prototype.end=function(){var m=this.g,d=this.h;return this.h=0,oo(m,0,d)};function fr(m,d){for(;127<d;)m.push(d&127|128),d>>>=7;m.push(d)}function rn(m){var d={},b=d.N===void 0?!1:d.N;this.o={v:d.v===void 0?!1:d.v},this.N=b,d=this.o,so.length?(b=so.pop(),d&&(b.v=d.v),m&&en(b,m),m=b):m=new Jt(m,d),this.g=m,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}rn.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function Fe(m){var d=m.g;if((d=d.g==d.j)||(d=m.j)||(d=m.g,d=d.m||0>d.g||d.g>d.j),d)return!1;m.m=m.g.g,d=m.g.i();var b=d&7;return b!=0&&b!=5&&b!=1&&b!=2&&b!=3&&b!=4?(m.j=!0,!1):(m.i=d,m.l=d>>>3,m.h=b,!0)}function hr(m){switch(m.h){case 0:if(m.h!=0)hr(m);else{for(m=m.g;m.h[m.g]&128;)m.g++;m.g++}break;case 1:m.h!=1?hr(m):(m=m.g,m.g+=8);break;case 2:if(m.h!=2)hr(m);else{var d=m.g.i();m=m.g,m.g+=d}break;case 5:m.h!=5?hr(m):(m=m.g,m.g+=4);break;case 3:d=m.l;do{if(!Fe(m)){m.j=!0;break}if(m.h==4){m.l!=d&&(m.j=!0);break}hr(m)}while(1);break;default:m.j=!0}}function io(m,d,b){var A=m.g.j,R=m.g.i(),V=m.g.g+R;if(m.g.j=V,b(d,m),b=V-m.g.g,b!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+R+" bytes, instead read "+(R-b)+" bytes, either the data ended unexpectedly or the message misreported its own length");return m.g.g=V,m.g.j=A,d}function oe(m){return m.g.o()}function In(m){var d=m.g.i();m=m.g;var b=m.g;m.g+=d,m=m.h;var A;if(pr)(A=te)||(A=te=new TextDecoder("utf-8",{fatal:!1})),A=A.decode(m.subarray(b,b+d));else{d=b+d;for(var R=[],V=null,M,j,J;b<d;)M=m[b++],128>M?R.push(M):224>M?b>=d?R.push(65533):(j=m[b++],194>M||(j&192)!==128?(b--,R.push(65533)):R.push((M&31)<<6|j&63)):240>M?b>=d-1?R.push(65533):(j=m[b++],(j&192)!==128||M===224&&160>j||M===237&&160<=j||((A=m[b++])&192)!==128?(b--,R.push(65533)):R.push((M&15)<<12|(j&63)<<6|A&63)):244>=M?b>=d-2?R.push(65533):(j=m[b++],(j&192)!==128||(M<<28)+(j-144)>>30||((A=m[b++])&192)!==128||((J=m[b++])&192)!==128?(b--,R.push(65533)):(M=(M&7)<<18|(j&63)<<12|(A&63)<<6|J&63,M-=65536,R.push((M>>10&1023)+55296,(M&1023)+56320))):R.push(65533),8192<=R.length&&(V=Yt(V,R),R.length=0);A=Yt(V,R)}return A}function Wo(m,d,b){var A=m.g.i();for(A=m.g.g+A;m.g.g<A;)b.push(d.call(m.g))}function Ho(m,d){m.h==2?Wo(m,Jt.prototype.o,d):d.push(oe(m))}function Pr(){this.h=[],this.i=0,this.g=new rr}function nr(m,d){d.length!==0&&(m.h.push(d),m.i+=d.length)}function _n(m){var d=m.i+m.g.length();if(d===0)return new Uint8Array(0);d=new Uint8Array(d);for(var b=m.h,A=b.length,R=0,V=0;V<A;V++){var M=b[V];M.length!==0&&(d.set(M,R),R+=M.length)}return b=m.g,A=b.h,A!==0&&(d.set(b.g.subarray(0,A),R),b.h=0),m.h=[d],d}function Ce(m,d,b){if(b!=null){fr(m.g,8*d+5),m=m.g;var A=b;A=(b=0>A?1:0)?-A:A,A===0?0<1/A?tr=er=0:(er=0,tr=2147483648):isNaN(A)?(er=0,tr=2147483647):34028234663852886e22<A?(er=0,tr=(b<<31|2139095040)>>>0):11754943508222875e-54>A?(A=Math.round(A/Math.pow(2,-149)),er=0,tr=(b<<31|A)>>>0):(d=Math.floor(Math.log(A)/Math.LN2),A*=Math.pow(2,-d),A=Math.round(8388608*A),16777216<=A&&++d,er=0,tr=(b<<31|d+127<<23|A&8388607)>>>0),b=tr,m.push(b>>>0&255),m.push(b>>>8&255),m.push(b>>>16&255),m.push(b>>>24&255)}}var An=typeof Uint8Array=="function";function Ko(m,d,b){if(m!=null)return typeof m=="object"?An&&m instanceof Uint8Array?b(m):qo(m,d,b):d(m)}function qo(m,d,b){if(Array.isArray(m)){for(var A=Array(m.length),R=0;R<m.length;R++)A[R]=Ko(m[R],d,b);return Array.isArray(m)&&m.W&&me(A),A}A={};for(R in m)A[R]=Ko(m[R],d,b);return A}function Rs(m){return typeof m=="number"?isFinite(m)?m:String(m):m}var Ls={W:{value:!0,configurable:!0}};function me(m){return Array.isArray(m)&&!Object.isFrozen(m)&&Object.defineProperties(m,Ls),m}var Zt;function ee(m,d,b){var A=Zt;Zt=null,m||(m=A),A=this.constructor.ca,m||(m=A?[A]:[]),this.j=A?0:-1,this.m=this.g=null,this.h=m;t:{if(A=this.h.length,m=A-1,A&&(A=this.h[m],!(A===null||typeof A!="object"||Array.isArray(A)||An&&A instanceof Uint8Array))){this.l=m-this.j,this.i=A;break t}d!==void 0&&-1<d?(this.l=Math.max(d,m+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(b)for(d=0;d<b.length;d++)m=b[d],m<this.l?(m+=this.j,(A=this.h[m])?me(A):this.h[m]=Te):(On(this),(A=this.i[m])?me(A):this.i[m]=Te)}var Te=Object.freeze(me([]));function On(m){var d=m.l+m.j;m.h[d]||(m.i=m.h[d]={})}function Mt(m,d,b){return d===-1?null:b!==void 0&&b||d>=m.l?m.i?m.i[d]:void 0:m.h[d+m.j]}function $n(m,d){var b=b===void 0?!1:b,A=Mt(m,d,b);return A==null&&(A=Te),A===Te&&(A=me([]),Nt(m,d,A,b)),A}function Xo(m){var d=$n(m,3);if(m.m||(m.m={}),!m.m[3]){for(var b=0;b<d.length;b++)d[b]=+d[b];m.m[3]=!0}return d}function Er(m,d,b){return m=Mt(m,d),m==null?b:m}function Ue(m,d,b){return m=Mt(m,d),m=m==null?m:+m,m==null?b===void 0?0:b:m}function Nt(m,d,b,A){A!==void 0&&A||d>=m.l?(On(m),m.i[d]=b):m.h[d+m.j]=b}function Ps(m,d,b){if(b===-1)return null;if(m.g||(m.g={}),!m.g[b]){var A=Mt(m,b,!1);A&&(m.g[b]=new d(A))}return m.g[b]}function ao(m,d){m.g||(m.g={});var b=m.g[1];if(!b){var A=$n(m,1);b=[];for(var R=0;R<A.length;R++)b[R]=new d(A[R]);m.g[1]=b}return b}function Dn(m,d,b){var A=A===void 0?!1:A;m.g||(m.g={});var R=b&&Sr(b,!1);m.g[d]=b,Nt(m,d,R,A)}function Fn(m,d,b,A){var R=ao(m,b);d=d||new b,m=$n(m,1),A!=null?(R.splice(A,0,d),m.splice(A,0,Sr(d,!1))):(R.push(d),m.push(Sr(d,!1)))}ee.prototype.toJSON=function(){var m=Sr(this,!1);return qo(m,Rs,Ds)};function Sr(m,d){if(m.g)for(var b in m.g){var A=m.g[b];if(Array.isArray(A))for(var R=0;R<A.length;R++)A[R]&&Sr(A[R],d);else A&&Sr(A,d)}return m.h}ee.prototype.toString=function(){return Sr(this,!1).toString()};function uo(m,d){if(m=m.o){nr(d,d.g.end());for(var b=0;b<m.length;b++)nr(d,m[b])}}function je(m,d){if(d.h==4)return!1;var b=d.m;return hr(d),d.N||(d=oo(d.g.h,b,d.g.g),(b=m.o)?b.push(d):m.o=[d]),!0}function kr(m){ee.call(this,m,-1,Wa)}O(kr,ee),kr.prototype.getRows=function(){return Mt(this,1)},kr.prototype.getCols=function(){return Mt(this,2)},kr.prototype.getPackedDataList=function(){return Xo(this)},kr.prototype.getLayout=function(){return Er(this,4,0)};function Ms(m,d){for(;Fe(d);)switch(d.i){case 8:var b=d.g.i();Nt(m,1,b);break;case 16:b=d.g.i(),Nt(m,2,b);break;case 29:case 26:Ho(d,m.getPackedDataList());break;case 32:b=kn(d.g),Nt(m,4,b);break;default:if(!je(m,d))return m}return m}var Wa=[3];function le(m,d){var b=void 0;return new(b||(b=Promise))(function(A,R){function V(J){try{j(d.next(J))}catch(st){R(st)}}function M(J){try{j(d.throw(J))}catch(st){R(st)}}function j(J){J.done?A(J.value):new b(function(st){st(J.value)}).then(V,M)}j((d=d.apply(m,void 0)).next())})}function Ir(m){ee.call(this,m)}O(Ir,ee);function Bs(m,d){for(;Fe(d);)switch(d.i){case 8:var b=d.g.i();Nt(m,1,b);break;case 21:b=oe(d),Nt(m,2,b);break;case 26:b=In(d),Nt(m,3,b);break;case 34:b=In(d),Nt(m,4,b);break;default:if(!je(m,d))return m}return m}function co(m){ee.call(this,m,-1,Gs)}O(co,ee),co.prototype.addClassification=function(m,d){return Fn(this,m,Ir,d),this};var Gs=[1];function nn(m){ee.call(this,m)}O(nn,ee);function Ha(m,d){for(;Fe(d);)switch(d.i){case 13:var b=oe(d);Nt(m,1,b);break;case 21:b=oe(d),Nt(m,2,b);break;case 29:b=oe(d),Nt(m,3,b);break;case 37:b=oe(d),Nt(m,4,b);break;case 45:b=oe(d),Nt(m,5,b);break;default:if(!je(m,d))return m}return m}function zs(m){ee.call(this,m,-1,Us)}O(zs,ee);function Vs(m){t:{var d=new zs;for(m=new rn(m);Fe(m);)switch(m.i){case 10:var b=io(m,new nn,Ha);Fn(d,b,nn,void 0);break;default:if(!je(d,m))break t}}return d}var Us=[1];function lo(m){ee.call(this,m)}O(lo,ee);function Mr(m){ee.call(this,m,-1,qa)}O(Mr,ee),Mr.prototype.getVertexType=function(){return Er(this,1,0)},Mr.prototype.getPrimitiveType=function(){return Er(this,2,0)},Mr.prototype.getVertexBufferList=function(){return Xo(this)},Mr.prototype.getIndexBufferList=function(){return $n(this,4)};function Ka(m,d){for(;Fe(d);)switch(d.i){case 8:var b=kn(d.g);Nt(m,1,b);break;case 16:b=kn(d.g),Nt(m,2,b);break;case 29:case 26:Ho(d,m.getVertexBufferList());break;case 32:case 34:b=d;var A=m.getIndexBufferList();b.h==2?Wo(b,Jt.prototype.i,A):A.push(b.g.i());break;default:if(!je(m,d))return m}return m}var qa=[3,4];function po(m){ee.call(this,m)}O(po,ee),po.prototype.getMesh=function(){return Ps(this,Mr,1)},po.prototype.getPoseTransformMatrix=function(){return Ps(this,kr,2)};function js(m){t:{var d=new po;for(m=new rn(m);Fe(m);)switch(m.i){case 10:var b=io(m,new Mr,Ka);Dn(d,1,b);break;case 18:b=io(m,new kr,Ms),Dn(d,2,b);break;default:if(!je(d,m))break t}}return d}function Yo(m,d,b){if(b=m.createShader(b===0?m.VERTEX_SHADER:m.FRAGMENT_SHADER),m.shaderSource(b,d),m.compileShader(b),!m.getShaderParameter(b,m.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+m.getShaderInfoLog(b));return b}function Jo(m){return ao(m,Ir).map(function(d){return{index:Er(d,1,0),Y:Ue(d,2),label:Mt(d,3)!=null?Er(d,3,""):void 0,displayName:Mt(d,4)!=null?Er(d,4,""):void 0}})}function Zo(m){return{x:Ue(m,1),y:Ue(m,2),z:Ue(m,3),visibility:Mt(m,4)!=null?Ue(m,4):void 0}}function Cn(m,d){this.h=m,this.g=d,this.l=0}function on(m,d,b){return We(m,d),typeof m.g.canvas.transferToImageBitmap=="function"?Promise.resolve(m.g.canvas.transferToImageBitmap()):b?Promise.resolve(m.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(m.g.canvas):(m.i===void 0&&(m.i=document.createElement("canvas")),new Promise(function(A){m.i.height=m.g.canvas.height,m.i.width=m.g.canvas.width,m.i.getContext("2d",{}).drawImage(m.g.canvas,0,0,m.g.canvas.width,m.g.canvas.height),A(m.i)}))}function We(m,d){var b=m.g;if(m.m===void 0){var A=Yo(b,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=Yo(b,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),V=b.createProgram();if(b.attachShader(V,A),b.attachShader(V,R),b.linkProgram(V),!b.getProgramParameter(V,b.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+b.getProgramInfoLog(V));A=m.m=V,b.useProgram(A),R=b.getUniformLocation(A,"sampler0"),m.j={I:b.getAttribLocation(A,"aVertex"),H:b.getAttribLocation(A,"aTex"),da:R},m.s=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,m.s),b.enableVertexAttribArray(m.j.I),b.vertexAttribPointer(m.j.I,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),m.o=b.createBuffer(),b.bindBuffer(b.ARRAY_BUFFER,m.o),b.enableVertexAttribArray(m.j.H),b.vertexAttribPointer(m.j.H,2,b.FLOAT,!1,0,0),b.bufferData(b.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),b.STATIC_DRAW),b.bindBuffer(b.ARRAY_BUFFER,null),b.uniform1i(R,0)}A=m.j,b.useProgram(m.m),b.canvas.width=d.width,b.canvas.height=d.height,b.viewport(0,0,d.width,d.height),b.activeTexture(b.TEXTURE0),m.h.bindTexture2d(d.glName),b.enableVertexAttribArray(A.I),b.bindBuffer(b.ARRAY_BUFFER,m.s),b.vertexAttribPointer(A.I,2,b.FLOAT,!1,0,0),b.enableVertexAttribArray(A.H),b.bindBuffer(b.ARRAY_BUFFER,m.o),b.vertexAttribPointer(A.H,2,b.FLOAT,!1,0,0),b.bindFramebuffer(b.DRAW_FRAMEBUFFER?b.DRAW_FRAMEBUFFER:b.FRAMEBUFFER,null),b.clearColor(0,0,0,0),b.clear(b.COLOR_BUFFER_BIT),b.colorMask(!0,!0,!0,!0),b.drawArrays(b.TRIANGLE_FAN,0,4),b.disableVertexAttribArray(A.I),b.disableVertexAttribArray(A.H),b.bindBuffer(b.ARRAY_BUFFER,null),m.h.bindTexture2d(0)}function Xa(m){this.g=m}var Ya=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Ws(m,d){return d+m}function Qo(m,d){window[m]=d}function Re(m){var d=document.createElement("script");return d.setAttribute("src",m),d.setAttribute("crossorigin","anonymous"),new Promise(function(b){d.addEventListener("load",function(){b()},!1),d.addEventListener("error",function(){b()},!1),document.body.appendChild(d)})}function Hs(){return le(this,function m(){return Y(m,function(d){switch(d.g){case 1:return d.m=2,P(d,WebAssembly.instantiate(Ya),4);case 4:d.g=3,d.m=0;break;case 2:return d.m=0,d.j=null,d.return(!1);case 3:return d.return(!0)}})})}function Br(m){if(this.g=m,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=m&&m.locateFile||Ws,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=d,m.options){d=i(Object.keys(m.options));for(var b=d.next();!b.done;b=d.next()){b=b.value;var A=m.options[b].default;A!==void 0&&(this.j[b]=typeof A=="function"?A():A)}}}e=Br.prototype,e.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Ks(m,d){return m.g.files===void 0?[]:typeof m.g.files=="function"?m.g.files(d):m.g.files}function ts(m){return le(m,function d(){var b=this,A,R,V,M,j,J,st,dt,_t,Tt,yt;return Y(d,function(at){switch(at.g){case 1:return A=b,b.R?(R=Ks(b,b.j),P(at,Hs(),2)):at.return();case 2:if(V=at.h,typeof window=="object")return Qo("createMediapipeSolutionsWasm",{locateFile:b.locateFile}),Qo("createMediapipeSolutionsPackedAssets",{locateFile:b.locateFile}),J=R.filter(function(l){return l.data!==void 0}),st=R.filter(function(l){return l.data===void 0}),dt=Promise.all(J.map(function(l){var y=sn(A,l.url);if(l.path!==void 0){var w=l.path;y=y.then(function(E){return A.overrideFile(w,E),Promise.resolve(E)})}return y})),_t=Promise.all(st.map(function(l){return l.simd===void 0||l.simd&&V||!l.simd&&!V?Re(A.locateFile(l.url,A.S)):Promise.resolve()})).then(function(){return le(A,function l(){var y,w,E=this;return Y(l,function(_){if(_.g==1)return y=window.createMediapipeSolutionsWasm,w=window.createMediapipeSolutionsPackedAssets,P(_,y(w),2);E.h=_.h,_.g=0})})}),Tt=function(){return le(A,function l(){var y=this;return Y(l,function(w){return y.g.graph&&y.g.graph.url?w=P(w,sn(y,y.g.graph.url),0):(w.g=0,w=void 0),w})})}(),P(at,Promise.all([_t,dt,Tt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=R.filter(function(l){return l.simd===void 0||l.simd&&V||!l.simd&&!V}).map(function(l){return A.locateFile(l.url,A.S)}),importScripts.apply(null,u(M)),P(at,createMediapipeSolutionsWasm(Module),6);case 6:b.h=at.h,b.l=new OffscreenCanvas(1,1),b.h.canvas=b.l,j=b.h.GL.createContext(b.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),b.h.GL.makeContextCurrent(j),at.g=4;break;case 7:if(b.l=document.createElement("canvas"),yt=b.l.getContext("webgl2",{}),!yt&&(yt=b.l.getContext("webgl",{}),!yt))return alert("Failed to create WebGL canvas context when passing video frame."),at.return();b.D=yt,b.h.canvas=b.l,b.h.createContext(b.l,!0,!0,{});case 4:b.i=new b.h.SolutionWasm,b.R=!1,at.g=0}})})}function Ja(m){return le(m,function d(){var b=this,A,R,V,M,j,J,st,dt;return Y(d,function(_t){if(_t.g==1){if(b.g.graph&&b.g.graph.url&&b.P===b.g.graph.url)return _t.return();if(b.o=!0,!b.g.graph||!b.g.graph.url){_t.g=2;return}return b.P=b.g.graph.url,P(_t,sn(b,b.g.graph.url),3)}for(_t.g!=2&&(A=_t.h,b.i.loadGraph(A)),R=i(Object.keys(b.B)),V=R.next();!V.done;V=R.next())M=V.value,b.i.overrideFile(M,b.B[M]);if(b.B={},b.g.listeners)for(j=i(b.g.listeners),J=j.next();!J.done;J=j.next())st=J.value,Qa(b,st);dt=b.j,b.j={},b.setOptions(dt),_t.g=0})})}e.reset=function(){return le(this,function m(){var d=this;return Y(m,function(b){d.i&&(d.i.reset(),d.m={},d.s={}),b.g=0})})},e.setOptions=function(m,d){var b=this;if(d=d||this.g.options){for(var A=[],R=[],V={},M=i(Object.keys(m)),j=M.next();!j.done;V={K:V.K,L:V.L},j=M.next()){var J=j.value;J in this.j&&this.j[J]===m[J]||(this.j[J]=m[J],j=d[J],j!==void 0&&(j.onChange&&(V.K=j.onChange,V.L=m[J],A.push(function(st){return function(){return le(b,function dt(){var _t,Tt=this;return Y(dt,function(yt){if(yt.g==1)return P(yt,st.K(st.L),2);_t=yt.h,_t===!0&&(Tt.o=!0),yt.g=0})})}}(V))),j.graphOptionXref&&(J={valueNumber:j.type===1?m[J]:0,valueBoolean:j.type===0?m[J]:!1,valueString:j.type===2?m[J]:""},j=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),j.graphOptionXref),J),R.push(j))))}(A.length!==0||R.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(R),this.u=(this.u===void 0?[]:this.u).concat(A))}};function Za(m){return le(m,function d(){var b=this,A,R,V,M,j,J,st;return Y(d,function(dt){switch(dt.g){case 1:if(!b.o)return dt.return();if(!b.u){dt.g=2;break}A=i(b.u),R=A.next();case 3:if(R.done){dt.g=5;break}return V=R.value,P(dt,V(),4);case 4:R=A.next(),dt.g=3;break;case 5:b.u=void 0;case 2:if(b.A){for(M=new b.h.GraphOptionChangeRequestList,j=i(b.A),J=j.next();!J.done;J=j.next())st=J.value,M.push_back(st);b.i.changeOptions(M),M.delete(),b.A=void 0}b.o=!1,dt.g=0}})})}e.initialize=function(){return le(this,function m(){var d=this;return Y(m,function(b){return b.g==1?P(b,ts(d),2):b.g!=3?P(b,Ja(d),3):P(b,Za(d),0)})})};function sn(m,d){return le(m,function b(){var A=this,R,V;return Y(b,function(M){return d in A.F?M.return(A.F[d]):(R=A.locateFile(d,""),V=fetch(R).then(function(j){return j.arrayBuffer()}),A.F[d]=V,M.return(V))})})}e.overrideFile=function(m,d){this.i?this.i.overrideFile(m,d):this.B[m]=d},e.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},e.send=function(m,d){return le(this,function b(){var A=this,R,V,M,j,J,st,dt,_t,Tt;return Y(b,function(yt){switch(yt.g){case 1:return A.g.inputs?(R=1e3*(d==null?performance.now():d),P(yt,A.C,2)):yt.return();case 2:return P(yt,A.initialize(),3);case 3:for(V=new A.h.PacketDataList,M=i(Object.keys(m)),j=M.next();!j.done;j=M.next())if(J=j.value,st=A.g.inputs[J]){t:{var at=A,l=m[J];switch(st.type){case"video":var y=at.m[st.stream];if(y||(y=new Cn(at.h,at.D),at.m[st.stream]=y),at=y,at.l===0&&(at.l=at.h.createTexture()),typeof HTMLVideoElement<"u"&&l instanceof HTMLVideoElement){var w=l.videoWidth;y=l.videoHeight}else typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement?(w=l.naturalWidth,y=l.naturalHeight):(w=l.width,y=l.height);y={glName:at.l,width:w,height:y},w=at.g,w.canvas.width=y.width,w.canvas.height=y.height,w.activeTexture(w.TEXTURE0),at.h.bindTexture2d(at.l),w.texImage2D(w.TEXTURE_2D,0,w.RGBA,w.RGBA,w.UNSIGNED_BYTE,l),at.h.bindTexture2d(0),at=y;break t;case"detections":for(y=at.m[st.stream],y||(y=new Xa(at.h),at.m[st.stream]=y),at=y,at.data||(at.data=new at.g.DetectionListData),at.data.reset(l.length),y=0;y<l.length;++y){w=l[y];var E=at.data,_=E.setBoundingBox,I=y,$=w.T,F=new lo;Nt(F,1,$.Z),Nt(F,2,$.$),Nt(F,3,$.height),Nt(F,4,$.width),Nt(F,5,$.rotation),Nt(F,6,$.X);var B=$=new Pr;Ce(B,1,Mt(F,1)),Ce(B,2,Mt(F,2)),Ce(B,3,Mt(F,3)),Ce(B,4,Mt(F,4)),Ce(B,5,Mt(F,5));var U=Mt(F,6);if(U!=null&&U!=null){fr(B.g,48);var H=B.g,Z=U;U=0>Z,Z=Math.abs(Z);var Q=Z>>>0;for(Z=Math.floor((Z-Q)/4294967296),Z>>>=0,U&&(Z=~Z>>>0,Q=(~Q>>>0)+1,4294967295<Q&&(Q=0,Z++,4294967295<Z&&(Z=0))),tr=Q,er=Z,U=tr,Q=er;0<Q||127<U;)H.push(U&127|128),U=(U>>>7|Q<<25)>>>0,Q>>>=7;H.push(U)}if(uo(F,B),$=_n($),_.call(E,I,$),w.O)for(E=0;E<w.O.length;++E)F=w.O[E],B=!!F.visibility,_=at.data,I=_.addNormalizedLandmark,$=y,F=Object.assign(Object.assign({},F),{visibility:B?F.visibility:0}),B=new nn,Nt(B,1,F.x),Nt(B,2,F.y),Nt(B,3,F.z),F.visibility&&Nt(B,4,F.visibility),H=F=new Pr,Ce(H,1,Mt(B,1)),Ce(H,2,Mt(B,2)),Ce(H,3,Mt(B,3)),Ce(H,4,Mt(B,4)),Ce(H,5,Mt(B,5)),uo(B,H),F=_n(F),I.call(_,$,F);if(w.M)for(E=0;E<w.M.length;++E){if(_=at.data,I=_.addClassification,$=y,F=w.M[E],B=new Ir,Nt(B,2,F.Y),F.index&&Nt(B,1,F.index),F.label&&Nt(B,3,F.label),F.displayName&&Nt(B,4,F.displayName),H=F=new Pr,Q=Mt(B,1),Q!=null&&Q!=null)if(fr(H.g,8),U=H.g,0<=Q)fr(U,Q);else{for(Z=0;9>Z;Z++)U.push(Q&127|128),Q>>=7;U.push(1)}Ce(H,2,Mt(B,2)),U=Mt(B,3),U!=null&&(U=Qe(U),fr(H.g,26),fr(H.g,U.length),nr(H,H.g.end()),nr(H,U)),U=Mt(B,4),U!=null&&(U=Qe(U),fr(H.g,34),fr(H.g,U.length),nr(H,H.g.end()),nr(H,U)),uo(B,H),F=_n(F),I.call(_,$,F)}}at=at.data;break t;default:at={}}}switch(dt=at,_t=st.stream,st.type){case"video":V.pushTexture2d(Object.assign(Object.assign({},dt),{stream:_t,timestamp:R}));break;case"detections":Tt=dt,Tt.stream=_t,Tt.timestamp=R,V.pushDetectionList(Tt);break;default:throw Error("Unknown input config type: '"+st.type+"'")}}return A.i.send(V),P(yt,A.C,4);case 4:V.delete(),yt.g=0}})})};function qs(m,d,b){return le(m,function A(){var R,V,M,j,J,st,dt=this,_t,Tt,yt,at,l,y,w,E;return Y(A,function(_){switch(_.g){case 1:if(!b)return _.return(d);for(R={},V=0,M=i(Object.keys(b)),j=M.next();!j.done;j=M.next())J=j.value,st=b[J],typeof st!="string"&&st.type==="texture"&&d[st.stream]!==void 0&&++V;1<V&&(dt.G=!1),_t=i(Object.keys(b)),j=_t.next();case 2:if(j.done){_.g=4;break}if(Tt=j.value,yt=b[Tt],typeof yt=="string")return w=R,E=Tt,P(_,Xs(dt,Tt,d[yt]),14);if(at=d[yt.stream],yt.type==="detection_list"){if(at){for(var I=at.getRectList(),$=at.getLandmarksList(),F=at.getClassificationsList(),B=[],U=0;U<I.size();++U){var H=I.get(U);t:{var Z=new lo;for(H=new rn(H);Fe(H);)switch(H.i){case 13:var Q=oe(H);Nt(Z,1,Q);break;case 21:Q=oe(H),Nt(Z,2,Q);break;case 29:Q=oe(H),Nt(Z,3,Q);break;case 37:Q=oe(H),Nt(Z,4,Q);break;case 45:Q=oe(H),Nt(Z,5,Q);break;case 48:Q=kn(H.g),Nt(Z,6,Q);break;default:if(!je(Z,H))break t}}Z={Z:Ue(Z,1),$:Ue(Z,2),height:Ue(Z,3),width:Ue(Z,4),rotation:Ue(Z,5,0),X:Er(Z,6,0)},H=ao(Vs($.get(U)),nn).map(Zo);var nt=F.get(U);t:for(Q=new co,nt=new rn(nt);Fe(nt);)switch(nt.i){case 10:Q.addClassification(io(nt,new Ir,Bs));break;default:if(!je(Q,nt))break t}Z={T:Z,O:H,M:Jo(Q)},B.push(Z)}I=B}else I=[];R[Tt]=I,_.g=7;break}if(yt.type==="proto_list"){if(at){for(I=Array(at.size()),$=0;$<at.size();$++)I[$]=at.get($);at.delete()}else I=[];R[Tt]=I,_.g=7;break}if(at===void 0){_.g=3;break}if(yt.type==="float_list"){R[Tt]=at,_.g=7;break}if(yt.type==="proto"){R[Tt]=at,_.g=7;break}if(yt.type!=="texture")throw Error("Unknown output config type: '"+yt.type+"'");return l=dt.s[Tt],l||(l=new Cn(dt.h,dt.D),dt.s[Tt]=l),P(_,on(l,at,dt.G),13);case 13:y=_.h,R[Tt]=y;case 7:yt.transform&&R[Tt]&&(R[Tt]=yt.transform(R[Tt])),_.g=3;break;case 14:w[E]=_.h;case 3:j=_t.next(),_.g=2;break;case 4:return _.return(R)}})})}function Xs(m,d,b){return le(m,function A(){var R=this,V;return Y(A,function(M){return typeof b=="number"||b instanceof Uint8Array||b instanceof R.h.Uint8BlobList?M.return(b):b instanceof R.h.Texture2dDataOut?(V=R.s[d],V||(V=new Cn(R.h,R.D),R.s[d]=V),M.return(on(V,b,R.G))):M.return(void 0)})})}function Qa(m,d){for(var b=d.name||"$",A=[].concat(u(d.wants)),R=new m.h.StringList,V=i(d.wants),M=V.next();!M.done;M=V.next())R.push_back(M.value);V=m.h.PacketListener.implement({onResults:function(j){for(var J={},st=0;st<d.wants.length;++st)J[A[st]]=j.get(st);var dt=m.listeners[b];dt&&(m.C=qs(m,J,d.outs).then(function(_t){_t=dt(_t);for(var Tt=0;Tt<d.wants.length;++Tt){var yt=J[A[Tt]];typeof yt=="object"&&yt.hasOwnProperty&&yt.hasOwnProperty("delete")&&yt.delete()}_t&&(m.C=_t)}))}}),m.i.attachMultiListener(R,V),R.delete()}e.onResults=function(m,d){this.listeners[d||"$"]=m},ht("Solution",Br),ht("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function tu(m){m=js(m);var d=m.getMesh();if(!d)return m;var b=new Float32Array(d.getVertexBufferList());d.getVertexBufferList=function(){return b};var A=new Uint32Array(d.getIndexBufferList());return d.getIndexBufferList=function(){return A},m}var es={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(m){return m.map(tu)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(m){return m.map(function(d){return ao(Vs(d),nn).map(Zo)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},rs=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],ns=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],os=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ss=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],is=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],as=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Ys=[].concat(u(rs),u(ns),u(os),u(ss),u(is),u(as));function Js(m){m=m||{},m=Object.assign(Object.assign({},es),m),this.g=new Br(m)}e=Js.prototype,e.close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(m){this.g.onResults(m)},e.initialize=function(){return le(this,function m(){var d=this;return Y(m,function(b){return P(b,d.g.initialize(),0)})})},e.reset=function(){this.g.reset()},e.send=function(m){return le(this,function d(){var b=this;return Y(d,function(A){return P(A,b.g.send(m),0)})})},e.setOptions=function(m){this.g.setOptions(m)},ht("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),ht("FaceMesh",Js),ht("FACEMESH_LIPS",rs),ht("FACEMESH_LEFT_EYE",ns),ht("FACEMESH_LEFT_EYEBROW",os),ht("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),ht("FACEMESH_RIGHT_EYE",ss),ht("FACEMESH_RIGHT_EYEBROW",is),ht("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),ht("FACEMESH_FACE_OVAL",as),ht("FACEMESH_CONTOURS",Ys),ht("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),ht("matrixDataToMatrix",function(m){for(var d=m.getCols(),b=m.getRows(),A=m.getPackedDataList(),R=[],V=0;V<b;V++)R.push(Array(d));for(V=0;V<b;V++)for(var M=0;M<d;M++){var j=m.getLayout()===1?V*d+M:M*b+V;R[V][M]=A[j]}return R}),ht("VERSION","0.4.1633559619")}).call(e1)});var i2=He((r9,s2)=>{s2.exports=Vt;var ir=null;try{ir=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function Vt(e,t,r){this.low=e|0,this.high=t|0,this.unsigned=!!r}Vt.prototype.__isLong__;Object.defineProperty(Vt.prototype,"__isLong__",{value:!0});function Be(e){return(e&&e.__isLong__)===!0}Vt.isLong=Be;var Yp={},Jp={};function Gn(e,t){var r,n,o;return t?(e>>>=0,(o=0<=e&&e<256)&&(n=Jp[e],n)?n:(r=Ut(e,(e|0)<0?-1:0,!0),o&&(Jp[e]=r),r)):(e|=0,(o=-128<=e&&e<128)&&(n=Yp[e],n)?n:(r=Ut(e,e<0?-1:0,!1),o&&(Yp[e]=r),r))}Vt.fromInt=Gn;function ar(e,t){if(isNaN(e))return t?Bn:ur;if(t){if(e<0)return Bn;if(e>=e2)return o2}else{if(e<=-Qp)return Me;if(e+1>=Qp)return n2}return e<0?ar(-e,t).neg():Ut(e%To|0,e/To|0,t)}Vt.fromNumber=ar;function Ut(e,t,r){return new Vt(e,t,r)}Vt.fromBits=Ut;var ai=Math.pow;function vu(e,t,r){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return ur;if(typeof t=="number"?(r=t,t=!1):t=!!t,r=r||10,r<2||36<r)throw RangeError("radix");var n;if((n=e.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return vu(e.substring(1),t,r).neg();for(var o=ar(ai(r,8)),s=ur,a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a),u=parseInt(e.substring(a,a+i),r);if(i<8){var c=ar(ai(r,i));s=s.mul(c).add(ar(u))}else s=s.mul(o),s=s.add(ar(u))}return s.unsigned=t,s}Vt.fromString=vu;function dr(e,t){return typeof e=="number"?ar(e,t):typeof e=="string"?vu(e,t):Ut(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}Vt.fromValue=dr;var Zp=1<<16,pd=1<<24,To=Zp*Zp,e2=To*To,Qp=e2/2,t2=Gn(pd),ur=Gn(0);Vt.ZERO=ur;var Bn=Gn(0,!0);Vt.UZERO=Bn;var wo=Gn(1);Vt.ONE=wo;var r2=Gn(1,!0);Vt.UONE=r2;var xu=Gn(-1);Vt.NEG_ONE=xu;var n2=Ut(-1,2147483647,!1);Vt.MAX_VALUE=n2;var o2=Ut(-1,-1,!0);Vt.MAX_UNSIGNED_VALUE=o2;var Me=Ut(0,-2147483648,!1);Vt.MIN_VALUE=Me;var tt=Vt.prototype;tt.toInt=function(){return this.unsigned?this.low>>>0:this.low};tt.toNumber=function(){return this.unsigned?(this.high>>>0)*To+(this.low>>>0):this.high*To+(this.low>>>0)};tt.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Me)){var r=ar(t),n=this.div(r),o=n.mul(r).sub(this);return n.toString(t)+o.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=ar(ai(t,6),this.unsigned),a=this,i="";;){var u=a.div(s),c=a.sub(u.mul(s)).toInt()>>>0,p=c.toString(t);if(a=u,a.isZero())return p+i;for(;p.length<6;)p="0"+p;i=""+p+i}};tt.getHighBits=function(){return this.high};tt.getHighBitsUnsigned=function(){return this.high>>>0};tt.getLowBits=function(){return this.low};tt.getLowBitsUnsigned=function(){return this.low>>>0};tt.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Me)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,r=31;r>0&&!(t&1<<r);r--);return this.high!=0?r+33:r+1};tt.isZero=function(){return this.high===0&&this.low===0};tt.eqz=tt.isZero;tt.isNegative=function(){return!this.unsigned&&this.high<0};tt.isPositive=function(){return this.unsigned||this.high>=0};tt.isOdd=function(){return(this.low&1)===1};tt.isEven=function(){return(this.low&1)===0};tt.equals=function(t){return Be(t)||(t=dr(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};tt.eq=tt.equals;tt.notEquals=function(t){return!this.eq(t)};tt.neq=tt.notEquals;tt.ne=tt.notEquals;tt.lessThan=function(t){return this.comp(t)<0};tt.lt=tt.lessThan;tt.lessThanOrEqual=function(t){return this.comp(t)<=0};tt.lte=tt.lessThanOrEqual;tt.le=tt.lessThanOrEqual;tt.greaterThan=function(t){return this.comp(t)>0};tt.gt=tt.greaterThan;tt.greaterThanOrEqual=function(t){return this.comp(t)>=0};tt.gte=tt.greaterThanOrEqual;tt.ge=tt.greaterThanOrEqual;tt.compare=function(t){if(Be(t)||(t=dr(t)),this.eq(t))return 0;var r=this.isNegative(),n=t.isNegative();return r&&!n?-1:!r&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};tt.comp=tt.compare;tt.negate=function(){return!this.unsigned&&this.eq(Me)?Me:this.not().add(wo)};tt.neg=tt.negate;tt.add=function(t){Be(t)||(t=dr(t));var r=this.high>>>16,n=this.high&65535,o=this.low>>>16,s=this.low&65535,a=t.high>>>16,i=t.high&65535,u=t.low>>>16,c=t.low&65535,p=0,f=0,x=0,T=0;return T+=s+c,x+=T>>>16,T&=65535,x+=o+u,f+=x>>>16,x&=65535,f+=n+i,p+=f>>>16,f&=65535,p+=r+a,p&=65535,Ut(x<<16|T,p<<16|f,this.unsigned)};tt.subtract=function(t){return Be(t)||(t=dr(t)),this.add(t.neg())};tt.sub=tt.subtract;tt.multiply=function(t){if(this.isZero())return ur;if(Be(t)||(t=dr(t)),ir){var r=ir.mul(this.low,this.high,t.low,t.high);return Ut(r,ir.get_high(),this.unsigned)}if(t.isZero())return ur;if(this.eq(Me))return t.isOdd()?Me:ur;if(t.eq(Me))return this.isOdd()?Me:ur;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(t2)&&t.lt(t2))return ar(this.toNumber()*t.toNumber(),this.unsigned);var n=this.high>>>16,o=this.high&65535,s=this.low>>>16,a=this.low&65535,i=t.high>>>16,u=t.high&65535,c=t.low>>>16,p=t.low&65535,f=0,x=0,T=0,k=0;return k+=a*p,T+=k>>>16,k&=65535,T+=s*p,x+=T>>>16,T&=65535,T+=a*c,x+=T>>>16,T&=65535,x+=o*p,f+=x>>>16,x&=65535,x+=s*c,f+=x>>>16,x&=65535,x+=a*u,f+=x>>>16,x&=65535,f+=n*p+o*c+s*u+a*i,f&=65535,Ut(T<<16|k,f<<16|x,this.unsigned)};tt.mul=tt.multiply;tt.divide=function(t){if(Be(t)||(t=dr(t)),t.isZero())throw Error("division by zero");if(ir){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var r=(this.unsigned?ir.div_u:ir.div_s)(this.low,this.high,t.low,t.high);return Ut(r,ir.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Bn:ur;var n,o,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Bn;if(t.gt(this.shru(1)))return r2;s=Bn}else{if(this.eq(Me)){if(t.eq(wo)||t.eq(xu))return Me;if(t.eq(Me))return wo;var a=this.shr(1);return n=a.div(t).shl(1),n.eq(ur)?t.isNegative()?wo:xu:(o=this.sub(t.mul(n)),s=n.add(o.div(t)),s)}else if(t.eq(Me))return this.unsigned?Bn:ur;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=ur}for(o=this;o.gte(t);){n=Math.max(1,Math.floor(o.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(n)/Math.LN2),u=i<=48?1:ai(2,i-48),c=ar(n),p=c.mul(t);p.isNegative()||p.gt(o);)n-=u,c=ar(n,this.unsigned),p=c.mul(t);c.isZero()&&(c=wo),s=s.add(c),o=o.sub(p)}return s};tt.div=tt.divide;tt.modulo=function(t){if(Be(t)||(t=dr(t)),ir){var r=(this.unsigned?ir.rem_u:ir.rem_s)(this.low,this.high,t.low,t.high);return Ut(r,ir.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};tt.mod=tt.modulo;tt.rem=tt.modulo;tt.not=function(){return Ut(~this.low,~this.high,this.unsigned)};tt.and=function(t){return Be(t)||(t=dr(t)),Ut(this.low&t.low,this.high&t.high,this.unsigned)};tt.or=function(t){return Be(t)||(t=dr(t)),Ut(this.low|t.low,this.high|t.high,this.unsigned)};tt.xor=function(t){return Be(t)||(t=dr(t)),Ut(this.low^t.low,this.high^t.high,this.unsigned)};tt.shiftLeft=function(t){return Be(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ut(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Ut(0,this.low<<t-32,this.unsigned)};tt.shl=tt.shiftLeft;tt.shiftRight=function(t){return Be(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Ut(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Ut(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};tt.shr=tt.shiftRight;tt.shiftRightUnsigned=function(t){if(Be(t)&&(t=t.toInt()),t&=63,t===0)return this;var r=this.high;if(t<32){var n=this.low;return Ut(n>>>t|r<<32-t,r>>>t,this.unsigned)}else return t===32?Ut(r,0,this.unsigned):Ut(r>>>t-32,0,this.unsigned)};tt.shru=tt.shiftRightUnsigned;tt.shr_u=tt.shiftRightUnsigned;tt.toSigned=function(){return this.unsigned?Ut(this.low,this.high,!1):this};tt.toUnsigned=function(){return this.unsigned?this:Ut(this.low,this.high,!0)};tt.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};tt.toBytesLE=function(){var t=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};tt.toBytesBE=function(){var t=this.high,r=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};Vt.fromBytes=function(t,r,n){return n?Vt.fromBytesLE(t,r):Vt.fromBytesBE(t,r)};Vt.fromBytesLE=function(t,r){return new Vt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,r)};Vt.fromBytesBE=function(t,r){return new Vt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],r)}});var j2=He(()=>{});var W2=He(()=>{});var wf=He((vf,Vu)=>{(function(e,t,r){function n(i){var u=this,c=a();u.next=function(){var p=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=p-(u.c=p|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(i),u.s0<0&&(u.s0+=1),u.s1-=c(i),u.s1<0&&(u.s1+=1),u.s2-=c(i),u.s2<0&&(u.s2+=1),c=null}function o(i,u){return u.c=i.c,u.s0=i.s0,u.s1=i.s1,u.s2=i.s2,u}function s(i,u){var c=new n(i),p=u&&u.state,f=c.next;return f.int32=function(){return c.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,p&&(typeof p=="object"&&o(p,c),f.state=function(){return o(c,{})}),f}function a(){var i=4022871197,u=function(c){c=String(c);for(var p=0;p<c.length;p++){i+=c.charCodeAt(p);var f=.02519603282416938*i;i=f>>>0,f-=i,f*=i,i=f>>>0,f-=i,i+=f*4294967296}return(i>>>0)*23283064365386963e-26};return u}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.alea=s})(vf,typeof Vu=="object"&&Vu,typeof define=="function"&&define)});var Nf=He((Tf,Uu)=>{(function(e,t,r){function n(a){var i=this,u="";i.x=0,i.y=0,i.z=0,i.w=0,i.next=function(){var p=i.x^i.x<<11;return i.x=i.y,i.y=i.z,i.z=i.w,i.w^=i.w>>>19^p^p>>>8},a===(a|0)?i.x=a:u+=a;for(var c=0;c<u.length+64;c++)i.x^=u.charCodeAt(c)|0,i.next()}function o(a,i){return i.x=a.x,i.y=a.y,i.z=a.z,i.w=a.w,i}function s(a,i){var u=new n(a),c=i&&i.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,x=(u.next()>>>0)/4294967296,T=(f+x)/(1<<21);while(T===0);return T},p.int32=u.next,p.quick=p,c&&(typeof c=="object"&&o(c,u),p.state=function(){return o(u,{})}),p}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xor128=s})(Tf,typeof Uu=="object"&&Uu,typeof define=="function"&&define)});var Sf=He((Ef,ju)=>{(function(e,t,r){function n(a){var i=this,u="";i.next=function(){var p=i.x^i.x>>>2;return i.x=i.y,i.y=i.z,i.z=i.w,i.w=i.v,(i.d=i.d+362437|0)+(i.v=i.v^i.v<<4^(p^p<<1))|0},i.x=0,i.y=0,i.z=0,i.w=0,i.v=0,a===(a|0)?i.x=a:u+=a;for(var c=0;c<u.length+64;c++)i.x^=u.charCodeAt(c)|0,c==u.length&&(i.d=i.x<<10^i.x>>>4),i.next()}function o(a,i){return i.x=a.x,i.y=a.y,i.z=a.z,i.w=a.w,i.v=a.v,i.d=a.d,i}function s(a,i){var u=new n(a),c=i&&i.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,x=(u.next()>>>0)/4294967296,T=(f+x)/(1<<21);while(T===0);return T},p.int32=u.next,p.quick=p,c&&(typeof c=="object"&&o(c,u),p.state=function(){return o(u,{})}),p}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xorwow=s})(Ef,typeof ju=="object"&&ju,typeof define=="function"&&define)});var If=He((kf,Wu)=>{(function(e,t,r){function n(a){var i=this;i.next=function(){var c=i.x,p=i.i,f,x,T;return f=c[p],f^=f>>>7,x=f^f<<24,f=c[p+1&7],x^=f^f>>>10,f=c[p+3&7],x^=f^f>>>3,f=c[p+4&7],x^=f^f<<7,f=c[p+7&7],f=f^f<<13,x^=f^f<<9,c[p]=x,i.i=p+1&7,x};function u(c,p){var f,x,T=[];if(p===(p|0))x=T[0]=p;else for(p=""+p,f=0;f<p.length;++f)T[f&7]=T[f&7]<<15^p.charCodeAt(f)+T[f+1&7]<<13;for(;T.length<8;)T.push(0);for(f=0;f<8&&T[f]===0;++f);for(f==8?x=T[7]=-1:x=T[f],c.x=T,c.i=0,f=256;f>0;--f)c.next()}u(i,a)}function o(a,i){return i.x=a.x.slice(),i.i=a.i,i}function s(a,i){a==null&&(a=+new Date);var u=new n(a),c=i&&i.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,x=(u.next()>>>0)/4294967296,T=(f+x)/(1<<21);while(T===0);return T},p.int32=u.next,p.quick=p,c&&(c.x&&o(c,u),p.state=function(){return o(u,{})}),p}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xorshift7=s})(kf,typeof Wu=="object"&&Wu,typeof define=="function"&&define)});var Af=He((_f,Hu)=>{(function(e,t,r){function n(a){var i=this;i.next=function(){var c=i.w,p=i.X,f=i.i,x,T;return i.w=c=c+1640531527|0,T=p[f+34&127],x=p[f=f+1&127],T^=T<<13,x^=x<<17,T^=T>>>15,x^=x>>>12,T=p[f]=T^x,i.i=f,T+(c^c>>>16)|0};function u(c,p){var f,x,T,k,O,D=[],C=128;for(p===(p|0)?(x=p,p=null):(p=p+"\0",x=0,C=Math.max(C,p.length)),T=0,k=-32;k<C;++k)p&&(x^=p.charCodeAt((k+32)%p.length)),k===0&&(O=x),x^=x<<10,x^=x>>>15,x^=x<<4,x^=x>>>13,k>=0&&(O=O+1640531527|0,f=D[k&127]^=x+O,T=f==0?T+1:0);for(T>=128&&(D[(p&&p.length||0)&127]=-1),T=127,k=4*128;k>0;--k)x=D[T+34&127],f=D[T=T+1&127],x^=x<<13,f^=f<<17,x^=x>>>15,f^=f>>>12,D[T]=x^f;c.w=O,c.X=D,c.i=T}u(i,a)}function o(a,i){return i.i=a.i,i.w=a.w,i.X=a.X.slice(),i}function s(a,i){a==null&&(a=+new Date);var u=new n(a),c=i&&i.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,x=(u.next()>>>0)/4294967296,T=(f+x)/(1<<21);while(T===0);return T},p.int32=u.next,p.quick=p,c&&(c.X&&o(c,u),p.state=function(){return o(u,{})}),p}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.xor4096=s})(_f,typeof Hu=="object"&&Hu,typeof define=="function"&&define)});var $f=He((Of,Ku)=>{(function(e,t,r){function n(a){var i=this,u="";i.next=function(){var p=i.b,f=i.c,x=i.d,T=i.a;return p=p<<25^p>>>7^f,f=f-x|0,x=x<<24^x>>>8^T,T=T-p|0,i.b=p=p<<20^p>>>12^f,i.c=f=f-x|0,i.d=x<<16^f>>>16^T,i.a=T-p|0},i.a=0,i.b=0,i.c=-1640531527,i.d=1367130551,a===Math.floor(a)?(i.a=a/4294967296|0,i.b=a|0):u+=a;for(var c=0;c<u.length+20;c++)i.b^=u.charCodeAt(c)|0,i.next()}function o(a,i){return i.a=a.a,i.b=a.b,i.c=a.c,i.d=a.d,i}function s(a,i){var u=new n(a),c=i&&i.state,p=function(){return(u.next()>>>0)/4294967296};return p.double=function(){do var f=u.next()>>>11,x=(u.next()>>>0)/4294967296,T=(f+x)/(1<<21);while(T===0);return T},p.int32=u.next,p.quick=p,c&&(typeof c=="object"&&o(c,u),p.state=function(){return o(u,{})}),p}t&&t.exports?t.exports=s:r&&r.amd?r(function(){return s}):this.tychei=s})(Of,typeof Ku=="object"&&Ku,typeof define=="function"&&define)});var Df=He(()=>{});var Cf=He((Ff,Yi)=>{(function(e,t,r){var n=256,o=6,s=52,a="random",i=r.pow(n,o),u=r.pow(2,s),c=u*2,p=n-1,f;function x(P,G,q){var z=[];G=G==!0?{entropy:!0}:G||{};var rt=D(O(G.entropy?[P,K(t)]:P==null?C():P,3),z),it=new T(z),Y=function(){for(var ot=it.g(o),xt=i,$t=0;ot<u;)ot=(ot+$t)*n,xt*=n,$t=it.g(1);for(;ot>=c;)ot/=2,xt/=2,$t>>>=1;return(ot+$t)/xt};return Y.int32=function(){return it.g(4)|0},Y.quick=function(){return it.g(4)/4294967296},Y.double=Y,D(K(it.S),t),(G.pass||q||function(ot,xt,$t,ht){return ht&&(ht.S&&k(ht,it),ot.state=function(){return k(it,{})}),$t?(r[a]=ot,xt):ot})(Y,rt,"global"in G?G.global:this==r,G.state)}function T(P){var G,q=P.length,z=this,rt=0,it=z.i=z.j=0,Y=z.S=[];for(q||(P=[q++]);rt<n;)Y[rt]=rt++;for(rt=0;rt<n;rt++)Y[rt]=Y[it=p&it+P[rt%q]+(G=Y[rt])],Y[it]=G;(z.g=function(ot){for(var xt,$t=0,ht=z.i,Yt=z.j,te=z.S;ot--;)xt=te[ht=p&ht+1],$t=$t*n+te[p&(te[ht]=te[Yt=p&Yt+xt])+(te[Yt]=xt)];return z.i=ht,z.j=Yt,$t})(n)}function k(P,G){return G.i=P.i,G.j=P.j,G.S=P.S.slice(),G}function O(P,G){var q=[],z=typeof P,rt;if(G&&z=="object")for(rt in P)try{q.push(O(P[rt],G-1))}catch(it){}return q.length?q:z=="string"?P:P+"\0"}function D(P,G){for(var q=P+"",z,rt=0;rt<q.length;)G[p&rt]=p&(z^=G[p&rt]*19)+q.charCodeAt(rt++);return K(G)}function C(){try{var P;return f&&(P=f.randomBytes)?P=P(n):(P=new Uint8Array(n),(e.crypto||e.msCrypto).getRandomValues(P)),K(P)}catch(z){var G=e.navigator,q=G&&G.plugins;return[+new Date,e,q,e.screen,K(t)]}}function K(P){return String.fromCharCode.apply(0,P)}if(D(r.random(),t),typeof Yi=="object"&&Yi.exports){Yi.exports=x;try{f=Df()}catch(P){}}else typeof define=="function"&&define.amd?define(function(){return x}):r["seed"+a]=x})(typeof self<"u"?self:Ff,[],Math)});var Lf=He((yF,Rf)=>{var E6=wf(),S6=Nf(),k6=Sf(),I6=If(),_6=Af(),A6=$f(),Yn=Cf();Yn.alea=E6;Yn.xor128=S6;Yn.xorwow=k6;Yn.xorshift7=I6;Yn.xor4096=_6;Yn.tychei=A6;Rf.exports=Yn});var l4=nu(r1());var ti=class{refCount(t){return Pe("refCount")}incRef(t){return Pe("incRef")}timerAvailable(){return!0}time(t){return Pe("time")}read(t){return Pe("read")}readSync(t){return Pe("readSync")}readToGPU(t,r){return Pe("readToGPU")}numDataIds(){return Pe("numDataIds")}disposeData(t,r){return Pe("disposeData")}write(t,r,n){return Pe("write")}move(t,r,n,o,s){return Pe("move")}createTensorFromGPUData(t,r,n){return Pe("createTensorFromGPUData")}memory(){return Pe("memory")}floatPrecision(){return Pe("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Pe("dispose")}};function Pe(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function n1(e){let t=e.length,r=0;for(;t>0;)r=Math.random()*t|0,t--,ei(e,t,r)}function B4(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let r=e.length,n=0;for(;r>0;)n=Math.random()*r|0,r--,ei(e,r,n),ei(t,r,n)}function G4(e,t,r){return Math.max(e,Math.min(t,r))}function z4(e){return e%2===0?e:e+1}function ei(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function V4(e){let t=0;for(let r=0;r<e.length;r++)t+=e[r];return t}function U4(e,t){let r=Math.random();return t*r+(1-r)*e}function j4(e,t){let r=0;for(let n=0;n<e.length;n++){let o=Number(e[n])-Number(t[n]);r+=o*o}return r}function S(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function jt(e,t,r=""){S(sr(e,t),()=>r+` Shapes ${e} and ${t} must match`)}function Ke(e){S(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ct(e){if(e.length===0)return 1;let t=e[0];for(let r=1;r<e.length;r++)t*=e[r];return t}function W4(e){return e.length===0}function sr(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function Gr(e){return e%1===0}function H4(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{let t=Math.exp(2*e);return(t-1)/(t+1)}}function K4(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function q4(e){let t=new Uint32Array(e);for(let r=0;r<e;++r)t[r]=r;return n1(t),t}function Pn(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function X4(e,t=o=>0,r,n){return new Promise((o,s)=>{let a=0,i=()=>{if(e()){o();return}a++;let u=t(a);if(r!=null&&a>=r){s();return}n!=null?n(i,u):setTimeout(i,u)};i()})}function Y4(e,t){let r=1,n=-1;for(let s=0;s<e.length;++s)if(e[s]>=0)r*=e[s];else if(e[s]===-1){if(n!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${n} and dim ${s}`);n=s}else if(e[s]<0)throw Error(`Shapes can not be < 0. Found ${e[s]} at dim ${s}`);if(n===-1){if(t>0&&t!==r)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(r===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%r!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${r}`);let o=e.slice();return o[n]=t/r,o}function un(e,t){let r=t.length;return e=e==null?t.map((n,o)=>o):[].concat(e),S(e.every(n=>n>=-r&&n<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${e}`),S(e.every(n=>Gr(n)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(n=>n<0?r+n:n)}function ou(e,t){let r=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||o?null:un(t,e).sort(),a=0;for(let i=0;i<e.length;++i){if(s!=null){if(s[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(s[a]==null||s[a]>i)&&e[i]===1&&(r.push(e[i]),n.push(i)),s[a]<=i&&a++}e[i]!==1&&(r.push(e[i]),n.push(i))}return{newShape:r,keptDims:n}}function su(e,t){let r=null;if(e==null||e==="float32")r=new Float32Array(t);else if(e==="int32")r=new Int32Array(t);else if(e==="bool")r=new Uint8Array(t);else throw new Error(`Unknown data type ${e}`);return r}function iu(e,t){let r=null;if(e==null||e==="float32")r=new Float32Array(t);else if(e==="int32")r=new Int32Array(t);else if(e==="bool")r=new Uint8Array(t);else if(e==="string")r=new Array(t);else throw new Error(`Unknown data type ${e}`);return r}function au(e,t){for(let r=0;r<e.length;r++){let n=e[r];if(isNaN(n)||!isFinite(n))throw Error(`A tensor of type ${t} being uploaded contains ${n}.`)}}function uu(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function J4(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function fo(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function cu(e){if(e==null)return 0;let t=0;return e.forEach(r=>t+=r.length),t}function ho(e){return typeof e=="string"||e instanceof String}function o1(e){return typeof e=="boolean"}function s1(e){return typeof e=="number"}function go(e){return Array.isArray(e)?go(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":s1(e)?"float32":ho(e)?"string":o1(e)?"bool":"float32"}function yo(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Z4(e,t){for(let r=t;r<e;++r)if(e%r===0)return r;return e}function bo(e){let t=e.length;if(t<2)return[];let r=new Array(t-1);r[t-2]=e[t-1];for(let n=t-3;n>=0;--n)r[n]=r[n+1]*e[n+1];return r}function i1(e,t,r,n=!1){let o=new Array;if(t.length===1){let s=t[0]*(n?2:1);for(let a=0;a<s;a++)o[a]=r[e+a]}else{let s=t[0],a=t.slice(1),i=a.reduce((u,c)=>u*c)*(n?2:1);for(let u=0;u<s;u++)o[u]=i1(e+u*i,a,r,n)}return o}function Ln(e,t,r=!1){if(e.length===0)return t[0];let n=e.reduce((o,s)=>o*s)*(r?2:1);if(n===0)return[];if(n!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${r?" for a complex tensor":""}.`);return i1(0,e,t,r)}function Q4(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function us(e,t){let r=xo(e,t);for(let n=0;n<r.length;n++)r[n]=1;return r}function xo(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function td(e,t){let r=e.reduce((n,o)=>n*o,1);if(t==null||t==="float32")return Ln(e,new Float32Array(r));if(t==="int32")return Ln(e,new Int32Array(r));if(t==="bool")return Ln(e,new Uint8Array(r));throw new Error(`Unknown data type ${t}`)}function Bt(e){e.forEach(t=>{S(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function ed(e,t,r){if(t===0)return 0;if(t===1)return e[0];let n=e[e.length-1];for(let o=0;o<e.length-1;++o)n+=r[o]*e[o];return n}function rd(e,t,r){if(t===0)return[];if(t===1)return[e];let n=new Array(t);for(let o=0;o<n.length-1;++o)n[o]=Math.floor(e/r[o]),e-=n[o]*r[o];return n[n.length-1]=e,n}function Mn(e){return e&&e.then&&typeof e.then=="function"}var a1="tfjsflags",cs=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=od,this.populateURLFlags()}setPlatform(t,r){this.platform!=null&&(lt().getBool("IS_TEST")||lt().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=r}registerFlag(t,r,n){if(this.flagRegistry[t]={evaluationFn:r,setHook:n},this.urlFlags[t]!=null){let o=this.urlFlags[t];lt().getBool("IS_TEST")||lt().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${o}.`),this.set(t,o)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let r=this.evaluateFlag(t);if(Mn(r))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=r,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,r){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=r,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(r)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);a1 in t&&t[a1].split(",").forEach(n=>{let[o,s]=n.split(":");this.urlFlags[o]=id(o,s)})}};function od(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(r,...n)=>(sd(t,n[0],n[1]),n.join("="))),t}function sd(e,t,r){e[decodeURIComponent(t)]=decodeURIComponent(r||"")}function id(e,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${e}.`)}function lt(){return lu}var lu=null;function u1(e){lu=e}var pu;function mu(){if(pu==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");pu=e}return pu}function ad(){let e=mu();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function ls(e,t){let r=ad();if(r.has(e))return r.get(e);{let n=t();return r.set(e,n),r.get(e)}}var c1="Abs",l1="Acos",p1="Acosh",ri="Add",m1="AddN",f1="All",h1="Any",d1="ArgMax",g1="ArgMin",y1="Asin",b1="Asinh",x1="Atan",v1="Atanh",w1="Atan2",T1="AvgPool";var N1="AvgPool3D";var E1="BatchMatMul",S1="BatchToSpaceND",k1="Bincount";var I1="BroadcastArgs",ni="Cast",_1="Ceil",A1="ClipByValue",O1="Complex",$1="ComplexAbs",D1="Concat",F1="Conv2D",C1="Conv2DBackpropFilter",R1="Conv2DBackpropInput",L1="Conv3D";var P1="Conv3DBackpropInputV2",M1="Cos",B1="Cosh",G1="Cumprod",z1="Cumsum",V1="CropAndResize",U1="DenseBincount",j1="DepthToSpace",W1="DepthwiseConv2dNative",H1="DepthwiseConv2dNativeBackpropFilter",K1="DepthwiseConv2dNativeBackpropInput",q1="Diag",X1="Dilation2D";var Y1="RealDiv",J1="Einsum",Z1="Elu";var Q1="Erf",tl="Equal",el="Exp",rl="ExpandDims",nl="Expm1",ol="FFT",sl="Fill",il="FlipLeftRight",al="Floor",ul="FloorDiv",cl="FusedBatchNorm",ll="GatherV2",pl="GatherNd",ml="Greater",fl="GreaterEqual",oi="Identity",hl="IFFT",dl="Imag",gl="IsFinite",yl="IsInf",bl="IsNan",xl="LeakyRelu",vl="Less",wl="LessEqual",Tl="LinSpace",Nl="Log",El="Log1p",Sl="LogicalAnd",kl="LogicalNot",Il="LogicalOr";var _l="LRN";var Al="Max",Ol="Maximum",$l="MaxPool";var Dl="MaxPool3D";var Fl="MaxPoolWithArgmax",Cl="Mean",Rl="Min",Ll="Minimum",Pl="MirrorPad",Ml="Mod",Bl="Multinomial",Gl="Multiply",zl="Neg",Vl="NotEqual",Ul="NonMaxSuppressionV3",jl="NonMaxSuppressionV4",Wl="NonMaxSuppressionV5",Hl="OnesLike",Kl="OneHot",ql="Pack",Xl="PadV2";var Yl="Pow",Jl="Prelu",Zl="Prod",Ql="RaggedGather",tp="RaggedRange",ep="RaggedTensorToTensor",rp="Range",np="Real",op="Reciprocal",sp="Relu",ip="Reshape",ap="ResizeNearestNeighbor";var up="ResizeBilinear";var cp="Relu6",lp="Reverse",pp="Round",mp="Rsqrt",fp="ScatterNd",hp="SearchSorted",dp="Select",gp="Selu",yp="Slice",bp="Sin",xp="Sinh",vp="Sign",wp="Sigmoid",Tp="Softplus",Np="Sqrt",Ep="Sum",Sp="SpaceToBatchND",kp="SplitV",Ip="Softmax",_p="SparseFillEmptyRows",Ap="SparseReshape",Op="SparseSegmentMean",$p="SparseSegmentSum",Dp="SparseToDense",Fp="SquaredDifference";var Cp="StridedSlice",Rp="StringNGrams",Lp="StringSplit",Pp="StringToHashBucketFast",Mp="Sub",Bp="Tan",Gp="Tanh",si="Tile",zp="TopK",Vp="Transform",ii="Transpose",Up="Unique",jp="Unpack",Wp="UnsortedSegmentSum";var Hp="ZerosLike",Kp="Step",fu="FromPixels",qp="RotateWithOffset",hu="_FusedMatMul",du="FusedConv2D",gu="FusedDepthwiseConv2D";function vo(...e){lt().getBool("IS_TEST")||lt().getBool("PROD")||console.warn(...e)}var Xp=ls("kernelRegistry",()=>new Map),cd=ls("gradRegistry",()=>new Map);function ps(e,t){let r=ld(e,t);return Xp.get(r)}function yu(e){return cd.get(e)}function bu(e){let t=Xp.entries(),r=[];for(;;){let{done:n,value:o}=t.next();if(n)break;let[s,a]=o,[i]=s.split("_");i===e&&r.push(a)}return r}function ld(e,t){return`${t}_${e}`}var X={};Wt(X,{arraysEqual:()=>sr,assert:()=>S,assertNonNegativeIntegerDimensions:()=>Bt,assertNonNull:()=>Ke,assertShapesMatch:()=>jt,bytesFromStringArray:()=>cu,bytesPerElement:()=>fo,checkConversionForErrors:()=>au,clamp:()=>G4,computeStrides:()=>bo,convertBackendValuesAndArrayBuffer:()=>Q4,createScalarValue:()=>yd,createShuffledIndices:()=>q4,decodeString:()=>li,distSquared:()=>j4,encodeString:()=>ci,fetch:()=>xd,fingerPrint64:()=>gd,flatten:()=>ln,getArrayFromDType:()=>iu,getTypedArrayFromDType:()=>su,hasEncodingLoss:()=>J4,hexToLong:()=>ms,indexToLoc:()=>rd,inferDtype:()=>go,inferFromImplicitShape:()=>Y4,isBoolean:()=>o1,isFunction:()=>yo,isInt:()=>Gr,isNumber:()=>s1,isPromise:()=>Mn,isScalarShape:()=>W4,isString:()=>ho,isTypedArray:()=>Ee,isValidDtype:()=>uu,locToIndex:()=>ed,makeOnesTypedArray:()=>us,makeZerosNestedTypedArray:()=>td,makeZerosTypedArray:()=>xo,nearestDivisor:()=>Z4,nearestLargerEven:()=>z4,now:()=>Un,parseAxisParam:()=>un,randUniform:()=>U4,repeatedTry:()=>X4,rightPad:()=>Pn,shuffle:()=>n1,shuffleCombo:()=>B4,sizeFromShape:()=>Ct,sizeToSquarishShape:()=>K4,squeezeShape:()=>ou,sum:()=>V4,swap:()=>ei,tanh:()=>H4,toNestedArray:()=>Ln,toTypedArray:()=>No});var Tu=nu(i2());var Vn=Tu.default||Tu;function ms(e){return Vn.fromString(e,!0,16)}var u2=ms("c3a5c85c97cb3127"),zn=ms("b492b66fbe98f273"),de=ms("9ae16a3b2f90404f");function wu(e){return e.xor(e.shru(47))}function c2(e,t,r){let n=e.slice(t,t+r);return Vn.fromBytes(Array.from(n),!0,!0)}function Gt(e,t){return c2(e,t,8)}function a2(e,t){return c2(e,t,4)}function se(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function cn(e,t,r=ms("9ddfea08eb382d69")){let n=e.xor(t).mul(r);n=n.xor(n.shru(47));let o=t.xor(n).mul(r);return o=o.xor(o.shru(47)),o=o.mul(r),o}function md(e,t,r,n,o,s){o=o.add(e),s=se(s.add(o).add(n),21);let a=o;return o=o.add(t),o=o.add(r),s=s.add(se(o,44)),[o.add(n),s.add(a)]}function ui(e,t,r,n){return md(Gt(e,t),Gt(e,t+8),Gt(e,t+16),Gt(e,t+24),r,n)}function fd(e,t=e.length){if(t>=8){let r=de.add(t*2),n=Gt(e,0).add(de),o=Gt(e,t-8),s=se(o,37).mul(r).add(n),a=se(n,25).add(o).mul(r);return cn(s,a,r)}if(t>=4){let r=de.add(t*2),n=a2(e,0);return cn(n.shl(3).add(t),a2(e,t-4),r)}if(t>0){let r=e[0],n=e[t>>1],o=e[t-1],s=r+(n<<8),a=t+(o<<2);return wu(de.mul(s).xor(u2.mul(a))).mul(de)}return de}function hd(e,t=e.length){let r=de.add(t*2),n=Gt(e,0).mul(zn),o=Gt(e,8),s=Gt(e,t-8).mul(r),a=Gt(e,t-16).mul(de);return cn(se(n.add(o),43).add(se(s,30)).add(a),n.add(se(o.add(de),18)).add(s),r)}function dd(e,t=e.length){let r=de.add(t*2),n=Gt(e,0).mul(de),o=Gt(e,8),s=Gt(e,t-8).mul(r),a=Gt(e,t-16).mul(de),i=se(n.add(o),43).add(se(s,30)).add(a),u=cn(i,n.add(se(o.add(de),18)).add(s),r),c=Gt(e,16).mul(r),p=Gt(e,24),f=i.add(Gt(e,t-32)).mul(r),x=u.add(Gt(e,t-24)).mul(r);return cn(se(c.add(p),43).add(se(f,30)).add(x),c.add(se(p.add(n),18)).add(f),r)}function gd(e,t=e.length){let r=Vn.fromNumber(81,!0);if(t<=32)return t<=16?fd(e,t):hd(e,t);if(t<=64)return dd(e,t);let n=r,o=r.mul(zn).add(113),s=wu(o.mul(de).add(113)).mul(de),a=[Vn.UZERO,Vn.UZERO],i=[Vn.UZERO,Vn.UZERO];n=n.mul(de).add(Gt(e,0));let u=0,c=(t-1>>6)*64,p=c+(t-1&63)-63;do n=se(n.add(o).add(a[0]).add(Gt(e,u+8)),37).mul(zn),o=se(o.add(a[1]).add(Gt(e,u+48)),42).mul(zn),n=n.xor(i[1]),o=o.add(a[0]).add(Gt(e,u+40)),s=se(s.add(i[0]),33).mul(zn),a=ui(e,u,a[1].mul(zn),n.add(i[0])),i=ui(e,u+32,s.add(i[1]),o.add(Gt(e,u+16))),[s,n]=[n,s],u+=64;while(u!==c);let f=zn.add(s.and(255).shl(1));return u=p,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),n=se(n.add(o).add(a[0]).add(Gt(e,u+8)),37).mul(f),o=se(o.add(a[1]).add(Gt(e,u+48)),42).mul(f),n=n.xor(i[1].mul(9)),o=o.add(a[0].mul(9).add(Gt(e,u+40))),s=se(s.add(i[0]),33).mul(f),a=ui(e,u,a[1].mul(f),n.add(i[0])),i=ui(e,u+32,s.add(i[1]),o.add(Gt(e,u+16))),[s,n]=[n,s],cn(cn(a[0],i[0],f).add(wu(o).mul(u2)).add(s),cn(a[1],i[1],f).add(n),f)}function yd(e,t){return t==="string"?ci(e):No([e],t)}function bd(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function No(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=ln(e)),lt().getBool("DEBUG")&&au(e,t),bd(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){let r=new Uint8Array(e.length);for(let n=0;n<r.length;++n)Math.round(e[n])!==0&&(r[n]=1);return r}else throw new Error(`Unknown data type ${t}`)}function Un(){return lt().platform.now()}function xd(e,t){return lt().platform.fetch(e,t)}function ci(e,t="utf-8"){return t=t||"utf-8",lt().platform.encode(e,t)}function li(e,t="utf-8"){return t=t||"utf-8",lt().platform.decode(e,t)}function Ee(e){return lt().platform.isTypedArray(e)}function ln(e,t=[],r=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Mn(e)||e==null||Ee(e)&&r)t.push(e);else if(Array.isArray(e)||Ee(e))for(let n=0;n<e.length;++n)ln(e[n],t,r);else{let n=-1;for(let o of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(o)&&(n=Math.max(n,Number(o)));for(let o=0;o<=n;o++)ln(e[o],t,r)}return t}var pi=class{constructor(t,r){this.backendTimer=t,this.logger=r,r==null&&(this.logger=new Nu)}profileKernel(t,r,n){let o,s=()=>{o=n()},a,i=Un();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(s);else{s();for(let c of o)c.dataSync();a=Promise.resolve({kernelMs:Un()-i})}if(lt().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<o.length;c++){let p=o[c];p.data().then(f=>{vd(f,p.dtype,t)})}return{kernelName:t,outputs:o,inputs:r,timeMs:a.then(c=>c.kernelMs),extraInfo:a.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:r,outputs:n,timeMs:o,inputs:s,extraInfo:a}=t;n.forEach(i=>{Promise.all([i.data(),o,a]).then(u=>{this.logger.logKernelProfile(r,i,u[0],u[1],s,u[2])})})}};function vd(e,t,r){if(t!=="float32")return!1;for(let n=0;n<e.length;n++){let o=e[n];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${r}'`),!0}return!1}var Nu=class{logKernelProfile(t,r,n,o,s,a){let i=typeof o=="number"?Pn(`${o}ms`,9):o.error,u=Pn(t,25),c=r.rank,p=r.size,f=Pn(r.shape.toString(),14),x="";for(let T in s){let k=s[T];if(k!=null){let O=k.shape||r.shape,D=O.length;x+=`${T}: ${D}D ${D>0?O:""} `}}console.log(`%c${u}	%c${i}	%c${c}D ${f}	%c${p}	%c${x}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function l2(e,t,r){let n={},o={};for(let u=0;u<t.length;u++)n[t[u].id]=!0;for(let u=0;u<e.length;u++){let c=e[u],p=c.inputs;for(let f in p){let x=p[f],T=!1;for(let k=0;k<t.length;k++)if(n[x.id]){c.outputs.forEach(O=>n[O.id]=!0),T=!0,o[c.id]=!0;break}if(T)break}}let s={};s[r.id]=!0;let a={};for(let u=e.length-1;u>=0;u--){let c=e[u],p=c.inputs;for(let f=0;f<c.outputs.length;f++)if(s[c.outputs[f].id]){for(let x in p)s[p[x].id]=!0,a[c.id]=!0;break}}let i=[];for(let u=0;u<e.length;u++){let c=e[u];if(o[c.id]&&a[c.id]){let p={};for(let x in c.inputs){let T=c.inputs[x];n[T.id]&&(p[x]=T)}let f=Object.assign({},c);f.inputs=p,f.outputs=c.outputs,i.push(f)}}return i}function p2(e,t,r,n){for(let o=t.length-1;o>=0;o--){let s=t[o],a=[];if(s.outputs.forEach(u=>{let c=e[u.id];c!=null?a.push(c):a.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let i=s.gradient(a);for(let u in s.inputs){if(!(u in i))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(i)}.`);let c=r(()=>i[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);let p=s.inputs[u];if(!sr(c.shape,p.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${p.shape}'`);if(e[p.id]==null)e[p.id]=c;else{let f=e[p.id];e[p.id]=n(f,c),f.dispose()}}}}var m2=20,fs=3,Eu=7;function f2(e,t,r,n){let o=bo(t),s=wd(e,t,r,o),a=t.length,i=mi(e,t,r,o,s),u=["Tensor"];return n&&(u.push(`  dtype: ${r}`),u.push(`  rank: ${a}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map(c=>"    "+c).join(`
`)),u.join(`
`)}function wd(e,t,r,n){let o=Ct(t),s=n[n.length-1],a=new Array(s).fill(0),i=t.length,u=r==="complex64"?ds(e):e;if(i>1)for(let c=0;c<o/s;c++){let p=c*s;for(let f=0;f<s;f++)a[f]=Math.max(a[f],hs(u[p+f],0,r).length)}return a}function hs(e,t,r){let n;return Array.isArray(e)?n=`${parseFloat(e[0].toFixed(Eu))} + ${parseFloat(e[1].toFixed(Eu))}j`:ho(e)?n=`'${e}'`:r==="bool"?n=h2(e):n=parseFloat(e.toFixed(Eu)).toString(),Pn(n,t)}function h2(e){return e===0?"false":"true"}function mi(e,t,r,n,o,s=!0){let a=r==="complex64"?2:1,i=t[0],u=t.length;if(u===0){if(r==="complex64"){let O=ds(e);return[hs(O[0],0,r)]}return r==="bool"?[h2(e[0])]:[e[0].toString()]}if(u===1){if(i>m2){let D=fs*a,C=Array.from(e.slice(0,D)),K=Array.from(e.slice((i-fs)*a,i*a));return r==="complex64"&&(C=ds(C),K=ds(K)),["["+C.map((P,G)=>hs(P,o[G],r)).join(", ")+", ..., "+K.map((P,G)=>hs(P,o[i-fs+G],r)).join(", ")+"]"]}return["["+(r==="complex64"?ds(e):Array.from(e)).map((D,C)=>hs(D,o[C],r)).join(", ")+"]"]}let c=t.slice(1),p=n.slice(1),f=n[0]*a,x=[];if(i>m2){for(let O=0;O<fs;O++){let D=O*f,C=D+f;x.push(...mi(e.slice(D,C),c,r,p,o,!1))}x.push("...");for(let O=i-fs;O<i;O++){let D=O*f,C=D+f;x.push(...mi(e.slice(D,C),c,r,p,o,O===i-1))}}else for(let O=0;O<i;O++){let D=O*f,C=D+f;x.push(...mi(e.slice(D,C),c,r,p,o,O===i-1))}let T=u===2?",":"";x[0]="["+(i>0?x[0]+T:"");for(let O=1;O<x.length-1;O++)x[O]=" "+x[O]+T;let k=`,
`;for(let O=2;O<u;O++)k+=`
`;return x[x.length-1]=" "+x[x.length-1]+"]"+(s?"":k),x}function ds(e){let t=[];for(let r=0;r<e.length;r+=2)t.push([e[r],e[r+1]]);return t}var pn=class{constructor(t,r,n){if(this.dtype=r,this.shape=t.slice(),this.size=Ct(t),n!=null){let o=n.length;S(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(r==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||iu(r,this.size),this.strides=bo(t)}set(t,...r){r.length===0&&(r=[0]),S(r.length===this.rank,()=>`The number of provided coordinates (${r.length}) must match the rank (${this.rank})`);let n=this.locToIndex(r);this.values[n]=t}get(...t){t.length===0&&(t=[0]);let r=0;for(let o of t){if(o<0||o>=this.shape[r]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}r++}let n=t[t.length-1];for(let o=0;o<t.length-1;++o)n+=this.strides[o]*t[o];return this.values[n]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let r=t[t.length-1];for(let n=0;n<t.length-1;++n)r+=this.strides[n]*t[n];return r}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let r=new Array(this.shape.length);for(let n=0;n<r.length-1;++n)r[n]=Math.floor(t/this.strides[n]),t-=r[n]*this.strides[n];return r[r.length-1]=t,r}get rank(){return this.shape.length}toTensor(){return gr().makeTensor(this.values,this.shape,this.dtype)}},gr=null,Eo=null,Td=null;function d2(e){gr=e}function g2(e){Eo=e}function y2(e){Td=e}var St=class{constructor(t,r,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=r||"float32",this.size=Ct(t),this.strides=bo(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Eo.buffer(this.shape,this.dtype,t)}bufferSync(){return Eo.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Ln(this.shape,t,this.dtype==="complex64")}arraySync(){return Ln(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=gr().read(this.dataId);if(this.dtype==="string"){let r=await t;try{return r.map(n=>li(n))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),gr().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=gr().readSync(this.dataId);if(this.dtype==="string")try{return t.map(r=>li(r))}catch(r){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await gr().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(gr().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Eo.print(this,t)}clone(){return this.throwIfDisposed(),Eo.clone(this)}toString(t=!1){let r=this.dataSync();return f2(r,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Eo.cast(this,t)}variable(t=!0,r,n){return this.throwIfDisposed(),gr().makeVariable(this,t,r,n)}};Object.defineProperty(St,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Nd(){return ls("Tensor",()=>St)}Nd();var zr=class extends St{constructor(t,r,n,o){super(t.shape,t.dtype,t.dataId,o),this.trainable=r,this.name=n}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!sr(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);gr().disposeTensor(this),this.dataId=t.dataId,gr().incRef(this,null)}dispose(){gr().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(zr,Symbol.hasInstance,{value:e=>e instanceof St&&e.assign!=null&&e.assign instanceof Function});var b2;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(b2||(b2={}));var Su;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(Su||(Su={}));var ku;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(ku||(ku={}));var Iu;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(Iu||(Iu={}));var _u;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(_u||(_u={}));var Ed={float32:Iu,int32:Su,bool:ku,complex64:_u};function x2(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return Ed[e][t]}function bt(e,t){if(e.dtype===t.dtype)return[e,t];let r=x2(e.dtype,t.dtype);return[e.cast(r),t.cast(r)]}function v2(e,t){S(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function fi(e){let t=[];return w2(e,t,new Set),t}function w2(e,t,r){if(e==null)return;if(e instanceof St){t.push(e);return}if(!Sd(e))return;let n=e;for(let o in n){let s=n[o];r.has(s)||(r.add(s),w2(s,t,r))}}function Sd(e){return Array.isArray(e)||typeof e=="object"}function Au(e){return e.kernelName!=null}var hi=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},mn=class{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new hi}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let n=t[r];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:r}=this.initializeBackendsAndReturnBest();if(r)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:r}=this.initializeBackend(t);if(r)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,r,n=1){return t in this.registryFactory?(vo(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:r,priority:n},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:r,asyncInit:n}=this.initializeBackend(t);if(!(n?await r:r))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new pi(this.backendInstance),!0}setupRegisteredKernels(){bu(this.backendName).forEach(r=>{r.setupFunc!=null&&r.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){bu(t).forEach(n=>{n.disposeFunc!=null&&n.disposeFunc(this.registry[t])})}initializeBackend(t){let r=this.registryFactory[t];if(r==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let n=r.factory();if(n&&!(n instanceof ti)&&typeof n.then=="function"){let o=++this.pendingBackendInitId,s=n.then(a=>o<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,vo(`Initialization of backend ${t} failed`),vo(a.stack||a.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=n,{success:!0,asyncInit:!1}}catch(n){return vo(`Initialization of backend ${t} failed`),vo(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,r)=>this.registryFactory[r].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let r=0;r<t.length;r++){let n=t[r],{success:o,asyncInit:s}=this.initializeBackend(n);if(s||o)return{name:n,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,r){let n=this.state.tensorInfo.get(r),o=n.backend,s=this.readSync(r),a=o.refCount(r);o.disposeData(r,!0),n.backend=t,t.move(r,s,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,r){let n=null;if(r==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");r=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof r!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=t}let o;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(o),()=>(o=r(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(t,r,n){t();try{let o=n();return r(),o}catch(o){throw r(),o}}nextTensorId(){return mn.nextTensorId++}nextVariableId(){return mn.nextVariableId++}clone(t){let r=N.runKernel(oi,{x:t}),n={x:t},o=a=>({x:()=>{let i="float32",u={x:a},c={dtype:i};return N.runKernel(ni,u,c)}}),s=[];return this.addTapeNode(this.state.activeScope.name,n,[r],o,s,{}),r}runKernel(t,r,n){if(this.backendName==null&&this.backend,!(ps(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:r,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,r,n){let o=this.backend.numDataIds(),s=0;n.forEach(u=>{s+=u.dtype==="complex64"?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=o-r-s-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let r,n=[],o=this.isTapeOn(),s=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let u,c=Au(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Au(t)){let{kernelName:k,inputs:O,attrs:D}=t;this.backendName==null&&this.backend;let C=ps(k,this.backendName);S(C!=null,()=>`Cannot find registered kernel '${k}' for backend '${this.backendName}'`),i=()=>{let K=this.backend.numDataIds();u=C.kernelFunc({inputs:O,attrs:D,backend:this.backend});let P=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(k,K,P);let G=P.map(q=>q.rank!=null?q:this.makeTensorFromTensorInfo(q));if(o){let q=this.getTensorsForGradient(k,O,G);n=this.saveTensorsForBackwardMode(q)}return G}}else{let{forwardFunc:k}=t,O=D=>{o&&(n=D.map(C=>this.keep(this.clone(C))))};i=()=>{let D=this.backend.numDataIds();u=this.tidy(()=>k(this.backend,O));let C=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,D,C),C}}let{inputs:p,attrs:f}=t,x=Au(t)?null:t.backwardsFunc,T;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?r=i():(T=this.profiler.profileKernel(c,p,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(T),r=T.outputs)}),o&&this.addTapeNode(c,p,r,x,n,f),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(k=>p[k]!=null?p[k].shape:null),outputShapes:r.map(k=>k.shape),kernelTimeMs:T.timeMs,extraInfo:T.extraInfo}),Array.isArray(u)?r:r[0]}saveTensorsForBackwardMode(t){return t.map(n=>this.keep(this.clone(n)))}getTensorsForGradient(t,r,n){let o=yu(t);if(o!=null){let s=o.inputsToSave||[],a=o.outputsToSave||[],i;o.saveAllInputs?(S(Array.isArray(r),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(r).map(c=>r[c])):i=s.map(c=>r[c]);let u=n.filter((c,p)=>a[p]);return i.concat(u)}return[]}makeTensor(t,r,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;let s=t;n==="string"&&ho(t[0])&&(s=t.map(u=>ci(u)));let a=o.write(s,r,n),i=new St(r,n,a,this.nextTensorId());if(this.trackTensor(i,o),n==="string"){let u=this.state.tensorInfo.get(a),c=cu(s);this.state.numBytes+=c-u.bytes,u.bytes=c}return i}makeTensorFromDataId(t,r,n,o){n=n||"float32";let s={dataId:t,shape:r,dtype:n};return this.makeTensorFromTensorInfo(s,o)}makeTensorFromTensorInfo(t,r){let{dataId:n,shape:o,dtype:s}=t,a=new St(o,s,n,this.nextTensorId());return this.trackTensor(a,r),a}makeVariable(t,r=!0,n,o){n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.cast(o));let s=new zr(t,r,n,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,r){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let n=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(n=t.size*fo(t.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:r||this.backend,dtype:t.dtype,shape:t.shape,bytes:n})),t instanceof zr||this.track(t)}incRef(t,r){this.trackTensor(t,r),this.backend.incRef(t.dataId)}removeDataId(t,r){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===r&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let r=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=r.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let n=t.size*fo(t.dtype);this.state.numBytes-=n}r.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,r.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let r=this.state.registeredVariables[t];this.disposeVariable(r)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let r=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-r,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,r,n,o,s,a){let i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:r,outputs:n,saved:s},u=yu(t);u!=null&&(o=u.gradFunc),o!=null&&(i.gradient=c=>(c=c.map((p,f)=>{if(p==null){let x=n[f],T=xo(x.size,x.dtype);return this.makeTensor(T,x.shape,x.dtype)}return p}),o(c.length>1?c:c[0],s,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let r={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(r.name=t),this.state.scopeStack.push(r),this.state.activeScope=r}endScope(t){let r=fi(t),n=new Set(r.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let a=this.state.activeScope.track[s];!a.kept&&!n.has(a.id)&&a.dispose()}let o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(s=>{!s.kept&&s.scopeId===o.id&&this.track(s)})}gradients(t,r,n,o=!1){if(S(r.length>0,()=>"gradients() received an empty list of xs."),n!=null&&n.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));S(s instanceof St,()=>"The result y returned by f() must be a tensor.");let a=l2(this.state.activeTape,r,s);if(!o&&a.length===0&&r.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let i={};i[s.id]=n==null?kd(s.shape):n,p2(i,a,c=>this.tidy(c),Id);let u=r.map(c=>i[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let p of c.saved)p.dispose()}),this.state.activeTape=null),{value:s,grads:u}})}customGrad(t){return S(yo(t),()=>"The f passed in customGrad(f) must be a function."),(...r)=>{S(r.every(i=>i instanceof St),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let n,o={};r.forEach((i,u)=>{o[u]=i});let s=(i,u)=>(n=t(...r,u),S(n.value instanceof St,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),S(yo(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),a=(i,u)=>{let c=n.gradFunc(i,u),p=Array.isArray(c)?c:[c];S(p.length===r.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),S(p.every(x=>x instanceof St),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let f={};return p.forEach((x,T)=>{f[T]=()=>x}),f};return this.runKernelFunc({forwardFunc:s,backwardsFunc:a,inputs:o})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,r){return this.state.tensorInfo.get(t).backend.readToGPU(t,r)}async time(t){let r=Un(),n=await this.backend.time(t);return n.wallMs=Un()-r,n}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new hi;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};mn.nextTensorId=0;mn.nextVariableId=0;function kd(e){let t=us(Ct(e),"float32");return N.makeTensor(t,e,"float32")}function Ou(){let e=mu();if(e._tfengine==null){let t=new cs(e);e._tfengine=new mn(t)}return u1(e._tfengine.ENV),d2(()=>e._tfengine),e._tfengine}var N=Ou();function Id(e,t){let r={a:e,b:t};return N.runKernel(ri,r)}function T2(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var qe=lt();qe.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});qe.registerFlag("IS_BROWSER",()=>T2());qe.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");qe.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));qe.registerFlag("PROD",()=>!1);qe.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>qe.getBool("DEBUG"));qe.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);qe.registerFlag("IS_TEST",()=>!1);qe.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);qe.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);qe.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);qe.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Se(e,t){let r=e;if(Ee(e))return t==="string"?[]:[e.length];if(typeof e=="object"){if("texture"in e){let s=e.channels||"RGBA";return[e.height,e.width*s.length]}else if("buffer"in e&&!(e.buffer instanceof ArrayBuffer))return[e.buffer.size/(t==null?4:fo(t))]}if(!Array.isArray(e))return[];let o=[];for(;Array.isArray(r)||Ee(r)&&t!=="string";)o.push(r.length),r=r[0];return Array.isArray(e)&&lt().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&E2(e,o,[]),o}function E2(e,t,r){if(r=r||[],!Array.isArray(e)&&!Ee(e)){S(t.length===0,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}S(t.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${e.length} elements`),S(e.length===t[0],()=>`Element arr[${r.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);let n=t.slice(1);for(let o=0;o<e.length;++o)E2(e[o],n,r.concat(o))}function N2(e,t,r,n){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${r}' passed to '${n}' must be ${e} tensor, but got ${t} tensor`)}}function g(e,t,r,n="numeric"){if(e instanceof St)return N2(n,e.dtype,t,r),e;let o=go(e);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),N2(n,o,t,r),e==null||!Ee(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){let u=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${r}' must be a Tensor or TensorLike, but got '${u}'`)}let s=Se(e,o);!Ee(e)&&!Array.isArray(e)&&(e=[e]);let i=o!=="string"?No(e,o):ln(e,[],!0);return N.makeTensor(i,s,o)}function jn(e,t,r,n="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${r} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((s,a)=>g(s,`${t}[${a}]`,r,n))}var $u="__op";function v(e){let t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let r=t[0],n=e[r];r.endsWith("_")&&(r=r.substring(0,r.length-1)),r=r+$u;let o=(...s)=>{N.startScope(r);try{let a=n(...s);return Mn(a)&&console.error("Cannot return a Promise inside of tidy."),N.endScope(a),a}catch(a){throw N.endScope(null),a}};return Object.defineProperty(o,"name",{value:r,configurable:!0}),o}function Ad(e,t){let r=g(e,"real","complex"),n=g(t,"imag","complex");jt(r.shape,n.shape,`real and imag shapes, ${r.shape} and ${n.shape}, must match in call to tf.complex().`);let o={real:r,imag:n};return N.runKernel(O1,o)}var ke=v({complex_:Ad});function ge(e,t,r,n){if(n==null)n=go(e);else if(n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof e=="object"&&("texture"in e||"buffer"in e&&!(e.buffer instanceof ArrayBuffer))){if(n!=="float32"&&n!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${n}.`);return N.backend.createTensorFromGPUData(e,t||r,n)}if(!Ee(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Bt(t);let o=Ct(t),s=Ct(r);S(o===s,()=>`Based on the provided shape, [${t}], the tensor should have ${o} values but has ${s}`);for(let a=0;a<r.length;++a){let i=r[a],u=a===r.length-1?i!==Ct(t.slice(a)):!0;S(r[a]===t[a]||!u,()=>`Error creating a new Tensor. Inferred shape (${r}) does not match the provided shape (${t}). `)}}return!Ee(e)&&!Array.isArray(e)&&(e=[e]),t=t||r,e=n!=="string"?No(e,n):ln(e,[],!0),N.makeTensor(e,t,n)}function ye(e,t,r){let n=Se(e,r);return ge(e,t,n,r)}var gs={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var di=4;async function k2(e,t){let r=[],n=[],o=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<o.length;++a){let i=o[a],u=Array.isArray(e)?e[a].tensor:e[i];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);let c={name:i,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){let p=new Promise(async f=>{let x=await u.bytes(),T=x.reduce((D,C)=>D+C.length,0)+di*x.length,k=new Uint8Array(T),O=0;for(let D=0;D<x.length;D++){let C=x[D],K=new Uint8Array(new Uint32Array([C.length]).buffer);k.set(K,O),O+=di,k.set(C,O),O+=C.length}f(k)});n.push(p)}else n.push(u.data());t!=null&&(c.group=t),r.push(c)}let s=await Promise.all(n);return{data:Od(s),specs:r}}function gi(e,t){let r={},n,o=0;for(let s of t){let a=s.name,i=s.dtype,u=s.shape,c=Ct(u),p;if("quantization"in s){let f=s.quantization;if(f.dtype==="uint8"||f.dtype==="uint16"){if(!("min"in f&&"scale"in f))throw new Error(`Weight ${s.name} with quantization ${f.dtype} doesn't have corresponding metadata min and scale.`)}else if(f.dtype==="float16"){if(i!=="float32")throw new Error(`Weight ${s.name} is quantized with ${f.dtype} which only supports weights of type float32 not ${i}.`)}else throw new Error(`Weight ${s.name} has unknown quantization dtype ${f.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let x=gs[f.dtype],T=e.slice(o,o+c*x),k=f.dtype==="uint8"?new Uint8Array(T):new Uint16Array(T);if(i==="float32")if(f.dtype==="uint8"||f.dtype==="uint16"){p=new Float32Array(k.length);for(let O=0;O<k.length;O++){let D=k[O];p[O]=D*f.scale+f.min}}else if(f.dtype==="float16")n===void 0&&(n=Cd()),p=n(k);else throw new Error(`Unsupported quantization type ${f.dtype} for weight type float32.`);else if(i==="int32"){if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error(`Unsupported quantization type ${f.dtype} for weight type int32.`);p=new Int32Array(k.length);for(let O=0;O<k.length;O++){let D=k[O];p[O]=Math.round(D*f.scale+f.min)}}else throw new Error(`Unsupported dtype in weight '${a}': ${i}`);o+=c*x}else if(i==="string"){let f=Ct(s.shape);p=[];for(let x=0;x<f;x++){let T=new Uint32Array(e.slice(o,o+di))[0];o+=di;let k=new Uint8Array(e.slice(o,o+T));p.push(k),o+=T}}else{let f=gs[i],x=e.slice(o,o+c*f);if(i==="float32")p=new Float32Array(x);else if(i==="int32")p=new Int32Array(x);else if(i==="bool")p=new Uint8Array(x);else if(i==="complex64"){p=new Float32Array(x);let T=new Float32Array(p.length/2),k=new Float32Array(p.length/2);for(let C=0;C<T.length;C++)T[C]=p[C*2],k[C]=p[C*2+1];let O=ye(T,u,"float32"),D=ye(k,u,"float32");r[a]=ke(O,D),O.dispose(),D.dispose()}else throw new Error(`Unsupported dtype in weight '${a}': ${i}`);o+=c*f}i!=="complex64"&&(r[a]=ye(p,u,i))}return r}function Od(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,r=[];e.forEach(s=>{if(t+=s.byteLength,r.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let n=new Uint8Array(t),o=0;return r.forEach(s=>{n.set(new Uint8Array(s.buffer),o),o+=s.byteLength}),n.buffer}var Du=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function S2(e){return Du?Buffer.byteLength(e):new Blob([e]).size}function I2(e){if(Du)return Buffer.from(e).toString("base64");let t=new Uint8Array(e),r="";for(let n=0,o=t.length;n<o;n++)r+=String.fromCharCode(t[n]);return btoa(r)}function _2(e){if(Du){let n=Buffer.from(e,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}let t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;++n)r.set([t.charCodeAt(n)],n);return r.buffer}function So(e){if(e.length===1)return e[0];let t=0;e.forEach(o=>{t+=o.byteLength});let r=new Uint8Array(t),n=0;return e.forEach(o=>{r.set(new Uint8Array(o),n),n+=o.byteLength}),r.buffer}function Fu(e){let t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);let r=e.split(t);return r[r.length-1]}function yi(e,t){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),r}function Cu(e,t,r){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!r)throw new Error("modelJSON has weightsManifest but weightData is null");n.weightSpecs=t,n.weightData=r}return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),n}async function ko(e,t){let r,n;return e.weightsManifest!=null&&([r,n]=await t(e.weightsManifest)),Cu(e,r,n)}function _r(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:S2(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:S2(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}function bi(e){let t=[];for(let r of e)t.push(...r.weights);return t}function $d(){let e=r=>{let n=r<<13,o=0;for(;!(n&8388608);)o-=8388608,n<<=1;return n&=-8388609,o+=947912704,n|o},t=new Uint32Array(2048);t[0]=0;for(let r=1;r<1024;r++)t[r]=e(r);for(let r=1024;r<2048;r++)t[r]=939524096+(r-1024<<13);return t}function Dd(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Fd(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Cd(){let e=$d(),t=Dd(),r=Fd();return n=>{let o=new ArrayBuffer(4*n.length),s=new Uint32Array(o);for(let a=0;a<n.length;a++){let i=n[a],u=e[r[i>>10]+(i&1023)]+t[i>>10];s[a]=u}return new Float32Array(o)}}var Rt=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Rt.instance==null&&(Rt.instance=new Rt),Rt.instance}static registerSaveRouter(t){Rt.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Rt.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Rt.getHandlers(t,"save")}static getLoadHandlers(t,r){return Rt.getHandlers(t,"load",r)}static getHandlers(t,r,n){let o=[];return(r==="load"?Rt.getInstance().loadRouters:Rt.getInstance().saveRouters).forEach(a=>{let i=a(t,n);i!==null&&o.push(i)}),o}},A2=e=>Rt.registerSaveRouter(e),O2=e=>Rt.registerLoadRouter(e),$2=e=>Rt.getSaveHandlers(e),D2=(e,t)=>Rt.getLoadHandlers(e,t);var Ru="tensorflowjs",Lu=1,Wn="models_store",fn="model_info_store";function F2(){if(!lt().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Pu(e){let t=e.result;t.createObjectStore(Wn,{keyPath:"modelPath"}),t.createObjectStore(fn,{keyPath:"modelPath"})}var Ar=class{constructor(t){if(this.indexedDB=F2(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,r){return new Promise((n,o)=>{let s=this.indexedDB.open(Ru,Lu);s.onupgradeneeded=()=>Pu(s),s.onsuccess=()=>{let a=s.result;if(r==null){let i=a.transaction(Wn,"readonly"),c=i.objectStore(Wn).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return a.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(c.result.modelArtifacts)},c.onerror=p=>(a.close(),o(c.error)),i.oncomplete=()=>a.close()}else{let i=_r(r),u=a.transaction(fn,"readwrite"),c=u.objectStore(fn),p=c.put({modelPath:this.modelPath,modelArtifactsInfo:i}),f;p.onsuccess=()=>{f=a.transaction(Wn,"readwrite");let T=f.objectStore(Wn).put({modelPath:this.modelPath,modelArtifacts:r,modelArtifactsInfo:i});T.onsuccess=()=>n({modelArtifactsInfo:i}),T.onerror=k=>{c=u.objectStore(fn);let O=c.delete(this.modelPath);O.onsuccess=()=>(a.close(),o(T.error)),O.onerror=D=>(a.close(),o(T.error))}},p.onerror=x=>(a.close(),o(p.error)),u.oncomplete=()=>{f==null?a.close():f.oncomplete=()=>a.close()}}},s.onerror=a=>o(s.error)})}};Ar.URL_SCHEME="indexeddb://";var C2=e=>lt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Ar.URL_SCHEME)?Rd(e.slice(Ar.URL_SCHEME.length)):null;Rt.registerSaveRouter(C2);Rt.registerLoadRouter(C2);function Rd(e){return new Ar(e)}function Ld(e){return e.startsWith(Ar.URL_SCHEME)?e.slice(Ar.URL_SCHEME.length):e}var xi=class{constructor(){this.indexedDB=F2()}async listModels(){return new Promise((t,r)=>{let n=this.indexedDB.open(Ru,Lu);n.onupgradeneeded=()=>Pu(n),n.onsuccess=()=>{let o=n.result,s=o.transaction(fn,"readonly"),i=s.objectStore(fn).getAll();i.onsuccess=()=>{let u={};for(let c of i.result)u[c.modelPath]=c.modelArtifactsInfo;t(u)},i.onerror=u=>(o.close(),r(i.error)),s.oncomplete=()=>o.close()},n.onerror=o=>r(n.error)})}async removeModel(t){return t=Ld(t),new Promise((r,n)=>{let o=this.indexedDB.open(Ru,Lu);o.onupgradeneeded=()=>Pu(o),o.onsuccess=()=>{let s=o.result,a=s.transaction(fn,"readwrite"),i=a.objectStore(fn),u=i.get(t),c;u.onsuccess=()=>{if(u.result==null)return s.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let p=i.delete(t),f=()=>{c=s.transaction(Wn,"readwrite");let T=c.objectStore(Wn).delete(t);T.onsuccess=()=>r(u.result.modelArtifactsInfo),T.onerror=k=>n(u.error)};p.onsuccess=f,p.onerror=x=>(f(),s.close(),n(u.error))}},u.onerror=p=>(s.close(),n(u.error)),a.oncomplete=()=>{c==null?s.close():c.oncomplete=()=>s.close()}},o.onerror=s=>n(o.error)})}};var Vr="/",Io="tensorflowjs_models",R2="info",Pd="model_topology",Md="weight_specs",Bd="weight_data",Gd="model_metadata";function L2(e){return{info:[Io,e,R2].join(Vr),topology:[Io,e,Pd].join(Vr),weightSpecs:[Io,e,Md].join(Vr),weightData:[Io,e,Bd].join(Vr),modelMetadata:[Io,e,Gd].join(Vr)}}function P2(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function zd(e){let t=e.split(Vr);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Vr)}function Vd(e){return e.startsWith(Or.URL_SCHEME)?e.slice(Or.URL_SCHEME.length):e}var Or=class{constructor(t){if(!lt().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=L2(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let r=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=_r(t);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,r),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,I2(t.weightData));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:o}}catch(s){throw P2(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let r={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);r.modelTopology=n;let o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);r.weightSpecs=o;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let i=JSON.parse(s);r.format=i.format,r.generatedBy=i.generatedBy,r.convertedBy=i.convertedBy,i.signature!=null&&(r.signature=i.signature),i.userDefinedMetadata!=null&&(r.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(r.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(r.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(r.trainingConfig=i.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return r.weightData=_2(a),r}};Or.URL_SCHEME="localstorage://";var M2=e=>lt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Or.URL_SCHEME)?Ud(e.slice(Or.URL_SCHEME.length)):null;Rt.registerSaveRouter(M2);Rt.registerLoadRouter(M2);function Ud(e){return new Or(e)}var vi=class{constructor(){S(lt().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),S(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},r=Io+Vr,n=Vr+R2;for(let o=0;o<this.LS.length;++o){let s=this.LS.key(o);if(s.startsWith(r)&&s.endsWith(n)){let a=zd(s);t[a]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=Vd(t);let r=L2(t);if(this.LS.getItem(r.info)==null)throw new Error(`Cannot find model at path '${t}'`);let n=JSON.parse(this.LS.getItem(r.info));return P2(r),n}};var _o="://",ie=class{constructor(){this.managers={}}static getInstance(){return ie.instance==null&&(ie.instance=new ie),ie.instance}static registerManager(t,r){S(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(_o)&&(t=t.slice(0,t.indexOf(_o))),S(t.length>0,()=>"scheme must not be an empty string.");let n=ie.getInstance();S(n.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),n.managers[t]=r}static getManager(t){let r=ie.getInstance().managers[t];if(r==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return r}static getSchemes(){return Object.keys(ie.getInstance().managers)}};function wi(e){if(e.indexOf(_o)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ie.getSchemes().join(",")}`);return{scheme:e.split(_o)[0],path:e.split(_o)[1]}}async function B2(e,t,r=!1){S(e!==t,()=>`Old path and new path are the same: '${e}'`);let n=Rt.getLoadHandlers(e);S(n.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),S(n.length<2,()=>`Copying failed because more than one (${n.length}) load handlers for source URL ${e}.`);let o=n[0],s=Rt.getSaveHandlers(t);S(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),S(s.length<2,()=>`Copying failed because more than one (${n.length}) save handlers for destination URL ${t}.`);let a=s[0],i=wi(e).scheme,u=wi(e).path,c=i===wi(e).scheme,p=await o.load();r&&c&&await ie.getManager(i).removeModel(u);let f=await a.save(p);return r&&!c&&await ie.getManager(i).removeModel(u),f.modelArtifactsInfo}async function G2(){let e=ie.getSchemes(),t={};for(let r of e){let n=await ie.getManager(r).listModels();for(let o in n){let s=r+_o+o;t[s]=n[o]}}return t}async function z2(e){let t=wi(e);return ie.getManager(t.scheme).removeModel(t.path)}async function V2(e,t){return B2(e,t,!1)}async function U2(e,t){return B2(e,t,!0)}var Mu=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,r){return fetch(t,r)}now(){return performance.now()}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${r}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,r){return new TextDecoder(r).decode(t)}setTimeoutCustom(t,r){if(typeof window>"u"||!lt().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,r);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},r),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",n=>{if(n.source===window&&n.data.name===this.messageName){n.stopPropagation();let o=this.functionRefs[n.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}};if(lt().get("IS_BROWSER")){lt().setPlatform("browser",new Mu);try{ie.registerManager(Or.URL_SCHEME,new vi)}catch(e){}try{ie.registerManager(Ar.URL_SCHEME,new xi)}catch(e){}}var jd={importFetch:()=>j2()},Bu;var Gu=class{constructor(){this.util=W2(),this.textEncoder=new this.util.TextEncoder}fetch(t,r){return lt().global.fetch!=null?lt().global.fetch(t,r):(Bu==null&&(Bu=jd.importFetch()),Bu(t,r))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,r){if(r!=="utf-8"&&r!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${r}`);return this.textEncoder.encode(t)}decode(t,r){return t.length===0?"":new this.util.TextDecoder(r).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};lt().get("IS_NODE")&&!lt().get("IS_BROWSER")&&lt().setPlatform("node",new Gu);function he(e,t="float32",r){return t=t||"float32",Bt(e),new pn(e,t,r)}function Wd(e,t){let r=g(e,"x","cast");if(!uu(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&r.dtype!=="string"||t!=="string"&&r.dtype==="string")throw new Error("Only strings can be casted to strings");let n={x:r},o={dtype:t};return N.runKernel(ni,n,o)}var wt=v({cast_:Wd});function Hd(e){let r={x:g(e,"x","clone","string_or_numeric")};return N.runKernel(oi,r)}var Ge=v({clone_:Hd});function Ti(e,t=!1){console.log(e.toString(t))}Ou();var Kd={buffer:he,cast:wt,clone:Ge,print:Ti};g2(Kd);function qd(e){lt().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}y2(qd);function pt(e,t){return N.tidy(e,t)}function At(e){fi(e).forEach(r=>r.dispose())}function Ie(e){return N.keep(e)}function H2(e){return N.setBackend(e)}function K2(){return N.ready()}function Xd(e,t){let r=g(e,"a","add"),n=g(t,"b","add");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(ri,o)}var et=v({add_:Xd});function Yd(e,t){let r=g(e,"a","floorDiv"),n=g(t,"b","floorDiv");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(ul,o)}var Ni=v({floorDiv_:Yd});function Jd(e,t){let r=g(e,"a","div"),n=g(t,"b","div");if([r,n]=bt(r,n),r.dtype==="int32"&&n.dtype==="int32")return Ni(r,n);let o={a:r,b:n},s={};return N.runKernel(Y1,o,s)}var ft=v({div_:Jd});function Zd(e,t){let r=g(e,"a","mul"),n=g(t,"b","mul");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(Gl,o)}var W=v({mul_:Zd});function Qd(e){let t=g(e,"x","abs");if(t.dtype==="complex64"){let r={x:t};return N.runKernel($1,r)}else{let r={x:t};return N.runKernel(c1,r)}}var ae=v({abs_:Qd});function t0(e){let r={x:g(e,"x","acos")};return N.runKernel(l1,r)}var q2=v({acos_:t0});function e0(e){let r={x:g(e,"x","acosh")};return N.runKernel(p1,r)}var X2=v({acosh_:e0});function r0(e){S(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),S(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((o,s)=>g(o,`tensors${s}`,"addN")),r=t[0];t.forEach(o=>{if(o.dtype!==r.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(o=>{if(!sr(o.shape,r.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});let n=t;return N.runKernel(m1,n)}var Y2=v({addN_:r0});function n0(e,t=null,r=!1){let o={x:g(e,"x","all","bool")},s={axis:t,keepDims:r};return N.runKernel(f1,o,s)}var J2=v({all_:n0});function o0(e,t=null,r=!1){let o={x:g(e,"x","any","bool")},s={axis:t,keepDims:r};return N.runKernel(h1,o,s)}var Z2=v({any_:o0});function s0(e,t=0){let n={x:g(e,"x","argMax")},o={axis:t};return N.runKernel(d1,n,o)}var Q2=v({argMax_:s0});function i0(e,t=0){let n={x:g(e,"x","argMin")},o={axis:t};return N.runKernel(g1,n,o)}var tm=v({argMin_:i0});function a0(e){let r={x:g(e,"x","asin")};return N.runKernel(y1,r)}var em=v({asin_:a0});function u0(e){let r={x:g(e,"x","asinh")};return N.runKernel(b1,r)}var rm=v({asinh_:u0});function c0(e){let r={x:g(e,"x","atan")};return N.runKernel(x1,r)}var nm=v({atan_:c0});function l0(e,t){let r=g(e,"a","atan2"),n=g(t,"b","atan2");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(w1,o)}var om=v({atan2_:l0});function p0(e){let r={x:g(e,"x","atanh")};return N.runKernel(v1,r)}var sm=v({atanh_:p0});function im(e,t,r,n,o,s,a="channelsLast"){let[i,u]=ys(t),c;if(a==="channelsLast")c=[i,u,e[3],e[3]];else if(a==="channelsFirst")c=[i,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return bs(e,c,r,n,o,s,!1,a)}function bs(e,t,r,n,o,s,a=!1,i="channelsLast"){let[u,c,p,f]=[-1,-1,-1,-1];if(i==="channelsLast")[u,c,p,f]=e;else if(i==="channelsFirst")[u,f,c,p]=e;else throw new Error(`Unknown dataFormat ${i}`);let[x,T,,k]=t,[O,D]=ys(r),[C,K]=ys(n),P=zu(x,C),G=zu(T,K),{padInfo:q,outHeight:z,outWidth:rt}=h0(o,c,p,O,D,P,G,s,i),it=a?k*f:k,Y;return i==="channelsFirst"?Y=[u,it,z,rt]:i==="channelsLast"&&(Y=[u,z,rt,it]),{batchSize:u,dataFormat:i,inHeight:c,inWidth:p,inChannels:f,outHeight:z,outWidth:rt,outChannels:it,padInfo:q,strideHeight:O,strideWidth:D,filterHeight:x,filterWidth:T,effectiveFilterHeight:P,effectiveFilterWidth:G,dilationHeight:C,dilationWidth:K,inShape:e,outShape:Y,filterShape:t}}function m0(e,t,r,n,o){n==null&&(n=f0(e,t,r));let s=e[0],a=e[1],i=Ei((s-t+2*n)/r+1,o),u=Ei((a-t+2*n)/r+1,o);return[i,u]}function f0(e,t,r,n=1){let o=zu(t,n);return Math.floor((e[0]*(r-1)-r+o)/2)}function ys(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function zu(e,t){return t<=1?e:e+(e-1)*(t-1)}function h0(e,t,r,n,o,s,a,i,u){let c,p,f;if(typeof e=="number"){c={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};let T=m0([t,r],s,n,e,i);p=T[0],f=T[1]}else if(e==="same"){p=Math.ceil(t/n),f=Math.ceil(r/o);let x=Math.max(0,(p-1)*n+s-t),T=Math.max(0,(f-1)*o+a-r),k=Math.floor(x/2),O=x-k,D=Math.floor(T/2),C=T-D;c={top:k,bottom:O,left:D,right:C,type:"SAME"}}else if(e==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((t-s+1)/n),f=Math.ceil((r-a+1)/o);else if(typeof e=="object"){let x=u==="channelsLast"?e[1][0]:e[2][0],T=u==="channelsLast"?e[1][1]:e[2][1],k=u==="channelsLast"?e[2][0]:e[3][0],O=u==="channelsLast"?e[2][1]:e[3][1];c={top:x,bottom:T,left:k,right:O,type:x===0&&T===0&&k===0&&O===0?"VALID":"EXPLICIT"},p=Ei((t-s+x+T)/n+1,i),f=Ei((r-a+k+O)/o+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outHeight:p,outWidth:f}}function Ei(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ao(e){let[t,r,n]=ys(e);return t===1&&r===1&&n===1}function be(e,t){return Ao(e)||Ao(t)}function Ur(e){return ys(e).every(t=>t>0)}function Qt(e,t,r){if(r!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);if(typeof t=="number")S(Gr(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${t}.`);else if(typeof t=="object")t.forEach(n=>{n.forEach(o=>{S(Gr(o),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${r} but got pad ${o}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}function d0(e,t){let n={x:g(e,"x","reshape","string_or_numeric")},o={shape:t};return N.runKernel(ip,n,o)}var L=v({reshape_:d0});function g0(e,t,r,n,o){let s=g(e,"x","avgPool","float32"),a=1;S(be(r,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`);let i=s,u=!1;s.rank===3&&(u=!0,i=L(s,[1,s.shape[0],s.shape[1],s.shape[2]])),S(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),Qt("avgPool",n,o);let c={x:i},p={filterSize:t,strides:r,pad:n,dimRoundingMode:o},f=N.runKernel(T1,c,p);return f=wt(f,s.dtype),u?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Si=v({avgPool_:g0});function y0(e,t,r,n,o,s="NDHWC"){let a=g(e,"x","avgPool3d","float32"),i=a,u=!1;a.rank===4&&(u=!0,i=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),S(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),S(typeof r=="number"&&r>0||Array.isArray(r)&&r[0]>0&&r[1]>0&&r[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${r}'`),Qt("avgPool3d",n,o);let c={x:i},p={filterSize:t,strides:r,pad:n,dimRoundingMode:o,dataFormat:s},f=N.runKernel(N1,c,p);return f=wt(f,i.dtype),u?L(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var am=v({avgPool3d_:y0});function b0(e,t=0){S(e.length>=1,()=>"Pass at least one tensor to concat");let r=jn(e,"tensors","concat","string_or_numeric");if(r[0].dtype==="complex64"&&r.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),r.length===1)return Ge(r[0]);let n=r,o={axis:t};return N.runKernel(D1,n,o)}var Lt=v({concat_:b0});function x0(e,t,r=!1,n=!1){let o=g(e,"a","matMul"),s=g(t,"b","matMul");[o,s]=bt(o,s);let a={a:o,b:s},i={transposeA:r,transposeB:n};return N.runKernel(E1,a,i)}var kt=v({matMul_:x0});function v0(e){let r={x:g(e,"x","sigmoid","float32")};return N.runKernel(wp,r)}var cr=v({sigmoid_:v0});function w0(e,t,r){let n=g(e,"x","slice","string_or_numeric");if(n.rank===0)throw new Error("Slicing scalar is not possible");let o={x:n},s={begin:t,size:r};return N.runKernel(yp,o,s)}var mt=v({slice_:w0});function T0(e){let r={x:g(e,"x","tanh","float32")};return N.runKernel(Gp,r)}var xs=v({tanh_:T0});function N0(e,t,r,n,o,s){let a=g(e,"forgetBias","basicLSTMCell"),i=g(t,"lstmKernel","basicLSTMCell"),u=g(r,"lstmBias","basicLSTMCell"),c=g(n,"data","basicLSTMCell"),p=g(o,"c","basicLSTMCell"),f=g(s,"h","basicLSTMCell"),x=Lt([c,f],1),T=kt(x,i),k=et(T,u),O=k.shape[0],D=k.shape[1]/4,C=[O,D],K=mt(k,[0,0],C),P=mt(k,[0,D],C),G=mt(k,[0,D*2],C),q=mt(k,[0,D*3],C),z=et(W(cr(K),xs(P)),W(p,cr(et(a,G)))),rt=W(xs(z),cr(q));return[z,rt]}var um=v({basicLSTMCell_:N0});function E0(e,t,r){let n=g(e,"x","batchToSpaceND"),o=t.reduce((i,u)=>i*u);S(n.rank>=1+t.length,()=>`input rank is ${n.rank} but should be > than blockShape.length ${t.length}`),S(r.length===t.length,()=>`crops.length is ${r.length} but should be equal to blockShape.length  ${t.length}`),S(n.shape[0]%o===0,()=>`input tensor batch is ${n.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${o}`);let s={x:n},a={blockShape:t,crops:r};return N.runKernel(S1,s,a)}var ki=v({batchToSpaceND_:E0});function cm(e){let t;return e.rank===0||e.rank===1?t=L(e,[1,1,1,e.size]):e.rank===2?t=L(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=L(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}function S0(e,t,r,n,o,s){s==null&&(s=.001);let a=g(e,"x","batchNorm"),i=g(t,"mean","batchNorm"),u=g(r,"variance","batchNorm"),c;o!=null&&(c=g(o,"scale","batchNorm"));let p;n!=null&&(p=g(n,"offset","batchNorm")),S(i.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S(p==null||i.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S(c==null||i.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let x={x:cm(a),scale:c,offset:p,mean:i,variance:u},T={varianceEpsilon:s},k=N.runKernel(cl,x,T);return L(k,a.shape)}var hn=v({batchNorm_:S0});function k0(e,t,r,n,o,s){let a=g(e,"x","batchNorm"),i=g(t,"mean","batchNorm"),u=g(r,"variance","batchNorm"),c;o!=null&&(c=g(o,"scale","batchNorm"));let p;return n!=null&&(p=g(n,"offset","batchNorm")),S(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),S(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),S(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),p!=null&&S(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),hn(a,i,u,p,c,s)}var lm=v({batchNorm2d_:k0});function I0(e,t,r,n,o,s){let a=g(e,"x","batchNorm"),i=g(t,"mean","batchNorm"),u=g(r,"variance","batchNorm"),c;o!=null&&(c=g(o,"scale","batchNorm"));let p;return n!=null&&(p=g(n,"offset","batchNorm")),S(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),S(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),S(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),p!=null&&S(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),hn(a,i,u,p,c,s)}var pm=v({batchNorm3d_:I0});function _0(e,t,r,n,o,s){let a=g(e,"x","batchNorm"),i=g(t,"mean","batchNorm"),u=g(r,"variance","batchNorm"),c;o!=null&&(c=g(o,"scale","batchNorm"));let p;return n!=null&&(p=g(n,"offset","batchNorm")),S(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),S(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),S(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&S(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),p!=null&&S(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),hn(a,i,u,p,c,s)}var mm=v({batchNorm4d_:_0});function A0(e,t,r){let n=g(e,"x","bincount"),o=g(t,"weights","bincount");S(n.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${n.dtype}`),S(r>=0,()=>`size must be non-negative, but got ${r}.`),S(o.size===n.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${n.shape}, weights shape: ${o.shape}.`);let s={x:n,weights:o},a={size:r};return N.runKernel(k1,s,a)}var Ii=v({bincount_:A0});function O0(e,t){let r=g(e,"s0","broadcastArgs","int32"),n=g(t,"s1","broadcastArgs","int32");if(r.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${r.rank}`);if(n.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${n.rank}`);let o={s0:r,s1:n};return N.runKernel(I1,o)}var fm=v({broadcastArgs_:O0});function $0(e,t){let r=g(e,"broadcastTo","x"),n=r.shape;if(Bt(t),t.length<r.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${r.rank}.`);if(t.length>r.rank){let c=r.shape.slice();for(;c.length<t.length;)c.unshift(1);r=L(r,c)}let o=r.shape,s=Array.from(t);for(let c=t.length-1;c>=0;c--)if(o[c]===t[c])s[c]=1;else if(r.shape[c]!==1)throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${t}].`);if(s.map((c,p)=>c>1?p:-1).filter(c=>c>=0).length===0)return Ge(r);let i={x:r},u={reps:s};return N.runKernel(si,i,u)}var Oo=v({broadcastTo_:$0});function D0(e){let r={x:g(e,"x","ceil","float32")};return N.runKernel(_1,r)}var hm=v({ceil_:D0});function Dr(e,t,r){Bt(e);let n={shape:e,value:t,dtype:r};return N.runKernel(sl,{},n)}function F0(e,t,r){let n=g(e,"x","clipByValue");if(S(t<=r,()=>`Error in clip: min (${t}) must be less than or equal to max (${r}).`),t===r)return Dr(n.shape,t,n.dtype);let o={x:n},s={clipValueMin:t,clipValueMax:r};return N.runKernel(A1,o,s)}var _i=v({clipByValue_:F0});function C0(e){return Lt(e,0)}var dm=v({concat1d_:C0});function R0(e,t){return Lt(e,t)}var gm=v({concat2d_:R0});function L0(e,t){return Lt(e,t)}var ym=v({concat3d_:L0});function P0(e,t){return Lt(e,t)}var bm=v({concat4d_:P0});function M0(e,t,r,n,o="NHWC",s=[1,1],a){let i=g(e,"x","conv2d","float32"),u=g(t,"filter","conv2d","float32"),c=i,p=!1;i.rank===3&&(p=!0,c=L(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),S(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Qt("conv2d",n,a);let f=o==="NHWC"?c.shape[3]:c.shape[1];S(f===u.shape[2],()=>`Error in conv2d: depth of input (${f}) must match input depth for filter ${u.shape[2]}.`),S(be(r,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${r} and dilations '${s}'`),S(Ur(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),S(Ur(r),()=>"Error in conv2D: Strides should be larger than 0.");let x={x:c,filter:u},T={strides:r,pad:n,dataFormat:o,dilations:s,dimRoundingMode:a},k=N.runKernel(F1,x,T);return p?L(k,[k.shape[1],k.shape[2],k.shape[3]]):k}var dn=v({conv2d_:M0});function B0(e,t,r,n,o="NWC",s=1,a){let i=g(e,"x","conv1d"),u=g(t,"filter","conv1d"),c=i,p=!1;i.rank===2&&(p=!0,c=L(i,[1,i.shape[0],i.shape[1]])),S(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),S(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Qt("conv1d",n,a),S(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),S(be(r,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${r} and dilation '${s}'`),S(Ur(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),S(Ur(r),()=>"Error in conv1D: Stride should be larger than 0."),S(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);let f=L(u,[1,u.shape[0],u.shape[1],u.shape[2]]),x=L(c,[c.shape[0],1,c.shape[1],c.shape[2]]),D=dn(x,f,[1,r],n,"NHWC",[1,s],a);return p?L(D,[D.shape[2],D.shape[3]]):L(D,[D.shape[0],D.shape[2],D.shape[3]])}var xm=v({conv1d_:B0});function G0(e,t,r,n,o,s="NHWC",a){S(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,u=t,c=!1;t.rank===3&&(c=!0,u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),S(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),S(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),S(r.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${r.rank}`);let p=s==="NHWC"?i[3]:i[1],f=s==="NHWC"?u.shape[3]:u.shape[1];S(p===r.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${r.shape[2]}.`),S(f===r.shape[3],()=>`Error in conv2dDerInput: depth of output (${f}) must match output depth for filter ${r.shape[3]}.`),Qt("conv2dDerInput",o,a);let x={dy:u,filter:r},T={strides:n,pad:o,dataFormat:s,dimRoundingMode:a,inputShape:i},k=N.runKernel(R1,x,T);return c?L(k,[k.shape[1],k.shape[2],k.shape[3]]):k}var Ai=v({conv2DBackpropInput_:G0});function z0(e,t,r,n,o,s){let a=g(e,"x","conv2dTranspose"),i=g(t,"filter","conv2dTranspose");return Ai(r,a,i,n,o,"NHWC",s)}var vm=v({conv2dTranspose_:z0});function V0(e,t,r,n,o="NDHWC",s=[1,1,1]){let a=g(e,"x","conv3d"),i=g(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),S(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),S(u.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`),S(be(r,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${r} and dilations '${s}'`),S(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),S(Ur(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),S(Ur(r),()=>"Error in conv3D: Strides should be larger than 0.");let p={x:u,filter:i},f={strides:r,pad:n,dataFormat:o,dilations:s},x=N.runKernel(L1,p,f);return c?L(x,[x.shape[1],x.shape[2],x.shape[3],x.shape[4]]):x}var wm=v({conv3d_:V0});function U0(e,t,r,n,o){S(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,a=t,i=!1;t.rank===4&&(i=!0,a=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,e[0],e[1],e[2],e[3]]);let u=s[4],c=a.shape[4];S(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),S(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),S(r.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${r.rank}`),S(u===r.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${r.shape[3]}.`),S(c===r.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${r.shape[4]}.`);let p={dy:a,filter:r},f={pad:o,strides:n,inputShape:s},x=N.runKernel(P1,p,f);return i?L(x,[x.shape[1],x.shape[2],x.shape[3],x.shape[4]]):x}var Tm=v({conv3DBackpropInput_:U0});function j0(e,t,r,n,o){let s=g(e,"x","conv3dTranspose"),a=g(t,"filter","conv3dTranspose");return Tm(r,s,a,n,o)}var Nm=v({conv3dTranspose_:j0});function W0(e){let r={x:g(e,"x","cos","float32")};return N.runKernel(M1,r)}var Em=v({cos_:W0});function H0(e){let r={x:g(e,"x","cosh","float32")};return N.runKernel(B1,r)}var Sm=v({cosh_:H0});function K0(e,t=0,r=!1,n=!1){let s={x:g(e,"x","cumprod")},a={axis:t,exclusive:r,reverse:n};return N.runKernel(G1,s,a)}var km=v({cumprod_:K0});function q0(e,t=0,r=!1,n=!1){let s={x:g(e,"x","cumsum")},a={axis:t,exclusive:r,reverse:n};return N.runKernel(z1,s,a)}var Im=v({cumsum_:q0});function X0(e,t,r,n=!1){let o=g(e,"x","denseBincount"),s=g(t,"weights","denseBincount");S(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),S(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),S(r>=0,()=>`size must be non-negative, but got ${r}.`),S(s.size===o.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${s.shape}.`);let a={x:o,weights:s},i={size:r,binaryOutput:n};return N.runKernel(U1,a,i)}var _m=v({denseBincount_:X0});function Y0(e,t,r="NHWC"){let n=g(e,"x","depthToSpace","float32"),o=r==="NHWC"?n.shape[1]:n.shape[2],s=r==="NHWC"?n.shape[2]:n.shape[3],a=r==="NHWC"?n.shape[3]:n.shape[1];S(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),S(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t}  for depthToSpace with input shape
    ${n.shape}`),S(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t} for depthToSpace with input shape
        ${n.shape}`),S(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${n.shape}`);let i={x:n},u={blockSize:t,dataFormat:r};return N.runKernel(j1,i,u)}var Am=v({depthToSpace_:Y0});function J0(e,t,r,n,o="NHWC",s=[1,1],a){let i=g(e,"x","depthwiseConv2d","float32"),u=g(t,"filter","depthwiseConv2d","float32"),c=i,p=!1;i.rank===3&&(p=!0,c=L(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),S(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);let f=o==="NHWC"?c.shape[3]:c.shape[1];S(f===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${f}) must match the inChannels dimension in filter ${u.shape[2]}.`),Qt("depthwiseConv2d",n,a);let x={x:c,filter:u},T={strides:r,pad:n,dataFormat:o,dilations:s,dimRoundingMode:a},k=N.runKernel(W1,x,T);return p?L(k,[k.shape[1],k.shape[2],k.shape[3]]):k}var $o=v({depthwiseConv2d_:J0});function Z0(e){let r={x:g(e,"x","diag")};return N.runKernel(q1,r)}var Om=v({diag_:Z0});function Q0(e,t,r,n,o=[1,1],s="NHWC"){let a=g(e,"x","dilation2d"),i=g(t,"filter","dilation2d");S(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),S(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),S(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let u=a,c=!1;a.rank===3&&(u=L(a,[1,a.shape[0],a.shape[1],a.shape[2]]),c=!0),S(u.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${i.shape[2]}`);let p={x:u,filter:i},f={strides:r,pad:n,dilations:o},x=N.runKernel(X1,p,f);return c?L(x,[x.shape[1],x.shape[2],x.shape[3]]):x}var $m=v({dilation2d_:Q0});function Dm(e,t){let r=[];for(let n=0;n<t.length;n++){let o=e[e.length-n-1],s=t.length-n-1,a=t[s];(o==null||o===1&&a>1)&&r.unshift(s)}return r}function Ot(e,t){let r=[],n=Math.max(e.length,t.length);for(let o=0;o<n;o++){let s=e[e.length-o-1];s==null&&(s=1);let a=t[t.length-o-1];if(a==null&&(a=1),s===1)r.unshift(a);else if(a===1)r.unshift(s);else if(s!==a){let i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else r.unshift(s)}return r}function tg(e,t){let r=g(e,"a","equal","string_or_numeric"),n=g(t,"b","equal","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(tl,o)}var $i=v({equal_:tg});function eg(e,t,r){let n=g(t,"a","where"),o=g(r,"b","where"),s=g(e,"condition","where","bool"),a=Ot(Ot(s.shape,n.shape),o.shape),i=Oo(s,a),u=Oo(n,a),c=Oo(o,a),p={condition:i,t:u,e:c};return N.runKernel(dp,p)}var yr=v({where_:eg});function rg(e){let r={x:g(e,"x","zerosLike")};return N.runKernel(Hp,r)}var re=v({zerosLike_:rg});function ng(e,t){let r=g(e,"a","div"),n=g(t,"b","div");[r,n]=bt(r,n);let o=ft(r,n),s=re(o),a=$i(n,s);return yr(a,s,o)}var Fm=v({divNoNan_:ng});function og(e,t){let r=g(e,"t1","dot"),n=g(t,"t2","dot");S((r.rank===1||r.rank===2)&&(n.rank===1||n.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${r.rank} and ${n.rank}.`);let o=r.rank===1?r.size:r.shape[1],s=n.rank===1?n.size:n.shape[0];if(S(o===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${s}.`),r.rank===1&&n.rank===1){let a=L(r,[1,-1]),i=L(n,[-1,1]),u=kt(a,i);return L(u,[])}else if(r.rank===1&&n.rank===2){let a=L(r,[1,-1]),i=L(n,[n.shape[0],n.shape[1]]),u=kt(a,i);return L(u,[u.size])}else if(r.rank===2&&n.rank===1){let a=L(n,[-1,1]),i=kt(r,a);return L(i,[i.size])}else{let a=L(n,[n.shape[0],n.shape[1]]);return kt(r,a)}}var Cm=v({dot_:og});function sg(e,...t){let r=t.map((o,s)=>g(o,`tensors${s}`,"einsum")),n={equation:e};return N.runKernel(J1,r,n)}var Rm=v({einsum_:sg});function ig(e){let r={x:g(e,"x","elu","float32")};return N.runKernel(Z1,r)}var Di=v({elu_:ig});function ag(e){let t=g(e,"x","erf");S(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=wt(t,"float32"));let r={x:t};return N.runKernel(Q1,r)}var Lm=v({erf_:ag});function ug(e,t,r){let n=e.length+t.length,o=[],s=0,a=0;for(let i=0;i<n;i++)r.indexOf(i)===-1?o.push(e[s++]):o.push(t[a++]);return o}function gn(e,t){let r=t.map(n=>1);return ug(e,r,t)}function lg(e,t=null,r=!1){let o={x:g(e,"x","max")},s={reductionIndices:t,keepDims:r};return N.runKernel(Al,o,s)}var Fr=v({max_:lg});function pg(e,t=null,r=!1){let o={x:g(e,"x","min")},s={axis:t,keepDims:r};return N.runKernel(Rl,o,s)}var vs=v({min_:pg});function mg(e,t){let r=g(e,"base","pow"),n=g(t,"exp","pow");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(Yl,o)}var jr=v({pow_:mg});function ct(e,t){if((Ee(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ee(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return ge(e,[],[],t)}function fg(e){let r={x:g(e,"x","sqrt","float32")};return N.runKernel(Np,r)}var _e=v({sqrt_:fg});function hg(e){let t=g(e,"x","square"),r={};return N.runKernel("Square",{x:t},r)}var ue=v({square_:hg});function dg(e,t=null,r=!1){let n=g(e,"x","sum");n.dtype==="bool"&&(n=wt(n,"int32"));let o={x:n},s={axis:t,keepDims:r};return N.runKernel(Ep,o,s)}var It=v({sum_:dg});function gg(e,t="euclidean",r=null,n=!1){e=g(e,"x","norm");let o=Pm(e,t,r),s=o.shape;if(n){let a=un(r,e.shape);s=gn(o.shape,a)}return L(o,s)}function Pm(e,t,r=null){if(e.rank===0)return ae(e);if(e.rank!==1&&r===null)return Pm(L(e,[-1]),t,r);if(e.rank===1||typeof r=="number"||Array.isArray(r)&&r.length===1){if(t===1)return It(ae(e),r);if(t===1/0)return Fr(ae(e),r);if(t===-1/0)return vs(ae(e),r);if(t==="euclidean"||t===2)return _e(It(jr(ae(e),ct(2,"int32")),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(r)&&r.length===2){if(t===1)return Fr(It(ae(e),r[0]),r[1]-1);if(t===1/0)return Fr(It(ae(e),r[1]),r[0]);if(t===-1/0)return vs(It(ae(e),r[1]),r[0]);if(t==="fro"||t==="euclidean")return _e(It(ue(e),r));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${r}`)}var Hn=v({norm_:gg});function yg(e,t=null,r=!1){return Hn(e,"euclidean",t,r)}var Mm=v({euclideanNorm_:yg});function bg(e){let r={x:g(e,"x","exp")};return N.runKernel(el,r)}var Ae=v({exp_:bg});function xg(e,t=0){let r=g(e,"x","expandDims","string_or_numeric");S(t<=r.rank,()=>"Axis must be <= rank of the tensor");let n={input:r},o={dim:t};return N.runKernel(rl,n,o)}var Oe=v({expandDims_:xg});function vg(e){let r={x:g(e,"x","expm1")};return N.runKernel(nl,r)}var Bm=v({expm1_:vg});function wg(e,t){let r=g(e,"x","tile","string_or_numeric");S(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of reps ${t}.`);let n={x:r},o={reps:t};return N.runKernel(si,n,o)}var yn=v({tile_:wg});function Tg(e,t,r,n="float32"){t==null&&(t=e);let o=he([e,t],n),s=e<=t?e:t;for(let i=0;i<s;++i)o.set(1,i,i);let a=L(o.toTensor(),[e,t]);if(r==null)return a;if(r.length===1)return yn(Oe(a,0),[r[0],1,1]);if(r.length===2)return yn(Oe(Oe(a,0),0),[r[0],r[1],1,1]);if(r.length===3)return yn(Oe(Oe(Oe(a,0),0),0),[r[0],r[1],r[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${r.length}D.`)}var Fi=v({eye_:Tg});function Ng(e){let r={x:g(e,"x","floor","float32")};return N.runKernel(al,r)}var Ci=v({floor_:Ng});function Eg(e,t,r=0,n=0){let o=g(e,"x","gather"),s=g(t,"indices","gather","int32"),a={x:o,indices:s},i={axis:r,batchDims:n};return N.runKernel(ll,a,i)}var Ri=v({gather_:Eg});function Sg(e,t){let r=g(e,"a","greater","string_or_numeric"),n=g(t,"b","greater","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(ml,o)}var Kn=v({greater_:Sg});function kg(e,t){let r=g(e,"a","greaterEqual","string_or_numeric"),n=g(t,"b","greaterEqual","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(fl,o)}var Li=v({greaterEqual_:kg});function Ig(e){let r={input:g(e,"input","imag")};return N.runKernel(dl,r)}var bn=v({imag_:Ig});function _g(e){let r={x:g(e,"x","isFinite")};return N.runKernel(gl,r)}var Gm=v({isFinite_:_g});function Ag(e){let r={x:g(e,"x","isInf")};return N.runKernel(yl,r)}var zm=v({isInf_:Ag});function Og(e){let r={x:g(e,"x","isNaN")};return N.runKernel(bl,r)}var Vm=v({isNaN_:Og});function $g(e,t=.2){let n={x:g(e,"x","leakyRelu")},o={alpha:t};return N.runKernel(xl,n,o)}var Pi=v({leakyRelu_:$g});function Dg(e,t){let r=g(e,"a","less","string_or_numeric"),n=g(t,"b","less","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(vl,o)}var Um=v({less_:Dg});function Fg(e,t){let r=g(e,"a","lessEqual","string_or_numeric"),n=g(t,"b","lessEqual","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(wl,o)}var Do=v({lessEqual_:Fg});function jm(e,t,r){if(r<=0)throw new Error("The number of values should be positive.");let n={start:e,stop:t,num:r};return N.runKernel(Tl,{},n)}function Cg(e,t=5,r=1,n=1,o=.5){let s=g(e,"x","localResponseNormalization");S(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),S(Gr(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=s,i=!1;s.rank===3&&(i=!0,a=L(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let u={x:a},c={depthRadius:t,bias:r,alpha:n,beta:o},p=N.runKernel(_l,u,c);return i?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Wm=v({localResponseNormalization_:Cg});function Rg(e){let r={x:g(e,"x","log","float32")};return N.runKernel(Nl,r)}var Wr=v({log_:Rg});function Lg(e){let r={x:g(e,"x","log1p")};return N.runKernel(El,r)}var Mi=v({log1p_:Lg});function Hm(e,t){S(yo(e),()=>"The f passed in variableGrads(f) must be a function"),S(t==null||Array.isArray(t)&&t.every(c=>c instanceof zr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let r=t!=null;if(!r){t=[];for(let c in N.registeredVariables)t.push(N.registeredVariables[c])}let n=r?t.filter(c=>!c.trainable):null,o=t.length;t=t.filter(c=>c.trainable),S(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);let s=!0,{value:a,grads:i}=N.gradients(e,t,null,s);S(i.some(c=>c!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),S(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let u={};return t.forEach((c,p)=>{i[p]!=null&&(u[c.name]=i[p])}),n!=null&&n.forEach(c=>u[c.name]=null),{value:a,grads:u}}function $e(e){return N.customGrad(e)}function Pg(e){let r={x:g(e,"x","neg")};return N.runKernel(zl,r)}var xe=v({neg_:Pg});function Mg(e){let r={x:g(e,"x","softplus")};return N.runKernel(Tp,r)}var Bi=v({softplus_:Mg});function Bg(e){let t=g(e,"x","logSigmoid");return $e(n=>({value:xe(Bi(xe(n))),gradFunc:a=>W(a,cr(xe(n)))}))(t)}var Km=v({logSigmoid_:Bg});function Gg(e,t){let r=g(e,"a","sub"),n=g(t,"b","sub");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(Mp,o)}var ut=v({sub_:Gg});function zg(e,t=-1){let r=g(e,"logits","logSoftmax");if(t===-1&&(t=r.rank-1),t!==r.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${r.rank} and axis was ${t}`);return $e((o,s)=>{let i=Fr(o,t,!0),u=ut(o,i),c=ut(wt(u,"float32"),Wr(It(Ae(u),t,!0)));return s([c]),{value:c,gradFunc:(f,x)=>{let[T]=x,k=!0,O=Ae(T);return ut(f,W(It(f,t,k),O))}}})(r)}var qm=v({logSoftmax_:zg});function Vg(e,t=null,r=!1){let n=g(e,"x","logSumExp"),o=un(t,n.shape),s=Fr(n,o,!0),a=ut(n,s),i=Ae(a),u=It(i,o),c=Wr(u),p=et(L(s,c.shape),c);if(r){let f=gn(p.shape,o);return L(p,f)}return p}var Gi=v({logSumExp_:Vg});function Ug(e,t){let r=g(e,"a","logicalAnd","bool"),n=g(t,"b","logicalAnd","bool");Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(Sl,o)}var qn=v({logicalAnd_:Ug});function jg(e){let r={x:g(e,"x","logicalNot","bool")};return N.runKernel(kl,r)}var zi=v({logicalNot_:jg});function Wg(e,t){let r=g(e,"a","logicalOr","bool"),n=g(t,"b","logicalOr","bool");Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(Il,o)}var Vi=v({logicalOr_:Wg});function Hg(e,t){let r=g(e,"a","logicalXor","bool"),n=g(t,"b","logicalXor","bool");return Ot(r.shape,n.shape),qn(Vi(e,t),zi(qn(e,t)))}var Xm=v({logicalXor_:Hg});var Ui=2147483648;function Kg(e,t,r="left"){let n=g(e,"sortedSequence","searchSorted"),o=g(t,"values","searchSorted"),s=n.shape[n.shape.length-1],a=o.shape[o.shape.length-1],i=L(n,[-1,s]),u=L(o,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ct(u.shape)>=Ui)throw new Error(`values tensor size must less than ${Ui}`);if(i.shape[1]>=Ui)throw new Error(`trailing dim_size must less than ${Ui} for int32 output type, was ${i.shape[1]}`);let c={sortedSequence:i,values:u},p={side:r};return N.runKernel(hp,c,p)}var ws=v({searchSorted_:Kg});function Ym(e,t){return ws(e,t,"left")}function qg(e,t,r,n,o){let s=g(e,"x","maxPool"),a=1,i=s,u=!1;s.rank===3&&(u=!0,i=L(s,[1,s.shape[0],s.shape[1],s.shape[2]])),S(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),S(be(r,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${a}'`),Qt("maxPool",n,o);let c={x:i},p={filterSize:t,strides:r,pad:n,dimRoundingMode:o},f=N.runKernel($l,c,p);return u?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var ji=v({maxPool_:qg});function Xg(e,t=[1,1,1],r,n,o,s="NDHWC"){let a=g(e,"x","maxPool3d"),i=a,u=!1;a.rank===4&&(u=!0,i=L(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),S(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),S(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Qt("maxPool3d",n,o);let c={x:i},p={filterSize:t,strides:r,pad:n,dimRoundingMode:o,dataFormat:s},f=N.runKernel(Dl,c,p);return u?L(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Jm=v({maxPool3d_:Xg});function Yg(e,t,r,n,o=!1){let a={x:g(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:r,pad:n,includeBatchInIndex:o},u=N.runKernel(Fl,a,i);return{result:u[0],indexes:u[1]}}var Zm=v({maxPoolWithArgmax_:Yg});function Jg(e,t){let r=g(e,"a","maximum"),n=g(t,"b","maximum");[r,n]=bt(r,n),r.dtype==="bool"&&(r=wt(r,"int32"),n=wt(n,"int32")),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(Ol,o)}var Wi=v({maximum_:Jg});function Zg(e,t=null,r=!1){let o={x:g(e,"x","mean")},s={axis:t,keepDims:r};return N.runKernel(Cl,o,s)}var Xn=v({mean_:Zg});function Cr(e,t="float32"){if(Bt(e),t==="complex64"){let n=Cr(e,"float32"),o=Cr(e,"float32");return ke(n,o)}let r=xo(Ct(e),t);return N.makeTensor(r,e,t)}function Rr(e,t="float32"){if(Bt(e),t==="complex64"){let n=Rr(e,"float32"),o=Cr(e,"float32");return ke(n,o)}let r=us(Ct(e),t);return N.makeTensor(r,e,t)}function Qm(e,t,{indexing:r="xy"}={}){if(r!=="xy"&&r!=="ij")throw new TypeError(`${r} is not a valid third argument to meshgrid`);if(e===void 0)return[];let n=g(e,"x","meshgrid",e instanceof St?e.dtype:"float32");if(t===void 0)return[n];let o=g(t,"y","meshgrid",t instanceof St?t.dtype:"float32"),s=Ct(n.shape),a=Ct(o.shape);return r==="xy"?(n=L(n,[1,-1]),o=L(o,[-1,1]),[kt(Rr([a,1],n.dtype),n),kt(o,Rr([1,s],o.dtype))]):(n=L(n,[-1,1]),o=L(o,[1,-1]),[kt(n,Rr([1,a],n.dtype)),kt(Rr([s,1],o.dtype),o)])}function Qg(e,t){let r=g(e,"a","minimum"),n=g(t,"b","minimum");[r,n]=bt(r,n),r.dtype==="bool"&&(r=wt(r,"int32"),n=wt(n,"int32")),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(Ll,o)}var Hi=v({minimum_:Qg});function t6(e,t,r){S(r==="reflect"||r==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${r}.`);let n=g(e,"x","mirrorPad");if(n.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");S(t.length===n.rank,()=>`Padding doesn't match input. Must be ${n.rank}. Got ${t.length}.`);let o=r==="reflect"?1:0;for(let i=0;i<n.rank;i++)S(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),S(t[i][0]>=0&&t[i][0]<=n.shape[i]-o&&t[i][1]>=0&&t[i][1]<=n.shape[i]-o,()=>`Padding in dimension ${i} cannot be greater than or equal to ${n.shape[i]-o} or less than 0 for input of shape ${n.shape}`);let s={paddings:t,mode:r},a={x:n};return N.runKernel(Pl,a,s)}var ef=v({mirrorPad_:t6});function e6(e,t){let r=g(e,"a","mod"),n=g(t,"b","mod");[r,n]=bt(r,n);let o={a:r,b:n};return N.runKernel(Ml,o)}var rf=v({mod_:e6});function r6(e,t=null,r=!1){e=g(e,"x","moments");let n=un(t,e.shape),o=Xn(e,n,r),s=o.shape;r||(s=gn(o.shape,n));let a=ue(ut(wt(e,"float32"),L(o,s))),i=Xn(a,n,r);return{mean:o,variance:i}}var nf=v({moments_:r6});function n6(e,t,r,n){let o=g(t,"data","multiRNNCell"),s=jn(r,"c","multiRNNCell"),a=jn(n,"h","multiRNNCell"),i=o,u=[];for(let f=0;f<e.length;f++){let x=e[f](i,s[f],a[f]);u.push(x[0]),u.push(x[1]),i=x[1]}let c=[],p=[];for(let f=0;f<u.length;f+=2)c.push(u[f]),p.push(u[f+1]);return[c,p]}var of=v({multiRNNCell_:n6});function o6(e,t,r,n=!1){let o=g(e,"logits","multinomial"),s=o.size,a=o.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);r=r||Math.random();let u={logits:a===1?L(o,[1,-1]):o},c={numSamples:t,seed:r,normalized:n},p=N.runKernel(Bl,u,c);return a===1?L(p,[p.size]):p}var sf=v({multinomial_:o6});function s6(e,t){let r=g(e,"a","notEqual","string_or_numeric"),n=g(t,"b","notEqual","string_or_numeric");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n};return N.runKernel(Vl,o)}var Ki=v({notEqual_:s6});function i6(e,t,r=1,n=0,o="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:g(e,"indices","oneHot","int32")},i={dtype:o,depth:t,onValue:r,offValue:n};return N.runKernel(Kl,a,i)}var af=v({oneHot_:i6});function a6(e){let r={x:g(e,"x","onesLike")};return N.runKernel(Hl,r)}var uf=v({onesLike_:a6});function u6(e,t){let r=g(e,"v1","outerProduct"),n=g(t,"v2","outerProduct");S(r.rank===1&&n.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${r.rank} and ${n.rank}.`);let o=L(r,[-1,1]),s=L(n,[1,-1]);return kt(o,s)}var cf=v({outerProduct_:u6});function c6(e,t,r=0){let n=g(e,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let o={paddings:t,constantValue:r},s={x:n};return N.runKernel(Xl,s,o)}var Lr=v({pad_:c6});function l6(e,t,r=0){return S(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Lr(e,[t],r)}var lf=v({pad1d_:l6});function p6(e,t,r=0){return S(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Lr(e,t,r)}var pf=v({pad2d_:p6});function m6(e,t,r=0){return S(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Lr(e,t,r)}var mf=v({pad3d_:m6});function f6(e,t,r=0){return S(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Lr(e,t,r)}var ff=v({pad4d_:f6});function h6(e,t,r){let n=g(e,"x","spaceToBatchND");S(n.rank>=1+t.length,()=>`input rank ${n.rank} should be > than [blockShape] ${t.length}`),S(r.length===t.length,()=>`paddings.shape[0] ${r.length} must be equal to [blockShape] ${t.length}`),S(n.shape.reduce((a,i,u)=>u>0&&u<=t.length?a&&(i+r[u-1][0]+r[u-1][1])%t[u-1]===0:a,!0),()=>`input spatial dimensions ${n.shape.slice(1)} with paddings ${r.toString()} must be divisible by blockShapes ${t.toString()}`);let o={x:n},s={blockShape:t,paddings:r};return N.runKernel(Sp,o,s)}var qi=v({spaceToBatchND_:h6});function d6(e,t,r,n,o,s,a){o==null&&(o=[1,1]),s==null&&(s=1),n===0&&(n="valid");let i=g(e,"x","maxPool"),u=i,c=!1;i.rank===3&&(c=!0,u=L(i,[1,i.shape[0],i.shape[1],i.shape[2]])),S(be(s,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${o}'`);let p=im(u.shape,t,s,o,n),f=[p.dilationHeight,p.dilationWidth],x;n==="same"?x=y6([p.filterHeight,p.filterWidth],f):x=[[0,0],[0,0]];let T=f[0]===1&&f[1]===1,[k,O]=g6([p.inHeight,p.inWidth],f,x),D=T?n:"valid",C=T?u:qi(u,f,k),P=(r==="avg"?()=>Si(C,t,s,D,a):()=>ji(C,t,s,D,a))(),G=T?P:ki(P,f,O);return c?L(G,[G.shape[1],G.shape[2],G.shape[3]]):G}function g6(e,t,r){let n=r.map(p=>p[0]),o=r.map(p=>p[1]),s=e.concat(n,o),a=t.map((p,f)=>(p-s[f]%p)%p),i=o.map((p,f)=>p+a[f]),u=t.map((p,f)=>[n[f],i[f]]),c=t.map((p,f)=>[0,a[f]]);return[u,c]}function y6(e,t){let n=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),o=n.map(a=>Math.floor(a/2)),s=n.map((a,i)=>a-o[i]);return n.map((a,i)=>[o[i],s[i]])}var hf=v({pool_:d6});function b6(e,t){let r=g(e,"x","prelu"),n=g(t,"alpha","prelu"),o={x:r,alpha:n};return N.runKernel(Jl,o)}var Xi=v({prelu_:b6});function x6(e,t=null,r=!1){let n=g(e,"x","prod");n.dtype==="bool"&&(n=wt(n,"int32"));let o={x:n},s={axis:t,keepDims:r};return N.runKernel(Zl,o,s)}var df=v({prod_:x6});function v6(e,t,r,n){let o=e.map((p,f)=>g(p,`tensors${f}`,"raggedGather","int32")),s=g(t,"paramsDenseValues","raggedGather"),a=g(r,"indices","raggedGather","int32"),i={paramsNestedSplits:o,paramsDenseValues:s,indices:a},u={outputRaggedRank:n},c=N.runKernel(Ql,i,u);return{outputNestedSplits:c.slice(0,c.length-1),outputDenseValues:c[c.length-1]}}var gf=v({raggedGather_:v6});function w6(e,t,r){let n=g(e,"starts","raggedRange"),o=g(t,"limits","raggedRange",n.dtype),s=g(r,"deltas","raggedRange",n.dtype),a={starts:n,limits:o,deltas:s},i=N.runKernel(tp,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}var yf=v({raggedRange_:w6});function T6(e,t,r,n,o){let s=g(e,"shape","raggedTensorToTensor","int32"),a=g(t,"values","raggedTensorToTensor"),i=g(r,"defaultValue","raggedTensorToTensor",a.dtype),u=n.map((f,x)=>g(f,`tensors${x}`,"raggedTensorToTensor","int32")),c={shape:s,values:a,defaultValue:i,rowPartitionTensors:u},p={rowPartitionTypes:o};return N.runKernel(ep,c,p)}var bf=v({raggedTensorToTensor_:T6});function N6(e,t,r){Bt(e);let n=Ct(e),o=null;if(r==null||r==="float32")o=new Float32Array(n);else if(r==="int32")o=new Int32Array(n);else if(r==="bool")o=new Uint8Array(n);else throw new Error(`Unknown data type ${r}`);for(let s=0;s<n;s++)o[s]=t();return N.makeTensor(o,e,r)}var xf=v({rand_:N6});var Qi=nu(Lf());var Jn=class{constructor(t,r,n,o,s){this.mean=t,this.stdDev=r,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=s||Math.random();this.random=Qi.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let o=this.nextVal;return this.nextVal=NaN,o}let t,r,n=!1;for(;!n;){let o,s,a;do o=2*this.random()-1,s=2*this.random()-1,a=o*o+s*s;while(a>=1||a===0);let i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*o*i,r=this.mean+this.stdDev*s*i,(!this.truncated||this.isValidTruncated(t))&&(n=!0)}return(!this.truncated||this.isValidTruncated(r))&&(this.nextVal=this.convertValue(r)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}},Ji=class{constructor(t,r,n,o){this.alpha=t,this.beta=1/r,this.dtype=n;let s=o||Math.random();this.randu=Qi.alea(s.toString()),this.randn=new Jn(0,1,n,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,r,n,o,s,a;for(;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,t=o*o,r=1-.331*t*t,n=.5*t+this.d*(1-a+Math.log(a)),s=this.randu(),s<r||Math.log(s)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}},Zi=class{constructor(t=0,r=1,n,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=r-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${r} <= 1 and dtype is not float`);this.random=Qi.alea(o)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function O6(e,t,r=1,n="float32",o){if(Bt(e),r==null&&(r=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error(`Unsupported data type ${n}`);let s=new Ji(t,r,n,o),a=he(e,n);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var Pf=v({randomGamma_:O6});function $6(e,t=0,r=1,n,o){if(Bt(e),n!=null&&n==="bool")throw new Error(`Unsupported data type ${n}`);let s=new Jn(t,r,n,!1,o),a=he(e,n);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var ta=v({randomNormal_:$6});function D6(e,t,r){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return ta(e,0,1,t,r)}var Mf=v({randomStandardNormal_:D6});function F6(e,t=0,r=1,n="float32",o){Bt(e);let s=he(e,n),a=new Zi(t,r,null,o);for(let i=0;i<s.values.length;i++)s.values[i]=a.nextValue();return s.toTensor()}var ea=v({randomUniform_:F6});function xn(e,t,r=1,n="float32"){if(r===0)throw new Error("Cannot have a step of zero");let o={start:e,stop:t,step:r,dtype:n};return N.runKernel(rp,{},o)}function C6(e){let r={input:g(e,"input","real")};return N.runKernel(np,r)}var Hr=v({real_:C6});function R6(e){let r={x:g(e,"x","reciprocal")};return N.runKernel(op,r)}var Bf=v({reciprocal_:R6});function L6(e){let r={x:g(e,"x","relu")};return N.runKernel(sp,r)}var vn=v({relu_:L6});function P6(e){let r={x:g(e,"x","relu6")};return N.runKernel(cp,r)}var ra=v({relu6_:P6});function M6(e,t){let n={x:g(e,"x","reverse")},o={dims:t};return N.runKernel(lp,n,o)}var Xe=v({reverse_:M6});function B6(e){let t=g(e,"x","reverse");return S(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Xe(t,0)}var Gf=v({reverse1d_:B6});function G6(e,t){let r=g(e,"x","reverse");return S(r.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${r.rank}.`),Xe(r,t)}var zf=v({reverse2d_:G6});function z6(e,t){let r=g(e,"x","reverse");return S(r.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${r.rank}.`),Xe(r,t)}var Vf=v({reverse3d_:z6});function V6(e,t){let r=g(e,"x","reverse");return S(r.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${r.rank}.`),Xe(r,t)}var Uf=v({reverse4d_:V6});function U6(e){let r={x:g(e,"x","round")};return N.runKernel(pp,r)}var na=v({round_:U6});function j6(e){let r={x:g(e,"x","rsqrt","float32")};return N.runKernel(mp,r)}var jf=v({rsqrt_:j6});function W6(e){let r={x:g(e,"x","selu")};return N.runKernel(gp,r)}var Wf=v({selu_:W6});function H6(e,t,r,n,o,s=[1,1],a="NHWC"){let i=g(e,"x","separableConv2d"),u=g(t,"depthwiseFilter","separableConv2d"),c=g(r,"pointwiseFilter","separableConv2d"),p=i,f=!1;if(i.rank===3&&(f=!0,p=L(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");S(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),S(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),S(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),S(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),S(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);let x=u.shape[2],T=u.shape[3];S(c.shape[2]===x*T,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${x*T}, but got ${c.shape[2]}.`);let k=$o(p,u,n,o,a,s),D=dn(k,c,1,"valid",a);return f?L(D,[D.shape[1],D.shape[2],D.shape[3]]):D}var Hf=v({separableConv2d_:H6});async function K6(e,t){let r=g(e,"x","setdiff1d"),n=g(t,"y","setdiff1d");S(r.dtype===n.dtype,()=>`x and y should have the same dtype, but got x (${r.dtype}) and y (${n.dtype}).`),S(r.rank===1,()=>`x should be 1D tensor, but got x (${r.shape}).`),S(n.rank===1,()=>`y should be 1D tensor, but got y (${n.shape}).`);let o=await r.data(),s=await n.data(),a=new Set(s),i=0;for(let p=0;p<o.length;p++)a.has(o[p])||i++;let u=new pn([i],r.dtype),c=new pn([i],"int32");for(let p=0,f=0;p<o.length;p++)a.has(o[p])||(u.values[f]=o[p],c.values[f]=p,f++);return[u.toTensor(),c.toTensor()]}var Kf=K6;function q6(e){let r={x:g(e,"x","sign")};return N.runKernel(vp,r)}var qf=v({sign_:q6});function X6(e){let r={x:g(e,"x","sin","float32")};return N.runKernel(bp,r)}var Xf=v({sin_:X6});function Y6(e){let r={x:g(e,"x","sinh")};return N.runKernel(xp,r)}var Yf=v({sinh_:Y6});function J6(e,t,r){let n=g(e,"x","slice1d");return S(n.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${n.rank} tensor`),mt(n,[t],[r])}var Jf=v({slice1d_:J6});function Z6(e,t,r){let n=g(e,"x","slice2d");return S(n.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${n.rank} tensor`),mt(n,t,r)}var Zf=v({slice2d_:Z6});function Q6(e,t,r){let n=g(e,"x","slice3d");return S(n.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${n.rank} tensor`),mt(n,t,r)}var Qf=v({slice3d_:Q6});function t5(e,t,r){let n=g(e,"x","slice4d");return S(n.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${n.rank} tensor`),mt(n,t,r)}var t3=v({slice4d_:t5});function e5(e,t=-1){let r=g(e,"logits","softmax","float32");if(t===-1&&(t=r.rank-1),t!==r.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${r.rank} and dim was ${t}`);let n={logits:r},o={dim:t};return N.runKernel(Ip,n,o)}var e3=v({softmax_:e5});function r5(e){S(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(ol,t)}var Fo=v({fft_:r5});function n5(e){S(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return N.runKernel(hl,t)}var Zn=v({ifft_:n5});function o5(e){let t=e.shape[e.shape.length-1],r=e.size/t,n;if(t<=2){let o=L(e,[r,t]);n=Zn(o)}else{let o=[r,2*(t-1)],s=L(Hr(e),[r,t]),a=L(bn(e),[r,t]),i=Xe(mt(s,[0,1],[r,t-2]),1),u=W(Xe(mt(a,[0,1],[r,t-2]),1),ct(-1)),c=Lt([s,i],1),p=Lt([a,u],1),f=L(ke(c,p),[o[0],o[1]]);n=Zn(f)}if(n=Hr(n),e.rank===3&&e.shape[0]!==0){let o=n,s=e.shape[0];n=L(n,[s,n.shape[0]/s,n.shape[1]]),o.dispose()}return n}var oa=v({irfft_:o5});function s5(e,t,r=0){let o={x:g(e,"x","split")},s={numOrSizeSplits:t,axis:r};return N.runKernel(kp,o,s)}var Kr=v({split_:s5});function i5(e,t){S(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let r=e.shape[e.shape.length-1],n=e.size/r,o;if(t!=null&&t<r){let k=e.shape.map(D=>0),O=e.shape.map(D=>D);O[e.shape.length-1]=t,o=mt(e,k,O),r=t}else if(t!=null&&t>r){let k=e.shape.map(O=>O);k[e.shape.length-1]=t-r,o=Lt([e,Cr(k)],e.shape.length-1),r=t}else o=e;let s=re(o),a=L(ke(o,s),[n,r]),i=Fo(a),u=Math.floor(r/2)+1,c=Hr(i),p=bn(i),f=Kr(c,[u,r-u],c.shape.length-1),x=Kr(p,[u,r-u],p.shape.length-1),T=o.shape.slice();return T[o.shape.length-1]=u,L(ke(f[0],x[0]),T)}var Co=v({rfft_:i5});function a5(e,t){let r=g(e,"a","squaredDifference"),n=g(t,"b","squaredDifference");[r,n]=bt(r,n),Ot(r.shape,n.shape);let o={a:r,b:n},s={};return N.runKernel(Fp,o,s)}var sa=v({squaredDifference_:a5});function u5(e,t){let r=g(e,"x","squeeze","string_or_numeric");return L(r,ou(r.shape,t).newShape)}var Ht=v({squeeze_:u5});function c5(e,t=0){let r=jn(e,"tensors","stack","string_or_numeric");S(r.length>=1,()=>"Pass at least one tensor to tf.stack"),r.length>0&&S(t<=r[0].rank,()=>"Axis must be <= rank of the tensor");let n=r,o={axis:t};return N.runKernel(ql,n,o)}var ve=v({stack_:c5});function l5(e,t=0){let n={x:g(e,"x","step")},o={alpha:t};return N.runKernel(Kp,n,o)}var ia=v({step_:l5});function p5(e,t,r,n,o=0,s=0,a=0,i=0,u=0){let p={x:g(e,"x","stridedSlice","string_or_numeric")},f={begin:t,end:r,strides:n,beginMask:o,endMask:s,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:u};return N.runKernel(Cp,p,f)}var r3=v({stridedSlice_:p5});function m5(e){let r={x:g(e,"x","tan","float32")};return N.runKernel(Bp,r)}var n3=v({tan_:m5});function Xt(e,t){Ke(e);let r=Se(e,t);if(r.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return ge(e,null,r,t)}function Ye(e,t,r){if(Ke(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let n=Se(e,r);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return ge(e,t,n,r)}function aa(e,t,r){if(Ke(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");let n=Se(e,r);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return ge(e,t,n,r)}function o3(e,t,r){if(Ke(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");let n=Se(e,r);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return ge(e,t,n,r)}function s3(e,t,r){if(Ke(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");let n=Se(e,r);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return ge(e,t,n,r)}function i3(e,t,r){if(Ke(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");let n=Se(e,r);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||n,ge(e,t,n,r)}function f5(e,t=1,r=!0){let n=g(e,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let o=n.shape[n.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${t}`);let s={x:n},a={k:t,sorted:r},[i,u]=N.runKernel(zp,s,a);return{values:i,indices:u}}var a3=v({topk_:f5});function h5(e,t=0,r=1,n,o){if(Bt(e),n!=null&&n==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new Jn(t,r,n,!0,o),a=he(e,n);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var u3=v({truncatedNormal_:h5});function d5(e,t=0){let r=g(e,"x","unique","string_or_numeric");S(r.rank>0,()=>"The input tensor must be at least 1D");let n={x:r},o={axis:t},[s,a]=N.runKernel(Up,n,o);return{values:s,indices:a}}var c3=v({unique_:d5});function g5(e,t,r){let n=g(e,"x","unsortedSegmentSum"),o=g(t,"segmentIds","unsortedSegmentSum","int32");S(Gr(r),()=>"numSegments must be of dtype int");let s={x:n,segmentIds:o},a={numSegments:r};return N.runKernel(Wp,s,a)}var l3=v({unsortedSegmentSum_:g5});function y5(e,t=0){let r=g(e,"x","unstack","string_or_numeric");S(t>=-r.shape.length&&t<r.shape.length,()=>`Axis = ${t} is not in [-${r.shape.length}, ${r.shape.length})`);let n={value:r},o={axis:t};return N.runKernel(jp,n,o)}var Je=v({unstack_:y5});function p3(e,t){return ws(e,t,"right")}function m3(e,t=!0,r,n){return N.makeVariable(e,t,r,n)}function f3(e,t){let r=[];for(let s=0;s<t.length;s++)t[s]&&r.push(s);let n=he(e,"int32"),o=he([r.length,e.length],"int32");for(let s=0;s<r.length;s++){let a=n.indexToLoc(r[s]),i=s*e.length;o.values.set(a,i)}return o.toTensor()}async function b5(e){let t=g(e,"condition","whereAsync","bool"),r=await t.data(),n=f3(t.shape,r);return e!==t&&t.dispose(),n}var ua=b5;async function x5(e,t,r){let n=g(e,"tensor","boolMask"),o=g(t,"mask","boolMask","bool"),s=r==null?0:r,a=o.rank,i=n.shape;S(a>0,()=>"mask cannot be scalar"),jt(i.slice(s,s+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let O=s;O<s+a;O++)u*=i[O];let c=i.slice(0,s).concat([u],i.slice(s+a)),p=L(n,c),f=L(o,[-1]),x=await ua(f),T=Ht(x,[1]),k=Ri(p,T,s);return e!==n&&n.dispose(),t!==o&&o.dispose(),T.dispose(),p.dispose(),f.dispose(),x.dispose(),k}var v5=x5;function w5(e,t,r){let n=g(e,"x","transpose");if(t==null&&(t=n.shape.map((a,i)=>i).reverse()),S(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${t}.`),t.forEach(a=>{S(a>=0&&a<n.rank,()=>`All entries in 'perm' must be between 0 and ${n.rank-1} but got ${t}`)}),n.rank<=1)return n.clone();let o={x:n},s={perm:t};return n.dtype==="complex64"?pt(()=>{let a=Hr(n),i=bn(n);return a=N.runKernel(ii,{x:a},s),i=N.runKernel(ii,{x:i},s),r&&(i=xe(i)),ke(a,i)}):N.runKernel(ii,o,s)}var ca=v({transpose_:w5});function T5(e,t,r,n,o=!0){let s=g(e,"v","movingAverage"),a=g(t,"x","movingAverage"),i=g(r,"decay","movingAverage");v2(s,a),S(sr(s.shape,a.shape),()=>"Shape mismatch in v and x");let u=ct(1),c=ut(u,i),p=W(ut(a,s),c);if(o){S(n!=null,()=>"When using zeroDebias: true, step is required.");let f=g(n,"step","movingAverage");p=ft(p,ut(u,jr(i,f)))}return et(s,p)}var N5=v({movingAverage_:T5});function E5(e,t,r){let n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${r.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${n}, and batchDim: ${o}.`;if(r.rank<o)throw new Error(s+` update.rank < ${o}. `);if(e.length<n+(r.rank-o))throw new Error(s+` Output shape length < ${n+(r.rank-o)}`);if(r.rank!==o+e.length-n)throw new Error(s+` update.rank != ${o+e.length-n}`);for(let a=0;a<o;++a)if(r.shape[a]!==t.shape[a])throw new Error(s+` updates.shape[${a}] (${r.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<r.rank-o;++a)if(r.shape[a+o]!==e[a+n])throw new Error(s+` updates.shape[${a+o}] (${r.shape[a+o]}) != shape[${a+o}] (${e[a+o]})`)}function h3(e,t,r){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(r.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${r}`);if(r.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}E5(r,t,e)}function k5(e,t,r){Bt(r);let n=g(e,"indices","scatterND","int32"),o=g(t,"updates","scatterND");h3(o,n,r);let s={indices:n,updates:o},a={shape:r};return N.runKernel(fp,s,a)}var I5=v({scatterND_:k5});function d3(e,t,r,n){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let o=e.rank>0?e.shape[0]:1,s=e.rank>1?e.shape[1]:1;if(r.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${r.length}, should be: ${s}.`);let a=t.size;if(!(t.rank===0||t.rank===1&&a===o))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${o}]`);if(t.dtype!==n.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function A5(e,t,r,n=0){Bt(r);let o=g(e,"sparseIndices","sparseToDense","int32"),s=g(t,"sparseValues","sparseToDense","string_or_numeric"),a=g(n,"defaultValue","sparseToDense",s.dtype);d3(o,s,r,a);let i={sparseIndices:o,sparseValues:s,defaultValue:a},u={outputShape:r};return N.runKernel(Dp,i,u)}var O5=v({sparseToDense_:A5});function $5(e,t){let r=g(t,"indices","gatherND","int32"),o={params:g(e,"x","gatherND","string_or_numeric"),indices:r};return N.runKernel(pl,o)}var D5=v({gatherND_:$5});function g3(e,t){if(t==null)return e.shape.slice();if(sr(e.shape,t))return t;if(e.shape.length===t.length){let r=[];for(let n=0;n<e.shape.length;n++)t[n]==null&&e.shape[n]!=null?r.push(e.shape[n]):r.push(t[n]);return r}return t}function F5(e,t,r,n){let o=g(e,"x","dropout");if(S(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),S(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof St?o.clone():o;let s=g3(o,r),a=1-t,i=ft(Ci(et(ea(s,0,1,"float32",n),a)),a);return W(o,i)}var C5=v({dropout_:F5});function qu(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Ts(e,t,r){let n=1-e%2,o=new Float32Array(e);for(let s=0;s<e;++s){let a=2*Math.PI*s/(e+n-1);o[s]=t-r*Math.cos(a)}return Xt(o,"float32")}async function R5(e,t,r=1){let n=g(e,"predictions","inTopK"),o=g(t,"targets","inTopK");S(n.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${n.rank}`),S(n.rank-1===o.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${n.rank} and targets rank ${o.rank}`),jt(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=n.shape[n.shape.length-1];S(r>0&&r<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${r}`);let a=await n.data(),i=await o.data(),[u,c]=[a.length/s,s],p=su("bool",u);for(let f=0;f<u;f++){let x=f*c,T=a.subarray(x,x+c),k=[];for(let O=0;O<T.length;O++)k.push({value:T[O],index:O});k.sort((O,D)=>D.value-O.value),p[f]=0;for(let O=0;O<r;O++)if(k[O].index===i[f]){p[f]=1;break}}return e!==n&&n.dispose(),t!==o&&o.dispose(),ye(p,o.shape,"bool")}var L5=R5;var Xu={};Wt(Xu,{conv2d:()=>b3,depthwiseConv2d:()=>w3,matMul:()=>T3});function P5(e,t,r,n,o,s="NHWC",a){let i=e;e.rank===3&&(i=L(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]])),S(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),S(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),S(r.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${r}.`);let c=s==="NHWC"?i.shape[3]:i.shape[1],p=s==="NHWC"?u.shape[3]:u.shape[1];S(c===r[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${r[2]}.`),S(p===r[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${r[3]}).`),Qt("conv2dDerFilter",o,a);let f={x:i,dy:u},x={strides:n,pad:o,dataFormat:s,dimRoundingMode:a,filterShape:r};return N.runKernel(C1,f,x)}var y3=v({conv2DBackpropFilter_:P5});function Ro(e,t,r){if(r==null||r==="linear")return e;if(r==="relu")return W(e,ia(t));throw new Error(`Cannot compute gradient for fused activation ${r}.`)}function Lo(e,t){let r=t,n=Dm(e.shape,t.shape);return n.length>0&&(r=It(r,n)),L(r,e.shape)}function Po(e,t,r,n){if(t==="linear")return e;if(t==="relu")return vn(e);if(t==="elu")return Di(e);if(t==="relu6")return ra(e);if(t==="prelu")return Xi(e,r);if(t==="leakyrelu")return Pi(e,n);if(t==="sigmoid")return cr(e);throw new Error(`Unknown fused activation ${t}.`)}var Mo=(e,t)=>!(e>0)||t==="linear";function M5({x:e,filter:t,strides:r,pad:n,dataFormat:o="NHWC",dilations:s=[1,1],dimRoundingMode:a,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(u=u||"linear",Mo(N.state.gradientDepth,u)===!1){S(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let z=dn(e,t,r,n,o,s,a);return i!=null&&(z=et(z,i)),Po(z,u,c,p)}let f=g(e,"x","conv2d","float32"),x=g(t,"filter","conv2d","float32"),T=f,k=!1;f.rank===3&&(k=!0,T=L(f,[1,f.shape[0],f.shape[1],f.shape[2]])),S(T.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${T.rank}.`),S(x.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${x.rank}.`),Qt("fused conv2d",n,a);let O=o==="NHWC"?T.shape[3]:T.shape[1];S(x.shape[2]===O,()=>`Error in conv2d: depth of input (${O}) must match input depth for filter ${x.shape[2]}.`),S(be(r,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${r} and dilations '${s}'`);let D=bs(T.shape,x.shape,r,s,n,a),C;i!=null&&(C=g(i,"bias","fused conv2d"),[C]=bt(C,f),o==="NHWC"?Ot(D.outShape,C.shape):(S(C.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${C.shape.length}.`),S(C.shape.length===0||C.shape[0]===D.outChannels||C.shape[0]===1,()=>`Error in fused conv2d: bias shape (${C.shape}) is not compatible with the number of output channels (${D.outChannels})`)));let K;if(c!=null){let z=c.shape;if(S(z.length<=1||z.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${z.length}.`),z.length===1)S(z[0]===1||z[0]===D.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${z}) is not compatible with the number of output channels (${D.outChannels}).`);else if(z.length===3)try{Ot(z,D.outShape)}catch(rt){let it=`Error in fused conv2d: PReLU activation weights (${z}) is not compatible with the output shape of the conv2d (${D.outShape}).`;throw Error(it)}K=g(c,"prelu weights","fused conv2d")}let P=(z,rt)=>{S(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);let[it,Y,ot,xt]=rt,$t=Ro(z,ot,u);S(Ao(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let ht=Ai(Y.shape,$t,it,r,n),Yt=y3(Y,$t,it.shape,r,n),te=[ht,Yt];if(xt!=null){let pr=Lo(xt,$t);te.push(pr)}return te},G={x:T,filter:x,bias:C,preluActivationWeights:K},q={strides:r,pad:n,dataFormat:o,dilations:s,dimRoundingMode:a,activation:u,leakyreluAlpha:p};return i==null?$e((rt,it,Y)=>{let ot=N.runKernel(du,G,q);return Y([it,rt,ot]),k&&(ot=L(ot,[ot.shape[1],ot.shape[2],ot.shape[3]])),{value:ot,gradFunc:P}})(T,x):$e((rt,it,Y,ot)=>{let xt=N.runKernel(du,G,q);return ot([it,rt,xt,Y]),k&&(xt=L(xt,[xt.shape[1],xt.shape[2],xt.shape[3]])),{value:xt,gradFunc:P}})(T,x,C)}var b3=v({fusedConv2d_:M5});function B5(e,t,r,n,o,s=[1,1],a){let i=e;e.rank===3&&(i=L(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;u.rank===3&&(u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={x:i,dy:u},p={strides:n,pad:o,dimRoundingMode:a,dilations:s,filterShape:r};return N.runKernel(H1,c,p)}var x3=v({depthwiseConv2dNativeBackpropFilter_:B5});function G5(e,t,r,n,o,s=[1,1],a){let i=t,u=!1;t.rank===3&&(u=!0,i=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={dy:i,filter:r},p={strides:n,pad:o,dimRoundingMode:a,dilations:s,inputShape:e},f=N.runKernel(K1,c,p);return u?L(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var v3=v({depthwiseConv2dNativeBackpropInput_:G5});function z5({x:e,filter:t,strides:r,pad:n,dataFormat:o="NHWC",dilations:s=[1,1],dimRoundingMode:a,bias:i,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:p}){if(Mo(N.state.gradientDepth,u)===!1){let q=$o(e,t,r,n,o,s,a);return i!=null&&(q=et(q,i)),Po(q,u,c,p)}let f=g(e,"x","depthwiseConv2d","float32"),x=g(t,"filter","depthwiseConv2d","float32"),T=f,k=!1;f.rank===3&&(k=!0,T=L(f,[1,f.shape[0],f.shape[1],f.shape[2]])),S(T.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${T.rank}.`),S(x.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${x.rank}.`),S(T.shape[3]===x.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${T.shape[3]}) must match the inChannels dimension in filter ${x.shape[2]}.`),s==null&&(s=[1,1]),S(be(r,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${r} and dilations '${s}'`),Qt("fused depthwiseConv2d",n,a);let O=bs(T.shape,x.shape,r,s,n,a,!0),D;i!=null&&(D=g(i,"bias","fused conv2d"),[D]=bt(D,f),Ot(O.outShape,D.shape));let C;c!=null&&(C=g(c,"prelu weights","fused depthwiseConv2d"));let K=(q,z)=>{S(Ao(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[rt,it,Y,ot]=z,xt=Ro(q,Y,u),$t=v3(it.shape,xt,rt,r,n,s,a),ht=x3(it,xt,rt.shape,r,n,s,a);if(ot!=null){let Yt=Lo(D,xt);return[$t,ht,Yt]}return[$t,ht]},P={x:T,filter:x,bias:D,preluActivationWeights:C},G={strides:r,pad:n,dataFormat:o,dilations:s,dimRoundingMode:a,activation:u,leakyreluAlpha:p};return i==null?$e((z,rt,it)=>{let Y=N.runKernel(gu,P,G);return it([rt,z,Y]),k&&(Y=L(Y,[Y.shape[1],Y.shape[2],Y.shape[3]])),{value:Y,gradFunc:K}})(T,x):$e((z,rt,it,Y)=>{let ot=N.runKernel(gu,P,G);return Y([rt,z,ot,it]),k&&(ot=L(ot,[ot.shape[1],ot.shape[2],ot.shape[3]])),{value:ot,gradFunc:K}})(T,x,D)}var w3=v({fusedDepthwiseConv2d_:z5});function V5({a:e,b:t,transposeA:r=!1,transposeB:n=!1,bias:o,activation:s="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Mo(N.state.gradientDepth,s)===!1){let xt=kt(e,t,r,n);return o!=null&&(xt=et(xt,o)),Po(xt,s,a,i)}let u=g(e,"a","fused matMul"),c=g(t,"b","fused matMul");[u,c]=bt(u,c);let p=r?u.shape[u.rank-2]:u.shape[u.rank-1],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],x=r?u.shape[u.rank-1]:u.shape[u.rank-2],T=n?c.shape[c.rank-2]:c.shape[c.rank-1],k=u.shape.slice(0,-2),O=c.shape.slice(0,-2),D=Ct(k),C=Ct(O);S(p===f,()=>`Error in fused matMul: inner shapes (${p}) and (${f}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${r} and transposeB=${n} must match.`);let P=Ot(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([x,T]),G=r?L(u,[D,p,x]):L(u,[D,x,p]),q=n?L(c,[C,T,f]):L(c,[C,f,T]),z;o!=null&&(z=g(o,"bias","fused matMul"),[z]=bt(z,u),Ot(P,z.shape));let rt;a!=null&&(rt=g(a,"prelu weights","fused matMul"));let it=(xt,$t)=>{let[ht,Yt,te,pr]=$t,ce=Ro(L(xt,te.shape),te,s),mr,Qe;if(!r&&!n?(mr=kt(ce,Yt,!1,!0),Qe=kt(ht,ce,!0,!1)):!r&&n?(mr=kt(ce,Yt,!1,!1),Qe=kt(ce,ht,!0,!1)):r&&!n?(mr=kt(Yt,ce,!1,!0),Qe=kt(ht,ce,!1,!1)):(mr=kt(Yt,ce,!0,!0),Qe=kt(ce,ht,!0,!0)),o!=null){let Sn=Lo(pr,ce);return[mr,Qe,Sn]}else return[mr,Qe]},Y={a:G,b:q,bias:z,preluActivationWeights:rt},ot={transposeA:r,transposeB:n,activation:s,leakyreluAlpha:i};return o==null?$e(($t,ht,Yt)=>{let te=N.runKernel(hu,Y,ot);return Yt([$t,ht,te]),{value:L(te,P),gradFunc:it}})(G,q):$e(($t,ht,Yt,te)=>{let pr=N.runKernel(hu,Y,ot);return te([$t,ht,pr,Yt]),{value:L(pr,P),gradFunc:it}})(G,q,z)}var T3=v({fusedMatMul_:V5});function U5(e){return Ts(e,.54,.46)}var N3=v({hammingWindow_:U5});function j5(e){return Ts(e,.5,.5)}var la=v({hannWindow_:j5});function W5(e,t,r,n=!1,o=0){let s=0,a=[];for(;s+t<=e.size;)a.push(mt(e,s,t)),s+=r;if(n)for(;s<e.size;){let i=s+t-e.size,u=Lt([mt(e,s,t-i),Dr([i],o)]);a.push(u),s+=r}return a.length===0?Ye([],[0,t]):L(Lt(a),[a.length,t])}var pa=v({frame_:W5});function H5(e,t,r,n,o=la){n==null&&(n=qu(t));let s=pa(e,t,r),a=W(s,o(t));return Co(a,n)}var E3=v({stft_:H5});function K5(e,t,r,n,o="bilinear",s=0){let a=g(e,"image","cropAndResize"),i=g(t,"boxes","cropAndResize","float32"),u=g(r,"boxInd","cropAndResize","int32"),c=i.shape[0];S(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),S(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${i.shape}.`),S(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${i.shape}.`),S(n.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${n.length}.`),S(n[0]>=1&&n[1]>=1,()=>`cropSize must be atleast [1,1], but was ${n}`),S(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);let p={image:a,boxes:i,boxInd:u},f={method:o,extrapolationValue:s,cropSize:n};return N.runKernel(V1,p,f)}var S3=v({cropAndResize_:K5});function q5(e){let t=g(e,"image","flipLeftRight","float32");S(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let r={image:t};return N.runKernel(il,r,{})}var k3=v({flipLeftRight_:q5});function X5(e){let t=g(e,"image","grayscaleToRGB"),r=t.rank-1,n=t.shape[r];S(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),S(n===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${n}.`);let o=new Array(t.rank);return o.fill(1,0,r),o[r]=3,yn(t,o)}var I3=v({grayscaleToRGB_:X5});function Y5(e,t,r=0,n=.5){let o=g(e,"image","rotateWithOffset","float32");S(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);let s={image:o},a={radians:t,fillValue:r,center:n};return N.runKernel(qp,s,a)}var _3=v({rotateWithOffset_:Y5});function lr(e,t,r,n,o,s){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),s==null&&(s=0);let a=e.shape[0];return r=Math.min(r,a),S(0<=n&&n<=1,()=>`iouThreshold must be in [0, 1], but was '${n}'`),S(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),S(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),S(t.rank===1,()=>"scores must be a 1D tensor"),S(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),S(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:r,iouThreshold:n,scoreThreshold:o,softNmsSigma:s}}function J5(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY){let s=g(e,"boxes","nonMaxSuppression","float32"),a=g(t,"scores","nonMaxSuppression","float32"),i=lr(s,a,r,n,o);r=i.maxOutputSize,n=i.iouThreshold,o=i.scoreThreshold;let u={maxOutputSize:r,iouThreshold:n,scoreThreshold:o};return N.runKernel(Ul,{boxes:s,scores:a},u)}var A3=v({nonMaxSuppression_:J5});function O3(e,t,r){let n=Z5(e,t,r),o=n<0?-(n+1):n;e.splice(o,0,t)}function Z5(e,t,r){return ty(e,t,r||Q5)}function Q5(e,t){return e>t?1:e<t?-1:0}function ty(e,t,r){let n=0,o=e.length,s=0,a=!1;for(;n<o;){s=n+(o-n>>>1);let i=r(t,e[s]);i>0?n=s+1:(o=s,a=!i)}return a?n:-n-1}function D3(e,t,r,n,o){return Yu(e,t,r,n,o,0)}function F3(e,t,r,n,o,s){return Yu(e,t,r,n,o,0,!1,s,!0)}function C3(e,t,r,n,o,s){return Yu(e,t,r,n,o,s,!0)}function Yu(e,t,r,n,o,s,a=!1,i=!1,u=!1){let c=[];for(let D=0;D<t.length;D++)t[D]>o&&c.push({score:t[D],boxIndex:D,suppressBeginIndex:0});c.sort($3);let p=s>0?-.5/s:0,f=[],x=[];for(;f.length<r&&c.length>0;){let D=c.pop(),{score:C,boxIndex:K,suppressBeginIndex:P}=D;if(C<o)break;let G=!1;for(let q=f.length-1;q>=P;--q){let z=ey(e,K,f[q]);if(z>=n){G=!0;break}if(D.score=D.score*ry(n,p,z),D.score<=o)break}D.suppressBeginIndex=f.length,G||(D.score===C?(f.push(K),x.push(D.score)):D.score>o&&O3(c,D,$3))}let T=f.length,k=r-T;i&&k>0&&(f.push(...new Array(k).fill(0)),x.push(...new Array(k).fill(0)));let O={selectedIndices:f};return a&&(O.selectedScores=x),u&&(O.validOutputs=T),O}function ey(e,t,r){let n=e.subarray(t*4,t*4+4),o=e.subarray(r*4,r*4+4),s=Math.min(n[0],n[2]),a=Math.min(n[1],n[3]),i=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),p=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),x=Math.max(o[1],o[3]),T=(i-s)*(u-a),k=(f-c)*(x-p);if(T<=0||k<=0)return 0;let O=Math.max(s,c),D=Math.max(a,p),C=Math.min(i,f),K=Math.min(u,x),P=Math.max(C-O,0)*Math.max(K-D,0);return P/(T+k-P)}function ry(e,t,r){let n=Math.exp(t*r*r);return r<=e?n:0}function $3(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function ny(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY){let s=g(e,"boxes","nonMaxSuppressionAsync"),a=g(t,"scores","nonMaxSuppressionAsync"),i=lr(s,a,r,n,o);r=i.maxOutputSize,n=i.iouThreshold,o=i.scoreThreshold;let u=await Promise.all([s.data(),a.data()]),c=u[0],p=u[1],{selectedIndices:f}=D3(c,p,r,n,o);return s!==e&&s.dispose(),a!==t&&a.dispose(),Xt(f,"int32")}var R3=ny;function oy(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY,s=0){let a=g(e,"boxes","nonMaxSuppression"),i=g(t,"scores","nonMaxSuppression"),u=lr(a,i,r,n,o,s);r=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;let c={boxes:a,scores:i},p={maxOutputSize:r,iouThreshold:n,scoreThreshold:o,softNmsSigma:s},f=N.runKernel(Wl,c,p);return{selectedIndices:f[0],selectedScores:f[1]}}var L3=v({nonMaxSuppressionWithScore_:oy});async function sy(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY,s=0){let a=g(e,"boxes","nonMaxSuppressionAsync"),i=g(t,"scores","nonMaxSuppressionAsync"),u=lr(a,i,r,n,o,s);r=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;let c=await Promise.all([a.data(),i.data()]),p=c[0],f=c[1],{selectedIndices:x,selectedScores:T}=C3(p,f,r,n,o,s);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Xt(x,"int32"),selectedScores:Xt(T)}}var P3=sy;function iy(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY,s=!1){let a=g(e,"boxes","nonMaxSuppression"),i=g(t,"scores","nonMaxSuppression"),u=lr(a,i,r,n,o,null),c=u.maxOutputSize,p=u.iouThreshold,f=u.scoreThreshold,x={boxes:a,scores:i},T={maxOutputSize:c,iouThreshold:p,scoreThreshold:f,padToMaxOutputSize:s},k=N.runKernel(jl,x,T);return{selectedIndices:k[0],validOutputs:k[1]}}var M3=v({nonMaxSuppressionPadded_:iy});async function ay(e,t,r,n=.5,o=Number.NEGATIVE_INFINITY,s=!1){let a=g(e,"boxes","nonMaxSuppressionAsync"),i=g(t,"scores","nonMaxSuppressionAsync"),u=lr(a,i,r,n,o,null),c=u.maxOutputSize,p=u.iouThreshold,f=u.scoreThreshold,[x,T]=await Promise.all([a.data(),i.data()]),{selectedIndices:k,validOutputs:O}=F3(x,T,c,p,f,s);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:Xt(k,"int32"),validOutputs:ct(O,"int32")}}var B3=ay;function uy(e,t,r=!1,n=!1){let o=g(e,"images","resizeBilinear");S(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),S(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),S(n===!1||r===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=o,a=!1;o.rank===3&&(a=!0,s=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));let[]=t,i={images:s},u={alignCorners:r,halfPixelCenters:n,size:t},c=N.runKernel(up,i,u);return a?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var G3=v({resizeBilinear_:uy});function cy(e,t,r=!1,n=!1){let o=g(e,"images","resizeNearestNeighbor");S(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),S(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),S(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),S(n===!1||r===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=o,a=!1;o.rank===3&&(a=!0,s=L(o,[1,o.shape[0],o.shape[1],o.shape[2]]));let[]=t,i={images:s},u={alignCorners:r,halfPixelCenters:n,size:t},c=N.runKernel(ap,i,u);return a?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var z3=v({resizeNearestNeighbor_:cy});function ly(e,t="binary",r=!1,n=.5){let o=g(e,"image","threshold"),s=.2989,a=.587,i=.114,u=o.shape[0]*o.shape[1],c=W(Xt([n]),255),p,f,x,T;if(S(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),S(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),S(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),S(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),o.shape[2]===3){[p,f,x]=Kr(o,[1,1,1],-1);let D=W(p,s),C=W(f,a),K=W(x,i);T=et(et(D,C),K)}else T=e;if(t==="otsu"){let D=Ii(wt(na(T),"int32"),ye([]),256);c=py(D,u)}let k=r?Do(T,c):Kn(T,c);return wt(W(k,255),"int32")}function py(e,t){let r=Xt([-1]),n=Xt([0]),o=Xt([0]),s,a,i,u,c,p;for(let f=0;f<e.size-1;f++){s=mt(e,0,f+1),a=mt(e,f+1),c=ft(It(s),t),p=ft(It(a),t);let x=It(W(s,xn(0,s.size)));i=ft(x,It(s));let T=Dr(a.shape,s.size),k=et(xn(0,a.size),T),O=W(a,k);u=ft(It(O),It(a));let D=ut(i,u),C=ut(i,u),K=W(c,p);o=W(W(K,D),C);let P=Kn(o,n);n=yr(P,o,n),r=yr(P,Xt([f]),r)}return r}var V3=v({threshold_:ly});function my(e,t,r="nearest",n="constant",o=0,s){let a=g(e,"image","transform","float32"),i=g(t,"transforms","transform","float32");S(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),S(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),S(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let u={image:a,transforms:i},c={interpolation:r,fillMode:n,fillValue:o,outputShape:s};return N.runKernel(Vp,u,c)}var U3=v({transform_:my});function fy(e,t,r){S(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),S(r%1===0,()=>`bandPart(): numUpper must be an integer, got ${r}.`);let n=g(e,"a","bandPart");S(n.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${n.rank}.`);let o=n.shape,[s,a]=n.shape.slice(-2);if(!(t<=s))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(r<=a))throw new Error(`bandPart(): numUpper (${r}) must not be greater than the number of columns (${a}).`);t<0&&(t=s),r<0&&(r=a);let i=L(xn(0,s,1,"int32"),[-1,1]),u=xn(0,a,1,"int32"),c=ut(i,u),p=qn(Do(c,ct(+t,"int32")),Li(c,ct(-r,"int32"))),f=Cr([s,a],n.dtype);return L(ve(Je(L(n,[-1,s,a])).map(x=>yr(p,x,f))),o)}var j3=v({bandPart_:fy});function hy(e){let t;if(Array.isArray(e)){t=!1,S(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let o=e[0].shape[0];for(let s=1;s<e.length;++s)S(e[s].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[s].shape[0]} vs. ${o})`)}else t=!0,e=Kr(e,e.shape[0],0).map(o=>Ht(o,[0]));S(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let r=[],n=e;for(let o=0;o<e.length;++o)r.push(N.tidy(()=>{let s=n[o];if(o>0)for(let a=0;a<o;++a){let i=W(It(W(r[a],s)),r[a]);s=ut(s,i)}return ft(s,Hn(s,"euclidean"))}));return t?ve(r,0):r}var W3=v({gramSchmidt_:hy});function dy(e,t=!1){if(S(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return H3(e,t);{let r=e.shape.slice(0,e.shape.length-2).reduce((u,c)=>u*c),n=Je(L(e,[r,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),o=[],s=[];n.forEach(u=>{let[c,p]=H3(u,t);o.push(c),s.push(p)});let a=L(ve(o,0),e.shape),i=L(ve(s,0),e.shape);return[a,i]}}function H3(e,t=!1){return N.tidy(()=>{S(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let r=e.shape[0],n=e.shape[1],o=Fi(r),s=Ge(e),a=Ye([[1]],[1,1]),i=Ge(a),u=r>=n?n:r;for(let c=0;c<u;++c){let p=s,f=i,x=o;[i,s,o]=N.tidy(()=>{let T=mt(s,[c,c],[r-c,1]),k=Hn(T),O=mt(s,[c,c],[1,1]),D=yr(Kn(O,0),Ye([[-1]]),Ye([[1]])),C=ut(O,W(D,k)),K=ft(T,C);K.shape[0]===1?i=Ge(a):i=Lt([a,mt(K,[1,0],[K.shape[0]-1,K.shape[1]])],0);let P=xe(ft(kt(D,C),k)),G=mt(s,[c,0],[r-c,n]),q=W(P,i),z=ca(i);if(c===0)s=ut(G,kt(q,kt(z,G)));else{let Y=ut(G,kt(q,kt(z,G)));s=Lt([mt(s,[0,0],[c,n]),Y],0)}let rt=ca(q),it=mt(o,[0,c],[r,o.shape[1]-c]);if(c===0)o=ut(it,kt(kt(it,i),rt));else{let Y=ut(it,kt(kt(it,i),rt));o=Lt([mt(o,[0,0],[r,c]),Y],1)}return[i,s,o]}),At([p,f,x])}return!t&&r>n&&(o=mt(o,[0,0],[r,n]),s=mt(s,[0,0],[n,n])),[o,s]})}var K3=v({qr_:dy});var Kt;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Kt||(Kt={}));function gy(e,t,r=Kt.SUM_BY_NONZERO_WEIGHTS){let n=g(e,"losses","computeWeightedLoss"),o=null;t!=null&&(o=g(t,"weights","computeWeightedLoss"));let s=o==null?n:W(n,o);if(r===Kt.NONE)return s;if(r===Kt.SUM)return It(s);if(r===Kt.MEAN){if(o==null)return Xn(s);{let a=n.size/o.size,i=ft(It(s),It(o));return a>1?ft(i,ct(a)):i}}if(r===Kt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return ft(It(s),ct(n.size));{let a=W(o,Rr(n.shape)),i=wt(It(Ki(a,ct(0))),"float32");return ft(It(s),i)}}throw Error(`Unknown reduction: ${r}`)}var pe=v({computeWeightedLoss_:gy});function yy(e,t,r,n=Kt.SUM_BY_NONZERO_WEIGHTS){let o=g(e,"labels","absoluteDifference"),s=g(t,"predictions","absoluteDifference"),a=null;r!=null&&(a=g(r,"weights","absoluteDifference")),jt(o.shape,s.shape,"Error in absoluteDifference: ");let i=ae(ut(o,s));return pe(i,a,n)}var q3=v({absoluteDifference_:yy});function by(e,t,r,n,o=Kt.SUM_BY_NONZERO_WEIGHTS){let s=g(e,"labels","cosineDistance"),a=g(t,"predictions","cosineDistance"),i=null;n!=null&&(i=g(n,"weights","cosineDistance")),jt(s.shape,a.shape,"Error in cosineDistance: ");let u=ct(1),c=ut(u,It(W(s,a),r,!0));return pe(c,i,o)}var X3=v({cosineDistance_:by});function xy(e,t,r,n=Kt.SUM_BY_NONZERO_WEIGHTS){let o=g(e,"labels","hingeLoss"),s=g(t,"predictions","hingeLoss"),a=null;r!=null&&(a=g(r,"weights","hingeLoss")),jt(o.shape,s.shape,"Error in hingeLoss: ");let i=ct(1);o=ut(W(ct(2),o),i);let u=vn(ut(i,W(o,s)));return pe(u,a,n)}var Y3=v({hingeLoss_:xy});function vy(e,t,r,n=1,o=Kt.SUM_BY_NONZERO_WEIGHTS){let s=g(e,"labels","huberLoss"),a=g(t,"predictions","huberLoss"),i=null;r!=null&&(i=g(r,"weights","huberLoss")),jt(s.shape,a.shape,"Error in huberLoss: ");let u=ct(n),c=ae(ut(a,s)),p=Hi(c,u),f=ut(c,p),x=et(W(ct(.5),ue(p)),W(u,f));return pe(x,i,o)}var J3=v({huberLoss_:vy});function wy(e,t,r,n=1e-7,o=Kt.SUM_BY_NONZERO_WEIGHTS){let s=g(e,"labels","logLoss"),a=g(t,"predictions","logLoss"),i=null;r!=null&&(i=g(r,"weights","logLoss")),jt(s.shape,a.shape,"Error in logLoss: ");let u=ct(1),c=ct(n),p=xe(W(s,Wr(et(a,c)))),f=W(ut(u,s),Wr(et(ut(u,a),c))),x=ut(p,f);return pe(x,i,o)}var Z3=v({logLoss_:wy});function Ty(e,t,r,n=Kt.SUM_BY_NONZERO_WEIGHTS){let o=g(e,"labels","meanSquaredError"),s=g(t,"predictions","meanSquaredError"),a=null;r!=null&&(a=g(r,"weights","meanSquaredError")),jt(o.shape,s.shape,"Error in meanSquaredError: ");let i=sa(o,s);return pe(i,a,n)}var Q3=v({meanSquaredError_:Ty});function Ny(e,t){let r=g(e,"labels","sigmoidCrossEntropyWithLogits"),n=g(t,"logits","sigmoidCrossEntropyWithLogits");jt(r.shape,n.shape,"Error in sigmoidCrossEntropyWithLogits: ");let o=vn(n),s=W(n,r),a=Mi(Ae(xe(ae(n))));return et(ut(o,s),a)}function Ey(e,t,r,n=0,o=Kt.SUM_BY_NONZERO_WEIGHTS){let s=g(e,"multiClassLabels","sigmoidCrossEntropy"),a=g(t,"logits","sigmoidCrossEntropy"),i=null;if(r!=null&&(i=g(r,"weights","sigmoidCrossEntropy")),jt(s.shape,a.shape,"Error in sigmoidCrossEntropy: "),n>0){let c=ct(n),p=ct(1),f=ct(.5);s=et(W(s,ut(p,c)),W(f,c))}let u=Ny(s,a);return pe(u,i,o)}var th=v({sigmoidCrossEntropy_:Ey});function Sy(e,t,r=-1){if(r===-1&&(r=t.rank-1),r!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${r}`);return $e((o,s,a)=>{let u=Gi(s,[r],!0),c=ut(wt(s,"float32"),u);a([o,c]);let p=xe(W(c,o));return{value:It(p,[r]),gradFunc:(T,k)=>{let[O,D]=k,C=gn(T.shape,[r]);return[W(L(T,C),ut(wt(O,"float32"),Ae(D))),W(L(T,C),ut(Ae(D),wt(O,"float32")))]}}})(e,t)}function ky(e,t,r,n=0,o=Kt.SUM_BY_NONZERO_WEIGHTS){let s=g(e,"onehotLabels","softmaxCrossEntropy"),a=g(t,"logits","softmaxCrossEntropy"),i=null;if(r!=null&&(i=g(r,"weights","softmaxCrossEntropy")),jt(s.shape,a.shape,"Error in softmaxCrossEntropy: "),n>0){let c=ct(n),p=ct(1),f=ct(s.shape[1]);s=et(W(s,ut(p,c)),ft(c,f))}let u=Sy(s,a);return pe(u,i,o)}var eh=v({softmaxCrossEntropy_:ky});function Iy(e,t,r,n){let o=g(e,"indices","sparseFillEmptyRows","int32"),s=g(t,"values","sparseFillEmptyRows"),a=g(r,"denseShape","sparseFillEmptyRows","int32"),i=g(n,"defaultValue","sparseFillEmptyRows",s.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);let u={indices:o,values:s,denseShape:a,defaultValue:i},c=N.runKernel(_p,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}var rh=v({sparseFillEmptyRows_:Iy});function _y(e,t,r){let n=g(e,"inputIndices","sparseReshape","int32"),o=g(t,"inputShape","sparseReshape","int32"),s=g(r,"newShape","sparseReshape","int32");if(n.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${n.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);let a={inputIndices:n,inputShape:o,newShape:s},i=N.runKernel(Ap,a);return{outputIndices:i[0],outputShape:i[1]}}var nh=v({sparseReshape_:_y});function Ay(e,t,r){let n=g(e,"data","sparseSegmentMean"),o=g(t,"indices","sparseSegmentMean","int32"),s=g(r,"segmentIds","sparseSegmentMean","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);let a={data:n,indices:o,segmentIds:s};return N.runKernel(Op,a)}var oh=v({sparseSegmentMean_:Ay});function Oy(e,t,r){let n=g(e,"data","sparseSegmentSum"),o=g(t,"indices","sparseSegmentSum","int32"),s=g(r,"segmentIds","sparseSegmentSum","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);let a={data:n,indices:o,segmentIds:s};return N.runKernel($p,a)}var sh=v({sparseSegmentSum_:Oy});function $y(e,t,r,n,o,s,a,i){let u=g(e,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);let c=g(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");let p={separator:r,nGramWidths:n,leftPad:o,rightPad:s,padWidth:a,preserveShortSequences:i},f={data:u,dataSplits:c},x=N.runKernel(Rp,f,p);return{nGrams:x[0],nGramsSplits:x[1]}}var ih=v({stringNGrams_:$y});function Dy(e,t,r=!0){let n=g(e,"input","stringSplit","string"),o=g(t,"delimiter","stringSplit","string");if(n.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${n.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);let s={skipEmpty:r},a={input:n,delimiter:o},i=N.runKernel(Lp,a,s);return{indices:i[0],values:i[1],shape:i[2]}}var ah=v({stringSplit_:Dy});function Fy(e,t){let r=g(e,"input","stringToHashBucketFast","string"),n={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");let o={input:r};return N.runKernel(Pp,o,n)}var uh=v({stringToHashBucketFast_:Fy});var Cy={fft:Fo,ifft:Zn,rfft:Co,irfft:oa},Ry={hammingWindow:N3,hannWindow:la,frame:pa,stft:E3},wn={flipLeftRight:k3,grayscaleToRGB:I3,resizeNearestNeighbor:z3,resizeBilinear:G3,rotateWithOffset:_3,cropAndResize:S3,nonMaxSuppression:A3,nonMaxSuppressionAsync:R3,nonMaxSuppressionWithScore:L3,nonMaxSuppressionWithScoreAsync:P3,nonMaxSuppressionPadded:M3,nonMaxSuppressionPaddedAsync:B3,threshold:V3,transform:U3},Ly={bandPart:j3,gramSchmidt:W3,qr:K3},Py={absoluteDifference:q3,computeWeightedLoss:pe,cosineDistance:X3,hingeLoss:Y3,huberLoss:J3,logLoss:Z3,meanSquaredError:Q3,sigmoidCrossEntropy:th,softmaxCrossEntropy:eh},My={sparseFillEmptyRows:rh,sparseReshape:nh,sparseSegmentMean:oh,sparseSegmentSum:sh},By={stringNGrams:ih,stringSplit:ah,stringToHashBucketFast:uh};var ma=class{getClassName(){return this.constructor.className}static fromConfig(t,r){return new t(r)}},qr=class{constructor(){this.classNameMap={}}static getMap(){return qr.instance==null&&(qr.instance=new qr),qr.instance}static register(t){qr.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function ch(e){S(e.className!=null,()=>"Class being registered does not have the static className property defined."),S(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),S(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),qr.register(e)}var De=class extends ma{minimize(t,r=!1,n){let{value:o,grads:s}=this.computeGradients(t,n);if(n!=null){let a=n.map(i=>({name:i.name,tensor:s[i.name]}));this.applyGradients(a)}else this.applyGradients(s);return At(s),r?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,r){return Hm(t,r)}dispose(){this.iterations_!=null&&At(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ct(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(De,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});var fa=class extends De{constructor(t,r,n=null){super(),this.learningRate=t,this.rho=r,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n==null&&(this.epsilon=N.backend.epsilon())}static get className(){return"Adadelta"}applyGradients(t){(Array.isArray(t)?t.map(n=>n.name):Object.keys(t)).forEach((n,o)=>{let s=N.registeredVariables[n],a=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${n}/accum_grad`,variable:pt(()=>re(s).variable(a))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${n}/accum_var`,variable:pt(()=>re(s).variable(a))});let i=Array.isArray(t)?t[o].tensor:t[n];if(i==null)return;let u=this.accumulatedGrads[o].variable,c=this.accumulatedUpdates[o].variable;pt(()=>{let p=et(W(u,this.rho),W(ue(i),1-this.rho)),f=W(ft(_e(et(c,this.epsilon)),_e(et(u,this.epsilon))),i),x=et(W(c,this.rho),W(ue(f),1-this.rho));u.assign(p),c.assign(x);let T=et(W(f,-this.learningRate),s);s.assign(T)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(At(this.accumulatedGrads.map(t=>t.variable)),At(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=t.length/2,n=!1;this.accumulatedGrads=t.slice(0,r).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedUpdates=t.slice(r,r*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.rho,r.epsilon)}};var ha=class extends De{constructor(t,r=.1){super(),this.learningRate=t,this.initialAccumulatorValue=r,this.accumulatedGrads=[]}static get className(){return"Adagrad"}applyGradients(t){(Array.isArray(t)?t.map(n=>n.name):Object.keys(t)).forEach((n,o)=>{let s=N.registeredVariables[n];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${n}/accumulator`,variable:pt(()=>Dr(s.shape,this.initialAccumulatorValue).variable(!1))});let a=Array.isArray(t)?t[o].tensor:t[n];if(a==null)return;let i=this.accumulatedGrads[o].variable;pt(()=>{let u=et(i,ue(a));i.assign(u);let c=et(W(ft(a,_e(et(u,N.backend.epsilon()))),-this.learningRate),s);s.assign(c)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&At(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulatedGrads=t.map(n=>({originalName:n.name,variable:n.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,r){return new t(r.learningRate,r.initialAccumulatorValue)}};var da=class extends De{constructor(t,r,n,o=null){super(),this.learningRate=t,this.beta1=r,this.beta2=n,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],pt(()=>{this.accBeta1=ct(r).variable(),this.accBeta2=ct(n).variable()}),o==null&&(this.epsilon=N.backend.epsilon())}static get className(){return"Adam"}applyGradients(t){let r=Array.isArray(t)?t.map(n=>n.name):Object.keys(t);pt(()=>{let n=ut(1,this.accBeta1),o=ut(1,this.accBeta2);r.forEach((s,a)=>{let i=N.registeredVariables[s],u=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${s}/m`,variable:pt(()=>re(i).variable(u))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${s}/v`,variable:pt(()=>re(i).variable(u))});let c=Array.isArray(t)?t[a].tensor:t[s];if(c==null)return;let p=this.accumulatedFirstMoment[a].variable,f=this.accumulatedSecondMoment[a].variable,x=et(W(p,this.beta1),W(c,1-this.beta1)),T=et(W(f,this.beta2),W(ue(c),1-this.beta2)),k=ft(x,n),O=ft(T,o);p.assign(x),f.assign(T);let D=et(W(ft(k,et(_e(O),this.epsilon)),-this.learningRate),i);i.assign(D)}),this.accBeta1.assign(W(this.accBeta1,this.beta1)),this.accBeta2.assign(W(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&At(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&At(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t),pt(()=>{this.accBeta1.assign(jr(this.beta1,this.iterations_+1)),this.accBeta2.assign(jr(this.beta2,this.iterations_+1))});let r=t.length/2,n=!1;this.accumulatedFirstMoment=t.slice(0,r).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedSecondMoment=t.slice(r,r*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon)}};var ga=class extends De{constructor(t,r,n,o=null,s=0){super(),this.learningRate=t,this.beta1=r,this.beta2=n,this.epsilon=o,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],pt(()=>{this.iteration=ct(0).variable(),this.accBeta1=ct(r).variable()}),o==null&&(this.epsilon=N.backend.epsilon())}static get className(){return"Adamax"}applyGradients(t){let r=Array.isArray(t)?t.map(n=>n.name):Object.keys(t);pt(()=>{let n=ut(1,this.accBeta1),o=ft(-this.learningRate,et(W(this.iteration,this.decay),1));r.forEach((s,a)=>{let i=N.registeredVariables[s],u=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${s}/m`,variable:re(i).variable(u)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${s}/v`,variable:re(i).variable(u)});let c=Array.isArray(t)?t[a].tensor:t[s];if(c==null)return;let p=this.accumulatedFirstMoment[a].variable,f=this.accumulatedWeightedInfNorm[a].variable,x=et(W(p,this.beta1),W(c,1-this.beta1)),T=W(f,this.beta2),k=ae(c),O=Wi(T,k);p.assign(x),f.assign(O);let D=et(W(ft(o,n),ft(x,et(O,this.epsilon))),i);i.assign(D)}),this.iteration.assign(et(this.iteration,1)),this.accBeta1.assign(W(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&At(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&At(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,r){return new t(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)}};var Bo=class extends De{constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}static get className(){return"SGD"}applyGradients(t){(Array.isArray(t)?t.map(n=>n.name):Object.keys(t)).forEach((n,o)=>{let s=Array.isArray(t)?t[o].tensor:t[n];if(s==null)return;let a=N.registeredVariables[n];pt(()=>{let i=et(W(this.c,s),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Ie(ct(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,r){return new t(r.learningRate)}};var ya=class extends Bo{constructor(t,r,n=!1){super(t),this.learningRate=t,this.momentum=r,this.useNesterov=n,this.accumulations=[],this.m=ct(this.momentum)}static get className(){return"Momentum"}applyGradients(t){(Array.isArray(t)?t.map(n=>n.name):Object.keys(t)).forEach((n,o)=>{let s=N.registeredVariables[n];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${n}/momentum`,variable:pt(()=>re(s).variable(!1))});let a=this.accumulations[o].variable,i=Array.isArray(t)?t[o].tensor:t[n];i!=null&&pt(()=>{let u,c=et(W(this.m,a),i);this.useNesterov?u=et(W(this.c,et(i,W(c,this.m))),s):u=et(W(this.c,c),s),a.assign(c),s.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&At(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=!1;this.accumulations=t.map(n=>({originalName:n.name,variable:n.tensor.variable(r)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,r){return new t(r.learningRate,r.momentum,r.useNesterov)}};var ba=class extends De{constructor(t,r=.9,n=0,o=null,s=!1){if(super(),this.learningRate=t,this.decay=r,this.momentum=n,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,o==null&&(this.epsilon=N.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}static get className(){return"RMSProp"}applyGradients(t){(Array.isArray(t)?t.map(n=>n.name):Object.keys(t)).forEach((n,o)=>{let s=N.registeredVariables[n],a=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${n}/rms`,variable:pt(()=>re(s).variable(a))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${n}/momentum`,variable:pt(()=>re(s).variable(a))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${n}/mg`,variable:pt(()=>re(s).variable(a))});let i=Array.isArray(t)?t[o].tensor:t[n];if(i==null)return;let u=this.accumulatedMeanSquares[o].variable,c=this.accumulatedMoments[o].variable;pt(()=>{let p=et(W(u,this.decay),W(ue(i),1-this.decay));if(this.centered){let f=this.accumulatedMeanGrads[o].variable,x=et(W(f,this.decay),W(i,1-this.decay)),T=ft(W(i,this.learningRate),_e(ut(p,et(ue(x),this.epsilon)))),k=et(W(c,this.momentum),T);u.assign(p),f.assign(x),c.assign(k);let O=ut(s,k);s.assign(O)}else{let f=et(W(u,this.decay),W(ue(i),1-this.decay)),x=et(W(c,this.momentum),ft(W(i,this.learningRate),_e(et(f,this.epsilon))));u.assign(f),c.assign(x);let T=ut(s,x);s.assign(T)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&At(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&At(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&At(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(r=>({name:r.originalName,tensor:r.variable})))}async setWeights(t){t=await this.extractIterations(t);let r=this.centered?t.length/3:t.length/2,n=!1;this.accumulatedMeanSquares=t.slice(0,r).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedMoments=t.slice(r,r*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.centered&&(this.accumulatedMeanGrads=t.slice(r*2,r*3).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,r){return new t(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)}};var Gy=[fa,ha,da,ga,ya,ba,Bo];function lh(){for(let e of Gy)ch(e)}var Ss={};Wt(Ss,{browserFiles:()=>mh,browserHTTPRequest:()=>dh,concatenateArrayBuffers:()=>So,copyModel:()=>V2,decodeWeights:()=>gi,encodeWeights:()=>k2,fromMemory:()=>gh,fromMemorySync:()=>rc,getLoadHandlers:()=>D2,getModelArtifactsForJSON:()=>ko,getModelArtifactsForJSONSync:()=>Cu,getModelArtifactsInfoForJSON:()=>_r,getSaveHandlers:()=>$2,getWeightSpecs:()=>bi,http:()=>va,isHTTPScheme:()=>xa,listModels:()=>G2,loadWeights:()=>fh,moveModel:()=>U2,registerLoadRouter:()=>O2,registerSaveRouter:()=>A2,removeModel:()=>z2,weightsLoaderFactory:()=>tc,withSaveHandler:()=>yh,withSaveHandlerSync:()=>bh});var zy="model",Vy=".json",Uy=".weights.bin";function ph(e){return new Promise(t=>setTimeout(t)).then(e)}var Xr=class{constructor(t){if(!lt().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Xr.URL_SCHEME)&&(t=t.slice(Xr.URL_SCHEME.length)),(t==null||t.length===0)&&(t=zy),this.modelJsonFileName=t+Vy,this.weightDataFileName=t+Uy}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let r=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=yi(t,n),s=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),a=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=s,await ph(()=>a.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let i=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;i.download=this.weightDataFileName,i.href=r,await ph(()=>i.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:_r(t)}}}};Xr.URL_SCHEME="downloads://";var Ju=class{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,r)=>{let n=new FileReader;n.onload=o=>{let s=JSON.parse(o.target.result),a=s.modelTopology;if(a==null){r(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){r(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}let u=ko(s,c=>this.loadWeights(c));t(u)},n.onerror=o=>r(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(t){let r=[],n=[];for(let a of t)r.push(...a.weights),n.push(...a.paths);let o=this.checkManifestAndWeightFiles(t),s=n.map(a=>this.loadWeightsFile(a,o[a]));return Promise.all(s).then(a=>[r,So(a)])}loadWeightsFile(t,r){return new Promise((n,o)=>{let s=new FileReader;s.onload=a=>{let i=a.target.result;n(i)},s.onerror=a=>o(`Failed to weights data from file of path '${t}'.`),s.readAsArrayBuffer(r)})}checkManifestAndWeightFiles(t){let r=[],n=this.weightsFiles.map(s=>Fu(s.name)),o={};for(let s of t)s.paths.forEach(a=>{let i=Fu(a);if(r.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(r.push(i),n.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);o[a]=this.weightsFiles[n.indexOf(i)]});if(r.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${r.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}},jy=e=>lt().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Xr.URL_SCHEME)?Wy(e.slice(Xr.URL_SCHEME.length)):null;Rt.registerSaveRouter(jy);function Wy(e="model"){return new Xr(e)}function mh(e){return new Ju(e)}function Zu(e,t,r,n){a(e),r=r==null?0:r,n=n==null?1:n,i(r,n);let o=0,s=u=>(u.then(c=>{let p=r+ ++o/e.length*(n-r);return t(p),c}),u);function a(u){S(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function i(u,c){S(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),S(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),S(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(e.map(s))}async function Qu(e,t){t==null&&(t={});let r=t.fetchFunc==null?lt().platform.fetch:t.fetchFunc,n=e.map(f=>r(f,t.requestInit,{isBinary:!0})),o=0,s=.5,i=(t.onProgress==null?await Promise.all(n):await Zu(n,t.onProgress,o,s)).map(f=>f.arrayBuffer()),u=.5,c=1;return t.onProgress==null?await Promise.all(i):await Zu(i,t.onProgress,u,c)}async function fh(e,t="",r,n){return tc(a=>Qu(a,{requestInit:n}))(e,t,r)}function tc(e){return async(t,r="",n)=>{let o=t.map(()=>!1),s={},a=n!=null?n.map(()=>!1):[],i=[];if(t.forEach((T,k)=>{let O=0;T.weights.forEach(D=>{let C="quantization"in D?D.quantization.dtype:D.dtype,K=gs[C]*Ct(D.shape),P=()=>{o[k]=!0,s[k]==null&&(s[k]=[]),s[k].push({manifestEntry:D,groupOffset:O,sizeBytes:K})};n!=null?n.forEach((G,q)=>{G===D.name&&(P(),a[q]=!0)}):P(),i.push(D.name),O+=K})}),!a.every(T=>T)){let T=n.filter((k,O)=>!a[O]);throw new Error(`Could not find weights in manifest with names: ${T.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}let u=o.reduce((T,k,O)=>(k&&T.push(O),T),[]),c=[];u.forEach(T=>{t[T].paths.forEach(k=>{let O=r+(r.endsWith("/")?"":"/")+k;c.push(O)})});let p=await e(c),f={},x=0;return u.forEach(T=>{let k=t[T].paths.length,O=0;for(let G=0;G<k;G++)O+=p[x+G].byteLength;let D=new ArrayBuffer(O),C=new Uint8Array(D),K=0;for(let G=0;G<k;G++){let q=new Uint8Array(p[x+G]);C.set(q,K),K+=q.byteLength}s[T].forEach(G=>{let q=D.slice(G.groupOffset,G.groupOffset+G.sizeBytes),z=gi(q,[G.manifestEntry]);for(let rt in z)f[rt]=z[rt]}),x+=k}),f}}var Hy="application/octet-stream",Ky="application/json",Ns=class{constructor(t,r){if(this.DEFAULT_METHOD="POST",r==null&&(r={}),this.weightPathPrefix=r.weightPathPrefix,this.onProgress=r.onProgress,this.weightUrlConverter=r.weightUrlConverter,r.fetchFunc!=null?(S(typeof r.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=r.fetchFunc):this.fetch=lt().platform.fetch,S(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&S(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,r.requestInit!=null&&r.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=r.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let r=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);r.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o=yi(t,n);r.body.append("model.json",new Blob([JSON.stringify(o)],{type:Ky}),"model.json"),t.weightData!=null&&r.body.append("model.weights.bin",new Blob([t.weightData],{type:Hy}),"model.weights.bin");let s=await this.fetch(this.path,r);if(s.ok)return{modelArtifactsInfo:_r(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let r;try{r=await t.json()}catch(s){let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}let n=r.modelTopology,o=r.weightsManifest;if(n==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return ko(r,s=>this.loadWeights(s))}async loadWeights(t){let r=Array.isArray(this.path)?this.path[1]:this.path,[n,o]=qy(r),s=this.weightPathPrefix||n,a=bi(t),i=[],u=[];for(let p of t)for(let f of p.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(f)):i.push(s+f+o);this.weightUrlConverter&&i.push(...await Promise.all(u));let c=await Qu(i,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[a,So(c)]}};Ns.URL_SCHEME_REGEX=/^https?:\/\//;function qy(e){let t=e.lastIndexOf("/"),r=e.lastIndexOf("?"),n=e.substring(0,t),o=r>t?e.substring(r):"";return[n+"/",o]}function xa(e){return e.match(Ns.URL_SCHEME_REGEX)!=null}var hh=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let r=!0;if(Array.isArray(e)?r=e.every(n=>xa(n)):r=xa(e),r)return va(e,t)}return null};Rt.registerSaveRouter(hh);Rt.registerLoadRouter(hh);function va(e,t){return new Ns(e,t)}function dh(e,t){return va(e,t)}var Es=class{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}},wa=class{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}},ec=class{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=r=>Promise.resolve(t.save(r)))}};function gh(e,t,r,n){let o=arguments;return new ec(rc(...o))}function rc(e,t,r,n){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Es(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Es({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Es({modelTopology:e,weightSpecs:t,weightData:r,trainingConfig:n}))}function yh(e){return new wa(e)}function bh(e){return new wa(e)}var Tn={};Wt(Tn,{fromPixels:()=>e7,fromPixelsAsync:()=>Qy,toPixels:()=>t7});var Qn;function xh(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let r=!1,n=!1,o=!1,s=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)r=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)s=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(ps(fu,N.backendName)!=null){let k={pixels:e},O={numChannels:t};return N.runKernel(fu,k,O)}let[c,p]=o?[e.videoWidth,e.videoHeight]:[e.width,e.height],f;if(a)f=e.getContext("2d").getImageData(0,0,c,p).data;else if(n||r)f=e.data;else if(s||o||i){if(Qn==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Qn=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Qn=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Qn.canvas.width=c,Qn.canvas.height=p,Qn.drawImage(e,0,0,c,p),f=Qn.getImageData(0,0,c,p).data}let x;if(t===4)x=new Int32Array(f);else{let k=c*p;x=new Int32Array(k*t);for(let O=0;O<k;O++)for(let D=0;D<t;++D)x[O*t+D]=f[O*4+D]}return aa(x,[p,c,t],"int32")}function Xy(e){return e!=null&&e.data instanceof Uint8Array}function Yy(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function Jy(e){return e!=null&&e.width!==0&&e.height!==0}function Zy(e){return Yy()&&!(e instanceof ImageBitmap)&&Jy(e)&&!Xy(e)}async function Qy(e,t=3){let r=null;if(lt().getBool("WRAP_TO_IMAGEBITMAP")&&Zy(e)){let n;try{n=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(o){n=null}n!=null&&n.width===e.width&&n.height===e.height?r=n:r=e}else r=e;return xh(r,t)}async function t7(e,t){let r=g(e,"img","toPixels");if(!(e instanceof St)){let c=r;r=wt(c,"int32"),c.dispose()}if(r.rank!==2&&r.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${r.rank}.`);let[n,o]=r.shape.slice(0,2),s=r.rank===2?1:r.shape[2];if(s>4||s===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if(r.dtype!=="float32"&&r.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${r.dtype}. Please use float32 or int32 tensors.`);let a=await r.data(),i=r.dtype==="float32"?255:1,u=new Uint8ClampedArray(o*n*4);for(let c=0;c<n*o;++c){let p=[0,0,0,255];for(let x=0;x<s;x++){let T=a[c*s+x];if(r.dtype==="float32"){if(T<0||T>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${T}.`)}else if(r.dtype==="int32"&&(T<0||T>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${T}.`);s===1?(p[0]=T*i,p[1]=T*i,p[2]=T*i):p[x]=T*i}let f=c*4;u[f+0]=Math.round(p[0]),u[f+1]=Math.round(p[1]),u[f+2]=Math.round(p[2]),u[f+3]=Math.round(p[3])}if(t!=null){t.width=o,t.height=n;let c=t.getContext("2d"),p=new ImageData(u,o,n);c.putImageData(p,0,0)}return r!==e&&r.dispose(),u}var e7=v({fromPixels_:xh});lh();var r7=lt();r7.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var Ze;(function(e){e[e.DT_INVALID=0]="DT_INVALID",e[e.DT_FLOAT=1]="DT_FLOAT",e[e.DT_DOUBLE=2]="DT_DOUBLE",e[e.DT_INT32=3]="DT_INT32",e[e.DT_UINT8=4]="DT_UINT8",e[e.DT_INT16=5]="DT_INT16",e[e.DT_INT8=6]="DT_INT8",e[e.DT_STRING=7]="DT_STRING",e[e.DT_COMPLEX64=8]="DT_COMPLEX64",e[e.DT_INT64=9]="DT_INT64",e[e.DT_BOOL=10]="DT_BOOL",e[e.DT_QINT8=11]="DT_QINT8",e[e.DT_QUINT8=12]="DT_QUINT8",e[e.DT_QINT32=13]="DT_QINT32",e[e.DT_BFLOAT16=14]="DT_BFLOAT16",e[e.DT_QINT16=15]="DT_QINT16",e[e.DT_QUINT16=16]="DT_QUINT16",e[e.DT_UINT16=17]="DT_UINT16",e[e.DT_COMPLEX128=18]="DT_COMPLEX128",e[e.DT_HALF=19]="DT_HALF",e[e.DT_RESOURCE=20]="DT_RESOURCE",e[e.DT_VARIANT=21]="DT_VARIANT",e[e.DT_UINT32=22]="DT_UINT32",e[e.DT_UINT64=23]="DT_UINT64",e[e.DT_FLOAT_REF=101]="DT_FLOAT_REF",e[e.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",e[e.DT_INT32_REF=103]="DT_INT32_REF",e[e.DT_UINT8_REF=104]="DT_UINT8_REF",e[e.DT_INT16_REF=105]="DT_INT16_REF",e[e.DT_INT8_REF=106]="DT_INT8_REF",e[e.DT_STRING_REF=107]="DT_STRING_REF",e[e.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",e[e.DT_INT64_REF=109]="DT_INT64_REF",e[e.DT_BOOL_REF=110]="DT_BOOL_REF",e[e.DT_QINT8_REF=111]="DT_QINT8_REF",e[e.DT_QUINT8_REF=112]="DT_QUINT8_REF",e[e.DT_QINT32_REF=113]="DT_QINT32_REF",e[e.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",e[e.DT_QINT16_REF=115]="DT_QINT16_REF",e[e.DT_QUINT16_REF=116]="DT_QUINT16_REF",e[e.DT_UINT16_REF=117]="DT_UINT16_REF",e[e.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",e[e.DT_HALF_REF=119]="DT_HALF_REF",e[e.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",e[e.DT_VARIANT_REF=121]="DT_VARIANT_REF",e[e.DT_UINT32_REF=122]="DT_UINT32_REF",e[e.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ze||(Ze={}));var vh;(function(e){let t;(function(r){r[r.LEGACY=0]="LEGACY",r[r.V1=1]="V1",r[r.V2=2]="V2"})(t=e.CheckpointFormatVersion||(e.CheckpointFormatVersion={}))})(vh||(vh={}));var o7={};function Ta(e){return o7[e]}function h(e,t,r,n,o){let s=t.inputParams[e];if(s&&s.inputIndexStart!==void 0){let i=s.inputIndexStart,u=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?i+1:s.inputIndexEnd;if(s.type==="tensor")return ne(t.inputNames[s.inputIndexStart],r,n,o);if(s.type==="tensors")return t.inputNames.slice(i,u).map(x=>ne(x,r,n,o));let c=ne(t.inputNames.slice(i)[0],r,n,o),p=c.dataSync();return s.type==="number"?p[0]:X.toNestedArray(c.shape,p)}let a=t.attrParams[e];return a&&a.value}function ne(e,t,r,n){let[o,s]=we(e);if(n!=null){let i=n.getHashTableHandleByName(o);if(i!=null)return i}let a=r.currentContextIds.find(i=>!!t[Na(o,i)]);return a!==void 0?t[Na(o,a)][s]:void 0}function wh(e,t,r){return t[Na(e,r.currentContextId)]}function br(e,t){let[r,n,o]=we(e);return[Na(r,t&&t.currentContextId),n,o]}function Na(e,t){return t?`${e}-${t}`:e}function we(e){let t=e.split(":");if(t.length===1)return[e,0,void 0];let r=t[0],n=t.length===3?t[1]:void 0,o=Number(t[t.length-1]);return[r,o,n]}function ks(e,t,r){let n=h("pad",e,t,r);if(n==="explicit"){n=h("explicitPaddings",e,t,r);let o=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)o[s][0]=n[s*2],o[s][1]=n[s*2+1];return o}return n}function xr(e){return e.kept?e:Ge(e)}var oc={};Wt(oc,{json:()=>s7});var s7=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var sc={};Wt(sc,{json:()=>i7});var i7=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var ic={};Wt(ic,{json:()=>a7});var a7=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var ac={};Wt(ac,{json:()=>u7});var u7=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var uc={};Wt(uc,{json:()=>c7});var c7=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var cc={};Wt(cc,{json:()=>l7});var l7=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var lc={};Wt(lc,{json:()=>p7});var p7=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var pc={};Wt(pc,{json:()=>m7});var m7=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var mc={};Wt(mc,{json:()=>f7});var f7=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var fc={};Wt(fc,{json:()=>h7});var h7=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var hc={};Wt(hc,{json:()=>d7});var d7=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var dc={};Wt(dc,{json:()=>g7});var g7=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var gc={};Wt(gc,{json:()=>y7});var y7=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var yc={};Wt(yc,{json:()=>b7});var b7=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var bc={};Wt(bc,{json:()=>x7});var x7=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var xc={};Wt(xc,{json:()=>v7});var v7=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var vc={};Wt(vc,{json:()=>w7});var w7=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var wc={};Wt(wc,{json:()=>T7});var T7=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Tc={};Wt(Tc,{json:()=>N7});var N7=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var Is=class{constructor(){let t=[oc,sc,ic,ac,uc,cc,lc,pc,mc,fc,hc,dc,gc,yc,bc,xc,vc,wc,Tc],r=[].concat(...t.map(n=>n.json));this.opMappers=r.reduce((n,o)=>(n[o.tfOpName]=o,n),{})}static get Instance(){return this._instance||(this._instance=new this)}transformGraph(t,r={}){let n=t.node,o=[],s=[],a=[],i=n.reduce((O,D)=>(O[D.name]=this.mapNode(D),D.op.startsWith("Placeholder")?o.push(O[D.name]):D.op==="Const"?s.push(O[D.name]):(D.input==null||D.input.length===0)&&a.push(O[D.name]),O),{}),u=[],c=[],p={},f={};r!=null&&(p=this.mapSignatureEntries(r.inputs),f=this.mapSignatureEntries(r.outputs));let x=Object.keys(i);x.forEach(O=>{let D=i[O];D.inputNames.forEach((C,K)=>{let[P,,G]=br(C),q=i[P];if(q.outputs!=null){let z=q.outputs.indexOf(G);if(z!==-1){let rt=`${P}:${z}`;D.inputNames[K]=rt}}D.inputs.push(q),q.children.push(D)})}),Object.keys(f).length===0?x.forEach(O=>{let D=i[O];D.children.length===0&&c.push(D)}):Object.keys(f).forEach(O=>{let[D]=br(O),C=i[D];C!=null&&(C.signatureKey=f[O],c.push(C))}),Object.keys(p).length>0?Object.keys(p).forEach(O=>{let[D]=br(O),C=i[D];C&&(C.signatureKey=p[O],u.push(C))}):u=o;let T={};t.library!=null&&t.library.function!=null&&(T=t.library.function.reduce((O,D)=>(O[D.signature.name]=this.mapFunction(D),O),{}));let k={nodes:i,inputs:u,outputs:c,weights:s,placeholders:o,signature:r,functions:T};return a.length>0&&(k.initNodes=a),k}mapSignatureEntries(t){return Object.keys(t||{}).reduce((r,n)=>(r[t[n].name]=n,r),{})}mapNode(t){let r=Ta(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});let n={name:t.name,op:t.op,category:r.category,inputNames:(t.input||[]).map(o=>o.startsWith("^")?o.slice(1):o),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:r.outputs};return r.inputs!=null&&(n.inputParams=r.inputs.reduce((o,s)=>(o[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},o),{})),r.attrs!=null&&(n.attrParams=r.attrs.reduce((o,s)=>{let a=s.type,i;switch(s.type){case"string":i=Ea(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Ea(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":i=$a(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=$a(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":i=ka(t.attr,s.tfName,s.defaultValue||0),i===void 0&&s.tfDeprecatedName&&(i=ka(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":i=Oa(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Oa(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":i=Sa(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Sa(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":i=Fa(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Fa(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":i=Aa(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Aa(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":i=Da(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Da(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":i=Ia(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Ia(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":i=_a(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=_a(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":i=Th(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Th(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${t.op}`)}return o[s.name]={value:i,type:a},o},{})),n}mapFunction(t){let r=t.nodeDef,n=[],o=[],s={};r!=null&&(s=r.reduce((f,x)=>(f[x.name]=this.mapNode(x),x.op==="Const"&&o.push(f[x.name]),f),{}));let a=[],i=[];t.signature.inputArg.forEach(f=>{let[x]=br(f.name),T={name:x,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Nc(f.type),type:"dtype"}},children:[]};T.signatureKey=f.name,a.push(T),s[x]=T}),Object.keys(s).forEach(f=>{let x=s[f];x.inputNames.forEach((T,k)=>{let[O,,D]=br(T),C=s[O];if(C.outputs!=null){let K=C.outputs.indexOf(D);if(K!==-1){let P=`${O}:${K}`;x.inputNames[k]=P}}x.inputs.push(C),C.children.push(x)})});let c=t.ret;t.signature.outputArg.forEach(f=>{let[x,T]=br(c[f.name]),k=s[x];k!=null&&(k.defaultOutput=T,i.push(k))});let p=this.mapArgsToSignature(t);return{nodes:s,inputs:a,outputs:i,weights:o,placeholders:n,signature:p}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((r,n)=>(r[n.name]=this.mapArgToTensorInfo(n),r),{}),outputs:t.signature.outputArg.reduce((r,n)=>(r[n.name]=this.mapArgToTensorInfo(n,t.ret),r),{})}}mapArgToTensorInfo(t,r){let n=t.name;return r!=null&&(n=r[n]),{name:n,dtype:t.type}}};function E7(e){let t=lt().global;if(typeof t.atob<"u")return t.atob(e);if(typeof Buffer<"u")return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function Nh(e,t){let r=Array.isArray(e)?String.fromCharCode.apply(null,e):E7(e);return t?r:r.toLowerCase()}function Ea(e,t,r,n=!1){let o=e[t];return o!=null?Nh(o.s,n):r}function Sa(e,t,r){let n=e[t];return n?n.b:r}function ka(e,t,r){let n=e[t]||{},o=n.i!=null?n.i:n.f!=null?n.f:r;return typeof o=="number"?o:parseInt(o,10)}function Nc(e){switch(typeof e=="string"&&(e=Ze[e]),e){case Ze.DT_FLOAT:case Ze.DT_HALF:return"float32";case Ze.DT_INT32:case Ze.DT_INT64:case Ze.DT_INT8:case Ze.DT_UINT8:return"int32";case Ze.DT_BOOL:return"bool";case Ze.DT_DOUBLE:return"float32";case Ze.DT_STRING:return"string";default:return null}}function Th(e,t,r){let n=e[t];return n&&n.func?n.func.name:r}function Ia(e,t,r){let n=e[t];return n&&n.type?Nc(n.type):r}function _a(e,t,r){let n=e[t];return n&&n.list&&n.list.type?n.list.type.map(o=>Nc(o)):r}function Eh(e){if(!e.unknownRank)return e.dim!=null?e.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Aa(e,t,r){let n=e[t];return n&&n.shape?Eh(n.shape):r}function Oa(e,t,r){let n=e[t];return n?((n.list.f&&n.list.f.length?n.list.f:n.list.i)||[]).map(o=>typeof o=="number"?o:parseInt(o,10)):r}function $a(e,t,r,n=!1){let o=e[t];return o&&o.list&&o.list.s?o.list.s.map(s=>Nh(s,n)):r}function Da(e,t,r){let n=e[t];return n&&n.list&&n.list.shape?n.list.shape.map(o=>Eh(o)):r}function Fa(e,t,r){let n=e[t];return n&&n.list&&n.list.b?n.list.b:r}var Ca=class{constructor(t,r,n){this.node=t,this.tensorMap=r,this.context=n,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(o=>this.getInput(o)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((o,s)=>(o[s]=this.getAttr(s),o),{}))}getInput(t){return ne(t,this.tensorMap,this.context)}getAttr(t,r){let n=this.node.rawAttrs[t];if(n.tensor!=null)return ne(t,this.tensorMap,this.context);if(n.i!=null||n.f!=null)return ka(this.node.rawAttrs,t,r);if(n.s!=null)return Ea(this.node.rawAttrs,t,r);if(n.b!=null)return Sa(this.node.rawAttrs,t,r);if(n.shape!=null)return Aa(this.node.rawAttrs,t,r);if(n.type!=null)return Ia(this.node.rawAttrs,t,r);if(n.list!=null){if(n.list.i!=null||n.list.f!=null)return Oa(this.node.rawAttrs,t,r);if(n.list.s!=null)return $a(this.node.rawAttrs,t,r);if(n.list.shape!=null)return Da(this.node.rawAttrs,t,r);if(n.list.b!=null)return Fa(this.node.rawAttrs,t,r);if(n.list.type!=null)return _a(this.node.rawAttrs,t,r)}return r}};var Et={};Wt(Et,{OP_SCOPE_SUFFIX:()=>$u,abs:()=>ae,acos:()=>q2,acosh:()=>X2,add:()=>et,addN:()=>Y2,all:()=>J2,any:()=>Z2,argMax:()=>Q2,argMin:()=>tm,asin:()=>em,asinh:()=>rm,atan:()=>nm,atan2:()=>om,atanh:()=>sm,avgPool:()=>Si,avgPool3d:()=>am,basicLSTMCell:()=>um,batchNorm:()=>hn,batchNorm2d:()=>lm,batchNorm3d:()=>pm,batchNorm4d:()=>mm,batchToSpaceND:()=>ki,bincount:()=>Ii,booleanMaskAsync:()=>v5,broadcastArgs:()=>fm,broadcastTo:()=>Oo,buffer:()=>he,cast:()=>wt,ceil:()=>hm,clipByValue:()=>_i,clone:()=>Ge,complex:()=>ke,concat:()=>Lt,concat1d:()=>dm,concat2d:()=>gm,concat3d:()=>ym,concat4d:()=>bm,conv1d:()=>xm,conv2d:()=>dn,conv2dTranspose:()=>vm,conv3d:()=>wm,conv3dTranspose:()=>Nm,cos:()=>Em,cosh:()=>Sm,cosineWindow:()=>Ts,cumprod:()=>km,cumsum:()=>Im,denseBincount:()=>_m,depthToSpace:()=>Am,depthwiseConv2d:()=>$o,diag:()=>Om,dilation2d:()=>$m,div:()=>ft,divNoNan:()=>Fm,dot:()=>Cm,dropout:()=>C5,einsum:()=>Rm,elu:()=>Di,enclosingPowerOfTwo:()=>qu,equal:()=>$i,erf:()=>Lm,euclideanNorm:()=>Mm,exp:()=>Ae,expandDims:()=>Oe,expm1:()=>Bm,eye:()=>Fi,fft:()=>Fo,fill:()=>Dr,floor:()=>Ci,floorDiv:()=>Ni,fused:()=>Xu,gather:()=>Ri,gatherND:()=>D5,greater:()=>Kn,greaterEqual:()=>Li,ifft:()=>Zn,imag:()=>bn,image:()=>wn,inTopKAsync:()=>L5,irfft:()=>oa,isFinite:()=>Gm,isInf:()=>zm,isNaN:()=>Vm,leakyRelu:()=>Pi,less:()=>Um,lessEqual:()=>Do,linalg:()=>Ly,linspace:()=>jm,localResponseNormalization:()=>Wm,log:()=>Wr,log1p:()=>Mi,logSigmoid:()=>Km,logSoftmax:()=>qm,logSumExp:()=>Gi,logicalAnd:()=>qn,logicalNot:()=>zi,logicalOr:()=>Vi,logicalXor:()=>Xm,losses:()=>Py,lowerBound:()=>Ym,matMul:()=>kt,max:()=>Fr,maxPool:()=>ji,maxPool3d:()=>Jm,maxPoolWithArgmax:()=>Zm,maximum:()=>Wi,mean:()=>Xn,meshgrid:()=>Qm,min:()=>vs,minimum:()=>Hi,mirrorPad:()=>ef,mod:()=>rf,moments:()=>nf,movingAverage:()=>N5,mul:()=>W,multiRNNCell:()=>of,multinomial:()=>sf,neg:()=>xe,norm:()=>Hn,notEqual:()=>Ki,oneHot:()=>af,ones:()=>Rr,onesLike:()=>uf,op:()=>v,outerProduct:()=>cf,pad:()=>Lr,pad1d:()=>lf,pad2d:()=>pf,pad3d:()=>mf,pad4d:()=>ff,pool:()=>hf,pow:()=>jr,prelu:()=>Xi,print:()=>Ti,prod:()=>df,raggedGather:()=>gf,raggedRange:()=>yf,raggedTensorToTensor:()=>bf,rand:()=>xf,randomGamma:()=>Pf,randomNormal:()=>ta,randomStandardNormal:()=>Mf,randomUniform:()=>ea,range:()=>xn,real:()=>Hr,reciprocal:()=>Bf,relu:()=>vn,relu6:()=>ra,reshape:()=>L,reverse:()=>Xe,reverse1d:()=>Gf,reverse2d:()=>zf,reverse3d:()=>Vf,reverse4d:()=>Uf,rfft:()=>Co,round:()=>na,rsqrt:()=>jf,scalar:()=>ct,scatterND:()=>I5,searchSorted:()=>ws,selu:()=>Wf,separableConv2d:()=>Hf,setdiff1dAsync:()=>Kf,sigmoid:()=>cr,sign:()=>qf,signal:()=>Ry,sin:()=>Xf,sinh:()=>Yf,slice:()=>mt,slice1d:()=>Jf,slice2d:()=>Zf,slice3d:()=>Qf,slice4d:()=>t3,softmax:()=>e3,softplus:()=>Bi,spaceToBatchND:()=>qi,sparse:()=>My,sparseToDense:()=>O5,spectral:()=>Cy,split:()=>Kr,sqrt:()=>_e,square:()=>ue,squaredDifference:()=>sa,squeeze:()=>Ht,stack:()=>ve,step:()=>ia,stridedSlice:()=>r3,string:()=>By,sub:()=>ut,sum:()=>It,tan:()=>n3,tanh:()=>xs,tensor:()=>ye,tensor1d:()=>Xt,tensor2d:()=>Ye,tensor3d:()=>aa,tensor4d:()=>o3,tensor5d:()=>s3,tensor6d:()=>i3,tile:()=>yn,topk:()=>a3,transpose:()=>ca,truncatedNormal:()=>u3,unique:()=>c3,unsortedSegmentSum:()=>l3,unstack:()=>Je,upperBound:()=>p3,variable:()=>m3,where:()=>yr,whereAsync:()=>ua,zeros:()=>Cr,zerosLike:()=>re});var Sh=(e,t,r,n=Et)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[n.add(h("a",e,t,r),h("b",e,t,r))];case"AddN":return[n.addN(h("tensors",e,t,r))];case"FloorMod":case"Mod":return[n.mod(h("a",e,t,r),h("b",e,t,r))];case"Mul":return[n.mul(h("a",e,t,r),h("b",e,t,r))];case"RealDiv":case"Div":return[n.div(h("a",e,t,r),h("b",e,t,r))];case"DivNoNan":return[n.divNoNan(h("a",e,t,r),h("b",e,t,r))];case"FloorDiv":return[n.floorDiv(h("a",e,t,r),h("b",e,t,r))];case"Sub":return[n.sub(h("a",e,t,r),h("b",e,t,r))];case"Minimum":return[n.minimum(h("a",e,t,r),h("b",e,t,r))];case"Maximum":return[n.maximum(h("a",e,t,r),h("b",e,t,r))];case"Pow":return[n.pow(h("a",e,t,r),h("b",e,t,r))];case"SquaredDifference":return[n.squaredDifference(h("a",e,t,r),h("b",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var kh=(e,t,r,n=Et)=>{switch(e.op){case"Abs":case"ComplexAbs":return[n.abs(h("x",e,t,r))];case"Acos":return[n.acos(h("x",e,t,r))];case"Acosh":return[n.acosh(h("x",e,t,r))];case"Asin":return[n.asin(h("x",e,t,r))];case"Asinh":return[n.asinh(h("x",e,t,r))];case"Atan":return[n.atan(h("x",e,t,r))];case"Atan2":return[n.atan2(h("x",e,t,r),h("y",e,t,r))];case"Atanh":return[n.atanh(h("x",e,t,r))];case"Ceil":return[n.ceil(h("x",e,t,r))];case"Complex":return[n.complex(h("real",e,t,r),h("imag",e,t,r))];case"Cos":return[n.cos(h("x",e,t,r))];case"Cosh":return[n.cosh(h("x",e,t,r))];case"Elu":return[n.elu(h("x",e,t,r))];case"Erf":return[n.erf(h("x",e,t,r))];case"Exp":return[n.exp(h("x",e,t,r))];case"Expm1":return[n.expm1(h("x",e,t,r))];case"Floor":return[n.floor(h("x",e,t,r))];case"Log":return[n.log(h("x",e,t,r))];case"Log1p":return[n.log1p(h("x",e,t,r))];case"Imag":return[n.imag(h("x",e,t,r))];case"Neg":return[n.neg(h("x",e,t,r))];case"Reciprocal":return[n.reciprocal(h("x",e,t,r))];case"Real":return[n.real(h("x",e,t,r))];case"Relu":return[n.relu(h("x",e,t,r))];case"Round":return[n.round(h("x",e,t,r))];case"Selu":return[n.selu(h("x",e,t,r))];case"Sigmoid":return[n.sigmoid(h("x",e,t,r))];case"Sin":return[n.sin(h("x",e,t,r))];case"Sign":return[n.sign(h("x",e,t,r))];case"Sinh":return[n.sinh(h("x",e,t,r))];case"Softplus":return[n.softplus(h("x",e,t,r))];case"Sqrt":return[n.sqrt(h("x",e,t,r))];case"Square":return[n.square(h("x",e,t,r))];case"Tanh":return[n.tanh(h("x",e,t,r))];case"Tan":return[n.tan(h("x",e,t,r))];case"ClipByValue":return[n.clipByValue(h("x",e,t,r),h("clipValueMin",e,t,r),h("clipValueMax",e,t,r))];case"Relu6":return[n.relu6(h("x",e,t,r))];case"Rsqrt":return[n.rsqrt(ne(e.inputNames[0],t,r))];case"Prod":return[n.prod(h("x",e,t,r),h("axes",e,t,r))];case"LeakyRelu":return[n.leakyRelu(h("x",e,t,r),h("alpha",e,t,r))];case"Prelu":return[n.prelu(h("x",e,t,r),h("alpha",e,t,r))];case"IsNan":return[n.isNaN(ne(e.inputNames[0],t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function ze(e,t,r=""){if(!(typeof e=="number"||typeof t=="number")){X.assert(e.length===t.length,()=>r+` Shapes ${e} and ${t} must match`);for(let n=0;n<e.length;n++){let o=e[n],s=t[n];X.assert(o<0||s<0||o===s,()=>r+` Shapes ${e} and ${t} must match`)}}}function Ih(e){return!(typeof e=="number"||e.some(t=>t<0))}function Go(e,t,r){let n=Ra(e,r),o=!Ih(n);if(o&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${n}`);if(o&&t.forEach(s=>{n=Ra(s.shape,n)}),!Ih(n))throw new Error(`Non-fully-defined elementShape: ${n}`);return n}function Ra(e,t){if(typeof e=="number")return t;if(typeof t=="number")return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);let r=[];for(let n=0;n<e.length;++n){let o=e[n],s=t[n];if(o>=0&&s>=0&&o!==s)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);r[n]=o>=0?o:s}return r}var La=class{constructor(t,r,n,o,s,a,i){this.name=t,this.dtype=r,this.maxSize=n,this.elementShape=o,this.identicalElementShapes=s,this.dynamicSize=a,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=ct(0),Ie(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(r=>{(t==null||!t.has(r.tensor.id))&&r.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);let r=this.tensors[t];if(r.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(r.cleared=!0),r.read=!0,r.tensor}readMany(t){return t.map(r=>this.read(r))}write(t,r){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);let n=this.tensors[t]||{};if(r.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${r.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=r.shape),ze(this.elementShape,r.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);n.tensor=r,Ie(r),n.written=!0,this.tensors[t]=n}writeMany(t,r){if(t.length!==r.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${r.length}.`);t.forEach((n,o)=>this.write(n,r[o]))}gather(t,r){if(r&&r!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${r}`);if(t)t=t.slice(0,this.size());else{t=[];for(let o=0;o<this.size();o++)t.push(o)}if(t.length===0)return ye([],[0].concat(this.elementShape));let n=this.readMany(t);return ze(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),ve(n,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return ye([],[0].concat(this.elementShape));let r=[];for(let o=0;o<this.size();o++)r.push(o);let n=this.readMany(r);return ze(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Lt(n,0)}scatter(t,r){if(r.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${r.dtype}`);if(t.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${r.shape[0]}`);let n=Math.max(...t);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(t,Je(r,0))}split(t,r){if(r.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${r.dtype}`);let n=0,o=t.map(u=>(n+=u,n));if(n!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${r.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);let s=n===0?0:r.size/n,a=[];pt(()=>{r=L(r,[1,n,s]);for(let u=0;u<t.length;++u){let p=[0,u===0?0:o[u-1],0],f=[1,t[u],s];a[u]=L(mt(r,p,f),this.elementShape)}return a});let i=[];for(let u=0;u<t.length;u++)i[u]=u;this.writeMany(i,a)}};var Yr=class{constructor(t,r,n,o=-1){this.tensors=t,this.elementShape=r,this.elementDtype=n,t!=null&&t.forEach(s=>{if(n!==s.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${s.dtype}`);ze(r,s.shape,"TensorList shape mismatch: "),Ie(s)}),this.idTensor=ct(0),this.maxNumElements=o,Ie(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Yr([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(r=>{(t==null||!t.has(r.id))&&r.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,r,n=-1){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(n!==-1&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);ze(t,this.elementShape,"TensorList shape mismatch: ");let o=Go(this.elementShape,this.tensors,t);return pt(()=>{let s=this.tensors.map(a=>L(a,o));return ve(s,0)})}popBack(t,r){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");let n=Go(this.elementShape,this.tensors,t),o=this.tensors.pop();return o.kept=!1,ze(o.shape,t,"TensorList shape mismatch: "),L(o,n)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(ze(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Ie(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);let r=new Yr([],this.elementShape,this.elementDtype,this.maxNumElements);r.tensors.length=t;for(let n=0;n<Math.min(this.tensors.length,t);++n)r.tensors[n]=this.tensors[n];return r}getItem(t,r,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);ze(this.tensors[t].shape,r,"TensorList shape mismatch: ");let o=Go(this.elementShape,this.tensors,r);return L(this.tensors[t],o)}setItem(t,r){if(r.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);ze(this.elementShape,r.shape,"TensorList shape mismatch: "),Ie(r),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=r}gather(t,r,n){if(r!==this.elementDtype)throw new Error(`Invalid data types; op elements ${r}, but list elements ${this.elementDtype}`);ze(this.elementShape,n,"TensorList shape mismatch: "),t=t.slice(0,this.size());let o=Go(this.elementShape,this.tensors,n);return t.length===0?ye([],[0].concat(o)):pt(()=>{let s=t.map(a=>L(this.tensors[a],o));return ve(s,0)})}concat(t,r){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);ze(this.elementShape,r,"TensorList shape mismatch: ");let n=Go(this.elementShape,this.tensors,r);return this.size()===0?ye([],[0].concat(n)):pt(()=>{let o=this.tensors.map(s=>L(s,n));return Lt(o,0)})}};function _h(e,t,r){let n=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==r)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${r}`);let o=e.shape.slice(1);ze(o,t,"TensorList shape mismatch: ");let s=Je(e);return new Yr(s,t,n)}function Ah(e,t,r,n){return new Yr([],e,t,n)}function Oh(e,t,r,n){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let o=Math.max(...t);if(n!=null&&n!==-1&&o>=n)throw new Error(`Max index must be < array size (${o}  vs. ${n})`);let s=new Yr([],r,e.dtype,n),a=Je(e,0);return t.forEach((i,u)=>{s.setItem(i,a[u])}),s}function $h(e,t,r){let n=0,o=t.map(p=>(n+=p,n));if(n!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${e.shape}`);let s=e.shape.slice(1),a=Ra(s,r),i=n===0?0:e.size/n,u=pt(()=>{let p=[];e=L(e,[1,n,i]);for(let f=0;f<t.length;++f){let T=[0,f===0?0:o[f-1],0],k=[1,t[f],i];p[f]=L(mt(e,T,k),a)}return e.dispose(),p}),c=new Yr([],r,e.dtype,t.length);for(let p=0;p<u.length;p++)c.setItem(p,u[p]);return c}var Dh=async(e,t,r)=>{switch(e.op){case"If":case"StatelessIf":{let n=h("thenBranch",e,t,r),o=h("elseBranch",e,t,r),s=h("cond",e,t,r),a=h("args",e,t,r);return(await s.data())[0]?r.functionMap[n].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap):r.functionMap[o].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap)}case"While":case"StatelessWhile":{let n=h("body",e,t,r),o=h("cond",e,t,r),s=h("args",e,t,r),a=await r.functionMap[o].executeFunctionAsync(s,r.tensorArrayMap,r.tensorListMap),i=s.map(p=>p.id),u=await a[0].data();a.forEach(p=>{!p.kept&&i.indexOf(p.id)===-1&&p.dispose()});let c=s;for(;u[0];){let p=c;c=await r.functionMap[n].executeFunctionAsync(c,r.tensorArrayMap,r.tensorListMap);let f=c.map(T=>T.id);p.forEach(T=>{!T.kept&&i.indexOf(T.id)===-1&&f.indexOf(T.id)===-1&&T.dispose()});let x=await r.functionMap[o].executeFunctionAsync(c,r.tensorArrayMap,r.tensorListMap);u=await x[0].data(),x.forEach(T=>{!T.kept&&i.indexOf(T.id)===-1&&f.indexOf(T.id)===-1&&T.dispose()})}return c}case"LoopCond":{let n=h("pred",e,t,r);return[xr(n)]}case"Switch":{let n=h("pred",e,t,r),o=h("data",e,t,r);return o.kept||(o=xr(o)),(await n.data())[0]?[void 0,o]:[o,void 0]}case"Merge":{let n=e.inputNames.find(o=>ne(o,t,r)!==void 0);if(n){let o=ne(n,t,r);return[xr(o)]}return}case"Enter":{let n=h("frameName",e,t,r),o=h("tensor",e,t,r);return r.enterFrame(n),[xr(o)]}case"Exit":{let n=h("tensor",e,t,r);return r.exitFrame(),[xr(n)]}case"NextIteration":{let n=h("tensor",e,t,r);return r.nextIteration(),[xr(n)]}case"TensorArrayV3":{let n=h("size",e,t,r),o=h("dtype",e,t,r),s=h("elementShape",e,t,r),a=h("dynamicSize",e,t,r),i=h("clearAfterRead",e,t,r),u=h("identicalElementShapes",e,t,r),c=h("name",e,t,r),p=new La(c,o,n,s,u,a,i);return r.addTensorArray(p),[p.idTensor,ct(1)]}case"TensorArrayWriteV3":{let n=h("tensorArrayId",e,t,r),o=h("index",e,t,r),s=h("tensor",e,t,r),a=r.getTensorArray(n.id);return a.write(o,s),[a.idTensor]}case"TensorArrayReadV3":{let n=h("tensorArrayId",e,t,r),o=h("index",e,t,r);return[r.getTensorArray(n.id).read(o)]}case"TensorArrayGatherV3":{let n=h("tensorArrayId",e,t,r),o=h("indices",e,t,r),s=h("dtype",e,t,r);return[r.getTensorArray(n.id).gather(o,s)]}case"TensorArrayScatterV3":{let n=h("tensorArrayId",e,t,r),o=h("indices",e,t,r),s=h("tensor",e,t,r),a=r.getTensorArray(n.id);return a.scatter(o,s),[a.idTensor]}case"TensorArrayConcatV3":{let n=h("tensorArrayId",e,t,r),o=r.getTensorArray(n.id),s=h("dtype",e,t,r);return[o.concat(s)]}case"TensorArraySplitV3":{let n=h("tensorArrayId",e,t,r),o=h("tensor",e,t,r),s=h("lengths",e,t,r),a=r.getTensorArray(n.id);return a.split(s,o),[a.idTensor]}case"TensorArraySizeV3":{let n=h("tensorArrayId",e,t,r),o=r.getTensorArray(n.id);return[ct(o.size(),"int32")]}case"TensorArrayCloseV3":{let n=h("tensorArrayId",e,t,r),o=r.getTensorArray(n.id);return o.clearAndClose(),[o.idTensor]}case"TensorListSetItem":{let n=h("tensorListId",e,t,r),o=h("index",e,t,r),s=h("tensor",e,t,r),a=r.getTensorList(n.id);return a.setItem(o,s),[a.idTensor]}case"TensorListGetItem":{let n=h("tensorListId",e,t,r),o=h("index",e,t,r),s=h("elementShape",e,t,r),a=h("elementDType",e,t,r);return[r.getTensorList(n.id).getItem(o,s,a)]}case"TensorListScatterV2":case"TensorListScatter":{let n=h("indices",e,t,r),o=h("tensor",e,t,r),s=h("elementShape",e,t,r),a=h("numElements",e,t,r),i=Oh(o,n,s,a);return r.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let n=h("elementShape",e,t,r),o=h("elementDType",e,t,r),s;e.op==="TensorListReserve"?s="numElements":s="maxNumElements";let a=h(s,e,t,r),i=e.op==="TensorListReserve"?-1:a,u=Ah(n,o,a,i);return r.addTensorList(u),[u.idTensor]}case"TensorListGather":{let n=h("tensorListId",e,t,r),o=h("indices",e,t,r),s=h("elementShape",e,t,r),a=h("elementDType",e,t,r);return[r.getTensorList(n.id).gather(o,a,s)]}case"TensorListStack":{let n=h("tensorListId",e,t,r),o=h("elementShape",e,t,r),s=h("elementDType",e,t,r),a=h("numElements",e,t,r);return[r.getTensorList(n.id).stack(o,s,a)]}case"TensorListFromTensor":{let n=h("tensor",e,t,r),o=h("elementShape",e,t,r),s=h("elementDType",e,t,r),a=_h(n,o,s);return r.addTensorList(a),[a.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let n=h("tensorListId",e,t,r),o=r.getTensorList(n.id),s=h("dtype",e,t,r),a=h("elementShape",e,t,r);return[o.concat(s,a)]}case"TensorListPushBack":{let n=h("tensorListId",e,t,r),o=h("tensor",e,t,r),s=r.getTensorList(n.id);return s.pushBack(o),[s.idTensor]}case"TensorListPopBack":{let n=h("tensorListId",e,t,r),o=h("elementShape",e,t,r),s=h("elementDType",e,t,r);return[r.getTensorList(n.id).popBack(o,s)]}case"TensorListSplit":{let n=h("tensor",e,t,r),o=h("elementShape",e,t,r),s=h("lengths",e,t,r),a=$h(n,s,o);return r.addTensorList(a),[a.idTensor]}case"TensorListLength":{let n=h("tensorListId",e,t,r),o=r.getTensorList(n.id);return[ct(o.size(),"int32")]}case"TensorListResize":{let n=h("tensorListId",e,t,r),o=h("size",e,t,r),a=r.getTensorList(n.id).resize(o);return r.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};function Fh(e,t,r){let[n,o]=h("fusedOps",e,t,r),s=n==="biasadd",a=!s,i=o==="prelu",u=n==="fusedbatchnorm",c=h("numArgs",e,t,r);if(s){if(i&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let p=h("strides",e,t,r),f=ks(e,t,r),x=h("dataFormat",e,t,r).toUpperCase(),T=h("dilations",e,t,r),[k,O]=h("args",e,t,r);a&&(O=k,k=void 0);let D=h("leakyreluAlpha",e,t,r);return{stride:p,pad:f,dataFormat:x,dilations:T,biasArg:k,preluArg:O,activationFunc:o,leakyreluAlpha:D}}var Ch=(e,t,r,n=Et)=>{switch(e.op){case"Conv1D":{let o=h("stride",e,t,r),s=h("pad",e,t,r),a=h("dataFormat",e,t,r).toUpperCase(),i=h("dilation",e,t,r);return[n.conv1d(h("x",e,t,r),h("filter",e,t,r),o,s,a,i)]}case"Conv2D":{let o=h("strides",e,t,r),s=ks(e,t,r),a=h("dataFormat",e,t,r).toUpperCase(),i=h("dilations",e,t,r);return[n.conv2d(h("x",e,t,r),h("filter",e,t,r),[o[1],o[2]],s,a,[i[1],i[2]])]}case"_FusedConv2D":{let{stride:o,pad:s,dataFormat:a,dilations:i,biasArg:u,preluArg:c,activationFunc:p,leakyreluAlpha:f}=Fh(e,t,r);return[n.fused.conv2d({x:h("x",e,t,r),filter:h("filter",e,t,r),strides:[o[1],o[2]],pad:s,dataFormat:a,dilations:[i[1],i[2]],bias:u,activation:p,preluActivationWeights:c,leakyreluAlpha:f})]}case"FusedDepthwiseConv2dNative":{let{stride:o,pad:s,dataFormat:a,dilations:i,biasArg:u,preluArg:c,activationFunc:p,leakyreluAlpha:f}=Fh(e,t,r);return[n.fused.depthwiseConv2d({x:h("x",e,t,r),filter:h("filter",e,t,r),strides:[o[1],o[2]],pad:s,dataFormat:a,dilations:[i[1],i[2]],bias:u,activation:p,preluActivationWeights:c,leakyreluAlpha:f})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let o=h("outputShape",e,t,r),s=h("strides",e,t,r),a=ks(e,t,r);return[n.conv2dTranspose(h("x",e,t,r),h("filter",e,t,r),o,[s[1],s[2]],a)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let o=h("strides",e,t,r),s=ks(e,t,r),a=h("dilations",e,t,r),i=h("dataFormat",e,t,r).toUpperCase();return[n.depthwiseConv2d(h("input",e,t,r),h("filter",e,t,r),[o[1],o[2]],s,i,[a[1],a[2]])]}case"Conv3D":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("dataFormat",e,t,r).toUpperCase(),i=h("dilations",e,t,r);return[n.conv3d(h("x",e,t,r),h("filter",e,t,r),[o[1],o[2],o[3]],s,a,[i[1],i[2],i[3]])]}case"AvgPool":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("kernelSize",e,t,r);return[n.avgPool(h("x",e,t,r),[a[1],a[2]],[o[1],o[2]],s)]}case"MaxPool":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("kernelSize",e,t,r);return[n.maxPool(h("x",e,t,r),[a[1],a[2]],[o[1],o[2]],s)]}case"MaxPoolWithArgmax":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("kernelSize",e,t,r),i=h("includeBatchInIndex",e,t,r),{result:u,indexes:c}=n.maxPoolWithArgmax(h("x",e,t,r),[a[1],a[2]],[o[1],o[2]],s,i);return[u,c]}case"AvgPool3D":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("kernelSize",e,t,r);return[n.avgPool3d(h("x",e,t,r),[a[1],a[2],a[3]],[o[1],o[2],o[3]],s)]}case"MaxPool3D":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("kernelSize",e,t,r);return[n.maxPool3d(h("x",e,t,r),[a[1],a[2],a[3]],[o[1],o[2],o[3]],s)]}case"Dilation2D":{let o=h("strides",e,t,r),s=h("pad",e,t,r),a=h("dilations",e,t,r),i=o[1],u=o[2],c=a[1],p=a[2];return[n.dilation2d(h("x",e,t,r),h("filter",e,t,r),[i,u],s,[c,p],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Rh=(e,t,r,n=Et)=>{switch(e.op){case"Fill":{let o=h("shape",e,t,r),s=h("dtype",e,t,r),a=h("value",e,t,r);return[n.fill(o,a,s)]}case"LinSpace":{let o=h("start",e,t,r),s=h("stop",e,t,r),a=h("num",e,t,r);return[n.linspace(o,s,a)]}case"Multinomial":{let o=h("logits",e,t,r),s=h("numSamples",e,t,r),a=h("seed",e,t,r);return[n.multinomial(o,s,a)]}case"OneHot":{let o=h("indices",e,t,r),s=h("depth",e,t,r),a=h("onValue",e,t,r),i=h("offValue",e,t,r),u=h("dtype",e,t,r);return[n.oneHot(o,s,a,i,u)]}case"Ones":return[n.ones(h("shape",e,t,r),h("dtype",e,t,r))];case"OnesLike":return[n.onesLike(h("x",e,t,r))];case"RandomStandardNormal":return[n.randomStandardNormal(h("shape",e,t,r),h("dtype",e,t,r),h("seed",e,t,r))];case"RandomUniform":return[n.randomUniform(h("shape",e,t,r),h("minval",e,t,r),h("maxval",e,t,r),h("dtype",e,t,r))];case"Range":{let o=h("start",e,t,r),s=h("stop",e,t,r),a=h("step",e,t,r);return[n.range(o,s,a,h("dtype",e,t,r))]}case"TruncatedNormal":{let o=h("shape",e,t,r),s=h("mean",e,t,r),a=h("stdDev",e,t,r),i=h("seed",e,t,r);return[n.truncatedNormal(o,s,a,h("dtype",e,t,r),i)]}case"Zeros":return[n.zeros(h("shape",e,t,r),h("dtype",e,t,r))];case"ZerosLike":return[n.zerosLike(h("x",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function Ec(e,t,r){let n=h("boxes",e,t,r),o=h("scores",e,t,r),s=h("maxOutputSize",e,t,r),a=h("iouThreshold",e,t,r),i=h("scoreThreshold",e,t,r),u=h("softNmsSigma",e,t,r);return{boxes:n,scores:o,maxOutputSize:s,iouThreshold:a,scoreThreshold:i,softNmsSigma:u}}var Lh=async(e,t,r,n,o=Et)=>{switch(e.op){case"NonMaxSuppressionV5":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:u,scoreThreshold:c,softNmsSigma:p}=Ec(e,t,r),f=await o.image.nonMaxSuppressionWithScoreAsync(s,a,i,u,c,p);return[f.selectedIndices,f.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=Ec(e,t,r),p=h("padToMaxOutputSize",e,t,r),f=await o.image.nonMaxSuppressionPaddedAsync(s,a,i,u,c,p);return[f.selectedIndices,f.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:u,scoreThreshold:c}=Ec(e,t,r);return[await o.image.nonMaxSuppressionAsync(s,a,i,u,c)]}case"Where":{let s=o.cast(h("condition",e,t,r),"bool"),a=[await o.whereAsync(s)];return s.dispose(),a}case"ListDiff":return o.setdiff1dAsync(h("x",e,t,r),h("y",e,t,r));default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Ph=(e,t,r,n=Et)=>{switch(e.op){case"LowerBound":{let o=h("sortedSequence",e,t,r),s=h("values",e,t,r);return[n.lowerBound(o,s)]}case"TopKV2":{let o=h("x",e,t,r),s=h("k",e,t,r),a=h("sorted",e,t,r),i=n.topk(o,s,a);return[i.values,i.indices]}case"UpperBound":{let o=h("sortedSequence",e,t,r),s=h("values",e,t,r);return[n.upperBound(o,s)]}case"Unique":{let o=h("x",e,t,r),s=n.unique(o);return[s.values,s.indices]}case"UniqueV2":{let o=h("x",e,t,r),s=h("axis",e,t,r),a=n.unique(o,s);return[a.values,a.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Mh=(e,t,r,n=Et)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":let o=h("default",e,t,r);return[ne(e.name,t,r)||o];case"Placeholder":return[ne(e.name,t,r)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let p=h("x",e,t,r);return[xr(p)]}case"IdentityN":return h("x",e,t,r).map(p=>xr(p));case"Snapshot":let s=h("x",e,t,r);return[xr(s)];case"Shape":return[n.tensor1d(h("x",e,t,r).shape,"int32")];case"ShapeN":return h("x",e,t,r).map(p=>n.tensor1d(p.shape));case"Size":return[n.scalar(h("x",e,t,r).size,"int32")];case"Rank":return[n.scalar(h("x",e,t,r).rank,"int32")];case"NoOp":return[n.scalar(1)];case"Print":let a=h("x",e,t,r),i=h("data",e,t,r),u=h("message",e,t,r),c=h("summarize",e,t,r);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,c));return[a];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Pa=class{constructor(t,r){this.keyDType=t,this.valueDType=r,this.handle=ct(0),this.tensorMap=new Map,Ie(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return ct(this.size(),"int32")}async import(t,r){this.checkKeyAndValueTensor(t,r);let n=await t.data();return this.tensorMap.forEach(o=>o.dispose()),this.tensorMap.clear(),pt(()=>{let o=Je(r),s=n.length,a=o.length;X.assert(s===a,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${a} elements.`);for(let i=0;i<s;i++){let u=n[i],c=o[i];Ie(c),this.tensorMap.set(u,c)}return this.handle})}async find(t,r){this.checkKeyAndValueTensor(t,r);let n=await t.data();return pt(()=>{let o=[];for(let s=0;s<n.length;s++){let a=n[s],i=this.findWithDefault(a,r);o.push(i)}return ve(o)})}findWithDefault(t,r){let n=this.tensorMap.get(t);return n!=null?n:r}checkKeyAndValueTensor(t,r){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(r.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${r.dtype}`)}};var Bh=async(e,t,r,n)=>{switch(e.op){case"HashTable":case"HashTableV2":{let o=n.getHashTableHandleByName(e.name);if(o!=null)return[o];{let s=h("keyDType",e,t,r),a=h("valueDType",e,t,r),i=new Pa(s,a);return n.addHashTable(e.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let o=h("tableHandle",e,t,r,n),s=h("keys",e,t,r),a=h("values",e,t,r);return[await n.getHashTableById(o.id).import(s,a)]}case"LookupTableFind":case"LookupTableFindV2":{let o=h("tableHandle",e,t,r,n),s=h("keys",e,t,r),a=h("defaultValue",e,t,r);return[await n.getHashTableById(o.id).find(s,a)]}case"LookupTableSize":case"LookupTableSizeV2":{let o=h("tableHandle",e,t,r,n);return[n.getHashTableById(o.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Gh=(e,t,r,n=Et)=>{switch(e.op){case"ResizeBilinear":{let o=h("images",e,t,r),s=h("size",e,t,r),a=h("alignCorners",e,t,r),i=h("halfPixelCenters",e,t,r);return[n.image.resizeBilinear(o,[s[0],s[1]],a,i)]}case"ResizeNearestNeighbor":{let o=h("images",e,t,r),s=h("size",e,t,r),a=h("alignCorners",e,t,r),i=h("halfPixelCenters",e,t,r);return[n.image.resizeNearestNeighbor(o,[s[0],s[1]],a,i)]}case"CropAndResize":{let o=h("image",e,t,r),s=h("boxes",e,t,r),a=h("boxInd",e,t,r),i=h("cropSize",e,t,r),u=h("method",e,t,r),c=h("extrapolationValue",e,t,r);return[n.image.cropAndResize(o,s,a,i,u,c)]}case"ImageProjectiveTransformV3":{let o=h("images",e,t,r),s=h("transforms",e,t,r),a=h("outputShape",e,t,r),i=h("fillValue",e,t,r),u=h("interpolation",e,t,r),c=h("fillMode",e,t,r);return[n.image.transform(o,s,u.toLowerCase(),c.toLowerCase(),i,a)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var zh=(e,t,r,n=Et)=>{switch(e.op){case"Equal":return[n.equal(h("a",e,t,r),h("b",e,t,r))];case"NotEqual":return[n.notEqual(h("a",e,t,r),h("b",e,t,r))];case"Greater":return[n.greater(h("a",e,t,r),h("b",e,t,r))];case"GreaterEqual":return[n.greaterEqual(h("a",e,t,r),h("b",e,t,r))];case"Less":return[n.less(h("a",e,t,r),h("b",e,t,r))];case"LessEqual":return[n.lessEqual(h("a",e,t,r),h("b",e,t,r))];case"LogicalAnd":return[n.logicalAnd(h("a",e,t,r),h("b",e,t,r))];case"LogicalNot":return[n.logicalNot(h("a",e,t,r))];case"LogicalOr":return[n.logicalOr(h("a",e,t,r),h("b",e,t,r))];case"Select":case"SelectV2":return[n.where(h("condition",e,t,r),h("a",e,t,r),h("b",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Vh=(e,t,r,n=Et)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[n.matMul(h("a",e,t,r),h("b",e,t,r),h("transposeA",e,t,r),h("transposeB",e,t,r))];case"Einsum":return[n.einsum(h("equation",e,t,r),...h("tensors",e,t,r))];case"Transpose":return[n.transpose(h("x",e,t,r),h("perm",e,t,r))];case"_FusedMatMul":let[o,s]=h("fusedOps",e,t,r),a=o==="biasadd",i=s==="prelu",u=h("numArgs",e,t,r),c=h("leakyreluAlpha",e,t,r);if(a){if(i&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[p,f]=h("args",e,t,r);return[n.fused.matMul({a:h("a",e,t,r),b:h("b",e,t,r),transposeA:h("transposeA",e,t,r),transposeB:h("transposeB",e,t,r),bias:p,activation:s,preluActivationWeights:f,leakyreluAlpha:c})];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Uh=(e,t,r,n=Et)=>{switch(e.op){case"EuclideanNorm":return[n.euclideanNorm(h("x",e,t,r),h("axis",e,t,r),h("keepDims",e,t,r))];case"FusedBatchNorm":case"FusedBatchNormV2":return[n.batchNorm(h("x",e,t,r),h("mean",e,t,r),h("variance",e,t,r),h("offset",e,t,r),h("scale",e,t,r),h("epsilon",e,t,r))];case"FusedBatchNormV3":return[n.batchNorm(h("x",e,t,r),h("mean",e,t,r),h("variance",e,t,r),h("offset",e,t,r),h("scale",e,t,r),h("epsilon",e,t,r))];case"LRN":return[n.localResponseNormalization(h("x",e,t,r),h("radius",e,t,r),h("bias",e,t,r),h("alpha",e,t,r),h("beta",e,t,r))];case"Softmax":return[n.softmax(h("x",e,t,r))];case"LogSoftmax":return[n.logSoftmax(h("x",e,t,r))];case"SparseToDense":return[n.sparseToDense(h("sparseIndices",e,t,r),h("outputShape",e,t,r),h("sparseValues",e,t,r),h("defaultValue",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var jh=(e,t,r,n=Et)=>{switch(e.op){case"RaggedGather":{let{outputNestedSplits:o,outputDenseValues:s}=n.raggedGather(h("paramsNestedSplits",e,t,r),h("paramsDenseValues",e,t,r),h("indices",e,t,r),h("outputRaggedRank",e,t,r));return o.concat(s)}case"RaggedRange":{let{rtNestedSplits:o,rtDenseValues:s}=n.raggedRange(h("starts",e,t,r),h("limits",e,t,r),h("splits",e,t,r));return[o,s]}case"RaggedTensorToTensor":return[n.raggedTensorToTensor(h("shape",e,t,r),h("values",e,t,r),h("defaultValue",e,t,r),h("rowPartitionTensors",e,t,r),h("rowPartitionTypes",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Wh=(e,t,r,n=Et)=>{switch(e.op){case"Max":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.max(h("x",e,t,r),i,u)]}case"Mean":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.mean(h("x",e,t,r),i,u)]}case"Min":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.min(h("x",e,t,r),i,u)]}case"Sum":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.sum(h("x",e,t,r),i,u)]}case"All":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.all(h("x",e,t,r),i,u)]}case"Any":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.any(h("x",e,t,r),i,u)]}case"ArgMax":{let i=h("axis",e,t,r);return[n.argMax(h("x",e,t,r),i)]}case"ArgMin":{let i=h("axis",e,t,r);return[n.argMin(h("x",e,t,r),i)]}case"Prod":{let i=h("axis",e,t,r),u=h("keepDims",e,t,r);return[n.prod(h("x",e,t,r),i,u)]}case"Cumprod":{let i=h("axis",e,t,r),u=h("exclusive",e,t,r),c=h("reverse",e,t,r);return[n.cumprod(h("x",e,t,r),i,u,c)]}case"Cumsum":{let i=h("axis",e,t,r),u=h("exclusive",e,t,r),c=h("reverse",e,t,r);return[n.cumsum(h("x",e,t,r),i,u,c)]}case"Bincount":let o=h("x",e,t,r),s=h("weights",e,t,r),a=h("size",e,t,r);return[n.bincount(o,s,a)];case"DenseBincount":{let i=h("x",e,t,r),u=h("weights",e,t,r),c=h("size",e,t,r),p=h("binaryOutput",e,t,r);return[n.denseBincount(i,u,c,p)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Hh=(e,t,r,n=Et)=>{switch(e.op){case"ConcatV2":case"Concat":{let o=h("n",e,t,r),s=h("axis",e,t,r),a=h("tensors",e,t,r);return a=a.slice(0,o),[n.concat(a,s)]}case"Gather":{let o=h("x",e,t,r),s=h("indices",e,t,r);return[n.gather(o,n.cast(s,"int32"),0)]}case"GatherV2":{let o=h("axis",e,t,r),s=h("batchDims",e,t,r),a=h("x",e,t,r),i=h("indices",e,t,r);return[n.gather(a,n.cast(i,"int32"),o,s)]}case"Reverse":{let o=h("dims",e,t,r),s=[];for(let i=0;i<o.length;i++)o[i]&&s.push(i);let a=h("x",e,t,r);return[n.reverse(a,s)]}case"ReverseV2":{let o=h("axis",e,t,r),s=h("x",e,t,r);return[n.reverse(s,o)]}case"Slice":{let o=h("begin",e,t,r),s=h("size",e,t,r);return[n.slice(h("x",e,t,r),o,s)]}case"StridedSlice":{let o=h("begin",e,t,r),s=h("end",e,t,r),a=h("strides",e,t,r),i=h("beginMask",e,t,r),u=h("endMask",e,t,r),c=h("ellipsisMask",e,t,r),p=h("newAxisMask",e,t,r),f=h("shrinkAxisMask",e,t,r),x=h("x",e,t,r);return[n.stridedSlice(x,o,s,a,i,u,c,p,f)]}case"Pack":return pt(()=>{let o=h("axis",e,t,r),s=h("tensors",e,t,r),a=s[0].shape,i=n.squeeze(s[0]).shape,u=s.map(c=>{let p=X.arraysEqual(c.shape,a);if(!p&&!X.arraysEqual(n.squeeze(c).shape,i))throw new Error("the input tensors shape does not match");return p?c:n.reshape(c,a)});return[n.stack(u,o)]});case"Unpack":{let o=h("axis",e,t,r),s=h("tensor",e,t,r);return n.unstack(s,o)}case"Tile":{let o=h("reps",e,t,r);return[n.tile(h("x",e,t,r),o)]}case"Split":case"SplitV":{let o=h("axis",e,t,r),s=h("numOrSizeSplits",e,t,r),a=h("x",e,t,r);return n.split(a,s,o)}case"ScatterNd":{let o=h("indices",e,t,r),s=h("values",e,t,r),a=h("shape",e,t,r);return[n.scatterND(o,s,a)]}case"GatherNd":{let o=h("x",e,t,r),s=h("indices",e,t,r);return[n.gatherND(o,s)]}case"SparseToDense":{let o=h("sparseIndices",e,t,r),s=h("outputShape",e,t,r),a=h("sparseValues",e,t,r),i=h("defaultValue",e,t,r);return[n.sparseToDense(o,a,s,a.dtype===i.dtype?i:n.cast(i,a.dtype))]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Kh=(e,t,r,n=Et)=>{switch(e.op){case"SparseFillEmptyRows":{let{outputIndices:o,outputValues:s,emptyRowIndicator:a,reverseIndexMap:i}=n.sparse.sparseFillEmptyRows(h("indices",e,t,r),h("values",e,t,r),h("denseShape",e,t,r),h("defaultValue",e,t,r));return[o,s,a,i]}case"SparseReshape":{let{outputIndices:o,outputShape:s}=n.sparse.sparseReshape(h("inputIndices",e,t,r),h("inputShape",e,t,r),h("newShape",e,t,r));return[o,s]}case"SparseSegmentMean":return[n.sparse.sparseSegmentMean(h("data",e,t,r),h("indices",e,t,r),h("segmentIds",e,t,r))];case"SparseSegmentSum":return[n.sparse.sparseSegmentSum(h("data",e,t,r),h("indices",e,t,r),h("segmentIds",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var qh=(e,t,r,n=Et)=>{switch(e.op){case"FFT":return[n.fft(h("x",e,t,r))];case"IFFT":return[n.ifft(h("x",e,t,r))];case"RFFT":return[n.rfft(h("x",e,t,r))];case"IRFFT":return[n.irfft(h("x",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Xh=(e,t,r,n=Et)=>{switch(e.op){case"StringNGrams":{let{nGrams:o,nGramsSplits:s}=n.string.stringNGrams(h("data",e,t,r),h("dataSplits",e,t,r),h("separator",e,t,r),h("nGramWidths",e,t,r),h("leftPad",e,t,r),h("rightPad",e,t,r),h("padWidth",e,t,r),h("preserveShortSequences",e,t,r));return[o,s]}case"StringSplit":{let{indices:o,values:s,shape:a}=n.string.stringSplit(h("input",e,t,r),h("delimiter",e,t,r),h("skipEmpty",e,t,r));return[o,s,a]}case"StringToHashBucketFast":return[n.string.stringToHashBucketFast(h("input",e,t,r),h("numBuckets",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};var Yh=(e,t,r,n=Et)=>{switch(e.op){case"Cast":return[n.cast(h("x",e,t,r),h("dtype",e,t,r))];case"ExpandDims":{let o=h("axis",e,t,r);return[n.expandDims(h("x",e,t,r),o)]}case"Squeeze":{let o=h("axis",e,t,r);return[n.squeeze(h("x",e,t,r),o)]}case"Reshape":return[n.reshape(h("x",e,t,r),h("shape",e,t,r))];case"MirrorPad":return[n.mirrorPad(h("x",e,t,r),h("padding",e,t,r),h("mode",e,t,r))];case"PadV2":case"Pad":return[n.pad(h("x",e,t,r),h("padding",e,t,r),h("constantValue",e,t,r))];case"SpaceToBatchND":{let o=h("blockShape",e,t,r),s=h("paddings",e,t,r);return[n.spaceToBatchND(h("x",e,t,r),o,s)]}case"BatchToSpaceND":{let o=h("blockShape",e,t,r),s=h("crops",e,t,r);return[n.batchToSpaceND(h("x",e,t,r),o,s)]}case"DepthToSpace":{let o=h("blockSize",e,t,r),s=h("dataFormat",e,t,r).toUpperCase();return[n.depthToSpace(h("x",e,t,r),o,s)]}case"BroadcastTo":return[n.broadcastTo(h("x",e,t,r),h("shape",e,t,r))];case"BroadcastArgs":return[n.broadcastArgs(h("s0",e,t,r),h("s1",e,t,r))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function Sc(e,t,r,n,o=pt){let s=((a,i,u)=>{switch(a.category){case"arithmetic":return o(()=>Sh(a,i,u));case"basic_math":return o(()=>kh(a,i,u));case"control":return Dh(a,i,u);case"convolution":return o(()=>Ch(a,i,u));case"creation":return o(()=>Rh(a,i,u));case"dynamic":return Lh(a,i,u);case"evaluation":return o(()=>Ph(a,i,u));case"image":return o(()=>Gh(a,i,u));case"graph":return o(()=>Mh(a,i,u));case"logical":return o(()=>zh(a,i,u));case"matrices":return o(()=>Vh(a,i,u));case"normalization":return o(()=>Uh(a,i,u));case"ragged":return o(()=>jh(a,i,u));case"reduction":return o(()=>Wh(a,i,u));case"slice_join":return o(()=>Hh(a,i,u));case"sparse":return o(()=>Kh(a,i,u));case"spectral":return o(()=>qh(a,i,u));case"string":return o(()=>Xh(a,i,u));case"transformation":return o(()=>Yh(a,i,u));case"hash_table":return Bh(a,i,u,n);case"custom":let c=Ta(a.op);if(c&&c.customExecutor)return c.customExecutor(new Ca(a,i,u));throw TypeError(`Custom op ${a.op} is not registered.`);default:throw TypeError(`Unknown op '${a.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,r);return X.isPromise(s)?s.then(a=>[].concat(a)):[].concat(s)}var _s=class{constructor(t={},r={},n={},o={}){this.weightMap=t,this.tensorArrayMap=r,this.tensorListMap=n,this.functionMap=o,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,r){return{id:t,frameName:r,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let t=[];for(let r=0;r<this.contexts.length-1;r++){let n=this.contexts.slice(0,this.contexts.length-r);t.push(this.contextIdforContexts(n))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(r=>r.id===0&&r.iterationId===0?"":`${r.frameName}-${r.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(let r in this.tensorArrayMap)this.tensorArrayMap[r].clearAndClose(t);for(let r in this.tensorListMap)this.tensorListMap[r].clearAndClose(t)}};function kc(e,t,r,n){let o=new Set,s=[],a=null,i=null,u=new Set,c=Object.keys(e).map(x=>we(x)[0]),p=[];n!=null&&(p=n.map(x=>we(x.name)[0]));let f=[...t];for(;f.length>0;){let x=f.pop();if((Ic(x)||q7(x)||X7(x))&&a==null&&(a=x,i=a.children.map(T=>T.name).filter(T=>o.has(T))),o.add(x.name),r[x.name]==null&&c.indexOf(x.name)===-1&&p.indexOf(x.name)===-1){if(x.inputs.length===0){s.push(x.name);continue}x.inputs.forEach(T=>{u.has(T.name)||(u.add(T.name),f.push(T))})}}return{inputs:e,outputs:t,usedNodes:o,missingInputs:s,dynamicNode:a,syncInputs:i}}function Jh(e,t,r){let{usedNodes:n,inputs:o}=r,s=[],a=Object.keys(o).map(p=>we(p)[0]).map(p=>e.nodes[p]),i=e.initNodes;a.forEach(p=>{n.has(p.name)&&s.push(p)}),e.weights.forEach(p=>{n.has(p.name)&&s.push(p)}),i!=null&&i.forEach(p=>{n.has(p.name)&&s.push(p)});let u=new Set,c=[];for(;s.length>0;){let p=s.pop();u.add(p.name),t[p.name]||c.push(p),p.children.forEach(f=>{!u.has(f.name)&&n.has(f.name)&&f.inputs.every(x=>u.has(x.name))&&s.push(f)})}return c}var W7=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],H7=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],K7=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function Ic(e){return W7.indexOf(e.op)>=0}function q7(e){return H7.indexOf(e.op)>=0}function X7(e){return K7.indexOf(e.op)>=0}var to=class{constructor(t,r){this.graph=t,this.parent=r,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(n=>{this._functionExecutorMap[n]=new to(t.functions[n],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){let r=Object.keys(t).map(n=>t[n].map(o=>o.id));this._weightIds=[].concat(...r),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{let r=t.signatureKey||t.name;return t.defaultOutput?`${r}:${t.defaultOutput}`:r})}get functions(){return Object.keys(this._functions).reduce((t,r)=>(t[r]=this._functions[r].signature,t),{})}getCompilationKey(t,r){let n=t.map(s=>s.name).sort(),o=r.map(s=>s.name).sort();return n.join(this.SEPERATOR)+"--"+o.join(this.SEPERATOR)}compile(t,r){let n=kc(t,r,this.weightMap,this._initNodes),{missingInputs:o,dynamicNode:s,syncInputs:a}=n;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(o.length>0){let i=r.map(c=>c.name),u=Object.keys(t);throw new Error(`Cannot compute the outputs [${i}] from the provided inputs [${u}]. Missing the following inputs: [${o}]`)}return Jh(this.graph,this.weightMap,n)}cloneAndKeepTensor(t){if(t==null)return null;let r=t.clone();return Ie(r),r}cloneTensorList(t){return t?t.map(n=>this.cloneAndKeepTensor(n)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([r,n])=>[r,this.cloneTensorList(n)]))}execute(t,r){this.disposeIntermediateTensors(),t=this.mapInputs(t);let n=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),r=this.mapOutputs(r),this.checkOutputs(r);let o=n.map(f=>this.graph.nodes[we(f)[0]]),s=r.map(f=>we(f)[0]),a=s.map(f=>this.graph.nodes[f]);a.length===0&&(a=this._outputs);let i=this.getCompilationKey(o,a),u=this.compiledMap.get(i);u==null&&(u=this.compile(t,a),this.compiledMap.set(i,u));try{this.keepIntermediateTensors=lt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(f){this.keepIntermediateTensors=!1,console.warn(f.message)}let c={},p={};return pt(()=>{let f=new _s(this.weightMap,c,p,this.functionExecutorMap),x=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(O=>{let[D,C]=we(O),K=[];K[C]=t[O],x[D]=K,this.keepIntermediateTensors&&(this.clonedTensorsMap[D]=this.cloneTensorList(K))});let T=this.getFrozenTensorIds(x),k={};for(let O=0;O<u.length;O++){let D=u[O];if(!x[D.name]){let C=Sc(D,x,f,this._resourceManager);if(X.isPromise(C))throw new Error(`The execution of the op '${D.op}' returned a promise. Please use model.executeAsync() instead.`);x[D.name]=C,this.keepIntermediateTensors&&(this.clonedTensorsMap[D.name]=this.cloneTensorList(C)),this.checkTensorForDisposal(D.name,D,x,f,T,s,k)}}return this.parent==null&&f.dispose(T),r.map(O=>ne(O,x,f))})}getFrozenTensorIds(t){let r=[].concat.apply([],Object.keys(t).map(n=>t[n]).map(n=>n.map(o=>o.id)));return new Set(r)}checkTensorForDisposal(t,r,n,o,s,a,i){r.category==="control"||a.indexOf(t)!==-1||(n[t].forEach(u=>{u!=null&&(i[u.id]=(i[u.id]||0)+r.children.length)}),r.inputs.forEach(u=>{if(u.category!=="control"){let c=wh(u.name,n,o);c!=null&&c.forEach(p=>{if(p&&!p.kept&&!s.has(p.id)){let f=i[p.id];f===1?(p.dispose(),delete i[p.id]):f!=null&&i[p.id]--}})}}))}async executeAsync(t,r){return this._executeAsync(t,r)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(let r of t)r&&!r.isDisposed&&r.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,r,n=!1,o={},s={}){this.disposeIntermediateTensors(),n||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),r=this.mapOutputs(r),this.checkOutputs(r));try{this.keepIntermediateTensors=lt().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(x){this.keepIntermediateTensors=!1,console.warn(x.message)}let a=new _s(this.weightMap,o,s,this.functionExecutorMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let i=await this.executeWithControlFlow(t,a,r,n),u=r.map(x=>ne(x,i,a)),c=u.map(x=>x.id),p=Object.keys(t).map(x=>t[x].id),f=new Set([...c,...p,...this.weightIds]);return Object.values(i).forEach(x=>{x.forEach(T=>{T&&!T.isDisposed&&!f.has(T.id)&&T.dispose()})}),this.parent==null&&a.dispose(f),u}async executeFunctionAsync(t,r,n){let o=t.reduce((s,a,i)=>(s[this.inputs[i].name]=a,s),{});return this._executeAsync(o,this.outputNodes,!0,r,n)}async executeWithControlFlow(t,r,n,o){let s=Object.keys(t),a=s.map(P=>this.graph.nodes[we(P)[0]]),i=n.map(P=>we(P)[0]),u=i.map(P=>this.graph.nodes[P]);u.length===0&&(u=this._outputs);let{usedNodes:c,missingInputs:p,dynamicNode:f,syncInputs:x}=kc(t,u,this.weightMap,this._initNodes),T=[...a,...this.graph.weights,...this._initNodes||[]].map(P=>({node:P,contexts:r.currentContext})),k=Object.assign({},this.weightMap);Object.keys(t).forEach(P=>{let[G,q]=we(P),z=[];z[q]=t[P],k[G]=z});let O={},D=this.getFrozenTensorIds(k),C={};for(;T.length>0;){let P=this.processStack(a,T,r,k,C,D,i,O,c);await Promise.all(P)}f==null&&!o&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let K=u.filter(P=>!Ic(P)&&!ne(P.name,k,r)).map(P=>P.name);if(K.length>0){let P="";throw f!=null&&(P=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${x}]`),new Error(`Cannot compute the outputs [${K}] from the provided inputs [${s}]. Consider providing the following inputs: [${p}]. ${P}`)}return k}processStack(t,r,n,o,s,a,i,u,c){let p=[];for(;r.length>0;){let f=r.pop();n.currentContext=f.contexts;let x="";if(f.node.op==="Enter"&&h("isConstant",f.node,o,n)&&([x]=br(f.node.name,n)),o[f.node.name]==null){let T=Sc(f.node,o,n,this._resourceManager);x||([x]=br(f.node.name,n));let k=n.currentContext;X.isPromise(T)?p.push(T.then(O=>(o[x]=O,this.keepIntermediateTensors&&(this.clonedTensorsMap[x]=this.cloneTensorList(O)),n.currentContext=k,this.checkTensorForDisposal(x,f.node,o,n,a,i,u),this.processChildNodes(f.node,r,n,o,s,c),O))):(o[x]=T,this.keepIntermediateTensors&&(this.clonedTensorsMap[x]=this.cloneTensorList(T)),this.checkTensorForDisposal(x,f.node,o,n,a,i,u),this.processChildNodes(f.node,r,n,o,s,c))}else this.processChildNodes(f.node,r,n,o,s,c)}return p}processChildNodes(t,r,n,o,s,a){t.children.forEach(i=>{let[u]=br(i.name,n);s[u]||!a.has(i.name)||(i.op==="Merge"?i.inputNames.some(c=>!!ne(c,o,n))&&(s[u]=!0,r.push({contexts:n.currentContext,node:i})):i.inputNames.every(c=>!!ne(c,o,n))&&(s[u]=!0,r.push({contexts:n.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(r=>r.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(r=>{let n=t[r],[o]=we(r),s=this.graph.nodes[o];if(s.attrParams.shape&&s.attrParams.shape.value){let a=s.attrParams.shape.value,i=a.length===n.shape.length&&n.shape.every((u,c)=>a[c]===-1||a[c]===u);X.assert(i,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${a}], but was [${n.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&X.assert(n.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(t){var r,n;let o={};for(let s in t){let a=(n=(r=this._signature)===null||r===void 0?void 0:r.inputs)===null||n===void 0?void 0:n[s];a!=null?o[a.name]=t[s]:o[s]=t[s]}return o}checkInputs(t){let r=Object.keys(t).filter(n=>{let[o]=we(n);return this.graph.nodes[o]==null});if(r.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${r}] that are not part of graph`)}mapOutputs(t){return t.map(r=>{var n,o;let s=(o=(n=this._signature)===null||n===void 0?void 0:n.outputs)===null||o===void 0?void 0:o[r];return s!=null?s.name:r},{})}checkOutputs(t){t.forEach(r=>{let[n]=we(r);if(!this.graph.nodes[n])throw new Error(`The output '${r}' is not found in the graph`)})}};var Ma=class{constructor(t={},r={}){this.hashTableNameToHandle=t,this.hashTableMap=r}addHashTable(t,r){this.hashTableNameToHandle[t]=r.handle,this.hashTableMap[r.id]=r}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(let t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(let t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}};var Y7="?tfjs-format=file",J7="model.json",Ba=class{constructor(t,r={},n=Ss){this.modelUrl=t,this.loadOptions=r,this.version="n/a",this.io=n,r==null&&(this.loadOptions={}),this.resourceManager=new Ma}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){let t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{let r=this.io.getLoadHandlers(t,this.loadOptions);if(r.length===0)r.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(r.length>1)throw new Error(`Found more than one (${r.length}) load handlers for URL '${[t]}'`);this.handler=r[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let t=this.handler.load();return X.isPromise(t)?t.then(r=>this.loadSync(r)):this.loadSync(t)}loadSync(t){this.artifacts=t;let r=this.artifacts.modelTopology,n=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let s=this.artifacts.userDefinedMetadata;s.signature!=null&&(n=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}this.signature=n,this.version=`${r.versions.producer}.${r.versions.minConsumer}`;let o=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new to(Is.Instance.transformGraph(r,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(o),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){let s=Is.Instance.transformGraph(t.modelInitializer);this.initializer=new to(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,r){if(typeof t=="string"){let n=this.io.getSaveHandlers(t);if(n.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(n.length>1)throw new Error(`Found more than one (${n.length}) save handlers for URL '${t}'`);t=n[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){let r=t instanceof St?[t]:t,n={};return r.forEach((o,s)=>n[this.structuredOutputKeys[s]]=o),n}return t}predict(t,r){let n=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(n)}async predictAsync(t,r){let n=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(n)}normalizeInputs(t){var r;if(!(t instanceof St)&&!Array.isArray(t)){let s=(r=this.signature)===null||r===void 0?void 0:r.inputs;if(s!=null)for(let a in s){let i=s[a];i.resourceId!=null&&(t[a]=this.resourceIdToCapturedInput[i.resourceId])}return t}t=Array.isArray(t)?t:[t];let n=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+n!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${t.length} input tensors provided.`);let o=0;return this.inputNodes.reduce((s,a)=>{var i,u,c;let p=(c=(u=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||u===void 0?void 0:u[a])===null||c===void 0?void 0:c.resourceId;return p!=null?s[a]=this.resourceIdToCapturedInput[p]:s[a]=t[o++],s},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){let r=this.initializerSignature.outputs,n=Object.keys(r);for(let o=0;o<n.length;o++){let s=n[o],a=r[s];this.resourceIdToCapturedInput[a.resourceId]=t[o]}}}execute(t,r){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),r=this.normalizeOutputs(r);let n=this.executor.execute(t,r);return n.length>1?n:n[0]}async executeAsync(t,r){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),r=this.normalizeOutputs(r);let n=await this.executor.executeAsync(t,r);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((r,n)=>(r[n]=[t[n]],r),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&At(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}};async function As(e,t={},r=Ss){if(e==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof e=="string"&&(e=Z7(e));let n=new Ba(e,t,r);return await n.load(),n}function Z7(e){return e.endsWith("/")||(e=e+"/"),`${e}${J7}${Y7}`}var vr=function(){return vr=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},vr.apply(this,arguments)};function Jr(e,t,r,n){return new(r||(r=Promise))(function(o,s){function a(c){try{u(n.next(c))}catch(p){s(p)}}function i(c){try{u(n.throw(c))}catch(p){s(p)}}function u(c){var p;c.done?o(c.value):(p=c.value,p instanceof r?p:new r(function(f){f(p)})).then(a,i)}u((n=n.apply(e,t||[])).next())})}function Zr(e,t){var r,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(u){return function(c){return function(p){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&p[0]?n.return:p[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,p[1])).done)return o;switch(n=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return a.label++,{value:p[1],done:!1};case 5:a.label++,n=p[1],p=[0];continue;case 7:p=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!((o=o.length>0&&o[o.length-1])||p[0]!==6&&p[0]!==2)){a=0;continue}if(p[0]===3&&(!o||p[1]>o[0]&&p[1]<o[3])){a.label=p[1];break}if(p[0]===6&&a.label<o[1]){a.label=o[1],o=p;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(p);break}o[2]&&a.ops.pop(),a.trys.pop();continue}p=t.call(e,a)}catch(f){p=[6,f],n=0}finally{r=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([u,c])}}}function Nn(e){var t=e.map(function(r){return r[0]});return t.push(e[e.length-1][1]),t}var p4={lips:Nn([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:Nn([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:Nn([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:Nn([[474,475],[475,476],[476,477],[477,474]]),rightEye:Nn([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:Nn([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:Nn([[469,470],[470,471],[471,472],[472,469]]),faceOval:Nn([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},t8=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],e8=Object.entries(p4).map(function(e){var t=e[0];return e[1].map(function(r){return[r,t]})}).flat(),m4=new Map(e8);function Pc(e){for(var t={locationData:{relativeKeypoints:[]}},r=Number.MAX_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,a=0;a<e.length;++a){var i=e[a];r=Math.min(r,i.x),n=Math.max(n,i.x),o=Math.min(o,i.y),s=Math.max(s,i.y),t.locationData.relativeKeypoints.push({x:i.x,y:i.y})}return t.locationData.relativeBoundingBox={xMin:r,yMin:o,xMax:n,yMax:s,width:n-r,height:s-o},t}var _c={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},r8=function(){function e(t){var r=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new l4.FaceMesh({locateFile:function(n,o){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+n:o+"/"+n}}),this.faceMeshSolution.setOptions({refineLandmarks:t.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:t.maxFaces}),this.faceMeshSolution.onResults(function(n){if(r.height=n.image.height,r.width=n.image.width,r.faces=[],n.multiFaceLandmarks!==null)for(var o=n.multiFaceLandmarks,s=0;s<o.length;s++){var a=r.translateOutput(o[s]);r.faces.push({keypoints:a,box:Pc(a).locationData.relativeBoundingBox})}})}return e.prototype.translateOutput=function(t){var r=this;return t.map(function(n,o){var s={x:n.x*r.width,y:n.y*r.height,z:n.z*r.width},a=m4.get(o);return a!=null&&(s.name=a),s})},e.prototype.estimateFaces=function(t,r){return Jr(this,void 0,void 0,function(){var n,o;return Zr(this,function(s){switch(s.label){case 0:return r&&r.flipHorizontal&&r.flipHorizontal!==this.selfieMode&&(this.selfieMode=r.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),t instanceof St?(o=ImageData.bind,[4,Tn.toPixels(t)]):[3,2];case 1:return n=new(o.apply(ImageData,[void 0,s.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:n=t,s.label=3;case 3:return t=n,[4,this.faceMeshSolution.send({image:t})];case 4:return s.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceMeshSolution.close()},e.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceMeshSolution.initialize()},e}();function n8(e){return Jr(this,void 0,void 0,function(){var t,r;return Zr(this,function(n){switch(n.label){case 0:return t=function(o){if(o==null)return vr({},_c);var s=vr({},o);return s.runtime="mediapipe",s.maxFaces==null&&(s.maxFaces=_c.maxFaces),s.refineLandmarks==null&&(s.refineLandmarks=_c.refineLandmarks),s}(e),[4,(r=new r8(t)).initialize()];case 1:return n.sent(),[2,r]}})})}var Ac=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o8={};(function(){var e;function t(l){var y=0;return function(){return y<l.length?{done:!1,value:l[y++]}:{done:!0}}}var r=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,y,w){return l==Array.prototype||l==Object.prototype||(l[y]=w.value),l},n=function(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ac=="object"&&Ac];for(var y=0;y<l.length;++y){var w=l[y];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}(this);function o(l,y){if(y)t:{var w=n;l=l.split(".");for(var E=0;E<l.length-1;E++){var _=l[E];if(!(_ in w))break t;w=w[_]}(y=y(E=w[l=l[l.length-1]]))!=E&&y!=null&&r(w,l,{configurable:!0,writable:!0,value:y})}}function s(l){return(l={next:l})[Symbol.iterator]=function(){return this},l}function a(l){var y=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return y?y.call(l):{next:t(l)}}function i(l){if(!(l instanceof Array)){l=a(l);for(var y,w=[];!(y=l.next()).done;)w.push(y.value);l=w}return l}o("Symbol",function(l){function y(_,I){this.g=_,r(this,"description",{configurable:!0,writable:!0,value:I})}if(l)return l;y.prototype.toString=function(){return this.g};var w="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",E=0;return function _(I){if(this instanceof _)throw new TypeError("Symbol is not a constructor");return new y(w+(I||"")+"_"+E++,I)}}),o("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var y="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),w=0;w<y.length;w++){var E=n[y[w]];typeof E=="function"&&typeof E.prototype[l]!="function"&&r(E.prototype,l,{configurable:!0,writable:!0,value:function(){return s(t(this))}})}return l});var u,c=typeof Object.create=="function"?Object.create:function(l){function y(){}return y.prototype=l,new y};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var p;t:{var f={};try{f.__proto__={a:!0},p=f.a;break t}catch(l){}p=!1}u=p?function(l,y){if(l.__proto__=y,l.__proto__!==y)throw new TypeError(l+" is not extensible");return l}:null}var x=u;function T(l,y){if(l.prototype=c(y.prototype),l.prototype.constructor=l,x)x(l,y);else for(var w in y)if(w!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(y,w);E&&Object.defineProperty(l,w,E)}else l[w]=y[w];l.na=y.prototype}function k(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function O(l){if(l.l)throw new TypeError("Generator is already running");l.l=!0}function D(l,y){l.j={da:y,ea:!0},l.g=l.o||l.u}function C(l,y,w){return l.g=w,{value:y}}function K(l){this.g=new k,this.h=l}function P(l,y,w,E){try{var _=y.call(l.g.i,w);if(!(_ instanceof Object))throw new TypeError("Iterator result "+_+" is not an object");if(!_.done)return l.g.l=!1,_;var I=_.value}catch($){return l.g.i=null,D(l.g,$),G(l)}return l.g.i=null,E.call(l.g,I),G(l)}function G(l){for(;l.g.g;)try{var y=l.h(l.g);if(y)return l.g.l=!1,{value:y.value,done:!1}}catch(w){l.g.h=void 0,D(l.g,w)}if(l.g.l=!1,l.g.j){if(y=l.g.j,l.g.j=null,y.ea)throw y.da;return{value:y.return,done:!0}}return{value:void 0,done:!0}}function q(l){this.next=function(y){return O(l.g),l.g.i?y=P(l,l.g.i.next,y,l.g.s):(l.g.s(y),y=G(l)),y},this.throw=function(y){return O(l.g),l.g.i?y=P(l,l.g.i.throw,y,l.g.s):(D(l.g,y),y=G(l)),y},this.return=function(y){return function(w,E){O(w.g);var _=w.g.i;return _?P(w,"return"in _?_.return:function(I){return{value:I,done:!0}},E,w.g.return):(w.g.return(E),G(w))}(l,y)},this[Symbol.iterator]=function(){return this}}function z(l){return function(y){function w(_){return y.next(_)}function E(_){return y.throw(_)}return new Promise(function(_,I){(function $(F){F.done?_(F.value):Promise.resolve(F.value).then(w,E).then($,I)})(y.next())})}(new q(new K(l)))}k.prototype.s=function(l){this.h=l},k.prototype.return=function(l){this.j={return:l},this.g=this.u},o("Promise",function(l){function y($){this.h=0,this.i=void 0,this.g=[],this.s=!1;var F=this.j();try{$(F.resolve,F.reject)}catch(B){F.reject(B)}}function w(){this.g=null}function E($){return $ instanceof y?$:new y(function(F){F($)})}if(l)return l;w.prototype.h=function($){if(this.g==null){this.g=[];var F=this;this.i(function(){F.l()})}this.g.push($)};var _=n.setTimeout;w.prototype.i=function($){_($,0)},w.prototype.l=function(){for(;this.g&&this.g.length;){var $=this.g;this.g=[];for(var F=0;F<$.length;++F){var B=$[F];$[F]=null;try{B()}catch(U){this.j(U)}}}this.g=null},w.prototype.j=function($){this.i(function(){throw $})},y.prototype.j=function(){function $(U){return function(H){B||(B=!0,U.call(F,H))}}var F=this,B=!1;return{resolve:$(this.D),reject:$(this.l)}},y.prototype.D=function($){if($===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if($ instanceof y)this.H($);else{t:switch(typeof $){case"object":var F=$!=null;break t;case"function":F=!0;break t;default:F=!1}F?this.A($):this.o($)}},y.prototype.A=function($){var F=void 0;try{F=$.then}catch(B){return void this.l(B)}typeof F=="function"?this.I(F,$):this.o($)},y.prototype.l=function($){this.u(2,$)},y.prototype.o=function($){this.u(1,$)},y.prototype.u=function($,F){if(this.h!=0)throw Error("Cannot settle("+$+", "+F+"): Promise already settled in state"+this.h);this.h=$,this.i=F,this.h===2&&this.G(),this.B()},y.prototype.G=function(){var $=this;_(function(){if($.C()){var F=n.console;F!==void 0&&F.error($.i)}},1)},y.prototype.C=function(){if(this.s)return!1;var $=n.CustomEvent,F=n.Event,B=n.dispatchEvent;return B===void 0||(typeof $=="function"?$=new $("unhandledrejection",{cancelable:!0}):typeof F=="function"?$=new F("unhandledrejection",{cancelable:!0}):($=n.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,$),$.promise=this,$.reason=this.i,B($))},y.prototype.B=function(){if(this.g!=null){for(var $=0;$<this.g.length;++$)I.h(this.g[$]);this.g=null}};var I=new w;return y.prototype.H=function($){var F=this.j();$.M(F.resolve,F.reject)},y.prototype.I=function($,F){var B=this.j();try{$.call(F,B.resolve,B.reject)}catch(U){B.reject(U)}},y.prototype.then=function($,F){function B(Q,nt){return typeof Q=="function"?function(gt){try{U(Q(gt))}catch(vt){H(vt)}}:nt}var U,H,Z=new y(function(Q,nt){U=Q,H=nt});return this.M(B($,U),B(F,H)),Z},y.prototype.catch=function($){return this.then(void 0,$)},y.prototype.M=function($,F){function B(){switch(U.h){case 1:$(U.i);break;case 2:F(U.i);break;default:throw Error("Unexpected state: "+U.h)}}var U=this;this.g==null?I.h(B):this.g.push(B),this.s=!0},y.resolve=E,y.reject=function($){return new y(function(F,B){B($)})},y.race=function($){return new y(function(F,B){for(var U=a($),H=U.next();!H.done;H=U.next())E(H.value).M(F,B)})},y.all=function($){var F=a($),B=F.next();return B.done?E([]):new y(function(U,H){function Z(gt){return function(vt){Q[gt]=vt,--nt==0&&U(Q)}}var Q=[],nt=0;do Q.push(void 0),nt++,E(B.value).M(Z(Q.length-1),H),B=F.next();while(!B.done)})},y});var rt=typeof Object.assign=="function"?Object.assign:function(l,y){for(var w=1;w<arguments.length;w++){var E=arguments[w];if(E)for(var _ in E)Object.prototype.hasOwnProperty.call(E,_)&&(l[_]=E[_])}return l};o("Object.assign",function(l){return l||rt}),o("Object.is",function(l){return l||function(y,w){return y===w?y!==0||1/y==1/w:y!=y&&w!=w}}),o("Array.prototype.includes",function(l){return l||function(y,w){var E=this;E instanceof String&&(E=String(E));var _=E.length;for(0>(w=w||0)&&(w=Math.max(w+_,0));w<_;w++){var I=E[w];if(I===y||Object.is(I,y))return!0}return!1}}),o("String.prototype.includes",function(l){return l||function(y,w){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(y instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(y,w||0)!==-1}}),o("Array.prototype.keys",function(l){return l||function(){return function(y,w){y instanceof String&&(y+="");var E=0,_=!1,I={next:function(){if(!_&&E<y.length){var $=E++;return{value:w($,y[$]),done:!1}}return _=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}(this,function(y){return y})}});var it=this||self;function Y(l,y){l=l.split(".");var w,E=it;for((l[0]in E)||E.execScript===void 0||E.execScript("var "+l[0]);l.length&&(w=l.shift());)l.length||y===void 0?E=E[w]&&E[w]!==Object.prototype[w]?E[w]:E[w]={}:E[w]=y}function ot(){throw Error("Invalid UTF8")}function xt(l,y){return y=String.fromCharCode.apply(null,y),l==null?y:l+y}var $t,ht,Yt=typeof TextDecoder<"u",te=typeof TextEncoder<"u",pr={},ce=null;function mr(l){var y;y===void 0&&(y=0),Sn(),y=pr[y];for(var w=Array(Math.floor(l.length/3)),E=y[64]||"",_=0,I=0;_<l.length-2;_+=3){var $=l[_],F=l[_+1],B=l[_+2],U=y[$>>2];$=y[(3&$)<<4|F>>4],F=y[(15&F)<<2|B>>6],B=y[63&B],w[I++]=U+$+F+B}switch(U=0,B=E,l.length-_){case 2:B=y[(15&(U=l[_+1]))<<2]||E;case 1:l=l[_],w[I]=y[l>>2]+y[(3&l)<<4|U>>4]+B+E}return w.join("")}function Qe(l){var y=l.length,w=3*y/4;w%3?w=Math.floor(w):"=.".indexOf(l[y-1])!=-1&&(w="=.".indexOf(l[y-2])!=-1?w-2:w-1);var E=new Uint8Array(w),_=0;return function(I,$){function F(nt){for(;B<I.length;){var gt=I.charAt(B++),vt=ce[gt];if(vt!=null)return vt;if(!/^[\s\xa0]*$/.test(gt))throw Error("Unknown base64 encoding at char: "+gt)}return nt}Sn();for(var B=0;;){var U=F(-1),H=F(0),Z=F(64),Q=F(64);if(Q===64&&U===-1)break;$(U<<2|H>>4),Z!=64&&($(H<<4&240|Z>>2),Q!=64&&$(Z<<6&192|Q))}}(l,function(I){E[_++]=I}),_!==w?E.subarray(0,_):E}function Sn(){if(!ce){ce={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),y=["+/=","+/","-_=","-_.","-_"],w=0;5>w;w++){var E=l.concat(y[w].split(""));pr[w]=E;for(var _=0;_<E.length;_++){var I=E[_];ce[I]===void 0&&(ce[I]=_)}}}}var Tr,Ds=typeof Uint8Array=="function";function Uo(l){return Ds&&l!=null&&l instanceof Uint8Array}function Fs(l){if(this.L=l,l!==null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}var Cs=typeof Uint8Array.prototype.slice=="function",Nr=0;function jo(l,y){return Error("Invalid wire type: "+l+" (at position "+y+")")}function oo(){return Error("Failed to read varint, encoding is invalid.")}function tr(l,y){y=(y=y===void 0?{}:y).v!==void 0&&y.v,this.h=null,this.g=this.i=this.j=0,this.v=y,l&&er(this,l)}function er(l,y){l.h=function(w,E){if(w.constructor===Uint8Array)return w;if(w.constructor===ArrayBuffer)return new Uint8Array(w);if(w.constructor===Array)return new Uint8Array(w);if(w.constructor===String)return Qe(w);if(w.constructor===Fs)return!E&&(E=w.L)&&E.constructor===Uint8Array?E:(E=(E=w.L)==null||Uo(E)?E:typeof E=="string"?Qe(E):null,(w=w.L=E)?new Uint8Array(w):Tr||(Tr=new Uint8Array(0)));if(w instanceof Uint8Array)return new Uint8Array(w.buffer,w.byteOffset,w.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(y,l.v),l.j=0,l.i=l.h.length,l.g=l.j}function Jt(l){if(l.g>l.i)throw Error("Tried to read past the end of the data "+l.g+" > "+l.i)}function en(l){var y=l.h,w=y[l.g],E=127&w;if(128>w)return l.g+=1,Jt(l),E;if(E|=(127&(w=y[l.g+1]))<<7,128>w)return l.g+=2,Jt(l),E;if(E|=(127&(w=y[l.g+2]))<<14,128>w)return l.g+=3,Jt(l),E;if(E|=(127&(w=y[l.g+3]))<<21,128>w)return l.g+=4,Jt(l),E;if(w=y[l.g+4],l.g+=5,E|=(15&w)<<28,128>w)return Jt(l),E;if(128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++]&&128<=y[l.g++])throw oo();return Jt(l),E}tr.prototype.reset=function(){this.g=this.j};var kn=[];function so(){this.g=[]}function rr(l,y){for(;127<y;)l.g.push(127&y|128),y>>>=7;l.g.push(y)}function fr(l){var y={},w=y.W!==void 0&&y.W;this.l={v:y.v!==void 0&&y.v},this.W=w,y=this.l,kn.length?(w=kn.pop(),y&&(w.v=y.v),l&&er(w,l),l=w):l=new tr(l,y),this.g=l,this.j=this.g.g,this.h=this.i=-1}function rn(l){var y=l.g;if(y.g==y.i)return!1;l.j=l.g.g;var w=en(l.g)>>>0;if(y=w>>>3,!(0<=(w&=7)&&5>=w))throw jo(w,l.j);if(1>y)throw Error("Invalid field number: "+y+" (at position "+l.j+")");return l.i=y,l.h=w,!0}function Fe(l){switch(l.h){case 0:if(l.h!=0)Fe(l);else t:{for(var y=(l=l.g).g,w=y+10;y<w;)if(!(128&l.h[y++])){l.g=y,Jt(l);break t}throw oo()}break;case 1:(l=l.g).g+=8,Jt(l);break;case 2:l.h!=2?Fe(l):(y=en(l.g)>>>0,(l=l.g).g+=y,Jt(l));break;case 5:(l=l.g).g+=4,Jt(l);break;case 3:for(y=l.i;;){if(!rn(l))throw Error("Unmatched start-group tag: stream EOF");if(l.h==4){if(l.i!=y)throw Error("Unmatched end-group tag");break}Fe(l)}break;default:throw jo(l.h,l.j)}}so.prototype.length=function(){return this.g.length},so.prototype.end=function(){var l=this.g;return this.g=[],l},fr.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var hr=[];function io(){this.i=[],this.h=0,this.g=new so}function oe(l,y){y.length!==0&&(l.i.push(y),l.h+=y.length)}var In=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function Wo(l,y){Object.isFrozen(l)||(In?l[In]|=y:l.N!==void 0?l.N|=y:Object.defineProperties(l,{N:{value:y,configurable:!0,writable:!0,enumerable:!1}}))}function Ho(l){var y;return(y=In?l[In]:l.N)==null?0:y}function Pr(l){return Wo(l,1),l}function nr(l){return!!Array.isArray(l)&&!!(2&Ho(l))}function _n(l){if(!Array.isArray(l))throw Error("cannot mark non-array as immutable");Wo(l,2)}function Ce(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var An=Object.freeze(Pr([]));function Ko(l){if(nr(l.m))throw Error("Cannot mutate an immutable Message")}var qo,Rs=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Ls(l){return{value:l,configurable:!1,writable:!1,enumerable:!1}}function me(l,y,w){return y===-1?null:y>=l.i?l.g?l.g[y]:void 0:w!==void 0&&w&&l.g&&(w=l.g[y])!=null?w:l.m[y+l.h]}function Zt(l,y,w,E){E=E!==void 0&&E,Ko(l),y<l.i&&!E?l.m[y+l.h]=w:(l.g||(l.g=l.m[l.i+l.h]={}))[y]=w}function ee(l,y,w,E){w=w===void 0||w;var _=me(l,y,E=E!==void 0&&E);return _==null&&(_=An),nr(l.m)?w&&(_n(_),Object.freeze(_)):(_===An||nr(_))&&Zt(l,y,_=Pr(_.slice()),E),_}function Te(l,y,w){return(l=(l=me(l,y))==null?l:+l)==null?w===void 0?0:w:l}function On(l,y,w,E){l.j||(l.j={});var _=nr(l.m),I=l.j[w];if(!I){E=ee(l,w,!0,E!==void 0&&E),I=[],_=_||nr(E);for(var $=0;$<E.length;$++)I[$]=new y(E[$]),_&&_n(I[$].m);_&&(_n(I),Object.freeze(I)),l.j[w]=I}return I}function Mt(l,y,w,E,_){var I=I!==void 0&&I;return Ko(l),I=On(l,w,y,I),w=E||new w,l=ee(l,y),_!=null?(I.splice(_,0,w),l.splice(_,0,w.m)):(I.push(w),l.push(w.m)),w}function $n(l,y){return(l=me(l,y))==null?0:l}function Xo(l,y){return(l=me(l,y))==null?"":l}function Er(l){var y=Ps;return Nt(l,y=y===void 0?ao:y)}function Ue(l,y){if(l!=null){if(Array.isArray(l))l=Nt(l,y);else if(Ce(l)){var w,E={};for(w in l)E[w]=Ue(l[w],y);l=E}else l=y(l);return l}}function Nt(l,y){for(var w=l.slice(),E=0;E<w.length;E++)w[E]=Ue(w[E],y);return Array.isArray(l)&&1&Ho(l)&&Pr(w),w}function Ps(l){return l&&typeof l=="object"&&l.toJSON?l.toJSON():(l=function(y){switch(typeof y){case"number":return isFinite(y)?y:String(y);case"object":if(y&&!Array.isArray(y)){if(Uo(y))return mr(y);if(y instanceof Fs){var w=y.L;return w=w==null||typeof w=="string"?w:Ds&&w instanceof Uint8Array?mr(w):null,(y.L=w)||""}}}return y}(l),Array.isArray(l)?Er(l):l)}function ao(l){return Uo(l)?new Uint8Array(l):l}function Dn(l,y,w){l||(l=qo),qo=null;var E=this.constructor.h;if(l||(l=E?[E]:[]),this.h=(E?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=l,l=(E=this.m.length)-1,E&&Ce(E=this.m[l])?(this.i=l-this.h,this.g=E):y!==void 0&&-1<y?(this.i=Math.max(y,l+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,w)for(y=0;y<w.length;y++)if((l=w[y])<this.i)l+=this.h,(E=this.m[l])?Array.isArray(E)&&Pr(E):this.m[l]=An;else{var _=(E=this.g||(this.g=this.m[this.i+this.h]={}))[l];_?Array.isArray(_)&&Pr(_):E[l]=An}}function Fn(){Dn.apply(this,arguments)}if(Dn.prototype.toJSON=function(){return Er(this.m)},Dn.prototype.toString=function(){return this.m.toString()},T(Fn,Dn),Rs){var Sr={};Object.defineProperties(Fn,(Sr[Symbol.hasInstance]=Ls(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Sr))}function uo(l,y,w){if(w){var E,_={};for(E in w){var I=w[E],$=I.ha;$||(_.F=I.la||I.fa.P,I.aa?(_.U=Bs(I.aa),$=function(F){return function(B,U,H){return F.F(B,U,H,F.U)}}(_)):I.ca?(_.T=co(I.X.g,I.ca),$=function(F){return function(B,U,H){return F.F(B,U,H,F.T)}}(_)):$=_.F,I.ha=$),$(y,l,I.X),_={F:_.F,U:_.U,T:_.T}}}(function(F,B){if(B=B.ba){oe(F,F.g.end());for(var U=0;U<B.length;U++)oe(F,B[U])}})(y,l)}var je=Symbol();function kr(l,y,w){return l[je]||(l[je]=function(E,_){return y(E,_,w)})}function Ms(l){var y=l[je];if(!y){var w=js(l);y=function(E,_){return Yo(E,_,w)},l[je]=y}return y}function Wa(l){var y=function(_){var I=_.aa;return I?Ms(I):(I=_.ka)?kr(_.X.g,I,_.ca):void 0}(l),w=l.X,E=l.fa.O;return y?function(_,I){return E(_,I,w,y)}:function(_,I){return E(_,I,w)}}function le(l,y,w,E,_,I){var $=0;for((l=l()).length&&typeof l[0]!="number"&&(w(y,l[0]),$++);$<l.length;){w=l[$++];for(var F=$+1;F<l.length&&typeof l[F]!="number";)F++;var B=l[$++];switch(F-=$){case 0:E(y,w,B);break;case 1:E(y,w,B,l[$++]);break;case 2:_(y,w,B,l[$++],l[$++]);break;case 3:F=l[$++];var U=l[$++],H=l[$++];Array.isArray(H)?_(y,w,B,F,U,H):I(y,w,B,F,U,H);break;case 4:I(y,w,B,l[$++],l[$++],l[$++],l[$++]);break;default:throw Error("unexpected number of binary field arguments: "+F)}}return y}var Ir=Symbol();function Bs(l){var y=l[Ir];if(!y){var w=Us(l);y=function(E,_){return Zo(E,_,w)},l[Ir]=y}return y}function co(l,y){var w=l[Ir];return w||(w=function(E,_){return uo(E,_,y)},l[Ir]=w),w}var Gs=Symbol();function nn(l,y){l.push(y)}function Ha(l,y,w){l.push(y,w.P)}function zs(l,y,w,E,_){var I=Bs(_),$=w.P;l.push(y,function(F,B,U){return $(F,B,U,E,I)})}function Vs(l,y,w,E,_,I){var $=co(E,I),F=w.P;l.push(y,function(B,U,H){return F(B,U,H,E,$)})}function Us(l){var y=l[Gs];return y||le(l,l[Gs]=[],nn,Ha,zs,Vs)}var lo=Symbol();function Mr(l,y){l[0]=y}function Ka(l,y,w,E){var _=w.O;l[y]=E?function(I,$,F){return _(I,$,F,E)}:_}function qa(l,y,w,E,_,I){var $=w.O,F=Ms(_);l[y]=function(B,U,H){return $(B,U,H,E,F,I)}}function po(l,y,w,E,_,I,$){var F=w.O,B=kr(E,_,I);l[y]=function(U,H,Z){return F(U,H,Z,E,B,$)}}function js(l){var y=l[lo];return y||le(l,l[lo]={},Mr,Ka,qa,po)}function Yo(l,y,w){for(;rn(y)&&y.h!=4;){var E=y.i,_=w[E];if(!_){var I=w[0];I&&(I=I[E])&&(_=w[E]=Wa(I))}if(!(_&&_(y,l,E)||(_=y,E=l,I=_.j,Fe(_),_.W))){var $=_.g.h;_=I===(_=_.g.g)?Tr||(Tr=new Uint8Array(0)):Cs?$.slice(I,_):new Uint8Array($.subarray(I,_)),(I=E.ba)?I.push(_):E.ba=[_]}}return l}function Jo(l,y,w){if(hr.length){var E=hr.pop();l&&(er(E.g,l),E.i=-1,E.h=-1),l=E}else l=new fr(l);try{return Yo(new y,l,js(w))}finally{(y=l.g).h=null,y.j=0,y.i=0,y.g=0,y.v=!1,l.i=-1,l.h=-1,100>hr.length&&hr.push(l)}}function Zo(l,y,w){for(var E=w.length,_=E%2==1,I=_?1:0;I<E;I+=2)(0,w[I+1])(y,l,w[I]);uo(l,y,_?w[0]:void 0)}function Cn(l,y){var w=new io;Zo(l,w,Us(y)),oe(w,w.g.end()),l=new Uint8Array(w.h);for(var E=(y=w.i).length,_=0,I=0;I<E;I++){var $=y[I];l.set($,_),_+=$.length}return w.i=[l],l}function on(l,y){return{O:l,P:y}}var We=on(function(l,y,w){if(l.h!==5)return!1;var E=(l=l.g).h[l.g],_=l.h[l.g+1],I=l.h[l.g+2],$=l.h[l.g+3];return l.g+=4,Jt(l),l=2*((_=(E<<0|_<<8|I<<16|$<<24)>>>0)>>31)+1,E=_>>>23&255,_&=8388607,Zt(y,w,E==255?_?NaN:1/0*l:E==0?l*Math.pow(2,-149)*_:l*Math.pow(2,E-150)*(_+Math.pow(2,23))),!0},function(l,y,w){if((y=me(y,w))!=null){rr(l.g,8*w+5),l=l.g;var E=y;(E=(w=0>E?1:0)?-E:E)===0?0<1/E?Nr=0:Nr=2147483648:isNaN(E)?Nr=2147483647:34028234663852886e22<E?Nr=(w<<31|2139095040)>>>0:11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),Nr=(w<<31|E)>>>0):(y=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-y),16777216<=(E=Math.round(8388608*E))&&++y,Nr=(w<<31|y+127<<23|8388607&E)>>>0),w=Nr,l.g.push(w>>>0&255),l.g.push(w>>>8&255),l.g.push(w>>>16&255),l.g.push(w>>>24&255)}}),Xa=on(function(l,y,w){if(l.h!==0)return!1;for(var E=l.g,_=128,I=0,$=l=0;4>$&&128<=_;$++)_=E.h[E.g++],Jt(E),I|=(127&_)<<7*$;if(128<=_&&(_=E.h[E.g++],Jt(E),I|=(127&_)<<28,l|=(127&_)>>4),128<=_)for($=0;5>$&&128<=_;$++)_=E.h[E.g++],Jt(E),l|=(127&_)<<7*$+3;if(!(128>_))throw oo();return E=I>>>0,(l=2147483648&(_=l>>>0))&&(_=~_>>>0,(E=1+~E>>>0)==0&&(_=_+1>>>0)),E=4294967296*_+(E>>>0),Zt(y,w,l?-E:E),!0},function(l,y,w){if((y=me(y,w))!=null&&y!=null){rr(l.g,8*w),l=l.g;var E=y;for(w=0>E,y=(E=Math.abs(E))>>>0,E=Math.floor((E-y)/4294967296),E>>>=0,w&&(E=~E>>>0,4294967295<(y=1+(~y>>>0))&&(y=0,4294967295<++E&&(E=0))),w=Nr=y,y=E;0<y||127<w;)l.g.push(127&w|128),w=(w>>>7|y<<25)>>>0,y>>>=7;l.g.push(w)}}),Ya=on(function(l,y,w){return l.h===0&&(Zt(y,w,en(l.g)),!0)},function(l,y,w){if((y=me(y,w))!=null&&y!=null)if(rr(l.g,8*w),l=l.g,0<=(w=y))rr(l,w);else{for(y=0;9>y;y++)l.g.push(127&w|128),w>>=7;l.g.push(1)}}),Ws=on(function(l,y,w){if(l.h!==2)return!1;var E,_=en(l.g)>>>0,I=(l=l.g).g;if(l.g+=_,Jt(l),l=l.h,Yt)(E=$t)||(E=$t=new TextDecoder("utf-8",{fatal:!0})),E=E.decode(l.subarray(I,I+_));else{_=I+_;for(var $,F,B,U=[],H=null;I<_;)128>($=l[I++])?U.push($):224>$?I>=_?ot():(F=l[I++],194>$||(192&F)!=128?(I--,ot()):U.push((31&$)<<6|63&F)):240>$?I>=_-1?ot():(192&(F=l[I++]))!=128||$===224&&160>F||$===237&&160<=F||(192&(E=l[I++]))!=128?(I--,ot()):U.push((15&$)<<12|(63&F)<<6|63&E):244>=$?I>=_-2?ot():(192&(F=l[I++]))!=128||F-144+($<<28)>>30||(192&(E=l[I++]))!=128||(192&(B=l[I++]))!=128?(I--,ot()):($=(7&$)<<18|(63&F)<<12|(63&E)<<6|63&B,$-=65536,U.push(55296+($>>10&1023),56320+(1023&$))):ot(),8192<=U.length&&(H=xt(H,U),U.length=0);E=xt(H,U)}return Zt(y,w,E),!0},function(l,y,w){if((y=me(y,w))!=null){var E=!1;if(E=E!==void 0&&E,te){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(y))throw Error("Found an unpaired surrogate");y=(ht||(ht=new TextEncoder)).encode(y)}else{for(var _=0,I=new Uint8Array(3*y.length),$=0;$<y.length;$++){var F=y.charCodeAt($);if(128>F)I[_++]=F;else{if(2048>F)I[_++]=F>>6|192;else{if(55296<=F&&57343>=F){if(56319>=F&&$<y.length){var B=y.charCodeAt(++$);if(56320<=B&&57343>=B){F=1024*(F-55296)+B-56320+65536,I[_++]=F>>18|240,I[_++]=F>>12&63|128,I[_++]=F>>6&63|128,I[_++]=63&F|128;continue}$--}if(E)throw Error("Found an unpaired surrogate");F=65533}I[_++]=F>>12|224,I[_++]=F>>6&63|128}I[_++]=63&F|128}}y=I.subarray(0,_)}rr(l.g,8*w+2),rr(l.g,y.length),oe(l,l.g.end()),oe(l,y)}}),Qo=on(function(l,y,w,E,_){if(l.h!==2)return!1;y=Mt(y,w,E),w=l.g.i,E=en(l.g)>>>0;var I=l.g.g+E,$=I-w;if(0>=$&&(l.g.i=I,_(y,l),$=I-l.g.g),$)throw Error("Message parsing ended unexpectedly. Expected to read "+E+" bytes, instead read "+(E-$)+" bytes, either the data ended unexpectedly or the message misreported its own length");return l.g.g=I,l.g.i=w,!0},function(l,y,w,E,_){if((y=On(y,E,w))!=null)for(E=0;E<y.length;E++){var I=l;rr(I.g,8*w+2);var $=I.g.end();oe(I,$),$.push(I.h),I=$,_(y[E],l),$=l;var F=I.pop();for(F=$.h+$.g.length()-F;127<F;)I.push(127&F|128),F>>>=7,$.h++;I.push(F),$.h++}});function Re(){Fn.apply(this,arguments)}if(T(Re,Fn),Rs){var Hs={};Object.defineProperties(Re,(Hs[Symbol.hasInstance]=Ls(Object[Symbol.hasInstance]),Hs))}function Br(l){Re.call(this,l)}function Ks(){return[1,Ya,2,We,3,Ws,4,Ws]}function ts(l){Re.call(this,l,-1,Za)}function Ja(){return[1,Qo,Br,Ks]}T(Br,Re),T(ts,Re),ts.prototype.addClassification=function(l,y){return Mt(this,1,Br,l,y),this};var Za=[1];function sn(l){Re.call(this,l)}function qs(){return[1,We,2,We,3,We,4,We,5,We]}function Xs(l){Re.call(this,l,-1,tu)}function Qa(){return[1,Qo,sn,qs]}T(sn,Re),T(Xs,Re);var tu=[1];function es(l){Re.call(this,l)}function rs(){return[1,We,2,We,3,We,4,We,5,We,6,Xa]}T(es,Re);var ns=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],os=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],ss=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],is=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],as=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Ys=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Js=[].concat(i(ns),i(os),i(ss),i(is),i(as),i(Ys));function m(l,y,w){if(w=l.createShader(w===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(w,y),l.compileShader(w),!l.getShaderParameter(w,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(w));return w}function d(l){return On(l,Br,1).map(function(y){return{index:$n(y,1),ga:Te(y,2),label:me(y,3)!=null?Xo(y,3):void 0,displayName:me(y,4)!=null?Xo(y,4):void 0}})}function b(l){return{x:Te(l,1),y:Te(l,2),z:Te(l,3),visibility:me(l,4)!=null?Te(l,4):void 0}}function A(l,y){this.h=l,this.g=y,this.l=0}function R(l,y,w){return function(E,_){var I=E.g;if(E.o===void 0){var $=m(I,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=m(I,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),B=I.createProgram();if(I.attachShader(B,$),I.attachShader(B,F),I.linkProgram(B),!I.getProgramParameter(B,I.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+I.getProgramInfoLog(B));$=E.o=B,I.useProgram($),F=I.getUniformLocation($,"sampler0"),E.j={K:I.getAttribLocation($,"aVertex"),J:I.getAttribLocation($,"aTex"),ma:F},E.u=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,E.u),I.enableVertexAttribArray(E.j.K),I.vertexAttribPointer(E.j.K,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),E.s=I.createBuffer(),I.bindBuffer(I.ARRAY_BUFFER,E.s),I.enableVertexAttribArray(E.j.J),I.vertexAttribPointer(E.j.J,2,I.FLOAT,!1,0,0),I.bufferData(I.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),I.STATIC_DRAW),I.bindBuffer(I.ARRAY_BUFFER,null),I.uniform1i(F,0)}$=E.j,I.useProgram(E.o),I.canvas.width=_.width,I.canvas.height=_.height,I.viewport(0,0,_.width,_.height),I.activeTexture(I.TEXTURE0),E.h.bindTexture2d(_.glName),I.enableVertexAttribArray($.K),I.bindBuffer(I.ARRAY_BUFFER,E.u),I.vertexAttribPointer($.K,2,I.FLOAT,!1,0,0),I.enableVertexAttribArray($.J),I.bindBuffer(I.ARRAY_BUFFER,E.s),I.vertexAttribPointer($.J,2,I.FLOAT,!1,0,0),I.bindFramebuffer(I.DRAW_FRAMEBUFFER?I.DRAW_FRAMEBUFFER:I.FRAMEBUFFER,null),I.clearColor(0,0,0,0),I.clear(I.COLOR_BUFFER_BIT),I.colorMask(!0,!0,!0,!0),I.drawArrays(I.TRIANGLE_FAN,0,4),I.disableVertexAttribArray($.K),I.disableVertexAttribArray($.J),I.bindBuffer(I.ARRAY_BUFFER,null),E.h.bindTexture2d(0)}(l,y),typeof l.g.canvas.transferToImageBitmap=="function"?Promise.resolve(l.g.canvas.transferToImageBitmap()):w?Promise.resolve(l.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.g.canvas):(l.i===void 0&&(l.i=document.createElement("canvas")),new Promise(function(E){l.i.height=l.g.canvas.height,l.i.width=l.g.canvas.width,l.i.getContext("2d",{}).drawImage(l.g.canvas,0,0,l.g.canvas.width,l.g.canvas.height),E(l.i)}))}function V(l){this.g=l}var M=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function j(l,y){return y+l}function J(l,y){window[l]=y}function st(l){if(this.g=l,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=l&&l.locateFile||j,typeof window=="object")var y=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");y=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=y,l.options)for(var w=(y=a(Object.keys(l.options))).next();!w.done;w=y.next()){w=w.value;var E=l.options[w].default;E!==void 0&&(this.j[w]=typeof E=="function"?E():E)}}function dt(l){var y,w,E,_,I,$,F,B,U,H,Z;return z(function(Q){switch(Q.g){case 1:return l.Z?(y=l.g.files===void 0?[]:typeof l.g.files=="function"?l.g.files(l.j):l.g.files,C(Q,z(function(nt){switch(nt.g){case 1:return nt.o=2,C(nt,WebAssembly.instantiate(M),4);case 4:nt.g=3,nt.o=0;break;case 2:return nt.o=0,nt.j=null,nt.return(!1);case 3:return nt.return(!0)}}),2)):Q.return();case 2:if(w=Q.h,typeof window=="object")return J("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),J("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),$=y.filter(function(nt){return nt.data!==void 0}),F=y.filter(function(nt){return nt.data===void 0}),B=Promise.all($.map(function(nt){var gt=_t(l,nt.url);if(nt.path!==void 0){var vt=nt.path;gt=gt.then(function(Pt){return l.overrideFile(vt,Pt),Promise.resolve(Pt)})}return gt})),U=Promise.all(F.map(function(nt){return nt.simd===void 0||nt.simd&&w||!nt.simd&&!w?function(gt){var vt=document.createElement("script");return vt.setAttribute("src",gt),vt.setAttribute("crossorigin","anonymous"),new Promise(function(Pt){vt.addEventListener("load",function(){Pt()},!1),vt.addEventListener("error",function(){Pt()},!1),document.body.appendChild(vt)})}(l.locateFile(nt.url,l.$)):Promise.resolve()})).then(function(){var nt,gt,vt;return z(function(Pt){if(Pt.g==1)return nt=window.createMediapipeSolutionsWasm,gt=window.createMediapipeSolutionsPackedAssets,vt=l,C(Pt,nt(gt),2);vt.h=Pt.h,Pt.g=0})}),H=z(function(nt){return l.g.graph&&l.g.graph.url?nt=C(nt,_t(l,l.g.graph.url),0):(nt.g=0,nt=void 0),nt}),C(Q,Promise.all([U,B,H]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=y.filter(function(nt){return nt.simd===void 0||nt.simd&&w||!nt.simd&&!w}).map(function(nt){return l.locateFile(nt.url,l.$)}),importScripts.apply(null,i(E)),_=l,C(Q,createMediapipeSolutionsWasm(Module),6);case 6:_.h=Q.h,l.l=new OffscreenCanvas(1,1),l.h.canvas=l.l,I=l.h.GL.createContext(l.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),l.h.GL.makeContextCurrent(I),Q.g=4;break;case 7:if(l.l=document.createElement("canvas"),!(Z=l.l.getContext("webgl2",{}))&&!(Z=l.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),Q.return();l.G=Z,l.h.canvas=l.l,l.h.createContext(l.l,!0,!0,{});case 4:l.i=new l.h.SolutionWasm,l.Z=!1,Q.g=0}})}function _t(l,y){var w,E;return z(function(_){return y in l.H?_.return(l.H[y]):(w=l.locateFile(y,""),E=fetch(w).then(function(I){return I.arrayBuffer()}),l.H[y]=E,_.return(E))})}function Tt(l,y,w){var E,_,I,$,F,B,U,H,Z,Q,nt,gt,vt,Pt;return z(function(zt){switch(zt.g){case 1:if(!w)return zt.return(y);for(E={},_=0,I=a(Object.keys(w)),$=I.next();!$.done;$=I.next())F=$.value,typeof(B=w[F])!="string"&&B.type==="texture"&&y[B.stream]!==void 0&&++_;1<_&&(l.I=!1),U=a(Object.keys(w)),$=U.next();case 2:if($.done){zt.g=4;break}if(H=$.value,typeof(Z=w[H])=="string")return vt=E,Pt=H,C(zt,function(Rn,Jc,mo){var Zs;return z(function(eu){return typeof mo=="number"||mo instanceof Uint8Array||mo instanceof Rn.h.Uint8BlobList?eu.return(mo):mo instanceof Rn.h.Texture2dDataOut?((Zs=Rn.u[Jc])||(Zs=new A(Rn.h,Rn.G),Rn.u[Jc]=Zs),eu.return(R(Zs,mo,Rn.I))):eu.return(void 0)})}(l,H,y[Z]),14);if(Q=y[Z.stream],Z.type==="detection_list"){if(Q){for(var Ne=Q.getRectList(),or=Q.getLandmarksList(),Le=Q.getClassificationsList(),Dt=[],fe=0;fe<Ne.size();++fe){var an=Jo(Ne.get(fe),es,rs);an={boundingBox:{xCenter:Te(an,1),yCenter:Te(an,2),height:Te(an,3),width:Te(an,4),rotation:Te(an,5,0),rectId:$n(an,6)},landmarks:On(Jo(or.get(fe),Xs,Qa),sn,1).map(b),V:d(Jo(Le.get(fe),ts,Ja))},Dt.push(an)}Ne=Dt}else Ne=[];E[H]=Ne,zt.g=7;break}if(Z.type==="proto_list"){if(Q){for(Ne=Array(Q.size()),or=0;or<Q.size();or++)Ne[or]=Q.get(or);Q.delete()}else Ne=[];E[H]=Ne,zt.g=7;break}if(Q===void 0){zt.g=3;break}if(Z.type==="float_list"){E[H]=Q,zt.g=7;break}if(Z.type==="proto"){E[H]=Q,zt.g=7;break}if(Z.type!=="texture")throw Error("Unknown output config type: '"+Z.type+"'");return(nt=l.u[H])||(nt=new A(l.h,l.G),l.u[H]=nt),C(zt,R(nt,Q,l.I),13);case 13:gt=zt.h,E[H]=gt;case 7:Z.transform&&E[H]&&(E[H]=Z.transform(E[H])),zt.g=3;break;case 14:vt[Pt]=zt.h;case 3:$=U.next(),zt.g=2;break;case 4:return zt.return(E)}})}function yt(l,y){for(var w=y.name||"$",E=[].concat(i(y.wants)),_=new l.h.StringList,I=a(y.wants),$=I.next();!$.done;$=I.next())_.push_back($.value);I=l.h.PacketListener.implement({onResults:function(F){for(var B={},U=0;U<y.wants.length;++U)B[E[U]]=F.get(U);var H=l.listeners[w];H&&(l.D=Tt(l,B,y.outs).then(function(Z){Z=H(Z);for(var Q=0;Q<y.wants.length;++Q){var nt=B[E[Q]];typeof nt=="object"&&nt.hasOwnProperty&&nt.hasOwnProperty("delete")&&nt.delete()}Z&&(l.D=Z)}))}}),l.i.attachMultiListener(_,I),_.delete()}function at(l){var y=this;l=l||{};var w={url:"face_detection_short.binarypb"},E={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new st({locateFile:l.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:w,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(_){var I,$,F,B,U;return z(function(H){switch(H.g){case 1:I=a(_==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),$=I.next();case 2:if($.done){H.g=4;break}return F=$.value,B="third_party/mediapipe/modules/face_detection/"+F,C(H,_t(y.g,F),5);case 5:U=H.h,y.g.overrideFile(B,U),$=I.next(),H.g=2;break;case 4:return w.url=_==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",E.graphOptionXref.calculatorName=_==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",H.return(!0)}})}},minDetectionConfidence:E}})}(e=st.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},e.reset=function(){var l=this;return z(function(y){l.i&&(l.i.reset(),l.o={},l.u={}),y.g=0})},e.setOptions=function(l,y){var w=this;if(y=y||this.g.options){for(var E=[],_=[],I={},$=a(Object.keys(l)),F=$.next();!F.done;I={R:I.R,S:I.S},F=$.next()){var B=F.value;B in this.j&&this.j[B]===l[B]||(this.j[B]=l[B],(F=y[B])!==void 0&&(F.onChange&&(I.R=F.onChange,I.S=l[B],E.push(function(U){return function(){return z(function(H){if(H.g==1)return C(H,U.R(U.S),2);H.h===!0&&(w.s=!0),H.g=0})}}(I))),F.graphOptionXref&&(B={valueNumber:F.type===1?l[B]:0,valueBoolean:F.type===0&&l[B],valueString:F.type===2?l[B]:""},F=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),F.graphOptionXref),B),_.push(F))))}E.length===0&&_.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(_),this.A=(this.A===void 0?[]:this.A).concat(E))}},e.initialize=function(){var l=this;return z(function(y){return y.g==1?C(y,dt(l),2):y.g!=3?C(y,function(w){var E,_,I,$,F,B,U,H;return z(function(Z){if(Z.g==1)return w.g.graph&&w.g.graph.url&&w.Y===w.g.graph.url?Z.return():(w.s=!0,w.g.graph&&w.g.graph.url?(w.Y=w.g.graph.url,C(Z,_t(w,w.g.graph.url),3)):void(Z.g=2));for(Z.g!=2&&(E=Z.h,w.i.loadGraph(E)),_=a(Object.keys(w.C)),I=_.next();!I.done;I=_.next())$=I.value,w.i.overrideFile($,w.C[$]);if(w.C={},w.g.listeners)for(F=a(w.g.listeners),B=F.next();!B.done;B=F.next())U=B.value,yt(w,U);H=w.j,w.j={},w.setOptions(H),Z.g=0})}(l),3):C(y,function(w){var E,_,I,$,F,B;return z(function(U){switch(U.g){case 1:if(!w.s)return U.return();if(!w.A){U.g=2;break}E=a(w.A),_=E.next();case 3:if(_.done){U.g=5;break}return C(U,(0,_.value)(),4);case 4:_=E.next(),U.g=3;break;case 5:w.A=void 0;case 2:if(w.B){for(I=new w.h.GraphOptionChangeRequestList,$=a(w.B),F=$.next();!F.done;F=$.next())B=F.value,I.push_back(B);w.i.changeOptions(I),I.delete(),w.B=void 0}w.s=!1,U.g=0}})}(l),0)})},e.overrideFile=function(l,y){this.i?this.i.overrideFile(l,y):this.C[l]=y},e.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},e.send=function(l,y){var w,E,_,I,$,F,B,U,H,Z=this;return z(function(Q){switch(Q.g){case 1:return Z.g.inputs?(w=1e3*(y==null?performance.now():y),C(Q,Z.D,2)):Q.return();case 2:return C(Q,Z.initialize(),3);case 3:for(E=new Z.h.PacketDataList,_=a(Object.keys(l)),I=_.next();!I.done;I=_.next())if($=I.value,F=Z.g.inputs[$]){t:{var nt=l[$];switch(F.type){case"video":var gt=Z.o[F.stream];if(gt||(gt=new A(Z.h,Z.G),Z.o[F.stream]=gt),gt.l===0&&(gt.l=gt.h.createTexture()),typeof HTMLVideoElement<"u"&&nt instanceof HTMLVideoElement)var vt=nt.videoWidth,Pt=nt.videoHeight;else typeof HTMLImageElement<"u"&&nt instanceof HTMLImageElement?(vt=nt.naturalWidth,Pt=nt.naturalHeight):(vt=nt.width,Pt=nt.height);Pt={glName:gt.l,width:vt,height:Pt},(vt=gt.g).canvas.width=Pt.width,vt.canvas.height=Pt.height,vt.activeTexture(vt.TEXTURE0),gt.h.bindTexture2d(gt.l),vt.texImage2D(vt.TEXTURE_2D,0,vt.RGBA,vt.RGBA,vt.UNSIGNED_BYTE,nt),gt.h.bindTexture2d(0),gt=Pt;break t;case"detections":for((gt=Z.o[F.stream])||(gt=new V(Z.h),Z.o[F.stream]=gt),gt.data||(gt.data=new gt.g.DetectionListData),gt.data.reset(nt.length),Pt=0;Pt<nt.length;++Pt){vt=nt[Pt];var zt=gt.data,Ne=zt.setBoundingBox,or=Pt,Le=vt.boundingBox,Dt=new es;if(Zt(Dt,1,Le.xCenter),Zt(Dt,2,Le.yCenter),Zt(Dt,3,Le.height),Zt(Dt,4,Le.width),Zt(Dt,5,Le.rotation),Zt(Dt,6,Le.rectId),Le=Cn(Dt,rs),Ne.call(zt,or,Le),vt.landmarks)for(zt=0;zt<vt.landmarks.length;++zt){var fe=!!(Dt=vt.landmarks[zt]).visibility;or=(Ne=gt.data).addNormalizedLandmark,Le=Pt,Dt=Object.assign(Object.assign({},Dt),{visibility:fe?Dt.visibility:0}),Zt(fe=new sn,1,Dt.x),Zt(fe,2,Dt.y),Zt(fe,3,Dt.z),Dt.visibility&&Zt(fe,4,Dt.visibility),Dt=Cn(fe,qs),or.call(Ne,Le,Dt)}if(vt.V)for(zt=0;zt<vt.V.length;++zt)or=(Ne=gt.data).addClassification,Le=Pt,Dt=vt.V[zt],Zt(fe=new Br,2,Dt.ga),Dt.index&&Zt(fe,1,Dt.index),Dt.label&&Zt(fe,3,Dt.label),Dt.displayName&&Zt(fe,4,Dt.displayName),Dt=Cn(fe,Ks),or.call(Ne,Le,Dt)}gt=gt.data;break t;default:gt={}}}switch(B=gt,U=F.stream,F.type){case"video":E.pushTexture2d(Object.assign(Object.assign({},B),{stream:U,timestamp:w}));break;case"detections":(H=B).stream=U,H.timestamp=w,E.pushDetectionList(H);break;default:throw Error("Unknown input config type: '"+F.type+"'")}}return Z.i.send(E),C(Q,Z.D,4);case 4:E.delete(),Q.g=0}})},e.onResults=function(l,y){this.listeners[y||"$"]=l},Y("Solution",st),Y("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(e=at.prototype).close=function(){return this.g.close(),Promise.resolve()},e.onResults=function(l){this.g.onResults(l)},e.initialize=function(){var l=this;return z(function(y){return C(y,l.g.initialize(),0)})},e.reset=function(){this.g.reset()},e.send=function(l){var y=this;return z(function(w){return C(w,y.g.send(l),0)})},e.setOptions=function(l){this.g.setOptions(l)},Y("FaceDetection",at),Y("FACEDETECTION_LIPS",ns),Y("FACEDETECTION_LEFT_EYE",os),Y("FACEDETECTION_LEFT_EYEBROW",ss),Y("FACEDETECTION_RIGHT_EYE",is),Y("FACEDETECTION_RIGHT_EYEBROW",as),Y("FACEDETECTION_FACE_OVAL",Ys),Y("FACEDETECTION_CONTOURS",Js),Y("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),Y("VERSION","0.4.1646425229")}).call(Ac);var En=function(){return En=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},En.apply(this,arguments)};function Qr(e,t,r,n){return new(r||(r=Promise))(function(o,s){function a(c){try{u(n.next(c))}catch(p){s(p)}}function i(c){try{u(n.throw(c))}catch(p){s(p)}}function u(c){var p;c.done?o(c.value):(p=c.value,p instanceof r?p:new r(function(f){f(p)})).then(a,i)}u((n=n.apply(e,t||[])).next())})}function tn(e,t){var r,n,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(u){return function(c){return function(p){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&p[0]?n.return:p[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,p[1])).done)return o;switch(n=0,o&&(p=[2&p[0],o.value]),p[0]){case 0:case 1:o=p;break;case 4:return a.label++,{value:p[1],done:!1};case 5:a.label++,n=p[1],p=[0];continue;case 7:p=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||p[0]!==6&&p[0]!==2)){a=0;continue}if(p[0]===3&&(!o||p[1]>o[0]&&p[1]<o[3])){a.label=p[1];break}if(p[0]===6&&a.label<o[1]){a.label=o[1],o=p;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(p);break}o[2]&&a.ops.pop(),a.trys.pop();continue}p=t.call(e,a)}catch(f){p=[6,f],n=0}finally{r=o=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}([u,c])}}}var f4=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],Oc={modelType:"short",runtime:"mediapipe",maxFaces:1},s8=function(){function e(t){var r=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new o8.FaceDetection({locateFile:function(n,o){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+n:o+"/"+n}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(n){if(r.height=n.image.height,r.width=n.image.width,r.faces=[],n.detections!==null)for(var o=0,s=n.detections;o<s.length;o++){var a=s[o];r.faces.push(r.normalizedToAbsolute(a.landmarks,{xMin:u=(i=a.boundingBox).xCenter-i.width/2,xMax:u+i.width,yMin:c=i.yCenter-i.height/2,yMax:c+i.height,width:i.width,height:i.height}))}var i,u,c})}return e.prototype.normalizedToAbsolute=function(t,r){var n=this;return{keypoints:t.map(function(o,s){return{x:o.x*n.width,y:o.y*n.height,name:f4[s]}}),box:{xMin:r.xMin*this.width,yMin:r.yMin*this.height,xMax:r.xMax*this.width,yMax:r.yMax*this.height,width:r.width*this.width,height:r.height*this.height}}},e.prototype.estimateFaces=function(t,r){return Qr(this,void 0,void 0,function(){var n,o;return tn(this,function(s){switch(s.label){case 0:return r&&r.flipHorizontal&&r.flipHorizontal!==this.selfieMode&&(this.selfieMode=r.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof St?(o=ImageData.bind,[4,Tn.toPixels(t)]):[3,2];case 1:return n=new(o.apply(ImageData,[void 0,s.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:n=t,s.label=3;case 3:return t=n,[4,this.faceDetectorSolution.send({image:t})];case 4:return s.sent(),[2,this.faces]}})})},e.prototype.dispose=function(){this.faceDetectorSolution.close()},e.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},e.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},e}();function i8(e){return Qr(this,void 0,void 0,function(){var t,r;return tn(this,function(n){switch(n.label){case 0:return t=function(o){if(o==null)return En({},Oc);var s=En({},o);return s.runtime="mediapipe",s.modelType==null&&(s.modelType=Oc.modelType),s.maxFaces==null&&(s.maxFaces=Oc.maxFaces),s}(e),[4,(r=new s8(t)).initialize()];case 1:return n.sent(),[2,r]}})})}function h4(e){return e instanceof St?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function d4(e){return e instanceof St?e:Tn.fromPixels(e)}function $c(e,t){X.assert(e.width!==0,function(){return t+" width cannot be 0."}),X.assert(e.height!==0,function(){return t+" height cannot be 0."})}function a8(e,t,r){var n=t.outputTensorSize,o=t.keepAspectRatio,s=t.borderMode,a=t.outputTensorFloatRange,i=h4(e),u=function(x,T){return T?{xCenter:T.xCenter*x.width,yCenter:T.yCenter*x.height,width:T.width*x.width,height:T.height*x.height,rotation:T.rotation}:{xCenter:.5*x.width,yCenter:.5*x.height,width:x.width,height:x.height,rotation:0}}(i,r),c=function(x,T,k){if(k===void 0&&(k=!1),!k)return{top:0,left:0,right:0,bottom:0};var O=T.height,D=T.width;$c(T,"targetSize"),$c(x,"roi");var C,K,P=O/D,G=x.height/x.width,q=0,z=0;return P>G?(C=x.width,K=x.width*P,z=(1-G/P)/2):(C=x.height/P,K=x.height,q=(1-P/G)/2),x.width=C,x.height=K,{top:z,left:q,right:q,bottom:z}}(u,n,o),p=function(x,T,k,O){var D=x.width,C=x.height,K=O?-1:1,P=Math.cos(x.rotation),G=Math.sin(x.rotation),q=x.xCenter,z=x.yCenter,rt=1/T,it=1/k,Y=new Array(16);return Y[0]=D*P*K*rt,Y[1]=-C*G*rt,Y[2]=0,Y[3]=(-.5*D*P*K+.5*C*G+q)*rt,Y[4]=D*G*K*it,Y[5]=C*P*it,Y[6]=0,Y[7]=(-.5*C*P-.5*D*G*K+z)*it,Y[8]=0,Y[9]=0,Y[10]=D*rt,Y[11]=0,Y[12]=0,Y[13]=0,Y[14]=0,Y[15]=1,function(ot){if(ot.length!==16)throw new Error("Array length must be 16 but got "+ot.length);return[[ot[0],ot[1],ot[2],ot[3]],[ot[4],ot[5],ot[6],ot[7]],[ot[8],ot[9],ot[10],ot[11]],[ot[12],ot[13],ot[14],ot[15]]]}(Y)}(u,i.width,i.height,!1),f=pt(function(){var x=d4(e),T=Ye(function(D,C,K){return $c(K,"inputResolution"),[1/K.width*D[0][0]*C.width,1/K.height*D[0][1]*C.width,D[0][3]*C.width,1/K.width*D[1][0]*C.height,1/K.height*D[1][1]*C.height,D[1][3]*C.height,0,0]}(p,i,n),[1,8]),k=s==="zero"?"constant":"nearest",O=wn.transform(Oe(wt(x,"float32")),T,"bilinear",k,0,[n.height,n.width]);return a!=null?function(D,C){var K=function(P,G,q,z){var rt=(z-q)/255;return{scale:rt,offset:q-0*rt}}(0,0,C[0],C[1]);return pt(function(){return et(W(D,K.scale),K.offset)})}(O,a):O});return{imageTensor:f,padding:c,transformationMatrix:p}}function Zh(e){e.reduceBoxesInLowestLayer==null&&(e.reduceBoxesInLowestLayer=!1),e.interpolatedScaleAspectRatio==null&&(e.interpolatedScaleAspectRatio=1),e.fixedAnchorSize==null&&(e.fixedAnchorSize=!1);for(var t=[],r=0;r<e.numLayers;){for(var n=[],o=[],s=[],a=[],i=r;i<e.strides.length&&e.strides[i]===e.strides[r];){var u=Qh(e.minScale,e.maxScale,i,e.strides.length);if(i===0&&e.reduceBoxesInLowestLayer)s.push(1),s.push(2),s.push(.5),a.push(.1),a.push(u),a.push(u);else{for(var c=0;c<e.aspectRatios.length;++c)s.push(e.aspectRatios[c]),a.push(u);if(e.interpolatedScaleAspectRatio>0){var p=i===e.strides.length-1?1:Qh(e.minScale,e.maxScale,i+1,e.strides.length);a.push(Math.sqrt(u*p)),s.push(e.interpolatedScaleAspectRatio)}}i++}for(var f=0;f<s.length;++f){var x=Math.sqrt(s[f]);n.push(a[f]/x),o.push(a[f]*x)}var T=0,k=0;if(e.featureMapHeight.length>0)T=e.featureMapHeight[r],k=e.featureMapWidth[r];else{var O=e.strides[r];T=Math.ceil(e.inputSizeHeight/O),k=Math.ceil(e.inputSizeWidth/O)}for(var D=0;D<T;++D)for(var C=0;C<k;++C)for(var K=0;K<n.length;++K){var P={xCenter:(C+e.anchorOffsetX)/k,yCenter:(D+e.anchorOffsetY)/T,width:0,height:0};e.fixedAnchorSize?(P.width=1,P.height=1):(P.width=o[K],P.height=n[K]),t.push(P)}r=i}return t}function Qh(e,t,r,n){return n===1?.5*(e+t):e+(t-e)*r/(n-1)}function t4(e,t){var r=t[0],n=t[1];return[r*e[0]+n*e[1]+e[3],r*e[4]+n*e[5]+e[7]]}function u8(e,t,r,n){return Qr(this,void 0,void 0,function(){var o,s,a,i,u;return tn(this,function(c){switch(c.label){case 0:return e.sort(function(p,f){return Math.max.apply(Math,f.score)-Math.max.apply(Math,p.score)}),o=Ye(e.map(function(p){return[p.locationData.relativeBoundingBox.yMin,p.locationData.relativeBoundingBox.xMin,p.locationData.relativeBoundingBox.yMax,p.locationData.relativeBoundingBox.xMax]})),s=Xt(e.map(function(p){return p.score[0]})),[4,wn.nonMaxSuppressionAsync(o,s,t,r)];case 1:return[4,(a=c.sent()).array()];case 2:return i=c.sent(),u=e.filter(function(p,f){return i.indexOf(f)>-1}),At([o,s,a]),[2,u]}})})}function c8(e,t,r){return Qr(this,void 0,void 0,function(){var n,o,s,a,i;return tn(this,function(u){switch(u.label){case 0:return n=e[0],o=e[1],s=function(c,p,f){return pt(function(){var x,T,k,O;f.reverseOutputOrder?(T=Ht(mt(c,[0,f.boxCoordOffset+0],[-1,1])),x=Ht(mt(c,[0,f.boxCoordOffset+1],[-1,1])),O=Ht(mt(c,[0,f.boxCoordOffset+2],[-1,1])),k=Ht(mt(c,[0,f.boxCoordOffset+3],[-1,1]))):(x=Ht(mt(c,[0,f.boxCoordOffset+0],[-1,1])),T=Ht(mt(c,[0,f.boxCoordOffset+1],[-1,1])),k=Ht(mt(c,[0,f.boxCoordOffset+2],[-1,1])),O=Ht(mt(c,[0,f.boxCoordOffset+3],[-1,1]))),T=et(W(ft(T,f.xScale),p.w),p.x),x=et(W(ft(x,f.yScale),p.h),p.y),f.applyExponentialOnBoxSize?(k=W(Ae(ft(k,f.hScale)),p.h),O=W(Ae(ft(O,f.wScale)),p.w)):(k=W(ft(k,f.hScale),p.h),O=W(ft(O,f.wScale),p.h));var D=ut(x,ft(k,2)),C=ut(T,ft(O,2)),K=et(x,ft(k,2)),P=et(T,ft(O,2)),G=Lt([L(D,[f.numBoxes,1]),L(C,[f.numBoxes,1]),L(K,[f.numBoxes,1]),L(P,[f.numBoxes,1])],1);if(f.numKeypoints)for(var q=0;q<f.numKeypoints;++q){var z=f.keypointCoordOffset+q*f.numValuesPerKeypoint,rt=void 0,it=void 0;f.reverseOutputOrder?(rt=Ht(mt(c,[0,z],[-1,1])),it=Ht(mt(c,[0,z+1],[-1,1]))):(it=Ht(mt(c,[0,z],[-1,1])),rt=Ht(mt(c,[0,z+1],[-1,1])));var Y=et(W(ft(rt,f.xScale),p.w),p.x),ot=et(W(ft(it,f.yScale),p.h),p.y);G=Lt([G,L(Y,[f.numBoxes,1]),L(ot,[f.numBoxes,1])],1)}return G})}(o,t,r),a=pt(function(){var c=n;return r.sigmoidScore?(r.scoreClippingThresh!=null&&(c=_i(n,-r.scoreClippingThresh,r.scoreClippingThresh)),c=cr(c)):c}),[4,l8(s,a,r)];case 1:return i=u.sent(),At([s,a]),[2,i]}})})}function l8(e,t,r){return Qr(this,void 0,void 0,function(){var n,o,s,a,i,u,c,p,f,x,T,k;return tn(this,function(O){switch(O.label){case 0:return n=[],[4,e.data()];case 1:return o=O.sent(),[4,t.data()];case 2:for(s=O.sent(),a=0;a<r.numBoxes;++a)if(!(r.minScoreThresh!=null&&s[a]<r.minScoreThresh||(i=a*r.numCoords,u=p8(o[i+0],o[i+1],o[i+2],o[i+3],s[a],r.flipVertically,a),(c=u.locationData.relativeBoundingBox).width<0||c.height<0))){if(r.numKeypoints>0)for((p=u.locationData).relativeKeypoints=[],f=r.numKeypoints*r.numValuesPerKeypoint,x=0;x<f;x+=r.numValuesPerKeypoint)T=i+r.keypointCoordOffset+x,k={x:o[T+0],y:r.flipVertically?1-o[T+1]:o[T+1]},p.relativeKeypoints.push(k);n.push(u)}return[2,n]}})})}function p8(e,t,r,n,o,s,a){return{score:[o],ind:a,locationData:{relativeBoundingBox:{xMin:t,yMin:s?1-r:e,xMax:n,yMax:s?1-e:r,width:n-t,height:r-e}}}}var Ga,m8={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},f8={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},Dc={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},h8={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},d8={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},g8={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},y8={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},b8=function(){function e(t,r,n){this.detectorModel=r,this.maxFaces=n,t==="full"?(this.imageToTensorConfig=y8,this.tensorsToDetectionConfig=d8,this.anchors=Zh(f8)):(this.imageToTensorConfig=g8,this.tensorsToDetectionConfig=h8,this.anchors=Zh(m8));var o=Xt(this.anchors.map(function(u){return u.width})),s=Xt(this.anchors.map(function(u){return u.height})),a=Xt(this.anchors.map(function(u){return u.xCenter})),i=Xt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:a,y:i,w:o,h:s}}return e.prototype.dispose=function(){this.detectorModel.dispose(),At([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},e.prototype.reset=function(){},e.prototype.detectFaces=function(t,r){return r===void 0&&(r=!1),Qr(this,void 0,void 0,function(){var n,o,s,a,i,u,c,p,f,x,T;return tn(this,function(k){switch(k.label){case 0:return t==null?(this.reset(),[2,[]]):(n=pt(function(){var O=wt(d4(t),"float32");return r&&(O=Ht(wn.flipLeftRight(Oe(O,0)),[0])),O}),o=a8(n,this.imageToTensorConfig),s=o.imageTensor,a=o.transformationMatrix,i=this.detectorModel.execute(s,"Identity:0"),u=function(O){return pt(function(){var D=function(P){return pt(function(){return[mt(P,[0,0,0],[1,-1,1]),mt(P,[0,0,1],[1,-1,-1])]})}(O),C=D[0],K=D[1];return{boxes:Ht(K),logits:Ht(C)}})}(i),c=u.boxes,[4,c8([p=u.logits,c],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(f=k.sent()).length===0?(At([n,s,i,p,c]),[2,f]):[4,u8(f,this.maxFaces,.3)];case 2:return x=k.sent(),T=function(O,D){O===void 0&&(O=[]);var C,K=(C=D,[].concat.apply([],C));return O.forEach(function(P){var G=P.locationData;G.relativeKeypoints.forEach(function(ot){var xt=t4(K,[ot.x,ot.y]),$t=xt[0],ht=xt[1];ot.x=$t,ot.y=ht});var q=G.relativeBoundingBox,z=Number.MAX_VALUE,rt=Number.MAX_VALUE,it=Number.MIN_VALUE,Y=Number.MIN_VALUE;[[q.xMin,q.yMin],[q.xMin+q.width,q.yMin],[q.xMin+q.width,q.yMin+q.height],[q.xMin,q.yMin+q.height]].forEach(function(ot){var xt=t4(K,ot),$t=xt[0],ht=xt[1];z=Math.min(z,$t),it=Math.max(it,$t),rt=Math.min(rt,ht),Y=Math.max(Y,ht)}),G.relativeBoundingBox={xMin:z,xMax:it,yMin:rt,yMax:Y,width:it-z,height:Y-rt}}),O}(x,a),At([n,s,i,p,c]),[2,T]}})})},e.prototype.estimateFaces=function(t,r){return Qr(this,void 0,void 0,function(){var n,o;return tn(this,function(s){return n=h4(t),o=!!r&&r.flipHorizontal,[2,this.detectFaces(t,o).then(function(a){return a.map(function(i){for(var u=i.locationData.relativeKeypoints.map(function(k,O){return En(En({},k),{x:k.x*n.width,y:k.y*n.height,name:f4[O]})}),c=i.locationData.relativeBoundingBox,p=0,f=["width","xMax","xMin"];p<f.length;p++)c[f[p]]*=n.width;for(var x=0,T=["height","yMax","yMin"];x<T.length;x++)c[T[x]]*=n.height;return{keypoints:u,box:c}})})]})})},e}();function x8(e){return Qr(this,void 0,void 0,function(){var t,r,n;return tn(this,function(o){switch(o.label){case 0:return t=function(s){if(s==null)return En({},Dc);var a=En({},s);return a.modelType==null&&(a.modelType=Dc.modelType),a.maxFaces==null&&(a.maxFaces=Dc.maxFaces),a.detectorModelUrl==null&&(a.modelType==="full"?a.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":a.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),a}(e),r=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,As(t.detectorModelUrl,{fromTFHub:r})];case 1:return n=o.sent(),[2,new b8(t.modelType,n,t.maxFaces)]}})})}function v8(e,t){return Qr(this,void 0,void 0,function(){var r,n;return tn(this,function(o){if(e===Ga.MediaPipeFaceDetector){if(n=void 0,(r=t)!=null){if(r.runtime==="tfjs")return[2,x8(r)];if(r.runtime==="mediapipe")return[2,i8(r)];n=r.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+n)}throw new Error(e+" is not a supported model name.")})})}function Fc(e){return e.width*e.height}function e4(e){var t=e.xCenter-e.width/2,r=t+e.width,n=e.yCenter-e.height/2;return{xMin:t,xMax:r,yMin:n,yMax:n+e.height,width:e.width,height:e.height}}function w8(e,t){var r=e4(e),n=e4(t);if(!function(a,i){return!(a.xMax<i.xMin||i.xMax<a.xMin||a.yMax<i.yMin||i.yMax<a.yMin)}(r,n))return 0;var o=Fc(function(a,i){var u=Math.max(a.xMin,i.xMin),c=Math.min(a.xMax,i.xMax),p=Math.max(a.yMin,i.yMin),f=Math.min(a.yMax,i.yMax);return{xMin:u,xMax:c,yMin:p,yMax:f,width:Math.max(c-u,0),height:Math.max(f-p,0)}}(r,n)),s=Fc(r)+Fc(n)-o;return s>0?o/s:0}function T8(e,t,r,n){var o=e.width,s=e.height,a=n?-1:1,i=Math.cos(e.rotation),u=Math.sin(e.rotation),c=e.xCenter,p=e.yCenter,f=1/t,x=1/r,T=new Array(16);return T[0]=o*i*a*f,T[1]=-s*u*f,T[2]=0,T[3]=(-.5*o*i*a+.5*s*u+c)*f,T[4]=o*u*a*x,T[5]=s*i*x,T[6]=0,T[7]=(-.5*s*i-.5*o*u*a+p)*x,T[8]=0,T[9]=0,T[10]=o*f,T[11]=0,T[12]=0,T[13]=0,T[14]=0,T[15]=1,function(k){if(k.length!==16)throw new Error("Array length must be 16 but got "+k.length);return[[k[0],k[1],k[2],k[3]],[k[4],k[5],k[6],k[7]],[k[8],k[9],k[10],k[11]],[k[12],k[13],k[14],k[15]]]}(T)}function g4(e){return e instanceof St?{height:e.shape[0],width:e.shape[1]}:{height:e.height,width:e.width}}function y4(e){return e-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}function b4(e){return e instanceof St?e:Tn.fromPixels(e)}function Cc(e,t){X.assert(e.width!==0,function(){return t+" width cannot be 0."}),X.assert(e.height!==0,function(){return t+" height cannot be 0."})}function N8(e,t){var r=function(n,o,s,a){var i=o-n,u=a-s;if(i===0)throw new Error("Original min and max are both "+n+", range cannot be 0.");var c=u/i;return{scale:c,offset:s-n*c}}(0,255,t[0],t[1]);return pt(function(){return et(W(e,r.scale),r.offset)})}function E8(e,t,r){var n=t.outputTensorSize,o=t.keepAspectRatio,s=t.borderMode,a=t.outputTensorFloatRange,i=g4(e),u=function(x,T){return T?{xCenter:T.xCenter*x.width,yCenter:T.yCenter*x.height,width:T.width*x.width,height:T.height*x.height,rotation:T.rotation}:{xCenter:.5*x.width,yCenter:.5*x.height,width:x.width,height:x.height,rotation:0}}(i,r),c=function(x,T,k){if(k===void 0&&(k=!1),!k)return{top:0,left:0,right:0,bottom:0};var O=T.height,D=T.width;Cc(T,"targetSize"),Cc(x,"roi");var C,K,P=O/D,G=x.height/x.width,q=0,z=0;return P>G?(C=x.width,K=x.width*P,z=(1-G/P)/2):(C=x.height/P,K=x.height,q=(1-P/G)/2),x.width=C,x.height=K,{top:z,left:q,right:q,bottom:z}}(u,n,o),p=T8(u,i.width,i.height,!1),f=pt(function(){var x=b4(e),T=Ye(function(D,C,K){return Cc(K,"inputResolution"),[1/K.width*D[0][0]*C.width,1/K.height*D[0][1]*C.width,D[0][3]*C.width,1/K.width*D[1][0]*C.height,1/K.height*D[1][1]*C.height,D[1][3]*C.height,0,0]}(p,i,n),[1,8]),k=s==="zero"?"constant":"nearest",O=wn.transform(Oe(wt(x,"float32")),T,"bilinear",k,0,[n.height,n.width]);return a!=null?N8(O,a):O});return{imageTensor:f,padding:c,transformationMatrix:p}}function r4(e){return{xCenter:e.xMin+e.width/2,yCenter:e.yMin+e.height/2,width:e.width,height:e.height}}function n4(e){var t=e.relativeKeypoints;if(t.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var r=Number.MAX_VALUE,n=Number.MAX_VALUE,o=Number.MIN_VALUE,s=Number.MIN_VALUE;return t.forEach(function(a){r=Math.min(r,a.x),o=Math.max(o,a.x),n=Math.min(n,a.y),s=Math.max(s,a.y)}),{xCenter:(r+o)/2,yCenter:(n+s)/2,width:o-r,height:s-n}}function o4(e,t,r,n,o){var s=r==="rect"?function(a,i,u){var c,p=a.locationData;if(i==="boundingbox")c=r4(p.boundingBox);else{c=n4(p);var f=u.width,x=u.height;c.xCenter=Math.round(c.xCenter*f),c.yCenter=Math.round(c.yCenter*x),c.width=Math.round(c.width*f),c.height=Math.round(c.height*x)}return c}(e,t,n):function(a,i){var u=a.locationData;return i==="boundingbox"?r4(u.relativeBoundingBox):n4(u)}(e,t);return o&&(s.rotation=function(a,i,u){var c,p=a.locationData,f=u.rotationVectorStartKeypointIndex,x=u.rotationVectorEndKeypointIndex;c=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var T=p.relativeKeypoints[f].x*i.width,k=p.relativeKeypoints[f].y*i.height,O=p.relativeKeypoints[x].x*i.width,D=p.relativeKeypoints[x].y*i.height;return y4(c-Math.atan2(-(D-k),O-T))}(e,n,o)),s}function S8(e,t,r){for(var n=0;n<t.length;++n){var o=t[n],s=r[e[n]];s.x=o.x,s.y=o.y}}function k8(e,t,r,n){if(typeof t=="string"){if(t==="copy")for(var o=0;o<r.length;++o)n[e[o]].z=r[o].z}else{var s=function(a,i){for(var u=0,c=0;c<i.length;++c)u+=a[i[c]].z;return u/i.length}(n,t);for(o=0;o<e.length;++o)n[e[o]].z=s}}function I8(e,t){for(var r=function(i){var u=[].concat.apply([],i.map(function(T){return T.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var c=u[0],p=u[0],f=new Set(u);f.forEach(function(T){c=Math.min(c,T),p=Math.max(p,T)});var x=f.size;if(c!==0)throw new Error("Indexes are expected to start with 0 instead of "+c);if(p+1!==x)throw new Error("Indexes should have no gaps but "+(p-x+1)+" indexes are missing");return x}(t),n=new Array(r).fill(null).map(Object),o=0;o<e.length;++o){var s=e[o],a=t[o];if(s.length!==a.indexesMapping.length)throw new Error("There are "+s.length+" refinement landmarks while mapping has "+a.indexesMapping.length);S8(a.indexesMapping,s,n),k8(a.indexesMapping,a.zRefinement,s,n)}return n}function _8(e,t){return e.map(function(r){var n=vr(vr({},r),{x:r.x*t.width,y:r.y*t.height});return r.z!=null&&(n.z=r.z*t.width),n})}function A8(e,t){return e==="none"?t:function(r){return 1/(1+Math.exp(-r))}(t)}function eo(e,t,r,n){return Jr(this,void 0,void 0,function(){var o,s,a,i,u,c,p,f;return Zr(this,function(x){switch(x.label){case 0:return r=r||t.flipHorizontally||!1,n=n||t.flipVertically||!1,o=e.size,s=o/t.numLandmarks,[4,e.data()];case 1:for(a=x.sent(),i=[],u=0;u<t.numLandmarks;++u)c=u*s,(f={x:0,y:0}).x=r?t.inputImageWidth-a[c]:a[c],s>1&&(f.y=n?t.inputImageHeight-a[c+1]:a[c+1]),s>2&&(f.z=a[c+2]),s>3&&(f.score=A8(t.visibilityActivation,a[c+3])),i.push(f);for(p=0;p<i.length;++p)(f=i[p]).x=f.x/t.inputImageWidth,f.y=f.y/t.inputImageHeight,f.z=f.z/t.inputImageWidth/(t.normalizeZ||1);return[2,i]}})})}function s4(e,t,r){var n=e.width,o=e.height,s=e.rotation;if(r.rotation==null&&r.rotationDegree==null||(s=function(p,f){return f.rotation!=null?p+=f.rotation:f.rotationDegree!=null&&(p+=Math.PI*f.rotationDegree/180),y4(p)}(s,r)),s===0)e.xCenter=e.xCenter+n*r.shiftX,e.yCenter=e.yCenter+o*r.shiftY;else{var a=(t.width*n*r.shiftX*Math.cos(s)-t.height*o*r.shiftY*Math.sin(s))/t.width,i=(t.width*n*r.shiftX*Math.sin(s)+t.height*o*r.shiftY*Math.cos(s))/t.height;e.xCenter=e.xCenter+a,e.yCenter=e.yCenter+i}if(r.squareLong){var u=Math.max(n*t.width,o*t.height);n=u/t.width,o=u/t.height}else if(r.squareShort){var c=Math.min(n*t.width,o*t.height);n=c/t.width,o=c/t.height}return e.width=n*r.scaleX,e.height=o*r.scaleY,e}(Ga||(Ga={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var Rc={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},Lc={flipHorizontal:!1,staticImageMode:!1},i4={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5,squareLong:!0},O8={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1],borderMode:"replicate"},a4={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},$8={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},u4={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},c4={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},D8={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},F8={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},C8={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},R8={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},L8={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},P8={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},wr,M8=function(){function e(t,r,n,o){this.detector=t,this.landmarkModel=r,this.maxFaces=n,this.withAttention=o,this.prevFaceRectsFromLandmarks=null}return e.prototype.estimateFaces=function(t,r){return Jr(this,void 0,void 0,function(){var n,o,s,a,i,u,c,p,f,x,T,k,O,D=this;return Zr(this,function(C){switch(C.label){case 0:return n=function(G){if(G==null)return vr({},Lc);var q=vr({},G);return q.flipHorizontal==null&&(q.flipHorizontal=Lc.flipHorizontal),q.staticImageMode==null&&(q.staticImageMode=Lc.staticImageMode),q}(r),t==null?(this.reset(),[2,[]]):(o=g4(t),s=pt(function(){var G=wt(b4(t),"float32");return n.flipHorizontal&&(G=Ht(wn.flipLeftRight(Oe(G,0)),[0])),G}),a=this.prevFaceRectsFromLandmarks,n.staticImageMode||a==null||a.length<this.maxFaces?[4,this.detector.detectFaces(s,!1)]:[3,2]);case 1:return(u=C.sent()).length===0?(this.reset(),s.dispose(),[2,[]]):(i=u.map(function(G){return D.faceDetectionFrontDetectionToRoi(G,o)}),[3,3]);case 2:i=[],C.label=3;case 3:return K=.5,P=[],[i,a||[]].forEach(function(G){return G.forEach(function(q){(P=P.filter(function(z){return w8(q,z)<=K})).push(q)})}),c=P,[4,Promise.all(c.map(function(G){return D.faceLandmark(G,s)}))];case 4:for(p=C.sent(),f=[],this.prevFaceRectsFromLandmarks=[],x=0;x<p.length;++x)(T=p[x])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(T,o)),(k=_8(T,o))!=null&&k.forEach(function(G,q){var z=m4.get(q);z!=null&&(G.name=z)}),O=Pc(k),f.push({keypoints:k,box:O.locationData.relativeBoundingBox}));return s.dispose(),[2,f]}var K,P})})},e.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},e.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},e.prototype.faceDetectionFrontDetectionToRoi=function(t,r){return s4(o4(t,"boundingbox","normRect",r,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),r,i4)},e.prototype.faceLandmark=function(t,r){return Jr(this,void 0,void 0,function(){var n,o,s,a,i,u,c;return Zr(this,function(p){switch(p.label){case 0:return n=E8(r,O8,t).imageTensor,o=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),s=this.landmarkModel.execute(n,o),a=s[0],i=s.slice(1),[4,a.data()];case 1:return p.sent()[0]<.5?(At(s),At(n),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(i)]:[3,3];case 2:return u=p.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(i)];case 4:u=p.sent(),p.label=5;case 5:return c=function(f,x,T){T===void 0&&(T={ignoreRotation:!1});for(var k=[],O=0,D=f;O<D.length;O++){var C=D[O],K=C.x-.5,P=C.y-.5,G=T.ignoreRotation?0:x.rotation,q=Math.cos(G)*K-Math.sin(G)*P,z=Math.sin(G)*K+Math.cos(G)*P;q=q*x.width+x.xCenter,z=z*x.height+x.yCenter;var rt=C.z*x.width,it=vr({},C);it.x=q,it.y=z,it.z=rt,k.push(it)}return k}(u,t),At(s),At(n),[2,c]}})})},e.prototype.tensorsToFaceLandmarks=function(t){return Jr(this,void 0,void 0,function(){return Zr(this,function(r){return[2,eo(t[0],a4)]})})},e.prototype.tensorsToFaceLandmarksWithAttention=function(t){return Jr(this,void 0,void 0,function(){var r,n,o,s,a,i;return Zr(this,function(u){switch(u.label){case 0:return[4,eo(t[0],a4)];case 1:return r=u.sent(),[4,eo(t[1],$8)];case 2:return n=u.sent(),[4,eo(t[3],u4)];case 3:return o=u.sent(),[4,eo(t[5],u4)];case 4:return s=u.sent(),[4,eo(t[4],c4)];case 5:return a=u.sent(),[4,eo(t[2],c4)];case 6:return i=u.sent(),[2,I8([r,n,o,s,a,i],[D8,F8,C8,R8,L8,P8])]}})})},e.prototype.faceLandmarksToRoi=function(t,r){return s4(o4(Pc(t),"boundingbox","normRect",r,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),r,i4)},e}();function B8(e){return Jr(this,void 0,void 0,function(){var t,r,n,o;return Zr(this,function(s){switch(s.label){case 0:return t=function(a){if(a==null)return vr({},Rc);var i=vr({},a);return i.runtime="tfjs",i.maxFaces==null&&(i.maxFaces=Rc.maxFaces),i.refineLandmarks==null&&(i.refineLandmarks=Rc.refineLandmarks),i.landmarkModelUrl==null&&(i.landmarkModelUrl=i.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),i}(e),r=typeof t.landmarkModelUrl=="string"&&t.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,As(t.landmarkModelUrl,{fromTFHub:r})];case 1:return n=s.sent(),[4,v8(Ga.MediaPipeFaceDetector,{modelType:"short",maxFaces:t.maxFaces,detectorModelUrl:t.detectorModelUrl,runtime:t.runtime})];case 2:return o=s.sent(),[2,new M8(o,n,t.maxFaces,t.refineLandmarks)]}})})}function x4(e,t){return Jr(this,void 0,void 0,function(){var r,n;return Zr(this,function(o){if(e===wr.MediaPipeFaceMesh){if(n=void 0,(r=t)!=null){if(r.runtime==="tfjs")return[2,B8(r)];if(r.runtime==="mediapipe")return[2,n8(r)];n=r.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+n)}throw new Error(e+" is not a supported model name.")})})}(function(e){e.MediaPipeFaceMesh="MediaPipeFaceMesh"})(wr||(wr={}));var v4=Object.freeze({__proto__:null,getKeypointIndexByContour:function(e){if(e===wr.MediaPipeFaceMesh)return p4;throw new Error("Model "+e+" is not supported.")},getAdjacentPairs:function(e){if(e===wr.MediaPipeFaceMesh)return t8;throw new Error("Model "+e+" is not supported.")}});var Ve=468,ro=5,Mc="#32EEDB",Bc="#FF2C35";var za={"640 X 480":{width:640,height:480},"640 X 360":{width:640,height:360},"360 X 270":{width:360,height:270}},T4={camera:{targetFPS:60,sizeOption:"640 X 480"},backend:"",flags:{},modelConfig:{}};async function N4(){return x4(wr.MediaPipeFaceMesh,{runtime:"tfjs",refineLandmarks:!1,maxFaces:1,solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619"})}var Itt={[wr.MediaPipeFaceMesh]:["mediapipe-gpu","tfjs-webgl"]};var Os=[127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255];function G8(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}function z8(){return/Android/i.test(navigator.userAgent)}function zc(){return z8()||G8()}function Va(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Gc(e,t,r){let n=new Path2D;n.moveTo(t[0][0],t[0][1]);for(let o=1;o<t.length;o++){let s=t[o];n.lineTo(s[0],s[1])}r&&n.closePath(),e.stroke(n)}function E4(e,t,r,n){t.forEach(o=>{let s=o.keypoints.map(i=>[i.x,i.y]);if(n){e.strokeStyle=Bc,e.lineWidth=1;let i=o.box;Gc(e,[[i.xMin,i.yMin],[i.xMax,i.yMin],[i.xMax,i.yMax],[i.xMin,i.yMax]],!0)}if(r){e.strokeStyle=Mc,e.lineWidth=.5;for(let i=0;i<Os.length/3;i++){let u=[Os[i*3],Os[i*3+1],Os[i*3+2]].map(c=>s[c]);Gc(e,u,!0)}}else{e.fillStyle=Mc;for(let i=0;i<Ve;i++){let u=s[i][0],c=s[i][1];e.beginPath(),e.arc(u,c,1,0,2*Math.PI),e.fill()}}if(s.length>Ve){e.strokeStyle=Bc,e.lineWidth=1;let i=s[Ve],u=Va(s[Ve+4],s[Ve+2]),c=Va(s[Ve+3],s[Ve+1]);if(e.beginPath(),e.ellipse(i[0],i[1],c/2,u/2,0,0,2*Math.PI),e.stroke(),s.length>Ve+ro){let p=s[Ve+ro],f=Va(s[Ve+ro+2],s[Ve+ro+4]),x=Va(s[Ve+ro+3],s[Ve+ro+1]);e.beginPath(),e.ellipse(p[0],p[1],x/2,f/2,0,0,2*Math.PI),e.stroke()}}let a=v4.getKeypointIndexByContour(wr.MediaPipeFaceMesh);for(let[i,u]of Object.entries(a)){e.strokeStyle="#E0E0E0",e.lineWidth=3;let c=u.map(p=>s[p]);c.every(p=>p!=null)&&Gc(e,c,!1)}})}var zo=class{constructor(t,r){Ft(this,"video");Ft(this,"canvas");Ft(this,"ctx");var n;this.video=t,this.canvas=r,this.ctx=(n=this.canvas)==null?void 0:n.getContext("2d")}static async setupCamera(t,r,n){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");let{targetFPS:o,sizeOption:s}=t,a=za["640 X 480"],i={audio:!1,video:{facingMode:"user",width:zc()?za["360 X 270"].width:a.width,height:zc()?za["360 X 270"].height:a.height,frameRate:{ideal:o}}},u=new zo(r,n),c=u.video.videoWidth,p=u.video.videoHeight;if(u.video.width=c,u.video.height=p,u.canvas&&u.ctx){u.canvas.width=c,u.canvas.height=p;let f=document.querySelector(".canvas-wrapper");u.ctx.translate(u.video.videoWidth,0),u.ctx.scale(-1,1)}return u}drawCtx(){this.ctx&&this.ctx.drawImage(this.video,0,0,this.video.videoWidth,this.video.videoHeight)}drawResults(t,r,n){this.ctx&&E4(this.ctx,t,r,n)}};var Vc=[123,352],Uc=[199,151];var jc=[159,145];var Wc=[386,374],Hc=[107,336],S4=[168],Kc=[11,16],qc=[61,291];var qt=class{constructor(t,r,n){Ft(this,"x");Ft(this,"y");Ft(this,"z");this.x=t,this.y=r,this.z=n}static fromKeyPoint(t){if(t.z===void 0)throw new Error("Only 3D vectors allowed");return new qt(t.x,t.y,t.z)}minus(t){return new qt(this.x-t.x,this.y-t.y,this.z-t.z)}plus(t){return new qt(this.x+t.x,this.y+t.y,this.z+t.z)}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}getLength(){return Math.sqrt(this.dot(this))}};function Xc(e,t){let r=e.dot(t)/(e.getLength()*t.getLength());return Math.acos(r)*180/Math.PI}function Ua(e,t,r){return Math.min(Math.max(e,t),r)}var ja=class{constructor(){Ft(this,"everySecondAttention",!0);Ft(this,"tiredness",0);Ft(this,"happiness",0);Ft(this,"amazement",0);Ft(this,"eyesClosed",!1);Ft(this,"eyesClosedFrames",0);Ft(this,"eyesClosedTime",new Date);Ft(this,"blinkTime",0);Ft(this,"blinks",0);Ft(this,"blinked",!1);Ft(this,"isMouthOpened",!1);Ft(this,"yawns",0);Ft(this,"headHeight",0);Ft(this,"initialHeadHeight",null);Ft(this,"zeroAttnetionCounter",0);Ft(this,"zeroAttentionTime",0);Ft(this,"lastAttentioLostTime",new Date);Ft(this,"isCountingLostAttentionPeriod",!1);Ft(this,"lastMinuteIndexes",[]);Ft(this,"lastSecondIndexes",[]);Ft(this,"lastMinuteBlinks",0);Ft(this,"CONSTANTS",{DEFAULT:{BLINKS_IN_MINUTE:10,BLINKS_TIME:200,SMILE_SIZE:60,EYEBROWS_HEIGHT:25},MAX:{SMILE_SIZE:70,EYEBROWS_HEIGHT:30}})}calculateIndexes(t){if(t===void 0){this.handleNotAtScreen();let c={attention:0,happiness:0,tiredness:0,amazement:0,involvement:0,presence:!1,statistic:{headAngleOX:-1,headAngleOY:-1,eyesClosedFrames:this.eyesClosedFrames,blinks:this.blinks,blinkTime:this.blinkTime,eyebrowsHeight:{left:-1,right:-1},yawns:this.yawns,smile:-1,attentionLostTimes:this.zeroAttnetionCounter,attentionLostMillieseconds:this.zeroAttentionTime,everySecondAttention:this.everySecondAttention}};return this.updateCache(c),c}let r=this.calculateHeadOXAngle(t),n=this.calculateHeadOYAngle(t),o=this.calculateEyebrowsHeight(t),s=this.calculateSmile(t),a=this.calculateEyesHeight(t),i=r<36&&!this.eyesClosed?1:0;if(this.handleAttention(i),this.initialHeadHeight!==null){let c=this.headHeight/this.initialHeadHeight;this.CONSTANTS.DEFAULT.SMILE_SIZE=this.initialHeadHeight*.4,this.CONSTANTS.MAX.SMILE_SIZE=this.initialHeadHeight*.45,this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT=this.initialHeadHeight*.18,this.CONSTANTS.MAX.EYEBROWS_HEIGHT=this.initialHeadHeight*.22,s=s/c,o={left:o.left/c,right:o.right/c},a={left:a.left/c,right:a.right/c}}this.calculateAmazement(o),this.calculateHappiness(s),this.handleEyes(a),this.handleYawn(t),i===0&&(this.happiness=0,this.amazement=0);let u={attention:i,happiness:this.happiness,tiredness:this.tiredness,amazement:this.amazement,involvement:0,presence:i===1,statistic:{headAngleOX:r,headAngleOY:n,eyesClosedFrames:this.eyesClosedFrames,blinks:this.blinks,blinkTime:this.blinkTime,eyebrowsHeight:o,yawns:this.yawns,smile:s,attentionLostTimes:this.zeroAttnetionCounter,attentionLostMillieseconds:this.zeroAttentionTime,everySecondAttention:this.everySecondAttention}};return this.updateCache(u),u}calculateHeadOXAngle(t){let r=qt.fromKeyPoint(t.keypoints[Vc[0]]),o=qt.fromKeyPoint(t.keypoints[Vc[1]]).minus(r);o.y=0;let s=new qt(1,0,0);return Xc(o,s)}calculateEyesHeight(t){let r=qt.fromKeyPoint(t.keypoints[Wc[0]]),n=qt.fromKeyPoint(t.keypoints[Wc[1]]),o=qt.fromKeyPoint(t.keypoints[jc[0]]),s=qt.fromKeyPoint(t.keypoints[jc[1]]),a=r.minus(n),i=o.minus(s),u=a.getLength(),c=i.getLength();return{left:u,right:c}}handleEyes(t){let{left:r,right:n}=t;(r<5||n<5)&&!this.eyesClosed?(this.eyesClosed=!0,this.eyesClosedFrames=0,this.eyesClosedTime=new Date):(r<5||n<5)&&this.eyesClosed?this.eyesClosedFrames++:this.eyesClosed&&(this.eyesClosed=!1,this.eyesClosedFrames<15&&(this.blinks++,this.blinkTime=new Date().getTime()-this.eyesClosedTime.getTime(),this.blinked=!0))}calculateEyebrowsHeight(t){let r=qt.fromKeyPoint(t.keypoints[Hc[0]]),n=qt.fromKeyPoint(t.keypoints[Hc[1]]),o=qt.fromKeyPoint(t.keypoints[S4[0]]),s=n.minus(o),a=r.minus(o);return{left:s.getLength(),right:a.getLength()}}handleYawn(t){let r=qt.fromKeyPoint(t.keypoints[Kc[0]]),n=qt.fromKeyPoint(t.keypoints[Kc[1]]),o=r.minus(n).getLength();o>30&&!this.isMouthOpened&&(this.isMouthOpened=!0),o<=30&&this.isMouthOpened&&(this.yawns++,this.isMouthOpened=!1)}calculateSmile(t){let r=qt.fromKeyPoint(t.keypoints[qc[0]]),n=qt.fromKeyPoint(t.keypoints[qc[1]]);return r.minus(n).getLength()}handleAttention(t){if(this.blinked){this.isCountingLostAttentionPeriod=!1,this.blinked=!1;return}t===0&&!this.isCountingLostAttentionPeriod&&(this.lastAttentioLostTime=new Date,this.isCountingLostAttentionPeriod=!0),t===1&&this.isCountingLostAttentionPeriod&&(this.isCountingLostAttentionPeriod=!1,this.zeroAttentionTime+=new Date().getTime()-this.lastAttentioLostTime.getTime(),this.zeroAttnetionCounter++)}handleNotAtScreen(){this.blinked=!1,this.handleAttention(0)}calculateTiredness(){let t=this.lastMinuteIndexes[this.lastMinuteIndexes.length-1].statistic.blinks-this.lastMinuteBlinks;this.lastMinuteBlinks+=t;let r=this.lastMinuteIndexes.reduce((o,s)=>o+s.statistic.blinkTime,0)/this.lastMinuteIndexes.length,n=.2*((t-this.CONSTANTS.DEFAULT.BLINKS_IN_MINUTE)/this.CONSTANTS.DEFAULT.BLINKS_IN_MINUTE)+.8*((r-this.CONSTANTS.DEFAULT.BLINKS_TIME)/this.CONSTANTS.DEFAULT.BLINKS_TIME);n*=100,n=Ua(n,0,100),this.tiredness=Math.round(n/20)}calculateHappiness(t){let r=t-this.CONSTANTS.DEFAULT.SMILE_SIZE,n=this.CONSTANTS.MAX.SMILE_SIZE-this.CONSTANTS.DEFAULT.SMILE_SIZE;this.happiness=Math.round(r/n*100),this.happiness=Ua(this.happiness,0,100)}calculateAmazement(t){let{left:r,right:n}=t,s=Math.max(r,n)-this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT,a=this.CONSTANTS.MAX.EYEBROWS_HEIGHT-this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT;this.amazement=Math.round(s/a*100),this.amazement=Ua(this.amazement,0,100)}updateCache(t){this.lastSecondIndexes.push(t),this.lastMinuteIndexes.push(t)}calculateHeadOYAngle(t){let r=qt.fromKeyPoint(t.keypoints[Uc[1]]),n=qt.fromKeyPoint(t.keypoints[Uc[0]]),o=r.minus(n),s=new qt(0,1,0);return this.headHeight=o.getLength(),this.initialHeadHeight===null&&(this.initialHeadHeight=this.headHeight),o.x=0,180-Xc(o,s)}calculateAttention(){this.lastSecondIndexes.reduce((r,n)=>r+n.attention,0)/this.lastSecondIndexes.length>.5?this.everySecondAttention=!0:this.everySecondAttention=!1}exportingIndex(){return{video_sec:1,video_id:1,attention:this.everySecondAttention,happiness:this.happiness,tiredness:this.tiredness,amazement:this.amazement,involvement:0,uuid:"123e4567-e89b-12d3-a456-426655440000",time:new Date}}handleSecond(){return this.calculateAttention(),this.lastSecondIndexes=[],this.exportingIndex()}handleMinute(){this.calculateTiredness(),this.lastMinuteIndexes=[]}};var V8=["attention","amazement","happiness","tiredness","involvement"],U8={attention:"\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",amazement:"\u0423\u0434\u0438\u0432\u043B\u0435\u043D\u0438\u0435",happiness:"\u042D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",tiredness:"\u0423\u0442\u043E\u043C\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",involvement:"\u0412\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u044C"},j8={attention:"rgb(24, 113, 248)",amazement:"rgb(125, 128, 135)",happiness:"rgb(255, 157, 10)",tiredness:"rgb(250, 85, 85)",involvement:"rgb(180, 106, 238)"},jtt=Object.fromEntries(V8.map(e=>[e,{title:U8[e],color:j8[e]}])),k4={attention:0,happiness:0,tiredness:0,amazement:0,involvement:0,presence:!1,faces:0,activeFaces:0,attentions:[],statistic:{headAngleOX:-1,headAngleOY:-1,eyesClosedFrames:0,blinks:0,blinkTime:0,eyebrowsHeight:{left:-1,right:-1},yawns:0,smile:-1,attentionLostTimes:0,attentionLostMillieseconds:0,everySecondAttention:!1}};var $s,Vo,no,I4;async function W8(e){Vo.video.readyState<2&&await new Promise(r=>{Vo.video.onloadeddata=()=>{r(!0)}});let t=null;if($s!=null)try{if(t=await $s.estimateFaces(Vo.video,{flipHorizontal:!1}),t.length!==0){let r=0,n=[];for(let a of t){let i=no.calculateIndexes(a);i.attention===1&&(r+=1),n.push(i.attention)}let o=no.calculateIndexes(t[0]),s=t1({faces:t.length,activeFaces:r,attentions:n},o);e(s)}else e(k4)}catch(r){$s.dispose(),$s=null,alert(r)}Vo.drawCtx(),t&&t.length>0&&Vo.drawResults(t,!0,!0)}async function _4(){await W8(I4),requestAnimationFrame(_4)}async function A4(e,t,r=n=>{console.table(n)}){I4=r,Vo=await zo.setupCamera(T4.camera,e,t),$s=await N4(),no=new ja,_4()}function O4(){if(no)return no.handleSecond()}function $4(){no&&no.handleMinute()}var D4=0,Yc=null;(async()=>(await K2(),await H2("webgl"),window.createFaceDetector=async function(t,r,n){return await A4(t,n,r.onIndex),Yc=setInterval(()=>{D4+=1,r.onSecondIndex(O4()),D4%60===0&&$4()},1e3),!0},window.destroyFaceDetector=function(){console.log("FaceDetector:destroyFaceDetector | Destroying"),Yc&&clearInterval(Yc)}))();})();
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/*! Bundled license information:

@tensorflow/tfjs-core/dist/backends/backend.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/util_base.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/environment.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/global_util.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/log.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/kernel_registry.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/hash_util.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/profiler.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/tape.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/tensor_format.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/tensor.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/types.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/tensor_util.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/engine.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/device_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/flags.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/tensor_util_env.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/operation.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/complex.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/types.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/io_utils.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/router_registry.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/indexed_db.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/local_storage.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/model_management.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/platforms/platform_browser.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/platforms/platform_node.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/buffer.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cast.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/clone.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/print.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/base_side_effects.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/globals.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/add.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/floorDiv.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/div.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/mul.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/abs.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/acos.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/acosh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/add_n.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/all.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/any.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/arg_max.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/arg_min.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/asin.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/asinh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/atan.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/atan2.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/atanh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv_util.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reshape.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/avg_pool.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/avg_pool_3d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/concat.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/mat_mul.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sigmoid.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/slice.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tanh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/basic_lstm_cell.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/batch_to_space_nd.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/batchnorm.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/bincount.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/broadcast_args.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ceil.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fill.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/clip_by_value.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv2d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv2d_backprop_input.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv3d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv3d_backprop_input.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cos.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cosh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cumprod.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cumsum.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/dense_bincount.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/depth_to_space.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/depthwise_conv2d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/diag.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/dilation2d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/broadcast_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/equal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/where.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/zeros_like.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/div_no_nan.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/dot.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/einsum.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/elu.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/erf.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/axis_util.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/max.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/min.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/pow.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/scalar.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sqrt.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/square.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sum.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/norm.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/euclidean_norm.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/exp.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/expand_dims.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/expm1.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tile.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/eye.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/floor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/gather.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/greater.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/greater_equal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/imag.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/is_finite.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/is_inf.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/is_nan.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/less.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/less_equal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/linspace.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/local_response_normalization.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/log.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/log1p.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/gradients.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/neg.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/softplus.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/log_sigmoid.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sub.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/log_softmax.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/log_sum_exp.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/logical_and.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/logical_not.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/logical_or.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/logical_xor.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/search_sorted.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/lower_bound.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/max_pool.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/max_pool_3d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/max_pool_with_argmax.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/maximum.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/mean.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/zeros.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ones.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/meshgrid.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/minimum.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/mirror_pad.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/mod.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/moments.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/multinomial.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/not_equal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/one_hot.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ones_like.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/pad.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/space_to_batch_nd.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/pool.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/prelu.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/prod.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_gather.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_range.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_tensor_to_tensor.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/rand.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/rand_util.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/random_gamma.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/random_normal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/random_standard_normal.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/random_uniform.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/range.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/real.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reciprocal.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/relu.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/relu6.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reverse.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reverse_1d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reverse_2d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reverse_3d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/reverse_4d.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/round.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/rsqrt.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/selu.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/setdiff1d_async.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sign.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sin.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sinh.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/slice1d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/slice2d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/slice3d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/slice4d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/softmax.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/spectral/fft.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/spectral/ifft.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/spectral/irfft.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/split.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/spectral/rfft.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/squared_difference.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/squeeze.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/stack.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/step.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/strided_slice.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tan.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor1d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor2d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor3d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor4d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor5d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/tensor6d.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/topk.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/truncated_normal.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/unique.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/unsorted_segment_sum.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/unstack.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/upper_bound.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/variable.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/backends/where_impl.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/where_async.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/boolean_mask.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/transpose.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/moving_average.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/scatter_nd.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sparse_to_dense.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/gather_nd.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/dropout_util.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/dropout.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/signal_ops_util.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/in_top_k.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/conv2d_backprop_filter.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fused_util.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fused/conv2d.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_filter.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_input.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fused/depthwise_conv2d.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fused/mat_mul.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/fused_ops.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/signal/hamming_window.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/signal/hann_window.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/signal/frame.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/signal/stft.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/crop_and_resize.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/flip_left_right.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/grayscale_to_rgb.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/rotate_with_offset.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/nonmax_util.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_async.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score_async.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded_async.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/resize_bilinear.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/resize_nearest_neighbor.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/threshold.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/transform.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/linalg/band_part.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/linalg/gram_schmidt.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/linalg/qr.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/loss_ops_utils.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/absolute_difference.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/huber_loss.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/log_loss.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/mean_squared_error.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/sigmoid_cross_entropy.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/losses/softmax_cross_entropy.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_mean.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_sum.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/string/string_n_grams.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/string/string_split.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/string/string_to_hash_bucket_fast.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ops.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/serialization.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/browser_files.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/progress.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/weights_loader.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/http.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/passthrough.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/io/io.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/browser.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/index.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/flags.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/data/compiled_api.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/custom_op/register.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/utils.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/control.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/creation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/graph.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/image.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/logical.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/string.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/operation_mapper.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ops_for_converter.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/tensor_utils.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/tensor_array.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/tensor_list.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/hash_table.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/operation_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/model_analysis.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/graph_executor.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/executor/graph_model.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/version.js:
  (** @license See the LICENSE file. *)

@tensorflow/tfjs-converter/dist/index.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow-models/face-landmarks-detection/dist/face-landmarks-detection.esm.js:
  (**
      * @license
      * Copyright 2022 Google LLC. All Rights Reserved.
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      * http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      * =============================================================================
      *)
*/
