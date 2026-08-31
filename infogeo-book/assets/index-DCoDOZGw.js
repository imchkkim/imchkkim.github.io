const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ch03-distance-31dg2ZIB.js","assets/components-Cdq4Qz60.js","assets/log-CrA8kRxw.js","assets/continuous-DQ2wEUOT.js","assets/ch04-paths-NI0f_5cW.js","assets/ch05-surprise-and-information-DwOBR1LF.js","assets/linear-DaGoupzB.js","assets/ch06-convex-duality-ByKYeXdt.js","assets/ch07-exponential-family-flashcards-DiCL3KB7.js","assets/ch09-fisher-information-BNJEcqrW.js","assets/ch11-geometry-of-inference-BERYdf71.js","assets/ch12-convergence-DtdUB-ka.js","assets/ch14-diffusion-xbOfoh1j.js","assets/ch15-flow-matching-BszT3KzX.js","assets/ch16-broadening-narrowing-BgVKpSM0.js","assets/ch17-scaling-D6F8G8Gf.js"])))=>i.map(i=>d[i]);
var Ad=Object.defineProperty;var Md=(o,i,a)=>i in o?Ad(o,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[i]=a;var hn=(o,i,a)=>Md(o,typeof i!="symbol"?i+"":i,a);function Dd(o,i){for(var a=0;a<i.length;a++){const u=i[a];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in o)){const p=Object.getOwnPropertyDescriptor(u,c);p&&Object.defineProperty(o,c,p.get?p:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const h of p.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function a(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(c){if(c.ep)return;c.ep=!0;const p=a(c);fetch(c.href,p)}})();function Od(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var hs={exports:{}},Ur={},ms={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc;function jd(){if(Oc)return Z;Oc=1;var o=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),L=Symbol.iterator;function R(k){return k===null||typeof k!="object"?null:(k=L&&k[L]||k["@@iterator"],typeof k=="function"?k:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,A={};function N(k,z,G){this.props=k,this.context=z,this.refs=A,this.updater=G||P}N.prototype.isReactComponent={},N.prototype.setState=function(k,z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,z,"setState")},N.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Y(){}Y.prototype=N.prototype;function en(k,z,G){this.props=k,this.context=z,this.refs=A,this.updater=G||P}var b=en.prototype=new Y;b.constructor=en,j(b,N.prototype),b.isPureReactComponent=!0;var fn=Array.isArray,Cn=Object.prototype.hasOwnProperty,On={current:null},Nn={key:!0,ref:!0,__self:!0,__source:!0};function In(k,z,G){var nn,on={},sn=null,mn=null;if(z!=null)for(nn in z.ref!==void 0&&(mn=z.ref),z.key!==void 0&&(sn=""+z.key),z)Cn.call(z,nn)&&!Nn.hasOwnProperty(nn)&&(on[nn]=z[nn]);var pn=arguments.length-2;if(pn===1)on.children=G;else if(1<pn){for(var xn=Array(pn),ee=0;ee<pn;ee++)xn[ee]=arguments[ee+2];on.children=xn}if(k&&k.defaultProps)for(nn in pn=k.defaultProps,pn)on[nn]===void 0&&(on[nn]=pn[nn]);return{$$typeof:o,type:k,key:sn,ref:mn,props:on,_owner:On.current}}function Ve(k,z){return{$$typeof:o,type:k.type,key:z,ref:k.ref,props:k.props,_owner:k._owner}}function Fe(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function dt(k){var z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(G){return z[G]})}var Ee=/\/+/g;function ne(k,z){return typeof k=="object"&&k!==null&&k.key!=null?dt(""+k.key):z.toString(36)}function de(k,z,G,nn,on){var sn=typeof k;(sn==="undefined"||sn==="boolean")&&(k=null);var mn=!1;if(k===null)mn=!0;else switch(sn){case"string":case"number":mn=!0;break;case"object":switch(k.$$typeof){case o:case i:mn=!0}}if(mn)return mn=k,on=on(mn),k=nn===""?"."+ne(mn,0):nn,fn(on)?(G="",k!=null&&(G=k.replace(Ee,"$&/")+"/"),de(on,z,G,"",function(ee){return ee})):on!=null&&(Fe(on)&&(on=Ve(on,G+(!on.key||mn&&mn.key===on.key?"":(""+on.key).replace(Ee,"$&/")+"/")+k)),z.push(on)),1;if(mn=0,nn=nn===""?".":nn+":",fn(k))for(var pn=0;pn<k.length;pn++){sn=k[pn];var xn=nn+ne(sn,pn);mn+=de(sn,z,G,xn,on)}else if(xn=R(k),typeof xn=="function")for(k=xn.call(k),pn=0;!(sn=k.next()).done;)sn=sn.value,xn=nn+ne(sn,pn++),mn+=de(sn,z,G,xn,on);else if(sn==="object")throw z=String(k),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return mn}function _e(k,z,G){if(k==null)return k;var nn=[],on=0;return de(k,nn,"","",function(sn){return z.call(G,sn,on++)}),nn}function Xn(k){if(k._status===-1){var z=k._result;z=z(),z.then(function(G){(k._status===0||k._status===-1)&&(k._status=1,k._result=G)},function(G){(k._status===0||k._status===-1)&&(k._status=2,k._result=G)}),k._status===-1&&(k._status=0,k._result=z)}if(k._status===1)return k._result.default;throw k._result}var En={current:null},D={transition:null},X={ReactCurrentDispatcher:En,ReactCurrentBatchConfig:D,ReactCurrentOwner:On};function K(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:_e,forEach:function(k,z,G){_e(k,function(){z.apply(this,arguments)},G)},count:function(k){var z=0;return _e(k,function(){z++}),z},toArray:function(k){return _e(k,function(z){return z})||[]},only:function(k){if(!Fe(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Z.Component=N,Z.Fragment=a,Z.Profiler=c,Z.PureComponent=en,Z.StrictMode=u,Z.Suspense=x,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Z.act=K,Z.cloneElement=function(k,z,G){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var nn=j({},k.props),on=k.key,sn=k.ref,mn=k._owner;if(z!=null){if(z.ref!==void 0&&(sn=z.ref,mn=On.current),z.key!==void 0&&(on=""+z.key),k.type&&k.type.defaultProps)var pn=k.type.defaultProps;for(xn in z)Cn.call(z,xn)&&!Nn.hasOwnProperty(xn)&&(nn[xn]=z[xn]===void 0&&pn!==void 0?pn[xn]:z[xn])}var xn=arguments.length-2;if(xn===1)nn.children=G;else if(1<xn){pn=Array(xn);for(var ee=0;ee<xn;ee++)pn[ee]=arguments[ee+2];nn.children=pn}return{$$typeof:o,type:k.type,key:on,ref:sn,props:nn,_owner:mn}},Z.createContext=function(k){return k={$$typeof:h,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:p,_context:k},k.Consumer=k},Z.createElement=In,Z.createFactory=function(k){var z=In.bind(null,k);return z.type=k,z},Z.createRef=function(){return{current:null}},Z.forwardRef=function(k){return{$$typeof:d,render:k}},Z.isValidElement=Fe,Z.lazy=function(k){return{$$typeof:E,_payload:{_status:-1,_result:k},_init:Xn}},Z.memo=function(k,z){return{$$typeof:v,type:k,compare:z===void 0?null:z}},Z.startTransition=function(k){var z=D.transition;D.transition={};try{k()}finally{D.transition=z}},Z.unstable_act=K,Z.useCallback=function(k,z){return En.current.useCallback(k,z)},Z.useContext=function(k){return En.current.useContext(k)},Z.useDebugValue=function(){},Z.useDeferredValue=function(k){return En.current.useDeferredValue(k)},Z.useEffect=function(k,z){return En.current.useEffect(k,z)},Z.useId=function(){return En.current.useId()},Z.useImperativeHandle=function(k,z,G){return En.current.useImperativeHandle(k,z,G)},Z.useInsertionEffect=function(k,z){return En.current.useInsertionEffect(k,z)},Z.useLayoutEffect=function(k,z){return En.current.useLayoutEffect(k,z)},Z.useMemo=function(k,z){return En.current.useMemo(k,z)},Z.useReducer=function(k,z,G){return En.current.useReducer(k,z,G)},Z.useRef=function(k){return En.current.useRef(k)},Z.useState=function(k){return En.current.useState(k)},Z.useSyncExternalStore=function(k,z,G){return En.current.useSyncExternalStore(k,z,G)},Z.useTransition=function(){return En.current.useTransition()},Z.version="18.3.1",Z}var jc;function Cs(){return jc||(jc=1,ms.exports=jd()),ms.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c;function $d(){if($c)return Ur;$c=1;var o=Cs(),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function h(d,x,v){var E,L={},R=null,P=null;v!==void 0&&(R=""+v),x.key!==void 0&&(R=""+x.key),x.ref!==void 0&&(P=x.ref);for(E in x)u.call(x,E)&&!p.hasOwnProperty(E)&&(L[E]=x[E]);if(d&&d.defaultProps)for(E in x=d.defaultProps,x)L[E]===void 0&&(L[E]=x[E]);return{$$typeof:i,type:d,key:R,ref:P,props:L,_owner:c.current}}return Ur.Fragment=a,Ur.jsx=h,Ur.jsxs=h,Ur}var Kc;function Kd(){return Kc||(Kc=1,hs.exports=$d()),hs.exports}var V=Kd(),oi={},gs={exports:{}},bn={},vs={exports:{}},ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Bd(){return Bc||(Bc=1,(function(o){function i(D,X){var K=D.length;D.push(X);n:for(;0<K;){var k=K-1>>>1,z=D[k];if(0<c(z,X))D[k]=X,D[K]=z,K=k;else break n}}function a(D){return D.length===0?null:D[0]}function u(D){if(D.length===0)return null;var X=D[0],K=D.pop();if(K!==X){D[0]=K;n:for(var k=0,z=D.length,G=z>>>1;k<G;){var nn=2*(k+1)-1,on=D[nn],sn=nn+1,mn=D[sn];if(0>c(on,K))sn<z&&0>c(mn,on)?(D[k]=mn,D[sn]=K,k=sn):(D[k]=on,D[nn]=K,k=nn);else if(sn<z&&0>c(mn,K))D[k]=mn,D[sn]=K,k=sn;else break n}}return X}function c(D,X){var K=D.sortIndex-X.sortIndex;return K!==0?K:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;o.unstable_now=function(){return p.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var x=[],v=[],E=1,L=null,R=3,P=!1,j=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,en=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(D){for(var X=a(v);X!==null;){if(X.callback===null)u(v);else if(X.startTime<=D)u(v),X.sortIndex=X.expirationTime,i(x,X);else break;X=a(v)}}function fn(D){if(A=!1,b(D),!j)if(a(x)!==null)j=!0,Xn(Cn);else{var X=a(v);X!==null&&En(fn,X.startTime-D)}}function Cn(D,X){j=!1,A&&(A=!1,Y(In),In=-1),P=!0;var K=R;try{for(b(X),L=a(x);L!==null&&(!(L.expirationTime>X)||D&&!dt());){var k=L.callback;if(typeof k=="function"){L.callback=null,R=L.priorityLevel;var z=k(L.expirationTime<=X);X=o.unstable_now(),typeof z=="function"?L.callback=z:L===a(x)&&u(x),b(X)}else u(x);L=a(x)}if(L!==null)var G=!0;else{var nn=a(v);nn!==null&&En(fn,nn.startTime-X),G=!1}return G}finally{L=null,R=K,P=!1}}var On=!1,Nn=null,In=-1,Ve=5,Fe=-1;function dt(){return!(o.unstable_now()-Fe<Ve)}function Ee(){if(Nn!==null){var D=o.unstable_now();Fe=D;var X=!0;try{X=Nn(!0,D)}finally{X?ne():(On=!1,Nn=null)}}else On=!1}var ne;if(typeof en=="function")ne=function(){en(Ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,_e=de.port2;de.port1.onmessage=Ee,ne=function(){_e.postMessage(null)}}else ne=function(){N(Ee,0)};function Xn(D){Nn=D,On||(On=!0,ne())}function En(D,X){In=N(function(){D(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){j||P||(j=!0,Xn(Cn))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return R},o.unstable_getFirstCallbackNode=function(){return a(x)},o.unstable_next=function(D){switch(R){case 1:case 2:case 3:var X=3;break;default:X=R}var K=R;R=X;try{return D()}finally{R=K}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=R;R=D;try{return X()}finally{R=K}},o.unstable_scheduleCallback=function(D,X,K){var k=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?k+K:k):K=k,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,D={id:E++,callback:X,priorityLevel:D,startTime:K,expirationTime:z,sortIndex:-1},K>k?(D.sortIndex=K,i(v,D),a(x)===null&&D===a(v)&&(A?(Y(In),In=-1):A=!0,En(fn,K-k))):(D.sortIndex=z,i(x,D),j||P||(j=!0,Xn(Cn))),D},o.unstable_shouldYield=dt,o.unstable_wrapCallback=function(D){var X=R;return function(){var K=R;R=X;try{return D.apply(this,arguments)}finally{R=K}}}})(ys)),ys}var Vc;function Vd(){return Vc||(Vc=1,vs.exports=Bd()),vs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc;function Ud(){if(Uc)return bn;Uc=1;var o=Cs(),i=Vd();function a(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function p(n,e){h(n,e),h(n+"Capture",e)}function h(n,e){for(c[n]=e,n=0;n<e.length;n++)u.add(e[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},L={};function R(n){return x.call(L,n)?!0:x.call(E,n)?!1:v.test(n)?L[n]=!0:(E[n]=!0,!1)}function P(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function j(n,e,t,r){if(e===null||typeof e>"u"||P(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function A(n,e,t,r,l,s,f){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=f}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){N[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];N[e]=new A(e,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){N[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){N[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){N[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){N[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){N[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){N[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){N[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var Y=/[\-:]([a-z])/g;function en(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Y,en);N[e]=new A(e,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Y,en);N[e]=new A(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Y,en);N[e]=new A(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){N[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),N.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){N[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,e,t,r){var l=N.hasOwnProperty(e)?N[e]:null;(l!==null?l.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j(e,t,l,r)&&(t=null),r||l===null?R(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):l.mustUseProperty?n[l.propertyName]=t===null?l.type===3?!1:"":t:(e=l.attributeName,r=l.attributeNamespace,t===null?n.removeAttribute(e):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var fn=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),On=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),In=Symbol.for("react.strict_mode"),Ve=Symbol.for("react.profiler"),Fe=Symbol.for("react.provider"),dt=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),_e=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),En=Symbol.for("react.offscreen"),D=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=D&&n[D]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,k;function z(n){if(k===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);k=e&&e[1]||""}return`
`+k+n}var G=!1;function nn(n,e){if(!n||G)return"";G=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(_){var r=_}Reflect.construct(n,[],e)}else{try{e.call()}catch(_){r=_}n.call(e.prototype)}else{try{throw Error()}catch(_){r=_}n()}}catch(_){if(_&&r&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),s=r.stack.split(`
`),f=l.length-1,m=s.length-1;1<=f&&0<=m&&l[f]!==s[m];)m--;for(;1<=f&&0<=m;f--,m--)if(l[f]!==s[m]){if(f!==1||m!==1)do if(f--,m--,0>m||l[f]!==s[m]){var g=`
`+l[f].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=f&&0<=m);break}}}finally{G=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?z(n):""}function on(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=nn(n.type,!1),n;case 11:return n=nn(n.type.render,!1),n;case 1:return n=nn(n.type,!0),n;default:return""}}function sn(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Nn:return"Fragment";case On:return"Portal";case Ve:return"Profiler";case In:return"StrictMode";case ne:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case dt:return(n.displayName||"Context")+".Consumer";case Fe:return(n._context.displayName||"Context")+".Provider";case Ee:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _e:return e=n.displayName||null,e!==null?e:sn(n.type)||"Memo";case Xn:e=n._payload,n=n._init;try{return sn(n(e))}catch{}}return null}function mn(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sn(e);case 8:return e===In?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xn(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ee(n){var e=xn(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(f){r=""+f,s.call(this,f)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(f){r=""+f},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Gr(n){n._valueTracker||(n._valueTracker=ee(n))}function Us(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=xn(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Zr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ki(n,e){var t=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hs(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=pn(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ws(n,e){e=e.checked,e!=null&&b(n,"checked",e,!1)}function wi(n,e){Ws(n,e);var t=pn(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Si(n,e.type,t):e.hasOwnProperty("defaultValue")&&Si(n,e.type,pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function qs(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Si(n,e,t){(e!=="number"||Zr(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var lr=Array.isArray;function Ft(n,e,t,r){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&r&&(n[t].defaultSelected=!0)}else{for(t=""+pn(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,r&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function Ei(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(a(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Xs(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(a(92));if(lr(t)){if(1<t.length)throw Error(a(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:pn(t)}}function Js(n,e){var t=pn(e.value),r=pn(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function Qs(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gs(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gs(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Yr,Zs=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,l){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,l)})}:n})(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ir(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(n){jf.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),or[e]=or[n]})});function Ys(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||or.hasOwnProperty(n)&&or[n]?(""+e).trim():e+"px"}function bs(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Ys(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,l):n[t]=l}}var $f=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Li(n,e){if(e){if($f[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(a(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(a(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(a(61))}if(e.style!=null&&typeof e.style!="object")throw Error(a(62))}}function Ri(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function Ci(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zi=null,Nt=null,It=null;function na(n){if(n=Cr(n)){if(typeof zi!="function")throw Error(a(280));var e=n.stateNode;e&&(e=wl(e),zi(n.stateNode,n.type,e))}}function ea(n){Nt?It?It.push(n):It=[n]:Nt=n}function ta(){if(Nt){var n=Nt,e=It;if(It=Nt=null,na(n),e)for(n=0;n<e.length;n++)na(e[n])}}function ra(n,e){return n(e)}function la(){}var Ti=!1;function ia(n,e,t){if(Ti)return n(e,t);Ti=!0;try{return ra(n,e,t)}finally{Ti=!1,(Nt!==null||It!==null)&&(la(),ta())}}function sr(n,e){var t=n.stateNode;if(t===null)return null;var r=wl(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(a(231,e,typeof t));return t}var Fi=!1;if(d)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Fi=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Fi=!1}function Kf(n,e,t,r,l,s,f,m,g){var _=Array.prototype.slice.call(arguments,3);try{e.apply(t,_)}catch(T){this.onError(T)}}var ur=!1,br=null,nl=!1,Ni=null,Bf={onError:function(n){ur=!0,br=n}};function Vf(n,e,t,r,l,s,f,m,g){ur=!1,br=null,Kf.apply(Bf,arguments)}function Uf(n,e,t,r,l,s,f,m,g){if(Vf.apply(this,arguments),ur){if(ur){var _=br;ur=!1,br=null}else throw Error(a(198));nl||(nl=!0,Ni=_)}}function ht(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function oa(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function sa(n){if(ht(n)!==n)throw Error(a(188))}function Hf(n){var e=n.alternate;if(!e){if(e=ht(n),e===null)throw Error(a(188));return e!==n?null:n}for(var t=n,r=e;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return sa(l),n;if(s===r)return sa(l),e;s=s.sibling}throw Error(a(188))}if(t.return!==r.return)t=l,r=s;else{for(var f=!1,m=l.child;m;){if(m===t){f=!0,t=l,r=s;break}if(m===r){f=!0,r=l,t=s;break}m=m.sibling}if(!f){for(m=s.child;m;){if(m===t){f=!0,t=s,r=l;break}if(m===r){f=!0,r=s,t=l;break}m=m.sibling}if(!f)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?n:e}function aa(n){return n=Hf(n),n!==null?ua(n):null}function ua(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ua(n);if(e!==null)return e;n=n.sibling}return null}var ca=i.unstable_scheduleCallback,fa=i.unstable_cancelCallback,Wf=i.unstable_shouldYield,qf=i.unstable_requestPaint,Ln=i.unstable_now,Xf=i.unstable_getCurrentPriorityLevel,Ii=i.unstable_ImmediatePriority,pa=i.unstable_UserBlockingPriority,el=i.unstable_NormalPriority,Jf=i.unstable_LowPriority,da=i.unstable_IdlePriority,tl=null,Le=null;function Qf(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(tl,n,void 0,(n.current.flags&128)===128)}catch{}}var he=Math.clz32?Math.clz32:Yf,Gf=Math.log,Zf=Math.LN2;function Yf(n){return n>>>=0,n===0?32:31-(Gf(n)/Zf|0)|0}var rl=64,ll=4194304;function cr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function il(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,l=n.suspendedLanes,s=n.pingedLanes,f=t&268435455;if(f!==0){var m=f&~l;m!==0?r=cr(m):(s&=f,s!==0&&(r=cr(s)))}else f=t&~l,f!==0?r=cr(f):s!==0&&(r=cr(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&l)===0&&(l=r&-r,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-he(e),l=1<<t,r|=n[t],e&=~l;return r}function bf(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function np(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,l=n.expirationTimes,s=n.pendingLanes;0<s;){var f=31-he(s),m=1<<f,g=l[f];g===-1?((m&t)===0||(m&r)!==0)&&(l[f]=bf(m,e)):g<=e&&(n.expiredLanes|=m),s&=~m}}function Ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ha(){var n=rl;return rl<<=1,(rl&4194240)===0&&(rl=64),n}function Mi(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function fr(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-he(e),n[e]=t}function ep(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var l=31-he(t),s=1<<l;e[l]=0,r[l]=-1,n[l]=-1,t&=~s}}function Di(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-he(t),l=1<<r;l&e|n[r]&e&&(n[r]|=e),t&=~l}}var dn=0;function ma(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ga,Oi,va,ya,xa,ji=!1,ol=[],Ue=null,He=null,We=null,pr=new Map,dr=new Map,qe=[],tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ka(n,e){switch(n){case"focusin":case"focusout":Ue=null;break;case"dragenter":case"dragleave":He=null;break;case"mouseover":case"mouseout":We=null;break;case"pointerover":case"pointerout":pr.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(e.pointerId)}}function hr(n,e,t,r,l,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},e!==null&&(e=Cr(e),e!==null&&Oi(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function rp(n,e,t,r,l){switch(e){case"focusin":return Ue=hr(Ue,n,e,t,r,l),!0;case"dragenter":return He=hr(He,n,e,t,r,l),!0;case"mouseover":return We=hr(We,n,e,t,r,l),!0;case"pointerover":var s=l.pointerId;return pr.set(s,hr(pr.get(s)||null,n,e,t,r,l)),!0;case"gotpointercapture":return s=l.pointerId,dr.set(s,hr(dr.get(s)||null,n,e,t,r,l)),!0}return!1}function wa(n){var e=mt(n.target);if(e!==null){var t=ht(e);if(t!==null){if(e=t.tag,e===13){if(e=oa(t),e!==null){n.blockedOn=e,xa(n.priority,function(){va(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ki(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Pi=r,t.target.dispatchEvent(r),Pi=null}else return e=Cr(t),e!==null&&Oi(e),n.blockedOn=t,!1;e.shift()}return!0}function Sa(n,e,t){sl(n)&&t.delete(e)}function lp(){ji=!1,Ue!==null&&sl(Ue)&&(Ue=null),He!==null&&sl(He)&&(He=null),We!==null&&sl(We)&&(We=null),pr.forEach(Sa),dr.forEach(Sa)}function mr(n,e){n.blockedOn===e&&(n.blockedOn=null,ji||(ji=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,lp)))}function gr(n){function e(l){return mr(l,n)}if(0<ol.length){mr(ol[0],n);for(var t=1;t<ol.length;t++){var r=ol[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Ue!==null&&mr(Ue,n),He!==null&&mr(He,n),We!==null&&mr(We,n),pr.forEach(e),dr.forEach(e),t=0;t<qe.length;t++)r=qe[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<qe.length&&(t=qe[0],t.blockedOn===null);)wa(t),t.blockedOn===null&&qe.shift()}var At=fn.ReactCurrentBatchConfig,al=!0;function ip(n,e,t,r){var l=dn,s=At.transition;At.transition=null;try{dn=1,$i(n,e,t,r)}finally{dn=l,At.transition=s}}function op(n,e,t,r){var l=dn,s=At.transition;At.transition=null;try{dn=4,$i(n,e,t,r)}finally{dn=l,At.transition=s}}function $i(n,e,t,r){if(al){var l=Ki(n,e,t,r);if(l===null)ro(n,e,r,ul,t),ka(n,r);else if(rp(l,n,e,t,r))r.stopPropagation();else if(ka(n,r),e&4&&-1<tp.indexOf(n)){for(;l!==null;){var s=Cr(l);if(s!==null&&ga(s),s=Ki(n,e,t,r),s===null&&ro(n,e,r,ul,t),s===l)break;l=s}l!==null&&r.stopPropagation()}else ro(n,e,r,null,t)}}var ul=null;function Ki(n,e,t,r){if(ul=null,n=Ci(r),n=mt(n),n!==null)if(e=ht(n),e===null)n=null;else if(t=e.tag,t===13){if(n=oa(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ul=n,null}function Ea(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case Ii:return 1;case pa:return 4;case el:case Jf:return 16;case da:return 536870912;default:return 16}default:return 16}}var Xe=null,Bi=null,cl=null;function _a(){if(cl)return cl;var n,e=Bi,t=e.length,r,l="value"in Xe?Xe.value:Xe.textContent,s=l.length;for(n=0;n<t&&e[n]===l[n];n++);var f=t-n;for(r=1;r<=f&&e[t-r]===l[s-r];r++);return cl=l.slice(n,1<r?1-r:void 0)}function fl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function pl(){return!0}function La(){return!1}function te(n){function e(t,r,l,s,f){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=f,this.currentTarget=null;for(var m in n)n.hasOwnProperty(m)&&(t=n[m],this[m]=t?t(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:La,this.isPropagationStopped=La,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Mt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vi=te(Mt),vr=K({},Mt,{view:0,detail:0}),sp=te(vr),Ui,Hi,yr,dl=K({},vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yr&&(yr&&n.type==="mousemove"?(Ui=n.screenX-yr.screenX,Hi=n.screenY-yr.screenY):Hi=Ui=0,yr=n),Ui)},movementY:function(n){return"movementY"in n?n.movementY:Hi}}),Ra=te(dl),ap=K({},dl,{dataTransfer:0}),up=te(ap),cp=K({},vr,{relatedTarget:0}),Wi=te(cp),fp=K({},Mt,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=te(fp),dp=K({},Mt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hp=te(dp),mp=K({},Mt,{data:0}),Pa=te(mp),gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=yp[n])?!!e[n]:!1}function qi(){return xp}var kp=K({},vr,{key:function(n){if(n.key){var e=gp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=fl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?vp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qi,charCode:function(n){return n.type==="keypress"?fl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wp=te(kp),Sp=K({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=te(Sp),Ep=K({},vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qi}),_p=te(Ep),Lp=K({},Mt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=te(Lp),Pp=K({},dl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=te(Pp),zp=[9,13,27,32],Xi=d&&"CompositionEvent"in window,xr=null;d&&"documentMode"in document&&(xr=document.documentMode);var Tp=d&&"TextEvent"in window&&!xr,za=d&&(!Xi||xr&&8<xr&&11>=xr),Ta=" ",Fa=!1;function Na(n,e){switch(n){case"keyup":return zp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ia(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Dt=!1;function Fp(n,e){switch(n){case"compositionend":return Ia(e);case"keypress":return e.which!==32?null:(Fa=!0,Ta);case"textInput":return n=e.data,n===Ta&&Fa?null:n;default:return null}}function Np(n,e){if(Dt)return n==="compositionend"||!Xi&&Na(n,e)?(n=_a(),cl=Bi=Xe=null,Dt=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return za&&e.locale!=="ko"?null:e.data;default:return null}}var Ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Aa(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Ip[n.type]:e==="textarea"}function Ma(n,e,t,r){ea(r),e=yl(e,"onChange"),0<e.length&&(t=new Vi("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var kr=null,wr=null;function Ap(n){ba(n,0)}function hl(n){var e=Bt(n);if(Us(e))return n}function Mp(n,e){if(n==="change")return e}var Da=!1;if(d){var Ji;if(d){var Qi="oninput"in document;if(!Qi){var Oa=document.createElement("div");Oa.setAttribute("oninput","return;"),Qi=typeof Oa.oninput=="function"}Ji=Qi}else Ji=!1;Da=Ji&&(!document.documentMode||9<document.documentMode)}function ja(){kr&&(kr.detachEvent("onpropertychange",$a),wr=kr=null)}function $a(n){if(n.propertyName==="value"&&hl(wr)){var e=[];Ma(e,wr,n,Ci(n)),ia(Ap,e)}}function Dp(n,e,t){n==="focusin"?(ja(),kr=e,wr=t,kr.attachEvent("onpropertychange",$a)):n==="focusout"&&ja()}function Op(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(wr)}function jp(n,e){if(n==="click")return hl(e)}function $p(n,e){if(n==="input"||n==="change")return hl(e)}function Kp(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var me=typeof Object.is=="function"?Object.is:Kp;function Sr(n,e){if(me(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!x.call(e,l)||!me(n[l],e[l]))return!1}return!0}function Ka(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ba(n,e){var t=Ka(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Ka(t)}}function Va(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Va(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ua(){for(var n=window,e=Zr();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Zr(n.document)}return e}function Gi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Bp(n){var e=Ua(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Va(t.ownerDocument.documentElement,t)){if(r!==null&&Gi(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!n.extend&&s>r&&(l=r,r=s,s=l),l=Ba(t,s);var f=Ba(t,r);l&&f&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),s>r?(n.addRange(e),n.extend(f.node,f.offset)):(e.setEnd(f.node,f.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vp=d&&"documentMode"in document&&11>=document.documentMode,Ot=null,Zi=null,Er=null,Yi=!1;function Ha(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yi||Ot==null||Ot!==Zr(r)||(r=Ot,"selectionStart"in r&&Gi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Sr(Er,r)||(Er=r,r=yl(Zi,"onSelect"),0<r.length&&(e=new Vi("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Ot)))}function ml(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var jt={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},bi={},Wa={};d&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function gl(n){if(bi[n])return bi[n];if(!jt[n])return n;var e=jt[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wa)return bi[n]=e[t];return n}var qa=gl("animationend"),Xa=gl("animationiteration"),Ja=gl("animationstart"),Qa=gl("transitionend"),Ga=new Map,Za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Je(n,e){Ga.set(n,e),p(e,[n])}for(var no=0;no<Za.length;no++){var eo=Za[no],Up=eo.toLowerCase(),Hp=eo[0].toUpperCase()+eo.slice(1);Je(Up,"on"+Hp)}Je(qa,"onAnimationEnd"),Je(Xa,"onAnimationIteration"),Je(Ja,"onAnimationStart"),Je("dblclick","onDoubleClick"),Je("focusin","onFocus"),Je("focusout","onBlur"),Je(Qa,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Ya(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Uf(r,e,void 0,n),n.currentTarget=null}function ba(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],l=r.event;r=r.listeners;n:{var s=void 0;if(e)for(var f=r.length-1;0<=f;f--){var m=r[f],g=m.instance,_=m.currentTarget;if(m=m.listener,g!==s&&l.isPropagationStopped())break n;Ya(l,m,_),s=g}else for(f=0;f<r.length;f++){if(m=r[f],g=m.instance,_=m.currentTarget,m=m.listener,g!==s&&l.isPropagationStopped())break n;Ya(l,m,_),s=g}}}if(nl)throw n=Ni,nl=!1,Ni=null,n}function vn(n,e){var t=e[uo];t===void 0&&(t=e[uo]=new Set);var r=n+"__bubble";t.has(r)||(nu(e,n,2,!1),t.add(r))}function to(n,e,t){var r=0;e&&(r|=4),nu(t,n,r,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function Lr(n){if(!n[vl]){n[vl]=!0,u.forEach(function(t){t!=="selectionchange"&&(Wp.has(t)||to(t,!1,n),to(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[vl]||(e[vl]=!0,to("selectionchange",!1,e))}}function nu(n,e,t,r){switch(Ea(e)){case 1:var l=ip;break;case 4:l=op;break;default:l=$i}t=l.bind(null,e,t,n),l=void 0,!Fi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function ro(n,e,t,r,l){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)n:for(;;){if(r===null)return;var f=r.tag;if(f===3||f===4){var m=r.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(f===4)for(f=r.return;f!==null;){var g=f.tag;if((g===3||g===4)&&(g=f.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;f=f.return}for(;m!==null;){if(f=mt(m),f===null)return;if(g=f.tag,g===5||g===6){r=s=f;continue n}m=m.parentNode}}r=r.return}ia(function(){var _=s,T=Ci(t),F=[];n:{var C=Ga.get(n);if(C!==void 0){var O=Vi,B=n;switch(n){case"keypress":if(fl(t)===0)break n;case"keydown":case"keyup":O=wp;break;case"focusin":B="focus",O=Wi;break;case"focusout":B="blur",O=Wi;break;case"beforeblur":case"afterblur":O=Wi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=_p;break;case qa:case Xa:case Ja:O=pp;break;case Qa:O=Rp;break;case"scroll":O=sp;break;case"wheel":O=Cp;break;case"copy":case"cut":case"paste":O=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Ca}var U=(e&4)!==0,Rn=!U&&n==="scroll",w=U?C!==null?C+"Capture":null:C;U=[];for(var y=_,S;y!==null;){S=y;var I=S.stateNode;if(S.tag===5&&I!==null&&(S=I,w!==null&&(I=sr(y,w),I!=null&&U.push(Rr(y,I,S)))),Rn)break;y=y.return}0<U.length&&(C=new O(C,B,null,t,T),F.push({event:C,listeners:U}))}}if((e&7)===0){n:{if(C=n==="mouseover"||n==="pointerover",O=n==="mouseout"||n==="pointerout",C&&t!==Pi&&(B=t.relatedTarget||t.fromElement)&&(mt(B)||B[Ne]))break n;if((O||C)&&(C=T.window===T?T:(C=T.ownerDocument)?C.defaultView||C.parentWindow:window,O?(B=t.relatedTarget||t.toElement,O=_,B=B?mt(B):null,B!==null&&(Rn=ht(B),B!==Rn||B.tag!==5&&B.tag!==6)&&(B=null)):(O=null,B=_),O!==B)){if(U=Ra,I="onMouseLeave",w="onMouseEnter",y="mouse",(n==="pointerout"||n==="pointerover")&&(U=Ca,I="onPointerLeave",w="onPointerEnter",y="pointer"),Rn=O==null?C:Bt(O),S=B==null?C:Bt(B),C=new U(I,y+"leave",O,t,T),C.target=Rn,C.relatedTarget=S,I=null,mt(T)===_&&(U=new U(w,y+"enter",B,t,T),U.target=S,U.relatedTarget=Rn,I=U),Rn=I,O&&B)e:{for(U=O,w=B,y=0,S=U;S;S=$t(S))y++;for(S=0,I=w;I;I=$t(I))S++;for(;0<y-S;)U=$t(U),y--;for(;0<S-y;)w=$t(w),S--;for(;y--;){if(U===w||w!==null&&U===w.alternate)break e;U=$t(U),w=$t(w)}U=null}else U=null;O!==null&&eu(F,C,O,U,!1),B!==null&&Rn!==null&&eu(F,Rn,B,U,!0)}}n:{if(C=_?Bt(_):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var H=Mp;else if(Aa(C))if(Da)H=$p;else{H=Op;var W=Dp}else(O=C.nodeName)&&O.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(H=jp);if(H&&(H=H(n,_))){Ma(F,H,t,T);break n}W&&W(n,C,_),n==="focusout"&&(W=C._wrapperState)&&W.controlled&&C.type==="number"&&Si(C,"number",C.value)}switch(W=_?Bt(_):window,n){case"focusin":(Aa(W)||W.contentEditable==="true")&&(Ot=W,Zi=_,Er=null);break;case"focusout":Er=Zi=Ot=null;break;case"mousedown":Yi=!0;break;case"contextmenu":case"mouseup":case"dragend":Yi=!1,Ha(F,t,T);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Ha(F,t,T)}var q;if(Xi)n:{switch(n){case"compositionstart":var J="onCompositionStart";break n;case"compositionend":J="onCompositionEnd";break n;case"compositionupdate":J="onCompositionUpdate";break n}J=void 0}else Dt?Na(n,t)&&(J="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(J="onCompositionStart");J&&(za&&t.locale!=="ko"&&(Dt||J!=="onCompositionStart"?J==="onCompositionEnd"&&Dt&&(q=_a()):(Xe=T,Bi="value"in Xe?Xe.value:Xe.textContent,Dt=!0)),W=yl(_,J),0<W.length&&(J=new Pa(J,n,null,t,T),F.push({event:J,listeners:W}),q?J.data=q:(q=Ia(t),q!==null&&(J.data=q)))),(q=Tp?Fp(n,t):Np(n,t))&&(_=yl(_,"onBeforeInput"),0<_.length&&(T=new Pa("onBeforeInput","beforeinput",null,t,T),F.push({event:T,listeners:_}),T.data=q))}ba(F,e)})}function Rr(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yl(n,e){for(var t=e+"Capture",r=[];n!==null;){var l=n,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=sr(n,t),s!=null&&r.unshift(Rr(n,s,l)),s=sr(n,e),s!=null&&r.push(Rr(n,s,l))),n=n.return}return r}function $t(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function eu(n,e,t,r,l){for(var s=e._reactName,f=[];t!==null&&t!==r;){var m=t,g=m.alternate,_=m.stateNode;if(g!==null&&g===r)break;m.tag===5&&_!==null&&(m=_,l?(g=sr(t,s),g!=null&&f.unshift(Rr(t,g,m))):l||(g=sr(t,s),g!=null&&f.push(Rr(t,g,m)))),t=t.return}f.length!==0&&n.push({event:e,listeners:f})}var qp=/\r\n?/g,Xp=/\u0000|\uFFFD/g;function tu(n){return(typeof n=="string"?n:""+n).replace(qp,`
`).replace(Xp,"")}function xl(n,e,t){if(e=tu(e),tu(n)!==e&&t)throw Error(a(425))}function kl(){}var lo=null,io=null;function oo(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,Jp=typeof clearTimeout=="function"?clearTimeout:void 0,ru=typeof Promise=="function"?Promise:void 0,Qp=typeof queueMicrotask=="function"?queueMicrotask:typeof ru<"u"?function(n){return ru.resolve(null).then(n).catch(Gp)}:so;function Gp(n){setTimeout(function(){throw n})}function ao(n,e){var t=e,r=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){n.removeChild(l),gr(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);gr(e)}function Qe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function lu(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Kt=Math.random().toString(36).slice(2),Re="__reactFiber$"+Kt,Pr="__reactProps$"+Kt,Ne="__reactContainer$"+Kt,uo="__reactEvents$"+Kt,Zp="__reactListeners$"+Kt,Yp="__reactHandles$"+Kt;function mt(n){var e=n[Re];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Ne]||t[Re]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=lu(n);n!==null;){if(t=n[Re])return t;n=lu(n)}return e}n=t,t=n.parentNode}return null}function Cr(n){return n=n[Re]||n[Ne],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bt(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(a(33))}function wl(n){return n[Pr]||null}var co=[],Vt=-1;function Ge(n){return{current:n}}function yn(n){0>Vt||(n.current=co[Vt],co[Vt]=null,Vt--)}function gn(n,e){Vt++,co[Vt]=n.current,n.current=e}var Ze={},Kn=Ge(Ze),Jn=Ge(!1),gt=Ze;function Ut(n,e){var t=n.type.contextTypes;if(!t)return Ze;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in t)l[s]=e[s];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=l),l}function Qn(n){return n=n.childContextTypes,n!=null}function Sl(){yn(Jn),yn(Kn)}function iu(n,e,t){if(Kn.current!==Ze)throw Error(a(168));gn(Kn,e),gn(Jn,t)}function ou(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in e))throw Error(a(108,mn(n)||"Unknown",l));return K({},t,r)}function El(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ze,gt=Kn.current,gn(Kn,n),gn(Jn,Jn.current),!0}function su(n,e,t){var r=n.stateNode;if(!r)throw Error(a(169));t?(n=ou(n,e,gt),r.__reactInternalMemoizedMergedChildContext=n,yn(Jn),yn(Kn),gn(Kn,n)):yn(Jn),gn(Jn,t)}var Ie=null,_l=!1,fo=!1;function au(n){Ie===null?Ie=[n]:Ie.push(n)}function bp(n){_l=!0,au(n)}function Ye(){if(!fo&&Ie!==null){fo=!0;var n=0,e=dn;try{var t=Ie;for(dn=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}Ie=null,_l=!1}catch(l){throw Ie!==null&&(Ie=Ie.slice(n+1)),ca(Ii,Ye),l}finally{dn=e,fo=!1}}return null}var Ht=[],Wt=0,Ll=null,Rl=0,oe=[],se=0,vt=null,Ae=1,Me="";function yt(n,e){Ht[Wt++]=Rl,Ht[Wt++]=Ll,Ll=n,Rl=e}function uu(n,e,t){oe[se++]=Ae,oe[se++]=Me,oe[se++]=vt,vt=n;var r=Ae;n=Me;var l=32-he(r)-1;r&=~(1<<l),t+=1;var s=32-he(e)+l;if(30<s){var f=l-l%5;s=(r&(1<<f)-1).toString(32),r>>=f,l-=f,Ae=1<<32-he(e)+l|t<<l|r,Me=s+n}else Ae=1<<s|t<<l|r,Me=n}function po(n){n.return!==null&&(yt(n,1),uu(n,1,0))}function ho(n){for(;n===Ll;)Ll=Ht[--Wt],Ht[Wt]=null,Rl=Ht[--Wt],Ht[Wt]=null;for(;n===vt;)vt=oe[--se],oe[se]=null,Me=oe[--se],oe[se]=null,Ae=oe[--se],oe[se]=null}var re=null,le=null,kn=!1,ge=null;function cu(n,e){var t=fe(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function fu(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,re=n,le=Qe(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,re=n,le=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=vt!==null?{id:Ae,overflow:Me}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=fe(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,re=n,le=null,!0):!1;default:return!1}}function mo(n){return(n.mode&1)!==0&&(n.flags&128)===0}function go(n){if(kn){var e=le;if(e){var t=e;if(!fu(n,e)){if(mo(n))throw Error(a(418));e=Qe(t.nextSibling);var r=re;e&&fu(n,e)?cu(r,t):(n.flags=n.flags&-4097|2,kn=!1,re=n)}}else{if(mo(n))throw Error(a(418));n.flags=n.flags&-4097|2,kn=!1,re=n}}}function pu(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;re=n}function Pl(n){if(n!==re)return!1;if(!kn)return pu(n),kn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!oo(n.type,n.memoizedProps)),e&&(e=le)){if(mo(n))throw du(),Error(a(418));for(;e;)cu(n,e),e=Qe(e.nextSibling)}if(pu(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){le=Qe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}le=null}}else le=re?Qe(n.stateNode.nextSibling):null;return!0}function du(){for(var n=le;n;)n=Qe(n.nextSibling)}function qt(){le=re=null,kn=!1}function vo(n){ge===null?ge=[n]:ge.push(n)}var nd=fn.ReactCurrentBatchConfig;function zr(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,n));var l=r,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(f){var m=l.refs;f===null?delete m[s]:m[s]=f},e._stringRef=s,e)}if(typeof n!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,n))}return n}function Cl(n,e){throw n=Object.prototype.toString.call(e),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function hu(n){var e=n._init;return e(n._payload)}function mu(n){function e(w,y){if(n){var S=w.deletions;S===null?(w.deletions=[y],w.flags|=16):S.push(y)}}function t(w,y){if(!n)return null;for(;y!==null;)e(w,y),y=y.sibling;return null}function r(w,y){for(w=new Map;y!==null;)y.key!==null?w.set(y.key,y):w.set(y.index,y),y=y.sibling;return w}function l(w,y){return w=ot(w,y),w.index=0,w.sibling=null,w}function s(w,y,S){return w.index=S,n?(S=w.alternate,S!==null?(S=S.index,S<y?(w.flags|=2,y):S):(w.flags|=2,y)):(w.flags|=1048576,y)}function f(w){return n&&w.alternate===null&&(w.flags|=2),w}function m(w,y,S,I){return y===null||y.tag!==6?(y=as(S,w.mode,I),y.return=w,y):(y=l(y,S),y.return=w,y)}function g(w,y,S,I){var H=S.type;return H===Nn?T(w,y,S.props.children,I,S.key):y!==null&&(y.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Xn&&hu(H)===y.type)?(I=l(y,S.props),I.ref=zr(w,y,S),I.return=w,I):(I=Yl(S.type,S.key,S.props,null,w.mode,I),I.ref=zr(w,y,S),I.return=w,I)}function _(w,y,S,I){return y===null||y.tag!==4||y.stateNode.containerInfo!==S.containerInfo||y.stateNode.implementation!==S.implementation?(y=us(S,w.mode,I),y.return=w,y):(y=l(y,S.children||[]),y.return=w,y)}function T(w,y,S,I,H){return y===null||y.tag!==7?(y=Rt(S,w.mode,I,H),y.return=w,y):(y=l(y,S),y.return=w,y)}function F(w,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return y=as(""+y,w.mode,S),y.return=w,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Cn:return S=Yl(y.type,y.key,y.props,null,w.mode,S),S.ref=zr(w,null,y),S.return=w,S;case On:return y=us(y,w.mode,S),y.return=w,y;case Xn:var I=y._init;return F(w,I(y._payload),S)}if(lr(y)||X(y))return y=Rt(y,w.mode,S,null),y.return=w,y;Cl(w,y)}return null}function C(w,y,S,I){var H=y!==null?y.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return H!==null?null:m(w,y,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Cn:return S.key===H?g(w,y,S,I):null;case On:return S.key===H?_(w,y,S,I):null;case Xn:return H=S._init,C(w,y,H(S._payload),I)}if(lr(S)||X(S))return H!==null?null:T(w,y,S,I,null);Cl(w,S)}return null}function O(w,y,S,I,H){if(typeof I=="string"&&I!==""||typeof I=="number")return w=w.get(S)||null,m(y,w,""+I,H);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Cn:return w=w.get(I.key===null?S:I.key)||null,g(y,w,I,H);case On:return w=w.get(I.key===null?S:I.key)||null,_(y,w,I,H);case Xn:var W=I._init;return O(w,y,S,W(I._payload),H)}if(lr(I)||X(I))return w=w.get(S)||null,T(y,w,I,H,null);Cl(y,I)}return null}function B(w,y,S,I){for(var H=null,W=null,q=y,J=y=0,Dn=null;q!==null&&J<S.length;J++){q.index>J?(Dn=q,q=null):Dn=q.sibling;var an=C(w,q,S[J],I);if(an===null){q===null&&(q=Dn);break}n&&q&&an.alternate===null&&e(w,q),y=s(an,y,J),W===null?H=an:W.sibling=an,W=an,q=Dn}if(J===S.length)return t(w,q),kn&&yt(w,J),H;if(q===null){for(;J<S.length;J++)q=F(w,S[J],I),q!==null&&(y=s(q,y,J),W===null?H=q:W.sibling=q,W=q);return kn&&yt(w,J),H}for(q=r(w,q);J<S.length;J++)Dn=O(q,w,J,S[J],I),Dn!==null&&(n&&Dn.alternate!==null&&q.delete(Dn.key===null?J:Dn.key),y=s(Dn,y,J),W===null?H=Dn:W.sibling=Dn,W=Dn);return n&&q.forEach(function(st){return e(w,st)}),kn&&yt(w,J),H}function U(w,y,S,I){var H=X(S);if(typeof H!="function")throw Error(a(150));if(S=H.call(S),S==null)throw Error(a(151));for(var W=H=null,q=y,J=y=0,Dn=null,an=S.next();q!==null&&!an.done;J++,an=S.next()){q.index>J?(Dn=q,q=null):Dn=q.sibling;var st=C(w,q,an.value,I);if(st===null){q===null&&(q=Dn);break}n&&q&&st.alternate===null&&e(w,q),y=s(st,y,J),W===null?H=st:W.sibling=st,W=st,q=Dn}if(an.done)return t(w,q),kn&&yt(w,J),H;if(q===null){for(;!an.done;J++,an=S.next())an=F(w,an.value,I),an!==null&&(y=s(an,y,J),W===null?H=an:W.sibling=an,W=an);return kn&&yt(w,J),H}for(q=r(w,q);!an.done;J++,an=S.next())an=O(q,w,J,an.value,I),an!==null&&(n&&an.alternate!==null&&q.delete(an.key===null?J:an.key),y=s(an,y,J),W===null?H=an:W.sibling=an,W=an);return n&&q.forEach(function(Id){return e(w,Id)}),kn&&yt(w,J),H}function Rn(w,y,S,I){if(typeof S=="object"&&S!==null&&S.type===Nn&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Cn:n:{for(var H=S.key,W=y;W!==null;){if(W.key===H){if(H=S.type,H===Nn){if(W.tag===7){t(w,W.sibling),y=l(W,S.props.children),y.return=w,w=y;break n}}else if(W.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Xn&&hu(H)===W.type){t(w,W.sibling),y=l(W,S.props),y.ref=zr(w,W,S),y.return=w,w=y;break n}t(w,W);break}else e(w,W);W=W.sibling}S.type===Nn?(y=Rt(S.props.children,w.mode,I,S.key),y.return=w,w=y):(I=Yl(S.type,S.key,S.props,null,w.mode,I),I.ref=zr(w,y,S),I.return=w,w=I)}return f(w);case On:n:{for(W=S.key;y!==null;){if(y.key===W)if(y.tag===4&&y.stateNode.containerInfo===S.containerInfo&&y.stateNode.implementation===S.implementation){t(w,y.sibling),y=l(y,S.children||[]),y.return=w,w=y;break n}else{t(w,y);break}else e(w,y);y=y.sibling}y=us(S,w.mode,I),y.return=w,w=y}return f(w);case Xn:return W=S._init,Rn(w,y,W(S._payload),I)}if(lr(S))return B(w,y,S,I);if(X(S))return U(w,y,S,I);Cl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,y!==null&&y.tag===6?(t(w,y.sibling),y=l(y,S),y.return=w,w=y):(t(w,y),y=as(S,w.mode,I),y.return=w,w=y),f(w)):t(w,y)}return Rn}var Xt=mu(!0),gu=mu(!1),zl=Ge(null),Tl=null,Jt=null,yo=null;function xo(){yo=Jt=Tl=null}function ko(n){var e=zl.current;yn(zl),n._currentValue=e}function wo(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function Qt(n,e){Tl=n,yo=Jt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Gn=!0),n.firstContext=null)}function ae(n){var e=n._currentValue;if(yo!==n)if(n={context:n,memoizedValue:e,next:null},Jt===null){if(Tl===null)throw Error(a(308));Jt=n,Tl.dependencies={lanes:0,firstContext:n}}else Jt=Jt.next=n;return e}var xt=null;function So(n){xt===null?xt=[n]:xt.push(n)}function vu(n,e,t,r){var l=e.interleaved;return l===null?(t.next=t,So(e)):(t.next=l.next,l.next=t),e.interleaved=t,De(n,r)}function De(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var be=!1;function Eo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Oe(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function nt(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,(rn&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,De(n,t)}return l=r.interleaved,l===null?(e.next=e,So(r)):(e.next=l.next,l.next=e),r.interleaved=e,De(n,t)}function Fl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Di(n,t)}}function xu(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var f={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?l=s=f:s=s.next=f,t=t.next}while(t!==null);s===null?l=s=e:s=s.next=e}else l=s=e;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Nl(n,e,t,r){var l=n.updateQueue;be=!1;var s=l.firstBaseUpdate,f=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var g=m,_=g.next;g.next=null,f===null?s=_:f.next=_,f=g;var T=n.alternate;T!==null&&(T=T.updateQueue,m=T.lastBaseUpdate,m!==f&&(m===null?T.firstBaseUpdate=_:m.next=_,T.lastBaseUpdate=g))}if(s!==null){var F=l.baseState;f=0,T=_=g=null,m=s;do{var C=m.lane,O=m.eventTime;if((r&C)===C){T!==null&&(T=T.next={eventTime:O,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});n:{var B=n,U=m;switch(C=e,O=t,U.tag){case 1:if(B=U.payload,typeof B=="function"){F=B.call(O,F,C);break n}F=B;break n;case 3:B.flags=B.flags&-65537|128;case 0:if(B=U.payload,C=typeof B=="function"?B.call(O,F,C):B,C==null)break n;F=K({},F,C);break n;case 2:be=!0}}m.callback!==null&&m.lane!==0&&(n.flags|=64,C=l.effects,C===null?l.effects=[m]:C.push(m))}else O={eventTime:O,lane:C,tag:m.tag,payload:m.payload,callback:m.callback,next:null},T===null?(_=T=O,g=F):T=T.next=O,f|=C;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;C=m,m=C.next,C.next=null,l.lastBaseUpdate=C,l.shared.pending=null}}while(!0);if(T===null&&(g=F),l.baseState=g,l.firstBaseUpdate=_,l.lastBaseUpdate=T,e=l.shared.interleaved,e!==null){l=e;do f|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);St|=f,n.lanes=f,n.memoizedState=F}}function ku(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var Tr={},Pe=Ge(Tr),Fr=Ge(Tr),Nr=Ge(Tr);function kt(n){if(n===Tr)throw Error(a(174));return n}function _o(n,e){switch(gn(Nr,e),gn(Fr,n),gn(Pe,Tr),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_i(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=_i(e,n)}yn(Pe),gn(Pe,e)}function Gt(){yn(Pe),yn(Fr),yn(Nr)}function wu(n){kt(Nr.current);var e=kt(Pe.current),t=_i(e,n.type);e!==t&&(gn(Fr,n),gn(Pe,t))}function Lo(n){Fr.current===n&&(yn(Pe),yn(Fr))}var wn=Ge(0);function Il(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ro=[];function Po(){for(var n=0;n<Ro.length;n++)Ro[n]._workInProgressVersionPrimary=null;Ro.length=0}var Al=fn.ReactCurrentDispatcher,Co=fn.ReactCurrentBatchConfig,wt=0,Sn=null,Tn=null,An=null,Ml=!1,Ir=!1,Ar=0,ed=0;function Bn(){throw Error(a(321))}function zo(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!me(n[t],e[t]))return!1;return!0}function To(n,e,t,r,l,s){if(wt=s,Sn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=n===null||n.memoizedState===null?id:od,n=t(r,l),Ir){s=0;do{if(Ir=!1,Ar=0,25<=s)throw Error(a(301));s+=1,An=Tn=null,e.updateQueue=null,Al.current=sd,n=t(r,l)}while(Ir)}if(Al.current=jl,e=Tn!==null&&Tn.next!==null,wt=0,An=Tn=Sn=null,Ml=!1,e)throw Error(a(300));return n}function Fo(){var n=Ar!==0;return Ar=0,n}function Ce(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?Sn.memoizedState=An=n:An=An.next=n,An}function ue(){if(Tn===null){var n=Sn.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var e=An===null?Sn.memoizedState:An.next;if(e!==null)An=e,Tn=n;else{if(n===null)throw Error(a(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},An===null?Sn.memoizedState=An=n:An=An.next=n}return An}function Mr(n,e){return typeof e=="function"?e(n):e}function No(n){var e=ue(),t=e.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=n;var r=Tn,l=r.baseQueue,s=t.pending;if(s!==null){if(l!==null){var f=l.next;l.next=s.next,s.next=f}r.baseQueue=l=s,t.pending=null}if(l!==null){s=l.next,r=r.baseState;var m=f=null,g=null,_=s;do{var T=_.lane;if((wt&T)===T)g!==null&&(g=g.next={lane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),r=_.hasEagerState?_.eagerState:n(r,_.action);else{var F={lane:T,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null};g===null?(m=g=F,f=r):g=g.next=F,Sn.lanes|=T,St|=T}_=_.next}while(_!==null&&_!==s);g===null?f=r:g.next=m,me(r,e.memoizedState)||(Gn=!0),e.memoizedState=r,e.baseState=f,e.baseQueue=g,t.lastRenderedState=r}if(n=t.interleaved,n!==null){l=n;do s=l.lane,Sn.lanes|=s,St|=s,l=l.next;while(l!==n)}else l===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Io(n){var e=ue(),t=e.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=n;var r=t.dispatch,l=t.pending,s=e.memoizedState;if(l!==null){t.pending=null;var f=l=l.next;do s=n(s,f.action),f=f.next;while(f!==l);me(s,e.memoizedState)||(Gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,r]}function Su(){}function Eu(n,e){var t=Sn,r=ue(),l=e(),s=!me(r.memoizedState,l);if(s&&(r.memoizedState=l,Gn=!0),r=r.queue,Ao(Ru.bind(null,t,r,n),[n]),r.getSnapshot!==e||s||An!==null&&An.memoizedState.tag&1){if(t.flags|=2048,Dr(9,Lu.bind(null,t,r,l,e),void 0,null),Mn===null)throw Error(a(349));(wt&30)!==0||_u(t,e,l)}return l}function _u(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Sn.updateQueue,e===null?(e={lastEffect:null,stores:null},Sn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Lu(n,e,t,r){e.value=t,e.getSnapshot=r,Pu(e)&&Cu(n)}function Ru(n,e,t){return t(function(){Pu(e)&&Cu(n)})}function Pu(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!me(n,t)}catch{return!0}}function Cu(n){var e=De(n,1);e!==null&&ke(e,n,1,-1)}function zu(n){var e=Ce();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:n},e.queue=n,n=n.dispatch=ld.bind(null,Sn,n),[e.memoizedState,n]}function Dr(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=Sn.updateQueue,e===null?(e={lastEffect:null,stores:null},Sn.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function Tu(){return ue().memoizedState}function Dl(n,e,t,r){var l=Ce();Sn.flags|=n,l.memoizedState=Dr(1|e,t,void 0,r===void 0?null:r)}function Ol(n,e,t,r){var l=ue();r=r===void 0?null:r;var s=void 0;if(Tn!==null){var f=Tn.memoizedState;if(s=f.destroy,r!==null&&zo(r,f.deps)){l.memoizedState=Dr(e,t,s,r);return}}Sn.flags|=n,l.memoizedState=Dr(1|e,t,s,r)}function Fu(n,e){return Dl(8390656,8,n,e)}function Ao(n,e){return Ol(2048,8,n,e)}function Nu(n,e){return Ol(4,2,n,e)}function Iu(n,e){return Ol(4,4,n,e)}function Au(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Mu(n,e,t){return t=t!=null?t.concat([n]):null,Ol(4,4,Au.bind(null,e,n),t)}function Mo(){}function Du(n,e){var t=ue();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&zo(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Ou(n,e){var t=ue();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&zo(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function ju(n,e,t){return(wt&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=t):(me(t,e)||(t=ha(),Sn.lanes|=t,St|=t,n.baseState=!0),e)}function td(n,e){var t=dn;dn=t!==0&&4>t?t:4,n(!0);var r=Co.transition;Co.transition={};try{n(!1),e()}finally{dn=t,Co.transition=r}}function $u(){return ue().memoizedState}function rd(n,e,t){var r=lt(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ku(n))Bu(e,t);else if(t=vu(n,e,t,r),t!==null){var l=Wn();ke(t,n,r,l),Vu(t,e,r)}}function ld(n,e,t){var r=lt(n),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ku(n))Bu(e,l);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var f=e.lastRenderedState,m=s(f,t);if(l.hasEagerState=!0,l.eagerState=m,me(m,f)){var g=e.interleaved;g===null?(l.next=l,So(e)):(l.next=g.next,g.next=l),e.interleaved=l;return}}catch{}finally{}t=vu(n,e,l,r),t!==null&&(l=Wn(),ke(t,n,r,l),Vu(t,e,r))}}function Ku(n){var e=n.alternate;return n===Sn||e!==null&&e===Sn}function Bu(n,e){Ir=Ml=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Vu(n,e,t){if((t&4194240)!==0){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Di(n,t)}}var jl={readContext:ae,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},id={readContext:ae,useCallback:function(n,e){return Ce().memoizedState=[n,e===void 0?null:e],n},useContext:ae,useEffect:Fu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Dl(4194308,4,Au.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Dl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Dl(4,2,n,e)},useMemo:function(n,e){var t=Ce();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=Ce();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=rd.bind(null,Sn,n),[r.memoizedState,n]},useRef:function(n){var e=Ce();return n={current:n},e.memoizedState=n},useState:zu,useDebugValue:Mo,useDeferredValue:function(n){return Ce().memoizedState=n},useTransition:function(){var n=zu(!1),e=n[0];return n=td.bind(null,n[1]),Ce().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=Sn,l=Ce();if(kn){if(t===void 0)throw Error(a(407));t=t()}else{if(t=e(),Mn===null)throw Error(a(349));(wt&30)!==0||_u(r,e,t)}l.memoizedState=t;var s={value:t,getSnapshot:e};return l.queue=s,Fu(Ru.bind(null,r,s,n),[n]),r.flags|=2048,Dr(9,Lu.bind(null,r,s,t,e),void 0,null),t},useId:function(){var n=Ce(),e=Mn.identifierPrefix;if(kn){var t=Me,r=Ae;t=(r&~(1<<32-he(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ar++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=ed++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},od={readContext:ae,useCallback:Du,useContext:ae,useEffect:Ao,useImperativeHandle:Mu,useInsertionEffect:Nu,useLayoutEffect:Iu,useMemo:Ou,useReducer:No,useRef:Tu,useState:function(){return No(Mr)},useDebugValue:Mo,useDeferredValue:function(n){var e=ue();return ju(e,Tn.memoizedState,n)},useTransition:function(){var n=No(Mr)[0],e=ue().memoizedState;return[n,e]},useMutableSource:Su,useSyncExternalStore:Eu,useId:$u,unstable_isNewReconciler:!1},sd={readContext:ae,useCallback:Du,useContext:ae,useEffect:Ao,useImperativeHandle:Mu,useInsertionEffect:Nu,useLayoutEffect:Iu,useMemo:Ou,useReducer:Io,useRef:Tu,useState:function(){return Io(Mr)},useDebugValue:Mo,useDeferredValue:function(n){var e=ue();return Tn===null?e.memoizedState=n:ju(e,Tn.memoizedState,n)},useTransition:function(){var n=Io(Mr)[0],e=ue().memoizedState;return[n,e]},useMutableSource:Su,useSyncExternalStore:Eu,useId:$u,unstable_isNewReconciler:!1};function ve(n,e){if(n&&n.defaultProps){e=K({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Do(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:K({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $l={isMounted:function(n){return(n=n._reactInternals)?ht(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=Wn(),l=lt(n),s=Oe(r,l);s.payload=e,t!=null&&(s.callback=t),e=nt(n,s,l),e!==null&&(ke(e,n,l,r),Fl(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=Wn(),l=lt(n),s=Oe(r,l);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=nt(n,s,l),e!==null&&(ke(e,n,l,r),Fl(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),r=lt(n),l=Oe(t,r);l.tag=2,e!=null&&(l.callback=e),e=nt(n,l,r),e!==null&&(ke(e,n,r,t),Fl(e,n,r))}};function Uu(n,e,t,r,l,s,f){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,s,f):e.prototype&&e.prototype.isPureReactComponent?!Sr(t,r)||!Sr(l,s):!0}function Hu(n,e,t){var r=!1,l=Ze,s=e.contextType;return typeof s=="object"&&s!==null?s=ae(s):(l=Qn(e)?gt:Kn.current,r=e.contextTypes,s=(r=r!=null)?Ut(n,l):Ze),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=s),e}function Wu(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&$l.enqueueReplaceState(e,e.state,null)}function Oo(n,e,t,r){var l=n.stateNode;l.props=t,l.state=n.memoizedState,l.refs={},Eo(n);var s=e.contextType;typeof s=="object"&&s!==null?l.context=ae(s):(s=Qn(e)?gt:Kn.current,l.context=Ut(n,s)),l.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Do(n,e,s,t),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&$l.enqueueReplaceState(l,l.state,null),Nl(n,t,l,r),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function Zt(n,e){try{var t="",r=e;do t+=on(r),r=r.return;while(r);var l=t}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:l,digest:null}}function jo(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function $o(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var ad=typeof WeakMap=="function"?WeakMap:Map;function qu(n,e,t){t=Oe(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){ql||(ql=!0,ns=r),$o(n,e)},t}function Xu(n,e,t){t=Oe(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var l=e.value;t.payload=function(){return r(l)},t.callback=function(){$o(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){$o(n,e),typeof r!="function"&&(tt===null?tt=new Set([this]):tt.add(this));var f=e.stack;this.componentDidCatch(e.value,{componentStack:f!==null?f:""})}),t}function Ju(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new ad;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(t)||(l.add(t),n=Sd.bind(null,n,e,t),e.then(n,n))}function Qu(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Gu(n,e,t,r,l){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Oe(-1,1),e.tag=2,nt(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=l,n)}var ud=fn.ReactCurrentOwner,Gn=!1;function Hn(n,e,t,r){e.child=n===null?gu(e,null,t,r):Xt(e,n.child,t,r)}function Zu(n,e,t,r,l){t=t.render;var s=e.ref;return Qt(e,l),r=To(n,e,t,r,s,l),t=Fo(),n!==null&&!Gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,je(n,e,l)):(kn&&t&&po(e),e.flags|=1,Hn(n,e,r,l),e.child)}function Yu(n,e,t,r,l){if(n===null){var s=t.type;return typeof s=="function"&&!ss(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,bu(n,e,s,r,l)):(n=Yl(t.type,null,r,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&l)===0){var f=s.memoizedProps;if(t=t.compare,t=t!==null?t:Sr,t(f,r)&&n.ref===e.ref)return je(n,e,l)}return e.flags|=1,n=ot(s,r),n.ref=e.ref,n.return=e,e.child=n}function bu(n,e,t,r,l){if(n!==null){var s=n.memoizedProps;if(Sr(s,r)&&n.ref===e.ref)if(Gn=!1,e.pendingProps=r=s,(n.lanes&l)!==0)(n.flags&131072)!==0&&(Gn=!0);else return e.lanes=n.lanes,je(n,e,l)}return Ko(n,e,t,r,l)}function nc(n,e,t){var r=e.pendingProps,l=r.children,s=n!==null?n.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gn(bt,ie),ie|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,gn(bt,ie),ie|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:t,gn(bt,ie),ie|=r}else s!==null?(r=s.baseLanes|t,e.memoizedState=null):r=t,gn(bt,ie),ie|=r;return Hn(n,e,l,t),e.child}function ec(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ko(n,e,t,r,l){var s=Qn(t)?gt:Kn.current;return s=Ut(e,s),Qt(e,l),t=To(n,e,t,r,s,l),r=Fo(),n!==null&&!Gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,je(n,e,l)):(kn&&r&&po(e),e.flags|=1,Hn(n,e,t,l),e.child)}function tc(n,e,t,r,l){if(Qn(t)){var s=!0;El(e)}else s=!1;if(Qt(e,l),e.stateNode===null)Bl(n,e),Hu(e,t,r),Oo(e,t,r,l),r=!0;else if(n===null){var f=e.stateNode,m=e.memoizedProps;f.props=m;var g=f.context,_=t.contextType;typeof _=="object"&&_!==null?_=ae(_):(_=Qn(t)?gt:Kn.current,_=Ut(e,_));var T=t.getDerivedStateFromProps,F=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function";F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==r||g!==_)&&Wu(e,f,r,_),be=!1;var C=e.memoizedState;f.state=C,Nl(e,r,f,l),g=e.memoizedState,m!==r||C!==g||Jn.current||be?(typeof T=="function"&&(Do(e,t,T,r),g=e.memoizedState),(m=be||Uu(e,t,m,r,C,g,_))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(e.flags|=4194308)):(typeof f.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=g),f.props=r,f.state=g,f.context=_,r=m):(typeof f.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{f=e.stateNode,yu(n,e),m=e.memoizedProps,_=e.type===e.elementType?m:ve(e.type,m),f.props=_,F=e.pendingProps,C=f.context,g=t.contextType,typeof g=="object"&&g!==null?g=ae(g):(g=Qn(t)?gt:Kn.current,g=Ut(e,g));var O=t.getDerivedStateFromProps;(T=typeof O=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==F||C!==g)&&Wu(e,f,r,g),be=!1,C=e.memoizedState,f.state=C,Nl(e,r,f,l);var B=e.memoizedState;m!==F||C!==B||Jn.current||be?(typeof O=="function"&&(Do(e,t,O,r),B=e.memoizedState),(_=be||Uu(e,t,_,r,C,B,g)||!1)?(T||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,B,g),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,B,g)),typeof f.componentDidUpdate=="function"&&(e.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===n.memoizedProps&&C===n.memoizedState||(e.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===n.memoizedProps&&C===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=B),f.props=r,f.state=B,f.context=g,r=_):(typeof f.componentDidUpdate!="function"||m===n.memoizedProps&&C===n.memoizedState||(e.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===n.memoizedProps&&C===n.memoizedState||(e.flags|=1024),r=!1)}return Bo(n,e,t,r,s,l)}function Bo(n,e,t,r,l,s){ec(n,e);var f=(e.flags&128)!==0;if(!r&&!f)return l&&su(e,t,!1),je(n,e,s);r=e.stateNode,ud.current=e;var m=f&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&f?(e.child=Xt(e,n.child,null,s),e.child=Xt(e,null,m,s)):Hn(n,e,m,s),e.memoizedState=r.state,l&&su(e,t,!0),e.child}function rc(n){var e=n.stateNode;e.pendingContext?iu(n,e.pendingContext,e.pendingContext!==e.context):e.context&&iu(n,e.context,!1),_o(n,e.containerInfo)}function lc(n,e,t,r,l){return qt(),vo(l),e.flags|=256,Hn(n,e,t,r),e.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Uo(n){return{baseLanes:n,cachePool:null,transitions:null}}function ic(n,e,t){var r=e.pendingProps,l=wn.current,s=!1,f=(e.flags&128)!==0,m;if((m=f)||(m=n!==null&&n.memoizedState===null?!1:(l&2)!==0),m?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),gn(wn,l&1),n===null)return go(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(f=r.children,n=r.fallback,s?(r=e.mode,s=e.child,f={mode:"hidden",children:f},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=f):s=bl(f,r,0,null),n=Rt(n,r,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Uo(t),e.memoizedState=Vo,n):Ho(e,f));if(l=n.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return cd(n,e,f,r,m,l,t);if(s){s=r.fallback,f=e.mode,l=n.child,m=l.sibling;var g={mode:"hidden",children:r.children};return(f&1)===0&&e.child!==l?(r=e.child,r.childLanes=0,r.pendingProps=g,e.deletions=null):(r=ot(l,g),r.subtreeFlags=l.subtreeFlags&14680064),m!==null?s=ot(m,s):(s=Rt(s,f,t,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,f=n.child.memoizedState,f=f===null?Uo(t):{baseLanes:f.baseLanes|t,cachePool:null,transitions:f.transitions},s.memoizedState=f,s.childLanes=n.childLanes&~t,e.memoizedState=Vo,r}return s=n.child,n=s.sibling,r=ot(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function Ho(n,e){return e=bl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Kl(n,e,t,r){return r!==null&&vo(r),Xt(e,n.child,null,t),n=Ho(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function cd(n,e,t,r,l,s,f){if(t)return e.flags&256?(e.flags&=-257,r=jo(Error(a(422))),Kl(n,e,f,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=r.fallback,l=e.mode,r=bl({mode:"visible",children:r.children},l,0,null),s=Rt(s,l,f,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Xt(e,n.child,null,f),e.child.memoizedState=Uo(f),e.memoizedState=Vo,s);if((e.mode&1)===0)return Kl(n,e,f,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var m=r.dgst;return r=m,s=Error(a(419)),r=jo(s,r,void 0),Kl(n,e,f,r)}if(m=(f&n.childLanes)!==0,Gn||m){if(r=Mn,r!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|f))!==0?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,De(n,l),ke(r,n,l,-1))}return os(),r=jo(Error(a(421))),Kl(n,e,f,r)}return l.data==="$?"?(e.flags|=128,e.child=n.child,e=Ed.bind(null,n),l._reactRetry=e,null):(n=s.treeContext,le=Qe(l.nextSibling),re=e,kn=!0,ge=null,n!==null&&(oe[se++]=Ae,oe[se++]=Me,oe[se++]=vt,Ae=n.id,Me=n.overflow,vt=e),e=Ho(e,r.children),e.flags|=4096,e)}function oc(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),wo(n.return,e,t)}function Wo(n,e,t,r,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=t,s.tailMode=l)}function sc(n,e,t){var r=e.pendingProps,l=r.revealOrder,s=r.tail;if(Hn(n,e,r.children,t),r=wn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&oc(n,t,e);else if(n.tag===19)oc(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(gn(wn,r),(e.mode&1)===0)e.memoizedState=null;else switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&Il(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),Wo(e,!1,l,t,s);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&Il(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}Wo(e,!0,t,null,s);break;case"together":Wo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function je(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),St|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(a(153));if(e.child!==null){for(n=e.child,t=ot(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ot(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function fd(n,e,t){switch(e.tag){case 3:rc(e),qt();break;case 5:wu(e);break;case 1:Qn(e.type)&&El(e);break;case 4:_o(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,l=e.memoizedProps.value;gn(zl,r._currentValue),r._currentValue=l;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(gn(wn,wn.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?ic(n,e,t):(gn(wn,wn.current&1),n=je(n,e,t),n!==null?n.sibling:null);gn(wn,wn.current&1);break;case 19:if(r=(t&e.childLanes)!==0,(n.flags&128)!==0){if(r)return sc(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),gn(wn,wn.current),r)break;return null;case 22:case 23:return e.lanes=0,nc(n,e,t)}return je(n,e,t)}var ac,qo,uc,cc;ac=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},qo=function(){},uc=function(n,e,t,r){var l=n.memoizedProps;if(l!==r){n=e.stateNode,kt(Pe.current);var s=null;switch(t){case"input":l=ki(n,l),r=ki(n,r),s=[];break;case"select":l=K({},l,{value:void 0}),r=K({},r,{value:void 0}),s=[];break;case"textarea":l=Ei(n,l),r=Ei(n,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=kl)}Li(t,r);var f;t=null;for(_ in l)if(!r.hasOwnProperty(_)&&l.hasOwnProperty(_)&&l[_]!=null)if(_==="style"){var m=l[_];for(f in m)m.hasOwnProperty(f)&&(t||(t={}),t[f]="")}else _!=="dangerouslySetInnerHTML"&&_!=="children"&&_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(c.hasOwnProperty(_)?s||(s=[]):(s=s||[]).push(_,null));for(_ in r){var g=r[_];if(m=l!=null?l[_]:void 0,r.hasOwnProperty(_)&&g!==m&&(g!=null||m!=null))if(_==="style")if(m){for(f in m)!m.hasOwnProperty(f)||g&&g.hasOwnProperty(f)||(t||(t={}),t[f]="");for(f in g)g.hasOwnProperty(f)&&m[f]!==g[f]&&(t||(t={}),t[f]=g[f])}else t||(s||(s=[]),s.push(_,t)),t=g;else _==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,m=m?m.__html:void 0,g!=null&&m!==g&&(s=s||[]).push(_,g)):_==="children"?typeof g!="string"&&typeof g!="number"||(s=s||[]).push(_,""+g):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&(c.hasOwnProperty(_)?(g!=null&&_==="onScroll"&&vn("scroll",n),s||m===g||(s=[])):(s=s||[]).push(_,g))}t&&(s=s||[]).push("style",t);var _=s;(e.updateQueue=_)&&(e.flags|=4)}},cc=function(n,e,t,r){t!==r&&(e.flags|=4)};function Or(n,e){if(!kn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Vn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function pd(n,e,t){var r=e.pendingProps;switch(ho(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(e),null;case 1:return Qn(e.type)&&Sl(),Vn(e),null;case 3:return r=e.stateNode,Gt(),yn(Jn),yn(Kn),Po(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(Pl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,ge!==null&&(rs(ge),ge=null))),qo(n,e),Vn(e),null;case 5:Lo(e);var l=kt(Nr.current);if(t=e.type,n!==null&&e.stateNode!=null)uc(n,e,t,r,l),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(a(166));return Vn(e),null}if(n=kt(Pe.current),Pl(e)){r=e.stateNode,t=e.type;var s=e.memoizedProps;switch(r[Re]=e,r[Pr]=s,n=(e.mode&1)!==0,t){case"dialog":vn("cancel",r),vn("close",r);break;case"iframe":case"object":case"embed":vn("load",r);break;case"video":case"audio":for(l=0;l<_r.length;l++)vn(_r[l],r);break;case"source":vn("error",r);break;case"img":case"image":case"link":vn("error",r),vn("load",r);break;case"details":vn("toggle",r);break;case"input":Hs(r,s),vn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},vn("invalid",r);break;case"textarea":Xs(r,s),vn("invalid",r)}Li(t,s),l=null;for(var f in s)if(s.hasOwnProperty(f)){var m=s[f];f==="children"?typeof m=="string"?r.textContent!==m&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,m,n),l=["children",m]):typeof m=="number"&&r.textContent!==""+m&&(s.suppressHydrationWarning!==!0&&xl(r.textContent,m,n),l=["children",""+m]):c.hasOwnProperty(f)&&m!=null&&f==="onScroll"&&vn("scroll",r)}switch(t){case"input":Gr(r),qs(r,s,!0);break;case"textarea":Gr(r),Qs(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kl)}r=l,e.updateQueue=r,r!==null&&(e.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gs(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=f.createElement(t,{is:r.is}):(n=f.createElement(t),t==="select"&&(f=n,r.multiple?f.multiple=!0:r.size&&(f.size=r.size))):n=f.createElementNS(n,t),n[Re]=e,n[Pr]=r,ac(n,e,!1,!1),e.stateNode=n;n:{switch(f=Ri(t,r),t){case"dialog":vn("cancel",n),vn("close",n),l=r;break;case"iframe":case"object":case"embed":vn("load",n),l=r;break;case"video":case"audio":for(l=0;l<_r.length;l++)vn(_r[l],n);l=r;break;case"source":vn("error",n),l=r;break;case"img":case"image":case"link":vn("error",n),vn("load",n),l=r;break;case"details":vn("toggle",n),l=r;break;case"input":Hs(n,r),l=ki(n,r),vn("invalid",n);break;case"option":l=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},l=K({},r,{value:void 0}),vn("invalid",n);break;case"textarea":Xs(n,r),l=Ei(n,r),vn("invalid",n);break;default:l=r}Li(t,l),m=l;for(s in m)if(m.hasOwnProperty(s)){var g=m[s];s==="style"?bs(n,g):s==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Zs(n,g)):s==="children"?typeof g=="string"?(t!=="textarea"||g!=="")&&ir(n,g):typeof g=="number"&&ir(n,""+g):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(c.hasOwnProperty(s)?g!=null&&s==="onScroll"&&vn("scroll",n):g!=null&&b(n,s,g,f))}switch(t){case"input":Gr(n),qs(n,r,!1);break;case"textarea":Gr(n),Qs(n);break;case"option":r.value!=null&&n.setAttribute("value",""+pn(r.value));break;case"select":n.multiple=!!r.multiple,s=r.value,s!=null?Ft(n,!!r.multiple,s,!1):r.defaultValue!=null&&Ft(n,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=kl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vn(e),null;case 6:if(n&&e.stateNode!=null)cc(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(a(166));if(t=kt(Nr.current),kt(Pe.current),Pl(e)){if(r=e.stateNode,t=e.memoizedProps,r[Re]=e,(s=r.nodeValue!==t)&&(n=re,n!==null))switch(n.tag){case 3:xl(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(r.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Re]=e,e.stateNode=r}return Vn(e),null;case 13:if(yn(wn),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kn&&le!==null&&(e.mode&1)!==0&&(e.flags&128)===0)du(),qt(),e.flags|=98560,s=!1;else if(s=Pl(e),r!==null&&r.dehydrated!==null){if(n===null){if(!s)throw Error(a(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(a(317));s[Re]=e}else qt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Vn(e),s=!1}else ge!==null&&(rs(ge),ge=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(wn.current&1)!==0?Fn===0&&(Fn=3):os())),e.updateQueue!==null&&(e.flags|=4),Vn(e),null);case 4:return Gt(),qo(n,e),n===null&&Lr(e.stateNode.containerInfo),Vn(e),null;case 10:return ko(e.type._context),Vn(e),null;case 17:return Qn(e.type)&&Sl(),Vn(e),null;case 19:if(yn(wn),s=e.memoizedState,s===null)return Vn(e),null;if(r=(e.flags&128)!==0,f=s.rendering,f===null)if(r)Or(s,!1);else{if(Fn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(f=Il(n),f!==null){for(e.flags|=128,Or(s,!1),r=f.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)s=t,n=r,s.flags&=14680066,f=s.alternate,f===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=f.childLanes,s.lanes=f.lanes,s.child=f.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=f.memoizedProps,s.memoizedState=f.memoizedState,s.updateQueue=f.updateQueue,s.type=f.type,n=f.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return gn(wn,wn.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ln()>nr&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304)}else{if(!r)if(n=Il(f),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Or(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!kn)return Vn(e),null}else 2*Ln()-s.renderingStartTime>nr&&t!==1073741824&&(e.flags|=128,r=!0,Or(s,!1),e.lanes=4194304);s.isBackwards?(f.sibling=e.child,e.child=f):(t=s.last,t!==null?t.sibling=f:e.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ln(),e.sibling=null,t=wn.current,gn(wn,r?t&1|2:t&1),e):(Vn(e),null);case 22:case 23:return is(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ie&1073741824)!==0&&(Vn(e),e.subtreeFlags&6&&(e.flags|=8192)):Vn(e),null;case 24:return null;case 25:return null}throw Error(a(156,e.tag))}function dd(n,e){switch(ho(e),e.tag){case 1:return Qn(e.type)&&Sl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Gt(),yn(Jn),yn(Kn),Po(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Lo(e),null;case 13:if(yn(wn),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(a(340));qt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return yn(wn),null;case 4:return Gt(),null;case 10:return ko(e.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var Vl=!1,Un=!1,hd=typeof WeakSet=="function"?WeakSet:Set,$=null;function Yt(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){_n(n,e,r)}else t.current=null}function Xo(n,e,t){try{t()}catch(r){_n(n,e,r)}}var fc=!1;function md(n,e){if(lo=al,n=Ua(),Gi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break n}var f=0,m=-1,g=-1,_=0,T=0,F=n,C=null;e:for(;;){for(var O;F!==t||l!==0&&F.nodeType!==3||(m=f+l),F!==s||r!==0&&F.nodeType!==3||(g=f+r),F.nodeType===3&&(f+=F.nodeValue.length),(O=F.firstChild)!==null;)C=F,F=O;for(;;){if(F===n)break e;if(C===t&&++_===l&&(m=f),C===s&&++T===r&&(g=f),(O=F.nextSibling)!==null)break;F=C,C=F.parentNode}F=O}t=m===-1||g===-1?null:{start:m,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(io={focusedElem:n,selectionRange:t},al=!1,$=e;$!==null;)if(e=$,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,$=n;else for(;$!==null;){e=$;try{var B=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var U=B.memoizedProps,Rn=B.memoizedState,w=e.stateNode,y=w.getSnapshotBeforeUpdate(e.elementType===e.type?U:ve(e.type,U),Rn);w.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(I){_n(e,e.return,I)}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}return B=fc,fc=!1,B}function jr(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var s=l.destroy;l.destroy=void 0,s!==void 0&&Xo(e,t,s)}l=l.next}while(l!==r)}}function Ul(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function Jo(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function pc(n){var e=n.alternate;e!==null&&(n.alternate=null,pc(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Re],delete e[Pr],delete e[uo],delete e[Zp],delete e[Yp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dc(n){return n.tag===5||n.tag===3||n.tag===4}function hc(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||dc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qo(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=kl));else if(r!==4&&(n=n.child,n!==null))for(Qo(n,e,t),n=n.sibling;n!==null;)Qo(n,e,t),n=n.sibling}function Go(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(Go(n,e,t),n=n.sibling;n!==null;)Go(n,e,t),n=n.sibling}var jn=null,ye=!1;function et(n,e,t){for(t=t.child;t!==null;)mc(n,e,t),t=t.sibling}function mc(n,e,t){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(tl,t)}catch{}switch(t.tag){case 5:Un||Yt(t,e);case 6:var r=jn,l=ye;jn=null,et(n,e,t),jn=r,ye=l,jn!==null&&(ye?(n=jn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):jn.removeChild(t.stateNode));break;case 18:jn!==null&&(ye?(n=jn,t=t.stateNode,n.nodeType===8?ao(n.parentNode,t):n.nodeType===1&&ao(n,t),gr(n)):ao(jn,t.stateNode));break;case 4:r=jn,l=ye,jn=t.stateNode.containerInfo,ye=!0,et(n,e,t),jn=r,ye=l;break;case 0:case 11:case 14:case 15:if(!Un&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,f=s.destroy;s=s.tag,f!==void 0&&((s&2)!==0||(s&4)!==0)&&Xo(t,e,f),l=l.next}while(l!==r)}et(n,e,t);break;case 1:if(!Un&&(Yt(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(m){_n(t,e,m)}et(n,e,t);break;case 21:et(n,e,t);break;case 22:t.mode&1?(Un=(r=Un)||t.memoizedState!==null,et(n,e,t),Un=r):et(n,e,t);break;default:et(n,e,t)}}function gc(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new hd),e.forEach(function(r){var l=_d.bind(null,n,r);t.has(r)||(t.add(r),r.then(l,l))})}}function xe(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var s=n,f=e,m=f;n:for(;m!==null;){switch(m.tag){case 5:jn=m.stateNode,ye=!1;break n;case 3:jn=m.stateNode.containerInfo,ye=!0;break n;case 4:jn=m.stateNode.containerInfo,ye=!0;break n}m=m.return}if(jn===null)throw Error(a(160));mc(s,f,l),jn=null,ye=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(_){_n(l,e,_)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vc(e,n),e=e.sibling}function vc(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xe(e,n),ze(n),r&4){try{jr(3,n,n.return),Ul(3,n)}catch(U){_n(n,n.return,U)}try{jr(5,n,n.return)}catch(U){_n(n,n.return,U)}}break;case 1:xe(e,n),ze(n),r&512&&t!==null&&Yt(t,t.return);break;case 5:if(xe(e,n),ze(n),r&512&&t!==null&&Yt(t,t.return),n.flags&32){var l=n.stateNode;try{ir(l,"")}catch(U){_n(n,n.return,U)}}if(r&4&&(l=n.stateNode,l!=null)){var s=n.memoizedProps,f=t!==null?t.memoizedProps:s,m=n.type,g=n.updateQueue;if(n.updateQueue=null,g!==null)try{m==="input"&&s.type==="radio"&&s.name!=null&&Ws(l,s),Ri(m,f);var _=Ri(m,s);for(f=0;f<g.length;f+=2){var T=g[f],F=g[f+1];T==="style"?bs(l,F):T==="dangerouslySetInnerHTML"?Zs(l,F):T==="children"?ir(l,F):b(l,T,F,_)}switch(m){case"input":wi(l,s);break;case"textarea":Js(l,s);break;case"select":var C=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var O=s.value;O!=null?Ft(l,!!s.multiple,O,!1):C!==!!s.multiple&&(s.defaultValue!=null?Ft(l,!!s.multiple,s.defaultValue,!0):Ft(l,!!s.multiple,s.multiple?[]:"",!1))}l[Pr]=s}catch(U){_n(n,n.return,U)}}break;case 6:if(xe(e,n),ze(n),r&4){if(n.stateNode===null)throw Error(a(162));l=n.stateNode,s=n.memoizedProps;try{l.nodeValue=s}catch(U){_n(n,n.return,U)}}break;case 3:if(xe(e,n),ze(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{gr(e.containerInfo)}catch(U){_n(n,n.return,U)}break;case 4:xe(e,n),ze(n);break;case 13:xe(e,n),ze(n),l=n.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(bo=Ln())),r&4&&gc(n);break;case 22:if(T=t!==null&&t.memoizedState!==null,n.mode&1?(Un=(_=Un)||T,xe(e,n),Un=_):xe(e,n),ze(n),r&8192){if(_=n.memoizedState!==null,(n.stateNode.isHidden=_)&&!T&&(n.mode&1)!==0)for($=n,T=n.child;T!==null;){for(F=$=T;$!==null;){switch(C=$,O=C.child,C.tag){case 0:case 11:case 14:case 15:jr(4,C,C.return);break;case 1:Yt(C,C.return);var B=C.stateNode;if(typeof B.componentWillUnmount=="function"){r=C,t=C.return;try{e=r,B.props=e.memoizedProps,B.state=e.memoizedState,B.componentWillUnmount()}catch(U){_n(r,t,U)}}break;case 5:Yt(C,C.return);break;case 22:if(C.memoizedState!==null){kc(F);continue}}O!==null?(O.return=C,$=O):kc(F)}T=T.sibling}n:for(T=null,F=n;;){if(F.tag===5){if(T===null){T=F;try{l=F.stateNode,_?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(m=F.stateNode,g=F.memoizedProps.style,f=g!=null&&g.hasOwnProperty("display")?g.display:null,m.style.display=Ys("display",f))}catch(U){_n(n,n.return,U)}}}else if(F.tag===6){if(T===null)try{F.stateNode.nodeValue=_?"":F.memoizedProps}catch(U){_n(n,n.return,U)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===n)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===n)break n;for(;F.sibling===null;){if(F.return===null||F.return===n)break n;T===F&&(T=null),F=F.return}T===F&&(T=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:xe(e,n),ze(n),r&4&&gc(n);break;case 21:break;default:xe(e,n),ze(n)}}function ze(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(dc(t)){var r=t;break n}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ir(l,""),r.flags&=-33);var s=hc(n);Go(n,s,l);break;case 3:case 4:var f=r.stateNode.containerInfo,m=hc(n);Qo(n,m,f);break;default:throw Error(a(161))}}catch(g){_n(n,n.return,g)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function gd(n,e,t){$=n,yc(n)}function yc(n,e,t){for(var r=(n.mode&1)!==0;$!==null;){var l=$,s=l.child;if(l.tag===22&&r){var f=l.memoizedState!==null||Vl;if(!f){var m=l.alternate,g=m!==null&&m.memoizedState!==null||Un;m=Vl;var _=Un;if(Vl=f,(Un=g)&&!_)for($=l;$!==null;)f=$,g=f.child,f.tag===22&&f.memoizedState!==null?wc(l):g!==null?(g.return=f,$=g):wc(l);for(;s!==null;)$=s,yc(s),s=s.sibling;$=l,Vl=m,Un=_}xc(n)}else(l.subtreeFlags&8772)!==0&&s!==null?(s.return=l,$=s):xc(n)}}function xc(n){for(;$!==null;){var e=$;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Un||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Un)if(t===null)r.componentDidMount();else{var l=e.elementType===e.type?t.memoizedProps:ve(e.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ku(e,s,r);break;case 3:var f=e.updateQueue;if(f!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ku(e,f,t)}break;case 5:var m=e.stateNode;if(t===null&&e.flags&4){t=m;var g=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&t.focus();break;case"img":g.src&&(t.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var _=e.alternate;if(_!==null){var T=_.memoizedState;if(T!==null){var F=T.dehydrated;F!==null&&gr(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Un||e.flags&512&&Jo(e)}catch(C){_n(e,e.return,C)}}if(e===n){$=null;break}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}}function kc(n){for(;$!==null;){var e=$;if(e===n){$=null;break}var t=e.sibling;if(t!==null){t.return=e.return,$=t;break}$=e.return}}function wc(n){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ul(4,e)}catch(g){_n(e,t,g)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var l=e.return;try{r.componentDidMount()}catch(g){_n(e,l,g)}}var s=e.return;try{Jo(e)}catch(g){_n(e,s,g)}break;case 5:var f=e.return;try{Jo(e)}catch(g){_n(e,f,g)}}}catch(g){_n(e,e.return,g)}if(e===n){$=null;break}var m=e.sibling;if(m!==null){m.return=e.return,$=m;break}$=e.return}}var vd=Math.ceil,Hl=fn.ReactCurrentDispatcher,Zo=fn.ReactCurrentOwner,ce=fn.ReactCurrentBatchConfig,rn=0,Mn=null,zn=null,$n=0,ie=0,bt=Ge(0),Fn=0,$r=null,St=0,Wl=0,Yo=0,Kr=null,Zn=null,bo=0,nr=1/0,$e=null,ql=!1,ns=null,tt=null,Xl=!1,rt=null,Jl=0,Br=0,es=null,Ql=-1,Gl=0;function Wn(){return(rn&6)!==0?Ln():Ql!==-1?Ql:Ql=Ln()}function lt(n){return(n.mode&1)===0?1:(rn&2)!==0&&$n!==0?$n&-$n:nd.transition!==null?(Gl===0&&(Gl=ha()),Gl):(n=dn,n!==0||(n=window.event,n=n===void 0?16:Ea(n.type)),n)}function ke(n,e,t,r){if(50<Br)throw Br=0,es=null,Error(a(185));fr(n,t,r),((rn&2)===0||n!==Mn)&&(n===Mn&&((rn&2)===0&&(Wl|=t),Fn===4&&it(n,$n)),Yn(n,r),t===1&&rn===0&&(e.mode&1)===0&&(nr=Ln()+500,_l&&Ye()))}function Yn(n,e){var t=n.callbackNode;np(n,e);var r=il(n,n===Mn?$n:0);if(r===0)t!==null&&fa(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&fa(t),e===1)n.tag===0?bp(Ec.bind(null,n)):au(Ec.bind(null,n)),Qp(function(){(rn&6)===0&&Ye()}),t=null;else{switch(ma(r)){case 1:t=Ii;break;case 4:t=pa;break;case 16:t=el;break;case 536870912:t=da;break;default:t=el}t=Fc(t,Sc.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Sc(n,e){if(Ql=-1,Gl=0,(rn&6)!==0)throw Error(a(327));var t=n.callbackNode;if(er()&&n.callbackNode!==t)return null;var r=il(n,n===Mn?$n:0);if(r===0)return null;if((r&30)!==0||(r&n.expiredLanes)!==0||e)e=Zl(n,r);else{e=r;var l=rn;rn|=2;var s=Lc();(Mn!==n||$n!==e)&&($e=null,nr=Ln()+500,_t(n,e));do try{kd();break}catch(m){_c(n,m)}while(!0);xo(),Hl.current=s,rn=l,zn!==null?e=0:(Mn=null,$n=0,e=Fn)}if(e!==0){if(e===2&&(l=Ai(n),l!==0&&(r=l,e=ts(n,l))),e===1)throw t=$r,_t(n,0),it(n,r),Yn(n,Ln()),t;if(e===6)it(n,r);else{if(l=n.current.alternate,(r&30)===0&&!yd(l)&&(e=Zl(n,r),e===2&&(s=Ai(n),s!==0&&(r=s,e=ts(n,s))),e===1))throw t=$r,_t(n,0),it(n,r),Yn(n,Ln()),t;switch(n.finishedWork=l,n.finishedLanes=r,e){case 0:case 1:throw Error(a(345));case 2:Lt(n,Zn,$e);break;case 3:if(it(n,r),(r&130023424)===r&&(e=bo+500-Ln(),10<e)){if(il(n,0)!==0)break;if(l=n.suspendedLanes,(l&r)!==r){Wn(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=so(Lt.bind(null,n,Zn,$e),e);break}Lt(n,Zn,$e);break;case 4:if(it(n,r),(r&4194240)===r)break;for(e=n.eventTimes,l=-1;0<r;){var f=31-he(r);s=1<<f,f=e[f],f>l&&(l=f),r&=~s}if(r=l,r=Ln()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vd(r/1960))-r,10<r){n.timeoutHandle=so(Lt.bind(null,n,Zn,$e),r);break}Lt(n,Zn,$e);break;case 5:Lt(n,Zn,$e);break;default:throw Error(a(329))}}}return Yn(n,Ln()),n.callbackNode===t?Sc.bind(null,n):null}function ts(n,e){var t=Kr;return n.current.memoizedState.isDehydrated&&(_t(n,e).flags|=256),n=Zl(n,e),n!==2&&(e=Zn,Zn=t,e!==null&&rs(e)),n}function rs(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function yd(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],s=l.getSnapshot;l=l.value;try{if(!me(s(),l))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function it(n,e){for(e&=~Yo,e&=~Wl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-he(e),r=1<<t;n[t]=-1,e&=~r}}function Ec(n){if((rn&6)!==0)throw Error(a(327));er();var e=il(n,0);if((e&1)===0)return Yn(n,Ln()),null;var t=Zl(n,e);if(n.tag!==0&&t===2){var r=Ai(n);r!==0&&(e=r,t=ts(n,r))}if(t===1)throw t=$r,_t(n,0),it(n,e),Yn(n,Ln()),t;if(t===6)throw Error(a(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Lt(n,Zn,$e),Yn(n,Ln()),null}function ls(n,e){var t=rn;rn|=1;try{return n(e)}finally{rn=t,rn===0&&(nr=Ln()+500,_l&&Ye())}}function Et(n){rt!==null&&rt.tag===0&&(rn&6)===0&&er();var e=rn;rn|=1;var t=ce.transition,r=dn;try{if(ce.transition=null,dn=1,n)return n()}finally{dn=r,ce.transition=t,rn=e,(rn&6)===0&&Ye()}}function is(){ie=bt.current,yn(bt)}function _t(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Jp(t)),zn!==null)for(t=zn.return;t!==null;){var r=t;switch(ho(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:Gt(),yn(Jn),yn(Kn),Po();break;case 5:Lo(r);break;case 4:Gt();break;case 13:yn(wn);break;case 19:yn(wn);break;case 10:ko(r.type._context);break;case 22:case 23:is()}t=t.return}if(Mn=n,zn=n=ot(n.current,null),$n=ie=e,Fn=0,$r=null,Yo=Wl=St=0,Zn=Kr=null,xt!==null){for(e=0;e<xt.length;e++)if(t=xt[e],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,s=t.pending;if(s!==null){var f=s.next;s.next=l,r.next=f}t.pending=r}xt=null}return n}function _c(n,e){do{var t=zn;try{if(xo(),Al.current=jl,Ml){for(var r=Sn.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ml=!1}if(wt=0,An=Tn=Sn=null,Ir=!1,Ar=0,Zo.current=null,t===null||t.return===null){Fn=1,$r=e,zn=null;break}n:{var s=n,f=t.return,m=t,g=e;if(e=$n,m.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var _=g,T=m,F=T.tag;if((T.mode&1)===0&&(F===0||F===11||F===15)){var C=T.alternate;C?(T.updateQueue=C.updateQueue,T.memoizedState=C.memoizedState,T.lanes=C.lanes):(T.updateQueue=null,T.memoizedState=null)}var O=Qu(f);if(O!==null){O.flags&=-257,Gu(O,f,m,s,e),O.mode&1&&Ju(s,_,e),e=O,g=_;var B=e.updateQueue;if(B===null){var U=new Set;U.add(g),e.updateQueue=U}else B.add(g);break n}else{if((e&1)===0){Ju(s,_,e),os();break n}g=Error(a(426))}}else if(kn&&m.mode&1){var Rn=Qu(f);if(Rn!==null){(Rn.flags&65536)===0&&(Rn.flags|=256),Gu(Rn,f,m,s,e),vo(Zt(g,m));break n}}s=g=Zt(g,m),Fn!==4&&(Fn=2),Kr===null?Kr=[s]:Kr.push(s),s=f;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=qu(s,g,e);xu(s,w);break n;case 1:m=g;var y=s.type,S=s.stateNode;if((s.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(tt===null||!tt.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var I=Xu(s,m,e);xu(s,I);break n}}s=s.return}while(s!==null)}Pc(t)}catch(H){e=H,zn===t&&t!==null&&(zn=t=t.return);continue}break}while(!0)}function Lc(){var n=Hl.current;return Hl.current=jl,n===null?jl:n}function os(){(Fn===0||Fn===3||Fn===2)&&(Fn=4),Mn===null||(St&268435455)===0&&(Wl&268435455)===0||it(Mn,$n)}function Zl(n,e){var t=rn;rn|=2;var r=Lc();(Mn!==n||$n!==e)&&($e=null,_t(n,e));do try{xd();break}catch(l){_c(n,l)}while(!0);if(xo(),rn=t,Hl.current=r,zn!==null)throw Error(a(261));return Mn=null,$n=0,Fn}function xd(){for(;zn!==null;)Rc(zn)}function kd(){for(;zn!==null&&!Wf();)Rc(zn)}function Rc(n){var e=Tc(n.alternate,n,ie);n.memoizedProps=n.pendingProps,e===null?Pc(n):zn=e,Zo.current=null}function Pc(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=pd(t,e,ie),t!==null){zn=t;return}}else{if(t=dd(t,e),t!==null){t.flags&=32767,zn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Fn=6,zn=null;return}}if(e=e.sibling,e!==null){zn=e;return}zn=e=n}while(e!==null);Fn===0&&(Fn=5)}function Lt(n,e,t){var r=dn,l=ce.transition;try{ce.transition=null,dn=1,wd(n,e,t,r)}finally{ce.transition=l,dn=r}return null}function wd(n,e,t,r){do er();while(rt!==null);if((rn&6)!==0)throw Error(a(327));t=n.finishedWork;var l=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(a(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ep(n,s),n===Mn&&(zn=Mn=null,$n=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Xl||(Xl=!0,Fc(el,function(){return er(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=ce.transition,ce.transition=null;var f=dn;dn=1;var m=rn;rn|=4,Zo.current=null,md(n,t),vc(t,n),Bp(io),al=!!lo,io=lo=null,n.current=t,gd(t),qf(),rn=m,dn=f,ce.transition=s}else n.current=t;if(Xl&&(Xl=!1,rt=n,Jl=l),s=n.pendingLanes,s===0&&(tt=null),Qf(t.stateNode),Yn(n,Ln()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)l=e[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(ql)throw ql=!1,n=ns,ns=null,n;return(Jl&1)!==0&&n.tag!==0&&er(),s=n.pendingLanes,(s&1)!==0?n===es?Br++:(Br=0,es=n):Br=0,Ye(),null}function er(){if(rt!==null){var n=ma(Jl),e=ce.transition,t=dn;try{if(ce.transition=null,dn=16>n?16:n,rt===null)var r=!1;else{if(n=rt,rt=null,Jl=0,(rn&6)!==0)throw Error(a(331));var l=rn;for(rn|=4,$=n.current;$!==null;){var s=$,f=s.child;if(($.flags&16)!==0){var m=s.deletions;if(m!==null){for(var g=0;g<m.length;g++){var _=m[g];for($=_;$!==null;){var T=$;switch(T.tag){case 0:case 11:case 15:jr(8,T,s)}var F=T.child;if(F!==null)F.return=T,$=F;else for(;$!==null;){T=$;var C=T.sibling,O=T.return;if(pc(T),T===_){$=null;break}if(C!==null){C.return=O,$=C;break}$=O}}}var B=s.alternate;if(B!==null){var U=B.child;if(U!==null){B.child=null;do{var Rn=U.sibling;U.sibling=null,U=Rn}while(U!==null)}}$=s}}if((s.subtreeFlags&2064)!==0&&f!==null)f.return=s,$=f;else n:for(;$!==null;){if(s=$,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:jr(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break n}$=s.return}}var y=n.current;for($=y;$!==null;){f=$;var S=f.child;if((f.subtreeFlags&2064)!==0&&S!==null)S.return=f,$=S;else n:for(f=y;$!==null;){if(m=$,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:Ul(9,m)}}catch(H){_n(m,m.return,H)}if(m===f){$=null;break n}var I=m.sibling;if(I!==null){I.return=m.return,$=I;break n}$=m.return}}if(rn=l,Ye(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(tl,n)}catch{}r=!0}return r}finally{dn=t,ce.transition=e}}return!1}function Cc(n,e,t){e=Zt(t,e),e=qu(n,e,1),n=nt(n,e,1),e=Wn(),n!==null&&(fr(n,1,e),Yn(n,e))}function _n(n,e,t){if(n.tag===3)Cc(n,n,t);else for(;e!==null;){if(e.tag===3){Cc(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tt===null||!tt.has(r))){n=Zt(t,n),n=Xu(e,n,1),e=nt(e,n,1),n=Wn(),e!==null&&(fr(e,1,n),Yn(e,n));break}}e=e.return}}function Sd(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,Mn===n&&($n&t)===t&&(Fn===4||Fn===3&&($n&130023424)===$n&&500>Ln()-bo?_t(n,0):Yo|=t),Yn(n,e)}function zc(n,e){e===0&&((n.mode&1)===0?e=1:(e=ll,ll<<=1,(ll&130023424)===0&&(ll=4194304)));var t=Wn();n=De(n,e),n!==null&&(fr(n,e,t),Yn(n,t))}function Ed(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zc(n,t)}function _d(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(e),zc(n,t)}var Tc;Tc=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Gn=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Gn=!1,fd(n,e,t);Gn=(n.flags&131072)!==0}else Gn=!1,kn&&(e.flags&1048576)!==0&&uu(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bl(n,e),n=e.pendingProps;var l=Ut(e,Kn.current);Qt(e,t),l=To(null,e,r,n,l,t);var s=Fo();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qn(r)?(s=!0,El(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Eo(e),l.updater=$l,e.stateNode=l,l._reactInternals=e,Oo(e,r,n,t),e=Bo(null,e,r,!0,s,t)):(e.tag=0,kn&&s&&po(e),Hn(null,e,l,t),e=e.child),e;case 16:r=e.elementType;n:{switch(Bl(n,e),n=e.pendingProps,l=r._init,r=l(r._payload),e.type=r,l=e.tag=Rd(r),n=ve(r,n),l){case 0:e=Ko(null,e,r,n,t);break n;case 1:e=tc(null,e,r,n,t);break n;case 11:e=Zu(null,e,r,n,t);break n;case 14:e=Yu(null,e,r,ve(r.type,n),t);break n}throw Error(a(306,r,""))}return e;case 0:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:ve(r,l),Ko(n,e,r,l,t);case 1:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:ve(r,l),tc(n,e,r,l,t);case 3:n:{if(rc(e),n===null)throw Error(a(387));r=e.pendingProps,s=e.memoizedState,l=s.element,yu(n,e),Nl(e,r,null,t);var f=e.memoizedState;if(r=f.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=Zt(Error(a(423)),e),e=lc(n,e,r,t,l);break n}else if(r!==l){l=Zt(Error(a(424)),e),e=lc(n,e,r,t,l);break n}else for(le=Qe(e.stateNode.containerInfo.firstChild),re=e,kn=!0,ge=null,t=gu(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qt(),r===l){e=je(n,e,t);break n}Hn(n,e,r,t)}e=e.child}return e;case 5:return wu(e),n===null&&go(e),r=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,f=l.children,oo(r,l)?f=null:s!==null&&oo(r,s)&&(e.flags|=32),ec(n,e),Hn(n,e,f,t),e.child;case 6:return n===null&&go(e),null;case 13:return ic(n,e,t);case 4:return _o(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Xt(e,null,r,t):Hn(n,e,r,t),e.child;case 11:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:ve(r,l),Zu(n,e,r,l,t);case 7:return Hn(n,e,e.pendingProps,t),e.child;case 8:return Hn(n,e,e.pendingProps.children,t),e.child;case 12:return Hn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,l=e.pendingProps,s=e.memoizedProps,f=l.value,gn(zl,r._currentValue),r._currentValue=f,s!==null)if(me(s.value,f)){if(s.children===l.children&&!Jn.current){e=je(n,e,t);break n}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var m=s.dependencies;if(m!==null){f=s.child;for(var g=m.firstContext;g!==null;){if(g.context===r){if(s.tag===1){g=Oe(-1,t&-t),g.tag=2;var _=s.updateQueue;if(_!==null){_=_.shared;var T=_.pending;T===null?g.next=g:(g.next=T.next,T.next=g),_.pending=g}}s.lanes|=t,g=s.alternate,g!==null&&(g.lanes|=t),wo(s.return,t,e),m.lanes|=t;break}g=g.next}}else if(s.tag===10)f=s.type===e.type?null:s.child;else if(s.tag===18){if(f=s.return,f===null)throw Error(a(341));f.lanes|=t,m=f.alternate,m!==null&&(m.lanes|=t),wo(f,t,e),f=s.sibling}else f=s.child;if(f!==null)f.return=s;else for(f=s;f!==null;){if(f===e){f=null;break}if(s=f.sibling,s!==null){s.return=f.return,f=s;break}f=f.return}s=f}Hn(n,e,l.children,t),e=e.child}return e;case 9:return l=e.type,r=e.pendingProps.children,Qt(e,t),l=ae(l),r=r(l),e.flags|=1,Hn(n,e,r,t),e.child;case 14:return r=e.type,l=ve(r,e.pendingProps),l=ve(r.type,l),Yu(n,e,r,l,t);case 15:return bu(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,l=e.pendingProps,l=e.elementType===r?l:ve(r,l),Bl(n,e),e.tag=1,Qn(r)?(n=!0,El(e)):n=!1,Qt(e,t),Hu(e,r,l),Oo(e,r,l,t),Bo(null,e,r,!0,n,t);case 19:return sc(n,e,t);case 22:return nc(n,e,t)}throw Error(a(156,e.tag))};function Fc(n,e){return ca(n,e)}function Ld(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(n,e,t,r){return new Ld(n,e,t,r)}function ss(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Rd(n){if(typeof n=="function")return ss(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Ee)return 11;if(n===_e)return 14}return 2}function ot(n,e){var t=n.alternate;return t===null?(t=fe(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yl(n,e,t,r,l,s){var f=2;if(r=n,typeof n=="function")ss(n)&&(f=1);else if(typeof n=="string")f=5;else n:switch(n){case Nn:return Rt(t.children,l,s,e);case In:f=8,l|=8;break;case Ve:return n=fe(12,t,e,l|2),n.elementType=Ve,n.lanes=s,n;case ne:return n=fe(13,t,e,l),n.elementType=ne,n.lanes=s,n;case de:return n=fe(19,t,e,l),n.elementType=de,n.lanes=s,n;case En:return bl(t,l,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fe:f=10;break n;case dt:f=9;break n;case Ee:f=11;break n;case _e:f=14;break n;case Xn:f=16,r=null;break n}throw Error(a(130,n==null?n:typeof n,""))}return e=fe(f,t,e,l),e.elementType=n,e.type=r,e.lanes=s,e}function Rt(n,e,t,r){return n=fe(7,n,r,e),n.lanes=t,n}function bl(n,e,t,r){return n=fe(22,n,r,e),n.elementType=En,n.lanes=t,n.stateNode={isHidden:!1},n}function as(n,e,t){return n=fe(6,n,null,e),n.lanes=t,n}function us(n,e,t){return e=fe(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Pd(n,e,t,r,l){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function cs(n,e,t,r,l,s,f,m,g){return n=new Pd(n,e,t,m,g),e===1?(e=1,s===!0&&(e|=8)):e=0,s=fe(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(s),n}function Cd(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function Nc(n){if(!n)return Ze;n=n._reactInternals;n:{if(ht(n)!==n||n.tag!==1)throw Error(a(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(Qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(a(171))}if(n.tag===1){var t=n.type;if(Qn(t))return ou(n,t,e)}return e}function Ic(n,e,t,r,l,s,f,m,g){return n=cs(t,r,!0,n,l,s,f,m,g),n.context=Nc(null),t=n.current,r=Wn(),l=lt(t),s=Oe(r,l),s.callback=e??null,nt(t,s,l),n.current.lanes=l,fr(n,l,r),Yn(n,r),n}function ni(n,e,t,r){var l=e.current,s=Wn(),f=lt(l);return t=Nc(t),e.context===null?e.context=t:e.pendingContext=t,e=Oe(s,f),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=nt(l,e,f),n!==null&&(ke(n,l,f,s),Fl(n,l,f)),f}function ei(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ac(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function fs(n,e){Ac(n,e),(n=n.alternate)&&Ac(n,e)}function zd(){return null}var Mc=typeof reportError=="function"?reportError:function(n){console.error(n)};function ps(n){this._internalRoot=n}ti.prototype.render=ps.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(a(409));ni(n,e,null,null)},ti.prototype.unmount=ps.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Et(function(){ni(null,n,null,null)}),e[Ne]=null}};function ti(n){this._internalRoot=n}ti.prototype.unstable_scheduleHydration=function(n){if(n){var e=ya();n={blockedOn:null,target:n,priority:e};for(var t=0;t<qe.length&&e!==0&&e<qe[t].priority;t++);qe.splice(t,0,n),t===0&&wa(n)}};function ds(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ri(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Td(n,e,t,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var _=ei(f);s.call(_)}}var f=Ic(e,r,n,0,null,!1,!1,"",Dc);return n._reactRootContainer=f,n[Ne]=f.current,Lr(n.nodeType===8?n.parentNode:n),Et(),f}for(;l=n.lastChild;)n.removeChild(l);if(typeof r=="function"){var m=r;r=function(){var _=ei(g);m.call(_)}}var g=cs(n,0,!1,null,null,!1,!1,"",Dc);return n._reactRootContainer=g,n[Ne]=g.current,Lr(n.nodeType===8?n.parentNode:n),Et(function(){ni(e,g,t,r)}),g}function li(n,e,t,r,l){var s=t._reactRootContainer;if(s){var f=s;if(typeof l=="function"){var m=l;l=function(){var g=ei(f);m.call(g)}}ni(e,f,n,l)}else f=Td(t,e,n,l,r);return ei(f)}ga=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=cr(e.pendingLanes);t!==0&&(Di(e,t|1),Yn(e,Ln()),(rn&6)===0&&(nr=Ln()+500,Ye()))}break;case 13:Et(function(){var r=De(n,1);if(r!==null){var l=Wn();ke(r,n,1,l)}}),fs(n,1)}},Oi=function(n){if(n.tag===13){var e=De(n,134217728);if(e!==null){var t=Wn();ke(e,n,134217728,t)}fs(n,134217728)}},va=function(n){if(n.tag===13){var e=lt(n),t=De(n,e);if(t!==null){var r=Wn();ke(t,n,e,r)}fs(n,e)}},ya=function(){return dn},xa=function(n,e){var t=dn;try{return dn=n,e()}finally{dn=t}},zi=function(n,e,t){switch(e){case"input":if(wi(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var l=wl(r);if(!l)throw Error(a(90));Us(r),wi(r,l)}}}break;case"textarea":Js(n,t);break;case"select":e=t.value,e!=null&&Ft(n,!!t.multiple,e,!1)}},ra=ls,la=Et;var Fd={usingClientEntryPoint:!1,Events:[Cr,Bt,wl,ea,ta,ls]},Vr={findFiberByHostInstance:mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nd={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=aa(n),n===null?null:n.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||zd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{tl=ii.inject(Nd),Le=ii}catch{}}return bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fd,bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(e))throw Error(a(200));return Cd(n,e,null,t)},bn.createRoot=function(n,e){if(!ds(n))throw Error(a(299));var t=!1,r="",l=Mc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=cs(n,1,!1,null,null,t,!1,r,l),n[Ne]=e.current,Lr(n.nodeType===8?n.parentNode:n),new ps(e)},bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=aa(e),n=n===null?null:n.stateNode,n},bn.flushSync=function(n){return Et(n)},bn.hydrate=function(n,e,t){if(!ri(e))throw Error(a(200));return li(null,n,e,!0,t)},bn.hydrateRoot=function(n,e,t){if(!ds(n))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,l=!1,s="",f=Mc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),e=Ic(e,null,n,1,t??null,l,!1,s,f),n[Ne]=e.current,Lr(n),r)for(n=0;n<r.length;n++)t=r[n],l=t._getVersion,l=l(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,l]:e.mutableSourceEagerHydrationData.push(t,l);return new ti(e)},bn.render=function(n,e,t){if(!ri(e))throw Error(a(200));return li(null,n,e,!1,t)},bn.unmountComponentAtNode=function(n){if(!ri(n))throw Error(a(40));return n._reactRootContainer?(Et(function(){li(null,null,n,!1,function(){n._reactRootContainer=null,n[Ne]=null})}),!0):!1},bn.unstable_batchedUpdates=ls,bn.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!ri(t))throw Error(a(200));if(n==null||n._reactInternals===void 0)throw Error(a(38));return li(n,e,t,!1,r)},bn.version="18.3.1-next-f1338f8080-20240426",bn}var Hc;function uf(){if(Hc)return gs.exports;Hc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(i){console.error(i)}}return o(),gs.exports=Ud(),gs.exports}var Wc;function Hd(){if(Wc)return oi;Wc=1;var o=uf();return oi.createRoot=o.createRoot,oi.hydrateRoot=o.hydrateRoot,oi}var Wd=Hd(),M=Cs();const qd=Od(M),Xd=Dd({__proto__:null,default:qd},[M]);uf();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(o[u]=a[u])}return o},Xr.apply(this,arguments)}var at;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(at||(at={}));const qc="popstate";function Jd(o){o===void 0&&(o={});function i(c,p){let{pathname:h="/",search:d="",hash:x=""}=zt(c.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),ws("",{pathname:h,search:d,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function a(c,p){let h=c.document.querySelector("base"),d="";if(h&&h.getAttribute("href")){let x=c.location.href,v=x.indexOf("#");d=v===-1?x:x.slice(0,v)}return d+"#"+(typeof p=="string"?p:ci(p))}function u(c,p){mi(c.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return Gd(i,a,u,o)}function Pn(o,i){if(o===!1||o===null||typeof o>"u")throw new Error(i)}function mi(o,i){if(!o){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Qd(){return Math.random().toString(36).substr(2,8)}function Xc(o,i){return{usr:o.state,key:o.key,idx:i}}function ws(o,i,a,u){return a===void 0&&(a=null),Xr({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof i=="string"?zt(i):i,{state:a,key:i&&i.key||u||Qd()})}function ci(o){let{pathname:i="/",search:a="",hash:u=""}=o;return a&&a!=="?"&&(i+=a.charAt(0)==="?"?a:"?"+a),u&&u!=="#"&&(i+=u.charAt(0)==="#"?u:"#"+u),i}function zt(o){let i={};if(o){let a=o.indexOf("#");a>=0&&(i.hash=o.substr(a),o=o.substr(0,a));let u=o.indexOf("?");u>=0&&(i.search=o.substr(u),o=o.substr(0,u)),o&&(i.pathname=o)}return i}function Gd(o,i,a,u){u===void 0&&(u={});let{window:c=document.defaultView,v5Compat:p=!1}=u,h=c.history,d=at.Pop,x=null,v=E();v==null&&(v=0,h.replaceState(Xr({},h.state,{idx:v}),""));function E(){return(h.state||{idx:null}).idx}function L(){d=at.Pop;let N=E(),Y=N==null?null:N-v;v=N,x&&x({action:d,location:A.location,delta:Y})}function R(N,Y){d=at.Push;let en=ws(A.location,N,Y);a&&a(en,N),v=E()+1;let b=Xc(en,v),fn=A.createHref(en);try{h.pushState(b,"",fn)}catch(Cn){if(Cn instanceof DOMException&&Cn.name==="DataCloneError")throw Cn;c.location.assign(fn)}p&&x&&x({action:d,location:A.location,delta:1})}function P(N,Y){d=at.Replace;let en=ws(A.location,N,Y);a&&a(en,N),v=E();let b=Xc(en,v),fn=A.createHref(en);h.replaceState(b,"",fn),p&&x&&x({action:d,location:A.location,delta:0})}function j(N){let Y=c.location.origin!=="null"?c.location.origin:c.location.href,en=typeof N=="string"?N:ci(N);return en=en.replace(/ $/,"%20"),Pn(Y,"No window.location.(origin|href) available to create URL for href: "+en),new URL(en,Y)}let A={get action(){return d},get location(){return o(c,h)},listen(N){if(x)throw new Error("A history only accepts one active listener");return c.addEventListener(qc,L),x=N,()=>{c.removeEventListener(qc,L),x=null}},createHref(N){return i(c,N)},createURL:j,encodeLocation(N){let Y=j(N);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:R,replace:P,go(N){return h.go(N)}};return A}var Jc;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Jc||(Jc={}));function Zd(o,i,a){return a===void 0&&(a="/"),Yd(o,i,a)}function Yd(o,i,a,u){let c=typeof i=="string"?zt(i):i,p=zs(c.pathname||"/",a);if(p==null)return null;let h=cf(o);bd(h);let d=null;for(let x=0;d==null&&x<h.length;++x){let v=fh(p);d=ah(h[x],v)}return d}function cf(o,i,a,u){i===void 0&&(i=[]),a===void 0&&(a=[]),u===void 0&&(u="");let c=(p,h,d)=>{let x={relativePath:d===void 0?p.path||"":d,caseSensitive:p.caseSensitive===!0,childrenIndex:h,route:p};x.relativePath.startsWith("/")&&(Pn(x.relativePath.startsWith(u),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(u.length));let v=ct([u,x.relativePath]),E=a.concat(x);p.children&&p.children.length>0&&(Pn(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),cf(p.children,i,E,v)),!(p.path==null&&!p.index)&&i.push({path:v,score:oh(v,p.index),routesMeta:E})};return o.forEach((p,h)=>{var d;if(p.path===""||!((d=p.path)!=null&&d.includes("?")))c(p,h);else for(let x of ff(p.path))c(p,h,x)}),i}function ff(o){let i=o.split("/");if(i.length===0)return[];let[a,...u]=i,c=a.endsWith("?"),p=a.replace(/\?$/,"");if(u.length===0)return c?[p,""]:[p];let h=ff(u.join("/")),d=[];return d.push(...h.map(x=>x===""?p:[p,x].join("/"))),c&&d.push(...h),d.map(x=>o.startsWith("/")&&x===""?"/":x)}function bd(o){o.sort((i,a)=>i.score!==a.score?a.score-i.score:sh(i.routesMeta.map(u=>u.childrenIndex),a.routesMeta.map(u=>u.childrenIndex)))}const nh=/^:[\w-]+$/,eh=3,th=2,rh=1,lh=10,ih=-2,Qc=o=>o==="*";function oh(o,i){let a=o.split("/"),u=a.length;return a.some(Qc)&&(u+=ih),i&&(u+=th),a.filter(c=>!Qc(c)).reduce((c,p)=>c+(nh.test(p)?eh:p===""?rh:lh),u)}function sh(o,i){return o.length===i.length&&o.slice(0,-1).every((u,c)=>u===i[c])?o[o.length-1]-i[i.length-1]:0}function ah(o,i,a){let{routesMeta:u}=o,c={},p="/",h=[];for(let d=0;d<u.length;++d){let x=u[d],v=d===u.length-1,E=p==="/"?i:i.slice(p.length)||"/",L=uh({path:x.relativePath,caseSensitive:x.caseSensitive,end:v},E),R=x.route;if(!L)return null;Object.assign(c,L.params),h.push({params:c,pathname:ct([p,L.pathname]),pathnameBase:gh(ct([p,L.pathnameBase])),route:R}),L.pathnameBase!=="/"&&(p=ct([p,L.pathnameBase]))}return h}function uh(o,i){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[a,u]=ch(o.path,o.caseSensitive,o.end),c=i.match(a);if(!c)return null;let p=c[0],h=p.replace(/(.)\/+$/,"$1"),d=c.slice(1);return{params:u.reduce((v,E,L)=>{let{paramName:R,isOptional:P}=E;if(R==="*"){let A=d[L]||"";h=p.slice(0,p.length-A.length).replace(/(.)\/+$/,"$1")}const j=d[L];return P&&!j?v[R]=void 0:v[R]=(j||"").replace(/%2F/g,"/"),v},{}),pathname:p,pathnameBase:h,pattern:o}}function ch(o,i,a){i===void 0&&(i=!1),a===void 0&&(a=!0),mi(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let u=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,x)=>(u.push({paramName:d,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),u]}function fh(o){try{return o.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return mi(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),o}}function zs(o,i){if(i==="/")return o;if(!o.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,u=o.charAt(a);return u&&u!=="/"?null:o.slice(a)||"/"}const ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dh=o=>ph.test(o);function hh(o,i){i===void 0&&(i="/");let{pathname:a,search:u="",hash:c=""}=typeof o=="string"?zt(o):o,p;if(a)if(dh(a))p=a;else{if(a.includes("//")){let h=a;a=a.replace(/\/\/+/g,"/"),mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+a))}a.startsWith("/")?p=Gc(a.substring(1),"/"):p=Gc(a,i)}else p=i;return{pathname:p,search:vh(u),hash:yh(c)}}function Gc(o,i){let a=i.replace(/\/+$/,"").split("/");return o.split("/").forEach(c=>{c===".."?a.length>1&&a.pop():c!=="."&&a.push(c)}),a.length>1?a.join("/"):"/"}function xs(o,i,a,u){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mh(o){return o.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function Ts(o,i){let a=mh(o);return i?a.map((u,c)=>c===a.length-1?u.pathname:u.pathnameBase):a.map(u=>u.pathnameBase)}function Fs(o,i,a,u){u===void 0&&(u=!1);let c;typeof o=="string"?c=zt(o):(c=Xr({},o),Pn(!c.pathname||!c.pathname.includes("?"),xs("?","pathname","search",c)),Pn(!c.pathname||!c.pathname.includes("#"),xs("#","pathname","hash",c)),Pn(!c.search||!c.search.includes("#"),xs("#","search","hash",c)));let p=o===""||c.pathname==="",h=p?"/":c.pathname,d;if(h==null)d=a;else{let L=i.length-1;if(!u&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),L-=1;c.pathname=R.join("/")}d=L>=0?i[L]:"/"}let x=hh(c,d),v=h&&h!=="/"&&h.endsWith("/"),E=(p||h===".")&&a.endsWith("/");return!x.pathname.endsWith("/")&&(v||E)&&(x.pathname+="/"),x}const ct=o=>o.join("/").replace(/\/\/+/g,"/"),gh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),vh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,yh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function xh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const pf=["post","put","patch","delete"];new Set(pf);const kh=["get",...pf];new Set(kh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jr(){return Jr=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(o[u]=a[u])}return o},Jr.apply(this,arguments)}const Ns=M.createContext(null),wh=M.createContext(null),pt=M.createContext(null),gi=M.createContext(null),Be=M.createContext({outlet:null,matches:[],isDataRoute:!1}),df=M.createContext(null);function Sh(o,i){let{relative:a}=i===void 0?{}:i;tr()||Pn(!1);let{basename:u,navigator:c}=M.useContext(pt),{hash:p,pathname:h,search:d}=gf(o,{relative:a}),x=h;return u!=="/"&&(x=h==="/"?u:ct([u,h])),c.createHref({pathname:x,search:d,hash:p})}function tr(){return M.useContext(gi)!=null}function rr(){return tr()||Pn(!1),M.useContext(gi).location}function hf(o){M.useContext(pt).static||M.useLayoutEffect(o)}function mf(){let{isDataRoute:o}=M.useContext(Be);return o?Dh():Eh()}function Eh(){tr()||Pn(!1);let o=M.useContext(Ns),{basename:i,future:a,navigator:u}=M.useContext(pt),{matches:c}=M.useContext(Be),{pathname:p}=rr(),h=JSON.stringify(Ts(c,a.v7_relativeSplatPath)),d=M.useRef(!1);return hf(()=>{d.current=!0}),M.useCallback(function(v,E){if(E===void 0&&(E={}),!d.current)return;if(typeof v=="number"){u.go(v);return}let L=Fs(v,JSON.parse(h),p,E.relative==="path");o==null&&i!=="/"&&(L.pathname=L.pathname==="/"?i:ct([i,L.pathname])),(E.replace?u.replace:u.push)(L,E.state,E)},[i,u,h,p,o])}function _h(){let{matches:o}=M.useContext(Be),i=o[o.length-1];return i?i.params:{}}function gf(o,i){let{relative:a}=i===void 0?{}:i,{future:u}=M.useContext(pt),{matches:c}=M.useContext(Be),{pathname:p}=rr(),h=JSON.stringify(Ts(c,u.v7_relativeSplatPath));return M.useMemo(()=>Fs(o,JSON.parse(h),p,a==="path"),[o,h,p,a])}function Lh(o,i){return Rh(o,i)}function Rh(o,i,a,u){tr()||Pn(!1);let{navigator:c}=M.useContext(pt),{matches:p}=M.useContext(Be),h=p[p.length-1],d=h?h.params:{};h&&h.pathname;let x=h?h.pathnameBase:"/";h&&h.route;let v=rr(),E;if(i){var L;let N=typeof i=="string"?zt(i):i;x==="/"||(L=N.pathname)!=null&&L.startsWith(x)||Pn(!1),E=N}else E=v;let R=E.pathname||"/",P=R;if(x!=="/"){let N=x.replace(/^\//,"").split("/");P="/"+R.replace(/^\//,"").split("/").slice(N.length).join("/")}let j=Zd(o,{pathname:P}),A=Fh(j&&j.map(N=>Object.assign({},N,{params:Object.assign({},d,N.params),pathname:ct([x,c.encodeLocation?c.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?x:ct([x,c.encodeLocation?c.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),p,a,u);return i&&A?M.createElement(gi.Provider,{value:{location:Jr({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:at.Pop}},A):A}function Ph(){let o=Mh(),i=xh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),a=o instanceof Error?o.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},i),a?M.createElement("pre",{style:c},a):null,null)}const Ch=M.createElement(Ph,null);class zh extends M.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,a){return a.location!==i.location||a.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:a.error,location:a.location,revalidation:i.revalidation||a.revalidation}}componentDidCatch(i,a){console.error("React Router caught the following error during render",i,a)}render(){return this.state.error!==void 0?M.createElement(Be.Provider,{value:this.props.routeContext},M.createElement(df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Th(o){let{routeContext:i,match:a,children:u}=o,c=M.useContext(Ns);return c&&c.static&&c.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=a.route.id),M.createElement(Be.Provider,{value:i},u)}function Fh(o,i,a,u){var c;if(i===void 0&&(i=[]),a===void 0&&(a=null),u===void 0&&(u=null),o==null){var p;if(!a)return null;if(a.errors)o=a.matches;else if((p=u)!=null&&p.v7_partialHydration&&i.length===0&&!a.initialized&&a.matches.length>0)o=a.matches;else return null}let h=o,d=(c=a)==null?void 0:c.errors;if(d!=null){let E=h.findIndex(L=>L.route.id&&(d==null?void 0:d[L.route.id])!==void 0);E>=0||Pn(!1),h=h.slice(0,Math.min(h.length,E+1))}let x=!1,v=-1;if(a&&u&&u.v7_partialHydration)for(let E=0;E<h.length;E++){let L=h[E];if((L.route.HydrateFallback||L.route.hydrateFallbackElement)&&(v=E),L.route.id){let{loaderData:R,errors:P}=a,j=L.route.loader&&R[L.route.id]===void 0&&(!P||P[L.route.id]===void 0);if(L.route.lazy||j){x=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((E,L,R)=>{let P,j=!1,A=null,N=null;a&&(P=d&&L.route.id?d[L.route.id]:void 0,A=L.route.errorElement||Ch,x&&(v<0&&R===0?(Oh("route-fallback"),j=!0,N=null):v===R&&(j=!0,N=L.route.hydrateFallbackElement||null)));let Y=i.concat(h.slice(0,R+1)),en=()=>{let b;return P?b=A:j?b=N:L.route.Component?b=M.createElement(L.route.Component,null):L.route.element?b=L.route.element:b=E,M.createElement(Th,{match:L,routeContext:{outlet:E,matches:Y,isDataRoute:a!=null},children:b})};return a&&(L.route.ErrorBoundary||L.route.errorElement||R===0)?M.createElement(zh,{location:a.location,revalidation:a.revalidation,component:A,error:P,children:en(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):en()},null)}var vf=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(vf||{}),yf=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(yf||{});function Nh(o){let i=M.useContext(Ns);return i||Pn(!1),i}function Ih(o){let i=M.useContext(wh);return i||Pn(!1),i}function Ah(o){let i=M.useContext(Be);return i||Pn(!1),i}function xf(o){let i=Ah(),a=i.matches[i.matches.length-1];return a.route.id||Pn(!1),a.route.id}function Mh(){var o;let i=M.useContext(df),a=Ih(),u=xf();return i!==void 0?i:(o=a.errors)==null?void 0:o[u]}function Dh(){let{router:o}=Nh(vf.UseNavigateStable),i=xf(yf.UseNavigateStable),a=M.useRef(!1);return hf(()=>{a.current=!0}),M.useCallback(function(c,p){p===void 0&&(p={}),a.current&&(typeof c=="number"?o.navigate(c):o.navigate(c,Jr({fromRouteId:i},p)))},[o,i])}const Zc={};function Oh(o,i,a){Zc[o]||(Zc[o]=!0)}function jh(o,i){o==null||o.v7_startTransition,o==null||o.v7_relativeSplatPath}function $h(o){let{to:i,replace:a,state:u,relative:c}=o;tr()||Pn(!1);let{future:p,static:h}=M.useContext(pt),{matches:d}=M.useContext(Be),{pathname:x}=rr(),v=mf(),E=Fs(i,Ts(d,p.v7_relativeSplatPath),x,c==="path"),L=JSON.stringify(E);return M.useEffect(()=>v(JSON.parse(L),{replace:a,state:u,relative:c}),[v,L,c,a,u]),null}function ui(o){Pn(!1)}function Kh(o){let{basename:i="/",children:a=null,location:u,navigationType:c=at.Pop,navigator:p,static:h=!1,future:d}=o;tr()&&Pn(!1);let x=i.replace(/^\/*/,"/"),v=M.useMemo(()=>({basename:x,navigator:p,static:h,future:Jr({v7_relativeSplatPath:!1},d)}),[x,d,p,h]);typeof u=="string"&&(u=zt(u));let{pathname:E="/",search:L="",hash:R="",state:P=null,key:j="default"}=u,A=M.useMemo(()=>{let N=zs(E,x);return N==null?null:{location:{pathname:N,search:L,hash:R,state:P,key:j},navigationType:c}},[x,E,L,R,P,j,c]);return A==null?null:M.createElement(pt.Provider,{value:v},M.createElement(gi.Provider,{children:a,value:A}))}function Bh(o){let{children:i,location:a}=o;return Lh(Ss(i),a)}new Promise(()=>{});function Ss(o,i){i===void 0&&(i=[]);let a=[];return M.Children.forEach(o,(u,c)=>{if(!M.isValidElement(u))return;let p=[...i,c];if(u.type===M.Fragment){a.push.apply(a,Ss(u.props.children,p));return}u.type!==ui&&Pn(!1),!u.props.index||!u.props.children||Pn(!1);let h={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(h.children=Ss(u.props.children,p)),a.push(h)}),a}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Es(){return Es=Object.assign?Object.assign.bind():function(o){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(o[u]=a[u])}return o},Es.apply(this,arguments)}function Vh(o,i){if(o==null)return{};var a={},u=Object.keys(o),c,p;for(p=0;p<u.length;p++)c=u[p],!(i.indexOf(c)>=0)&&(a[c]=o[c]);return a}function Uh(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Hh(o,i){return o.button===0&&(!i||i==="_self")&&!Uh(o)}const Wh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qh="6";try{window.__reactRouterVersion=qh}catch{}const Xh="startTransition",Yc=Xd[Xh];function Jh(o){let{basename:i,children:a,future:u,window:c}=o,p=M.useRef();p.current==null&&(p.current=Jd({window:c,v5Compat:!0}));let h=p.current,[d,x]=M.useState({action:h.action,location:h.location}),{v7_startTransition:v}=u||{},E=M.useCallback(L=>{v&&Yc?Yc(()=>x(L)):x(L)},[x,v]);return M.useLayoutEffect(()=>h.listen(E),[h,E]),M.useEffect(()=>jh(u),[u]),M.createElement(Kh,{basename:i,children:a,location:d.location,navigationType:d.action,navigator:h,future:u})}const Qh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Gh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ft=M.forwardRef(function(i,a){let{onClick:u,relative:c,reloadDocument:p,replace:h,state:d,target:x,to:v,preventScrollReset:E,viewTransition:L}=i,R=Vh(i,Wh),{basename:P}=M.useContext(pt),j,A=!1;if(typeof v=="string"&&Gh.test(v)&&(j=v,Qh))try{let b=new URL(window.location.href),fn=v.startsWith("//")?new URL(b.protocol+v):new URL(v),Cn=zs(fn.pathname,P);fn.origin===b.origin&&Cn!=null?v=Cn+fn.search+fn.hash:A=!0}catch{}let N=Sh(v,{relative:c}),Y=Zh(v,{replace:h,state:d,target:x,preventScrollReset:E,relative:c,viewTransition:L});function en(b){u&&u(b),b.defaultPrevented||Y(b)}return M.createElement("a",Es({},R,{href:j||N,onClick:A||p?u:en,ref:a,target:x}))});var bc;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(bc||(bc={}));var nf;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(nf||(nf={}));function Zh(o,i){let{target:a,replace:u,state:c,preventScrollReset:p,relative:h,viewTransition:d}=i===void 0?{}:i,x=mf(),v=rr(),E=gf(o,{relative:h});return M.useCallback(L=>{if(Hh(L,a)){L.preventDefault();let R=u!==void 0?u:ci(v)===ci(E);x(o,{replace:R,state:c,preventScrollReset:p,relative:h,viewTransition:d})}},[v,x,E,u,c,a,o,p,h,d])}const kf={bg:"#0a0e17",card:"#111827",cardHover:"#1a2332",surface:"#0f1623",accent:"#f59e0b",accentDim:"#b45309",accentSoft:"rgba(245,158,11,0.08)",theta:"#3b82f6",thetaSoft:"rgba(59,130,246,0.12)",eta:"#ef4444",etaSoft:"rgba(239,68,68,0.12)",dual:"#8b5cf6",dualSoft:"rgba(139,92,246,0.08)",green:"#10b981",greenSoft:"rgba(16,185,129,0.12)",cyan:"#06b6d4",cyanSoft:"rgba(6,182,212,0.12)",text:"#e5e7eb",textDim:"#6b7280",textMuted:"#374151",border:"#1f2937"},wf={bg:"#f8f9fa",card:"#ffffff",cardHover:"#f0f1f3",surface:"#f1f3f5",accent:"#d97706",accentDim:"#92400e",accentSoft:"rgba(217,119,6,0.08)",theta:"#2563eb",thetaSoft:"rgba(37,99,235,0.10)",eta:"#dc2626",etaSoft:"rgba(220,38,38,0.10)",dual:"#7c3aed",dualSoft:"rgba(124,58,237,0.06)",green:"#059669",greenSoft:"rgba(5,150,105,0.10)",cyan:"#0891b2",cyanSoft:"rgba(8,145,178,0.10)",text:"#1f2937",textDim:"#6b7280",textMuted:"#d1d5db",border:"#e5e7eb"};let ut=localStorage.getItem("theme")||"dark",Sf=ut==="light"?{...wf}:{...kf};const _s=new Set;function Ef(){const o=ut==="light"?wf:kf;Object.assign(Sf,o);const i=document.documentElement;for(const[a,u]of Object.entries(o))i.style.setProperty(`--c-${a}`,u);i.setAttribute("data-theme",ut),localStorage.setItem("theme",ut),_s.forEach(a=>a(ut))}Ef();function Yh(){return ut}function bh(o){ut=o,Ef()}function nm(){bh(ut==="dark"?"light":"dark")}function _f(o){return _s.add(o),()=>_s.delete(o)}const Q=Sf,pe={mono:"'JetBrains Mono', 'Fira Code', monospace",serif:"'Playfair Display', Georgia, serif"},Tg={get background(){return Q.card},borderRadius:10,get border(){return`1px solid ${Q.border}`}};function Fg(o,i,a){const u=o.current;if(!u)return null;const c=u.getContext("2d"),p=window.devicePixelRatio||1;return u.width=i*p,u.height=a*p,c.scale(p,p),c.clearRect(0,0,i,a),c}function Ng(o,i,a){const u=o.createLinearGradient(0,i,0,a);return u.addColorStop(0,"rgba(245,158,11,0.25)"),u.addColorStop(1,"rgba(245,158,11,0.01)"),u}const em="modulepreload",tm=function(o){return"/infogeo-book/"+o},ef={},ln=function(i,a,u){let c=Promise.resolve();if(a&&a.length>0){let h=function(v){return Promise.all(v.map(E=>Promise.resolve(E).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),x=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=h(a.map(v=>{if(v=tm(v),v in ef)return;ef[v]=!0;const E=v.endsWith(".css"),L=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${L}`))return;const R=document.createElement("link");if(R.rel=E?"stylesheet":em,E||(R.as="script"),R.crossOrigin="",R.href=v,x&&R.setAttribute("nonce",x),document.head.appendChild(R),E)return new Promise((P,j)=>{R.addEventListener("load",P),R.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${v}`)))})}))}function p(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return c.then(h=>{for(const d of h||[])d.status==="rejected"&&p(d.reason);return i().catch(p)})},rm=`# 서문

---

## 이 교재는 왜 존재하는가

어떤 것들은 너무 아름다워서 소수의 전문가에게만 보이는 것이 부당하다.

정보기하학(Information Geometry)이 그렇다. Shun'ichi Amari가 1980년대에 발견한 이 수학적 구조는, 확률과 통계의 세계 밑에 숨어 있는 놀라운 기하학적 풍경을 드러냈다. 확률분포가 곡면 위의 점이 되고, 학습이 그 곡면 위의 경로가 되고, 추론이 그림자를 내려찍는 사영이 되는 세계. 그 세계에서는 덧셈으로 걷는 길과 곱셈으로 걷는 길이 같은 두 점을 잇되 다른 곳을 지나가며, 이 두 길의 긴장이 통계적 추론의 본질을 이룬다.

문제는 이 풍경을 보려면 미분기하학, 통계학, 볼록 해석학의 교차점에 서야 한다는 것이다. 대학원 수준의 수학이 진입장벽처럼 서 있다. 그래서 대부분의 사람들은 이 풍경의 존재조차 모른 채 지나간다.

이 교재는 그 장벽을 우회하려는 시도다.

수식을 없애는 것이 아니다. 수식이 필요해지는 순간까지 최대한 버티는 것이다. 학생이 "그래서 그걸 어떻게 정확히 표현하는데요?"라고 스스로 물을 때 비로소 수식이 등장하면, 그 수식은 짐이 아니라 선물이 된다. 우리는 그 순간을 설계한다.

---

## 집필 원칙

이 교재는 네 가지 원칙 위에 서 있다.

### 한 절에 한 개념

교재를 쓰는 사람이 빠지기 가장 쉬운 함정이 있다. 두 개념의 연결이 보이면 한 절에 욱여넣고 싶어진다. "KL 발산은 비대칭인데 이건 엔트로피와 이런 관계가 있고..." 저자에게는 하나의 문장이지만, 학생에게는 처음 보는 개념 두 개가 동시에 쏟아지는 것이다.

이 교재에서 각 절은 하나의 개념만 심는다. "확률분포가 점이다"와 "그 점들의 공간이 삼각형이다"는 별도의 절이다. "거리가 비대칭일 수 있다"와 "KL 발산이 그런 비대칭 거리다"도 별도의 절이다. 연결은 학생이 스스로 발견한다. "아, 이것과 저것이 같은 거였구나!"라는 순간은 저자가 미리 보여주는 것이 아니라 학생의 것이어야 한다.

### 왜?로 시작한다

매 장은 "왜?"라는 질문으로 시작한다. 정의가 아니라 질문이 먼저다.

"볼록함수란..." 이 아니라 "왜 구슬은 그릇 바닥을 찾는데 안장 위에선 못 찾는가?"가 먼저다. "르장드르 변환의 정의는..." 이 아니라 "같은 볼록함수를 완전히 다른 언어로 다시 쓸 수 있다면?"이 먼저다. 학생이 답을 원하는 상태에 도달한 후에야 답을 준다.

### 삼단 진행: 비유 → 인터랙티브 → 코드

각 장은 세 단계를 거친다.

**비유**가 먼저 온다. 거실에서, 일상의 언어로 이해하는 단계다. "무빙워크가 있는 공항 복도를 상상해보자. 순방향은 3분, 역방향은 10분. 같은 두 지점인데 방향에 따라 거리가 다르다." 이것으로 비대칭 거리의 감각을 심는다.

**JSX 인터랙티브**가 그 다음이다. 슬라이더를 움직이고, 점을 드래그하고, 그래프가 실시간으로 바뀌는 것을 보면서 손으로 만져보는 단계다. 비유가 심은 감각을 시각적으로 확인하고 확장한다. "아, 정말 이쪽에서 저쪽은 가까운데 반대는 멀구나."

**파이썬 코드**가 마지막이다. 수식 대신 코드가 진실을 말한다. \`kl = np.sum(p * np.log(p / q))\`는 정의 그 자체이면서 동시에 실행 가능한 문장이다. 학생은 코드를 돌려보면서 "p와 q를 바꾸면 값이 달라진다"를 직접 확인한다. 그리고 그제야 수식이 필요해진다 — 이 코드를 한 줄로 쓰면 어떻게 되는가? 그것이 수식이다.

### 나선형 반복

같은 개념이 다른 깊이에서 다시 나타난다. "첫 번째 길 — 덧셈으로 걷기"에서 직관으로 만진 학생은, "패턴이 있는 분포들"에서 지수족의 정준분해를 배울 때 "아, 그때 그 길!"을 재발견한다. "르장드르 변환"에서 처음 본 르장드르 변환은 "θ와 η를 잇는 다리"에서 θ↔η 좌표 변환으로 다시 나타나며, "아, 여기서 쓰이는 거였구나!"가 된다.

한 번에 이해되지 않아도 된다. 다음 만남에서 더 깊이 보게 된다. 수학은 한 번에 관통하는 것이 아니라 여러 번 스쳐 지나가면서 점점 선명해지는 것이다.

---

## 이 교재를 어떻게 읽을 것인가

### 수학을 두려워하는 사람에게

이 교재는 고등학교 수학수준으로 접근 가능하다. 미적분의 기본 개념(함수, 기울기, 넓이)을 알면 된다. 선형대수나 미분기하학은 전혀 가정하지 않는다. 물론 고급수학이 등장하는 것은 어쩔 수 없다. 하지만 수식의 벽에 막히지 않도록 비유와 시각화, 실행 가능한 코드를 배치했다. 문제를 풀게 만드는 것이 아니라 납득시키고 실행해서 응용해볼 수 있게 하고자 한다.

다만, 코드를 직접 돌려보는 것은 필수다. 비유를 읽고 "알겠다"고 넘어가면 절반만 아는 것이다. JSX 시각화를 직접 만져보고, 파이썬 코드를 직접 실행하고, 숫자가 바뀌는 것을 눈으로 확인해야 한다. 수학의 체화는 손끝에서 일어난다.

### 수학을 이미 아는 사람에게

미분기하학이나 통계학을 이미 아는 사람에게도 이 교재는 가치가 있다. 엄밀한 수학의 언어로는 보이지 않던 직관이 비유와 시각화를 통해 드러나는 경우가 많다. "e-접속과 m-접속의 쌍대성"을 정리로 알고 있는 것과, "덧셈의 길과 곱셈의 길이 같은 두 점을 잇되 다른 곳을 지나간다"는 것을 시각적으로 체감하는 것은 다른 종류의 앎이다.

수식을 이미 아는 사람은 비유 부분을 "그 수식이 진짜로 말하고 있는 것"을 재발견하는 기회로 삼으면 좋다.

### 순서에 대하여

이 교재는 네 막의 여행이다.

**1막: 기하학의 눈**

| Part | 장 | 핵심 질문 |
|------|-----|-----------|
| I. 무대 | 1장 왜 정보기하학인가 | 왜 이 여행을 시작하는가? |
| II. 점과 거리 | 2장 점, 3장 거리 | 분포가 점이고, 거리가 비대칭이라면? |
| III. 길 | 4장 길 | 두 점 사이를 걷는 방법이 두 가지? |

*전환 ①: 같은 세계, 다른 눈*

**2막: 정보의 눈**

| Part | 장 | 핵심 질문 |
|------|-----|-----------|
| IV. 놀라움 | 5장 놀라움과 정보 | 놀라움을 숫자로 쓸 수 있는가? |
| V. 볼록성 | 6장 볼록함수의 쌍대 | 함수를 접선으로 다시 쓸 수 있다면? |

*전환 ②: 두 눈을 동시에*

**3막: 정보기하학 — 이론**

| Part | 장 | 핵심 질문 |
|------|-----|-----------|
| VI. 구조 | 7장 지수족, 8장 구부러진 땅 | 분포들의 공간은 어떤 모양인가? |
| VII. 곡률과 확신 | 9장 곡률, 10장 무지와 확신 | 한 걸음의 크기와 방향은? |
| VIII. 추론과 종합 | 11장 추론, 12장 수렴, 13장 전체 지도 | 모든 것이 하나의 그림이 되는가? |

*전환 ③: 도구를 들고 세계로*

**4막: 정보기하학 — 응용**

| Part | 장 | 핵심 질문 |
|------|-----|-----------|
| IX. 생성 | 14장 디퓨전, 15장 플로우 매칭 | 노이즈에서 데이터를 만드는 두 가지 길은? |
| X. 정렬 | 16장 넓히기와 좁히기 | 넓힌 풍경을 얼마나, 어떻게 좁힐 것인가? |
| XI. 최적화 | 17장 스케일링 | 한 걸음의 크기를 공정하게 만드는 법은? |

*에필로그: 지도의 가장자리에서*

가능하면 처음부터 순서대로 읽기를 권한다. 각 장이 이전 장의 감각 위에 쌓이도록 설계되어 있다. 그러나 현실적으로, Part II(점과 거리)를 읽은 후에는 관심에 따라 Part III(길)이나 Part V(볼록성)로 건너뛰어도 무방하다. 다만 3장의 KL 발산 절은 읽어야 한다 — 이후 추론(11장)에서 필수다. Part VI(구조)과 Part VII(곡률과 확신)은 반드시 Part V 이후에 읽어야 한다. 르장드르 변환 없이 지수족의 쌍대 구조를 이해하는 것은 불가능하다.

3막의 정점은 Part VIII(추론과 종합)이다. 추론의 기하학에서 사영을 배우고, 수렴에서 EM 알고리즘으로 사영의 반복을 경험한 뒤, 전체 지도에서 이 교재의 모든 도구가 하나의 그림 안에 들어 있음을 확인한다. Part VII까지의 모든 개념이 여기서 합류하므로, 반드시 순서대로 도달하기를 권한다.

4막은 네 개의 장으로 이루어져 있다. 14장(디퓨전)과 15장(플로우 매칭)은 생성의 이야기이고, 16장(넓히기와 좁히기)은 언어모델 훈련의 이야기이고, 17장(스케일링)은 그러한 모델을 훈련하는 과정을 최적화하는 이야기다. 14장과 15장은 연결되어 있으므로 순서대로 읽기를 권한다. 16장은 10장과 11장의 최종 회수이므로 3막까지를 마친 뒤에 읽어야 한다. 17장은 9장의 Fisher 계량을 전제한다. 스케일링에서 Fisher 계량이 현실의 최적화 문제에 작동하는 것을 보고, 이 교재가 시작된 원점으로 돌아온다. 증명이나 유도 대신, "이 도구 없이는 읽히지 않던 문장이 이제는 그림이 된다"는 경험이 목표다.

---

## 실용적 가치: AI 세상을 여행하는 언어

이 교재를 쓰게 된 동기에는 순수한 지적 아름다움에 대한 경탄도 있지만, 지극히 실용적인 이유도 있다.

### AI를 자신의 눈으로 이해하려면

2020년대의 AI는 인류 역사상 가장 빠르게 발전하는 기술이다. 매주 새로운 모델이 나오고, 매달 패러다임이 바뀌는 것처럼 보인다. 대부분의 사람들은 이 변화를 뉴스 기사와 SNS 요약으로 따라간다. 그것은 여행 블로그를 읽는 것과 같다 — 누군가의 눈으로 본 풍경을 전해 듣는 것이지, 자신이 그 땅을 밟는 것이 아니다.

AI를 자신의 눈으로 이해하려면 논문을 읽고 관련 구현체의 github 코드와 이슈에 등장하는 토론들을 읽어야 한다. 그것이 유일한 길이다. 다른 사람의 요약과 해석을 거치지 않고, 연구자가 실제로 무엇을 발견했고 무엇을 주장하는지를 원문과 코드로 확인해야 한다. 그래야 과장과 실체를 구분할 수 있고, 진짜 중요한 발전과 마케팅 소음을 구분할 수 있다.

문제는, AI 논문에는 언어가 있다는 것이다.

컴퓨터 세상에 가서 여행을 하려면 자바스크립트나 파이썬 같은 컴퓨터 언어를 알아야 한다. 그 언어를 모르면 코드는 그저 알 수 없는 기호의 나열이다. AI 세상도 마찬가지다. AI 논문의 언어는 선형대수, 확률론, 최적화, 그리고 정보기하학이다. 이 중에서 정보기하학은 가장 덜 알려져 있지만, 점점 더 많은 현대 AI 연구의 밑바닥에 깔려 있는 언어다.

자연 기울기(natural gradient)가 왜 일반 기울기보다 나은지. 변분 추론(variational inference)에서 KL 발산의 방향이 왜 중요한지. Fisher 정보 행렬이 왜 사전훈련과 파인튜닝의 균형에 등장하는지. 와서스타인 거리(Wasserstein distance)와 KL 발산이 왜 다른 종류의 질문에 답하는지. 이 모든 것의 밑에 정보기하학의 구조가 있다.

이 교재를 마치고 나면, 이런 문장들이 읽히기 시작한다. 수식의 숲에서 길을 잃지 않고, "아, 이건 e-사영이고 저건 m-사영이구나"라고 위에서 내려다볼 수 있게 된다.

### 마법의 한 마디

한 가지 비밀 하나를 공유하겠다. 실용적이면서도, 솔직히 약간 비이성적일 정도로 효과적인 방법이다.

Claude 같은 AI 모델에게 최신 논문을 던져주고 이렇게 말해보라:

> "이 논문을 정보기하학의 관점에서 설명해줘."

이 한 마디가 마법처럼 작동하는 이유가 있다. 정보기하학은 확률과 통계의 메타 언어다. 개별 알고리즘의 세부사항 위에 있는, 구조의 언어다. 논문의 핵심 아이디어가 "어떤 공간에서, 어떤 거리를 재고, 어떤 방향으로 사영하는가"라는 프레임으로 번역되면, 놀라울 정도로 많은 기술적 디테일이 하나의 기하학적 그림으로 정리된다.

물론, 이 마법이 작동하려면 전제 조건이 있다. Claude의 설명을 **알아들을 수 있어야 한다.** 정보기하학의 기본 어휘 — 매니폴드, 측지선, 쌍대 좌표, 발산, 사영 — 를 체화하고 있어야 한다. Claude가 "이 알고리즘은 본질적으로 자연모수 공간에서의 e-사영입니다"라고 말했을 때, 그 문장이 머릿속에서 그림이 되어야 한다.

이 교재는 그 어휘를 심는 책이다.

---

## 감사의 말

이 교재의 뼈대가 되는 수학적 구조는 Shun'ichi Amari의 연구에 빚지고 있다. 지수족의 플래시카드 형식은 Frank Nielsen과 Vincent Garcia의 작업(arXiv:0911.4863)에서 영감을 받았다. Herbert Callen의 열역학 교재는 르장드르 변환의 물리적 직관을 가르쳐주었고, Boyd와 Vandenberghe의 볼록 최적화 교재는 쌍대성의 수학적 명료함을 보여주었다.

그리고 이 교재의 모든 비유, 시각화, 코드 예제는 하나의 대화에서 태어났다. AI와 인간이 서로의 질문에 답하면서, "바보 같은 질문"이 가장 깊은 통찰로 이어지는 과정을 거쳐 만들어졌다. 바보 같은 질문은 없다. 있다면, 그것은 아직 제대로 답하지 못한 질문일 뿐이다.

---

## 표기법에 대하여

이 교재에서 수식은 최소한으로 사용된다. 대신 파이썬 코드가 수식의 역할을 한다. 그러나 장이 진행될수록, 코드 옆에 대응하는 수학적 표기를 병기한다. 다음은 교재 전체에서 반복적으로 등장하는 기호들이다.

| 기호 | 의미 | 처음 등장 |
|------|------|-----------|
| p | 진짜 분포 (true/target) — "현실" | 확률분포는 점이다 |
| q | 모형/근사 분포 (model/approximation) — "지도" | 확률분포는 점이다 |
| θ | 자연모수 (natural parameter) | 자연모수 θ |
| η | 기대모수 (expectation parameter) | 기대모수 η |
| F(θ) | 로그정규화자 (log-normalizer) | 패턴이 있는 분포들 |
| F*(η) | F의 르장드르 변환 (convex conjugate) | θ와 η를 잇는 다리 |
| t(x) | 충분통계량 (sufficient statistic) | 충분통계량 |
| H(p) | 엔트로피 | 엔트로피 |
| KL(p‖q) | KL 발산 (Kullback-Leibler divergence) | KL 발산 |
| ∇⁽ᵉ⁾ | e-접속 (exponential connection) | 왜 접속이 두 개인가 |
| ∇⁽ᵐ⁾ | m-접속 (mixture connection) | 왜 접속이 두 개인가 |
| g | Fisher 정보 계량 (Fisher information metric) | 곡면 위의 자 — Fisher 계량 (9장) |
| v(x, t) | 속도장 (velocity field) | 플로우 매칭 (15장) |

이 표를 외울 필요는 없다. 각 기호는 처음 등장하는 장에서 충분한 직관과 함께 도입되며, 이후 반복적으로 사용되면서 자연스럽게 익숙해진다.

---

*2026년, 서울에서*
*덧셈의 길과 곱셈의 길 사이 어딘가에서*
`,lm=`# 왜 정보기하학인가

## 입력, 함수, 출력 — 그리고 분포
입력이 변하면 출력이 변한다 — 함수 관계라는 상식

### 기계학습의 핵심 전환
사람이 함수를 코드로 짜는 대신,
기계가 데이터를 보고 함수를 숫자(파라미터)로 채운다

입력을 숫자로 표현하는 일 — 이미지, 텍스트, 소리를 벡터로
출력을 숫자로 표현하는 일 — "다음 토큰들의 확률표"처럼
출력이 하나의 값이 아니라 가능성의 분포가 되는 필연성

### 한 걸음 더
파라미터 자체도 확률분포다
— 값이 아니라 "어디쯤에 있을 것 같다"

### 수확
입력도 분포, 출력도 분포, 파라미터도 분포
— 확률분포가 주인공이 될 수밖에 없는 이유

확률분포가 주인공이라면, 분포와 분포 사이의 "거리"는 무엇인가?
공정한 동전과 살짝 편향된 동전은 "얼마나" 다른가?
그 "얼마나"를 숫자로 쓰려면 — 분포가 사는 공간의 지도가 필요하다.

![공정한 동전과 편향된 동전](/images/chapters/ch01-coin-distance.svg)

## 파라미터 공간에서 벌어지는 마법들

![파라미터 공간의 손실 지형](/images/chapters/ch01-parameter-landscape.svg)

![실제 신경망의 loss landscape — ResNet-56(왼쪽)과 skip connection 없는 네트워크(오른쪽)](/images/chapters/loss-landscape-resnet56.png)
![skip connection이 없으면 지형이 혼돈적이다](/images/chapters/loss-landscape-vgg56.png)

왜 랜덤하게 초기화하는가?
— 파라미터 공간의 아무 점에서 출발한다는 것
학습이란 무엇인가?
— 데이터가 파라미터를 한 점에서 다른 점으로 끌고 가는 과정
— 손실 함수가 만드는 지형 위의 하강
추가학습(fine-tuning)이란 무엇인가?
— 이미 찾은 점 근처에서 새 데이터로 다시 움직이기
LoRA — 전체 공간이 아니라 부분공간에서 움직이기
— 수백억 파라미터 중 작은 방향만 조정한다는 발상

### 사례
이미지 디퓨전 모델의 세계
모델 병합 — 두 점의 "중간"을 취하면?
  어떤 경우엔 두 능력이 합쳐진다 — 이게 왜 되나?
LoRA 보간 — 두 LoRA 사이를 걸어가기
  스타일 A에서 스타일 B로의 부드러운 전환이 되는 경우
  갑자기 무너지는 경우
  "잘 되는 보간"과 "안 되는 보간"의 차이는 어디에 있는가?

### 수확
이 현상들에는 패턴이 있다.
그 패턴이 무엇인지를 묻는 것이 이 교재의 출발점이다
그런데 이 패턴을 읽으려면 파라미터 공간에서 "거리"와 "방향"을 재는 도구가 필요하다.
유클리드 거리로 충분한가? — 충분하지 않다는 것이 곧 드러난다.

## 정보와 기하학 — 오래된 두 학문의 만남
기하학 — 수천 년의 역사, 그러나 현대적 전환
유클리드에서 클라인의 에를랑겐 프로그램까지
"기하학이란 변환 아래 변하지 않는 것을 연구하는 학문"
정보 — 일상어에서 수학으로
섀넌(1948): "정보량"에 정확한 숫자를 매긴 최초의 사람
놀라움, 엔트로피, 코드의 길이가 하나로 연결되다
교차점: 정보기하학
아마리 슌이치 — 확률분포의 공간에 미분기하학을 입힌다
탄생은 1980년대, 본격적 응용은 21세기
이 책이 그리려는 지도
학습, 추론, 생성의 뒤에서 작동하는 기하학적 구조
"파라미터 공간에서 벌어지는 마법들"이 이 지도 위에서 어디에 놓이는지의 예고

### 수확
너무 기본적이어서 오히려 늦게 연결된 두 학문,
그 연결이 지금의 AI를 설명하는 언어가 되고 있다

그 언어의 첫 단어는 놀라울 정도로 단순하다.
"확률분포 하나를 점이라고 부르자."
이 한 문장에서 모든 것이 시작된다. — 정말로?

---

> ### 인물 이야기 — C.R. Rao와 "25세의 논문"
>
> ![C.R. Rao](/images/portraits/cr-rao.jpg)
>
> 1945년, 인도 캘커타.
> 스물다섯 살의 대학원생 카리얌패디 라다크리슈나 라오(C.R. Rao)가 박사학위 논문을 쓰고 있었다.
> 그가 풀고 있던 문제는 겉보기에 평범했다.
> "추정량의 정밀도에 한계가 있는가?"
> 통계학에서 파라미터를 추정할 때, 아무리 좋은 방법을 써도 넘을 수 없는 벽이 있다.
> 그 벽의 높이를 재는 것이 문제였다.
>
> Fisher는 이미 1920년대에 그 벽의 존재를 감지하고 있었다.
> 충분통계량, 최대우도추정 — Fisher가 만든 도구들은 전부 "정보를 잃지 않는 추정"을 향해 있었다.
> 그런데 Fisher 자신은 그 벽의 높이를 깔끔한 부등식으로 쓰지 못했다.
>
> Rao가 한 일은 이것이었다.
> Fisher의 정보량 — 스코어 함수의 분산 — 을 행렬로 쓰고,
> 그 행렬이 파라미터 공간 위의 **리만 계량**이라는 것을 알아챘다.
> 확률분포의 공간이 휘어진 땅이고,
> Fisher 정보가 그 땅 위의 자(ruler)라는 것.
>
> 같은 해, 같은 부등식을 프레셰(Fréchet)와 다마르(Darmois)도 독립적으로 증명했다.
> 그래서 이 부등식은 크라메르-라오 부등식, 또는 라오-크라메르-프레셰-다마르 부등식이라 불린다.
> 그러나 "Fisher 정보가 기하학이다"라는 관찰은 Rao의 것이었다.
>
> 이 관찰이 왜 중요한가?
> Fisher 정보가 계량이라는 것은, 분포의 공간에서 거리를 잴 수 있다는 뜻이다.
> 두 분포가 "얼마나 다른가"를 좌표 선택에 의존하지 않고 잴 수 있다.
> 이 한 문장이 정보기하학의 씨앗이다.
>
> 하지만 씨앗에서 나무까지는 40년이 걸렸다.
> Rao의 논문은 통계학자들에게 읽혔지만, "계량"이라는 단어의 무게를
> 진지하게 받아들인 사람은 거의 없었다.
> 통계학에 미분기하학을 본격적으로 들여온 것은 1980년대 아마리 슌이치의 작업이었고,
> 그 이야기는 4장에서 만나게 된다.
>
> Rao는 2023년, 102세로 세상을 떠났다.
> 자신이 25세에 심은 씨앗이 기계학습의 언어가 되는 것을 지켜본 드문 사람이다.
`,im=`# 점

## 대상이 점이 되는 순간

무엇이든 숫자의 나열로 바꿀 수 있다면, 그것은 공간의 점이 된다.
이 문장은 당연해 보이지만, 그 결과는 당연하지 않다.

### 숫자로 바꾼다고 끝이 아니다

MNIST 데이터셋을 본 적이 있을 것이다.
28×28 픽셀의 손글씨 숫자 이미지 7만 장.

![MNIST 손글씨 숫자 샘플](/images/chapters/mnist-samples.png)

한 장의 이미지를 펼치면 784개의 숫자가 된다.
첫 번째 픽셀의 밝기, 두 번째 픽셀의 밝기, …, 784번째 픽셀의 밝기.
그러니까 손글씨 '3' 한 장은 784차원 공간의 점 하나다.

7만 장의 손글씨를 전부 펼치면, 784차원 공간에 7만 개의 점이 찍힌다.
점은 찍었다. 하지만 이 784차원 공간은 별로 쓸모가 없다.
같은 '3'이라도 획이 조금만 삐뚤어지면 픽셀값이 확 달라진다.
다른 숫자인 '8'이 오히려 픽셀값으로는 더 비슷할 수도 있다.
숫자로 바꿨다는 사실만으로는, 점들 사이의 거리가 의미를 갖지 않는다.

그런데 VAE 같은 방법으로 이 점들을 2차원 평면에 투영하면
신기한 일이 보인다.
'3'들은 '3'들끼리, '7'들은 '7'들끼리 모여 있다.
아무도 "모여라"고 명령하지 않았는데, 비슷한 것들이 가까이 찍힌다.

![VAE 2D 잠재공간 — 같은 숫자끼리 모인다](/images/chapters/mnist-vae-latent.png)

784차원 픽셀 공간에서는 보이지 않던 구조가,
다른 공간으로 옮기니까 드러난 것이다.

### JSX

왼쪽 — 784차원 픽셀 공간에서 임의 2축으로 투영. 숫자들이 뒤섞여 있음.
오른쪽 — VAE 2D 잠재 공간. 같은 숫자끼리 뭉쳐 있음.
점을 클릭하면 원본 이미지가 팝업.

영어 단어도 마찬가지다.
"king"을 ASCII 코드로 쓰면 숫자의 나열이 되지만,
거기에 기하학은 없다.
"king"과 "queen"이 가까운지 먼지를 ASCII 값으로는 알 수 없다.

그런데 Word2Vec이라는 알고리즘이
단어 하나를 300개의 숫자로 바꿔 놓으면, 상황이 달라진다.
이 300차원 공간에서는 점들 사이의 *방향*이 의미를 가진다.

king − man + woman ≈ queen

![Word2Vec — king - man + woman ≈ queen](/images/chapters/word2vec-king-queen.png)

"남자에서 여자로"라는 방향이 공간 안에 존재한다.
"서울에서 한국으로"라는 방향과
"도쿄에서 일본으로"라는 방향이 거의 평행하다.

### JSX

Word2Vec 2D 투영. 유명한 analogy 관계를
화살표로 시각화. king→queen, man→woman 등.

패턴이 보인다.
숫자로 바꾸는 것 자체는 시작일 뿐이다.
**어떤 공간에 놓느냐**에 따라 가까움과 멂이 의미를 갖기도, 갖지 않기도 한다.
좋은 공간에서는 비슷한 것이 가깝고, 다른 것이 멀다.
나쁜 공간에서는 모든 것이 뒤섞여 있다.

### 개와 고양이 — 좋은 공간에서는 문제가 쉬워진다

이것이 실제로 어떤 차이를 만드는지 보자.

개 사진 한 장과 고양이 사진 한 장이 있다.

![개와 고양이 — 같은 대상, 다른 공간](/images/chapters/dog-example.jpg)
![개와 고양이 — 같은 대상, 다른 공간](/images/chapters/cat-example.jpg)

둘 다 64×64 RGB 이미지라면, 각각 12,288차원 공간의 점이다.

이 픽셀 공간에서 개와 고양이를 분류해보자.
하이퍼플레인 하나 — 공간을 반으로 가르는 평면 — 를 그어서
한쪽에 개를, 다른 쪽에 고양이를 모을 수 있을까?

불가능하다.
배경이 바뀌고, 포즈가 바뀌고, 조명이 바뀌면
픽셀값은 완전히 달라지는데, 여전히 같은 개다.
"개다움"은 픽셀의 나열 속에 숨어 있지, 표면에 드러나 있지 않다.

같은 이미지를 CNN — 합성곱 신경망 — 에 통과시키면 어떤 일이 일어나는가.
CNN의 마지막 층은 이미지를 128개쯤의 숫자로 압축한다.
12,288차원에서 128차원으로.

이 128차원 공간에서는 기적 같은 일이 일어난다.
개들은 한쪽으로, 고양이들은 다른 쪽으로 모인다.
하이퍼플레인 하나로 깔끔하게 갈라진다.

같은 대상이다. 같은 개, 같은 고양이.
그런데 공간을 바꿨을 뿐인데, 풀 수 없던 문제가 풀린다.

### JSX

왼쪽 — 픽셀 공간의 2D 투영. 개(파랑)와 고양이(주황)가 뒤섞여 있음.
직선 하나로 분리 불가능.
오른쪽 — CNN 특징 공간의 2D 투영. 깔끔하게 분리.
직선 하나로 분리 가능.
가운데에 화살표: "CNN이 하는 일"

## 호기심 상자: 왜 좋은 공간이 존재하는가 — 매니폴드 가설

![매니폴드 가설](/images/chapters/ch02-manifold-hypothesis.svg)

왜 공간을 바꾸면 분류가 쉬워지는 걸까?
"운이 좋아서"가 아니다. 구조적인 이유가 있다.

64×64 RGB 이미지의 공간은 12,288차원이다.
이 공간의 점을 하나 무작위로 찍어보자.
12,288개의 숫자를 각각 0에서 255 사이에서 랜덤하게 뽑는다.
화면에 표시하면? 노이즈다. 텔레비전의 지직거림.
개도 아니고, 고양이도 아니고, 그 어떤 의미 있는 이미지도 아니다.

12,288차원 공간은 광대하다.
그런데 "개 사진"이라고 부를 수 있는 것들은
그 광대한 공간의 극히 일부에만 존재한다.
랜덤으로 점을 찍어서 개 사진이 나올 확률은 사실상 0이다.

실제 이미지들 — 개든 고양이든 풍경이든 — 은
12,288차원 공간 전체에 퍼져 있지 않다.
그 안의 훨씬 낮은 차원의 얇은 시트 위에 몰려 있다.
구겨지고 접힌 시트.
수학에서는 이것을 매니폴드(manifold)라고 부른다.

좋은 공간이 존재할 수 있는 이유가 여기에 있다.
데이터가 애초에 저차원 시트 위에 살고 있으니까,
그 시트를 찾아서 펼치면 구조가 드러난다.
CNN이 하는 일의 본질이 바로 이것이다.
접혀 있어서 개와 고양이가 뒤엉켜 보이던 시트를 펼쳐 놓으면,
원래 다른 곳에 살고 있던 것들이 양쪽으로 갈라진다.

이 관찰을 **매니폴드 가설**이라 부른다:
실제 데이터는 고차원 공간 전체가 아니라,
그 안의 저차원 매니폴드 위에 집중되어 있다.

매니폴드라는 단어는 8장에서 정식으로 만난다.
지금은 감각만 가져가자:
**데이터가 사는 진짜 공간은 우리가 보는 것보다 훨씬 작고,
그 작은 공간을 찾아내는 것이 기계학습의 핵심 문제 중 하나다.**

## 분포 전체가 점 하나가 된다

지금까지 점이 된 것들을 보자.
MNIST에서는 이미지 한 장이 점이었다.
Word2Vec에서는 단어 하나가 점이었다.
이제 전혀 다른 종류의 대상을 점으로 만들어보겠다.

한국 20대 남성의 키 분포가 있다.
평균 174cm, 표준편차 5.8cm의 정규분포.
이것은 (174, 5.8)이라는 점이다.

한국 20대 여성의 키 분포: (161, 5.2).
네덜란드 20대 남성의 키 분포: (183, 7.1).
네덜란드 20대 여성의 키 분포: (170, 6.3).

(μ, σ) 평면 위에 네 개의 점을 찍었다.

잠깐 멈춰서 이것이 얼마나 과감한 일인지 생각해보자.

한국 20대 남성의 키 분포 뒤에는 무엇이 있는가.
수십만 명의 신체검사 기록이 있다.
한 사람 한 사람의 키, 유전자, 식습관, 성장 환경이 있다.
그 모든 개별적 삶이 빚어낸 결과가 하나의 분포다.
그 분포를 우리는 방금 (174, 5.8)이라는 점 하나로 만들었다.

수십만 줄의 데이터, 수십만 명의 이야기가
평면 위의 점 하나로 압축되었다.
그리고 앞의 사례들과 다르게, 이 (μ, σ) 평면은
처음부터 의미 있는 공간이다.
μ가 가까우면 평균이 비슷한 집단이고,
σ가 가까우면 퍼짐의 정도가 비슷한 집단이다.
별도의 VAE도, Word2Vec도 필요 없다.

추상화의 수준이 완전히 달라졌다.
이미지 한 장이 아니라 분포 전체가 점이다.
그리고 이 도약이야말로 정보기하학의 출발점이다.

분포를 점으로 놓는 순간, 분포들 사이의 "거리"를 물을 수 있게 된다.
한국 남성과 네덜란드 남성은 얼마나 먼가?
한국 남성과 한국 여성은?
이 질문은 3장의 주제다.

### JSX

(μ, σ) 평면 위에 네 개의 점.
점을 클릭하면 해당 정규분포의 PDF가 오른쪽에 표시.
점을 드래그하면 분포 모양이 실시간으로 변화.
"점을 옮기는 것 = 분포의 모양을 바꾸는 것"

## 확률분포는 점이다

### 한 개념

분포 하나 = 공간의 점 하나

### 왜

"정규분포 하나를 '점'이라고 부르면 무슨 일이 생기나?"

### 비유

라디오 주파수 다이얼 — 다이얼을 돌리면
소리(분포의 모양)가 바뀌는데,
다이얼의 위치 자체가 "점"이다

### JSX

슬라이더(μ, σ) → 분포 모양 변화.
동시에 오른쪽에 (μ, σ) 평면 위의 점이 찍힘.
"모양을 바꾸는 것 = 점을 옮기는 것"

### 파이썬

분포를 벡터로 표현, 여러 분포를 scatter plot

## 가능성의 지도 — 심플렉스

![심플렉스: 모든 가능한 주사위의 지도](/images/chapters/ch02-dice-simplex.svg)

### 한 개념

이산확률의 전체 공간은 삼각형(심플렉스)이다

### 왜

"세 면 주사위의 '모든 가능한 성격'을 한눈에 볼 수 있나?"

### 비유

삼각형 좌표 — 삼각형 꼭짓점이 각각 "확실히 1번",
"확실히 2번", "확실히 3번", 내부가 불확실성

### JSX

삼각형 위에서 점을 드래그 → 대응하는 막대그래프가 변화.
중심 = 균등분포, 꼭짓점 = 확정, 변 = 한 면이 불가능
→ 점을 삼각형의 한 변 위로 끌어보자. 막대그래프에서 무엇이 사라지는가?

### 파이썬

바리센트릭 좌표 구현, 심플렉스 위에 격자 그리기

## 호기심 상자: 백만 면 주사위의 세계

우리는 3면 주사위의 삼각형을 보고 있다.
하지만 실제 언어 모델의 "다음 토큰" 분포는
면이 수만~수십만 개인 주사위다.
GPT 계열 모델의 어휘 크기가 5만이라면,
그 심플렉스는 5만 차원의 초삼각형이다.

고차원에서는 직관이 뒤집힌다.
서울역에서 사람들은 대합실 한가운데가 아니라
벽 근처, 기둥 옆, 구석에 서 있다.
고차원 심플렉스도 그렇다.
부피의 대부분이 중심이 아니라 모서리 근처에 집중된다.
이것을 "차원의 저주"라고 부른다.

5만 차원의 삼각형 위에 점 하나를 찍었다. 점은 찍었다.
그런데 두 점이 "가깝다" 또는 "멀다"는 것은 어떻게 아는가?
삼각형 위에서 자를 대야 한다. 어떤 자를?

---

> ### 인물 이야기 — Karl Pearson과 "데이터를 보는 눈"
>
> ![Karl Pearson](/images/portraits/karl-pearson.jpg)
>
> 19세기 말, 런던 유니버시티 칼리지.
> Karl Pearson은 원래 통계학자가 아니었다.
> 독일에서 철학과 물리학을 공부하고 돌아와
> 응용수학 교수로 부임한 사람이었다.
> 그가 통계학으로 전향한 계기는 생물학자 Francis Galton과의 만남이었다.
>
> Galton은 다윈의 사촌이었고, 유전의 법칙을 수로 잡고 싶어 했다.
> 아버지의 키와 아들의 키 사이에 관계가 있다는 건 알겠는데,
> 그 관계를 어떻게 정확히 기술할 것인가?
> Galton은 "회귀(regression)"라는 말을 만들었지만,
> 수학적 도구가 부족했다.
>
> Pearson이 그 도구를 만들었다.
> 상관계수, 카이제곱 검정, 히스토그램, 주성분분석 —
> 오늘날 데이터 분석의 기본 어휘 상당수가 Pearson에게서 나왔다.
> 그런데 이 도구들의 바닥에 공통된 발상이 하나 있다.
> **데이터를 공간의 점으로 보는 것.**
>
> Pearson 이전에 통계학은 "요약"의 학문이었다.
> 평균을 구하고, 편차를 재고, 표를 만들었다.
> Pearson이 한 일은 그 숫자들을 좌표로 읽는 것이었다.
> 사람 한 명의 키와 팔 길이를 (x, y) 평면의 점으로 찍으면,
> 수백 명의 데이터가 하나의 점구름(point cloud)이 된다.
> 점구름의 모양이 곧 변수들 사이의 관계다.
> 길쭉하게 늘어져 있으면 상관이 높고, 둥글면 상관이 없다.
>
> 이것은 사고방식의 전환이었다.
> 숫자를 하나씩 보는 대신 공간에 뿌려놓고 **형태를 본다.**
> 히스토그램이라는 시각화 도구를 처음 체계화한 것도 같은 맥락이다.
> 분포를 눈으로 보게 만든 것.
>
> Pearson의 제자 중에 Fisher가 있었다 — 정확히는 제자라기보다
> 같은 학교에서 자란 후배이자 최대의 라이벌이었다.
> 두 사람의 관계는 격렬했다.
> Fisher는 Pearson의 카이제곱 검정에서 자유도 계산이 틀렸다고 공격했고,
> Pearson은 Fisher의 최대우도법을 신뢰하지 않았다.
> 이 충돌은 20세기 통계학을 두 진영으로 갈랐지만,
> 동시에 양쪽 모두를 날카롭게 만들었다.
> Fisher의 이야기는 9장에서 만난다.
>
> Pearson이 연 문은 이것이다:
> 데이터를 점으로, 점들의 집합을 공간의 구조로 읽는 습관.
> 이 장에서 우리가 한 일 — 이미지를 784차원의 점으로,
> 분포를 (μ, σ) 평면의 점으로 만든 것 — 의 뿌리가 거기에 있다.
`,om=`# 거리

2장에서 우리는 분포를 점으로 만들었다.
한국 남성 (174, 5.8)과 네덜란드 남성 (183, 7.1).
(μ, σ) 평면 위의 두 점이다.

점을 찍은 이유는 하나다. 거리를 재기 위해서다.

거리를 잴 수 있으면, 비로소 진짜 질문을 할 수 있다.
내 모델이 현실에서 얼마나 멀리 떨어져 있는가?
한 에폭 학습한 뒤에 그 거리가 줄어들었는가, 늘어났는가?
내 모델과 너의 모델 중 어느 쪽이 현실에 더 가까운가?
학습률을 이만큼 높여도 괜찮은가, 아니면 발산하고 있는가?

기계학습의 거의 모든 판단이 "거리"에 의존한다.

가장 먼저 떠오르는 자는 유클리드 거리다.
(μ, σ) 평면 위의 두 점이니까, 피타고라스 정리로 재면 되지 않을까?
한국 남성 (174, 5.8)과 네덜란드 남성 (183, 7.1).
유클리드 거리는 √((183−174)² + (7.1−5.8)²) ≈ 9.1이다.

그런데 이 숫자가 두 분포의 "다름"을 제대로 재고 있을까?

세 번째 분포를 하나 더 놓아보자.
한국 남성 (174, 5.8)과 "거의 같은" 분포 (174, 12.0).
평균은 같고 표준편차만 두 배로 키웠다.
유클리드 거리는 √((174−174)² + (12.0−5.8)²) = 6.2.
네덜란드 남성까지의 9.1보다 가깝다.

하지만 이 두 분포를 그려보면?
하나는 174cm 부근에 뾰족하게 몰려 있고,
다른 하나는 150cm부터 198cm까지 납작하게 퍼져 있다.
분포의 모양은 완전히 다르다.
반면 한국 남성과 네덜란드 남성은 모양이 비슷하고 위치만 다르다.

유클리드 자는 μ의 차이 9와 σ의 차이 1.3을 같은 무게로 더했다.
그런데 σ가 5.8에서 12.0으로 바뀌는 것과
μ가 174에서 183으로 바뀌는 것은, 분포의 관점에서 같은 크기의 변화가 아니다.
유클리드 거리는 이 차이를 모른다.

확률분포의 공간에서 유클리드 거리가 통했다면,
정보기하학이라는 학문은 필요하지 않았을 것이다.
다른 자가 필요하다.

## 거리에도 종류가 있다

### 한 개념

같은 두 점 사이에도 재는 방법이 여럿이다

### 왜

"공정한 동전과 약간 편향된 동전은 얼마나 다른가?"

심플렉스 위의 세 분포를 생각한다.
A = (0.5, 0.3, 0.2), B = (0.4, 0.5, 0.1), C = (0.1, 0.1, 0.8).

유클리드 거리로 재면 A는 B에 더 가깝다.
그런데 나중에 배울 KL 발산이라는 다른 자를 대면?
답이 뒤집힐 수 있다. 같은 세 점인데, 자를 바꿨을 뿐이다.

2장에서 "어떤 공간에 놓느냐"가 중요하다고 했다.
같은 공간 안에서도 "어떤 자를 쓰느냐"에 따라
보이는 구조가 달라진다.
공간을 바꾸는 것과 자를 바꾸는 것은 같은 동전의 양면이다.

### JSX
viz: ch03/euclidean-vs-kl

심플렉스 위에 세 점 A, B, C.
왼쪽 패널 — 유클리드 거리로 잰 A-B, A-C를 선분과 수치로 표시.
오른쪽 패널 — KL 발산으로 잰 같은 쌍을 화살표와 수치로 표시.
점을 드래그하면 두 패널의 순위가 뒤집히는 배치를 찾을 수 있다.
→ 유클리드에서는 A가 B에 더 가까운데,
  KL에서는 A가 C에 더 가까운 배치를 찾아보자.

### 파이썬

np.linalg.norm(p1 - p2) 한 줄. 단순.

### 수확

"거리에도 종류가 있다."
거리라면 당연히 왕복이 같아야 한다고 느낀다.
A에서 B까지와 B에서 A까지가 같다는 것.
그 "당연함"을 의심해보자.

## 비대칭 거리 — 무빙워크가 있는 도로

### 한 개념

방향에 따라 거리가 다를 수 있다

### 왜

"A에서 B까지의 거리와 B에서 A까지의 거리가 다르다니?"

### 비유

무빙워크(moving walkway) —
공항에서 무빙워크를 타고 가면 3분,
거슬러 걸어오면 10분. 같은 두 지점인데 방향에 따라
"체감 거리"가 다르다.
도시 전체에 무빙워크가 깔린 도로망을 상상하면,
A→B→C→A 한 바퀴의 총 시간이 0이 아닐 수 있다.
이런 도로에서는 "최단경로"의 개념 자체가 달라진다.

대칭이 당연하다고 느끼는 건,
우리가 평평한 바닥 위를 걷는 데 익숙하기 때문이다.
그런데 경사진 언덕을 생각해보자.
올라가는 것과 내려오는 것은 같은 거리가 아니다.
확률분포의 공간은 — 곧 보겠지만 — 평평하지 않다.

### JSX
viz: ch03/asymmetry

격자 도시 위에 무빙워크의 방향과 세기를 표현.
두 점 사이를 클릭하면 A→B와 B→A의 시간이
다르게 표시. "도시를 기울인다"는 느낌.

### 파이썬

비대칭 거리 행렬 구현. d(i,j) ≠ d(j,i) 확인.

### 수확

"비대칭 거리는 이상한 게 아니라 방향이 있는 거리"

## KL 발산 — 확률의 무빙워크

![무빙워크: 방향에 따라 다른 거리](/images/chapters/ch03-moving-walkway.svg)

![공항 무빙워크 — 같은 거리도 방향에 따라 다르다](/images/chapters/moving-walkway-photo.jpg)

### 한 개념

확률분포 사이의 구체적인 비대칭 거리 하나를 배운다

### 왜

"확률분포의 세계에서 무빙워크는 어느 방향으로 깔려있나?"

### 비유

"비대칭 거리"의 무빙워크를 확률에 적용 —
"흔한 분포에서 희귀한 분포 쪽으로"는 멀고,
"희귀한 분포에서 흔한 분포 쪽으로"는 가깝다.
넓은 분포(무지) 안에 좁은 분포(확신)가 들어있으니까.

2장의 키 분포로 돌아가보자.
한국 남성의 키 분포 p와, 이것을 약간 잘못 추정한 모형 q가 있다.
KL(p‖q)는 "현실이 모형을 심판하는 거리"다.
현실에서 흔히 일어나는 키(170~178cm 부근)를
모형이 과소평가하고 있다면, 그 벌점이 크다.
반대로 KL(q‖p)는 "모형이 현실을 심판하는 거리"다.
모형이 신경 쓰는 영역이 다르니까, 같은 두 분포인데 값이 다르다.

### p와 q의 역할

이 교재에서 p는 항상 "현실"(진짜 분포), q는 항상 "지도"(모형)다.
KL(p‖q)는 "현실 p의 눈으로 본, 지도 q의 부정확함".
KL(q‖p)는 "지도 q의 눈으로 본, 현실 p와의 괴리".
같은 두 분포인데, 누구의 눈으로 보느냐에 따라 거리가 다르다.

### JSX
viz: ch03/asymmetry

심플렉스 위에서 두 점 사이의 KL(p‖q)와 KL(q‖p)를
화살표 굵기로 표현. 점을 옮기면 비대칭이 변화.
→ 두 점을 가깝게 놓았다가 하나를 꼭짓점 쪽으로 밀어보자.
  화살표 굵기의 비대칭이 어떻게 변하는가?

### 파이썬

KL 발산 직접 구현. p와 q를 바꿔보며 값 비교.

### 수확

"KL은 확률 세계의 무빙워크 거리"
KL이 정확히 무엇을 재는지 — 그 정체는 아직 말하지 않았다.
"놀라움"을 세는 법을 배운 뒤에야 답할 수 있다.
5장에서.

## 발밑의 평탄함 — KL이 숨기고 있던 대칭

### 한 개념

두 분포가 무한히 가까워지면,
비대칭적인 KL 발산이 완벽히 대칭적인 거리로 변한다.
그 대칭적 거리의 정체가 피셔 정보다.

### 왜

"KL은 비대칭이라 '진짜 거리'가 아니라고 했다.
그런데 아주 가까운 두 분포 사이에서는 대칭이 된다고?
그 '찰나의 대칭'이 도대체 뭔가?"

다시 한국 남성의 키 분포로 돌아가자.
(174, 5.8)과 (174.01, 5.801).
거의 같은 분포다. 이 두 점 사이에서
KL(p‖q)와 KL(q‖p)를 계산하면 — 거의 같다.
비대칭이 사라진다.

### 비유

지구와 평면 —
지구 전체는 둥글고, 서울에서 뉴욕과 뉴욕에서 서울은
경로에 따라 다른 거리를 가질 수 있다.
그러나 내 발밑의 10미터는 평평하다.
평평한 바닥에서는 앞으로 10걸음이나 뒤로 10걸음이나 같다.
KL 발산의 세계에서도 같은 일이 일어난다.
두 분포가 충분히 가까우면, 비대칭이 사라지고
평탄한 유클리드형 거리가 드러난다.

### JSX
viz: ch03/fisher-local

심플렉스 위에서 두 점 p, q를 찍고,
q를 p에 점점 가까이 가져가는 슬라이더.
[왼쪽] KL(p‖q)와 KL(q‖p) 두 값을 실시간 표시.
멀 때는 차이가 크지만, 가까워질수록 두 값이 수렴.
[오른쪽] 그 비율 KL(p‖q)/KL(q‖p)이 1로 수렴하는 그래프.
→ q를 p 바로 옆까지 끌어보자.
  두 화살표의 굵기가 같아지는 순간이 있는가?

### 파이썬

dtheta를 10⁻¹, 10⁻², ..., 10⁻⁶으로 줄이면서
KL(p_θ ‖ p_{θ+dθ})를 계산.
동시에 ½ · dθᵀ · I(θ) · dθ (피셔 이차형식)를 계산.
둘의 비율이 1로 수렴함을 수치적으로 확인.

    # 이 수치 실험을 한 줄로 쓰면:
    # KL ≈ ½ dθᵀ I(θ) dθ
    # "전역적 놀라움이 국소적으로는 이차형식이 된다"

D_KL(p_θ ‖ p_{θ+dθ}) ≈ ½ Σᵢⱼ I(θ)ᵢⱼ dθⁱ dθʲ

### 수확

"KL 발산의 발밑에는 대칭적인 거리가 숨어 있다.
그 거리를 만드는 행렬이 피셔 정보 행렬이다."

그런데 잠깐 — 우리는 아직 두 점 사이를 "걸어가는 방법"을 모른다.
거리를 재는 건 지도 위에 자를 대는 것이고,
걷는 건 실제로 발을 떼는 것이다.
같은 두 점을 잇는 길이 하나가 아니라면?

---

> ### 인물 이야기 — Solomon Kullback과 암호해독의 거리
>
> ![Solomon Kullback](/images/portraits/solomon-kullback.jpg)
>
> 1930년대, 워싱턴 D.C.
> Solomon Kullback은 조지워싱턴 대학에서 수학 박사학위를 받은 뒤
> 미 육군의 신호정보국(Signal Intelligence Service)에 들어갔다.
> 동료에는 같은 대학 출신의 Richard Leibler가 있었다.
> 둘이 하는 일은 외국 통신문의 암호를 깨는 것이었다.
>
> 암호해독에는 통계가 필요했다.
> 독일어 텍스트에서 글자가 나타나는 빈도와
> 암호문에서 기호가 나타나는 빈도를 비교해야 했다.
> "이 암호문이 독일어로 쓰인 것인가, 일본어로 쓰인 것인가?"
> 이 질문의 핵심은 — 두 빈도 분포가 얼마나 다른가?
>
> 이것이 문제의 맥락이었다.
> 추상적인 수학적 호기심이 아니라,
> 전쟁 중에 적의 통신을 읽어야 하는 절박한 필요.
> "분포 사이의 거리"는 누가 더 정확한 해독 가설을 갖고 있는가를
> 판별하는 도구였다.
>
> Kullback과 Leibler가 1951년에 발표한 논문
> "On Information and Sufficiency"는 이 경험의 결실이었다.
> 논문의 핵심 아이디어는 간단했다.
> 가설 H₁이 맞다고 믿을 때, 가설 H₀에서의 놀라움과
> H₁에서의 놀라움의 차이를 평균 내면 —
> 그것이 H₀와 H₁ 사이의 "정보 거리"다.
>
> 이 양은 대칭이 아니었다.
> "독일어라고 믿고 일본어 가설을 평가하는 것"과
> "일본어라고 믿고 독일어 가설을 평가하는 것"은 다르다.
> 비대칭은 버그가 아니라 본질이었다.
> 암호해독에서 "내가 서 있는 가설"이 무엇인가에 따라
> 증거의 무게가 달라지는 것은 자연스러운 일이니까.
>
> 흥미로운 것은, 이 아이디어의 뿌리가 더 깊다는 점이다.
> 같은 양을 Shannon은 1948년에 이미 다른 맥락에서 만나고 있었고,
> 더 거슬러 올라가면 통계역학에서 Boltzmann과 Gibbs가
> 엔트로피의 상대적 비교로 사용하고 있었다.
> 하지만 "두 분포 사이의 거리"라는 관점에서
> 이 양을 명시적으로 정의하고 성질을 체계적으로 분석한 것은
> Kullback과 Leibler가 처음이었다.
>
> Kullback은 이후 NSA(국가안보국)에서 30년 넘게 일하며
> 통계적 암호분석의 기초를 놓았다.
> 그의 이름이 붙은 KL 발산은
> 기계학습에서 손실함수의 핵심 재료가 되었고,
> 정보기하학에서는 공간의 구조를 결정하는 자가 되었다.
> 암호해독가의 실용적 질문이 수학의 근본 개념이 된 셈이다.
`,sm=`# 길

3장에서 우리는 거리를 재는 자가 여럿이라는 것을 보았다.
그리고 마지막에 이런 질문을 남겼다.
두 점 사이를 "걸어가는 방법"은 하나인가?

유클리드 공간이라면 답은 간단하다. 두 점 사이의 직선은 하나다.
그런데 확률분포의 공간에서는 직선이 두 개다.
같은 양 끝점을 잇는데, 전혀 다른 곳을 지나간다.

## 섞을 것인가, 곱할 것인가

### 왜

왜 두 개인가?
두 모델을 합치는 방법이 두 가지이기 때문이다.

모델 A와 모델 B가 있다. 둘 다 쓸 만하다.
합쳐서 더 좋은 모델을 만들 수 있을까?

방법 1 — **섞는다**(앙상블):
  "60%의 확률로 A의 예측을 따르고, 40%의 확률로 B를 따르자."
  두 모델이 공존한다. 어느 쪽도 사라지지 않는다.

방법 2 — **곱한다**(베이즈 업데이트):
  "A가 가능하다고 한 영역과 B가 가능하다고 한 영역의 교집합만 남기자."
  두 모델이 동의하는 곳만 살아남는다.

섞으면 OR. 곱하면 AND.
이 두 연산이 각각 자기만의 길을 만든다.

### 비유

![빛을 섞는다 vs 물감을 섞는다](/images/chapters/ch04-light-paint-mixing.svg)

비유: 빛의 삼원색과 물감의 삼원색 —
같은 "색을 섞는다"인데, 두 가지 전혀 다른 규칙이 있다.

그런데 잠깐 — 왜 하필 색인가?
색은 파장별 세기의 분포다.
빨간 빛은 긴 파장 쪽이 높은 분포,
파란 빛은 짧은 파장 쪽이 높은 분포.
"색을 섞는다"는 곧 "분포를 섞는다"다.
그리고 그 섞는 규칙이 정확히 두 개다.

방법 1 — 빛을 섞는다 (가산혼합, OR):
  빨강 빛과 초록 빛을 합치면 노랑.
  전부 합치면 흰색. 더할수록 밝아진다.
  각 파장의 세기를 더한다. 물리적으로 덧셈.
  두 빛이 공존하는 세계 — 아무것도 사라지지 않는다.

방법 2 — 물감을 섞는다 (감산혼합, AND):
  빨강 물감과 파랑 물감을 섞으면 보라.
  전부 섞으면 검정. 섞을수록 어두워진다.
  물감은 특정 파장을 흡수하는 필터다.
  두 필터를 겹치면 각 파장의 투과율이 곱해진다.
  0.8 × 0.3 = 0.24. 물리적으로 곱셈.
  겹치는 파장만 살아남는 세계.

같은 두 색에서 출발하는데,
합치는 규칙이 다르면 결과가 다르다.
빛은 더하고, 물감은 곱한다.

그리고 삼원색이니까 — 3차원.
2장의 심플렉스와 바로 연결된다.

### 확률로의 번역

색이 파장별 세기의 분포였듯,
확률분포는 사건별 가능성의 분포다.
구조가 같으니 섞는 규칙도 그대로 옮겨진다.
OR = 혼합(mixture): (1-t)·p + t·q
  두 분포의 가중평균. 덧셈.
  두 봉우리가 다 살아 있다 — 빛이 밝아지듯.
AND = 결합(product): p^(1-t) · q^t / Z
  두 분포의 가중곱. 곱셈.
  겹치는 영역만 살아남는다 — 물감이 어두워지듯.

하나는 더하고, 하나는 곱한다.
이 두 연산이 6장과 7장의 주제다.

### 그리고 번역기

곱셈은 다루기 어렵다. 0.1퍼센트의 확률이 10번만 겹쳐져도 컴퓨터가 쉽게 다룰 수 없는 숫자가 되어버린다.
그런데 log를 씌우면 곱이 덧셈이 된다.
log(p · q) = log p + log q.
곱셈의 세계에서 일어나는 일을
덧셈의 언어로 읽어주는 통역사 — 그것이 log다.
이 장의 두 번째 길은 이 통역사 위에 서 있다.

### 수확

"조합에는 두 규칙이 있다. OR과 AND.
이것이 두 개의 길을, 두 개의 기하학을 만드는 뿌리다."

## 첫 번째 길 — 덧셈으로 걷기

### 한 개념

두 분포를 섞으면(mixture) 경로가 생긴다

### 왜

"공정한 동전과 편향된 동전의 '사이'에 있는 동전은 뭔가?"

### 비유

비유: 칵테일 — 진토닉과 마티니의 비율을 t:1−t로 바꾸면
중간에 무한히 많은 음료가 있다.
두 원재료는 그대로, 비율만 변한다.

### JSX
viz: ch04/two-paths

심플렉스 위에 두 점 p₁, p₂를 찍고
t 슬라이더를 움직이면 그 사이의 직선 위로
점이 이동. 대응하는 막대그래프가 실시간 변화.
→ t 슬라이더를 0.5에 놓아보자. 두 중간점의 막대그래프가 다른가? 어느 쪽이 봉우리가 더 뾰족한가?

### 파이썬

(1-t)*p1 + t*p2 를 코드 한 줄로. 경로 시각화.

### 수확

"확률을 더하면 직선이 된다"

## 두 번째 길 — 곱셈으로 걷기

### 한 개념

두 분포를 곱하면 다른 경로가 생긴다

### 왜

"같은 두 점을 잇는 다른 길이 있다?"
왜 log인가 — 곱셈을 덧셈으로 바꾸는 렌즈:

### 비유

비유: 리히터 규모와 데시벨 —
  지진의 에너지는 10배씩 커지는데, 리히터 규모는 1씩 올라간다.
  소리의 세기는 10배씩 커지는데, 데시벨은 10씩 올라간다.
  pH도 마찬가지. 수소이온 농도는 10배씩 변하는데
  pH는 1씩 변한다.
  이것들은 전부 같은 장치 — log.
  "곱으로 커지는 세계를 더하기로 느끼게 해주는 렌즈."

### 비유

비유: 두 사진의 이중노출 — 한 사진을 t만큼 투명하게,
다른 사진을 1−t만큼 투명하게 해서 겹치면,
칵테일과 달리 두 이미지가 간섭한다.
밝은 곳끼리 겹치면 더 밝아지고, 한쪽이 어두우면 눌린다.

### JSX
viz: ch04/midpoint

"첫 번째 길"과 같은 두 점, 같은 슬라이더 t.
이번에는 p₁^(1-t) · p₂^t / Z 경로.
심플렉스 위에서 덧셈 경로(직선)와 곱셈 경로(곡선)를
나란히 그려서 "같은 양 끝점, 다른 경로"를 시각화.

### 파이썬

exp((1-t)*log(p1) + t*log(p2)) 를 정규화.
두 경로의 중간점 분포를 겹쳐 그리기.

### 수확

"곱셈을 덧셈으로 바꾸는 렌즈가 있다. 그것이 log다.
곱셈의 길은 로그 공간의 직선이다"

## 두 길이 다른 곳을 지나간다

### 한 개념

같은 양 끝점인데 중간이 다르면, "중간"의 정의가 다르다

### 왜

"두 길의 중간점은 각각 뭘 의미하는가?"

### 비유

비유: 산술평균 vs 기하평균 — 4와 16의 산술평균은 10,
기하평균은 8. 같은 "가운데"인데 다르다.

중간점의 분포를 눈으로 보면 차이가 극적이다.
m-중간점(덧셈의 중간)은 두 봉우리가 다 살아 있다.
  "개일 수도 있고 고양이일 수도 있다" — OR.
e-중간점(곱셈의 중간)은 겹치는 부분만 살아남는다.
  "개이면서 동시에 고양이처럼 보이는 것만 남는다" — AND.

3장에서 유클리드 공간이었다면
정보기하학은 필요 없었을 것이라 했다.
같은 맥락에서 — 유클리드 공간이었다면
두 점 사이의 직선은 하나뿐이다.
직선이 두 개라는 것 자체가,
이 공간이 평평하지 않다는 신호다.

### JSX
viz: ch04/color-interpolation

두 경로의 t=0.5 지점의 분포를 나란히 막대그래프로.
m-중간점은 두 봉우리가 살아 있고(또는),
e-중간점은 겹치는 부분만 살아남음(그리고).

### 파이썬

두 중간점 분포의 엔트로피를 직접 계산해서 비교.

## 호기심 상자: 색공간에서 보는 네 개의 "중간"

### 도입

"섞을 것인가, 곱할 것인가"에서 우리는 빛(덧셈)과 물감(곱셈)을 보았다.
그런데 질문이 하나 더 있다.
색을 표현하는 좌표계도 하나가 아니다.

### 두 좌표계

RGB — 빨강, 초록, 파랑의 세기.
  컴퓨터 모니터가 쓰는 좌표.
  (255, 0, 0)은 빨강, (0, 255, 0)은 초록.
HSV — 색상(Hue), 채도(Saturation), 명도(Value).
  화가가 쓰는 좌표.
  "빨간색을 좀 탁하게" = 채도를 낮추는 것.

같은 색이다. 그런데 주소가 다르다.
서울시 강남구 역삼동 123 = 37.5°N, 127.0°E.
(이건 "자연모수 θ"와 "기대모수 η"에서 θ와 η로 다시 만난다.)

### 네 개의 보간

같은 양 끝 색 두 개를 고르고, 네 가지 방법으로
중간색을 만든다.

① RGB 덧셈 — RGB 좌표에서 직선 보간.
  (1-t)·RGB₁ + t·RGB₂
② RGB 곱셈 — RGB 좌표에서 기하평균.
  RGB₁^(1-t) · RGB₂^t
③ HSV 덧셈 — HSV 좌표에서 직선 보간.
  (1-t)·HSV₁ + t·HSV₂
  (Hue는 원형이므로 짧은 호를 따라 보간)
④ HSV 곱셈 — HSV 좌표에서 기하평균.
  HSV₁^(1-t) · HSV₂^t

네 경로의 중간색(t=0.5)이 전부 다르다.

### JSX

컬러 피커 두 개로 양 끝점 색을 선택.
네 개의 가로 그라디언트 막대가 나란히 표시:
  "RGB + 덧셈" / "RGB + 곱셈" /
  "HSV + 덧셈" / "HSV + 곱셈"
t 슬라이더를 움직이면 네 막대 위의 커서가 동시에 이동.
t = 0.5 일 때 네 중간색을 정사각형 스와치로 나란히 비교.

특히 재미있는 양 끝점 조합의 프리셋 제공:
  - 빨강 ↔ 파랑: HSV 보간은 보라를 거치지만
  RGB 보간은 탁한 갈색을 거침
  - 노랑 ↔ 시안: 곱셈은 어두워지고 덧셈은 밝아짐
  - 보색 관계 (빨강 ↔ 시안): 네 경로의 차이가 극대화

### 파이썬

RGB↔HSV 변환 구현.
네 보간을 각각 코드로 작성하고
t = 0, 0.25, 0.5, 0.75, 1 의 다섯 지점 색을
4×5 격자로 시각화.

### 이것이 왜 중요한가

"같은 두 점 사이의 '중간'이
좌표계에 따라 다르고, 연산에 따라 다르다."
이 장에서 우리는 연산이 다르면 중간이 다르다는 것을 보았다.
여기서 한 층 더: 좌표계가 달라도 중간이 다르다.
좌표계 × 연산 = 기하학.
이 감각을 가지고 Part VI로 가면,
θ 좌표의 직선과 η 좌표의 직선이
다른 경로를 그린다는 것이 놀랍지 않게 된다.

### 수확

"산술평균은 혼합(앙상블)의 씨앗이고,
기하평균은 곱셈(베이즈 업데이트, 학습)의 씨앗이다.
그리고 좌표계가 달라지면 '직선' 자체가 달라진다.
연산 × 좌표계 — 이 두 선택이 기하학을 결정한다."

두 길의 중간이 다르다는 건 보았다. 그런데 왜 하필 이 두 연산인가?
덧셈은 그렇다 치고, 곱셈은 왜 특별한가?
— 그 답은 "놀라움"이라는 개념에 들어 있다.
독립사건 두 개가 동시에 일어나면, 놀라움은 더해져야 한다.
그리고 확률은 곱해진다.
곱을 합으로 바꾸는 함수. 이미 만났다. log.
그런데 왜 하필 log인지를 정직하게 답하려면, 놀라움을 먼저 정의해야 한다.

---

> ### 인물 이야기 — Amari Shun-ichi와 "두 개의 연결"
>
> ![Amari Shun-ichi](/images/portraits/amari.jpg)
>
> 1950년대, 도쿄 대학.
> 아마리 슌이치(甘利俊一)는 공학부에서 신경망을 연구하는 대학원생이었다.
> 당시 신경망 연구는 퍼셉트론의 시대였다.
> 입력과 출력 사이의 가중치를 어떻게 조정할 것인가 —
> 이것이 핵심 문제였고, 문제의 언어는 최적화였다.
>
> 그런데 Amari는 이상한 점을 발견했다.
> 가중치를 조금 바꿨을 때, 신경망의 출력 분포가 바뀌는 정도가
> 가중치 공간의 위치에 따라 달랐다.
> 어떤 곳에서는 한 걸음이 큰 변화를 만들고,
> 다른 곳에서는 같은 한 걸음이 거의 아무 변화도 만들지 않는다.
> 유클리드 거리로 재면 같은 크기의 걸음인데,
> 분포의 관점에서는 전혀 같지 않았다.
>
> 이 관찰이 Amari를 미분기하학으로 이끌었다.
> 파라미터 공간이 평평하지 않다면, 리만 기하학의 도구가 필요하다.
> Rao가 1945년에 Fisher 정보를 리만 계량으로 읽은 것을
> Amari는 재발견하고, 거기서 훨씬 더 멀리 나아갔다.
>
> 결정적인 발견은 1980년대에 왔다.
> 리만 계량이 하나여도, 그 위에 정의할 수 있는 **연결(connection)**이
> 하나가 아니라는 것이었다.
> 연결이란 "이 점에서 저 점으로 걸어갈 때 방향을 어떻게 비교할 것인가"를
> 결정하는 규칙이다.
> 같은 땅 위에서도 나침반의 규칙이 다르면 다른 길이 보인다.
>
> Amari는 확률분포의 공간에 자연스러운 연결이 정확히 한 쌍 —
> 혼합(mixture)의 연결과 지수(exponential)의 연결 — 이 있음을 보였다.
> 그리고 이 두 연결이 서로 쌍대(dual)라는 것을 증명했다.
> 이 장에서 본 "덧셈의 길"과 "곱셈의 길"이 바로
> 그 두 연결 각각이 만드는 측지선이다.
>
> 같은 시기, 미국에서 Bradley Efron이 독립적으로
> "통계적 곡률"이라는 개념을 도입하고 있었다.
> 추정 문제의 난이도가 파라미터 공간의 곡률과 관련된다는 관찰이었다.
> Amari와 Efron은 서로 다른 출발점에서 같은 산에 올라가고 있었다.
> Amari는 미분기하학의 언어로, Efron은 통계학의 언어로.
>
> Amari의 작업은 1985년 저서 *Differential-Geometrical Methods in Statistics*로
> 결정화되었다. 이 책이 "정보기하학(information geometry)"이라는 분야에
> 이름을 붙이고 체계를 준 것이다.
> 신경망의 학습 규칙에서 출발한 질문이
> 확률, 기하학, 최적화를 관통하는 이론이 되기까지 —
> 그 여정의 열쇠는 "두 개의 연결"이라는 발견이었다.
`,am=`# 같은 세계, 다른 눈

---

여기까지 우리는 확률분포의 공간을 걸어다녔다.

점이 있었다. 분포 하나가 삼각형 위의 점 하나였다.
거리가 있었다. 같은 두 점인데 방향에 따라 멀기가 달랐다.
길이 두 개 있었다. 같은 양 끝점을 잇는데,
하나는 더하면서 걷고, 하나는 곱하면서 걸었다.

그런데 이 공간의 높낮이를 아직 모른다.

어디가 높고 어디가 낮은지.
왜 어떤 분포가 다른 분포보다 특별한지.
심플렉스의 한가운데가 왜 꼭짓점과 다른지.
균등분포가 뭔가 "많아" 보이는 이유가 뭔지.

그 높낮이를 읽으려면 새로운 눈이 필요하다.

기하학의 눈은 공간과 길을 보았다.
이제 열리는 눈은 그 위에 새겨진 숫자를 읽는다.
놀라움이라는 숫자. 정보라는 숫자.

완전히 다른 출발점에서 시작한다.
기하학 편에서 쌓은 도구를 잠시 내려놓자.
다음 장의 첫 질문은 기하학과 무관한, 독립적인 질문이다.

"예상 밖의 일이 일어났을 때, 그 놀라움을 숫자로 쓸 수 있는가?"

---
`,um=`# 놀라움과 정보

3장에서 KL 발산이라는 비대칭 거리를 만났다.
KL(p‖q)는 숫자를 내뱉었다. 그런데 그 숫자가 정확히 무엇을 재는지는
아직 말하지 않았다. KL의 수식 안에는 log가 들어 있다.
왜 하필 log인가? 그 답은 "놀라움"이라는 개념에서 시작한다.

## 놀라움 — 예상 밖의 일은 정보가 크다

### 한 개념

확률이 낮은 사건이 일어나면 "놀랍다"

### 왜

"해가 뜨는 건 뉴스가 안 되는데 일식은 뉴스가 된다.
놀라움을 숫자로 쓸 수 있나?"

![놀라움: 드물수록 놀랍다](/images/chapters/ch05-surprise-news.svg)

### 비유

비유: 뉴스 가치 — 흔한 사건은 뉴스 안 됨.
"개가 사람 물면 뉴스 안 됨, 사람이 개 물면 뉴스 됨"

### 왜 -log인가

"놀라움의 척도로 -log를 쓰는 이유는 무엇인가?
1/p도 되고 p²도 될 텐데?
핵심은 이것이다:
독립사건 두 개가 동시에 일어나면 놀라움은 더해져야 한다.
'해가 뜬다'의 놀라움과 '비가 온다'의 놀라움을 합치면
'해가 뜨면서 비가 오는' 놀라움이어야 한다.
독립이면 확률은 곱해진다: P(A∩B) = P(A)·P(B).
곱을 덧셈으로 바꾸는 함수는 log뿐이다.
그래서 -log(p)가 놀라움의 유일한 자연스러운 척도다."

### 이것이 왜 기계학습과 관련되는가?

좋은 모델은 현실에서 흔히 일어나는 일에 놀라지 않는다.
"비가 온다"에 대해 모델이 "그럴 리가!" 하고 놀란다면,
그 모델은 현실을 잘 모르는 것이다.
모델의 놀라움이 클수록 모델이 나쁘다.
이 감각이 곧 손실함수로 이어진다.

### JSX
viz: ch05/surprise

확률값 p를 슬라이더로 → -log(p) 그래프.
p가 작아질수록 놀라움이 급격히 올라가는 곡선.

### 파이썬

surprise = -np.log(p). 다양한 사건의 놀라움 계산.

### 수확

"놀라움 = -log(확률). 이것이 정보량."

## 엔트로피 — 평균 놀라움

### 한 개념

분포 전체의 "평균적 놀라움"이 엔트로피

### 왜

"분포 전체가 얼마나 불확실한지를 숫자 하나로?"

### 비유

비유: 스무고개 — 20개 물건이 균등하면 평균 질문 수 많고,
하나가 거의 확실하면 질문 적다.
평균 질문 수 ≈ 엔트로피.

2장에서 (μ, σ) 평면 위의 점을 드래그하면 분포 모양이 바뀌었다.
σ가 크면 분포가 넓게 퍼져 있다 — 불확실하다 — 엔트로피가 높다.
σ가 작으면 뾰족하다 — 확실하다 — 엔트로피가 낮다.
엔트로피는 그 모양의 "불확실한 정도"에 붙이는 숫자다.

### JSX
viz: ch05/entropy-simplex

심플렉스 위의 점을 움직이면 엔트로피 값이 변하는
히트맵. 가운데(균등)가 가장 높고 꼭짓점이 가장 낮음.
→ 점을 삼각형 한가운데에 놓아보자. 엔트로피 값이 최대가 되는가?

### 파이썬

H = -sum(p * log(p)). 심플렉스 위에서 등고선 그리기.

### 수확

"엔트로피는 심플렉스 위의 높이 지도"

## 교차엔트로피 — 잘못된 코드북

### 한 개념

실제 분포 p인데 q의 코드북을 쓰면 비용이 더 든다

### 왜

"엔트로피와 KL 발산은 무슨 관계인가?"

### 비유

비유: 외국어 사전 — 한국어 빈도에 맞춘 사전은 효율적인데,
영어 빈도에 맞춘 사전으로 한국어를 쓰면 비효율.
그 비효율의 양이 교차엔트로피,
순수한 낭비분만 떼어내면 KL 발산.

딥러닝을 해본 사람이라면 cross-entropy loss라는 이름을 본 적이 있을 것이다.
바로 이것이다.
현실이 p인데 모델이 q라고 주장하면, 그 주장의 비용이 H(p,q).
모델을 학습한다는 건 이 비용을 줄이는 것이다.
H(p)는 현실 자체의 불확실성이라 줄일 수 없고,
줄일 수 있는 건 KL(p‖q) 부분뿐이다.
그래서 cross-entropy를 최소화하는 것과 KL을 최소화하는 것은 같은 일이다.

3장에서 "내 모델이 현실에서 얼마나 먼가"를 물었다.
그 질문의 답이 여기 있다. KL(p‖q)가 그 거리이고,
학습은 그 거리를 줄이는 과정이다.

### JSX
viz: ch05/cross-entropy

p(실제)와 q(코드북) 두 분포를 설정하면
H(p), H(p,q), KL(p‖q) 세 막대가 나란히.
H(p,q) = H(p) + KL(p‖q) 관계가 시각적으로 보임.

### 파이썬

세 양을 직접 계산하여 관계식 검증.

### 수확

"KL = 교차엔트로피 − 엔트로피"
→ "KL 발산"에서 느꼈던 KL이 이제 '무엇을 재는지' 명확해짐

## 간주곡: -log는 강력하다, 그러나

### 한 개념

-log의 볼록성이 정보이론의 부등식들을 만든다.
그런데 -log는 "하나의" 볼록함수일 뿐이다.
볼록함수 일반에 대해 성립하는 더 깊은 구조가 있다.

### 왜

"-log 하나로 KL ≥ 0도 증명하고 젠센 부등식도 나오는데,
왜 볼록함수 '일반론'이 필요한가?"

KL 발산 하나만으로 충분하지 않을까?
충분하지 않다.
디퓨전 모델은 KL 말고 다른 거리를 쓴다.
강화학습에서도, 변분추론에서도 상황에 따라 다른 거리가 등장한다.
거리마다 학습의 성질이 달라진다.
그런데 이 거리들이 전부 하나의 가족에서 나온다 —
볼록함수를 바꾸면 거리가 바뀐다.

### 비유

비유: 망치와 공구함 —
-log는 좋은 망치다. 못을 잘 박는다.
그런데 나사를 만나면? 접착이 필요하면?
망치 하나로는 집을 못 짓는다.
볼록함수의 일반론은 공구함 전체다.
그 공구함 안에 망치(-log)도 있지만,
드라이버(르장드르 변환)도, 수평기(쌍대성)도 있다.

### JSX
viz: ch05/convexity-kl

y = -log(x) 곡선 위에서 두 점을 잇는 할선.
할선이 항상 곡선 위에 있음을 보여주고,
"이 간단한 사실 하나에서 KL ≥ 0이 나온다."

그런 다음 질문 패널:
"그런데 -log 말고 다른 볼록함수 f(x)에서도
같은 부등식이 성립한다면?
→ f-divergence라는 거리 가족이 존재한다.
→ 그 중에서 '접선으로 함수를 다시 쓰는' 기술이
르장드르 변환이다.
다음 장에서."

### 파이썬

-log의 볼록성으로 KL ≥ 0을 3줄로 유도.
그 다음, f(x) = x² 에서도 같은 논법으로
χ² 발산 ≥ 0 을 유도.
"볼록함수마다 발산이 하나씩 태어난다."

### 수확

"-log는 강력하다. 그러나 하나의 사례일 뿐이다.
볼록함수의 세계 전체를 열면 더 많은 것이 보인다.
구체적으로: 볼록함수를 접선의 모음으로 다시 쓸 수 있다면,
원본과 접선의 관계에서 새로운 종류의 대칭이 태어난다.
그 대칭을 '같은 정보를 다른 언어로 쓰는 것'이라 부를 수 있다면?"

---

> ### 인물 이야기 — Shannon, Boltzmann, 그리고 "정보를 세는 법"
>
> ![Claude Shannon](/images/portraits/claude-shannon.jpg)
>
> 1948년, 벨 연구소.
> Claude Shannon이 "A Mathematical Theory of Communication"을 발표했다.
> 이 논문이 풀고자 한 문제는 순수하게 공학적이었다.
> 전화선 하나에 메시지를 최대 얼마나 빨리 보낼 수 있는가?
>
> 이 질문에 답하려면 먼저 "메시지의 양"을 세야 했다.
> 그런데 메시지의 양이란 무엇인가?
> 글자 수? 아니다. "AAAA"는 "정보"가 적고 "XQZW"는 많다.
> 예측 가능한 것에는 정보가 적고, 예측 불가능한 것에는 정보가 많다.
>
> Shannon은 이 직관을 수학으로 만들었다.
> 확률이 p인 사건의 정보량은 -log(p).
> 분포 전체의 평균 정보량 — 엔트로피 — 은 H = -Σ p log p.
> 그리고 전화선의 용량은 이 엔트로피로 표현된다.
>
> 여기서 기묘한 일이 일어났다.
> Shannon이 이 양에 이름을 붙이려고 할 때,
> 수학자 John von Neumann이 조언했다는 유명한 일화가 있다.
> "엔트로피라고 부르게. 두 가지 이유가 있네.
> 첫째, 자네의 불확실성 함수가 통계역학의 엔트로피와 수학적으로 같은 형태이니까.
> 둘째, 아무도 엔트로피가 정확히 뭔지 모르니까,
> 논쟁에서 항상 유리할 걸세."
>
> 농담 반 진담 반이었지만, "수학적으로 같은 형태"라는 부분은 정확했다.
> 70년 전, Ludwig Boltzmann은 전혀 다른 문제를 풀고 있었다.
> 1870년대 빈(Wien).
> 기체 분자 수십억 개가 상자 안에서 날아다닌다.
> 각 분자의 속도를 하나하나 추적하는 것은 불가능하다.
> 대신 "분자들이 어떤 속도 분포를 가지고 있는가"를 묻는다.
>
> Boltzmann의 질문은 이것이었다.
> 수십억 개의 분자가 주어진 총 에너지를 나눠 가지는 방법은 몇 가지인가?
> 그 "방법의 수"의 로그가 엔트로피다.
> S = k ln W — 볼츠만의 묘비에 새겨진 공식.
> W는 미시 상태의 수, k는 볼츠만 상수.
>
> 전화선의 용량을 재는 공학자와
> 기체 분자의 무질서를 재는 물리학자.
> 두 사람이 70년의 간격을 두고 같은 수학에 도달했다.
> 우연이 아니었다.
> 두 문제 모두 "가능한 경우의 수를 세는" 문제였고,
> 경우의 수가 곱으로 커지는 세계에서
> 합으로 셀 수 있는 척도를 원했기 때문이다.
> 곱을 합으로 바꾸는 함수 — log — 가 두 문제에서 같은 이유로 등장한 것이다.
>
> 이 수렴은 우연이 아니라 필연이었다는 것을
> 7장에서 E.T. Jaynes가 명시적으로 보여준다.
> 통계역학과 정보이론이 같은 원리의 두 응용이라는 것을.
`,cm=`# 볼록함수의 쌍대

5장에서 -log가 볼록함수라는 것을 보았다.
그리고 그 볼록성 하나에서 KL ≥ 0이 나왔다.
하지만 -log는 하나의 볼록함수일 뿐이었다.
볼록함수 자체가 가진 구조를 이해하면, 훨씬 더 많은 것이 보인다.

## 볼록 — 그릇의 기하학

![볼록함수와 접선 사이의 간격](/images/chapters/ch06-legendre-seesaw.svg)

### 한 개념
볼록함수란 무엇이고 왜 좋은가

### 왜
"왜 구슬은 그릇 바닥을 찾는데 안장 위에선 못 찾나?"

### 비유
그릇 vs 안장 vs 감자칩 —
그릇에 구슬을 놓으면 바닥을 찾는다(유일한 최소).
안장에 놓으면 옆으로 굴러간다(최소가 아님).

### JSX
viz: ch06/convexity
함수 y = f(x)를 그리고, 위의 두 점을 잇는 직선을 표시.
함수를 바꿔가며(x², x⁴, sin x 등)
"직선이 항상 위에 있으면 볼록"을 체험.

### 파이썬
다양한 함수의 볼록성 판정 (헤시안의 부호 체크).

### 수확
"볼록하면 답이 하나다"

## 젠센 부등식 — 평균의 함수 vs 함수의 평균

### 한 개념
볼록함수에서 f(평균) ≤ 평균(f)

### 왜
"왜 기대값에 먼저 함수를 씌우면 손해인가?"

### 비유
평균 재산의 세금 vs 세금의 평균 —
누진세(볼록함수)에서는 소득을 합쳐서 세금 내면
따로따로 낼 때보다 더 많다.

### JSX
viz: ch06/jensen
볼록함수 f(x) = x^α 위에서 여러 점(데이터)의 위치를 찍으면
"함수값의 평균"(높은 점)과 "평균의 함수값"(낮은 점)을
세로 막대로 비교. 차이가 젠센 갭.
α 슬라이더(1 ~ 4)로 볼록성의 강도를 조절:
α = 1이면 직선(갭 = 0),
α가 커질수록 곡선이 깊어지며 젠센 갭이 벌어진다.
"볼록할수록 불평등이 심해진다"를 손으로 체감.

### 파이썬
몬테카를로로 E[f(X)] ≥ f(E[X]) 체감.

### 수확
"볼록성이 부등식을 만든다" → 정보이론의 부등식들의 뿌리

## 번역의 힘 — 어려운 문제를 쉬운 문제로

### 한 개념
같은 문제를 다른 좌표/언어로 쓰면 풀기 쉬워지는 경우가 있다.
이것이 쌍대성의 실용적 가치이며,
르장드르 변환은 볼록함수에서 그 번역을 수행하는 도구다.

### 왜
"볼록하면 좋다는 건 알겠다. 부등식도 나온다.
그런데 볼록함수를 '다른 언어로 다시 쓰는' 게 왜 필요한가?
원래 언어로 충분하지 않은가?"

3장에서 유클리드 거리가 확률분포 공간에서 통하지 않는다는 것을 보았다.
좋은 자가 필요했다. 마찬가지로, 좋은 번역기도 필요하다.
한쪽에서 어려운 문제가 다른 쪽에서 쉬워지는 번역기.

### 비유
비유 — 세 가지 번역의 사례:
수학과 공학에는 오래된 전략이 하나 있다.
**여기서 어려운 문제를 저기로 보내서 풀고, 답을 다시 가져온다.**

① 직교좌표 → 극좌표
원의 넓이를 구하고 싶다.
직교좌표 (x, y)에서는 적분 범위가 복잡하다.
x² + y² ≤ r²이라는 원의 경계를 x와 y로 표현하면
적분의 위아래 한계가 제곱근 안에 들어간다.
극좌표 (r, θ)로 번역하면?
원의 경계가 그냥 "r ≤ R"이 된다. 한 줄.
적분이 한순간에 풀린다.
문제가 바뀐 게 아니다. 좌표가 바뀌었을 뿐이다.
그런데 한쪽에서 꼬여 있던 것이 다른 쪽에서 풀린다.

② 시간 → 주파수 (푸리에 변환)
복잡한 음파가 있다. 시간 축에서 보면 울퉁불퉁한 곡선이다.
이 곡선에서 "피아노 소리만 빼고 싶다"면?
시간 축에서는 거의 불가능하다. 모든 소리가 뒤엉겨 있으니까.
푸리에 변환을 하면 — 시간의 언어를 주파수의 언어로 번역하면 —
피아노는 특정 주파수 대역에 깔끔하게 모여 있다.
그 대역만 잘라내면 된다. 쉽다.
시간에서 어려운 문제가 주파수에서 쉬워졌다.
답을 구한 뒤 역변환으로 시간으로 돌아오면 된다.

③ 미분방정식 → 대수방정식 (라플라스 변환)
스프링에 매달린 물체의 운동을 기술하는 미분방정식이 있다.
미분방정식을 직접 풀기는 까다롭다.
라플라스 변환을 하면 — 미분이 곱셈이 된다.
미분방정식이 그냥 곱셈과 나눗셈으로 이루어진 대수방정식으로 바뀐다.
대수방정식은 중학생도 풀 수 있다.
풀고 나서 역변환으로 돌아오면 원래 문제의 답이다.

### 공통 패턴
\`\`\`
[원래 세계]  →  변환  →  [다른 세계]
어려운 문제              쉬운 문제
                          ↓ 풀기
[원래 세계]  ←  역변환  ← 답
\`\`\`
변환과 역변환이 짝을 이루고,
한쪽에서 꼬여 있던 것이 다른 쪽에서 풀린다.

### 볼록함수에서의 번역
볼록함수의 세계에도 같은 전략이 있다.
볼록함수 f(x)를 "x의 값으로 보는" 것이 원래 세계다.
같은 함수를 "접선의 기울기로 보는" 것이 다른 세계다.
x에서 어려운 질문 — 예를 들어 "이 함수에 제약 조건을 걸면
최솟값이 어떻게 바뀌는가?" — 이 기울기의 세계에서는
제약 조건이 사라지고 자유로운 최적화가 된다.
그 번역기의 이름이 **르장드르 변환**이다.

볼록함수에서만 작동한다 — 볼록하면 기울기와 점이 일대일 대응이라서
번역이 가역적이기 때문이다. 볼록하지 않으면 역변환이 깨진다.
(극좌표에서 원점이 특이점이 되듯, 비볼록에서는 번역이 일대일이 아니다.)

그래서 젠센 부등식에서 배운 "볼록하면 좋다"에
두 번째 이유가 추가된다.
- 첫 번째: 볼록하면 답이 하나다 (최적화).
- **두 번째: 볼록하면 번역이 가역적이다 (쌍대성).**

### 왜 하필 르장드르인가
왜 하필 르장드르인가 — 다른 번역기들과의 결정적 차이:
극좌표, 푸리에, 라플라스, 그리고 르장드르.
전부 번역기다. 그런데 르장드르는 다른 셋과 성격이 다르다.

**재료가 다르다.**
푸리에와 라플라스는 함수 전체를 적분해서 번역한다.
함수의 모양 전체를 알아야 변환할 수 있다.
국소적 정보로는 안 된다.
르장드르 변환은 한 점에서의 접선으로 번역한다.
기울기 하나. y절편 하나.
적분이 아니라 미분. 전역이 아니라 국소.
이 차이가 나중에 중요해진다.
파라미터 공간의 "국소적 구조" — 한 점 근처에서
접선이 어떻게 생겼는가 — 가 곡률과 거리를 결정하는데(8장, 9장),
르장드르 변환이 그 접선의 언어로 말하는 번역기이기 때문이다.

**변환 자체가 역변환이다.**
푸리에 변환은 역변환 공식이 따로 있다.
변환과 역변환이 다른 수식이다. 라플라스도 마찬가지다.
르장드르 변환은 두 번 적용하면 원래 함수가 돌아온다.
(F*)* = F. 변환 = 역변환.
이것은 원본과 번역본이 **완전히 대등하다**는 뜻이다.
한쪽이 "진짜"이고 다른 쪽이 "그림자"가 아니다.
둘 다 동등하게 진짜다.
이 대칭이 곧 만나게 될 θ와 η의 관계다 —
θ에서 η로 가는 것과 η에서 θ로 돌아오는 것이 같은 연산.
어느 쪽도 더 근본적이지 않다.
시소의 양쪽이 구조적으로 동일한 것.
이 완벽한 대칭이 이 교재 뒷부분 전체를 관통하는
쌍대성의 수학적 뿌리다.

**볼록함수에서만 작동한다 — 그리고 확률의 핵심 함수가 볼록이다.**
푸리에는 주기함수의 세계에서 작동한다.
라플라스는 지수적으로 폭발하지 않는 함수의 세계에서.
극좌표 변환은 어디서든 쓸 수 있지만 원형 대칭이 있을 때만 빛난다.
르장드르 변환은 볼록함수의 세계에서,
그리고 오직 볼록함수에서만 완전히 작동한다.
볼록해야 기울기와 점이 일대일로 대응하고,
일대일이어야 번역이 가역적이다.
그런데 — 5장 간주곡에서 -log가 볼록하다는 걸 보았다.
곧 만나게 될 F(θ)(로그정규화자)도 볼록하다.
확률분포의 세계에서 핵심 함수가 볼록이다.
다른 번역기들은 이 볼록 구조를 모른다.
르장드르 변환은 볼록 구조 위에서 태어난 번역기다.
열쇠가 자물쇠에 맞는 것처럼,
르장드르 변환은 확률의 볼록 구조에 정확히 맞는다.

### 수확
"어려운 문제를 다른 언어로 번역해서 풀고 돌아오는 전략이 있다.
극좌표, 푸리에, 라플라스 — 전부 같은 패턴.
볼록함수의 세계에서 그 번역기가 르장드르 변환이다.
다른 번역기들은 적분으로 번역한다. 르장드르는 접선으로 번역한다.
다른 번역기들은 변환과 역변환이 다르다. 르장드르는 자기 자신이 역변환이다.
그래서 원본과 번역본이 완전히 대등하다 — 이것이 쌍대성의 뿌리다.
그리고 확률의 핵심 함수가 볼록이므로, 이 번역기가 정확히 맞는 열쇠다.
그러면 그 번역기는 구체적으로 어떻게 작동하는가?"

## 르장드르 변환 — 그림자로 원본 복원하기

### 한 개념
볼록함수를 접선의 언어로 완전히 다시 쓸 수 있다

### 왜
"번역기가 존재한다고 했다. 어떻게 작동하는가?
함수를 '점의 모음'이 아니라 '접선의 모음'으로 보면 된다."

### 비유
울타리와 그림자 —
울타리(볼록곡선)에 해가 비치면 바닥에 그림자가 생긴다.
각도를 바꿔가며 그림자를 모으면 울타리를 복원할 수 있다.
각 각도 = 기울기, 그림자 길이 = y절편.
기울기→y절편 함수가 르장드르 변환.

### JSX
viz: ch06/legendre
볼록곡선 위의 점을 움직이면 접선이 그려지고,
(기울기, y절편) 쌍이 오른쪽 좌표계에 점으로 찍힘.
점을 쭉 움직이면 오른쪽에 새로운 곡선(F*)이 완성.

### 파이썬
수치적 르장드르 변환 — F → F* → F 왕복.

### 두 번째 비유
용수철에 매달린 공 —
울타리 비유가 번역기의 기하학적 작동 방식을 보여줬다.
그런데 이 번역기가 추상이 아니라 물리에서 실제로 쓰인다.
속도의 언어와 운동량의 언어 — 역학의 르장드르 변환이 그것이다.
이름이 무서워 보이지만 단순하다.
라그랑지안은 "속도로 쓴 에너지"이고,
해밀토니안은 "운동량으로 쓴 에너지"다.
같은 에너지를 다른 변수로 표현한 것뿐이다.
공이 진동한다. 매 순간 속도 v가 있다.
속도에 질량을 곱하면 운동량 p = mv.
같은 운동의 두 가지 기술(記述).

속도의 언어로 에너지를 쓰면:
라그랑지안 L(v) = ½mv² − V(x).
"속도가 이만큼이면 운동에너지는 이만큼."

운동량의 언어로 에너지를 쓰면:
해밀토니안 H(p) = p²/2m + V(x).
"운동량이 이만큼이면 에너지는 이만큼."

L에서 H로 바꾸는 방법:
p = ∂L/∂v (기울기가 새 좌표가 된다!)
H = pv − L (기울기 × 변수 − 원래 함수)
이것이 르장드르 변환이다.

그리고 항상 성립하는 등식:
L(v) + H(p) = pv
원본과 변환의 합 = 좌표의 곱.
울타리 비유에서 F + F* = θη 였던 것과 같다.

### JSX 보강
viz: ch06/legendre
JSX 보강 — 용수철 시뮬레이션:
화면을 세 영역으로 나눈다.

[왼쪽] 용수철 진동 애니메이션
용수철에 매달린 공이 실시간으로 진동.
현재 위치 x, 속도 v, 운동량 p가 숫자로 표시.
슬라이더: 질량 m, 용수철 상수 k.
→ 질량 m 슬라이더를 천천히 올려보자. 왼쪽 곡선(L)이 뾰족해질 때 오른쪽 곡선(H)은 어떻게 되는가?

[오른쪽 위] L(v) 곡선
포물선 ½mv².
공이 움직일 때마다 곡선 위의 점이 따라 이동.
그 점에서의 접선이 실시간으로 그려짐.
접선의 기울기 = p 가 숫자로 표시.

[오른쪽 아래] H(p) 곡선
포물선 p²/2m.
위에서 구한 p에 대응하는 점이 찍힘.
공이 한 주기를 돌면 두 곡선 위의 점이
각각 자기 곡선을 한 바퀴 훑는다.

[하단 바] 등식 실시간 표시
L = [값] | H = [값] | pv = [값] | L + H = [값]
공이 어느 위치에 있든 L + H = pv 가
항상 성립하는 것을 숫자로 확인.

슬라이더 인터랙션:
질량 m을 키우면 → L(v) = ½mv² 의 곡률이 커지고,
H(p) = p²/2m 의 곡률은 작아진다.
"원본이 뾰족해지면 쌍대가 넓어진다."
이것은 볼록성과 쌍대성의 관계를
손으로 만져보는 것.
("볼록"과 "쌍대성"에서 배운 것의 물리적 체현.)

### 파이썬 보강
scipy로 용수철 운동 시뮬레이션.
매 시간 스텝에서 v, p, L(v), H(p), pv를 계산.
L + H == pv 가 수치적으로 성립함을 테이블로 출력.
m을 바꿔가며 L 곡선과 H 곡선의 모양 변화를 플롯.

### 수확
"하나의 볼록함수 = 두 개의 좌표계에서 본 같은 정보"
그리고 그것은 추상적 등식이 아니라,
용수철 하나가 매 순간 증명하는 물리적 사실이다.

## 쌍대성 — F와 F*는 같은 동전의 양면

### 한 개념
F(θ) + F*(η) = θη 라는 관계

### 왜
"원본과 그림자 사이에 정확한 등식이 성립한다?"

### 비유
시소 — 한쪽이 올라가면 다른 쪽이 내려간다.
F가 커지면 F*가 작아지고, 합은 항상 θη.

### JSX
viz: ch06/duality-identity
θ 슬라이더를 움직이면 F(θ), η, F*(η), θη가
네 개의 막대로 실시간 표시.
F + F* = θη 가 항상 성립하는 것을 확인.

### 파이썬
다양한 볼록함수에서 이 등식을 수치 검증.

### 수확
"이게 바로 쌍대성의 수학적 실체"

그리고 이 이야기는 아직 추상적이다.
F는 아무 볼록함수였고, θ는 아무 변수였다.
용수철의 에너지일 수도 있고, 도시의 교통비용일 수도 있다.

그런데 만약 F가 확률분포에서 태어난 함수라면?
만약 θ가 분포의 모양을 결정하는 파라미터라면?
2장에서 (μ, σ)가 분포를 점으로 만들어주었듯,
θ도 분포를 점으로 만들어주는 좌표다.

놀라운 사실이 있다.
정규분포, 포아송 분포, 베르누이 분포 —
겉모양이 전혀 다른 이 분포들이
전부 같은 골격을 공유한다.
그 골격의 한가운데에 볼록함수 F(θ)가 앉아 있다.
그 골격을 뜯어보지 않을 수 없다.

---

> ### 인물 이야기 — Legendre, Gauss, 그리고 빼앗긴 우선권
>
> ![Adrien-Marie Legendre](/images/portraits/legendre.jpg)
>
> 1805년, 파리.
> Adrien-Marie Legendre는 55세의 수학자였다.
> 프랑스 혁명과 나폴레옹 전쟁을 거치며 재산과 지위를 잃었지만,
> 수학만은 놓지 않았다.
> 이 해에 그는 *Nouvelles méthodes pour la détermination des orbites des comètes*를
> 출판했다. 혜성의 궤도를 관측 데이터에서 결정하는 방법에 관한 책이다.
>
> 문제는 이것이었다.
> 천문학자가 혜성의 위치를 여러 번 관측한다.
> 관측에는 오차가 있다. 어떤 궤도가 이 관측들과 "가장 잘 맞는가"?
> "가장 잘 맞는다"를 어떻게 정의할 것인가?
>
> Legendre의 답: 관측값과 예측값의 차이를 제곱해서 합한 것을 최소화하라.
> 오늘날 우리가 "최소제곱법"이라 부르는 것이다.
> 기계학습에서 가장 기본적인 손실함수 — MSE — 의 원형.
>
> 6년 뒤, 1809년.
> 독일의 Carl Friedrich Gauss가 같은 방법을 자기 책에 실으며
> "나는 1795년부터 이 방법을 쓰고 있었다"고 주장했다.
> 출판은 Legendre가 먼저였지만, Gauss는 자기가 더 일찍 발견했다고 했다.
> 증거는 없었다 — 사적인 메모와 편지뿐.
>
> Legendre는 분노했다.
> "이 방법은 내가 처음 출판한 것이다"라고 공개적으로 항의했지만,
> Gauss의 명성은 이미 압도적이었다.
> 수학사에서 최소제곱법은 "가우스의 방법"으로 더 많이 불린다.
> 이것은 학문의 역사에서 되풀이되는 패턴이다 —
> 발견보다 명성이 이름을 결정하는.
>
> 그런데 Legendre에게는 최소제곱법보다 더 오래 살아남은 것이 있다.
> 이 장의 주인공인 르장드르 변환이다.
> 볼록함수를 접선의 언어로 완전히 다시 쓰는 이 도구는
> Legendre가 만들었고, 이번에는 이름이 제대로 붙었다.
>
> 르장드르 변환은 처음에는 해석역학에서 쓰였다.
> 라그랑지안(속도의 에너지)에서 해밀토니안(운동량의 에너지)으로
> 번역하는 도구로. 그 뒤 열역학에서 핵심이 되었다.
> 내부 에너지, 엔탈피, 헬름홀츠 자유에너지, 깁스 자유에너지 —
> 열역학의 네 포텐셜은 전부 르장드르 변환으로 연결된다.
> 같은 물리를 다른 변수로 볼 때마다 르장드르 변환이 번역기가 된다.
>
> 그리고 이제 정보기하학에서 같은 변환이 세 번째 생을 산다.
> 자연모수 θ에서 기대모수 η로의 번역.
> 로그정규화자 F(θ)에서 음의 엔트로피 F*(η)로의 번역.
> 200년 전의 도구가, 이름을 빼앗긴 수학자의 발명이,
> 확률분포의 기하학에서 양쪽 좌표계를 잇는 다리로 살아 있다.
`,fm=`# 두 눈을 동시에

---

기하학의 눈으로 우리는 공간과 길을 보았다.
점이 있고, 거리가 있고, 같은 두 점을 잇는 길이 두 개 있었다.

정보의 눈으로 우리는 놀라움과 볼록성을 보았다.
놀라움이 숫자가 되었고, 그 숫자가 부등식을 만들었고,
볼록함수를 접선의 언어로 다시 쓸 수 있었다.

지금까지 두 눈은 따로 떠 있었다.
기하학은 기하학대로, 정보는 정보대로.

이제 두 눈을 동시에 뜨면, 풍경이 달라진다.

정규분포, 포아송 분포, 베르누이 분포.
겉모양이 전혀 다른 이 분포들 밑에
같은 골격이 숨어 있다.
그 골격의 한가운데에
볼록함수 하나가 앉아 있고,
그 볼록함수가 좌표를 만들고,
좌표가 두 개의 길을 만든다.

기하학의 좌표와 정보의 볼록성이
하나의 대상 안에서 만나는 지점.

그것이 지수족이다.

다음 장부터, 매 장이 기하학과 정보 양쪽을 동시에 사용한다.
한쪽 눈만으로는 보이지 않던 구조가 보이기 시작한다.

---
`,pm=`# 지수족

6장에서 볼록함수 F와 그 쌍대 F*의 관계를 보았다.
기울기가 새 좌표가 되고, 원본과 쌍대의 합이 좌표의 곱이 된다.
울타리에서 한 번, 용수철에서 한 번 — 같은 구조를 두 번 만났다.

그리고 마지막에 질문을 남겼다.
만약 F가 확률분포에서 태어난 함수라면?
만약 θ가 분포의 모양을 결정하는 파라미터라면?

그 질문의 답이 이 장에 있다.
정규분포, 포아송 분포, 베르누이 분포 — 겉모양이 전혀 다른 이 분포들이
전부 같은 골격을 공유한다. 그 골격의 한가운데에 볼록함수 F(θ)가 앉아 있다.
6장의 추상적 등식이 여기서 구체적 의미를 얻는다.

![최대 엔트로피 원리와 지수족](/images/chapters/ch07-thermos-maxent.svg)

## 패턴이 있는 분포들

### 한 개념

여러 분포가 같은 골격을 공유한다

### 왜

"Bernoulli, Poisson, Gaussian —
동전, 지진 횟수, 키의 분포.
이것들은 세상에서 하는 일이 전혀 다르다.
그런데 수학자들이 이 셋을 같은 가족이라고 부른다.
어디가 같다는 건가?"

### 비유

비유: 레고 —
성, 우주선, 자동차. 겉모양은 완전히 다르다.
그런데 뒤집어 보면 결합부가 같다.
같은 돌기와 홈. 같은 규격.
그래서 성의 부품을 우주선에 끼울 수 있다.

지수족 분포도 그렇다.
겉모양(종 모양, 계단 모양, L자 모양)은 다르지만
뒤집어 보면 세 개의 결합부가 있다:
  θ — 분포의 성격을 결정하는 손잡이 (자연모수)
  t(x) — 데이터에서 뽑아내는 요약 (충분통계량)
  F(θ) — 전체 확률이 1이 되도록 맞추는 균형추 (로그정규화자)
이 세 부품의 결합 규칙이 동일하다:
  p(x) = exp(θ·t(x) − F(θ))
레고 설명서가 하나면 되듯이, 수식도 하나면 된다.

### JSX
viz: ch07/flashcards

JSX: Nielsen-Garcia 플래시카드 —
카드를 넘기면 분포가 바뀐다.
Bernoulli → Poisson → Gaussian → Exponential.
각 카드에서 θ, t(x), F(θ)가 하이라이트되고,
위의 공통 골격 exp(θ·t(x) − F(θ))에서
해당 부품이 깜빡인다.
"겉은 다른데 골격이 같다"를 반복 체험.

→ 카드를 넘길 때마다 분포의 모양이 확 바뀌는데,
  θ·t(x) − F(θ) 구조는 그대로인 것을 확인하자.
  이것이 "같은 가족"의 의미다.

### 파이썬

파이썬: 하나의 함수 exp(θ·t(x) - F(θ))로 여러 분포 생성.
θ, t, F를 바꿔 끼우기만 하면
Bernoulli, Poisson, Gaussian이 전부 나온다.
"코드가 하나면 된다"는 것이 가족의 증거.

### 수확

"지수족 = 같은 골격(θ, t(x), F)을 공유하는 분포의 가족.
정준분해: p(x) = exp(θ·t(x) − F(θ))."

## 충분통계량 — 데이터를 요약하는 마법

### 한 개념

데이터 전체를 보지 않아도 t(x)만 있으면 충분하다

### 왜

"데이터 100만 개를 숫자 두 개로 요약해도 정보 손실이 없다?
직관적으로 말이 안 된다. 어떻게 가능한가?"

### 비유 1

비유 1: 레시피 vs 재료 전체 사진 —
케이크를 만들 때 "밀가루 200g, 설탕 100g"이면 충분.
밀가루 알갱이 하나하나를 사진 찍을 필요 없다.
어떤 밀가루 알갱이가 먼저 들어갔는지,
어떤 알갱이가 봉지 왼쪽에 있었는지는 케이크 맛에 영향이 없다.
레시피(충분통계량)만 있으면 같은 케이크를 만들 수 있다.

### 비유 2

비유 2: 야구 타자의 기록 —
시즌 전체의 모든 타석을 영상으로 가지고 있다고 하자.
하지만 타율을 계산하려면 두 숫자면 된다:
안타 수와 타석 수.
162경기의 영상은 필요 없다.
이 두 숫자가 "타율에 대한 충분통계량"이다.
영상을 지워도 타율에 관해서는 아무것도 잃지 않는다.

2장에서 수십만 명의 키 데이터가 (174, 5.8)이라는 점 하나로
압축되는 것에 감탄했다. 어떻게 가능한가?
답이 여기 있다. 가우시안은 지수족이고,
지수족의 충분통계량은 유한하다.
수십만 개의 데이터가 숫자 두 개 (Σx, Σx²)로 요약되어도
분포의 파라미터에 대한 정보는 한 톨도 사라지지 않는다.
(μ, σ)로의 압축이 가능했던 이유가 바로 이것이다.

### 왜 지수족에서만 이것이 특별한가

모든 분포에 충분통계량이 있긴 하다.
하지만 대부분의 경우 충분통계량은 데이터 전체다 — 요약이 안 된다.
지수족이 특별한 이유는 충분통계량의 차원이 유한하다는 것이다.
가우시안이면 (Σx, Σx²) 두 개.
데이터가 100개든 100만 개든, 숫자 두 개로 충분하다.
이것이 지수족을 "다루기 좋은 가족"으로 만드는 핵심이다.

### JSX
viz: ch07/flashcards

데이터 점들이 하나씩 들어올 때마다 충분통계량이
업데이트되는 애니메이션.
왼쪽에 데이터 점들이 쌓이고(점점 복잡해지고),
오른쪽에 충분통계량 숫자 두 개가 갱신된다.
데이터가 100개가 되어도 오른쪽은 숫자 두 개뿐.
"정보는 보존되면서 복잡성은 사라진다."

→ 데이터가 50개 쌓였을 때와 100개 쌓였을 때,
  오른쪽 숫자의 정밀도가 달라지는가?
  숫자의 개수는 달라지는가?

### 파이썬

파이썬: 가우시안 데이터에서 (Σx, Σx²)만으로 MLE 복원.
데이터 100만 개를 생성하고, 전체 데이터를 버린 뒤
충분통계량 두 개만으로 μ와 σ를 정확히 복원.

### 수확

"지수족이 특별한 이유 = 유한한 충분통계량의 존재.
데이터를 숫자 몇 개로 요약해도 파라미터에 대한 정보가 온전하다."

## 자연모수 θ — 분포의 첫 번째 주소

### 한 개념

θ 좌표계와 그 의미

### 왜

"같은 정규분포를 (μ, σ)로도 쓸 수 있고
다른 방식으로도 쓸 수 있다면,
어떤 방식이 분포의 '진짜 주소'인가?
아니면 진짜 주소 같은 건 없는가?"

### 비유

비유: 집의 주소 — "서울시 강남구 역삼동 123"
이 주소는 행정 구역의 언어다.
주소를 보면 "강남구에 있구나"는 바로 알지만,
"역삼역에서 몇 미터인가"는 바로 안 보인다.
주소 체계는 행정의 편의를 위해 만들어졌다.

θ는 지수족의 "행정 주소"다.
분포의 골격 exp(θ·t(x) − F(θ))에서
θ는 지수 안에 직접 들어앉는 좌표다.
그래서 자연모수(natural parameter)라 부른다.
"이 골격에 가장 자연스럽게 맞는 좌표"라는 뜻이다.

3장에서 (μ, σ) 좌표로 잰 유클리드 거리가
확률분포의 다름을 제대로 재지 못한다는 것을 보았다.
(μ, σ)는 우리에게 직관적이지만,
분포의 기하학에는 맞지 않는 좌표였다.
θ는 그 반대다 — 우리에게는 낯설지만
분포의 골격에는 정확히 맞는 좌표다.

문제는, θ가 직관적이지 않다는 것이다.
가우시안의 θ = (μ/σ², −1/(2σ²)).
이걸 보고 "아, 평균이 3이고 표준편차가 2인 분포!"라고
바로 읽을 수 있는 사람은 없다.
그러나 수학적으로는 이 좌표가 가장 깔끔하다.
곱셈의 길(4장)이 이 좌표에서 직선이 되기 때문이다.

### JSX
viz: ch07/legendre

두 패널 구성.
[왼쪽] (μ, σ) 슬라이더 → 가우시안 분포 모양 변화.
  익숙한 좌표. 직관적. "평균을 오른쪽으로, 폭을 넓게."
[오른쪽] (θ₁, θ₂) 슬라이더 → 같은 분포의 모양 변화.
  낯선 좌표. θ₁을 움직이면 평균과 폭이 동시에 변한다.
  "같은 분포인데 손잡이의 느낌이 다르다."

핵심 체험: 두 패널의 분포가 항상 일치하는 것을 확인.
"좌표가 다를 뿐, 가리키는 분포는 같다."

### 파이썬

파이썬: (μ,σ) → θ = (μ/σ², -1/(2σ²)) 변환 구현.
여러 (μ, σ) 쌍을 θ로 변환하고,
θ에서 다시 분포를 복원하여 원래 분포와 일치하는지 확인.

### 수확

"θ는 지수족의 골격에 맞춘 좌표.
곱셈의 길이 직선이 되는 좌표.
직관적이진 않지만 수학적으로 자연스럽다."

## 기대모수 η — 분포의 두 번째 주소

### 한 개념

η 좌표계와 그 의미

### 왜

"θ가 '행정 주소'라면,
같은 분포를 더 직관적으로 가리키는 좌표는 없는가?
데이터를 보고 바로 읽어낼 수 있는 좌표 말이다."

### 비유

비유: 집의 GPS — "37.5°N, 127.0°E"
GPS 좌표는 물리적 위치를 직접 가리킨다.
주소를 몰라도 좌표만 있으면 찾아갈 수 있다.
그리고 두 집의 GPS를 평균 내면
두 집의 "중간 지점"이 된다 — 직관적으로 자연스럽다.

η는 분포의 "GPS 좌표"다.
η = E[t(x)] — 충분통계량의 기대값.
가우시안이면 η = (E[x], E[x²]) = (μ, μ²+σ²).
데이터의 평균과 이차모멘트.
데이터를 보면 바로 계산할 수 있다.

그리고 두 분포의 η를 평균 내면
혼합분포(4장 "첫 번째 길")의 η가 된다.
덧셈의 길이 η 좌표에서 직선이 되는 것이다.
θ에서는 곱셈이 직선, η에서는 덧셈이 직선.
같은 공간인데 좌표에 따라 "직선"이 다르다 —
4장 "두 길이 다른 곳을 지나간다"의 재발견.

### JSX
viz: ch07/legendre

두 패널 — θ 공간과 η 공간을 나란히.
[왼쪽] θ 공간에서 두 점을 잇는 직선(e-측지선).
  이 직선 위의 각 점에 대응하는 분포가 아래에 표시.
[오른쪽] 같은 두 점을 η 공간에서 잇는 직선(m-측지선).
  이 직선 위의 각 점에 대응하는 분포가 아래에 표시.
"같은 양 끝점인데, θ의 직선과 η의 직선이 다른 경로를 그린다."
4장에서 본 두 길이 여기서 좌표의 언어로 번역된다.

### 파이썬

파이썬: θ → η 변환(∇F 계산)을 수치 미분으로 구현.
가우시안에서 θ = (μ/σ², -1/(2σ²)) →
η = ∇F(θ) = (μ, μ²+σ²) 를 수치적으로 확인.

### 수확

"η는 데이터에서 바로 읽히는 좌표.
덧셈의 길이 직선이 되는 좌표.
θ에서 곱셈이 직선, η에서 덧셈이 직선 —
좌표가 기하학을 결정한다."

## θ와 η를 잇는 다리 — 르장드르 재발견

### 한 개념

θ↔η 변환이 6장의 르장드르 변환이었다!

### 왜

"두 좌표 사이의 변환 공식, 어디서 봤는데..."

### 도입

"르장드르 변환"에서 우리는 속도 v와 운동량 p가
르장드르 변환으로 연결되는 것을 보았다.
p = ∂L/∂v — 기울기가 새 좌표가 되었다.
이제 같은 일이 일어난다.
η = ∇F(θ) — F의 기울기가 새 좌표가 된다.
속도 → 운동량이었던 것이
이번에는 자연모수 → 기대모수다.
구조가 같다. 그래서 같은 이름(르장드르 변환)이다.

### 비유

"아, GPS↔주소 변환기가 바로 그 그림자 이야기!"
6장에서 울타리의 기울기가 새 좌표가 되었다.
여기서 F(θ)의 기울기가 η가 된다.
6장에서 F + F* = θη 가 성립했다.
여기서도 F(θ) + F*(η) = θ·η 가 성립한다.
용수철에서 L(v) + H(p) = pv 였던 것이
이번에는 로그정규화자와 그 쌍대의 관계다.
세 번째 만남 — 같은 패턴이 반복된다.

### JSX
viz: ch07/legendre

θ 슬라이더 → F(θ) 곡선 위의 점 →
접선의 기울기 = η → F*(η) 곡선 위의 대응점.
6장의 시각화를 지수족 구체예에 연결.

하단에 등식 실시간 표시:
F(θ) = [값] | F*(η) = [값] | θ·η = [값]
| F + F* = [값]
6장 용수철에서 L + H = pv 였던 것과 같은 형식.
"같은 등식이 다른 옷을 입고 돌아왔다."

### 파이썬

파이썬: 가우시안/포아송에서 F→∇F=η→F* 수치 검증.
F(θ) + F*(η) = θ·η 가 수치적으로 성립하는지 확인.

### 수확

나선형 학습의 정점 — "모든 것이 연결된다."
6장의 추상적 볼록함수가 지수족에서 구체적 의미를 얻었다.
울타리 → 용수철 → 지수족. 세 번의 만남.
같은 수학적 구조(르장드르 변환)가 세 개의 다른 세계에서
각각 자기 역할을 하고 있었다.

## 접선이 만드는 거리 — 브레그만 발산

### 한 개념

볼록함수의 값과 접선의 예측값 사이의 차이가
하나의 거리를 정의한다. 이것이 브레그만 발산이다.

### 왜

"6장에서 볼록함수의 접선으로 함수를 다시 쓸 수 있었다.
그런데 접선은 완벽하지 않다 — 원래 함수와 차이가 있다.
그 '차이'가 혹시 거리 아닌가?"

### 비유

비유: 절벽 위의 줄자 —
볼록한 절벽 위에 서서 아래를 본다.
접선(내가 서 있는 지점의 기울기대로 쭉 뻗은 판자)은
실제 절벽보다 아래에 있다 (볼록하니까).
내 발밑에서 접선까지의 수직 거리가 0이고,
멀리 떨어진 지점에서는 그 거리가 커진다.
이 "절벽과 접선 사이의 높이 차이"가 브레그만 발산이다.

### JSX
viz: ch07/overview

2D 볼록 곡선(예: F(θ) = log(1 + e^θ), 베르누이의 로그정규화자).
θ₁ 지점을 클릭하면 그 점에서의 접선이 그려진다.
θ₂ 지점을 드래그하면,
F(θ₂)와 접선이 예측하는 값의 차이가
붉은 수직선으로 실시간 표시.
"이 붉은 선의 길이가 브레그만 발산입니다."

→ 그런데 θ₁과 θ₂를 바꾸면?
  접선의 기울기가 바뀌므로 붉은 선의 길이도 바뀐다.
  "브레그만 발산도 비대칭이다!"
  → "3장에서 만난 KL 발산도 비대칭이었다. 우연인가?"

### 파이썬

F(θ) = log(1+exp(θ))에서 브레그만 발산을 직접 구현.
같은 두 베르누이 분포에 대해 KL 발산도 계산.
두 값이 정확히 일치함을 수치 확인.

  # D_Bregman(θ₁, θ₂) = F(θ₁) - F(θ₂) - F'(θ₂)(θ₁ - θ₂)
  # 이것이 KL(p₁ ‖ p₂)와 같다!

5장에서 학습은 교차엔트로피를, 곧 KL 발산을 줄이는 과정이라 했다.
KL 발산이 브레그만 발산이라면, 학습이란 무엇인가?
볼록함수와 접선 사이의 높이 차이를 줄이는 것이다.
모델의 θ를 조금씩 옮겨서,
접선이 볼록함수에 더 바짝 붙게 만드는 것.
손실함수가 줄어든다는 것이
기하학적으로는 접선이 곡선에 가까워진다는 것이었다.

### 수확

"KL 발산은 '볼록함수와 접선 사이의 높이 차이'였다.
KL의 수식이 왜 저런 복잡한 로그 비율 형태인지 —
그 기하학적 기원이 여기 있었다.
3장에서 배운 비대칭 거리, 6장에서 배운 접선과 르장드르 변환,
7장에서 배운 θ 좌표 — 이 세 가지가 여기서 하나로 합류한다."

세 갈래가 합류했다.
그런데 한 가지가 걸린다.
θ를 0.01만큼 바꾸는 것이 어디서나 같은 크기의 변화를 만드는가?
가우시안에서 σ = 0.1일 때의 θ 한 걸음과 σ = 10일 때의 한 걸음이
분포를 같은 만큼 바꾸는가?
JSX에서 직접 해보면 안다 — 같지 않다.
그렇다면 이 좌표들이 사는 공간은 평평하지 않다.
그 공간의 모양을 알아야 한다.

---

> ### 인물 이야기 — E.T. Jaynes와 "확률은 논리다"
>
> ![E.T. Jaynes](/images/portraits/et-jaynes.jpg)
>
> 1957년, 세인트루이스. 워싱턴 대학교.
> 서른 살의 물리학자 Edwin Thompson Jaynes가
> *Physical Review*에 두 편의 논문을 발표했다.
> 제목은 "Information Theory and Statistical Mechanics."
> 이 논문이 던진 질문은 도발적이었다.
>
> 통계역학의 기초는 무엇인가?
> Boltzmann 이래로 답은 "역학"이었다.
> 분자들이 충돌하고 튕기는 역학적 과정의 결과로
> 맥스웰-볼츠만 분포가 나온다는 것.
> 에르고딕 가설, 분자 혼돈 가설 — 물리적 가정들이 필요했다.
>
> Jaynes의 답은 완전히 달랐다.
> 물리가 아니라 논리다.
> 에너지의 평균값만 알고 나머지는 모를 때,
> "가장 편향되지 않은 추측"이 무엇인가를 묻는다면 —
> 엔트로피를 최대화하는 분포를 선택해야 한다.
> 그 결과가 바로 볼츠만 분포다.
> 분자의 충돌이 필요한 게 아니라,
> **"모르는 것에 대해 가장 정직한 진술"이 볼츠만 분포**라는 것이다.
>
> 이것이 최대 엔트로피 원리(MaxEnt)다.
> 그리고 이 원리가 지수족과 직접 연결된다.
> 충분통계량의 기대값을 제약으로 걸고 엔트로피를 최대화하면,
> 결과는 언제나 지수족 분포다.
> 지수족이 왜 특별한가 — Jaynes의 답은 이렇다:
> 지수족은 "주어진 정보만 반영하고 나머지에 대해 최대한 무지한" 분포다.
> 아는 것 이상을 가정하지 않는, 가장 정직한 분포.
>
> 이 관점은 격렬한 논쟁을 불렀다.
> 빈도주의 통계학자들은 확률이 주관적 판단이 아니라
> 객관적 빈도라고 믿었다.
> Jaynes는 확률이 지식 상태의 표현이라고 주장했다.
> 동전이 공정한지 아닌지는 동전의 물리적 성질이 아니라
> 당신이 그 동전에 대해 무엇을 아는가의 문제라고.
>
> Jaynes는 생전에 완성하지 못한 저서 *Probability Theory: The Logic of Science*를
> 남겼다. 2003년, 사후에 출판되었다.
> 이 책의 첫 문장에 가까운 주장 — "확률은 논리의 확장이다" — 은
> 지금도 논란의 대상이지만, MaxEnt 원리 자체는
> 기계학습, 통계물리학, 정보기하학의 교차점에서 살아 있다.
>
> 5장에서 Boltzmann과 Shannon이 같은 수학에 도달한 것을 보았다.
> Jaynes는 그것이 우연이 아님을 명시적으로 보여준 사람이다.
> 통계역학은 정보이론의 한 응용이라는 것.
> 그리고 그 연결의 매듭이 바로 이 장의 주인공 — 지수족 — 이다.
`,dm=`# 구부러진 땅

7장의 마지막에서 질문 하나가 남았다.
θ를 한 걸음 옮기는 것이 어디서나 같은 크기의 변화를 만드는가?
σ가 작을 때의 한 걸음과 σ가 클 때의 한 걸음이 같은가?
같지 않다면 — 이 좌표들이 사는 공간은 평평하지 않다.

평평하지 않은 공간. 수학에서는 이것을 매니폴드라 부른다.

## 평평하지 않은 세계 — 매니폴드의 직관

### 한 개념

매니폴드란 "국소적으로는 평면처럼 좌표를 붙일 수 있지만,
전체적으로는 휘어 있을 수 있는 공간"이다.

![국소적 평면, 전체적 곡면](/images/chapters/ch08-local-flat-global-curved.svg)
그리고 7장에서 본 θ와 η는 같은 매니폴드에 붙인
두 장의 지도였다.

### 왜

"θ를 움직이면 분포가 바뀌고 η를 움직여도 분포가 바뀐다.
두 좌표계가 르장드르 변환으로 연결된다는 건 알겠다.
그런데 이 좌표들이 사는 공간은 대체 어떤 모양인가?
평평한가? 둥근가? 어딘가에 구석이 있는가?"

### 비유

지구본과 세계지도 —

![메르카토르 도법의 왜곡 — 적도의 원과 극지방의 원이 같은 크기인데 지도에서는 다르다](/images/chapters/tissot-mercator.png)
지구는 구면이다. 그런데 우리는 평면 지도로 산다.
서울 근처에서는 지도가 꽤 정확하다.
택시 타고 강남에서 종로까지 가는 데
지구가 둥글다는 사실은 아무 상관이 없다.
그런데 서울에서 뉴욕까지의 최단경로를 찾으려면?
평면 지도 위의 직선은 최단경로가 아니다.
지구본 위의 대원(great circle)이 최단경로다.

매니폴드는 이런 공간이다.
가까이서 보면 유클리드 공간 — 좌표를 붙이고
덧셈 뺄셈을 할 수 있다.
멀리서 보면 휘어 있다 — "직선"이 직선이 아닐 수 있다.

### 핵심 연결

7장에서 θ 좌표와 η 좌표를 배웠다.
이것은 같은 지구본에 메르카토르 도법과
정거원추도법을 각각 입힌 것과 같다.
같은 땅인데 지도가 다르다.
두 지도가 겹치는 영역에서의 좌표 변환 규칙 —
그것이 η = ∇F(θ), 르장드르 변환이었다.
학생은 여기서 깨닫는다:
"7장에서 한 게 좌표 변환이었구나."

### 비유 보강

감귤과 바나나 —
감귤 껍질을 벗기면 — 완전히 평면으로 펼 수 없다.
찢어지거나 구겨진다. 이것이 곡률이 있는 매니폴드.
바나나 껍질은? 의외로 거의 평평하게 펼 수 있다.
원기둥에 가까워서. 곡률이 (거의) 0인 방향이 있다.
"모든 곡면이 같은 정도로 휘어 있는 건 아니다."
이 감각이 9장에서 Fisher 정보 행렬의
고유값이 방향마다 다르다는 것으로 돌아온다.

### JSX

세 패널 구성.

[왼쪽] 3D 곡면 (구면 또는 토러스)
  곡면 위에 격자를 그린다.
  곡면 위의 한 점을 클릭하면
  그 점 근처의 접평면이 반투명하게 표시된다.
  "국소적으로는 평면" — 접평면이 곡면에 딱 붙어 있다.
  점을 다른 곳으로 옮기면 접평면의 기울기가 바뀐다.

[오른쪽] 2D 좌표 패치
  왼쪽 곡면의 일부를 펼친 평면 좌표계.
  곡면 위의 점이 이동하면 좌표가 바뀐다.
  두 개의 좌표 패치를 나란히 보여줄 수 있되,
  겹치는 영역에서 같은 점이 다른 좌표를 갖는 것을 표시.
  "θ와 η처럼 — 같은 점, 다른 주소."

→ 구면 위에서 두 점을 잇는 직선(측지선)을 그려보자.
  평면 좌표 위에서 그 경로는 직선인가?

![측지선과 좌표선의 차이](/images/chapters/ch08-geodesic-vs-coordinate.svg)

### 파이썬

구면 위의 두 점 사이의 대원 경로를 계산.
같은 두 점을 (위도, 경도) 좌표에서 직선으로 이었을 때의
경로와 비교.
"좌표 위의 직선 ≠ 곡면 위의 직선" 을 수치적으로 확인.

### 수확

"매니폴드 = 국소적으로 평면, 전체적으로 곡면.
좌표는 지도일 뿐이다. 지도는 여러 장 있을 수 있다.
θ와 η는 같은 곡면에 붙인 두 장의 지도였다."


## 호기심 상자: 매니폴드 가설 — 실제 데이터는 저차원에 산다

2장에서 매니폴드라는 단어를 처음 꺼냈다.
CNN이 접힌 시트를 펼치는 것이라고,
데이터가 저차원 매니폴드 위에 산다고.
그때는 감각만 가져가자고 했다.
이제 매니폴드가 무엇인지 — "국소적으로 평면,
전체적으로 곡면인 공간" — 을 알았으니,
그 감각에 이름을 붙일 수 있다.

### 매니폴드 가설이란

실제 데이터는 고차원 공간 전체에 퍼져 있지 않고,
그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다.

### 비유 1

종이비행기 —
A4 용지는 2차원 평면이다. 접으면 3차원 공간 속에
존재하는 2차원 표면이 된다.
용지 위의 개미는 여전히 2차원을 걷는다.
데이터는 이 접힌 종이 위의 점이다.
종이 밖의 3차원 공간 대부분은 비어 있다.

### 비유 2

관절 인형 —
관절 인형의 자세는 3차원 공간에서 펼쳐지지만,
실제 자유도는 관절의 수뿐이다. 관절이 10개면 자유도는 10.
고차원 공간 속에 묻힌 10차원 매니폴드다.

### 2장 호기심 상자와의 연결

2장에서 "5만 차원 심플렉스"를 보았다.
매니폴드 가설은 그 위에 한 걸음 더 나아간 주장이다:
의미 있는 분포는 심플렉스 전체가 아니라
특정 구조를 가진 부분영역에 모여 있다.

### 1장 LoRA와의 연결

LoRA의 낮은 랭크(rank)는
"변화가 살고 있는 매니폴드의 차원"에 대한 가설이다.
이 베팅이 놀라울 정도로 자주 맞는다 —
매니폴드 가설이 암묵적으로 성립하기 때문이다.
본격적인 회수는 11장에서 다시 만난다.

### JSX

3D 공간 안에 2D 곡면(스위스 롤)을 표시.
곡면 위에 데이터 점들이 흩어져 있다.
슬라이더: 노이즈를 올리면 점들이 곡면에서 벗어난다.

### 파이썬

sklearn.datasets.make_swiss_roll로 스위스 롤 생성.
PCA vs Isomap 비교 시각화.


## 한 걸음의 크기 — 왜 자가 필요한가

### 한 개념

매니폴드 위에서 거리를 재려면
각 지점마다 "여기서의 한 걸음은 이만큼"을
알려주는 국소적 자(ruler)가 필요하다.
그 자의 정체는 다음 장(9장)에서 밝힌다.

### 왜

"3장에서 KL 발산으로 분포 사이의 거리를 쟀다.
그건 두 점 사이의 '전역적 거리'였다.
그런데 매니폴드 위를 걸어가면서
한 걸음 한 걸음의 크기를 재려면?
좌표의 한 칸이 어디서나 같은 거리인가?"

### 비유

등산 지도의 등고선 —
등산 지도에서 등고선이 빽빽한 곳은 경사가 급하다.
지도 위에서 1cm를 가도 실제로는 거의 못 간다.
등고선이 성긴 곳은 완만하다.
지도 위에서 1cm가 실제로도 넉넉한 거리다.
같은 "지도 위 1cm"인데 실제 거리가 다르다.

그러니까 등산 지도를 제대로 읽으려면
각 지점에서 "여기서의 1cm는 실제로 몇 미터인가"를
알아야 한다. 그 정보가 등고선 간격에 들어 있다.

파라미터 공간도 마찬가지다.
θ를 0.01만큼 바꾸는 것이
어떤 곳에서는 분포를 확 바꾸고
어떤 곳에서는 거의 안 바꾼다.
"파라미터 지도의 등고선 간격"을 알아야
한 걸음의 진짜 크기를 알 수 있다.

3장에서 우리는 이미 이 자의 그림자를 보았다.
KL 발산이 무한히 가까운 두 점 사이에서
대칭적인 이차형식으로 변한다는 것.
그 이차형식을 만드는 행렬이 피셔 정보 행렬이었다.
피셔 정보 행렬이 바로 이 "국소적 자"다.
각 θ 지점에서 "한 걸음이 분포를 얼마나 바꾸는가"를
알려주는 행렬. 9장에서 정식으로 만난다.

### 4장과의 연결

경로의 길이:
4장에서 우리는 두 개의 길을 보았다.
덧셈의 길과 곱셈의 길.
두 길의 "길이"를 비교하고 싶다면?
그러려면 각 지점에서 한 걸음의 크기를 알아야 한다.
같은 두 점 사이를 걸어가는데,
경로의 길이가 다른 이유는 두 가지다:
  ① 경로의 모양이 다르다 (4장에서 봤다)
  ② 걷는 곳마다 한 걸음의 "비용"이 다르다 (여기서 본다)
자(ruler)가 있어야 경로의 길이를 잴 수 있고,
길이를 알아야 "더 짧은 길"을 물을 수 있다.
그 더 짧은 길이 측지선(geodesic)이다.

### 측지선 — 자가 결정하는 "가장 짧은 길"

측지선이란 무엇인가?
평면에서 두 점 사이의 가장 짧은 길은 직선이다.
곡면에서는? 직선이 없다.
대신 "가능한 모든 경로 중에서 길이가 가장 짧은 것"을 고른다.
그것이 측지선이다.

지구 위에서 서울과 뉴욕을 잇는 가장 짧은 경로는
직선이 아니라 대원(great circle)이다 —
비행기가 북극 쪽으로 돌아가는 이유.
지구의 곡률이 "직선"의 의미를 바꿔놓았다.

핵심은: 측지선은 공간의 성질이 아니라 **자(metric)의 성질**이다.
같은 공간 위에서도 자를 바꾸면 측지선이 달라진다.
유클리드 자를 쓰면 직선이 측지선이다.
Fisher 자를 쓰면 다른 곡선이 측지선이 된다.

4장에서 같은 두 점을 잇는 길이 두 개였다.
덧셈의 길과 곱셈의 길.
이 두 길은 각각 다른 자에 대한 측지선이다.
θ 좌표에서 직선인 길(곱셈의 길, e-측지선)과
η 좌표에서 직선인 길(덧셈의 길, m-측지선).

"같은 양 끝점인데 가장 짧은 길이 두 개?"
그렇다. 자가 두 개이므로 측지선도 두 개다.
정보기하학이 특별한 이유가 여기에 있다.
보통의 리만 기하학에는 자가 하나뿐이고 측지선도 하나다.

가우시안 분포의 (μ, σ) 공간에서 이것을 보자.
Fisher 자(9장에서 만난다) 아래에서
두 가우시안을 잇는 측지선은 반원이다(9장에서 확인한다).
유클리드 직선과 전혀 다른 경로.
"좌표에서 가까운 것"과 "분포로서 가까운 것"이 다르기 때문이다.

왜 이것이 중요한가?
경사하강법은 "한 걸음씩 내려가는 것"이다.
그 한 걸음이 어떤 자를 기준으로 하느냐에 따라
내려가는 경로(측지선)가 달라진다.
17장에서 만나는 자연 기울기(natural gradient)는
Fisher 자의 측지선을 따라 걷는 것이다.
유클리드 직선을 따라 걷는 보통의 경사하강법과는
다른 경로를, 다른 속도로 걸어간다.

지금은 한 가지만 기억하자:
**자가 있으면 측지선이 정해진다.
자가 바뀌면 측지선도 바뀐다.
정보기하학에는 자가 두 개이므로 측지선도 두 개다.**

### 7장과의 연결

볼록성이 자를 선물한다:
7장에서 F(θ)는 볼록함수였다.
6장에서 볼록함수는 "그릇"이었다.
그릇의 곡률은 어디서나 같은가?
바닥이 넓은 그릇과 바닥이 좁은 그릇의 곡률이 다르듯,
F(θ)의 곡률도 θ에 따라 다르다.
예고: F(θ)의 곡률이 바로 파라미터 공간의 자가 된다.
구체적으로 그것이 무엇인지는 — 9장에서.

### JSX

두 패널 구성.

[왼쪽] 파라미터 공간의 격자
  2D 파라미터 공간 위에 균등한 격자를 그린다.
  각 격자점에 대응하는 분포를 작은 썸네일로 표시.
  격자 간격은 일정한데(좌표의 Δθ가 같은데),
  인접한 분포 썸네일의 모양 변화가
  어떤 영역에서는 크고 어떤 영역에서는 작다.

[오른쪽] "공정한" 격자
  왼쪽의 격자를 "분포 변화가 균등해지도록" 왜곡.
  격자가 벌어진 곳 = 둔감한 영역 (큰 Δθ도 작은 변화).
  격자가 촘촘한 곳 = 민감한 영역 (작은 Δθ도 큰 변화).
  "자가 있으면 이 왜곡이 보인다."

→ 왼쪽과 오른쪽 격자를 번갈아 보자.
  "같은 공간인데 다른 눈금"이라는 감각이 오는가?
  이것이 다음 장의 전부다.

### 파이썬

가우시안의 (μ, σ) 공간에서
Δμ = 0.1인 격자점들의 KL 발산을 계산.
σ = 0.5 근처와 σ = 5 근처에서
같은 Δμ = 0.1이 만드는 KL 값이 다른 것을 확인.
"좌표의 한 칸이 어디서나 같은 거리가 아니다."

### 수확

"매니폴드 위에서 한 걸음의 크기를 재려면 자가 필요하다.
그 자는 좌표마다 다르다."

자가 필요하다는 건 알겠다.
그런데 어떤 자? 좌표계를 바꾸면 자도 바뀌어야 하는가?
θ로 재든 η로 재든 같은 거리가 나와야 "공정한 자"일 텐데 —
그런 자가 존재하는가?
존재한다면, 하나뿐인가?


## 방향을 비교하려면 — 접속의 예고

자가 있으면 "크기"를 잴 수 있다.
그런데 "방향"은?

서울에서 "북쪽"이라고 하면 종로 방향이다.
부산에서 "북쪽"이라고 하면 대구 방향이다.
둘 다 "북쪽"인데, 지구본 위에서 보면
두 화살표는 같은 방향이 아니다.
곡면 위에서는 떨어진 두 점의 방향을
직접 비교할 수 없다.

비교하려면 하나의 화살표를
곡면을 따라 조심스럽게 옮겨와야 한다.
이 "옮기는 규칙"을 접속(connection)이라 부른다.

그리고 옮기는 규칙이 하나가 아닐 수 있다.
같은 화살표를 다른 규칙으로 옮기면
도착했을 때 방향이 달라진다.

4장에서 같은 두 점을 잇는 길이 두 개였다.
덧셈의 길과 곱셈의 길.
길이 두 개라면 — 화살표를 옮기는 규칙도 두 개다.
각 길은 자기만의 접속을 가지고 있다.
이것이 나중에 e-접속과 m-접속이라는 이름으로 돌아온다.

— 이 질문은 먼저 자(ruler)의 정체를 밝힌 뒤에 돌아온다.

---

> ### 인물 이야기 — Riemann, Gauss, 그리고 "기하학의 기초에 대하여"
>
> ![Bernhard Riemann](/images/portraits/bernhard-riemann.jpg)
>
> 1854년 6월 10일, 괴팅겐 대학.
> 스물일곱 살의 Bernhard Riemann이 교수 자격을 얻기 위한
> 시험 강연을 해야 했다.
> 독일 대학의 관례에 따라 지도교수가 주제를 골랐다.
> 지도교수는 Carl Friedrich Gauss — 70대의 노대가.
>
> 후보자는 세 가지 주제를 제출하고, 교수가 하나를 고른다.
> Riemann은 두 개의 주제를 자신 있게 준비하고,
> 세 번째는 "아마 이건 안 고르시겠지" 하고 넣었다.
> "기하학의 기초를 이루는 가설에 대하여(Über die Hypothesen, welche der Geometrie zu Grunde liegen)."
> Gauss는 세 번째를 골랐다.
>
> Riemann은 몇 주 동안 고통스럽게 강연을 준비했다.
> 수식은 거의 쓰지 않고, 개념만으로 말해야 했다.
> 청중은 수학자만이 아니라 전체 철학부 교수진이었기 때문이다.
>
> 이 강연 한 편이 기하학의 역사를 갈랐다.
>
> Riemann이 한 일의 핵심은 이것이었다.
> 유클리드 이래 2000년 동안, 기하학은 "공간이 평평하다"는 가정 위에 서 있었다.
> 평행선 공리를 의심한 사람들(Lobachevsky, Bolyai)이 있었지만,
> 그들은 유클리드를 부정하면서도 여전히 "균일한 곡률"의 공간만 다루었다.
> Riemann은 그 한계마저 깨뜨렸다.
> **곡률이 점마다 다를 수 있는 공간.**
> 어떤 곳은 평평하고, 어떤 곳은 볼록하고, 어떤 곳은 안장처럼 굽는 공간.
> 그리고 그런 공간에서 거리를 재려면 —
> 각 점에서 "여기서의 한 걸음은 이만큼"을 알려주는 계량 텐서가 필요하다.
>
> 이것이 리만 계량이다.
> 이 장에서 우리가 "자(ruler)가 필요하다"고 했던 것의 정확한 수학적 실체.
>
> Riemann의 아이디어는 Gauss의 작업 위에 서 있었다.
> Gauss는 이미 30년 전에 곡면의 내재적 기하학을 연구하고 있었다.
> Theorema Egregium("놀라운 정리") — 곡면의 곡률은
> 곡면 위에서만 측정할 수 있는 양이다.
> 바깥에서 곡면을 바라볼 필요가 없다.
> 개미가 곡면 위를 기어다니면서,
> 삼각형의 내각의 합이 180도가 아니라는 것을 발견하면 —
> 그것만으로 자기가 휘어진 면 위에 있다는 것을 알 수 있다.
>
> Gauss가 2차원 곡면에서 한 것을 Riemann이 임의 차원으로 확장했다.
> n차원 공간에서 점마다 달라지는 계량.
> 이것이 리만 기하학이다.
>
> 강연을 들은 Gauss는 — 동료에게 보낸 편지에 따르면 —
> "극도의 놀라움"을 표현했다.
> 평생의 연구에서 자신이 감지하고 있었지만 완성하지 못한 것을
> 젊은이가 해냈다는 것을.
>
> Riemann은 1866년, 서른아홉에 결핵으로 죽었다.
> 60년 뒤, Einstein이 일반상대론을 쓸 때 필요했던 수학이
> 바로 리만 기하학이었다.
> 그리고 또 60년 뒤, Rao와 Amari가 확률분포의 공간에 리만 계량을 입힐 때,
> 같은 도구가 세 번째 생을 살기 시작했다.
`,hm=`# 파라메터 공간의 곡률

8장에서 우리는 파라미터 공간이 평평하지 않다는 것을 보았다.
좌표의 한 칸이 어디서나 같은 거리가 아니다.
그래서 자(ruler)가 필요하다고 했다.
좌표를 바꿔도 재는 거리가 같은, 공정한 자.

그 자의 정체가 이 장에 있다.

## 민감도 — 분포가 파라미터의 떨림을 느끼는 정도

![같은 한 걸음, 다른 민감도](/images/chapters/ch09-ruler-sensitivity.svg)

### 한 개념

Fisher 정보는 "파라미터를 살짝 흔들었을 때
분포가 얼마나 크게 반응하는가"를 재는 양이다

### 왜

"같은 크기만큼 파라미터를 바꿔도,
어떤 분포는 거의 안 변하고 어떤 분포는 확 변한다.
이 '민감도'를 숫자로 쓸 수 있는가?"

### 비유

볼륨 다이얼과 이퀄라이저 —
볼륨 다이얼을 1mm 돌렸을 때,
조용한 클래식 곡에서는 거의 차이가 안 들린다.
하지만 베이스가 꽉 찬 힙합 곡에서는
같은 1mm가 온 방을 울린다.
다이얼의 물리적 회전량은 같은데,
음악이 느끼는 변화의 크기가 다르다.
그 "느끼는 크기"가 Fisher 정보다.

### 한 걸음 더

이퀄라이저의 저음 슬라이더를 올리면
힙합은 폭발하지만 피아노 독주는 별 차이 없다.
고음 슬라이더는 반대다.
"어느 방향으로 흔들었느냐"에 따라 민감도가 다르다 —
파라미터가 여러 개일 때
Fisher 정보가 스칼라가 아니라 행렬이 되는 이유다.

### 왜 (∇log p)²인가

"왜 모든 경사에 log가 붙는가"의 회수:
9장에서 우리는 ∇log p가
"비율로서의 변화"임을 보게 된다.
연봉 3000만원의 300만원 인상과
3억의 300만원 인상이 다르듯,
확률 0.01의 0.01 변화와
확률 0.5의 0.01 변화는 다르다.
∇log p = ∇p / p 가 이 상대적 변화를 잡아낸다.

Fisher 정보는 이 상대적 변화의 분산이다.
파라미터가 하나일 때는 스칼라:
I(θ) = E[(∇log p)²]
= "∇log p가 평균적으로 얼마나 흩어져 있는가"

파라미터가 여러 개일 때(예: μ와 σ)는
각 방향의 변화량이 서로 얽힌 행렬이 된다:
I(θ) = E[∇log p · (∇log p)ᵀ]
스칼라의 제곱이 벡터의 외적으로 확장된 것이다.
이것이 이 장 뒤에서 만날 Fisher 정보 "행렬"의 정체다.

### 왜 분산인가?

E[∇log p] = 0 이다 (증명은 파이썬에서 수치 확인).
평균이 0인 양의 "크기"를 재려면
제곱 평균 = 분산을 쓰는 것이 자연스럽다.
분산이 크면 → 데이터가 파라미터에 대해 할 말이 많다.
분산이 작으면 → 데이터가 파라미터에 대해 무심하다.

### JSX
viz: ch09/sensitivity

두 패널 구성.

[왼쪽] 분포 패널
  가우시안 분포를 표시. 슬라이더 두 개: μ, σ.
  μ 슬라이더를 ±ε만큼 흔들면
  분포가 좌우로 살짝 흔들리는 애니메이션.
  σ 슬라이더를 ±ε만큼 흔들면
  분포가 넓어졌다 좁아졌다 하는 애니메이션.

[오른쪽] 민감도 게이지
  μ 방향 민감도: I_μμ = 1/σ²
  σ 방향 민감도: I_σσ = 2/σ²
  두 막대가 나란히 표시.

핵심 체험:
  σ를 작게 만들면(분포가 좁으면)
  → 두 민감도 모두 커진다.
  "뾰족한 분포는 파라미터 변화에 예민하다."
  σ를 크게 만들면(분포가 넓으면)
  → 두 민감도 모두 작아진다.
  "넓은 분포는 둔감하다."

→ σ를 극단적으로 줄여보자.
  분포가 바늘처럼 뾰족해질 때 민감도는 어떻게 되는가?
  이것이 "확신할수록 정보가 많다"의 의미다.

### 파이썬

가우시안에서 score ∇_μ log p(x|μ,σ)를 해석적으로 계산.
N개 샘플에서 score의 표본 분산을 구해서
I(θ)의 이론값과 비교.
σ를 바꿔가며 I가 어떻게 변하는지 테이블로 출력.

# 가우시안의 score function
# score = (x - mu) / sigma^2
# E[score^2] = 1/sigma^2 = Fisher information for mu

5장에서 학습은 KL 발산을 줄이는 과정이라 했다.
KL을 줄이려면 파라미터를 바꿔야 한다.
그런데 얼마나 바꿔야 하는가?
민감한 영역에서는 조금만 바꿔도 분포가 크게 변한다 — 조심해야 한다.
둔감한 영역에서는 많이 바꿔도 분포가 별로 안 변한다 — 과감해도 된다.
Fisher 정보는 이 "조심함의 정도"를 알려준다.
이것이 나중에 자연 기울기(natural gradient)의 핵심이 된다.

### 수확

"Fisher 정보 = 파라미터에 대한 분포의 민감도
= score의 분산
= 데이터가 파라미터에 대해 가진 정보량"


## 곡면 위의 자(ruler) — Fisher 계량

3장 끝에서 우리는 KL 발산의 발밑에서 피셔 정보라는 이름을
처음 들었다. 그때는 "두 분포가 가까워지면 비대칭이 사라지며
드러나는 대칭 거리의 정체"였다. 이 장에서는 그 행렬이
파라미터 공간 전체에 곡률을 부여하는 "자(ruler)"가 됨을 본다.

그리고 하나 더.
7장에서 우리는 볼록함수 F(θ)와 접선 사이의 높이 차이가
브레그만 발산이고, 그것이 KL과 일치함을 보았다.
브레그만 발산에서도 같은 일이 일어난다 —
두 점이 가까워지면, 높이 차이의 2차 근사는
½ dθᵀ · F''(θ) · dθ 가 된다.
F''(θ) — 볼록함수의 이계도함수.

3장에서는 KL의 발밑에서 피셔를 만났고,
여기서는 브레그만의 발밑에서 같은 피셔를 만난다.
당연하다 — 7장에서 KL과 브레그만이 같은 것임을 보았으니까.
세 갈래로 올라온 길이 한 지점에서 합류한다.

### 한 개념

Fisher 정보 행렬이 파라미터 공간에
"곡면의 자"를 부여한다 — 리만 계량의 역할

### 왜

"파라미터 공간에서 한 걸음이 어디서나 같은 크기인가?
아니라면, '진짜 거리'를 어떻게 재나?"

### 비유 1

세계지도의 왜곡 — 메르카토르 도법 —
메르카토르 지도에서 그린란드는 아프리카만큼 커 보인다.
실제로는 아프리카의 1/14이다.
지도 위의 1cm가 적도에서는 100km이지만
극지방에서는 10km다.
같은 "지도 위 한 걸음"이 실제 거리로는 다르다.

파라미터 공간도 그렇다.
2장의 키 분포로 돌아가보자.
한국 남성 (174, 5.8)에서 σ를 1만큼 바꾸는 것과,
σ = 30인 아주 넓은 분포에서 σ를 1만큼 바꾸는 것.
좌표 위에서는 같은 한 걸음이다.
하지만 σ = 5.8일 때 분포의 모양 변화는 극적이고,
σ = 30일 때 변화는 거의 눈에 띄지 않는다.
"파라미터 공간의 메르카토르 왜곡."

리만 계량은 지도의 각 지점에서
"여기서의 1cm는 실제로 몇 km인가"를 알려주는 축척이다.
Fisher 정보 행렬이 바로 그 축척이다.

### 비유 2

고무판 위의 격자 —
고무판에 정사각형 격자를 그린다.
고무판을 늘리면 어떤 곳은 격자가 벌어지고
어떤 곳은 찌그러진다.
벌어진 곳에서의 한 칸은 "큰 거리",
찌그러진 곳에서의 한 칸은 "작은 거리".
Fisher 행렬은 각 지점에서 격자가
얼마나 늘어나고 찌그러졌는지를 기록한 것이다.

### 왜 Fisher 정보가 "유일한"

자연스러운 계량인가:
파라미터에 이름을 다시 붙여도 — θ 대신 φ(θ)를 써도 —
분포 자체는 안 변한다.
"좋은 자"는 좌표를 바꿔도 재는 거리가 같아야 한다.
(서울역의 거리가 주소를 한글로 쓰든 영어로 쓰든 같듯이.)
이 조건을 만족하는 계량은 — Čencov의 정리 —
Fisher 정보 행렬뿐이다 (상수배를 제외하면).
"이것은 선택이 아니다. 유일한 답이다."

### JSX
viz: ch09/fisher-matrix

세 패널 구성.

[왼쪽] 파라미터 공간
  2D 파라미터 공간 (예: 가우시안의 μ, σ).
  격자를 표시. 격자의 간격이 Fisher 행렬에 따라
  위치마다 다르게 그려짐.
  σ가 작은 영역 → 격자가 촘촘 (민감 = 작은 변화도 큰 거리).
  σ가 큰 영역 → 격자가 성김 (둔감 = 큰 변화도 작은 거리).

[오른쪽] 분포 공간
  왼쪽에서 선택한 점에 대응하는 가우시안을 표시.

[하단] 거리 비교
  파라미터 공간에서 두 점을 찍으면:
  - 유클리드 거리 (좌표 차이) = |Δθ|
  - Fisher 거리 (계량 반영) = √(Δθᵀ I(θ) Δθ)
  두 값을 나란히 막대로 표시.

핵심 체험:
  σ가 작은 영역에서 두 점을 찍으면
  → 유클리드 거리는 작지만 Fisher 거리는 크다.
  "좁은 분포 근처에서는 작은 파라미터 변화도
  분포를 크게 바꾼다 — 그래서 '멀다'."
  σ가 큰 영역에서 두 점을 찍으면
  → 유클리드 거리는 크지만 Fisher 거리는 작다.
  "넓은 분포 근처에서는 큰 파라미터 변화도
  분포를 별로 안 바꾼다 — 그래서 '가깝다'."

→ 같은 유클리드 거리를 가진 점 쌍을
  σ 작은 영역과 큰 영역에서 각각 찍어보자.
  Fisher 거리는 얼마나 다른가?

### 지수족에서의 아름다운 사실

"패턴이 있는 분포들"에서 우리는 F(θ)를 만났다.
Fisher 정보 행렬 = ∇²F(θ) = F의 헤시안.
"민감도"에서 score의 분산으로 정의한 Fisher 정보가,
지수족에서는 로그정규화자의 이계도함수와 같다.

이것은 우연이 아니다.
F(θ)가 볼록함수이므로 헤시안이 양의 준정치(positive semidefinite).
양의 준정치 행렬은 내적을 정의한다.
내적이 있으면 거리를 잴 수 있다.
"F의 볼록성이 파라미터 공간에 거리를 선물한다."

"볼록 — 그릇의 기하학"에서 "볼록하면 답이 하나"였다.
여기서 한 층 더: "볼록하면 거리도 생긴다."
볼록성 → 유일한 최소 → 유일한 자연스러운 거리.
하나의 성질에서 두 가지 선물.

### 파이썬

가우시안의 Fisher 행렬을 해석적으로 구성.
I(μ,σ) = [[1/σ², 0], [0, 2/σ²]]
두 점 사이의 유클리드 거리와 Fisher 거리를 비교.
σ를 바꿔가며 "같은 좌표 차이, 다른 Fisher 거리"를 확인.

# Fisher metric distance (infinitesimal)
# ds² = (1/σ²)dμ² + (2/σ²)dσ²
# 가우시안 파라미터 공간은 쌍곡 평면(Poincaré half-plane)과
# 동형이라는 놀라운 사실 — 호기심 상자 후보

## 호기심 상자: 가우시안의 파라미터 공간은 쌍곡 평면이다
Fisher 계량을 가우시안에 적용하면
ds² = (1/σ²)(dμ² + 2dσ²)
이것은 상반평면 모델(Poincaré half-plane)의 계량과
(상수배를 제외하면) 같다.

쌍곡 평면에서는:
- σ가 작을수록(아래로 갈수록) 거리가 길어진다
- 두 점을 잇는 "직선"(측지선)은 반원이다
- 에셔의 Circle Limit 판화에서 본 그 세계

"가우시안 분포들의 세계는 에셔의 그림이다."
이것은 비유가 아니라 수학적 사실이다.

### JSX
viz: ch09/metric-ellipse

상반평면 위에 가우시안들을 점으로 찍고,
두 점 사이의 측지선(반원)을 그린다.
유클리드 직선과 측지선이 얼마나 다른지 비교.

### 수확

"Fisher 정보 행렬은 파라미터 공간의 축척이다.
이 축척이 '분포의 변화를 공정하게 재는 유일한 자'다.
그리고 지수족에서는 이 자가 F(θ)의 볼록성에서 태어난다."

그런데 자로 크기를 잴 수 있게 되었다고 해서 끝이 아니다.
크기 말고 방향도 있다.
8장 끝에서 우리는 곡면 위에서 떨어진 두 점의 방향을
직접 비교할 수 없다는 것을 보았다.
비교하려면 "옮기는 규칙" — 접속 — 이 필요하다.
그리고 그 규칙이 하나가 아닐 수 있다고 했다.
11장에서, 그 규칙이 정확히 두 개인 이유를 만난다.


## 왜 모든 경사에 log가 붙는가

### 한 개념

∇log p는 "비율로서의 변화"이며,
이것이 확률의 경사를 잴 때 올바른 자(ruler)인 이유

### 왜

"강화학습의 정책 경사에서 왜 ∇log π이지, 왜 그냥 ∇π가 아닌가?"

### 비유

연봉 인상률 —
연봉이 3000만원인 사람의 300만원 인상과
3억인 사람의 300만원 인상은 같은 300만원이지만
의미가 완전히 다르다.
절대 변화량(∇p)이 아니라 상대 변화율(∇p/p = ∇log p)이
"진짜 변화의 크기"다.

### JSX
viz: ch09/metric-ellipse

두 개의 확률 막대(하나는 0.01, 하나는 0.5).
둘 다 같은 절대량(0.01)만큼 변할 때,
∇p는 같은 높이의 화살표이지만
∇log p는 극적으로 다른 화살표.
"희귀한 사건의 변화가 증폭된다."

### 확률의 세계에서의 의미

스코어 함수 ∇_θ log p(x|θ):
  "파라미터를 살짝 바꿨을 때,
  이 데이터가 나올 확률이 비율적으로 얼마나 변하는가"
정책 경사 ∇_θ log π(a|s):
  π(a|s) = 0.001인 희귀 행동이 큰 보상을 줬을 때,
  ∇π로는 신호가 묻히지만
  ∇log π = ∇π / π 에서는 작은 π로 나눠지면서
  신호가 증폭된다.
  "희귀하지만 좋았던 행동을 놓치지 않는 장치."

### 파이썬

간단한 2-행동 밴딧에서
∇π와 ∇log π를 직접 계산해서 비교.
희귀 행동의 경사 신호가 log에서 증폭되는 것을 수치 확인.

### 정보기하학과의 연결

이 장에서 우리는 ∇log p의 분산이 Fisher 정보임을 보았다.
Fisher 정보 행렬 = E[∇log p · ∇log pᵀ].
"∇log p가 올바른 자라면, 그 자로 잰 분산이
파라미터 공간의 곡률을 결정한다."
이 장에서 이 자가 "유일한 자연스러운 계량"이었던 것을 떠올리자.
그리고 그 계량을 따라 걷는 것이
자연 기울기(natural gradient)다 — 에필로그에서 다시 만난다.

### 수확

"Fisher 정보가 자이고, ∇log p가 재료다.
자로 크기를 재고, ∇log p로 방향을 안다.
그러면 한 가지 질문이 남는다.
4장에서 우리는 두 개의 길을 보았다 — 덧셈의 길과 곱셈의 길.
이 자는 두 길을 같은 눈으로 보는가, 다른 눈으로 보는가?
덧셈으로 한 걸음 걷는 것과 곱셈으로 한 걸음 걷는 것이
같은 Fisher 거리인가?
— 같지 않다. 그리고 그 비대칭이 무지와 확신의 쌍대를 만든다."

---

> ### 인물 이야기 — R.A. Fisher와 "한 사람이 만든 도구함"
>
> ![R.A. Fisher](/images/portraits/ra-fisher.jpg)
>
> 1890년, 런던.
> Ronald Aylmer Fisher는 극심한 근시를 안고 태어났다.
> 안경 없이는 칠판을 볼 수 없었다.
> 그 대신 — 전해지는 이야기에 따르면 —
> 어린 시절부터 머릿속으로 기하학적 직관을 키웠다.
> 수식을 눈으로 따라가는 대신, 공간을 상상했다.
>
> 이 습관이 20세기 통계학의 지형을 결정했다.
>
> Fisher가 풀고자 한 문제는 생물학에서 왔다.
> 케임브리지에서 수학을 전공한 뒤 그는 유전학에 빠져들었다.
> 멘델의 유전법칙과 다윈의 자연선택이 모순되는 것처럼 보이던 시절.
> Fisher는 1918년 논문에서 이 모순을 해소했다 —
> 여러 유전자가 함께 작용하면 연속적인 변이가 나온다는 것.
> 이 작업을 위해 그는 분산분석(ANOVA)을 발명했다.
>
> 그런데 유전 데이터를 분석하려면 통계적 도구가 필요했고,
> 당시의 도구는 부족했다.
> 그래서 Fisher는 도구를 직접 만들었다.
>
> 최대우도추정(MLE) — 데이터가 나올 가능성을 최대화하는 파라미터를 고르라.
> 충분통계량 — 데이터에서 파라미터에 대한 정보를 하나도 잃지 않는 요약.
> Fisher 정보 — 데이터가 파라미터에 대해 가진 정보의 양.
> 그리고 이 정보에 기반한 추정의 하한 — 크라메르-라오 부등식의 핵심 재료.
>
> 이 도구들 사이에는 숨겨진 연결이 있었다.
> MLE는 충분통계량에 의존하고,
> 충분통계량의 분산이 Fisher 정보와 관련되고,
> Fisher 정보가 추정의 정밀도 한계를 결정한다.
> Fisher는 이 연결을 감지하고 있었지만,
> 그것을 "기하학"이라는 언어로 쓰지는 않았다.
>
> 그 일을 한 것이 Rao(1장)였고, 그 뒤를 이은 것이 Amari(4장)였다.
> Fisher가 만든 도구함의 각 도구들이
> 사실은 하나의 기하학적 구조의 여러 면이었다는 것을
> 밝혀내는 데 반세기가 더 걸린 것이다.
>
> Fisher는 성격이 격렬한 사람이었다.
> 2장에서 본 Pearson과의 갈등은 학문적 논쟁을 넘어 개인적 원한이 되었다.
> Jerzy Neyman과도 충돌했고, 말년에는 담배와 폐암의 관계를
> 부정하는 바람에 평판이 훼손되었다.
>
> 그러나 도구는 성격과 무관하게 살아남는다.
> Fisher 정보는 이 장에서 파라미터 공간의 유일한 자연스러운 자가 되었고,
> 그 자 위에서 정보기하학 전체가 펼쳐진다.
> 한 사람의 도구함이 한 학문의 기초가 된 드문 사례다.
`,mm=`# 무지와 확신

9장에서 Fisher 정보라는 자를 손에 쥐었다.
이 자는 두 길을 같은 눈으로 보는가, 다른 눈으로 보는가?
덧셈으로 한 걸음과 곱셈으로 한 걸음이 같은 Fisher 거리인가?
같지 않다고 했다. 그 비대칭이 무지와 확신의 쌍대를 만든다고.

이 장이 그 이야기다.
4장에서 만난 두 길 — 덧셈의 길과 곱셈의 길 — 이
이제 의미를 얻는다. 하나는 무지의 방향이고, 하나는 확신의 방향이다.

![무지에서 확신으로 — 사전분포와 사후분포](/images/chapters/ch10-prior-posterior.svg)

## 혼합은 무지의 고백이다

### 한 개념
mixture가 "모른다"의 수학적 표현인 이유

### 왜
"세 명의 전문가 의견을 섞는 것과 합성하는 것의 차이?
섞는다는 것은 아직 누가 맞는지 모른다는 뜻이 아닌가?"

### 비유 1
의사의 아침 —
환자가 두통을 호소한다. 아침 회진.
신경과 의사는 "편두통일 가능성이 있다"라고 한다 — 분포 A.
안과 의사는 "녹내장일 가능성이 있다"라고 한다 — 분포 B.
내과 의사는 "고혈압일 가능성이 있다"라고 한다 — 분포 C.

아직 검사를 하지 않았다. 세 의사 중 누가 맞는지 모른다.
주치의는 세 의견을 "섞는다":
     가중평균 = 0.4·A + 0.3·B + 0.3·C
이것은 세 의견의 혼합(mixture)이다.

혼합분포의 모양을 보면 봉우리가 세 개다.
세 가능성이 전부 살아 있다.
아무것도 버려지지 않았다 — 아직 모르니까.
"혼합은 무지의 수학적 표현이다."

### 비유 2
이미지 생성의 와일드카드 —
Stable Diffusion으로 그림을 그린다고 하자.
프롬프트를 쓴다:
     {1girl | 1boy | 1cat}
중괄호와 파이프(|)는 와일드카드다.
"셋 중 하나를 랜덤으로 골라라"는 뜻.

이것은 정확히 혼합분포다.
소녀의 이미지 분포, 소년의 이미지 분포, 고양이의 이미지 분포를
균등하게 섞는 것.
생성할 때마다 셋 중 하나가 나온다.
세 가능성이 공존한다 — 아직 뭘 그릴지 정하지 않았으니까.

와일드카드를 추가할수록 가능성이 넓어진다:
     {1girl | 1boy | 1cat | landscape | food}
선택지가 늘어나고, 불확실성이 커진다.
샘플 공간의 매니폴드가 팽창하는 방향.

파라미터 공간에서 이 팽창은 어떻게 보이는가?
혼합의 가중치 (0.4, 0.3, 0.3)은 심플렉스 위의 점이다(2장).
와일드카드를 추가하면 심플렉스의 차원이 올라간다.
가중치를 바꾸면 심플렉스 위를 걷는 것이다.
이 걸음이 m-측지선(덧셈의 길)이다.
혼합은 파라미터 공간에서 덧셈으로 걷는 것.

### JSX
세 분포의 가중치를 조절하면
혼합분포가 변하는 시각화.
[왼쪽] 삼각형(심플렉스) 위에서 점을 드래그 → 가중치 변화.
[오른쪽] 대응하는 혼합분포가 실시간으로 변화.
점을 꼭짓점으로 밀면 → 단일 분포(확신).
점을 중심으로 밀면 → 세 봉우리가 균등(최대 무지).
다봉 구조가 유지되는 것을 관찰.

→ 점을 삼각형 한가운데에 놓아보자.
  엔트로피가 최대인가?
  이것이 "최대한 모르겠다"의 기하학적 위치다.

### 파이썬
mixture를 직접 구현하고 엔트로피 계산.
가중치를 바꿔가며 엔트로피가 어떻게 변하는지 확인.
균등 가중치일 때 엔트로피가 최대임을 수치적으로 검증.

5장에서 엔트로피는 "평균적 놀라움"이었다.
혼합하면 가능성이 넓어지고, 평균적 놀라움이 커진다.
심플렉스 위에서 점이 가운데로 갈수록 엔트로피가 높아졌던 것(5장)이
여기서 의미를 얻는다 — 가운데로 간다는 것은
더 많이 섞는다는 것이고, 더 모른다는 것이다.

### 수확
"혼합하면 불확실성이 커진다.
와일드카드를 추가하는 것이 혼합이다.
샘플 공간의 매니폴드가 팽창하고,
파라미터 공간에서는 덧셈의 길(m-측지선)을 걷는다."

## 곱셈은 확신의 기록이다

### 한 개념
exponential combination이 "알겠다"의 수학적 표현인 이유

### 왜
"베이즈 업데이트에서 사전분포×우도는 왜 곱셈인가?
왜 덧셈이 아니라 곱셈이 확신을 표현하는가?"

### 비유 1
의사의 낮 —
오후. MRI 결과가 나왔다.
MRI는 녹내장에는 반응하지 않고,
편두통과 고혈압에만 특정 패턴을 보인다.
이 정보(우도)를 아침의 믿음(사전분포)에 곱한다.

곱셈이 하는 일:
녹내장 가능성은 우도가 0에 가까우므로 눌린다.
편두통과 고혈압만 살아남는다.
세 봉우리가 두 봉우리로 줄었다.
"겹치는 영역만 살아남는다" — 4장의 물감 비유.

혈액검사가 추가로 나오면 또 곱한다.
고혈압의 증거가 약하면 그것도 눌린다.
마지막에 편두통 하나만 남는다.
곱셈을 반복할수록 봉우리가 줄고, 분포가 좁아진다.
"곱셈은 확신의 기록이다."

### 비유 2
이미지 생성의 프롬프트 확장 —
다시 Stable Diffusion.
이번에는 와일드카드가 아니라 쉼표(,)로 조건을 추가한다:
     1girl
에서
     1girl, smiling
로 프롬프트를 확장한다.

"smiling"은 필터다.
웃는 소녀의 이미지만 통과시키고 나머지는 눌린다.
이것은 곱셈이다:
     p(image | "1girl") × p("smiling" | image)
두 조건이 겹치는 영역만 살아남는다.

프롬프트를 더 추가하면:
     1girl, smiling, red hair, school uniform, cherry blossom
매 조건이 필터로 곱해지고,
샘플 공간의 매니폴드가 수축한다.
가능한 이미지의 범위가 점점 좁아진다.
불확실성이 줄어든다 — 확신의 방향.

파라미터 공간에서 이 수축은 어떻게 보이는가?
각 조건(smiling, red hair, ...)은 로그 공간에서 더해진다.
log p(image | all conditions)
     = log p(1girl) + log p(smiling|·) + log p(red hair|·) + ...
곱셈이 로그 공간의 덧셈이 된다(4장의 log 번역기).
이 걸음이 e-측지선(곱셈의 길)이다.
확신은 파라미터 공간에서 곱셈으로 걷는 것.

### 대응표

| 와일드카드 (OR) | 쉼표 (AND) |
|---|---|
| {A \\| B \\| C} | A, B, C |
| 혼합(mixture) | 곱(product) |
| 가능성을 넓힌다 | 가능성을 좁힌다 |
| 매니폴드 팽창 | 매니폴드 수축 |
| 불확실성 증가 | 불확실성 감소 |
| 무지의 방향 | 확신의 방향 |
| 덧셈의 길 (m-측지선) | 곱셈의 길 (e-측지선) |
| η 좌표에서 직선 | θ 좌표에서 직선 |

### 그리고 이것이 정보기하학의 심장이다
샘플 공간에서 매니폴드가 팽창하고 수축하는 두 방향이
파라미터 공간에서 쌍대인 두 기하학(m-접속과 e-접속)으로 번역된다.
아마리가 발견한 것의 핵심은
이 두 방향이 대등한 지위로 마주 서 있다는 것이다.
하나가 다른 하나의 "그림자"다 — 6장의 쌍대성.
무지와 확신, 팽창과 수축, 덧셈과 곱셈이
Fisher 계량(9장)에 대해 쌍대다.

### JSX
두 패널 구성.
[왼쪽] 샘플 공간 — 분포의 모양.
     위: 프롬프트 빌더.
     와일드카드 버튼({A|B}) → 혼합 → 봉우리가 늘어남.
     쉼표 버튼(A, B) → 곱셈 → 봉우리가 줄어듦.
     아래: 분포 시각화. 매니폴드의 팽창/수축이 보임.

[오른쪽] 파라미터 공간 — 심플렉스 또는 θ-η 평면.
     와일드카드를 추가하면 → m-측지선을 따라 점이 이동.
     쉼표를 추가하면 → e-측지선을 따라 점이 이동.
     두 경로의 방향이 다른 것을 시각화.

→ 와일드카드를 세 번 추가한 뒤 쉼표를 세 번 추가해보자.
  파라미터 공간에서 점의 궤적이 지그재그하는가?
  이것이 12장 EM의 예고다.

### 파이썬
베이즈 업데이트를 코드로 구현.
사전분포에 우도를 곱할 때마다
엔트로피가 줄어드는 것을 수치적으로 확인.
혼합(와일드카드 추가)과 곱셈(조건 추가)을 번갈아 수행하며
엔트로피의 증감을 추적.

3장에서 KL(p‖q)와 KL(q‖p)가 다르다는 것을 보았다.
"현실이 모형을 심판하는 거리"와 "모형이 현실을 심판하는 거리".
이제 그 비대칭의 의미가 선명해진다.

같은 두 분포 p와 q. 같은 출발점과 도착점이다.
그런데 KL(p‖q)는 p의 눈으로 재고, KL(q‖p)는 q의 눈으로 잰다.
4장에서 같은 양 끝점을 잇는 경로가 두 개였듯,
같은 두 점 사이의 "거리"도 누구의 눈으로 보느냐에 따라 다르다.

왜 다른가?
KL(p‖q)에서 p가 심판이면 — p가 높은 곳에서 q가 낮을 때 벌이 크다.
이 거리를 줄이려면 q는 p가 높은 곳을 전부 덮어야 한다.
봉우리가 세 개면 세 개 다. 넓어지는 방향 — 혼합의 방향이다.

KL(q‖p)에서 q가 심판이면 — q가 높은 곳에서 p가 낮을 때 벌이 크다.
이 거리를 줄이려면 q는 p가 확실히 높은 봉우리에만 집중해야 한다.
잘못 건 확률이 벌이니까. 좁아지는 방향 — 곱셈의 방향이다.

같은 두 점, 같은 "거리"인데,
누가 심판이냐에 따라 넓어지려는 힘과 좁아지려는 힘이 다르다.
이것이 KL의 비대칭이 품고 있던 기하학적 의미다.

### 수확
"곱하면 불확실성이 줄어든다.
프롬프트에 쉼표를 추가하는 것이 곱셈이다.
샘플 공간의 매니폴드가 수축하고,
파라미터 공간에서는 곱셈의 길(e-측지선)을 걷는다.
무지(OR)와 확신(AND)은 쌍대다."

곱셈이 확신이라면 — 그리고 9장에서 본 것처럼
∇log p가 곱셈의 세계에서 경사를 재는 도구라면 —
무지와 확신의 쌍대가 경사 계산에도 반영되어 있다.

## 그런데 — 지수족 밖의 세계는?

지수족 안에서는 모든 것이 아름답다.
θ와 η가 르장드르 변환으로 연결되고,
F(θ)의 볼록성이 거리를 선물하고,
∇log p가 확신의 방향을 정확히 가리킨다.

그런데 실제 세계의 분포는 대부분 지수족이 아니다.

2장에서 실제 데이터가 고차원 공간의 저차원 매니폴드 위에
산다는 것을 보았다. 그 매니폴드의 모양은 지수족이 그리는
깔끔한 곡면보다 훨씬 복잡하다.
프롬프트를 아무리 정교하게 써도,
이미지 Diffusion 모델이 만들어내는 이미지 분포는 지수족이 아니다.
신경망이 표현하는 분포는 파라미터가 수억 개이고,
지수족의 깔끔한 골격을 따르지 않는다.
자연어의 토큰 분포도, 단백질의 구조 분포도 마찬가지다.

그러면 7장에서 10장까지 쌓아올린 도구들이 쓸모없는 것인가?

아니다. 전략을 바꾸면 된다.
복잡한 분포를 직접 다루는 대신,
지수족 안에서 "가장 가까운 점"을 찾는 것이다.
현실(p)을 지도(q)에 옮기는 것 —
3장에서 KL로 거리를 재는 법을 배웠고,
이 장에서 OR과 AND의 쌍대를 배웠다.

이제 남은 질문은 하나다.
그 "가장 가까운 점"을 어떤 거리로 재느냐에 따라
답이 달라지지 않는가?

달라진다.
여기서 "도착지가 다르다"는 말이 처음으로 등장한다.
같은 두 점 사이의 두 경로(4장)와는 다른 상황이다.
출발점은 하나 — 지수족 밖의 복잡한 분포 p.
지수족이라는 곡면 위에 가장 가까운 점을 찍는 것이 사영이다.

KL(p‖q)를 최소화하면 — p가 심판이다.
q는 p의 모든 봉우리를 빠짐없이 덮어야 한다.
넓어지는 방향으로 내려찍는다 — m-사영.
도착점은 넓은 분포.

KL(q‖p)를 최소화하면 — q가 심판이다.
q는 p의 가장 높은 봉우리에 집중해야 한다.
좁아지는 방향으로 내려찍는다 — e-사영.
도착점은 좁은 분포.

같은 곡면 위에 내려찍는데, 사영 방식에 따라 도착점이 다르다.
무지와 확신의 쌍대가 여기서 "두 종류의 추론"이 된다.
"빠뜨리지 않겠다"(m-사영)와 "확신하겠다"(e-사영).
어느 쪽이 올바른 추론인가?
— 올바른 쪽은 없다. 각각이 다른 질문에 답한다.

---

> ### 인물 이야기 — Thomas Bayes와 "역방향 확률"
>
> ![Thomas Bayes](/images/portraits/thomas-bayes.gif)
>
> 1740년대, 잉글랜드 턴브리지웰스.
> Thomas Bayes는 장로교 목사였다.
> 수학에 관심이 있었지만, 직업 수학자는 아니었다.
> 그가 남긴 수학 논문은 생전에 한 편도 출판되지 않았다.
>
> Bayes가 풀고자 한 문제는 이것이었다.
> 동전을 열 번 던져서 앞면이 일곱 번 나왔다.
> 이 동전이 앞면 확률 0.7인 동전이라고 확신할 수 있는가?
> 아니면 공정한 동전인데 운이 좋았던 것일 수 있는가?
>
> 이것은 "순방향"과 "역방향"의 차이다.
> 순방향은 쉽다: 앞면 확률이 0.7인 동전을 열 번 던지면
> 앞면 일곱 번이 나올 확률을 계산할 수 있다.
> 역방향은 어렵다: 앞면 일곱 번을 관측한 뒤,
> 앞면 확률이 얼마인지를 역으로 추론하는 것.
>
> Bayes는 이 역방향 문제에 답하는 방법을 찾았다.
> 핵심은 "사전 확률(prior)"이라는 개념이었다.
> 동전을 던지기 전에, 앞면 확률에 대해 이미 갖고 있는 믿음이 있다.
> 그 믿음에 데이터(일곱 번의 앞면)를 곱해서 업데이트하면
> 새로운 믿음(사후 확률, posterior)이 된다.
>
> 사전 × 우도 → 사후.
> 이것이 베이즈 정리다.
> 그리고 이 "곱한다"는 연산이 바로 이 장의 주제다.
>
> 곱한다는 것은 AND다.
> 사전 믿음이 "이 동전은 대체로 공정할 것이다"이고
> 데이터가 "앞면이 많이 나왔다"이면,
> 두 정보의 교집합만 살아남는다.
> 결과는 사전보다 좁고, 데이터만 볼 때보다도 좁다.
> 확신의 방향이다.
>
> Bayes는 1761년에 세상을 떠났다.
> 그의 논문은 친구 Richard Price가 유고함에서 발견해
> 1763년에 왕립학회에 제출했다.
> Price는 서문에서 이 논문의 의의를 설명하며
> 상당한 편집과 보충을 했다.
> "Bayes의 정리"에는 사실 Price의 기여가 상당하다.
>
> 그리고 18세기 말, 프랑스에서 Laplace가
> 같은 아이디어를 독립적으로, 그리고 훨씬 더 체계적으로 발전시켰다.
> Laplace의 작업이 없었다면 베이즈 정리는
> 잊혀진 목사의 유고로 남았을 수도 있다.
>
> 이 장에서 "곱셈이 확신이다"라고 했다.
> Bayes와 Laplace가 연 문은 정확히 이것이다 —
> 새로운 증거를 곱할 때마다 무지가 확신으로 변하는 과정.
> 그리고 그 과정이 파라미터 공간에서 e-측지선을 따라 걷는 것임을
> 밝혀내는 데 200년이 더 걸렸다.
`,gm=`# 추론의 기하학

10장에서 두 개의 질문을 남겼다.
전방 KL만으로는 답을 얻을 수 없고, 역방 KL만으로도 답을 얻을 수 없다.
하나는 넓어지고, 하나는 좁아진다.
어느 쪽도 "올바른" 추론이 아니라고 했다.

그러면 어떻게 해야 하는가?
답은 "한쪽만 고르지 않는다"이다.
두 사영을 번갈아 쓴다.
넓혀서 빠뜨림을 방지하고, 좁혀서 확신을 얻고,
다시 넓히고, 다시 좁히고 — 이 교대가 수렴할 때
비로소 추론이 완성된다.

그 이야기를 하기 전에, 먼저 사영이란 무엇인지를 정확히 하자.

![추론 = 모형 공간 위로의 사영](/images/chapters/ch11-projection.svg)

## 사영 — 큰 세계를 작은 세계에 옮기기

### 한 개념
복잡한 분포를 다루기 쉬운 부분 공간에 내려찍기

### 왜
"실제 분포가 지수족에 안 속하면 어떻게 하나?"

### 비유
3D 물체의 2D 그림자 —
그림자를 찍는 각도에 따라 모양이 다르듯
사영의 방향에 따라 결과가 다르다.

### JSX
viz: ch11/projection-concept
심플렉스 위에 목표점 p와
지수족 부분매니폴드(곡선)를 그리고,
p에서 곡선으로 "가장 가까운 점"을 찾는 시각화.

### 파이썬
간단한 이산분포에서 MLE = 사영임을 코드로 확인.

### 수확
"추론 = 사영"이라는 감각

## 두 가지 사영 — e-사영과 m-사영

### 한 개념
같은 목표에 대해 두 종류의 사영이 다른 답을 준다

### 왜
"같은 분포를 같은 모형에 맞추는데 왜 답이 두 개?"

### 비유
의사의 저녁 — 10장에서 세 의사의 의견을 섞고 곱했다.
이번에는 검사 결과를 지수족 모형(가우시안 등)으로 요약해야 한다.
현실(세 봉우리 분포)은 지수족이 아니다.
가장 가까운 가우시안을 찾는 것이 사영이다.
그런데 "가장 가까운"의 기준이 m인지 e인지에 따라
넓은 가우시안이 나올 수도, 좁은 가우시안이 나올 수도 있다.

### p와 q의 역할
(되새김):
p는 현실(진짜 분포), q는 지도(모형).

m-사영: KL(p‖q) 최소화 — 현실 p의 눈으로 심판한다.
   p가 높은 곳에서 q가 낮으면 벌이 크다.
   q는 p의 모든 봉우리를 빠짐없이 덮어야 한다.
   결과: q가 넓어진다 — "빠뜨리지 않겠다."
   10장에서 이것이 혼합의 방향이라 했다.

e-사영: KL(q‖p) 최소화 — 모형 q의 눈으로 심판한다.
   q가 높은 곳에서 p가 낮으면 벌이 크다.
   q는 p가 확실히 높은 봉우리에만 확률을 걸어야 안전하다.
   결과: q가 좁아진다 — "확신하겠다."
   10장에서 이것이 곱셈의 방향이라 했다.

### JSX
viz: ch11/simplex-projection
"사영"의 시각화에서 e-사영(KL(q‖p) 최소화)과
m-사영(KL(p‖q) 최소화)의 착지점을 동시에 표시.
특히 다봉 분포에서 차이가 극적으로 보임.

### 파이썬
변분 추론의 두 방향을 미니 예제로 비교 구현.

### 수확
"어떻게 사영하느냐 = 어떤 종류의 추론을 하느냐"

## 왜 접속이 두 개인가

### 한 개념
e-접속과 m-접속이 정확히 두 개인 구조적 이유

### 왜
"하나가 아니라 두 개, 세 개가 아니라 두 개인 이유?"

4장에서 길이 두 개인 것을 처음 보았다 — 덧셈의 길과 곱셈의 길.
8장에서 길이 두 개이면 접속도 두 개라는 예고를 했다.
6장에서 볼록함수와 그 쌍대가 동전의 양면이었듯,
e-접속과 m-접속도 Fisher 계량에 대해 쌍대다.
두 개인 이유는 같은 뿌리에서 나온다 —
확률을 조합하는 자연스러운 연산이 정확히 두 개이기 때문이다.

### 비유
덧셈과 곱셈 — 체(field)의 두 연산. 세 번째는 없다.

### JSX
viz: ch11/simplex-projection
"첫 번째 길"~"두 길이 다른 곳을 지나간다"의 두 경로 시각화를 심플렉스 위에 종합.
α 슬라이더(-3 ~ +3)로 α-측지선의 연속적 변화를 보되,
α = ±1에서만 "분포를 결합하는 자연스러운 연산"이
대응됨을 하이라이트.

### 파이썬
α-측지선 일반 구현. α를 바꿔가며 경로 비교.

### 수확
"덧셈과 곱셈이 기하학을 만든다"

## 다시, 모델 병합으로

### 한 개념
파라미터 공간의 직선이 분포 공간에서는 어떤 경로인가를
묻는 것 자체가 정보기하학의 관점이다

### 왜
"처음에 봤던 그 마법들 — 이제 질문을 정확히 할 수 있는가?"

1장에서 LoRA 병합과 모델 수프를 보았다.
파라미터를 평균 내면 왜 되는가?
2장에서 "어떤 공간에 놓느냐에 따라 가까움과 멂이 달라진다"고 했다.
이제 그 두 관찰을 하나로 잇는 질문을 할 수 있다:
파라미터 공간에서의 평균이
분포 공간에서는 어떤 경로의 어떤 중간점인가?

### 비유
여행의 귀환 — 같은 풍경인데 질문이 달라졌다.
"파라미터 공간에서 벌어지는 마법들"에서는 "왜 되고 왜 안 되지?"였다면,
이제는 "파라미터 공간의 직선이 분포 공간에서는
어떤 모양의 길이었는가?"를 묻게 된다.

### JSX
viz: ch11/simplex-projection
왼쪽에 파라미터 공간, 오른쪽에 분포 공간(심플렉스).
파라미터 공간에서 두 점을 직선으로 잇되,
그 직선 위의 각 점이 분포 공간에서 어디에 찍히는지를
실시간으로 대응시킨다.
파라미터화가 선형에 가까우면 → 분포 경로도 매끄럽다.
파라미터화가 비선형이면 → 분포 경로가 심하게 휜다.
"같은 직선이 분포 공간에서는 직선이 아닐 수 있다."

### 파이썬
간단한 2-파라미터 모델에서
파라미터 직선 보간의 중간점 분포를 계산하고,
같은 양 끝점의 m-중간점, e-중간점과 비교.
세 중간점이 일치하는 경우(평탄)와
크게 다른 경우(곡률이 큰 경우)를 나란히 관찰.

### 수확
LoRA 병합이 잘 되는 조건 — 두 변화가 직교하는 부분공간을
점유하고, 그 영역에서 파라미터화가 분포 공간의
자연스러운 기하학과 크게 어긋나지 않을 때.
정보기하학은 답을 바로 주지 않지만,
"왜 되고 왜 안 되는가"를 정확한 질문으로 바꿔준다.
— "파라미터 공간에서 벌어지는 마법들"의 물음에 대한, 정직한 답

두 종류의 사영을 배웠다.
그런데 실전에서는 한 번의 사영으로 끝나지 않는다.
e-사영을 하고, 그 결과를 보고, 다시 m-사영을 하고, 또 그 결과를 보고 —
이 교대를 반복하면 어디에 도달하는가?
수렴하는가? 수렴한다면, 왜?

---

> ### 인물 이야기 — Imre Csiszár와 "발산의 통일"
>
> ![Imre Csiszár](/images/portraits/imre-csiszar.jpg)
>
> 1960년대, 부다페스트.
> 헝가리 과학원의 젊은 수학자 Imre Csiszár는
> 정보이론과 통계학의 경계에서 일하고 있었다.
> 냉전 시대, 철의 장막 너머의 수학자들이
> 서방과 독립적으로 같은 문제들을 풀고 있던 시절이다.
>
> Csiszár가 직면한 문제는 이것이었다.
> KL 발산이 있다. χ² 발산도 있다. 헬링거 거리도 있다.
> 분포 사이의 "다름"을 재는 양이 여러 개인데,
> 이것들 사이에 체계가 있는가?
> 아니면 각각이 별개의 발명인가?
>
> 1963년, Csiszár는 이 양들이 전부 하나의 가족 — f-divergence — 이라는 것을
> 보였다. 볼록함수 f 하나를 고르면 발산 하나가 나온다.
> f(x) = x log x이면 KL, f(x) = (x-1)²이면 χ²,
> f(x) = (√x - 1)²이면 헬링거.
> 5장 간주곡에서 "볼록함수마다 발산이 하나씩 태어난다"고 했던 것의
> 정확한 형태가 이것이다.
>
> 같은 시기, 일본의 Ali와 Silvey도 독립적으로 같은 개념에 도달했다.
> 수학에서 자주 일어나는 일이다 — 문제가 무르익으면
> 다른 대륙에서 같은 답이 나온다.
>
> 그러나 Csiszár의 기여는 거기서 멈추지 않았다.
> 그는 f-divergence의 **사영 정리(projection theorem)**를 증명했다.
> 볼록 집합 위로의 정보 사영이 유일하다는 것.
> 이것이 이 장에서 "추론 = 사영"이라 했던 것의 수학적 기초다.
>
> 그리고 한 걸음 더 — Csiszár는 교대 사영이 수렴한다는 것을
> 일반적인 조건에서 증명했다.
> e-사영과 m-사영을 번갈아 적용하면 고정점에 수렴한다는 것.
> 다음 장(12장)에서 EM 알고리즘의 수렴을 보장하는 것이
> 바로 이 정리의 응용이다.
>
> Csiszár는 조용한 수학자였다.
> 화려한 일화보다 정리의 깔끔함으로 기억되는 부류의 사람이다.
> 그러나 그가 놓은 기초 — f-divergence와 사영 정리 — 는
> 정보기하학에서 Amari의 쌍대 구조와 만나
> 이 교재의 11장과 12장을 관통하는 뼈대가 되었다.
`,vm=`# 수렴

11장의 마지막에서 질문을 남겼다.
e-사영을 하고, 그 결과를 보고, 다시 m-사영을 하고, 또 그 결과를 보고 —
이 교대를 반복하면 어디에 도달하는가?
수렴하는가? 수렴한다면, 왜?

답은 "수렴한다"이다.
그리고 그 이유는 놀랍도록 단순하다.
두 사영이 직교하기 때문이다.

이 한마디가 이 장의 전부다.
직교라는 조건이 어떻게 수렴을 보장하는지,
그리고 그 수렴이 하나의 알고리즘 — EM — 이 되어
이 교재의 모든 도구가 합류하는 지점이 된다.

![EM = e-사영과 m-사영의 교대 반복](/images/chapters/ch12-em-zigzag.svg)

## 피타고라스의 재림

### 한 개념

e-사영과 m-사영은 직교한다 (정보기하학의 피타고라스 정리)

### 왜

"두 종류의 사영이 직각으로 만난다니, 그게 왜 중요한가?
직교가 왜 수렴을 보장하는가?"

### 비유 1

직각삼각형의 높이 —
직각삼각형에서 빗변의 길이는 두 변의 길이로 분해된다:
     c² = a² + b²
이것은 직각이기 때문에 성립한다.
비스듬하면 성립하지 않는다.

정보기하학에서도 같은 일이 일어난다.
목표점 p에서 부분매니폴드 M까지의 KL 거리가
두 단계로 깔끔하게 분해된다:
     KL(p‖m) = KL(p‖e) + KL(e‖m)
p에서 e-사영점까지의 거리 + e-사영점에서 m-사영점까지의 거리
= p에서 m-사영점까지의 거리.
이것은 두 사영이 직교하기 때문에 성립한다.

"피타고라스 정리가 KL 발산의 세계에서 부활한 것이다."

### 비유 2

GPS 삼각측량 —
산꼭대기에서 마을까지의 거리를 재고 싶다.
직접 내려가면 험하다.
대신 동쪽으로 내려가서(수평 이동),
그 다음 남쪽으로 걸어간다(수직 이동).
두 이동이 직교하면,
총 거리² = 수평 거리² + 수직 거리².
직교하지 않으면 이 분해가 깨진다 —
대각선으로 질러가면 더 짧을 수도, 더 길 수도 있다.

e-사영과 m-사영이 직교한다는 것은
"두 스텝이 서로의 성과를 방해하지 않는다"는 뜻이다.
e-스텝이 줄인 거리를 m-스텝이 되돌리지 않는다.
m-스텝이 줄인 거리를 e-스텝이 되돌리지 않는다.
그래서 매 스텝이 순수한 진전이다.

### 왜 직교가 수렴을 보장하는가

피타고라스 분해에서
     KL(p‖m) = KL(p‖e) + KL(e‖m)
이므로 KL(p‖e) ≤ KL(p‖m).
e-사영을 하면 KL이 줄어든다.
같은 논법으로 m-사영을 하면 또 줄어든다.
줄어든 양은 정확히 사영 전후의 KL 차이이고,
이것은 항상 0 이상이다.

매 스텝이 KL을 줄이므로,
두 사영을 번갈아 수행하면 KL은 단조감소한다.
단조감소하는 양이 아래로 유계(KL ≥ 0)이면 — 수렴한다.

이것이 정보기하학이 수렴 증명에 가져다주는 선물이다.
복잡한 해석학 없이, 기하학적 직관 하나로
"왜 수렴하는가"가 설명된다.

### 왜 KL에서 피타고라스가 성립하는가

브레그만의 선물:
유클리드 거리에서 피타고라스가 성립하는 건 놀랍지 않다.
그런데 3장에서 KL 발산은 비대칭이고, 삼각부등식도 안 되고,
"진짜 거리"도 아니라고 했다.
이런 괴상한 양에서 피타고라스가 왜 성립하나?

7장을 떠올리자.
KL은 볼록함수 F(θ)에서 태어난 브레그만 발산이었다.
그리고 브레그만 발산은 "함숫값과 접선의 차이"였다(6장).
접선은 1차 근사이고, 1차 근사의 오차는 2차 이상이다.
이 2차 구조가 — 내적과 직교를 정의할 수 있는 구조가 —
피타고라스를 가능하게 한다.

3장에서 "거리도 아닌 것"이라 불렀던 KL이
피타고라스 정리를 품고 있었다.
거리가 아니어서 쓸모없는 줄 알았는데,
거리가 아니기 때문에 — 볼록함수에서 태어났기 때문에 —
오히려 이 분해가 가능하다.
6장의 그릇이, 7장의 접선이, 여기서 수렴을 보장하고 있다.

### JSX
viz: ch12/pythagoras

심플렉스 위에서 목표점 p, 부분매니폴드 M,
e-사영점과 m-사영점을 표시하고,
두 사영 방향이 직교함을 각도로 시각화.

[왼쪽] 심플렉스 위의 기하학적 그림.
     p → e-사영점: 빨간 화살표.
     e-사영점 → m-사영점: 파란 화살표.
     두 화살표 사이의 각도 = 90°를 호로 표시.

[오른쪽] KL 분해 막대그래프.
     KL(p‖m) = KL(p‖e) + KL(e‖m).
     세 막대가 나란히. 왼쪽 막대 = 오른쪽 두 막대의 합.
     p를 옮기면 세 값이 변하지만 등식은 항상 성립.

→ p를 부분매니폴드에 가까이 가져가보자.
  세 막대가 모두 줄어들지만 등식은 유지되는가?
  p가 M 위에 놓이면 세 값이 모두 0이 되는가?

### 파이썬

이산분포 예제에서 피타고라스 등식을 수치 검증.
랜덤한 p에 대해 e-사영점과 m-사영점을 계산하고,
KL(p‖m) - KL(p‖e) - KL(e‖m) ≈ 0 임을 확인.
여러 p에 대해 반복하여 "항상 성립함"을 보인다.

### 수확

"사영의 직교성 = 정보량의 분해 = 수렴의 보장.
피타고라스 정리가 KL의 세계에서 부활했다."

## EM — 두 사영의 교대

### 한 개념

EM 알고리즘은 e-사영과 m-사영을 번갈아 수행하는 것

### 이름의 우연에 대하여

EM 알고리즘의 E는 Expectation(기대값 계산), M은 Maximization(최대화)이다.
정보기하학의 e-사영은 exponential, m-사영은 mixture에서 온 이름이다.
이니셜이 같은 것은 우연이다.

그런데 E-스텝이 e-사영이고 M-스텝이 m-사영이라는 대응은 우연이 아니다.
Dempster가 "기대값을 계산하고 최대화한다"고 이름 붙인 것의 기하학적 실체가,
Amari가 "exponential 방향으로 사영하고 mixture 방향으로 사영한다"고 밝혀낸 것이다.
같은 알고리즘의 두 가지 기술(記述)이 우연히 같은 이니셜을 갖게 된 것은,
수학이 가끔 보여주는 장난 같은 조화다.

| | EM 알고리즘 | 정보기하학 |
|---|---|---|
| E | Expectation (기대값 계산) | e-사영 (exponential 사영) |
| M | Maximization (최대화) | m-사영 (mixture 사영) |

### 왜

"이 모든 기하학이 실제 알고리즘 하나로 수렴한다면?
지금까지 배운 점, 길, 거리, 놀라움, 볼록성, 지수족,
곡률, 무지와 확신, 사영 — 이 모든 것이
한 알고리즘의 각 스텝에서 동시에 작동하고 있다면?"

### 비유 1

벽에 못 박기 —
액자를 걸려고 한다.
수평기를 대고 수평을 맞춘다 — 그런데 높이가 틀어졌다.
줄자로 높이를 맞춘다 — 그런데 수평이 틀어졌다.
다시 수평을 맞추고, 다시 높이를 맞추고.
매번 조금씩 나아지고, 결국 정확한 위치에 도달한다.

이것이 되는 이유?
수평 조정과 높이 조정이 직교하기 때문이다.
수평을 맞추는 것이 높이를 망치지 않고,
높이를 맞추는 것이 수평을 망치지 않는다.
(약간은 망칠 수 있지만, 망치는 양보다 맞추는 양이 항상 크다.)

### 비유 2

10장 와일드카드의 회수 —
10장에서 와일드카드(OR)와 쉼표(AND)를 번갈아 추가하면
파라미터 공간에서 지그재그한다고 했다.
EM은 정확히 이것이다.

E-스텝 = 가능성을 넓히는 방향(혼합/무지).
     현재 파라미터로 숨겨진 변수의 분포를 계산한다.
     "이 데이터가 클러스터 A에서 왔을 확률은 0.7,
     B에서 왔을 확률은 0.3" — 가능성을 열어둔다.
     이것은 e-사영이다.
     (데이터와 일치하는 분포들의 집합 — m-flat 매니폴드 — 위로 내려찍는다.)

M-스텝 = 가능성을 좁히는 방향(곱셈/확신).
     E-스텝에서 열어둔 가능성을 기반으로
     파라미터를 업데이트한다.
     "그렇다면 클러스터 A의 평균은 여기, B의 평균은 저기."
     가능성이 좁혀진다.
     이것은 m-사영이다.
     (모형의 파라미터 공간 — e-flat 매니폴드 — 위로 내려찍는다.)

8장에서 매니폴드는 "국소적으로 평면, 전체적으로 곡면"이라 했다.
EM의 두 매니폴드 — 데이터 매니폴드와 모형 매니폴드 — 가
각각 m-flat과 e-flat인 것은
4장의 두 길이 여기서 두 착지 면이 되는 것이다.

E-스텝(넓히기) → M-스텝(좁히기) → E-스텝(넓히기) → ...
무지와 확신이 교대한다.
매 교대마다 KL이 줄어든다 — 피타고라스가 보장한다.

### 지그재그의 오해를 풀자

"넓혔다 좁혔다를 반복하면 제자리 아닌가?"
심플렉스 위의 지그재그만 보면 그렇게 보일 수 있다.
그러나 실제로 EM이 하는 일은 제자리걸음이 아니다.

혼합 가우시안을 생각하자.
데이터에 봉우리가 세 개 있다.
모형에도 가우시안 세 개를 놓는다.
처음에는 세 가우시안이 엉뚱한 곳에 놓여 있다.

E-스텝: 각 데이터 포인트가 어떤 봉우리에서 왔을지
소속 확률을 계산한다.
이것은 잠재 변수의 차원을 여는 것이다 —
데이터 100개 × 봉우리 3개 = 300개의 소속 확률이 생긴다.
"가능성을 넓힌다"는 것은 이 뜻이다.

M-스텝: 그 소속 확률을 고정한 채로
각 봉우리의 평균, 분산, 가중치를 업데이트한다.
봉우리 A에 소속된 데이터들의 평균 → A의 새 중심.
봉우리 B에 소속된 데이터들의 분산 → B의 새 폭.
"가능성을 좁힌다"는 것은 이 뜻이다.

넓히기는 "어떤 데이터가 어디에 속하는가"를 열고,
좁히기는 "그렇다면 각 봉우리는 어디에 있는가"를 닫는다.
두 스텝이 서로 다른 차원을 다루고 있기 때문에
교대가 진전이 된다.

매 사이클이 끝나면, 세 봉우리는
데이터의 세 군집에 조금 더 가까이 옮겨져 있다.
지그재그는 파라미터 공간의 그림자일 뿐이고,
실제로는 다봉 분포가 데이터에 맞춰 조각되는 과정이다.

### JSX
viz: ch12/em-convergence

세 봉우리 믹스처의 EM 수렴 과정.

[상단] 데이터와 모형의 겹침.
     회색 히스토그램: 실제 데이터 (봉우리 3개).
     색이 있는 세 곡선: 모형의 가우시안 세 개 (빨강, 초록, 파랑).
     세 곡선의 합 = 모형 전체 (검은 점선).
     EM 스텝이 진행될 때마다 세 곡선이 데이터에 맞춰진다.

[중단] 다이얼 패널 — 9개의 노브(knob).
     봉우리마다 3개씩:
       μ (중심 위치) — 수평 슬라이더.
       σ (폭) — 수평 슬라이더.
       π (가중치) — 수평 슬라이더.
     총 3 × 3 = 9개의 슬라이더.

     E-스텝이 실행되면: 슬라이더는 움직이지 않는다.
       대신 상단 그림에서 각 데이터 포인트의 색이 바뀐다 —
       소속 확률에 따라 빨강/초록/파랑이 섞인 색으로.
       "어떤 데이터가 어디에 속하는가"가 열리는 순간.

     M-스텝이 실행되면: 슬라이더가 움직인다.
       μ 노브가 소속 데이터의 평균 쪽으로 돌아간다.
       σ 노브가 소속 데이터의 분산에 맞춰 조정된다.
       π 노브가 소속 비율에 맞춰 조정된다.
       "각 봉우리가 어디에 있는가"가 닫히는 순간.

     E-스텝과 M-스텝을 번갈아 보여준다.
     E에서는 색이 바뀌고, M에서는 노브가 돌아간다.

[하단] KL 값의 변화 그래프.
     x축: 스텝 번호 (E₁, M₁, E₂, M₂, ...).
     y축: KL(p‖q).
     매 M-스텝 후 계단식으로 감소.

[컨트롤]
     "한 스텝" 버튼: E와 M을 번갈아 한 스텝씩 실행.
     "자동 재생" 버튼: 0.8초 간격으로 자동 진행.
     "리셋" 버튼: 봉우리를 랜덤 위치로 초기화.

→ 리셋을 여러 번 눌러 초기 위치를 바꿔보자.
  노브가 항상 같은 곳에 수렴하는가?
  다른 곳에 수렴하는 경우가 있는가?
  (있다면 — 그것이 다봉 문제의 함정이다.)

→ E-스텝에서 데이터의 색이 바뀌는 것과
  M-스텝에서 노브가 돌아가는 것을 번갈아 보자.
  "넓히기"와 "좁히기"가 다른 차원을 다루고 있다는 감각이 오는가?

### 파이썬

간단한 혼합 가우시안에서 EM 구현.
2개 클러스터, 100개 데이터.
각 스텝의 파라미터와 KL(p‖q)를 기록.
KL이 매 스텝 감소하는 것을 테이블로 출력.

# E-step: 각 데이터의 클러스터 소속 확률 계산 (e-사영)
# M-step: 소속 확률 기반으로 파라미터 업데이트 (m-사영)
# 반복하면서 log-likelihood가 단조증가하는 것을 확인

### 교재 전체의 회수

EM의 한 사이클 안에 이 교재의 모든 것이 들어 있다.

| EM의 구성 요소 | 교재에서 배운 것 |
|---|---|
| 분포 = 점 | 2장 |
| KL로 거리를 잰다 | 3장, 5장 |
| 두 길(덧셈/곱셈)이 두 스텝이 된다 | 4장 |
| F(θ)의 볼록성이 유일해를 보장 | 6장 |
| 지수족 위에서 작동 | 7장 |
| 데이터 매니폴드와 모형 매니폴드 | 8장 |
| Fisher 계량이 스텝 크기를 결정 | 9장 |
| 무지(E)와 확신(M)의 교대 | 10장 |
| e-사영과 m-사영 | 11장 |
| 직교성이 수렴을 보장 | 이 장 |

이 교재의 여행은 하나의 알고리즘을 이해하기 위한 것이었다.
한 알고리즘의 한 스텝을 정직하게 이해하려면
이만큼의 풍경이 필요했다.

### 수확

"이래서 이 모든 것을 배운 것이다.
E-스텝(e-사영, 데이터로)과 M-스텝(m-사영, 모형으로)의 교대.
매 교대가 KL을 줄인다 — 피타고라스의 직교성 덕에.
그리고 이것은 하나의 알고리즘이 아니라,
추론이라는 행위 자체의 기하학적 구조다."

## 호기심 상자: 변분추론 — e-사영을 포기할 때

EM의 E-스텝은 사후분포 $p(z|x,\\theta)$를 정확히 계산한다.
그래서 피타고라스 분해가 정확히 성립하고,
수렴 증명이 깔끔하다.

그런데 현실의 많은 모델에서는 사후분포를 정확히 계산할 수 없다.
잠재 변수의 구조가 너무 복잡하거나,
적분이 해석적으로 풀리지 않거나.

변분추론(variational inference)은 이 상황의 차선책이다.
정확한 사후분포 대신, 다루기 쉬운 가족 $\\mathcal{Q}$ —
예컨대 "각 변수가 독립인 분포들의 집합"(평균장 근사) —
에서 가장 가까운 근사를 찾는다.

정보기하학의 눈으로 보면 차이는 하나다.

| | EM | 변분추론 |
|---|---|---|
| E-스텝의 착지 면 | 데이터 매니폴드 전체 | $\\mathcal{Q}$라는 더 작은 매니폴드 |
| e-사영 | 정확 | 근사 ($\\mathcal{Q}$ 위로의 사영) |
| 피타고라스 분해 | 정확히 성립 | 근사적으로 성립 |
| ELBO의 갭 | 0 | 0이 아님 |

EM에서 E-스텝은 데이터 매니폴드 위의 정확한 점에 내려찍는다.
변분추론에서 E-스텝은 $\\mathcal{Q}$라는 더 좁은 면 위에 내려찍는다.
착지 면이 좁아지면 두 사영의 직교성이 깨질 수 있고,
ELBO(Evidence Lower BOund)와 실제 우도 사이에 갭이 생긴다.

그런데 이 갭 자체가 KL 발산이다:
$$\\log p(x) - \\text{ELBO} = D_{KL}(q(z) \\| p(z|x))$$
3장에서 배운 KL이 여기서도 "근사의 대가"를 재는 자로 쓰인다.

역으로, EM은 변분추론의 특수한 경우다.
$\\mathcal{Q}$가 충분히 넓어서 정확한 사후분포를 포함하면
갭이 0이 되고, 변분추론은 EM이 된다.

"변분추론은 EM에서 정확성을 포기하고 실용성을 얻은 것이다.
포기한 것의 정체 — 피타고라스의 직교성 — 를 알면,
무엇을 잃고 무엇을 얻는지를 정직하게 볼 수 있다."

이 교재의 모든 도구가 한 알고리즘 안에 들어 있다는 것을 확인했다.
그런데 한 가지 눈에 밟히는 것이 있다.
log가 4장에서도 나오고, 5장에서도 나오고, 7장에서도, 9장에서도 나왔다.
매번 다른 이름으로. 매번 다른 이유로.
왜 같은 함수가 이렇게 많은 문을 열고 있는가?
우연인가, 필연인가?

---

> ### 인물 이야기 — Dempster, Laird, Rubin과 "불완전 데이터의 문제"
>
> ![Arthur Dempster](/images/portraits/arthur-dempster.jpg)
>
> 1977년, 하버드 대학.
> Arthur P. Dempster, Nan Laird, Donald Rubin이
> *Journal of the Royal Statistical Society*에 논문을 발표했다.
> "Maximum Likelihood from Incomplete Data via the EM Algorithm."
> 이 논문이 이름을 붙인 것 — EM 알고리즘.
>
> 사실 EM의 아이디어 자체는 이 논문 이전에 이미 여러 곳에서
> 각각 다른 이름으로 쓰이고 있었다.
> 유전학에서, 천문학에서, 의학 통계에서 —
> "보이지 않는 변수가 있을 때 파라미터를 추정하는 방법"을
> 사람들은 직관적으로 알고 있었다.
> 모르는 것을 추측하고(E-스텝), 그 추측 위에서 최적화하고(M-스텝),
> 다시 추측하고, 다시 최적화하고 — 이 교대를 반복하면 답에 가까워졌다.
>
> DLR(Dempster-Laird-Rubin) 논문이 한 일은 이 직관에 이름과 구조를 준 것이다.
> 흩어져 있던 사례들을 하나의 알고리즘으로 통일하고,
> 수렴한다는 것을 증명했다.
>
> 그런데 "왜" 수렴하는가에 대한 깊은 이해는
> DLR 논문만으로는 완전하지 않았다.
> DLR은 우도가 매 스텝 증가한다는 것을 보였지만,
> 그 증가가 기하학적으로 무엇을 의미하는지는 말하지 않았다.
>
> 그 기하학적 의미를 밝힌 것이 Amari와 그 후학들의 작업이다.
> E-스텝은 e-사영이고 M-스텝은 m-사영이다.
> 두 사영이 직교한다 — 정보기하학의 피타고라스 정리.
> 직교하면 매 스텝에서 KL 거리가 반드시 줄어든다.
> 줄어들 수밖에 없는 기하학적 이유가 있었던 것이다.
>
> 이 장에서 본 표 — EM의 각 구성 요소가 이 교재의 어느 장에 대응하는지 — 는
> 하나의 알고리즘을 이해하기 위해
> 점, 거리, 길, 놀라움, 볼록성, 지수족, 매니폴드, 계량, 쌍대, 사영이
> 전부 필요했다는 것을 보여준다.
> Dempster가 이름 붙인 알고리즘의 한 스텝 안에
> 이 교재의 모든 풍경이 접혀 있다.
`,ym=`# 전체 지도

12장의 마지막에서 눈에 밟히는 것이 있었다.
log가 4장에서도 나오고, 5장에서도 나오고, 7장에서도, 9장에서도 나왔다.
매번 다른 이름으로. 매번 다른 이유로.
왜 같은 함수가 이렇게 많은 문을 열고 있는가?
우연인가, 필연인가?

필연이다. 이 장에서 그것을 확인한다.

## 하나의 곡선, 여섯 개의 얼굴

![log의 여섯 얼굴](/images/chapters/ch13-log-six-faces.svg)

지금 기억을 더듬어보자.

4장에서 우리는 곱셈을 덧셈으로 바꾸는 렌즈를 만났다.
log(p · q) = log p + log q.
리히터 규모, 데시벨, pH — 곱으로 커지는 세계를
더하기로 느끼게 해주는 번역기.
그때는 그것이 "두 번째 길"을 열어주는 도구였다.

5장에서 우리는 놀라움의 척도를 만났다.
독립사건의 놀라움이 더해지려면 — 곱을 합으로 바꾸는
함수는 log뿐이었다. 그래서 -log(p)가 놀라움이 되었다.
그때는 log가 정보량의 단위를 만드는 도구였다.

5장 간주곡에서 우리는 -log의 볼록성을 보았다.
할선이 항상 곡선 위에 있다는 간단한 사실에서
KL ≥ 0이 나왔다. 그때는 log가 부등식의 원천이었다.

7장에서 우리는 지수족의 골격을 만났다.
exp(θ·t(x) - F(θ)) — 이 뼈대의 심장에 log가 있었다.
로그정규화자 F(θ)가 볼록함수이고,
그 볼록성이 쌍대 좌표를 선물했다.
그때는 log가 분포의 골격을 만드는 도구였다.

9장에서 우리는 ∇log p를 만났다.
연봉 3000만원의 300만원 인상과 3억의 300만원 인상이 다르듯,
확률의 변화를 비율로 읽는 도구.
Fisher 정보의 재료. 그때는 log가 경사를 정규화하는 도구였다.

여섯 번.
여섯 번의 등장에서, 매번 log는 다른 이름을 가지고 있었다.
번역기, 놀라움의 척도, 볼록성의 원천, 골격의 심장,
민감도의 재료, 경사의 정규화기.

그런데 곡선은 하나다.
y = log x.
종이 위에 그리면 하나의 매끄러운 곡선.

그 곡선이 여섯 개의 얼굴을 가지고 있었던 것이다.
하나의 수학적 대상이, 여섯 개의 맥락에서,
여섯 개의 필연성으로 등장했다.
곱을 합으로 바꿔야 했기 때문에.
독립사건의 놀라움이 더해져야 했기 때문에.
발산이 0 이상이어야 했기 때문에.
지수족이 뼈대를 가져야 했기 때문에.
확률의 경사가 공정해야 했기 때문에.

이 모든 "~해야 했기 때문에"가 하나의 곡선으로 수렴한다.

### JSX

log 곡선 하나를 중심에 놓고,
여섯 갈래로 뻗는 연결선.
각 갈래를 클릭하면 해당 장의 핵심 시각화가
썸네일로 열린다.
① 곱→합 번역기 (4장 두 경로 비교)
② 놀라움의 척도 (5장 -log(p) 곡선)
③ 볼록성의 원천 (5장 간주곡 할선)
④ 지수족의 골격 (7장 지수족 분해)
⑤ 민감도의 재료 (9장 Fisher 정보)
⑥ 경사의 정규화기 (9장 ∇log p)
대응표를 읽는 것이 아니라
하나의 중심에서 가지가 자라나는 것을 체험한다.

## 거리의 세 얼굴

![거리의 세 층위](/images/chapters/ch13-distance-hierarchy.svg)

log의 여섯 얼굴이 하나의 곡선으로 수렴했듯,
거리의 세 이름도 하나의 구조를 가리키고 있었다.

3장에서 우리는 KL 발산을 만났다.
"현실 p로 살면서 지도 q를 믿을 때 치르는 추가 비용."
비대칭 거리.

7장에서 우리는 브레그만 발산을 만났다.
"볼록함수와 접선 사이의 높이 차이."
F(θ)의 그릇에서 접선까지의 간격.
그리고 이것이 KL과 같은 것이었다.

9장에서 우리는 Fisher 계량을 만났다.
"두 점이 가까워지면 비대칭이 사라지며
드러나는 대칭 거리."
KL의 발밑에서, 그리고 브레그만의 발밑에서,
같은 Fisher 행렬이 나타났다.

세 갈래로 올라온 길이 한 지점에서 합류한다.
KL과 브레그만은 전역적 거리이고,
Fisher는 국소적 거리다.
전역에서 국소로 내려가면 — 발밑을 보면 —
셋이 하나가 된다.

그리고 12장에서 이 거리가 피타고라스 정리를 품고 있었다.
"거리도 아닌 것"이 수렴을 보장하는 도구가 된 것은
이 세 얼굴이 하나의 볼록 구조에서 태어났기 때문이다.

### JSX

하나의 거리를 중심에 놓고, 세 갈래로 뻗는 연결선.
① KL 발산 — "놀라움의 차이" (3장)
② 브레그만 발산 — "접선까지의 높이" (7장)
③ Fisher 계량 — "발밑의 대칭 거리" (9장)
각 갈래를 클릭하면 해당 장의 핵심 시각화가 표시.
세 이름이 하나의 구조를 가리키고 있음을 시각적으로.

## 지도 완성

### JSX

전체 통합 대시보드 — 심플렉스, 쌍대 좌표,
두 경로, 르장드르 변환, 사영이 연결된 인터랙티브.

### 파이썬

ExponentialFamily 통합 클래스.

### 수확

"이 모든 것이 덧셈과 곱셈이었다.
덧셈은 무지의 방향이고, 곱셈은 확신의 방향이다(10장).
두 방향의 사영이 직교하고(12장), 그 교대가 수렴한다.
그리고 그 사이를 번역한 것이 log였다."

지도가 완성되었다.
2장에서 키 분포를 점 하나로 놓았을 때 시작된 여행이
여기서 하나의 그림이 된다.
그런데 지도는 여행이 아니다.
지도를 들고 실제 세계를 걸어봐야 한다.
노이즈에서 이미지가 태어나는 것, 모델이 말을 배우는 것,
파라미터를 10배로 키우는 것 — 이 현실의 문제들 앞에서
우리의 도구가 정말로 작동하는가?

---

> ### 인물 이야기 — Nikolai Chentsov과 "유일성의 증명"
>
> 1960년대, 모스크바.
> 니콜라이 니콜라예비치 첸초프(Николай Николаевич Ченцов)는
> 소비에트 과학원에서 일하는 수학자였다.
> 그의 관심사는 충분통계량과 통계적 결정의 기하학이었다.
>
> 첸초프가 풀고자 한 문제는 근본적이었다.
> 확률분포의 공간에 "거리"를 정의하는 방법은 무한히 많다.
> 리만 계량을 하나 골라서 거리를 재면 된다.
> 그런데 어떤 계량을 골라야 하는가?
> 취향의 문제인가? 아니면 자연스러운 선택이 있는가?
>
> 첸초프의 답은 놀라웠다.
> **Fisher 정보 행렬이 유일하다.**
> 더 정확히 말하면: 통계적으로 자연스러운 조건 —
> "충분통계량에 의한 축소(마르코프 매핑)에 대해 단조감소한다"는 조건 —
> 을 만족하는 리만 계량은 Fisher 정보 행렬뿐이다(상수배를 제외하면).
>
> 이것은 선택의 문제가 아니었다. 유일한 답이었다.
>
> 이 결과는 1972년 저서 *Statistical Decision Rules and Optimal Inference*에
> 실렸다. 러시아어로. 영어 번역은 1982년에야 나왔다.
> 냉전의 장막 너머, 서방의 수학자들은 이 결과를
> 한참 뒤에야 알게 되었다.
>
> 9장에서 "왜 Fisher 정보가 유일한 자연스러운 계량인가"라는 질문에
> "Čencov의 정리"라고 답했다. 바로 이 정리다.
> 이 교재 전체에서 Fisher 정보가 특권적 위치를 차지하는 것 —
> 거리를 재고, 곡률을 정의하고, 사영의 직교성을 보장하는 것 —
> 의 수학적 정당화가 첸초프에게서 나온다.
>
> 그리고 첸초프의 작업에는 계량뿐 아니라 연결(접속)에 대한 결과도 있었다.
> 같은 단조성 조건을 만족하는 연결의 가족이
> α-연결이라는 1-파라미터 가족으로 제한된다는 것.
> Amari가 1980년대에 독립적으로 발견한 쌍대 연결이
> 이미 첸초프의 틀 안에 있었던 것이다.
>
> 첸초프는 1992년에 세상을 떠났다.
> 그의 이름은 서방에서 Čencov, Chentsov, Cencov 등 여러 철자로 표기되어
> 검색조차 어렵다. 정보기하학의 기초를 놓은 사람 중 하나이면서도
> 가장 덜 알려진 인물이다.
> 이 장이 "전체 지도"라면,
> 그 지도의 유일성을 증명한 사람이 첸초프다.
`,xm=`# 전환 ③: 도구를 들고 세계로

13장에서 지도가 완성되었다.

심플렉스 위의 점에서 출발해, 두 개의 길을 걷고, 놀라움을 세고,
볼록함수의 쌍대를 넘어 지수족에 도달하고, 사영의 교대로 수렴을 보았다.
하나의 곡선이 여섯 개의 얼굴을 가지고 있었고,
거리의 세 이름이 하나의 구조를 가리키고 있었다.
이 도구들은 지수족 안에서 완벽하게 작동한다.

그런데 세상의 분포는 대부분 지수족이 아니다.

신경망이 표현하는 분포, 이미지의 분포, 언어의 분포 —
이것들은 지수족의 깔끔한 골격을 따르지 않는다.
파라미터가 수억 개이고, θ와 η의 쌍대성이 성립하지 않고,
F(θ)가 닫힌 형태로 쓰이지 않는다.

그러면 우리가 배운 것이 쓸모없는가?

아니다. 전략을 바꾸면 된다.
정확한 답 대신 올바른 질문을 던지는 것.
"이 문제를 정보기하학의 관점에서 보면 무엇이 보이는가?"

서문에서 우리는 이 한 마디가 마법처럼 작동한다고 했다.
다음 장들은 그 마법이 실제로 작동하는 것을 보여주는 곳이다.
`,km=`# 생성의 기하학

13장에서 지도가 완성되었다.
그리고 지도는 여행이 아니라고 했다.
지도를 들고 실제 세계를 걸어봐야 한다고.

여기서부터가 그 걸음이다.

추론은 "이미 있는 데이터에서 숨겨진 구조를 찾는" 것이었다.
그런데 "아무것도 없는 곳에서 데이터를 만들어내는" 생성은?
생성의 기하학에도 우리가 배운 도구들이 작동한다.

---

![안개 속 레이더 — 스코어 함수가 방향을 알려준다](/images/chapters/ch14-fog-radar.svg)

## ① 디퓨전 — 안개 속에서 레이더를 따라 걷기

### 매니폴드 가설의 귀환

8장의 호기심 상자에서 매니폴드 가설을 만난 독자도 있을 것이다.
만나지 않았어도 괜찮다. 여기서 필요한 만큼 다시 설명한다.

매니폴드 가설이란: 실제 데이터는 고차원 공간 전체에 퍼져 있지 않고,
그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다.
사진을 생각해보자. 256×256 픽셀 컬러 이미지는 약 20만 차원의 공간에 산다.
그런데 "의미 있는 이미지" — 고양이, 풍경, 얼굴 — 는
그 20만 차원 공간의 극히 작은 부분에 모여 있다.
랜덤으로 20만 개의 숫자를 뽑으면 거의 확실하게 노이즈가 된다.

![디퓨전 — 노이즈에서 이미지로, 이미지에서 노이즈로](/images/chapters/diffusion-process.png)

![순방향 디퓨전 — 단계별로 노이즈가 쌓인다](/images/chapters/diffusion-noisy-steps.png)

8장에서 이것은 곁가지처럼 보였을 수 있다.
호기심 상자에 들어 있었으니까.
이 장에서 그 곁가지가 핵심이 된다.

### 드래곤볼 찾기 — 디퓨전 모델의 기하학

### 한 개념

디퓨전 모델은 "전파 지형 위에서 레이더를 따라 걷는 것"이며,
그 레이더의 바늘이 ∇log p(스코어 함수)다.
안개가 걷히는 과정이 역방향 디퓨전이고,
레이더를 만드는 과정이 스코어 매칭이다.

### 왜

"노이즈에서 이미지가 태어난다.
이건 마법인가, 아니면 우리가 배운 것들의 조합인가?"

### 도입

드래곤볼 찾기 대회.
넓은 평야에 드래곤볼 7개가 숨겨져 있다.
참가자 수천 명이 평야의 아무 지점에 랜덤으로 떨어진다.
주최 측은 각 참가자에게 드래곤 레이더를 하나씩 나눠준다.
규칙은 하나 — 레이더 바늘만 보고 걸어라.

### 비유 1

전파 지형 —
각 드래곤볼이 전파를 발산한다.
한 개의 볼이 만드는 신호 강도는
거리에 따라 가우시안으로 감쇠한다.
가까우면 강하고, 멀면 약하다.
7개의 신호가 합쳐지면
땅 위에 전파 강도 지도가 만들어진다.
봉우리가 7개인 지형.

### 교재 내 연결

이것은 4장 "섞을 것인가, 곱할 것인가"에서 본
혼합분포(mixture)다.
7개 가우시안의 가중합.
전파 강도 지도 = 확률밀도 p(x).

### 비유 2

레이더의 원리 —
레이더 바늘이 가리키는 방향은
"여기서 신호가 가장 빠르게 세지는 방향"이다.

### 왜 log인가

9장의 회수:
신호가 0.001인 벌판 한가운데서
0.0001만큼 세지는 것과,
신호가 0.5인 볼 근처에서
0.0001만큼 세지는 것은 의미가 다르다.
벌판에서의 미세한 변화를 놓치면
참가자는 영원히 허허벌판을 헤맨다.
비율로 봐야 한다. 그래서 ∇log p.

9장에서 "연봉 3000만원의 300만원 인상과
3억의 300만원 인상은 다르다"고 했다.
드래곤 레이더는 이 구분을 할 줄 아는 기기다.

### 비유 3

안개의 단계 — 노이즈 스케줄 —
대회는 새벽에 시작한다. 짙은 안개 속에서.

안개가 짙으면:
  레이더의 수신 범위가 넓어진다.
  7개 볼의 신호가 뭉개져서 하나로 섞인다.
  레이더가 가리키는 방향은 "대충 저쪽".
  어떤 볼인지 구분이 안 된다.

해가 뜨면서 안개가 걷히면:
  수신 범위가 좁아진다.
  가장 가까운 볼의 신호가 지배적이 된다.
  레이더가 정밀해진다.
  특정 볼을 향해 또렷하게 가리킨다.

"멀리서는 숲을 보고, 가까이서는 나무를 본다."

### 디퓨전 모델에서

forward process = 안개를 짙게 하는 것.
  데이터에 노이즈를 더하면 분포가 뭉개진다.
  충분히 더하면 순수한 가우시안 — 완전한 안개.
  10장의 언어로 하면 — 무지의 방향이다.
  가능성이 넓어지고, 불확실성이 커진다.
reverse process = 안개가 걷히는 것.
  각 안개 수준에서의 레이더 방향을 따라 걸으면
  데이터로 돌아온다.
  확신의 방향이다.
  가능성이 좁아지고, 특정 이미지가 결정된다.

### 매니폴드 가설과의 연결

안개가 완전히 걷힌 상태에서 참가자가 도달하는 곳 —
드래곤볼의 위치 — 이 데이터 매니폴드다.
안개 속에서는 매니폴드를 벗어나 있었지만,
걷는 과정이 매니폴드 위로 되돌려준다.

forward process = 매니폴드를 떠남 (노이즈 추가)
reverse process = 매니폴드로 귀환 (∇log p를 따라 걸음)

"곁가지라고 생각했던 것이 핵심이었다."

### 비유 4

레이더 제작법 — 스코어 매칭 —
진짜 문제는 드래곤볼의 정확한 위치를 모른다는 것이다.
가진 건 과거 대회 참가자들의 기록뿐이다:
  "이 지점에서, 이 안개 수준에서,
  레이더가 이 방향을 가리켰더니
  결국 볼을 찾았다."
이 기록들로 신경망을 훈련시킨다.
임의의 (지점, 안개 수준) 쌍에서
"레이더가 가리켜야 할 방향"을 추정하게 만든다.

### 교재 내 연결

이것은 11장의 사영이다.
진짜 스코어 필드 ∇log p(x, t)는
복잡하고 알 수 없는 함수다.
신경망이 표현할 수 있는 함수 공간은 그보다 작다.
스코어 매칭 = 진짜 스코어를
신경망 함수 공간으로 사영하는 것.

### 비유 5

바람 — 랑주뱅 노이즈 —
참가자가 레이더 방향으로만 직진하면
가장 가까운 볼에만 도달한다.
그런데 약간의 바람이 분다.
걸음이 좀 비틀거린다.
이 비틀거림 덕에 참가자는
가끔 다른 볼의 영향권에 들어간다.
참가자 수천 명이 각각 다른 바람을 맞으면,
7개 볼에 적절히 분산돼서 도착한다.
바람이 없으면 전원이 같은 볼로 몰려간다.
"다양성은 약간의 비틀거림에서 온다."

### JSX
viz: ch14/score-field

드래곤볼 찾기 시뮬레이션.

[전체] 2D 평야 위에 가우시안 봉우리 7개.
  등고선 또는 히트맵으로 전파 강도 표시.
  7개 드래곤볼의 위치에 별 마커.

[참가자] 점 20~50개가 평야의 랜덤 위치에서 출발.
  각 점에서 ∇log p 방향의 작은 화살표(레이더 바늘).

[안개 슬라이더] σ (노이즈 수준)를 조절.
  σ 최대: 등고선이 뭉개져서 하나의 넓은 언덕.
    화살표들이 대충 중심을 가리킨다.
  σ 최소: 등고선이 7개의 뾰족한 봉우리.
    화살표들이 각자 가장 가까운 봉우리를 가리킨다.

[재생 버튼] "대회 시작"
  σ가 최대에서 최소로 서서히 줄어들면서
  참가자 점들이 레이더를 따라 걸어간다.
  안개가 짙을 때는 점들이 우왕좌왕.
  걷히면서 봉우리로 빨려들어간다.
  최종적으로 7개 볼 근처에 클러스터를 이룬다.

[바람 토글] 랑주뱅 노이즈 on/off.
  off면 점들이 정결한 경로로 이동. 다양성 낮음.
  on이면 비틀거리며 이동. 다양성 높음.
  같은 출발점에서도 다른 볼에 도착할 수 있다.

→ 바람을 끄고 시작해보자. 모든 참가자가
  가장 가까운 볼에만 가는가?
  그 다음 바람을 켜보자. 분포가 달라지는가?
  이것이 "다양한 샘플 생성"의 원리다.

### 파이썬

2D 가우시안 혼합분포 정의 (7개 성분).
∇log p(x)를 해석적으로 계산.
랑주뱅 다이내믹스 시뮬레이션:
  x_{t+1} = x_t + ε · ∇log p(x_t) + √(2ε) · z
  z ~ N(0, I)
다양한 초기점에서 출발하여 수렴 경로를 시각화.
노이즈(ε)의 크기에 따른 다양성 변화를 관찰.

# 안개 단계 구현:
# 여러 σ 수준에서의 ∇log p_σ(x) 계산
# σ 큰 것부터 작은 것으로 순차적으로 적용
# = annealed Langevin dynamics

### 대응표

(본문에 포함):

| 드래곤볼 찾기 | 디퓨전 모델 | 교재 내 연결 |
|---|---|---|
| 드래곤볼 7개 | 데이터 분포의 모드들 | 2장 심플렉스의 점 |
| 전파 강도 지도 | 확률밀도 p(x) | 5장 엔트로피 |
| 전파의 감쇠 | 가우시안 커널 | 4장 혼합 |
| 레이더 바늘 방향 | ∇log p (스코어) | 9장 ∇log p |
| 안개의 농도 | 노이즈 수준 σ(t) | 8장 매니폴드 |
| 안개가 걷히는 과정 | reverse diffusion | — |
| 과거 기록으로 레이더 제작 | 스코어 매칭 | 11장 사영 |
| 바람 | 랑주뱅 노이즈 | — |
| 참가자의 출발점 | z ~ N(0, I) | — |
| 볼에 도착 | 생성된 샘플 | — |

### 수확

"디퓨전 모델은 마법이 아니다.
혼합분포(4장)의 전파 지형 위에서,
스코어 함수(9장)가 가리키는 방향을 따라,
안개를 걷으며(매니폴드로의 귀환),
신경망이 학습한 레이더(11장 사영)로 걸어가는 것이다.
이 교재의 모든 도구가 하나의 알고리즘 안에 들어 있다."

---

## 전환: "길 자체를 배울 수는 없는가?"

디퓨전은 작동한다. 그런데 생각해보면 우회하는 느낌이 있다.

우리가 진짜 원하는 건 "노이즈에서 데이터로 가는 것"이다.
디퓨전은 그걸 직접 하는 대신, 매 지점의 스코어를 배우고
그 스코어를 따라 조금씩 걷는다.
안개의 농도가 바뀔 때마다 레이더를 다시 캘리브레이션해야 한다.

더 직접적인 방법이 있지 않을까?
출발점에서 도착점까지의 길을 통째로 배우면 안 되나?

---

## ② 플로우 매칭 — 길을 통째로 배우기

### 핵심 아이디어

스코어(매 지점의 방향)를 배우는 대신,
노이즈 분포에서 데이터 분포로 흘러가는 **속도장(velocity field)**을 직접 학습한다.
각 시간 t에서 "이 위치에 있는 입자는 이 방향으로, 이 속도로 움직여야 한다"를
하나의 벡터장으로 표현하고, 신경망이 그 벡터장을 배운다.

### 드래곤볼 비유의 확장

디퓨전에서 참가자는 매 순간 레이더를 확인하며 한 걸음씩 걸었다.
레이더는 "지금 여기서 가장 가파른 방향"만 알려준다.
안개 수준이 바뀌면 레이더를 재조정해야 한다.

플로우 매칭에서는 주최 측이 아예 내비게이션을 만들어준다.
"출발점 A에서는 이 경로, 출발점 B에서는 저 경로."
참가자는 레이더를 볼 필요 없이 내비가 지시하는 대로 걷는다.
안개 수준을 신경 쓸 필요도 없다 — 경로가 이미 전부 계획되어 있으니까.

### 교재 도구와의 대응

| 플로우 매칭의 요소 | 교재 내 연결 |
|---|---|
| 노이즈 분포 → 데이터 분포의 경로 | 4장: "두 점 사이를 잇는 길" |
| 가장 단순한 경로 = 직선 보간 | 4장: "첫 번째 길 — 덧셈으로 걷기" |
| 더 좋은 경로 = optimal transport path | 최적 수송 — 가장 경제적인 길 (아래) |
| 속도장을 신경망으로 근사 | 11장: 사영 — 큰 세계를 작은 세계에 옮기기 |
| 데이터 분포가 사는 곳 | 8장 호기심 상자: 매니폴드 가설 |

### 4장의 나선형 회수

4장에서 학생은 "두 분포 사이를 걷는 길이 두 개 있다"를 배웠다.
덧셈의 길과 곱셈의 길. 추상적이었다.

플로우 매칭에서 conditional flow matching의 가장 기본적인 형태가
노이즈 점 z와 데이터 점 x 사이의 **직선 보간**이다:

    x_t = (1 - t) * z + t * x

이것은 4장의 "첫 번째 길 — 덧셈으로 걷기"의 실현이다.
학생은 여기서 "아, 4장에서 본 그 직선이 실제로 쓰이는 거구나"를 체험한다.

그리고 직선이 최선이 아닐 수 있다.
두 분포 사이를 잇는 길 중 "가장 경제적인 길"을 찾는 것이
최적 수송이다.

### 와서스타인 거리와 최적 수송

KL 발산은 "두 분포가 같은 사건에 얼마나 다른 확률을 매기는가"를 묻는다.
와서스타인 거리는 전혀 다른 질문을 한다 —
"한 분포를 다른 분포로 옮기려면 흙을 얼마나 날라야 하는가?"
3장에서 본 비대칭 거리와는 또 다른 종류의 거리다.

와서스타인 거리의 배경에는 분포를 "옮기는" 기하학이 있다.
심플렉스 위의 점을 다른 점으로 변환하는 가장 경제적인 경로를 찾는 것 —
4장에서 우리가 본 "길"의 개념이 여기서 새로운 의미를 얻는다.

플로우 매칭에서 이것이 구체적으로 작동한다.
직선 보간은 가장 단순한 경로이지만,
최적 수송 경로(optimal transport path)는 "흙을 가장 적게 나르는 길"이다.
경로가 꼬이지 않고, 입자들이 서로 부딪히지 않는다.
같은 도착지에 가되, 더 경제적으로 간다.

### 파이썬: 디퓨전과 플로우 매칭의 비교

# conditional flow matching의 직선 보간
# z: 노이즈 점, x: 데이터 점, t: 시간 (0→1)
x_t = (1 - t) * z + t * x       # 시간 t에서의 위치
v_target = x - z                 # 속도장 타겟 (상수!)

# 디퓨전의 스코어 타겟과 비교:
# score_target = -(x_t - x) / σ(t)²   # 시간과 위치에 따라 변한다
# 플로우 매칭의 타겟은 (x - z)로 일정하다. 더 단순하다.

### JSX
viz: ch14/reverse-diffusion

[왼쪽 패널] 디퓨전 모드
  2D 평면 위에 데이터 점들(드래곤볼).
  랜덤 출발점에서 ∇log p 화살표를 따라
  한 걸음씩 이동. 안개 슬라이더.

[오른쪽 패널] 플로우 매칭 모드
  같은 2D 평면. 같은 데이터 점들.
  랜덤 출발점에서 데이터 점까지의
  직선 경로(또는 OT 경로)가 미리 그려져 있다.
  시간 슬라이더 t를 움직이면 모든 입자가
  경로를 따라 동시에 이동.

[하단] 두 방법의 궤적을 겹쳐 그리기.
  디퓨전의 궤적은 비틀거리고(랑주뱅 노이즈),
  플로우 매칭의 궤적은 매끈하다.

→ "같은 출발점, 같은 도착점. 길이 다르다."

---

## ③ 매니폴드만 바꾸면 — 비디오, 3D, 로보틱스

플로우 매칭의 프레임은 "어떤 매니폴드 위에서든"
노이즈에서 데이터로의 흐름을 설계할 수 있게 한다.
이미지(픽셀 공간의 매니폴드)는 하나의 사례일 뿐이다.

### 확장의 풍경

| 영역 | 매니폴드 | 교재 내 연결 |
|------|---------|-------------|
| 비디오 생성 | 시공간 매니폴드 — 프레임의 시퀀스가 사는 공간 | 8장: 매니폴드의 직관 |
| 3D 씬 생성 | 3D 좌표 / radiance field의 매니폴드 | 8장: 좌표 패치의 다중성 |
| 로봇 동작 | 관절 각도 공간의 매니폴드 | **8장 호기심 상자: 관절 인형** |

### 관절 인형의 귀환

8장 호기심 상자에서 관절 인형은 비유였다.
"관절이 10개면 자유도는 10.
모든 가능한 자세는 고차원 공간 속의 10차원 매니폴드."
학생은 "매니폴드의 예시"로만 받아들였다.

여기서 그 비유가 실제가 된다.
로봇 팔의 동작 생성이 정확히 이 문제다.
관절 각도 공간이라는 매니폴드 위에서,
정지 자세(노이즈)에서 목표 동작(데이터)으로의 플로우를 학습한다.

비유였던 것이 실제가 되는 순간.

이것은 매니폴드 가설의 서사적 궤적의 두 번째 회수이기도 하다.
첫 번째가 드래곤볼(디퓨전에서의 귀환)이었고,
두 번째가 관절 인형(로보틱스에서의 실현)이다.
`,wm=`# 플로우 매칭 — 길을 통째로 배우기

14장에서 디퓨전 모델은 매 지점의 방향(스코어)을 배웠다.
참가자는 안개 속에서 레이더를 보고 한 걸음씩 걸었다.
안개 수준이 바뀔 때마다 레이더를 재조정해야 했다.

그런데 생각해보면 우회하는 느낌이 있다.
우리가 진짜 원하는 건 "노이즈에서 데이터로 가는 것"이다.
매 순간의 방향을 배우는 대신,
출발점에서 도착점까지의 길을 통째로 배우면 안 되나?


![노이즈에서 데이터로 — 직선으로 흐르는 강물](/images/chapters/ch15-flow-straight.svg)

## 철새의 비행 — 속도장이라는 아이디어

### 한 개념

플로우 매칭은 매 지점의 방향이 아니라,
노이즈에서 데이터로 흘러가는 속도장(velocity field)을 직접 학습한다.

### 왜

"디퓨전이 매 순간 나침반을 보고 걷는 것이라면,
경로 전체를 미리 알 수는 없는가?"

### 비유

철새의 이주 —

![두루미의 이주 — 출발점은 제각각이지만, 속도장을 따라 모두 도착한다](/images/chapters/crane-migration.jpg)

가을이 온다.
시베리아의 툰드라(노이즈)에 흩어져 있던 수천 마리의 새들이
한반도의 습지(데이터)로 날아간다.

각 새는 제각각의 출발점에서 출발한다.
시베리아 동쪽 끝의 새도 있고 서쪽 끝의 새도 있다.
도착지도 제각각이다.
천수만으로 가는 새도 있고 순천만으로 가는 새도 있다.

![순천만 습지 — 철새들의 도착지](/images/chapters/suncheon-bay.jpg)

그런데 모든 새가 안전하게 도착한다.

어떻게?

새는 매 순간 나침반을 보지 않는다.
유전자에 각인된 비행 프로그램이 있다.
"이 위도에서는 이 방향으로, 이 속도로."
시간과 위치의 함수로 정해진 속도장.
새는 이 속도장을 따라 흐를 뿐이다.

### 디퓨전과의 차이

14장의 드래곤볼 참가자는 레이더를 매 순간 확인했다.
레이더는 "지금 여기서 가장 가파른 방향"만 알려준다.
안개 수준이 바뀌면 레이더를 재조정해야 한다.

철새는 다르다.
비행 프로그램이 경로 전체를 이미 품고 있다.
"시간 t에 위치 x에 있다면, 속도는 v(x, t)이다."
안개 수준을 신경 쓸 필요 없다 —
프로그램이 이미 전부 계획되어 있으니까.

### 핵심 아이디어를 정리하면

디퓨전: 매 지점의 스코어 ∇log p(x, t)를 배운다.
플로우 매칭: 매 지점의 속도 v(x, t)를 배운다.
스코어는 "어디로 끌리는가"이고,
속도는 "어디로 흘러가는가"이다.
미묘하지만 본질적인 차이.

### 수확

"디퓨전이 매 순간의 나침반이라면,
플로우 매칭은 유전자에 각인된 비행 프로그램이다."


## 가장 단순한 경로 — 직선 비행

### 한 개념

conditional flow matching의 가장 기본 형태는
노이즈 점 z와 데이터 점 x 사이의 직선 보간이다.

### 비유

직선 비행 —
시베리아에서 한반도까지 가장 단순한 경로는
출발점과 도착점을 잇는 직선이다.
바람도 무시하고, 지형도 무시하고,
일정한 속도로 직진.

이것이 conditional flow matching의 직선 보간이다:
    x_t = (1 - t) · z + t · x
시간 t에서의 위치는
출발점 z와 도착점 x의 가중평균이다.
t = 0이면 출발점(노이즈), t = 1이면 도착점(데이터).

### 4장의 나선형 회수

잠깐. 이 수식을 본 적이 있다.
4장 "첫 번째 길 — 덧셈으로 걷기"에서
(1-t)·p₁ + t·p₂
를 배웠다. 두 분포의 가중평균. 덧셈의 길.
심플렉스 위의 직선.

플로우 매칭의 직선 보간은 이것의 실현이다.
학생은 여기서 재발견한다 —
"4장에서 본 그 직선이 실제로 쓰이는 거구나."

그리고 6장도 돌아온다.
(1 - t) · z + t · x 는 볼록 결합이다.
두 점을 잇는 선분 위의 점.
6장에서 볼록 결합이 "사이"를 정의했듯,
여기서도 노이즈와 데이터 "사이"를 정의한다.
t가 0에서 1로 가는 것은
볼록 결합의 가중치가 이동하는 것이다.

### 속도장의 단순함

직선 보간에서 속도장은 놀랍도록 단순하다.
    v_target = x - z
출발점에서 도착점을 향한 상수 벡터.
시간에 따라 변하지 않는다!

디퓨전의 스코어 타겟은
    score_target = -(x_t - x) / σ(t)²
시간과 위치에 따라 변한다.
플로우 매칭의 타겟은 (x - z)로 일정하다.
더 단순하다. 학습이 더 안정적인 이유가 여기 있다.

### JSX
viz: ch15/velocity-field

직선 비행 시각화.

[왼쪽] 2D 평면. 출발점들(파란 점, 가우시안 노이즈)과
도착점들(빨간 점, 데이터 클러스터).
각 출발점에서 대응하는 도착점까지 직선이 그려져 있다.
t 슬라이더를 움직이면 모든 점이 직선을 따라 동시에 이동.
t = 0: 파란 구름. t = 1: 빨간 클러스터.

[오른쪽] 속도장 시각화.
격자 위의 작은 화살표들.
직선 보간이므로 화살표가 전부 같은 방향(상수).
"단순하다. 놀라울 정도로."

→ t를 0에서 1로 천천히 올려보자.
  파란 구름이 빨간 클러스터로 변해가는 과정이 보이는가?
  이것이 "생성"이다.

### 파이썬

    # conditional flow matching의 직선 보간
    z = np.random.randn(n, 2)           # 노이즈 출발점
    x = sample_data(n)                   # 데이터 도착점
    t = np.random.uniform(0, 1, (n, 1))  # 랜덤 시간
    x_t = (1 - t) * z + t * x            # 시간 t에서의 위치
    v_target = x - z                      # 속도장 타겟 (상수!)

    # 비교: 디퓨전의 스코어 타겟
    # score_target = -(x_t - x) / sigma(t)**2  # 시간과 위치에 의존

### 수확

"플로우 매칭의 가장 단순한 형태는
4장의 '첫 번째 길 — 덧셈으로 걷기'의 실현이다.
직선 보간. 속도장은 상수. 놀라울 정도로 단순하다."


## 더 좋은 경로 — 최적 수송

### 한 개념

직선이 최선은 아니다.
경로가 꼬이지 않도록, 총 이동 거리가 최소가 되도록
출발점과 도착점을 매칭하면 더 효율적이다.

### 왜

"직선 비행이 항상 최선인가?
새들이 서로 부딪히거나 경로가 꼬이면?"

### 비유

철새의 항로 최적화 —
수천 마리의 새가 동시에 출발한다.
각자 자기 도착지를 향해 직선으로 날면
경로가 꼬인다.
시베리아 동쪽의 새가 한반도 서쪽으로,
시베리아 서쪽의 새가 한반도 동쪽으로 가면
중간에서 경로가 교차한다.
부딪히고, 난류가 생기고, 에너지가 낭비된다.

자연은 더 영리하다.
시베리아 동쪽의 새는 한반도 동쪽으로,
시베리아 서쪽의 새는 한반도 서쪽으로.
경로가 꼬이지 않는다.
총 비행 거리가 최소가 된다.

이것이 최적 수송(optimal transport)이다.

### 와서스타인 거리와의 연결

3장에서 KL 발산은
"두 분포가 같은 사건에 얼마나 다른 확률을 매기는가"를 물었다.
와서스타인 거리는 전혀 다른 질문을 한다 —
"한 분포를 다른 분포로 옮기려면
흙을 얼마나 날라야 하는가?"

KL은 확률의 비율을 본다. 같은 위치에서의 차이.
와서스타인은 확률의 이동을 본다. 한 곳에서 다른 곳으로의 운반.
3장에서 본 비대칭 거리와는 또 다른 종류의 거리다.

플로우 매칭에서:
직선 보간 = 각 새가 독립적으로 직진 (쉽지만 비효율적).
OT 경로 = 새들의 출발-도착 매칭을 최적화 (효율적).
경로가 꼬이지 않고, 총 이동 거리가 최소.

### JSX
viz: ch15/velocity-field

직선 보간 vs OT 경로 비교.

[왼쪽] 랜덤 매칭 + 직선 보간.
출발점과 도착점이 랜덤으로 연결.
경로가 많이 교차한다.
"총 비행 거리" 숫자 표시.

[오른쪽] 최적 매칭 + 직선 보간.
출발점과 도착점이 최적으로 매칭.
경로가 거의 교차하지 않는다.
"총 비행 거리" 숫자가 왼쪽보다 작다.

→ 두 패널을 나란히 보자.
  같은 출발점, 같은 도착점인데
  매칭이 다르면 총 거리가 이렇게 다를 수 있는가?

### 파이썬

    from scipy.optimize import linear_sum_assignment
    # 출발점-도착점 사이의 거리 행렬 계산
    cost = np.linalg.norm(z[:, None] - x[None, :], axis=2)
    # 최적 매칭 (헝가리안 알고리즘)
    row_idx, col_idx = linear_sum_assignment(cost)
    # OT 매칭 vs 랜덤 매칭의 총 거리 비교

### 수확

"직선이 최선은 아니다.
출발점과 도착점의 매칭을 최적화하면
경로가 꼬이지 않고 총 이동 거리가 줄어든다.
이것이 최적 수송이다.
KL이 '확률의 비율'을 보는 거리라면,
와서스타인은 '확률의 이동'을 보는 거리다."


## 디퓨전과 플로우 매칭 — 나란히 보기

### 한 개념

같은 생성 문제를 두 가지 다른 방식으로 푼다.
하나는 매 순간의 방향을, 하나는 경로 전체를.

### JSX
viz: ch15/comparison

드래곤볼 vs 철새 — 나란히 비교.

[왼쪽 패널] 디퓨전 모드
14장의 드래곤볼 시각화 축소판.
2D 평면 위에 데이터 점들(봉우리).
랜덤 출발점에서 ∇log p 화살표를 따라
한 걸음씩 이동. 비틀거림(랑주뱅 노이즈).
안개 슬라이더.

[오른쪽 패널] 플로우 매칭 모드
같은 2D 평면. 같은 데이터 점들.
랜덤 출발점에서 도착점까지의
직선 경로(또는 OT 경로)가 미리 그려져 있다.
t 슬라이더를 움직이면 모든 점이
경로를 따라 동시에 이동.

[하단] 두 방법의 궤적을 겹쳐 그리기.
디퓨전의 궤적은 비틀거리고(노이즈),
플로우 매칭의 궤적은 매끈하다.

→ "같은 출발점, 같은 도착점. 길이 다르다."

### 대응표

| 드래곤볼 찾기 (디퓨전) | 철새의 이주 (플로우 매칭) |
|---|---|
| 레이더 (∇log p) | 비행 프로그램 (v(x,t)) |
| 매 순간 방향 확인 | 경로가 미리 계획됨 |
| 안개 수준에 따라 재조정 | 시간 의존 속도장이 전부 품음 |
| 비틀거림 (랑주뱅 노이즈) | 매끈한 궤적 |
| 스코어 매칭 (11장 사영) | 속도장 학습 (11장 사영) |
| 레이더 제작 = 사영 | 비행 프로그램 학습 = 사영 |

### 수확

"디퓨전은 매 순간의 나침반,
플로우 매칭은 유전자의 비행 프로그램.
둘 다 같은 곳에 도착하지만 길이 다르다.
4장에서 본 '같은 양 끝점, 다른 경로'의 가장 큰 실현."


## 매니폴드만 바꾸면 — 비디오, 3D, 로보틱스

플로우 매칭의 프레임은
"어떤 매니폴드 위에서든"
노이즈에서 데이터로의 흐름을 설계할 수 있게 한다.
이미지(픽셀 공간의 매니폴드)는 하나의 사례일 뿐이다.

### 철새 비유의 확장

이미지 생성 = 2D 하늘을 나는 새.
비디오 생성 = 시간 축이 추가된 4D 하늘을 나는 새.
3D 생성 = 3D 공간을 나는 새.
로봇 동작 = 관절 각도 공간을 나는 새.

"하늘의 차원이 달라져도 비행 프로그램의 구조는 같다."

### 관절 인형의 귀환

8장 호기심 상자에서 관절 인형은 비유였다.
"관절이 10개면 자유도는 10.
모든 가능한 자세는 고차원 공간 속의 10차원 매니폴드."
학생은 "매니폴드의 예시"로만 받아들였다.

여기서 그 비유가 실제가 된다.
로봇 팔의 동작 생성이 정확히 이 문제다.
관절 각도 공간이라는 매니폴드 위에서,
정지 자세(노이즈)에서 목표 동작(데이터)으로의 플로우를 학습한다.

비유였던 것이 실제가 되는 순간.

| 영역 | 매니폴드 | 교재 연결 |
|------|---------|------------|
| 이미지 | 픽셀 공간의 부분매니폴드 | 8장 매니폴드 가설 |
| 비디오 | 시공간 매니폴드 | 8장 좌표 패치 |
| 3D | radiance field의 매니폴드 | 8장 좌표 패치 |
| 로봇 동작 | 관절 각도 공간 | **8장 호기심 상자: 관절 인형** |

### 수확

"플로우 매칭의 프레임은 매니폴드에 무관하다.
하늘의 차원만 바꾸면 같은 비행 프로그램이 작동한다.
8장에서 비유였던 관절 인형이 여기서 실제가 된다."

생성의 기하학을 보았다. 노이즈에서 데이터로 가는 길.
그런데 생성된 것이 "좋은" 것인지는 누가 판단하는가?
플로우 매칭이 학습한 분포는 데이터의 분포다 — 인터넷의 모든 텍스트, 모든 이미지.
그 안에는 좋은 것도 있고 나쁜 것도 있다.
모델이 "좋은 것만" 만들게 하려면 — 넓게 배운 것을 다시 좁혀야 한다.
그 좁힘의 방향이 정확히 10장에서 본 쌍대의 한쪽이다.


---

<!-- 집필 노트 -->

## 집필 노트: 15장의 비유 체계

중심 비유: **철새의 이주**.

선택 이유:
1. 14장 드래곤볼(탐색/수렴)과 감각적으로 구별됨.
   드래곤볼은 정적 풍경에서의 하강. 철새는 동적 흐름.
2. 속도장의 감각과 자연스럽게 맞음.
   바람(벡터장)을 타고 흐르는 새.
   "비행 프로그램" = 학습된 속도장.
3. OT와의 연결이 자연스러움.
   경로가 꼬이지 않는 최적 항로 배정 = 최적 수송.
4. 매니폴드 확장이 쉬움.
   "하늘의 차원만 바꾸면" = 다른 매니폴드.

비유 대응:
| 철새의 이주 | 플로우 매칭 | 교재 연결 |
|---|---|---|
| 시베리아 (여름 서식지) | 노이즈 분포 | — |
| 한반도 (겨울 서식지) | 데이터 분포 | 2장 심플렉스의 점 |
| 비행 프로그램 | 속도장 v(x, t) | — |
| 직선 비행 | 직선 보간 (1-t)z + tx | 4장 덧셈의 길, 6장 볼록 결합 |
| 최적 항로 배정 | OT 매칭 | — |
| 경로 교차 방지 | 와서스타인 최적화 | 3장 거리 (다른 종류) |
| 유전자 각인 | 신경망 학습 | 11장 사영 |
| 다른 차원의 하늘 | 다른 매니폴드 | 8장 |
`,Sm=`# 넓히기와 좁히기 — 언어모델이 배우는 두 방향

15장의 마지막에서 질문을 남겼다.
플로우 매칭이 학습한 분포에는 좋은 것도 나쁜 것도 있다.
넓게 배운 것을 다시 좁혀야 한다고.
그 좁힘의 방향이 10장에서 본 쌍대의 한쪽이라고.

10장에서 우리는 쌍대를 보았다.
와일드카드는 가능성을 넓히고, 쉼표는 가능성을 좁힌다.
혼합은 무지의 고백이고, 곱셈은 확신의 기록이다.
덧셈의 길과 곱셈의 길. m-측지선과 e-측지선.

그때는 추상적이었다.
여기서 그 쌍대가 실제가 된다.

![넓히기(OR)와 좁히기(AND)](/images/chapters/ch16-or-and.svg)

언어모델이 태어나서 쓸모 있는 존재가 되기까지의 여정 —
프리트레인, SFT, 강화학습 — 이 여정의 매 단계가
OR인가 AND인가의 선택이다.
그리고 그 선택이 파라미터 공간에서 어떤 방향으로 걷는 것인지를
이 교재의 도구로 읽을 수 있다.


## 스펙트럼 — 프리트레인은 OR이다

### 한 개념

프리트레인은 가능성을 최대한 넓게 덮는 과정이다.
파라미터 공간에서 이것은 덧셈의 방향 — m-측지선을 따라 걷는 것이다.

### 왜

"GPT가 셰익스피어처럼 쓸 수도 있고
레딧 댓글처럼 쓸 수도 있고
논문처럼 쓸 수도 있는 이유는 무엇인가?
이 세 능력이 어떻게 한 모델 안에 공존하는가?"

### 비유

라디오의 전 대역 스캔 —

![AM/FM 주파수 다이얼 — 모든 대역을 훑는다](/images/chapters/radio-dial.jpg)

라디오를 처음 켜면 아무 방송도 안 잡힌다.
전 대역을 스캔한다.
AM, FM, 단파, 장파 — 모든 주파수를 훑는다.
클래식 방송도 잡히고, 뉴스도 잡히고,
외국어 방송도 잡히고, 잡음도 잡힌다.
스캔이 끝나면 라디오는 "어디에 뭐가 있는지" 안다.
아직 어떤 방송을 들을지 정하지 않았다.
모든 채널이 프리셋에 저장되어 있다.

프리트레인이 이것이다.
인터넷의 모든 텍스트를 본다.
셰익스피어도 보고, 레딧도 보고, 논문도 보고, 레시피도 본다.
각 데이터가 하나의 방송국이다.
모델은 이 모든 방송국의 위치를 파라미터 안에 기록한다.

### 10장의 언어로

이것은 와일드카드다.
{셰익스피어 | 레딧 | 논문 | 레시피 | 코드 | 시 | 법률문서 | ...}
가능성을 넓히는 방향. 혼합. OR.

### 교재 도구와의 연결

cross-entropy loss를 최소화한다는 것은
모델 q가 데이터 분포 p의 모든 봉우리를 덮도록 하는 것이다.
KL(p‖q)를 줄이는 것.
3장에서 이것은 "현실 p의 눈으로 본 지도 q의 부정확함"이었다.
11장에서 이것은 m-사영이었다 —
현실이 집중된 곳에서 모형이 정확하면 OK.
빠뜨리는 것을 싫어하는 사영.

매니폴드가 팽창하는 방향.
봉우리가 전부 살아 있는 방향.
파라미터 공간에서 η 좌표의 직선 —
덧셈의 길을 걷는 것이다.

2장에서 분포는 심플렉스 위의 점이었다.
프리트레인은 그 점을 심플렉스의 내부 깊숙한 곳 —
가능한 한 많은 꼭짓점에서 멀리 떨어진 곳 — 으로 밀어넣는 것이다.
어느 한 꼭짓점(하나의 확정된 답)에 치우치지 않는 점.

### JSX
viz: ch16/spectrum

심플렉스 위에서 프리트레인의 궤적.

[왼쪽] 심플렉스 위에 여러 "방송국"(데이터 클러스터)을 점으로 표시.
     처음에 모델(큰 점)은 심플렉스 중심(균등분포) 근처에서 출발.
     프리트레인이 진행되면서 모델의 분포가
     모든 데이터 클러스터를 덮는 방향으로 변화.
     → 봉우리가 하나씩 살아나는 애니메이션.

[오른쪽] 엔트로피 그래프.
     프리트레인 초기: 엔트로피가 높다 (균등에 가까움).
     학습이 진행되면서: 엔트로피가 약간 내려가지만
     여전히 높은 수준을 유지.
     "많이 아는 모델은 여전히 불확실하다 —
     어떤 맥락에서 어떤 말을 할지 정해지지 않았으니까."

### 파이썬

간단한 혼합 가우시안 데이터에서
모델을 학습시키면서 각 스텝의 로그우도와 엔트로피를 추적.
학습이 진행되면서 모델이 모든 모드를 덮어가는 과정을 시각화.

### 수확

"프리트레인은 OR이다.
가능성을 넓히는 방향. 혼합의 길. m-측지선.
모든 봉우리를 살려두는 사영."


## 호기심 상자: 에피플렉시티 — 모든 방송이 같은 가치는 아니다

프리트레인이 OR이라면, 무엇을 OR할 것인가?

5장에서 우리는 "놀라움 = -log(확률)"을 배웠다.
엔트로피는 "평균 놀라움"이었다.
그런데 질문이 하나 있다.
누구의 놀라움인가?

섀넌의 정보이론은 무한한 계산 능력을 가진 관찰자를 가정한다.
그런 관찰자에게 의사난수 생성기의 출력은 정보량이 0이다 —
짧은 시드에서 결정론적으로 나오니까.
그런데 신경망에게는? 완벽한 노이즈로 보인다.
아무리 학습해도 패턴을 찾을 수 없다.

반대의 사례도 있다.
체스 엔진이 만들어내는 기보는 결정론적이지만,
신경망에게는 엄청난 학습 가능한 구조를 담고 있다.
수를 하나하나 예측하려면 깊은 전략적 이해가 필요하다.

에피플렉시티(epistemic complexity)는
정보를 두 성분으로 분해한다:
① time-bounded entropy — 유한한 관찰자에게 노이즈처럼 보이는 부분.
     의사난수열, 해시값, 암호화된 데이터.
     패턴이 있지만 관찰자의 계산 능력으로는 보이지 않는다.
② epiplexity — 관찰자가 실제로 학습할 수 있는 구조적 정보.
     알고리즘의 논리, 언어의 문법, 물리 법칙의 규칙성.
     학습 곡선이 빠르게 떨어지면 에피플렉시티가 높은 것.

### 실용적 측정

학습 곡선 아래 면적.
손실이 빠르게 떨어지면 → 구조가 많다 → 에피플렉시티 높음.
손실이 안 떨어지면 → 구조가 없다 → 에피플렉시티 0.

### 프리트레인 데이터 선택에 대한 함의

좋은 프리트레인 데이터는
퍼플렉시티(엔트로피)를 최소화하는 데이터가 아니라,
에피플렉시티(학습 가능한 구조)를 최대화하는 데이터.

랜덤 API 키와 설정 파일로 가득한 코드 →
     엔트로피는 높지만 에피플렉시티는 낮다.
알고리즘의 내부 작동을 보여주는 잘 짜인 코드 →
     엔트로피는 적당하지만 에피플렉시티는 높다.

5장의 언어로: -log가 재는 놀라움에는 두 종류가 있었다.
배울 수 있는 놀라움과 배울 수 없는 놀라움.
프리트레인이 OR을 할 때, 배울 수 있는 놀라움을 많이 품은
데이터를 선택하는 것이 현명하다.

### 수확

"같은 엔트로피라도 모든 정보가 같은 가치는 아니다.
유한한 관찰자에게는
학습 가능한 구조(에피플렉시티)와
학습 불가능한 잡음(time-bounded entropy)이 구분된다.
프리트레인의 OR은 에피플렉시티가 높은 것을 OR해야 한다."


## 시그널 — 좁히기는 AND이다

### 한 개념

SFT와 RLVR은 가능성을 좁히는 과정이다.
파라미터 공간에서 이것은 곱셈의 방향 — e-측지선을 따라 걷는 것이다.

### 왜

"프리트레인된 모델은 뭐든 할 수 있지만
뭘 해야 할지 모른다.
질문에 답하는 대신 질문을 이어 붙이기도 한다.
'정확하고 도움이 되는 답변'으로 좁히는 과정은
파라미터 공간에서 무슨 일인가?"

### 비유

라디오의 튜닝 —
전 대역 스캔이 끝났다.
이제 듣고 싶은 방송을 고른다.

SFT = 대역 필터.
     "뉴스 채널 근처로 좁혀라."
     AM 대역의 뉴스 주파수 근처로 범위를 줄인다.
     아직 정확한 주파수는 아니다.
     근처의 몇 개 채널이 겹쳐 들린다.

     10장의 언어: 쉼표를 추가하기 시작.
     {도움이 되는 답변}, {정중한 톤}.
     OR에서 AND로 기울기 시작하는 전환점.

RLVR = 미세 튜닝 다이얼.
     정확히 하나의 주파수에 맞춘다.
     잡음이 사라지고 선명한 시그널이 나온다.
     "주어진 수학 문제에 대해,
     단계별로 추론하여,
     검증 가능한 정답에 도달하라."

     매 조건이 필터로 곱해진다:
     수학 문제 × 단계별 추론 × 정확한 답 × 검증 가능
     10장의 프롬프트 확장:
     쉼표가 추가될 때마다 매니폴드가 수축.
     겹치는 영역만 살아남는다.
     곱셈의 길. e-측지선. θ 좌표에서 직선.

### 파라미터 공간에서 일어나는 일

프리트레인 → SFT → RLVR의 궤적을
파라미터 공간 위에 그려보자.

프리트레인: 넓은 영역을 탐색.
     파라미터가 크게 움직인다.
     많은 방향으로 동시에 변한다.
     η 좌표에서 봤을 때 — 기대값이 데이터의 통계량을 따라간다.

SFT: 프리트레인 끝점 근처에서 작은 조정.
     파라미터의 변화 방향이 좁아진다.
     "지시를 따르는" 부분공간 안에서만 움직인다.

RLVR: 더 작은 조정이지만 방향이 날카롭다.
     보상이 높은 경로로 수렴.
     θ 좌표에서 봤을 때 — 자연모수가 특정 방향으로 쏠린다.

### JSX
viz: ch16/trajectory

프리트레인 → SFT → RLVR 궤적 시각화.

[메인 패널] 2D 파라미터 공간 위에 세 단계의 궤적.
     프리트레인: 넓은 곡선 (탐색).
     SFT: 짧은 화살표 (방향 전환).
     RLVR: 더 짧지만 날카로운 화살표 (수렴).

[오른쪽] 대응하는 분포의 변화.
     프리트레인 끝: 다봉분포 (여러 능력이 공존).
     SFT 끝: 봉우리 일부가 강조됨.
     RLVR 끝: 하나의 봉우리가 지배적.

→ SFT와 RLVR 사이에서 분포의 봉우리가
  줄어드는 것을 관찰하자.
  이것이 "좁히기"의 시각적 의미다.

### 파이썬

간단한 다봉 분포에서 출발하여
(1) 모드 커버링 (forward KL 최소화) → 모든 봉우리 유지
(2) 모드 시킹 (reverse KL 최소화) → 하나의 봉우리에 수렴
두 과정을 나란히 시각화.

### 수확

"프리트레인은 스펙트럼 전체를 듣는 것이고,
RLVR은 하나의 시그널에 맞추는 것이다.
OR에서 AND로. 혼합에서 곱셈으로.
매니폴드의 팽창에서 수축으로.
이것이 언어모델 훈련의 기하학적 구조다."


## 호기심 상자: 당신은 이미 EM을 하고 있다

프리트레인과 RLVR은 상당한 비용이 소요되는 대규모 작업이다.
그런데 넓히기와 좁히기는 거대한 모델 훈련만의 이야기가 아니다.

실리태번(SillyTavern)의 채팅 프리셋을 만들어본 적이 있는가?
스테이블 디퓨전의 프롬프트 와일드카드를 다듬어본 적이 있는가?
그렇다면 당신은 이미 EM을 하고 있었던 것이다.

### 프리셋은 분포를 조각하는 도구다

혼동하지 않게 확실히 해두자.
프리셋 하나는 하나의 대상을 만드는 도구가 아니다.
그 프리셋으로 실행할 수 있는 무수한 채팅 세션들의 **분포**를 조각하는 도구다.

와일드카드도 마찬가지다.
하나의 이미지를 만드는 것이 아니라,
그 와일드카드로 생성할 수 있는 무수한 이미지들의 **집합**을 디자인하는 것이다.

2장에서 분포 전체가 점 하나가 되었듯,
프리셋 하나가 분포 하나다.
프리셋을 고치는 것은 그 점을 옮기는 것이다.

### 넓히기 — 가능성을 연다

캐릭터를 추가한다. 배경 설정을 확장한다.
와일드카드에 선택지를 넣는다.

     {전투 | 일상 | 로맨스 | 미스터리}

이것은 10장에서 본 와일드카드 — OR — 그 자체다.
봉우리가 늘어난다.
가능한 세션의 범위가 팽창한다.
엔트로피가 올라간다.
혼합의 방향. m-측지선.

### 좁히기 — 가능성을 다듬는다

"이 어휘는 절대 쓰지 마."
"항상 존댓말로."
"전투 장면에서는 3문장 이내로."
"NSFW는 안됩니다."

매 조건이 필터로 곱해진다.
10장에서 본 쉼표 — AND.
겹치는 영역만 살아남는다.
가능한 세션의 범위가 수축한다.
곱셈의 방향. e-측지선.

### 교대 — 그리고 수렴

프리셋 제작자는 이 두 조작을 번갈아 한다.

캐릭터를 추가하고(OR), 결과를 돌려보고,
원치 않는 패턴이 나오면 제약을 추가하고(AND),
다시 돌려보고, 너무 좁으면 다시 풀어주고(OR),
다시 돌려보고, 또 다듬고(AND).

넓히고, 좁히고, 넓히고, 좁히고.

12장의 EM이었다.
E-스텝(가능성을 열어두기)과 M-스텝(파라미터를 확정하기)의 교대.
프리셋 제작자는 이것을 손으로 하고 있었던 것이다.

### 좋은 프리셋이 수렴한 프리셋이다

12장에서 EM의 수렴이 보장되는 이유는 직교성이었다.
e-사영과 m-사영이 서로의 성과를 방해하지 않는 것.

프리셋 제작자에게도 같은 일이 일어난다.
캐릭터를 추가했더니 톤이 깨졌다 — 이것은 두 조작이 직교하지 않은 것이다.
넓히기가 좁히기의 성과를 되돌려버린 것.
이런 프리셋은 아무리 다듬어도 수렴하지 않는다.

반대로, 성공적인 프리셋은
표현하고 싶은 것들이 등장할 수 있게 하면서도(OR의 성과가 살아 있고)
등장하지 말아야 할 것들은 안 나오게 하는(AND의 성과가 살아 있는)
고정점에 도달한 것이다.
넓힘과 좁힘이 더 이상 서로를 방해하지 않는 지점.
12장에서 KL이 더 이상 줄어들지 않는 수렴점과 같은 구조다.

### 수확

"프리트레인과 RLVR만이 넓히기와 좁히기가 아니다.
프리셋을 다듬는 사람, 와일드카드를 조합하는 사람이
이미 직관적으로 이 구조 안에서 일하고 있었다.
정보기하학의 도구는 연구자만의 것이 아니다.
분포를 조각하는 모든 행위 — 넓히고, 좁히고, 다시 넓히고 —
의 밑에 같은 기하학이 깔려 있다."


## 다이얼의 방향 — 어떤 KL을 쓸 것인가

### 한 개념

KL 발산의 방향 선택이
"어떤 종류의 좁히기를 할 것인가"를 결정한다.
이것은 11장의 e-사영과 m-사영의 실전이다.

### 왜

"같은 '좁히기'인데 결과가 다르다면,
그 차이는 어디에서 오는가?"

### 비유

라디오 다이얼의 두 가지 방식 —

방식 1 — 시그널 중심 튜닝 (reverse KL):
     "내가 맞추려는 주파수에서 잡음이 0이 되도록."
     정확한 주파수에 완벽하게 맞추지만,
     바로 옆 주파수의 방송은 완전히 놓친다.
     하나의 채널에 대해서는 최고의 수신 품질.
     그러나 채널을 바꾸면 처음부터 다시 튜닝해야 한다.

     11장: e-사영.
     KL(π‖π_ref) 최소화.
     모형 π가 0인 곳에서 현실 π_ref가 0이 아니면 큰 벌칙.
     → 모형이 자신의 확률을 집중시킨다.
     → mode-seeking. 하나의 봉우리에 수렴.

방식 2 — 대역 커버 튜닝 (forward KL):
     "참조 모델이 확률을 주는 모든 곳을 놓치지 않도록."
     여러 채널을 동시에 약하게 수신.
     어떤 채널도 완전히 놓치지 않지만,
     어떤 채널도 완벽하게 선명하지 않다.

     11장: m-사영.
     KL(π_ref‖π) 최소화.
     현실 π_ref가 집중된 곳에서 모형이 정확하면 OK.
     → 모형이 모든 모드를 덮는다.
     → mode-covering. 다양성 유지.

### GRPO에서의 실현

GRPO는 참조 정책과의 KL 발산을 페널티로 사용한다.
원래 의도는 reverse KL이었다.
그러나 최근 분석에서,
실제 구현이 forward KL을 추정하고 있었을 수 있다는 지적이 있다.
이 차이가 작아 보이지만,
우리 교재의 언어로는 e-사영과 m-사영의 차이다 —
어떤 봉우리를 살리고 어떤 봉우리를 죽이느냐가 달라진다.

12장에서 EM은 e-사영과 m-사영을 번갈아 썼다.
넓히고 좁히고, 넓히고 좁히고 — 그 교대가 수렴했다.
RLHF의 파이프라인도 같은 구조다:
프리트레인(넓히기) → SFT(좁히기) → RLVR(더 좁히기).
한 번의 사영이 아니라 교대의 반복.

### JSX
viz: ch16/trajectory

e-사영 vs m-사영의 LLM 버전.

[왼쪽] 다봉 분포(프리트레인 모델의 출력 분포).
     봉우리 세 개: "정확한 풀이", "우회적 풀이", "틀린 풀이".

[오른쪽 위] reverse KL 최적화 결과.
     하나의 봉우리("정확한 풀이")에 수렴.
     다른 봉우리들은 사라짐.
     Pass@1 높음. Pass@k 낮음.

[오른쪽 아래] forward KL 최적화 결과.
     세 봉우리가 모두 살아 있되 낮아짐.
     "정확한 풀이"와 "우회적 풀이"가 공존.
     Pass@1 보통. Pass@k 높음.

→ 두 결과의 엔트로피를 비교하자.
  어느 쪽이 높은가?
  10장에서 "혼합하면 엔트로피가 커진다"고 했다.
  여기서 그것이 역으로 작동한다 —
  "좁히면 엔트로피가 줄어든다.
  어떻게 좁히느냐에 따라 줄어드는 양이 다르다."

### 파이썬

3면 주사위(심플렉스) 위에서
목표 분포 p = [0.6, 0.3, 0.1] (다봉)에 대해
단봉 가우시안 q를 피팅할 때
reverse KL과 forward KL의 결과를 비교.
11장의 미니 예제를 LLM 맥락으로 재해석.

### 수확

"KL의 방향 = 사영의 방향 = 어떤 봉우리를 살릴 것인가.
reverse KL은 날카롭지만 다양성을 잃고,
forward KL은 넓지만 날카로움을 잃는다.
11장에서 배운 e-사영과 m-사영이
언어모델 정렬의 핵심 설계 결정이었다."


## 너무 좁히면 — entropy collapse

### 한 개념

reverse KL로 좁히면 프리트레인이 심어놓은
봉우리들이 무너진다. 이것이 entropy collapse다.

### 왜

"Pass@1은 올라가는데 Pass@k가 추락한다.
하나의 답을 잘 내는 모델이
왜 여러 번 시도하면 오히려 못하게 되는가?"

### 비유

라디오 다이얼을 너무 좁히면 —
하나의 주파수에 완벽하게 맞췄다.
수신 품질은 최고다.
그런데 다이얼이 굳어버렸다.
다른 채널로 돌리려 하면 움직이지 않는다.
프리트레인 때 기록해둔 프리셋이 전부 지워진 것이다.

RLVR에서 이것이 일어난다.
reverse KL이 곱셈의 길로 좁히면서
"정확한 풀이" 봉우리 하나만 남기고
"우회적 풀이", "창의적 풀이" 봉우리를 눌러버린다.

Pass@1 = 한 번 튜닝해서 잡히는 방송의 품질. 올라간다.
Pass@k = k번 튜닝해서 잡히는 방송의 다양성. 추락한다.
catastrophic forgetting = 프리셋이 지워진 것.

### Best-of-N과의 연결

Best-of-N 샘플링은
"N번 생성해서 가장 좋은 것을 고른다."
이것은 OR과 AND의 결합이다:
N번 생성 = OR (다양한 가능성을 열어둠).
가장 좋은 것을 선택 = AND (조건을 충족하는 것만).

max@k 메트릭은 k개의 생성 중 최고 보상의 기대값이다.
k = 1이면 Pass@1 — 순수한 AND.
k → ∞이면 — OR의 극단. 충분히 시도하면 하나는 맞는다.
k는 OR과 AND 사이를 보간하는 연속 파라미터다.

교재의 언어: α-발산에서 α가 하는 것과 같다.
k가 α의 실전 버전이다.

### JSX
viz: ch16/trajectory

[왼쪽] Pass@1과 Pass@k의 학습 곡선.
     x축: RLVR 훈련 스텝.
     Pass@1: 단조증가.
     Pass@k (k=64): 처음 올라가다가 어느 순간 추락.
     두 곡선이 교차하는 지점 = entropy collapse가 시작되는 곳.

[오른쪽] 같은 스텝에서의 출력 분포.
     초기: 여러 풀이 스타일이 공존 (다봉).
     중기: 좋은 풀이가 강화됨 (주요 봉우리 성장).
     후기: 하나의 풀이만 남음 (단봉).
     "봉우리가 사라지는 순간"을 관찰.

### 수확

"reverse KL은 날카로운 시그널을 만들지만
스펙트럼을 파괴한다.
프리트레인이 깔아놓은 OR 풍경이
RLVR의 AND에 의해 무너지는 것.
너무 좁히면 잃는다."


## OR의 질이 AND의 가능성을 결정한다

### 한 개념

프리트레인이 어떤 영역을 잘 학습했느냐가
이후 파인튜닝과 모델 병합의 성패를 결정한다.

### 왜

"왜 어떤 파인튜닝은 병합이 잘 되고
어떤 파인튜닝은 병합이 안 되는가?
1장에서 던졌던 그 질문에
이제 정직한 답을 할 수 있는가?"

### 1장의 회수

1장에서 우리는 모델 병합의 마법을 보았다.
두 LoRA의 "중간"을 취하면 두 능력이 합쳐지는 경우.
갑자기 무너지는 경우.
"잘 되는 병합"과 "안 되는 병합"의 차이는 어디에 있는가?

이제 답을 줄 수 있다.

### 핵심 발견

베이스 모델이 이미 잘 아는 태스크로 파인튜닝한 모델은
병합이 잘 된다.
베이스 모델이 모르는 태스크로 파인튜닝한 모델은
병합이 안 된다.
병합 가능성(mergeability)은 파인튜닝 벡터 자체의 내재적 성질이다.

### 교재의 도구로 읽기

프리트레인(OR)이 해당 영역의 봉우리를 이미 품고 있으면,
파인튜닝(AND)은 그 봉우리 근처에서 좁히는 것이다.
파라미터 변화가 작다.
9장의 Fisher 계량으로 재면 "가까운" 거리.

두 파인튜닝 벡터를 더하는 것은
파라미터 공간의 직선 보간이다 — 4장의 "첫 번째 길".
Fisher 거리가 작은 두 벡터를 더하면
분포 공간에서도 크게 벗어나지 않는다.
"산술평균이 기하평균과 비슷한 영역" — 4장에서 본 것.

반대의 경우:
베이스 모델이 모르는 태스크는
파라미터를 멀리 끌고 가야 한다.
Fisher 거리가 크다.
두 벡터를 더하면 분포 공간에서 엉뚱한 곳에 착지한다.
"산술평균과 기하평균이 크게 다른 영역" — 곡률이 큰 곳.

8장에서 "좌표의 한 칸이 어디서나 같은 거리가 아니다"를 배웠다.
여기서 그것이 모델 병합의 성패를 가른다.

### 수확

"프리트레인의 OR이 깔아놓은 풍경의 질이
이후 모든 AND의 가능성을 결정한다.
좋은 OR은 좋은 AND를 가능하게 한다.
1장에서 시작한 질문에 대한 정직한 답:
'잘 되는 병합'은 베이스 모델이 이미 아는 곳에서 일어나고,
'안 되는 병합'은 베이스 모델이 모르는 곳에서 일어난다.
차이를 만드는 것은 파라미터 공간의 곡률 — Fisher 계량이다."


## α-발산 — OR과 AND 사이를 연속적으로 걷기

### 한 개념

forward KL과 reverse KL은 스펙트럼의 양 끝이며,
α-발산으로 그 사이를 연속적으로 보간할 수 있다.
이것은 에필로그에서 예고한 α-접속의 실전이다.

### 왜

"reverse KL은 너무 좁히고
forward KL은 너무 넓히면,
그 사이를 걸을 수 없는가?"

### 비유

라디오의 대역폭 조절 다이얼 —
지금까지 라디오에는 두 모드만 있었다:
전 대역 수신(넓음)과 단일 주파수 수신(좁음).
그런데 대역폭 다이얼이 하나 더 있다면?
다이얼을 돌려서 수신 대역의 폭을 연속적으로 조절.
넓으면 여러 채널이 겹쳐 들리고(mode-covering),
좁으면 하나만 선명하게 들린다(mode-seeking).
이 다이얼이 α다.

### α의 의미

α ≈ 1: forward KL에 가까움. SFT처럼 안정적. 넓은 탐색.
α ≈ 0: reverse KL에 가까움. PPO/GRPO처럼 공격적. 좁은 집중.
α를 훈련 중에 스케줄링할 수 있다:
     초기에는 α를 크게 → 다양성 유지, 탐색.
     후기에는 α를 작게 → 정답 경로에 집중.
     "처음에는 넓게 듣다가, 점점 좁혀간다."

### 에필로그와의 연결

에필로그에서 α-접속의 일반론을 예고했다.
이 교재에서는 α = ±1만 보았다고.
여기서 α가 ±1 사이를 연속적으로 걷는 것의
실전적 의미를 미리 맛본다.
α = 0이면 레비-치비타 접속 — 리만 기하학의 표준.
RLHF에서 α를 조정하는 것은
이 접속 사이를 걷는 것의 실전 버전이다.

### JSX
viz: ch16/trajectory

α 슬라이더 (0 ~ 1)를 움직이면
심플렉스 위에서 사영점이 변하는 시각화.
α = 0: e-사영점 (하나의 봉우리).
α = 1: m-사영점 (모든 봉우리를 덮음).
중간: 두 극단 사이의 연속적 변화.
11장의 α-슬라이더 시각화를 LLM 맥락에서 재해석.

### 수확

"OR과 AND는 양 끝이 아니라 스펙트럼이다.
α는 그 스펙트럼 위를 걷는 다이얼이다.
프리트레인에서 RLVR까지의 여정은
이 다이얼을 넓음에서 좁음으로 돌리는 과정이었다.
돌리는 속도와 최종 위치가
모델의 성격 — 다양성과 정확성의 균형 — 을 결정한다."

α 다이얼을 돌려서 OR과 AND의 비율을 조절할 수 있게 되었다.
그런데 다이얼을 돌리는 손의 크기는?
학습률 0.01이 좁은 모델에서는 적당한 걸음인데
넓은 모델에서는 발산하는 도약이 된다면,
다이얼의 눈금 자체가 모델 크기에 따라 달라져야 하지 않은가?
그 눈금을 공정하게 만드는 것 — 9장의 자(ruler)가 여기서 다시 필요해진다.


---

<!-- 집필 노트 -->

## 집필 노트: 16장의 위치와 서사적 역할

이 장은 교재의 도구가 가장 큰 무대에서 작동하는 것을 보여주는 장이다.
12장 EM에서 "하나의 알고리즘 안에 모든 도구"를 보여줬다면,
16장은 "하나의 훈련 파이프라인 안에 모든 도구"를 보여준다.

10장의 무지(OR)와 확신(AND)의 쌍대가 여기서 최종 회수된다.
11장의 e-사영과 m-사영이 여기서 현실의 설계 결정이 된다.
1장의 모델 병합 질문이 여기서 정직한 답을 얻는다.
5장의 엔트로피가 여기서 에피플렉시티로 확장된다.

이 장이 없으면 4막은 "재미있는 사례 모음집"이다.
이 장이 있으면 4막은 "교재 전체가 도달해야 할 지점"이다.

회수 대응표:
| 이 장의 절 | 회수되는 장 |
|---|---|
| 스펙트럼 (프리트레인은 OR) | 4장 혼합, 10장 무지, 11장 m-사영 |
| 에피플렉시티 | 5장 엔트로피, 5장 간주곡 |
| 시그널 (RLVR은 AND) | 4장 곱셈, 10장 확신, 11장 e-사영 |
| 당신은 이미 EM을 하고 있다 | 2장 분포=점, 10장 OR/AND, 12장 EM 수렴과 직교성 |
| 다이얼의 방향 | 3장 KL 비대칭, 11장 두 가지 사영 |
| entropy collapse | 10장 쌍대의 긴장 |
| OR의 질 → AND의 가능성 | 1장 모델 병합, 8장 매니폴드, 9장 Fisher 계량 |
| α-발산 | 에필로그 α-접속 예고 |
`,Em=`# 스케일링 — 폭이 달라져도 한 걸음이 같으려면

16장의 마지막에서 물음을 남겼다.
α 다이얼을 돌리는 손의 크기가
모델의 폭에 따라 달라져야 하지 않느냐고.
학습률 0.01이 좁은 모델에서는 적당한 걸음인데
넓은 모델에서는 발산하는 도약이 된다면 —
눈금 자체를 다시 그려야 한다.

그 눈금이 무엇인지를 묻는 것이 이 장이다.

![일반 경사 vs 자연 경사](/images/chapters/ch17-compass-natural-gradient.svg)

## 같은 레시피, 다른 결과

### 한 개념

신경망의 너비(width)가 달라지면
같은 학습률이 다른 의미를 갖는다.
좁은 네트워크에서 잘 되던 하이퍼파라미터가
넓은 네트워크에서 발산하는 현상.

### 왜

"왜 작은 모델에서 찾은 학습률이
큰 모델에서는 안 되는가?
매번 다시 찾아야 하는가?"

### 비유

레시피와 냄비 크기 —
4인분 레시피의 소금 1큰술.
40인분으로 늘리면 소금 10큰술?
비례하지 않는다.
냄비가 커지면 증발량, 열전도, 대류가 달라진다.
같은 "간"을 내려면 단순 비례가 아니라
냄비의 물리학을 이해해야 한다.

신경망도 마찬가지다.
너비가 10배 커지면, 같은 학습률 0.01이
파라미터 공간에서 전혀 다른 크기의 걸음이 된다.

![ResNet-56의 매끄러운 loss landscape](/images/chapters/loss-landscape-resnet56.png)
![Skip connection이 없으면 loss landscape가 혼돈적이다](/images/chapters/loss-landscape-vgg56.png)

## 좌표의 한 칸이 같은 거리가 아니다

### 사용하는 도구

Fisher 계량 (9장)

8장에서 우리는 "좌표의 한 칸이 어디서나 같은 거리가 아니다"를 보았다.
9장에서 Fisher 정보 행렬이 그 불균등함을 재는 자임을 배웠다.

### 신경망의 너비가 바뀌면 일어나는 일

파라미터 공간의 Fisher 계량이 너비에 따라 스케일된다.
유클리드 거리로 같은 한 걸음이,
Fisher 거리로는 전혀 다른 크기다.

좁은 네트워크: Fisher 행렬의 고유값이 작다.
유클리드 0.01 ≈ Fisher 0.01.
학습률 0.01이 "적당한 걸음".

넓은 네트워크: Fisher 행렬의 고유값이 커진다.
유클리드 0.01이 Fisher 거리로는 거대한 걸음.
학습률 0.01이 "발산하는 도약".

"같은 숫자의 학습률이, 다른 크기의 분포 변화를 만든다."

## 자연 기울기 — Fisher 계량을 따라 걷기

보통의 경사하강법은 파라미터 공간의 유클리드 거리를 쓴다.
그러나 9장에서 보았듯이, 파라미터 공간의 한 걸음은
어디서나 같은 크기가 아니다.

자연 기울기(natural gradient)는 Fisher 행렬의 역행렬을 곱해서
"분포 공간에서 같은 크기의 한 걸음"을 만든다.

θ_new = θ_old - ε · I(θ)⁻¹ · ∇L(θ)

평평한 바닥에서의 한 걸음과 가파른 비탈에서의 한 걸음을
같은 크기로 만드는 장치 — 그것이 자연 기울기다.
9장에서 ∇log p가 확률의 경사를 재는 올바른 도구임을 보았고,
Fisher 정보 행렬이 파라미터 공간의 "유일한 자연스러운 자"임을 보았다.
자연 기울기는 이 둘의 결합이다.

그런데 Fisher 정보 행렬은 아름답지만 거대하다.
파라미터가 수억 개인 모델에서는 행렬 자체를 저장할 수 없다.
KFAC는 이 행렬을 층별로 쪼개어 근사하는 실용적 방법이다 —
9장에서 본 Fisher 행렬의 구조와
7장에서 본 지수족의 블록 구조가 그 근사를 가능하게 한다.

자연 기울기의 감각을 기억하고 다음으로 넘어가자.
μP는 이 감각을 더 실용적으로 실현하는 방법이다.

## μP — Fisher 거리를 일정하게 만드는 처방

### 한 개념

μP(maximal update parameterization)는
너비가 바뀌어도 Fisher 거리에서의 한 걸음이
일정하도록 학습률과 초기화를 조정하는 기법.

### 왜

"너비에 무관하게 '같은 크기의 걸음'을 보장할 수 있는가?"

### 핵심 아이디어

9장에서 "왜 자가 필요한가"를 배운 학생에게
이것은 자연스러운 귀결이다.
파라미터 공간에서 공정한 한 걸음을 걸으려면
Fisher 계량을 따라야 한다 (자연 기울기의 감각).
μP는 이것을 층별로, 너비별로 실현하는 구체적 처방이다.

학습률 ∝ 1/width (입력층)
학습률 ∝ 1/width (은닉층)
초기화 ∝ 1/√width
이 스케일링 규칙 하나하나가
"Fisher 거리에서의 한 걸음을 일정하게"라는
기하학적 요구에서 나온다.

### 톤

조망. μP의 수학적 유도를 하지 않는다.
"왜 이 문제에 Fisher 계량이 등장하는가"만 연결.

### 수확

"너비가 바뀌면 파라미터 공간의 계량이 바뀐다.
유클리드 거리로 같은 한 걸음이
Fisher 거리로는 전혀 다른 크기다.
μP는 Fisher 거리를 일정하게 만드는 처방이다."

## Muon — 기울기를 직교화하여 공정한 한 걸음

### 한 개념

Muon은 기울기 행렬을 직교화하여
모든 방향에서 동일한 크기의 업데이트를 만든다.
μP가 "너비에 따라 학습률을 조정"했다면,
Muon은 "기울기 자체를 정규화"한다.
같은 기하학적 요구의 다른 실현.

### 왜

"μP는 학습률과 초기화를 조정해서
Fisher 거리를 일정하게 만들었다.
그런데 기울기 자체가 방향마다 크기가 다르다면?
어떤 방향은 기울기가 거대하고 어떤 방향은 미미하다면,
학습률을 아무리 조정해도 불균형이 남지 않나?"

### 비유

등산과 등고선 —
μP는 "지도의 축척을 보정하는 것"이었다.
지도 위 1cm가 어디서나 같은 실제 거리가 되도록.
Muon은 다른 접근이다.
"한 걸음의 방향을 모든 등고선에 대해 균등하게 만드는 것."

산을 오르는데 동쪽은 절벽이고 서쪽은 완만하다.
보통의 경사하강법은 절벽(기울기가 큰 방향)으로 확 쏠린다.
Adam은 각 좌표별로 기울기를 정규화해서
쏠림을 줄이지만, 방향 간의 상관을 무시한다.

Muon은 기울기 행렬의 특이값 분해(SVD)를 해서
특이값을 전부 1로 만든다.
기울기의 "방향 정보"만 남기고 "크기 정보"를 제거.
모든 특이 방향에서 동일한 크기로 업데이트.
절벽이든 완만한 길이든 같은 한 걸음.

### 수학적 핵심

기울기 G의 SVD: G = UΣVᵀ
Muon의 업데이트: ΔW ∝ UVᵀ
특이값 Σ를 전부 1로 바꾼 것.

이것은 스펙트럼 노름 아래의 최급강하법이다:
"기울기 방향으로 가되,
가장 큰 출력 변화(스펙트럼 노름)를
일정하게 제한한다."

### μP와의 관계

같은 동전의 양면:
6장에서 볼록함수와 그 쌍대가 동전의 양면이었듯,
μP와 Muon도 같은 질문의 두 면이다.

μP: 너비에 따라 학습률과 초기화를 스케일링.
"Fisher 거리에서의 한 걸음을 일정하게."
처방적(prescriptive) — 규칙을 미리 정한다.

Muon: 기울기를 직교화하여 모든 방향에서 균등한 업데이트.
"스펙트럼 노름에서의 한 걸음을 일정하게."
적응적(adaptive) — 매 스텝의 기울기에 반응한다.

Jeremy Bernstein의 통찰:
"μP의 학습률 스케일링은
기울기를 올바른 노름으로 쌍대화(dualize)하면
자동으로 얻어진다.
μP와 Muon은 같은 동전의 양면이다."

9장에서 "왜 자가 필요한가"를 배운 학생에게
μP와 Muon은 같은 질문의 두 가지 답이다:
"파라미터 공간에서 공정한 한 걸음이란 무엇인가?"

### 더 나아간 시도

Fisher 구조의 결합:
Muon은 모든 특이값을 1로 만든다 — 등방적(isotropic).
그런데 파라미터 공간의 곡률은 등방적이지 않다.
9장에서 Fisher 행렬의 고유값이 방향마다 다르다고 했다.
"뾰족한 분포는 민감하고 넓은 분포는 둔감하다."

FISMO는 Muon의 직교화에 Fisher 정보 행렬의
Kronecker 근사를 결합한다.
등방적 업데이트 대신 곡률에 맞춘 비등방적 업데이트.
"9장의 Fisher 계량 + Muon의 직교화"의 결합.

이 방향은 아직 활발히 연구 중이다.
우리가 배운 도구 — Fisher 계량, 스펙트럼 구조, 자연 기울기 —
가 최신 옵티마이저 연구의 뼈대에 깔려 있다는 것이
이 장의 메시지다.

### JSX
viz: ch17/coordinate-vs-fisher

세 옵티마이저 비교.

[메인 패널] 2D 손실 함수의 등고선.
세 궤적:
① Adam (파란선) — 좌표별 적응. 지그재그.
② Muon (초록선) — 직교화. 매끈하지만 등방적.
③ 자연 기울기 (빨간선) — Fisher 반영. 곡률에 맞춤.

등고선이 찌그러진 영역(큰 곡률)과
둥근 영역(작은 곡률)에서
세 궤적의 차이가 두드러진다.

→ 찌그러진 영역에서
  Adam은 진동하고, Muon은 직진하고,
  자연 기울기는 등고선을 따라 부드럽게 돈다.
  "방향마다 다른 곡률"을 누가 가장 잘 다루는가?

### 파이썬

로젠브록 함수(찌그러진 등고선)에서
Adam, Muon(직교화된 기울기), 자연 기울기의 궤적을 비교.
각 옵티마이저의 수렴 속도와 궤적 시각화.

### 수확

"μP는 스케일링 규칙으로, Muon은 직교화로,
같은 질문에 답한다:
'파라미터 공간에서 공정한 한 걸음이란 무엇인가?'
9장에서 배운 Fisher 계량이
이 질문의 뿌리에 있다.
최신 옵티마이저 연구의 밑바닥에
이 교재의 도구가 깔려 있다."

너비가 바뀌면 파라미터 공간의 계량이 바뀐다.
유클리드 거리로 같은 한 걸음이
Fisher 거리로는 전혀 다른 크기다.
μP는 Fisher 거리를 일정하게 만드는 처방이고,
Muon은 스펙트럼 노름을 일정하게 만드는 처방이다.
9장에서 배운 자(ruler)가 현실의 문제에서 작동한다.

그런데 지도의 가장자리에는 아직 이름이 적히지 않은 땅이 있다.
α = ±1만 보았다. 그 사이는? 그 너머는?
양자 상태에도 Fisher 계량이 있는가?
학습 자체가 열역학적 과정이라면?
이 질문들은 우리 지도의 바깥에 있다.
그러나 지도를 가진 사람만이 "바깥"을 식별할 수 있다.
`,_m=`# 에필로그: 지도의 가장자리에서

이론의 지도를 완성했고, 응용의 풍경을 네 곳에서 보았다.
디퓨전에서 ∇log p가 안개 속의 레이더가 되었고,
플로우 매칭에서 4장의 직선이 생성의 경로가 되었다.
넓히기와 좁히기에서 프리트레인의 OR과 강화학습의 AND가
10장의 쌍대 그 자체임을 보았다 —
KL의 방향이 언어모델의 성격을 결정하는 것을 확인했다.
스케일링에서 Fisher 계량이 현실의 최적화 문제에 작동하는 것을 보았고,
이 교재가 시작된 원점으로 돌아왔다.

그래도 가장자리는 있다. 지도 너머 더 먼 땅이 있다.

## α-접속의 일반론

![α-접속의 연속체](/images/chapters/chA-alpha-connection.svg)

이 교재에서 우리는 α = ±1을 중심으로 보았다.
e-접속과 m-접속. 덧셈의 길과 곱셈의 길.
16장에서 우리는 α가 0과 1 사이를 연속적으로 걸으며
forward KL과 reverse KL을 보간하는 것을 맛보았다.
그런데 α는 이보다 더 넓은 연속 파라미터다.
-1과 +1 사이, 그리고 그 너머에도 접속이 존재한다.
α = 0이면 레비-치비타 접속 — 리만 기하학의 표준 접속이 나타난다.
α가 달라지면 곡률이 달라지고, 측지선이 달라지고,
사영의 방식이 달라진다.
16장에서 맛본 것은 이 풍경의 입구였다.

## 양자 정보기하학

양자 상태는 밀도 행렬로 표현된다.
밀도 행렬의 공간에도 Fisher 계량을 정의할 수 있다.
그런데 양자 세계에서는 Fisher 계량이 유일하지 않다 —
고전 세계에서의 유일성 정리(체초프 정리)가 양자에서는 깨진다.
무한히 많은 "양자 Fisher 계량"이 존재하고,
그 각각이 다른 기하학을 정의한다.
우리가 배운 유일성의 아름다움이 양자에서는 어떻게 변주되는지 —
그것은 이 지도 너머의 풍경이다.

## 정보기하학과 열역학

르장드르 변환은 7장에서 쌍대 좌표를 연결하는 다리였다.
그런데 르장드르 변환의 원래 집은 열역학이다.
에너지와 엔트로피, 온도와 엔트로피 — 열역학의 쌍대 변수들이
르장드르 변환으로 연결된다.
정보기하학이 열역학과 만나는 접점에서,
우리가 배운 쌍대성이 물리학의 기본 법칙과 공명한다.

최근에는 학습 자체를 열역학적 과정으로 보는 시도가 나타나고 있다.
에피플렉시티(학습 가능한 구조적 정보)를 흡수하는 과정에서
불가피하게 비가역적 엔트로피 생산이 일어난다는 관점이다.
16장에서 맛본 에피플렉시티가,
르장드르 변환의 고향인 열역학과 만나는 접점에서,
새로운 풍경이 열리고 있다.

---

## 원점으로 돌아오다

이 이름들은 우리가 그린 지도의 가장자리에 적힌 표지판이다.
각각이 하나의 새로운 여행이 될 수 있다.
하지만 그 여행을 시작하기 전에, 돌아보자.

저자가 처음 아마리를 알게 된 것은 μP에 대해 알아보다가였다.
Fisher 정보 행렬이라는 이름이 논문에서 반복되는데
그것이 뭔지 모르니까 읽히지 않았다.
검색하다가 아마리에 도달했고, 정보기하학이라는 풍경을 발견했다.

그리고 지금, Muon의 논문에서도 같은 이름이 나타난다.
Fisher 정보 행렬. 자연 기울기. 스펙트럼 구조.
2년 전에 읽히지 않던 문장이 지금은 그림이 된다.
이 교재는 그 발견에서 시작되었고, 여기서 원점으로 돌아왔다.

돌아보자.
우리가 걸어온 길의 모든 갈림목에는 같은 선택이 있었다 — 더할 것인가, 곱할 것인가.
그리고 그 선택은 추상이 아니었다.
프리트레인이 넓혔고, 강화학습이 좁혔다.
디퓨전이 방향을 배웠고, 플로우 매칭이 경로를 배웠다.
Fisher 계량이 한 걸음의 크기를 재었고, Muon이 방향을 정규화했다.
덧셈의 길과 곱셈의 길 사이를 번역하는 하나의 함수 — log — 가 있었다.
그리고 그 번역기의 너머에, 아직 우리가 이름 붙이지 못한 풍경이 있다.
지도는 계속된다.
`,un=(o,i)=>M.lazy(()=>o().then(a=>({default:a[i]}))),Ke=[{id:"00",title:"서문",slug:"preface",md:rm,vizMap:{}},{id:"01",title:"왜 정보기하학인가",slug:"why-infogeo",md:lm,vizMap:{}},{id:"02",title:"점",slug:"point",md:im,vizMap:{}},{id:"03",title:"거리",slug:"distance",md:om,vizMap:{"ch03/euclidean-vs-kl":un(()=>ln(()=>import("./ch03-distance-31dg2ZIB.js"),__vite__mapDeps([0,1,2,3])),"EuclideanVsKLTab"),"ch03/asymmetry":un(()=>ln(()=>import("./ch03-distance-31dg2ZIB.js"),__vite__mapDeps([0,1,2,3])),"AsymmetryTab"),"ch03/fisher-local":un(()=>ln(()=>import("./ch03-distance-31dg2ZIB.js"),__vite__mapDeps([0,1,2,3])),"FisherLocalTab")}},{id:"04",title:"길",slug:"paths",md:sm,vizMap:{"ch04/two-paths":un(()=>ln(()=>import("./ch04-paths-NI0f_5cW.js"),__vite__mapDeps([4,1])),"TwoPathsTab"),"ch04/midpoint":un(()=>ln(()=>import("./ch04-paths-NI0f_5cW.js"),__vite__mapDeps([4,1])),"MidpointTab"),"ch04/color-interpolation":un(()=>ln(()=>import("./ch04-paths-NI0f_5cW.js"),__vite__mapDeps([4,1])),"ColorInterpolationTab")}},{id:"04z",title:"전환 — 같은 세계, 다른 눈",slug:"transition-1",md:am,vizMap:{}},{id:"05",title:"놀라움과 정보",slug:"surprise",md:um,vizMap:{"ch05/surprise":un(()=>ln(()=>import("./ch05-surprise-and-information-DwOBR1LF.js"),__vite__mapDeps([5,1,6,3])),"SurpriseTab"),"ch05/entropy-simplex":un(()=>ln(()=>import("./ch05-surprise-and-information-DwOBR1LF.js"),__vite__mapDeps([5,1,6,3])),"EntropySimplexTab"),"ch05/cross-entropy":un(()=>ln(()=>import("./ch05-surprise-and-information-DwOBR1LF.js"),__vite__mapDeps([5,1,6,3])),"CrossEntropyTab"),"ch05/convexity-kl":un(()=>ln(()=>import("./ch05-surprise-and-information-DwOBR1LF.js"),__vite__mapDeps([5,1,6,3])),"ConvexityTab")}},{id:"06",title:"볼록함수의 쌍대",slug:"convex-duality",md:cm,vizMap:{"ch06/convexity":un(()=>ln(()=>import("./ch06-convex-duality-ByKYeXdt.js"),__vite__mapDeps([7,1,6,3])),"ConvexityTab"),"ch06/jensen":un(()=>ln(()=>import("./ch06-convex-duality-ByKYeXdt.js"),__vite__mapDeps([7,1,6,3])),"JensenTab"),"ch06/legendre":un(()=>ln(()=>import("./ch06-convex-duality-ByKYeXdt.js"),__vite__mapDeps([7,1,6,3])),"LegendreTab"),"ch06/duality-identity":un(()=>ln(()=>import("./ch06-convex-duality-ByKYeXdt.js"),__vite__mapDeps([7,1,6,3])),"DualityIdentityTab")}},{id:"06z",title:"전환 — 두 눈을 동시에",slug:"transition-2",md:fm,vizMap:{}},{id:"07",title:"지수족",slug:"exponential-family",md:pm,vizMap:{"ch07/flashcards":M.lazy(()=>ln(()=>import("./ch07-exponential-family-flashcards-DiCL3KB7.js"),__vite__mapDeps([8,1,6,3]))),"ch07/legendre":M.lazy(()=>ln(()=>import("./ch07-exponential-family-flashcards-DiCL3KB7.js"),__vite__mapDeps([8,1,6,3]))),"ch07/overview":M.lazy(()=>ln(()=>import("./ch07-exponential-family-flashcards-DiCL3KB7.js"),__vite__mapDeps([8,1,6,3])))}},{id:"08",title:"구부러진 땅",slug:"curved-land",md:dm,vizMap:{}},{id:"09",title:"파라메터 공간의 곡률",slug:"fisher-information",md:hm,vizMap:{"ch09/sensitivity":un(()=>ln(()=>import("./ch09-fisher-information-BNJEcqrW.js"),__vite__mapDeps([9,1,6,3])),"SensitivityTab"),"ch09/fisher-matrix":un(()=>ln(()=>import("./ch09-fisher-information-BNJEcqrW.js"),__vite__mapDeps([9,1,6,3])),"FisherMatrixTab"),"ch09/metric-ellipse":un(()=>ln(()=>import("./ch09-fisher-information-BNJEcqrW.js"),__vite__mapDeps([9,1,6,3])),"MetricEllipseTab")}},{id:"10",title:"무지와 확신",slug:"ignorance",md:mm,vizMap:{}},{id:"11",title:"추론의 기하학",slug:"geometry-of-inference",md:gm,vizMap:{"ch11/projection-concept":un(()=>ln(()=>import("./ch11-geometry-of-inference-BERYdf71.js"),__vite__mapDeps([10,1,6,3])),"ProjectionConceptTab"),"ch11/simplex-projection":un(()=>ln(()=>import("./ch11-geometry-of-inference-BERYdf71.js"),__vite__mapDeps([10,1,6,3])),"SimplexProjectionTab")}},{id:"12",title:"수렴",slug:"convergence",md:vm,vizMap:{"ch12/pythagoras":un(()=>ln(()=>import("./ch12-convergence-DtdUB-ka.js"),__vite__mapDeps([11,1,6,3])),"PythagorasTab"),"ch12/em-convergence":un(()=>ln(()=>import("./ch12-convergence-DtdUB-ka.js"),__vite__mapDeps([11,1,6,3])),"EMConvergenceTab")}},{id:"13",title:"전체 지도",slug:"full-map",md:ym,vizMap:{}},{id:"13z",title:"전환 — 도구를 들고 세계로",slug:"transition-3",md:xm,vizMap:{}},{id:"14",title:"디퓨전",slug:"diffusion",md:km,vizMap:{"ch14/score-field":un(()=>ln(()=>import("./ch14-diffusion-xbOfoh1j.js"),__vite__mapDeps([12,1,6,3])),"ScoreFieldTab"),"ch14/reverse-diffusion":un(()=>ln(()=>import("./ch14-diffusion-xbOfoh1j.js"),__vite__mapDeps([12,1,6,3])),"ReverseDiffusionTab"),"ch14/noise-annealing":un(()=>ln(()=>import("./ch14-diffusion-xbOfoh1j.js"),__vite__mapDeps([12,1,6,3])),"NoiseAnnealingTab")}},{id:"15",title:"플로우 매칭",slug:"flow-matching",md:wm,vizMap:{"ch15/velocity-field":un(()=>ln(()=>import("./ch15-flow-matching-BszT3KzX.js"),__vite__mapDeps([13,1,6,3])),"VelocityFieldTab"),"ch15/comparison":un(()=>ln(()=>import("./ch15-flow-matching-BszT3KzX.js"),__vite__mapDeps([13,1,6,3])),"ComparisonTab")}},{id:"16",title:"넓히기와 좁히기",slug:"broadening-narrowing",md:Sm,vizMap:{"ch16/spectrum":un(()=>ln(()=>import("./ch16-broadening-narrowing-BgVKpSM0.js"),__vite__mapDeps([14,1,6,3])),"SpectrumTab"),"ch16/trajectory":un(()=>ln(()=>import("./ch16-broadening-narrowing-BgVKpSM0.js"),__vite__mapDeps([14,1,6,3])),"TrajectoryTab")}},{id:"17",title:"스케일링",slug:"scaling",md:Em,vizMap:{"ch17/coordinate-vs-fisher":un(()=>ln(()=>import("./ch17-scaling-D6F8G8Gf.js"),__vite__mapDeps([15,1,2,3])),"CoordinateVsFisherTab"),"ch17/stability":un(()=>ln(()=>import("./ch17-scaling-D6F8G8Gf.js"),__vite__mapDeps([15,1,2,3])),"StabilityTab")}},{id:"A",title:"에필로그",slug:"epilogue",md:_m,vizMap:{}}];function vi(o){const i=o.split(`
`),a=[];let u=[];for(const c of i)/^## /.test(c)&&u.length>0?(a.push(u.join(`
`)),u=[c]):u.push(c);return u.length>0&&a.push(u.join(`
`)),a}function Is(o){var x;if(!o)return{title:null,vizKey:null,prose:""};const i=o.split(`
`);let a=null,u=-1,c=-1;for(let v=0;v<i.length;v++)if(/^### JSX/.test(i[v])){u=v;for(let E=v+1;E<i.length;E++){const L=i[E].match(/^viz:\s*(.+)/);if(L){a=L[1].trim();continue}if(/^#{2,3}\s/.test(i[E])){c=E;break}}c===-1&&(c=i.length);break}const p=u>=0?[...i.slice(0,u),...i.slice(c)].join(`
`):o,h=(x=i[0])==null?void 0:x.match(/^## (.+)/);return{title:h?h[1]:null,vizKey:a,prose:p}}function As(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Tt=As();function Lf(o){Tt=o}var Pt={exec:()=>null};function tn(o,i=""){let a=typeof o=="string"?o:o.source,u={replace:(c,p)=>{let h=typeof p=="string"?p:p.source;return h=h.replace(qn.caret,"$1"),a=a.replace(c,h),u},getRegex:()=>new RegExp(a,i)};return u}var Lm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),qn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:o=>new RegExp(`^( {0,3}${o})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}#`),htmlBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:o=>new RegExp(`^ {0,${Math.min(3,o-1)}}>`)},Rm=/^(?:[ \t]*(?:\n|$))+/,Pm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Cm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,zm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ms=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Rf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Pf=tn(Rf).replace(/bull/g,Ms).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Tm=tn(Rf).replace(/bull/g,Ms).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ds=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Fm=/^[^\n]+/,Os=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Nm=tn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Os).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Im=tn(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ms).getRegex(),yi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",js=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Am=tn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",js).replace("tag",yi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Cf=tn(Ds).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),Mm=tn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Cf).getRegex(),$s={blockquote:Mm,code:Pm,def:Nm,fences:Cm,heading:zm,hr:Qr,html:Am,lheading:Pf,list:Im,newline:Rm,paragraph:Cf,table:Pt,text:Fm},tf=tn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),Dm={...$s,lheading:Tm,table:tf,paragraph:tn(Ds).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",tf).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex()},Om={...$s,html:tn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",js).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:tn(Ds).replace("hr",Qr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Pf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},jm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$m=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,zf=/^( {2,}|\\)\n(?!\s*$)/,Km=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xi=/[\p{P}\p{S}]/u,Ks=/[\s\p{P}\p{S}]/u,Tf=/[^\s\p{P}\p{S}]/u,Bm=tn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ks).getRegex(),Ff=/(?!~)[\p{P}\p{S}]/u,Vm=/(?!~)[\s\p{P}\p{S}]/u,Um=/(?:[^\s\p{P}\p{S}]|~)/u,Nf=/(?![*_])[\p{P}\p{S}]/u,Hm=/(?![*_])[\s\p{P}\p{S}]/u,Wm=/(?:[^\s\p{P}\p{S}]|[*_])/u,qm=tn(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Lm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),If=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Xm=tn(If,"u").replace(/punct/g,xi).getRegex(),Jm=tn(If,"u").replace(/punct/g,Ff).getRegex(),Af="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Qm=tn(Af,"gu").replace(/notPunctSpace/g,Tf).replace(/punctSpace/g,Ks).replace(/punct/g,xi).getRegex(),Gm=tn(Af,"gu").replace(/notPunctSpace/g,Um).replace(/punctSpace/g,Vm).replace(/punct/g,Ff).getRegex(),Zm=tn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Tf).replace(/punctSpace/g,Ks).replace(/punct/g,xi).getRegex(),Ym=tn(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Nf).getRegex(),bm="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ng=tn(bm,"gu").replace(/notPunctSpace/g,Wm).replace(/punctSpace/g,Hm).replace(/punct/g,Nf).getRegex(),eg=tn(/\\(punct)/,"gu").replace(/punct/g,xi).getRegex(),tg=tn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rg=tn(js).replace("(?:-->|$)","-->").getRegex(),lg=tn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rg).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),fi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,ig=tn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",fi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Mf=tn(/^!?\[(label)\]\[(ref)\]/).replace("label",fi).replace("ref",Os).getRegex(),Df=tn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Os).getRegex(),og=tn("reflink|nolink(?!\\()","g").replace("reflink",Mf).replace("nolink",Df).getRegex(),rf=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Bs={_backpedal:Pt,anyPunctuation:eg,autolink:tg,blockSkip:qm,br:zf,code:$m,del:Pt,delLDelim:Pt,delRDelim:Pt,emStrongLDelim:Xm,emStrongRDelimAst:Qm,emStrongRDelimUnd:Zm,escape:jm,link:ig,nolink:Df,punctuation:Bm,reflink:Mf,reflinkSearch:og,tag:lg,text:Km,url:Pt},sg={...Bs,link:tn(/^!?\[(label)\]\((.*?)\)/).replace("label",fi).getRegex(),reflink:tn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",fi).getRegex()},Ls={...Bs,emStrongRDelimAst:Gm,emStrongLDelim:Jm,delLDelim:Ym,delRDelim:ng,url:tn(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",rf).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:tn(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",rf).getRegex()},ag={...Ls,br:tn(zf).replace("{2,}","*").getRegex(),text:tn(Ls.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},si={normal:$s,gfm:Dm,pedantic:Om},Hr={normal:Bs,gfm:Ls,breaks:ag,pedantic:sg},ug={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lf=o=>ug[o];function Te(o,i){if(i){if(qn.escapeTest.test(o))return o.replace(qn.escapeReplace,lf)}else if(qn.escapeTestNoEncode.test(o))return o.replace(qn.escapeReplaceNoEncode,lf);return o}function of(o){try{o=encodeURI(o).replace(qn.percentDecode,"%")}catch{return null}return o}function sf(o,i){var p;let a=o.replace(qn.findPipe,(h,d,x)=>{let v=!1,E=d;for(;--E>=0&&x[E]==="\\";)v=!v;return v?"|":" |"}),u=a.split(qn.splitPipe),c=0;if(u[0].trim()||u.shift(),u.length>0&&!((p=u.at(-1))!=null&&p.trim())&&u.pop(),i)if(u.length>i)u.splice(i);else for(;u.length<i;)u.push("");for(;c<u.length;c++)u[c]=u[c].trim().replace(qn.slashPipe,"|");return u}function Wr(o,i,a){let u=o.length;if(u===0)return"";let c=0;for(;c<u&&o.charAt(u-c-1)===i;)c++;return o.slice(0,u-c)}function cg(o,i){if(o.indexOf(i[1])===-1)return-1;let a=0;for(let u=0;u<o.length;u++)if(o[u]==="\\")u++;else if(o[u]===i[0])a++;else if(o[u]===i[1]&&(a--,a<0))return u;return a>0?-2:-1}function fg(o,i=0){let a=i,u="";for(let c of o)if(c==="	"){let p=4-a%4;u+=" ".repeat(p),a+=p}else u+=c,a++;return u}function af(o,i,a,u,c){let p=i.href,h=i.title||null,d=o[1].replace(c.other.outputLinkReplace,"$1");u.state.inLink=!0;let x={type:o[0].charAt(0)==="!"?"image":"link",raw:a,href:p,title:h,text:d,tokens:u.inlineTokens(d)};return u.state.inLink=!1,x}function pg(o,i,a){let u=o.match(a.other.indentCodeCompensation);if(u===null)return i;let c=u[1];return i.split(`
`).map(p=>{let h=p.match(a.other.beginningSpace);if(h===null)return p;let[d]=h;return d.length>=c.length?p.slice(c.length):p}).join(`
`)}var pi=class{constructor(o){hn(this,"options");hn(this,"rules");hn(this,"lexer");this.options=o||Tt}space(o){let i=this.rules.block.newline.exec(o);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(o){let i=this.rules.block.code.exec(o);if(i){let a=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?a:Wr(a,`
`)}}}fences(o){let i=this.rules.block.fences.exec(o);if(i){let a=i[0],u=pg(a,i[3]||"",this.rules);return{type:"code",raw:a,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:u}}}heading(o){let i=this.rules.block.heading.exec(o);if(i){let a=i[2].trim();if(this.rules.other.endingHash.test(a)){let u=Wr(a,"#");(this.options.pedantic||!u||this.rules.other.endingSpaceChar.test(u))&&(a=u.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(o){let i=this.rules.block.hr.exec(o);if(i)return{type:"hr",raw:Wr(i[0],`
`)}}blockquote(o){let i=this.rules.block.blockquote.exec(o);if(i){let a=Wr(i[0],`
`).split(`
`),u="",c="",p=[];for(;a.length>0;){let h=!1,d=[],x;for(x=0;x<a.length;x++)if(this.rules.other.blockquoteStart.test(a[x]))d.push(a[x]),h=!0;else if(!h)d.push(a[x]);else break;a=a.slice(x);let v=d.join(`
`),E=v.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");u=u?`${u}
${v}`:v,c=c?`${c}
${E}`:E;let L=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(E,p,!0),this.lexer.state.top=L,a.length===0)break;let R=p.at(-1);if((R==null?void 0:R.type)==="code")break;if((R==null?void 0:R.type)==="blockquote"){let P=R,j=P.raw+`
`+a.join(`
`),A=this.blockquote(j);p[p.length-1]=A,u=u.substring(0,u.length-P.raw.length)+A.raw,c=c.substring(0,c.length-P.text.length)+A.text;break}else if((R==null?void 0:R.type)==="list"){let P=R,j=P.raw+`
`+a.join(`
`),A=this.list(j);p[p.length-1]=A,u=u.substring(0,u.length-R.raw.length)+A.raw,c=c.substring(0,c.length-P.raw.length)+A.raw,a=j.substring(p.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:u,tokens:p,text:c}}}list(o){var a,u;let i=this.rules.block.list.exec(o);if(i){let c=i[1].trim(),p=c.length>1,h={type:"list",raw:"",ordered:p,start:p?+c.slice(0,-1):"",loose:!1,items:[]};c=p?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=p?c:"[*+-]");let d=this.rules.other.listItemRegex(c),x=!1;for(;o;){let E=!1,L="",R="";if(!(i=d.exec(o))||this.rules.block.hr.test(o))break;L=i[0],o=o.substring(L.length);let P=fg(i[2].split(`
`,1)[0],i[1].length),j=o.split(`
`,1)[0],A=!P.trim(),N=0;if(this.options.pedantic?(N=2,R=P.trimStart()):A?N=i[1].length+1:(N=P.search(this.rules.other.nonSpaceChar),N=N>4?1:N,R=P.slice(N),N+=i[1].length),A&&this.rules.other.blankLine.test(j)&&(L+=j+`
`,o=o.substring(j.length+1),E=!0),!E){let Y=this.rules.other.nextBulletRegex(N),en=this.rules.other.hrRegex(N),b=this.rules.other.fencesBeginRegex(N),fn=this.rules.other.headingBeginRegex(N),Cn=this.rules.other.htmlBeginRegex(N),On=this.rules.other.blockquoteBeginRegex(N);for(;o;){let Nn=o.split(`
`,1)[0],In;if(j=Nn,this.options.pedantic?(j=j.replace(this.rules.other.listReplaceNesting,"  "),In=j):In=j.replace(this.rules.other.tabCharGlobal,"    "),b.test(j)||fn.test(j)||Cn.test(j)||On.test(j)||Y.test(j)||en.test(j))break;if(In.search(this.rules.other.nonSpaceChar)>=N||!j.trim())R+=`
`+In.slice(N);else{if(A||P.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||b.test(P)||fn.test(P)||en.test(P))break;R+=`
`+j}A=!j.trim(),L+=Nn+`
`,o=o.substring(Nn.length+1),P=In.slice(N)}}h.loose||(x?h.loose=!0:this.rules.other.doubleBlankLine.test(L)&&(x=!0)),h.items.push({type:"list_item",raw:L,task:!!this.options.gfm&&this.rules.other.listIsTask.test(R),loose:!1,text:R,tokens:[]}),h.raw+=L}let v=h.items.at(-1);if(v)v.raw=v.raw.trimEnd(),v.text=v.text.trimEnd();else return;h.raw=h.raw.trimEnd();for(let E of h.items){if(this.lexer.state.top=!1,E.tokens=this.lexer.blockTokens(E.text,[]),E.task){if(E.text=E.text.replace(this.rules.other.listReplaceTask,""),((a=E.tokens[0])==null?void 0:a.type)==="text"||((u=E.tokens[0])==null?void 0:u.type)==="paragraph"){E.tokens[0].raw=E.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),E.tokens[0].text=E.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let R=this.lexer.inlineQueue.length-1;R>=0;R--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[R].src)){this.lexer.inlineQueue[R].src=this.lexer.inlineQueue[R].src.replace(this.rules.other.listReplaceTask,"");break}}let L=this.rules.other.listTaskCheckbox.exec(E.raw);if(L){let R={type:"checkbox",raw:L[0]+" ",checked:L[0]!=="[ ]"};E.checked=R.checked,h.loose?E.tokens[0]&&["paragraph","text"].includes(E.tokens[0].type)&&"tokens"in E.tokens[0]&&E.tokens[0].tokens?(E.tokens[0].raw=R.raw+E.tokens[0].raw,E.tokens[0].text=R.raw+E.tokens[0].text,E.tokens[0].tokens.unshift(R)):E.tokens.unshift({type:"paragraph",raw:R.raw,text:R.raw,tokens:[R]}):E.tokens.unshift(R)}}if(!h.loose){let L=E.tokens.filter(P=>P.type==="space"),R=L.length>0&&L.some(P=>this.rules.other.anyLine.test(P.raw));h.loose=R}}if(h.loose)for(let E of h.items){E.loose=!0;for(let L of E.tokens)L.type==="text"&&(L.type="paragraph")}return h}}html(o){let i=this.rules.block.html.exec(o);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(o){let i=this.rules.block.def.exec(o);if(i){let a=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),u=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:a,raw:i[0],href:u,title:c}}}table(o){var h;let i=this.rules.block.table.exec(o);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let a=sf(i[1]),u=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=(h=i[3])!=null&&h.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],p={type:"table",raw:i[0],header:[],align:[],rows:[]};if(a.length===u.length){for(let d of u)this.rules.other.tableAlignRight.test(d)?p.align.push("right"):this.rules.other.tableAlignCenter.test(d)?p.align.push("center"):this.rules.other.tableAlignLeft.test(d)?p.align.push("left"):p.align.push(null);for(let d=0;d<a.length;d++)p.header.push({text:a[d],tokens:this.lexer.inline(a[d]),header:!0,align:p.align[d]});for(let d of c)p.rows.push(sf(d,p.header.length).map((x,v)=>({text:x,tokens:this.lexer.inline(x),header:!1,align:p.align[v]})));return p}}lheading(o){let i=this.rules.block.lheading.exec(o);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(o){let i=this.rules.block.paragraph.exec(o);if(i){let a=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:a,tokens:this.lexer.inline(a)}}}text(o){let i=this.rules.block.text.exec(o);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(o){let i=this.rules.inline.escape.exec(o);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(o){let i=this.rules.inline.tag.exec(o);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(o){let i=this.rules.inline.link.exec(o);if(i){let a=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let p=Wr(a.slice(0,-1),"\\");if((a.length-p.length)%2===0)return}else{let p=cg(i[2],"()");if(p===-2)return;if(p>-1){let h=(i[0].indexOf("!")===0?5:4)+i[1].length+p;i[2]=i[2].substring(0,p),i[0]=i[0].substring(0,h).trim(),i[3]=""}}let u=i[2],c="";if(this.options.pedantic){let p=this.rules.other.pedanticHrefTitle.exec(u);p&&(u=p[1],c=p[3])}else c=i[3]?i[3].slice(1,-1):"";return u=u.trim(),this.rules.other.startAngleBracket.test(u)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?u=u.slice(1):u=u.slice(1,-1)),af(i,{href:u&&u.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(o,i){let a;if((a=this.rules.inline.reflink.exec(o))||(a=this.rules.inline.nolink.exec(o))){let u=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=i[u.toLowerCase()];if(!c){let p=a[0].charAt(0);return{type:"text",raw:p,text:p}}return af(a,c,a[0],this.lexer,this.rules)}}emStrong(o,i,a=""){let u=this.rules.inline.emStrongLDelim.exec(o);if(!(!u||u[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(u[1]||u[2])||!a||this.rules.inline.punctuation.exec(a))){let c=[...u[0]].length-1,p,h,d=c,x=0,v=u[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(v.lastIndex=0,i=i.slice(-1*o.length+c);(u=v.exec(i))!=null;){if(p=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!p)continue;if(h=[...p].length,u[3]||u[4]){d+=h;continue}else if((u[5]||u[6])&&c%3&&!((c+h)%3)){x+=h;continue}if(d-=h,d>0)continue;h=Math.min(h,h+d+x);let E=[...u[0]][0].length,L=o.slice(0,c+u.index+E+h);if(Math.min(c,h)%2){let P=L.slice(1,-1);return{type:"em",raw:L,text:P,tokens:this.lexer.inlineTokens(P)}}let R=L.slice(2,-2);return{type:"strong",raw:L,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(o){let i=this.rules.inline.code.exec(o);if(i){let a=i[2].replace(this.rules.other.newLineCharGlobal," "),u=this.rules.other.nonSpaceChar.test(a),c=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return u&&c&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:i[0],text:a}}}br(o){let i=this.rules.inline.br.exec(o);if(i)return{type:"br",raw:i[0]}}del(o,i,a=""){let u=this.rules.inline.delLDelim.exec(o);if(u&&(!u[1]||!a||this.rules.inline.punctuation.exec(a))){let c=[...u[0]].length-1,p,h,d=c,x=this.rules.inline.delRDelim;for(x.lastIndex=0,i=i.slice(-1*o.length+c);(u=x.exec(i))!=null;){if(p=u[1]||u[2]||u[3]||u[4]||u[5]||u[6],!p||(h=[...p].length,h!==c))continue;if(u[3]||u[4]){d+=h;continue}if(d-=h,d>0)continue;h=Math.min(h,h+d);let v=[...u[0]][0].length,E=o.slice(0,c+u.index+v+h),L=E.slice(c,-c);return{type:"del",raw:E,text:L,tokens:this.lexer.inlineTokens(L)}}}}autolink(o){let i=this.rules.inline.autolink.exec(o);if(i){let a,u;return i[2]==="@"?(a=i[1],u="mailto:"+a):(a=i[1],u=a),{type:"link",raw:i[0],text:a,href:u,tokens:[{type:"text",raw:a,text:a}]}}}url(o){var a;let i;if(i=this.rules.inline.url.exec(o)){let u,c;if(i[2]==="@")u=i[0],c="mailto:"+u;else{let p;do p=i[0],i[0]=((a=this.rules.inline._backpedal.exec(i[0]))==null?void 0:a[0])??"";while(p!==i[0]);u=i[0],i[1]==="www."?c="http://"+i[0]:c=i[0]}return{type:"link",raw:i[0],text:u,href:c,tokens:[{type:"text",raw:u,text:u}]}}}inlineText(o){let i=this.rules.inline.text.exec(o);if(i){let a=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:a}}}},we=class Rs{constructor(i){hn(this,"tokens");hn(this,"options");hn(this,"state");hn(this,"inlineQueue");hn(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Tt,this.options.tokenizer=this.options.tokenizer||new pi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:qn,block:si.normal,inline:Hr.normal};this.options.pedantic?(a.block=si.pedantic,a.inline=Hr.pedantic):this.options.gfm&&(a.block=si.gfm,this.options.breaks?a.inline=Hr.breaks:a.inline=Hr.gfm),this.tokenizer.rules=a}static get rules(){return{block:si,inline:Hr}}static lex(i,a){return new Rs(a).lex(i)}static lexInline(i,a){return new Rs(a).inlineTokens(i)}lex(i){i=i.replace(qn.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let a=0;a<this.inlineQueue.length;a++){let u=this.inlineQueue[a];this.inlineTokens(u.src,u.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,a=[],u=!1){var c,p,h;for(this.options.pedantic&&(i=i.replace(qn.tabCharGlobal,"    ").replace(qn.spaceLine,""));i;){let d;if((p=(c=this.options.extensions)==null?void 0:c.block)!=null&&p.some(v=>(d=v.call({lexer:this},i,a))?(i=i.substring(d.raw.length),a.push(d),!0):!1))continue;if(d=this.tokenizer.space(i)){i=i.substring(d.raw.length);let v=a.at(-1);d.raw.length===1&&v!==void 0?v.raw+=`
`:a.push(d);continue}if(d=this.tokenizer.code(i)){i=i.substring(d.raw.length);let v=a.at(-1);(v==null?void 0:v.type)==="paragraph"||(v==null?void 0:v.type)==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+d.raw,v.text+=`
`+d.text,this.inlineQueue.at(-1).src=v.text):a.push(d);continue}if(d=this.tokenizer.fences(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.heading(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.hr(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.blockquote(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.list(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.html(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.def(i)){i=i.substring(d.raw.length);let v=a.at(-1);(v==null?void 0:v.type)==="paragraph"||(v==null?void 0:v.type)==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+d.raw,v.text+=`
`+d.raw,this.inlineQueue.at(-1).src=v.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},a.push(d));continue}if(d=this.tokenizer.table(i)){i=i.substring(d.raw.length),a.push(d);continue}if(d=this.tokenizer.lheading(i)){i=i.substring(d.raw.length),a.push(d);continue}let x=i;if((h=this.options.extensions)!=null&&h.startBlock){let v=1/0,E=i.slice(1),L;this.options.extensions.startBlock.forEach(R=>{L=R.call({lexer:this},E),typeof L=="number"&&L>=0&&(v=Math.min(v,L))}),v<1/0&&v>=0&&(x=i.substring(0,v+1))}if(this.state.top&&(d=this.tokenizer.paragraph(x))){let v=a.at(-1);u&&(v==null?void 0:v.type)==="paragraph"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+d.raw,v.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):a.push(d),u=x.length!==i.length,i=i.substring(d.raw.length);continue}if(d=this.tokenizer.text(i)){i=i.substring(d.raw.length);let v=a.at(-1);(v==null?void 0:v.type)==="text"?(v.raw+=(v.raw.endsWith(`
`)?"":`
`)+d.raw,v.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=v.text):a.push(d);continue}if(i){let v="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return this.state.top=!0,a}inline(i,a=[]){return this.inlineQueue.push({src:i,tokens:a}),a}inlineTokens(i,a=[]){var x,v,E,L,R;let u=i,c=null;if(this.tokens.links){let P=Object.keys(this.tokens.links);if(P.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(u))!=null;)P.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(u=u.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(u))!=null;)u=u.slice(0,c.index)+"++"+u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let p;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(u))!=null;)p=c[2]?c[2].length:0,u=u.slice(0,c.index+p)+"["+"a".repeat(c[0].length-p-2)+"]"+u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);u=((v=(x=this.options.hooks)==null?void 0:x.emStrongMask)==null?void 0:v.call({lexer:this},u))??u;let h=!1,d="";for(;i;){h||(d=""),h=!1;let P;if((L=(E=this.options.extensions)==null?void 0:E.inline)!=null&&L.some(A=>(P=A.call({lexer:this},i,a))?(i=i.substring(P.raw.length),a.push(P),!0):!1))continue;if(P=this.tokenizer.escape(i)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.tag(i)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.link(i)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(P.raw.length);let A=a.at(-1);P.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=P.raw,A.text+=P.text):a.push(P);continue}if(P=this.tokenizer.emStrong(i,u,d)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.codespan(i)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.br(i)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.del(i,u,d)){i=i.substring(P.raw.length),a.push(P);continue}if(P=this.tokenizer.autolink(i)){i=i.substring(P.raw.length),a.push(P);continue}if(!this.state.inLink&&(P=this.tokenizer.url(i))){i=i.substring(P.raw.length),a.push(P);continue}let j=i;if((R=this.options.extensions)!=null&&R.startInline){let A=1/0,N=i.slice(1),Y;this.options.extensions.startInline.forEach(en=>{Y=en.call({lexer:this},N),typeof Y=="number"&&Y>=0&&(A=Math.min(A,Y))}),A<1/0&&A>=0&&(j=i.substring(0,A+1))}if(P=this.tokenizer.inlineText(j)){i=i.substring(P.raw.length),P.raw.slice(-1)!=="_"&&(d=P.raw.slice(-1)),h=!0;let A=a.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=P.raw,A.text+=P.text):a.push(P);continue}if(i){let A="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return a}},di=class{constructor(o){hn(this,"options");hn(this,"parser");this.options=o||Tt}space(o){return""}code({text:o,lang:i,escaped:a}){var p;let u=(p=(i||"").match(qn.notSpaceStart))==null?void 0:p[0],c=o.replace(qn.endingNewline,"")+`
`;return u?'<pre><code class="language-'+Te(u)+'">'+(a?c:Te(c,!0))+`</code></pre>
`:"<pre><code>"+(a?c:Te(c,!0))+`</code></pre>
`}blockquote({tokens:o}){return`<blockquote>
${this.parser.parse(o)}</blockquote>
`}html({text:o}){return o}def(o){return""}heading({tokens:o,depth:i}){return`<h${i}>${this.parser.parseInline(o)}</h${i}>
`}hr(o){return`<hr>
`}list(o){let i=o.ordered,a=o.start,u="";for(let h=0;h<o.items.length;h++){let d=o.items[h];u+=this.listitem(d)}let c=i?"ol":"ul",p=i&&a!==1?' start="'+a+'"':"";return"<"+c+p+`>
`+u+"</"+c+`>
`}listitem(o){return`<li>${this.parser.parse(o.tokens)}</li>
`}checkbox({checked:o}){return"<input "+(o?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:o}){return`<p>${this.parser.parseInline(o)}</p>
`}table(o){let i="",a="";for(let c=0;c<o.header.length;c++)a+=this.tablecell(o.header[c]);i+=this.tablerow({text:a});let u="";for(let c=0;c<o.rows.length;c++){let p=o.rows[c];a="";for(let h=0;h<p.length;h++)a+=this.tablecell(p[h]);u+=this.tablerow({text:a})}return u&&(u=`<tbody>${u}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+u+`</table>
`}tablerow({text:o}){return`<tr>
${o}</tr>
`}tablecell(o){let i=this.parser.parseInline(o.tokens),a=o.header?"th":"td";return(o.align?`<${a} align="${o.align}">`:`<${a}>`)+i+`</${a}>
`}strong({tokens:o}){return`<strong>${this.parser.parseInline(o)}</strong>`}em({tokens:o}){return`<em>${this.parser.parseInline(o)}</em>`}codespan({text:o}){return`<code>${Te(o,!0)}</code>`}br(o){return"<br>"}del({tokens:o}){return`<del>${this.parser.parseInline(o)}</del>`}link({href:o,title:i,tokens:a}){let u=this.parser.parseInline(a),c=of(o);if(c===null)return u;o=c;let p='<a href="'+o+'"';return i&&(p+=' title="'+Te(i)+'"'),p+=">"+u+"</a>",p}image({href:o,title:i,text:a,tokens:u}){u&&(a=this.parser.parseInline(u,this.parser.textRenderer));let c=of(o);if(c===null)return Te(a);o=c;let p=`<img src="${o}" alt="${Te(a)}"`;return i&&(p+=` title="${Te(i)}"`),p+=">",p}text(o){return"tokens"in o&&o.tokens?this.parser.parseInline(o.tokens):"escaped"in o&&o.escaped?o.text:Te(o.text)}},Vs=class{strong({text:o}){return o}em({text:o}){return o}codespan({text:o}){return o}del({text:o}){return o}html({text:o}){return o}text({text:o}){return o}link({text:o}){return""+o}image({text:o}){return""+o}br(){return""}checkbox({raw:o}){return o}},Se=class Ps{constructor(i){hn(this,"options");hn(this,"renderer");hn(this,"textRenderer");this.options=i||Tt,this.options.renderer=this.options.renderer||new di,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Vs}static parse(i,a){return new Ps(a).parse(i)}static parseInline(i,a){return new Ps(a).parseInline(i)}parse(i){var u,c;let a="";for(let p=0;p<i.length;p++){let h=i[p];if((c=(u=this.options.extensions)==null?void 0:u.renderers)!=null&&c[h.type]){let x=h,v=this.options.extensions.renderers[x.type].call({parser:this},x);if(v!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(x.type)){a+=v||"";continue}}let d=h;switch(d.type){case"space":{a+=this.renderer.space(d);break}case"hr":{a+=this.renderer.hr(d);break}case"heading":{a+=this.renderer.heading(d);break}case"code":{a+=this.renderer.code(d);break}case"table":{a+=this.renderer.table(d);break}case"blockquote":{a+=this.renderer.blockquote(d);break}case"list":{a+=this.renderer.list(d);break}case"checkbox":{a+=this.renderer.checkbox(d);break}case"html":{a+=this.renderer.html(d);break}case"def":{a+=this.renderer.def(d);break}case"paragraph":{a+=this.renderer.paragraph(d);break}case"text":{a+=this.renderer.text(d);break}default:{let x='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return a}parseInline(i,a=this.renderer){var c,p;let u="";for(let h=0;h<i.length;h++){let d=i[h];if((p=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&p[d.type]){let v=this.options.extensions.renderers[d.type].call({parser:this},d);if(v!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){u+=v||"";continue}}let x=d;switch(x.type){case"escape":{u+=a.text(x);break}case"html":{u+=a.html(x);break}case"link":{u+=a.link(x);break}case"image":{u+=a.image(x);break}case"checkbox":{u+=a.checkbox(x);break}case"strong":{u+=a.strong(x);break}case"em":{u+=a.em(x);break}case"codespan":{u+=a.codespan(x);break}case"br":{u+=a.br(x);break}case"del":{u+=a.del(x);break}case"text":{u+=a.text(x);break}default:{let v='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return u}},ai,qr=(ai=class{constructor(o){hn(this,"options");hn(this,"block");this.options=o||Tt}preprocess(o){return o}postprocess(o){return o}processAllTokens(o){return o}emStrongMask(o){return o}provideLexer(){return this.block?we.lex:we.lexInline}provideParser(){return this.block?Se.parse:Se.parseInline}},hn(ai,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),hn(ai,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ai),dg=class{constructor(...o){hn(this,"defaults",As());hn(this,"options",this.setOptions);hn(this,"parse",this.parseMarkdown(!0));hn(this,"parseInline",this.parseMarkdown(!1));hn(this,"Parser",Se);hn(this,"Renderer",di);hn(this,"TextRenderer",Vs);hn(this,"Lexer",we);hn(this,"Tokenizer",pi);hn(this,"Hooks",qr);this.use(...o)}walkTokens(o,i){var u,c;let a=[];for(let p of o)switch(a=a.concat(i.call(this,p)),p.type){case"table":{let h=p;for(let d of h.header)a=a.concat(this.walkTokens(d.tokens,i));for(let d of h.rows)for(let x of d)a=a.concat(this.walkTokens(x.tokens,i));break}case"list":{let h=p;a=a.concat(this.walkTokens(h.items,i));break}default:{let h=p;(c=(u=this.defaults.extensions)==null?void 0:u.childTokens)!=null&&c[h.type]?this.defaults.extensions.childTokens[h.type].forEach(d=>{let x=h[d].flat(1/0);a=a.concat(this.walkTokens(x,i))}):h.tokens&&(a=a.concat(this.walkTokens(h.tokens,i)))}}return a}use(...o){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return o.forEach(a=>{let u={...a};if(u.async=this.defaults.async||u.async||!1,a.extensions&&(a.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let p=i.renderers[c.name];p?i.renderers[c.name]=function(...h){let d=c.renderer.apply(this,h);return d===!1&&(d=p.apply(this,h)),d}:i.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let p=i[c.level];p?p.unshift(c.tokenizer):i[c.level]=[c.tokenizer],c.start&&(c.level==="block"?i.startBlock?i.startBlock.push(c.start):i.startBlock=[c.start]:c.level==="inline"&&(i.startInline?i.startInline.push(c.start):i.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(i.childTokens[c.name]=c.childTokens)}),u.extensions=i),a.renderer){let c=this.defaults.renderer||new di(this.defaults);for(let p in a.renderer){if(!(p in c))throw new Error(`renderer '${p}' does not exist`);if(["options","parser"].includes(p))continue;let h=p,d=a.renderer[h],x=c[h];c[h]=(...v)=>{let E=d.apply(c,v);return E===!1&&(E=x.apply(c,v)),E||""}}u.renderer=c}if(a.tokenizer){let c=this.defaults.tokenizer||new pi(this.defaults);for(let p in a.tokenizer){if(!(p in c))throw new Error(`tokenizer '${p}' does not exist`);if(["options","rules","lexer"].includes(p))continue;let h=p,d=a.tokenizer[h],x=c[h];c[h]=(...v)=>{let E=d.apply(c,v);return E===!1&&(E=x.apply(c,v)),E}}u.tokenizer=c}if(a.hooks){let c=this.defaults.hooks||new qr;for(let p in a.hooks){if(!(p in c))throw new Error(`hook '${p}' does not exist`);if(["options","block"].includes(p))continue;let h=p,d=a.hooks[h],x=c[h];qr.passThroughHooks.has(p)?c[h]=v=>{if(this.defaults.async&&qr.passThroughHooksRespectAsync.has(p))return(async()=>{let L=await d.call(c,v);return x.call(c,L)})();let E=d.call(c,v);return x.call(c,E)}:c[h]=(...v)=>{if(this.defaults.async)return(async()=>{let L=await d.apply(c,v);return L===!1&&(L=await x.apply(c,v)),L})();let E=d.apply(c,v);return E===!1&&(E=x.apply(c,v)),E}}u.hooks=c}if(a.walkTokens){let c=this.defaults.walkTokens,p=a.walkTokens;u.walkTokens=function(h){let d=[];return d.push(p.call(this,h)),c&&(d=d.concat(c.call(this,h))),d}}this.defaults={...this.defaults,...u}}),this}setOptions(o){return this.defaults={...this.defaults,...o},this}lexer(o,i){return we.lex(o,i??this.defaults)}parser(o,i){return Se.parse(o,i??this.defaults)}parseMarkdown(o){return(i,a)=>{let u={...a},c={...this.defaults,...u},p=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&u.async===!1)return p(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=o),c.async)return(async()=>{let h=c.hooks?await c.hooks.preprocess(i):i,d=await(c.hooks?await c.hooks.provideLexer():o?we.lex:we.lexInline)(h,c),x=c.hooks?await c.hooks.processAllTokens(d):d;c.walkTokens&&await Promise.all(this.walkTokens(x,c.walkTokens));let v=await(c.hooks?await c.hooks.provideParser():o?Se.parse:Se.parseInline)(x,c);return c.hooks?await c.hooks.postprocess(v):v})().catch(p);try{c.hooks&&(i=c.hooks.preprocess(i));let h=(c.hooks?c.hooks.provideLexer():o?we.lex:we.lexInline)(i,c);c.hooks&&(h=c.hooks.processAllTokens(h)),c.walkTokens&&this.walkTokens(h,c.walkTokens);let d=(c.hooks?c.hooks.provideParser():o?Se.parse:Se.parseInline)(h,c);return c.hooks&&(d=c.hooks.postprocess(d)),d}catch(h){return p(h)}}}onError(o,i){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,o){let u="<p>An error occurred:</p><pre>"+Te(a.message+"",!0)+"</pre>";return i?Promise.resolve(u):u}if(i)return Promise.reject(a);throw a}}},Ct=new dg;function cn(o,i){return Ct.parse(o,i)}cn.options=cn.setOptions=function(o){return Ct.setOptions(o),cn.defaults=Ct.defaults,Lf(cn.defaults),cn};cn.getDefaults=As;cn.defaults=Tt;cn.use=function(...o){return Ct.use(...o),cn.defaults=Ct.defaults,Lf(cn.defaults),cn};cn.walkTokens=function(o,i){return Ct.walkTokens(o,i)};cn.parseInline=Ct.parseInline;cn.Parser=Se;cn.parser=Se.parse;cn.Renderer=di;cn.TextRenderer=Vs;cn.Lexer=we;cn.lexer=we.lex;cn.Tokenizer=pi;cn.Hooks=qr;cn.parse=cn;cn.options;cn.setOptions;cn.use;cn.walkTokens;cn.parseInline;Se.parse;we.lex;cn.setOptions({breaks:!0,gfm:!0});function hg(o){return o.split(`
`).map(i=>i.replace(/^ {1,5}/,"")).join(`
`)}function mg(o){return o.replace(/(<h2[^>]*>(?:[^<]*호기심 상자[^<]*)<\/h2>)([\s\S]*?)(?=<h2[ >]|<hr[ />]|$)/g,'<div class="curiosity-box">$1$2</div>')}function gg(o){return o.replace(/(<img\s[^>]*src=")\/images\//g,"$1/infogeo-book/images/")}function vg({markdown:o}){const i=M.useMemo(()=>{const a=hg(o);return gg(mg(cn.parse(a)))},[o]);return V.jsx("div",{className:"prose-content",dangerouslySetInnerHTML:{__html:i}})}function yg({component:o}){return V.jsxs("div",{style:{margin:"40px -24px",borderTop:`1px solid ${Q.border}`,borderBottom:`1px solid ${Q.border}`,background:Q.bg},children:[V.jsx("div",{style:{padding:"12px 24px 4px",fontSize:11,color:Q.accentDim,fontFamily:pe.mono,letterSpacing:1,textTransform:"uppercase"},children:"인터랙티브 시각화"}),V.jsx(M.Suspense,{fallback:V.jsx("div",{style:{padding:40,textAlign:"center",color:Q.textDim,fontFamily:pe.mono,fontSize:12},children:"불러오는 중…"}),children:V.jsx(o,{})})]})}function xg(){const o=[];for(let i=0;i<Ke.length;i++){const a=Ke[i],u=vi(a.md);for(let c=0;c<u.length;c++)o.push({chapterIdx:i,sectionIdx:c,slug:a.slug})}return o}let ks=null;function kg(){return ks||(ks=xg()),ks}function Of(o,i){const a=kg(),u=a.findIndex(h=>h.slug===o.slug&&h.sectionIdx===i),c=u>0?a[u-1]:null,p=u<a.length-1?a[u+1]:null;return{prev:c,next:p}}function hi(o){if(!o)return"";const i=Ke[o.chapterIdx],a=vi(i.md),{title:u}=Is(a[o.sectionIdx]||"");return u||"들어가며"}function wg({chapter:o,sectionIdx:i,totalSections:a}){const{prev:u,next:c}=Of(o,i),p={color:Q.textDim,textDecoration:"none",transition:"color 0.2s"},h=u?Ke[u.chapterIdx]:null,d=c?Ke[c.chapterIdx]:null;return V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",marginTop:40,borderTop:`1px solid ${Q.border}`,fontFamily:pe.mono,fontSize:12},children:[u?V.jsxs(ft,{to:`/${u.slug}/${u.sectionIdx}`,style:p,children:["← ",h.id!==o.id?`${h.id}. ${h.title} · `:"",hi(u)]}):V.jsx("span",{}),c?V.jsxs(ft,{to:`/${c.slug}/${c.sectionIdx}`,style:p,children:[d.id!==o.id?`${d.id}. ${d.title} · `:"",hi(c)," →"]}):V.jsx("span",{})]})}function Sg({chapter:o,sectionIdx:i}){const{prev:a,next:u}=Of(o,i),c=a?Ke[a.chapterIdx]:null,p=u?Ke[u.chapterIdx]:null;return V.jsxs(V.Fragment,{children:[a&&V.jsx(ft,{to:`/${a.slug}/${a.sectionIdx}`,className:"side-arrow side-arrow-left",title:`${c.id!==o.id?`${c.id}. ${c.title} · `:""}${hi(a)}`,"aria-label":"이전 페이지",children:"‹"}),u&&V.jsx(ft,{to:`/${u.slug}/${u.sectionIdx}`,className:"side-arrow side-arrow-right",title:`${p.id!==o.id?`${p.id}. ${p.title} · `:""}${hi(u)}`,"aria-label":"다음 페이지",children:"›"})]})}function Eg({chapter:o}){var v;const{sectionIdx:i}=_h(),a=parseInt(i,10)||0;M.useEffect(()=>{window.scrollTo(0,0)},[o.slug,a]);const u=M.useMemo(()=>vi(o.md),[o.md]),{title:c,vizKey:p,prose:h}=M.useMemo(()=>Is(u[a]||""),[u,a]),d=p?(v=o.vizMap)==null?void 0:v[p]:null,x=a===0;return V.jsxs("div",{style:{minHeight:"100vh",background:Q.bg,color:Q.text},children:[V.jsx(Sg,{chapter:o,sectionIdx:a}),V.jsx("div",{style:{padding:"60px 24px 24px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)"},children:V.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[V.jsxs("div",{style:{fontSize:13,color:Q.accentDim,fontFamily:pe.mono,marginBottom:8,letterSpacing:1},children:[o.id!=="A"?`제${o.id}장`:"부록",!x&&` · ${a} / ${u.length-1}`]}),V.jsx("h1",{style:{fontFamily:pe.serif,fontSize:x?32:26,color:Q.accent,margin:0,letterSpacing:1,lineHeight:1.3},children:x?o.title:c||o.title})]})}),V.jsx("div",{style:{padding:"24px 24px 48px"},children:V.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[V.jsx(vg,{markdown:h}),d&&V.jsx(yg,{component:d}),V.jsx(wg,{chapter:o,sectionIdx:a,totalSections:u.length})]})})]})}function _g(){return V.jsx("div",{style:{minHeight:"100vh",background:Q.bg,display:"flex",alignItems:"center",justifyContent:"center",color:Q.textDim,fontFamily:pe.mono,fontSize:13},children:"불러오는 중…"})}function Lg(){const[o,i]=M.useState({}),[a,u]=M.useState(null),c=(p,h)=>{h.preventDefault(),h.stopPropagation(),i(d=>({...d,[p]:!d[p]}))};return V.jsxs("div",{style:{minHeight:"100vh",background:Q.bg,color:Q.text,fontFamily:pe.mono},children:[V.jsxs("div",{style:{padding:"60px 24px 32px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)",textAlign:"center"},children:[V.jsx("h1",{style:{fontFamily:pe.serif,fontSize:36,color:Q.accent,marginBottom:6,letterSpacing:2},children:"情報幾何學"}),V.jsx("p",{style:{color:Q.textDim,fontSize:13,marginBottom:4},children:"정보기하학 — 확률분포의 기하학적 구조"}),V.jsx("p",{style:{color:Q.textMuted,fontSize:11},children:"인터랙티브 교재 · Interactive Textbook"})]}),V.jsx("div",{style:{padding:"0 24px 48px"},children:V.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:V.jsx("div",{style:{display:"grid",gap:8},children:Ke.map((p,h)=>{const d=p.id.includes("z"),x=p.id==="A",v=vi(p.md),E=v.length>1,L=o[p.slug],R=Object.keys(p.vizMap||{}).length>0;return V.jsxs("div",{children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:d?"10px 20px 10px 40px":"12px 20px",borderRadius:L?"8px 8px 0 0":8,background:a===h?Q.cardHover:d?"transparent":Q.card,border:`1px solid ${a===h?Q.accentDim:d?"transparent":Q.border}`,borderBottom:L?"none":void 0,transition:"all 0.2s",cursor:"pointer"},onMouseEnter:()=>u(h),onMouseLeave:()=>u(null),children:[V.jsx("span",{style:{fontSize:d?14:18,fontWeight:700,color:d?Q.dual:x?Q.textDim:Q.accent,fontFamily:pe.serif,minWidth:d?32:40,textAlign:"center"},children:d?"∿":p.id}),V.jsx(ft,{to:`/${p.slug}/0`,style:{flex:1,textDecoration:"none",fontSize:d?12:14,color:a===h?Q.accent:d?Q.textDim:Q.text,fontWeight:d?400:600,fontStyle:d?"italic":"normal"},children:p.title}),R&&V.jsx("span",{style:{fontSize:9,color:Q.accentDim,fontFamily:pe.mono,padding:"2px 6px",borderRadius:4,background:Q.accentSoft},children:"VIZ"}),E&&V.jsx("span",{onClick:P=>c(p.slug,P),style:{fontSize:14,color:a===h?Q.accent:Q.textMuted,transition:"all 0.2s",transform:L?"rotate(90deg)":"none",cursor:"pointer",userSelect:"none",padding:"0 4px"},children:"→"}),!E&&V.jsx(ft,{to:`/${p.slug}/0`,style:{fontSize:14,color:a===h?Q.accent:Q.textMuted,textDecoration:"none",transition:"all 0.2s",transform:a===h?"translateX(3px)":"none"},children:"→"})]}),L&&E&&V.jsx("div",{style:{background:Q.card,border:`1px solid ${Q.border}`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:"4px 0 8px"},children:v.map((P,j)=>{var en;const{title:A,vizKey:N}=Is(P),Y=N&&((en=p.vizMap)==null?void 0:en[N]);return V.jsxs(ft,{to:`/${p.slug}/${j}`,style:{display:"flex",alignItems:"center",gap:10,padding:"6px 20px 6px 74px",textDecoration:"none",fontSize:12,color:Q.textDim,transition:"color 0.15s"},onMouseEnter:b=>b.currentTarget.style.color=Q.accent,onMouseLeave:b=>b.currentTarget.style.color=Q.textDim,children:[V.jsx("span",{style:{color:Q.textMuted,fontSize:10,minWidth:16},children:j===0?"·":`${j}`}),V.jsx("span",{style:{flex:1},children:j===0?"들어가며":A||`절 ${j}`}),Y&&V.jsx("span",{style:{fontSize:8,color:Q.accentDim,fontFamily:pe.mono,padding:"1px 4px",borderRadius:3,background:Q.accentSoft},children:"VIZ"})]},j)})})]},p.slug)})})})})]})}function Rg(){return rr().pathname==="/"?null:V.jsx(ft,{to:"/",style:{position:"fixed",top:12,left:12,zIndex:1e3,padding:"6px 14px",borderRadius:6,background:`${Q.card}e6`,border:`1px solid ${Q.border}`,color:Q.textDim,fontSize:11,fontFamily:pe.mono,textDecoration:"none",backdropFilter:"blur(8px)",transition:"color 0.2s"},children:"← 목차"})}function Pg(){const[o,i]=M.useState(Yh);return M.useEffect(()=>_f(i),[]),V.jsx("button",{className:"theme-toggle",onClick:nm,title:o==="dark"?"라이트 모드로":"다크 모드로",children:o==="dark"?"☀":"☾"})}function Cg(){const[,o]=M.useState(0);return M.useEffect(()=>_f(()=>o(i=>i+1)),[]),V.jsxs(Jh,{children:[V.jsx(Rg,{}),V.jsx(Pg,{}),V.jsx(M.Suspense,{fallback:V.jsx(_g,{}),children:V.jsxs(Bh,{children:[V.jsx(ui,{path:"/",element:V.jsx(Lg,{})}),Ke.map(i=>V.jsxs(M.Fragment,{children:[V.jsx(ui,{path:`/${i.slug}`,element:V.jsx($h,{to:`/${i.slug}/0`,replace:!0})}),V.jsx(ui,{path:`/${i.slug}/:sectionIdx`,element:V.jsx(Eg,{chapter:i})})]},i.slug))]})})]})}Wd.createRoot(document.getElementById("root")).render(V.jsx(Cg,{}));export{Q as C,Ng as a,Tg as c,pe as f,Fg as i,V as j,M as r};
