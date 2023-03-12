const ep=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};ep();var Dn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ko={},Rh={},bl={exports:{}},Lh=function(e,t){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(t,i)}},tp=Lh,ci=Object.prototype.toString;function Sl(r){return Array.isArray(r)}function Vo(r){return typeof r=="undefined"}function np(r){return r!==null&&!Vo(r)&&r.constructor!==null&&!Vo(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Dh(r){return ci.call(r)==="[object ArrayBuffer]"}function ip(r){return ci.call(r)==="[object FormData]"}function rp(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Dh(r.buffer),e}function sp(r){return typeof r=="string"}function ap(r){return typeof r=="number"}function Oh(r){return r!==null&&typeof r=="object"}function na(r){if(ci.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function op(r){return ci.call(r)==="[object Date]"}function lp(r){return ci.call(r)==="[object File]"}function cp(r){return ci.call(r)==="[object Blob]"}function Fh(r){return ci.call(r)==="[object Function]"}function up(r){return Oh(r)&&Fh(r.pipe)}function hp(r){return ci.call(r)==="[object URLSearchParams]"}function dp(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function fp(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Ml(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Sl(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.call(null,r[i],i,r)}function Go(){var r={};function e(i,s){na(r[s])&&na(i)?r[s]=Go(r[s],i):na(i)?r[s]=Go({},i):Sl(i)?r[s]=i.slice():r[s]=i}for(var t=0,n=arguments.length;t<n;t++)Ml(arguments[t],e);return r}function pp(r,e,t){return Ml(e,function(i,s){t&&typeof i=="function"?r[s]=tp(i,t):r[s]=i}),r}function mp(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var Rt={isArray:Sl,isArrayBuffer:Dh,isBuffer:np,isFormData:ip,isArrayBufferView:rp,isString:sp,isNumber:ap,isObject:Oh,isPlainObject:na,isUndefined:Vo,isDate:op,isFile:lp,isBlob:cp,isFunction:Fh,isStream:up,isURLSearchParams:hp,isStandardBrowserEnv:fp,forEach:Ml,merge:Go,extend:pp,trim:dp,stripBOM:mp},Vi=Rt;function xc(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ih=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(Vi.isURLSearchParams(t))i=t.toString();else{var s=[];Vi.forEach(t,function(l,c){l===null||typeof l=="undefined"||(Vi.isArray(l)?c=c+"[]":l=[l],Vi.forEach(l,function(h){Vi.isDate(h)?h=h.toISOString():Vi.isObject(h)&&(h=JSON.stringify(h)),s.push(xc(c)+"="+xc(h))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},gp=Rt;function Ea(){this.handlers=[]}Ea.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Ea.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Ea.prototype.forEach=function(e){gp.forEach(this.handlers,function(n){n!==null&&e(n)})};var _p=Ea,vp=Rt,xp=function(e,t){vp.forEach(e,function(i,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[s])})},Nh=function(e,t,n,i,s){return e.config=t,n&&(e.code=n),e.request=i,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},zh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yp=Nh,Bh=function(e,t,n,i,s){var o=new Error(e);return yp(o,t,n,i,s)},bp=Bh,Sp=function(e,t,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(bp("Request failed with status code "+n.status,n.config,null,n.request,n))},As=Rt,Mp=As.isStandardBrowserEnv()?function(){return{write:function(t,n,i,s,o,a){var l=[];l.push(t+"="+encodeURIComponent(n)),As.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),As.isString(s)&&l.push("path="+s),As.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),wp=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ep=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},Tp=wp,Ap=Ep,Cp=function(e,t){return e&&!Tp(t)?Ap(e,t):t},ja=Rt,Pp=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Rp=function(e){var t={},n,i,s;return e&&ja.forEach(e.split(`
`),function(a){if(s=a.indexOf(":"),n=ja.trim(a.substr(0,s)).toLowerCase(),i=ja.trim(a.substr(s+1)),n){if(t[n]&&Pp.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([i]):t[n]=t[n]?t[n]+", "+i:i}}),t},yc=Rt,Lp=yc.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function i(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(o){var a=yc.isString(o)?i(o):o;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function wl(r){this.message=r}wl.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};wl.prototype.__CANCEL__=!0;var Ta=wl,Cs=Rt,Dp=Sp,Op=Mp,Fp=Ih,Ip=Cp,Np=Rp,zp=Lp,qa=Bh,Bp=zh,Up=Ta,bc=function(e){return new Promise(function(n,i){var s=e.data,o=e.headers,a=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}Cs.isFormData(s)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+d)}var p=Ip(e.baseURL,e.url);u.open(e.method.toUpperCase(),Fp(p,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function g(){if(!!u){var m="getAllResponseHeaders"in u?Np(u.getAllResponseHeaders()):null,_=!a||a==="text"||a==="json"?u.responseText:u.response,y={data:_,status:u.status,statusText:u.statusText,headers:m,config:e,request:u};Dp(function(M){n(M),c()},function(M){i(M),c()},y),u=null}}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){!u||(i(qa("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){i(qa("Network Error",e,null,u)),u=null},u.ontimeout=function(){var _=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",y=e.transitional||Bp;e.timeoutErrorMessage&&(_=e.timeoutErrorMessage),i(qa(_,e,y.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},Cs.isStandardBrowserEnv()){var f=(e.withCredentials||zp(p))&&e.xsrfCookieName?Op.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}"setRequestHeader"in u&&Cs.forEach(o,function(_,y){typeof s=="undefined"&&y.toLowerCase()==="content-type"?delete o[y]:u.setRequestHeader(y,_)}),Cs.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(m){!u||(i(!m||m&&m.type?new Up("canceled"):m),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),u.send(s)})},lt=Rt,Sc=xp,kp=Nh,Vp=zh,Gp={"Content-Type":"application/x-www-form-urlencoded"};function Mc(r,e){!lt.isUndefined(r)&&lt.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Hp(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=bc),r}function Wp(r,e,t){if(lt.isString(r))try{return(e||JSON.parse)(r),lt.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var Aa={transitional:Vp,adapter:Hp(),transformRequest:[function(e,t){return Sc(t,"Accept"),Sc(t,"Content-Type"),lt.isFormData(e)||lt.isArrayBuffer(e)||lt.isBuffer(e)||lt.isStream(e)||lt.isFile(e)||lt.isBlob(e)?e:lt.isArrayBufferView(e)?e.buffer:lt.isURLSearchParams(e)?(Mc(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):lt.isObject(e)||t&&t["Content-Type"]==="application/json"?(Mc(t,"application/json"),Wp(e)):e}],transformResponse:[function(e){var t=this.transitional||Aa.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||i&&lt.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?kp(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};lt.forEach(["delete","get","head"],function(e){Aa.headers[e]={}});lt.forEach(["post","put","patch"],function(e){Aa.headers[e]=lt.merge(Gp)});var El=Aa,jp=Rt,qp=El,Xp=function(e,t,n){var i=this||qp;return jp.forEach(n,function(o){e=o.call(i,e,t)}),e},Uh=function(e){return!!(e&&e.__CANCEL__)},wc=Rt,Xa=Xp,Yp=Uh,$p=El,Zp=Ta;function Ya(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Zp("canceled")}var Jp=function(e){Ya(e),e.headers=e.headers||{},e.data=Xa.call(e,e.data,e.headers,e.transformRequest),e.headers=wc.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),wc.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||$p.adapter;return t(e).then(function(i){return Ya(e),i.data=Xa.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Yp(i)||(Ya(e),i&&i.response&&(i.response.data=Xa.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},Lt=Rt,kh=function(e,t){t=t||{};var n={};function i(u,h){return Lt.isPlainObject(u)&&Lt.isPlainObject(h)?Lt.merge(u,h):Lt.isPlainObject(h)?Lt.merge({},h):Lt.isArray(h)?h.slice():h}function s(u){if(Lt.isUndefined(t[u])){if(!Lt.isUndefined(e[u]))return i(void 0,e[u])}else return i(e[u],t[u])}function o(u){if(!Lt.isUndefined(t[u]))return i(void 0,t[u])}function a(u){if(Lt.isUndefined(t[u])){if(!Lt.isUndefined(e[u]))return i(void 0,e[u])}else return i(void 0,t[u])}function l(u){if(u in t)return i(e[u],t[u]);if(u in e)return i(void 0,e[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return Lt.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var d=c[h]||s,p=d(h);Lt.isUndefined(p)&&d!==l||(n[h]=p)}),n},Vh={version:"0.26.1"},Kp=Vh.version,Tl={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){Tl[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Ec={};Tl.transitional=function(e,t,n){function i(s,o){return"[Axios v"+Kp+"] Transitional option '"+s+"'"+o+(n?". "+n:"")}return function(s,o,a){if(e===!1)throw new Error(i(o," has been removed"+(t?" in "+t:"")));return t&&!Ec[o]&&(Ec[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Qp(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),i=n.length;i-- >0;){var s=n[i],o=e[s];if(o){var a=r[s],l=a===void 0||o(a,s,r);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+s)}}var em={assertOptions:Qp,validators:Tl},Gh=Rt,tm=Ih,Tc=_p,Ac=Jp,Ca=kh,Hh=em,Gi=Hh.validators;function _s(r){this.defaults=r,this.interceptors={request:new Tc,response:new Tc}}_s.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ca(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&Hh.assertOptions(n,{silentJSONParsing:Gi.transitional(Gi.boolean),forcedJSONParsing:Gi.transitional(Gi.boolean),clarifyTimeoutError:Gi.transitional(Gi.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(s=s&&p.synchronous,i.unshift(p.fulfilled,p.rejected))});var o=[];this.interceptors.response.forEach(function(p){o.push(p.fulfilled,p.rejected)});var a;if(!s){var l=[Ac,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(o),a=Promise.resolve(t);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=t;i.length;){var u=i.shift(),h=i.shift();try{c=u(c)}catch(d){h(d);break}}try{a=Ac(c)}catch(d){return Promise.reject(d)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};_s.prototype.getUri=function(e){return e=Ca(this.defaults,e),tm(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Gh.forEach(["delete","get","head","options"],function(e){_s.prototype[e]=function(t,n){return this.request(Ca(n||{},{method:e,url:t,data:(n||{}).data}))}});Gh.forEach(["post","put","patch"],function(e){_s.prototype[e]=function(t,n,i){return this.request(Ca(i||{},{method:e,url:t,data:n}))}});var nm=_s,im=Ta;function xr(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var t=this;this.promise.then(function(n){if(!!t._listeners){var i,s=t._listeners.length;for(i=0;i<s;i++)t._listeners[i](n);t._listeners=null}}),this.promise.then=function(n){var i,s=new Promise(function(o){t.subscribe(o),i=o}).then(n);return s.cancel=function(){t.unsubscribe(i)},s},r(function(i){t.reason||(t.reason=new im(i),e(t.reason))})}xr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};xr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};xr.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};xr.source=function(){var e,t=new xr(function(i){e=i});return{token:t,cancel:e}};var rm=xr,sm=function(e){return function(n){return e.apply(null,n)}},am=Rt,om=function(e){return am.isObject(e)&&e.isAxiosError===!0},Cc=Rt,lm=Lh,ia=nm,cm=kh,um=El;function Wh(r){var e=new ia(r),t=lm(ia.prototype.request,e);return Cc.extend(t,ia.prototype,e),Cc.extend(t,e),t.create=function(i){return Wh(cm(r,i))},t}var bn=Wh(um);bn.Axios=ia;bn.Cancel=Ta;bn.CancelToken=rm;bn.isCancel=Uh;bn.VERSION=Vh.version;bn.all=function(e){return Promise.all(e)};bn.spread=sm;bn.isAxiosError=om;bl.exports=bn;bl.exports.default=bn;var jh=bl.exports,Ye={},Al={};(function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.RequiredError=r.BaseAPI=r.COLLECTION_FORMATS=r.BASE_PATH=void 0;const e=jh;r.BASE_PATH="https://api.openai.com/v1".replace(/\/+$/,""),r.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"	",pipes:"|"};class t{constructor(s,o=r.BASE_PATH,a=e.default){this.basePath=o,this.axios=a,s&&(this.configuration=s,this.basePath=s.basePath||this.basePath)}}r.BaseAPI=t;class n extends Error{constructor(s,o){super(o),this.field=s,this.name="RequiredError"}}r.RequiredError=n})(Al);var Cl=Dn&&Dn.__awaiter||function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(n.next(u))}catch(h){o(h)}}function l(u){try{c(n.throw(u))}catch(h){o(h)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((n=n.apply(r,e||[])).next())})};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.createRequestFunction=Ye.toPathString=Ye.serializeDataIfNeeded=Ye.setSearchParams=Ye.setOAuthToObject=Ye.setBearerAuthToObject=Ye.setBasicAuthToObject=Ye.setApiKeyToObject=Ye.assertParamExists=Ye.DUMMY_BASE_URL=void 0;const hm=Al;Ye.DUMMY_BASE_URL="https://example.com";Ye.assertParamExists=function(r,e,t){if(t==null)throw new hm.RequiredError(e,`Required parameter ${e} was null or undefined when calling ${r}.`)};Ye.setApiKeyToObject=function(r,e,t){return Cl(this,void 0,void 0,function*(){if(t&&t.apiKey){const n=typeof t.apiKey=="function"?yield t.apiKey(e):yield t.apiKey;r[e]=n}})};Ye.setBasicAuthToObject=function(r,e){e&&(e.username||e.password)&&(r.auth={username:e.username,password:e.password})};Ye.setBearerAuthToObject=function(r,e){return Cl(this,void 0,void 0,function*(){if(e&&e.accessToken){const t=typeof e.accessToken=="function"?yield e.accessToken():yield e.accessToken;r.Authorization="Bearer "+t}})};Ye.setOAuthToObject=function(r,e,t,n){return Cl(this,void 0,void 0,function*(){if(n&&n.accessToken){const i=typeof n.accessToken=="function"?yield n.accessToken(e,t):yield n.accessToken;r.Authorization="Bearer "+i}})};function Ho(r,e,t=""){typeof e=="object"?Array.isArray(e)?e.forEach(n=>Ho(r,n,t)):Object.keys(e).forEach(n=>Ho(r,e[n],`${t}${t!==""?".":""}${n}`)):r.has(t)?r.append(t,e):r.set(t,e)}Ye.setSearchParams=function(r,...e){const t=new URLSearchParams(r.search);Ho(t,e),r.search=t.toString()};Ye.serializeDataIfNeeded=function(r,e,t){const n=typeof r!="string";return(n&&t&&t.isJsonMime?t.isJsonMime(e.headers["Content-Type"]):n)?JSON.stringify(r!==void 0?r:{}):r||""};Ye.toPathString=function(r){return r.pathname+r.search+r.hash};Ye.createRequestFunction=function(r,e,t,n){return(i=e,s=t)=>{const o=Object.assign(Object.assign({},r.options),{url:((n==null?void 0:n.basePath)||s)+r.url});return i.request(o)}};(function(r){var e=Dn&&Dn.__awaiter||function(o,a,l,c){function u(h){return h instanceof l?h:new l(function(d){d(h)})}return new(l||(l=Promise))(function(h,d){function p(m){try{f(c.next(m))}catch(_){d(_)}}function g(m){try{f(c.throw(m))}catch(_){d(_)}}function f(m){m.done?h(m.value):u(m.value).then(p,g)}f((c=c.apply(o,a||[])).next())})};Object.defineProperty(r,"__esModule",{value:!0}),r.OpenAIApi=r.OpenAIApiFactory=r.OpenAIApiFp=r.OpenAIApiAxiosParamCreator=r.CreateImageRequestResponseFormatEnum=r.CreateImageRequestSizeEnum=void 0;const t=jh,n=Ye,i=Al;r.CreateImageRequestSizeEnum={_256x256:"256x256",_512x512:"512x512",_1024x1024:"1024x1024"},r.CreateImageRequestResponseFormatEnum={Url:"url",B64Json:"b64_json"},r.OpenAIApiAxiosParamCreator=function(o){return{cancelFineTune:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("cancelFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}/cancel".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),createAnswer:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createAnswer","createAnswerRequest",a);const c="/answers",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createClassification:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createClassification","createClassificationRequest",a);const c="/classifications",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createCompletion:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createCompletion","createCompletionRequest",a);const c="/completions",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createEdit:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createEdit","createEditRequest",a);const c="/edits",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createEmbedding:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createEmbedding","createEmbeddingRequest",a);const c="/embeddings",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createFile:(a,l,c={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createFile","file",a),n.assertParamExists("createFile","purpose",l);const u="/files",h=new URL(u,n.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},d),c),g={},f={},m=new(o&&o.formDataCtor||FormData);a!==void 0&&m.append("file",a),l!==void 0&&m.append("purpose",l),g["Content-Type"]="multipart/form-data",n.setSearchParams(h,f);let _=d&&d.headers?d.headers:{};return p.headers=Object.assign(Object.assign(Object.assign(Object.assign({},g),m.getHeaders()),_),c.headers),p.data=m,{url:n.toPathString(h),options:p}}),createFineTune:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createFineTune","createFineTuneRequest",a);const c="/fine-tunes",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createImage:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createImage","createImageRequest",a);const c="/images/generations",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createImageEdit:(a,l,c,u,h,d,p,g={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createImageEdit","image",a),n.assertParamExists("createImageEdit","mask",l),n.assertParamExists("createImageEdit","prompt",c);const f="/images/edits",m=new URL(f,n.DUMMY_BASE_URL);let _;o&&(_=o.baseOptions);const y=Object.assign(Object.assign({method:"POST"},_),g),E={},M={},x=new(o&&o.formDataCtor||FormData);a!==void 0&&x.append("image",a),l!==void 0&&x.append("mask",l),c!==void 0&&x.append("prompt",c),u!==void 0&&x.append("n",u),h!==void 0&&x.append("size",h),d!==void 0&&x.append("response_format",d),p!==void 0&&x.append("user",p),E["Content-Type"]="multipart/form-data",n.setSearchParams(m,M);let A=_&&_.headers?_.headers:{};return y.headers=Object.assign(Object.assign(Object.assign(Object.assign({},E),x.getHeaders()),A),g.headers),y.data=x,{url:n.toPathString(m),options:y}}),createImageVariation:(a,l,c,u,h,d={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createImageVariation","image",a);const p="/images/variations",g=new URL(p,n.DUMMY_BASE_URL);let f;o&&(f=o.baseOptions);const m=Object.assign(Object.assign({method:"POST"},f),d),_={},y={},E=new(o&&o.formDataCtor||FormData);a!==void 0&&E.append("image",a),l!==void 0&&E.append("n",l),c!==void 0&&E.append("size",c),u!==void 0&&E.append("response_format",u),h!==void 0&&E.append("user",h),_["Content-Type"]="multipart/form-data",n.setSearchParams(g,y);let M=f&&f.headers?f.headers:{};return m.headers=Object.assign(Object.assign(Object.assign(Object.assign({},_),E.getHeaders()),M),d.headers),m.data=E,{url:n.toPathString(g),options:m}}),createModeration:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createModeration","createModerationRequest",a);const c="/moderations",u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"POST"},h),l),p={},g={};p["Content-Type"]="application/json",n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),d.data=n.serializeDataIfNeeded(a,d,o),{url:n.toPathString(u),options:d}}),createSearch:(a,l,c={})=>e(this,void 0,void 0,function*(){n.assertParamExists("createSearch","engineId",a),n.assertParamExists("createSearch","createSearchRequest",l);const u="/engines/{engine_id}/search".replace("{engine_id}",encodeURIComponent(String(a))),h=new URL(u,n.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const p=Object.assign(Object.assign({method:"POST"},d),c),g={},f={};g["Content-Type"]="application/json",n.setSearchParams(h,f);let m=d&&d.headers?d.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),m),c.headers),p.data=n.serializeDataIfNeeded(l,p,o),{url:n.toPathString(h),options:p}}),deleteFile:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("deleteFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"DELETE"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),deleteModel:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("deleteModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"DELETE"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),downloadFile:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("downloadFile","fileId",a);const c="/files/{file_id}/content".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),listEngines:(a={})=>e(this,void 0,void 0,function*(){const l="/engines",c=new URL(l,n.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},p={};n.setSearchParams(c,p);let g=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),g),a.headers),{url:n.toPathString(c),options:h}}),listFiles:(a={})=>e(this,void 0,void 0,function*(){const l="/files",c=new URL(l,n.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},p={};n.setSearchParams(c,p);let g=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),g),a.headers),{url:n.toPathString(c),options:h}}),listFineTuneEvents:(a,l,c={})=>e(this,void 0,void 0,function*(){n.assertParamExists("listFineTuneEvents","fineTuneId",a);const u="/fine-tunes/{fine_tune_id}/events".replace("{fine_tune_id}",encodeURIComponent(String(a))),h=new URL(u,n.DUMMY_BASE_URL);let d;o&&(d=o.baseOptions);const p=Object.assign(Object.assign({method:"GET"},d),c),g={},f={};l!==void 0&&(f.stream=l),n.setSearchParams(h,f);let m=d&&d.headers?d.headers:{};return p.headers=Object.assign(Object.assign(Object.assign({},g),m),c.headers),{url:n.toPathString(h),options:p}}),listFineTunes:(a={})=>e(this,void 0,void 0,function*(){const l="/fine-tunes",c=new URL(l,n.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},p={};n.setSearchParams(c,p);let g=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),g),a.headers),{url:n.toPathString(c),options:h}}),listModels:(a={})=>e(this,void 0,void 0,function*(){const l="/models",c=new URL(l,n.DUMMY_BASE_URL);let u;o&&(u=o.baseOptions);const h=Object.assign(Object.assign({method:"GET"},u),a),d={},p={};n.setSearchParams(c,p);let g=u&&u.headers?u.headers:{};return h.headers=Object.assign(Object.assign(Object.assign({},d),g),a.headers),{url:n.toPathString(c),options:h}}),retrieveEngine:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("retrieveEngine","engineId",a);const c="/engines/{engine_id}".replace("{engine_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),retrieveFile:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("retrieveFile","fileId",a);const c="/files/{file_id}".replace("{file_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),retrieveFineTune:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("retrieveFineTune","fineTuneId",a);const c="/fine-tunes/{fine_tune_id}".replace("{fine_tune_id}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}}),retrieveModel:(a,l={})=>e(this,void 0,void 0,function*(){n.assertParamExists("retrieveModel","model",a);const c="/models/{model}".replace("{model}",encodeURIComponent(String(a))),u=new URL(c,n.DUMMY_BASE_URL);let h;o&&(h=o.baseOptions);const d=Object.assign(Object.assign({method:"GET"},h),l),p={},g={};n.setSearchParams(u,g);let f=h&&h.headers?h.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},p),f),l.headers),{url:n.toPathString(u),options:d}})}},r.OpenAIApiFp=function(o){const a=r.OpenAIApiAxiosParamCreator(o);return{cancelFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.cancelFineTune(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createAnswer(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createAnswer(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createClassification(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createClassification(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createCompletion(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createCompletion(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createEdit(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEdit(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createEmbedding(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createEmbedding(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createFile(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createFile(l,c,u);return n.createRequestFunction(h,t.default,i.BASE_PATH,o)})},createFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createFineTune(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createImage(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createImage(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createImageEdit(l,c,u,h,d,p,g,f){return e(this,void 0,void 0,function*(){const m=yield a.createImageEdit(l,c,u,h,d,p,g,f);return n.createRequestFunction(m,t.default,i.BASE_PATH,o)})},createImageVariation(l,c,u,h,d,p){return e(this,void 0,void 0,function*(){const g=yield a.createImageVariation(l,c,u,h,d,p);return n.createRequestFunction(g,t.default,i.BASE_PATH,o)})},createModeration(l,c){return e(this,void 0,void 0,function*(){const u=yield a.createModeration(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},createSearch(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.createSearch(l,c,u);return n.createRequestFunction(h,t.default,i.BASE_PATH,o)})},deleteFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteFile(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},deleteModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.deleteModel(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},downloadFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.downloadFile(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},listEngines(l){return e(this,void 0,void 0,function*(){const c=yield a.listEngines(l);return n.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listFiles(l){return e(this,void 0,void 0,function*(){const c=yield a.listFiles(l);return n.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listFineTuneEvents(l,c,u){return e(this,void 0,void 0,function*(){const h=yield a.listFineTuneEvents(l,c,u);return n.createRequestFunction(h,t.default,i.BASE_PATH,o)})},listFineTunes(l){return e(this,void 0,void 0,function*(){const c=yield a.listFineTunes(l);return n.createRequestFunction(c,t.default,i.BASE_PATH,o)})},listModels(l){return e(this,void 0,void 0,function*(){const c=yield a.listModels(l);return n.createRequestFunction(c,t.default,i.BASE_PATH,o)})},retrieveEngine(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveEngine(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveFile(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFile(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveFineTune(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveFineTune(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})},retrieveModel(l,c){return e(this,void 0,void 0,function*(){const u=yield a.retrieveModel(l,c);return n.createRequestFunction(u,t.default,i.BASE_PATH,o)})}}},r.OpenAIApiFactory=function(o,a,l){const c=r.OpenAIApiFp(o);return{cancelFineTune(u,h){return c.cancelFineTune(u,h).then(d=>d(l,a))},createAnswer(u,h){return c.createAnswer(u,h).then(d=>d(l,a))},createClassification(u,h){return c.createClassification(u,h).then(d=>d(l,a))},createCompletion(u,h){return c.createCompletion(u,h).then(d=>d(l,a))},createEdit(u,h){return c.createEdit(u,h).then(d=>d(l,a))},createEmbedding(u,h){return c.createEmbedding(u,h).then(d=>d(l,a))},createFile(u,h,d){return c.createFile(u,h,d).then(p=>p(l,a))},createFineTune(u,h){return c.createFineTune(u,h).then(d=>d(l,a))},createImage(u,h){return c.createImage(u,h).then(d=>d(l,a))},createImageEdit(u,h,d,p,g,f,m,_){return c.createImageEdit(u,h,d,p,g,f,m,_).then(y=>y(l,a))},createImageVariation(u,h,d,p,g,f){return c.createImageVariation(u,h,d,p,g,f).then(m=>m(l,a))},createModeration(u,h){return c.createModeration(u,h).then(d=>d(l,a))},createSearch(u,h,d){return c.createSearch(u,h,d).then(p=>p(l,a))},deleteFile(u,h){return c.deleteFile(u,h).then(d=>d(l,a))},deleteModel(u,h){return c.deleteModel(u,h).then(d=>d(l,a))},downloadFile(u,h){return c.downloadFile(u,h).then(d=>d(l,a))},listEngines(u){return c.listEngines(u).then(h=>h(l,a))},listFiles(u){return c.listFiles(u).then(h=>h(l,a))},listFineTuneEvents(u,h,d){return c.listFineTuneEvents(u,h,d).then(p=>p(l,a))},listFineTunes(u){return c.listFineTunes(u).then(h=>h(l,a))},listModels(u){return c.listModels(u).then(h=>h(l,a))},retrieveEngine(u,h){return c.retrieveEngine(u,h).then(d=>d(l,a))},retrieveFile(u,h){return c.retrieveFile(u,h).then(d=>d(l,a))},retrieveFineTune(u,h){return c.retrieveFineTune(u,h).then(d=>d(l,a))},retrieveModel(u,h){return c.retrieveModel(u,h).then(d=>d(l,a))}}};class s extends i.BaseAPI{cancelFineTune(a,l){return r.OpenAIApiFp(this.configuration).cancelFineTune(a,l).then(c=>c(this.axios,this.basePath))}createAnswer(a,l){return r.OpenAIApiFp(this.configuration).createAnswer(a,l).then(c=>c(this.axios,this.basePath))}createClassification(a,l){return r.OpenAIApiFp(this.configuration).createClassification(a,l).then(c=>c(this.axios,this.basePath))}createCompletion(a,l){return r.OpenAIApiFp(this.configuration).createCompletion(a,l).then(c=>c(this.axios,this.basePath))}createEdit(a,l){return r.OpenAIApiFp(this.configuration).createEdit(a,l).then(c=>c(this.axios,this.basePath))}createEmbedding(a,l){return r.OpenAIApiFp(this.configuration).createEmbedding(a,l).then(c=>c(this.axios,this.basePath))}createFile(a,l,c){return r.OpenAIApiFp(this.configuration).createFile(a,l,c).then(u=>u(this.axios,this.basePath))}createFineTune(a,l){return r.OpenAIApiFp(this.configuration).createFineTune(a,l).then(c=>c(this.axios,this.basePath))}createImage(a,l){return r.OpenAIApiFp(this.configuration).createImage(a,l).then(c=>c(this.axios,this.basePath))}createImageEdit(a,l,c,u,h,d,p,g){return r.OpenAIApiFp(this.configuration).createImageEdit(a,l,c,u,h,d,p,g).then(f=>f(this.axios,this.basePath))}createImageVariation(a,l,c,u,h,d){return r.OpenAIApiFp(this.configuration).createImageVariation(a,l,c,u,h,d).then(p=>p(this.axios,this.basePath))}createModeration(a,l){return r.OpenAIApiFp(this.configuration).createModeration(a,l).then(c=>c(this.axios,this.basePath))}createSearch(a,l,c){return r.OpenAIApiFp(this.configuration).createSearch(a,l,c).then(u=>u(this.axios,this.basePath))}deleteFile(a,l){return r.OpenAIApiFp(this.configuration).deleteFile(a,l).then(c=>c(this.axios,this.basePath))}deleteModel(a,l){return r.OpenAIApiFp(this.configuration).deleteModel(a,l).then(c=>c(this.axios,this.basePath))}downloadFile(a,l){return r.OpenAIApiFp(this.configuration).downloadFile(a,l).then(c=>c(this.axios,this.basePath))}listEngines(a){return r.OpenAIApiFp(this.configuration).listEngines(a).then(l=>l(this.axios,this.basePath))}listFiles(a){return r.OpenAIApiFp(this.configuration).listFiles(a).then(l=>l(this.axios,this.basePath))}listFineTuneEvents(a,l,c){return r.OpenAIApiFp(this.configuration).listFineTuneEvents(a,l,c).then(u=>u(this.axios,this.basePath))}listFineTunes(a){return r.OpenAIApiFp(this.configuration).listFineTunes(a).then(l=>l(this.axios,this.basePath))}listModels(a){return r.OpenAIApiFp(this.configuration).listModels(a).then(l=>l(this.axios,this.basePath))}retrieveEngine(a,l){return r.OpenAIApiFp(this.configuration).retrieveEngine(a,l).then(c=>c(this.axios,this.basePath))}retrieveFile(a,l){return r.OpenAIApiFp(this.configuration).retrieveFile(a,l).then(c=>c(this.axios,this.basePath))}retrieveFineTune(a,l){return r.OpenAIApiFp(this.configuration).retrieveFineTune(a,l).then(c=>c(this.axios,this.basePath))}retrieveModel(a,l){return r.OpenAIApiFp(this.configuration).retrieveModel(a,l).then(c=>c(this.axios,this.basePath))}}r.OpenAIApi=s})(Rh);var Pa={};const dm="openai",fm="3.1.0",pm="Node.js library for the OpenAI API",mm={type:"git",url:"git@github.com:openai/openai-node.git"},gm=["openai","open","ai","gpt-3","gpt3"],_m="OpenAI",vm="MIT",xm="./dist/index.js",ym="./dist/index.d.ts",bm={build:"tsc --outDir dist/"},Sm={axios:"^0.26.0","form-data":"^4.0.0"},Mm={"@types/node":"^12.11.5",typescript:"^3.6.4"};var wm={name:dm,version:fm,description:pm,repository:mm,keywords:gm,author:_m,license:vm,main:xm,types:ym,scripts:bm,dependencies:Sm,devDependencies:Mm},Em=typeof self=="object"?self.FormData:window.FormData;Object.defineProperty(Pa,"__esModule",{value:!0});Pa.Configuration=void 0;const Tm=wm;class Am{constructor(e={}){this.apiKey=e.apiKey,this.organization=e.organization,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.baseOptions||(this.baseOptions={}),this.baseOptions.headers=Object.assign({"User-Agent":`OpenAI/NodeJS/${Tm.version}`,Authorization:`Bearer ${this.apiKey}`},this.baseOptions.headers),this.organization&&(this.baseOptions.headers["OpenAI-Organization"]=this.organization),this.formDataCtor||(this.formDataCtor=Em)}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$","i");return e!==null&&(t.test(e)||e.toLowerCase()==="application/json-patch+json")}}Pa.Configuration=Am;(function(r){var e=Dn&&Dn.__createBinding||(Object.create?function(n,i,s,o){o===void 0&&(o=s),Object.defineProperty(n,o,{enumerable:!0,get:function(){return i[s]}})}:function(n,i,s,o){o===void 0&&(o=s),n[o]=i[s]}),t=Dn&&Dn.__exportStar||function(n,i){for(var s in n)s!=="default"&&!i.hasOwnProperty(s)&&e(i,n,s)};Object.defineProperty(r,"__esModule",{value:!0}),t(Rh,r),t(Pa,r)})(ko);const Cm=document.querySelector(".navToggleOpen"),Pm=document.querySelectorAll(".navToggleClose"),qh=document.querySelector(".nav");Cm.addEventListener("click",()=>{qh.style.transform="translateX(0%)"});Pm.forEach(r=>{r.addEventListener("click",()=>{qh.style.transform="translateX(100%)"})});console.log("%c This webiste is created by Chetan K",`
    font-size:1.2rem;
    padding:5px 20px;
    margin:2rem 0;
    background-color:black;
    border:2px solid white;
    box-shadow: 0 0 40px white;
    border-radius:5px;
`);const Rm=document.getElementById("aiForm");Rm.addEventListener("submit",r=>{r.preventDefault(),Dm()});const $a=document.getElementById("contactForm"),Za=document.querySelector(".contactSubmit");$a.addEventListener("submit",r=>{Za.value="sending..",$a.classList.add("disable"),setTimeout(()=>{Za.value="sent to chetan!"},4e3),setTimeout(()=>{Za.value="send other message",$a.classList.remove("disable")},1e4),r.preventDefault()});const Lm=document.getElementById("aiInput"),Wo=document.getElementById("aiOutput");Wo.innerText="Result will be here!";async function Dm(){Wo.innerText="Loading info please wait...";const r=new ko.Configuration({organization:"org-k8MGUGI03Itd74phUwMjtJWX",apiKey:"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"}),t=await new ko.OpenAIApi(r).createCompletion({model:"text-davinci-003",prompt:`${Lm.value}`,temperature:0,max_tokens:1e3});Wo.innerText=t.data.choices[0].text}class wt{constructor(e,t={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.glare=wt.isSettingTrue(this.settings.glare),this.glarePrerender=wt.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=wt.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=wt.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.updateInitialPosition()}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.reset(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,n=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,i=t/this.width,s=n/this.height,o=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),a=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=o/i,c=a/s;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:c+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(this.settings.startX===0&&this.settings.startY===0)return;this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}getValues(){let e,t;this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);let n=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),i=(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),s=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:n,tiltY:i,percentageX:e*100,percentageY:t*100,angle:s}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},n={};for(var i in t)if(i in e)n[i]=e[i];else if(this.element.hasAttribute("data-tilt-"+i)){let s=this.element.getAttribute("data-tilt-"+i);try{n[i]=JSON.parse(s)}catch{n[i]=s}}else n[i]=t[i];return n}static init(e,t){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(n=>{"vanillaTilt"in n||(n.vanillaTilt=new wt(n,t))})}}typeof document!="undefined"&&(window.VanillaTilt=wt,wt.init(document.querySelectorAll("[data-tilt]")));const Om="/projects.json",Pc=document.getElementById("projectsBox");function Fm(r,e,t,n){Pc.innerHTML=Pc.innerHTML+`
    <div class="project">
          <img
            src="${e}"
            alt="project"
            class="project-image"
          />
          <div class="project-description">
            ${t}
            <div class="main-link cursorRespondLink">
              <a href="${n}" target="_blank"
                >Visit Project</a
              >
            </div>
          </div>
          <div class="project-title">${r}</div>
        </div>
        `}fetch(Om).then(r=>r.json()).then(r=>{r.map(e=>{Fm(e.title,e.imgSrc,e.disc,e.link)})}).finally(()=>{let r=document.querySelectorAll(".project");wt.init(r,{reverse:!0,speed:1500,reset:!1,max:20})});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="141",Im=0,Rc=1,Nm=2,Xh=1,zm=2,qr=3,rs=0,sn=1,yr=2,Bm=1,ni=0,fr=1,jo=2,Lc=3,Dc=4,Um=5,sr=100,km=101,Vm=102,Oc=103,Fc=104,Gm=200,Hm=201,Wm=202,jm=203,Yh=204,$h=205,qm=206,Xm=207,Ym=208,$m=209,Zm=210,Jm=0,Km=1,Qm=2,qo=3,eg=4,tg=5,ng=6,ig=7,Ra=0,rg=1,sg=2,On=0,ag=1,og=2,lg=3,cg=4,ug=5,Zh=300,br=301,Sr=302,Xo=303,Yo=304,La=306,$o=1e3,nn=1001,Zo=1002,ft=1003,Ic=1004,Nc=1005,Gt=1006,hg=1007,Da=1008,Oi=1009,dg=1010,fg=1011,Jh=1012,pg=1013,wi=1014,Zn=1015,ss=1016,mg=1017,gg=1018,pr=1020,_g=1021,vg=1022,rn=1023,Kh=1024,xg=1025,Ci=1026,Mr=1027,Qh=1028,yg=1029,bg=1030,Sg=1031,Mg=1033,Ja=33776,Ka=33777,Qa=33778,eo=33779,zc=35840,Bc=35841,Uc=35842,kc=35843,wg=36196,Vc=37492,Gc=37496,Hc=37808,Wc=37809,jc=37810,qc=37811,Xc=37812,Yc=37813,$c=37814,Zc=37815,Jc=37816,Kc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,Fi=3e3,We=3001,Eg=3200,Tg=3201,Lr=0,Ag=1,Rn="srgb",Ei="srgb-linear",to=7680,Cg=519,ru=35044,su="300 es",Jo=1035;class Dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ot=[];for(let r=0;r<256;r++)ot[r]=(r<16?"0":"")+r.toString(16);let au=1234567;const Jr=Math.PI/180,ca=180/Math.PI;function Or(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]+"-"+ot[e&255]+ot[e>>8&255]+"-"+ot[e>>16&15|64]+ot[e>>24&255]+"-"+ot[t&63|128]+ot[t>>8&255]+"-"+ot[t>>16&255]+ot[t>>24&255]+ot[n&255]+ot[n>>8&255]+ot[n>>16&255]+ot[n>>24&255]).toLowerCase()}function xt(r,e,t){return Math.max(e,Math.min(t,r))}function Rl(r,e){return(r%e+e)%e}function Pg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Rg(r,e,t){return r!==e?(t-r)/(e-r):0}function Kr(r,e,t){return(1-t)*r+t*e}function Lg(r,e,t,n){return Kr(r,e,1-Math.exp(-t*n))}function Dg(r,e=1){return e-Math.abs(Rl(r,e*2)-e)}function Og(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Fg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ig(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ng(r,e){return r+Math.random()*(e-r)}function zg(r){return r*(.5-Math.random())}function Bg(r){r!==void 0&&(au=r);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ug(r){return r*Jr}function kg(r){return r*ca}function Ko(r){return(r&r-1)===0&&r!==0}function Vg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ua(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hg(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Wg(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ut=Object.freeze({__proto__:null,DEG2RAD:Jr,RAD2DEG:ca,generateUUID:Or,clamp:xt,euclideanModulo:Rl,mapLinear:Pg,inverseLerp:Rg,lerp:Kr,damp:Lg,pingpong:Dg,smoothstep:Og,smootherstep:Fg,randInt:Ig,randFloat:Ng,randFloatSpread:zg,seededRandom:Bg,degToRad:Ug,radToDeg:kg,isPowerOfTwo:Ko,ceilPowerOfTwo:Vg,floorPowerOfTwo:ua,setQuaternionFromProperEuler:Gg,normalize:Wg,denormalize:Hg});class Pe{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],f=i[0],m=i[3],_=i[6],y=i[1],E=i[4],M=i[7],x=i[2],A=i[5],b=i[8];return s[0]=o*f+a*y+l*x,s[3]=o*m+a*E+l*A,s[6]=o*_+a*M+l*b,s[1]=c*f+u*y+h*x,s[4]=c*m+u*E+h*A,s[7]=c*_+u*M+h*b,s[2]=d*f+p*y+g*x,s[5]=d*m+p*E+g*A,s[8]=d*_+p*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=h*f,e[1]=(i*c-u*n)*f,e[2]=(a*n-i*o)*f,e[3]=d*f,e[4]=(u*t-i*l)*f,e[5]=(i*s-a*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(o*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ed(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function as(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const no={[Rn]:{[Ei]:Pi},[Ei]:{[Rn]:ra}},Kt={legacyMode:!0,get workingColorSpace(){return Ei},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(no[e]&&no[e][t]!==void 0){const n=no[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Qt={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function io(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Rs(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ei){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ei){if(e=Rl(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=io(o,s,e+1/3),this.g=io(o,s,e),this.b=io(o,s,e-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Kt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Kt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Kt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rn){const n=td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Kt.fromWorkingColorSpace(Rs(this,tt),e),xt(tt.r*255,0,255)<<16^xt(tt.g*255,0,255)<<8^xt(tt.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ei){Kt.fromWorkingColorSpace(Rs(this,tt),t);const n=tt.r,i=tt.g,s=tt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ei){return Kt.fromWorkingColorSpace(Rs(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Rn){return Kt.fromWorkingColorSpace(Rs(this,tt),e),e!==Rn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Qt),Qt.h+=e,Qt.s+=t,Qt.l+=n,this.setHSL(Qt.h,Qt.s,Qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qt),e.getHSL(Ps);const n=Kr(Qt.h,Ps.h,t),i=Kr(Qt.s,Ps.s,t),s=Kr(Qt.l,Ps.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ye.NAMES=td;let Hi;class nd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=as("canvas")),Hi.width=e.width,Hi.height=e.height;const n=Hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class id{constructor(e=null){this.isSource=!0,this.uuid=Or(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ro(i[o].image)):s.push(ro(i[o]))}else s=ro(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ro(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?nd.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jg=0;class zt extends Dr{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=nn,i=nn,s=Gt,o=Da,a=rn,l=Oi,c=1,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=Or(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $o:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $o:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Zh;class qe{constructor(e=0,t=0,n=0,i=1){this.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],f=l[2],m=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-f)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+f)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,M=(p+1)/2,x=(_+1)/2,A=(u+d)/4,b=(h+f)/4,v=(g+m)/4;return E>M&&E>x?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=b/n):M>x?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=v/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=b/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-f)*(h-f)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-f)/y,this.z=(d-u)/y,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fn extends Dr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rd extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qg extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ft,this.minFilter=ft,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(h!==f||l!==d||c!==p||u!==g){let m=1-a;const _=l*d+c*p+u*g+h*f,y=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const x=Math.sqrt(E),A=Math.atan2(x,_*y);m=Math.sin(m*A)/x,a=Math.sin(a*A)/x}const M=a*y;if(l=l*m+d*M,c=c*m+p*M,u=u*m+g*M,h=h*m+f*M,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){this.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return so.copy(this).projectOnVector(e),this.sub(so)}reflect(e){return this.sub(so.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new I,ou=new vs;class xs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)mi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox),ao.applyMatrix4(e.matrixWorld),this.union(ao);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Ls.subVectors(this.max,Br),Wi.subVectors(e.a,Br),ji.subVectors(e.b,Br),qi.subVectors(e.c,Br),Gn.subVectors(ji,Wi),Hn.subVectors(qi,ji),gi.subVectors(Wi,qi);let t=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-gi.z,gi.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,gi.z,0,-gi.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-gi.y,gi.x,0];return!oo(t,Wi,ji,qi,Ls)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Wi,ji,qi,Ls))?!1:(Ds.crossVectors(Gn,Hn),t=[Ds.x,Ds.y,Ds.z],oo(t,Wi,ji,qi,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return mi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new I,new I,new I,new I,new I,new I,new I,new I],mi=new I,ao=new xs,Wi=new I,ji=new I,qi=new I,Gn=new I,Hn=new I,gi=new I,Br=new I,Ls=new I,Ds=new I,_i=new I;function oo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_i.fromArray(r,s);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Xg=new xs,lu=new I,Os=new I,lo=new I;class Oa{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){lo.subVectors(e,this.center);const t=lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(lo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Os.set(0,0,1).multiplyScalar(e.radius):Os.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(lu.copy(e.center).add(Os)),this.expandByPoint(lu.copy(e.center).sub(Os)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new I,co=new I,Fs=new I,Wn=new I,uo=new I,Is=new I,ho=new I;class Ll{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){co.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fs),a=Wn.dot(this.direction),l=-Wn.dot(Fs),c=Wn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const f=1/u;h*=f,d*=f,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Fs).multiplyScalar(d).add(co),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,s){uo.subVectors(t,e),Is.subVectors(n,e),ho.crossVectors(uo,Is);let o=this.direction.dot(ho),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(Wn,Is));if(l<0)return null;const c=a*this.direction.dot(uo.cross(Wn));if(c<0||l+c>o)return null;const u=-a*Wn.dot(ho);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,h,d,p,g,f,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=p,_[7]=g,_[11]=f,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-a*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d+f*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=f+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,f=c*h;t[0]=d-f*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=f-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,f=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*h,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=f-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-f*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,f=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+f,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=f*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yg,e,$g)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),jn.crossVectors(n,Dt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),jn.crossVectors(n,Dt)),jn.normalize(),Ns.crossVectors(Dt,jn),i[0]=jn.x,i[4]=Ns.x,i[8]=Dt.x,i[1]=jn.y,i[5]=Ns.y,i[9]=Dt.y,i[2]=jn.z,i[6]=Ns.z,i[10]=Dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],f=n[6],m=n[10],_=n[14],y=n[3],E=n[7],M=n[11],x=n[15],A=i[0],b=i[4],v=i[8],S=i[12],N=i[1],F=i[5],J=i[9],X=i[13],D=i[2],H=i[6],V=i[10],O=i[14],z=i[3],R=i[7],B=i[11],Y=i[15];return s[0]=o*A+a*N+l*D+c*z,s[4]=o*b+a*F+l*H+c*R,s[8]=o*v+a*J+l*V+c*B,s[12]=o*S+a*X+l*O+c*Y,s[1]=u*A+h*N+d*D+p*z,s[5]=u*b+h*F+d*H+p*R,s[9]=u*v+h*J+d*V+p*B,s[13]=u*S+h*X+d*O+p*Y,s[2]=g*A+f*N+m*D+_*z,s[6]=g*b+f*F+m*H+_*R,s[10]=g*v+f*J+m*V+_*B,s[14]=g*S+f*X+m*O+_*Y,s[3]=y*A+E*N+M*D+x*z,s[7]=y*b+E*F+M*H+x*R,s[11]=y*v+E*J+M*V+x*B,s[15]=y*S+E*X+M*O+x*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],f=e[7],m=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*p-n*l*p)+f*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],f=e[13],m=e[14],_=e[15],y=h*m*c-f*d*c+f*l*p-a*m*p-h*l*_+a*d*_,E=g*d*c-u*m*c-g*l*p+o*m*p+u*l*_-o*d*_,M=u*f*c-g*h*c+g*a*p-o*f*p-u*a*_+o*h*_,x=g*h*l-u*f*l-g*a*d+o*f*d+u*a*m-o*h*m,A=t*y+n*E+i*M+s*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=y*b,e[1]=(f*d*s-h*m*s-f*i*p+n*m*p+h*i*_-n*d*_)*b,e[2]=(a*m*s-f*l*s+f*i*c-n*m*c-a*i*_+n*l*_)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*p-n*l*p)*b,e[4]=E*b,e[5]=(u*m*s-g*d*s+g*i*p-t*m*p-u*i*_+t*d*_)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*b,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*p+t*l*p)*b,e[8]=M*b,e[9]=(g*h*s-u*f*s-g*n*p+t*f*p+u*n*_-t*h*_)*b,e[10]=(o*f*s-g*a*s+g*n*c-t*f*c-o*n*_+t*a*_)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*b,e[12]=x*b,e[13]=(u*f*i-g*h*i+g*n*d-t*f*d-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*f*i-g*n*l+t*f*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,f=o*u,m=o*h,_=a*h,y=l*c,E=l*u,M=l*h,x=n.x,A=n.y,b=n.z;return i[0]=(1-(f+_))*x,i[1]=(p+M)*x,i[2]=(g-E)*x,i[3]=0,i[4]=(p-M)*A,i[5]=(1-(d+_))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+E)*b,i[9]=(m-y)*b,i[10]=(1-(d+f))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const o=Xi.set(i[4],i[5],i[6]).length(),a=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/s,u=1/o,h=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new I,en=new Qe,Yg=new I(0,0,0),$g=new I(1,1,1),jn=new I,Ns=new I,Dt=new I,cu=new Qe,uu=new vs;class ys{constructor(e=0,t=0,n=0,i=ys.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}ys.DefaultOrder="XYZ";ys.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zg=0;const hu=new I,Yi=new vs,An=new Qe,zs=new I,Ur=new I,Jg=new I,Kg=new vs,du=new I(1,0,0),fu=new I(0,1,0),pu=new I(0,0,1),Qg={type:"added"},mu={type:"removed"};class yt extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DefaultUp.clone();const e=new I,t=new ys,n=new vs,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new yn}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=yt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(fu,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(fu,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Ur,zs,this.up):An.lookAt(zs,Ur,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(An),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(mu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,Jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DefaultUp=new I(0,1,0);yt.DefaultMatrixAutoUpdate=!0;const tn=new I,Cn=new I,fo=new I,Pn=new I,$i=new I,Zi=new I,gu=new I,po=new I,mo=new I,go=new I;class vn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){tn.subVectors(i,t),Cn.subVectors(n,t),fo.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(Cn),l=tn.dot(fo),c=Cn.dot(Cn),u=Cn.dot(fo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Pn),l.set(0,0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),Cn.subVectors(e,t),tn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),tn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return vn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;$i.subVectors(i,n),Zi.subVectors(s,n),po.subVectors(e,n);const l=$i.dot(po),c=Zi.dot(po);if(l<=0&&c<=0)return t.copy(n);mo.subVectors(e,i);const u=$i.dot(mo),h=Zi.dot(mo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($i,o);go.subVectors(e,s);const p=$i.dot(go),g=Zi.dot(go);if(g>=0&&p<=g)return t.copy(s);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return gu.subVectors(s,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(gu,a);const _=1/(m+f+d);return o=f*_,a=d*_,t.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let e_=0;class ut extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=fr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yh,this.blendDst=$h,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bm;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}ut.fromType=function(){return null};class Ol extends ut{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ke=new I,Bs=new Pe;class Yt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ru,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ye),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Pe),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new I),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class sd extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ad extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let t_=0;const kt=new Qe,_o=new yt,Ji=new I,Ot=new xs,kr=new xs,it=new I;class Jt extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?ad:sd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new yn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(it.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(it),it.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(it)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(it.addVectors(Ot.min,kr.min),Ot.expandByPoint(it),it.addVectors(Ot.max,kr.max),Ot.expandByPoint(it)):(Ot.expandByPoint(kr.min),Ot.expandByPoint(kr.max))}Ot.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)it.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(it));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)it.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),it.add(Ji)),i=Math.max(i,n.distanceToSquared(it))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<a;N++)c[N]=new I,u[N]=new I;const h=new I,d=new I,p=new I,g=new Pe,f=new Pe,m=new Pe,_=new I,y=new I;function E(N,F,J){h.fromArray(i,N*3),d.fromArray(i,F*3),p.fromArray(i,J*3),g.fromArray(o,N*2),f.fromArray(o,F*2),m.fromArray(o,J*2),d.sub(h),p.sub(h),f.sub(g),m.sub(g);const X=1/(f.x*m.y-m.x*f.y);!isFinite(X)||(_.copy(d).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(X),y.copy(p).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(X),c[N].add(_),c[F].add(_),c[J].add(_),u[N].add(y),u[F].add(y),u[J].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let N=0,F=M.length;N<F;++N){const J=M[N],X=J.start,D=J.count;for(let H=X,V=X+D;H<V;H+=3)E(n[H+0],n[H+1],n[H+2])}const x=new I,A=new I,b=new I,v=new I;function S(N){b.fromArray(s,N*3),v.copy(b);const F=c[N];x.copy(F),x.sub(b.multiplyScalar(b.dot(F))).normalize(),A.crossVectors(v,F);const X=A.dot(u[N])<0?-1:1;l[N*4]=x.x,l[N*4+1]=x.y,l[N*4+2]=x.z,l[N*4+3]=X}for(let N=0,F=M.length;N<F;++N){const J=M[N],X=J.start,D=J.count;for(let H=X,V=X+D;H<V;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),f=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,d=c;h<u;h++,d++)o[d]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)it.fromBufferAttribute(e,t),it.normalize(),e.setXYZ(t,it.x,it.y,it.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let f=0,m=l.length;f<m;f++){a.isInterleavedBufferAttribute?p=l[f]*a.data.stride+a.offset:p=l[f]*u;for(let _=0;_<u;_++)d[g++]=c[p++]}return new Yt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Jt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new Qe,Ki=new Ll,vo=new Oa,qn=new I,Xn=new I,Yn=new I,xo=new I,yo=new I,bo=new I,Us=new I,ks=new I,Vs=new I,Gs=new Pe,Hs=new Pe,Ws=new Pe,So=new I,js=new I;class Wt extends yt{constructor(e=new Jt,t=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),e.ray.intersectsSphere(vo)===!1)||(_u.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(_u),n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,p=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let f=0,m=p.length;f<m;f++){const _=p[f],y=i[_.materialIndex],E=Math.max(_.start,g.start),M=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,A=M;x<A;x+=3){const b=a.getX(x),v=a.getX(x+1),S=a.getX(x+2);o=qs(this,y,e,Ki,l,c,u,h,d,b,v,S),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=f,y=m;_<y;_+=3){const E=a.getX(_),M=a.getX(_+1),x=a.getX(_+2);o=qs(this,i,e,Ki,l,c,u,h,d,E,M,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,m=p.length;f<m;f++){const _=p[f],y=i[_.materialIndex],E=Math.max(_.start,g.start),M=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,A=M;x<A;x+=3){const b=x,v=x+1,S=x+2;o=qs(this,y,e,Ki,l,c,u,h,d,b,v,S),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const f=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=f,y=m;_<y;_+=3){const E=_,M=_+1,x=_+2;o=qs(this,i,e,Ki,l,c,u,h,d,E,M,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function n_(r,e,t,n,i,s,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==yr,a),l===null)return null;js.copy(a),js.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:r}}function qs(r,e,t,n,i,s,o,a,l,c,u,h){qn.fromBufferAttribute(i,c),Xn.fromBufferAttribute(i,u),Yn.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){Us.set(0,0,0),ks.set(0,0,0),Vs.set(0,0,0);for(let g=0,f=s.length;g<f;g++){const m=d[g],_=s[g];m!==0&&(xo.fromBufferAttribute(_,c),yo.fromBufferAttribute(_,u),bo.fromBufferAttribute(_,h),o?(Us.addScaledVector(xo,m),ks.addScaledVector(yo,m),Vs.addScaledVector(bo,m)):(Us.addScaledVector(xo.sub(qn),m),ks.addScaledVector(yo.sub(Xn),m),Vs.addScaledVector(bo.sub(Yn),m)))}qn.add(Us),Xn.add(ks),Yn.add(Vs)}r.isSkinnedMesh&&(r.boneTransform(c,qn),r.boneTransform(u,Xn),r.boneTransform(h,Yn));const p=n_(r,e,t,n,qn,Xn,Yn,So);if(p){a&&(Gs.fromBufferAttribute(a,c),Hs.fromBufferAttribute(a,u),Ws.fromBufferAttribute(a,h),p.uv=vn.getUV(So,qn,Xn,Yn,Gs,Hs,Ws,new Pe)),l&&(Gs.fromBufferAttribute(l,c),Hs.fromBufferAttribute(l,u),Ws.fromBufferAttribute(l,h),p.uv2=vn.getUV(So,qn,Xn,Yn,Gs,Hs,Ws,new Pe));const g={a:c,b:u,c:h,normal:new I,materialIndex:0};vn.getNormal(qn,Xn,Yn,g.normal),p.face=g}return p}class Fr extends Jt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(f,m,_,y,E,M,x,A,b,v,S){const N=M/b,F=x/v,J=M/2,X=x/2,D=A/2,H=b+1,V=v+1;let O=0,z=0;const R=new I;for(let B=0;B<V;B++){const Y=B*F-X;for(let Q=0;Q<H;Q++){const ee=Q*N-J;R[f]=ee*y,R[m]=Y*E,R[_]=D,c.push(R.x,R.y,R.z),R[f]=0,R[m]=0,R[_]=A>0?1:-1,u.push(R.x,R.y,R.z),h.push(Q/b),h.push(1-B/v),O+=1}}for(let B=0;B<v;B++)for(let Y=0;Y<b;Y++){const Q=d+Y+H*B,ee=d+Y+H*(B+1),ce=d+(Y+1)+H*(B+1),ve=d+(Y+1)+H*B;l.push(Q,ee,ve),l.push(ee,ce,ve),z+=6}a.addGroup(p,z,S),p+=z,d+=O}}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dt(r){const e={};for(let t=0;t<r.length;t++){const n=wr(r[t]);for(const i in n)e[i]=n[i]}return e}const Fl={clone:wr,merge:dt};var i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends ut{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=i_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class od extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mt extends od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=90,er=1;class s_ extends yt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Mt(Qi,er,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const s=new Mt(Qi,er,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new Mt(Qi,er,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new Mt(Qi,er,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new Mt(Qi,er,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new Mt(Qi,er,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class ld extends zt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends Fn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ld(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fr(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ni});s.uniforms.tEquirect.value=t;const o=new Wt(i,s),a=t.minFilter;return t.minFilter===Da&&(t.minFilter=Gt),new s_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Mo=new I,o_=new I,l_=new yn;class $n{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mo.subVectors(n,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l_.getNormalMatrix(e),i=this.coplanarPoint(Mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Oa,Xs=new I;class Il{constructor(e=new $n,t=new $n,n=new $n,i=new $n,s=new $n,o=new $n){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],f=n[11],m=n[12],_=n[13],y=n[14],E=n[15];return t[0].setComponents(a-i,h-l,f-d,E-m).normalize(),t[1].setComponents(a+i,h+l,f+d,E+m).normalize(),t[2].setComponents(a+s,h+c,f+p,E+_).normalize(),t[3].setComponents(a-s,h-c,f-p,E-_).normalize(),t[4].setComponents(a-o,h-u,f-g,E-y).normalize(),t[5].setComponents(a+o,h+u,f+g,E+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function c_(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Nl extends Jt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],f=[],m=[];for(let _=0;_<u;_++){const y=_*d-o;for(let E=0;E<c;E++){const M=E*h-s;g.push(M,-y,0),f.push(0,0,1),m.push(E/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let y=0;y<a;y++){const E=y+c*_,M=y+c*(_+1),x=y+1+c*(_+1),A=y+1+c*_;p.push(E,M,A),p.push(M,x,A)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2))}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}var u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,f_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_="vec3 transformed = vec3( position );",__=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,x_=`#ifdef USE_IRIDESCENCE
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
#endif`,y_=`#ifdef USE_BUMPMAP
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
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
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
}`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L_=`vec3 transformedNormal = objectNormal;
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
#endif`,D_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,B_=`#ifdef USE_ENVMAP
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
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,V_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
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
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
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
}`,Y_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`vec3 diffuse = vec3( 1.0 );
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
#endif`,J_=`uniform bool receiveShadow;
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
#endif`,K_=`#if defined( USE_ENVMAP )
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
#endif`,Q_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n0=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,i0=`PhysicalMaterial material;
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
#endif`,r0=`struct PhysicalMaterial {
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
}`,s0=`
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
#endif`,a0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,l0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,d0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,m0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,b0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,M0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,P0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,B0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#ifdef USE_SHADOWMAP
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
#endif`,V0=`#ifdef USE_SHADOWMAP
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
#endif`,G0=`#ifdef USE_SHADOWMAP
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
#endif`,H0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,ev=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,iv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#include <envmap_common_pars_fragment>
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
}`,hv=`#include <common>
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
}`,dv=`#if DEPTH_PACKING == 3200
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
}`,fv=`#define DISTANCE
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
}`,pv=`#define DISTANCE
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
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_v=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Sv=`uniform vec3 diffuse;
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
}`,Mv=`#define MATCAP
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
}`,wv=`#define MATCAP
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
}`,Ev=`#define NORMAL
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
}`,Tv=`#define NORMAL
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
}`,Av=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Rv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Ov=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Nv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:u_,alphamap_pars_fragment:h_,alphatest_fragment:d_,alphatest_pars_fragment:f_,aomap_fragment:p_,aomap_pars_fragment:m_,begin_vertex:g_,beginnormal_vertex:__,bsdfs:v_,iridescence_fragment:x_,bumpmap_pars_fragment:y_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:S_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:w_,color_fragment:E_,color_pars_fragment:T_,color_pars_vertex:A_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:L_,displacementmap_pars_vertex:D_,displacementmap_vertex:O_,emissivemap_fragment:F_,emissivemap_pars_fragment:I_,encodings_fragment:N_,encodings_pars_fragment:z_,envmap_fragment:B_,envmap_common_pars_fragment:U_,envmap_pars_fragment:k_,envmap_pars_vertex:V_,envmap_physical_pars_fragment:K_,envmap_vertex:G_,fog_vertex:H_,fog_pars_vertex:W_,fog_fragment:j_,fog_pars_fragment:q_,gradientmap_pars_fragment:X_,lightmap_fragment:Y_,lightmap_pars_fragment:$_,lights_lambert_vertex:Z_,lights_pars_begin:J_,lights_toon_fragment:Q_,lights_toon_pars_fragment:e0,lights_phong_fragment:t0,lights_phong_pars_fragment:n0,lights_physical_fragment:i0,lights_physical_pars_fragment:r0,lights_fragment_begin:s0,lights_fragment_maps:a0,lights_fragment_end:o0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:u0,logdepthbuf_vertex:h0,map_fragment:d0,map_pars_fragment:f0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:_0,morphcolor_vertex:v0,morphnormal_vertex:x0,morphtarget_pars_vertex:y0,morphtarget_vertex:b0,normal_fragment_begin:S0,normal_fragment_maps:M0,normal_pars_fragment:w0,normal_pars_vertex:E0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:P0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:L0,output_fragment:D0,packing:O0,premultiplied_alpha_fragment:F0,project_vertex:I0,dithering_fragment:N0,dithering_pars_fragment:z0,roughnessmap_fragment:B0,roughnessmap_pars_fragment:U0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:V0,shadowmap_vertex:G0,shadowmask_pars_fragment:H0,skinbase_vertex:W0,skinning_pars_vertex:j0,skinning_vertex:q0,skinnormal_vertex:X0,specularmap_fragment:Y0,specularmap_pars_fragment:$0,tonemapping_fragment:Z0,tonemapping_pars_fragment:J0,transmission_fragment:K0,transmission_pars_fragment:Q0,uv_pars_fragment:ev,uv_pars_vertex:tv,uv_vertex:nv,uv2_pars_fragment:iv,uv2_pars_vertex:rv,uv2_vertex:sv,worldpos_vertex:av,background_vert:ov,background_frag:lv,cube_vert:cv,cube_frag:uv,depth_vert:hv,depth_frag:dv,distanceRGBA_vert:fv,distanceRGBA_frag:pv,equirect_vert:mv,equirect_frag:gv,linedashed_vert:_v,linedashed_frag:vv,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:bv,meshlambert_frag:Sv,meshmatcap_vert:Mv,meshmatcap_frag:wv,meshnormal_vert:Ev,meshnormal_frag:Tv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Rv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Ov,points_frag:Fv,shadow_vert:Iv,shadow_frag:Nv,sprite_vert:zv,sprite_frag:Bv},le={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new yn},uv2Transform:{value:new yn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new yn}}},_n={basic:{uniforms:dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new ye(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ye(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:dt([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:dt([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:dt([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new yn},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:dt([le.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:dt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:dt([le.lights,le.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};_n.physical={uniforms:dt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Uv(r,e,t,n,i,s){const o=new ye(0);let a=i===!0?0:1,l,c,u=null,h=0,d=null;function p(f,m){let _=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=e.get(y));const E=r.xr,M=E.getSession&&E.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===La)?(c===void 0&&(c=new Wt(new Fr(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:wr(_n.cube.uniforms),vertexShader:_n.cube.vertexShader,fragmentShader:_n.cube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||h!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wt(new Nl(2,2),new $t({name:"BackgroundMaterial",uniforms:wr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,m){t.buffers.color.setClear(f.r,f.g,f.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(f,m=1){o.set(f),a=m,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,g(o,a)},render:p}}function kv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(D,H,V,O,z){let R=!1;if(o){const B=f(O,V,H);c!==B&&(c=B,p(c.object)),R=_(D,O,V,z),R&&y(D,O,V,z)}else{const B=H.wireframe===!0;(c.geometry!==O.id||c.program!==V.id||c.wireframe!==B)&&(c.geometry=O.id,c.program=V.id,c.wireframe=B,R=!0)}z!==null&&t.update(z,34963),(R||u)&&(u=!1,v(D,H,V,O),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(D){return n.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function f(D,H,V){const O=V.wireframe===!0;let z=a[D.id];z===void 0&&(z={},a[D.id]=z);let R=z[H.id];R===void 0&&(R={},z[H.id]=R);let B=R[O];return B===void 0&&(B=m(d()),R[O]=B),B}function m(D){const H=[],V=[],O=[];for(let z=0;z<i;z++)H[z]=0,V[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:O,object:D,attributes:{},index:null}}function _(D,H,V,O){const z=c.attributes,R=H.attributes;let B=0;const Y=V.getAttributes();for(const Q in Y)if(Y[Q].location>=0){const ce=z[Q];let ve=R[Q];if(ve===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;B++}return c.attributesNum!==B||c.index!==O}function y(D,H,V,O){const z={},R=H.attributes;let B=0;const Y=V.getAttributes();for(const Q in Y)if(Y[Q].location>=0){let ce=R[Q];ce===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),z[Q]=ve,B++}c.attributes=z,c.attributesNum=B,c.index=O}function E(){const D=c.newAttributes;for(let H=0,V=D.length;H<V;H++)D[H]=0}function M(D){x(D,0)}function x(D,H){const V=c.newAttributes,O=c.enabledAttributes,z=c.attributeDivisors;V[D]=1,O[D]===0&&(r.enableVertexAttribArray(D),O[D]=1),z[D]!==H&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,H),z[D]=H)}function A(){const D=c.newAttributes,H=c.enabledAttributes;for(let V=0,O=H.length;V<O;V++)H[V]!==D[V]&&(r.disableVertexAttribArray(V),H[V]=0)}function b(D,H,V,O,z,R){n.isWebGL2===!0&&(V===5124||V===5125)?r.vertexAttribIPointer(D,H,V,z,R):r.vertexAttribPointer(D,H,V,O,z,R)}function v(D,H,V,O){if(n.isWebGL2===!1&&(D.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const z=O.attributes,R=V.getAttributes(),B=H.defaultAttributeValues;for(const Y in R){const Q=R[Y];if(Q.location>=0){let ee=z[Y];if(ee===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ce=ee.normalized,ve=ee.itemSize,C=t.get(ee);if(C===void 0)continue;const te=C.buffer,ie=C.type,ue=C.bytesPerElement;if(ee.isInterleavedBufferAttribute){const $=ee.data,me=$.stride,ge=ee.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)x(Q.location+_e,$.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<Q.locationSize;_e++)M(Q.location+_e);r.bindBuffer(34962,te);for(let _e=0;_e<Q.locationSize;_e++)b(Q.location+_e,ve/Q.locationSize,ie,ce,me*ue,(ge+ve/Q.locationSize*_e)*ue)}else{if(ee.isInstancedBufferAttribute){for(let $=0;$<Q.locationSize;$++)x(Q.location+$,ee.meshPerAttribute);D.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let $=0;$<Q.locationSize;$++)M(Q.location+$);r.bindBuffer(34962,te);for(let $=0;$<Q.locationSize;$++)b(Q.location+$,ve/Q.locationSize,ie,ce,ve*ue,ve/Q.locationSize*$*ue)}}else if(B!==void 0){const ce=B[Y];if(ce!==void 0)switch(ce.length){case 2:r.vertexAttrib2fv(Q.location,ce);break;case 3:r.vertexAttrib3fv(Q.location,ce);break;case 4:r.vertexAttrib4fv(Q.location,ce);break;default:r.vertexAttrib1fv(Q.location,ce)}}}}A()}function S(){J();for(const D in a){const H=a[D];for(const V in H){const O=H[V];for(const z in O)g(O[z].object),delete O[z];delete H[V]}delete a[D]}}function N(D){if(a[D.id]===void 0)return;const H=a[D.id];for(const V in H){const O=H[V];for(const z in O)g(O[z].object),delete O[z];delete H[V]}delete a[D.id]}function F(D){for(const H in a){const V=a[H];if(V[D.id]===void 0)continue;const O=V[D.id];for(const z in O)g(O[z].object),delete O[z];delete V[D.id]}}function J(){X(),u=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:X,dispose:S,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:M,disableUnusedAttributes:A}}function Vv(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Gv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),y=r.getParameter(36349),E=d>0,M=o||e.has("OES_texture_float"),x=E&&M,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:M,floatVertexTextures:x,maxSamples:A}}function Hv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new $n,a=new yn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,p){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,d,p){const g=h.clippingPlanes,f=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,E=y*4;let M=_.clippingState||null;l.value=M,M=u(g,d,E,p);for(let x=0;x!==E;++x)M[x]=t[x];_.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const f=h!==null?h.length:0;let m=null;if(f!==0){if(m=l.value,g!==!0||m===null){const _=p+f*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<_)&&(m=new Float32Array(_));for(let E=0,M=p;E!==f;++E,M+=4)o.copy(h[E]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function Wv(r){let e=new WeakMap;function t(o,a){return a===Xo?o.mapping=br:a===Yo&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Xo||a===Yo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new a_(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fa extends od{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const lr=4,vu=[.125,.215,.35,.446,.526,.582],Mi=20,wo=new Fa,xu=new ye;let Eo=null;const yi=(1+Math.sqrt(5))/2,nr=1/yi,yu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,yi,nr),new I(0,yi,-nr),new I(nr,0,yi),new I(-nr,0,yi),new I(yi,nr,0),new I(-yi,nr,0)];class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eo),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ss,format:rn,encoding:Fi,depthBuffer:!1},i=Su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(s)),this._blurMaterial=qv(s,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,n,i){const a=new Mt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=On,u.autoClear=!1;const p=new Ol({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Wt(new Fr,p);let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(xu),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):y===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const E=this._cubeSize;Ys(i,y*E,_>2?E:0,E,E),u.setRenderTarget(i),f&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===br||e.mapping===Sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=yu[(i-1)%yu.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),f=s/g,m=isFinite(s)?1+Math.floor(u*f):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const _=[];let y=0;for(let b=0;b<Mi;++b){const v=b/f,S=Math.exp(-v*v/2);_.push(S),b===0?y+=S:b<m&&(y+=2*S)}for(let b=0;b<_.length;b++)_[b]=_[b]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const M=this._sizeLods[i],x=3*M*(i>E-lr?i-E+lr:0),A=4*(this._cubeSize-M);Ys(t,x,A,3*M,2*M),l.setRenderTarget(t),l.render(h,wo)}}function jv(r){const e=[],t=[],n=[];let i=r;const s=r-lr+1+vu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-lr?l=vu[o-r+lr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,f=3,m=2,_=1,y=new Float32Array(f*g*p),E=new Float32Array(m*g*p),M=new Float32Array(_*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,v=A>2?0:-1,S=[b,v,0,b+2/3,v,0,b+2/3,v+1,0,b,v,0,b+2/3,v+1,0,b,v+1,0];y.set(S,f*g*A),E.set(d,m*g*A);const N=[A,A,A,A,A,A];M.set(N,_*g*A)}const x=new Jt;x.setAttribute("position",new Yt(y,f)),x.setAttribute("uv",new Yt(E,m)),x.setAttribute("faceIndex",new Yt(M,_)),e.push(x),i>lr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Su(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function qv(r,e,t){const n=new Float32Array(Mi),i=new I(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Mu(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function wu(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Xv(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xo||l===Yo,u=l===br||l===Sr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new bu(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new bu(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $v(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const p=h.morphAttributes;for(const g in p){const f=p[g];for(let m=0,_=f.length;m<_;m++)e.update(f[m],34962)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let f=0;if(p!==null){const y=p.array;f=p.version;for(let E=0,M=y.length;E<M;E+=3){const x=y[E+0],A=y[E+1],b=y[E+2];d.push(x,A,A,b,b,x)}}else{const y=g.array;f=g.version;for(let E=0,M=y.length/3-1;E<M;E+=3){const x=E+0,A=E+1,b=E+2;d.push(x,A,A,b,b,x)}}const m=new(ed(d)?ad:sd)(d,1);m.version=f;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zv(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){r.drawElements(s,p,a,d*l),t.update(p,s,1)}function h(d,p,g){if(g===0)return;let f,m;if(i)f=r,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Jv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Kv(r,e){return r[0]-e[0]}function Qv(r,e){return Math.abs(e[1])-Math.abs(r[1])}function To(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function ex(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let V=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",V)};var g=V;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let N=0;M===!0&&(N=1),x===!0&&(N=2),A===!0&&(N=3);let F=u.attributes.position.count*N,J=1;F>e.maxTextureSize&&(J=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const X=new Float32Array(F*J*4*m),D=new rd(X,F,J,m);D.type=Zn,D.needsUpdate=!0;const H=N*4;for(let O=0;O<m;O++){const z=b[O],R=v[O],B=S[O],Y=F*J*4*O;for(let Q=0;Q<z.count;Q++){const ee=Q*H;M===!0&&(o.fromBufferAttribute(z,Q),z.normalized===!0&&To(o,z),X[Y+ee+0]=o.x,X[Y+ee+1]=o.y,X[Y+ee+2]=o.z,X[Y+ee+3]=0),x===!0&&(o.fromBufferAttribute(R,Q),R.normalized===!0&&To(o,R),X[Y+ee+4]=o.x,X[Y+ee+5]=o.y,X[Y+ee+6]=o.z,X[Y+ee+7]=0),A===!0&&(o.fromBufferAttribute(B,Q),B.normalized===!0&&To(o,B),X[Y+ee+8]=o.x,X[Y+ee+9]=o.y,X[Y+ee+10]=o.z,X[Y+ee+11]=B.itemSize===4?o.w:1)}}_={count:m,texture:D,size:new Pe(F,J)},s.set(u,_),u.addEventListener("dispose",V)}let y=0;for(let M=0;M<p.length;M++)y+=p[M];const E=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",p),d.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const f=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==f){m=[];for(let x=0;x<f;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<f;x++){const A=m[x];A[0]=x,A[1]=p[x]}m.sort(Qv);for(let x=0;x<8;x++)x<f&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Kv);const _=u.morphAttributes.position,y=u.morphAttributes.normal;let E=0;for(let x=0;x<8;x++){const A=a[x],b=A[0],v=A[1];b!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+x)!==_[b]&&u.setAttribute("morphTarget"+x,_[b]),y&&u.getAttribute("morphNormal"+x)!==y[b]&&u.setAttribute("morphNormal"+x,y[b]),i[x]=v,E+=v):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const M=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function tx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ud=new zt,hd=new rd,dd=new qg,fd=new ld,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function Ir(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Eu[i];if(s===void 0&&(s=new Float32Array(i),Eu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ia(r,e){let t=Tu[e];t===void 0&&(t=new Int32Array(e),Tu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function nx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function ax(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Pu.set(n),r.uniformMatrix2fv(this.addr,!1,Pu),St(t,n)}}function ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Cu.set(n),r.uniformMatrix3fv(this.addr,!1,Cu),St(t,n)}}function lx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(bt(t,n))return;Au.set(n),r.uniformMatrix4fv(this.addr,!1,Au),St(t,n)}}function cx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ux(r,e){const t=this.cache;bt(t,e)||(r.uniform2iv(this.addr,e),St(t,e))}function hx(r,e){const t=this.cache;bt(t,e)||(r.uniform3iv(this.addr,e),St(t,e))}function dx(r,e){const t=this.cache;bt(t,e)||(r.uniform4iv(this.addr,e),St(t,e))}function fx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function px(r,e){const t=this.cache;bt(t,e)||(r.uniform2uiv(this.addr,e),St(t,e))}function mx(r,e){const t=this.cache;bt(t,e)||(r.uniform3uiv(this.addr,e),St(t,e))}function gx(r,e){const t=this.cache;bt(t,e)||(r.uniform4uiv(this.addr,e),St(t,e))}function _x(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ud,i)}function vx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||dd,i)}function xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||fd,i)}function yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hd,i)}function bx(r){switch(r){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return sx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return yx}}function Sx(r,e){r.uniform1fv(this.addr,e)}function Mx(r,e){const t=Ir(e,this.size,2);r.uniform2fv(this.addr,t)}function wx(r,e){const t=Ir(e,this.size,3);r.uniform3fv(this.addr,t)}function Ex(r,e){const t=Ir(e,this.size,4);r.uniform4fv(this.addr,t)}function Tx(r,e){const t=Ir(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ax(r,e){const t=Ir(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cx(r,e){const t=Ir(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Px(r,e){r.uniform1iv(this.addr,e)}function Rx(r,e){r.uniform2iv(this.addr,e)}function Lx(r,e){r.uniform3iv(this.addr,e)}function Dx(r,e){r.uniform4iv(this.addr,e)}function Ox(r,e){r.uniform1uiv(this.addr,e)}function Fx(r,e){r.uniform2uiv(this.addr,e)}function Ix(r,e){r.uniform3uiv(this.addr,e)}function Nx(r,e){r.uniform4uiv(this.addr,e)}function zx(r,e,t){const n=e.length,i=Ia(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||ud,i[s])}function Bx(r,e,t){const n=e.length,i=Ia(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||dd,i[s])}function Ux(r,e,t){const n=e.length,i=Ia(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||fd,i[s])}function kx(r,e,t){const n=e.length,i=Ia(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||hd,i[s])}function Vx(r){switch(r){case 5126:return Sx;case 35664:return Mx;case 35665:return wx;case 35666:return Ex;case 35674:return Tx;case 35675:return Ax;case 35676:return Cx;case 5124:case 35670:return Px;case 35667:case 35671:return Rx;case 35668:case 35672:return Lx;case 35669:case 35673:return Dx;case 5125:return Ox;case 36294:return Fx;case 36295:return Ix;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return kx}}class Gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=bx(t.type)}}class Hx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Vx(t.type)}}class Wx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Ru(r,e){r.seq.push(e),r.map[e.id]=e}function jx(r,e,t){const n=r.name,i=n.length;for(Ao.lastIndex=0;;){const s=Ao.exec(n),o=Ao.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ru(t,c===void 0?new Gx(a,r,e):new Hx(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Wx(a),Ru(t,h)),t=h}}}class sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);jx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Lu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let qx=0;function Xx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Yx(r){switch(r){case Fi:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Du(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Xx(r.getShaderSource(e),o)}else return i}function $x(r,e){const t=Yx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Zx(r,e){let t;switch(e){case ag:t="Linear";break;case og:t="Reinhard";break;case lg:t="OptimizedCineon";break;case cg:t="ACESFilmic";break;case ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jx(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xr).join(`
`)}function Kx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qx(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Xr(r){return r!==""}function Ou(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ey=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(r){return r.replace(ey,ty)}function ty(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Qo(t)}const ny=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(r){return r.replace(iy,pd).replace(ny,ry)}function ry(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pd(r,e,t,n)}function pd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===zm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qr&&(e="SHADOWMAP_TYPE_VSM"),e}function ay(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function ly(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ra:e="ENVMAP_BLENDING_MULTIPLY";break;case rg:e="ENVMAP_BLENDING_MIX";break;case sg:e="ENVMAP_BLENDING_ADD";break}return e}function cy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uy(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sy(t),c=ay(t),u=oy(t),h=ly(t),d=cy(t),p=t.isWebGL2?"":Jx(t),g=Kx(s),f=i.createProgram();let m,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Xr).join(`
`),_.length>0&&(_+=`
`)):(m=[Nu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),_=[p,Nu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Re.tonemapping_pars_fragment:"",t.toneMapping!==On?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,$x("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),o=Qo(o),o=Ou(o,t),o=Fu(o,t),a=Qo(a),a=Ou(a,t),a=Fu(a,t),o=Iu(o),a=Iu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=y+m+o,M=y+_+a,x=Lu(i,35633,E),A=Lu(i,35632,M);if(i.attachShader(f,x),i.attachShader(f,A),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(f).trim(),N=i.getShaderInfoLog(x).trim(),F=i.getShaderInfoLog(A).trim();let J=!0,X=!0;if(i.getProgramParameter(f,35714)===!1){J=!1;const D=Du(i,x,"vertex"),H=Du(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+S+`
`+D+`
`+H)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(N===""||F==="")&&(X=!1);X&&(this.diagnostics={runnable:J,programLog:S,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:_}})}i.deleteShader(x),i.deleteShader(A);let b;this.getUniforms=function(){return b===void 0&&(b=new sa(i,f)),b};let v;return this.getAttributes=function(){return v===void 0&&(v=Qx(i,f)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=qx++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=A,this}let hy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new fy(e);t.set(e,n)}return t.get(e)}}class fy{constructor(e){this.id=hy++,this.code=e,this.usedTimes=0}}function py(r,e,t,n,i,s,o){const a=new Dl,l=new dy,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v,S,N,F,J){const X=F.fog,D=J.geometry,H=v.isMeshStandardMaterial?F.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),O=!!V&&V.mapping===La?V.image.height:null,z=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const R=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,B=R!==void 0?R.length:0;let Y=0;D.morphAttributes.position!==void 0&&(Y=1),D.morphAttributes.normal!==void 0&&(Y=2),D.morphAttributes.color!==void 0&&(Y=3);let Q,ee,ce,ve;if(z){const me=_n[z];Q=me.vertexShader,ee=me.fragmentShader}else Q=v.vertexShader,ee=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),ve=l.getFragmentShaderID(v);const C=r.getRenderTarget(),te=v.alphaTest>0,ie=v.clearcoat>0,ue=v.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:v.type,vertexShader:Q,fragmentShader:ee,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:d,outputEncoding:C===null?r.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:Fi,map:!!v.map,matcap:!!v.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:O,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Ag,tangentSpaceNormalMap:v.normalMapType===Lr,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===We,clearcoat:ie,clearcoatMap:ie&&!!v.clearcoatMap,clearcoatRoughnessMap:ie&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ie&&!!v.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!v.iridescenceMap,iridescenceThicknessMap:ue&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===fr,alphaMap:!!v.alphaMap,alphaTest:te,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!D.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!X,useFog:v.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Y,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:On,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yr,flipSided:v.side===sn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)S.push(N),S.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(_(S,v),y(S,v),S.push(r.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),S.fog&&a.enable(33),v.push(a.mask),a.disableAll(),S.useFog&&a.enable(0),S.flatShading&&a.enable(1),S.logarithmicDepthBuffer&&a.enable(2),S.skinning&&a.enable(3),S.morphTargets&&a.enable(4),S.morphNormals&&a.enable(5),S.morphColors&&a.enable(6),S.premultipliedAlpha&&a.enable(7),S.shadowMapEnabled&&a.enable(8),S.physicallyCorrectLights&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.specularIntensityMap&&a.enable(14),S.specularColorMap&&a.enable(15),S.transmission&&a.enable(16),S.transmissionMap&&a.enable(17),S.thicknessMap&&a.enable(18),S.sheen&&a.enable(19),S.sheenColorMap&&a.enable(20),S.sheenRoughnessMap&&a.enable(21),S.decodeVideoTexture&&a.enable(22),S.opaque&&a.enable(23),v.push(a.mask)}function E(v){const S=g[v.type];let N;if(S){const F=_n[S];N=Fl.clone(F.uniforms)}else N=v.uniforms;return N}function M(v,S){let N;for(let F=0,J=c.length;F<J;F++){const X=c[F];if(X.cacheKey===S){N=X,++N.usedTimes;break}}return N===void 0&&(N=new uy(r,S,v,s),c.push(N)),N}function x(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function b(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:x,releaseShaderCache:A,programs:c,dispose:b}}function my(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,g,f,m){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:f,group:m},r[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=f,_.group=m),e++,_}function a(h,d,p,g,f,m){const _=o(h,d,p,g,f,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,d,p,g,f,m){const _=o(h,d,p,g,f,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,d){t.length>1&&t.sort(h||gy),n.length>1&&n.sort(d||zu),i.length>1&&i.sort(d||zu)}function u(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function _y(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Bu,r.set(n,[s])):i>=r.get(n).length?(s=new Bu,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function vy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ye};break;case"SpotLight":t={position:new I,direction:new I,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function xy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yy=0;function by(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Sy(r,e){const t=new vy,n=xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new I);const s=new I,o=new Qe,a=new Qe;function l(u,h){let d=0,p=0,g=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,m=0,_=0,y=0,E=0,M=0,x=0,A=0;u.sort(by);const b=h!==!0?Math.PI:1;for(let S=0,N=u.length;S<N;S++){const F=u[S],J=F.color,X=F.intensity,D=F.distance,H=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=J.r*X*b,p+=J.g*X*b,g+=J.b*X*b;else if(F.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(F.sh.coefficients[V],X);else if(F.isDirectionalLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const O=F.shadow,z=n.get(F);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=H,i.directionalShadowMatrix[f]=F.shadow.matrix,M++}i.directional[f]=V,f++}else if(F.isSpotLight){const V=t.get(F);if(V.position.setFromMatrixPosition(F.matrixWorld),V.color.copy(J).multiplyScalar(X*b),V.distance=D,V.coneCos=Math.cos(F.angle),V.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),V.decay=F.decay,F.castShadow){const O=F.shadow,z=n.get(F);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=H,i.spotShadowMatrix[_]=F.shadow.matrix,A++}i.spot[_]=V,_++}else if(F.isRectAreaLight){const V=t.get(F);V.color.copy(J).multiplyScalar(X),V.halfWidth.set(F.width*.5,0,0),V.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=V,y++}else if(F.isPointLight){const V=t.get(F);if(V.color.copy(F.color).multiplyScalar(F.intensity*b),V.distance=F.distance,V.decay=F.decay,F.castShadow){const O=F.shadow,z=n.get(F);z.shadowBias=O.bias,z.shadowNormalBias=O.normalBias,z.shadowRadius=O.radius,z.shadowMapSize=O.mapSize,z.shadowCameraNear=O.camera.near,z.shadowCameraFar=O.camera.far,i.pointShadow[m]=z,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=F.shadow.matrix,x++}i.point[m]=V,m++}else if(F.isHemisphereLight){const V=t.get(F);V.skyColor.copy(F.color).multiplyScalar(X*b),V.groundColor.copy(F.groundColor).multiplyScalar(X*b),i.hemi[E]=V,E++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const v=i.hash;(v.directionalLength!==f||v.pointLength!==m||v.spotLength!==_||v.rectAreaLength!==y||v.hemiLength!==E||v.numDirectionalShadows!==M||v.numPointShadows!==x||v.numSpotShadows!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=y,i.point.length=m,i.hemi.length=E,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=A,v.directionalLength=f,v.pointLength=m,v.spotLength=_,v.rectAreaLength=y,v.hemiLength=E,v.numDirectionalShadows=M,v.numPointShadows=x,v.numSpotShadows=A,i.version=yy++)}function c(u,h){let d=0,p=0,g=0,f=0,m=0;const _=h.matrixWorldInverse;for(let y=0,E=u.length;y<E;y++){const M=u[y];if(M.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),d++}else if(M.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(M.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(M.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),f++}else if(M.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(_),p++}else if(M.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Uu(r,e){const t=new Sy(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function My(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Uu(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Uu(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class md extends ut{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends ut{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
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
}`;function Ty(r,e,t){let n=new Il;const i=new Pe,s=new Pe,o=new qe,a=new md({depthPacking:Tg}),l=new gd,c={},u=t.maxTextureSize,h={0:sn,1:rs,2:yr},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:wy,fragmentShader:Ey}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh,this.render=function(M,x,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=r.getRenderTarget(),v=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let F=0,J=M.length;F<J;F++){const X=M[F],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const H=D.getFrameExtents();if(i.multiply(H),s.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,D.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null&&!D.isPointLightShadow&&this.type===qr&&(D.map=new Fn(i.x,i.y),D.map.texture.name=X.name+".shadowMap",D.mapPass=new Fn(i.x,i.y),D.camera.updateProjectionMatrix()),D.map===null){const O={minFilter:ft,magFilter:ft,format:rn};D.map=new Fn(i.x,i.y,O),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}r.setRenderTarget(D.map),r.clear();const V=D.getViewportCount();for(let O=0;O<V;O++){const z=D.getViewport(O);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),N.viewport(o),D.updateMatrices(X,O),n=D.getFrustum(),E(x,A,D.camera,X,this.type)}!D.isPointLightShadow&&this.type===qr&&_(D,A),D.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(b,v,S)};function _(M,x){const A=e.update(f);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(x,null,A,d,f,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(x,null,A,p,f,null)}function y(M,x,A,b,v,S){let N=null;const F=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0?N=F:N=A.isPointLight===!0?l:a,r.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const J=N.uuid,X=x.uuid;let D=c[J];D===void 0&&(D={},c[J]=D);let H=D[X];H===void 0&&(H=N.clone(),D[X]=H),N=H}return N.visible=x.visible,N.wireframe=x.wireframe,S===qr?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:h[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaTest,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,A.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(A.matrixWorld),N.nearDistance=b,N.farDistance=v),N}function E(M,x,A,b,v){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===qr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const F=e.update(M),J=M.material;if(Array.isArray(J)){const X=F.groups;for(let D=0,H=X.length;D<H;D++){const V=X[D],O=J[V.materialIndex];if(O&&O.visible){const z=y(M,O,b,A.near,A.far,v);r.renderBufferDirect(A,null,F,z,M,V)}}}else if(J.visible){const X=y(M,J,b,A.near,A.far,v);r.renderBufferDirect(A,null,F,X,M,null)}}const N=M.children;for(let F=0,J=N.length;F<J;F++)E(N[F],x,A,b,v)}}function Ay(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const oe=new qe;let ae=null;const be=new qe(0,0,0,0);return{setMask:function(fe){ae!==fe&&!L&&(r.colorMask(fe,fe,fe,fe),ae=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Me,re,we,Ne){Ne===!0&&(fe*=we,Me*=we,re*=we),oe.set(fe,Me,re,we),be.equals(oe)===!1&&(r.clearColor(fe,Me,re,we),be.copy(oe))},reset:function(){L=!1,ae=null,be.set(-1,0,0,0)}}}function s(){let L=!1,oe=null,ae=null,be=null;return{setTest:function(fe){fe?ve(2929):C(2929)},setMask:function(fe){oe!==fe&&!L&&(r.depthMask(fe),oe=fe)},setFunc:function(fe){if(ae!==fe){if(fe)switch(fe){case Jm:r.depthFunc(512);break;case Km:r.depthFunc(519);break;case Qm:r.depthFunc(513);break;case qo:r.depthFunc(515);break;case eg:r.depthFunc(514);break;case tg:r.depthFunc(518);break;case ng:r.depthFunc(516);break;case ig:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ae=fe}},setLocked:function(fe){L=fe},setClear:function(fe){be!==fe&&(r.clearDepth(fe),be=fe)},reset:function(){L=!1,oe=null,ae=null,be=null}}}function o(){let L=!1,oe=null,ae=null,be=null,fe=null,Me=null,re=null,we=null,Ne=null;return{setTest:function(ze){L||(ze?ve(2960):C(2960))},setMask:function(ze){oe!==ze&&!L&&(r.stencilMask(ze),oe=ze)},setFunc:function(ze,_t,cn){(ae!==ze||be!==_t||fe!==cn)&&(r.stencilFunc(ze,_t,cn),ae=ze,be=_t,fe=cn)},setOp:function(ze,_t,cn){(Me!==ze||re!==_t||we!==cn)&&(r.stencilOp(ze,_t,cn),Me=ze,re=_t,we=cn)},setLocked:function(ze){L=ze},setClear:function(ze){Ne!==ze&&(r.clearStencil(ze),Ne=ze)},reset:function(){L=!1,oe=null,ae=null,be=null,fe=null,Me=null,re=null,we=null,Ne=null}}}const a=new i,l=new s,c=new o;let u={},h={},d=new WeakMap,p=[],g=null,f=!1,m=null,_=null,y=null,E=null,M=null,x=null,A=null,b=!1,v=null,S=null,N=null,F=null,J=null;const X=r.getParameter(35661);let D=!1,H=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),D=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),D=H>=2);let O=null,z={};const R=r.getParameter(3088),B=r.getParameter(2978),Y=new qe().fromArray(R),Q=new qe().fromArray(B);function ee(L,oe,ae){const be=new Uint8Array(4),fe=r.createTexture();r.bindTexture(L,fe),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Me=0;Me<ae;Me++)r.texImage2D(oe+Me,0,6408,1,1,0,6408,5121,be);return fe}const ce={};ce[3553]=ee(3553,3553,1),ce[34067]=ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(2929),l.setFunc(qo),Ue(!1),ke(Rc),ve(2884),ge(ni);function ve(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function C(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function te(L,oe){return h[L]!==oe?(r.bindFramebuffer(L,oe),h[L]=oe,n&&(L===36009&&(h[36160]=oe),L===36160&&(h[36009]=oe)),!0):!1}function ie(L,oe){let ae=p,be=!1;if(L)if(ae=d.get(oe),ae===void 0&&(ae=[],d.set(oe,ae)),L.isWebGLMultipleRenderTargets){const fe=L.texture;if(ae.length!==fe.length||ae[0]!==36064){for(let Me=0,re=fe.length;Me<re;Me++)ae[Me]=36064+Me;ae.length=fe.length,be=!0}}else ae[0]!==36064&&(ae[0]=36064,be=!0);else ae[0]!==1029&&(ae[0]=1029,be=!0);be&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ue(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const $={[sr]:32774,[km]:32778,[Vm]:32779};if(n)$[Oc]=32775,$[Fc]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&($[Oc]=L.MIN_EXT,$[Fc]=L.MAX_EXT)}const me={[Gm]:0,[Hm]:1,[Wm]:768,[Yh]:770,[Zm]:776,[Ym]:774,[qm]:772,[jm]:769,[$h]:771,[$m]:775,[Xm]:773};function ge(L,oe,ae,be,fe,Me,re,we){if(L===ni){f===!0&&(C(3042),f=!1);return}if(f===!1&&(ve(3042),f=!0),L!==Um){if(L!==m||we!==b){if((_!==sr||M!==sr)&&(r.blendEquation(32774),_=sr,M=sr),we)switch(L){case fr:r.blendFuncSeparate(1,771,1,771);break;case jo:r.blendFunc(1,1);break;case Lc:r.blendFuncSeparate(0,769,0,1);break;case Dc:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fr:r.blendFuncSeparate(770,771,1,771);break;case jo:r.blendFunc(770,1);break;case Lc:r.blendFuncSeparate(0,769,0,1);break;case Dc:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,E=null,x=null,A=null,m=L,b=we}return}fe=fe||oe,Me=Me||ae,re=re||be,(oe!==_||fe!==M)&&(r.blendEquationSeparate($[oe],$[fe]),_=oe,M=fe),(ae!==y||be!==E||Me!==x||re!==A)&&(r.blendFuncSeparate(me[ae],me[be],me[Me],me[re]),y=ae,E=be,x=Me,A=re),m=L,b=null}function _e(L,oe){L.side===yr?C(2884):ve(2884);let ae=L.side===sn;oe&&(ae=!ae),Ue(ae),L.blending===fr&&L.transparent===!1?ge(ni):ge(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const be=L.stencilWrite;c.setTest(be),be&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(32926):C(32926)}function Ue(L){v!==L&&(L?r.frontFace(2304):r.frontFace(2305),v=L)}function ke(L){L!==Im?(ve(2884),L!==S&&(L===Rc?r.cullFace(1029):L===Nm?r.cullFace(1028):r.cullFace(1032))):C(2884),S=L}function Ze(L){L!==N&&(D&&r.lineWidth(L),N=L)}function ht(L,oe,ae){L?(ve(32823),(F!==oe||J!==ae)&&(r.polygonOffset(oe,ae),F=oe,J=ae)):C(32823)}function et(L){L?ve(3089):C(3089)}function Fe(L){L===void 0&&(L=33984+X-1),O!==L&&(r.activeTexture(L),O=L)}function Mn(L,oe){O===null&&Fe();let ae=z[O];ae===void 0&&(ae={type:void 0,texture:void 0},z[O]=ae),(ae.type!==L||ae.texture!==oe)&&(r.bindTexture(L,oe||ce[L]),ae.type=L,ae.texture=oe)}function wn(){const L=z[O];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function P(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(L){Y.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Y.copy(L))}function pe(L){Q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function de(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},O=null,z={},h={},d=new WeakMap,p=[],g=null,f=!1,m=null,_=null,y=null,E=null,M=null,x=null,A=null,b=!1,v=null,S=null,N=null,F=null,J=null,Y.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ve,disable:C,bindFramebuffer:te,drawBuffers:ie,useProgram:ue,setBlending:ge,setMaterial:_e,setFlipSided:Ue,setCullFace:ke,setLineWidth:Ze,setPolygonOffset:ht,setScissorTest:et,activeTexture:Fe,bindTexture:Mn,unbindTexture:wn,compressedTexImage2D:P,texImage2D:Ee,texImage3D:j,texStorage2D:se,texStorage3D:he,texSubImage2D:w,texSubImage3D:q,compressedTexSubImage2D:ne,scissor:xe,viewport:pe,reset:de}}function Cy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,w){return _?new OffscreenCanvas(P,w):as("canvas")}function E(P,w,q,ne){let se=1;if((P.width>ne||P.height>ne)&&(se=ne/Math.max(P.width,P.height)),se<1||w===!0)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap){const he=w?ua:Math.floor,Ee=he(se*P.width),j=he(se*P.height);f===void 0&&(f=y(Ee,j));const xe=q?y(Ee,j):f;return xe.width=Ee,xe.height=j,xe.getContext("2d").drawImage(P,0,0,Ee,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ee+"x"+j+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function M(P){return Ko(P.width)&&Ko(P.height)}function x(P){return a?!1:P.wrapS!==nn||P.wrapT!==nn||P.minFilter!==ft&&P.minFilter!==Gt}function A(P,w){return P.generateMipmaps&&w&&P.minFilter!==ft&&P.minFilter!==Gt}function b(P){r.generateMipmap(P)}function v(P,w,q,ne,se=!1){if(a===!1)return w;if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=w;return w===6403&&(q===5126&&(he=33326),q===5131&&(he=33325),q===5121&&(he=33321)),w===33319&&(q===5126&&(he=33328),q===5131&&(he=33327),q===5121&&(he=33323)),w===6408&&(q===5126&&(he=34836),q===5131&&(he=34842),q===5121&&(he=ne===We&&se===!1?35907:32856),q===32819&&(he=32854),q===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(P,w,q){return A(P,q)===!0||P.isFramebufferTexture&&P.minFilter!==ft&&P.minFilter!==Gt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function N(P){return P===ft||P===Ic||P===Nc?9728:9729}function F(P){const w=P.target;w.removeEventListener("dispose",F),X(w),w.isVideoTexture&&g.delete(w)}function J(P){const w=P.target;w.removeEventListener("dispose",J),H(w)}function X(P){const w=n.get(P);if(w.__webglInit===void 0)return;const q=P.source,ne=m.get(q);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(P),Object.keys(ne).length===0&&m.delete(q)}n.remove(P)}function D(P){const w=n.get(P);r.deleteTexture(w.__webglTexture);const q=P.source,ne=m.get(q);delete ne[w.__cacheKey],o.memory.textures--}function H(P){const w=P.texture,q=n.get(P),ne=n.get(w);if(ne.__webglTexture!==void 0&&(r.deleteTexture(ne.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)r.deleteFramebuffer(q.__webglFramebuffer[se]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[se]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let se=0;se<q.__webglColorRenderbuffer.length;se++)q.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[se]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,he=w.length;se<he;se++){const Ee=n.get(w[se]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(w[se])}n.remove(w),n.remove(P)}let V=0;function O(){V=0}function z(){const P=V;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),V+=1,P}function R(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.encoding),w.join()}function B(P,w){const q=n.get(P);if(P.isVideoTexture&&Mn(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,P,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,q.__webglTexture)}function Y(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ie(q,P,w);return}t.activeTexture(33984+w),t.bindTexture(35866,q.__webglTexture)}function Q(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ie(q,P,w);return}t.activeTexture(33984+w),t.bindTexture(32879,q.__webglTexture)}function ee(P,w){const q=n.get(P);if(P.version>0&&q.__version!==P.version){ue(q,P,w);return}t.activeTexture(33984+w),t.bindTexture(34067,q.__webglTexture)}const ce={[$o]:10497,[nn]:33071,[Zo]:33648},ve={[ft]:9728,[Ic]:9984,[Nc]:9986,[Gt]:9729,[hg]:9985,[Da]:9987};function C(P,w,q){if(q?(r.texParameteri(P,10242,ce[w.wrapS]),r.texParameteri(P,10243,ce[w.wrapT]),(P===32879||P===35866)&&r.texParameteri(P,32882,ce[w.wrapR]),r.texParameteri(P,10240,ve[w.magFilter]),r.texParameteri(P,10241,ve[w.minFilter])):(r.texParameteri(P,10242,33071),r.texParameteri(P,10243,33071),(P===32879||P===35866)&&r.texParameteri(P,32882,33071),(w.wrapS!==nn||w.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(P,10240,N(w.magFilter)),r.texParameteri(P,10241,N(w.minFilter)),w.minFilter!==ft&&w.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.type===Zn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ss&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function te(P,w){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",F));const ne=w.source;let se=m.get(ne);se===void 0&&(se={},m.set(ne,se));const he=R(w);if(he!==P.__cacheKey){se[he]===void 0&&(se[he]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),se[he].usedTimes++;const Ee=se[P.__cacheKey];Ee!==void 0&&(se[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(w)),P.__cacheKey=he,P.__webglTexture=se[he].texture}return q}function ie(P,w,q){let ne=3553;w.isDataArrayTexture&&(ne=35866),w.isData3DTexture&&(ne=32879);const se=te(P,w),he=w.source;if(t.activeTexture(33984+q),t.bindTexture(ne,P.__webglTexture),he.version!==he.__currentVersion||se===!0){r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const Ee=x(w)&&M(w.image)===!1;let j=E(w.image,Ee,!1,u);j=wn(w,j);const xe=M(j)||a,pe=s.convert(w.format,w.encoding);let de=s.convert(w.type),L=v(w.internalFormat,pe,de,w.encoding,w.isVideoTexture);C(ne,w,xe);let oe;const ae=w.mipmaps,be=a&&w.isVideoTexture!==!0,fe=he.__currentVersion===void 0||se===!0,Me=S(w,j,xe);if(w.isDepthTexture)L=6402,a?w.type===Zn?L=36012:w.type===wi?L=33190:w.type===pr?L=35056:L=33189:w.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ci&&L===6402&&w.type!==Jh&&w.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=wi,de=s.convert(w.type)),w.format===Mr&&L===6402&&(L=34041,w.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=pr,de=s.convert(w.type))),fe&&(be?t.texStorage2D(3553,1,L,j.width,j.height):t.texImage2D(3553,0,L,j.width,j.height,0,pe,de,null));else if(w.isDataTexture)if(ae.length>0&&xe){be&&fe&&t.texStorage2D(3553,Me,L,ae[0].width,ae[0].height);for(let re=0,we=ae.length;re<we;re++)oe=ae[re],be?t.texSubImage2D(3553,re,0,0,oe.width,oe.height,pe,de,oe.data):t.texImage2D(3553,re,L,oe.width,oe.height,0,pe,de,oe.data);w.generateMipmaps=!1}else be?(fe&&t.texStorage2D(3553,Me,L,j.width,j.height),t.texSubImage2D(3553,0,0,0,j.width,j.height,pe,de,j.data)):t.texImage2D(3553,0,L,j.width,j.height,0,pe,de,j.data);else if(w.isCompressedTexture){be&&fe&&t.texStorage2D(3553,Me,L,ae[0].width,ae[0].height);for(let re=0,we=ae.length;re<we;re++)oe=ae[re],w.format!==rn?pe!==null?be?t.compressedTexSubImage2D(3553,re,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(3553,re,L,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,re,0,0,oe.width,oe.height,pe,de,oe.data):t.texImage2D(3553,re,L,oe.width,oe.height,0,pe,de,oe.data)}else if(w.isDataArrayTexture)be?(fe&&t.texStorage3D(35866,Me,L,j.width,j.height,j.depth),t.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,pe,de,j.data)):t.texImage3D(35866,0,L,j.width,j.height,j.depth,0,pe,de,j.data);else if(w.isData3DTexture)be?(fe&&t.texStorage3D(32879,Me,L,j.width,j.height,j.depth),t.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,pe,de,j.data)):t.texImage3D(32879,0,L,j.width,j.height,j.depth,0,pe,de,j.data);else if(w.isFramebufferTexture){if(fe)if(be)t.texStorage2D(3553,Me,L,j.width,j.height);else{let re=j.width,we=j.height;for(let Ne=0;Ne<Me;Ne++)t.texImage2D(3553,Ne,L,re,we,0,pe,de,null),re>>=1,we>>=1}}else if(ae.length>0&&xe){be&&fe&&t.texStorage2D(3553,Me,L,ae[0].width,ae[0].height);for(let re=0,we=ae.length;re<we;re++)oe=ae[re],be?t.texSubImage2D(3553,re,0,0,pe,de,oe):t.texImage2D(3553,re,L,pe,de,oe);w.generateMipmaps=!1}else be?(fe&&t.texStorage2D(3553,Me,L,j.width,j.height),t.texSubImage2D(3553,0,0,0,pe,de,j)):t.texImage2D(3553,0,L,pe,de,j);A(w,xe)&&b(ne),he.__currentVersion=he.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,q){if(w.image.length!==6)return;const ne=te(P,w),se=w.source;if(t.activeTexture(33984+q),t.bindTexture(34067,P.__webglTexture),se.version!==se.__currentVersion||ne===!0){r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const he=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,j=[];for(let re=0;re<6;re++)!he&&!Ee?j[re]=E(w.image[re],!1,!0,c):j[re]=Ee?w.image[re].image:w.image[re],j[re]=wn(w,j[re]);const xe=j[0],pe=M(xe)||a,de=s.convert(w.format,w.encoding),L=s.convert(w.type),oe=v(w.internalFormat,de,L,w.encoding),ae=a&&w.isVideoTexture!==!0,be=se.__currentVersion===void 0||ne===!0;let fe=S(w,xe,pe);C(34067,w,pe);let Me;if(he){ae&&be&&t.texStorage2D(34067,fe,oe,xe.width,xe.height);for(let re=0;re<6;re++){Me=j[re].mipmaps;for(let we=0;we<Me.length;we++){const Ne=Me[we];w.format!==rn?de!==null?ae?t.compressedTexSubImage2D(34069+re,we,0,0,Ne.width,Ne.height,de,Ne.data):t.compressedTexImage2D(34069+re,we,oe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(34069+re,we,0,0,Ne.width,Ne.height,de,L,Ne.data):t.texImage2D(34069+re,we,oe,Ne.width,Ne.height,0,de,L,Ne.data)}}}else{Me=w.mipmaps,ae&&be&&(Me.length>0&&fe++,t.texStorage2D(34067,fe,oe,j[0].width,j[0].height));for(let re=0;re<6;re++)if(Ee){ae?t.texSubImage2D(34069+re,0,0,0,j[re].width,j[re].height,de,L,j[re].data):t.texImage2D(34069+re,0,oe,j[re].width,j[re].height,0,de,L,j[re].data);for(let we=0;we<Me.length;we++){const ze=Me[we].image[re].image;ae?t.texSubImage2D(34069+re,we+1,0,0,ze.width,ze.height,de,L,ze.data):t.texImage2D(34069+re,we+1,oe,ze.width,ze.height,0,de,L,ze.data)}}else{ae?t.texSubImage2D(34069+re,0,0,0,de,L,j[re]):t.texImage2D(34069+re,0,oe,de,L,j[re]);for(let we=0;we<Me.length;we++){const Ne=Me[we];ae?t.texSubImage2D(34069+re,we+1,0,0,de,L,Ne.image[re]):t.texImage2D(34069+re,we+1,oe,de,L,Ne.image[re])}}}A(w,pe)&&b(34067),se.__currentVersion=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function $(P,w,q,ne,se){const he=s.convert(q.format,q.encoding),Ee=s.convert(q.type),j=v(q.internalFormat,he,Ee,q.encoding);n.get(w).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,j,w.width,w.height,w.depth,0,he,Ee,null):t.texImage2D(se,0,j,w.width,w.height,0,he,Ee,null)),t.bindFramebuffer(36160,P),Fe(w)?d.framebufferTexture2DMultisampleEXT(36160,ne,se,n.get(q).__webglTexture,0,et(w)):r.framebufferTexture2D(36160,ne,se,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function me(P,w,q){if(r.bindRenderbuffer(36161,P),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(q||Fe(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===Zn?ne=36012:se.type===wi&&(ne=33190));const he=et(w);Fe(w)?d.renderbufferStorageMultisampleEXT(36161,he,ne,w.width,w.height):r.renderbufferStorageMultisample(36161,he,ne,w.width,w.height)}else r.renderbufferStorage(36161,ne,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,P)}else if(w.depthBuffer&&w.stencilBuffer){const ne=et(w);q&&Fe(w)===!1?r.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Fe(w)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,P)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<ne.length;se++){const he=ne[se],Ee=s.convert(he.format,he.encoding),j=s.convert(he.type),xe=v(he.internalFormat,Ee,j,he.encoding),pe=et(w);q&&Fe(w)===!1?r.renderbufferStorageMultisample(36161,pe,xe,w.width,w.height):Fe(w)?d.renderbufferStorageMultisampleEXT(36161,pe,xe,w.width,w.height):r.renderbufferStorage(36161,xe,w.width,w.height)}}r.bindRenderbuffer(36161,null)}function ge(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),B(w.depthTexture,0);const ne=n.get(w.depthTexture).__webglTexture,se=et(w);if(w.depthTexture.format===Ci)Fe(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):r.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===Mr)Fe(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):r.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function _e(P){const w=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");ge(w.__webglFramebuffer,P)}else if(q){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=r.createRenderbuffer(),me(w.__webglDepthbuffer[ne],P,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),me(w.__webglDepthbuffer,P,!1);t.bindFramebuffer(36160,null)}function Ue(P,w,q){const ne=n.get(P);w!==void 0&&$(ne.__webglFramebuffer,P,P.texture,36064,3553),q!==void 0&&_e(P)}function ke(P){const w=P.texture,q=n.get(P),ne=n.get(w);P.addEventListener("dispose",J),P.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture()),ne.__version=w.version,o.memory.textures++);const se=P.isWebGLCubeRenderTarget===!0,he=P.isWebGLMultipleRenderTargets===!0,Ee=M(P)||a;if(se){q.__webglFramebuffer=[];for(let j=0;j<6;j++)q.__webglFramebuffer[j]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),he)if(i.drawBuffers){const j=P.texture;for(let xe=0,pe=j.length;xe<pe;xe++){const de=n.get(j[xe]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Fe(P)===!1){const j=he?w:[w];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let xe=0;xe<j.length;xe++){const pe=j[xe];q.__webglColorRenderbuffer[xe]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[xe]);const de=s.convert(pe.format,pe.encoding),L=s.convert(pe.type),oe=v(pe.internalFormat,de,L,pe.encoding),ae=et(P);r.renderbufferStorageMultisample(36161,ae,oe,P.width,P.height),r.framebufferRenderbuffer(36160,36064+xe,36161,q.__webglColorRenderbuffer[xe])}r.bindRenderbuffer(36161,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),me(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),C(34067,w,Ee);for(let j=0;j<6;j++)$(q.__webglFramebuffer[j],P,w,36064,34069+j);A(w,Ee)&&b(34067),t.unbindTexture()}else if(he){const j=P.texture;for(let xe=0,pe=j.length;xe<pe;xe++){const de=j[xe],L=n.get(de);t.bindTexture(3553,L.__webglTexture),C(3553,de,Ee),$(q.__webglFramebuffer,P,de,36064+xe,3553),A(de,Ee)&&b(3553)}t.unbindTexture()}else{let j=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?j=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(j,ne.__webglTexture),C(j,w,Ee),$(q.__webglFramebuffer,P,w,36064,j),A(w,Ee)&&b(j),t.unbindTexture()}P.depthBuffer&&_e(P)}function Ze(P){const w=M(P)||a,q=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ne=0,se=q.length;ne<se;ne++){const he=q[ne];if(A(he,w)){const Ee=P.isWebGLCubeRenderTarget?34067:3553,j=n.get(he).__webglTexture;t.bindTexture(Ee,j),b(Ee),t.unbindTexture()}}}function ht(P){if(a&&P.samples>0&&Fe(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],q=P.width,ne=P.height;let se=16384;const he=[],Ee=P.stencilBuffer?33306:36096,j=n.get(P),xe=P.isWebGLMultipleRenderTargets===!0;if(xe)for(let pe=0;pe<w.length;pe++)t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,j.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,j.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,j.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){he.push(36064+pe),P.depthBuffer&&he.push(Ee);const de=j.__ignoreDepthValues!==void 0?j.__ignoreDepthValues:!1;if(de===!1&&(P.depthBuffer&&(se|=256),P.stencilBuffer&&(se|=1024)),xe&&r.framebufferRenderbuffer(36008,36064,36161,j.__webglColorRenderbuffer[pe]),de===!0&&(r.invalidateFramebuffer(36008,[Ee]),r.invalidateFramebuffer(36009,[Ee])),xe){const L=n.get(w[pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,L,0)}r.blitFramebuffer(0,0,q,ne,0,0,q,ne,se,9728),p&&r.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),xe)for(let pe=0;pe<w.length;pe++){t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+pe,36161,j.__webglColorRenderbuffer[pe]);const de=n.get(w[pe]).__webglTexture;t.bindFramebuffer(36160,j.__webglFramebuffer),r.framebufferTexture2D(36009,36064+pe,3553,de,0)}t.bindFramebuffer(36009,j.__webglMultisampledFramebuffer)}}function et(P){return Math.min(h,P.samples)}function Fe(P){const w=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Mn(P){const w=o.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function wn(P,w){const q=P.encoding,ne=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Jo||q!==Fi&&(q===We?a===!1?e.has("EXT_sRGB")===!0&&ne===rn?(P.format=Jo,P.minFilter=Gt,P.generateMipmaps=!1):w=nd.sRGBToLinear(w):(ne!==rn||se!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),w}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=ee,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Fe}function Py(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Oi)return 5121;if(s===mg)return 32819;if(s===gg)return 32820;if(s===dg)return 5120;if(s===fg)return 5122;if(s===Jh)return 5123;if(s===pg)return 5124;if(s===wi)return 5125;if(s===Zn)return 5126;if(s===ss)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===_g)return 6406;if(s===rn)return 6408;if(s===Kh)return 6409;if(s===xg)return 6410;if(s===Ci)return 6402;if(s===Mr)return 34041;if(s===Qh)return 6403;if(s===vg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Jo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===yg)return 36244;if(s===bg)return 33319;if(s===Sg)return 33320;if(s===Mg)return 36249;if(s===Ja||s===Ka||s===Qa||s===eo)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zc||s===Bc||s===Uc||s===kc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===zc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Uc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vc||s===Gc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vc)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Hc||s===Wc||s===jc||s===qc||s===Xc||s===Yc||s===$c||s===Zc||s===Jc||s===Kc||s===Qc||s===eu||s===tu||s===nu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Hc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$c)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===eu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nu)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===iu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===iu)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===pr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Ry extends Mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $s extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ly))),c&&e.hand){o=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const y=new $s;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[f.jointName]=y,c.add(y)}const _=c.joints[f.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Dy extends zt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=wi),n===void 0&&u===Mr&&(n=pr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}class Oy extends Dr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,d=null,p=null;const g=t.getContextAttributes();let f=null,m=null;const _=[],y=new Map,E=new Mt;E.layers.enable(1),E.viewport=new qe;const M=new Mt;M.layers.enable(2),M.viewport=new qe;const x=[E,M],A=new Ry;A.layers.enable(1),A.layers.enable(2);let b=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let B=_[R];return B===void 0&&(B=new Co,_[R]=B),B.getTargetRaySpace()},this.getControllerGrip=function(R){let B=_[R];return B===void 0&&(B=new Co,_[R]=B),B.getGripSpace()},this.getHand=function(R){let B=_[R];return B===void 0&&(B=new Co,_[R]=B),B.getHandSpace()};function S(R){const B=y.get(R.inputSource);B!==void 0&&B.dispatchEvent({type:R.type,data:R.inputSource})}function N(){i.removeEventListener("select",S),i.removeEventListener("selectstart",S),i.removeEventListener("selectend",S),i.removeEventListener("squeeze",S),i.removeEventListener("squeezestart",S),i.removeEventListener("squeezeend",S),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F),y.forEach(function(R,B){R!==void 0&&R.disconnect(B)}),y.clear(),b=null,v=null,e.setRenderTarget(f),d=null,h=null,u=null,i=null,m=null,z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",S),i.addEventListener("selectstart",S),i.addEventListener("selectend",S),i.addEventListener("squeeze",S),i.addEventListener("squeezestart",S),i.addEventListener("squeezeend",S),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:d}),m=new Fn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Oi,encoding:e.outputEncoding})}else{let B=null,Y=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,B=g.stencil?Mr:Ci,Y=g.stencil?pr:wi);const ee={colorFormat:e.outputEncoding===We?35907:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),m=new Fn(h.textureWidth,h.textureHeight,{format:rn,type:Oi,depthTexture:new Dy(h.textureWidth,h.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ce=e.properties.get(m);ce.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),z.setContext(i),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(R){const B=i.inputSources;for(let Y=0;Y<B.length;Y++){const Q=B[Y].handedness==="right"?1:0;y.set(B[Y],_[Q])}for(let Y=0;Y<R.removed.length;Y++){const Q=R.removed[Y],ee=y.get(Q);ee&&(ee.dispatchEvent({type:"disconnected",data:Q}),y.delete(Q))}for(let Y=0;Y<R.added.length;Y++){const Q=R.added[Y],ee=y.get(Q);ee&&ee.dispatchEvent({type:"connected",data:Q})}}const J=new I,X=new I;function D(R,B,Y){J.setFromMatrixPosition(B.matrixWorld),X.setFromMatrixPosition(Y.matrixWorld);const Q=J.distanceTo(X),ee=B.projectionMatrix.elements,ce=Y.projectionMatrix.elements,ve=ee[14]/(ee[10]-1),C=ee[14]/(ee[10]+1),te=(ee[9]+1)/ee[5],ie=(ee[9]-1)/ee[5],ue=(ee[8]-1)/ee[0],$=(ce[8]+1)/ce[0],me=ve*ue,ge=ve*$,_e=Q/(-ue+$),Ue=_e*-ue;B.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ue),R.translateZ(_e),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const ke=ve+_e,Ze=C+_e,ht=me-Ue,et=ge+(Q-Ue),Fe=te*C/Ze*ke,Mn=ie*C/Ze*ke;R.projectionMatrix.makePerspective(ht,et,Fe,Mn,ke,Ze)}function H(R,B){B===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(B.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;A.near=M.near=E.near=R.near,A.far=M.far=E.far=R.far,(b!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),b=A.near,v=A.far);const B=R.parent,Y=A.cameras;H(A,B);for(let ee=0;ee<Y.length;ee++)H(Y[ee],B);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),R.position.copy(A.position),R.quaternion.copy(A.quaternion),R.scale.copy(A.scale),R.matrix.copy(A.matrix),R.matrixWorld.copy(A.matrixWorld);const Q=R.children;for(let ee=0,ce=Q.length;ee<ce;ee++)Q[ee].updateMatrixWorld(!0);Y.length===2?D(A,E,M):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(R){h!==null&&(h.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)};let V=null;function O(R,B){if(c=B.getViewerPose(l||o),p=B,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let ee=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,ee=!0);for(let ce=0;ce<Q.length;ce++){const ve=Q[ce];let C=null;if(d!==null)C=d.getViewport(ve);else{const ie=u.getViewSubImage(h,ve);C=ie.viewport,ce===0&&(e.setRenderTargetTextures(m,ie.colorTexture,h.ignoreDepthValues?void 0:ie.depthStencilTexture),e.setRenderTarget(m))}let te=x[ce];te===void 0&&(te=new Mt,te.layers.enable(ce),te.viewport=new qe,x[ce]=te),te.matrix.fromArray(ve.transform.matrix),te.projectionMatrix.fromArray(ve.projectionMatrix),te.viewport.set(C.x,C.y,C.width,C.height),ce===0&&A.matrix.copy(te.matrix),ee===!0&&A.cameras.push(te)}}const Y=i.inputSources;for(let Q=0;Q<_.length;Q++){const ee=Y[Q],ce=y.get(ee);ce!==void 0&&ce.update(ee,B,l||o)}V&&V(R,B),p=null}const z=new cd;z.setAnimationLoop(O),this.setAnimationLoop=function(R){V=R},this.dispose=function(){}}}function Fy(r,e){function t(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,_,y,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(f,m):m.isMeshToonMaterial?(i(f,m),u(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),h(f,m),m.isMeshPhysicalMaterial&&d(f,m,E)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?i(f,m):m.isMeshDistanceMaterial?(i(f,m),g(f,m)):m.isMeshNormalMaterial?i(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?a(f,m,_,y):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===sn&&(f.bumpScale.value*=-1)),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===sn&&f.normalScale.value.negate()),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const M=r.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*M}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uv2Transform.value.copy(E.matrix))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,_,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*_,f.scale.value=y*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uvTransform.value.copy(E.matrix))}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function h(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,_){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===sn&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Iy(){const r=as("canvas");return r.style.display="block",r}function Bl(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Iy(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fi,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let m=!1,_=0,y=0,E=null,M=-1,x=null;const A=new qe,b=new qe;let v=null,S=e.width,N=e.height,F=1,J=null,X=null;const D=new qe(0,0,S,N),H=new qe(0,0,S,N);let V=!1;const O=new Il;let z=!1,R=!1,B=null;const Y=new Qe,Q=new Pe,ee=new I,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return E===null?F:1}let C=t;function te(T,U){for(let W=0;W<T.length;W++){const G=T[W],K=e.getContext(G,U);if(K!==null)return K}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pl}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",ae,!1),C===null){const U=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&U.shift(),C=te(U,T),C===null)throw te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,ue,$,me,ge,_e,Ue,ke,Ze,ht,et,Fe,Mn,wn,P,w,q,ne,se,he,Ee,j,xe;function pe(){ie=new Yv(C),ue=new Gv(C,ie,r),ie.init(ue),j=new Py(C,ie,ue),$=new Ay(C,ie,ue),me=new Jv(C),ge=new my,_e=new Cy(C,ie,$,ge,ue,j,me),Ue=new Wv(f),ke=new Xv(f),Ze=new c_(C,ue),xe=new kv(C,ie,Ze,ue),ht=new $v(C,Ze,me,xe),et=new tx(C,ht,Ze,me),se=new ex(C,ue,_e),w=new Hv(ge),Fe=new py(f,Ue,ke,ie,ue,xe,w),Mn=new Fy(f,ge),wn=new _y,P=new My(ie,ue),ne=new Uv(f,Ue,$,et,u,o),q=new Ty(f,et,ue),he=new Vv(C,ie,me,ue),Ee=new Zv(C,ie,me,ue),me.programs=Fe.programs,f.capabilities=ue,f.extensions=ie,f.properties=ge,f.renderLists=wn,f.shadowMap=q,f.state=$,f.info=me}pe();const de=new Oy(f,C);this.xr=de,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(S,N,!1))},this.getSize=function(T){return T.set(S,N)},this.setSize=function(T,U,W){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=T,N=U,e.width=Math.floor(T*F),e.height=Math.floor(U*F),W!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(S*F,N*F).floor()},this.setDrawingBufferSize=function(T,U,W){S=T,N=U,F=W,e.width=Math.floor(T*W),e.height=Math.floor(U*W),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,U,W,G){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,U,W,G),$.viewport(A.copy(D).multiplyScalar(F).floor())},this.getScissor=function(T){return T.copy(H)},this.setScissor=function(T,U,W,G){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,U,W,G),$.scissor(b.copy(H).multiplyScalar(F).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){$.setScissorTest(V=T)},this.setOpaqueSort=function(T){J=T},this.setTransparentSort=function(T){X=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,U=!0,W=!0){let G=0;T&&(G|=16384),U&&(G|=256),W&&(G|=1024),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",ae,!1),wn.dispose(),P.dispose(),ge.dispose(),Ue.dispose(),ke.dispose(),et.dispose(),xe.dispose(),Fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ne),de.removeEventListener("sessionend",ze),B&&(B.dispose(),B=null),_t.stop()};function L(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=me.autoReset,U=q.enabled,W=q.autoUpdate,G=q.needsUpdate,K=q.type;pe(),me.autoReset=T,q.enabled=U,q.autoUpdate=W,q.needsUpdate=G,q.type=K}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const U=T.target;U.removeEventListener("dispose",be),fe(U)}function fe(T){Me(T),ge.remove(T)}function Me(T){const U=ge.get(T).programs;U!==void 0&&(U.forEach(function(W){Fe.releaseProgram(W)}),T.isShaderMaterial&&Fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,W,G,K,Se){U===null&&(U=ce);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Ce=Jf(T,U,W,G,K);$.setMaterial(G,Te);let Ae=W.index;const Be=W.attributes.position;if(Ae===null){if(Be===void 0||Be.count===0)return}else if(Ae.count===0)return;let De=1;G.wireframe===!0&&(Ae=ht.getWireframeAttribute(W),De=2),xe.setup(K,G,Ce,W,Ae);let Oe,Xe=he;Ae!==null&&(Oe=Ze.get(Ae),Xe=Ee,Xe.setIndex(Oe));const pi=Ae!==null?Ae.count:Be.count,Bi=W.drawRange.start*De,Ui=W.drawRange.count*De,un=Se!==null?Se.start*De:0,Ie=Se!==null?Se.count*De:1/0,ki=Math.max(Bi,un),Je=Math.min(pi,Bi+Ui,un+Ie)-1,hn=Math.max(0,Je-ki+1);if(hn!==0){if(K.isMesh)G.wireframe===!0?($.setLineWidth(G.wireframeLinewidth*ve()),Xe.setMode(1)):Xe.setMode(4);else if(K.isLine){let Vn=G.linewidth;Vn===void 0&&(Vn=1),$.setLineWidth(Vn*ve()),K.isLineSegments?Xe.setMode(1):K.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else K.isPoints?Xe.setMode(0):K.isSprite&&Xe.setMode(4);if(K.isInstancedMesh)Xe.renderInstances(ki,hn,K.count);else if(W.isInstancedBufferGeometry){const Vn=Math.min(W.instanceCount,W._maxInstanceCount);Xe.renderInstances(ki,hn,Vn)}else Xe.render(ki,hn)}},this.compile=function(T,U){d=P.get(T),d.init(),g.push(d),T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(f.physicallyCorrectLights),T.traverse(function(W){const G=W.material;if(G)if(Array.isArray(G))for(let K=0;K<G.length;K++){const Se=G[K];Ga(Se,T,W)}else Ga(G,T,W)}),g.pop(),d=null};let re=null;function we(T){re&&re(T)}function Ne(){_t.stop()}function ze(){_t.start()}const _t=new cd;_t.setAnimationLoop(we),typeof self!="undefined"&&_t.setContext(self),this.setAnimationLoop=function(T){re=T,de.setAnimationLoop(T),T===null?_t.stop():_t.start()},de.addEventListener("sessionstart",Ne),de.addEventListener("sessionend",ze),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,U,E),d=P.get(T,g.length),d.init(),g.push(d),Y.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(Y),R=this.localClippingEnabled,z=w.init(this.clippingPlanes,R,U),h=wn.get(T,p.length),h.init(),p.push(h),cn(T,U,0,f.sortObjects),h.finish(),f.sortObjects===!0&&h.sort(J,X),z===!0&&w.beginShadows();const W=d.state.shadowsArray;if(q.render(W,T,U),z===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(h,T),d.setupLights(f.physicallyCorrectLights),U.isArrayCamera){const G=U.cameras;for(let K=0,Se=G.length;K<Se;K++){const Te=G[K];_c(h,T,Te,Te.viewport)}}else _c(h,T,U);E!==null&&(_e.updateMultisampleRenderTarget(E),_e.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(f,T,U),xe.resetDefaultState(),M=-1,x=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function cn(T,U,W,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||O.intersectsSprite(T)){G&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Te=et.update(T),Ce=T.material;Ce.visible&&h.push(T,Te,Ce,W,ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==me.render.frame&&(T.skeleton.update(),T.skeleton.frame=me.render.frame),!T.frustumCulled||O.intersectsObject(T))){G&&ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Te=et.update(T),Ce=T.material;if(Array.isArray(Ce)){const Ae=Te.groups;for(let Be=0,De=Ae.length;Be<De;Be++){const Oe=Ae[Be],Xe=Ce[Oe.materialIndex];Xe&&Xe.visible&&h.push(T,Te,Xe,W,ee.z,Oe)}}else Ce.visible&&h.push(T,Te,Ce,W,ee.z,null)}}const Se=T.children;for(let Te=0,Ce=Se.length;Te<Ce;Te++)cn(Se[Te],U,W,G)}function _c(T,U,W,G){const K=T.opaque,Se=T.transmissive,Te=T.transparent;d.setupLightsView(W),Se.length>0&&$f(K,U,W),G&&$.viewport(A.copy(G)),K.length>0&&Ts(K,U,W),Se.length>0&&Ts(Se,U,W),Te.length>0&&Ts(Te,U,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function $f(T,U,W){const G=ue.isWebGL2;B===null&&(B=new Fn(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?ss:Oi,minFilter:Da,samples:G&&s===!0?4:0})),f.getDrawingBufferSize(Q),G?B.setSize(Q.x,Q.y):B.setSize(ua(Q.x),ua(Q.y));const K=f.getRenderTarget();f.setRenderTarget(B),f.clear();const Se=f.toneMapping;f.toneMapping=On,Ts(T,U,W),f.toneMapping=Se,_e.updateMultisampleRenderTarget(B),_e.updateRenderTargetMipmap(B),f.setRenderTarget(K)}function Ts(T,U,W){const G=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Se=T.length;K<Se;K++){const Te=T[K],Ce=Te.object,Ae=Te.geometry,Be=G===null?Te.material:G,De=Te.group;Ce.layers.test(W.layers)&&Zf(Ce,U,W,Ae,Be,De)}}function Zf(T,U,W,G,K,Se){T.onBeforeRender(f,U,W,G,K,Se),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(f,U,W,G,T,Se),K.transparent===!0&&K.side===yr?(K.side=sn,K.needsUpdate=!0,f.renderBufferDirect(W,U,G,K,T,Se),K.side=rs,K.needsUpdate=!0,f.renderBufferDirect(W,U,G,K,T,Se),K.side=yr):f.renderBufferDirect(W,U,G,K,T,Se),T.onAfterRender(f,U,W,G,K,Se)}function Ga(T,U,W){U.isScene!==!0&&(U=ce);const G=ge.get(T),K=d.state.lights,Se=d.state.shadowsArray,Te=K.state.version,Ce=Fe.getParameters(T,K.state,Se,U,W),Ae=Fe.getProgramCacheKey(Ce);let Be=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?ke:Ue).get(T.envMap||G.environment),Be===void 0&&(T.addEventListener("dispose",be),Be=new Map,G.programs=Be);let De=Be.get(Ae);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===Te)return vc(T,Ce),De}else Ce.uniforms=Fe.getUniforms(T),T.onBuild(W,Ce,f),T.onBeforeCompile(Ce,f),De=Fe.acquireProgram(Ce,Ae),Be.set(Ae,De),G.uniforms=Ce.uniforms;const Oe=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=w.uniform),vc(T,Ce),G.needsLights=Qf(T),G.lightsStateVersion=Te,G.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotShadowMatrix.value=K.state.spotShadowMatrix,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Xe=De.getUniforms(),pi=sa.seqWithValue(Xe.seq,Oe);return G.currentProgram=De,G.uniformsList=pi,De}function vc(T,U){const W=ge.get(T);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Jf(T,U,W,G,K){U.isScene!==!0&&(U=ce),_e.resetTextureUnits();const Se=U.fog,Te=G.isMeshStandardMaterial?U.environment:null,Ce=E===null?f.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Fi,Ae=(G.isMeshStandardMaterial?ke:Ue).get(G.envMap||Te),Be=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,De=!!G.normalMap&&!!W.attributes.tangent,Oe=!!W.morphAttributes.position,Xe=!!W.morphAttributes.normal,pi=!!W.morphAttributes.color,Bi=G.toneMapped?f.toneMapping:On,Ui=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,un=Ui!==void 0?Ui.length:0,Ie=ge.get(G),ki=d.state.lights;if(z===!0&&(R===!0||T!==x)){const dn=T===x&&G.id===M;w.setState(G,T,dn)}let Je=!1;G.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==ki.state.version||Ie.outputEncoding!==Ce||K.isInstancedMesh&&Ie.instancing===!1||!K.isInstancedMesh&&Ie.instancing===!0||K.isSkinnedMesh&&Ie.skinning===!1||!K.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Ae||G.fog===!0&&Ie.fog!==Se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==w.numPlanes||Ie.numIntersection!==w.numIntersection)||Ie.vertexAlphas!==Be||Ie.vertexTangents!==De||Ie.morphTargets!==Oe||Ie.morphNormals!==Xe||Ie.morphColors!==pi||Ie.toneMapping!==Bi||ue.isWebGL2===!0&&Ie.morphTargetsCount!==un)&&(Je=!0):(Je=!0,Ie.__version=G.version);let hn=Ie.currentProgram;Je===!0&&(hn=Ga(G,U,K));let Vn=!1,Nr=!1,Ha=!1;const vt=hn.getUniforms(),zr=Ie.uniforms;if($.useProgram(hn.program)&&(Vn=!0,Nr=!0,Ha=!0),G.id!==M&&(M=G.id,Nr=!0),Vn||x!==T){if(vt.setValue(C,"projectionMatrix",T.projectionMatrix),ue.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,Nr=!0,Ha=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const dn=vt.map.cameraPosition;dn!==void 0&&dn.setValue(C,ee.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||K.isSkinnedMesh)&&vt.setValue(C,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){vt.setOptional(C,K,"bindMatrix"),vt.setOptional(C,K,"bindMatrixInverse");const dn=K.skeleton;dn&&(ue.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),vt.setValue(C,"boneTexture",dn.boneTexture,_e),vt.setValue(C,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wa=W.morphAttributes;return(Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&ue.isWebGL2===!0)&&se.update(K,W,G,hn),(Nr||Ie.receiveShadow!==K.receiveShadow)&&(Ie.receiveShadow=K.receiveShadow,vt.setValue(C,"receiveShadow",K.receiveShadow)),Nr&&(vt.setValue(C,"toneMappingExposure",f.toneMappingExposure),Ie.needsLights&&Kf(zr,Ha),Se&&G.fog===!0&&Mn.refreshFogUniforms(zr,Se),Mn.refreshMaterialUniforms(zr,G,F,N,B),sa.upload(C,Ie.uniformsList,zr,_e)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sa.upload(C,Ie.uniformsList,zr,_e),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(C,"center",K.center),vt.setValue(C,"modelViewMatrix",K.modelViewMatrix),vt.setValue(C,"normalMatrix",K.normalMatrix),vt.setValue(C,"modelMatrix",K.matrixWorld),hn}function Kf(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Qf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,W){ge.get(T.texture).__webglTexture=U,ge.get(T.depthTexture).__webglTexture=W;const G=ge.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=W===void 0,G.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const W=ge.get(T);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,W=0){E=T,_=U,y=W;let G=!0;if(T){const Ae=ge.get(T);Ae.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(36160,null),G=!1):Ae.__webglFramebuffer===void 0?_e.setupRenderTarget(T):Ae.__hasExternalTextures&&_e.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture)}let K=null,Se=!1,Te=!1;if(T){const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture)&&(Te=!0);const Be=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Be[U],Se=!0):ue.isWebGL2&&T.samples>0&&_e.useMultisampledRTT(T)===!1?K=ge.get(T).__webglMultisampledFramebuffer:K=Be,A.copy(T.viewport),b.copy(T.scissor),v=T.scissorTest}else A.copy(D).multiplyScalar(F).floor(),b.copy(H).multiplyScalar(F).floor(),v=V;if($.bindFramebuffer(36160,K)&&ue.drawBuffers&&G&&$.drawBuffers(T,K),$.viewport(A),$.scissor(b),$.setScissorTest(v),Se){const Ae=ge.get(T.texture);C.framebufferTexture2D(36160,36064,34069+U,Ae.__webglTexture,W)}else if(Te){const Ae=ge.get(T.texture),Be=U||0;C.framebufferTextureLayer(36160,36064,Ae.__webglTexture,W||0,Be)}M=-1},this.readRenderTargetPixels=function(T,U,W,G,K,Se,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){$.bindFramebuffer(36160,Ce);try{const Ae=T.texture,Be=Ae.format,De=Ae.type;if(Be!==rn&&j.convert(Be)!==C.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===ss&&(ie.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ie.has("EXT_color_buffer_float"));if(De!==Oi&&j.convert(De)!==C.getParameter(35738)&&!(De===Zn&&(ue.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&W>=0&&W<=T.height-K&&C.readPixels(U,W,G,K,j.convert(Be),j.convert(De),Se)}finally{const Ae=E!==null?ge.get(E).__webglFramebuffer:null;$.bindFramebuffer(36160,Ae)}}},this.copyFramebufferToTexture=function(T,U,W=0){const G=Math.pow(2,-W),K=Math.floor(U.image.width*G),Se=Math.floor(U.image.height*G);_e.setTexture2D(U,0),C.copyTexSubImage2D(3553,W,0,0,T.x,T.y,K,Se),$.unbindTexture()},this.copyTextureToTexture=function(T,U,W,G=0){const K=U.image.width,Se=U.image.height,Te=j.convert(W.format),Ce=j.convert(W.type);_e.setTexture2D(W,0),C.pixelStorei(37440,W.flipY),C.pixelStorei(37441,W.premultiplyAlpha),C.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?C.texSubImage2D(3553,G,T.x,T.y,K,Se,Te,Ce,U.image.data):U.isCompressedTexture?C.compressedTexSubImage2D(3553,G,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Te,U.mipmaps[0].data):C.texSubImage2D(3553,G,T.x,T.y,Te,Ce,U.image),G===0&&W.generateMipmaps&&C.generateMipmap(3553),$.unbindTexture()},this.copyTextureToTexture3D=function(T,U,W,G,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Ae=j.convert(G.format),Be=j.convert(G.type);let De;if(G.isData3DTexture)_e.setTexture3D(G,0),De=32879;else if(G.isDataArrayTexture)_e.setTexture2DArray(G,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(37440,G.flipY),C.pixelStorei(37441,G.premultiplyAlpha),C.pixelStorei(3317,G.unpackAlignment);const Oe=C.getParameter(3314),Xe=C.getParameter(32878),pi=C.getParameter(3316),Bi=C.getParameter(3315),Ui=C.getParameter(32877),un=W.isCompressedTexture?W.mipmaps[0]:W.image;C.pixelStorei(3314,un.width),C.pixelStorei(32878,un.height),C.pixelStorei(3316,T.min.x),C.pixelStorei(3315,T.min.y),C.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?C.texSubImage3D(De,K,U.x,U.y,U.z,Se,Te,Ce,Ae,Be,un.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(De,K,U.x,U.y,U.z,Se,Te,Ce,Ae,un.data)):C.texSubImage3D(De,K,U.x,U.y,U.z,Se,Te,Ce,Ae,Be,un),C.pixelStorei(3314,Oe),C.pixelStorei(32878,Xe),C.pixelStorei(3316,pi),C.pixelStorei(3315,Bi),C.pixelStorei(32877,Ui),K===0&&G.generateMipmaps&&C.generateMipmap(De),$.unbindTexture()},this.initTexture=function(T){_e.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){_=0,y=0,E=null,$.reset(),xe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ny extends Bl{}Ny.prototype.isWebGL1Renderer=!0;class _d extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class zy extends ut{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class By extends zt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=ft,u=ft,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vd extends ut{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class Ul extends ut{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ku=new Qe,el=new Ll,Zs=new Oa,Js=new I;class Uy extends yt{constructor(e=new Jt,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(i),Zs.radius+=s,e.ray.intersectsSphere(Zs)===!1)return;ku.copy(i).invert(),el.copy(e.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,f=p;g<f;g++){const m=c.getX(g);Js.fromBufferAttribute(h,m),Vu(Js,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,f=p;g<f;g++)Js.fromBufferAttribute(h,g),Vu(Js,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Vu(r,e,t,n,i,s,o){const a=el.distanceSqToPoint(r);if(a<t){const l=new I;el.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}new I;new I;new I;new I;new vn;class Na extends Jt{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const f=g/i*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(f),h.y=(e+t*Math.cos(m))*Math.sin(f),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(f),u.y=e*Math.sin(f),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const f=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,_=(i+1)*(p-1)+g,y=(i+1)*p+g;o.push(f,m,y),o.push(m,_,y)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}static fromJSON(e){return new Na(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ky extends ut{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Vy extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class za extends ut{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gy extends za{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hy extends ut{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wy extends ut{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class jy extends ut{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class qy extends ut{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Xy extends ut{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lr,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yy extends vd{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const $y={ShadowMaterial:ky,SpriteMaterial:zy,RawShaderMaterial:Vy,ShaderMaterial:$t,PointsMaterial:Ul,MeshPhysicalMaterial:Gy,MeshStandardMaterial:za,MeshPhongMaterial:Hy,MeshToonMaterial:Wy,MeshNormalMaterial:jy,MeshLambertMaterial:qy,MeshDepthMaterial:md,MeshDistanceMaterial:gd,MeshBasicMaterial:Ol,MeshMatcapMaterial:Xy,LineDashedMaterial:Yy,LineBasicMaterial:vd,Material:ut};ut.fromType=function(r){return new $y[r]};const Gu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class xd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Zy=new xd;class yd{constructor(e){this.manager=e!==void 0?e:Zy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Jy extends yd{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Gu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=as("img");function l(){u(),Gu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bd extends yd{constructor(e){super(e)}load(e,t,n,i){const s=new zt,o=new Jy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Sd extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Hu=new Qe,Wu=new I,ju=new I;class Md{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ju),t.updateMatrixWorld(),Hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qu=new Qe,Vr=new I,Po=new I;class Ky extends Md{constructor(){super(new Mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),i.makeTranslation(-Vr.x,-Vr.y,-Vr.z),qu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qu)}}class Qy extends Sd{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ky}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eb extends Md{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kl extends Sd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DefaultUp),this.updateMatrix(),this.target=new yt,this.shadow=new eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xu(){return(typeof performance=="undefined"?Date:performance).now()}const wd="\\[\\]\\.:\\/",Gl="[^"+wd+"]",tb="[^"+wd.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Gl);/(WCOD+)?/.source.replace("WCOD",tb);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl);class nb{constructor(e,t,n=0,i=1/0){this.ray=new Ll(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return tl(e,this,n,t),n.sort(Yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)tl(e[i],this,n,t);return n.sort(Yu),n}}function Yu(r,e){return r.distance-e.distance}function tl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)tl(i[s],e,t,!0)}}const fn=new Uint32Array(512),pn=new Uint32Array(512);for(let r=0;r<256;++r){const e=r-127;e<-27?(fn[r]=0,fn[r|256]=32768,pn[r]=24,pn[r|256]=24):e<-14?(fn[r]=1024>>-e-14,fn[r|256]=1024>>-e-14|32768,pn[r]=-e-1,pn[r|256]=-e-1):e<=15?(fn[r]=e+15<<10,fn[r|256]=e+15<<10|32768,pn[r]=13,pn[r|256]=13):e<128?(fn[r]=31744,fn[r|256]=64512,pn[r]=24,pn[r|256]=24):(fn[r]=31744,fn[r|256]=64512,pn[r]=13,pn[r|256]=13)}const Ed=new Uint32Array(2048),bs=new Uint32Array(64),ib=new Uint32Array(64);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Ed[r]=e|t}for(let r=1024;r<2048;++r)Ed[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)bs[r]=r<<23;bs[31]=1199570944;bs[32]=2147483648;for(let r=33;r<63;++r)bs[r]=2147483648+(r-32<<23);bs[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(ib[r]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);function rb(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function cr(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=r.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var $u=Array.prototype.forEach,Gr=Array.prototype.slice,Z={BREAK:{},extend:function(e){return this.each(Gr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Gr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Gr.call(arguments);return function(){for(var t=Gr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if($u&&e.forEach&&e.forEach===$u)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Gr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},sb=[{litmus:Z.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:cr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:cr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:cr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:cr}}},{litmus:Z.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Z.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Z.isObject,conversions:{RGBA_OBJ:{read:function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)&&Z.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Z.isNumber(e.r)&&Z.isNumber(e.g)&&Z.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)&&Z.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Z.isNumber(e.h)&&Z.isNumber(e.s)&&Z.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Hr=void 0,Ks=void 0,ha=function(){Ks=!1;var e=arguments.length>1?Z.toArray(arguments):arguments[0];return Z.each(sb,function(t){if(t.litmus(e))return Z.each(t.conversions,function(n,i){if(Hr=n.read(e),Ks===!1&&Hr!==!1)return Ks=Hr,Hr.conversionName=i,Hr.conversion=n,Z.BREAK}),Z.BREAK}),Ks},Zu=void 0,os={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(Zu=t*8)|e&~(255<<Zu)}},ab=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},on=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},ln=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),si=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},ui=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},hi=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},nt=function(){function r(){if(on(this,r),this.__state=ha.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return ln(r,[{key:"toString",value:function(){return cr(this)}},{key:"toHexString",value:function(){return cr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Hl(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(nt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(nt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function Wl(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(nt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(nt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}nt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=os.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")Z.extend(r.__state,os.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};nt.recalculateHSV=function(r){var e=os.rgb_to_hsv(r.r,r.g,r.b);Z.extend(r.__state,{s:e.s,v:e.v}),Z.isNaN(e.h)?Z.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};nt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Hl(nt.prototype,"r",2);Hl(nt.prototype,"g",1);Hl(nt.prototype,"b",0);Wl(nt.prototype,"h");Wl(nt.prototype,"s");Wl(nt.prototype,"v");Object.defineProperty(nt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(nt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=os.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var di=function(){function r(e,t){on(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return ln(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),ob={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Td={};Z.each(ob,function(r,e){Z.each(r,function(t){Td[t]=e})});var lb=/(\d+(\.\d+)?)px/;function mn(r){if(r==="0"||Z.isUndefined(r))return 0;var e=r.match(lb);return Z.isNull(e)?0:parseFloat(e[1])}var k={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;Z.isUndefined(s)&&(s=!0),Z.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=Td[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;Z.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Z.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),k},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),k},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return k},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return k},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return mn(t["border-left-width"])+mn(t["border-right-width"])+mn(t["padding-left"])+mn(t["padding-right"])+mn(t.width)},getHeight:function(e){var t=getComputedStyle(e);return mn(t["border-top-width"])+mn(t["border-bottom-width"])+mn(t["padding-top"])+mn(t["padding-bottom"])+mn(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},jl=function(r){ui(e,r);function e(t,n){on(this,e);var i=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return k.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return ln(e,[{key:"setValue",value:function(n){var i=si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(di),Ad=function(r){ui(e,r);function e(t,n,i){on(this,e);var s=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),Z.isArray(o)){var l={};Z.each(o,function(c){l[c]=c}),o=l}return Z.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),s.updateDisplay(),k.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return ln(e,[{key:"setValue",value:function(n){var i=si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return k.isActive(this.__select)?this:(this.__select.value=this.getValue(),si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(di),Cd=function(r){ui(e,r);function e(t,n){on(this,e);var i=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),k.bind(i.__input,"keyup",o),k.bind(i.__input,"change",o),k.bind(i.__input,"blur",a),k.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return ln(e,[{key:"updateDisplay",value:function(){return k.isActive(this.__input)||(this.__input.value=this.getValue()),si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(di);function Ju(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var ql=function(r){ui(e,r);function e(t,n,i){on(this,e);var s=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,Z.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ju(s.__impliedStep),s}return ln(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ju(n),this}}]),e}(di);function cb(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var ls=function(r){ui(e,r);function e(t,n,i){on(this,e);var s=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);Z.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var f=a-g.clientY;o.setValue(o.getValue()+f*o.__impliedStep),a=g.clientY}function d(){k.unbind(window,"mousemove",h),k.unbind(window,"mouseup",d),c()}function p(g){k.bind(window,"mousemove",h),k.bind(window,"mouseup",d),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),k.bind(s.__input,"change",l),k.bind(s.__input,"blur",u),k.bind(s.__input,"mousedown",p),k.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return ln(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():cb(this.getValue(),this.__precision),si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ql);function Ku(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var da=function(r){ui(e,r);function e(t,n,i,s,o){on(this,e);var a=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),k.bind(a.__background,"mousedown",c),k.bind(a.__background,"touchstart",d),k.addClass(a.__background,"slider"),k.addClass(a.__foreground,"slider-fg");function c(f){document.activeElement.blur(),k.bind(window,"mousemove",u),k.bind(window,"mouseup",h),u(f)}function u(f){f.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(Ku(f.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){k.unbind(window,"mousemove",u),k.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(f){f.touches.length===1&&(k.bind(window,"touchmove",p),k.bind(window,"touchend",g),p(f))}function p(f){var m=f.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(Ku(m,_.left,_.right,l.__min,l.__max))}function g(){k.unbind(window,"touchmove",p),k.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return ln(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",si(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ql),Xl=function(r){ui(e,r);function e(t,n,i){on(this,e);var s=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,k.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),k.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return ln(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(di),fa=function(r){ui(e,r);function e(t,n){on(this,e);var i=hi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new nt(i.getValue()),i.__temp=new nt(0);var s=i;i.domElement=document.createElement("div"),k.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",k.bind(i.__input,"keydown",function(f){f.keyCode===13&&h.call(this)}),k.bind(i.__input,"blur",h),k.bind(i.__selector,"mousedown",function(){k.addClass(this,"drag").bind(window,"mouseup",function(){k.removeClass(s.__selector,"drag")})}),k.bind(i.__selector,"touchstart",function(){k.addClass(this,"drag").bind(window,"touchend",function(){k.removeClass(s.__selector,"drag")})});var o=document.createElement("div");Z.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Z.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Z.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Z.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Z.extend(o.style,{width:"100%",height:"100%",background:"none"}),Qu(o,"top","rgba(0,0,0,0)","#000"),Z.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),hb(i.__hue_field),Z.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),k.bind(i.__saturation_field,"mousedown",a),k.bind(i.__saturation_field,"touchstart",a),k.bind(i.__field_knob,"mousedown",a),k.bind(i.__field_knob,"touchstart",a),k.bind(i.__hue_field,"mousedown",l),k.bind(i.__hue_field,"touchstart",l);function a(f){p(f),k.bind(window,"mousemove",p),k.bind(window,"touchmove",p),k.bind(window,"mouseup",c),k.bind(window,"touchend",c)}function l(f){g(f),k.bind(window,"mousemove",g),k.bind(window,"touchmove",g),k.bind(window,"mouseup",u),k.bind(window,"touchend",u)}function c(){k.unbind(window,"mousemove",p),k.unbind(window,"touchmove",p),k.unbind(window,"mouseup",c),k.unbind(window,"touchend",c),d()}function u(){k.unbind(window,"mousemove",g),k.unbind(window,"touchmove",g),k.unbind(window,"mouseup",u),k.unbind(window,"touchend",u),d()}function h(){var f=ha(this.value);f!==!1?(s.__color.__state=f,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function d(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function p(f){f.type.indexOf("touch")===-1&&f.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,y=_.clientX,E=_.clientY,M=(y-m.left)/(m.right-m.left),x=1-(E-m.top)/(m.bottom-m.top);return x>1?x=1:x<0&&(x=0),M>1?M=1:M<0&&(M=0),s.__color.v=x,s.__color.s=M,s.setValue(s.__color.toOriginal()),!1}function g(f){f.type.indexOf("touch")===-1&&f.preventDefault();var m=s.__hue_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,y=_.clientY,E=1-(y-m.top)/(m.bottom-m.top);return E>1?E=1:E<0&&(E=0),s.__color.h=E*360,s.setValue(s.__color.toOriginal()),!1}return i}return ln(e,[{key:"updateDisplay",value:function(){var n=ha(this.getValue());if(n!==!1){var i=!1;Z.each(nt.COMPONENTS,function(a){if(!Z.isUndefined(n[a])&&!Z.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Z.extend(this.__color.__state,n)}Z.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;Z.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Qu(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Z.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(di),ub=["-moz-","-o-","-webkit-","-ms-",""];function Qu(r,e,t,n){r.style.background="",Z.each(ub,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function hb(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var db={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},fb=`<div id="dg-save" class="dg dialogue">

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

</div>`,pb=function(e,t){var n=e[t];return Z.isArray(arguments[2])||Z.isObject(arguments[2])?new Ad(e,t,arguments[2]):Z.isNumber(n)?Z.isNumber(arguments[2])&&Z.isNumber(arguments[3])?Z.isNumber(arguments[4])?new da(e,t,arguments[2],arguments[3],arguments[4]):new da(e,t,arguments[2],arguments[3]):Z.isNumber(arguments[4])?new ls(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ls(e,t,{min:arguments[2],max:arguments[3]}):Z.isString(n)?new Cd(e,t):Z.isFunction(n)?new Xl(e,t,""):Z.isBoolean(n)?new jl(e,t):null};function mb(r){setTimeout(r,1e3/60)}var gb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||mb,_b=function(){function r(){on(this,r),this.backgroundElement=document.createElement("div"),Z.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),k.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Z.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;k.bind(this.backgroundElement,"click",function(){e.hide()})}return ln(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Z.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",k.unbind(t.domElement,"webkitTransitionEnd",i),k.unbind(t.domElement,"transitionend",i),k.unbind(t.domElement,"oTransitionEnd",i)};k.bind(this.domElement,"webkitTransitionEnd",n),k.bind(this.domElement,"transitionend",n),k.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-k.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-k.getHeight(this.domElement)/2+"px"}}]),r}(),vb=rb(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);db.inject(vb);var eh="dg",th=72,nh=20,cs="Default",Yr=function(){try{return!!window.localStorage}catch{return!1}}(),Qr=void 0,ih=!0,ar=void 0,Ro=!1,Pd=[],He=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),k.addClass(this.domElement,eh),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Z.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=Z.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Z.isUndefined(n.load)?n.load={preset:cs}:n.preset&&(n.load.preset=n.preset),Z.isUndefined(n.parent)&&n.hideable&&Pd.push(this),n.resizable=Z.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Z.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Yr&&localStorage.getItem(or(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(d){t.parent?t.getRoot().preset=d:n.load.preset=d,Sb(this),t.revert()}},width:{get:function(){return n.width},set:function(d){n.width=d,rl(t,d)}},name:{get:function(){return n.name},set:function(d){n.name=d,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(d){n.closed=d,n.closed?k.addClass(t.__ul,r.CLASS_CLOSED):k.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(d){Yr&&(i=d,d?k.bind(window,"unload",s):k.unbind(window,"unload",s),localStorage.setItem(or(t,"isLocal"),d))}}}),Z.isUndefined(n.parent)){if(this.closed=n.closed||!1,k.addClass(this.domElement,r.CLASS_MAIN),k.makeSelectable(this.domElement,!1),Yr&&i){t.useLocalStorage=!0;var a=localStorage.getItem(or(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,k.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(k.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(k.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),k.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);k.addClass(l,"controller-name"),o=Yl(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};k.addClass(this.__ul,r.CLASS_CLOSED),k.addClass(o,"title"),k.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Z.isUndefined(n.parent)&&(ih&&(ar=document.createElement("div"),k.addClass(ar,eh),k.addClass(ar,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ar),ih=!1),ar.appendChild(this.domElement),k.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||rl(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},k.bind(window,"resize",this.__resizeHandler),k.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),k.bind(this.__ul,"transitionend",this.__resizeHandler),k.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&bb(this),s=function(){Yr&&localStorage.getItem(or(t,"isLocal"))==="true"&&localStorage.setItem(or(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=t.getRoot();h.width+=1,Z.defer(function(){h.width-=1})}n.parent||u()};He.toggleHide=function(){Ro=!Ro,Z.each(Pd,function(r){r.domElement.style.display=Ro?"none":""})};He.CLASS_AUTO_PLACE="a";He.CLASS_AUTO_PLACE_CONTAINER="ac";He.CLASS_MAIN="main";He.CLASS_CONTROLLER_ROW="cr";He.CLASS_TOO_TALL="taller-than-window";He.CLASS_CLOSED="closed";He.CLASS_CLOSE_BUTTON="close-button";He.CLASS_CLOSE_TOP="close-top";He.CLASS_CLOSE_BOTTOM="close-bottom";He.CLASS_DRAG="drag";He.DEFAULT_WIDTH=245;He.TEXT_CLOSED="Close Controls";He.TEXT_OPEN="Open Controls";He._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===th||r.keyCode===th)&&He.toggleHide()};k.bind(window,"keydown",He._keydownHandler,!1);Z.extend(He.prototype,{add:function(e,t){return es(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return es(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Z.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ar.removeChild(this.domElement);var e=this;Z.each(this.__folders,function(t){e.removeFolder(t)}),k.unbind(window,"keydown",He._keydownHandler,!1),rh(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new He(t);this.__folders[e]=n;var i=Yl(this,n.domElement);return k.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],rh(e);var t=this;Z.each(e.__folders,function(n){e.removeFolder(n)}),Z.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=k.getOffset(e.__ul).top,n=0;Z.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=k.getHeight(i))}),window.innerHeight-t-nh<n?(k.addClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-nh+"px"):(k.removeClass(e.domElement,He.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Z.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Z.debounce(function(){this.onResize()},50),remember:function(){if(Z.isUndefined(Qr)&&(Qr=new _b,Qr.domElement.innerHTML=fb),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Z.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&yb(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&rl(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Qs(this)),e.folders={},Z.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Qs(this),nl(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[cs]=Qs(this,!0)),this.load.remembered[e]=Qs(this),this.preset=e,il(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Z.each(this.__controllers,function(t){this.getRoot().load.remembered?Rd(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Z.each(this.__folders,function(t){t.revert(t)}),e||nl(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Ld(this.__listening)},updateDisplay:function(){Z.each(this.__controllers,function(e){e.updateDisplay()}),Z.each(this.__folders,function(e){e.updateDisplay()})}});function Yl(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function rh(r){k.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&k.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function nl(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function xb(r,e,t){if(t.__li=e,t.__gui=r,Z.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),es(r,t.object,t.property,{before:a,factoryArgs:[Z.toArray(arguments)]})}if(Z.isArray(o)||Z.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),es(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof da){var n=new ls(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Z.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),k.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof ls){var i=function(o){if(Z.isNumber(t.__min)&&Z.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=es(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=Z.compose(i,t.min),t.max=Z.compose(i,t.max)}else t instanceof jl?(k.bind(e,"click",function(){k.fakeEvent(t.__checkbox,"click")}),k.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Xl?(k.bind(e,"click",function(){k.fakeEvent(t.__button,"click")}),k.bind(e,"mouseover",function(){k.addClass(t.__button,"hover")}),k.bind(e,"mouseout",function(){k.removeClass(t.__button,"hover")})):t instanceof fa&&(k.addClass(e,"color"),t.updateDisplay=Z.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Z.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&nl(r.getRoot(),!0),s},t.setValue)}function Rd(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[cs])o=s[cs];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function es(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new fa(e,t);else{var s=[e,t].concat(n.factoryArgs);i=pb.apply(r,s)}n.before instanceof di&&(n.before=n.before.__li),Rd(r,i),k.addClass(i.domElement,"c");var o=document.createElement("span");k.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Yl(r,a,n.before);return k.addClass(l,He.CLASS_CONTROLLER_ROW),i instanceof fa?k.addClass(l,"color"):k.addClass(l,ab(i.getValue())),xb(r,l,i),r.__controllers.push(i),i}function or(r,e){return document.location.href+"."+e}function il(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function sh(r,e){e.style.display=r.useLocalStorage?"block":"none"}function yb(r){var e=r.__save_row=document.createElement("li");k.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),k.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",k.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",k.addClass(n,"button"),k.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",k.addClass(i,"button"),k.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",k.addClass(s,"button"),k.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?Z.each(r.load.remembered,function(h,d){il(r,d,d===r.preset)}):il(r,cs,!1),k.bind(o,"change",function(){for(var h=0;h<r.__preset_select.length;h++)r.__preset_select[h].innerHTML=r.__preset_select[h].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Yr){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(or(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),sh(r,a),k.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,sh(r,a)})}var u=document.getElementById("dg-new-constructor");k.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Qr.hide()}),k.bind(t,"click",function(){u.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Qr.show(),u.focus(),u.select()}),k.bind(n,"click",function(){r.save()}),k.bind(i,"click",function(){var h=prompt("Enter a new preset name.");h&&r.saveAs(h)}),k.bind(s,"click",function(){r.revert()})}function bb(r){var e=void 0;r.__resize_handle=document.createElement("div"),Z.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){k.removeClass(r.__closeButton,He.CLASS_DRAG),k.unbind(window,"mousemove",t),k.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,k.addClass(r.__closeButton,He.CLASS_DRAG),k.bind(window,"mousemove",t),k.bind(window,"mouseup",n),!1}k.bind(r.__resize_handle,"mousedown",i),k.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function rl(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function Qs(r,e){var t={};return Z.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];Z.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function Sb(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function Ld(r){r.length!==0&&gb.call(window,function(){Ld(r)}),Z.each(r,function(e){e.updateDisplay()})}var Mb={Color:nt,math:os,interpret:ha},wb={Controller:di,BooleanController:jl,OptionController:Ad,StringController:Cd,NumberController:ql,NumberControllerBox:ls,NumberControllerSlider:da,FunctionController:Xl,ColorController:fa},Eb={dom:k},Tb={GUI:He},Ab=He,Cb={color:Mb,controllers:wb,dom:Eb,gui:Tb,GUI:Ab},Dd="/ChetanK-Portfolio/assets/rock.7f45bb96.png",Pb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAq1BMVEUAAAAGBgYLCwsQEBAYGBggICAcHBwUFBQnJyckJCQxMTHh4eHa2to+Pj7q6urKysqqqqouLi7n5+fk5ORiYmLt7e3X19fR0dG9vb25ubmenp6MjIx/f39HR0c6OjpdXV3v7+97e3tPT08rKys2NjbOzs7Dw8O0tLSWlpaSkpJ3d3d1dXVvb29sbGxbW1tXV1dUVFRMTExERERBQUGgoKA1NTXx8fHc3NyhoaGopjlnAAAB/ElEQVRIx+3WyZKbMBAG4CQTh1UGgcy+BIz3fZuZ93+ytBuqL4JiHF3nP/nyVbeMpNaP77yen5T/UJRX2C/KVympNwzZLzBCmkZ4jLYMjfYbAz+IjrgnA/GnyxMjlaTkNFSTLmi1To44VIahQwwDrSRlB+WAAeLchHAOGCgUHZTkgM3NpmC36/XGioc5B0pywL21jjcsr0/Hsjye6pw1vJVtt30Q1ofOLPKzOOyqLKt2B3HOCxOlBhKhXLBz7FLus3Sd3O/JOs325YV1EktKEBudTMDVYpsm7iqOonjlJulW1CixWYD9BXVeXES1ceOlswjDhbOM3U0lLgXXqaRcEJwxb/Jyu3EjJwxsSBA6kbvZlnkzh2axpAyxoMnO+xRcYFsYOwCZ7s+sLSlB6vSRiyyJneDD8n3P833rI3DiJBP5g3rtWSJ0WtSH1F2GtuV7U4jnW3a4dNNDXUCvtEh5iZydduuVEzzdDPKUgbNa706M0yJ7oG7ejlUSL6DgdPYXMptCyUWcVMebqQ9ADeG1zO4RdOoBfH8H6EGv0T0rrwg1ZTjeqie1qvDnKHyOsQ3g9WwAhS2nssnVjxUdZGPwIFPB8avj87Pv6lC4rEavRyGGr0f1C1keASZGGgEKQ0dpzKkPVnmUA8BIo1zh8aD0XFF/IKk/yciS+s7L+QfFrE8fdgvs9QAAAABJRU5ErkJggg==";function Ln(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Od(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Er={duration:.5,overwrite:!1,delay:0},$l,jt=1e8,Ge=1/jt,sl=Math.PI*2,Rb=sl/4,Lb=0,Fd=Math.sqrt,Db=Math.cos,Ob=Math.sin,at=function(e){return typeof e=="string"},st=function(e){return typeof e=="function"},Bn=function(e){return typeof e=="number"},Zl=function(e){return typeof e=="undefined"},Un=function(e){return typeof e=="object"},At=function(e){return e!==!1},Id=function(){return typeof window!="undefined"},ea=function(e){return st(e)||at(e)},Nd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,al=/(?:-?\.?\d|\.)+/gi,zd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ur=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bd=/[+-]=-?[.\d]+/,Ud=/[^,'"\[\]\s]+/gi,Fb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,gn,ol,Jl,Bt={},pa={},kd,Vd=function(e){return(pa=Ii(e,Bt))&&an},Kl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ma=function(e,t){return!t&&console.warn(e)},Gd=function(e,t){return e&&(Bt[e]=t)&&pa&&(pa[e]=t)||Bt},us=function(){return 0},Ql={},ii=[],ll={},Hd,Ft={},Do={},ah=30,aa=[],ec="",tc=function(e){var t=e[0],n,i;if(Un(t)||st(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=aa.length;i--&&!aa[i].targetTest(t););n=aa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new df(e[i],n)))||e.splice(i,1);return e},Ri=function(e){return e._gsap||tc(qt(e))[0]._gsap},Wd=function(e,t,n){return(n=e[t])&&st(n)?e[t]():Zl(n)&&e.getAttribute&&e.getAttribute(t)||n},Ct=function(e,t){return(e=e.split(",")).forEach(t)||e},$e=function(e){return Math.round(e*1e5)/1e5||0},pt=function(e){return Math.round(e*1e7)/1e7||0},mr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ib=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ga=function(){var e=ii.length,t=ii.slice(0),n,i;for(ll={},ii.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jd=function(e,t,n,i){ii.length&&ga(),e.render(t,n,i),ii.length&&ga()},qd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ud).length<2?t:at(e)?e.trim():e},Xd=function(e){return e},Zt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nb=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ii=function(e,t){for(var n in t)e[n]=t[n];return e},oh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Un(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_a=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ts=function(e){var t=e.parent||je,n=e.keyframes?Nb(gt(e.keyframes)):Zt;if(At(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},zb=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Yd=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Ba=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},In=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Li=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Bb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ub=function r(e){return!e||e._ts&&r(e.parent)},lh=function(e){return e._repeat?Tr(e._tTime,e=e.duration()+e._rDelay)*e:0},Tr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},va=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ua=function(e){return e._end=pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ge)||0))},nc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=pt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ua(e),n._dirty||Li(n,e)),e},$d=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=va(e.rawTime(),t),(!t._dur||Ss(0,t.totalDuration(),n)-t._tTime>Ge)&&t.render(n,!0)),Li(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ge}},xn=function(e,t,n,i){return t.parent&&In(t),t._start=pt((Bn(n)?n:n||e!==je?Vt(e,n,t):e._time)+t._delay),t._end=pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yd(e,t,"_first","_last",e._sort?"_start":0),cl(t)||(e._recent=t),i||$d(e,t),e},Zd=function(e,t){return(Bt.ScrollTrigger||Kl("scrollTrigger",t))&&Bt.ScrollTrigger.create(t,e)},Jd=function(e,t,n,i){if(rc(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hd!==It.frame)return ii.push(e),e._lazy=[t,i],1},kb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},cl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vb=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&kb(e)&&!(!e._initted&&cl(e))||(e._ts<0||e._dp._ts<0)&&!cl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ss(0,e._tDur,t),u=Tr(l,a),e._yoyo&&u&1&&(o=1-o),u!==Tr(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||i||e._zTime===Ge||!t&&e._zTime){if(!e._initted&&Jd(e,t,i,n))return;for(h=e._zTime,e._zTime=t||(n?Ge:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Xt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Xt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&In(e,1),n||(Xt(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gb=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ar=function(e,t,n,i){var s=e._repeat,o=pt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:pt(o*(s+1)+e._rDelay*s):o,a>0&&!i?nc(e,e._tTime=e._tDur*a):e.parent&&Ua(e),n||Li(e.parent,e),e},ch=function(e){return e instanceof Et?Li(e):Ar(e,e._dur)},Hb={_start:0,endTime:us,totalDuration:us},Vt=function r(e,t,n){var i=e.labels,s=e._recent||Hb,o=e.duration()>=jt?s.endTime(!1):e._dur,a,l,c;return at(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ns=function(e,t,n){var i=Bn(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=At(l.vars.inherit)&&l.parent;o.immediateRender=At(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rt(t[0],o,t[s+1])},fi=function(e,t){return e||e===0?t(e):t},Ss=function(e,t,n){return n<e?e:n>t?t:n},mt=function(e,t){return!at(e)||!(t=Fb.exec(e))?"":t[1]},Wb=function(e,t,n){return fi(n,function(i){return Ss(e,t,i)})},ul=[].slice,Kd=function(e,t){return e&&Un(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Un(e[0]))&&!e.nodeType&&e!==gn},jb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return at(i)&&!t||Kd(i,1)?(s=n).push.apply(s,qt(i)):n.push(i)})||n},qt=function(e,t,n){return at(e)&&!n&&(ol||!Cr())?ul.call((t||Jl).querySelectorAll(e),0):gt(e)?jb(e,n):Kd(e)?ul.call(e,0):e?[e]:[]},qb=function(e){return e=qt(e)[0]||ma("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qt(t,n.querySelectorAll?n:n===e?ma("Invalid scope")||Jl.createElement("div"):e)}},Qd=function(e){return e.sort(function(){return .5-Math.random()})},ef=function(e){if(st(e))return e;var t=Un(e)?e:{each:e},n=Di(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return at(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,p,g){var f=(g||t).length,m=o[f],_,y,E,M,x,A,b,v,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,jt])[1],!S){for(b=-jt;b<(b=g[S++].getBoundingClientRect().left)&&S<f;);S--}for(m=o[f]=[],_=l?Math.min(S,f)*u-.5:i%S,y=S===jt?0:l?f*h/S-.5:i/S|0,b=0,v=jt,A=0;A<f;A++)E=A%S-_,M=y-(A/S|0),m[A]=x=c?Math.abs(c==="y"?M:E):Fd(E*E+M*M),x>b&&(b=x),x<v&&(v=x);i==="random"&&Qd(m),m.max=b-v,m.min=v,m.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c==="y"?f/S:S:Math.max(S,f/S))||0)*(i==="edges"?-1:1),m.b=f<0?s-f:s,m.u=mt(t.amount||t.each)||0,n=n&&f<0?cf(n):n}return f=(m[d]-m.min)/m.max||0,pt(m.b+(n?n(f):f)*m.v)+m.u}},hl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Bn(n)?0:mt(n))}},tf=function(e,t){var n=gt(e),i,s;return!n&&Un(e)&&(i=n=e.radius||jt,e.values?(e=qt(e.values),(s=!Bn(e[0]))&&(i*=i)):e=hl(e.increment)),fi(t,n?st(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=jt,u=0,h=e.length,d,p;h--;)s?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Bn(o)?u:u+mt(o)}:hl(e))},nf=function(e,t,n,i){return fi(gt(e)?!t:n===!0?!!(n=0):!i,function(){return gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Xb=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Yb=function(e,t){return function(n){return e(parseFloat(n))+(t||mt(n))}},$b=function(e,t,n){return sf(e,t,0,1,n)},rf=function(e,t,n){return fi(n,function(i){return e[~~t(i)]})},Zb=function r(e,t,n){var i=t-e;return gt(e)?rf(e,r(0,e.length),t):fi(n,function(s){return(i+(s-e)%i)%i+e})},Jb=function r(e,t,n){var i=t-e,s=i*2;return gt(e)?rf(e,r(0,e.length-1),t):fi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},hs=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Ud:al),n+=e.substr(t,i-t)+nf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},sf=function(e,t,n,i,s){var o=t-e,a=i-n;return fi(s,function(l){return n+((l-e)/o*a||0)})},Kb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=at(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var f=Math.min(d,~~g);return u[f](g-f)},n=t}else i||(e=Ii(gt(e)?[]:{},e));if(!u){for(l in t)ic.call(a,e,l,"get",t[l]);s=function(g){return oc(g,a)||(o?e.p:e)}}}return fi(n,s)},uh=function(e,t,n){var i=e.labels,s=jt,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Xt=function(e,t,n){var i=e.vars,s=i[t],o,a;if(!!s)return o=i[t+"Params"],a=i.callbackScope||e,n&&ii.length&&ga(),o?s.apply(a,o):s.call(a)},$r=function(e){return In(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Xt(e,"onInterrupt"),e},hr,Qb=function(e){e=!e.name&&e.default||e;var t=e.name,n=st(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:us,render:oc,add:ic,kill:mS,modifier:pS,rawVars:0},o={targetTest:0,get:0,getSetter:ac,aliases:{},register:0};if(Cr(),e!==i){if(Ft[t])return;Zt(i,Zt(_a(e,s),o)),Ii(i.prototype,Ii(s,_a(e,o))),Ft[i.prop=t]=i,e.targetTest&&(aa.push(i),Ql[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gd(t,i),e.register&&e.register(an,i,Pt)},Ve=255,Zr={aqua:[0,Ve,Ve],lime:[0,Ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ve],navy:[0,0,128],white:[Ve,Ve,Ve],olive:[128,128,0],yellow:[Ve,Ve,0],orange:[Ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ve,0,0],pink:[Ve,192,203],cyan:[0,Ve,Ve],transparent:[Ve,Ve,Ve,0]},Oo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ve+.5|0},af=function(e,t,n){var i=e?Bn(e)?[e>>16,e>>8&Ve,e&Ve]:0:Zr.black,s,o,a,l,c,u,h,d,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zr[e])i=Zr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ve,i&Ve,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ve,e&Ve]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(al),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Oo(l+1/3,s,o),i[1]=Oo(l,s,o),i[2]=Oo(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(zd),n&&i.length<4&&(i[3]=1),i}else i=e.match(al)||Zr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ve,o=i[1]/Ve,a=i[2]/Ve,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},of=function(e){var t=[],n=[],i=-1;return e.split(ri).forEach(function(s){var o=s.match(ur)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hh=function(e,t,n){var i="",s=(e+i).match(ri),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=af(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=of(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(ri,"1").split(ur),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(ri),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},ri=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),eS=/hsl[a]?\(/,lf=function(e){var t=e.join(" "),n;if(ri.lastIndex=0,ri.test(t))return n=eS.test(t),e[1]=hh(e[1],n),e[0]=hh(e[0],n,of(e[1])),!0},ds,It=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,d,p,g=function f(m){var _=r()-i,y=m===!0,E,M,x,A;if(_>e&&(n+=_-t),i+=_,x=i-n,E=x-o,(E>0||y)&&(A=++h.frame,d=x-h.time*1e3,h.time=x=x/1e3,o+=E+(E>=s?4:s-E),M=1),y||(l=c(f)),M)for(p=0;p<a.length;p++)a[p](x,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){kd&&(!ol&&Id()&&(gn=ol=window,Jl=gn.document||{},Bt.gsap=an,(gn.gsapVersions||(gn.gsapVersions=[])).push(an.version),Vd(pa||gn.GreenSockGlobals||!gn.gsap&&gn||{}),u=gn.requestAnimationFrame),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ds=1,g(2))},sleep:function(){(u?gn.cancelAnimationFrame:clearTimeout)(l),ds=0,c=us},lagSmoothing:function(m,_){e=m||1/Ge,t=Math.min(_,e,0)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,y){var E=_?function(M,x,A,b){m(M,x,A,b),h.remove(E)}:m;return h.remove(m),a[y?"unshift":"push"](E),Cr(),E},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),Cr=function(){return!ds&&It.wake()},Le={},tS=/^[\d.\-M][\d.\-,\s]/,nS=/["']/g,iS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(nS,"").trim():+c,i=l.substr(a+1).trim();return t},rS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sS=function(e){var t=(e+"").split("("),n=Le[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iS(t[1])]:rS(e).split(",").map(qd)):Le._CE&&tS.test(e)?Le._CE("",e):n},cf=function(e){return function(t){return 1-e(1-t)}},uf=function r(e,t){for(var n=e._first,i;n;)n instanceof Et?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Di=function(e,t){return e&&(st(e)?e:Le[e]||sS(e))||t},Ni=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Ct(e,function(a){Le[a]=Bt[a]=s,Le[o=a.toLowerCase()]=n;for(var l in s)Le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Le[a+"."+l]=s[l]}),s},hf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/sl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ob((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:hf(a);return s=sl/s,l.config=function(c,u){return r(e,c,u)},l},Io=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:hf(n);return i.config=function(s){return r(e,s)},i};Ct("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ni(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Le.Linear.easeNone=Le.none=Le.Linear.easeIn;Ni("Elastic",Fo("in"),Fo("out"),Fo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ni("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ni("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Ni("Circ",function(r){return-(Fd(1-r*r)-1)});Ni("Sine",function(r){return r===1?1:-Db(r*Rb)+1});Ni("Back",Io("in"),Io("out"),Io());Le.SteppedEase=Le.steps=Bt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ge;return function(a){return((i*Ss(0,o,a)|0)+s)*n}}};Er.ease=Le["quad.out"];Ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ec+=r+","+r+"Params,"});var df=function(e,t){this.id=Lb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wd,this.set=t?t.getSetter:ac},fs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ar(this,+t.duration,1,1),this.data=t.data,ds||It.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ar(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Cr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nc(this,n),!s._dp||s.parent||$d(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Tr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?va(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ge?0:this._rts,this.totalTime(Ss(-this._delay,this._tDur,i),!0),Ua(this),Bb(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(At(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?va(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ch(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ch(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vt(this,n),At(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,At(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ge:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ge)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=st(n)?n:Xd,a=function(){var c=i.then;i.then=null,st(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){$r(this)},r}();Zt(fs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Et=function(r){Od(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=At(n.sortChildren),je&&xn(n.parent||je,Ln(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zd(Ln(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ns(0,arguments,this),this},t.from=function(i,s,o){return ns(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ns(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ts(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rt(i,s,Vt(this,o),1),this},t.call=function(i,s,o){return xn(this,rt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rt(i,o,Vt(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ts(o).immediateRender=At(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ts(a).immediateRender=At(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:pt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,p,g,f,m,_,y,E,M,x,A,b;if(this!==je&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,M=this._start,E=this._ts,_=!E,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=pt(u%m),u===l?(f=this._repeat,d=c):(f=~~(u/m),f&&f===u/m&&(d=c,f--),d>c&&(d=c)),x=Tr(this._tTime,m),!a&&this._tTime&&x!==f&&(x=f),A&&f&1&&(d=c-d,b=1),f!==x&&!this._lock){var v=A&&x&1,S=v===(A&&f&1);if(f<x&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(b?0:pt(f*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Xt(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;uf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Gb(this,pt(a),pt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&(Xt(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=-Ge);break}}p=g}else{p=this._last;for(var N=i<0?i:d;p;){if(g=p._prev,(p._act||N<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(N-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(N-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!_){y=0,g&&(u+=this._zTime=N?-Ge:Ge);break}}p=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Ge)._zTime=d>=a?1:-1,this._ts))return this._start=M,Ua(this),this.render(i,s,o);this._onUpdate&&!s&&Xt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&In(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Xt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Bn(s)||(s=Vt(this,s,i)),!(i instanceof fs)){if(gt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(at(i))return this.addLabel(i,s);if(st(i))i=rt.delayedCall(0,i);else return this}return this!==i?xn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return at(i)?this.removeLabel(i):st(i)?this.killTweensOf(i):(Ba(this,i),i===this._recent&&(this._recent=this._last),Li(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=pt(It.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Vt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=rt.delayedCall(0,s||us,o);return a.data="isPause",this._hasPause=1,xn(this,a,Vt(this,i))},t.removePause=function(i){var s=this._first;for(i=Vt(this,i);s;)s._start===i&&s.data==="isPause"&&In(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Jn!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=qt(i),l=this._first,c=Bn(s),u;l;)l instanceof rt?Ib(l._targets,a)&&(c?(!Jn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Vt(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=rt.to(o,Zt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ge,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ar(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Zt({startAt:{time:Vt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),uh(this,Vt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),uh(this,Vt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ge)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Li(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return r.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Li(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=jt,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ar(o,o===je&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(je._ts&&(jd(je,va(i,je)),Hd=It.frame),It.frame>=ah){ah+=Nt.autoSleep||120;var s=je._first;if((!s||!s._ts)&&Nt.autoSleep&&It._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||It.sleep()}}},e}(fs);Zt(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});var aS=function(e,t,n,i,s,o,a){var l=new Pt(this._pt,e,t,0,1,vf,null,s),c=0,u=0,h,d,p,g,f,m,_,y;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=hs(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Lo)||[];h=Lo.exec(i);)g=h[0],f=i.substring(c,h.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:m,c:g.charAt(1)==="="?mr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Lo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Bd.test(i)||_)&&(l.e=0),this._pt=l,l},ic=function(e,t,n,i,s,o,a,l,c){st(i)&&(i=i(s||0,e,o));var u=e[t],h=n!=="get"?n:st(u)?c?e[t.indexOf("set")||!st(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=st(u)?c?hS:gf:sc,p;if(at(i)&&(~i.indexOf("random(")&&(i=hs(i)),i.charAt(1)==="="&&(p=mr(h,i)+(mt(h)||0),(p||p===0)&&(i=p))),h!==i||dl)return!isNaN(h*i)&&i!==""?(p=new Pt(this._pt,e,t,+h||0,i-(h||0),typeof u=="boolean"?fS:_f,0,d),c&&(p.fp=c),a&&p.modifier(a,this,e),this._pt=p):(!u&&!(t in e)&&Kl(t,i),aS.call(this,e,t,h,i,d,l||Nt.stringFilter,c))},oS=function(e,t,n,i,s){if(st(e)&&(e=is(e,s,t,n,i)),!Un(e)||e.style&&e.nodeType||gt(e)||Nd(e))return at(e)?is(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=is(e[a],s,t,n,i);return o},ff=function(e,t,n,i,s,o){var a,l,c,u;if(Ft[e]&&(a=new Ft[e]).init(s,a.rawVars?t[e]:oS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Pt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==hr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Jn,dl,rc=function r(e,t){var n=e.vars,i=n.ease,s=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,h=n.runBackwards,d=n.yoyoEase,p=n.keyframes,g=n.autoRevert,f=e._dur,m=e._startAt,_=e._targets,y=e.parent,E=y&&y.data==="nested"?y.parent._targets:_,M=e._overwrite==="auto"&&!$l,x=e.timeline,A,b,v,S,N,F,J,X,D,H,V,O,z;if(x&&(!p||!i)&&(i="none"),e._ease=Di(i,Er.ease),e._yEase=d?cf(Di(d===!0?i:d,Er.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!x&&!!n.runBackwards,!x||p&&!n.stagger){if(X=_[0]?Ri(_[0]).harness:0,O=X&&n[X.prop],A=_a(n,Ql),m&&(In(m.render(-1,!0)),m._lazy=0),s)if(In(e._startAt=rt.set(_,Zt({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:At(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),t<0&&!o&&!g&&e._startAt.render(-1,!0),o){if(t>0&&!g&&(e._startAt=0),f&&t<=0){t&&(e._zTime=t);return}}else g===!1&&(e._startAt=0);else if(h&&f){if(m)!g&&(e._startAt=0);else if(t&&(o=!1),v=Zt({overwrite:!1,data:"isFromStart",lazy:o&&At(a),immediateRender:o,stagger:0,parent:y},A),O&&(v[X.prop]=O),In(e._startAt=rt.set(_,v)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!o)r(e._startAt,Ge);else if(!t)return}for(e._pt=e._ptCache=0,a=f&&At(a)||a&&!f,b=0;b<_.length;b++){if(N=_[b],J=N._gsap||tc(_)[b]._gsap,e._ptLookup[b]=H={},ll[J.id]&&ii.length&&ga(),V=E===_?b:E.indexOf(N),X&&(D=new X).init(N,O||A,e,V,E)!==!1&&(e._pt=S=new Pt(e._pt,N,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(R){H[R]=S}),D.priority&&(F=1)),!X||O)for(v in A)Ft[v]&&(D=ff(v,A,e,V,N,E))?D.priority&&(F=1):H[v]=S=ic.call(e,N,v,"get",A[v],V,E,0,n.stringFilter);e._op&&e._op[b]&&e.kill(N,e._op[b]),M&&e._pt&&(Jn=e,je.killTweensOf(N,H,e.globalTime(t)),z=!e.parent,Jn=0),e._pt&&a&&(ll[J.id]=1)}F&&xf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!z,p&&t<=0&&x.render(jt,!0,!0)},lS=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h;if(!l)for(l=e._ptCache[t]=[],u=e._ptLookup,h=e._targets.length;h--;){if(c=u[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t;)c=c._next;if(!c)return dl=1,e.vars[t]="+=0",rc(e,a),dl=0,1;l.push(c)}for(h=l.length;h--;)c=l[h],c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,c.e&&(c.e=$e(n)+mt(c.e)),c.b&&(c.b=c.s+mt(c.b))},cS=function(e,t){var n=e[0]?Ri(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ii({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},uS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(gt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},is=function(e,t,n,i,s){return st(e)?e.call(t,n,i,s):at(e)&&~e.indexOf("random(")?hs(e):e},pf=ec+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mf={};Ct(pf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return mf[r]=1});var rt=function(r){Od(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ts(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,f=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,y=i.parent||je,E=(gt(n)||Nd(n)?Bn(n[0]):"length"in i)?[n]:qt(n),M,x,A,b,v,S,N,F;if(a._targets=E.length?tc(E):ma("GSAP target "+n+" not found. https://greensock.com",!Nt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||ea(c)||ea(u)){if(i=a.vars,M=a.timeline=new Et({data:"nested",defaults:f||{}}),M.kill(),M.parent=M._dp=Ln(a),M._start=0,d||ea(c)||ea(u)){if(b=E.length,N=d&&ef(d),Un(d))for(v in d)~pf.indexOf(v)&&(F||(F={}),F[v]=d[v]);for(x=0;x<b;x++)A=_a(i,mf),A.stagger=0,_&&(A.yoyoEase=_),F&&Ii(A,F),S=E[x],A.duration=+is(c,Ln(a),x,S,E),A.delay=(+is(u,Ln(a),x,S,E)||0)-a._delay,!d&&b===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),M.to(S,A,N?N(x,S,E):0),M._ease=Le.none;M.duration()?c=u=0:a.timeline=0}else if(g){ts(Zt(M.vars.defaults,{ease:"none"})),M._ease=Di(g.ease||i.ease||"none");var J=0,X,D,H;if(gt(g))g.forEach(function(V){return M.to(E,V,">")});else{A={};for(v in g)v==="ease"||v==="easeEach"||uS(v,g[v],A,g.easeEach);for(v in A)for(X=A[v].sort(function(V,O){return V.t-O.t}),J=0,x=0;x<X.length;x++)D=X[x],H={ease:D.e,duration:(D.t-(x?X[x-1].t:0))/100*c},H[v]=D.v,M.to(E,H,J),J+=H.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return p===!0&&!$l&&(Jn=Ln(a),je.killTweensOf(E),Jn=0),xn(y,Ln(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===pt(y._time)&&At(h)&&Ub(Ln(a))&&y.data!=="nested")&&(a._tTime=-Ge,a.render(Math.max(0,-u))),m&&Zd(Ln(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i>l-Ge&&i>=0?l:i<Ge?0:i,h,d,p,g,f,m,_,y,E;if(!c)Vb(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(h=u,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(h=pt(u%g),u===l?(p=this._repeat,h=c):(p=~~(u/g),p&&p===u/g&&(h=c,p--),h>c&&(h=c)),m=this._yoyo&&p&1,m&&(E=this._yEase,h=c-h),f=Tr(this._tTime,g),h===a&&!o&&this._initted)return this._tTime=u,this;p!==f&&(y&&this._yEase&&uf(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render(pt(g*p),!0).invalidate()._lock=0))}if(!this._initted){if(Jd(this,i<0?i:h,o,s))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(E||this._ease)(h/c),this._from&&(this.ratio=_=1-_),h&&!a&&!s&&(Xt(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;y&&y.render(i<0?i:!h&&m?-Ge:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),Xt(this,"onUpdate")),this._repeat&&p!==f&&this.vars.onRepeat&&!s&&this.parent&&Xt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&In(this,1),!s&&!(i<0&&!a)&&(u||a)&&(Xt(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.resetTo=function(i,s,o,a){ds||It.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||rc(this,l),c=this._ease(l/this._dur),lS(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(nc(this,0),this.parent||Yd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$r(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jn&&Jn.vars.overwrite!==!0)._first||$r(this),this.parent&&o!==this.timeline.totalDuration()&&Ar(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?qt(i):a,c=this._ptLookup,u=this._pt,h,d,p,g,f,m,_;if((!s||s==="all")&&zb(a,l))return s==="all"&&(this._pt=0),$r(this);for(h=this._op=this._op||[],s!=="all"&&(at(s)&&(f={},Ct(s,function(y){return f[y]=1}),s=f),s=cS(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(h[_]=s,g=d,p={}):(p=h[_]=h[_]||{},g=s);for(f in g)m=d&&d[f],m&&((!("kill"in m.d)||m.d.kill(f)===!0)&&Ba(this,m,"_pt"),delete d[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&u&&$r(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ns(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ns(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return je.killTweensOf(i,s,o)},e}(fs);Zt(rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ct("staggerTo,staggerFrom,staggerFromTo",function(r){rt[r]=function(){var e=new Et,t=ul.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var sc=function(e,t,n){return e[t]=n},gf=function(e,t,n){return e[t](n)},hS=function(e,t,n,i){return e[t](i.fp,n)},dS=function(e,t,n){return e.setAttribute(t,n)},ac=function(e,t){return st(e[t])?gf:Zl(e[t])&&e.setAttribute?dS:sc},_f=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},oc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},mS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ba(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},xf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Pt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||_f,this.d=l||this,this.set=c||sc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gS,this.m=n,this.mt=s,this.tween=i},r}();Ct(ec+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ql[r]=1});Bt.TweenMax=Bt.TweenLite=rt;Bt.TimelineLite=Bt.TimelineMax=Et;je=new Et({sortChildren:!1,defaults:Er,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nt.stringFilter=lf;var xa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Qb(i)})},timeline:function(e){return new Et(e)},getTweensOf:function(e,t){return je.getTweensOf(e,t)},getProperty:function(e,t,n,i){at(e)&&(e=qt(e)[0]);var s=Ri(e||{}).get,o=n?Xd:qd;return n==="native"&&(n=""),e&&(t?o((Ft[t]&&Ft[t].get||s)(e,t,n,i)):function(a,l,c){return o((Ft[a]&&Ft[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=qt(e),e.length>1){var i=e.map(function(u){return an.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Ft[t],a=Ri(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;hr._pt=0,h.init(e,n?u+n:u,hr,0,[e]),h.render(1,h),hr._pt&&oc(1,hr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=an.to(e,Ii((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Di(e.ease,Er.ease)),oh(Er,e||{})},config:function(e){return oh(Nt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ft[a]&&!Bt[a]&&ma(t+" effect requires "+a+" plugin.")}),Do[t]=function(a,l,c){return n(qt(a),Zt(l||{},s),c)},o&&(Et.prototype[t]=function(a,l,c){return this.add(Do[t](a,Un(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Le[e]=Di(t)},parseEase:function(e,t){return arguments.length?Di(e,t):Le},getById:function(e){return je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Et(e),i,s;for(n.smoothChildTiming=At(e.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,i=je._first;i;)s=i._next,(t||!(!i._dur&&i instanceof rt&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=s;return xn(je,n,0),n},utils:{wrap:Zb,wrapYoyo:Jb,distribute:ef,random:nf,snap:tf,normalize:$b,getUnit:mt,clamp:Wb,splitColor:af,toArray:qt,selector:qb,mapRange:sf,pipe:Xb,unitize:Yb,interpolate:Kb,shuffle:Qd},install:Vd,effects:Do,ticker:It,updateRoot:Et.updateRoot,plugins:Ft,globalTimeline:je,core:{PropTween:Pt,globals:Gd,Tween:rt,Timeline:Et,Animation:fs,getCache:Ri,_removeLinkedListItem:Ba,suppressOverwrites:function(e){return $l=e}}};Ct("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return xa[r]=rt[r]});It.add(Et.updateRoot);hr=xa.to({},{duration:0});var _S=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_S(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},No=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(at(s)&&(l={},Ct(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}vS(a,s)}}}},an=xa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a;for(o in t)a=this.add(e,"setAttribute",(e.getAttribute(o)||0)+"",t[o],i,s,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},No("roundProps",hl),No("modifiers"),No("snap",tf))||xa;rt.version=Et.version=an.version="3.10.4";kd=1;Id()&&Cr();Le.Power0;Le.Power1;Le.Power2;Le.Power3;Le.Power4;Le.Linear;Le.Quad;Le.Cubic;Le.Quart;Le.Quint;Le.Strong;Le.Elastic;Le.Back;Le.SteppedEase;Le.Bounce;Le.Sine;Le.Expo;Le.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dh,Kn,gr,lc,Ti,fh,xS=function(){return typeof window!="undefined"},ai={},bi=180/Math.PI,_r=Math.PI/180,ir=Math.atan2,ph=1e8,yf=/([A-Z])/g,yS=/(left|right|width|margin|padding|x)/i,bS=/[\s,\(]\S/,Qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},SS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Mf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ES=function(e,t,n){return e.style[t]=n},TS=function(e,t,n){return e.style.setProperty(t,n)},AS=function(e,t,n){return e._gsap[t]=n},CS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},PS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},RS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ct="transform",oi=ct+"Origin",wf,fl=function(e,t){var n=Kn.createElementNS?Kn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kn.createElement(e);return n.style?n:Kn.createElement(e)},Nn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Pr(t)||t,1)||""},mh="O,Moz,ms,Ms,Webkit".split(","),Pr=function(e,t,n){var i=t||Ti,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mh[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mh[o]:"")+e},pl=function(){xS()&&window.document&&(dh=window,Kn=dh.document,gr=Kn.documentElement,Ti=fl("div")||{style:{}},fl("div"),ct=Pr(ct),oi=ct+"Origin",Ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wf=!!Pr("perspective"),lc=1)},zo=function r(e){var t=fl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(gr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),gr.removeChild(t),this.style.cssText=s,o},gh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ef=function(e){var t;try{t=e.getBBox()}catch{t=zo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===zo||(t=zo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+gh(e,["x","cx","x1"])||0,y:+gh(e,["y","cy","y1"])||0,width:0,height:0}:t},Tf=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ef(e))},ps=function(e,t){if(t){var n=e.style;t in ai&&t!==oi&&(t=ct),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(yf,"-$1").toLowerCase())):n.removeAttribute(t)}},ei=function(e,t,n,i,s,o){var a=new Pt(e._pt,t,n,0,1,o?Mf:Sf);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},_h={deg:1,rad:1,turn:1},li=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ti.style,l=yS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",p=i==="%",g,f,m,_;return i===o||!s||_h[i]||_h[o]?s:(o!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&Tf(e),(p||o==="%")&&(ai[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],$e(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(d?o:i),f=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===Kn||!f.appendChild)&&(f=Kn.body),m=f._gsap,m&&p&&m.width&&l&&m.time===It.time?$e(s/m.width*h):((p||o==="%")&&(a.position=Nn(e,"position")),f===e&&(a.position="static"),f.appendChild(Ti),g=Ti[u],f.removeChild(Ti),a.position="absolute",l&&p&&(m=Ri(f),m.time=It.time,m.width=f[u]),$e(d?g*s/h:g&&s?h/g*s:0))))},Si=function(e,t,n,i){var s;return lc||pl(),t in Qn&&t!=="transform"&&(t=Qn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(s=gs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ba(Nn(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ya[t]&&ya[t](e,t,n)||Nn(e,t)||Wd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?li(e,t,s,n)+n:s},LS=function(e,t,n,i){if(!n||n==="none"){var s=Pr(t,e,1),o=s&&Nn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Nn(e,"borderTopColor"))}var a=new Pt(this._pt,e.style,t,0,1,vf),l=0,c=0,u,h,d,p,g,f,m,_,y,E,M,x;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Nn(e,t)||i,e.style[t]=n),u=[n,i],lf(u),n=u[0],i=u[1],d=n.match(ur)||[],x=i.match(ur)||[],x.length){for(;h=ur.exec(i);)m=h[0],y=i.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(f=d[c++]||"")&&(p=parseFloat(f)||0,M=f.substr((p+"").length),m.charAt(1)==="="&&(m=mr(p,m)+M),_=parseFloat(m),E=m.substr((_+"").length),l=ur.lastIndex-E.length,E||(E=E||Nt.units[t]||M,l===i.length&&(i+=E,a.e+=E)),M!==E&&(p=li(e,t,f,E)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Mf:Sf;return Bd.test(i)&&(a.e=0),this._pt=a,a},vh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vh[n]||n,t[1]=vh[i]||i,t.join(" ")},OS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ai[a]&&(l=1,a=a==="transformOrigin"?oi:ct),ps(n,a);l&&(ps(n,ct),o&&(o.svg&&n.removeAttribute("transform"),gs(n,1),o.uncache=1))}},ya={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Pt(e._pt,t,n,0,0,OS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ms=[1,0,0,1,0,0],Af={},Cf=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},xh=function(e){var t=Nn(e,ct);return Cf(t)?ms:t.substr(7).match(zd).map($e)},cc=function(e,t){var n=e._gsap||Ri(e),i=e.style,s=xh(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ms:s):(s===ms&&!e.offsetParent&&e!==gr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextSibling,gr.appendChild(e)),s=xh(e),l?i.display=l:ps(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):gr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ml=function(e,t,n,i,s,o){var a=e._gsap,l=s||cc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],f=l[2],m=l[3],_=l[4],y=l[5],E=t.split(" "),M=parseFloat(E[0])||0,x=parseFloat(E[1])||0,A,b,v,S;n?l!==ms&&(b=p*m-g*f)&&(v=M*(m/b)+x*(-f/b)+(f*y-m*_)/b,S=M*(-g/b)+x*(p/b)-(p*y-g*_)/b,M=v,x=S):(A=Ef(e),M=A.x+(~E[0].indexOf("%")?M/100*A.width:M),x=A.y+(~(E[1]||E[0]).indexOf("%")?x/100*A.height:x)),i||i!==!1&&a.smooth?(_=M-c,y=x-u,a.xOffset=h+(_*p+y*f)-_,a.yOffset=d+(_*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=x,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[oi]="0px 0px",o&&(ei(o,a,"xOrigin",c,M),ei(o,a,"yOrigin",u,x),ei(o,a,"xOffset",h,a.xOffset),ei(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+x)},gs=function(e,t){var n=e._gsap||new df(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=Nn(e,oi)||"0",c,u,h,d,p,g,f,m,_,y,E,M,x,A,b,v,S,N,F,J,X,D,H,V,O,z,R,B,Y,Q,ee,ce;return c=u=h=g=f=m=_=y=E=0,d=p=1,n.svg=!!(e.getCTM&&Tf(e)),A=cc(e,n.svg),n.svg&&(V=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ml(e,V||l,!!V||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,x=n.yOrigin||0,A!==ms&&(N=A[0],F=A[1],J=A[2],X=A[3],c=D=A[4],u=H=A[5],A.length===6?(d=Math.sqrt(N*N+F*F),p=Math.sqrt(X*X+J*J),g=N||F?ir(F,N)*bi:0,_=J||X?ir(J,X)*bi+g:0,_&&(p*=Math.abs(Math.cos(_*_r))),n.svg&&(c-=M-(M*N+x*J),u-=x-(M*F+x*X))):(ce=A[6],Q=A[7],R=A[8],B=A[9],Y=A[10],ee=A[11],c=A[12],u=A[13],h=A[14],b=ir(ce,Y),f=b*bi,b&&(v=Math.cos(-b),S=Math.sin(-b),V=D*v+R*S,O=H*v+B*S,z=ce*v+Y*S,R=D*-S+R*v,B=H*-S+B*v,Y=ce*-S+Y*v,ee=Q*-S+ee*v,D=V,H=O,ce=z),b=ir(-J,Y),m=b*bi,b&&(v=Math.cos(-b),S=Math.sin(-b),V=N*v-R*S,O=F*v-B*S,z=J*v-Y*S,ee=X*S+ee*v,N=V,F=O,J=z),b=ir(F,N),g=b*bi,b&&(v=Math.cos(b),S=Math.sin(b),V=N*v+F*S,O=D*v+H*S,F=F*v-N*S,H=H*v-D*S,N=V,D=O),f&&Math.abs(f)+Math.abs(g)>359.9&&(f=g=0,m=180-m),d=$e(Math.sqrt(N*N+F*F+J*J)),p=$e(Math.sqrt(H*H+ce*ce)),b=ir(D,H),_=Math.abs(b)>2e-4?b*bi:0,E=ee?1/(ee<0?-ee:ee):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Cf(Nn(e,ct)),V&&e.setAttribute("transform",V))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(d*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t=t||n.uncache,n.x=c-((n.xPercent=c&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=$e(d),n.scaleY=$e(p),n.rotation=$e(g)+a,n.rotationX=$e(f)+a,n.rotationY=$e(m)+a,n.skewX=_+a,n.skewY=y+a,n.transformPerspective=E+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[oi]=ba(l)),n.xOffset=n.yOffset=0,n.force3D=Nt.force3D,n.renderTransform=n.svg?IS:wf?Pf:FS,n.uncache=0,n},ba=function(e){return(e=e.split(" "))[0]+" "+e[1]},Bo=function(e,t,n){var i=mt(t);return $e(parseFloat(t)+parseFloat(li(e,"x",n+"px",i)))+i},FS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Pf(e,t)},vi="0deg",Wr="0px",xi=") ",Pf=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,f=n.scaleY,m=n.transformPerspective,_=n.force3D,y=n.target,E=n.zOrigin,M="",x=_==="auto"&&e&&e!==1||_===!0;if(E&&(h!==vi||u!==vi)){var A=parseFloat(u)*_r,b=Math.sin(A),v=Math.cos(A),S;A=parseFloat(h)*_r,S=Math.cos(A),o=Bo(y,o,b*S*-E),a=Bo(y,a,-Math.sin(A)*-E),l=Bo(y,l,v*S*-E+E)}m!==Wr&&(M+="perspective("+m+xi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(x||o!==Wr||a!==Wr||l!==Wr)&&(M+=l!==Wr||x?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xi),c!==vi&&(M+="rotate("+c+xi),u!==vi&&(M+="rotateY("+u+xi),h!==vi&&(M+="rotateX("+h+xi),(d!==vi||p!==vi)&&(M+="skew("+d+", "+p+xi),(g!==1||f!==1)&&(M+="scale("+g+", "+f+xi),y.style[ct]=M||"translate(0, 0)"},IS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,f=n.yOrigin,m=n.xOffset,_=n.yOffset,y=n.forceCSS,E=parseFloat(o),M=parseFloat(a),x,A,b,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=_r,c*=_r,x=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,v=Math.cos(l-c)*d,c&&(u*=_r,S=Math.tan(c-u),S=Math.sqrt(1+S*S),b*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),x*=S,A*=S)),x=$e(x),A=$e(A),b=$e(b),v=$e(v)):(x=h,v=d,A=b=0),(E&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(E=li(p,"x",o,"px"),M=li(p,"y",a,"px")),(g||f||m||_)&&(E=$e(E+g-(g*x+f*b)+m),M=$e(M+f-(g*A+f*v)+_)),(i||s)&&(S=p.getBBox(),E=$e(E+i/100*S.width),M=$e(M+s/100*S.height)),S="matrix("+x+","+A+","+b+","+v+","+E+","+M+")",p.setAttribute("transform",S),y&&(p.style[ct]=S)},NS=function(e,t,n,i,s){var o=360,a=at(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?bi:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ph)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ph)%o-~~(c/o)*o)),e._pt=d=new Pt(e._pt,t,n,i,c,SS),d.e=u,d.u="deg",e._props.push(n),d},yh=function(e,t){for(var n in t)e[n]=t[n];return e},zS=function(e,t,n){var i=yh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ct]=t,a=gs(n,1),ps(n,ct),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ct],o[ct]=t,a=gs(n,1),o[ct]=c);for(l in ai)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=mt(c),g=mt(u),h=p!==g?li(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Pt(e._pt,a,l,h,d-h,bf),e._pt.u=g||0,e._props.push(l));yh(a,i)};Ct("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ya[e>1?"border"+r:r]=function(a,l,c,u,h){var d,p;if(arguments.length<4)return d=o.map(function(g){return Si(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},o.forEach(function(g,f){return p[g]=d[f]=d[f]||d[(f-1)/2|0]}),a.init(l,p,h)}});var Rf={name:"css",register:pl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,p,g,f,m,_,y,E,M,x,A,b;lc||pl();for(f in t)if(f!=="autoRound"&&(u=t[f],!(Ft[f]&&ff(f,t,n,i,e,s)))){if(p=typeof u,g=ya[f],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=hs(u)),g)g(this,e,f,u,n)&&(b=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(f)+"").trim(),u+="",ri.lastIndex=0,ri.test(c)||(m=mt(c),_=mt(u)),_?m!==_&&(c=li(e,f,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,f),o.push(f);else if(p!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,e,s):l[f],at(c)&&~c.indexOf("random(")&&(c=hs(c)),mt(c+"")||(c+=Nt.units[f]||mt(Si(e,f))||""),(c+"").charAt(1)==="="&&(c=Si(e,f))):c=Si(e,f),d=parseFloat(c),y=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),f in Qn&&(f==="autoAlpha"&&(d===1&&Si(e,"visibility")==="hidden"&&h&&(d=0),ei(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Qn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),E=f in ai,E){if(M||(x=e._gsap,x.renderTransform&&!t.parseTransform||gs(e,t.parseTransform),A=t.smoothOrigin!==!1&&x.smooth,M=this._pt=new Pt(this._pt,a,ct,0,1,x.renderTransform,x,0,-1),M.dep=1),f==="scale")this._pt=new Pt(this._pt,x,"scaleY",x.scaleY,(y?mr(x.scaleY,y+h):h)-x.scaleY||0),o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){u=DS(u),x.svg?ml(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&ei(this,x,"zOrigin",x.zOrigin,_),ei(this,a,f,ba(c),ba(u)));continue}else if(f==="svgOrigin"){ml(e,u,1,A,0,this);continue}else if(f in Af){NS(this,x,f,d,y?mr(d,y+u):u);continue}else if(f==="smoothOrigin"){ei(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){zS(this,u,e);continue}}else f in a||(f=Pr(f)||f);if(E||(h||h===0)&&(d||d===0)&&!bS.test(u)&&f in a)m=(c+"").substr((d+"").length),h||(h=0),_=mt(u)||(f in Nt.units?Nt.units[f]:m),m!==_&&(d=li(e,f,c,_)),this._pt=new Pt(this._pt,E?x:a,f,d,(y?mr(d,y+h):h)-d,!E&&(_==="px"||f==="zIndex")&&t.autoRound!==!1?wS:bf),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=MS);else if(f in a)LS.call(this,e,f,c,y?y+u:u);else if(f in e)this.add(e,f,c||e[f],y?y+u:u,i,s);else{Kl(f,u);continue}o.push(f)}}b&&xf(this)},get:Si,aliases:Qn,getSetter:function(e,t,n){var i=Qn[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==oi&&(e._gsap.x||Si(e,"x"))?n&&fh===n?t==="scale"?CS:AS:(fh=n||{})&&(t==="scale"?PS:RS):e.style&&!Zl(e.style[t])?ES:~t.indexOf("-")?TS:ac(e,t)},core:{_removeProperty:ps,_getMatrix:cc}};an.utils.checkPrefix=Pr;(function(r,e,t,n){var i=Ct(r+","+e+","+t,function(s){ai[s]=1});Ct(e,function(s){Nt.units[s]="deg",Af[s]=1}),Qn[i[13]]=r+","+e,Ct(n,function(s){var o=s.split(":");Qn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Nt.units[r]="px"});an.registerPlugin(Rf);var ka=an.registerPlugin(Rf)||an;ka.core.Tween;/*!
 * CSSRulePlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ti,gl,oa,Sa,Lf=function(){return typeof window!="undefined"},Df=function(){return ti||Lf()&&(ti=window.gsap)&&ti.registerPlugin&&ti},bh=function(){return gl||(Of(),Sa||console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)")),gl},Of=function(e){ti=e||Df(),Lf()&&(oa=document),ti&&(Sa=ti.plugins.css,Sa&&(gl=1))},uc={version:"3.10.4",name:"cssRule",init:function(e,t,n,i,s){if(!bh()||typeof e.cssText=="undefined")return!1;var o=e._gsProxy=e._gsProxy||oa.createElement("div");this.ss=e,this.style=o.style,o.style.cssText=e.cssText,Sa.prototype.init.call(this,o,t,n,i,s)},render:function(e,t){for(var n=t._pt,i=t.style,s=t.ss,o;n;)n.r(e,n.d),n=n._next;for(o=i.length;--o>-1;)s[i[o]]=i[i[o]]},getRule:function(e){bh();var t=oa.all?"rules":"cssRules",n=oa.styleSheets,i=n.length,s=e.charAt(0)===":",o,a,l,c;for(e=(s?"":",")+e.split("::").join(":").toLowerCase()+",",s&&(c=[]);i--;){try{if(a=n[i][t],!a)continue;o=a.length}catch(u){console.warn(u);continue}for(;--o>-1;)if(l=a[o],l.selectorText&&(","+l.selectorText.split("::").join(":").toLowerCase()+",").indexOf(e)!==-1)if(s)c.push(l.style);else return l.style}return c},register:Of};Df()&&ti.registerPlugin(uc);ka.registerPlugin(uc);let BS=uc.getRule(".animBox::before");function US(){const r=ka.timeline();window.innerWidth>705?r.to(".loading",{y:"-100%",duration:1}).to(".loading2",{y:"-100%",duration:1},"-=.7").from(".header",{y:"-150%",duration:.5}).from(".logo",{x:"-100%",opacity:0,duration:.5}).to("html",{overflowY:"scroll",duration:0}).from(".main-link",{opacity:"0",duration:.5,stagger:.2}).from(".main-title",{y:"-100%",opacity:0,duration:1}).from(BS,{height:"100%",duration:.5},"-=.8").from(".main-body .main-description",{y:"100%",opacity:0,duration:1},"-=.7"):r.to(".loading",{y:"-100%",duration:1}).to(".loading2",{y:"-100%",duration:1},"-=.7").to("html",{overflowY:"scroll",duration:0})}const Sh={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ms{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const kS=new Fa(-1,1,1,-1,0,1),hc=new Jt;hc.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));hc.setAttribute("uv",new Tt([0,2,0,0,2,0],2));class Ff{constructor(e){this._mesh=new Wt(hc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,kS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mh extends Ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fl.clone(e.uniforms),this.material=new $t({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ff(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class wh extends Ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class VS extends Ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class GS{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Sh===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Mh===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Mh(Sh),this.clock=new Vl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wh!==void 0&&(o instanceof wh?n=!0:o instanceof VS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Fa(-1,1,1,-1,0,1);const If=new Jt;If.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3));If.setAttribute("uv",new Tt([0,2,0,0,2,0],2));class HS extends Ms{constructor(e,t,n,i,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Eh={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:`

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
		}`};class WS extends Ms{constructor(e=64){super(),Eh===void 0&&console.error("THREE.GlitchPass relies on DigitalGlitch");const t=Eh;this.uniforms=Fl.clone(t.uniforms),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new $t({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ff(this.material),this.goWild=!1,this.curF=0,this.generateTrigger()}render(e,t,n){e.capabilities.isWebGL2===!1&&(this.uniforms.tDisp.value.format=Kh),this.uniforms.tDiffuse.value=n.texture,this.uniforms.seed.value=Math.random(),this.uniforms.byp.value=0,this.curF%this.randX==0||this.goWild==!0?(this.uniforms.amount.value=Math.random()/30,this.uniforms.angle.value=Ut.randFloat(-Math.PI,Math.PI),this.uniforms.seed_x.value=Ut.randFloat(-1,1),this.uniforms.seed_y.value=Ut.randFloat(-1,1),this.uniforms.distortion_x.value=Ut.randFloat(0,1),this.uniforms.distortion_y.value=Ut.randFloat(0,1),this.curF=0,this.generateTrigger()):this.curF%this.randX<this.randX/5?(this.uniforms.amount.value=Math.random()/90,this.uniforms.angle.value=Ut.randFloat(-Math.PI,Math.PI),this.uniforms.distortion_x.value=Ut.randFloat(0,1),this.uniforms.distortion_y.value=Ut.randFloat(0,1),this.uniforms.seed_x.value=Ut.randFloat(-.3,.3),this.uniforms.seed_y.value=Ut.randFloat(-.3,.3)):this.goWild==!1&&(this.uniforms.byp.value=1),this.curF++,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}generateTrigger(){this.randX=Ut.randInt(120,240)}generateHeightmap(e){const t=new Float32Array(e*e),n=e*e;for(let s=0;s<n;s++){const o=Ut.randFloat(0,1);t[s]=o}const i=new By(t,e,e,Qh,Zn);return i.needsUpdate=!0,i}}const Nf=document.querySelector(":root");let la=document.getElementById("changeColorBut"),zf=getComputedStyle(Nf).getPropertyValue("--primary-color"),jS=new ye(zf.trim(" "));la.value=zf.trim(" ");la.addEventListener("change",()=>{Nf.style.setProperty("--primary-color",la.value),Sn.children[1].color=new ye(la.value)});const qS=new Vl,Ht={width:window.innerWidth,height:window.innerHeight},XS=document.querySelector(".myCanvas");window.addEventListener("resize",()=>{Ht.width=window.innerWidth,Ht.height=window.innerHeight,zn.aspect=Ht.width/Ht.height,zn.updateProjectionMatrix(),Rr.setSize(Ht.width,Ht.height),Rr.render(Sn,zn)});let YS=new $n(new I(0,0,5),-10),Th=new nb,Ma=new Pe,jr=new Pe,rr=new I;window.addEventListener("mousemove",$S,!1);const Ah=8;function $S(r){Ma.x=(r.clientX/window.innerWidth-.5)*Ah,Ma.y=-(r.clientY/window.innerHeight-.5)*Ah}const Ch=12,ta=4;function ZS(){jr.x+=(Ma.x-jr.x)/Ch,jr.y+=(Ma.y-jr.y)/Ch,Th.setFromCamera(jr,zn),Th.ray.intersectPlane(YS,rr),dr.lookAt(rr),dr.position.x=rr.x/ta,dr.position.y=rr.y/ta,dr.rotation.z=window.scrollY/400,vr.position.x=rr.x/(ta+2),vr.position.y=rr.y/(ta+2)}const JS=new xd(()=>{tM(),US()}),Bf=new bd(JS),KS=Bf.load(Dd),QS=Bf.load(Pb),Sn=new _d,ws=new Cb.GUI;ws.width=400;ws.closed=!0;ws.hide();const dc=new kl(16777215,.5);dc.position.set(-10,4,4);Sn.add(dc);ws.add(dc.position,"x").min(-10).max(10).step(.01);const fc=new Qy(jS,.6);fc.position.set(3,3,3);Sn.add(fc);ws.add(fc,"intensity").name("point light intensity").min(0).max(5).step(.02);let Uf=new za({roughness:.6,metalness:1,normalMap:KS});const dr=new Wt(new Na(1,.5,32,64),Uf);Sn.add(dr);const vr=new Wt(new Fr(.5,.5,.5,1,1,1),Uf);Sn.add(vr);const pc=new Jt,mc=500,kf=new Float32Array(mc*3),Vf=new Float32Array(mc*3);for(let r=0;r<mc*3;r++)kf[r]=(Math.random()-.5)*50,Vf[r]=Math.random();pc.setAttribute("position",new Yt(kf,3));pc.setAttribute("color",new Yt(Vf,3));const kn=new Ul({color:16777215});kn.size=1;kn.sizeAttenuation=!0;kn.transparent=!0;kn.alphaMap=QS;kn.alphaTest=.001;kn.depthWrite=!1;kn.blending=jo;kn.vertexColors=!0;const _l=new Uy(pc,kn);Sn.add(_l);const zn=new Mt(45,Ht.width/Ht.height);zn.position.set(0,0,7);Sn.add(zn);const Rr=new Bl({canvas:XS,alpha:!0});Rr.setSize(Ht.width,Ht.height);Rr.setPixelRatio(Math.min(window.devicePixelRatio,2));Rr.render(Sn,zn);const Es=new GS(Rr);Es.setPixelRatio(Math.min(window.devicePixelRatio,2));Es.setSize(Ht.width,Ht.height);const eM=new HS(Sn,zn);Es.addPass(eM);const Gf=new WS;Gf.enabled=!1;Es.addPass(Gf);const Hf=()=>{window.requestAnimationFrame(Hf);const r=qS.getElapsedTime();vr.rotation.z=r,vr.rotation.y=r,dr.position.z=window.scrollY/500,vr.position.z=window.scrollY/700,_l.rotation.x=-window.scrollY/700,_l.rotation.z=r/50,ZS(),Es.render()};Hf();function tM(){ka.from(zn.position,{duration:2,x:0,y:0,z:-10,delay:2.5,ease:"bounce.out"})}const vl=document.querySelector("#cursorCanvasID");window.addEventListener("mousemove",r=>{vl.style.top=r.clientY+"px",vl.style.left=r.clientX+"px";let e=r.clientX*2/window.innerWidth*2-2,t=r.clientY*2/window.innerHeight*2-2;Ai.lookAt(new I(e,-t,2))});const zi=new _d,wa={width:80,height:80},Wf=document.querySelector(":root");let Uo=document.getElementById("changeColorBut"),nM=getComputedStyle(Wf).getPropertyValue("--primary-color"),iM=new ye(String(nM).trim(" "));Uo.addEventListener("change",()=>{Wf.style.setProperty("--primary-color",Uo.value),zi.children[0].color=new ye(Uo.value)});const rM=new bd,sM=rM.load(Dd),xl=new kl(iM,.5);zi.add(xl);const yl=new kl(16777215,.5);zi.add(yl);const Ai=new Wt(new Na(.7,.4,6,20),new za({roughness:.6,metalness:1,normalMap:sM}));zi.add(Ai);const Va=new Mt(45,wa.width/wa.height);Va.position.set(0,0,3.6);zi.add(Va);const gc=new Bl({canvas:vl,alpha:!0});gc.setSize(wa.width,wa.height);gc.render(zi,Va);const aM=new Vl,jf=()=>{window.requestAnimationFrame(jf);const r=aM.getElapsedTime();Ai.rotation.z=r,xl.position.z=Math.sin(r)*2,xl.position.x=Math.cos(r)*2,yl.position.z=-Math.sin(r)*2,yl.position.x=-Math.cos(r)*2,gc.render(zi,Va)};jf();let oM=document.querySelectorAll(".cursorRespondLink");oM.forEach(r=>{r.addEventListener("mouseover",()=>{Ai.material.wireframe=!0,Ai.position.z=-2}),r.addEventListener("mouseleave",()=>{Ai.material.wireframe=!1,Ai.position.z=0})});var qf={exports:{}};/*!
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
 */(function(r,e){(function(t,n){r.exports=n()})(Dn,function(){var t=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};t.version="2.0.8",typeof window!="undefined"&&window.addEventListener("mousewheel",void 0);var n="data-scrollmagic-pin-spacer";t.Controller=function(a){var l="ScrollMagic.Controller",c="FORWARD",u="REVERSE",h="PAUSED",d=i.defaults,p=this,g=o.extend({},d,a),f=[],m=!1,_=0,y=h,E=!0,M=0,x=!0,A,b,v=function(){for(var R in g)d.hasOwnProperty(R)||(O(2,'WARNING: Unknown option "'+R+'"'),delete g[R]);if(g.container=o.get.elements(g.container)[0],!g.container)throw O(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";E=g.container===window||g.container===document.body||!document.body.contains(g.container),E&&(g.container=window),M=F(),g.container.addEventListener("resize",H),g.container.addEventListener("scroll",H);var B=parseInt(g.refreshInterval,10);g.refreshInterval=o.type.Number(B)?B:d.refreshInterval,S(),O(3,"added new "+l+" controller (v"+t.version+")")},S=function(){g.refreshInterval>0&&(b=window.setTimeout(V,g.refreshInterval))},N=function(){return g.vertical?o.get.scrollTop(g.container):o.get.scrollLeft(g.container)},F=function(){return g.vertical?o.get.height(g.container):o.get.width(g.container)},J=this._setScrollPos=function(R){g.vertical?E?window.scrollTo(o.get.scrollLeft(),R):g.container.scrollTop=R:E?window.scrollTo(R,o.get.scrollTop()):g.container.scrollLeft=R},X=function(){if(x&&m){var R=o.type.Array(m)?m:f.slice(0);m=!1;var B=_;_=p.scrollPos();var Y=_-B;Y!==0&&(y=Y>0?c:u),y===u&&R.reverse(),R.forEach(function(Q,ee){O(3,"updating Scene "+(ee+1)+"/"+R.length+" ("+f.length+" total)"),Q.update(!0)}),R.length===0&&g.loglevel>=3&&O(3,"updating 0 Scenes (nothing added to controller)")}},D=function(){A=o.rAF(X)},H=function(R){O(3,"event fired causing an update:",R.type),R.type=="resize"&&(M=F(),y=h),m!==!0&&(m=!0,D())},V=function(){if(!E&&M!=F()){var R;try{R=new Event("resize",{bubbles:!1,cancelable:!1})}catch{R=document.createEvent("Event"),R.initEvent("resize",!1,!1)}g.container.dispatchEvent(R)}f.forEach(function(B,Y){B.refresh()}),S()},O=this._log=function(R,B){g.loglevel>=R&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this._options=g;var z=function(R){if(R.length<=1)return R;var B=R.slice(0);return B.sort(function(Y,Q){return Y.scrollOffset()>Q.scrollOffset()?1:-1}),B};return this.addScene=function(R){if(o.type.Array(R))R.forEach(function(Y,Q){p.addScene(Y)});else if(R instanceof t.Scene){if(R.controller()!==p)R.addTo(p);else if(f.indexOf(R)<0){f.push(R),f=z(f),R.on("shift.controller_sort",function(){f=z(f)});for(var B in g.globalSceneOptions)R[B]&&R[B].call(R,g.globalSceneOptions[B]);O(3,"adding Scene (now "+f.length+" total)")}}else O(1,"ERROR: invalid argument supplied for '.addScene()'");return p},this.removeScene=function(R){if(o.type.Array(R))R.forEach(function(Y,Q){p.removeScene(Y)});else{var B=f.indexOf(R);B>-1&&(R.off("shift.controller_sort"),f.splice(B,1),O(3,"removing Scene (now "+f.length+" left)"),R.remove())}return p},this.updateScene=function(R,B){return o.type.Array(R)?R.forEach(function(Y,Q){p.updateScene(Y,B)}):B?R.update(!0):m!==!0&&R instanceof t.Scene&&(m=m||[],m.indexOf(R)==-1&&m.push(R),m=z(m),D()),p},this.update=function(R){return H({type:"resize"}),R&&X(),p},this.scrollTo=function(R,B){if(o.type.Number(R))J.call(g.container,R,B);else if(R instanceof t.Scene)R.controller()===p?p.scrollTo(R.scrollOffset(),B):O(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",R);else if(o.type.Function(R))J=R;else{var Y=o.get.elements(R)[0];if(Y){for(;Y.parentNode.hasAttribute(n);)Y=Y.parentNode;var Q=g.vertical?"top":"left",ee=o.get.offset(g.container),ce=o.get.offset(Y);E||(ee[Q]-=p.scrollPos()),p.scrollTo(ce[Q]-ee[Q],B)}else O(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",R)}return p},this.scrollPos=function(R){if(arguments.length)o.type.Function(R)?N=R:O(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");else return N.call(p);return p},this.info=function(R){var B={size:M,vertical:g.vertical,scrollPos:_,scrollDirection:y,container:g.container,isDocument:E};if(arguments.length){if(B[R]!==void 0)return B[R];O(1,'ERROR: option "'+R+'" is not available');return}else return B},this.loglevel=function(R){if(arguments.length)g.loglevel!=R&&(g.loglevel=R);else return g.loglevel;return p},this.enabled=function(R){if(arguments.length)x!=R&&(x=!!R,p.updateScene(f,!0));else return x;return p},this.destroy=function(R){window.clearTimeout(b);for(var B=f.length;B--;)f[B].destroy(R);return g.container.removeEventListener("resize",H),g.container.removeEventListener("scroll",H),o.cAF(A),O(3,"destroyed "+l+" (reset: "+(R?"true":"false")+")"),null},v(),p};var i={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};t.Controller.addOption=function(a,l){i.defaults[a]=l},t.Controller.extend=function(a){var l=this;t.Controller=function(){return l.apply(this,arguments),this.$super=o.extend({},this),a.apply(this,arguments)||this},o.extend(t.Controller,l),t.Controller.prototype=l.prototype,t.Controller.prototype.constructor=t.Controller},t.Scene=function(a){var l="ScrollMagic.Scene",c="BEFORE",u="DURING",h="AFTER",d=s.defaults,p=this,g=o.extend({},d,a),f=c,m=0,_={start:0,end:0},y=0,E=!0,M,x,A=function(){for(var C in g)d.hasOwnProperty(C)||(v(2,'WARNING: Unknown option "'+C+'"'),delete g[C]);for(var te in d)V(te);D()},b={};this.on=function(C,te){return o.type.Function(te)?(C=C.trim().split(" "),C.forEach(function(ie){var ue=ie.split("."),$=ue[0],me=ue[1];$!="*"&&(b[$]||(b[$]=[]),b[$].push({namespace:me||"",callback:te}))})):v(1,"ERROR when calling '.on()': Supplied callback for '"+C+"' is not a valid function!"),p},this.off=function(C,te){return C?(C=C.trim().split(" "),C.forEach(function(ie,ue){var $=ie.split("."),me=$[0],ge=$[1]||"",_e=me==="*"?Object.keys(b):[me];_e.forEach(function(Ue){for(var ke=b[Ue]||[],Ze=ke.length;Ze--;){var ht=ke[Ze];ht&&(ge===ht.namespace||ge==="*")&&(!te||te==ht.callback)&&ke.splice(Ze,1)}ke.length||delete b[Ue]})}),p):(v(1,"ERROR: Invalid event name supplied."),p)},this.trigger=function(C,te){if(C){var ie=C.trim().split("."),ue=ie[0],$=ie[1],me=b[ue];v(3,"event fired:",ue,te?"->":"",te||""),me&&me.forEach(function(ge,_e){(!$||$===ge.namespace)&&ge.callback.call(p,new t.Event(ue,ge.namespace,p,te))})}else v(1,"ERROR: Invalid event name supplied.");return p},p.on("change.internal",function(C){C.what!=="loglevel"&&C.what!=="tweenChanges"&&(C.what==="triggerElement"?F():C.what==="reverse"&&p.update())}).on("shift.internal",function(C){S(),p.update()});var v=this._log=function(C,te){g.loglevel>=C&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this.addTo=function(C){return C instanceof t.Controller?x!=C&&(x&&x.removeScene(p),x=C,D(),N(!0),F(!0),S(),x.info("container").addEventListener("resize",J),C.addScene(p),p.trigger("add",{controller:x}),v(3,"added "+l+" to controller"),p.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),p},this.enabled=function(C){if(arguments.length)E!=C&&(E=!!C,p.update(!0));else return E;return p},this.remove=function(){if(x){x.info("container").removeEventListener("resize",J);var C=x;x=void 0,C.removeScene(p),p.trigger("remove"),v(3,"removed "+l+" from controller")}return p},this.destroy=function(C){return p.trigger("destroy",{reset:C}),p.remove(),p.off("*.*"),v(3,"destroyed "+l+" (reset: "+(C?"true":"false")+")"),null},this.update=function(C){if(x)if(C)if(x.enabled()&&E){var te=x.info("scrollPos"),ie;g.duration>0?ie=(te-_.start)/(_.end-_.start):ie=te>=_.start?1:0,p.trigger("update",{startPos:_.start,endPos:_.end,scrollPos:te}),p.progress(ie)}else O&&f===u&&R(!0);else x.updateScene(p,!1);return p},this.refresh=function(){return N(),F(),p},this.progress=function(C){if(arguments.length){var te=!1,ie=f,ue=x?x.info("scrollDirection"):"PAUSED",$=g.reverse||C>=m;if(g.duration===0?(te=m!=C,m=C<1&&$?0:1,f=m===0?c:u):C<0&&f!==c&&$?(m=0,f=c,te=!0):C>=0&&C<1&&$?(m=C,f=u,te=!0):C>=1&&f!==h?(m=1,f=h,te=!0):f===u&&!$&&R(),te){var me={progress:m,state:f,scrollDirection:ue},ge=f!=ie,_e=function(Ue){p.trigger(Ue,me)};ge&&ie!==u&&(_e("enter"),_e(ie===c?"start":"end")),_e("progress"),ge&&f!==u&&(_e(f===c?"start":"end"),_e("leave"))}return p}else return m};var S=function(){_={start:y+g.offset},x&&g.triggerElement&&(_.start-=x.info("size")*g.triggerHook),_.end=_.start+g.duration},N=function(C){if(M){var te="duration";H(te,M.call(p))&&!C&&(p.trigger("change",{what:te,newval:g[te]}),p.trigger("shift",{reason:te}))}},F=function(C){var te=0,ie=g.triggerElement;if(x&&(ie||y>0)){if(ie)if(ie.parentNode){for(var ue=x.info(),$=o.get.offset(ue.container),me=ue.vertical?"top":"left";ie.parentNode.hasAttribute(n);)ie=ie.parentNode;var ge=o.get.offset(ie);ue.isDocument||($[me]-=x.scrollPos()),te=ge[me]-$[me]}else v(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),p.triggerElement(void 0);var _e=te!=y;y=te,_e&&!C&&p.trigger("shift",{reason:"triggerElementPosition"})}},J=function(C){g.triggerHook>0&&p.trigger("shift",{reason:"containerResize"})},X=o.extend(s.validate,{duration:function(C){if(o.type.String(C)&&C.match(/^(\.|\d)*\d+%$/)){var te=parseFloat(C)/100;C=function(){return x?x.info("size")*te:0}}if(o.type.Function(C)){M=C;try{C=parseFloat(M.call(p))}catch{C=-1}}if(C=parseFloat(C),!o.type.Number(C)||C<0)throw M?(M=void 0,['Invalid return value of supplied function for option "duration":',C]):['Invalid value for option "duration":',C];return C}}),D=function(C){C=arguments.length?[C]:Object.keys(X),C.forEach(function(te,ie){var ue;if(X[te])try{ue=X[te](g[te])}catch(me){ue=d[te];var $=o.type.String(me)?[me]:me;o.type.Array($)?($[0]="ERROR: "+$[0],$.unshift(1),v.apply(this,$)):v(1,"ERROR: Problem executing validation callback for option '"+te+"':",me.message)}finally{g[te]=ue}})},H=function(C,te){var ie=!1,ue=g[C];return g[C]!=te&&(g[C]=te,D(C),ie=ue!=g[C]),ie},V=function(C){p[C]||(p[C]=function(te){if(arguments.length)C==="duration"&&(M=void 0),H(C,te)&&(p.trigger("change",{what:C,newval:g[C]}),s.shifts.indexOf(C)>-1&&p.trigger("shift",{reason:C}));else return g[C];return p})};this.controller=function(){return x},this.state=function(){return f},this.scrollOffset=function(){return _.start},this.triggerPosition=function(){var C=g.offset;return x&&(g.triggerElement?C+=y:C+=x.info("size")*p.triggerHook()),C};var O,z;p.on("shift.internal",function(C){var te=C.reason==="duration";(f===h&&te||f===u&&g.duration===0)&&R(),te&&B()}).on("progress.internal",function(C){R()}).on("add.internal",function(C){B()}).on("destroy.internal",function(C){p.removePin(C.reset)});var R=function(C){if(O&&x){var te=x.info(),ie=z.spacer.firstChild;if(!C&&f===u){o.css(ie,"position")!="fixed"&&(o.css(ie,{position:"fixed"}),B());var ue=o.get.offset(z.spacer,!0),$=g.reverse||g.duration===0?te.scrollPos-_.start:Math.round(m*g.duration*10)/10;ue[te.vertical?"top":"left"]+=$,o.css(z.spacer.firstChild,{top:ue.top,left:ue.left})}else{var me={position:z.inFlow?"relative":"absolute",top:0,left:0},ge=o.css(ie,"position")!=me.position;z.pushFollowers?g.duration>0&&(f===h&&parseFloat(o.css(z.spacer,"padding-top"))===0||f===c&&parseFloat(o.css(z.spacer,"padding-bottom"))===0)&&(ge=!0):me[te.vertical?"top":"left"]=g.duration*m,o.css(ie,me),ge&&B()}}},B=function(){if(O&&x&&z.inFlow){var C=f===u,te=x.info("vertical"),ie=z.spacer.firstChild,ue=o.isMarginCollapseType(o.css(z.spacer,"display")),$={};z.relSize.width||z.relSize.autoFullWidth?C?o.css(O,{width:o.get.width(z.spacer)}):o.css(O,{width:"100%"}):($["min-width"]=o.get.width(te?O:ie,!0,!0),$.width=C?$["min-width"]:"auto"),z.relSize.height?C?o.css(O,{height:o.get.height(z.spacer)-(z.pushFollowers?g.duration:0)}):o.css(O,{height:"100%"}):($["min-height"]=o.get.height(te?ie:O,!0,!ue),$.height=C?$["min-height"]:"auto"),z.pushFollowers&&($["padding"+(te?"Top":"Left")]=g.duration*m,$["padding"+(te?"Bottom":"Right")]=g.duration*(1-m)),o.css(z.spacer,$)}},Y=function(){x&&O&&f===u&&!x.info("isDocument")&&R()},Q=function(){x&&O&&f===u&&((z.relSize.width||z.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(z.spacer.parentNode)||z.relSize.height&&o.get.height(window)!=o.get.height(z.spacer.parentNode))&&B()},ee=function(C){x&&O&&f===u&&!x.info("isDocument")&&(C.preventDefault(),x._setScrollPos(x.info("scrollPos")-((C.wheelDelta||C[x.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-C.detail*30)))};this.setPin=function(C,te){var ie={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},ue=te&&te.hasOwnProperty("pushFollowers");if(te=o.extend({},ie,te),C=o.get.elements(C)[0],C){if(o.css(C,"position")==="fixed")return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),p}else return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),p;if(O){if(O===C)return p;p.removePin()}O=C;var $=O.parentNode.style.display,me=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];O.parentNode.style.display="none";var ge=o.css(O,"position")!="absolute",_e=o.css(O,me.concat(["display"])),Ue=o.css(O,["width","height"]);O.parentNode.style.display=$,!ge&&te.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),te.pushFollowers=!1),window.setTimeout(function(){O&&g.duration===0&&ue&&te.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var ke=O.parentNode.insertBefore(document.createElement("div"),O),Ze=o.extend(_e,{position:ge?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(ge||o.extend(Ze,o.css(O,["width","height"])),o.css(ke,Ze),ke.setAttribute(n,""),o.addClass(ke,te.spacerClass),z={spacer:ke,relSize:{width:Ue.width.slice(-1)==="%",height:Ue.height.slice(-1)==="%",autoFullWidth:Ue.width==="auto"&&ge&&o.isMarginCollapseType(_e.display)},pushFollowers:te.pushFollowers,inFlow:ge},!O.___origStyle){O.___origStyle={};var ht=O.style,et=me.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);et.forEach(function(Fe){O.___origStyle[Fe]=ht[Fe]||""})}return z.relSize.width&&o.css(ke,{width:Ue.width}),z.relSize.height&&o.css(ke,{height:Ue.height}),ke.appendChild(O),o.css(O,{position:ge?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(z.relSize.width||z.relSize.autoFullWidth)&&o.css(O,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",Y),window.addEventListener("resize",Y),window.addEventListener("resize",Q),O.addEventListener("mousewheel",ee),O.addEventListener("DOMMouseScroll",ee),v(3,"added pin"),R(),p},this.removePin=function(C){if(O){if(f===u&&R(!0),C||!x){var te=z.spacer.firstChild;if(te.hasAttribute(n)){var ie=z.spacer.style,ue=["margin","marginLeft","marginRight","marginTop","marginBottom"],$={};ue.forEach(function(me){$[me]=ie[me]||""}),o.css(te,$)}z.spacer.parentNode.insertBefore(te,z.spacer),z.spacer.parentNode.removeChild(z.spacer),O.parentNode.hasAttribute(n)||(o.css(O,O.___origStyle),delete O.___origStyle)}window.removeEventListener("scroll",Y),window.removeEventListener("resize",Y),window.removeEventListener("resize",Q),O.removeEventListener("mousewheel",ee),O.removeEventListener("DOMMouseScroll",ee),O=void 0,v(3,"removed pin (reset: "+(C?"true":"false")+")")}return p};var ce,ve=[];return p.on("destroy.internal",function(C){p.removeClassToggle(C.reset)}),this.setClassToggle=function(C,te){var ie=o.get.elements(C);return ie.length===0||!o.type.String(te)?(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(ie.length===0?"element":"classes")+" supplied."),p):(ve.length>0&&p.removeClassToggle(),ce=te,ve=ie,p.on("enter.internal_class leave.internal_class",function(ue){var $=ue.type==="enter"?o.addClass:o.removeClass;ve.forEach(function(me,ge){$(me,ce)})}),p)},this.removeClassToggle=function(C){return C&&ve.forEach(function(te,ie){o.removeClass(te,ce)}),p.off("start.internal_class end.internal_class"),ce=void 0,ve=[],p},A(),p};var s={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(a){if(a=parseFloat(a),!o.type.Number(a))throw['Invalid value for option "offset":',a];return a},triggerElement:function(a){if(a=a||void 0,a){var l=o.get.elements(a)[0];if(l&&l.parentNode)a=l;else throw['Element defined in option "triggerElement" was not found:',a]}return a},triggerHook:function(a){var l={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(a))a=Math.max(0,Math.min(parseFloat(a),1));else if(a in l)a=l[a];else throw['Invalid value for option "triggerHook": ',a];return a},reverse:function(a){return!!a},loglevel:function(a){if(a=parseInt(a),!o.type.Number(a)||a<0||a>3)throw['Invalid value for option "loglevel":',a];return a}},shifts:["duration","offset","triggerHook"]};t.Scene.addOption=function(a,l,c,u){a in s.defaults?t._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+a+"', because it already exists."):(s.defaults[a]=l,s.validate[a]=c,u&&s.shifts.push(a))},t.Scene.extend=function(a){var l=this;t.Scene=function(){return l.apply(this,arguments),this.$super=o.extend({},this),a.apply(this,arguments)||this},o.extend(t.Scene,l),t.Scene.prototype=l.prototype,t.Scene.prototype.constructor=t.Scene},t.Event=function(a,l,c,u){u=u||{};for(var h in u)this[h]=u[h];return this.type=a,this.target=this.currentTarget=c,this.namespace=l||"",this.timeStamp=this.timestamp=Date.now(),this};var o=t._util=function(a){var l={},c,u=function(b){return parseFloat(b)||0},h=function(b){return b.currentStyle?b.currentStyle:a.getComputedStyle(b)},d=function(b,v,S,N){if(v=v===document?a:v,v===a)N=!1;else if(!x.DomElement(v))return 0;b=b.charAt(0).toUpperCase()+b.substr(1).toLowerCase();var F=(S?v["offset"+b]||v["outer"+b]:v["client"+b]||v["inner"+b])||0;if(S&&N){var J=h(v);F+=b==="Height"?u(J.marginTop)+u(J.marginBottom):u(J.marginLeft)+u(J.marginRight)}return F},p=function(b){return b.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(v){return v[1].toUpperCase()})};l.extend=function(b){for(b=b||{},c=1;c<arguments.length;c++)if(!!arguments[c])for(var v in arguments[c])arguments[c].hasOwnProperty(v)&&(b[v]=arguments[c][v]);return b},l.isMarginCollapseType=function(b){return["block","flex","list-item","table","-webkit-box"].indexOf(b)>-1};var g=0,f=["ms","moz","webkit","o"],m=a.requestAnimationFrame,_=a.cancelAnimationFrame;for(c=0;!m&&c<f.length;++c)m=a[f[c]+"RequestAnimationFrame"],_=a[f[c]+"CancelAnimationFrame"]||a[f[c]+"CancelRequestAnimationFrame"];m||(m=function(b){var v=new Date().getTime(),S=Math.max(0,16-(v-g)),N=a.setTimeout(function(){b(v+S)},S);return g=v+S,N}),_||(_=function(b){a.clearTimeout(b)}),l.rAF=m.bind(a),l.cAF=_.bind(a);var y=["error","warn","log"],E=a.console||{};for(E.log=E.log||function(){},c=0;c<y.length;c++){var M=y[c];E[M]||(E[M]=E.log)}l.log=function(b){(b>y.length||b<=0)&&(b=y.length);var v=new Date,S=("0"+v.getHours()).slice(-2)+":"+("0"+v.getMinutes()).slice(-2)+":"+("0"+v.getSeconds()).slice(-2)+":"+("00"+v.getMilliseconds()).slice(-3),N=y[b-1],F=Array.prototype.splice.call(arguments,1),J=Function.prototype.bind.call(E[N],E);F.unshift(S),J.apply(E,F)};var x=l.type=function(b){return Object.prototype.toString.call(b).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};x.String=function(b){return x(b)==="string"},x.Function=function(b){return x(b)==="function"},x.Array=function(b){return Array.isArray(b)},x.Number=function(b){return!x.Array(b)&&b-parseFloat(b)+1>=0},x.DomElement=function(b){return typeof HTMLElement=="object"||typeof HTMLElement=="function"?b instanceof HTMLElement||b instanceof SVGElement:b&&typeof b=="object"&&b!==null&&b.nodeType===1&&typeof b.nodeName=="string"};var A=l.get={};return A.elements=function(b){var v=[];if(x.String(b))try{b=document.querySelectorAll(b)}catch{return v}if(x(b)==="nodelist"||x.Array(b)||b instanceof NodeList)for(var S=0,N=v.length=b.length;S<N;S++){var F=b[S];v[S]=x.DomElement(F)?F:A.elements(F)}else(x.DomElement(b)||b===document||b===a)&&(v=[b]);return v},A.scrollTop=function(b){return b&&typeof b.scrollTop=="number"?b.scrollTop:a.pageYOffset||0},A.scrollLeft=function(b){return b&&typeof b.scrollLeft=="number"?b.scrollLeft:a.pageXOffset||0},A.width=function(b,v,S){return d("width",b,v,S)},A.height=function(b,v,S){return d("height",b,v,S)},A.offset=function(b,v){var S={top:0,left:0};if(b&&b.getBoundingClientRect){var N=b.getBoundingClientRect();S.top=N.top,S.left=N.left,v||(S.top+=A.scrollTop(),S.left+=A.scrollLeft())}return S},l.addClass=function(b,v){v&&(b.classList?b.classList.add(v):b.className+=" "+v)},l.removeClass=function(b,v){v&&(b.classList?b.classList.remove(v):b.className=b.className.replace(new RegExp("(^|\\b)"+v.split(" ").join("|")+"(\\b|$)","gi")," "))},l.css=function(b,v){if(x.String(v))return h(b)[p(v)];if(x.Array(v)){var S={},N=h(b);return v.forEach(function(X,D){S[X]=N[p(X)]}),S}else for(var F in v){var J=v[F];J==parseFloat(J)&&(J+="px"),b.style[p(F)]=J}},l}(window||{});return t.Scene.prototype.addIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.removeIndicators=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},t.Scene.prototype.setTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.removeTween=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},t.Scene.prototype.setVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t.Scene.prototype.removeVelocity=function(){return t._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},t})})(qf);var Xf=qf.exports;const lM=new Xf.Controller;window.innerWidth>705?Ph(-300):Ph(-1);function Ph(r){new Xf.Scene({triggerElement:".main-about",offset:r}).setClassToggle(".main-about","fade-in").addTo(lM)}let cM=document.querySelector(".myImgBox"),uM=document.querySelector(".main-body .left"),hM=document.querySelectorAll(".main-title"),dM=document.querySelector(".main-about .main-description"),fM=document.querySelectorAll(".input");function Yf(){window.innerWidth>605&&(wt.init(cM,{reverse:!0,speed:700,reset:!1,max:10}),wt.init(uM,{reverse:!0,speed:1500,reset:!1,max:2}),wt.init(hM,{reverse:!0,speed:1500,reset:!1,max:5}),wt.init(dM,{reverse:!0,speed:1500,reset:!1,max:5}),wt.init(fM,{reverse:!0,speed:700,reset:!0,max:3}))}Yf();window.addEventListener("resize",()=>{Yf()});
