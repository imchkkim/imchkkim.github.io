const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ch03-distance-Ccj1NgXx.js","assets/components-7XzpAn6N.js","assets/math-utils-kQXqsAxP.js","assets/log-D84CqNi6.js","assets/continuous-7-vF7RlP.js","assets/ch04-paths-Bp1VCuK3.js","assets/ch05-surprise-and-information-CtACxMYT.js","assets/linear-D_IZ8hJA.js","assets/ch06-convex-duality-CBNcUehm.js","assets/ch07-exponential-family-flashcards-RJgIj7c6.js","assets/ch09-fisher-information-C0Zt-5EO.js","assets/ch11-geometry-of-inference-uezYppuE.js","assets/ch12-convergence-DcXLfKA5.js","assets/ch14-diffusion-B7H1dhuf.js","assets/ch15-flow-matching-ZgGQgImq.js","assets/ch16-broadening-narrowing-B8MWWOqF.js","assets/ch17-scaling-Dc1sEsWM.js"])))=>i.map(i=>d[i]);
var wd=Object.defineProperty;var Sd=(s,i,u)=>i in s?wd(s,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):s[i]=u;var pn=(s,i,u)=>Sd(s,typeof i!="symbol"?i+"":i,u);function Ed(s,i){for(var u=0;u<i.length;u++){const a=i[u];if(typeof a!="string"&&!Array.isArray(a)){for(const c in a)if(c!=="default"&&!(c in s)){const p=Object.getOwnPropertyDescriptor(a,c);p&&Object.defineProperty(s,c,p.get?p:{enumerable:!0,get:()=>a[c]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function u(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(c){if(c.ep)return;c.ep=!0;const p=u(c);fetch(c.href,p)}})();function Ld(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var as={exports:{}},jt={},cs={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pc;function Rd(){if(Pc)return G;Pc=1;var s=Symbol.for("react.element"),i=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),R=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,A={};function N(x,z,Q){this.props=x,this.context=z,this.refs=A,this.updater=Q||C}N.prototype.isReactComponent={},N.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},N.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function b(){}b.prototype=N.prototype;function rn(x,z,Q){this.props=x,this.context=z,this.refs=A,this.updater=Q||C}var en=rn.prototype=new b;en.constructor=rn,V(en,N.prototype),en.isPureReactComponent=!0;var an=Array.isArray,Rn=Object.prototype.hasOwnProperty,Dn={current:null},Fn={key:!0,ref:!0,__self:!0,__source:!0};function Tn(x,z,Q){var Z,ln={},on=null,dn=null;if(z!=null)for(Z in z.ref!==void 0&&(dn=z.ref),z.key!==void 0&&(on=""+z.key),z)Rn.call(z,Z)&&!Fn.hasOwnProperty(Z)&&(ln[Z]=z[Z]);var cn=arguments.length-2;if(cn===1)ln.children=Q;else if(1<cn){for(var vn=Array(cn),bn=0;bn<cn;bn++)vn[bn]=arguments[bn+2];ln.children=vn}if(x&&x.defaultProps)for(Z in cn=x.defaultProps,cn)ln[Z]===void 0&&(ln[Z]=cn[Z]);return{$$typeof:s,type:x,key:on,ref:dn,props:ln,_owner:Dn.current}}function Kr(x,z){return{$$typeof:s,type:x.type,key:z,ref:x.ref,props:x.props,_owner:x._owner}}function Fr(x){return typeof x=="object"&&x!==null&&x.$$typeof===s}function ue(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Q){return z[Q]})}var Sr=/\/+/g;function Yn(x,z){return typeof x=="object"&&x!==null&&x.key!=null?ue(""+x.key):z.toString(36)}function fr(x,z,Q,Z,ln){var on=typeof x;(on==="undefined"||on==="boolean")&&(x=null);var dn=!1;if(x===null)dn=!0;else switch(on){case"string":case"number":dn=!0;break;case"object":switch(x.$$typeof){case s:case i:dn=!0}}if(dn)return dn=x,ln=ln(dn),x=Z===""?"."+Yn(dn,0):Z,an(ln)?(Q="",x!=null&&(Q=x.replace(Sr,"$&/")+"/"),fr(ln,z,Q,"",function(bn){return bn})):ln!=null&&(Fr(ln)&&(ln=Kr(ln,Q+(!ln.key||dn&&dn.key===ln.key?"":(""+ln.key).replace(Sr,"$&/")+"/")+x)),z.push(ln)),1;if(dn=0,Z=Z===""?".":Z+":",an(x))for(var cn=0;cn<x.length;cn++){on=x[cn];var vn=Z+Yn(on,cn);dn+=fr(on,z,Q,vn,ln)}else if(vn=_(x),typeof vn=="function")for(x=vn.call(x),cn=0;!(on=x.next()).done;)on=on.value,vn=Z+Yn(on,cn++),dn+=fr(on,z,Q,vn,ln);else if(on==="object")throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return dn}function Er(x,z,Q){if(x==null)return x;var Z=[],ln=0;return fr(x,Z,"","",function(on){return z.call(Q,on,ln++)}),Z}function Wn(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(Q){(x._status===0||x._status===-1)&&(x._status=1,x._result=Q)},function(Q){(x._status===0||x._status===-1)&&(x._status=2,x._result=Q)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var wn={current:null},O={transition:null},q={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:O,ReactCurrentOwner:Dn};function K(){throw Error("act(...) is not supported in production builds of React.")}return G.Children={map:Er,forEach:function(x,z,Q){Er(x,function(){z.apply(this,arguments)},Q)},count:function(x){var z=0;return Er(x,function(){z++}),z},toArray:function(x){return Er(x,function(z){return z})||[]},only:function(x){if(!Fr(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},G.Component=N,G.Fragment=u,G.Profiler=c,G.PureComponent=rn,G.StrictMode=a,G.Suspense=k,G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,G.act=K,G.cloneElement=function(x,z,Q){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var Z=V({},x.props),ln=x.key,on=x.ref,dn=x._owner;if(z!=null){if(z.ref!==void 0&&(on=z.ref,dn=Dn.current),z.key!==void 0&&(ln=""+z.key),x.type&&x.type.defaultProps)var cn=x.type.defaultProps;for(vn in z)Rn.call(z,vn)&&!Fn.hasOwnProperty(vn)&&(Z[vn]=z[vn]===void 0&&cn!==void 0?cn[vn]:z[vn])}var vn=arguments.length-2;if(vn===1)Z.children=Q;else if(1<vn){cn=Array(vn);for(var bn=0;bn<vn;bn++)cn[bn]=arguments[bn+2];Z.children=cn}return{$$typeof:s,type:x.type,key:ln,ref:on,props:Z,_owner:dn}},G.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:p,_context:x},x.Consumer=x},G.createElement=Tn,G.createFactory=function(x){var z=Tn.bind(null,x);return z.type=x,z},G.createRef=function(){return{current:null}},G.forwardRef=function(x){return{$$typeof:h,render:x}},G.isValidElement=Fr,G.lazy=function(x){return{$$typeof:L,_payload:{_status:-1,_result:x},_init:Wn}},G.memo=function(x,z){return{$$typeof:y,type:x,compare:z===void 0?null:z}},G.startTransition=function(x){var z=O.transition;O.transition={};try{x()}finally{O.transition=z}},G.unstable_act=K,G.useCallback=function(x,z){return wn.current.useCallback(x,z)},G.useContext=function(x){return wn.current.useContext(x)},G.useDebugValue=function(){},G.useDeferredValue=function(x){return wn.current.useDeferredValue(x)},G.useEffect=function(x,z){return wn.current.useEffect(x,z)},G.useId=function(){return wn.current.useId()},G.useImperativeHandle=function(x,z,Q){return wn.current.useImperativeHandle(x,z,Q)},G.useInsertionEffect=function(x,z){return wn.current.useInsertionEffect(x,z)},G.useLayoutEffect=function(x,z){return wn.current.useLayoutEffect(x,z)},G.useMemo=function(x,z){return wn.current.useMemo(x,z)},G.useReducer=function(x,z,Q){return wn.current.useReducer(x,z,Q)},G.useRef=function(x){return wn.current.useRef(x)},G.useState=function(x){return wn.current.useState(x)},G.useSyncExternalStore=function(x,z,Q){return wn.current.useSyncExternalStore(x,z,Q)},G.useTransition=function(){return wn.current.useTransition()},G.version="18.3.1",G}var zc;function Ss(){return zc||(zc=1,cs.exports=Rd()),cs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc;function _d(){if(Fc)return jt;Fc=1;var s=Ss(),i=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(h,k,y){var L,R={},_=null,C=null;y!==void 0&&(_=""+y),k.key!==void 0&&(_=""+k.key),k.ref!==void 0&&(C=k.ref);for(L in k)a.call(k,L)&&!p.hasOwnProperty(L)&&(R[L]=k[L]);if(h&&h.defaultProps)for(L in k=h.defaultProps,k)R[L]===void 0&&(R[L]=k[L]);return{$$typeof:i,type:h,key:_,ref:C,props:R,_owner:c.current}}return jt.Fragment=u,jt.jsx=m,jt.jsxs=m,jt}var Tc;function Cd(){return Tc||(Tc=1,as.exports=_d()),as.exports}var X=Cd(),ti={},fs={exports:{}},Zn={},ps={exports:{}},ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nc;function Pd(){return Nc||(Nc=1,(function(s){function i(O,q){var K=O.length;O.push(q);n:for(;0<K;){var x=K-1>>>1,z=O[x];if(0<c(z,q))O[x]=q,O[K]=z,K=x;else break n}}function u(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var q=O[0],K=O.pop();if(K!==q){O[0]=K;n:for(var x=0,z=O.length,Q=z>>>1;x<Q;){var Z=2*(x+1)-1,ln=O[Z],on=Z+1,dn=O[on];if(0>c(ln,K))on<z&&0>c(dn,ln)?(O[x]=dn,O[on]=K,x=on):(O[x]=ln,O[Z]=K,x=Z);else if(on<z&&0>c(dn,K))O[x]=dn,O[on]=K,x=on;else break n}}return q}function c(O,q){var K=O.sortIndex-q.sortIndex;return K!==0?K:O.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var m=Date,h=m.now();s.unstable_now=function(){return m.now()-h}}var k=[],y=[],L=1,R=null,_=3,C=!1,V=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,rn=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function en(O){for(var q=u(y);q!==null;){if(q.callback===null)a(y);else if(q.startTime<=O)a(y),q.sortIndex=q.expirationTime,i(k,q);else break;q=u(y)}}function an(O){if(A=!1,en(O),!V)if(u(k)!==null)V=!0,Wn(Rn);else{var q=u(y);q!==null&&wn(an,q.startTime-O)}}function Rn(O,q){V=!1,A&&(A=!1,b(Tn),Tn=-1),C=!0;var K=_;try{for(en(q),R=u(k);R!==null&&(!(R.expirationTime>q)||O&&!ue());){var x=R.callback;if(typeof x=="function"){R.callback=null,_=R.priorityLevel;var z=x(R.expirationTime<=q);q=s.unstable_now(),typeof z=="function"?R.callback=z:R===u(k)&&a(k),en(q)}else a(k);R=u(k)}if(R!==null)var Q=!0;else{var Z=u(y);Z!==null&&wn(an,Z.startTime-q),Q=!1}return Q}finally{R=null,_=K,C=!1}}var Dn=!1,Fn=null,Tn=-1,Kr=5,Fr=-1;function ue(){return!(s.unstable_now()-Fr<Kr)}function Sr(){if(Fn!==null){var O=s.unstable_now();Fr=O;var q=!0;try{q=Fn(!0,O)}finally{q?Yn():(Dn=!1,Fn=null)}}else Dn=!1}var Yn;if(typeof rn=="function")Yn=function(){rn(Sr)};else if(typeof MessageChannel<"u"){var fr=new MessageChannel,Er=fr.port2;fr.port1.onmessage=Sr,Yn=function(){Er.postMessage(null)}}else Yn=function(){N(Sr,0)};function Wn(O){Fn=O,Dn||(Dn=!0,Yn())}function wn(O,q){Tn=N(function(){O(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){V||C||(V=!0,Wn(Rn))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Kr=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return u(k)},s.unstable_next=function(O){switch(_){case 1:case 2:case 3:var q=3;break;default:q=_}var K=_;_=q;try{return O()}finally{_=K}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=_;_=O;try{return q()}finally{_=K}},s.unstable_scheduleCallback=function(O,q,K){var x=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?x+K:x):K=x,O){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=K+z,O={id:L++,callback:q,priorityLevel:O,startTime:K,expirationTime:z,sortIndex:-1},K>x?(O.sortIndex=K,i(y,O),u(k)===null&&O===u(y)&&(A?(b(Tn),Tn=-1):A=!0,wn(an,K-x))):(O.sortIndex=z,i(k,O),V||C||(V=!0,Wn(Rn))),O},s.unstable_shouldYield=ue,s.unstable_wrapCallback=function(O){var q=_;return function(){var K=_;_=q;try{return O.apply(this,arguments)}finally{_=K}}}})(ds)),ds}var Ic;function zd(){return Ic||(Ic=1,ps.exports=Pd()),ps.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Fd(){if(Ac)return Zn;Ac=1;var s=Ss(),i=zd();function u(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,e=1;e<arguments.length;e++)r+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function p(n,r){m(n,r),m(n+"Capture",r)}function m(n,r){for(c[n]=r,n=0;n<r.length;n++)a.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},R={};function _(n){return k.call(R,n)?!0:k.call(L,n)?!1:y.test(n)?R[n]=!0:(L[n]=!0,!1)}function C(n,r,e,t){if(e!==null&&e.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:e!==null?!e.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function V(n,r,e,t){if(r===null||typeof r>"u"||C(n,r,e,t))return!0;if(t)return!1;if(e!==null)switch(e.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,e,t,l,o,f){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=l,this.mustUseProperty=e,this.propertyName=n,this.type=r,this.sanitizeURL=o,this.removeEmptyString=f}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){N[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];N[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){N[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){N[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){N[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){N[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){N[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){N[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){N[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function rn(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(b,rn);N[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(b,rn);N[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(b,rn);N[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){N[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),N.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){N[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function en(n,r,e,t){var l=N.hasOwnProperty(r)?N[r]:null;(l!==null?l.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(V(r,e,l,t)&&(e=null),t||l===null?_(r)&&(e===null?n.removeAttribute(r):n.setAttribute(r,""+e)):l.mustUseProperty?n[l.propertyName]=e===null?l.type===3?!1:"":e:(r=l.attributeName,t=l.attributeNamespace,e===null?n.removeAttribute(r):(l=l.type,e=l===3||l===4&&e===!0?"":""+e,t?n.setAttributeNS(t,r,e):n.setAttribute(r,e))))}var an=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rn=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Tn=Symbol.for("react.strict_mode"),Kr=Symbol.for("react.profiler"),Fr=Symbol.for("react.provider"),ue=Symbol.for("react.context"),Sr=Symbol.for("react.forward_ref"),Yn=Symbol.for("react.suspense"),fr=Symbol.for("react.suspense_list"),Er=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),wn=Symbol.for("react.offscreen"),O=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,x;function z(n){if(x===void 0)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);x=r&&r[1]||""}return`
`+x+n}var Q=!1;function Z(n,r){if(!n||Q)return"";Q=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(E){var t=E}Reflect.construct(n,[],r)}else{try{r.call()}catch(E){t=E}n.call(r.prototype)}else{try{throw Error()}catch(E){t=E}n()}}catch(E){if(E&&t&&typeof E.stack=="string"){for(var l=E.stack.split(`
`),o=t.stack.split(`
`),f=l.length-1,d=o.length-1;1<=f&&0<=d&&l[f]!==o[d];)d--;for(;1<=f&&0<=d;f--,d--)if(l[f]!==o[d]){if(f!==1||d!==1)do if(f--,d--,0>d||l[f]!==o[d]){var g=`
`+l[f].replace(" at new "," at ");return n.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",n.displayName)),g}while(1<=f&&0<=d);break}}}finally{Q=!1,Error.prepareStackTrace=e}return(n=n?n.displayName||n.name:"")?z(n):""}function ln(n){switch(n.tag){case 5:return z(n.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function on(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Fn:return"Fragment";case Dn:return"Portal";case Kr:return"Profiler";case Tn:return"StrictMode";case Yn:return"Suspense";case fr:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ue:return(n.displayName||"Context")+".Consumer";case Fr:return(n._context.displayName||"Context")+".Provider";case Sr:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Er:return r=n.displayName||null,r!==null?r:on(n.type)||"Memo";case Wn:r=n._payload,n=n._init;try{return on(n(r))}catch{}}return null}function dn(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return on(r);case 8:return r===Tn?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function cn(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vn(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function bn(n){var r=vn(n)?"checked":"value",e=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),t=""+n[r];if(!n.hasOwnProperty(r)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,o=e.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return l.call(this)},set:function(f){t=""+f,o.call(this,f)}}),Object.defineProperty(n,r,{enumerable:e.enumerable}),{getValue:function(){return t},setValue:function(f){t=""+f},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Xt(n){n._valueTracker||(n._valueTracker=bn(n))}function As(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var e=r.getValue(),t="";return n&&(t=vn(n)?n.checked?"true":"false":n.value),n=t,n!==e?(r.setValue(n),!0):!1}function Jt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mi(n,r){var e=r.checked;return K({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:e??n._wrapperState.initialChecked})}function Ds(n,r){var e=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;e=cn(r.value!=null?r.value:e),n._wrapperState={initialChecked:t,initialValue:e,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Os(n,r){r=r.checked,r!=null&&en(n,"checked",r,!1)}function gi(n,r){Os(n,r);var e=cn(r.value),t=r.type;if(e!=null)t==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+e):n.value!==""+e&&(n.value=""+e);else if(t==="submit"||t==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?vi(n,r.type,e):r.hasOwnProperty("defaultValue")&&vi(n,r.type,cn(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ms(n,r,e){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,e||r===n.value||(n.value=r),n.defaultValue=r}e=n.name,e!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,e!==""&&(n.name=e)}function vi(n,r,e){(r!=="number"||Jt(n.ownerDocument)!==n)&&(e==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+e&&(n.defaultValue=""+e))}var be=Array.isArray;function Pe(n,r,e,t){if(n=n.options,r){r={};for(var l=0;l<e.length;l++)r["$"+e[l]]=!0;for(e=0;e<n.length;e++)l=r.hasOwnProperty("$"+n[e].value),n[e].selected!==l&&(n[e].selected=l),l&&t&&(n[e].defaultSelected=!0)}else{for(e=""+cn(e),r=null,l=0;l<n.length;l++){if(n[l].value===e){n[l].selected=!0,t&&(n[l].defaultSelected=!0);return}r!==null||n[l].disabled||(r=n[l])}r!==null&&(r.selected=!0)}}function yi(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(u(91));return K({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function js(n,r){var e=r.value;if(e==null){if(e=r.children,r=r.defaultValue,e!=null){if(r!=null)throw Error(u(92));if(be(e)){if(1<e.length)throw Error(u(93));e=e[0]}r=e}r==null&&(r=""),e=r}n._wrapperState={initialValue:cn(e)}}function Ks(n,r){var e=cn(r.value),t=cn(r.defaultValue);e!=null&&(e=""+e,e!==n.value&&(n.value=e),r.defaultValue==null&&n.defaultValue!==e&&(n.defaultValue=e)),t!=null&&(n.defaultValue=""+t)}function Bs(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function $s(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?$s(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Qt,Vs=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,e,t,l){MSApp.execUnsafeLocalFunction(function(){return n(r,e,t,l)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Qt=Qt||document.createElement("div"),Qt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Qt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function nt(n,r){if(r){var e=n.firstChild;if(e&&e===n.lastChild&&e.nodeType===3){e.nodeValue=r;return}}n.textContent=r}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rf=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){Rf.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),rt[r]=rt[n]})});function Us(n,r,e){return r==null||typeof r=="boolean"||r===""?"":e||typeof r!="number"||r===0||rt.hasOwnProperty(n)&&rt[n]?(""+r).trim():r+"px"}function Hs(n,r){n=n.style;for(var e in r)if(r.hasOwnProperty(e)){var t=e.indexOf("--")===0,l=Us(e,r[e],t);e==="float"&&(e="cssFloat"),t?n.setProperty(e,l):n[e]=l}}var _f=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xi(n,r){if(r){if(_f[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(u(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(u(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(u(61))}if(r.style!=null&&typeof r.style!="object")throw Error(u(62))}}function wi(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function Ei(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Li=null,ze=null,Fe=null;function Ws(n){if(n=Et(n)){if(typeof Li!="function")throw Error(u(280));var r=n.stateNode;r&&(r=yl(r),Li(n.stateNode,n.type,r))}}function qs(n){ze?Fe?Fe.push(n):Fe=[n]:ze=n}function Xs(){if(ze){var n=ze,r=Fe;if(Fe=ze=null,Ws(n),r)for(n=0;n<r.length;n++)Ws(r[n])}}function Js(n,r){return n(r)}function Qs(){}var Ri=!1;function Gs(n,r,e){if(Ri)return n(r,e);Ri=!0;try{return Js(n,r,e)}finally{Ri=!1,(ze!==null||Fe!==null)&&(Qs(),Xs())}}function et(n,r){var e=n.stateNode;if(e===null)return null;var t=yl(e);if(t===null)return null;e=t[r];n:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(e&&typeof e!="function")throw Error(u(231,r,typeof e));return e}var _i=!1;if(h)try{var tt={};Object.defineProperty(tt,"passive",{get:function(){_i=!0}}),window.addEventListener("test",tt,tt),window.removeEventListener("test",tt,tt)}catch{_i=!1}function Cf(n,r,e,t,l,o,f,d,g){var E=Array.prototype.slice.call(arguments,3);try{r.apply(e,E)}catch(F){this.onError(F)}}var lt=!1,Gt=null,Zt=!1,Ci=null,Pf={onError:function(n){lt=!0,Gt=n}};function zf(n,r,e,t,l,o,f,d,g){lt=!1,Gt=null,Cf.apply(Pf,arguments)}function Ff(n,r,e,t,l,o,f,d,g){if(zf.apply(this,arguments),lt){if(lt){var E=Gt;lt=!1,Gt=null}else throw Error(u(198));Zt||(Zt=!0,Ci=E)}}function ae(n){var r=n,e=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(e=r.return),n=r.return;while(n)}return r.tag===3?e:null}function Zs(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ys(n){if(ae(n)!==n)throw Error(u(188))}function Tf(n){var r=n.alternate;if(!r){if(r=ae(n),r===null)throw Error(u(188));return r!==n?null:n}for(var e=n,t=r;;){var l=e.return;if(l===null)break;var o=l.alternate;if(o===null){if(t=l.return,t!==null){e=t;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===e)return Ys(l),n;if(o===t)return Ys(l),r;o=o.sibling}throw Error(u(188))}if(e.return!==t.return)e=l,t=o;else{for(var f=!1,d=l.child;d;){if(d===e){f=!0,e=l,t=o;break}if(d===t){f=!0,t=l,e=o;break}d=d.sibling}if(!f){for(d=o.child;d;){if(d===e){f=!0,e=o,t=l;break}if(d===t){f=!0,t=o,e=l;break}d=d.sibling}if(!f)throw Error(u(189))}}if(e.alternate!==t)throw Error(u(190))}if(e.tag!==3)throw Error(u(188));return e.stateNode.current===e?n:r}function bs(n){return n=Tf(n),n!==null?nu(n):null}function nu(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=nu(n);if(r!==null)return r;n=n.sibling}return null}var ru=i.unstable_scheduleCallback,eu=i.unstable_cancelCallback,Nf=i.unstable_shouldYield,If=i.unstable_requestPaint,En=i.unstable_now,Af=i.unstable_getCurrentPriorityLevel,Pi=i.unstable_ImmediatePriority,tu=i.unstable_UserBlockingPriority,Yt=i.unstable_NormalPriority,Df=i.unstable_LowPriority,lu=i.unstable_IdlePriority,bt=null,Lr=null;function Of(n){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:Kf,Mf=Math.log,jf=Math.LN2;function Kf(n){return n>>>=0,n===0?32:31-(Mf(n)/jf|0)|0}var nl=64,rl=4194304;function it(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function el(n,r){var e=n.pendingLanes;if(e===0)return 0;var t=0,l=n.suspendedLanes,o=n.pingedLanes,f=e&268435455;if(f!==0){var d=f&~l;d!==0?t=it(d):(o&=f,o!==0&&(t=it(o)))}else f=e&~l,f!==0?t=it(f):o!==0&&(t=it(o));if(t===0)return 0;if(r!==0&&r!==t&&(r&l)===0&&(l=t&-t,o=r&-r,l>=o||l===16&&(o&4194240)!==0))return r;if((t&4)!==0&&(t|=e&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=t;0<r;)e=31-pr(r),l=1<<e,t|=n[e],r&=~l;return t}function Bf(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(n,r){for(var e=n.suspendedLanes,t=n.pingedLanes,l=n.expirationTimes,o=n.pendingLanes;0<o;){var f=31-pr(o),d=1<<f,g=l[f];g===-1?((d&e)===0||(d&t)!==0)&&(l[f]=Bf(d,r)):g<=r&&(n.expiredLanes|=d),o&=~d}}function zi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function iu(){var n=nl;return nl<<=1,(nl&4194240)===0&&(nl=64),n}function Fi(n){for(var r=[],e=0;31>e;e++)r.push(n);return r}function ot(n,r,e){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-pr(r),n[r]=e}function Vf(n,r){var e=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var t=n.eventTimes;for(n=n.expirationTimes;0<e;){var l=31-pr(e),o=1<<l;r[l]=0,t[l]=-1,n[l]=-1,e&=~o}}function Ti(n,r){var e=n.entangledLanes|=r;for(n=n.entanglements;e;){var t=31-pr(e),l=1<<t;l&r|n[t]&r&&(n[t]|=r),e&=~l}}var fn=0;function ou(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var su,Ni,uu,au,cu,Ii=!1,tl=[],Br=null,$r=null,Vr=null,st=new Map,ut=new Map,Ur=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(n,r){switch(n){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":st.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ut.delete(r.pointerId)}}function at(n,r,e,t,l,o){return n===null||n.nativeEvent!==o?(n={blockedOn:r,domEventName:e,eventSystemFlags:t,nativeEvent:o,targetContainers:[l]},r!==null&&(r=Et(r),r!==null&&Ni(r)),n):(n.eventSystemFlags|=t,r=n.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),n)}function Hf(n,r,e,t,l){switch(r){case"focusin":return Br=at(Br,n,r,e,t,l),!0;case"dragenter":return $r=at($r,n,r,e,t,l),!0;case"mouseover":return Vr=at(Vr,n,r,e,t,l),!0;case"pointerover":var o=l.pointerId;return st.set(o,at(st.get(o)||null,n,r,e,t,l)),!0;case"gotpointercapture":return o=l.pointerId,ut.set(o,at(ut.get(o)||null,n,r,e,t,l)),!0}return!1}function pu(n){var r=ce(n.target);if(r!==null){var e=ae(r);if(e!==null){if(r=e.tag,r===13){if(r=Zs(e),r!==null){n.blockedOn=r,cu(n.priority,function(){uu(e)});return}}else if(r===3&&e.stateNode.current.memoizedState.isDehydrated){n.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ll(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var e=Di(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(e===null){e=n.nativeEvent;var t=new e.constructor(e.type,e);Si=t,e.target.dispatchEvent(t),Si=null}else return r=Et(e),r!==null&&Ni(r),n.blockedOn=e,!1;r.shift()}return!0}function du(n,r,e){ll(n)&&e.delete(r)}function Wf(){Ii=!1,Br!==null&&ll(Br)&&(Br=null),$r!==null&&ll($r)&&($r=null),Vr!==null&&ll(Vr)&&(Vr=null),st.forEach(du),ut.forEach(du)}function ct(n,r){n.blockedOn===r&&(n.blockedOn=null,Ii||(Ii=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Wf)))}function ft(n){function r(l){return ct(l,n)}if(0<tl.length){ct(tl[0],n);for(var e=1;e<tl.length;e++){var t=tl[e];t.blockedOn===n&&(t.blockedOn=null)}}for(Br!==null&&ct(Br,n),$r!==null&&ct($r,n),Vr!==null&&ct(Vr,n),st.forEach(r),ut.forEach(r),e=0;e<Ur.length;e++)t=Ur[e],t.blockedOn===n&&(t.blockedOn=null);for(;0<Ur.length&&(e=Ur[0],e.blockedOn===null);)pu(e),e.blockedOn===null&&Ur.shift()}var Te=an.ReactCurrentBatchConfig,il=!0;function qf(n,r,e,t){var l=fn,o=Te.transition;Te.transition=null;try{fn=1,Ai(n,r,e,t)}finally{fn=l,Te.transition=o}}function Xf(n,r,e,t){var l=fn,o=Te.transition;Te.transition=null;try{fn=4,Ai(n,r,e,t)}finally{fn=l,Te.transition=o}}function Ai(n,r,e,t){if(il){var l=Di(n,r,e,t);if(l===null)Yi(n,r,t,ol,e),fu(n,t);else if(Hf(l,n,r,e,t))t.stopPropagation();else if(fu(n,t),r&4&&-1<Uf.indexOf(n)){for(;l!==null;){var o=Et(l);if(o!==null&&su(o),o=Di(n,r,e,t),o===null&&Yi(n,r,t,ol,e),o===l)break;l=o}l!==null&&t.stopPropagation()}else Yi(n,r,t,null,e)}}var ol=null;function Di(n,r,e,t){if(ol=null,n=Ei(t),n=ce(n),n!==null)if(r=ae(n),r===null)n=null;else if(e=r.tag,e===13){if(n=Zs(r),n!==null)return n;n=null}else if(e===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ol=n,null}function hu(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Af()){case Pi:return 1;case tu:return 4;case Yt:case Df:return 16;case lu:return 536870912;default:return 16}default:return 16}}var Hr=null,Oi=null,sl=null;function mu(){if(sl)return sl;var n,r=Oi,e=r.length,t,l="value"in Hr?Hr.value:Hr.textContent,o=l.length;for(n=0;n<e&&r[n]===l[n];n++);var f=e-n;for(t=1;t<=f&&r[e-t]===l[o-t];t++);return sl=l.slice(n,1<t?1-t:void 0)}function ul(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function gu(){return!1}function nr(n){function r(e,t,l,o,f){this._reactName=e,this._targetInst=l,this.type=t,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var d in n)n.hasOwnProperty(d)&&(e=n[d],this[d]=e?e(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?al:gu,this.isPropagationStopped=gu,this}return K(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),r}var Ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mi=nr(Ne),pt=K({},Ne,{view:0,detail:0}),Jf=nr(pt),ji,Ki,dt,cl=K({},pt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$i,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==dt&&(dt&&n.type==="mousemove"?(ji=n.screenX-dt.screenX,Ki=n.screenY-dt.screenY):Ki=ji=0,dt=n),ji)},movementY:function(n){return"movementY"in n?n.movementY:Ki}}),vu=nr(cl),Qf=K({},cl,{dataTransfer:0}),Gf=nr(Qf),Zf=K({},pt,{relatedTarget:0}),Bi=nr(Zf),Yf=K({},Ne,{animationName:0,elapsedTime:0,pseudoElement:0}),bf=nr(Yf),np=K({},Ne,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rp=nr(np),ep=K({},Ne,{data:0}),yu=nr(ep),tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ip[n])?!!r[n]:!1}function $i(){return op}var sp=K({},pt,{key:function(n){if(n.key){var r=tp[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$i,charCode:function(n){return n.type==="keypress"?ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),up=nr(sp),ap=K({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=nr(ap),cp=K({},pt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$i}),fp=nr(cp),pp=K({},Ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),dp=nr(pp),hp=K({},cl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mp=nr(hp),gp=[9,13,27,32],Vi=h&&"CompositionEvent"in window,ht=null;h&&"documentMode"in document&&(ht=document.documentMode);var vp=h&&"TextEvent"in window&&!ht,xu=h&&(!Vi||ht&&8<ht&&11>=ht),wu=" ",Su=!1;function Eu(n,r){switch(n){case"keyup":return gp.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ie=!1;function yp(n,r){switch(n){case"compositionend":return Lu(r);case"keypress":return r.which!==32?null:(Su=!0,wu);case"textInput":return n=r.data,n===wu&&Su?null:n;default:return null}}function kp(n,r){if(Ie)return n==="compositionend"||!Vi&&Eu(n,r)?(n=mu(),sl=Oi=Hr=null,Ie=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xu&&r.locale!=="ko"?null:r.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!xp[n.type]:r==="textarea"}function _u(n,r,e,t){qs(t),r=ml(r,"onChange"),0<r.length&&(e=new Mi("onChange","change",null,e,t),n.push({event:e,listeners:r}))}var mt=null,gt=null;function wp(n){Hu(n,0)}function fl(n){var r=je(n);if(As(r))return n}function Sp(n,r){if(n==="change")return r}var Cu=!1;if(h){var Ui;if(h){var Hi="oninput"in document;if(!Hi){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Hi=typeof Pu.oninput=="function"}Ui=Hi}else Ui=!1;Cu=Ui&&(!document.documentMode||9<document.documentMode)}function zu(){mt&&(mt.detachEvent("onpropertychange",Fu),gt=mt=null)}function Fu(n){if(n.propertyName==="value"&&fl(gt)){var r=[];_u(r,gt,n,Ei(n)),Gs(wp,r)}}function Ep(n,r,e){n==="focusin"?(zu(),mt=r,gt=e,mt.attachEvent("onpropertychange",Fu)):n==="focusout"&&zu()}function Lp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fl(gt)}function Rp(n,r){if(n==="click")return fl(r)}function _p(n,r){if(n==="input"||n==="change")return fl(r)}function Cp(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var dr=typeof Object.is=="function"?Object.is:Cp;function vt(n,r){if(dr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var e=Object.keys(n),t=Object.keys(r);if(e.length!==t.length)return!1;for(t=0;t<e.length;t++){var l=e[t];if(!k.call(r,l)||!dr(n[l],r[l]))return!1}return!0}function Tu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nu(n,r){var e=Tu(n);n=0;for(var t;e;){if(e.nodeType===3){if(t=n+e.textContent.length,n<=r&&t>=r)return{node:e,offset:r-n};n=t}n:{for(;e;){if(e.nextSibling){e=e.nextSibling;break n}e=e.parentNode}e=void 0}e=Tu(e)}}function Iu(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Iu(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Au(){for(var n=window,r=Jt();r instanceof n.HTMLIFrameElement;){try{var e=typeof r.contentWindow.location.href=="string"}catch{e=!1}if(e)n=r.contentWindow;else break;r=Jt(n.document)}return r}function Wi(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Pp(n){var r=Au(),e=n.focusedElem,t=n.selectionRange;if(r!==e&&e&&e.ownerDocument&&Iu(e.ownerDocument.documentElement,e)){if(t!==null&&Wi(e)){if(r=t.start,n=t.end,n===void 0&&(n=r),"selectionStart"in e)e.selectionStart=r,e.selectionEnd=Math.min(n,e.value.length);else if(n=(r=e.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var l=e.textContent.length,o=Math.min(t.start,l);t=t.end===void 0?o:Math.min(t.end,l),!n.extend&&o>t&&(l=t,t=o,o=l),l=Nu(e,o);var f=Nu(e,t);l&&f&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==f.node||n.focusOffset!==f.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),n.removeAllRanges(),o>t?(n.addRange(r),n.extend(f.node,f.offset)):(r.setEnd(f.node,f.offset),n.addRange(r)))}}for(r=[],n=e;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<r.length;e++)n=r[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zp=h&&"documentMode"in document&&11>=document.documentMode,Ae=null,qi=null,yt=null,Xi=!1;function Du(n,r,e){var t=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Xi||Ae==null||Ae!==Jt(t)||(t=Ae,"selectionStart"in t&&Wi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),yt&&vt(yt,t)||(yt=t,t=ml(qi,"onSelect"),0<t.length&&(r=new Mi("onSelect","select",null,r,e),n.push({event:r,listeners:t}),r.target=Ae)))}function pl(n,r){var e={};return e[n.toLowerCase()]=r.toLowerCase(),e["Webkit"+n]="webkit"+r,e["Moz"+n]="moz"+r,e}var De={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Ji={},Ou={};h&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete De.animationend.animation,delete De.animationiteration.animation,delete De.animationstart.animation),"TransitionEvent"in window||delete De.transitionend.transition);function dl(n){if(Ji[n])return Ji[n];if(!De[n])return n;var r=De[n],e;for(e in r)if(r.hasOwnProperty(e)&&e in Ou)return Ji[n]=r[e];return n}var Mu=dl("animationend"),ju=dl("animationiteration"),Ku=dl("animationstart"),Bu=dl("transitionend"),$u=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,r){$u.set(n,r),p(r,[n])}for(var Qi=0;Qi<Vu.length;Qi++){var Gi=Vu[Qi],Fp=Gi.toLowerCase(),Tp=Gi[0].toUpperCase()+Gi.slice(1);Wr(Fp,"on"+Tp)}Wr(Mu,"onAnimationEnd"),Wr(ju,"onAnimationIteration"),Wr(Ku,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(Bu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Np=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function Uu(n,r,e){var t=n.type||"unknown-event";n.currentTarget=e,Ff(t,r,void 0,n),n.currentTarget=null}function Hu(n,r){r=(r&4)!==0;for(var e=0;e<n.length;e++){var t=n[e],l=t.event;t=t.listeners;n:{var o=void 0;if(r)for(var f=t.length-1;0<=f;f--){var d=t[f],g=d.instance,E=d.currentTarget;if(d=d.listener,g!==o&&l.isPropagationStopped())break n;Uu(l,d,E),o=g}else for(f=0;f<t.length;f++){if(d=t[f],g=d.instance,E=d.currentTarget,d=d.listener,g!==o&&l.isPropagationStopped())break n;Uu(l,d,E),o=g}}}if(Zt)throw n=Ci,Zt=!1,Ci=null,n}function mn(n,r){var e=r[lo];e===void 0&&(e=r[lo]=new Set);var t=n+"__bubble";e.has(t)||(Wu(r,n,2,!1),e.add(t))}function Zi(n,r,e){var t=0;r&&(t|=4),Wu(e,n,t,r)}var hl="_reactListening"+Math.random().toString(36).slice(2);function xt(n){if(!n[hl]){n[hl]=!0,a.forEach(function(e){e!=="selectionchange"&&(Np.has(e)||Zi(e,!1,n),Zi(e,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[hl]||(r[hl]=!0,Zi("selectionchange",!1,r))}}function Wu(n,r,e,t){switch(hu(r)){case 1:var l=qf;break;case 4:l=Xf;break;default:l=Ai}e=l.bind(null,r,e,n),l=void 0,!_i||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),t?l!==void 0?n.addEventListener(r,e,{capture:!0,passive:l}):n.addEventListener(r,e,!0):l!==void 0?n.addEventListener(r,e,{passive:l}):n.addEventListener(r,e,!1)}function Yi(n,r,e,t,l){var o=t;if((r&1)===0&&(r&2)===0&&t!==null)n:for(;;){if(t===null)return;var f=t.tag;if(f===3||f===4){var d=t.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(f===4)for(f=t.return;f!==null;){var g=f.tag;if((g===3||g===4)&&(g=f.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;f=f.return}for(;d!==null;){if(f=ce(d),f===null)return;if(g=f.tag,g===5||g===6){t=o=f;continue n}d=d.parentNode}}t=t.return}Gs(function(){var E=o,F=Ei(e),T=[];n:{var P=$u.get(n);if(P!==void 0){var M=Mi,B=n;switch(n){case"keypress":if(ul(e)===0)break n;case"keydown":case"keyup":M=up;break;case"focusin":B="focus",M=Bi;break;case"focusout":B="blur",M=Bi;break;case"beforeblur":case"afterblur":M=Bi;break;case"click":if(e.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=fp;break;case Mu:case ju:case Ku:M=bf;break;case Bu:M=dp;break;case"scroll":M=Jf;break;case"wheel":M=mp;break;case"copy":case"cut":case"paste":M=rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=ku}var $=(r&4)!==0,Ln=!$&&n==="scroll",w=$?P!==null?P+"Capture":null:P;$=[];for(var v=E,S;v!==null;){S=v;var I=S.stateNode;if(S.tag===5&&I!==null&&(S=I,w!==null&&(I=et(v,w),I!=null&&$.push(wt(v,I,S)))),Ln)break;v=v.return}0<$.length&&(P=new M(P,B,null,e,F),T.push({event:P,listeners:$}))}}if((r&7)===0){n:{if(P=n==="mouseover"||n==="pointerover",M=n==="mouseout"||n==="pointerout",P&&e!==Si&&(B=e.relatedTarget||e.fromElement)&&(ce(B)||B[Tr]))break n;if((M||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,M?(B=e.relatedTarget||e.toElement,M=E,B=B?ce(B):null,B!==null&&(Ln=ae(B),B!==Ln||B.tag!==5&&B.tag!==6)&&(B=null)):(M=null,B=E),M!==B)){if($=vu,I="onMouseLeave",w="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&($=ku,I="onPointerLeave",w="onPointerEnter",v="pointer"),Ln=M==null?P:je(M),S=B==null?P:je(B),P=new $(I,v+"leave",M,e,F),P.target=Ln,P.relatedTarget=S,I=null,ce(F)===E&&($=new $(w,v+"enter",B,e,F),$.target=S,$.relatedTarget=Ln,I=$),Ln=I,M&&B)r:{for($=M,w=B,v=0,S=$;S;S=Oe(S))v++;for(S=0,I=w;I;I=Oe(I))S++;for(;0<v-S;)$=Oe($),v--;for(;0<S-v;)w=Oe(w),S--;for(;v--;){if($===w||w!==null&&$===w.alternate)break r;$=Oe($),w=Oe(w)}$=null}else $=null;M!==null&&qu(T,P,M,$,!1),B!==null&&Ln!==null&&qu(T,Ln,B,$,!0)}}n:{if(P=E?je(E):window,M=P.nodeName&&P.nodeName.toLowerCase(),M==="select"||M==="input"&&P.type==="file")var U=Sp;else if(Ru(P))if(Cu)U=_p;else{U=Lp;var H=Ep}else(M=P.nodeName)&&M.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(U=Rp);if(U&&(U=U(n,E))){_u(T,U,e,F);break n}H&&H(n,P,E),n==="focusout"&&(H=P._wrapperState)&&H.controlled&&P.type==="number"&&vi(P,"number",P.value)}switch(H=E?je(E):window,n){case"focusin":(Ru(H)||H.contentEditable==="true")&&(Ae=H,qi=E,yt=null);break;case"focusout":yt=qi=Ae=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,Du(T,e,F);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":Du(T,e,F)}var W;if(Vi)n:{switch(n){case"compositionstart":var J="onCompositionStart";break n;case"compositionend":J="onCompositionEnd";break n;case"compositionupdate":J="onCompositionUpdate";break n}J=void 0}else Ie?Eu(n,e)&&(J="onCompositionEnd"):n==="keydown"&&e.keyCode===229&&(J="onCompositionStart");J&&(xu&&e.locale!=="ko"&&(Ie||J!=="onCompositionStart"?J==="onCompositionEnd"&&Ie&&(W=mu()):(Hr=F,Oi="value"in Hr?Hr.value:Hr.textContent,Ie=!0)),H=ml(E,J),0<H.length&&(J=new yu(J,n,null,e,F),T.push({event:J,listeners:H}),W?J.data=W:(W=Lu(e),W!==null&&(J.data=W)))),(W=vp?yp(n,e):kp(n,e))&&(E=ml(E,"onBeforeInput"),0<E.length&&(F=new yu("onBeforeInput","beforeinput",null,e,F),T.push({event:F,listeners:E}),F.data=W))}Hu(T,r)})}function wt(n,r,e){return{instance:n,listener:r,currentTarget:e}}function ml(n,r){for(var e=r+"Capture",t=[];n!==null;){var l=n,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=et(n,e),o!=null&&t.unshift(wt(n,o,l)),o=et(n,r),o!=null&&t.push(wt(n,o,l))),n=n.return}return t}function Oe(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qu(n,r,e,t,l){for(var o=r._reactName,f=[];e!==null&&e!==t;){var d=e,g=d.alternate,E=d.stateNode;if(g!==null&&g===t)break;d.tag===5&&E!==null&&(d=E,l?(g=et(e,o),g!=null&&f.unshift(wt(e,g,d))):l||(g=et(e,o),g!=null&&f.push(wt(e,g,d)))),e=e.return}f.length!==0&&n.push({event:r,listeners:f})}var Ip=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function Xu(n){return(typeof n=="string"?n:""+n).replace(Ip,`
`).replace(Ap,"")}function gl(n,r,e){if(r=Xu(r),Xu(n)!==r&&e)throw Error(u(425))}function vl(){}var bi=null,no=null;function ro(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var eo=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,Op=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(n){return Ju.resolve(null).then(n).catch(Mp)}:eo;function Mp(n){setTimeout(function(){throw n})}function to(n,r){var e=r,t=0;do{var l=e.nextSibling;if(n.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0){n.removeChild(l),ft(r);return}t--}else e!=="$"&&e!=="$?"&&e!=="$!"||t++;e=l}while(e);ft(r)}function qr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Qu(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="$"||e==="$!"||e==="$?"){if(r===0)return n;r--}else e==="/$"&&r++}n=n.previousSibling}return null}var Me=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Me,St="__reactProps$"+Me,Tr="__reactContainer$"+Me,lo="__reactEvents$"+Me,jp="__reactListeners$"+Me,Kp="__reactHandles$"+Me;function ce(n){var r=n[Rr];if(r)return r;for(var e=n.parentNode;e;){if(r=e[Tr]||e[Rr]){if(e=r.alternate,r.child!==null||e!==null&&e.child!==null)for(n=Qu(n);n!==null;){if(e=n[Rr])return e;n=Qu(n)}return r}n=e,e=n.parentNode}return null}function Et(n){return n=n[Rr]||n[Tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function je(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(u(33))}function yl(n){return n[St]||null}var io=[],Ke=-1;function Xr(n){return{current:n}}function gn(n){0>Ke||(n.current=io[Ke],io[Ke]=null,Ke--)}function hn(n,r){Ke++,io[Ke]=n.current,n.current=r}var Jr={},jn=Xr(Jr),qn=Xr(!1),fe=Jr;function Be(n,r){var e=n.type.contextTypes;if(!e)return Jr;var t=n.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in e)l[o]=r[o];return t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=l),l}function Xn(n){return n=n.childContextTypes,n!=null}function kl(){gn(qn),gn(jn)}function Gu(n,r,e){if(jn.current!==Jr)throw Error(u(168));hn(jn,r),hn(qn,e)}function Zu(n,r,e){var t=n.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return e;t=t.getChildContext();for(var l in t)if(!(l in r))throw Error(u(108,dn(n)||"Unknown",l));return K({},e,t)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,fe=jn.current,hn(jn,n),hn(qn,qn.current),!0}function Yu(n,r,e){var t=n.stateNode;if(!t)throw Error(u(169));e?(n=Zu(n,r,fe),t.__reactInternalMemoizedMergedChildContext=n,gn(qn),gn(jn),hn(jn,n)):gn(qn),hn(qn,e)}var Nr=null,wl=!1,oo=!1;function bu(n){Nr===null?Nr=[n]:Nr.push(n)}function Bp(n){wl=!0,bu(n)}function Qr(){if(!oo&&Nr!==null){oo=!0;var n=0,r=fn;try{var e=Nr;for(fn=1;n<e.length;n++){var t=e[n];do t=t(!0);while(t!==null)}Nr=null,wl=!1}catch(l){throw Nr!==null&&(Nr=Nr.slice(n+1)),ru(Pi,Qr),l}finally{fn=r,oo=!1}}return null}var $e=[],Ve=0,Sl=null,El=0,lr=[],ir=0,pe=null,Ir=1,Ar="";function de(n,r){$e[Ve++]=El,$e[Ve++]=Sl,Sl=n,El=r}function na(n,r,e){lr[ir++]=Ir,lr[ir++]=Ar,lr[ir++]=pe,pe=n;var t=Ir;n=Ar;var l=32-pr(t)-1;t&=~(1<<l),e+=1;var o=32-pr(r)+l;if(30<o){var f=l-l%5;o=(t&(1<<f)-1).toString(32),t>>=f,l-=f,Ir=1<<32-pr(r)+l|e<<l|t,Ar=o+n}else Ir=1<<o|e<<l|t,Ar=n}function so(n){n.return!==null&&(de(n,1),na(n,1,0))}function uo(n){for(;n===Sl;)Sl=$e[--Ve],$e[Ve]=null,El=$e[--Ve],$e[Ve]=null;for(;n===pe;)pe=lr[--ir],lr[ir]=null,Ar=lr[--ir],lr[ir]=null,Ir=lr[--ir],lr[ir]=null}var rr=null,er=null,yn=!1,hr=null;function ra(n,r){var e=ar(5,null,null,0);e.elementType="DELETED",e.stateNode=r,e.return=n,r=n.deletions,r===null?(n.deletions=[e],n.flags|=16):r.push(e)}function ea(n,r){switch(n.tag){case 5:var e=n.type;return r=r.nodeType!==1||e.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rr=n,er=qr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rr=n,er=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(e=pe!==null?{id:Ir,overflow:Ar}:null,n.memoizedState={dehydrated:r,treeContext:e,retryLane:1073741824},e=ar(18,null,null,0),e.stateNode=r,e.return=n,n.child=e,rr=n,er=null,!0):!1;default:return!1}}function ao(n){return(n.mode&1)!==0&&(n.flags&128)===0}function co(n){if(yn){var r=er;if(r){var e=r;if(!ea(n,r)){if(ao(n))throw Error(u(418));r=qr(e.nextSibling);var t=rr;r&&ea(n,r)?ra(t,e):(n.flags=n.flags&-4097|2,yn=!1,rr=n)}}else{if(ao(n))throw Error(u(418));n.flags=n.flags&-4097|2,yn=!1,rr=n}}}function ta(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rr=n}function Ll(n){if(n!==rr)return!1;if(!yn)return ta(n),yn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!ro(n.type,n.memoizedProps)),r&&(r=er)){if(ao(n))throw la(),Error(u(418));for(;r;)ra(n,r),r=qr(r.nextSibling)}if(ta(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var e=n.data;if(e==="/$"){if(r===0){er=qr(n.nextSibling);break n}r--}else e!=="$"&&e!=="$!"&&e!=="$?"||r++}n=n.nextSibling}er=null}}else er=rr?qr(n.stateNode.nextSibling):null;return!0}function la(){for(var n=er;n;)n=qr(n.nextSibling)}function Ue(){er=rr=null,yn=!1}function fo(n){hr===null?hr=[n]:hr.push(n)}var $p=an.ReactCurrentBatchConfig;function Lt(n,r,e){if(n=e.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(e._owner){if(e=e._owner,e){if(e.tag!==1)throw Error(u(309));var t=e.stateNode}if(!t)throw Error(u(147,n));var l=t,o=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(f){var d=l.refs;f===null?delete d[o]:d[o]=f},r._stringRef=o,r)}if(typeof n!="string")throw Error(u(284));if(!e._owner)throw Error(u(290,n))}return n}function Rl(n,r){throw n=Object.prototype.toString.call(r),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function ia(n){var r=n._init;return r(n._payload)}function oa(n){function r(w,v){if(n){var S=w.deletions;S===null?(w.deletions=[v],w.flags|=16):S.push(v)}}function e(w,v){if(!n)return null;for(;v!==null;)r(w,v),v=v.sibling;return null}function t(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function l(w,v){return w=te(w,v),w.index=0,w.sibling=null,w}function o(w,v,S){return w.index=S,n?(S=w.alternate,S!==null?(S=S.index,S<v?(w.flags|=2,v):S):(w.flags|=2,v)):(w.flags|=1048576,v)}function f(w){return n&&w.alternate===null&&(w.flags|=2),w}function d(w,v,S,I){return v===null||v.tag!==6?(v=ts(S,w.mode,I),v.return=w,v):(v=l(v,S),v.return=w,v)}function g(w,v,S,I){var U=S.type;return U===Fn?F(w,v,S.props.children,I,S.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wn&&ia(U)===v.type)?(I=l(v,S.props),I.ref=Lt(w,v,S),I.return=w,I):(I=Ql(S.type,S.key,S.props,null,w.mode,I),I.ref=Lt(w,v,S),I.return=w,I)}function E(w,v,S,I){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=ls(S,w.mode,I),v.return=w,v):(v=l(v,S.children||[]),v.return=w,v)}function F(w,v,S,I,U){return v===null||v.tag!==7?(v=we(S,w.mode,I,U),v.return=w,v):(v=l(v,S),v.return=w,v)}function T(w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ts(""+v,w.mode,S),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Rn:return S=Ql(v.type,v.key,v.props,null,w.mode,S),S.ref=Lt(w,null,v),S.return=w,S;case Dn:return v=ls(v,w.mode,S),v.return=w,v;case Wn:var I=v._init;return T(w,I(v._payload),S)}if(be(v)||q(v))return v=we(v,w.mode,S,null),v.return=w,v;Rl(w,v)}return null}function P(w,v,S,I){var U=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:d(w,v,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Rn:return S.key===U?g(w,v,S,I):null;case Dn:return S.key===U?E(w,v,S,I):null;case Wn:return U=S._init,P(w,v,U(S._payload),I)}if(be(S)||q(S))return U!==null?null:F(w,v,S,I,null);Rl(w,S)}return null}function M(w,v,S,I,U){if(typeof I=="string"&&I!==""||typeof I=="number")return w=w.get(S)||null,d(v,w,""+I,U);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Rn:return w=w.get(I.key===null?S:I.key)||null,g(v,w,I,U);case Dn:return w=w.get(I.key===null?S:I.key)||null,E(v,w,I,U);case Wn:var H=I._init;return M(w,v,S,H(I._payload),U)}if(be(I)||q(I))return w=w.get(S)||null,F(v,w,I,U,null);Rl(v,I)}return null}function B(w,v,S,I){for(var U=null,H=null,W=v,J=v=0,An=null;W!==null&&J<S.length;J++){W.index>J?(An=W,W=null):An=W.sibling;var sn=P(w,W,S[J],I);if(sn===null){W===null&&(W=An);break}n&&W&&sn.alternate===null&&r(w,W),v=o(sn,v,J),H===null?U=sn:H.sibling=sn,H=sn,W=An}if(J===S.length)return e(w,W),yn&&de(w,J),U;if(W===null){for(;J<S.length;J++)W=T(w,S[J],I),W!==null&&(v=o(W,v,J),H===null?U=W:H.sibling=W,H=W);return yn&&de(w,J),U}for(W=t(w,W);J<S.length;J++)An=M(W,w,J,S[J],I),An!==null&&(n&&An.alternate!==null&&W.delete(An.key===null?J:An.key),v=o(An,v,J),H===null?U=An:H.sibling=An,H=An);return n&&W.forEach(function(le){return r(w,le)}),yn&&de(w,J),U}function $(w,v,S,I){var U=q(S);if(typeof U!="function")throw Error(u(150));if(S=U.call(S),S==null)throw Error(u(151));for(var H=U=null,W=v,J=v=0,An=null,sn=S.next();W!==null&&!sn.done;J++,sn=S.next()){W.index>J?(An=W,W=null):An=W.sibling;var le=P(w,W,sn.value,I);if(le===null){W===null&&(W=An);break}n&&W&&le.alternate===null&&r(w,W),v=o(le,v,J),H===null?U=le:H.sibling=le,H=le,W=An}if(sn.done)return e(w,W),yn&&de(w,J),U;if(W===null){for(;!sn.done;J++,sn=S.next())sn=T(w,sn.value,I),sn!==null&&(v=o(sn,v,J),H===null?U=sn:H.sibling=sn,H=sn);return yn&&de(w,J),U}for(W=t(w,W);!sn.done;J++,sn=S.next())sn=M(W,w,J,sn.value,I),sn!==null&&(n&&sn.alternate!==null&&W.delete(sn.key===null?J:sn.key),v=o(sn,v,J),H===null?U=sn:H.sibling=sn,H=sn);return n&&W.forEach(function(xd){return r(w,xd)}),yn&&de(w,J),U}function Ln(w,v,S,I){if(typeof S=="object"&&S!==null&&S.type===Fn&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Rn:n:{for(var U=S.key,H=v;H!==null;){if(H.key===U){if(U=S.type,U===Fn){if(H.tag===7){e(w,H.sibling),v=l(H,S.props.children),v.return=w,w=v;break n}}else if(H.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wn&&ia(U)===H.type){e(w,H.sibling),v=l(H,S.props),v.ref=Lt(w,H,S),v.return=w,w=v;break n}e(w,H);break}else r(w,H);H=H.sibling}S.type===Fn?(v=we(S.props.children,w.mode,I,S.key),v.return=w,w=v):(I=Ql(S.type,S.key,S.props,null,w.mode,I),I.ref=Lt(w,v,S),I.return=w,w=I)}return f(w);case Dn:n:{for(H=S.key;v!==null;){if(v.key===H)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){e(w,v.sibling),v=l(v,S.children||[]),v.return=w,w=v;break n}else{e(w,v);break}else r(w,v);v=v.sibling}v=ls(S,w.mode,I),v.return=w,w=v}return f(w);case Wn:return H=S._init,Ln(w,v,H(S._payload),I)}if(be(S))return B(w,v,S,I);if(q(S))return $(w,v,S,I);Rl(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(e(w,v.sibling),v=l(v,S),v.return=w,w=v):(e(w,v),v=ts(S,w.mode,I),v.return=w,w=v),f(w)):e(w,v)}return Ln}var He=oa(!0),sa=oa(!1),_l=Xr(null),Cl=null,We=null,po=null;function ho(){po=We=Cl=null}function mo(n){var r=_l.current;gn(_l),n._currentValue=r}function go(n,r,e){for(;n!==null;){var t=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),n===e)break;n=n.return}}function qe(n,r){Cl=n,po=We=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Jn=!0),n.firstContext=null)}function or(n){var r=n._currentValue;if(po!==n)if(n={context:n,memoizedValue:r,next:null},We===null){if(Cl===null)throw Error(u(308));We=n,Cl.dependencies={lanes:0,firstContext:n}}else We=We.next=n;return r}var he=null;function vo(n){he===null?he=[n]:he.push(n)}function ua(n,r,e,t){var l=r.interleaved;return l===null?(e.next=e,vo(r)):(e.next=l.next,l.next=e),r.interleaved=e,Dr(n,t)}function Dr(n,r){n.lanes|=r;var e=n.alternate;for(e!==null&&(e.lanes|=r),e=n,n=n.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),e=n,n=n.return;return e.tag===3?e.stateNode:null}var Gr=!1;function yo(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aa(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,e){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(tn&2)!==0){var l=t.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),t.pending=r,Dr(n,e)}return l=t.interleaved,l===null?(r.next=r,vo(t)):(r.next=l.next,l.next=r),t.interleaved=r,Dr(n,e)}function Pl(n,r,e){if(r=r.updateQueue,r!==null&&(r=r.shared,(e&4194240)!==0)){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,Ti(n,e)}}function ca(n,r){var e=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,e===t)){var l=null,o=null;if(e=e.firstBaseUpdate,e!==null){do{var f={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};o===null?l=o=f:o=o.next=f,e=e.next}while(e!==null);o===null?l=o=r:o=o.next=r}else l=o=r;e={baseState:t.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:t.shared,effects:t.effects},n.updateQueue=e;return}n=e.lastBaseUpdate,n===null?e.firstBaseUpdate=r:n.next=r,e.lastBaseUpdate=r}function zl(n,r,e,t){var l=n.updateQueue;Gr=!1;var o=l.firstBaseUpdate,f=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var g=d,E=g.next;g.next=null,f===null?o=E:f.next=E,f=g;var F=n.alternate;F!==null&&(F=F.updateQueue,d=F.lastBaseUpdate,d!==f&&(d===null?F.firstBaseUpdate=E:d.next=E,F.lastBaseUpdate=g))}if(o!==null){var T=l.baseState;f=0,F=E=g=null,d=o;do{var P=d.lane,M=d.eventTime;if((t&P)===P){F!==null&&(F=F.next={eventTime:M,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});n:{var B=n,$=d;switch(P=r,M=e,$.tag){case 1:if(B=$.payload,typeof B=="function"){T=B.call(M,T,P);break n}T=B;break n;case 3:B.flags=B.flags&-65537|128;case 0:if(B=$.payload,P=typeof B=="function"?B.call(M,T,P):B,P==null)break n;T=K({},T,P);break n;case 2:Gr=!0}}d.callback!==null&&d.lane!==0&&(n.flags|=64,P=l.effects,P===null?l.effects=[d]:P.push(d))}else M={eventTime:M,lane:P,tag:d.tag,payload:d.payload,callback:d.callback,next:null},F===null?(E=F=M,g=T):F=F.next=M,f|=P;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;P=d,d=P.next,P.next=null,l.lastBaseUpdate=P,l.shared.pending=null}}while(!0);if(F===null&&(g=T),l.baseState=g,l.firstBaseUpdate=E,l.lastBaseUpdate=F,r=l.shared.interleaved,r!==null){l=r;do f|=l.lane,l=l.next;while(l!==r)}else o===null&&(l.shared.lanes=0);ve|=f,n.lanes=f,n.memoizedState=T}}function fa(n,r,e){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var t=n[r],l=t.callback;if(l!==null){if(t.callback=null,t=e,typeof l!="function")throw Error(u(191,l));l.call(t)}}}var Rt={},_r=Xr(Rt),_t=Xr(Rt),Ct=Xr(Rt);function me(n){if(n===Rt)throw Error(u(174));return n}function ko(n,r){switch(hn(Ct,r),hn(_t,n),hn(_r,Rt),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ki(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ki(r,n)}gn(_r),hn(_r,r)}function Xe(){gn(_r),gn(_t),gn(Ct)}function pa(n){me(Ct.current);var r=me(_r.current),e=ki(r,n.type);r!==e&&(hn(_t,n),hn(_r,e))}function xo(n){_t.current===n&&(gn(_r),gn(_t))}var kn=Xr(0);function Fl(n){for(var r=n;r!==null;){if(r.tag===13){var e=r.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var wo=[];function So(){for(var n=0;n<wo.length;n++)wo[n]._workInProgressVersionPrimary=null;wo.length=0}var Tl=an.ReactCurrentDispatcher,Eo=an.ReactCurrentBatchConfig,ge=0,xn=null,Pn=null,Nn=null,Nl=!1,Pt=!1,zt=0,Vp=0;function Kn(){throw Error(u(321))}function Lo(n,r){if(r===null)return!1;for(var e=0;e<r.length&&e<n.length;e++)if(!dr(n[e],r[e]))return!1;return!0}function Ro(n,r,e,t,l,o){if(ge=o,xn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?qp:Xp,n=e(t,l),Pt){o=0;do{if(Pt=!1,zt=0,25<=o)throw Error(u(301));o+=1,Nn=Pn=null,r.updateQueue=null,Tl.current=Jp,n=e(t,l)}while(Pt)}if(Tl.current=Dl,r=Pn!==null&&Pn.next!==null,ge=0,Nn=Pn=xn=null,Nl=!1,r)throw Error(u(300));return n}function _o(){var n=zt!==0;return zt=0,n}function Cr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?xn.memoizedState=Nn=n:Nn=Nn.next=n,Nn}function sr(){if(Pn===null){var n=xn.alternate;n=n!==null?n.memoizedState:null}else n=Pn.next;var r=Nn===null?xn.memoizedState:Nn.next;if(r!==null)Nn=r,Pn=n;else{if(n===null)throw Error(u(310));Pn=n,n={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Nn===null?xn.memoizedState=Nn=n:Nn=Nn.next=n}return Nn}function Ft(n,r){return typeof r=="function"?r(n):r}function Co(n){var r=sr(),e=r.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=n;var t=Pn,l=t.baseQueue,o=e.pending;if(o!==null){if(l!==null){var f=l.next;l.next=o.next,o.next=f}t.baseQueue=l=o,e.pending=null}if(l!==null){o=l.next,t=t.baseState;var d=f=null,g=null,E=o;do{var F=E.lane;if((ge&F)===F)g!==null&&(g=g.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),t=E.hasEagerState?E.eagerState:n(t,E.action);else{var T={lane:F,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};g===null?(d=g=T,f=t):g=g.next=T,xn.lanes|=F,ve|=F}E=E.next}while(E!==null&&E!==o);g===null?f=t:g.next=d,dr(t,r.memoizedState)||(Jn=!0),r.memoizedState=t,r.baseState=f,r.baseQueue=g,e.lastRenderedState=t}if(n=e.interleaved,n!==null){l=n;do o=l.lane,xn.lanes|=o,ve|=o,l=l.next;while(l!==n)}else l===null&&(e.lanes=0);return[r.memoizedState,e.dispatch]}function Po(n){var r=sr(),e=r.queue;if(e===null)throw Error(u(311));e.lastRenderedReducer=n;var t=e.dispatch,l=e.pending,o=r.memoizedState;if(l!==null){e.pending=null;var f=l=l.next;do o=n(o,f.action),f=f.next;while(f!==l);dr(o,r.memoizedState)||(Jn=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),e.lastRenderedState=o}return[o,t]}function da(){}function ha(n,r){var e=xn,t=sr(),l=r(),o=!dr(t.memoizedState,l);if(o&&(t.memoizedState=l,Jn=!0),t=t.queue,zo(va.bind(null,e,t,n),[n]),t.getSnapshot!==r||o||Nn!==null&&Nn.memoizedState.tag&1){if(e.flags|=2048,Tt(9,ga.bind(null,e,t,l,r),void 0,null),In===null)throw Error(u(349));(ge&30)!==0||ma(e,r,l)}return l}function ma(n,r,e){n.flags|=16384,n={getSnapshot:r,value:e},r=xn.updateQueue,r===null?(r={lastEffect:null,stores:null},xn.updateQueue=r,r.stores=[n]):(e=r.stores,e===null?r.stores=[n]:e.push(n))}function ga(n,r,e,t){r.value=e,r.getSnapshot=t,ya(r)&&ka(n)}function va(n,r,e){return e(function(){ya(r)&&ka(n)})}function ya(n){var r=n.getSnapshot;n=n.value;try{var e=r();return!dr(n,e)}catch{return!0}}function ka(n){var r=Dr(n,1);r!==null&&yr(r,n,1,-1)}function xa(n){var r=Cr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:n},r.queue=n,n=n.dispatch=Wp.bind(null,xn,n),[r.memoizedState,n]}function Tt(n,r,e,t){return n={tag:n,create:r,destroy:e,deps:t,next:null},r=xn.updateQueue,r===null?(r={lastEffect:null,stores:null},xn.updateQueue=r,r.lastEffect=n.next=n):(e=r.lastEffect,e===null?r.lastEffect=n.next=n:(t=e.next,e.next=n,n.next=t,r.lastEffect=n)),n}function wa(){return sr().memoizedState}function Il(n,r,e,t){var l=Cr();xn.flags|=n,l.memoizedState=Tt(1|r,e,void 0,t===void 0?null:t)}function Al(n,r,e,t){var l=sr();t=t===void 0?null:t;var o=void 0;if(Pn!==null){var f=Pn.memoizedState;if(o=f.destroy,t!==null&&Lo(t,f.deps)){l.memoizedState=Tt(r,e,o,t);return}}xn.flags|=n,l.memoizedState=Tt(1|r,e,o,t)}function Sa(n,r){return Il(8390656,8,n,r)}function zo(n,r){return Al(2048,8,n,r)}function Ea(n,r){return Al(4,2,n,r)}function La(n,r){return Al(4,4,n,r)}function Ra(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function _a(n,r,e){return e=e!=null?e.concat([n]):null,Al(4,4,Ra.bind(null,r,n),e)}function Fo(){}function Ca(n,r){var e=sr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&Lo(r,t[1])?t[0]:(e.memoizedState=[n,r],n)}function Pa(n,r){var e=sr();r=r===void 0?null:r;var t=e.memoizedState;return t!==null&&r!==null&&Lo(r,t[1])?t[0]:(n=n(),e.memoizedState=[n,r],n)}function za(n,r,e){return(ge&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=e):(dr(e,r)||(e=iu(),xn.lanes|=e,ve|=e,n.baseState=!0),r)}function Up(n,r){var e=fn;fn=e!==0&&4>e?e:4,n(!0);var t=Eo.transition;Eo.transition={};try{n(!1),r()}finally{fn=e,Eo.transition=t}}function Fa(){return sr().memoizedState}function Hp(n,r,e){var t=re(n);if(e={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null},Ta(n))Na(r,e);else if(e=ua(n,r,e,t),e!==null){var l=Un();yr(e,n,t,l),Ia(e,r,t)}}function Wp(n,r,e){var t=re(n),l={lane:t,action:e,hasEagerState:!1,eagerState:null,next:null};if(Ta(n))Na(r,l);else{var o=n.alternate;if(n.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var f=r.lastRenderedState,d=o(f,e);if(l.hasEagerState=!0,l.eagerState=d,dr(d,f)){var g=r.interleaved;g===null?(l.next=l,vo(r)):(l.next=g.next,g.next=l),r.interleaved=l;return}}catch{}finally{}e=ua(n,r,l,t),e!==null&&(l=Un(),yr(e,n,t,l),Ia(e,r,t))}}function Ta(n){var r=n.alternate;return n===xn||r!==null&&r===xn}function Na(n,r){Pt=Nl=!0;var e=n.pending;e===null?r.next=r:(r.next=e.next,e.next=r),n.pending=r}function Ia(n,r,e){if((e&4194240)!==0){var t=r.lanes;t&=n.pendingLanes,e|=t,r.lanes=e,Ti(n,e)}}var Dl={readContext:or,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useInsertionEffect:Kn,useLayoutEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useMutableSource:Kn,useSyncExternalStore:Kn,useId:Kn,unstable_isNewReconciler:!1},qp={readContext:or,useCallback:function(n,r){return Cr().memoizedState=[n,r===void 0?null:r],n},useContext:or,useEffect:Sa,useImperativeHandle:function(n,r,e){return e=e!=null?e.concat([n]):null,Il(4194308,4,Ra.bind(null,r,n),e)},useLayoutEffect:function(n,r){return Il(4194308,4,n,r)},useInsertionEffect:function(n,r){return Il(4,2,n,r)},useMemo:function(n,r){var e=Cr();return r=r===void 0?null:r,n=n(),e.memoizedState=[n,r],n},useReducer:function(n,r,e){var t=Cr();return r=e!==void 0?e(r):r,t.memoizedState=t.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},t.queue=n,n=n.dispatch=Hp.bind(null,xn,n),[t.memoizedState,n]},useRef:function(n){var r=Cr();return n={current:n},r.memoizedState=n},useState:xa,useDebugValue:Fo,useDeferredValue:function(n){return Cr().memoizedState=n},useTransition:function(){var n=xa(!1),r=n[0];return n=Up.bind(null,n[1]),Cr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,e){var t=xn,l=Cr();if(yn){if(e===void 0)throw Error(u(407));e=e()}else{if(e=r(),In===null)throw Error(u(349));(ge&30)!==0||ma(t,r,e)}l.memoizedState=e;var o={value:e,getSnapshot:r};return l.queue=o,Sa(va.bind(null,t,o,n),[n]),t.flags|=2048,Tt(9,ga.bind(null,t,o,e,r),void 0,null),e},useId:function(){var n=Cr(),r=In.identifierPrefix;if(yn){var e=Ar,t=Ir;e=(t&~(1<<32-pr(t)-1)).toString(32)+e,r=":"+r+"R"+e,e=zt++,0<e&&(r+="H"+e.toString(32)),r+=":"}else e=Vp++,r=":"+r+"r"+e.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Xp={readContext:or,useCallback:Ca,useContext:or,useEffect:zo,useImperativeHandle:_a,useInsertionEffect:Ea,useLayoutEffect:La,useMemo:Pa,useReducer:Co,useRef:wa,useState:function(){return Co(Ft)},useDebugValue:Fo,useDeferredValue:function(n){var r=sr();return za(r,Pn.memoizedState,n)},useTransition:function(){var n=Co(Ft)[0],r=sr().memoizedState;return[n,r]},useMutableSource:da,useSyncExternalStore:ha,useId:Fa,unstable_isNewReconciler:!1},Jp={readContext:or,useCallback:Ca,useContext:or,useEffect:zo,useImperativeHandle:_a,useInsertionEffect:Ea,useLayoutEffect:La,useMemo:Pa,useReducer:Po,useRef:wa,useState:function(){return Po(Ft)},useDebugValue:Fo,useDeferredValue:function(n){var r=sr();return Pn===null?r.memoizedState=n:za(r,Pn.memoizedState,n)},useTransition:function(){var n=Po(Ft)[0],r=sr().memoizedState;return[n,r]},useMutableSource:da,useSyncExternalStore:ha,useId:Fa,unstable_isNewReconciler:!1};function mr(n,r){if(n&&n.defaultProps){r=K({},r),n=n.defaultProps;for(var e in n)r[e]===void 0&&(r[e]=n[e]);return r}return r}function To(n,r,e,t){r=n.memoizedState,e=e(t,r),e=e==null?r:K({},r,e),n.memoizedState=e,n.lanes===0&&(n.updateQueue.baseState=e)}var Ol={isMounted:function(n){return(n=n._reactInternals)?ae(n)===n:!1},enqueueSetState:function(n,r,e){n=n._reactInternals;var t=Un(),l=re(n),o=Or(t,l);o.payload=r,e!=null&&(o.callback=e),r=Zr(n,o,l),r!==null&&(yr(r,n,l,t),Pl(r,n,l))},enqueueReplaceState:function(n,r,e){n=n._reactInternals;var t=Un(),l=re(n),o=Or(t,l);o.tag=1,o.payload=r,e!=null&&(o.callback=e),r=Zr(n,o,l),r!==null&&(yr(r,n,l,t),Pl(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var e=Un(),t=re(n),l=Or(e,t);l.tag=2,r!=null&&(l.callback=r),r=Zr(n,l,t),r!==null&&(yr(r,n,t,e),Pl(r,n,t))}};function Aa(n,r,e,t,l,o,f){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,o,f):r.prototype&&r.prototype.isPureReactComponent?!vt(e,t)||!vt(l,o):!0}function Da(n,r,e){var t=!1,l=Jr,o=r.contextType;return typeof o=="object"&&o!==null?o=or(o):(l=Xn(r)?fe:jn.current,t=r.contextTypes,o=(t=t!=null)?Be(n,l):Jr),r=new r(e,o),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ol,n.stateNode=r,r._reactInternals=n,t&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=o),r}function Oa(n,r,e,t){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(e,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(e,t),r.state!==n&&Ol.enqueueReplaceState(r,r.state,null)}function No(n,r,e,t){var l=n.stateNode;l.props=e,l.state=n.memoizedState,l.refs={},yo(n);var o=r.contextType;typeof o=="object"&&o!==null?l.context=or(o):(o=Xn(r)?fe:jn.current,l.context=Be(n,o)),l.state=n.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(To(n,r,o,e),l.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Ol.enqueueReplaceState(l,l.state,null),zl(n,e,l,t),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function Je(n,r){try{var e="",t=r;do e+=ln(t),t=t.return;while(t);var l=e}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:n,source:r,stack:l,digest:null}}function Io(n,r,e){return{value:n,source:null,stack:e??null,digest:r??null}}function Ao(n,r){try{console.error(r.value)}catch(e){setTimeout(function(){throw e})}}var Qp=typeof WeakMap=="function"?WeakMap:Map;function Ma(n,r,e){e=Or(-1,e),e.tag=3,e.payload={element:null};var t=r.value;return e.callback=function(){Ul||(Ul=!0,Qo=t),Ao(n,r)},e}function ja(n,r,e){e=Or(-1,e),e.tag=3;var t=n.type.getDerivedStateFromError;if(typeof t=="function"){var l=r.value;e.payload=function(){return t(l)},e.callback=function(){Ao(n,r)}}var o=n.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ao(n,r),typeof t!="function"&&(br===null?br=new Set([this]):br.add(this));var f=r.stack;this.componentDidCatch(r.value,{componentStack:f!==null?f:""})}),e}function Ka(n,r,e){var t=n.pingCache;if(t===null){t=n.pingCache=new Qp;var l=new Set;t.set(r,l)}else l=t.get(r),l===void 0&&(l=new Set,t.set(r,l));l.has(e)||(l.add(e),n=ad.bind(null,n,r,e),r.then(n,n))}function Ba(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function $a(n,r,e,t,l){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,e.flags|=131072,e.flags&=-52805,e.tag===1&&(e.alternate===null?e.tag=17:(r=Or(-1,1),r.tag=2,Zr(e,r,1))),e.lanes|=1),n):(n.flags|=65536,n.lanes=l,n)}var Gp=an.ReactCurrentOwner,Jn=!1;function Vn(n,r,e,t){r.child=n===null?sa(r,null,e,t):He(r,n.child,e,t)}function Va(n,r,e,t,l){e=e.render;var o=r.ref;return qe(r,l),t=Ro(n,r,e,t,o,l),e=_o(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~l,Mr(n,r,l)):(yn&&e&&so(r),r.flags|=1,Vn(n,r,t,l),r.child)}function Ua(n,r,e,t,l){if(n===null){var o=e.type;return typeof o=="function"&&!es(o)&&o.defaultProps===void 0&&e.compare===null&&e.defaultProps===void 0?(r.tag=15,r.type=o,Ha(n,r,o,t,l)):(n=Ql(e.type,null,t,r,r.mode,l),n.ref=r.ref,n.return=r,r.child=n)}if(o=n.child,(n.lanes&l)===0){var f=o.memoizedProps;if(e=e.compare,e=e!==null?e:vt,e(f,t)&&n.ref===r.ref)return Mr(n,r,l)}return r.flags|=1,n=te(o,t),n.ref=r.ref,n.return=r,r.child=n}function Ha(n,r,e,t,l){if(n!==null){var o=n.memoizedProps;if(vt(o,t)&&n.ref===r.ref)if(Jn=!1,r.pendingProps=t=o,(n.lanes&l)!==0)(n.flags&131072)!==0&&(Jn=!0);else return r.lanes=n.lanes,Mr(n,r,l)}return Do(n,r,e,t,l)}function Wa(n,r,e){var t=r.pendingProps,l=t.children,o=n!==null?n.memoizedState:null;if(t.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},hn(Ge,tr),tr|=e;else{if((e&1073741824)===0)return n=o!==null?o.baseLanes|e:e,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,hn(Ge,tr),tr|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:e,hn(Ge,tr),tr|=t}else o!==null?(t=o.baseLanes|e,r.memoizedState=null):t=e,hn(Ge,tr),tr|=t;return Vn(n,r,l,e),r.child}function qa(n,r){var e=r.ref;(n===null&&e!==null||n!==null&&n.ref!==e)&&(r.flags|=512,r.flags|=2097152)}function Do(n,r,e,t,l){var o=Xn(e)?fe:jn.current;return o=Be(r,o),qe(r,l),e=Ro(n,r,e,t,o,l),t=_o(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~l,Mr(n,r,l)):(yn&&t&&so(r),r.flags|=1,Vn(n,r,e,l),r.child)}function Xa(n,r,e,t,l){if(Xn(e)){var o=!0;xl(r)}else o=!1;if(qe(r,l),r.stateNode===null)jl(n,r),Da(r,e,t),No(r,e,t,l),t=!0;else if(n===null){var f=r.stateNode,d=r.memoizedProps;f.props=d;var g=f.context,E=e.contextType;typeof E=="object"&&E!==null?E=or(E):(E=Xn(e)?fe:jn.current,E=Be(r,E));var F=e.getDerivedStateFromProps,T=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function";T||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==t||g!==E)&&Oa(r,f,t,E),Gr=!1;var P=r.memoizedState;f.state=P,zl(r,t,f,l),g=r.memoizedState,d!==t||P!==g||qn.current||Gr?(typeof F=="function"&&(To(r,e,F,t),g=r.memoizedState),(d=Gr||Aa(r,e,d,t,P,g,E))?(T||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=g),f.props=t,f.state=g,f.context=E,t=d):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{f=r.stateNode,aa(n,r),d=r.memoizedProps,E=r.type===r.elementType?d:mr(r.type,d),f.props=E,T=r.pendingProps,P=f.context,g=e.contextType,typeof g=="object"&&g!==null?g=or(g):(g=Xn(e)?fe:jn.current,g=Be(r,g));var M=e.getDerivedStateFromProps;(F=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(d!==T||P!==g)&&Oa(r,f,t,g),Gr=!1,P=r.memoizedState,f.state=P,zl(r,t,f,l);var B=r.memoizedState;d!==T||P!==B||qn.current||Gr?(typeof M=="function"&&(To(r,e,M,t),B=r.memoizedState),(E=Gr||Aa(r,e,E,t,P,B,g)||!1)?(F||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(t,B,g),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(t,B,g)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||d===n.memoizedProps&&P===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===n.memoizedProps&&P===n.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=B),f.props=t,f.state=B,f.context=g,t=E):(typeof f.componentDidUpdate!="function"||d===n.memoizedProps&&P===n.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||d===n.memoizedProps&&P===n.memoizedState||(r.flags|=1024),t=!1)}return Oo(n,r,e,t,o,l)}function Oo(n,r,e,t,l,o){qa(n,r);var f=(r.flags&128)!==0;if(!t&&!f)return l&&Yu(r,e,!1),Mr(n,r,o);t=r.stateNode,Gp.current=r;var d=f&&typeof e.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,n!==null&&f?(r.child=He(r,n.child,null,o),r.child=He(r,null,d,o)):Vn(n,r,d,o),r.memoizedState=t.state,l&&Yu(r,e,!0),r.child}function Ja(n){var r=n.stateNode;r.pendingContext?Gu(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Gu(n,r.context,!1),ko(n,r.containerInfo)}function Qa(n,r,e,t,l){return Ue(),fo(l),r.flags|=256,Vn(n,r,e,t),r.child}var Mo={dehydrated:null,treeContext:null,retryLane:0};function jo(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ga(n,r,e){var t=r.pendingProps,l=kn.current,o=!1,f=(r.flags&128)!==0,d;if((d=f)||(d=n!==null&&n.memoizedState===null?!1:(l&2)!==0),d?(o=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),hn(kn,l&1),n===null)return co(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(f=t.children,n=t.fallback,o?(t=r.mode,o=r.child,f={mode:"hidden",children:f},(t&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=f):o=Gl(f,t,0,null),n=we(n,t,e,null),o.return=r,n.return=r,o.sibling=n,r.child=o,r.child.memoizedState=jo(e),r.memoizedState=Mo,n):Ko(r,f));if(l=n.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return Zp(n,r,f,t,d,l,e);if(o){o=t.fallback,f=r.mode,l=n.child,d=l.sibling;var g={mode:"hidden",children:t.children};return(f&1)===0&&r.child!==l?(t=r.child,t.childLanes=0,t.pendingProps=g,r.deletions=null):(t=te(l,g),t.subtreeFlags=l.subtreeFlags&14680064),d!==null?o=te(d,o):(o=we(o,f,e,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,f=n.child.memoizedState,f=f===null?jo(e):{baseLanes:f.baseLanes|e,cachePool:null,transitions:f.transitions},o.memoizedState=f,o.childLanes=n.childLanes&~e,r.memoizedState=Mo,t}return o=n.child,n=o.sibling,t=te(o,{mode:"visible",children:t.children}),(r.mode&1)===0&&(t.lanes=e),t.return=r,t.sibling=null,n!==null&&(e=r.deletions,e===null?(r.deletions=[n],r.flags|=16):e.push(n)),r.child=t,r.memoizedState=null,t}function Ko(n,r){return r=Gl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,e,t){return t!==null&&fo(t),He(r,n.child,null,e),n=Ko(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Zp(n,r,e,t,l,o,f){if(e)return r.flags&256?(r.flags&=-257,t=Io(Error(u(422))),Ml(n,r,f,t)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(o=t.fallback,l=r.mode,t=Gl({mode:"visible",children:t.children},l,0,null),o=we(o,l,f,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,(r.mode&1)!==0&&He(r,n.child,null,f),r.child.memoizedState=jo(f),r.memoizedState=Mo,o);if((r.mode&1)===0)return Ml(n,r,f,null);if(l.data==="$!"){if(t=l.nextSibling&&l.nextSibling.dataset,t)var d=t.dgst;return t=d,o=Error(u(419)),t=Io(o,t,void 0),Ml(n,r,f,t)}if(d=(f&n.childLanes)!==0,Jn||d){if(t=In,t!==null){switch(f&-f){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(t.suspendedLanes|f))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Dr(n,l),yr(t,n,l,-1))}return rs(),t=Io(Error(u(421))),Ml(n,r,f,t)}return l.data==="$?"?(r.flags|=128,r.child=n.child,r=cd.bind(null,n),l._reactRetry=r,null):(n=o.treeContext,er=qr(l.nextSibling),rr=r,yn=!0,hr=null,n!==null&&(lr[ir++]=Ir,lr[ir++]=Ar,lr[ir++]=pe,Ir=n.id,Ar=n.overflow,pe=r),r=Ko(r,t.children),r.flags|=4096,r)}function Za(n,r,e){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r),go(n.return,r,e)}function Bo(n,r,e,t,l){var o=n.memoizedState;o===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:e,tailMode:l}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=e,o.tailMode=l)}function Ya(n,r,e){var t=r.pendingProps,l=t.revealOrder,o=t.tail;if(Vn(n,r,t.children,e),t=kn.current,(t&2)!==0)t=t&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Za(n,e,r);else if(n.tag===19)Za(n,e,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break n;for(;n.sibling===null;){if(n.return===null||n.return===r)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}if(hn(kn,t),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(e=r.child,l=null;e!==null;)n=e.alternate,n!==null&&Fl(n)===null&&(l=e),e=e.sibling;e=l,e===null?(l=r.child,r.child=null):(l=e.sibling,e.sibling=null),Bo(r,!1,l,e,o);break;case"backwards":for(e=null,l=r.child,r.child=null;l!==null;){if(n=l.alternate,n!==null&&Fl(n)===null){r.child=l;break}n=l.sibling,l.sibling=e,e=l,l=n}Bo(r,!0,e,null,o);break;case"together":Bo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function jl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Mr(n,r,e){if(n!==null&&(r.dependencies=n.dependencies),ve|=r.lanes,(e&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(u(153));if(r.child!==null){for(n=r.child,e=te(n,n.pendingProps),r.child=e,e.return=r;n.sibling!==null;)n=n.sibling,e=e.sibling=te(n,n.pendingProps),e.return=r;e.sibling=null}return r.child}function Yp(n,r,e){switch(r.tag){case 3:Ja(r),Ue();break;case 5:pa(r);break;case 1:Xn(r.type)&&xl(r);break;case 4:ko(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,l=r.memoizedProps.value;hn(_l,t._currentValue),t._currentValue=l;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(hn(kn,kn.current&1),r.flags|=128,null):(e&r.child.childLanes)!==0?Ga(n,r,e):(hn(kn,kn.current&1),n=Mr(n,r,e),n!==null?n.sibling:null);hn(kn,kn.current&1);break;case 19:if(t=(e&r.childLanes)!==0,(n.flags&128)!==0){if(t)return Ya(n,r,e);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),hn(kn,kn.current),t)break;return null;case 22:case 23:return r.lanes=0,Wa(n,r,e)}return Mr(n,r,e)}var ba,$o,nc,rc;ba=function(n,r){for(var e=r.child;e!==null;){if(e.tag===5||e.tag===6)n.appendChild(e.stateNode);else if(e.tag!==4&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break;for(;e.sibling===null;){if(e.return===null||e.return===r)return;e=e.return}e.sibling.return=e.return,e=e.sibling}},$o=function(){},nc=function(n,r,e,t){var l=n.memoizedProps;if(l!==t){n=r.stateNode,me(_r.current);var o=null;switch(e){case"input":l=mi(n,l),t=mi(n,t),o=[];break;case"select":l=K({},l,{value:void 0}),t=K({},t,{value:void 0}),o=[];break;case"textarea":l=yi(n,l),t=yi(n,t),o=[];break;default:typeof l.onClick!="function"&&typeof t.onClick=="function"&&(n.onclick=vl)}xi(e,t);var f;e=null;for(E in l)if(!t.hasOwnProperty(E)&&l.hasOwnProperty(E)&&l[E]!=null)if(E==="style"){var d=l[E];for(f in d)d.hasOwnProperty(f)&&(e||(e={}),e[f]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(c.hasOwnProperty(E)?o||(o=[]):(o=o||[]).push(E,null));for(E in t){var g=t[E];if(d=l!=null?l[E]:void 0,t.hasOwnProperty(E)&&g!==d&&(g!=null||d!=null))if(E==="style")if(d){for(f in d)!d.hasOwnProperty(f)||g&&g.hasOwnProperty(f)||(e||(e={}),e[f]="");for(f in g)g.hasOwnProperty(f)&&d[f]!==g[f]&&(e||(e={}),e[f]=g[f])}else e||(o||(o=[]),o.push(E,e)),e=g;else E==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,d=d?d.__html:void 0,g!=null&&d!==g&&(o=o||[]).push(E,g)):E==="children"?typeof g!="string"&&typeof g!="number"||(o=o||[]).push(E,""+g):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(c.hasOwnProperty(E)?(g!=null&&E==="onScroll"&&mn("scroll",n),o||d===g||(o=[])):(o=o||[]).push(E,g))}e&&(o=o||[]).push("style",e);var E=o;(r.updateQueue=E)&&(r.flags|=4)}},rc=function(n,r,e,t){e!==t&&(r.flags|=4)};function Nt(n,r){if(!yn)switch(n.tailMode){case"hidden":r=n.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?n.tail=null:e.sibling=null;break;case"collapsed":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function Bn(n){var r=n.alternate!==null&&n.alternate.child===n.child,e=0,t=0;if(r)for(var l=n.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags&14680064,t|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)e|=l.lanes|l.childLanes,t|=l.subtreeFlags,t|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=t,n.childLanes=e,r}function bp(n,r,e){var t=r.pendingProps;switch(uo(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(r),null;case 1:return Xn(r.type)&&kl(),Bn(r),null;case 3:return t=r.stateNode,Xe(),gn(qn),gn(jn),So(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,hr!==null&&(Yo(hr),hr=null))),$o(n,r),Bn(r),null;case 5:xo(r);var l=me(Ct.current);if(e=r.type,n!==null&&r.stateNode!=null)nc(n,r,e,t,l),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(u(166));return Bn(r),null}if(n=me(_r.current),Ll(r)){t=r.stateNode,e=r.type;var o=r.memoizedProps;switch(t[Rr]=r,t[St]=o,n=(r.mode&1)!==0,e){case"dialog":mn("cancel",t),mn("close",t);break;case"iframe":case"object":case"embed":mn("load",t);break;case"video":case"audio":for(l=0;l<kt.length;l++)mn(kt[l],t);break;case"source":mn("error",t);break;case"img":case"image":case"link":mn("error",t),mn("load",t);break;case"details":mn("toggle",t);break;case"input":Ds(t,o),mn("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},mn("invalid",t);break;case"textarea":js(t,o),mn("invalid",t)}xi(e,o),l=null;for(var f in o)if(o.hasOwnProperty(f)){var d=o[f];f==="children"?typeof d=="string"?t.textContent!==d&&(o.suppressHydrationWarning!==!0&&gl(t.textContent,d,n),l=["children",d]):typeof d=="number"&&t.textContent!==""+d&&(o.suppressHydrationWarning!==!0&&gl(t.textContent,d,n),l=["children",""+d]):c.hasOwnProperty(f)&&d!=null&&f==="onScroll"&&mn("scroll",t)}switch(e){case"input":Xt(t),Ms(t,o,!0);break;case"textarea":Xt(t),Bs(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=vl)}t=l,r.updateQueue=t,t!==null&&(r.flags|=4)}else{f=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$s(e)),n==="http://www.w3.org/1999/xhtml"?e==="script"?(n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof t.is=="string"?n=f.createElement(e,{is:t.is}):(n=f.createElement(e),e==="select"&&(f=n,t.multiple?f.multiple=!0:t.size&&(f.size=t.size))):n=f.createElementNS(n,e),n[Rr]=r,n[St]=t,ba(n,r,!1,!1),r.stateNode=n;n:{switch(f=wi(e,t),e){case"dialog":mn("cancel",n),mn("close",n),l=t;break;case"iframe":case"object":case"embed":mn("load",n),l=t;break;case"video":case"audio":for(l=0;l<kt.length;l++)mn(kt[l],n);l=t;break;case"source":mn("error",n),l=t;break;case"img":case"image":case"link":mn("error",n),mn("load",n),l=t;break;case"details":mn("toggle",n),l=t;break;case"input":Ds(n,t),l=mi(n,t),mn("invalid",n);break;case"option":l=t;break;case"select":n._wrapperState={wasMultiple:!!t.multiple},l=K({},t,{value:void 0}),mn("invalid",n);break;case"textarea":js(n,t),l=yi(n,t),mn("invalid",n);break;default:l=t}xi(e,l),d=l;for(o in d)if(d.hasOwnProperty(o)){var g=d[o];o==="style"?Hs(n,g):o==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Vs(n,g)):o==="children"?typeof g=="string"?(e!=="textarea"||g!=="")&&nt(n,g):typeof g=="number"&&nt(n,""+g):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(c.hasOwnProperty(o)?g!=null&&o==="onScroll"&&mn("scroll",n):g!=null&&en(n,o,g,f))}switch(e){case"input":Xt(n),Ms(n,t,!1);break;case"textarea":Xt(n),Bs(n);break;case"option":t.value!=null&&n.setAttribute("value",""+cn(t.value));break;case"select":n.multiple=!!t.multiple,o=t.value,o!=null?Pe(n,!!t.multiple,o,!1):t.defaultValue!=null&&Pe(n,!!t.multiple,t.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=vl)}switch(e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break n;case"img":t=!0;break n;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Bn(r),null;case 6:if(n&&r.stateNode!=null)rc(n,r,n.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(u(166));if(e=me(Ct.current),me(_r.current),Ll(r)){if(t=r.stateNode,e=r.memoizedProps,t[Rr]=r,(o=t.nodeValue!==e)&&(n=rr,n!==null))switch(n.tag){case 3:gl(t.nodeValue,e,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gl(t.nodeValue,e,(n.mode&1)!==0)}o&&(r.flags|=4)}else t=(e.nodeType===9?e:e.ownerDocument).createTextNode(t),t[Rr]=r,r.stateNode=t}return Bn(r),null;case 13:if(gn(kn),t=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yn&&er!==null&&(r.mode&1)!==0&&(r.flags&128)===0)la(),Ue(),r.flags|=98560,o=!1;else if(o=Ll(r),t!==null&&t.dehydrated!==null){if(n===null){if(!o)throw Error(u(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[Rr]=r}else Ue(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Bn(r),o=!1}else hr!==null&&(Yo(hr),hr=null),o=!0;if(!o)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=e,r):(t=t!==null,t!==(n!==null&&n.memoizedState!==null)&&t&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(kn.current&1)!==0?zn===0&&(zn=3):rs())),r.updateQueue!==null&&(r.flags|=4),Bn(r),null);case 4:return Xe(),$o(n,r),n===null&&xt(r.stateNode.containerInfo),Bn(r),null;case 10:return mo(r.type._context),Bn(r),null;case 17:return Xn(r.type)&&kl(),Bn(r),null;case 19:if(gn(kn),o=r.memoizedState,o===null)return Bn(r),null;if(t=(r.flags&128)!==0,f=o.rendering,f===null)if(t)Nt(o,!1);else{if(zn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(f=Fl(n),f!==null){for(r.flags|=128,Nt(o,!1),t=f.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=e,e=r.child;e!==null;)o=e,n=t,o.flags&=14680066,f=o.alternate,f===null?(o.childLanes=0,o.lanes=n,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=f.childLanes,o.lanes=f.lanes,o.child=f.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=f.memoizedProps,o.memoizedState=f.memoizedState,o.updateQueue=f.updateQueue,o.type=f.type,n=f.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e=e.sibling;return hn(kn,kn.current&1|2),r.child}n=n.sibling}o.tail!==null&&En()>Ze&&(r.flags|=128,t=!0,Nt(o,!1),r.lanes=4194304)}else{if(!t)if(n=Fl(f),n!==null){if(r.flags|=128,t=!0,e=n.updateQueue,e!==null&&(r.updateQueue=e,r.flags|=4),Nt(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!yn)return Bn(r),null}else 2*En()-o.renderingStartTime>Ze&&e!==1073741824&&(r.flags|=128,t=!0,Nt(o,!1),r.lanes=4194304);o.isBackwards?(f.sibling=r.child,r.child=f):(e=o.last,e!==null?e.sibling=f:r.child=f,o.last=f)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=En(),r.sibling=null,e=kn.current,hn(kn,t?e&1|2:e&1),r):(Bn(r),null);case 22:case 23:return ns(),t=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==t&&(r.flags|=8192),t&&(r.mode&1)!==0?(tr&1073741824)!==0&&(Bn(r),r.subtreeFlags&6&&(r.flags|=8192)):Bn(r),null;case 24:return null;case 25:return null}throw Error(u(156,r.tag))}function nd(n,r){switch(uo(r),r.tag){case 1:return Xn(r.type)&&kl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xe(),gn(qn),gn(jn),So(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return xo(r),null;case 13:if(gn(kn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(u(340));Ue()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return gn(kn),null;case 4:return Xe(),null;case 10:return mo(r.type._context),null;case 22:case 23:return ns(),null;case 24:return null;default:return null}}var Kl=!1,$n=!1,rd=typeof WeakSet=="function"?WeakSet:Set,j=null;function Qe(n,r){var e=n.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(t){Sn(n,r,t)}else e.current=null}function Vo(n,r,e){try{e()}catch(t){Sn(n,r,t)}}var ec=!1;function ed(n,r){if(bi=il,n=Au(),Wi(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var t=e.getSelection&&e.getSelection();if(t&&t.rangeCount!==0){e=t.anchorNode;var l=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{e.nodeType,o.nodeType}catch{e=null;break n}var f=0,d=-1,g=-1,E=0,F=0,T=n,P=null;r:for(;;){for(var M;T!==e||l!==0&&T.nodeType!==3||(d=f+l),T!==o||t!==0&&T.nodeType!==3||(g=f+t),T.nodeType===3&&(f+=T.nodeValue.length),(M=T.firstChild)!==null;)P=T,T=M;for(;;){if(T===n)break r;if(P===e&&++E===l&&(d=f),P===o&&++F===t&&(g=f),(M=T.nextSibling)!==null)break;T=P,P=T.parentNode}T=M}e=d===-1||g===-1?null:{start:d,end:g}}else e=null}e=e||{start:0,end:0}}else e=null;for(no={focusedElem:n,selectionRange:e},il=!1,j=r;j!==null;)if(r=j,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,j=n;else for(;j!==null;){r=j;try{var B=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var $=B.memoizedProps,Ln=B.memoizedState,w=r.stateNode,v=w.getSnapshotBeforeUpdate(r.elementType===r.type?$:mr(r.type,$),Ln);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=r.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(I){Sn(r,r.return,I)}if(n=r.sibling,n!==null){n.return=r.return,j=n;break}j=r.return}return B=ec,ec=!1,B}function It(n,r,e){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var l=t=t.next;do{if((l.tag&n)===n){var o=l.destroy;l.destroy=void 0,o!==void 0&&Vo(r,e,o)}l=l.next}while(l!==t)}}function Bl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var e=r=r.next;do{if((e.tag&n)===n){var t=e.create;e.destroy=t()}e=e.next}while(e!==r)}}function Uo(n){var r=n.ref;if(r!==null){var e=n.stateNode;switch(n.tag){case 5:n=e;break;default:n=e}typeof r=="function"?r(n):r.current=n}}function tc(n){var r=n.alternate;r!==null&&(n.alternate=null,tc(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Rr],delete r[St],delete r[lo],delete r[jp],delete r[Kp])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lc(n){return n.tag===5||n.tag===3||n.tag===4}function ic(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||lc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ho(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.nodeType===8?e.parentNode.insertBefore(n,r):e.insertBefore(n,r):(e.nodeType===8?(r=e.parentNode,r.insertBefore(n,e)):(r=e,r.appendChild(n)),e=e._reactRootContainer,e!=null||r.onclick!==null||(r.onclick=vl));else if(t!==4&&(n=n.child,n!==null))for(Ho(n,r,e),n=n.sibling;n!==null;)Ho(n,r,e),n=n.sibling}function Wo(n,r,e){var t=n.tag;if(t===5||t===6)n=n.stateNode,r?e.insertBefore(n,r):e.appendChild(n);else if(t!==4&&(n=n.child,n!==null))for(Wo(n,r,e),n=n.sibling;n!==null;)Wo(n,r,e),n=n.sibling}var On=null,gr=!1;function Yr(n,r,e){for(e=e.child;e!==null;)oc(n,r,e),e=e.sibling}function oc(n,r,e){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(bt,e)}catch{}switch(e.tag){case 5:$n||Qe(e,r);case 6:var t=On,l=gr;On=null,Yr(n,r,e),On=t,gr=l,On!==null&&(gr?(n=On,e=e.stateNode,n.nodeType===8?n.parentNode.removeChild(e):n.removeChild(e)):On.removeChild(e.stateNode));break;case 18:On!==null&&(gr?(n=On,e=e.stateNode,n.nodeType===8?to(n.parentNode,e):n.nodeType===1&&to(n,e),ft(n)):to(On,e.stateNode));break;case 4:t=On,l=gr,On=e.stateNode.containerInfo,gr=!0,Yr(n,r,e),On=t,gr=l;break;case 0:case 11:case 14:case 15:if(!$n&&(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){l=t=t.next;do{var o=l,f=o.destroy;o=o.tag,f!==void 0&&((o&2)!==0||(o&4)!==0)&&Vo(e,r,f),l=l.next}while(l!==t)}Yr(n,r,e);break;case 1:if(!$n&&(Qe(e,r),t=e.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(d){Sn(e,r,d)}Yr(n,r,e);break;case 21:Yr(n,r,e);break;case 22:e.mode&1?($n=(t=$n)||e.memoizedState!==null,Yr(n,r,e),$n=t):Yr(n,r,e);break;default:Yr(n,r,e)}}function sc(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var e=n.stateNode;e===null&&(e=n.stateNode=new rd),r.forEach(function(t){var l=fd.bind(null,n,t);e.has(t)||(e.add(t),t.then(l,l))})}}function vr(n,r){var e=r.deletions;if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];try{var o=n,f=r,d=f;n:for(;d!==null;){switch(d.tag){case 5:On=d.stateNode,gr=!1;break n;case 3:On=d.stateNode.containerInfo,gr=!0;break n;case 4:On=d.stateNode.containerInfo,gr=!0;break n}d=d.return}if(On===null)throw Error(u(160));oc(o,f,l),On=null,gr=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(E){Sn(l,r,E)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)uc(r,n),r=r.sibling}function uc(n,r){var e=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vr(r,n),Pr(n),t&4){try{It(3,n,n.return),Bl(3,n)}catch($){Sn(n,n.return,$)}try{It(5,n,n.return)}catch($){Sn(n,n.return,$)}}break;case 1:vr(r,n),Pr(n),t&512&&e!==null&&Qe(e,e.return);break;case 5:if(vr(r,n),Pr(n),t&512&&e!==null&&Qe(e,e.return),n.flags&32){var l=n.stateNode;try{nt(l,"")}catch($){Sn(n,n.return,$)}}if(t&4&&(l=n.stateNode,l!=null)){var o=n.memoizedProps,f=e!==null?e.memoizedProps:o,d=n.type,g=n.updateQueue;if(n.updateQueue=null,g!==null)try{d==="input"&&o.type==="radio"&&o.name!=null&&Os(l,o),wi(d,f);var E=wi(d,o);for(f=0;f<g.length;f+=2){var F=g[f],T=g[f+1];F==="style"?Hs(l,T):F==="dangerouslySetInnerHTML"?Vs(l,T):F==="children"?nt(l,T):en(l,F,T,E)}switch(d){case"input":gi(l,o);break;case"textarea":Ks(l,o);break;case"select":var P=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var M=o.value;M!=null?Pe(l,!!o.multiple,M,!1):P!==!!o.multiple&&(o.defaultValue!=null?Pe(l,!!o.multiple,o.defaultValue,!0):Pe(l,!!o.multiple,o.multiple?[]:"",!1))}l[St]=o}catch($){Sn(n,n.return,$)}}break;case 6:if(vr(r,n),Pr(n),t&4){if(n.stateNode===null)throw Error(u(162));l=n.stateNode,o=n.memoizedProps;try{l.nodeValue=o}catch($){Sn(n,n.return,$)}}break;case 3:if(vr(r,n),Pr(n),t&4&&e!==null&&e.memoizedState.isDehydrated)try{ft(r.containerInfo)}catch($){Sn(n,n.return,$)}break;case 4:vr(r,n),Pr(n);break;case 13:vr(r,n),Pr(n),l=n.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Jo=En())),t&4&&sc(n);break;case 22:if(F=e!==null&&e.memoizedState!==null,n.mode&1?($n=(E=$n)||F,vr(r,n),$n=E):vr(r,n),Pr(n),t&8192){if(E=n.memoizedState!==null,(n.stateNode.isHidden=E)&&!F&&(n.mode&1)!==0)for(j=n,F=n.child;F!==null;){for(T=j=F;j!==null;){switch(P=j,M=P.child,P.tag){case 0:case 11:case 14:case 15:It(4,P,P.return);break;case 1:Qe(P,P.return);var B=P.stateNode;if(typeof B.componentWillUnmount=="function"){t=P,e=P.return;try{r=t,B.props=r.memoizedProps,B.state=r.memoizedState,B.componentWillUnmount()}catch($){Sn(t,e,$)}}break;case 5:Qe(P,P.return);break;case 22:if(P.memoizedState!==null){fc(T);continue}}M!==null?(M.return=P,j=M):fc(T)}F=F.sibling}n:for(F=null,T=n;;){if(T.tag===5){if(F===null){F=T;try{l=T.stateNode,E?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(d=T.stateNode,g=T.memoizedProps.style,f=g!=null&&g.hasOwnProperty("display")?g.display:null,d.style.display=Us("display",f))}catch($){Sn(n,n.return,$)}}}else if(T.tag===6){if(F===null)try{T.stateNode.nodeValue=E?"":T.memoizedProps}catch($){Sn(n,n.return,$)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===n)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===n)break n;for(;T.sibling===null;){if(T.return===null||T.return===n)break n;F===T&&(F=null),T=T.return}F===T&&(F=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:vr(r,n),Pr(n),t&4&&sc(n);break;case 21:break;default:vr(r,n),Pr(n)}}function Pr(n){var r=n.flags;if(r&2){try{n:{for(var e=n.return;e!==null;){if(lc(e)){var t=e;break n}e=e.return}throw Error(u(160))}switch(t.tag){case 5:var l=t.stateNode;t.flags&32&&(nt(l,""),t.flags&=-33);var o=ic(n);Wo(n,o,l);break;case 3:case 4:var f=t.stateNode.containerInfo,d=ic(n);Ho(n,d,f);break;default:throw Error(u(161))}}catch(g){Sn(n,n.return,g)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function td(n,r,e){j=n,ac(n)}function ac(n,r,e){for(var t=(n.mode&1)!==0;j!==null;){var l=j,o=l.child;if(l.tag===22&&t){var f=l.memoizedState!==null||Kl;if(!f){var d=l.alternate,g=d!==null&&d.memoizedState!==null||$n;d=Kl;var E=$n;if(Kl=f,($n=g)&&!E)for(j=l;j!==null;)f=j,g=f.child,f.tag===22&&f.memoizedState!==null?pc(l):g!==null?(g.return=f,j=g):pc(l);for(;o!==null;)j=o,ac(o),o=o.sibling;j=l,Kl=d,$n=E}cc(n)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,j=o):cc(n)}}function cc(n){for(;j!==null;){var r=j;if((r.flags&8772)!==0){var e=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:$n||Bl(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!$n)if(e===null)t.componentDidMount();else{var l=r.elementType===r.type?e.memoizedProps:mr(r.type,e.memoizedProps);t.componentDidUpdate(l,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&fa(r,o,t);break;case 3:var f=r.updateQueue;if(f!==null){if(e=null,r.child!==null)switch(r.child.tag){case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}fa(r,f,e)}break;case 5:var d=r.stateNode;if(e===null&&r.flags&4){e=d;var g=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&e.focus();break;case"img":g.src&&(e.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var E=r.alternate;if(E!==null){var F=E.memoizedState;if(F!==null){var T=F.dehydrated;T!==null&&ft(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}$n||r.flags&512&&Uo(r)}catch(P){Sn(r,r.return,P)}}if(r===n){j=null;break}if(e=r.sibling,e!==null){e.return=r.return,j=e;break}j=r.return}}function fc(n){for(;j!==null;){var r=j;if(r===n){j=null;break}var e=r.sibling;if(e!==null){e.return=r.return,j=e;break}j=r.return}}function pc(n){for(;j!==null;){var r=j;try{switch(r.tag){case 0:case 11:case 15:var e=r.return;try{Bl(4,r)}catch(g){Sn(r,e,g)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var l=r.return;try{t.componentDidMount()}catch(g){Sn(r,l,g)}}var o=r.return;try{Uo(r)}catch(g){Sn(r,o,g)}break;case 5:var f=r.return;try{Uo(r)}catch(g){Sn(r,f,g)}}}catch(g){Sn(r,r.return,g)}if(r===n){j=null;break}var d=r.sibling;if(d!==null){d.return=r.return,j=d;break}j=r.return}}var ld=Math.ceil,$l=an.ReactCurrentDispatcher,qo=an.ReactCurrentOwner,ur=an.ReactCurrentBatchConfig,tn=0,In=null,_n=null,Mn=0,tr=0,Ge=Xr(0),zn=0,At=null,ve=0,Vl=0,Xo=0,Dt=null,Qn=null,Jo=0,Ze=1/0,jr=null,Ul=!1,Qo=null,br=null,Hl=!1,ne=null,Wl=0,Ot=0,Go=null,ql=-1,Xl=0;function Un(){return(tn&6)!==0?En():ql!==-1?ql:ql=En()}function re(n){return(n.mode&1)===0?1:(tn&2)!==0&&Mn!==0?Mn&-Mn:$p.transition!==null?(Xl===0&&(Xl=iu()),Xl):(n=fn,n!==0||(n=window.event,n=n===void 0?16:hu(n.type)),n)}function yr(n,r,e,t){if(50<Ot)throw Ot=0,Go=null,Error(u(185));ot(n,e,t),((tn&2)===0||n!==In)&&(n===In&&((tn&2)===0&&(Vl|=e),zn===4&&ee(n,Mn)),Gn(n,t),e===1&&tn===0&&(r.mode&1)===0&&(Ze=En()+500,wl&&Qr()))}function Gn(n,r){var e=n.callbackNode;$f(n,r);var t=el(n,n===In?Mn:0);if(t===0)e!==null&&eu(e),n.callbackNode=null,n.callbackPriority=0;else if(r=t&-t,n.callbackPriority!==r){if(e!=null&&eu(e),r===1)n.tag===0?Bp(hc.bind(null,n)):bu(hc.bind(null,n)),Op(function(){(tn&6)===0&&Qr()}),e=null;else{switch(ou(t)){case 1:e=Pi;break;case 4:e=tu;break;case 16:e=Yt;break;case 536870912:e=lu;break;default:e=Yt}e=Sc(e,dc.bind(null,n))}n.callbackPriority=r,n.callbackNode=e}}function dc(n,r){if(ql=-1,Xl=0,(tn&6)!==0)throw Error(u(327));var e=n.callbackNode;if(Ye()&&n.callbackNode!==e)return null;var t=el(n,n===In?Mn:0);if(t===0)return null;if((t&30)!==0||(t&n.expiredLanes)!==0||r)r=Jl(n,t);else{r=t;var l=tn;tn|=2;var o=gc();(In!==n||Mn!==r)&&(jr=null,Ze=En()+500,ke(n,r));do try{sd();break}catch(d){mc(n,d)}while(!0);ho(),$l.current=o,tn=l,_n!==null?r=0:(In=null,Mn=0,r=zn)}if(r!==0){if(r===2&&(l=zi(n),l!==0&&(t=l,r=Zo(n,l))),r===1)throw e=At,ke(n,0),ee(n,t),Gn(n,En()),e;if(r===6)ee(n,t);else{if(l=n.current.alternate,(t&30)===0&&!id(l)&&(r=Jl(n,t),r===2&&(o=zi(n),o!==0&&(t=o,r=Zo(n,o))),r===1))throw e=At,ke(n,0),ee(n,t),Gn(n,En()),e;switch(n.finishedWork=l,n.finishedLanes=t,r){case 0:case 1:throw Error(u(345));case 2:xe(n,Qn,jr);break;case 3:if(ee(n,t),(t&130023424)===t&&(r=Jo+500-En(),10<r)){if(el(n,0)!==0)break;if(l=n.suspendedLanes,(l&t)!==t){Un(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=eo(xe.bind(null,n,Qn,jr),r);break}xe(n,Qn,jr);break;case 4:if(ee(n,t),(t&4194240)===t)break;for(r=n.eventTimes,l=-1;0<t;){var f=31-pr(t);o=1<<f,f=r[f],f>l&&(l=f),t&=~o}if(t=l,t=En()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*ld(t/1960))-t,10<t){n.timeoutHandle=eo(xe.bind(null,n,Qn,jr),t);break}xe(n,Qn,jr);break;case 5:xe(n,Qn,jr);break;default:throw Error(u(329))}}}return Gn(n,En()),n.callbackNode===e?dc.bind(null,n):null}function Zo(n,r){var e=Dt;return n.current.memoizedState.isDehydrated&&(ke(n,r).flags|=256),n=Jl(n,r),n!==2&&(r=Qn,Qn=e,r!==null&&Yo(r)),n}function Yo(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function id(n){for(var r=n;;){if(r.flags&16384){var e=r.updateQueue;if(e!==null&&(e=e.stores,e!==null))for(var t=0;t<e.length;t++){var l=e[t],o=l.getSnapshot;l=l.value;try{if(!dr(o(),l))return!1}catch{return!1}}}if(e=r.child,r.subtreeFlags&16384&&e!==null)e.return=r,r=e;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ee(n,r){for(r&=~Xo,r&=~Vl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var e=31-pr(r),t=1<<e;n[e]=-1,r&=~t}}function hc(n){if((tn&6)!==0)throw Error(u(327));Ye();var r=el(n,0);if((r&1)===0)return Gn(n,En()),null;var e=Jl(n,r);if(n.tag!==0&&e===2){var t=zi(n);t!==0&&(r=t,e=Zo(n,t))}if(e===1)throw e=At,ke(n,0),ee(n,r),Gn(n,En()),e;if(e===6)throw Error(u(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,xe(n,Qn,jr),Gn(n,En()),null}function bo(n,r){var e=tn;tn|=1;try{return n(r)}finally{tn=e,tn===0&&(Ze=En()+500,wl&&Qr())}}function ye(n){ne!==null&&ne.tag===0&&(tn&6)===0&&Ye();var r=tn;tn|=1;var e=ur.transition,t=fn;try{if(ur.transition=null,fn=1,n)return n()}finally{fn=t,ur.transition=e,tn=r,(tn&6)===0&&Qr()}}function ns(){tr=Ge.current,gn(Ge)}function ke(n,r){n.finishedWork=null,n.finishedLanes=0;var e=n.timeoutHandle;if(e!==-1&&(n.timeoutHandle=-1,Dp(e)),_n!==null)for(e=_n.return;e!==null;){var t=e;switch(uo(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&kl();break;case 3:Xe(),gn(qn),gn(jn),So();break;case 5:xo(t);break;case 4:Xe();break;case 13:gn(kn);break;case 19:gn(kn);break;case 10:mo(t.type._context);break;case 22:case 23:ns()}e=e.return}if(In=n,_n=n=te(n.current,null),Mn=tr=r,zn=0,At=null,Xo=Vl=ve=0,Qn=Dt=null,he!==null){for(r=0;r<he.length;r++)if(e=he[r],t=e.interleaved,t!==null){e.interleaved=null;var l=t.next,o=e.pending;if(o!==null){var f=o.next;o.next=l,t.next=f}e.pending=t}he=null}return n}function mc(n,r){do{var e=_n;try{if(ho(),Tl.current=Dl,Nl){for(var t=xn.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Nl=!1}if(ge=0,Nn=Pn=xn=null,Pt=!1,zt=0,qo.current=null,e===null||e.return===null){zn=1,At=r,_n=null;break}n:{var o=n,f=e.return,d=e,g=r;if(r=Mn,d.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var E=g,F=d,T=F.tag;if((F.mode&1)===0&&(T===0||T===11||T===15)){var P=F.alternate;P?(F.updateQueue=P.updateQueue,F.memoizedState=P.memoizedState,F.lanes=P.lanes):(F.updateQueue=null,F.memoizedState=null)}var M=Ba(f);if(M!==null){M.flags&=-257,$a(M,f,d,o,r),M.mode&1&&Ka(o,E,r),r=M,g=E;var B=r.updateQueue;if(B===null){var $=new Set;$.add(g),r.updateQueue=$}else B.add(g);break n}else{if((r&1)===0){Ka(o,E,r),rs();break n}g=Error(u(426))}}else if(yn&&d.mode&1){var Ln=Ba(f);if(Ln!==null){(Ln.flags&65536)===0&&(Ln.flags|=256),$a(Ln,f,d,o,r),fo(Je(g,d));break n}}o=g=Je(g,d),zn!==4&&(zn=2),Dt===null?Dt=[o]:Dt.push(o),o=f;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var w=Ma(o,g,r);ca(o,w);break n;case 1:d=g;var v=o.type,S=o.stateNode;if((o.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(br===null||!br.has(S)))){o.flags|=65536,r&=-r,o.lanes|=r;var I=ja(o,d,r);ca(o,I);break n}}o=o.return}while(o!==null)}yc(e)}catch(U){r=U,_n===e&&e!==null&&(_n=e=e.return);continue}break}while(!0)}function gc(){var n=$l.current;return $l.current=Dl,n===null?Dl:n}function rs(){(zn===0||zn===3||zn===2)&&(zn=4),In===null||(ve&268435455)===0&&(Vl&268435455)===0||ee(In,Mn)}function Jl(n,r){var e=tn;tn|=2;var t=gc();(In!==n||Mn!==r)&&(jr=null,ke(n,r));do try{od();break}catch(l){mc(n,l)}while(!0);if(ho(),tn=e,$l.current=t,_n!==null)throw Error(u(261));return In=null,Mn=0,zn}function od(){for(;_n!==null;)vc(_n)}function sd(){for(;_n!==null&&!Nf();)vc(_n)}function vc(n){var r=wc(n.alternate,n,tr);n.memoizedProps=n.pendingProps,r===null?yc(n):_n=r,qo.current=null}function yc(n){var r=n;do{var e=r.alternate;if(n=r.return,(r.flags&32768)===0){if(e=bp(e,r,tr),e!==null){_n=e;return}}else{if(e=nd(e,r),e!==null){e.flags&=32767,_n=e;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{zn=6,_n=null;return}}if(r=r.sibling,r!==null){_n=r;return}_n=r=n}while(r!==null);zn===0&&(zn=5)}function xe(n,r,e){var t=fn,l=ur.transition;try{ur.transition=null,fn=1,ud(n,r,e,t)}finally{ur.transition=l,fn=t}return null}function ud(n,r,e,t){do Ye();while(ne!==null);if((tn&6)!==0)throw Error(u(327));e=n.finishedWork;var l=n.finishedLanes;if(e===null)return null;if(n.finishedWork=null,n.finishedLanes=0,e===n.current)throw Error(u(177));n.callbackNode=null,n.callbackPriority=0;var o=e.lanes|e.childLanes;if(Vf(n,o),n===In&&(_n=In=null,Mn=0),(e.subtreeFlags&2064)===0&&(e.flags&2064)===0||Hl||(Hl=!0,Sc(Yt,function(){return Ye(),null})),o=(e.flags&15990)!==0,(e.subtreeFlags&15990)!==0||o){o=ur.transition,ur.transition=null;var f=fn;fn=1;var d=tn;tn|=4,qo.current=null,ed(n,e),uc(e,n),Pp(no),il=!!bi,no=bi=null,n.current=e,td(e),If(),tn=d,fn=f,ur.transition=o}else n.current=e;if(Hl&&(Hl=!1,ne=n,Wl=l),o=n.pendingLanes,o===0&&(br=null),Of(e.stateNode),Gn(n,En()),r!==null)for(t=n.onRecoverableError,e=0;e<r.length;e++)l=r[e],t(l.value,{componentStack:l.stack,digest:l.digest});if(Ul)throw Ul=!1,n=Qo,Qo=null,n;return(Wl&1)!==0&&n.tag!==0&&Ye(),o=n.pendingLanes,(o&1)!==0?n===Go?Ot++:(Ot=0,Go=n):Ot=0,Qr(),null}function Ye(){if(ne!==null){var n=ou(Wl),r=ur.transition,e=fn;try{if(ur.transition=null,fn=16>n?16:n,ne===null)var t=!1;else{if(n=ne,ne=null,Wl=0,(tn&6)!==0)throw Error(u(331));var l=tn;for(tn|=4,j=n.current;j!==null;){var o=j,f=o.child;if((j.flags&16)!==0){var d=o.deletions;if(d!==null){for(var g=0;g<d.length;g++){var E=d[g];for(j=E;j!==null;){var F=j;switch(F.tag){case 0:case 11:case 15:It(8,F,o)}var T=F.child;if(T!==null)T.return=F,j=T;else for(;j!==null;){F=j;var P=F.sibling,M=F.return;if(tc(F),F===E){j=null;break}if(P!==null){P.return=M,j=P;break}j=M}}}var B=o.alternate;if(B!==null){var $=B.child;if($!==null){B.child=null;do{var Ln=$.sibling;$.sibling=null,$=Ln}while($!==null)}}j=o}}if((o.subtreeFlags&2064)!==0&&f!==null)f.return=o,j=f;else n:for(;j!==null;){if(o=j,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:It(9,o,o.return)}var w=o.sibling;if(w!==null){w.return=o.return,j=w;break n}j=o.return}}var v=n.current;for(j=v;j!==null;){f=j;var S=f.child;if((f.subtreeFlags&2064)!==0&&S!==null)S.return=f,j=S;else n:for(f=v;j!==null;){if(d=j,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Bl(9,d)}}catch(U){Sn(d,d.return,U)}if(d===f){j=null;break n}var I=d.sibling;if(I!==null){I.return=d.return,j=I;break n}j=d.return}}if(tn=l,Qr(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(bt,n)}catch{}t=!0}return t}finally{fn=e,ur.transition=r}}return!1}function kc(n,r,e){r=Je(e,r),r=Ma(n,r,1),n=Zr(n,r,1),r=Un(),n!==null&&(ot(n,1,r),Gn(n,r))}function Sn(n,r,e){if(n.tag===3)kc(n,n,e);else for(;r!==null;){if(r.tag===3){kc(r,n,e);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(br===null||!br.has(t))){n=Je(e,n),n=ja(r,n,1),r=Zr(r,n,1),n=Un(),r!==null&&(ot(r,1,n),Gn(r,n));break}}r=r.return}}function ad(n,r,e){var t=n.pingCache;t!==null&&t.delete(r),r=Un(),n.pingedLanes|=n.suspendedLanes&e,In===n&&(Mn&e)===e&&(zn===4||zn===3&&(Mn&130023424)===Mn&&500>En()-Jo?ke(n,0):Xo|=e),Gn(n,r)}function xc(n,r){r===0&&((n.mode&1)===0?r=1:(r=rl,rl<<=1,(rl&130023424)===0&&(rl=4194304)));var e=Un();n=Dr(n,r),n!==null&&(ot(n,r,e),Gn(n,e))}function cd(n){var r=n.memoizedState,e=0;r!==null&&(e=r.retryLane),xc(n,e)}function fd(n,r){var e=0;switch(n.tag){case 13:var t=n.stateNode,l=n.memoizedState;l!==null&&(e=l.retryLane);break;case 19:t=n.stateNode;break;default:throw Error(u(314))}t!==null&&t.delete(r),xc(n,e)}var wc;wc=function(n,r,e){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)Jn=!0;else{if((n.lanes&e)===0&&(r.flags&128)===0)return Jn=!1,Yp(n,r,e);Jn=(n.flags&131072)!==0}else Jn=!1,yn&&(r.flags&1048576)!==0&&na(r,El,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;jl(n,r),n=r.pendingProps;var l=Be(r,jn.current);qe(r,e),l=Ro(null,r,t,n,l,e);var o=_o();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xn(t)?(o=!0,xl(r)):o=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,yo(r),l.updater=Ol,r.stateNode=l,l._reactInternals=r,No(r,t,n,e),r=Oo(null,r,t,!0,o,e)):(r.tag=0,yn&&o&&so(r),Vn(null,r,l,e),r=r.child),r;case 16:t=r.elementType;n:{switch(jl(n,r),n=r.pendingProps,l=t._init,t=l(t._payload),r.type=t,l=r.tag=dd(t),n=mr(t,n),l){case 0:r=Do(null,r,t,n,e);break n;case 1:r=Xa(null,r,t,n,e);break n;case 11:r=Va(null,r,t,n,e);break n;case 14:r=Ua(null,r,t,mr(t.type,n),e);break n}throw Error(u(306,t,""))}return r;case 0:return t=r.type,l=r.pendingProps,l=r.elementType===t?l:mr(t,l),Do(n,r,t,l,e);case 1:return t=r.type,l=r.pendingProps,l=r.elementType===t?l:mr(t,l),Xa(n,r,t,l,e);case 3:n:{if(Ja(r),n===null)throw Error(u(387));t=r.pendingProps,o=r.memoizedState,l=o.element,aa(n,r),zl(r,t,null,e);var f=r.memoizedState;if(t=f.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){l=Je(Error(u(423)),r),r=Qa(n,r,t,e,l);break n}else if(t!==l){l=Je(Error(u(424)),r),r=Qa(n,r,t,e,l);break n}else for(er=qr(r.stateNode.containerInfo.firstChild),rr=r,yn=!0,hr=null,e=sa(r,null,t,e),r.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Ue(),t===l){r=Mr(n,r,e);break n}Vn(n,r,t,e)}r=r.child}return r;case 5:return pa(r),n===null&&co(r),t=r.type,l=r.pendingProps,o=n!==null?n.memoizedProps:null,f=l.children,ro(t,l)?f=null:o!==null&&ro(t,o)&&(r.flags|=32),qa(n,r),Vn(n,r,f,e),r.child;case 6:return n===null&&co(r),null;case 13:return Ga(n,r,e);case 4:return ko(r,r.stateNode.containerInfo),t=r.pendingProps,n===null?r.child=He(r,null,t,e):Vn(n,r,t,e),r.child;case 11:return t=r.type,l=r.pendingProps,l=r.elementType===t?l:mr(t,l),Va(n,r,t,l,e);case 7:return Vn(n,r,r.pendingProps,e),r.child;case 8:return Vn(n,r,r.pendingProps.children,e),r.child;case 12:return Vn(n,r,r.pendingProps.children,e),r.child;case 10:n:{if(t=r.type._context,l=r.pendingProps,o=r.memoizedProps,f=l.value,hn(_l,t._currentValue),t._currentValue=f,o!==null)if(dr(o.value,f)){if(o.children===l.children&&!qn.current){r=Mr(n,r,e);break n}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var d=o.dependencies;if(d!==null){f=o.child;for(var g=d.firstContext;g!==null;){if(g.context===t){if(o.tag===1){g=Or(-1,e&-e),g.tag=2;var E=o.updateQueue;if(E!==null){E=E.shared;var F=E.pending;F===null?g.next=g:(g.next=F.next,F.next=g),E.pending=g}}o.lanes|=e,g=o.alternate,g!==null&&(g.lanes|=e),go(o.return,e,r),d.lanes|=e;break}g=g.next}}else if(o.tag===10)f=o.type===r.type?null:o.child;else if(o.tag===18){if(f=o.return,f===null)throw Error(u(341));f.lanes|=e,d=f.alternate,d!==null&&(d.lanes|=e),go(f,e,r),f=o.sibling}else f=o.child;if(f!==null)f.return=o;else for(f=o;f!==null;){if(f===r){f=null;break}if(o=f.sibling,o!==null){o.return=f.return,f=o;break}f=f.return}o=f}Vn(n,r,l.children,e),r=r.child}return r;case 9:return l=r.type,t=r.pendingProps.children,qe(r,e),l=or(l),t=t(l),r.flags|=1,Vn(n,r,t,e),r.child;case 14:return t=r.type,l=mr(t,r.pendingProps),l=mr(t.type,l),Ua(n,r,t,l,e);case 15:return Ha(n,r,r.type,r.pendingProps,e);case 17:return t=r.type,l=r.pendingProps,l=r.elementType===t?l:mr(t,l),jl(n,r),r.tag=1,Xn(t)?(n=!0,xl(r)):n=!1,qe(r,e),Da(r,t,l),No(r,t,l,e),Oo(null,r,t,!0,n,e);case 19:return Ya(n,r,e);case 22:return Wa(n,r,e)}throw Error(u(156,r.tag))};function Sc(n,r){return ru(n,r)}function pd(n,r,e,t){this.tag=n,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(n,r,e,t){return new pd(n,r,e,t)}function es(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dd(n){if(typeof n=="function")return es(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Sr)return 11;if(n===Er)return 14}return 2}function te(n,r){var e=n.alternate;return e===null?(e=ar(n.tag,r,n.key,n.mode),e.elementType=n.elementType,e.type=n.type,e.stateNode=n.stateNode,e.alternate=n,n.alternate=e):(e.pendingProps=r,e.type=n.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=n.flags&14680064,e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,r=n.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.sibling=n.sibling,e.index=n.index,e.ref=n.ref,e}function Ql(n,r,e,t,l,o){var f=2;if(t=n,typeof n=="function")es(n)&&(f=1);else if(typeof n=="string")f=5;else n:switch(n){case Fn:return we(e.children,l,o,r);case Tn:f=8,l|=8;break;case Kr:return n=ar(12,e,r,l|2),n.elementType=Kr,n.lanes=o,n;case Yn:return n=ar(13,e,r,l),n.elementType=Yn,n.lanes=o,n;case fr:return n=ar(19,e,r,l),n.elementType=fr,n.lanes=o,n;case wn:return Gl(e,l,o,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fr:f=10;break n;case ue:f=9;break n;case Sr:f=11;break n;case Er:f=14;break n;case Wn:f=16,t=null;break n}throw Error(u(130,n==null?n:typeof n,""))}return r=ar(f,e,r,l),r.elementType=n,r.type=t,r.lanes=o,r}function we(n,r,e,t){return n=ar(7,n,t,r),n.lanes=e,n}function Gl(n,r,e,t){return n=ar(22,n,t,r),n.elementType=wn,n.lanes=e,n.stateNode={isHidden:!1},n}function ts(n,r,e){return n=ar(6,n,null,r),n.lanes=e,n}function ls(n,r,e){return r=ar(4,n.children!==null?n.children:[],n.key,r),r.lanes=e,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function hd(n,r,e,t,l){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=t,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function is(n,r,e,t,l,o,f,d,g){return n=new hd(n,r,e,d,g),r===1?(r=1,o===!0&&(r|=8)):r=0,o=ar(3,null,null,r),n.current=o,o.stateNode=n,o.memoizedState={element:t,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},yo(o),n}function md(n,r,e){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:t==null?null:""+t,children:n,containerInfo:r,implementation:e}}function Ec(n){if(!n)return Jr;n=n._reactInternals;n:{if(ae(n)!==n||n.tag!==1)throw Error(u(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break n;case 1:if(Xn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break n}}r=r.return}while(r!==null);throw Error(u(171))}if(n.tag===1){var e=n.type;if(Xn(e))return Zu(n,e,r)}return r}function Lc(n,r,e,t,l,o,f,d,g){return n=is(e,t,!0,n,l,o,f,d,g),n.context=Ec(null),e=n.current,t=Un(),l=re(e),o=Or(t,l),o.callback=r??null,Zr(e,o,l),n.current.lanes=l,ot(n,l,t),Gn(n,t),n}function Zl(n,r,e,t){var l=r.current,o=Un(),f=re(l);return e=Ec(e),r.context===null?r.context=e:r.pendingContext=e,r=Or(o,f),r.payload={element:n},t=t===void 0?null:t,t!==null&&(r.callback=t),n=Zr(l,r,f),n!==null&&(yr(n,l,f,o),Pl(n,l,f)),f}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Rc(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var e=n.retryLane;n.retryLane=e!==0&&e<r?e:r}}function os(n,r){Rc(n,r),(n=n.alternate)&&Rc(n,r)}function gd(){return null}var _c=typeof reportError=="function"?reportError:function(n){console.error(n)};function ss(n){this._internalRoot=n}bl.prototype.render=ss.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(u(409));Zl(n,r,null,null)},bl.prototype.unmount=ss.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ye(function(){Zl(null,n,null,null)}),r[Tr]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=au();n={blockedOn:null,target:n,priority:r};for(var e=0;e<Ur.length&&r!==0&&r<Ur[e].priority;e++);Ur.splice(e,0,n),e===0&&pu(n)}};function us(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ni(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cc(){}function vd(n,r,e,t,l){if(l){if(typeof t=="function"){var o=t;t=function(){var E=Yl(f);o.call(E)}}var f=Lc(r,t,n,0,null,!1,!1,"",Cc);return n._reactRootContainer=f,n[Tr]=f.current,xt(n.nodeType===8?n.parentNode:n),ye(),f}for(;l=n.lastChild;)n.removeChild(l);if(typeof t=="function"){var d=t;t=function(){var E=Yl(g);d.call(E)}}var g=is(n,0,!1,null,null,!1,!1,"",Cc);return n._reactRootContainer=g,n[Tr]=g.current,xt(n.nodeType===8?n.parentNode:n),ye(function(){Zl(r,g,e,t)}),g}function ri(n,r,e,t,l){var o=e._reactRootContainer;if(o){var f=o;if(typeof l=="function"){var d=l;l=function(){var g=Yl(f);d.call(g)}}Zl(r,f,n,l)}else f=vd(e,r,n,l,t);return Yl(f)}su=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var e=it(r.pendingLanes);e!==0&&(Ti(r,e|1),Gn(r,En()),(tn&6)===0&&(Ze=En()+500,Qr()))}break;case 13:ye(function(){var t=Dr(n,1);if(t!==null){var l=Un();yr(t,n,1,l)}}),os(n,1)}},Ni=function(n){if(n.tag===13){var r=Dr(n,134217728);if(r!==null){var e=Un();yr(r,n,134217728,e)}os(n,134217728)}},uu=function(n){if(n.tag===13){var r=re(n),e=Dr(n,r);if(e!==null){var t=Un();yr(e,n,r,t)}os(n,r)}},au=function(){return fn},cu=function(n,r){var e=fn;try{return fn=n,r()}finally{fn=e}},Li=function(n,r,e){switch(r){case"input":if(gi(n,e),r=e.name,e.type==="radio"&&r!=null){for(e=n;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<e.length;r++){var t=e[r];if(t!==n&&t.form===n.form){var l=yl(t);if(!l)throw Error(u(90));As(t),gi(t,l)}}}break;case"textarea":Ks(n,e);break;case"select":r=e.value,r!=null&&Pe(n,!!e.multiple,r,!1)}},Js=bo,Qs=ye;var yd={usingClientEntryPoint:!1,Events:[Et,je,yl,qs,Xs,bo]},Mt={findFiberByHostInstance:ce,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kd={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=bs(n),n===null?null:n.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||gd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ei=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ei.isDisabled&&ei.supportsFiber)try{bt=ei.inject(kd),Lr=ei}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd,Zn.createPortal=function(n,r){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!us(r))throw Error(u(200));return md(n,r,null,e)},Zn.createRoot=function(n,r){if(!us(n))throw Error(u(299));var e=!1,t="",l=_c;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=is(n,1,!1,null,null,e,!1,t,l),n[Tr]=r.current,xt(n.nodeType===8?n.parentNode:n),new ss(r)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=bs(r),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return ye(n)},Zn.hydrate=function(n,r,e){if(!ni(r))throw Error(u(200));return ri(null,n,r,!0,e)},Zn.hydrateRoot=function(n,r,e){if(!us(n))throw Error(u(405));var t=e!=null&&e.hydratedSources||null,l=!1,o="",f=_c;if(e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(f=e.onRecoverableError)),r=Lc(r,null,n,1,e??null,l,!1,o,f),n[Tr]=r.current,xt(n),t)for(n=0;n<t.length;n++)e=t[n],l=e._getVersion,l=l(e._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[e,l]:r.mutableSourceEagerHydrationData.push(e,l);return new bl(r)},Zn.render=function(n,r,e){if(!ni(r))throw Error(u(200));return ri(null,n,r,!1,e)},Zn.unmountComponentAtNode=function(n){if(!ni(n))throw Error(u(40));return n._reactRootContainer?(ye(function(){ri(null,null,n,!1,function(){n._reactRootContainer=null,n[Tr]=null})}),!0):!1},Zn.unstable_batchedUpdates=bo,Zn.unstable_renderSubtreeIntoContainer=function(n,r,e,t){if(!ni(e))throw Error(u(200));if(n==null||n._reactInternals===void 0)throw Error(u(38));return ri(n,r,e,!1,t)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var Dc;function nf(){if(Dc)return fs.exports;Dc=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),fs.exports=Fd(),fs.exports}var Oc;function Td(){if(Oc)return ti;Oc=1;var s=nf();return ti.createRoot=s.createRoot,ti.hydrateRoot=s.hydrateRoot,ti}var Nd=Td(),D=Ss();const Id=Ld(D),Ad=Ed({__proto__:null,default:Id},[D]);nf();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vt(){return Vt=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(s[a]=u[a])}return s},Vt.apply(this,arguments)}var ie;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ie||(ie={}));const Mc="popstate";function Dd(s){s===void 0&&(s={});function i(c,p){let{pathname:m="/",search:h="",hash:k=""}=Le(c.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),ms("",{pathname:m,search:h,hash:k},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function u(c,p){let m=c.document.querySelector("base"),h="";if(m&&m.getAttribute("href")){let k=c.location.href,y=k.indexOf("#");h=y===-1?k:k.slice(0,y)}return h+"#"+(typeof p=="string"?p:oi(p))}function a(c,p){fi(c.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(p)+")")}return Md(i,u,a,s)}function Cn(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function fi(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Od(){return Math.random().toString(36).substr(2,8)}function jc(s,i){return{usr:s.state,key:s.key,idx:i}}function ms(s,i,u,a){return u===void 0&&(u=null),Vt({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?Le(i):i,{state:u,key:i&&i.key||a||Od()})}function oi(s){let{pathname:i="/",search:u="",hash:a=""}=s;return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),a&&a!=="#"&&(i+=a.charAt(0)==="#"?a:"#"+a),i}function Le(s){let i={};if(s){let u=s.indexOf("#");u>=0&&(i.hash=s.substr(u),s=s.substr(0,u));let a=s.indexOf("?");a>=0&&(i.search=s.substr(a),s=s.substr(0,a)),s&&(i.pathname=s)}return i}function Md(s,i,u,a){a===void 0&&(a={});let{window:c=document.defaultView,v5Compat:p=!1}=a,m=c.history,h=ie.Pop,k=null,y=L();y==null&&(y=0,m.replaceState(Vt({},m.state,{idx:y}),""));function L(){return(m.state||{idx:null}).idx}function R(){h=ie.Pop;let N=L(),b=N==null?null:N-y;y=N,k&&k({action:h,location:A.location,delta:b})}function _(N,b){h=ie.Push;let rn=ms(A.location,N,b);u&&u(rn,N),y=L()+1;let en=jc(rn,y),an=A.createHref(rn);try{m.pushState(en,"",an)}catch(Rn){if(Rn instanceof DOMException&&Rn.name==="DataCloneError")throw Rn;c.location.assign(an)}p&&k&&k({action:h,location:A.location,delta:1})}function C(N,b){h=ie.Replace;let rn=ms(A.location,N,b);u&&u(rn,N),y=L();let en=jc(rn,y),an=A.createHref(rn);m.replaceState(en,"",an),p&&k&&k({action:h,location:A.location,delta:0})}function V(N){let b=c.location.origin!=="null"?c.location.origin:c.location.href,rn=typeof N=="string"?N:oi(N);return rn=rn.replace(/ $/,"%20"),Cn(b,"No window.location.(origin|href) available to create URL for href: "+rn),new URL(rn,b)}let A={get action(){return h},get location(){return s(c,m)},listen(N){if(k)throw new Error("A history only accepts one active listener");return c.addEventListener(Mc,R),k=N,()=>{c.removeEventListener(Mc,R),k=null}},createHref(N){return i(c,N)},createURL:V,encodeLocation(N){let b=V(N);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:_,replace:C,go(N){return m.go(N)}};return A}var Kc;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Kc||(Kc={}));function jd(s,i,u){return u===void 0&&(u="/"),Kd(s,i,u)}function Kd(s,i,u,a){let c=typeof i=="string"?Le(i):i,p=Es(c.pathname||"/",u);if(p==null)return null;let m=rf(s);Bd(m);let h=null;for(let k=0;h==null&&k<m.length;++k){let y=Yd(p);h=Qd(m[k],y)}return h}function rf(s,i,u,a){i===void 0&&(i=[]),u===void 0&&(u=[]),a===void 0&&(a="");let c=(p,m,h)=>{let k={relativePath:h===void 0?p.path||"":h,caseSensitive:p.caseSensitive===!0,childrenIndex:m,route:p};k.relativePath.startsWith("/")&&(Cn(k.relativePath.startsWith(a),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(a.length));let y=se([a,k.relativePath]),L=u.concat(k);p.children&&p.children.length>0&&(Cn(p.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),rf(p.children,i,L,y)),!(p.path==null&&!p.index)&&i.push({path:y,score:Xd(y,p.index),routesMeta:L})};return s.forEach((p,m)=>{var h;if(p.path===""||!((h=p.path)!=null&&h.includes("?")))c(p,m);else for(let k of ef(p.path))c(p,m,k)}),i}function ef(s){let i=s.split("/");if(i.length===0)return[];let[u,...a]=i,c=u.endsWith("?"),p=u.replace(/\?$/,"");if(a.length===0)return c?[p,""]:[p];let m=ef(a.join("/")),h=[];return h.push(...m.map(k=>k===""?p:[p,k].join("/"))),c&&h.push(...m),h.map(k=>s.startsWith("/")&&k===""?"/":k)}function Bd(s){s.sort((i,u)=>i.score!==u.score?u.score-i.score:Jd(i.routesMeta.map(a=>a.childrenIndex),u.routesMeta.map(a=>a.childrenIndex)))}const $d=/^:[\w-]+$/,Vd=3,Ud=2,Hd=1,Wd=10,qd=-2,Bc=s=>s==="*";function Xd(s,i){let u=s.split("/"),a=u.length;return u.some(Bc)&&(a+=qd),i&&(a+=Ud),u.filter(c=>!Bc(c)).reduce((c,p)=>c+($d.test(p)?Vd:p===""?Hd:Wd),a)}function Jd(s,i){return s.length===i.length&&s.slice(0,-1).every((a,c)=>a===i[c])?s[s.length-1]-i[i.length-1]:0}function Qd(s,i,u){let{routesMeta:a}=s,c={},p="/",m=[];for(let h=0;h<a.length;++h){let k=a[h],y=h===a.length-1,L=p==="/"?i:i.slice(p.length)||"/",R=Gd({path:k.relativePath,caseSensitive:k.caseSensitive,end:y},L),_=k.route;if(!R)return null;Object.assign(c,R.params),m.push({params:c,pathname:se([p,R.pathname]),pathnameBase:th(se([p,R.pathnameBase])),route:_}),R.pathnameBase!=="/"&&(p=se([p,R.pathnameBase]))}return m}function Gd(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[u,a]=Zd(s.path,s.caseSensitive,s.end),c=i.match(u);if(!c)return null;let p=c[0],m=p.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:a.reduce((y,L,R)=>{let{paramName:_,isOptional:C}=L;if(_==="*"){let A=h[R]||"";m=p.slice(0,p.length-A.length).replace(/(.)\/+$/,"$1")}const V=h[R];return C&&!V?y[_]=void 0:y[_]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:p,pathnameBase:m,pattern:s}}function Zd(s,i,u){i===void 0&&(i=!1),u===void 0&&(u=!0),fi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let a=[],c="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,h,k)=>(a.push({paramName:h,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(a.push({paramName:"*"}),c+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?c+="\\/*$":s!==""&&s!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),a]}function Yd(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return fi(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Es(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let u=i.endsWith("/")?i.length-1:i.length,a=s.charAt(u);return a&&a!=="/"?null:s.slice(u)||"/"}const bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nh=s=>bd.test(s);function rh(s,i){i===void 0&&(i="/");let{pathname:u,search:a="",hash:c=""}=typeof s=="string"?Le(s):s,p;if(u)if(nh(u))p=u;else{if(u.includes("//")){let m=u;u=u.replace(/\/\/+/g,"/"),fi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+u))}u.startsWith("/")?p=$c(u.substring(1),"/"):p=$c(u,i)}else p=i;return{pathname:p,search:lh(a),hash:ih(c)}}function $c(s,i){let u=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(c=>{c===".."?u.length>1&&u.pop():c!=="."&&u.push(c)}),u.length>1?u.join("/"):"/"}function hs(s,i,u,a){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+u+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eh(s){return s.filter((i,u)=>u===0||i.route.path&&i.route.path.length>0)}function tf(s,i){let u=eh(s);return i?u.map((a,c)=>c===u.length-1?a.pathname:a.pathnameBase):u.map(a=>a.pathnameBase)}function lf(s,i,u,a){a===void 0&&(a=!1);let c;typeof s=="string"?c=Le(s):(c=Vt({},s),Cn(!c.pathname||!c.pathname.includes("?"),hs("?","pathname","search",c)),Cn(!c.pathname||!c.pathname.includes("#"),hs("#","pathname","hash",c)),Cn(!c.search||!c.search.includes("#"),hs("#","search","hash",c)));let p=s===""||c.pathname==="",m=p?"/":c.pathname,h;if(m==null)h=u;else{let R=i.length-1;if(!a&&m.startsWith("..")){let _=m.split("/");for(;_[0]==="..";)_.shift(),R-=1;c.pathname=_.join("/")}h=R>=0?i[R]:"/"}let k=rh(c,h),y=m&&m!=="/"&&m.endsWith("/"),L=(p||m===".")&&u.endsWith("/");return!k.pathname.endsWith("/")&&(y||L)&&(k.pathname+="/"),k}const se=s=>s.join("/").replace(/\/\/+/g,"/"),th=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),lh=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ih=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function oh(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const of=["post","put","patch","delete"];new Set(of);const sh=["get",...of];new Set(sh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ut(){return Ut=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(s[a]=u[a])}return s},Ut.apply(this,arguments)}const Ls=D.createContext(null),uh=D.createContext(null),Re=D.createContext(null),pi=D.createContext(null),_e=D.createContext({outlet:null,matches:[],isDataRoute:!1}),sf=D.createContext(null);function ah(s,i){let{relative:u}=i===void 0?{}:i;Ht()||Cn(!1);let{basename:a,navigator:c}=D.useContext(Re),{hash:p,pathname:m,search:h}=af(s,{relative:u}),k=m;return a!=="/"&&(k=m==="/"?a:se([a,m])),c.createHref({pathname:k,search:h,hash:p})}function Ht(){return D.useContext(pi)!=null}function Wt(){return Ht()||Cn(!1),D.useContext(pi).location}function uf(s){D.useContext(Re).static||D.useLayoutEffect(s)}function ch(){let{isDataRoute:s}=D.useContext(_e);return s?Eh():fh()}function fh(){Ht()||Cn(!1);let s=D.useContext(Ls),{basename:i,future:u,navigator:a}=D.useContext(Re),{matches:c}=D.useContext(_e),{pathname:p}=Wt(),m=JSON.stringify(tf(c,u.v7_relativeSplatPath)),h=D.useRef(!1);return uf(()=>{h.current=!0}),D.useCallback(function(y,L){if(L===void 0&&(L={}),!h.current)return;if(typeof y=="number"){a.go(y);return}let R=lf(y,JSON.parse(m),p,L.relative==="path");s==null&&i!=="/"&&(R.pathname=R.pathname==="/"?i:se([i,R.pathname])),(L.replace?a.replace:a.push)(R,L.state,L)},[i,a,m,p,s])}function af(s,i){let{relative:u}=i===void 0?{}:i,{future:a}=D.useContext(Re),{matches:c}=D.useContext(_e),{pathname:p}=Wt(),m=JSON.stringify(tf(c,a.v7_relativeSplatPath));return D.useMemo(()=>lf(s,JSON.parse(m),p,u==="path"),[s,m,p,u])}function ph(s,i){return dh(s,i)}function dh(s,i,u,a){Ht()||Cn(!1);let{navigator:c}=D.useContext(Re),{matches:p}=D.useContext(_e),m=p[p.length-1],h=m?m.params:{};m&&m.pathname;let k=m?m.pathnameBase:"/";m&&m.route;let y=Wt(),L;if(i){var R;let N=typeof i=="string"?Le(i):i;k==="/"||(R=N.pathname)!=null&&R.startsWith(k)||Cn(!1),L=N}else L=y;let _=L.pathname||"/",C=_;if(k!=="/"){let N=k.replace(/^\//,"").split("/");C="/"+_.replace(/^\//,"").split("/").slice(N.length).join("/")}let V=jd(s,{pathname:C}),A=yh(V&&V.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:se([k,c.encodeLocation?c.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?k:se([k,c.encodeLocation?c.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),p,u,a);return i&&A?D.createElement(pi.Provider,{value:{location:Ut({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:ie.Pop}},A):A}function hh(){let s=Sh(),i=oh(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),u=s instanceof Error?s.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},i),u?D.createElement("pre",{style:c},u):null,null)}const mh=D.createElement(hh,null);class gh extends D.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?D.createElement(_e.Provider,{value:this.props.routeContext},D.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vh(s){let{routeContext:i,match:u,children:a}=s,c=D.useContext(Ls);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),D.createElement(_e.Provider,{value:i},a)}function yh(s,i,u,a){var c;if(i===void 0&&(i=[]),u===void 0&&(u=null),a===void 0&&(a=null),s==null){var p;if(!u)return null;if(u.errors)s=u.matches;else if((p=a)!=null&&p.v7_partialHydration&&i.length===0&&!u.initialized&&u.matches.length>0)s=u.matches;else return null}let m=s,h=(c=u)==null?void 0:c.errors;if(h!=null){let L=m.findIndex(R=>R.route.id&&(h==null?void 0:h[R.route.id])!==void 0);L>=0||Cn(!1),m=m.slice(0,Math.min(m.length,L+1))}let k=!1,y=-1;if(u&&a&&a.v7_partialHydration)for(let L=0;L<m.length;L++){let R=m[L];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(y=L),R.route.id){let{loaderData:_,errors:C}=u,V=R.route.loader&&_[R.route.id]===void 0&&(!C||C[R.route.id]===void 0);if(R.route.lazy||V){k=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}return m.reduceRight((L,R,_)=>{let C,V=!1,A=null,N=null;u&&(C=h&&R.route.id?h[R.route.id]:void 0,A=R.route.errorElement||mh,k&&(y<0&&_===0?(Lh("route-fallback"),V=!0,N=null):y===_&&(V=!0,N=R.route.hydrateFallbackElement||null)));let b=i.concat(m.slice(0,_+1)),rn=()=>{let en;return C?en=A:V?en=N:R.route.Component?en=D.createElement(R.route.Component,null):R.route.element?en=R.route.element:en=L,D.createElement(vh,{match:R,routeContext:{outlet:L,matches:b,isDataRoute:u!=null},children:en})};return u&&(R.route.ErrorBoundary||R.route.errorElement||_===0)?D.createElement(gh,{location:u.location,revalidation:u.revalidation,component:A,error:C,children:rn(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):rn()},null)}var cf=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(cf||{}),ff=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ff||{});function kh(s){let i=D.useContext(Ls);return i||Cn(!1),i}function xh(s){let i=D.useContext(uh);return i||Cn(!1),i}function wh(s){let i=D.useContext(_e);return i||Cn(!1),i}function pf(s){let i=wh(),u=i.matches[i.matches.length-1];return u.route.id||Cn(!1),u.route.id}function Sh(){var s;let i=D.useContext(sf),u=xh(),a=pf();return i!==void 0?i:(s=u.errors)==null?void 0:s[a]}function Eh(){let{router:s}=kh(cf.UseNavigateStable),i=pf(ff.UseNavigateStable),u=D.useRef(!1);return uf(()=>{u.current=!0}),D.useCallback(function(c,p){p===void 0&&(p={}),u.current&&(typeof c=="number"?s.navigate(c):s.navigate(c,Ut({fromRouteId:i},p)))},[s,i])}const Vc={};function Lh(s,i,u){Vc[s]||(Vc[s]=!0)}function Rh(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function gs(s){Cn(!1)}function _h(s){let{basename:i="/",children:u=null,location:a,navigationType:c=ie.Pop,navigator:p,static:m=!1,future:h}=s;Ht()&&Cn(!1);let k=i.replace(/^\/*/,"/"),y=D.useMemo(()=>({basename:k,navigator:p,static:m,future:Ut({v7_relativeSplatPath:!1},h)}),[k,h,p,m]);typeof a=="string"&&(a=Le(a));let{pathname:L="/",search:R="",hash:_="",state:C=null,key:V="default"}=a,A=D.useMemo(()=>{let N=Es(L,k);return N==null?null:{location:{pathname:N,search:R,hash:_,state:C,key:V},navigationType:c}},[k,L,R,_,C,V,c]);return A==null?null:D.createElement(Re.Provider,{value:y},D.createElement(pi.Provider,{children:u,value:A}))}function Ch(s){let{children:i,location:u}=s;return ph(vs(i),u)}new Promise(()=>{});function vs(s,i){i===void 0&&(i=[]);let u=[];return D.Children.forEach(s,(a,c)=>{if(!D.isValidElement(a))return;let p=[...i,c];if(a.type===D.Fragment){u.push.apply(u,vs(a.props.children,p));return}a.type!==gs&&Cn(!1),!a.props.index||!a.props.children||Cn(!1);let m={id:a.props.id||p.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(m.children=vs(a.props.children,p)),u.push(m)}),u}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var a in u)Object.prototype.hasOwnProperty.call(u,a)&&(s[a]=u[a])}return s},ys.apply(this,arguments)}function Ph(s,i){if(s==null)return{};var u={},a=Object.keys(s),c,p;for(p=0;p<a.length;p++)c=a[p],!(i.indexOf(c)>=0)&&(u[c]=s[c]);return u}function zh(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Fh(s,i){return s.button===0&&(!i||i==="_self")&&!zh(s)}const Th=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nh="6";try{window.__reactRouterVersion=Nh}catch{}const Ih="startTransition",Uc=Ad[Ih];function Ah(s){let{basename:i,children:u,future:a,window:c}=s,p=D.useRef();p.current==null&&(p.current=Dd({window:c,v5Compat:!0}));let m=p.current,[h,k]=D.useState({action:m.action,location:m.location}),{v7_startTransition:y}=a||{},L=D.useCallback(R=>{y&&Uc?Uc(()=>k(R)):k(R)},[k,y]);return D.useLayoutEffect(()=>m.listen(L),[m,L]),D.useEffect(()=>Rh(a),[a]),D.createElement(_h,{basename:i,children:u,location:h.location,navigationType:h.action,navigator:m,future:a})}const Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Oh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,si=D.forwardRef(function(i,u){let{onClick:a,relative:c,reloadDocument:p,replace:m,state:h,target:k,to:y,preventScrollReset:L,viewTransition:R}=i,_=Ph(i,Th),{basename:C}=D.useContext(Re),V,A=!1;if(typeof y=="string"&&Oh.test(y)&&(V=y,Dh))try{let en=new URL(window.location.href),an=y.startsWith("//")?new URL(en.protocol+y):new URL(y),Rn=Es(an.pathname,C);an.origin===en.origin&&Rn!=null?y=Rn+an.search+an.hash:A=!0}catch{}let N=ah(y,{relative:c}),b=Mh(y,{replace:m,state:h,target:k,preventScrollReset:L,relative:c,viewTransition:R});function rn(en){a&&a(en),en.defaultPrevented||b(en)}return D.createElement("a",ys({},_,{href:V||N,onClick:A||p?a:rn,ref:u,target:k}))});var Hc;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Hc||(Hc={}));var Wc;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Wc||(Wc={}));function Mh(s,i){let{target:u,replace:a,state:c,preventScrollReset:p,relative:m,viewTransition:h}=i===void 0?{}:i,k=ch(),y=Wt(),L=af(s,{relative:m});return D.useCallback(R=>{if(Fh(R,u)){R.preventDefault();let _=a!==void 0?a:oi(y)===oi(L);k(s,{replace:_,state:c,preventScrollReset:p,relative:m,viewTransition:h})}},[y,k,L,a,c,u,s,p,m,h])}const Y={bg:"#0a0e17",card:"#111827",cardHover:"#1a2332",surface:"#0f1623",accent:"#f59e0b",accentDim:"#b45309",accentSoft:"rgba(245,158,11,0.08)",theta:"#3b82f6",thetaSoft:"rgba(59,130,246,0.12)",eta:"#ef4444",etaSoft:"rgba(239,68,68,0.12)",dual:"#8b5cf6",dualSoft:"rgba(139,92,246,0.08)",green:"#10b981",cyan:"#06b6d4",text:"#e5e7eb",textDim:"#6b7280",textMuted:"#374151",border:"#1f2937"},wr={mono:"'JetBrains Mono', 'Fira Code', monospace",serif:"'Playfair Display', Georgia, serif"},sg={background:Y.card,borderRadius:10,border:`1px solid ${Y.border}`};function ug(s,i,u){const a=s.current;if(!a)return null;const c=a.getContext("2d"),p=window.devicePixelRatio||1;return a.width=i*p,a.height=u*p,c.scale(p,p),c.clearRect(0,0,i,u),c}function ag(s,i,u){const a=s.createLinearGradient(0,i,0,u);return a.addColorStop(0,"rgba(245,158,11,0.25)"),a.addColorStop(1,"rgba(245,158,11,0.01)"),a}const jh="modulepreload",Kh=function(s){return"/infogeo-book/"+s},qc={},cr=function(i,u,a){let c=Promise.resolve();if(u&&u.length>0){let m=function(y){return Promise.all(y.map(L=>Promise.resolve(L).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),k=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));c=m(u.map(y=>{if(y=Kh(y),y in qc)return;qc[y]=!0;const L=y.endsWith(".css"),R=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${R}`))return;const _=document.createElement("link");if(_.rel=L?"stylesheet":jh,L||(_.as="script"),_.crossOrigin="",_.href=y,k&&_.setAttribute("nonce",k),document.head.appendChild(_),L)return new Promise((C,V)=>{_.addEventListener("load",C),_.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${y}`)))})}))}function p(m){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=m,window.dispatchEvent(h),!h.defaultPrevented)throw m}return c.then(m=>{for(const h of m||[])h.status==="rejected"&&p(h.reason);return i().catch(p)})},Bh=`# 서문\r
\r
---\r
\r
## 이 교재는 왜 존재하는가\r
\r
어떤 것들은 너무 아름다워서 소수의 전문가에게만 보이는 것이 부당하다.\r
\r
정보기하학(Information Geometry)이 그렇다. Shun'ichi Amari가 1980년대에 발견한 이 수학적 구조는, 확률과 통계의 세계 밑에 숨어 있는 놀라운 기하학적 풍경을 드러냈다. 확률분포가 곡면 위의 점이 되고, 학습이 그 곡면 위의 경로가 되고, 추론이 그림자를 내려찍는 사영이 되는 세계. 그 세계에서는 덧셈으로 걷는 길과 곱셈으로 걷는 길이 같은 두 점을 잇되 다른 곳을 지나가며, 이 두 길의 긴장이 통계적 추론의 본질을 이룬다.\r
\r
문제는 이 풍경을 보려면 미분기하학, 통계학, 볼록 해석학의 교차점에 서야 한다는 것이다. 대학원 수준의 수학이 진입장벽처럼 서 있다. 그래서 대부분의 사람들은 이 풍경의 존재조차 모른 채 지나간다.\r
\r
이 교재는 그 장벽을 우회하려는 시도다.\r
\r
수식을 없애는 것이 아니다. 수식이 필요해지는 순간까지 최대한 버티는 것이다. 학생이 "그래서 그걸 어떻게 정확히 표현하는데요?"라고 스스로 물을 때 비로소 수식이 등장하면, 그 수식은 짐이 아니라 선물이 된다. 우리는 그 순간을 설계한다.\r
\r
---\r
\r
## 집필 원칙\r
\r
이 교재는 네 가지 원칙 위에 서 있다.\r
\r
### 한 절에 한 개념\r
\r
교재를 쓰는 사람이 빠지기 가장 쉬운 함정이 있다. 두 개념의 연결이 보이면 한 절에 욱여넣고 싶어진다. "KL 발산은 비대칭인데 이건 엔트로피와 이런 관계가 있고..." 저자에게는 하나의 문장이지만, 학생에게는 처음 보는 개념 두 개가 동시에 쏟아지는 것이다.\r
\r
이 교재에서 각 절은 하나의 개념만 심는다. "확률분포가 점이다"와 "그 점들의 공간이 삼각형이다"는 별도의 절이다. "거리가 비대칭일 수 있다"와 "KL 발산이 그런 비대칭 거리다"도 별도의 절이다. 연결은 학생이 스스로 발견한다. "아, 이것과 저것이 같은 거였구나!"라는 순간은 저자가 미리 보여주는 것이 아니라 학생의 것이어야 한다.\r
\r
### 왜?로 시작한다\r
\r
매 장은 "왜?"라는 질문으로 시작한다. 정의가 아니라 질문이 먼저다.\r
\r
"볼록함수란..." 이 아니라 "왜 구슬은 그릇 바닥을 찾는데 안장 위에선 못 찾는가?"가 먼저다. "르장드르 변환의 정의는..." 이 아니라 "같은 볼록함수를 완전히 다른 언어로 다시 쓸 수 있다면?"이 먼저다. 학생이 답을 원하는 상태에 도달한 후에야 답을 준다.\r
\r
### 삼단 진행: 비유 → 인터랙티브 → 코드\r
\r
각 장은 세 단계를 거친다.\r
\r
**비유**가 먼저 온다. 거실에서, 일상의 언어로 이해하는 단계다. "무빙워크가 있는 공항 복도를 상상해보자. 순방향은 3분, 역방향은 10분. 같은 두 지점인데 방향에 따라 거리가 다르다." 이것으로 비대칭 거리의 감각을 심는다.\r
\r
**JSX 인터랙티브**가 그 다음이다. 슬라이더를 움직이고, 점을 드래그하고, 그래프가 실시간으로 바뀌는 것을 보면서 손으로 만져보는 단계다. 비유가 심은 감각을 시각적으로 확인하고 확장한다. "아, 정말 이쪽에서 저쪽은 가까운데 반대는 멀구나."\r
\r
**파이썬 코드**가 마지막이다. 수식 대신 코드가 진실을 말한다. \`kl = np.sum(p * np.log(p / q))\`는 정의 그 자체이면서 동시에 실행 가능한 문장이다. 학생은 코드를 돌려보면서 "p와 q를 바꾸면 값이 달라진다"를 직접 확인한다. 그리고 그제야 수식이 필요해진다 — 이 코드를 한 줄로 쓰면 어떻게 되는가? 그것이 수식이다.\r
\r
### 나선형 반복\r
\r
같은 개념이 다른 깊이에서 다시 나타난다. "첫 번째 길 — 덧셈으로 걷기"에서 직관으로 만진 학생은, "패턴이 있는 분포들"에서 지수족의 정준분해를 배울 때 "아, 그때 그 길!"을 재발견한다. "르장드르 변환"에서 처음 본 르장드르 변환은 "θ와 η를 잇는 다리"에서 θ↔η 좌표 변환으로 다시 나타나며, "아, 여기서 쓰이는 거였구나!"가 된다.\r
\r
한 번에 이해되지 않아도 된다. 다음 만남에서 더 깊이 보게 된다. 수학은 한 번에 관통하는 것이 아니라 여러 번 스쳐 지나가면서 점점 선명해지는 것이다.\r
\r
---\r
\r
## 이 교재를 어떻게 읽을 것인가\r
\r
### 수학을 두려워하는 사람에게\r
\r
이 교재는 고등학교 수학수준으로 접근 가능하다. 미적분의 기본 개념(함수, 기울기, 넓이)을 알면 된다. 선형대수나 미분기하학은 전혀 가정하지 않는다. 물론 고급수학이 등장하는 것은 어쩔 수 없다. 하지만 수식의 벽에 막히지 않도록 비유와 시각화, 실행 가능한 코드를 배치했다. 문제를 풀게 만드는 것이 아니라 납득시키고 실행해서 응용해볼 수 있게 하고자 한다.\r
\r
다만, 코드를 직접 돌려보는 것은 필수다. 비유를 읽고 "알겠다"고 넘어가면 절반만 아는 것이다. JSX 시각화를 직접 만져보고, 파이썬 코드를 직접 실행하고, 숫자가 바뀌는 것을 눈으로 확인해야 한다. 수학의 체화는 손끝에서 일어난다.\r
\r
### 수학을 이미 아는 사람에게\r
\r
미분기하학이나 통계학을 이미 아는 사람에게도 이 교재는 가치가 있다. 엄밀한 수학의 언어로는 보이지 않던 직관이 비유와 시각화를 통해 드러나는 경우가 많다. "e-접속과 m-접속의 쌍대성"을 정리로 알고 있는 것과, "덧셈의 길과 곱셈의 길이 같은 두 점을 잇되 다른 곳을 지나간다"는 것을 시각적으로 체감하는 것은 다른 종류의 앎이다.\r
\r
수식을 이미 아는 사람은 비유 부분을 "그 수식이 진짜로 말하고 있는 것"을 재발견하는 기회로 삼으면 좋다.\r
\r
### 순서에 대하여\r
\r
이 교재는 네 막의 여행이다.\r
\r
**1막: 기하학의 눈**\r
\r
| Part | 장 | 핵심 질문 |\r
|------|-----|-----------|\r
| I. 무대 | 1장 왜 정보기하학인가 | 왜 이 여행을 시작하는가? |\r
| II. 점과 거리 | 2장 점, 3장 거리 | 분포가 점이고, 거리가 비대칭이라면? |\r
| III. 길 | 4장 길 | 두 점 사이를 걷는 방법이 두 가지? |\r
\r
*전환 ①: 같은 세계, 다른 눈*\r
\r
**2막: 정보의 눈**\r
\r
| Part | 장 | 핵심 질문 |\r
|------|-----|-----------|\r
| IV. 놀라움 | 5장 놀라움과 정보 | 놀라움을 숫자로 쓸 수 있는가? |\r
| V. 볼록성 | 6장 볼록함수의 쌍대 | 함수를 접선으로 다시 쓸 수 있다면? |\r
\r
*전환 ②: 두 눈을 동시에*\r
\r
**3막: 정보기하학 — 이론**\r
\r
| Part | 장 | 핵심 질문 |\r
|------|-----|-----------|\r
| VI. 구조 | 7장 지수족, 8장 구부러진 땅 | 분포들의 공간은 어떤 모양인가? |\r
| VII. 곡률과 확신 | 9장 곡률, 10장 무지와 확신 | 한 걸음의 크기와 방향은? |\r
| VIII. 추론과 종합 | 11장 추론, 12장 수렴, 13장 전체 지도 | 모든 것이 하나의 그림이 되는가? |\r
\r
*전환 ③: 도구를 들고 세계로*\r
\r
**4막: 정보기하학 — 응용**\r
\r
| Part | 장 | 핵심 질문 |\r
|------|-----|-----------|\r
| IX. 생성 | 14장 디퓨전, 15장 플로우 매칭 | 노이즈에서 데이터를 만드는 두 가지 길은? |\r
| X. 정렬 | 16장 넓히기와 좁히기 | 넓힌 풍경을 얼마나, 어떻게 좁힐 것인가? |\r
| XI. 최적화 | 17장 스케일링 | 한 걸음의 크기를 공정하게 만드는 법은? |\r
\r
*에필로그: 지도의 가장자리에서*\r
\r
가능하면 처음부터 순서대로 읽기를 권한다. 각 장이 이전 장의 감각 위에 쌓이도록 설계되어 있다. 그러나 현실적으로, Part II(점과 거리)를 읽은 후에는 관심에 따라 Part III(길)이나 Part V(볼록성)로 건너뛰어도 무방하다. 다만 3장의 KL 발산 절은 읽어야 한다 — 이후 추론(11장)에서 필수다. Part VI(구조)과 Part VII(곡률과 확신)은 반드시 Part V 이후에 읽어야 한다. 르장드르 변환 없이 지수족의 쌍대 구조를 이해하는 것은 불가능하다.\r
\r
3막의 정점은 Part VIII(추론과 종합)이다. 추론의 기하학에서 사영을 배우고, 수렴에서 EM 알고리즘으로 사영의 반복을 경험한 뒤, 전체 지도에서 이 교재의 모든 도구가 하나의 그림 안에 들어 있음을 확인한다. Part VII까지의 모든 개념이 여기서 합류하므로, 반드시 순서대로 도달하기를 권한다.\r
\r
4막은 네 개의 장으로 이루어져 있다. 14장(디퓨전)과 15장(플로우 매칭)은 생성의 이야기이고, 16장(넓히기와 좁히기)은 언어모델 훈련의 이야기이고, 17장(스케일링)은 그러한 모델을 훈련하는 과정을 최적화하는 이야기다. 14장과 15장은 연결되어 있으므로 순서대로 읽기를 권한다. 16장은 10장과 11장의 최종 회수이므로 3막까지를 마친 뒤에 읽어야 한다. 17장은 9장의 Fisher 계량을 전제한다. 스케일링에서 Fisher 계량이 현실의 최적화 문제에 작동하는 것을 보고, 이 교재가 시작된 원점으로 돌아온다. 증명이나 유도 대신, "이 도구 없이는 읽히지 않던 문장이 이제는 그림이 된다"는 경험이 목표다.\r
\r
---\r
\r
## 실용적 가치: AI 세상을 여행하는 언어\r
\r
이 교재를 쓰게 된 동기에는 순수한 지적 아름다움에 대한 경탄도 있지만, 지극히 실용적인 이유도 있다.\r
\r
### AI를 자신의 눈으로 이해하려면\r
\r
2020년대의 AI는 인류 역사상 가장 빠르게 발전하는 기술이다. 매주 새로운 모델이 나오고, 매달 패러다임이 바뀌는 것처럼 보인다. 대부분의 사람들은 이 변화를 뉴스 기사와 SNS 요약으로 따라간다. 그것은 여행 블로그를 읽는 것과 같다 — 누군가의 눈으로 본 풍경을 전해 듣는 것이지, 자신이 그 땅을 밟는 것이 아니다.\r
\r
AI를 자신의 눈으로 이해하려면 논문을 읽고 관련 구현체의 github 코드와 이슈에 등장하는 토론들을 읽어야 한다. 그것이 유일한 길이다. 다른 사람의 요약과 해석을 거치지 않고, 연구자가 실제로 무엇을 발견했고 무엇을 주장하는지를 원문과 코드로 확인해야 한다. 그래야 과장과 실체를 구분할 수 있고, 진짜 중요한 발전과 마케팅 소음을 구분할 수 있다.\r
\r
문제는, AI 논문에는 언어가 있다는 것이다.\r
\r
컴퓨터 세상에 가서 여행을 하려면 자바스크립트나 파이썬 같은 컴퓨터 언어를 알아야 한다. 그 언어를 모르면 코드는 그저 알 수 없는 기호의 나열이다. AI 세상도 마찬가지다. AI 논문의 언어는 선형대수, 확률론, 최적화, 그리고 정보기하학이다. 이 중에서 정보기하학은 가장 덜 알려져 있지만, 점점 더 많은 현대 AI 연구의 밑바닥에 깔려 있는 언어다.\r
\r
자연 기울기(natural gradient)가 왜 일반 기울기보다 나은지. 변분 추론(variational inference)에서 KL 발산의 방향이 왜 중요한지. Fisher 정보 행렬이 왜 사전훈련과 파인튜닝의 균형에 등장하는지. 와서스타인 거리(Wasserstein distance)와 KL 발산이 왜 다른 종류의 질문에 답하는지. 이 모든 것의 밑에 정보기하학의 구조가 있다.\r
\r
이 교재를 마치고 나면, 이런 문장들이 읽히기 시작한다. 수식의 숲에서 길을 잃지 않고, "아, 이건 e-사영이고 저건 m-사영이구나"라고 위에서 내려다볼 수 있게 된다.\r
\r
### 마법의 한 마디\r
\r
한 가지 비밀 하나를 공유하겠다. 실용적이면서도, 솔직히 약간 비이성적일 정도로 효과적인 방법이다.\r
\r
Claude 같은 AI 모델에게 최신 논문을 던져주고 이렇게 말해보라:\r
\r
> "이 논문을 정보기하학의 관점에서 설명해줘."\r
\r
이 한 마디가 마법처럼 작동하는 이유가 있다. 정보기하학은 확률과 통계의 메타 언어다. 개별 알고리즘의 세부사항 위에 있는, 구조의 언어다. 논문의 핵심 아이디어가 "어떤 공간에서, 어떤 거리를 재고, 어떤 방향으로 사영하는가"라는 프레임으로 번역되면, 놀라울 정도로 많은 기술적 디테일이 하나의 기하학적 그림으로 정리된다.\r
\r
물론, 이 마법이 작동하려면 전제 조건이 있다. Claude의 설명을 **알아들을 수 있어야 한다.** 정보기하학의 기본 어휘 — 매니폴드, 측지선, 쌍대 좌표, 발산, 사영 — 를 체화하고 있어야 한다. Claude가 "이 알고리즘은 본질적으로 자연모수 공간에서의 e-사영입니다"라고 말했을 때, 그 문장이 머릿속에서 그림이 되어야 한다.\r
\r
이 교재는 그 어휘를 심는 책이다.\r
\r
---\r
\r
## 감사의 말\r
\r
이 교재의 뼈대가 되는 수학적 구조는 Shun'ichi Amari의 연구에 빚지고 있다. 지수족의 플래시카드 형식은 Frank Nielsen과 Vincent Garcia의 작업(arXiv:0911.4863)에서 영감을 받았다. Herbert Callen의 열역학 교재는 르장드르 변환의 물리적 직관을 가르쳐주었고, Boyd와 Vandenberghe의 볼록 최적화 교재는 쌍대성의 수학적 명료함을 보여주었다.\r
\r
그리고 이 교재의 모든 비유, 시각화, 코드 예제는 하나의 대화에서 태어났다. AI와 인간이 서로의 질문에 답하면서, "바보 같은 질문"이 가장 깊은 통찰로 이어지는 과정을 거쳐 만들어졌다. 바보 같은 질문은 없다. 있다면, 그것은 아직 제대로 답하지 못한 질문일 뿐이다.\r
\r
---\r
\r
## 표기법에 대하여\r
\r
이 교재에서 수식은 최소한으로 사용된다. 대신 파이썬 코드가 수식의 역할을 한다. 그러나 장이 진행될수록, 코드 옆에 대응하는 수학적 표기를 병기한다. 다음은 교재 전체에서 반복적으로 등장하는 기호들이다.\r
\r
| 기호 | 의미 | 처음 등장 |\r
|------|------|-----------|\r
| p | 진짜 분포 (true/target) — "현실" | 확률분포는 점이다 |\r
| q | 모형/근사 분포 (model/approximation) — "지도" | 확률분포는 점이다 |\r
| θ | 자연모수 (natural parameter) | 자연모수 θ |\r
| η | 기대모수 (expectation parameter) | 기대모수 η |\r
| F(θ) | 로그정규화자 (log-normalizer) | 패턴이 있는 분포들 |\r
| F*(η) | F의 르장드르 변환 (convex conjugate) | θ와 η를 잇는 다리 |\r
| t(x) | 충분통계량 (sufficient statistic) | 충분통계량 |\r
| H(p) | 엔트로피 | 엔트로피 |\r
| KL(p‖q) | KL 발산 (Kullback-Leibler divergence) | KL 발산 |\r
| ∇⁽ᵉ⁾ | e-접속 (exponential connection) | 왜 접속이 두 개인가 |\r
| ∇⁽ᵐ⁾ | m-접속 (mixture connection) | 왜 접속이 두 개인가 |\r
| g | Fisher 정보 계량 (Fisher information metric) | 곡면 위의 자 — Fisher 계량 (9장) |\r
| v(x, t) | 속도장 (velocity field) | 플로우 매칭 (15장) |\r
\r
이 표를 외울 필요는 없다. 각 기호는 처음 등장하는 장에서 충분한 직관과 함께 도입되며, 이후 반복적으로 사용되면서 자연스럽게 익숙해진다.\r
\r
---\r
\r
*2026년, 서울에서*\r
*덧셈의 길과 곱셈의 길 사이 어딘가에서*\r
`,$h=`# 왜 정보기하학인가\r
\r
## 입력, 함수, 출력 — 그리고 분포\r
입력이 변하면 출력이 변한다 — 함수 관계라는 상식\r
\r
### 기계학습의 핵심 전환\r
사람이 함수를 코드로 짜는 대신,\r
기계가 데이터를 보고 함수를 숫자(파라미터)로 채운다\r
\r
입력을 숫자로 표현하는 일 — 이미지, 텍스트, 소리를 벡터로\r
출력을 숫자로 표현하는 일 — "다음 토큰들의 확률표"처럼\r
     출력이 하나의 값이 아니라 가능성의 분포가 되는 필연성\r
\r
### 한 걸음 더\r
파라미터 자체도 확률분포다\r
     — 값이 아니라 "어디쯤에 있을 것 같다"\r
\r
### 수확\r
입력도 분포, 출력도 분포, 파라미터도 분포\r
     — 확률분포가 주인공이 될 수밖에 없는 이유\r
\r
     확률분포가 주인공이라면, 분포와 분포 사이의 "거리"는 무엇인가?\r
     공정한 동전과 살짝 편향된 동전은 "얼마나" 다른가?\r
     그 "얼마나"를 숫자로 쓰려면 — 분포가 사는 공간의 지도가 필요하다.\r
\r
## 파라미터 공간에서 벌어지는 마법들\r
왜 랜덤하게 초기화하는가?\r
     — 파라미터 공간의 아무 점에서 출발한다는 것\r
학습이란 무엇인가?\r
     — 데이터가 파라미터를 한 점에서 다른 점으로 끌고 가는 과정\r
     — 손실 함수가 만드는 지형 위의 하강\r
추가학습(fine-tuning)이란 무엇인가?\r
     — 이미 찾은 점 근처에서 새 데이터로 다시 움직이기\r
LoRA — 전체 공간이 아니라 부분공간에서 움직이기\r
     — 수백억 파라미터 중 작은 방향만 조정한다는 발상\r
\r
### 사례\r
이미지 디퓨전 모델의 세계\r
     모델 병합 — 두 점의 "중간"을 취하면?\r
          어떤 경우엔 두 능력이 합쳐진다 — 이게 왜 되나?\r
     LoRA 보간 — 두 LoRA 사이를 걸어가기\r
          스타일 A에서 스타일 B로의 부드러운 전환이 되는 경우\r
          갑자기 무너지는 경우\r
          "잘 되는 보간"과 "안 되는 보간"의 차이는 어디에 있는가?\r
\r
### 수확\r
이 현상들에는 패턴이 있다.\r
     그 패턴이 무엇인지를 묻는 것이 이 교재의 출발점이다\r
     그런데 이 패턴을 읽으려면 파라미터 공간에서 "거리"와 "방향"을 재는 도구가 필요하다.\r
     유클리드 거리로 충분한가? — 충분하지 않다는 것이 곧 드러난다.\r
\r
## 정보와 기하학 — 오래된 두 학문의 만남\r
기하학 — 수천 년의 역사, 그러나 현대적 전환\r
     유클리드에서 클라인의 에를랑겐 프로그램까지\r
     "기하학이란 변환 아래 변하지 않는 것을 연구하는 학문"\r
정보 — 일상어에서 수학으로\r
     섀넌(1948): "정보량"에 정확한 숫자를 매긴 최초의 사람\r
     놀라움, 엔트로피, 코드의 길이가 하나로 연결되다\r
교차점: 정보기하학\r
     아마리 슌이치 — 확률분포의 공간에 미분기하학을 입힌다\r
     탄생은 1980년대, 본격적 응용은 21세기\r
이 책이 그리려는 지도\r
     학습, 추론, 생성의 뒤에서 작동하는 기하학적 구조\r
     "파라미터 공간에서 벌어지는 마법들"이 이 지도 위에서 어디에 놓이는지의 예고\r
\r
### 수확\r
너무 기본적이어서 오히려 늦게 연결된 두 학문,\r
     그 연결이 지금의 AI를 설명하는 언어가 되고 있다\r
\r
     그 언어의 첫 단어는 놀라울 정도로 단순하다.\r
     "확률분포 하나를 점이라고 부르자."\r
     이 한 문장에서 모든 것이 시작된다. — 정말로?\r
\r
---\r
\r
> ### 인물 이야기 — C.R. Rao와 "25세의 논문"\r
>\r
> 1945년, 인도 캘커타.\r
> 스물다섯 살의 대학원생 카리얌패디 라다크리슈나 라오(C.R. Rao)가 박사학위 논문을 쓰고 있었다.\r
> 그가 풀고 있던 문제는 겉보기에 평범했다.\r
> "추정량의 정밀도에 한계가 있는가?"\r
> 통계학에서 파라미터를 추정할 때, 아무리 좋은 방법을 써도 넘을 수 없는 벽이 있다.\r
> 그 벽의 높이를 재는 것이 문제였다.\r
>\r
> Fisher는 이미 1920년대에 그 벽의 존재를 감지하고 있었다.\r
> 충분통계량, 최대우도추정 — Fisher가 만든 도구들은 전부 "정보를 잃지 않는 추정"을 향해 있었다.\r
> 그런데 Fisher 자신은 그 벽의 높이를 깔끔한 부등식으로 쓰지 못했다.\r
>\r
> Rao가 한 일은 이것이었다.\r
> Fisher의 정보량 — 스코어 함수의 분산 — 을 행렬로 쓰고,\r
> 그 행렬이 파라미터 공간 위의 **리만 계량**이라는 것을 알아챘다.\r
> 확률분포의 공간이 휘어진 땅이고,\r
> Fisher 정보가 그 땅 위의 자(ruler)라는 것.\r
>\r
> 같은 해, 같은 부등식을 프레셰(Fréchet)와 다마르(Darmois)도 독립적으로 증명했다.\r
> 그래서 이 부등식은 크라메르-라오 부등식, 또는 라오-크라메르-프레셰-다마르 부등식이라 불린다.\r
> 그러나 "Fisher 정보가 기하학이다"라는 관찰은 Rao의 것이었다.\r
>\r
> 이 관찰이 왜 중요한가?\r
> Fisher 정보가 계량이라는 것은, 분포의 공간에서 거리를 잴 수 있다는 뜻이다.\r
> 두 분포가 "얼마나 다른가"를 좌표 선택에 의존하지 않고 잴 수 있다.\r
> 이 한 문장이 정보기하학의 씨앗이다.\r
>\r
> 하지만 씨앗에서 나무까지는 40년이 걸렸다.\r
> Rao의 논문은 통계학자들에게 읽혔지만, "계량"이라는 단어의 무게를\r
> 진지하게 받아들인 사람은 거의 없었다.\r
> 통계학에 미분기하학을 본격적으로 들여온 것은 1980년대 아마리 슌이치의 작업이었고,\r
> 그 이야기는 4장에서 만나게 된다.\r
>\r
> Rao는 2023년, 102세로 세상을 떠났다.\r
> 자신이 25세에 심은 씨앗이 기계학습의 언어가 되는 것을 지켜본 드문 사람이다.\r
`,Vh=`# 점\r
\r
## 대상이 점이 되는 순간\r
\r
무엇이든 숫자의 나열로 바꿀 수 있다면, 그것은 공간의 점이 된다.\r
이 문장은 당연해 보이지만, 그 결과는 당연하지 않다.\r
\r
### 숫자로 바꾼다고 끝이 아니다\r
\r
MNIST 데이터셋을 본 적이 있을 것이다.\r
28×28 픽셀의 손글씨 숫자 이미지 7만 장.\r
\r
한 장의 이미지를 펼치면 784개의 숫자가 된다.\r
첫 번째 픽셀의 밝기, 두 번째 픽셀의 밝기, …, 784번째 픽셀의 밝기.\r
그러니까 손글씨 '3' 한 장은 784차원 공간의 점 하나다.\r
\r
7만 장의 손글씨를 전부 펼치면, 784차원 공간에 7만 개의 점이 찍힌다.\r
점은 찍었다. 하지만 이 784차원 공간은 별로 쓸모가 없다.\r
같은 '3'이라도 획이 조금만 삐뚤어지면 픽셀값이 확 달라진다.\r
다른 숫자인 '8'이 오히려 픽셀값으로는 더 비슷할 수도 있다.\r
숫자로 바꿨다는 사실만으로는, 점들 사이의 거리가 의미를 갖지 않는다.\r
\r
그런데 VAE 같은 방법으로 이 점들을 2차원 평면에 투영하면\r
신기한 일이 보인다.\r
'3'들은 '3'들끼리, '7'들은 '7'들끼리 모여 있다.\r
아무도 "모여라"고 명령하지 않았는데, 비슷한 것들이 가까이 찍힌다.\r
\r
784차원 픽셀 공간에서는 보이지 않던 구조가,\r
다른 공간으로 옮기니까 드러난 것이다.\r
\r
### JSX\r
\r
왼쪽 — 784차원 픽셀 공간에서 임의 2축으로 투영. 숫자들이 뒤섞여 있음.\r
오른쪽 — VAE 2D 잠재 공간. 같은 숫자끼리 뭉쳐 있음.\r
점을 클릭하면 원본 이미지가 팝업.\r
\r
영어 단어도 마찬가지다.\r
"king"을 ASCII 코드로 쓰면 숫자의 나열이 되지만,\r
거기에 기하학은 없다.\r
"king"과 "queen"이 가까운지 먼지를 ASCII 값으로는 알 수 없다.\r
\r
그런데 Word2Vec이라는 알고리즘이\r
단어 하나를 300개의 숫자로 바꿔 놓으면, 상황이 달라진다.\r
이 300차원 공간에서는 점들 사이의 *방향*이 의미를 가진다.\r
\r
king − man + woman ≈ queen\r
\r
"남자에서 여자로"라는 방향이 공간 안에 존재한다.\r
"서울에서 한국으로"라는 방향과\r
"도쿄에서 일본으로"라는 방향이 거의 평행하다.\r
\r
### JSX\r
\r
Word2Vec 2D 투영. 유명한 analogy 관계를\r
화살표로 시각화. king→queen, man→woman 등.\r
\r
패턴이 보인다.\r
숫자로 바꾸는 것 자체는 시작일 뿐이다.\r
**어떤 공간에 놓느냐**에 따라 가까움과 멂이 의미를 갖기도, 갖지 않기도 한다.\r
좋은 공간에서는 비슷한 것이 가깝고, 다른 것이 멀다.\r
나쁜 공간에서는 모든 것이 뒤섞여 있다.\r
\r
### 개와 고양이 — 좋은 공간에서는 문제가 쉬워진다\r
\r
이것이 실제로 어떤 차이를 만드는지 보자.\r
\r
개 사진 한 장과 고양이 사진 한 장이 있다.\r
둘 다 64×64 RGB 이미지라면, 각각 12,288차원 공간의 점이다.\r
\r
이 픽셀 공간에서 개와 고양이를 분류해보자.\r
하이퍼플레인 하나 — 공간을 반으로 가르는 평면 — 를 그어서\r
한쪽에 개를, 다른 쪽에 고양이를 모을 수 있을까?\r
\r
불가능하다.\r
배경이 바뀌고, 포즈가 바뀌고, 조명이 바뀌면\r
픽셀값은 완전히 달라지는데, 여전히 같은 개다.\r
"개다움"은 픽셀의 나열 속에 숨어 있지, 표면에 드러나 있지 않다.\r
\r
같은 이미지를 CNN — 합성곱 신경망 — 에 통과시키면 어떤 일이 일어나는가.\r
CNN의 마지막 층은 이미지를 128개쯤의 숫자로 압축한다.\r
12,288차원에서 128차원으로.\r
\r
이 128차원 공간에서는 기적 같은 일이 일어난다.\r
개들은 한쪽으로, 고양이들은 다른 쪽으로 모인다.\r
하이퍼플레인 하나로 깔끔하게 갈라진다.\r
\r
같은 대상이다. 같은 개, 같은 고양이.\r
그런데 공간을 바꿨을 뿐인데, 풀 수 없던 문제가 풀린다.\r
\r
### JSX\r
\r
왼쪽 — 픽셀 공간의 2D 투영. 개(파랑)와 고양이(주황)가 뒤섞여 있음.\r
직선 하나로 분리 불가능.\r
오른쪽 — CNN 특징 공간의 2D 투영. 깔끔하게 분리.\r
직선 하나로 분리 가능.\r
가운데에 화살표: "CNN이 하는 일"\r
\r
## 호기심 상자: 왜 좋은 공간이 존재하는가 — 매니폴드 가설\r
\r
왜 공간을 바꾸면 분류가 쉬워지는 걸까?\r
"운이 좋아서"가 아니다. 구조적인 이유가 있다.\r
\r
64×64 RGB 이미지의 공간은 12,288차원이다.\r
이 공간의 점을 하나 무작위로 찍어보자.\r
12,288개의 숫자를 각각 0에서 255 사이에서 랜덤하게 뽑는다.\r
화면에 표시하면? 노이즈다. 텔레비전의 지직거림.\r
개도 아니고, 고양이도 아니고, 그 어떤 의미 있는 이미지도 아니다.\r
\r
12,288차원 공간은 광대하다.\r
그런데 "개 사진"이라고 부를 수 있는 것들은\r
그 광대한 공간의 극히 일부에만 존재한다.\r
랜덤으로 점을 찍어서 개 사진이 나올 확률은 사실상 0이다.\r
\r
실제 이미지들 — 개든 고양이든 풍경이든 — 은\r
12,288차원 공간 전체에 퍼져 있지 않다.\r
그 안의 훨씬 낮은 차원의 얇은 시트 위에 몰려 있다.\r
구겨지고 접힌 시트.\r
수학에서는 이것을 매니폴드(manifold)라고 부른다.\r
\r
좋은 공간이 존재할 수 있는 이유가 여기에 있다.\r
데이터가 애초에 저차원 시트 위에 살고 있으니까,\r
그 시트를 찾아서 펼치면 구조가 드러난다.\r
CNN이 하는 일의 본질이 바로 이것이다.\r
접혀 있어서 개와 고양이가 뒤엉켜 보이던 시트를 펼쳐 놓으면,\r
원래 다른 곳에 살고 있던 것들이 양쪽으로 갈라진다.\r
\r
이 관찰을 **매니폴드 가설**이라 부른다:\r
실제 데이터는 고차원 공간 전체가 아니라,\r
그 안의 저차원 매니폴드 위에 집중되어 있다.\r
\r
매니폴드라는 단어는 8장에서 정식으로 만난다.\r
지금은 감각만 가져가자:\r
**데이터가 사는 진짜 공간은 우리가 보는 것보다 훨씬 작고,\r
그 작은 공간을 찾아내는 것이 기계학습의 핵심 문제 중 하나다.**\r
\r
## 분포 전체가 점 하나가 된다\r
\r
지금까지 점이 된 것들을 보자.\r
MNIST에서는 이미지 한 장이 점이었다.\r
Word2Vec에서는 단어 하나가 점이었다.\r
이제 전혀 다른 종류의 대상을 점으로 만들어보겠다.\r
\r
한국 20대 남성의 키 분포가 있다.\r
평균 174cm, 표준편차 5.8cm의 정규분포.\r
이것은 (174, 5.8)이라는 점이다.\r
\r
한국 20대 여성의 키 분포: (161, 5.2).\r
네덜란드 20대 남성의 키 분포: (183, 7.1).\r
네덜란드 20대 여성의 키 분포: (170, 6.3).\r
\r
(μ, σ) 평면 위에 네 개의 점을 찍었다.\r
\r
잠깐 멈춰서 이것이 얼마나 과감한 일인지 생각해보자.\r
\r
한국 20대 남성의 키 분포 뒤에는 무엇이 있는가.\r
수십만 명의 신체검사 기록이 있다.\r
한 사람 한 사람의 키, 유전자, 식습관, 성장 환경이 있다.\r
그 모든 개별적 삶이 빚어낸 결과가 하나의 분포다.\r
그 분포를 우리는 방금 (174, 5.8)이라는 점 하나로 만들었다.\r
\r
수십만 줄의 데이터, 수십만 명의 이야기가\r
평면 위의 점 하나로 압축되었다.\r
그리고 앞의 사례들과 다르게, 이 (μ, σ) 평면은\r
처음부터 의미 있는 공간이다.\r
μ가 가까우면 평균이 비슷한 집단이고,\r
σ가 가까우면 퍼짐의 정도가 비슷한 집단이다.\r
별도의 VAE도, Word2Vec도 필요 없다.\r
\r
추상화의 수준이 완전히 달라졌다.\r
이미지 한 장이 아니라 분포 전체가 점이다.\r
그리고 이 도약이야말로 정보기하학의 출발점이다.\r
\r
분포를 점으로 놓는 순간, 분포들 사이의 "거리"를 물을 수 있게 된다.\r
한국 남성과 네덜란드 남성은 얼마나 먼가?\r
한국 남성과 한국 여성은?\r
이 질문은 3장의 주제다.\r
\r
### JSX\r
\r
(μ, σ) 평면 위에 네 개의 점.\r
점을 클릭하면 해당 정규분포의 PDF가 오른쪽에 표시.\r
점을 드래그하면 분포 모양이 실시간으로 변화.\r
"점을 옮기는 것 = 분포의 모양을 바꾸는 것"\r
\r
## 확률분포는 점이다\r
\r
### 한 개념\r
\r
분포 하나 = 공간의 점 하나\r
\r
### 왜\r
\r
"정규분포 하나를 '점'이라고 부르면 무슨 일이 생기나?"\r
\r
### 비유\r
\r
라디오 주파수 다이얼 — 다이얼을 돌리면\r
소리(분포의 모양)가 바뀌는데,\r
다이얼의 위치 자체가 "점"이다\r
\r
### JSX\r
\r
슬라이더(μ, σ) → 분포 모양 변화.\r
동시에 오른쪽에 (μ, σ) 평면 위의 점이 찍힘.\r
"모양을 바꾸는 것 = 점을 옮기는 것"\r
\r
### 파이썬\r
\r
분포를 벡터로 표현, 여러 분포를 scatter plot\r
\r
## 가능성의 지도 — 심플렉스\r
\r
### 한 개념\r
\r
이산확률의 전체 공간은 삼각형(심플렉스)이다\r
\r
### 왜\r
\r
"세 면 주사위의 '모든 가능한 성격'을 한눈에 볼 수 있나?"\r
\r
### 비유\r
\r
삼각형 좌표 — 삼각형 꼭짓점이 각각 "확실히 1번",\r
"확실히 2번", "확실히 3번", 내부가 불확실성\r
\r
### JSX\r
\r
삼각형 위에서 점을 드래그 → 대응하는 막대그래프가 변화.\r
중심 = 균등분포, 꼭짓점 = 확정, 변 = 한 면이 불가능\r
→ 점을 삼각형의 한 변 위로 끌어보자. 막대그래프에서 무엇이 사라지는가?\r
\r
### 파이썬\r
\r
바리센트릭 좌표 구현, 심플렉스 위에 격자 그리기\r
\r
## 호기심 상자: 백만 면 주사위의 세계\r
\r
우리는 3면 주사위의 삼각형을 보고 있다.\r
하지만 실제 언어 모델의 "다음 토큰" 분포는\r
면이 수만~수십만 개인 주사위다.\r
GPT 계열 모델의 어휘 크기가 5만이라면,\r
그 심플렉스는 5만 차원의 초삼각형이다.\r
\r
고차원에서는 직관이 뒤집힌다.\r
서울역에서 사람들은 대합실 한가운데가 아니라\r
벽 근처, 기둥 옆, 구석에 서 있다.\r
고차원 심플렉스도 그렇다.\r
부피의 대부분이 중심이 아니라 모서리 근처에 집중된다.\r
이것을 "차원의 저주"라고 부른다.\r
\r
5만 차원의 삼각형 위에 점 하나를 찍었다. 점은 찍었다.\r
그런데 두 점이 "가깝다" 또는 "멀다"는 것은 어떻게 아는가?\r
삼각형 위에서 자를 대야 한다. 어떤 자를?\r
\r
---\r
\r
> ### 인물 이야기 — Karl Pearson과 "데이터를 보는 눈"\r
>\r
> 19세기 말, 런던 유니버시티 칼리지.\r
> Karl Pearson은 원래 통계학자가 아니었다.\r
> 독일에서 철학과 물리학을 공부하고 돌아와\r
> 응용수학 교수로 부임한 사람이었다.\r
> 그가 통계학으로 전향한 계기는 생물학자 Francis Galton과의 만남이었다.\r
>\r
> Galton은 다윈의 사촌이었고, 유전의 법칙을 수로 잡고 싶어 했다.\r
> 아버지의 키와 아들의 키 사이에 관계가 있다는 건 알겠는데,\r
> 그 관계를 어떻게 정확히 기술할 것인가?\r
> Galton은 "회귀(regression)"라는 말을 만들었지만,\r
> 수학적 도구가 부족했다.\r
>\r
> Pearson이 그 도구를 만들었다.\r
> 상관계수, 카이제곱 검정, 히스토그램, 주성분분석 —\r
> 오늘날 데이터 분석의 기본 어휘 상당수가 Pearson에게서 나왔다.\r
> 그런데 이 도구들의 바닥에 공통된 발상이 하나 있다.\r
> **데이터를 공간의 점으로 보는 것.**\r
>\r
> Pearson 이전에 통계학은 "요약"의 학문이었다.\r
> 평균을 구하고, 편차를 재고, 표를 만들었다.\r
> Pearson이 한 일은 그 숫자들을 좌표로 읽는 것이었다.\r
> 사람 한 명의 키와 팔 길이를 (x, y) 평면의 점으로 찍으면,\r
> 수백 명의 데이터가 하나의 점구름(point cloud)이 된다.\r
> 점구름의 모양이 곧 변수들 사이의 관계다.\r
> 길쭉하게 늘어져 있으면 상관이 높고, 둥글면 상관이 없다.\r
>\r
> 이것은 사고방식의 전환이었다.\r
> 숫자를 하나씩 보는 대신 공간에 뿌려놓고 **형태를 본다.**\r
> 히스토그램이라는 시각화 도구를 처음 체계화한 것도 같은 맥락이다.\r
> 분포를 눈으로 보게 만든 것.\r
>\r
> Pearson의 제자 중에 Fisher가 있었다 — 정확히는 제자라기보다\r
> 같은 학교에서 자란 후배이자 최대의 라이벌이었다.\r
> 두 사람의 관계는 격렬했다.\r
> Fisher는 Pearson의 카이제곱 검정에서 자유도 계산이 틀렸다고 공격했고,\r
> Pearson은 Fisher의 최대우도법을 신뢰하지 않았다.\r
> 이 충돌은 20세기 통계학을 두 진영으로 갈랐지만,\r
> 동시에 양쪽 모두를 날카롭게 만들었다.\r
> Fisher의 이야기는 9장에서 만난다.\r
>\r
> Pearson이 연 문은 이것이다:\r
> 데이터를 점으로, 점들의 집합을 공간의 구조로 읽는 습관.\r
> 이 장에서 우리가 한 일 — 이미지를 784차원의 점으로,\r
> 분포를 (μ, σ) 평면의 점으로 만든 것 — 의 뿌리가 거기에 있다.\r
`,Uh=`# 거리\r
\r
2장에서 우리는 분포를 점으로 만들었다.\r
한국 남성 (174, 5.8)과 네덜란드 남성 (183, 7.1).\r
(μ, σ) 평면 위의 두 점이다.\r
\r
점을 찍은 이유는 하나다. 거리를 재기 위해서다.\r
\r
거리를 잴 수 있으면, 비로소 진짜 질문을 할 수 있다.\r
내 모델이 현실에서 얼마나 멀리 떨어져 있는가?\r
한 에폭 학습한 뒤에 그 거리가 줄어들었는가, 늘어났는가?\r
내 모델과 너의 모델 중 어느 쪽이 현실에 더 가까운가?\r
학습률을 이만큼 높여도 괜찮은가, 아니면 발산하고 있는가?\r
\r
기계학습의 거의 모든 판단이 "거리"에 의존한다.\r
\r
가장 먼저 떠오르는 자는 유클리드 거리다.\r
(μ, σ) 평면 위의 두 점이니까, 피타고라스 정리로 재면 되지 않을까?\r
한국 남성 (174, 5.8)과 네덜란드 남성 (183, 7.1).\r
유클리드 거리는 √((183−174)² + (7.1−5.8)²) ≈ 9.1이다.\r
\r
그런데 이 숫자가 두 분포의 "다름"을 제대로 재고 있을까?\r
\r
세 번째 분포를 하나 더 놓아보자.\r
한국 남성 (174, 5.8)과 "거의 같은" 분포 (174, 12.0).\r
평균은 같고 표준편차만 두 배로 키웠다.\r
유클리드 거리는 √((174−174)² + (12.0−5.8)²) = 6.2.\r
네덜란드 남성까지의 9.1보다 가깝다.\r
\r
하지만 이 두 분포를 그려보면?\r
하나는 174cm 부근에 뾰족하게 몰려 있고,\r
다른 하나는 150cm부터 198cm까지 납작하게 퍼져 있다.\r
분포의 모양은 완전히 다르다.\r
반면 한국 남성과 네덜란드 남성은 모양이 비슷하고 위치만 다르다.\r
\r
유클리드 자는 μ의 차이 9와 σ의 차이 1.3을 같은 무게로 더했다.\r
그런데 σ가 5.8에서 12.0으로 바뀌는 것과\r
μ가 174에서 183으로 바뀌는 것은, 분포의 관점에서 같은 크기의 변화가 아니다.\r
유클리드 거리는 이 차이를 모른다.\r
\r
확률분포의 공간에서 유클리드 거리가 통했다면,\r
정보기하학이라는 학문은 필요하지 않았을 것이다.\r
다른 자가 필요하다.\r
\r
## 거리에도 종류가 있다\r
\r
### 한 개념\r
\r
같은 두 점 사이에도 재는 방법이 여럿이다\r
\r
### 왜\r
\r
"공정한 동전과 약간 편향된 동전은 얼마나 다른가?"\r
\r
심플렉스 위의 세 분포를 생각한다.\r
A = (0.5, 0.3, 0.2), B = (0.4, 0.5, 0.1), C = (0.1, 0.1, 0.8).\r
\r
유클리드 거리로 재면 A는 B에 더 가깝다.\r
그런데 나중에 배울 KL 발산이라는 다른 자를 대면?\r
답이 뒤집힐 수 있다. 같은 세 점인데, 자를 바꿨을 뿐이다.\r
\r
2장에서 "어떤 공간에 놓느냐"가 중요하다고 했다.\r
같은 공간 안에서도 "어떤 자를 쓰느냐"에 따라\r
보이는 구조가 달라진다.\r
공간을 바꾸는 것과 자를 바꾸는 것은 같은 동전의 양면이다.\r
\r
### JSX\r
\r
심플렉스 위에 세 점 A, B, C.\r
왼쪽 패널 — 유클리드 거리로 잰 A-B, A-C를 선분과 수치로 표시.\r
오른쪽 패널 — KL 발산으로 잰 같은 쌍을 화살표와 수치로 표시.\r
점을 드래그하면 두 패널의 순위가 뒤집히는 배치를 찾을 수 있다.\r
→ 유클리드에서는 A가 B에 더 가까운데,\r
  KL에서는 A가 C에 더 가까운 배치를 찾아보자.\r
\r
### 파이썬\r
\r
np.linalg.norm(p1 - p2) 한 줄. 단순.\r
\r
### 수확\r
\r
"거리에도 종류가 있다."\r
거리라면 당연히 왕복이 같아야 한다고 느낀다.\r
A에서 B까지와 B에서 A까지가 같다는 것.\r
그 "당연함"을 의심해보자.\r
\r
## 비대칭 거리 — 무빙워크가 있는 도로\r
\r
### 한 개념\r
\r
방향에 따라 거리가 다를 수 있다\r
\r
### 왜\r
\r
"A에서 B까지의 거리와 B에서 A까지의 거리가 다르다니?"\r
\r
### 비유\r
\r
무빙워크(moving walkway) —\r
공항에서 무빙워크를 타고 가면 3분,\r
거슬러 걸어오면 10분. 같은 두 지점인데 방향에 따라\r
"체감 거리"가 다르다.\r
도시 전체에 무빙워크가 깔린 도로망을 상상하면,\r
A→B→C→A 한 바퀴의 총 시간이 0이 아닐 수 있다.\r
이런 도로에서는 "최단경로"의 개념 자체가 달라진다.\r
\r
대칭이 당연하다고 느끼는 건,\r
우리가 평평한 바닥 위를 걷는 데 익숙하기 때문이다.\r
그런데 경사진 언덕을 생각해보자.\r
올라가는 것과 내려오는 것은 같은 거리가 아니다.\r
확률분포의 공간은 — 곧 보겠지만 — 평평하지 않다.\r
\r
### JSX\r
\r
격자 도시 위에 무빙워크의 방향과 세기를 표현.\r
두 점 사이를 클릭하면 A→B와 B→A의 시간이\r
다르게 표시. "도시를 기울인다"는 느낌.\r
\r
### 파이썬\r
\r
비대칭 거리 행렬 구현. d(i,j) ≠ d(j,i) 확인.\r
\r
### 수확\r
\r
"비대칭 거리는 이상한 게 아니라 방향이 있는 거리"\r
\r
## KL 발산 — 확률의 무빙워크\r
\r
### 한 개념\r
\r
확률분포 사이의 구체적인 비대칭 거리 하나를 배운다\r
\r
### 왜\r
\r
"확률분포의 세계에서 무빙워크는 어느 방향으로 깔려있나?"\r
\r
### 비유\r
\r
"비대칭 거리"의 무빙워크를 확률에 적용 —\r
"흔한 분포에서 희귀한 분포 쪽으로"는 멀고,\r
"희귀한 분포에서 흔한 분포 쪽으로"는 가깝다.\r
넓은 분포(무지) 안에 좁은 분포(확신)가 들어있으니까.\r
\r
2장의 키 분포로 돌아가보자.\r
한국 남성의 키 분포 p와, 이것을 약간 잘못 추정한 모형 q가 있다.\r
KL(p‖q)는 "현실이 모형을 심판하는 거리"다.\r
현실에서 흔히 일어나는 키(170~178cm 부근)를\r
모형이 과소평가하고 있다면, 그 벌점이 크다.\r
반대로 KL(q‖p)는 "모형이 현실을 심판하는 거리"다.\r
모형이 신경 쓰는 영역이 다르니까, 같은 두 분포인데 값이 다르다.\r
\r
### p와 q의 역할\r
\r
이 교재에서 p는 항상 "현실"(진짜 분포), q는 항상 "지도"(모형)다.\r
KL(p‖q)는 "현실 p의 눈으로 본, 지도 q의 부정확함".\r
KL(q‖p)는 "지도 q의 눈으로 본, 현실 p와의 괴리".\r
같은 두 분포인데, 누구의 눈으로 보느냐에 따라 거리가 다르다.\r
\r
### JSX\r
\r
심플렉스 위에서 두 점 사이의 KL(p‖q)와 KL(q‖p)를\r
화살표 굵기로 표현. 점을 옮기면 비대칭이 변화.\r
→ 두 점을 가깝게 놓았다가 하나를 꼭짓점 쪽으로 밀어보자.\r
  화살표 굵기의 비대칭이 어떻게 변하는가?\r
\r
### 파이썬\r
\r
KL 발산 직접 구현. p와 q를 바꿔보며 값 비교.\r
\r
### 수확\r
\r
"KL은 확률 세계의 무빙워크 거리"\r
KL이 정확히 무엇을 재는지 — 그 정체는 아직 말하지 않았다.\r
"놀라움"을 세는 법을 배운 뒤에야 답할 수 있다.\r
5장에서.\r
\r
## 발밑의 평탄함 — KL이 숨기고 있던 대칭\r
\r
### 한 개념\r
\r
두 분포가 무한히 가까워지면,\r
비대칭적인 KL 발산이 완벽히 대칭적인 거리로 변한다.\r
그 대칭적 거리의 정체가 피셔 정보다.\r
\r
### 왜\r
\r
"KL은 비대칭이라 '진짜 거리'가 아니라고 했다.\r
그런데 아주 가까운 두 분포 사이에서는 대칭이 된다고?\r
그 '찰나의 대칭'이 도대체 뭔가?"\r
\r
다시 한국 남성의 키 분포로 돌아가자.\r
(174, 5.8)과 (174.01, 5.801).\r
거의 같은 분포다. 이 두 점 사이에서\r
KL(p‖q)와 KL(q‖p)를 계산하면 — 거의 같다.\r
비대칭이 사라진다.\r
\r
### 비유\r
\r
지구와 평면 —\r
지구 전체는 둥글고, 서울에서 뉴욕과 뉴욕에서 서울은\r
경로에 따라 다른 거리를 가질 수 있다.\r
그러나 내 발밑의 10미터는 평평하다.\r
평평한 바닥에서는 앞으로 10걸음이나 뒤로 10걸음이나 같다.\r
KL 발산의 세계에서도 같은 일이 일어난다.\r
두 분포가 충분히 가까우면, 비대칭이 사라지고\r
평탄한 유클리드형 거리가 드러난다.\r
\r
### JSX\r
\r
심플렉스 위에서 두 점 p, q를 찍고,\r
q를 p에 점점 가까이 가져가는 슬라이더.\r
[왼쪽] KL(p‖q)와 KL(q‖p) 두 값을 실시간 표시.\r
멀 때는 차이가 크지만, 가까워질수록 두 값이 수렴.\r
[오른쪽] 그 비율 KL(p‖q)/KL(q‖p)이 1로 수렴하는 그래프.\r
→ q를 p 바로 옆까지 끌어보자.\r
  두 화살표의 굵기가 같아지는 순간이 있는가?\r
\r
### 파이썬\r
\r
dtheta를 10⁻¹, 10⁻², ..., 10⁻⁶으로 줄이면서\r
KL(p_θ ‖ p_{θ+dθ})를 계산.\r
동시에 ½ · dθᵀ · I(θ) · dθ (피셔 이차형식)를 계산.\r
둘의 비율이 1로 수렴함을 수치적으로 확인.\r
\r
    # 이 수치 실험을 한 줄로 쓰면:\r
    # KL ≈ ½ dθᵀ I(θ) dθ\r
    # "전역적 놀라움이 국소적으로는 이차형식이 된다"\r
\r
D_KL(p_θ ‖ p_{θ+dθ}) ≈ ½ Σᵢⱼ I(θ)ᵢⱼ dθⁱ dθʲ\r
\r
### 수확\r
\r
"KL 발산의 발밑에는 대칭적인 거리가 숨어 있다.\r
그 거리를 만드는 행렬이 피셔 정보 행렬이다."\r
\r
그런데 잠깐 — 우리는 아직 두 점 사이를 "걸어가는 방법"을 모른다.\r
거리를 재는 건 지도 위에 자를 대는 것이고,\r
걷는 건 실제로 발을 떼는 것이다.\r
같은 두 점을 잇는 길이 하나가 아니라면?\r
\r
---\r
\r
> ### 인물 이야기 — Solomon Kullback과 암호해독의 거리\r
>\r
> 1930년대, 워싱턴 D.C.\r
> Solomon Kullback은 조지워싱턴 대학에서 수학 박사학위를 받은 뒤\r
> 미 육군의 신호정보국(Signal Intelligence Service)에 들어갔다.\r
> 동료에는 같은 대학 출신의 Richard Leibler가 있었다.\r
> 둘이 하는 일은 외국 통신문의 암호를 깨는 것이었다.\r
>\r
> 암호해독에는 통계가 필요했다.\r
> 독일어 텍스트에서 글자가 나타나는 빈도와\r
> 암호문에서 기호가 나타나는 빈도를 비교해야 했다.\r
> "이 암호문이 독일어로 쓰인 것인가, 일본어로 쓰인 것인가?"\r
> 이 질문의 핵심은 — 두 빈도 분포가 얼마나 다른가?\r
>\r
> 이것이 문제의 맥락이었다.\r
> 추상적인 수학적 호기심이 아니라,\r
> 전쟁 중에 적의 통신을 읽어야 하는 절박한 필요.\r
> "분포 사이의 거리"는 누가 더 정확한 해독 가설을 갖고 있는가를\r
> 판별하는 도구였다.\r
>\r
> Kullback과 Leibler가 1951년에 발표한 논문\r
> "On Information and Sufficiency"는 이 경험의 결실이었다.\r
> 논문의 핵심 아이디어는 간단했다.\r
> 가설 H₁이 맞다고 믿을 때, 가설 H₀에서의 놀라움과\r
> H₁에서의 놀라움의 차이를 평균 내면 —\r
> 그것이 H₀와 H₁ 사이의 "정보 거리"다.\r
>\r
> 이 양은 대칭이 아니었다.\r
> "독일어라고 믿고 일본어 가설을 평가하는 것"과\r
> "일본어라고 믿고 독일어 가설을 평가하는 것"은 다르다.\r
> 비대칭은 버그가 아니라 본질이었다.\r
> 암호해독에서 "내가 서 있는 가설"이 무엇인가에 따라\r
> 증거의 무게가 달라지는 것은 자연스러운 일이니까.\r
>\r
> 흥미로운 것은, 이 아이디어의 뿌리가 더 깊다는 점이다.\r
> 같은 양을 Shannon은 1948년에 이미 다른 맥락에서 만나고 있었고,\r
> 더 거슬러 올라가면 통계역학에서 Boltzmann과 Gibbs가\r
> 엔트로피의 상대적 비교로 사용하고 있었다.\r
> 하지만 "두 분포 사이의 거리"라는 관점에서\r
> 이 양을 명시적으로 정의하고 성질을 체계적으로 분석한 것은\r
> Kullback과 Leibler가 처음이었다.\r
>\r
> Kullback은 이후 NSA(국가안보국)에서 30년 넘게 일하며\r
> 통계적 암호분석의 기초를 놓았다.\r
> 그의 이름이 붙은 KL 발산은\r
> 기계학습에서 손실함수의 핵심 재료가 되었고,\r
> 정보기하학에서는 공간의 구조를 결정하는 자가 되었다.\r
> 암호해독가의 실용적 질문이 수학의 근본 개념이 된 셈이다.\r
`,Hh=`# 길\r
\r
3장에서 우리는 거리를 재는 자가 여럿이라는 것을 보았다.\r
그리고 마지막에 이런 질문을 남겼다.\r
두 점 사이를 "걸어가는 방법"은 하나인가?\r
\r
유클리드 공간이라면 답은 간단하다. 두 점 사이의 직선은 하나다.\r
그런데 확률분포의 공간에서는 직선이 두 개다.\r
같은 양 끝점을 잇는데, 전혀 다른 곳을 지나간다.\r
\r
## 섞을 것인가, 곱할 것인가\r
\r
### 왜\r
\r
왜 두 개인가?\r
두 모델을 합치는 방법이 두 가지이기 때문이다.\r
\r
모델 A와 모델 B가 있다. 둘 다 쓸 만하다.\r
합쳐서 더 좋은 모델을 만들 수 있을까?\r
\r
방법 1 — **섞는다**(앙상블):\r
  "60%의 확률로 A의 예측을 따르고, 40%의 확률로 B를 따르자."\r
  두 모델이 공존한다. 어느 쪽도 사라지지 않는다.\r
\r
방법 2 — **곱한다**(베이즈 업데이트):\r
  "A가 가능하다고 한 영역과 B가 가능하다고 한 영역의 교집합만 남기자."\r
  두 모델이 동의하는 곳만 살아남는다.\r
\r
섞으면 OR. 곱하면 AND.\r
이 두 연산이 각각 자기만의 길을 만든다.\r
\r
### 비유\r
\r
비유: 빛의 삼원색과 물감의 삼원색 —\r
같은 "색을 섞는다"인데, 두 가지 전혀 다른 규칙이 있다.\r
\r
그런데 잠깐 — 왜 하필 색인가?\r
색은 파장별 세기의 분포다.\r
빨간 빛은 긴 파장 쪽이 높은 분포,\r
파란 빛은 짧은 파장 쪽이 높은 분포.\r
"색을 섞는다"는 곧 "분포를 섞는다"다.\r
그리고 그 섞는 규칙이 정확히 두 개다.\r
\r
방법 1 — 빛을 섞는다 (가산혼합, OR):\r
  빨강 빛과 초록 빛을 합치면 노랑.\r
  전부 합치면 흰색. 더할수록 밝아진다.\r
  각 파장의 세기를 더한다. 물리적으로 덧셈.\r
  두 빛이 공존하는 세계 — 아무것도 사라지지 않는다.\r
\r
방법 2 — 물감을 섞는다 (감산혼합, AND):\r
  빨강 물감과 파랑 물감을 섞으면 보라.\r
  전부 섞으면 검정. 섞을수록 어두워진다.\r
  물감은 특정 파장을 흡수하는 필터다.\r
  두 필터를 겹치면 각 파장의 투과율이 곱해진다.\r
  0.8 × 0.3 = 0.24. 물리적으로 곱셈.\r
  겹치는 파장만 살아남는 세계.\r
\r
같은 두 색에서 출발하는데,\r
합치는 규칙이 다르면 결과가 다르다.\r
빛은 더하고, 물감은 곱한다.\r
\r
그리고 삼원색이니까 — 3차원.\r
2장의 심플렉스와 바로 연결된다.\r
\r
### 확률로의 번역\r
\r
색이 파장별 세기의 분포였듯,\r
확률분포는 사건별 가능성의 분포다.\r
구조가 같으니 섞는 규칙도 그대로 옮겨진다.\r
OR = 혼합(mixture): (1-t)·p + t·q\r
  두 분포의 가중평균. 덧셈.\r
  두 봉우리가 다 살아 있다 — 빛이 밝아지듯.\r
AND = 결합(product): p^(1-t) · q^t / Z\r
  두 분포의 가중곱. 곱셈.\r
  겹치는 영역만 살아남는다 — 물감이 어두워지듯.\r
\r
하나는 더하고, 하나는 곱한다.\r
이 두 연산이 6장과 7장의 주제다.\r
\r
### 그리고 번역기\r
\r
곱셈은 다루기 어렵다. 0.1퍼센트의 확률이 10번만 겹쳐져도 컴퓨터가 쉽게 다룰 수 없는 숫자가 되어버린다.\r
그런데 log를 씌우면 곱이 덧셈이 된다.\r
log(p · q) = log p + log q.\r
곱셈의 세계에서 일어나는 일을\r
덧셈의 언어로 읽어주는 통역사 — 그것이 log다.\r
이 장의 두 번째 길은 이 통역사 위에 서 있다.\r
\r
### 수확\r
\r
"조합에는 두 규칙이 있다. OR과 AND.\r
이것이 두 개의 길을, 두 개의 기하학을 만드는 뿌리다."\r
\r
## 첫 번째 길 — 덧셈으로 걷기\r
\r
### 한 개념\r
\r
두 분포를 섞으면(mixture) 경로가 생긴다\r
\r
### 왜\r
\r
"공정한 동전과 편향된 동전의 '사이'에 있는 동전은 뭔가?"\r
\r
### 비유\r
\r
비유: 칵테일 — 진토닉과 마티니의 비율을 t:1−t로 바꾸면\r
중간에 무한히 많은 음료가 있다.\r
두 원재료는 그대로, 비율만 변한다.\r
\r
### JSX\r
\r
심플렉스 위에 두 점 p₁, p₂를 찍고\r
t 슬라이더를 움직이면 그 사이의 직선 위로\r
점이 이동. 대응하는 막대그래프가 실시간 변화.\r
→ t 슬라이더를 0.5에 놓아보자. 두 중간점의 막대그래프가 다른가? 어느 쪽이 봉우리가 더 뾰족한가?\r
\r
### 파이썬\r
\r
(1-t)*p1 + t*p2 를 코드 한 줄로. 경로 시각화.\r
\r
### 수확\r
\r
"확률을 더하면 직선이 된다"\r
\r
## 두 번째 길 — 곱셈으로 걷기\r
\r
### 한 개념\r
\r
두 분포를 곱하면 다른 경로가 생긴다\r
\r
### 왜\r
\r
"같은 두 점을 잇는 다른 길이 있다?"\r
왜 log인가 — 곱셈을 덧셈으로 바꾸는 렌즈:\r
\r
### 비유\r
\r
비유: 리히터 규모와 데시벨 —\r
  지진의 에너지는 10배씩 커지는데, 리히터 규모는 1씩 올라간다.\r
  소리의 세기는 10배씩 커지는데, 데시벨은 10씩 올라간다.\r
  pH도 마찬가지. 수소이온 농도는 10배씩 변하는데\r
  pH는 1씩 변한다.\r
  이것들은 전부 같은 장치 — log.\r
  "곱으로 커지는 세계를 더하기로 느끼게 해주는 렌즈."\r
\r
### 비유\r
\r
비유: 두 사진의 이중노출 — 한 사진을 t만큼 투명하게,\r
다른 사진을 1−t만큼 투명하게 해서 겹치면,\r
칵테일과 달리 두 이미지가 간섭한다.\r
밝은 곳끼리 겹치면 더 밝아지고, 한쪽이 어두우면 눌린다.\r
\r
### JSX\r
\r
"첫 번째 길"과 같은 두 점, 같은 슬라이더 t.\r
이번에는 p₁^(1-t) · p₂^t / Z 경로.\r
심플렉스 위에서 덧셈 경로(직선)와 곱셈 경로(곡선)를\r
나란히 그려서 "같은 양 끝점, 다른 경로"를 시각화.\r
\r
### 파이썬\r
\r
exp((1-t)*log(p1) + t*log(p2)) 를 정규화.\r
두 경로의 중간점 분포를 겹쳐 그리기.\r
\r
### 수확\r
\r
"곱셈을 덧셈으로 바꾸는 렌즈가 있다. 그것이 log다.\r
곱셈의 길은 로그 공간의 직선이다"\r
\r
## 두 길이 다른 곳을 지나간다\r
\r
### 한 개념\r
\r
같은 양 끝점인데 중간이 다르면, "중간"의 정의가 다르다\r
\r
### 왜\r
\r
"두 길의 중간점은 각각 뭘 의미하는가?"\r
\r
### 비유\r
\r
비유: 산술평균 vs 기하평균 — 4와 16의 산술평균은 10,\r
기하평균은 8. 같은 "가운데"인데 다르다.\r
\r
중간점의 분포를 눈으로 보면 차이가 극적이다.\r
m-중간점(덧셈의 중간)은 두 봉우리가 다 살아 있다.\r
  "개일 수도 있고 고양이일 수도 있다" — OR.\r
e-중간점(곱셈의 중간)은 겹치는 부분만 살아남는다.\r
  "개이면서 동시에 고양이처럼 보이는 것만 남는다" — AND.\r
\r
3장에서 유클리드 공간이었다면\r
정보기하학은 필요 없었을 것이라 했다.\r
같은 맥락에서 — 유클리드 공간이었다면\r
두 점 사이의 직선은 하나뿐이다.\r
직선이 두 개라는 것 자체가,\r
이 공간이 평평하지 않다는 신호다.\r
\r
### JSX\r
\r
두 경로의 t=0.5 지점의 분포를 나란히 막대그래프로.\r
m-중간점은 두 봉우리가 살아 있고(또는),\r
e-중간점은 겹치는 부분만 살아남음(그리고).\r
\r
### 파이썬\r
\r
두 중간점 분포의 엔트로피를 직접 계산해서 비교.\r
\r
## 호기심 상자: 색공간에서 보는 네 개의 "중간"\r
\r
### 도입\r
\r
"섞을 것인가, 곱할 것인가"에서 우리는 빛(덧셈)과 물감(곱셈)을 보았다.\r
그런데 질문이 하나 더 있다.\r
색을 표현하는 좌표계도 하나가 아니다.\r
\r
### 두 좌표계\r
\r
RGB — 빨강, 초록, 파랑의 세기.\r
  컴퓨터 모니터가 쓰는 좌표.\r
  (255, 0, 0)은 빨강, (0, 255, 0)은 초록.\r
HSV — 색상(Hue), 채도(Saturation), 명도(Value).\r
  화가가 쓰는 좌표.\r
  "빨간색을 좀 탁하게" = 채도를 낮추는 것.\r
\r
같은 색이다. 그런데 주소가 다르다.\r
서울시 강남구 역삼동 123 = 37.5°N, 127.0°E.\r
(이건 "자연모수 θ"와 "기대모수 η"에서 θ와 η로 다시 만난다.)\r
\r
### 네 개의 보간\r
\r
같은 양 끝 색 두 개를 고르고, 네 가지 방법으로\r
중간색을 만든다.\r
\r
① RGB 덧셈 — RGB 좌표에서 직선 보간.\r
  (1-t)·RGB₁ + t·RGB₂\r
② RGB 곱셈 — RGB 좌표에서 기하평균.\r
  RGB₁^(1-t) · RGB₂^t\r
③ HSV 덧셈 — HSV 좌표에서 직선 보간.\r
  (1-t)·HSV₁ + t·HSV₂\r
  (Hue는 원형이므로 짧은 호를 따라 보간)\r
④ HSV 곱셈 — HSV 좌표에서 기하평균.\r
  HSV₁^(1-t) · HSV₂^t\r
\r
네 경로의 중간색(t=0.5)이 전부 다르다.\r
\r
### JSX\r
\r
컬러 피커 두 개로 양 끝점 색을 선택.\r
네 개의 가로 그라디언트 막대가 나란히 표시:\r
  "RGB + 덧셈" / "RGB + 곱셈" /\r
  "HSV + 덧셈" / "HSV + 곱셈"\r
t 슬라이더를 움직이면 네 막대 위의 커서가 동시에 이동.\r
t = 0.5 일 때 네 중간색을 정사각형 스와치로 나란히 비교.\r
\r
특히 재미있는 양 끝점 조합의 프리셋 제공:\r
  - 빨강 ↔ 파랑: HSV 보간은 보라를 거치지만\r
  RGB 보간은 탁한 갈색을 거침\r
  - 노랑 ↔ 시안: 곱셈은 어두워지고 덧셈은 밝아짐\r
  - 보색 관계 (빨강 ↔ 시안): 네 경로의 차이가 극대화\r
\r
### 파이썬\r
\r
RGB↔HSV 변환 구현.\r
네 보간을 각각 코드로 작성하고\r
t = 0, 0.25, 0.5, 0.75, 1 의 다섯 지점 색을\r
4×5 격자로 시각화.\r
\r
### 이것이 왜 중요한가\r
\r
"같은 두 점 사이의 '중간'이\r
좌표계에 따라 다르고, 연산에 따라 다르다."\r
이 장에서 우리는 연산이 다르면 중간이 다르다는 것을 보았다.\r
여기서 한 층 더: 좌표계가 달라도 중간이 다르다.\r
좌표계 × 연산 = 기하학.\r
이 감각을 가지고 Part VI로 가면,\r
θ 좌표의 직선과 η 좌표의 직선이\r
다른 경로를 그린다는 것이 놀랍지 않게 된다.\r
\r
### 수확\r
\r
"산술평균은 혼합(앙상블)의 씨앗이고,\r
기하평균은 곱셈(베이즈 업데이트, 학습)의 씨앗이다.\r
그리고 좌표계가 달라지면 '직선' 자체가 달라진다.\r
연산 × 좌표계 — 이 두 선택이 기하학을 결정한다."\r
\r
두 길의 중간이 다르다는 건 보았다. 그런데 왜 하필 이 두 연산인가?\r
덧셈은 그렇다 치고, 곱셈은 왜 특별한가?\r
— 그 답은 "놀라움"이라는 개념에 들어 있다.\r
독립사건 두 개가 동시에 일어나면, 놀라움은 더해져야 한다.\r
그리고 확률은 곱해진다.\r
곱을 합으로 바꾸는 함수. 이미 만났다. log.\r
그런데 왜 하필 log인지를 정직하게 답하려면, 놀라움을 먼저 정의해야 한다.\r
\r
---\r
\r
> ### 인물 이야기 — Amari Shun-ichi와 "두 개의 연결"\r
>\r
> 1950년대, 도쿄 대학.\r
> 아마리 슌이치(甘利俊一)는 공학부에서 신경망을 연구하는 대학원생이었다.\r
> 당시 신경망 연구는 퍼셉트론의 시대였다.\r
> 입력과 출력 사이의 가중치를 어떻게 조정할 것인가 —\r
> 이것이 핵심 문제였고, 문제의 언어는 최적화였다.\r
>\r
> 그런데 Amari는 이상한 점을 발견했다.\r
> 가중치를 조금 바꿨을 때, 신경망의 출력 분포가 바뀌는 정도가\r
> 가중치 공간의 위치에 따라 달랐다.\r
> 어떤 곳에서는 한 걸음이 큰 변화를 만들고,\r
> 다른 곳에서는 같은 한 걸음이 거의 아무 변화도 만들지 않는다.\r
> 유클리드 거리로 재면 같은 크기의 걸음인데,\r
> 분포의 관점에서는 전혀 같지 않았다.\r
>\r
> 이 관찰이 Amari를 미분기하학으로 이끌었다.\r
> 파라미터 공간이 평평하지 않다면, 리만 기하학의 도구가 필요하다.\r
> Rao가 1945년에 Fisher 정보를 리만 계량으로 읽은 것을\r
> Amari는 재발견하고, 거기서 훨씬 더 멀리 나아갔다.\r
>\r
> 결정적인 발견은 1980년대에 왔다.\r
> 리만 계량이 하나여도, 그 위에 정의할 수 있는 **연결(connection)**이\r
> 하나가 아니라는 것이었다.\r
> 연결이란 "이 점에서 저 점으로 걸어갈 때 방향을 어떻게 비교할 것인가"를\r
> 결정하는 규칙이다.\r
> 같은 땅 위에서도 나침반의 규칙이 다르면 다른 길이 보인다.\r
>\r
> Amari는 확률분포의 공간에 자연스러운 연결이 정확히 한 쌍 —\r
> 혼합(mixture)의 연결과 지수(exponential)의 연결 — 이 있음을 보였다.\r
> 그리고 이 두 연결이 서로 쌍대(dual)라는 것을 증명했다.\r
> 이 장에서 본 "덧셈의 길"과 "곱셈의 길"이 바로\r
> 그 두 연결 각각이 만드는 측지선이다.\r
>\r
> 같은 시기, 미국에서 Bradley Efron이 독립적으로\r
> "통계적 곡률"이라는 개념을 도입하고 있었다.\r
> 추정 문제의 난이도가 파라미터 공간의 곡률과 관련된다는 관찰이었다.\r
> Amari와 Efron은 서로 다른 출발점에서 같은 산에 올라가고 있었다.\r
> Amari는 미분기하학의 언어로, Efron은 통계학의 언어로.\r
>\r
> Amari의 작업은 1985년 저서 *Differential-Geometrical Methods in Statistics*로\r
> 결정화되었다. 이 책이 "정보기하학(information geometry)"이라는 분야에\r
> 이름을 붙이고 체계를 준 것이다.\r
> 신경망의 학습 규칙에서 출발한 질문이\r
> 확률, 기하학, 최적화를 관통하는 이론이 되기까지 —\r
> 그 여정의 열쇠는 "두 개의 연결"이라는 발견이었다.\r
`,Wh=`# 같은 세계, 다른 눈\r
\r
---\r
\r
여기까지 우리는 확률분포의 공간을 걸어다녔다.\r
\r
점이 있었다. 분포 하나가 삼각형 위의 점 하나였다.\r
거리가 있었다. 같은 두 점인데 방향에 따라 멀기가 달랐다.\r
길이 두 개 있었다. 같은 양 끝점을 잇는데,\r
하나는 더하면서 걷고, 하나는 곱하면서 걸었다.\r
\r
그런데 이 공간의 높낮이를 아직 모른다.\r
\r
어디가 높고 어디가 낮은지.\r
왜 어떤 분포가 다른 분포보다 특별한지.\r
심플렉스의 한가운데가 왜 꼭짓점과 다른지.\r
균등분포가 뭔가 "많아" 보이는 이유가 뭔지.\r
\r
그 높낮이를 읽으려면 새로운 눈이 필요하다.\r
\r
기하학의 눈은 공간과 길을 보았다.\r
이제 열리는 눈은 그 위에 새겨진 숫자를 읽는다.\r
놀라움이라는 숫자. 정보라는 숫자.\r
\r
완전히 다른 출발점에서 시작한다.\r
기하학 편에서 쌓은 도구를 잠시 내려놓자.\r
다음 장의 첫 질문은 기하학과 무관한, 독립적인 질문이다.\r
\r
"예상 밖의 일이 일어났을 때, 그 놀라움을 숫자로 쓸 수 있는가?"\r
\r
---\r
`,qh=`# 놀라움과 정보\r
\r
3장에서 KL 발산이라는 비대칭 거리를 만났다.\r
KL(p‖q)는 숫자를 내뱉었다. 그런데 그 숫자가 정확히 무엇을 재는지는\r
아직 말하지 않았다. KL의 수식 안에는 log가 들어 있다.\r
왜 하필 log인가? 그 답은 "놀라움"이라는 개념에서 시작한다.\r
\r
## 놀라움 — 예상 밖의 일은 정보가 크다\r
\r
### 한 개념\r
\r
확률이 낮은 사건이 일어나면 "놀랍다"\r
\r
### 왜\r
\r
"해가 뜨는 건 뉴스가 안 되는데 일식은 뉴스가 된다.\r
놀라움을 숫자로 쓸 수 있나?"\r
\r
### 비유\r
\r
비유: 뉴스 가치 — 흔한 사건은 뉴스 안 됨.\r
"개가 사람 물면 뉴스 안 됨, 사람이 개 물면 뉴스 됨"\r
\r
### 왜 -log인가\r
\r
"놀라움의 척도로 -log를 쓰는 이유는 무엇인가?\r
1/p도 되고 p²도 될 텐데?\r
핵심은 이것이다:\r
독립사건 두 개가 동시에 일어나면 놀라움은 더해져야 한다.\r
'해가 뜬다'의 놀라움과 '비가 온다'의 놀라움을 합치면\r
'해가 뜨면서 비가 오는' 놀라움이어야 한다.\r
독립이면 확률은 곱해진다: P(A∩B) = P(A)·P(B).\r
곱을 덧셈으로 바꾸는 함수는 log뿐이다.\r
그래서 -log(p)가 놀라움의 유일한 자연스러운 척도다."\r
\r
### 이것이 왜 기계학습과 관련되는가?\r
\r
좋은 모델은 현실에서 흔히 일어나는 일에 놀라지 않는다.\r
"비가 온다"에 대해 모델이 "그럴 리가!" 하고 놀란다면,\r
그 모델은 현실을 잘 모르는 것이다.\r
모델의 놀라움이 클수록 모델이 나쁘다.\r
이 감각이 곧 손실함수로 이어진다.\r
\r
### JSX\r
\r
확률값 p를 슬라이더로 → -log(p) 그래프.\r
p가 작아질수록 놀라움이 급격히 올라가는 곡선.\r
\r
### 파이썬\r
\r
surprise = -np.log(p). 다양한 사건의 놀라움 계산.\r
\r
### 수확\r
\r
"놀라움 = -log(확률). 이것이 정보량."\r
\r
## 엔트로피 — 평균 놀라움\r
\r
### 한 개념\r
\r
분포 전체의 "평균적 놀라움"이 엔트로피\r
\r
### 왜\r
\r
"분포 전체가 얼마나 불확실한지를 숫자 하나로?"\r
\r
### 비유\r
\r
비유: 스무고개 — 20개 물건이 균등하면 평균 질문 수 많고,\r
하나가 거의 확실하면 질문 적다.\r
평균 질문 수 ≈ 엔트로피.\r
\r
2장에서 (μ, σ) 평면 위의 점을 드래그하면 분포 모양이 바뀌었다.\r
σ가 크면 분포가 넓게 퍼져 있다 — 불확실하다 — 엔트로피가 높다.\r
σ가 작으면 뾰족하다 — 확실하다 — 엔트로피가 낮다.\r
엔트로피는 그 모양의 "불확실한 정도"에 붙이는 숫자다.\r
\r
### JSX\r
\r
심플렉스 위의 점을 움직이면 엔트로피 값이 변하는\r
히트맵. 가운데(균등)가 가장 높고 꼭짓점이 가장 낮음.\r
→ 점을 삼각형 한가운데에 놓아보자. 엔트로피 값이 최대가 되는가?\r
\r
### 파이썬\r
\r
H = -sum(p * log(p)). 심플렉스 위에서 등고선 그리기.\r
\r
### 수확\r
\r
"엔트로피는 심플렉스 위의 높이 지도"\r
\r
## 교차엔트로피 — 잘못된 코드북\r
\r
### 한 개념\r
\r
실제 분포 p인데 q의 코드북을 쓰면 비용이 더 든다\r
\r
### 왜\r
\r
"엔트로피와 KL 발산은 무슨 관계인가?"\r
\r
### 비유\r
\r
비유: 외국어 사전 — 한국어 빈도에 맞춘 사전은 효율적인데,\r
영어 빈도에 맞춘 사전으로 한국어를 쓰면 비효율.\r
그 비효율의 양이 교차엔트로피,\r
순수한 낭비분만 떼어내면 KL 발산.\r
\r
딥러닝을 해본 사람이라면 cross-entropy loss라는 이름을 본 적이 있을 것이다.\r
바로 이것이다.\r
현실이 p인데 모델이 q라고 주장하면, 그 주장의 비용이 H(p,q).\r
모델을 학습한다는 건 이 비용을 줄이는 것이다.\r
H(p)는 현실 자체의 불확실성이라 줄일 수 없고,\r
줄일 수 있는 건 KL(p‖q) 부분뿐이다.\r
그래서 cross-entropy를 최소화하는 것과 KL을 최소화하는 것은 같은 일이다.\r
\r
3장에서 "내 모델이 현실에서 얼마나 먼가"를 물었다.\r
그 질문의 답이 여기 있다. KL(p‖q)가 그 거리이고,\r
학습은 그 거리를 줄이는 과정이다.\r
\r
### JSX\r
\r
p(실제)와 q(코드북) 두 분포를 설정하면\r
H(p), H(p,q), KL(p‖q) 세 막대가 나란히.\r
H(p,q) = H(p) + KL(p‖q) 관계가 시각적으로 보임.\r
\r
### 파이썬\r
\r
세 양을 직접 계산하여 관계식 검증.\r
\r
### 수확\r
\r
"KL = 교차엔트로피 − 엔트로피"\r
→ "KL 발산"에서 느꼈던 KL이 이제 '무엇을 재는지' 명확해짐\r
\r
## 간주곡: -log는 강력하다, 그러나\r
\r
### 한 개념\r
\r
-log의 볼록성이 정보이론의 부등식들을 만든다.\r
그런데 -log는 "하나의" 볼록함수일 뿐이다.\r
볼록함수 일반에 대해 성립하는 더 깊은 구조가 있다.\r
\r
### 왜\r
\r
"-log 하나로 KL ≥ 0도 증명하고 젠센 부등식도 나오는데,\r
왜 볼록함수 '일반론'이 필요한가?"\r
\r
KL 발산 하나만으로 충분하지 않을까?\r
충분하지 않다.\r
디퓨전 모델은 KL 말고 다른 거리를 쓴다.\r
강화학습에서도, 변분추론에서도 상황에 따라 다른 거리가 등장한다.\r
거리마다 학습의 성질이 달라진다.\r
그런데 이 거리들이 전부 하나의 가족에서 나온다 —\r
볼록함수를 바꾸면 거리가 바뀐다.\r
\r
### 비유\r
\r
비유: 망치와 공구함 —\r
-log는 좋은 망치다. 못을 잘 박는다.\r
그런데 나사를 만나면? 접착이 필요하면?\r
망치 하나로는 집을 못 짓는다.\r
볼록함수의 일반론은 공구함 전체다.\r
그 공구함 안에 망치(-log)도 있지만,\r
드라이버(르장드르 변환)도, 수평기(쌍대성)도 있다.\r
\r
### JSX\r
\r
y = -log(x) 곡선 위에서 두 점을 잇는 할선.\r
할선이 항상 곡선 위에 있음을 보여주고,\r
"이 간단한 사실 하나에서 KL ≥ 0이 나온다."\r
\r
그런 다음 질문 패널:\r
"그런데 -log 말고 다른 볼록함수 f(x)에서도\r
같은 부등식이 성립한다면?\r
→ f-divergence라는 거리 가족이 존재한다.\r
→ 그 중에서 '접선으로 함수를 다시 쓰는' 기술이\r
르장드르 변환이다.\r
다음 장에서."\r
\r
### 파이썬\r
\r
-log의 볼록성으로 KL ≥ 0을 3줄로 유도.\r
그 다음, f(x) = x² 에서도 같은 논법으로\r
χ² 발산 ≥ 0 을 유도.\r
"볼록함수마다 발산이 하나씩 태어난다."\r
\r
### 수확\r
\r
"-log는 강력하다. 그러나 하나의 사례일 뿐이다.\r
볼록함수의 세계 전체를 열면 더 많은 것이 보인다.\r
구체적으로: 볼록함수를 접선의 모음으로 다시 쓸 수 있다면,\r
원본과 접선의 관계에서 새로운 종류의 대칭이 태어난다.\r
그 대칭을 '같은 정보를 다른 언어로 쓰는 것'이라 부를 수 있다면?"\r
\r
---\r
\r
> ### 인물 이야기 — Shannon, Boltzmann, 그리고 "정보를 세는 법"\r
>\r
> 1948년, 벨 연구소.\r
> Claude Shannon이 "A Mathematical Theory of Communication"을 발표했다.\r
> 이 논문이 풀고자 한 문제는 순수하게 공학적이었다.\r
> 전화선 하나에 메시지를 최대 얼마나 빨리 보낼 수 있는가?\r
>\r
> 이 질문에 답하려면 먼저 "메시지의 양"을 세야 했다.\r
> 그런데 메시지의 양이란 무엇인가?\r
> 글자 수? 아니다. "AAAA"는 "정보"가 적고 "XQZW"는 많다.\r
> 예측 가능한 것에는 정보가 적고, 예측 불가능한 것에는 정보가 많다.\r
>\r
> Shannon은 이 직관을 수학으로 만들었다.\r
> 확률이 p인 사건의 정보량은 -log(p).\r
> 분포 전체의 평균 정보량 — 엔트로피 — 은 H = -Σ p log p.\r
> 그리고 전화선의 용량은 이 엔트로피로 표현된다.\r
>\r
> 여기서 기묘한 일이 일어났다.\r
> Shannon이 이 양에 이름을 붙이려고 할 때,\r
> 수학자 John von Neumann이 조언했다는 유명한 일화가 있다.\r
> "엔트로피라고 부르게. 두 가지 이유가 있네.\r
> 첫째, 자네의 불확실성 함수가 통계역학의 엔트로피와 수학적으로 같은 형태이니까.\r
> 둘째, 아무도 엔트로피가 정확히 뭔지 모르니까,\r
> 논쟁에서 항상 유리할 걸세."\r
>\r
> 농담 반 진담 반이었지만, "수학적으로 같은 형태"라는 부분은 정확했다.\r
> 70년 전, Ludwig Boltzmann은 전혀 다른 문제를 풀고 있었다.\r
> 1870년대 빈(Wien).\r
> 기체 분자 수십억 개가 상자 안에서 날아다닌다.\r
> 각 분자의 속도를 하나하나 추적하는 것은 불가능하다.\r
> 대신 "분자들이 어떤 속도 분포를 가지고 있는가"를 묻는다.\r
>\r
> Boltzmann의 질문은 이것이었다.\r
> 수십억 개의 분자가 주어진 총 에너지를 나눠 가지는 방법은 몇 가지인가?\r
> 그 "방법의 수"의 로그가 엔트로피다.\r
> S = k ln W — 볼츠만의 묘비에 새겨진 공식.\r
> W는 미시 상태의 수, k는 볼츠만 상수.\r
>\r
> 전화선의 용량을 재는 공학자와\r
> 기체 분자의 무질서를 재는 물리학자.\r
> 두 사람이 70년의 간격을 두고 같은 수학에 도달했다.\r
> 우연이 아니었다.\r
> 두 문제 모두 "가능한 경우의 수를 세는" 문제였고,\r
> 경우의 수가 곱으로 커지는 세계에서\r
> 합으로 셀 수 있는 척도를 원했기 때문이다.\r
> 곱을 합으로 바꾸는 함수 — log — 가 두 문제에서 같은 이유로 등장한 것이다.\r
>\r
> 이 수렴은 우연이 아니라 필연이었다는 것을\r
> 7장에서 E.T. Jaynes가 명시적으로 보여준다.\r
> 통계역학과 정보이론이 같은 원리의 두 응용이라는 것을.\r
`,Xh=`# 볼록함수의 쌍대\r
\r
5장에서 -log가 볼록함수라는 것을 보았다.\r
그리고 그 볼록성 하나에서 KL ≥ 0이 나왔다.\r
하지만 -log는 하나의 볼록함수일 뿐이었다.\r
볼록함수 자체가 가진 구조를 이해하면, 훨씬 더 많은 것이 보인다.\r
\r
## 볼록 — 그릇의 기하학\r
\r
### 한 개념\r
볼록함수란 무엇이고 왜 좋은가\r
\r
### 왜\r
"왜 구슬은 그릇 바닥을 찾는데 안장 위에선 못 찾나?"\r
\r
### 비유\r
그릇 vs 안장 vs 감자칩 —\r
그릇에 구슬을 놓으면 바닥을 찾는다(유일한 최소).\r
안장에 놓으면 옆으로 굴러간다(최소가 아님).\r
\r
### JSX\r
함수 y = f(x)를 그리고, 위의 두 점을 잇는 직선을 표시.\r
함수를 바꿔가며(x², x⁴, sin x 등)\r
"직선이 항상 위에 있으면 볼록"을 체험.\r
\r
### 파이썬\r
다양한 함수의 볼록성 판정 (헤시안의 부호 체크).\r
\r
### 수확\r
"볼록하면 답이 하나다"\r
\r
## 젠센 부등식 — 평균의 함수 vs 함수의 평균\r
\r
### 한 개념\r
볼록함수에서 f(평균) ≤ 평균(f)\r
\r
### 왜\r
"왜 기대값에 먼저 함수를 씌우면 손해인가?"\r
\r
### 비유\r
평균 재산의 세금 vs 세금의 평균 —\r
누진세(볼록함수)에서는 소득을 합쳐서 세금 내면\r
따로따로 낼 때보다 더 많다.\r
\r
### JSX\r
볼록함수 f(x) = x^α 위에서 여러 점(데이터)의 위치를 찍으면\r
"함수값의 평균"(높은 점)과 "평균의 함수값"(낮은 점)을\r
세로 막대로 비교. 차이가 젠센 갭.\r
α 슬라이더(1 ~ 4)로 볼록성의 강도를 조절:\r
α = 1이면 직선(갭 = 0),\r
α가 커질수록 곡선이 깊어지며 젠센 갭이 벌어진다.\r
"볼록할수록 불평등이 심해진다"를 손으로 체감.\r
\r
### 파이썬\r
몬테카를로로 E[f(X)] ≥ f(E[X]) 체감.\r
\r
### 수확\r
"볼록성이 부등식을 만든다" → 정보이론의 부등식들의 뿌리\r
\r
## 번역의 힘 — 어려운 문제를 쉬운 문제로\r
\r
### 한 개념\r
같은 문제를 다른 좌표/언어로 쓰면 풀기 쉬워지는 경우가 있다.\r
이것이 쌍대성의 실용적 가치이며,\r
르장드르 변환은 볼록함수에서 그 번역을 수행하는 도구다.\r
\r
### 왜\r
"볼록하면 좋다는 건 알겠다. 부등식도 나온다.\r
그런데 볼록함수를 '다른 언어로 다시 쓰는' 게 왜 필요한가?\r
원래 언어로 충분하지 않은가?"\r
\r
3장에서 유클리드 거리가 확률분포 공간에서 통하지 않는다는 것을 보았다.\r
좋은 자가 필요했다. 마찬가지로, 좋은 번역기도 필요하다.\r
한쪽에서 어려운 문제가 다른 쪽에서 쉬워지는 번역기.\r
\r
### 비유\r
비유 — 세 가지 번역의 사례:\r
수학과 공학에는 오래된 전략이 하나 있다.\r
**여기서 어려운 문제를 저기로 보내서 풀고, 답을 다시 가져온다.**\r
\r
① 직교좌표 → 극좌표\r
원의 넓이를 구하고 싶다.\r
직교좌표 (x, y)에서는 적분 범위가 복잡하다.\r
x² + y² ≤ r²이라는 원의 경계를 x와 y로 표현하면\r
적분의 위아래 한계가 제곱근 안에 들어간다.\r
극좌표 (r, θ)로 번역하면?\r
원의 경계가 그냥 "r ≤ R"이 된다. 한 줄.\r
적분이 한순간에 풀린다.\r
문제가 바뀐 게 아니다. 좌표가 바뀌었을 뿐이다.\r
그런데 한쪽에서 꼬여 있던 것이 다른 쪽에서 풀린다.\r
\r
② 시간 → 주파수 (푸리에 변환)\r
복잡한 음파가 있다. 시간 축에서 보면 울퉁불퉁한 곡선이다.\r
이 곡선에서 "피아노 소리만 빼고 싶다"면?\r
시간 축에서는 거의 불가능하다. 모든 소리가 뒤엉겨 있으니까.\r
푸리에 변환을 하면 — 시간의 언어를 주파수의 언어로 번역하면 —\r
피아노는 특정 주파수 대역에 깔끔하게 모여 있다.\r
그 대역만 잘라내면 된다. 쉽다.\r
시간에서 어려운 문제가 주파수에서 쉬워졌다.\r
답을 구한 뒤 역변환으로 시간으로 돌아오면 된다.\r
\r
③ 미분방정식 → 대수방정식 (라플라스 변환)\r
스프링에 매달린 물체의 운동을 기술하는 미분방정식이 있다.\r
미분방정식을 직접 풀기는 까다롭다.\r
라플라스 변환을 하면 — 미분이 곱셈이 된다.\r
미분방정식이 그냥 곱셈과 나눗셈으로 이루어진 대수방정식으로 바뀐다.\r
대수방정식은 중학생도 풀 수 있다.\r
풀고 나서 역변환으로 돌아오면 원래 문제의 답이다.\r
\r
### 공통 패턴\r
\`\`\`\r
[원래 세계]  →  변환  →  [다른 세계]\r
어려운 문제              쉬운 문제\r
                          ↓ 풀기\r
[원래 세계]  ←  역변환  ← 답\r
\`\`\`\r
변환과 역변환이 짝을 이루고,\r
한쪽에서 꼬여 있던 것이 다른 쪽에서 풀린다.\r
\r
### 볼록함수에서의 번역\r
볼록함수의 세계에도 같은 전략이 있다.\r
볼록함수 f(x)를 "x의 값으로 보는" 것이 원래 세계다.\r
같은 함수를 "접선의 기울기로 보는" 것이 다른 세계다.\r
x에서 어려운 질문 — 예를 들어 "이 함수에 제약 조건을 걸면\r
최솟값이 어떻게 바뀌는가?" — 이 기울기의 세계에서는\r
제약 조건이 사라지고 자유로운 최적화가 된다.\r
그 번역기의 이름이 **르장드르 변환**이다.\r
\r
볼록함수에서만 작동한다 — 볼록하면 기울기와 점이 일대일 대응이라서\r
번역이 가역적이기 때문이다. 볼록하지 않으면 역변환이 깨진다.\r
(극좌표에서 원점이 특이점이 되듯, 비볼록에서는 번역이 일대일이 아니다.)\r
\r
그래서 젠센 부등식에서 배운 "볼록하면 좋다"에\r
두 번째 이유가 추가된다.\r
- 첫 번째: 볼록하면 답이 하나다 (최적화).\r
- **두 번째: 볼록하면 번역이 가역적이다 (쌍대성).**\r
\r
### 왜 하필 르장드르인가\r
왜 하필 르장드르인가 — 다른 번역기들과의 결정적 차이:\r
극좌표, 푸리에, 라플라스, 그리고 르장드르.\r
전부 번역기다. 그런데 르장드르는 다른 셋과 성격이 다르다.\r
\r
**재료가 다르다.**\r
푸리에와 라플라스는 함수 전체를 적분해서 번역한다.\r
함수의 모양 전체를 알아야 변환할 수 있다.\r
국소적 정보로는 안 된다.\r
르장드르 변환은 한 점에서의 접선으로 번역한다.\r
기울기 하나. y절편 하나.\r
적분이 아니라 미분. 전역이 아니라 국소.\r
이 차이가 나중에 중요해진다.\r
파라미터 공간의 "국소적 구조" — 한 점 근처에서\r
접선이 어떻게 생겼는가 — 가 곡률과 거리를 결정하는데(8장, 9장),\r
르장드르 변환이 그 접선의 언어로 말하는 번역기이기 때문이다.\r
\r
**변환 자체가 역변환이다.**\r
푸리에 변환은 역변환 공식이 따로 있다.\r
변환과 역변환이 다른 수식이다. 라플라스도 마찬가지다.\r
르장드르 변환은 두 번 적용하면 원래 함수가 돌아온다.\r
(F*)* = F. 변환 = 역변환.\r
이것은 원본과 번역본이 **완전히 대등하다**는 뜻이다.\r
한쪽이 "진짜"이고 다른 쪽이 "그림자"가 아니다.\r
둘 다 동등하게 진짜다.\r
이 대칭이 곧 만나게 될 θ와 η의 관계다 —\r
θ에서 η로 가는 것과 η에서 θ로 돌아오는 것이 같은 연산.\r
어느 쪽도 더 근본적이지 않다.\r
시소의 양쪽이 구조적으로 동일한 것.\r
이 완벽한 대칭이 이 교재 뒷부분 전체를 관통하는\r
쌍대성의 수학적 뿌리다.\r
\r
**볼록함수에서만 작동한다 — 그리고 확률의 핵심 함수가 볼록이다.**\r
푸리에는 주기함수의 세계에서 작동한다.\r
라플라스는 지수적으로 폭발하지 않는 함수의 세계에서.\r
극좌표 변환은 어디서든 쓸 수 있지만 원형 대칭이 있을 때만 빛난다.\r
르장드르 변환은 볼록함수의 세계에서,\r
그리고 오직 볼록함수에서만 완전히 작동한다.\r
볼록해야 기울기와 점이 일대일로 대응하고,\r
일대일이어야 번역이 가역적이다.\r
그런데 — 5장 간주곡에서 -log가 볼록하다는 걸 보았다.\r
곧 만나게 될 F(θ)(로그정규화자)도 볼록하다.\r
확률분포의 세계에서 핵심 함수가 볼록이다.\r
다른 번역기들은 이 볼록 구조를 모른다.\r
르장드르 변환은 볼록 구조 위에서 태어난 번역기다.\r
열쇠가 자물쇠에 맞는 것처럼,\r
르장드르 변환은 확률의 볼록 구조에 정확히 맞는다.\r
\r
### 수확\r
"어려운 문제를 다른 언어로 번역해서 풀고 돌아오는 전략이 있다.\r
극좌표, 푸리에, 라플라스 — 전부 같은 패턴.\r
볼록함수의 세계에서 그 번역기가 르장드르 변환이다.\r
다른 번역기들은 적분으로 번역한다. 르장드르는 접선으로 번역한다.\r
다른 번역기들은 변환과 역변환이 다르다. 르장드르는 자기 자신이 역변환이다.\r
그래서 원본과 번역본이 완전히 대등하다 — 이것이 쌍대성의 뿌리다.\r
그리고 확률의 핵심 함수가 볼록이므로, 이 번역기가 정확히 맞는 열쇠다.\r
그러면 그 번역기는 구체적으로 어떻게 작동하는가?"\r
\r
## 르장드르 변환 — 그림자로 원본 복원하기\r
\r
### 한 개념\r
볼록함수를 접선의 언어로 완전히 다시 쓸 수 있다\r
\r
### 왜\r
"번역기가 존재한다고 했다. 어떻게 작동하는가?\r
함수를 '점의 모음'이 아니라 '접선의 모음'으로 보면 된다."\r
\r
### 비유\r
울타리와 그림자 —\r
울타리(볼록곡선)에 해가 비치면 바닥에 그림자가 생긴다.\r
각도를 바꿔가며 그림자를 모으면 울타리를 복원할 수 있다.\r
각 각도 = 기울기, 그림자 길이 = y절편.\r
기울기→y절편 함수가 르장드르 변환.\r
\r
### JSX\r
볼록곡선 위의 점을 움직이면 접선이 그려지고,\r
(기울기, y절편) 쌍이 오른쪽 좌표계에 점으로 찍힘.\r
점을 쭉 움직이면 오른쪽에 새로운 곡선(F*)이 완성.\r
\r
### 파이썬\r
수치적 르장드르 변환 — F → F* → F 왕복.\r
\r
### 두 번째 비유\r
용수철에 매달린 공 —\r
울타리 비유가 번역기의 기하학적 작동 방식을 보여줬다.\r
그런데 이 번역기가 추상이 아니라 물리에서 실제로 쓰인다.\r
속도의 언어와 운동량의 언어 — 역학의 르장드르 변환이 그것이다.\r
이름이 무서워 보이지만 단순하다.\r
라그랑지안은 "속도로 쓴 에너지"이고,\r
해밀토니안은 "운동량으로 쓴 에너지"다.\r
같은 에너지를 다른 변수로 표현한 것뿐이다.\r
공이 진동한다. 매 순간 속도 v가 있다.\r
속도에 질량을 곱하면 운동량 p = mv.\r
같은 운동의 두 가지 기술(記述).\r
\r
속도의 언어로 에너지를 쓰면:\r
라그랑지안 L(v) = ½mv² − V(x).\r
"속도가 이만큼이면 운동에너지는 이만큼."\r
\r
운동량의 언어로 에너지를 쓰면:\r
해밀토니안 H(p) = p²/2m + V(x).\r
"운동량이 이만큼이면 에너지는 이만큼."\r
\r
L에서 H로 바꾸는 방법:\r
p = ∂L/∂v (기울기가 새 좌표가 된다!)\r
H = pv − L (기울기 × 변수 − 원래 함수)\r
이것이 르장드르 변환이다.\r
\r
그리고 항상 성립하는 등식:\r
L(v) + H(p) = pv\r
원본과 변환의 합 = 좌표의 곱.\r
울타리 비유에서 F + F* = θη 였던 것과 같다.\r
\r
### JSX 보강\r
JSX 보강 — 용수철 시뮬레이션:\r
화면을 세 영역으로 나눈다.\r
\r
[왼쪽] 용수철 진동 애니메이션\r
용수철에 매달린 공이 실시간으로 진동.\r
현재 위치 x, 속도 v, 운동량 p가 숫자로 표시.\r
슬라이더: 질량 m, 용수철 상수 k.\r
→ 질량 m 슬라이더를 천천히 올려보자. 왼쪽 곡선(L)이 뾰족해질 때 오른쪽 곡선(H)은 어떻게 되는가?\r
\r
[오른쪽 위] L(v) 곡선\r
포물선 ½mv².\r
공이 움직일 때마다 곡선 위의 점이 따라 이동.\r
그 점에서의 접선이 실시간으로 그려짐.\r
접선의 기울기 = p 가 숫자로 표시.\r
\r
[오른쪽 아래] H(p) 곡선\r
포물선 p²/2m.\r
위에서 구한 p에 대응하는 점이 찍힘.\r
공이 한 주기를 돌면 두 곡선 위의 점이\r
각각 자기 곡선을 한 바퀴 훑는다.\r
\r
[하단 바] 등식 실시간 표시\r
L = [값] | H = [값] | pv = [값] | L + H = [값]\r
공이 어느 위치에 있든 L + H = pv 가\r
항상 성립하는 것을 숫자로 확인.\r
\r
슬라이더 인터랙션:\r
질량 m을 키우면 → L(v) = ½mv² 의 곡률이 커지고,\r
H(p) = p²/2m 의 곡률은 작아진다.\r
"원본이 뾰족해지면 쌍대가 넓어진다."\r
이것은 볼록성과 쌍대성의 관계를\r
손으로 만져보는 것.\r
("볼록"과 "쌍대성"에서 배운 것의 물리적 체현.)\r
\r
### 파이썬 보강\r
scipy로 용수철 운동 시뮬레이션.\r
매 시간 스텝에서 v, p, L(v), H(p), pv를 계산.\r
L + H == pv 가 수치적으로 성립함을 테이블로 출력.\r
m을 바꿔가며 L 곡선과 H 곡선의 모양 변화를 플롯.\r
\r
### 수확\r
"하나의 볼록함수 = 두 개의 좌표계에서 본 같은 정보"\r
그리고 그것은 추상적 등식이 아니라,\r
용수철 하나가 매 순간 증명하는 물리적 사실이다.\r
\r
## 쌍대성 — F와 F*는 같은 동전의 양면\r
\r
### 한 개념\r
F(θ) + F*(η) = θη 라는 관계\r
\r
### 왜\r
"원본과 그림자 사이에 정확한 등식이 성립한다?"\r
\r
### 비유\r
시소 — 한쪽이 올라가면 다른 쪽이 내려간다.\r
F가 커지면 F*가 작아지고, 합은 항상 θη.\r
\r
### JSX\r
θ 슬라이더를 움직이면 F(θ), η, F*(η), θη가\r
네 개의 막대로 실시간 표시.\r
F + F* = θη 가 항상 성립하는 것을 확인.\r
\r
### 파이썬\r
다양한 볼록함수에서 이 등식을 수치 검증.\r
\r
### 수확\r
"이게 바로 쌍대성의 수학적 실체"\r
\r
그리고 이 이야기는 아직 추상적이다.\r
F는 아무 볼록함수였고, θ는 아무 변수였다.\r
용수철의 에너지일 수도 있고, 도시의 교통비용일 수도 있다.\r
\r
그런데 만약 F가 확률분포에서 태어난 함수라면?\r
만약 θ가 분포의 모양을 결정하는 파라미터라면?\r
2장에서 (μ, σ)가 분포를 점으로 만들어주었듯,\r
θ도 분포를 점으로 만들어주는 좌표다.\r
\r
놀라운 사실이 있다.\r
정규분포, 포아송 분포, 베르누이 분포 —\r
겉모양이 전혀 다른 이 분포들이\r
전부 같은 골격을 공유한다.\r
그 골격의 한가운데에 볼록함수 F(θ)가 앉아 있다.\r
그 골격을 뜯어보지 않을 수 없다.\r
\r
---\r
\r
> ### 인물 이야기 — Legendre, Gauss, 그리고 빼앗긴 우선권\r
>\r
> 1805년, 파리.\r
> Adrien-Marie Legendre는 55세의 수학자였다.\r
> 프랑스 혁명과 나폴레옹 전쟁을 거치며 재산과 지위를 잃었지만,\r
> 수학만은 놓지 않았다.\r
> 이 해에 그는 *Nouvelles méthodes pour la détermination des orbites des comètes*를\r
> 출판했다. 혜성의 궤도를 관측 데이터에서 결정하는 방법에 관한 책이다.\r
>\r
> 문제는 이것이었다.\r
> 천문학자가 혜성의 위치를 여러 번 관측한다.\r
> 관측에는 오차가 있다. 어떤 궤도가 이 관측들과 "가장 잘 맞는가"?\r
> "가장 잘 맞는다"를 어떻게 정의할 것인가?\r
>\r
> Legendre의 답: 관측값과 예측값의 차이를 제곱해서 합한 것을 최소화하라.\r
> 오늘날 우리가 "최소제곱법"이라 부르는 것이다.\r
> 기계학습에서 가장 기본적인 손실함수 — MSE — 의 원형.\r
>\r
> 6년 뒤, 1809년.\r
> 독일의 Carl Friedrich Gauss가 같은 방법을 자기 책에 실으며\r
> "나는 1795년부터 이 방법을 쓰고 있었다"고 주장했다.\r
> 출판은 Legendre가 먼저였지만, Gauss는 자기가 더 일찍 발견했다고 했다.\r
> 증거는 없었다 — 사적인 메모와 편지뿐.\r
>\r
> Legendre는 분노했다.\r
> "이 방법은 내가 처음 출판한 것이다"라고 공개적으로 항의했지만,\r
> Gauss의 명성은 이미 압도적이었다.\r
> 수학사에서 최소제곱법은 "가우스의 방법"으로 더 많이 불린다.\r
> 이것은 학문의 역사에서 되풀이되는 패턴이다 —\r
> 발견보다 명성이 이름을 결정하는.\r
>\r
> 그런데 Legendre에게는 최소제곱법보다 더 오래 살아남은 것이 있다.\r
> 이 장의 주인공인 르장드르 변환이다.\r
> 볼록함수를 접선의 언어로 완전히 다시 쓰는 이 도구는\r
> Legendre가 만들었고, 이번에는 이름이 제대로 붙었다.\r
>\r
> 르장드르 변환은 처음에는 해석역학에서 쓰였다.\r
> 라그랑지안(속도의 에너지)에서 해밀토니안(운동량의 에너지)으로\r
> 번역하는 도구로. 그 뒤 열역학에서 핵심이 되었다.\r
> 내부 에너지, 엔탈피, 헬름홀츠 자유에너지, 깁스 자유에너지 —\r
> 열역학의 네 포텐셜은 전부 르장드르 변환으로 연결된다.\r
> 같은 물리를 다른 변수로 볼 때마다 르장드르 변환이 번역기가 된다.\r
>\r
> 그리고 이제 정보기하학에서 같은 변환이 세 번째 생을 산다.\r
> 자연모수 θ에서 기대모수 η로의 번역.\r
> 로그정규화자 F(θ)에서 음의 엔트로피 F*(η)로의 번역.\r
> 200년 전의 도구가, 이름을 빼앗긴 수학자의 발명이,\r
> 확률분포의 기하학에서 양쪽 좌표계를 잇는 다리로 살아 있다.\r
`,Jh=`# 두 눈을 동시에\r
\r
---\r
\r
기하학의 눈으로 우리는 공간과 길을 보았다.\r
점이 있고, 거리가 있고, 같은 두 점을 잇는 길이 두 개 있었다.\r
\r
정보의 눈으로 우리는 놀라움과 볼록성을 보았다.\r
놀라움이 숫자가 되었고, 그 숫자가 부등식을 만들었고,\r
볼록함수를 접선의 언어로 다시 쓸 수 있었다.\r
\r
지금까지 두 눈은 따로 떠 있었다.\r
기하학은 기하학대로, 정보는 정보대로.\r
\r
이제 두 눈을 동시에 뜨면, 풍경이 달라진다.\r
\r
정규분포, 포아송 분포, 베르누이 분포.\r
겉모양이 전혀 다른 이 분포들 밑에\r
같은 골격이 숨어 있다.\r
그 골격의 한가운데에\r
볼록함수 하나가 앉아 있고,\r
그 볼록함수가 좌표를 만들고,\r
좌표가 두 개의 길을 만든다.\r
\r
기하학의 좌표와 정보의 볼록성이\r
하나의 대상 안에서 만나는 지점.\r
\r
그것이 지수족이다.\r
\r
다음 장부터, 매 장이 기하학과 정보 양쪽을 동시에 사용한다.\r
한쪽 눈만으로는 보이지 않던 구조가 보이기 시작한다.\r
\r
---\r
`,Qh=`# 지수족\r
\r
6장에서 볼록함수 F와 그 쌍대 F*의 관계를 보았다.\r
기울기가 새 좌표가 되고, 원본과 쌍대의 합이 좌표의 곱이 된다.\r
울타리에서 한 번, 용수철에서 한 번 — 같은 구조를 두 번 만났다.\r
\r
그리고 마지막에 질문을 남겼다.\r
만약 F가 확률분포에서 태어난 함수라면?\r
만약 θ가 분포의 모양을 결정하는 파라미터라면?\r
\r
그 질문의 답이 이 장에 있다.\r
정규분포, 포아송 분포, 베르누이 분포 — 겉모양이 전혀 다른 이 분포들이\r
전부 같은 골격을 공유한다. 그 골격의 한가운데에 볼록함수 F(θ)가 앉아 있다.\r
6장의 추상적 등식이 여기서 구체적 의미를 얻는다.\r
\r
## 패턴이 있는 분포들\r
\r
### 한 개념\r
\r
여러 분포가 같은 골격을 공유한다\r
\r
### 왜\r
\r
"Bernoulli, Poisson, Gaussian —\r
동전, 지진 횟수, 키의 분포.\r
이것들은 세상에서 하는 일이 전혀 다르다.\r
그런데 수학자들이 이 셋을 같은 가족이라고 부른다.\r
어디가 같다는 건가?"\r
\r
### 비유\r
\r
비유: 레고 —\r
성, 우주선, 자동차. 겉모양은 완전히 다르다.\r
그런데 뒤집어 보면 결합부가 같다.\r
같은 돌기와 홈. 같은 규격.\r
그래서 성의 부품을 우주선에 끼울 수 있다.\r
\r
지수족 분포도 그렇다.\r
겉모양(종 모양, 계단 모양, L자 모양)은 다르지만\r
뒤집어 보면 세 개의 결합부가 있다:\r
  θ — 분포의 성격을 결정하는 손잡이 (자연모수)\r
  t(x) — 데이터에서 뽑아내는 요약 (충분통계량)\r
  F(θ) — 전체 확률이 1이 되도록 맞추는 균형추 (로그정규화자)\r
이 세 부품의 결합 규칙이 동일하다:\r
  p(x) = exp(θ·t(x) − F(θ))\r
레고 설명서가 하나면 되듯이, 수식도 하나면 된다.\r
\r
### JSX\r
\r
JSX: Nielsen-Garcia 플래시카드 —\r
카드를 넘기면 분포가 바뀐다.\r
Bernoulli → Poisson → Gaussian → Exponential.\r
각 카드에서 θ, t(x), F(θ)가 하이라이트되고,\r
위의 공통 골격 exp(θ·t(x) − F(θ))에서\r
해당 부품이 깜빡인다.\r
"겉은 다른데 골격이 같다"를 반복 체험.\r
\r
→ 카드를 넘길 때마다 분포의 모양이 확 바뀌는데,\r
  θ·t(x) − F(θ) 구조는 그대로인 것을 확인하자.\r
  이것이 "같은 가족"의 의미다.\r
\r
### 파이썬\r
\r
파이썬: 하나의 함수 exp(θ·t(x) - F(θ))로 여러 분포 생성.\r
θ, t, F를 바꿔 끼우기만 하면\r
Bernoulli, Poisson, Gaussian이 전부 나온다.\r
"코드가 하나면 된다"는 것이 가족의 증거.\r
\r
### 수확\r
\r
"지수족 = 같은 골격(θ, t(x), F)을 공유하는 분포의 가족.\r
정준분해: p(x) = exp(θ·t(x) − F(θ))."\r
\r
## 충분통계량 — 데이터를 요약하는 마법\r
\r
### 한 개념\r
\r
데이터 전체를 보지 않아도 t(x)만 있으면 충분하다\r
\r
### 왜\r
\r
"데이터 100만 개를 숫자 두 개로 요약해도 정보 손실이 없다?\r
직관적으로 말이 안 된다. 어떻게 가능한가?"\r
\r
### 비유 1\r
\r
비유 1: 레시피 vs 재료 전체 사진 —\r
케이크를 만들 때 "밀가루 200g, 설탕 100g"이면 충분.\r
밀가루 알갱이 하나하나를 사진 찍을 필요 없다.\r
어떤 밀가루 알갱이가 먼저 들어갔는지,\r
어떤 알갱이가 봉지 왼쪽에 있었는지는 케이크 맛에 영향이 없다.\r
레시피(충분통계량)만 있으면 같은 케이크를 만들 수 있다.\r
\r
### 비유 2\r
\r
비유 2: 야구 타자의 기록 —\r
시즌 전체의 모든 타석을 영상으로 가지고 있다고 하자.\r
하지만 타율을 계산하려면 두 숫자면 된다:\r
안타 수와 타석 수.\r
162경기의 영상은 필요 없다.\r
이 두 숫자가 "타율에 대한 충분통계량"이다.\r
영상을 지워도 타율에 관해서는 아무것도 잃지 않는다.\r
\r
2장에서 수십만 명의 키 데이터가 (174, 5.8)이라는 점 하나로\r
압축되는 것에 감탄했다. 어떻게 가능한가?\r
답이 여기 있다. 가우시안은 지수족이고,\r
지수족의 충분통계량은 유한하다.\r
수십만 개의 데이터가 숫자 두 개 (Σx, Σx²)로 요약되어도\r
분포의 파라미터에 대한 정보는 한 톨도 사라지지 않는다.\r
(μ, σ)로의 압축이 가능했던 이유가 바로 이것이다.\r
\r
### 왜 지수족에서만 이것이 특별한가\r
\r
모든 분포에 충분통계량이 있긴 하다.\r
하지만 대부분의 경우 충분통계량은 데이터 전체다 — 요약이 안 된다.\r
지수족이 특별한 이유는 충분통계량의 차원이 유한하다는 것이다.\r
가우시안이면 (Σx, Σx²) 두 개.\r
데이터가 100개든 100만 개든, 숫자 두 개로 충분하다.\r
이것이 지수족을 "다루기 좋은 가족"으로 만드는 핵심이다.\r
\r
### JSX\r
\r
데이터 점들이 하나씩 들어올 때마다 충분통계량이\r
업데이트되는 애니메이션.\r
왼쪽에 데이터 점들이 쌓이고(점점 복잡해지고),\r
오른쪽에 충분통계량 숫자 두 개가 갱신된다.\r
데이터가 100개가 되어도 오른쪽은 숫자 두 개뿐.\r
"정보는 보존되면서 복잡성은 사라진다."\r
\r
→ 데이터가 50개 쌓였을 때와 100개 쌓였을 때,\r
  오른쪽 숫자의 정밀도가 달라지는가?\r
  숫자의 개수는 달라지는가?\r
\r
### 파이썬\r
\r
파이썬: 가우시안 데이터에서 (Σx, Σx²)만으로 MLE 복원.\r
데이터 100만 개를 생성하고, 전체 데이터를 버린 뒤\r
충분통계량 두 개만으로 μ와 σ를 정확히 복원.\r
\r
### 수확\r
\r
"지수족이 특별한 이유 = 유한한 충분통계량의 존재.\r
데이터를 숫자 몇 개로 요약해도 파라미터에 대한 정보가 온전하다."\r
\r
## 자연모수 θ — 분포의 첫 번째 주소\r
\r
### 한 개념\r
\r
θ 좌표계와 그 의미\r
\r
### 왜\r
\r
"같은 정규분포를 (μ, σ)로도 쓸 수 있고\r
다른 방식으로도 쓸 수 있다면,\r
어떤 방식이 분포의 '진짜 주소'인가?\r
아니면 진짜 주소 같은 건 없는가?"\r
\r
### 비유\r
\r
비유: 집의 주소 — "서울시 강남구 역삼동 123"\r
이 주소는 행정 구역의 언어다.\r
주소를 보면 "강남구에 있구나"는 바로 알지만,\r
"역삼역에서 몇 미터인가"는 바로 안 보인다.\r
주소 체계는 행정의 편의를 위해 만들어졌다.\r
\r
θ는 지수족의 "행정 주소"다.\r
분포의 골격 exp(θ·t(x) − F(θ))에서\r
θ는 지수 안에 직접 들어앉는 좌표다.\r
그래서 자연모수(natural parameter)라 부른다.\r
"이 골격에 가장 자연스럽게 맞는 좌표"라는 뜻이다.\r
\r
3장에서 (μ, σ) 좌표로 잰 유클리드 거리가\r
확률분포의 다름을 제대로 재지 못한다는 것을 보았다.\r
(μ, σ)는 우리에게 직관적이지만,\r
분포의 기하학에는 맞지 않는 좌표였다.\r
θ는 그 반대다 — 우리에게는 낯설지만\r
분포의 골격에는 정확히 맞는 좌표다.\r
\r
문제는, θ가 직관적이지 않다는 것이다.\r
가우시안의 θ = (μ/σ², −1/(2σ²)).\r
이걸 보고 "아, 평균이 3이고 표준편차가 2인 분포!"라고\r
바로 읽을 수 있는 사람은 없다.\r
그러나 수학적으로는 이 좌표가 가장 깔끔하다.\r
곱셈의 길(4장)이 이 좌표에서 직선이 되기 때문이다.\r
\r
### JSX\r
\r
두 패널 구성.\r
[왼쪽] (μ, σ) 슬라이더 → 가우시안 분포 모양 변화.\r
  익숙한 좌표. 직관적. "평균을 오른쪽으로, 폭을 넓게."\r
[오른쪽] (θ₁, θ₂) 슬라이더 → 같은 분포의 모양 변화.\r
  낯선 좌표. θ₁을 움직이면 평균과 폭이 동시에 변한다.\r
  "같은 분포인데 손잡이의 느낌이 다르다."\r
\r
핵심 체험: 두 패널의 분포가 항상 일치하는 것을 확인.\r
"좌표가 다를 뿐, 가리키는 분포는 같다."\r
\r
### 파이썬\r
\r
파이썬: (μ,σ) → θ = (μ/σ², -1/(2σ²)) 변환 구현.\r
여러 (μ, σ) 쌍을 θ로 변환하고,\r
θ에서 다시 분포를 복원하여 원래 분포와 일치하는지 확인.\r
\r
### 수확\r
\r
"θ는 지수족의 골격에 맞춘 좌표.\r
곱셈의 길이 직선이 되는 좌표.\r
직관적이진 않지만 수학적으로 자연스럽다."\r
\r
## 기대모수 η — 분포의 두 번째 주소\r
\r
### 한 개념\r
\r
η 좌표계와 그 의미\r
\r
### 왜\r
\r
"θ가 '행정 주소'라면,\r
같은 분포를 더 직관적으로 가리키는 좌표는 없는가?\r
데이터를 보고 바로 읽어낼 수 있는 좌표 말이다."\r
\r
### 비유\r
\r
비유: 집의 GPS — "37.5°N, 127.0°E"\r
GPS 좌표는 물리적 위치를 직접 가리킨다.\r
주소를 몰라도 좌표만 있으면 찾아갈 수 있다.\r
그리고 두 집의 GPS를 평균 내면\r
두 집의 "중간 지점"이 된다 — 직관적으로 자연스럽다.\r
\r
η는 분포의 "GPS 좌표"다.\r
η = E[t(x)] — 충분통계량의 기대값.\r
가우시안이면 η = (E[x], E[x²]) = (μ, μ²+σ²).\r
데이터의 평균과 이차모멘트.\r
데이터를 보면 바로 계산할 수 있다.\r
\r
그리고 두 분포의 η를 평균 내면\r
혼합분포(4장 "첫 번째 길")의 η가 된다.\r
덧셈의 길이 η 좌표에서 직선이 되는 것이다.\r
θ에서는 곱셈이 직선, η에서는 덧셈이 직선.\r
같은 공간인데 좌표에 따라 "직선"이 다르다 —\r
4장 "두 길이 다른 곳을 지나간다"의 재발견.\r
\r
### JSX\r
\r
두 패널 — θ 공간과 η 공간을 나란히.\r
[왼쪽] θ 공간에서 두 점을 잇는 직선(e-측지선).\r
  이 직선 위의 각 점에 대응하는 분포가 아래에 표시.\r
[오른쪽] 같은 두 점을 η 공간에서 잇는 직선(m-측지선).\r
  이 직선 위의 각 점에 대응하는 분포가 아래에 표시.\r
"같은 양 끝점인데, θ의 직선과 η의 직선이 다른 경로를 그린다."\r
4장에서 본 두 길이 여기서 좌표의 언어로 번역된다.\r
\r
### 파이썬\r
\r
파이썬: θ → η 변환(∇F 계산)을 수치 미분으로 구현.\r
가우시안에서 θ = (μ/σ², -1/(2σ²)) →\r
η = ∇F(θ) = (μ, μ²+σ²) 를 수치적으로 확인.\r
\r
### 수확\r
\r
"η는 데이터에서 바로 읽히는 좌표.\r
덧셈의 길이 직선이 되는 좌표.\r
θ에서 곱셈이 직선, η에서 덧셈이 직선 —\r
좌표가 기하학을 결정한다."\r
\r
## θ와 η를 잇는 다리 — 르장드르 재발견\r
\r
### 한 개념\r
\r
θ↔η 변환이 6장의 르장드르 변환이었다!\r
\r
### 왜\r
\r
"두 좌표 사이의 변환 공식, 어디서 봤는데..."\r
\r
### 도입\r
\r
"르장드르 변환"에서 우리는 속도 v와 운동량 p가\r
르장드르 변환으로 연결되는 것을 보았다.\r
p = ∂L/∂v — 기울기가 새 좌표가 되었다.\r
이제 같은 일이 일어난다.\r
η = ∇F(θ) — F의 기울기가 새 좌표가 된다.\r
속도 → 운동량이었던 것이\r
이번에는 자연모수 → 기대모수다.\r
구조가 같다. 그래서 같은 이름(르장드르 변환)이다.\r
\r
### 비유\r
\r
"아, GPS↔주소 변환기가 바로 그 그림자 이야기!"\r
6장에서 울타리의 기울기가 새 좌표가 되었다.\r
여기서 F(θ)의 기울기가 η가 된다.\r
6장에서 F + F* = θη 가 성립했다.\r
여기서도 F(θ) + F*(η) = θ·η 가 성립한다.\r
용수철에서 L(v) + H(p) = pv 였던 것이\r
이번에는 로그정규화자와 그 쌍대의 관계다.\r
세 번째 만남 — 같은 패턴이 반복된다.\r
\r
### JSX\r
\r
θ 슬라이더 → F(θ) 곡선 위의 점 →\r
접선의 기울기 = η → F*(η) 곡선 위의 대응점.\r
6장의 시각화를 지수족 구체예에 연결.\r
\r
하단에 등식 실시간 표시:\r
F(θ) = [값] | F*(η) = [값] | θ·η = [값]\r
| F + F* = [값]\r
6장 용수철에서 L + H = pv 였던 것과 같은 형식.\r
"같은 등식이 다른 옷을 입고 돌아왔다."\r
\r
### 파이썬\r
\r
파이썬: 가우시안/포아송에서 F→∇F=η→F* 수치 검증.\r
F(θ) + F*(η) = θ·η 가 수치적으로 성립하는지 확인.\r
\r
### 수확\r
\r
나선형 학습의 정점 — "모든 것이 연결된다."\r
6장의 추상적 볼록함수가 지수족에서 구체적 의미를 얻었다.\r
울타리 → 용수철 → 지수족. 세 번의 만남.\r
같은 수학적 구조(르장드르 변환)가 세 개의 다른 세계에서\r
각각 자기 역할을 하고 있었다.\r
\r
## 접선이 만드는 거리 — 브레그만 발산\r
\r
### 한 개념\r
\r
볼록함수의 값과 접선의 예측값 사이의 차이가\r
하나의 거리를 정의한다. 이것이 브레그만 발산이다.\r
\r
### 왜\r
\r
"6장에서 볼록함수의 접선으로 함수를 다시 쓸 수 있었다.\r
그런데 접선은 완벽하지 않다 — 원래 함수와 차이가 있다.\r
그 '차이'가 혹시 거리 아닌가?"\r
\r
### 비유\r
\r
비유: 절벽 위의 줄자 —\r
볼록한 절벽 위에 서서 아래를 본다.\r
접선(내가 서 있는 지점의 기울기대로 쭉 뻗은 판자)은\r
실제 절벽보다 아래에 있다 (볼록하니까).\r
내 발밑에서 접선까지의 수직 거리가 0이고,\r
멀리 떨어진 지점에서는 그 거리가 커진다.\r
이 "절벽과 접선 사이의 높이 차이"가 브레그만 발산이다.\r
\r
### JSX\r
\r
2D 볼록 곡선(예: F(θ) = log(1 + e^θ), 베르누이의 로그정규화자).\r
θ₁ 지점을 클릭하면 그 점에서의 접선이 그려진다.\r
θ₂ 지점을 드래그하면,\r
F(θ₂)와 접선이 예측하는 값의 차이가\r
붉은 수직선으로 실시간 표시.\r
"이 붉은 선의 길이가 브레그만 발산입니다."\r
\r
→ 그런데 θ₁과 θ₂를 바꾸면?\r
  접선의 기울기가 바뀌므로 붉은 선의 길이도 바뀐다.\r
  "브레그만 발산도 비대칭이다!"\r
  → "3장에서 만난 KL 발산도 비대칭이었다. 우연인가?"\r
\r
### 파이썬\r
\r
F(θ) = log(1+exp(θ))에서 브레그만 발산을 직접 구현.\r
같은 두 베르누이 분포에 대해 KL 발산도 계산.\r
두 값이 정확히 일치함을 수치 확인.\r
\r
  # D_Bregman(θ₁, θ₂) = F(θ₁) - F(θ₂) - F'(θ₂)(θ₁ - θ₂)\r
  # 이것이 KL(p₁ ‖ p₂)와 같다!\r
\r
5장에서 학습은 교차엔트로피를, 곧 KL 발산을 줄이는 과정이라 했다.\r
KL 발산이 브레그만 발산이라면, 학습이란 무엇인가?\r
볼록함수와 접선 사이의 높이 차이를 줄이는 것이다.\r
모델의 θ를 조금씩 옮겨서,\r
접선이 볼록함수에 더 바짝 붙게 만드는 것.\r
손실함수가 줄어든다는 것이\r
기하학적으로는 접선이 곡선에 가까워진다는 것이었다.\r
\r
### 수확\r
\r
"KL 발산은 '볼록함수와 접선 사이의 높이 차이'였다.\r
KL의 수식이 왜 저런 복잡한 로그 비율 형태인지 —\r
그 기하학적 기원이 여기 있었다.\r
3장에서 배운 비대칭 거리, 6장에서 배운 접선과 르장드르 변환,\r
7장에서 배운 θ 좌표 — 이 세 가지가 여기서 하나로 합류한다."\r
\r
세 갈래가 합류했다.\r
그런데 한 가지가 걸린다.\r
θ를 0.01만큼 바꾸는 것이 어디서나 같은 크기의 변화를 만드는가?\r
가우시안에서 σ = 0.1일 때의 θ 한 걸음과 σ = 10일 때의 한 걸음이\r
분포를 같은 만큼 바꾸는가?\r
JSX에서 직접 해보면 안다 — 같지 않다.\r
그렇다면 이 좌표들이 사는 공간은 평평하지 않다.\r
그 공간의 모양을 알아야 한다.\r
\r
---\r
\r
> ### 인물 이야기 — E.T. Jaynes와 "확률은 논리다"\r
>\r
> 1957년, 세인트루이스. 워싱턴 대학교.\r
> 서른 살의 물리학자 Edwin Thompson Jaynes가\r
> *Physical Review*에 두 편의 논문을 발표했다.\r
> 제목은 "Information Theory and Statistical Mechanics."\r
> 이 논문이 던진 질문은 도발적이었다.\r
>\r
> 통계역학의 기초는 무엇인가?\r
> Boltzmann 이래로 답은 "역학"이었다.\r
> 분자들이 충돌하고 튕기는 역학적 과정의 결과로\r
> 맥스웰-볼츠만 분포가 나온다는 것.\r
> 에르고딕 가설, 분자 혼돈 가설 — 물리적 가정들이 필요했다.\r
>\r
> Jaynes의 답은 완전히 달랐다.\r
> 물리가 아니라 논리다.\r
> 에너지의 평균값만 알고 나머지는 모를 때,\r
> "가장 편향되지 않은 추측"이 무엇인가를 묻는다면 —\r
> 엔트로피를 최대화하는 분포를 선택해야 한다.\r
> 그 결과가 바로 볼츠만 분포다.\r
> 분자의 충돌이 필요한 게 아니라,\r
> **"모르는 것에 대해 가장 정직한 진술"이 볼츠만 분포**라는 것이다.\r
>\r
> 이것이 최대 엔트로피 원리(MaxEnt)다.\r
> 그리고 이 원리가 지수족과 직접 연결된다.\r
> 충분통계량의 기대값을 제약으로 걸고 엔트로피를 최대화하면,\r
> 결과는 언제나 지수족 분포다.\r
> 지수족이 왜 특별한가 — Jaynes의 답은 이렇다:\r
> 지수족은 "주어진 정보만 반영하고 나머지에 대해 최대한 무지한" 분포다.\r
> 아는 것 이상을 가정하지 않는, 가장 정직한 분포.\r
>\r
> 이 관점은 격렬한 논쟁을 불렀다.\r
> 빈도주의 통계학자들은 확률이 주관적 판단이 아니라\r
> 객관적 빈도라고 믿었다.\r
> Jaynes는 확률이 지식 상태의 표현이라고 주장했다.\r
> 동전이 공정한지 아닌지는 동전의 물리적 성질이 아니라\r
> 당신이 그 동전에 대해 무엇을 아는가의 문제라고.\r
>\r
> Jaynes는 생전에 완성하지 못한 저서 *Probability Theory: The Logic of Science*를\r
> 남겼다. 2003년, 사후에 출판되었다.\r
> 이 책의 첫 문장에 가까운 주장 — "확률은 논리의 확장이다" — 은\r
> 지금도 논란의 대상이지만, MaxEnt 원리 자체는\r
> 기계학습, 통계물리학, 정보기하학의 교차점에서 살아 있다.\r
>\r
> 5장에서 Boltzmann과 Shannon이 같은 수학에 도달한 것을 보았다.\r
> Jaynes는 그것이 우연이 아님을 명시적으로 보여준 사람이다.\r
> 통계역학은 정보이론의 한 응용이라는 것.\r
> 그리고 그 연결의 매듭이 바로 이 장의 주인공 — 지수족 — 이다.\r
`,Gh=`# 구부러진 땅\r
\r
7장의 마지막에서 질문 하나가 남았다.\r
θ를 한 걸음 옮기는 것이 어디서나 같은 크기의 변화를 만드는가?\r
σ가 작을 때의 한 걸음과 σ가 클 때의 한 걸음이 같은가?\r
같지 않다면 — 이 좌표들이 사는 공간은 평평하지 않다.\r
\r
평평하지 않은 공간. 수학에서는 이것을 매니폴드라 부른다.\r
\r
## 평평하지 않은 세계 — 매니폴드의 직관\r
\r
### 한 개념\r
\r
매니폴드란 "국소적으로는 평면처럼 좌표를 붙일 수 있지만,\r
전체적으로는 휘어 있을 수 있는 공간"이다.\r
그리고 7장에서 본 θ와 η는 같은 매니폴드에 붙인\r
두 장의 지도였다.\r
\r
### 왜\r
\r
"θ를 움직이면 분포가 바뀌고 η를 움직여도 분포가 바뀐다.\r
두 좌표계가 르장드르 변환으로 연결된다는 건 알겠다.\r
그런데 이 좌표들이 사는 공간은 대체 어떤 모양인가?\r
평평한가? 둥근가? 어딘가에 구석이 있는가?"\r
\r
### 비유\r
\r
지구본과 세계지도 —\r
지구는 구면이다. 그런데 우리는 평면 지도로 산다.\r
서울 근처에서는 지도가 꽤 정확하다.\r
택시 타고 강남에서 종로까지 가는 데\r
지구가 둥글다는 사실은 아무 상관이 없다.\r
그런데 서울에서 뉴욕까지의 최단경로를 찾으려면?\r
평면 지도 위의 직선은 최단경로가 아니다.\r
지구본 위의 대원(great circle)이 최단경로다.\r
\r
매니폴드는 이런 공간이다.\r
가까이서 보면 유클리드 공간 — 좌표를 붙이고\r
덧셈 뺄셈을 할 수 있다.\r
멀리서 보면 휘어 있다 — "직선"이 직선이 아닐 수 있다.\r
\r
### 핵심 연결\r
\r
7장에서 θ 좌표와 η 좌표를 배웠다.\r
이것은 같은 지구본에 메르카토르 도법과\r
정거원추도법을 각각 입힌 것과 같다.\r
같은 땅인데 지도가 다르다.\r
두 지도가 겹치는 영역에서의 좌표 변환 규칙 —\r
그것이 η = ∇F(θ), 르장드르 변환이었다.\r
학생은 여기서 깨닫는다:\r
"7장에서 한 게 좌표 변환이었구나."\r
\r
### 비유 보강\r
\r
감귤과 바나나 —\r
감귤 껍질을 벗기면 — 완전히 평면으로 펼 수 없다.\r
찢어지거나 구겨진다. 이것이 곡률이 있는 매니폴드.\r
바나나 껍질은? 의외로 거의 평평하게 펼 수 있다.\r
원기둥에 가까워서. 곡률이 (거의) 0인 방향이 있다.\r
"모든 곡면이 같은 정도로 휘어 있는 건 아니다."\r
이 감각이 9장에서 Fisher 정보 행렬의\r
고유값이 방향마다 다르다는 것으로 돌아온다.\r
\r
### JSX\r
\r
세 패널 구성.\r
\r
[왼쪽] 3D 곡면 (구면 또는 토러스)\r
  곡면 위에 격자를 그린다.\r
  곡면 위의 한 점을 클릭하면\r
  그 점 근처의 접평면이 반투명하게 표시된다.\r
  "국소적으로는 평면" — 접평면이 곡면에 딱 붙어 있다.\r
  점을 다른 곳으로 옮기면 접평면의 기울기가 바뀐다.\r
\r
[오른쪽] 2D 좌표 패치\r
  왼쪽 곡면의 일부를 펼친 평면 좌표계.\r
  곡면 위의 점이 이동하면 좌표가 바뀐다.\r
  두 개의 좌표 패치를 나란히 보여줄 수 있되,\r
  겹치는 영역에서 같은 점이 다른 좌표를 갖는 것을 표시.\r
  "θ와 η처럼 — 같은 점, 다른 주소."\r
\r
→ 구면 위에서 두 점을 잇는 직선(측지선)을 그려보자.\r
  평면 좌표 위에서 그 경로는 직선인가?\r
\r
### 파이썬\r
\r
구면 위의 두 점 사이의 대원 경로를 계산.\r
같은 두 점을 (위도, 경도) 좌표에서 직선으로 이었을 때의\r
경로와 비교.\r
"좌표 위의 직선 ≠ 곡면 위의 직선" 을 수치적으로 확인.\r
\r
### 수확\r
\r
"매니폴드 = 국소적으로 평면, 전체적으로 곡면.\r
좌표는 지도일 뿐이다. 지도는 여러 장 있을 수 있다.\r
θ와 η는 같은 곡면에 붙인 두 장의 지도였다."\r
\r
\r
## 호기심 상자: 매니폴드 가설 — 실제 데이터는 저차원에 산다\r
\r
2장에서 매니폴드라는 단어를 처음 꺼냈다.\r
CNN이 접힌 시트를 펼치는 것이라고,\r
데이터가 저차원 매니폴드 위에 산다고.\r
그때는 감각만 가져가자고 했다.\r
이제 매니폴드가 무엇인지 — "국소적으로 평면,\r
전체적으로 곡면인 공간" — 을 알았으니,\r
그 감각에 이름을 붙일 수 있다.\r
\r
### 매니폴드 가설이란\r
\r
실제 데이터는 고차원 공간 전체에 퍼져 있지 않고,\r
그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다.\r
\r
### 비유 1\r
\r
종이비행기 —\r
A4 용지는 2차원 평면이다. 접으면 3차원 공간 속에\r
존재하는 2차원 표면이 된다.\r
용지 위의 개미는 여전히 2차원을 걷는다.\r
데이터는 이 접힌 종이 위의 점이다.\r
종이 밖의 3차원 공간 대부분은 비어 있다.\r
\r
### 비유 2\r
\r
관절 인형 —\r
관절 인형의 자세는 3차원 공간에서 펼쳐지지만,\r
실제 자유도는 관절의 수뿐이다. 관절이 10개면 자유도는 10.\r
고차원 공간 속에 묻힌 10차원 매니폴드다.\r
\r
### 2장 호기심 상자와의 연결\r
\r
2장에서 "5만 차원 심플렉스"를 보았다.\r
매니폴드 가설은 그 위에 한 걸음 더 나아간 주장이다:\r
의미 있는 분포는 심플렉스 전체가 아니라\r
특정 구조를 가진 부분영역에 모여 있다.\r
\r
### 1장 LoRA와의 연결\r
\r
LoRA의 낮은 랭크(rank)는\r
"변화가 살고 있는 매니폴드의 차원"에 대한 가설이다.\r
이 베팅이 놀라울 정도로 자주 맞는다 —\r
매니폴드 가설이 암묵적으로 성립하기 때문이다.\r
본격적인 회수는 11장에서 다시 만난다.\r
\r
### JSX\r
\r
3D 공간 안에 2D 곡면(스위스 롤)을 표시.\r
곡면 위에 데이터 점들이 흩어져 있다.\r
슬라이더: 노이즈를 올리면 점들이 곡면에서 벗어난다.\r
\r
### 파이썬\r
\r
sklearn.datasets.make_swiss_roll로 스위스 롤 생성.\r
PCA vs Isomap 비교 시각화.\r
\r
\r
## 한 걸음의 크기 — 왜 자가 필요한가\r
\r
### 한 개념\r
\r
매니폴드 위에서 거리를 재려면\r
각 지점마다 "여기서의 한 걸음은 이만큼"을\r
알려주는 국소적 자(ruler)가 필요하다.\r
그 자의 정체는 다음 장(9장)에서 밝힌다.\r
\r
### 왜\r
\r
"3장에서 KL 발산으로 분포 사이의 거리를 쟀다.\r
그건 두 점 사이의 '전역적 거리'였다.\r
그런데 매니폴드 위를 걸어가면서\r
한 걸음 한 걸음의 크기를 재려면?\r
좌표의 한 칸이 어디서나 같은 거리인가?"\r
\r
### 비유\r
\r
등산 지도의 등고선 —\r
등산 지도에서 등고선이 빽빽한 곳은 경사가 급하다.\r
지도 위에서 1cm를 가도 실제로는 거의 못 간다.\r
등고선이 성긴 곳은 완만하다.\r
지도 위에서 1cm가 실제로도 넉넉한 거리다.\r
같은 "지도 위 1cm"인데 실제 거리가 다르다.\r
\r
그러니까 등산 지도를 제대로 읽으려면\r
각 지점에서 "여기서의 1cm는 실제로 몇 미터인가"를\r
알아야 한다. 그 정보가 등고선 간격에 들어 있다.\r
\r
파라미터 공간도 마찬가지다.\r
θ를 0.01만큼 바꾸는 것이\r
어떤 곳에서는 분포를 확 바꾸고\r
어떤 곳에서는 거의 안 바꾼다.\r
"파라미터 지도의 등고선 간격"을 알아야\r
한 걸음의 진짜 크기를 알 수 있다.\r
\r
3장에서 우리는 이미 이 자의 그림자를 보았다.\r
KL 발산이 무한히 가까운 두 점 사이에서\r
대칭적인 이차형식으로 변한다는 것.\r
그 이차형식을 만드는 행렬이 피셔 정보 행렬이었다.\r
피셔 정보 행렬이 바로 이 "국소적 자"다.\r
각 θ 지점에서 "한 걸음이 분포를 얼마나 바꾸는가"를\r
알려주는 행렬. 9장에서 정식으로 만난다.\r
\r
### 4장과의 연결\r
\r
경로의 길이:\r
4장에서 우리는 두 개의 길을 보았다.\r
덧셈의 길과 곱셈의 길.\r
두 길의 "길이"를 비교하고 싶다면?\r
그러려면 각 지점에서 한 걸음의 크기를 알아야 한다.\r
같은 두 점 사이를 걸어가는데,\r
경로의 길이가 다른 이유는 두 가지다:\r
  ① 경로의 모양이 다르다 (4장에서 봤다)\r
  ② 걷는 곳마다 한 걸음의 "비용"이 다르다 (여기서 본다)\r
자(ruler)가 있어야 경로의 길이를 잴 수 있고,\r
길이를 알아야 "더 짧은 길"을 물을 수 있다.\r
그 더 짧은 길이 측지선(geodesic)이다.\r
\r
### 7장과의 연결\r
\r
볼록성이 자를 선물한다:\r
7장에서 F(θ)는 볼록함수였다.\r
6장에서 볼록함수는 "그릇"이었다.\r
그릇의 곡률은 어디서나 같은가?\r
바닥이 넓은 그릇과 바닥이 좁은 그릇의 곡률이 다르듯,\r
F(θ)의 곡률도 θ에 따라 다르다.\r
예고: F(θ)의 곡률이 바로 파라미터 공간의 자가 된다.\r
구체적으로 그것이 무엇인지는 — 9장에서.\r
\r
### JSX\r
\r
두 패널 구성.\r
\r
[왼쪽] 파라미터 공간의 격자\r
  2D 파라미터 공간 위에 균등한 격자를 그린다.\r
  각 격자점에 대응하는 분포를 작은 썸네일로 표시.\r
  격자 간격은 일정한데(좌표의 Δθ가 같은데),\r
  인접한 분포 썸네일의 모양 변화가\r
  어떤 영역에서는 크고 어떤 영역에서는 작다.\r
\r
[오른쪽] "공정한" 격자\r
  왼쪽의 격자를 "분포 변화가 균등해지도록" 왜곡.\r
  격자가 벌어진 곳 = 둔감한 영역 (큰 Δθ도 작은 변화).\r
  격자가 촘촘한 곳 = 민감한 영역 (작은 Δθ도 큰 변화).\r
  "자가 있으면 이 왜곡이 보인다."\r
\r
→ 왼쪽과 오른쪽 격자를 번갈아 보자.\r
  "같은 공간인데 다른 눈금"이라는 감각이 오는가?\r
  이것이 다음 장의 전부다.\r
\r
### 파이썬\r
\r
가우시안의 (μ, σ) 공간에서\r
Δμ = 0.1인 격자점들의 KL 발산을 계산.\r
σ = 0.5 근처와 σ = 5 근처에서\r
같은 Δμ = 0.1이 만드는 KL 값이 다른 것을 확인.\r
"좌표의 한 칸이 어디서나 같은 거리가 아니다."\r
\r
### 수확\r
\r
"매니폴드 위에서 한 걸음의 크기를 재려면 자가 필요하다.\r
그 자는 좌표마다 다르다."\r
\r
자가 필요하다는 건 알겠다.\r
그런데 어떤 자? 좌표계를 바꾸면 자도 바뀌어야 하는가?\r
θ로 재든 η로 재든 같은 거리가 나와야 "공정한 자"일 텐데 —\r
그런 자가 존재하는가?\r
존재한다면, 하나뿐인가?\r
\r
\r
## 방향을 비교하려면 — 접속의 예고\r
\r
자가 있으면 "크기"를 잴 수 있다.\r
그런데 "방향"은?\r
\r
서울에서 "북쪽"이라고 하면 종로 방향이다.\r
부산에서 "북쪽"이라고 하면 대구 방향이다.\r
둘 다 "북쪽"인데, 지구본 위에서 보면\r
두 화살표는 같은 방향이 아니다.\r
곡면 위에서는 떨어진 두 점의 방향을\r
직접 비교할 수 없다.\r
\r
비교하려면 하나의 화살표를\r
곡면을 따라 조심스럽게 옮겨와야 한다.\r
이 "옮기는 규칙"을 접속(connection)이라 부른다.\r
\r
그리고 옮기는 규칙이 하나가 아닐 수 있다.\r
같은 화살표를 다른 규칙으로 옮기면\r
도착했을 때 방향이 달라진다.\r
\r
4장에서 같은 두 점을 잇는 길이 두 개였다.\r
덧셈의 길과 곱셈의 길.\r
길이 두 개라면 — 화살표를 옮기는 규칙도 두 개다.\r
각 길은 자기만의 접속을 가지고 있다.\r
이것이 나중에 e-접속과 m-접속이라는 이름으로 돌아온다.\r
\r
— 이 질문은 먼저 자(ruler)의 정체를 밝힌 뒤에 돌아온다.\r
\r
---\r
\r
> ### 인물 이야기 — Riemann, Gauss, 그리고 "기하학의 기초에 대하여"\r
>\r
> 1854년 6월 10일, 괴팅겐 대학.\r
> 스물일곱 살의 Bernhard Riemann이 교수 자격을 얻기 위한\r
> 시험 강연을 해야 했다.\r
> 독일 대학의 관례에 따라 지도교수가 주제를 골랐다.\r
> 지도교수는 Carl Friedrich Gauss — 70대의 노대가.\r
>\r
> 후보자는 세 가지 주제를 제출하고, 교수가 하나를 고른다.\r
> Riemann은 두 개의 주제를 자신 있게 준비하고,\r
> 세 번째는 "아마 이건 안 고르시겠지" 하고 넣었다.\r
> "기하학의 기초를 이루는 가설에 대하여(Über die Hypothesen, welche der Geometrie zu Grunde liegen)."\r
> Gauss는 세 번째를 골랐다.\r
>\r
> Riemann은 몇 주 동안 고통스럽게 강연을 준비했다.\r
> 수식은 거의 쓰지 않고, 개념만으로 말해야 했다.\r
> 청중은 수학자만이 아니라 전체 철학부 교수진이었기 때문이다.\r
>\r
> 이 강연 한 편이 기하학의 역사를 갈랐다.\r
>\r
> Riemann이 한 일의 핵심은 이것이었다.\r
> 유클리드 이래 2000년 동안, 기하학은 "공간이 평평하다"는 가정 위에 서 있었다.\r
> 평행선 공리를 의심한 사람들(Lobachevsky, Bolyai)이 있었지만,\r
> 그들은 유클리드를 부정하면서도 여전히 "균일한 곡률"의 공간만 다루었다.\r
> Riemann은 그 한계마저 깨뜨렸다.\r
> **곡률이 점마다 다를 수 있는 공간.**\r
> 어떤 곳은 평평하고, 어떤 곳은 볼록하고, 어떤 곳은 안장처럼 굽는 공간.\r
> 그리고 그런 공간에서 거리를 재려면 —\r
> 각 점에서 "여기서의 한 걸음은 이만큼"을 알려주는 계량 텐서가 필요하다.\r
>\r
> 이것이 리만 계량이다.\r
> 이 장에서 우리가 "자(ruler)가 필요하다"고 했던 것의 정확한 수학적 실체.\r
>\r
> Riemann의 아이디어는 Gauss의 작업 위에 서 있었다.\r
> Gauss는 이미 30년 전에 곡면의 내재적 기하학을 연구하고 있었다.\r
> Theorema Egregium("놀라운 정리") — 곡면의 곡률은\r
> 곡면 위에서만 측정할 수 있는 양이다.\r
> 바깥에서 곡면을 바라볼 필요가 없다.\r
> 개미가 곡면 위를 기어다니면서,\r
> 삼각형의 내각의 합이 180도가 아니라는 것을 발견하면 —\r
> 그것만으로 자기가 휘어진 면 위에 있다는 것을 알 수 있다.\r
>\r
> Gauss가 2차원 곡면에서 한 것을 Riemann이 임의 차원으로 확장했다.\r
> n차원 공간에서 점마다 달라지는 계량.\r
> 이것이 리만 기하학이다.\r
>\r
> 강연을 들은 Gauss는 — 동료에게 보낸 편지에 따르면 —\r
> "극도의 놀라움"을 표현했다.\r
> 평생의 연구에서 자신이 감지하고 있었지만 완성하지 못한 것을\r
> 젊은이가 해냈다는 것을.\r
>\r
> Riemann은 1866년, 서른아홉에 결핵으로 죽었다.\r
> 60년 뒤, Einstein이 일반상대론을 쓸 때 필요했던 수학이\r
> 바로 리만 기하학이었다.\r
> 그리고 또 60년 뒤, Rao와 Amari가 확률분포의 공간에 리만 계량을 입힐 때,\r
> 같은 도구가 세 번째 생을 살기 시작했다.\r
`,Zh=`# 파라메터 공간의 곡률\r
\r
8장에서 우리는 파라미터 공간이 평평하지 않다는 것을 보았다.\r
좌표의 한 칸이 어디서나 같은 거리가 아니다.\r
그래서 자(ruler)가 필요하다고 했다.\r
좌표를 바꿔도 재는 거리가 같은, 공정한 자.\r
\r
그 자의 정체가 이 장에 있다.\r
\r
## 민감도 — 분포가 파라미터의 떨림을 느끼는 정도\r
\r
### 한 개념\r
\r
Fisher 정보는 "파라미터를 살짝 흔들었을 때\r
분포가 얼마나 크게 반응하는가"를 재는 양이다\r
\r
### 왜\r
\r
"같은 크기만큼 파라미터를 바꿔도,\r
어떤 분포는 거의 안 변하고 어떤 분포는 확 변한다.\r
이 '민감도'를 숫자로 쓸 수 있는가?"\r
\r
### 비유\r
\r
볼륨 다이얼과 이퀄라이저 —\r
볼륨 다이얼을 1mm 돌렸을 때,\r
조용한 클래식 곡에서는 거의 차이가 안 들린다.\r
하지만 베이스가 꽉 찬 힙합 곡에서는\r
같은 1mm가 온 방을 울린다.\r
다이얼의 물리적 회전량은 같은데,\r
음악이 느끼는 변화의 크기가 다르다.\r
그 "느끼는 크기"가 Fisher 정보다.\r
\r
### 한 걸음 더\r
\r
이퀄라이저의 저음 슬라이더를 올리면\r
힙합은 폭발하지만 피아노 독주는 별 차이 없다.\r
고음 슬라이더는 반대다.\r
"어느 방향으로 흔들었느냐"에 따라 민감도가 다르다 —\r
파라미터가 여러 개일 때\r
Fisher 정보가 스칼라가 아니라 행렬이 되는 이유다.\r
\r
### 왜 (∇log p)²인가\r
\r
"왜 모든 경사에 log가 붙는가"의 회수:\r
9장에서 우리는 ∇log p가\r
"비율로서의 변화"임을 보게 된다.\r
연봉 3000만원의 300만원 인상과\r
3억의 300만원 인상이 다르듯,\r
확률 0.01의 0.01 변화와\r
확률 0.5의 0.01 변화는 다르다.\r
∇log p = ∇p / p 가 이 상대적 변화를 잡아낸다.\r
\r
Fisher 정보는 이 상대적 변화의 분산이다.\r
파라미터가 하나일 때는 스칼라:\r
I(θ) = E[(∇log p)²]\r
= "∇log p가 평균적으로 얼마나 흩어져 있는가"\r
\r
파라미터가 여러 개일 때(예: μ와 σ)는\r
각 방향의 변화량이 서로 얽힌 행렬이 된다:\r
I(θ) = E[∇log p · (∇log p)ᵀ]\r
스칼라의 제곱이 벡터의 외적으로 확장된 것이다.\r
이것이 이 장 뒤에서 만날 Fisher 정보 "행렬"의 정체다.\r
\r
### 왜 분산인가?\r
\r
E[∇log p] = 0 이다 (증명은 파이썬에서 수치 확인).\r
평균이 0인 양의 "크기"를 재려면\r
제곱 평균 = 분산을 쓰는 것이 자연스럽다.\r
분산이 크면 → 데이터가 파라미터에 대해 할 말이 많다.\r
분산이 작으면 → 데이터가 파라미터에 대해 무심하다.\r
\r
### JSX\r
\r
두 패널 구성.\r
\r
[왼쪽] 분포 패널\r
  가우시안 분포를 표시. 슬라이더 두 개: μ, σ.\r
  μ 슬라이더를 ±ε만큼 흔들면\r
  분포가 좌우로 살짝 흔들리는 애니메이션.\r
  σ 슬라이더를 ±ε만큼 흔들면\r
  분포가 넓어졌다 좁아졌다 하는 애니메이션.\r
\r
[오른쪽] 민감도 게이지\r
  μ 방향 민감도: I_μμ = 1/σ²\r
  σ 방향 민감도: I_σσ = 2/σ²\r
  두 막대가 나란히 표시.\r
\r
핵심 체험:\r
  σ를 작게 만들면(분포가 좁으면)\r
  → 두 민감도 모두 커진다.\r
  "뾰족한 분포는 파라미터 변화에 예민하다."\r
  σ를 크게 만들면(분포가 넓으면)\r
  → 두 민감도 모두 작아진다.\r
  "넓은 분포는 둔감하다."\r
\r
→ σ를 극단적으로 줄여보자.\r
  분포가 바늘처럼 뾰족해질 때 민감도는 어떻게 되는가?\r
  이것이 "확신할수록 정보가 많다"의 의미다.\r
\r
### 파이썬\r
\r
가우시안에서 score ∇_μ log p(x|μ,σ)를 해석적으로 계산.\r
N개 샘플에서 score의 표본 분산을 구해서\r
I(θ)의 이론값과 비교.\r
σ를 바꿔가며 I가 어떻게 변하는지 테이블로 출력.\r
\r
# 가우시안의 score function\r
# score = (x - mu) / sigma^2\r
# E[score^2] = 1/sigma^2 = Fisher information for mu\r
\r
5장에서 학습은 KL 발산을 줄이는 과정이라 했다.\r
KL을 줄이려면 파라미터를 바꿔야 한다.\r
그런데 얼마나 바꿔야 하는가?\r
민감한 영역에서는 조금만 바꿔도 분포가 크게 변한다 — 조심해야 한다.\r
둔감한 영역에서는 많이 바꿔도 분포가 별로 안 변한다 — 과감해도 된다.\r
Fisher 정보는 이 "조심함의 정도"를 알려준다.\r
이것이 나중에 자연 기울기(natural gradient)의 핵심이 된다.\r
\r
### 수확\r
\r
"Fisher 정보 = 파라미터에 대한 분포의 민감도\r
= score의 분산\r
= 데이터가 파라미터에 대해 가진 정보량"\r
\r
\r
## 곡면 위의 자(ruler) — Fisher 계량\r
\r
3장 끝에서 우리는 KL 발산의 발밑에서 피셔 정보라는 이름을\r
처음 들었다. 그때는 "두 분포가 가까워지면 비대칭이 사라지며\r
드러나는 대칭 거리의 정체"였다. 이 장에서는 그 행렬이\r
파라미터 공간 전체에 곡률을 부여하는 "자(ruler)"가 됨을 본다.\r
\r
그리고 하나 더.\r
7장에서 우리는 볼록함수 F(θ)와 접선 사이의 높이 차이가\r
브레그만 발산이고, 그것이 KL과 일치함을 보았다.\r
브레그만 발산에서도 같은 일이 일어난다 —\r
두 점이 가까워지면, 높이 차이의 2차 근사는\r
½ dθᵀ · F''(θ) · dθ 가 된다.\r
F''(θ) — 볼록함수의 이계도함수.\r
\r
3장에서는 KL의 발밑에서 피셔를 만났고,\r
여기서는 브레그만의 발밑에서 같은 피셔를 만난다.\r
당연하다 — 7장에서 KL과 브레그만이 같은 것임을 보았으니까.\r
세 갈래로 올라온 길이 한 지점에서 합류한다.\r
\r
### 한 개념\r
\r
Fisher 정보 행렬이 파라미터 공간에\r
"곡면의 자"를 부여한다 — 리만 계량의 역할\r
\r
### 왜\r
\r
"파라미터 공간에서 한 걸음이 어디서나 같은 크기인가?\r
아니라면, '진짜 거리'를 어떻게 재나?"\r
\r
### 비유 1\r
\r
세계지도의 왜곡 — 메르카토르 도법 —\r
메르카토르 지도에서 그린란드는 아프리카만큼 커 보인다.\r
실제로는 아프리카의 1/14이다.\r
지도 위의 1cm가 적도에서는 100km이지만\r
극지방에서는 10km다.\r
같은 "지도 위 한 걸음"이 실제 거리로는 다르다.\r
\r
파라미터 공간도 그렇다.\r
2장의 키 분포로 돌아가보자.\r
한국 남성 (174, 5.8)에서 σ를 1만큼 바꾸는 것과,\r
σ = 30인 아주 넓은 분포에서 σ를 1만큼 바꾸는 것.\r
좌표 위에서는 같은 한 걸음이다.\r
하지만 σ = 5.8일 때 분포의 모양 변화는 극적이고,\r
σ = 30일 때 변화는 거의 눈에 띄지 않는다.\r
"파라미터 공간의 메르카토르 왜곡."\r
\r
리만 계량은 지도의 각 지점에서\r
"여기서의 1cm는 실제로 몇 km인가"를 알려주는 축척이다.\r
Fisher 정보 행렬이 바로 그 축척이다.\r
\r
### 비유 2\r
\r
고무판 위의 격자 —\r
고무판에 정사각형 격자를 그린다.\r
고무판을 늘리면 어떤 곳은 격자가 벌어지고\r
어떤 곳은 찌그러진다.\r
벌어진 곳에서의 한 칸은 "큰 거리",\r
찌그러진 곳에서의 한 칸은 "작은 거리".\r
Fisher 행렬은 각 지점에서 격자가\r
얼마나 늘어나고 찌그러졌는지를 기록한 것이다.\r
\r
### 왜 Fisher 정보가 "유일한"\r
\r
자연스러운 계량인가:\r
파라미터에 이름을 다시 붙여도 — θ 대신 φ(θ)를 써도 —\r
분포 자체는 안 변한다.\r
"좋은 자"는 좌표를 바꿔도 재는 거리가 같아야 한다.\r
(서울역의 거리가 주소를 한글로 쓰든 영어로 쓰든 같듯이.)\r
이 조건을 만족하는 계량은 — Čencov의 정리 —\r
Fisher 정보 행렬뿐이다 (상수배를 제외하면).\r
"이것은 선택이 아니다. 유일한 답이다."\r
\r
### JSX\r
\r
세 패널 구성.\r
\r
[왼쪽] 파라미터 공간\r
  2D 파라미터 공간 (예: 가우시안의 μ, σ).\r
  격자를 표시. 격자의 간격이 Fisher 행렬에 따라\r
  위치마다 다르게 그려짐.\r
  σ가 작은 영역 → 격자가 촘촘 (민감 = 작은 변화도 큰 거리).\r
  σ가 큰 영역 → 격자가 성김 (둔감 = 큰 변화도 작은 거리).\r
\r
[오른쪽] 분포 공간\r
  왼쪽에서 선택한 점에 대응하는 가우시안을 표시.\r
\r
[하단] 거리 비교\r
  파라미터 공간에서 두 점을 찍으면:\r
  - 유클리드 거리 (좌표 차이) = |Δθ|\r
  - Fisher 거리 (계량 반영) = √(Δθᵀ I(θ) Δθ)\r
  두 값을 나란히 막대로 표시.\r
\r
핵심 체험:\r
  σ가 작은 영역에서 두 점을 찍으면\r
  → 유클리드 거리는 작지만 Fisher 거리는 크다.\r
  "좁은 분포 근처에서는 작은 파라미터 변화도\r
  분포를 크게 바꾼다 — 그래서 '멀다'."\r
  σ가 큰 영역에서 두 점을 찍으면\r
  → 유클리드 거리는 크지만 Fisher 거리는 작다.\r
  "넓은 분포 근처에서는 큰 파라미터 변화도\r
  분포를 별로 안 바꾼다 — 그래서 '가깝다'."\r
\r
→ 같은 유클리드 거리를 가진 점 쌍을\r
  σ 작은 영역과 큰 영역에서 각각 찍어보자.\r
  Fisher 거리는 얼마나 다른가?\r
\r
### 지수족에서의 아름다운 사실\r
\r
"패턴이 있는 분포들"에서 우리는 F(θ)를 만났다.\r
Fisher 정보 행렬 = ∇²F(θ) = F의 헤시안.\r
"민감도"에서 score의 분산으로 정의한 Fisher 정보가,\r
지수족에서는 로그정규화자의 이계도함수와 같다.\r
\r
이것은 우연이 아니다.\r
F(θ)가 볼록함수이므로 헤시안이 양의 준정치(positive semidefinite).\r
양의 준정치 행렬은 내적을 정의한다.\r
내적이 있으면 거리를 잴 수 있다.\r
"F의 볼록성이 파라미터 공간에 거리를 선물한다."\r
\r
"볼록 — 그릇의 기하학"에서 "볼록하면 답이 하나"였다.\r
여기서 한 층 더: "볼록하면 거리도 생긴다."\r
볼록성 → 유일한 최소 → 유일한 자연스러운 거리.\r
하나의 성질에서 두 가지 선물.\r
\r
### 파이썬\r
\r
가우시안의 Fisher 행렬을 해석적으로 구성.\r
I(μ,σ) = [[1/σ², 0], [0, 2/σ²]]\r
두 점 사이의 유클리드 거리와 Fisher 거리를 비교.\r
σ를 바꿔가며 "같은 좌표 차이, 다른 Fisher 거리"를 확인.\r
\r
# Fisher metric distance (infinitesimal)\r
# ds² = (1/σ²)dμ² + (2/σ²)dσ²\r
# 가우시안 파라미터 공간은 쌍곡 평면(Poincaré half-plane)과\r
# 동형이라는 놀라운 사실 — 호기심 상자 후보\r
\r
## 호기심 상자: 가우시안의 파라미터 공간은 쌍곡 평면이다\r
Fisher 계량을 가우시안에 적용하면\r
ds² = (1/σ²)(dμ² + 2dσ²)\r
이것은 상반평면 모델(Poincaré half-plane)의 계량과\r
(상수배를 제외하면) 같다.\r
\r
쌍곡 평면에서는:\r
- σ가 작을수록(아래로 갈수록) 거리가 길어진다\r
- 두 점을 잇는 "직선"(측지선)은 반원이다\r
- 에셔의 Circle Limit 판화에서 본 그 세계\r
\r
"가우시안 분포들의 세계는 에셔의 그림이다."\r
이것은 비유가 아니라 수학적 사실이다.\r
\r
### JSX\r
\r
상반평면 위에 가우시안들을 점으로 찍고,\r
두 점 사이의 측지선(반원)을 그린다.\r
유클리드 직선과 측지선이 얼마나 다른지 비교.\r
\r
### 수확\r
\r
"Fisher 정보 행렬은 파라미터 공간의 축척이다.\r
이 축척이 '분포의 변화를 공정하게 재는 유일한 자'다.\r
그리고 지수족에서는 이 자가 F(θ)의 볼록성에서 태어난다."\r
\r
그런데 자로 크기를 잴 수 있게 되었다고 해서 끝이 아니다.\r
크기 말고 방향도 있다.\r
8장 끝에서 우리는 곡면 위에서 떨어진 두 점의 방향을\r
직접 비교할 수 없다는 것을 보았다.\r
비교하려면 "옮기는 규칙" — 접속 — 이 필요하다.\r
그리고 그 규칙이 하나가 아닐 수 있다고 했다.\r
11장에서, 그 규칙이 정확히 두 개인 이유를 만난다.\r
\r
\r
## 왜 모든 경사에 log가 붙는가\r
\r
### 한 개념\r
\r
∇log p는 "비율로서의 변화"이며,\r
이것이 확률의 경사를 잴 때 올바른 자(ruler)인 이유\r
\r
### 왜\r
\r
"강화학습의 정책 경사에서 왜 ∇log π이지, 왜 그냥 ∇π가 아닌가?"\r
\r
### 비유\r
\r
연봉 인상률 —\r
연봉이 3000만원인 사람의 300만원 인상과\r
3억인 사람의 300만원 인상은 같은 300만원이지만\r
의미가 완전히 다르다.\r
절대 변화량(∇p)이 아니라 상대 변화율(∇p/p = ∇log p)이\r
"진짜 변화의 크기"다.\r
\r
### JSX\r
\r
두 개의 확률 막대(하나는 0.01, 하나는 0.5).\r
둘 다 같은 절대량(0.01)만큼 변할 때,\r
∇p는 같은 높이의 화살표이지만\r
∇log p는 극적으로 다른 화살표.\r
"희귀한 사건의 변화가 증폭된다."\r
\r
### 확률의 세계에서의 의미\r
\r
스코어 함수 ∇_θ log p(x|θ):\r
  "파라미터를 살짝 바꿨을 때,\r
  이 데이터가 나올 확률이 비율적으로 얼마나 변하는가"\r
정책 경사 ∇_θ log π(a|s):\r
  π(a|s) = 0.001인 희귀 행동이 큰 보상을 줬을 때,\r
  ∇π로는 신호가 묻히지만\r
  ∇log π = ∇π / π 에서는 작은 π로 나눠지면서\r
  신호가 증폭된다.\r
  "희귀하지만 좋았던 행동을 놓치지 않는 장치."\r
\r
### 파이썬\r
\r
간단한 2-행동 밴딧에서\r
∇π와 ∇log π를 직접 계산해서 비교.\r
희귀 행동의 경사 신호가 log에서 증폭되는 것을 수치 확인.\r
\r
### 정보기하학과의 연결\r
\r
이 장에서 우리는 ∇log p의 분산이 Fisher 정보임을 보았다.\r
Fisher 정보 행렬 = E[∇log p · ∇log pᵀ].\r
"∇log p가 올바른 자라면, 그 자로 잰 분산이\r
파라미터 공간의 곡률을 결정한다."\r
이 장에서 이 자가 "유일한 자연스러운 계량"이었던 것을 떠올리자.\r
그리고 그 계량을 따라 걷는 것이\r
자연 기울기(natural gradient)다 — 에필로그에서 다시 만난다.\r
\r
### 수확\r
\r
"Fisher 정보가 자이고, ∇log p가 재료다.\r
자로 크기를 재고, ∇log p로 방향을 안다.\r
그러면 한 가지 질문이 남는다.\r
4장에서 우리는 두 개의 길을 보았다 — 덧셈의 길과 곱셈의 길.\r
이 자는 두 길을 같은 눈으로 보는가, 다른 눈으로 보는가?\r
덧셈으로 한 걸음 걷는 것과 곱셈으로 한 걸음 걷는 것이\r
같은 Fisher 거리인가?\r
— 같지 않다. 그리고 그 비대칭이 무지와 확신의 쌍대를 만든다."\r
\r
---\r
\r
> ### 인물 이야기 — R.A. Fisher와 "한 사람이 만든 도구함"\r
>\r
> 1890년, 런던.\r
> Ronald Aylmer Fisher는 극심한 근시를 안고 태어났다.\r
> 안경 없이는 칠판을 볼 수 없었다.\r
> 그 대신 — 전해지는 이야기에 따르면 —\r
> 어린 시절부터 머릿속으로 기하학적 직관을 키웠다.\r
> 수식을 눈으로 따라가는 대신, 공간을 상상했다.\r
>\r
> 이 습관이 20세기 통계학의 지형을 결정했다.\r
>\r
> Fisher가 풀고자 한 문제는 생물학에서 왔다.\r
> 케임브리지에서 수학을 전공한 뒤 그는 유전학에 빠져들었다.\r
> 멘델의 유전법칙과 다윈의 자연선택이 모순되는 것처럼 보이던 시절.\r
> Fisher는 1918년 논문에서 이 모순을 해소했다 —\r
> 여러 유전자가 함께 작용하면 연속적인 변이가 나온다는 것.\r
> 이 작업을 위해 그는 분산분석(ANOVA)을 발명했다.\r
>\r
> 그런데 유전 데이터를 분석하려면 통계적 도구가 필요했고,\r
> 당시의 도구는 부족했다.\r
> 그래서 Fisher는 도구를 직접 만들었다.\r
>\r
> 최대우도추정(MLE) — 데이터가 나올 가능성을 최대화하는 파라미터를 고르라.\r
> 충분통계량 — 데이터에서 파라미터에 대한 정보를 하나도 잃지 않는 요약.\r
> Fisher 정보 — 데이터가 파라미터에 대해 가진 정보의 양.\r
> 그리고 이 정보에 기반한 추정의 하한 — 크라메르-라오 부등식의 핵심 재료.\r
>\r
> 이 도구들 사이에는 숨겨진 연결이 있었다.\r
> MLE는 충분통계량에 의존하고,\r
> 충분통계량의 분산이 Fisher 정보와 관련되고,\r
> Fisher 정보가 추정의 정밀도 한계를 결정한다.\r
> Fisher는 이 연결을 감지하고 있었지만,\r
> 그것을 "기하학"이라는 언어로 쓰지는 않았다.\r
>\r
> 그 일을 한 것이 Rao(1장)였고, 그 뒤를 이은 것이 Amari(4장)였다.\r
> Fisher가 만든 도구함의 각 도구들이\r
> 사실은 하나의 기하학적 구조의 여러 면이었다는 것을\r
> 밝혀내는 데 반세기가 더 걸린 것이다.\r
>\r
> Fisher는 성격이 격렬한 사람이었다.\r
> 2장에서 본 Pearson과의 갈등은 학문적 논쟁을 넘어 개인적 원한이 되었다.\r
> Jerzy Neyman과도 충돌했고, 말년에는 담배와 폐암의 관계를\r
> 부정하는 바람에 평판이 훼손되었다.\r
>\r
> 그러나 도구는 성격과 무관하게 살아남는다.\r
> Fisher 정보는 이 장에서 파라미터 공간의 유일한 자연스러운 자가 되었고,\r
> 그 자 위에서 정보기하학 전체가 펼쳐진다.\r
> 한 사람의 도구함이 한 학문의 기초가 된 드문 사례다.\r
`,Yh=`# 무지와 확신\r
\r
9장에서 Fisher 정보라는 자를 손에 쥐었다.\r
이 자는 두 길을 같은 눈으로 보는가, 다른 눈으로 보는가?\r
덧셈으로 한 걸음과 곱셈으로 한 걸음이 같은 Fisher 거리인가?\r
같지 않다고 했다. 그 비대칭이 무지와 확신의 쌍대를 만든다고.\r
\r
이 장이 그 이야기다.\r
4장에서 만난 두 길 — 덧셈의 길과 곱셈의 길 — 이\r
이제 의미를 얻는다. 하나는 무지의 방향이고, 하나는 확신의 방향이다.\r
\r
## 혼합은 무지의 고백이다\r
\r
### 한 개념\r
mixture가 "모른다"의 수학적 표현인 이유\r
\r
### 왜\r
"세 명의 전문가 의견을 섞는 것과 합성하는 것의 차이?\r
섞는다는 것은 아직 누가 맞는지 모른다는 뜻이 아닌가?"\r
\r
### 비유 1\r
의사의 아침 —\r
환자가 두통을 호소한다. 아침 회진.\r
신경과 의사는 "편두통일 가능성이 있다"라고 한다 — 분포 A.\r
안과 의사는 "녹내장일 가능성이 있다"라고 한다 — 분포 B.\r
내과 의사는 "고혈압일 가능성이 있다"라고 한다 — 분포 C.\r
\r
아직 검사를 하지 않았다. 세 의사 중 누가 맞는지 모른다.\r
주치의는 세 의견을 "섞는다":\r
     가중평균 = 0.4·A + 0.3·B + 0.3·C\r
이것은 세 의견의 혼합(mixture)이다.\r
\r
혼합분포의 모양을 보면 봉우리가 세 개다.\r
세 가능성이 전부 살아 있다.\r
아무것도 버려지지 않았다 — 아직 모르니까.\r
"혼합은 무지의 수학적 표현이다."\r
\r
### 비유 2\r
이미지 생성의 와일드카드 —\r
Stable Diffusion으로 그림을 그린다고 하자.\r
프롬프트를 쓴다:\r
     {1girl | 1boy | 1cat}\r
중괄호와 파이프(|)는 와일드카드다.\r
"셋 중 하나를 랜덤으로 골라라"는 뜻.\r
\r
이것은 정확히 혼합분포다.\r
소녀의 이미지 분포, 소년의 이미지 분포, 고양이의 이미지 분포를\r
균등하게 섞는 것.\r
생성할 때마다 셋 중 하나가 나온다.\r
세 가능성이 공존한다 — 아직 뭘 그릴지 정하지 않았으니까.\r
\r
와일드카드를 추가할수록 가능성이 넓어진다:\r
     {1girl | 1boy | 1cat | landscape | food}\r
선택지가 늘어나고, 불확실성이 커진다.\r
샘플 공간의 매니폴드가 팽창하는 방향.\r
\r
파라미터 공간에서 이 팽창은 어떻게 보이는가?\r
혼합의 가중치 (0.4, 0.3, 0.3)은 심플렉스 위의 점이다(2장).\r
와일드카드를 추가하면 심플렉스의 차원이 올라간다.\r
가중치를 바꾸면 심플렉스 위를 걷는 것이다.\r
이 걸음이 m-측지선(덧셈의 길)이다.\r
혼합은 파라미터 공간에서 덧셈으로 걷는 것.\r
\r
### JSX\r
세 분포의 가중치를 조절하면\r
혼합분포가 변하는 시각화.\r
[왼쪽] 삼각형(심플렉스) 위에서 점을 드래그 → 가중치 변화.\r
[오른쪽] 대응하는 혼합분포가 실시간으로 변화.\r
점을 꼭짓점으로 밀면 → 단일 분포(확신).\r
점을 중심으로 밀면 → 세 봉우리가 균등(최대 무지).\r
다봉 구조가 유지되는 것을 관찰.\r
\r
→ 점을 삼각형 한가운데에 놓아보자.\r
  엔트로피가 최대인가?\r
  이것이 "최대한 모르겠다"의 기하학적 위치다.\r
\r
### 파이썬\r
mixture를 직접 구현하고 엔트로피 계산.\r
가중치를 바꿔가며 엔트로피가 어떻게 변하는지 확인.\r
균등 가중치일 때 엔트로피가 최대임을 수치적으로 검증.\r
\r
5장에서 엔트로피는 "평균적 놀라움"이었다.\r
혼합하면 가능성이 넓어지고, 평균적 놀라움이 커진다.\r
심플렉스 위에서 점이 가운데로 갈수록 엔트로피가 높아졌던 것(5장)이\r
여기서 의미를 얻는다 — 가운데로 간다는 것은\r
더 많이 섞는다는 것이고, 더 모른다는 것이다.\r
\r
### 수확\r
"혼합하면 불확실성이 커진다.\r
와일드카드를 추가하는 것이 혼합이다.\r
샘플 공간의 매니폴드가 팽창하고,\r
파라미터 공간에서는 덧셈의 길(m-측지선)을 걷는다."\r
\r
## 곱셈은 확신의 기록이다\r
\r
### 한 개념\r
exponential combination이 "알겠다"의 수학적 표현인 이유\r
\r
### 왜\r
"베이즈 업데이트에서 사전분포×우도는 왜 곱셈인가?\r
왜 덧셈이 아니라 곱셈이 확신을 표현하는가?"\r
\r
### 비유 1\r
의사의 낮 —\r
오후. MRI 결과가 나왔다.\r
MRI는 녹내장에는 반응하지 않고,\r
편두통과 고혈압에만 특정 패턴을 보인다.\r
이 정보(우도)를 아침의 믿음(사전분포)에 곱한다.\r
\r
곱셈이 하는 일:\r
녹내장 가능성은 우도가 0에 가까우므로 눌린다.\r
편두통과 고혈압만 살아남는다.\r
세 봉우리가 두 봉우리로 줄었다.\r
"겹치는 영역만 살아남는다" — 4장의 물감 비유.\r
\r
혈액검사가 추가로 나오면 또 곱한다.\r
고혈압의 증거가 약하면 그것도 눌린다.\r
마지막에 편두통 하나만 남는다.\r
곱셈을 반복할수록 봉우리가 줄고, 분포가 좁아진다.\r
"곱셈은 확신의 기록이다."\r
\r
### 비유 2\r
이미지 생성의 프롬프트 확장 —\r
다시 Stable Diffusion.\r
이번에는 와일드카드가 아니라 쉼표(,)로 조건을 추가한다:\r
     1girl\r
에서\r
     1girl, smiling\r
로 프롬프트를 확장한다.\r
\r
"smiling"은 필터다.\r
웃는 소녀의 이미지만 통과시키고 나머지는 눌린다.\r
이것은 곱셈이다:\r
     p(image | "1girl") × p("smiling" | image)\r
두 조건이 겹치는 영역만 살아남는다.\r
\r
프롬프트를 더 추가하면:\r
     1girl, smiling, red hair, school uniform, cherry blossom\r
매 조건이 필터로 곱해지고,\r
샘플 공간의 매니폴드가 수축한다.\r
가능한 이미지의 범위가 점점 좁아진다.\r
불확실성이 줄어든다 — 확신의 방향.\r
\r
파라미터 공간에서 이 수축은 어떻게 보이는가?\r
각 조건(smiling, red hair, ...)은 로그 공간에서 더해진다.\r
log p(image | all conditions)\r
     = log p(1girl) + log p(smiling|·) + log p(red hair|·) + ...\r
곱셈이 로그 공간의 덧셈이 된다(4장의 log 번역기).\r
이 걸음이 e-측지선(곱셈의 길)이다.\r
확신은 파라미터 공간에서 곱셈으로 걷는 것.\r
\r
### 대응표\r
\r
| 와일드카드 (OR) | 쉼표 (AND) |\r
|---|---|\r
| {A \\| B \\| C} | A, B, C |\r
| 혼합(mixture) | 곱(product) |\r
| 가능성을 넓힌다 | 가능성을 좁힌다 |\r
| 매니폴드 팽창 | 매니폴드 수축 |\r
| 불확실성 증가 | 불확실성 감소 |\r
| 무지의 방향 | 확신의 방향 |\r
| 덧셈의 길 (m-측지선) | 곱셈의 길 (e-측지선) |\r
| η 좌표에서 직선 | θ 좌표에서 직선 |\r
\r
### 그리고 이것이 정보기하학의 심장이다\r
샘플 공간에서 매니폴드가 팽창하고 수축하는 두 방향이\r
파라미터 공간에서 쌍대인 두 기하학(m-접속과 e-접속)으로 번역된다.\r
아마리가 발견한 것의 핵심은\r
이 두 방향이 대등한 지위로 마주 서 있다는 것이다.\r
하나가 다른 하나의 "그림자"다 — 6장의 쌍대성.\r
무지와 확신, 팽창과 수축, 덧셈과 곱셈이\r
Fisher 계량(9장)에 대해 쌍대다.\r
\r
### JSX\r
두 패널 구성.\r
[왼쪽] 샘플 공간 — 분포의 모양.\r
     위: 프롬프트 빌더.\r
     와일드카드 버튼({A|B}) → 혼합 → 봉우리가 늘어남.\r
     쉼표 버튼(A, B) → 곱셈 → 봉우리가 줄어듦.\r
     아래: 분포 시각화. 매니폴드의 팽창/수축이 보임.\r
\r
[오른쪽] 파라미터 공간 — 심플렉스 또는 θ-η 평면.\r
     와일드카드를 추가하면 → m-측지선을 따라 점이 이동.\r
     쉼표를 추가하면 → e-측지선을 따라 점이 이동.\r
     두 경로의 방향이 다른 것을 시각화.\r
\r
→ 와일드카드를 세 번 추가한 뒤 쉼표를 세 번 추가해보자.\r
  파라미터 공간에서 점의 궤적이 지그재그하는가?\r
  이것이 12장 EM의 예고다.\r
\r
### 파이썬\r
베이즈 업데이트를 코드로 구현.\r
사전분포에 우도를 곱할 때마다\r
엔트로피가 줄어드는 것을 수치적으로 확인.\r
혼합(와일드카드 추가)과 곱셈(조건 추가)을 번갈아 수행하며\r
엔트로피의 증감을 추적.\r
\r
3장에서 KL(p‖q)와 KL(q‖p)가 다르다는 것을 보았다.\r
"현실이 모형을 심판하는 거리"와 "모형이 현실을 심판하는 거리".\r
이제 그 비대칭의 의미가 선명해진다.\r
\r
같은 두 분포 p와 q. 같은 출발점과 도착점이다.\r
그런데 KL(p‖q)는 p의 눈으로 재고, KL(q‖p)는 q의 눈으로 잰다.\r
4장에서 같은 양 끝점을 잇는 경로가 두 개였듯,\r
같은 두 점 사이의 "거리"도 누구의 눈으로 보느냐에 따라 다르다.\r
\r
왜 다른가?\r
KL(p‖q)에서 p가 심판이면 — p가 높은 곳에서 q가 낮을 때 벌이 크다.\r
이 거리를 줄이려면 q는 p가 높은 곳을 전부 덮어야 한다.\r
봉우리가 세 개면 세 개 다. 넓어지는 방향 — 혼합의 방향이다.\r
\r
KL(q‖p)에서 q가 심판이면 — q가 높은 곳에서 p가 낮을 때 벌이 크다.\r
이 거리를 줄이려면 q는 p가 확실히 높은 봉우리에만 집중해야 한다.\r
잘못 건 확률이 벌이니까. 좁아지는 방향 — 곱셈의 방향이다.\r
\r
같은 두 점, 같은 "거리"인데,\r
누가 심판이냐에 따라 넓어지려는 힘과 좁아지려는 힘이 다르다.\r
이것이 KL의 비대칭이 품고 있던 기하학적 의미다.\r
\r
### 수확\r
"곱하면 불확실성이 줄어든다.\r
프롬프트에 쉼표를 추가하는 것이 곱셈이다.\r
샘플 공간의 매니폴드가 수축하고,\r
파라미터 공간에서는 곱셈의 길(e-측지선)을 걷는다.\r
무지(OR)와 확신(AND)은 쌍대다."\r
\r
곱셈이 확신이라면 — 그리고 9장에서 본 것처럼\r
∇log p가 곱셈의 세계에서 경사를 재는 도구라면 —\r
무지와 확신의 쌍대가 경사 계산에도 반영되어 있다.\r
\r
## 그런데 — 지수족 밖의 세계는?\r
\r
지수족 안에서는 모든 것이 아름답다.\r
θ와 η가 르장드르 변환으로 연결되고,\r
F(θ)의 볼록성이 거리를 선물하고,\r
∇log p가 확신의 방향을 정확히 가리킨다.\r
\r
그런데 실제 세계의 분포는 대부분 지수족이 아니다.\r
\r
2장에서 실제 데이터가 고차원 공간의 저차원 매니폴드 위에\r
산다는 것을 보았다. 그 매니폴드의 모양은 지수족이 그리는\r
깔끔한 곡면보다 훨씬 복잡하다.\r
프롬프트를 아무리 정교하게 써도,\r
이미지 Diffusion 모델이 만들어내는 이미지 분포는 지수족이 아니다.\r
신경망이 표현하는 분포는 파라미터가 수억 개이고,\r
지수족의 깔끔한 골격을 따르지 않는다.\r
자연어의 토큰 분포도, 단백질의 구조 분포도 마찬가지다.\r
\r
그러면 7장에서 10장까지 쌓아올린 도구들이 쓸모없는 것인가?\r
\r
아니다. 전략을 바꾸면 된다.\r
복잡한 분포를 직접 다루는 대신,\r
지수족 안에서 "가장 가까운 점"을 찾는 것이다.\r
현실(p)을 지도(q)에 옮기는 것 —\r
3장에서 KL로 거리를 재는 법을 배웠고,\r
이 장에서 OR과 AND의 쌍대를 배웠다.\r
\r
이제 남은 질문은 하나다.\r
그 "가장 가까운 점"을 어떤 거리로 재느냐에 따라\r
답이 달라지지 않는가?\r
\r
달라진다.\r
여기서 "도착지가 다르다"는 말이 처음으로 등장한다.\r
같은 두 점 사이의 두 경로(4장)와는 다른 상황이다.\r
출발점은 하나 — 지수족 밖의 복잡한 분포 p.\r
지수족이라는 곡면 위에 가장 가까운 점을 찍는 것이 사영이다.\r
\r
KL(p‖q)를 최소화하면 — p가 심판이다.\r
q는 p의 모든 봉우리를 빠짐없이 덮어야 한다.\r
넓어지는 방향으로 내려찍는다 — m-사영.\r
도착점은 넓은 분포.\r
\r
KL(q‖p)를 최소화하면 — q가 심판이다.\r
q는 p의 가장 높은 봉우리에 집중해야 한다.\r
좁아지는 방향으로 내려찍는다 — e-사영.\r
도착점은 좁은 분포.\r
\r
같은 곡면 위에 내려찍는데, 사영 방식에 따라 도착점이 다르다.\r
무지와 확신의 쌍대가 여기서 "두 종류의 추론"이 된다.\r
"빠뜨리지 않겠다"(m-사영)와 "확신하겠다"(e-사영).\r
어느 쪽이 올바른 추론인가?\r
— 올바른 쪽은 없다. 각각이 다른 질문에 답한다.\r
\r
---\r
\r
> ### 인물 이야기 — Thomas Bayes와 "역방향 확률"\r
>\r
> 1740년대, 잉글랜드 턴브리지웰스.\r
> Thomas Bayes는 장로교 목사였다.\r
> 수학에 관심이 있었지만, 직업 수학자는 아니었다.\r
> 그가 남긴 수학 논문은 생전에 한 편도 출판되지 않았다.\r
>\r
> Bayes가 풀고자 한 문제는 이것이었다.\r
> 동전을 열 번 던져서 앞면이 일곱 번 나왔다.\r
> 이 동전이 앞면 확률 0.7인 동전이라고 확신할 수 있는가?\r
> 아니면 공정한 동전인데 운이 좋았던 것일 수 있는가?\r
>\r
> 이것은 "순방향"과 "역방향"의 차이다.\r
> 순방향은 쉽다: 앞면 확률이 0.7인 동전을 열 번 던지면\r
> 앞면 일곱 번이 나올 확률을 계산할 수 있다.\r
> 역방향은 어렵다: 앞면 일곱 번을 관측한 뒤,\r
> 앞면 확률이 얼마인지를 역으로 추론하는 것.\r
>\r
> Bayes는 이 역방향 문제에 답하는 방법을 찾았다.\r
> 핵심은 "사전 확률(prior)"이라는 개념이었다.\r
> 동전을 던지기 전에, 앞면 확률에 대해 이미 갖고 있는 믿음이 있다.\r
> 그 믿음에 데이터(일곱 번의 앞면)를 곱해서 업데이트하면\r
> 새로운 믿음(사후 확률, posterior)이 된다.\r
>\r
> 사전 × 우도 → 사후.\r
> 이것이 베이즈 정리다.\r
> 그리고 이 "곱한다"는 연산이 바로 이 장의 주제다.\r
>\r
> 곱한다는 것은 AND다.\r
> 사전 믿음이 "이 동전은 대체로 공정할 것이다"이고\r
> 데이터가 "앞면이 많이 나왔다"이면,\r
> 두 정보의 교집합만 살아남는다.\r
> 결과는 사전보다 좁고, 데이터만 볼 때보다도 좁다.\r
> 확신의 방향이다.\r
>\r
> Bayes는 1761년에 세상을 떠났다.\r
> 그의 논문은 친구 Richard Price가 유고함에서 발견해\r
> 1763년에 왕립학회에 제출했다.\r
> Price는 서문에서 이 논문의 의의를 설명하며\r
> 상당한 편집과 보충을 했다.\r
> "Bayes의 정리"에는 사실 Price의 기여가 상당하다.\r
>\r
> 그리고 18세기 말, 프랑스에서 Laplace가\r
> 같은 아이디어를 독립적으로, 그리고 훨씬 더 체계적으로 발전시켰다.\r
> Laplace의 작업이 없었다면 베이즈 정리는\r
> 잊혀진 목사의 유고로 남았을 수도 있다.\r
>\r
> 이 장에서 "곱셈이 확신이다"라고 했다.\r
> Bayes와 Laplace가 연 문은 정확히 이것이다 —\r
> 새로운 증거를 곱할 때마다 무지가 확신으로 변하는 과정.\r
> 그리고 그 과정이 파라미터 공간에서 e-측지선을 따라 걷는 것임을\r
> 밝혀내는 데 200년이 더 걸렸다.\r
`,bh=`# 추론의 기하학\r
\r
10장에서 두 개의 질문을 남겼다.\r
전방 KL만으로는 답을 얻을 수 없고, 역방 KL만으로도 답을 얻을 수 없다.\r
하나는 넓어지고, 하나는 좁아진다.\r
어느 쪽도 "올바른" 추론이 아니라고 했다.\r
\r
그러면 어떻게 해야 하는가?\r
답은 "한쪽만 고르지 않는다"이다.\r
두 사영을 번갈아 쓴다.\r
넓혀서 빠뜨림을 방지하고, 좁혀서 확신을 얻고,\r
다시 넓히고, 다시 좁히고 — 이 교대가 수렴할 때\r
비로소 추론이 완성된다.\r
\r
그 이야기를 하기 전에, 먼저 사영이란 무엇인지를 정확히 하자.\r
\r
## 사영 — 큰 세계를 작은 세계에 옮기기\r
\r
### 한 개념\r
복잡한 분포를 다루기 쉬운 부분 공간에 내려찍기\r
\r
### 왜\r
"실제 분포가 지수족에 안 속하면 어떻게 하나?"\r
\r
### 비유\r
3D 물체의 2D 그림자 —\r
그림자를 찍는 각도에 따라 모양이 다르듯\r
사영의 방향에 따라 결과가 다르다.\r
\r
### JSX\r
심플렉스 위에 목표점 p와\r
지수족 부분매니폴드(곡선)를 그리고,\r
p에서 곡선으로 "가장 가까운 점"을 찾는 시각화.\r
\r
### 파이썬\r
간단한 이산분포에서 MLE = 사영임을 코드로 확인.\r
\r
### 수확\r
"추론 = 사영"이라는 감각\r
\r
## 두 가지 사영 — e-사영과 m-사영\r
\r
### 한 개념\r
같은 목표에 대해 두 종류의 사영이 다른 답을 준다\r
\r
### 왜\r
"같은 분포를 같은 모형에 맞추는데 왜 답이 두 개?"\r
\r
### 비유\r
의사의 저녁 — 10장에서 세 의사의 의견을 섞고 곱했다.\r
이번에는 검사 결과를 지수족 모형(가우시안 등)으로 요약해야 한다.\r
현실(세 봉우리 분포)은 지수족이 아니다.\r
가장 가까운 가우시안을 찾는 것이 사영이다.\r
그런데 "가장 가까운"의 기준이 m인지 e인지에 따라\r
넓은 가우시안이 나올 수도, 좁은 가우시안이 나올 수도 있다.\r
\r
### p와 q의 역할\r
(되새김):\r
p는 현실(진짜 분포), q는 지도(모형).\r
\r
m-사영: KL(p‖q) 최소화 — 현실 p의 눈으로 심판한다.\r
   p가 높은 곳에서 q가 낮으면 벌이 크다.\r
   q는 p의 모든 봉우리를 빠짐없이 덮어야 한다.\r
   결과: q가 넓어진다 — "빠뜨리지 않겠다."\r
   10장에서 이것이 혼합의 방향이라 했다.\r
\r
e-사영: KL(q‖p) 최소화 — 모형 q의 눈으로 심판한다.\r
   q가 높은 곳에서 p가 낮으면 벌이 크다.\r
   q는 p가 확실히 높은 봉우리에만 확률을 걸어야 안전하다.\r
   결과: q가 좁아진다 — "확신하겠다."\r
   10장에서 이것이 곱셈의 방향이라 했다.\r
\r
### JSX\r
"사영"의 시각화에서 e-사영(KL(q‖p) 최소화)과\r
m-사영(KL(p‖q) 최소화)의 착지점을 동시에 표시.\r
특히 다봉 분포에서 차이가 극적으로 보임.\r
\r
### 파이썬\r
변분 추론의 두 방향을 미니 예제로 비교 구현.\r
\r
### 수확\r
"어떻게 사영하느냐 = 어떤 종류의 추론을 하느냐"\r
\r
## 왜 접속이 두 개인가\r
\r
### 한 개념\r
e-접속과 m-접속이 정확히 두 개인 구조적 이유\r
\r
### 왜\r
"하나가 아니라 두 개, 세 개가 아니라 두 개인 이유?"\r
\r
4장에서 길이 두 개인 것을 처음 보았다 — 덧셈의 길과 곱셈의 길.\r
8장에서 길이 두 개이면 접속도 두 개라는 예고를 했다.\r
6장에서 볼록함수와 그 쌍대가 동전의 양면이었듯,\r
e-접속과 m-접속도 Fisher 계량에 대해 쌍대다.\r
두 개인 이유는 같은 뿌리에서 나온다 —\r
확률을 조합하는 자연스러운 연산이 정확히 두 개이기 때문이다.\r
\r
### 비유\r
덧셈과 곱셈 — 체(field)의 두 연산. 세 번째는 없다.\r
\r
### JSX\r
"첫 번째 길"~"두 길이 다른 곳을 지나간다"의 두 경로 시각화를 심플렉스 위에 종합.\r
α 슬라이더(-3 ~ +3)로 α-측지선의 연속적 변화를 보되,\r
α = ±1에서만 "분포를 결합하는 자연스러운 연산"이\r
대응됨을 하이라이트.\r
\r
### 파이썬\r
α-측지선 일반 구현. α를 바꿔가며 경로 비교.\r
\r
### 수확\r
"덧셈과 곱셈이 기하학을 만든다"\r
\r
## 다시, 모델 병합으로\r
\r
### 한 개념\r
파라미터 공간의 직선이 분포 공간에서는 어떤 경로인가를\r
묻는 것 자체가 정보기하학의 관점이다\r
\r
### 왜\r
"처음에 봤던 그 마법들 — 이제 질문을 정확히 할 수 있는가?"\r
\r
1장에서 LoRA 병합과 모델 수프를 보았다.\r
파라미터를 평균 내면 왜 되는가?\r
2장에서 "어떤 공간에 놓느냐에 따라 가까움과 멂이 달라진다"고 했다.\r
이제 그 두 관찰을 하나로 잇는 질문을 할 수 있다:\r
파라미터 공간에서의 평균이\r
분포 공간에서는 어떤 경로의 어떤 중간점인가?\r
\r
### 비유\r
여행의 귀환 — 같은 풍경인데 질문이 달라졌다.\r
"파라미터 공간에서 벌어지는 마법들"에서는 "왜 되고 왜 안 되지?"였다면,\r
이제는 "파라미터 공간의 직선이 분포 공간에서는\r
어떤 모양의 길이었는가?"를 묻게 된다.\r
\r
### JSX\r
왼쪽에 파라미터 공간, 오른쪽에 분포 공간(심플렉스).\r
파라미터 공간에서 두 점을 직선으로 잇되,\r
그 직선 위의 각 점이 분포 공간에서 어디에 찍히는지를\r
실시간으로 대응시킨다.\r
파라미터화가 선형에 가까우면 → 분포 경로도 매끄럽다.\r
파라미터화가 비선형이면 → 분포 경로가 심하게 휜다.\r
"같은 직선이 분포 공간에서는 직선이 아닐 수 있다."\r
\r
### 파이썬\r
간단한 2-파라미터 모델에서\r
파라미터 직선 보간의 중간점 분포를 계산하고,\r
같은 양 끝점의 m-중간점, e-중간점과 비교.\r
세 중간점이 일치하는 경우(평탄)와\r
크게 다른 경우(곡률이 큰 경우)를 나란히 관찰.\r
\r
### 수확\r
LoRA 병합이 잘 되는 조건 — 두 변화가 직교하는 부분공간을\r
점유하고, 그 영역에서 파라미터화가 분포 공간의\r
자연스러운 기하학과 크게 어긋나지 않을 때.\r
정보기하학은 답을 바로 주지 않지만,\r
"왜 되고 왜 안 되는가"를 정확한 질문으로 바꿔준다.\r
— "파라미터 공간에서 벌어지는 마법들"의 물음에 대한, 정직한 답\r
\r
두 종류의 사영을 배웠다.\r
그런데 실전에서는 한 번의 사영으로 끝나지 않는다.\r
e-사영을 하고, 그 결과를 보고, 다시 m-사영을 하고, 또 그 결과를 보고 —\r
이 교대를 반복하면 어디에 도달하는가?\r
수렴하는가? 수렴한다면, 왜?\r
\r
---\r
\r
> ### 인물 이야기 — Imre Csiszár와 "발산의 통일"\r
>\r
> 1960년대, 부다페스트.\r
> 헝가리 과학원의 젊은 수학자 Imre Csiszár는\r
> 정보이론과 통계학의 경계에서 일하고 있었다.\r
> 냉전 시대, 철의 장막 너머의 수학자들이\r
> 서방과 독립적으로 같은 문제들을 풀고 있던 시절이다.\r
>\r
> Csiszár가 직면한 문제는 이것이었다.\r
> KL 발산이 있다. χ² 발산도 있다. 헬링거 거리도 있다.\r
> 분포 사이의 "다름"을 재는 양이 여러 개인데,\r
> 이것들 사이에 체계가 있는가?\r
> 아니면 각각이 별개의 발명인가?\r
>\r
> 1963년, Csiszár는 이 양들이 전부 하나의 가족 — f-divergence — 이라는 것을\r
> 보였다. 볼록함수 f 하나를 고르면 발산 하나가 나온다.\r
> f(x) = x log x이면 KL, f(x) = (x-1)²이면 χ²,\r
> f(x) = (√x - 1)²이면 헬링거.\r
> 5장 간주곡에서 "볼록함수마다 발산이 하나씩 태어난다"고 했던 것의\r
> 정확한 형태가 이것이다.\r
>\r
> 같은 시기, 일본의 Ali와 Silvey도 독립적으로 같은 개념에 도달했다.\r
> 수학에서 자주 일어나는 일이다 — 문제가 무르익으면\r
> 다른 대륙에서 같은 답이 나온다.\r
>\r
> 그러나 Csiszár의 기여는 거기서 멈추지 않았다.\r
> 그는 f-divergence의 **사영 정리(projection theorem)**를 증명했다.\r
> 볼록 집합 위로의 정보 사영이 유일하다는 것.\r
> 이것이 이 장에서 "추론 = 사영"이라 했던 것의 수학적 기초다.\r
>\r
> 그리고 한 걸음 더 — Csiszár는 교대 사영이 수렴한다는 것을\r
> 일반적인 조건에서 증명했다.\r
> e-사영과 m-사영을 번갈아 적용하면 고정점에 수렴한다는 것.\r
> 다음 장(12장)에서 EM 알고리즘의 수렴을 보장하는 것이\r
> 바로 이 정리의 응용이다.\r
>\r
> Csiszár는 조용한 수학자였다.\r
> 화려한 일화보다 정리의 깔끔함으로 기억되는 부류의 사람이다.\r
> 그러나 그가 놓은 기초 — f-divergence와 사영 정리 — 는\r
> 정보기하학에서 Amari의 쌍대 구조와 만나\r
> 이 교재의 11장과 12장을 관통하는 뼈대가 되었다.\r
`,nm=`# 수렴\r
\r
11장의 마지막에서 질문을 남겼다.\r
e-사영을 하고, 그 결과를 보고, 다시 m-사영을 하고, 또 그 결과를 보고 —\r
이 교대를 반복하면 어디에 도달하는가?\r
수렴하는가? 수렴한다면, 왜?\r
\r
답은 "수렴한다"이다.\r
그리고 그 이유는 놀랍도록 단순하다.\r
두 사영이 직교하기 때문이다.\r
\r
이 한마디가 이 장의 전부다.\r
직교라는 조건이 어떻게 수렴을 보장하는지,\r
그리고 그 수렴이 하나의 알고리즘 — EM — 이 되어\r
이 교재의 모든 도구가 합류하는 지점이 된다.\r
\r
## 피타고라스의 재림\r
\r
### 한 개념\r
\r
e-사영과 m-사영은 직교한다 (정보기하학의 피타고라스 정리)\r
\r
### 왜\r
\r
"두 종류의 사영이 직각으로 만난다니, 그게 왜 중요한가?\r
직교가 왜 수렴을 보장하는가?"\r
\r
### 비유 1\r
\r
직각삼각형의 높이 —\r
직각삼각형에서 빗변의 길이는 두 변의 길이로 분해된다:\r
     c² = a² + b²\r
이것은 직각이기 때문에 성립한다.\r
비스듬하면 성립하지 않는다.\r
\r
정보기하학에서도 같은 일이 일어난다.\r
목표점 p에서 부분매니폴드 M까지의 KL 거리가\r
두 단계로 깔끔하게 분해된다:\r
     KL(p‖m) = KL(p‖e) + KL(e‖m)\r
p에서 e-사영점까지의 거리 + e-사영점에서 m-사영점까지의 거리\r
= p에서 m-사영점까지의 거리.\r
이것은 두 사영이 직교하기 때문에 성립한다.\r
\r
"피타고라스 정리가 KL 발산의 세계에서 부활한 것이다."\r
\r
### 비유 2\r
\r
GPS 삼각측량 —\r
산꼭대기에서 마을까지의 거리를 재고 싶다.\r
직접 내려가면 험하다.\r
대신 동쪽으로 내려가서(수평 이동),\r
그 다음 남쪽으로 걸어간다(수직 이동).\r
두 이동이 직교하면,\r
총 거리² = 수평 거리² + 수직 거리².\r
직교하지 않으면 이 분해가 깨진다 —\r
대각선으로 질러가면 더 짧을 수도, 더 길 수도 있다.\r
\r
e-사영과 m-사영이 직교한다는 것은\r
"두 스텝이 서로의 성과를 방해하지 않는다"는 뜻이다.\r
e-스텝이 줄인 거리를 m-스텝이 되돌리지 않는다.\r
m-스텝이 줄인 거리를 e-스텝이 되돌리지 않는다.\r
그래서 매 스텝이 순수한 진전이다.\r
\r
### 왜 직교가 수렴을 보장하는가\r
\r
피타고라스 분해에서\r
     KL(p‖m) = KL(p‖e) + KL(e‖m)\r
이므로 KL(p‖e) ≤ KL(p‖m).\r
e-사영을 하면 KL이 줄어든다.\r
같은 논법으로 m-사영을 하면 또 줄어든다.\r
줄어든 양은 정확히 사영 전후의 KL 차이이고,\r
이것은 항상 0 이상이다.\r
\r
매 스텝이 KL을 줄이므로,\r
두 사영을 번갈아 수행하면 KL은 단조감소한다.\r
단조감소하는 양이 아래로 유계(KL ≥ 0)이면 — 수렴한다.\r
\r
이것이 정보기하학이 수렴 증명에 가져다주는 선물이다.\r
복잡한 해석학 없이, 기하학적 직관 하나로\r
"왜 수렴하는가"가 설명된다.\r
\r
### 왜 KL에서 피타고라스가 성립하는가\r
\r
브레그만의 선물:\r
유클리드 거리에서 피타고라스가 성립하는 건 놀랍지 않다.\r
그런데 3장에서 KL 발산은 비대칭이고, 삼각부등식도 안 되고,\r
"진짜 거리"도 아니라고 했다.\r
이런 괴상한 양에서 피타고라스가 왜 성립하나?\r
\r
7장을 떠올리자.\r
KL은 볼록함수 F(θ)에서 태어난 브레그만 발산이었다.\r
그리고 브레그만 발산은 "함숫값과 접선의 차이"였다(6장).\r
접선은 1차 근사이고, 1차 근사의 오차는 2차 이상이다.\r
이 2차 구조가 — 내적과 직교를 정의할 수 있는 구조가 —\r
피타고라스를 가능하게 한다.\r
\r
3장에서 "거리도 아닌 것"이라 불렀던 KL이\r
피타고라스 정리를 품고 있었다.\r
거리가 아니어서 쓸모없는 줄 알았는데,\r
거리가 아니기 때문에 — 볼록함수에서 태어났기 때문에 —\r
오히려 이 분해가 가능하다.\r
6장의 그릇이, 7장의 접선이, 여기서 수렴을 보장하고 있다.\r
\r
### JSX\r
\r
심플렉스 위에서 목표점 p, 부분매니폴드 M,\r
e-사영점과 m-사영점을 표시하고,\r
두 사영 방향이 직교함을 각도로 시각화.\r
\r
[왼쪽] 심플렉스 위의 기하학적 그림.\r
     p → e-사영점: 빨간 화살표.\r
     e-사영점 → m-사영점: 파란 화살표.\r
     두 화살표 사이의 각도 = 90°를 호로 표시.\r
\r
[오른쪽] KL 분해 막대그래프.\r
     KL(p‖m) = KL(p‖e) + KL(e‖m).\r
     세 막대가 나란히. 왼쪽 막대 = 오른쪽 두 막대의 합.\r
     p를 옮기면 세 값이 변하지만 등식은 항상 성립.\r
\r
→ p를 부분매니폴드에 가까이 가져가보자.\r
  세 막대가 모두 줄어들지만 등식은 유지되는가?\r
  p가 M 위에 놓이면 세 값이 모두 0이 되는가?\r
\r
### 파이썬\r
\r
이산분포 예제에서 피타고라스 등식을 수치 검증.\r
랜덤한 p에 대해 e-사영점과 m-사영점을 계산하고,\r
KL(p‖m) - KL(p‖e) - KL(e‖m) ≈ 0 임을 확인.\r
여러 p에 대해 반복하여 "항상 성립함"을 보인다.\r
\r
### 수확\r
\r
"사영의 직교성 = 정보량의 분해 = 수렴의 보장.\r
피타고라스 정리가 KL의 세계에서 부활했다."\r
\r
## EM — 두 사영의 교대\r
\r
### 한 개념\r
\r
EM 알고리즘은 e-사영과 m-사영을 번갈아 수행하는 것\r
\r
### 왜\r
\r
"이 모든 기하학이 실제 알고리즘 하나로 수렴한다면?\r
지금까지 배운 점, 길, 거리, 놀라움, 볼록성, 지수족,\r
곡률, 무지와 확신, 사영 — 이 모든 것이\r
한 알고리즘의 각 스텝에서 동시에 작동하고 있다면?"\r
\r
### 비유 1\r
\r
벽에 못 박기 —\r
액자를 걸려고 한다.\r
수평기를 대고 수평을 맞춘다 — 그런데 높이가 틀어졌다.\r
줄자로 높이를 맞춘다 — 그런데 수평이 틀어졌다.\r
다시 수평을 맞추고, 다시 높이를 맞추고.\r
매번 조금씩 나아지고, 결국 정확한 위치에 도달한다.\r
\r
이것이 되는 이유?\r
수평 조정과 높이 조정이 직교하기 때문이다.\r
수평을 맞추는 것이 높이를 망치지 않고,\r
높이를 맞추는 것이 수평을 망치지 않는다.\r
(약간은 망칠 수 있지만, 망치는 양보다 맞추는 양이 항상 크다.)\r
\r
### 비유 2\r
\r
10장 와일드카드의 회수 —\r
10장에서 와일드카드(OR)와 쉼표(AND)를 번갈아 추가하면\r
파라미터 공간에서 지그재그한다고 했다.\r
EM은 정확히 이것이다.\r
\r
E-스텝 = 가능성을 넓히는 방향(혼합/무지).\r
     현재 파라미터로 숨겨진 변수의 분포를 계산한다.\r
     "이 데이터가 클러스터 A에서 왔을 확률은 0.7,\r
     B에서 왔을 확률은 0.3" — 가능성을 열어둔다.\r
     이것은 e-사영이다.\r
     (데이터와 일치하는 분포들의 집합 — m-flat 매니폴드 — 위로 내려찍는다.)\r
\r
M-스텝 = 가능성을 좁히는 방향(곱셈/확신).\r
     E-스텝에서 열어둔 가능성을 기반으로\r
     파라미터를 업데이트한다.\r
     "그렇다면 클러스터 A의 평균은 여기, B의 평균은 저기."\r
     가능성이 좁혀진다.\r
     이것은 m-사영이다.\r
     (모형의 파라미터 공간 — e-flat 매니폴드 — 위로 내려찍는다.)\r
\r
8장에서 매니폴드는 "국소적으로 평면, 전체적으로 곡면"이라 했다.\r
EM의 두 매니폴드 — 데이터 매니폴드와 모형 매니폴드 — 가\r
각각 m-flat과 e-flat인 것은\r
4장의 두 길이 여기서 두 착지 면이 되는 것이다.\r
\r
E-스텝(넓히기) → M-스텝(좁히기) → E-스텝(넓히기) → ...\r
무지와 확신이 교대한다.\r
매 교대마다 KL이 줄어든다 — 피타고라스가 보장한다.\r
\r
### JSX\r
\r
심플렉스 위에서 EM의 지그재그.\r
\r
[메인 패널] 심플렉스 위에 두 개의 곡선:\r
     데이터 매니폴드 D (m-flat, e-사영의 착지 영역).\r
     모형 매니폴드 M (e-flat, m-사영의 착지 영역).\r
     초기점 q₀ ∈ M에서 출발.\r
     E-스텝: q₀ → D 위의 점으로 e-사영 (파란 화살표).\r
     M-스텝: D 위의 점 → M 위의 새 점으로 m-사영 (빨간 화살표).\r
     반복. 지그재그가 수렴점으로 좁혀들어간다.\r
\r
[하단] KL 값의 변화 그래프.\r
     x축: 스텝 번호 (1, 2, 3, ...).\r
     y축: KL(p‖q).\r
     계단식으로 단조감소하는 곡선.\r
     매 스텝의 감소량이 점점 작아지면서 수렴.\r
\r
→ 초기점을 다른 곳에 놓아보자.\r
  지그재그의 모양이 달라지는가?\r
  수렴점은 같은가?\r
  (같은 경우 = 볼록 문제. 다른 경우 = 다봉 문제.\r
  다봉이면 초기점에 따라 다른 극소에 빠질 수 있다.)\r
\r
→ 스텝 수를 20까지 돌려보자.\r
  KL 그래프가 완전히 평평해지는 순간이 오는가?\r
\r
### 파이썬\r
\r
간단한 혼합 가우시안에서 EM 구현.\r
2개 클러스터, 100개 데이터.\r
각 스텝의 파라미터와 KL(p‖q)를 기록.\r
KL이 매 스텝 감소하는 것을 테이블로 출력.\r
\r
# E-step: 각 데이터의 클러스터 소속 확률 계산 (e-사영)\r
# M-step: 소속 확률 기반으로 파라미터 업데이트 (m-사영)\r
# 반복하면서 log-likelihood가 단조증가하는 것을 확인\r
\r
### 교재 전체의 회수\r
\r
EM의 한 사이클 안에 이 교재의 모든 것이 들어 있다.\r
\r
| EM의 구성 요소 | 교재에서 배운 것 |\r
|---|---|\r
| 분포 = 점 | 2장 |\r
| KL로 거리를 잰다 | 3장, 5장 |\r
| 두 길(덧셈/곱셈)이 두 스텝이 된다 | 4장 |\r
| F(θ)의 볼록성이 유일해를 보장 | 6장 |\r
| 지수족 위에서 작동 | 7장 |\r
| 데이터 매니폴드와 모형 매니폴드 | 8장 |\r
| Fisher 계량이 스텝 크기를 결정 | 9장 |\r
| 무지(E)와 확신(M)의 교대 | 10장 |\r
| e-사영과 m-사영 | 11장 |\r
| 직교성이 수렴을 보장 | 이 장 |\r
\r
이 교재의 여행은 하나의 알고리즘을 이해하기 위한 것이었다.\r
한 알고리즘의 한 스텝을 정직하게 이해하려면\r
이만큼의 풍경이 필요했다.\r
\r
### 수확\r
\r
"이래서 이 모든 것을 배운 것이다.\r
E-스텝(e-사영, 데이터로)과 M-스텝(m-사영, 모형으로)의 교대.\r
매 교대가 KL을 줄인다 — 피타고라스의 직교성 덕에.\r
그리고 이것은 하나의 알고리즘이 아니라,\r
추론이라는 행위 자체의 기하학적 구조다."\r
\r
이 교재의 모든 도구가 한 알고리즘 안에 들어 있다는 것을 확인했다.\r
그런데 한 가지 눈에 밟히는 것이 있다.\r
log가 4장에서도 나오고, 5장에서도 나오고, 7장에서도, 9장에서도 나왔다.\r
매번 다른 이름으로. 매번 다른 이유로.\r
왜 같은 함수가 이렇게 많은 문을 열고 있는가?\r
우연인가, 필연인가?\r
\r
---\r
\r
> ### 인물 이야기 — Dempster, Laird, Rubin과 "불완전 데이터의 문제"\r
>\r
> 1977년, 하버드 대학.\r
> Arthur P. Dempster, Nan Laird, Donald Rubin이\r
> *Journal of the Royal Statistical Society*에 논문을 발표했다.\r
> "Maximum Likelihood from Incomplete Data via the EM Algorithm."\r
> 이 논문이 이름을 붙인 것 — EM 알고리즘.\r
>\r
> 사실 EM의 아이디어 자체는 이 논문 이전에 이미 여러 곳에서\r
> 각각 다른 이름으로 쓰이고 있었다.\r
> 유전학에서, 천문학에서, 의학 통계에서 —\r
> "보이지 않는 변수가 있을 때 파라미터를 추정하는 방법"을\r
> 사람들은 직관적으로 알고 있었다.\r
> 모르는 것을 추측하고(E-스텝), 그 추측 위에서 최적화하고(M-스텝),\r
> 다시 추측하고, 다시 최적화하고 — 이 교대를 반복하면 답에 가까워졌다.\r
>\r
> DLR(Dempster-Laird-Rubin) 논문이 한 일은 이 직관에 이름과 구조를 준 것이다.\r
> 흩어져 있던 사례들을 하나의 알고리즘으로 통일하고,\r
> 수렴한다는 것을 증명했다.\r
>\r
> 그런데 "왜" 수렴하는가에 대한 깊은 이해는\r
> DLR 논문만으로는 완전하지 않았다.\r
> DLR은 우도가 매 스텝 증가한다는 것을 보였지만,\r
> 그 증가가 기하학적으로 무엇을 의미하는지는 말하지 않았다.\r
>\r
> 그 기하학적 의미를 밝힌 것이 Amari와 그 후학들의 작업이다.\r
> E-스텝은 e-사영이고 M-스텝은 m-사영이다.\r
> 두 사영이 직교한다 — 정보기하학의 피타고라스 정리.\r
> 직교하면 매 스텝에서 KL 거리가 반드시 줄어든다.\r
> 줄어들 수밖에 없는 기하학적 이유가 있었던 것이다.\r
>\r
> 이 장에서 본 표 — EM의 각 구성 요소가 이 교재의 어느 장에 대응하는지 — 는\r
> 하나의 알고리즘을 이해하기 위해\r
> 점, 거리, 길, 놀라움, 볼록성, 지수족, 매니폴드, 계량, 쌍대, 사영이\r
> 전부 필요했다는 것을 보여준다.\r
> Dempster가 이름 붙인 알고리즘의 한 스텝 안에\r
> 이 교재의 모든 풍경이 접혀 있다.\r
`,rm=`# 전체 지도\r
\r
12장의 마지막에서 눈에 밟히는 것이 있었다.\r
log가 4장에서도 나오고, 5장에서도 나오고, 7장에서도, 9장에서도 나왔다.\r
매번 다른 이름으로. 매번 다른 이유로.\r
왜 같은 함수가 이렇게 많은 문을 열고 있는가?\r
우연인가, 필연인가?\r
\r
필연이다. 이 장에서 그것을 확인한다.\r
\r
## 하나의 곡선, 여섯 개의 얼굴\r
\r
지금 기억을 더듬어보자.\r
\r
4장에서 우리는 곱셈을 덧셈으로 바꾸는 렌즈를 만났다.\r
log(p · q) = log p + log q.\r
리히터 규모, 데시벨, pH — 곱으로 커지는 세계를\r
더하기로 느끼게 해주는 번역기.\r
그때는 그것이 "두 번째 길"을 열어주는 도구였다.\r
\r
5장에서 우리는 놀라움의 척도를 만났다.\r
독립사건의 놀라움이 더해지려면 — 곱을 합으로 바꾸는\r
함수는 log뿐이었다. 그래서 -log(p)가 놀라움이 되었다.\r
그때는 log가 정보량의 단위를 만드는 도구였다.\r
\r
5장 간주곡에서 우리는 -log의 볼록성을 보았다.\r
할선이 항상 곡선 위에 있다는 간단한 사실에서\r
KL ≥ 0이 나왔다. 그때는 log가 부등식의 원천이었다.\r
\r
7장에서 우리는 지수족의 골격을 만났다.\r
exp(θ·t(x) - F(θ)) — 이 뼈대의 심장에 log가 있었다.\r
로그정규화자 F(θ)가 볼록함수이고,\r
그 볼록성이 쌍대 좌표를 선물했다.\r
그때는 log가 분포의 골격을 만드는 도구였다.\r
\r
9장에서 우리는 ∇log p를 만났다.\r
연봉 3000만원의 300만원 인상과 3억의 300만원 인상이 다르듯,\r
확률의 변화를 비율로 읽는 도구.\r
Fisher 정보의 재료. 그때는 log가 경사를 정규화하는 도구였다.\r
\r
여섯 번.\r
여섯 번의 등장에서, 매번 log는 다른 이름을 가지고 있었다.\r
번역기, 놀라움의 척도, 볼록성의 원천, 골격의 심장,\r
민감도의 재료, 경사의 정규화기.\r
\r
그런데 곡선은 하나다.\r
y = log x.\r
종이 위에 그리면 하나의 매끄러운 곡선.\r
\r
그 곡선이 여섯 개의 얼굴을 가지고 있었던 것이다.\r
하나의 수학적 대상이, 여섯 개의 맥락에서,\r
여섯 개의 필연성으로 등장했다.\r
곱을 합으로 바꿔야 했기 때문에.\r
독립사건의 놀라움이 더해져야 했기 때문에.\r
발산이 0 이상이어야 했기 때문에.\r
지수족이 뼈대를 가져야 했기 때문에.\r
확률의 경사가 공정해야 했기 때문에.\r
\r
이 모든 "~해야 했기 때문에"가 하나의 곡선으로 수렴한다.\r
\r
### JSX\r
\r
log 곡선 하나를 중심에 놓고,\r
여섯 갈래로 뻗는 연결선.\r
각 갈래를 클릭하면 해당 장의 핵심 시각화가\r
썸네일로 열린다.\r
     ① 곱→합 번역기 (4장 두 경로 비교)\r
     ② 놀라움의 척도 (5장 -log(p) 곡선)\r
     ③ 볼록성의 원천 (5장 간주곡 할선)\r
     ④ 지수족의 골격 (7장 지수족 분해)\r
     ⑤ 민감도의 재료 (9장 Fisher 정보)\r
     ⑥ 경사의 정규화기 (9장 ∇log p)\r
대응표를 읽는 것이 아니라\r
하나의 중심에서 가지가 자라나는 것을 체험한다.\r
\r
## 거리의 세 얼굴\r
\r
log의 여섯 얼굴이 하나의 곡선으로 수렴했듯,\r
거리의 세 이름도 하나의 구조를 가리키고 있었다.\r
\r
3장에서 우리는 KL 발산을 만났다.\r
"현실 p로 살면서 지도 q를 믿을 때 치르는 추가 비용."\r
비대칭 거리.\r
\r
7장에서 우리는 브레그만 발산을 만났다.\r
"볼록함수와 접선 사이의 높이 차이."\r
F(θ)의 그릇에서 접선까지의 간격.\r
그리고 이것이 KL과 같은 것이었다.\r
\r
9장에서 우리는 Fisher 계량을 만났다.\r
"두 점이 가까워지면 비대칭이 사라지며\r
드러나는 대칭 거리."\r
KL의 발밑에서, 그리고 브레그만의 발밑에서,\r
같은 Fisher 행렬이 나타났다.\r
\r
세 갈래로 올라온 길이 한 지점에서 합류한다.\r
KL과 브레그만은 전역적 거리이고,\r
Fisher는 국소적 거리다.\r
전역에서 국소로 내려가면 — 발밑을 보면 —\r
셋이 하나가 된다.\r
\r
그리고 12장에서 이 거리가 피타고라스 정리를 품고 있었다.\r
"거리도 아닌 것"이 수렴을 보장하는 도구가 된 것은\r
이 세 얼굴이 하나의 볼록 구조에서 태어났기 때문이다.\r
\r
### JSX\r
\r
하나의 거리를 중심에 놓고, 세 갈래로 뻗는 연결선.\r
     ① KL 발산 — "놀라움의 차이" (3장)\r
     ② 브레그만 발산 — "접선까지의 높이" (7장)\r
     ③ Fisher 계량 — "발밑의 대칭 거리" (9장)\r
각 갈래를 클릭하면 해당 장의 핵심 시각화가 표시.\r
세 이름이 하나의 구조를 가리키고 있음을 시각적으로.\r
\r
## 지도 완성\r
\r
### JSX\r
\r
전체 통합 대시보드 — 심플렉스, 쌍대 좌표,\r
두 경로, 르장드르 변환, 사영이 연결된 인터랙티브.\r
\r
### 파이썬\r
\r
ExponentialFamily 통합 클래스.\r
\r
### 수확\r
\r
"이 모든 것이 덧셈과 곱셈이었다.\r
덧셈은 무지의 방향이고, 곱셈은 확신의 방향이다(10장).\r
두 방향의 사영이 직교하고(12장), 그 교대가 수렴한다.\r
그리고 그 사이를 번역한 것이 log였다."\r
\r
지도가 완성되었다.\r
2장에서 키 분포를 점 하나로 놓았을 때 시작된 여행이\r
여기서 하나의 그림이 된다.\r
그런데 지도는 여행이 아니다.\r
지도를 들고 실제 세계를 걸어봐야 한다.\r
노이즈에서 이미지가 태어나는 것, 모델이 말을 배우는 것,\r
파라미터를 10배로 키우는 것 — 이 현실의 문제들 앞에서\r
우리의 도구가 정말로 작동하는가?\r
\r
---\r
\r
> ### 인물 이야기 — Nikolai Chentsov과 "유일성의 증명"\r
>\r
> 1960년대, 모스크바.\r
> 니콜라이 니콜라예비치 첸초프(Николай Николаевич Ченцов)는\r
> 소비에트 과학원에서 일하는 수학자였다.\r
> 그의 관심사는 충분통계량과 통계적 결정의 기하학이었다.\r
>\r
> 첸초프가 풀고자 한 문제는 근본적이었다.\r
> 확률분포의 공간에 "거리"를 정의하는 방법은 무한히 많다.\r
> 리만 계량을 하나 골라서 거리를 재면 된다.\r
> 그런데 어떤 계량을 골라야 하는가?\r
> 취향의 문제인가? 아니면 자연스러운 선택이 있는가?\r
>\r
> 첸초프의 답은 놀라웠다.\r
> **Fisher 정보 행렬이 유일하다.**\r
> 더 정확히 말하면: 통계적으로 자연스러운 조건 —\r
> "충분통계량에 의한 축소(마르코프 매핑)에 대해 단조감소한다"는 조건 —\r
> 을 만족하는 리만 계량은 Fisher 정보 행렬뿐이다(상수배를 제외하면).\r
>\r
> 이것은 선택의 문제가 아니었다. 유일한 답이었다.\r
>\r
> 이 결과는 1972년 저서 *Statistical Decision Rules and Optimal Inference*에\r
> 실렸다. 러시아어로. 영어 번역은 1982년에야 나왔다.\r
> 냉전의 장막 너머, 서방의 수학자들은 이 결과를\r
> 한참 뒤에야 알게 되었다.\r
>\r
> 9장에서 "왜 Fisher 정보가 유일한 자연스러운 계량인가"라는 질문에\r
> "Čencov의 정리"라고 답했다. 바로 이 정리다.\r
> 이 교재 전체에서 Fisher 정보가 특권적 위치를 차지하는 것 —\r
> 거리를 재고, 곡률을 정의하고, 사영의 직교성을 보장하는 것 —\r
> 의 수학적 정당화가 첸초프에게서 나온다.\r
>\r
> 그리고 첸초프의 작업에는 계량뿐 아니라 연결(접속)에 대한 결과도 있었다.\r
> 같은 단조성 조건을 만족하는 연결의 가족이\r
> α-연결이라는 1-파라미터 가족으로 제한된다는 것.\r
> Amari가 1980년대에 독립적으로 발견한 쌍대 연결이\r
> 이미 첸초프의 틀 안에 있었던 것이다.\r
>\r
> 첸초프는 1992년에 세상을 떠났다.\r
> 그의 이름은 서방에서 Čencov, Chentsov, Cencov 등 여러 철자로 표기되어\r
> 검색조차 어렵다. 정보기하학의 기초를 놓은 사람 중 하나이면서도\r
> 가장 덜 알려진 인물이다.\r
> 이 장이 "전체 지도"라면,\r
> 그 지도의 유일성을 증명한 사람이 첸초프다.\r
`,em=`# 전환 ③: 도구를 들고 세계로\r
\r
13장에서 지도가 완성되었다.\r
\r
심플렉스 위의 점에서 출발해, 두 개의 길을 걷고, 놀라움을 세고,\r
볼록함수의 쌍대를 넘어 지수족에 도달하고, 사영의 교대로 수렴을 보았다.\r
하나의 곡선이 여섯 개의 얼굴을 가지고 있었고,\r
거리의 세 이름이 하나의 구조를 가리키고 있었다.\r
이 도구들은 지수족 안에서 완벽하게 작동한다.\r
\r
그런데 세상의 분포는 대부분 지수족이 아니다.\r
\r
신경망이 표현하는 분포, 이미지의 분포, 언어의 분포 —\r
이것들은 지수족의 깔끔한 골격을 따르지 않는다.\r
파라미터가 수억 개이고, θ와 η의 쌍대성이 성립하지 않고,\r
F(θ)가 닫힌 형태로 쓰이지 않는다.\r
\r
그러면 우리가 배운 것이 쓸모없는가?\r
\r
아니다. 전략을 바꾸면 된다.\r
정확한 답 대신 올바른 질문을 던지는 것.\r
"이 문제를 정보기하학의 관점에서 보면 무엇이 보이는가?"\r
\r
서문에서 우리는 이 한 마디가 마법처럼 작동한다고 했다.\r
다음 장들은 그 마법이 실제로 작동하는 것을 보여주는 곳이다.\r
`,tm=`# 생성의 기하학\r
\r
13장에서 지도가 완성되었다.\r
그리고 지도는 여행이 아니라고 했다.\r
지도를 들고 실제 세계를 걸어봐야 한다고.\r
\r
여기서부터가 그 걸음이다.\r
\r
추론은 "이미 있는 데이터에서 숨겨진 구조를 찾는" 것이었다.\r
그런데 "아무것도 없는 곳에서 데이터를 만들어내는" 생성은?\r
생성의 기하학에도 우리가 배운 도구들이 작동한다.\r
\r
---\r
\r
## ① 디퓨전 — 안개 속에서 레이더를 따라 걷기\r
\r
### 매니폴드 가설의 귀환\r
\r
8장의 호기심 상자에서 매니폴드 가설을 만난 독자도 있을 것이다.\r
만나지 않았어도 괜찮다. 여기서 필요한 만큼 다시 설명한다.\r
\r
매니폴드 가설이란: 실제 데이터는 고차원 공간 전체에 퍼져 있지 않고,\r
그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다.\r
사진을 생각해보자. 256×256 픽셀 컬러 이미지는 약 20만 차원의 공간에 산다.\r
그런데 "의미 있는 이미지" — 고양이, 풍경, 얼굴 — 는\r
그 20만 차원 공간의 극히 작은 부분에 모여 있다.\r
랜덤으로 20만 개의 숫자를 뽑으면 거의 확실하게 노이즈가 된다.\r
\r
8장에서 이것은 곁가지처럼 보였을 수 있다.\r
호기심 상자에 들어 있었으니까.\r
이 장에서 그 곁가지가 핵심이 된다.\r
\r
### 드래곤볼 찾기 — 디퓨전 모델의 기하학\r
\r
     한 개념: 디퓨전 모델은 "전파 지형 위에서 레이더를 따라 걷는 것"이며,\r
          그 레이더의 바늘이 ∇log p(스코어 함수)다.\r
          안개가 걷히는 과정이 역방향 디퓨전이고,\r
          레이더를 만드는 과정이 스코어 매칭이다.\r
\r
     왜: "노이즈에서 이미지가 태어난다.\r
          이건 마법인가, 아니면 우리가 배운 것들의 조합인가?"\r
\r
     도입: 드래곤볼 찾기 대회.\r
          넓은 평야에 드래곤볼 7개가 숨겨져 있다.\r
          참가자 수천 명이 평야의 아무 지점에 랜덤으로 떨어진다.\r
          주최 측은 각 참가자에게 드래곤 레이더를 하나씩 나눠준다.\r
          규칙은 하나 — 레이더 바늘만 보고 걸어라.\r
\r
     비유 1: 전파 지형 —\r
          각 드래곤볼이 전파를 발산한다.\r
          한 개의 볼이 만드는 신호 강도는\r
          거리에 따라 가우시안으로 감쇠한다.\r
          가까우면 강하고, 멀면 약하다.\r
          7개의 신호가 합쳐지면\r
          땅 위에 전파 강도 지도가 만들어진다.\r
          봉우리가 7개인 지형.\r
\r
          교재 내 연결:\r
          이것은 4장 "섞을 것인가, 곱할 것인가"에서 본\r
          혼합분포(mixture)다.\r
          7개 가우시안의 가중합.\r
          전파 강도 지도 = 확률밀도 p(x).\r
\r
     비유 2: 레이더의 원리 —\r
          레이더 바늘이 가리키는 방향은\r
          "여기서 신호가 가장 빠르게 세지는 방향"이다.\r
\r
          왜 log인가 — 9장의 회수:\r
          신호가 0.001인 벌판 한가운데서\r
          0.0001만큼 세지는 것과,\r
          신호가 0.5인 볼 근처에서\r
          0.0001만큼 세지는 것은 의미가 다르다.\r
          벌판에서의 미세한 변화를 놓치면\r
          참가자는 영원히 허허벌판을 헤맨다.\r
          비율로 봐야 한다. 그래서 ∇log p.\r
\r
          9장에서 "연봉 3000만원의 300만원 인상과\r
          3억의 300만원 인상은 다르다"고 했다.\r
          드래곤 레이더는 이 구분을 할 줄 아는 기기다.\r
\r
     비유 3: 안개의 단계 — 노이즈 스케줄 —\r
          대회는 새벽에 시작한다. 짙은 안개 속에서.\r
\r
          안개가 짙으면:\r
               레이더의 수신 범위가 넓어진다.\r
               7개 볼의 신호가 뭉개져서 하나로 섞인다.\r
               레이더가 가리키는 방향은 "대충 저쪽".\r
               어떤 볼인지 구분이 안 된다.\r
\r
          해가 뜨면서 안개가 걷히면:\r
               수신 범위가 좁아진다.\r
               가장 가까운 볼의 신호가 지배적이 된다.\r
               레이더가 정밀해진다.\r
               특정 볼을 향해 또렷하게 가리킨다.\r
\r
          "멀리서는 숲을 보고, 가까이서는 나무를 본다."\r
\r
          디퓨전 모델에서:\r
               forward process = 안개를 짙게 하는 것.\r
                    데이터에 노이즈를 더하면 분포가 뭉개진다.\r
                    충분히 더하면 순수한 가우시안 — 완전한 안개.\r
                    10장의 언어로 하면 — 무지의 방향이다.\r
                    가능성이 넓어지고, 불확실성이 커진다.\r
               reverse process = 안개가 걷히는 것.\r
                    각 안개 수준에서의 레이더 방향을 따라 걸으면\r
                    데이터로 돌아온다.\r
                    확신의 방향이다.\r
                    가능성이 좁아지고, 특정 이미지가 결정된다.\r
\r
          매니폴드 가설과의 연결:\r
               안개가 완전히 걷힌 상태에서 참가자가 도달하는 곳 —\r
               드래곤볼의 위치 — 이 데이터 매니폴드다.\r
               안개 속에서는 매니폴드를 벗어나 있었지만,\r
               걷는 과정이 매니폴드 위로 되돌려준다.\r
\r
               forward process = 매니폴드를 떠남 (노이즈 추가)\r
               reverse process = 매니폴드로 귀환 (∇log p를 따라 걸음)\r
\r
               "곁가지라고 생각했던 것이 핵심이었다."\r
\r
     비유 4: 레이더 제작법 — 스코어 매칭 —\r
          진짜 문제는 드래곤볼의 정확한 위치를 모른다는 것이다.\r
          가진 건 과거 대회 참가자들의 기록뿐이다:\r
               "이 지점에서, 이 안개 수준에서,\r
               레이더가 이 방향을 가리켰더니\r
               결국 볼을 찾았다."\r
          이 기록들로 신경망을 훈련시킨다.\r
          임의의 (지점, 안개 수준) 쌍에서\r
          "레이더가 가리켜야 할 방향"을 추정하게 만든다.\r
\r
          교재 내 연결:\r
          이것은 11장의 사영이다.\r
          진짜 스코어 필드 ∇log p(x, t)는\r
          복잡하고 알 수 없는 함수다.\r
          신경망이 표현할 수 있는 함수 공간은 그보다 작다.\r
          스코어 매칭 = 진짜 스코어를\r
          신경망 함수 공간으로 사영하는 것.\r
\r
     비유 5: 바람 — 랑주뱅 노이즈 —\r
          참가자가 레이더 방향으로만 직진하면\r
          가장 가까운 볼에만 도달한다.\r
          그런데 약간의 바람이 분다.\r
          걸음이 좀 비틀거린다.\r
          이 비틀거림 덕에 참가자는\r
          가끔 다른 볼의 영향권에 들어간다.\r
          참가자 수천 명이 각각 다른 바람을 맞으면,\r
          7개 볼에 적절히 분산돼서 도착한다.\r
          바람이 없으면 전원이 같은 볼로 몰려간다.\r
          "다양성은 약간의 비틀거림에서 온다."\r
\r
     JSX: 드래곤볼 찾기 시뮬레이션.\r
\r
          [전체] 2D 평야 위에 가우시안 봉우리 7개.\r
               등고선 또는 히트맵으로 전파 강도 표시.\r
               7개 드래곤볼의 위치에 별 마커.\r
\r
          [참가자] 점 20~50개가 평야의 랜덤 위치에서 출발.\r
               각 점에서 ∇log p 방향의 작은 화살표(레이더 바늘).\r
\r
          [안개 슬라이더] σ (노이즈 수준)를 조절.\r
               σ 최대: 등고선이 뭉개져서 하나의 넓은 언덕.\r
                    화살표들이 대충 중심을 가리킨다.\r
               σ 최소: 등고선이 7개의 뾰족한 봉우리.\r
                    화살표들이 각자 가장 가까운 봉우리를 가리킨다.\r
\r
          [재생 버튼] "대회 시작"\r
               σ가 최대에서 최소로 서서히 줄어들면서\r
               참가자 점들이 레이더를 따라 걸어간다.\r
               안개가 짙을 때는 점들이 우왕좌왕.\r
               걷히면서 봉우리로 빨려들어간다.\r
               최종적으로 7개 볼 근처에 클러스터를 이룬다.\r
\r
          [바람 토글] 랑주뱅 노이즈 on/off.\r
               off면 점들이 정결한 경로로 이동. 다양성 낮음.\r
               on이면 비틀거리며 이동. 다양성 높음.\r
               같은 출발점에서도 다른 볼에 도착할 수 있다.\r
\r
          → 바람을 끄고 시작해보자. 모든 참가자가\r
            가장 가까운 볼에만 가는가?\r
            그 다음 바람을 켜보자. 분포가 달라지는가?\r
            이것이 "다양한 샘플 생성"의 원리다.\r
\r
     파이썬:\r
          2D 가우시안 혼합분포 정의 (7개 성분).\r
          ∇log p(x)를 해석적으로 계산.\r
          랑주뱅 다이내믹스 시뮬레이션:\r
               x_{t+1} = x_t + ε · ∇log p(x_t) + √(2ε) · z\r
               z ~ N(0, I)\r
          다양한 초기점에서 출발하여 수렴 경로를 시각화.\r
          노이즈(ε)의 크기에 따른 다양성 변화를 관찰.\r
\r
          # 안개 단계 구현:\r
          # 여러 σ 수준에서의 ∇log p_σ(x) 계산\r
          # σ 큰 것부터 작은 것으로 순차적으로 적용\r
          # = annealed Langevin dynamics\r
\r
     대응표 (본문에 포함):\r
\r
          | 드래곤볼 찾기 | 디퓨전 모델 | 교재 내 연결 |\r
          |---|---|---|\r
          | 드래곤볼 7개 | 데이터 분포의 모드들 | 2장 심플렉스의 점 |\r
          | 전파 강도 지도 | 확률밀도 p(x) | 5장 엔트로피 |\r
          | 전파의 감쇠 | 가우시안 커널 | 4장 혼합 |\r
          | 레이더 바늘 방향 | ∇log p (스코어) | 9장 ∇log p |\r
          | 안개의 농도 | 노이즈 수준 σ(t) | 8장 매니폴드 |\r
          | 안개가 걷히는 과정 | reverse diffusion | — |\r
          | 과거 기록으로 레이더 제작 | 스코어 매칭 | 11장 사영 |\r
          | 바람 | 랑주뱅 노이즈 | — |\r
          | 참가자의 출발점 | z ~ N(0, I) | — |\r
          | 볼에 도착 | 생성된 샘플 | — |\r
\r
     수확: "디퓨전 모델은 마법이 아니다.\r
          혼합분포(4장)의 전파 지형 위에서,\r
          스코어 함수(9장)가 가리키는 방향을 따라,\r
          안개를 걷으며(매니폴드로의 귀환),\r
          신경망이 학습한 레이더(11장 사영)로 걸어가는 것이다.\r
          이 교재의 모든 도구가 하나의 알고리즘 안에 들어 있다."\r
\r
---\r
\r
## 전환: "길 자체를 배울 수는 없는가?"\r
\r
디퓨전은 작동한다. 그런데 생각해보면 우회하는 느낌이 있다.\r
\r
우리가 진짜 원하는 건 "노이즈에서 데이터로 가는 것"이다.\r
디퓨전은 그걸 직접 하는 대신, 매 지점의 스코어를 배우고\r
그 스코어를 따라 조금씩 걷는다.\r
안개의 농도가 바뀔 때마다 레이더를 다시 캘리브레이션해야 한다.\r
\r
더 직접적인 방법이 있지 않을까?\r
출발점에서 도착점까지의 길을 통째로 배우면 안 되나?\r
\r
---\r
\r
## ② 플로우 매칭 — 길을 통째로 배우기\r
\r
### 핵심 아이디어\r
\r
스코어(매 지점의 방향)를 배우는 대신,\r
노이즈 분포에서 데이터 분포로 흘러가는 **속도장(velocity field)**을 직접 학습한다.\r
각 시간 t에서 "이 위치에 있는 입자는 이 방향으로, 이 속도로 움직여야 한다"를\r
하나의 벡터장으로 표현하고, 신경망이 그 벡터장을 배운다.\r
\r
### 드래곤볼 비유의 확장\r
\r
디퓨전에서 참가자는 매 순간 레이더를 확인하며 한 걸음씩 걸었다.\r
레이더는 "지금 여기서 가장 가파른 방향"만 알려준다.\r
안개 수준이 바뀌면 레이더를 재조정해야 한다.\r
\r
플로우 매칭에서는 주최 측이 아예 내비게이션을 만들어준다.\r
"출발점 A에서는 이 경로, 출발점 B에서는 저 경로."\r
참가자는 레이더를 볼 필요 없이 내비가 지시하는 대로 걷는다.\r
안개 수준을 신경 쓸 필요도 없다 — 경로가 이미 전부 계획되어 있으니까.\r
\r
### 교재 도구와의 대응\r
\r
| 플로우 매칭의 요소 | 교재 내 연결 |\r
|---|---|\r
| 노이즈 분포 → 데이터 분포의 경로 | 4장: "두 점 사이를 잇는 길" |\r
| 가장 단순한 경로 = 직선 보간 | 4장: "첫 번째 길 — 덧셈으로 걷기" |\r
| 더 좋은 경로 = optimal transport path | 최적 수송 — 가장 경제적인 길 (아래) |\r
| 속도장을 신경망으로 근사 | 11장: 사영 — 큰 세계를 작은 세계에 옮기기 |\r
| 데이터 분포가 사는 곳 | 8장 호기심 상자: 매니폴드 가설 |\r
\r
### 4장의 나선형 회수\r
\r
4장에서 학생은 "두 분포 사이를 걷는 길이 두 개 있다"를 배웠다.\r
덧셈의 길과 곱셈의 길. 추상적이었다.\r
\r
플로우 매칭에서 conditional flow matching의 가장 기본적인 형태가\r
노이즈 점 z와 데이터 점 x 사이의 **직선 보간**이다:\r
\r
    x_t = (1 - t) · z + t · x\r
\r
이것은 4장의 "첫 번째 길 — 덧셈으로 걷기"의 실현이다.\r
학생은 여기서 "아, 4장에서 본 그 직선이 실제로 쓰이는 거구나"를 체험한다.\r
\r
그리고 직선이 최선이 아닐 수 있다.\r
두 분포 사이를 잇는 길 중 "가장 경제적인 길"을 찾는 것이\r
최적 수송이다.\r
\r
### 와서스타인 거리와 최적 수송\r
\r
KL 발산은 "두 분포가 같은 사건에 얼마나 다른 확률을 매기는가"를 묻는다.\r
와서스타인 거리는 전혀 다른 질문을 한다 —\r
"한 분포를 다른 분포로 옮기려면 흙을 얼마나 날라야 하는가?"\r
3장에서 본 비대칭 거리와는 또 다른 종류의 거리다.\r
\r
와서스타인 거리의 배경에는 분포를 "옮기는" 기하학이 있다.\r
심플렉스 위의 점을 다른 점으로 변환하는 가장 경제적인 경로를 찾는 것 —\r
4장에서 우리가 본 "길"의 개념이 여기서 새로운 의미를 얻는다.\r
\r
플로우 매칭에서 이것이 구체적으로 작동한다.\r
직선 보간은 가장 단순한 경로이지만,\r
최적 수송 경로(optimal transport path)는 "흙을 가장 적게 나르는 길"이다.\r
경로가 꼬이지 않고, 입자들이 서로 부딪히지 않는다.\r
같은 도착지에 가되, 더 경제적으로 간다.\r
\r
### 파이썬: 디퓨전과 플로우 매칭의 비교\r
\r
     # conditional flow matching의 직선 보간\r
     # z: 노이즈 점, x: 데이터 점, t: 시간 (0→1)\r
     x_t = (1 - t) * z + t * x       # 시간 t에서의 위치\r
     v_target = x - z                 # 속도장 타겟 (상수!)\r
\r
     # 디퓨전의 스코어 타겟과 비교:\r
     # score_target = -(x_t - x) / σ(t)²   # 시간과 위치에 따라 변한다\r
     # 플로우 매칭의 타겟은 (x - z)로 일정하다. 더 단순하다.\r
\r
### JSX: 내비게이션 vs 레이더 비교 시각화\r
\r
     [왼쪽 패널] 디퓨전 모드\r
          2D 평면 위에 데이터 점들(드래곤볼).\r
          랜덤 출발점에서 ∇log p 화살표를 따라\r
          한 걸음씩 이동. 안개 슬라이더.\r
\r
     [오른쪽 패널] 플로우 매칭 모드\r
          같은 2D 평면. 같은 데이터 점들.\r
          랜덤 출발점에서 데이터 점까지의\r
          직선 경로(또는 OT 경로)가 미리 그려져 있다.\r
          시간 슬라이더 t를 움직이면 모든 입자가\r
          경로를 따라 동시에 이동.\r
\r
     [하단] 두 방법의 궤적을 겹쳐 그리기.\r
          디퓨전의 궤적은 비틀거리고(랑주뱅 노이즈),\r
          플로우 매칭의 궤적은 매끈하다.\r
\r
     → "같은 출발점, 같은 도착점. 길이 다르다."\r
\r
---\r
\r
## ③ 매니폴드만 바꾸면 — 비디오, 3D, 로보틱스\r
\r
플로우 매칭의 프레임은 "어떤 매니폴드 위에서든"\r
노이즈에서 데이터로의 흐름을 설계할 수 있게 한다.\r
이미지(픽셀 공간의 매니폴드)는 하나의 사례일 뿐이다.\r
\r
### 확장의 풍경\r
\r
| 영역 | 매니폴드 | 교재 내 연결 |\r
|------|---------|-------------|\r
| 비디오 생성 | 시공간 매니폴드 — 프레임의 시퀀스가 사는 공간 | 8장: 매니폴드의 직관 |\r
| 3D 씬 생성 | 3D 좌표 / radiance field의 매니폴드 | 8장: 좌표 패치의 다중성 |\r
| 로봇 동작 | 관절 각도 공간의 매니폴드 | **8장 호기심 상자: 관절 인형** |\r
\r
### 관절 인형의 귀환\r
\r
8장 호기심 상자에서 관절 인형은 비유였다.\r
"관절이 10개면 자유도는 10.\r
모든 가능한 자세는 고차원 공간 속의 10차원 매니폴드."\r
학생은 "매니폴드의 예시"로만 받아들였다.\r
\r
여기서 그 비유가 실제가 된다.\r
로봇 팔의 동작 생성이 정확히 이 문제다.\r
관절 각도 공간이라는 매니폴드 위에서,\r
정지 자세(노이즈)에서 목표 동작(데이터)으로의 플로우를 학습한다.\r
\r
비유였던 것이 실제가 되는 순간.\r
\r
이것은 매니폴드 가설의 서사적 궤적의 두 번째 회수이기도 하다.\r
첫 번째가 드래곤볼(디퓨전에서의 귀환)이었고,\r
두 번째가 관절 인형(로보틱스에서의 실현)이다.\r
`,lm=`# 플로우 매칭 — 길을 통째로 배우기\r
\r
14장에서 디퓨전 모델은 매 지점의 방향(스코어)을 배웠다.\r
참가자는 안개 속에서 레이더를 보고 한 걸음씩 걸었다.\r
안개 수준이 바뀔 때마다 레이더를 재조정해야 했다.\r
\r
그런데 생각해보면 우회하는 느낌이 있다.\r
우리가 진짜 원하는 건 "노이즈에서 데이터로 가는 것"이다.\r
매 순간의 방향을 배우는 대신,\r
출발점에서 도착점까지의 길을 통째로 배우면 안 되나?\r
\r
\r
## 철새의 비행 — 속도장이라는 아이디어\r
\r
### 한 개념\r
\r
플로우 매칭은 매 지점의 방향이 아니라,\r
노이즈에서 데이터로 흘러가는 속도장(velocity field)을 직접 학습한다.\r
\r
### 왜\r
\r
"디퓨전이 매 순간 나침반을 보고 걷는 것이라면,\r
경로 전체를 미리 알 수는 없는가?"\r
\r
### 비유\r
\r
철새의 이주 —\r
\r
가을이 온다.\r
시베리아의 툰드라(노이즈)에 흩어져 있던 수천 마리의 새들이\r
한반도의 습지(데이터)로 날아간다.\r
\r
각 새는 제각각의 출발점에서 출발한다.\r
시베리아 동쪽 끝의 새도 있고 서쪽 끝의 새도 있다.\r
도착지도 제각각이다.\r
천수만으로 가는 새도 있고 순천만으로 가는 새도 있다.\r
그런데 모든 새가 안전하게 도착한다.\r
\r
어떻게?\r
\r
새는 매 순간 나침반을 보지 않는다.\r
유전자에 각인된 비행 프로그램이 있다.\r
"이 위도에서는 이 방향으로, 이 속도로."\r
시간과 위치의 함수로 정해진 속도장.\r
새는 이 속도장을 따라 흐를 뿐이다.\r
\r
### 디퓨전과의 차이\r
\r
14장의 드래곤볼 참가자는 레이더를 매 순간 확인했다.\r
레이더는 "지금 여기서 가장 가파른 방향"만 알려준다.\r
안개 수준이 바뀌면 레이더를 재조정해야 한다.\r
\r
철새는 다르다.\r
비행 프로그램이 경로 전체를 이미 품고 있다.\r
"시간 t에 위치 x에 있다면, 속도는 v(x, t)이다."\r
안개 수준을 신경 쓸 필요 없다 —\r
프로그램이 이미 전부 계획되어 있으니까.\r
\r
### 핵심 아이디어를 정리하면\r
\r
디퓨전: 매 지점의 스코어 ∇log p(x, t)를 배운다.\r
플로우 매칭: 매 지점의 속도 v(x, t)를 배운다.\r
스코어는 "어디로 끌리는가"이고,\r
속도는 "어디로 흘러가는가"이다.\r
미묘하지만 본질적인 차이.\r
\r
### 수확\r
\r
"디퓨전이 매 순간의 나침반이라면,\r
플로우 매칭은 유전자에 각인된 비행 프로그램이다."\r
\r
\r
## 가장 단순한 경로 — 직선 비행\r
\r
### 한 개념\r
\r
conditional flow matching의 가장 기본 형태는\r
노이즈 점 z와 데이터 점 x 사이의 직선 보간이다.\r
\r
### 비유\r
\r
직선 비행 —\r
시베리아에서 한반도까지 가장 단순한 경로는\r
출발점과 도착점을 잇는 직선이다.\r
바람도 무시하고, 지형도 무시하고,\r
일정한 속도로 직진.\r
\r
이것이 conditional flow matching의 직선 보간이다:\r
    x_t = (1 - t) · z + t · x\r
시간 t에서의 위치는\r
출발점 z와 도착점 x의 가중평균이다.\r
t = 0이면 출발점(노이즈), t = 1이면 도착점(데이터).\r
\r
### 4장의 나선형 회수\r
\r
잠깐. 이 수식을 본 적이 있다.\r
4장 "첫 번째 길 — 덧셈으로 걷기"에서\r
(1-t)·p₁ + t·p₂\r
를 배웠다. 두 분포의 가중평균. 덧셈의 길.\r
심플렉스 위의 직선.\r
\r
플로우 매칭의 직선 보간은 이것의 실현이다.\r
학생은 여기서 재발견한다 —\r
"4장에서 본 그 직선이 실제로 쓰이는 거구나."\r
\r
그리고 6장도 돌아온다.\r
(1 - t) · z + t · x 는 볼록 결합이다.\r
두 점을 잇는 선분 위의 점.\r
6장에서 볼록 결합이 "사이"를 정의했듯,\r
여기서도 노이즈와 데이터 "사이"를 정의한다.\r
t가 0에서 1로 가는 것은\r
볼록 결합의 가중치가 이동하는 것이다.\r
\r
### 속도장의 단순함\r
\r
직선 보간에서 속도장은 놀랍도록 단순하다.\r
    v_target = x - z\r
출발점에서 도착점을 향한 상수 벡터.\r
시간에 따라 변하지 않는다!\r
\r
디퓨전의 스코어 타겟은\r
    score_target = -(x_t - x) / σ(t)²\r
시간과 위치에 따라 변한다.\r
플로우 매칭의 타겟은 (x - z)로 일정하다.\r
더 단순하다. 학습이 더 안정적인 이유가 여기 있다.\r
\r
### JSX\r
\r
직선 비행 시각화.\r
\r
[왼쪽] 2D 평면. 출발점들(파란 점, 가우시안 노이즈)과\r
     도착점들(빨간 점, 데이터 클러스터).\r
     각 출발점에서 대응하는 도착점까지 직선이 그려져 있다.\r
     t 슬라이더를 움직이면 모든 점이 직선을 따라 동시에 이동.\r
     t = 0: 파란 구름. t = 1: 빨간 클러스터.\r
\r
[오른쪽] 속도장 시각화.\r
     격자 위의 작은 화살표들.\r
     직선 보간이므로 화살표가 전부 같은 방향(상수).\r
     "단순하다. 놀라울 정도로."\r
\r
→ t를 0에서 1로 천천히 올려보자.\r
  파란 구름이 빨간 클러스터로 변해가는 과정이 보이는가?\r
  이것이 "생성"이다.\r
\r
### 파이썬\r
\r
    # conditional flow matching의 직선 보간\r
    z = np.random.randn(n, 2)           # 노이즈 출발점\r
    x = sample_data(n)                   # 데이터 도착점\r
    t = np.random.uniform(0, 1, (n, 1))  # 랜덤 시간\r
    x_t = (1 - t) * z + t * x            # 시간 t에서의 위치\r
    v_target = x - z                      # 속도장 타겟 (상수!)\r
\r
    # 비교: 디퓨전의 스코어 타겟\r
    # score_target = -(x_t - x) / sigma(t)**2  # 시간과 위치에 의존\r
\r
### 수확\r
\r
"플로우 매칭의 가장 단순한 형태는\r
4장의 '첫 번째 길 — 덧셈으로 걷기'의 실현이다.\r
직선 보간. 속도장은 상수. 놀라울 정도로 단순하다."\r
\r
\r
## 더 좋은 경로 — 최적 수송\r
\r
### 한 개념\r
\r
직선이 최선은 아니다.\r
경로가 꼬이지 않도록, 총 이동 거리가 최소가 되도록\r
출발점과 도착점을 매칭하면 더 효율적이다.\r
\r
### 왜\r
\r
"직선 비행이 항상 최선인가?\r
새들이 서로 부딪히거나 경로가 꼬이면?"\r
\r
### 비유\r
\r
철새의 항로 최적화 —\r
수천 마리의 새가 동시에 출발한다.\r
각자 자기 도착지를 향해 직선으로 날면\r
경로가 꼬인다.\r
시베리아 동쪽의 새가 한반도 서쪽으로,\r
시베리아 서쪽의 새가 한반도 동쪽으로 가면\r
중간에서 경로가 교차한다.\r
부딪히고, 난류가 생기고, 에너지가 낭비된다.\r
\r
자연은 더 영리하다.\r
시베리아 동쪽의 새는 한반도 동쪽으로,\r
시베리아 서쪽의 새는 한반도 서쪽으로.\r
경로가 꼬이지 않는다.\r
총 비행 거리가 최소가 된다.\r
\r
이것이 최적 수송(optimal transport)이다.\r
\r
### 와서스타인 거리와의 연결\r
\r
3장에서 KL 발산은\r
"두 분포가 같은 사건에 얼마나 다른 확률을 매기는가"를 물었다.\r
와서스타인 거리는 전혀 다른 질문을 한다 —\r
"한 분포를 다른 분포로 옮기려면\r
흙을 얼마나 날라야 하는가?"\r
\r
KL은 확률의 비율을 본다. 같은 위치에서의 차이.\r
와서스타인은 확률의 이동을 본다. 한 곳에서 다른 곳으로의 운반.\r
3장에서 본 비대칭 거리와는 또 다른 종류의 거리다.\r
\r
플로우 매칭에서:\r
직선 보간 = 각 새가 독립적으로 직진 (쉽지만 비효율적).\r
OT 경로 = 새들의 출발-도착 매칭을 최적화 (효율적).\r
경로가 꼬이지 않고, 총 이동 거리가 최소.\r
\r
### JSX\r
\r
직선 보간 vs OT 경로 비교.\r
\r
[왼쪽] 랜덤 매칭 + 직선 보간.\r
     출발점과 도착점이 랜덤으로 연결.\r
     경로가 많이 교차한다.\r
     "총 비행 거리" 숫자 표시.\r
\r
[오른쪽] 최적 매칭 + 직선 보간.\r
     출발점과 도착점이 최적으로 매칭.\r
     경로가 거의 교차하지 않는다.\r
     "총 비행 거리" 숫자가 왼쪽보다 작다.\r
\r
→ 두 패널을 나란히 보자.\r
  같은 출발점, 같은 도착점인데\r
  매칭이 다르면 총 거리가 이렇게 다를 수 있는가?\r
\r
### 파이썬\r
\r
    from scipy.optimize import linear_sum_assignment\r
    # 출발점-도착점 사이의 거리 행렬 계산\r
    cost = np.linalg.norm(z[:, None] - x[None, :], axis=2)\r
    # 최적 매칭 (헝가리안 알고리즘)\r
    row_idx, col_idx = linear_sum_assignment(cost)\r
    # OT 매칭 vs 랜덤 매칭의 총 거리 비교\r
\r
### 수확\r
\r
"직선이 최선은 아니다.\r
출발점과 도착점의 매칭을 최적화하면\r
경로가 꼬이지 않고 총 이동 거리가 줄어든다.\r
이것이 최적 수송이다.\r
KL이 '확률의 비율'을 보는 거리라면,\r
와서스타인은 '확률의 이동'을 보는 거리다."\r
\r
\r
## 디퓨전과 플로우 매칭 — 나란히 보기\r
\r
### 한 개념\r
\r
같은 생성 문제를 두 가지 다른 방식으로 푼다.\r
하나는 매 순간의 방향을, 하나는 경로 전체를.\r
\r
### JSX\r
\r
드래곤볼 vs 철새 — 나란히 비교.\r
\r
[왼쪽 패널] 디퓨전 모드\r
     14장의 드래곤볼 시각화 축소판.\r
     2D 평면 위에 데이터 점들(봉우리).\r
     랜덤 출발점에서 ∇log p 화살표를 따라\r
     한 걸음씩 이동. 비틀거림(랑주뱅 노이즈).\r
     안개 슬라이더.\r
\r
[오른쪽 패널] 플로우 매칭 모드\r
     같은 2D 평면. 같은 데이터 점들.\r
     랜덤 출발점에서 도착점까지의\r
     직선 경로(또는 OT 경로)가 미리 그려져 있다.\r
     t 슬라이더를 움직이면 모든 점이\r
     경로를 따라 동시에 이동.\r
\r
[하단] 두 방법의 궤적을 겹쳐 그리기.\r
     디퓨전의 궤적은 비틀거리고(노이즈),\r
     플로우 매칭의 궤적은 매끈하다.\r
\r
→ "같은 출발점, 같은 도착점. 길이 다르다."\r
\r
### 대응표\r
\r
| 드래곤볼 찾기 (디퓨전) | 철새의 이주 (플로우 매칭) |\r
|---|---|\r
| 레이더 (∇log p) | 비행 프로그램 (v(x,t)) |\r
| 매 순간 방향 확인 | 경로가 미리 계획됨 |\r
| 안개 수준에 따라 재조정 | 시간 의존 속도장이 전부 품음 |\r
| 비틀거림 (랑주뱅 노이즈) | 매끈한 궤적 |\r
| 스코어 매칭 (11장 사영) | 속도장 학습 (11장 사영) |\r
| 레이더 제작 = 사영 | 비행 프로그램 학습 = 사영 |\r
\r
### 수확\r
\r
"디퓨전은 매 순간의 나침반,\r
플로우 매칭은 유전자의 비행 프로그램.\r
둘 다 같은 곳에 도착하지만 길이 다르다.\r
4장에서 본 '같은 양 끝점, 다른 경로'의 가장 큰 실현."\r
\r
\r
## 매니폴드만 바꾸면 — 비디오, 3D, 로보틱스\r
\r
플로우 매칭의 프레임은\r
"어떤 매니폴드 위에서든"\r
노이즈에서 데이터로의 흐름을 설계할 수 있게 한다.\r
이미지(픽셀 공간의 매니폴드)는 하나의 사례일 뿐이다.\r
\r
### 철새 비유의 확장\r
\r
이미지 생성 = 2D 하늘을 나는 새.\r
비디오 생성 = 시간 축이 추가된 4D 하늘을 나는 새.\r
3D 생성 = 3D 공간을 나는 새.\r
로봇 동작 = 관절 각도 공간을 나는 새.\r
\r
"하늘의 차원이 달라져도 비행 프로그램의 구조는 같다."\r
\r
### 관절 인형의 귀환\r
\r
8장 호기심 상자에서 관절 인형은 비유였다.\r
"관절이 10개면 자유도는 10.\r
모든 가능한 자세는 고차원 공간 속의 10차원 매니폴드."\r
학생은 "매니폴드의 예시"로만 받아들였다.\r
\r
여기서 그 비유가 실제가 된다.\r
로봇 팔의 동작 생성이 정확히 이 문제다.\r
관절 각도 공간이라는 매니폴드 위에서,\r
정지 자세(노이즈)에서 목표 동작(데이터)으로의 플로우를 학습한다.\r
\r
비유였던 것이 실제가 되는 순간.\r
\r
| 영역 | 매니폴드 | 교재 연결 |\r
|------|---------|------------|\r
| 이미지 | 픽셀 공간의 부분매니폴드 | 8장 매니폴드 가설 |\r
| 비디오 | 시공간 매니폴드 | 8장 좌표 패치 |\r
| 3D | radiance field의 매니폴드 | 8장 좌표 패치 |\r
| 로봇 동작 | 관절 각도 공간 | **8장 호기심 상자: 관절 인형** |\r
\r
### 수확\r
\r
"플로우 매칭의 프레임은 매니폴드에 무관하다.\r
하늘의 차원만 바꾸면 같은 비행 프로그램이 작동한다.\r
8장에서 비유였던 관절 인형이 여기서 실제가 된다."\r
\r
생성의 기하학을 보았다. 노이즈에서 데이터로 가는 길.\r
그런데 생성된 것이 "좋은" 것인지는 누가 판단하는가?\r
플로우 매칭이 학습한 분포는 데이터의 분포다 — 인터넷의 모든 텍스트, 모든 이미지.\r
그 안에는 좋은 것도 있고 나쁜 것도 있다.\r
모델이 "좋은 것만" 만들게 하려면 — 넓게 배운 것을 다시 좁혀야 한다.\r
그 좁힘의 방향이 정확히 10장에서 본 쌍대의 한쪽이다.\r
\r
\r
---\r
\r
<!-- 집필 노트 -->\r
\r
## 집필 노트: 15장의 비유 체계\r
\r
중심 비유: **철새의 이주**.\r
\r
선택 이유:\r
1. 14장 드래곤볼(탐색/수렴)과 감각적으로 구별됨.\r
   드래곤볼은 정적 풍경에서의 하강. 철새는 동적 흐름.\r
2. 속도장의 감각과 자연스럽게 맞음.\r
   바람(벡터장)을 타고 흐르는 새.\r
   "비행 프로그램" = 학습된 속도장.\r
3. OT와의 연결이 자연스러움.\r
   경로가 꼬이지 않는 최적 항로 배정 = 최적 수송.\r
4. 매니폴드 확장이 쉬움.\r
   "하늘의 차원만 바꾸면" = 다른 매니폴드.\r
\r
비유 대응:\r
| 철새의 이주 | 플로우 매칭 | 교재 연결 |\r
|---|---|---|\r
| 시베리아 (여름 서식지) | 노이즈 분포 | — |\r
| 한반도 (겨울 서식지) | 데이터 분포 | 2장 심플렉스의 점 |\r
| 비행 프로그램 | 속도장 v(x, t) | — |\r
| 직선 비행 | 직선 보간 (1-t)z + tx | 4장 덧셈의 길, 6장 볼록 결합 |\r
| 최적 항로 배정 | OT 매칭 | — |\r
| 경로 교차 방지 | 와서스타인 최적화 | 3장 거리 (다른 종류) |\r
| 유전자 각인 | 신경망 학습 | 11장 사영 |\r
| 다른 차원의 하늘 | 다른 매니폴드 | 8장 |`,im=`# 넓히기와 좁히기 — 언어모델이 배우는 두 방향\r
\r
15장의 마지막에서 질문을 남겼다.\r
플로우 매칭이 학습한 분포에는 좋은 것도 나쁜 것도 있다.\r
넓게 배운 것을 다시 좁혀야 한다고.\r
그 좁힘의 방향이 10장에서 본 쌍대의 한쪽이라고.\r
\r
10장에서 우리는 쌍대를 보았다.\r
와일드카드는 가능성을 넓히고, 쉼표는 가능성을 좁힌다.\r
혼합은 무지의 고백이고, 곱셈은 확신의 기록이다.\r
덧셈의 길과 곱셈의 길. m-측지선과 e-측지선.\r
\r
그때는 추상적이었다.\r
여기서 그 쌍대가 실제가 된다.\r
\r
언어모델이 태어나서 쓸모 있는 존재가 되기까지의 여정 —\r
프리트레인, SFT, 강화학습 — 이 여정의 매 단계가\r
OR인가 AND인가의 선택이다.\r
그리고 그 선택이 파라미터 공간에서 어떤 방향으로 걷는 것인지를\r
이 교재의 도구로 읽을 수 있다.\r
\r
\r
## 스펙트럼 — 프리트레인은 OR이다\r
\r
     한 개념: 프리트레인은 가능성을 최대한 넓게 덮는 과정이다.\r
          파라미터 공간에서 이것은 덧셈의 방향 — m-측지선을 따라 걷는 것이다.\r
\r
     왜: "GPT가 셰익스피어처럼 쓸 수도 있고\r
          레딧 댓글처럼 쓸 수도 있고\r
          논문처럼 쓸 수도 있는 이유는 무엇인가?\r
          이 세 능력이 어떻게 한 모델 안에 공존하는가?"\r
\r
     비유: 라디오의 전 대역 스캔 —\r
          라디오를 처음 켜면 아무 방송도 안 잡힌다.\r
          전 대역을 스캔한다.\r
          AM, FM, 단파, 장파 — 모든 주파수를 훑는다.\r
          클래식 방송도 잡히고, 뉴스도 잡히고,\r
          외국어 방송도 잡히고, 잡음도 잡힌다.\r
          스캔이 끝나면 라디오는 "어디에 뭐가 있는지" 안다.\r
          아직 어떤 방송을 들을지 정하지 않았다.\r
          모든 채널이 프리셋에 저장되어 있다.\r
\r
          프리트레인이 이것이다.\r
          인터넷의 모든 텍스트를 본다.\r
          셰익스피어도 보고, 레딧도 보고, 논문도 보고, 레시피도 본다.\r
          각 데이터가 하나의 방송국이다.\r
          모델은 이 모든 방송국의 위치를 파라미터 안에 기록한다.\r
\r
          10장의 언어로:\r
          이것은 와일드카드다.\r
          {셰익스피어 | 레딧 | 논문 | 레시피 | 코드 | 시 | 법률문서 | ...}\r
          가능성을 넓히는 방향. 혼합. OR.\r
\r
     교재 도구와의 연결:\r
          cross-entropy loss를 최소화한다는 것은\r
          모델 q가 데이터 분포 p의 모든 봉우리를 덮도록 하는 것이다.\r
          KL(p‖q)를 줄이는 것.\r
          3장에서 이것은 "현실 p의 눈으로 본 지도 q의 부정확함"이었다.\r
          11장에서 이것은 m-사영이었다 —\r
          현실이 집중된 곳에서 모형이 정확하면 OK.\r
          빠뜨리는 것을 싫어하는 사영.\r
\r
          매니폴드가 팽창하는 방향.\r
          봉우리가 전부 살아 있는 방향.\r
          파라미터 공간에서 η 좌표의 직선 —\r
          덧셈의 길을 걷는 것이다.\r
\r
          2장에서 분포는 심플렉스 위의 점이었다.\r
          프리트레인은 그 점을 심플렉스의 내부 깊숙한 곳 —\r
          가능한 한 많은 꼭짓점에서 멀리 떨어진 곳 — 으로 밀어넣는 것이다.\r
          어느 한 꼭짓점(하나의 확정된 답)에 치우치지 않는 점.\r
\r
     JSX: 심플렉스 위에서 프리트레인의 궤적.\r
\r
          [왼쪽] 심플렉스 위에 여러 "방송국"(데이터 클러스터)을 점으로 표시.\r
               처음에 모델(큰 점)은 심플렉스 중심(균등분포) 근처에서 출발.\r
               프리트레인이 진행되면서 모델의 분포가\r
               모든 데이터 클러스터를 덮는 방향으로 변화.\r
               → 봉우리가 하나씩 살아나는 애니메이션.\r
\r
          [오른쪽] 엔트로피 그래프.\r
               프리트레인 초기: 엔트로피가 높다 (균등에 가까움).\r
               학습이 진행되면서: 엔트로피가 약간 내려가지만\r
               여전히 높은 수준을 유지.\r
               "많이 아는 모델은 여전히 불확실하다 —\r
               어떤 맥락에서 어떤 말을 할지 정해지지 않았으니까."\r
\r
     파이썬:\r
          간단한 혼합 가우시안 데이터에서\r
          모델을 학습시키면서 각 스텝의 로그우도와 엔트로피를 추적.\r
          학습이 진행되면서 모델이 모든 모드를 덮어가는 과정을 시각화.\r
\r
     수확: "프리트레인은 OR이다.\r
          가능성을 넓히는 방향. 혼합의 길. m-측지선.\r
          모든 봉우리를 살려두는 사영."\r
\r
\r
## 호기심 상자: 에피플렉시티 — 모든 방송이 같은 가치는 아니다\r
\r
     프리트레인이 OR이라면, 무엇을 OR할 것인가?\r
\r
     5장에서 우리는 "놀라움 = -log(확률)"을 배웠다.\r
     엔트로피는 "평균 놀라움"이었다.\r
     그런데 질문이 하나 있다.\r
     누구의 놀라움인가?\r
\r
     섀넌의 정보이론은 무한한 계산 능력을 가진 관찰자를 가정한다.\r
     그런 관찰자에게 의사난수 생성기의 출력은 정보량이 0이다 —\r
     짧은 시드에서 결정론적으로 나오니까.\r
     그런데 신경망에게는? 완벽한 노이즈로 보인다.\r
     아무리 학습해도 패턴을 찾을 수 없다.\r
\r
     반대의 사례도 있다.\r
     체스 엔진이 만들어내는 기보는 결정론적이지만,\r
     신경망에게는 엄청난 학습 가능한 구조를 담고 있다.\r
     수를 하나하나 예측하려면 깊은 전략적 이해가 필요하다.\r
\r
     에피플렉시티(epistemic complexity)는\r
     정보를 두 성분으로 분해한다:\r
          ① time-bounded entropy — 유한한 관찰자에게 노이즈처럼 보이는 부분.\r
               의사난수열, 해시값, 암호화된 데이터.\r
               패턴이 있지만 관찰자의 계산 능력으로는 보이지 않는다.\r
          ② epiplexity — 관찰자가 실제로 학습할 수 있는 구조적 정보.\r
               알고리즘의 논리, 언어의 문법, 물리 법칙의 규칙성.\r
               학습 곡선이 빠르게 떨어지면 에피플렉시티가 높은 것.\r
\r
     실용적 측정: 학습 곡선 아래 면적.\r
          손실이 빠르게 떨어지면 → 구조가 많다 → 에피플렉시티 높음.\r
          손실이 안 떨어지면 → 구조가 없다 → 에피플렉시티 0.\r
\r
     프리트레인 데이터 선택에 대한 함의:\r
          좋은 프리트레인 데이터는\r
          퍼플렉시티(엔트로피)를 최소화하는 데이터가 아니라,\r
          에피플렉시티(학습 가능한 구조)를 최대화하는 데이터.\r
\r
          랜덤 API 키와 설정 파일로 가득한 코드 →\r
               엔트로피는 높지만 에피플렉시티는 낮다.\r
          알고리즘의 내부 작동을 보여주는 잘 짜인 코드 →\r
               엔트로피는 적당하지만 에피플렉시티는 높다.\r
\r
          5장의 언어로: -log가 재는 놀라움에는 두 종류가 있었다.\r
          배울 수 있는 놀라움과 배울 수 없는 놀라움.\r
          프리트레인이 OR을 할 때, 배울 수 있는 놀라움을 많이 품은\r
          데이터를 선택하는 것이 현명하다.\r
\r
     수확: "같은 엔트로피라도 모든 정보가 같은 가치는 아니다.\r
          유한한 관찰자에게는\r
          학습 가능한 구조(에피플렉시티)와\r
          학습 불가능한 잡음(time-bounded entropy)이 구분된다.\r
          프리트레인의 OR은 에피플렉시티가 높은 것을 OR해야 한다."\r
\r
\r
## 시그널 — 좁히기는 AND이다\r
\r
     한 개념: SFT와 RLVR은 가능성을 좁히는 과정이다.\r
          파라미터 공간에서 이것은 곱셈의 방향 — e-측지선을 따라 걷는 것이다.\r
\r
     왜: "프리트레인된 모델은 뭐든 할 수 있지만\r
          뭘 해야 할지 모른다.\r
          질문에 답하는 대신 질문을 이어 붙이기도 한다.\r
          '정확하고 도움이 되는 답변'으로 좁히는 과정은\r
          파라미터 공간에서 무슨 일인가?"\r
\r
     비유: 라디오의 튜닝 —\r
          전 대역 스캔이 끝났다.\r
          이제 듣고 싶은 방송을 고른다.\r
\r
          SFT = 대역 필터.\r
               "뉴스 채널 근처로 좁혀라."\r
               AM 대역의 뉴스 주파수 근처로 범위를 줄인다.\r
               아직 정확한 주파수는 아니다.\r
               근처의 몇 개 채널이 겹쳐 들린다.\r
\r
               10장의 언어: 쉼표를 추가하기 시작.\r
               {도움이 되는 답변}, {정중한 톤}.\r
               OR에서 AND로 기울기 시작하는 전환점.\r
\r
          RLVR = 미세 튜닝 다이얼.\r
               정확히 하나의 주파수에 맞춘다.\r
               잡음이 사라지고 선명한 시그널이 나온다.\r
               "주어진 수학 문제에 대해,\r
               단계별로 추론하여,\r
               검증 가능한 정답에 도달하라."\r
\r
               매 조건이 필터로 곱해진다:\r
               수학 문제 × 단계별 추론 × 정확한 답 × 검증 가능\r
               10장의 프롬프트 확장:\r
               쉼표가 추가될 때마다 매니폴드가 수축.\r
               겹치는 영역만 살아남는다.\r
               곱셈의 길. e-측지선. θ 좌표에서 직선.\r
\r
     파라미터 공간에서 일어나는 일:\r
\r
          프리트레인 → SFT → RLVR의 궤적을\r
          파라미터 공간 위에 그려보자.\r
\r
          프리트레인: 넓은 영역을 탐색.\r
               파라미터가 크게 움직인다.\r
               많은 방향으로 동시에 변한다.\r
               η 좌표에서 봤을 때 — 기대값이 데이터의 통계량을 따라간다.\r
\r
          SFT: 프리트레인 끝점 근처에서 작은 조정.\r
               파라미터의 변화 방향이 좁아진다.\r
               "지시를 따르는" 부분공간 안에서만 움직인다.\r
\r
          RLVR: 더 작은 조정이지만 방향이 날카롭다.\r
               보상이 높은 경로로 수렴.\r
               θ 좌표에서 봤을 때 — 자연모수가 특정 방향으로 쏠린다.\r
\r
     JSX: 프리트레인 → SFT → RLVR 궤적 시각화.\r
\r
          [메인 패널] 2D 파라미터 공간 위에 세 단계의 궤적.\r
               프리트레인: 넓은 곡선 (탐색).\r
               SFT: 짧은 화살표 (방향 전환).\r
               RLVR: 더 짧지만 날카로운 화살표 (수렴).\r
\r
          [오른쪽] 대응하는 분포의 변화.\r
               프리트레인 끝: 다봉분포 (여러 능력이 공존).\r
               SFT 끝: 봉우리 일부가 강조됨.\r
               RLVR 끝: 하나의 봉우리가 지배적.\r
\r
          → SFT와 RLVR 사이에서 분포의 봉우리가\r
            줄어드는 것을 관찰하자.\r
            이것이 "좁히기"의 시각적 의미다.\r
\r
     파이썬:\r
          간단한 다봉 분포에서 출발하여\r
          (1) 모드 커버링 (forward KL 최소화) → 모든 봉우리 유지\r
          (2) 모드 시킹 (reverse KL 최소화) → 하나의 봉우리에 수렴\r
          두 과정을 나란히 시각화.\r
\r
     수확: "프리트레인은 스펙트럼 전체를 듣는 것이고,\r
          RLVR은 하나의 시그널에 맞추는 것이다.\r
          OR에서 AND로. 혼합에서 곱셈으로.\r
          매니폴드의 팽창에서 수축으로.\r
          이것이 언어모델 훈련의 기하학적 구조다."\r
\r
\r
## 다이얼의 방향 — 어떤 KL을 쓸 것인가\r
\r
     한 개념: KL 발산의 방향 선택이\r
          "어떤 종류의 좁히기를 할 것인가"를 결정한다.\r
          이것은 11장의 e-사영과 m-사영의 실전이다.\r
\r
     왜: "같은 '좁히기'인데 결과가 다르다면,\r
          그 차이는 어디에서 오는가?"\r
\r
     비유: 라디오 다이얼의 두 가지 방식 —\r
\r
          방식 1 — 시그널 중심 튜닝 (reverse KL):\r
               "내가 맞추려는 주파수에서 잡음이 0이 되도록."\r
               정확한 주파수에 완벽하게 맞추지만,\r
               바로 옆 주파수의 방송은 완전히 놓친다.\r
               하나의 채널에 대해서는 최고의 수신 품질.\r
               그러나 채널을 바꾸면 처음부터 다시 튜닝해야 한다.\r
\r
               11장: e-사영.\r
               KL(π‖π_ref) 최소화.\r
               모형 π가 0인 곳에서 현실 π_ref가 0이 아니면 큰 벌칙.\r
               → 모형이 자신의 확률을 집중시킨다.\r
               → mode-seeking. 하나의 봉우리에 수렴.\r
\r
          방식 2 — 대역 커버 튜닝 (forward KL):\r
               "참조 모델이 확률을 주는 모든 곳을 놓치지 않도록."\r
               여러 채널을 동시에 약하게 수신.\r
               어떤 채널도 완전히 놓치지 않지만,\r
               어떤 채널도 완벽하게 선명하지 않다.\r
\r
               11장: m-사영.\r
               KL(π_ref‖π) 최소화.\r
               현실 π_ref가 집중된 곳에서 모형이 정확하면 OK.\r
               → 모형이 모든 모드를 덮는다.\r
               → mode-covering. 다양성 유지.\r
\r
     GRPO에서의 실현:\r
          GRPO는 참조 정책과의 KL 발산을 페널티로 사용한다.\r
          원래 의도는 reverse KL이었다.\r
          그러나 최근 분석에서,\r
          실제 구현이 forward KL을 추정하고 있었을 수 있다는 지적이 있다.\r
          이 차이가 작아 보이지만,\r
          우리 교재의 언어로는 e-사영과 m-사영의 차이다 —\r
          어떤 봉우리를 살리고 어떤 봉우리를 죽이느냐가 달라진다.\r
\r
          12장에서 EM은 e-사영과 m-사영을 번갈아 썼다.\r
          넓히고 좁히고, 넓히고 좁히고 — 그 교대가 수렴했다.\r
          RLHF의 파이프라인도 같은 구조다:\r
          프리트레인(넓히기) → SFT(좁히기) → RLVR(더 좁히기).\r
          한 번의 사영이 아니라 교대의 반복.\r
\r
     JSX: e-사영 vs m-사영의 LLM 버전.\r
\r
          [왼쪽] 다봉 분포(프리트레인 모델의 출력 분포).\r
               봉우리 세 개: "정확한 풀이", "우회적 풀이", "틀린 풀이".\r
\r
          [오른쪽 위] reverse KL 최적화 결과.\r
               하나의 봉우리("정확한 풀이")에 수렴.\r
               다른 봉우리들은 사라짐.\r
               Pass@1 높음. Pass@k 낮음.\r
\r
          [오른쪽 아래] forward KL 최적화 결과.\r
               세 봉우리가 모두 살아 있되 낮아짐.\r
               "정확한 풀이"와 "우회적 풀이"가 공존.\r
               Pass@1 보통. Pass@k 높음.\r
\r
          → 두 결과의 엔트로피를 비교하자.\r
            어느 쪽이 높은가?\r
            10장에서 "혼합하면 엔트로피가 커진다"고 했다.\r
            여기서 그것이 역으로 작동한다 —\r
            "좁히면 엔트로피가 줄어든다.\r
            어떻게 좁히느냐에 따라 줄어드는 양이 다르다."\r
\r
     파이썬:\r
          3면 주사위(심플렉스) 위에서\r
          목표 분포 p = [0.6, 0.3, 0.1] (다봉)에 대해\r
          단봉 가우시안 q를 피팅할 때\r
          reverse KL과 forward KL의 결과를 비교.\r
          11장의 미니 예제를 LLM 맥락으로 재해석.\r
\r
     수확: "KL의 방향 = 사영의 방향 = 어떤 봉우리를 살릴 것인가.\r
          reverse KL은 날카롭지만 다양성을 잃고,\r
          forward KL은 넓지만 날카로움을 잃는다.\r
          11장에서 배운 e-사영과 m-사영이\r
          언어모델 정렬의 핵심 설계 결정이었다."\r
\r
\r
## 너무 좁히면 — entropy collapse\r
\r
     한 개념: reverse KL로 좁히면 프리트레인이 심어놓은\r
          봉우리들이 무너진다. 이것이 entropy collapse다.\r
\r
     왜: "Pass@1은 올라가는데 Pass@k가 추락한다.\r
          하나의 답을 잘 내는 모델이\r
          왜 여러 번 시도하면 오히려 못하게 되는가?"\r
\r
     비유: 라디오 다이얼을 너무 좁히면 —\r
          하나의 주파수에 완벽하게 맞췄다.\r
          수신 품질은 최고다.\r
          그런데 다이얼이 굳어버렸다.\r
          다른 채널로 돌리려 하면 움직이지 않는다.\r
          프리트레인 때 기록해둔 프리셋이 전부 지워진 것이다.\r
\r
          RLVR에서 이것이 일어난다.\r
          reverse KL이 곱셈의 길로 좁히면서\r
          "정확한 풀이" 봉우리 하나만 남기고\r
          "우회적 풀이", "창의적 풀이" 봉우리를 눌러버린다.\r
\r
          Pass@1 = 한 번 튜닝해서 잡히는 방송의 품질. 올라간다.\r
          Pass@k = k번 튜닝해서 잡히는 방송의 다양성. 추락한다.\r
          catastrophic forgetting = 프리셋이 지워진 것.\r
\r
     Best-of-N과의 연결:\r
          Best-of-N 샘플링은\r
          "N번 생성해서 가장 좋은 것을 고른다."\r
          이것은 OR과 AND의 결합이다:\r
          N번 생성 = OR (다양한 가능성을 열어둠).\r
          가장 좋은 것을 선택 = AND (조건을 충족하는 것만).\r
\r
          max@k 메트릭은 k개의 생성 중 최고 보상의 기대값이다.\r
          k = 1이면 Pass@1 — 순수한 AND.\r
          k → ∞이면 — OR의 극단. 충분히 시도하면 하나는 맞는다.\r
          k는 OR과 AND 사이를 보간하는 연속 파라미터다.\r
\r
          교재의 언어: α-발산에서 α가 하는 것과 같다.\r
          k가 α의 실전 버전이다.\r
\r
     JSX:\r
          [왼쪽] Pass@1과 Pass@k의 학습 곡선.\r
               x축: RLVR 훈련 스텝.\r
               Pass@1: 단조증가.\r
               Pass@k (k=64): 처음 올라가다가 어느 순간 추락.\r
               두 곡선이 교차하는 지점 = entropy collapse가 시작되는 곳.\r
\r
          [오른쪽] 같은 스텝에서의 출력 분포.\r
               초기: 여러 풀이 스타일이 공존 (다봉).\r
               중기: 좋은 풀이가 강화됨 (주요 봉우리 성장).\r
               후기: 하나의 풀이만 남음 (단봉).\r
               "봉우리가 사라지는 순간"을 관찰.\r
\r
     수확: "reverse KL은 날카로운 시그널을 만들지만\r
          스펙트럼을 파괴한다.\r
          프리트레인이 깔아놓은 OR 풍경이\r
          RLVR의 AND에 의해 무너지는 것.\r
          너무 좁히면 잃는다."\r
\r
\r
## OR의 질이 AND의 가능성을 결정한다\r
\r
     한 개념: 프리트레인이 어떤 영역을 잘 학습했느냐가\r
          이후 파인튜닝과 모델 병합의 성패를 결정한다.\r
\r
     왜: "왜 어떤 파인튜닝은 병합이 잘 되고\r
          어떤 파인튜닝은 병합이 안 되는가?\r
          1장에서 던졌던 그 질문에\r
          이제 정직한 답을 할 수 있는가?"\r
\r
     1장의 회수:\r
          1장에서 우리는 모델 병합의 마법을 보았다.\r
          두 LoRA의 "중간"을 취하면 두 능력이 합쳐지는 경우.\r
          갑자기 무너지는 경우.\r
          "잘 되는 병합"과 "안 되는 병합"의 차이는 어디에 있는가?\r
\r
          이제 답을 줄 수 있다.\r
\r
     핵심 발견:\r
          베이스 모델이 이미 잘 아는 태스크로 파인튜닝한 모델은\r
          병합이 잘 된다.\r
          베이스 모델이 모르는 태스크로 파인튜닝한 모델은\r
          병합이 안 된다.\r
          병합 가능성(mergeability)은 파인튜닝 벡터 자체의 내재적 성질이다.\r
\r
     교재의 도구로 읽기:\r
\r
          프리트레인(OR)이 해당 영역의 봉우리를 이미 품고 있으면,\r
          파인튜닝(AND)은 그 봉우리 근처에서 좁히는 것이다.\r
          파라미터 변화가 작다.\r
          9장의 Fisher 계량으로 재면 "가까운" 거리.\r
\r
          두 파인튜닝 벡터를 더하는 것은\r
          파라미터 공간의 직선 보간이다 — 4장의 "첫 번째 길".\r
          Fisher 거리가 작은 두 벡터를 더하면\r
          분포 공간에서도 크게 벗어나지 않는다.\r
          "산술평균이 기하평균과 비슷한 영역" — 4장에서 본 것.\r
\r
          반대의 경우:\r
          베이스 모델이 모르는 태스크는\r
          파라미터를 멀리 끌고 가야 한다.\r
          Fisher 거리가 크다.\r
          두 벡터를 더하면 분포 공간에서 엉뚱한 곳에 착지한다.\r
          "산술평균과 기하평균이 크게 다른 영역" — 곡률이 큰 곳.\r
\r
          8장에서 "좌표의 한 칸이 어디서나 같은 거리가 아니다"를 배웠다.\r
          여기서 그것이 모델 병합의 성패를 가른다.\r
\r
     수확: "프리트레인의 OR이 깔아놓은 풍경의 질이\r
          이후 모든 AND의 가능성을 결정한다.\r
          좋은 OR은 좋은 AND를 가능하게 한다.\r
          1장에서 시작한 질문에 대한 정직한 답:\r
          '잘 되는 병합'은 베이스 모델이 이미 아는 곳에서 일어나고,\r
          '안 되는 병합'은 베이스 모델이 모르는 곳에서 일어난다.\r
          차이를 만드는 것은 파라미터 공간의 곡률 — Fisher 계량이다."\r
\r
\r
## α-발산 — OR과 AND 사이를 연속적으로 걷기\r
\r
     한 개념: forward KL과 reverse KL은 스펙트럼의 양 끝이며,\r
          α-발산으로 그 사이를 연속적으로 보간할 수 있다.\r
          이것은 에필로그에서 예고한 α-접속의 실전이다.\r
\r
     왜: "reverse KL은 너무 좁히고\r
          forward KL은 너무 넓히면,\r
          그 사이를 걸을 수 없는가?"\r
\r
     비유: 라디오의 대역폭 조절 다이얼 —\r
          지금까지 라디오에는 두 모드만 있었다:\r
          전 대역 수신(넓음)과 단일 주파수 수신(좁음).\r
          그런데 대역폭 다이얼이 하나 더 있다면?\r
          다이얼을 돌려서 수신 대역의 폭을 연속적으로 조절.\r
          넓으면 여러 채널이 겹쳐 들리고(mode-covering),\r
          좁으면 하나만 선명하게 들린다(mode-seeking).\r
          이 다이얼이 α다.\r
\r
     α의 의미:\r
          α ≈ 1: forward KL에 가까움. SFT처럼 안정적. 넓은 탐색.\r
          α ≈ 0: reverse KL에 가까움. PPO/GRPO처럼 공격적. 좁은 집중.\r
          α를 훈련 중에 스케줄링할 수 있다:\r
               초기에는 α를 크게 → 다양성 유지, 탐색.\r
               후기에는 α를 작게 → 정답 경로에 집중.\r
               "처음에는 넓게 듣다가, 점점 좁혀간다."\r
\r
     에필로그와의 연결:\r
          에필로그에서 α-접속의 일반론을 예고했다.\r
          이 교재에서는 α = ±1만 보았다고.\r
          여기서 α가 ±1 사이를 연속적으로 걷는 것의\r
          실전적 의미를 미리 맛본다.\r
          α = 0이면 레비-치비타 접속 — 리만 기하학의 표준.\r
          RLHF에서 α를 조정하는 것은\r
          이 접속 사이를 걷는 것의 실전 버전이다.\r
\r
     JSX:\r
          α 슬라이더 (0 ~ 1)를 움직이면\r
          심플렉스 위에서 사영점이 변하는 시각화.\r
          α = 0: e-사영점 (하나의 봉우리).\r
          α = 1: m-사영점 (모든 봉우리를 덮음).\r
          중간: 두 극단 사이의 연속적 변화.\r
          11장의 α-슬라이더 시각화를 LLM 맥락에서 재해석.\r
\r
     수확: "OR과 AND는 양 끝이 아니라 스펙트럼이다.\r
          α는 그 스펙트럼 위를 걷는 다이얼이다.\r
          프리트레인에서 RLVR까지의 여정은\r
          이 다이얼을 넓음에서 좁음으로 돌리는 과정이었다.\r
          돌리는 속도와 최종 위치가\r
          모델의 성격 — 다양성과 정확성의 균형 — 을 결정한다."\r
\r
     α 다이얼을 돌려서 OR과 AND의 비율을 조절할 수 있게 되었다.\r
     그런데 다이얼을 돌리는 손의 크기는?\r
     학습률 0.01이 좁은 모델에서는 적당한 걸음인데\r
     넓은 모델에서는 발산하는 도약이 된다면,\r
     다이얼의 눈금 자체가 모델 크기에 따라 달라져야 하지 않은가?\r
     그 눈금을 공정하게 만드는 것 — 9장의 자(ruler)가 여기서 다시 필요해진다.\r
\r
\r
---\r
\r
<!-- 집필 노트 -->\r
\r
## 집필 노트: 16장의 위치와 서사적 역할\r
\r
이 장은 교재의 도구가 가장 큰 무대에서 작동하는 것을 보여주는 장이다.\r
12장 EM에서 "하나의 알고리즘 안에 모든 도구"를 보여줬다면,\r
16장은 "하나의 훈련 파이프라인 안에 모든 도구"를 보여준다.\r
\r
10장의 무지(OR)와 확신(AND)의 쌍대가 여기서 최종 회수된다.\r
11장의 e-사영과 m-사영이 여기서 현실의 설계 결정이 된다.\r
1장의 모델 병합 질문이 여기서 정직한 답을 얻는다.\r
5장의 엔트로피가 여기서 에피플렉시티로 확장된다.\r
\r
이 장이 없으면 4막은 "재미있는 사례 모음집"이다.\r
이 장이 있으면 4막은 "교재 전체가 도달해야 할 지점"이다.\r
\r
회수 대응표:\r
| 이 장의 절 | 회수되는 장 |\r
|---|---|\r
| 스펙트럼 (프리트레인은 OR) | 4장 혼합, 10장 무지, 11장 m-사영 |\r
| 에피플렉시티 | 5장 엔트로피, 5장 간주곡 |\r
| 시그널 (RLVR은 AND) | 4장 곱셈, 10장 확신, 11장 e-사영 |\r
| 다이얼의 방향 | 3장 KL 비대칭, 11장 두 가지 사영 |\r
| entropy collapse | 10장 쌍대의 긴장 |\r
| OR의 질 → AND의 가능성 | 1장 모델 병합, 8장 매니폴드, 9장 Fisher 계량 |\r
| α-발산 | 에필로그 α-접속 예고 |\r
`,om=`# 스케일링 — 폭이 달라져도 한 걸음이 같으려면\r
\r
16장의 마지막에서 물음을 남겼다.\r
α 다이얼을 돌리는 손의 크기가\r
모델의 폭에 따라 달라져야 하지 않느냐고.\r
학습률 0.01이 좁은 모델에서는 적당한 걸음인데\r
넓은 모델에서는 발산하는 도약이 된다면 —\r
눈금 자체를 다시 그려야 한다.\r
\r
그 눈금이 무엇인지를 묻는 것이 이 장이다.\r
\r
## 같은 레시피, 다른 결과\r
\r
### 한 개념\r
\r
신경망의 너비(width)가 달라지면\r
같은 학습률이 다른 의미를 갖는다.\r
좁은 네트워크에서 잘 되던 하이퍼파라미터가\r
넓은 네트워크에서 발산하는 현상.\r
\r
### 왜\r
\r
"왜 작은 모델에서 찾은 학습률이\r
큰 모델에서는 안 되는가?\r
매번 다시 찾아야 하는가?"\r
\r
### 비유\r
\r
레시피와 냄비 크기 —\r
4인분 레시피의 소금 1큰술.\r
40인분으로 늘리면 소금 10큰술?\r
비례하지 않는다.\r
냄비가 커지면 증발량, 열전도, 대류가 달라진다.\r
같은 "간"을 내려면 단순 비례가 아니라\r
냄비의 물리학을 이해해야 한다.\r
\r
신경망도 마찬가지다.\r
너비가 10배 커지면, 같은 학습률 0.01이\r
파라미터 공간에서 전혀 다른 크기의 걸음이 된다.\r
\r
## 좌표의 한 칸이 같은 거리가 아니다\r
\r
### 사용하는 도구\r
\r
Fisher 계량 (9장)\r
\r
8장에서 우리는 "좌표의 한 칸이 어디서나 같은 거리가 아니다"를 보았다.\r
9장에서 Fisher 정보 행렬이 그 불균등함을 재는 자임을 배웠다.\r
\r
### 신경망의 너비가 바뀌면 일어나는 일\r
\r
파라미터 공간의 Fisher 계량이 너비에 따라 스케일된다.\r
유클리드 거리로 같은 한 걸음이,\r
Fisher 거리로는 전혀 다른 크기다.\r
\r
좁은 네트워크: Fisher 행렬의 고유값이 작다.\r
     유클리드 0.01 ≈ Fisher 0.01.\r
     학습률 0.01이 "적당한 걸음".\r
\r
넓은 네트워크: Fisher 행렬의 고유값이 커진다.\r
     유클리드 0.01이 Fisher 거리로는 거대한 걸음.\r
     학습률 0.01이 "발산하는 도약".\r
\r
"같은 숫자의 학습률이, 다른 크기의 분포 변화를 만든다."\r
\r
## 자연 기울기 — Fisher 계량을 따라 걷기\r
\r
보통의 경사하강법은 파라미터 공간의 유클리드 거리를 쓴다.\r
그러나 9장에서 보았듯이, 파라미터 공간의 한 걸음은\r
어디서나 같은 크기가 아니다.\r
\r
자연 기울기(natural gradient)는 Fisher 행렬의 역행렬을 곱해서\r
"분포 공간에서 같은 크기의 한 걸음"을 만든다.\r
\r
     θ_new = θ_old - ε · I(θ)⁻¹ · ∇L(θ)\r
\r
평평한 바닥에서의 한 걸음과 가파른 비탈에서의 한 걸음을\r
같은 크기로 만드는 장치 — 그것이 자연 기울기다.\r
9장에서 ∇log p가 확률의 경사를 재는 올바른 도구임을 보았고,\r
Fisher 정보 행렬이 파라미터 공간의 "유일한 자연스러운 자"임을 보았다.\r
자연 기울기는 이 둘의 결합이다.\r
\r
그런데 Fisher 정보 행렬은 아름답지만 거대하다.\r
파라미터가 수억 개인 모델에서는 행렬 자체를 저장할 수 없다.\r
KFAC는 이 행렬을 층별로 쪼개어 근사하는 실용적 방법이다 —\r
9장에서 본 Fisher 행렬의 구조와\r
7장에서 본 지수족의 블록 구조가 그 근사를 가능하게 한다.\r
\r
자연 기울기의 감각을 기억하고 다음으로 넘어가자.\r
μP는 이 감각을 더 실용적으로 실현하는 방법이다.\r
\r
## μP — Fisher 거리를 일정하게 만드는 처방\r
\r
### 한 개념\r
\r
μP(maximal update parameterization)는\r
너비가 바뀌어도 Fisher 거리에서의 한 걸음이\r
일정하도록 학습률과 초기화를 조정하는 기법.\r
\r
### 왜\r
\r
"너비에 무관하게 '같은 크기의 걸음'을 보장할 수 있는가?"\r
\r
### 핵심 아이디어\r
\r
9장에서 "왜 자가 필요한가"를 배운 학생에게\r
이것은 자연스러운 귀결이다.\r
파라미터 공간에서 공정한 한 걸음을 걸으려면\r
Fisher 계량을 따라야 한다 (자연 기울기의 감각).\r
μP는 이것을 층별로, 너비별로 실현하는 구체적 처방이다.\r
\r
학습률 ∝ 1/width (입력층)\r
학습률 ∝ 1/width (은닉층)\r
초기화 ∝ 1/√width\r
이 스케일링 규칙 하나하나가\r
"Fisher 거리에서의 한 걸음을 일정하게"라는\r
기하학적 요구에서 나온다.\r
\r
### 톤\r
\r
조망. μP의 수학적 유도를 하지 않는다.\r
"왜 이 문제에 Fisher 계량이 등장하는가"만 연결.\r
\r
### 수확\r
\r
"너비가 바뀌면 파라미터 공간의 계량이 바뀐다.\r
유클리드 거리로 같은 한 걸음이\r
Fisher 거리로는 전혀 다른 크기다.\r
μP는 Fisher 거리를 일정하게 만드는 처방이다."\r
\r
## Muon — 기울기를 직교화하여 공정한 한 걸음\r
\r
### 한 개념\r
\r
Muon은 기울기 행렬을 직교화하여\r
모든 방향에서 동일한 크기의 업데이트를 만든다.\r
μP가 "너비에 따라 학습률을 조정"했다면,\r
Muon은 "기울기 자체를 정규화"한다.\r
같은 기하학적 요구의 다른 실현.\r
\r
### 왜\r
\r
"μP는 학습률과 초기화를 조정해서\r
Fisher 거리를 일정하게 만들었다.\r
그런데 기울기 자체가 방향마다 크기가 다르다면?\r
어떤 방향은 기울기가 거대하고 어떤 방향은 미미하다면,\r
학습률을 아무리 조정해도 불균형이 남지 않나?"\r
\r
### 비유\r
\r
등산과 등고선 —\r
μP는 "지도의 축척을 보정하는 것"이었다.\r
지도 위 1cm가 어디서나 같은 실제 거리가 되도록.\r
Muon은 다른 접근이다.\r
"한 걸음의 방향을 모든 등고선에 대해 균등하게 만드는 것."\r
\r
산을 오르는데 동쪽은 절벽이고 서쪽은 완만하다.\r
보통의 경사하강법은 절벽(기울기가 큰 방향)으로 확 쏠린다.\r
Adam은 각 좌표별로 기울기를 정규화해서\r
쏠림을 줄이지만, 방향 간의 상관을 무시한다.\r
\r
Muon은 기울기 행렬의 특이값 분해(SVD)를 해서\r
특이값을 전부 1로 만든다.\r
기울기의 "방향 정보"만 남기고 "크기 정보"를 제거.\r
모든 특이 방향에서 동일한 크기로 업데이트.\r
절벽이든 완만한 길이든 같은 한 걸음.\r
\r
### 수학적 핵심\r
\r
기울기 G의 SVD: G = UΣVᵀ\r
Muon의 업데이트: ΔW ∝ UVᵀ\r
특이값 Σ를 전부 1로 바꾼 것.\r
\r
이것은 스펙트럼 노름 아래의 최급강하법이다:\r
"기울기 방향으로 가되,\r
가장 큰 출력 변화(스펙트럼 노름)를\r
일정하게 제한한다."\r
\r
### μP와의 관계\r
\r
같은 동전의 양면:\r
6장에서 볼록함수와 그 쌍대가 동전의 양면이었듯,\r
μP와 Muon도 같은 질문의 두 면이다.\r
\r
μP: 너비에 따라 학습률과 초기화를 스케일링.\r
     "Fisher 거리에서의 한 걸음을 일정하게."\r
     처방적(prescriptive) — 규칙을 미리 정한다.\r
\r
Muon: 기울기를 직교화하여 모든 방향에서 균등한 업데이트.\r
     "스펙트럼 노름에서의 한 걸음을 일정하게."\r
     적응적(adaptive) — 매 스텝의 기울기에 반응한다.\r
\r
Jeremy Bernstein의 통찰:\r
"μP의 학습률 스케일링은\r
기울기를 올바른 노름으로 쌍대화(dualize)하면\r
자동으로 얻어진다.\r
μP와 Muon은 같은 동전의 양면이다."\r
\r
9장에서 "왜 자가 필요한가"를 배운 학생에게\r
μP와 Muon은 같은 질문의 두 가지 답이다:\r
"파라미터 공간에서 공정한 한 걸음이란 무엇인가?"\r
\r
### 더 나아간 시도\r
\r
Fisher 구조의 결합:\r
Muon은 모든 특이값을 1로 만든다 — 등방적(isotropic).\r
그런데 파라미터 공간의 곡률은 등방적이지 않다.\r
9장에서 Fisher 행렬의 고유값이 방향마다 다르다고 했다.\r
"뾰족한 분포는 민감하고 넓은 분포는 둔감하다."\r
\r
FISMO는 Muon의 직교화에 Fisher 정보 행렬의\r
Kronecker 근사를 결합한다.\r
등방적 업데이트 대신 곡률에 맞춘 비등방적 업데이트.\r
"9장의 Fisher 계량 + Muon의 직교화"의 결합.\r
\r
이 방향은 아직 활발히 연구 중이다.\r
우리가 배운 도구 — Fisher 계량, 스펙트럼 구조, 자연 기울기 —\r
가 최신 옵티마이저 연구의 뼈대에 깔려 있다는 것이\r
이 장의 메시지다.\r
\r
### JSX\r
\r
세 옵티마이저 비교.\r
\r
[메인 패널] 2D 손실 함수의 등고선.\r
     세 궤적:\r
     ① Adam (파란선) — 좌표별 적응. 지그재그.\r
     ② Muon (초록선) — 직교화. 매끈하지만 등방적.\r
     ③ 자연 기울기 (빨간선) — Fisher 반영. 곡률에 맞춤.\r
\r
     등고선이 찌그러진 영역(큰 곡률)과\r
     둥근 영역(작은 곡률)에서\r
     세 궤적의 차이가 두드러진다.\r
\r
→ 찌그러진 영역에서\r
  Adam은 진동하고, Muon은 직진하고,\r
  자연 기울기는 등고선을 따라 부드럽게 돈다.\r
  "방향마다 다른 곡률"을 누가 가장 잘 다루는가?\r
\r
### 파이썬\r
\r
로젠브록 함수(찌그러진 등고선)에서\r
Adam, Muon(직교화된 기울기), 자연 기울기의 궤적을 비교.\r
각 옵티마이저의 수렴 속도와 궤적 시각화.\r
\r
### 수확\r
\r
"μP는 스케일링 규칙으로, Muon은 직교화로,\r
같은 질문에 답한다:\r
'파라미터 공간에서 공정한 한 걸음이란 무엇인가?'\r
9장에서 배운 Fisher 계량이\r
이 질문의 뿌리에 있다.\r
최신 옵티마이저 연구의 밑바닥에\r
이 교재의 도구가 깔려 있다."\r
\r
너비가 바뀌면 파라미터 공간의 계량이 바뀐다.\r
유클리드 거리로 같은 한 걸음이\r
Fisher 거리로는 전혀 다른 크기다.\r
μP는 Fisher 거리를 일정하게 만드는 처방이고,\r
Muon은 스펙트럼 노름을 일정하게 만드는 처방이다.\r
9장에서 배운 자(ruler)가 현실의 문제에서 작동한다.\r
\r
그런데 지도의 가장자리에는 아직 이름이 적히지 않은 땅이 있다.\r
α = ±1만 보았다. 그 사이는? 그 너머는?\r
양자 상태에도 Fisher 계량이 있는가?\r
학습 자체가 열역학적 과정이라면?\r
이 질문들은 우리 지도의 바깥에 있다.\r
그러나 지도를 가진 사람만이 "바깥"을 식별할 수 있다.\r
`,sm=`# 에필로그: 지도의 가장자리에서\r
\r
이론의 지도를 완성했고, 응용의 풍경을 네 곳에서 보았다.\r
디퓨전에서 ∇log p가 안개 속의 레이더가 되었고,\r
플로우 매칭에서 4장의 직선이 생성의 경로가 되었다.\r
넓히기와 좁히기에서 프리트레인의 OR과 강화학습의 AND가\r
10장의 쌍대 그 자체임을 보았다 —\r
KL의 방향이 언어모델의 성격을 결정하는 것을 확인했다.\r
스케일링에서 Fisher 계량이 현실의 최적화 문제에 작동하는 것을 보았고,\r
이 교재가 시작된 원점으로 돌아왔다.\r
\r
그래도 가장자리는 있다. 지도 너머 더 먼 땅이 있다.\r
\r
## α-접속의 일반론\r
\r
이 교재에서 우리는 α = ±1을 중심으로 보았다.\r
e-접속과 m-접속. 덧셈의 길과 곱셈의 길.\r
16장에서 우리는 α가 0과 1 사이를 연속적으로 걸으며\r
forward KL과 reverse KL을 보간하는 것을 맛보았다.\r
그런데 α는 이보다 더 넓은 연속 파라미터다.\r
-1과 +1 사이, 그리고 그 너머에도 접속이 존재한다.\r
α = 0이면 레비-치비타 접속 — 리만 기하학의 표준 접속이 나타난다.\r
α가 달라지면 곡률이 달라지고, 측지선이 달라지고,\r
사영의 방식이 달라진다.\r
16장에서 맛본 것은 이 풍경의 입구였다.\r
\r
## 양자 정보기하학\r
\r
양자 상태는 밀도 행렬로 표현된다.\r
밀도 행렬의 공간에도 Fisher 계량을 정의할 수 있다.\r
그런데 양자 세계에서는 Fisher 계량이 유일하지 않다 —\r
고전 세계에서의 유일성 정리(체초프 정리)가 양자에서는 깨진다.\r
무한히 많은 "양자 Fisher 계량"이 존재하고,\r
그 각각이 다른 기하학을 정의한다.\r
우리가 배운 유일성의 아름다움이 양자에서는 어떻게 변주되는지 —\r
그것은 이 지도 너머의 풍경이다.\r
\r
## 정보기하학과 열역학\r
\r
르장드르 변환은 7장에서 쌍대 좌표를 연결하는 다리였다.\r
그런데 르장드르 변환의 원래 집은 열역학이다.\r
에너지와 엔트로피, 온도와 엔트로피 — 열역학의 쌍대 변수들이\r
르장드르 변환으로 연결된다.\r
정보기하학이 열역학과 만나는 접점에서,\r
우리가 배운 쌍대성이 물리학의 기본 법칙과 공명한다.\r
\r
최근에는 학습 자체를 열역학적 과정으로 보는 시도가 나타나고 있다.\r
에피플렉시티(학습 가능한 구조적 정보)를 흡수하는 과정에서\r
불가피하게 비가역적 엔트로피 생산이 일어난다는 관점이다.\r
16장에서 맛본 에피플렉시티가,\r
르장드르 변환의 고향인 열역학과 만나는 접점에서,\r
새로운 풍경이 열리고 있다.\r
\r
---\r
\r
## 원점으로 돌아오다\r
\r
이 이름들은 우리가 그린 지도의 가장자리에 적힌 표지판이다.\r
각각이 하나의 새로운 여행이 될 수 있다.\r
하지만 그 여행을 시작하기 전에, 돌아보자.\r
\r
저자가 처음 아마리를 알게 된 것은 μP에 대해 알아보다가였다.\r
Fisher 정보 행렬이라는 이름이 논문에서 반복되는데\r
그것이 뭔지 모르니까 읽히지 않았다.\r
검색하다가 아마리에 도달했고, 정보기하학이라는 풍경을 발견했다.\r
\r
그리고 지금, Muon의 논문에서도 같은 이름이 나타난다.\r
Fisher 정보 행렬. 자연 기울기. 스펙트럼 구조.\r
2년 전에 읽히지 않던 문장이 지금은 그림이 된다.\r
이 교재는 그 발견에서 시작되었고, 여기서 원점으로 돌아왔다.\r
\r
돌아보자.\r
우리가 걸어온 길의 모든 갈림목에는 같은 선택이 있었다 — 더할 것인가, 곱할 것인가.\r
그리고 그 선택은 추상이 아니었다.\r
프리트레인이 넓혔고, 강화학습이 좁혔다.\r
디퓨전이 방향을 배웠고, 플로우 매칭이 경로를 배웠다.\r
Fisher 계량이 한 걸음의 크기를 재었고, Muon이 방향을 정규화했다.\r
덧셈의 길과 곱셈의 길 사이를 번역하는 하나의 함수 — log — 가 있었다.\r
그리고 그 번역기의 너머에, 아직 우리가 이름 붙이지 못한 풍경이 있다.\r
지도는 계속된다.\r
`,oe=[{id:"00",title:"서문",slug:"preface",md:Bh,viz:null},{id:"01",title:"왜 정보기하학인가",slug:"why-infogeo",md:$h,viz:null},{id:"02",title:"점",slug:"point",md:Vh,viz:null},{id:"03",title:"거리",slug:"distance",md:Uh,viz:D.lazy(()=>cr(()=>import("./ch03-distance-Ccj1NgXx.js"),__vite__mapDeps([0,1,2,3,4])))},{id:"04",title:"길",slug:"paths",md:Hh,viz:D.lazy(()=>cr(()=>import("./ch04-paths-Bp1VCuK3.js"),__vite__mapDeps([5,1,2])))},{id:"04z",title:"전환 — 같은 세계, 다른 눈",slug:"transition-1",md:Wh,viz:null},{id:"05",title:"놀라움과 정보",slug:"surprise",md:qh,viz:D.lazy(()=>cr(()=>import("./ch05-surprise-and-information-CtACxMYT.js"),__vite__mapDeps([6,1,2,7,4])))},{id:"06",title:"볼록함수의 쌍대",slug:"convex-duality",md:Xh,viz:D.lazy(()=>cr(()=>import("./ch06-convex-duality-CBNcUehm.js"),__vite__mapDeps([8,1,2,7,4])))},{id:"06z",title:"전환 — 두 눈을 동시에",slug:"transition-2",md:Jh,viz:null},{id:"07",title:"지수족",slug:"exponential-family",md:Qh,viz:D.lazy(()=>cr(()=>import("./ch07-exponential-family-flashcards-RJgIj7c6.js"),__vite__mapDeps([9,1,2,7,4])))},{id:"08",title:"구부러진 땅",slug:"curved-land",md:Gh,viz:null},{id:"09",title:"파라메터 공간의 곡률",slug:"fisher-information",md:Zh,viz:D.lazy(()=>cr(()=>import("./ch09-fisher-information-C0Zt-5EO.js"),__vite__mapDeps([10,1,2,7,4])))},{id:"10",title:"무지와 확신",slug:"ignorance",md:Yh,viz:null},{id:"11",title:"추론의 기하학",slug:"geometry-of-inference",md:bh,viz:D.lazy(()=>cr(()=>import("./ch11-geometry-of-inference-uezYppuE.js"),__vite__mapDeps([11,1,2,7,4])))},{id:"12",title:"수렴",slug:"convergence",md:nm,viz:D.lazy(()=>cr(()=>import("./ch12-convergence-DcXLfKA5.js"),__vite__mapDeps([12,1,7,4])))},{id:"13",title:"전체 지도",slug:"full-map",md:rm,viz:null},{id:"13z",title:"전환 — 도구를 들고 세계로",slug:"transition-3",md:em,viz:null},{id:"14",title:"디퓨전",slug:"diffusion",md:tm,viz:D.lazy(()=>cr(()=>import("./ch14-diffusion-B7H1dhuf.js"),__vite__mapDeps([13,1,2,7,4])))},{id:"15",title:"플로우 매칭",slug:"flow-matching",md:lm,viz:D.lazy(()=>cr(()=>import("./ch15-flow-matching-ZgGQgImq.js"),__vite__mapDeps([14,1,2,7,4])))},{id:"16",title:"넓히기와 좁히기",slug:"broadening-narrowing",md:im,viz:D.lazy(()=>cr(()=>import("./ch16-broadening-narrowing-B8MWWOqF.js"),__vite__mapDeps([15,1,2,7,4])))},{id:"17",title:"스케일링",slug:"scaling",md:om,viz:D.lazy(()=>cr(()=>import("./ch17-scaling-Dc1sEsWM.js"),__vite__mapDeps([16,1,2,3,4])))},{id:"A",title:"에필로그",slug:"epilogue",md:sm,viz:null}];function Rs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ce=Rs();function df(s){Ce=s}var Se={exec:()=>null};function nn(s,i=""){let u=typeof s=="string"?s:s.source,a={replace:(c,p)=>{let m=typeof p=="string"?p:p.source;return m=m.replace(Hn.caret,"$1"),u=u.replace(c,m),a},getRegex:()=>new RegExp(u,i)};return a}var um=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Hn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}#`),htmlBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:s=>new RegExp(`^ {0,${Math.min(3,s-1)}}>`)},am=/^(?:[ \t]*(?:\n|$))+/,cm=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,fm=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,qt=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,pm=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,_s=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hf=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,mf=nn(hf).replace(/bull/g,_s).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),dm=nn(hf).replace(/bull/g,_s).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cs=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,hm=/^[^\n]+/,Ps=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,mm=nn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ps).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gm=nn(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,_s).getRegex(),di="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zs=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,vm=nn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zs).replace("tag",di).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gf=nn(Cs).replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex(),ym=nn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gf).getRegex(),Fs={blockquote:ym,code:cm,def:mm,fences:fm,heading:pm,hr:qt,html:vm,lheading:mf,list:gm,newline:am,paragraph:gf,table:Se,text:hm},Xc=nn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex(),km={...Fs,lheading:dm,table:Xc,paragraph:nn(Cs).replace("hr",qt).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",di).getRegex()},xm={...Fs,html:nn(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zs).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Se,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:nn(Cs).replace("hr",qt).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wm=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Sm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vf=/^( {2,}|\\)\n(?!\s*$)/,Em=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hi=/[\p{P}\p{S}]/u,Ts=/[\s\p{P}\p{S}]/u,yf=/[^\s\p{P}\p{S}]/u,Lm=nn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ts).getRegex(),kf=/(?!~)[\p{P}\p{S}]/u,Rm=/(?!~)[\s\p{P}\p{S}]/u,_m=/(?:[^\s\p{P}\p{S}]|~)/u,xf=/(?![*_])[\p{P}\p{S}]/u,Cm=/(?![*_])[\s\p{P}\p{S}]/u,Pm=/(?:[^\s\p{P}\p{S}]|[*_])/u,zm=nn(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",um?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),wf=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Fm=nn(wf,"u").replace(/punct/g,hi).getRegex(),Tm=nn(wf,"u").replace(/punct/g,kf).getRegex(),Sf="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Nm=nn(Sf,"gu").replace(/notPunctSpace/g,yf).replace(/punctSpace/g,Ts).replace(/punct/g,hi).getRegex(),Im=nn(Sf,"gu").replace(/notPunctSpace/g,_m).replace(/punctSpace/g,Rm).replace(/punct/g,kf).getRegex(),Am=nn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,yf).replace(/punctSpace/g,Ts).replace(/punct/g,hi).getRegex(),Dm=nn(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,xf).getRegex(),Om="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Mm=nn(Om,"gu").replace(/notPunctSpace/g,Pm).replace(/punctSpace/g,Cm).replace(/punct/g,xf).getRegex(),jm=nn(/\\(punct)/,"gu").replace(/punct/g,hi).getRegex(),Km=nn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Bm=nn(zs).replace("(?:-->|$)","-->").getRegex(),$m=nn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Bm).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ui=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Vm=nn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ui).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ef=nn(/^!?\[(label)\]\[(ref)\]/).replace("label",ui).replace("ref",Ps).getRegex(),Lf=nn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ps).getRegex(),Um=nn("reflink|nolink(?!\\()","g").replace("reflink",Ef).replace("nolink",Lf).getRegex(),Jc=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ns={_backpedal:Se,anyPunctuation:jm,autolink:Km,blockSkip:zm,br:vf,code:Sm,del:Se,delLDelim:Se,delRDelim:Se,emStrongLDelim:Fm,emStrongRDelimAst:Nm,emStrongRDelimUnd:Am,escape:wm,link:Vm,nolink:Lf,punctuation:Lm,reflink:Ef,reflinkSearch:Um,tag:$m,text:Em,url:Se},Hm={...Ns,link:nn(/^!?\[(label)\]\((.*?)\)/).replace("label",ui).getRegex(),reflink:nn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ui).getRegex()},ks={...Ns,emStrongRDelimAst:Im,emStrongLDelim:Tm,delLDelim:Dm,delRDelim:Mm,url:nn(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Jc).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:nn(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Jc).getRegex()},Wm={...ks,br:nn(vf).replace("{2,}","*").getRegex(),text:nn(ks.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},li={normal:Fs,gfm:km,pedantic:xm},Kt={normal:Ns,gfm:ks,breaks:Wm,pedantic:Hm},qm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qc=s=>qm[s];function zr(s,i){if(i){if(Hn.escapeTest.test(s))return s.replace(Hn.escapeReplace,Qc)}else if(Hn.escapeTestNoEncode.test(s))return s.replace(Hn.escapeReplaceNoEncode,Qc);return s}function Gc(s){try{s=encodeURI(s).replace(Hn.percentDecode,"%")}catch{return null}return s}function Zc(s,i){var p;let u=s.replace(Hn.findPipe,(m,h,k)=>{let y=!1,L=h;for(;--L>=0&&k[L]==="\\";)y=!y;return y?"|":" |"}),a=u.split(Hn.splitPipe),c=0;if(a[0].trim()||a.shift(),a.length>0&&!((p=a.at(-1))!=null&&p.trim())&&a.pop(),i)if(a.length>i)a.splice(i);else for(;a.length<i;)a.push("");for(;c<a.length;c++)a[c]=a[c].trim().replace(Hn.slashPipe,"|");return a}function Bt(s,i,u){let a=s.length;if(a===0)return"";let c=0;for(;c<a&&s.charAt(a-c-1)===i;)c++;return s.slice(0,a-c)}function Xm(s,i){if(s.indexOf(i[1])===-1)return-1;let u=0;for(let a=0;a<s.length;a++)if(s[a]==="\\")a++;else if(s[a]===i[0])u++;else if(s[a]===i[1]&&(u--,u<0))return a;return u>0?-2:-1}function Jm(s,i=0){let u=i,a="";for(let c of s)if(c==="	"){let p=4-u%4;a+=" ".repeat(p),u+=p}else a+=c,u++;return a}function Yc(s,i,u,a,c){let p=i.href,m=i.title||null,h=s[1].replace(c.other.outputLinkReplace,"$1");a.state.inLink=!0;let k={type:s[0].charAt(0)==="!"?"image":"link",raw:u,href:p,title:m,text:h,tokens:a.inlineTokens(h)};return a.state.inLink=!1,k}function Qm(s,i,u){let a=s.match(u.other.indentCodeCompensation);if(a===null)return i;let c=a[1];return i.split(`
`).map(p=>{let m=p.match(u.other.beginningSpace);if(m===null)return p;let[h]=m;return h.length>=c.length?p.slice(c.length):p}).join(`
`)}var ai=class{constructor(s){pn(this,"options");pn(this,"rules");pn(this,"lexer");this.options=s||Ce}space(s){let i=this.rules.block.newline.exec(s);if(i&&i[0].length>0)return{type:"space",raw:i[0]}}code(s){let i=this.rules.block.code.exec(s);if(i){let u=i[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i[0],codeBlockStyle:"indented",text:this.options.pedantic?u:Bt(u,`
`)}}}fences(s){let i=this.rules.block.fences.exec(s);if(i){let u=i[0],a=Qm(u,i[3]||"",this.rules);return{type:"code",raw:u,lang:i[2]?i[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):i[2],text:a}}}heading(s){let i=this.rules.block.heading.exec(s);if(i){let u=i[2].trim();if(this.rules.other.endingHash.test(u)){let a=Bt(u,"#");(this.options.pedantic||!a||this.rules.other.endingSpaceChar.test(a))&&(u=a.trim())}return{type:"heading",raw:i[0],depth:i[1].length,text:u,tokens:this.lexer.inline(u)}}}hr(s){let i=this.rules.block.hr.exec(s);if(i)return{type:"hr",raw:Bt(i[0],`
`)}}blockquote(s){let i=this.rules.block.blockquote.exec(s);if(i){let u=Bt(i[0],`
`).split(`
`),a="",c="",p=[];for(;u.length>0;){let m=!1,h=[],k;for(k=0;k<u.length;k++)if(this.rules.other.blockquoteStart.test(u[k]))h.push(u[k]),m=!0;else if(!m)h.push(u[k]);else break;u=u.slice(k);let y=h.join(`
`),L=y.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${y}`:y,c=c?`${c}
${L}`:L;let R=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(L,p,!0),this.lexer.state.top=R,u.length===0)break;let _=p.at(-1);if((_==null?void 0:_.type)==="code")break;if((_==null?void 0:_.type)==="blockquote"){let C=_,V=C.raw+`
`+u.join(`
`),A=this.blockquote(V);p[p.length-1]=A,a=a.substring(0,a.length-C.raw.length)+A.raw,c=c.substring(0,c.length-C.text.length)+A.text;break}else if((_==null?void 0:_.type)==="list"){let C=_,V=C.raw+`
`+u.join(`
`),A=this.list(V);p[p.length-1]=A,a=a.substring(0,a.length-_.raw.length)+A.raw,c=c.substring(0,c.length-C.raw.length)+A.raw,u=V.substring(p.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:p,text:c}}}list(s){var u,a;let i=this.rules.block.list.exec(s);if(i){let c=i[1].trim(),p=c.length>1,m={type:"list",raw:"",ordered:p,start:p?+c.slice(0,-1):"",loose:!1,items:[]};c=p?`\\d{1,9}\\${c.slice(-1)}`:`\\${c}`,this.options.pedantic&&(c=p?c:"[*+-]");let h=this.rules.other.listItemRegex(c),k=!1;for(;s;){let L=!1,R="",_="";if(!(i=h.exec(s))||this.rules.block.hr.test(s))break;R=i[0],s=s.substring(R.length);let C=Jm(i[2].split(`
`,1)[0],i[1].length),V=s.split(`
`,1)[0],A=!C.trim(),N=0;if(this.options.pedantic?(N=2,_=C.trimStart()):A?N=i[1].length+1:(N=C.search(this.rules.other.nonSpaceChar),N=N>4?1:N,_=C.slice(N),N+=i[1].length),A&&this.rules.other.blankLine.test(V)&&(R+=V+`
`,s=s.substring(V.length+1),L=!0),!L){let b=this.rules.other.nextBulletRegex(N),rn=this.rules.other.hrRegex(N),en=this.rules.other.fencesBeginRegex(N),an=this.rules.other.headingBeginRegex(N),Rn=this.rules.other.htmlBeginRegex(N),Dn=this.rules.other.blockquoteBeginRegex(N);for(;s;){let Fn=s.split(`
`,1)[0],Tn;if(V=Fn,this.options.pedantic?(V=V.replace(this.rules.other.listReplaceNesting,"  "),Tn=V):Tn=V.replace(this.rules.other.tabCharGlobal,"    "),en.test(V)||an.test(V)||Rn.test(V)||Dn.test(V)||b.test(V)||rn.test(V))break;if(Tn.search(this.rules.other.nonSpaceChar)>=N||!V.trim())_+=`
`+Tn.slice(N);else{if(A||C.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||en.test(C)||an.test(C)||rn.test(C))break;_+=`
`+V}A=!V.trim(),R+=Fn+`
`,s=s.substring(Fn.length+1),C=Tn.slice(N)}}m.loose||(k?m.loose=!0:this.rules.other.doubleBlankLine.test(R)&&(k=!0)),m.items.push({type:"list_item",raw:R,task:!!this.options.gfm&&this.rules.other.listIsTask.test(_),loose:!1,text:_,tokens:[]}),m.raw+=R}let y=m.items.at(-1);if(y)y.raw=y.raw.trimEnd(),y.text=y.text.trimEnd();else return;m.raw=m.raw.trimEnd();for(let L of m.items){if(this.lexer.state.top=!1,L.tokens=this.lexer.blockTokens(L.text,[]),L.task){if(L.text=L.text.replace(this.rules.other.listReplaceTask,""),((u=L.tokens[0])==null?void 0:u.type)==="text"||((a=L.tokens[0])==null?void 0:a.type)==="paragraph"){L.tokens[0].raw=L.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),L.tokens[0].text=L.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}}let R=this.rules.other.listTaskCheckbox.exec(L.raw);if(R){let _={type:"checkbox",raw:R[0]+" ",checked:R[0]!=="[ ]"};L.checked=_.checked,m.loose?L.tokens[0]&&["paragraph","text"].includes(L.tokens[0].type)&&"tokens"in L.tokens[0]&&L.tokens[0].tokens?(L.tokens[0].raw=_.raw+L.tokens[0].raw,L.tokens[0].text=_.raw+L.tokens[0].text,L.tokens[0].tokens.unshift(_)):L.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):L.tokens.unshift(_)}}if(!m.loose){let R=L.tokens.filter(C=>C.type==="space"),_=R.length>0&&R.some(C=>this.rules.other.anyLine.test(C.raw));m.loose=_}}if(m.loose)for(let L of m.items){L.loose=!0;for(let R of L.tokens)R.type==="text"&&(R.type="paragraph")}return m}}html(s){let i=this.rules.block.html.exec(s);if(i)return{type:"html",block:!0,raw:i[0],pre:i[1]==="pre"||i[1]==="script"||i[1]==="style",text:i[0]}}def(s){let i=this.rules.block.def.exec(s);if(i){let u=i[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=i[2]?i[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",c=i[3]?i[3].substring(1,i[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):i[3];return{type:"def",tag:u,raw:i[0],href:a,title:c}}}table(s){var m;let i=this.rules.block.table.exec(s);if(!i||!this.rules.other.tableDelimiter.test(i[2]))return;let u=Zc(i[1]),a=i[2].replace(this.rules.other.tableAlignChars,"").split("|"),c=(m=i[3])!=null&&m.trim()?i[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],p={type:"table",raw:i[0],header:[],align:[],rows:[]};if(u.length===a.length){for(let h of a)this.rules.other.tableAlignRight.test(h)?p.align.push("right"):this.rules.other.tableAlignCenter.test(h)?p.align.push("center"):this.rules.other.tableAlignLeft.test(h)?p.align.push("left"):p.align.push(null);for(let h=0;h<u.length;h++)p.header.push({text:u[h],tokens:this.lexer.inline(u[h]),header:!0,align:p.align[h]});for(let h of c)p.rows.push(Zc(h,p.header.length).map((k,y)=>({text:k,tokens:this.lexer.inline(k),header:!1,align:p.align[y]})));return p}}lheading(s){let i=this.rules.block.lheading.exec(s);if(i)return{type:"heading",raw:i[0],depth:i[2].charAt(0)==="="?1:2,text:i[1],tokens:this.lexer.inline(i[1])}}paragraph(s){let i=this.rules.block.paragraph.exec(s);if(i){let u=i[1].charAt(i[1].length-1)===`
`?i[1].slice(0,-1):i[1];return{type:"paragraph",raw:i[0],text:u,tokens:this.lexer.inline(u)}}}text(s){let i=this.rules.block.text.exec(s);if(i)return{type:"text",raw:i[0],text:i[0],tokens:this.lexer.inline(i[0])}}escape(s){let i=this.rules.inline.escape.exec(s);if(i)return{type:"escape",raw:i[0],text:i[1]}}tag(s){let i=this.rules.inline.tag.exec(s);if(i)return!this.lexer.state.inLink&&this.rules.other.startATag.test(i[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(i[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(i[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(i[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:i[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:i[0]}}link(s){let i=this.rules.inline.link.exec(s);if(i){let u=i[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(u)){if(!this.rules.other.endAngleBracket.test(u))return;let p=Bt(u.slice(0,-1),"\\");if((u.length-p.length)%2===0)return}else{let p=Xm(i[2],"()");if(p===-2)return;if(p>-1){let m=(i[0].indexOf("!")===0?5:4)+i[1].length+p;i[2]=i[2].substring(0,p),i[0]=i[0].substring(0,m).trim(),i[3]=""}}let a=i[2],c="";if(this.options.pedantic){let p=this.rules.other.pedanticHrefTitle.exec(a);p&&(a=p[1],c=p[3])}else c=i[3]?i[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(u)?a=a.slice(1):a=a.slice(1,-1)),Yc(i,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},i[0],this.lexer,this.rules)}}reflink(s,i){let u;if((u=this.rules.inline.reflink.exec(s))||(u=this.rules.inline.nolink.exec(s))){let a=(u[2]||u[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=i[a.toLowerCase()];if(!c){let p=u[0].charAt(0);return{type:"text",raw:p,text:p}}return Yc(u,c,u[0],this.lexer,this.rules)}}emStrong(s,i,u=""){let a=this.rules.inline.emStrongLDelim.exec(s);if(!(!a||a[3]&&u.match(this.rules.other.unicodeAlphaNumeric))&&(!(a[1]||a[2])||!u||this.rules.inline.punctuation.exec(u))){let c=[...a[0]].length-1,p,m,h=c,k=0,y=a[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(y.lastIndex=0,i=i.slice(-1*s.length+c);(a=y.exec(i))!=null;){if(p=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!p)continue;if(m=[...p].length,a[3]||a[4]){h+=m;continue}else if((a[5]||a[6])&&c%3&&!((c+m)%3)){k+=m;continue}if(h-=m,h>0)continue;m=Math.min(m,m+h+k);let L=[...a[0]][0].length,R=s.slice(0,c+a.index+L+m);if(Math.min(c,m)%2){let C=R.slice(1,-1);return{type:"em",raw:R,text:C,tokens:this.lexer.inlineTokens(C)}}let _=R.slice(2,-2);return{type:"strong",raw:R,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(s){let i=this.rules.inline.code.exec(s);if(i){let u=i[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(u),c=this.rules.other.startingSpaceChar.test(u)&&this.rules.other.endingSpaceChar.test(u);return a&&c&&(u=u.substring(1,u.length-1)),{type:"codespan",raw:i[0],text:u}}}br(s){let i=this.rules.inline.br.exec(s);if(i)return{type:"br",raw:i[0]}}del(s,i,u=""){let a=this.rules.inline.delLDelim.exec(s);if(a&&(!a[1]||!u||this.rules.inline.punctuation.exec(u))){let c=[...a[0]].length-1,p,m,h=c,k=this.rules.inline.delRDelim;for(k.lastIndex=0,i=i.slice(-1*s.length+c);(a=k.exec(i))!=null;){if(p=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!p||(m=[...p].length,m!==c))continue;if(a[3]||a[4]){h+=m;continue}if(h-=m,h>0)continue;m=Math.min(m,m+h);let y=[...a[0]][0].length,L=s.slice(0,c+a.index+y+m),R=L.slice(c,-c);return{type:"del",raw:L,text:R,tokens:this.lexer.inlineTokens(R)}}}}autolink(s){let i=this.rules.inline.autolink.exec(s);if(i){let u,a;return i[2]==="@"?(u=i[1],a="mailto:"+u):(u=i[1],a=u),{type:"link",raw:i[0],text:u,href:a,tokens:[{type:"text",raw:u,text:u}]}}}url(s){var u;let i;if(i=this.rules.inline.url.exec(s)){let a,c;if(i[2]==="@")a=i[0],c="mailto:"+a;else{let p;do p=i[0],i[0]=((u=this.rules.inline._backpedal.exec(i[0]))==null?void 0:u[0])??"";while(p!==i[0]);a=i[0],i[1]==="www."?c="http://"+i[0]:c=i[0]}return{type:"link",raw:i[0],text:a,href:c,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(s){let i=this.rules.inline.text.exec(s);if(i){let u=this.lexer.state.inRawBlock;return{type:"text",raw:i[0],text:i[0],escaped:u}}}},kr=class xs{constructor(i){pn(this,"tokens");pn(this,"options");pn(this,"state");pn(this,"inlineQueue");pn(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=i||Ce,this.options.tokenizer=this.options.tokenizer||new ai,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let u={other:Hn,block:li.normal,inline:Kt.normal};this.options.pedantic?(u.block=li.pedantic,u.inline=Kt.pedantic):this.options.gfm&&(u.block=li.gfm,this.options.breaks?u.inline=Kt.breaks:u.inline=Kt.gfm),this.tokenizer.rules=u}static get rules(){return{block:li,inline:Kt}}static lex(i,u){return new xs(u).lex(i)}static lexInline(i,u){return new xs(u).inlineTokens(i)}lex(i){i=i.replace(Hn.carriageReturn,`
`),this.blockTokens(i,this.tokens);for(let u=0;u<this.inlineQueue.length;u++){let a=this.inlineQueue[u];this.inlineTokens(a.src,a.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(i,u=[],a=!1){var c,p,m;for(this.options.pedantic&&(i=i.replace(Hn.tabCharGlobal,"    ").replace(Hn.spaceLine,""));i;){let h;if((p=(c=this.options.extensions)==null?void 0:c.block)!=null&&p.some(y=>(h=y.call({lexer:this},i,u))?(i=i.substring(h.raw.length),u.push(h),!0):!1))continue;if(h=this.tokenizer.space(i)){i=i.substring(h.raw.length);let y=u.at(-1);h.raw.length===1&&y!==void 0?y.raw+=`
`:u.push(h);continue}if(h=this.tokenizer.code(i)){i=i.substring(h.raw.length);let y=u.at(-1);(y==null?void 0:y.type)==="paragraph"||(y==null?void 0:y.type)==="text"?(y.raw+=(y.raw.endsWith(`
`)?"":`
`)+h.raw,y.text+=`
`+h.text,this.inlineQueue.at(-1).src=y.text):u.push(h);continue}if(h=this.tokenizer.fences(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.heading(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.hr(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.blockquote(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.list(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.html(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.def(i)){i=i.substring(h.raw.length);let y=u.at(-1);(y==null?void 0:y.type)==="paragraph"||(y==null?void 0:y.type)==="text"?(y.raw+=(y.raw.endsWith(`
`)?"":`
`)+h.raw,y.text+=`
`+h.raw,this.inlineQueue.at(-1).src=y.text):this.tokens.links[h.tag]||(this.tokens.links[h.tag]={href:h.href,title:h.title},u.push(h));continue}if(h=this.tokenizer.table(i)){i=i.substring(h.raw.length),u.push(h);continue}if(h=this.tokenizer.lheading(i)){i=i.substring(h.raw.length),u.push(h);continue}let k=i;if((m=this.options.extensions)!=null&&m.startBlock){let y=1/0,L=i.slice(1),R;this.options.extensions.startBlock.forEach(_=>{R=_.call({lexer:this},L),typeof R=="number"&&R>=0&&(y=Math.min(y,R))}),y<1/0&&y>=0&&(k=i.substring(0,y+1))}if(this.state.top&&(h=this.tokenizer.paragraph(k))){let y=u.at(-1);a&&(y==null?void 0:y.type)==="paragraph"?(y.raw+=(y.raw.endsWith(`
`)?"":`
`)+h.raw,y.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=y.text):u.push(h),a=k.length!==i.length,i=i.substring(h.raw.length);continue}if(h=this.tokenizer.text(i)){i=i.substring(h.raw.length);let y=u.at(-1);(y==null?void 0:y.type)==="text"?(y.raw+=(y.raw.endsWith(`
`)?"":`
`)+h.raw,y.text+=`
`+h.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=y.text):u.push(h);continue}if(i){let y="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(y);break}else throw new Error(y)}}return this.state.top=!0,u}inline(i,u=[]){return this.inlineQueue.push({src:i,tokens:u}),u}inlineTokens(i,u=[]){var k,y,L,R,_;let a=i,c=null;if(this.tokens.links){let C=Object.keys(this.tokens.links);if(C.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)C.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(a))!=null;)a=a.slice(0,c.index)+"++"+a.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let p;for(;(c=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)p=c[2]?c[2].length:0,a=a.slice(0,c.index+p)+"["+"a".repeat(c[0].length-p-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);a=((y=(k=this.options.hooks)==null?void 0:k.emStrongMask)==null?void 0:y.call({lexer:this},a))??a;let m=!1,h="";for(;i;){m||(h=""),m=!1;let C;if((R=(L=this.options.extensions)==null?void 0:L.inline)!=null&&R.some(A=>(C=A.call({lexer:this},i,u))?(i=i.substring(C.raw.length),u.push(C),!0):!1))continue;if(C=this.tokenizer.escape(i)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.tag(i)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.link(i)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.reflink(i,this.tokens.links)){i=i.substring(C.raw.length);let A=u.at(-1);C.type==="text"&&(A==null?void 0:A.type)==="text"?(A.raw+=C.raw,A.text+=C.text):u.push(C);continue}if(C=this.tokenizer.emStrong(i,a,h)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.codespan(i)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.br(i)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.del(i,a,h)){i=i.substring(C.raw.length),u.push(C);continue}if(C=this.tokenizer.autolink(i)){i=i.substring(C.raw.length),u.push(C);continue}if(!this.state.inLink&&(C=this.tokenizer.url(i))){i=i.substring(C.raw.length),u.push(C);continue}let V=i;if((_=this.options.extensions)!=null&&_.startInline){let A=1/0,N=i.slice(1),b;this.options.extensions.startInline.forEach(rn=>{b=rn.call({lexer:this},N),typeof b=="number"&&b>=0&&(A=Math.min(A,b))}),A<1/0&&A>=0&&(V=i.substring(0,A+1))}if(C=this.tokenizer.inlineText(V)){i=i.substring(C.raw.length),C.raw.slice(-1)!=="_"&&(h=C.raw.slice(-1)),m=!0;let A=u.at(-1);(A==null?void 0:A.type)==="text"?(A.raw+=C.raw,A.text+=C.text):u.push(C);continue}if(i){let A="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(A);break}else throw new Error(A)}}return u}},ci=class{constructor(s){pn(this,"options");pn(this,"parser");this.options=s||Ce}space(s){return""}code({text:s,lang:i,escaped:u}){var p;let a=(p=(i||"").match(Hn.notSpaceStart))==null?void 0:p[0],c=s.replace(Hn.endingNewline,"")+`
`;return a?'<pre><code class="language-'+zr(a)+'">'+(u?c:zr(c,!0))+`</code></pre>
`:"<pre><code>"+(u?c:zr(c,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}def(s){return""}heading({tokens:s,depth:i}){return`<h${i}>${this.parser.parseInline(s)}</h${i}>
`}hr(s){return`<hr>
`}list(s){let i=s.ordered,u=s.start,a="";for(let m=0;m<s.items.length;m++){let h=s.items[m];a+=this.listitem(h)}let c=i?"ol":"ul",p=i&&u!==1?' start="'+u+'"':"";return"<"+c+p+`>
`+a+"</"+c+`>
`}listitem(s){return`<li>${this.parser.parse(s.tokens)}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let i="",u="";for(let c=0;c<s.header.length;c++)u+=this.tablecell(s.header[c]);i+=this.tablerow({text:u});let a="";for(let c=0;c<s.rows.length;c++){let p=s.rows[c];u="";for(let m=0;m<p.length;m++)u+=this.tablecell(p[m]);a+=this.tablerow({text:u})}return a&&(a=`<tbody>${a}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+a+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){let i=this.parser.parseInline(s.tokens),u=s.header?"th":"td";return(s.align?`<${u} align="${s.align}">`:`<${u}>`)+i+`</${u}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${zr(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:i,tokens:u}){let a=this.parser.parseInline(u),c=Gc(s);if(c===null)return a;s=c;let p='<a href="'+s+'"';return i&&(p+=' title="'+zr(i)+'"'),p+=">"+a+"</a>",p}image({href:s,title:i,text:u,tokens:a}){a&&(u=this.parser.parseInline(a,this.parser.textRenderer));let c=Gc(s);if(c===null)return zr(u);s=c;let p=`<img src="${s}" alt="${zr(u)}"`;return i&&(p+=` title="${zr(i)}"`),p+=">",p}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:zr(s.text)}},Is=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}checkbox({raw:s}){return s}},xr=class ws{constructor(i){pn(this,"options");pn(this,"renderer");pn(this,"textRenderer");this.options=i||Ce,this.options.renderer=this.options.renderer||new ci,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Is}static parse(i,u){return new ws(u).parse(i)}static parseInline(i,u){return new ws(u).parseInline(i)}parse(i){var a,c;let u="";for(let p=0;p<i.length;p++){let m=i[p];if((c=(a=this.options.extensions)==null?void 0:a.renderers)!=null&&c[m.type]){let k=m,y=this.options.extensions.renderers[k.type].call({parser:this},k);if(y!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(k.type)){u+=y||"";continue}}let h=m;switch(h.type){case"space":{u+=this.renderer.space(h);break}case"hr":{u+=this.renderer.hr(h);break}case"heading":{u+=this.renderer.heading(h);break}case"code":{u+=this.renderer.code(h);break}case"table":{u+=this.renderer.table(h);break}case"blockquote":{u+=this.renderer.blockquote(h);break}case"list":{u+=this.renderer.list(h);break}case"checkbox":{u+=this.renderer.checkbox(h);break}case"html":{u+=this.renderer.html(h);break}case"def":{u+=this.renderer.def(h);break}case"paragraph":{u+=this.renderer.paragraph(h);break}case"text":{u+=this.renderer.text(h);break}default:{let k='Token with "'+h.type+'" type was not found.';if(this.options.silent)return console.error(k),"";throw new Error(k)}}}return u}parseInline(i,u=this.renderer){var c,p;let a="";for(let m=0;m<i.length;m++){let h=i[m];if((p=(c=this.options.extensions)==null?void 0:c.renderers)!=null&&p[h.type]){let y=this.options.extensions.renderers[h.type].call({parser:this},h);if(y!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(h.type)){a+=y||"";continue}}let k=h;switch(k.type){case"escape":{a+=u.text(k);break}case"html":{a+=u.html(k);break}case"link":{a+=u.link(k);break}case"image":{a+=u.image(k);break}case"checkbox":{a+=u.checkbox(k);break}case"strong":{a+=u.strong(k);break}case"em":{a+=u.em(k);break}case"codespan":{a+=u.codespan(k);break}case"br":{a+=u.br(k);break}case"del":{a+=u.del(k);break}case"text":{a+=u.text(k);break}default:{let y='Token with "'+k.type+'" type was not found.';if(this.options.silent)return console.error(y),"";throw new Error(y)}}}return a}},ii,$t=(ii=class{constructor(s){pn(this,"options");pn(this,"block");this.options=s||Ce}preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}emStrongMask(s){return s}provideLexer(){return this.block?kr.lex:kr.lexInline}provideParser(){return this.block?xr.parse:xr.parseInline}},pn(ii,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),pn(ii,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ii),Gm=class{constructor(...s){pn(this,"defaults",Rs());pn(this,"options",this.setOptions);pn(this,"parse",this.parseMarkdown(!0));pn(this,"parseInline",this.parseMarkdown(!1));pn(this,"Parser",xr);pn(this,"Renderer",ci);pn(this,"TextRenderer",Is);pn(this,"Lexer",kr);pn(this,"Tokenizer",ai);pn(this,"Hooks",$t);this.use(...s)}walkTokens(s,i){var a,c;let u=[];for(let p of s)switch(u=u.concat(i.call(this,p)),p.type){case"table":{let m=p;for(let h of m.header)u=u.concat(this.walkTokens(h.tokens,i));for(let h of m.rows)for(let k of h)u=u.concat(this.walkTokens(k.tokens,i));break}case"list":{let m=p;u=u.concat(this.walkTokens(m.items,i));break}default:{let m=p;(c=(a=this.defaults.extensions)==null?void 0:a.childTokens)!=null&&c[m.type]?this.defaults.extensions.childTokens[m.type].forEach(h=>{let k=m[h].flat(1/0);u=u.concat(this.walkTokens(k,i))}):m.tokens&&(u=u.concat(this.walkTokens(m.tokens,i)))}}return u}use(...s){let i=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(u=>{let a={...u};if(a.async=this.defaults.async||a.async||!1,u.extensions&&(u.extensions.forEach(c=>{if(!c.name)throw new Error("extension name required");if("renderer"in c){let p=i.renderers[c.name];p?i.renderers[c.name]=function(...m){let h=c.renderer.apply(this,m);return h===!1&&(h=p.apply(this,m)),h}:i.renderers[c.name]=c.renderer}if("tokenizer"in c){if(!c.level||c.level!=="block"&&c.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let p=i[c.level];p?p.unshift(c.tokenizer):i[c.level]=[c.tokenizer],c.start&&(c.level==="block"?i.startBlock?i.startBlock.push(c.start):i.startBlock=[c.start]:c.level==="inline"&&(i.startInline?i.startInline.push(c.start):i.startInline=[c.start]))}"childTokens"in c&&c.childTokens&&(i.childTokens[c.name]=c.childTokens)}),a.extensions=i),u.renderer){let c=this.defaults.renderer||new ci(this.defaults);for(let p in u.renderer){if(!(p in c))throw new Error(`renderer '${p}' does not exist`);if(["options","parser"].includes(p))continue;let m=p,h=u.renderer[m],k=c[m];c[m]=(...y)=>{let L=h.apply(c,y);return L===!1&&(L=k.apply(c,y)),L||""}}a.renderer=c}if(u.tokenizer){let c=this.defaults.tokenizer||new ai(this.defaults);for(let p in u.tokenizer){if(!(p in c))throw new Error(`tokenizer '${p}' does not exist`);if(["options","rules","lexer"].includes(p))continue;let m=p,h=u.tokenizer[m],k=c[m];c[m]=(...y)=>{let L=h.apply(c,y);return L===!1&&(L=k.apply(c,y)),L}}a.tokenizer=c}if(u.hooks){let c=this.defaults.hooks||new $t;for(let p in u.hooks){if(!(p in c))throw new Error(`hook '${p}' does not exist`);if(["options","block"].includes(p))continue;let m=p,h=u.hooks[m],k=c[m];$t.passThroughHooks.has(p)?c[m]=y=>{if(this.defaults.async&&$t.passThroughHooksRespectAsync.has(p))return(async()=>{let R=await h.call(c,y);return k.call(c,R)})();let L=h.call(c,y);return k.call(c,L)}:c[m]=(...y)=>{if(this.defaults.async)return(async()=>{let R=await h.apply(c,y);return R===!1&&(R=await k.apply(c,y)),R})();let L=h.apply(c,y);return L===!1&&(L=k.apply(c,y)),L}}a.hooks=c}if(u.walkTokens){let c=this.defaults.walkTokens,p=u.walkTokens;a.walkTokens=function(m){let h=[];return h.push(p.call(this,m)),c&&(h=h.concat(c.call(this,m))),h}}this.defaults={...this.defaults,...a}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,i){return kr.lex(s,i??this.defaults)}parser(s,i){return xr.parse(s,i??this.defaults)}parseMarkdown(s){return(i,u)=>{let a={...u},c={...this.defaults,...a},p=this.onError(!!c.silent,!!c.async);if(this.defaults.async===!0&&a.async===!1)return p(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(c.hooks&&(c.hooks.options=c,c.hooks.block=s),c.async)return(async()=>{let m=c.hooks?await c.hooks.preprocess(i):i,h=await(c.hooks?await c.hooks.provideLexer():s?kr.lex:kr.lexInline)(m,c),k=c.hooks?await c.hooks.processAllTokens(h):h;c.walkTokens&&await Promise.all(this.walkTokens(k,c.walkTokens));let y=await(c.hooks?await c.hooks.provideParser():s?xr.parse:xr.parseInline)(k,c);return c.hooks?await c.hooks.postprocess(y):y})().catch(p);try{c.hooks&&(i=c.hooks.preprocess(i));let m=(c.hooks?c.hooks.provideLexer():s?kr.lex:kr.lexInline)(i,c);c.hooks&&(m=c.hooks.processAllTokens(m)),c.walkTokens&&this.walkTokens(m,c.walkTokens);let h=(c.hooks?c.hooks.provideParser():s?xr.parse:xr.parseInline)(m,c);return c.hooks&&(h=c.hooks.postprocess(h)),h}catch(m){return p(m)}}}onError(s,i){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,s){let a="<p>An error occurred:</p><pre>"+zr(u.message+"",!0)+"</pre>";return i?Promise.resolve(a):a}if(i)return Promise.reject(u);throw u}}},Ee=new Gm;function un(s,i){return Ee.parse(s,i)}un.options=un.setOptions=function(s){return Ee.setOptions(s),un.defaults=Ee.defaults,df(un.defaults),un};un.getDefaults=Rs;un.defaults=Ce;un.use=function(...s){return Ee.use(...s),un.defaults=Ee.defaults,df(un.defaults),un};un.walkTokens=function(s,i){return Ee.walkTokens(s,i)};un.parseInline=Ee.parseInline;un.Parser=xr;un.parser=xr.parse;un.Renderer=ci;un.TextRenderer=Is;un.Lexer=kr;un.lexer=kr.lex;un.Tokenizer=ai;un.Hooks=$t;un.parse=un;un.options;un.setOptions;un.use;un.walkTokens;un.parseInline;xr.parse;kr.lex;un.setOptions({breaks:!1,gfm:!0});function Zm(s){const i=s.split(`
`);let u=-1;for(let a=0;a<i.length;a++)if(/^\s*JSX:/.test(i[a])){let c=a;for(let p=a-1;p>=0;p--)if(/^##\s/.test(i[p].trim())){c=p;break}u=c;break}return u<=0?{before:s,after:""}:{before:i.slice(0,u).join(`
`),after:i.slice(u).join(`
`)}}function Ym(s){return s.split(`
`).map(i=>i.replace(/^ {1,5}/,"")).join(`
`)}function bc({markdown:s}){const i=D.useMemo(()=>{const u=Ym(s);return un.parse(u)},[s]);return X.jsx("div",{className:"prose-content",dangerouslySetInnerHTML:{__html:i}})}function bm({component:s}){return X.jsxs("div",{style:{margin:"40px -24px",borderTop:`1px solid ${Y.border}`,borderBottom:`1px solid ${Y.border}`,background:Y.bg},children:[X.jsx("div",{style:{padding:"12px 24px 4px",fontSize:11,color:Y.accentDim,fontFamily:wr.mono,letterSpacing:1,textTransform:"uppercase"},children:"인터랙티브 시각화"}),X.jsx(D.Suspense,{fallback:X.jsx("div",{style:{padding:40,textAlign:"center",color:Y.textDim,fontFamily:wr.mono,fontSize:12},children:"불러오는 중…"}),children:X.jsx(s,{})})]})}function ng({currentSlug:s}){const i=oe.findIndex(c=>c.slug===s),u=i>0?oe[i-1]:null,a=i<oe.length-1?oe[i+1]:null;return X.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",marginTop:40,borderTop:`1px solid ${Y.border}`,fontFamily:wr.mono,fontSize:12},children:[u?X.jsxs(si,{to:`/${u.slug}`,style:{color:Y.textDim,textDecoration:"none",transition:"color 0.2s"},children:["← ",u.id,". ",u.title]}):X.jsx("span",{}),a?X.jsxs(si,{to:`/${a.slug}`,style:{color:Y.textDim,textDecoration:"none",transition:"color 0.2s"},children:[a.id,". ",a.title," →"]}):X.jsx("span",{})]})}function rg({chapter:s}){const{before:i,after:u}=D.useMemo(()=>Zm(s.md),[s.md]);return X.jsxs("div",{style:{minHeight:"100vh",background:Y.bg,color:Y.text},children:[X.jsx("div",{style:{padding:"60px 24px 24px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)"},children:X.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[X.jsx("div",{style:{fontSize:13,color:Y.accentDim,fontFamily:wr.mono,marginBottom:8,letterSpacing:1},children:s.id!=="A"?`제${s.id}장`:"부록"}),X.jsx("h1",{style:{fontFamily:wr.serif,fontSize:32,color:Y.accent,margin:0,letterSpacing:1,lineHeight:1.3},children:s.title})]})}),X.jsx("div",{style:{padding:"24px 24px 48px"},children:X.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[X.jsx(bc,{markdown:i}),s.viz&&X.jsx(bm,{component:s.viz}),u&&X.jsx(bc,{markdown:u}),X.jsx(ng,{currentSlug:s.slug})]})})]})}function eg(){return X.jsx("div",{style:{minHeight:"100vh",background:Y.bg,display:"flex",alignItems:"center",justifyContent:"center",color:Y.textDim,fontFamily:wr.mono,fontSize:13},children:"불러오는 중…"})}function tg(){const[s,i]=D.useState(null);return oe.filter(u=>!u.id.includes("z")&&u.id!=="A"),oe.filter(u=>u.id==="A"),X.jsxs("div",{style:{minHeight:"100vh",background:Y.bg,color:Y.text,fontFamily:wr.mono},children:[X.jsxs("div",{style:{padding:"60px 24px 32px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)",textAlign:"center"},children:[X.jsx("h1",{style:{fontFamily:wr.serif,fontSize:36,color:Y.accent,marginBottom:6,letterSpacing:2},children:"情報幾何學"}),X.jsx("p",{style:{color:Y.textDim,fontSize:13,marginBottom:4},children:"정보기하학 — 확률분포의 기하학적 구조"}),X.jsx("p",{style:{color:Y.textMuted,fontSize:11},children:"인터랙티브 교재 · Interactive Textbook"})]}),X.jsx("div",{style:{padding:"0 24px 48px"},children:X.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:X.jsx("div",{style:{display:"grid",gap:8},children:oe.map((u,a)=>{const c=u.id.includes("z"),p=u.id==="A";return X.jsxs(si,{to:`/${u.slug}`,onMouseEnter:()=>i(a),onMouseLeave:()=>i(null),style:{display:"flex",alignItems:"center",gap:14,padding:c?"10px 20px 10px 40px":"12px 20px",borderRadius:8,background:s===a?Y.cardHover:c?"transparent":Y.card,border:`1px solid ${s===a?Y.accentDim:c?"transparent":Y.border}`,textDecoration:"none",transition:"all 0.2s",cursor:"pointer"},children:[X.jsx("span",{style:{fontSize:c?14:18,fontWeight:700,color:c?Y.dual:p?Y.textDim:Y.accent,fontFamily:wr.serif,minWidth:c?32:40,textAlign:"center"},children:c?"∿":u.id}),X.jsx("div",{style:{flex:1},children:X.jsx("div",{style:{fontSize:c?12:14,color:s===a?Y.accent:c?Y.textDim:Y.text,fontWeight:c?400:600,fontStyle:c?"italic":"normal"},children:u.title})}),u.viz&&X.jsx("span",{style:{fontSize:9,color:Y.accentDim,fontFamily:wr.mono,padding:"2px 6px",borderRadius:4,background:Y.accentSoft},children:"VIZ"}),X.jsx("span",{style:{fontSize:14,color:s===a?Y.accent:Y.textMuted,transition:"all 0.2s",transform:s===a?"translateX(3px)":"none"},children:"→"})]},u.slug)})})})})]})}function lg(){return Wt().pathname==="/"?null:X.jsx(si,{to:"/",style:{position:"fixed",top:12,left:12,zIndex:1e3,padding:"6px 14px",borderRadius:6,background:"rgba(17,24,39,0.9)",border:`1px solid ${Y.border}`,color:Y.textDim,fontSize:11,fontFamily:wr.mono,textDecoration:"none",backdropFilter:"blur(8px)",transition:"color 0.2s"},children:"← 목차"})}function ig(){return X.jsxs(Ah,{children:[X.jsx(lg,{}),X.jsx(D.Suspense,{fallback:X.jsx(eg,{}),children:X.jsxs(Ch,{children:[X.jsx(gs,{path:"/",element:X.jsx(tg,{})}),oe.map(s=>X.jsx(gs,{path:`/${s.slug}`,element:X.jsx(rg,{chapter:s})},s.slug))]})})]})}Nd.createRoot(document.getElementById("root")).render(X.jsx(ig,{}));export{Y as C,ag as a,sg as c,wr as f,ug as i,X as j,D as r};
