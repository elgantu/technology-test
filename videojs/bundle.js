(()=>{var cS=Object.create;var Mu=Object.defineProperty,pS=Object.defineProperties,mS=Object.getOwnPropertyDescriptor,fS=Object.getOwnPropertyDescriptors,hS=Object.getOwnPropertyNames,q2=Object.getOwnPropertySymbols,dS=Object.getPrototypeOf,X2=Object.prototype.hasOwnProperty,gS=Object.prototype.propertyIsEnumerable;var Uh=(r,e,t)=>e in r?Mu(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,wa=(r,e)=>{for(var t in e||(e={}))X2.call(e,t)&&Uh(r,t,e[t]);if(q2)for(var t of q2(e))gS.call(e,t)&&Uh(r,t,e[t]);return r},Gh=(r,e)=>pS(r,fS(e));var Cr=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Ke=(r,e)=>{for(var t in e)Mu(r,t,{get:e[t],enumerable:!0})},xS=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of hS(e))!X2.call(r,o)&&o!==t&&Mu(r,o,{get:()=>e[o],enumerable:!(n=mS(e,o))||n.enumerable});return r};var zh=(r,e,t)=>(t=r!=null?cS(dS(r)):{},xS(e||!r||!r.__esModule?Mu(t,"default",{value:r,enumerable:!0}):t,r));var ze=(r,e,t)=>(Uh(r,typeof e!="symbol"?e+"":e,t),t);var E3=Cr((SD,C3)=>{C3.exports=ot;var Mr=null;try{Mr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(r){}function ot(r,e,t){this.low=r|0,this.high=e|0,this.unsigned=!!t}ot.prototype.__isLong__;Object.defineProperty(ot.prototype,"__isLong__",{value:!0});function fr(r){return(r&&r.__isLong__)===!0}ot.isLong=fr;var d3={},g3={};function Yo(r,e){var t,n,o;return e?(r>>>=0,(o=0<=r&&r<256)&&(n=g3[r],n)?n:(t=st(r,(r|0)<0?-1:0,!0),o&&(g3[r]=t),t)):(r|=0,(o=-128<=r&&r<128)&&(n=d3[r],n)?n:(t=st(r,r<0?-1:0,!1),o&&(d3[r]=t),t))}ot.fromInt=Yo;function Vr(r,e){if(isNaN(r))return e?Xo:Ur;if(e){if(r<0)return Xo;if(r>=v3)return S3}else{if(r<=-y3)return mr;if(r+1>=y3)return T3}return r<0?Vr(-r,e).neg():st(r%yi|0,r/yi|0,e)}ot.fromNumber=Vr;function st(r,e,t){return new ot(r,e,t)}ot.fromBits=st;var np=Math.pow;function rd(r,e,t){if(r.length===0)throw Error("empty string");if(r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return Ur;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw RangeError("radix");var n;if((n=r.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return rd(r.substring(1),e,t).neg();for(var o=Vr(np(t,8)),s=Ur,i=0;i<r.length;i+=8){var a=Math.min(8,r.length-i),u=parseInt(r.substring(i,i+a),t);if(a<8){var l=Vr(np(t,a));s=s.mul(l).add(Vr(u))}else s=s.mul(o),s=s.add(Vr(u))}return s.unsigned=e,s}ot.fromString=rd;function Zr(r,e){return typeof r=="number"?Vr(r,e):typeof r=="string"?rd(r,e):st(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}ot.fromValue=Zr;var x3=1<<16,US=1<<24,yi=x3*x3,v3=yi*yi,y3=v3/2,b3=Yo(US),Ur=Yo(0);ot.ZERO=Ur;var Xo=Yo(0,!0);ot.UZERO=Xo;var xi=Yo(1);ot.ONE=xi;var w3=Yo(1,!0);ot.UONE=w3;var td=Yo(-1);ot.NEG_ONE=td;var T3=st(-1,2147483647,!1);ot.MAX_VALUE=T3;var S3=st(-1,-1,!0);ot.MAX_UNSIGNED_VALUE=S3;var mr=st(0,-2147483648,!1);ot.MIN_VALUE=mr;var ae=ot.prototype;ae.toInt=function(){return this.unsigned?this.low>>>0:this.low};ae.toNumber=function(){return this.unsigned?(this.high>>>0)*yi+(this.low>>>0):this.high*yi+(this.low>>>0)};ae.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(mr)){var t=Vr(e),n=this.div(t),o=n.mul(t).sub(this);return n.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var s=Vr(np(e,6),this.unsigned),i=this,a="";;){var u=i.div(s),l=i.sub(u.mul(s)).toInt()>>>0,c=l.toString(e);if(i=u,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};ae.getHighBits=function(){return this.high};ae.getHighBitsUnsigned=function(){return this.high>>>0};ae.getLowBits=function(){return this.low};ae.getLowBitsUnsigned=function(){return this.low>>>0};ae.getNumBitsAbs=function(){if(this.isNegative())return this.eq(mr)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1};ae.isZero=function(){return this.high===0&&this.low===0};ae.eqz=ae.isZero;ae.isNegative=function(){return!this.unsigned&&this.high<0};ae.isPositive=function(){return this.unsigned||this.high>=0};ae.isOdd=function(){return(this.low&1)===1};ae.isEven=function(){return(this.low&1)===0};ae.equals=function(e){return fr(e)||(e=Zr(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};ae.eq=ae.equals;ae.notEquals=function(e){return!this.eq(e)};ae.neq=ae.notEquals;ae.ne=ae.notEquals;ae.lessThan=function(e){return this.comp(e)<0};ae.lt=ae.lessThan;ae.lessThanOrEqual=function(e){return this.comp(e)<=0};ae.lte=ae.lessThanOrEqual;ae.le=ae.lessThanOrEqual;ae.greaterThan=function(e){return this.comp(e)>0};ae.gt=ae.greaterThan;ae.greaterThanOrEqual=function(e){return this.comp(e)>=0};ae.gte=ae.greaterThanOrEqual;ae.ge=ae.greaterThanOrEqual;ae.compare=function(e){if(fr(e)||(e=Zr(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};ae.comp=ae.compare;ae.negate=function(){return!this.unsigned&&this.eq(mr)?mr:this.not().add(xi)};ae.neg=ae.negate;ae.add=function(e){fr(e)||(e=Zr(e));var t=this.high>>>16,n=this.high&65535,o=this.low>>>16,s=this.low&65535,i=e.high>>>16,a=e.high&65535,u=e.low>>>16,l=e.low&65535,c=0,p=0,m=0,f=0;return f+=s+l,m+=f>>>16,f&=65535,m+=o+u,p+=m>>>16,m&=65535,p+=n+a,c+=p>>>16,p&=65535,c+=t+i,c&=65535,st(m<<16|f,c<<16|p,this.unsigned)};ae.subtract=function(e){return fr(e)||(e=Zr(e)),this.add(e.neg())};ae.sub=ae.subtract;ae.multiply=function(e){if(this.isZero())return Ur;if(fr(e)||(e=Zr(e)),Mr){var t=Mr.mul(this.low,this.high,e.low,e.high);return st(t,Mr.get_high(),this.unsigned)}if(e.isZero())return Ur;if(this.eq(mr))return e.isOdd()?mr:Ur;if(e.eq(mr))return this.isOdd()?mr:Ur;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(b3)&&e.lt(b3))return Vr(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,o=this.high&65535,s=this.low>>>16,i=this.low&65535,a=e.high>>>16,u=e.high&65535,l=e.low>>>16,c=e.low&65535,p=0,m=0,f=0,d=0;return d+=i*c,f+=d>>>16,d&=65535,f+=s*c,m+=f>>>16,f&=65535,f+=i*l,m+=f>>>16,f&=65535,m+=o*c,p+=m>>>16,m&=65535,m+=s*l,p+=m>>>16,m&=65535,m+=i*u,p+=m>>>16,m&=65535,p+=n*c+o*l+s*u+i*a,p&=65535,st(f<<16|d,p<<16|m,this.unsigned)};ae.mul=ae.multiply;ae.divide=function(e){if(fr(e)||(e=Zr(e)),e.isZero())throw Error("division by zero");if(Mr){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?Mr.div_u:Mr.div_s)(this.low,this.high,e.low,e.high);return st(t,Mr.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Xo:Ur;var n,o,s;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Xo;if(e.gt(this.shru(1)))return w3;s=Xo}else{if(this.eq(mr)){if(e.eq(xi)||e.eq(td))return mr;if(e.eq(mr))return xi;var i=this.shr(1);return n=i.div(e).shl(1),n.eq(Ur)?e.isNegative()?xi:td:(o=this.sub(e.mul(n)),s=n.add(o.div(e)),s)}else if(e.eq(mr))return this.unsigned?Xo:Ur;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=Ur}for(o=this;o.gte(e);){n=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(n)/Math.LN2),u=a<=48?1:np(2,a-48),l=Vr(n),c=l.mul(e);c.isNegative()||c.gt(o);)n-=u,l=Vr(n,this.unsigned),c=l.mul(e);l.isZero()&&(l=xi),s=s.add(l),o=o.sub(c)}return s};ae.div=ae.divide;ae.modulo=function(e){if(fr(e)||(e=Zr(e)),Mr){var t=(this.unsigned?Mr.rem_u:Mr.rem_s)(this.low,this.high,e.low,e.high);return st(t,Mr.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};ae.mod=ae.modulo;ae.rem=ae.modulo;ae.not=function(){return st(~this.low,~this.high,this.unsigned)};ae.and=function(e){return fr(e)||(e=Zr(e)),st(this.low&e.low,this.high&e.high,this.unsigned)};ae.or=function(e){return fr(e)||(e=Zr(e)),st(this.low|e.low,this.high|e.high,this.unsigned)};ae.xor=function(e){return fr(e)||(e=Zr(e)),st(this.low^e.low,this.high^e.high,this.unsigned)};ae.shiftLeft=function(e){return fr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?st(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):st(0,this.low<<e-32,this.unsigned)};ae.shl=ae.shiftLeft;ae.shiftRight=function(e){return fr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?st(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):st(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};ae.shr=ae.shiftRight;ae.shiftRightUnsigned=function(e){if(fr(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return st(n>>>e|t<<32-e,t>>>e,this.unsigned)}else return e===32?st(t,0,this.unsigned):st(t>>>e-32,0,this.unsigned)};ae.shru=ae.shiftRightUnsigned;ae.shr_u=ae.shiftRightUnsigned;ae.toSigned=function(){return this.unsigned?st(this.low,this.high,!1):this};ae.toUnsigned=function(){return this.unsigned?this:st(this.low,this.high,!0)};ae.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};ae.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};ae.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};ot.fromBytes=function(e,t,n){return n?ot.fromBytesLE(e,t):ot.fromBytesBE(e,t)};ot.fromBytesLE=function(e,t){return new ot(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};ot.fromBytesBE=function(e,t){return new ot(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}});var ig=Cr(()=>{});var ag=Cr(()=>{});var P0=Cr((D0,Rd)=>{(function(r,e,t){function n(a){var u=this,l=i();u.next=function(){var c=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=c-(u.c=c|0)},u.c=1,u.s0=l(" "),u.s1=l(" "),u.s2=l(" "),u.s0-=l(a),u.s0<0&&(u.s0+=1),u.s1-=l(a),u.s1<0&&(u.s1+=1),u.s2-=l(a),u.s2<0&&(u.s2+=1),l=null}function o(a,u){return u.c=a.c,u.s0=a.s0,u.s1=a.s1,u.s2=a.s2,u}function s(a,u){var l=new n(a),c=u&&u.state,p=l.next;return p.int32=function(){return l.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,c&&(typeof c=="object"&&o(c,l),p.state=function(){return o(l,{})}),p}function i(){var a=4022871197,u=function(l){l=String(l);for(var c=0;c<l.length;c++){a+=l.charCodeAt(c);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26};return u}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.alea=s})(D0,typeof Rd=="object"&&Rd,typeof define=="function"&&define)});var B0=Cr((L0,Od)=>{(function(r,e,t){function n(i){var a=this,u="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var c=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^c^c>>>8},i===(i|0)?a.x=i:u+=i;for(var l=0;l<u.length+64;l++)a.x^=u.charCodeAt(l)|0,a.next()}function o(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a}function s(i,a){var u=new n(i),l=a&&a.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=u.next,c.quick=c,l&&(typeof l=="object"&&o(l,u),c.state=function(){return o(u,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor128=s})(L0,typeof Od=="object"&&Od,typeof define=="function"&&define)});var V0=Cr((M0,Fd)=>{(function(r,e,t){function n(i){var a=this,u="";a.next=function(){var c=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(c^c<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,i===(i|0)?a.x=i:u+=i;for(var l=0;l<u.length+64;l++)a.x^=u.charCodeAt(l)|0,l==u.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function o(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a.v=i.v,a.d=i.d,a}function s(i,a){var u=new n(i),l=a&&a.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=u.next,c.quick=c,l&&(typeof l=="object"&&o(l,u),c.state=function(){return o(u,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorwow=s})(M0,typeof Fd=="object"&&Fd,typeof define=="function"&&define)});var G0=Cr((U0,Dd)=>{(function(r,e,t){function n(i){var a=this;a.next=function(){var l=a.x,c=a.i,p,m,f;return p=l[c],p^=p>>>7,m=p^p<<24,p=l[c+1&7],m^=p^p>>>10,p=l[c+3&7],m^=p^p>>>3,p=l[c+4&7],m^=p^p<<7,p=l[c+7&7],p=p^p<<13,m^=p^p<<9,l[c]=m,a.i=c+1&7,m};function u(l,c){var p,m,f=[];if(c===(c|0))m=f[0]=c;else for(c=""+c,p=0;p<c.length;++p)f[p&7]=f[p&7]<<15^c.charCodeAt(p)+f[p+1&7]<<13;for(;f.length<8;)f.push(0);for(p=0;p<8&&f[p]===0;++p);for(p==8?m=f[7]=-1:m=f[p],l.x=f,l.i=0,p=256;p>0;--p)l.next()}u(a,i)}function o(i,a){return a.x=i.x.slice(),a.i=i.i,a}function s(i,a){i==null&&(i=+new Date);var u=new n(i),l=a&&a.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=u.next,c.quick=c,l&&(l.x&&o(l,u),c.state=function(){return o(u,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorshift7=s})(U0,typeof Dd=="object"&&Dd,typeof define=="function"&&define)});var W0=Cr((z0,Pd)=>{(function(r,e,t){function n(i){var a=this;a.next=function(){var l=a.w,c=a.X,p=a.i,m,f;return a.w=l=l+1640531527|0,f=c[p+34&127],m=c[p=p+1&127],f^=f<<13,m^=m<<17,f^=f>>>15,m^=m>>>12,f=c[p]=f^m,a.i=p,f+(l^l>>>16)|0};function u(l,c){var p,m,f,d,y,x=[],b=128;for(c===(c|0)?(m=c,c=null):(c=c+"\0",m=0,b=Math.max(b,c.length)),f=0,d=-32;d<b;++d)c&&(m^=c.charCodeAt((d+32)%c.length)),d===0&&(y=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,d>=0&&(y=y+1640531527|0,p=x[d&127]^=m+y,f=p==0?f+1:0);for(f>=128&&(x[(c&&c.length||0)&127]=-1),f=127,d=4*128;d>0;--d)m=x[f+34&127],p=x[f=f+1&127],m^=m<<13,p^=p<<17,m^=m>>>15,p^=p>>>12,x[f]=m^p;l.w=y,l.X=x,l.i=f}u(a,i)}function o(i,a){return a.i=i.i,a.w=i.w,a.X=i.X.slice(),a}function s(i,a){i==null&&(i=+new Date);var u=new n(i),l=a&&a.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=u.next,c.quick=c,l&&(l.X&&o(l,u),c.state=function(){return o(u,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor4096=s})(z0,typeof Pd=="object"&&Pd,typeof define=="function"&&define)});var K0=Cr((H0,Ld)=>{(function(r,e,t){function n(i){var a=this,u="";a.next=function(){var c=a.b,p=a.c,m=a.d,f=a.a;return c=c<<25^c>>>7^p,p=p-m|0,m=m<<24^m>>>8^f,f=f-c|0,a.b=c=c<<20^c>>>12^p,a.c=p=p-m|0,a.d=m<<16^p>>>16^f,a.a=f-c|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,i===Math.floor(i)?(a.a=i/4294967296|0,a.b=i|0):u+=i;for(var l=0;l<u.length+20;l++)a.b^=u.charCodeAt(l)|0,a.next()}function o(i,a){return a.a=i.a,a.b=i.b,a.c=i.c,a.d=i.d,a}function s(i,a){var u=new n(i),l=a&&a.state,c=function(){return(u.next()>>>0)/4294967296};return c.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=u.next,c.quick=c,l&&(typeof l=="object"&&o(l,u),c.state=function(){return o(u,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.tychei=s})(H0,typeof Ld=="object"&&Ld,typeof define=="function"&&define)});var j0=Cr(()=>{});var X0=Cr((q0,zp)=>{(function(r,e,t){var n=256,o=6,s=52,i="random",a=t.pow(n,o),u=t.pow(2,s),l=u*2,c=n-1,p;function m(A,O,M){var G=[];O=O==!0?{entropy:!0}:O||{};var H=x(y(O.entropy?[A,$(e)]:A==null?b():A,3),G),X=new f(G),q=function(){for(var Y=X.g(o),ie=a,fe=0;Y<u;)Y=(Y+fe)*n,ie*=n,fe=X.g(1);for(;Y>=l;)Y/=2,ie/=2,fe>>>=1;return(Y+fe)/ie};return q.int32=function(){return X.g(4)|0},q.quick=function(){return X.g(4)/4294967296},q.double=q,x($(X.S),e),(O.pass||M||function(Y,ie,fe,he){return he&&(he.S&&d(he,X),Y.state=function(){return d(X,{})}),fe?(t[i]=Y,ie):Y})(q,H,"global"in O?O.global:this==t,O.state)}function f(A){var O,M=A.length,G=this,H=0,X=G.i=G.j=0,q=G.S=[];for(M||(A=[M++]);H<n;)q[H]=H++;for(H=0;H<n;H++)q[H]=q[X=c&X+A[H%M]+(O=q[H])],q[X]=O;(G.g=function(Y){for(var ie,fe=0,he=G.i,$e=G.j,Oe=G.S;Y--;)ie=Oe[he=c&he+1],fe=fe*n+Oe[c&(Oe[he]=Oe[$e=c&$e+ie])+(Oe[$e]=ie)];return G.i=he,G.j=$e,fe})(n)}function d(A,O){return O.i=A.i,O.j=A.j,O.S=A.S.slice(),O}function y(A,O){var M=[],G=typeof A,H;if(O&&G=="object")for(H in A)try{M.push(y(A[H],O-1))}catch(X){}return M.length?M:G=="string"?A:A+"\0"}function x(A,O){for(var M=A+"",G,H=0;H<M.length;)O[c&H]=c&(G^=O[c&H]*19)+M.charCodeAt(H++);return $(O)}function b(){try{var A;return p&&(A=p.randomBytes)?A=A(n):(A=new Uint8Array(n),(r.crypto||r.msCrypto).getRandomValues(A)),$(A)}catch(G){var O=r.navigator,M=O&&O.plugins;return[+new Date,r,M,r.screen,$(e)]}}function $(A){return String.fromCharCode.apply(0,A)}if(x(t.random(),e),typeof zp=="object"&&zp.exports){zp.exports=m;try{p=j0()}catch(A){}}else typeof define=="function"&&define.amd?define(function(){return m}):t["seed"+i]=m})(typeof self<"u"?self:q0,[],Math)});var Z0=Cr((BZ,Y0)=>{var lN=P0(),cN=B0(),pN=V0(),mN=G0(),fN=W0(),hN=K0(),ls=X0();ls.alea=lN;ls.xor128=cN;ls.xorwow=pN;ls.xorshift7=mN;ls.xor4096=fN;ls.tychei=hN;Y0.exports=ls});var zx=Cr(Gx=>{(function(){"use strict";var r;function e(g){var w=0;return function(){return w<g.length?{done:!1,value:g[w++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(g,w,C){return g==Array.prototype||g==Object.prototype||(g[w]=C.value),g};function n(g){g=[typeof globalThis=="object"&&globalThis,g,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var w=0;w<g.length;++w){var C=g[w];if(C&&C.Math==Math)return C}throw Error("Cannot find global object")}var o=n(this);function s(g,w){if(w)e:{var C=o;g=g.split(".");for(var P=0;P<g.length-1;P++){var z=g[P];if(!(z in C))break e;C=C[z]}g=g[g.length-1],P=C[g],w=w(P),w!=P&&w!=null&&t(C,g,{configurable:!0,writable:!0,value:w})}}s("Symbol",function(g){function w(Z){if(this instanceof w)throw new TypeError("Symbol is not a constructor");return new C(P+(Z||"")+"_"+z++,Z)}function C(Z,K){this.g=Z,t(this,"description",{configurable:!0,writable:!0,value:K})}if(g)return g;C.prototype.toString=function(){return this.g};var P="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",z=0;return w}),s("Symbol.iterator",function(g){if(g)return g;g=Symbol("Symbol.iterator");for(var w="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),C=0;C<w.length;C++){var P=o[w[C]];typeof P=="function"&&typeof P.prototype[g]!="function"&&t(P.prototype,g,{configurable:!0,writable:!0,value:function(){return i(e(this))}})}return g});function i(g){return g={next:g},g[Symbol.iterator]=function(){return this},g}function a(g){var w=typeof Symbol<"u"&&Symbol.iterator&&g[Symbol.iterator];return w?w.call(g):{next:e(g)}}function u(g){if(!(g instanceof Array)){g=a(g);for(var w,C=[];!(w=g.next()).done;)C.push(w.value);g=C}return g}var l=typeof Object.create=="function"?Object.create:function(g){function w(){}return w.prototype=g,new w},c;if(typeof Object.setPrototypeOf=="function")c=Object.setPrototypeOf;else{var p;e:{var m={a:!0},f={};try{f.__proto__=m,p=f.a;break e}catch(g){}p=!1}c=p?function(g,w){if(g.__proto__=w,g.__proto__!==w)throw new TypeError(g+" is not extensible");return g}:null}var d=c;function y(g,w){if(g.prototype=l(w.prototype),g.prototype.constructor=g,d)d(g,w);else for(var C in w)if(C!="prototype")if(Object.defineProperties){var P=Object.getOwnPropertyDescriptor(w,C);P&&Object.defineProperty(g,C,P)}else g[C]=w[C];g.ea=w.prototype}function x(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.s=this.m=0,this.j=null}function b(g){if(g.l)throw new TypeError("Generator is already running");g.l=!0}x.prototype.o=function(g){this.h=g};function $(g,w){g.j={U:w,V:!0},g.g=g.m||g.s}x.prototype.return=function(g){this.j={return:g},this.g=this.s};function A(g,w,C){return g.g=C,{value:w}}function O(g){this.g=new x,this.h=g}function M(g,w){b(g.g);var C=g.g.i;return C?G(g,"return"in C?C.return:function(P){return{value:P,done:!0}},w,g.g.return):(g.g.return(w),H(g))}function G(g,w,C,P){try{var z=w.call(g.g.i,C);if(!(z instanceof Object))throw new TypeError("Iterator result "+z+" is not an object");if(!z.done)return g.g.l=!1,z;var Z=z.value}catch(K){return g.g.i=null,$(g.g,K),H(g)}return g.g.i=null,P.call(g.g,Z),H(g)}function H(g){for(;g.g.g;)try{var w=g.h(g.g);if(w)return g.g.l=!1,{value:w.value,done:!1}}catch(C){g.g.h=void 0,$(g.g,C)}if(g.g.l=!1,g.g.j){if(w=g.g.j,g.g.j=null,w.V)throw w.U;return{value:w.return,done:!0}}return{value:void 0,done:!0}}function X(g){this.next=function(w){return b(g.g),g.g.i?w=G(g,g.g.i.next,w,g.g.o):(g.g.o(w),w=H(g)),w},this.throw=function(w){return b(g.g),g.g.i?w=G(g,g.g.i.throw,w,g.g.o):($(g.g,w),w=H(g)),w},this.return=function(w){return M(g,w)},this[Symbol.iterator]=function(){return this}}function q(g,w){return w=new X(new O(w)),d&&g.prototype&&d(w,g.prototype),w}function Y(g,w){g instanceof String&&(g+="");var C=0,P=!1,z={next:function(){if(!P&&C<g.length){var Z=C++;return{value:w(Z,g[Z]),done:!1}}return P=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}var ie=typeof Object.assign=="function"?Object.assign:function(g,w){for(var C=1;C<arguments.length;C++){var P=arguments[C];if(P)for(var z in P)Object.prototype.hasOwnProperty.call(P,z)&&(g[z]=P[z])}return g};s("Object.assign",function(g){return g||ie}),s("Promise",function(g){function w(K){this.h=0,this.i=void 0,this.g=[],this.o=!1;var J=this.j();try{K(J.resolve,J.reject)}catch(ne){J.reject(ne)}}function C(){this.g=null}function P(K){return K instanceof w?K:new w(function(J){J(K)})}if(g)return g;C.prototype.h=function(K){if(this.g==null){this.g=[];var J=this;this.i(function(){J.l()})}this.g.push(K)};var z=o.setTimeout;C.prototype.i=function(K){z(K,0)},C.prototype.l=function(){for(;this.g&&this.g.length;){var K=this.g;this.g=[];for(var J=0;J<K.length;++J){var ne=K[J];K[J]=null;try{ne()}catch(pe){this.j(pe)}}}this.g=null},C.prototype.j=function(K){this.i(function(){throw K})},w.prototype.j=function(){function K(pe){return function(Se){ne||(ne=!0,pe.call(J,Se))}}var J=this,ne=!1;return{resolve:K(this.C),reject:K(this.l)}},w.prototype.C=function(K){if(K===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(K instanceof w)this.F(K);else{e:switch(typeof K){case"object":var J=K!=null;break e;case"function":J=!0;break e;default:J=!1}J?this.u(K):this.m(K)}},w.prototype.u=function(K){var J=void 0;try{J=K.then}catch(ne){this.l(ne);return}typeof J=="function"?this.G(J,K):this.m(K)},w.prototype.l=function(K){this.s(2,K)},w.prototype.m=function(K){this.s(1,K)},w.prototype.s=function(K,J){if(this.h!=0)throw Error("Cannot settle("+K+", "+J+"): Promise already settled in state"+this.h);this.h=K,this.i=J,this.h===2&&this.D(),this.A()},w.prototype.D=function(){var K=this;z(function(){if(K.B()){var J=o.console;typeof J<"u"&&J.error(K.i)}},1)},w.prototype.B=function(){if(this.o)return!1;var K=o.CustomEvent,J=o.Event,ne=o.dispatchEvent;return typeof ne>"u"?!0:(typeof K=="function"?K=new K("unhandledrejection",{cancelable:!0}):typeof J=="function"?K=new J("unhandledrejection",{cancelable:!0}):(K=o.document.createEvent("CustomEvent"),K.initCustomEvent("unhandledrejection",!1,!0,K)),K.promise=this,K.reason=this.i,ne(K))},w.prototype.A=function(){if(this.g!=null){for(var K=0;K<this.g.length;++K)Z.h(this.g[K]);this.g=null}};var Z=new C;return w.prototype.F=function(K){var J=this.j();K.J(J.resolve,J.reject)},w.prototype.G=function(K,J){var ne=this.j();try{K.call(J,ne.resolve,ne.reject)}catch(pe){ne.reject(pe)}},w.prototype.then=function(K,J){function ne(Re,Ee){return typeof Re=="function"?function(de){try{pe(Re(de))}catch(h){Se(h)}}:Ee}var pe,Se,Ue=new w(function(Re,Ee){pe=Re,Se=Ee});return this.J(ne(K,pe),ne(J,Se)),Ue},w.prototype.catch=function(K){return this.then(void 0,K)},w.prototype.J=function(K,J){function ne(){switch(pe.h){case 1:K(pe.i);break;case 2:J(pe.i);break;default:throw Error("Unexpected state: "+pe.h)}}var pe=this;this.g==null?Z.h(ne):this.g.push(ne),this.o=!0},w.resolve=P,w.reject=function(K){return new w(function(J,ne){ne(K)})},w.race=function(K){return new w(function(J,ne){for(var pe=a(K),Se=pe.next();!Se.done;Se=pe.next())P(Se.value).J(J,ne)})},w.all=function(K){var J=a(K),ne=J.next();return ne.done?P([]):new w(function(pe,Se){function Ue(de){return function(h){Re[de]=h,Ee--,Ee==0&&pe(Re)}}var Re=[],Ee=0;do Re.push(void 0),Ee++,P(ne.value).J(Ue(Re.length-1),Se),ne=J.next();while(!ne.done)})},w}),s("Object.is",function(g){return g||function(w,C){return w===C?w!==0||1/w===1/C:w!==w&&C!==C}}),s("Array.prototype.includes",function(g){return g||function(w,C){var P=this;P instanceof String&&(P=String(P));var z=P.length;for(C=C||0,0>C&&(C=Math.max(C+z,0));C<z;C++){var Z=P[C];if(Z===w||Object.is(Z,w))return!0}return!1}}),s("String.prototype.includes",function(g){return g||function(w,C){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(w instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(w,C||0)!==-1}}),s("Array.prototype.keys",function(g){return g||function(){return Y(this,function(w){return w})}});var fe=this||self;function he(g,w){g=g.split(".");var C=fe;g[0]in C||typeof C.execScript>"u"||C.execScript("var "+g[0]);for(var P;g.length&&(P=g.shift());)g.length||w===void 0?C[P]&&C[P]!==Object.prototype[P]?C=C[P]:C=C[P]={}:C[P]=w}function $e(g,w){return w=String.fromCharCode.apply(null,w),g==null?w:g+w}var Oe,ct=typeof TextDecoder<"u",Xe,Ye=typeof TextEncoder<"u";function bt(g){if(Ye)g=(Xe||(Xe=new TextEncoder)).encode(g);else{var w=void 0;w=w===void 0?!1:w;for(var C=0,P=new Uint8Array(3*g.length),z=0;z<g.length;z++){var Z=g.charCodeAt(z);if(128>Z)P[C++]=Z;else{if(2048>Z)P[C++]=Z>>6|192;else{if(55296<=Z&&57343>=Z){if(56319>=Z&&z<g.length){var K=g.charCodeAt(++z);if(56320<=K&&57343>=K){Z=1024*(Z-55296)+K-56320+65536,P[C++]=Z>>18|240,P[C++]=Z>>12&63|128,P[C++]=Z>>6&63|128,P[C++]=Z&63|128;continue}else z--}if(w)throw Error("Found an unpaired surrogate");Z=65533}P[C++]=Z>>12|224,P[C++]=Z>>6&63|128}P[C++]=Z&63|128}}g=P.subarray(0,C)}return g}var ir={},Ft=null;function An(g,w){w===void 0&&(w=0),to(),w=ir[w];for(var C=Array(Math.floor(g.length/3)),P=w[64]||"",z=0,Z=0;z<g.length-2;z+=3){var K=g[z],J=g[z+1],ne=g[z+2],pe=w[K>>2];K=w[(K&3)<<4|J>>4],J=w[(J&15)<<2|ne>>6],ne=w[ne&63],C[Z++]=pe+K+J+ne}switch(pe=0,ne=P,g.length-z){case 2:pe=g[z+1],ne=w[(pe&15)<<2]||P;case 1:g=g[z],C[Z]=w[g>>2]+w[(g&3)<<4|pe>>4]+ne+P}return C.join("")}function _n(g){var w=g.length,C=3*w/4;C%3?C=Math.floor(C):"=.".indexOf(g[w-1])!=-1&&(C="=.".indexOf(g[w-2])!=-1?C-2:C-1);var P=new Uint8Array(C),z=0;return Os(g,function(Z){P[z++]=Z}),P.subarray(0,z)}function Os(g,w){function C(ne){for(;P<g.length;){var pe=g.charAt(P++),Se=Ft[pe];if(Se!=null)return Se;if(!/^[\s\xa0]*$/.test(pe))throw Error("Unknown base64 encoding at char: "+pe)}return ne}to();for(var P=0;;){var z=C(-1),Z=C(0),K=C(64),J=C(64);if(J===64&&z===-1)break;w(z<<2|Z>>4),K!=64&&(w(Z<<4&240|K>>2),J!=64&&w(K<<6&192|J))}}function to(){if(!Ft){Ft={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),w=["+/=","+/","-_=","-_.","-_"],C=0;5>C;C++){var P=g.concat(w[C].split(""));ir[C]=P;for(var z=0;z<P.length;z++){var Z=P[z];Ft[Z]===void 0&&(Ft[Z]=z)}}}}var vr=typeof Uint8Array.prototype.slice=="function",na;function Fs(g,w,C){return w===C?na||(na=new Uint8Array(0)):vr?g.slice(w,C):new Uint8Array(g.subarray(w,C))}var Or=0,Fr=0;function gt(g,w){w=w===void 0?{}:w,w=w.v===void 0?!1:w.v,this.h=null,this.g=this.j=this.l=0,this.m=!1,this.v=w,g&&ro(this,g)}function ro(g,w){w=w.constructor===Uint8Array?w:w.constructor===ArrayBuffer?new Uint8Array(w):w.constructor===Array?new Uint8Array(w):w.constructor===String?_n(w):w instanceof Uint8Array?new Uint8Array(w.buffer,w.byteOffset,w.byteLength):new Uint8Array(0),g.h=w,g.l=0,g.j=g.h.length,g.g=g.l}gt.prototype.reset=function(){this.g=this.l};function Oo(g){for(var w=128,C=0,P=0,z=0;4>z&&128<=w;z++)w=g.h[g.g++],C|=(w&127)<<7*z;if(128<=w&&(w=g.h[g.g++],C|=(w&127)<<28,P|=(w&127)>>4),128<=w)for(z=0;5>z&&128<=w;z++)w=g.h[g.g++],P|=(w&127)<<7*z+3;if(128>w)return g=C>>>0,w=P>>>0,(P=w&2147483648)&&(g=~g+1>>>0,w=~w>>>0,g==0&&(w=w+1>>>0)),g=4294967296*w+(g>>>0),P?-g:g;g.m=!0}gt.prototype.i=function(){var g=this.h,w=g[this.g],C=w&127;return 128>w?(this.g+=1,C):(w=g[this.g+1],C|=(w&127)<<7,128>w?(this.g+=2,C):(w=g[this.g+2],C|=(w&127)<<14,128>w?(this.g+=3,C):(w=g[this.g+3],C|=(w&127)<<21,128>w?(this.g+=4,C):(w=g[this.g+4],C|=(w&15)<<28,128>w?(this.g+=5,C>>>0):(this.g+=5,128<=g[this.g++]&&128<=g[this.g++]&&128<=g[this.g++]&&128<=g[this.g++]&&this.g++,C)))))},gt.prototype.o=function(){var g=this.h[this.g],w=this.h[this.g+1],C=this.h[this.g+2],P=this.h[this.g+3];return this.g+=4,C=(g<<0|w<<8|C<<16|P<<24)>>>0,g=2*(C>>31)+1,w=C>>>23&255,C&=8388607,w==255?C?NaN:1/0*g:w==0?g*Math.pow(2,-149)*C:g*Math.pow(2,w-150)*(C+Math.pow(2,23))};var Ds=[];function Dr(){this.g=new Uint8Array(64),this.h=0}Dr.prototype.push=function(g){if(!(this.h+1<this.g.length)){var w=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length)),this.g.set(w)}this.g[this.h++]=g},Dr.prototype.length=function(){return this.h},Dr.prototype.end=function(){var g=this.g,w=this.h;return this.h=0,Fs(g,0,w)};function Xr(g,w){for(;127<w;)g.push(w&127|128),w>>>=7;g.push(w)}function no(g){var w={},C=w.N===void 0?!1:w.N;this.o={v:w.v===void 0?!1:w.v},this.N=C,w=this.o,Ds.length?(C=Ds.pop(),w&&(C.v=w.v),g&&ro(C,g),g=C):g=new gt(g,w),this.g=g,this.m=this.g.g,this.h=this.i=this.l=-1,this.j=!1}no.prototype.reset=function(){this.g.reset(),this.h=this.l=-1};function ar(g){var w=g.g;if((w=w.g==w.j)||(w=g.j)||(w=g.g,w=w.m||0>w.g||w.g>w.j),w)return!1;g.m=g.g.g,w=g.g.i();var C=w&7;return C!=0&&C!=5&&C!=1&&C!=2&&C!=3&&C!=4?(g.j=!0,!1):(g.i=w,g.l=w>>>3,g.h=C,!0)}function Yr(g){switch(g.h){case 0:if(g.h!=0)Yr(g);else{for(g=g.g;g.h[g.g]&128;)g.g++;g.g++}break;case 1:g.h!=1?Yr(g):(g=g.g,g.g+=8);break;case 2:if(g.h!=2)Yr(g);else{var w=g.g.i();g=g.g,g.g+=w}break;case 5:g.h!=5?Yr(g):(g=g.g,g.g+=4);break;case 3:w=g.l;do{if(!ar(g)){g.j=!0;break}if(g.h==4){g.l!=w&&(g.j=!0);break}Yr(g)}while(1);break;default:g.j=!0}}function Ps(g,w,C){var P=g.g.j,z=g.g.i(),Z=g.g.g+z;if(g.g.j=Z,C(w,g),C=Z-g.g.g,C!==0)throw Error("Message parsing ended unexpectedly. Expected to read "+z+" bytes, instead read "+(z-C)+" bytes, either the data ended unexpectedly or the message misreported its own length");return g.g.g=Z,g.g.j=P,w}function Ct(g){return g.g.o()}function Fo(g){var w=g.g.i();g=g.g;var C=g.g;g.g+=w,g=g.h;var P;if(ct)(P=Oe)||(P=Oe=new TextDecoder("utf-8",{fatal:!1})),P=P.decode(g.subarray(C,C+w));else{w=C+w;for(var z=[],Z=null,K,J,ne;C<w;)K=g[C++],128>K?z.push(K):224>K?C>=w?z.push(65533):(J=g[C++],194>K||(J&192)!==128?(C--,z.push(65533)):z.push((K&31)<<6|J&63)):240>K?C>=w-1?z.push(65533):(J=g[C++],(J&192)!==128||K===224&&160>J||K===237&&160<=J||((P=g[C++])&192)!==128?(C--,z.push(65533)):z.push((K&15)<<12|(J&63)<<6|P&63)):244>=K?C>=w-2?z.push(65533):(J=g[C++],(J&192)!==128||(K<<28)+(J-144)>>30||((P=g[C++])&192)!==128||((ne=g[C++])&192)!==128?(C--,z.push(65533)):(K=(K&7)<<18|(J&63)<<12|(P&63)<<6|ne&63,K-=65536,z.push((K>>10&1023)+55296,(K&1023)+56320))):z.push(65533),8192<=z.length&&(Z=$e(Z,z),z.length=0);P=$e(Z,z)}return P}function oa(g,w,C){var P=g.g.i();for(P=g.g.g+P;g.g.g<P;)C.push(w.call(g.g))}function sa(g,w){g.h==2?oa(g,gt.prototype.o,w):w.push(Ct(g))}function Rn(){this.h=[],this.i=0,this.g=new Dr}function Pr(g,w){w.length!==0&&(g.h.push(w),g.i+=w.length)}function Do(g){var w=g.i+g.g.length();if(w===0)return new Uint8Array(0);w=new Uint8Array(w);for(var C=g.h,P=C.length,z=0,Z=0;Z<P;Z++){var K=C[Z];K.length!==0&&(w.set(K,z),z+=K.length)}return C=g.g,P=C.h,P!==0&&(w.set(C.g.subarray(0,P),z),C.h=0),g.h=[w],w}function ur(g,w,C){if(C!=null){Xr(g.g,8*w+5),g=g.g;var P=C;P=(C=0>P?1:0)?-P:P,P===0?0<1/P?Or=Fr=0:(Fr=0,Or=2147483648):isNaN(P)?(Fr=0,Or=2147483647):34028234663852886e22<P?(Fr=0,Or=(C<<31|2139095040)>>>0):11754943508222875e-54>P?(P=Math.round(P/Math.pow(2,-149)),Fr=0,Or=(C<<31|P)>>>0):(w=Math.floor(Math.log(P)/Math.LN2),P*=Math.pow(2,-w),P=Math.round(8388608*P),16777216<=P&&++w,Fr=0,Or=(C<<31|w+127<<23|P&8388607)>>>0),C=Or,g.push(C>>>0&255),g.push(C>>>8&255),g.push(C>>>16&255),g.push(C>>>24&255)}}var Po=typeof Uint8Array=="function";function ia(g,w,C){if(g!=null)return typeof g=="object"?Po&&g instanceof Uint8Array?C(g):aa(g,w,C):w(g)}function aa(g,w,C){if(Array.isArray(g)){for(var P=Array(g.length),z=0;z<g.length;z++)P[z]=ia(g[z],w,C);return Array.isArray(g)&&g.W&&Dt(P),P}P={};for(z in g)P[z]=ia(g[z],w,C);return P}function wu(g){return typeof g=="number"?isFinite(g)?g:String(g):g}var Tu={W:{value:!0,configurable:!0}};function Dt(g){return Array.isArray(g)&&!Object.isFrozen(g)&&Object.defineProperties(g,Tu),g}var xt;function vt(g,w,C){var P=xt;xt=null,g||(g=P),P=this.constructor.ca,g||(g=P?[P]:[]),this.j=P?0:-1,this.m=this.g=null,this.h=g;e:{if(P=this.h.length,g=P-1,P&&(P=this.h[g],!(P===null||typeof P!="object"||Array.isArray(P)||Po&&P instanceof Uint8Array))){this.l=g-this.j,this.i=P;break e}w!==void 0&&-1<w?(this.l=Math.max(w,g+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(C)for(w=0;w<C.length;w++)g=C[w],g<this.l?(g+=this.j,(P=this.h[g])?Dt(P):this.h[g]=Kt):(Lo(this),(P=this.i[g])?Dt(P):this.i[g]=Kt)}var Kt=Object.freeze(Dt([]));function Lo(g){var w=g.l+g.j;g.h[w]||(g.i=g.h[w]={})}function Je(g,w,C){return w===-1?null:C!==void 0&&C||w>=g.l?g.i?g.i[w]:void 0:g.h[w+g.j]}function Bo(g,w){var C=C===void 0?!1:C,P=Je(g,w,C);return P==null&&(P=Kt),P===Kt&&(P=Dt([]),Fe(g,w,P,C)),P}function ua(g){var w=Bo(g,3);if(g.m||(g.m={}),!g.m[3]){for(var C=0;C<w.length;C++)w[C]=+w[C];g.m[3]=!0}return w}function ln(g,w,C){return g=Je(g,w),g==null?C:g}function wr(g,w,C){return g=Je(g,w),g=g==null?g:+g,g==null?C===void 0?0:C:g}function Fe(g,w,C,P){P!==void 0&&P||w>=g.l?(Lo(g),g.i[w]=C):g.h[w+g.j]=C}function Su(g,w,C){if(C===-1)return null;if(g.g||(g.g={}),!g.g[C]){var P=Je(g,C,!1);P&&(g.g[C]=new w(P))}return g.g[C]}function Ls(g,w){g.g||(g.g={});var C=g.g[1];if(!C){var P=Bo(g,1);C=[];for(var z=0;z<P.length;z++)C[z]=new w(P[z]);g.g[1]=C}return C}function Mo(g,w,C){var P=P===void 0?!1:P;g.g||(g.g={});var z=C&&cn(C,!1);g.g[w]=C,Fe(g,w,z,P)}function Vo(g,w,C,P){var z=Ls(g,C);w=w||new C,g=Bo(g,1),P!=null?(z.splice(P,0,w),g.splice(P,0,cn(w,!1))):(z.push(w),g.push(cn(w,!1)))}vt.prototype.toJSON=function(){var g=cn(this,!1);return aa(g,wu,An)};function cn(g,w){if(g.g)for(var C in g.g){var P=g.g[C];if(Array.isArray(P))for(var z=0;z<P.length;z++)P[z]&&cn(P[z],w);else P&&cn(P,w)}return g.h}vt.prototype.toString=function(){return cn(this,!1).toString()};function Bs(g,w){if(g=g.o){Pr(w,w.g.end());for(var C=0;C<g.length;C++)Pr(w,g[C])}}function Tr(g,w){if(w.h==4)return!1;var C=w.m;return Yr(w),w.N||(w=Fs(w.g.h,C,w.g.g),(C=g.o)?C.push(w):g.o=[w]),!0}function pn(g){vt.call(this,g,-1,Ah)}y(pn,vt),pn.prototype.getRows=function(){return Je(this,1)},pn.prototype.getCols=function(){return Je(this,2)},pn.prototype.getPackedDataList=function(){return ua(this)},pn.prototype.getLayout=function(){return ln(this,4,0)};function Cu(g,w){for(;ar(w);)switch(w.i){case 8:var C=w.g.i();Fe(g,1,C);break;case 16:C=w.g.i(),Fe(g,2,C);break;case 29:case 26:sa(w,g.getPackedDataList());break;case 32:C=Oo(w.g),Fe(g,4,C);break;default:if(!Tr(g,w))return g}return g}var Ah=[3];function _t(g,w){var C=void 0;return new(C||(C=Promise))(function(P,z){function Z(ne){try{J(w.next(ne))}catch(pe){z(pe)}}function K(ne){try{J(w.throw(ne))}catch(pe){z(pe)}}function J(ne){ne.done?P(ne.value):new C(function(pe){pe(ne.value)}).then(Z,K)}J((w=w.apply(g,void 0)).next())})}function mn(g){vt.call(this,g)}y(mn,vt);function Eu(g,w){for(;ar(w);)switch(w.i){case 8:var C=w.g.i();Fe(g,1,C);break;case 21:C=Ct(w),Fe(g,2,C);break;case 26:C=Fo(w),Fe(g,3,C);break;case 34:C=Fo(w),Fe(g,4,C);break;default:if(!Tr(g,w))return g}return g}function Ms(g){vt.call(this,g,-1,Nu)}y(Ms,vt),Ms.prototype.addClassification=function(g,w){return Vo(this,g,mn,w),this};var Nu=[1];function oo(g){vt.call(this,g)}y(oo,vt);function _h(g,w){for(;ar(w);)switch(w.i){case 13:var C=Ct(w);Fe(g,1,C);break;case 21:C=Ct(w),Fe(g,2,C);break;case 29:C=Ct(w),Fe(g,3,C);break;case 37:C=Ct(w),Fe(g,4,C);break;case 45:C=Ct(w),Fe(g,5,C);break;default:if(!Tr(g,w))return g}return g}function Iu(g){vt.call(this,g,-1,ku)}y(Iu,vt);function $u(g){e:{var w=new Iu;for(g=new no(g);ar(g);)switch(g.i){case 10:var C=Ps(g,new oo,_h);Vo(w,C,oo,void 0);break;default:if(!Tr(w,g))break e}}return w}var ku=[1];function Vs(g){vt.call(this,g)}y(Vs,vt);function On(g){vt.call(this,g,-1,Oh)}y(On,vt),On.prototype.getVertexType=function(){return ln(this,1,0)},On.prototype.getPrimitiveType=function(){return ln(this,2,0)},On.prototype.getVertexBufferList=function(){return ua(this)},On.prototype.getIndexBufferList=function(){return Bo(this,4)};function Rh(g,w){for(;ar(w);)switch(w.i){case 8:var C=Oo(w.g);Fe(g,1,C);break;case 16:C=Oo(w.g),Fe(g,2,C);break;case 29:case 26:sa(w,g.getVertexBufferList());break;case 32:case 34:C=w;var P=g.getIndexBufferList();C.h==2?oa(C,gt.prototype.i,P):P.push(C.g.i());break;default:if(!Tr(g,w))return g}return g}var Oh=[3,4];function Us(g){vt.call(this,g)}y(Us,vt),Us.prototype.getMesh=function(){return Su(this,On,1)},Us.prototype.getPoseTransformMatrix=function(){return Su(this,pn,2)};function Au(g){e:{var w=new Us;for(g=new no(g);ar(g);)switch(g.i){case 10:var C=Ps(g,new On,Rh);Mo(w,1,C);break;case 18:C=Ps(g,new pn,Cu),Mo(w,2,C);break;default:if(!Tr(w,g))break e}}return w}function la(g,w,C){if(C=g.createShader(C===0?g.VERTEX_SHADER:g.FRAGMENT_SHADER),g.shaderSource(C,w),g.compileShader(C),!g.getShaderParameter(C,g.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+g.getShaderInfoLog(C));return C}function ca(g){return Ls(g,mn).map(function(w){return{index:ln(w,1,0),Y:wr(w,2),label:Je(w,3)!=null?ln(w,3,""):void 0,displayName:Je(w,4)!=null?ln(w,4,""):void 0}})}function pa(g){return{x:wr(g,1),y:wr(g,2),z:wr(g,3),visibility:Je(g,4)!=null?wr(g,4):void 0}}function Uo(g,w){this.h=g,this.g=w,this.l=0}function so(g,w,C){return Sr(g,w),typeof g.g.canvas.transferToImageBitmap=="function"?Promise.resolve(g.g.canvas.transferToImageBitmap()):C?Promise.resolve(g.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(g.g.canvas):(g.i===void 0&&(g.i=document.createElement("canvas")),new Promise(function(P){g.i.height=g.g.canvas.height,g.i.width=g.g.canvas.width,g.i.getContext("2d",{}).drawImage(g.g.canvas,0,0,g.g.canvas.width,g.g.canvas.height),P(g.i)}))}function Sr(g,w){var C=g.g;if(g.m===void 0){var P=la(C,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),z=la(C,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),Z=C.createProgram();if(C.attachShader(Z,P),C.attachShader(Z,z),C.linkProgram(Z),!C.getProgramParameter(Z,C.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+C.getProgramInfoLog(Z));P=g.m=Z,C.useProgram(P),z=C.getUniformLocation(P,"sampler0"),g.j={I:C.getAttribLocation(P,"aVertex"),H:C.getAttribLocation(P,"aTex"),da:z},g.s=C.createBuffer(),C.bindBuffer(C.ARRAY_BUFFER,g.s),C.enableVertexAttribArray(g.j.I),C.vertexAttribPointer(g.j.I,2,C.FLOAT,!1,0,0),C.bufferData(C.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),C.STATIC_DRAW),C.bindBuffer(C.ARRAY_BUFFER,null),g.o=C.createBuffer(),C.bindBuffer(C.ARRAY_BUFFER,g.o),C.enableVertexAttribArray(g.j.H),C.vertexAttribPointer(g.j.H,2,C.FLOAT,!1,0,0),C.bufferData(C.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),C.STATIC_DRAW),C.bindBuffer(C.ARRAY_BUFFER,null),C.uniform1i(z,0)}P=g.j,C.useProgram(g.m),C.canvas.width=w.width,C.canvas.height=w.height,C.viewport(0,0,w.width,w.height),C.activeTexture(C.TEXTURE0),g.h.bindTexture2d(w.glName),C.enableVertexAttribArray(P.I),C.bindBuffer(C.ARRAY_BUFFER,g.s),C.vertexAttribPointer(P.I,2,C.FLOAT,!1,0,0),C.enableVertexAttribArray(P.H),C.bindBuffer(C.ARRAY_BUFFER,g.o),C.vertexAttribPointer(P.H,2,C.FLOAT,!1,0,0),C.bindFramebuffer(C.DRAW_FRAMEBUFFER?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,null),C.clearColor(0,0,0,0),C.clear(C.COLOR_BUFFER_BIT),C.colorMask(!0,!0,!0,!0),C.drawArrays(C.TRIANGLE_FAN,0,4),C.disableVertexAttribArray(P.I),C.disableVertexAttribArray(P.H),C.bindBuffer(C.ARRAY_BUFFER,null),g.h.bindTexture2d(0)}function Fh(g){this.g=g}var Dh=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function _u(g,w){return w+g}function ma(g,w){window[g]=w}function lr(g){var w=document.createElement("script");return w.setAttribute("src",g),w.setAttribute("crossorigin","anonymous"),new Promise(function(C){w.addEventListener("load",function(){C()},!1),w.addEventListener("error",function(){C()},!1),document.body.appendChild(w)})}function Ru(){return _t(this,function g(){return q(g,function(w){switch(w.g){case 1:return w.m=2,A(w,WebAssembly.instantiate(Dh),4);case 4:w.g=3,w.m=0;break;case 2:return w.m=0,w.j=null,w.return(!1);case 3:return w.return(!0)}})})}function Fn(g){if(this.g=g,this.listeners={},this.j={},this.F={},this.m={},this.s={},this.G=this.o=this.R=!0,this.C=Promise.resolve(),this.P="",this.B={},this.locateFile=g&&g.locateFile||_u,typeof window=="object")var w=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")w=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.S=w,g.options){w=a(Object.keys(g.options));for(var C=w.next();!C.done;C=w.next()){C=C.value;var P=g.options[C].default;P!==void 0&&(this.j[C]=typeof P=="function"?P():P)}}}r=Fn.prototype,r.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function Ou(g,w){return g.g.files===void 0?[]:typeof g.g.files=="function"?g.g.files(w):g.g.files}function fa(g){return _t(g,function w(){var C=this,P,z,Z,K,J,ne,pe,Se,Ue,Re,Ee;return q(w,function(de){switch(de.g){case 1:return P=C,C.R?(z=Ou(C,C.j),A(de,Ru(),2)):de.return();case 2:if(Z=de.h,typeof window=="object")return ma("createMediapipeSolutionsWasm",{locateFile:C.locateFile}),ma("createMediapipeSolutionsPackedAssets",{locateFile:C.locateFile}),ne=z.filter(function(h){return h.data!==void 0}),pe=z.filter(function(h){return h.data===void 0}),Se=Promise.all(ne.map(function(h){var S=io(P,h.url);if(h.path!==void 0){var I=h.path;S=S.then(function(R){return P.overrideFile(I,R),Promise.resolve(R)})}return S})),Ue=Promise.all(pe.map(function(h){return h.simd===void 0||h.simd&&Z||!h.simd&&!Z?lr(P.locateFile(h.url,P.S)):Promise.resolve()})).then(function(){return _t(P,function h(){var S,I,R=this;return q(h,function(D){if(D.g==1)return S=window.createMediapipeSolutionsWasm,I=window.createMediapipeSolutionsPackedAssets,A(D,S(I),2);R.h=D.h,D.g=0})})}),Re=function(){return _t(P,function h(){var S=this;return q(h,function(I){return S.g.graph&&S.g.graph.url?I=A(I,io(S,S.g.graph.url),0):(I.g=0,I=void 0),I})})}(),A(de,Promise.all([Ue,Se,Re]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return K=z.filter(function(h){return h.simd===void 0||h.simd&&Z||!h.simd&&!Z}).map(function(h){return P.locateFile(h.url,P.S)}),importScripts.apply(null,u(K)),A(de,createMediapipeSolutionsWasm(Module),6);case 6:C.h=de.h,C.l=new OffscreenCanvas(1,1),C.h.canvas=C.l,J=C.h.GL.createContext(C.l,{antialias:!1,alpha:!1,ba:typeof WebGL2RenderingContext<"u"?2:1}),C.h.GL.makeContextCurrent(J),de.g=4;break;case 7:if(C.l=document.createElement("canvas"),Ee=C.l.getContext("webgl2",{}),!Ee&&(Ee=C.l.getContext("webgl",{}),!Ee))return alert("Failed to create WebGL canvas context when passing video frame."),de.return();C.D=Ee,C.h.canvas=C.l,C.h.createContext(C.l,!0,!0,{});case 4:C.i=new C.h.SolutionWasm,C.R=!1,de.g=0}})})}function Ph(g){return _t(g,function w(){var C=this,P,z,Z,K,J,ne,pe,Se;return q(w,function(Ue){if(Ue.g==1){if(C.g.graph&&C.g.graph.url&&C.P===C.g.graph.url)return Ue.return();if(C.o=!0,!C.g.graph||!C.g.graph.url){Ue.g=2;return}return C.P=C.g.graph.url,A(Ue,io(C,C.g.graph.url),3)}for(Ue.g!=2&&(P=Ue.h,C.i.loadGraph(P)),z=a(Object.keys(C.B)),Z=z.next();!Z.done;Z=z.next())K=Z.value,C.i.overrideFile(K,C.B[K]);if(C.B={},C.g.listeners)for(J=a(C.g.listeners),ne=J.next();!ne.done;ne=J.next())pe=ne.value,Bh(C,pe);Se=C.j,C.j={},C.setOptions(Se),Ue.g=0})})}r.reset=function(){return _t(this,function g(){var w=this;return q(g,function(C){w.i&&(w.i.reset(),w.m={},w.s={}),C.g=0})})},r.setOptions=function(g,w){var C=this;if(w=w||this.g.options){for(var P=[],z=[],Z={},K=a(Object.keys(g)),J=K.next();!J.done;Z={K:Z.K,L:Z.L},J=K.next()){var ne=J.value;ne in this.j&&this.j[ne]===g[ne]||(this.j[ne]=g[ne],J=w[ne],J!==void 0&&(J.onChange&&(Z.K=J.onChange,Z.L=g[ne],P.push(function(pe){return function(){return _t(C,function Se(){var Ue,Re=this;return q(Se,function(Ee){if(Ee.g==1)return A(Ee,pe.K(pe.L),2);Ue=Ee.h,Ue===!0&&(Re.o=!0),Ee.g=0})})}}(Z))),J.graphOptionXref&&(ne={valueNumber:J.type===1?g[ne]:0,valueBoolean:J.type===0?g[ne]:!1,valueString:J.type===2?g[ne]:""},J=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),J.graphOptionXref),ne),z.push(J))))}(P.length!==0||z.length!==0)&&(this.o=!0,this.A=(this.A===void 0?[]:this.A).concat(z),this.u=(this.u===void 0?[]:this.u).concat(P))}};function Lh(g){return _t(g,function w(){var C=this,P,z,Z,K,J,ne,pe;return q(w,function(Se){switch(Se.g){case 1:if(!C.o)return Se.return();if(!C.u){Se.g=2;break}P=a(C.u),z=P.next();case 3:if(z.done){Se.g=5;break}return Z=z.value,A(Se,Z(),4);case 4:z=P.next(),Se.g=3;break;case 5:C.u=void 0;case 2:if(C.A){for(K=new C.h.GraphOptionChangeRequestList,J=a(C.A),ne=J.next();!ne.done;ne=J.next())pe=ne.value,K.push_back(pe);C.i.changeOptions(K),K.delete(),C.A=void 0}C.o=!1,Se.g=0}})})}r.initialize=function(){return _t(this,function g(){var w=this;return q(g,function(C){return C.g==1?A(C,fa(w),2):C.g!=3?A(C,Ph(w),3):A(C,Lh(w),0)})})};function io(g,w){return _t(g,function C(){var P=this,z,Z;return q(C,function(K){return w in P.F?K.return(P.F[w]):(z=P.locateFile(w,""),Z=fetch(z).then(function(J){return J.arrayBuffer()}),P.F[w]=Z,K.return(Z))})})}r.overrideFile=function(g,w){this.i?this.i.overrideFile(g,w):this.B[g]=w},r.clearOverriddenFiles=function(){this.B={},this.i&&this.i.clearOverriddenFiles()},r.send=function(g,w){return _t(this,function C(){var P=this,z,Z,K,J,ne,pe,Se,Ue,Re;return q(C,function(Ee){switch(Ee.g){case 1:return P.g.inputs?(z=1e3*(w==null?performance.now():w),A(Ee,P.C,2)):Ee.return();case 2:return A(Ee,P.initialize(),3);case 3:for(Z=new P.h.PacketDataList,K=a(Object.keys(g)),J=K.next();!J.done;J=K.next())if(ne=J.value,pe=P.g.inputs[ne]){e:{var de=P,h=g[ne];switch(pe.type){case"video":var S=de.m[pe.stream];if(S||(S=new Uo(de.h,de.D),de.m[pe.stream]=S),de=S,de.l===0&&(de.l=de.h.createTexture()),typeof HTMLVideoElement<"u"&&h instanceof HTMLVideoElement){var I=h.videoWidth;S=h.videoHeight}else typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(I=h.naturalWidth,S=h.naturalHeight):(I=h.width,S=h.height);S={glName:de.l,width:I,height:S},I=de.g,I.canvas.width=S.width,I.canvas.height=S.height,I.activeTexture(I.TEXTURE0),de.h.bindTexture2d(de.l),I.texImage2D(I.TEXTURE_2D,0,I.RGBA,I.RGBA,I.UNSIGNED_BYTE,h),de.h.bindTexture2d(0),de=S;break e;case"detections":for(S=de.m[pe.stream],S||(S=new Fh(de.h),de.m[pe.stream]=S),de=S,de.data||(de.data=new de.g.DetectionListData),de.data.reset(h.length),S=0;S<h.length;++S){I=h[S];var R=de.data,D=R.setBoundingBox,F=S,L=I.T,V=new Vs;Fe(V,1,L.Z),Fe(V,2,L.$),Fe(V,3,L.height),Fe(V,4,L.width),Fe(V,5,L.rotation),Fe(V,6,L.X);var j=L=new Rn;ur(j,1,Je(V,1)),ur(j,2,Je(V,2)),ur(j,3,Je(V,3)),ur(j,4,Je(V,4)),ur(j,5,Je(V,5));var Q=Je(V,6);if(Q!=null&&Q!=null){Xr(j.g,48);var te=j.g,oe=Q;Q=0>oe,oe=Math.abs(oe);var se=oe>>>0;for(oe=Math.floor((oe-se)/4294967296),oe>>>=0,Q&&(oe=~oe>>>0,se=(~se>>>0)+1,4294967295<se&&(se=0,oe++,4294967295<oe&&(oe=0))),Or=se,Fr=oe,Q=Or,se=Fr;0<se||127<Q;)te.push(Q&127|128),Q=(Q>>>7|se<<25)>>>0,se>>>=7;te.push(Q)}if(Bs(V,j),L=Do(L),D.call(R,F,L),I.O)for(R=0;R<I.O.length;++R)V=I.O[R],j=!!V.visibility,D=de.data,F=D.addNormalizedLandmark,L=S,V=Object.assign(Object.assign({},V),{visibility:j?V.visibility:0}),j=new oo,Fe(j,1,V.x),Fe(j,2,V.y),Fe(j,3,V.z),V.visibility&&Fe(j,4,V.visibility),te=V=new Rn,ur(te,1,Je(j,1)),ur(te,2,Je(j,2)),ur(te,3,Je(j,3)),ur(te,4,Je(j,4)),ur(te,5,Je(j,5)),Bs(j,te),V=Do(V),F.call(D,L,V);if(I.M)for(R=0;R<I.M.length;++R){if(D=de.data,F=D.addClassification,L=S,V=I.M[R],j=new mn,Fe(j,2,V.Y),V.index&&Fe(j,1,V.index),V.label&&Fe(j,3,V.label),V.displayName&&Fe(j,4,V.displayName),te=V=new Rn,se=Je(j,1),se!=null&&se!=null)if(Xr(te.g,8),Q=te.g,0<=se)Xr(Q,se);else{for(oe=0;9>oe;oe++)Q.push(se&127|128),se>>=7;Q.push(1)}ur(te,2,Je(j,2)),Q=Je(j,3),Q!=null&&(Q=bt(Q),Xr(te.g,26),Xr(te.g,Q.length),Pr(te,te.g.end()),Pr(te,Q)),Q=Je(j,4),Q!=null&&(Q=bt(Q),Xr(te.g,34),Xr(te.g,Q.length),Pr(te,te.g.end()),Pr(te,Q)),Bs(j,te),V=Do(V),F.call(D,L,V)}}de=de.data;break e;default:de={}}}switch(Se=de,Ue=pe.stream,pe.type){case"video":Z.pushTexture2d(Object.assign(Object.assign({},Se),{stream:Ue,timestamp:z}));break;case"detections":Re=Se,Re.stream=Ue,Re.timestamp=z,Z.pushDetectionList(Re);break;default:throw Error("Unknown input config type: '"+pe.type+"'")}}return P.i.send(Z),A(Ee,P.C,4);case 4:Z.delete(),Ee.g=0}})})};function Fu(g,w,C){return _t(g,function P(){var z,Z,K,J,ne,pe,Se=this,Ue,Re,Ee,de,h,S,I,R;return q(P,function(D){switch(D.g){case 1:if(!C)return D.return(w);for(z={},Z=0,K=a(Object.keys(C)),J=K.next();!J.done;J=K.next())ne=J.value,pe=C[ne],typeof pe!="string"&&pe.type==="texture"&&w[pe.stream]!==void 0&&++Z;1<Z&&(Se.G=!1),Ue=a(Object.keys(C)),J=Ue.next();case 2:if(J.done){D.g=4;break}if(Re=J.value,Ee=C[Re],typeof Ee=="string")return I=z,R=Re,A(D,Du(Se,Re,w[Ee]),14);if(de=w[Ee.stream],Ee.type==="detection_list"){if(de){for(var F=de.getRectList(),L=de.getLandmarksList(),V=de.getClassificationsList(),j=[],Q=0;Q<F.size();++Q){var te=F.get(Q);e:{var oe=new Vs;for(te=new no(te);ar(te);)switch(te.i){case 13:var se=Ct(te);Fe(oe,1,se);break;case 21:se=Ct(te),Fe(oe,2,se);break;case 29:se=Ct(te),Fe(oe,3,se);break;case 37:se=Ct(te),Fe(oe,4,se);break;case 45:se=Ct(te),Fe(oe,5,se);break;case 48:se=Oo(te.g),Fe(oe,6,se);break;default:if(!Tr(oe,te))break e}}oe={Z:wr(oe,1),$:wr(oe,2),height:wr(oe,3),width:wr(oe,4),rotation:wr(oe,5,0),X:ln(oe,6,0)},te=Ls($u(L.get(Q)),oo).map(pa);var ce=V.get(Q);e:for(se=new Ms,ce=new no(ce);ar(ce);)switch(ce.i){case 10:se.addClassification(Ps(ce,new mn,Eu));break;default:if(!Tr(se,ce))break e}oe={T:oe,O:te,M:ca(se)},j.push(oe)}F=j}else F=[];z[Re]=F,D.g=7;break}if(Ee.type==="proto_list"){if(de){for(F=Array(de.size()),L=0;L<de.size();L++)F[L]=de.get(L);de.delete()}else F=[];z[Re]=F,D.g=7;break}if(de===void 0){D.g=3;break}if(Ee.type==="float_list"){z[Re]=de,D.g=7;break}if(Ee.type==="proto"){z[Re]=de,D.g=7;break}if(Ee.type!=="texture")throw Error("Unknown output config type: '"+Ee.type+"'");return h=Se.s[Re],h||(h=new Uo(Se.h,Se.D),Se.s[Re]=h),A(D,so(h,de,Se.G),13);case 13:S=D.h,z[Re]=S;case 7:Ee.transform&&z[Re]&&(z[Re]=Ee.transform(z[Re])),D.g=3;break;case 14:I[R]=D.h;case 3:J=Ue.next(),D.g=2;break;case 4:return D.return(z)}})})}function Du(g,w,C){return _t(g,function P(){var z=this,Z;return q(P,function(K){return typeof C=="number"||C instanceof Uint8Array||C instanceof z.h.Uint8BlobList?K.return(C):C instanceof z.h.Texture2dDataOut?(Z=z.s[w],Z||(Z=new Uo(z.h,z.D),z.s[w]=Z),K.return(so(Z,C,z.G))):K.return(void 0)})})}function Bh(g,w){for(var C=w.name||"$",P=[].concat(u(w.wants)),z=new g.h.StringList,Z=a(w.wants),K=Z.next();!K.done;K=Z.next())z.push_back(K.value);Z=g.h.PacketListener.implement({onResults:function(J){for(var ne={},pe=0;pe<w.wants.length;++pe)ne[P[pe]]=J.get(pe);var Se=g.listeners[C];Se&&(g.C=Fu(g,ne,w.outs).then(function(Ue){Ue=Se(Ue);for(var Re=0;Re<w.wants.length;++Re){var Ee=ne[P[Re]];typeof Ee=="object"&&Ee.hasOwnProperty&&Ee.hasOwnProperty("delete")&&Ee.delete()}Ue&&(g.C=Ue)}))}}),g.i.attachMultiListener(z,Z),z.delete()}r.onResults=function(g,w){this.listeners[w||"$"]=g},he("Solution",Fn),he("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Mh(g){g=Au(g);var w=g.getMesh();if(!w)return g;var C=new Float32Array(w.getVertexBufferList());w.getVertexBufferList=function(){return C};var P=new Uint32Array(w.getIndexBufferList());return w.getIndexBufferList=function(){return P},g}var ha={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(g){return g.map(Mh)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(g){return g.map(function(w){return Ls($u(w),oo).map(pa)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}},da=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],ga=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],xa=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ya=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],ba=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],va=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Pu=[].concat(u(da),u(ga),u(xa),u(ya),u(ba),u(va));function Lu(g){g=g||{},g=Object.assign(Object.assign({},ha),g),this.g=new Fn(g)}r=Lu.prototype,r.close=function(){return this.g.close(),Promise.resolve()},r.onResults=function(g){this.g.onResults(g)},r.initialize=function(){return _t(this,function g(){var w=this;return q(g,function(C){return A(C,w.g.initialize(),0)})})},r.reset=function(){this.g.reset()},r.send=function(g){return _t(this,function w(){var C=this;return q(w,function(P){return A(P,C.g.send(g),0)})})},r.setOptions=function(g){this.g.setOptions(g)},he("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}}),he("FaceMesh",Lu),he("FACEMESH_LIPS",da),he("FACEMESH_LEFT_EYE",ga),he("FACEMESH_LEFT_EYEBROW",xa),he("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]),he("FACEMESH_RIGHT_EYE",ya),he("FACEMESH_RIGHT_EYEBROW",ba),he("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]),he("FACEMESH_FACE_OVAL",va),he("FACEMESH_CONTOURS",Pu),he("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),he("matrixDataToMatrix",function(g){for(var w=g.getCols(),C=g.getRows(),P=g.getPackedDataList(),z=[],Z=0;Z<C;Z++)z.push(Array(w));for(Z=0;Z<C;Z++)for(var K=0;K<w;K++){var J=g.getLayout()===1?Z*w+K:K*C+Z;z[Z][K]=P[J]}return z}),he("VERSION","0.4.1633559619")}).call(Gx)});var Ta=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},zo=class{refCount(e){return pr("refCount")}incRef(e){return pr("incRef")}timerAvailable(){return!0}time(e){return pr("time")}read(e){return pr("read")}readSync(e){return pr("readSync")}readToGPU(e,t){return pr("readToGPU")}numDataIds(){return pr("numDataIds")}disposeData(e,t){return pr("disposeData")}write(e,t,n){return pr("write")}move(e,t,n,o,s){return pr("move")}createTensorFromGPUData(e,t,n){return pr("createTensorFromGPUData")}memory(){return pr("memory")}floatPrecision(){return pr("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return pr("dispose")}};function pr(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function Y2(r){let e=r.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,Vu(r,e,t)}function yS(r,e){if(r.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${r.length}Second array length was ${e.length}`);let t=r.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,Vu(r,t,n),Vu(e,t,n)}function zs(r,e,t){return Math.max(r,Math.min(e,t))}function bS(r){return r%2===0?r:r+1}function Vu(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}function vS(r){let e=0;for(let t=0;t<r.length;t++)e+=r[t];return e}function wS(r,e){let t=Math.random();return e*t+(1-t)*r}function TS(r,e){let t=0;for(let n=0;n<r.length;n++){let o=Number(r[n])-Number(e[n]);t+=o*o}return t}function _(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function at(r,e,t=""){_(Br(r,e),()=>t+` Shapes ${r} and ${e} must match`)}function Er(r){_(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ae(r){if(r.length===0)return 1;let e=r[0];for(let t=1;t<r.length;t++)e*=r[t];return e}function SS(r){return r.length===0}function Br(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Dn(r){return r%1===0}function CS(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;{let e=Math.exp(2*r);return(e-1)/(e+1)}}function ES(r){let e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function NS(r){let e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t;return Y2(e),e}function Ho(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function IS(r,e=o=>0,t,n){return new Promise((o,s)=>{let i=0,a=()=>{if(r()){o();return}i++;let u=e(i);if(t!=null&&i>=t){s();return}n!=null?n(a,u):setTimeout(a,u)};a()})}function $S(r,e){let t=1,n=-1;for(let s=0;s<r.length;++s)if(r[s]>=0)t*=r[s];else if(r[s]===-1){if(n!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${n} and dim ${s}`);n=s}else if(r[s]<0)throw Error(`Shapes can not be < 0. Found ${r[s]} at dim ${s}`);if(n===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${r}`);return r}if(t===0)throw Error(`Cannot infer the missing size in [${r}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);let o=r.slice();return o[n]=e/t,o}function uo(r,e){let t=e.length;return r=r==null?e.map((n,o)=>o):[].concat(r),_(r.every(n=>n>=-t&&n<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${r}`),_(r.every(n=>Dn(n)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(n=>n<0?t+n:n)}function Wh(r,e){let t=[],n=[],o=e!=null&&Array.isArray(e)&&e.length===0,s=e==null||o?null:uo(e,r).sort(),i=0;for(let a=0;a<r.length;++a){if(s!=null){if(s[i]===a&&r[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${r[a]}' is not 1`);(s[i]==null||s[i]>a)&&r[a]===1&&(t.push(r[a]),n.push(a)),s[i]<=a&&i++}r[a]!==1&&(t.push(r[a]),n.push(a))}return{newShape:t,keptDims:n}}function Hh(r,e){let t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else throw new Error(`Unknown data type ${r}`);return t}function Kh(r,e){let t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else if(r==="string")t=new Array(e);else throw new Error(`Unknown data type ${r}`);return t}function jh(r,e){for(let t=0;t<r.length;t++){let n=r[t];if(isNaN(n)||!isFinite(n))throw Error(`A tensor of type ${e} being uploaded contains ${n}.`)}}function qh(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function kS(r,e){return!(e==="complex64"||e==="float32"&&r!=="complex64"||e==="int32"&&r!=="float32"&&r!=="complex64"||e==="bool"&&r==="bool")}function Ws(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function Xh(r){if(r==null)return 0;let e=0;return r.forEach(t=>e+=t.length),e}function Hs(r){return typeof r=="string"||r instanceof String}function Z2(r){return typeof r=="boolean"}function Q2(r){return typeof r=="number"}function Ks(r){return Array.isArray(r)?Ks(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":Q2(r)?"float32":Hs(r)?"string":Z2(r)?"bool":"float32"}function js(r){return!!(r&&r.constructor&&r.call&&r.apply)}function qs(r,e){for(let t=e;t<r;++t)if(r%t===0)return t;return r}function fn(r){let e=r.length;if(e<2)return[];let t=new Array(e-1);t[e-2]=r[e-1];for(let n=e-3;n>=0;--n)t[n]=t[n+1]*r[n+1];return t}function J2(r,e,t,n=!1){let o=new Array;if(e.length===1){let s=e[0]*(n?2:1);for(let i=0;i<s;i++)o[i]=t[r+i]}else{let s=e[0],i=e.slice(1),a=i.reduce((u,l)=>u*l)*(n?2:1);for(let u=0;u<s;u++)o[u]=J2(r+u*a,i,t,n)}return o}function Wo(r,e,t=!1){if(r.length===0)return e[0];let n=r.reduce((o,s)=>o*s)*(t?2:1);if(n===0)return[];if(n!==e.length)throw new Error(`[${r}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return J2(0,r,e,t)}function AS(r,e){if(Array.isArray(r))return r;if(e==="float32")return r instanceof Float32Array?r:new Float32Array(r);if(e==="int32")return r instanceof Int32Array?r:new Int32Array(r);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(r));throw new Error(`Unknown dtype ${e}`)}function Sa(r,e){let t=Xs(r,e);for(let n=0;n<t.length;n++)t[n]=1;return t}function Xs(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${e}`)}function _S(r,e){let t=r.reduce((n,o)=>n*o,1);if(e==null||e==="float32")return Wo(r,new Float32Array(t));if(e==="int32")return Wo(r,new Int32Array(t));if(e==="bool")return Wo(r,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function et(r){r.forEach(e=>{_(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function RS(r,e,t){if(e===0)return 0;if(e===1)return r[0];let n=r[r.length-1];for(let o=0;o<r.length-1;++o)n+=t[o]*r[o];return n}function OS(r,e,t){if(e===0)return[];if(e===1)return[r];let n=new Array(e);for(let o=0;o<n.length-1;++o)n[o]=Math.floor(r/t[o]),r-=n[o]*t[o];return n[n.length-1]=r,n}function Ko(r){return r&&r.then&&typeof r.then=="function"}var e3="tfjsflags",Ca=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=DS,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let o=this.urlFlags[e];U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${o}.`),this.set(e,o)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Ko(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let e=this.getQueryParams(this.global.location.search);e3 in e&&e[e3].split(",").forEach(n=>{let[o,s]=n.split(":");this.urlFlags[o]=LS(o,s)})}};function DS(r){let e={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...n)=>(PS(e,n[0],n[1]),n.join("="))),e}function PS(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function LS(r,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${r}.`)}function U(){return Yh}var Yh=null;function t3(r){Yh=r}var Zh;function Qh(){if(Zh==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");Zh=r}return Zh}function BS(){let r=Qh();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function Ea(r,e){let t=BS();if(t.has(r))return t.get(r);{let n=e();return t.set(r,n),t.get(r)}}var Na="Abs",Uu="Acos",Gu="Acosh",lo="Add",zu="AddN",Wu="All",Hu="Any",Ku="ArgMax",ju="ArgMin",qu="Asin",Xu="Asinh",Yu="Atan",Zu="Atanh",Qu="Atan2",Ju="AvgPool",r3="AvgPoolGrad",el="AvgPool3D",n3="AvgPool3DGrad",tl="BatchMatMul",rl="BatchToSpaceND",nl="Bincount";var ol="BroadcastArgs",jo="Cast",Ys="Ceil",sl="ClipByValue",Ia="Complex",il="ComplexAbs",al="Concat",ul="Conv2D",ll="Conv2DBackpropFilter",cl="Conv2DBackpropInput",pl="Conv3D",o3="Conv3DBackpropFilterV2",ml="Conv3DBackpropInputV2",fl="Cos",hl="Cosh",dl="Cumprod",gl="Cumsum",xl="CropAndResize",yl="DenseBincount",bl="DepthToSpace",vl="DepthwiseConv2dNative",wl="DepthwiseConv2dNativeBackpropFilter",Tl="DepthwiseConv2dNativeBackpropInput",Sl="Diag",Cl="Dilation2D";var El="RealDiv",Nl="Einsum",Il="Elu",s3="EluGrad",$l="Erf",Zs="Equal",Qs="Exp",kl="ExpandDims",Js="Expm1",Al="FFT",_l="Fill",Rl="FlipLeftRight",ei="Floor",Ol="FloorDiv",Fl="FusedBatchNorm",Dl="GatherV2",Pl="GatherNd",ti="Greater",ri="GreaterEqual",qo="Identity",Ll="IFFT",Bl="Imag",Ml="IsFinite",Vl="IsInf",Ul="IsNan",Gl="LeakyRelu",ni="Less",oi="LessEqual",zl="LinSpace",si="Log",Wl="Log1p",Hl="LogicalAnd",Kl="LogicalNot",jl="LogicalOr";var ql="LRN",i3="LRNGrad",Xl="Max",ii="Maximum",Yl="MaxPool",a3="MaxPoolGrad",Zl="MaxPool3D",u3="MaxPool3DGrad",Ql="MaxPoolWithArgmax",Jl="Mean",ec="Min",ai="Minimum",tc="MirrorPad",rc="Mod",nc="Multinomial",ui="Multiply",$a="Neg",li="NotEqual",oc="NonMaxSuppressionV3",sc="NonMaxSuppressionV4",ic="NonMaxSuppressionV5",ac="OnesLike",uc="OneHot",lc="Pack",cc="PadV2";var pc="Pow",mc="Prelu",ka="Prod",fc="RaggedGather",hc="RaggedRange",dc="RaggedTensorToTensor",gc="Range",Aa="Real",xc="Reciprocal",yc="Relu",bc="Reshape",vc="ResizeNearestNeighbor",l3="ResizeNearestNeighborGrad",wc="ResizeBilinear",c3="ResizeBilinearGrad",Tc="Relu6",Sc="Reverse",Cc="Round",ci="Rsqrt",Ec="ScatterNd",Nc="SearchSorted",Ic="Select",$c="Selu",_a="Slice",kc="Sin",Ac="Sinh",_c="Sign",pi="Sigmoid",Rc="Softplus",mi="Sqrt",Oc="Sum",Fc="SpaceToBatchND",Dc="SplitV",Pc="Softmax",Lc="SparseFillEmptyRows",Bc="SparseReshape",Mc="SparseSegmentMean",Vc="SparseSegmentSum",Uc="SparseToDense",fi="SquaredDifference",p3="Square",Gc="StridedSlice",zc="StringNGrams",Wc="StringSplit",Hc="StringToHashBucketFast",hi="Sub",Kc="Tan",jc="Tanh",di="Tile",qc="TopK",Xc="Transform",gi="Transpose",Yc="Unique",Zc="Unpack",Qc="UnsortedSegmentSum";var Jc="ZerosLike",ep="Step",Ra="FromPixels",tp="RotateWithOffset",Oa="_FusedMatMul",Fa="FusedConv2D",Da="FusedDepthwiseConv2D";function Pn(...r){U().getBool("IS_TEST")||U().getBool("PROD")||console.warn(...r)}function MS(...r){U().getBool("IS_TEST")||U().getBool("PROD")||console.log(...r)}var rp=Ea("kernelRegistry",()=>new Map),VS=Ea("gradRegistry",()=>new Map);function Pa(r,e){let t=h3(r,e);return rp.get(t)}function Jh(r){return VS.get(r)}function ed(r){let e=rp.entries(),t=[];for(;;){let{done:n,value:o}=e.next();if(n)break;let[s,i]=o,[a]=s.split("_");a===r&&t.push(i)}return t}function f3(r){let{kernelName:e,backendName:t}=r,n=h3(e,t);rp.has(n)&&Pn(`The kernel '${e}' for backend '${t}' is already registered`),rp.set(n,r)}function h3(r,e){return`${e}_${r}`}var N={};Ke(N,{arraysEqual:()=>Br,assert:()=>_,assertNonNegativeIntegerDimensions:()=>et,assertNonNull:()=>Er,assertShapesMatch:()=>at,bytesFromStringArray:()=>Xh,bytesPerElement:()=>Ws,checkConversionForErrors:()=>jh,clamp:()=>zs,computeStrides:()=>fn,convertBackendValuesAndArrayBuffer:()=>AS,createScalarValue:()=>jS,createShuffledIndices:()=>NS,decodeString:()=>wi,distSquared:()=>TS,encodeString:()=>vi,fetch:()=>XS,fingerPrint64:()=>KS,flatten:()=>po,getArrayFromDType:()=>Kh,getTypedArrayFromDType:()=>Hh,hasEncodingLoss:()=>kS,hexToLong:()=>La,indexToLoc:()=>OS,inferDtype:()=>Ks,inferFromImplicitShape:()=>$S,isBoolean:()=>Z2,isFunction:()=>js,isInt:()=>Dn,isNumber:()=>Q2,isPromise:()=>Ko,isScalarShape:()=>SS,isString:()=>Hs,isTypedArray:()=>qt,isValidDtype:()=>qh,locToIndex:()=>RS,makeOnesTypedArray:()=>Sa,makeZerosNestedTypedArray:()=>_S,makeZerosTypedArray:()=>Xs,nearestDivisor:()=>qs,nearestLargerEven:()=>bS,now:()=>Jo,parseAxisParam:()=>uo,randUniform:()=>wS,repeatedTry:()=>IS,rightPad:()=>Ho,shuffle:()=>Y2,shuffleCombo:()=>yS,sizeFromShape:()=>Ae,sizeToSquarishShape:()=>ES,squeezeShape:()=>Wh,sum:()=>vS,swap:()=>Vu,tanh:()=>CS,toNestedArray:()=>Wo,toTypedArray:()=>bi});var od=zh(E3());var Qo=od.default||od;function La(r){return Qo.fromString(r,!0,16)}var I3=La("c3a5c85c97cb3127"),Zo=La("b492b66fbe98f273"),Mt=La("9ae16a3b2f90404f");function nd(r){return r.xor(r.shru(47))}function $3(r,e,t){let n=r.slice(e,e+t);return Qo.fromBytes(Array.from(n),!0,!0)}function tt(r,e){return $3(r,e,8)}function N3(r,e){return $3(r,e,4)}function Et(r,e){return e===0?r:r.shru(e).or(r.shl(64-e))}function co(r,e,t=La("9ddfea08eb382d69")){let n=r.xor(e).mul(t);n=n.xor(n.shru(47));let o=e.xor(n).mul(t);return o=o.xor(o.shru(47)),o=o.mul(t),o}function GS(r,e,t,n,o,s){o=o.add(r),s=Et(s.add(o).add(n),21);let i=o;return o=o.add(e),o=o.add(t),s=s.add(Et(o,44)),[o.add(n),s.add(i)]}function op(r,e,t,n){return GS(tt(r,e),tt(r,e+8),tt(r,e+16),tt(r,e+24),t,n)}function zS(r,e=r.length){if(e>=8){let t=Mt.add(e*2),n=tt(r,0).add(Mt),o=tt(r,e-8),s=Et(o,37).mul(t).add(n),i=Et(n,25).add(o).mul(t);return co(s,i,t)}if(e>=4){let t=Mt.add(e*2),n=N3(r,0);return co(n.shl(3).add(e),N3(r,e-4),t)}if(e>0){let t=r[0],n=r[e>>1],o=r[e-1],s=t+(n<<8),i=e+(o<<2);return nd(Mt.mul(s).xor(I3.mul(i))).mul(Mt)}return Mt}function WS(r,e=r.length){let t=Mt.add(e*2),n=tt(r,0).mul(Zo),o=tt(r,8),s=tt(r,e-8).mul(t),i=tt(r,e-16).mul(Mt);return co(Et(n.add(o),43).add(Et(s,30)).add(i),n.add(Et(o.add(Mt),18)).add(s),t)}function HS(r,e=r.length){let t=Mt.add(e*2),n=tt(r,0).mul(Mt),o=tt(r,8),s=tt(r,e-8).mul(t),i=tt(r,e-16).mul(Mt),a=Et(n.add(o),43).add(Et(s,30)).add(i),u=co(a,n.add(Et(o.add(Mt),18)).add(s),t),l=tt(r,16).mul(t),c=tt(r,24),p=a.add(tt(r,e-32)).mul(t),m=u.add(tt(r,e-24)).mul(t);return co(Et(l.add(c),43).add(Et(p,30)).add(m),l.add(Et(c.add(n),18)).add(p),t)}function KS(r,e=r.length){let t=Qo.fromNumber(81,!0);if(e<=32)return e<=16?zS(r,e):WS(r,e);if(e<=64)return HS(r,e);let n=t,o=t.mul(Zo).add(113),s=nd(o.mul(Mt).add(113)).mul(Mt),i=[Qo.UZERO,Qo.UZERO],a=[Qo.UZERO,Qo.UZERO];n=n.mul(Mt).add(tt(r,0));let u=0,l=(e-1>>6)*64,c=l+(e-1&63)-63;do n=Et(n.add(o).add(i[0]).add(tt(r,u+8)),37).mul(Zo),o=Et(o.add(i[1]).add(tt(r,u+48)),42).mul(Zo),n=n.xor(a[1]),o=o.add(i[0]).add(tt(r,u+40)),s=Et(s.add(a[0]),33).mul(Zo),i=op(r,u,i[1].mul(Zo),n.add(a[0])),a=op(r,u+32,s.add(a[1]),o.add(tt(r,u+16))),[s,n]=[n,s],u+=64;while(u!==l);let p=Zo.add(s.and(255).shl(1));return u=c,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),n=Et(n.add(o).add(i[0]).add(tt(r,u+8)),37).mul(p),o=Et(o.add(i[1]).add(tt(r,u+48)),42).mul(p),n=n.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(tt(r,u+40))),s=Et(s.add(a[0]),33).mul(p),i=op(r,u,i[1].mul(p),n.add(a[0])),a=op(r,u+32,s.add(a[1]),o.add(tt(r,u+16))),[s,n]=[n,s],co(co(i[0],a[0],p).add(nd(o).mul(I3)).add(s),co(i[1],a[1],p).add(n),p)}function jS(r,e){return e==="string"?vi(r):bi([r],e)}function qS(r,e){return r instanceof Float32Array&&e==="float32"||r instanceof Int32Array&&e==="int32"||r instanceof Uint8Array&&e==="bool"}function bi(r,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=po(r)),U().getBool("DEBUG")&&jh(r,e),qS(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){let t=new Uint8Array(r.length);for(let n=0;n<t.length;++n)Math.round(r[n])!==0&&(t[n]=1);return t}else throw new Error(`Unknown data type ${e}`)}function Jo(){return U().platform.now()}function XS(r,e){return U().platform.fetch(r,e)}function vi(r,e="utf-8"){return e=e||"utf-8",U().platform.encode(r,e)}function wi(r,e="utf-8"){return e=e||"utf-8",U().platform.decode(r,e)}function qt(r){return U().platform.isTypedArray(r)}function po(r,e=[],t=!1){if(e==null&&(e=[]),typeof r=="boolean"||typeof r=="number"||typeof r=="string"||Ko(r)||r==null||qt(r)&&t)e.push(r);else if(Array.isArray(r)||qt(r))for(let n=0;n<r.length;++n)po(r[n],e,t);else{let n=-1;for(let o of Object.keys(r))/^([1-9]+[0-9]*|0)$/.test(o)&&(n=Math.max(n,Number(o)));for(let o=0;o<=n;o++)po(r[o],e,t)}return e}var sp=class{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new sd)}profileKernel(e,t,n){let o,s=()=>{o=n()},i,a=Jo();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let l of o)l.dataSync();i=Promise.resolve({kernelMs:Jo()-a})}if(U().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<o.length;l++){let c=o[l];c.data().then(p=>{YS(p,c.dtype,e)})}return{kernelName:e,outputs:o,inputs:t,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:o,inputs:s,extraInfo:i}=e;n.forEach(a=>{Promise.all([a.data(),o,i]).then(u=>{this.logger.logKernelProfile(t,a,u[0],u[1],s,u[2])})})}};function YS(r,e,t){if(e!=="float32")return!1;for(let n=0;n<r.length;n++){let o=r[n];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${t}'`),!0}return!1}var sd=class{logKernelProfile(e,t,n,o,s,i){let a=typeof o=="number"?Ho(`${o}ms`,9):o.error,u=Ho(e,25),l=t.rank,c=t.size,p=Ho(t.shape.toString(),14),m="";for(let f in s){let d=s[f];if(d!=null){let y=d.shape||t.shape,x=y.length;m+=`${f}: ${x}D ${x>0?y:""} `}}console.log(`%c${u}	%c${a}	%c${l}D ${p}	%c${c}	%c${m}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function k3(r,e,t){let n={},o={};for(let u=0;u<e.length;u++)n[e[u].id]=!0;for(let u=0;u<r.length;u++){let l=r[u],c=l.inputs;for(let p in c){let m=c[p],f=!1;for(let d=0;d<e.length;d++)if(n[m.id]){l.outputs.forEach(y=>n[y.id]=!0),f=!0,o[l.id]=!0;break}if(f)break}}let s={};s[t.id]=!0;let i={};for(let u=r.length-1;u>=0;u--){let l=r[u],c=l.inputs;for(let p=0;p<l.outputs.length;p++)if(s[l.outputs[p].id]){for(let m in c)s[c[m].id]=!0,i[l.id]=!0;break}}let a=[];for(let u=0;u<r.length;u++){let l=r[u];if(o[l.id]&&i[l.id]){let c={};for(let m in l.inputs){let f=l.inputs[m];n[f.id]&&(c[m]=f)}let p=Object.assign({},l);p.inputs=c,p.outputs=l.outputs,a.push(p)}}return a}function A3(r,e,t,n){for(let o=e.length-1;o>=0;o--){let s=e[o],i=[];if(s.outputs.forEach(u=>{let l=r[u.id];l!=null?i.push(l):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let u in s.inputs){if(!(u in a))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(a)}.`);let l=t(()=>a[u]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${l.dtype}'`);let c=s.inputs[u];if(!Br(l.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${u}' has shape '${l.shape}', which does not match the shape of the input '${c.shape}'`);if(r[c.id]==null)r[c.id]=l;else{let p=r[c.id];r[c.id]=n(p,l),p.dispose()}}}}var _3=20,Ba=3,id=7;function R3(r,e,t,n){let o=fn(e),s=ZS(r,e,t,o),i=e.length,a=ip(r,e,t,o,s),u=["Tensor"];return n&&(u.push(`  dtype: ${t}`),u.push(`  rank: ${i}`),u.push(`  shape: [${e}]`),u.push("  values:")),u.push(a.map(l=>"    "+l).join(`
`)),u.join(`
`)}function ZS(r,e,t,n){let o=Ae(e),s=n[n.length-1],i=new Array(s).fill(0),a=e.length,u=t==="complex64"?Va(r):r;if(a>1)for(let l=0;l<o/s;l++){let c=l*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Ma(u[c+p],0,t).length)}return i}function Ma(r,e,t){let n;return Array.isArray(r)?n=`${parseFloat(r[0].toFixed(id))} + ${parseFloat(r[1].toFixed(id))}j`:Hs(r)?n=`'${r}'`:t==="bool"?n=O3(r):n=parseFloat(r.toFixed(id)).toString(),Ho(n,e)}function O3(r){return r===0?"false":"true"}function ip(r,e,t,n,o,s=!0){let i=t==="complex64"?2:1,a=e[0],u=e.length;if(u===0){if(t==="complex64"){let y=Va(r);return[Ma(y[0],0,t)]}return t==="bool"?[O3(r[0])]:[r[0].toString()]}if(u===1){if(a>_3){let x=Ba*i,b=Array.from(r.slice(0,x)),$=Array.from(r.slice((a-Ba)*i,a*i));return t==="complex64"&&(b=Va(b),$=Va($)),["["+b.map((A,O)=>Ma(A,o[O],t)).join(", ")+", ..., "+$.map((A,O)=>Ma(A,o[a-Ba+O],t)).join(", ")+"]"]}return["["+(t==="complex64"?Va(r):Array.from(r)).map((x,b)=>Ma(x,o[b],t)).join(", ")+"]"]}let l=e.slice(1),c=n.slice(1),p=n[0]*i,m=[];if(a>_3){for(let y=0;y<Ba;y++){let x=y*p,b=x+p;m.push(...ip(r.slice(x,b),l,t,c,o,!1))}m.push("...");for(let y=a-Ba;y<a;y++){let x=y*p,b=x+p;m.push(...ip(r.slice(x,b),l,t,c,o,y===a-1))}}else for(let y=0;y<a;y++){let x=y*p,b=x+p;m.push(...ip(r.slice(x,b),l,t,c,o,y===a-1))}let f=u===2?",":"";m[0]="["+(a>0?m[0]+f:"");for(let y=1;y<m.length-1;y++)m[y]=" "+m[y]+f;let d=`,
`;for(let y=2;y<u;y++)d+=`
`;return m[m.length-1]=" "+m[m.length-1]+"]"+(s?"":d),m}function Va(r){let e=[];for(let t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var Jr=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=Ae(e),n!=null){let o=n.length;_(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Kh(t,this.size),this.strides=fn(e)}set(e,...t){t.length===0&&(t=[0]),_(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let o of e){if(o<0||o>=this.shape[t]){let s=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(s)}t++}let n=e[e.length-1];for(let o=0;o<e.length-1;++o)n+=this.strides[o]*e[o];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Qr().makeTensor(this.values,this.shape,this.dtype)}},Qr=null,Ti=null,QS=null;function F3(r){Qr=r}function D3(r){Ti=r}function P3(r){QS=r}var Pe=class{constructor(e,t,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Ae(e),this.strides=fn(e),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return Ti.buffer(this.shape,this.dtype,e)}bufferSync(){return Ti.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return Wo(this.shape,e,this.dtype==="complex64")}arraySync(){return Wo(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let e=Qr().read(this.dataId);if(this.dtype==="string"){let t=await e;try{return t.map(n=>wi(n))}catch(n){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),Qr().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=Qr().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>wi(t))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await Qr().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(Qr().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Ti.print(this,e)}clone(){return this.throwIfDisposed(),Ti.clone(this)}toString(e=!1){let t=this.dataSync();return R3(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Ti.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Qr().makeVariable(this,e,t,n)}};Object.defineProperty(Pe,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function JS(){return Ea("Tensor",()=>Pe)}JS();var Ln=class extends Pe{constructor(e,t,n,o){super(e.shape,e.dtype,e.dataId,o),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Br(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Qr().disposeTensor(this),this.dataId=e.dataId,Qr().incRef(this,null)}dispose(){Qr().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Ln,Symbol.hasInstance,{value:r=>r instanceof Pe&&r.assign!=null&&r.assign instanceof Function});var ad;(function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"})(ad||(ad={}));var ud;(function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"})(ud||(ud={}));var ld;(function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"})(ld||(ld={}));var cd;(function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"})(cd||(cd={}));var pd;(function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"})(pd||(pd={}));var eC={float32:cd,int32:ud,bool:ld,complex64:pd};function Lt(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${r} with ${e}`)}return eC[r][e]}function es(r){return Lt(r,"int32")}function Ne(r,e){if(r.dtype===e.dtype)return[r,e];let t=Lt(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function L3(r,e){_(r.dtype===e.dtype,()=>`The dtypes of the first(${r.dtype}) and second(${e.dtype}) input must match`)}function ap(r){let e=[];return B3(r,e,new Set),e}function B3(r,e,t){if(r==null)return;if(r instanceof Pe){e.push(r);return}if(!tC(r))return;let n=r;for(let o in n){let s=n[o];t.has(s)||(t.add(s),B3(s,e,t))}}function tC(r){return Array.isArray(r)||typeof r=="object"}function md(r){return r.kernelName!=null}var up=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},mo=class{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new up}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Pn(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new sp(this.backendInstance),!0}setupRegisteredKernels(){ed(this.backendName).forEach(t=>{t.setupFunc!=null&&t.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){ed(e).forEach(n=>{n.disposeFunc!=null&&n.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof zo)&&typeof n.then=="function"){let o=++this.pendingBackendInitId,s=n.then(i=>o<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Pn(`Initialization of backend ${e} failed`),Pn(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(n){return Pn(`Initialization of backend ${e} failed`),Pn(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:o,asyncInit:s}=this.initializeBackend(n);if(s||o)return{name:n,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let n=this.state.tensorInfo.get(t),o=n.backend,s=this.readSync(t),i=o.refCount(t);o.disposeData(t,!0),n.backend=e,e.move(t,s,n.shape,n.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=e}let o;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(o),()=>(o=t(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(e,t,n){e();try{let o=n();return t(),o}catch(o){throw t(),o}}nextTensorId(){return mo.nextTensorId++}nextVariableId(){return mo.nextVariableId++}clone(e){let t=k.runKernel(qo,{x:e}),n={x:e},o=i=>({x:()=>{let a="float32",u={x:i},l={dtype:a};return k.runKernel(jo,u,l)}}),s=[];return this.addTapeNode(this.state.activeScope.name,n,[t],o,s,{}),t}runKernel(e,t,n){if(this.backendName==null&&this.backend,!(Pa(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){let o=this.backend.numDataIds(),s=0;n.forEach(u=>{s+=u.dtype==="complex64"?3:1});let i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-t-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],o=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let u,l=md(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(md(e)){let{kernelName:d,inputs:y,attrs:x}=e;this.backendName==null&&this.backend;let b=Pa(d,this.backendName);_(b!=null,()=>`Cannot find registered kernel '${d}' for backend '${this.backendName}'`),a=()=>{let $=this.backend.numDataIds();u=b.kernelFunc({inputs:y,attrs:x,backend:this.backend});let A=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,$,A);let O=A.map(M=>M.rank!=null?M:this.makeTensorFromTensorInfo(M));if(o){let M=this.getTensorsForGradient(d,y,O);n=this.saveTensorsForBackwardMode(M)}return O}}else{let{forwardFunc:d}=e,y=x=>{o&&(n=x.map(b=>this.keep(this.clone(b))))};a=()=>{let x=this.backend.numDataIds();u=this.tidy(()=>d(this.backend,y));let b=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,x,b),b}}let{inputs:c,attrs:p}=e,m=md(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?t=a():(f=this.profiler.profileKernel(l,c,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),t=f.outputs)}),o&&this.addTapeNode(l,c,t,m,n,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(d=>c[d]!=null?c[d].shape:null),outputShapes:t.map(d=>d.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(u)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(n=>this.keep(this.clone(n)))}getTensorsForGradient(e,t,n){let o=Jh(e);if(o!=null){let s=o.inputsToSave||[],i=o.outputsToSave||[],a;o.saveAllInputs?(_(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(t).map(l=>t[l])):a=s.map(l=>t[l]);let u=n.filter((l,c)=>i[c]);return a.concat(u)}return[]}makeTensor(e,t,n,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;let s=e;n==="string"&&Hs(e[0])&&(s=e.map(u=>vi(u)));let i=o.write(s,t,n),a=new Pe(t,n,i,this.nextTensorId());if(this.trackTensor(a,o),n==="string"){let u=this.state.tensorInfo.get(i),l=Xh(s);this.state.numBytes+=l-u.bytes,u.bytes=l}return a}makeTensorFromDataId(e,t,n,o){n=n||"float32";let s={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(s,o)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:o,dtype:s}=e,i=new Pe(o,s,n,this.nextTensorId());return this.trackTensor(i,t),i}makeVariable(e,t=!0,n,o){n=n||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.cast(o));let s=new Ln(e,t,n,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(e,t){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let n=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(n=e.size*Ws(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Ln||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){let n=e.size*Ws(e.dtype);this.state.numBytes-=n}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,o,s,i){let a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:s},u=Jh(e);u!=null&&(o=u.gradFunc),o!=null&&(a.gradient=l=>(l=l.map((c,p)=>{if(c==null){let m=n[p],f=Xs(m.size,m.dtype);return this.makeTensor(f,m.shape,m.dtype)}return c}),o(l.length>1?l:l[0],s,i))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=ap(e),n=new Set(t.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let i=this.state.activeScope.track[s];!i.kept&&!n.has(i.id)&&i.dispose()}let o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(s=>{!s.kept&&s.scopeId===o.id&&this.track(s)})}gradients(e,t,n,o=!1){if(_(t.length>0,()=>"gradients() received an empty list of xs."),n!=null&&n.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));_(s instanceof Pe,()=>"The result y returned by f() must be a tensor.");let i=k3(this.state.activeTape,t,s);if(!o&&i.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=n==null?rC(s.shape):n,A3(a,i,l=>this.tidy(l),nC);let u=t.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(let c of l.saved)c.dispose()}),this.state.activeTape=null),{value:s,grads:u}})}customGrad(e){return _(js(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{_(t.every(a=>a instanceof Pe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let n,o={};t.forEach((a,u)=>{o[u]=a});let s=(a,u)=>(n=e(...t,u),_(n.value instanceof Pe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),_(js(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),i=(a,u)=>{let l=n.gradFunc(a,u),c=Array.isArray(l)?l:[l];_(c.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),_(c.every(m=>m instanceof Pe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let p={};return c.forEach((m,f)=>{p[f]=()=>m}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:o})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Jo(),n=await this.backend.time(e);return n.wallMs=Jo()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new up;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};mo.nextTensorId=0;mo.nextVariableId=0;function rC(r){let e=Sa(Ae(r),"float32");return k.makeTensor(e,r,"float32")}function fd(){let r=Qh();if(r._tfengine==null){let e=new Ca(r);r._tfengine=new mo(e)}return t3(r._tfengine.ENV),F3(()=>r._tfengine),r._tfengine}var k=fd();function nC(r,e){let t={a:r,b:e};return k.runKernel(lo,t)}var fo={};Ke(fo,{isBrowser:()=>dd,isMobile:()=>iC,mockIsMobile:()=>sC});function oC(){return typeof navigator<"u"&&navigator!=null}var hd;function sC(r){hd=r}function iC(r){if(hd!==void 0)return hd;if(r||oC()){if(r||(r=navigator),r.product==="ReactNative")return!0;let e=r.userAgent||r.vendor||(typeof window<"u"?window.opera:"");if(!e){let t=r;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function dd(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Nr=U();Nr.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Nr.registerFlag("IS_BROWSER",()=>dd());Nr.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Nr.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Nr.registerFlag("PROD",()=>!1);Nr.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Nr.getBool("DEBUG"));Nr.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Nr.registerFlag("IS_TEST",()=>!1);Nr.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Nr.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Nr.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Nr.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Xt(r,e){let t=r;if(qt(r))return e==="string"?[]:[r.length];if(typeof r=="object"){if("texture"in r){let s=r.channels||"RGBA";return[r.height,r.width*s.length]}else if("buffer"in r&&!(r.buffer instanceof ArrayBuffer))return[r.buffer.size/(e==null?4:Ws(e))]}if(!Array.isArray(r))return[];let o=[];for(;Array.isArray(t)||qt(t)&&e!=="string";)o.push(t.length),t=t[0];return Array.isArray(r)&&U().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&V3(r,o,[]),o}function V3(r,e,t){if(t=t||[],!Array.isArray(r)&&!qt(r)){_(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}_(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${r.length} elements`),_(r.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${r.length} elements`);let n=e.slice(1);for(let o=0;o<r.length;++o)V3(r[o],n,t.concat(o))}function M3(r,e,t,n){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==e||r==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${n}' must be ${r} tensor, but got ${e} tensor`)}}function T(r,e,t,n="numeric"){if(r instanceof Pe)return M3(n,r.dtype,e,t),r;let o=Ks(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),M3(n,o,e,t),r==null||!qt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){let u=r==null?"null":r.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${u}'`)}let s=Xt(r,o);!qt(r)&&!Array.isArray(r)&&(r=[r]);let a=o!=="string"?bi(r,o):po(r,[],!0);return k.makeTensor(a,s,o)}function ts(r,e,t,n="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((s,i)=>T(s,`${e}[${i}]`,t,n))}var gd="__op";function E(r){let e=Object.keys(r);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0],n=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+gd;let o=(...s)=>{k.startScope(t);try{let i=n(...s);return Ko(i)&&console.error("Cannot return a Promise inside of tidy."),k.endScope(i),i}catch(i){throw k.endScope(null),i}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}function aC(r,e){let t=T(r,"real","complex"),n=T(e,"imag","complex");at(t.shape,n.shape,`real and imag shapes, ${t.shape} and ${n.shape}, must match in call to tf.complex().`);let o={real:t,imag:n};return k.runKernel(Ia,o)}var Yt=E({complex_:aC});function Vt(r,e,t,n){if(n==null)n=Ks(r);else if(n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(typeof r=="object"&&("texture"in r||"buffer"in r&&!(r.buffer instanceof ArrayBuffer))){if(n!=="float32"&&n!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${n}.`);return k.backend.createTensorFromGPUData(r,e||t,n)}if(!qt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){et(e);let o=Ae(e),s=Ae(t);_(o===s,()=>`Based on the provided shape, [${e}], the tensor should have ${o} values but has ${s}`);for(let i=0;i<t.length;++i){let a=t[i],u=i===t.length-1?a!==Ae(e.slice(i)):!0;_(t[i]===e[i]||!u,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!qt(r)&&!Array.isArray(r)&&(r=[r]),e=e||t,r=n!=="string"?bi(r,n):po(r,[],!0),k.makeTensor(r,e,n)}function Ut(r,e,t){let n=Xt(r,t);return Vt(r,e,n,t)}var Ua={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var lp=4;async function G3(r,e){let t=[],n=[],o=Array.isArray(r)?r.map(i=>i.name):Object.keys(r);for(let i=0;i<o.length;++i){let a=o[i],u=Array.isArray(r)?r[i].tensor:r[a];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${u.dtype}`);let l={name:a,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){let c=new Promise(async p=>{let m=await u.bytes(),f=m.reduce((x,b)=>x+b.length,0)+lp*m.length,d=new Uint8Array(f),y=0;for(let x=0;x<m.length;x++){let b=m[x],$=new Uint8Array(new Uint32Array([b.length]).buffer);d.set($,y),y+=lp,d.set(b,y),y+=b.length}p(d)});n.push(c)}else n.push(u.data());e!=null&&(l.group=e),t.push(l)}let s=await Promise.all(n);return{data:uC(s),specs:t}}function cp(r,e){let t={},n,o=0;for(let s of e){let i=s.name,a=s.dtype,u=s.shape,l=Ae(u),c;if("quantization"in s){let p=s.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${s.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${s.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${s.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let m=Ua[p.dtype],f=r.slice(o,o+l*m),d=p.dtype==="uint8"?new Uint8Array(f):new Uint16Array(f);if(a==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){c=new Float32Array(d.length);for(let y=0;y<d.length;y++){let x=d[y];c[y]=x*p.scale+p.min}}else if(p.dtype==="float16")n===void 0&&(n=mC()),c=n(d);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(a==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);c=new Int32Array(d.length);for(let y=0;y<d.length;y++){let x=d[y];c[y]=Math.round(x*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);o+=l*m}else if(a==="string"){let p=Ae(s.shape);c=[];for(let m=0;m<p;m++){let f=new Uint32Array(r.slice(o,o+lp))[0];o+=lp;let d=new Uint8Array(r.slice(o,o+f));c.push(d),o+=f}}else{let p=Ua[a],m=r.slice(o,o+l*p);if(a==="float32")c=new Float32Array(m);else if(a==="int32")c=new Int32Array(m);else if(a==="bool")c=new Uint8Array(m);else if(a==="complex64"){c=new Float32Array(m);let f=new Float32Array(c.length/2),d=new Float32Array(c.length/2);for(let b=0;b<f.length;b++)f[b]=c[b*2],d[b]=c[b*2+1];let y=Ut(f,u,"float32"),x=Ut(d,u,"float32");t[i]=Yt(y,x),y.dispose(),x.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);o+=l*p}a!=="complex64"&&(t[i]=Ut(c,u,a))}return t}function uC(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let e=0,t=[];r.forEach(s=>{if(e+=s.byteLength,t.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let n=new Uint8Array(e),o=0;return t.forEach(s=>{n.set(new Uint8Array(s.buffer),o),o+=s.byteLength}),n.buffer}var xd=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function U3(r){return xd?Buffer.byteLength(r):new Blob([r]).size}function z3(r){if(xd)return Buffer.from(r).toString("base64");let e=new Uint8Array(r),t="";for(let n=0,o=e.length;n<o;n++)t+=String.fromCharCode(e[n]);return btoa(t)}function W3(r){if(xd){let n=Buffer.from(r,"base64");return n.buffer.slice(n.byteOffset,n.byteOffset+n.byteLength)}let e=atob(r),t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t.set([e.charCodeAt(n)],n);return t.buffer}function Si(r){if(r.length===1)return r[0];let e=0;r.forEach(o=>{e+=o.byteLength});let t=new Uint8Array(e),n=0;return r.forEach(o=>{t.set(new Uint8Array(o),n),n+=o.byteLength}),t.buffer}function yd(r){let e="/";for(r=r.trim();r.endsWith(e);)r=r.slice(0,r.length-1);let t=r.split(e);return t[t.length-1]}function pp(r,e){let t={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:e};return r.signature!=null&&(t.signature=r.signature),r.userDefinedMetadata!=null&&(t.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(t.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(t.initializerSignature=r.initializerSignature),r.trainingConfig!=null&&(t.trainingConfig=r.trainingConfig),t}function bd(r,e,t){let n={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(n.trainingConfig=r.trainingConfig),r.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");n.weightSpecs=e,n.weightData=t}return r.signature!=null&&(n.signature=r.signature),r.userDefinedMetadata!=null&&(n.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(n.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(n.initializerSignature=r.initializerSignature),n}async function Ci(r,e){let t,n;return r.weightsManifest!=null&&([t,n]=await e(r.weightsManifest)),bd(r,t,n)}function hn(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:U3(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:U3(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}function mp(r){let e=[];for(let t of r)e.push(...t.weights);return e}function lC(){let r=t=>{let n=t<<13,o=0;for(;!(n&8388608);)o-=8388608,n<<=1;return n&=-8388609,o+=947912704,n|o},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=r(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function cC(){let r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let e=1;e<31;e++)r[e]=e<<23;for(let e=33;e<63;e++)r[e]=2147483648+(e-32<<23);return r}function pC(){let r=new Uint32Array(64);for(let e=0;e<64;e++)r[e]=1024;return r[0]=r[32]=0,r}function mC(){let r=lC(),e=cC(),t=pC();return n=>{let o=new ArrayBuffer(4*n.length),s=new Uint32Array(o);for(let i=0;i<n.length;i++){let a=n[i],u=r[t[a>>10]+(a&1023)]+e[a>>10];s[i]=u}return new Float32Array(o)}}var je=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return je.instance==null&&(je.instance=new je),je.instance}static registerSaveRouter(e){je.getInstance().saveRouters.push(e)}static registerLoadRouter(e){je.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return je.getHandlers(e,"save")}static getLoadHandlers(e,t){return je.getHandlers(e,"load",t)}static getHandlers(e,t,n){let o=[];return(t==="load"?je.getInstance().loadRouters:je.getInstance().saveRouters).forEach(i=>{let a=i(e,n);a!==null&&o.push(a)}),o}},H3=r=>je.registerSaveRouter(r),K3=r=>je.registerLoadRouter(r),j3=r=>je.getSaveHandlers(r),q3=(r,e)=>je.getLoadHandlers(r,e);var vd="tensorflowjs",wd=1,rs="models_store",ho="model_info_store";function X3(){if(!U().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let r=typeof window>"u"?self:window,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Td(r){let e=r.result;e.createObjectStore(rs,{keyPath:"modelPath"}),e.createObjectStore(ho,{keyPath:"modelPath"})}var dn=class{constructor(e){if(this.indexedDB=X3(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((n,o)=>{let s=this.indexedDB.open(vd,wd);s.onupgradeneeded=()=>Td(s),s.onsuccess=()=>{let i=s.result;if(t==null){let a=i.transaction(rs,"readonly"),l=a.objectStore(rs).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(l.result.modelArtifacts)},l.onerror=c=>(i.close(),o(l.error)),a.oncomplete=()=>i.close()}else{let a=hn(t),u=i.transaction(ho,"readwrite"),l=u.objectStore(ho),c=l.put({modelPath:this.modelPath,modelArtifactsInfo:a}),p;c.onsuccess=()=>{p=i.transaction(rs,"readwrite");let f=p.objectStore(rs).put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:a});f.onsuccess=()=>n({modelArtifactsInfo:a}),f.onerror=d=>{l=u.objectStore(ho);let y=l.delete(this.modelPath);y.onsuccess=()=>(i.close(),o(f.error)),y.onerror=x=>(i.close(),o(f.error))}},c.onerror=m=>(i.close(),o(c.error)),u.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>o(s.error)})}};dn.URL_SCHEME="indexeddb://";var Y3=r=>U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(dn.URL_SCHEME)?fC(r.slice(dn.URL_SCHEME.length)):null;je.registerSaveRouter(Y3);je.registerLoadRouter(Y3);function fC(r){return new dn(r)}function hC(r){return r.startsWith(dn.URL_SCHEME)?r.slice(dn.URL_SCHEME.length):r}var fp=class{constructor(){this.indexedDB=X3()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(vd,wd);n.onupgradeneeded=()=>Td(n),n.onsuccess=()=>{let o=n.result,s=o.transaction(ho,"readonly"),a=s.objectStore(ho).getAll();a.onsuccess=()=>{let u={};for(let l of a.result)u[l.modelPath]=l.modelArtifactsInfo;e(u)},a.onerror=u=>(o.close(),t(a.error)),s.oncomplete=()=>o.close()},n.onerror=o=>t(n.error)})}async removeModel(e){return e=hC(e),new Promise((t,n)=>{let o=this.indexedDB.open(vd,wd);o.onupgradeneeded=()=>Td(o),o.onsuccess=()=>{let s=o.result,i=s.transaction(ho,"readwrite"),a=i.objectStore(ho),u=a.get(e),l;u.onsuccess=()=>{if(u.result==null)return s.close(),n(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{let c=a.delete(e),p=()=>{l=s.transaction(rs,"readwrite");let f=l.objectStore(rs).delete(e);f.onsuccess=()=>t(u.result.modelArtifactsInfo),f.onerror=d=>n(u.error)};c.onsuccess=p,c.onerror=m=>(p(),s.close(),n(u.error))}},u.onerror=c=>(s.close(),n(u.error)),i.oncomplete=()=>{l==null?s.close():l.oncomplete=()=>s.close()}},o.onerror=s=>n(o.error)})}};var Bn="/",Ei="tensorflowjs_models",Z3="info",dC="model_topology",gC="weight_specs",xC="weight_data",yC="model_metadata";function Q3(r){return{info:[Ei,r,Z3].join(Bn),topology:[Ei,r,dC].join(Bn),weightSpecs:[Ei,r,gC].join(Bn),weightData:[Ei,r,xC].join(Bn),modelMetadata:[Ei,r,yC].join(Bn)}}function J3(r){for(let e of Object.values(r))window.localStorage.removeItem(e)}function bC(r){let e=r.split(Bn);if(e.length<3)throw new Error(`Invalid key format: ${r}`);return e.slice(1,e.length-1).join(Bn)}function vC(r){return r.startsWith(gn.URL_SCHEME)?r.slice(gn.URL_SCHEME.length):r}var gn=class{constructor(e){if(!U().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Q3(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),o=hn(e);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,z3(e.weightData));let s={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,initializerSignature:e.initializerSignature!=null?e.initializerSignature:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:o}}catch(s){throw J3(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=o;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);t.format=a.format,t.generatedBy=a.generatedBy,t.convertedBy=a.convertedBy,a.signature!=null&&(t.signature=a.signature),a.userDefinedMetadata!=null&&(t.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(t.modelInitializer=a.modelInitializer),a.initializerSignature!=null&&(t.initializerSignature=a.initializerSignature),a.trainingConfig!=null&&(t.trainingConfig=a.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=W3(i),t}};gn.URL_SCHEME="localstorage://";var eg=r=>U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(gn.URL_SCHEME)?wC(r.slice(gn.URL_SCHEME.length)):null;je.registerSaveRouter(eg);je.registerLoadRouter(eg);function wC(r){return new gn(r)}var hp=class{constructor(){_(U().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),_(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=Ei+Bn,n=Bn+Z3;for(let o=0;o<this.LS.length;++o){let s=this.LS.key(o);if(s.startsWith(t)&&s.endsWith(n)){let i=bC(s);e[i]=JSON.parse(this.LS.getItem(s))}}return e}async removeModel(e){e=vC(e);let t=Q3(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return J3(t),n}};var Ni="://",Nt=class{constructor(){this.managers={}}static getInstance(){return Nt.instance==null&&(Nt.instance=new Nt),Nt.instance}static registerManager(e,t){_(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(Ni)&&(e=e.slice(0,e.indexOf(Ni))),_(e.length>0,()=>"scheme must not be an empty string.");let n=Nt.getInstance();_(n.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),n.managers[e]=t}static getManager(e){let t=Nt.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(Nt.getInstance().managers)}};function dp(r){if(r.indexOf(Ni)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Nt.getSchemes().join(",")}`);return{scheme:r.split(Ni)[0],path:r.split(Ni)[1]}}async function tg(r,e,t=!1){_(r!==e,()=>`Old path and new path are the same: '${r}'`);let n=je.getLoadHandlers(r);_(n.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),_(n.length<2,()=>`Copying failed because more than one (${n.length}) load handlers for source URL ${r}.`);let o=n[0],s=je.getSaveHandlers(e);_(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),_(s.length<2,()=>`Copying failed because more than one (${n.length}) save handlers for destination URL ${e}.`);let i=s[0],a=dp(r).scheme,u=dp(r).path,l=a===dp(r).scheme,c=await o.load();t&&l&&await Nt.getManager(a).removeModel(u);let p=await i.save(c);return t&&!l&&await Nt.getManager(a).removeModel(u),p.modelArtifactsInfo}async function rg(){let r=Nt.getSchemes(),e={};for(let t of r){let n=await Nt.getManager(t).listModels();for(let o in n){let s=t+Ni+o;e[s]=n[o]}}return e}async function ng(r){let e=dp(r);return Nt.getManager(e.scheme).removeModel(e.path)}async function og(r,e){return tg(r,e,!1)}async function sg(r,e){return tg(r,e,!0)}var Sd=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!U().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",n=>{if(n.source===window&&n.data.name===this.messageName){n.stopPropagation();let o=this.functionRefs[n.data.index];o(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}};if(U().get("IS_BROWSER")){U().setPlatform("browser",new Sd);try{Nt.registerManager(gn.URL_SCHEME,new hp)}catch(r){}try{Nt.registerManager(dn.URL_SCHEME,new fp)}catch(r){}}var TC={importFetch:()=>ig()},Cd;var Ed=class{constructor(){this.util=ag(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return U().global.fetch!=null?U().global.fetch(e,t):(Cd==null&&(Cd=TC.importFetch()),Cd(e,t))}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};U().get("IS_NODE")&&!U().get("IS_BROWSER")&&U().setPlatform("node",new Ed);function Ie(r,e="float32",t){return e=e||"float32",et(r),new Jr(r,e,t)}function SC(r,e){let t=T(r,"x","cast");if(!qh(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");let n={x:t},o={dtype:e};return k.runKernel(jo,n,o)}var _e=E({cast_:SC});function CC(r){let t={x:T(r,"x","clone","string_or_numeric")};return k.runKernel(qo,t)}var hr=E({clone_:CC});function gp(r,e=!1){console.log(r.toString(e))}fd();var EC={buffer:Ie,cast:_e,clone:hr,print:gp};D3(EC);function NC(r){U().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}P3(NC);function xn(){return k}function be(r,e){return k.tidy(r,e)}function Ge(r){ap(r).forEach(t=>t.dispose())}function Zt(r){return k.keep(r)}function Nd(r){return k.setBackend(r)}function ug(){return k.ready()}function Id(r,e,t=1){return k.registerBackend(r,e,t)}function IC(r,e){let t=T(r,"a","add"),n=T(e,"b","add");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(lo,o)}var ue=E({add_:IC});function $C(r,e){let t=T(r,"a","floorDiv"),n=T(e,"b","floorDiv");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(Ol,o)}var xp=E({floorDiv_:$C});function kC(r,e){let t=T(r,"a","div"),n=T(e,"b","div");if([t,n]=Ne(t,n),t.dtype==="int32"&&n.dtype==="int32")return xp(t,n);let o={a:t,b:n},s={};return k.runKernel(El,o,s)}var we=E({div_:kC});function AC(r,e){let t=T(r,"a","mul"),n=T(e,"b","mul");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(ui,o)}var ee=E({mul_:AC});function _C(r){let e=T(r,"x","abs");if(e.dtype==="complex64"){let t={x:e};return k.runKernel(il,t)}else{let t={x:e};return k.runKernel(Na,t)}}var It=E({abs_:_C});function RC(r){let t={x:T(r,"x","acos")};return k.runKernel(Uu,t)}var lg=E({acos_:RC});function OC(r){let t={x:T(r,"x","acosh")};return k.runKernel(Gu,t)}var cg=E({acosh_:OC});function FC(r){_(Array.isArray(r),()=>"The argument passed to tf.addN() must be a list of tensors"),_(r.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${r.length}`);let e=r.map((o,s)=>T(o,`tensors${s}`,"addN")),t=e[0];e.forEach(o=>{if(o.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(o=>{if(!Br(o.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});let n=e;return k.runKernel(zu,n)}var pg=E({addN_:FC});function DC(r,e=null,t=!1){let o={x:T(r,"x","all","bool")},s={axis:e,keepDims:t};return k.runKernel(Wu,o,s)}var mg=E({all_:DC});function PC(r,e=null,t=!1){let o={x:T(r,"x","any","bool")},s={axis:e,keepDims:t};return k.runKernel(Hu,o,s)}var fg=E({any_:PC});function LC(r,e=0){let n={x:T(r,"x","argMax")},o={axis:e};return k.runKernel(Ku,n,o)}var hg=E({argMax_:LC});function BC(r,e=0){let n={x:T(r,"x","argMin")},o={axis:e};return k.runKernel(ju,n,o)}var dg=E({argMin_:BC});function MC(r){let t={x:T(r,"x","asin")};return k.runKernel(qu,t)}var gg=E({asin_:MC});function VC(r){let t={x:T(r,"x","asinh")};return k.runKernel(Xu,t)}var xg=E({asinh_:VC});function UC(r){let t={x:T(r,"x","atan")};return k.runKernel(Yu,t)}var yg=E({atan_:UC});function GC(r,e){let t=T(r,"a","atan2"),n=T(e,"b","atan2");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(Qu,o)}var bg=E({atan2_:GC});function zC(r){let t={x:T(r,"x","atanh")};return k.runKernel(Zu,t)}var vg=E({atanh_:zC});function WC(r,e,t,n,o="NHWC",s){let i=r[3],a=[...e,i],u=Tg(o);return os(r,a,t,s,n,null,null,u)}function kd(r,e,t,n,o,s,i="channelsLast"){let[a,u]=Ga(e),l;if(i==="channelsLast")l=[a,u,r[3],r[3]];else if(i==="channelsFirst")l=[a,u,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return os(r,l,t,n,o,s,!1,i)}function HC(r,e,t,n,o,s,i="NDHWC"){let[a,u,l]=$d(e),c,p;if(i==="NDHWC")p="channelsLast",c=[a,u,l,r[4],r[4]];else if(i==="NCDHW")p="channelsFirst",c=[a,u,l,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return wg(r,c,t,n,o,!1,p,s)}function os(r,e,t,n,o,s,i=!1,a="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[u,l,c,p]=r;else if(a==="channelsFirst")[u,p,l,c]=r;else throw new Error(`Unknown dataFormat ${a}`);let[m,f,,d]=e,[y,x]=Ga(t),[b,$]=Ga(n),A=Ii(m,b),O=Ii(f,$),{padInfo:M,outHeight:G,outWidth:H}=qC(o,l,c,y,x,A,O,s,a),X=i?d*p:d,q;return a==="channelsFirst"?q=[u,X,G,H]:a==="channelsLast"&&(q=[u,G,H,X]),{batchSize:u,dataFormat:a,inHeight:l,inWidth:c,inChannels:p,outHeight:G,outWidth:H,outChannels:X,padInfo:M,strideHeight:y,strideWidth:x,filterHeight:m,filterWidth:f,effectiveFilterHeight:A,effectiveFilterWidth:O,dilationHeight:b,dilationWidth:$,inShape:r,outShape:q,filterShape:e}}function wg(r,e,t,n,o,s=!1,i="channelsLast",a){let[u,l,c,p,m]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[u,l,c,p,m]=r;else if(i==="channelsFirst")[u,m,l,c,p]=r;else throw new Error(`Unknown dataFormat ${i}`);let[f,d,y,,x]=e,[b,$,A]=$d(t),[O,M,G]=$d(n),H=Ii(f,O),X=Ii(d,M),q=Ii(y,G),{padInfo:Y,outDepth:ie,outHeight:fe,outWidth:he}=XC(o,l,c,p,b,$,A,H,X,q,a),$e=s?x*m:x,Oe;return i==="channelsFirst"?Oe=[u,$e,ie,fe,he]:i==="channelsLast"&&(Oe=[u,ie,fe,he,$e]),{batchSize:u,dataFormat:i,inDepth:l,inHeight:c,inWidth:p,inChannels:m,outDepth:ie,outHeight:fe,outWidth:he,outChannels:$e,padInfo:Y,strideDepth:b,strideHeight:$,strideWidth:A,filterDepth:f,filterHeight:d,filterWidth:y,effectiveFilterDepth:H,effectiveFilterHeight:X,effectiveFilterWidth:q,dilationDepth:O,dilationHeight:M,dilationWidth:G,inShape:r,outShape:Oe,filterShape:e}}function KC(r,e,t,n,o){n==null&&(n=Ad(r,e,t));let s=r[0],i=r[1],a=za((s-e+2*n)/t+1,o),u=za((i-e+2*n)/t+1,o);return[a,u]}function jC(r,e,t,n,o,s){o==null&&(o=Ad(r,e[0],n[0]));let i=[0,0,0,t];for(let a=0;a<3;a++)r[a]+2*o>=e[a]&&(i[a]=za((r[a]-e[a]+2*o)/n[a]+1,s));return i}function Ad(r,e,t,n=1){let o=Ii(e,n);return Math.floor((r[0]*(t-1)-t+o)/2)}function Ga(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function $d(r){return typeof r=="number"?[r,r,r]:r}function Ii(r,e){return e<=1?r:r+(r-1)*(e-1)}function qC(r,e,t,n,o,s,i,a,u){let l,c,p;if(typeof r=="number"){l={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};let f=KC([e,t],s,n,r,a);c=f[0],p=f[1]}else if(r==="same"){c=Math.ceil(e/n),p=Math.ceil(t/o);let m=Math.max(0,(c-1)*n+s-e),f=Math.max(0,(p-1)*o+i-t),d=Math.floor(m/2),y=m-d,x=Math.floor(f/2),b=f-x;l={top:d,bottom:y,left:x,right:b,type:"SAME"}}else if(r==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-s+1)/n),p=Math.ceil((t-i+1)/o);else if(typeof r=="object"){let m=u==="channelsLast"?r[1][0]:r[2][0],f=u==="channelsLast"?r[1][1]:r[2][1],d=u==="channelsLast"?r[2][0]:r[3][0],y=u==="channelsLast"?r[2][1]:r[3][1];l={top:m,bottom:f,left:d,right:y,type:m===0&&f===0&&d===0&&y===0?"VALID":"EXPLICIT"},c=za((e-s+m+f)/n+1,a),p=za((t-i+d+y)/o+1,a)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:l,outHeight:c,outWidth:p}}function XC(r,e,t,n,o,s,i,a,u,l,c){let p,m,f,d;if(r==="valid"&&(r=0),typeof r=="number"){p={top:r,bottom:r,left:r,right:r,front:r,back:r,type:r===0?"VALID":"NUMBER"};let x=jC([e,t,n,1],[a,u,l],1,[o,s,i],r,c);m=x[0],f=x[1],d=x[2]}else if(r==="same"){m=Math.ceil(e/o),f=Math.ceil(t/s),d=Math.ceil(n/i);let y=(m-1)*o+a-e,x=(f-1)*s+u-t,b=(d-1)*i+l-n,$=Math.floor(y/2),A=y-$,O=Math.floor(x/2),M=x-O,G=Math.floor(b/2),H=b-G;p={top:O,bottom:M,left:G,right:H,front:$,back:A,type:"SAME"}}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:p,outDepth:m,outHeight:f,outWidth:d}}function za(r,e){if(!e)return Math.trunc(r);switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${e}`)}}function ns(r){let[e,t,n]=Ga(r);return e===1&&t===1&&n===1}function Bt(r,e){return ns(r)||ns(e)}function yn(r){return Ga(r).every(e=>e>0)}function Tg(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${r}`)}function ht(r,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")_(Dn(e),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(n=>{n.forEach(o=>{_(Dn(o),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${o}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${e}`)}}function YC(r,e){let n={x:T(r,"x","reshape","string_or_numeric")},o={shape:e};return k.runKernel(bc,n,o)}var W=E({reshape_:YC});function ZC(r,e,t,n,o){let s=T(r,"x","avgPool","float32"),i=1;_(Bt(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let a=s,u=!1;s.rank===3&&(u=!0,a=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),_(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),ht("avgPool",n,o);let l={x:a},c={filterSize:e,strides:t,pad:n,dimRoundingMode:o},p=k.runKernel(Ju,l,c);return p=_e(p,s.dtype),u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var yp=E({avgPool_:ZC});function QC(r,e,t,n,o,s="NDHWC"){let i=T(r,"x","avgPool3d","float32"),a=i,u=!1;i.rank===4&&(u=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),_(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),_(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),ht("avgPool3d",n,o);let l={x:a},c={filterSize:e,strides:t,pad:n,dimRoundingMode:o,dataFormat:s},p=k.runKernel(el,l,c);return p=_e(p,a.dtype),u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var Sg=E({avgPool3d_:QC});function JC(r,e=0){_(r.length>=1,()=>"Pass at least one tensor to concat");let t=ts(r,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),t.length===1)return hr(t[0]);let n=t,o={axis:e};return k.runKernel(al,n,o)}var qe=E({concat_:JC});function eE(r,e,t=!1,n=!1){let o=T(r,"a","matMul"),s=T(e,"b","matMul");[o,s]=Ne(o,s);let i={a:o,b:s},a={transposeA:t,transposeB:n};return k.runKernel(tl,i,a)}var Be=E({matMul_:eE});function tE(r){let t={x:T(r,"x","sigmoid","float32")};return k.runKernel(pi,t)}var Gr=E({sigmoid_:tE});function rE(r,e,t){let n=T(r,"x","slice","string_or_numeric");if(n.rank===0)throw new Error("Slicing scalar is not possible");let o={x:n},s={begin:e,size:t};return k.runKernel(_a,o,s)}var ve=E({slice_:rE});function nE(r){let t={x:T(r,"x","tanh","float32")};return k.runKernel(jc,t)}var Wa=E({tanh_:nE});function oE(r,e,t,n,o,s){let i=T(r,"forgetBias","basicLSTMCell"),a=T(e,"lstmKernel","basicLSTMCell"),u=T(t,"lstmBias","basicLSTMCell"),l=T(n,"data","basicLSTMCell"),c=T(o,"c","basicLSTMCell"),p=T(s,"h","basicLSTMCell"),m=qe([l,p],1),f=Be(m,a),d=ue(f,u),y=d.shape[0],x=d.shape[1]/4,b=[y,x],$=ve(d,[0,0],b),A=ve(d,[0,x],b),O=ve(d,[0,x*2],b),M=ve(d,[0,x*3],b),G=ue(ee(Gr($),Wa(A)),ee(c,Gr(ue(i,O)))),H=ee(Wa(G),Gr(M));return[G,H]}var Cg=E({basicLSTMCell_:oE});function sE(r,e,t){let n=T(r,"x","batchToSpaceND"),o=e.reduce((a,u)=>a*u);_(n.rank>=1+e.length,()=>`input rank is ${n.rank} but should be > than blockShape.length ${e.length}`),_(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),_(n.shape[0]%o===0,()=>`input tensor batch is ${n.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${o}`);let s={x:n},i={blockShape:e,crops:t};return k.runKernel(rl,s,i)}var bp=E({batchToSpaceND_:sE});function Eg(r){let e;return r.rank===0||r.rank===1?e=W(r,[1,1,1,r.size]):r.rank===2?e=W(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?e=W(r,[1,r.shape[0],r.shape[1],r.shape[2]]):e=r,e}function iE(r,e,t,n,o,s){s==null&&(s=.001);let i=T(r,"x","batchNorm"),a=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm"),l;o!=null&&(l=T(o,"scale","batchNorm"));let c;n!=null&&(c=T(n,"offset","batchNorm")),_(a.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),_(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),_(l==null||a.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let m={x:Eg(i),scale:l,offset:c,mean:a,variance:u},f={varianceEpsilon:s},d=k.runKernel(Fl,m,f);return W(d,i.shape)}var go=E({batchNorm_:iE});function aE(r,e,t,n,o,s){let i=T(r,"x","batchNorm"),a=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm"),l;o!=null&&(l=T(o,"scale","batchNorm"));let c;return n!=null&&(c=T(n,"offset","batchNorm")),_(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),_(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),_(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),l!=null&&_(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),go(i,a,u,c,l,s)}var Ng=E({batchNorm2d_:aE});function uE(r,e,t,n,o,s){let i=T(r,"x","batchNorm"),a=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm"),l;o!=null&&(l=T(o,"scale","batchNorm"));let c;return n!=null&&(c=T(n,"offset","batchNorm")),_(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),_(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),_(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),l!=null&&_(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),go(i,a,u,c,l,s)}var Ig=E({batchNorm3d_:uE});function lE(r,e,t,n,o,s){let i=T(r,"x","batchNorm"),a=T(e,"mean","batchNorm"),u=T(t,"variance","batchNorm"),l;o!=null&&(l=T(o,"scale","batchNorm"));let c;return n!=null&&(c=T(n,"offset","batchNorm")),_(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),_(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),_(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),l!=null&&_(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),c!=null&&_(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),go(i,a,u,c,l,s)}var $g=E({batchNorm4d_:lE});function cE(r,e,t){let n=T(r,"x","bincount"),o=T(e,"weights","bincount");_(n.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${n.dtype}`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(o.size===n.size||o.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${n.shape}, weights shape: ${o.shape}.`);let s={x:n,weights:o},i={size:t};return k.runKernel(nl,s,i)}var vp=E({bincount_:cE});function pE(r,e){let t=T(r,"s0","broadcastArgs","int32"),n=T(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(n.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${n.rank}`);let o={s0:t,s1:n};return k.runKernel(ol,o)}var kg=E({broadcastArgs_:pE});function mE(r,e){let t=T(r,"broadcastTo","x"),n=t.shape;if(et(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){let l=t.shape.slice();for(;l.length<e.length;)l.unshift(1);t=W(t,l)}let o=t.shape,s=Array.from(e);for(let l=e.length-1;l>=0;l--)if(o[l]===e[l])s[l]=1;else if(t.shape[l]!==1)throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${e}].`);if(s.map((l,c)=>l>1?c:-1).filter(l=>l>=0).length===0)return hr(t);let a={x:t},u={reps:s};return k.runKernel(di,a,u)}var xo=E({broadcastTo_:mE});function fE(r){let t={x:T(r,"x","ceil","float32")};return k.runKernel(Ys,t)}var Ag=E({ceil_:fE});function vn(r,e,t){et(r);let n={shape:r,value:e,dtype:t};return k.runKernel(_l,{},n)}function hE(r,e,t){let n=T(r,"x","clipByValue");if(_(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return vn(n.shape,e,n.dtype);let o={x:n},s={clipValueMin:e,clipValueMax:t};return k.runKernel(sl,o,s)}var wp=E({clipByValue_:hE});function dE(r){return qe(r,0)}var _g=E({concat1d_:dE});function gE(r,e){return qe(r,e)}var Rg=E({concat2d_:gE});function xE(r,e){return qe(r,e)}var Og=E({concat3d_:xE});function yE(r,e){return qe(r,e)}var Fg=E({concat4d_:yE});function bE(r,e,t,n,o="NHWC",s=[1,1],i){let a=T(r,"x","conv2d","float32"),u=T(e,"filter","conv2d","float32"),l=a,c=!1;a.rank===3&&(c=!0,l=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),_(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),ht("conv2d",n,i);let p=o==="NHWC"?l.shape[3]:l.shape[1];_(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),_(Bt(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),_(yn(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),_(yn(t),()=>"Error in conv2D: Strides should be larger than 0.");let m={x:l,filter:u},f={strides:t,pad:n,dataFormat:o,dilations:s,dimRoundingMode:i},d=k.runKernel(ul,m,f);return c?W(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var yo=E({conv2d_:bE});function vE(r,e,t,n,o="NWC",s=1,i){let a=T(r,"x","conv1d"),u=T(e,"filter","conv1d"),l=a,c=!1;a.rank===2&&(c=!0,l=W(a,[1,a.shape[0],a.shape[1]])),_(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),_(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),ht("conv1d",n,i),_(l.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`),_(Bt(t,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${s}'`),_(yn(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),_(yn(t),()=>"Error in conv1D: Stride should be larger than 0."),_(o==="NWC",()=>`Error in conv1d: got dataFormat of ${o} but only NWC is currently supported.`);let p=W(u,[1,u.shape[0],u.shape[1],u.shape[2]]),m=W(l,[l.shape[0],1,l.shape[1],l.shape[2]]),x=yo(m,p,[1,t],n,"NHWC",[1,s],i);return c?W(x,[x.shape[2],x.shape[3]]):W(x,[x.shape[0],x.shape[2],x.shape[3]])}var Dg=E({conv1d_:vE});function wE(r,e,t,n,o,s="NHWC",i){_(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let a=r,u=e,l=!1;e.rank===3&&(l=!0,u=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,r[0],r[1],r[2]]),_(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),_(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),_(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);let c=s==="NHWC"?a[3]:a[1],p=s==="NHWC"?u.shape[3]:u.shape[1];_(c===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${t.shape[2]}.`),_(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),ht("conv2dDerInput",o,i);let m={dy:u,filter:t},f={strides:n,pad:o,dataFormat:s,dimRoundingMode:i,inputShape:a},d=k.runKernel(cl,m,f);return l?W(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Tp=E({conv2DBackpropInput_:wE});function TE(r,e,t,n,o,s){let i=T(r,"x","conv2dTranspose"),a=T(e,"filter","conv2dTranspose");return Tp(t,i,a,n,o,"NHWC",s)}var Pg=E({conv2dTranspose_:TE});function SE(r,e,t,n,o="NDHWC",s=[1,1,1]){let i=T(r,"x","conv3d"),a=T(e,"filter","conv3d"),u=i,l=!1;i.rank===4&&(l=!0,u=W(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),_(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),_(u.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${a.shape[3]}.`),_(Bt(t,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),_(o==="NDHWC",()=>`Error in conv3d: got dataFormat of ${o} but only NDHWC is currently supported.`),_(yn(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),_(yn(t),()=>"Error in conv3D: Strides should be larger than 0.");let c={x:u,filter:a},p={strides:t,pad:n,dataFormat:o,dilations:s},m=k.runKernel(pl,c,p);return l?W(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var Lg=E({conv3d_:SE});function CE(r,e,t,n,o){_(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let s=r,i=e,a=!1;e.rank===4&&(a=!0,i=W(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,r[0],r[1],r[2],r[3]]);let u=s[4],l=i.shape[4];_(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),_(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),_(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),_(u===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${t.shape[3]}.`),_(l===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${t.shape[4]}.`);let c={dy:i,filter:t},p={pad:o,strides:n,inputShape:s},m=k.runKernel(ml,c,p);return a?W(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var Bg=E({conv3DBackpropInput_:CE});function EE(r,e,t,n,o){let s=T(r,"x","conv3dTranspose"),i=T(e,"filter","conv3dTranspose");return Bg(t,s,i,n,o)}var Mg=E({conv3dTranspose_:EE});function NE(r){let t={x:T(r,"x","cos","float32")};return k.runKernel(fl,t)}var Vg=E({cos_:NE});function IE(r){let t={x:T(r,"x","cosh","float32")};return k.runKernel(hl,t)}var Ug=E({cosh_:IE});function $E(r,e=0,t=!1,n=!1){let s={x:T(r,"x","cumprod")},i={axis:e,exclusive:t,reverse:n};return k.runKernel(dl,s,i)}var Gg=E({cumprod_:$E});function kE(r,e=0,t=!1,n=!1){let s={x:T(r,"x","cumsum")},i={axis:e,exclusive:t,reverse:n};return k.runKernel(gl,s,i)}var zg=E({cumsum_:kE});function AE(r,e,t,n=!1){let o=T(r,"x","denseBincount"),s=T(e,"weights","denseBincount");_(o.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${o.dtype}`),_(o.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${o.rank}.`),_(t>=0,()=>`size must be non-negative, but got ${t}.`),_(s.size===o.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${o.shape}, weights shape: ${s.shape}.`);let i={x:o,weights:s},a={size:t,binaryOutput:n};return k.runKernel(yl,i,a)}var Wg=E({denseBincount_:AE});function _E(r,e,t="NHWC"){let n=T(r,"x","depthToSpace","float32"),o=t==="NHWC"?n.shape[1]:n.shape[2],s=t==="NHWC"?n.shape[2]:n.shape[3],i=t==="NHWC"?n.shape[3]:n.shape[1];_(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),_(o*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${e}  for depthToSpace with input shape
    ${n.shape}`),_(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e} for depthToSpace with input shape
        ${n.shape}`),_(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${n.shape}`);let a={x:n},u={blockSize:e,dataFormat:t};return k.runKernel(bl,a,u)}var Hg=E({depthToSpace_:_E});function RE(r,e,t,n,o="NHWC",s=[1,1],i){let a=T(r,"x","depthwiseConv2d","float32"),u=T(e,"filter","depthwiseConv2d","float32"),l=a,c=!1;a.rank===3&&(c=!0,l=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),_(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);let p=o==="NHWC"?l.shape[3]:l.shape[1];_(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),ht("depthwiseConv2d",n,i);let m={x:l,filter:u},f={strides:t,pad:n,dataFormat:o,dilations:s,dimRoundingMode:i},d=k.runKernel(vl,m,f);return c?W(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var $i=E({depthwiseConv2d_:RE});function OE(r){let t={x:T(r,"x","diag")};return k.runKernel(Sl,t)}var Kg=E({diag_:OE});function FE(r,e,t,n,o=[1,1],s="NHWC"){let i=T(r,"x","dilation2d"),a=T(e,"filter","dilation2d");_(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),_(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),_(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let u=i,l=!1;i.rank===3&&(u=W(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=!0),_(u.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${a.shape[2]}`);let c={x:u,filter:a},p={strides:t,pad:n,dilations:o},m=k.runKernel(Cl,c,p);return l?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var jg=E({dilation2d_:FE});var bo={};Ke(bo,{assertAndGetBroadcastShape:()=>Le,getBroadcastDims:()=>qg,getReductionAxes:()=>Sp});function qg(r,e){let t=r.length,n=[];for(let o=0;o<t;o++){let s=t-1-o,i=r[s]||1;(e[e.length-1-o]||1)>1&&i===1&&n.unshift(s)}return n}function Sp(r,e){let t=[];for(let n=0;n<e.length;n++){let o=r[r.length-n-1],s=e.length-n-1,i=e[s];(o==null||o===1&&i>1)&&t.unshift(s)}return t}function Le(r,e){let t=[],n=Math.max(r.length,e.length);for(let o=0;o<n;o++){let s=r[r.length-o-1];s==null&&(s=1);let i=e[e.length-o-1];if(i==null&&(i=1),s===1)t.unshift(i);else if(i===1)t.unshift(s);else if(s!==i){let a=`Operands could not be broadcast together with shapes ${r} and ${e}.`;throw Error(a)}else t.unshift(s)}return t}function DE(r,e){let t=T(r,"a","equal","string_or_numeric"),n=T(e,"b","equal","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(Zs,o)}var Cp=E({equal_:DE});function PE(r,e,t){let n=T(e,"a","where"),o=T(t,"b","where"),s=T(r,"condition","where","bool"),i=Le(Le(s.shape,n.shape),o.shape),a=xo(s,i),u=xo(n,i),l=xo(o,i),c={condition:a,t:u,e:l};return k.runKernel(Ic,c)}var en=E({where_:PE});function LE(r){let t={x:T(r,"x","zerosLike")};return k.runKernel(Jc,t)}var wt=E({zerosLike_:LE});function BE(r,e){let t=T(r,"a","div"),n=T(e,"b","div");[t,n]=Ne(t,n);let o=we(t,n),s=wt(o),i=Cp(n,s);return en(i,s,o)}var Xg=E({divNoNan_:BE});function ME(r,e){let t=T(r,"t1","dot"),n=T(e,"t2","dot");_((t.rank===1||t.rank===2)&&(n.rank===1||n.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${n.rank}.`);let o=t.rank===1?t.size:t.shape[1],s=n.rank===1?n.size:n.shape[0];if(_(o===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${o} and ${s}.`),t.rank===1&&n.rank===1){let i=W(t,[1,-1]),a=W(n,[-1,1]),u=Be(i,a);return W(u,[])}else if(t.rank===1&&n.rank===2){let i=W(t,[1,-1]),a=W(n,[n.shape[0],n.shape[1]]),u=Be(i,a);return W(u,[u.size])}else if(t.rank===2&&n.rank===1){let i=W(n,[-1,1]),a=Be(t,i);return W(a,[a.size])}else{let i=W(n,[n.shape[0],n.shape[1]]);return Be(t,i)}}var Yg=E({dot_:ME});function VE(r,...e){let t=e.map((o,s)=>T(o,`tensors${s}`,"einsum")),n={equation:r};return k.runKernel(Nl,t,n)}var Zg=E({einsum_:VE});function UE(r){let t={x:T(r,"x","elu","float32")};return k.runKernel(Il,t)}var Ep=E({elu_:UE});function GE(r){let e=T(r,"x","erf");_(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=_e(e,"float32"));let t={x:e};return k.runKernel($l,t)}var Qg=E({erf_:GE});function _d(r,e){for(let t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function Jg(r,e,t){let n=r.length+e.length,o=[],s=0,i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?o.push(r[s++]):o.push(e[i++]);return o}function zE(r,e){let t=[],n=r.length;for(let s=0;s<n;s++)e.indexOf(s)===-1&&t.push(r[s]);let o=e.map(s=>r[s]);return[t,o]}function Mn(r,e){let t=e.map(n=>1);return Jg(r,t,e)}function WE(r,e,t){_(_d(e,t),()=>`${r} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function HE(r,e){if(_d(r,e))return null;let t=[];for(let n=0;n<e;++n)r.indexOf(n)===-1&&t.push(n);return r.forEach(n=>t.push(n)),t}function KE(r){return r.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function jE(r,e){let t=[];for(let n=e-r;n<e;++n)t.push(n);return t}function XE(r,e=null,t=!1){let o={x:T(r,"x","max")},s={reductionIndices:e,keepDims:t};return k.runKernel(Xl,o,s)}var wn=E({max_:XE});function YE(r,e=null,t=!1){let o={x:T(r,"x","min")},s={axis:e,keepDims:t};return k.runKernel(ec,o,s)}var Ha=E({min_:YE});function ZE(r,e){let t=T(r,"base","pow"),n=T(e,"exp","pow");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(pc,o)}var Vn=E({pow_:ZE});function ge(r,e){if((qt(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&qt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Vt(r,[],[],e)}function QE(r){let t={x:T(r,"x","sqrt","float32")};return k.runKernel(mi,t)}var Qt=E({sqrt_:QE});function JE(r){let e=T(r,"x","square"),t={};return k.runKernel("Square",{x:e},t)}var $t=E({square_:JE});function e7(r,e=null,t=!1){let n=T(r,"x","sum");n.dtype==="bool"&&(n=_e(n,"int32"));let o={x:n},s={axis:e,keepDims:t};return k.runKernel(Oc,o,s)}var Me=E({sum_:e7});function t7(r,e="euclidean",t=null,n=!1){r=T(r,"x","norm");let o=e0(r,e,t),s=o.shape;if(n){let i=uo(t,r.shape);s=Mn(o.shape,i)}return W(o,s)}function e0(r,e,t=null){if(r.rank===0)return It(r);if(r.rank!==1&&t===null)return e0(W(r,[-1]),e,t);if(r.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return Me(It(r),t);if(e===1/0)return wn(It(r),t);if(e===-1/0)return Ha(It(r),t);if(e==="euclidean"||e===2)return Qt(Me(Vn(It(r),ge(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return wn(Me(It(r),t[0]),t[1]-1);if(e===1/0)return wn(Me(It(r),t[1]),t[0]);if(e===-1/0)return Ha(Me(It(r),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Qt(Me($t(r),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}var ss=E({norm_:t7});function r7(r,e=null,t=!1){return ss(r,"euclidean",e,t)}var t0=E({euclideanNorm_:r7});function n7(r){let t={x:T(r,"x","exp")};return k.runKernel(Qs,t)}var Jt=E({exp_:n7});function o7(r,e=0){let t=T(r,"x","expandDims","string_or_numeric");_(e<=t.rank,()=>"Axis must be <= rank of the tensor");let n={input:t},o={dim:e};return k.runKernel(kl,n,o)}var er=E({expandDims_:o7});function s7(r){let t={x:T(r,"x","expm1")};return k.runKernel(Js,t)}var r0=E({expm1_:s7});function i7(r,e){let t=T(r,"x","tile","string_or_numeric");_(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);let n={x:t},o={reps:e};return k.runKernel(di,n,o)}var vo=E({tile_:i7});function a7(r,e,t,n="float32"){e==null&&(e=r);let o=Ie([r,e],n),s=r<=e?r:e;for(let a=0;a<s;++a)o.set(1,a,a);let i=W(o.toTensor(),[r,e]);if(t==null)return i;if(t.length===1)return vo(er(i,0),[t[0],1,1]);if(t.length===2)return vo(er(er(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return vo(er(er(er(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}var Np=E({eye_:a7});function u7(r){let t={x:T(r,"x","floor","float32")};return k.runKernel(ei,t)}var Ip=E({floor_:u7});function l7(r,e,t=0,n=0){let o=T(r,"x","gather"),s=T(e,"indices","gather","int32"),i={x:o,indices:s},a={axis:t,batchDims:n};return k.runKernel(Dl,i,a)}var $p=E({gather_:l7});function c7(r,e){let t=T(r,"a","greater","string_or_numeric"),n=T(e,"b","greater","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(ti,o)}var is=E({greater_:c7});function p7(r,e){let t=T(r,"a","greaterEqual","string_or_numeric"),n=T(e,"b","greaterEqual","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(ri,o)}var kp=E({greaterEqual_:p7});function m7(r){let t={input:T(r,"input","imag")};return k.runKernel(Bl,t)}var wo=E({imag_:m7});function f7(r){let t={x:T(r,"x","isFinite")};return k.runKernel(Ml,t)}var n0=E({isFinite_:f7});function h7(r){let t={x:T(r,"x","isInf")};return k.runKernel(Vl,t)}var o0=E({isInf_:h7});function d7(r){let t={x:T(r,"x","isNaN")};return k.runKernel(Ul,t)}var s0=E({isNaN_:d7});function g7(r,e=.2){let n={x:T(r,"x","leakyRelu")},o={alpha:e};return k.runKernel(Gl,n,o)}var Ap=E({leakyRelu_:g7});function x7(r,e){let t=T(r,"a","less","string_or_numeric"),n=T(e,"b","less","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(ni,o)}var i0=E({less_:x7});function y7(r,e){let t=T(r,"a","lessEqual","string_or_numeric"),n=T(e,"b","lessEqual","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(oi,o)}var ki=E({lessEqual_:y7});function a0(r,e,t){if(t<=0)throw new Error("The number of values should be positive.");let n={start:r,stop:e,num:t};return k.runKernel(zl,{},n)}function b7(r,e=5,t=1,n=1,o=.5){let s=T(r,"x","localResponseNormalization");_(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),_(Dn(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=s,a=!1;s.rank===3&&(a=!0,i=W(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let u={x:i},l={depthRadius:e,bias:t,alpha:n,beta:o},c=k.runKernel(ql,u,l);return a?W(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var u0=E({localResponseNormalization_:b7});function v7(r){let t={x:T(r,"x","log","float32")};return k.runKernel(si,t)}var Un=E({log_:v7});function w7(r){let t={x:T(r,"x","log1p")};return k.runKernel(Wl,t)}var _p=E({log1p_:w7});function l0(r,e){_(js(r),()=>"The f passed in variableGrads(f) must be a function"),_(e==null||Array.isArray(e)&&e.every(l=>l instanceof Ln),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let t=e!=null;if(!t){e=[];for(let l in k.registeredVariables)e.push(k.registeredVariables[l])}let n=t?e.filter(l=>!l.trainable):null,o=e.length;e=e.filter(l=>l.trainable),_(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${o} variables is trainable.`);let s=!0,{value:i,grads:a}=k.gradients(r,e,null,s);_(a.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),_(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let u={};return e.forEach((l,c)=>{a[c]!=null&&(u[l.name]=a[c])}),n!=null&&n.forEach(l=>u[l.name]=null),{value:i,grads:u}}function tr(r){return k.customGrad(r)}function T7(r){let t={x:T(r,"x","neg")};return k.runKernel($a,t)}var Gt=E({neg_:T7});function S7(r){let t={x:T(r,"x","softplus")};return k.runKernel(Rc,t)}var Rp=E({softplus_:S7});function C7(r){let e=T(r,"x","logSigmoid");return tr(n=>({value:Gt(Rp(Gt(n))),gradFunc:i=>ee(i,Gr(Gt(n)))}))(e)}var c0=E({logSigmoid_:C7});function E7(r,e){let t=T(r,"a","sub"),n=T(e,"b","sub");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(hi,o)}var ye=E({sub_:E7});function N7(r,e=-1){let t=T(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return tr((o,s)=>{let a=wn(o,e,!0),u=ye(o,a),l=ye(_e(u,"float32"),Un(Me(Jt(u),e,!0)));return s([l]),{value:l,gradFunc:(p,m)=>{let[f]=m,d=!0,y=Jt(f);return ye(p,ee(Me(p,e,d),y))}}})(t)}var p0=E({logSoftmax_:N7});function I7(r,e=null,t=!1){let n=T(r,"x","logSumExp"),o=uo(e,n.shape),s=wn(n,o,!0),i=ye(n,s),a=Jt(i),u=Me(a,o),l=Un(u),c=ue(W(s,l.shape),l);if(t){let p=Mn(c.shape,o);return W(c,p)}return c}var Op=E({logSumExp_:I7});function $7(r,e){let t=T(r,"a","logicalAnd","bool"),n=T(e,"b","logicalAnd","bool");Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(Hl,o)}var as=E({logicalAnd_:$7});function k7(r){let t={x:T(r,"x","logicalNot","bool")};return k.runKernel(Kl,t)}var Fp=E({logicalNot_:k7});function A7(r,e){let t=T(r,"a","logicalOr","bool"),n=T(e,"b","logicalOr","bool");Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(jl,o)}var Dp=E({logicalOr_:A7});function _7(r,e){let t=T(r,"a","logicalXor","bool"),n=T(e,"b","logicalXor","bool");return Le(t.shape,n.shape),as(Dp(r,e),Fp(as(r,e)))}var m0=E({logicalXor_:_7});var Pp=2147483648;function R7(r,e,t="left"){let n=T(r,"sortedSequence","searchSorted"),o=T(e,"values","searchSorted"),s=n.shape[n.shape.length-1],i=o.shape[o.shape.length-1],a=W(n,[-1,s]),u=W(o,[-1,i]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ae(u.shape)>=Pp)throw new Error(`values tensor size must less than ${Pp}`);if(a.shape[1]>=Pp)throw new Error(`trailing dim_size must less than ${Pp} for int32 output type, was ${a.shape[1]}`);let l={sortedSequence:a,values:u},c={side:t};return k.runKernel(Nc,l,c)}var Ka=E({searchSorted_:R7});function f0(r,e){return Ka(r,e,"left")}function O7(r,e,t,n,o){let s=T(r,"x","maxPool"),i=1,a=s,u=!1;s.rank===3&&(u=!0,a=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),_(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),_(Bt(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),ht("maxPool",n,o);let l={x:a},c={filterSize:e,strides:t,pad:n,dimRoundingMode:o},p=k.runKernel(Yl,l,c);return u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Lp=E({maxPool_:O7});function F7(r,e=[1,1,1],t,n,o,s="NDHWC"){let i=T(r,"x","maxPool3d"),a=i,u=!1;i.rank===4&&(u=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),_(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),_(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),ht("maxPool3d",n,o);let l={x:a},c={filterSize:e,strides:t,pad:n,dimRoundingMode:o,dataFormat:s},p=k.runKernel(Zl,l,c);return u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var h0=E({maxPool3d_:F7});function D7(r,e,t,n,o=!1){let i={x:T(r,"x","maxPoolWithArgmax")},a={filterSize:e,strides:t,pad:n,includeBatchInIndex:o},u=k.runKernel(Ql,i,a);return{result:u[0],indexes:u[1]}}var d0=E({maxPoolWithArgmax_:D7});function P7(r,e){let t=T(r,"a","maximum"),n=T(e,"b","maximum");[t,n]=Ne(t,n),t.dtype==="bool"&&(t=_e(t,"int32"),n=_e(n,"int32")),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(ii,o)}var Bp=E({maximum_:P7});function L7(r,e=null,t=!1){let o={x:T(r,"x","mean")},s={axis:e,keepDims:t};return k.runKernel(Jl,o,s)}var us=E({mean_:L7});function zr(r,e="float32"){if(et(r),e==="complex64"){let n=zr(r,"float32"),o=zr(r,"float32");return Yt(n,o)}let t=Xs(Ae(r),e);return k.makeTensor(t,r,e)}function Tn(r,e="float32"){if(et(r),e==="complex64"){let n=Tn(r,"float32"),o=zr(r,"float32");return Yt(n,o)}let t=Sa(Ae(r),e);return k.makeTensor(t,r,e)}function g0(r,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(r===void 0)return[];let n=T(r,"x","meshgrid",r instanceof Pe?r.dtype:"float32");if(e===void 0)return[n];let o=T(e,"y","meshgrid",e instanceof Pe?e.dtype:"float32"),s=Ae(n.shape),i=Ae(o.shape);return t==="xy"?(n=W(n,[1,-1]),o=W(o,[-1,1]),[Be(Tn([i,1],n.dtype),n),Be(o,Tn([1,s],o.dtype))]):(n=W(n,[-1,1]),o=W(o,[1,-1]),[Be(n,Tn([1,i],n.dtype)),Be(Tn([s,1],o.dtype),o)])}function B7(r,e){let t=T(r,"a","minimum"),n=T(e,"b","minimum");[t,n]=Ne(t,n),t.dtype==="bool"&&(t=_e(t,"int32"),n=_e(n,"int32")),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(ai,o)}var Mp=E({minimum_:B7});function M7(r,e,t){_(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);let n=T(r,"x","mirrorPad");if(n.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");_(e.length===n.rank,()=>`Padding doesn't match input. Must be ${n.rank}. Got ${e.length}.`);let o=t==="reflect"?1:0;for(let a=0;a<n.rank;a++)_(e[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),_(e[a][0]>=0&&e[a][0]<=n.shape[a]-o&&e[a][1]>=0&&e[a][1]<=n.shape[a]-o,()=>`Padding in dimension ${a} cannot be greater than or equal to ${n.shape[a]-o} or less than 0 for input of shape ${n.shape}`);let s={paddings:e,mode:t},i={x:n};return k.runKernel(tc,i,s)}var x0=E({mirrorPad_:M7});function V7(r,e){let t=T(r,"a","mod"),n=T(e,"b","mod");[t,n]=Ne(t,n);let o={a:t,b:n};return k.runKernel(rc,o)}var y0=E({mod_:V7});function U7(r,e=null,t=!1){r=T(r,"x","moments");let n=uo(e,r.shape),o=us(r,n,t),s=o.shape;t||(s=Mn(o.shape,n));let i=$t(ye(_e(r,"float32"),W(o,s))),a=us(i,n,t);return{mean:o,variance:a}}var b0=E({moments_:U7});function G7(r,e,t,n){let o=T(e,"data","multiRNNCell"),s=ts(t,"c","multiRNNCell"),i=ts(n,"h","multiRNNCell"),a=o,u=[];for(let p=0;p<r.length;p++){let m=r[p](a,s[p],i[p]);u.push(m[0]),u.push(m[1]),a=m[1]}let l=[],c=[];for(let p=0;p<u.length;p+=2)l.push(u[p]),c.push(u[p+1]);return[l,c]}var v0=E({multiRNNCell_:G7});function z7(r,e,t,n=!1){let o=T(r,"logits","multinomial"),s=o.size,i=o.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();let u={logits:i===1?W(o,[1,-1]):o},l={numSamples:e,seed:t,normalized:n},c=k.runKernel(nc,u,l);return i===1?W(c,[c.size]):c}var w0=E({multinomial_:z7});function W7(r,e){let t=T(r,"a","notEqual","string_or_numeric"),n=T(e,"b","notEqual","string_or_numeric");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n};return k.runKernel(li,o)}var Vp=E({notEqual_:W7});function H7(r,e,t=1,n=0,o="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);let i={indices:T(r,"indices","oneHot","int32")},a={dtype:o,depth:e,onValue:t,offValue:n};return k.runKernel(uc,i,a)}var T0=E({oneHot_:H7});function K7(r){let t={x:T(r,"x","onesLike")};return k.runKernel(ac,t)}var S0=E({onesLike_:K7});function j7(r,e){let t=T(r,"v1","outerProduct"),n=T(e,"v2","outerProduct");_(t.rank===1&&n.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${n.rank}.`);let o=W(t,[-1,1]),s=W(n,[1,-1]);return Be(o,s)}var C0=E({outerProduct_:j7});function q7(r,e,t=0){let n=T(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let o={paddings:e,constantValue:t},s={x:n};return k.runKernel(cc,s,o)}var Sn=E({pad_:q7});function X7(r,e,t=0){return _(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Sn(r,[e],t)}var E0=E({pad1d_:X7});function Y7(r,e,t=0){return _(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Sn(r,e,t)}var N0=E({pad2d_:Y7});function Z7(r,e,t=0){return _(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Sn(r,e,t)}var I0=E({pad3d_:Z7});function Q7(r,e,t=0){return _(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Sn(r,e,t)}var $0=E({pad4d_:Q7});function J7(r,e,t){let n=T(r,"x","spaceToBatchND");_(n.rank>=1+e.length,()=>`input rank ${n.rank} should be > than [blockShape] ${e.length}`),_(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),_(n.shape.reduce((i,a,u)=>u>0&&u<=e.length?i&&(a+t[u-1][0]+t[u-1][1])%e[u-1]===0:i,!0),()=>`input spatial dimensions ${n.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);let o={x:n},s={blockShape:e,paddings:t};return k.runKernel(Fc,o,s)}var Up=E({spaceToBatchND_:J7});function eN(r,e,t,n,o,s,i){o==null&&(o=[1,1]),s==null&&(s=1),n===0&&(n="valid");let a=T(r,"x","maxPool"),u=a,l=!1;a.rank===3&&(l=!0,u=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),_(Bt(s,o),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${o}'`);let c=kd(u.shape,e,s,o,n),p=[c.dilationHeight,c.dilationWidth],m;n==="same"?m=rN([c.filterHeight,c.filterWidth],p):m=[[0,0],[0,0]];let f=p[0]===1&&p[1]===1,[d,y]=tN([c.inHeight,c.inWidth],p,m),x=f?n:"valid",b=f?u:Up(u,p,d),A=(t==="avg"?()=>yp(b,e,s,x,i):()=>Lp(b,e,s,x,i))(),O=f?A:bp(A,p,y);return l?W(O,[O.shape[1],O.shape[2],O.shape[3]]):O}function tN(r,e,t){let n=t.map(c=>c[0]),o=t.map(c=>c[1]),s=r.concat(n,o),i=e.map((c,p)=>(c-s[p]%c)%c),a=o.map((c,p)=>c+i[p]),u=e.map((c,p)=>[n[p],a[p]]),l=e.map((c,p)=>[0,i[p]]);return[u,l]}function rN(r,e){let n=r.map((i,a)=>i+(i-1)*(e[a]-1)).map(i=>i-1),o=n.map(i=>Math.floor(i/2)),s=n.map((i,a)=>i-o[a]);return n.map((i,a)=>[o[a],s[a]])}var k0=E({pool_:eN});function nN(r,e){let t=T(r,"x","prelu"),n=T(e,"alpha","prelu"),o={x:t,alpha:n};return k.runKernel(mc,o)}var Gp=E({prelu_:nN});function oN(r,e=null,t=!1){let n=T(r,"x","prod");n.dtype==="bool"&&(n=_e(n,"int32"));let o={x:n},s={axis:e,keepDims:t};return k.runKernel(ka,o,s)}var A0=E({prod_:oN});function sN(r,e,t,n){let o=r.map((c,p)=>T(c,`tensors${p}`,"raggedGather","int32")),s=T(e,"paramsDenseValues","raggedGather"),i=T(t,"indices","raggedGather","int32"),a={paramsNestedSplits:o,paramsDenseValues:s,indices:i},u={outputRaggedRank:n},l=k.runKernel(fc,a,u);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}var _0=E({raggedGather_:sN});function iN(r,e,t){let n=T(r,"starts","raggedRange"),o=T(e,"limits","raggedRange",n.dtype),s=T(t,"deltas","raggedRange",n.dtype),i={starts:n,limits:o,deltas:s},a=k.runKernel(hc,i);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}var R0=E({raggedRange_:iN});function aN(r,e,t,n,o){let s=T(r,"shape","raggedTensorToTensor","int32"),i=T(e,"values","raggedTensorToTensor"),a=T(t,"defaultValue","raggedTensorToTensor",i.dtype),u=n.map((p,m)=>T(p,`tensors${m}`,"raggedTensorToTensor","int32")),l={shape:s,values:i,defaultValue:a,rowPartitionTensors:u},c={rowPartitionTypes:o};return k.runKernel(dc,l,c)}var O0=E({raggedTensorToTensor_:aN});function uN(r,e,t){et(r);let n=Ae(r),o=null;if(t==null||t==="float32")o=new Float32Array(n);else if(t==="int32")o=new Int32Array(n);else if(t==="bool")o=new Uint8Array(n);else throw new Error(`Unknown data type ${t}`);for(let s=0;s<n;s++)o[s]=e();return k.makeTensor(o,r,t)}var F0=E({rand_:uN});var Kp=zh(Z0());var cs=class{constructor(e,t,n,o,s){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let i=s||Math.random();this.random=Kp.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){let o=this.nextVal;return this.nextVal=NaN,o}let e,t,n=!1;for(;!n;){let o,s,i;do o=2*this.random()-1,s=2*this.random()-1,i=o*o+s*s;while(i>=1||i===0);let a=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*o*a,t=this.mean+this.stdDev*s*a,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},Wp=class{constructor(e,t,n,o){this.alpha=e,this.beta=1/t,this.dtype=n;let s=o||Math.random();this.randu=Kp.alea(s.toString()),this.randn=new cs(0,1,n,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,o,s,i;for(;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=o*o,t=1-.331*e*e,n=.5*e+this.d*(1-i+Math.log(i)),s=this.randu(),s<t||Math.log(s)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}},Hp=class{constructor(e=0,t=1,n,o){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Kp.alea(o)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function dN(r,e,t=1,n="float32",o){if(et(r),t==null&&(t=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error(`Unsupported data type ${n}`);let s=new Wp(e,t,n,o),i=Ie(r,n);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var Q0=E({randomGamma_:dN});function gN(r,e=0,t=1,n,o){if(et(r),n!=null&&n==="bool")throw new Error(`Unsupported data type ${n}`);let s=new cs(e,t,n,!1,o),i=Ie(r,n);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var jp=E({randomNormal_:gN});function xN(r,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return jp(r,0,1,e,t)}var J0=E({randomStandardNormal_:xN});function yN(r,e=0,t=1,n="float32",o){et(r);let s=Ie(r,n),i=new Hp(e,t,null,o);for(let a=0;a<s.values.length;a++)s.values[a]=i.nextValue();return s.toTensor()}var qp=E({randomUniform_:yN});function To(r,e,t=1,n="float32"){if(t===0)throw new Error("Cannot have a step of zero");let o={start:r,stop:e,step:t,dtype:n};return k.runKernel(gc,{},o)}function bN(r){let t={input:T(r,"input","real")};return k.runKernel(Aa,t)}var Gn=E({real_:bN});function vN(r){let t={x:T(r,"x","reciprocal")};return k.runKernel(xc,t)}var e4=E({reciprocal_:vN});function wN(r){let t={x:T(r,"x","relu")};return k.runKernel(yc,t)}var So=E({relu_:wN});function TN(r){let t={x:T(r,"x","relu6")};return k.runKernel(Tc,t)}var Xp=E({relu6_:TN});function SN(r,e){let n={x:T(r,"x","reverse")},o={dims:e};return k.runKernel(Sc,n,o)}var Ir=E({reverse_:SN});function CN(r){let e=T(r,"x","reverse");return _(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Ir(e,0)}var t4=E({reverse1d_:CN});function EN(r,e){let t=T(r,"x","reverse");return _(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),Ir(t,e)}var r4=E({reverse2d_:EN});function NN(r,e){let t=T(r,"x","reverse");return _(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),Ir(t,e)}var n4=E({reverse3d_:NN});function IN(r,e){let t=T(r,"x","reverse");return _(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),Ir(t,e)}var o4=E({reverse4d_:IN});function $N(r){let t={x:T(r,"x","round")};return k.runKernel(Cc,t)}var Yp=E({round_:$N});function kN(r){let t={x:T(r,"x","rsqrt","float32")};return k.runKernel(ci,t)}var s4=E({rsqrt_:kN});function AN(r){let t={x:T(r,"x","selu")};return k.runKernel($c,t)}var i4=E({selu_:AN});function _N(r,e,t,n,o,s=[1,1],i="NHWC"){let a=T(r,"x","separableConv2d"),u=T(e,"depthwiseFilter","separableConv2d"),l=T(t,"pointwiseFilter","separableConv2d"),c=a,p=!1;if(a.rank===3&&(p=!0,c=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");_(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),_(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),_(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),_(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),_(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let m=u.shape[2],f=u.shape[3];_(l.shape[2]===m*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${m*f}, but got ${l.shape[2]}.`);let d=$i(c,u,n,o,i,s),x=yo(d,l,1,"valid",i);return p?W(x,[x.shape[1],x.shape[2],x.shape[3]]):x}var a4=E({separableConv2d_:_N});async function RN(r,e){let t=T(r,"x","setdiff1d"),n=T(e,"y","setdiff1d");_(t.dtype===n.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${n.dtype}).`),_(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),_(n.rank===1,()=>`y should be 1D tensor, but got y (${n.shape}).`);let o=await t.data(),s=await n.data(),i=new Set(s),a=0;for(let c=0;c<o.length;c++)i.has(o[c])||a++;let u=new Jr([a],t.dtype),l=new Jr([a],"int32");for(let c=0,p=0;c<o.length;c++)i.has(o[c])||(u.values[p]=o[c],l.values[p]=c,p++);return[u.toTensor(),l.toTensor()]}var u4=RN;function ON(r){let t={x:T(r,"x","sign")};return k.runKernel(_c,t)}var l4=E({sign_:ON});function FN(r){let t={x:T(r,"x","sin","float32")};return k.runKernel(kc,t)}var c4=E({sin_:FN});function DN(r){let t={x:T(r,"x","sinh")};return k.runKernel(Ac,t)}var p4=E({sinh_:DN});function PN(r,e,t){let n=T(r,"x","slice1d");return _(n.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${n.rank} tensor`),ve(n,[e],[t])}var m4=E({slice1d_:PN});function LN(r,e,t){let n=T(r,"x","slice2d");return _(n.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${n.rank} tensor`),ve(n,e,t)}var f4=E({slice2d_:LN});function BN(r,e,t){let n=T(r,"x","slice3d");return _(n.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${n.rank} tensor`),ve(n,e,t)}var h4=E({slice3d_:BN});function MN(r,e,t){let n=T(r,"x","slice4d");return _(n.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${n.rank} tensor`),ve(n,e,t)}var d4=E({slice4d_:MN});function VN(r,e=-1){let t=T(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);let n={logits:t},o={dim:e};return k.runKernel(Pc,n,o)}var g4=E({softmax_:VN});function UN(r){_(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);let e={input:r};return k.runKernel(Al,e)}var Ai=E({fft_:UN});function GN(r){_(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);let e={input:r};return k.runKernel(Ll,e)}var ps=E({ifft_:GN});function zN(r){let e=r.shape[r.shape.length-1],t=r.size/e,n;if(e<=2){let o=W(r,[t,e]);n=ps(o)}else{let o=[t,2*(e-1)],s=W(Gn(r),[t,e]),i=W(wo(r),[t,e]),a=Ir(ve(s,[0,1],[t,e-2]),1),u=ee(Ir(ve(i,[0,1],[t,e-2]),1),ge(-1)),l=qe([s,a],1),c=qe([i,u],1),p=W(Yt(l,c),[o[0],o[1]]);n=ps(p)}if(n=Gn(n),r.rank===3&&r.shape[0]!==0){let o=n,s=r.shape[0];n=W(n,[s,n.shape[0]/s,n.shape[1]]),o.dispose()}return n}var Zp=E({irfft_:zN});function WN(r,e,t=0){let o={x:T(r,"x","split")},s={numOrSizeSplits:e,axis:t};return k.runKernel(Dc,o,s)}var zn=E({split_:WN});function HN(r,e){_(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let t=r.shape[r.shape.length-1],n=r.size/t,o;if(e!=null&&e<t){let d=r.shape.map(x=>0),y=r.shape.map(x=>x);y[r.shape.length-1]=e,o=ve(r,d,y),t=e}else if(e!=null&&e>t){let d=r.shape.map(y=>y);d[r.shape.length-1]=e-t,o=qe([r,zr(d)],r.shape.length-1),t=e}else o=r;let s=wt(o),i=W(Yt(o,s),[n,t]),a=Ai(i),u=Math.floor(t/2)+1,l=Gn(a),c=wo(a),p=zn(l,[u,t-u],l.shape.length-1),m=zn(c,[u,t-u],c.shape.length-1),f=o.shape.slice();return f[o.shape.length-1]=u,W(Yt(p[0],m[0]),f)}var _i=E({rfft_:HN});function KN(r,e){let t=T(r,"a","squaredDifference"),n=T(e,"b","squaredDifference");[t,n]=Ne(t,n),Le(t.shape,n.shape);let o={a:t,b:n},s={};return k.runKernel(fi,o,s)}var Qp=E({squaredDifference_:KN});function jN(r,e){let t=T(r,"x","squeeze","string_or_numeric");return W(t,Wh(t.shape,e).newShape)}var pt=E({squeeze_:jN});function qN(r,e=0){let t=ts(r,"tensors","stack","string_or_numeric");_(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&_(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");let n=t,o={axis:e};return k.runKernel(lc,n,o)}var zt=E({stack_:qN});function XN(r,e=0){let n={x:T(r,"x","step")},o={alpha:e};return k.runKernel(ep,n,o)}var Jp=E({step_:XN});function YN(r,e,t,n,o=0,s=0,i=0,a=0,u=0){let c={x:T(r,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:n,beginMask:o,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:u};return k.runKernel(Gc,c,p)}var x4=E({stridedSlice_:YN});function ZN(r){let t={x:T(r,"x","tan","float32")};return k.runKernel(Kc,t)}var y4=E({tan_:ZN});function dt(r,e){Er(r);let t=Xt(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Vt(r,null,t,e)}function $r(r,e,t){if(Er(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let n=Xt(r,t);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Vt(r,e,n,t)}function em(r,e,t){if(Er(r),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");let n=Xt(r,t);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Vt(r,e,n,t)}function b4(r,e,t){if(Er(r),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");let n=Xt(r,t);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Vt(r,e,n,t)}function v4(r,e,t){if(Er(r),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");let n=Xt(r,t);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Vt(r,e,n,t)}function w4(r,e,t){if(Er(r),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");let n=Xt(r,t);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||n,Vt(r,e,n,t)}function QN(r,e=1,t=!0){let n=T(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let o=n.shape[n.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>o)throw new Error(`'k' passed to topk() must be <= the last dimension (${o}) but got ${e}`);let s={x:n},i={k:e,sorted:t},[a,u]=k.runKernel(qc,s,i);return{values:a,indices:u}}var T4=E({topk_:QN});function JN(r,e=0,t=1,n,o){if(et(r),n!=null&&n==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new cs(e,t,n,!0,o),i=Ie(r,n);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var S4=E({truncatedNormal_:JN});function e8(r,e=0){let t=T(r,"x","unique","string_or_numeric");_(t.rank>0,()=>"The input tensor must be at least 1D");let n={x:t},o={axis:e},[s,i]=k.runKernel(Yc,n,o);return{values:s,indices:i}}var C4=E({unique_:e8});function t8(r,e,t){let n=T(r,"x","unsortedSegmentSum"),o=T(e,"segmentIds","unsortedSegmentSum","int32");_(Dn(t),()=>"numSegments must be of dtype int");let s={x:n,segmentIds:o},i={numSegments:t};return k.runKernel(Qc,s,i)}var E4=E({unsortedSegmentSum_:t8});function r8(r,e=0){let t=T(r,"x","unstack","string_or_numeric");_(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);let n={value:t},o={axis:e};return k.runKernel(Zc,n,o)}var kr=E({unstack_:r8});function N4(r,e){return Ka(r,e,"right")}function I4(r,e=!0,t,n){return k.makeVariable(r,e,t,n)}function tm(r,e){let t=[];for(let s=0;s<e.length;s++)e[s]&&t.push(s);let n=Ie(r,"int32"),o=Ie([t.length,r.length],"int32");for(let s=0;s<t.length;s++){let i=n.indexToLoc(t[s]),a=s*r.length;o.values.set(i,a)}return o.toTensor()}async function n8(r){let e=T(r,"condition","whereAsync","bool"),t=await e.data(),n=tm(e.shape,t);return r!==e&&e.dispose(),n}var rm=n8;async function o8(r,e,t){let n=T(r,"tensor","boolMask"),o=T(e,"mask","boolMask","bool"),s=t==null?0:t,i=o.rank,a=n.shape;_(i>0,()=>"mask cannot be scalar"),at(a.slice(s,s+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let y=s;y<s+i;y++)u*=a[y];let l=a.slice(0,s).concat([u],a.slice(s+i)),c=W(n,l),p=W(o,[-1]),m=await rm(p),f=pt(m,[1]),d=$p(c,f,s);return r!==n&&n.dispose(),e!==o&&o.dispose(),f.dispose(),c.dispose(),p.dispose(),m.dispose(),d}var s8=o8;function i8(r,e,t){let n=T(r,"x","transpose");if(e==null&&(e=n.shape.map((i,a)=>a).reverse()),_(n.rank===e.length,()=>`Error in transpose: rank of input ${n.rank} must match length of perm ${e}.`),e.forEach(i=>{_(i>=0&&i<n.rank,()=>`All entries in 'perm' must be between 0 and ${n.rank-1} but got ${e}`)}),n.rank<=1)return n.clone();let o={x:n},s={perm:e};return n.dtype==="complex64"?be(()=>{let i=Gn(n),a=wo(n);return i=k.runKernel(gi,{x:i},s),a=k.runKernel(gi,{x:a},s),t&&(a=Gt(a)),Yt(i,a)}):k.runKernel(gi,o,s)}var nm=E({transpose_:i8});function a8(r,e,t,n,o=!0){let s=T(r,"v","movingAverage"),i=T(e,"x","movingAverage"),a=T(t,"decay","movingAverage");L3(s,i),_(Br(s.shape,i.shape),()=>"Shape mismatch in v and x");let u=ge(1),l=ye(u,a),c=ee(ye(i,s),l);if(o){_(n!=null,()=>"When using zeroDebias: true, step is required.");let p=T(n,"step","movingAverage");c=we(c,ye(u,Vn(a,p)))}return ue(s,c)}var u8=E({movingAverage_:a8});function $4(r,e,t){let n=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${r}, sliceDim: ${n}, and batchDim: ${o}.`;if(t.rank<o)throw new Error(s+` update.rank < ${o}. `);if(r.length<n+(t.rank-o))throw new Error(s+` Output shape length < ${n+(t.rank-o)}`);if(t.rank!==o+r.length-n)throw new Error(s+` update.rank != ${o+r.length-n}`);for(let i=0;i<o;++i)if(t.shape[i]!==e.shape[i])throw new Error(s+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-o;++i)if(t.shape[i+o]!==r[i+n])throw new Error(s+` updates.shape[${i+o}] (${t.shape[i+o]}) != shape[${i+o}] (${r[i+o]})`)}function Bd(r,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}$4(t,e,r)}function l8(r,e,t){let n=e.shape.length,o=n>1?e.shape[n-1]:1,s=t.length,i=1;for(let p=o;p<s;++p)i*=t[p];let a=o<1?1:o,u=Ae(e.shape)/a,l=[...fn(t.slice(0,o)),1],c=Ae(t);return{sliceRank:o,numUpdates:u,sliceSize:i,strides:l,outputSize:c}}function p8(r,e,t){et(t);let n=T(r,"indices","scatterND","int32"),o=T(e,"updates","scatterND");Bd(o,n,t);let s={indices:n,updates:o},i={shape:t};return k.runKernel(Ec,s,i)}var m8=E({scatterND_:p8});function k4(r,e,t,n){if(r.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${r.dtype}.`);if(r.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${r.shape}.`);let o=r.rank>0?r.shape[0]:1,s=r.rank>1?r.shape[1]:1;if(t.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${s}.`);let i=e.size;if(!(e.rank===0||e.rank===1&&i===o))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${o}]`);if(e.dtype!==n.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function h8(r,e,t,n=0){et(t);let o=T(r,"sparseIndices","sparseToDense","int32"),s=T(e,"sparseValues","sparseToDense","string_or_numeric"),i=T(n,"defaultValue","sparseToDense",s.dtype);k4(o,s,t,i);let a={sparseIndices:o,sparseValues:s,defaultValue:i},u={outputShape:t};return k.runKernel(Uc,a,u)}var d8=E({sparseToDense_:h8});function g8(r,e){let t=T(e,"indices","gatherND","int32"),o={params:T(r,"x","gatherND","string_or_numeric"),indices:t};return k.runKernel(Pl,o)}var x8=E({gatherND_:g8});function A4(r,e){if(e==null)return r.shape.slice();if(Br(r.shape,e))return e;if(r.shape.length===e.length){let t=[];for(let n=0;n<r.shape.length;n++)e[n]==null&&r.shape[n]!=null?t.push(r.shape[n]):t.push(e[n]);return t}return e}function y8(r,e,t,n){let o=T(r,"x","dropout");if(_(o.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${o.dtype} tensor instead.`),_(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return r instanceof Pe?o.clone():o;let s=A4(o,t),i=1-e,a=we(Ip(ue(qp(s,0,1,"float32",n),i)),i);return ee(o,a)}var b8=E({dropout_:y8});function Md(r){return Math.floor(Math.pow(2,Math.ceil(Math.log(r)/Math.log(2))))}function ja(r,e,t){let n=1-r%2,o=new Float32Array(r);for(let s=0;s<r;++s){let i=2*Math.PI*s/(r+n-1);o[s]=e-t*Math.cos(i)}return dt(o,"float32")}async function v8(r,e,t=1){let n=T(r,"predictions","inTopK"),o=T(e,"targets","inTopK");_(n.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${n.rank}`),_(n.rank-1===o.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${n.rank} and targets rank ${o.rank}`),at(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=n.shape[n.shape.length-1];_(t>0&&t<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${t}`);let i=await n.data(),a=await o.data(),[u,l]=[i.length/s,s],c=Hh("bool",u);for(let p=0;p<u;p++){let m=p*l,f=i.subarray(m,m+l),d=[];for(let y=0;y<f.length;y++)d.push({value:f[y],index:y});d.sort((y,x)=>x.value-y.value),c[p]=0;for(let y=0;y<t;y++)if(d[y].index===a[p]){c[p]=1;break}}return r!==n&&n.dispose(),e!==o&&o.dispose(),Ut(c,o.shape,"bool")}var w8=v8;var Vd={};Ke(Vd,{conv2d:()=>R4,depthwiseConv2d:()=>D4,matMul:()=>P4});function T8(r,e,t,n,o,s="NHWC",i){let a=r;r.rank===3&&(a=W(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let u=e;u.rank===3&&(u=W(e,[1,e.shape[0],e.shape[1],e.shape[2]])),_(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),_(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),_(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);let l=s==="NHWC"?a.shape[3]:a.shape[1],c=s==="NHWC"?u.shape[3]:u.shape[1];_(l===t[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${t[2]}.`),_(c===t[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${t[3]}).`),ht("conv2dDerFilter",o,i);let p={x:a,dy:u},m={strides:n,pad:o,dataFormat:s,dimRoundingMode:i,filterShape:t};return k.runKernel(ll,p,m)}var _4=E({conv2DBackpropFilter_:T8});function ms(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return ee(r,Jp(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function fs(r,e){let t=e,n=Sp(r.shape,e.shape);return n.length>0&&(t=Me(t,n)),W(t,r.shape)}function hs(r,e,t,n){if(e==="linear")return r;if(e==="relu")return So(r);if(e==="elu")return Ep(r);if(e==="relu6")return Xp(r);if(e==="prelu")return Gp(r,t);if(e==="leakyrelu")return Ap(r,n);if(e==="sigmoid")return Gr(r);throw new Error(`Unknown fused activation ${e}.`)}var ds=(r,e)=>!(r>0)||e==="linear";function S8({x:r,filter:e,strides:t,pad:n,dataFormat:o="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",ds(k.state.gradientDepth,u)===!1){_(o==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${o} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let G=yo(r,e,t,n,o,s,i);return a!=null&&(G=ue(G,a)),hs(G,u,l,c)}let p=T(r,"x","conv2d","float32"),m=T(e,"filter","conv2d","float32"),f=p,d=!1;p.rank===3&&(d=!0,f=W(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),_(m.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),ht("fused conv2d",n,i);let y=o==="NHWC"?f.shape[3]:f.shape[1];_(m.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${m.shape[2]}.`),_(Bt(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);let x=os(f.shape,m.shape,t,s,n,i),b;a!=null&&(b=T(a,"bias","fused conv2d"),[b]=Ne(b,p),o==="NHWC"?Le(x.outShape,b.shape):(_(b.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${b.shape.length}.`),_(b.shape.length===0||b.shape[0]===x.outChannels||b.shape[0]===1,()=>`Error in fused conv2d: bias shape (${b.shape}) is not compatible with the number of output channels (${x.outChannels})`)));let $;if(l!=null){let G=l.shape;if(_(G.length<=1||G.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${G.length}.`),G.length===1)_(G[0]===1||G[0]===x.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the number of output channels (${x.outChannels}).`);else if(G.length===3)try{Le(G,x.outShape)}catch(H){let X=`Error in fused conv2d: PReLU activation weights (${G}) is not compatible with the output shape of the conv2d (${x.outShape}).`;throw Error(X)}$=T(l,"prelu weights","fused conv2d")}let A=(G,H)=>{_(o==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${o} but only NHWC is currently supported.`);let[X,q,Y,ie]=H,fe=ms(G,Y,u);_(ns(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let he=Tp(q.shape,fe,X,t,n),$e=_4(q,fe,X.shape,t,n),Oe=[he,$e];if(ie!=null){let ct=fs(ie,fe);Oe.push(ct)}return Oe},O={x:f,filter:m,bias:b,preluActivationWeights:$},M={strides:t,pad:n,dataFormat:o,dilations:s,dimRoundingMode:i,activation:u,leakyreluAlpha:c};return a==null?tr((H,X,q)=>{let Y=k.runKernel(Fa,O,M);return q([X,H,Y]),d&&(Y=W(Y,[Y.shape[1],Y.shape[2],Y.shape[3]])),{value:Y,gradFunc:A}})(f,m):tr((H,X,q,Y)=>{let ie=k.runKernel(Fa,O,M);return Y([X,H,ie,q]),d&&(ie=W(ie,[ie.shape[1],ie.shape[2],ie.shape[3]])),{value:ie,gradFunc:A}})(f,m,b)}var R4=E({fusedConv2d_:S8});function C8(r,e,t,n,o,s=[1,1],i){let a=r;r.rank===3&&(a=W(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let u=e;u.rank===3&&(u=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l={x:a,dy:u},c={strides:n,pad:o,dimRoundingMode:i,dilations:s,filterShape:t};return k.runKernel(wl,l,c)}var O4=E({depthwiseConv2dNativeBackpropFilter_:C8});function E8(r,e,t,n,o,s=[1,1],i){let a=e,u=!1;e.rank===3&&(u=!0,a=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l={dy:a,filter:t},c={strides:n,pad:o,dimRoundingMode:i,dilations:s,inputShape:r},p=k.runKernel(Tl,l,c);return u?W(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var F4=E({depthwiseConv2dNativeBackpropInput_:E8});function N8({x:r,filter:e,strides:t,pad:n,dataFormat:o="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(ds(k.state.gradientDepth,u)===!1){let M=$i(r,e,t,n,o,s,i);return a!=null&&(M=ue(M,a)),hs(M,u,l,c)}let p=T(r,"x","depthwiseConv2d","float32"),m=T(e,"filter","depthwiseConv2d","float32"),f=p,d=!1;p.rank===3&&(d=!0,f=W(p,[1,p.shape[0],p.shape[1],p.shape[2]])),_(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),_(m.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),_(f.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),s==null&&(s=[1,1]),_(Bt(t,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),ht("fused depthwiseConv2d",n,i);let y=os(f.shape,m.shape,t,s,n,i,!0),x;a!=null&&(x=T(a,"bias","fused conv2d"),[x]=Ne(x,p),Le(y.outShape,x.shape));let b;l!=null&&(b=T(l,"prelu weights","fused depthwiseConv2d"));let $=(M,G)=>{_(ns(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[H,X,q,Y]=G,ie=ms(M,q,u),fe=F4(X.shape,ie,H,t,n,s,i),he=O4(X,ie,H.shape,t,n,s,i);if(Y!=null){let $e=fs(x,ie);return[fe,he,$e]}return[fe,he]},A={x:f,filter:m,bias:x,preluActivationWeights:b},O={strides:t,pad:n,dataFormat:o,dilations:s,dimRoundingMode:i,activation:u,leakyreluAlpha:c};return a==null?tr((G,H,X)=>{let q=k.runKernel(Da,A,O);return X([H,G,q]),d&&(q=W(q,[q.shape[1],q.shape[2],q.shape[3]])),{value:q,gradFunc:$}})(f,m):tr((G,H,X,q)=>{let Y=k.runKernel(Da,A,O);return q([H,G,Y,X]),d&&(Y=W(Y,[Y.shape[1],Y.shape[2],Y.shape[3]])),{value:Y,gradFunc:$}})(f,m,x)}var D4=E({fusedDepthwiseConv2d_:N8});function I8({a:r,b:e,transposeA:t=!1,transposeB:n=!1,bias:o,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(ds(k.state.gradientDepth,s)===!1){let ie=Be(r,e,t,n);return o!=null&&(ie=ue(ie,o)),hs(ie,s,i,a)}let u=T(r,"a","fused matMul"),l=T(e,"b","fused matMul");[u,l]=Ne(u,l);let c=t?u.shape[u.rank-2]:u.shape[u.rank-1],p=n?l.shape[l.rank-1]:l.shape[l.rank-2],m=t?u.shape[u.rank-1]:u.shape[u.rank-2],f=n?l.shape[l.rank-2]:l.shape[l.rank-1],d=u.shape.slice(0,-2),y=l.shape.slice(0,-2),x=Ae(d),b=Ae(y);_(c===p,()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${t} and transposeB=${n} must match.`);let A=Le(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([m,f]),O=t?W(u,[x,c,m]):W(u,[x,m,c]),M=n?W(l,[b,f,p]):W(l,[b,p,f]),G;o!=null&&(G=T(o,"bias","fused matMul"),[G]=Ne(G,u),Le(A,G.shape));let H;i!=null&&(H=T(i,"prelu weights","fused matMul"));let X=(ie,fe)=>{let[he,$e,Oe,ct]=fe,Xe=ms(W(ie,Oe.shape),Oe,s),Ye,bt;if(!t&&!n?(Ye=Be(Xe,$e,!1,!0),bt=Be(he,Xe,!0,!1)):!t&&n?(Ye=Be(Xe,$e,!1,!1),bt=Be(Xe,he,!0,!1)):t&&!n?(Ye=Be($e,Xe,!1,!0),bt=Be(he,Xe,!1,!1)):(Ye=Be($e,Xe,!0,!0),bt=Be(Xe,he,!0,!0)),o!=null){let ir=fs(ct,Xe);return[Ye,bt,ir]}else return[Ye,bt]},q={a:O,b:M,bias:G,preluActivationWeights:H},Y={transposeA:t,transposeB:n,activation:s,leakyreluAlpha:a};return o==null?tr((fe,he,$e)=>{let Oe=k.runKernel(Oa,q,Y);return $e([fe,he,Oe]),{value:W(Oe,A),gradFunc:X}})(O,M):tr((fe,he,$e,Oe)=>{let ct=k.runKernel(Oa,q,Y);return Oe([fe,he,ct,$e]),{value:W(ct,A),gradFunc:X}})(O,M,G)}var P4=E({fusedMatMul_:I8});function $8(r){return ja(r,.54,.46)}var L4=E({hammingWindow_:$8});function k8(r){return ja(r,.5,.5)}var om=E({hannWindow_:k8});function A8(r,e,t,n=!1,o=0){let s=0,i=[];for(;s+e<=r.size;)i.push(ve(r,s,e)),s+=t;if(n)for(;s<r.size;){let a=s+e-r.size,u=qe([ve(r,s,e-a),vn([a],o)]);i.push(u),s+=t}return i.length===0?$r([],[0,e]):W(qe(i),[i.length,e])}var sm=E({frame_:A8});function _8(r,e,t,n,o=om){n==null&&(n=Md(e));let s=sm(r,e,t),i=ee(s,o(e));return _i(i,n)}var B4=E({stft_:_8});function R8(r,e,t,n,o="bilinear",s=0){let i=T(r,"image","cropAndResize"),a=T(e,"boxes","cropAndResize","float32"),u=T(t,"boxInd","cropAndResize","int32"),l=a.shape[0];_(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),_(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${a.shape}.`),_(u.rank===1&&u.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${a.shape}.`),_(n.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${n.length}.`),_(n[0]>=1&&n[1]>=1,()=>`cropSize must be atleast [1,1], but was ${n}`),_(o==="bilinear"||o==="nearest",()=>`method must be bilinear or nearest, but was ${o}`);let c={image:i,boxes:a,boxInd:u},p={method:o,extrapolationValue:s,cropSize:n};return k.runKernel(xl,c,p)}var M4=E({cropAndResize_:R8});function O8(r){let e=T(r,"image","flipLeftRight","float32");_(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);let t={image:e};return k.runKernel(Rl,t,{})}var V4=E({flipLeftRight_:O8});function F8(r){let e=T(r,"image","grayscaleToRGB"),t=e.rank-1,n=e.shape[t];_(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),_(n===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${n}.`);let o=new Array(e.rank);return o.fill(1,0,t),o[t]=3,vo(e,o)}var U4=E({grayscaleToRGB_:F8});function D8(r,e,t=0,n=.5){let o=T(r,"image","rotateWithOffset","float32");_(o.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${o.rank}.`);let s={image:o},i={radians:e,fillValue:t,center:n};return k.runKernel(tp,s,i)}var G4=E({rotateWithOffset_:D8});function Wr(r,e,t,n,o,s){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),s==null&&(s=0);let i=r.shape[0];return t=Math.min(t,i),_(0<=n&&n<=1,()=>`iouThreshold must be in [0, 1], but was '${n}'`),_(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),_(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),_(e.rank===1,()=>"scores must be a 1D tensor"),_(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),_(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:t,iouThreshold:n,scoreThreshold:o,softNmsSigma:s}}function P8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY){let s=T(r,"boxes","nonMaxSuppression","float32"),i=T(e,"scores","nonMaxSuppression","float32"),a=Wr(s,i,t,n,o);t=a.maxOutputSize,n=a.iouThreshold,o=a.scoreThreshold;let u={maxOutputSize:t,iouThreshold:n,scoreThreshold:o};return k.runKernel(oc,{boxes:s,scores:i},u)}var z4=E({nonMaxSuppression_:P8});function W4(r,e,t){let n=L8(r,e,t),o=n<0?-(n+1):n;r.splice(o,0,e)}function L8(r,e,t){return M8(r,e,t||B8)}function B8(r,e){return r>e?1:r<e?-1:0}function M8(r,e,t){let n=0,o=r.length,s=0,i=!1;for(;n<o;){s=n+(o-n>>>1);let a=t(e,r[s]);a>0?n=s+1:(o=s,i=!a)}return i?n:-n-1}function im(r,e,t,n,o){return Ud(r,e,t,n,o,0)}function am(r,e,t,n,o,s){return Ud(r,e,t,n,o,0,!1,s,!0)}function um(r,e,t,n,o,s){return Ud(r,e,t,n,o,s,!0)}function Ud(r,e,t,n,o,s,i=!1,a=!1,u=!1){let l=[];for(let x=0;x<e.length;x++)e[x]>o&&l.push({score:e[x],boxIndex:x,suppressBeginIndex:0});l.sort(H4);let c=s>0?-.5/s:0,p=[],m=[];for(;p.length<t&&l.length>0;){let x=l.pop(),{score:b,boxIndex:$,suppressBeginIndex:A}=x;if(b<o)break;let O=!1;for(let M=p.length-1;M>=A;--M){let G=V8(r,$,p[M]);if(G>=n){O=!0;break}if(x.score=x.score*U8(n,c,G),x.score<=o)break}x.suppressBeginIndex=p.length,O||(x.score===b?(p.push($),m.push(x.score)):x.score>o&&W4(l,x,H4))}let f=p.length,d=t-f;a&&d>0&&(p.push(...new Array(d).fill(0)),m.push(...new Array(d).fill(0)));let y={selectedIndices:p};return i&&(y.selectedScores=m),u&&(y.validOutputs=f),y}function V8(r,e,t){let n=r.subarray(e*4,e*4+4),o=r.subarray(t*4,t*4+4),s=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),a=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),l=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),p=Math.max(o[0],o[2]),m=Math.max(o[1],o[3]),f=(a-s)*(u-i),d=(p-l)*(m-c);if(f<=0||d<=0)return 0;let y=Math.max(s,l),x=Math.max(i,c),b=Math.min(a,p),$=Math.min(u,m),A=Math.max(b-y,0)*Math.max($-x,0);return A/(f+d-A)}function U8(r,e,t){let n=Math.exp(e*t*t);return t<=r?n:0}function H4(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}async function G8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY){let s=T(r,"boxes","nonMaxSuppressionAsync"),i=T(e,"scores","nonMaxSuppressionAsync"),a=Wr(s,i,t,n,o);t=a.maxOutputSize,n=a.iouThreshold,o=a.scoreThreshold;let u=await Promise.all([s.data(),i.data()]),l=u[0],c=u[1],{selectedIndices:p}=im(l,c,t,n,o);return s!==r&&s.dispose(),i!==e&&i.dispose(),dt(p,"int32")}var K4=G8;function z8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY,s=0){let i=T(r,"boxes","nonMaxSuppression"),a=T(e,"scores","nonMaxSuppression"),u=Wr(i,a,t,n,o,s);t=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;let l={boxes:i,scores:a},c={maxOutputSize:t,iouThreshold:n,scoreThreshold:o,softNmsSigma:s},p=k.runKernel(ic,l,c);return{selectedIndices:p[0],selectedScores:p[1]}}var j4=E({nonMaxSuppressionWithScore_:z8});async function W8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY,s=0){let i=T(r,"boxes","nonMaxSuppressionAsync"),a=T(e,"scores","nonMaxSuppressionAsync"),u=Wr(i,a,t,n,o,s);t=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,s=u.softNmsSigma;let l=await Promise.all([i.data(),a.data()]),c=l[0],p=l[1],{selectedIndices:m,selectedScores:f}=um(c,p,t,n,o,s);return i!==r&&i.dispose(),a!==e&&a.dispose(),{selectedIndices:dt(m,"int32"),selectedScores:dt(f)}}var q4=W8;function H8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY,s=!1){let i=T(r,"boxes","nonMaxSuppression"),a=T(e,"scores","nonMaxSuppression"),u=Wr(i,a,t,n,o,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,m={boxes:i,scores:a},f={maxOutputSize:l,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:s},d=k.runKernel(sc,m,f);return{selectedIndices:d[0],validOutputs:d[1]}}var X4=E({nonMaxSuppressionPadded_:H8});async function K8(r,e,t,n=.5,o=Number.NEGATIVE_INFINITY,s=!1){let i=T(r,"boxes","nonMaxSuppressionAsync"),a=T(e,"scores","nonMaxSuppressionAsync"),u=Wr(i,a,t,n,o,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[m,f]=await Promise.all([i.data(),a.data()]),{selectedIndices:d,validOutputs:y}=am(m,f,l,c,p,s);return i!==r&&i.dispose(),a!==e&&a.dispose(),{selectedIndices:dt(d,"int32"),validOutputs:ge(y,"int32")}}var Y4=K8;function j8(r,e,t=!1,n=!1){let o=T(r,"images","resizeBilinear");_(o.rank===3||o.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${o.rank}.`),_(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),_(n===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=o,i=!1;o.rank===3&&(i=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]));let[]=e,a={images:s},u={alignCorners:t,halfPixelCenters:n,size:e},l=k.runKernel(wc,a,u);return i?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Z4=E({resizeBilinear_:j8});function q8(r,e,t=!1,n=!1){let o=T(r,"images","resizeNearestNeighbor");_(o.rank===3||o.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${o.rank}.`),_(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),_(o.dtype==="float32"||o.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),_(n===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=o,i=!1;o.rank===3&&(i=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]));let[]=e,a={images:s},u={alignCorners:t,halfPixelCenters:n,size:e},l=k.runKernel(vc,a,u);return i?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Q4=E({resizeNearestNeighbor_:q8});function X8(r,e="binary",t=!1,n=.5){let o=T(r,"image","threshold"),s=.2989,i=.587,a=.114,u=o.shape[0]*o.shape[1],l=ee(dt([n]),255),c,p,m,f;if(_(o.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${o.rank}.`),_(o.shape[2]===3||o.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${o.shape[2]}.`),_(o.dtype==="int32"||o.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${o.dtype}.`),_(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),o.shape[2]===3){[c,p,m]=zn(o,[1,1,1],-1);let x=ee(c,s),b=ee(p,i),$=ee(m,a);f=ue(ue(x,b),$)}else f=r;if(e==="otsu"){let x=vp(_e(Yp(f),"int32"),Ut([]),256);l=Y8(x,u)}let d=t?ki(f,l):is(f,l);return _e(ee(d,255),"int32")}function Y8(r,e){let t=dt([-1]),n=dt([0]),o=dt([0]),s,i,a,u,l,c;for(let p=0;p<r.size-1;p++){s=ve(r,0,p+1),i=ve(r,p+1),l=we(Me(s),e),c=we(Me(i),e);let m=Me(ee(s,To(0,s.size)));a=we(m,Me(s));let f=vn(i.shape,s.size),d=ue(To(0,i.size),f),y=ee(i,d);u=we(Me(y),Me(i));let x=ye(a,u),b=ye(a,u),$=ee(l,c);o=ee(ee($,x),b);let A=is(o,n);n=en(A,o,n),t=en(A,dt([p]),t)}return t}var J4=E({threshold_:X8});function Z8(r,e,t="nearest",n="constant",o=0,s){let i=T(r,"image","transform","float32"),a=T(e,"transforms","transform","float32");_(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),_(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),_(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let u={image:i,transforms:a},l={interpolation:t,fillMode:n,fillValue:o,outputShape:s};return k.runKernel(Xc,u,l)}var ex=E({transform_:Z8});function Q8(r,e,t){_(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),_(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`);let n=T(r,"a","bandPart");_(n.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${n.rank}.`);let o=n.shape,[s,i]=n.shape.slice(-2);if(!(e<=s))throw new Error(`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`);if(!(t<=i))throw new Error(`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`);e<0&&(e=s),t<0&&(t=i);let a=W(To(0,s,1,"int32"),[-1,1]),u=To(0,i,1,"int32"),l=ye(a,u),c=as(ki(l,ge(+e,"int32")),kp(l,ge(-t,"int32"))),p=zr([s,i],n.dtype);return W(zt(kr(W(n,[-1,s,i])).map(m=>en(c,m,p))),o)}var tx=E({bandPart_:Q8});function J8(r){let e;if(Array.isArray(r)){e=!1,_(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let o=r[0].shape[0];for(let s=1;s<r.length;++s)_(r[s].shape[0]===o,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[s].shape[0]} vs. ${o})`)}else e=!0,r=zn(r,r.shape[0],0).map(o=>pt(o,[0]));_(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);let t=[],n=r;for(let o=0;o<r.length;++o)t.push(k.tidy(()=>{let s=n[o];if(o>0)for(let i=0;i<o;++i){let a=ee(Me(ee(t[i],s)),t[i]);s=ye(s,a)}return we(s,ss(s,"euclidean"))}));return e?zt(t,0):t}var rx=E({gramSchmidt_:J8});function e9(r,e=!1){if(_(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return nx(r,e);{let t=r.shape.slice(0,r.shape.length-2).reduce((u,l)=>u*l),n=kr(W(r,[t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],s=[];n.forEach(u=>{let[l,c]=nx(u,e);o.push(l),s.push(c)});let i=W(zt(o,0),r.shape),a=W(zt(s,0),r.shape);return[i,a]}}function nx(r,e=!1){return k.tidy(()=>{_(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);let t=r.shape[0],n=r.shape[1],o=Np(t),s=hr(r),i=$r([[1]],[1,1]),a=hr(i),u=t>=n?n:t;for(let l=0;l<u;++l){let c=s,p=a,m=o;[a,s,o]=k.tidy(()=>{let f=ve(s,[l,l],[t-l,1]),d=ss(f),y=ve(s,[l,l],[1,1]),x=en(is(y,0),$r([[-1]]),$r([[1]])),b=ye(y,ee(x,d)),$=we(f,b);$.shape[0]===1?a=hr(i):a=qe([i,ve($,[1,0],[$.shape[0]-1,$.shape[1]])],0);let A=Gt(we(Be(x,b),d)),O=ve(s,[l,0],[t-l,n]),M=ee(A,a),G=nm(a);if(l===0)s=ye(O,Be(M,Be(G,O)));else{let q=ye(O,Be(M,Be(G,O)));s=qe([ve(s,[0,0],[l,n]),q],0)}let H=nm(M),X=ve(o,[0,l],[t,o.shape[1]-l]);if(l===0)o=ye(X,Be(Be(X,a),H));else{let q=ye(X,Be(Be(X,a),H));o=qe([ve(o,[0,0],[t,l]),q],1)}return[a,s,o]}),Ge([c,p,m])}return!e&&t>n&&(o=ve(o,[0,0],[t,n]),s=ve(s,[0,0],[n,n])),[o,s]})}var ox=E({qr_:e9});var mt;(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(mt||(mt={}));function t9(r,e,t=mt.SUM_BY_NONZERO_WEIGHTS){let n=T(r,"losses","computeWeightedLoss"),o=null;e!=null&&(o=T(e,"weights","computeWeightedLoss"));let s=o==null?n:ee(n,o);if(t===mt.NONE)return s;if(t===mt.SUM)return Me(s);if(t===mt.MEAN){if(o==null)return us(s);{let i=n.size/o.size,a=we(Me(s),Me(o));return i>1?we(a,ge(i)):a}}if(t===mt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return we(Me(s),ge(n.size));{let i=ee(o,Tn(n.shape)),a=_e(Me(Vp(i,ge(0))),"float32");return we(Me(s),a)}}throw Error(`Unknown reduction: ${t}`)}var Rt=E({computeWeightedLoss_:t9});function r9(r,e,t,n=mt.SUM_BY_NONZERO_WEIGHTS){let o=T(r,"labels","absoluteDifference"),s=T(e,"predictions","absoluteDifference"),i=null;t!=null&&(i=T(t,"weights","absoluteDifference")),at(o.shape,s.shape,"Error in absoluteDifference: ");let a=It(ye(o,s));return Rt(a,i,n)}var sx=E({absoluteDifference_:r9});function n9(r,e,t,n,o=mt.SUM_BY_NONZERO_WEIGHTS){let s=T(r,"labels","cosineDistance"),i=T(e,"predictions","cosineDistance"),a=null;n!=null&&(a=T(n,"weights","cosineDistance")),at(s.shape,i.shape,"Error in cosineDistance: ");let u=ge(1),l=ye(u,Me(ee(s,i),t,!0));return Rt(l,a,o)}var ix=E({cosineDistance_:n9});function o9(r,e,t,n=mt.SUM_BY_NONZERO_WEIGHTS){let o=T(r,"labels","hingeLoss"),s=T(e,"predictions","hingeLoss"),i=null;t!=null&&(i=T(t,"weights","hingeLoss")),at(o.shape,s.shape,"Error in hingeLoss: ");let a=ge(1);o=ye(ee(ge(2),o),a);let u=So(ye(a,ee(o,s)));return Rt(u,i,n)}var ax=E({hingeLoss_:o9});function s9(r,e,t,n=1,o=mt.SUM_BY_NONZERO_WEIGHTS){let s=T(r,"labels","huberLoss"),i=T(e,"predictions","huberLoss"),a=null;t!=null&&(a=T(t,"weights","huberLoss")),at(s.shape,i.shape,"Error in huberLoss: ");let u=ge(n),l=It(ye(i,s)),c=Mp(l,u),p=ye(l,c),m=ue(ee(ge(.5),$t(c)),ee(u,p));return Rt(m,a,o)}var ux=E({huberLoss_:s9});function i9(r,e,t,n=1e-7,o=mt.SUM_BY_NONZERO_WEIGHTS){let s=T(r,"labels","logLoss"),i=T(e,"predictions","logLoss"),a=null;t!=null&&(a=T(t,"weights","logLoss")),at(s.shape,i.shape,"Error in logLoss: ");let u=ge(1),l=ge(n),c=Gt(ee(s,Un(ue(i,l)))),p=ee(ye(u,s),Un(ue(ye(u,i),l))),m=ye(c,p);return Rt(m,a,o)}var lx=E({logLoss_:i9});function a9(r,e,t,n=mt.SUM_BY_NONZERO_WEIGHTS){let o=T(r,"labels","meanSquaredError"),s=T(e,"predictions","meanSquaredError"),i=null;t!=null&&(i=T(t,"weights","meanSquaredError")),at(o.shape,s.shape,"Error in meanSquaredError: ");let a=Qp(o,s);return Rt(a,i,n)}var cx=E({meanSquaredError_:a9});function u9(r,e){let t=T(r,"labels","sigmoidCrossEntropyWithLogits"),n=T(e,"logits","sigmoidCrossEntropyWithLogits");at(t.shape,n.shape,"Error in sigmoidCrossEntropyWithLogits: ");let o=So(n),s=ee(n,t),i=_p(Jt(Gt(It(n))));return ue(ye(o,s),i)}function l9(r,e,t,n=0,o=mt.SUM_BY_NONZERO_WEIGHTS){let s=T(r,"multiClassLabels","sigmoidCrossEntropy"),i=T(e,"logits","sigmoidCrossEntropy"),a=null;if(t!=null&&(a=T(t,"weights","sigmoidCrossEntropy")),at(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){let l=ge(n),c=ge(1),p=ge(.5);s=ue(ee(s,ye(c,l)),ee(p,l))}let u=u9(s,i);return Rt(u,a,o)}var px=E({sigmoidCrossEntropy_:l9});function c9(r,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return tr((o,s,i)=>{let u=Op(s,[t],!0),l=ye(_e(s,"float32"),u);i([o,l]);let c=Gt(ee(l,o));return{value:Me(c,[t]),gradFunc:(f,d)=>{let[y,x]=d,b=Mn(f.shape,[t]);return[ee(W(f,b),ye(_e(y,"float32"),Jt(x))),ee(W(f,b),ye(Jt(x),_e(y,"float32")))]}}})(r,e)}function p9(r,e,t,n=0,o=mt.SUM_BY_NONZERO_WEIGHTS){let s=T(r,"onehotLabels","softmaxCrossEntropy"),i=T(e,"logits","softmaxCrossEntropy"),a=null;if(t!=null&&(a=T(t,"weights","softmaxCrossEntropy")),at(s.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){let l=ge(n),c=ge(1),p=ge(s.shape[1]);s=ue(ee(s,ye(c,l)),we(l,p))}let u=c9(s,i);return Rt(u,a,o)}var mx=E({softmaxCrossEntropy_:p9});function m9(r,e,t,n){let o=T(r,"indices","sparseFillEmptyRows","int32"),s=T(e,"values","sparseFillEmptyRows"),i=T(t,"denseShape","sparseFillEmptyRows","int32"),a=T(n,"defaultValue","sparseFillEmptyRows",s.dtype);if(o.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${o.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);let u={indices:o,values:s,denseShape:i,defaultValue:a},l=k.runKernel(Lc,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}var fx=E({sparseFillEmptyRows_:m9});function f9(r,e,t){let n=T(r,"inputIndices","sparseReshape","int32"),o=T(e,"inputShape","sparseReshape","int32"),s=T(t,"newShape","sparseReshape","int32");if(n.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${n.shape}`);if(o.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${o.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);let i={inputIndices:n,inputShape:o,newShape:s},a=k.runKernel(Bc,i);return{outputIndices:a[0],outputShape:a[1]}}var hx=E({sparseReshape_:f9});function h9(r,e,t){let n=T(r,"data","sparseSegmentMean"),o=T(e,"indices","sparseSegmentMean","int32"),s=T(t,"segmentIds","sparseSegmentMean","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${o.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);let i={data:n,indices:o,segmentIds:s};return k.runKernel(Mc,i)}var dx=E({sparseSegmentMean_:h9});function d9(r,e,t){let n=T(r,"data","sparseSegmentSum"),o=T(e,"indices","sparseSegmentSum","int32"),s=T(t,"segmentIds","sparseSegmentSum","int32");if(n.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${o.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);let i={data:n,indices:o,segmentIds:s};return k.runKernel(Vc,i)}var gx=E({sparseSegmentSum_:d9});function g9(r,e,t,n,o,s,i,a){let u=T(r,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);let l=T(e,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");let c={separator:t,nGramWidths:n,leftPad:o,rightPad:s,padWidth:i,preserveShortSequences:a},p={data:u,dataSplits:l},m=k.runKernel(zc,p,c);return{nGrams:m[0],nGramsSplits:m[1]}}var xx=E({stringNGrams_:g9});function x9(r,e,t=!0){let n=T(r,"input","stringSplit","string"),o=T(e,"delimiter","stringSplit","string");if(n.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${n.shape}`);if(o.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${o.shape}`);let s={skipEmpty:t},i={input:n,delimiter:o},a=k.runKernel(Wc,i,s);return{indices:a[0],values:a[1],shape:a[2]}}var yx=E({stringSplit_:x9});function y9(r,e){let t=T(r,"input","stringToHashBucketFast","string"),n={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");let o={input:t};return k.runKernel(Hc,o,n)}var bx=E({stringToHashBucketFast_:y9});var b9={fft:Ai,ifft:ps,rfft:_i,irfft:Zp},v9={hammingWindow:L4,hannWindow:om,frame:sm,stft:B4},Co={flipLeftRight:V4,grayscaleToRGB:U4,resizeNearestNeighbor:Q4,resizeBilinear:Z4,rotateWithOffset:G4,cropAndResize:M4,nonMaxSuppression:z4,nonMaxSuppressionAsync:K4,nonMaxSuppressionWithScore:j4,nonMaxSuppressionWithScoreAsync:q4,nonMaxSuppressionPadded:X4,nonMaxSuppressionPaddedAsync:Y4,threshold:J4,transform:ex},w9={bandPart:tx,gramSchmidt:rx,qr:ox},T9={absoluteDifference:sx,computeWeightedLoss:Rt,cosineDistance:ix,hingeLoss:ax,huberLoss:ux,logLoss:lx,meanSquaredError:cx,sigmoidCrossEntropy:px,softmaxCrossEntropy:mx},S9={sparseFillEmptyRows:fx,sparseReshape:hx,sparseSegmentMean:dx,sparseSegmentSum:gx},C9={stringNGrams:xx,stringSplit:yx,stringToHashBucketFast:bx};var lm=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Wn=class{constructor(){this.classNameMap={}}static getMap(){return Wn.instance==null&&(Wn.instance=new Wn),Wn.instance}static register(e){Wn.getMap().classNameMap[e.className]=[e,e.fromConfig]}};function vx(r){_(r.className!=null,()=>"Class being registered does not have the static className property defined."),_(typeof r.className=="string",()=>"className is required to be a string, but got type "+typeof r.className),_(r.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),Wn.register(r)}var rr=class extends lm{minimize(e,t=!1,n){let{value:o,grads:s}=this.computeGradients(e,n);if(n!=null){let i=n.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return Ge(s),t?o:(o.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return l0(e,t)}dispose(){this.iterations_!=null&&Ge(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:ge(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}};Object.defineProperty(rr,Symbol.hasInstance,{value:r=>r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null});var cm=class extends rr{constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n==null&&(this.epsilon=k.backend.epsilon())}static get className(){return"Adadelta"}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,o)=>{let s=k.registeredVariables[n],i=!1;this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${n}/accum_grad`,variable:be(()=>wt(s).variable(i))}),this.accumulatedUpdates[o]==null&&(this.accumulatedUpdates[o]={originalName:`${n}/accum_var`,variable:be(()=>wt(s).variable(i))});let a=Array.isArray(e)?e[o].tensor:e[n];if(a==null)return;let u=this.accumulatedGrads[o].variable,l=this.accumulatedUpdates[o].variable;be(()=>{let c=ue(ee(u,this.rho),ee($t(a),1-this.rho)),p=ee(we(Qt(ue(l,this.epsilon)),Qt(ue(u,this.epsilon))),a),m=ue(ee(l,this.rho),ee($t(p),1-this.rho));u.assign(c),l.assign(m);let f=ue(ee(p,-this.learningRate),s);s.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ge(this.accumulatedGrads.map(e=>e.variable)),Ge(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2,n=!1;this.accumulatedGrads=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedUpdates=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}};var pm=class extends rr{constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}static get className(){return"Adagrad"}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,o)=>{let s=k.registeredVariables[n];this.accumulatedGrads[o]==null&&(this.accumulatedGrads[o]={originalName:`${n}/accumulator`,variable:be(()=>vn(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[o].tensor:e[n];if(i==null)return;let a=this.accumulatedGrads[o].variable;be(()=>{let u=ue(a,$t(i));a.assign(u);let l=ue(ee(we(i,Qt(ue(u,k.backend.epsilon()))),-this.learningRate),s);s.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ge(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=!1;this.accumulatedGrads=e.map(n=>({originalName:n.name,variable:n.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}};var mm=class extends rr{constructor(e,t,n,o=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=o,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],be(()=>{this.accBeta1=ge(t).variable(),this.accBeta2=ge(n).variable()}),o==null&&(this.epsilon=k.backend.epsilon())}static get className(){return"Adam"}applyGradients(e){let t=Array.isArray(e)?e.map(n=>n.name):Object.keys(e);be(()=>{let n=ye(1,this.accBeta1),o=ye(1,this.accBeta2);t.forEach((s,i)=>{let a=k.registeredVariables[s],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:be(()=>wt(a).variable(u))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:be(()=>wt(a).variable(u))});let l=Array.isArray(e)?e[i].tensor:e[s];if(l==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,m=ue(ee(c,this.beta1),ee(l,1-this.beta1)),f=ue(ee(p,this.beta2),ee($t(l),1-this.beta2)),d=we(m,n),y=we(f,o);c.assign(m),p.assign(f);let x=ue(ee(we(d,ue(Qt(y),this.epsilon)),-this.learningRate),a);a.assign(x)}),this.accBeta1.assign(ee(this.accBeta1,this.beta1)),this.accBeta2.assign(ee(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ge(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Ge(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e),be(()=>{this.accBeta1.assign(Vn(this.beta1,this.iterations_+1)),this.accBeta2.assign(Vn(this.beta2,this.iterations_+1))});let t=e.length/2,n=!1;this.accumulatedFirstMoment=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}};var fm=class extends rr{constructor(e,t,n,o=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=o,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],be(()=>{this.iteration=ge(0).variable(),this.accBeta1=ge(t).variable()}),o==null&&(this.epsilon=k.backend.epsilon())}static get className(){return"Adamax"}applyGradients(e){let t=Array.isArray(e)?e.map(n=>n.name):Object.keys(e);be(()=>{let n=ye(1,this.accBeta1),o=we(-this.learningRate,ue(ee(this.iteration,this.decay),1));t.forEach((s,i)=>{let a=k.registeredVariables[s],u=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:wt(a).variable(u)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:wt(a).variable(u)});let l=Array.isArray(e)?e[i].tensor:e[s];if(l==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,m=ue(ee(c,this.beta1),ee(l,1-this.beta1)),f=ee(p,this.beta2),d=It(l),y=Bp(f,d);c.assign(m),p.assign(y);let x=ue(ee(we(o,n),we(m,ue(y,this.epsilon))),a);a.assign(x)}),this.iteration.assign(ue(this.iteration,1)),this.accBeta1.assign(ee(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ge(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Ge(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}};var Ri=class extends rr{constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}static get className(){return"SGD"}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,o)=>{let s=Array.isArray(e)?e[o].tensor:e[n];if(s==null)return;let i=k.registeredVariables[n];be(()=>{let a=ue(ee(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Zt(ge(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}};var hm=class extends Ri{constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=ge(this.momentum)}static get className(){return"Momentum"}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,o)=>{let s=k.registeredVariables[n];this.accumulations[o]==null&&(this.accumulations[o]={originalName:`${n}/momentum`,variable:be(()=>wt(s).variable(!1))});let i=this.accumulations[o].variable,a=Array.isArray(e)?e[o].tensor:e[n];a!=null&&be(()=>{let u,l=ue(ee(this.m,i),a);this.useNesterov?u=ue(ee(this.c,ue(a,ee(l,this.m))),s):u=ue(ee(this.c,l),s),i.assign(l),s.assign(u)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ge(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=!1;this.accumulations=e.map(n=>({originalName:n.name,variable:n.tensor.variable(t)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}};var dm=class extends rr{constructor(e,t=.9,n=0,o=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=o,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,o==null&&(this.epsilon=k.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}static get className(){return"RMSProp"}applyGradients(e){(Array.isArray(e)?e.map(n=>n.name):Object.keys(e)).forEach((n,o)=>{let s=k.registeredVariables[n],i=!1;this.accumulatedMeanSquares[o]==null&&(this.accumulatedMeanSquares[o]={originalName:`${n}/rms`,variable:be(()=>wt(s).variable(i))}),this.accumulatedMoments[o]==null&&(this.accumulatedMoments[o]={originalName:`${n}/momentum`,variable:be(()=>wt(s).variable(i))}),this.accumulatedMeanGrads[o]==null&&this.centered&&(this.accumulatedMeanGrads[o]={originalName:`${n}/mg`,variable:be(()=>wt(s).variable(i))});let a=Array.isArray(e)?e[o].tensor:e[n];if(a==null)return;let u=this.accumulatedMeanSquares[o].variable,l=this.accumulatedMoments[o].variable;be(()=>{let c=ue(ee(u,this.decay),ee($t(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[o].variable,m=ue(ee(p,this.decay),ee(a,1-this.decay)),f=we(ee(a,this.learningRate),Qt(ye(c,ue($t(m),this.epsilon)))),d=ue(ee(l,this.momentum),f);u.assign(c),p.assign(m),l.assign(d);let y=ye(s,d);s.assign(y)}else{let p=ue(ee(u,this.decay),ee($t(a),1-this.decay)),m=ue(ee(l,this.momentum),we(ee(a,this.learningRate),Qt(ue(p,this.epsilon))));u.assign(p),l.assign(m);let f=ye(s,m);s.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ge(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ge(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Ge(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2,n=!1;this.accumulatedMeanSquares=e.slice(0,t).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.accumulatedMoments=e.slice(t,t*2).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(o=>({originalName:o.name,variable:o.tensor.variable(n)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}};var E9=[cm,pm,mm,fm,hm,dm,Ri];function wx(){for(let r of E9)vx(r)}var Ya={};Ke(Ya,{browserFiles:()=>Sx,browserHTTPRequest:()=>Nx,concatenateArrayBuffers:()=>Si,copyModel:()=>og,decodeWeights:()=>cp,encodeWeights:()=>G3,fromMemory:()=>Ix,fromMemorySync:()=>jd,getLoadHandlers:()=>q3,getModelArtifactsForJSON:()=>Ci,getModelArtifactsForJSONSync:()=>bd,getModelArtifactsInfoForJSON:()=>hn,getSaveHandlers:()=>j3,getWeightSpecs:()=>mp,http:()=>xm,isHTTPScheme:()=>gm,listModels:()=>rg,loadWeights:()=>Cx,moveModel:()=>sg,registerLoadRouter:()=>K3,registerSaveRouter:()=>H3,removeModel:()=>ng,weightsLoaderFactory:()=>Hd,withSaveHandler:()=>$x,withSaveHandlerSync:()=>kx});var N9="model",I9=".json",$9=".weights.bin";function Tx(r){return new Promise(e=>setTimeout(e)).then(r)}var Hn=class{constructor(e){if(!U().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(Hn.URL_SCHEME)&&(e=e.slice(Hn.URL_SCHEME.length)),(e==null||e.length===0)&&(e=N9),this.modelJsonFileName=e+I9,this.weightDataFileName=e+$9}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o=pp(e,n),s=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await Tx(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){let a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=t,await Tx(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:hn(e)}}}};Hn.URL_SCHEME="downloads://";var Gd=class{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let n=new FileReader;n.onload=o=>{let s=JSON.parse(o.target.result),i=s.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}let u=Ci(s,l=>this.loadWeights(l));e(u)},n.onerror=o=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){let t=[],n=[];for(let i of e)t.push(...i.weights),n.push(...i.paths);let o=this.checkManifestAndWeightFiles(e),s=n.map(i=>this.loadWeightsFile(i,o[i]));return Promise.all(s).then(i=>[t,Si(i)])}loadWeightsFile(e,t){return new Promise((n,o)=>{let s=new FileReader;s.onload=i=>{let a=i.target.result;n(a)},s.onerror=i=>o(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],n=this.weightsFiles.map(s=>yd(s.name)),o={};for(let s of e)s.paths.forEach(i=>{let a=yd(i);if(t.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),n.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);o[i]=this.weightsFiles[n.indexOf(a)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return o}},k9=r=>U().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Hn.URL_SCHEME)?A9(r.slice(Hn.URL_SCHEME.length)):null;je.registerSaveRouter(k9);function A9(r="model"){return new Hn(r)}function Sx(r){return new Gd(r)}function zd(r,e,t,n){i(r),t=t==null?0:t,n=n==null?1:n,a(t,n);let o=0,s=u=>(u.then(l=>{let c=t+ ++o/r.length*(n-t);return e(c),l}),u);function i(u){_(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function a(u,l){_(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),_(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),_(l>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${l}`)}return Promise.all(r.map(s))}async function Wd(r,e){e==null&&(e={});let t=e.fetchFunc==null?U().platform.fetch:e.fetchFunc,n=r.map(p=>t(p,e.requestInit,{isBinary:!0})),o=0,s=.5,a=(e.onProgress==null?await Promise.all(n):await zd(n,e.onProgress,o,s)).map(p=>p.arrayBuffer()),u=.5,l=1;return e.onProgress==null?await Promise.all(a):await zd(a,e.onProgress,u,l)}async function Cx(r,e="",t,n){return Hd(i=>Wd(i,{requestInit:n}))(r,e,t)}function Hd(r){return async(e,t="",n)=>{let o=e.map(()=>!1),s={},i=n!=null?n.map(()=>!1):[],a=[];if(e.forEach((f,d)=>{let y=0;f.weights.forEach(x=>{let b="quantization"in x?x.quantization.dtype:x.dtype,$=Ua[b]*Ae(x.shape),A=()=>{o[d]=!0,s[d]==null&&(s[d]=[]),s[d].push({manifestEntry:x,groupOffset:y,sizeBytes:$})};n!=null?n.forEach((O,M)=>{O===x.name&&(A(),i[M]=!0)}):A(),a.push(x.name),y+=$})}),!i.every(f=>f)){let f=n.filter((d,y)=>!i[y]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}let u=o.reduce((f,d,y)=>(d&&f.push(y),f),[]),l=[];u.forEach(f=>{e[f].paths.forEach(d=>{let y=t+(t.endsWith("/")?"":"/")+d;l.push(y)})});let c=await r(l),p={},m=0;return u.forEach(f=>{let d=e[f].paths.length,y=0;for(let O=0;O<d;O++)y+=c[m+O].byteLength;let x=new ArrayBuffer(y),b=new Uint8Array(x),$=0;for(let O=0;O<d;O++){let M=new Uint8Array(c[m+O]);b.set(M,$),$+=M.byteLength}s[f].forEach(O=>{let M=x.slice(O.groupOffset,O.groupOffset+O.sizeBytes),G=cp(M,[O.manifestEntry]);for(let H in G)p[H]=G[H]}),m+=d}),p}}var _9="application/octet-stream",R9="application/json",qa=class{constructor(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc!=null?(_(typeof t.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=U().platform.fetch,_(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&_(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o=pp(e,n);t.body.append("model.json",new Blob([JSON.stringify(o)],{type:R9}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:_9}),"model.weights.bin");let s=await this.fetch(this.path,t);if(s.ok)return{modelArtifactsInfo:hn(e),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch(s){let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}let n=t.modelTopology,o=t.weightsManifest;if(n==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Ci(t,s=>this.loadWeights(s))}async loadWeights(e){let t=Array.isArray(this.path)?this.path[1]:this.path,[n,o]=O9(t),s=this.weightPathPrefix||n,i=mp(e),a=[],u=[];for(let c of e)for(let p of c.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(p)):a.push(s+p+o);this.weightUrlConverter&&a.push(...await Promise.all(u));let l=await Wd(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,Si(l)]}};qa.URL_SCHEME_REGEX=/^https?:\/\//;function O9(r){let e=r.lastIndexOf("/"),t=r.lastIndexOf("?"),n=r.substring(0,e),o=t>e?r.substring(t):"";return[n+"/",o]}function gm(r){return r.match(qa.URL_SCHEME_REGEX)!=null}var Ex=(r,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(r)?t=r.every(n=>gm(n)):t=gm(r),t)return xm(r,e)}return null};je.registerSaveRouter(Ex);je.registerLoadRouter(Ex);function xm(r,e){return new qa(r,e)}function Nx(r,e){return xm(r,e)}var Xa=class{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}},ym=class{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}},Kd=class{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}};function Ix(r,e,t,n){let o=arguments;return new Kd(jd(...o))}function jd(r,e,t,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Xa(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xa({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Xa({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:n}))}function $x(r){return new ym(r)}function kx(r){return new ym(r)}var Eo={};Ke(Eo,{fromPixels:()=>V9,fromPixelsAsync:()=>B9,toPixels:()=>M9});var gs;function Ax(r,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,n=!1,o=!1,s=!1,i=!1,a=!1;if(r.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)s=!0;else if(r.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&r instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${r.constructor.name}`);if(Pa(Ra,k.backendName)!=null){let d={pixels:r},y={numChannels:e};return k.runKernel(Ra,d,y)}let[l,c]=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],p;if(i)p=r.getContext("2d").getImageData(0,0,l,c).data;else if(n||t)p=r.data;else if(s||o||a){if(gs==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")gs=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else gs=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});gs.canvas.width=l,gs.canvas.height=c,gs.drawImage(r,0,0,l,c),p=gs.getImageData(0,0,l,c).data}let m;if(e===4)m=new Int32Array(p);else{let d=l*c;m=new Int32Array(d*e);for(let y=0;y<d;y++)for(let x=0;x<e;++x)m[y*e+x]=p[y*4+x]}return em(m,[c,l,e],"int32")}function F9(r){return r!=null&&r.data instanceof Uint8Array}function D9(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function P9(r){return r!=null&&r.width!==0&&r.height!==0}function L9(r){return D9()&&!(r instanceof ImageBitmap)&&P9(r)&&!F9(r)}async function B9(r,e=3){let t=null;if(U().getBool("WRAP_TO_IMAGEBITMAP")&&L9(r)){let n;try{n=await createImageBitmap(r,{premultiplyAlpha:"none"})}catch(o){n=null}n!=null&&n.width===r.width&&n.height===r.height?t=n:t=r}else t=r;return Ax(t,e)}async function M9(r,e){let t=T(r,"img","toPixels");if(!(r instanceof Pe)){let l=t;t=_e(l,"int32"),l.dispose()}if(t.rank!==2&&t.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${t.rank}.`);let[n,o]=t.shape.slice(0,2),s=t.rank===2?1:t.shape[2];if(s>4||s===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if(t.dtype!=="float32"&&t.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${t.dtype}. Please use float32 or int32 tensors.`);let i=await t.data(),a=t.dtype==="float32"?255:1,u=new Uint8ClampedArray(o*n*4);for(let l=0;l<n*o;++l){let c=[0,0,0,255];for(let m=0;m<s;m++){let f=i[l*s+m];if(t.dtype==="float32"){if(f<0||f>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${f}.`)}else if(t.dtype==="int32"&&(f<0||f>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${f}.`);s===1?(c[0]=f*a,c[1]=f*a,c[2]=f*a):c[m]=f*a}let p=l*4;u[p+0]=Math.round(c[0]),u[p+1]=Math.round(c[1]),u[p+2]=Math.round(c[2]),u[p+3]=Math.round(c[3])}if(e!=null){e.width=o,e.height=n;let l=e.getContext("2d"),c=new ImageData(u,o,n);l.putImageData(c,0,0)}return t!==r&&t.dispose(),u}var V9=E({fromPixels_:Ax});function U9(r,e){let t=r.shape.length,n=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(n<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${n}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[n-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[n-1]} vs. ${t}`);if(Ae(r.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${r.shape}.`);let o=e.shape,s=o[o.length-1],i=1;for(let p=0;p<o.length-1;++p)i*=o[p];let a=r.shape,u=o.slice();u.pop();let l=1;for(let p=s;p<t;++p)l*=a[p],u.push(a[p]);let c=[...fn(r.shape).map(p=>p/l),1].slice(0,s);return[u,i,l,c]}var nr={};Ke(nr,{assertParamsValid:()=>z9,computeFlatOffset:()=>q9,computeOutShape:()=>H9,getNormalizedAxes:()=>K9,isSliceContinous:()=>j9,maskToAxes:()=>W9,parseSliceParams:()=>X9,sliceInfo:()=>Y9,startForAxis:()=>Bx,startIndicesWithElidedDims:()=>Dx,stopForAxis:()=>Mx,stopIndicesWithElidedDims:()=>Px,stridesForAxis:()=>Lx,stridesWithElidedDims:()=>Rx});var qd=-2,G9=-1;function z9(r,e,t){let n=r.shape.length;_(n===e.length,()=>`Error in slice${n}D: Length of begin ${e} must match the rank of the array (${n}).`),_(n===t.length,()=>`Error in slice${n}D: Length of size ${t} must match the rank of the array (${n}).`);for(let o=0;o<n;++o)_(e[o]+t[o]<=r.shape[o],()=>`Error in slice${n}D: begin[${o}] + size[${o}] (${e[o]+t[o]}) would overflow input.shape[${o}] (${r.shape[o]})`)}function W9(r){let e=[],t=0;for(;r>0;)r&1&&e.push(t),r/=2,t++;return e}function H9(r,e,t){let n=[];for(let o=0;o<r.length;o++)n[o]=Math.ceil((e[o]-r[o])/t[o]);return n}function Rx(r,e,t,n){let o=[...r];for(let s=o.length;s<n.length;s++)o.push(1);for(let s=0;s<t;s++)s===0?o[e]=1:(o.splice(e,0,1),o.pop());return o}function Ox(r,e,t){return t<=r?t:t-(e-1)}function Fx(r,e){let t=[];for(let n=0;n<r;n++)t.push(e+n);return t}function K9(r,e,t,n,o,s,i,a,u){let l=r.length,c=new Array(l),p=new Array(l),m=new Array(l);if(e.length&&t>0){let f=e[0],d=t+1;c=Dx(i,f,d,n,r),p=Px(a,f,d,o,r),m=Rx(s,f,d,r)}else for(let f=0;f<l;f++)c[f]=Bx(i,n,s,r,f,u),p[f]=Mx(a,o,s,r,f,u),m[f]=Lx(s,f,u);return{begin:c,end:p,strides:m}}function Dx(r,e,t,n,o){let s=[...o],i=Fx(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let u=Ox(e,t,a),l=n[u];r&1<<u&&(l=0),s[a]=l}return s}function Px(r,e,t,n,o){let s=[...o],i=Fx(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let u=Ox(e,t,a),l=n[u];r&1<<u&&(l=Number.MAX_SAFE_INTEGER),s[a]=l}for(let a=0;a<s.length;a++){let u=o[a];s[a]<0&&(s[a]+=u),s[a]=zs(0,s[a],o[a])}return s}function Lx(r,e,t){let n=r[e];return(t&1<<e||n==null)&&(n=1),n}function Bx(r,e,t,n,o,s){let i=e[o],a=t[o]||1;(r&1<<o||s&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let u=n[o];return i<0&&(i+=u),i=zs(0,i,u-1),i}function Mx(r,e,t,n,o,s){let i=e[o],a=t[o]||1;(r&1<<o||s&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let u=n[o];return i<0&&(i+=u),a>0?i=zs(0,i,u):i=zs(-1,i,u-1),i}function j9(r,e,t){let n=t.length;for(let o=0;o<t.length;o++)if(t[o]>1){n=o;break}for(let o=n+1;o<t.length;o++)if(e[o]>0||t[o]!==r[o])return!1;return!0}function q9(r,e){let t=r.length>0?r[r.length-1]:1;for(let n=0;n<r.length-1;n++)t+=r[n]*e[n];return t}function X9(r,e,t){let n,o=r.shape.length;typeof e=="number"?n=[e,...new Array(o-1).fill(0)]:e.length<o?n=e.concat(new Array(o-e.length).fill(0)):n=e.slice(),n.forEach(i=>{_(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return t==null?s=new Array(o).fill(-1):typeof t=="number"?s=[t,...new Array(o-1).fill(-1)]:t.length<o?s=t.concat(new Array(o-t.length).fill(-1)):s=t,s=s.map((i,a)=>i>=0?i:(_(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),r.shape[a]-n[a])),[n,s]}function Y9(r,e,t,n,o,s,i,a,u){let l;if(n==null?(l=new Array(e.length),l.fill(1)):l=n,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1,p={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:l.slice(),beginMask:o,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:u};for(let A=0;A<p.dims;A++)c&&1<<A&a&&p.numAddAxisAfterEllipsis++,1<<A&i&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);let m={dims:r.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Z9(p,m);let f=!0,d=!0,y=!0,x=[],b=[];for(let A=0;A<r.length;++A){if(m.strides[A]===0)throw Error(`strides[${A}] must be non-zero`);let O=!!(m.shrinkAxisMask&1<<A),M=r[A];if(M===-1){x.push(O?1:-1);continue}let G=[m.beginMask&1<<A,m.endMask&1<<A],H=[m.strides[A]>0?0:-1,m.strides[A]>0?M:M-1];if(O&&m.strides[A]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&m.strides[A]===1;let X=!!(m.beginMask&1<<A&&m.endMask&1<<A);if(m.beginValid&&m.endValid){if(O){let fe=m.begin[A]<0?M+m.begin[A]:m.begin[A];if(m.begin[A]=fe,m.end[A]=m.begin[A]+1,fe<0||fe>=M)throw Error(`slice index ${m.begin[A]} of dimension ${A} out of bounds.`)}else m.begin[A]=_x(m.begin[A],0,m.strides[A],M,G,H),m.end[A]=_x(m.end[A],1,m.strides[A],M,G,H);let ie=m.strides[A]===1&&m.begin[A]===0&&m.end[A]===M;f=f&&ie,d=d&&(A===0&&m.strides[A]===1||ie)}else f=f&&m.strides[A]===1&&X,d=d&&(A===0&&m.strides[A]===1||X);let q,Y=!1;if(m.beginValid&&m.endValid?(q=m.end[A]-m.begin[A],Y=!0):O?(q=1,Y=!0):X&&M>=0&&(m.strides[A]<0?q=-M:q=M,Y=!0),Y){let ie;q===0||q<0!=m.strides[A]<0?ie=0:ie=Math.trunc(q/m.strides[A])+(q%m.strides[A]!==0?1:0),x.push(ie)}else x.push(-1)}for(let A=0;A<m.finalShapeGatherIndices.length;++A){let O=m.finalShapeGatherIndices[A];O>=0?b.push(x[O]):O===qd&&b.push(1)}return{finalShapeSparse:b.filter((A,O)=>m.finalShapeGatherIndices[O]!==qd),finalShape:b,isIdentity:f,sliceDim0:d,isSimpleSlice:y,begin:m.begin,end:m.end,strides:m.strides}}function Z9(r,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=r.begin!=null,e.endValid=r.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let n=0;n<r.dims;n++)if(1<<n&r.ellipsisMask){let o=Math.min(e.dims-(r.dims-n)+1+r.numAddAxisAfterEllipsis,e.dims);for(;t<o;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=n}else if(1<<n&r.newAxisMask)e.finalShapeGatherIndices.push(qd),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);r.begin!=null&&(e.begin[t]=r.begin[n]),r.end!=null&&(e.end[t]=r.end[n]),e.strides[t]=r.strides[n],r.beginMask&1<<n&&(e.beginMask|=1<<t),r.endMask&1<<n&&(e.endMask|=1<<t),r.shrinkAxisMask&1<<n?(e.finalShapeGatherIndices.push(G9),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(n)),e.inputShapeGatherIndicesSparse[t]=n,t++}}function _x(r,e,t,n,o,s){if(o[e])return t>0?s[e]:s[e+1&1];{let i=r<0?n+r:r;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var Q9=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:r=>r())();function Xd(){return new Promise(r=>Q9(()=>r()))}var B={};Ke(B,{ERF_A1:()=>dI,ERF_A2:()=>gI,ERF_A3:()=>xI,ERF_A4:()=>yI,ERF_A5:()=>bI,ERF_P:()=>hI,PARALLELIZE_THRESHOLD:()=>bm,RowPartitionType:()=>Cn,SELU_SCALE:()=>fI,SELU_SCALEALPHA:()=>mI,applyActivation:()=>hs,assertAndGetBroadcastShape:()=>Le,assertAxesAreInnerMostDims:()=>WE,assertParamsConsistent:()=>J9,assignToTypedArray:()=>EI,axesAreInnerMostDims:()=>_d,calculateShapes:()=>l8,checkEinsumDimSizes:()=>_I,checkPadOnDimRoundingMode:()=>ht,combineLocations:()=>Jg,combineRaggedTensorToTensorShapes:()=>tI,complexWithEvenIndex:()=>TI,complexWithOddIndex:()=>SI,computeConv2DInfo:()=>os,computeConv3DInfo:()=>wg,computeDefaultPad:()=>Ad,computeDilation2DInfo:()=>WC,computeOptimalWindowSize:()=>sI,computeOutAndReduceShapes:()=>zE,computeOutShape:()=>eI,computePool2DInfo:()=>kd,computePool3DInfo:()=>HC,convertConv2DDataFormat:()=>Tg,decodeEinsumEquation:()=>kI,eitherStridesOrDilationsAreOne:()=>Bt,expandShapeToKeepDim:()=>Mn,exponent:()=>II,exponents:()=>NI,fromStringArrayToUint8:()=>QI,fromUint8ToStringArray:()=>ZI,getAxesPermutation:()=>HE,getBroadcastDims:()=>qg,getComplexWithIndex:()=>CI,getEinsumComputePath:()=>RI,getEinsumPermutation:()=>AI,getFusedBiasGradient:()=>fs,getFusedDyActivation:()=>ms,getImageCenter:()=>iI,getInnerMostAxes:()=>jE,getPermuted:()=>uI,getRaggedRank:()=>nI,getReductionAxes:()=>Sp,getReshaped:()=>aI,getReshapedPermuted:()=>lI,getRowPartitionTypesHelper:()=>rI,getSliceBeginCoords:()=>cI,getSliceSize:()=>pI,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>PI,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>LI,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>BI,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>UI,getSparseReshapeInputOutputMismatchErrorMessage:()=>zI,getSparseReshapeInputOutputMultipleErrorMessage:()=>GI,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>MI,getSparseReshapeNegativeOutputDimErrorMessage:()=>VI,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>jI,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>WI,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>HI,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>KI,getUndoAxesPermutation:()=>KE,isIdentityPermutation:()=>OI,log:()=>MS,mergeRealAndImagArrays:()=>vI,prepareAndValidate:()=>U9,prepareSplitSize:()=>DI,segment_util:()=>Zd,shouldFuse:()=>ds,slice_util:()=>nr,splitRealAndImagArrays:()=>wI,stridesOrDilationsArePositive:()=>yn,tupleValuesAreOne:()=>ns,upcastType:()=>Lt,validateDefaultValueShape:()=>oI,validateInput:()=>Bd,validateUpdateShape:()=>$4,warn:()=>Pn});function J9(r,e){let t=r[0].length;r.forEach((o,s)=>{_(o.length===t,()=>`Error in concat${t}D: rank of tensors[${s}] must be the same as the rank of the rest (${t})`)}),_(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);let n=r[0];r.forEach((o,s)=>{for(let i=0;i<t;i++)_(i===e||o[i]===n[i],()=>`Error in concat${t}D: Shape of tensors[${s}] (${o}) does not match the shape of the rest (${n}) along the non-concatenated axis ${s}.`)})}function eI(r,e){let t=r[0].slice();for(let n=1;n<r.length;n++)t[e]+=r[n][e];return t}var Cn;(function(r){r[r.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",r[r.VALUE_ROWIDS=1]="VALUE_ROWIDS",r[r.ROW_LENGTHS=2]="ROW_LENGTHS",r[r.ROW_SPLITS=3]="ROW_SPLITS",r[r.ROW_LIMITS=4]="ROW_LIMITS",r[r.ROW_STARTS=5]="ROW_STARTS"})(Cn||(Cn={}));function tI(r,e,t){let n=new Array;if(t==null&&e==null)return n;if(e==null)for(;n.length<r+t.length;)n.push(-1);else n=e.slice();if(t==null)return n;if(r+t.length!==n.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${r+t.length}, but shape.rank = ${n.length}`);for(let o=1;o<t.length;++o){let s=t[o],i=n[n.length-t.length+o],a=n[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${o+r}] = ${s} but shape[${o+r}] = ${a}`)}else n[i]=s}return n}function rI(r){let e={FIRST_DIM_SIZE:Cn.FIRST_DIM_SIZE,VALUE_ROWIDS:Cn.VALUE_ROWIDS,ROW_LENGTHS:Cn.ROW_LENGTHS,ROW_SPLITS:Cn.ROW_SPLITS,ROW_LIMITS:Cn.ROW_LIMITS,ROW_STARTS:Cn.ROW_STARTS},t=[];for(let n of r)if(n in e)t.push(e[n]);else break;return t}function nI(r){return r.length===0?0:r[0]===Cn.FIRST_DIM_SIZE?r.length-1:r.length}function oI(r,e){if(r==null||e==null)return;let t=r.length,n=e.length;if(t>=n)throw new Error(`defaultValue.shape=${r} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${n})`);for(let o=0;o<Math.min(t,n-1);++o){let s=r[o],i=e[o+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${r}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${o-r.length}] = ${s} but ragged tensor input.flatValues.shape[${o-r.length}] = ${i}`)}}var bm=30;function sI(r){return r<=bm?r:qs(r,Math.floor(Math.sqrt(r)))}function iI(r,e,t){let n=t*(typeof r=="number"?r:r[0]),o=e*(typeof r=="number"?r:r[1]);return[n,o]}function aI(r,e,t,n=!0){let o=[];if(n)o=o.concat(e.slice(0)),o.push(r[0]/t),o=o.concat(r.slice(1));else{o=o.concat(r[0]);let s=e.length;for(let i=0;i<s;++i)o=o.concat([r[i+1]/e[i],e[i]]);o=o.concat(r.slice(s+1))}return o}function uI(r,e,t=!0){let n=[];if(t){n.push(e);for(let o=e+1;o<r;++o)o<=2*e?(n.push(o),n.push(o-(e+1))):n.push(o)}else{let o=[],s=[];for(let i=1;i<r;++i)i>=e*2+1||i%2===1?s.push(i):o.push(i);n.push(...o),n.push(0),n.push(...s)}return n}function lI(r,e,t,n=!0){let o=[];n?o.push(r[0]/t):o.push(r[0]*t);for(let s=1;s<r.length;++s)s<=e.length?n?o.push(e[s-1]*r[s]):o.push(r[s]/e[s-1]):o.push(r[s]);return o}function cI(r,e){let t=[0];for(let n=0;n<e;++n)t.push(r[n][0]);return t}function pI(r,e,t){let n=r.slice(0,1);for(let o=0;o<t;++o)n.push(r[o+1]-e[o][0]-e[o][1]);return n}var mI=1.7580993408473768,fI=1.0507009873554805;var hI=.3275911,dI=.254829592,gI=-.284496736,xI=1.421413741,yI=-1.453152027,bI=1.061405429;function vI(r,e){if(r.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${r.length}, imag: ${e.length}.`);let t=new Float32Array(r.length*2);for(let n=0;n<t.length;n+=2)t[n]=r[n/2],t[n+1]=e[n/2];return t}function wI(r){let e=new Float32Array(r.length/2),t=new Float32Array(r.length/2);for(let n=0;n<r.length;n+=2)e[n/2]=r[n],t[n/2]=r[n+1];return{real:e,imag:t}}function TI(r){let e=Math.ceil(r.length/4),t=new Float32Array(e),n=new Float32Array(e);for(let o=0;o<r.length;o+=4)t[Math.floor(o/4)]=r[o],n[Math.floor(o/4)]=r[o+1];return{real:t,imag:n}}function SI(r){let e=Math.floor(r.length/4),t=new Float32Array(e),n=new Float32Array(e);for(let o=2;o<r.length;o+=4)t[Math.floor(o/4)]=r[o],n[Math.floor(o/4)]=r[o+1];return{real:t,imag:n}}function CI(r,e){let t=r[e*2],n=r[e*2+1];return{real:t,imag:n}}function EI(r,e,t,n){r[n*2]=e,r[n*2+1]=t}function NI(r,e){let t=new Float32Array(r/2),n=new Float32Array(r/2);for(let o=0;o<Math.ceil(r/2);o++){let s=(e?2:-2)*Math.PI*(o/r);t[o]=Math.cos(s),n[o]=Math.sin(s)}return{real:t,imag:n}}function II(r,e,t){let n=(t?2:-2)*Math.PI*(r/e),o=Math.cos(n),s=Math.sin(n);return{real:o,imag:s}}var Yd="->",$I=/->/g,Vx=",",Ux="...";function kI(r,e){r=r.replace(/\s/g,"");let t=(r.length-r.replace($I,"").length)/Yd.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Yd}").`);let[n,o]=r.split(Yd);_(n.indexOf(Ux)===-1,()=>`The ellipsis notation ("${Ux}") is not supported yet.`);let s=n.split(Vx),i=s.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let m=0;m<o.length;++m){let f=o[m];if(!s.some(d=>d.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let m=0;m<n.length;++m){let f=n[m];a.indexOf(f)===-1&&f!==Vx&&a.push(f)}let u=new Array(s.length);for(let m=0;m<i;++m){if(new Set(s[m].split("")).size!==s[m].length)throw new Error(`Found duplicate axes in input component ${s[m]}. Support for duplicate axes in input is not implemented yet.`);u[m]=[];for(let f=0;f<s[m].length;++f)u[m].push(a.indexOf(s[m][f]))}let l=a.length,c=o.length,p=[];for(let m=c;m<l;++m)p.push(m);return{allDims:a,summedDims:p,idDims:u}}function AI(r,e){let t=new Array(r);t.fill(-1);for(let o=0;o<e.length;++o)t[e[o]]=o;let n=[];for(let o=0;o<r;++o)t[o]===-1&&n.push(o);return t=t.filter(o=>o!==-1),{permutationIndices:t,expandDims:n}}function _I(r,e,t){let n=new Array(r);for(let o=0;o<t.length;++o){let s=t[o].shape;for(let i=0;i<e[o].length;++i)n[e[o][i]]===void 0?n[e[o][i]]=s[i]:_(n[e[o][i]]===s[i],()=>`Expected dimension ${n[e[o][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function RI(r,e){let t=r,n=[],o=0;r.length===0&&t.push(-1),o=r.length+1;for(let i=0;i<o;++i)n.push([]);let s=[];for(let i=0;i<t.length;++i){let a=t[i],u=FI(e,a);for(let l of u)s.indexOf(l)===-1&&(n[i].push(l),s.push(l))}return{path:t,steps:n}}function OI(r){return r.every((e,t)=>e===t)}function FI(r,e){let t=[];for(let n=0;n<r.length;++n)(r[n].length===0||r[n].indexOf(e)!==-1||e===-1)&&t.push(n);return t}function DI(r,e,t=0){let n=[];if(typeof e=="number")_(r.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),n=new Array(e).fill(r.shape[t]/e);else{let o=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);_(o<=1,()=>"There should be only one negative value in split array.");let s=e.indexOf(-1);if(s!==-1){let i=e.reduce((a,u)=>u>0?a+u:a);e[s]=r.shape[t]-i}_(r.shape[t]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),n=e}return n}function PI(r){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${r}`}function LI(r,e){return`indices(${r}, 0) is invalid: ${e} < 0`}function BI(r,e,t){return`indices(${r}, 0) is invalid: ${e} >= ${t}`}function MI(r,e){return`only one output dimension may be -1, not both ${r} and ${e}`}function VI(r,e){return`size ${r} must be non-negative, not ${e}`}function UI(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function GI(r,e){let t=Ae(r),n=Ae(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${n}. inputShape=${r} outputShape= ${e}`}function zI(r,e){let t=Ae(r),n=Ae(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${n}. inputShape=${r} outputShape=${e}`}function WI(){return"segment ids must be >= 0"}function HI(){return"segment ids are not increasing"}function KI(r,e){return`Segment id ${r} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function jI(r,e,t){return`Bad: indices[${r}] == ${e} out of range [0, ${t})`}var Zd={};Ke(Zd,{collectGatherOpShapeInfo:()=>YI,computeOutShape:()=>XI,segOpComputeOptimalWindowSize:()=>qI});function qI(r,e){let t=!1,n;for(r<=bm?(n=r,t=!0):n=qs(r,Math.floor(Math.sqrt(r)));!t;)n>e||n===r?t=!0:n=qs(r,n+1);return n}function XI(r,e,t){let n=[],o=r.length;for(let s=0;s<o;s++)s!==e?n.push(r[s]):n.push(t);return n}function YI(r,e,t,n){let o=e.shape.length,s=r.shape.length;if(n!==0&&(n<-o||n>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${n}`);if(n<0&&(n+=o),n>s)throw new Error(`batchDims (${n}) must be less than rank(x) (
    ${s}).`);if(t<n)throw new Error(`batchDims (${n}) must be less than or equal to axis (${t}).`);for(let p=0;p<n;++p)if(r.shape[p]!==e.shape[p])throw new Error(`x.shape[${p}]: ${r.shape[p]} should be equal to indices.shape[${p}]: ${e.shape[p]}.`);let i=r.shape[t],a=[],u=1,l=1,c=1;for(let p=0;p<n;++p)a.push(r.shape[p]),u*=r.shape[p];for(let p=n;p<t;p++)a.push(r.shape[p]),l*=r.shape[p];for(let p=n;p<o;p++)a.push(e.shape[p]);for(let p=t+1;p<s;p++)a.push(r.shape[p]),c*=r.shape[p];return{batchSize:u,sliceSize:c,outerSize:l,dimSize:i,outputShape:a}}function ZI(r){try{return r.map(e=>wi(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function QI(r){return r.map(e=>vi(e))}var En={};Ke(En,{nonMaxSuppressionV3Impl:()=>im,nonMaxSuppressionV4Impl:()=>am,nonMaxSuppressionV5Impl:()=>um,whereImpl:()=>tm});wx();var Fy=zh(zx());var JI=U();JI.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var Ar;(function(r){r[r.DT_INVALID=0]="DT_INVALID",r[r.DT_FLOAT=1]="DT_FLOAT",r[r.DT_DOUBLE=2]="DT_DOUBLE",r[r.DT_INT32=3]="DT_INT32",r[r.DT_UINT8=4]="DT_UINT8",r[r.DT_INT16=5]="DT_INT16",r[r.DT_INT8=6]="DT_INT8",r[r.DT_STRING=7]="DT_STRING",r[r.DT_COMPLEX64=8]="DT_COMPLEX64",r[r.DT_INT64=9]="DT_INT64",r[r.DT_BOOL=10]="DT_BOOL",r[r.DT_QINT8=11]="DT_QINT8",r[r.DT_QUINT8=12]="DT_QUINT8",r[r.DT_QINT32=13]="DT_QINT32",r[r.DT_BFLOAT16=14]="DT_BFLOAT16",r[r.DT_QINT16=15]="DT_QINT16",r[r.DT_QUINT16=16]="DT_QUINT16",r[r.DT_UINT16=17]="DT_UINT16",r[r.DT_COMPLEX128=18]="DT_COMPLEX128",r[r.DT_HALF=19]="DT_HALF",r[r.DT_RESOURCE=20]="DT_RESOURCE",r[r.DT_VARIANT=21]="DT_VARIANT",r[r.DT_UINT32=22]="DT_UINT32",r[r.DT_UINT64=23]="DT_UINT64",r[r.DT_FLOAT_REF=101]="DT_FLOAT_REF",r[r.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",r[r.DT_INT32_REF=103]="DT_INT32_REF",r[r.DT_UINT8_REF=104]="DT_UINT8_REF",r[r.DT_INT16_REF=105]="DT_INT16_REF",r[r.DT_INT8_REF=106]="DT_INT8_REF",r[r.DT_STRING_REF=107]="DT_STRING_REF",r[r.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",r[r.DT_INT64_REF=109]="DT_INT64_REF",r[r.DT_BOOL_REF=110]="DT_BOOL_REF",r[r.DT_QINT8_REF=111]="DT_QINT8_REF",r[r.DT_QUINT8_REF=112]="DT_QUINT8_REF",r[r.DT_QINT32_REF=113]="DT_QINT32_REF",r[r.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",r[r.DT_QINT16_REF=115]="DT_QINT16_REF",r[r.DT_QUINT16_REF=116]="DT_QUINT16_REF",r[r.DT_UINT16_REF=117]="DT_UINT16_REF",r[r.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",r[r.DT_HALF_REF=119]="DT_HALF_REF",r[r.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",r[r.DT_VARIANT_REF=121]="DT_VARIANT_REF",r[r.DT_UINT32_REF=122]="DT_UINT32_REF",r[r.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ar||(Ar={}));var Wx;(function(r){let e;(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e=r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(Wx||(Wx={}));var t$={};function vm(r){return t$[r]}function v(r,e,t,n,o){let s=e.inputParams[r];if(s&&s.inputIndexStart!==void 0){let a=s.inputIndexStart,u=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?a+1:s.inputIndexEnd;if(s.type==="tensor")return Tt(e.inputNames[s.inputIndexStart],t,n,o);if(s.type==="tensors")return e.inputNames.slice(a,u).map(m=>Tt(m,t,n,o));let l=Tt(e.inputNames.slice(a)[0],t,n,o),c=l.dataSync();return s.type==="number"?c[0]:N.toNestedArray(l.shape,c)}let i=e.attrParams[r];return i&&i.value}function Tt(r,e,t,n){let[o,s]=Wt(r);if(n!=null){let a=n.getHashTableHandleByName(o);if(a!=null)return a}let i=t.currentContextIds.find(a=>!!e[wm(o,a)]);return i!==void 0?e[wm(o,i)][s]:void 0}function Hx(r,e,t){return e[wm(r,t.currentContextId)]}function tn(r,e){let[t,n,o]=Wt(r);return[wm(t,e&&e.currentContextId),n,o]}function wm(r,e){return e?`${r}-${e}`:r}function Wt(r){let e=r.split(":");if(e.length===1)return[r,0,void 0];let t=e[0],n=e.length===3?e[1]:void 0,o=Number(e[e.length-1]);return[t,o,n]}function Qa(r,e,t){let n=v("pad",r,e,t);if(n==="explicit"){n=v("explicitPaddings",r,e,t);let o=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)o[s][0]=n[s*2],o[s][1]=n[s*2+1];return o}return n}function rn(r){return r.kept?r:hr(r)}var Qd={};Ke(Qd,{json:()=>r$});var r$=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Jd={};Ke(Jd,{json:()=>n$});var n$=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var e1={};Ke(e1,{json:()=>o$});var o$=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var t1={};Ke(t1,{json:()=>s$});var s$=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var r1={};Ke(r1,{json:()=>i$});var i$=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var n1={};Ke(n1,{json:()=>a$});var a$=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var o1={};Ke(o1,{json:()=>u$});var u$=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var s1={};Ke(s1,{json:()=>l$});var l$=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var i1={};Ke(i1,{json:()=>c$});var c$=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var a1={};Ke(a1,{json:()=>p$});var p$=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var u1={};Ke(u1,{json:()=>m$});var m$=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var l1={};Ke(l1,{json:()=>f$});var f$=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var c1={};Ke(c1,{json:()=>h$});var h$=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var p1={};Ke(p1,{json:()=>d$});var d$=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var m1={};Ke(m1,{json:()=>g$});var g$=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var f1={};Ke(f1,{json:()=>x$});var x$=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var h1={};Ke(h1,{json:()=>y$});var y$=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var d1={};Ke(d1,{json:()=>b$});var b$=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var g1={};Ke(g1,{json:()=>v$});var v$=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var Ja=class{constructor(){let e=[Qd,Jd,e1,t1,r1,n1,o1,s1,i1,a1,u1,l1,c1,p1,m1,f1,h1,d1,g1],t=[].concat(...e.map(n=>n.json));this.opMappers=t.reduce((n,o)=>(n[o.tfOpName]=o,n),{})}static get Instance(){return this._instance||(this._instance=new this)}transformGraph(e,t={}){let n=e.node,o=[],s=[],i=[],a=n.reduce((y,x)=>(y[x.name]=this.mapNode(x),x.op.startsWith("Placeholder")?o.push(y[x.name]):x.op==="Const"?s.push(y[x.name]):(x.input==null||x.input.length===0)&&i.push(y[x.name]),y),{}),u=[],l=[],c={},p={};t!=null&&(c=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));let m=Object.keys(a);m.forEach(y=>{let x=a[y];x.inputNames.forEach((b,$)=>{let[A,,O]=tn(b),M=a[A];if(M.outputs!=null){let G=M.outputs.indexOf(O);if(G!==-1){let H=`${A}:${G}`;x.inputNames[$]=H}}x.inputs.push(M),M.children.push(x)})}),Object.keys(p).length===0?m.forEach(y=>{let x=a[y];x.children.length===0&&l.push(x)}):Object.keys(p).forEach(y=>{let[x]=tn(y),b=a[x];b!=null&&(b.signatureKey=p[y],l.push(b))}),Object.keys(c).length>0?Object.keys(c).forEach(y=>{let[x]=tn(y),b=a[x];b&&(b.signatureKey=c[y],u.push(b))}):u=o;let f={};e.library!=null&&e.library.function!=null&&(f=e.library.function.reduce((y,x)=>(y[x.signature.name]=this.mapFunction(x),y),{}));let d={nodes:a,inputs:u,outputs:l,weights:s,placeholders:o,signature:t,functions:f};return i.length>0&&(d.initNodes=i),d}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,n)=>(t[e[n].name]=n,t),{})}mapNode(e){let t=vm(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});let n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(o=>o.startsWith("^")?o.slice(1):o),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(n.inputParams=t.inputs.reduce((o,s)=>(o[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},o),{})),t.attrs!=null&&(n.attrParams=t.attrs.reduce((o,s)=>{let i=s.type,a;switch(s.type){case"string":a=Tm(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Tm(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":a=km(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=km(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":a=Cm(e.attr,s.tfName,s.defaultValue||0),a===void 0&&s.tfDeprecatedName&&(a=Cm(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":a=$m(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=$m(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":a=Sm(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Sm(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":a=_m(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=_m(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":a=Im(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Im(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":a=Am(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Am(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":a=Em(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Em(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":a=Nm(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Nm(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":a=Kx(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Kx(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${e.op}`)}return o[s.name]={value:a,type:i},o},{})),n}mapFunction(e){let t=e.nodeDef,n=[],o=[],s={};t!=null&&(s=t.reduce((p,m)=>(p[m.name]=this.mapNode(m),m.op==="Const"&&o.push(p[m.name]),p),{}));let i=[],a=[];e.signature.inputArg.forEach(p=>{let[m]=tn(p.name),f={name:m,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:x1(p.type),type:"dtype"}},children:[]};f.signatureKey=p.name,i.push(f),s[m]=f}),Object.keys(s).forEach(p=>{let m=s[p];m.inputNames.forEach((f,d)=>{let[y,,x]=tn(f),b=s[y];if(b.outputs!=null){let $=b.outputs.indexOf(x);if($!==-1){let A=`${y}:${$}`;m.inputNames[d]=A}}m.inputs.push(b),b.children.push(m)})});let l=e.ret;e.signature.outputArg.forEach(p=>{let[m,f]=tn(l[p.name]),d=s[m];d!=null&&(d.defaultOutput=f,a.push(d))});let c=this.mapArgsToSignature(e);return{nodes:s,inputs:i,outputs:a,weights:o,placeholders:n,signature:c}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n),t),{}),outputs:e.signature.outputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t),{})}}mapArgToTensorInfo(e,t){let n=e.name;return t!=null&&(n=t[n]),{name:n,dtype:e.type}}};function w$(r){let e=U().global;if(typeof e.atob<"u")return e.atob(r);if(typeof Buffer<"u")return new Buffer(r,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function jx(r,e){let t=Array.isArray(r)?String.fromCharCode.apply(null,r):w$(r);return e?t:t.toLowerCase()}function Tm(r,e,t,n=!1){let o=r[e];return o!=null?jx(o.s,n):t}function Sm(r,e,t){let n=r[e];return n?n.b:t}function Cm(r,e,t){let n=r[e]||{},o=n.i!=null?n.i:n.f!=null?n.f:t;return typeof o=="number"?o:parseInt(o,10)}function x1(r){switch(typeof r=="string"&&(r=Ar[r]),r){case Ar.DT_FLOAT:case Ar.DT_HALF:return"float32";case Ar.DT_INT32:case Ar.DT_INT64:case Ar.DT_INT8:case Ar.DT_UINT8:return"int32";case Ar.DT_BOOL:return"bool";case Ar.DT_DOUBLE:return"float32";case Ar.DT_STRING:return"string";default:return null}}function Kx(r,e,t){let n=r[e];return n&&n.func?n.func.name:t}function Em(r,e,t){let n=r[e];return n&&n.type?x1(n.type):t}function Nm(r,e,t){let n=r[e];return n&&n.list&&n.list.type?n.list.type.map(o=>x1(o)):t}function qx(r){if(!r.unknownRank)return r.dim!=null?r.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function Im(r,e,t){let n=r[e];return n&&n.shape?qx(n.shape):t}function $m(r,e,t){let n=r[e];return n?((n.list.f&&n.list.f.length?n.list.f:n.list.i)||[]).map(o=>typeof o=="number"?o:parseInt(o,10)):t}function km(r,e,t,n=!1){let o=r[e];return o&&o.list&&o.list.s?o.list.s.map(s=>jx(s,n)):t}function Am(r,e,t){let n=r[e];return n&&n.list&&n.list.shape?n.list.shape.map(o=>qx(o)):t}function _m(r,e,t){let n=r[e];return n&&n.list&&n.list.b?n.list.b:t}var Rm=class{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(o=>this.getInput(o)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((o,s)=>(o[s]=this.getAttr(s),o),{}))}getInput(e){return Tt(e,this.tensorMap,this.context)}getAttr(e,t){let n=this.node.rawAttrs[e];if(n.tensor!=null)return Tt(e,this.tensorMap,this.context);if(n.i!=null||n.f!=null)return Cm(this.node.rawAttrs,e,t);if(n.s!=null)return Tm(this.node.rawAttrs,e,t);if(n.b!=null)return Sm(this.node.rawAttrs,e,t);if(n.shape!=null)return Im(this.node.rawAttrs,e,t);if(n.type!=null)return Em(this.node.rawAttrs,e,t);if(n.list!=null){if(n.list.i!=null||n.list.f!=null)return $m(this.node.rawAttrs,e,t);if(n.list.s!=null)return km(this.node.rawAttrs,e,t);if(n.list.shape!=null)return Am(this.node.rawAttrs,e,t);if(n.list.b!=null)return _m(this.node.rawAttrs,e,t);if(n.list.type!=null)return Nm(this.node.rawAttrs,e,t)}return t}};var De={};Ke(De,{OP_SCOPE_SUFFIX:()=>gd,abs:()=>It,acos:()=>lg,acosh:()=>cg,add:()=>ue,addN:()=>pg,all:()=>mg,any:()=>fg,argMax:()=>hg,argMin:()=>dg,asin:()=>gg,asinh:()=>xg,atan:()=>yg,atan2:()=>bg,atanh:()=>vg,avgPool:()=>yp,avgPool3d:()=>Sg,basicLSTMCell:()=>Cg,batchNorm:()=>go,batchNorm2d:()=>Ng,batchNorm3d:()=>Ig,batchNorm4d:()=>$g,batchToSpaceND:()=>bp,bincount:()=>vp,booleanMaskAsync:()=>s8,broadcastArgs:()=>kg,broadcastTo:()=>xo,buffer:()=>Ie,cast:()=>_e,ceil:()=>Ag,clipByValue:()=>wp,clone:()=>hr,complex:()=>Yt,concat:()=>qe,concat1d:()=>_g,concat2d:()=>Rg,concat3d:()=>Og,concat4d:()=>Fg,conv1d:()=>Dg,conv2d:()=>yo,conv2dTranspose:()=>Pg,conv3d:()=>Lg,conv3dTranspose:()=>Mg,cos:()=>Vg,cosh:()=>Ug,cosineWindow:()=>ja,cumprod:()=>Gg,cumsum:()=>zg,denseBincount:()=>Wg,depthToSpace:()=>Hg,depthwiseConv2d:()=>$i,diag:()=>Kg,dilation2d:()=>jg,div:()=>we,divNoNan:()=>Xg,dot:()=>Yg,dropout:()=>b8,einsum:()=>Zg,elu:()=>Ep,enclosingPowerOfTwo:()=>Md,equal:()=>Cp,erf:()=>Qg,euclideanNorm:()=>t0,exp:()=>Jt,expandDims:()=>er,expm1:()=>r0,eye:()=>Np,fft:()=>Ai,fill:()=>vn,floor:()=>Ip,floorDiv:()=>xp,fused:()=>Vd,gather:()=>$p,gatherND:()=>x8,greater:()=>is,greaterEqual:()=>kp,ifft:()=>ps,imag:()=>wo,image:()=>Co,inTopKAsync:()=>w8,irfft:()=>Zp,isFinite:()=>n0,isInf:()=>o0,isNaN:()=>s0,leakyRelu:()=>Ap,less:()=>i0,lessEqual:()=>ki,linalg:()=>w9,linspace:()=>a0,localResponseNormalization:()=>u0,log:()=>Un,log1p:()=>_p,logSigmoid:()=>c0,logSoftmax:()=>p0,logSumExp:()=>Op,logicalAnd:()=>as,logicalNot:()=>Fp,logicalOr:()=>Dp,logicalXor:()=>m0,losses:()=>T9,lowerBound:()=>f0,matMul:()=>Be,max:()=>wn,maxPool:()=>Lp,maxPool3d:()=>h0,maxPoolWithArgmax:()=>d0,maximum:()=>Bp,mean:()=>us,meshgrid:()=>g0,min:()=>Ha,minimum:()=>Mp,mirrorPad:()=>x0,mod:()=>y0,moments:()=>b0,movingAverage:()=>u8,mul:()=>ee,multiRNNCell:()=>v0,multinomial:()=>w0,neg:()=>Gt,norm:()=>ss,notEqual:()=>Vp,oneHot:()=>T0,ones:()=>Tn,onesLike:()=>S0,op:()=>E,outerProduct:()=>C0,pad:()=>Sn,pad1d:()=>E0,pad2d:()=>N0,pad3d:()=>I0,pad4d:()=>$0,pool:()=>k0,pow:()=>Vn,prelu:()=>Gp,print:()=>gp,prod:()=>A0,raggedGather:()=>_0,raggedRange:()=>R0,raggedTensorToTensor:()=>O0,rand:()=>F0,randomGamma:()=>Q0,randomNormal:()=>jp,randomStandardNormal:()=>J0,randomUniform:()=>qp,range:()=>To,real:()=>Gn,reciprocal:()=>e4,relu:()=>So,relu6:()=>Xp,reshape:()=>W,reverse:()=>Ir,reverse1d:()=>t4,reverse2d:()=>r4,reverse3d:()=>n4,reverse4d:()=>o4,rfft:()=>_i,round:()=>Yp,rsqrt:()=>s4,scalar:()=>ge,scatterND:()=>m8,searchSorted:()=>Ka,selu:()=>i4,separableConv2d:()=>a4,setdiff1dAsync:()=>u4,sigmoid:()=>Gr,sign:()=>l4,signal:()=>v9,sin:()=>c4,sinh:()=>p4,slice:()=>ve,slice1d:()=>m4,slice2d:()=>f4,slice3d:()=>h4,slice4d:()=>d4,softmax:()=>g4,softplus:()=>Rp,spaceToBatchND:()=>Up,sparse:()=>S9,sparseToDense:()=>d8,spectral:()=>b9,split:()=>zn,sqrt:()=>Qt,square:()=>$t,squaredDifference:()=>Qp,squeeze:()=>pt,stack:()=>zt,step:()=>Jp,stridedSlice:()=>x4,string:()=>C9,sub:()=>ye,sum:()=>Me,tan:()=>y4,tanh:()=>Wa,tensor:()=>Ut,tensor1d:()=>dt,tensor2d:()=>$r,tensor3d:()=>em,tensor4d:()=>b4,tensor5d:()=>v4,tensor6d:()=>w4,tile:()=>vo,topk:()=>T4,transpose:()=>nm,truncatedNormal:()=>S4,unique:()=>C4,unsortedSegmentSum:()=>E4,unstack:()=>kr,upperBound:()=>N4,variable:()=>I4,where:()=>en,whereAsync:()=>rm,zeros:()=>zr,zerosLike:()=>wt});var Xx=(r,e,t,n=De)=>{switch(r.op){case"BiasAdd":case"AddV2":case"Add":return[n.add(v("a",r,e,t),v("b",r,e,t))];case"AddN":return[n.addN(v("tensors",r,e,t))];case"FloorMod":case"Mod":return[n.mod(v("a",r,e,t),v("b",r,e,t))];case"Mul":return[n.mul(v("a",r,e,t),v("b",r,e,t))];case"RealDiv":case"Div":return[n.div(v("a",r,e,t),v("b",r,e,t))];case"DivNoNan":return[n.divNoNan(v("a",r,e,t),v("b",r,e,t))];case"FloorDiv":return[n.floorDiv(v("a",r,e,t),v("b",r,e,t))];case"Sub":return[n.sub(v("a",r,e,t),v("b",r,e,t))];case"Minimum":return[n.minimum(v("a",r,e,t),v("b",r,e,t))];case"Maximum":return[n.maximum(v("a",r,e,t),v("b",r,e,t))];case"Pow":return[n.pow(v("a",r,e,t),v("b",r,e,t))];case"SquaredDifference":return[n.squaredDifference(v("a",r,e,t),v("b",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var Yx=(r,e,t,n=De)=>{switch(r.op){case"Abs":case"ComplexAbs":return[n.abs(v("x",r,e,t))];case"Acos":return[n.acos(v("x",r,e,t))];case"Acosh":return[n.acosh(v("x",r,e,t))];case"Asin":return[n.asin(v("x",r,e,t))];case"Asinh":return[n.asinh(v("x",r,e,t))];case"Atan":return[n.atan(v("x",r,e,t))];case"Atan2":return[n.atan2(v("x",r,e,t),v("y",r,e,t))];case"Atanh":return[n.atanh(v("x",r,e,t))];case"Ceil":return[n.ceil(v("x",r,e,t))];case"Complex":return[n.complex(v("real",r,e,t),v("imag",r,e,t))];case"Cos":return[n.cos(v("x",r,e,t))];case"Cosh":return[n.cosh(v("x",r,e,t))];case"Elu":return[n.elu(v("x",r,e,t))];case"Erf":return[n.erf(v("x",r,e,t))];case"Exp":return[n.exp(v("x",r,e,t))];case"Expm1":return[n.expm1(v("x",r,e,t))];case"Floor":return[n.floor(v("x",r,e,t))];case"Log":return[n.log(v("x",r,e,t))];case"Log1p":return[n.log1p(v("x",r,e,t))];case"Imag":return[n.imag(v("x",r,e,t))];case"Neg":return[n.neg(v("x",r,e,t))];case"Reciprocal":return[n.reciprocal(v("x",r,e,t))];case"Real":return[n.real(v("x",r,e,t))];case"Relu":return[n.relu(v("x",r,e,t))];case"Round":return[n.round(v("x",r,e,t))];case"Selu":return[n.selu(v("x",r,e,t))];case"Sigmoid":return[n.sigmoid(v("x",r,e,t))];case"Sin":return[n.sin(v("x",r,e,t))];case"Sign":return[n.sign(v("x",r,e,t))];case"Sinh":return[n.sinh(v("x",r,e,t))];case"Softplus":return[n.softplus(v("x",r,e,t))];case"Sqrt":return[n.sqrt(v("x",r,e,t))];case"Square":return[n.square(v("x",r,e,t))];case"Tanh":return[n.tanh(v("x",r,e,t))];case"Tan":return[n.tan(v("x",r,e,t))];case"ClipByValue":return[n.clipByValue(v("x",r,e,t),v("clipValueMin",r,e,t),v("clipValueMax",r,e,t))];case"Relu6":return[n.relu6(v("x",r,e,t))];case"Rsqrt":return[n.rsqrt(Tt(r.inputNames[0],e,t))];case"Prod":return[n.prod(v("x",r,e,t),v("axes",r,e,t))];case"LeakyRelu":return[n.leakyRelu(v("x",r,e,t),v("alpha",r,e,t))];case"Prelu":return[n.prelu(v("x",r,e,t),v("alpha",r,e,t))];case"IsNan":return[n.isNaN(Tt(r.inputNames[0],e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function dr(r,e,t=""){if(!(typeof r=="number"||typeof e=="number")){N.assert(r.length===e.length,()=>t+` Shapes ${r} and ${e} must match`);for(let n=0;n<r.length;n++){let o=r[n],s=e[n];N.assert(o<0||s<0||o===s,()=>t+` Shapes ${r} and ${e} must match`)}}}function Zx(r){return!(typeof r=="number"||r.some(e=>e<0))}function Oi(r,e,t){let n=Om(r,t),o=!Zx(n);if(o&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${n}`);if(o&&e.forEach(s=>{n=Om(s.shape,n)}),!Zx(n))throw new Error(`Non-fully-defined elementShape: ${n}`);return n}function Om(r,e){if(typeof r=="number")return e;if(typeof e=="number")return r;if(r.length!==e.length)throw new Error(`Incompatible ranks during merge: ${r} vs. ${e}`);let t=[];for(let n=0;n<r.length;++n){let o=r[n],s=e[n];if(o>=0&&s>=0&&o!==s)throw new Error(`Incompatible shape during merge: ${r} vs. ${e}`);t[n]=o>=0?o:s}return t}var Fm=class{constructor(e,t,n,o,s,i,a){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=o,this.identicalElementShapes=s,this.dynamicSize=i,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=ge(0),Zt(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),dr(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,Zt(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((n,o)=>this.write(n,t[o]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let o=0;o<this.size();o++)e.push(o)}if(e.length===0)return Ut([],[0].concat(this.elementShape));let n=this.readMany(e);return dr(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),zt(n,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return Ut([],[0].concat(this.elementShape));let t=[];for(let o=0;o<this.size();o++)t.push(o);let n=this.readMany(t);return dr(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),qe(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,kr(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0,o=e.map(u=>(n+=u,n));if(n!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let s=n===0?0:t.size/n,i=[];be(()=>{t=W(t,[1,n,s]);for(let u=0;u<e.length;++u){let c=[0,u===0?0:o[u-1],0],p=[1,e[u],s];i[u]=W(ve(t,c,p),this.elementShape)}return i});let a=[];for(let u=0;u<e.length;u++)a[u]=u;this.writeMany(a,i)}};var Kn=class{constructor(e,t,n,o=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,e!=null&&e.forEach(s=>{if(n!==s.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${s.dtype}`);dr(t,s.shape,"TensorList shape mismatch: "),Zt(s)}),this.idTensor=ge(0),this.maxNumElements=o,Zt(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Kn([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(n!==-1&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);dr(e,this.elementShape,"TensorList shape mismatch: ");let o=Oi(this.elementShape,this.tensors,e);return be(()=>{let s=this.tensors.map(i=>W(i,o));return zt(s,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");let n=Oi(this.elementShape,this.tensors,e),o=this.tensors.pop();return o.kept=!1,dr(o.shape,e,"TensorList shape mismatch: "),W(o,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(dr(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Zt(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);let t=new Kn([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);dr(this.tensors[e].shape,t,"TensorList shape mismatch: ");let o=Oi(this.elementShape,this.tensors,t);return W(this.tensors[e],o)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);dr(this.elementShape,t.shape,"TensorList shape mismatch: "),Zt(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);dr(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());let o=Oi(this.elementShape,this.tensors,n);return e.length===0?Ut([],[0].concat(o)):be(()=>{let s=e.map(i=>W(this.tensors[i],o));return zt(s,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);dr(this.elementShape,t,"TensorList shape mismatch: ");let n=Oi(this.elementShape,this.tensors,t);return this.size()===0?Ut([],[0].concat(n)):be(()=>{let o=this.tensors.map(s=>W(s,n));return qe(o,0)})}};function Qx(r,e,t){let n=r.dtype;if(r.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${r.shape}`);if(r.dtype!==t)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${t}`);let o=r.shape.slice(1);dr(o,e,"TensorList shape mismatch: ");let s=kr(r);return new Kn(s,e,n)}function Jx(r,e,t,n){return new Kn([],r,e,n)}function ey(r,e,t,n){if(e.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${r.shape[0]}`);let o=Math.max(...e);if(n!=null&&n!==-1&&o>=n)throw new Error(`Max index must be < array size (${o}  vs. ${n})`);let s=new Kn([],t,r.dtype,n),i=kr(r,0);return e.forEach((a,u)=>{s.setItem(a,i[u])}),s}function ty(r,e,t){let n=0,o=e.map(c=>(n+=c,n));if(n!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${r.shape}`);let s=r.shape.slice(1),i=Om(s,t),a=n===0?0:r.size/n,u=be(()=>{let c=[];r=W(r,[1,n,a]);for(let p=0;p<e.length;++p){let f=[0,p===0?0:o[p-1],0],d=[1,e[p],a];c[p]=W(ve(r,f,d),i)}return r.dispose(),c}),l=new Kn([],t,r.dtype,e.length);for(let c=0;c<u.length;c++)l.setItem(c,u[c]);return l}var ry=async(r,e,t)=>{switch(r.op){case"If":case"StatelessIf":{let n=v("thenBranch",r,e,t),o=v("elseBranch",r,e,t),s=v("cond",r,e,t),i=v("args",r,e,t);return(await s.data())[0]?t.functionMap[n].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[o].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{let n=v("body",r,e,t),o=v("cond",r,e,t),s=v("args",r,e,t),i=await t.functionMap[o].executeFunctionAsync(s,t.tensorArrayMap,t.tensorListMap),a=s.map(c=>c.id),u=await i[0].data();i.forEach(c=>{!c.kept&&a.indexOf(c.id)===-1&&c.dispose()});let l=s;for(;u[0];){let c=l;l=await t.functionMap[n].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);let p=l.map(f=>f.id);c.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&p.indexOf(f.id)===-1&&f.dispose()});let m=await t.functionMap[o].executeFunctionAsync(l,t.tensorArrayMap,t.tensorListMap);u=await m[0].data(),m.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&p.indexOf(f.id)===-1&&f.dispose()})}return l}case"LoopCond":{let n=v("pred",r,e,t);return[rn(n)]}case"Switch":{let n=v("pred",r,e,t),o=v("data",r,e,t);return o.kept||(o=rn(o)),(await n.data())[0]?[void 0,o]:[o,void 0]}case"Merge":{let n=r.inputNames.find(o=>Tt(o,e,t)!==void 0);if(n){let o=Tt(n,e,t);return[rn(o)]}return}case"Enter":{let n=v("frameName",r,e,t),o=v("tensor",r,e,t);return t.enterFrame(n),[rn(o)]}case"Exit":{let n=v("tensor",r,e,t);return t.exitFrame(),[rn(n)]}case"NextIteration":{let n=v("tensor",r,e,t);return t.nextIteration(),[rn(n)]}case"TensorArrayV3":{let n=v("size",r,e,t),o=v("dtype",r,e,t),s=v("elementShape",r,e,t),i=v("dynamicSize",r,e,t),a=v("clearAfterRead",r,e,t),u=v("identicalElementShapes",r,e,t),l=v("name",r,e,t),c=new Fm(l,o,n,s,u,i,a);return t.addTensorArray(c),[c.idTensor,ge(1)]}case"TensorArrayWriteV3":{let n=v("tensorArrayId",r,e,t),o=v("index",r,e,t),s=v("tensor",r,e,t),i=t.getTensorArray(n.id);return i.write(o,s),[i.idTensor]}case"TensorArrayReadV3":{let n=v("tensorArrayId",r,e,t),o=v("index",r,e,t);return[t.getTensorArray(n.id).read(o)]}case"TensorArrayGatherV3":{let n=v("tensorArrayId",r,e,t),o=v("indices",r,e,t),s=v("dtype",r,e,t);return[t.getTensorArray(n.id).gather(o,s)]}case"TensorArrayScatterV3":{let n=v("tensorArrayId",r,e,t),o=v("indices",r,e,t),s=v("tensor",r,e,t),i=t.getTensorArray(n.id);return i.scatter(o,s),[i.idTensor]}case"TensorArrayConcatV3":{let n=v("tensorArrayId",r,e,t),o=t.getTensorArray(n.id),s=v("dtype",r,e,t);return[o.concat(s)]}case"TensorArraySplitV3":{let n=v("tensorArrayId",r,e,t),o=v("tensor",r,e,t),s=v("lengths",r,e,t),i=t.getTensorArray(n.id);return i.split(s,o),[i.idTensor]}case"TensorArraySizeV3":{let n=v("tensorArrayId",r,e,t),o=t.getTensorArray(n.id);return[ge(o.size(),"int32")]}case"TensorArrayCloseV3":{let n=v("tensorArrayId",r,e,t),o=t.getTensorArray(n.id);return o.clearAndClose(),[o.idTensor]}case"TensorListSetItem":{let n=v("tensorListId",r,e,t),o=v("index",r,e,t),s=v("tensor",r,e,t),i=t.getTensorList(n.id);return i.setItem(o,s),[i.idTensor]}case"TensorListGetItem":{let n=v("tensorListId",r,e,t),o=v("index",r,e,t),s=v("elementShape",r,e,t),i=v("elementDType",r,e,t);return[t.getTensorList(n.id).getItem(o,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{let n=v("indices",r,e,t),o=v("tensor",r,e,t),s=v("elementShape",r,e,t),i=v("numElements",r,e,t),a=ey(o,n,s,i);return t.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let n=v("elementShape",r,e,t),o=v("elementDType",r,e,t),s;r.op==="TensorListReserve"?s="numElements":s="maxNumElements";let i=v(s,r,e,t),a=r.op==="TensorListReserve"?-1:i,u=Jx(n,o,i,a);return t.addTensorList(u),[u.idTensor]}case"TensorListGather":{let n=v("tensorListId",r,e,t),o=v("indices",r,e,t),s=v("elementShape",r,e,t),i=v("elementDType",r,e,t);return[t.getTensorList(n.id).gather(o,i,s)]}case"TensorListStack":{let n=v("tensorListId",r,e,t),o=v("elementShape",r,e,t),s=v("elementDType",r,e,t),i=v("numElements",r,e,t);return[t.getTensorList(n.id).stack(o,s,i)]}case"TensorListFromTensor":{let n=v("tensor",r,e,t),o=v("elementShape",r,e,t),s=v("elementDType",r,e,t),i=Qx(n,o,s);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let n=v("tensorListId",r,e,t),o=t.getTensorList(n.id),s=v("dtype",r,e,t),i=v("elementShape",r,e,t);return[o.concat(s,i)]}case"TensorListPushBack":{let n=v("tensorListId",r,e,t),o=v("tensor",r,e,t),s=t.getTensorList(n.id);return s.pushBack(o),[s.idTensor]}case"TensorListPopBack":{let n=v("tensorListId",r,e,t),o=v("elementShape",r,e,t),s=v("elementDType",r,e,t);return[t.getTensorList(n.id).popBack(o,s)]}case"TensorListSplit":{let n=v("tensor",r,e,t),o=v("elementShape",r,e,t),s=v("lengths",r,e,t),i=ty(n,s,o);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{let n=v("tensorListId",r,e,t),o=t.getTensorList(n.id);return[ge(o.size(),"int32")]}case"TensorListResize":{let n=v("tensorListId",r,e,t),o=v("size",r,e,t),i=t.getTensorList(n.id).resize(o);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};function ny(r,e,t){let[n,o]=v("fusedOps",r,e,t),s=n==="biasadd",i=!s,a=o==="prelu",u=n==="fusedbatchnorm",l=v("numArgs",r,e,t);if(s){if(a&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&s&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let c=v("strides",r,e,t),p=Qa(r,e,t),m=v("dataFormat",r,e,t).toUpperCase(),f=v("dilations",r,e,t),[d,y]=v("args",r,e,t);i&&(y=d,d=void 0);let x=v("leakyreluAlpha",r,e,t);return{stride:c,pad:p,dataFormat:m,dilations:f,biasArg:d,preluArg:y,activationFunc:o,leakyreluAlpha:x}}var oy=(r,e,t,n=De)=>{switch(r.op){case"Conv1D":{let o=v("stride",r,e,t),s=v("pad",r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilation",r,e,t);return[n.conv1d(v("x",r,e,t),v("filter",r,e,t),o,s,i,a)]}case"Conv2D":{let o=v("strides",r,e,t),s=Qa(r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilations",r,e,t);return[n.conv2d(v("x",r,e,t),v("filter",r,e,t),[o[1],o[2]],s,i,[a[1],a[2]])]}case"_FusedConv2D":{let{stride:o,pad:s,dataFormat:i,dilations:a,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=ny(r,e,t);return[n.fused.conv2d({x:v("x",r,e,t),filter:v("filter",r,e,t),strides:[o[1],o[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{let{stride:o,pad:s,dataFormat:i,dilations:a,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=ny(r,e,t);return[n.fused.depthwiseConv2d({x:v("x",r,e,t),filter:v("filter",r,e,t),strides:[o[1],o[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let o=v("outputShape",r,e,t),s=v("strides",r,e,t),i=Qa(r,e,t);return[n.conv2dTranspose(v("x",r,e,t),v("filter",r,e,t),o,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let o=v("strides",r,e,t),s=Qa(r,e,t),i=v("dilations",r,e,t),a=v("dataFormat",r,e,t).toUpperCase();return[n.depthwiseConv2d(v("input",r,e,t),v("filter",r,e,t),[o[1],o[2]],s,a,[i[1],i[2]])]}case"Conv3D":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilations",r,e,t);return[n.conv3d(v("x",r,e,t),v("filter",r,e,t),[o[1],o[2],o[3]],s,i,[a[1],a[2],a[3]])]}case"AvgPool":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[n.avgPool(v("x",r,e,t),[i[1],i[2]],[o[1],o[2]],s)]}case"MaxPool":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[n.maxPool(v("x",r,e,t),[i[1],i[2]],[o[1],o[2]],s)]}case"MaxPoolWithArgmax":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t),a=v("includeBatchInIndex",r,e,t),{result:u,indexes:l}=n.maxPoolWithArgmax(v("x",r,e,t),[i[1],i[2]],[o[1],o[2]],s,a);return[u,l]}case"AvgPool3D":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[n.avgPool3d(v("x",r,e,t),[i[1],i[2],i[3]],[o[1],o[2],o[3]],s)]}case"MaxPool3D":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[n.maxPool3d(v("x",r,e,t),[i[1],i[2],i[3]],[o[1],o[2],o[3]],s)]}case"Dilation2D":{let o=v("strides",r,e,t),s=v("pad",r,e,t),i=v("dilations",r,e,t),a=o[1],u=o[2],l=i[1],c=i[2];return[n.dilation2d(v("x",r,e,t),v("filter",r,e,t),[a,u],s,[l,c],"NHWC")]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var sy=(r,e,t,n=De)=>{switch(r.op){case"Fill":{let o=v("shape",r,e,t),s=v("dtype",r,e,t),i=v("value",r,e,t);return[n.fill(o,i,s)]}case"LinSpace":{let o=v("start",r,e,t),s=v("stop",r,e,t),i=v("num",r,e,t);return[n.linspace(o,s,i)]}case"Multinomial":{let o=v("logits",r,e,t),s=v("numSamples",r,e,t),i=v("seed",r,e,t);return[n.multinomial(o,s,i)]}case"OneHot":{let o=v("indices",r,e,t),s=v("depth",r,e,t),i=v("onValue",r,e,t),a=v("offValue",r,e,t),u=v("dtype",r,e,t);return[n.oneHot(o,s,i,a,u)]}case"Ones":return[n.ones(v("shape",r,e,t),v("dtype",r,e,t))];case"OnesLike":return[n.onesLike(v("x",r,e,t))];case"RandomStandardNormal":return[n.randomStandardNormal(v("shape",r,e,t),v("dtype",r,e,t),v("seed",r,e,t))];case"RandomUniform":return[n.randomUniform(v("shape",r,e,t),v("minval",r,e,t),v("maxval",r,e,t),v("dtype",r,e,t))];case"Range":{let o=v("start",r,e,t),s=v("stop",r,e,t),i=v("step",r,e,t);return[n.range(o,s,i,v("dtype",r,e,t))]}case"TruncatedNormal":{let o=v("shape",r,e,t),s=v("mean",r,e,t),i=v("stdDev",r,e,t),a=v("seed",r,e,t);return[n.truncatedNormal(o,s,i,v("dtype",r,e,t),a)]}case"Zeros":return[n.zeros(v("shape",r,e,t),v("dtype",r,e,t))];case"ZerosLike":return[n.zerosLike(v("x",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function y1(r,e,t){let n=v("boxes",r,e,t),o=v("scores",r,e,t),s=v("maxOutputSize",r,e,t),i=v("iouThreshold",r,e,t),a=v("scoreThreshold",r,e,t),u=v("softNmsSigma",r,e,t);return{boxes:n,scores:o,maxOutputSize:s,iouThreshold:i,scoreThreshold:a,softNmsSigma:u}}var iy=async(r,e,t,n,o=De)=>{switch(r.op){case"NonMaxSuppressionV5":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:l,softNmsSigma:c}=y1(r,e,t),p=await o.image.nonMaxSuppressionWithScoreAsync(s,i,a,u,l,c);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=y1(r,e,t),c=v("padToMaxOutputSize",r,e,t),p=await o.image.nonMaxSuppressionPaddedAsync(s,i,a,u,l,c);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:l}=y1(r,e,t);return[await o.image.nonMaxSuppressionAsync(s,i,a,u,l)]}case"Where":{let s=o.cast(v("condition",r,e,t),"bool"),i=[await o.whereAsync(s)];return s.dispose(),i}case"ListDiff":return o.setdiff1dAsync(v("x",r,e,t),v("y",r,e,t));default:throw TypeError(`Node type ${r.op} is not implemented`)}};var ay=(r,e,t,n=De)=>{switch(r.op){case"LowerBound":{let o=v("sortedSequence",r,e,t),s=v("values",r,e,t);return[n.lowerBound(o,s)]}case"TopKV2":{let o=v("x",r,e,t),s=v("k",r,e,t),i=v("sorted",r,e,t),a=n.topk(o,s,i);return[a.values,a.indices]}case"UpperBound":{let o=v("sortedSequence",r,e,t),s=v("values",r,e,t);return[n.upperBound(o,s)]}case"Unique":{let o=v("x",r,e,t),s=n.unique(o);return[s.values,s.indices]}case"UniqueV2":{let o=v("x",r,e,t),s=v("axis",r,e,t),i=n.unique(o,s);return[i.values,i.indices]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var uy=(r,e,t,n=De)=>{switch(r.op){case"Const":return e[r.name];case"PlaceholderWithDefault":let o=v("default",r,e,t);return[Tt(r.name,e,t)||o];case"Placeholder":return[Tt(r.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let c=v("x",r,e,t);return[rn(c)]}case"IdentityN":return v("x",r,e,t).map(c=>rn(c));case"Snapshot":let s=v("x",r,e,t);return[rn(s)];case"Shape":return[n.tensor1d(v("x",r,e,t).shape,"int32")];case"ShapeN":return v("x",r,e,t).map(c=>n.tensor1d(c.shape));case"Size":return[n.scalar(v("x",r,e,t).size,"int32")];case"Rank":return[n.scalar(v("x",r,e,t).rank,"int32")];case"NoOp":return[n.scalar(1)];case"Print":let i=v("x",r,e,t),a=v("data",r,e,t),u=v("message",r,e,t),l=v("summarize",r,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let c=0;c<a.length;c++)console.log(Array.prototype.slice.call(a[c].dataSync()).slice(0,l));return[i];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var Dm=class{constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=ge(0),this.tensorMap=new Map,Zt(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return ge(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return this.tensorMap.forEach(o=>o.dispose()),this.tensorMap.clear(),be(()=>{let o=kr(t),s=n.length,i=o.length;N.assert(s===i,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${i} elements.`);for(let a=0;a<s;a++){let u=n[a],l=o[a];Zt(l),this.tensorMap.set(u,l)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return be(()=>{let o=[];for(let s=0;s<n.length;s++){let i=n[s],a=this.findWithDefault(i,t);o.push(a)}return zt(o)})}findWithDefault(e,t){let n=this.tensorMap.get(e);return n!=null?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}};var ly=async(r,e,t,n)=>{switch(r.op){case"HashTable":case"HashTableV2":{let o=n.getHashTableHandleByName(r.name);if(o!=null)return[o];{let s=v("keyDType",r,e,t),i=v("valueDType",r,e,t),a=new Dm(s,i);return n.addHashTable(r.name,a),[a.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let o=v("tableHandle",r,e,t,n),s=v("keys",r,e,t),i=v("values",r,e,t);return[await n.getHashTableById(o.id).import(s,i)]}case"LookupTableFind":case"LookupTableFindV2":{let o=v("tableHandle",r,e,t,n),s=v("keys",r,e,t),i=v("defaultValue",r,e,t);return[await n.getHashTableById(o.id).find(s,i)]}case"LookupTableSize":case"LookupTableSizeV2":{let o=v("tableHandle",r,e,t,n);return[n.getHashTableById(o.id).tensorSize()]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var cy=(r,e,t,n=De)=>{switch(r.op){case"ResizeBilinear":{let o=v("images",r,e,t),s=v("size",r,e,t),i=v("alignCorners",r,e,t),a=v("halfPixelCenters",r,e,t);return[n.image.resizeBilinear(o,[s[0],s[1]],i,a)]}case"ResizeNearestNeighbor":{let o=v("images",r,e,t),s=v("size",r,e,t),i=v("alignCorners",r,e,t),a=v("halfPixelCenters",r,e,t);return[n.image.resizeNearestNeighbor(o,[s[0],s[1]],i,a)]}case"CropAndResize":{let o=v("image",r,e,t),s=v("boxes",r,e,t),i=v("boxInd",r,e,t),a=v("cropSize",r,e,t),u=v("method",r,e,t),l=v("extrapolationValue",r,e,t);return[n.image.cropAndResize(o,s,i,a,u,l)]}case"ImageProjectiveTransformV3":{let o=v("images",r,e,t),s=v("transforms",r,e,t),i=v("outputShape",r,e,t),a=v("fillValue",r,e,t),u=v("interpolation",r,e,t),l=v("fillMode",r,e,t);return[n.image.transform(o,s,u.toLowerCase(),l.toLowerCase(),a,i)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var py=(r,e,t,n=De)=>{switch(r.op){case"Equal":return[n.equal(v("a",r,e,t),v("b",r,e,t))];case"NotEqual":return[n.notEqual(v("a",r,e,t),v("b",r,e,t))];case"Greater":return[n.greater(v("a",r,e,t),v("b",r,e,t))];case"GreaterEqual":return[n.greaterEqual(v("a",r,e,t),v("b",r,e,t))];case"Less":return[n.less(v("a",r,e,t),v("b",r,e,t))];case"LessEqual":return[n.lessEqual(v("a",r,e,t),v("b",r,e,t))];case"LogicalAnd":return[n.logicalAnd(v("a",r,e,t),v("b",r,e,t))];case"LogicalNot":return[n.logicalNot(v("a",r,e,t))];case"LogicalOr":return[n.logicalOr(v("a",r,e,t),v("b",r,e,t))];case"Select":case"SelectV2":return[n.where(v("condition",r,e,t),v("a",r,e,t),v("b",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var my=(r,e,t,n=De)=>{switch(r.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[n.matMul(v("a",r,e,t),v("b",r,e,t),v("transposeA",r,e,t),v("transposeB",r,e,t))];case"Einsum":return[n.einsum(v("equation",r,e,t),...v("tensors",r,e,t))];case"Transpose":return[n.transpose(v("x",r,e,t),v("perm",r,e,t))];case"_FusedMatMul":let[o,s]=v("fusedOps",r,e,t),i=o==="biasadd",a=s==="prelu",u=v("numArgs",r,e,t),l=v("leakyreluAlpha",r,e,t);if(i){if(a&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[c,p]=v("args",r,e,t);return[n.fused.matMul({a:v("a",r,e,t),b:v("b",r,e,t),transposeA:v("transposeA",r,e,t),transposeB:v("transposeB",r,e,t),bias:c,activation:s,preluActivationWeights:p,leakyreluAlpha:l})];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var fy=(r,e,t,n=De)=>{switch(r.op){case"EuclideanNorm":return[n.euclideanNorm(v("x",r,e,t),v("axis",r,e,t),v("keepDims",r,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[n.batchNorm(v("x",r,e,t),v("mean",r,e,t),v("variance",r,e,t),v("offset",r,e,t),v("scale",r,e,t),v("epsilon",r,e,t))];case"FusedBatchNormV3":return[n.batchNorm(v("x",r,e,t),v("mean",r,e,t),v("variance",r,e,t),v("offset",r,e,t),v("scale",r,e,t),v("epsilon",r,e,t))];case"LRN":return[n.localResponseNormalization(v("x",r,e,t),v("radius",r,e,t),v("bias",r,e,t),v("alpha",r,e,t),v("beta",r,e,t))];case"Softmax":return[n.softmax(v("x",r,e,t))];case"LogSoftmax":return[n.logSoftmax(v("x",r,e,t))];case"SparseToDense":return[n.sparseToDense(v("sparseIndices",r,e,t),v("outputShape",r,e,t),v("sparseValues",r,e,t),v("defaultValue",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var hy=(r,e,t,n=De)=>{switch(r.op){case"RaggedGather":{let{outputNestedSplits:o,outputDenseValues:s}=n.raggedGather(v("paramsNestedSplits",r,e,t),v("paramsDenseValues",r,e,t),v("indices",r,e,t),v("outputRaggedRank",r,e,t));return o.concat(s)}case"RaggedRange":{let{rtNestedSplits:o,rtDenseValues:s}=n.raggedRange(v("starts",r,e,t),v("limits",r,e,t),v("splits",r,e,t));return[o,s]}case"RaggedTensorToTensor":return[n.raggedTensorToTensor(v("shape",r,e,t),v("values",r,e,t),v("defaultValue",r,e,t),v("rowPartitionTensors",r,e,t),v("rowPartitionTypes",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var dy=(r,e,t,n=De)=>{switch(r.op){case"Max":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.max(v("x",r,e,t),a,u)]}case"Mean":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.mean(v("x",r,e,t),a,u)]}case"Min":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.min(v("x",r,e,t),a,u)]}case"Sum":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.sum(v("x",r,e,t),a,u)]}case"All":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.all(v("x",r,e,t),a,u)]}case"Any":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.any(v("x",r,e,t),a,u)]}case"ArgMax":{let a=v("axis",r,e,t);return[n.argMax(v("x",r,e,t),a)]}case"ArgMin":{let a=v("axis",r,e,t);return[n.argMin(v("x",r,e,t),a)]}case"Prod":{let a=v("axis",r,e,t),u=v("keepDims",r,e,t);return[n.prod(v("x",r,e,t),a,u)]}case"Cumprod":{let a=v("axis",r,e,t),u=v("exclusive",r,e,t),l=v("reverse",r,e,t);return[n.cumprod(v("x",r,e,t),a,u,l)]}case"Cumsum":{let a=v("axis",r,e,t),u=v("exclusive",r,e,t),l=v("reverse",r,e,t);return[n.cumsum(v("x",r,e,t),a,u,l)]}case"Bincount":let o=v("x",r,e,t),s=v("weights",r,e,t),i=v("size",r,e,t);return[n.bincount(o,s,i)];case"DenseBincount":{let a=v("x",r,e,t),u=v("weights",r,e,t),l=v("size",r,e,t),c=v("binaryOutput",r,e,t);return[n.denseBincount(a,u,l,c)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var gy=(r,e,t,n=De)=>{switch(r.op){case"ConcatV2":case"Concat":{let o=v("n",r,e,t),s=v("axis",r,e,t),i=v("tensors",r,e,t);return i=i.slice(0,o),[n.concat(i,s)]}case"Gather":{let o=v("x",r,e,t),s=v("indices",r,e,t);return[n.gather(o,n.cast(s,"int32"),0)]}case"GatherV2":{let o=v("axis",r,e,t),s=v("batchDims",r,e,t),i=v("x",r,e,t),a=v("indices",r,e,t);return[n.gather(i,n.cast(a,"int32"),o,s)]}case"Reverse":{let o=v("dims",r,e,t),s=[];for(let a=0;a<o.length;a++)o[a]&&s.push(a);let i=v("x",r,e,t);return[n.reverse(i,s)]}case"ReverseV2":{let o=v("axis",r,e,t),s=v("x",r,e,t);return[n.reverse(s,o)]}case"Slice":{let o=v("begin",r,e,t),s=v("size",r,e,t);return[n.slice(v("x",r,e,t),o,s)]}case"StridedSlice":{let o=v("begin",r,e,t),s=v("end",r,e,t),i=v("strides",r,e,t),a=v("beginMask",r,e,t),u=v("endMask",r,e,t),l=v("ellipsisMask",r,e,t),c=v("newAxisMask",r,e,t),p=v("shrinkAxisMask",r,e,t),m=v("x",r,e,t);return[n.stridedSlice(m,o,s,i,a,u,l,c,p)]}case"Pack":return be(()=>{let o=v("axis",r,e,t),s=v("tensors",r,e,t),i=s[0].shape,a=n.squeeze(s[0]).shape,u=s.map(l=>{let c=N.arraysEqual(l.shape,i);if(!c&&!N.arraysEqual(n.squeeze(l).shape,a))throw new Error("the input tensors shape does not match");return c?l:n.reshape(l,i)});return[n.stack(u,o)]});case"Unpack":{let o=v("axis",r,e,t),s=v("tensor",r,e,t);return n.unstack(s,o)}case"Tile":{let o=v("reps",r,e,t);return[n.tile(v("x",r,e,t),o)]}case"Split":case"SplitV":{let o=v("axis",r,e,t),s=v("numOrSizeSplits",r,e,t),i=v("x",r,e,t);return n.split(i,s,o)}case"ScatterNd":{let o=v("indices",r,e,t),s=v("values",r,e,t),i=v("shape",r,e,t);return[n.scatterND(o,s,i)]}case"GatherNd":{let o=v("x",r,e,t),s=v("indices",r,e,t);return[n.gatherND(o,s)]}case"SparseToDense":{let o=v("sparseIndices",r,e,t),s=v("outputShape",r,e,t),i=v("sparseValues",r,e,t),a=v("defaultValue",r,e,t);return[n.sparseToDense(o,i,s,i.dtype===a.dtype?a:n.cast(a,i.dtype))]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var xy=(r,e,t,n=De)=>{switch(r.op){case"SparseFillEmptyRows":{let{outputIndices:o,outputValues:s,emptyRowIndicator:i,reverseIndexMap:a}=n.sparse.sparseFillEmptyRows(v("indices",r,e,t),v("values",r,e,t),v("denseShape",r,e,t),v("defaultValue",r,e,t));return[o,s,i,a]}case"SparseReshape":{let{outputIndices:o,outputShape:s}=n.sparse.sparseReshape(v("inputIndices",r,e,t),v("inputShape",r,e,t),v("newShape",r,e,t));return[o,s]}case"SparseSegmentMean":return[n.sparse.sparseSegmentMean(v("data",r,e,t),v("indices",r,e,t),v("segmentIds",r,e,t))];case"SparseSegmentSum":return[n.sparse.sparseSegmentSum(v("data",r,e,t),v("indices",r,e,t),v("segmentIds",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var yy=(r,e,t,n=De)=>{switch(r.op){case"FFT":return[n.fft(v("x",r,e,t))];case"IFFT":return[n.ifft(v("x",r,e,t))];case"RFFT":return[n.rfft(v("x",r,e,t))];case"IRFFT":return[n.irfft(v("x",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var by=(r,e,t,n=De)=>{switch(r.op){case"StringNGrams":{let{nGrams:o,nGramsSplits:s}=n.string.stringNGrams(v("data",r,e,t),v("dataSplits",r,e,t),v("separator",r,e,t),v("nGramWidths",r,e,t),v("leftPad",r,e,t),v("rightPad",r,e,t),v("padWidth",r,e,t),v("preserveShortSequences",r,e,t));return[o,s]}case"StringSplit":{let{indices:o,values:s,shape:i}=n.string.stringSplit(v("input",r,e,t),v("delimiter",r,e,t),v("skipEmpty",r,e,t));return[o,s,i]}case"StringToHashBucketFast":return[n.string.stringToHashBucketFast(v("input",r,e,t),v("numBuckets",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var vy=(r,e,t,n=De)=>{switch(r.op){case"Cast":return[n.cast(v("x",r,e,t),v("dtype",r,e,t))];case"ExpandDims":{let o=v("axis",r,e,t);return[n.expandDims(v("x",r,e,t),o)]}case"Squeeze":{let o=v("axis",r,e,t);return[n.squeeze(v("x",r,e,t),o)]}case"Reshape":return[n.reshape(v("x",r,e,t),v("shape",r,e,t))];case"MirrorPad":return[n.mirrorPad(v("x",r,e,t),v("padding",r,e,t),v("mode",r,e,t))];case"PadV2":case"Pad":return[n.pad(v("x",r,e,t),v("padding",r,e,t),v("constantValue",r,e,t))];case"SpaceToBatchND":{let o=v("blockShape",r,e,t),s=v("paddings",r,e,t);return[n.spaceToBatchND(v("x",r,e,t),o,s)]}case"BatchToSpaceND":{let o=v("blockShape",r,e,t),s=v("crops",r,e,t);return[n.batchToSpaceND(v("x",r,e,t),o,s)]}case"DepthToSpace":{let o=v("blockSize",r,e,t),s=v("dataFormat",r,e,t).toUpperCase();return[n.depthToSpace(v("x",r,e,t),o,s)]}case"BroadcastTo":return[n.broadcastTo(v("x",r,e,t),v("shape",r,e,t))];case"BroadcastArgs":return[n.broadcastArgs(v("s0",r,e,t),v("s1",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function b1(r,e,t,n,o=be){let s=((i,a,u)=>{switch(i.category){case"arithmetic":return o(()=>Xx(i,a,u));case"basic_math":return o(()=>Yx(i,a,u));case"control":return ry(i,a,u);case"convolution":return o(()=>oy(i,a,u));case"creation":return o(()=>sy(i,a,u));case"dynamic":return iy(i,a,u);case"evaluation":return o(()=>ay(i,a,u));case"image":return o(()=>cy(i,a,u));case"graph":return o(()=>uy(i,a,u));case"logical":return o(()=>py(i,a,u));case"matrices":return o(()=>my(i,a,u));case"normalization":return o(()=>fy(i,a,u));case"ragged":return o(()=>hy(i,a,u));case"reduction":return o(()=>dy(i,a,u));case"slice_join":return o(()=>gy(i,a,u));case"sparse":return o(()=>xy(i,a,u));case"spectral":return o(()=>yy(i,a,u));case"string":return o(()=>by(i,a,u));case"transformation":return o(()=>vy(i,a,u));case"hash_table":return ly(i,a,u,n);case"custom":let l=vm(i.op);if(l&&l.customExecutor)return l.customExecutor(new Rm(i,a,u));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(r,e,t);return N.isPromise(s)?s.then(i=>[].concat(i)):[].concat(s)}var eu=class{constructor(e={},t={},n={},o={}){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=o,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}};function v1(r,e,t,n){let o=new Set,s=[],i=null,a=null,u=new Set,l=Object.keys(r).map(m=>Wt(m)[0]),c=[];n!=null&&(c=n.map(m=>Wt(m.name)[0]));let p=[...e];for(;p.length>0;){let m=p.pop();if((w1(m)||H$(m)||K$(m))&&i==null&&(i=m,a=i.children.map(f=>f.name).filter(f=>o.has(f))),o.add(m.name),t[m.name]==null&&l.indexOf(m.name)===-1&&c.indexOf(m.name)===-1){if(m.inputs.length===0){s.push(m.name);continue}m.inputs.forEach(f=>{u.has(f.name)||(u.add(f.name),p.push(f))})}}return{inputs:r,outputs:e,usedNodes:o,missingInputs:s,dynamicNode:i,syncInputs:a}}function wy(r,e,t){let{usedNodes:n,inputs:o}=t,s=[],i=Object.keys(o).map(c=>Wt(c)[0]).map(c=>r.nodes[c]),a=r.initNodes;i.forEach(c=>{n.has(c.name)&&s.push(c)}),r.weights.forEach(c=>{n.has(c.name)&&s.push(c)}),a!=null&&a.forEach(c=>{n.has(c.name)&&s.push(c)});let u=new Set,l=[];for(;s.length>0;){let c=s.pop();u.add(c.name),e[c.name]||l.push(c),c.children.forEach(p=>{!u.has(p.name)&&n.has(p.name)&&p.inputs.every(m=>u.has(m.name))&&s.push(p)})}return l}var G$=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],z$=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],W$=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function w1(r){return G$.indexOf(r.op)>=0}function H$(r){return z$.indexOf(r.op)>=0}function K$(r){return W$.indexOf(r.op)>=0}var xs=class{constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(n=>{this._functionExecutorMap[n]=new xs(e.functions[n],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(n=>e[n].map(o=>o.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}getCompilationKey(e,t){let n=e.map(s=>s.name).sort(),o=t.map(s=>s.name).sort();return n.join(this.SEPERATOR)+"--"+o.join(this.SEPERATOR)}compile(e,t){let n=v1(e,t,this.weightMap,this._initNodes),{missingInputs:o,dynamicNode:s,syncInputs:i}=n;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(o.length>0){let a=t.map(l=>l.name),u=Object.keys(e);throw new Error(`Cannot compute the outputs [${a}] from the provided inputs [${u}]. Missing the following inputs: [${o}]`)}return wy(this.graph,this.weightMap,n)}cloneAndKeepTensor(e){if(e==null)return null;let t=e.clone();return Zt(t),t}cloneTensorList(e){return e?e.map(n=>this.cloneAndKeepTensor(n)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,n])=>[t,this.cloneTensorList(n)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);let n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let o=n.map(p=>this.graph.nodes[Wt(p)[0]]),s=t.map(p=>Wt(p)[0]),i=s.map(p=>this.graph.nodes[p]);i.length===0&&(i=this._outputs);let a=this.getCompilationKey(o,i),u=this.compiledMap.get(a);u==null&&(u=this.compile(e,i),this.compiledMap.set(a,u));try{this.keepIntermediateTensors=U().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(p){this.keepIntermediateTensors=!1,console.warn(p.message)}let l={},c={};return be(()=>{let p=new eu(this.weightMap,l,c,this.functionExecutorMap),m=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(y=>{let[x,b]=Wt(y),$=[];$[b]=e[y],m[x]=$,this.keepIntermediateTensors&&(this.clonedTensorsMap[x]=this.cloneTensorList($))});let f=this.getFrozenTensorIds(m),d={};for(let y=0;y<u.length;y++){let x=u[y];if(!m[x.name]){let b=b1(x,m,p,this._resourceManager);if(N.isPromise(b))throw new Error(`The execution of the op '${x.op}' returned a promise. Please use model.executeAsync() instead.`);m[x.name]=b,this.keepIntermediateTensors&&(this.clonedTensorsMap[x.name]=this.cloneTensorList(b)),this.checkTensorForDisposal(x.name,x,m,p,f,s,d)}}return this.parent==null&&p.dispose(f),t.map(y=>Tt(y,m,p))})}getFrozenTensorIds(e){let t=[].concat.apply([],Object.keys(e).map(n=>e[n]).map(n=>n.map(o=>o.id)));return new Set(t)}checkTensorForDisposal(e,t,n,o,s,i,a){t.category==="control"||i.indexOf(e)!==-1||(n[e].forEach(u=>{u!=null&&(a[u.id]=(a[u.id]||0)+t.children.length)}),t.inputs.forEach(u=>{if(u.category!=="control"){let l=Hx(u.name,n,o);l!=null&&l.forEach(c=>{if(c&&!c.kept&&!s.has(c.id)){let p=a[c.id];p===1?(c.dispose(),delete a[c.id]):p!=null&&a[c.id]--}})}}))}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(let t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,n=!1,o={},s={}){this.disposeIntermediateTensors(),n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=U().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(m){this.keepIntermediateTensors=!1,console.warn(m.message)}let i=new eu(this.weightMap,o,s,this.functionExecutorMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let a=await this.executeWithControlFlow(e,i,t,n),u=t.map(m=>Tt(m,a,i)),l=u.map(m=>m.id),c=Object.keys(e).map(m=>e[m].id),p=new Set([...l,...c,...this.weightIds]);return Object.values(a).forEach(m=>{m.forEach(f=>{f&&!f.isDisposed&&!p.has(f.id)&&f.dispose()})}),this.parent==null&&i.dispose(p),u}async executeFunctionAsync(e,t,n){let o=e.reduce((s,i,a)=>(s[this.inputs[a].name]=i,s),{});return this._executeAsync(o,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,o){let s=Object.keys(e),i=s.map(A=>this.graph.nodes[Wt(A)[0]]),a=n.map(A=>Wt(A)[0]),u=a.map(A=>this.graph.nodes[A]);u.length===0&&(u=this._outputs);let{usedNodes:l,missingInputs:c,dynamicNode:p,syncInputs:m}=v1(e,u,this.weightMap,this._initNodes),f=[...i,...this.graph.weights,...this._initNodes||[]].map(A=>({node:A,contexts:t.currentContext})),d=Object.assign({},this.weightMap);Object.keys(e).forEach(A=>{let[O,M]=Wt(A),G=[];G[M]=e[A],d[O]=G});let y={},x=this.getFrozenTensorIds(d),b={};for(;f.length>0;){let A=this.processStack(i,f,t,d,b,x,a,y,l);await Promise.all(A)}p==null&&!o&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let $=u.filter(A=>!w1(A)&&!Tt(A.name,d,t)).map(A=>A.name);if($.length>0){let A="";throw p!=null&&(A=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${m}]`),new Error(`Cannot compute the outputs [${$}] from the provided inputs [${s}]. Consider providing the following inputs: [${c}]. ${A}`)}return d}processStack(e,t,n,o,s,i,a,u,l){let c=[];for(;t.length>0;){let p=t.pop();n.currentContext=p.contexts;let m="";if(p.node.op==="Enter"&&v("isConstant",p.node,o,n)&&([m]=tn(p.node.name,n)),o[p.node.name]==null){let f=b1(p.node,o,n,this._resourceManager);m||([m]=tn(p.node.name,n));let d=n.currentContext;N.isPromise(f)?c.push(f.then(y=>(o[m]=y,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(y)),n.currentContext=d,this.checkTensorForDisposal(m,p.node,o,n,i,a,u),this.processChildNodes(p.node,t,n,o,s,l),y))):(o[m]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(f)),this.checkTensorForDisposal(m,p.node,o,n,i,a,u),this.processChildNodes(p.node,t,n,o,s,l))}else this.processChildNodes(p.node,t,n,o,s,l)}return c}processChildNodes(e,t,n,o,s,i){e.children.forEach(a=>{let[u]=tn(a.name,n);s[u]||!i.has(a.name)||(a.op==="Merge"?a.inputNames.some(l=>!!Tt(l,o,n))&&(s[u]=!0,t.push({contexts:n.currentContext,node:a})):a.inputNames.every(l=>!!Tt(l,o,n))&&(s[u]=!0,t.push({contexts:n.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let n=e[t],[o]=Wt(t),s=this.graph.nodes[o];if(s.attrParams.shape&&s.attrParams.shape.value){let i=s.attrParams.shape.value,a=i.length===n.shape.length&&n.shape.every((u,l)=>i[l]===-1||i[l]===u);N.assert(a,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${i}], but was [${n.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&N.assert(n.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(e){var t,n;let o={};for(let s in e){let i=(n=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||n===void 0?void 0:n[s];i!=null?o[i.name]=e[s]:o[s]=e[s]}return o}checkInputs(e){let t=Object.keys(e).filter(n=>{let[o]=Wt(n);return this.graph.nodes[o]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var n,o;let s=(o=(n=this._signature)===null||n===void 0?void 0:n.outputs)===null||o===void 0?void 0:o[t];return s!=null?s.name:t},{})}checkOutputs(e){e.forEach(t=>{let[n]=Wt(t);if(!this.graph.nodes[n])throw new Error(`The output '${t}' is not found in the graph`)})}};var Pm=class{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}};var j$="?tfjs-format=file",q$="model.json",Lm=class{constructor(e,t={},n=Ya){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=n,t==null&&(this.loadOptions={}),this.resourceManager=new Pm}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){let e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{let t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=this.handler.load();return N.isPromise(e)?e.then(t=>this.loadSync(t)):this.loadSync(e)}loadSync(e){this.artifacts=e;let t=this.artifacts.modelTopology,n=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let s=this.artifacts.userDefinedMetadata;s.signature!=null&&(n=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}this.signature=n,this.version=`${t.versions.producer}.${t.versions.minConsumer}`;let o=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new xs(Ja.Instance.transformGraph(t,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(o),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){let s=Ja.Instance.transformGraph(e.modelInitializer);this.initializer=new xs(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if(typeof e=="string"){let n=this.io.getSaveHandlers(e);if(n.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(n.length>1)throw new Error(`Found more than one (${n.length}) save handlers for URL '${e}'`);e=n[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){let t=e instanceof Pe?[e]:e,n={};return t.forEach((o,s)=>n[this.structuredOutputKeys[s]]=o),n}return e}predict(e,t){let n=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(n)}async predictAsync(e,t){let n=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(n)}normalizeInputs(e){var t;if(!(e instanceof Pe)&&!Array.isArray(e)){let s=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(s!=null)for(let i in s){let a=s[i];a.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[a.resourceId])}return e}e=Array.isArray(e)?e:[e];let n=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+n!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${e.length} input tensors provided.`);let o=0;return this.inputNodes.reduce((s,i)=>{var a,u,l;let c=(l=(u=(a=this.signature)===null||a===void 0?void 0:a.inputs)===null||u===void 0?void 0:u[i])===null||l===void 0?void 0:l.resourceId;return c!=null?s[i]=this.resourceIdToCapturedInput[c]:s[i]=e[o++],s},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){let t=this.initializerSignature.outputs,n=Object.keys(t);for(let o=0;o<n.length;o++){let s=n[o],i=t[s];this.resourceIdToCapturedInput[i.resourceId]=e[o]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,n)=>(t[n]=[e[n]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Ge(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}};async function tu(r,e={},t=Ya){if(r==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof r=="string"&&(r=X$(r));let n=new Lm(r,e,t);return await n.load(),n}function X$(r){return r.endsWith("/")||(r=r+"/"),`${r}${q$}${j$}`}var nn=function(){return nn=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},nn.apply(this,arguments)};function jn(r,e,t,n){return new(t||(t=Promise))(function(o,s){function i(l){try{u(n.next(l))}catch(c){s(c)}}function a(l){try{u(n.throw(l))}catch(c){s(c)}}function u(l){var c;l.done?o(l.value):(c=l.value,c instanceof t?c:new t(function(p){p(c)})).then(i,a)}u((n=n.apply(r,e||[])).next())})}function qn(r,e){var t,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!((o=o.length>0&&o[o.length-1])||c[0]!==6&&c[0]!==2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(r,i)}catch(p){c=[6,p],n=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}function No(r){var e=r.map(function(t){return t[0]});return e.push(r[r.length-1][1]),e}var Dy={lips:No([[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]]),leftEye:No([[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]]),leftEyebrow:No([[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]]),leftIris:No([[474,475],[475,476],[476,477],[477,474]]),rightEye:No([[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]]),rightEyebrow:No([[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]]),rightIris:No([[469,470],[470,471],[471,472],[472,469]]),faceOval:No([[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]])},Z$=[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]],Q$=Object.entries(Dy).map(function(r){var e=r[0];return r[1].map(function(t){return[t,e]})}).flat(),Py=new Map(Q$);function _1(r){for(var e={locationData:{relativeKeypoints:[]}},t=Number.MAX_SAFE_INTEGER,n=Number.MIN_SAFE_INTEGER,o=Number.MAX_SAFE_INTEGER,s=Number.MIN_SAFE_INTEGER,i=0;i<r.length;++i){var a=r[i];t=Math.min(t,a.x),n=Math.max(n,a.x),o=Math.min(o,a.y),s=Math.max(s,a.y),e.locationData.relativeKeypoints.push({x:a.x,y:a.y})}return e.locationData.relativeBoundingBox={xMin:t,yMin:o,xMax:n,yMax:s,width:n-t,height:s-o},e}var T1={runtime:"mediapipe",maxFaces:1,refineLandmarks:!1},J$=function(){function r(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceMeshSolution=new Fy.FaceMesh({locateFile:function(n,o){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+n:o+"/"+n}}),this.faceMeshSolution.setOptions({refineLandmarks:e.refineLandmarks,selfieMode:this.selfieMode,maxNumFaces:e.maxFaces}),this.faceMeshSolution.onResults(function(n){if(t.height=n.image.height,t.width=n.image.width,t.faces=[],n.multiFaceLandmarks!==null)for(var o=n.multiFaceLandmarks,s=0;s<o.length;s++){var i=t.translateOutput(o[s]);t.faces.push({keypoints:i,box:_1(i).locationData.relativeBoundingBox})}})}return r.prototype.translateOutput=function(e){var t=this;return e.map(function(n,o){var s={x:n.x*t.width,y:n.y*t.height,z:n.z*t.width},i=Py.get(o);return i!=null&&(s.name=i),s})},r.prototype.estimateFaces=function(e,t){return jn(this,void 0,void 0,function(){var n,o;return qn(this,function(s){switch(s.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceMeshSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Pe?(o=ImageData.bind,[4,Eo.toPixels(e)]):[3,2];case 1:return n=new(o.apply(ImageData,[void 0,s.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:n=e,s.label=3;case 3:return e=n,[4,this.faceMeshSolution.send({image:e})];case 4:return s.sent(),[2,this.faces]}})})},r.prototype.dispose=function(){this.faceMeshSolution.close()},r.prototype.reset=function(){this.faceMeshSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},r.prototype.initialize=function(){return this.faceMeshSolution.initialize()},r}();function ek(r){return jn(this,void 0,void 0,function(){var e,t;return qn(this,function(n){switch(n.label){case 0:return e=function(o){if(o==null)return nn({},T1);var s=nn({},o);return s.runtime="mediapipe",s.maxFaces==null&&(s.maxFaces=T1.maxFaces),s.refineLandmarks==null&&(s.refineLandmarks=T1.refineLandmarks),s}(r),[4,(t=new J$(e)).initialize()];case 1:return n.sent(),[2,t]}})})}var S1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tk={};(function(){var r;function e(h){var S=0;return function(){return S<h.length?{done:!1,value:h[S++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,S,I){return h==Array.prototype||h==Object.prototype||(h[S]=I.value),h},n=function(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof S1=="object"&&S1];for(var S=0;S<h.length;++S){var I=h[S];if(I&&I.Math==Math)return I}throw Error("Cannot find global object")}(this);function o(h,S){if(S)e:{var I=n;h=h.split(".");for(var R=0;R<h.length-1;R++){var D=h[R];if(!(D in I))break e;I=I[D]}(S=S(R=I[h=h[h.length-1]]))!=R&&S!=null&&t(I,h,{configurable:!0,writable:!0,value:S})}}function s(h){return(h={next:h})[Symbol.iterator]=function(){return this},h}function i(h){var S=typeof Symbol<"u"&&Symbol.iterator&&h[Symbol.iterator];return S?S.call(h):{next:e(h)}}function a(h){if(!(h instanceof Array)){h=i(h);for(var S,I=[];!(S=h.next()).done;)I.push(S.value);h=I}return h}o("Symbol",function(h){function S(D,F){this.g=D,t(this,"description",{configurable:!0,writable:!0,value:F})}if(h)return h;S.prototype.toString=function(){return this.g};var I="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return function D(F){if(this instanceof D)throw new TypeError("Symbol is not a constructor");return new S(I+(F||"")+"_"+R++,F)}}),o("Symbol.iterator",function(h){if(h)return h;h=Symbol("Symbol.iterator");for(var S="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),I=0;I<S.length;I++){var R=n[S[I]];typeof R=="function"&&typeof R.prototype[h]!="function"&&t(R.prototype,h,{configurable:!0,writable:!0,value:function(){return s(e(this))}})}return h});var u,l=typeof Object.create=="function"?Object.create:function(h){function S(){}return S.prototype=h,new S};if(typeof Object.setPrototypeOf=="function")u=Object.setPrototypeOf;else{var c;e:{var p={};try{p.__proto__={a:!0},c=p.a;break e}catch(h){}c=!1}u=c?function(h,S){if(h.__proto__=S,h.__proto__!==S)throw new TypeError(h+" is not extensible");return h}:null}var m=u;function f(h,S){if(h.prototype=l(S.prototype),h.prototype.constructor=h,m)m(h,S);else for(var I in S)if(I!="prototype")if(Object.defineProperties){var R=Object.getOwnPropertyDescriptor(S,I);R&&Object.defineProperty(h,I,R)}else h[I]=S[I];h.na=S.prototype}function d(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function y(h){if(h.l)throw new TypeError("Generator is already running");h.l=!0}function x(h,S){h.j={da:S,ea:!0},h.g=h.o||h.u}function b(h,S,I){return h.g=I,{value:S}}function $(h){this.g=new d,this.h=h}function A(h,S,I,R){try{var D=S.call(h.g.i,I);if(!(D instanceof Object))throw new TypeError("Iterator result "+D+" is not an object");if(!D.done)return h.g.l=!1,D;var F=D.value}catch(L){return h.g.i=null,x(h.g,L),O(h)}return h.g.i=null,R.call(h.g,F),O(h)}function O(h){for(;h.g.g;)try{var S=h.h(h.g);if(S)return h.g.l=!1,{value:S.value,done:!1}}catch(I){h.g.h=void 0,x(h.g,I)}if(h.g.l=!1,h.g.j){if(S=h.g.j,h.g.j=null,S.ea)throw S.da;return{value:S.return,done:!0}}return{value:void 0,done:!0}}function M(h){this.next=function(S){return y(h.g),h.g.i?S=A(h,h.g.i.next,S,h.g.s):(h.g.s(S),S=O(h)),S},this.throw=function(S){return y(h.g),h.g.i?S=A(h,h.g.i.throw,S,h.g.s):(x(h.g,S),S=O(h)),S},this.return=function(S){return function(I,R){y(I.g);var D=I.g.i;return D?A(I,"return"in D?D.return:function(F){return{value:F,done:!0}},R,I.g.return):(I.g.return(R),O(I))}(h,S)},this[Symbol.iterator]=function(){return this}}function G(h){return function(S){function I(D){return S.next(D)}function R(D){return S.throw(D)}return new Promise(function(D,F){(function L(V){V.done?D(V.value):Promise.resolve(V.value).then(I,R).then(L,F)})(S.next())})}(new M(new $(h)))}d.prototype.s=function(h){this.h=h},d.prototype.return=function(h){this.j={return:h},this.g=this.u},o("Promise",function(h){function S(L){this.h=0,this.i=void 0,this.g=[],this.s=!1;var V=this.j();try{L(V.resolve,V.reject)}catch(j){V.reject(j)}}function I(){this.g=null}function R(L){return L instanceof S?L:new S(function(V){V(L)})}if(h)return h;I.prototype.h=function(L){if(this.g==null){this.g=[];var V=this;this.i(function(){V.l()})}this.g.push(L)};var D=n.setTimeout;I.prototype.i=function(L){D(L,0)},I.prototype.l=function(){for(;this.g&&this.g.length;){var L=this.g;this.g=[];for(var V=0;V<L.length;++V){var j=L[V];L[V]=null;try{j()}catch(Q){this.j(Q)}}}this.g=null},I.prototype.j=function(L){this.i(function(){throw L})},S.prototype.j=function(){function L(Q){return function(te){j||(j=!0,Q.call(V,te))}}var V=this,j=!1;return{resolve:L(this.D),reject:L(this.l)}},S.prototype.D=function(L){if(L===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(L instanceof S)this.H(L);else{e:switch(typeof L){case"object":var V=L!=null;break e;case"function":V=!0;break e;default:V=!1}V?this.A(L):this.o(L)}},S.prototype.A=function(L){var V=void 0;try{V=L.then}catch(j){return void this.l(j)}typeof V=="function"?this.I(V,L):this.o(L)},S.prototype.l=function(L){this.u(2,L)},S.prototype.o=function(L){this.u(1,L)},S.prototype.u=function(L,V){if(this.h!=0)throw Error("Cannot settle("+L+", "+V+"): Promise already settled in state"+this.h);this.h=L,this.i=V,this.h===2&&this.G(),this.B()},S.prototype.G=function(){var L=this;D(function(){if(L.C()){var V=n.console;V!==void 0&&V.error(L.i)}},1)},S.prototype.C=function(){if(this.s)return!1;var L=n.CustomEvent,V=n.Event,j=n.dispatchEvent;return j===void 0||(typeof L=="function"?L=new L("unhandledrejection",{cancelable:!0}):typeof V=="function"?L=new V("unhandledrejection",{cancelable:!0}):(L=n.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection",!1,!0,L),L.promise=this,L.reason=this.i,j(L))},S.prototype.B=function(){if(this.g!=null){for(var L=0;L<this.g.length;++L)F.h(this.g[L]);this.g=null}};var F=new I;return S.prototype.H=function(L){var V=this.j();L.M(V.resolve,V.reject)},S.prototype.I=function(L,V){var j=this.j();try{L.call(V,j.resolve,j.reject)}catch(Q){j.reject(Q)}},S.prototype.then=function(L,V){function j(se,ce){return typeof se=="function"?function(Ce){try{Q(se(Ce))}catch(ke){te(ke)}}:ce}var Q,te,oe=new S(function(se,ce){Q=se,te=ce});return this.M(j(L,Q),j(V,te)),oe},S.prototype.catch=function(L){return this.then(void 0,L)},S.prototype.M=function(L,V){function j(){switch(Q.h){case 1:L(Q.i);break;case 2:V(Q.i);break;default:throw Error("Unexpected state: "+Q.h)}}var Q=this;this.g==null?F.h(j):this.g.push(j),this.s=!0},S.resolve=R,S.reject=function(L){return new S(function(V,j){j(L)})},S.race=function(L){return new S(function(V,j){for(var Q=i(L),te=Q.next();!te.done;te=Q.next())R(te.value).M(V,j)})},S.all=function(L){var V=i(L),j=V.next();return j.done?R([]):new S(function(Q,te){function oe(Ce){return function(ke){se[Ce]=ke,--ce==0&&Q(se)}}var se=[],ce=0;do se.push(void 0),ce++,R(j.value).M(oe(se.length-1),te),j=V.next();while(!j.done)})},S});var H=typeof Object.assign=="function"?Object.assign:function(h,S){for(var I=1;I<arguments.length;I++){var R=arguments[I];if(R)for(var D in R)Object.prototype.hasOwnProperty.call(R,D)&&(h[D]=R[D])}return h};o("Object.assign",function(h){return h||H}),o("Object.is",function(h){return h||function(S,I){return S===I?S!==0||1/S==1/I:S!=S&&I!=I}}),o("Array.prototype.includes",function(h){return h||function(S,I){var R=this;R instanceof String&&(R=String(R));var D=R.length;for(0>(I=I||0)&&(I=Math.max(I+D,0));I<D;I++){var F=R[I];if(F===S||Object.is(F,S))return!0}return!1}}),o("String.prototype.includes",function(h){return h||function(S,I){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(S instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(S,I||0)!==-1}}),o("Array.prototype.keys",function(h){return h||function(){return function(S,I){S instanceof String&&(S+="");var R=0,D=!1,F={next:function(){if(!D&&R<S.length){var L=R++;return{value:I(L,S[L]),done:!1}}return D=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}(this,function(S){return S})}});var X=this||self;function q(h,S){h=h.split(".");var I,R=X;for((h[0]in R)||R.execScript===void 0||R.execScript("var "+h[0]);h.length&&(I=h.shift());)h.length||S===void 0?R=R[I]&&R[I]!==Object.prototype[I]?R[I]:R[I]={}:R[I]=S}function Y(){throw Error("Invalid UTF8")}function ie(h,S){return S=String.fromCharCode.apply(null,S),h==null?S:h+S}var fe,he,$e=typeof TextDecoder<"u",Oe=typeof TextEncoder<"u",ct={},Xe=null;function Ye(h){var S;S===void 0&&(S=0),ir(),S=ct[S];for(var I=Array(Math.floor(h.length/3)),R=S[64]||"",D=0,F=0;D<h.length-2;D+=3){var L=h[D],V=h[D+1],j=h[D+2],Q=S[L>>2];L=S[(3&L)<<4|V>>4],V=S[(15&V)<<2|j>>6],j=S[63&j],I[F++]=Q+L+V+j}switch(Q=0,j=R,h.length-D){case 2:j=S[(15&(Q=h[D+1]))<<2]||R;case 1:h=h[D],I[F]=S[h>>2]+S[(3&h)<<4|Q>>4]+j+R}return I.join("")}function bt(h){var S=h.length,I=3*S/4;I%3?I=Math.floor(I):"=.".indexOf(h[S-1])!=-1&&(I="=.".indexOf(h[S-2])!=-1?I-2:I-1);var R=new Uint8Array(I),D=0;return function(F,L){function V(ce){for(;j<F.length;){var Ce=F.charAt(j++),ke=Xe[Ce];if(ke!=null)return ke;if(!/^[\s\xa0]*$/.test(Ce))throw Error("Unknown base64 encoding at char: "+Ce)}return ce}ir();for(var j=0;;){var Q=V(-1),te=V(0),oe=V(64),se=V(64);if(se===64&&Q===-1)break;L(Q<<2|te>>4),oe!=64&&(L(te<<4&240|oe>>2),se!=64&&L(oe<<6&192|se))}}(h,function(F){R[D++]=F}),D!==I?R.subarray(0,D):R}function ir(){if(!Xe){Xe={};for(var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),S=["+/=","+/","-_=","-_.","-_"],I=0;5>I;I++){var R=h.concat(S[I].split(""));ct[I]=R;for(var D=0;D<R.length;D++){var F=R[D];Xe[F]===void 0&&(Xe[F]=D)}}}}var Ft,An=typeof Uint8Array=="function";function _n(h){return An&&h!=null&&h instanceof Uint8Array}function Os(h){if(this.L=h,h!==null&&h.length===0)throw Error("ByteString should be constructed with non-empty values")}var to=typeof Uint8Array.prototype.slice=="function",vr=0;function na(h,S){return Error("Invalid wire type: "+h+" (at position "+S+")")}function Fs(){return Error("Failed to read varint, encoding is invalid.")}function Or(h,S){S=(S=S===void 0?{}:S).v!==void 0&&S.v,this.h=null,this.g=this.i=this.j=0,this.v=S,h&&Fr(this,h)}function Fr(h,S){h.h=function(I,R){if(I.constructor===Uint8Array)return I;if(I.constructor===ArrayBuffer)return new Uint8Array(I);if(I.constructor===Array)return new Uint8Array(I);if(I.constructor===String)return bt(I);if(I.constructor===Os)return!R&&(R=I.L)&&R.constructor===Uint8Array?R:(R=(R=I.L)==null||_n(R)?R:typeof R=="string"?bt(R):null,(I=I.L=R)?new Uint8Array(I):Ft||(Ft=new Uint8Array(0)));if(I instanceof Uint8Array)return new Uint8Array(I.buffer,I.byteOffset,I.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}(S,h.v),h.j=0,h.i=h.h.length,h.g=h.j}function gt(h){if(h.g>h.i)throw Error("Tried to read past the end of the data "+h.g+" > "+h.i)}function ro(h){var S=h.h,I=S[h.g],R=127&I;if(128>I)return h.g+=1,gt(h),R;if(R|=(127&(I=S[h.g+1]))<<7,128>I)return h.g+=2,gt(h),R;if(R|=(127&(I=S[h.g+2]))<<14,128>I)return h.g+=3,gt(h),R;if(R|=(127&(I=S[h.g+3]))<<21,128>I)return h.g+=4,gt(h),R;if(I=S[h.g+4],h.g+=5,R|=(15&I)<<28,128>I)return gt(h),R;if(128<=S[h.g++]&&128<=S[h.g++]&&128<=S[h.g++]&&128<=S[h.g++]&&128<=S[h.g++])throw Fs();return gt(h),R}Or.prototype.reset=function(){this.g=this.j};var Oo=[];function Ds(){this.g=[]}function Dr(h,S){for(;127<S;)h.g.push(127&S|128),S>>>=7;h.g.push(S)}function Xr(h){var S={},I=S.W!==void 0&&S.W;this.l={v:S.v!==void 0&&S.v},this.W=I,S=this.l,Oo.length?(I=Oo.pop(),S&&(I.v=S.v),h&&Fr(I,h),h=I):h=new Or(h,S),this.g=h,this.j=this.g.g,this.h=this.i=-1}function no(h){var S=h.g;if(S.g==S.i)return!1;h.j=h.g.g;var I=ro(h.g)>>>0;if(S=I>>>3,!(0<=(I&=7)&&5>=I))throw na(I,h.j);if(1>S)throw Error("Invalid field number: "+S+" (at position "+h.j+")");return h.i=S,h.h=I,!0}function ar(h){switch(h.h){case 0:if(h.h!=0)ar(h);else e:{for(var S=(h=h.g).g,I=S+10;S<I;)if(!(128&h.h[S++])){h.g=S,gt(h);break e}throw Fs()}break;case 1:(h=h.g).g+=8,gt(h);break;case 2:h.h!=2?ar(h):(S=ro(h.g)>>>0,(h=h.g).g+=S,gt(h));break;case 5:(h=h.g).g+=4,gt(h);break;case 3:for(S=h.i;;){if(!no(h))throw Error("Unmatched start-group tag: stream EOF");if(h.h==4){if(h.i!=S)throw Error("Unmatched end-group tag");break}ar(h)}break;default:throw na(h.h,h.j)}}Ds.prototype.length=function(){return this.g.length},Ds.prototype.end=function(){var h=this.g;return this.g=[],h},Xr.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};var Yr=[];function Ps(){this.i=[],this.h=0,this.g=new Ds}function Ct(h,S){S.length!==0&&(h.i.push(S),h.h+=S.length)}var Fo=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function oa(h,S){Object.isFrozen(h)||(Fo?h[Fo]|=S:h.N!==void 0?h.N|=S:Object.defineProperties(h,{N:{value:S,configurable:!0,writable:!0,enumerable:!1}}))}function sa(h){var S;return(S=Fo?h[Fo]:h.N)==null?0:S}function Rn(h){return oa(h,1),h}function Pr(h){return!!Array.isArray(h)&&!!(2&sa(h))}function Do(h){if(!Array.isArray(h))throw Error("cannot mark non-array as immutable");oa(h,2)}function ur(h){return h!==null&&typeof h=="object"&&!Array.isArray(h)&&h.constructor===Object}var Po=Object.freeze(Rn([]));function ia(h){if(Pr(h.m))throw Error("Cannot mutate an immutable Message")}var aa,wu=typeof Symbol<"u"&&Symbol.hasInstance!==void 0;function Tu(h){return{value:h,configurable:!1,writable:!1,enumerable:!1}}function Dt(h,S,I){return S===-1?null:S>=h.i?h.g?h.g[S]:void 0:I!==void 0&&I&&h.g&&(I=h.g[S])!=null?I:h.m[S+h.h]}function xt(h,S,I,R){R=R!==void 0&&R,ia(h),S<h.i&&!R?h.m[S+h.h]=I:(h.g||(h.g=h.m[h.i+h.h]={}))[S]=I}function vt(h,S,I,R){I=I===void 0||I;var D=Dt(h,S,R=R!==void 0&&R);return D==null&&(D=Po),Pr(h.m)?I&&(Do(D),Object.freeze(D)):(D===Po||Pr(D))&&xt(h,S,D=Rn(D.slice()),R),D}function Kt(h,S,I){return(h=(h=Dt(h,S))==null?h:+h)==null?I===void 0?0:I:h}function Lo(h,S,I,R){h.j||(h.j={});var D=Pr(h.m),F=h.j[I];if(!F){R=vt(h,I,!0,R!==void 0&&R),F=[],D=D||Pr(R);for(var L=0;L<R.length;L++)F[L]=new S(R[L]),D&&Do(F[L].m);D&&(Do(F),Object.freeze(F)),h.j[I]=F}return F}function Je(h,S,I,R,D){var F=F!==void 0&&F;return ia(h),F=Lo(h,I,S,F),I=R||new I,h=vt(h,S),D!=null?(F.splice(D,0,I),h.splice(D,0,I.m)):(F.push(I),h.push(I.m)),I}function Bo(h,S){return(h=Dt(h,S))==null?0:h}function ua(h,S){return(h=Dt(h,S))==null?"":h}function ln(h){var S=Su;return Fe(h,S=S===void 0?Ls:S)}function wr(h,S){if(h!=null){if(Array.isArray(h))h=Fe(h,S);else if(ur(h)){var I,R={};for(I in h)R[I]=wr(h[I],S);h=R}else h=S(h);return h}}function Fe(h,S){for(var I=h.slice(),R=0;R<I.length;R++)I[R]=wr(I[R],S);return Array.isArray(h)&&1&sa(h)&&Rn(I),I}function Su(h){return h&&typeof h=="object"&&h.toJSON?h.toJSON():(h=function(S){switch(typeof S){case"number":return isFinite(S)?S:String(S);case"object":if(S&&!Array.isArray(S)){if(_n(S))return Ye(S);if(S instanceof Os){var I=S.L;return I=I==null||typeof I=="string"?I:An&&I instanceof Uint8Array?Ye(I):null,(S.L=I)||""}}}return S}(h),Array.isArray(h)?ln(h):h)}function Ls(h){return _n(h)?new Uint8Array(h):h}function Mo(h,S,I){h||(h=aa),aa=null;var R=this.constructor.h;if(h||(h=R?[R]:[]),this.h=(R?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=h,h=(R=this.m.length)-1,R&&ur(R=this.m[h])?(this.i=h-this.h,this.g=R):S!==void 0&&-1<S?(this.i=Math.max(S,h+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE,I)for(S=0;S<I.length;S++)if((h=I[S])<this.i)h+=this.h,(R=this.m[h])?Array.isArray(R)&&Rn(R):this.m[h]=Po;else{var D=(R=this.g||(this.g=this.m[this.i+this.h]={}))[h];D?Array.isArray(D)&&Rn(D):R[h]=Po}}function Vo(){Mo.apply(this,arguments)}if(Mo.prototype.toJSON=function(){return ln(this.m)},Mo.prototype.toString=function(){return this.m.toString()},f(Vo,Mo),wu){var cn={};Object.defineProperties(Vo,(cn[Symbol.hasInstance]=Tu(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),cn))}function Bs(h,S,I){if(I){var R,D={};for(R in I){var F=I[R],L=F.ha;L||(D.F=F.la||F.fa.P,F.aa?(D.U=Eu(F.aa),L=function(V){return function(j,Q,te){return V.F(j,Q,te,V.U)}}(D)):F.ca?(D.T=Ms(F.X.g,F.ca),L=function(V){return function(j,Q,te){return V.F(j,Q,te,V.T)}}(D)):L=D.F,F.ha=L),L(S,h,F.X),D={F:D.F,U:D.U,T:D.T}}}(function(V,j){if(j=j.ba){Ct(V,V.g.end());for(var Q=0;Q<j.length;Q++)Ct(V,j[Q])}})(S,h)}var Tr=Symbol();function pn(h,S,I){return h[Tr]||(h[Tr]=function(R,D){return S(R,D,I)})}function Cu(h){var S=h[Tr];if(!S){var I=Au(h);S=function(R,D){return la(R,D,I)},h[Tr]=S}return S}function Ah(h){var S=function(D){var F=D.aa;return F?Cu(F):(F=D.ka)?pn(D.X.g,F,D.ca):void 0}(h),I=h.X,R=h.fa.O;return S?function(D,F){return R(D,F,I,S)}:function(D,F){return R(D,F,I)}}function _t(h,S,I,R,D,F){var L=0;for((h=h()).length&&typeof h[0]!="number"&&(I(S,h[0]),L++);L<h.length;){I=h[L++];for(var V=L+1;V<h.length&&typeof h[V]!="number";)V++;var j=h[L++];switch(V-=L){case 0:R(S,I,j);break;case 1:R(S,I,j,h[L++]);break;case 2:D(S,I,j,h[L++],h[L++]);break;case 3:V=h[L++];var Q=h[L++],te=h[L++];Array.isArray(te)?D(S,I,j,V,Q,te):F(S,I,j,V,Q,te);break;case 4:F(S,I,j,h[L++],h[L++],h[L++],h[L++]);break;default:throw Error("unexpected number of binary field arguments: "+V)}}return S}var mn=Symbol();function Eu(h){var S=h[mn];if(!S){var I=ku(h);S=function(R,D){return pa(R,D,I)},h[mn]=S}return S}function Ms(h,S){var I=h[mn];return I||(I=function(R,D){return Bs(R,D,S)},h[mn]=I),I}var Nu=Symbol();function oo(h,S){h.push(S)}function _h(h,S,I){h.push(S,I.P)}function Iu(h,S,I,R,D){var F=Eu(D),L=I.P;h.push(S,function(V,j,Q){return L(V,j,Q,R,F)})}function $u(h,S,I,R,D,F){var L=Ms(R,F),V=I.P;h.push(S,function(j,Q,te){return V(j,Q,te,R,L)})}function ku(h){var S=h[Nu];return S||_t(h,h[Nu]=[],oo,_h,Iu,$u)}var Vs=Symbol();function On(h,S){h[0]=S}function Rh(h,S,I,R){var D=I.O;h[S]=R?function(F,L,V){return D(F,L,V,R)}:D}function Oh(h,S,I,R,D,F){var L=I.O,V=Cu(D);h[S]=function(j,Q,te){return L(j,Q,te,R,V,F)}}function Us(h,S,I,R,D,F,L){var V=I.O,j=pn(R,D,F);h[S]=function(Q,te,oe){return V(Q,te,oe,R,j,L)}}function Au(h){var S=h[Vs];return S||_t(h,h[Vs]={},On,Rh,Oh,Us)}function la(h,S,I){for(;no(S)&&S.h!=4;){var R=S.i,D=I[R];if(!D){var F=I[0];F&&(F=F[R])&&(D=I[R]=Ah(F))}if(!(D&&D(S,h,R)||(D=S,R=h,F=D.j,ar(D),D.W))){var L=D.g.h;D=F===(D=D.g.g)?Ft||(Ft=new Uint8Array(0)):to?L.slice(F,D):new Uint8Array(L.subarray(F,D)),(F=R.ba)?F.push(D):R.ba=[D]}}return h}function ca(h,S,I){if(Yr.length){var R=Yr.pop();h&&(Fr(R.g,h),R.i=-1,R.h=-1),h=R}else h=new Xr(h);try{return la(new S,h,Au(I))}finally{(S=h.g).h=null,S.j=0,S.i=0,S.g=0,S.v=!1,h.i=-1,h.h=-1,100>Yr.length&&Yr.push(h)}}function pa(h,S,I){for(var R=I.length,D=R%2==1,F=D?1:0;F<R;F+=2)(0,I[F+1])(S,h,I[F]);Bs(h,S,D?I[0]:void 0)}function Uo(h,S){var I=new Ps;pa(h,I,ku(S)),Ct(I,I.g.end()),h=new Uint8Array(I.h);for(var R=(S=I.i).length,D=0,F=0;F<R;F++){var L=S[F];h.set(L,D),D+=L.length}return I.i=[h],h}function so(h,S){return{O:h,P:S}}var Sr=so(function(h,S,I){if(h.h!==5)return!1;var R=(h=h.g).h[h.g],D=h.h[h.g+1],F=h.h[h.g+2],L=h.h[h.g+3];return h.g+=4,gt(h),h=2*((D=(R<<0|D<<8|F<<16|L<<24)>>>0)>>31)+1,R=D>>>23&255,D&=8388607,xt(S,I,R==255?D?NaN:1/0*h:R==0?h*Math.pow(2,-149)*D:h*Math.pow(2,R-150)*(D+Math.pow(2,23))),!0},function(h,S,I){if((S=Dt(S,I))!=null){Dr(h.g,8*I+5),h=h.g;var R=S;(R=(I=0>R?1:0)?-R:R)===0?0<1/R?vr=0:vr=2147483648:isNaN(R)?vr=2147483647:34028234663852886e22<R?vr=(I<<31|2139095040)>>>0:11754943508222875e-54>R?(R=Math.round(R/Math.pow(2,-149)),vr=(I<<31|R)>>>0):(S=Math.floor(Math.log(R)/Math.LN2),R*=Math.pow(2,-S),16777216<=(R=Math.round(8388608*R))&&++S,vr=(I<<31|S+127<<23|8388607&R)>>>0),I=vr,h.g.push(I>>>0&255),h.g.push(I>>>8&255),h.g.push(I>>>16&255),h.g.push(I>>>24&255)}}),Fh=so(function(h,S,I){if(h.h!==0)return!1;for(var R=h.g,D=128,F=0,L=h=0;4>L&&128<=D;L++)D=R.h[R.g++],gt(R),F|=(127&D)<<7*L;if(128<=D&&(D=R.h[R.g++],gt(R),F|=(127&D)<<28,h|=(127&D)>>4),128<=D)for(L=0;5>L&&128<=D;L++)D=R.h[R.g++],gt(R),h|=(127&D)<<7*L+3;if(!(128>D))throw Fs();return R=F>>>0,(h=2147483648&(D=h>>>0))&&(D=~D>>>0,(R=1+~R>>>0)==0&&(D=D+1>>>0)),R=4294967296*D+(R>>>0),xt(S,I,h?-R:R),!0},function(h,S,I){if((S=Dt(S,I))!=null&&S!=null){Dr(h.g,8*I),h=h.g;var R=S;for(I=0>R,S=(R=Math.abs(R))>>>0,R=Math.floor((R-S)/4294967296),R>>>=0,I&&(R=~R>>>0,4294967295<(S=1+(~S>>>0))&&(S=0,4294967295<++R&&(R=0))),I=vr=S,S=R;0<S||127<I;)h.g.push(127&I|128),I=(I>>>7|S<<25)>>>0,S>>>=7;h.g.push(I)}}),Dh=so(function(h,S,I){return h.h===0&&(xt(S,I,ro(h.g)),!0)},function(h,S,I){if((S=Dt(S,I))!=null&&S!=null)if(Dr(h.g,8*I),h=h.g,0<=(I=S))Dr(h,I);else{for(S=0;9>S;S++)h.g.push(127&I|128),I>>=7;h.g.push(1)}}),_u=so(function(h,S,I){if(h.h!==2)return!1;var R,D=ro(h.g)>>>0,F=(h=h.g).g;if(h.g+=D,gt(h),h=h.h,$e)(R=fe)||(R=fe=new TextDecoder("utf-8",{fatal:!0})),R=R.decode(h.subarray(F,F+D));else{D=F+D;for(var L,V,j,Q=[],te=null;F<D;)128>(L=h[F++])?Q.push(L):224>L?F>=D?Y():(V=h[F++],194>L||(192&V)!=128?(F--,Y()):Q.push((31&L)<<6|63&V)):240>L?F>=D-1?Y():(192&(V=h[F++]))!=128||L===224&&160>V||L===237&&160<=V||(192&(R=h[F++]))!=128?(F--,Y()):Q.push((15&L)<<12|(63&V)<<6|63&R):244>=L?F>=D-2?Y():(192&(V=h[F++]))!=128||V-144+(L<<28)>>30||(192&(R=h[F++]))!=128||(192&(j=h[F++]))!=128?(F--,Y()):(L=(7&L)<<18|(63&V)<<12|(63&R)<<6|63&j,L-=65536,Q.push(55296+(L>>10&1023),56320+(1023&L))):Y(),8192<=Q.length&&(te=ie(te,Q),Q.length=0);R=ie(te,Q)}return xt(S,I,R),!0},function(h,S,I){if((S=Dt(S,I))!=null){var R=!1;if(R=R!==void 0&&R,Oe){if(R&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(S))throw Error("Found an unpaired surrogate");S=(he||(he=new TextEncoder)).encode(S)}else{for(var D=0,F=new Uint8Array(3*S.length),L=0;L<S.length;L++){var V=S.charCodeAt(L);if(128>V)F[D++]=V;else{if(2048>V)F[D++]=V>>6|192;else{if(55296<=V&&57343>=V){if(56319>=V&&L<S.length){var j=S.charCodeAt(++L);if(56320<=j&&57343>=j){V=1024*(V-55296)+j-56320+65536,F[D++]=V>>18|240,F[D++]=V>>12&63|128,F[D++]=V>>6&63|128,F[D++]=63&V|128;continue}L--}if(R)throw Error("Found an unpaired surrogate");V=65533}F[D++]=V>>12|224,F[D++]=V>>6&63|128}F[D++]=63&V|128}}S=F.subarray(0,D)}Dr(h.g,8*I+2),Dr(h.g,S.length),Ct(h,h.g.end()),Ct(h,S)}}),ma=so(function(h,S,I,R,D){if(h.h!==2)return!1;S=Je(S,I,R),I=h.g.i,R=ro(h.g)>>>0;var F=h.g.g+R,L=F-I;if(0>=L&&(h.g.i=F,D(S,h),L=F-h.g.g),L)throw Error("Message parsing ended unexpectedly. Expected to read "+R+" bytes, instead read "+(R-L)+" bytes, either the data ended unexpectedly or the message misreported its own length");return h.g.g=F,h.g.i=I,!0},function(h,S,I,R,D){if((S=Lo(S,R,I))!=null)for(R=0;R<S.length;R++){var F=h;Dr(F.g,8*I+2);var L=F.g.end();Ct(F,L),L.push(F.h),F=L,D(S[R],h),L=h;var V=F.pop();for(V=L.h+L.g.length()-V;127<V;)F.push(127&V|128),V>>>=7,L.h++;F.push(V),L.h++}});function lr(){Vo.apply(this,arguments)}if(f(lr,Vo),wu){var Ru={};Object.defineProperties(lr,(Ru[Symbol.hasInstance]=Tu(Object[Symbol.hasInstance]),Ru))}function Fn(h){lr.call(this,h)}function Ou(){return[1,Dh,2,Sr,3,_u,4,_u]}function fa(h){lr.call(this,h,-1,Lh)}function Ph(){return[1,ma,Fn,Ou]}f(Fn,lr),f(fa,lr),fa.prototype.addClassification=function(h,S){return Je(this,1,Fn,h,S),this};var Lh=[1];function io(h){lr.call(this,h)}function Fu(){return[1,Sr,2,Sr,3,Sr,4,Sr,5,Sr]}function Du(h){lr.call(this,h,-1,Mh)}function Bh(){return[1,ma,io,Fu]}f(io,lr),f(Du,lr);var Mh=[1];function ha(h){lr.call(this,h)}function da(){return[1,Sr,2,Sr,3,Sr,4,Sr,5,Sr,6,Fh]}f(ha,lr);var ga=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],xa=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],ya=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ba=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],va=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Pu=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Lu=[].concat(a(ga),a(xa),a(ya),a(ba),a(va),a(Pu));function g(h,S,I){if(I=h.createShader(I===0?h.VERTEX_SHADER:h.FRAGMENT_SHADER),h.shaderSource(I,S),h.compileShader(I),!h.getShaderParameter(I,h.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+h.getShaderInfoLog(I));return I}function w(h){return Lo(h,Fn,1).map(function(S){return{index:Bo(S,1),ga:Kt(S,2),label:Dt(S,3)!=null?ua(S,3):void 0,displayName:Dt(S,4)!=null?ua(S,4):void 0}})}function C(h){return{x:Kt(h,1),y:Kt(h,2),z:Kt(h,3),visibility:Dt(h,4)!=null?Kt(h,4):void 0}}function P(h,S){this.h=h,this.g=S,this.l=0}function z(h,S,I){return function(R,D){var F=R.g;if(R.o===void 0){var L=g(F,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),V=g(F,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),j=F.createProgram();if(F.attachShader(j,L),F.attachShader(j,V),F.linkProgram(j),!F.getProgramParameter(j,F.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+F.getProgramInfoLog(j));L=R.o=j,F.useProgram(L),V=F.getUniformLocation(L,"sampler0"),R.j={K:F.getAttribLocation(L,"aVertex"),J:F.getAttribLocation(L,"aTex"),ma:V},R.u=F.createBuffer(),F.bindBuffer(F.ARRAY_BUFFER,R.u),F.enableVertexAttribArray(R.j.K),F.vertexAttribPointer(R.j.K,2,F.FLOAT,!1,0,0),F.bufferData(F.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),F.STATIC_DRAW),F.bindBuffer(F.ARRAY_BUFFER,null),R.s=F.createBuffer(),F.bindBuffer(F.ARRAY_BUFFER,R.s),F.enableVertexAttribArray(R.j.J),F.vertexAttribPointer(R.j.J,2,F.FLOAT,!1,0,0),F.bufferData(F.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),F.STATIC_DRAW),F.bindBuffer(F.ARRAY_BUFFER,null),F.uniform1i(V,0)}L=R.j,F.useProgram(R.o),F.canvas.width=D.width,F.canvas.height=D.height,F.viewport(0,0,D.width,D.height),F.activeTexture(F.TEXTURE0),R.h.bindTexture2d(D.glName),F.enableVertexAttribArray(L.K),F.bindBuffer(F.ARRAY_BUFFER,R.u),F.vertexAttribPointer(L.K,2,F.FLOAT,!1,0,0),F.enableVertexAttribArray(L.J),F.bindBuffer(F.ARRAY_BUFFER,R.s),F.vertexAttribPointer(L.J,2,F.FLOAT,!1,0,0),F.bindFramebuffer(F.DRAW_FRAMEBUFFER?F.DRAW_FRAMEBUFFER:F.FRAMEBUFFER,null),F.clearColor(0,0,0,0),F.clear(F.COLOR_BUFFER_BIT),F.colorMask(!0,!0,!0,!0),F.drawArrays(F.TRIANGLE_FAN,0,4),F.disableVertexAttribArray(L.K),F.disableVertexAttribArray(L.J),F.bindBuffer(F.ARRAY_BUFFER,null),R.h.bindTexture2d(0)}(h,S),typeof h.g.canvas.transferToImageBitmap=="function"?Promise.resolve(h.g.canvas.transferToImageBitmap()):I?Promise.resolve(h.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(h.g.canvas):(h.i===void 0&&(h.i=document.createElement("canvas")),new Promise(function(R){h.i.height=h.g.canvas.height,h.i.width=h.g.canvas.width,h.i.getContext("2d",{}).drawImage(h.g.canvas,0,0,h.g.canvas.width,h.g.canvas.height),R(h.i)}))}function Z(h){this.g=h}var K=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function J(h,S){return S+h}function ne(h,S){window[h]=S}function pe(h){if(this.g=h,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=h&&h.locateFile||J,typeof window=="object")var S=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else{if(typeof location>"u")throw Error("solutions can only be loaded on a web page or in a web worker");S=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"}if(this.$=S,h.options)for(var I=(S=i(Object.keys(h.options))).next();!I.done;I=S.next()){I=I.value;var R=h.options[I].default;R!==void 0&&(this.j[I]=typeof R=="function"?R():R)}}function Se(h){var S,I,R,D,F,L,V,j,Q,te,oe;return G(function(se){switch(se.g){case 1:return h.Z?(S=h.g.files===void 0?[]:typeof h.g.files=="function"?h.g.files(h.j):h.g.files,b(se,G(function(ce){switch(ce.g){case 1:return ce.o=2,b(ce,WebAssembly.instantiate(K),4);case 4:ce.g=3,ce.o=0;break;case 2:return ce.o=0,ce.j=null,ce.return(!1);case 3:return ce.return(!0)}}),2)):se.return();case 2:if(I=se.h,typeof window=="object")return ne("createMediapipeSolutionsWasm",{locateFile:h.locateFile}),ne("createMediapipeSolutionsPackedAssets",{locateFile:h.locateFile}),L=S.filter(function(ce){return ce.data!==void 0}),V=S.filter(function(ce){return ce.data===void 0}),j=Promise.all(L.map(function(ce){var Ce=Ue(h,ce.url);if(ce.path!==void 0){var ke=ce.path;Ce=Ce.then(function(Ze){return h.overrideFile(ke,Ze),Promise.resolve(Ze)})}return Ce})),Q=Promise.all(V.map(function(ce){return ce.simd===void 0||ce.simd&&I||!ce.simd&&!I?function(Ce){var ke=document.createElement("script");return ke.setAttribute("src",Ce),ke.setAttribute("crossorigin","anonymous"),new Promise(function(Ze){ke.addEventListener("load",function(){Ze()},!1),ke.addEventListener("error",function(){Ze()},!1),document.body.appendChild(ke)})}(h.locateFile(ce.url,h.$)):Promise.resolve()})).then(function(){var ce,Ce,ke;return G(function(Ze){if(Ze.g==1)return ce=window.createMediapipeSolutionsWasm,Ce=window.createMediapipeSolutionsPackedAssets,ke=h,b(Ze,ce(Ce),2);ke.h=Ze.h,Ze.g=0})}),te=G(function(ce){return h.g.graph&&h.g.graph.url?ce=b(ce,Ue(h,h.g.graph.url),0):(ce.g=0,ce=void 0),ce}),b(se,Promise.all([Q,j,te]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return R=S.filter(function(ce){return ce.simd===void 0||ce.simd&&I||!ce.simd&&!I}).map(function(ce){return h.locateFile(ce.url,h.$)}),importScripts.apply(null,a(R)),D=h,b(se,createMediapipeSolutionsWasm(Module),6);case 6:D.h=se.h,h.l=new OffscreenCanvas(1,1),h.h.canvas=h.l,F=h.h.GL.createContext(h.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),h.h.GL.makeContextCurrent(F),se.g=4;break;case 7:if(h.l=document.createElement("canvas"),!(oe=h.l.getContext("webgl2",{}))&&!(oe=h.l.getContext("webgl",{})))return alert("Failed to create WebGL canvas context when passing video frame."),se.return();h.G=oe,h.h.canvas=h.l,h.h.createContext(h.l,!0,!0,{});case 4:h.i=new h.h.SolutionWasm,h.Z=!1,se.g=0}})}function Ue(h,S){var I,R;return G(function(D){return S in h.H?D.return(h.H[S]):(I=h.locateFile(S,""),R=fetch(I).then(function(F){return F.arrayBuffer()}),h.H[S]=R,D.return(R))})}function Re(h,S,I){var R,D,F,L,V,j,Q,te,oe,se,ce,Ce,ke,Ze;return G(function(nt){switch(nt.g){case 1:if(!I)return nt.return(S);for(R={},D=0,F=i(Object.keys(I)),L=F.next();!L.done;L=F.next())V=L.value,typeof(j=I[V])!="string"&&j.type==="texture"&&S[j.stream]!==void 0&&++D;1<D&&(h.I=!1),Q=i(Object.keys(I)),L=Q.next();case 2:if(L.done){nt.g=4;break}if(te=L.value,typeof(oe=I[te])=="string")return ke=R,Ze=te,b(nt,function(Go,j2,Gs){var Bu;return G(function(Vh){return typeof Gs=="number"||Gs instanceof Uint8Array||Gs instanceof Go.h.Uint8BlobList?Vh.return(Gs):Gs instanceof Go.h.Texture2dDataOut?((Bu=Go.u[j2])||(Bu=new P(Go.h,Go.G),Go.u[j2]=Bu),Vh.return(z(Bu,Gs,Go.I))):Vh.return(void 0)})}(h,te,S[oe]),14);if(se=S[oe.stream],oe.type==="detection_list"){if(se){for(var jt=se.getRectList(),Lr=se.getLandmarksList(),cr=se.getClassificationsList(),He=[],Pt=0;Pt<jt.size();++Pt){var ao=ca(jt.get(Pt),ha,da);ao={boundingBox:{xCenter:Kt(ao,1),yCenter:Kt(ao,2),height:Kt(ao,3),width:Kt(ao,4),rotation:Kt(ao,5,0),rectId:Bo(ao,6)},landmarks:Lo(ca(Lr.get(Pt),Du,Bh),io,1).map(C),V:w(ca(cr.get(Pt),fa,Ph))},He.push(ao)}jt=He}else jt=[];R[te]=jt,nt.g=7;break}if(oe.type==="proto_list"){if(se){for(jt=Array(se.size()),Lr=0;Lr<se.size();Lr++)jt[Lr]=se.get(Lr);se.delete()}else jt=[];R[te]=jt,nt.g=7;break}if(se===void 0){nt.g=3;break}if(oe.type==="float_list"){R[te]=se,nt.g=7;break}if(oe.type==="proto"){R[te]=se,nt.g=7;break}if(oe.type!=="texture")throw Error("Unknown output config type: '"+oe.type+"'");return(ce=h.u[te])||(ce=new P(h.h,h.G),h.u[te]=ce),b(nt,z(ce,se,h.I),13);case 13:Ce=nt.h,R[te]=Ce;case 7:oe.transform&&R[te]&&(R[te]=oe.transform(R[te])),nt.g=3;break;case 14:ke[Ze]=nt.h;case 3:L=Q.next(),nt.g=2;break;case 4:return nt.return(R)}})}function Ee(h,S){for(var I=S.name||"$",R=[].concat(a(S.wants)),D=new h.h.StringList,F=i(S.wants),L=F.next();!L.done;L=F.next())D.push_back(L.value);F=h.h.PacketListener.implement({onResults:function(V){for(var j={},Q=0;Q<S.wants.length;++Q)j[R[Q]]=V.get(Q);var te=h.listeners[I];te&&(h.D=Re(h,j,S.outs).then(function(oe){oe=te(oe);for(var se=0;se<S.wants.length;++se){var ce=j[R[se]];typeof ce=="object"&&ce.hasOwnProperty&&ce.hasOwnProperty("delete")&&ce.delete()}oe&&(h.D=oe)}))}}),h.i.attachMultiListener(D,F),D.delete()}function de(h){var S=this;h=h||{};var I={url:"face_detection_short.binarypb"},R={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new pe({locateFile:h.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:I,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window=="object"&&window.navigator!==void 0&&("iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document)},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(D){var F,L,V,j,Q;return G(function(te){switch(te.g){case 1:F=i(D==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"]),L=F.next();case 2:if(L.done){te.g=4;break}return V=L.value,j="third_party/mediapipe/modules/face_detection/"+V,b(te,Ue(S.g,V),5);case 5:Q=te.h,S.g.overrideFile(j,Q),L=F.next(),te.g=2;break;case 4:return I.url=D==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",R.graphOptionXref.calculatorName=D==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",te.return(!0)}})}},minDetectionConfidence:R}})}(r=pe.prototype).close=function(){return this.i&&this.i.delete(),Promise.resolve()},r.reset=function(){var h=this;return G(function(S){h.i&&(h.i.reset(),h.o={},h.u={}),S.g=0})},r.setOptions=function(h,S){var I=this;if(S=S||this.g.options){for(var R=[],D=[],F={},L=i(Object.keys(h)),V=L.next();!V.done;F={R:F.R,S:F.S},V=L.next()){var j=V.value;j in this.j&&this.j[j]===h[j]||(this.j[j]=h[j],(V=S[j])!==void 0&&(V.onChange&&(F.R=V.onChange,F.S=h[j],R.push(function(Q){return function(){return G(function(te){if(te.g==1)return b(te,Q.R(Q.S),2);te.h===!0&&(I.s=!0),te.g=0})}}(F))),V.graphOptionXref&&(j={valueNumber:V.type===1?h[j]:0,valueBoolean:V.type===0&&h[j],valueString:V.type===2?h[j]:""},V=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),V.graphOptionXref),j),D.push(V))))}R.length===0&&D.length===0||(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(D),this.A=(this.A===void 0?[]:this.A).concat(R))}},r.initialize=function(){var h=this;return G(function(S){return S.g==1?b(S,Se(h),2):S.g!=3?b(S,function(I){var R,D,F,L,V,j,Q,te;return G(function(oe){if(oe.g==1)return I.g.graph&&I.g.graph.url&&I.Y===I.g.graph.url?oe.return():(I.s=!0,I.g.graph&&I.g.graph.url?(I.Y=I.g.graph.url,b(oe,Ue(I,I.g.graph.url),3)):void(oe.g=2));for(oe.g!=2&&(R=oe.h,I.i.loadGraph(R)),D=i(Object.keys(I.C)),F=D.next();!F.done;F=D.next())L=F.value,I.i.overrideFile(L,I.C[L]);if(I.C={},I.g.listeners)for(V=i(I.g.listeners),j=V.next();!j.done;j=V.next())Q=j.value,Ee(I,Q);te=I.j,I.j={},I.setOptions(te),oe.g=0})}(h),3):b(S,function(I){var R,D,F,L,V,j;return G(function(Q){switch(Q.g){case 1:if(!I.s)return Q.return();if(!I.A){Q.g=2;break}R=i(I.A),D=R.next();case 3:if(D.done){Q.g=5;break}return b(Q,(0,D.value)(),4);case 4:D=R.next(),Q.g=3;break;case 5:I.A=void 0;case 2:if(I.B){for(F=new I.h.GraphOptionChangeRequestList,L=i(I.B),V=L.next();!V.done;V=L.next())j=V.value,F.push_back(j);I.i.changeOptions(F),F.delete(),I.B=void 0}I.s=!1,Q.g=0}})}(h),0)})},r.overrideFile=function(h,S){this.i?this.i.overrideFile(h,S):this.C[h]=S},r.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},r.send=function(h,S){var I,R,D,F,L,V,j,Q,te,oe=this;return G(function(se){switch(se.g){case 1:return oe.g.inputs?(I=1e3*(S==null?performance.now():S),b(se,oe.D,2)):se.return();case 2:return b(se,oe.initialize(),3);case 3:for(R=new oe.h.PacketDataList,D=i(Object.keys(h)),F=D.next();!F.done;F=D.next())if(L=F.value,V=oe.g.inputs[L]){e:{var ce=h[L];switch(V.type){case"video":var Ce=oe.o[V.stream];if(Ce||(Ce=new P(oe.h,oe.G),oe.o[V.stream]=Ce),Ce.l===0&&(Ce.l=Ce.h.createTexture()),typeof HTMLVideoElement<"u"&&ce instanceof HTMLVideoElement)var ke=ce.videoWidth,Ze=ce.videoHeight;else typeof HTMLImageElement<"u"&&ce instanceof HTMLImageElement?(ke=ce.naturalWidth,Ze=ce.naturalHeight):(ke=ce.width,Ze=ce.height);Ze={glName:Ce.l,width:ke,height:Ze},(ke=Ce.g).canvas.width=Ze.width,ke.canvas.height=Ze.height,ke.activeTexture(ke.TEXTURE0),Ce.h.bindTexture2d(Ce.l),ke.texImage2D(ke.TEXTURE_2D,0,ke.RGBA,ke.RGBA,ke.UNSIGNED_BYTE,ce),Ce.h.bindTexture2d(0),Ce=Ze;break e;case"detections":for((Ce=oe.o[V.stream])||(Ce=new Z(oe.h),oe.o[V.stream]=Ce),Ce.data||(Ce.data=new Ce.g.DetectionListData),Ce.data.reset(ce.length),Ze=0;Ze<ce.length;++Ze){ke=ce[Ze];var nt=Ce.data,jt=nt.setBoundingBox,Lr=Ze,cr=ke.boundingBox,He=new ha;if(xt(He,1,cr.xCenter),xt(He,2,cr.yCenter),xt(He,3,cr.height),xt(He,4,cr.width),xt(He,5,cr.rotation),xt(He,6,cr.rectId),cr=Uo(He,da),jt.call(nt,Lr,cr),ke.landmarks)for(nt=0;nt<ke.landmarks.length;++nt){var Pt=!!(He=ke.landmarks[nt]).visibility;Lr=(jt=Ce.data).addNormalizedLandmark,cr=Ze,He=Object.assign(Object.assign({},He),{visibility:Pt?He.visibility:0}),xt(Pt=new io,1,He.x),xt(Pt,2,He.y),xt(Pt,3,He.z),He.visibility&&xt(Pt,4,He.visibility),He=Uo(Pt,Fu),Lr.call(jt,cr,He)}if(ke.V)for(nt=0;nt<ke.V.length;++nt)Lr=(jt=Ce.data).addClassification,cr=Ze,He=ke.V[nt],xt(Pt=new Fn,2,He.ga),He.index&&xt(Pt,1,He.index),He.label&&xt(Pt,3,He.label),He.displayName&&xt(Pt,4,He.displayName),He=Uo(Pt,Ou),Lr.call(jt,cr,He)}Ce=Ce.data;break e;default:Ce={}}}switch(j=Ce,Q=V.stream,V.type){case"video":R.pushTexture2d(Object.assign(Object.assign({},j),{stream:Q,timestamp:I}));break;case"detections":(te=j).stream=Q,te.timestamp=I,R.pushDetectionList(te);break;default:throw Error("Unknown input config type: '"+V.type+"'")}}return oe.i.send(R),b(se,oe.D,4);case 4:R.delete(),se.g=0}})},r.onResults=function(h,S){this.listeners[S||"$"]=h},q("Solution",pe),q("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"}),(r=de.prototype).close=function(){return this.g.close(),Promise.resolve()},r.onResults=function(h){this.g.onResults(h)},r.initialize=function(){var h=this;return G(function(S){return b(S,h.g.initialize(),0)})},r.reset=function(){this.g.reset()},r.send=function(h){var S=this;return G(function(I){return b(I,S.g.send(h),0)})},r.setOptions=function(h){this.g.setOptions(h)},q("FaceDetection",de),q("FACEDETECTION_LIPS",ga),q("FACEDETECTION_LEFT_EYE",xa),q("FACEDETECTION_LEFT_EYEBROW",ya),q("FACEDETECTION_RIGHT_EYE",ba),q("FACEDETECTION_RIGHT_EYEBROW",va),q("FACEDETECTION_FACE_OVAL",Pu),q("FACEDETECTION_CONTOURS",Lu),q("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),q("VERSION","0.4.1646425229")}).call(S1);var Io=function(){return Io=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},Io.apply(this,arguments)};function Xn(r,e,t,n){return new(t||(t=Promise))(function(o,s){function i(l){try{u(n.next(l))}catch(c){s(c)}}function a(l){try{u(n.throw(l))}catch(c){s(c)}}function u(l){var c;l.done?o(l.value):(c=l.value,c instanceof t?c:new t(function(p){p(c)})).then(i,a)}u((n=n.apply(r,e||[])).next())})}function Yn(r,e){var t,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||c[0]!==6&&c[0]!==2)){i=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(c[0]===6&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(r,i)}catch(p){c=[6,p],n=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}var Ly=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],C1={modelType:"short",runtime:"mediapipe",maxFaces:1},rk=function(){function r(e){var t=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new tk.FaceDetection({locateFile:function(n,o){return e.solutionPath?e.solutionPath.replace(/\/+$/,"")+"/"+n:o+"/"+n}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:e.modelType}),this.faceDetectorSolution.onResults(function(n){if(t.height=n.image.height,t.width=n.image.width,t.faces=[],n.detections!==null)for(var o=0,s=n.detections;o<s.length;o++){var i=s[o];t.faces.push(t.normalizedToAbsolute(i.landmarks,{xMin:u=(a=i.boundingBox).xCenter-a.width/2,xMax:u+a.width,yMin:l=a.yCenter-a.height/2,yMax:l+a.height,width:a.width,height:a.height}))}var a,u,l})}return r.prototype.normalizedToAbsolute=function(e,t){var n=this;return{keypoints:e.map(function(o,s){return{x:o.x*n.width,y:o.y*n.height,name:Ly[s]}}),box:{xMin:t.xMin*this.width,yMin:t.yMin*this.height,xMax:t.xMax*this.width,yMax:t.yMax*this.height,width:t.width*this.width,height:t.height*this.height}}},r.prototype.estimateFaces=function(e,t){return Xn(this,void 0,void 0,function(){var n,o;return Yn(this,function(s){switch(s.label){case 0:return t&&t.flipHorizontal&&t.flipHorizontal!==this.selfieMode&&(this.selfieMode=t.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),e instanceof Pe?(o=ImageData.bind,[4,Eo.toPixels(e)]):[3,2];case 1:return n=new(o.apply(ImageData,[void 0,s.sent(),e.shape[1],e.shape[0]])),[3,3];case 2:n=e,s.label=3;case 3:return e=n,[4,this.faceDetectorSolution.send({image:e})];case 4:return s.sent(),[2,this.faces]}})})},r.prototype.dispose=function(){this.faceDetectorSolution.close()},r.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},r.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},r}();function nk(r){return Xn(this,void 0,void 0,function(){var e,t;return Yn(this,function(n){switch(n.label){case 0:return e=function(o){if(o==null)return Io({},C1);var s=Io({},o);return s.runtime="mediapipe",s.modelType==null&&(s.modelType=C1.modelType),s.maxFaces==null&&(s.maxFaces=C1.maxFaces),s}(r),[4,(t=new rk(e)).initialize()];case 1:return n.sent(),[2,t]}})})}function By(r){return r instanceof Pe?{height:r.shape[0],width:r.shape[1]}:{height:r.height,width:r.width}}function My(r){return r instanceof Pe?r:Eo.fromPixels(r)}function E1(r,e){N.assert(r.width!==0,function(){return e+" width cannot be 0."}),N.assert(r.height!==0,function(){return e+" height cannot be 0."})}function ok(r,e,t){var n=e.outputTensorSize,o=e.keepAspectRatio,s=e.borderMode,i=e.outputTensorFloatRange,a=By(r),u=function(m,f){return f?{xCenter:f.xCenter*m.width,yCenter:f.yCenter*m.height,width:f.width*m.width,height:f.height*m.height,rotation:f.rotation}:{xCenter:.5*m.width,yCenter:.5*m.height,width:m.width,height:m.height,rotation:0}}(a,t),l=function(m,f,d){if(d===void 0&&(d=!1),!d)return{top:0,left:0,right:0,bottom:0};var y=f.height,x=f.width;E1(f,"targetSize"),E1(m,"roi");var b,$,A=y/x,O=m.height/m.width,M=0,G=0;return A>O?(b=m.width,$=m.width*A,G=(1-O/A)/2):(b=m.height/A,$=m.height,M=(1-A/O)/2),m.width=b,m.height=$,{top:G,left:M,right:M,bottom:G}}(u,n,o),c=function(m,f,d,y){var x=m.width,b=m.height,$=y?-1:1,A=Math.cos(m.rotation),O=Math.sin(m.rotation),M=m.xCenter,G=m.yCenter,H=1/f,X=1/d,q=new Array(16);return q[0]=x*A*$*H,q[1]=-b*O*H,q[2]=0,q[3]=(-.5*x*A*$+.5*b*O+M)*H,q[4]=x*O*$*X,q[5]=b*A*X,q[6]=0,q[7]=(-.5*b*A-.5*x*O*$+G)*X,q[8]=0,q[9]=0,q[10]=x*H,q[11]=0,q[12]=0,q[13]=0,q[14]=0,q[15]=1,function(Y){if(Y.length!==16)throw new Error("Array length must be 16 but got "+Y.length);return[[Y[0],Y[1],Y[2],Y[3]],[Y[4],Y[5],Y[6],Y[7]],[Y[8],Y[9],Y[10],Y[11]],[Y[12],Y[13],Y[14],Y[15]]]}(q)}(u,a.width,a.height,!1),p=be(function(){var m=My(r),f=$r(function(x,b,$){return E1($,"inputResolution"),[1/$.width*x[0][0]*b.width,1/$.height*x[0][1]*b.width,x[0][3]*b.width,1/$.width*x[1][0]*b.height,1/$.height*x[1][1]*b.height,x[1][3]*b.height,0,0]}(c,a,n),[1,8]),d=s==="zero"?"constant":"nearest",y=Co.transform(er(_e(m,"float32")),f,"bilinear",d,0,[n.height,n.width]);return i!=null?function(x,b){var $=function(A,O,M,G){var H=(G-M)/255;return{scale:H,offset:M-0*H}}(0,0,b[0],b[1]);return be(function(){return ue(ee(x,$.scale),$.offset)})}(y,i):y});return{imageTensor:p,padding:l,transformationMatrix:c}}function Ty(r){r.reduceBoxesInLowestLayer==null&&(r.reduceBoxesInLowestLayer=!1),r.interpolatedScaleAspectRatio==null&&(r.interpolatedScaleAspectRatio=1),r.fixedAnchorSize==null&&(r.fixedAnchorSize=!1);for(var e=[],t=0;t<r.numLayers;){for(var n=[],o=[],s=[],i=[],a=t;a<r.strides.length&&r.strides[a]===r.strides[t];){var u=Sy(r.minScale,r.maxScale,a,r.strides.length);if(a===0&&r.reduceBoxesInLowestLayer)s.push(1),s.push(2),s.push(.5),i.push(.1),i.push(u),i.push(u);else{for(var l=0;l<r.aspectRatios.length;++l)s.push(r.aspectRatios[l]),i.push(u);if(r.interpolatedScaleAspectRatio>0){var c=a===r.strides.length-1?1:Sy(r.minScale,r.maxScale,a+1,r.strides.length);i.push(Math.sqrt(u*c)),s.push(r.interpolatedScaleAspectRatio)}}a++}for(var p=0;p<s.length;++p){var m=Math.sqrt(s[p]);n.push(i[p]/m),o.push(i[p]*m)}var f=0,d=0;if(r.featureMapHeight.length>0)f=r.featureMapHeight[t],d=r.featureMapWidth[t];else{var y=r.strides[t];f=Math.ceil(r.inputSizeHeight/y),d=Math.ceil(r.inputSizeWidth/y)}for(var x=0;x<f;++x)for(var b=0;b<d;++b)for(var $=0;$<n.length;++$){var A={xCenter:(b+r.anchorOffsetX)/d,yCenter:(x+r.anchorOffsetY)/f,width:0,height:0};r.fixedAnchorSize?(A.width=1,A.height=1):(A.width=o[$],A.height=n[$]),e.push(A)}t=a}return e}function Sy(r,e,t,n){return n===1?.5*(r+e):r+(e-r)*t/(n-1)}function Cy(r,e){var t=e[0],n=e[1];return[t*r[0]+n*r[1]+r[3],t*r[4]+n*r[5]+r[7]]}function sk(r,e,t,n){return Xn(this,void 0,void 0,function(){var o,s,i,a,u;return Yn(this,function(l){switch(l.label){case 0:return r.sort(function(c,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,c.score)}),o=$r(r.map(function(c){return[c.locationData.relativeBoundingBox.yMin,c.locationData.relativeBoundingBox.xMin,c.locationData.relativeBoundingBox.yMax,c.locationData.relativeBoundingBox.xMax]})),s=dt(r.map(function(c){return c.score[0]})),[4,Co.nonMaxSuppressionAsync(o,s,e,t)];case 1:return[4,(i=l.sent()).array()];case 2:return a=l.sent(),u=r.filter(function(c,p){return a.indexOf(p)>-1}),Ge([o,s,i]),[2,u]}})})}function ik(r,e,t){return Xn(this,void 0,void 0,function(){var n,o,s,i,a;return Yn(this,function(u){switch(u.label){case 0:return n=r[0],o=r[1],s=function(l,c,p){return be(function(){var m,f,d,y;p.reverseOutputOrder?(f=pt(ve(l,[0,p.boxCoordOffset+0],[-1,1])),m=pt(ve(l,[0,p.boxCoordOffset+1],[-1,1])),y=pt(ve(l,[0,p.boxCoordOffset+2],[-1,1])),d=pt(ve(l,[0,p.boxCoordOffset+3],[-1,1]))):(m=pt(ve(l,[0,p.boxCoordOffset+0],[-1,1])),f=pt(ve(l,[0,p.boxCoordOffset+1],[-1,1])),d=pt(ve(l,[0,p.boxCoordOffset+2],[-1,1])),y=pt(ve(l,[0,p.boxCoordOffset+3],[-1,1]))),f=ue(ee(we(f,p.xScale),c.w),c.x),m=ue(ee(we(m,p.yScale),c.h),c.y),p.applyExponentialOnBoxSize?(d=ee(Jt(we(d,p.hScale)),c.h),y=ee(Jt(we(y,p.wScale)),c.w)):(d=ee(we(d,p.hScale),c.h),y=ee(we(y,p.wScale),c.h));var x=ye(m,we(d,2)),b=ye(f,we(y,2)),$=ue(m,we(d,2)),A=ue(f,we(y,2)),O=qe([W(x,[p.numBoxes,1]),W(b,[p.numBoxes,1]),W($,[p.numBoxes,1]),W(A,[p.numBoxes,1])],1);if(p.numKeypoints)for(var M=0;M<p.numKeypoints;++M){var G=p.keypointCoordOffset+M*p.numValuesPerKeypoint,H=void 0,X=void 0;p.reverseOutputOrder?(H=pt(ve(l,[0,G],[-1,1])),X=pt(ve(l,[0,G+1],[-1,1]))):(X=pt(ve(l,[0,G],[-1,1])),H=pt(ve(l,[0,G+1],[-1,1])));var q=ue(ee(we(H,p.xScale),c.w),c.x),Y=ue(ee(we(X,p.yScale),c.h),c.y);O=qe([O,W(q,[p.numBoxes,1]),W(Y,[p.numBoxes,1])],1)}return O})}(o,e,t),i=be(function(){var l=n;return t.sigmoidScore?(t.scoreClippingThresh!=null&&(l=wp(n,-t.scoreClippingThresh,t.scoreClippingThresh)),l=Gr(l)):l}),[4,ak(s,i,t)];case 1:return a=u.sent(),Ge([s,i]),[2,a]}})})}function ak(r,e,t){return Xn(this,void 0,void 0,function(){var n,o,s,i,a,u,l,c,p,m,f,d;return Yn(this,function(y){switch(y.label){case 0:return n=[],[4,r.data()];case 1:return o=y.sent(),[4,e.data()];case 2:for(s=y.sent(),i=0;i<t.numBoxes;++i)if(!(t.minScoreThresh!=null&&s[i]<t.minScoreThresh||(a=i*t.numCoords,u=uk(o[a+0],o[a+1],o[a+2],o[a+3],s[i],t.flipVertically,i),(l=u.locationData.relativeBoundingBox).width<0||l.height<0))){if(t.numKeypoints>0)for((c=u.locationData).relativeKeypoints=[],p=t.numKeypoints*t.numValuesPerKeypoint,m=0;m<p;m+=t.numValuesPerKeypoint)f=a+t.keypointCoordOffset+m,d={x:o[f+0],y:t.flipVertically?1-o[f+1]:o[f+1]},c.relativeKeypoints.push(d);n.push(u)}return[2,n]}})})}function uk(r,e,t,n,o,s,i){return{score:[o],ind:i,locationData:{relativeBoundingBox:{xMin:e,yMin:s?1-t:r,xMax:n,yMax:s?1-r:t,width:n-e,height:t-r}}}}var Bm,lk={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},ck={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},N1={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},pk={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},mk={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},fk={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},hk={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},dk=function(){function r(e,t,n){this.detectorModel=t,this.maxFaces=n,e==="full"?(this.imageToTensorConfig=hk,this.tensorsToDetectionConfig=mk,this.anchors=Ty(ck)):(this.imageToTensorConfig=fk,this.tensorsToDetectionConfig=pk,this.anchors=Ty(lk));var o=dt(this.anchors.map(function(u){return u.width})),s=dt(this.anchors.map(function(u){return u.height})),i=dt(this.anchors.map(function(u){return u.xCenter})),a=dt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:i,y:a,w:o,h:s}}return r.prototype.dispose=function(){this.detectorModel.dispose(),Ge([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},r.prototype.reset=function(){},r.prototype.detectFaces=function(e,t){return t===void 0&&(t=!1),Xn(this,void 0,void 0,function(){var n,o,s,i,a,u,l,c,p,m,f;return Yn(this,function(d){switch(d.label){case 0:return e==null?(this.reset(),[2,[]]):(n=be(function(){var y=_e(My(e),"float32");return t&&(y=pt(Co.flipLeftRight(er(y,0)),[0])),y}),o=ok(n,this.imageToTensorConfig),s=o.imageTensor,i=o.transformationMatrix,a=this.detectorModel.execute(s,"Identity:0"),u=function(y){return be(function(){var x=function(A){return be(function(){return[ve(A,[0,0,0],[1,-1,1]),ve(A,[0,0,1],[1,-1,-1])]})}(y),b=x[0],$=x[1];return{boxes:pt($),logits:pt(b)}})}(a),l=u.boxes,[4,ik([c=u.logits,l],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=d.sent()).length===0?(Ge([n,s,a,c,l]),[2,p]):[4,sk(p,this.maxFaces,.3)];case 2:return m=d.sent(),f=function(y,x){y===void 0&&(y=[]);var b,$=(b=x,[].concat.apply([],b));return y.forEach(function(A){var O=A.locationData;O.relativeKeypoints.forEach(function(Y){var ie=Cy($,[Y.x,Y.y]),fe=ie[0],he=ie[1];Y.x=fe,Y.y=he});var M=O.relativeBoundingBox,G=Number.MAX_VALUE,H=Number.MAX_VALUE,X=Number.MIN_VALUE,q=Number.MIN_VALUE;[[M.xMin,M.yMin],[M.xMin+M.width,M.yMin],[M.xMin+M.width,M.yMin+M.height],[M.xMin,M.yMin+M.height]].forEach(function(Y){var ie=Cy($,Y),fe=ie[0],he=ie[1];G=Math.min(G,fe),X=Math.max(X,fe),H=Math.min(H,he),q=Math.max(q,he)}),O.relativeBoundingBox={xMin:G,xMax:X,yMin:H,yMax:q,width:X-G,height:q-H}}),y}(m,i),Ge([n,s,a,c,l]),[2,f]}})})},r.prototype.estimateFaces=function(e,t){return Xn(this,void 0,void 0,function(){var n,o;return Yn(this,function(s){return n=By(e),o=!!t&&t.flipHorizontal,[2,this.detectFaces(e,o).then(function(i){return i.map(function(a){for(var u=a.locationData.relativeKeypoints.map(function(d,y){return Io(Io({},d),{x:d.x*n.width,y:d.y*n.height,name:Ly[y]})}),l=a.locationData.relativeBoundingBox,c=0,p=["width","xMax","xMin"];c<p.length;c++)l[p[c]]*=n.width;for(var m=0,f=["height","yMax","yMin"];m<f.length;m++)l[f[m]]*=n.height;return{keypoints:u,box:l}})})]})})},r}();function gk(r){return Xn(this,void 0,void 0,function(){var e,t,n;return Yn(this,function(o){switch(o.label){case 0:return e=function(s){if(s==null)return Io({},N1);var i=Io({},s);return i.modelType==null&&(i.modelType=N1.modelType),i.maxFaces==null&&(i.maxFaces=N1.maxFaces),i.detectorModelUrl==null&&(i.modelType==="full"?i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),i}(r),t=typeof e.detectorModelUrl=="string"&&e.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,tu(e.detectorModelUrl,{fromTFHub:t})];case 1:return n=o.sent(),[2,new dk(e.modelType,n,e.maxFaces)]}})})}function xk(r,e){return Xn(this,void 0,void 0,function(){var t,n;return Yn(this,function(o){if(r===Bm.MediaPipeFaceDetector){if(n=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,gk(t)];if(t.runtime==="mediapipe")return[2,nk(t)];n=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+n)}throw new Error(r+" is not a supported model name.")})})}function I1(r){return r.width*r.height}function Ey(r){var e=r.xCenter-r.width/2,t=e+r.width,n=r.yCenter-r.height/2;return{xMin:e,xMax:t,yMin:n,yMax:n+r.height,width:r.width,height:r.height}}function yk(r,e){var t=Ey(r),n=Ey(e);if(!function(i,a){return!(i.xMax<a.xMin||a.xMax<i.xMin||i.yMax<a.yMin||a.yMax<i.yMin)}(t,n))return 0;var o=I1(function(i,a){var u=Math.max(i.xMin,a.xMin),l=Math.min(i.xMax,a.xMax),c=Math.max(i.yMin,a.yMin),p=Math.min(i.yMax,a.yMax);return{xMin:u,xMax:l,yMin:c,yMax:p,width:Math.max(l-u,0),height:Math.max(p-c,0)}}(t,n)),s=I1(t)+I1(n)-o;return s>0?o/s:0}function bk(r,e,t,n){var o=r.width,s=r.height,i=n?-1:1,a=Math.cos(r.rotation),u=Math.sin(r.rotation),l=r.xCenter,c=r.yCenter,p=1/e,m=1/t,f=new Array(16);return f[0]=o*a*i*p,f[1]=-s*u*p,f[2]=0,f[3]=(-.5*o*a*i+.5*s*u+l)*p,f[4]=o*u*i*m,f[5]=s*a*m,f[6]=0,f[7]=(-.5*s*a-.5*o*u*i+c)*m,f[8]=0,f[9]=0,f[10]=o*p,f[11]=0,f[12]=0,f[13]=0,f[14]=0,f[15]=1,function(d){if(d.length!==16)throw new Error("Array length must be 16 but got "+d.length);return[[d[0],d[1],d[2],d[3]],[d[4],d[5],d[6],d[7]],[d[8],d[9],d[10],d[11]],[d[12],d[13],d[14],d[15]]]}(f)}function Vy(r){return r instanceof Pe?{height:r.shape[0],width:r.shape[1]}:{height:r.height,width:r.width}}function Uy(r){return r-2*Math.PI*Math.floor((r+Math.PI)/(2*Math.PI))}function Gy(r){return r instanceof Pe?r:Eo.fromPixels(r)}function $1(r,e){N.assert(r.width!==0,function(){return e+" width cannot be 0."}),N.assert(r.height!==0,function(){return e+" height cannot be 0."})}function vk(r,e){var t=function(n,o,s,i){var a=o-n,u=i-s;if(a===0)throw new Error("Original min and max are both "+n+", range cannot be 0.");var l=u/a;return{scale:l,offset:s-n*l}}(0,255,e[0],e[1]);return be(function(){return ue(ee(r,t.scale),t.offset)})}function wk(r,e,t){var n=e.outputTensorSize,o=e.keepAspectRatio,s=e.borderMode,i=e.outputTensorFloatRange,a=Vy(r),u=function(m,f){return f?{xCenter:f.xCenter*m.width,yCenter:f.yCenter*m.height,width:f.width*m.width,height:f.height*m.height,rotation:f.rotation}:{xCenter:.5*m.width,yCenter:.5*m.height,width:m.width,height:m.height,rotation:0}}(a,t),l=function(m,f,d){if(d===void 0&&(d=!1),!d)return{top:0,left:0,right:0,bottom:0};var y=f.height,x=f.width;$1(f,"targetSize"),$1(m,"roi");var b,$,A=y/x,O=m.height/m.width,M=0,G=0;return A>O?(b=m.width,$=m.width*A,G=(1-O/A)/2):(b=m.height/A,$=m.height,M=(1-A/O)/2),m.width=b,m.height=$,{top:G,left:M,right:M,bottom:G}}(u,n,o),c=bk(u,a.width,a.height,!1),p=be(function(){var m=Gy(r),f=$r(function(x,b,$){return $1($,"inputResolution"),[1/$.width*x[0][0]*b.width,1/$.height*x[0][1]*b.width,x[0][3]*b.width,1/$.width*x[1][0]*b.height,1/$.height*x[1][1]*b.height,x[1][3]*b.height,0,0]}(c,a,n),[1,8]),d=s==="zero"?"constant":"nearest",y=Co.transform(er(_e(m,"float32")),f,"bilinear",d,0,[n.height,n.width]);return i!=null?vk(y,i):y});return{imageTensor:p,padding:l,transformationMatrix:c}}function Ny(r){return{xCenter:r.xMin+r.width/2,yCenter:r.yMin+r.height/2,width:r.width,height:r.height}}function Iy(r){var e=r.relativeKeypoints;if(e.length<=1)throw new Error("2 or more keypoints required to calculate a rect.");var t=Number.MAX_VALUE,n=Number.MAX_VALUE,o=Number.MIN_VALUE,s=Number.MIN_VALUE;return e.forEach(function(i){t=Math.min(t,i.x),o=Math.max(o,i.x),n=Math.min(n,i.y),s=Math.max(s,i.y)}),{xCenter:(t+o)/2,yCenter:(n+s)/2,width:o-t,height:s-n}}function $y(r,e,t,n,o){var s=t==="rect"?function(i,a,u){var l,c=i.locationData;if(a==="boundingbox")l=Ny(c.boundingBox);else{l=Iy(c);var p=u.width,m=u.height;l.xCenter=Math.round(l.xCenter*p),l.yCenter=Math.round(l.yCenter*m),l.width=Math.round(l.width*p),l.height=Math.round(l.height*m)}return l}(r,e,n):function(i,a){var u=i.locationData;return a==="boundingbox"?Ny(u.relativeBoundingBox):Iy(u)}(r,e);return o&&(s.rotation=function(i,a,u){var l,c=i.locationData,p=u.rotationVectorStartKeypointIndex,m=u.rotationVectorEndKeypointIndex;l=u.rotationVectorTargetAngle?u.rotationVectorTargetAngle:Math.PI*u.rotationVectorTargetAngleDegree/180;var f=c.relativeKeypoints[p].x*a.width,d=c.relativeKeypoints[p].y*a.height,y=c.relativeKeypoints[m].x*a.width,x=c.relativeKeypoints[m].y*a.height;return Uy(l-Math.atan2(-(x-d),y-f))}(r,n,o)),s}function Tk(r,e,t){for(var n=0;n<e.length;++n){var o=e[n],s=t[r[n]];s.x=o.x,s.y=o.y}}function Sk(r,e,t,n){if(typeof e=="string"){if(e==="copy")for(var o=0;o<t.length;++o)n[r[o]].z=t[o].z}else{var s=function(i,a){for(var u=0,l=0;l<a.length;++l)u+=i[a[l]].z;return u/a.length}(n,e);for(o=0;o<r.length;++o)n[r[o]].z=s}}function Ck(r,e){for(var t=function(a){var u=[].concat.apply([],a.map(function(f){return f.indexesMapping}));if(u.length===0)throw new Error("There should be at least one landmark in indexes mapping");var l=u[0],c=u[0],p=new Set(u);p.forEach(function(f){l=Math.min(l,f),c=Math.max(c,f)});var m=p.size;if(l!==0)throw new Error("Indexes are expected to start with 0 instead of "+l);if(c+1!==m)throw new Error("Indexes should have no gaps but "+(c-m+1)+" indexes are missing");return m}(e),n=new Array(t).fill(null).map(Object),o=0;o<r.length;++o){var s=r[o],i=e[o];if(s.length!==i.indexesMapping.length)throw new Error("There are "+s.length+" refinement landmarks while mapping has "+i.indexesMapping.length);Tk(i.indexesMapping,s,n),Sk(i.indexesMapping,i.zRefinement,s,n)}return n}function Ek(r,e){return r.map(function(t){var n=nn(nn({},t),{x:t.x*e.width,y:t.y*e.height});return t.z!=null&&(n.z=t.z*e.width),n})}function Nk(r,e){return r==="none"?e:function(t){return 1/(1+Math.exp(-t))}(e)}function ys(r,e,t,n){return jn(this,void 0,void 0,function(){var o,s,i,a,u,l,c,p;return qn(this,function(m){switch(m.label){case 0:return t=t||e.flipHorizontally||!1,n=n||e.flipVertically||!1,o=r.size,s=o/e.numLandmarks,[4,r.data()];case 1:for(i=m.sent(),a=[],u=0;u<e.numLandmarks;++u)l=u*s,(p={x:0,y:0}).x=t?e.inputImageWidth-i[l]:i[l],s>1&&(p.y=n?e.inputImageHeight-i[l+1]:i[l+1]),s>2&&(p.z=i[l+2]),s>3&&(p.score=Nk(e.visibilityActivation,i[l+3])),a.push(p);for(c=0;c<a.length;++c)(p=a[c]).x=p.x/e.inputImageWidth,p.y=p.y/e.inputImageHeight,p.z=p.z/e.inputImageWidth/(e.normalizeZ||1);return[2,a]}})})}function ky(r,e,t){var n=r.width,o=r.height,s=r.rotation;if(t.rotation==null&&t.rotationDegree==null||(s=function(c,p){return p.rotation!=null?c+=p.rotation:p.rotationDegree!=null&&(c+=Math.PI*p.rotationDegree/180),Uy(c)}(s,t)),s===0)r.xCenter=r.xCenter+n*t.shiftX,r.yCenter=r.yCenter+o*t.shiftY;else{var i=(e.width*n*t.shiftX*Math.cos(s)-e.height*o*t.shiftY*Math.sin(s))/e.width,a=(e.width*n*t.shiftX*Math.sin(s)+e.height*o*t.shiftY*Math.cos(s))/e.height;r.xCenter=r.xCenter+i,r.yCenter=r.yCenter+a}if(t.squareLong){var u=Math.max(n*e.width,o*e.height);n=u/e.width,o=u/e.height}else if(t.squareShort){var l=Math.min(n*e.width,o*e.height);n=l/e.width,o=l/e.height}return r.width=n*t.scaleX,r.height=o*t.scaleY,r}(Bm||(Bm={})).MediaPipeFaceDetector="MediaPipeFaceDetector";var k1={runtime:"tfjs",maxFaces:1,refineLandmarks:!1,landmarkModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"},A1={flipHorizontal:!1,staticImageMode:!1},Ay={shiftX:0,shiftY:0,scaleX:1.5,scaleY:1.5,squareLong:!0},Ik={outputTensorSize:{width:192,height:192},outputTensorFloatRange:[0,1],borderMode:"replicate"},_y={numLandmarks:468,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},$k={numLandmarks:80,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Ry={numLandmarks:71,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},Oy={numLandmarks:5,inputImageWidth:192,inputImageHeight:192,visibilityActivation:"none",flipHorizontally:!1,flipVertically:!1},kk={indexesMapping:Array.from(Array(468).keys()),zRefinement:"copy"},Ak={indexesMapping:[61,146,91,181,84,17,314,405,321,375,291,185,40,39,37,0,267,269,270,409,78,95,88,178,87,14,317,402,318,324,308,191,80,81,82,13,312,311,310,415,76,77,90,180,85,16,315,404,320,307,306,184,74,73,72,11,302,303,304,408,62,96,89,179,86,15,316,403,319,325,292,183,42,41,38,12,268,271,272,407],zRefinement:"none"},_k={indexesMapping:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173,130,25,110,24,23,22,26,112,243,247,30,29,27,28,56,190,226,31,228,229,230,231,232,233,244,113,225,224,223,222,221,189,35,124,46,53,52,65,143,111,117,118,119,120,121,128,245,156,70,63,105,66,107,55,193],zRefinement:"none"},Rk={indexesMapping:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398,359,255,339,254,253,252,256,341,463,467,260,259,257,258,286,414,446,261,448,449,450,451,452,453,464,342,445,444,443,442,441,413,265,353,276,283,282,295,372,340,346,347,348,349,350,357,465,383,300,293,334,296,336,285,417],zRefinement:"none"},Ok={indexesMapping:[468,469,470,471,472],zRefinement:[33,7,163,144,145,153,154,155,133,246,161,160,159,158,157,173]},Fk={indexesMapping:[473,474,475,476,477],zRefinement:[263,249,390,373,374,380,381,382,362,466,388,387,386,385,384,398]},on,Dk=function(){function r(e,t,n,o){this.detector=e,this.landmarkModel=t,this.maxFaces=n,this.withAttention=o,this.prevFaceRectsFromLandmarks=null}return r.prototype.estimateFaces=function(e,t){return jn(this,void 0,void 0,function(){var n,o,s,i,a,u,l,c,p,m,f,d,y,x=this;return qn(this,function(b){switch(b.label){case 0:return n=function(O){if(O==null)return nn({},A1);var M=nn({},O);return M.flipHorizontal==null&&(M.flipHorizontal=A1.flipHorizontal),M.staticImageMode==null&&(M.staticImageMode=A1.staticImageMode),M}(t),e==null?(this.reset(),[2,[]]):(o=Vy(e),s=be(function(){var O=_e(Gy(e),"float32");return n.flipHorizontal&&(O=pt(Co.flipLeftRight(er(O,0)),[0])),O}),i=this.prevFaceRectsFromLandmarks,n.staticImageMode||i==null||i.length<this.maxFaces?[4,this.detector.detectFaces(s,!1)]:[3,2]);case 1:return(u=b.sent()).length===0?(this.reset(),s.dispose(),[2,[]]):(a=u.map(function(O){return x.faceDetectionFrontDetectionToRoi(O,o)}),[3,3]);case 2:a=[],b.label=3;case 3:return $=.5,A=[],[a,i||[]].forEach(function(O){return O.forEach(function(M){(A=A.filter(function(G){return yk(M,G)<=$})).push(M)})}),l=A,[4,Promise.all(l.map(function(O){return x.faceLandmark(O,s)}))];case 4:for(c=b.sent(),p=[],this.prevFaceRectsFromLandmarks=[],m=0;m<c.length;++m)(f=c[m])!=null&&(this.prevFaceRectsFromLandmarks.push(this.faceLandmarksToRoi(f,o)),(d=Ek(f,o))!=null&&d.forEach(function(O,M){var G=Py.get(M);G!=null&&(O.name=G)}),y=_1(d),p.push({keypoints:d,box:y.locationData.relativeBoundingBox}));return s.dispose(),[2,p]}var $,A})})},r.prototype.dispose=function(){this.detector.dispose(),this.landmarkModel.dispose()},r.prototype.reset=function(){this.detector.reset(),this.prevFaceRectsFromLandmarks=null},r.prototype.faceDetectionFrontDetectionToRoi=function(e,t){return ky($y(e,"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:0,rotationVectorEndKeypointIndex:1,rotationVectorTargetAngleDegree:0}),t,Ay)},r.prototype.faceLandmark=function(e,t){return jn(this,void 0,void 0,function(){var n,o,s,i,a,u,l;return qn(this,function(c){switch(c.label){case 0:return n=wk(t,Ik,e).imageTensor,o=["output_faceflag"].concat(this.withAttention?["output_mesh_identity","output_lips","Identity_6:0","Identity_1:0","Identity_2:0","Identity_5:0"]:["output_mesh"]),s=this.landmarkModel.execute(n,o),i=s[0],a=s.slice(1),[4,i.data()];case 1:return c.sent()[0]<.5?(Ge(s),Ge(n),[2,null]):this.withAttention?[4,this.tensorsToFaceLandmarksWithAttention(a)]:[3,3];case 2:return u=c.sent(),[3,5];case 3:return[4,this.tensorsToFaceLandmarks(a)];case 4:u=c.sent(),c.label=5;case 5:return l=function(p,m,f){f===void 0&&(f={ignoreRotation:!1});for(var d=[],y=0,x=p;y<x.length;y++){var b=x[y],$=b.x-.5,A=b.y-.5,O=f.ignoreRotation?0:m.rotation,M=Math.cos(O)*$-Math.sin(O)*A,G=Math.sin(O)*$+Math.cos(O)*A;M=M*m.width+m.xCenter,G=G*m.height+m.yCenter;var H=b.z*m.width,X=nn({},b);X.x=M,X.y=G,X.z=H,d.push(X)}return d}(u,e),Ge(s),Ge(n),[2,l]}})})},r.prototype.tensorsToFaceLandmarks=function(e){return jn(this,void 0,void 0,function(){return qn(this,function(t){return[2,ys(e[0],_y)]})})},r.prototype.tensorsToFaceLandmarksWithAttention=function(e){return jn(this,void 0,void 0,function(){var t,n,o,s,i,a;return qn(this,function(u){switch(u.label){case 0:return[4,ys(e[0],_y)];case 1:return t=u.sent(),[4,ys(e[1],$k)];case 2:return n=u.sent(),[4,ys(e[3],Ry)];case 3:return o=u.sent(),[4,ys(e[5],Ry)];case 4:return s=u.sent(),[4,ys(e[4],Oy)];case 5:return i=u.sent(),[4,ys(e[2],Oy)];case 6:return a=u.sent(),[2,Ck([t,n,o,s,i,a],[kk,Ak,_k,Rk,Ok,Fk])]}})})},r.prototype.faceLandmarksToRoi=function(e,t){return ky($y(_1(e),"boundingbox","normRect",t,{rotationVectorStartKeypointIndex:33,rotationVectorEndKeypointIndex:263,rotationVectorTargetAngleDegree:0}),t,Ay)},r}();function Pk(r){return jn(this,void 0,void 0,function(){var e,t,n,o;return qn(this,function(s){switch(s.label){case 0:return e=function(i){if(i==null)return nn({},k1);var a=nn({},i);return a.runtime="tfjs",a.maxFaces==null&&(a.maxFaces=k1.maxFaces),a.refineLandmarks==null&&(a.refineLandmarks=k1.refineLandmarks),a.landmarkModelUrl==null&&(a.landmarkModelUrl=a.refineLandmarks?"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/attention_mesh/1":"https://tfhub.dev/mediapipe/tfjs-model/face_landmarks_detection/face_mesh/1"),a}(r),t=typeof e.landmarkModelUrl=="string"&&e.landmarkModelUrl.indexOf("https://tfhub.dev")>-1,[4,tu(e.landmarkModelUrl,{fromTFHub:t})];case 1:return n=s.sent(),[4,xk(Bm.MediaPipeFaceDetector,{modelType:"short",maxFaces:e.maxFaces,detectorModelUrl:e.detectorModelUrl,runtime:e.runtime})];case 2:return o=s.sent(),[2,new Dk(o,n,e.maxFaces,e.refineLandmarks)]}})})}function zy(r,e){return jn(this,void 0,void 0,function(){var t,n;return qn(this,function(o){if(r===on.MediaPipeFaceMesh){if(n=void 0,(t=e)!=null){if(t.runtime==="tfjs")return[2,Pk(t)];if(t.runtime==="mediapipe")return[2,ek(t)];n=t.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+n)}throw new Error(r+" is not a supported model name.")})})}(function(r){r.MediaPipeFaceMesh="MediaPipeFaceMesh"})(on||(on={}));var Wy=Object.freeze({__proto__:null,getKeypointIndexByContour:function(r){if(r===on.MediaPipeFaceMesh)return Dy;throw new Error("Model "+r+" is not supported.")},getAdjacentPairs:function(r){if(r===on.MediaPipeFaceMesh)return Z$;throw new Error("Model "+r+" is not supported.")}});var gr=468,bs=5,R1="#32EEDB",O1="#FF2C35";var Mm={"640 X 480":{width:640,height:480},"640 X 360":{width:640,height:360},"360 X 270":{width:360,height:270}},Ky={camera:{targetFPS:60,sizeOption:"640 X 480"},backend:"",flags:{},modelConfig:{}};async function jy(){return zy(on.MediaPipeFaceMesh,{runtime:"mediapipe",refineLandmarks:!0,maxFaces:10,solutionPath:"https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4.1633559619"})}var jge={[on.MediaPipeFaceMesh]:["mediapipe-gpu","tfjs-webgl"]};var ru=[127,34,139,11,0,37,232,231,120,72,37,39,128,121,47,232,121,128,104,69,67,175,171,148,157,154,155,118,50,101,73,39,40,9,151,108,48,115,131,194,204,211,74,40,185,80,42,183,40,92,186,230,229,118,202,212,214,83,18,17,76,61,146,160,29,30,56,157,173,106,204,194,135,214,192,203,165,98,21,71,68,51,45,4,144,24,23,77,146,91,205,50,187,201,200,18,91,106,182,90,91,181,85,84,17,206,203,36,148,171,140,92,40,39,193,189,244,159,158,28,247,246,161,236,3,196,54,68,104,193,168,8,117,228,31,189,193,55,98,97,99,126,47,100,166,79,218,155,154,26,209,49,131,135,136,150,47,126,217,223,52,53,45,51,134,211,170,140,67,69,108,43,106,91,230,119,120,226,130,247,63,53,52,238,20,242,46,70,156,78,62,96,46,53,63,143,34,227,173,155,133,123,117,111,44,125,19,236,134,51,216,206,205,154,153,22,39,37,167,200,201,208,36,142,100,57,212,202,20,60,99,28,158,157,35,226,113,160,159,27,204,202,210,113,225,46,43,202,204,62,76,77,137,123,116,41,38,72,203,129,142,64,98,240,49,102,64,41,73,74,212,216,207,42,74,184,169,170,211,170,149,176,105,66,69,122,6,168,123,147,187,96,77,90,65,55,107,89,90,180,101,100,120,63,105,104,93,137,227,15,86,85,129,102,49,14,87,86,55,8,9,100,47,121,145,23,22,88,89,179,6,122,196,88,95,96,138,172,136,215,58,172,115,48,219,42,80,81,195,3,51,43,146,61,171,175,199,81,82,38,53,46,225,144,163,110,246,33,7,52,65,66,229,228,117,34,127,234,107,108,69,109,108,151,48,64,235,62,78,191,129,209,126,111,35,143,163,161,246,117,123,50,222,65,52,19,125,141,221,55,65,3,195,197,25,7,33,220,237,44,70,71,139,122,193,245,247,130,33,71,21,162,153,158,159,170,169,150,188,174,196,216,186,92,144,160,161,2,97,167,141,125,241,164,167,37,72,38,12,145,159,160,38,82,13,63,68,71,226,35,111,158,153,154,101,50,205,206,92,165,209,198,217,165,167,97,220,115,218,133,112,243,239,238,241,214,135,169,190,173,133,171,208,32,125,44,237,86,87,178,85,86,179,84,85,180,83,84,181,201,83,182,137,93,132,76,62,183,61,76,184,57,61,185,212,57,186,214,207,187,34,143,156,79,239,237,123,137,177,44,1,4,201,194,32,64,102,129,213,215,138,59,166,219,242,99,97,2,94,141,75,59,235,24,110,228,25,130,226,23,24,229,22,23,230,26,22,231,112,26,232,189,190,243,221,56,190,28,56,221,27,28,222,29,27,223,30,29,224,247,30,225,238,79,20,166,59,75,60,75,240,147,177,215,20,79,166,187,147,213,112,233,244,233,128,245,128,114,188,114,217,174,131,115,220,217,198,236,198,131,134,177,132,58,143,35,124,110,163,7,228,110,25,356,389,368,11,302,267,452,350,349,302,303,269,357,343,277,452,453,357,333,332,297,175,152,377,384,398,382,347,348,330,303,304,270,9,336,337,278,279,360,418,262,431,304,408,409,310,415,407,270,409,410,450,348,347,422,430,434,313,314,17,306,307,375,387,388,260,286,414,398,335,406,418,364,367,416,423,358,327,251,284,298,281,5,4,373,374,253,307,320,321,425,427,411,421,313,18,321,405,406,320,404,405,315,16,17,426,425,266,377,400,369,322,391,269,417,465,464,386,257,258,466,260,388,456,399,419,284,332,333,417,285,8,346,340,261,413,441,285,327,460,328,355,371,329,392,439,438,382,341,256,429,420,360,364,394,379,277,343,437,443,444,283,275,440,363,431,262,369,297,338,337,273,375,321,450,451,349,446,342,467,293,334,282,458,461,462,276,353,383,308,324,325,276,300,293,372,345,447,382,398,362,352,345,340,274,1,19,456,248,281,436,427,425,381,256,252,269,391,393,200,199,428,266,330,329,287,273,422,250,462,328,258,286,384,265,353,342,387,259,257,424,431,430,342,353,276,273,335,424,292,325,307,366,447,345,271,303,302,423,266,371,294,455,460,279,278,294,271,272,304,432,434,427,272,407,408,394,430,431,395,369,400,334,333,299,351,417,168,352,280,411,325,319,320,295,296,336,319,403,404,330,348,349,293,298,333,323,454,447,15,16,315,358,429,279,14,15,316,285,336,9,329,349,350,374,380,252,318,402,403,6,197,419,318,319,325,367,364,365,435,367,397,344,438,439,272,271,311,195,5,281,273,287,291,396,428,199,311,271,268,283,444,445,373,254,339,263,466,249,282,334,296,449,347,346,264,447,454,336,296,299,338,10,151,278,439,455,292,407,415,358,371,355,340,345,372,390,249,466,346,347,280,442,443,282,19,94,370,441,442,295,248,419,197,263,255,359,440,275,274,300,383,368,351,412,465,263,467,466,301,368,389,380,374,386,395,378,379,412,351,419,436,426,322,373,390,388,2,164,393,370,462,461,164,0,267,302,11,12,374,373,387,268,12,13,293,300,301,446,261,340,385,384,381,330,266,425,426,423,391,429,355,437,391,327,326,440,457,438,341,382,362,459,457,461,434,430,394,414,463,362,396,369,262,354,461,457,316,403,402,315,404,403,314,405,404,313,406,405,421,418,406,366,401,361,306,408,407,291,409,408,287,410,409,432,436,410,434,416,411,264,368,383,309,438,457,352,376,401,274,275,4,421,428,262,294,327,358,433,416,367,289,455,439,462,370,326,2,326,370,305,460,455,254,449,448,255,261,446,253,450,449,252,451,450,256,452,451,341,453,452,413,464,463,441,413,414,258,442,441,257,443,442,259,444,443,260,445,444,467,342,445,459,458,250,289,392,290,290,328,460,376,433,435,250,290,392,411,416,433,341,463,464,453,464,465,357,465,412,343,412,399,360,363,440,437,399,456,420,456,363,401,435,288,372,383,353,339,255,249,448,261,255,133,243,190,133,155,112,33,246,247,33,130,25,398,384,286,362,398,414,362,463,341,263,359,467,263,249,255,466,467,260,75,60,166,238,239,79,162,127,139,72,11,37,121,232,120,73,72,39,114,128,47,233,232,128,103,104,67,152,175,148,173,157,155,119,118,101,74,73,40,107,9,108,49,48,131,32,194,211,184,74,185,191,80,183,185,40,186,119,230,118,210,202,214,84,83,17,77,76,146,161,160,30,190,56,173,182,106,194,138,135,192,129,203,98,54,21,68,5,51,4,145,144,23,90,77,91,207,205,187,83,201,18,181,91,182,180,90,181,16,85,17,205,206,36,176,148,140,165,92,39,245,193,244,27,159,28,30,247,161,174,236,196,103,54,104,55,193,8,111,117,31,221,189,55,240,98,99,142,126,100,219,166,218,112,155,26,198,209,131,169,135,150,114,47,217,224,223,53,220,45,134,32,211,140,109,67,108,146,43,91,231,230,120,113,226,247,105,63,52,241,238,242,124,46,156,95,78,96,70,46,63,116,143,227,116,123,111,1,44,19,3,236,51,207,216,205,26,154,22,165,39,167,199,200,208,101,36,100,43,57,202,242,20,99,56,28,157,124,35,113,29,160,27,211,204,210,124,113,46,106,43,204,96,62,77,227,137,116,73,41,72,36,203,142,235,64,240,48,49,64,42,41,74,214,212,207,183,42,184,210,169,211,140,170,176,104,105,69,193,122,168,50,123,187,89,96,90,66,65,107,179,89,180,119,101,120,68,63,104,234,93,227,16,15,85,209,129,49,15,14,86,107,55,9,120,100,121,153,145,22,178,88,179,197,6,196,89,88,96,135,138,136,138,215,172,218,115,219,41,42,81,5,195,51,57,43,61,208,171,199,41,81,38,224,53,225,24,144,110,105,52,66,118,229,117,227,34,234,66,107,69,10,109,151,219,48,235,183,62,191,142,129,126,116,111,143,7,163,246,118,117,50,223,222,52,94,19,141,222,221,65,196,3,197,45,220,44,156,70,139,188,122,245,139,71,162,145,153,159,149,170,150,122,188,196,206,216,92,163,144,161,164,2,167,242,141,241,0,164,37,11,72,12,144,145,160,12,38,13,70,63,71,31,226,111,157,158,154,36,101,205,203,206,165,126,209,217,98,165,97,237,220,218,237,239,241,210,214,169,140,171,32,241,125,237,179,86,178,180,85,179,181,84,180,182,83,181,194,201,182,177,137,132,184,76,183,185,61,184,186,57,185,216,212,186,192,214,187,139,34,156,218,79,237,147,123,177,45,44,4,208,201,32,98,64,129,192,213,138,235,59,219,141,242,97,97,2,141,240,75,235,229,24,228,31,25,226,230,23,229,231,22,230,232,26,231,233,112,232,244,189,243,189,221,190,222,28,221,223,27,222,224,29,223,225,30,224,113,247,225,99,60,240,213,147,215,60,20,166,192,187,213,243,112,244,244,233,245,245,128,188,188,114,174,134,131,220,174,217,236,236,198,134,215,177,58,156,143,124,25,110,7,31,228,25,264,356,368,0,11,267,451,452,349,267,302,269,350,357,277,350,452,357,299,333,297,396,175,377,381,384,382,280,347,330,269,303,270,151,9,337,344,278,360,424,418,431,270,304,409,272,310,407,322,270,410,449,450,347,432,422,434,18,313,17,291,306,375,259,387,260,424,335,418,434,364,416,391,423,327,301,251,298,275,281,4,254,373,253,375,307,321,280,425,411,200,421,18,335,321,406,321,320,405,314,315,17,423,426,266,396,377,369,270,322,269,413,417,464,385,386,258,248,456,419,298,284,333,168,417,8,448,346,261,417,413,285,326,327,328,277,355,329,309,392,438,381,382,256,279,429,360,365,364,379,355,277,437,282,443,283,281,275,363,395,431,369,299,297,337,335,273,321,348,450,349,359,446,467,283,293,282,250,458,462,300,276,383,292,308,325,283,276,293,264,372,447,346,352,340,354,274,19,363,456,281,426,436,425,380,381,252,267,269,393,421,200,428,371,266,329,432,287,422,290,250,328,385,258,384,446,265,342,386,387,257,422,424,430,445,342,276,422,273,424,306,292,307,352,366,345,268,271,302,358,423,371,327,294,460,331,279,294,303,271,304,436,432,427,304,272,408,395,394,431,378,395,400,296,334,299,6,351,168,376,352,411,307,325,320,285,295,336,320,319,404,329,330,349,334,293,333,366,323,447,316,15,315,331,358,279,317,14,316,8,285,9,277,329,350,253,374,252,319,318,403,351,6,419,324,318,325,397,367,365,288,435,397,278,344,439,310,272,311,248,195,281,375,273,291,175,396,199,312,311,268,276,283,445,390,373,339,295,282,296,448,449,346,356,264,454,337,336,299,337,338,151,294,278,455,308,292,415,429,358,355,265,340,372,388,390,466,352,346,280,295,442,282,354,19,370,285,441,295,195,248,197,457,440,274,301,300,368,417,351,465,251,301,389,385,380,386,394,395,379,399,412,419,410,436,322,387,373,388,326,2,393,354,370,461,393,164,267,268,302,12,386,374,387,312,268,13,298,293,301,265,446,340,380,385,381,280,330,425,322,426,391,420,429,437,393,391,326,344,440,438,458,459,461,364,434,394,428,396,262,274,354,457,317,316,402,316,315,403,315,314,404,314,313,405,313,421,406,323,366,361,292,306,407,306,291,408,291,287,409,287,432,410,427,434,411,372,264,383,459,309,457,366,352,401,1,274,4,418,421,262,331,294,358,435,433,367,392,289,439,328,462,326,94,2,370,289,305,455,339,254,448,359,255,446,254,253,449,253,252,450,252,256,451,256,341,452,414,413,463,286,441,414,286,258,441,258,257,442,257,259,443,259,260,444,260,467,445,309,459,250,305,289,290,305,290,460,401,376,435,309,250,392,376,411,433,453,341,464,357,453,465,343,357,412,437,343,399,344,360,440,420,437,456,360,420,363,361,401,288,265,372,353,390,339,249,339,448,255];function Lk(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)}function Bk(){return/Android/i.test(navigator.userAgent)}function F1(){return Bk()||Lk()}function Vm(r,e){return Math.sqrt(Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2))}function qy(r,e,t){let n=new Path2D;n.moveTo(e[0][0],e[0][1]);for(let o=1;o<e.length;o++){let s=e[o];n.lineTo(s[0],s[1])}t&&n.closePath(),r.stroke(n)}function Xy(r,e,t,n){e.forEach(o=>{let s=o.keypoints.map(a=>[a.x,a.y]);if(n){r.strokeStyle=O1,r.lineWidth=1;let a=o.box;qy(r,[[a.xMin,a.yMin],[a.xMax,a.yMin],[a.xMax,a.yMax],[a.xMin,a.yMax]],!0)}if(t){r.strokeStyle=R1,r.lineWidth=.5;for(let a=0;a<ru.length/3;a++){let u=[ru[a*3],ru[a*3+1],ru[a*3+2]].map(l=>s[l]);qy(r,u,!0)}}else{r.fillStyle=R1;for(let a=0;a<gr;a++){let u=s[a][0],l=s[a][1];r.beginPath(),r.arc(u,l,1,0,2*Math.PI),r.fill()}}if(s.length>gr){r.strokeStyle=O1,r.lineWidth=1;let a=s[gr],u=Vm(s[gr+4],s[gr+2]),l=Vm(s[gr+3],s[gr+1]);if(r.beginPath(),r.ellipse(a[0],a[1],l/2,u/2,0,0,2*Math.PI),r.stroke(),s.length>gr+bs){let c=s[gr+bs],p=Vm(s[gr+bs+2],s[gr+bs+4]),m=Vm(s[gr+bs+3],s[gr+bs+1]);r.beginPath(),r.ellipse(c[0],c[1],m/2,p/2,0,0,2*Math.PI),r.stroke()}}let i=Wy.getKeypointIndexByContour(on.MediaPipeFaceMesh)})}function Yy(){return{attention:0,happiness:0,tiredness:0,amazement:0,involvement:0}}var Fi=class{constructor(e,t){ze(this,"video");ze(this,"canvas");ze(this,"ctx");var n;this.video=e,this.canvas=t,this.ctx=(n=this.canvas)==null?void 0:n.getContext("2d")}static async setupCamera(e,t,n){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw console.log("notSupport"),new Error("Browser API navigator.mediaDevices.getUserMedia not available");let{targetFPS:o,sizeOption:s}=e,i=Mm["640 X 480"],a={audio:!1,video:{facingMode:"user",width:F1()?Mm["360 X 270"].width:i.width,height:F1()?Mm["360 X 270"].height:i.height,frameRate:{ideal:o}}},u=new Fi(t,n),l=u.video.videoWidth,c=u.video.videoHeight;if(u.video.width=l,u.video.height=c,u.canvas&&u.ctx){u.canvas.width=l,u.canvas.height=c;let p=document.querySelector(".canvas-wrapper");u.ctx.translate(u.video.videoWidth,0),u.ctx.scale(-1,1)}return u}drawCtx(){this.ctx&&this.ctx.drawImage(this.video,0,0,this.video.videoWidth,this.video.videoHeight)}drawResults(e,t,n){this.ctx&&Xy(this.ctx,e,t,n)}};var D1=[123,352],P1=[199,151];var L1=[159,145];var B1=[386,374],M1=[107,336],Zy=[168],V1=[11,16],U1=[61,291];var St=class{constructor(e,t,n){ze(this,"x");ze(this,"y");ze(this,"z");this.x=e,this.y=t,this.z=n}static fromKeyPoint(e){if(e.z===void 0)throw new Error("Only 3D vectors allowed");return new St(e.x,e.y,e.z)}minus(e){return new St(this.x-e.x,this.y-e.y,this.z-e.z)}plus(e){return new St(this.x+e.x,this.y+e.y,this.z+e.z)}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}getLength(){return Math.sqrt(this.dot(this))}},xr=class{constructor(e,t){ze(this,"x");ze(this,"y");this.x=e,this.y=t}static fromVector3D(e){return new xr(e.x,e.y)}static fromKeyPoint(e){return new xr(e.x,e.y)}minus(e){return new xr(this.x-e.x,this.y-e.y)}plus(e){return new xr(this.x+e.x,this.y+e.y)}dot(e){return this.x*e.x+this.y*e.y}getLength(){return Math.sqrt(this.dot(this))}};function G1(r,e){let t=r.dot(e)/(r.getLength()*e.getLength());return Math.acos(t)*180/Math.PI}function Um(r,e,t){return Math.min(Math.max(r,e),t)}function z1(r,e){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}var Gm=class{constructor(){ze(this,"everySecondAttention",!0);ze(this,"tiredness",0);ze(this,"happiness",0);ze(this,"amazement",0);ze(this,"eyesClosed",!1);ze(this,"eyesClosedFrames",0);ze(this,"eyesClosedTime",new Date);ze(this,"blinkTime",0);ze(this,"blinks",0);ze(this,"blinked",!1);ze(this,"isMouthOpened",!1);ze(this,"yawns",0);ze(this,"headHeight",0);ze(this,"initialHeadHeight",null);ze(this,"initialIrisesSize",null);ze(this,"zeroAttnetionCounter",0);ze(this,"zeroAttentionTime",0);ze(this,"lastAttentioLostTime",new Date);ze(this,"isCountingLostAttentionPeriod",!1);ze(this,"lastMinuteIndexes",[]);ze(this,"lastSecondIndexes",[]);ze(this,"lastMinuteBlinks",0);ze(this,"CONSTANTS",{DEFAULT:{BLINKS_IN_MINUTE:10,BLINKS_TIME:200,SMILE_SIZE:60,EYEBROWS_HEIGHT:25,OPENED_EYES_HEIGHT:2.5},MAX:{SMILE_SIZE:70,EYEBROWS_HEIGHT:30,HEAD_MAX_ANGLE:36}})}calculateIndexes(e){let t=Yy();if(e===void 0){this.handleNotAtScreen();let f=Gh(wa({},t),{presence:!1,statistic:{headAngleOX:-1,headAngleOY:-1,eyesClosedFrames:this.eyesClosedFrames,blinks:this.blinks,blinkTime:this.blinkTime,eyebrowsHeight:{left:-1,right:-1},yawns:this.yawns,smile:-1,attentionLostTimes:this.zeroAttnetionCounter,attentionLostMillieseconds:this.zeroAttentionTime,everySecondAttention:this.everySecondAttention,pupilDistance:{left:0,right:0},lookingDirection:void 0}});return this.updateCache(f),f}let n=this.calculateHeadOXAngle(e),o=this.calculateHeadOYAngle(e),s=this.calculateEyebrowsHeight(e),i=this.calculateSmile(e),a=this.calculateEyesHeight(e),u=this.CONSTANTS.MAX.HEAD_MAX_ANGLE,l=this.calculateIrisesDiameterX(e),c=this.lookingDirection(e),p=1;if(this.initialHeadHeight!==null){let f=this.headHeight/this.initialHeadHeight;l={left:l.left/f,right:l.right/f},p=this.calculateMomentAttention(l,c,n)?1:0,this.CONSTANTS.DEFAULT.SMILE_SIZE=this.initialHeadHeight*.4,this.CONSTANTS.MAX.SMILE_SIZE=this.initialHeadHeight*.45,this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT=this.initialHeadHeight*.18,this.CONSTANTS.MAX.EYEBROWS_HEIGHT=this.initialHeadHeight*.22,i=i/f,s={left:s.left/f,right:s.right/f},a={left:a.left/f,right:a.right/f}}this.handleAttention(p),this.calculateAmazement(s),this.calculateHappiness(i),this.handleEyes(a),this.handleYawn(e),p===0&&(this.happiness=0,this.amazement=0),t=this.exportingIndex(),t.attention=p;let m=Gh(wa({},t),{presence:p===1,statistic:{headAngleOX:n,headAngleOY:o,eyesClosedFrames:this.eyesClosedFrames,blinks:this.blinks,blinkTime:this.blinkTime,eyebrowsHeight:s,yawns:this.yawns,smile:i,attentionLostTimes:this.zeroAttnetionCounter,attentionLostMillieseconds:this.zeroAttentionTime,everySecondAttention:this.everySecondAttention,pupilDistance:l,lookingDirection:c}});return this.updateCache(m),m}calculateHeadOXAngle(e){let t=St.fromKeyPoint(e.keypoints[D1[0]]),o=St.fromKeyPoint(e.keypoints[D1[1]]).minus(t);o.y=0;let s=new St(1,0,0);return G1(o,s)}calculateEyesHeight(e){let t=xr.fromKeyPoint(e.keypoints[B1[0]]),n=xr.fromKeyPoint(e.keypoints[B1[1]]),o=xr.fromKeyPoint(e.keypoints[L1[0]]),s=xr.fromKeyPoint(e.keypoints[L1[1]]),i=t.minus(n),a=o.minus(s),u=i.getLength(),l=a.getLength();return{left:u,right:l}}handleEyes(e){let{left:t,right:n}=e,o=this.CONSTANTS.DEFAULT.OPENED_EYES_HEIGHT,s=t<o,i=n<o,a=s&&i;a&&!this.eyesClosed?(this.eyesClosed=!0,this.eyesClosedFrames=0,this.eyesClosedTime=new Date):a&&this.eyesClosed?this.eyesClosedFrames++:this.eyesClosed&&(this.eyesClosed=!1,this.eyesClosedFrames<15&&(this.blinks++,this.blinkTime=new Date().getTime()-this.eyesClosedTime.getTime(),this.blinked=!0))}calculateEyebrowsHeight(e){let t=St.fromKeyPoint(e.keypoints[M1[0]]),n=St.fromKeyPoint(e.keypoints[M1[1]]),o=St.fromKeyPoint(e.keypoints[Zy[0]]),s=n.minus(o),i=t.minus(o);return{left:s.getLength(),right:i.getLength()}}handleYawn(e){let t=St.fromKeyPoint(e.keypoints[V1[0]]),n=St.fromKeyPoint(e.keypoints[V1[1]]),o=t.minus(n).getLength();o>30&&!this.isMouthOpened&&(this.isMouthOpened=!0),o<=30&&this.isMouthOpened&&(this.yawns++,this.isMouthOpened=!1)}calculateSmile(e){let t=St.fromKeyPoint(e.keypoints[U1[0]]),n=St.fromKeyPoint(e.keypoints[U1[1]]);return t.minus(n).getLength()}handleAttention(e){if(this.blinked){this.isCountingLostAttentionPeriod=!1,this.blinked=!1;return}e===0&&!this.isCountingLostAttentionPeriod&&(this.lastAttentioLostTime=new Date,this.isCountingLostAttentionPeriod=!0),e===1&&this.isCountingLostAttentionPeriod&&(this.isCountingLostAttentionPeriod=!1,this.zeroAttentionTime+=new Date().getTime()-this.lastAttentioLostTime.getTime(),this.zeroAttnetionCounter++)}handleNotAtScreen(){this.blinked=!1,this.handleAttention(0)}calculateTiredness(){let e=this.lastMinuteIndexes[this.lastMinuteIndexes.length-1].statistic.blinks-this.lastMinuteBlinks;this.lastMinuteBlinks+=e;let t=this.lastMinuteIndexes.reduce((o,s)=>o+s.statistic.blinkTime,0)/this.lastMinuteIndexes.length,n=.2*((e-this.CONSTANTS.DEFAULT.BLINKS_IN_MINUTE)/this.CONSTANTS.DEFAULT.BLINKS_IN_MINUTE)+.8*((t-this.CONSTANTS.DEFAULT.BLINKS_TIME)/this.CONSTANTS.DEFAULT.BLINKS_TIME);n*=100,n=Um(n,0,100),this.tiredness=Math.round(n/20)}calculateHappiness(e){let t=e-this.CONSTANTS.DEFAULT.SMILE_SIZE,n=this.CONSTANTS.MAX.SMILE_SIZE-this.CONSTANTS.DEFAULT.SMILE_SIZE;this.happiness=Math.round(t/n*100),this.happiness=Um(this.happiness,0,100)}calculateAmazement(e){let{left:t,right:n}=e,s=Math.max(t,n)-this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT,i=this.CONSTANTS.MAX.EYEBROWS_HEIGHT-this.CONSTANTS.DEFAULT.EYEBROWS_HEIGHT;this.amazement=Math.round(s/i*100),this.amazement=Um(this.amazement,0,100)}updateCache(e){this.lastSecondIndexes.push(e),this.lastMinuteIndexes.push(e)}calculateHeadOYAngle(e){let t=St.fromKeyPoint(e.keypoints[P1[1]]),n=St.fromKeyPoint(e.keypoints[P1[0]]),o=t.minus(n),s=new St(0,1,0),i=xr.fromVector3D(t),a=xr.fromVector3D(n);return this.headHeight=i.minus(a).getLength(),this.initialHeadHeight===null&&(this.initialHeadHeight=this.headHeight),o.x=0,180-G1(o,s)}calculateAttention(){this.lastSecondIndexes.reduce((t,n)=>t+n.attention,0)/this.lastSecondIndexes.length>.5?this.everySecondAttention=!0:this.everySecondAttention=!1}exportingIndex(){return{attention:Number(this.everySecondAttention),happiness:this.happiness,tiredness:this.tiredness,amazement:this.amazement,involvement:0}}calculateIrisesDiameterX(e){let t=z1(e.keypoints[471],e.keypoints[469]),n=z1(e.keypoints[468+5+3],e.keypoints[468+5+1]);return this.initialIrisesSize||(this.initialIrisesSize=Math.floor(Math.min(n,t))-2),{left:n,right:t}}calculateMomentAttention(e,t,n){if(!this.initialIrisesSize)return!1;let{left:o,right:s}=e,i=this.initialIrisesSize;return n<24&&(i+=1.8),t==="left"&&s>=i||t==="right"&&o>=i}lookingDirection(e){let t=e.keypoints[123],n=e.keypoints[152];return t.z<n.z?"left":"right"}handleSecond(){return this.calculateAttention(),this.lastSecondIndexes=[],this.exportingIndex()}handleMinute(){this.calculateTiredness(),this.lastMinuteIndexes=[]}};var Mk=["attention","amazement","happiness","tiredness","involvement"],Vk={attention:"\u0412\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",amazement:"\u0423\u0434\u0438\u0432\u043B\u0435\u043D\u0438\u0435",happiness:"\u042D\u043C\u043E\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C",tiredness:"\u0423\u0442\u043E\u043C\u043B\u044F\u0435\u043C\u043E\u0441\u0442\u044C",involvement:"\u0412\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u043D\u043E\u0441\u0442\u044C"},Uk={attention:"rgb(24, 113, 248)",amazement:"rgb(125, 128, 135)",happiness:"rgb(255, 157, 10)",tiredness:"rgb(250, 85, 85)",involvement:"rgb(180, 106, 238)"},f0e=Object.fromEntries(Mk.map(r=>[r,{title:Vk[r],color:Uk[r]}])),Qy={attention:0,happiness:0,tiredness:0,amazement:0,involvement:0,presence:!1,faces:0,activeFaces:0,attentions:[],statistic:{headAngleOX:-1,headAngleOY:-1,eyesClosedFrames:0,blinks:0,blinkTime:0,eyebrowsHeight:{left:-1,right:-1},yawns:0,smile:-1,attentionLostTimes:0,attentionLostMillieseconds:0,everySecondAttention:!1}};var nu,Di,vs,Jy;async function Gk(r){Di.video.readyState<2&&await new Promise(t=>{Di.video.onloadeddata=()=>{t(!0)}});let e=null;if(nu!=null)try{if(e=await nu.estimateFaces(Di.video,{flipHorizontal:!1}),e.length!==0){let t=0,n=[];for(let i of e){let a=vs.calculateIndexes(i);a.attention===1&&(t+=1),n.push(a.attention)}let o=vs.calculateIndexes(e[0]),s=wa({faces:e.length,activeFaces:t,attentions:n},o);r(s)}else r(Qy)}catch(t){nu.dispose(),nu=null,alert(t)}Di.drawCtx(),e&&e.length>0&&Di.drawResults(e,!0,!0)}async function eb(){await Gk(Jy),requestAnimationFrame(eb)}async function tb(r,e,t=n=>{console.table(n)}){Jy=t,Di=await Fi.setupCamera(Ky.camera,r,e),nu=await jy(),vs=new Gm,eb()}function rb(){if(vs)return vs.handleSecond()}function nb(){vs&&vs.handleMinute()}var ws={},zm={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function ob(r,e){ws[r]=e}function yr(r,e){if(!(r in ws)||e!=null){let n=Wk(r,e);if(n!==null)ws[r]=n;else return console.log("Could not get context for WebGL version",r),null}let t=ws[r];return t==null||t.isContextLost()?(delete ws[r],yr(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),ws[r])}function zk(r){if(typeof OffscreenCanvas<"u"&&r===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function Wk(r,e){if(r!==1&&r!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let t=e==null?zk(r):e;return t.addEventListener("webglcontextlost",n=>{n.preventDefault(),delete ws[r]},!1),U().getBool("SOFTWARE_WEBGL_ENABLED")&&(zm.failIfMajorPerformanceCaveat=!1),r===1?t.getContext("webgl",zm)||t.getContext("experimental-webgl",zm):t.getContext("webgl2",zm)}var $o;(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})($o||($o={}));var Ot;(function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"})(Ot||(Ot={}));var kt;(function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(kt||(kt={}));function Ts(r,e){return[e,r]}function sb(r,e){return r*e}function ou(r){let e=N.sizeFromShape(r),t=Math.ceil(e/4);return N.sizeToSquarishShape(t)}function Nn(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function ib(r,e){let[t,n]=Nn(r,e);return t*n*4}function su(r,e){let t=r,n,o,s,i,a,u,l,c,p,m;return U().getNumber("WEBGL_VERSION")===2?(n=t.R32F,o=t.R16F,s=t.RGBA16F,i=t.RGBA32F,a=t.RED,l=4,c=1,p=t.HALF_FLOAT,m=t.FLOAT,u=t.RGBA8):(n=r.RGBA,o=r.RGBA,s=r.RGBA,i=t.RGBA,a=r.RGBA,l=4,c=4,p=e!=null?e.HALF_FLOAT_OES:null,m=r.FLOAT,u=r.RGBA),{internalFormatFloat:n,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:u,downloadUnpackNumChannels:l,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:m}}function le(r,e){let t=e();return U().getBool("DEBUG")&&Hk(r),t}function Hk(r){let e=r.getError();if(e!==r.NO_ERROR)throw new Error("WebGL Error: "+qk(r,e))}var Kk=596e-10,jk=65504;function ab(r){return!!(U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Kk<Math.abs(r)&&Math.abs(r)<jk)}function qk(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function iu(r,e){return Zn(r,()=>r.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function ub(r,e){let t=Zn(r,()=>r.createShader(r.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(le(r,()=>r.shaderSource(t,e)),le(r,()=>r.compileShader(t)),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function lb(r,e){let t=Zn(r,()=>r.createShader(r.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(le(r,()=>r.shaderSource(t,e)),le(r,()=>r.compileShader(t)),U().get("ENGINE_COMPILE_ONLY"))return t;if(r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw q1(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var Xk=/ERROR: [0-9]+:([0-9]+):/g;function q1(r,e){let t=Xk.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(r);return}let n=+t[1],o=r.split(`
`),s=o.length.toString().length+2,i=o.map((p,m)=>N.rightPad((m+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let u=i.slice(0,n-1),l=i.slice(n-1,n),c=i.slice(n);console.log(u.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${N.rightPad(l[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function cb(r){return Zn(r,()=>r.createProgram(),"Unable to create WebGLProgram.")}function pb(r,e){if(le(r,()=>r.linkProgram(e)),!U().get("ENGINE_COMPILE_ONLY")&&r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Hm(r,e){if(le(r,()=>r.validateProgram(e)),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function mb(r,e){let t=Zn(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return le(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),le(r,()=>r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function fb(r,e){let t=Zn(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return le(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)),le(r,()=>r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function hb(r){return Zn(r,()=>r.createTexture(),"Unable to create WebGLTexture.")}function db(r,e){let t=U().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){let n=`[${r}x${e}]`;throw new Error("Requested texture size "+n+" is invalid.")}if(r>t||e>t){let n=`[${r}x${e}]`,o=`[${t}x${t}]`;throw new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+o+".")}}function gb(r){return Zn(r,()=>r.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function X1(r,e,t,n,o,s,i){let a=r.getAttribLocation(e,t);return a===-1?!1:(le(r,()=>r.bindBuffer(r.ARRAY_BUFFER,n)),le(r,()=>r.vertexAttribPointer(a,o,r.FLOAT,!1,s,i)),le(r,()=>r.enableVertexAttribArray(a)),!0)}function Yk(r,e,t){Qk(r,t),le(r,()=>r.activeTexture(r.TEXTURE0+t)),le(r,()=>r.bindTexture(r.TEXTURE_2D,e))}function xb(r,e,t){return Zn(r,()=>r.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function yb(r,e,t){return r.getUniformLocation(e,t)}function bb(r,e,t,n){le(r,()=>Yk(r,e,n)),le(r,()=>r.uniform1i(t,n))}function Km(r,e,t){le(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,t)),le(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0))}function Y1(r,e){le(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,e)),le(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0))}function au(r){let e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Zk(r,e))}function Zk(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Zn(r,e,t){let n=le(r,()=>e());if(n==null)throw new Error(t);return n}function Qk(r,e){let t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=e+r.TEXTURE0;if(n<r.TEXTURE0||n>t){let o=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${o}.`)}}function ko(r,e=2){return N.sizeFromShape(r.slice(0,r.length-e))}function Ao(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function uu(r){let e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[ko(r),...Ao(r)]),e}function vb(r,e=!1){let t=U().getNumber("WEBGL_MAX_TEXTURE_SIZE"),n=U().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");n===1/0&&U().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(n=t/2),e&&(t=t*2,n=n*2,r=r.map((a,u)=>u>=r.length-2?N.nearestLargerEven(r[u]):r[u]),r.length===1&&(r=[2,r[0]])),r.length!==2&&(r=N.squeezeShape(r).newShape);let o=N.sizeFromShape(r),s=null;r.length<=1&&o<=t?s=[1,o]:r.length===2&&r[0]<=t&&r[1]<=t?s=r:r.length===3&&r[0]*r[1]<=t&&r[2]<=t?s=[r[0]*r[1],r[2]]:r.length===3&&r[0]<=t&&r[1]*r[2]<=t?s=[r[0],r[1]*r[2]]:r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t?s=[r[0]*r[1]*r[2],r[3]]:r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t&&(s=[r[0],r[1]*r[2]*r[3]]);let i=s!=null&&Math.max(...s)>n&&Math.min(...s)<=(e?2:1)&&Math.min(...s)>0;if(s==null||i)if(e){let a=ko(r),u=2,l=2;r.length&&([u,l]=Ao(r)),o=a*(u/2)*(l/2),s=N.sizeToSquarishShape(o).map(c=>c*2)}else s=N.sizeToSquarishShape(o);return s}function Wm(r){return r%2===0}function Ss(r,e){if(r=r.slice(-2),e=e.slice(-2),N.arraysEqual(r,e)||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){let t=r.slice(-1)[0],n=e.slice(-1)[0];if(t===n||Wm(t)&&Wm(n)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&Wm(r[0])&&Wm(e[0])}var H1,K1;function wb(r){if(H1==null){let e=yr(r);H1=e.getParameter(e.MAX_TEXTURE_SIZE)}return H1}function Tb(r){if(K1==null){let e=yr(r);K1=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,K1)}function Sb(r){if(r===0)return 0;let e,t=yr(r);return _r(t,"EXT_disjoint_timer_query_webgl2")&&r===2?e=2:_r(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function _r(r,e){return r.getExtension(e)!=null}function Z1(r){try{if(yr(r)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function Cb(r){if(r===0)return!1;let e=yr(r);if(r===1){if(!_r(e,"OES_texture_float"))return!1}else if(!_r(e,"EXT_color_buffer_float"))return!1;return j1(e)}function Eb(r){if(r===0)return!1;let e=yr(r);if(r===1){if(!_r(e,"OES_texture_float")||!_r(e,"WEBGL_color_buffer_float"))return!1}else{if(_r(e,"EXT_color_buffer_float"))return j1(e);let n="EXT_color_buffer_half_float";if(_r(e,n)){let o=e.getExtension(n);return Jk(e,o)}return!1}return j1(e)}function j1(r){let e=su(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t);let n=1,o=1;r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,n,o,0,e.textureFormatFloat,e.textureTypeFloat,null);let s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);let i=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(s),i}function Jk(r,e){let t=su(r,e),n=r.createTexture();r.bindTexture(r.TEXTURE_2D,n);let o=1,s=1;r.texImage2D(r.TEXTURE_2D,0,t.internalFormatHalfFloat,o,s,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);let i=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0);let a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(n),r.deleteFramebuffer(i),a}function Nb(r){return r!==2?!1:yr(r).fenceSync!=null}function In(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&N.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}var xe=U();xe.registerFlag("HAS_WEBGL",()=>xe.getNumber("WEBGL_VERSION")>0);xe.registerFlag("WEBGL_VERSION",()=>Z1(2)?2:Z1(1)?1:0);xe.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);xe.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>xe.get("WEBGL_VERSION")===2);xe.registerFlag("WEBGL_CPU_FORWARD",()=>!0);xe.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);xe.registerFlag("WEBGL_PACK",()=>xe.getBool("HAS_WEBGL"));xe.registerFlag("WEBGL_PACK_NORMALIZATION",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_CLIP",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_PACK_REDUCE",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_LAZILY_UNPACK",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_CONV_IM2COL",()=>xe.getBool("WEBGL_PACK"));xe.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>wb(xe.getNumber("WEBGL_VERSION")));xe.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Tb(xe.getNumber("WEBGL_VERSION")));xe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let r=xe.getNumber("WEBGL_VERSION");return r===0?0:Sb(r)});xe.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>xe.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!fo.isMobile());xe.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Cb(xe.getNumber("WEBGL_VERSION")));xe.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>xe.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:xe.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));xe.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Eb(xe.getNumber("WEBGL_VERSION")));xe.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Nb(xe.getNumber("WEBGL_VERSION")));xe.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>xe.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);xe.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,r=>{if(r<0&&r!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${r}.`)});xe.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>fo.isMobile()?1:-1,r=>{if(r<0&&r!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${r}.`)});xe.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);xe.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);xe.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);xe.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);xe.registerFlag("WEBGL_EXP_CONV",()=>!1);xe.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>xe.getBool("IS_TEST"));xe.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);xe.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);xe.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);xe.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function rt(){let r,e,t,n,o,s,i,a,u,l;return U().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",n="in",o="texture",s="outputColor",i="out vec4 outputColor;",a=U().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",u="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",e="attribute",t="varying",n="varying",o="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:e,varyingVs:t,varyingFs:n,texture2D:o,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:u,defineRound:l}}function sn(r,e,t="index"){let n=N.computeStrides(e);return n.map((o,s)=>{let i=`int ${r[s]} = ${t} / ${o}`,a=s===n.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * ${o}`:`index -= ${r[s]} * ${o}`;return`${i}; ${a};`}).join("")}function Cs(r,e,t="index"){let n=N.computeStrides(e);return n.map((o,s)=>{let i=`int ${r[s]} = ${t} / outShapeStrides[${s}]`,a=s===n.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * outShapeStrides[${s}]`:`index -= ${r[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function eA(r,e){let t=r.length,n=r.map(s=>`${e}[${s}]`),o=new Array(t-1);o[t-2]=n[t-1];for(let s=t-3;s>=0;--s)o[s]=`(${o[s+1]} * ${n[s+1]})`;return o}function Ib(r,e,t="index"){let n=r.map((s,i)=>i),o=eA(n,e);return o.map((s,i)=>{let a=`int ${r[i]} = ${t} / ${o[i]}`,u=i===o.length-1?`int ${r[i+1]} = ${t} - ${r[i]} * ${o[i]}`:`index -= ${r[i]} * ${o[i]}`;return`${a}; ${u};`}).join("")}function Pi(r){let e=N.computeStrides(r).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function Li(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var qm=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:$b}=B;function kb(r,e,t){let n=[];if(r.forEach(f=>{let d=N.sizeFromShape(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?n.push(`uniform float ${f.name}${d>1?`[${d}]`:""};`):(n.push(`uniform sampler2D ${f.name};`),n.push(`uniform int offset${f.name};`)),t.enableShapeUniforms){let{uniformShape:y}=Xm(t.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(y.length){case 1:n.push(`uniform int ${f.name}Shape;`);break;case 2:n.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:n.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:n.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}n.push(`uniform ivec2 ${f.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:n.push("uniform int outShape;");break;case 2:n.push("uniform ivec2 outShape;"),n.push("uniform int outShapeStrides;");break;case 3:n.push("uniform ivec3 outShape;"),n.push("uniform ivec2 outShapeStrides;");break;case 4:n.push("uniform ivec4 outShape;"),n.push("uniform ivec3 outShapeStrides;");break;default:break}n.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(f=>{n.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});let o=n.join(`
`),s=r.map(f=>tA(f,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),i=e.texShape,a=rt(),u=oA(a),l,c,p=aA(a);return e.isPacked?(l=rA(e.logicalShape,i,t.enableShapeUniforms),c=iA(a)):(l=nA(e.logicalShape,i,t.enableShapeUniforms),c=sA(a)),t.packedInputs&&(p+=pA),[p,u,c,o,l,s,t.userCode].join(`
`)}function Mi(r,e=!1){let t=r.shapeInfo.logicalShape;switch(t.length){case 0:return SA(r,e);case 1:return EA(r,e);case 2:return IA(r,e);case 3:return kA(r,e);case 4:return _A(r,e);case 5:return RA(r);case 6:return OA(r);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function Ab(r,e){switch(r.shapeInfo.logicalShape.length){case 0:return TA(r);case 1:return CA(r,e);case 2:return NA(r,e);case 3:return $A(r,e);default:return AA(r,e)}}function tA(r,e,t=!1,n){let o="";t?o+=Ab(r,n):o+=Mi(r,n);let s=r.shapeInfo.logicalShape,i=e.logicalShape;return s.length<=i.length&&(t?o+=FA(r,e):o+=DA(r,e)),o}function rA(r,e,t){switch(r.length){case 0:return _b();case 1:return mA(r,e,t);case 2:return vA(r,e,t);case 3:return hA(r,e,t);default:return gA(r,e,t)}}function nA(r,e,t){switch(r.length){case 0:return _b();case 1:return fA(r,e,t);case 2:return wA(r,e,t);case 3:return dA(r,e,t);case 4:return xA(r,e,t);case 5:return yA(r,e);case 6:return bA(r,e);default:throw new Error(`${r.length}-D output sampling is not yet supported`)}}function oA(r){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${r.texture2D}(textureSampler, uv).r;
    }
  `}function sA(r){return`
    void setOutput(float val) {
      ${r.output} = vec4(val, 0, 0, 0);
    }
  `}function iA(r){return`
    void setOutput(vec4 val) {
      ${r.output} = val;
    }
  `}function aA(r){return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFs} vec2 resultUV;
    ${r.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${r.defineSpecialNaN}
    ${r.defineSpecialInf}
    ${r.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${uA}
    ${lA}
    ${cA}
  `}var uA=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,lA=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,cA=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,pA=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function _b(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function mA(r,e,t){let n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return n[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${n[1]}.0);
      }
    `:n[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${n[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${n[0]}, ${n[1]}));
      return 2 * (resTexRC.x * ${n[1]} + resTexRC.y);
    }
  `}function fA(r,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function hA(r,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(r[2]/2),s=o*Math.ceil(r[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${n[0]}, ${n[1]}));
      int index = resTexRC.x * ${n[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function dA(r,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Cs(["r","c","d"],r)}
    return ivec3(r, c, d);
  }
`;let n=sn(["r","c","d"],r);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${n}
      return ivec3(r, c, d);
    }
  `}function gA(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(r[r.length-1]/2),s=o*Math.ceil(r[r.length-2]/2),i=s,a="",u="b, r, c";for(let l=2;l<r.length-1;l++)i*=r[r.length-l-1],a=`
      int b${l} = index / ${i};
      index -= b${l} * ${i};
    `+a,u=`b${l}, `+u;return`
    ivec${r.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${n[0]}, ${n[1]}));
      int index = resTexRC.x * ${n[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${r.length}(${u});
    }
  `}function xA(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Cs(["r","c","d","d2"],r)}
      return ivec4(r, c, d, d2);
    }
  `;let n=sn(["r","c","d","d2"],r);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${n}
      return ivec4(r, c, d, d2);
    }
  `}function yA(r,e){let t=sn(["r","c","d","d2","d3"],r);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function bA(r,e){let t=sn(["r","c","d","d2","d3","d4"],r);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function vA(r,e,t){let n=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(N.arraysEqual(r,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${n[0]}, ${n[1]}));
      }
    `;let o=Math.ceil(r[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${n[0]}, ${n[1]}));

      int index = resTexRC.x * ${n[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function wA(r,e,t){return N.arraysEqual(r,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:r[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:r[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${r[1]};
      int c = index - r * ${r[1]};
      return ivec2(r, c);
    }
  `}function Es(r){return`offset${r}`}function TA(r){let e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),n=rt();return`
    vec4 ${t}() {
      return ${n.texture2D}(${e}, halfCR);
    }
  `}function SA(r,e){let t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`float ${n}() {return ${t};}`;let[o,s]=r.shapeInfo.texShape;if(o===1&&s===1)return`
      float ${n}() {
        return sampleTexture(${t}, halfCR);
      }
    `;let i=Es(t);if(e)return`
    float ${n}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${i});
      return sampleTexture(${t}, uv);
    }
  `;let[a,u]=r.shapeInfo.texShape;return`
    float ${n}() {
      vec2 uv = uvFromFlat(${a}, ${u}, ${i});
      return sampleTexture(${t}, uv);
    }
  `}function CA(r,e){let t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),o=r.shapeInfo.texShape,s=rt();if(e)return`
    vec4 ${n}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${t}, uv);
    }
  `;let i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${n}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${t}, uv);
    }
  `}function EA(r,e){let t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`
      float ${n}(int index) {
        ${Vi(r)}
      }
    `;let o=r.shapeInfo.texShape,s=o[0],i=o[1];if(i===1&&s===1)return`
      float ${n}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;let a=Es(t);return i===1?e?`
      float ${n}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${n}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${t}, uv);
      }
    `:s===1?e?`
      float ${n}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${n}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${n}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${a});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${n}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${t}, uv);
    }
  `}function NA(r,e){let t=r.shapeInfo.logicalShape,n=r.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1),s=r.shapeInfo.texShape,i=s[0],a=s[1],u=rt();if(s!=null&&N.arraysEqual(t,s))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);

        return ${u.texture2D}(${n}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${u.texture2D}(${n}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${n}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${u.texture2D}(${n}, uv);
    }
  `;let l=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(t[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${l[0]}, ${l[1]}, row, col);
      return ${u.texture2D}(${n}, uv);
    }
  `}function IA(r,e){let t=r.shapeInfo.logicalShape,n=r.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1),s=r.shapeInfo.texShape;if(s!=null&&N.arraysEqual(t,s)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `;let m=s[0],f=s[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${m}.0);
      return sampleTexture(${n}, uv);
    }
  `}let{newShape:i,keptDims:a}=N.squeezeShape(t),u=i;if(u.length<t.length){let m=Ui(r,u),f=["row","col"];return`
      ${Mi(m,e)}
      float ${o}(int row, int col) {
        return ${o}(${Gi(f,a)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${Vi(r)}
      }
    `;let l=s[0],c=s[1],p=Es(n);return c===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${n}, uv);
    }
  `:l===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${n}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${n}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${n}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
        return sampleTexture(${n}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${p};
    vec2 uv = uvFromFlat(${l}, ${c}, index);
    return sampleTexture(${n}, uv);
  }
`}function $A(r,e){let t=r.shapeInfo.logicalShape,n=r.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1),s=r.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(t[0]===1){let m=t.slice(1),f=[1,2],d=Ui(r,m),y=["b","row","col"];return`
        ${Ab(d,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${Gi(y,f)});
        }
      `}let a=rt();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${n}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${n}, uv);
    }
  `;let u=i[0],l=i[1],c=Math.ceil(t[2]/2),p=c*Math.ceil(t[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${u}, ${l}, ${p}, ${c}, b, row, col);
      return ${a.texture2D}(${n}, uv);
    }
  `}function kA(r,e){let t=r.shapeInfo.logicalShape,n=r.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1),s=t[1]*t[2],i=t[2],{newShape:a,keptDims:u}=N.squeezeShape(t),l=a;if(l.length<t.length){let y=Ui(r,l),x=["row","col","depth"];return`
        ${Mi(y,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${Gi(x,u)});
        }
      `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${Vi(r)}
      }
    `;let c=r.shapeInfo.texShape,p=c[0],m=c[1],f=r.shapeInfo.flatOffset;if(m===s&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${n}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${m}.0, ${p}.0);
          return sampleTexture(${n}, uv);
        }
      `;if(m===i&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${n}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}.0, ${p}.0);
      return sampleTexture(${n}, uv);
    }
  `;let d=Es(n);return e?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${n}Shape[1] * ${n}Shape[2];
      int stride1 = ${n}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${d};
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index);
      return sampleTexture(${n}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${d};
        vec2 uv = uvFromFlat(${p}, ${m}, index);
        return sampleTexture(${n}, uv);
      }
  `}function AA(r,e){let t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),o=rt();if(e)return`
    vec4 ${n}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${t}, uv);
    }
  `;let s=r.shapeInfo.logicalShape,i=s.length,a=r.shapeInfo.texShape,u=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],l=u[0],c=u[1],p=Math.ceil(s[i-1]/2),m=p*Math.ceil(s[i-2]/2),f="int b, int row, int col",d=`b * ${m} + (row / 2) * ${p} + (col / 2)`;for(let y=2;y<i-1;y++)f=`int b${y}, `+f,m*=s[i-y-1],d=`b${y} * ${m} + `+d;return`
    vec4 ${n}(${f}) {
      int index = ${d};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${l});
      return ${o.texture2D}(${t}, uv);
    }
  `}function _A(r,e){let t=r.shapeInfo.logicalShape,n=r.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1),s=t[3],i=t[2]*s,a=t[1]*i,{newShape:u,keptDims:l}=N.squeezeShape(t);if(u.length<t.length){let $=Ui(r,u),A=["row","col","depth","depth2"];return`
      ${Mi($,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${Gi(A,l)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${Vi(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1],d=`int stride2 = ${n}Shape[3];`,y=`int stride1 = ${n}Shape[2] * stride2;`,x=`int stride0 = ${n}Shape[1] * stride1;`;if(f===a&&c==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${d}
        ${y}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===s&&c==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n}Shape[1] * ${n}Shape[2], ${n}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${n}TexShape[1], ${n}TexShape[0]);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${n}, uv);
      }
    `;let b=Es(n);return e?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${d}
      ${y}
      ${x}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${b});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${m}, ${f}, index + ${b});
      return sampleTexture(${n}, uv);
    }
  `}function RA(r){let e=r.shapeInfo.logicalShape,t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),o=e[4],s=e[3]*o,i=e[2]*s,a=e[1]*i,{newShape:u,keptDims:l}=N.squeezeShape(e);if(u.length<e.length){let y=Ui(r,u),x=["row","col","depth","depth2","depth3"];return`
      ${Mi(y)}
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        return ${n}(${Gi(x,l)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${o})) +
          depth3;
        ${Vi(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1];if(f===a&&c==null)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===o&&c==null)return`
      float ${n}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;let d=Es(t);return`
    float ${n}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${o} + depth3 + ${d};
      vec2 uv = uvFromFlat(${m}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function OA(r){let e=r.shapeInfo.logicalShape,t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:o,keptDims:s}=N.squeezeShape(e);if(o.length<e.length){let x=Ui(r,o),b=["row","col","depth","depth2","depth3","depth4"];return`
      ${Mi(x)}
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${n}(${Gi(b,s)});
      }
    `}let i=e[5],a=e[4]*i,u=e[3]*a,l=e[2]*u,c=e[1]*l;if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${l}, ${u}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Vi(r)}
      }
    `;let p=r.shapeInfo.flatOffset,m=r.shapeInfo.texShape,f=m[0],d=m[1];if(d===c&&p==null)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${u}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(d===i&&p==null)return`
      float ${n}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;let y=Es(t);return`
    float ${n}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${l} + depth * ${u} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${y};
      vec2 uv = uvFromFlat(${f}, ${d}, index);
      return sampleTexture(${t}, uv);
    }
  `}function Vi(r){let e=r.name,t=N.sizeFromShape(r.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function FA(r,e){let t=r.name,n=t.charAt(0).toUpperCase()+t.slice(1),o="get"+n+"AtOutCoords",s=r.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=$b(r.shapeInfo.logicalShape,e.logicalShape),u=Te(i),l=i-s,c,p=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map($=>`coords.${p[$+l]} = 0;`).join(`
`);let m="";i<2&&s>0?m="coords":m=r.shapeInfo.logicalShape.map(($,A)=>`coords.${p[A+l]}`).join(", ");let f="return outputValue;",y=N.sizeFromShape(r.shapeInfo.logicalShape)===1,b=N.sizeFromShape(e.logicalShape)===1;if(s===1&&!y&&!b)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(y&&!b)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){let $=s-2,A=s-1;a.indexOf($)>-1&&a.indexOf(A)>-1?f="return vec4(outputValue.x);":a.indexOf($)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(A)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${u} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${n}(${m});
      ${f}
    }
  `}function DA(r,e){let t=r.name,n=t.charAt(0).toUpperCase()+t.slice(1),o="get"+n+"AtOutCoords",s=e.texShape,i=r.shapeInfo.texShape,a=r.shapeInfo.logicalShape.length,u=e.logicalShape.length;if(!r.shapeInfo.isUniform&&a===u&&r.shapeInfo.flatOffset==null&&N.arraysEqual(i,s))return`
      float ${o}() {
        return sampleTexture(${t}, resultUV);
      }
    `;let l=Te(u),c=$b(r.shapeInfo.logicalShape,e.logicalShape),p=u-a,m,f=["x","y","z","w","u","v"];a===0?m="":u<2&&c.length>=1?m="coords = 0;":m=c.map(y=>`coords.${f[y+p]} = 0;`).join(`
`);let d="";return u<2&&a>0?d="coords":d=r.shapeInfo.logicalShape.map((y,x)=>`coords.${f[x+p]}`).join(", "),`
    float ${o}() {
      ${l} coords = getOutputCoords();
      ${m}
      return get${n}(${d});
    }
  `}function Te(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function Xm(r,e,t){let{newShape:n,keptDims:o}=N.squeezeShape(e),s=e.length,i=r&&s===3&&e[0]===1,a=i?e.slice(1):n,u=!r&&s>1&&!N.arraysEqual(e,t)&&n.length<s||i;return{useSqueezeShape:u,uniformShape:u?a:e,keptDims:o}}function Ui(r,e){let t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function Gi(r,e){return e.map(t=>r[t]).join(", ")}function Ob(r,e,t,n){let o=t.map((c,p)=>{let m={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(m.flatOffset=c.texData.slice.flatOffset),{name:e.variableNames[p],shapeInfo:m}}),s=o.map(c=>c.shapeInfo),i={logicalShape:n.shape,texShape:n.texData.texShape,isUniform:!1,isPacked:n.texData.isPacked,flatOffset:null},a=kb(o,i,e),u=lb(r.gl,a),l=r.createProgram(u);return U().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:u,source:a,webGLProgram:l,inShapeInfos:s,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:e,fragmentShader:u,source:a,webGLProgram:l,inShapeInfos:s,outShapeInfo:i},Q1(r,e,l))}function Q1(r,e,t){let n={},o={},s={},i=[],a,u,l,c=null,p=null;p=r.getUniformLocation(t,"NAN",!1),U().getNumber("WEBGL_VERSION")===1&&(c=r.getUniformLocation(t,"INFINITY",!1));let m=!1;for(let f=0;f<e.variableNames.length;f++){let d=e.variableNames[f];n[d]=r.getUniformLocation(t,d,m),n[`offset${d}`]=r.getUniformLocation(t,`offset${d}`,m),e.enableShapeUniforms&&(o[`${d}Shape`]=r.getUniformLocation(t,`${d}Shape`,m),s[`${d}TexShape`]=r.getUniformLocation(t,`${d}TexShape`,m))}return e.enableShapeUniforms&&(a=r.getUniformLocation(t,"outShape",m),l=r.getUniformLocation(t,"outShapeStrides",m),u=r.getUniformLocation(t,"outTexShape",m)),e.customUniforms&&e.customUniforms.forEach((f,d)=>{i[d]=r.getUniformLocation(t,f.name,m)}),{uniformLocations:n,customUniformLocations:i,infLoc:c,nanLoc:p,inShapesLocations:o,inTexShapesLocations:s,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:u}}function Rb(r,e){if(r.length!==e.length)throw Error(`Binary was compiled with ${r.length} inputs, but was executed with ${e.length} inputs`);r.forEach((t,n)=>{let o=t.logicalShape,s=e[n],i=s.shape;if(!N.arraysEqual(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(t.isUniform&&s.isUniform)return;let a=t.texShape,u=s.isUniform?null:s.texData.texShape;if(!N.arraysEqual(a,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${u} must match`)})}function Fb(r,e,t,n,o){e.program.enableShapeUniforms||(Rb(e.inShapeInfos,t),Rb([e.outShapeInfo],[n]));let s=n.texData.texture,i=n.texData.texShape;n.texData.isPacked?r.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):r.setOutputMatrixTexture(s.texture,i[0],i[1]),r.setProgram(e.webGLProgram),U().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&r.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&r.gl.uniform1f(e.nanLoc,NaN),t.forEach((u,l)=>{let c=e.program.variableNames[l],p=e.uniformLocations[c],m=e.uniformLocations[`offset${c}`],f=e.inShapesLocations[`${c}Shape`],d=e.inTexShapesLocations[`${c}TexShape`];if(f){let{uniformShape:y}=Xm(e.program.packedInputs,u.shape,u.texData.texShape);switch(y.length){case 1:r.gl.uniform1iv(f,new Int32Array(y));break;case 2:r.gl.uniform2iv(f,new Int32Array(y));break;case 3:r.gl.uniform3iv(f,new Int32Array(y));break;case 4:r.gl.uniform4iv(f,new Int32Array(y));break;default:break}}if(d&&r.gl.uniform2i(d,u.texData.texShape[0],u.texData.texShape[1]),p!=null){if(u.isUniform){if(N.sizeFromShape(u.shape)<2)r.gl.uniform1f(p,u.uniformValues[0]);else{let y=u.uniformValues;y instanceof Float32Array||(y=new Float32Array(y)),r.gl.uniform1fv(p,y)}return}u.texData.slice!=null&&m!=null&&r.gl.uniform1i(m,u.texData.slice.flatOffset),r.setInputMatrixTexture(u.texData.texture.texture,p,l)}});let a=e.outShapeLocation;if(a)switch(n.shape.length){case 1:r.gl.uniform1iv(a,new Int32Array(n.shape));break;case 2:r.gl.uniform2iv(a,new Int32Array(n.shape));break;case 3:r.gl.uniform3iv(a,new Int32Array(n.shape));break;case 4:r.gl.uniform4iv(a,new Int32Array(n.shape));break;default:break}if(e.outShapeStridesLocation){let u=N.computeStrides(n.shape);switch(n.shape.length){case 2:r.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(u));break;case 3:r.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(u));break;case 4:r.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(u));break;default:break}}e.outTexShapeLocation&&r.gl.uniform2i(e.outTexShapeLocation,n.texData.texShape[0],n.texData.texShape[1]),e.program.customUniforms&&o&&e.program.customUniforms.forEach((u,l)=>{let c=e.customUniformLocations[l],p=o[l];if(u.type==="float")r.gl.uniform1fv(c,p);else if(u.type==="vec2")r.gl.uniform2fv(c,p);else if(u.type==="vec3")r.gl.uniform3fv(c,p);else if(u.type==="vec4")r.gl.uniform4fv(c,p);else if(u.type==="int")r.gl.uniform1iv(c,p);else if(u.type==="ivec2")r.gl.uniform2iv(c,p);else if(u.type==="ivec3")r.gl.uniform3iv(c,p);else if(u.type==="ivec4")r.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}),r.executeProgram()}function Db(r,e,t){let n="";e.concat(t).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(r.enableShapeUniforms&&!i.isUniform){let u=i.texData.texShape,{useSqueezeShape:l,uniformShape:c,keptDims:p}=Xm(r.packedInputs,i.shape,u),m="",f="",d="";if(c.length===1&&r.packedInputs){let M=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];m=`${M[0]>1}_${M[1]>1}`}else if(c.length===2&&!r.packedInputs)f=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!r.packedInputs){let M=N.computeStrides(c);d=`${M[0]===u[1]}_${M[M.length-1]===u[1]}`}let y=i.shape.length,x=c.length===2&&N.arraysEqual(i.shape,u),b=N.sizeFromShape(i.shape)===1,$=B.getBroadcastDims(i.shape,t.shape),A=!r.packedInputs&&y===t.shape.length&&N.arraysEqual(u,t.texData.texShape),O=r.packedInputs||c.length>2?"":`${u[0]>1}_${u[1]>1}`;n+=`${y}_${A}_${l?p:""}_${c.length}_${b}_${$}_${x}_${m}_${f}_${d}_${O}_${a}`}else{let u=i.isUniform?"uniform":i.texData.texShape;n+=`${i.shape}_${u}_${a}`}});let o=r.userCode,s=r.constructor.name;return s+="_"+n+"_"+o+`${U().getNumber("WEBGL_VERSION")}`,s}function We(r){return U().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&r<=4}var Ym=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=$o.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=rt();this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Cs(["r","c","d"],e):sn(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}};var Zm=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=$o.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=rt();this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Cs(["r","c","d"],e):sn(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}};var Qm=class{constructor(e){this.variableNames=["A"],this.outTexUsage=Ot.DOWNLOAD;let t=rt();this.outputShape=e,this.userCode=`
      ${qm}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}};var Jm=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ot.DOWNLOAD;let t=rt();this.outputShape=e,this.userCode=`
      ${qm}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}};var BA={R:0,G:1,B:2,A:3},lu=class{constructor(e,t=!1,n="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=rt();this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length);let s="result";t&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<n.length;a++){let u=n[a];i+=`
          if(offset == ${a}) {
            result = values[${BA[u]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Li():Pi(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${o.texture2D}(A, uv);
          ${i}
        }
        ${o.output} = vec4(${s}, 0., 0., 0.);
      }
    `}};var ef=class{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=rt();this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length);let o="",s="result";t&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let u=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${u}] = values[0];
            } else if (offset == 1) {
              result[${u}] = values[1];
            } else if (offset == 2) {
              result[${u}] = values[2];
            } else {
              result[${u}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Li():Pi(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${n.output} = ${s};
        }
    `}};function Pb(r){let e=rt(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return ub(r,t)}function Lb(r){let e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return mb(r,e)}function Bb(r){let e=new Uint16Array([0,1,2,2,1,3]);return fb(r,e)}function cu(r,e,t,n,o,s){db(e,t);let i=hb(r),a=r.TEXTURE_2D;return le(r,()=>r.bindTexture(a,i)),le(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)),le(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),le(r,()=>r.texParameteri(a,r.TEXTURE_MIN_FILTER,r.NEAREST)),le(r,()=>r.texParameteri(a,r.TEXTURE_MAG_FILTER,r.NEAREST)),U().getNumber("WEBGL_VERSION")===1?le(r,()=>r.texImage2D(a,0,n,e,t,0,o,s,null)):le(r,()=>r.texStorage2D(a,1,n,e,t)),le(r,()=>r.bindTexture(r.TEXTURE_2D,null)),{texture:i,texShape:[t,e]}}function J1(r){return r.internalFormatFloat}function Mb(r,e,t,n){let[o,s]=Ts(e,t);return cu(r,o,s,J1(n),n.textureFormatFloat,r.FLOAT)}function e2(r){return r.internalFormatHalfFloat}function Vb(r,e,t,n){let[o,s]=Ts(e,t);return cu(r,o,s,e2(n),n.textureFormatFloat,n.textureTypeHalfFloat)}function t2(r){return r.downloadTextureFormat}function Ub(r,e,t,n){let[o,s]=Ts(e,t);return cu(r,o,s,t2(n),r.RGBA,r.UNSIGNED_BYTE)}function r2(r){return r.internalFormatPackedFloat}function Gb(r,e,t,n){let[o,s]=Nn(e,t);return cu(r,o,s,r2(n),r.RGBA,r.FLOAT)}function n2(r){return r.internalFormatPackedHalfFloat}function zb(r,e,t,n){let[o,s]=Nn(e,t);return cu(r,o,s,n2(n),r.RGBA,n.textureTypeHalfFloat)}function Wb(r,e,t){return le(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),X1(r,e,"clipSpacePos",t,3,20,0)&&X1(r,e,"uv",t,2,20,12)}function Hb(r,e,t,n,o,s){le(r,()=>r.bindTexture(r.TEXTURE_2D,e));let i,a,u;o instanceof Uint8Array?(i=new Uint8Array(t*n*4),a=r.UNSIGNED_BYTE,u=r.RGBA):(i=new Float32Array(t*n*4),a=r.FLOAT,u=s.internalFormatPackedFloat),i.set(o),U().getNumber("WEBGL_VERSION")===2?le(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t,n,r.RGBA,a,i)):le(r,()=>r.texImage2D(r.TEXTURE_2D,0,u,t,n,0,r.RGBA,a,i)),le(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function Kb(r,e,t){le(r,()=>r.bindTexture(r.TEXTURE_2D,e)),t.data instanceof Uint8Array?U().getNumber("WEBGL_VERSION")===2?le(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t.width,t.height,r.RGBA,r.UNSIGNED_BYTE,t.data)):le(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)):U().getNumber("WEBGL_VERSION")===2?le(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,t)):le(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),le(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function jb(r,e,t,n){let o=r.createBuffer();le(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,o));let a=4*4*e*t;return le(r,()=>r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)),le(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)),le(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,null)),o}function qb(r,e,t){let n=r,o=new Float32Array(t);return n.bindBuffer(n.PIXEL_PACK_BUFFER,e),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Xb(r,e,t,n){let[o,s]=Ts(e,t),i=4,a=new Uint8Array(sb(e*t,i));return le(r,()=>r.readPixels(0,0,o,s,n.downloadTextureFormat,r.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Yb(r,e,t,n,o,s,i,a){let u=r,l=new Float32Array(ib(s,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function Zb(r,e,t){let n=new Float32Array(e*t*4);return le(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,n)),n}var zi=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=U().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,ob(t,e)):this.gl=yr(t),e=this.gl,U().getNumber("WEBGL_VERSION")===2){let s=e;this.createVertexArray=()=>le(s,()=>s.createVertexArray()),this.bindVertexArray=i=>le(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>le(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>le(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(e!=null){let s=e.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>le(e,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>le(e,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>le(e,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>le(e,()=>e.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let n="WEBGL_color_buffer_float",o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),U().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=iu(this.gl,s),_r(this.gl,i))this.textureHalfFloatExtension=iu(this.gl,i);else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),_r(this.gl,o))this.colorBufferHalfFloatExtension=iu(this.gl,o);else if(U().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",_r(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(_r(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Lb(this.gl),this.indexBuffer=Bb(this.gl),this.framebuffer=gb(this.gl),this.textureConfig=su(this.gl,this.textureHalfFloatExtension)}get debug(){return U().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;le(e,()=>e.finish()),le(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),le(e,()=>e.deleteFramebuffer(this.framebuffer)),le(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),le(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),le(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),Mb(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),Vb(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),Ub(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),Kb(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,o){this.throwIfDisposed(),Hb(this.gl,e,t,n,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),zb(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),Gb(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Y1(this.gl,this.framebuffer),this.outputTexture=null),le(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>Xb(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,o,s,i){return Yb(this.gl,e,t,n,o,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return qb(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let o=jb(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(U().getBool("WEBGL_FENCE_API_ENABLED")){let o=e,s=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let i=o.clientWaitSync(s,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},t=s}else U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>Zb(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader==null&&(this.vertexShader=Pb(t));let n=cb(t);le(t,()=>t.attachShader(n,this.vertexShader)),le(t,()=>t.attachShader(n,e)),pb(t,n);let o;return o=Object.assign(n,{vao:this.createVertexArray()}),this.bindVertexArray(o.vao),le(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),console.assert(Wb(t,o,this.vertexBuffer),"gpgpu_util.bindVertexProgramAttributeStreams not fully successful."),this.debug&&Hm(t,o),this.setProgram(o),o}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(le(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&(this.bindVertexArray(this.program.vao),this.debug&&Hm(this.gl,this.program)),le(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?xb(this.gl,e,t):yb(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),le(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),bb(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[o,s]=Nn(t,n);this.setOutputMatrixTextureDriver(e,o,s)}setOutputMatrixWriteRegion(e,t,n,o){this.setOutputMatrixWriteRegionDriver(n,e,o,t)}setOutputPackedMatrixWriteRegion(e,t,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Hm(this.gl,this.program),au(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}le(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),le(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=iu(this.gl,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let n=this.gl,o=this.getQueryTimerExtensionWebGL2(),s=n.createQuery();return n.beginQuery(o.TIME_ELAPSED_EXT,s),s}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await N.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,t){if(t===0)return null;if(t===2){let n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}else{let n=this.getQueryTimerExtensionWebGL1();return n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let n=this.gl,o=this.getQueryTimerExtensionWebGL2(),s=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let n=this.getQueryTimerExtensionWebGL1(),o=n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=VA(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:n}=this.itemsToPoll[t];n()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;"setTimeoutCustom"in U().platform&&(n=U().platform.setTimeoutCustom.bind(U().platform)),N.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Km(this.gl,e,this.framebuffer),this.debug&&au(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Km(this.gl,this.outputTexture,this.framebuffer),this.debug&&au(this.gl)):Y1(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let o=this.gl;Km(o,e,this.framebuffer),this.debug&&au(o),this.outputTexture=e,le(o,()=>o.viewport(0,0,t,n)),le(o,()=>o.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,o){this.throwIfDisposed(),le(this.gl,()=>this.gl.scissor(e,t,n,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function VA(r){let e=0;for(;e<r.length&&r[e]();++e);return e-1}var C2={};Ke(C2,{addImpl:()=>i2,bincountImpl:()=>ev,bincountReduceImpl:()=>tv,castImpl:()=>s2,ceilImpl:()=>a2,concatImpl:()=>rv,equalImpl:()=>u2,expImpl:()=>l2,expm1Impl:()=>c2,floorImpl:()=>p2,gatherNdImpl:()=>nv,gatherV2Impl:()=>ov,greaterEqualImpl:()=>f2,greaterImpl:()=>m2,lessEqualImpl:()=>d2,lessImpl:()=>h2,linSpaceImpl:()=>sv,logImpl:()=>g2,maxImpl:()=>iv,maximumImpl:()=>x2,minimumImpl:()=>y2,multiplyImpl:()=>fu,negImpl:()=>av,notEqualImpl:()=>b2,prodImpl:()=>lv,raggedGatherImpl:()=>pv,raggedRangeImpl:()=>fv,raggedTensorToTensorImpl:()=>gv,rangeImpl:()=>xv,rsqrtImpl:()=>v2,scatterImpl:()=>yv,sigmoidImpl:()=>bv,simpleAbsImpl:()=>Qb,sliceImpl:()=>vv,sparseFillEmptyRowsImpl:()=>wv,sparseReshapeImpl:()=>Tv,sparseSegmentReductionImpl:()=>Sv,sqrtImpl:()=>Cv,squaredDifferenceImpl:()=>w2,stridedSliceImpl:()=>Ev,stringNGramsImpl:()=>Nv,stringSplitImpl:()=>Iv,stringToHashBucketFastImpl:()=>$v,subImpl:()=>S2,tileImpl:()=>kv,topKImpl:()=>_v,transposeImpl:()=>uv,uniqueImpl:()=>Rv});function pu(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&N.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}function Qb(r){let e=new Float32Array(r.length);for(let t=0;t<r.length;++t)e[t]=Math.abs(r[t]);return e}function it(r){return(e,t,n,o,s)=>{let i=B.assertAndGetBroadcastShape(e,t),a=i.length,u=N.computeStrides(i),l=N.sizeFromShape(i),c=N.getTypedArrayFromDType(s,l),p=e.length,m=t.length,f=N.computeStrides(e),d=N.computeStrides(t),y=B.getBroadcastDims(e,i),x=B.getBroadcastDims(t,i);if(y.length+x.length===0)for(let b=0;b<c.length;++b)c[b]=r(n[b%n.length],o[b%o.length]);else for(let b=0;b<c.length;++b){let $=N.indexToLoc(b,a,u),A=$.slice(-p);y.forEach(H=>A[H]=0);let O=N.locToIndex(A,p,f),M=$.slice(-m);x.forEach(H=>M[H]=0);let G=N.locToIndex(M,m,d);c[b]=r(n[O],o[G])}return[c,i]}}function Wi(r){let{inputs:e,backend:t}=r,{real:n,imag:o}=e,s=t.data.get(n.dataId).values,i=t.data.get(o.dataId).values,a=t.makeTensorInfo(n.shape,"complex64"),u=t.data.get(a.dataId);return u.complexTensorInfos={real:t.makeTensorInfo(n.shape,"float32",s),imag:t.makeTensorInfo(o.shape,"float32",i)},a}function tf(r,e,t="float32"){if(t==="complex64"){let o=tf(r,e,"float32"),s=tf(r,e,"float32");return Wi({inputs:{real:o,imag:s},backend:r})}let n=N.makeZerosTypedArray(N.sizeFromShape(e),t);return r.makeTensorInfo(e,t,n)}function o2(r){let{inputs:e,backend:t}=r,{x:n}=e;return t.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}function Jb(r){let{inputs:e,backend:t}=r,{input:n}=e,o=t.data.get(n.dataId).complexTensorInfos.real,s=t.data.get(o.dataId).values;return t.makeTensorInfo(o.shape,o.dtype,s)}function s2(r,e,t,n){if(n==="int32"){let o=Int32Array.from(r);return[e,"int32",o]}if(n==="bool"){let o=N.toTypedArray([0],t),[s,i]=it((a,u)=>a!==u?1:0)(e,[],r,o,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${t} to ${n}`)}function mu(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{dtype:s}=n;if(s==="complex64"){if(o.dtype==="complex64")return o2({inputs:{x:o},backend:t});let c=tf(t,o.shape,o.dtype),p=mu({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),m=Wi({inputs:{real:p,imag:c},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),m}if(o.dtype==="complex64"){let c=Jb({inputs:{input:o},backend:t}),p=mu({inputs:{x:c},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(c),p}if(!N.hasEncodingLoss(o.dtype,s)){let c=o2({inputs:{x:o},backend:t});return{dataId:c.dataId,shape:c.shape,dtype:s}}let i=t.data.get(o.dataId).values,[a,u,l]=s2(i,o.shape,o.dtype,s);return t.makeTensorInfo(a,u,l)}function ft(r,e,t,n){return t==null?({inputs:o,backend:s})=>{let{a:i,b:a}=o,u=s;pu([i,a],r);let l=u.data.get(i.dataId).values,c=u.data.get(a.dataId).values,p=i.dtype==="string"?B.fromUint8ToStringArray(l):l,m=i.dtype==="string"?B.fromUint8ToStringArray(c):c,f=n||i.dtype,[d,y]=e(i.shape,a.shape,p,m,f);return u.makeTensorInfo(y,f,d)}:({inputs:o,backend:s})=>{let{a:i,b:a}=o,u=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let l=mu({inputs:{x:i},backend:u,attrs:{dtype:"complex64"}}),c=u.data.get(l.dataId),p=c.complexTensorInfos.real,m=c.complexTensorInfos.imag,f=u.data.get(p.dataId).values,d=u.data.get(m.dataId).values,y=mu({inputs:{x:a},backend:u,attrs:{dtype:"complex64"}}),x=u.data.get(y.dataId),b=x.complexTensorInfos.real,$=x.complexTensorInfos.imag,A=u.data.get(b.dataId).values,O=u.data.get($.dataId).values,[M,G,H]=t(i.shape,a.shape,f,d,A,O),X=u.makeTensorInfo(H,"float32",M),q=u.makeTensorInfo(H,"float32",G),Y=Wi({inputs:{real:X,imag:q},backend:u});return u.disposeIntermediateTensorInfo(l),u.disposeIntermediateTensorInfo(y),u.disposeIntermediateTensorInfo(X),u.disposeIntermediateTensorInfo(q),Y}else{let l=u.data.get(i.dataId).values,c=u.data.get(a.dataId).values,p=n||i.dtype,[m,f]=e(i.shape,a.shape,l,c,p);return u.makeTensorInfo(f,p,m)}}}function Hi(r){return(e,t,n,o,s,i)=>{let a=B.assertAndGetBroadcastShape(e,t),u=N.sizeFromShape(a),l=a.length,c=N.computeStrides(a),p=N.getTypedArrayFromDType("float32",u),m=N.getTypedArrayFromDType("float32",u),f=B.getBroadcastDims(e,a),d=B.getBroadcastDims(t,a),y=B.mergeRealAndImagArrays(n,o),x=B.mergeRealAndImagArrays(s,i),b=e.length,$=N.computeStrides(e),A=t.length,O=N.computeStrides(t);if(f.length+d.length===0)for(let M=0;M<p.length;M++){let G=M%y.length,H=M%x.length,X=r(y[G*2],y[G*2+1],x[H*2],x[H*2+1]);p[M]=X.real,m[M]=X.imag}else for(let M=0;M<p.length;M++){let G=N.indexToLoc(M,l,c),H=G.slice(-b);f.forEach(fe=>H[fe]=0);let X=N.locToIndex(H,b,$),q=G.slice(-A);d.forEach(fe=>q[fe]=0);let Y=N.locToIndex(q,A,O),ie=r(y[X*2],y[X*2+1],x[Y*2],x[Y*2+1]);p[M]=ie.real,m[M]=ie.imag}return[p,m,a]}}var i2=it((r,e)=>r+e),UA=Hi((r,e,t,n)=>({real:r+t,imag:e+n})),M4e=ft(lo,i2,UA);function ev(r,e,t,n,o){let s=N.sizeFromShape(n),i=N.makeZerosTypedArray(o,t);for(let a=0;a<r.length;a++){let u=r[a];if(u<0)throw new Error("Input x must be non-negative!");u>=o||(s>0?i[u]+=e[a]:i[u]+=1)}return i}function tv(r,e,t,n=!1){let o=r.shape[0],s=r.shape[1],i=Ie([o,t],e.dtype);for(let a=0;a<o;a++)for(let u=0;u<s;u++){let l=r.get(a,u);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(n?i.set(1,a,l):e.size>0?i.set(i.get(a,l)+e.get(a,u),a,l):i.set(i.get(a,l)+1,a,l))}return i}function Ht(r){return(e,t,n)=>{let o=N.getTypedArrayFromDType(t,e.length);for(let s=0;s<e.length;++s)o[s]=r(e[s],n);return o}}function rf(r,e,t){return({inputs:n,attrs:o,backend:s})=>{let{x:i}=n;if(pu(i,r),i.dtype==="string"||t==="string")throw new Error("unaryKernelFunc does not support string input/output");let a=s,u=a.data.get(i.dataId).values,l=N.sizeFromShape(i.shape),c=t||i.dtype,p=N.getArrayFromDType(c,l);for(let m=0;m<l;++m)p[m]=e(u[m],o);return a.makeTensorInfo(i.shape,c,p)}}function Hr(r,e,t){return({inputs:n,attrs:o,backend:s})=>{let{x:i}=n;if(pu(i,r),i.dtype==="string"||t==="string")throw new Error("unaryKernelFunc does not support string input/output");let a=s,u=a.data.get(i.dataId).values,l=t||i.dtype,c=e(u,l,o);return a.makeTensorInfo(i.shape,l,c)}}var a2=Ht(r=>Math.ceil(r)),Z4e=Hr(Ys,a2);function rv(r,e,t,n){let o=N.getArrayFromDType(t,N.sizeFromShape(e));if(n&&t!=="string"){let s=0;r.forEach(i=>{let a=N.sizeFromShape(i.shape);o.set(i.vals,s),s+=a})}else{let s=0;r.forEach(i=>{let a=t==="string"?B.fromUint8ToStringArray(i.vals):i.vals,u=0;for(let l=0;l<i.shape[0];++l){let c=l*e[1]+s;for(let p=0;p<i.shape[1];++p)o[c+p]=a[u++]}s+=i.shape[1]})}return o}var u2=it((r,e)=>r===e?1:0),oxe=ft(Zs,u2,null,"bool");var l2=Ht(r=>Math.exp(r)),lxe=Hr(Qs,l2,"float32");var c2=Ht(r=>Math.expm1(r)),hxe=Hr(Js,c2);var p2=Ht(r=>Math.floor(r)),bxe=Hr(ei,p2);function nv(r,e,t,n,o,s,i,a,u){let l=Ie([n,s],t);for(let c=0;c<n;c++){let p=[],m=0;for(let f=0;f<o;f++){let d=r[c*o+f];m+=d*i[f],p.push(d)}if(m<0||m>=u/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let f=0;f<s;f++)l.values[c*s+f]=e.get(...e.indexToLoc(m*s+f))}return l}function ov(r,e,t){let n=Ie(t,r.dtype);for(let o=0;o<n.size;++o){let i=n.indexToLoc(o).slice(),a=i[0],u=i[2],l=e.locToIndex([a,u]);i[2]=e.values[l];let c=r.locToIndex(i);0<=c&&c<r.values.length&&(n.values[o]=r.values[c])}return n}var m2=it((r,e)=>r>e?1:0),$xe=ft(ti,m2,null,"bool");var f2=it((r,e)=>r>=e?1:0),Oxe=ft(ri,f2,null,"bool");var h2=it((r,e)=>r<e?1:0),Bxe=ft(ni,h2,null,"bool");var d2=it((r,e)=>r<=e?1:0),zxe=ft(oi,d2,null,"bool");function sv(r,e,t){let n=(e-r)/(t-1),o=N.makeZerosTypedArray(t,"float32");o[0]=r;for(let s=1;s<o.length;s++)o[s]=o[s-1]+n;return o}var g2=Ht(r=>Math.log(r)),Yxe=Hr(si,g2);function iv(r,e,t,n){let o=N.getTypedArrayFromDType(n,N.sizeFromShape(t));for(let s=0;s<o.length;++s){let i=s*e,a=r[i];for(let u=0;u<e;++u){let l=r[i+u];(Number.isNaN(l)||l>a)&&(a=l)}o[s]=a}return o}var x2=it((r,e)=>Math.max(r,e)),nye=ft(ii,x2);var y2=it((r,e)=>Math.min(r,e)),uye=ft(ai,y2);var fu=it((r,e)=>r*e),GA=Hi((r,e,t,n)=>({real:r*t-e*n,imag:r*n+e*t})),fye=ft(ui,fu,GA);function av(r,e,t){let n=N.createScalarValue(-1,t);return fu([],e,n,r,t)}var b2=it((r,e)=>r!==e?1:0),wye=ft(li,b2,null,"bool");function uv(r,e,t,n,o){let s=e.length,i=N.sizeFromShape(e),a=N.computeStrides(e),u=N.computeStrides(o),l=N.getTypedArrayFromDType(t,N.sizeFromShape(o));for(let c=0;c<i;++c){let p=N.indexToLoc(c,s,a),m=new Array(p.length);for(let d=0;d<m.length;d++)m[d]=p[n[d]];let f=N.locToIndex(m,s,u);l[f]=r[c]}return l}function lv(r,e,t,n){let[o,s]=B.computeOutAndReduceShapes(r,n),i=Lt(e,"int32"),a=N.makeZerosTypedArray(N.sizeFromShape(o),i),u=N.sizeFromShape(s);for(let l=0;l<a.length;++l){let c=l*u,p=1;for(let m=0;m<u;++m)p*=t[c+m];a[l]=p}return{outVals:a,outShape:o,outDtype:i}}function zA(r,e,t){r.forEach((n,o)=>{if(n<0||n>=t){let s=N.indexToLoc(o,e.length,N.computeStrides(e)).join(",");throw new Error(`indices[${s}] = ${n} is not in [0, ${t})`)}})}function WA(r,e){for(let t=0;t<r.length;++t){let n=r[t],o=t===r.length-1?e:r[t+1].length;if(n.length===0)throw new Error("Ragged splits may not be empty");if(n[0]<0)throw new Error("Ragged splits must be non-negative");if(n[n.length-1]>o)throw new Error("Ragged splits must not point past values");for(let s=1;s<n.length;++s)if(n[s-1]>n[s])throw new Error("Ragged splits must be sorted in ascending order")}}function HA(r,e,t,n){let o=[],s=0,i=e.length-1+t.length,a=new Array(i).fill(null).map(()=>[0]);WA(t,n);let u=1;for(let l=0;l<e.length-1;++l){u*=e[l];let c=e[l+1];for(let p=1;p<u+1;++p)a[l].push(p*c)}for(let l=0;l<r.length;++l){let c=r[l],p=r[l]+1;for(let m=0;m<t.length;++m){let f=t[m],d=m+e.length-1;if(d>=0){let y=a[d],x=y[y.length-1]-f[c];for(let b=c;b<p;++b)a[d].push(f[b+1]+x)}c=f[c],p=f[p]}p!==c&&(o.push([c,p]),s+=p-c)}return{outSplits:a,valueSlices:o,numValues:s}}function KA(r){let e=[];for(let t=0;t<r.length;++t){let n=r[t].length,o=N.getArrayFromDType("int32",n);e.push(o),r[t].forEach((s,i)=>o[i]=s)}return e}function cv(r,e){let t=r.slice(0,e);for(;t.length<e;)t.push(1);for(let n=e;n<r.length;n++)t[e-1]*=r[n];return t}function jA(r,e,t,n,o,s){let i=cv(e,2)[1],a=cv(s,2)[1],u=0;for(let l of t)for(let c=l[0];c<l[1];++c){for(let p=0;p<n;++p)o[u*a+p]=r[c*i+p];++u}}function qA(r,e,t,n,o){let s=e.slice();s[0]=o;let i=N.getArrayFromDType(t,N.sizeFromShape(s)),a=r.length,u=a===0?0:a/e[0];return jA(r,e,n,u,i,s),[i,s]}function pv(r,e,t,n,o,s,i,a){if(r.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");let u=e[0][0]-1;if(zA(s,i,u),n.length===0)throw new Error("params.rank must be nonzero");let l=n[0],{outSplits:c,valueSlices:p,numValues:m}=HA(s,i,r,l),f=KA(c),d=qA(t,n,o,p,m);return[f,d[0],d[1]]}var mv=2147483647;function fv(r,e,t,n,o,s,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(o.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=e.length===0,u=o.length===0,l=i.length===0,c=[];a||c.push(e[0]),u||c.push(o[0]),l||c.push(i[0]);for(let x=1;x<c.length;++x)if(c[x]!==c[x-1])throw new Error("starts, limits, and deltas must have the same shape");let p=c.length===0?1:c[0],m=N.getArrayFromDType("int32",p+1);m[0]=0;for(let x=0;x<p;++x){let b=a?r[0]:r[x],$=u?n[0]:n[x],A=l?s[0]:s[x];if(A===0)throw new Error("Requires delta != 0");let O;if(A>0&&$<b||A<0&&$>b)O=0;else if(O=Math.ceil(Math.abs(($-b)/A)),O>mv)throw new Error(`Requires ((limit - start) / delta) <= ${mv}`);m[x+1]=m[x]+O}let f=m[p],d=N.getArrayFromDType(t,f),y=0;for(let x=0;x<p;++x){let b=m[x+1]-m[x],$=a?r[0]:r[x],A=l?s[0]:s[x];for(let O=0;O<b;++O)d[y++]=$,$+=A}return[m,d]}var Kr=B.RowPartitionType,Ki=class{constructor(e,t,n,o,s,i,a,u,l,c){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=o,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=u,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=B.getRowPartitionTypesHelper(c),this.raggedRank=B.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Kr.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Kr.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Kr.VALUE_ROWIDS:return Ki.getMaxWidthValueRowID(t);case Kr.ROW_SPLITS:return Ki.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Kr[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let o=0;o<t-1;++o){let s=e[o+1]-e[o];s>n&&(n=s)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,o=e[0],s=0;for(let i=1;i<t;++i){let a=e[i];a!==o&&(o=a,s=Math.max(i-n,s),n=i)}return Math.max(t-n,s)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return dv(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;B.validateDefaultValueShape(n,t);let o=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=B.combineRaggedTensorToTensorShapes(this.raggedRank,o,t);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,t,n){let o=Math.min(e,n),s=[],i=0;for(let a=0;a<o;++a,i+=t)s.push(i);for(let a=o;a<e;++a)s.push(-1);return N.assert(s.length===e,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(e,t,n,o){let s=e.length,i=[];for(let a=0;a<s-1;++a){let u=e[a+1]-e[a],l=Math.min(o,u),c=t[a];c===-1&&(l=0);for(let p=0;p<l;++p)i.push(c),c+=n;for(let p=0;p<u-l;++p)i.push(-1)}if(s>0&&i.length!==e[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,n,o){let s=e.length,i=[];if(s===0)return[];let a=0,u=e[0];if(u>=t.length)throw new Error(`Got currentValueRowId=${u}, which is not less than ${t.length}`);let l=t[u];i.push(l);for(let c=1;c<s;++c){let p=e[c];if(p===u)l>=0&&(++a,a<o?l+=n:l=-1);else{if(a=0,u=p,p>=t.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${t.length}`);l=t[p]}i.push(l)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,n,o){let s=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case Kr.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,t,n,o);case Kr.ROW_SPLITS:if(s.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(s,t,n,o);default:throw new Error(`Unsupported partition type: ${Kr[i]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case Kr.FIRST_DIM_SIZE:return e[0];case Kr.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Kr.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Kr[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let t=this.getFirstDimensionSize(),n=this.calculateOutputSize(t),o=new Array(this.raggedRank+1);o[o.length-1]=1;for(let u=o.length-2;u>=0;--u)o[u]=o[u+1]*n[u+1];let s=dv(n,!1),i=N.getArrayFromDType(this.valuesDType,N.sizeFromShape(s));if(o[0]*n[0]>0){let u=this.calculateFirstParentOutputIndex(t,o[0],n[0]);for(let l=1;l<=this.raggedRank;++l)u=this.calculateOutputIndex(l-1,u,o[l],n[l]);this.setOutput(this.raggedRank,u,i,s)}return[s,i]}setOutput(e,t,n,o){if(n.length===0)return;let s=this.values,i=n,a=o.slice();a=a.slice(e+1);let u=N.sizeFromShape(a),l=t.length,c=this.defaultValue;if(c.length!==u&&c.length!==1){let d=this.defaultValueShape;be(()=>{let y=W(c,d);c=xo(y,a).dataSync()})}let p=0,m=0,f=0;for(let d=0;d<=l;++d){let y=d<l?t[d]:-1;if(y===f){++f;continue}if(m<f){let x=s.subarray(p*u),b=i.subarray(m*u),$=(f-m)*u;hv(b,x,$)}if(d>=l){let x=n.length;y=Math.floor(x/u)}if(y>f)if(this.defaultValue.length===1)i.subarray(f*u,y*u).fill(this.defaultValue[0]),f=y;else for(;y>f;){let x=i.slice(f*u);hv(x,c,u),++f}y<0?(p=d+1,m=f):(p=d,m=f,f=m+1)}}};function hv(r,e,t){for(let n=0;n<t;n++)r[n]=e[n]}function dv(r,e){let t=[];for(let n of r){if(n<0){if(!e)throw new Error(`Dimension ${n} must be >= 0`);if(n<-1)throw new Error(`Dimension ${n} must be >= -1`);n=-1}t.push(n)}return t}function gv(r,e,t,n,o,s,i,a,u,l){return new Ki(r,e,t,n,o,s,i,a,u,l).compute()}function xv(r,e,t,n){let o=r===e,s=r<e&&t<0,i=e<r&&t>1;if(o||s||i)return N.makeZerosTypedArray(0,n);let a=Math.abs(Math.ceil((e-r)/t)),u=N.makeZerosTypedArray(a,n);e<r&&t===1&&(t=-1),u[0]=r;for(let l=1;l<u.length;l++)u[l]=u[l-1]+t;return u}var v2=Ht(r=>1/Math.sqrt(r)),Bye=Hr(ci,v2);function yv(r,e,t,n,o,s,i,a,u,l){let c=[n/o,o],p=r.values,m=e.values;if(n===0)return Ie(t,e.dtype);let f=Ie(c,e.dtype);typeof u=="string"||typeof u=="number"?f.values.fill(u):typeof u=="boolean"&&f.values.fill(+u);for(let d=0;d<s;d++){let y=[],x=0;for(let b=0;b<i;b++){let $=p[d*i+b];y.push($),x+=$*a[b]}if(x<0||x>=n/o)throw new Error(`Invalid indices: ${y} does not index into ${t}`);for(let b=0;b<o;b++)l?f.values[x*o+b]+=m[d*o+b]:f.values[x*o+b]=e.rank===0?m[0]:m[d*o+b]}return f}var bv=Ht(r=>1/(1+Math.exp(-r))),Hye=rf(pi,r=>1/(1+Math.exp(-r)));function vv(r,e,t,n,o){let s=nr.isSliceContinous(n,e,t),i=N.sizeFromShape(t),a=N.computeStrides(n);if(s){let p=nr.computeFlatOffset(e,a);return o==="string"?r.slice(p,p+i):r.subarray(p,p+i)}let u=o==="string"?B.fromUint8ToStringArray(r):r,l=Ie(n,o,u),c=Ie(t,o);for(let p=0;p<c.size;++p){let m=c.indexToLoc(p),f=m.map((d,y)=>d+e[y]);c.set(l.get(...f),...m)}return o==="string"?B.fromStringArrayToUint8(c.values):c.values}function wv(r,e,t,n,o,s,i){let a=e[0],u=s[0],l=new Array(u),c=new Array(a),p=e[1];if(u===0){if(a!==0)throw new Error(B.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let x=N.getArrayFromDType(t,0),b=N.getArrayFromDType(o,0);return[x,[0,p],b,l,c]}let m=!0,f=0,d=new Array(u).fill(0);for(let x=0;x<a;++x){let b=r[x*p];if(b<0)throw new Error(B.getSparseFillEmptyRowsNegativeIndexErrorMessage(x,b));if(b>=u)throw new Error(B.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(x,b,u));++d[b],m=m&&b>=f,f=b}let y=!0;for(let x=0;x<u;++x){let b=d[x]===0;l[x]=b,y=y&&!b,d[x]=Math.max(d[x],1),x>0&&(d[x]+=d[x-1])}if(y&&m){let x=r,b=n;for(let $=0;$<a;++$)c[$]=$;return[x,[a,p],b,l,c]}else{let x=d[u-1],b=N.getArrayFromDType(t,x*p),$=N.getArrayFromDType(o,x),A=new Array(u).fill(0);for(let O=0;O<a;++O){let M=r[O*p],G=A[M],H=(M===0?0:d[M-1])+G;A[M]++;for(let X=0;X<p;++X)b[H*p+X]=r[O*p+X];$[H]=n[O],c[O]=H}for(let O=0;O<u;++O)if(A[O]===0){let G=O===0?0:d[O-1];b[G*p+0]=O;for(let H=1;H<p;++H)b[G*p+H]=0;$[G]=i}return[b,[x,p],$,l,c]}}function Tv(r,e,t,n,o){let s=N.sizeFromShape(n),i=e[0],a=o.length,u=[],l=1,c=-1;for(let x=0;x<a;++x){let b=o[x];if(b===-1){if(c!==-1)throw new Error(B.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(c,x));c=x,u.push(1)}else{if(b<0)throw new Error(B.getSparseReshapeNegativeOutputDimErrorMessage(x,b));l*=b,u.push(b)}}if(c!==-1){if(l<=0)throw new Error(B.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let x=Math.trunc(s/l);if(l*x!==s)throw new Error(B.getSparseReshapeInputOutputMultipleErrorMessage(n,u));u[c]=x}if(N.sizeFromShape(u)!==s)throw new Error(B.getSparseReshapeInputOutputMismatchErrorMessage(n,u));let m=n.length,f=[];if(m>0){f[m-1]=1;for(let x=m-2;x>=0;--x)f[x]=f[x+1]*n[x+1]}let d=[];if(a>0){d[a-1]=1;for(let x=a-2;x>=0;--x)d[x]=d[x+1]*u[x+1]}let y=N.getArrayFromDType(t,i*a);for(let x=0;x<i;++x){let b=0;for(let $=0;$<m;++$)b+=r[x*m+$]*f[$];for(let $=0;$<a;++$)y[x*a+$]=Math.trunc(b/d[$]),b%=d[$]}return[y,[i,a],u]}function Sv(r,e,t,n,o,s=!1,i=0){let a=n.length,u=[e[0],r.length/e[0]],l=u[1],p=a>0?o[a-1]+1:0;if(p<0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=e.slice();m[0]=p;let f=m.reduce((A,O)=>A*O,1),d=N.getArrayFromDType(t,f);if(a===0)return p>0&&d.fill(i),[d,m];if(p<=0)throw new Error(B.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let y=0,x=1,b=0,$=o[y];for(;;){let A=0;if(x<a){if(A=o[x],$===A){++x;continue}if($>=A)throw new Error(B.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if($<0||$>=p)throw new Error(B.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage($,p));$>b&&d.fill(i,b*l,$*l);for(let O=y;O<x;++O){let M=n[O];if(M<0||M>=u[0])throw new Error(B.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(O,n[O],u[0]));for(let G=0;G<l;G++)d[$*l+G]+=r[M*l+G]}if(s)for(let O=0;O<l;O++)d[$*l+O]/=x-y;if(y=x,++x,b=$+1,$=A,x>a)break}return b<p&&d.fill(i,b*l,p*l),[d,m]}var Cv=Ht(r=>Math.sqrt(r)),obe=rf(mi,r=>Math.sqrt(r));var w2=it((r,e)=>{let t=r-e;return t*t}),lbe=ft(fi,w2);function Ev(r,e,t,n){let o=Ie(r,e.dtype);for(let s=0;s<o.size;s++){let i=o.indexToLoc(s),a=new Array(i.length);for(let u=0;u<a.length;u++)a[u]=i[u]*t[u]+n[u];o.set(e.get(...a),...i)}return o}var T2=class{constructor(e,t,n,o,s,i){this.separator=N.encodeString(e),this.nGramWidths=t,this.leftPad=N.encodeString(n),this.rightPad=N.encodeString(o),this.padWidth=s,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,o,s,i){for(let a=0;a<s;++a){let u=this.getPadWidth(i),l=Math.max(0,u-a),c=Math.max(0,u-(s-(a+1))),p=i-(l+c),m=t+(l>0?0:a-u),f=0;f+=l*this.leftPad.length;for(let $=0;$<p;++$)f+=e[m+$].length;f+=c*this.rightPad.length;let d=l+c+p-1;f+=d*this.separator.length,n[o+a]=new Uint8Array(f);let y=n[o+a],x=0,b=$=>$.forEach(A=>y[x++]=A);for(let $=0;$<l;++$)b(this.leftPad),b(this.separator);for(let $=0;$<p-1;++$)b(e[m+$]),b(this.separator);if(p>0){b(e[m+p-1]);for(let $=0;$<c;++$)b(this.separator),b(this.rightPad)}else{for(let $=0;$<c-1;++$)b(this.rightPad),b(this.separator);b(this.rightPad)}}}compute(e,t){let n=e.length,o=t.length;if(o>0){let u=t[0];if(u!==0)throw new Error(`First split value must be 0, got ${u}`);for(let l=1;l<o;++l){let c=t[l]>=u;if(c=c&&t[l]<=n,!c)throw new Error(`Invalid split value ${t[l]}, must be in [${u}, ${n}]`);u=t[l]}if(u!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${u}`)}let s=o-1,i=N.getArrayFromDType("int32",o);if(n===0||o===0){let u=new Array(n);for(let l=0;l<=s;++l)i[l]=0;return[u,i]}i[0]=0;for(let u=1;u<=s;++u){let l=t[u]-t[u-1],c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(l,p)}),this.preserveShort&&l>0&&c===0&&(c=1),i[u]=i[u-1]+c}let a=new Array(i[s]);for(let u=0;u<s;++u){let l=t[u],c=i[u];if(this.nGramWidths.forEach(p=>{let m=t[u+1]-t[u],f=this.getNumNGrams(m,p);this.createNGrams(e,l,a,c,f,p),c+=f}),this.preserveShort&&c===i[u]){let p=t[u+1]-t[u];if(p===0)continue;let m=p+2*this.padWidth,f=1;this.createNGrams(e,l,a,c,f,m)}}return[a,i]}};function Nv(r,e,t,n,o,s,i,a){return new T2(t,n,o,s,i,a).compute(r,e)}function XA(r,e,t,n){if(!r.length)return;if(e.length===0){for(let s=0;s<r.length;++s)n.push(r.subarray(s,s+1));return}if(e.length===1){let s=e[0],i=r.indexOf(s);for(;i!==-1;){let a=r.subarray(0,i);(!t||a.length!==0)&&n.push(a),r=r.subarray(i+1),i=r.indexOf(s)}(!t||r.length!==0)&&n.push(r);return}let o=0;for(let s=0;s<r.length+1;s++)if(s===r.length||e.indexOf(r[s])!==-1){let i=r.subarray(o,s);(!t||i.length!==0)&&n.push(i),o=s+1}}function Iv(r,e,t){let n=r.length,o=[],s=0,i=0,a=new Array(n);for(let m=0;m<n;++m){let f=o.length;XA(r[m],e,t,o);let d=o.length-f;a[m]=d,s+=d,i=Math.max(i,d)}let u=N.getArrayFromDType("int32",s*2),l=new Array(s),c=[n,i],p=0;for(let m=0;m<n;++m)for(let f=0;f<a[m];++f)u[p*2]=m,u[p*2+1]=f,l[p]=o[p],++p;return[u,l,c]}function $v(r,e){let t=N.getArrayFromDType("int32",r.length);for(let n=0;n<r.length;++n)t[n]=N.fingerPrint64(r[n]).modulo(e).getLowBitsUnsigned();return t}var S2=it((r,e)=>r-e),YA=Hi((r,e,t,n)=>({real:r-t,imag:e-n})),Tbe=ft(hi,S2,YA);function kv(r,e){let t=new Array(r.rank);for(let o=0;o<t.length;o++)t[o]=r.shape[o]*e[o];let n=Ie(t,r.dtype);for(let o=0;o<n.values.length;++o){let s=n.indexToLoc(o),i=new Array(r.rank);for(let u=0;u<i.length;u++)i[u]=s[u]%r.shape[u];let a=r.locToIndex(i);n.values[o]=r.values[a]}return n}var hu=(r,e)=>{let t=e.value-r.value;return t===0?r.index-e.index:t};function Av(r,e,t=0,n=r.length-1){for(;n>t;){if(n-t>600){let a=n-t+1,u=e-t+1,l=Math.log(a),c=.5*Math.exp(2*l/3),p=.5*Math.sqrt(l*c*(a-c)/a)*Math.sign(u-a/2),m=Math.max(t,Math.floor(e-u*c/a+p)),f=Math.min(n,Math.floor(e+(a-u)*c/a+p));Av(r,e,m,f)}let o=r[e],s=t,i=n;for(N.swap(r,t,e),hu(r[n],o)>0&&N.swap(r,t,n);s<i;){for(N.swap(r,s,i),s++,i--;hu(r[s],o)<0;)s=s+1;for(;hu(r[i],o)>0;)i=i-1}hu(r[t],o)===0?N.swap(r,t,i):(i=i+1,N.swap(r,i,n)),i<=e&&(t=i+1),e<=i&&(n=i-1)}}function _v(r,e,t,n,o){let s=e[e.length-1],[i,a]=[r.length/s,s],u=N.getTypedArrayFromDType(t,i*n),l=N.getTypedArrayFromDType("int32",i*n);for(let p=0;p<i;p++){let m=p*a,f=r.subarray(m,m+a),d=new Array(f.length);f.forEach(($,A)=>d[A]={value:$,index:A}),n<d.length&&(Av(d,n),d=d.slice(0,n)),o&&d.sort(hu);let y=p*n,x=u.subarray(y,y+n),b=l.subarray(y,y+n);for(let $=0;$<n;$++)x[$]=d[$].value,b[$]=d[$].index}let c=e.slice();return c[c.length-1]=n,[Ie(c,t,u),Ie(c,"int32",l)]}function Rv(r,e,t,n){let o=N.parseAxisParam(e,t)[0],s=[1,t[0],1];for(let d=0;d<o;d++)s[0]*=t[d];s[1]=t[o];for(let d=o+1;d<t.length;d++)s[2]*=t[d];let i={},a=new Int32Array(t[o]),u=new Jr(s,n,r),l=[],c=s[0]===1&&s[2]===1;for(let d=0;d<t[o];d++){let y;if(c)y=r[d].toString();else{let x=[];for(let b=0;b<s[0];b++)for(let $=0;$<s[2];$++)x.push(u.get(b,d,$));y=x.join(",")}if(i[y]!==void 0)a[d]=i[y];else{let x=Object.keys(i).length;i[y]=x,a[d]=x,l.push(d)}}let p=s.slice();p[1]=Object.keys(i).length;let m=new Jr(p,n);l.forEach((d,y)=>{for(let x=0;x<s[0];x++)for(let b=0;b<s[2];b++)m.set(u.get(x,d,b),x,y,b)});let f=t.slice();return f[o]=p[1],{outputValues:m.values,outputShape:f,indices:a}}var{addImpl:Ov,bincountImpl:nf,bincountReduceImpl:Fv,castImpl:Dv,ceilImpl:Pv,concatImpl:Lv,equalImpl:Bv,expImpl:Mv,expm1Impl:Vv,floorImpl:Uv,gatherNdImpl:Gv,gatherV2Impl:zv,greaterImpl:Wv,greaterEqualImpl:Hv,lessImpl:Kv,lessEqualImpl:jv,linSpaceImpl:qv,logImpl:Xv,maxImpl:Yv,maximumImpl:Zv,minimumImpl:Qv,multiplyImpl:Jv,negImpl:e6,notEqualImpl:t6,prodImpl:r6,raggedGatherImpl:n6,raggedRangeImpl:o6,raggedTensorToTensorImpl:s6,rangeImpl:i6,rsqrtImpl:a6,scatterImpl:u6,sigmoidImpl:l6,simpleAbsImpl:of,sliceImpl:c6,sparseFillEmptyRowsImpl:p6,sparseReshapeImpl:m6,sparseSegmentReductionImpl:sf,sqrtImpl:f6,stridedSliceImpl:h6,stringNGramsImpl:d6,stringSplitImpl:g6,stringToHashBucketFastImpl:x6,subImpl:y6,tileImpl:b6,topKImpl:v6,transposeImpl:Ns,uniqueImpl:w6}=C2;function E2(r,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${r}.${t}`)}function ut(r,e){return e===1?[r]:E2(r,e)}function T6(r,e){if(r===1)return"rc";let t="";for(let n=0;n<r;n++)t+=e[n],n<r-1&&(t+=",");return t}var af=class{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=We(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let t=ut("rc",this.rank),n=Te(this.rank),o=this.getOutOfBoundsCondition(t),s=this.getSetup(t),i=this.getOutput(t);this.userCode=`
        void main() {
          ${n} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let o=0;o<=1;o++){let s=`${n===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${e[e.length-1-i]},`+s;t.push(s)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}};var ji=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length);let n="";for(let o=0;o<4;o++){let s="thisRC = rc;";o%2===1&&(s+="thisRC.z += 1;"),o>1&&(s+="thisRC.y += 1;"),n+=`
        ${s}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${ZA(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Li():Pi(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${n}

        setOutput(result);
      }
    `}};function ZA(r,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?Ib(["r","c","d"],"inputShape"):sn(["r","c","d"],r)}
      return ivec3(r, c, d);
    }
  `}var uf=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,t,n){let o=C6(t,n),s=E6(e,o,n);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=S6(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let u=this.freeTextures[s].shift();return this.usedTextures[s].push(u),u}let a;return o===kt.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===kt.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===kt.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===kt.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===kt.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,t,n,o){if(this.freeTextures==null)return;let s=C6(n,o),i=E6(t,s,o);i in this.freeTextures||(this.freeTextures[i]=[]);let a=S6(t,s,this.gpgpu.gl,this.gpgpu.textureConfig,o),u=U().get("WEBGL_DELETE_TEXTURE_THRESHOLD");u!==-1&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let l=this.usedTextures[i],c=l.indexOf(e);if(c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(c,1),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function QA(r,e){let t=r;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===r.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function S6(r,e,t,n,o){let s=JA(e,n),i;if(o){let[u,l]=Nn(r[0],r[1]);i=u*l}else{let[u,l]=Ts(r[0],r[1]);i=u*l}let a=QA(t,s);return i*a}function JA(r,e){switch(r){case kt.PACKED_2X2_FLOAT32:return r2(e);case kt.PACKED_2X2_FLOAT16:return n2(e);case kt.UNPACKED_FLOAT32:return J1(e);case kt.UNPACKED_FLOAT16:return e2(e);case kt.PACKED_4X1_UNSIGNED_BYTE:return t2(e);default:throw new Error(`Unknown physical texture type ${r}`)}}function e_(r){return U().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?r?kt.PACKED_2X2_FLOAT32:kt.UNPACKED_FLOAT32:r?kt.PACKED_2X2_FLOAT16:kt.UNPACKED_FLOAT16}function C6(r,e){if(r===Ot.UPLOAD)return kt.PACKED_2X2_FLOAT32;if(r===Ot.RENDER||r==null)return e_(e);if(r===Ot.DOWNLOAD||r===Ot.PIXELS)return kt.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${r}`)}function E6(r,e,t){return`${r[0]}_${r[1]}_${e}_${t}`}var At=class{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},yt="if (isnan(x)) return x;",N6="return x;",N2="return abs(x);";var I6="return (x >= 0.0) ? x : (exp(x) - 1.0);",$6=yt+`
  return (x < 0.0) ? 0.0 : x;
`,k6=yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,$n="return x;",A6="return 1.0 / (1.0 + exp(-1.0 * x));";var R6="return x;",O6=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,F6=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,D6=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,P6="return 1.0 / (1.0 + exp(-1.0 * x));",or=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var lf=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length);let t=e.length,n=ut("rc",t),o=Te(t),s=T6(t,n),i=n.slice(-2),a=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var r_=En.whereImpl,n_=1e-7,o_=1e-4,cf={};function s_(r){return r in cf||(cf[r]={}),cf[r]}var i_=U().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),a_=600;function u_(){return U().global.screen==null?1024:U().global.screen.height*U().global.screen.width*window.devicePixelRatio*a_/1024/1024}var Is=class extends zo{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!U().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let t;if(e!=null){if(e instanceof zi)t=e;else{let n=yr(U().getNumber("WEBGL_VERSION"),e);t=new zi(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let n=yr(U().getNumber("WEBGL_VERSION"));t=new zi(n),this.binaryCache=s_(U().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new uf(this.gpgpu),this.numMBBeforeWarning=u_(),this.texData=new Ta(this,xn())}nextDataId(){return Is.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,o,s,i){let a=this.makeTensorInfo(t,n),u=this.texData.get(a.dataId);u.isPacked=!1,u.texture={texture:e,texShape:[o,s]},u.texShape=[o,s];let l=uu(t),c=new lu(l,!1,i),p=this.runWebGLProgram(c,[a],n,[[o,s]]);return p.shape=t,u.texture=null,this.disposeIntermediateTensorInfo(a),p.dataId}write(e,t,n){if((U().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||U().getBool("DEBUG"))&&this.checkNumericalProblems(e),n==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let o={id:this.nextDataId()};return this.texData.set(o,{shape:t,dtype:n,values:e,usage:Ot.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,o,s){if(U().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:n,dtype:o,values:t,usage:Ot.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let t=this.texData.get(e),{values:n,dtype:o,complexTensorInfos:s,slice:i,shape:a,isPacked:u}=t;if(i!=null){let m;u?m=new or(a,$n):m=new At(a,$n);let f=this.runWebGLProgram(m,[{dataId:e,shape:a,dtype:o}],o),d=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),d}if(n!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return n;let l=this.activeTimers!=null,c;l&&(c=N.now());let p;if(o==="complex64"){let m=this.readSync(s.real.dataId),f=this.readSync(s.imag.dataId);p=B.mergeRealAndImagArrays(m,f)}else p=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=N.now()-c),this.convertAndCacheOnCPU(e,p)}async read(e){if(this.pendingRead.has(e)){let d=this.pendingRead.get(e);return new Promise(y=>d.push(y))}let t=this.texData.get(e),{values:n,shape:o,slice:s,dtype:i,complexTensorInfos:a,isPacked:u}=t;if(s!=null){let d;u?d=new or(o,$n):d=new At(o,$n);let y=this.runWebGLProgram(d,[{dataId:e,shape:o,dtype:i}],i),x=this.read(y.dataId);return this.disposeIntermediateTensorInfo(y),x}if(n!=null)return this.convertAndCacheOnCPU(e);if(U().getBool("DEBUG")&&!U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&U().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,c;if(i!=="complex64"&&U().get("WEBGL_BUFFER_SUPPORTED")){c=this.decode(e);let d=this.texData.get(c.dataId);l=this.gpgpu.createBufferFromTexture(d.texture.texture,...ou(o))}this.pendingRead.set(e,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(i==="complex64"){let d=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),y=d[0],x=d[1];p=B.mergeRealAndImagArrays(y,x)}else if(l==null)p=this.getValuesFromTexture(e);else{let d=N.sizeFromShape(o);p=this.gpgpu.downloadFloat32MatrixFromBuffer(l,d)}if(c!=null&&this.disposeIntermediateTensorInfo(c),l!=null){let d=this.gpgpu.gl;le(d,()=>d.deleteBuffer(l))}let m=this.convertAndCacheOnCPU(e,p),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(d=>d(m)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&xn().removeDataId(e,this),this.pendingDeletes--),m}readToGPU(e,t={}){let n=this.texData.get(e),{values:o,shape:s,slice:i,dtype:a,isPacked:u,texture:l}=n;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;u?f=new or(s,$n):f=new At(s,$n);let d=this.runWebGLProgram(f,[{dataId:e,shape:s,dtype:a}],a),y=this.readToGPU(d,t);return this.disposeIntermediateTensorInfo(d),y}if(l==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let c=this.decode(e,t.customTexShape),p=xn().makeTensorFromTensorInfo(c),m=this.texData.get(c.dataId);return Object.assign({tensorRef:p},m.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype==="string")try{let n=t.map(o=>N.decodeString(o));return Ie(e.shape,e.dtype,n)}catch(n){throw new Error("Failed to decode encoded string bytes into utf-8")}return Ie(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!ab(n))throw U().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:o}=this.texData.get(e),s=N.sizeFromShape(t);if(U().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let m=this.decode(e),f=this.texData.get(m.dataId),d=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...ou(t)).subarray(0,s);return this.disposeIntermediateTensorInfo(m),d}let i=U().getBool("WEBGL_PACK")&&o===!0,a=i?uu(t):t,u=i?new Jm(a):new Qm(a),l=this.runWebGLProgram(u,[{shape:a,dtype:n,dataId:e}],"float32"),c=this.texData.get(l.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(c.texture.texture,c.texShape[0],c.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(l),p}timerAvailable(){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){let t=this.activeTimers,n=[],o=!1;this.programTimersStack==null?(this.programTimersStack=n,o=!0):this.activeTimers.push(n),this.activeTimers=n,e();let s=N.flatten(this.activeTimers.map(u=>u.query)).filter(u=>u!=null),i=N.flatten(this.activeTimers.map(u=>u.name)).filter(u=>u!=null);this.activeTimers=t,o&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let u=await Promise.all(s);a.kernelMs=N.sum(u),a.getExtraProfileInfo=()=>u.map((l,c)=>({name:i[c],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:N.now(),endMs:null}}endTimer(e){return U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=N.now(),e)}async getQueryTime(e){if(U().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:o,usage:s,isPacked:i,slice:a}=this.texData.get(e),u=a&&a.origDataId||e,l=this.dataRefCount.get(u);l>1?this.dataRefCount.set(u,l-1):(this.dataRefCount.delete(u),t!=null&&(this.numBytesInGPU-=this.computeBytes(o,n),this.textureManager.releaseTexture(t,o,s,i)));let c=this.texData.get(e);c.texture=null,c.texShape=null,c.isPacked=!1,c.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=i_){return U().getBool("WEBGL_CPU_FORWARD")&&e.every(n=>this.texData.get(n.dataId).texture==null&&N.sizeFromShape(n.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){B.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let t=e.dataSync();return r_(e.shape,t)}packedUnaryOp(e,t,n){let o=new or(e.shape,t),s=this.compileAndRun(o,[e],n);return xn().makeTensorFromTensorInfo(s)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){let o=of(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if(U().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,N2,e.dtype);let t=new At(e.shape,N2),n=this.compileAndRun(t,[e]);return xn().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let o;if(t==="string"&&n!=null&&n.length>0&&N.isString(n[0])){let s=n.map(i=>N.encodeString(i));o=this.write(s,e,t)}else o=this.write(n,e,t);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:t}}makeOutput(e,t,n){return xn().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new lf(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new af(e.shape),n=!0;return this.runWebGLProgram(t,[e],e.dtype,null,n)}packedReshape(e,t){let n=[ko(e.shape),...Ao(e.shape)],o={dtype:e.dtype,shape:n,dataId:e.dataId},s=[ko(t),...Ao(t)],i=new ji(s,n),a=!0,u=[n],l=this.runWebGLProgram(i,[o],e.dtype,u,a);return{dataId:l.dataId,shape:t,dtype:l.dtype}}decode(e,t){let n=this.texData.get(e),{isPacked:o,shape:s,dtype:i}=n;if(t!=null){let m=N.sizeFromShape(s),f=t[0]*t[1]*4;N.assert(m<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let a=uu(s),u;o?u=new Zm(a):u=new Ym(a);let l=!0,c=[t!=null?t:ou(a)],p=this.runWebGLProgram(u,[{shape:a,dtype:i,dataId:e}],i,c,l,t);return{dtype:i,shape:s,dataId:p.dataId}}runWebGLProgram(e,t,n,o,s=!1,i){let a=this.makeTensorInfo(e.outputShape,n),u=this.texData.get(a.dataId);if(e.packedOutput&&(u.isPacked=!0),e.outPackingScheme===$o.DENSE){let b=i!=null?i:ou(e.outputShape);u.texShape=b.map($=>$*2)}if(e.outTexUsage!=null&&(u.usage=e.outTexUsage),N.sizeFromShape(a.shape)===0)return u.values=N.getTypedArrayFromDType(a.dtype,0),a;let l=[],c=t.map(b=>{if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let $=this.texData.get(b.dataId);if($.texture==null){if(!e.packedInputs&&N.sizeFromShape(b.shape)<=U().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:$.values};e.packedInputs&&($.isPacked=!0,$.shape=b.shape)}if(this.uploadToGPU(b.dataId),!!$.isPacked!=!!e.packedInputs)b=$.isPacked?this.unpackTensor(b):this.packTensor(b),l.push(b),$=this.texData.get(b.dataId);else if($.isPacked&&!Ss($.shape,b.shape)){let A=b,O=b.shape;b.shape=$.shape,b=this.packedReshape(b,O),l.push(b),$=this.texData.get(b.dataId),A.shape=O}return{shape:b.shape,texData:$,isUniform:!1}});this.uploadToGPU(a.dataId);let p={shape:a.shape,texData:u,isUniform:!1},m=Db(e,c,p),f=this.getAndSaveBinary(m,()=>Ob(this.gpgpu,e,c,p)),d=this.activeTimers!=null,y;d&&(y=this.startTimer()),U().get("ENGINE_COMPILE_ONLY")||Fb(this.gpgpu,f,c,p,o),l.forEach(b=>this.disposeIntermediateTensorInfo(b)),d&&(y=this.endTimer(y),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(y)}));let x=U().get("WEBGL_FLUSH_THRESHOLD");if(x>0){let b=N.now();b-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=b)}if(!U().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&s===!1){let b=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),b}return a}compileAndRun(e,t,n,o,s=!1){return n=n||t[0].dtype,this.runWebGLProgram(e,t,n,o,s)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(U().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(t=>{this.gpgpu.deleteProgram(this.binaryCache[t].webGLProgram),delete this.binaryCache[t]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=be(()=>{if(!U().get("WEBGL_RENDER_FLOAT32_ENABLED")){let e=U().getBool("DEBUG");U().set("DEBUG",!1);let t=this.abs(ge(1e-8)).dataSync()[0];if(U().set("DEBUG",e),t>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?n_:o_}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:o,values:s,texture:i,usage:a,isPacked:u}=t;if(i!=null)return;let l=this.activeTimers!=null,c;l&&(c=N.now());let p=t.texShape;if(p==null&&(p=vb(n,u),t.texShape=p),s!=null){let m=uu(n),f,d=p[1],y=p[0],x=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(u||!x)&&([d,y]=Nn(p[0],p[1])),u?f=new ef(m,x):f=new lu(m,x);let b=x?[y,d]:p,$=this.makeTensorInfo(b,o),A=this.texData.get($.dataId);x?A.usage=Ot.PIXELS:A.usage=Ot.UPLOAD,A.texShape=b,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture($.dataId),d,y,s);let O=[[y,d]],M=!0,G=this.runWebGLProgram(f,[$],o,O,M),H=this.texData.get(G.dataId);t.texShape=H.texShape,t.isPacked=H.isPacked,t.usage=H.usage,U().get("ENGINE_COMPILE_ONLY")?this.disposeData(G.dataId):(t.texture=H.texture,t.values=null,this.texData.delete(G.dataId)),this.disposeIntermediateTensorInfo($),l&&(this.uploadWaitMs+=N.now()-c)}else{let m=this.acquireTexture(p,a,o,u);t.texture=m}}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:o}=n;return t!=null&&(n.values=l_(t,o)),n.values}acquireTexture(e,t,n,o){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,o)}computeBytes(e,t){return e[0]*e[1]*N.bytesPerElement(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(o=>{try{this.checkCompletion_(t),o(!0)}catch(s){throw s}});e.push(n)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Xd(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(q1(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let[,e]of Object.entries(this.binaryCache)){let{uniformLocations:t,customUniformLocations:n,infLoc:o,nanLoc:s,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:u,outShapeStridesLocation:l,outTexShapeLocation:c}=Q1(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=t,e.customUniformLocations=n,e.infLoc=o,e.nanLoc=s,e.inShapesLocations=i,e.inTexShapesLocations=a,e.outShapeLocation=u,e.outShapeStridesLocation=l,e.outTexShapeLocation=c}}createTensorFromGPUData(e,t,n){e.channels=e.channels||"RGBA";let{texture:o,height:s,width:i,channels:a}=e,u=xn().backend;if(!u.gpgpu.gl.isTexture(o))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let l=u.writeTexture(o,t,n,s,i,a);return xn().makeTensorFromDataId(l,t,n,u)}};Is.nextDataId=0;function l_(r,e){if(e==="float32"||e==="complex64")return r;if(e==="int32"||e==="bool"){let t=e==="int32"?new Int32Array(r.length):new Uint8Array(r.length);for(let n=0;n<t.length;++n)t[n]=Math.round(r[n]);return t}else throw new Error(`Unknown dtype ${e}`)}fo.isBrowser()&&Id("webgl",()=>new Is,2);var qi=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var Rr=class{constructor(e,t,n){this.variableNames=["A","B"],this.outputShape=B.assertAndGetBroadcastShape(t,n),this.enableShapeUniforms=We(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var kn=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var jr=class{constructor(e,t,n,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=B.assertAndGetBroadcastShape(t,n);let s=this.outputShape.length;this.enableShapeUniforms=We(s);let i="";if(o)if(s===0||N.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${Te(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let u=ut("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${u[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${u[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${u[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${u[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}};function lt(r){let{inputs:e,backend:t}=r,{x:n}=e;return t.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}var L6={kernelName:qo,backendName:"webgl",kernelFunc:lt};function sr(r){let{inputs:e,backend:t}=r,{real:n,imag:o}=e,s=t.makeTensorInfo(n.shape,"complex64"),i=t.texData.get(s.dataId),a=lt({inputs:{x:n},backend:t}),u=lt({inputs:{x:o},backend:t});return i.complexTensorInfos={real:a,imag:u},s}var B6={kernelName:Ia,backendName:"webgl",kernelFunc:sr};var I2="return (a < 0.) ? b * a : a;",$2=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function c_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{alpha:s}=n,i=t.makeTensorInfo([],"float32",N.createScalarValue(s,"float32")),a=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jr($2,o.shape,i.shape):new Rr(I2,o.shape,i.shape),u=t.runWebGLProgram(a,[o,i],"float32");return t.disposeIntermediateTensorInfo(i),u}var M6={kernelName:Gl,backendName:"webgl",kernelFunc:c_};var k2="return (a < 0.) ? b * a : a;",A2=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function p_(r){let{inputs:e,backend:t}=r,{x:n,alpha:o}=e,s=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jr(A2,n.shape,o.shape):new Rr(k2,n.shape,o.shape);return t.runWebGLProgram(s,[n,o],"float32")}var V6={kernelName:mc,backendName:"webgl",kernelFunc:p_};var qr="if (isnan(x)) return x;";function me({opSnippet:r,packedOpSnippet:e,cpuKernelImpl:t,dtype:n}){return({inputs:o,backend:s})=>{let{x:i}=o,a=s,u=n||i.dtype;if(a.shouldExecuteOnCPU([i])&&t!=null){let p=a.texData.get(i.dataId),m=t(p.values,u);return a.makeTensorInfo(i.shape,u,m)}let l=U().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null,c;return l?c=new or(i.shape,e):c=new At(i.shape,r),a.runWebGLProgram(c,[i],u)}}function Ve({opSnippet:r,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:n=!1,cpuKernelImpl:o,dtype:s}){return({inputs:i,backend:a})=>{let{a:u,b:l}=i,c=a;if(n&&u.dtype==="complex64"){let d=c.texData.get(u.dataId),y=c.texData.get(l.dataId),[x,b]=[[d.complexTensorInfos.real,y.complexTensorInfos.real],[d.complexTensorInfos.imag,y.complexTensorInfos.imag]].map(A=>{let[O,M]=A,G={dataId:O.dataId,dtype:O.dtype,shape:u.shape},H={dataId:M.dataId,dtype:M.dtype,shape:l.shape},X=new Rr(r,u.shape,l.shape);return c.runWebGLProgram(X,[G,H],Lt(O.dtype,M.dtype))}),$=sr({inputs:{real:x,imag:b},backend:c});return c.disposeIntermediateTensorInfo(x),c.disposeIntermediateTensorInfo(b),$}let p=s||Lt(u.dtype,l.dtype);if((u.dtype==="string"||l.dtype==="string"||c.shouldExecuteOnCPU([u,l]))&&o!=null){let d=c.texData.get(u.dataId).values,y=c.texData.get(l.dataId).values,x=u.dtype==="string"?B.fromUint8ToStringArray(d):d,b=u.dtype==="string"?B.fromUint8ToStringArray(y):y,[$,A]=o(u.shape,l.shape,x,b,p),O=c.makeTensorInfo(A,p),M=c.texData.get(O.dataId);return M.values=$,O}let m=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null,f;return m?f=new jr(e,u.shape,l.shape,t):f=new Rr(r,u.shape,l.shape),c.runWebGLProgram(f,[u,l],p)}}function Qn(r,e=!1){if(r==="linear")return e?R6:N6;if(r==="relu")return e?F6:$6;if(r==="elu")return e?O6:I6;if(r==="relu6")return e?D6:k6;if(r==="prelu")return e?A2:k2;if(r==="leakyrelu")return e?$2:I2;if(r==="sigmoid")return e?P6:A6;throw new Error(`Activation ${r} has not been implemented for the WebGL backend.`)}var Xi=class{constructor(e,t,n,o=!1,s=!1,i=!1,a=null,u=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=We(this.outputShape.length);let c=o?e[1]:e[2],p=Math.ceil(c/2),m=o?"i * 2, rc.y":"rc.y, i * 2",f=s?"rc.z, i * 2":"i * 2, rc.z",d=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],y=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],x="",b="";a&&(u?x=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:l?x=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:x=`vec4 activation(vec4 x) {
          ${a}
        }`,b="result = activation(result);");let $=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let A="rc.x",O="rc.x";e[0]<t[0]?A=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(O=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${x}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${A};
        int batchB = ${O};
        for (int i = 0; i < ${p}; i++) {
          vec4 a = getMatrixA(batchA, ${m});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${d[0]} * ${y[0]});
          result += (${d[1]} * ${y[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${$}

        ${b}

        setOutput(result);
      }
    `}};var _2={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},du=class{constructor(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=B.assertAndGetBroadcastShape(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var U6="return a * b;";function gu(r){let{inputs:e,backend:t}=r,{a:n,b:o}=e,s=B.upcastType(n.dtype,o.dtype);if(n.dtype==="complex64"){let a=t.texData.get(n.dataId),u=t.texData.get(o.dataId),l=new du(_2.REAL,n.shape,o.shape),c=new du(_2.IMAG,n.shape,o.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:n.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:n.shape},{dataId:u.complexTensorInfos.real.dataId,dtype:u.complexTensorInfos.real.dtype,shape:o.shape},{dataId:u.complexTensorInfos.imag.dataId,dtype:u.complexTensorInfos.imag.dtype,shape:o.shape}],m=t.runWebGLProgram(l,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),d=sr({inputs:{real:m,imag:f},backend:t});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),d}if(t.shouldExecuteOnCPU([n,o])){let a=t.texData.get(n.dataId),u=t.texData.get(o.dataId),[l,c]=Jv(n.shape,o.shape,a.values,u.values,s),p=t.makeTensorInfo(c,s),m=t.texData.get(p.dataId);return m.values=l,p}let i;return U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new jr(U6,n.shape,o.shape):i=new Rr(U6,n.shape,o.shape),t.runWebGLProgram(i,[n,o],s)}var G6={kernelName:ui,backendName:"webgl",kernelFunc:gu};function z6(r,e,t){let n=[ko(r.shape),...Ao(r.shape)],o={dtype:r.dtype,shape:n,dataId:r.dataId},s=[ko(e),...Ao(e)],i=new ji(s,n),a=!0,u=[n],l=t.runWebGLProgram(i,[o],r.dtype,u,a);return{dataId:l.dataId,shape:e,dtype:l.dtype}}function re(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{shape:s}=n,i=t,a=N.sizeFromShape(o.shape),u=N.inferFromImplicitShape(s,a),l=N.sizeFromShape(u);N.assert(a===l,()=>`The new shape (${u}) has ${l} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let c=i.texData.get(o.dataId);return c.isPacked&&!Ss(o.shape,u)&&!(c.texture!==null&&Ss(c.shape,u))?z6(o,u,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:u,dtype:o.dtype})}var W6={kernelName:bc,backendName:"webgl",kernelFunc:re};var xu=class{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:o,inSize:s,outSize:i}=e;this.outputShape=[o,i];let a=Math.floor(n/4)*4,u=n%4,l="sumValue += dot(values, ones);";if(t!=null){let p=1/t;l=`sumValue += dot(values * ${N.isInt(p)?p.toPrecision(2):p}, ones);`}let c="";s%n>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${a};
        if (${u===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${u===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${u===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}};var pf=class{constructor(e,t){this.variableNames=["x"];let{windowSize:n,batchSize:o,inSize:s,outSize:i}=e;this.outputShape=[o,i];let a="0.0",u="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",u="min"):t==="max"&&(a="-1.0 / 1e-20",u="max");let l=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?l="sumValue":t==="prod"?l="prodValue":t==="all"?l="allValue":t==="any"&&(l="anyValue");let c=Math.floor(n/4)*4,p=n%4,m=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${u}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${u}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";t==="all"?(a="1.0",m=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",m=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let d="";s%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${m}
        }
        setOutput(${l});
      }
    `}};function f_(r){let e=[];for(;e.length===0||e[e.length-1].outSize!==1;){let t=e.length?e[e.length-1].outSize:r[1],n=B.computeOptimalWindowSize(t);e.push({inSize:t,windowSize:n,outSize:Math.ceil(t/n)})}return e}function br(r,e,t,n){let o=f_(r.shape),s=r;for(let i=0;i<o.length;i++){let{inSize:a,windowSize:u,outSize:l}=o[i],c,p;t==="mean"?c=i===0?new xu({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:l},a):new xu({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:l}):c=new pf({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:l},t),p=s,s=n.runWebGLProgram(c,[s],e),p.dataId!==r.dataId&&n.disposeIntermediateTensorInfo(p)}return s}var mf=class{constructor(e,t){this.variableNames=["A"];let n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[t[i]];this.outputShape=n,this.rank=n.length;let o=Te(this.rank),s=h_(t);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function h_(r){let e=r.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],n=new Array(e);for(let o=0;o<r.length;o++)n[r[o]]=t[o];return n.join()}var ff=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let n=new Array(e.length);for(let c=0;c<n.length;c++)n[c]=e[t[c]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let o=Te(this.rank),s=E2("rc",this.rank),i=new Array(this.rank);for(let c=0;c<t.length;c++)i[t[c]]=s[c];let a=`vec2(${i.slice(-2).join()})`,u=`++${s[this.rank-1]} < ${n[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${u}) {
        result[1] = ${l};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${l};
        if(${u}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}};function _o(r,e,t){let n=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new ff(r.shape,e):new mf(r.shape,e);return t.runWebGLProgram(n,[r],r.dtype)}function H6(r,e,t,n){let o=e,s=r.shape.length,i=N.parseAxisParam(o,r.shape),a=i,u=B.getAxesPermutation(a,s),l=u!=null,c=r;l&&(c=_o(r,u,n),a=B.getInnerMostAxes(a.length,s)),B.assertAxesAreInnerMostDims("sum",a,s);let[p,m]=B.computeOutAndReduceShapes(c.shape,a),f=p;t&&(f=B.expandShapeToKeepDim(p,i));let d=N.sizeFromShape(m),x=N.sizeFromShape(r.shape)/d,b=re({inputs:{x:c},attrs:{shape:[x,d]},backend:n}),$=es(r.dtype),A=br(b,$,"sum",n),O=re({inputs:{x:A},attrs:{shape:f},backend:n});return n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(A),l&&n.disposeIntermediateTensorInfo(c),O}function $s(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,keepDims:i}=n;return H6(o,s,i,t)}var K6={kernelName:Oc,backendName:"webgl",kernelFunc:$s};function Qe(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{perm:s}=n,i=t,a=o.shape.length,u=new Array(a);for(let c=0;c<u.length;c++)u[c]=o.shape[s[c]];let l;if(i.shouldExecuteOnCPU([o])){let p=i.texData.get(o.dataId).values,m=Ns(p,o.shape,o.dtype,s,u);l=i.makeTensorInfo(u,o.dtype);let f=i.texData.get(l.dataId);f.values=m}else l=_o(o,s,i);return l}var j6={kernelName:gi,backendName:"webgl",kernelFunc:Qe};var R2=1e3;function ks({a:r,b:e,transposeA:t,transposeB:n,backend:o,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:u=null}){let l=r.shape.length,c=e.shape.length,p=t?r.shape[l-2]:r.shape[l-1],m=n?e.shape[c-1]:e.shape[c-2],f=t?r.shape[l-1]:r.shape[l-2],d=n?e.shape[c-2]:e.shape[c-1],y=r.shape.slice(0,-2),x=e.shape.slice(0,-2),b=N.sizeFromShape(y),$=N.sizeFromShape(x),O=bo.assertAndGetBroadcastShape(r.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,d]);N.assert(p===m,()=>`Error in matMul: inner shapes (${p}) and (${m}) of Tensors with shapes ${r.shape} and ${e.shape} and transposeA=${t} and transposeB=${n} must match.`);let M=t?[b,p,f]:[b,f,p],G=n?[$,d,m]:[$,m,d],H=re({inputs:{x:r},backend:o,attrs:{shape:M}}),X=re({inputs:{x:e},backend:o,attrs:{shape:G}}),q=[H,X],Y=Math.max(b,$),ie=t?H.shape[1]:H.shape[2],fe=s!=null,he=i!=null,$e=u==="leakyrelu",Oe=u!=null?Qn(u,!0):null,ct=fe||he||$e||Oe!=null,Xe;if((f===1||d===1)&&ie>R2&&ct===!1){let bt=H,ir=X;t&&(bt=Qe({inputs:{x:H},backend:o,attrs:{perm:[0,2,1]}}),q.push(bt)),n&&(ir=Qe({inputs:{x:X},backend:o,attrs:{perm:[0,2,1]}}),q.push(ir));let Ft=d!==1,An=d===1,_n=bt;Ft&&(_n=re({inputs:{x:bt},backend:o,attrs:{shape:[Y,ie,1]}}),q.push(_n));let Os=d===1?2:1,to=ir;An&&(to=re({inputs:{x:ir},backend:o,attrs:{shape:[Y,1,ie]}}),q.push(to));let vr=gu({inputs:{a:_n,b:to},backend:o});Xe=$s({inputs:{x:vr},backend:o,attrs:{axis:Os,keepDims:!0}}),q.push(vr)}else{let bt=Lt(r.dtype,e.dtype),ir=new Xi(M,G,[Y,f,d],t,n,fe,Oe,he,$e),Ft=[H,X];if(s!=null&&Ft.push(s),he&&Ft.push(i),$e){let An=o.makeTensorInfo([],"float32",N.createScalarValue(a,"float32"));Ft.push(An),q.push(An)}Xe=o.runWebGLProgram(ir,Ft,bt)}let Ye=re({inputs:{x:Xe},backend:o,attrs:{shape:O}});q.push(Xe);for(let bt of q)o.disposeIntermediateTensorInfo(bt);return Ye}function d_(r){let{inputs:e,backend:t,attrs:n}=r,{a:o,b:s,bias:i,preluActivationWeights:a}=e,{transposeA:u,transposeB:l,activation:c,leakyreluAlpha:p}=n;return ks({a:o,b:s,transposeA:u,transposeB:l,backend:t,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:c})}var q6={kernelName:Oa,backendName:"webgl",kernelFunc:d_};var X6="return abs(x);";function g_(r){let{inputs:e,backend:t}=r,{x:n}=e;if(t.shouldExecuteOnCPU([n])&&n.dtype!=="complex64"){let s=t.texData.get(n.dataId),i=of(s.values);return t.makeTensorInfo(n.shape,n.dtype,i)}let o;return U().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new or(n.shape,X6):o=new At(n.shape,X6),t.runWebGLProgram(o,[n],n.dtype)}var Y6={kernelName:Na,backendName:"webgl",kernelFunc:g_};var x_=yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,y_=me({opSnippet:x_}),Z6={kernelName:Uu,backendName:"webgl",kernelFunc:y_};var b_=yt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,v_=me({opSnippet:b_}),Q6={kernelName:Gu,backendName:"webgl",kernelFunc:v_};var J6="return a + b;",w_=Ve({opSnippet:J6,packedOpSnippet:J6,supportsComplex:!0,cpuKernelImpl:Ov}),ew={kernelName:lo,backendName:"webgl",kernelFunc:w_};var hf=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let n=[];this.variableNames.forEach(s=>{n.push(`float v${s} = get${s}AtOutCoords();`)});let o=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}};var df=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let n=[];this.variableNames.forEach(s=>{n.push(`vec4 v${s} = get${s}AtOutCoords();`)});let o=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}};function gf(r){let{inputs:e,backend:t}=r,n=e;if(n.length===1)return lt({inputs:{x:n[0]},backend:t});if(n.length>U().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let u=Math.floor(n.length/2),l=gf({inputs:n.slice(0,u),backend:t}),c=gf({inputs:n.slice(u),backend:t});return gf({inputs:[l,c],backend:t})}let o=n.map(u=>u.dtype).reduce((u,l)=>Lt(u,l)),s=n.map(u=>u.shape),a=U().getBool("WEBGL_PACK")?new df(n[0].shape,s):new hf(n[0].shape,s);return t.runWebGLProgram(a,n,o)}var tw={kernelName:zu,backendName:"webgl",kernelFunc:gf};function T_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,keepDims:i}=n,a=o.shape.length,u=N.parseAxisParam(s,o.shape),l=u,c=B.getAxesPermutation(l,a),p=o;c!=null&&(p=Qe({inputs:{x:o},backend:t,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,a)),B.assertAxesAreInnerMostDims("all",l,a);let[m,f]=B.computeOutAndReduceShapes(p.shape,l),d=N.sizeFromShape(f),y=re({inputs:{x:p},backend:t,attrs:{shape:[-1,d]}}),x=br(y,y.dtype,"all",t),b;if(i){let $=B.expandShapeToKeepDim(m,u);b=re({inputs:{x},backend:t,attrs:{shape:$}})}else b=re({inputs:{x},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),c!=null&&t.disposeIntermediateTensorInfo(p),b}var rw={kernelName:Wu,backendName:"webgl",kernelFunc:T_};function S_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,keepDims:i}=n,a=o.shape.length,u=N.parseAxisParam(s,o.shape),l=u,c=B.getAxesPermutation(l,a),p=o;c!=null&&(p=Qe({inputs:{x:o},backend:t,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,a)),B.assertAxesAreInnerMostDims("any",l,a);let[m,f]=B.computeOutAndReduceShapes(p.shape,l),d=N.sizeFromShape(f),y=re({inputs:{x:p},backend:t,attrs:{shape:[-1,d]}}),x=br(y,y.dtype,"any",t),b;if(i){let $=B.expandShapeToKeepDim(m,u);b=re({inputs:{x},backend:t,attrs:{shape:$}})}else b=re({inputs:{x},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),c!=null&&t.disposeIntermediateTensorInfo(p),b}var nw={kernelName:Hu,backendName:"webgl",kernelFunc:S_};var xf=class{constructor(e,t,n){this.variableNames=["A"];let{windowSize:o,batchSize:s,outSize:i}=e;n||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=t==="max"?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${u};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var yf=class{constructor(e,t,n,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,N.assert(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let s=e[e.length-1],i=Math.ceil(s/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");let a=this.outputShape,u=a.length,l=Te(u),c=ut("coords",u),p,m;if(i===1){m=u+1;let X=Te(m);p=`
        ${X} sourceLocR = ${X}(${c.join()}, 0);
        ++${c[u-1]};
        ${X} sourceLocG = ${X}(${c.join()}, 0);
        ++${c[u-2]};
        ${X} sourceLocA = ${X}(${c.join()}, 0);
        --${c[u-1]};
        ${X} sourceLocB = ${X}(${c.join()}, 0);
        --${c[u-2]};`}else m=u,p=`
        ${l} sourceLocR = coords;
        ++${c[u-1]};
        ${l} sourceLocG = coords;
        ++${c[u-2]};
        ${l} sourceLocA = coords;
        --${c[u-1]};
        ${l} sourceLocB = coords;
        --${c[u-2]};`;let f=["x","y","z","w","u","v"].slice(0,m),d="."+f[m-1],y=f.map(X=>"int "+X),x=ut("sourceLocR",m-1).concat("inIdx.r"),b=ut("sourceLocG",m-1).concat("inIdx.g"),$=ut("sourceLocB",m-1).concat("inIdx.b"),A=ut("sourceLocA",m-1).concat("inIdx.a"),O=n==="max"?"greaterThan":"lessThan",M=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${$.join()}),
                             getBestIndicesAChannel(${A.join()})));`,G=`vec4(
            getAChannel(${x.join()}),
            hasNextCol ? getAChannel(${b.join()}) : 0.,
            hasNextRow ? getAChannel(${$.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${A.join()}) : 0.)`,H=o?"":`
      float getBestIndicesAChannel(${y.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${y.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${H}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${c[u-1]} < ${a[u-1]-1};
        bool hasNextRow = ${c[u-2]} < ${a[u-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${d}, sourceLocG${d},
          sourceLocB${d}, sourceLocA${d}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${G};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${M}
          vec4 candidate = ${G};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${O}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function ow(r,e,t,n=null){let o=e.shape[0],s=e.shape[1];n!=null&&(o=n.shape[0],s=n.shape[1]);let i=B.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:o,outSize:Math.ceil(s/i)},u=new xf(a,t,n==null),l=[e];n!=null&&l.push(n);let c=r.runWebGLProgram(u,l,"int32");if(c.shape[1]===1)return c;let p=ow(r,e,t,c);return r.disposeIntermediateTensorInfo(c),p}function sw(r,e,t,n=null){let o=n!=null?n.shape:e.shape,s=o[o.length-1],i=B.computeOptimalWindowSize(s),a=new yf(o,i,t,n==null),u=n==null?[e]:[e,n],l=r.runWebGLProgram(a,u,"int32");if(l.shape.length===e.shape.length){let c=sw(r,e,t,l);return r.disposeIntermediateTensorInfo(l),c}return l}function bf(r,e,t,n){let o=[t];if(B.assertAxesAreInnerMostDims("arg"+n.charAt(0).toUpperCase()+n.slice(1),o,e.shape.length),!U().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){let s=[],i=r.texData.get(e.dataId),a=i!==null&&i.isPacked,u=e;a&&(u=r.unpackTensor(e),s.push(u));let[l,c]=B.computeOutAndReduceShapes(u.shape,o),p=N.sizeFromShape(c),m=re({inputs:{x:u},backend:r,attrs:{shape:[-1,p]}});s.push(m);let f=ow(r,m,n);s.push(f);let d=re({inputs:{x:f},backend:r,attrs:{shape:l}});return s.forEach(y=>r.disposeIntermediateTensorInfo(y)),d}return sw(r,e,n)}function C_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s}=n,i=N.parseAxisParam(s,o.shape),a=B.getAxesPermutation(i,o.shape.length),u=o,l=[];a!=null&&(u=Qe({inputs:{x:o},backend:t,attrs:{perm:a}}),l.push(u),i=B.getInnerMostAxes(i.length,u.shape.length)),B.assertAxesAreInnerMostDims("argMax",[i[0]],u.shape.length);let c=bf(t,u,i[0],"max");return l.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var iw={kernelName:Ku,backendName:"webgl",kernelFunc:C_};function E_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s}=n,i=N.parseAxisParam(s,o.shape),a=B.getAxesPermutation(i,o.shape.length),u=o,l=[];a!=null&&(u=Qe({inputs:{x:o},backend:t,attrs:{perm:a}}),l.push(u),i=B.getInnerMostAxes(i.length,u.shape.length)),B.assertAxesAreInnerMostDims("argMin",[i[0]],u.shape.length);let c=bf(t,u,i[0],"min");return l.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var aw={kernelName:ju,backendName:"webgl",kernelFunc:E_};var N_=yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,I_=me({opSnippet:N_}),uw={kernelName:qu,backendName:"webgl",kernelFunc:I_};var $_=yt+"return log(x + sqrt(x * x + 1.0));",k_=me({opSnippet:$_}),lw={kernelName:Xu,backendName:"webgl",kernelFunc:k_};var A_=yt+`
  return atan(x);
`,__=me({opSnippet:A_}),cw={kernelName:Yu,backendName:"webgl",kernelFunc:__};var R_=qi+`
  return atan(a, b);
`,O_=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+kn+`
  return result;
`,F_=Ve({opSnippet:R_,packedOpSnippet:O_}),pw={kernelName:Qu,backendName:"webgl",kernelFunc:F_};var D_=yt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,P_=me({opSnippet:D_}),mw={kernelName:Zu,backendName:"webgl",kernelFunc:P_};var an=class{constructor(e,t,n,o=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideHeight,u=e.strideWidth,l=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,f=e.padInfo.top,d=e.padInfo.left;this.outputShape=e.outShape;let y=t==="avg",x=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,b=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,$="0.0";if(y||($="-1.0 / 1e-20"),n){let X=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${u});
        const ivec2 pads = ivec2(${f}, ${d});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${m};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${X} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?s?x:b:`wR * ${m} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let A="max",O=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(O="avgValue / max(count, 1.0)");let M=Math.floor(i/4)*4,G=i%4,H=`
      if (${y}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${A}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${u});
      const ivec2 pads = ivec2(${f}, ${d});
      const float initializationValue = ${$};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${$});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${M}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${H}
          }

          int xC = xCCorner + ${M};
          if (${G===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${H}
          } else if (${G===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${H}
          } else if (${G===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${H}
          }
        }
        setOutput(${O});
      }
    `}},Ro=class{constructor(e,t,n,o=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideDepth,u=e.strideHeight,l=e.strideWidth,c=e.dilationDepth,p=e.dilationHeight,m=e.dilationWidth,f=e.effectiveFilterDepth,d=e.effectiveFilterHeight,y=e.effectiveFilterWidth,x=e.padInfo.front,b=e.padInfo.top,$=e.padInfo.left;this.outputShape=e.outShape;let A=t==="avg",O="0.0";if(A||(O="-1.0 / 1e-20"),n){let Y=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${u}, ${l});
        const ivec3 pads = ivec3(${x}, ${b}, ${$});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${d};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${y};
                  wC += ${m}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${Y} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?s?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${d} * ${y} +
                      wR * ${y} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let M="max",G=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(G="avgValue / max(count, 1.0)");let H=Math.floor(i/4)*4,X=i%4,q=`
      if (${A}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${M}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${u}, ${l});
      const ivec3 pads = ivec3(${x}, ${b}, ${$});
      const float initializationValue = ${O};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${O});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${H}; wC += 4) {
              int xC = xCCorner + wC * ${m};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                getValue(batch, xD, xR, xC + 3 * ${m}, ch)
              );

              ${q}
            }

            int xC = xCCorner + ${H};
            if (${X===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${q}
            } else if (${X===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                initializationValue,
                initializationValue
              );

              ${q}
            } else if (${X===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                initializationValue
              );

              ${q}
            }
          }
        }
        setOutput(${G});
      }
    `}};function L_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e;In(o,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:u}=n,l=1;N.assert(B.eitherStridesOrDilationsAreOne(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);let c=B.computePool2DInfo(o.shape,s,i,l,a,u);if(c.filterWidth===1&&c.filterHeight===1&&N.arraysEqual(c.inShape,c.outShape))return lt({inputs:{x:o},backend:t});let p=new an(c,"avg",!1);return t.runWebGLProgram(p,[o],"float32")}var fw={kernelName:Ju,backendName:"webgl",kernelFunc:L_};function B_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:u,dataFormat:l}=n,c=[1,1,1],p=B.computePool3DInfo(o.shape,s,i,c,a,u,l),m=new Ro(p,"avg",!1);return t.runWebGLProgram(m,[o],"float32")}var hw={kernelName:el,backendName:"webgl",kernelFunc:B_};var vf=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,o=e.strideHeight,s=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=u-1-e.padInfo.top,p=l-1-e.padInfo.left,m=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${p});
      const float avgMultiplier = float(${m});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${u};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},wf=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,o=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,u=e.dilationDepth,l=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterDepth,m=e.effectiveFilterHeight,f=e.effectiveFilterWidth,d=p-1-e.padInfo.front,y=m-1-e.padInfo.top,x=f-1-e.padInfo.left,b=1/(t*n*o);this.userCode=`
      const ivec3 pads = ivec3(${d}, ${y}, ${x});
      const float avgMultiplier = float(${b});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${m};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function M_(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,input:s}=e,i=s,{filterSize:a,strides:u,pad:l,dimRoundingMode:c}=n,p=[1,1,1],m=B.computePool3DInfo(i.shape,a,u,p,l,c),f=new wf(m);return t.runWebGLProgram(f,[o],i.dtype)}var dw={kernelName:n3,backendName:"webgl",kernelFunc:M_};function V_(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,input:s}=e,i=s;In([o,s],"avgPoolGrad");let{filterSize:a,strides:u,pad:l}=n,c=B.computePool2DInfo(i.shape,a,u,1,l),p=new vf(c);return t.runWebGLProgram(p,[o],i.dtype)}var gw={kernelName:r3,backendName:"webgl",kernelFunc:V_};function U_(r){let{inputs:e,backend:t,attrs:n}=r,{a:o,b:s}=e,{transposeA:i,transposeB:a}=n;return ks({a:o,b:s,transposeA:i,transposeB:a,backend:t})}var xw={kernelName:tl,backendName:"webgl",kernelFunc:U_};var Tf=class{constructor(e,t,n,o,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],B.assertAndGetBroadcastShape(e,t),B.assertAndGetBroadcastShape(e,n);let a="0.0";o!=null&&(B.assertAndGetBroadcastShape(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let u="1.0";s!=null&&(B.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${u};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var Sf=class{constructor(e,t,n,o,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],B.assertAndGetBroadcastShape(e,t),B.assertAndGetBroadcastShape(e,n);let a="vec4(0.0)";o!=null&&(B.assertAndGetBroadcastShape(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let u="vec4(1.0)";s!=null&&(B.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${u};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var G_=({inputs:r,backend:e,attrs:t})=>{let{x:n,mean:o,variance:s,offset:i,scale:a}=r;N.assert(o.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),N.assert(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),N.assert(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:u}=t;u==null&&(u=.001);let l=[n,o,s],c=null;i!=null&&(c=i.shape,l.push(i));let p=null;a!=null&&(p=a.shape,l.push(a));let m=U().getBool("WEBGL_PACK_NORMALIZATION")?new Sf(n.shape,o.shape,s.shape,c,p,u):new Tf(n.shape,o.shape,s.shape,c,p,u);return e.runWebGLProgram(m,l,l[0].dtype)},yw={kernelName:Fl,backendName:"webgl",kernelFunc:G_};var Cf=class{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let t=Te(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let n=z_(this.rank),o,s=e.map((i,a)=>`sourceLoc.${O2[a]} = start[${a}] + coords.${O2[a]};`);o=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${n}));
      }
    `}},O2=["x","y","z","w","u","v"];function z_(r){if(r===1)return"sourceLoc";if(r<=6)return O2.slice(0,r).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${r} is not yet supported`)}var Ef=class{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=Te(this.rank),n=ut("coords",this.rank),o=ut("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,u=this.rank===1?"":`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((c,p)=>`start[${p}]`).join()});`:e.map((c,p)=>`${o[p]} = ${n[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${a}
        ${u}
        setOutput(result);
      }
    `}};function W_(r,e,t,n){let o=n.texData.get(r.dataId),s=n.makeTensorInfo(t,r.dtype),i=n.texData.get(s.dataId);Object.assign(i,o),i.refCount=1,i.shape=t,i.dtype=r.dtype;let a=nr.computeFlatOffset(e,N.computeStrides(r.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||r.dataId};let u=n.dataRefCount.get(i.slice.origDataId)||1;return n.dataRefCount.set(i.slice.origDataId,u+1),s}function un(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{begin:s,size:i}=n,[a,u]=nr.parseSliceParams(o,s,i);if(nr.assertParamsValid(o,a,u),N.sizeFromShape(u)===0)return t.makeTensorInfo(u,o.dtype,[]);if(t.shouldExecuteOnCPU([o])||o.dtype==="string"){let p=t.texData.get(o.dataId),m=c6(p.values,a,u,o.shape,o.dtype);return t.makeTensorInfo(u,o.dtype,m)}let{isPacked:l}=t.texData.get(o.dataId),c=nr.isSliceContinous(o.shape,a,u);if(l||!c){let p=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ef(u):new Cf(u),m=[a];return t.runWebGLProgram(p,[o],o.dtype,m)}return t.uploadToGPU(o.dataId),W_(o,a,u,t)}var bw={kernelName:_a,backendName:"webgl",kernelFunc:un};var H_=r=>{let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{blockShape:s,crops:i}=n;N.assert(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce(($,A)=>$*A),u=B.getReshaped(o.shape,s,a),l=B.getPermuted(u.length,s.length),c=B.getReshapedPermuted(o.shape,s,a),p=B.getSliceBeginCoords(i,s.length),m=B.getSliceSize(c,i,s.length),f=[],d=re({inputs:{x:o},backend:t,attrs:{shape:u}}),y=Qe({inputs:{x:d},backend:t,attrs:{perm:l}}),x=re({inputs:{x:y},backend:t,attrs:{shape:c}}),b=un({inputs:{x},backend:t,attrs:{begin:p,size:m}});return f.push(d),f.push(y),f.push(x),f.forEach($=>t.disposeIntermediateTensorInfo($)),b},vw={kernelName:rl,backendName:"webgl",kernelFunc:H_};function K_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,weights:s}=e,{size:i}=n,a=t.readSync(o.dataId),u=t.readSync(s.dataId),l=nf(a,u,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,l)}var ww={kernelName:nl,backendName:"webgl",kernelFunc:K_};function j_(r){let{inputs:e,backend:t}=r,{s0:n,s1:o}=e,s=t.readSync(n.dataId),i=t.readSync(o.dataId),a=B.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var Tw={kernelName:ol,backendName:"webgl",kernelFunc:j_};var q_="return float(a != b);",F2=Ve({opSnippet:q_,cpuKernelImpl:t6,dtype:"bool"}),Sw={kernelName:li,backendName:"webgl",kernelFunc:F2};function Jn(r){let{inputs:e,backend:t}=r,{input:n}=e,o=t.texData.get(n.dataId);return lt({inputs:{x:o.complexTensorInfos.real},backend:t})}var Cw={kernelName:Aa,backendName:"webgl",kernelFunc:Jn};var X_="return float(int(x));";function Ew(r,e){let t=new At(r.shape,X_),n=e.runWebGLProgram(t,[r],"int32");return{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}function D2(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{dtype:s}=n;if(s==="complex64"){if(o.dtype==="complex64")return lt({inputs:{x:o},backend:t});let i=zr(o.shape),a=D2({inputs:{x:o},backend:t,attrs:{dtype:"float32"}}),u=sr({inputs:{real:a,imag:i},backend:t});return i.dispose(),t.disposeIntermediateTensorInfo(a),u}if(o.dtype==="complex64"){let i=Jn({inputs:{input:o},backend:t}),a=D2({inputs:{x:i},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(i),a}if(!N.hasEncodingLoss(o.dtype,s)){let i=lt({inputs:{x:o},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(t.shouldExecuteOnCPU([o])){let i=t.texData.get(o.dataId).values,[a,u,l]=Dv(i,o.shape,o.dtype,s);return t.makeTensorInfo(a,u,l)}if(s==="int32")return Ew(o,t);if(s==="bool"){let i=t.makeTensorInfo([],"bool",N.getTypedArrayFromDType("bool",1)),u=F2({inputs:{a:o,b:i},backend:t});return t.disposeIntermediateTensorInfo(i),u}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${s}`)}var Nw={kernelName:jo,backendName:"webgl",kernelFunc:D2};var Iw="return ceil(x);",Y_=me({opSnippet:Iw,packedOpSnippet:Iw,cpuKernelImpl:Pv}),$w={kernelName:Ys,backendName:"webgl",kernelFunc:Y_};var Nf=class{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var If=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function Z_(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{clipValueMin:s,clipValueMax:i}=n,a;U().getBool("WEBGL_PACK_CLIP")?a=new If(o.shape):a=new Nf(o.shape);let u=[[s],[i]];return t.runWebGLProgram(a,[o],o.dtype,u)}var kw={kernelName:sl,backendName:"webgl",kernelFunc:Z_};var $f=class{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function Aw(r,e){return{dataId:e.dataId,dtype:e.dtype,shape:r.shape}}function Q_(r){let{inputs:e,backend:t}=r,{x:n}=e,o=t.texData.get(n.dataId),s=new $f(n.shape),i=[Aw(n,o.complexTensorInfos.real),Aw(n,o.complexTensorInfos.imag)];return t.runWebGLProgram(s,i,i[0].dtype)}var _w={kernelName:il,backendName:"webgl",kernelFunc:Q_};var kf=class{constructor(e){this.outputShape=[],this.outputShape=B.computeOutShape(e,1),this.variableNames=e.map((i,a)=>`T${a}`);let t=new Array(e.length-1);t[0]=e[0][1];for(let i=1;i<t.length;i++)t[i]=t[i-1]+e[i][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<t.length;i++){let a=t[i-1];n.push(`else if (yC < ${t[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let o=t.length,s=t[t.length-1];n.push(`else setOutput(getT${o}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}};var _f=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=B.computeOutShape(e,t);let n=this.outputShape,o=n.length,s=Te(o),i=ut("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((y,x)=>`T${x}`);let u=new Array(e.length-1);u[0]=e[0][t];for(let y=1;y<u.length;y++)u[y]=u[y-1]+e[y][t];let l=a[t],c=a.slice(-2),p=a.join(),m=`if (${l} < ${u[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let y=1;y<u.length;y++){let x=u[y-1];m+=`
        if (${l} < ${u[y]}  && ${l} >= ${u[y-1]}) {
          return getChannel(
            getT${y}(${Af(a,l,x)}),
            vec2(${Af(c,l,x)}));
        }`}let f=u.length,d=u[u.length-1];m+=`
        return getChannel(
          getT${f}(${Af(a,l,d)}),
          vec2(${Af(c,l,d)}));`,this.userCode=`
      float getValue(${a.map(y=>"int "+y)}) {
        ${m}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${n[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${n[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${n[o-2]} &&
            ${i[o-1]} < ${n[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}};function Af(r,e,t){let n=r.indexOf(e);return r.map((s,i)=>i===n?`${s} - ${t}`:s).join()}function As(r){let{inputs:e,backend:t}=r,{input:n}=e,o=t.texData.get(n.dataId);return lt({inputs:{x:o.complexTensorInfos.imag},backend:t})}var Rw={kernelName:Bl,backendName:"webgl",kernelFunc:As};function Yi(r,e,t){let n=r[0].dtype;if(n==="complex64"){let f=r.map($=>Jn({inputs:{input:$},backend:t})),d=r.map($=>As({inputs:{input:$},backend:t})),y=Yi(f,e,t),x=Yi(d,e,t),b=sr({inputs:{real:y,imag:x},backend:t});return f.forEach($=>t.disposeIntermediateTensorInfo($)),d.forEach($=>t.disposeIntermediateTensorInfo($)),t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),b}let o=t.shouldExecuteOnCPU(r);if(n==="string"&&(o=!0),o){let f=r.map(O=>{let G=[-1,N.sizeFromShape(O.shape.slice(e))];return re({inputs:{x:O},backend:t,attrs:{shape:G}})}),d=f.map(O=>({vals:t.readSync(O.dataId),shape:O.shape})),y=B.computeOutShape(f.map(O=>O.shape),1),x=f[0].shape[0]===1,b=Lv(d,y,n,x),$=B.computeOutShape(r.map(O=>O.shape),e),A=t.makeTensorInfo($,n,b);return f.forEach(O=>t.disposeIntermediateTensorInfo(O)),A}let s=r.filter(f=>N.sizeFromShape(f.shape)>0),i=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let f=i?new At(r[0].shape,$n):new or(r[0].shape,$n);return t.runWebGLProgram(f,r,n)}let a=U().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let f=[];for(let y=0;y<s.length;y+=a){let x=s.slice(y,y+a);f.push(Yi(x,e,t))}let d=Yi(f,e,t);for(let y of f)t.disposeIntermediateTensorInfo(y);return d}if(i){let f=new _f(s.map(d=>d.shape),e);return t.runWebGLProgram(f,s,n)}let{tensors2D:u,outShape:l}=J_(s,e,t),c=new kf(u.map(f=>f.shape)),p=t.runWebGLProgram(c,u,n);u.forEach(f=>t.disposeIntermediateTensorInfo(f));let m=re({inputs:{x:p},attrs:{shape:l},backend:t});return t.disposeIntermediateTensorInfo(p),m}function J_(r,e,t){let n=B.computeOutShape(r.map(s=>s.shape),e);return{tensors2D:r.map(s=>re({inputs:{x:s},attrs:{shape:[-1,N.sizeFromShape(s.shape.slice(e))]},backend:t})),outShape:n}}function P2(r){let{inputs:e,backend:t,attrs:n}=r,{axis:o}=n,s=N.parseAxisParam(o,e[0].shape)[0],i=e.map(l=>l.shape);B.assertParamsConsistent(i,s);let a=B.computeOutShape(e.map(l=>l.shape),s);if(N.sizeFromShape(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);let u=e.filter(l=>N.sizeFromShape(l.shape)>0);return u.length===1?lt({inputs:{x:u[0]},backend:t}):Yi(u,s,t)}var Ow={kernelName:al,backendName:"webgl",kernelFunc:P2};var Zi=class{constructor(e,t=!1,n=null,o=!1,s=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let i=e.padInfo.top,a=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,m=e.filterHeight,f=e.filterWidth,d=Math.floor(e.inChannels/4)*4,y=e.inChannels%4,x=e.dataFormat==="channelsLast",b=x?1:2,$=x?2:3,A=x?3:1,O="",M="";n&&(o?O=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:s?O=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:O=`
          float activation(float x) {
            ${n}
          }
        `,M="result = activation(result);");let G=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${O}

      const ivec2 strides = ivec2(${u}, ${l});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${A}];

        ivec2 xRCCorner =
            ivec2(coords[${b}], coords[${$}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${m}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${d}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${x}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${y===1}) {

              if (${x}) {
                dotProd +=
                    getX(batch, xR, xC, ${d}) *
                    getW(wR, wC, ${d}, d2);
              } else {
                dotProd +=
                    getX(batch, ${d}, xR, xC) *
                    getW(wR, wC, ${d}, d2);
              }

            } else if (${y===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${d}, d2),
                getW(wR, wC, ${d} + 1, d2)
              );

              if (${x}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${d}),
                  getX(batch, xR, xC, ${d} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${d}, xR, xC),
                  getX(batch, ${d} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${y===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${d}, d2),
                getW(wR, wC, ${d} + 1, d2),
                getW(wR, wC, ${d} + 2, d2)
              );

              if (${x}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${d}),
                  getX(batch, xR, xC, ${d} + 1),
                  getX(batch, xR, xC, ${d} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${d}, xR, xC),
                  getX(batch, ${d} + 1, xR, xC),
                  getX(batch, ${d} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${G}
        ${M}
        setOutput(result);
      }
    `}},Rf=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,o=e.padInfo.left,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,u=e.dilationDepth,l=e.dilationHeight,c=e.dilationWidth,p=e.filterDepth,m=e.filterHeight,f=e.filterWidth,d=Math.floor(e.inChannels/4)*4,y=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${t}, ${n}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${u};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${d}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${y===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${d}) *
                  getW(wF, wR, wC, ${d}, d2);
              } else if (${y===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${d}),
                  getX(batch, xF, xR, xC, ${d} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${d}, d2),
                  getW(wF, wR, wC, ${d} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${y===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${d}),
                  getX(batch, xF, xR, xC, ${d} + 1),
                  getX(batch, xF, xR, xC, ${d} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${d}, d2),
                  getW(wF, wR, wC, ${d} + 1, d2),
                  getW(wF, wR, wC, ${d} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var Qi=class{constructor(e,t=!1,n=null,o=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=We(this.outputShape.length);let i=e.padInfo.left,a=e.strideWidth,u=e.dilationWidth,l=e.filterHeight,c=e.filterWidth,p=c,m=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<c;x++)m+=`
           vec4 xTexelC${x*2};
           int xTexelC${x*2}Ready;
           vec4 xTexelC${x*2+1};
           int xTexelC${x*2+1}Ready;
           vec4 xC${x};`;m+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let x=0;x<c;x++)m+=`
           xTexelC${x*2} = vec4(0.0);
           xTexelC${x*2}Ready = 0;
           xTexelC${x*2+1} = vec4(0.0);
           xTexelC${x*2+1}Ready = 0;
           xC${x} = vec4(0.0);`;m+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let x=0;x<(p+1)/2;x++){let b=x*2;if(m+=`
           xC = xCCorner + ${b*u};
           `,a===1){if(b<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                   xTexelC${b} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${b}.zw = vec2(0.0);
                   }
                   xTexelC${b}Ready = 1;
                 }
               `,u===1&&b>0?m+=`
                 xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                 `:m+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                   } else {
                     xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                   }
                   `):m+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                   xTexelC${b} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${b}.zw = vec2(0.0);
                   }
                   xTexelC${b}Ready = 1;
                 }

                 xC${b} = xTexelC${b};
                 `,b+1<c)){let $=i%2===0?N.nearestLargerEven(u):u;u%2===0&&i%2===1||u%2!==0&&i%2!==1?(m+=`
                   xCOffset = xC + imod(pads[1], 2) + ${$};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                     xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${b+1}.zw = vec2(0.0);
                     }
                     xTexelC${b+1}Ready = 1;
                   }
                   `,u>1?m+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                     } else {
                      xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                     }
                     `:m+=`
                     xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                     `):$===1?m+=`
                     xC${b+1} = xTexelC${b};
                     `:m+=`
                     xCOffset = xC + ${$};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                       xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${b+1}.zw = vec2(0.0);
                       }
                       xTexelC${b+1}Ready = 1;
                     }

                     xC${b+1} = xTexelC${b+1};
                     `}}else b<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                   xTexelC${b} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${b}.zw = vec2(0.0);
                   }
                   xTexelC${b}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                   xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${b+1}.zw = vec2(0.0);
                   }
                   xTexelC${b+1}Ready = 1;
                 }

                 xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
               `,b+1<c&&(m+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                 `)):(m+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                   xTexelC${b} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${b}.zw = vec2(0.0);
                   }
                   xTexelC${b}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                   xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${b+1}.zw = vec2(0.);
                   }
                   xTexelC${b+1}Ready = 1;
                 }

                 xC${b} = vec4(
                   xTexelC${b}.xy, xTexelC${b+1}.xy);
               `,b+1<c&&(m+=`
                   xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                 `)));b<c&&(m+=`
             wTexel = getW(r, ${b}, d1, d2);
             dotProd += xC${b}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${b}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,b+1<c&&(m+=`
               wTexel = getW(r, ${b+1}, d1, d2);
               dotProd += xC${b+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${b+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}m+=`
     }
   `,m+=`
     }
   `,m+=`
     }
   `;let f="",d="";n&&(o?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:s?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:f=`vec4 activation(vec4 x) {
           ${n}
         }`,d="result = activation(result);");let y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${m}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${y}
         ${d}
         setOutput(result);
       }
     `}};var Of=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=We(this.outputShape.length);let{dataFormat:n}=t,o=rt(),s=n==="channelsLast",i=s?1:2,a=s?2:3,u=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,l="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)l+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${c};

          ${u}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${o.output} = result;
      }
    `}};function Ff(r,e){let t=r.length;return t>=3?e?[...r.slice(0,-3),r[t-3]*r[t-2],r[t-1]]:[...r.slice(0,-3),r[t-3],r[t-2]*r[t-1]]:!e&&t===1&&r[0]>1?[r[0],1]:null}function Df({x:r,filter:e,convInfo:t,backend:n,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let u=r.shape,l=n.texData.get(r.dataId),c=t.inChannels,p=u[0]*u[1]*u[2],m=t.outChannels,f=t.dataFormat==="channelsLast",d=!1,y=!1,x,b=[];if(s!=null){let O=Ff(s.shape,f);O!=null&&(s=re({inputs:{x:s},backend:n,attrs:{shape:O}}),b.push(s))}if(o!=null){let O=Ff(o.shape,f);O!=null&&(o=re({inputs:{x:o},backend:n,attrs:{shape:O}}),b.push(o))}if(!((p===1||m===1)&&c>R2)&&l.isPacked&&f&&l.texture!=null&&u[2]%2!==0&&N.arraysEqual(l.shape.slice(-3),u.slice(-3))){let O=u[0]*u[1]*(u[2]+1),M={dataId:r.dataId,shape:[1,O,t.inChannels],dtype:r.dtype},G=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,N.assert(Ss(l.shape,M.shape),()=>`packed reshape ${l.shape} to ${M.shape} isn't free`);let H=re({inputs:{x:e},backend:n,attrs:{shape:[1,t.inChannels,t.outChannels]}});b.push(H);let X=ks({a:M,b:H,backend:n,transposeA:d,transposeB:y,bias:o,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),q=n.texData.get(X.dataId);N.assert(q.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=G,q.shape=t.outShape,x=lt({inputs:{x:X},backend:n}),x.shape=t.outShape,b.push(X)}else{let O=t.outHeight*t.outWidth,M=re({inputs:{x:r},backend:n,attrs:{shape:f?[t.batchSize,O,t.inChannels]:[t.batchSize,t.inChannels,O]}}),G=re({inputs:{x:e},backend:n,attrs:{shape:[1,t.inChannels,t.outChannels]}}),H=ks({a:f?M:G,b:f?G:M,transposeA:!f,transposeB:y,backend:n,bias:o,activation:a,preluActivationWeights:s,leakyreluAlpha:i});x=re({inputs:{x:H},backend:n,attrs:{shape:t.outShape}}),b.push(M),b.push(G),b.push(H)}for(let O of b)n.disposeIntermediateTensorInfo(O);return x}function Pf({x:r,filter:e,convInfo:t,backend:n,bias:o=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:u,filterHeight:l,inChannels:c,outWidth:p,outHeight:m,dataFormat:f}=t,d=f==="channelsLast",y=u*l*c,x=m*p,b=[t.batchSize,y,x],$=!0,A=!1,O=[];if(s!=null){let Ye=Ff(s.shape,d);Ye!=null&&(s=re({inputs:{x:s},backend:n,attrs:{shape:Ye}}),O.push(s))}if(o!=null){let Ye=Ff(o.shape,d);Ye!=null&&(o=re({inputs:{x:o},backend:n,attrs:{shape:Ye}}),O.push(o))}let M=re({inputs:{x:e},backend:n,attrs:{shape:[1,y,N.sizeFromShape(e.shape)/y]}});O.push(M);let G=new Of(b,t),H=[r.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],X=n.runWebGLProgram(G,[r],"float32",H),q=re({inputs:{x:X},backend:n,attrs:{shape:b}});O.push(X),O.push(q);let Y=o!=null,ie=s!=null,fe=a==="leakyrelu",he=a?Qn(a,!0):null,$e=new Xi(d?q.shape:M.shape,d?M.shape:q.shape,d?[t.batchSize,x,t.outChannels]:[t.batchSize,t.outChannels,x],$,A,Y,he,ie,fe),Oe=d?[q,M]:[M,q];if(o&&Oe.push(o),ie&&Oe.push(s),fe){let Ye=n.makeTensorInfo([],"float32",N.createScalarValue(i,"float32"));Oe.push(Ye),O.push(Ye)}let ct=n.runWebGLProgram($e,Oe,"float32"),Xe=re({inputs:{x:ct},backend:n,attrs:{shape:t.outShape}});O.push(ct);for(let Ye of O)n.disposeIntermediateTensorInfo(Ye);return Xe}function eR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s}=e,{strides:i,pad:a,dataFormat:u,dilations:l,dimRoundingMode:c}=n,p=B.convertConv2DDataFormat(u),m=B.computeConv2DInfo(o.shape,s.shape,i,l,a,c,!1,p),f;if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))f=Df({x:o,filter:s,convInfo:m,backend:t});else if(m.strideWidth<=2&&p==="channelsLast"&&U().getBool("WEBGL_EXP_CONV")){let y=new Qi(m),x=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];f=t.runWebGLProgram(y,[o,s],"float32",x)}else if(U().getBool("WEBGL_CONV_IM2COL"))f=Pf({x:o,filter:s,convInfo:m,backend:t});else{let y=new Zi(m);f=t.runWebGLProgram(y,[o,s],"float32")}let d=re({inputs:{x:f},backend:t,attrs:{shape:m.outShape}});return t.disposeIntermediateTensorInfo(f),d}var Fw={kernelName:ul,backendName:"webgl",kernelFunc:eR};var Lf=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,o=e.padInfo.top,s=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},Bf=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,o=e.strideHeight,s=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,u=n-1-e.padInfo.left,l=i?1:2,c=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},Mf=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,o=e.strideWidth,s=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${s};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Vf=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,o=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,u=t-1-e.padInfo.front,l=n-1-e.padInfo.top,c=o-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${l}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function tR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,dy:s}=e,{strides:i,pad:a,dataFormat:u,dimRoundingMode:l,filterShape:c}=n,p=B.convertConv2DDataFormat(u),m=B.computeConv2DInfo(o.shape,c,i,1,a,l,!1,p),f=new Lf(m);return t.runWebGLProgram(f,[o,s],"float32")}var Dw={kernelName:ll,backendName:"webgl",kernelFunc:tR};function rR(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,filter:s}=e,{inputShape:i,strides:a,pad:u,dataFormat:l,dimRoundingMode:c}=n,p=B.convertConv2DDataFormat(l),m=B.computeConv2DInfo(i,s.shape,a,1,u,c,!1,p),f=new Bf(m);return t.runWebGLProgram(f,[o,s],"float32")}var Pw={kernelName:cl,backendName:"webgl",kernelFunc:rR};function nR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s}=e,{strides:i,pad:a,dilations:u}=n,l=B.computeConv3DInfo(o.shape,s.shape,i,u,a),c=new Rf(l);return t.runWebGLProgram(c,[o,s],"float32")}var Lw={kernelName:pl,backendName:"webgl",kernelFunc:nR};function oR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,dy:s}=e,{strides:i,pad:a,filterShape:u}=n,l=B.computeConv3DInfo(o.shape,u,i,1,a),c=new Mf(l);return t.runWebGLProgram(c,[o,s],"float32")}var Bw={kernelName:o3,backendName:"webgl",kernelFunc:oR};function sR(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,filter:s}=e,{pad:i,strides:a,inputShape:u}=n,l=B.computeConv3DInfo(u,s.shape,a,1,i),c=new Vf(l);return t.runWebGLProgram(c,[o,s],"float32")}var Mw={kernelName:ml,backendName:"webgl",kernelFunc:sR};var iR=qr+`
  return cos(x);
`,aR=me({opSnippet:iR}),Vw={kernelName:fl,backendName:"webgl",kernelFunc:aR};var uR=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,lR=me({opSnippet:uR}),Uw={kernelName:hl,backendName:"webgl",kernelFunc:lR};var Uf=class{constructor(e,t,n,o,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,u,l]=e,[c]=t,[p,m]=n;this.outputShape=[c,p,m,l];let f=o==="bilinear"?1:0,[d,y]=[`${a-1}.0`,`${u-1}.0`],[x,b,$]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${d} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${d}`],[A,O,M]=m>1?[`${(u-1)/(m-1)}`,"(x2-x1) * width_ratio",`x1*${y} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${y}`];this.userCode=`
      const float height_ratio = float(${x});
      const float width_ratio = float(${A});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${b};
        float width_scale = ${O};

        float in_y = ${$};
        if( in_y < 0.0 || in_y > ${d} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${M};
        if( in_x < 0.0 || in_x > ${y} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var cR=r=>{let{inputs:e,backend:t,attrs:n}=r,{image:o,boxes:s,boxInd:i}=e,{cropSize:a,method:u,extrapolationValue:l}=n,c=new Uf(o.shape,s.shape,a,u,l);return t.runWebGLProgram(c,[o,s,i],"float32")},Gw={kernelName:xl,backendName:"webgl",kernelFunc:cR};var _s;(function(r){r.Prod="*",r.Sum="+"})(_s||(_s={}));var yu=class{constructor(e,t,n,o){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===_s.Prod?"1.0":"0.0",a=n?i:`getX(${zw(s,"coords",this.op)})`,u=this.outputShape[this.outputShape.length-1],l="",c="";n?(l=o?`end != ${u-1}`:"end != 0",c=o?"end + 1":"end - 1"):(l=o?`end + pow2 < ${u}`:"end >= pow2",c=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${Te(s)} coords = getOutputCoords();
        int end = ${Ww(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${c};
          ${Ww(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${zw(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function zw(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.x, ${e}.y`;if(r===3)return`${e}.x, ${e}.y, ${e}.z`;if(r===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function Ww(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.y`;if(r===3)return`${e}.z`;if(r===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function Gf(r,e,t,n,o,s){let i=e.shape.length,a=B.getAxesPermutation([n],i),u=e;a!=null&&(u=Qe({inputs:{x:e},backend:t,attrs:{perm:a}}));let l=B.getInnerMostAxes(1,i)[0];if(l!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${n}`);let c=u.shape[l],p=lt({inputs:{x:u},backend:t});for(let m=0;m<=Math.ceil(Math.log2(c))-1;m++){let f=new yu(r,u.shape,!1,s),d=[[m]],y=p;p=t.runWebGLProgram(f,[p],p.dtype,d),t.disposeIntermediateTensorInfo(y)}if(o){let m=new yu(r,u.shape,o,s),f=p;p=t.runWebGLProgram(m,[p],p.dtype),t.disposeIntermediateTensorInfo(f)}if(a!=null){let m=B.getUndoAxesPermutation(a),f=Qe({inputs:{x:p},backend:t,attrs:{perm:m}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(u),f}return p}function pR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,exclusive:i,reverse:a}=n;return Gf(_s.Prod,o,t,s,i,a)}var Hw={kernelName:dl,backendName:"webgl",kernelFunc:pR};function mR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,exclusive:i,reverse:a}=n;return Gf(_s.Sum,o,t,s,i,a)}var Kw={kernelName:gl,backendName:"webgl",kernelFunc:mR};function fR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,weights:s}=e,{size:i,binaryOutput:a}=n;if(o.shape.length===1){let u=t.readSync(o.dataId),l=t.readSync(s.dataId),c=nf(u,l,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,c)}else if(o.shape.length===2){let u=t.bufferSync(o),l=t.bufferSync(s),c=Fv(u,l,i,a);return t.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}var jw={kernelName:yl,backendName:"webgl",kernelFunc:fR};var zf=class{constructor(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function hR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{blockSize:s,dataFormat:i}=n,a=o.shape[0],u=i==="NHWC"?o.shape[1]:o.shape[2],l=i==="NHWC"?o.shape[2]:o.shape[3],c=i==="NHWC"?o.shape[3]:o.shape[1],p=u*s,m=l*s,f=c/(s*s),d=i==="NHWC"?[a,p,m,f]:[a,f,p,m],y=new zf(d,s,i);return t.runWebGLProgram(y,[o],o.dtype)}var qw={kernelName:bl,backendName:"webgl",kernelFunc:hR};var Ji=class{constructor(e,t=!1,n=null,o=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=We(this.outputShape.length);let i=e.filterHeight,a=e.filterWidth,u=e.outChannels/e.inChannels,l="",c="";n&&(o?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:s?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:l=`
          float activation(float x) {
            ${n}
          }
        `,c="result = activation(result);");let p=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${u};
        int q = d2 - d1 * ${u};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${c}
        setOutput(result);
      }
    `}};var ea=class{constructor(e,t=!1,n=null,o=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=We(this.outputShape.length);let i=e.outChannels/e.inChannels,a=e.padInfo.left,u=e.strideWidth,l=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,m=p,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let b=0;b<p;b++)f+=`
          vec4 xTexelC${b*2};
          int xTexelC${b*2}Ready;
          vec4 xTexelC${b*2+1};
          int xTexelC${b*2+1}Ready;
          vec4 xC${b};`;f+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let b=0;b<p;b++)f+=`
          xTexelC${b*2} = vec4(0.0);
          xTexelC${b*2}Ready = 0;
          xTexelC${b*2+1} = vec4(0.0);
          xTexelC${b*2+1}Ready = 0;
          xC${b} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let b=0;b<(m+1)/2;b++){let $=b*2;if(f+=`
          xC = xCCorner + ${$*l};
          `,u===1){if($<p&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }
              `,l===1&&$>0?f+=`
                xC${$} = vec4(xTexelC${$-2}.zw, xTexelC${$}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${$} = vec4(previous.zw, xTexelC${$}.xy);
                  } else {
                    xC${$} = vec4(0.0, 0.0, xTexelC${$}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                xC${$} = xTexelC${$};
                `,$+1<p)){let A=a%2===0?N.nearestLargerEven(l):l;l%2===0&&a%2===1||l%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${A};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                    xTexelC${$+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${$+1}.zw = vec2(0.0);
                    }
                    xTexelC${$+1}Ready = 1;
                  }
                  `,l>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${$+1} = vec4(previous.zw, xTexelC${$+1}.xy);
                    } else {
                     xC${$+1} = vec4(0.0, 0.0, xTexelC${$+1}.xy);
                    }
                    `:f+=`
                    xC${$+1} = vec4(xTexelC${$}.zw, xTexelC${$+1}.xy);
                    `):A===1?f+=`
                    xC${$+1} = xTexelC${$};
                    `:f+=`
                    xCOffset = xC + ${A};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                      xTexelC${$+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${$+1}.zw = vec2(0.0);
                      }
                      xTexelC${$+1}Ready = 1;
                    }

                    xC${$+1} = xTexelC${$+1};
                    `}}else $<p&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${$+1}Ready == 0) {
                  xTexelC${$+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${$+1}.zw = vec2(0.0);
                  }
                  xTexelC${$+1}Ready = 1;
                }

                xC${$} = vec4(xTexelC${$}.zw, xTexelC${$+1}.zw);
              `,$+1<p&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${$+1} = vec4(xTexelC${$+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${$}Ready == 0) {
                  xTexelC${$} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${$}.zw = vec2(0.0);
                  }
                  xTexelC${$}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${$+1}Ready == 0) {
                  xTexelC${$+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${$+1}.zw = vec2(0.);
                  }
                  xTexelC${$+1}Ready = 1;
                }

                xC${$} = vec4(
                  xTexelC${$}.xy, xTexelC${$+1}.xy);
              `,$+1<p&&(f+=`
                  xC${$+1} = vec4(xTexelC${$}.zw, xTexelC${$+1}.zw);
                `)));$<p&&(f+=`
            wTexel = getW(r, ${$}, d1, q);
            dotProd += xC${$} * vec4(wTexel.xz, wTexel.xz);
          `,$+1<p&&(f+=`
              wTexel = getW(r, ${$+1}, d1, q);
              dotProd += xC${$+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let d="",y="";n&&(o?d=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:s?d=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:d=`vec4 activation(vec4 x) {
          ${n}
        }`,y="result = activation(result);");let x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${d}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${x}
        ${y}
        setOutput(result);
      }
    `}};function dR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s}=e,{strides:i,pad:a,dilations:u,dimRoundingMode:l}=n,c=u;c==null&&(c=[1,1]),N.assert(B.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let p=B.computeConv2DInfo(o.shape,s.shape,i,c,a,l,!0),m;U().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?m=new ea(p):m=new Ji(p);let f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return t.runWebGLProgram(m,[o,s],"float32",f)}var Xw={kernelName:vl,backendName:"webgl",kernelFunc:dR};var Wf=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,o=e.padInfo.top,s=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Hf=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,o=e.strideHeight,s=e.strideWidth,i=t-1-e.padInfo.top,a=n-1-e.padInfo.left,u=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${u}; dm++) {
              int d2 = d1 * ${u} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function gR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,dy:s}=e,{strides:i,dilations:a,pad:u,dimRoundingMode:l,filterShape:c}=n,p=B.computeConv2DInfo(o.shape,c,i,a,u,l,!0),m=new Wf(p);return t.runWebGLProgram(m,[o,s],"float32")}var Yw={kernelName:wl,backendName:"webgl",kernelFunc:gR};function xR(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,filter:s}=e,{strides:i,dilations:a,pad:u,dimRoundingMode:l,inputShape:c}=n,p=B.computeConv2DInfo(c,s.shape,i,a,u,l,!0),m=new Hf(p);return t.runWebGLProgram(m,[o,s],"float32")}var Zw={kernelName:Tl,backendName:"webgl",kernelFunc:xR};var Kf=class{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function yR(r){let{inputs:e,backend:t}=r,{x:n}=e,o=[...n.shape,...n.shape],s=N.sizeFromShape(n.shape),i=re({inputs:{x:n},backend:t,attrs:{shape:[s]}}),a=new Kf(s),u=t.runWebGLProgram(a,[i],i.dtype),l=re({inputs:{x:u},backend:t,attrs:{shape:o}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(u),l}var Qw={kernelName:Sl,backendName:"webgl",kernelFunc:yR};var jf=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:o,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:u,dilationHeight:l,dilationWidth:c}=e,{top:p,left:m}=o;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${p}, ${m});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${u}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function bR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s}=e,{strides:i,pad:a,dilations:u}=n,l=B.computeDilation2DInfo(o.shape,s.shape,i,a,"NHWC",u),c,p=new jf(l);c=t.runWebGLProgram(p,[o,s],"float32");let m=re({inputs:{x:c},backend:t,attrs:{shape:l.outShape}});return t.disposeIntermediateTensorInfo(c),m}var Jw={kernelName:Cl,backendName:"webgl",kernelFunc:bR};function vR(r){let{inputs:e,backend:t,attrs:n}=r,{equation:o}=n,s=e,{allDims:i,summedDims:a,idDims:u}=B.decodeEinsumEquation(o,s.length);B.checkEinsumDimSizes(i.length,u,s);let{path:l,steps:c}=B.getEinsumComputePath(a,u),p=c.length,m=null,f=i.length,d=[];for(let y=0;y<p;++y){for(let x of c[y]){let{permutationIndices:b,expandDims:$}=B.getEinsumPermutation(f,u[x]),A;B.isIdentityPermutation(b)?A=s[x]:(A=Qe({inputs:{x:s[x]},backend:t,attrs:{perm:b}}),d.push(A));let O=A.shape.slice();for(let M=0;M<$.length;++M)O.splice($[M],0,1);N.arraysEqual(A.shape,O)||(A=re({inputs:{x:A},backend:t,attrs:{shape:O}}),d.push(A)),m===null?m=A:(m=gu({inputs:{a:A,b:m},backend:t}),d.push(m))}y<p-1&&(l[y]>=0&&(m=$s({inputs:{x:m},backend:t,attrs:{axis:l[y]-(i.length-f),keepDims:!1}}),d.push(m)),f--)}for(let y of d)y!==m&&t.disposeIntermediateTensorInfo(y);return m}var e5={kernelName:Nl,backendName:"webgl",kernelFunc:vR};var wR="return (x >= 0.0) ? x : (exp(x) - 1.0);",TR=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,SR=me({opSnippet:wR,packedOpSnippet:TR}),t5={kernelName:Il,backendName:"webgl",kernelFunc:SR};var CR="return (b >= 1.0) ? a : a * (b + 1.0);",ER=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,NR=r=>{let{inputs:e,backend:t}=r,{dy:n,y:o}=e,s=U().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new jr(ER,n.shape,o.shape):new Rr(CR,n.shape,o.shape);return t.runWebGLProgram(s,[n,o],n.dtype)},r5={kernelName:s3,backendName:"webgl",kernelFunc:NR};var IR=`
  return vec4(equal(a, b));
`,$R="return float(a == b);",kR=Ve({opSnippet:$R,packedOpSnippet:IR,dtype:"bool",cpuKernelImpl:Bv}),n5={kernelName:Zs,backendName:"webgl",kernelFunc:kR};var AR=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${B.ERF_P};
  float a1 = ${B.ERF_A1};
  float a2 = ${B.ERF_A2};
  float a3 = ${B.ERF_A3};
  float a4 = ${B.ERF_A4};
  float a5 = ${B.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,_R=me({opSnippet:AR}),o5={kernelName:$l,backendName:"webgl",kernelFunc:_R};var RR=qr+`
  return exp(x);
`,OR=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,L2=me({opSnippet:RR,packedOpSnippet:OR,cpuKernelImpl:Mv,dtype:"float32"}),s5={kernelName:Qs,backendName:"webgl",kernelFunc:L2};function qf(r){let{inputs:e,attrs:t,backend:n}=r,{dim:o}=t,{input:s}=e,i=s.shape.length,a=s.shape.slice(),u=o;return o<0&&(N.assert(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),u=i+o+1),a.splice(u,0,1),re({inputs:{x:s},backend:n,attrs:{shape:a}})}var i5={kernelName:kl,backendName:"webgl",kernelFunc:qf};var a5="return exp(x) - 1.0;",FR=me({opSnippet:a5,packedOpSnippet:a5,cpuKernelImpl:Vv}),u5={kernelName:Js,backendName:"webgl",kernelFunc:FR};var bu=class{constructor(e,t,n){this.variableNames=["real","imag"];let o=t[1];this.outputShape=t;let s=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=n?`${o}.0`:"1.0",a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function Xf(r,e,t){let n=t.texData.get(r.dataId),o=N.sizeFromShape(r.shape),s=r.shape[r.shape.length-1],i=o/s,a=re({inputs:{x:r},backend:t,attrs:{shape:[i,s]}}),u=a.shape,l=new bu("real",u,e),c=new bu("imag",u,e),p=[{dataId:n.complexTensorInfos.real.dataId,dtype:n.complexTensorInfos.real.dtype,shape:u},{dataId:n.complexTensorInfos.imag.dataId,dtype:n.complexTensorInfos.imag.dtype,shape:u}],m=t.runWebGLProgram(l,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),d=sr({inputs:{real:m,imag:f},backend:t});t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f);let y=re({inputs:{x:d},backend:t,attrs:{shape:r.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(d),y}function DR(r){let{inputs:e,backend:t}=r,{input:n}=e;return Xf(n,!1,t)}var l5={kernelName:Al,backendName:"webgl",kernelFunc:DR};var Yf=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function eo(r){let{backend:e,attrs:t}=r,{shape:n,value:o}=t,{dtype:s}=t;if(s=s||N.inferDtype(o),s==="string"){let i=N.getArrayFromDType(s,N.sizeFromShape(n));return i.fill(o),e.makeTensorInfo(n,s,i)}else{let i=new Yf(n,o),a=[[o]];return e.runWebGLProgram(i,[],s,a)}}var c5={kernelName:_l,backendName:"webgl",kernelFunc:eo};var Zf=class{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var p5={kernelName:Rl,backendName:"webgl",kernelFunc:({inputs:r,backend:e})=>{let{image:t}=r,n=e,o=new Zf(t.shape);return n.runWebGLProgram(o,[t],t.dtype)}};var m5="return floor(x);",PR=me({opSnippet:m5,packedOpSnippet:m5,cpuKernelImpl:Uv}),f5={kernelName:ei,backendName:"webgl",kernelFunc:PR};var LR=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,BR=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,MR=Ve({opSnippet:LR,packedOpSnippet:BR,dtype:"int32"}),h5={kernelName:Ol,backendName:"webgl",kernelFunc:MR};var Qf=class{constructor(e){this.variableNames=["A"];let t=rt(),[n,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var Jf=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=rt(),[n,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}};var d5={kernelName:Ra,backendName:"webgl",kernelFunc:VR},ta,B2=U().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function VR(r){let{inputs:e,backend:t,attrs:n}=r,{pixels:o}=e,{numChannels:s}=n,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[u,l]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=[l,u],p=[l,u,s];if(a||i){let y=U().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(ta==null||y!==B2)&&(B2=y,ta=document.createElement("canvas").getContext("2d",{willReadFrequently:B2})),ta.canvas.width=u,ta.canvas.height=l,ta.drawImage(o,0,0,u,l),o=ta.canvas}let m=t.makeTensorInfo(c,"int32");t.texData.get(m.dataId).usage=Ot.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(m.dataId),o);let f=U().getBool("WEBGL_PACK")?new Jf(p):new Qf(p),d=t.runWebGLProgram(f,[m],"int32");return t.disposeData(m.dataId),d}function UR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s,bias:i,preluActivationWeights:a}=e,{strides:u,pad:l,dataFormat:c,dilations:p,dimRoundingMode:m,activation:f,leakyreluAlpha:d}=n,y=B.convertConv2DDataFormat(c),x=B.computeConv2DInfo(o.shape,s.shape,u,p,l,m,!1,y),b,$=[],A=i!=null,O=a!=null,M=f==="leakyrelu",G=()=>{let X=[o,s],q=(Y,ie)=>{if(ie==="NCHW"&&Y.shape.length===1&&Y.shape[0]!==1){let fe=re({inputs:{x:Y},backend:t,attrs:{shape:[Y.shape[0],1,1]}});return $.push(fe),fe}return Y};if(A&&X.push(q(i,c)),O&&X.push(q(a,c)),M){let Y=t.makeTensorInfo([],"float32",N.createScalarValue(d,"float32"));X.push(Y),$.push(Y)}return X};if(x.filterHeight===1&&x.filterWidth===1&&x.dilationHeight===1&&x.dilationWidth===1&&x.strideHeight===1&&x.strideWidth===1&&(x.padInfo.type==="SAME"||x.padInfo.type==="VALID"))b=Df({x:o,filter:s,convInfo:x,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:d});else if(x.strideWidth<=2&&y==="channelsLast"&&U().getBool("WEBGL_EXP_CONV")){let X=f?Qn(f,!0):null,q=new Qi(x,A,X,O,M),Y=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],ie=G();b=t.runWebGLProgram(q,ie,"float32",Y)}else if(U().getBool("WEBGL_CONV_IM2COL"))b=Pf({x:o,filter:s,convInfo:x,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:d});else{let X=f?Qn(f,!1):null,q=new Zi(x,A,X,O,M),Y=G();b=t.runWebGLProgram(q,Y,"float32")}let H=re({inputs:{x:b},backend:t,attrs:{shape:x.outShape}});return $.push(b),$.forEach(X=>t.disposeIntermediateTensorInfo(X)),H}var g5={kernelName:Fa,backendName:"webgl",kernelFunc:UR};function GR(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,filter:s,bias:i,preluActivationWeights:a}=e,{strides:u,pad:l,dilations:c,dimRoundingMode:p,activation:m,leakyreluAlpha:f}=n,d=[],y=c;y==null&&(y=[1,1]),N.assert(B.eitherStridesOrDilationsAreOne(u,y),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${y}'`);let x=B.computeConv2DInfo(o.shape,s.shape,u,y,l,p,!0),b=U().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels===1,$=m?Qn(m,b):null,A=[o,s],O=i!=null,M=a!=null,G=m==="leakyrelu";if(O&&A.push(i),M&&A.push(a),G){let Y=t.makeTensorInfo([],"float32",N.createScalarValue(f,"float32"));A.push(Y),d.push(Y)}let H;b?H=new ea(x,O,$,M,G):H=new Ji(x,O,$,M,G);let X=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],q=t.runWebGLProgram(H,A,"float32",X);return d.forEach(Y=>t.disposeIntermediateTensorInfo(Y)),q}var x5={kernelName:Da,backendName:"webgl",kernelFunc:GR};var eh=class{constructor(e,t,n,o){this.sliceDim=e,this.strides=t,this.paramsShape=o,this.variableNames=["x","indices"],this.outputShape=n;let s=Te(n.length),i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function zR(r){let{inputs:e,backend:t}=r,{params:n,indices:o}=e,s=o.shape,i=s[s.length-1],a=N.sizeFromShape(n.shape),[u,l,c,p]=B.prepareAndValidate(n,o),m=re({inputs:{x:o},backend:t,attrs:{shape:[l,i]}}),f=re({inputs:{x:n},backend:t,attrs:{shape:[N.sizeFromShape(n.shape)/c,c]}});if(t.shouldExecuteOnCPU([n,o])||n.dtype==="string"){let b=t.readSync(o.dataId),$=t.bufferSync(n),A=Gv(b,$,n.dtype,l,i,c,p,n.shape,a);return t.makeTensorInfo(u,n.dtype,A.values)}let d=new eh(i,p,[l,c],n.shape),y=t.runWebGLProgram(d,[f,m],f.dtype),x=re({inputs:{x:y},backend:t,attrs:{shape:u}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(y),x}var y5={kernelName:Pl,backendName:"webgl",kernelFunc:zR};var th=class{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let n=Te(this.rank),o=WR(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}};function WR(r,e){let t=["resRC.x","resRC.y","resRC.z","resRC.w"],n=[];for(let o=0;o<r.length;o++)o===2?n.push("index"):n.push(`${t[o]}`);return n.join()}function M2(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,indices:s}=e,{axis:i,batchDims:a}=n,u=N.parseAxisParam(i,o.shape)[0];if(U().get("DEBUG")){let $=t.readSync(s.dataId),A=o.shape[u];for(let O=0;O<$.length;++O){let M=$[O];N.assert(M<=A-1&&M>=0,()=>`GatherV2: the index value ${M} is not in [0, ${A-1}]`)}}let l=B.segment_util.collectGatherOpShapeInfo(o,s,u,a),c=N.sizeFromShape(s.shape),p=[],m=re({inputs:{x:o},backend:t,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=re({inputs:{x:s},backend:t,attrs:{shape:[l.batchSize,c/l.batchSize]}});p.push(m),p.push(f);let d=[l.batchSize,l.outerSize,c/l.batchSize,l.sliceSize];if(t.shouldExecuteOnCPU([o,s])||o.dtype==="string"){let $=t.bufferSync(f),A=t.bufferSync(m),O=zv(A,$,d);return p.forEach(M=>t.disposeIntermediateTensorInfo(M)),t.makeTensorInfo(l.outputShape,O.dtype,O.values)}let y=new th(m.shape,d),x=t.runWebGLProgram(y,[m,f],m.dtype);p.push(x);let b=re({inputs:{x},backend:t,attrs:{shape:l.outputShape}});return p.forEach($=>t.disposeIntermediateTensorInfo($)),b}var b5={kernelName:Dl,backendName:"webgl",kernelFunc:M2};var HR="return float(a > b);",KR=`
  return vec4(greaterThan(a, b));
`,jR=Ve({opSnippet:HR,packedOpSnippet:KR,cpuKernelImpl:Wv,dtype:"bool"}),v5={kernelName:ti,backendName:"webgl",kernelFunc:jR};var qR="return float(a >= b);",XR=`
  return vec4(greaterThanEqual(a, b));
`,YR=Ve({opSnippet:qR,packedOpSnippet:XR,dtype:"bool",cpuKernelImpl:Hv}),w5={kernelName:ri,backendName:"webgl",kernelFunc:YR};function ZR(r){let{inputs:e,backend:t}=r,{input:n}=e;return Xf(n,!0,t)}var T5={kernelName:Ll,backendName:"webgl",kernelFunc:ZR};var QR="return float(!isnan(x) && !isinf(x));",JR=me({opSnippet:QR,dtype:"bool"}),S5={kernelName:Ml,backendName:"webgl",kernelFunc:JR};var eO="return float(isinf(x));",tO=me({opSnippet:eO,dtype:"bool"}),C5={kernelName:Vl,backendName:"webgl",kernelFunc:tO};var rO="return float(isnan(x));",nO=me({opSnippet:rO,dtype:"bool"}),E5={kernelName:Ul,backendName:"webgl",kernelFunc:nO};var oO="return float(a < b);",sO=`
  return vec4(lessThan(a, b));
`,iO=Ve({opSnippet:oO,packedOpSnippet:sO,cpuKernelImpl:Kv,dtype:"bool"}),N5={kernelName:ni,backendName:"webgl",kernelFunc:iO};var aO="return float(a <= b);",uO=`
  return vec4(lessThanEqual(a, b));
`,lO=Ve({opSnippet:aO,packedOpSnippet:uO,cpuKernelImpl:jv,dtype:"bool"}),I5={kernelName:oi,backendName:"webgl",kernelFunc:lO};function cO(r){let{backend:e,attrs:t}=r,{start:n,stop:o,num:s}=t,i=qv(n,o,s);return e.makeTensorInfo([i.length],"float32",i)}var $5={kernelName:zl,backendName:"webgl",kernelFunc:cO};var pO=qr+`
  return x < 0.0 ? 0./0. : log(x);
`,mO=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,fO=me({opSnippet:pO,packedOpSnippet:mO,cpuKernelImpl:Xv}),k5={kernelName:si,backendName:"webgl",kernelFunc:fO};var hO=qr+`
  return log(1.0 + x);
`,dO=me({opSnippet:hO}),A5={kernelName:Wl,backendName:"webgl",kernelFunc:dO};var gO="return float(a >= 1.0 && b >= 1.0);",xO=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,yO=Ve({opSnippet:gO,packedOpSnippet:xO,dtype:"bool"}),_5={kernelName:Hl,backendName:"webgl",kernelFunc:yO};var bO="return float(!(x >= 1.0));",vO=me({opSnippet:bO}),R5={kernelName:Kl,backendName:"webgl",kernelFunc:vO};var wO="return float(a >= 1.0 || b >= 1.0);",TO=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,SO=Ve({opSnippet:wO,packedOpSnippet:TO,dtype:"bool"}),O5={kernelName:jl,backendName:"webgl",kernelFunc:SO};var rh=class{constructor(e,t,n,o,s){this.variableNames=["x"],this.outputShape=[];let i=t,a=e[3]-1;this.outputShape=e;let u,l=`float(${n}) + float(${o}) * sum`;s===.5?u=`inversesqrt(${l})`:s===1?u=`1.0/(${l})`:u=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${u};
        setOutput(val);
      }
    `}};var nh=class{constructor(e,t,n,o,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=t,a=e[3]-1;this.outputShape=e;let u,l=`float(${n}) + float(${o}) * sum`;s===.5?u=`inversesqrt(${l})`:s===1?u=`1.0/(${l})`:u=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${u};
        setOutput(result);
      }
    `}};var CO=r=>{let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{depthRadius:s,bias:i,alpha:a,beta:u}=n,l=U().getBool("WEBGL_PACK_NORMALIZATION")?new nh(o.shape,s,i,a,u):new rh(o.shape,s,i,a,u);return t.runWebGLProgram(l,[o],o.dtype)},F5={kernelName:ql,backendName:"webgl",kernelFunc:CO};var oh=class{constructor(e,t,n,o,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=o,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${s})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var EO=r=>{let{inputs:e,backend:t,attrs:n}=r,{x:o,y:s,dy:i}=e,{depthRadius:a,bias:u,alpha:l,beta:c}=n,p=new oh(o.shape,a,u,l,c);return t.runWebGLProgram(p,[o,s,i],o.dtype)},D5={kernelName:i3,backendName:"webgl",kernelFunc:EO};function P5(r,e,t,n){let o=N.sizeFromShape(e),i=N.sizeFromShape(r.shape)/o,a=re({inputs:{x:r},attrs:{shape:[i,o]},backend:n}),u=br(a,r.dtype,"max",n),l=re({inputs:{x:u},attrs:{shape:t},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(u),l}function V2(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{reductionIndices:s,keepDims:i}=n,a=o.shape.length,u=N.parseAxisParam(s,o.shape),l=u,c=B.getAxesPermutation(l,a),p=c!=null,m=t.shouldExecuteOnCPU([o]),f=o;if(p){if(m){let A=t.texData.get(f.dataId).values,O=new Array(a);for(let H=0;H<O.length;H++)O[H]=o.shape[c[H]];let M=Ns(A,o.shape,o.dtype,c,O);f=t.makeTensorInfo(O,o.dtype);let G=t.texData.get(f.dataId);G.values=M}else f=_o(o,c,t);l=B.getInnerMostAxes(l.length,a)}B.assertAxesAreInnerMostDims("max",l,a);let[d,y]=B.computeOutAndReduceShapes(f.shape,l),x=d;i&&(x=B.expandShapeToKeepDim(d,u));let b;if(m){let A=t.texData.get(f.dataId).values,O=Yv(A,N.sizeFromShape(y),x,o.dtype);b=t.makeTensorInfo(x,o.dtype);let M=t.texData.get(b.dataId);M.values=O}else b=P5(f,y,x,t);return p&&t.disposeIntermediateTensorInfo(f),b}var L5={kernelName:Xl,backendName:"webgl",kernelFunc:V2};var NO=qi+`
  return max(a, b);
`,IO=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+kn+`
  return result;
`,$O=Ve({opSnippet:NO,packedOpSnippet:IO,cpuKernelImpl:Zv}),B5={kernelName:ii,backendName:"webgl",kernelFunc:$O};function kO(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e;In(o,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:u}=n,l=1;N.assert(B.eitherStridesOrDilationsAreOne(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);let c=B.computePool2DInfo(o.shape,s,i,l,a,u);if(c.filterWidth===1&&c.filterHeight===1&&N.arraysEqual(c.inShape,c.outShape))return lt({inputs:{x:o},backend:t});let p=new an(c,"max",!1);return t.runWebGLProgram(p,[o],o.dtype)}var M5={kernelName:Yl,backendName:"webgl",kernelFunc:kO};function AO(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{filterSize:s,strides:i,pad:a,dataFormat:u,dimRoundingMode:l}=n,c=[1,1,1],p=B.computePool3DInfo(o.shape,s,i,c,a,l,u),m=new Ro(p,"max",!1);return t.runWebGLProgram(m,[o],o.dtype)}var V5={kernelName:Zl,backendName:"webgl",kernelFunc:AO};var sh=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,o=e.dilationHeight,s=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=s-1-e.padInfo.top,u=i-1-e.padInfo.left,l=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},ih=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,u=e.effectiveFilterDepth,l=e.effectiveFilterHeight,c=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=l-1-e.padInfo.top,f=c-1-e.padInfo.left,d=u*l*c-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${d} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function _O(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,input:s}=e,i=s,{filterSize:a,strides:u,pad:l,dimRoundingMode:c}=n,p=[1,1,1],m=B.computePool3DInfo(i.shape,a,u,p,l,c),f=new Ro(m,"max",!0),d=t.runWebGLProgram(f,[i],i.dtype),y=new ih(m),x=t.runWebGLProgram(y,[o,d],i.dtype);return t.disposeIntermediateTensorInfo(d),x}var U5={kernelName:u3,backendName:"webgl",kernelFunc:_O};function RO(r){let{inputs:e,backend:t,attrs:n}=r,{dy:o,input:s,output:i}=e,a=s;In([s,i],"maxPoolGrad");let{filterSize:u,strides:l,pad:c,dimRoundingMode:p}=n,m=B.computePool2DInfo(a.shape,u,l,1,c,p),f=!0,d=new an(m,"max",f),y=t.runWebGLProgram(d,[a],a.dtype),x=new sh(m),b=t.runWebGLProgram(x,[o,y],a.dtype);return t.disposeIntermediateTensorInfo(y),b}var G5={kernelName:a3,backendName:"webgl",kernelFunc:RO};function z5(r,e,t,n){let o=new an(t,"max",!1),s=n.runWebGLProgram(o,[r],"float32");o=new an(t,"max",!0,!0,e);let i=n.runWebGLProgram(o,[r],"float32");return[s,i]}var W5={kernelName:Ql,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:n}=r,{filterSize:o,strides:s,pad:i,includeBatchInIndex:a}=e,u=t;N.assert(n.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${n.shape.length}.`);let l=[1,1];N.assert(B.eitherStridesOrDilationsAreOne(s,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);let c=B.computePool2DInfo(n.shape,o,s,l,i),[p,m]=z5(n,a,c,u);return[p,m]}};function H5(r,e,t,n){let o=N.sizeFromShape(e),i=N.sizeFromShape(r.shape)/o,a=re({inputs:{x:r},attrs:{shape:[i,o]},backend:n}),u=br(a,"float32","mean",n),l=re({inputs:{x:u},attrs:{shape:t},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(u),l}var K5={kernelName:Jl,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:n}=r,{keepDims:o,axis:s}=e,i=t,a=n.shape.length,u=N.parseAxisParam(s,n.shape),l=u,c=B.getAxesPermutation(l,a),p=c!=null,m=i.shouldExecuteOnCPU([n]),f=[],d=n;if(p){if(m){let O=i.texData.get(d.dataId).values,M=new Array(a);for(let X=0;X<M.length;X++)M[X]=n.shape[c[X]];let G=Ns(O,n.shape,n.dtype,c,M);d=i.makeTensorInfo(M,n.dtype);let H=i.texData.get(d.dataId);H.values=G}else d=_o(n,c,i);f.push(d),l=B.getInnerMostAxes(l.length,a)}B.assertAxesAreInnerMostDims("sum",l,a);let[y,x]=B.computeOutAndReduceShapes(d.shape,l),b=y;o&&(b=B.expandShapeToKeepDim(y,u));let $=H5(d,x,b,i);for(let A of f)i.disposeIntermediateTensorInfo(A);return $}};function OO(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,keepDims:i}=n,a=o.shape.length,u=N.parseAxisParam(s,o.shape),l=u,c=B.getAxesPermutation(l,a),p=o;c!=null&&(p=Qe({inputs:{x:o},backend:t,attrs:{perm:c}}),l=B.getInnerMostAxes(l.length,o.shape.length)),B.assertAxesAreInnerMostDims("min",l,a);let[m,f]=B.computeOutAndReduceShapes(p.shape,l),d=N.sizeFromShape(f),y=re({inputs:{x:p},backend:t,attrs:{shape:[-1,d]}}),x=br(y,y.dtype,"min",t),b;if(i){let $=B.expandShapeToKeepDim(m,u);b=re({inputs:{x},backend:t,attrs:{shape:$}})}else b=re({inputs:{x},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(x),c!=null&&t.disposeIntermediateTensorInfo(p),b}var j5={kernelName:ec,backendName:"webgl",kernelFunc:OO};var FO=qi+`
  return min(a, b);
`,DO=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+kn+`
  return result;
`,PO=Ve({opSnippet:FO,packedOpSnippet:DO,cpuKernelImpl:Qv}),q5={kernelName:ai,backendName:"webgl",kernelFunc:PO};var ah=class{constructor(e,t,n){this.variableNames=["x"],this.outputShape=t.map((c,p)=>c[0]+e[p]+c[1]);let o=e.length,s=Te(o),i=t.map(c=>c[0]).join(","),a=t.map((c,p)=>c[0]+e[p]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),l=n==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${u}));
      }
    `}};var uh=class{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((d,y)=>d[0]+e[y]+d[1]);let o=e.length,s=Te(o),i=t.map(d=>d[0]).join(","),a=t.map((d,y)=>d[0]+e[y]).join(","),u=ut("rc",o),l=ut("source",o),c=`${u[o-1]} < ${this.outputShape[o-1]}`,p=o===1?"source":`vec2(${l.slice(-2).join()})`,m=n==="reflect"?0:1,f="";if(o===1){let d=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${m};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${m};
        }
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${d}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${u[o-1]} += 1;
        if(${c}) {
          ${d}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
      `}else{let d=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${m}) +
                gte * ((end - 1) * 2 - source + ${m});
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${d}
        result[0] = getChannel(getX(${l.join()}), ${p});
        ${u[o-1]} += 1;
        if(${c}) {
          ${d}
          result[1] = getChannel(getX(${l.join()}), ${p});
        }
        rc = outputLoc;
        ${u[o-2]} += 1;
        if(${u[o-2]} < ${this.outputShape[o-2]}) {
          ${d}
          result[2] = getChannel(getX(${l.join()}), ${p});
          ${u[o-1]} += 1;
          if(${c}) {
            ${d}
            result[3] = getChannel(getX(${l.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};var LO=({inputs:r,backend:e,attrs:t})=>{let{x:n}=r,{paddings:o,mode:s}=t,i=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new uh(n.shape,o,s):new ah(n.shape,o,s);return e.runWebGLProgram(i,[n],n.dtype)},X5={kernelName:tc,backendName:"webgl",kernelFunc:LO};var BO=`if (b == 0.0) return NAN;
  return mod(a, b);`,MO=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+kn+`
  return result;
`,VO=Ve({opSnippet:BO,packedOpSnippet:MO}),Y5={kernelName:rc,backendName:"webgl",kernelFunc:VO};var lh=class{constructor(e,t,n){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}};var UO=`
if (a == b) {
  return 1.0;
};
return a / b;`,GO=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,U2=Ve({opSnippet:UO,packedOpSnippet:GO,checkOutOfBounds:!0}),Z5={kernelName:El,backendName:"webgl",kernelFunc:U2};var Q5="return a - b;",G2=Ve({opSnippet:Q5,packedOpSnippet:Q5,supportsComplex:!0,cpuKernelImpl:y6}),J5={kernelName:hi,backendName:"webgl",kernelFunc:G2};function z2(r){let{inputs:e,backend:t,attrs:n}=r,{logits:o}=e,{dim:s}=n,i=N.parseAxisParam([s],o.shape),a=V2({inputs:{x:o},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),u=B.expandShapeToKeepDim(a.shape,i),l=re({inputs:{x:a},backend:t,attrs:{shape:u}}),c=G2({inputs:{a:o,b:l},backend:t}),p=L2({inputs:{x:c},backend:t}),m=$s({inputs:{x:p},backend:t,attrs:{axis:i,keepDims:!1}}),f=re({inputs:{x:m},backend:t,attrs:{shape:u}}),d=U2({inputs:{a:p,b:f},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),d}var eT={kernelName:Pc,backendName:"webgl",kernelFunc:z2};function zO(r){let{inputs:e,backend:t,attrs:n}=r,{logits:o}=e,{numSamples:s,seed:i,normalized:a}=n,u=a?o:z2({inputs:{logits:o},backend:t,attrs:{dim:o.shape.length-1}}),l=u.shape[0],c=u.shape[1],p=new lh(l,c,s),m=[[i]],f=t.runWebGLProgram(p,[u],"int32",m);return a||t.disposeIntermediateTensorInfo(u),f}var tT={kernelName:nc,backendName:"webgl",kernelFunc:zO};var WO=yt+`
  return -x;
`,HO=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function KO(r){let{inputs:e,backend:t}=r,{x:n}=e;if(t.shouldExecuteOnCPU([n])){let s=t.texData.get(n.dataId),[i,a]=e6(s.values,n.shape,n.dtype);return t.makeTensorInfo(a,n.dtype,i)}let o;return U().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new or(n.shape,HO):o=new At(n.shape,WO),t.runWebGLProgram(o,[n],n.dtype)}var rT={kernelName:$a,backendName:"webgl",kernelFunc:KO};var jO=En.nonMaxSuppressionV3Impl;function qO(r){B.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:n}=r,{boxes:o,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u}=n,l=t.readSync(o.dataId),c=t.readSync(s.dataId),{selectedIndices:p}=jO(l,c,i,a,u);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}var nT={kernelName:oc,backendName:"webgl",kernelFunc:qO};var XO=En.nonMaxSuppressionV4Impl;function YO(r){B.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:n}=r,{boxes:o,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u,padToMaxOutputSize:l}=n,c=t.readSync(o.dataId),p=t.readSync(s.dataId),{selectedIndices:m,validOutputs:f}=XO(c,p,i,a,u,l);return[t.makeTensorInfo([m.length],"int32",new Int32Array(m)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}var oT={kernelName:sc,backendName:"webgl",kernelFunc:YO};var ZO=En.nonMaxSuppressionV5Impl;function QO(r){B.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:n}=r,{boxes:o,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u,softNmsSigma:l}=n,c=t.readSync(o.dataId),p=t.readSync(s.dataId),m=i,f=a,d=u,y=l,{selectedIndices:x,selectedScores:b}=ZO(c,p,m,f,d,y);return[t.makeTensorInfo([x.length],"int32",new Int32Array(x)),t.makeTensorInfo([b.length],"float32",new Float32Array(b))]}var sT={kernelName:ic,backendName:"webgl",kernelFunc:QO};var ch=class{constructor(e,t,n,o){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${n}),
                      float(index == coords.y)));
      }
    `}};var JO=r=>{let{inputs:e,backend:t,attrs:n}=r,{indices:o}=e,{dtype:s,depth:i,onValue:a,offValue:u}=n,l=N.sizeFromShape(o.shape),c=new ch(l,i,a,u),p=re({inputs:{x:o},backend:t,attrs:{shape:[l]}}),m=t.runWebGLProgram(c,[p],s);t.disposeIntermediateTensorInfo(p);let f=[...o.shape,i],d=re({inputs:{x:m},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(m),d},iT={kernelName:uc,backendName:"webgl",kernelFunc:JO};function vu(r){let{inputs:e,backend:t}=r,{x:n}=e;if(n.dtype==="complex64"){let o=Jn({inputs:{input:n},backend:t}),s=vu({inputs:{x:o},backend:t}),i=As({inputs:{input:n},backend:t}),a=vu({inputs:{x:i},backend:t}),u=sr({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),u}else return eo({attrs:{shape:n.shape,dtype:n.dtype,value:n.dtype==="string"?"":0},backend:t})}var aT={kernelName:Jc,backendName:"webgl",kernelFunc:vu};function uT(r){let{inputs:e,backend:t}=r,{x:n}=e;if(n.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(n.dtype==="complex64"){let o=Jn({inputs:{input:n},backend:t}),s=uT({inputs:{x:o},backend:t}),i=As({inputs:{input:n},backend:t}),a=vu({inputs:{x:i},backend:t}),u=sr({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),u}else return eo({attrs:{shape:n.shape,dtype:n.dtype,value:1},backend:t})}var lT={kernelName:ac,backendName:"webgl",kernelFunc:uT};function eF(r){let{inputs:e,backend:t,attrs:n}=r,{axis:o}=n;if(e.length===1)return qf({inputs:{input:e[0]},backend:t,attrs:{dim:o}});let s=e[0].shape,i=e[0].dtype;e.forEach(c=>{N.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),N.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],u=e.map(c=>{let p=qf({inputs:{input:c},backend:t,attrs:{dim:o}});return a.push(p),p}),l=P2({inputs:u,backend:t,attrs:{axis:o}});return a.forEach(c=>t.disposeIntermediateTensorInfo(c)),l}var cT={kernelName:lc,backendName:"webgl",kernelFunc:eF};var ph=class{constructor(e,t,n){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((l,c)=>l[0]+e[c]+l[1]);let o=e.length,s=Te(o),i=t.map(l=>l[0]).join(","),a=t.map((l,c)=>l[0]+e[c]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${u}));
        }
      }
    `}};var mh=class{constructor(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((y,x)=>y[0]+e[x]+y[1]);let o=e.length,s=Te(o),i=t.map(y=>y[0]).join(","),a=t.map((y,x)=>y[0]+e[x]).join(","),u=ut("rc",o),l=ut("source",o),c=`${u[o-1]} < ${this.outputShape[o-1]}`,p=o===1?"source":`vec2(${l.slice(-2).join()})`,m=[`${s} rc = outputLoc;`,`${u[o-1]} += 1;
       if(${c}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${u[o-2]} += 1;
       if(${u[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${u[o-1]} += 1;
         if(${c}) {`],f=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="";for(let y=0,x=o===1?2:4;y<x;y++)d+=`
        ${m[y]}
        if (${f}) {
          result[${y}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${y}] = getChannel(getX(${l.join()}), ${p});
        }
      `;d+=o===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}};var W2=r=>{let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{paddings:s,constantValue:i}=n;if(N.sizeFromShape(o.shape)===0){let l=s.map((c,p)=>c[0]+o.shape[p]+c[1]);return eo({backend:t,attrs:{shape:l,value:i,dtype:o.dtype}})}let a=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new mh(o.shape,s,i):new ph(o.shape,s,i),u=[[i]];return t.runWebGLProgram(a,[o],o.dtype,u)},pT={kernelName:cc,backendName:"webgl",kernelFunc:W2};var tF=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,rF=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+kn+`
  return result;
`,nF=Ve({opSnippet:tF,packedOpSnippet:rF}),mT={kernelName:pc,backendName:"webgl",kernelFunc:nF};function oF(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{axis:s,keepDims:i}=n,a=o.shape.length,u=[],l=N.parseAxisParam(s,o.shape),c=l,p=B.getAxesPermutation(c,a),m=o;p!=null&&(m=Qe({inputs:{x:o},backend:t,attrs:{perm:p}}),c=B.getInnerMostAxes(c.length,a),u.push(m)),B.assertAxesAreInnerMostDims("prod",c,a);let f;if(t.shouldExecuteOnCPU([m])){let d=t.texData.get(m.dataId).values,{outVals:y,outShape:x,outDtype:b}=r6(m.shape,m.dtype,d,c);f=t.makeTensorInfo(x,b,y)}else{let[d,y]=B.computeOutAndReduceShapes(m.shape,c),x=N.sizeFromShape(y),b=re({inputs:{x:m},backend:t,attrs:{shape:[-1,x]}}),$=es(o.dtype),A=br(b,$,"prod",t);f=re({inputs:{x:A},backend:t,attrs:{shape:d}}),u.push(b),u.push(A)}if(i){u.push(f);let d=B.expandShapeToKeepDim(f.shape,l);f=re({inputs:{x:f},backend:t,attrs:{shape:d}})}return u.forEach(d=>t.disposeIntermediateTensorInfo(d)),f}var fT={kernelName:ka,backendName:"webgl",kernelFunc:oF};function sF(r){let{inputs:e,backend:t,attrs:n}=r,{paramsNestedSplits:o,paramsDenseValues:s,indices:i}=e,{outputRaggedRank:a}=n,u=o.map(b=>t.readSync(b.dataId)),l=o.map(b=>b.shape),c=t.readSync(s.dataId),p=t.readSync(i.dataId),[m,f,d]=n6(u,l,c,s.shape,s.dtype,p,i.shape,a),y=m.map(b=>t.makeTensorInfo([b.length],"int32",b)),x=t.makeTensorInfo(d,s.dtype,f);return y.concat([x])}var hT={kernelName:fc,backendName:"webgl",kernelFunc:sF};function iF(r){let{inputs:e,backend:t}=r,{starts:n,limits:o,deltas:s}=e,i=t.readSync(n.dataId),a=t.readSync(o.dataId),u=t.readSync(s.dataId),[l,c]=o6(i,n.shape,n.dtype,a,o.shape,u,s.shape),p=t.makeTensorInfo([l.length],"int32",l),m=t.makeTensorInfo([c.length],n.dtype,c);return[p,m]}var dT={kernelName:hc,backendName:"webgl",kernelFunc:iF};function aF(r){let{inputs:e,backend:t,attrs:n}=r,{shape:o,values:s,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:u}=n,l=t.readSync(o.dataId),c=t.readSync(s.dataId),p=t.readSync(i.dataId),m=a.map(x=>t.readSync(x.dataId)),f=a.map(x=>x.shape),[d,y]=s6(l,o.shape,c,s.shape,s.dtype,p,i.shape,m,f,u);return t.makeTensorInfo(d,s.dtype,y)}var gT={kernelName:dc,backendName:"webgl",kernelFunc:aF};var H2=r=>{let{backend:e,attrs:t}=r,{start:n,stop:o,step:s,dtype:i}=t,a=i6(n,o,s,i);return e.makeTensorInfo([a.length],i,a)},xT={kernelName:gc,backendName:"webgl",kernelFunc:H2};var uF="return 1.0 / x;",lF=me({opSnippet:uF}),yT={kernelName:xc,backendName:"webgl",kernelFunc:lF};var cF=yt+`
  return (x < 0.0) ? 0.0 : x;
`,pF=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,mF=me({opSnippet:cF,packedOpSnippet:pF}),bT={kernelName:yc,backendName:"webgl",kernelFunc:mF};var fF=yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,hF=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,dF=me({opSnippet:fF,packedOpSnippet:hF}),vT={kernelName:Tc,backendName:"webgl",kernelFunc:dF};var fh=class{constructor(e,t,n,o,s){this.variableNames=["A"],this.outputShape=[];let[i,a,u,l]=e;this.outputShape=[i,t,n,l];let c=[o&&t>1?a-1:a,o&&n>1?u-1:u],p=[o&&t>1?t-1:t,o&&n>1?n-1:n],m;s?m="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":m="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var hh=class{constructor(e,t,n,o,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,u,l]=e;this.outputShape=[i,t,n,l];let c=[o&&t>1?a-1:a,o&&n>1?u-1:u],p=[o&&t>1?t-1:t,o&&n>1?n-1:n],m;s?m="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":m="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function gF(r){let{inputs:e,backend:t,attrs:n}=r,{images:o}=e,{alignCorners:s,halfPixelCenters:i,size:a}=n,[u,l]=a,c=U().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new hh(o.shape,u,l,s,i):new fh(o.shape,u,l,s,i);return t.runWebGLProgram(c,[o],"float32")}var wT={kernelName:wc,backendName:"webgl",kernelFunc:gF};var dh=class{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,o,s]=t,[,i,a]=e,u=[n&&i>1?o-1:o,n&&a>1?s-1:s],l=[n&&i>1?i-1:i,n&&a>1?a-1:a],c=u[0]/l[0],p=u[1]/l[1],m=1/c,f=1/p,d=Math.ceil(m)*2+2,y=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${d});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function xF(r){let{inputs:e,backend:t,attrs:n}=r,{images:o,dy:s}=e,{alignCorners:i}=n,a=new dh(s.shape,o.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var TT={kernelName:c3,backendName:"webgl",kernelFunc:xF};var gh=class{constructor(e,t,n,o,s){this.variableNames=["A"],this.outputShape=[];let[i,a,u,l]=e;this.outputShape=[i,t,n,l];let c=[o&&t>1?a-1:a,o&&n>1?u-1:u],p=[o&&t>1?t-1:t,o&&n>1?n-1:n],m=o?"0.5":"0.0",f;s?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var xh=class{constructor(e,t,n,o,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,u,l]=e;this.outputShape=[i,t,n,l];let c=[o&&t>1?a-1:a,o&&n>1?u-1:u],p=[o&&t>1?t-1:t,o&&n>1?n-1:n],m=o?"0.5":"0.0",f;s?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function yF(r){let{inputs:e,backend:t,attrs:n}=r,{images:o}=e,{alignCorners:s,halfPixelCenters:i,size:a}=n,[u,l]=a,c=U().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new xh(o.shape,u,l,s,i):new gh(o.shape,u,l,s,i);return t.runWebGLProgram(c,[o],o.dtype)}var ST={kernelName:vc,backendName:"webgl",kernelFunc:yF};var yh=class{constructor(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,o,s]=t,[,i,a]=e,u=[n&&i>1?o-1:o,n&&a>1?s-1:s],l=[n&&i>1?i-1:i,n&&a>1?a-1:a],c=u[0]/l[0],p=u[1]/l[1],m=1/c,f=1/p,d=Math.ceil(m)*2+2,y=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${d});
        const int winWidth = int(${y});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${u[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${u[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function bF(r){let{inputs:e,backend:t,attrs:n}=r,{images:o,dy:s}=e,{alignCorners:i}=n,a=new yh(s.shape,o.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var CT={kernelName:l3,backendName:"webgl",kernelFunc:bF};var bh=class{constructor(e,t){this.variableNames=["x"];let n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let o=a=>t.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,s=e.map((a,u)=>o(u)).join(","),i=Te(n);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var vh=class{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw new Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let o=ut("rc",n),s=`${o[n-1]} + 1 < ${this.outputShape[n-1]}`,i=`${o[n-2]} + 1 < ${this.outputShape[n-2]}`,a=Te(n);n===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${u(o.slice())};
          if(${s}){
            result.g = ${l(o.slice())};
          }
          if(${i}) {
            result.b = ${c(o.slice())};
            if(${s}) {
              result.a = ${p(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function u(d){return m(d)}function l(d){return d[n-1]="("+d[n-1]+" + 1)",m(d)}function c(d){return d[n-2]="("+d[n-2]+" + 1)",m(d)}function p(d){return d[n-1]="("+d[n-1]+" + 1)",d[n-2]="("+d[n-2]+" + 1)",m(d)}function m(d){let y=e.map(($,A)=>f(A,d)),x=y.join(","),b=y.slice(-2).join(",");return`getChannel(getX(${x}), vec2(${b}))`}function f(d,y){return t.indexOf(d)!==-1&&e[d]!==1?`${e[d]} - ${y[d]} - 1`:`${y[d]}`}}};function vF(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{dims:s}=n,i=o.shape.length,a=N.parseAxisParam(s,o.shape);if(i===0)return lt({inputs:{x:o},backend:t});let u=U().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vh(o.shape,a):new bh(o.shape,a);return t.runWebGLProgram(u,[o],o.dtype)}var ET={kernelName:Sc,backendName:"webgl",kernelFunc:vF};var wh=class{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let n=e[1],o=e[2];this.outputShape=e;let s="";typeof t=="number"?s=`float outputValue = ${t.toFixed(2)};`:s=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var NT={kernelName:tp,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{image:n}=r,{radians:o,fillValue:s,center:i}=e,a=t,u=new wh(n.shape,s),[l,c]=B.getImageCenter(i,n.shape[1],n.shape[2]),p=[[l,c,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(u,[n],n.dtype,p)}};var wF=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,TF=me({opSnippet:wF}),IT={kernelName:Cc,backendName:"webgl",kernelFunc:TF};var SF="return inversesqrt(x);",CF=me({opSnippet:SF,cpuKernelImpl:a6}),$T={kernelName:ci,backendName:"webgl",kernelFunc:CF};var ra=class{constructor(e,t,n,o,s,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=Te(s.length),l=Te(i.length),c="";n===1?c="i":n===2&&(c="i, j");let p=`getIndices(${c})`,m="";o===1?m="i":o===2&&(m="i, coords[1]");let f=`getUpdates(${m})`,d=t>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${p});
              flattenedIndex += index * ${d};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}};function EF(r){let{inputs:e,backend:t,attrs:n}=r,{indices:o,updates:s}=e,{shape:i}=n,{sliceRank:a,numUpdates:u,sliceSize:l,strides:c,outputSize:p}=B.calculateShapes(s,o,i),m=[p/l,l];if(p===0)return t.makeTensorInfo(i,o.dtype);let f=re({inputs:{x:o},backend:t,attrs:{shape:[u,a]}}),d=re({inputs:{x:s},backend:t,attrs:{shape:[u,l]}}),y=t.makeTensorInfo([],"float32",new Float32Array([0])),x=new ra(u,a,f.shape.length,d.shape.length,c,m),b=t.runWebGLProgram(x,[d,f,y],d.dtype),$=re({inputs:{x:b},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(b),t.disposeIntermediateTensorInfo(y),$}var kT={kernelName:Ec,backendName:"webgl",kernelFunc:EF};var Th=class{constructor(e,t,n,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,n];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=U().getNumber("WEBGL_VERSION")===2?s:i,u=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${u} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function NF(r){let{inputs:e,backend:t,attrs:n}=r,{sortedSequence:o,values:s}=e,{side:i}=n,a=new Th(o.shape[0],o.shape[1],s.shape[1],i),u=[[o.shape[1]]];return t.runWebGLProgram(a,[o,s],"int32",u)}var AT={kernelName:Nc,backendName:"webgl",kernelFunc:NF};var Sh=class{constructor(e,t,n){this.variableNames=["c","a","b"],this.outputShape=t;let o,s;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)s="resRC",o="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],u=[],l=[];for(let c=0;c<t.length;c++)l.push(`${a[c]}`),c<e&&u.push(`${a[c]}`);o=u.join(),s=l.join()}let i=Te(n);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function IF(r){let{inputs:e,backend:t}=r,{condition:n,t:o,e:s}=e,i=new Sh(n.shape.length,o.shape,o.shape.length);return t.runWebGLProgram(i,[n,o,s],Lt(o.dtype,s.dtype))}var _T={kernelName:Ic,backendName:"webgl",kernelFunc:IF};var $F=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${B.SELU_SCALEALPHA};
  float scale = ${B.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,kF=me({opSnippet:$F}),RT={kernelName:$c,backendName:"webgl",kernelFunc:kF};var AF=qr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,_F=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,RF=me({opSnippet:AF,packedOpSnippet:_F,cpuKernelImpl:l6}),OT={kernelName:pi,backendName:"webgl",kernelFunc:RF};var OF=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,FF=me({opSnippet:OF}),FT={kernelName:_c,backendName:"webgl",kernelFunc:FF};var DF=qr+`
  return sin(x);
`,PF=me({opSnippet:DF}),DT={kernelName:kc,backendName:"webgl",kernelFunc:PF};var LF=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,BF=me({opSnippet:LF}),PT={kernelName:Ac,backendName:"webgl",kernelFunc:BF};var MF=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,VF=me({opSnippet:MF}),LT={kernelName:Rc,backendName:"webgl",kernelFunc:VF};var UF=r=>{let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{blockShape:s,paddings:i}=n;N.assert(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((b,$)=>b*$),u=[[0,0]];u.push(...i);for(let b=1+s.length;b<o.shape.length;++b)u.push([0,0]);let l=[],c=W2({inputs:{x:o},backend:t,attrs:{paddings:u,constantValue:0}}),p=B.getReshaped(c.shape,s,a,!1),m=B.getPermuted(p.length,s.length,!1),f=B.getReshapedPermuted(c.shape,s,a,!1),d=re({inputs:{x:c},backend:t,attrs:{shape:p}}),y=Qe({inputs:{x:d},backend:t,attrs:{perm:m}}),x=re({inputs:{x:y},backend:t,attrs:{shape:f}});return l.push(c),l.push(d),l.push(y),l.forEach(b=>t.disposeIntermediateTensorInfo(b)),x},BT={kernelName:Fc,backendName:"webgl",kernelFunc:UF};function GF(r){let{inputs:e,backend:t}=r,{indices:n,values:o,denseShape:s,defaultValue:i}=e;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(n.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${n.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=t.readSync(n.dataId),u=t.readSync(o.dataId),l=t.readSync(s.dataId),c=t.readSync(i.dataId)[0],[p,m,f,d,y]=p6(a,n.shape,n.dtype,u,o.dtype,l,c);return[t.makeTensorInfo(m,n.dtype,p),t.makeTensorInfo([m[0]],o.dtype,f),t.makeTensorInfo([d.length],"bool",new Uint8Array(d.map(x=>Number(x)))),t.makeTensorInfo([y.length],n.dtype,new Int32Array(y))]}var MT={kernelName:Lc,backendName:"webgl",kernelFunc:GF};function zF(r){let{inputs:e,backend:t}=r,{inputIndices:n,inputShape:o,newShape:s}=e;if(n.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${n.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(t.readSync(o.dataId)),a=t.readSync(n.dataId),u=Array.from(t.readSync(s.dataId)),[l,c,p]=m6(a,n.shape,n.dtype,i,u);return[t.makeTensorInfo(c,n.dtype,l),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var VT={kernelName:Bc,backendName:"webgl",kernelFunc:zF};function WF(r){let{inputs:e,backend:t}=r,{data:n,indices:o,segmentIds:s}=e;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=t.readSync(n.dataId),a=t.readSync(o.dataId),u=t.readSync(s.dataId),[l,c]=sf(i,n.shape,n.dtype,a,u,!0);return t.makeTensorInfo(c,n.dtype,l)}var UT={kernelName:Mc,backendName:"webgl",kernelFunc:WF};function HF(r){let{inputs:e,backend:t}=r,{data:n,indices:o,segmentIds:s}=e;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=t.readSync(n.dataId),a=t.readSync(o.dataId),u=t.readSync(s.dataId),[l,c]=sf(i,n.shape,n.dtype,a,u);return t.makeTensorInfo(c,n.dtype,l)}var GT={kernelName:Vc,backendName:"webgl",kernelFunc:HF};function KF(r){let{inputs:e,backend:t,attrs:n}=r,{sparseIndices:o,sparseValues:s,defaultValue:i}=e,{outputShape:a}=n,{sliceRank:u,numUpdates:l,sliceSize:c,strides:p,outputSize:m}=B.calculateShapes(s,o,a),f=!1;if(s.dtype==="string"){let b=t.bufferSync(o),$=t.bufferSync(s),A=N.decodeString(t.readSync(i.dataId)[0]),O=u6(b,$,a,m,c,l,u,p,A,f);return t.makeTensorInfo(a,O.dtype,O.values)}let d=new ra(l,u,o.shape.length,s.shape.length,p,[m,1],f),y=t.runWebGLProgram(d,[s,o,i],s.dtype),x=re({inputs:{x:y},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(y),x}var zT={kernelName:Uc,backendName:"webgl",kernelFunc:KF};function jF(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{numOrSizeSplits:s,axis:i}=n,a=N.parseAxisParam(i,o.shape)[0],u=B.prepareSplitSize(o,s,a),l=o.shape.length,c=new Array(l).fill(0),p=o.shape.slice();return u.map(m=>{let f=[...p];f[a]=m;let d=un({inputs:{x:o},backend:t,attrs:{begin:c,size:f}});return c[a]+=m,d})}var WT={kernelName:Dc,backendName:"webgl",kernelFunc:jF};var HT="return sqrt(x);",qF=me({opSnippet:HT,packedOpSnippet:HT,cpuKernelImpl:f6}),KT={kernelName:mi,backendName:"webgl",kernelFunc:qF};var XF="return x * x;",YF=me({opSnippet:XF}),jT={kernelName:p3,backendName:"webgl",kernelFunc:YF};var qT="return (a - b) * (a - b);",ZF=Ve({opSnippet:qT,packedOpSnippet:qT}),XT={kernelName:fi,backendName:"webgl",kernelFunc:ZF};function QF({inputs:r,attrs:e,backend:t}){let{x:n}=r,o=yt+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,s=new At(n.shape,o);return t.runWebGLProgram(s,[n],n.dtype)}var YT={kernelName:ep,backendName:"webgl",kernelFunc:QF};var Ch=class{constructor(e,t,n){this.variableNames=["x"],this.outputShape=n;let o=n.length,s=Te(n.length),i=Te(n.length),a="";if(o===1)a="coords * strides + begin";else{let u=0;a=n.map((l,c)=>(u++,n.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${u-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${e});
      ${s} strides = ${s}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function JF(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{begin:s,end:i,strides:a,beginMask:u,endMask:l,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:m}=n,{finalShapeSparse:f,finalShape:d,isIdentity:y,sliceDim0:x,isSimpleSlice:b,begin:$,end:A,strides:O}=nr.sliceInfo(o.shape,s,i,a,u,l,c,p,m),M;if(y)M=re({inputs:{x:o},backend:t,attrs:{shape:d}});else if(x||b){N.assert(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);let H=nr.computeOutShape($,A,O),X=un({inputs:{x:o},backend:t,attrs:{begin:$,size:H}});M=re({inputs:{x:X},backend:t,attrs:{shape:d}}),t.disposeIntermediateTensorInfo(X)}else if(t.shouldExecuteOnCPU([o])){let X=t.readSync(o.dataId),q=Ie(o.shape,o.dtype,X),Y=h6(f,q,O,$);M=t.makeTensorInfo(d,o.dtype,Y.values)}else{let X=new Ch($,O,f);M=t.runWebGLProgram(X,[o],o.dtype)}let G=re({inputs:{x:M},backend:t,attrs:{shape:d}});return t.disposeIntermediateTensorInfo(M),G}var ZT={kernelName:Gc,backendName:"webgl",kernelFunc:JF};function eD(r){let{inputs:e,backend:t,attrs:n}=r,{separator:o,nGramWidths:s,leftPad:i,rightPad:a,padWidth:u,preserveShortSequences:l}=n,{data:c,dataSplits:p}=e,m=t.readSync(c.dataId),f=t.readSync(p.dataId),[d,y]=d6(m,f,o,s,i,a,u,l);return[t.makeTensorInfo([d.length],"string",d),t.makeTensorInfo(p.shape,"int32",y)]}var QT={kernelName:zc,backendName:"webgl",kernelFunc:eD};function tD(r){let{inputs:e,backend:t,attrs:n}=r,{skipEmpty:o}=n,{input:s,delimiter:i}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=t.readSync(s.dataId),u=t.readSync(i.dataId)[0],[l,c,p]=g6(a,u,o),m=c.length;return[t.makeTensorInfo([m,2],"int32",l),t.makeTensorInfo([m],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}var JT={kernelName:Wc,backendName:"webgl",kernelFunc:tD};function rD(r){let{inputs:e,backend:t,attrs:n}=r,{numBuckets:o}=n,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");let i=t.readSync(s.dataId),a=x6(i,o);return t.makeTensorInfo(s.shape,"int32",a)}var eS={kernelName:Hc,backendName:"webgl",kernelFunc:rD};var nD="return tan(x);",oD=me({opSnippet:nD}),tS={kernelName:Kc,backendName:"webgl",kernelFunc:oD};var sD=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,iD=me({opSnippet:sD}),rS={kernelName:jc,backendName:"webgl",kernelFunc:iD};var Eh=class{constructor(e,t){this.variableNames=["A"];let n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e[i]*t[i];this.outputShape=n,this.rank=n.length;let o=Te(this.rank),s=aD(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function aD(r){let e=r.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${r[0]})`;let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],n=[];for(let o=0;o<r.length;o++)n.push(`imod(${t[o]}, ${r[o]})`);return n.join()}function K2(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{reps:s}=n;if(o.dtype==="string"||o.shape.length>5){let u=t.readSync(o.dataId),l=o.dtype==="string"?u.map(m=>N.decodeString(m)):u,c=Ie(o.shape,o.dtype,l),p=b6(c,s);return t.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new Eh(o.shape,s);return t.runWebGLProgram(i,[o],o.dtype)}var nS={kernelName:di,backendName:"webgl",kernelFunc:K2};var Nh=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},Ih=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function Rs(r,e){e!==null&&r.disposeIntermediateTensorInfo(e)}function oS(r){let e=1;for(;e<r;)e*=2;return e}function uD(r){let{inputs:e,backend:t,attrs:n}=r,{x:o}=e,{k:s,sorted:i}=n,a=U().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),u=U().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=o.shape,c=l[l.length-1];if(t.shouldExecuteOnCPU([o])||c<a||s>u){let Y=t.readSync(o.dataId),[ie,fe]=v6(Y,l,o.dtype,s,i);return[t.makeTensorInfo(ie.shape,ie.dtype,ie.values),t.makeTensorInfo(fe.shape,fe.dtype,fe.values)]}if(s===0)return l[l.length-1]=0,[t.makeTensorInfo(l,o.dtype,[]),t.makeTensorInfo(l,"int32",[])];if(c===1)return[o,eo({attrs:{shape:l,dtype:"int32",value:0},backend:t})];let p=t.texData.get(o.dataId),m=p!==null&&p.isPacked,f=m?t.unpackTensor(o):o,y=N.sizeFromShape(l)/c,x=re({inputs:{x:f},attrs:{shape:[y,c]},backend:t});m&&Rs(t,f);let b=oS(s),$=oS(c),A=null,O=()=>A===null?[x,x]:[x,A],M=(Y,ie,fe)=>{let he=O(),$e=new Nh(fe),ct=[[c],[A===null?1:0],[Number.NEGATIVE_INFINITY],[Y],[ie]],Xe=A;A=t.runWebGLProgram($e,he,"int32",ct),Rs(t,Xe)};for(let Y=1;Y<b;Y*=2){let ie=Y*2;for(let fe=Y;fe>=1;fe/=2)M(ie,fe,[y,$])}for(let Y=$;Y>b;Y/=2){let ie=O(),fe=new Ih([y,Y/2]),$e=[[c],[A===null?1:0],[b]],Oe=A;A=t.runWebGLProgram(fe,ie,"int32",$e),Rs(t,Oe);let ct=b/2,Xe=ct*2;for(let Ye=ct;Ye>=1;Ye/=2)M(Xe,Ye,A.shape)}let G=A;A=un({inputs:{x:A},backend:t,attrs:{begin:0,size:[y,s]}}),Rs(t,G);let H=M2({inputs:{x,indices:A},backend:t,attrs:{axis:1,batchDims:1}});Rs(t,x);let X=l.slice(0,-1);X.push(s),G=A,A=re({inputs:{x:A},attrs:{shape:X},backend:t}),Rs(t,G);let q=H;return H=re({inputs:{x:H},attrs:{shape:X},backend:t}),Rs(t,q),[H,A]}var sS={kernelName:qc,backendName:"webgl",kernelFunc:uD};var $h=class{constructor(e,t,n,o,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=n==="nearest"?1:2,u;switch(o){case"constant":u=1;break;case"reflect":u=2;break;case"wrap":u=3;break;case"nearest":u=4;break;default:u=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${u} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function lD(r){let{inputs:e,backend:t,attrs:n}=r,{image:o,transforms:s}=e,{interpolation:i,fillMode:a,fillValue:u,outputShape:l}=n,[c,p,m,f]=o.shape,[d,y]=l!=null?l:[p,m],x=[c,d,y,f],b=new $h(p,m,i,a,u,x);return t.runWebGLProgram(b,[o,s],"float32")}var iS={kernelName:Xc,backendName:"webgl",kernelFunc:lD};function cD(r){let{inputs:e,attrs:t,backend:n}=r,{axis:o}=t,{x:s}=e;In(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=n.readSync(s.dataId),{outputValues:a,outputShape:u,indices:l}=w6(i,o,s.shape,s.dtype);return[n.makeTensorInfo(u,s.dtype,a),n.makeTensorInfo([l.length],"int32",l)]}var aS={kernelName:Yc,backendName:"webgl",kernelFunc:cD};function pD(r){let{inputs:e,backend:t,attrs:n}=r,{value:o}=e,{axis:s}=n;s<0&&(s+=o.shape.length);let i=o,a=i.shape.length,u=o.shape[s],l=new Array(a-1),c=0;for(let y=0;y<a;y++)y!==s&&(l[c++]=i.shape[y]);let p=[],m=new Array(a).fill(0),f=i.shape.slice();f[s]=1;let d=new Array(u);for(let y=0;y<d.length;y++){m[s]=y;let x=un({inputs:{x:i},backend:t,attrs:{begin:m,size:f}}),b=re({inputs:{x},backend:t,attrs:{shape:l}});d[y]=b,p.push(x)}return p.forEach(y=>t.disposeIntermediateTensorInfo(y)),d}var uS={kernelName:Zc,backendName:"webgl",kernelFunc:pD};var kh=class{constructor(e,t){this.variableNames=["x","segmentIds"];let n=e.windowSize,o=e.batchSize,s=e.inSize,i=e.numSegments,a=i*Math.ceil(s/n);this.outputShape=[o,a];let u="0.0",l="sumValue",c=Math.floor(n/4)*4,p=n%4,m=`
        sumValue += dot(values, segFilter);
    `,f="";s%n>0&&(f=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let d="";s%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${u};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${m}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${m}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${m}
        }
        setOutput(${l});
      }
    `}};function mD(r){let{inputs:e,backend:t,attrs:n}=r,{x:o,segmentIds:s}=e,{numSegments:i}=n,a=o.shape.length,u=[],l=0,c=B.getAxesPermutation([l],a),p=o;c!=null&&(p=Qe({inputs:{x:o},backend:t,attrs:{perm:c}}),u.push(p),l=B.getInnerMostAxes(1,a)[0]);let m=B.segment_util.computeOutShape(p.shape,l,i),f=N.sizeFromShape([p.shape[l]]),d=re({inputs:{x:p},backend:t,attrs:{shape:[-1,f]}});u.push(d);let y=es(o.dtype),x=(O,M,G,H,X)=>{let q=O.shape[0],Y=O.shape[1],ie=B.segment_util.segOpComputeOptimalWindowSize(Y,X),fe={windowSize:ie,inSize:Y,batchSize:q,numSegments:X},he=new kh(fe,M),$e=t.compileAndRun(he,[O,G],H);if(u.push($e),$e.shape[1]===X)return $e;let Oe=H2({backend:t,attrs:{start:0,stop:X,step:1,dtype:"float32"}}),ct=K2({inputs:{x:Oe},backend:t,attrs:{reps:[Y/ie]}});return u.push(Oe),u.push(ct),x($e,M,ct,H,X)},b=x(d,"unsortedSegmentSum",s,y,i),$=re({inputs:{x:b},backend:t,attrs:{shape:m}}),A=$;if(c!=null){u.push($);let O=B.getUndoAxesPermutation(c);A=Qe({inputs:{x:A},backend:t,attrs:{perm:O}})}return u.forEach(O=>t.disposeIntermediateTensorInfo(O)),A}var lS={kernelName:Qc,backendName:"webgl",kernelFunc:mD};var fD=[q6,Y6,Z6,Q6,ew,tw,rw,nw,iw,aw,uw,lw,cw,pw,mw,fw,hw,dw,gw,xw,yw,vw,ww,Tw,Nw,$w,kw,B6,_w,Ow,Fw,Dw,Pw,Lw,Bw,Mw,Vw,Uw,Gw,Hw,Kw,jw,qw,Xw,Yw,Zw,Qw,Jw,e5,t5,r5,n5,o5,s5,i5,u5,l5,c5,p5,f5,h5,d5,g5,x5,y5,b5,v5,w5,L6,T5,Rw,S5,C5,E5,M6,N5,I5,$5,k5,A5,_5,R5,O5,F5,D5,L5,B5,M5,V5,U5,G5,W5,K5,j5,q5,X5,Y5,tT,G6,rT,nT,oT,sT,Sw,iT,lT,cT,pT,mT,V6,fT,hT,dT,gT,xT,Cw,Z5,yT,bT,vT,W6,wT,TT,ST,CT,ET,NT,IT,$T,kT,AT,_T,RT,OT,FT,DT,PT,bw,eT,LT,BT,MT,VT,UT,GT,zT,WT,KT,jT,XT,YT,ZT,QT,JT,eS,J5,K6,tS,rS,nS,sS,iS,j6,aS,uS,lS,aT];for(let r of fD)f3(r);(async()=>{await ug(),await Nd("webgl");let r=0,e=null;window.createFaceDetector=async function(n,o,s){return await tb(n,s,o.onIndex),e=setInterval(()=>{r+=1,o.onSecondIndex(rb()),r%60===0&&nb()},1e3),!0},window.destroyFaceDetector=function(){console.log("FaceDetector:destroyFaceDetector | Destroying"),e&&clearInterval(e)}})();})();