const If=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};If();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="141",Ff=0,Il=1,Of=2,Ru=1,zf=2,Or=3,Yr=0,en=1,ur=2,Nf=1,$n=0,sr=1,po=2,Fl=3,Ol=4,Bf=5,Ki=100,kf=101,Uf=102,zl=103,Nl=104,Gf=200,Vf=201,Hf=202,Wf=203,Pu=204,Du=205,Xf=206,qf=207,Yf=208,jf=209,$f=210,Zf=0,Kf=1,Jf=2,mo=3,Qf=4,ed=5,td=6,nd=7,la=0,id=1,rd=2,An=0,sd=1,ad=2,od=3,ld=4,cd=5,Iu=300,hr=301,fr=302,go=303,_o=304,ca=306,vo=1e3,Jt=1001,xo=1002,ht=1003,Bl=1004,kl=1005,Ut=1006,ud=1007,ua=1008,Ai=1009,hd=1010,fd=1011,Fu=1012,dd=1013,xi=1014,Hn=1015,jr=1016,pd=1017,md=1018,ar=1020,gd=1021,_d=1022,Qt=1023,Ou=1024,vd=1025,Si=1026,dr=1027,zu=1028,xd=1029,yd=1030,bd=1031,Md=1033,Ta=33776,Ca=33777,Aa=33778,La=33779,Ul=35840,Gl=35841,Vl=35842,Hl=35843,Sd=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,jl=37810,$l=37811,Zl=37812,Kl=37813,Jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,rc=37820,sc=37821,ac=36492,Li=3e3,We=3001,wd=3200,Ed=3201,br=0,Td=1,Tn="srgb",yi="srgb-linear",Ra=7680,Cd=519,oc=35044,lc="300 es",yo=1035;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const at=[];for(let s=0;s<256;s++)at[s]=(s<16?"0":"")+s.toString(16);let cc=1234567;const Ur=Math.PI/180,qs=180/Math.PI;function Sr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[s&255]+at[s>>8&255]+at[s>>16&255]+at[s>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function Ho(s,e){return(s%e+e)%e}function Ad(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ld(s,e,t){return s!==e?(t-s)/(e-s):0}function Gr(s,e,t){return(1-t)*s+t*e}function Rd(s,e,t,n){return Gr(s,e,1-Math.exp(-t*n))}function Pd(s,e=1){return e-Math.abs(Ho(s,e*2)-e)}function Dd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Id(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Fd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Od(s,e){return s+Math.random()*(e-s)}function zd(s){return s*(.5-Math.random())}function Nd(s){s!==void 0&&(cc=s);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(s){return s*Ur}function kd(s){return s*qs}function bo(s){return(s&s-1)===0&&s!==0}function Ud(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ys(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,l*h,l*d,o*c);break;case"YZY":s.set(l*d,o*u,l*h,o*c);break;case"ZXZ":s.set(l*h,l*d,o*u,o*c);break;case"XZX":s.set(o*u,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*u,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vd(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hd(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Nt=Object.freeze({__proto__:null,DEG2RAD:Ur,RAD2DEG:qs,generateUUID:Sr,clamp:_t,euclideanModulo:Ho,mapLinear:Ad,inverseLerp:Ld,lerp:Gr,damp:Rd,pingpong:Pd,smoothstep:Dd,smootherstep:Id,randInt:Fd,randFloat:Od,randFloatSpread:zd,seededRandom:Nd,degToRad:Bd,radToDeg:kd,isPowerOfTwo:bo,ceilPowerOfTwo:Ud,floorPowerOfTwo:Ys,setQuaternionFromProperEuler:Gd,normalize:Hd,denormalize:Vd});class Re{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],b=i[1],E=i[4],w=i[7],x=i[2],C=i[5],y=i[8];return r[0]=a*f+o*b+l*x,r[3]=a*p+o*E+l*C,r[6]=a*_+o*w+l*y,r[1]=c*f+u*b+h*x,r[4]=c*p+u*E+h*C,r[7]=c*_+u*w+h*y,r[2]=d*f+m*b+g*x,r[5]=d*p+m*E+g*C,r[8]=d*_+m*w+g*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,m=c*r-a*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(o*n-i*a)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*r-o*t)*f,e[6]=m*f,e[7]=(n*l-c*t)*f,e[8]=(a*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function $r(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Pa={[Tn]:{[yi]:wi},[yi]:{[Tn]:Us}},jt={legacyMode:!0,get workingColorSpace(){return yi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Pa[e]&&Pa[e][t]!==void 0){const n=Pa[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},$t={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Da(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function gs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yi){return this.r=e,this.g=t,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yi){if(e=Ho(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Da(a,r,e+1/3),this.g=Da(a,r,e),this.b=Da(a,r,e-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,jt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,jt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,jt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,jt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Tn){const n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return jt.fromWorkingColorSpace(gs(this,et),e),_t(et.r*255,0,255)<<16^_t(et.g*255,0,255)<<8^_t(et.b*255,0,255)<<0}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yi){jt.fromWorkingColorSpace(gs(this,et),t);const n=et.r,i=et.g,r=et.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yi){return jt.fromWorkingColorSpace(gs(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Tn){return jt.fromWorkingColorSpace(gs(this,et),e),e!==Tn?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(ms);const n=Gr($t.h,ms.h,t),i=Gr($t.s,ms.s,t),r=Gr($t.l,ms.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=Bu;let zi;class ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zi===void 0&&(zi=$r("canvas")),zi.width=e.width,zi.height=e.height;const n=zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uu{constructor(e=null){this.isSource=!0,this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ia(i[a].image)):r.push(Ia(i[a]))}else r=Ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ia(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wd=0;class Ot extends Mr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Jt,i=Jt,r=Ut,a=ua,o=Qt,l=Ai,c=1,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Sr(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Iu;class qe{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,w=(m+1)/2,x=(_+1)/2,C=(u+d)/4,y=(h+f)/4,v=(g+p)/4;return E>w&&E>x?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=C/n,r=y/n):w>x?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=v/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=y/r,i=v/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(h-f)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ln extends Mr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],m=r[a+1],g=r[a+2],f=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==m||u!==g){let p=1-o;const _=l*d+c*m+u*g+h*f,b=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const x=Math.sqrt(E),C=Math.atan2(x,_*b);p=Math.sin(p*C)/x,o=Math.sin(o*C)/x}const w=o*b;if(l=l*p+d*w,c=c*p+m*w,u=u*p+g*w,h=h*p+f*w,p===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-o*m,e[t+2]=c*g+u*m+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-h*-a,this.y=u*l+d*-a+h*-r-c*-o,this.z=h*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new z,uc=new os;class ls{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>r&&(r=u),h>a&&(a=h),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)li.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(li)}else n.boundingBox===null&&n.computeBoundingBox(),Oa.copy(n.boundingBox),Oa.applyMatrix4(e.matrixWorld),this.union(Oa);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),_s.subVectors(this.max,Ar),Ni.subVectors(e.a,Ar),Bi.subVectors(e.b,Ar),ki.subVectors(e.c,Ar),zn.subVectors(Bi,Ni),Nn.subVectors(ki,Bi),ci.subVectors(Ni,ki);let t=[0,-zn.z,zn.y,0,-Nn.z,Nn.y,0,-ci.z,ci.y,zn.z,0,-zn.x,Nn.z,0,-Nn.x,ci.z,0,-ci.x,-zn.y,zn.x,0,-Nn.y,Nn.x,0,-ci.y,ci.x,0];return!za(t,Ni,Bi,ki,_s)||(t=[1,0,0,0,1,0,0,0,1],!za(t,Ni,Bi,ki,_s))?!1:(vs.crossVectors(zn,Nn),t=[vs.x,vs.y,vs.z],za(t,Ni,Bi,ki,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new z,new z,new z,new z,new z,new z,new z,new z],li=new z,Oa=new ls,Ni=new z,Bi=new z,ki=new z,zn=new z,Nn=new z,ci=new z,Ar=new z,_s=new z,vs=new z,ui=new z;function za(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ui.fromArray(s,r);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=n.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qd=new ls,hc=new z,xs=new z,Na=new z;class ha{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Na.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?xs.set(0,0,1).multiplyScalar(e.radius):xs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hc.copy(e.center).add(xs)),this.expandByPoint(hc.copy(e.center).sub(xs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new z,Ba=new z,ys=new z,Bn=new z,ka=new z,bs=new z,Ua=new z;class Vu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=Bn.dot(this.direction),l=-Bn.dot(ys),c=Bn.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ys).multiplyScalar(d).add(Ba),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,r){ka.subVectors(t,e),bs.subVectors(n,e),Ua.crossVectors(ka,bs);let a=this.direction.dot(Ua),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bn.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(Bn,bs));if(l<0)return null;const c=o*this.direction.dot(ka.cross(Bn));if(c<0||l+c>a)return null;const u=-o*Bn.dot(Ua);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,u,h,d,m,g,f,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*h,g=o*u,f=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d+f*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,f=c*h;t[0]=d-f*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*h,g=o*u,f=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,f=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,jd)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),kn.crossVectors(n,Rt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),kn.crossVectors(n,Rt)),kn.normalize(),Ms.crossVectors(Rt,kn),i[0]=kn.x,i[4]=Ms.x,i[8]=Rt.x,i[1]=kn.y,i[5]=Ms.y,i[9]=Rt.y,i[2]=kn.z,i[6]=Ms.z,i[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],b=n[3],E=n[7],w=n[11],x=n[15],C=i[0],y=i[4],v=i[8],M=i[12],O=i[1],F=i[5],K=i[9],Y=i[13],D=i[2],H=i[6],G=i[10],I=i[14],N=i[3],R=i[7],B=i[11],j=i[15];return r[0]=a*C+o*O+l*D+c*N,r[4]=a*y+o*F+l*H+c*R,r[8]=a*v+o*K+l*G+c*B,r[12]=a*M+o*Y+l*I+c*j,r[1]=u*C+h*O+d*D+m*N,r[5]=u*y+h*F+d*H+m*R,r[9]=u*v+h*K+d*G+m*B,r[13]=u*M+h*Y+d*I+m*j,r[2]=g*C+f*O+p*D+_*N,r[6]=g*y+f*F+p*H+_*R,r[10]=g*v+f*K+p*G+_*B,r[14]=g*M+f*Y+p*I+_*j,r[3]=b*C+E*O+w*D+x*N,r[7]=b*y+E*F+w*H+x*R,r[11]=b*v+E*K+w*G+x*B,r[15]=b*M+E*Y+w*I+x*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],f=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*m-n*l*m)+f*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+p*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],f=e[13],p=e[14],_=e[15],b=h*p*c-f*d*c+f*l*m-o*p*m-h*l*_+o*d*_,E=g*d*c-u*p*c-g*l*m+a*p*m+u*l*_-a*d*_,w=u*f*c-g*h*c+g*o*m-a*f*m-u*o*_+a*h*_,x=g*h*l-u*f*l-g*o*d+a*f*d+u*o*p-a*h*p,C=t*b+n*E+i*w+r*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/C;return e[0]=b*y,e[1]=(f*d*r-h*p*r-f*i*m+n*p*m+h*i*_-n*d*_)*y,e[2]=(o*p*r-f*l*r+f*i*c-n*p*c-o*i*_+n*l*_)*y,e[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*m-n*l*m)*y,e[4]=E*y,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*_+t*d*_)*y,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*_-t*l*_)*y,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*y,e[8]=w*y,e[9]=(g*h*r-u*f*r-g*n*m+t*f*m+u*n*_-t*h*_)*y,e[10]=(a*f*r-g*o*r+g*n*c-t*f*c-a*n*_+t*o*_)*y,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*y,e[12]=x*y,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*p+t*h*p)*y,e[14]=(g*o*i-a*f*i-g*n*l+t*f*l+a*n*p-t*o*p)*y,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,m=r*u,g=r*h,f=a*u,p=a*h,_=o*h,b=l*c,E=l*u,w=l*h,x=n.x,C=n.y,y=n.z;return i[0]=(1-(f+_))*x,i[1]=(m+w)*x,i[2]=(g-E)*x,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(d+_))*C,i[6]=(p+b)*C,i[7]=0,i[8]=(g+E)*y,i[9]=(p-b)*y,i[10]=(1-(d+f))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/r,u=1/a,h=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=h,Zt.elements[9]*=h,Zt.elements[10]*=h,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ui=new z,Zt=new Je,Yd=new z(0,0,0),jd=new z(1,1,1),kn=new z,Ms=new z,Rt=new z,fc=new Je,dc=new os;class cs{constructor(e=0,t=0,n=0,i=cs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dc.setFromEuler(this),this.setFromQuaternion(dc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}cs.DefaultOrder="XYZ";cs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const pc=new z,Gi=new os,Sn=new Je,Ss=new z,Lr=new z,Zd=new z,Kd=new os,mc=new z(1,0,0),gc=new z(0,1,0),_c=new z(0,0,1),Jd={type:"added"},vc={type:"removed"};class vt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DefaultUp.clone();const e=new z,t=new cs,n=new os,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new gn}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ss.copy(e):Ss.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Lr,Ss,this.up):Sn.lookAt(Ss,Lr,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(vc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DefaultUp=new z(0,1,0);vt.DefaultMatrixAutoUpdate=!0;const Kt=new z,wn=new z,Ga=new z,En=new z,Vi=new z,Hi=new z,xc=new z,Va=new z,Ha=new z,Wa=new z;class pn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kt.subVectors(i,t),wn.subVectors(n,t),Ga.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(wn),l=Kt.dot(Ga),c=wn.dot(wn),u=wn.dot(Ga),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,En),l.set(0,0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),wn.subVectors(e,t),Kt.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),Kt.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return pn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Vi.subVectors(i,n),Hi.subVectors(r,n),Va.subVectors(e,n);const l=Vi.dot(Va),c=Hi.dot(Va);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,i);const u=Vi.dot(Ha),h=Hi.dot(Ha);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Vi,a);Wa.subVectors(e,r);const m=Vi.dot(Wa),g=Hi.dot(Wa);if(g>=0&&m<=g)return t.copy(r);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Hi,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return xc.subVectors(r,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(xc,o);const _=1/(p+f+d);return a=f*_,o=d*_,t.copy(n).addScaledVector(Vi,a).addScaledVector(Hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qd=0;class lt extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=sr,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pu,this.blendDst=Du,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Nf;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==Yr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}lt.fromType=function(){return null};class Wo extends lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new z,ws=new Re;class Wt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=oc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new we),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Re),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new z),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new qe),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wu extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ep=0;const Bt=new Je,Xa=new vt,Wi=new z,Pt=new ls,Rr=new ls,nt=new z;class Yt extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nu(e)?Xu:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Pt.setFromBufferAttribute(r),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(Pt.min,Rr.min),Pt.expandByPoint(nt),nt.addVectors(Pt.max,Rr.max),Pt.expandByPoint(nt)):(Pt.expandByPoint(Rr.min),Pt.expandByPoint(Rr.max))}Pt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nt.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(e,c),nt.add(Wi)),i=Math.max(i,n.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new z,u[O]=new z;const h=new z,d=new z,m=new z,g=new Re,f=new Re,p=new Re,_=new z,b=new z;function E(O,F,K){h.fromArray(i,O*3),d.fromArray(i,F*3),m.fromArray(i,K*3),g.fromArray(a,O*2),f.fromArray(a,F*2),p.fromArray(a,K*2),d.sub(h),m.sub(h),f.sub(g),p.sub(g);const Y=1/(f.x*p.y-p.x*f.y);!isFinite(Y)||(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(Y),b.copy(m).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(Y),c[O].add(_),c[F].add(_),c[K].add(_),u[O].add(b),u[F].add(b),u[K].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let O=0,F=w.length;O<F;++O){const K=w[O],Y=K.start,D=K.count;for(let H=Y,G=Y+D;H<G;H+=3)E(n[H+0],n[H+1],n[H+2])}const x=new z,C=new z,y=new z,v=new z;function M(O){y.fromArray(r,O*3),v.copy(y);const F=c[O];x.copy(F),x.sub(y.multiplyScalar(y.dot(F))).normalize(),C.crossVectors(v,F);const Y=C.dot(u[O])<0?-1:1;l[O*4]=x.x,l[O*4+1]=x.y,l[O*4+2]=x.z,l[O*4+3]=Y}for(let O=0,F=w.length;O<F;++O){const K=w[O],Y=K.start,D=K.count;for(let H=Y,G=Y+D;H<G;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),f=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,d=c;h<u;h++,d++)a[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Je,Xi=new Vu,qa=new ha,Un=new z,Gn=new z,Vn=new z,Ya=new z,ja=new z,$a=new z,Es=new z,Ts=new z,Cs=new z,As=new Re,Ls=new Re,Rs=new Re,Za=new z,Ps=new z;class Et extends vt{constructor(e=new Yt,t=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),e.ray.intersectsSphere(qa)===!1)||(yc.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],b=i[_.materialIndex],E=Math.max(_.start,g.start),w=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,C=w;x<C;x+=3){const y=o.getX(x),v=o.getX(x+1),M=o.getX(x+2);a=Ds(this,b,e,Xi,l,c,u,h,d,y,v,M),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const f=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=f,b=p;_<b;_+=3){const E=o.getX(_),w=o.getX(_+1),x=o.getX(_+2);a=Ds(this,i,e,Xi,l,c,u,h,d,E,w,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],b=i[_.materialIndex],E=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,C=w;x<C;x+=3){const y=x,v=x+1,M=x+2;a=Ds(this,b,e,Xi,l,c,u,h,d,y,v,M),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=f,b=p;_<b;_+=3){const E=_,w=_+1,x=_+2;a=Ds(this,i,e,Xi,l,c,u,h,d,E,w,x),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function tp(s,e,t,n,i,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==ur,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:s}}function Ds(s,e,t,n,i,r,a,o,l,c,u,h){Un.fromBufferAttribute(i,c),Gn.fromBufferAttribute(i,u),Vn.fromBufferAttribute(i,h);const d=s.morphTargetInfluences;if(r&&d){Es.set(0,0,0),Ts.set(0,0,0),Cs.set(0,0,0);for(let g=0,f=r.length;g<f;g++){const p=d[g],_=r[g];p!==0&&(Ya.fromBufferAttribute(_,c),ja.fromBufferAttribute(_,u),$a.fromBufferAttribute(_,h),a?(Es.addScaledVector(Ya,p),Ts.addScaledVector(ja,p),Cs.addScaledVector($a,p)):(Es.addScaledVector(Ya.sub(Un),p),Ts.addScaledVector(ja.sub(Gn),p),Cs.addScaledVector($a.sub(Vn),p)))}Un.add(Es),Gn.add(Ts),Vn.add(Cs)}s.isSkinnedMesh&&(s.boneTransform(c,Un),s.boneTransform(u,Gn),s.boneTransform(h,Vn));const m=tp(s,e,t,n,Un,Gn,Vn,Za);if(m){o&&(As.fromBufferAttribute(o,c),Ls.fromBufferAttribute(o,u),Rs.fromBufferAttribute(o,h),m.uv=pn.getUV(Za,Un,Gn,Vn,As,Ls,Rs,new Re)),l&&(As.fromBufferAttribute(l,c),Ls.fromBufferAttribute(l,u),Rs.fromBufferAttribute(l,h),m.uv2=pn.getUV(Za,Un,Gn,Vn,As,Ls,Rs,new Re));const g={a:c,b:u,c:h,normal:new z,materialIndex:0};pn.getNormal(Un,Gn,Vn,g.normal),m.face=g}return m}class ni extends Yt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(f,p,_,b,E,w,x,C,y,v,M){const O=w/y,F=x/v,K=w/2,Y=x/2,D=C/2,H=y+1,G=v+1;let I=0,N=0;const R=new z;for(let B=0;B<G;B++){const j=B*F-Y;for(let Q=0;Q<H;Q++){const ee=Q*O-K;R[f]=ee*b,R[p]=j*E,R[_]=D,c.push(R.x,R.y,R.z),R[f]=0,R[p]=0,R[_]=C>0?1:-1,u.push(R.x,R.y,R.z),h.push(Q/y),h.push(1-B/v),I+=1}}for(let B=0;B<v;B++)for(let j=0;j<y;j++){const Q=d+j+H*B,ee=d+j+H*(B+1),ce=d+(j+1)+H*(B+1),ve=d+(j+1)+H*B;l.push(Q,ee,ve),l.push(ee,ce,ve),N+=6}o.addGroup(m,N,M),m+=N,d+=I}}static fromJSON(e){return new ni(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ut(s){const e={};for(let t=0;t<s.length;t++){const n=pr(s[t]);for(const i in n)e[i]=n[i]}return e}const Xo={clone:pr,merge:ut};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=90,Yi=1;class rp extends vt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Mt(qi,Yi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new z(1,0,0)),this.add(i);const r=new Mt(qi,Yi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(-1,0,0)),this.add(r);const a=new Mt(qi,Yi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new z(0,1,0)),this.add(a);const o=new Mt(qi,Yi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new z(0,-1,0)),this.add(o);const l=new Mt(qi,Yi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new Mt(qi,Yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=An,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Yu extends Ot{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:hr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sp extends Ln{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ni(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:$n});r.uniforms.tEquirect.value=t;const a=new Et(i,r),o=t.minFilter;return t.minFilter===ua&&(t.minFilter=Ut),new rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ka=new z,ap=new z,op=new gn;class di{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ka.subVectors(n,t).cross(ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ka),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||op.getNormalMatrix(e),i=this.coplanarPoint(Ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new ha,Is=new z;class qo{constructor(e=new di,t=new di,n=new di,i=new di,r=new di,a=new di){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],b=n[14],E=n[15];return t[0].setComponents(o-i,h-l,f-d,E-p).normalize(),t[1].setComponents(o+i,h+l,f+d,E+p).normalize(),t[2].setComponents(o+r,h+c,f+m,E+_).normalize(),t[3].setComponents(o-r,h-c,f-m,E-_).normalize(),t[4].setComponents(o-a,h-u,f-g,E-b).normalize(),t[5].setComponents(o+a,h+u,f+g,E+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Is.x=i.normal.x>0?e.max.x:e.min.x,Is.y=i.normal.y>0?e.max.y:e.min.y,Is.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ju(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const d=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,d):(t?s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Yo extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const b=_*d-a;for(let E=0;E<c;E++){const w=E*h-r;g.push(w,-b,0),f.push(0,0,1),p.push(E/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){const E=b+c*_,w=b+c*(_+1),x=b+1+c*(_+1),C=b+1+c*_;m.push(E,w,C),m.push(w,x,C)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(p,2))}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp="vec3 transformed = vec3( position );",gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vp=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",zp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Mm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Um=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Jm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Qm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,eg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,tg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ng=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ug=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:cp,alphamap_pars_fragment:up,alphatest_fragment:hp,alphatest_pars_fragment:fp,aomap_fragment:dp,aomap_pars_fragment:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Cp,common:Ap,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Dp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Fp,encodings_fragment:Op,encodings_pars_fragment:zp,envmap_fragment:Np,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:Up,envmap_physical_pars_fragment:Kp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:Hp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_fragment:Yp,lightmap_pars_fragment:jp,lights_lambert_vertex:$p,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:rm,lights_fragment_maps:sm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:fm,map_particle_fragment:dm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:_m,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:bm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:wm,normal_vertex:Em,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Rm,output_fragment:Pm,packing:Dm,premultiplied_alpha_fragment:Im,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:zm,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Um,shadowmap_vertex:Gm,shadowmask_pars_fragment:Vm,skinbase_vertex:Hm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:eg,uv_vertex:tg,uv2_pars_fragment:ng,uv2_pars_vertex:ig,uv2_vertex:rg,worldpos_vertex:sg,background_vert:ag,background_frag:og,cube_vert:lg,cube_frag:cg,depth_vert:ug,depth_frag:hg,distanceRGBA_vert:fg,distanceRGBA_frag:dg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:vg,meshbasic_frag:xg,meshlambert_vert:yg,meshlambert_frag:bg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:wg,meshnormal_frag:Eg,meshphong_vert:Tg,meshphong_frag:Cg,meshphysical_vert:Ag,meshphysical_frag:Lg,meshtoon_vert:Rg,meshtoon_frag:Pg,points_vert:Dg,points_frag:Ig,shadow_vert:Fg,shadow_frag:Og,sprite_vert:zg,sprite_frag:Ng},le={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gn},uv2Transform:{value:new gn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gn}}},dn={basic:{uniforms:ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ut([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ut([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ut([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ut([le.points,le.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ut([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ut([le.common,le.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ut([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ut([le.sprite,le.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new gn},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:ut([le.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ut([le.common,le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ut([le.lights,le.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};dn.physical={uniforms:ut([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function Bg(s,e,t,n,i,r){const a=new we(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function m(f,p){let _=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const E=s.xr,w=E.getSession&&E.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?g(a,o):b&&b.isColor&&(g(b,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),b&&(b.isCubeTexture||b.mapping===ca)?(c===void 0&&(c=new Et(new ni(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:pr(dn.cube.uniforms),vertexShader:dn.cube.vertexShader,fragmentShader:dn.cube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||h!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=s.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Et(new Yo(2,2),new Xt({name:"BackgroundMaterial",uniforms:pr(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=s.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){t.buffers.color.setClear(f.r,f.g,f.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(f,p=1){a.set(f),o=p,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,g(a,o)},render:m}}function kg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(D,H,G,I,N){let R=!1;if(a){const B=f(I,G,H);c!==B&&(c=B,m(c.object)),R=_(D,I,G,N),R&&b(D,I,G,N)}else{const B=H.wireframe===!0;(c.geometry!==I.id||c.program!==G.id||c.wireframe!==B)&&(c.geometry=I.id,c.program=G.id,c.wireframe=B,R=!0)}N!==null&&t.update(N,34963),(R||u)&&(u=!1,v(D,H,G,I),N!==null&&s.bindBuffer(34963,t.get(N).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function f(D,H,G){const I=G.wireframe===!0;let N=o[D.id];N===void 0&&(N={},o[D.id]=N);let R=N[H.id];R===void 0&&(R={},N[H.id]=R);let B=R[I];return B===void 0&&(B=p(d()),R[I]=B),B}function p(D){const H=[],G=[],I=[];for(let N=0;N<i;N++)H[N]=0,G[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:I,object:D,attributes:{},index:null}}function _(D,H,G,I){const N=c.attributes,R=H.attributes;let B=0;const j=G.getAttributes();for(const Q in j)if(j[Q].location>=0){const ce=N[Q];let ve=R[Q];if(ve===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;B++}return c.attributesNum!==B||c.index!==I}function b(D,H,G,I){const N={},R=H.attributes;let B=0;const j=G.getAttributes();for(const Q in j)if(j[Q].location>=0){let ce=R[Q];ce===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),N[Q]=ve,B++}c.attributes=N,c.attributesNum=B,c.index=I}function E(){const D=c.newAttributes;for(let H=0,G=D.length;H<G;H++)D[H]=0}function w(D){x(D,0)}function x(D,H){const G=c.newAttributes,I=c.enabledAttributes,N=c.attributeDivisors;G[D]=1,I[D]===0&&(s.enableVertexAttribArray(D),I[D]=1),N[D]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),N[D]=H)}function C(){const D=c.newAttributes,H=c.enabledAttributes;for(let G=0,I=H.length;G<I;G++)H[G]!==D[G]&&(s.disableVertexAttribArray(G),H[G]=0)}function y(D,H,G,I,N,R){n.isWebGL2===!0&&(G===5124||G===5125)?s.vertexAttribIPointer(D,H,G,N,R):s.vertexAttribPointer(D,H,G,I,N,R)}function v(D,H,G,I){if(n.isWebGL2===!1&&(D.isInstancedMesh||I.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const N=I.attributes,R=G.getAttributes(),B=H.defaultAttributeValues;for(const j in R){const Q=R[j];if(Q.location>=0){let ee=N[j];if(ee===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ce=ee.normalized,ve=ee.itemSize,A=t.get(ee);if(A===void 0)continue;const te=A.buffer,ie=A.type,ue=A.bytesPerElement;if(ee.isInterleavedBufferAttribute){const $=ee.data,me=$.stride,ge=ee.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)x(Q.location+_e,$.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<Q.locationSize;_e++)w(Q.location+_e);s.bindBuffer(34962,te);for(let _e=0;_e<Q.locationSize;_e++)y(Q.location+_e,ve/Q.locationSize,ie,ce,me*ue,(ge+ve/Q.locationSize*_e)*ue)}else{if(ee.isInstancedBufferAttribute){for(let $=0;$<Q.locationSize;$++)x(Q.location+$,ee.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let $=0;$<Q.locationSize;$++)w(Q.location+$);s.bindBuffer(34962,te);for(let $=0;$<Q.locationSize;$++)y(Q.location+$,ve/Q.locationSize,ie,ce,ve*ue,ve/Q.locationSize*$*ue)}}else if(B!==void 0){const ce=B[j];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(Q.location,ce);break;case 3:s.vertexAttrib3fv(Q.location,ce);break;case 4:s.vertexAttrib4fv(Q.location,ce);break;default:s.vertexAttrib1fv(Q.location,ce)}}}}C()}function M(){K();for(const D in o){const H=o[D];for(const G in H){const I=H[G];for(const N in I)g(I[N].object),delete I[N];delete H[G]}delete o[D]}}function O(D){if(o[D.id]===void 0)return;const H=o[D.id];for(const G in H){const I=H[G];for(const N in I)g(I[N].object),delete I[N];delete H[G]}delete o[D.id]}function F(D){for(const H in o){const G=o[H];if(G[D.id]===void 0)continue;const I=G[D.id];for(const N in I)g(I[N].object),delete I[N];delete G[D.id]}}function K(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:w,disableUnusedAttributes:C}}function Ug(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Gg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),g=s.getParameter(34076),f=s.getParameter(34921),p=s.getParameter(36347),_=s.getParameter(36348),b=s.getParameter(36349),E=d>0,w=a||e.has("OES_texture_float"),x=E&&w,C=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:x,maxSamples:C}}function Vg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new di,o=new gn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,d,m){const g=h.clippingPlanes,f=h.clipIntersection,p=h.clipShadows,_=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const b=r?0:n,E=b*4;let w=_.clippingState||null;l.value=w,w=u(g,d,E,m);for(let x=0;x!==E;++x)w[x]=t[x];_.clippingState=w,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const f=h!==null?h.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let E=0,w=m;E!==f;++E,w+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,p}}function Hg(s){let e=new WeakMap;function t(a,o){return o===go?a.mapping=hr:o===_o&&(a.mapping=fr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===go||o===_o)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sp(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class fa extends qu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,bc=[.125,.215,.35,.446,.526,.582],_i=20,Ja=new fa,Mc=new we;let Qa=null;const pi=(1+Math.sqrt(5))/2,$i=1/pi,Sc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,pi,$i),new z(0,pi,-$i),new z($i,0,pi),new z(-$i,0,pi),new z(pi,$i,0),new z(-pi,$i,0)];class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa),e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:jr,format:Qt,encoding:Li,depthBuffer:!1},i=Ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wg(r)),this._blurMaterial=Xg(r,e,t)}return i}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,i){const o=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Mc),u.toneMapping=An,u.autoClear=!1;const m=new Wo({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Et(new ni,m);let f=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,f=!0):(m.color.copy(Mc),f=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):b===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const E=this._cubeSize;Fs(i,b*E,_>2?E:0,E,E),u.setRenderTarget(i),f&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===hr||e.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ja)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Sc[(i-1)%Sc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Et(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*_i-1),f=r/g,p=isFinite(r)?1+Math.floor(u*f):_i;p>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_i}`);const _=[];let b=0;for(let y=0;y<_i;++y){const v=y/f,M=Math.exp(-v*v/2);_.push(M),y===0?b+=M:y<p&&(b+=2*M)}for(let y=0;y<_.length;y++)_[y]=_[y]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const w=this._sizeLods[i],x=3*w*(i>E-er?i-E+er:0),C=4*(this._cubeSize-w);Fs(t,x,C,3*w,2*w),l.setRenderTarget(t),l.render(h,Ja)}}function Wg(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+bc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-er?l=bc[a-s+er-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,f=3,p=2,_=1,b=new Float32Array(f*g*m),E=new Float32Array(p*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const y=C%3*2/3-1,v=C>2?0:-1,M=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];b.set(M,f*g*C),E.set(d,p*g*C);const O=[C,C,C,C,C,C];w.set(O,_*g*C)}const x=new Yt;x.setAttribute("position",new Wt(b,f)),x.setAttribute("uv",new Wt(E,p)),x.setAttribute("faceIndex",new Wt(w,_)),e.push(x),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ec(s,e,t){const n=new Ln(s,e,t);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xg(s,e,t){const n=new Float32Array(_i),i=new z(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Tc(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Cc(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===go||l===_o,u=l===hr||l===fr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new wc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new wc(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Yg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jg(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)e.update(f[p],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let f=0;if(m!==null){const b=m.array;f=m.version;for(let E=0,w=b.length;E<w;E+=3){const x=b[E+0],C=b[E+1],y=b[E+2];d.push(x,C,C,y,y,x)}}else{const b=g.array;f=g.version;for(let E=0,w=b.length/3-1;E<w;E+=3){const x=E+0,C=E+1,y=E+2;d.push(x,C,C,y,y,x)}}const p=new(Nu(d)?Xu:Wu)(d,1);p.version=f;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $g(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){s.drawElements(r,m,o,d*l),t.update(m,r,1)}function h(d,m,g){if(g===0)return;let f,p;if(i)f=s,p="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,m,o,d*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Zg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kg(s,e){return s[0]-e[0]}function Jg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function eo(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Qg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let G=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",G)};var g=G;_!==void 0&&_.texture.dispose();const w=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let O=0;w===!0&&(O=1),x===!0&&(O=2),C===!0&&(O=3);let F=u.attributes.position.count*O,K=1;F>e.maxTextureSize&&(K=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Y=new Float32Array(F*K*4*p),D=new Gu(Y,F,K,p);D.type=Hn,D.needsUpdate=!0;const H=O*4;for(let I=0;I<p;I++){const N=y[I],R=v[I],B=M[I],j=F*K*4*I;for(let Q=0;Q<N.count;Q++){const ee=Q*H;w===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&eo(a,N),Y[j+ee+0]=a.x,Y[j+ee+1]=a.y,Y[j+ee+2]=a.z,Y[j+ee+3]=0),x===!0&&(a.fromBufferAttribute(R,Q),R.normalized===!0&&eo(a,R),Y[j+ee+4]=a.x,Y[j+ee+5]=a.y,Y[j+ee+6]=a.z,Y[j+ee+7]=0),C===!0&&(a.fromBufferAttribute(B,Q),B.normalized===!0&&eo(a,B),Y[j+ee+8]=a.x,Y[j+ee+9]=a.y,Y[j+ee+10]=a.z,Y[j+ee+11]=B.itemSize===4?a.w:1)}}_={count:p,texture:D,size:new Re(F,K)},r.set(u,_),u.addEventListener("dispose",G)}let b=0;for(let w=0;w<m.length;w++)b+=m[w];const E=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<f;x++){const C=p[x];C[0]=x,C[1]=m[x]}p.sort(Jg);for(let x=0;x<8;x++)x<f&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Kg);const _=u.morphAttributes.position,b=u.morphAttributes.normal;let E=0;for(let x=0;x<8;x++){const C=o[x],y=C[0],v=C[1];y!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[y]&&u.setAttribute("morphTarget"+x,_[y]),b&&u.getAttribute("morphNormal"+x)!==b[y]&&u.setAttribute("morphNormal"+x,b[y]),i[x]=v,E+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),b&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const w=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function e_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const $u=new Ot,Zu=new Gu,Ku=new Xd,Ju=new Yu,Ac=[],Lc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Dc=new Float32Array(4);function wr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ac[i];if(r===void 0&&(r=new Float32Array(i),Ac[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function da(s,e){let t=Lc[e];t===void 0&&(t=new Int32Array(e),Lc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function r_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function s_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Dc.set(n),s.uniformMatrix2fv(this.addr,!1,Dc),yt(t,n)}}function a_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Pc.set(n),s.uniformMatrix3fv(this.addr,!1,Pc),yt(t,n)}}function o_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Rc.set(n),s.uniformMatrix4fv(this.addr,!1,Rc),yt(t,n)}}function l_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function c_(s,e){const t=this.cache;xt(t,e)||(s.uniform2iv(this.addr,e),yt(t,e))}function u_(s,e){const t=this.cache;xt(t,e)||(s.uniform3iv(this.addr,e),yt(t,e))}function h_(s,e){const t=this.cache;xt(t,e)||(s.uniform4iv(this.addr,e),yt(t,e))}function f_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function d_(s,e){const t=this.cache;xt(t,e)||(s.uniform2uiv(this.addr,e),yt(t,e))}function p_(s,e){const t=this.cache;xt(t,e)||(s.uniform3uiv(this.addr,e),yt(t,e))}function m_(s,e){const t=this.cache;xt(t,e)||(s.uniform4uiv(this.addr,e),yt(t,e))}function g_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||$u,i)}function __(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ku,i)}function v_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ju,i)}function x_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function y_(s){switch(s){case 5126:return t_;case 35664:return n_;case 35665:return i_;case 35666:return r_;case 35674:return s_;case 35675:return a_;case 35676:return o_;case 5124:case 35670:return l_;case 35667:case 35671:return c_;case 35668:case 35672:return u_;case 35669:case 35673:return h_;case 5125:return f_;case 36294:return d_;case 36295:return p_;case 36296:return m_;case 35678:case 36198:case 36298:case 36306:case 35682:return g_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return x_}}function b_(s,e){s.uniform1fv(this.addr,e)}function M_(s,e){const t=wr(e,this.size,2);s.uniform2fv(this.addr,t)}function S_(s,e){const t=wr(e,this.size,3);s.uniform3fv(this.addr,t)}function w_(s,e){const t=wr(e,this.size,4);s.uniform4fv(this.addr,t)}function E_(s,e){const t=wr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function T_(s,e){const t=wr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function C_(s,e){const t=wr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A_(s,e){s.uniform1iv(this.addr,e)}function L_(s,e){s.uniform2iv(this.addr,e)}function R_(s,e){s.uniform3iv(this.addr,e)}function P_(s,e){s.uniform4iv(this.addr,e)}function D_(s,e){s.uniform1uiv(this.addr,e)}function I_(s,e){s.uniform2uiv(this.addr,e)}function F_(s,e){s.uniform3uiv(this.addr,e)}function O_(s,e){s.uniform4uiv(this.addr,e)}function z_(s,e,t){const n=e.length,i=da(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||$u,i[r])}function N_(s,e,t){const n=e.length,i=da(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Ku,i[r])}function B_(s,e,t){const n=e.length,i=da(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Ju,i[r])}function k_(s,e,t){const n=e.length,i=da(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Zu,i[r])}function U_(s){switch(s){case 5126:return b_;case 35664:return M_;case 35665:return S_;case 35666:return w_;case 35674:return E_;case 35675:return T_;case 35676:return C_;case 5124:case 35670:return A_;case 35667:case 35671:return L_;case 35668:case 35672:return R_;case 35669:case 35673:return P_;case 5125:return D_;case 36294:return I_;case 36295:return F_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return k_}}class G_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=y_(t.type)}}class V_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=U_(t.type)}}class H_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Ic(s,e){s.seq.push(e),s.map[e.id]=e}function W_(s,e,t){const n=s.name,i=n.length;for(to.lastIndex=0;;){const r=to.exec(n),a=to.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ic(t,c===void 0?new G_(o,s,e):new V_(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new H_(o),Ic(t,h)),t=h}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);W_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let X_=0;function q_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Y_(s){switch(s){case Li:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Oc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+q_(s.getShaderSource(e),a)}else return i}function j_(s,e){const t=Y_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $_(s,e){let t;switch(e){case sd:t="Linear";break;case ad:t="Reinhard";break;case od:t="OptimizedCineon";break;case ld:t="ACESFilmic";break;case cd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Z_(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zr).join(`
`)}function K_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function zr(s){return s!==""}function zc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(s){return s.replace(Q_,e0)}function e0(s,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Mo(t)}const t0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(s){return s.replace(n0,Qu).replace(t0,i0)}function i0(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Qu(s,e,t,n)}function Qu(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function r0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===zf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Or&&(e="SHADOWMAP_TYPE_VSM"),e}function s0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case hr:case fr:e="ENVMAP_TYPE_CUBE";break;case ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function o0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case la:e="ENVMAP_BLENDING_MULTIPLY";break;case id:e="ENVMAP_BLENDING_MIX";break;case rd:e="ENVMAP_BLENDING_ADD";break}return e}function l0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=r0(t),c=s0(t),u=a0(t),h=o0(t),d=l0(t),m=t.isWebGL2?"":Z_(t),g=K_(r),f=i.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(zr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(zr).join(`
`),_.length>0&&(_+=`
`)):(p=[kc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),_=[m,kc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Le.tonemapping_pars_fragment:"",t.toneMapping!==An?$_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,j_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=Mo(a),a=zc(a,t),a=Nc(a,t),o=Mo(o),o=zc(o,t),o=Nc(o,t),a=Bc(a),o=Bc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=b+p+a,w=b+_+o,x=Fc(i,35633,E),C=Fc(i,35632,w);if(i.attachShader(f,x),i.attachShader(f,C),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),s.debug.checkShaderErrors){const M=i.getProgramInfoLog(f).trim(),O=i.getShaderInfoLog(x).trim(),F=i.getShaderInfoLog(C).trim();let K=!0,Y=!0;if(i.getProgramParameter(f,35714)===!1){K=!1;const D=Oc(i,x,"vertex"),H=Oc(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+M+`
`+D+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(O===""||F==="")&&(Y=!1);Y&&(this.diagnostics={runnable:K,programLog:M,vertexShader:{log:O,prefix:p},fragmentShader:{log:F,prefix:_}})}i.deleteShader(x),i.deleteShader(C);let y;this.getUniforms=function(){return y===void 0&&(y=new Gs(i,f)),y};let v;return this.getAttributes=function(){return v===void 0&&(v=J_(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=C,this}let u0=0;class h0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new f0(e);t.set(e,n)}return t.get(e)}}class f0{constructor(e){this.id=u0++,this.code=e,this.usedTimes=0}}function d0(s,e,t,n,i,r,a){const o=new Hu,l=new h0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,M,O,F,K){const Y=F.fog,D=K.geometry,H=v.isMeshStandardMaterial?F.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),I=!!G&&G.mapping===ca?G.image.height:null,N=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const R=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,B=R!==void 0?R.length:0;let j=0;D.morphAttributes.position!==void 0&&(j=1),D.morphAttributes.normal!==void 0&&(j=2),D.morphAttributes.color!==void 0&&(j=3);let Q,ee,ce,ve;if(N){const me=dn[N];Q=me.vertexShader,ee=me.fragmentShader}else Q=v.vertexShader,ee=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const A=s.getRenderTarget(),te=v.alphaTest>0,ie=v.clearcoat>0,ue=v.iridescence>0;return{isWebGL2:u,shaderID:N,shaderName:v.type,vertexShader:Q,fragmentShader:ee,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:d,outputEncoding:A===null?s.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:Li,map:!!v.map,matcap:!!v.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:I,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Td,tangentSpaceNormalMap:v.normalMapType===br,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===We,clearcoat:ie,clearcoatMap:ie&&!!v.clearcoatMap,clearcoatRoughnessMap:ie&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!v.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!v.iridescenceMap,iridescenceThicknessMap:ue&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===sr,alphaMap:!!v.alphaMap,alphaTest:te,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!Y,useFog:v.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:j,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:An,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ur,flipSided:v.side===en,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)M.push(O),M.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(_(M,v),b(M,v),M.push(s.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.map&&o.enable(4),M.matcap&&o.enable(5),M.envMap&&o.enable(6),M.lightMap&&o.enable(7),M.aoMap&&o.enable(8),M.emissiveMap&&o.enable(9),M.bumpMap&&o.enable(10),M.normalMap&&o.enable(11),M.objectSpaceNormalMap&&o.enable(12),M.tangentSpaceNormalMap&&o.enable(13),M.clearcoat&&o.enable(14),M.clearcoatMap&&o.enable(15),M.clearcoatRoughnessMap&&o.enable(16),M.clearcoatNormalMap&&o.enable(17),M.iridescence&&o.enable(18),M.iridescenceMap&&o.enable(19),M.iridescenceThicknessMap&&o.enable(20),M.displacementMap&&o.enable(21),M.specularMap&&o.enable(22),M.roughnessMap&&o.enable(23),M.metalnessMap&&o.enable(24),M.gradientMap&&o.enable(25),M.alphaMap&&o.enable(26),M.alphaTest&&o.enable(27),M.vertexColors&&o.enable(28),M.vertexAlphas&&o.enable(29),M.vertexUvs&&o.enable(30),M.vertexTangents&&o.enable(31),M.uvsVertexOnly&&o.enable(32),M.fog&&o.enable(33),v.push(o.mask),o.disableAll(),M.useFog&&o.enable(0),M.flatShading&&o.enable(1),M.logarithmicDepthBuffer&&o.enable(2),M.skinning&&o.enable(3),M.morphTargets&&o.enable(4),M.morphNormals&&o.enable(5),M.morphColors&&o.enable(6),M.premultipliedAlpha&&o.enable(7),M.shadowMapEnabled&&o.enable(8),M.physicallyCorrectLights&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.specularIntensityMap&&o.enable(14),M.specularColorMap&&o.enable(15),M.transmission&&o.enable(16),M.transmissionMap&&o.enable(17),M.thicknessMap&&o.enable(18),M.sheen&&o.enable(19),M.sheenColorMap&&o.enable(20),M.sheenRoughnessMap&&o.enable(21),M.decodeVideoTexture&&o.enable(22),M.opaque&&o.enable(23),v.push(o.mask)}function E(v){const M=g[v.type];let O;if(M){const F=dn[M];O=Xo.clone(F.uniforms)}else O=v.uniforms;return O}function w(v,M){let O;for(let F=0,K=c.length;F<K;F++){const Y=c[F];if(Y.cacheKey===M){O=Y,++O.usedTimes;break}}return O===void 0&&(O=new c0(s,M,v,r),c.push(O)),O}function x(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function y(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:E,acquireProgram:w,releaseProgram:x,releaseShaderCache:C,programs:c,dispose:y}}function p0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function m0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,m,g,f,p){let _=s[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:f,group:p},s[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=p),e++,_}function o(h,d,m,g,f,p){const _=a(h,d,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,d,m,g,f,p){const _=a(h,d,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||m0),n.length>1&&n.sort(d||Uc),i.length>1&&i.sort(d||Uc)}function u(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function g0(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Gc,s.set(n,[r])):i>=s.get(n).length?(r=new Gc,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function _0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new we};break;case"SpotLight":t={position:new z,direction:new z,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function v0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let x0=0;function y0(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function b0(s,e){const t=new _0,n=v0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,a=new Je,o=new Je;function l(u,h){let d=0,m=0,g=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,p=0,_=0,b=0,E=0,w=0,x=0,C=0;u.sort(y0);const y=h!==!0?Math.PI:1;for(let M=0,O=u.length;M<O;M++){const F=u[M],K=F.color,Y=F.intensity,D=F.distance,H=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=K.r*Y*y,m+=K.g*Y*y,g+=K.b*Y*y;else if(F.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(F.sh.coefficients[G],Y);else if(F.isDirectionalLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const I=F.shadow,N=n.get(F);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=F.shadow.matrix,w++}i.directional[f]=G,f++}else if(F.isSpotLight){const G=t.get(F);if(G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(K).multiplyScalar(Y*y),G.distance=D,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,F.castShadow){const I=F.shadow,N=n.get(F);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=H,i.spotShadowMatrix[_]=F.shadow.matrix,C++}i.spot[_]=G,_++}else if(F.isRectAreaLight){const G=t.get(F);G.color.copy(K).multiplyScalar(Y),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),i.rectArea[b]=G,b++}else if(F.isPointLight){const G=t.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity*y),G.distance=F.distance,G.decay=F.decay,F.castShadow){const I=F.shadow,N=n.get(F);N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,N.shadowCameraNear=I.camera.near,N.shadowCameraFar=I.camera.far,i.pointShadow[p]=N,i.pointShadowMap[p]=H,i.pointShadowMatrix[p]=F.shadow.matrix,x++}i.point[p]=G,p++}else if(F.isHemisphereLight){const G=t.get(F);G.skyColor.copy(F.color).multiplyScalar(Y*y),G.groundColor.copy(F.groundColor).multiplyScalar(Y*y),i.hemi[E]=G,E++}}b>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==f||v.pointLength!==p||v.spotLength!==_||v.rectAreaLength!==b||v.hemiLength!==E||v.numDirectionalShadows!==w||v.numPointShadows!==x||v.numSpotShadows!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=C,v.directionalLength=f,v.pointLength=p,v.spotLength=_,v.rectAreaLength=b,v.hemiLength=E,v.numDirectionalShadows=w,v.numPointShadows=x,v.numSpotShadows=C,i.version=x0++)}function c(u,h){let d=0,m=0,g=0,f=0,p=0;const _=h.matrixWorldInverse;for(let b=0,E=u.length;b<E;b++){const w=u[b];if(w.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(w.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),o.identity(),a.copy(w.matrixWorld),a.premultiply(_),o.extractRotation(a),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),f++}else if(w.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Vc(s,e){const t=new b0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M0(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Vc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Vc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class eh extends lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class th extends lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E0(s,e,t){let n=new qo;const i=new Re,r=new Re,a=new qe,o=new eh({depthPacking:Ed}),l=new th,c={},u=t.maxTextureSize,h={0:en,1:Yr,2:ur},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:S0,fragmentShader:w0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Et(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru,this.render=function(w,x,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),O=s.state;O.setBlending($n),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let F=0,K=w.length;F<K;F++){const Y=w[F],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const H=D.getFrameExtents();if(i.multiply(H),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===Or&&(D.map=new Ln(i.x,i.y),D.map.texture.name=Y.name+".shadowMap",D.mapPass=new Ln(i.x,i.y),D.camera.updateProjectionMatrix()),D.map===null){const I={minFilter:ht,magFilter:ht,format:Qt};D.map=new Ln(i.x,i.y,I),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const G=D.getViewportCount();for(let I=0;I<G;I++){const N=D.getViewport(I);a.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),O.viewport(a),D.updateMatrices(Y,I),n=D.getFrustum(),E(x,C,D.camera,Y,this.type)}!D.isPointLightShadow&&this.type===Or&&_(D,C),D.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(y,v,M)};function _(w,x){const C=e.update(f);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,C,d,f,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,C,m,f,null)}function b(w,x,C,y,v,M){let O=null;const F=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0?O=F:O=C.isPointLight===!0?l:o,s.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const K=O.uuid,Y=x.uuid;let D=c[K];D===void 0&&(D={},c[K]=D);let H=D[Y];H===void 0&&(H=O.clone(),D[Y]=H),O=H}return O.visible=x.visible,O.wireframe=x.wireframe,M===Or?O.side=x.shadowSide!==null?x.shadowSide:x.side:O.side=x.shadowSide!==null?x.shadowSide:h[x.side],O.alphaMap=x.alphaMap,O.alphaTest=x.alphaTest,O.clipShadows=x.clipShadows,O.clippingPlanes=x.clippingPlanes,O.clipIntersection=x.clipIntersection,O.displacementMap=x.displacementMap,O.displacementScale=x.displacementScale,O.displacementBias=x.displacementBias,O.wireframeLinewidth=x.wireframeLinewidth,O.linewidth=x.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(C.matrixWorld),O.nearDistance=y,O.farDistance=v),O}function E(w,x,C,y,v){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Or)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=e.update(w),K=w.material;if(Array.isArray(K)){const Y=F.groups;for(let D=0,H=Y.length;D<H;D++){const G=Y[D],I=K[G.materialIndex];if(I&&I.visible){const N=b(w,I,y,C.near,C.far,v);s.renderBufferDirect(C,null,F,N,w,G)}}}else if(K.visible){const Y=b(w,K,y,C.near,C.far,v);s.renderBufferDirect(C,null,F,Y,w,null)}}const O=w.children;for(let F=0,K=O.length;F<K;F++)E(O[F],x,C,y,v)}}function T0(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const oe=new qe;let ae=null;const ye=new qe(0,0,0,0);return{setMask:function(de){ae!==de&&!P&&(s.colorMask(de,de,de,de),ae=de)},setLocked:function(de){P=de},setClear:function(de,Me,re,Se,ze){ze===!0&&(de*=Se,Me*=Se,re*=Se),oe.set(de,Me,re,Se),ye.equals(oe)===!1&&(s.clearColor(de,Me,re,Se),ye.copy(oe))},reset:function(){P=!1,ae=null,ye.set(-1,0,0,0)}}}function r(){let P=!1,oe=null,ae=null,ye=null;return{setTest:function(de){de?ve(2929):A(2929)},setMask:function(de){oe!==de&&!P&&(s.depthMask(de),oe=de)},setFunc:function(de){if(ae!==de){if(de)switch(de){case Zf:s.depthFunc(512);break;case Kf:s.depthFunc(519);break;case Jf:s.depthFunc(513);break;case mo:s.depthFunc(515);break;case Qf:s.depthFunc(514);break;case ed:s.depthFunc(518);break;case td:s.depthFunc(516);break;case nd:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);ae=de}},setLocked:function(de){P=de},setClear:function(de){ye!==de&&(s.clearDepth(de),ye=de)},reset:function(){P=!1,oe=null,ae=null,ye=null}}}function a(){let P=!1,oe=null,ae=null,ye=null,de=null,Me=null,re=null,Se=null,ze=null;return{setTest:function(Ne){P||(Ne?ve(2960):A(2960))},setMask:function(Ne){oe!==Ne&&!P&&(s.stencilMask(Ne),oe=Ne)},setFunc:function(Ne,mt,sn){(ae!==Ne||ye!==mt||de!==sn)&&(s.stencilFunc(Ne,mt,sn),ae=Ne,ye=mt,de=sn)},setOp:function(Ne,mt,sn){(Me!==Ne||re!==mt||Se!==sn)&&(s.stencilOp(Ne,mt,sn),Me=Ne,re=mt,Se=sn)},setLocked:function(Ne){P=Ne},setClear:function(Ne){ze!==Ne&&(s.clearStencil(Ne),ze=Ne)},reset:function(){P=!1,oe=null,ae=null,ye=null,de=null,Me=null,re=null,Se=null,ze=null}}}const o=new i,l=new r,c=new a;let u={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,_=null,b=null,E=null,w=null,x=null,C=null,y=!1,v=null,M=null,O=null,F=null,K=null;const Y=s.getParameter(35661);let D=!1,H=0;const G=s.getParameter(7938);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),D=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),D=H>=2);let I=null,N={};const R=s.getParameter(3088),B=s.getParameter(2978),j=new qe().fromArray(R),Q=new qe().fromArray(B);function ee(P,oe,ae){const ye=new Uint8Array(4),de=s.createTexture();s.bindTexture(P,de),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let Me=0;Me<ae;Me++)s.texImage2D(oe+Me,0,6408,1,1,0,6408,5121,ye);return de}const ce={};ce[3553]=ee(3553,3553,1),ce[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(2929),l.setFunc(mo),ke(!1),Ue(Il),ve(2884),ge($n);function ve(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function A(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function te(P,oe){return h[P]!==oe?(s.bindFramebuffer(P,oe),h[P]=oe,n&&(P===36009&&(h[36160]=oe),P===36160&&(h[36009]=oe)),!0):!1}function ie(P,oe){let ae=m,ye=!1;if(P)if(ae=d.get(oe),ae===void 0&&(ae=[],d.set(oe,ae)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(ae.length!==de.length||ae[0]!==36064){for(let Me=0,re=de.length;Me<re;Me++)ae[Me]=36064+Me;ae.length=de.length,ye=!0}}else ae[0]!==36064&&(ae[0]=36064,ye=!0);else ae[0]!==1029&&(ae[0]=1029,ye=!0);ye&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ue(P){return g!==P?(s.useProgram(P),g=P,!0):!1}const $={[Ki]:32774,[kf]:32778,[Uf]:32779};if(n)$[zl]=32775,$[Nl]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&($[zl]=P.MIN_EXT,$[Nl]=P.MAX_EXT)}const me={[Gf]:0,[Vf]:1,[Hf]:768,[Pu]:770,[$f]:776,[Yf]:774,[Xf]:772,[Wf]:769,[Du]:771,[jf]:775,[qf]:773};function ge(P,oe,ae,ye,de,Me,re,Se){if(P===$n){f===!0&&(A(3042),f=!1);return}if(f===!1&&(ve(3042),f=!0),P!==Bf){if(P!==p||Se!==y){if((_!==Ki||w!==Ki)&&(s.blendEquation(32774),_=Ki,w=Ki),Se)switch(P){case sr:s.blendFuncSeparate(1,771,1,771);break;case po:s.blendFunc(1,1);break;case Fl:s.blendFuncSeparate(0,769,0,1);break;case Ol:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case sr:s.blendFuncSeparate(770,771,1,771);break;case po:s.blendFunc(770,1);break;case Fl:s.blendFuncSeparate(0,769,0,1);break;case Ol:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,E=null,x=null,C=null,p=P,y=Se}return}de=de||oe,Me=Me||ae,re=re||ye,(oe!==_||de!==w)&&(s.blendEquationSeparate($[oe],$[de]),_=oe,w=de),(ae!==b||ye!==E||Me!==x||re!==C)&&(s.blendFuncSeparate(me[ae],me[ye],me[Me],me[re]),b=ae,E=ye,x=Me,C=re),p=P,y=null}function _e(P,oe){P.side===ur?A(2884):ve(2884);let ae=P.side===en;oe&&(ae=!ae),ke(ae),P.blending===sr&&P.transparent===!1?ge($n):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ye=P.stencilWrite;c.setTest(ye),ye&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ct(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ve(32926):A(32926)}function ke(P){v!==P&&(P?s.frontFace(2304):s.frontFace(2305),v=P)}function Ue(P){P!==Ff?(ve(2884),P!==M&&(P===Il?s.cullFace(1029):P===Of?s.cullFace(1028):s.cullFace(1032))):A(2884),M=P}function $e(P){P!==O&&(D&&s.lineWidth(P),O=P)}function ct(P,oe,ae){P?(ve(32823),(F!==oe||K!==ae)&&(s.polygonOffset(oe,ae),F=oe,K=ae)):A(32823)}function Qe(P){P?ve(3089):A(3089)}function Fe(P){P===void 0&&(P=33984+Y-1),I!==P&&(s.activeTexture(P),I=P)}function xn(P,oe){I===null&&Fe();let ae=N[I];ae===void 0&&(ae={type:void 0,texture:void 0},N[I]=ae),(ae.type!==P||ae.texture!==oe)&&(s.bindTexture(P,oe||ce[P]),ae.type=P,ae.texture=oe)}function yn(){const P=N[I];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function S(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(P){j.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function pe(P){Q.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Q.copy(P))}function fe(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},I=null,N={},h={},d=new WeakMap,m=[],g=null,f=!1,p=null,_=null,b=null,E=null,w=null,x=null,C=null,y=!1,v=null,M=null,O=null,F=null,K=null,j.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:A,bindFramebuffer:te,drawBuffers:ie,useProgram:ue,setBlending:ge,setMaterial:_e,setFlipSided:ke,setCullFace:Ue,setLineWidth:$e,setPolygonOffset:ct,setScissorTest:Qe,activeTexture:Fe,bindTexture:xn,unbindTexture:yn,compressedTexImage2D:L,texImage2D:Ee,texImage3D:X,texStorage2D:se,texStorage3D:he,texSubImage2D:S,texSubImage3D:q,compressedTexSubImage2D:ne,scissor:xe,viewport:pe,reset:fe}}function C0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,S){return _?new OffscreenCanvas(L,S):$r("canvas")}function E(L,S,q,ne){let se=1;if((L.width>ne||L.height>ne)&&(se=ne/Math.max(L.width,L.height)),se<1||S===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const he=S?Ys:Math.floor,Ee=he(se*L.width),X=he(se*L.height);f===void 0&&(f=b(Ee,X));const xe=q?b(Ee,X):f;return xe.width=Ee,xe.height=X,xe.getContext("2d").drawImage(L,0,0,Ee,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ee+"x"+X+")."),xe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function w(L){return bo(L.width)&&bo(L.height)}function x(L){return o?!1:L.wrapS!==Jt||L.wrapT!==Jt||L.minFilter!==ht&&L.minFilter!==Ut}function C(L,S){return L.generateMipmaps&&S&&L.minFilter!==ht&&L.minFilter!==Ut}function y(L){s.generateMipmap(L)}function v(L,S,q,ne,se=!1){if(o===!1)return S;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=S;return S===6403&&(q===5126&&(he=33326),q===5131&&(he=33325),q===5121&&(he=33321)),S===33319&&(q===5126&&(he=33328),q===5131&&(he=33327),q===5121&&(he=33323)),S===6408&&(q===5126&&(he=34836),q===5131&&(he=34842),q===5121&&(he=ne===We&&se===!1?35907:32856),q===32819&&(he=32854),q===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function M(L,S,q){return C(L,q)===!0||L.isFramebufferTexture&&L.minFilter!==ht&&L.minFilter!==Ut?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function O(L){return L===ht||L===Bl||L===kl?9728:9729}function F(L){const S=L.target;S.removeEventListener("dispose",F),Y(S),S.isVideoTexture&&g.delete(S)}function K(L){const S=L.target;S.removeEventListener("dispose",K),H(S)}function Y(L){const S=n.get(L);if(S.__webglInit===void 0)return;const q=L.source,ne=p.get(q);if(ne){const se=ne[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(L),Object.keys(ne).length===0&&p.delete(q)}n.remove(L)}function D(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const q=L.source,ne=p.get(q);delete ne[S.__cacheKey],a.memory.textures--}function H(L){const S=L.texture,q=n.get(L),ne=n.get(S);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let se=0;se<q.__webglColorRenderbuffer.length;se++)q.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[se]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let se=0,he=S.length;se<he;se++){const Ee=n.get(S[se]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(S[se])}n.remove(S),n.remove(L)}let G=0;function I(){G=0}function N(){const L=G;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),G+=1,L}function R(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.encoding),S.join()}function B(L,S){const q=n.get(L);if(L.isVideoTexture&&xn(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const ne=L.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,L,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,q.__webglTexture)}function j(L,S){const q=n.get(L);if(L.version>0&&q.__version!==L.version){ie(q,L,S);return}t.activeTexture(33984+S),t.bindTexture(35866,q.__webglTexture)}function Q(L,S){const q=n.get(L);if(L.version>0&&q.__version!==L.version){ie(q,L,S);return}t.activeTexture(33984+S),t.bindTexture(32879,q.__webglTexture)}function ee(L,S){const q=n.get(L);if(L.version>0&&q.__version!==L.version){ue(q,L,S);return}t.activeTexture(33984+S),t.bindTexture(34067,q.__webglTexture)}const ce={[vo]:10497,[Jt]:33071,[xo]:33648},ve={[ht]:9728,[Bl]:9984,[kl]:9986,[Ut]:9729,[ud]:9985,[ua]:9987};function A(L,S,q){if(q?(s.texParameteri(L,10242,ce[S.wrapS]),s.texParameteri(L,10243,ce[S.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,ce[S.wrapR]),s.texParameteri(L,10240,ve[S.magFilter]),s.texParameteri(L,10241,ve[S.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(S.wrapS!==Jt||S.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,O(S.magFilter)),s.texParameteri(L,10241,O(S.minFilter)),S.minFilter!==ht&&S.minFilter!==Ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.type===Hn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===jr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(L,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function te(L,S){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",F));const ne=S.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const he=R(S);if(he!==L.__cacheKey){se[he]===void 0&&(se[he]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),se[he].usedTimes++;const Ee=se[L.__cacheKey];Ee!==void 0&&(se[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(S)),L.__cacheKey=he,L.__webglTexture=se[he].texture}return q}function ie(L,S,q){let ne=3553;S.isDataArrayTexture&&(ne=35866),S.isData3DTexture&&(ne=32879);const se=te(L,S),he=S.source;if(t.activeTexture(33984+q),t.bindTexture(ne,L.__webglTexture),he.version!==he.__currentVersion||se===!0){s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const Ee=x(S)&&w(S.image)===!1;let X=E(S.image,Ee,!1,u);X=yn(S,X);const xe=w(X)||o,pe=r.convert(S.format,S.encoding);let fe=r.convert(S.type),P=v(S.internalFormat,pe,fe,S.encoding,S.isVideoTexture);A(ne,S,xe);let oe;const ae=S.mipmaps,ye=o&&S.isVideoTexture!==!0,de=he.__currentVersion===void 0||se===!0,Me=M(S,X,xe);if(S.isDepthTexture)P=6402,o?S.type===Hn?P=36012:S.type===xi?P=33190:S.type===ar?P=35056:P=33189:S.type===Hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Si&&P===6402&&S.type!==Fu&&S.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=xi,fe=r.convert(S.type)),S.format===dr&&P===6402&&(P=34041,S.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ar,fe=r.convert(S.type))),de&&(ye?t.texStorage2D(3553,1,P,X.width,X.height):t.texImage2D(3553,0,P,X.width,X.height,0,pe,fe,null));else if(S.isDataTexture)if(ae.length>0&&xe){ye&&de&&t.texStorage2D(3553,Me,P,ae[0].width,ae[0].height);for(let re=0,Se=ae.length;re<Se;re++)oe=ae[re],ye?t.texSubImage2D(3553,re,0,0,oe.width,oe.height,pe,fe,oe.data):t.texImage2D(3553,re,P,oe.width,oe.height,0,pe,fe,oe.data);S.generateMipmaps=!1}else ye?(de&&t.texStorage2D(3553,Me,P,X.width,X.height),t.texSubImage2D(3553,0,0,0,X.width,X.height,pe,fe,X.data)):t.texImage2D(3553,0,P,X.width,X.height,0,pe,fe,X.data);else if(S.isCompressedTexture){ye&&de&&t.texStorage2D(3553,Me,P,ae[0].width,ae[0].height);for(let re=0,Se=ae.length;re<Se;re++)oe=ae[re],S.format!==Qt?pe!==null?ye?t.compressedTexSubImage2D(3553,re,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(3553,re,P,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?t.texSubImage2D(3553,re,0,0,oe.width,oe.height,pe,fe,oe.data):t.texImage2D(3553,re,P,oe.width,oe.height,0,pe,fe,oe.data)}else if(S.isDataArrayTexture)ye?(de&&t.texStorage3D(35866,Me,P,X.width,X.height,X.depth),t.texSubImage3D(35866,0,0,0,0,X.width,X.height,X.depth,pe,fe,X.data)):t.texImage3D(35866,0,P,X.width,X.height,X.depth,0,pe,fe,X.data);else if(S.isData3DTexture)ye?(de&&t.texStorage3D(32879,Me,P,X.width,X.height,X.depth),t.texSubImage3D(32879,0,0,0,0,X.width,X.height,X.depth,pe,fe,X.data)):t.texImage3D(32879,0,P,X.width,X.height,X.depth,0,pe,fe,X.data);else if(S.isFramebufferTexture){if(de)if(ye)t.texStorage2D(3553,Me,P,X.width,X.height);else{let re=X.width,Se=X.height;for(let ze=0;ze<Me;ze++)t.texImage2D(3553,ze,P,re,Se,0,pe,fe,null),re>>=1,Se>>=1}}else if(ae.length>0&&xe){ye&&de&&t.texStorage2D(3553,Me,P,ae[0].width,ae[0].height);for(let re=0,Se=ae.length;re<Se;re++)oe=ae[re],ye?t.texSubImage2D(3553,re,0,0,pe,fe,oe):t.texImage2D(3553,re,P,pe,fe,oe);S.generateMipmaps=!1}else ye?(de&&t.texStorage2D(3553,Me,P,X.width,X.height),t.texSubImage2D(3553,0,0,0,pe,fe,X)):t.texImage2D(3553,0,P,pe,fe,X);C(S,xe)&&y(ne),he.__currentVersion=he.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ue(L,S,q){if(S.image.length!==6)return;const ne=te(L,S),se=S.source;if(t.activeTexture(33984+q),t.bindTexture(34067,L.__webglTexture),se.version!==se.__currentVersion||ne===!0){s.pixelStorei(37440,S.flipY),s.pixelStorei(37441,S.premultiplyAlpha),s.pixelStorei(3317,S.unpackAlignment),s.pixelStorei(37443,0);const he=S.isCompressedTexture||S.image[0].isCompressedTexture,Ee=S.image[0]&&S.image[0].isDataTexture,X=[];for(let re=0;re<6;re++)!he&&!Ee?X[re]=E(S.image[re],!1,!0,c):X[re]=Ee?S.image[re].image:S.image[re],X[re]=yn(S,X[re]);const xe=X[0],pe=w(xe)||o,fe=r.convert(S.format,S.encoding),P=r.convert(S.type),oe=v(S.internalFormat,fe,P,S.encoding),ae=o&&S.isVideoTexture!==!0,ye=se.__currentVersion===void 0||ne===!0;let de=M(S,xe,pe);A(34067,S,pe);let Me;if(he){ae&&ye&&t.texStorage2D(34067,de,oe,xe.width,xe.height);for(let re=0;re<6;re++){Me=X[re].mipmaps;for(let Se=0;Se<Me.length;Se++){const ze=Me[Se];S.format!==Qt?fe!==null?ae?t.compressedTexSubImage2D(34069+re,Se,0,0,ze.width,ze.height,fe,ze.data):t.compressedTexImage2D(34069+re,Se,oe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(34069+re,Se,0,0,ze.width,ze.height,fe,P,ze.data):t.texImage2D(34069+re,Se,oe,ze.width,ze.height,0,fe,P,ze.data)}}}else{Me=S.mipmaps,ae&&ye&&(Me.length>0&&de++,t.texStorage2D(34067,de,oe,X[0].width,X[0].height));for(let re=0;re<6;re++)if(Ee){ae?t.texSubImage2D(34069+re,0,0,0,X[re].width,X[re].height,fe,P,X[re].data):t.texImage2D(34069+re,0,oe,X[re].width,X[re].height,0,fe,P,X[re].data);for(let Se=0;Se<Me.length;Se++){const Ne=Me[Se].image[re].image;ae?t.texSubImage2D(34069+re,Se+1,0,0,Ne.width,Ne.height,fe,P,Ne.data):t.texImage2D(34069+re,Se+1,oe,Ne.width,Ne.height,0,fe,P,Ne.data)}}else{ae?t.texSubImage2D(34069+re,0,0,0,fe,P,X[re]):t.texImage2D(34069+re,0,oe,fe,P,X[re]);for(let Se=0;Se<Me.length;Se++){const ze=Me[Se];ae?t.texSubImage2D(34069+re,Se+1,0,0,fe,P,ze.image[re]):t.texImage2D(34069+re,Se+1,oe,fe,P,ze.image[re])}}}C(S,pe)&&y(34067),se.__currentVersion=se.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function $(L,S,q,ne,se){const he=r.convert(q.format,q.encoding),Ee=r.convert(q.type),X=v(q.internalFormat,he,Ee,q.encoding);n.get(S).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,X,S.width,S.height,S.depth,0,he,Ee,null):t.texImage2D(se,0,X,S.width,S.height,0,he,Ee,null)),t.bindFramebuffer(36160,L),Fe(S)?d.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(q).__webglTexture,0,Qe(S)):s.framebufferTexture2D(36160,ne,se,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(L,S,q){if(s.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let ne=33189;if(q||Fe(S)){const se=S.depthTexture;se&&se.isDepthTexture&&(se.type===Hn?ne=36012:se.type===xi&&(ne=33190));const he=Qe(S);Fe(S)?d.renderbufferStorageMultisampleEXT(36161,he,ne,S.width,S.height):s.renderbufferStorageMultisample(36161,he,ne,S.width,S.height)}else s.renderbufferStorage(36161,ne,S.width,S.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Qe(S);q&&Fe(S)===!1?s.renderbufferStorageMultisample(36161,ne,35056,S.width,S.height):Fe(S)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,S.width,S.height):s.renderbufferStorage(36161,34041,S.width,S.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0;se<ne.length;se++){const he=ne[se],Ee=r.convert(he.format,he.encoding),X=r.convert(he.type),xe=v(he.internalFormat,Ee,X,he.encoding),pe=Qe(S);q&&Fe(S)===!1?s.renderbufferStorageMultisample(36161,pe,xe,S.width,S.height):Fe(S)?d.renderbufferStorageMultisampleEXT(36161,pe,xe,S.width,S.height):s.renderbufferStorage(36161,xe,S.width,S.height)}}s.bindRenderbuffer(36161,null)}function ge(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const ne=n.get(S.depthTexture).__webglTexture,se=Qe(S);if(S.depthTexture.format===Si)Fe(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):s.framebufferTexture2D(36160,36096,3553,ne,0);else if(S.depthTexture.format===dr)Fe(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):s.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function _e(L){const S=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ge(S.__webglFramebuffer,L)}else if(q){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=s.createRenderbuffer(),me(S.__webglDepthbuffer[ne],L,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),me(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function ke(L,S,q){const ne=n.get(L);S!==void 0&&$(ne.__webglFramebuffer,L,L.texture,36064,3553),q!==void 0&&_e(L)}function Ue(L){const S=L.texture,q=n.get(L),ne=n.get(S);L.addEventListener("dispose",K),L.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=S.version,a.memory.textures++);const se=L.isWebGLCubeRenderTarget===!0,he=L.isWebGLMultipleRenderTargets===!0,Ee=w(L)||o;if(se){q.__webglFramebuffer=[];for(let X=0;X<6;X++)q.__webglFramebuffer[X]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),he)if(i.drawBuffers){const X=L.texture;for(let xe=0,pe=X.length;xe<pe;xe++){const fe=n.get(X[xe]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Fe(L)===!1){const X=he?S:[S];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let xe=0;xe<X.length;xe++){const pe=X[xe];q.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer[xe]);const fe=r.convert(pe.format,pe.encoding),P=r.convert(pe.type),oe=v(pe.internalFormat,fe,P,pe.encoding),ae=Qe(L);s.renderbufferStorageMultisample(36161,ae,oe,L.width,L.height),s.framebufferRenderbuffer(36160,36064+xe,36161,q.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),me(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),A(34067,S,Ee);for(let X=0;X<6;X++)$(q.__webglFramebuffer[X],L,S,36064,34069+X);C(S,Ee)&&y(34067),t.unbindTexture()}else if(he){const X=L.texture;for(let xe=0,pe=X.length;xe<pe;xe++){const fe=X[xe],P=n.get(fe);t.bindTexture(3553,P.__webglTexture),A(3553,fe,Ee),$(q.__webglFramebuffer,L,fe,36064+xe,3553),C(fe,Ee)&&y(3553)}t.unbindTexture()}else{let X=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?X=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(X,ne.__webglTexture),A(X,S,Ee),$(q.__webglFramebuffer,L,S,36064,X),C(S,Ee)&&y(X),t.unbindTexture()}L.depthBuffer&&_e(L)}function $e(L){const S=w(L)||o,q=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ne=0,se=q.length;ne<se;ne++){const he=q[ne];if(C(he,S)){const Ee=L.isWebGLCubeRenderTarget?34067:3553,X=n.get(he).__webglTexture;t.bindTexture(Ee,X),y(Ee),t.unbindTexture()}}}function ct(L){if(o&&L.samples>0&&Fe(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],q=L.width,ne=L.height;let se=16384;const he=[],Ee=L.stencilBuffer?33306:36096,X=n.get(L),xe=L.isWebGLMultipleRenderTargets===!0;if(xe)for(let pe=0;pe<S.length;pe++)t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,X.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,X.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){he.push(36064+pe),L.depthBuffer&&he.push(Ee);const fe=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(fe===!1&&(L.depthBuffer&&(se|=256),L.stencilBuffer&&(se|=1024)),xe&&s.framebufferRenderbuffer(36008,36064,36161,X.__webglColorRenderbuffer[pe]),fe===!0&&(s.invalidateFramebuffer(36008,[Ee]),s.invalidateFramebuffer(36009,[Ee])),xe){const P=n.get(S[pe]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,P,0)}s.blitFramebuffer(0,0,q,ne,0,0,q,ne,se,9728),m&&s.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),xe)for(let pe=0;pe<S.length;pe++){t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pe,36161,X.__webglColorRenderbuffer[pe]);const fe=n.get(S[pe]).__webglTexture;t.bindFramebuffer(36160,X.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pe,3553,fe,0)}t.bindFramebuffer(36009,X.__webglMultisampledFramebuffer)}}function Qe(L){return Math.min(h,L.samples)}function Fe(L){const S=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xn(L){const S=a.render.frame;g.get(L)!==S&&(g.set(L,S),L.update())}function yn(L,S){const q=L.encoding,ne=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===yo||q!==Li&&(q===We?o===!1?e.has("EXT_sRGB")===!0&&ne===Qt?(L.format=yo,L.minFilter=Ut,L.generateMipmaps=!1):S=ku.sRGBToLinear(S):(ne!==Qt||se!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=ke,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Fe}function A0(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Ai)return 5121;if(r===pd)return 32819;if(r===md)return 32820;if(r===hd)return 5120;if(r===fd)return 5122;if(r===Fu)return 5123;if(r===dd)return 5124;if(r===xi)return 5125;if(r===Hn)return 5126;if(r===jr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===gd)return 6406;if(r===Qt)return 6408;if(r===Ou)return 6409;if(r===vd)return 6410;if(r===Si)return 6402;if(r===dr)return 34041;if(r===zu)return 6403;if(r===_d)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===yo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===xd)return 36244;if(r===yd)return 33319;if(r===bd)return 33320;if(r===Md)return 36249;if(r===Ta||r===Ca||r===Aa||r===La)if(a===We)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Aa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===La)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ul||r===Gl||r===Vl||r===Hl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wl||r===Xl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wl)return a===We?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ql||r===Yl||r===jl||r===$l||r===Zl||r===Kl||r===Jl||r===Ql||r===ec||r===tc||r===nc||r===ic||r===rc||r===sc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ql)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$l)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jl)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ql)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ec)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===tc)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nc)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ic)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rc)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sc)return a===We?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ac)return a===We?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ar?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class L0 extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R0={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0))),c&&e.hand){a=!0;for(const f of e.hand.values()){const p=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const b=new tr;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[f.jointName]=b,c.add(b)}const _=c.joints[f.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class P0 extends Ot{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Si,u!==Si&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Si&&(n=xi),n===void 0&&u===dr&&(n=ar),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class D0 extends Mr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let f=null,p=null;const _=[],b=new Map,E=new Mt;E.layers.enable(1),E.viewport=new qe;const w=new Mt;w.layers.enable(2),w.viewport=new qe;const x=[E,w],C=new L0;C.layers.enable(1),C.layers.enable(2);let y=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let B=_[R];return B===void 0&&(B=new no,_[R]=B),B.getTargetRaySpace()},this.getControllerGrip=function(R){let B=_[R];return B===void 0&&(B=new no,_[R]=B),B.getGripSpace()},this.getHand=function(R){let B=_[R];return B===void 0&&(B=new no,_[R]=B),B.getHandSpace()};function M(R){const B=b.get(R.inputSource);B!==void 0&&B.dispatchEvent({type:R.type,data:R.inputSource})}function O(){i.removeEventListener("select",M),i.removeEventListener("selectstart",M),i.removeEventListener("selectend",M),i.removeEventListener("squeeze",M),i.removeEventListener("squeezestart",M),i.removeEventListener("squeezeend",M),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",F),b.forEach(function(R,B){R!==void 0&&R.disconnect(B)}),b.clear(),y=null,v=null,e.setRenderTarget(f),d=null,h=null,u=null,i=null,p=null,N.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){o=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",M),i.addEventListener("selectstart",M),i.addEventListener("selectend",M),i.addEventListener("squeeze",M),i.addEventListener("squeezestart",M),i.addEventListener("squeezeend",M),i.addEventListener("end",O),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:d}),p=new Ln(d.framebufferWidth,d.framebufferHeight,{format:Qt,type:Ai,encoding:e.outputEncoding})}else{let B=null,j=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,B=g.stencil?dr:Si,j=g.stencil?ar:xi);const ee={colorFormat:e.outputEncoding===We?35907:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),p=new Ln(h.textureWidth,h.textureHeight,{format:Qt,type:Ai,depthTexture:new P0(h.textureWidth,h.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(p);ce.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),N.setContext(i),N.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(R){const B=i.inputSources;for(let j=0;j<B.length;j++){const Q=B[j].handedness==="right"?1:0;b.set(B[j],_[Q])}for(let j=0;j<R.removed.length;j++){const Q=R.removed[j],ee=b.get(Q);ee&&(ee.dispatchEvent({type:"disconnected",data:Q}),b.delete(Q))}for(let j=0;j<R.added.length;j++){const Q=R.added[j],ee=b.get(Q);ee&&ee.dispatchEvent({type:"connected",data:Q})}}const K=new z,Y=new z;function D(R,B,j){K.setFromMatrixPosition(B.matrixWorld),Y.setFromMatrixPosition(j.matrixWorld);const Q=K.distanceTo(Y),ee=B.projectionMatrix.elements,ce=j.projectionMatrix.elements,ve=ee[14]/(ee[10]-1),A=ee[14]/(ee[10]+1),te=(ee[9]+1)/ee[5],ie=(ee[9]-1)/ee[5],ue=(ee[8]-1)/ee[0],$=(ce[8]+1)/ce[0],me=ve*ue,ge=ve*$,_e=Q/(-ue+$),ke=_e*-ue;B.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ke),R.translateZ(_e),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Ue=ve+_e,$e=A+_e,ct=me-ke,Qe=ge+(Q-ke),Fe=te*A/$e*Ue,xn=ie*A/$e*Ue;R.projectionMatrix.makePerspective(ct,Qe,Fe,xn,Ue,$e)}function H(R,B){B===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(B.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;C.near=w.near=E.near=R.near,C.far=w.far=E.far=R.far,(y!==C.near||v!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),y=C.near,v=C.far);const B=R.parent,j=C.cameras;H(C,B);for(let ee=0;ee<j.length;ee++)H(j[ee],B);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),R.position.copy(C.position),R.quaternion.copy(C.quaternion),R.scale.copy(C.scale),R.matrix.copy(C.matrix),R.matrixWorld.copy(C.matrixWorld);const Q=R.children;for(let ee=0,ce=Q.length;ee<ce;ee++)Q[ee].updateMatrixWorld(!0);j.length===2?D(C,E,w):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){h!==null&&(h.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)};let G=null;function I(R,B){if(c=B.getViewerPose(l||a),m=B,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let ee=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,ee=!0);for(let ce=0;ce<Q.length;ce++){const ve=Q[ce];let A=null;if(d!==null)A=d.getViewport(ve);else{const ie=u.getViewSubImage(h,ve);A=ie.viewport,ce===0&&(e.setRenderTargetTextures(p,ie.colorTexture,h.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(p))}let te=x[ce];te===void 0&&(te=new Mt,te.layers.enable(ce),te.viewport=new qe,x[ce]=te),te.matrix.fromArray(ve.transform.matrix),te.projectionMatrix.fromArray(ve.projectionMatrix),te.viewport.set(A.x,A.y,A.width,A.height),ce===0&&C.matrix.copy(te.matrix),ee===!0&&C.cameras.push(te)}}const j=i.inputSources;for(let Q=0;Q<_.length;Q++){const ee=j[Q],ce=b.get(ee);ce!==void 0&&ce.update(ee,B,l||a)}G&&G(R,B),m=null}const N=new ju;N.setAnimationLoop(I),this.setAnimationLoop=function(R){G=R},this.dispose=function(){}}}function I0(s,e){function t(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,b,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),h(f,p),p.isMeshPhysicalMaterial&&d(f,p,E)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(r(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?o(f,p,_,b):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===en&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===en&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const w=s.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uv2Transform.value.copy(E.matrix))}function r(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,_,b){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=b*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uvTransform.value.copy(E.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function d(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===en&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function F0(){const s=$r("canvas");return s.style.display="block",s}function $o(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:F0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Li,this.physicallyCorrectLights=!1,this.toneMapping=An,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,_=0,b=0,E=null,w=-1,x=null;const C=new qe,y=new qe;let v=null,M=e.width,O=e.height,F=1,K=null,Y=null;const D=new qe(0,0,M,O),H=new qe(0,0,M,O);let G=!1;const I=new qo;let N=!1,R=!1,B=null;const j=new Je,Q=new Re,ee=new z,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?F:1}let A=t;function te(T,k){for(let W=0;W<T.length;W++){const V=T[W],J=e.getContext(V,k);if(J!==null)return J}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",ae,!1),A===null){const k=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&k.shift(),A=te(k,T),A===null)throw te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,ue,$,me,ge,_e,ke,Ue,$e,ct,Qe,Fe,xn,yn,L,S,q,ne,se,he,Ee,X,xe;function pe(){ie=new Yg(A),ue=new Gg(A,ie,s),ie.init(ue),X=new A0(A,ie,ue),$=new T0(A,ie,ue),me=new Zg(A),ge=new p0,_e=new C0(A,ie,$,ge,ue,X,me),ke=new Hg(f),Ue=new qg(f),$e=new lp(A,ue),xe=new kg(A,ie,$e,ue),ct=new jg(A,$e,me,xe),Qe=new e_(A,ct,$e,me),se=new Qg(A,ue,_e),S=new Vg(ge),Fe=new d0(f,ke,Ue,ie,ue,xe,S),xn=new I0(f,ge),yn=new g0,L=new M0(ie,ue),ne=new Bg(f,ke,$,Qe,u,a),q=new E0(f,Qe,ue),he=new Ug(A,ie,me,ue),Ee=new $g(A,ie,me,ue),me.programs=Fe.programs,f.capabilities=ue,f.extensions=ie,f.properties=ge,f.renderLists=yn,f.shadowMap=q,f.state=$,f.info=me}pe();const fe=new D0(f,A);this.xr=fe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(M,O,!1))},this.getSize=function(T){return T.set(M,O)},this.setSize=function(T,k,W){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,O=k,e.width=Math.floor(T*F),e.height=Math.floor(k*F),W!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(M*F,O*F).floor()},this.setDrawingBufferSize=function(T,k,W){M=T,O=k,F=W,e.width=Math.floor(T*W),e.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,k,W,V){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,k,W,V),$.viewport(C.copy(D).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(H)},this.setScissor=function(T,k,W,V){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,k,W,V),$.scissor(y.copy(H).multiplyScalar(F).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){$.setScissorTest(G=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,k=!0,W=!0){let V=0;T&&(V|=16384),k&&(V|=256),W&&(V|=1024),A.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),yn.dispose(),L.dispose(),ge.dispose(),ke.dispose(),Ue.dispose(),Qe.dispose(),xe.dispose(),Fe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ze),fe.removeEventListener("sessionend",Ne),B&&(B.dispose(),B=null),mt.stop()};function P(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=me.autoReset,k=q.enabled,W=q.autoUpdate,V=q.needsUpdate,J=q.type;pe(),me.autoReset=T,q.enabled=k,q.autoUpdate=W,q.needsUpdate=V,q.type=J}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ye(T){const k=T.target;k.removeEventListener("dispose",ye),de(k)}function de(T){Me(T),ge.remove(T)}function Me(T){const k=ge.get(T).programs;k!==void 0&&(k.forEach(function(W){Fe.releaseProgram(W)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,V,J,be){k===null&&(k=ce);const Te=J.isMesh&&J.matrixWorld.determinant()<0,Ae=Rf(T,k,W,V,J);$.setMaterial(V,Te);let Ce=W.index;const Be=W.attributes.position;if(Ce===null){if(Be===void 0||Be.count===0)return}else if(Ce.count===0)return;let De=1;V.wireframe===!0&&(Ce=ct.getWireframeAttribute(W),De=2),xe.setup(J,V,Ae,W,Ce);let Ie,Ye=he;Ce!==null&&(Ie=$e.get(Ce),Ye=Ee,Ye.setIndex(Ie));const oi=Ce!==null?Ce.count:Be.count,Ii=W.drawRange.start*De,Fi=W.drawRange.count*De,an=be!==null?be.start*De:0,Oe=be!==null?be.count*De:1/0,Oi=Math.max(Ii,an),Ze=Math.min(oi,Ii+Fi,an+Oe)-1,on=Math.max(0,Ze-Oi+1);if(on!==0){if(J.isMesh)V.wireframe===!0?($.setLineWidth(V.wireframeLinewidth*ve()),Ye.setMode(1)):Ye.setMode(4);else if(J.isLine){let On=V.linewidth;On===void 0&&(On=1),$.setLineWidth(On*ve()),J.isLineSegments?Ye.setMode(1):J.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else J.isPoints?Ye.setMode(0):J.isSprite&&Ye.setMode(4);if(J.isInstancedMesh)Ye.renderInstances(Oi,on,J.count);else if(W.isInstancedBufferGeometry){const On=Math.min(W.instanceCount,W._maxInstanceCount);Ye.renderInstances(Oi,on,On)}else Ye.render(Oi,on)}},this.compile=function(T,k){d=L.get(T),d.init(),g.push(d),T.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(W){const V=W.material;if(V)if(Array.isArray(V))for(let J=0;J<V.length;J++){const be=V[J];Sa(be,T,W)}else Sa(V,T,W)}),g.pop(),d=null};let re=null;function Se(T){re&&re(T)}function ze(){mt.stop()}function Ne(){mt.start()}const mt=new ju;mt.setAnimationLoop(Se),typeof self!="undefined"&&mt.setContext(self),this.setAnimationLoop=function(T){re=T,fe.setAnimationLoop(T),T===null?mt.stop():mt.start()},fe.addEventListener("sessionstart",ze),fe.addEventListener("sessionend",Ne),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(k),k=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,k,E),d=L.get(T,g.length),d.init(),g.push(d),j.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I.setFromProjectionMatrix(j),R=this.localClippingEnabled,N=S.init(this.clippingPlanes,R,k),h=yn.get(T,m.length),h.init(),m.push(h),sn(T,k,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(K,Y),N===!0&&S.beginShadows();const W=d.state.shadowsArray;if(q.render(W,T,k),N===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,T),d.setupLights(f.physicallyCorrectLights),k.isArrayCamera){const V=k.cameras;for(let J=0,be=V.length;J<be;J++){const Te=V[J];Pl(h,T,Te,Te.viewport)}}else Pl(h,T,k);E!==null&&(_e.updateMultisampleRenderTarget(E),_e.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(f,T,k),xe.resetDefaultState(),w=-1,x=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function sn(T,k,W,V){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||I.intersectsSprite(T)){V&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Te=Qe.update(T),Ae=T.material;Ae.visible&&h.push(T,Te,Ae,W,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==me.render.frame&&(T.skeleton.update(),T.skeleton.frame=me.render.frame),!T.frustumCulled||I.intersectsObject(T))){V&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(j);const Te=Qe.update(T),Ae=T.material;if(Array.isArray(Ae)){const Ce=Te.groups;for(let Be=0,De=Ce.length;Be<De;Be++){const Ie=Ce[Be],Ye=Ae[Ie.materialIndex];Ye&&Ye.visible&&h.push(T,Te,Ye,W,ee.z,Ie)}}else Ae.visible&&h.push(T,Te,Ae,W,ee.z,null)}}const be=T.children;for(let Te=0,Ae=be.length;Te<Ae;Te++)sn(be[Te],k,W,V)}function Pl(T,k,W,V){const J=T.opaque,be=T.transmissive,Te=T.transparent;d.setupLightsView(W),be.length>0&&Af(J,k,W),V&&$.viewport(C.copy(V)),J.length>0&&ps(J,k,W),be.length>0&&ps(be,k,W),Te.length>0&&ps(Te,k,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Af(T,k,W){const V=ue.isWebGL2;B===null&&(B=new Ln(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?jr:Ai,minFilter:ua,samples:V&&r===!0?4:0})),f.getDrawingBufferSize(Q),V?B.setSize(Q.x,Q.y):B.setSize(Ys(Q.x),Ys(Q.y));const J=f.getRenderTarget();f.setRenderTarget(B),f.clear();const be=f.toneMapping;f.toneMapping=An,ps(T,k,W),f.toneMapping=be,_e.updateMultisampleRenderTarget(B),_e.updateRenderTargetMipmap(B),f.setRenderTarget(J)}function ps(T,k,W){const V=k.isScene===!0?k.overrideMaterial:null;for(let J=0,be=T.length;J<be;J++){const Te=T[J],Ae=Te.object,Ce=Te.geometry,Be=V===null?Te.material:V,De=Te.group;Ae.layers.test(W.layers)&&Lf(Ae,k,W,Ce,Be,De)}}function Lf(T,k,W,V,J,be){T.onBeforeRender(f,k,W,V,J,be),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(f,k,W,V,T,be),J.transparent===!0&&J.side===ur?(J.side=en,J.needsUpdate=!0,f.renderBufferDirect(W,k,V,J,T,be),J.side=Yr,J.needsUpdate=!0,f.renderBufferDirect(W,k,V,J,T,be),J.side=ur):f.renderBufferDirect(W,k,V,J,T,be),T.onAfterRender(f,k,W,V,J,be)}function Sa(T,k,W){k.isScene!==!0&&(k=ce);const V=ge.get(T),J=d.state.lights,be=d.state.shadowsArray,Te=J.state.version,Ae=Fe.getParameters(T,J.state,be,k,W),Ce=Fe.getProgramCacheKey(Ae);let Be=V.programs;V.environment=T.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(T.isMeshStandardMaterial?Ue:ke).get(T.envMap||V.environment),Be===void 0&&(T.addEventListener("dispose",ye),Be=new Map,V.programs=Be);let De=Be.get(Ce);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===Te)return Dl(T,Ae),De}else Ae.uniforms=Fe.getUniforms(T),T.onBuild(W,Ae,f),T.onBeforeCompile(Ae,f),De=Fe.acquireProgram(Ae,Ce),Be.set(Ce,De),V.uniforms=Ae.uniforms;const Ie=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=S.uniform),Dl(T,Ae),V.needsLights=Df(T),V.lightsStateVersion=Te,V.needsLights&&(Ie.ambientLightColor.value=J.state.ambient,Ie.lightProbe.value=J.state.probe,Ie.directionalLights.value=J.state.directional,Ie.directionalLightShadows.value=J.state.directionalShadow,Ie.spotLights.value=J.state.spot,Ie.spotLightShadows.value=J.state.spotShadow,Ie.rectAreaLights.value=J.state.rectArea,Ie.ltc_1.value=J.state.rectAreaLTC1,Ie.ltc_2.value=J.state.rectAreaLTC2,Ie.pointLights.value=J.state.point,Ie.pointLightShadows.value=J.state.pointShadow,Ie.hemisphereLights.value=J.state.hemi,Ie.directionalShadowMap.value=J.state.directionalShadowMap,Ie.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ie.spotShadowMap.value=J.state.spotShadowMap,Ie.spotShadowMatrix.value=J.state.spotShadowMatrix,Ie.pointShadowMap.value=J.state.pointShadowMap,Ie.pointShadowMatrix.value=J.state.pointShadowMatrix);const Ye=De.getUniforms(),oi=Gs.seqWithValue(Ye.seq,Ie);return V.currentProgram=De,V.uniformsList=oi,De}function Dl(T,k){const W=ge.get(T);W.outputEncoding=k.outputEncoding,W.instancing=k.instancing,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Rf(T,k,W,V,J){k.isScene!==!0&&(k=ce),_e.resetTextureUnits();const be=k.fog,Te=V.isMeshStandardMaterial?k.environment:null,Ae=E===null?f.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Li,Ce=(V.isMeshStandardMaterial?Ue:ke).get(V.envMap||Te),Be=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!V.normalMap&&!!W.attributes.tangent,Ie=!!W.morphAttributes.position,Ye=!!W.morphAttributes.normal,oi=!!W.morphAttributes.color,Ii=V.toneMapped?f.toneMapping:An,Fi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,an=Fi!==void 0?Fi.length:0,Oe=ge.get(V),Oi=d.state.lights;if(N===!0&&(R===!0||T!==x)){const ln=T===x&&V.id===w;S.setState(V,T,ln)}let Ze=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Oi.state.version||Oe.outputEncoding!==Ae||J.isInstancedMesh&&Oe.instancing===!1||!J.isInstancedMesh&&Oe.instancing===!0||J.isSkinnedMesh&&Oe.skinning===!1||!J.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ce||V.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==S.numPlanes||Oe.numIntersection!==S.numIntersection)||Oe.vertexAlphas!==Be||Oe.vertexTangents!==De||Oe.morphTargets!==Ie||Oe.morphNormals!==Ye||Oe.morphColors!==oi||Oe.toneMapping!==Ii||ue.isWebGL2===!0&&Oe.morphTargetsCount!==an)&&(Ze=!0):(Ze=!0,Oe.__version=V.version);let on=Oe.currentProgram;Ze===!0&&(on=Sa(V,k,J));let On=!1,Tr=!1,wa=!1;const gt=on.getUniforms(),Cr=Oe.uniforms;if($.useProgram(on.program)&&(On=!0,Tr=!0,wa=!0),V.id!==w&&(w=V.id,Tr=!0),On||x!==T){if(gt.setValue(A,"projectionMatrix",T.projectionMatrix),ue.logarithmicDepthBuffer&&gt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,Tr=!0,wa=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const ln=gt.map.cameraPosition;ln!==void 0&&ln.setValue(A,ee.setFromMatrixPosition(T.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&gt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||J.isSkinnedMesh)&&gt.setValue(A,"viewMatrix",T.matrixWorldInverse)}if(J.isSkinnedMesh){gt.setOptional(A,J,"bindMatrix"),gt.setOptional(A,J,"bindMatrixInverse");const ln=J.skeleton;ln&&(ue.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),gt.setValue(A,"boneTexture",ln.boneTexture,_e),gt.setValue(A,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ea=W.morphAttributes;return(Ea.position!==void 0||Ea.normal!==void 0||Ea.color!==void 0&&ue.isWebGL2===!0)&&se.update(J,W,V,on),(Tr||Oe.receiveShadow!==J.receiveShadow)&&(Oe.receiveShadow=J.receiveShadow,gt.setValue(A,"receiveShadow",J.receiveShadow)),Tr&&(gt.setValue(A,"toneMappingExposure",f.toneMappingExposure),Oe.needsLights&&Pf(Cr,wa),be&&V.fog===!0&&xn.refreshFogUniforms(Cr,be),xn.refreshMaterialUniforms(Cr,V,F,O,B),Gs.upload(A,Oe.uniformsList,Cr,_e)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gs.upload(A,Oe.uniformsList,Cr,_e),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&gt.setValue(A,"center",J.center),gt.setValue(A,"modelViewMatrix",J.modelViewMatrix),gt.setValue(A,"normalMatrix",J.normalMatrix),gt.setValue(A,"modelMatrix",J.matrixWorld),on}function Pf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Df(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,k,W){ge.get(T.texture).__webglTexture=k,ge.get(T.depthTexture).__webglTexture=W;const V=ge.get(T);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const W=ge.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){E=T,_=k,b=W;let V=!0;if(T){const Ce=ge.get(T);Ce.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(36160,null),V=!1):Ce.__webglFramebuffer===void 0?_e.setupRenderTarget(T):Ce.__hasExternalTextures&&_e.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture)}let J=null,be=!1,Te=!1;if(T){const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Te=!0);const Be=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(J=Be[k],be=!0):ue.isWebGL2&&T.samples>0&&_e.useMultisampledRTT(T)===!1?J=ge.get(T).__webglMultisampledFramebuffer:J=Be,C.copy(T.viewport),y.copy(T.scissor),v=T.scissorTest}else C.copy(D).multiplyScalar(F).floor(),y.copy(H).multiplyScalar(F).floor(),v=G;if($.bindFramebuffer(36160,J)&&ue.drawBuffers&&V&&$.drawBuffers(T,J),$.viewport(C),$.scissor(y),$.setScissorTest(v),be){const Ce=ge.get(T.texture);A.framebufferTexture2D(36160,36064,34069+k,Ce.__webglTexture,W)}else if(Te){const Ce=ge.get(T.texture),Be=k||0;A.framebufferTextureLayer(36160,36064,Ce.__webglTexture,W||0,Be)}w=-1},this.readRenderTargetPixels=function(T,k,W,V,J,be,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){$.bindFramebuffer(36160,Ae);try{const Ce=T.texture,Be=Ce.format,De=Ce.type;if(Be!==Qt&&X.convert(Be)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===jr&&(ie.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ie.has("EXT_color_buffer_float"));if(De!==Ai&&X.convert(De)!==A.getParameter(35738)&&!(De===Hn&&(ue.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-V&&W>=0&&W<=T.height-J&&A.readPixels(k,W,V,J,X.convert(Be),X.convert(De),be)}finally{const Ce=E!==null?ge.get(E).__webglFramebuffer:null;$.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,k,W=0){const V=Math.pow(2,-W),J=Math.floor(k.image.width*V),be=Math.floor(k.image.height*V);_e.setTexture2D(k,0),A.copyTexSubImage2D(3553,W,0,0,T.x,T.y,J,be),$.unbindTexture()},this.copyTextureToTexture=function(T,k,W,V=0){const J=k.image.width,be=k.image.height,Te=X.convert(W.format),Ae=X.convert(W.type);_e.setTexture2D(W,0),A.pixelStorei(37440,W.flipY),A.pixelStorei(37441,W.premultiplyAlpha),A.pixelStorei(3317,W.unpackAlignment),k.isDataTexture?A.texSubImage2D(3553,V,T.x,T.y,J,be,Te,Ae,k.image.data):k.isCompressedTexture?A.compressedTexSubImage2D(3553,V,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Te,k.mipmaps[0].data):A.texSubImage2D(3553,V,T.x,T.y,Te,Ae,k.image),V===0&&W.generateMipmaps&&A.generateMipmap(3553),$.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W,V,J=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Ce=X.convert(V.format),Be=X.convert(V.type);let De;if(V.isData3DTexture)_e.setTexture3D(V,0),De=32879;else if(V.isDataArrayTexture)_e.setTexture2DArray(V,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,V.flipY),A.pixelStorei(37441,V.premultiplyAlpha),A.pixelStorei(3317,V.unpackAlignment);const Ie=A.getParameter(3314),Ye=A.getParameter(32878),oi=A.getParameter(3316),Ii=A.getParameter(3315),Fi=A.getParameter(32877),an=W.isCompressedTexture?W.mipmaps[0]:W.image;A.pixelStorei(3314,an.width),A.pixelStorei(32878,an.height),A.pixelStorei(3316,T.min.x),A.pixelStorei(3315,T.min.y),A.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?A.texSubImage3D(De,J,k.x,k.y,k.z,be,Te,Ae,Ce,Be,an.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(De,J,k.x,k.y,k.z,be,Te,Ae,Ce,an.data)):A.texSubImage3D(De,J,k.x,k.y,k.z,be,Te,Ae,Ce,Be,an),A.pixelStorei(3314,Ie),A.pixelStorei(32878,Ye),A.pixelStorei(3316,oi),A.pixelStorei(3315,Ii),A.pixelStorei(32877,Fi),J===0&&V.generateMipmaps&&A.generateMipmap(De),$.unbindTexture()},this.initTexture=function(T){_e.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){_=0,b=0,E=null,$.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class O0 extends $o{}O0.prototype.isWebGL1Renderer=!0;class nh extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class z0 extends lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class N0 extends Ot{constructor(e=null,t=1,n=1,i,r,a,o,l,c=ht,u=ht,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Zo extends lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new Je,So=new Vu,Os=new ha,zs=new z;class B0 extends vt{constructor(e=new Yt,t=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;Hc.copy(i).invert(),So.copy(e.ray).applyMatrix4(Hc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=d,f=m;g<f;g++){const p=c.getX(g);zs.fromBufferAttribute(h,p),Wc(zs,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,f=m;g<f;g++)zs.fromBufferAttribute(h,g),Wc(zs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Wc(s,e,t,n,i,r,a){const o=So.distanceSqToPoint(s);if(o<t){const l=new z;So.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}new z;new z;new z;new z;new pn;class pa extends Yt{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new z,h=new z,d=new z;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const f=g/i*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(f),h.y=(e+t*Math.cos(p))*Math.sin(f),h.z=t*Math.sin(p),o.push(h.x,h.y,h.z),u.x=e*Math.cos(f),u.y=e*Math.sin(f),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const f=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,b=(i+1)*m+g;a.push(f,p,b),a.push(p,_,b)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}static fromJSON(e){return new pa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class k0 extends lt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class U0 extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ma extends lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G0 extends ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class V0 extends lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class H0 extends lt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class W0 extends lt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class X0 extends lt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=la,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class q0 extends lt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Y0 extends ih{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const j0={ShadowMaterial:k0,SpriteMaterial:z0,RawShaderMaterial:U0,ShaderMaterial:Xt,PointsMaterial:Zo,MeshPhysicalMaterial:G0,MeshStandardMaterial:ma,MeshPhongMaterial:V0,MeshToonMaterial:H0,MeshNormalMaterial:W0,MeshLambertMaterial:X0,MeshDepthMaterial:eh,MeshDistanceMaterial:th,MeshBasicMaterial:Wo,MeshMatcapMaterial:q0,LineDashedMaterial:Y0,LineBasicMaterial:ih,Material:lt};lt.fromType=function(s){return new j0[s]};const Xc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const $0=new rh;class sh{constructor(e){this.manager=e!==void 0?e:$0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Z0 extends sh{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Xc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=$r("img");function l(){u(),Xc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ah extends sh{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,a=new Z0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class oh extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const qc=new Je,Yc=new z,jc=new z;class lh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $c=new Je,Pr=new z,io=new z;class K0 extends lh{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Pr),io.copy(n.position),io.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(io),n.updateMatrixWorld(),i.makeTranslation(-Pr.x,-Pr.y,-Pr.z),$c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c)}}class J0 extends oh{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new K0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Q0 extends lh{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ga extends oh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DefaultUp),this.updateMatrix(),this.target=new vt,this.shadow=new Q0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ko{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return(typeof performance=="undefined"?Date:performance).now()}const ch="\\[\\]\\.:\\/",Jo="[^"+ch+"]",ev="[^"+ch.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Jo);/(WCOD+)?/.source.replace("WCOD",ev);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jo);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jo);const cn=new Uint32Array(512),un=new Uint32Array(512);for(let s=0;s<256;++s){const e=s-127;e<-27?(cn[s]=0,cn[s|256]=32768,un[s]=24,un[s|256]=24):e<-14?(cn[s]=1024>>-e-14,cn[s|256]=1024>>-e-14|32768,un[s]=-e-1,un[s|256]=-e-1):e<=15?(cn[s]=e+15<<10,cn[s|256]=e+15<<10|32768,un[s]=13,un[s|256]=13):e<128?(cn[s]=31744,cn[s|256]=64512,un[s]=24,un[s|256]=24):(cn[s]=31744,cn[s|256]=64512,un[s]=13,un[s|256]=13)}const uh=new Uint32Array(2048),us=new Uint32Array(64),tv=new Uint32Array(64);for(let s=1;s<1024;++s){let e=s<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,uh[s]=e|t}for(let s=1024;s<2048;++s)uh[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)us[s]=s<<23;us[31]=1199570944;us[32]=2147483648;for(let s=33;s<63;++s)us[s]=2147483648+(s-32<<23);us[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(tv[s]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);function nv(s){if(!!s&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=s,document.head.appendChild(e),s}}function nr(s,e){var t=s.__state.conversionName.toString(),n=Math.round(s.r),i=Math.round(s.g),r=Math.round(s.b),a=s.a,o=Math.round(s.h),l=s.s.toFixed(1),c=s.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=s.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+r+","+a+")";if(t==="HEX")return"0x"+s.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+r+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+r+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var Kc=Array.prototype.forEach,Dr=Array.prototype.slice,Z={BREAK:{},extend:function(e){return this.each(Dr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Dr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Dr.call(arguments);return function(){for(var t=Dr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(Kc&&e.forEach&&e.forEach===Kc)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,r=void 0;for(i=0,r=e.length;i<r;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var r=this,a=arguments;function o(){i=null,n||e.apply(r,a)}var l=n||!i;clearTimeout(i),i=setTimeout(o,t),l&&e.apply(r,a)}},toArray:function(e){return e.toArray?e.toArray():Dr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(s){function e(t){return s.apply(this,arguments)}return e.toString=function(){return s.toString()},e}(function(s){return isNaN(s)}),isArray:Array.isArray||function(s){return s.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},iv=[{litmus:Z.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:nr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:nr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:nr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:nr}}},{litmus:Z.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Z.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Z.isObject,conversions:{RGBA_OBJ:{read:function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)&&Z.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)&&Z.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Ir=void 0,Ns=void 0,js=function(){Ns=!1;var e=arguments.length>1?Z.toArray(arguments):arguments[0];return Z.each(iv,function(t){if(t.litmus(e))return Z.each(t.conversions,function(n,i){if(Ir=n.read(e),Ns===!1&&Ir!==!1)return Ns=Ir,Ir.conversionName=i,Ir.conversion=n,Z.BREAK}),Z.BREAK}),Ns},Jc=void 0,Zr={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),a=n*(1-t),o=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,a],[o,n,a],[a,n,l],[a,o,n],[l,a,n],[n,a,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),r=Math.max(e,t,n),a=r-i,o=void 0,l=void 0;if(r!==0)l=a/r;else return{h:NaN,s:0,v:0};return e===r?o=(t-n)/a:t===r?o=2+(n-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Jc=t*8)|e&~(255<<Jc)}},rv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},nn=function(s,e){if(!(s instanceof e))throw new TypeError("Cannot call a class as a function")},rn=function(){function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}}(),Jn=function s(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:s(r,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},ii=function(s,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):s.__proto__=e)},ri=function(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:s},tt=function(){function s(){if(nn(this,s),this.__state=js.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return rn(s,[{key:"toString",value:function(){return nr(this)}},{key:"toHexString",value:function(){return nr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),s}();function Qo(s,e,t){Object.defineProperty(s,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(tt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(tt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function el(s,e){Object.defineProperty(s,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(tt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(tt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}tt.recalculateRGB=function(s,e,t){if(s.__state.space==="HEX")s.__state[e]=Zr.component_from_hex(s.__state.hex,t);else if(s.__state.space==="HSV")Z.extend(s.__state,Zr.hsv_to_rgb(s.__state.h,s.__state.s,s.__state.v));else throw new Error("Corrupted color state")};tt.recalculateHSV=function(s){var e=Zr.rgb_to_hsv(s.r,s.g,s.b);Z.extend(s.__state,{s:e.s,v:e.v}),Z.isNaN(e.h)?Z.isUndefined(s.__state.h)&&(s.__state.h=0):s.__state.h=e.h};tt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Qo(tt.prototype,"r",2);Qo(tt.prototype,"g",1);Qo(tt.prototype,"b",0);el(tt.prototype,"h");el(tt.prototype,"s");el(tt.prototype,"v");Object.defineProperty(tt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(tt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Zr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var si=function(){function s(e,t){nn(this,s),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return rn(s,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),s}(),sv={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},hh={};Z.each(sv,function(s,e){Z.each(s,function(t){hh[t]=e})});var av=/(\d+(\.\d+)?)px/;function hn(s){if(s==="0"||Z.isUndefined(s))return 0;var e=s.match(av);return Z.isNull(e)?0:parseFloat(e[1])}var U={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,r=t;Z.isUndefined(r)&&(r=!0),Z.isUndefined(i)&&(i=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var r=n||{},a=hh[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;o.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;Z.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}Z.defaults(o,i),e.dispatchEvent(o)},bind:function(e,t,n,i){var r=i||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),U},unbind:function(e,t,n,i){var r=i||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),U},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return U},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return U},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return hn(t["border-left-width"])+hn(t["border-right-width"])+hn(t["padding-left"])+hn(t["padding-right"])+hn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return hn(t["border-top-width"])+hn(t["border-bottom-width"])+hn(t["padding-top"])+hn(t["padding-bottom"])+hn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},tl=function(s){ii(e,s);function e(t,n){nn(this,e);var i=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){r.setValue(!r.__prev)}return U.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return rn(e,[{key:"setValue",value:function(n){var i=Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(si),fh=function(s){ii(e,s);function e(t,n,i){nn(this,e);var r=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,o=r;if(r.__select=document.createElement("select"),Z.isArray(a)){var l={};Z.each(a,function(c){l[c]=c}),a=l}return Z.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),r.updateDisplay(),U.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),r.domElement.appendChild(r.__select),r}return rn(e,[{key:"setValue",value:function(n){var i=Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return U.isActive(this.__select)?this:(this.__select.value=this.getValue(),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(si),dh=function(s){ii(e,s);function e(t,n){nn(this,e);var i=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=i;function a(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),U.bind(i.__input,"keyup",a),U.bind(i.__input,"change",a),U.bind(i.__input,"blur",o),U.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return rn(e,[{key:"updateDisplay",value:function(){return U.isActive(this.__input)||(this.__input.value=this.getValue()),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(si);function Qc(s){var e=s.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var nl=function(s){ii(e,s);function e(t,n,i){nn(this,e);var r=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return r.__min=a.min,r.__max=a.max,r.__step=a.step,Z.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Qc(r.__impliedStep),r}return rn(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Qc(n),this}}]),e}(si);function ov(s,e){var t=Math.pow(10,e);return Math.round(s*t)/t}var Kr=function(s){ii(e,s);function e(t,n,i){nn(this,e);var r=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));r.__truncationSuspended=!1;var a=r,o=void 0;function l(){var g=parseFloat(a.__input.value);Z.isNaN(g)||a.setValue(g)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(g){var f=o-g.clientY;a.setValue(a.getValue()+f*a.__impliedStep),o=g.clientY}function d(){U.unbind(window,"mousemove",h),U.unbind(window,"mouseup",d),c()}function m(g){U.bind(window,"mousemove",h),U.bind(window,"mouseup",d),o=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),U.bind(r.__input,"change",l),U.bind(r.__input,"blur",u),U.bind(r.__input,"mousedown",m),U.bind(r.__input,"keydown",function(g){g.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return rn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():ov(this.getValue(),this.__precision),Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nl);function eu(s,e,t,n,i){return n+(i-n)*((s-e)/(t-e))}var $s=function(s){ii(e,s);function e(t,n,i,r,a){nn(this,e);var o=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:r,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),U.bind(o.__background,"mousedown",c),U.bind(o.__background,"touchstart",d),U.addClass(o.__background,"slider"),U.addClass(o.__foreground,"slider-fg");function c(f){document.activeElement.blur(),U.bind(window,"mousemove",u),U.bind(window,"mouseup",h),u(f)}function u(f){f.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(eu(f.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){U.unbind(window,"mousemove",u),U.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(f){f.touches.length===1&&(U.bind(window,"touchmove",m),U.bind(window,"touchend",g),m(f))}function m(f){var p=f.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(eu(p,_.left,_.right,l.__min,l.__max))}function g(){U.unbind(window,"touchmove",m),U.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return rn(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Jn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(nl),il=function(s){ii(e,s);function e(t,n,i){nn(this,e);var r=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=r;return r.__button=document.createElement("div"),r.__button.innerHTML=i===void 0?"Fire":i,U.bind(r.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),U.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return rn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(si),Zs=function(s){ii(e,s);function e(t,n){nn(this,e);var i=ri(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new tt(i.getValue()),i.__temp=new tt(0);var r=i;i.domElement=document.createElement("div"),U.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",U.bind(i.__input,"keydown",function(f){f.keyCode===13&&h.call(this)}),U.bind(i.__input,"blur",h),U.bind(i.__selector,"mousedown",function(){U.addClass(this,"drag").bind(window,"mouseup",function(){U.removeClass(r.__selector,"drag")})}),U.bind(i.__selector,"touchstart",function(){U.addClass(this,"drag").bind(window,"touchend",function(){U.removeClass(r.__selector,"drag")})});var a=document.createElement("div");Z.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Z.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Z.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Z.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Z.extend(a.style,{width:"100%",height:"100%",background:"none"}),tu(a,"top","rgba(0,0,0,0)","#000"),Z.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),cv(i.__hue_field),Z.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),U.bind(i.__saturation_field,"mousedown",o),U.bind(i.__saturation_field,"touchstart",o),U.bind(i.__field_knob,"mousedown",o),U.bind(i.__field_knob,"touchstart",o),U.bind(i.__hue_field,"mousedown",l),U.bind(i.__hue_field,"touchstart",l);function o(f){m(f),U.bind(window,"mousemove",m),U.bind(window,"touchmove",m),U.bind(window,"mouseup",c),U.bind(window,"touchend",c)}function l(f){g(f),U.bind(window,"mousemove",g),U.bind(window,"touchmove",g),U.bind(window,"mouseup",u),U.bind(window,"touchend",u)}function c(){U.unbind(window,"mousemove",m),U.unbind(window,"touchmove",m),U.unbind(window,"mouseup",c),U.unbind(window,"touchend",c),d()}function u(){U.unbind(window,"mousemove",g),U.unbind(window,"touchmove",g),U.unbind(window,"mouseup",u),U.unbind(window,"touchend",u),d()}function h(){var f=js(this.value);f!==!1?(r.__color.__state=f,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=r.__saturation_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,b=_.clientX,E=_.clientY,w=(b-p.left)/(p.right-p.left),x=1-(E-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),w>1?w=1:w<0&&(w=0),r.__color.v=x,r.__color.s=w,r.setValue(r.__color.toOriginal()),!1}function g(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=r.__hue_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,b=_.clientY,E=1-(b-p.top)/(p.bottom-p.top);return E>1?E=1:E<0&&(E=0),r.__color.h=E*360,r.setValue(r.__color.toOriginal()),!1}return i}return rn(e,[{key:"updateDisplay",value:function(){var n=js(this.getValue());if(n!==!1){var i=!1;Z.each(tt.COMPONENTS,function(o){if(!Z.isUndefined(n[o])&&!Z.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&Z.extend(this.__color.__state,n)}Z.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,a=255-r;Z.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,tu(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Z.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(si),lv=["-moz-","-o-","-webkit-","-ms-",""];function tu(s,e,t,n){s.style.background="",Z.each(lv,function(i){s.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function cv(s){s.style.background="",s.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",s.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",s.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var uv={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(i)}catch{}}},hv=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,fv=function(e,t){var n=e[t];return Z.isArray(arguments[2])||Z.isObject(arguments[2])?new fh(e,t,arguments[2]):Z.isNumber(n)?Z.isNumber(arguments[2])&&Z.isNumber(arguments[3])?Z.isNumber(arguments[4])?new $s(e,t,arguments[2],arguments[3],arguments[4]):new $s(e,t,arguments[2],arguments[3]):Z.isNumber(arguments[4])?new Kr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Kr(e,t,{min:arguments[2],max:arguments[3]}):Z.isString(n)?new dh(e,t):Z.isFunction(n)?new il(e,t,""):Z.isBoolean(n)?new tl(e,t):null};function dv(s){setTimeout(s,1e3/60)}var pv=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||dv,mv=function(){function s(){nn(this,s),this.backgroundElement=document.createElement("div"),Z.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),U.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Z.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;U.bind(this.backgroundElement,"click",function(){e.hide()})}return rn(s,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Z.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",U.unbind(t.domElement,"webkitTransitionEnd",i),U.unbind(t.domElement,"transitionend",i),U.unbind(t.domElement,"oTransitionEnd",i)};U.bind(this.domElement,"webkitTransitionEnd",n),U.bind(this.domElement,"transitionend",n),U.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-U.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-U.getHeight(this.domElement)/2+"px"}}]),s}(),gv=nv(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);uv.inject(gv);var nu="dg",iu=72,ru=20,Jr="Default",Nr=function(){try{return!!window.localStorage}catch{return!1}}(),Vr=void 0,su=!0,Ji=void 0,ro=!1,ph=[],He=function s(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),U.addClass(this.domElement,nu),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Z.defaults(n,{closeOnTop:!1,autoPlace:!0,width:s.DEFAULT_WIDTH}),n=Z.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Z.isUndefined(n.load)?n.load={preset:Jr}:n.preset&&(n.load.preset=n.preset),Z.isUndefined(n.parent)&&n.hideable&&ph.push(this),n.resizable=Z.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Z.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Nr&&localStorage.getItem(Qi(this,"isLocal"))==="true",r=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,yv(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,To(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?U.addClass(t.__ul,s.CLASS_CLOSED):U.removeClass(t.__ul,s.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?s.TEXT_OPEN:s.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){Nr&&(i=d,d?U.bind(window,"unload",r):U.unbind(window,"unload",r),localStorage.setItem(Qi(t,"isLocal"),d))}}}),Z.isUndefined(n.parent)){if(this.closed=n.closed||!1,U.addClass(this.domElement,s.CLASS_MAIN),U.makeSelectable(this.domElement,!1),Nr&&i){t.useLocalStorage=!0;var o=localStorage.getItem(Qi(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=s.TEXT_CLOSED,U.addClass(this.__closeButton,s.CLASS_CLOSE_BUTTON),n.closeOnTop?(U.addClass(this.__closeButton,s.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(U.addClass(this.__closeButton,s.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),U.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);U.addClass(l,"controller-name"),a=rl(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};U.addClass(this.__ul,s.CLASS_CLOSED),U.addClass(a,"title"),U.bind(a,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Z.isUndefined(n.parent)&&(su&&(Ji=document.createElement("div"),U.addClass(Ji,nu),U.addClass(Ji,s.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ji),su=!1),Ji.appendChild(this.domElement),U.addClass(this.domElement,s.CLASS_AUTO_PLACE)),this.parent||To(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},U.bind(window,"resize",this.__resizeHandler),U.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),U.bind(this.__ul,"transitionend",this.__resizeHandler),U.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&xv(this),r=function(){Nr&&localStorage.getItem(Qi(t,"isLocal"))==="true"&&localStorage.setItem(Qi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,Z.defer(function(){h.width-=1})}n.parent||u()};He.toggleHide=function(){ro=!ro,Z.each(ph,function(s){s.domElement.style.display=ro?"none":""})};He.CLASS_AUTO_PLACE="a";He.CLASS_AUTO_PLACE_CONTAINER="ac";He.CLASS_MAIN="main";He.CLASS_CONTROLLER_ROW="cr";He.CLASS_TOO_TALL="taller-than-window";He.CLASS_CLOSED="closed";He.CLASS_CLOSE_BUTTON="close-button";He.CLASS_CLOSE_TOP="close-top";He.CLASS_CLOSE_BOTTOM="close-bottom";He.CLASS_DRAG="drag";He.DEFAULT_WIDTH=245;He.TEXT_CLOSED="Close Controls";He.TEXT_OPEN="Open Controls";He._keydownHandler=function(s){document.activeElement.type!=="text"&&(s.which===iu||s.keyCode===iu)&&He.toggleHide()};U.bind(window,"keydown",He._keydownHandler,!1);Z.extend(He.prototype,{add:function(e,t){return Hr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Hr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Z.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ji.removeChild(this.domElement);var e=this;Z.each(this.__folders,function(t){e.removeFolder(t)}),U.unbind(window,"keydown",He._keydownHandler,!1),au(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new He(t);this.__folders[e]=n;var i=rl(this,n.domElement);return U.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],au(e);var t=this;Z.each(e.__folders,function(n){e.removeFolder(n)}),Z.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=U.getOffset(e.__ul).top,n=0;Z.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=U.getHeight(i))}),window.innerHeight-t-ru<n?(U.addClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ru+"px"):(U.removeClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Z.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Z.debounce(function(){this.onResize()},50),remember:function(){if(Z.isUndefined(Vr)&&(Vr=new mv,Vr.domElement.innerHTML=hv),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Z.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&vv(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&To(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Bs(this)),e.folders={},Z.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Bs(this),wo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Jr]=Bs(this,!0)),this.load.remembered[e]=Bs(this),this.preset=e,Eo(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Z.each(this.__controllers,function(t){this.getRoot().load.remembered?mh(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Z.each(this.__folders,function(t){t.revert(t)}),e||wo(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&gh(this.__listening)},updateDisplay:function(){Z.each(this.__controllers,function(e){e.updateDisplay()}),Z.each(this.__folders,function(e){e.updateDisplay()})}});function rl(s,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?s.__ul.insertBefore(n,t):s.__ul.appendChild(n),s.onResize(),n}function au(s){U.unbind(window,"resize",s.__resizeHandler),s.saveToLocalStorageIfPossible&&U.unbind(window,"unload",s.saveToLocalStorageIfPossible)}function wo(s,e){var t=s.__preset_select[s.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function _v(s,e,t){if(t.__li=e,t.__gui=s,Z.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),Hr(s,t.object,t.property,{before:o,factoryArgs:[Z.toArray(arguments)]})}if(Z.isArray(a)||Z.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),Hr(s,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof $s){var n=new Kr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Z.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var a=t[r],o=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),a.apply(t,l)}}),U.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Kr){var i=function(a){if(Z.isNumber(t.__min)&&Z.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Hr(s,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=Z.compose(i,t.min),t.max=Z.compose(i,t.max)}else t instanceof tl?(U.bind(e,"click",function(){U.fakeEvent(t.__checkbox,"click")}),U.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof il?(U.bind(e,"click",function(){U.fakeEvent(t.__button,"click")}),U.bind(e,"mouseover",function(){U.addClass(t.__button,"hover")}),U.bind(e,"mouseout",function(){U.removeClass(t.__button,"hover")})):t instanceof Zs&&(U.addClass(e,"color"),t.updateDisplay=Z.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=Z.compose(function(r){return s.getRoot().__preset_select&&t.isModified()&&wo(s.getRoot(),!0),r},t.setValue)}function mh(s,e){var t=s.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,a=void 0;if(r[s.preset])a=r[s.preset];else if(r[Jr])a=r[Jr];else return;if(a[n]&&a[n][e.property]!==void 0){var o=a[n][e.property];e.initialValue=o,e.setValue(o)}}}}function Hr(s,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Zs(e,t);else{var r=[e,t].concat(n.factoryArgs);i=fv.apply(s,r)}n.before instanceof si&&(n.before=n.before.__li),mh(s,i),U.addClass(i.domElement,"c");var a=document.createElement("span");U.addClass(a,"property-name"),a.innerHTML=i.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(i.domElement);var l=rl(s,o,n.before);return U.addClass(l,He.CLASS_CONTROLLER_ROW),i instanceof Zs?U.addClass(l,"color"):U.addClass(l,rv(i.getValue())),_v(s,l,i),s.__controllers.push(i),i}function Qi(s,e){return document.location.href+"."+e}function Eo(s,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,s.__preset_select.appendChild(n),t&&(s.__preset_select.selectedIndex=s.__preset_select.length-1)}function ou(s,e){e.style.display=s.useLocalStorage?"block":"none"}function vv(s){var e=s.__save_row=document.createElement("li");U.addClass(s.domElement,"has-save"),s.__ul.insertBefore(e,s.__ul.firstChild),U.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",U.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",U.addClass(n,"button"),U.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",U.addClass(i,"button"),U.addClass(i,"save-as");var r=document.createElement("span");r.innerHTML="Revert",U.addClass(r,"button"),U.addClass(r,"revert");var a=s.__preset_select=document.createElement("select");if(s.load&&s.load.remembered?Z.each(s.load.remembered,function(h,d){Eo(s,d,d===s.preset)}):Eo(s,Jr,!1),U.bind(a,"change",function(){for(var h=0;h<s.__preset_select.length;h++)s.__preset_select[h].innerHTML=s.__preset_select[h].value;s.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(r),Nr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Qi(s,"isLocal"))==="true"&&l.setAttribute("checked","checked"),ou(s,o),U.bind(l,"change",function(){s.useLocalStorage=!s.useLocalStorage,ou(s,o)})}var u=document.getElementById("dg-new-constructor");U.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Vr.hide()}),U.bind(t,"click",function(){u.innerHTML=JSON.stringify(s.getSaveObject(),void 0,2),Vr.show(),u.focus(),u.select()}),U.bind(n,"click",function(){s.save()}),U.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&s.saveAs(h)}),U.bind(r,"click",function(){s.revert()})}function xv(s){var e=void 0;s.__resize_handle=document.createElement("div"),Z.extend(s.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),s.width+=e-r.clientX,s.onResize(),e=r.clientX,!1}function n(){U.removeClass(s.__closeButton,He.CLASS_DRAG),U.unbind(window,"mousemove",t),U.unbind(window,"mouseup",n)}function i(r){return r.preventDefault(),e=r.clientX,U.addClass(s.__closeButton,He.CLASS_DRAG),U.bind(window,"mousemove",t),U.bind(window,"mouseup",n),!1}U.bind(s.__resize_handle,"mousedown",i),U.bind(s.__closeButton,"mousedown",i),s.domElement.insertBefore(s.__resize_handle,s.domElement.firstElementChild)}function To(s,e){s.domElement.style.width=e+"px",s.__save_row&&s.autoPlace&&(s.__save_row.style.width=e+"px"),s.__closeButton&&(s.__closeButton.style.width=e+"px")}function Bs(s,e){var t={};return Z.each(s.__rememberedObjects,function(n,i){var r={},a=s.__rememberedObjectIndecesToControllers[i];Z.each(a,function(o,l){r[l]=e?o.initialValue:o.getValue()}),t[i]=r}),t}function yv(s){for(var e=0;e<s.__preset_select.length;e++)s.__preset_select[e].value===s.preset&&(s.__preset_select.selectedIndex=e)}function gh(s){s.length!==0&&pv.call(window,function(){gh(s)}),Z.each(s,function(e){e.updateDisplay()})}var bv={Color:tt,math:Zr,interpret:js},Mv={Controller:si,BooleanController:tl,OptionController:fh,StringController:dh,NumberController:nl,NumberControllerBox:Kr,NumberControllerSlider:$s,FunctionController:il,ColorController:Zs},Sv={dom:U},wv={GUI:He},Ev=He,Tv={color:bv,controllers:Mv,dom:Sv,gui:wv,GUI:Ev},_h="/ChetanK-Portfolio/assets/rock.7f45bb96.png",Cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAq1BMVEUAAAAGBgYLCwsQEBAYGBggICAcHBwUFBQnJyckJCQxMTHh4eHa2to+Pj7q6urKysqqqqouLi7n5+fk5ORiYmLt7e3X19fR0dG9vb25ubmenp6MjIx/f39HR0c6OjpdXV3v7+97e3tPT08rKys2NjbOzs7Dw8O0tLSWlpaSkpJ3d3d1dXVvb29sbGxbW1tXV1dUVFRMTExERERBQUGgoKA1NTXx8fHc3NyhoaGopjlnAAAB/ElEQVRIx+3WyZKbMBAG4CQTh1UGgcy+BIz3fZuZ93+ytBuqL4JiHF3nP/nyVbeMpNaP77yen5T/UJRX2C/KVympNwzZLzBCmkZ4jLYMjfYbAz+IjrgnA/GnyxMjlaTkNFSTLmi1To44VIahQwwDrSRlB+WAAeLchHAOGCgUHZTkgM3NpmC36/XGioc5B0pywL21jjcsr0/Hsjye6pw1vJVtt30Q1ofOLPKzOOyqLKt2B3HOCxOlBhKhXLBz7FLus3Sd3O/JOs325YV1EktKEBudTMDVYpsm7iqOonjlJulW1CixWYD9BXVeXES1ceOlswjDhbOM3U0lLgXXqaRcEJwxb/Jyu3EjJwxsSBA6kbvZlnkzh2axpAyxoMnO+xRcYFsYOwCZ7s+sLSlB6vSRiyyJneDD8n3P833rI3DiJBP5g3rtWSJ0WtSH1F2GtuV7U4jnW3a4dNNDXUCvtEh5iZydduuVEzzdDPKUgbNa706M0yJ7oG7ejlUSL6DgdPYXMptCyUWcVMebqQ9ADeG1zO4RdOoBfH8H6EGv0T0rrwg1ZTjeqie1qvDnKHyOsQ3g9WwAhS2nssnVjxUdZGPwIFPB8avj87Pv6lC4rEavRyGGr0f1C1keASZGGgEKQ0dpzKkPVnmUA8BIo1zh8aD0XFF/IKk/yciS+s7L+QfFrE8fdgvs9QAAAABJRU5ErkJggg==";function Cn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function vh(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ft={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mr={duration:.5,overwrite:!1,delay:0},sl,Gt=1e8,Ve=1/Gt,Co=Math.PI*2,Av=Co/4,Lv=0,xh=Math.sqrt,Rv=Math.cos,Pv=Math.sin,st=function(e){return typeof e=="string"},rt=function(e){return typeof e=="function"},Dn=function(e){return typeof e=="number"},al=function(e){return typeof e=="undefined"},In=function(e){return typeof e=="object"},Ct=function(e){return e!==!1},yh=function(){return typeof window!="undefined"},ks=function(e){return rt(e)||st(e)},bh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pt=Array.isArray,Ao=/(?:-?\.?\d|\.)+/gi,Mh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ir=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,so=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sh=/[+-]=-?[.\d]+/,wh=/[^,'"\[\]\s]+/gi,Dv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,fn,Lo,ol,zt={},Ks={},Eh,Th=function(e){return(Ks=Ri(e,zt))&&tn},ll=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Js=function(e,t){return!t&&console.warn(e)},Ch=function(e,t){return e&&(zt[e]=t)&&Ks&&(Ks[e]=t)||zt},Qr=function(){return 0},cl={},Zn=[],Ro={},Ah,Dt={},ao={},lu=30,Vs=[],ul="",hl=function(e){var t=e[0],n,i;if(In(t)||rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vs.length;i--&&!Vs[i].targetTest(t););n=Vs[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zh(e[i],n)))||e.splice(i,1);return e},Ei=function(e){return e._gsap||hl(Vt(e))[0]._gsap},Lh=function(e,t,n){return(n=e[t])&&rt(n)?e[t]():al(n)&&e.getAttribute&&e.getAttribute(t)||n},At=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},or=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Iv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Qs=function(){var e=Zn.length,t=Zn.slice(0),n,i;for(Ro={},Zn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rh=function(e,t,n,i){Zn.length&&Qs(),e.render(t,n,i),Zn.length&&Qs()},Ph=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wh).length<2?t:st(e)?e.trim():e},Dh=function(e){return e},qt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ri=function(e,t){for(var n in t)e[n]=t[n];return e},cu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=In(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ea=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Wr=function(e){var t=e.parent||Xe,n=e.keyframes?Fv(pt(e.keyframes)):qt;if(Ct(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ov=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ih=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},_a=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Rn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ti=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nv=function s(e){return!e||e._ts&&s(e.parent)},uu=function(e){return e._repeat?gr(e._tTime,e=e.duration()+e._rDelay)*e:0},gr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ta=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},va=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ve)||0))},fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),va(e),n._dirty||Ti(n,e)),e},Fh=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ta(e.rawTime(),t),(!t._dur||hs(0,t.totalDuration(),n)-t._tTime>Ve)&&t.render(n,!0)),Ti(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ve}},mn=function(e,t,n,i){return t.parent&&Rn(t),t._start=ft((Dn(n)?n:n||e!==Xe?kt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ih(e,t,"_first","_last",e._sort?"_start":0),Po(t)||(e._recent=t),i||Fh(e,t),e},Oh=function(e,t){return(zt.ScrollTrigger||ll("scrollTrigger",t))&&zt.ScrollTrigger.create(t,e)},zh=function(e,t,n,i){if(pl(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ah!==It.frame)return Zn.push(e),e._lazy=[t,i],1},Bv=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Po=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kv=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Bv(e)&&!(!e._initted&&Po(e))||(e._ts<0||e._dp._ts<0)&&!Po(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=hs(0,e._tDur,t),u=gr(l,o),e._yoyo&&u&1&&(a=1-a),u!==gr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||i||e._zTime===Ve||!t&&e._zTime){if(!e._initted&&zh(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ve:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Ht(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Ht(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Rn(e,1),n||(Ht(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Uv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},_r=function(e,t,n,i){var r=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ft(a*(r+1)+e._rDelay*r):a,o>0&&!i?fl(e,e._tTime=e._tDur*o):e.parent&&va(e),n||Ti(e.parent,e),e},hu=function(e){return e instanceof wt?Ti(e):_r(e,e._dur)},Gv={_start:0,endTime:Qr,totalDuration:Qr},kt=function s(e,t,n){var i=e.labels,r=e._recent||Gv,a=e.duration()>=Gt?r.endTime(!1):e._dur,o,l,c;return st(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(pt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Xr=function(e,t,n){var i=Dn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ct(l.vars.inherit)&&l.parent;a.immediateRender=Ct(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new it(t[0],a,t[r+1])},ai=function(e,t){return e||e===0?t(e):t},hs=function(e,t,n){return n<e?e:n>t?t:n},dt=function(e,t){return!st(e)||!(t=Dv.exec(e))?"":t[1]},Vv=function(e,t,n){return ai(n,function(i){return hs(e,t,i)})},Do=[].slice,Nh=function(e,t){return e&&In(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&In(e[0]))&&!e.nodeType&&e!==fn},Hv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return st(i)&&!t||Nh(i,1)?(r=n).push.apply(r,Vt(i)):n.push(i)})||n},Vt=function(e,t,n){return st(e)&&!n&&(Lo||!vr())?Do.call((t||ol).querySelectorAll(e),0):pt(e)?Hv(e,n):Nh(e)?Do.call(e,0):e?[e]:[]},Wv=function(e){return e=Vt(e)[0]||Js("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vt(t,n.querySelectorAll?n:n===e?Js("Invalid scope")||ol.createElement("div"):e)}},Bh=function(e){return e.sort(function(){return .5-Math.random()})},kh=function(e){if(rt(e))return e;var t=In(e)?e:{each:e},n=Ci(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return st(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,m,g){var f=(g||t).length,p=a[f],_,b,E,w,x,C,y,v,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Gt])[1],!M){for(y=-Gt;y<(y=g[M++].getBoundingClientRect().left)&&M<f;);M--}for(p=a[f]=[],_=l?Math.min(M,f)*u-.5:i%M,b=M===Gt?0:l?f*h/M-.5:i/M|0,y=0,v=Gt,C=0;C<f;C++)E=C%M-_,w=b-(C/M|0),p[C]=x=c?Math.abs(c==="y"?w:E):xh(E*E+w*w),x>y&&(y=x),x<v&&(v=x);i==="random"&&Bh(p),p.max=y-v,p.min=v,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(M>f?f-1:c?c==="y"?f/M:M:Math.max(M,f/M))||0)*(i==="edges"?-1:1),p.b=f<0?r-f:r,p.u=dt(t.amount||t.each)||0,n=n&&f<0?Yh(n):n}return f=(p[d]-p.min)/p.max||0,ft(p.b+(n?n(f):f)*p.v)+p.u}},Io=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Dn(n)?0:dt(n))}},Uh=function(e,t){var n=pt(e),i,r;return!n&&In(e)&&(i=n=e.radius||Gt,e.values?(e=Vt(e.values),(r=!Dn(e[0]))&&(i*=i)):e=Io(e.increment)),ai(t,n?rt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Gt,u=0,h=e.length,d,m;h--;)r?(d=e[h].x-o,m=e[h].y-l,d=d*d+m*m):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Dn(a)?u:u+dt(a)}:Io(e))},Gh=function(e,t,n,i){return ai(pt(e)?!t:n===!0?!!(n=0):!i,function(){return pt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Xv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},qv=function(e,t){return function(n){return e(parseFloat(n))+(t||dt(n))}},Yv=function(e,t,n){return Hh(e,t,0,1,n)},Vh=function(e,t,n){return ai(n,function(i){return e[~~t(i)]})},jv=function s(e,t,n){var i=t-e;return pt(e)?Vh(e,s(0,e.length),t):ai(n,function(r){return(i+(r-e)%i)%i+e})},$v=function s(e,t,n){var i=t-e,r=i*2;return pt(e)?Vh(e,s(0,e.length-1),t):ai(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},es=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?wh:Ao),n+=e.substr(t,i-t)+Gh(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Hh=function(e,t,n,i,r){var a=t-e,o=i-n;return ai(r,function(l){return n+((l-e)/a*o||0)})},Zv=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=st(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(pt(e)&&!pt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=t}else i||(e=Ri(pt(e)?[]:{},e));if(!u){for(l in t)dl.call(o,e,l,"get",t[l]);r=function(g){return _l(g,o)||(a?e.p:e)}}}return ai(n,r)},fu=function(e,t,n){var i=e.labels,r=Gt,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},Ht=function(e,t,n){var i=e.vars,r=i[t],a,o;if(!!r)return a=i[t+"Params"],o=i.callbackScope||e,n&&Zn.length&&Qs(),a?r.apply(o,a):r.call(o)},Br=function(e){return Rn(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Ht(e,"onInterrupt"),e},rr,Kv=function(e){e=!e.name&&e.default||e;var t=e.name,n=rt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Qr,render:_l,add:dl,kill:dx,modifier:fx,rawVars:0},a={targetTest:0,get:0,getSetter:gl,aliases:{},register:0};if(vr(),e!==i){if(Dt[t])return;qt(i,qt(ea(e,r),a)),Ri(i.prototype,Ri(r,ea(e,a))),Dt[i.prop=t]=i,e.targetTest&&(Vs.push(i),cl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ch(t,i),e.register&&e.register(tn,i,Lt)},Ge=255,kr={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},oo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ge+.5|0},Wh=function(e,t,n){var i=e?Dn(e)?[e>>16,e>>8&Ge,e&Ge]:0:kr.black,r,a,o,l,c,u,h,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),kr[e])i=kr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ge,i&Ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ge,e&Ge]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ao),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=oo(l+1/3,r,a),i[1]=oo(l,r,a),i[2]=oo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Mh),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ao)||kr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ge,a=i[1]/Ge,o=i[2]/Ge,h=Math.max(r,a,o),d=Math.min(r,a,o),u=(h+d)/2,h===d?l=c=0:(m=h-d,c=u>.5?m/(2-h-d):m/(h+d),l=h===r?(a-o)/m+(a<o?6:0):h===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Xh=function(e){var t=[],n=[],i=-1;return e.split(Kn).forEach(function(r){var a=r.match(ir)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},du=function(e,t,n){var i="",r=(e+i).match(Kn),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=Wh(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Xh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Kn,"1").split(ir),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Kn),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},Kn=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in kr)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Jv=/hsl[a]?\(/,qh=function(e){var t=e.join(" "),n;if(Kn.lastIndex=0,Kn.test(t))return n=Jv.test(t),e[1]=du(e[1],n),e[0]=du(e[0],n,Xh(e[1])),!0},ts,It=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,d,m,g=function f(p){var _=s()-i,b=p===!0,E,w,x,C;if(_>e&&(n+=_-t),i+=_,x=i-n,E=x-a,(E>0||b)&&(C=++h.frame,d=x-h.time*1e3,h.time=x=x/1e3,a+=E+(E>=r?4:r-E),w=1),b||(l=c(f)),w)for(m=0;m<o.length;m++)o[m](x,d,C,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Eh&&(!Lo&&yh()&&(fn=Lo=window,ol=fn.document||{},zt.gsap=tn,(fn.gsapVersions||(fn.gsapVersions=[])).push(tn.version),Th(Ks||fn.GreenSockGlobals||!fn.gsap&&fn||{}),u=fn.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ts=1,g(2))},sleep:function(){(u?fn.cancelAnimationFrame:clearTimeout)(l),ts=0,c=Qr},lagSmoothing:function(p,_){e=p||1/Ve,t=Math.min(_,e,0)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,b){var E=_?function(w,x,C,y){p(w,x,C,y),h.remove(E)}:p;return h.remove(p),o[b?"unshift":"push"](E),vr(),E},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},h}(),vr=function(){return!ts&&It.wake()},Pe={},Qv=/^[\d.\-M][\d.\-,\s]/,ex=/["']/g,tx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(ex,"").trim():+c,i=l.substr(o+1).trim();return t},nx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ix=function(e){var t=(e+"").split("("),n=Pe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[tx(t[1])]:nx(e).split(",").map(Ph)):Pe._CE&&Qv.test(e)?Pe._CE("",e):n},Yh=function(e){return function(t){return 1-e(1-t)}},jh=function s(e,t){for(var n=e._first,i;n;)n instanceof wt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ci=function(e,t){return e&&(rt(e)?e:Pe[e]||ix(e))||t},Di=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return At(e,function(o){Pe[o]=zt[o]=r,Pe[a=o.toLowerCase()]=n;for(var l in r)Pe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[o+"."+l]=r[l]}),r},$h=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},lo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Co*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Pv((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:$h(o);return r=Co/r,l.config=function(c,u){return s(e,c,u)},l},co=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:$h(n);return i.config=function(r){return s(e,r)},i};At("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Di(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;Di("Elastic",lo("in"),lo("out"),lo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Di("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Di("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Di("Circ",function(s){return-(xh(1-s*s)-1)});Di("Sine",function(s){return s===1?1:-Rv(s*Av)+1});Di("Back",co("in"),co("out"),co());Pe.SteppedEase=Pe.steps=zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ve;return function(o){return((i*hs(0,a,o)|0)+r)*n}}};mr.ease=Pe["quad.out"];At("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ul+=s+","+s+"Params,"});var Zh=function(e,t){this.id=Lv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lh,this.set=t?t.getSetter:gl},ns=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,_r(this,+t.duration,1,1),this.data=t.data,ts||It.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,_r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(vr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(fl(this,n),!r._dp||r.parent||Fh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ve||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+uu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+uu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?gr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ve?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ta(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ve?0:this._rts,this.totalTime(hs(-this._delay,this._tDur,i),!0),va(this),zv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(vr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ve&&(this._tTime-=Ve)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ct(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ta(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(kt(this,n),Ct(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ct(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ve:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ve,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ve)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=rt(n)?n:Dh,o=function(){var c=i.then;i.then=null,rt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Br(this)},s}();qt(ns.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ve,_prom:0,_ps:!1,_rts:1});var wt=function(s){vh(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ct(n.sortChildren),Xe&&mn(n.parent||Xe,Cn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Oh(Cn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Xr(0,arguments,this),this},t.from=function(i,r,a){return Xr(1,arguments,this),this},t.fromTo=function(i,r,a,o){return Xr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Wr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new it(i,r,kt(this,a),1),this},t.call=function(i,r,a){return mn(this,it.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new it(i,a,kt(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Wr(a).immediateRender=Ct(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,Wr(o).immediateRender=Ct(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,f,p,_,b,E,w,x,C,y;if(this!==Xe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,w=this._start,E=this._ts,_=!E,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(d=ft(u%p),u===l?(f=this._repeat,d=c):(f=~~(u/p),f&&f===u/p&&(d=c,f--),d>c&&(d=c)),x=gr(this._tTime,p),!o&&this._tTime&&x!==f&&(x=f),C&&f&1&&(d=c-d,y=1),f!==x&&!this._lock){var v=C&&x&1,M=v===(C&&f&1);if(f<x&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(y?0:ft(f*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Ht(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;jh(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Uv(this,ft(o),ft(d)),b&&(u-=d-(d=b._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&(Ht(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-Ve);break}}m=g}else{m=this._last;for(var O=i<0?i:d;m;){if(g=m._prev,(m._act||O<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(O-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(O-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=O?-Ve:Ve);break}}m=g}}if(b&&!r&&(this.pause(),b.render(d>=o?0:-Ve)._zTime=d>=o?1:-1,this._ts))return this._start=w,va(this),this.render(i,r,a);this._onUpdate&&!r&&Ht(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(w===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rn(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(Ht(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Dn(r)||(r=kt(this,r,i)),!(i instanceof ns)){if(pt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(st(i))return this.addLabel(i,r);if(rt(i))i=it.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Gt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof it?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return st(i)?this.removeLabel(i):rt(i)?this.killTweensOf(i):(_a(this,i),i===this._recent&&(this._recent=this._last),Ti(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(It.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=kt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=it.delayedCall(0,r||Qr,a);return o.data="isPause",this._hasPause=1,mn(this,o,kt(this,i))},t.removePause=function(i){var r=this._first;for(i=kt(this,i);r;)r._start===i&&r.data==="isPause"&&Rn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Wn!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Vt(i),l=this._first,c=Dn(r),u;l;)l instanceof it?Iv(l._targets,o)&&(c?(!Wn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=kt(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=it.to(a,qt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ve,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&_r(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return d?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,qt({startAt:{time:kt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),fu(this,kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),fu(this,kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ve)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ti(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return s.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ti(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=Gt,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;_r(a,a===Xe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Xe._ts&&(Rh(Xe,ta(i,Xe)),Ah=It.frame),It.frame>=lu){lu+=Ft.autoSleep||120;var r=Xe._first;if((!r||!r._ts)&&Ft.autoSleep&&It._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||It.sleep()}}},e}(ns);qt(wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var rx=function(e,t,n,i,r,a,o){var l=new Lt(this._pt,e,t,0,1,nf,null,r),c=0,u=0,h,d,m,g,f,p,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=es(i)),a&&(b=[n,i],a(b,e,t),n=b[0],i=b[1]),d=n.match(so)||[];h=so.exec(i);)g=h[0],f=i.substring(c,h.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?or(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=so.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sh.test(i)||_)&&(l.e=0),this._pt=l,l},dl=function(e,t,n,i,r,a,o,l,c){rt(i)&&(i=i(r||0,e,a));var u=e[t],h=n!=="get"?n:rt(u)?c?e[t.indexOf("set")||!rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=rt(u)?c?cx:ef:ml,m;if(st(i)&&(~i.indexOf("random(")&&(i=es(i)),i.charAt(1)==="="&&(m=or(h,i)+(dt(h)||0),(m||m===0)&&(i=m))),h!==i||Fo)return!isNaN(h*i)&&i!==""?(m=new Lt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?hx:tf,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&ll(t,i),rx.call(this,e,t,h,i,d,l||Ft.stringFilter,c))},sx=function(e,t,n,i,r){if(rt(e)&&(e=qr(e,r,t,n,i)),!In(e)||e.style&&e.nodeType||pt(e)||bh(e))return st(e)?qr(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=qr(e[o],r,t,n,i);return a},Kh=function(e,t,n,i,r,a){var o,l,c,u;if(Dt[e]&&(o=new Dt[e]).init(r,o.rawVars?t[e]:sx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Lt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==rr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Wn,Fo,pl=function s(e,t){var n=e.vars,i=n.ease,r=n.startAt,a=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,m=n.keyframes,g=n.autoRevert,f=e._dur,p=e._startAt,_=e._targets,b=e.parent,E=b&&b.data==="nested"?b.parent._targets:_,w=e._overwrite==="auto"&&!sl,x=e.timeline,C,y,v,M,O,F,K,Y,D,H,G,I,N;if(x&&(!m||!i)&&(i="none"),e._ease=Ci(i,mr.ease),e._yEase=d?Yh(Ci(d===!0?i:d,mr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(Y=_[0]?Ei(_[0]).harness:0,I=Y&&n[Y.prop],C=ea(n,cl),p&&(Rn(p.render(-1,!0)),p._lazy=0),r)if(Rn(e._startAt=it.set(_,qt({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:Ct(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},r))),t<0&&!a&&!g&&e._startAt.render(-1,!0),a){if(t>0&&!g&&(e._startAt=0),f&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&f){if(p)!g&&(e._startAt=0);else if(t&&(a=!1),v=qt({overwrite:!1,data:"isFromStart",lazy:a&&Ct(o),immediateRender:a,stagger:0,parent:b},C),I&&(v[Y.prop]=I),Rn(e._startAt=it.set(_,v)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!a)s(e._startAt,Ve);else if(!t)return}for(e._pt=e._ptCache=0,o=f&&Ct(o)||o&&!f,y=0;y<_.length;y++){if(O=_[y],K=O._gsap||hl(_)[y]._gsap,e._ptLookup[y]=H={},Ro[K.id]&&Zn.length&&Qs(),G=E===_?y:E.indexOf(O),Y&&(D=new Y).init(O,I||C,e,G,E)!==!1&&(e._pt=M=new Lt(e._pt,O,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(R){H[R]=M}),D.priority&&(F=1)),!Y||I)for(v in C)Dt[v]&&(D=Kh(v,C,e,G,O,E))?D.priority&&(F=1):H[v]=M=dl.call(e,O,v,"get",C[v],G,E,0,n.stringFilter);e._op&&e._op[y]&&e.kill(O,e._op[y]),w&&e._pt&&(Wn=e,Xe.killTweensOf(O,H,e.globalTime(t)),N=!e.parent,Wn=0),e._pt&&o&&(Ro[K.id]=1)}F&&rf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!N,m&&t<=0&&x.render(Gt,!0,!0)},ax=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return Fo=1,e.vars[t]="+=0",pl(e,o),Fo=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,c.e&&(c.e=je(n)+dt(c.e)),c.b&&(c.b=c.s+dt(c.b))},ox=function(e,t){var n=e[0]?Ei(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=Ri({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},lx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(pt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},qr=function(e,t,n,i,r){return rt(e)?e.call(t,n,i,r):st(e)&&~e.indexOf("random(")?es(e):e},Jh=ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qh={};At(Jh+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Qh[s]=1});var it=function(s){vh(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Wr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=i.parent||Xe,E=(pt(n)||bh(n)?Dn(n[0]):"length"in i)?[n]:Vt(n),w,x,C,y,v,M,O,F;if(o._targets=E.length?hl(E):Js("GSAP target "+n+" not found. https://greensock.com",!Ft.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||ks(c)||ks(u)){if(i=o.vars,w=o.timeline=new wt({data:"nested",defaults:f||{}}),w.kill(),w.parent=w._dp=Cn(o),w._start=0,d||ks(c)||ks(u)){if(y=E.length,O=d&&kh(d),In(d))for(v in d)~Jh.indexOf(v)&&(F||(F={}),F[v]=d[v]);for(x=0;x<y;x++)C=ea(i,Qh),C.stagger=0,_&&(C.yoyoEase=_),F&&Ri(C,F),M=E[x],C.duration=+qr(c,Cn(o),x,M,E),C.delay=(+qr(u,Cn(o),x,M,E)||0)-o._delay,!d&&y===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),w.to(M,C,O?O(x,M,E):0),w._ease=Pe.none;w.duration()?c=u=0:o.timeline=0}else if(g){Wr(qt(w.vars.defaults,{ease:"none"})),w._ease=Ci(g.ease||i.ease||"none");var K=0,Y,D,H;if(pt(g))g.forEach(function(G){return w.to(E,G,">")});else{C={};for(v in g)v==="ease"||v==="easeEach"||lx(v,g[v],C,g.easeEach);for(v in C)for(Y=C[v].sort(function(G,I){return G.t-I.t}),K=0,x=0;x<Y.length;x++)D=Y[x],H={ease:D.e,duration:(D.t-(x?Y[x-1].t:0))/100*c},H[v]=D.v,w.to(E,H,K),K+=H.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return m===!0&&!sl&&(Wn=Cn(o),Xe.killTweensOf(E),Wn=0),mn(b,Cn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===ft(b._time)&&Ct(h)&&Nv(Cn(o))&&b.data!=="nested")&&(o._tTime=-Ve,o.render(Math.max(0,-u))),p&&Oh(Cn(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i>l-Ve&&i>=0?l:i<Ve?0:i,h,d,m,g,f,p,_,b,E;if(!c)kv(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,a);if(h=ft(u%g),u===l?(m=this._repeat,h=c):(m=~~(u/g),m&&m===u/g&&(h=c,m--),h>c&&(h=c)),p=this._yoyo&&m&1,p&&(E=this._yEase,h=c-h),f=gr(this._tTime,g),h===o&&!a&&this._initted)return this._tTime=u,this;m!==f&&(b&&this._yEase&&jh(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(ft(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(zh(this,i<0?i:h,a,r))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(E||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!o&&!r&&(Ht(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;b&&b.render(i<0?i:!h&&p?-Ve:b._dur*b._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,a),Ht(this,"onUpdate")),this._repeat&&m!==f&&this.vars.onRepeat&&!r&&this.parent&&Ht(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Rn(this,1),!r&&!(i<0&&!o)&&(u||o)&&(Ht(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},t.resetTo=function(i,r,a,o){ts||It.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pl(this,l),c=this._ease(l/this._dur),ax(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(fl(this,0),this.parent||Ih(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Br(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Wn&&Wn.vars.overwrite!==!0)._first||Br(this),this.parent&&a!==this.timeline.totalDuration()&&_r(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Vt(i):o,c=this._ptLookup,u=this._pt,h,d,m,g,f,p,_;if((!r||r==="all")&&Ov(o,l))return r==="all"&&(this._pt=0),Br(this);for(h=this._op=this._op||[],r!=="all"&&(st(r)&&(f={},At(r,function(b){return f[b]=1}),r=f),r=ox(o,r)),_=o.length;_--;)if(~l.indexOf(o[_])){d=c[_],r==="all"?(h[_]=r,g=d,m={}):(m=h[_]=h[_]||{},g=r);for(f in g)p=d&&d[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&_a(this,p,"_pt"),delete d[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&Br(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Xr(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return Xr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Xe.killTweensOf(i,r,a)},e}(ns);qt(it.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});At("staggerTo,staggerFrom,staggerFromTo",function(s){it[s]=function(){var e=new wt,t=Do.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ml=function(e,t,n){return e[t]=n},ef=function(e,t,n){return e[t](n)},cx=function(e,t,n,i){return e[t](i.fp,n)},ux=function(e,t,n){return e.setAttribute(t,n)},gl=function(e,t){return rt(e[t])?ef:al(e[t])&&e.setAttribute?ux:ml},tf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_l=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fx=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},dx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_a(this,t,"_pt"):t.dep||(n=1),t=i;return!n},px=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rf=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Lt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||tf,this.d=l||this,this.set=c||ml,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=px,this.m=n,this.mt=r,this.tween=i},s}();At(ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return cl[s]=1});zt.TweenMax=zt.TweenLite=it;zt.TimelineLite=zt.TimelineMax=wt;Xe=new wt({sortChildren:!1,defaults:mr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ft.stringFilter=qh;var na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Kv(i)})},timeline:function(e){return new wt(e)},getTweensOf:function(e,t){return Xe.getTweensOf(e,t)},getProperty:function(e,t,n,i){st(e)&&(e=Vt(e)[0]);var r=Ei(e||{}).get,a=n?Dh:Ph;return n==="native"&&(n=""),e&&(t?a((Dt[t]&&Dt[t].get||r)(e,t,n,i)):function(o,l,c){return a((Dt[o]&&Dt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Vt(e),e.length>1){var i=e.map(function(u){return tn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Dt[t],o=Ei(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;rr._pt=0,h.init(e,n?u+n:u,rr,0,[e]),h.render(1,h),rr._pt&&_l(1,rr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=tn.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ci(e.ease,mr.ease)),cu(mr,e||{})},config:function(e){return cu(Ft,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Dt[o]&&!zt[o]&&Js(t+" effect requires "+o+" plugin.")}),ao[t]=function(o,l,c){return n(Vt(o),qt(l||{},r),c)},a&&(wt.prototype[t]=function(o,l,c){return this.add(ao[t](o,In(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Pe[e]=Ci(t)},parseEase:function(e,t){return arguments.length?Ci(e,t):Pe},getById:function(e){return Xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wt(e),i,r;for(n.smoothChildTiming=Ct(e.smoothChildTiming),Xe.remove(n),n._dp=0,n._time=n._tTime=Xe._time,i=Xe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof it&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(Xe,n,0),n},utils:{wrap:jv,wrapYoyo:$v,distribute:kh,random:Gh,snap:Uh,normalize:Yv,getUnit:dt,clamp:Vv,splitColor:Wh,toArray:Vt,selector:Wv,mapRange:Hh,pipe:Xv,unitize:qv,interpolate:Zv,shuffle:Bh},install:Th,effects:ao,ticker:It,updateRoot:wt.updateRoot,plugins:Dt,globalTimeline:Xe,core:{PropTween:Lt,globals:Ch,Tween:it,Timeline:wt,Animation:ns,getCache:Ei,_removeLinkedListItem:_a,suppressOverwrites:function(e){return sl=e}}};At("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return na[s]=it[s]});It.add(wt.updateRoot);rr=na.to({},{duration:0});var mx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gx=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=mx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},uo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(st(r)&&(l={},At(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}gx(o,r)}}}},tn=na.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o;for(a in t)o=this.add(e,"setAttribute",(e.getAttribute(a)||0)+"",t[a],i,r,0,0,a),o&&(o.op=a),this._props.push(a)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},uo("roundProps",Io),uo("modifiers"),uo("snap",Uh))||na;it.version=wt.version=tn.version="3.10.4";Eh=1;yh()&&vr();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pu,Xn,lr,vl,bi,mu,_x=function(){return typeof window!="undefined"},Qn={},mi=180/Math.PI,cr=Math.PI/180,Zi=Math.atan2,gu=1e8,sf=/([A-Z])/g,vx=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},af=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},of=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Sx=function(e,t,n){return e.style[t]=n},wx=function(e,t,n){return e.style.setProperty(t,n)},Ex=function(e,t,n){return e._gsap[t]=n},Tx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Cx=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Ax=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},ot="transform",ei=ot+"Origin",cf,Oo=function(e,t){var n=Xn.createElementNS?Xn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xn.createElement(e);return n.style?n:Xn.createElement(e)},Pn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,xr(t)||t,1)||""},_u="O,Moz,ms,Ms,Webkit".split(","),xr=function(e,t,n){var i=t||bi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(_u[a]+e in r););return a<0?null:(a===3?"ms":a>=0?_u[a]:"")+e},zo=function(){_x()&&window.document&&(pu=window,Xn=pu.document,lr=Xn.documentElement,bi=Oo("div")||{style:{}},Oo("div"),ot=xr(ot),ei=ot+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cf=!!xr("perspective"),vl=1)},ho=function s(e){var t=Oo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(lr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),lr.removeChild(t),this.style.cssText=r,a},vu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},uf=function(e){var t;try{t=e.getBBox()}catch{t=ho.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ho||(t=ho.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+vu(e,["x","cx","x1"])||0,y:+vu(e,["y","cy","y1"])||0,width:0,height:0}:t},hf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&uf(e))},is=function(e,t){if(t){var n=e.style;t in Qn&&t!==ei&&(t=ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(sf,"-$1").toLowerCase())):n.removeAttribute(t)}},Yn=function(e,t,n,i,r,a){var o=new Lt(e._pt,t,n,0,1,a?lf:of);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},xu={deg:1,rad:1,turn:1},ti=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=bi.style,l=vx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,f,p,_;return i===a||!r||xu[i]||xu[a]?r:(a!=="px"&&!d&&(r=s(e,t,n,"px")),_=e.getCTM&&hf(e),(m||a==="%")&&(Qn[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],je(m?r/g*h:r/100*g)):(o[l?"width":"height"]=h+(d?a:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Xn||!f.appendChild)&&(f=Xn.body),p=f._gsap,p&&m&&p.width&&l&&p.time===It.time?je(r/p.width*h):((m||a==="%")&&(o.position=Pn(e,"position")),f===e&&(o.position="static"),f.appendChild(bi),g=bi[u],f.removeChild(bi),o.position="absolute",l&&m&&(p=Ei(f),p.time=It.time,p.width=f[u]),je(d?g*r/h:g&&r?h/g*r:0))))},gi=function(e,t,n,i){var r;return vl||zo(),t in qn&&t!=="transform"&&(t=qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qn[t]&&t!=="transform"?(r=ss(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ra(Pn(e,ei))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ia[t]&&ia[t](e,t,n)||Pn(e,t)||Lh(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ti(e,t,r,n)+n:r},Lx=function(e,t,n,i){if(!n||n==="none"){var r=xr(t,e,1),a=r&&Pn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Pn(e,"borderTopColor"))}var o=new Lt(this._pt,e.style,t,0,1,nf),l=0,c=0,u,h,d,m,g,f,p,_,b,E,w,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Pn(e,t)||i,e.style[t]=n),u=[n,i],qh(u),n=u[0],i=u[1],d=n.match(ir)||[],x=i.match(ir)||[],x.length){for(;h=ir.exec(i);)p=h[0],b=i.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(f=d[c++]||"")&&(m=parseFloat(f)||0,w=f.substr((m+"").length),p.charAt(1)==="="&&(p=or(m,p)+w),_=parseFloat(p),E=p.substr((_+"").length),l=ir.lastIndex-E.length,E||(E=E||Ft.units[t]||w,l===i.length&&(i+=E,o.e+=E)),w!==E&&(m=ti(e,t,f,E)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?lf:of;return Sh.test(i)&&(o.e=0),this._pt=o,o},yu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Rx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=yu[n]||n,t[1]=yu[i]||i,t.join(" ")},Px=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Qn[o]&&(l=1,o=o==="transformOrigin"?ei:ot),is(n,o);l&&(is(n,ot),a&&(a.svg&&n.removeAttribute("transform"),ss(n,1),a.uncache=1))}},ia={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Lt(e._pt,t,n,0,0,Px);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},rs=[1,0,0,1,0,0],ff={},df=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bu=function(e){var t=Pn(e,ot);return df(t)?rs:t.substr(7).match(Mh).map(je)},xl=function(e,t){var n=e._gsap||Ei(e),i=e.style,r=bu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?rs:r):(r===rs&&!e.offsetParent&&e!==lr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextSibling,lr.appendChild(e)),r=bu(e),l?i.display=l:is(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):lr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},No=function(e,t,n,i,r,a){var o=e._gsap,l=r||xl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],b=l[5],E=t.split(" "),w=parseFloat(E[0])||0,x=parseFloat(E[1])||0,C,y,v,M;n?l!==rs&&(y=m*p-g*f)&&(v=w*(p/y)+x*(-f/y)+(f*b-p*_)/y,M=w*(-g/y)+x*(m/y)-(m*b-g*_)/y,w=v,x=M):(C=uf(e),w=C.x+(~E[0].indexOf("%")?w/100*C.width:w),x=C.y+(~(E[1]||E[0]).indexOf("%")?x/100*C.height:x)),i||i!==!1&&o.smooth?(_=w-c,b=x-u,o.xOffset=h+(_*m+b*f)-_,o.yOffset=d+(_*g+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=x,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ei]="0px 0px",a&&(Yn(a,o,"xOrigin",c,w),Yn(a,o,"yOrigin",u,x),Yn(a,o,"xOffset",h,o.xOffset),Yn(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+x)},ss=function(e,t){var n=e._gsap||new Zh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=Pn(e,ei)||"0",c,u,h,d,m,g,f,p,_,b,E,w,x,C,y,v,M,O,F,K,Y,D,H,G,I,N,R,B,j,Q,ee,ce;return c=u=h=g=f=p=_=b=E=0,d=m=1,n.svg=!!(e.getCTM&&hf(e)),C=xl(e,n.svg),n.svg&&(G=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),No(e,G||l,!!G||n.originIsAbsolute,n.smooth!==!1,C)),w=n.xOrigin||0,x=n.yOrigin||0,C!==rs&&(O=C[0],F=C[1],K=C[2],Y=C[3],c=D=C[4],u=H=C[5],C.length===6?(d=Math.sqrt(O*O+F*F),m=Math.sqrt(Y*Y+K*K),g=O||F?Zi(F,O)*mi:0,_=K||Y?Zi(K,Y)*mi+g:0,_&&(m*=Math.abs(Math.cos(_*cr))),n.svg&&(c-=w-(w*O+x*K),u-=x-(w*F+x*Y))):(ce=C[6],Q=C[7],R=C[8],B=C[9],j=C[10],ee=C[11],c=C[12],u=C[13],h=C[14],y=Zi(ce,j),f=y*mi,y&&(v=Math.cos(-y),M=Math.sin(-y),G=D*v+R*M,I=H*v+B*M,N=ce*v+j*M,R=D*-M+R*v,B=H*-M+B*v,j=ce*-M+j*v,ee=Q*-M+ee*v,D=G,H=I,ce=N),y=Zi(-K,j),p=y*mi,y&&(v=Math.cos(-y),M=Math.sin(-y),G=O*v-R*M,I=F*v-B*M,N=K*v-j*M,ee=Y*M+ee*v,O=G,F=I,K=N),y=Zi(F,O),g=y*mi,y&&(v=Math.cos(y),M=Math.sin(y),G=O*v+F*M,I=D*v+H*M,F=F*v-O*M,H=H*v-D*M,O=G,D=I),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,p=180-p),d=je(Math.sqrt(O*O+F*F+K*K)),m=je(Math.sqrt(H*H+ce*ce)),y=Zi(D,H),_=Math.abs(y)>2e-4?y*mi:0,E=ee?1/(ee<0?-ee:ee):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!df(Pn(e,ot)),G&&e.setAttribute("transform",G))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(d*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=je(d),n.scaleY=je(m),n.rotation=je(g)+o,n.rotationX=je(f)+o,n.rotationY=je(p)+o,n.skewX=_+o,n.skewY=b+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[ei]=ra(l)),n.xOffset=n.yOffset=0,n.force3D=Ft.force3D,n.renderTransform=n.svg?Ix:cf?pf:Dx,n.uncache=0,n},ra=function(e){return(e=e.split(" "))[0]+" "+e[1]},fo=function(e,t,n){var i=dt(t);return je(parseFloat(t)+parseFloat(ti(e,"x",n+"px",i)))+i},Dx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pf(e,t)},hi="0deg",Fr="0px",fi=") ",pf=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,E=n.zOrigin,w="",x=_==="auto"&&e&&e!==1||_===!0;if(E&&(h!==hi||u!==hi)){var C=parseFloat(u)*cr,y=Math.sin(C),v=Math.cos(C),M;C=parseFloat(h)*cr,M=Math.cos(C),a=fo(b,a,y*M*-E),o=fo(b,o,-Math.sin(C)*-E),l=fo(b,l,v*M*-E+E)}p!==Fr&&(w+="perspective("+p+fi),(i||r)&&(w+="translate("+i+"%, "+r+"%) "),(x||a!==Fr||o!==Fr||l!==Fr)&&(w+=l!==Fr||x?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+fi),c!==hi&&(w+="rotate("+c+fi),u!==hi&&(w+="rotateY("+u+fi),h!==hi&&(w+="rotateX("+h+fi),(d!==hi||m!==hi)&&(w+="skew("+d+", "+m+fi),(g!==1||f!==1)&&(w+="scale("+g+", "+f+fi),b.style[ot]=w||"translate(0, 0)"},Ix=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,E=parseFloat(a),w=parseFloat(o),x,C,y,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=cr,c*=cr,x=Math.cos(l)*h,C=Math.sin(l)*h,y=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(u*=cr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),y*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),x*=M,C*=M)),x=je(x),C=je(C),y=je(y),v=je(v)):(x=h,v=d,C=y=0),(E&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(E=ti(m,"x",a,"px"),w=ti(m,"y",o,"px")),(g||f||p||_)&&(E=je(E+g-(g*x+f*y)+p),w=je(w+f-(g*C+f*v)+_)),(i||r)&&(M=m.getBBox(),E=je(E+i/100*M.width),w=je(w+r/100*M.height)),M="matrix("+x+","+C+","+y+","+v+","+E+","+w+")",m.setAttribute("transform",M),b&&(m.style[ot]=M)},Fx=function(e,t,n,i,r){var a=360,o=st(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?mi:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*gu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*gu)%a-~~(c/a)*a)),e._pt=d=new Lt(e._pt,t,n,i,c,yx),d.e=u,d.u="deg",e._props.push(n),d},Mu=function(e,t){for(var n in t)e[n]=t[n];return e},Ox=function(e,t,n){var i=Mu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ot]=t,o=ss(n,1),is(n,ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ot],a[ot]=t,o=ss(n,1),a[ot]=c);for(l in Qn)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(m=dt(c),g=dt(u),h=m!==g?ti(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Lt(e._pt,o,l,h,d-h,af),e._pt.u=g||0,e._props.push(l));Mu(o,i)};At("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ia[e>1?"border"+s:s]=function(o,l,c,u,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return gi(o,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(g,f){return m[g]=d[f]=d[f]||d[(f-1)/2|0]}),o.init(l,m,h)}});var mf={name:"css",register:zo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,m,g,f,p,_,b,E,w,x,C,y;vl||zo();for(f in t)if(f!=="autoRound"&&(u=t[f],!(Dt[f]&&Kh(f,t,n,i,e,r)))){if(m=typeof u,g=ia[f],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=es(u)),g)g(this,e,f,u,n)&&(y=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",Kn.lastIndex=0,Kn.test(c)||(p=dt(c),_=dt(u)),_?p!==_&&(c=ti(e,f,c,_)+_):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,f),a.push(f);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,r):l[f],st(c)&&~c.indexOf("random(")&&(c=es(c)),dt(c+"")||(c+=Ft.units[f]||dt(gi(e,f))||""),(c+"").charAt(1)==="="&&(c=gi(e,f))):c=gi(e,f),d=parseFloat(c),b=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),f in qn&&(f==="autoAlpha"&&(d===1&&gi(e,"visibility")==="hidden"&&h&&(d=0),Yn(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=qn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),E=f in Qn,E){if(w||(x=e._gsap,x.renderTransform&&!t.parseTransform||ss(e,t.parseTransform),C=t.smoothOrigin!==!1&&x.smooth,w=this._pt=new Lt(this._pt,o,ot,0,1,x.renderTransform,x,0,-1),w.dep=1),f==="scale")this._pt=new Lt(this._pt,x,"scaleY",x.scaleY,(b?or(x.scaleY,b+h):h)-x.scaleY||0),a.push("scaleY",f),f+="X";else if(f==="transformOrigin"){u=Rx(u),x.svg?No(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&Yn(this,x,"zOrigin",x.zOrigin,_),Yn(this,o,f,ra(c),ra(u)));continue}else if(f==="svgOrigin"){No(e,u,1,C,0,this);continue}else if(f in ff){Fx(this,x,f,d,b?or(d,b+u):u);continue}else if(f==="smoothOrigin"){Yn(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){Ox(this,u,e);continue}}else f in o||(f=xr(f)||f);if(E||(h||h===0)&&(d||d===0)&&!xx.test(u)&&f in o)p=(c+"").substr((d+"").length),h||(h=0),_=dt(u)||(f in Ft.units?Ft.units[f]:p),p!==_&&(d=ti(e,f,c,_)),this._pt=new Lt(this._pt,E?x:o,f,d,(b?or(d,b+h):h)-d,!E&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?Mx:af),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=bx);else if(f in o)Lx.call(this,e,f,c,b?b+u:u);else if(f in e)this.add(e,f,c||e[f],b?b+u:u,i,r);else{ll(f,u);continue}a.push(f)}}y&&rf(this)},get:gi,aliases:qn,getSetter:function(e,t,n){var i=qn[t];return i&&i.indexOf(",")<0&&(t=i),t in Qn&&t!==ei&&(e._gsap.x||gi(e,"x"))?n&&mu===n?t==="scale"?Tx:Ex:(mu=n||{})&&(t==="scale"?Cx:Ax):e.style&&!al(e.style[t])?Sx:~t.indexOf("-")?wx:gl(e,t)},core:{_removeProperty:is,_getMatrix:xl}};tn.utils.checkPrefix=xr;(function(s,e,t,n){var i=At(s+","+e+","+t,function(r){Qn[r]=1});At(e,function(r){Ft.units[r]="deg",ff[r]=1}),qn[i[13]]=s+","+e,At(n,function(r){var a=r.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");At("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Ft.units[s]="px"});tn.registerPlugin(mf);var xa=tn.registerPlugin(mf)||tn;xa.core.Tween;/*!
 * CSSRulePlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jn,Bo,Hs,sa,gf=function(){return typeof window!="undefined"},_f=function(){return jn||gf()&&(jn=window.gsap)&&jn.registerPlugin&&jn},Su=function(){return Bo||(vf(),sa||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),Bo},vf=function(e){jn=e||_f(),gf()&&(Hs=document),jn&&(sa=jn.plugins.css,sa&&(Bo=1))},yl={version:"3.10.4",name:"cssRule",init:function(e,t,n,i,r){if(!Su()||typeof e.cssText=="undefined")return!1;var a=e._gsProxy=e._gsProxy||Hs.createElement("div");this.ss=e,this.style=a.style,a.style.cssText=e.cssText,sa.prototype.init.call(this,a,t,n,i,r)},render:function(e,t){for(var n=t._pt,i=t.style,r=t.ss,a;n;)n.r(e,n.d),n=n._next;for(a=i.length;--a>-1;)r[i[a]]=i[i[a]]},getRule:function(e){Su();var t=Hs.all?"rules":"cssRules",n=Hs.styleSheets,i=n.length,r=e.charAt(0)===":",a,o,l,c;for(e=(r?"":",")+e.split("::").join(":").toLowerCase()+",",r&&(c=[]);i--;){try{if(o=n[i][t],!o)continue;a=o.length}catch(u){console.warn(u);continue}for(;--a>-1;)if(l=o[a],l.selectorText&&(","+l.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)!==-1)if(r)c.push(l.style);else return l.style}return c},register:vf};_f()&&jn.registerPlugin(yl);xa.registerPlugin(yl);let zx=yl.getRule(".animBox::before");function Nx(){const s=xa.timeline();window.innerWidth>705?s.to(".loading",{y:"-100%",duration:1}).to(".loading2",{y:"-100%",duration:1},"-=.7").from(".header",{y:"-150%",duration:.5}).from(".logo",{x:"-100%",opacity:0,duration:.5}).to("html",{overflowY:"scroll",duration:0}).from(".main-link",{opacity:"0",duration:.5,stagger:.2}).from(".main-title",{y:"-100%",opacity:0,duration:1}).from(zx,{height:"100%",duration:.5},"-=.8").from(".main-body .main-description",{y:"100%",opacity:0,duration:1},"-=.7"):s.to(".loading",{y:"-100%",duration:1}).to(".loading2",{y:"-100%",duration:1},"-=.7").to("html",{overflowY:"scroll",duration:0})}const wu={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class fs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Bx=new fa(-1,1,1,-1,0,1),bl=new Yt;bl.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));bl.setAttribute("uv",new Tt([0,2,0,0,2,0],2));class xf{constructor(e){this._mesh=new Et(bl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Eu extends fs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xo.clone(e.uniforms),this.material=new Xt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Tu extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class kx extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ux{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Re);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],wu===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Eu===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Eu(wu),this.clock=new Ko}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Tu!==void 0&&(a instanceof Tu?n=!0:a instanceof kx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new fa(-1,1,1,-1,0,1);const yf=new Yt;yf.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));yf.setAttribute("uv",new Tt([0,2,0,0,2,0],2));class Gx extends fs{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Cu={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		uniform int byp; //should we apply the glitch ?

		uniform sampler2D tDiffuse;
		uniform sampler2D tDisp;

		uniform float amount;
		uniform float angle;
		uniform float seed;
		uniform float seed_x;
		uniform float seed_y;
		uniform float distortion_x;
		uniform float distortion_y;
		uniform float col_s;

		varying vec2 vUv;


		float rand(vec2 co){
			return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
		}

		void main() {
			if(byp<1) {
				vec2 p = vUv;
				float xs = floor(gl_FragCoord.x / 0.5);
				float ys = floor(gl_FragCoord.y / 0.5);
				//based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch
				float disp = texture2D(tDisp, p*seed*seed).r;
				if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {
					if(seed_x>0.){
						p.y = 1. - (p.y + distortion_y);
					}
					else {
						p.y = distortion_y;
					}
				}
				if(p.x<distortion_y+col_s && p.x>distortion_y-col_s*seed) {
					if(seed_y>0.){
						p.x=distortion_x;
					}
					else {
						p.x = 1. - (p.x + distortion_x);
					}
				}
				p.x+=disp*seed_x*(seed/5.);
				p.y+=disp*seed_y*(seed/5.);
				//base from RGB shift shader
				vec2 offset = amount * vec2( cos(angle), sin(angle));
				vec4 cr = texture2D(tDiffuse, p + offset);
				vec4 cga = texture2D(tDiffuse, p);
				vec4 cb = texture2D(tDiffuse, p - offset);
				gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);
				//add noise
				vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.2);
				gl_FragColor = gl_FragColor+ snow;
			}
			else {
				gl_FragColor=texture2D (tDiffuse, vUv);
			}
		}`};class Vx extends fs{constructor(e=64){super(),Cu===void 0&&console.error("THREE.GlitchPass relies on DigitalGlitch");const t=Cu;this.uniforms=Xo.clone(t.uniforms),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new Xt({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new xf(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,t,n){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=Ou),this.uniforms.tDiffuse.value=n.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=Nt.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=Nt.randFloat(-1,1),this.uniforms.seed_y.value=Nt.randFloat(-1,1),this.uniforms.distortion_x.value=Nt.randFloat(0,1),this.uniforms.distortion_y.value=Nt.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=Nt.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=Nt.randFloat(0,1),this.uniforms.distortion_y.value=Nt.randFloat(0,1),this.uniforms.seed_x.value=Nt.randFloat(-.3,.3),this.uniforms.seed_y.value=Nt.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=Nt.randInt(120,240)}generateHeightmap(e){const t=new Float32Array(e*e),n=e*e;for(let r=0;r<n;r++){const a=Nt.randFloat(0,1);t[r]=a}const i=new N0(t,e,e,zu,Hn);return i.needsUpdate=!0,i}}const Hx=new Ko,bt={width:window.innerWidth,height:window.innerHeight},Wx=document.querySelector(".myCanvas");window.addEventListener("resize",()=>{bt.width=window.innerWidth,bt.height=window.innerHeight,_n.aspect=bt.width/bt.height,_n.updateProjectionMatrix(),yr.setSize(bt.width,bt.height),yr.render(vn,_n),Pi.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pi.setSize(bt.width,bt.height)});window.addEventListener("mousemove",s=>{let e=2,t=(s.clientX/window.innerWidth-.5)*e,n=(s.clientY/window.innerHeight-.5)*e;window.innerWidth>705&&(vi.rotation.set(n,t,10),aa.rotation.set(-n,-t,10),Tl.rotation.set(n,t,10),Cl.rotation.set(n,t,10),ba.rotation.set(-n/10,-t/10,10))});const Xx=new rh(()=>{Nx()}),bf=new ah(Xx),qx=bf.load(_h),Yx=bf.load(Cv),vn=new nh,ds=new Tv.GUI;ds.width=400;ds.closed=!0;ds.hide();const Ml=new ga(16777215,.5);Ml.position.set(-10,4,4);vn.add(Ml);ds.add(Ml.position,"x").min(-10).max(10).step(.01);const Sl=new ga(16777215,.5);Sl.position.set(10,4,4);Sl.visible=!1;vn.add(Sl);const wl=new J0(16711680,.6);wl.position.set(3,3,3);vn.add(wl);ds.add(wl,"intensity").name("point light intensity").min(0).max(5).step(.02);let ya=new ma({roughness:.6,metalness:1,normalMap:qx});const El=new tr,vi=new Et(new pa(2,1,32,50),ya);El.add(vi);const aa=new Et(new ni(1,1,1,1,1,1),ya);El.add(aa);vn.add(El);const as=new tr,Tl=new Et(new ni(1,1,1,1,1,1),ya);Tl.position.set(5,0,0);as.add(Tl);const Cl=new Et(new ni(1,1,1,1,1,1),ya);Cl.position.set(-5,0,0);as.add(Cl);vn.add(as);const Al=new Yt,Ll=2e3,Ws=new Float32Array(Ll*3),Xs=new Float32Array(Ll*3);for(let s=0;s<Ll;s++)Ws[s]=(Math.random()-.5)*50,Ws[s+1]=(Math.random()-.5)*50,Ws[s+2]=(Math.random()-.5)*50,Xs[s]=Math.random(),Xs[s+1]=Math.random(),Xs[s+2]=Math.random(),s++,s++;Al.setAttribute("position",new Wt(Ws,3));Al.setAttribute("color",new Wt(Xs,3));const Fn=new Zo({color:16777215});Fn.size=1;Fn.sizeAttenuation=!0;Fn.transparent=!0;Fn.alphaMap=Yx;Fn.alphaTest=.001;Fn.depthWrite=!1;Fn.blending=po;Fn.vertexColors=!0;const ba=new B0(Al,Fn);vn.add(ba);const _n=new Mt(45,bt.width/bt.height);_n.position.set(-5,.5,15);vn.add(_n);const yr=new $o({canvas:Wx,alpha:!0});yr.setSize(bt.width,bt.height);yr.setPixelRatio(Math.min(window.devicePixelRatio,2));yr.render(vn,_n);const Pi=new Ux(yr);Pi.setPixelRatio(Math.min(window.devicePixelRatio,2));Pi.setSize(bt.width,bt.height);const jx=new Gx(vn,_n);Pi.addPass(jx);const Mf=new Vx;Mf.enabled=!1;Pi.addPass(Mf);const Sf=()=>{window.requestAnimationFrame(Sf);const s=Hx.getElapsedTime();if(vi.position.z=window.scrollY/200,aa.position.z=window.scrollY/200,as.position.z=window.scrollY/200,window.innerWidth>705){vi.rotation.z=s/1.5,aa.rotation.z=-s,vi.position.x=-window.scrollY/200;const e=s/3;as.rotation.set(e,e,0),ba.rotation.z=s/10}else vi.position.y=-window.scrollY/400,vi.rotation.z=s/1.5;Pi.render()};Sf();function $x(){xa.from(_n.rotation,{duration:3,x:0,y:3,z:0,delay:2.5})}window.addEventListener("resize",()=>{wf()});function wf(){window.innerWidth<705?_n.position.set(0,-3,15):(ba.position.set(0,0,0),_n.position.set(-5,.5,15),$x())}wf();const ko=document.querySelector("#cursorCanvasID");window.addEventListener("mousemove",s=>{ko.style.top=s.clientY+"px",ko.style.left=s.clientX+"px";let e=s.clientX*2/window.innerWidth*2-2,t=s.clientY*2/window.innerHeight*2-2;Mi.lookAt(new z(e,-t,2))});const Er=new nh,oa={width:80,height:80},Zx=new ah,Kx=Zx.load(_h),Uo=new ga(16711680,.5);Er.add(Uo);const Go=new ga(16777215,.5);Er.add(Go);const Mi=new Et(new pa(.7,.3,6,20),new ma({roughness:.6,metalness:1,normalMap:Kx}));Er.add(Mi);const Ma=new Mt(45,oa.width/oa.height);Ma.position.set(0,0,3.6);Er.add(Ma);const Rl=new $o({canvas:ko,alpha:!0});Rl.setSize(oa.width,oa.height);Rl.render(Er,Ma);const Jx=new Ko,Ef=()=>{window.requestAnimationFrame(Ef);const s=Jx.getElapsedTime();Mi.rotation.z=s,Uo.position.z=Math.sin(s)*2,Uo.position.x=Math.cos(s)*2,Go.position.z=-Math.sin(s)*2,Go.position.x=-Math.cos(s)*2,Rl.render(Er,Ma)};Ef();let Qx=document.querySelectorAll(".cursorRespondLink");Qx.forEach(s=>{s.addEventListener("mouseover",()=>{Mi.material.wireframe=!0,Mi.position.z=-2}),s.addEventListener("mouseleave",()=>{Mi.material.wireframe=!1,Mi.position.z=0})});var ey=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Tf={exports:{}};/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */(function(s,e){(function(t,n){s.exports=n()})(ey,function(){var t=function(){a.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};t.version="2.0.8",typeof window!="undefined"&&window.addEventListener("mousewheel",void 0);var n="data-scrollmagic-pin-spacer";t.Controller=function(o){var l="ScrollMagic.Controller",c="FORWARD",u="REVERSE",h="PAUSED",d=i.defaults,m=this,g=a.extend({},d,o),f=[],p=!1,_=0,b=h,E=!0,w=0,x=!0,C,y,v=function(){for(var R in g)d.hasOwnProperty(R)||(I(2,'WARNING: Unknown option "'+R+'"'),delete g[R]);if(g.container=a.get.elements(g.container)[0],!g.container)throw I(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";E=g.container===window||g.container===document.body||!document.body.contains(g.container),E&&(g.container=window),w=F(),g.container.addEventListener("resize",H),g.container.addEventListener("scroll",H);var B=parseInt(g.refreshInterval,10);g.refreshInterval=a.type.Number(B)?B:d.refreshInterval,M(),I(3,"added new "+l+" controller (v"+t.version+")")},M=function(){g.refreshInterval>0&&(y=window.setTimeout(G,g.refreshInterval))},O=function(){return g.vertical?a.get.scrollTop(g.container):a.get.scrollLeft(g.container)},F=function(){return g.vertical?a.get.height(g.container):a.get.width(g.container)},K=this._setScrollPos=function(R){g.vertical?E?window.scrollTo(a.get.scrollLeft(),R):g.container.scrollTop=R:E?window.scrollTo(R,a.get.scrollTop()):g.container.scrollLeft=R},Y=function(){if(x&&p){var R=a.type.Array(p)?p:f.slice(0);p=!1;var B=_;_=m.scrollPos();var j=_-B;j!==0&&(b=j>0?c:u),b===u&&R.reverse(),R.forEach(function(Q,ee){I(3,"updating Scene "+(ee+1)+"/"+R.length+" ("+f.length+" total)"),Q.update(!0)}),R.length===0&&g.loglevel>=3&&I(3,"updating 0 Scenes (nothing added to controller)")}},D=function(){C=a.rAF(Y)},H=function(R){I(3,"event fired causing an update:",R.type),R.type=="resize"&&(w=F(),b=h),p!==!0&&(p=!0,D())},G=function(){if(!E&&w!=F()){var R;try{R=new Event("resize",{bubbles:!1,cancelable:!1})}catch{R=document.createEvent("Event"),R.initEvent("resize",!1,!1)}g.container.dispatchEvent(R)}f.forEach(function(B,j){B.refresh()}),M()},I=this._log=function(R,B){g.loglevel>=R&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),a.log.apply(window,arguments))};this._options=g;var N=function(R){if(R.length<=1)return R;var B=R.slice(0);return B.sort(function(j,Q){return j.scrollOffset()>Q.scrollOffset()?1:-1}),B};return this.addScene=function(R){if(a.type.Array(R))R.forEach(function(j,Q){m.addScene(j)});else if(R instanceof t.Scene){if(R.controller()!==m)R.addTo(m);else if(f.indexOf(R)<0){f.push(R),f=N(f),R.on("shift.controller_sort",function(){f=N(f)});for(var B in g.globalSceneOptions)R[B]&&R[B].call(R,g.globalSceneOptions[B]);I(3,"adding Scene (now "+f.length+" total)")}}else I(1,"ERROR: invalid argument supplied for '.addScene()'");return m},this.removeScene=function(R){if(a.type.Array(R))R.forEach(function(j,Q){m.removeScene(j)});else{var B=f.indexOf(R);B>-1&&(R.off("shift.controller_sort"),f.splice(B,1),I(3,"removing Scene (now "+f.length+" left)"),R.remove())}return m},this.updateScene=function(R,B){return a.type.Array(R)?R.forEach(function(j,Q){m.updateScene(j,B)}):B?R.update(!0):p!==!0&&R instanceof t.Scene&&(p=p||[],p.indexOf(R)==-1&&p.push(R),p=N(p),D()),m},this.update=function(R){return H({type:"resize"}),R&&Y(),m},this.scrollTo=function(R,B){if(a.type.Number(R))K.call(g.container,R,B);else if(R instanceof t.Scene)R.controller()===m?m.scrollTo(R.scrollOffset(),B):I(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",R);else if(a.type.Function(R))K=R;else{var j=a.get.elements(R)[0];if(j){for(;j.parentNode.hasAttribute(n);)j=j.parentNode;var Q=g.vertical?"top":"left",ee=a.get.offset(g.container),ce=a.get.offset(j);E||(ee[Q]-=m.scrollPos()),m.scrollTo(ce[Q]-ee[Q],B)}else I(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",R)}return m},this.scrollPos=function(R){if(arguments.length)a.type.Function(R)?O=R:I(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");else return O.call(m);return m},this.info=function(R){var B={size:w,vertical:g.vertical,scrollPos:_,scrollDirection:b,container:g.container,isDocument:E};if(arguments.length){if(B[R]!==void 0)return B[R];I(1,'ERROR: option "'+R+'" is not available');return}else return B},this.loglevel=function(R){if(arguments.length)g.loglevel!=R&&(g.loglevel=R);else return g.loglevel;return m},this.enabled=function(R){if(arguments.length)x!=R&&(x=!!R,m.updateScene(f,!0));else return x;return m},this.destroy=function(R){window.clearTimeout(y);for(var B=f.length;B--;)f[B].destroy(R);return g.container.removeEventListener("resize",H),g.container.removeEventListener("scroll",H),a.cAF(C),I(3,"destroyed "+l+" (reset: "+(R?"true":"false")+")"),null},v(),m};var i={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};t.Controller.addOption=function(o,l){i.defaults[o]=l},t.Controller.extend=function(o){var l=this;t.Controller=function(){return l.apply(this,arguments),this.$super=a.extend({},this),o.apply(this,arguments)||this},a.extend(t.Controller,l),t.Controller.prototype=l.prototype,t.Controller.prototype.constructor=t.Controller},t.Scene=function(o){var l="ScrollMagic.Scene",c="BEFORE",u="DURING",h="AFTER",d=r.defaults,m=this,g=a.extend({},d,o),f=c,p=0,_={start:0,end:0},b=0,E=!0,w,x,C=function(){for(var A in g)d.hasOwnProperty(A)||(v(2,'WARNING: Unknown option "'+A+'"'),delete g[A]);for(var te in d)G(te);D()},y={};this.on=function(A,te){return a.type.Function(te)?(A=A.trim().split(" "),A.forEach(function(ie){var ue=ie.split("."),$=ue[0],me=ue[1];$!="*"&&(y[$]||(y[$]=[]),y[$].push({namespace:me||"",callback:te}))})):v(1,"ERROR when calling '.on()': Supplied callback for '"+A+"' is not a valid function!"),m},this.off=function(A,te){return A?(A=A.trim().split(" "),A.forEach(function(ie,ue){var $=ie.split("."),me=$[0],ge=$[1]||"",_e=me==="*"?Object.keys(y):[me];_e.forEach(function(ke){for(var Ue=y[ke]||[],$e=Ue.length;$e--;){var ct=Ue[$e];ct&&(ge===ct.namespace||ge==="*")&&(!te||te==ct.callback)&&Ue.splice($e,1)}Ue.length||delete y[ke]})}),m):(v(1,"ERROR: Invalid event name supplied."),m)},this.trigger=function(A,te){if(A){var ie=A.trim().split("."),ue=ie[0],$=ie[1],me=y[ue];v(3,"event fired:",ue,te?"->":"",te||""),me&&me.forEach(function(ge,_e){(!$||$===ge.namespace)&&ge.callback.call(m,new t.Event(ue,ge.namespace,m,te))})}else v(1,"ERROR: Invalid event name supplied.");return m},m.on("change.internal",function(A){A.what!=="loglevel"&&A.what!=="tweenChanges"&&(A.what==="triggerElement"?F():A.what==="reverse"&&m.update())}).on("shift.internal",function(A){M(),m.update()});var v=this._log=function(A,te){g.loglevel>=A&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),a.log.apply(window,arguments))};this.addTo=function(A){return A instanceof t.Controller?x!=A&&(x&&x.removeScene(m),x=A,D(),O(!0),F(!0),M(),x.info("container").addEventListener("resize",K),A.addScene(m),m.trigger("add",{controller:x}),v(3,"added "+l+" to controller"),m.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),m},this.enabled=function(A){if(arguments.length)E!=A&&(E=!!A,m.update(!0));else return E;return m},this.remove=function(){if(x){x.info("container").removeEventListener("resize",K);var A=x;x=void 0,A.removeScene(m),m.trigger("remove"),v(3,"removed "+l+" from controller")}return m},this.destroy=function(A){return m.trigger("destroy",{reset:A}),m.remove(),m.off("*.*"),v(3,"destroyed "+l+" (reset: "+(A?"true":"false")+")"),null},this.update=function(A){if(x)if(A)if(x.enabled()&&E){var te=x.info("scrollPos"),ie;g.duration>0?ie=(te-_.start)/(_.end-_.start):ie=te>=_.start?1:0,m.trigger("update",{startPos:_.start,endPos:_.end,scrollPos:te}),m.progress(ie)}else I&&f===u&&R(!0);else x.updateScene(m,!1);return m},this.refresh=function(){return O(),F(),m},this.progress=function(A){if(arguments.length){var te=!1,ie=f,ue=x?x.info("scrollDirection"):"PAUSED",$=g.reverse||A>=p;if(g.duration===0?(te=p!=A,p=A<1&&$?0:1,f=p===0?c:u):A<0&&f!==c&&$?(p=0,f=c,te=!0):A>=0&&A<1&&$?(p=A,f=u,te=!0):A>=1&&f!==h?(p=1,f=h,te=!0):f===u&&!$&&R(),te){var me={progress:p,state:f,scrollDirection:ue},ge=f!=ie,_e=function(ke){m.trigger(ke,me)};ge&&ie!==u&&(_e("enter"),_e(ie===c?"start":"end")),_e("progress"),ge&&f!==u&&(_e(f===c?"start":"end"),_e("leave"))}return m}else return p};var M=function(){_={start:b+g.offset},x&&g.triggerElement&&(_.start-=x.info("size")*g.triggerHook),_.end=_.start+g.duration},O=function(A){if(w){var te="duration";H(te,w.call(m))&&!A&&(m.trigger("change",{what:te,newval:g[te]}),m.trigger("shift",{reason:te}))}},F=function(A){var te=0,ie=g.triggerElement;if(x&&(ie||b>0)){if(ie)if(ie.parentNode){for(var ue=x.info(),$=a.get.offset(ue.container),me=ue.vertical?"top":"left";ie.parentNode.hasAttribute(n);)ie=ie.parentNode;var ge=a.get.offset(ie);ue.isDocument||($[me]-=x.scrollPos()),te=ge[me]-$[me]}else v(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),m.triggerElement(void 0);var _e=te!=b;b=te,_e&&!A&&m.trigger("shift",{reason:"triggerElementPosition"})}},K=function(A){g.triggerHook>0&&m.trigger("shift",{reason:"containerResize"})},Y=a.extend(r.validate,{duration:function(A){if(a.type.String(A)&&A.match(/^(\.|\d)*\d+%$/)){var te=parseFloat(A)/100;A=function(){return x?x.info("size")*te:0}}if(a.type.Function(A)){w=A;try{A=parseFloat(w.call(m))}catch{A=-1}}if(A=parseFloat(A),!a.type.Number(A)||A<0)throw w?(w=void 0,['Invalid return value of supplied function for option "duration":',A]):['Invalid value for option "duration":',A];return A}}),D=function(A){A=arguments.length?[A]:Object.keys(Y),A.forEach(function(te,ie){var ue;if(Y[te])try{ue=Y[te](g[te])}catch(me){ue=d[te];var $=a.type.String(me)?[me]:me;a.type.Array($)?($[0]="ERROR: "+$[0],$.unshift(1),v.apply(this,$)):v(1,"ERROR: Problem executing validation callback for option '"+te+"':",me.message)}finally{g[te]=ue}})},H=function(A,te){var ie=!1,ue=g[A];return g[A]!=te&&(g[A]=te,D(A),ie=ue!=g[A]),ie},G=function(A){m[A]||(m[A]=function(te){if(arguments.length)A==="duration"&&(w=void 0),H(A,te)&&(m.trigger("change",{what:A,newval:g[A]}),r.shifts.indexOf(A)>-1&&m.trigger("shift",{reason:A}));else return g[A];return m})};this.controller=function(){return x},this.state=function(){return f},this.scrollOffset=function(){return _.start},this.triggerPosition=function(){var A=g.offset;return x&&(g.triggerElement?A+=b:A+=x.info("size")*m.triggerHook()),A};var I,N;m.on("shift.internal",function(A){var te=A.reason==="duration";(f===h&&te||f===u&&g.duration===0)&&R(),te&&B()}).on("progress.internal",function(A){R()}).on("add.internal",function(A){B()}).on("destroy.internal",function(A){m.removePin(A.reset)});var R=function(A){if(I&&x){var te=x.info(),ie=N.spacer.firstChild;if(!A&&f===u){a.css(ie,"position")!="fixed"&&(a.css(ie,{position:"fixed"}),B());var ue=a.get.offset(N.spacer,!0),$=g.reverse||g.duration===0?te.scrollPos-_.start:Math.round(p*g.duration*10)/10;ue[te.vertical?"top":"left"]+=$,a.css(N.spacer.firstChild,{top:ue.top,left:ue.left})}else{var me={position:N.inFlow?"relative":"absolute",top:0,left:0},ge=a.css(ie,"position")!=me.position;N.pushFollowers?g.duration>0&&(f===h&&parseFloat(a.css(N.spacer,"padding-top"))===0||f===c&&parseFloat(a.css(N.spacer,"padding-bottom"))===0)&&(ge=!0):me[te.vertical?"top":"left"]=g.duration*p,a.css(ie,me),ge&&B()}}},B=function(){if(I&&x&&N.inFlow){var A=f===u,te=x.info("vertical"),ie=N.spacer.firstChild,ue=a.isMarginCollapseType(a.css(N.spacer,"display")),$={};N.relSize.width||N.relSize.autoFullWidth?A?a.css(I,{width:a.get.width(N.spacer)}):a.css(I,{width:"100%"}):($["min-width"]=a.get.width(te?I:ie,!0,!0),$.width=A?$["min-width"]:"auto"),N.relSize.height?A?a.css(I,{height:a.get.height(N.spacer)-(N.pushFollowers?g.duration:0)}):a.css(I,{height:"100%"}):($["min-height"]=a.get.height(te?ie:I,!0,!ue),$.height=A?$["min-height"]:"auto"),N.pushFollowers&&($["padding"+(te?"Top":"Left")]=g.duration*p,$["padding"+(te?"Bottom":"Right")]=g.duration*(1-p)),a.css(N.spacer,$)}},j=function(){x&&I&&f===u&&!x.info("isDocument")&&R()},Q=function(){x&&I&&f===u&&((N.relSize.width||N.relSize.autoFullWidth)&&a.get.width(window)!=a.get.width(N.spacer.parentNode)||N.relSize.height&&a.get.height(window)!=a.get.height(N.spacer.parentNode))&&B()},ee=function(A){x&&I&&f===u&&!x.info("isDocument")&&(A.preventDefault(),x._setScrollPos(x.info("scrollPos")-((A.wheelDelta||A[x.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-A.detail*30)))};this.setPin=function(A,te){var ie={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},ue=te&&te.hasOwnProperty("pushFollowers");if(te=a.extend({},ie,te),A=a.get.elements(A)[0],A){if(a.css(A,"position")==="fixed")return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),m}else return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),m;if(I){if(I===A)return m;m.removePin()}I=A;var $=I.parentNode.style.display,me=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];I.parentNode.style.display="none";var ge=a.css(I,"position")!="absolute",_e=a.css(I,me.concat(["display"])),ke=a.css(I,["width","height"]);I.parentNode.style.display=$,!ge&&te.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),te.pushFollowers=!1),window.setTimeout(function(){I&&g.duration===0&&ue&&te.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var Ue=I.parentNode.insertBefore(document.createElement("div"),I),$e=a.extend(_e,{position:ge?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(ge||a.extend($e,a.css(I,["width","height"])),a.css(Ue,$e),Ue.setAttribute(n,""),a.addClass(Ue,te.spacerClass),N={spacer:Ue,relSize:{width:ke.width.slice(-1)==="%",height:ke.height.slice(-1)==="%",autoFullWidth:ke.width==="auto"&&ge&&a.isMarginCollapseType(_e.display)},pushFollowers:te.pushFollowers,inFlow:ge},!I.___origStyle){I.___origStyle={};var ct=I.style,Qe=me.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);Qe.forEach(function(Fe){I.___origStyle[Fe]=ct[Fe]||""})}return N.relSize.width&&a.css(Ue,{width:ke.width}),N.relSize.height&&a.css(Ue,{height:ke.height}),Ue.appendChild(I),a.css(I,{position:ge?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(N.relSize.width||N.relSize.autoFullWidth)&&a.css(I,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",j),window.addEventListener("resize",j),window.addEventListener("resize",Q),I.addEventListener("mousewheel",ee),I.addEventListener("DOMMouseScroll",ee),v(3,"added pin"),R(),m},this.removePin=function(A){if(I){if(f===u&&R(!0),A||!x){var te=N.spacer.firstChild;if(te.hasAttribute(n)){var ie=N.spacer.style,ue=["margin","marginLeft","marginRight","marginTop","marginBottom"],$={};ue.forEach(function(me){$[me]=ie[me]||""}),a.css(te,$)}N.spacer.parentNode.insertBefore(te,N.spacer),N.spacer.parentNode.removeChild(N.spacer),I.parentNode.hasAttribute(n)||(a.css(I,I.___origStyle),delete I.___origStyle)}window.removeEventListener("scroll",j),window.removeEventListener("resize",j),window.removeEventListener("resize",Q),I.removeEventListener("mousewheel",ee),I.removeEventListener("DOMMouseScroll",ee),I=void 0,v(3,"removed pin (reset: "+(A?"true":"false")+")")}return m};var ce,ve=[];return m.on("destroy.internal",function(A){m.removeClassToggle(A.reset)}),this.setClassToggle=function(A,te){var ie=a.get.elements(A);return ie.length===0||!a.type.String(te)?(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(ie.length===0?"element":"classes")+" supplied."),m):(ve.length>0&&m.removeClassToggle(),ce=te,ve=ie,m.on("enter.internal_class leave.internal_class",function(ue){var $=ue.type==="enter"?a.addClass:a.removeClass;ve.forEach(function(me,ge){$(me,ce)})}),m)},this.removeClassToggle=function(A){return A&&ve.forEach(function(te,ie){a.removeClass(te,ce)}),m.off("start.internal_class end.internal_class"),ce=void 0,ve=[],m},C(),m};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(o){if(o=parseFloat(o),!a.type.Number(o))throw['Invalid value for option "offset":',o];return o},triggerElement:function(o){if(o=o||void 0,o){var l=a.get.elements(o)[0];if(l&&l.parentNode)o=l;else throw['Element defined in option "triggerElement" was not found:',o]}return o},triggerHook:function(o){var l={onCenter:.5,onEnter:1,onLeave:0};if(a.type.Number(o))o=Math.max(0,Math.min(parseFloat(o),1));else if(o in l)o=l[o];else throw['Invalid value for option "triggerHook": ',o];return o},reverse:function(o){return!!o},loglevel:function(o){if(o=parseInt(o),!a.type.Number(o)||o<0||o>3)throw['Invalid value for option "loglevel":',o];return o}},shifts:["duration","offset","triggerHook"]};t.Scene.addOption=function(o,l,c,u){o in r.defaults?t._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+o+"', because it already exists."):(r.defaults[o]=l,r.validate[o]=c,u&&r.shifts.push(o))},t.Scene.extend=function(o){var l=this;t.Scene=function(){return l.apply(this,arguments),this.$super=a.extend({},this),o.apply(this,arguments)||this},a.extend(t.Scene,l),t.Scene.prototype=l.prototype,t.Scene.prototype.constructor=t.Scene},t.Event=function(o,l,c,u){u=u||{};for(var h in u)this[h]=u[h];return this.type=o,this.target=this.currentTarget=c,this.namespace=l||"",this.timeStamp=this.timestamp=Date.now(),this};var a=t._util=function(o){var l={},c,u=function(y){return parseFloat(y)||0},h=function(y){return y.currentStyle?y.currentStyle:o.getComputedStyle(y)},d=function(y,v,M,O){if(v=v===document?o:v,v===o)O=!1;else if(!x.DomElement(v))return 0;y=y.charAt(0).toUpperCase()+y.substr(1).toLowerCase();var F=(M?v["offset"+y]||v["outer"+y]:v["client"+y]||v["inner"+y])||0;if(M&&O){var K=h(v);F+=y==="Height"?u(K.marginTop)+u(K.marginBottom):u(K.marginLeft)+u(K.marginRight)}return F},m=function(y){return y.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(v){return v[1].toUpperCase()})};l.extend=function(y){for(y=y||{},c=1;c<arguments.length;c++)if(!!arguments[c])for(var v in arguments[c])arguments[c].hasOwnProperty(v)&&(y[v]=arguments[c][v]);return y},l.isMarginCollapseType=function(y){return["block","flex","list-item","table","-webkit-box"].indexOf(y)>-1};var g=0,f=["ms","moz","webkit","o"],p=o.requestAnimationFrame,_=o.cancelAnimationFrame;for(c=0;!p&&c<f.length;++c)p=o[f[c]+"RequestAnimationFrame"],_=o[f[c]+"CancelAnimationFrame"]||o[f[c]+"CancelRequestAnimationFrame"];p||(p=function(y){var v=new Date().getTime(),M=Math.max(0,16-(v-g)),O=o.setTimeout(function(){y(v+M)},M);return g=v+M,O}),_||(_=function(y){o.clearTimeout(y)}),l.rAF=p.bind(o),l.cAF=_.bind(o);var b=["error","warn","log"],E=o.console||{};for(E.log=E.log||function(){},c=0;c<b.length;c++){var w=b[c];E[w]||(E[w]=E.log)}l.log=function(y){(y>b.length||y<=0)&&(y=b.length);var v=new Date,M=("0"+v.getHours()).slice(-2)+":"+("0"+v.getMinutes()).slice(-2)+":"+("0"+v.getSeconds()).slice(-2)+":"+("00"+v.getMilliseconds()).slice(-3),O=b[y-1],F=Array.prototype.splice.call(arguments,1),K=Function.prototype.bind.call(E[O],E);F.unshift(M),K.apply(E,F)};var x=l.type=function(y){return Object.prototype.toString.call(y).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};x.String=function(y){return x(y)==="string"},x.Function=function(y){return x(y)==="function"},x.Array=function(y){return Array.isArray(y)},x.Number=function(y){return!x.Array(y)&&y-parseFloat(y)+1>=0},x.DomElement=function(y){return typeof HTMLElement=="object"||typeof HTMLElement=="function"?y instanceof HTMLElement||y instanceof SVGElement:y&&typeof y=="object"&&y!==null&&y.nodeType===1&&typeof y.nodeName=="string"};var C=l.get={};return C.elements=function(y){var v=[];if(x.String(y))try{y=document.querySelectorAll(y)}catch{return v}if(x(y)==="nodelist"||x.Array(y)||y instanceof NodeList)for(var M=0,O=v.length=y.length;M<O;M++){var F=y[M];v[M]=x.DomElement(F)?F:C.elements(F)}else(x.DomElement(y)||y===document||y===o)&&(v=[y]);return v},C.scrollTop=function(y){return y&&typeof y.scrollTop=="number"?y.scrollTop:o.pageYOffset||0},C.scrollLeft=function(y){return y&&typeof y.scrollLeft=="number"?y.scrollLeft:o.pageXOffset||0},C.width=function(y,v,M){return d("width",y,v,M)},C.height=function(y,v,M){return d("height",y,v,M)},C.offset=function(y,v){var M={top:0,left:0};if(y&&y.getBoundingClientRect){var O=y.getBoundingClientRect();M.top=O.top,M.left=O.left,v||(M.top+=C.scrollTop(),M.left+=C.scrollLeft())}return M},l.addClass=function(y,v){v&&(y.classList?y.classList.add(v):y.className+=" "+v)},l.removeClass=function(y,v){v&&(y.classList?y.classList.remove(v):y.className=y.className.replace(new RegExp("(^|\\b)"+v.split(" ").join("|")+"(\\b|$)","gi")," "))},l.css=function(y,v){if(x.String(v))return h(y)[m(v)];if(x.Array(v)){var M={},O=h(y);return v.forEach(function(Y,D){M[Y]=O[m(Y)]}),M}else for(var F in v){var K=v[F];K==parseFloat(K)&&(K+="px"),y.style[m(F)]=K}},l}(window||{});return t.Scene.prototype.addIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.removeIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.setTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.removeTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.setVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t.Scene.prototype.removeVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t})})(Tf);var Cf=Tf.exports;const ty=new Cf.Controller;window.innerWidth>705?Au(-300):Au(-1);function Au(s){new Cf.Scene({triggerElement:".main-about",offset:s}).setClassToggle(".main-about","fade-in").addTo(ty)}class St{constructor(e,t={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.glare=St.isSettingTrue(this.settings.glare),this.glarePrerender=St.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=St.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=St.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,i=t/this.width,r=n/this.height,a=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),o=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=a/i,c=o/r;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:c+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(this.settings.startX===0&&this.settings.startY===0)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}getValues(){let e,t;this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);let n=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),i=(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),r=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:n,tiltY:i,percentageX:e*100,percentageY:t*100,angle:r}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var i in t)if(i in e)n[i]=e[i];else if(this.element.hasAttribute("data-tilt-"+i)){let r=this.element.getAttribute("data-tilt-"+i);try{n[i]=JSON.parse(r)}catch{n[i]=r}}else n[i]=t[i];return n}static init(e,t){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(n=>{"vanillaTilt"in n||(n.vanillaTilt=new St(n,t))})}}typeof document!="undefined"&&(window.VanillaTilt=St,St.init(document.querySelectorAll("[data-tilt]")));let ny=document.querySelector(".myimg"),iy=document.querySelectorAll(".project"),ry=document.querySelector(".main-body .left"),sy=document.querySelectorAll(".main-title"),ay=document.querySelector(".main-about .main-description"),oy=document.querySelectorAll(".input");window.innerWidth>705&&(St.init(ny,{reverse:!0,speed:700,reset:!1,max:10}),St.init(iy,{reverse:!0,speed:1500,reset:!1,max:20}),St.init(ry,{reverse:!0,speed:1500,reset:!1,max:20}),St.init(sy,{reverse:!0,speed:1500,reset:!1,max:20}),St.init(ay,{reverse:!0,speed:1500,reset:!1,max:5}),St.init(oy,{reverse:!0,speed:700,reset:!0,max:3}));let Lu=document.getElementById("logo");window.addEventListener("scroll",()=>{window.innerWidth<705&&(window.scrollY>100?Lu.style.fontSize="1rem":Lu.style.fontSize="2rem")});
