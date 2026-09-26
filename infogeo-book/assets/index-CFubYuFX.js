const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ch01-why-Dp_g0P51.js","assets/components-B63Pqsrv.js","assets/ch02-point-nsRFPZRA.js","assets/ch03-distance-1cKcjAy5.js","assets/math-utils-DGi4yakc.js","assets/log-DdVtvOM5.js","assets/linear-CLpKbB_F.js","assets/max-C7l7KFzs.js","assets/ch04-paths-Cu5eD91d.js","assets/ch05-surprise-and-information-B9oFo2p1.js","assets/ch06-convex-duality-gsLGhJOY.js","assets/ch07-exponential-family-flashcards-CvtvEXyV.js","assets/range-OtVwhkKS.js","assets/ch08-curved-land-DnyFJy-7.js","assets/ch09-fisher-information-QD5bkcvL.js","assets/ch10-ignorance-confidence-C9n-dO3e.js","assets/ch11-geometry-of-inference-TPeHqIAS.js","assets/ch12-convergence-B7X1pRlw.js","assets/ch13-full-map-BaZp5sWS.js","assets/ch14-diffusion-BlnsNwjY.js","assets/ch15-flow-matching-BNbdGnNu.js","assets/ch16-broadening-narrowing-ANh-SHKq.js","assets/ch17-scaling-H6LWbEyY.js"])))=>i.map(i=>d[i]);
var um=Object.defineProperty;var cm=(a,t,r)=>t in a?um(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var je=(a,t,r)=>cm(a,typeof t!="symbol"?t+"":t,r);function pm(a,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in a)){const u=Object.getOwnPropertyDescriptor(o,i);u&&Object.defineProperty(a,i,u.get?u:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function r(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(i){if(i.ep)return;i.ep=!0;const u=r(i);fetch(i.href,u)}})();function fm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ys={exports:{}},_a={},ws={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function dm(){if(Ap)return Le;Ap=1;var a=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),p=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),k=Symbol.iterator;function L(A){return A===null||typeof A!="object"?null:(A=k&&A[k]||A["@@iterator"],typeof A=="function"?A:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,C={};function F(A,I,xe){this.props=A,this.context=I,this.refs=C,this.updater=xe||E}F.prototype.isReactComponent={},F.prototype.setState=function(A,I){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,I,"setState")},F.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function P(){}P.prototype=F.prototype;function V(A,I,xe){this.props=A,this.context=I,this.refs=C,this.updater=xe||E}var Z=V.prototype=new P;Z.constructor=V,K(Z,F.prototype),Z.isPureReactComponent=!0;var re=Array.isArray,ue=Object.prototype.hasOwnProperty,ce={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ge(A,I,xe){var _e,Me={},Te=null,Fe=null;if(I!=null)for(_e in I.ref!==void 0&&(Fe=I.ref),I.key!==void 0&&(Te=""+I.key),I)ue.call(I,_e)&&!me.hasOwnProperty(_e)&&(Me[_e]=I[_e]);var Ne=arguments.length-2;if(Ne===1)Me.children=xe;else if(1<Ne){for(var De=Array(Ne),_t=0;_t<Ne;_t++)De[_t]=arguments[_t+2];Me.children=De}if(A&&A.defaultProps)for(_e in Ne=A.defaultProps,Ne)Me[_e]===void 0&&(Me[_e]=Ne[_e]);return{$$typeof:a,type:A,key:Te,ref:Fe,props:Me,_owner:ce.current}}function Ee(A,I){return{$$typeof:a,type:A.type,key:I,ref:A.ref,props:A.props,_owner:A._owner}}function Ae(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function it(A){var I={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(xe){return I[xe]})}var Be=/\/+/g;function Qe(A,I){return typeof A=="object"&&A!==null&&A.key!=null?it(""+A.key):I.toString(36)}function rt(A,I,xe,_e,Me){var Te=typeof A;(Te==="undefined"||Te==="boolean")&&(A=null);var Fe=!1;if(A===null)Fe=!0;else switch(Te){case"string":case"number":Fe=!0;break;case"object":switch(A.$$typeof){case a:case t:Fe=!0}}if(Fe)return Fe=A,Me=Me(Fe),A=_e===""?"."+Qe(Fe,0):_e,re(Me)?(xe="",A!=null&&(xe=A.replace(Be,"$&/")+"/"),rt(Me,I,xe,"",function(_t){return _t})):Me!=null&&(Ae(Me)&&(Me=Ee(Me,xe+(!Me.key||Fe&&Fe.key===Me.key?"":(""+Me.key).replace(Be,"$&/")+"/")+A)),I.push(Me)),1;if(Fe=0,_e=_e===""?".":_e+":",re(A))for(var Ne=0;Ne<A.length;Ne++){Te=A[Ne];var De=_e+Qe(Te,Ne);Fe+=rt(Te,I,xe,De,Me)}else if(De=L(A),typeof De=="function")for(A=De.call(A),Ne=0;!(Te=A.next()).done;)Te=Te.value,De=_e+Qe(Te,Ne++),Fe+=rt(Te,I,xe,De,Me);else if(Te==="object")throw I=String(A),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Fe}function at(A,I,xe){if(A==null)return A;var _e=[],Me=0;return rt(A,_e,"","",function(Te){return I.call(xe,Te,Me++)}),_e}function Ye(A){if(A._status===-1){var I=A._result;I=I(),I.then(function(xe){(A._status===0||A._status===-1)&&(A._status=1,A._result=xe)},function(xe){(A._status===0||A._status===-1)&&(A._status=2,A._result=xe)}),A._status===-1&&(A._status=0,A._result=I)}if(A._status===1)return A._result.default;throw A._result}var Oe={current:null},Y={transition:null},pe={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Y,ReactCurrentOwner:ce};function J(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:at,forEach:function(A,I,xe){at(A,function(){I.apply(this,arguments)},xe)},count:function(A){var I=0;return at(A,function(){I++}),I},toArray:function(A){return at(A,function(I){return I})||[]},only:function(A){if(!Ae(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Le.Component=F,Le.Fragment=r,Le.Profiler=i,Le.PureComponent=V,Le.StrictMode=o,Le.Suspense=x,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Le.act=J,Le.cloneElement=function(A,I,xe){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var _e=K({},A.props),Me=A.key,Te=A.ref,Fe=A._owner;if(I!=null){if(I.ref!==void 0&&(Te=I.ref,Fe=ce.current),I.key!==void 0&&(Me=""+I.key),A.type&&A.type.defaultProps)var Ne=A.type.defaultProps;for(De in I)ue.call(I,De)&&!me.hasOwnProperty(De)&&(_e[De]=I[De]===void 0&&Ne!==void 0?Ne[De]:I[De])}var De=arguments.length-2;if(De===1)_e.children=xe;else if(1<De){Ne=Array(De);for(var _t=0;_t<De;_t++)Ne[_t]=arguments[_t+2];_e.children=Ne}return{$$typeof:a,type:A.type,key:Me,ref:Te,props:_e,_owner:Fe}},Le.createContext=function(A){return A={$$typeof:p,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},Le.createElement=ge,Le.createFactory=function(A){var I=ge.bind(null,A);return I.type=A,I},Le.createRef=function(){return{current:null}},Le.forwardRef=function(A){return{$$typeof:d,render:A}},Le.isValidElement=Ae,Le.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:Ye}},Le.memo=function(A,I){return{$$typeof:g,type:A,compare:I===void 0?null:I}},Le.startTransition=function(A){var I=Y.transition;Y.transition={};try{A()}finally{Y.transition=I}},Le.unstable_act=J,Le.useCallback=function(A,I){return Oe.current.useCallback(A,I)},Le.useContext=function(A){return Oe.current.useContext(A)},Le.useDebugValue=function(){},Le.useDeferredValue=function(A){return Oe.current.useDeferredValue(A)},Le.useEffect=function(A,I){return Oe.current.useEffect(A,I)},Le.useId=function(){return Oe.current.useId()},Le.useImperativeHandle=function(A,I,xe){return Oe.current.useImperativeHandle(A,I,xe)},Le.useInsertionEffect=function(A,I){return Oe.current.useInsertionEffect(A,I)},Le.useLayoutEffect=function(A,I){return Oe.current.useLayoutEffect(A,I)},Le.useMemo=function(A,I){return Oe.current.useMemo(A,I)},Le.useReducer=function(A,I,xe){return Oe.current.useReducer(A,I,xe)},Le.useRef=function(A){return Oe.current.useRef(A)},Le.useState=function(A){return Oe.current.useState(A)},Le.useSyncExternalStore=function(A,I,xe){return Oe.current.useSyncExternalStore(A,I,xe)},Le.useTransition=function(){return Oe.current.useTransition()},Le.version="18.3.1",Le}var Fp;function mu(){return Fp||(Fp=1,ws.exports=dm()),ws.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function hm(){if(Cp)return _a;Cp=1;var a=mu(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function p(d,x,g){var y,k={},L=null,E=null;g!==void 0&&(L=""+g),x.key!==void 0&&(L=""+x.key),x.ref!==void 0&&(E=x.ref);for(y in x)o.call(x,y)&&!u.hasOwnProperty(y)&&(k[y]=x[y]);if(d&&d.defaultProps)for(y in x=d.defaultProps,x)k[y]===void 0&&(k[y]=x[y]);return{$$typeof:t,type:d,key:L,ref:E,props:k,_owner:i.current}}return _a.Fragment=r,_a.jsx=p,_a.jsxs=p,_a}var Np;function mm(){return Np||(Np=1,ys.exports=hm()),ys.exports}var oe=mm(),Xl={},ks={exports:{}},Ht={},Ss={exports:{}},_s={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function xm(){return Rp||(Rp=1,(function(a){function t(Y,pe){var J=Y.length;Y.push(pe);e:for(;0<J;){var A=J-1>>>1,I=Y[A];if(0<i(I,pe))Y[A]=pe,Y[J]=I,J=A;else break e}}function r(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var pe=Y[0],J=Y.pop();if(J!==pe){Y[0]=J;e:for(var A=0,I=Y.length,xe=I>>>1;A<xe;){var _e=2*(A+1)-1,Me=Y[_e],Te=_e+1,Fe=Y[Te];if(0>i(Me,J))Te<I&&0>i(Fe,Me)?(Y[A]=Fe,Y[Te]=J,A=Te):(Y[A]=Me,Y[_e]=J,A=_e);else if(Te<I&&0>i(Fe,J))Y[A]=Fe,Y[Te]=J,A=Te;else break e}}return pe}function i(Y,pe){var J=Y.sortIndex-pe.sortIndex;return J!==0?J:Y.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var p=Date,d=p.now();a.unstable_now=function(){return p.now()-d}}var x=[],g=[],y=1,k=null,L=3,E=!1,K=!1,C=!1,F=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(Y){for(var pe=r(g);pe!==null;){if(pe.callback===null)o(g);else if(pe.startTime<=Y)o(g),pe.sortIndex=pe.expirationTime,t(x,pe);else break;pe=r(g)}}function re(Y){if(C=!1,Z(Y),!K)if(r(x)!==null)K=!0,Ye(ue);else{var pe=r(g);pe!==null&&Oe(re,pe.startTime-Y)}}function ue(Y,pe){K=!1,C&&(C=!1,P(ge),ge=-1),E=!0;var J=L;try{for(Z(pe),k=r(x);k!==null&&(!(k.expirationTime>pe)||Y&&!it());){var A=k.callback;if(typeof A=="function"){k.callback=null,L=k.priorityLevel;var I=A(k.expirationTime<=pe);pe=a.unstable_now(),typeof I=="function"?k.callback=I:k===r(x)&&o(x),Z(pe)}else o(x);k=r(x)}if(k!==null)var xe=!0;else{var _e=r(g);_e!==null&&Oe(re,_e.startTime-pe),xe=!1}return xe}finally{k=null,L=J,E=!1}}var ce=!1,me=null,ge=-1,Ee=5,Ae=-1;function it(){return!(a.unstable_now()-Ae<Ee)}function Be(){if(me!==null){var Y=a.unstable_now();Ae=Y;var pe=!0;try{pe=me(!0,Y)}finally{pe?Qe():(ce=!1,me=null)}}else ce=!1}var Qe;if(typeof V=="function")Qe=function(){V(Be)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,at=rt.port2;rt.port1.onmessage=Be,Qe=function(){at.postMessage(null)}}else Qe=function(){F(Be,0)};function Ye(Y){me=Y,ce||(ce=!0,Qe())}function Oe(Y,pe){ge=F(function(){Y(a.unstable_now())},pe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_continueExecution=function(){K||E||(K=!0,Ye(ue))},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return L},a.unstable_getFirstCallbackNode=function(){return r(x)},a.unstable_next=function(Y){switch(L){case 1:case 2:case 3:var pe=3;break;default:pe=L}var J=L;L=pe;try{return Y()}finally{L=J}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(Y,pe){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var J=L;L=Y;try{return pe()}finally{L=J}},a.unstable_scheduleCallback=function(Y,pe,J){var A=a.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?A+J:A):J=A,Y){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=J+I,Y={id:y++,callback:pe,priorityLevel:Y,startTime:J,expirationTime:I,sortIndex:-1},J>A?(Y.sortIndex=J,t(g,Y),r(x)===null&&Y===r(g)&&(C?(P(ge),ge=-1):C=!0,Oe(re,J-A))):(Y.sortIndex=I,t(x,Y),K||E||(K=!0,Ye(ue))),Y},a.unstable_shouldYield=it,a.unstable_wrapCallback=function(Y){var pe=L;return function(){var J=L;L=pe;try{return Y.apply(this,arguments)}finally{L=J}}}})(_s)),_s}var Kp;function gm(){return Kp||(Kp=1,Ss.exports=xm()),Ss.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function vm(){if(Dp)return Ht;Dp=1;var a=mu(),t=gm();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,l=1;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,i={};function u(e,n){p(e,n),p(e+"Capture",n)}function p(e,n){for(i[e]=n,e=0;e<n.length;e++)o.add(n[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},k={};function L(e){return x.call(k,e)?!0:x.call(y,e)?!1:g.test(e)?k[e]=!0:(y[e]=!0,!1)}function E(e,n,l,s){if(l!==null&&l.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:l!==null?!l.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,n,l,s){if(n===null||typeof n>"u"||E(e,n,l,s))return!0;if(s)return!1;if(l!==null)switch(l.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(e,n,l,s,c,h,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=c,this.mustUseProperty=l,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=b}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];F[n]=new C(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(P,V);F[n]=new C(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(P,V);F[n]=new C(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(P,V);F[n]=new C(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function Z(e,n,l,s){var c=F.hasOwnProperty(n)?F[n]:null;(c!==null?c.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(K(n,l,c,s)&&(l=null),s||c===null?L(n)&&(l===null?e.removeAttribute(n):e.setAttribute(n,""+l)):c.mustUseProperty?e[c.propertyName]=l===null?c.type===3?!1:"":l:(n=c.attributeName,s=c.attributeNamespace,l===null?e.removeAttribute(n):(c=c.type,l=c===3||c===4&&l===!0?"":""+l,s?e.setAttributeNS(s,n,l):e.setAttribute(n,l))))}var re=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ce=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),Ae=Symbol.for("react.provider"),it=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),rt=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),Y=Symbol.iterator;function pe(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,A;function I(e){if(A===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return`
`+A+e}var xe=!1;function _e(e,n){if(!e||xe)return"";xe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(D){var s=D}Reflect.construct(e,[],n)}else{try{n.call()}catch(D){s=D}e.call(n.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var c=D.stack.split(`
`),h=s.stack.split(`
`),b=c.length-1,S=h.length-1;1<=b&&0<=S&&c[b]!==h[S];)S--;for(;1<=b&&0<=S;b--,S--)if(c[b]!==h[S]){if(b!==1||S!==1)do if(b--,S--,0>S||c[b]!==h[S]){var M=`
`+c[b].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=b&&0<=S);break}}}finally{xe=!1,Error.prepareStackTrace=l}return(e=e?e.displayName||e.name:"")?I(e):""}function Me(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=_e(e.type,!1),e;case 11:return e=_e(e.type.render,!1),e;case 1:return e=_e(e.type,!0),e;default:return""}}function Te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case ce:return"Portal";case Ee:return"Profiler";case ge:return"StrictMode";case Qe:return"Suspense";case rt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case it:return(e.displayName||"Context")+".Consumer";case Ae:return(e._context.displayName||"Context")+".Provider";case Be:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case at:return n=e.displayName||null,n!==null?n:Te(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Te(e(n))}catch{}}return null}function Fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(n);case 8:return n===ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Ne(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _t(e){var n=De(e)?"checked":"value",l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,h=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=_t(e))}function C0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),s="";return e&&(s=De(e)?e.checked?"true":"false":e.value),e=s,e!==l?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wn(e,n){var l=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??e._wrapperState.initialChecked})}function Ba(e,n){var l=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;l=Ne(n.value!=null?n.value:l),e._wrapperState={initialChecked:s,initialValue:l,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Pa(e,n){n=n.checked,n!=null&&Z(e,"checked",n,!1)}function N0(e,n){Pa(e,n);var l=Ne(n.value),s=n.type;if(l!=null)s==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+l):e.value!==""+l&&(e.value=""+l);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Qr(e,n.type,l):n.hasOwnProperty("defaultValue")&&Qr(e,n.type,Ne(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function R0(e,n,l){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,l||n===e.value||(e.value=n),e.defaultValue=n}l=e.name,l!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,l!==""&&(e.name=l)}function Qr(e,n,l){(n!=="number"||Tn(e.ownerDocument)!==e)&&(l==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+l&&(e.defaultValue=""+l))}var gn=Array.isArray;function Xn(e,n,l,s){if(e=e.options,n){n={};for(var c=0;c<l.length;c++)n["$"+l[c]]=!0;for(l=0;l<e.length;l++)c=n.hasOwnProperty("$"+e[l].value),e[l].selected!==c&&(e[l].selected=c),c&&s&&(e[l].defaultSelected=!0)}else{for(l=""+Ne(l),n=null,c=0;c<e.length;c++){if(e[c].value===l){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function K0(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yr(e,n){var l=n.value;if(l==null){if(l=n.children,n=n.defaultValue,l!=null){if(n!=null)throw Error(r(92));if(gn(l)){if(1<l.length)throw Error(r(93));l=l[0]}n=l}n==null&&(n=""),l=n}e._wrapperState={initialValue:Ne(l)}}function D0(e,n){var l=Ne(n.value),s=Ne(n.defaultValue);l!=null&&(l=""+l,l!==e.value&&(e.value=l),n.defaultValue==null&&e.defaultValue!==l&&(e.defaultValue=l)),s!=null&&(e.defaultValue=""+s)}function I0(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Oa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function B0(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Oa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qn,Tr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,l,s,c){MSApp.execUnsafeLocalFunction(function(){return e(n,l,s,c)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qn=qn||document.createElement("div"),qn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function P0(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var O0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dd=["Webkit","ms","Moz","O"];Object.keys(O0).forEach(function(e){dd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),O0[n]=O0[e]})});function Uu(e,n,l){return n==null||typeof n=="boolean"||n===""?"":l||typeof n!="number"||n===0||O0.hasOwnProperty(e)&&O0[e]?(""+n).trim():n+"px"}function Gu(e,n){e=e.style;for(var l in n)if(n.hasOwnProperty(l)){var s=l.indexOf("--")===0,c=Uu(l,n[l],s);l==="float"&&(l="cssFloat"),s?e.setProperty(l,c):e[l]=c}}var hd=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(hd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Co(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var No=null;function Ro(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ko=null,Jr=null,e0=null;function Wu(e){if(e=ua(e)){if(typeof Ko!="function")throw Error(r(280));var n=e.stateNode;n&&(n=cl(n),Ko(e.stateNode,e.type,n))}}function Xu(e){Jr?e0?e0.push(e):e0=[e]:Jr=e}function Zu(){if(Jr){var e=Jr,n=e0;if(e0=Jr=null,Wu(e),n)for(e=0;e<n.length;e++)Wu(n[e])}}function Qu(e,n){return e(n)}function Yu(){}var Do=!1;function Ju(e,n,l){if(Do)return e(n,l);Do=!0;try{return Qu(e,n,l)}finally{Do=!1,(Jr!==null||e0!==null)&&(Yu(),Zu())}}function H0(e,n){var l=e.stateNode;if(l===null)return null;var s=cl(l);if(s===null)return null;l=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,n,typeof l));return l}var Io=!1;if(d)try{var j0={};Object.defineProperty(j0,"passive",{get:function(){Io=!0}}),window.addEventListener("test",j0,j0),window.removeEventListener("test",j0,j0)}catch{Io=!1}function md(e,n,l,s,c,h,b,S,M){var D=Array.prototype.slice.call(arguments,3);try{n.apply(l,D)}catch(H){this.onError(H)}}var V0=!1,Ha=null,ja=!1,Bo=null,xd={onError:function(e){V0=!0,Ha=e}};function gd(e,n,l,s,c,h,b,S,M){V0=!1,Ha=null,md.apply(xd,arguments)}function vd(e,n,l,s,c,h,b,S,M){if(gd.apply(this,arguments),V0){if(V0){var D=Ha;V0=!1,Ha=null}else throw Error(r(198));ja||(ja=!0,Bo=D)}}function qr(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function e1(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function t1(e){if(qr(e)!==e)throw Error(r(188))}function bd(e){var n=e.alternate;if(!n){if(n=qr(e),n===null)throw Error(r(188));return n!==e?null:e}for(var l=e,s=n;;){var c=l.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){l=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===l)return t1(c),e;if(h===s)return t1(c),n;h=h.sibling}throw Error(r(188))}if(l.return!==s.return)l=c,s=h;else{for(var b=!1,S=c.child;S;){if(S===l){b=!0,l=c,s=h;break}if(S===s){b=!0,s=c,l=h;break}S=S.sibling}if(!b){for(S=h.child;S;){if(S===l){b=!0,l=h,s=c;break}if(S===s){b=!0,s=h,l=c;break}S=S.sibling}if(!b)throw Error(r(189))}}if(l.alternate!==s)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:n}function n1(e){return e=bd(e),e!==null?r1(e):null}function r1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=r1(e);if(n!==null)return n;e=e.sibling}return null}var a1=t.unstable_scheduleCallback,l1=t.unstable_cancelCallback,yd=t.unstable_shouldYield,wd=t.unstable_requestPaint,st=t.unstable_now,kd=t.unstable_getCurrentPriorityLevel,Po=t.unstable_ImmediatePriority,o1=t.unstable_UserBlockingPriority,Va=t.unstable_NormalPriority,Sd=t.unstable_LowPriority,i1=t.unstable_IdlePriority,$a=null,vn=null;function _d(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Ed,Ld=Math.log,zd=Math.LN2;function Ed(e){return e>>>=0,e===0?32:31-(Ld(e)/zd|0)|0}var Ua=64,Ga=4194304;function $0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wa(e,n){var l=e.pendingLanes;if(l===0)return 0;var s=0,c=e.suspendedLanes,h=e.pingedLanes,b=l&268435455;if(b!==0){var S=b&~c;S!==0?s=$0(S):(h&=b,h!==0&&(s=$0(h)))}else b=l&~c,b!==0?s=$0(b):h!==0&&(s=$0(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&c)===0&&(c=s&-s,h=n&-n,c>=h||c===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=l&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)l=31-sn(n),c=1<<l,s|=e[l],n&=~c;return s}function Md(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,n){for(var l=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes;0<h;){var b=31-sn(h),S=1<<b,M=c[b];M===-1?((S&l)===0||(S&s)!==0)&&(c[b]=Md(S,n)):M<=n&&(e.expiredLanes|=S),h&=~S}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function s1(){var e=Ua;return Ua<<=1,(Ua&4194240)===0&&(Ua=64),e}function Ho(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function U0(e,n,l){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-sn(n),e[n]=l}function qd(e,n){var l=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<l;){var c=31-sn(l),h=1<<c;n[c]=0,s[c]=-1,e[c]=-1,l&=~h}}function jo(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var s=31-sn(l),c=1<<s;c&n|e[s]&n&&(e[s]|=n),l&=~c}}var He=0;function u1(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var c1,Vo,p1,f1,d1,$o=!1,Xa=[],Zn=null,Qn=null,Yn=null,G0=new Map,W0=new Map,Jn=[],Ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function h1(e,n){switch(e){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":G0.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":W0.delete(n.pointerId)}}function X0(e,n,l,s,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:l,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},n!==null&&(n=ua(n),n!==null&&Vo(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Fd(e,n,l,s,c){switch(n){case"focusin":return Zn=X0(Zn,e,n,l,s,c),!0;case"dragenter":return Qn=X0(Qn,e,n,l,s,c),!0;case"mouseover":return Yn=X0(Yn,e,n,l,s,c),!0;case"pointerover":var h=c.pointerId;return G0.set(h,X0(G0.get(h)||null,e,n,l,s,c)),!0;case"gotpointercapture":return h=c.pointerId,W0.set(h,X0(W0.get(h)||null,e,n,l,s,c)),!0}return!1}function m1(e){var n=Ar(e.target);if(n!==null){var l=qr(n);if(l!==null){if(n=l.tag,n===13){if(n=e1(l),n!==null){e.blockedOn=n,d1(e.priority,function(){p1(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Za(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=Go(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(l===null){l=e.nativeEvent;var s=new l.constructor(l.type,l);No=s,l.target.dispatchEvent(s),No=null}else return n=ua(l),n!==null&&Vo(n),e.blockedOn=l,!1;n.shift()}return!0}function x1(e,n,l){Za(e)&&l.delete(n)}function Cd(){$o=!1,Zn!==null&&Za(Zn)&&(Zn=null),Qn!==null&&Za(Qn)&&(Qn=null),Yn!==null&&Za(Yn)&&(Yn=null),G0.forEach(x1),W0.forEach(x1)}function Z0(e,n){e.blockedOn===n&&(e.blockedOn=null,$o||($o=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Cd)))}function Q0(e){function n(c){return Z0(c,e)}if(0<Xa.length){Z0(Xa[0],e);for(var l=1;l<Xa.length;l++){var s=Xa[l];s.blockedOn===e&&(s.blockedOn=null)}}for(Zn!==null&&Z0(Zn,e),Qn!==null&&Z0(Qn,e),Yn!==null&&Z0(Yn,e),G0.forEach(n),W0.forEach(n),l=0;l<Jn.length;l++)s=Jn[l],s.blockedOn===e&&(s.blockedOn=null);for(;0<Jn.length&&(l=Jn[0],l.blockedOn===null);)m1(l),l.blockedOn===null&&Jn.shift()}var t0=re.ReactCurrentBatchConfig,Qa=!0;function Nd(e,n,l,s){var c=He,h=t0.transition;t0.transition=null;try{He=1,Uo(e,n,l,s)}finally{He=c,t0.transition=h}}function Rd(e,n,l,s){var c=He,h=t0.transition;t0.transition=null;try{He=4,Uo(e,n,l,s)}finally{He=c,t0.transition=h}}function Uo(e,n,l,s){if(Qa){var c=Go(e,n,l,s);if(c===null)ci(e,n,s,Ya,l),h1(e,s);else if(Fd(c,e,n,l,s))s.stopPropagation();else if(h1(e,s),n&4&&-1<Ad.indexOf(e)){for(;c!==null;){var h=ua(c);if(h!==null&&c1(h),h=Go(e,n,l,s),h===null&&ci(e,n,s,Ya,l),h===c)break;c=h}c!==null&&s.stopPropagation()}else ci(e,n,s,null,l)}}var Ya=null;function Go(e,n,l,s){if(Ya=null,e=Ro(s),e=Ar(e),e!==null)if(n=qr(e),n===null)e=null;else if(l=n.tag,l===13){if(e=e1(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ya=e,null}function g1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kd()){case Po:return 1;case o1:return 4;case Va:case Sd:return 16;case i1:return 536870912;default:return 16}default:return 16}}var er=null,Wo=null,Ja=null;function v1(){if(Ja)return Ja;var e,n=Wo,l=n.length,s,c="value"in er?er.value:er.textContent,h=c.length;for(e=0;e<l&&n[e]===c[e];e++);var b=l-e;for(s=1;s<=b&&n[l-s]===c[h-s];s++);return Ja=c.slice(e,1<s?1-s:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function b1(){return!1}function Vt(e){function n(l,s,c,h,b){this._reactName=l,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(l=e[S],this[S]=l?l(h):h[S]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?tl:b1,this.isPropagationStopped=b1,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var n0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=Vt(n0),Y0=J({},n0,{view:0,detail:0}),Kd=Vt(Y0),Zo,Qo,J0,nl=J({},Y0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==J0&&(J0&&e.type==="mousemove"?(Zo=e.screenX-J0.screenX,Qo=e.screenY-J0.screenY):Qo=Zo=0,J0=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:Qo}}),y1=Vt(nl),Dd=J({},nl,{dataTransfer:0}),Id=Vt(Dd),Bd=J({},Y0,{relatedTarget:0}),Yo=Vt(Bd),Pd=J({},n0,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=Vt(Pd),Hd=J({},n0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jd=Vt(Hd),Vd=J({},n0,{data:0}),w1=Vt(Vd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gd[e])?!!n[e]:!1}function Jo(){return Wd}var Xd=J({},Y0,{key:function(e){if(e.key){var n=$d[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jo,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Vt(Xd),Qd=J({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k1=Vt(Qd),Yd=J({},Y0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jo}),Jd=Vt(Yd),eh=J({},n0,{propertyName:0,elapsedTime:0,pseudoElement:0}),th=Vt(eh),nh=J({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rh=Vt(nh),ah=[9,13,27,32],ei=d&&"CompositionEvent"in window,ea=null;d&&"documentMode"in document&&(ea=document.documentMode);var lh=d&&"TextEvent"in window&&!ea,S1=d&&(!ei||ea&&8<ea&&11>=ea),_1=" ",L1=!1;function z1(e,n){switch(e){case"keyup":return ah.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var r0=!1;function oh(e,n){switch(e){case"compositionend":return E1(n);case"keypress":return n.which!==32?null:(L1=!0,_1);case"textInput":return e=n.data,e===_1&&L1?null:e;default:return null}}function ih(e,n){if(r0)return e==="compositionend"||!ei&&z1(e,n)?(e=v1(),Ja=Wo=er=null,r0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return S1&&n.locale!=="ko"?null:n.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function M1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sh[e.type]:n==="textarea"}function T1(e,n,l,s){Xu(s),n=il(n,"onChange"),0<n.length&&(l=new Xo("onChange","change",null,l,s),e.push({event:l,listeners:n}))}var ta=null,na=null;function uh(e){G1(e,0)}function rl(e){var n=s0(e);if(C0(n))return e}function ch(e,n){if(e==="change")return n}var q1=!1;if(d){var ti;if(d){var ni="oninput"in document;if(!ni){var A1=document.createElement("div");A1.setAttribute("oninput","return;"),ni=typeof A1.oninput=="function"}ti=ni}else ti=!1;q1=ti&&(!document.documentMode||9<document.documentMode)}function F1(){ta&&(ta.detachEvent("onpropertychange",C1),na=ta=null)}function C1(e){if(e.propertyName==="value"&&rl(na)){var n=[];T1(n,na,e,Ro(e)),Ju(uh,n)}}function ph(e,n,l){e==="focusin"?(F1(),ta=n,na=l,ta.attachEvent("onpropertychange",C1)):e==="focusout"&&F1()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(na)}function dh(e,n){if(e==="click")return rl(n)}function hh(e,n){if(e==="input"||e==="change")return rl(n)}function mh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var un=typeof Object.is=="function"?Object.is:mh;function ra(e,n){if(un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),s=Object.keys(n);if(l.length!==s.length)return!1;for(s=0;s<l.length;s++){var c=l[s];if(!x.call(n,c)||!un(e[c],n[c]))return!1}return!0}function N1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function R1(e,n){var l=N1(e);e=0;for(var s;l;){if(l.nodeType===3){if(s=e+l.textContent.length,e<=n&&s>=n)return{node:l,offset:n-e};e=s}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=N1(l)}}function K1(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?K1(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function D1(){for(var e=window,n=Tn();n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=Tn(e.document)}return n}function ri(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xh(e){var n=D1(),l=e.focusedElem,s=e.selectionRange;if(n!==l&&l&&l.ownerDocument&&K1(l.ownerDocument.documentElement,l)){if(s!==null&&ri(l)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in l)l.selectionStart=n,l.selectionEnd=Math.min(e,l.value.length);else if(e=(n=l.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=l.textContent.length,h=Math.min(s.start,c);s=s.end===void 0?h:Math.min(s.end,c),!e.extend&&h>s&&(c=s,s=h,h=c),c=R1(l,h);var b=R1(l,s);c&&b&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),h>s?(e.addRange(n),e.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),e.addRange(n)))}}for(n=[],e=l;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<n.length;l++)e=n[l],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gh=d&&"documentMode"in document&&11>=document.documentMode,a0=null,ai=null,aa=null,li=!1;function I1(e,n,l){var s=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;li||a0==null||a0!==Tn(s)||(s=a0,"selectionStart"in s&&ri(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),aa&&ra(aa,s)||(aa=s,s=il(ai,"onSelect"),0<s.length&&(n=new Xo("onSelect","select",null,n,l),e.push({event:n,listeners:s}),n.target=a0)))}function al(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var l0={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},oi={},B1={};d&&(B1=document.createElement("div").style,"AnimationEvent"in window||(delete l0.animationend.animation,delete l0.animationiteration.animation,delete l0.animationstart.animation),"TransitionEvent"in window||delete l0.transitionend.transition);function ll(e){if(oi[e])return oi[e];if(!l0[e])return e;var n=l0[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in B1)return oi[e]=n[l];return e}var P1=ll("animationend"),O1=ll("animationiteration"),H1=ll("animationstart"),j1=ll("transitionend"),V1=new Map,$1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,n){V1.set(e,n),u(n,[e])}for(var ii=0;ii<$1.length;ii++){var si=$1[ii],vh=si.toLowerCase(),bh=si[0].toUpperCase()+si.slice(1);tr(vh,"on"+bh)}tr(P1,"onAnimationEnd"),tr(O1,"onAnimationIteration"),tr(H1,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(j1,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yh=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function U1(e,n,l){var s=e.type||"unknown-event";e.currentTarget=l,vd(s,n,void 0,e),e.currentTarget=null}function G1(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var s=e[l],c=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var b=s.length-1;0<=b;b--){var S=s[b],M=S.instance,D=S.currentTarget;if(S=S.listener,M!==h&&c.isPropagationStopped())break e;U1(c,S,D),h=M}else for(b=0;b<s.length;b++){if(S=s[b],M=S.instance,D=S.currentTarget,S=S.listener,M!==h&&c.isPropagationStopped())break e;U1(c,S,D),h=M}}}if(ja)throw e=Bo,ja=!1,Bo=null,e}function Ue(e,n){var l=n[xi];l===void 0&&(l=n[xi]=new Set);var s=e+"__bubble";l.has(s)||(W1(n,e,2,!1),l.add(s))}function ui(e,n,l){var s=0;n&&(s|=4),W1(l,e,s,n)}var ol="_reactListening"+Math.random().toString(36).slice(2);function oa(e){if(!e[ol]){e[ol]=!0,o.forEach(function(l){l!=="selectionchange"&&(yh.has(l)||ui(l,!1,e),ui(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ol]||(n[ol]=!0,ui("selectionchange",!1,n))}}function W1(e,n,l,s){switch(g1(n)){case 1:var c=Nd;break;case 4:c=Rd;break;default:c=Uo}l=c.bind(null,n,l,e),c=void 0,!Io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,l,{capture:!0,passive:c}):e.addEventListener(n,l,!0):c!==void 0?e.addEventListener(n,l,{passive:c}):e.addEventListener(n,l,!1)}function ci(e,n,l,s,c){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var b=s.tag;if(b===3||b===4){var S=s.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(b===4)for(b=s.return;b!==null;){var M=b.tag;if((M===3||M===4)&&(M=b.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;b=b.return}for(;S!==null;){if(b=Ar(S),b===null)return;if(M=b.tag,M===5||M===6){s=h=b;continue e}S=S.parentNode}}s=s.return}Ju(function(){var D=h,H=Ro(l),$=[];e:{var O=V1.get(e);if(O!==void 0){var te=Xo,le=e;switch(e){case"keypress":if(el(l)===0)break e;case"keydown":case"keyup":te=Zd;break;case"focusin":le="focus",te=Yo;break;case"focusout":le="blur",te=Yo;break;case"beforeblur":case"afterblur":te=Yo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=y1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Jd;break;case P1:case O1:case H1:te=Od;break;case j1:te=th;break;case"scroll":te=Kd;break;case"wheel":te=rh;break;case"copy":case"cut":case"paste":te=jd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=k1}var ie=(n&4)!==0,ut=!ie&&e==="scroll",N=ie?O!==null?O+"Capture":null:O;ie=[];for(var q=D,R;q!==null;){R=q;var W=R.stateNode;if(R.tag===5&&W!==null&&(R=W,N!==null&&(W=H0(q,N),W!=null&&ie.push(ia(q,W,R)))),ut)break;q=q.return}0<ie.length&&(O=new te(O,le,null,l,H),$.push({event:O,listeners:ie}))}}if((n&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",O&&l!==No&&(le=l.relatedTarget||l.fromElement)&&(Ar(le)||le[An]))break e;if((te||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,te?(le=l.relatedTarget||l.toElement,te=D,le=le?Ar(le):null,le!==null&&(ut=qr(le),le!==ut||le.tag!==5&&le.tag!==6)&&(le=null)):(te=null,le=D),te!==le)){if(ie=y1,W="onMouseLeave",N="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ie=k1,W="onPointerLeave",N="onPointerEnter",q="pointer"),ut=te==null?O:s0(te),R=le==null?O:s0(le),O=new ie(W,q+"leave",te,l,H),O.target=ut,O.relatedTarget=R,W=null,Ar(H)===D&&(ie=new ie(N,q+"enter",le,l,H),ie.target=R,ie.relatedTarget=ut,W=ie),ut=W,te&&le)t:{for(ie=te,N=le,q=0,R=ie;R;R=o0(R))q++;for(R=0,W=N;W;W=o0(W))R++;for(;0<q-R;)ie=o0(ie),q--;for(;0<R-q;)N=o0(N),R--;for(;q--;){if(ie===N||N!==null&&ie===N.alternate)break t;ie=o0(ie),N=o0(N)}ie=null}else ie=null;te!==null&&X1($,O,te,ie,!1),le!==null&&ut!==null&&X1($,ut,le,ie,!0)}}e:{if(O=D?s0(D):window,te=O.nodeName&&O.nodeName.toLowerCase(),te==="select"||te==="input"&&O.type==="file")var se=ch;else if(M1(O))if(q1)se=hh;else{se=fh;var fe=ph}else(te=O.nodeName)&&te.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(se=dh);if(se&&(se=se(e,D))){T1($,se,l,H);break e}fe&&fe(e,O,D),e==="focusout"&&(fe=O._wrapperState)&&fe.controlled&&O.type==="number"&&Qr(O,"number",O.value)}switch(fe=D?s0(D):window,e){case"focusin":(M1(fe)||fe.contentEditable==="true")&&(a0=fe,ai=D,aa=null);break;case"focusout":aa=ai=a0=null;break;case"mousedown":li=!0;break;case"contextmenu":case"mouseup":case"dragend":li=!1,I1($,l,H);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":I1($,l,H)}var de;if(ei)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else r0?z1(e,l)&&(be="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(be="onCompositionStart");be&&(S1&&l.locale!=="ko"&&(r0||be!=="onCompositionStart"?be==="onCompositionEnd"&&r0&&(de=v1()):(er=H,Wo="value"in er?er.value:er.textContent,r0=!0)),fe=il(D,be),0<fe.length&&(be=new w1(be,e,null,l,H),$.push({event:be,listeners:fe}),de?be.data=de:(de=E1(l),de!==null&&(be.data=de)))),(de=lh?oh(e,l):ih(e,l))&&(D=il(D,"onBeforeInput"),0<D.length&&(H=new w1("onBeforeInput","beforeinput",null,l,H),$.push({event:H,listeners:D}),H.data=de))}G1($,n)})}function ia(e,n,l){return{instance:e,listener:n,currentTarget:l}}function il(e,n){for(var l=n+"Capture",s=[];e!==null;){var c=e,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=H0(e,l),h!=null&&s.unshift(ia(e,h,c)),h=H0(e,n),h!=null&&s.push(ia(e,h,c))),e=e.return}return s}function o0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function X1(e,n,l,s,c){for(var h=n._reactName,b=[];l!==null&&l!==s;){var S=l,M=S.alternate,D=S.stateNode;if(M!==null&&M===s)break;S.tag===5&&D!==null&&(S=D,c?(M=H0(l,h),M!=null&&b.unshift(ia(l,M,S))):c||(M=H0(l,h),M!=null&&b.push(ia(l,M,S)))),l=l.return}b.length!==0&&e.push({event:n,listeners:b})}var wh=/\r\n?/g,kh=/\u0000|\uFFFD/g;function Z1(e){return(typeof e=="string"?e:""+e).replace(wh,`
`).replace(kh,"")}function sl(e,n,l){if(n=Z1(n),Z1(e)!==n&&l)throw Error(r(425))}function ul(){}var pi=null,fi=null;function di(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hi=typeof setTimeout=="function"?setTimeout:void 0,Sh=typeof clearTimeout=="function"?clearTimeout:void 0,Q1=typeof Promise=="function"?Promise:void 0,_h=typeof queueMicrotask=="function"?queueMicrotask:typeof Q1<"u"?function(e){return Q1.resolve(null).then(e).catch(Lh)}:hi;function Lh(e){setTimeout(function(){throw e})}function mi(e,n){var l=n,s=0;do{var c=l.nextSibling;if(e.removeChild(l),c&&c.nodeType===8)if(l=c.data,l==="/$"){if(s===0){e.removeChild(c),Q0(n);return}s--}else l!=="$"&&l!=="$?"&&l!=="$!"||s++;l=c}while(l);Q0(n)}function nr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Y1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"){if(n===0)return e;n--}else l==="/$"&&n++}e=e.previousSibling}return null}var i0=Math.random().toString(36).slice(2),bn="__reactFiber$"+i0,sa="__reactProps$"+i0,An="__reactContainer$"+i0,xi="__reactEvents$"+i0,zh="__reactListeners$"+i0,Eh="__reactHandles$"+i0;function Ar(e){var n=e[bn];if(n)return n;for(var l=e.parentNode;l;){if(n=l[An]||l[bn]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=Y1(e);e!==null;){if(l=e[bn])return l;e=Y1(e)}return n}e=l,l=e.parentNode}return null}function ua(e){return e=e[bn]||e[An],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function s0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function cl(e){return e[sa]||null}var gi=[],u0=-1;function rr(e){return{current:e}}function Ge(e){0>u0||(e.current=gi[u0],gi[u0]=null,u0--)}function $e(e,n){u0++,gi[u0]=e.current,e.current=n}var ar={},Lt=rr(ar),Dt=rr(!1),Fr=ar;function c0(e,n){var l=e.type.contextTypes;if(!l)return ar;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in l)c[h]=n[h];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function It(e){return e=e.childContextTypes,e!=null}function pl(){Ge(Dt),Ge(Lt)}function J1(e,n,l){if(Lt.current!==ar)throw Error(r(168));$e(Lt,n),$e(Dt,l)}function ec(e,n,l){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return l;s=s.getChildContext();for(var c in s)if(!(c in n))throw Error(r(108,Fe(e)||"Unknown",c));return J({},l,s)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ar,Fr=Lt.current,$e(Lt,e),$e(Dt,Dt.current),!0}function tc(e,n,l){var s=e.stateNode;if(!s)throw Error(r(169));l?(e=ec(e,n,Fr),s.__reactInternalMemoizedMergedChildContext=e,Ge(Dt),Ge(Lt),$e(Lt,e)):Ge(Dt),$e(Dt,l)}var Fn=null,dl=!1,vi=!1;function nc(e){Fn===null?Fn=[e]:Fn.push(e)}function Mh(e){dl=!0,nc(e)}function lr(){if(!vi&&Fn!==null){vi=!0;var e=0,n=He;try{var l=Fn;for(He=1;e<l.length;e++){var s=l[e];do s=s(!0);while(s!==null)}Fn=null,dl=!1}catch(c){throw Fn!==null&&(Fn=Fn.slice(e+1)),a1(Po,lr),c}finally{He=n,vi=!1}}return null}var p0=[],f0=0,hl=null,ml=0,Yt=[],Jt=0,Cr=null,Cn=1,Nn="";function Nr(e,n){p0[f0++]=ml,p0[f0++]=hl,hl=e,ml=n}function rc(e,n,l){Yt[Jt++]=Cn,Yt[Jt++]=Nn,Yt[Jt++]=Cr,Cr=e;var s=Cn;e=Nn;var c=32-sn(s)-1;s&=~(1<<c),l+=1;var h=32-sn(n)+c;if(30<h){var b=c-c%5;h=(s&(1<<b)-1).toString(32),s>>=b,c-=b,Cn=1<<32-sn(n)+c|l<<c|s,Nn=h+e}else Cn=1<<h|l<<c|s,Nn=e}function bi(e){e.return!==null&&(Nr(e,1),rc(e,1,0))}function yi(e){for(;e===hl;)hl=p0[--f0],p0[f0]=null,ml=p0[--f0],p0[f0]=null;for(;e===Cr;)Cr=Yt[--Jt],Yt[Jt]=null,Nn=Yt[--Jt],Yt[Jt]=null,Cn=Yt[--Jt],Yt[Jt]=null}var $t=null,Ut=null,We=!1,cn=null;function ac(e,n){var l=rn(5,null,null,0);l.elementType="DELETED",l.stateNode=n,l.return=e,n=e.deletions,n===null?(e.deletions=[l],e.flags|=16):n.push(l)}function lc(e,n){switch(e.tag){case 5:var l=e.type;return n=n.nodeType!==1||l.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$t=e,Ut=nr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$t=e,Ut=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(l=Cr!==null?{id:Cn,overflow:Nn}:null,e.memoizedState={dehydrated:n,treeContext:l,retryLane:1073741824},l=rn(18,null,null,0),l.stateNode=n,l.return=e,e.child=l,$t=e,Ut=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(We){var n=Ut;if(n){var l=n;if(!lc(e,n)){if(wi(e))throw Error(r(418));n=nr(l.nextSibling);var s=$t;n&&lc(e,n)?ac(s,l):(e.flags=e.flags&-4097|2,We=!1,$t=e)}}else{if(wi(e))throw Error(r(418));e.flags=e.flags&-4097|2,We=!1,$t=e}}}function oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function xl(e){if(e!==$t)return!1;if(!We)return oc(e),We=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!di(e.type,e.memoizedProps)),n&&(n=Ut)){if(wi(e))throw ic(),Error(r(418));for(;n;)ac(e,n),n=nr(n.nextSibling)}if(oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"){if(n===0){Ut=nr(e.nextSibling);break e}n--}else l!=="$"&&l!=="$!"&&l!=="$?"||n++}e=e.nextSibling}Ut=null}}else Ut=$t?nr(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Ut;e;)e=nr(e.nextSibling)}function d0(){Ut=$t=null,We=!1}function Si(e){cn===null?cn=[e]:cn.push(e)}var Th=re.ReactCurrentBatchConfig;function ca(e,n,l){if(e=l.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(r(309));var s=l.stateNode}if(!s)throw Error(r(147,e));var c=s,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(b){var S=c.refs;b===null?delete S[h]:S[h]=b},n._stringRef=h,n)}if(typeof e!="string")throw Error(r(284));if(!l._owner)throw Error(r(290,e))}return e}function gl(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function sc(e){var n=e._init;return n(e._payload)}function uc(e){function n(N,q){if(e){var R=N.deletions;R===null?(N.deletions=[q],N.flags|=16):R.push(q)}}function l(N,q){if(!e)return null;for(;q!==null;)n(N,q),q=q.sibling;return null}function s(N,q){for(N=new Map;q!==null;)q.key!==null?N.set(q.key,q):N.set(q.index,q),q=q.sibling;return N}function c(N,q){return N=dr(N,q),N.index=0,N.sibling=null,N}function h(N,q,R){return N.index=R,e?(R=N.alternate,R!==null?(R=R.index,R<q?(N.flags|=2,q):R):(N.flags|=2,q)):(N.flags|=1048576,q)}function b(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,q,R,W){return q===null||q.tag!==6?(q=hs(R,N.mode,W),q.return=N,q):(q=c(q,R),q.return=N,q)}function M(N,q,R,W){var se=R.type;return se===me?H(N,q,R.props.children,W,R.key):q!==null&&(q.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Ye&&sc(se)===q.type)?(W=c(q,R.props),W.ref=ca(N,q,R),W.return=N,W):(W=Ol(R.type,R.key,R.props,null,N.mode,W),W.ref=ca(N,q,R),W.return=N,W)}function D(N,q,R,W){return q===null||q.tag!==4||q.stateNode.containerInfo!==R.containerInfo||q.stateNode.implementation!==R.implementation?(q=ms(R,N.mode,W),q.return=N,q):(q=c(q,R.children||[]),q.return=N,q)}function H(N,q,R,W,se){return q===null||q.tag!==7?(q=Hr(R,N.mode,W,se),q.return=N,q):(q=c(q,R),q.return=N,q)}function $(N,q,R){if(typeof q=="string"&&q!==""||typeof q=="number")return q=hs(""+q,N.mode,R),q.return=N,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case ue:return R=Ol(q.type,q.key,q.props,null,N.mode,R),R.ref=ca(N,null,q),R.return=N,R;case ce:return q=ms(q,N.mode,R),q.return=N,q;case Ye:var W=q._init;return $(N,W(q._payload),R)}if(gn(q)||pe(q))return q=Hr(q,N.mode,R,null),q.return=N,q;gl(N,q)}return null}function O(N,q,R,W){var se=q!==null?q.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return se!==null?null:S(N,q,""+R,W);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ue:return R.key===se?M(N,q,R,W):null;case ce:return R.key===se?D(N,q,R,W):null;case Ye:return se=R._init,O(N,q,se(R._payload),W)}if(gn(R)||pe(R))return se!==null?null:H(N,q,R,W,null);gl(N,R)}return null}function te(N,q,R,W,se){if(typeof W=="string"&&W!==""||typeof W=="number")return N=N.get(R)||null,S(q,N,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ue:return N=N.get(W.key===null?R:W.key)||null,M(q,N,W,se);case ce:return N=N.get(W.key===null?R:W.key)||null,D(q,N,W,se);case Ye:var fe=W._init;return te(N,q,R,fe(W._payload),se)}if(gn(W)||pe(W))return N=N.get(R)||null,H(q,N,W,se,null);gl(q,W)}return null}function le(N,q,R,W){for(var se=null,fe=null,de=q,be=q=0,wt=null;de!==null&&be<R.length;be++){de.index>be?(wt=de,de=null):wt=de.sibling;var Re=O(N,de,R[be],W);if(Re===null){de===null&&(de=wt);break}e&&de&&Re.alternate===null&&n(N,de),q=h(Re,q,be),fe===null?se=Re:fe.sibling=Re,fe=Re,de=wt}if(be===R.length)return l(N,de),We&&Nr(N,be),se;if(de===null){for(;be<R.length;be++)de=$(N,R[be],W),de!==null&&(q=h(de,q,be),fe===null?se=de:fe.sibling=de,fe=de);return We&&Nr(N,be),se}for(de=s(N,de);be<R.length;be++)wt=te(de,N,be,R[be],W),wt!==null&&(e&&wt.alternate!==null&&de.delete(wt.key===null?be:wt.key),q=h(wt,q,be),fe===null?se=wt:fe.sibling=wt,fe=wt);return e&&de.forEach(function(hr){return n(N,hr)}),We&&Nr(N,be),se}function ie(N,q,R,W){var se=pe(R);if(typeof se!="function")throw Error(r(150));if(R=se.call(R),R==null)throw Error(r(151));for(var fe=se=null,de=q,be=q=0,wt=null,Re=R.next();de!==null&&!Re.done;be++,Re=R.next()){de.index>be?(wt=de,de=null):wt=de.sibling;var hr=O(N,de,Re.value,W);if(hr===null){de===null&&(de=wt);break}e&&de&&hr.alternate===null&&n(N,de),q=h(hr,q,be),fe===null?se=hr:fe.sibling=hr,fe=hr,de=wt}if(Re.done)return l(N,de),We&&Nr(N,be),se;if(de===null){for(;!Re.done;be++,Re=R.next())Re=$(N,Re.value,W),Re!==null&&(q=h(Re,q,be),fe===null?se=Re:fe.sibling=Re,fe=Re);return We&&Nr(N,be),se}for(de=s(N,de);!Re.done;be++,Re=R.next())Re=te(de,N,be,Re.value,W),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?be:Re.key),q=h(Re,q,be),fe===null?se=Re:fe.sibling=Re,fe=Re);return e&&de.forEach(function(sm){return n(N,sm)}),We&&Nr(N,be),se}function ut(N,q,R,W){if(typeof R=="object"&&R!==null&&R.type===me&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ue:e:{for(var se=R.key,fe=q;fe!==null;){if(fe.key===se){if(se=R.type,se===me){if(fe.tag===7){l(N,fe.sibling),q=c(fe,R.props.children),q.return=N,N=q;break e}}else if(fe.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Ye&&sc(se)===fe.type){l(N,fe.sibling),q=c(fe,R.props),q.ref=ca(N,fe,R),q.return=N,N=q;break e}l(N,fe);break}else n(N,fe);fe=fe.sibling}R.type===me?(q=Hr(R.props.children,N.mode,W,R.key),q.return=N,N=q):(W=Ol(R.type,R.key,R.props,null,N.mode,W),W.ref=ca(N,q,R),W.return=N,N=W)}return b(N);case ce:e:{for(fe=R.key;q!==null;){if(q.key===fe)if(q.tag===4&&q.stateNode.containerInfo===R.containerInfo&&q.stateNode.implementation===R.implementation){l(N,q.sibling),q=c(q,R.children||[]),q.return=N,N=q;break e}else{l(N,q);break}else n(N,q);q=q.sibling}q=ms(R,N.mode,W),q.return=N,N=q}return b(N);case Ye:return fe=R._init,ut(N,q,fe(R._payload),W)}if(gn(R))return le(N,q,R,W);if(pe(R))return ie(N,q,R,W);gl(N,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,q!==null&&q.tag===6?(l(N,q.sibling),q=c(q,R),q.return=N,N=q):(l(N,q),q=hs(R,N.mode,W),q.return=N,N=q),b(N)):l(N,q)}return ut}var h0=uc(!0),cc=uc(!1),vl=rr(null),bl=null,m0=null,_i=null;function Li(){_i=m0=bl=null}function zi(e){var n=vl.current;Ge(vl),e._currentValue=n}function Ei(e,n,l){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===l)break;e=e.return}}function x0(e,n){bl=e,_i=m0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Bt=!0),e.firstContext=null)}function en(e){var n=e._currentValue;if(_i!==e)if(e={context:e,memoizedValue:n,next:null},m0===null){if(bl===null)throw Error(r(308));m0=e,bl.dependencies={lanes:0,firstContext:e}}else m0=m0.next=e;return n}var Rr=null;function Mi(e){Rr===null?Rr=[e]:Rr.push(e)}function pc(e,n,l,s){var c=n.interleaved;return c===null?(l.next=l,Mi(n)):(l.next=c.next,c.next=l),n.interleaved=l,Rn(e,s)}function Rn(e,n){e.lanes|=n;var l=e.alternate;for(l!==null&&(l.lanes|=n),l=e,e=e.return;e!==null;)e.childLanes|=n,l=e.alternate,l!==null&&(l.childLanes|=n),l=e,e=e.return;return l.tag===3?l.stateNode:null}var or=!1;function Ti(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ir(e,n,l){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,Rn(e,l)}return c=s.interleaved,c===null?(n.next=n,Mi(s)):(n.next=c.next,c.next=n),s.interleaved=n,Rn(e,l)}function yl(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,l|=s,n.lanes=l,jo(e,l)}}function dc(e,n){var l=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,l===s)){var c=null,h=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};h===null?c=h=b:h=h.next=b,l=l.next}while(l!==null);h===null?c=h=n:h=h.next=n}else c=h=n;l={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,effects:s.effects},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}function wl(e,n,l,s){var c=e.updateQueue;or=!1;var h=c.firstBaseUpdate,b=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var M=S,D=M.next;M.next=null,b===null?h=D:b.next=D,b=M;var H=e.alternate;H!==null&&(H=H.updateQueue,S=H.lastBaseUpdate,S!==b&&(S===null?H.firstBaseUpdate=D:S.next=D,H.lastBaseUpdate=M))}if(h!==null){var $=c.baseState;b=0,H=D=M=null,S=h;do{var O=S.lane,te=S.eventTime;if((s&O)===O){H!==null&&(H=H.next={eventTime:te,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var le=e,ie=S;switch(O=n,te=l,ie.tag){case 1:if(le=ie.payload,typeof le=="function"){$=le.call(te,$,O);break e}$=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ie.payload,O=typeof le=="function"?le.call(te,$,O):le,O==null)break e;$=J({},$,O);break e;case 2:or=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,O=c.effects,O===null?c.effects=[S]:O.push(S))}else te={eventTime:te,lane:O,tag:S.tag,payload:S.payload,callback:S.callback,next:null},H===null?(D=H=te,M=$):H=H.next=te,b|=O;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;O=S,S=O.next,O.next=null,c.lastBaseUpdate=O,c.shared.pending=null}}while(!0);if(H===null&&(M=$),c.baseState=M,c.firstBaseUpdate=D,c.lastBaseUpdate=H,n=c.shared.interleaved,n!==null){c=n;do b|=c.lane,c=c.next;while(c!==n)}else h===null&&(c.shared.lanes=0);Ir|=b,e.lanes=b,e.memoizedState=$}}function hc(e,n,l){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],c=s.callback;if(c!==null){if(s.callback=null,s=l,typeof c!="function")throw Error(r(191,c));c.call(s)}}}var pa={},yn=rr(pa),fa=rr(pa),da=rr(pa);function Kr(e){if(e===pa)throw Error(r(174));return e}function qi(e,n){switch($e(da,n),$e(fa,e),$e(yn,pa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:B0(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=B0(n,e)}Ge(yn),$e(yn,n)}function g0(){Ge(yn),Ge(fa),Ge(da)}function mc(e){Kr(da.current);var n=Kr(yn.current),l=B0(n,e.type);n!==l&&($e(fa,e),$e(yn,l))}function Ai(e){fa.current===e&&(Ge(yn),Ge(fa))}var Je=rr(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function Ci(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var Sl=re.ReactCurrentDispatcher,Ni=re.ReactCurrentBatchConfig,Dr=0,et=null,mt=null,bt=null,_l=!1,ha=!1,ma=0,qh=0;function zt(){throw Error(r(321))}function Ri(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!un(e[l],n[l]))return!1;return!0}function Ki(e,n,l,s,c,h){if(Dr=h,et=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Sl.current=e===null||e.memoizedState===null?Nh:Rh,e=l(s,c),ha){h=0;do{if(ha=!1,ma=0,25<=h)throw Error(r(301));h+=1,bt=mt=null,n.updateQueue=null,Sl.current=Kh,e=l(s,c)}while(ha)}if(Sl.current=El,n=mt!==null&&mt.next!==null,Dr=0,bt=mt=et=null,_l=!1,n)throw Error(r(300));return e}function Di(){var e=ma!==0;return ma=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?et.memoizedState=bt=e:bt=bt.next=e,bt}function tn(){if(mt===null){var e=et.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var n=bt===null?et.memoizedState:bt.next;if(n!==null)bt=n,mt=e;else{if(e===null)throw Error(r(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},bt===null?et.memoizedState=bt=e:bt=bt.next=e}return bt}function xa(e,n){return typeof n=="function"?n(e):n}function Ii(e){var n=tn(),l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var s=mt,c=s.baseQueue,h=l.pending;if(h!==null){if(c!==null){var b=c.next;c.next=h.next,h.next=b}s.baseQueue=c=h,l.pending=null}if(c!==null){h=c.next,s=s.baseState;var S=b=null,M=null,D=h;do{var H=D.lane;if((Dr&H)===H)M!==null&&(M=M.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var $={lane:H,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};M===null?(S=M=$,b=s):M=M.next=$,et.lanes|=H,Ir|=H}D=D.next}while(D!==null&&D!==h);M===null?b=s:M.next=S,un(s,n.memoizedState)||(Bt=!0),n.memoizedState=s,n.baseState=b,n.baseQueue=M,l.lastRenderedState=s}if(e=l.interleaved,e!==null){c=e;do h=c.lane,et.lanes|=h,Ir|=h,c=c.next;while(c!==e)}else c===null&&(l.lanes=0);return[n.memoizedState,l.dispatch]}function Bi(e){var n=tn(),l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var s=l.dispatch,c=l.pending,h=n.memoizedState;if(c!==null){l.pending=null;var b=c=c.next;do h=e(h,b.action),b=b.next;while(b!==c);un(h,n.memoizedState)||(Bt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),l.lastRenderedState=h}return[h,s]}function xc(){}function gc(e,n){var l=et,s=tn(),c=n(),h=!un(s.memoizedState,c);if(h&&(s.memoizedState=c,Bt=!0),s=s.queue,Pi(yc.bind(null,l,s,e),[e]),s.getSnapshot!==n||h||bt!==null&&bt.memoizedState.tag&1){if(l.flags|=2048,ga(9,bc.bind(null,l,s,c,n),void 0,null),yt===null)throw Error(r(349));(Dr&30)!==0||vc(l,n,c)}return c}function vc(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=et.updateQueue,n===null?(n={lastEffect:null,stores:null},et.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function bc(e,n,l,s){n.value=l,n.getSnapshot=s,wc(n)&&kc(e)}function yc(e,n,l){return l(function(){wc(n)&&kc(e)})}function wc(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!un(e,l)}catch{return!0}}function kc(e){var n=Rn(e,1);n!==null&&hn(n,e,1,-1)}function Sc(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},n.queue=e,e=e.dispatch=Ch.bind(null,et,e),[n.memoizedState,e]}function ga(e,n,l,s){return e={tag:e,create:n,destroy:l,deps:s,next:null},n=et.updateQueue,n===null?(n={lastEffect:null,stores:null},et.updateQueue=n,n.lastEffect=e.next=e):(l=n.lastEffect,l===null?n.lastEffect=e.next=e:(s=l.next,l.next=e,e.next=s,n.lastEffect=e)),e}function _c(){return tn().memoizedState}function Ll(e,n,l,s){var c=wn();et.flags|=e,c.memoizedState=ga(1|n,l,void 0,s===void 0?null:s)}function zl(e,n,l,s){var c=tn();s=s===void 0?null:s;var h=void 0;if(mt!==null){var b=mt.memoizedState;if(h=b.destroy,s!==null&&Ri(s,b.deps)){c.memoizedState=ga(n,l,h,s);return}}et.flags|=e,c.memoizedState=ga(1|n,l,h,s)}function Lc(e,n){return Ll(8390656,8,e,n)}function Pi(e,n){return zl(2048,8,e,n)}function zc(e,n){return zl(4,2,e,n)}function Ec(e,n){return zl(4,4,e,n)}function Mc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tc(e,n,l){return l=l!=null?l.concat([e]):null,zl(4,4,Mc.bind(null,n,e),l)}function Oi(){}function qc(e,n){var l=tn();n=n===void 0?null:n;var s=l.memoizedState;return s!==null&&n!==null&&Ri(n,s[1])?s[0]:(l.memoizedState=[e,n],e)}function Ac(e,n){var l=tn();n=n===void 0?null:n;var s=l.memoizedState;return s!==null&&n!==null&&Ri(n,s[1])?s[0]:(e=e(),l.memoizedState=[e,n],e)}function Fc(e,n,l){return(Dr&21)===0?(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=l):(un(l,n)||(l=s1(),et.lanes|=l,Ir|=l,e.baseState=!0),n)}function Ah(e,n){var l=He;He=l!==0&&4>l?l:4,e(!0);var s=Ni.transition;Ni.transition={};try{e(!1),n()}finally{He=l,Ni.transition=s}}function Cc(){return tn().memoizedState}function Fh(e,n,l){var s=pr(e);if(l={lane:s,action:l,hasEagerState:!1,eagerState:null,next:null},Nc(e))Rc(n,l);else if(l=pc(e,n,l,s),l!==null){var c=At();hn(l,e,s,c),Kc(l,n,s)}}function Ch(e,n,l){var s=pr(e),c={lane:s,action:l,hasEagerState:!1,eagerState:null,next:null};if(Nc(e))Rc(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var b=n.lastRenderedState,S=h(b,l);if(c.hasEagerState=!0,c.eagerState=S,un(S,b)){var M=n.interleaved;M===null?(c.next=c,Mi(n)):(c.next=M.next,M.next=c),n.interleaved=c;return}}catch{}finally{}l=pc(e,n,c,s),l!==null&&(c=At(),hn(l,e,s,c),Kc(l,n,s))}}function Nc(e){var n=e.alternate;return e===et||n!==null&&n===et}function Rc(e,n){ha=_l=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function Kc(e,n,l){if((l&4194240)!==0){var s=n.lanes;s&=e.pendingLanes,l|=s,n.lanes=l,jo(e,l)}}var El={readContext:en,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},Nh={readContext:en,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:en,useEffect:Lc,useImperativeHandle:function(e,n,l){return l=l!=null?l.concat([e]):null,Ll(4194308,4,Mc.bind(null,n,e),l)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ll(4,2,e,n)},useMemo:function(e,n){var l=wn();return n=n===void 0?null:n,e=e(),l.memoizedState=[e,n],e},useReducer:function(e,n,l){var s=wn();return n=l!==void 0?l(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Fh.bind(null,et,e),[s.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:Sc,useDebugValue:Oi,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Sc(!1),n=e[0];return e=Ah.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,l){var s=et,c=wn();if(We){if(l===void 0)throw Error(r(407));l=l()}else{if(l=n(),yt===null)throw Error(r(349));(Dr&30)!==0||vc(s,n,l)}c.memoizedState=l;var h={value:l,getSnapshot:n};return c.queue=h,Lc(yc.bind(null,s,h,e),[e]),s.flags|=2048,ga(9,bc.bind(null,s,h,l,n),void 0,null),l},useId:function(){var e=wn(),n=yt.identifierPrefix;if(We){var l=Nn,s=Cn;l=(s&~(1<<32-sn(s)-1)).toString(32)+l,n=":"+n+"R"+l,l=ma++,0<l&&(n+="H"+l.toString(32)),n+=":"}else l=qh++,n=":"+n+"r"+l.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Rh={readContext:en,useCallback:qc,useContext:en,useEffect:Pi,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:Ec,useMemo:Ac,useReducer:Ii,useRef:_c,useState:function(){return Ii(xa)},useDebugValue:Oi,useDeferredValue:function(e){var n=tn();return Fc(n,mt.memoizedState,e)},useTransition:function(){var e=Ii(xa)[0],n=tn().memoizedState;return[e,n]},useMutableSource:xc,useSyncExternalStore:gc,useId:Cc,unstable_isNewReconciler:!1},Kh={readContext:en,useCallback:qc,useContext:en,useEffect:Pi,useImperativeHandle:Tc,useInsertionEffect:zc,useLayoutEffect:Ec,useMemo:Ac,useReducer:Bi,useRef:_c,useState:function(){return Bi(xa)},useDebugValue:Oi,useDeferredValue:function(e){var n=tn();return mt===null?n.memoizedState=e:Fc(n,mt.memoizedState,e)},useTransition:function(){var e=Bi(xa)[0],n=tn().memoizedState;return[e,n]},useMutableSource:xc,useSyncExternalStore:gc,useId:Cc,unstable_isNewReconciler:!1};function pn(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var l in e)n[l]===void 0&&(n[l]=e[l]);return n}return n}function Hi(e,n,l,s){n=e.memoizedState,l=l(s,n),l=l==null?n:J({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var Ml={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,n,l){e=e._reactInternals;var s=At(),c=pr(e),h=Kn(s,c);h.payload=n,l!=null&&(h.callback=l),n=ir(e,h,c),n!==null&&(hn(n,e,c,s),yl(n,e,c))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var s=At(),c=pr(e),h=Kn(s,c);h.tag=1,h.payload=n,l!=null&&(h.callback=l),n=ir(e,h,c),n!==null&&(hn(n,e,c,s),yl(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=At(),s=pr(e),c=Kn(l,s);c.tag=2,n!=null&&(c.callback=n),n=ir(e,c,s),n!==null&&(hn(n,e,s,l),yl(n,e,s))}};function Dc(e,n,l,s,c,h,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,b):n.prototype&&n.prototype.isPureReactComponent?!ra(l,s)||!ra(c,h):!0}function Ic(e,n,l){var s=!1,c=ar,h=n.contextType;return typeof h=="object"&&h!==null?h=en(h):(c=It(n)?Fr:Lt.current,s=n.contextTypes,h=(s=s!=null)?c0(e,c):ar),n=new n(l,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ml,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=h),n}function Bc(e,n,l,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,s),n.state!==e&&Ml.enqueueReplaceState(n,n.state,null)}function ji(e,n,l,s){var c=e.stateNode;c.props=l,c.state=e.memoizedState,c.refs={},Ti(e);var h=n.contextType;typeof h=="object"&&h!==null?c.context=en(h):(h=It(n)?Fr:Lt.current,c.context=c0(e,h)),c.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Hi(e,n,h,l),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&Ml.enqueueReplaceState(c,c.state,null),wl(e,l,c,s),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function v0(e,n){try{var l="",s=n;do l+=Me(s),s=s.return;while(s);var c=l}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:c,digest:null}}function Vi(e,n,l){return{value:e,source:null,stack:l??null,digest:n??null}}function $i(e,n){try{console.error(n.value)}catch(l){setTimeout(function(){throw l})}}var Dh=typeof WeakMap=="function"?WeakMap:Map;function Pc(e,n,l){l=Kn(-1,l),l.tag=3,l.payload={element:null};var s=n.value;return l.callback=function(){Rl||(Rl=!0,os=s),$i(e,n)},l}function Oc(e,n,l){l=Kn(-1,l),l.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var c=n.value;l.payload=function(){return s(c)},l.callback=function(){$i(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(l.callback=function(){$i(e,n),typeof s!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),l}function Hc(e,n,l){var s=e.pingCache;if(s===null){s=e.pingCache=new Dh;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(l)||(c.add(l),e=Qh.bind(null,e,n,l),n.then(e,e))}function jc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Vc(e,n,l,s,c){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(n=Kn(-1,1),n.tag=2,ir(l,n,1))),l.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Ih=re.ReactCurrentOwner,Bt=!1;function qt(e,n,l,s){n.child=e===null?cc(n,null,l,s):h0(n,e.child,l,s)}function $c(e,n,l,s,c){l=l.render;var h=n.ref;return x0(n,c),s=Ki(e,n,l,s,h,c),l=Di(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Dn(e,n,c)):(We&&l&&bi(n),n.flags|=1,qt(e,n,s,c),n.child)}function Uc(e,n,l,s,c){if(e===null){var h=l.type;return typeof h=="function"&&!ds(h)&&h.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(n.tag=15,n.type=h,Gc(e,n,h,s,c)):(e=Ol(l.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&c)===0){var b=h.memoizedProps;if(l=l.compare,l=l!==null?l:ra,l(b,s)&&e.ref===n.ref)return Dn(e,n,c)}return n.flags|=1,e=dr(h,s),e.ref=n.ref,e.return=n,n.child=e}function Gc(e,n,l,s,c){if(e!==null){var h=e.memoizedProps;if(ra(h,s)&&e.ref===n.ref)if(Bt=!1,n.pendingProps=s=h,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Bt=!0);else return n.lanes=e.lanes,Dn(e,n,c)}return Ui(e,n,l,s,c)}function Wc(e,n,l){var s=n.pendingProps,c=s.children,h=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(y0,Gt),Gt|=l;else{if((l&1073741824)===0)return e=h!==null?h.baseLanes|l:l,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,$e(y0,Gt),Gt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:l,$e(y0,Gt),Gt|=s}else h!==null?(s=h.baseLanes|l,n.memoizedState=null):s=l,$e(y0,Gt),Gt|=s;return qt(e,n,c,l),n.child}function Xc(e,n){var l=n.ref;(e===null&&l!==null||e!==null&&e.ref!==l)&&(n.flags|=512,n.flags|=2097152)}function Ui(e,n,l,s,c){var h=It(l)?Fr:Lt.current;return h=c0(n,h),x0(n,c),l=Ki(e,n,l,s,h,c),s=Di(),e!==null&&!Bt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,Dn(e,n,c)):(We&&s&&bi(n),n.flags|=1,qt(e,n,l,c),n.child)}function Zc(e,n,l,s,c){if(It(l)){var h=!0;fl(n)}else h=!1;if(x0(n,c),n.stateNode===null)ql(e,n),Ic(n,l,s),ji(n,l,s,c),s=!0;else if(e===null){var b=n.stateNode,S=n.memoizedProps;b.props=S;var M=b.context,D=l.contextType;typeof D=="object"&&D!==null?D=en(D):(D=It(l)?Fr:Lt.current,D=c0(n,D));var H=l.getDerivedStateFromProps,$=typeof H=="function"||typeof b.getSnapshotBeforeUpdate=="function";$||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==s||M!==D)&&Bc(n,b,s,D),or=!1;var O=n.memoizedState;b.state=O,wl(n,s,b,c),M=n.memoizedState,S!==s||O!==M||Dt.current||or?(typeof H=="function"&&(Hi(n,l,H,s),M=n.memoizedState),(S=or||Dc(n,l,S,s,O,M,D))?($||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=M),b.props=s,b.state=M,b.context=D,s=S):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{b=n.stateNode,fc(e,n),S=n.memoizedProps,D=n.type===n.elementType?S:pn(n.type,S),b.props=D,$=n.pendingProps,O=b.context,M=l.contextType,typeof M=="object"&&M!==null?M=en(M):(M=It(l)?Fr:Lt.current,M=c0(n,M));var te=l.getDerivedStateFromProps;(H=typeof te=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(S!==$||O!==M)&&Bc(n,b,s,M),or=!1,O=n.memoizedState,b.state=O,wl(n,s,b,c);var le=n.memoizedState;S!==$||O!==le||Dt.current||or?(typeof te=="function"&&(Hi(n,l,te,s),le=n.memoizedState),(D=or||Dc(n,l,D,s,O,le,M)||!1)?(H||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(s,le,M),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(s,le,M)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||S===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),b.props=s,b.state=le,b.context=M,s=D):(typeof b.componentDidUpdate!="function"||S===e.memoizedProps&&O===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&O===e.memoizedState||(n.flags|=1024),s=!1)}return Gi(e,n,l,s,h,c)}function Gi(e,n,l,s,c,h){Xc(e,n);var b=(n.flags&128)!==0;if(!s&&!b)return c&&tc(n,l,!1),Dn(e,n,h);s=n.stateNode,Ih.current=n;var S=b&&typeof l.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&b?(n.child=h0(n,e.child,null,h),n.child=h0(n,null,S,h)):qt(e,n,S,h),n.memoizedState=s.state,c&&tc(n,l,!0),n.child}function Qc(e){var n=e.stateNode;n.pendingContext?J1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&J1(e,n.context,!1),qi(e,n.containerInfo)}function Yc(e,n,l,s,c){return d0(),Si(c),n.flags|=256,qt(e,n,l,s),n.child}var Wi={dehydrated:null,treeContext:null,retryLane:0};function Xi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jc(e,n,l){var s=n.pendingProps,c=Je.current,h=!1,b=(n.flags&128)!==0,S;if((S=b)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),$e(Je,c&1),e===null)return ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=s.children,e=s.fallback,h?(s=n.mode,h=n.child,b={mode:"hidden",children:b},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=b):h=Hl(b,s,0,null),e=Hr(e,s,l,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=Xi(l),n.memoizedState=Wi,e):Zi(n,b));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return Bh(e,n,b,s,S,c,l);if(h){h=s.fallback,b=n.mode,c=e.child,S=c.sibling;var M={mode:"hidden",children:s.children};return(b&1)===0&&n.child!==c?(s=n.child,s.childLanes=0,s.pendingProps=M,n.deletions=null):(s=dr(c,M),s.subtreeFlags=c.subtreeFlags&14680064),S!==null?h=dr(S,h):(h=Hr(h,b,l,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,b=e.child.memoizedState,b=b===null?Xi(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},h.memoizedState=b,h.childLanes=e.childLanes&~l,n.memoizedState=Wi,s}return h=e.child,e=h.sibling,s=dr(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=l),s.return=n,s.sibling=null,e!==null&&(l=n.deletions,l===null?(n.deletions=[e],n.flags|=16):l.push(e)),n.child=s,n.memoizedState=null,s}function Zi(e,n){return n=Hl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Tl(e,n,l,s){return s!==null&&Si(s),h0(n,e.child,null,l),e=Zi(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Bh(e,n,l,s,c,h,b){if(l)return n.flags&256?(n.flags&=-257,s=Vi(Error(r(422))),Tl(e,n,b,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=s.fallback,c=n.mode,s=Hl({mode:"visible",children:s.children},c,0,null),h=Hr(h,c,b,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&h0(n,e.child,null,b),n.child.memoizedState=Xi(b),n.memoizedState=Wi,h);if((n.mode&1)===0)return Tl(e,n,b,null);if(c.data==="$!"){if(s=c.nextSibling&&c.nextSibling.dataset,s)var S=s.dgst;return s=S,h=Error(r(419)),s=Vi(h,s,void 0),Tl(e,n,b,s)}if(S=(b&e.childLanes)!==0,Bt||S){if(s=yt,s!==null){switch(b&-b){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(s.suspendedLanes|b))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,Rn(e,c),hn(s,e,c,-1))}return fs(),s=Vi(Error(r(421))),Tl(e,n,b,s)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Yh.bind(null,e),c._reactRetry=n,null):(e=h.treeContext,Ut=nr(c.nextSibling),$t=n,We=!0,cn=null,e!==null&&(Yt[Jt++]=Cn,Yt[Jt++]=Nn,Yt[Jt++]=Cr,Cn=e.id,Nn=e.overflow,Cr=n),n=Zi(n,s.children),n.flags|=4096,n)}function ep(e,n,l){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ei(e.return,n,l)}function Qi(e,n,l,s,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:l,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=l,h.tailMode=c)}function tp(e,n,l){var s=n.pendingProps,c=s.revealOrder,h=s.tail;if(qt(e,n,s.children,l),s=Je.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,l,n);else if(e.tag===19)ep(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if($e(Je,s),(n.mode&1)===0)n.memoizedState=null;else switch(c){case"forwards":for(l=n.child,c=null;l!==null;)e=l.alternate,e!==null&&kl(e)===null&&(c=l),l=l.sibling;l=c,l===null?(c=n.child,n.child=null):(c=l.sibling,l.sibling=null),Qi(n,!1,c,l,h);break;case"backwards":for(l=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&kl(e)===null){n.child=c;break}e=c.sibling,c.sibling=l,l=c,c=e}Qi(n,!0,l,null,h);break;case"together":Qi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ql(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Dn(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),Ir|=n.lanes,(l&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,l=dr(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=dr(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function Ph(e,n,l){switch(n.tag){case 3:Qc(n),d0();break;case 5:mc(n);break;case 1:It(n.type)&&fl(n);break;case 4:qi(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,c=n.memoizedProps.value;$e(vl,s._currentValue),s._currentValue=c;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?($e(Je,Je.current&1),n.flags|=128,null):(l&n.child.childLanes)!==0?Jc(e,n,l):($e(Je,Je.current&1),e=Dn(e,n,l),e!==null?e.sibling:null);$e(Je,Je.current&1);break;case 19:if(s=(l&n.childLanes)!==0,(e.flags&128)!==0){if(s)return tp(e,n,l);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$e(Je,Je.current),s)break;return null;case 22:case 23:return n.lanes=0,Wc(e,n,l)}return Dn(e,n,l)}var np,Yi,rp,ap;np=function(e,n){for(var l=n.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break;for(;l.sibling===null;){if(l.return===null||l.return===n)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Yi=function(){},rp=function(e,n,l,s){var c=e.memoizedProps;if(c!==s){e=n.stateNode,Kr(yn.current);var h=null;switch(l){case"input":c=Wn(e,c),s=Wn(e,s),h=[];break;case"select":c=J({},c,{value:void 0}),s=J({},s,{value:void 0}),h=[];break;case"textarea":c=K0(e,c),s=K0(e,s),h=[];break;default:typeof c.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=ul)}Fo(l,s);var b;l=null;for(D in c)if(!s.hasOwnProperty(D)&&c.hasOwnProperty(D)&&c[D]!=null)if(D==="style"){var S=c[D];for(b in S)S.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(i.hasOwnProperty(D)?h||(h=[]):(h=h||[]).push(D,null));for(D in s){var M=s[D];if(S=c!=null?c[D]:void 0,s.hasOwnProperty(D)&&M!==S&&(M!=null||S!=null))if(D==="style")if(S){for(b in S)!S.hasOwnProperty(b)||M&&M.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in M)M.hasOwnProperty(b)&&S[b]!==M[b]&&(l||(l={}),l[b]=M[b])}else l||(h||(h=[]),h.push(D,l)),l=M;else D==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,S=S?S.__html:void 0,M!=null&&S!==M&&(h=h||[]).push(D,M)):D==="children"?typeof M!="string"&&typeof M!="number"||(h=h||[]).push(D,""+M):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(i.hasOwnProperty(D)?(M!=null&&D==="onScroll"&&Ue("scroll",e),h||S===M||(h=[])):(h=h||[]).push(D,M))}l&&(h=h||[]).push("style",l);var D=h;(n.updateQueue=D)&&(n.flags|=4)}},ap=function(e,n,l,s){l!==s&&(n.flags|=4)};function va(e,n){if(!We)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Et(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,s=0;if(n)for(var c=e.child;c!==null;)l|=c.lanes|c.childLanes,s|=c.subtreeFlags&14680064,s|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)l|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=l,n}function Oh(e,n,l){var s=n.pendingProps;switch(yi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(n),null;case 1:return It(n.type)&&pl(),Et(n),null;case 3:return s=n.stateNode,g0(),Ge(Dt),Ge(Lt),Ci(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(xl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cn!==null&&(us(cn),cn=null))),Yi(e,n),Et(n),null;case 5:Ai(n);var c=Kr(da.current);if(l=n.type,e!==null&&n.stateNode!=null)rp(e,n,l,s,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Et(n),null}if(e=Kr(yn.current),xl(n)){s=n.stateNode,l=n.type;var h=n.memoizedProps;switch(s[bn]=n,s[sa]=h,e=(n.mode&1)!==0,l){case"dialog":Ue("cancel",s),Ue("close",s);break;case"iframe":case"object":case"embed":Ue("load",s);break;case"video":case"audio":for(c=0;c<la.length;c++)Ue(la[c],s);break;case"source":Ue("error",s);break;case"img":case"image":case"link":Ue("error",s),Ue("load",s);break;case"details":Ue("toggle",s);break;case"input":Ba(s,h),Ue("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Ue("invalid",s);break;case"textarea":Yr(s,h),Ue("invalid",s)}Fo(l,h),c=null;for(var b in h)if(h.hasOwnProperty(b)){var S=h[b];b==="children"?typeof S=="string"?s.textContent!==S&&(h.suppressHydrationWarning!==!0&&sl(s.textContent,S,e),c=["children",S]):typeof S=="number"&&s.textContent!==""+S&&(h.suppressHydrationWarning!==!0&&sl(s.textContent,S,e),c=["children",""+S]):i.hasOwnProperty(b)&&S!=null&&b==="onScroll"&&Ue("scroll",s)}switch(l){case"input":Mr(s),R0(s,h,!0);break;case"textarea":Mr(s),I0(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=ul)}s=c,n.updateQueue=s,s!==null&&(n.flags|=4)}else{b=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Oa(l)),e==="http://www.w3.org/1999/xhtml"?l==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=b.createElement(l,{is:s.is}):(e=b.createElement(l),l==="select"&&(b=e,s.multiple?b.multiple=!0:s.size&&(b.size=s.size))):e=b.createElementNS(e,l),e[bn]=n,e[sa]=s,np(e,n,!1,!1),n.stateNode=e;e:{switch(b=Co(l,s),l){case"dialog":Ue("cancel",e),Ue("close",e),c=s;break;case"iframe":case"object":case"embed":Ue("load",e),c=s;break;case"video":case"audio":for(c=0;c<la.length;c++)Ue(la[c],e);c=s;break;case"source":Ue("error",e),c=s;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),c=s;break;case"details":Ue("toggle",e),c=s;break;case"input":Ba(e,s),c=Wn(e,s),Ue("invalid",e);break;case"option":c=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},c=J({},s,{value:void 0}),Ue("invalid",e);break;case"textarea":Yr(e,s),c=K0(e,s),Ue("invalid",e);break;default:c=s}Fo(l,c),S=c;for(h in S)if(S.hasOwnProperty(h)){var M=S[h];h==="style"?Gu(e,M):h==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Tr(e,M)):h==="children"?typeof M=="string"?(l!=="textarea"||M!=="")&&P0(e,M):typeof M=="number"&&P0(e,""+M):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(i.hasOwnProperty(h)?M!=null&&h==="onScroll"&&Ue("scroll",e):M!=null&&Z(e,h,M,b))}switch(l){case"input":Mr(e),R0(e,s,!1);break;case"textarea":Mr(e),I0(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Ne(s.value));break;case"select":e.multiple=!!s.multiple,h=s.value,h!=null?Xn(e,!!s.multiple,h,!1):s.defaultValue!=null&&Xn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=ul)}switch(l){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Et(n),null;case 6:if(e&&n.stateNode!=null)ap(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(l=Kr(da.current),Kr(yn.current),xl(n)){if(s=n.stateNode,l=n.memoizedProps,s[bn]=n,(h=s.nodeValue!==l)&&(e=$t,e!==null))switch(e.tag){case 3:sl(s.nodeValue,l,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sl(s.nodeValue,l,(e.mode&1)!==0)}h&&(n.flags|=4)}else s=(l.nodeType===9?l:l.ownerDocument).createTextNode(s),s[bn]=n,n.stateNode=s}return Et(n),null;case 13:if(Ge(Je),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&Ut!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ic(),d0(),n.flags|=98560,h=!1;else if(h=xl(n),s!==null&&s.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[bn]=n}else d0(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Et(n),h=!1}else cn!==null&&(us(cn),cn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=l,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Je.current&1)!==0?xt===0&&(xt=3):fs())),n.updateQueue!==null&&(n.flags|=4),Et(n),null);case 4:return g0(),Yi(e,n),e===null&&oa(n.stateNode.containerInfo),Et(n),null;case 10:return zi(n.type._context),Et(n),null;case 17:return It(n.type)&&pl(),Et(n),null;case 19:if(Ge(Je),h=n.memoizedState,h===null)return Et(n),null;if(s=(n.flags&128)!==0,b=h.rendering,b===null)if(s)va(h,!1);else{if(xt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(b=kl(e),b!==null){for(n.flags|=128,va(h,!1),s=b.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=l,l=n.child;l!==null;)h=l,e=s,h.flags&=14680066,b=h.alternate,b===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=b.childLanes,h.lanes=b.lanes,h.child=b.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=b.memoizedProps,h.memoizedState=b.memoizedState,h.updateQueue=b.updateQueue,h.type=b.type,e=b.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),l=l.sibling;return $e(Je,Je.current&1|2),n.child}e=e.sibling}h.tail!==null&&st()>w0&&(n.flags|=128,s=!0,va(h,!1),n.lanes=4194304)}else{if(!s)if(e=kl(b),e!==null){if(n.flags|=128,s=!0,l=e.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),va(h,!0),h.tail===null&&h.tailMode==="hidden"&&!b.alternate&&!We)return Et(n),null}else 2*st()-h.renderingStartTime>w0&&l!==1073741824&&(n.flags|=128,s=!0,va(h,!1),n.lanes=4194304);h.isBackwards?(b.sibling=n.child,n.child=b):(l=h.last,l!==null?l.sibling=b:n.child=b,h.last=b)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=st(),n.sibling=null,l=Je.current,$e(Je,s?l&1|2:l&1),n):(Et(n),null);case 22:case 23:return ps(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Gt&1073741824)!==0&&(Et(n),n.subtreeFlags&6&&(n.flags|=8192)):Et(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Hh(e,n){switch(yi(n),n.tag){case 1:return It(n.type)&&pl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return g0(),Ge(Dt),Ge(Lt),Ci(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Ai(n),null;case 13:if(Ge(Je),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));d0()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ge(Je),null;case 4:return g0(),null;case 10:return zi(n.type._context),null;case 22:case 23:return ps(),null;case 24:return null;default:return null}}var Al=!1,Mt=!1,jh=typeof WeakSet=="function"?WeakSet:Set,ae=null;function b0(e,n){var l=e.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(s){lt(e,n,s)}else l.current=null}function Ji(e,n,l){try{l()}catch(s){lt(e,n,s)}}var lp=!1;function Vh(e,n){if(pi=Qa,e=D1(),ri(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var s=l.getSelection&&l.getSelection();if(s&&s.rangeCount!==0){l=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{l.nodeType,h.nodeType}catch{l=null;break e}var b=0,S=-1,M=-1,D=0,H=0,$=e,O=null;t:for(;;){for(var te;$!==l||c!==0&&$.nodeType!==3||(S=b+c),$!==h||s!==0&&$.nodeType!==3||(M=b+s),$.nodeType===3&&(b+=$.nodeValue.length),(te=$.firstChild)!==null;)O=$,$=te;for(;;){if($===e)break t;if(O===l&&++D===c&&(S=b),O===h&&++H===s&&(M=b),(te=$.nextSibling)!==null)break;$=O,O=$.parentNode}$=te}l=S===-1||M===-1?null:{start:S,end:M}}else l=null}l=l||{start:0,end:0}}else l=null;for(fi={focusedElem:e,selectionRange:l},Qa=!1,ae=n;ae!==null;)if(n=ae,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ae=e;else for(;ae!==null;){n=ae;try{var le=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var ie=le.memoizedProps,ut=le.memoizedState,N=n.stateNode,q=N.getSnapshotBeforeUpdate(n.elementType===n.type?ie:pn(n.type,ie),ut);N.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var R=n.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(W){lt(n,n.return,W)}if(e=n.sibling,e!==null){e.return=n.return,ae=e;break}ae=n.return}return le=lp,lp=!1,le}function ba(e,n,l){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var c=s=s.next;do{if((c.tag&e)===e){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ji(n,l,h)}c=c.next}while(c!==s)}}function Fl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var s=l.create;l.destroy=s()}l=l.next}while(l!==n)}}function es(e){var n=e.ref;if(n!==null){var l=e.stateNode;switch(e.tag){case 5:e=l;break;default:e=l}typeof n=="function"?n(e):n.current=e}}function op(e){var n=e.alternate;n!==null&&(e.alternate=null,op(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[bn],delete n[sa],delete n[xi],delete n[zh],delete n[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ip(e){return e.tag===5||e.tag===3||e.tag===4}function sp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,n,l){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?l.nodeType===8?l.parentNode.insertBefore(e,n):l.insertBefore(e,n):(l.nodeType===8?(n=l.parentNode,n.insertBefore(e,l)):(n=l,n.appendChild(e)),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=ul));else if(s!==4&&(e=e.child,e!==null))for(ts(e,n,l),e=e.sibling;e!==null;)ts(e,n,l),e=e.sibling}function ns(e,n,l){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ns(e,n,l),e=e.sibling;e!==null;)ns(e,n,l),e=e.sibling}var kt=null,fn=!1;function sr(e,n,l){for(l=l.child;l!==null;)up(e,n,l),l=l.sibling}function up(e,n,l){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount($a,l)}catch{}switch(l.tag){case 5:Mt||b0(l,n);case 6:var s=kt,c=fn;kt=null,sr(e,n,l),kt=s,fn=c,kt!==null&&(fn?(e=kt,l=l.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)):kt.removeChild(l.stateNode));break;case 18:kt!==null&&(fn?(e=kt,l=l.stateNode,e.nodeType===8?mi(e.parentNode,l):e.nodeType===1&&mi(e,l),Q0(e)):mi(kt,l.stateNode));break;case 4:s=kt,c=fn,kt=l.stateNode.containerInfo,fn=!0,sr(e,n,l),kt=s,fn=c;break;case 0:case 11:case 14:case 15:if(!Mt&&(s=l.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){c=s=s.next;do{var h=c,b=h.destroy;h=h.tag,b!==void 0&&((h&2)!==0||(h&4)!==0)&&Ji(l,n,b),c=c.next}while(c!==s)}sr(e,n,l);break;case 1:if(!Mt&&(b0(l,n),s=l.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=l.memoizedProps,s.state=l.memoizedState,s.componentWillUnmount()}catch(S){lt(l,n,S)}sr(e,n,l);break;case 21:sr(e,n,l);break;case 22:l.mode&1?(Mt=(s=Mt)||l.memoizedState!==null,sr(e,n,l),Mt=s):sr(e,n,l);break;default:sr(e,n,l)}}function cp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var l=e.stateNode;l===null&&(l=e.stateNode=new jh),n.forEach(function(s){var c=Jh.bind(null,e,s);l.has(s)||(l.add(s),s.then(c,c))})}}function dn(e,n){var l=n.deletions;if(l!==null)for(var s=0;s<l.length;s++){var c=l[s];try{var h=e,b=n,S=b;e:for(;S!==null;){switch(S.tag){case 5:kt=S.stateNode,fn=!1;break e;case 3:kt=S.stateNode.containerInfo,fn=!0;break e;case 4:kt=S.stateNode.containerInfo,fn=!0;break e}S=S.return}if(kt===null)throw Error(r(160));up(h,b,c),kt=null,fn=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(D){lt(c,n,D)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pp(n,e),n=n.sibling}function pp(e,n){var l=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dn(n,e),kn(e),s&4){try{ba(3,e,e.return),Fl(3,e)}catch(ie){lt(e,e.return,ie)}try{ba(5,e,e.return)}catch(ie){lt(e,e.return,ie)}}break;case 1:dn(n,e),kn(e),s&512&&l!==null&&b0(l,l.return);break;case 5:if(dn(n,e),kn(e),s&512&&l!==null&&b0(l,l.return),e.flags&32){var c=e.stateNode;try{P0(c,"")}catch(ie){lt(e,e.return,ie)}}if(s&4&&(c=e.stateNode,c!=null)){var h=e.memoizedProps,b=l!==null?l.memoizedProps:h,S=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{S==="input"&&h.type==="radio"&&h.name!=null&&Pa(c,h),Co(S,b);var D=Co(S,h);for(b=0;b<M.length;b+=2){var H=M[b],$=M[b+1];H==="style"?Gu(c,$):H==="dangerouslySetInnerHTML"?Tr(c,$):H==="children"?P0(c,$):Z(c,H,$,D)}switch(S){case"input":N0(c,h);break;case"textarea":D0(c,h);break;case"select":var O=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var te=h.value;te!=null?Xn(c,!!h.multiple,te,!1):O!==!!h.multiple&&(h.defaultValue!=null?Xn(c,!!h.multiple,h.defaultValue,!0):Xn(c,!!h.multiple,h.multiple?[]:"",!1))}c[sa]=h}catch(ie){lt(e,e.return,ie)}}break;case 6:if(dn(n,e),kn(e),s&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,h=e.memoizedProps;try{c.nodeValue=h}catch(ie){lt(e,e.return,ie)}}break;case 3:if(dn(n,e),kn(e),s&4&&l!==null&&l.memoizedState.isDehydrated)try{Q0(n.containerInfo)}catch(ie){lt(e,e.return,ie)}break;case 4:dn(n,e),kn(e);break;case 13:dn(n,e),kn(e),c=e.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(ls=st())),s&4&&cp(e);break;case 22:if(H=l!==null&&l.memoizedState!==null,e.mode&1?(Mt=(D=Mt)||H,dn(n,e),Mt=D):dn(n,e),kn(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!H&&(e.mode&1)!==0)for(ae=e,H=e.child;H!==null;){for($=ae=H;ae!==null;){switch(O=ae,te=O.child,O.tag){case 0:case 11:case 14:case 15:ba(4,O,O.return);break;case 1:b0(O,O.return);var le=O.stateNode;if(typeof le.componentWillUnmount=="function"){s=O,l=O.return;try{n=s,le.props=n.memoizedProps,le.state=n.memoizedState,le.componentWillUnmount()}catch(ie){lt(s,l,ie)}}break;case 5:b0(O,O.return);break;case 22:if(O.memoizedState!==null){hp($);continue}}te!==null?(te.return=O,ae=te):hp($)}H=H.sibling}e:for(H=null,$=e;;){if($.tag===5){if(H===null){H=$;try{c=$.stateNode,D?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(S=$.stateNode,M=$.memoizedProps.style,b=M!=null&&M.hasOwnProperty("display")?M.display:null,S.style.display=Uu("display",b))}catch(ie){lt(e,e.return,ie)}}}else if($.tag===6){if(H===null)try{$.stateNode.nodeValue=D?"":$.memoizedProps}catch(ie){lt(e,e.return,ie)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===e)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===e)break e;for(;$.sibling===null;){if($.return===null||$.return===e)break e;H===$&&(H=null),$=$.return}H===$&&(H=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:dn(n,e),kn(e),s&4&&cp(e);break;case 21:break;default:dn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{e:{for(var l=e.return;l!==null;){if(ip(l)){var s=l;break e}l=l.return}throw Error(r(160))}switch(s.tag){case 5:var c=s.stateNode;s.flags&32&&(P0(c,""),s.flags&=-33);var h=sp(e);ns(e,h,c);break;case 3:case 4:var b=s.stateNode.containerInfo,S=sp(e);ts(e,S,b);break;default:throw Error(r(161))}}catch(M){lt(e,e.return,M)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function $h(e,n,l){ae=e,fp(e)}function fp(e,n,l){for(var s=(e.mode&1)!==0;ae!==null;){var c=ae,h=c.child;if(c.tag===22&&s){var b=c.memoizedState!==null||Al;if(!b){var S=c.alternate,M=S!==null&&S.memoizedState!==null||Mt;S=Al;var D=Mt;if(Al=b,(Mt=M)&&!D)for(ae=c;ae!==null;)b=ae,M=b.child,b.tag===22&&b.memoizedState!==null?mp(c):M!==null?(M.return=b,ae=M):mp(c);for(;h!==null;)ae=h,fp(h),h=h.sibling;ae=c,Al=S,Mt=D}dp(e)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ae=h):dp(e)}}function dp(e){for(;ae!==null;){var n=ae;if((n.flags&8772)!==0){var l=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Mt||Fl(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!Mt)if(l===null)s.componentDidMount();else{var c=n.elementType===n.type?l.memoizedProps:pn(n.type,l.memoizedProps);s.componentDidUpdate(c,l.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&hc(n,h,s);break;case 3:var b=n.updateQueue;if(b!==null){if(l=null,n.child!==null)switch(n.child.tag){case 5:l=n.child.stateNode;break;case 1:l=n.child.stateNode}hc(n,b,l)}break;case 5:var S=n.stateNode;if(l===null&&n.flags&4){l=S;var M=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&l.focus();break;case"img":M.src&&(l.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var D=n.alternate;if(D!==null){var H=D.memoizedState;if(H!==null){var $=H.dehydrated;$!==null&&Q0($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Mt||n.flags&512&&es(n)}catch(O){lt(n,n.return,O)}}if(n===e){ae=null;break}if(l=n.sibling,l!==null){l.return=n.return,ae=l;break}ae=n.return}}function hp(e){for(;ae!==null;){var n=ae;if(n===e){ae=null;break}var l=n.sibling;if(l!==null){l.return=n.return,ae=l;break}ae=n.return}}function mp(e){for(;ae!==null;){var n=ae;try{switch(n.tag){case 0:case 11:case 15:var l=n.return;try{Fl(4,n)}catch(M){lt(n,l,M)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var c=n.return;try{s.componentDidMount()}catch(M){lt(n,c,M)}}var h=n.return;try{es(n)}catch(M){lt(n,h,M)}break;case 5:var b=n.return;try{es(n)}catch(M){lt(n,b,M)}}}catch(M){lt(n,n.return,M)}if(n===e){ae=null;break}var S=n.sibling;if(S!==null){S.return=n.return,ae=S;break}ae=n.return}}var Uh=Math.ceil,Cl=re.ReactCurrentDispatcher,rs=re.ReactCurrentOwner,nn=re.ReactCurrentBatchConfig,Ce=0,yt=null,pt=null,St=0,Gt=0,y0=rr(0),xt=0,ya=null,Ir=0,Nl=0,as=0,wa=null,Pt=null,ls=0,w0=1/0,In=null,Rl=!1,os=null,ur=null,Kl=!1,cr=null,Dl=0,ka=0,is=null,Il=-1,Bl=0;function At(){return(Ce&6)!==0?st():Il!==-1?Il:Il=st()}function pr(e){return(e.mode&1)===0?1:(Ce&2)!==0&&St!==0?St&-St:Th.transition!==null?(Bl===0&&(Bl=s1()),Bl):(e=He,e!==0||(e=window.event,e=e===void 0?16:g1(e.type)),e)}function hn(e,n,l,s){if(50<ka)throw ka=0,is=null,Error(r(185));U0(e,l,s),((Ce&2)===0||e!==yt)&&(e===yt&&((Ce&2)===0&&(Nl|=l),xt===4&&fr(e,St)),Ot(e,s),l===1&&Ce===0&&(n.mode&1)===0&&(w0=st()+500,dl&&lr()))}function Ot(e,n){var l=e.callbackNode;Td(e,n);var s=Wa(e,e===yt?St:0);if(s===0)l!==null&&l1(l),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(l!=null&&l1(l),n===1)e.tag===0?Mh(gp.bind(null,e)):nc(gp.bind(null,e)),_h(function(){(Ce&6)===0&&lr()}),l=null;else{switch(u1(s)){case 1:l=Po;break;case 4:l=o1;break;case 16:l=Va;break;case 536870912:l=i1;break;default:l=Va}l=Lp(l,xp.bind(null,e))}e.callbackPriority=n,e.callbackNode=l}}function xp(e,n){if(Il=-1,Bl=0,(Ce&6)!==0)throw Error(r(327));var l=e.callbackNode;if(k0()&&e.callbackNode!==l)return null;var s=Wa(e,e===yt?St:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||n)n=Pl(e,s);else{n=s;var c=Ce;Ce|=2;var h=bp();(yt!==e||St!==n)&&(In=null,w0=st()+500,Pr(e,n));do try{Xh();break}catch(S){vp(e,S)}while(!0);Li(),Cl.current=h,Ce=c,pt!==null?n=0:(yt=null,St=0,n=xt)}if(n!==0){if(n===2&&(c=Oo(e),c!==0&&(s=c,n=ss(e,c))),n===1)throw l=ya,Pr(e,0),fr(e,s),Ot(e,st()),l;if(n===6)fr(e,s);else{if(c=e.current.alternate,(s&30)===0&&!Gh(c)&&(n=Pl(e,s),n===2&&(h=Oo(e),h!==0&&(s=h,n=ss(e,h))),n===1))throw l=ya,Pr(e,0),fr(e,s),Ot(e,st()),l;switch(e.finishedWork=c,e.finishedLanes=s,n){case 0:case 1:throw Error(r(345));case 2:Or(e,Pt,In);break;case 3:if(fr(e,s),(s&130023424)===s&&(n=ls+500-st(),10<n)){if(Wa(e,0)!==0)break;if(c=e.suspendedLanes,(c&s)!==s){At(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=hi(Or.bind(null,e,Pt,In),n);break}Or(e,Pt,In);break;case 4:if(fr(e,s),(s&4194240)===s)break;for(n=e.eventTimes,c=-1;0<s;){var b=31-sn(s);h=1<<b,b=n[b],b>c&&(c=b),s&=~h}if(s=c,s=st()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Uh(s/1960))-s,10<s){e.timeoutHandle=hi(Or.bind(null,e,Pt,In),s);break}Or(e,Pt,In);break;case 5:Or(e,Pt,In);break;default:throw Error(r(329))}}}return Ot(e,st()),e.callbackNode===l?xp.bind(null,e):null}function ss(e,n){var l=wa;return e.current.memoizedState.isDehydrated&&(Pr(e,n).flags|=256),e=Pl(e,n),e!==2&&(n=Pt,Pt=l,n!==null&&us(n)),e}function us(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function Gh(e){for(var n=e;;){if(n.flags&16384){var l=n.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var s=0;s<l.length;s++){var c=l[s],h=c.getSnapshot;c=c.value;try{if(!un(h(),c))return!1}catch{return!1}}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function fr(e,n){for(n&=~as,n&=~Nl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var l=31-sn(n),s=1<<l;e[l]=-1,n&=~s}}function gp(e){if((Ce&6)!==0)throw Error(r(327));k0();var n=Wa(e,0);if((n&1)===0)return Ot(e,st()),null;var l=Pl(e,n);if(e.tag!==0&&l===2){var s=Oo(e);s!==0&&(n=s,l=ss(e,s))}if(l===1)throw l=ya,Pr(e,0),fr(e,n),Ot(e,st()),l;if(l===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Or(e,Pt,In),Ot(e,st()),null}function cs(e,n){var l=Ce;Ce|=1;try{return e(n)}finally{Ce=l,Ce===0&&(w0=st()+500,dl&&lr())}}function Br(e){cr!==null&&cr.tag===0&&(Ce&6)===0&&k0();var n=Ce;Ce|=1;var l=nn.transition,s=He;try{if(nn.transition=null,He=1,e)return e()}finally{He=s,nn.transition=l,Ce=n,(Ce&6)===0&&lr()}}function ps(){Gt=y0.current,Ge(y0)}function Pr(e,n){e.finishedWork=null,e.finishedLanes=0;var l=e.timeoutHandle;if(l!==-1&&(e.timeoutHandle=-1,Sh(l)),pt!==null)for(l=pt.return;l!==null;){var s=l;switch(yi(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&pl();break;case 3:g0(),Ge(Dt),Ge(Lt),Ci();break;case 5:Ai(s);break;case 4:g0();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:zi(s.type._context);break;case 22:case 23:ps()}l=l.return}if(yt=e,pt=e=dr(e.current,null),St=Gt=n,xt=0,ya=null,as=Nl=Ir=0,Pt=wa=null,Rr!==null){for(n=0;n<Rr.length;n++)if(l=Rr[n],s=l.interleaved,s!==null){l.interleaved=null;var c=s.next,h=l.pending;if(h!==null){var b=h.next;h.next=c,s.next=b}l.pending=s}Rr=null}return e}function vp(e,n){do{var l=pt;try{if(Li(),Sl.current=El,_l){for(var s=et.memoizedState;s!==null;){var c=s.queue;c!==null&&(c.pending=null),s=s.next}_l=!1}if(Dr=0,bt=mt=et=null,ha=!1,ma=0,rs.current=null,l===null||l.return===null){xt=1,ya=n,pt=null;break}e:{var h=e,b=l.return,S=l,M=n;if(n=St,S.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var D=M,H=S,$=H.tag;if((H.mode&1)===0&&($===0||$===11||$===15)){var O=H.alternate;O?(H.updateQueue=O.updateQueue,H.memoizedState=O.memoizedState,H.lanes=O.lanes):(H.updateQueue=null,H.memoizedState=null)}var te=jc(b);if(te!==null){te.flags&=-257,Vc(te,b,S,h,n),te.mode&1&&Hc(h,D,n),n=te,M=D;var le=n.updateQueue;if(le===null){var ie=new Set;ie.add(M),n.updateQueue=ie}else le.add(M);break e}else{if((n&1)===0){Hc(h,D,n),fs();break e}M=Error(r(426))}}else if(We&&S.mode&1){var ut=jc(b);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),Vc(ut,b,S,h,n),Si(v0(M,S));break e}}h=M=v0(M,S),xt!==4&&(xt=2),wa===null?wa=[h]:wa.push(h),h=b;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var N=Pc(h,M,n);dc(h,N);break e;case 1:S=M;var q=h.type,R=h.stateNode;if((h.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(ur===null||!ur.has(R)))){h.flags|=65536,n&=-n,h.lanes|=n;var W=Oc(h,S,n);dc(h,W);break e}}h=h.return}while(h!==null)}wp(l)}catch(se){n=se,pt===l&&l!==null&&(pt=l=l.return);continue}break}while(!0)}function bp(){var e=Cl.current;return Cl.current=El,e===null?El:e}function fs(){(xt===0||xt===3||xt===2)&&(xt=4),yt===null||(Ir&268435455)===0&&(Nl&268435455)===0||fr(yt,St)}function Pl(e,n){var l=Ce;Ce|=2;var s=bp();(yt!==e||St!==n)&&(In=null,Pr(e,n));do try{Wh();break}catch(c){vp(e,c)}while(!0);if(Li(),Ce=l,Cl.current=s,pt!==null)throw Error(r(261));return yt=null,St=0,xt}function Wh(){for(;pt!==null;)yp(pt)}function Xh(){for(;pt!==null&&!yd();)yp(pt)}function yp(e){var n=_p(e.alternate,e,Gt);e.memoizedProps=e.pendingProps,n===null?wp(e):pt=n,rs.current=null}function wp(e){var n=e;do{var l=n.alternate;if(e=n.return,(n.flags&32768)===0){if(l=Oh(l,n,Gt),l!==null){pt=l;return}}else{if(l=Hh(l,n),l!==null){l.flags&=32767,pt=l;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xt=6,pt=null;return}}if(n=n.sibling,n!==null){pt=n;return}pt=n=e}while(n!==null);xt===0&&(xt=5)}function Or(e,n,l){var s=He,c=nn.transition;try{nn.transition=null,He=1,Zh(e,n,l,s)}finally{nn.transition=c,He=s}return null}function Zh(e,n,l,s){do k0();while(cr!==null);if((Ce&6)!==0)throw Error(r(327));l=e.finishedWork;var c=e.finishedLanes;if(l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=l.lanes|l.childLanes;if(qd(e,h),e===yt&&(pt=yt=null,St=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Kl||(Kl=!0,Lp(Va,function(){return k0(),null})),h=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||h){h=nn.transition,nn.transition=null;var b=He;He=1;var S=Ce;Ce|=4,rs.current=null,Vh(e,l),pp(l,e),xh(fi),Qa=!!pi,fi=pi=null,e.current=l,$h(l),wd(),Ce=S,He=b,nn.transition=h}else e.current=l;if(Kl&&(Kl=!1,cr=e,Dl=c),h=e.pendingLanes,h===0&&(ur=null),_d(l.stateNode),Ot(e,st()),n!==null)for(s=e.onRecoverableError,l=0;l<n.length;l++)c=n[l],s(c.value,{componentStack:c.stack,digest:c.digest});if(Rl)throw Rl=!1,e=os,os=null,e;return(Dl&1)!==0&&e.tag!==0&&k0(),h=e.pendingLanes,(h&1)!==0?e===is?ka++:(ka=0,is=e):ka=0,lr(),null}function k0(){if(cr!==null){var e=u1(Dl),n=nn.transition,l=He;try{if(nn.transition=null,He=16>e?16:e,cr===null)var s=!1;else{if(e=cr,cr=null,Dl=0,(Ce&6)!==0)throw Error(r(331));var c=Ce;for(Ce|=4,ae=e.current;ae!==null;){var h=ae,b=h.child;if((ae.flags&16)!==0){var S=h.deletions;if(S!==null){for(var M=0;M<S.length;M++){var D=S[M];for(ae=D;ae!==null;){var H=ae;switch(H.tag){case 0:case 11:case 15:ba(8,H,h)}var $=H.child;if($!==null)$.return=H,ae=$;else for(;ae!==null;){H=ae;var O=H.sibling,te=H.return;if(op(H),H===D){ae=null;break}if(O!==null){O.return=te,ae=O;break}ae=te}}}var le=h.alternate;if(le!==null){var ie=le.child;if(ie!==null){le.child=null;do{var ut=ie.sibling;ie.sibling=null,ie=ut}while(ie!==null)}}ae=h}}if((h.subtreeFlags&2064)!==0&&b!==null)b.return=h,ae=b;else e:for(;ae!==null;){if(h=ae,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ba(9,h,h.return)}var N=h.sibling;if(N!==null){N.return=h.return,ae=N;break e}ae=h.return}}var q=e.current;for(ae=q;ae!==null;){b=ae;var R=b.child;if((b.subtreeFlags&2064)!==0&&R!==null)R.return=b,ae=R;else e:for(b=q;ae!==null;){if(S=ae,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Fl(9,S)}}catch(se){lt(S,S.return,se)}if(S===b){ae=null;break e}var W=S.sibling;if(W!==null){W.return=S.return,ae=W;break e}ae=S.return}}if(Ce=c,lr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot($a,e)}catch{}s=!0}return s}finally{He=l,nn.transition=n}}return!1}function kp(e,n,l){n=v0(l,n),n=Pc(e,n,1),e=ir(e,n,1),n=At(),e!==null&&(U0(e,1,n),Ot(e,n))}function lt(e,n,l){if(e.tag===3)kp(e,e,l);else for(;n!==null;){if(n.tag===3){kp(n,e,l);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ur===null||!ur.has(s))){e=v0(l,e),e=Oc(n,e,1),n=ir(n,e,1),e=At(),n!==null&&(U0(n,1,e),Ot(n,e));break}}n=n.return}}function Qh(e,n,l){var s=e.pingCache;s!==null&&s.delete(n),n=At(),e.pingedLanes|=e.suspendedLanes&l,yt===e&&(St&l)===l&&(xt===4||xt===3&&(St&130023424)===St&&500>st()-ls?Pr(e,0):as|=l),Ot(e,n)}function Sp(e,n){n===0&&((e.mode&1)===0?n=1:(n=Ga,Ga<<=1,(Ga&130023424)===0&&(Ga=4194304)));var l=At();e=Rn(e,n),e!==null&&(U0(e,n,l),Ot(e,l))}function Yh(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),Sp(e,l)}function Jh(e,n){var l=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(l=c.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(r(314))}s!==null&&s.delete(n),Sp(e,l)}var _p;_p=function(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps||Dt.current)Bt=!0;else{if((e.lanes&l)===0&&(n.flags&128)===0)return Bt=!1,Ph(e,n,l);Bt=(e.flags&131072)!==0}else Bt=!1,We&&(n.flags&1048576)!==0&&rc(n,ml,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;ql(e,n),e=n.pendingProps;var c=c0(n,Lt.current);x0(n,l),c=Ki(null,n,s,e,c,l);var h=Di();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,It(s)?(h=!0,fl(n)):h=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ti(n),c.updater=Ml,n.stateNode=c,c._reactInternals=n,ji(n,s,e,l),n=Gi(null,n,s,!0,h,l)):(n.tag=0,We&&h&&bi(n),qt(null,n,c,l),n=n.child),n;case 16:s=n.elementType;e:{switch(ql(e,n),e=n.pendingProps,c=s._init,s=c(s._payload),n.type=s,c=n.tag=tm(s),e=pn(s,e),c){case 0:n=Ui(null,n,s,e,l);break e;case 1:n=Zc(null,n,s,e,l);break e;case 11:n=$c(null,n,s,e,l);break e;case 14:n=Uc(null,n,s,pn(s.type,e),l);break e}throw Error(r(306,s,""))}return n;case 0:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:pn(s,c),Ui(e,n,s,c,l);case 1:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:pn(s,c),Zc(e,n,s,c,l);case 3:e:{if(Qc(n),e===null)throw Error(r(387));s=n.pendingProps,h=n.memoizedState,c=h.element,fc(e,n),wl(n,s,null,l);var b=n.memoizedState;if(s=b.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){c=v0(Error(r(423)),n),n=Yc(e,n,s,l,c);break e}else if(s!==c){c=v0(Error(r(424)),n),n=Yc(e,n,s,l,c);break e}else for(Ut=nr(n.stateNode.containerInfo.firstChild),$t=n,We=!0,cn=null,l=cc(n,null,s,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(d0(),s===c){n=Dn(e,n,l);break e}qt(e,n,s,l)}n=n.child}return n;case 5:return mc(n),e===null&&ki(n),s=n.type,c=n.pendingProps,h=e!==null?e.memoizedProps:null,b=c.children,di(s,c)?b=null:h!==null&&di(s,h)&&(n.flags|=32),Xc(e,n),qt(e,n,b,l),n.child;case 6:return e===null&&ki(n),null;case 13:return Jc(e,n,l);case 4:return qi(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=h0(n,null,s,l):qt(e,n,s,l),n.child;case 11:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:pn(s,c),$c(e,n,s,c,l);case 7:return qt(e,n,n.pendingProps,l),n.child;case 8:return qt(e,n,n.pendingProps.children,l),n.child;case 12:return qt(e,n,n.pendingProps.children,l),n.child;case 10:e:{if(s=n.type._context,c=n.pendingProps,h=n.memoizedProps,b=c.value,$e(vl,s._currentValue),s._currentValue=b,h!==null)if(un(h.value,b)){if(h.children===c.children&&!Dt.current){n=Dn(e,n,l);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var S=h.dependencies;if(S!==null){b=h.child;for(var M=S.firstContext;M!==null;){if(M.context===s){if(h.tag===1){M=Kn(-1,l&-l),M.tag=2;var D=h.updateQueue;if(D!==null){D=D.shared;var H=D.pending;H===null?M.next=M:(M.next=H.next,H.next=M),D.pending=M}}h.lanes|=l,M=h.alternate,M!==null&&(M.lanes|=l),Ei(h.return,l,n),S.lanes|=l;break}M=M.next}}else if(h.tag===10)b=h.type===n.type?null:h.child;else if(h.tag===18){if(b=h.return,b===null)throw Error(r(341));b.lanes|=l,S=b.alternate,S!==null&&(S.lanes|=l),Ei(b,l,n),b=h.sibling}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===n){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}qt(e,n,c.children,l),n=n.child}return n;case 9:return c=n.type,s=n.pendingProps.children,x0(n,l),c=en(c),s=s(c),n.flags|=1,qt(e,n,s,l),n.child;case 14:return s=n.type,c=pn(s,n.pendingProps),c=pn(s.type,c),Uc(e,n,s,c,l);case 15:return Gc(e,n,n.type,n.pendingProps,l);case 17:return s=n.type,c=n.pendingProps,c=n.elementType===s?c:pn(s,c),ql(e,n),n.tag=1,It(s)?(e=!0,fl(n)):e=!1,x0(n,l),Ic(n,s,c),ji(n,s,c,l),Gi(null,n,s,!0,e,l);case 19:return tp(e,n,l);case 22:return Wc(e,n,l)}throw Error(r(156,n.tag))};function Lp(e,n){return a1(e,n)}function em(e,n,l,s){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,n,l,s){return new em(e,n,l,s)}function ds(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tm(e){if(typeof e=="function")return ds(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Be)return 11;if(e===at)return 14}return 2}function dr(e,n){var l=e.alternate;return l===null?(l=rn(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&14680064,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l}function Ol(e,n,l,s,c,h){var b=2;if(s=e,typeof e=="function")ds(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case me:return Hr(l.children,c,h,n);case ge:b=8,c|=8;break;case Ee:return e=rn(12,l,n,c|2),e.elementType=Ee,e.lanes=h,e;case Qe:return e=rn(13,l,n,c),e.elementType=Qe,e.lanes=h,e;case rt:return e=rn(19,l,n,c),e.elementType=rt,e.lanes=h,e;case Oe:return Hl(l,c,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ae:b=10;break e;case it:b=9;break e;case Be:b=11;break e;case at:b=14;break e;case Ye:b=16,s=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=rn(b,l,n,c),n.elementType=e,n.type=s,n.lanes=h,n}function Hr(e,n,l,s){return e=rn(7,e,s,n),e.lanes=l,e}function Hl(e,n,l,s){return e=rn(22,e,s,n),e.elementType=Oe,e.lanes=l,e.stateNode={isHidden:!1},e}function hs(e,n,l){return e=rn(6,e,null,n),e.lanes=l,e}function ms(e,n,l){return n=rn(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function nm(e,n,l,s,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=s,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function xs(e,n,l,s,c,h,b,S,M){return e=new nm(e,n,l,S,M),n===1?(n=1,h===!0&&(n|=8)):n=0,h=rn(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:s,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ti(h),e}function rm(e,n,l){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:s==null?null:""+s,children:e,containerInfo:n,implementation:l}}function zp(e){if(!e)return ar;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(It(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var l=e.type;if(It(l))return ec(e,l,n)}return n}function Ep(e,n,l,s,c,h,b,S,M){return e=xs(l,s,!0,e,c,h,b,S,M),e.context=zp(null),l=e.current,s=At(),c=pr(l),h=Kn(s,c),h.callback=n??null,ir(l,h,c),e.current.lanes=c,U0(e,c,s),Ot(e,s),e}function jl(e,n,l,s){var c=n.current,h=At(),b=pr(c);return l=zp(l),n.context===null?n.context=l:n.pendingContext=l,n=Kn(h,b),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=ir(c,n,b),e!==null&&(hn(e,c,b,h),yl(e,c,b)),b}function Vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function gs(e,n){Mp(e,n),(e=e.alternate)&&Mp(e,n)}function am(){return null}var Tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function vs(e){this._internalRoot=e}$l.prototype.render=vs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));jl(e,n,null,null)},$l.prototype.unmount=vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Br(function(){jl(null,e,null,null)}),n[An]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var n=f1();e={blockedOn:null,target:e,priority:n};for(var l=0;l<Jn.length&&n!==0&&n<Jn[l].priority;l++);Jn.splice(l,0,e),l===0&&m1(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qp(){}function lm(e,n,l,s,c){if(c){if(typeof s=="function"){var h=s;s=function(){var D=Vl(b);h.call(D)}}var b=Ep(n,s,e,0,null,!1,!1,"",qp);return e._reactRootContainer=b,e[An]=b.current,oa(e.nodeType===8?e.parentNode:e),Br(),b}for(;c=e.lastChild;)e.removeChild(c);if(typeof s=="function"){var S=s;s=function(){var D=Vl(M);S.call(D)}}var M=xs(e,0,!1,null,null,!1,!1,"",qp);return e._reactRootContainer=M,e[An]=M.current,oa(e.nodeType===8?e.parentNode:e),Br(function(){jl(n,M,l,s)}),M}function Gl(e,n,l,s,c){var h=l._reactRootContainer;if(h){var b=h;if(typeof c=="function"){var S=c;c=function(){var M=Vl(b);S.call(M)}}jl(n,b,e,c)}else b=lm(l,n,e,c,s);return Vl(b)}c1=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var l=$0(n.pendingLanes);l!==0&&(jo(n,l|1),Ot(n,st()),(Ce&6)===0&&(w0=st()+500,lr()))}break;case 13:Br(function(){var s=Rn(e,1);if(s!==null){var c=At();hn(s,e,1,c)}}),gs(e,1)}},Vo=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var l=At();hn(n,e,134217728,l)}gs(e,134217728)}},p1=function(e){if(e.tag===13){var n=pr(e),l=Rn(e,n);if(l!==null){var s=At();hn(l,e,n,s)}gs(e,n)}},f1=function(){return He},d1=function(e,n){var l=He;try{return He=e,n()}finally{He=l}},Ko=function(e,n,l){switch(n){case"input":if(N0(e,l),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<l.length;n++){var s=l[n];if(s!==e&&s.form===e.form){var c=cl(s);if(!c)throw Error(r(90));C0(s),N0(s,c)}}}break;case"textarea":D0(e,l);break;case"select":n=l.value,n!=null&&Xn(e,!!l.multiple,n,!1)}},Qu=cs,Yu=Br;var om={usingClientEntryPoint:!1,Events:[ua,s0,cl,Xu,Zu,cs]},Sa={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},im={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n1(e),e===null?null:e.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||am,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{$a=Wl.inject(im),vn=Wl}catch{}}return Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om,Ht.createPortal=function(e,n){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(n))throw Error(r(200));return rm(e,n,null,l)},Ht.createRoot=function(e,n){if(!bs(e))throw Error(r(299));var l=!1,s="",c=Tp;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=xs(e,1,!1,null,null,l,!1,s,c),e[An]=n.current,oa(e.nodeType===8?e.parentNode:e),new vs(n)},Ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=n1(n),e=e===null?null:e.stateNode,e},Ht.flushSync=function(e){return Br(e)},Ht.hydrate=function(e,n,l){if(!Ul(n))throw Error(r(200));return Gl(null,e,n,!0,l)},Ht.hydrateRoot=function(e,n,l){if(!bs(e))throw Error(r(405));var s=l!=null&&l.hydratedSources||null,c=!1,h="",b=Tp;if(l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(h=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),n=Ep(n,null,e,1,l??null,c,!1,h,b),e[An]=n.current,oa(e),s)for(e=0;e<s.length;e++)l=s[e],c=l._getVersion,c=c(l._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[l,c]:n.mutableSourceEagerHydrationData.push(l,c);return new $l(n)},Ht.render=function(e,n,l){if(!Ul(n))throw Error(r(200));return Gl(null,e,n,!1,l)},Ht.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(r(40));return e._reactRootContainer?(Br(function(){Gl(null,null,e,!1,function(){e._reactRootContainer=null,e[An]=null})}),!0):!1},Ht.unstable_batchedUpdates=cs,Ht.unstable_renderSubtreeIntoContainer=function(e,n,l,s){if(!Ul(l))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Gl(e,n,l,!1,s)},Ht.version="18.3.1-next-f1338f8080-20240426",Ht}var Ip;function Vf(){if(Ip)return ks.exports;Ip=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),ks.exports=vm(),ks.exports}var Bp;function bm(){if(Bp)return Xl;Bp=1;var a=Vf();return Xl.createRoot=a.createRoot,Xl.hydrateRoot=a.hydrateRoot,Xl}var ym=bm(),Q=mu();const wm=fm(Q),km=pm({__proto__:null,default:wm},[Q]);Vf();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},qa.apply(this,arguments)}var gr;(function(a){a.Pop="POP",a.Push="PUSH",a.Replace="REPLACE"})(gr||(gr={}));const Pp="popstate";function Sm(a){a===void 0&&(a={});function t(i,u){let{pathname:p="/",search:d="",hash:x=""}=Wr(i.location.hash.substr(1));return!p.startsWith("/")&&!p.startsWith(".")&&(p="/"+p),js("",{pathname:p,search:d,hash:x},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(i,u){let p=i.document.querySelector("base"),d="";if(p&&p.getAttribute("href")){let x=i.location.href,g=x.indexOf("#");d=g===-1?x:x.slice(0,g)}return d+"#"+(typeof u=="string"?u:so(u))}function o(i,u){xo(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return Lm(t,r,o,a)}function ct(a,t){if(a===!1||a===null||typeof a>"u")throw new Error(t)}function xo(a,t){if(!a){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _m(){return Math.random().toString(36).substr(2,8)}function Op(a,t){return{usr:a.state,key:a.key,idx:t}}function js(a,t,r,o){return r===void 0&&(r=null),qa({pathname:typeof a=="string"?a:a.pathname,search:"",hash:""},typeof t=="string"?Wr(t):t,{state:r,key:t&&t.key||o||_m()})}function so(a){let{pathname:t="/",search:r="",hash:o=""}=a;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function Wr(a){let t={};if(a){let r=a.indexOf("#");r>=0&&(t.hash=a.substr(r),a=a.substr(0,r));let o=a.indexOf("?");o>=0&&(t.search=a.substr(o),a=a.substr(0,o)),a&&(t.pathname=a)}return t}function Lm(a,t,r,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:u=!1}=o,p=i.history,d=gr.Pop,x=null,g=y();g==null&&(g=0,p.replaceState(qa({},p.state,{idx:g}),""));function y(){return(p.state||{idx:null}).idx}function k(){d=gr.Pop;let F=y(),P=F==null?null:F-g;g=F,x&&x({action:d,location:C.location,delta:P})}function L(F,P){d=gr.Push;let V=js(C.location,F,P);r&&r(V,F),g=y()+1;let Z=Op(V,g),re=C.createHref(V);try{p.pushState(Z,"",re)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;i.location.assign(re)}u&&x&&x({action:d,location:C.location,delta:1})}function E(F,P){d=gr.Replace;let V=js(C.location,F,P);r&&r(V,F),g=y();let Z=Op(V,g),re=C.createHref(V);p.replaceState(Z,"",re),u&&x&&x({action:d,location:C.location,delta:0})}function K(F){let P=i.location.origin!=="null"?i.location.origin:i.location.href,V=typeof F=="string"?F:so(F);return V=V.replace(/ $/,"%20"),ct(P,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,P)}let C={get action(){return d},get location(){return a(i,p)},listen(F){if(x)throw new Error("A history only accepts one active listener");return i.addEventListener(Pp,k),x=F,()=>{i.removeEventListener(Pp,k),x=null}},createHref(F){return t(i,F)},createURL:K,encodeLocation(F){let P=K(F);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:L,replace:E,go(F){return p.go(F)}};return C}var Hp;(function(a){a.data="data",a.deferred="deferred",a.redirect="redirect",a.error="error"})(Hp||(Hp={}));function zm(a,t,r){return r===void 0&&(r="/"),Em(a,t,r)}function Em(a,t,r,o){let i=typeof t=="string"?Wr(t):t,u=xu(i.pathname||"/",r);if(u==null)return null;let p=$f(a);Mm(p);let d=null;for(let x=0;d==null&&x<p.length;++x){let g=Pm(u);d=Dm(p[x],g)}return d}function $f(a,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let i=(u,p,d)=>{let x={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:p,route:u};x.relativePath.startsWith("/")&&(ct(x.relativePath.startsWith(o),'Absolute route path "'+x.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),x.relativePath=x.relativePath.slice(o.length));let g=yr([o,x.relativePath]),y=r.concat(x);u.children&&u.children.length>0&&(ct(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),$f(u.children,t,y,g)),!(u.path==null&&!u.index)&&t.push({path:g,score:Rm(g,u.index),routesMeta:y})};return a.forEach((u,p)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))i(u,p);else for(let x of Uf(u.path))i(u,p,x)}),t}function Uf(a){let t=a.split("/");if(t.length===0)return[];let[r,...o]=t,i=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return i?[u,""]:[u];let p=Uf(o.join("/")),d=[];return d.push(...p.map(x=>x===""?u:[u,x].join("/"))),i&&d.push(...p),d.map(x=>a.startsWith("/")&&x===""?"/":x)}function Mm(a){a.sort((t,r)=>t.score!==r.score?r.score-t.score:Km(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Tm=/^:[\w-]+$/,qm=3,Am=2,Fm=1,Cm=10,Nm=-2,jp=a=>a==="*";function Rm(a,t){let r=a.split("/"),o=r.length;return r.some(jp)&&(o+=Nm),t&&(o+=Am),r.filter(i=>!jp(i)).reduce((i,u)=>i+(Tm.test(u)?qm:u===""?Fm:Cm),o)}function Km(a,t){return a.length===t.length&&a.slice(0,-1).every((o,i)=>o===t[i])?a[a.length-1]-t[t.length-1]:0}function Dm(a,t,r){let{routesMeta:o}=a,i={},u="/",p=[];for(let d=0;d<o.length;++d){let x=o[d],g=d===o.length-1,y=u==="/"?t:t.slice(u.length)||"/",k=Im({path:x.relativePath,caseSensitive:x.caseSensitive,end:g},y),L=x.route;if(!k)return null;Object.assign(i,k.params),p.push({params:i,pathname:yr([u,k.pathname]),pathnameBase:$m(yr([u,k.pathnameBase])),route:L}),k.pathnameBase!=="/"&&(u=yr([u,k.pathnameBase]))}return p}function Im(a,t){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=Bm(a.path,a.caseSensitive,a.end),i=t.match(r);if(!i)return null;let u=i[0],p=u.replace(/(.)\/+$/,"$1"),d=i.slice(1);return{params:o.reduce((g,y,k)=>{let{paramName:L,isOptional:E}=y;if(L==="*"){let C=d[k]||"";p=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const K=d[k];return E&&!K?g[L]=void 0:g[L]=(K||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:p,pattern:a}}function Bm(a,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xo(a==="*"||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were '+('"'+a.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+a.replace(/\*$/,"/*")+'".'));let o=[],i="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,d,x)=>(o.push({paramName:d,isOptional:x!=null}),x?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(o.push({paramName:"*"}),i+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":a!==""&&a!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),o]}function Pm(a){try{return a.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xo(!1,'The URL path "'+a+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),a}}function xu(a,t){if(t==="/")return a;if(!a.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}const Om=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hm=a=>Om.test(a);function jm(a,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:i=""}=typeof a=="string"?Wr(a):a,u;if(r)if(Hm(r))u=r;else{if(r.includes("//")){let p=r;r=r.replace(/\/\/+/g,"/"),xo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(p+" -> "+r))}r.startsWith("/")?u=Vp(r.substring(1),"/"):u=Vp(r,t)}else u=t;return{pathname:u,search:Um(o),hash:Gm(i)}}function Vp(a,t){let r=t.replace(/\/+$/,"").split("/");return a.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function Ls(a,t,r,o){return"Cannot include a '"+a+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vm(a){return a.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gu(a,t){let r=Vm(a);return t?r.map((o,i)=>i===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function vu(a,t,r,o){o===void 0&&(o=!1);let i;typeof a=="string"?i=Wr(a):(i=qa({},a),ct(!i.pathname||!i.pathname.includes("?"),Ls("?","pathname","search",i)),ct(!i.pathname||!i.pathname.includes("#"),Ls("#","pathname","hash",i)),ct(!i.search||!i.search.includes("#"),Ls("#","search","hash",i)));let u=a===""||i.pathname==="",p=u?"/":i.pathname,d;if(p==null)d=r;else{let k=t.length-1;if(!o&&p.startsWith("..")){let L=p.split("/");for(;L[0]==="..";)L.shift(),k-=1;i.pathname=L.join("/")}d=k>=0?t[k]:"/"}let x=jm(i,d),g=p&&p!=="/"&&p.endsWith("/"),y=(u||p===".")&&r.endsWith("/");return!x.pathname.endsWith("/")&&(g||y)&&(x.pathname+="/"),x}const yr=a=>a.join("/").replace(/\/\/+/g,"/"),$m=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),Um=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Gm=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function Wm(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}const Gf=["post","put","patch","delete"];new Set(Gf);const Xm=["get",...Gf];new Set(Xm);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},Aa.apply(this,arguments)}const bu=Q.createContext(null),Zm=Q.createContext(null),zr=Q.createContext(null),go=Q.createContext(null),Vn=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),Wf=Q.createContext(null);function Qm(a,t){let{relative:r}=t===void 0?{}:t;M0()||ct(!1);let{basename:o,navigator:i}=Q.useContext(zr),{hash:u,pathname:p,search:d}=Qf(a,{relative:r}),x=p;return o!=="/"&&(x=p==="/"?o:yr([o,p])),i.createHref({pathname:x,search:d,hash:u})}function M0(){return Q.useContext(go)!=null}function T0(){return M0()||ct(!1),Q.useContext(go).location}function Xf(a){Q.useContext(zr).static||Q.useLayoutEffect(a)}function Zf(){let{isDataRoute:a}=Q.useContext(Vn);return a?p4():Ym()}function Ym(){M0()||ct(!1);let a=Q.useContext(bu),{basename:t,future:r,navigator:o}=Q.useContext(zr),{matches:i}=Q.useContext(Vn),{pathname:u}=T0(),p=JSON.stringify(gu(i,r.v7_relativeSplatPath)),d=Q.useRef(!1);return Xf(()=>{d.current=!0}),Q.useCallback(function(g,y){if(y===void 0&&(y={}),!d.current)return;if(typeof g=="number"){o.go(g);return}let k=vu(g,JSON.parse(p),u,y.relative==="path");a==null&&t!=="/"&&(k.pathname=k.pathname==="/"?t:yr([t,k.pathname])),(y.replace?o.replace:o.push)(k,y.state,y)},[t,o,p,u,a])}function Jm(){let{matches:a}=Q.useContext(Vn),t=a[a.length-1];return t?t.params:{}}function Qf(a,t){let{relative:r}=t===void 0?{}:t,{future:o}=Q.useContext(zr),{matches:i}=Q.useContext(Vn),{pathname:u}=T0(),p=JSON.stringify(gu(i,o.v7_relativeSplatPath));return Q.useMemo(()=>vu(a,JSON.parse(p),u,r==="path"),[a,p,u,r])}function e4(a,t){return t4(a,t)}function t4(a,t,r,o){M0()||ct(!1);let{navigator:i}=Q.useContext(zr),{matches:u}=Q.useContext(Vn),p=u[u.length-1],d=p?p.params:{};p&&p.pathname;let x=p?p.pathnameBase:"/";p&&p.route;let g=T0(),y;if(t){var k;let F=typeof t=="string"?Wr(t):t;x==="/"||(k=F.pathname)!=null&&k.startsWith(x)||ct(!1),y=F}else y=g;let L=y.pathname||"/",E=L;if(x!=="/"){let F=x.replace(/^\//,"").split("/");E="/"+L.replace(/^\//,"").split("/").slice(F.length).join("/")}let K=zm(a,{pathname:E}),C=o4(K&&K.map(F=>Object.assign({},F,{params:Object.assign({},d,F.params),pathname:yr([x,i.encodeLocation?i.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?x:yr([x,i.encodeLocation?i.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),u,r,o);return t&&C?Q.createElement(go.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:gr.Pop}},C):C}function n4(){let a=c4(),t=Wm(a)?a.status+" "+a.statusText:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},t),r?Q.createElement("pre",{style:i},r):null,null)}const r4=Q.createElement(n4,null);class a4 extends Q.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?Q.createElement(Vn.Provider,{value:this.props.routeContext},Q.createElement(Wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l4(a){let{routeContext:t,match:r,children:o}=a,i=Q.useContext(bu);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),Q.createElement(Vn.Provider,{value:t},o)}function o4(a,t,r,o){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),a==null){var u;if(!r)return null;if(r.errors)a=r.matches;else if((u=o)!=null&&u.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)a=r.matches;else return null}let p=a,d=(i=r)==null?void 0:i.errors;if(d!=null){let y=p.findIndex(k=>k.route.id&&(d==null?void 0:d[k.route.id])!==void 0);y>=0||ct(!1),p=p.slice(0,Math.min(p.length,y+1))}let x=!1,g=-1;if(r&&o&&o.v7_partialHydration)for(let y=0;y<p.length;y++){let k=p[y];if((k.route.HydrateFallback||k.route.hydrateFallbackElement)&&(g=y),k.route.id){let{loaderData:L,errors:E}=r,K=k.route.loader&&L[k.route.id]===void 0&&(!E||E[k.route.id]===void 0);if(k.route.lazy||K){x=!0,g>=0?p=p.slice(0,g+1):p=[p[0]];break}}}return p.reduceRight((y,k,L)=>{let E,K=!1,C=null,F=null;r&&(E=d&&k.route.id?d[k.route.id]:void 0,C=k.route.errorElement||r4,x&&(g<0&&L===0?(f4("route-fallback"),K=!0,F=null):g===L&&(K=!0,F=k.route.hydrateFallbackElement||null)));let P=t.concat(p.slice(0,L+1)),V=()=>{let Z;return E?Z=C:K?Z=F:k.route.Component?Z=Q.createElement(k.route.Component,null):k.route.element?Z=k.route.element:Z=y,Q.createElement(l4,{match:k,routeContext:{outlet:y,matches:P,isDataRoute:r!=null},children:Z})};return r&&(k.route.ErrorBoundary||k.route.errorElement||L===0)?Q.createElement(a4,{location:r.location,revalidation:r.revalidation,component:C,error:E,children:V(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):V()},null)}var Yf=(function(a){return a.UseBlocker="useBlocker",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a})(Yf||{}),Jf=(function(a){return a.UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a})(Jf||{});function i4(a){let t=Q.useContext(bu);return t||ct(!1),t}function s4(a){let t=Q.useContext(Zm);return t||ct(!1),t}function u4(a){let t=Q.useContext(Vn);return t||ct(!1),t}function e2(a){let t=u4(),r=t.matches[t.matches.length-1];return r.route.id||ct(!1),r.route.id}function c4(){var a;let t=Q.useContext(Wf),r=s4(),o=e2();return t!==void 0?t:(a=r.errors)==null?void 0:a[o]}function p4(){let{router:a}=i4(Yf.UseNavigateStable),t=e2(Jf.UseNavigateStable),r=Q.useRef(!1);return Xf(()=>{r.current=!0}),Q.useCallback(function(i,u){u===void 0&&(u={}),r.current&&(typeof i=="number"?a.navigate(i):a.navigate(i,Aa({fromRouteId:t},u)))},[a,t])}const $p={};function f4(a,t,r){$p[a]||($p[a]=!0)}function d4(a,t){a==null||a.v7_startTransition,a==null||a.v7_relativeSplatPath}function h4(a){let{to:t,replace:r,state:o,relative:i}=a;M0()||ct(!1);let{future:u,static:p}=Q.useContext(zr),{matches:d}=Q.useContext(Vn),{pathname:x}=T0(),g=Zf(),y=vu(t,gu(d,u.v7_relativeSplatPath),x,i==="path"),k=JSON.stringify(y);return Q.useEffect(()=>g(JSON.parse(k),{replace:r,state:o,relative:i}),[g,k,i,r,o]),null}function lo(a){ct(!1)}function m4(a){let{basename:t="/",children:r=null,location:o,navigationType:i=gr.Pop,navigator:u,static:p=!1,future:d}=a;M0()&&ct(!1);let x=t.replace(/^\/*/,"/"),g=Q.useMemo(()=>({basename:x,navigator:u,static:p,future:Aa({v7_relativeSplatPath:!1},d)}),[x,d,u,p]);typeof o=="string"&&(o=Wr(o));let{pathname:y="/",search:k="",hash:L="",state:E=null,key:K="default"}=o,C=Q.useMemo(()=>{let F=xu(y,x);return F==null?null:{location:{pathname:F,search:k,hash:L,state:E,key:K},navigationType:i}},[x,y,k,L,E,K,i]);return C==null?null:Q.createElement(zr.Provider,{value:g},Q.createElement(go.Provider,{children:r,value:C}))}function x4(a){let{children:t,location:r}=a;return e4(Vs(t),r)}new Promise(()=>{});function Vs(a,t){t===void 0&&(t=[]);let r=[];return Q.Children.forEach(a,(o,i)=>{if(!Q.isValidElement(o))return;let u=[...t,i];if(o.type===Q.Fragment){r.push.apply(r,Vs(o.props.children,u));return}o.type!==lo&&ct(!1),!o.props.index||!o.props.children||ct(!1);let p={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(p.children=Vs(o.props.children,u)),r.push(p)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $s(){return $s=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(a[o]=r[o])}return a},$s.apply(this,arguments)}function g4(a,t){if(a==null)return{};var r={},o=Object.keys(a),i,u;for(u=0;u<o.length;u++)i=o[u],!(t.indexOf(i)>=0)&&(r[i]=a[i]);return r}function v4(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function b4(a,t){return a.button===0&&(!t||t==="_self")&&!v4(a)}const y4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],w4="6";try{window.__reactRouterVersion=w4}catch{}const k4="startTransition",Up=km[k4];function S4(a){let{basename:t,children:r,future:o,window:i}=a,u=Q.useRef();u.current==null&&(u.current=Sm({window:i,v5Compat:!0}));let p=u.current,[d,x]=Q.useState({action:p.action,location:p.location}),{v7_startTransition:g}=o||{},y=Q.useCallback(k=>{g&&Up?Up(()=>x(k)):x(k)},[x,g]);return Q.useLayoutEffect(()=>p.listen(y),[p,y]),Q.useEffect(()=>d4(o),[o]),Q.createElement(m4,{basename:t,children:r,location:d.location,navigationType:d.action,navigator:p,future:o})}const _4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wr=Q.forwardRef(function(t,r){let{onClick:o,relative:i,reloadDocument:u,replace:p,state:d,target:x,to:g,preventScrollReset:y,viewTransition:k}=t,L=g4(t,y4),{basename:E}=Q.useContext(zr),K,C=!1;if(typeof g=="string"&&L4.test(g)&&(K=g,_4))try{let Z=new URL(window.location.href),re=g.startsWith("//")?new URL(Z.protocol+g):new URL(g),ue=xu(re.pathname,E);re.origin===Z.origin&&ue!=null?g=ue+re.search+re.hash:C=!0}catch{}let F=Qm(g,{relative:i}),P=z4(g,{replace:p,state:d,target:x,preventScrollReset:y,relative:i,viewTransition:k});function V(Z){o&&o(Z),Z.defaultPrevented||P(Z)}return Q.createElement("a",$s({},L,{href:K||F,onClick:C||u?o:V,ref:r,target:x}))});var Gp;(function(a){a.UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState"})(Gp||(Gp={}));var Wp;(function(a){a.UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"})(Wp||(Wp={}));function z4(a,t){let{target:r,replace:o,state:i,preventScrollReset:u,relative:p,viewTransition:d}=t===void 0?{}:t,x=Zf(),g=T0(),y=Qf(a,{relative:p});return Q.useCallback(k=>{if(b4(k,r)){k.preventDefault();let L=o!==void 0?o:so(g)===so(y);x(a,{replace:L,state:i,preventScrollReset:u,relative:p,viewTransition:d})}},[g,x,y,o,i,r,a,u,p,d])}const t2={bg:"#0a0e17",card:"#111827",cardHover:"#1a2332",surface:"#0f1623",accent:"#f59e0b",accentDim:"#b45309",accentSoft:"rgba(245,158,11,0.08)",theta:"#3b82f6",thetaSoft:"rgba(59,130,246,0.12)",eta:"#ef4444",etaSoft:"rgba(239,68,68,0.12)",dual:"#8b5cf6",dualSoft:"rgba(139,92,246,0.08)",green:"#10b981",greenSoft:"rgba(16,185,129,0.12)",cyan:"#06b6d4",cyanSoft:"rgba(6,182,212,0.12)",text:"#e5e7eb",textDim:"#6b7280",textMuted:"#374151",border:"#1f2937"},n2={bg:"#f8f9fa",card:"#ffffff",cardHover:"#f0f1f3",surface:"#f1f3f5",accent:"#d97706",accentDim:"#92400e",accentSoft:"rgba(217,119,6,0.08)",theta:"#2563eb",thetaSoft:"rgba(37,99,235,0.10)",eta:"#dc2626",etaSoft:"rgba(220,38,38,0.10)",dual:"#7c3aed",dualSoft:"rgba(124,58,237,0.06)",green:"#059669",greenSoft:"rgba(5,150,105,0.10)",cyan:"#0891b2",cyanSoft:"rgba(8,145,178,0.10)",text:"#1f2937",textDim:"#6b7280",textMuted:"#d1d5db",border:"#e5e7eb"};let vr=localStorage.getItem("theme")||"dark",r2=vr==="light"?{...n2}:{...t2};const Us=new Set;function a2(){const a=vr==="light"?n2:t2;Object.assign(r2,a);const t=document.documentElement;for(const[r,o]of Object.entries(a))t.style.setProperty(`--c-${r}`,o);t.setAttribute("data-theme",vr),localStorage.setItem("theme",vr),Us.forEach(r=>r(vr))}a2();function E4(){return vr}function M4(a){vr=a,a2()}function T4(){M4(vr==="dark"?"light":"dark")}function l2(a){return Us.add(a),()=>Us.delete(a)}const ye=r2,an={mono:"'JetBrains Mono', 'Fira Code', monospace",serif:"'Playfair Display', Georgia, serif"},Mx={get background(){return ye.card},borderRadius:10,get border(){return`1px solid ${ye.border}`}};function Tx(a,t,r){const o=a.current;if(!o)return null;const i=o.getContext("2d"),u=window.devicePixelRatio||1;return o.width=t*u,o.height=r*u,i.scale(u,u),i.clearRect(0,0,t,r),A4(i,o.clientWidth?o.clientWidth/t:1),i}const q4=10,Xp=Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype,"font");function A4(a,t){a.__fontScale=Math.min(1,t||1),!a.__fontPatched&&(a.__fontPatched=!0,Object.defineProperty(a,"font",{configurable:!0,get(){return Xp.get.call(this)},set(r){const o=this.__fontScale,i=o<1?String(r).replace(/(\d+(?:\.\d+)?)px/,(u,p)=>`${Math.max(+p,q4/o).toFixed(1)}px`):r;Xp.set.call(this,i)}}))}const F4="modulepreload",C4=function(a){return"/infogeo-book/"+a},Zp={},we=function(t,r,o){let i=Promise.resolve();if(r&&r.length>0){let p=function(g){return Promise.all(g.map(y=>Promise.resolve(y).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),x=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));i=p(r.map(g=>{if(g=C4(g),g in Zp)return;Zp[g]=!0;const y=g.endsWith(".css"),k=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${k}`))return;const L=document.createElement("link");if(L.rel=y?"stylesheet":F4,y||(L.as="script"),L.crossOrigin="",L.href=g,x&&L.setAttribute("nonce",x),document.head.appendChild(L),y)return new Promise((E,K)=>{L.addEventListener("load",E),L.addEventListener("error",()=>K(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(p){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=p,window.dispatchEvent(d),!d.defaultPrevented)throw p}return i.then(p=>{for(const d of p||[])d.status==="rejected"&&u(d.reason);return t().catch(u)})},N4=`# 서문

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

같은 개념이 다른 깊이에서 다시 나타난다. "두 번째 길 — 곱셈으로 걷기"에서 직관으로 만진 학생은, "패턴이 있는 분포들"에서 지수족(log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포 모임)을 배울 때 "아, 그때 그 길!"을 재발견한다. "르장드르 변환"에서 처음 본 르장드르 변환은 "θ와 η를 잇는 다리"에서 θ↔η 좌표 변환으로 다시 나타나며, "아, 여기서 쓰이는 거였구나!"가 된다.

한 번에 이해되지 않아도 된다. 다음 만남에서 더 깊이 보게 된다. 수학은 한 번에 관통하는 것이 아니라 여러 번 스쳐 지나가면서 점점 선명해지는 것이다.

---

## 이 교재를 어떻게 읽을 것인가

### 수학을 두려워하는 사람에게

이 교재는 고등학교 수학수준으로 접근 가능하다. 미적분의 기본 개념(함수, 기울기, 넓이)을 알면 된다. 선형대수나 미분기하학은 전혀 가정하지 않는다. 물론 고급수학이 등장하는 것은 어쩔 수 없다. 하지만 수식의 벽에 막히지 않도록 비유와 시각화, 실행 가능한 코드를 곳곳에 넣었다. 문제를 풀게 만드는 것이 아니라 납득시키고 실행해서 응용해볼 수 있게 하고자 한다.

다만, 코드를 직접 돌려보는 것은 필수다. 비유를 읽고 "알겠다"고 넘어가면 절반만 아는 것이다. JSX 시각화를 직접 만져보고, 파이썬 코드를 직접 실행하고, 숫자가 바뀌는 것을 눈으로 확인해야 한다. 수학의 체화는 손끝에서 일어난다.

### 수학을 이미 아는 사람에게

미분기하학이나 통계학을 이미 아는 사람에게도 이 교재는 가치가 있다. 엄밀한 수학의 언어로는 보이지 않던 직관이 비유와 시각화를 통해 드러나는 경우가 많다. "e-접속과 m-접속의 쌍대성"을 정리로 알고 있는 것과, "덧셈의 길과 곱셈의 길이 같은 두 점을 잇되 다른 곳을 지나간다"는 것을 시각적으로 체감하는 것은 다른 종류의 앎이다.

수식을 이미 아는 사람은 비유 부분을 "그 수식이 진짜로 말하고 있는 것"을 재발견하는 기회로 삼으면 좋다.

### 연습문제와 함께 풀기

각 장의 끝에는 연습문제가 있고, 문제마다 바로 아래에 「함께 풀기」가 붙어 있다. 세 사람이 그 문제를 실제로 풀면서 틀리고, 막히고, 알아채는 과정을 대화로 옮긴 것이다.

〔T01〕 **선생님:** 이 강의를 맡은 사람이에요. 정답을 먼저 말하지 않고, 답이 이상하다는 걸 스스로 보게 만드는 질문부터 던지는 편이에요.

〔M01〕 **김민준:** 학부 3학년이에요. 머신러닝 수업은 몇 개 들었고, 뭐든 일단 numpy로 돌려 보고 말하는 편이라 답이 빨라요. 대신 부호나 인수 순서에서 자주 넘어져요.

〔S01〕 **이서연:** 수학과 3학년이에요. 해석학이랑 선형대수는 자신 있는데, 물리적인 감각은 약해요. 결과가 이상하면 제일 먼저 알아채는 건 저인데, 조건을 빠뜨려서 틀릴 때도 있어요.

두 학생은 같은 문제에서 서로 다른 이유로 틀린다. 독자가 어느 쪽 실수를 하든, 대화 속 어딘가에 자기 자리가 있을 것이다.

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
| X. 정렬(alignment) | 16장 넓히기와 좁히기 | 넓힌 풍경을 얼마나, 어떻게 좁힐 것인가? |
| XI. 최적화 | 17장 스케일링 | 한 걸음의 크기를 공정하게 만드는 법은? |

*에필로그: 지도의 가장자리에서*

가능하면 처음부터 순서대로 읽기를 권한다. 각 장이 이전 장의 감각 위에 쌓이도록 설계되어 있다. 그러나 현실적으로, Part II(점과 거리)를 읽은 후에는 관심에 따라 Part III(길)이나 Part V(볼록성)로 건너뛰어도 무방하다. 다만 3장의 KL 발산 절은 읽어야 한다 — 이후 추론(11장)에서 필수다. Part VI(구조)과 Part VII(곡률과 확신)은 반드시 Part V 이후에 읽어야 한다. 르장드르 변환 없이 지수족의 쌍대 구조를 이해하는 것은 불가능하다.

3막의 정점은 Part VIII(추론과 종합)이다. 추론의 기하학에서 사영을 배우고, 수렴에서 EM 알고리즘으로 사영의 반복을 경험한 뒤, 전체 지도에서 이 교재의 모든 도구가 하나의 그림 안에 들어 있음을 확인한다. Part VII까지의 모든 개념이 여기서 합류하므로, 반드시 순서대로 도달하기를 권한다.

4막은 네 개의 장으로 이루어져 있다. 14장(디퓨전)과 15장(플로우 매칭)은 생성의 이야기이고, 16장(넓히기와 좁히기)은 언어모델 훈련의 이야기이고, 17장(스케일링)은 그러한 모델을 훈련하는 과정을 최적화하는 이야기다. 14장과 15장은 연결되어 있으므로 순서대로 읽기를 권한다. 16장은 10장과 11장의 최종 회수이므로 3막까지를 마친 뒤에 읽어야 한다. 17장은 9장의 피셔 계량을 전제한다. 스케일링에서 피셔 계량이 현실의 최적화 문제에 작동하는 것을 보고, 이 교재가 시작된 원점으로 돌아온다. 증명이나 유도 대신, "이 도구 없이는 읽히지 않던 문장이 이제는 그림이 된다"는 경험이 목표다.

---

## 실용적 가치: AI 세상을 여행하는 언어

이 교재를 쓰게 된 동기에는 순수한 지적 아름다움에 대한 경탄도 있지만, 지극히 실용적인 이유도 있다.

### AI를 자신의 눈으로 이해하려면

2020년대의 AI는 인류 역사상 가장 빠르게 발전하는 기술이다. 매주 새로운 모델이 나오고, 매달 패러다임이 바뀌는 것처럼 보인다. 대부분의 사람들은 이 변화를 뉴스 기사와 SNS 요약으로 따라간다. 그것은 여행 블로그를 읽는 것과 같다 — 누군가의 눈으로 본 풍경을 전해 듣는 것이지, 자신이 그 땅을 밟는 것이 아니다.

AI를 자신의 눈으로 이해하려면 논문을 읽고 관련 구현체의 github 코드와 이슈에 등장하는 토론들을 읽어야 한다. 그것이 유일한 길이다. 다른 사람의 요약과 해석을 거치지 않고, 연구자가 실제로 무엇을 발견했고 무엇을 주장하는지를 원문과 코드로 확인해야 한다. 그래야 과장과 실체를 구분할 수 있고, 진짜 중요한 발전과 마케팅 소음을 구분할 수 있다.

문제는, AI 논문에는 언어가 있다는 것이다.

컴퓨터 세상에 가서 여행을 하려면 자바스크립트나 파이썬 같은 컴퓨터 언어를 알아야 한다. 그 언어를 모르면 코드는 그저 알 수 없는 기호의 나열이다. AI 세상도 마찬가지다. AI 논문의 언어는 선형대수, 확률론, 최적화, 그리고 정보기하학이다. 이 중에서 정보기하학은 가장 덜 알려져 있지만, 점점 더 많은 현대 AI 연구의 밑바닥에 깔려 있는 언어다.

자연 기울기(natural gradient)가 왜 일반 기울기보다 나은지. 변분 추론(variational inference)에서 KL 발산의 방향이 왜 중요한지. 피셔 정보 행렬이 왜 사전훈련과 미세조정의 균형에 등장하는지. 와서스타인 거리(Wasserstein distance)와 KL 발산이 왜 다른 종류의 질문에 답하는지. 이 모든 것의 밑에 정보기하학의 구조가 있다.

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

이 교재에서 수식은 최소한으로 사용된다. 대신 파이썬 코드가 수식의 역할을 한다. 그러나 장이 진행될수록, 코드 옆에 대응하는 수학적 표기를 병기한다.

수식을 처음 만나는 부담을 덜기 위해 모든 수식은 같은 방식으로 적었다. 수식 안의 기호에만 색을 입히고, 수식 바로 아래에 그 식의 기호 표를 단다. 색은 글자가 아니라 개념을 따른다. 같은 개념은 책 전체에서, 그리고 인터랙티브 위젯에서도 같은 색이다. 같은 글자라도 뜻이 다르면 색이 다르다. 그 절에서만 잠깐 쓰는 기호(시간 t, 첨자 i, 개수 n 같은 것)는 색 없이 두고 기호 표에 설명만 적는다.

다음은 교재 전체에서 반복적으로 등장하는 핵심 기호와 그 색이다.

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} & \\text{현실·데이터 분포} \\\\
\\textcolor{#7f8f10}{q},\\ \\textcolor{#7f8f10}{\\pi} & \\text{모형·근사 분포, 정책} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{기준·사전 분포} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수 (e-측지선, e-사영)} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기대모수 (m-측지선, m-사영)} \\\\
\\textcolor{#2e9e6e}{\\mu},\\ \\textcolor{#2e9e6e}{\\sigma},\\ \\textcolor{#2e9e6e}{w} & \\text{일반 모수(분포를 정하는 숫자)·좌표 (1–3장·9장의 } \\theta \\text{ 도 이 색)} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 (합이 1이 되게 나누는 수의 로그)} \\\\
\\textcolor{#c0622f}{F^*} & \\text{르장드르 변환 (쌍대 퍼텐셜)} \\\\
\\textcolor{#5b6fe0}{f} & \\text{일반 볼록함수} \\\\
\\textcolor{#0e93b0}{t(x)} & \\text{충분통계량} \\\\
\\textcolor{#9467bd}{H} & \\text{엔트로피, 교차엔트로피} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산과 그 밖의 발산} \\\\
\\textcolor{#0e8f8f}{I},\\ \\textcolor{#0e8f8f}{g} & \\text{피셔 정보, 피셔 계량} \\\\
\\textcolor{#8f7a5a}{\\alpha},\\ \\textcolor{#8f7a5a}{\\nabla} & \\text{접속을 고르는 값, 접속(무엇을 곧은 길로 볼지 정하는 규칙)} \\\\
\\textcolor{#5d9c2f}{K} & \\text{곡률} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 표본} \\\\
\\textcolor{#8a7fb0}{z} & \\text{잠재변수, 노이즈} \\\\
\\textcolor{#d07a12}{v} & \\text{속도장} \\\\
\\textcolor{#b0892a}{\\nabla_x \\log p} & \\text{데이터에 대한 스코어} \\\\
\\textcolor{#d0721f}{r} & \\text{보상} \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{온도, KL 계수} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{로그우도(모형이 관측에 준 확률의 로그), ELBO(로그우도의 아래 경계)} \\\\
\\textcolor{#c05080}{\\mathcal{L}} & \\text{손실과 그 기울기}
\\end{array}
\`\`\`

이 교재에서 p는 언제나 "현실"이고 q는 언제나 "지도"(모형)다. 이 약속은 3장에서 처음 등장한다.

이 표를 외울 필요는 없다. 각 기호는 처음 등장하는 장에서 충분한 직관과 함께 도입되며, 이후 반복적으로 사용되면서 자연스럽게 익숙해진다. 색이 먼저 눈에 익고, 기호는 그다음에 따라온다.

---

*2026년, 서울에서*
*덧셈의 길과 곱셈의 길 사이 어딘가에서*
`,R4=`# 왜 정보기하학인가

이 책은 한 가지 질문에서 출발한다.

기계학습 모델이 무언가를 "배웠다"고 할 때, 그 모델은 어디에서 어디로 움직인 것일까.

손실이 줄었다, 정확도가 올랐다. 그런 숫자는 우리가 매일 본다. 하지만 그 숫자들 밑에서 실제로 움직이는 것이 무엇인지, 그것이 움직이는 "땅"이 어떻게 생겼는지는 잘 묻지 않는다.

이 장은 그 땅의 입구까지 걸어간다. 먼저 기계학습이 다루는 것이 결국 확률분포라는 것을 확인하고, 그다음 파라미터 공간에서 일어나는 이상한 일들을 구경하고, 마지막으로 그 일들을 읽을 언어가 어디서 왔는지 본다.

## 확률분포: 모델이 내놓는 것

모델이 어디에서 어디로 움직였는지 물으려면, 먼저 모델이 무엇을 내놓는지부터 알아야 한다. 입력을 넣으면 모델은 답을 하나 돌려준다. 정말 그럴까?


### 함수라는 상식

입력이 변하면 출력이 변한다. 온도 조절기에 25도를 넣으면 난방이 꺼지고, 18도를 넣으면 켜진다. 우리는 이것을 함수라고 부른다.

오랫동안 프로그램이란 사람이 이 함수를 직접 쓰는 일이었다. "온도가 20도보다 낮으면 켠다." 규칙을 아는 사람이 규칙을 코드로 옮긴다.

### 기계학습의 핵심 전환

그런데 규칙을 모르는 경우가 있다. 고양이 사진을 보고 "고양이"라고 말하는 규칙을 if 문으로 쓸 수 있는 사람은 없다.

기계학습은 여기서 방향을 바꾼다. 사람은 함수의 틀만 짠다. 틀 안에는 빈칸이 수백만, 수십억 개 남아 있다. 그 빈칸을 채우는 숫자를 파라미터라고 부른다. 빈칸은 기계가 데이터를 보고 채운다.

틀에 무언가를 넣으려면, 먼저 세상을 숫자로 바꿔야 한다. 이미지는 픽셀 밝기의 나열이 된다. 문장은 토큰 번호의 나열이 되고, 다시 벡터가 된다. 소리는 1초에 수만 번 잰 공기 압력의 나열이 된다.

출력도 숫자여야 한다. 여기서 조금 이상한 일이 일어난다.

### 출력은 하나의 값이 아니다

"오늘 저녁은" 다음에 올 단어를 맞히는 언어 모델을 생각하자. "치킨", "라면", "굶는다". 어느 것도 틀렸다고 할 수 없다. 같은 입력 뒤에 올 수 있는 답이 여럿이다.

그래서 언어 모델은 단어 하나를 내놓지 않는다. 어휘 전체에 대한 확률표를 내놓는다. "치킨" 0.4, "라면" 0.3, "굶는다" 0.01, …. 출력이 값 하나가 아니라 가능성의 분포가 된다.

이것은 우연한 설계가 아니다. 세상에는 같은 입력에 여러 답이 있는 일이 흔하고, 모델은 자기가 얼마나 모르는지도 말할 수 있어야 하고, 학습을 하려면 "조금 더 맞게" 고칠 수 있는 매끄러운 출력이 필요하다. 확률표는 세 가지를 한꺼번에 해결한다.

신경망의 마지막 층은 보통 후보마다 아무 실수나 하나씩 내놓는다. 이것을 로짓이라 부른다. 로짓을 확률표로 바꾸는 장치가 소프트맥스다.

\`\`\`latex
\\textcolor{#7f8f10}{q}_i = \\frac{e^{u_i}}{\\sum_j e^{u_j}}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{q}_i & \\text{모형이 후보 } i \\text{ 에 주는 확률} \\\\
u_i & \\text{후보 } i \\text{ 의 로짓 (아무 실수)} \\\\
i,\\ j & \\text{후보의 번호}
\\end{array}
\`\`\`

지수를 씌우면 모든 값이 양수가 되고, 전체 합으로 나누면 합이 1이 된다. 어떤 로짓을 넣어도 나오는 것은 늘 분포다.

{{viz: ch01/softmax}}

### 파이썬

\`\`\`python
import numpy as np

def softmax(u):
    e = np.exp(u - u.max())          # 가장 큰 값을 빼도 결과는 같다 (넘침 방지)
    return e / e.sum()

u = np.array([2.0, 1.0, -1.0])       # 세 후보 토큰의 로짓
q = softmax(u)
print("확률표   ", q.round(3), " 합", q.sum())
print("로짓+100 ", softmax(u + 100).round(3))
print("로짓×3   ", softmax(3 * u).round(3))
print("로짓÷3   ", softmax(u / 3).round(3))
# 확률표    [0.705 0.259 0.035]  합 1.0
# 로짓+100  [0.705 0.259 0.035]
# 로짓×3    [0.952 0.047 0.   ]
# 로짓÷3    [0.48  0.344 0.176]
\`\`\`

모든 로짓에 100을 더해도 확률표는 그대로다. 로짓의 차이만 의미가 있다. 로짓을 키우면 한 후보에 확률이 몰리고, 줄이면 고르게 퍼진다.

### 한 걸음 더 — 파라미터에 대한 믿음

보통의 학습은 파라미터의 값 하나를 찾는다. 가중치 w = 0.73. 점 하나다.

그런데 다른 관점도 있다. 데이터가 유한하니, 우리는 파라미터의 참값을 정확히 알 수 없다. 그렇다면 "w는 0.73이다" 대신 "w는 0.7 근처일 가능성이 높고, 0.5일 가능성도 조금 있다"라고 말하는 편이 정직하다. 파라미터에 대한 우리의 믿음을 분포로 쓰는 것이다.

이것이 베이즈 통계의 관점이다. 모든 통계학자가 이 관점을 따르지는 않는다. 파라미터는 고정된 값이고 흔들리는 것은 데이터뿐이라고 보는 쪽도 있다. 이 책은 두 관점을 모두 쓴다.

### 수확

데이터는 어떤 분포에서 뽑힌 표본이다. 모델의 출력은 분포다. 베이즈 관점에서는 파라미터에 대한 믿음도 분포다.

어디를 보아도 확률분포가 있다. 확률분포가 주인공이 될 수밖에 없다.

확률분포가 주인공이라면, 다음 질문이 따라온다. 분포와 분포 사이는 "얼마나" 먼가? 공정한 동전과 살짝 기운 동전은 "얼마나" 다른가?

![공정한 동전과 기운 동전](/images/chapters/ch01-coin-distance.svg)

그 "얼마나"를 숫자로 쓰려면, 분포가 사는 공간의 지도가 필요하다.

### 문제 1. 로짓을 확률표로

어떤 언어 모델이 세 후보 토큰에 로짓 (2, 1, −1)을 내놓았다. (가) 소프트맥스로 확률표를 구하라. (나) 모든 로짓에 100을 더하면 확률표는 어떻게 되는가? (다) 로짓을 그대로 합으로 나눠 확률표를 만들면 안 되는 이유는 무엇인가?

#### 함께 풀기

**김민준:** (다)부터 할게요. 합으로 나누면 되잖아요? 2 + 1 − 1 = 2니까 (1, 0.5, −0.5)요.

**선생님:** 세 번째 칸 확률이 얼마예요?

〔M04〕 **김민준:** −0.5… 음수 확률이네요. 첫 칸은 1이라서 나머지 둘이 들어갈 자리도 없고요.

**선생님:** 그래서 지수를 먼저 씌우는 거예요. e의 거듭제곱은 늘 양수니까.

**이서연:** 그러면 (가)는 e², e¹, e⁻¹을 합으로 나눠서 (0.705, 0.259, 0.035)예요. (나)는… 100을 더하면 102, 101, 99가 되잖아요. 셋 다 엄청 크고 서로 비슷해지니까, 확률도 거의 균등해질 것 같아요.

**선생님:** 102와 99는 비슷한가요?

**이서연:** 비율로는 거의 1이니까요.

**선생님:** 소프트맥스에 들어가는 건 비율이에요, 차이예요?

〔S06〕 **이서연:** e^102 / e^99 = e³… 차이네요. 차이는 그대로 3이니까 확률표도 그대로예요. 분자 분모에 e^100이 똑같이 붙어서 약분돼요.

**김민준:** 코드로도 똑같이 (0.705, 0.259, 0.035) 나와요. 그래서 numpy 구현에서 최댓값을 빼고 계산하는구나. 빼도 답이 안 바뀌니까.

〔S07〕 **이서연:** 부정적분에서 적분상수를 아무렇게나 잡아도 미분하면 같은 함수가 나오잖아요. 로짓도 그런 거네요. 기준점은 아무 데나 잡아도 되고 차이만 의미가 있어요.

**선생님:** 그래서 로짓 자체는 분포가 아니에요. 분포의 "이름표"일 뿐이고, 같은 분포에 이름표가 무수히 많아요. 이 사실은 뒤에서 여러 번 다시 중요해져요.

## 파라미터 공간에서 벌어지는 마법들

학습이 파라미터라는 빈칸을 채우는 일이라면, 학습하는 동안 모델은 무엇을 지나가고 있는 걸까? 빈칸 하나하나의 값이 바뀌는 것을 넘어, 모델 전체가 어딘가를 걷고 있다고 볼 수는 없을까?

파라미터가 10억 개인 모델이 있다고 하자. 파라미터 값을 한 벌 정하는 것은 10억 차원 공간에 점 하나를 찍는 것이다. 이 공간을 파라미터 공간이라 부른다. 모델 하나가 점 하나다.

이렇게 보면 익숙한 일들이 다르게 보인다.

### 초기화, 학습, 미세조정

학습을 시작할 때 파라미터를 무작위로 정한다. 파라미터 공간의 아무 점에서, 다만 너무 크지 않은 곳에서 출발한다는 뜻이다.

학습은 그 점을 옮기는 일이다. 데이터를 한 묶음 볼 때마다 손실이 줄어드는 쪽으로 한 걸음. 손실 함수는 파라미터 공간 위에 지형을 만들고, 학습은 그 지형을 따라 내려가는 걸음이다.

![파라미터 공간의 손실 지형](/images/chapters/ch01-parameter-landscape.svg)

실제 신경망의 지형을 2차원 단면으로 잘라 그려 보면 이렇다.

![실제 신경망의 loss landscape — ResNet-56(왼쪽)과 skip connection 없는 네트워크(오른쪽)](/images/chapters/loss-landscape-resnet56.png)
![skip connection이 없으면 지형이 혼돈적이다](/images/chapters/loss-landscape-vgg56.png)

같은 깊이의 네트워크인데, 지름길 연결(skip connection)이 있으면 지형이 매끈한 그릇이고 없으면 주름투성이다. 구조를 조금 바꿨을 뿐인데 걸어야 할 땅이 달라진다.

미세조정(fine-tuning)은 이미 학습된 점 근처에서 새 데이터를 보며 조금 더 움직이는 일이다. 처음부터 걷는 것이 아니라, 좋은 동네에 도착한 뒤 골목을 옮기는 것이다.

### LoRA — 좁은 방향으로만 움직이기

LoRA(Low-Rank Adaptation, 가느다란 행렬 두 개로 변화를 적는 미세조정 방법)는 한 걸음 더 나간다. 큰 가중치 행렬 전체를 바꾸는 대신, 두 개의 가느다란 행렬의 곱으로 쓸 수 있는 변화만 허락한다. 4096×4096 행렬이면 원래 1,677만 개의 숫자를 바꿔야 하지만, 폭이 8인 두 행렬만 학습하면 6만 5천여 개, 0.4% 정도로 충분하다.

거대한 공간에서 극히 일부의 방향으로만 움직이는데도 모델은 새 말투를 배우고, 새 화풍을 배운다. 변화가 사는 곳이 생각보다 좁다는 뜻이다.

### 사례 — 점을 섞는 사람들

이미지 생성 모델을 가지고 노는 사람들은 이상한 실험을 즐겨 한다.

같은 기본 모델에서 출발해 서로 다르게 미세조정한 두 모델이 있다. 두 파라미터를 반씩 섞는다. 파라미터 공간에서 두 점의 한가운데를 취하는 것이다. 그러면 종종 두 모델의 장점이 함께 살아 있는 모델이 나온다. 언어 모델에서도, 같은 출발점에서 여러 번 미세조정한 모델의 가중치를 평균하면 하나만 쓸 때보다 나은 경우가 보고되었다. 모델 수프(model soup)라는 이름이 붙었다.

LoRA 두 개 사이를 걷는 실험도 있다. 스타일 A의 LoRA와 스타일 B의 LoRA를 비율을 바꿔 가며 섞는다. 어떤 쌍은 A에서 B로 부드럽게 넘어간다. 어떤 쌍은 중간에서 그림이 갑자기 무너진다.

서로 다른 무작위 초기값에서 따로 학습한 두 모델을 섞으면, 대개는 둘 다보다 훨씬 나쁜 모델이 나온다.

같은 "가운데 취하기"인데 왜 어떤 때는 되고 어떤 때는 안 될까. 두 점 사이를 비율대로 섞어 잇는 일을 보간이라 한다. "잘 되는 보간"과 "안 되는 보간"을 가르는 것은 무엇일까.

### 수확

이 현상들은 제멋대로가 아니다. 패턴이 있다. 그 패턴이 무엇인지 묻는 것이 이 책의 출발점이다.

패턴을 읽으려면 파라미터 공간에서 "거리"와 "방향"을 재는 도구가 필요하다. 가장 쉬운 도구는 유클리드 자다. 파라미터 숫자들의 차이를 제곱해서 더하는 것. 그런데 파라미터를 똑같이 0.1 움직여도, 어떤 곳에서는 출력 분포가 크게 바뀌고 어떤 곳에서는 거의 바뀌지 않는다. 우리가 정말 신경 쓰는 것은 숫자가 아니라 모델이 내놓는 분포다. 유클리드 자로는 충분하지 않다는 것이 곧 드러난다.

### 문제 2. 두 모델의 가운데 (킬러)

같은 특징 추출부를 공유하고 마지막 층만 다르게 미세조정한 두 분류 모델이 있다. 어떤 입력에서 모델 1은 (0.9, 0.05, 0.05), 모델 2는 (0.05, 0.9, 0.05)를 내놓는다. 두 모델을 "반씩 섞는" 방법 두 가지를 비교하라. (가) 마지막 층 가중치를 평균한다. 이 입력에서는 로짓을 평균하는 것과 같다. (나) 두 모델의 출력 확률표를 평균한다. 두 결과는 같은가? 어느 쪽이 세 번째 후보에 더 많은 확률을 주는가? 엔트로피 H = −Σ qᵢ ln qᵢ(분포가 얼마나 고르게 퍼졌는지 재는 값, 자연로그)를 비교하라.

#### 함께 풀기

**김민준:** 같을 거예요. 로짓을 평균하든 확률을 평균하든 평균은 평균이니까. (0.475, 0.475, 0.05)요.

**선생님:** 그건 (나)의 답이에요. (가)도 직접 계산해 봤어요?

**김민준:** 로짓은 log p로 잡으면 되죠. 평균해서 소프트맥스 하면… (0.447, 0.447, 0.105)요. 어? 달라요.

〔M05〕 **김민준:** 소프트맥스가 지수랑 나눗셈이라 선형이 아니구나. 평균을 안으로 넣었다 뺐다 할 수가 없어요.

**이서연:** 그런데 이상해요. 로짓을 평균하면 확률을 곱하는 거잖아요. 곱하면 두 모델이 동시에 좋아하는 곳만 남으니까, 결과가 더 뾰족해져야 할 것 같았어요.

**선생님:** 숫자는 뭐라고 해요?

**이서연:** 엔트로피는 (가)가 0.957, (나)가 0.857이에요. 로짓 평균이 더 퍼져 있어요. 세 번째 후보도 0.05에서 0.105로 두 배가 됐고요.

〔S06〕 **이서연:** 제 직관이랑 반대예요.

**선생님:** 세 번째 후보에 대해 두 모델은 서로 뭐라고 해요?

**이서연:** 둘 다 0.05요. 의견이 같아요.

**선생님:** 첫 번째 후보는요?

**이서연:** 0.9와 0.05. 정반대예요. 곱해서 제곱근을 씌우면 기하평균이라 0.21 정도로 떨어져요. 두 번째도 마찬가지고요. 세 번째는 0.05 그대로고요. 다시 합이 1이 되게 나누면…

〔S09〕 **이서연:** 두 모델이 싸우는 후보가 깎이고, 둘 다 조용히 동의하던 후보가 올라와요. 곱셈은 "둘 다 좋아하는 것"이 아니라 "둘 다 반대하지 않는 것"을 남기는 거예요. 둘 다 좋아하는 후보가 없으면 오히려 퍼져요.

**김민준:** 팀플에서 투표를 거부권 방식으로 하면 아무도 적극 추천하지 않은 무난한 안이 뽑히는 거랑 같네요.

**선생님:** 그래요. 그리고 서연 학생, 문제의 조건 하나를 다시 봐요. 가중치끼리의 평균이 왜 로짓 평균과 같았죠?

**이서연:** 특징 추출부를 공유하고 마지막 층이 선형이라서요. 두 모델이 앞단까지 다르면 가중치를 평균한 모델의 로짓은 두 로짓의 평균도 아니에요.

〔T13〕 **선생님:** 맞아요. 같은 "가운데"라는 말 밑에 덧셈의 가운데와 곱셈의 가운데가 숨어 있었어요. 어느 쪽이 옳다는 게 아니라 둘 다 자연스러운 길이에요. 이 두 길은 이 책 내내 짝으로 다시 나와요.

## 크라메르-라오 부등식: 정보와 기하학이 만난 자리

유클리드 자로 부족하다면, 분포와 분포 사이를 재는 자는 어디서 구해야 할까? 뜻밖에도 그 자는 기계학습보다 훨씬 먼저, 오래된 두 학문이 만나는 자리에서 한 번 나온 적이 있다.

이 책의 제목에는 두 단어가 붙어 있다. 둘 다 오래된 단어다.

### 기하학 — 변하지 않는 것을 찾는 학문

기하학은 수천 년 동안 땅과 도형의 학문이었다. 유클리드는 점, 선, 각에 대한 몇 개의 공리에서 출발해 도형의 성질을 쌓아 올렸다.

19세기에 이 오래된 학문이 스스로를 다시 정의한다. 1872년, 펠릭스 클라인은 에를랑겐 대학에 부임하며 기하학을 이렇게 정리했다. 어떤 변환들을 허락할지 정하고, 그 변환 아래에서 변하지 않는 성질을 연구하는 것이 기하학이다. 평행이동과 회전을 허락하면 길이와 각이 남는다. 그것이 유클리드 기하학이다. 더 많은 변환을 허락하면 남는 것이 줄고, 다른 기하학이 된다.

"무엇이 변하지 않는가"라는 질문은 이 책에서도 계속 돌아온다. 분포의 이름표(좌표)를 바꿔도 변하지 않는 거리는 무엇인가. 놀랍게도, 그런 거리는 사실상 하나뿐이라는 정리가 있다.

### 정보 — 일상어에서 숫자로

"정보"는 오랫동안 일상어였다. 1948년, 벨 연구소의 클로드 섀넌이 이 단어에 정확한 숫자를 매겼다. 드문 일이 일어나면 많이 놀라고, 흔한 일이 일어나면 적게 놀란다. 그 놀라움의 평균이 엔트로피이고, 엔트로피는 메시지를 아무리 영리하게 0과 1의 부호로 줄여 적어도 넘을 수 없는 평균 길이의 한계다. 놀라움, 엔트로피, 부호의 길이가 하나로 이어졌다.

### 교차점

두 학문이 만나는 자리에는 통계학자가 먼저 서 있었다.

1945년, 인도의 젊은 통계학자 C.R. Rao는 추정의 정밀도에 넘을 수 없는 벽이 있다는 것을 부등식으로 썼다.

\`\`\`latex
\\mathrm{Var}(\\hat{\\textcolor{#2e9e6e}{\\theta}}) \\ge \\frac{1}{n\\, \\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{\\theta})}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\hat{\\textcolor{#2e9e6e}{\\theta}} & \\text{데이터로 만든 추정값 (평균적으로 참값을 맞히는, 치우침 없는(불편) 추정량)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{추정하려는 참 모수 (분포를 정하는 숫자)} \\\\
\\mathrm{Var} & \\text{같은 실험을 되풀이할 때 추정값이 흔들리는 정도 (분산)} \\\\
\\textcolor{#0e8f8f}{I} & \\text{관측 하나가 담은 피셔 정보} \\\\
n & \\text{관측의 개수}
\\end{array}
\`\`\`

크라메르-라오 부등식이라 불리는 식이다. 데이터 하나가 모수에 대해 알려 주는 양, 피셔 정보 I가 크면 벽이 낮다. 더 정확히 맞힐 수 있다. I가 작으면 아무리 영리한 방법을 써도 추정값은 일정 이상 흔들린다.

Rao는 여기서 멈추지 않았다. 같은 논문에서 그는 이 피셔 정보를 분포들의 공간에 까는 자, 리만 계량(곳마다 작은 걸음의 길이를 재는 규칙)으로 읽었다. 그 자로 두 분포 사이의 거리를 잴 수 있다고 제안했다. 통계학과 미분기하학이 처음 악수한 순간이다.

{{viz: ch01/cramer-rao}}

### 파이썬

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
theta, n = 0.3, 100                        # 앞면 확률, 한 번에 던지는 횟수
I = 1 / (theta * (1 - theta))              # 동전 한 번의 피셔 정보

k = rng.binomial(n, theta, size=200_000)   # 실험 20만 번, 매번 n번 던져 앞면 수를 센다
est = k / n                                # 추정량: 앞면 비율

print(f"추정량의 분산      {est.var():.6f}")
print(f"하한 1/(n·I)       {1 / (n * I):.6f}")
for n2 in [25, 100, 400]:
    print(f"n={n2:<4} 하한의 제곱근(표준편차) {np.sqrt(1 / (n2 * I)):.4f}")
# 추정량의 분산      0.002094
# 하한 1/(n·I)       0.002100
# n=25   하한의 제곱근(표준편차) 0.0917
# n=100  하한의 제곱근(표준편차) 0.0458
# n=400  하한의 제곱근(표준편차) 0.0229
\`\`\`

앞면 비율이라는 소박한 추정량이 벽에 딱 붙어 있다. 그리고 정밀도를 두 배로 올리려면 동전을 네 배 던져야 한다.

그 뒤로 씨앗은 오래 흙 속에 있었다. 1970년대에 에프론이 통계 모형이 얼마나 휘었는지, 곧 "곡률"을 재기 시작했고, 첸초프는 분포의 공간에 자연스러운 자가 사실상 하나뿐임을 보였다. 1980년대, 아마리 슌이치가 이 조각들을 하나의 체계로 묶었다. 같은 자 위에서도 "곧게 걷는 규칙"이 둘로 짝지어 나온다는 것, 한쪽이 정해지면 다른 쪽도 정해지는 그 두 규칙의 짝 관계(쌍대성)가 통계적 추론의 뼈대라는 것. 정보기하학이라는 이름은 그렇게 자리를 잡았다. 응용이 본격적으로 퍼진 것은 21세기, 기계학습이 거대해진 뒤다.

### 이 책이 그리려는 지도

이 책은 학습, 추론, 생성의 뒤에서 작동하는 기하학적 구조를 그린다.

앞에서 본 마법들도 이 지도 위에 자리가 있다. 두 모델의 가운데를 취하는 일은 덧셈과 곱셈의 "두 개의 길"과, 분포를 가장 가까운 점으로 내리는 사영으로. LoRA가 좁은 방향으로 움직여도 되는 이유는 넓은 공간 속 얇은 곡면, 매니폴드로. 같은 한 걸음이 곳에 따라 다른 변화를 만드는 이유는 피셔 정보로. 노이즈에서 그림을 꺼내는 생성 모델은 분포와 분포를 잇는 길로.

### 수확

기하학도 정보도 너무 기본적인 학문이어서, 오히려 둘이 만난 것은 늦었다. 그 만남이 지금의 AI를 설명하는 언어가 되고 있다.

그 언어의 첫 단어는 놀라울 정도로 단순하다. "확률분포 하나를 점이라고 부르자." 이 한 문장에서 모든 것이 시작된다. — 정말로?

---

> ### 인물 이야기 — C.R. Rao와 "스물다섯의 논문"
>
> ![C.R. Rao](/images/portraits/cr-rao.jpg)
>
> 1945년, 인도 캘커타. 스물다섯 살 안팎의 칼리암푸디 라다크리슈나 라오(C.R. Rao)는 인도통계연구소(ISI)의 견습 연구원이었다. 2년 전 캘커타 대학에서 통계학 석사를 마쳤고, 연구소에서 연구를 하며 대학에서 시간강사로 가르치고 있었다. 박사학위는 아직 없었다. 그것은 몇 년 뒤, 다른 대륙에서의 일이다.
>
> 그가 그해 캘커타 수학회 회보에 실은 논문은 열 쪽 남짓이었다. 제목은 「통계 모수 추정에서 얻을 수 있는 정보와 정확도」. 겉보기에는 평범한 질문이었다. 추정량의 정밀도에 한계가 있는가?
>
> Fisher는 이미 1920년대에 그 벽의 존재를 알고 있었다. 표본이 아주 많을 때 최대우도추정(관측에 가장 높은 확률을 주는 모수를 고르는 방법)이 그 벽에 닿는다는 것을 보였다. Rao는 코시-슈바르츠 부등식 한 줄로, 표본 수와 상관없이 모든 불편추정량의 분산이 피셔 정보의 역수보다 작아질 수 없다는 것을 보였다.
>
> 같은 벽을 본 사람은 여럿이었다. 프레셰(Fréchet)가 1943년에, 다르무아(Darmois)가 1945년에 같은 부등식에 닿았고, 스웨덴의 크라메르(Cramér)는 1946년의 교과서에 그것을 실었다. 그래서 이 부등식은 크라메르-라오 부등식, 또는 프레셰-다르무아-크라메르-라오 부등식이라 불린다.
>
> 그러나 같은 논문의 뒷부분은 Rao만의 것이었다. 그는 모수로 이름 붙은 분포들의 모임을 하나의 공간으로 보고, 피셔 정보 행렬을 그 공간의 리만 계량으로 삼았다. 그리고 그 계량으로 잰 가장 곧은 길(측지선)의 길이를 두 분포 사이의 거리로 제안했다. 좌표를 어떻게 바꿔도 변하지 않는 거리였다. 오늘날 Fisher–Rao 거리라 부르는 것이다. 같은 논문에는 뒤에 라오-블랙웰 정리라 불릴 결과도 들어 있었다.
>
> 이듬해 여름, Rao는 영국으로 건너갔다. 케임브리지 킹스 칼리지에서 Fisher의 지도를 받았고, 1948년에 박사학위를 받았다.
>
> 씨앗이 나무가 되기까지는 오래 걸렸다. 미분기하학의 방법이 통계학의 중심으로 들어온 것은 1975년 에프론의 통계적 곡률을 거쳐, 1980년대 아마리 슌이치의 작업에 와서였다.
>
> 2023년, 그 열 쪽짜리 논문은 국제 통계학상을 받았다. 같은 해 여름, Rao는 102세로 세상을 떠났다. 스물다섯 무렵에 심은 씨앗이 기계학습의 언어가 되는 것을 지켜본 드문 사람이다.

### 문제 3. 벽보다 낮은 추정량?

앞면 확률이 θ = 0.3인 동전을 n = 100번 던진다. (가) 크라메르-라오 하한을 구하라. 동전 한 번의 피셔 정보는 I(θ) = 1/(θ(1−θ))이다. (나) 앞면 비율 k/n의 분산과 비교하라. (다) 라플라스 추정량 (k+1)/(n+2)의 분산을 구하라. 하한보다 작다면 부등식이 틀린 것인가?

#### 함께 풀기

**이서연:** (가)는 1/I니까 θ(1−θ) = 0.21이에요.

**김민준:** 근데 시뮬레이션에서 k/n의 분산은 0.0021이 나와. 하한이 0.21이면 하한보다 백 배 작은 거잖아.

〔S05〕 **이서연:** 그럼 벽을 뚫었다는 건데… 그럴 리가 없는데.

**선생님:** 서연 학생이 쓴 I는 동전 몇 번의 정보예요?

〔S07〕 **이서연:** 한 번이요. 백 번 던지면 정보가 백 배라서 1/(nI) = 0.0021이에요. 시뮬레이션이랑 딱 맞네요.

**선생님:** 그래요. 관측이 서로 독립이면 정보는 더해져요. 그래서 표준편차는 √n에 반비례해서 줄어요.

**김민준:** 그럼 (다)요. 라플라스 추정량은 분산이 0.00202예요. 0.0021보다 작아요. 이번엔 진짜로 뚫었어요.

**선생님:** 민준 학생, 라플라스 추정량의 평균은 0.3이에요?

**김민준:** 평균은… (100 × 0.3 + 1)/102 = 0.304요. 0.004만큼 치우쳐 있어요.

**선생님:** 하한이 약속하는 대상이 누구였죠?

〔M07〕 **김민준:** 불편추정량이요. 평균적으로 참값을 맞히는 것들만요. 라플라스는 조금 치우친 대신 흔들림을 줄인 거니까 애초에 대상이 아니에요.

**김민준:** 조별 과제 점수를 조 평균 쪽으로 조금씩 당겨서 매기는 조교 같네요. 점수 편차는 줄지만, 잘한 사람 점수는 조금 깎이고.

**선생님:** 좋은 비유예요. 그리고 공짜는 아니에요. θ = 0.02처럼 끝에 가까운 동전이면 라플라스의 제곱오차는 0.000277로, 하한 0.000196보다 커져요. 끌어당기는 쪽이 참값에서 멀면 치우침이 비싸져요.
`,K4=`# 점

## 공간 속의 점: 어디에 놓느냐가 가까움을 정한다

무엇이든 숫자의 나열로 바꿀 수 있다면, 그것은 공간의 점이 된다. 사진 한 장도, 단어 하나도. 그렇다면 점으로 바꾸기만 하면, 비슷한 것끼리 저절로 가까이 찍힐까? 당연해 보이는 이 물음의 답은 당연하지 않다.

### 숫자로 바꾼다고 끝이 아니다

MNIST 데이터셋을 본 적이 있을 것이다. 28×28 픽셀의 손글씨 숫자 이미지 7만 장.

![MNIST 손글씨 숫자 샘플](/images/chapters/mnist-samples.png)

한 장의 이미지를 펼치면 784개의 숫자가 된다. 첫 번째 픽셀의 밝기, 두 번째 픽셀의 밝기, …, 784번째 픽셀의 밝기. 그러니까 손글씨 '3' 한 장은 784차원 공간의 점 하나다.

7만 장의 손글씨를 전부 펼치면, 784차원 공간에 7만 개의 점이 찍힌다. 점은 찍었다. 하지만 이 784차원 공간은 별로 쓸모가 없다. 같은 '3'이라도 획이 조금만 삐뚤어지면 픽셀값이 확 달라진다. 다른 숫자인 '8'이 오히려 픽셀값으로는 더 비슷할 수도 있다. 숫자로 바꿨다는 사실만으로는, 점들 사이의 거리가 의미를 갖지 않는다.

그런데 VAE 같은 방법으로 이 점들을 2차원 평면으로 압축해 옮기면 신기한 일이 보인다. '3'들은 '3'들끼리, '7'들은 '7'들끼리 모여 있다. 아무도 "모여라"고 명령하지 않았는데, 비슷한 것들이 가까이 찍힌다.

![VAE 2D 잠재공간 — 같은 숫자끼리 모인다](/images/chapters/mnist-vae-latent.png)

784차원 픽셀 공간에서는 보이지 않던 구조가, 다른 공간으로 옮기니까 드러난 것이다.

영어 단어도 마찬가지다. "king"을 ASCII 코드로 쓰면 숫자의 나열이 되지만, 거기에 기하학은 없다. "king"과 "queen"이 가까운지 먼지를 ASCII 값으로는 알 수 없다.

그런데 Word2Vec이라는 알고리즘이 단어 하나를 300개의 숫자로 바꿔 놓으면, 상황이 달라진다. 이 300차원 공간에서는 점들 사이의 *방향*이 의미를 가진다.

king − man + woman ≈ queen

![Word2Vec — king - man + woman ≈ queen](/images/chapters/word2vec-king-queen.png)

"남자에서 여자로"라는 방향이 공간 안에 존재한다. "서울에서 한국으로"라는 방향과 "도쿄에서 일본으로"라는 방향이 거의 평행하다.

패턴이 보인다. 숫자로 바꾸는 것 자체는 시작일 뿐이다. **어떤 공간에 놓느냐**에 따라 가까움과 멂이 의미를 갖기도, 갖지 않기도 한다. 좋은 공간에서는 비슷한 것이 가깝고, 다른 것이 멀다. 나쁜 공간에서는 모든 것이 뒤섞여 있다.

### 개와 고양이 — 좋은 공간에서는 문제가 쉬워진다

이것이 실제로 어떤 차이를 만드는지 보자.

개 사진 한 장과 고양이 사진 한 장이 있다.

![개와 고양이 — 같은 대상, 다른 공간](/images/chapters/dog-example.jpg)
![개와 고양이 — 같은 대상, 다른 공간](/images/chapters/cat-example.jpg)

둘 다 64×64 RGB 이미지라면, 각각 12,288차원 공간의 점이다.

이 픽셀 공간에서 개와 고양이를 분류해보자. 하이퍼플레인 하나 — 공간을 반으로 가르는 평면 — 를 그어서 한쪽에 개를, 다른 쪽에 고양이를 모을 수 있을까?

잘 되지 않는다. 배경이 바뀌고, 포즈가 바뀌고, 조명이 바뀌면 픽셀값은 완전히 달라지는데, 여전히 같은 개다. "개다움"은 픽셀의 나열 속에 숨어 있지, 표면에 드러나 있지 않다.

같은 이미지를 CNN — 합성곱 신경망 — 에 통과시키면 어떤 일이 일어나는가. CNN의 마지막 층은 이미지를 128개쯤의 숫자로 압축한다. 12,288차원에서 128차원으로.

이 128차원 공간에서는 기적 같은 일이 일어난다. 개들은 한쪽으로, 고양이들은 다른 쪽으로 모인다. 하이퍼플레인 하나로 거의 깔끔하게 갈라진다.

같은 대상이다. 같은 개, 같은 고양이. 그런데 공간을 바꿨을 뿐인데, 풀기 어렵던 문제가 쉬워진다.

### ML에서: 매니폴드 가설 — 왜 좋은 공간이 존재하는가

![매니폴드 가설](/images/chapters/ch02-manifold-hypothesis.svg)

왜 공간을 바꾸면 분류가 쉬워지는 걸까? "운이 좋아서"가 아니다. 구조적인 이유가 있다.

64×64 RGB 이미지의 공간은 12,288차원이다. 이 공간의 점을 하나 무작위로 찍어보자. 12,288개의 숫자를 각각 0에서 255 사이에서 랜덤하게 뽑는다. 화면에 표시하면? 노이즈다. 텔레비전의 지직거림. 개도 아니고, 고양이도 아니고, 그 어떤 의미 있는 이미지도 아니다.

12,288차원 공간은 광대하다. 그런데 "개 사진"이라고 부를 수 있는 것들은 그 광대한 공간의 극히 일부에만 존재한다. 랜덤으로 점을 찍어서 개 사진이 나올 확률은 사실상 0이다.

실제 이미지들 — 개든 고양이든 풍경이든 — 은 12,288차원 공간 전체에 퍼져 있지 않다. 그 안의 훨씬 낮은 차원의 얇은 시트 위에 몰려 있다. 구겨지고 접힌 시트. 수학에서는 이것을 매니폴드(manifold)라고 부른다.

좋은 공간이 존재할 수 있는 이유가 여기에 있다. 데이터가 애초에 저차원 시트 위에 살고 있으니까, 그 시트를 찾아서 펼치면 구조가 드러난다. CNN이 하는 일의 본질이 바로 이것이다. 접혀 있어서 개와 고양이가 뒤엉켜 보이던 시트를 펼쳐 놓으면, 원래 다른 곳에 살고 있던 것들이 양쪽으로 갈라진다.

이 관찰을 **매니폴드 가설**이라 부른다: 실제 데이터는 고차원 공간 전체가 아니라, 그 안의 저차원 매니폴드 위에 집중되어 있다.

매니폴드라는 단어를 정식으로 다루려면 준비가 더 필요하다. 지금은 감각만 가져가자: **데이터가 사는 진짜 공간은 우리가 보는 것보다 훨씬 작고, 그 작은 공간을 찾아내는 것이 기계학습의 핵심 문제 중 하나다.**

---

> ### 인물 이야기 — Karl Pearson과 "데이터를 보는 눈"
>
> ![Karl Pearson](/images/portraits/karl-pearson.jpg)
>
> 19세기 말, 런던 유니버시티 칼리지. Karl Pearson은 원래 통계학자가 아니었다. 케임브리지에서 수학을 공부한 뒤 독일로 건너가 하이델베르크와 베를린에서 물리학, 철학, 법학, 문학을 두루 들었다. 1884년, 그는 유니버시티 칼리지의 응용수학 교수로 부임했다. 그가 통계학으로 돌아선 데에는 생물학자 Francis Galton과 동물학자 Walter Weldon과의 만남이 컸다.
>
> Galton은 다윈과 할아버지를 같이 둔 사촌이었고, 유전의 법칙을 수로 잡고 싶어 했다. 아버지의 키와 아들의 키 사이에 관계가 있다는 건 알겠는데, 그 관계를 어떻게 정확히 숫자로 적을 것인가? Galton은 "회귀(regression)"라는 말을 만들었지만, 수학적 도구가 부족했다.
>
> Pearson이 그 도구를 다듬었다. 상관계수의 표준 공식, 카이제곱 검정, 히스토그램이라는 이름, 주성분분석 — 오늘날 데이터 분석의 기본 어휘 상당수가 Pearson을 거쳐 나왔다. 그런데 이 도구들의 바닥에 공통된 발상이 하나 있다. **데이터를 공간의 점으로 보는 것.**
>
> 사람 한 명의 키와 팔 길이를 (x, y) 평면의 점으로 찍으면, 수백 명의 데이터가 하나의 점구름(point cloud)이 된다. Galton이 먼저 그런 그림을 그렸다면, Pearson은 그 점구름에 수학을 입혔다. 점구름의 모양이 곧 변수들 사이의 관계다. 길쭉하게 늘어져 있으면 상관이 높고, 둥글면 상관이 없다. 1901년 주성분분석을 처음 내놓은 논문의 제목부터가 「공간의 점들에 가장 가깝게 맞는 선과 평면에 대하여」였다.
>
> 이것은 사고방식의 전환이었다. 숫자를 하나씩 보는 대신 공간에 뿌려놓고 **형태를 본다.** 히스토그램이라는 이름을 처음 쓴 사람으로 알려진 것도 같은 맥락이다. 분포를 눈으로 보게 만든 것.
>
> 다음 세대에 Fisher가 나타났다. Pearson의 제자가 아니라, 케임브리지에서 수학을 공부한 바깥사람이었다. 두 사람의 관계는 격렬했다. Fisher는 1922년부터 Pearson의 카이제곱 검정에서 자유도(마음대로 정할 수 있는 숫자의 개수) 계산이 틀렸다고 공격했고, Pearson이 쓰던 모멘트 방법(표본의 평균·분산 같은 값을 분포의 것과 맞추는 방법)이 비효율적이라며 최대우도법(관측에 가장 높은 확률을 주는 분포를 고르는 방법)을 내세웠다. Pearson의 학술지가 Fisher의 반론을 싣지 않자, Fisher는 다시는 그 학술지에 논문을 보내지 않겠다고 했다. 1933년 Pearson이 은퇴하자 Fisher는 유니버시티 칼리지로 와서 Pearson이 맡던 Galton 우생학 교수 자리를 이어받았다. 이 충돌은 20세기 통계학을 두 진영으로 갈랐지만, 동시에 양쪽 모두를 날카롭게 만들었다.
>
> Pearson이 연 문은 이것이다: 데이터를 점으로, 점들의 집합을 공간의 구조로 읽는 습관. 이 장에서 우리가 한 일 — 이미지를 784차원의 점으로, 단어를 300차원의 점으로 만든 것 — 의 뿌리가 거기에 있다. 다음 절은 한 걸음 더 나아가, 데이터가 아니라 분포 자체를 점으로 만든다.

## 확률분포는 점이다: 두 숫자로 분포 전체를 되살린다

지금까지 점이 된 것들을 보자. MNIST에서는 이미지 한 장이 점이었다. Word2Vec에서는 단어 하나가 점이었다. 이미지나 단어처럼 하나하나의 대상이 아니라, 수십만 명의 기록을 요약한 분포 하나도 점이 될 수 있을까?

### 사례 — 네 집단의 키 분포

한국 20대 남성의 키 분포가 있다. 평균 174cm, 표준편차 5.8cm의 정규분포. 이것은 (174, 5.8)이라는 점이다.

한국 20대 여성의 키 분포: (161, 5.2). 네덜란드 20대 남성의 키 분포: (183, 7.1). 네덜란드 20대 여성의 키 분포: (170, 6.3).

(μ, σ) 평면 위에 네 개의 점을 찍었다.

잠깐 멈춰서 이것이 얼마나 과감한 일인지 생각해보자.

한국 20대 남성의 키 분포 뒤에는 무엇이 있는가. 수십만 명의 신체검사 기록이 있다. 한 사람 한 사람의 키, 유전자, 식습관, 성장 환경이 있다. 그 모든 개별적 삶이 빚어낸 결과가 하나의 분포다. 그 분포를 우리는 방금 (174, 5.8)이라는 점 하나로 만들었다.

수십만 줄의 데이터, 수십만 명의 이야기가 평면 위의 점 하나로 압축되었다. 그리고 앞의 사례들과 다르게, 이 평면의 좌표는 처음부터 뜻을 가진다. 첫 번째 좌표는 평균이고, 두 번째 좌표는 퍼짐의 정도다. 별도의 VAE도, Word2Vec도 필요 없다.

다만 좌표에 뜻이 있다고 해서 점 사이의 거리까지 정해진 것은 아니다. μ가 9cm 다른 것과 σ가 1.3cm 다른 것 중 무엇이 더 큰 차이인가. 그 물음에 답하는 자는 아직 없다. 평면 위에 눈금 없는 점들만 찍혀 있는 셈이다.

추상화의 수준이 완전히 달라졌다. 이미지 한 장이 아니라 분포 전체가 점이다. 그리고 이 도약이야말로 정보기하학의 출발점이다.

분포를 점으로 놓는 순간, 분포들 사이의 "거리"를 물을 수 있게 된다. 한국 남성과 네덜란드 남성은 얼마나 먼가? 한국 남성과 한국 여성은?

{{viz: ch02/mu-sigma}}

### 점에서 분포를 되살린다 — 점이라 부를 자격

정규분포 하나를 "점"이라고 부르면 무슨 일이 생기나? 분포 하나 = 공간의 점 하나라고 말하려면, 점 하나에서 분포 전체를 되살릴 수 있어야 한다. 정규분포는 그렇다. 두 숫자만 알면 모든 키 값의 확률밀도가 정해진다.

\`\`\`latex
\\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}) = \\frac{1}{\\textcolor{#2e9e6e}{\\sigma}\\sqrt{2\\pi}} \\exp\\!\\left(-\\frac{(\\textcolor{#6f8fa6}{x} - \\textcolor{#2e9e6e}{\\mu})^2}{2\\textcolor{#2e9e6e}{\\sigma}^2}\\right)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} & \\text{점 } (\\mu, \\sigma) \\text{ 가 가리키는 분포의 확률밀도} \\\\
\\textcolor{#6f8fa6}{x} & \\text{키 값 하나 (표본)} \\\\
\\textcolor{#2e9e6e}{\\mu} & \\text{평균, 봉우리의 위치} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차, 봉우리의 폭 } (\\sigma > 0)
\\end{array}
\`\`\`

점을 옮기면 식이 바뀌고, 식이 바뀌면 곡선이 바뀐다. 점과 분포가 한 쌍씩 대응한다.

### 라디오 다이얼 — 방송국 하나에 다이얼 위치 하나

라디오 주파수 다이얼 — 다이얼을 돌리면 들리는 방송(분포의 모양)이 바뀌는데, 다이얼의 위치 자체가 "점"이다. 방송국 하나에 다이얼 위치 하나.

### 이 평면의 모양과 주소

두 가지를 짚어 두자.

첫째, 이 공간은 평면 전체가 아니다. 표준편차는 0보다 커야 한다. σ = 0이면 봉우리가 한 점에 무한히 뾰족해지고, σ < 0인 분포는 없다. 그래서 정규분포들의 공간은 σ > 0인 위쪽 반평면이다. 아래쪽 경계선은 공간의 일부가 아니라 가장자리다.

둘째, (μ, σ)는 이 공간의 유일한 주소가 아니다. 표준편차 대신 분산 σ²을 써도 된다. (174, 5.8)은 (174, 33.64)가 된다. log σ를 써도 된다. 주소를 바꿔도 가리키는 분포는 같다. 하지만 주소 위에서 "가운데"나 "직선"을 잡으면, 주소마다 다른 분포가 나온다. 같은 색을 RGB로도 HSV로도 부를 수 있지만, 두 주소계에서 섞은 중간색이 다른 것과 같다.

### 파이썬

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
heights = rng.normal(174, 5.8, size=300_000)   # 30만 명의 키 (가상의 신체검사 기록)

point = np.array([heights.mean(), heights.std()])   # 분포 전체 → 점 하나 (μ, σ)
print("점 (μ, σ)   :", point.round(2))

def pdf(x, mu, sigma):                          # 점 하나 → 분포 전체
    return np.exp(-(x - mu)**2 / (2 * sigma**2)) / (sigma * np.sqrt(2 * np.pi))

print("점에서 되살린 p(180) :", round(pdf(180, *point), 4))
print("데이터로 센   p(180) :", round(np.mean(np.abs(heights - 180) < 0.5), 4))  # 179.5~180.5 비율

groups = {"한국 남": (174, 5.8), "한국 여": (161, 5.2), "네덜란드 남": (183, 7.1), "네덜란드 여": (170, 6.3)}
for name, (mu, s) in groups.items():
    print(f"{name:7s}  (μ, σ) = ({mu}, {s})   (μ, σ²) = ({mu}, {s**2:.2f})")
# 점 (μ, σ)   : [174.     5.81]
# 점에서 되살린 p(180) : 0.0403
# 데이터로 센   p(180) : 0.0404
# 한국 남     (μ, σ) = (174, 5.8)   (μ, σ²) = (174, 33.64)
# 한국 여     (μ, σ) = (161, 5.2)   (μ, σ²) = (161, 27.04)
# 네덜란드 남   (μ, σ) = (183, 7.1)   (μ, σ²) = (183, 50.41)
# 네덜란드 여   (μ, σ) = (170, 6.3)   (μ, σ²) = (170, 39.69)
\`\`\`

30만 줄의 데이터를 두 숫자로 줄였는데, 그 두 숫자에서 되살린 확률이 데이터에서 직접 센 비율과 소수 넷째 자리 근처까지 맞는다. 데이터가 정말 정규분포에서 왔기 때문이다. 현실의 데이터라면 여기서 어긋남이 보이고, 그 어긋남을 재려면 분포와 분포 사이에 댈 자가 필요하다.

### 수확

"분포를 점으로 부를 수 있는 것은, 점에서 분포를 되살릴 수 있기 때문이다." 그리고 같은 점에 주소는 여러 개다.

### 문제 1. 같은 분포, 다른 주소

한국 20대 남성 (174, 5.8)과 네덜란드 20대 남성 (183, 7.1)이 (μ, σ) 평면에 있다. (가) 두 점을 (μ, σ²) 좌표로 옮겨라. (나) 두 좌표에서 각각 두 점의 "가운데"를 잡고, 그것이 가리키는 표준편차를 비교하라. (다) 네덜란드 남성에서 한국 남성 쪽으로 난 직선을 한국 남성 너머로 5배만큼 더 연장하면 어떤 분포가 되는가?

#### 함께 풀기

**김민준:** (가)는 제곱만 하면 돼요. (174, 33.64), (183, 50.41).

**김민준:** (나)는 코드로 했어요. σ 좌표 가운데는 6.45고, σ² 좌표 가운데는 42.0이에요. 완전 다른 분포네요.

**이서연:** 표준편차가 42cm? 성인 남성 키가 그렇게 퍼져 있으면 2m 넘는 사람이 흔하겠는데.

〔M04〕 **김민준:** 아… 42.0은 분산이에요. 변수 이름을 sig로 해 놓고 σ²을 넣었어요. 루트를 씌우면 6.48이에요.

**선생님:** 그러면 두 가운데는 같은 분포예요?

**김민준:** 6.45와 6.48이니까 거의 같지만 아주 조금 달라요. 주소계마다 "가운데"가 다른 거네요.

**김민준:** 보고서에서 단위 표기 안 하고 cm랑 mm 섞어 쓰다가 조교님한테 지적받은 거랑 똑같은 실수네요. 이름표가 값의 뜻을 정하는데 이름표를 틀리게 붙였어요.

**선생님:** (다)는요?

**이서연:** 직선이니까 쉬워요. 한국 남성에서 (−9, −1.3)의 5배를 더하면 (129, −0.7)이에요. 평균 129cm, 표준편차 −0.7인 분포요. 봉우리가 뒤집힌 건가…

**선생님:** 표준편차가 음수인 정규분포를 식에 넣어 봐요.

〔S06〕 **이서연:** 밀도 앞의 1/σ가 음수가 돼요. 확률밀도가 음수라니, 분포가 아니에요.

**선생님:** 이 공간은 어디까지였죠?

〔S07〕 **이서연:** σ > 0인 반평면이요. 저는 좌표가 두 개라서 당연히 평면 전체라고 생각했어요. 직선을 연장하다가 공간 밖으로 나가 버린 거예요.

**김민준:** σ² 좌표에서도 33.64 + 5 × (−16.77) = −50.21이라 똑같이 밖으로 나가요. 근데 log σ 좌표로 가면 σ = 2.11이 나와요. 음수가 안 돼요.

**이서연:** log σ는 실수 전체를 다 쓰니까 가장자리가 없구나. 정의역을 바꿔서 경계를 없애는 거, 해석학에서 열린구간을 실수 전체로 옮기는 변환이랑 같은 발상이에요.

**선생님:** 그래요. 주소를 바꾸면 경계가 사라지기도 하고, 직선이 바뀌기도 해요. 어떤 주소의 직선이 "진짜 곧은 길"인지는 따로 따져 봐야 할 물음이에요.

## 심플렉스: 결과가 셋인 모든 분포의 지도

가위바위보 선수의 '모든 가능한 버릇'을 한눈에 볼 수 있을까?

### 가위바위보 — 세 확률이 곧 좌표

어떤 선수는 바위를 50%, 가위를 30%, 보를 20% 낸다. 다른 선수는 셋을 똑같이 낸다. 정규분포와 달리 여기에는 평균이나 표준편차 같은 이름난 모수(분포를 정하는 숫자)가 없다. 세 확률 자체가 좌표다.

\`\`\`latex
\\Delta = \\{ (\\textcolor{#d6479f}{p}_1, \\textcolor{#d6479f}{p}_2, \\textcolor{#d6479f}{p}_3) : \\textcolor{#d6479f}{p}_i \\ge 0,\\ \\textcolor{#d6479f}{p}_1 + \\textcolor{#d6479f}{p}_2 + \\textcolor{#d6479f}{p}_3 = 1 \\}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\Delta & \\text{결과가 셋인 분포 전체의 모임 (심플렉스)} \\\\
\\textcolor{#d6479f}{p}_i & \\text{결과 } i \\text{ 의 확률 (바위, 가위, 보)} \\\\
i & \\text{결과의 번호}
\\end{array}
\`\`\`

숫자는 셋이지만 합이 1이라는 약속 때문에 자유로운 것은 둘뿐이다. 그래서 3차원 공간 속의 평평한 삼각형 하나가 된다.

### 삼각형 좌표 — 꼭짓점을 확률만큼 끌어당긴 무게중심

세 꼭짓점이 각각 "반드시 바위", "반드시 가위", "반드시 보"다. 분포는 세 꼭짓점을 확률만큼 끌어당긴 무게중심에 찍힌다. 한가운데는 셋을 똑같이 내는 선수, 곧 균등분포다. 변 위의 점은 한 가지를 절대 내지 않는 선수다. 어느 변 위에 있는지 보면 무엇을 버렸는지 안다.

\`\`\`latex
\\text{점} = \\textcolor{#d6479f}{p}_1 V_1 + \\textcolor{#d6479f}{p}_2 V_2 + \\textcolor{#d6479f}{p}_3 V_3
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_i & \\text{결과 } i \\text{ 의 확률} \\\\
V_1,\\ V_2,\\ V_3 & \\text{삼각형의 세 꼭짓점 (평면 위의 위치)}
\\end{array}
\`\`\`

![심플렉스: 결과가 셋인 모든 분포의 지도](/images/chapters/ch02-dice-simplex.svg)

{{viz: ch02/simplex}}

### 파이썬

\`\`\`python
import numpy as np

V = np.array([[0.5, np.sqrt(3) / 2],   # 꼭짓점 1: 반드시 바위
              [0.0, 0.0],              # 꼭짓점 2: 반드시 가위
              [1.0, 0.0]])             # 꼭짓점 3: 반드시 보

def to_xy(p):                  # 분포 → 삼각형 위의 점 (꼭짓점의 가중평균)
    return p @ V

def to_p(xy):                  # 삼각형 위의 점 → 분포 (선형방정식 풀기)
    A = np.vstack([V.T, np.ones(3)])
    return np.linalg.solve(A, np.append(xy, 1.0)) + 0.0

for p in [(1/3, 1/3, 1/3), (1, 0, 0), (0.5, 0.5, 0), (0.6, 0.3, 0.1)]:
    xy = to_xy(np.array(p))
    print(np.round(p, 3), "→", xy.round(3), "→", to_p(xy).round(3))
# [0.333 0.333 0.333] → [0.5   0.289] → [0.333 0.333 0.333]
# [1 0 0] → [0.5   0.866] → [1. 0. 0.]
# [0.5 0.5 0. ] → [0.25  0.433] → [0.5 0.5 0. ]
# [0.6 0.3 0.1] → [0.4  0.52] → [0.6 0.3 0.1]
\`\`\`

분포에서 점으로, 점에서 다시 분포로. 왕복해도 아무것도 잃지 않는다. 두 번째 줄의 확정 분포는 꼭짓점에, 세 번째 줄은 "보"를 버린 선수라서 꼭짓점 1과 2를 잇는 변 위에 찍힌다.

### ML에서: 언어 모델의 출력은 심플렉스의 점

언어 모델이 내놓는 다음 토큰의 확률표도 이런 도형 위의 점이다. 후보가 셋이면 바로 이 삼각형이다. 다만 소프트맥스는 로짓에 지수를 씌우므로 어떤 칸도 정확히 0이 되지 않는다. 그래서 소프트맥스의 출력은 늘 삼각형의 안쪽에 찍힌다. 변이나 꼭짓점, 곧 어떤 후보를 절대 고르지 않는 분포에는 로짓을 한없이 벌려야 겨우 다가갈 수 있다.

### 수확

"이산분포(결과가 몇 개로 딱 떨어지는 분포) 전체는 심플렉스라는 하나의 도형이다." 결과가 k개면 (k−1)차원 심플렉스가 된다. 삼각형은 그 가장 작은, 눈에 보이는 예다.

### 문제 2. 삼각형 위의 주소

꼭짓점을 V₁ = (0.5, √3/2) (바위), V₂ = (0, 0) (가위), V₃ = (1, 0) (보)로 둔 삼각형이 있다. (가) 분포 (0.2, 0.5, 0.3)을 삼각형 위의 점으로 옮겨라. (나) 그 점에서 세 변까지의 거리를 구하고, 분포의 세 숫자와의 관계를 말하라.

#### 함께 풀기

**김민준:** (0.2, 0.5, 0.3) 곱하기 꼭짓점이니까… 0.2 × (0, 0) + 0.5 × (1, 0) + 0.3 × (0.5, √3/2) = (0.65, 0.26)이요.

**선생님:** 바위 확률이 0.2인 점인데, 바위 꼭짓점에 얼마나 가까워요?

〔M04〕 **김민준:** 높이가 0.26이면… 아, 제가 꼭짓점 순서를 바꿔 넣었어요. V₁부터 순서대로 하면 0.2 × (0.5, √3/2) + 0.5 × (0, 0) + 0.3 × (1, 0) = (0.4, 0.173)이에요.

**이서연:** 그럼 (나)는 금방이에요. 세 숫자가 세 꼭짓점까지의 거리잖아요. 바위 꼭짓점까지 0.2.

**선생님:** 확인해 봐요. (0.4, 0.173)에서 (0.5, 0.866)까지.

〔S06〕 **이서연:** √(0.01 + 0.48)… 0.7이에요. 0.2가 아니네요. 게다가 확률이 크면 그 꼭짓점에 가까워야 하는데, 거리라면 반대로 멀어지잖아요.

**선생님:** 바위 확률이 0이 되는 점들은 어디에 모여 있죠?

〔S07〕 **이서연:** 바위의 맞은편 변, 가위–보를 잇는 밑변이요. 그러니까 p₁은 꼭짓점까지가 아니라 맞은편 변에서부터 잰 높이예요. 점의 높이가 0.173이고, 전체 높이 √3/2 ≈ 0.866의 0.2배예요.

**김민준:** 다른 두 변도 계산해 보니 0.433, 0.260이에요. 각각 0.866 × 0.5, 0.866 × 0.3이고요.

**이서연:** 좌표가 "어디서부터 잰 거리"인지 기준을 잘못 잡았네요. 정삼각형 안의 한 점에서 세 변까지 거리의 합이 늘 높이와 같다는 비비아니 정리를 수업에서 배웠는데, 확률의 합이 1인 게 바로 그 정리였어요.

## 고차원 심플렉스: 5만 면 주사위의 세계

삼각형 위에서는 어느 점이 가운데이고 어느 점이 가장자리인지 눈으로 보인다. 칸이 5만 개로 늘어나도 그 감각이 통할까?

실제 언어 모델의 "다음 토큰" 분포는 면이 수만~수십만 개인 주사위다. 어휘가 5만 개라면, 그 심플렉스는 49,999차원의 초삼각형이다. 합이 1이라는 약속 하나가 차원 하나를 가져간다.

고차원에서는 직관이 뒤집힌다.

이 초삼각형 위에서 점을 아무렇게나, 고르게 하나 찍어 보자. 세 칸일 때처럼 "어딘가 한쪽으로 치우친" 분포가 나올 것 같다. 그런데 실제로 나오는 분포는 모든 칸이 1/n 근처인, 균등분포와 비슷한 모양이다. 가장 큰 칸조차 (ln n)/n 정도라서, 어느 꼭짓점에도 가깝지 않다.

그러면 점들은 한가운데에 모여 있을까. 그것도 아니다. 가장 작은 칸은 평균 1/n²이다. 다른 칸들보다 n배쯤 작다. 모든 칸이 균등값의 절반 이상인 "안쪽" 영역을 떼어 보면, 그 영역의 부피는 전체의 (1/2)<sup>n−1</sup>이다. 세 칸이면 4분의 1인데, 5만 칸이면 10<sup>−15051</sup> 정도다. 거의 모든 부피가 어느 한 칸이 유난히 작은, 경계의 면 가까이에 있다.

서울역 대합실을 떠올려 보자. 사람들은 한가운데가 아니라 벽을 따라, 기둥 옆에 서 있다. 그렇다고 네 구석에 몰려 있는 것도 아니다. 고차원 심플렉스의 점들이 딱 그렇다. 꼭짓점이 아니라 벽(면) 근처에, 그러나 벽마다 고르게. 부피가 이렇게 한쪽 얇은 층에 쏠리는 현상을 측도(여기서는 부피)의 집중이라 부른다.

5만 차원의 삼각형 위에 점 하나를 찍었다. 점은 찍었다. 그런데 두 점이 "가깝다" 또는 "멀다"는 것은 어떻게 아는가? 삼각형 위에서 자를 대야 한다. 어떤 자를?

### 문제 3. 고르게 찍은 점의 가장 작은 칸 (킬러)

결과가 n개인 심플렉스 위에서 점을 고르게(균등하게) 하나 뽑는다. (가) 가장 작은 칸 min pᵢ의 기댓값이 n에 따라 어떻게 줄어드는지 구하라. (나) 이 결과를 "고차원 심플렉스의 점은 대부분 꼭짓점 근처에 있다"는 말과 비교하라. (다) numpy로 확인할 때 표본을 어떻게 뽑아야 하는가?

#### 함께 풀기

**김민준:** 바로 돌렸어요. \`p = rng.random(n)\` 뽑아서 합으로 나누고 min을 평균냈어요. n = 3이면 0.153이고, n = 1000이면 2.0 × 10⁻⁶이에요. n² 곱하면 2쯤 되니까 1/n²에 비례하는 것 같아요. 답은 2/n²?

**이서연:** 나는 손으로 했는데 1/n²이 나왔어. 계수가 달라.

**선생님:** 둘 중 하나는 "고르게" 뽑지 않았어요. 민준 학생, n = 3에서 칸 세 개를 따로 0과 1 사이에서 뽑고 합으로 나누면, 삼각형 위에 점이 고르게 뿌려질까요?

〔M05〕 **김민준:** 음… 정육면체 안의 점을 원점에서 대각선 쪽으로 쏘아서 삼각형에 찍는 거니까, 그 방향으로 정육면체가 얼마나 긴지에 따라 밀도가 달라지겠네요. 가운데 방향이 제일 길어요.

**김민준:** 그래서 가운데가 진하고 변 근처가 옅어요. min이 부풀려진 거예요.

〔M07〕 **김민준:** 심플렉스 위에 점을 뿌리는 디리클레 분포, \`rng.dirichlet(np.ones(n))\`로 다시 뽑으니까 n = 3에서 0.111, n = 1000에서 n² 곱한 값이 1.00이에요. 정확히 1/n²이네요.

**김민준:** 설문지 표본을 역 앞에서만 받아 놓고 "국민 여론"이라고 보고서 쓴 거랑 같은 실수였어요. 뽑는 방법이 이미 답을 기울여 놨어요.

**선생님:** 서연 학생은 어떻게 1/n²을 얻었어요?

**이서연:** 서로 독립인 지수분포 n개를 뽑아서 합으로 나누면 심플렉스에서 균등한 점이 돼요. 지수분포 n개의 최솟값은 평균이 1/n인 지수분포고, 합은 평균이 n이에요. 그래서 대략 (1/n)/n = 1/n²이에요.

**선생님:** "대략"이라고 했는데, 정확히는요?

**이서연:** 나눗셈의 기댓값을 기댓값끼리 나누면 보통은 안 되는데… 여기서는 돼요. 합으로 나눈 벡터 p는 합 자체와 독립이라서, E[min Eᵢ] = E[min pᵢ] × E[합]이 정확히 성립해요. 1/n = E[min pᵢ] × n이니까 정확히 1/n²이에요. 민준이 디리클레 결과랑도 맞고요.

**선생님:** 좋아요. 그럼 (나)는요?

**이서연:** 가장 작은 칸이 1/n²으로 0에 붙으니까, 점이 거의 늘 가장자리에 있다는 뜻이에요. 그러니까 "꼭짓점 근처"라는 말이 맞아요.

**선생님:** 꼭짓점에 가깝다는 건 어떤 분포예요?

**이서연:** 한 칸이 거의 1인 분포요.

**선생님:** 민준 학생, 가장 큰 칸의 평균도 찍어 봐요.

**김민준:** n = 1000에서 0.0075예요. 1이 아니라 1000분의 7.5요.

〔S06〕 **이서연:** 가장 큰 칸도 1/n의 몇 배 수준이에요. 꼭짓점 근처가 전혀 아니에요.

〔S08〕 **이서연:** 가장자리가 두 종류였어요. 한 칸이 0에 가까우면 "면" 근처고, 한 칸만 빼고 다 0이어야 "꼭짓점" 근처예요. 고르게 뽑은 점은 모든 칸이 1/n 정도인데 그중 몇 칸이 아주 작아서, 면에는 붙어 있지만 꼭짓점과는 멀어요.

**선생님:** 그래요. 부피로 말하면, 모든 칸이 균등값의 절반 이상인 안쪽 영역의 부피는 (1/2)<sup>n−1</sup>이에요.

**김민준:** n = 10이면 0.00195예요. 디리클레로 백만 개 뽑아 세어 보니 0.00201이고요. 열 칸만 돼도 안쪽은 거의 비어 있어요.

〔S09〕 **이서연:** 그래서 앞에서 서울역 사람들이 구석이 아니라 벽을 따라 서 있다고 한 거군요. 수업에서 고차원 공의 부피가 거의 다 껍질에 있다는 걸 배웠을 때도, 그게 "북극점 근처"라는 뜻은 아니었어요. 껍질은 넓고 북극점은 좁으니까요.

〔T13〕 **선생님:** 두 사람이 다른 곳에서 넘어졌어요. 민준 학생은 "고르게"를 코드로 옮기다가, 서연 학생은 "가장자리"를 말로 옮기다가요. 고차원에서는 이 두 옮김이 모두 위험해요. 그래서 우리는 자가 필요해요. 가깝다, 멀다를 말로 하지 않고 재기 위해서요.
`,D4=`# 거리

분포는 점이 될 수 있다. 한국 남성 (174, 5.8)과 네덜란드 남성 (183, 7.1). (μ, σ) 평면 위의 두 점이다.

점을 찍은 이유는 하나다. 거리를 재기 위해서다.

거리를 잴 수 있으면, 비로소 진짜 질문을 할 수 있다. 내 모델이 현실에서 얼마나 멀리 떨어져 있는가? 한 에폭 학습한 뒤에 그 거리가 줄어들었는가, 늘어났는가? 내 모델과 너의 모델 중 어느 쪽이 현실에 더 가까운가? 학습률을 이만큼 높여도 괜찮은가, 아니면 손실이 끝없이 커지고 있는가?

기계학습의 거의 모든 판단이 "거리"에 의존한다.

가장 먼저 떠오르는 자는 유클리드 거리다. (μ, σ) 평면 위의 두 점이니까, 피타고라스 정리로 재면 되지 않을까?

\`\`\`latex
d = \\sqrt{(\\textcolor{#2e9e6e}{\\mu}_1 - \\textcolor{#2e9e6e}{\\mu}_2)^2 + (\\textcolor{#2e9e6e}{\\sigma}_1 - \\textcolor{#2e9e6e}{\\sigma}_2)^2}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
d & \\text{두 점 사이의 유클리드 거리} \\\\
\\textcolor{#2e9e6e}{\\mu} & \\text{평균 (첨자 1, 2는 두 분포)} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차}
\\end{array}
\`\`\`

한국 남성과 네덜란드 남성 사이는 √(9² + 1.3²) ≈ 9.1이다.

그런데 이 숫자가 두 분포의 "다름"을 제대로 재고 있을까?

같은 9cm를 다른 곳에서 움직여 보자. 성인 남성의 키 분포는 σ가 5.8cm쯤이다. 평균을 174에서 183으로 옮기면 봉우리가 자기 폭의 1.5배를 이동한다. 두 분포는 겹치는 부분보다 어긋나는 부분이 더 많아진다.

이번에는 아이부터 노인까지 모든 연령의 키를 모은 분포를 생각한다. 평균은 150cm쯤이고 σ는 30cm 가까이 된다. 여기서 평균을 9cm 옮기면, 넓게 퍼진 언덕이 제 폭의 3분의 1도 안 되게 조금 밀려날 뿐이다. 두 분포는 거의 포개진다.

유클리드 자는 두 경우 모두 9라고 말한다. 하지만 분포의 관점에서 앞의 것은 큰 변화이고 뒤의 것은 작은 변화다. 같은 9cm라도 σ가 얼마인지에 따라 뜻이 달라지는데, 유클리드 자는 μ의 차이와 σ의 차이를 좌표 그대로 더할 뿐 이 맥락을 모른다.

이 장 뒤에서 만날 KL 발산이라는 자로 재면 앞의 이동은 1.20, 뒤의 이동은 0.045다. 약 27배 차이다.

확률분포의 공간에서 유클리드 거리가 통했다면, 정보기하학이라는 학문은 필요하지 않았을 것이다. 다른 자가 필요하다.

## KL 발산: 방향이 있는 확률의 자

공정한 주사위와 약간 기운 주사위는 얼마나 다른가? 자를 대 보기 전에, 자가 하나뿐인지부터 물어야 한다.

결과가 셋인 분포 세 개를 심플렉스(세 확률의 합이 1인 점들이 이루는 삼각형) 위에 놓는다.
A = (0.5, 0.3, 0.2), B = (0.6, 0.39, 0.01), C = (0.25, 0.25, 0.5).

유클리드 거리로 재면 A–B는 0.233, A–C는 0.394다. A는 B에 더 가깝다. 그런데 이 절에서 배울 KL 발산이라는 다른 자를 A에서 대면 A–B는 0.429, A–C는 0.218이다. 이번에는 C가 더 가깝다. 같은 세 점인데, 자를 바꿨을 뿐이다.

무엇이 순위를 뒤집었을까. B는 결과 3에 겨우 1%를 준다. A는 그 결과에 20%를 준다. 유클리드 자에게 0.2와 0.01의 차이는 0.19라는 작은 좌표 차이일 뿐이다. KL 자에게는 "현실에서 다섯 번에 한 번 일어나는 일을 모형이 백 번에 한 번이라고 우긴다"는 심각한 착오다.

점을 "어떤 공간에 놓느냐"에 따라 가까움이 달라지듯, 같은 공간 안에서도 "어떤 자를 쓰느냐"에 따라 보이는 구조가 달라진다. 공간을 바꾸는 것과 자를 바꾸는 것은 같은 동전의 양면이다.

{{viz: ch03/euclidean-vs-kl}}

### 파이썬

\`\`\`python
import numpy as np

A = np.array([0.5, 0.3, 0.2])
B = np.array([0.6, 0.39, 0.01])
C = np.array([0.25, 0.25, 0.5])

def kl(p, q):
    return np.sum(p * np.log(p / q))

print(f"유클리드  A-B {np.linalg.norm(A - B):.3f}   A-C {np.linalg.norm(A - C):.3f}")
print(f"KL(A‖·)   A-B {kl(A, B):.3f}   A-C {kl(A, C):.3f}")
# 유클리드  A-B 0.233   A-C 0.394
# KL(A‖·)   A-B 0.429   A-C 0.218
\`\`\`

"거리에도 종류가 있다." 그런데 거리라면 당연히 왕복이 같아야 한다고 느낀다. A에서 B까지와 B에서 A까지가 같다는 것. 그 "당연함"을 의심해보자.

### 거리의 네 약속 — 대칭은 당연한가

수학이 "거리"라고 부르는 것은 네 가지 약속을 지키는 함수다.

\`\`\`latex
\\begin{aligned}
& d(a, b) \\ge 0 && \\text{(음수가 아니다)} \\\\
& d(a, b) = 0 \\iff a = b && \\text{(0이면 같은 점이다)} \\\\
& d(a, b) = d(b, a) && \\text{(대칭)} \\\\
& d(a, c) \\le d(a, b) + d(b, c) && \\text{(삼각부등식)}
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
d & \\text{거리 함수} \\\\
a,\\ b,\\ c & \\text{공간의 세 점}
\\end{array}
\`\`\`

이 절에서 의심하는 것은 세 번째 약속, 대칭이다.

### 무빙워크 — 방향이 있는 거리

무빙워크(moving walkway) — 공항에서 무빙워크를 타고 가면 3분, 거슬러 걸어오면 11분. 같은 두 지점인데 방향에 따라 "걸리는 시간"이 다르다. 복도 곳곳에 지점을 찍고 서로 간의 시간을 표로 만들면, 그 표는 대각선을 기준으로 접었을 때 포개지지 않는다.

비대칭은 공간이 휘어서 생기는 것이 아니다. 복도는 곧고 평평하다. 달라진 것은 재는 방식이다. 걸음 수 대신 걸린 시간으로 재기로 했고, 그 재는 방식 안에 방향이 들어 있다.

![공항 무빙워크 — 같은 거리도 방향에 따라 다르다](/images/chapters/moving-walkway-photo.jpg)

### 파이썬

\`\`\`python
import numpy as np

pos = np.array([0, 100, 300])      # 복도 위 세 지점 A, B, C (m)
walk, belt = 1.0, 0.55             # 걷는 속도, 무빙워크 속도 (m/s), 무빙워크는 + 방향

gap = pos[None, :] - pos[:, None]            # gap[i, j] = j 위치 - i 위치
speed = np.where(gap > 0, walk + belt, walk - belt)
T = np.abs(gap) / speed / 60                 # 걸리는 시간 (분)

print(np.round(T, 1))
print("대칭인가?", np.allclose(T, T.T))
# [[ 0.   1.1  3.2]
#  [ 3.7  0.   2.2]
#  [11.1  7.4  0. ]]
# 대칭인가? False
\`\`\`

비대칭 거리는 이상한 게 아니라 방향이 있는 거리다.

### 정의 — 확률의 무빙워크

확률분포의 세계에서 무빙워크는 어느 방향으로 깔려 있을까?

![무빙워크: 방향에 따라 다른 거리](/images/chapters/ch03-moving-walkway.svg)

현실 분포 p와 모형 q가 있을 때, KL 발산은 이렇게 쓴다.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) = \\sum_i \\textcolor{#d6479f}{p}_i \\log \\frac{\\textcolor{#d6479f}{p}_i}{\\textcolor{#7f8f10}{q}_i}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산 (Kullback–Leibler divergence)} \\\\
\\textcolor{#d6479f}{p} & \\text{현실 분포, } p_i \\text{ 는 결과 } i \\text{ 의 확률} \\\\
\\textcolor{#7f8f10}{q} & \\text{모형 분포} \\\\
i & \\text{결과의 번호} \\\\
\\log & \\text{자연로그}
\\end{array}
\`\`\`

읽는 법은 이렇다. 결과마다 "현실의 확률 ÷ 모형의 확률"에 로그를 씌우고, 그 값을 현실에서 그 결과가 일어나는 빈도로 가중평균한다. 모형이 현실과 똑같으면 모든 비가 1이고 로그가 0이라서 KL도 0이다. 모형이 현실에서 흔한 결과를 드물다고 하면 그 결과의 비가 커지고, 현실이 그 결과에 준 확률만큼 벌점이 붙는다.

이 식이 왜 하필 로그인지, 왜 항상 0 이상인지는 아직 말하지 않는다. 지금은 읽는 법만 손에 익히자.

### p와 q의 역할

이 교재에서 p는 항상 "현실"(진짜 분포), q는 항상 "지도"(모형)다. KL(p‖q)는 "현실 p의 눈으로 본, 지도 q의 부정확함". 평균을 내는 무게가 p라서, 현실에서 흔한 곳의 오차가 크게 잡힌다. KL(q‖p)는 "지도 q의 눈으로 본, 현실 p와의 어긋남". 이번에는 무게가 q라서, 모형이 확신하는 곳의 오차가 크게 잡힌다. 같은 두 분포인데, 누구의 눈으로 보느냐에 따라 값이 다르다.

### 왜 "거리"가 아니라 "발산"인가

KL은 거리의 네 약속 중 첫 두 개는 지킨다. 항상 0 이상이고, 0이면 두 분포가 같다. 하지만 대칭이 아니고, 아래 문제 4에서 보겠지만 삼각부등식도 깨진다. 그래서 수학자들은 이것을 거리(distance)라 부르지 않고 발산(divergence)이라 부른다. "한 점에서 다른 점으로 벌어져 나가는 정도"라는 뜻이다. 이 책도 KL을 거리라 부르지 않고 늘 "KL 발산"이라 부른다.

{{viz: ch03/asymmetry}}

### ML에서: 교차 엔트로피 손실은 KL(p‖q)다

분류 모델을 학습시킬 때 흔히 쓰는 교차 엔트로피 손실 −Σ p<sub>i</sub> log q<sub>i</sub> 를 KL의 정의와 나란히 놓아 보자. KL(p‖q) = Σ p<sub>i</sub> log p<sub>i</sub> − Σ p<sub>i</sub> log q<sub>i</sub> 이므로, 교차 엔트로피는 KL(p‖q)에 모형 q와 상관없는 값 −Σ p<sub>i</sub> log p<sub>i</sub>(p의 엔트로피, 분포가 얼마나 고르게 퍼졌는지 재는 값)를 더한 것이다. 그래서 교차 엔트로피를 줄이는 일은 데이터를 현실 자리에, 모델을 모형 자리에 둔 KL(p‖q)를 줄이는 일과 같다. 학습은 방향을 이미 골라 놓고 있는 셈이다.

### 수확

"KL은 확률 세계의 무빙워크 거리" 같은 두 분포라도 누구를 현실 자리에 두느냐에 따라 값이 다르다.

### 문제 1. 두 동전, 두 방향

공정한 동전 (0.5, 0.5)과 기운 동전 (0.9, 0.1)이 있다. KL(공정‖기운)과 KL(기운‖공정)을 각각 구하라. 어느 쪽이 더 크고, 왜 그런가?

#### 함께 풀기

**선생님:** 동전 두 개, 방향 두 개. 숫자가 몇 나왔어요?

**김민준:** 벌써 돌렸어요. KL(공정‖기운)이 0.511이고 KL(기운‖공정)은 0.368이요.

**이서연:** 나도 같아. 손으로 해도 0.5 log(0.5/0.9) + 0.5 log(0.5/0.1)이니까 0.511 맞아.

**선생님:** 좋아요. 그럼 왜 앞쪽이 커요?

**김민준:** 음… 공정한 동전이 더 "무작위"하니까요? 엔트로피가 크니까 KL도 크다, 이런 거 아닐까요.

**선생님:** 그 논리대로면 엔트로피가 큰 쪽이 앞에 오면 항상 KL이 커야겠네요. 서연 학생, 그런 것 같아요?

**이서연:** 아니요, 식을 보면 엔트로피는 직접 안 들어가요. 항별로 보면… 공정한 동전이 뒷면에 0.5를 주는데 기운 동전은 0.1만 줘요. 그 항이 0.5 × log 5라서 0.80이에요. 거의 다 거기서 나와요.

**선생님:** 맞아요. KL(p‖q)는 p가 자주 보는 곳에서 q가 얼마나 인색한지를 봐요. 공정한 동전에게 뒷면은 두 번에 한 번 보는 흔한 일인데, 기운 동전은 그걸 열 번에 한 번이라고 하니까요.

〔M07〕 **김민준:** 아, 반대 방향은 기운 동전이 뒷면을 거의 안 보니까 그 항이 가볍게 눌리는 거고요.

**김민준:** 팀 과제 채점 기준표를 누가 만드느냐랑 비슷하네요. 조교가 만들면 조교가 중요하게 보는 항목에서 깎이고, 학생이 만들면 또 다른 데서 깎이고.

**선생님:** 그 비유 괜찮아요. 무게를 누가 쥐고 있느냐, 그게 KL의 방향이에요.

### 문제 2. 모형 자리에 선 A

앞에서 본 세 분포 A, B, C를 다시 쓴다. 이번에는 A를 모형 자리에 두고 KL(B‖A)와 KL(C‖A)를 비교하라. A와 더 가까운 점은 여전히 C인가?

#### 함께 풀기

**김민준:** 이건 위젯에서 봤어요. C가 더 가까워요. KL은 B를 싫어해요, B가 결과 3에 1%밖에 안 주니까.

**선생님:** 위젯 버튼은 어느 쪽에 놓여 있었어요?

〔M04〕 **김민준:** …KL(A‖·)요. 아, 문제는 KL(·‖A)네요.

**이서연:** 계산해 보면 KL(B‖A)가 0.182, KL(C‖A)가 0.239야. 이번엔 B가 더 가까워.

**선생님:** 왜 다시 뒤집혔을까요?

**이서연:** 이번엔 무게를 B가 쥐어요. B는 결과 3을 거의 안 보니까, A가 거기에 20%를 줬든 말든 신경을 안 써요. 1% 곱하기 로그라서 작아요.

〔S07〕 **이서연:** 그러니까 "A와 가장 가까운 점"이라는 질문 자체가 방향을 정해야 성립하는 질문이네요.

**김민준:** 팀플 동료평가 같네. 내가 조원들을 매긴 순위랑 조원들이 나를 기준으로 매긴 순위가 다른 것처럼.

**선생님:** 그래요. 유클리드 자에서는 "가까운 점"이 하나지만, KL에서는 누가 현실이고 누가 모형인지 먼저 정해야 해요.

## 정규분포의 KL: 평균 차이를 σ로 잰다

도입부에서 유클리드 자는 같은 9cm 이동을 두 번 다 9라고 했고, KL은 한 번은 1.20, 한 번은 0.045라고 했다. 같은 9cm인데 KL은 무엇을 보고 27배나 다르게 쟀을까?

### 정규분포끼리 — 닫힌꼴

앞 절의 합은 키처럼 연속인 값에서는 적분이 된다. 정규분포끼리는 그 적분이 닫힌꼴(적분 없이 평균과 표준편차만 넣으면 값이 나오는 식)로 풀린다.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}\\big(\\mathcal{N}(\\textcolor{#2e9e6e}{\\mu}_1, \\textcolor{#2e9e6e}{\\sigma}_1^2)\\,\\|\\,\\mathcal{N}(\\textcolor{#2e9e6e}{\\mu}_2, \\textcolor{#2e9e6e}{\\sigma}_2^2)\\big) = \\log\\frac{\\textcolor{#2e9e6e}{\\sigma}_2}{\\textcolor{#2e9e6e}{\\sigma}_1} + \\frac{\\textcolor{#2e9e6e}{\\sigma}_1^2 + (\\textcolor{#2e9e6e}{\\mu}_1 - \\textcolor{#2e9e6e}{\\mu}_2)^2}{2\\textcolor{#2e9e6e}{\\sigma}_2^2} - \\frac{1}{2}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\mathcal{N}(\\cdot,\\cdot) & \\text{정규분포 (평균, 분산)} \\\\
\\textcolor{#2e9e6e}{\\mu}_1,\\ \\textcolor{#2e9e6e}{\\sigma}_1 & \\text{현실 분포 } p \\text{ 의 평균과 표준편차} \\\\
\\textcolor{#2e9e6e}{\\mu}_2,\\ \\textcolor{#2e9e6e}{\\sigma}_2 & \\text{모형 분포 } q \\text{ 의 평균과 표준편차}
\\end{array}
\`\`\`

두 σ가 같으면 앞의 로그와 −½이 상쇄되고 (Δμ)² / (2σ²)만 남는다. 도입부의 두 숫자가 여기서 나온다. 81 / (2 × 5.8²) ≈ 1.20, 81 / (2 × 30²) = 0.045. 평균의 차이를 σ로 나눈다는 것, 그것이 유클리드 자에게 없던 맥락이다.

### 무빙워크를 확률에 깔면 — 넓은 현실, 좁은 모형

무빙워크를 확률에 깔아 보자. 넓게 퍼진 현실 p를 좁은 모형 q로 설명하려는 방향은 거슬러 걷는 쪽이다. 현실이 자주 내놓는 결과 상당수를 모형은 거의 불가능하다고 여기기 때문이다. 반대로 좁은 현실을 넓은 모형으로 설명하는 방향은 무빙워크를 탄 쪽이다. 모형이 다소 흐릿할 뿐, 현실에서 일어나는 일을 불가능하다고 하지는 않는다.

숫자로 확인하면 이렇다. p = N(0, 2²), q = N(0, 1²)이면 KL(p‖q) = 0.807이다. 둘을 바꾸면 KL(q‖p) = 0.318이다. 같은 두 분포인데 2.5배 차이다.

### 파이썬

\`\`\`python
import numpy as np

def kl_gauss(m1, s1, m2, s2):
    """KL( N(m1, s1²) ‖ N(m2, s2²) )"""
    return np.log(s2 / s1) + (s1**2 + (m1 - m2)**2) / (2 * s2**2) - 0.5

print(f"성인 남성 σ=5.8, 9cm 이동 : {kl_gauss(174, 5.8, 183, 5.8):.3f}")
print(f"전 연령   σ=30,  9cm 이동 : {kl_gauss(150, 30, 159, 30):.3f}")
print(f"넓은 p, 좁은 q : {kl_gauss(0, 2, 0, 1):.3f}")
print(f"좁은 p, 넓은 q : {kl_gauss(0, 1, 0, 2):.3f}")

# 정의대로 확인: KL(p‖q) = p 에서 뽑은 x 로 평균낸 log p(x) − log q(x)
def log_pdf(x, m, s):
    return -0.5 * ((x - m) / s)**2 - np.log(s * np.sqrt(2 * np.pi))

x = np.random.default_rng(0).normal(0, 2, 1_000_000)   # p = N(0, 2²) 에서 표본
print(f"표본 평균으로 잰 KL(p‖q) : {np.mean(log_pdf(x, 0, 2) - log_pdf(x, 0, 1)):.3f}")
# 성인 남성 σ=5.8, 9cm 이동 : 1.204
# 전 연령   σ=30,  9cm 이동 : 0.045
# 넓은 p, 좁은 q : 0.807
# 좁은 p, 넓은 q : 0.318
# 표본 평균으로 잰 KL(p‖q) : 0.809
\`\`\`

마지막 줄은 닫힌꼴 값 0.807과 소수 둘째 자리까지 맞는다. 표본을 늘릴수록 더 가까워진다.

### 수확

"정규분포의 KL은 평균의 차이를 σ로 나눠서 잰다." KL이 정확히 무엇을 재는지 — 로그가 왜 거기 있는지는 아직 말하지 않았다. 그 답은 "놀라움"을 세는 법에서 나온다.

---

> ### 인물 이야기 — Solomon Kullback과 암호해독의 거리
>
> ![Solomon Kullback](/images/portraits/solomon-kullback.jpg)
>
> 1930년, 워싱턴 D.C. 뉴욕 시립대학에서 수학을 공부한 Solomon Kullback은 공무원 시험을 거쳐 미 육군 신호정보국(Signal Intelligence Service)에 들어갔다. William Friedman이 처음 뽑은 세 명의 암호분석가 중 하나였다. 낮에는 암호를 풀고, 그 사이 조지워싱턴 대학에서 수학 박사학위(1934)를 받았다.
>
> 암호해독에는 통계가 필요했다. 독일어 텍스트에서 글자가 나타나는 빈도와 암호문에서 기호가 나타나는 빈도를 비교해야 했다. "이 암호문이 독일어로 쓰인 것인가, 일본어로 쓰인 것인가?" 이 질문의 핵심은 — 두 빈도 분포가 얼마나 다른가?
>
> 이것이 문제의 맥락이었다. 추상적인 수학적 호기심이 아니라, 전쟁 중에 적의 통신을 읽어야 하는 절박한 필요. 같은 시기 대서양 건너 블레츨리 파크에서는 Alan Turing과 I. J. Good이 관측 하나가 한 가설을 얼마나 편드는지를 로그 우도비(두 가설이 그 관측에 준 확률, 곧 우도의 비에 로그를 씌운 값), 다른 이름으로 "증거의 무게"로 재고 있었다. 그 무게를 현실의 빈도로 평균 내면 — 그것이 뒤에 KL이라 불릴 양이다.
>
> 전쟁이 끝나고 미국의 암호 기관들은 하나로 합쳐졌다(1949년 군 보안국, 1952년 국가안보국 NSA). 그 통합 기관에서 Kullback은 일리노이 대학 박사 출신의 수학자 Richard Leibler와 동료가 되었다. 두 사람이 1951년에 발표한 논문 "On Information and Sufficiency"가 이 양에 이름과 체계를 주었다. 논문의 핵심 아이디어는 간단했다. 가설 1이 맞다고 믿을 때, 가설 2에서의 놀라움과 가설 1에서의 놀라움의 차이를 평균 내면 — 그것이 두 가설 사이의 "정보"다.
>
> 이 양은 대칭이 아니었다. "독일어라고 믿고 일본어 가설을 평가하는 것"과 "일본어라고 믿고 독일어 가설을 평가하는 것"은 다르다. 비대칭은 버그가 아니라 본질이었다. 암호해독에서 "내가 서 있는 가설"이 무엇인가에 따라 증거의 무게가 달라지는 것은 자연스러운 일이니까.
>
> 뿌리는 더 깊다. 통계역학의 Gibbs는 이미 1902년에 이 양이 0 이상이라는 부등식을 쓰고 있었고, Harold Jeffreys는 1946년에 두 방향을 더해 대칭으로 만든 버전을 썼다. 하지만 "두 분포 사이의 정보"라는 관점에서 이 양을 정의하고 성질을 체계적으로 분석한 것은 Kullback과 Leibler가 처음이었다.
>
> Kullback은 1962년 NSA 수석 과학자로 은퇴할 때까지 30년 넘게 암호 기관에서 일하며 통계적 암호분석의 기초를 놓았다. 그의 이름이 붙은 KL 발산은 기계학습에서 손실함수의 핵심 재료가 되었고, 정보기하학에서는 공간의 구조를 결정하는 자가 되었다. 암호해독가의 실용적 질문이 수학의 근본 개념이 된 셈이다.

### 문제 3. σ로 나눈 차이

두 정규분포의 표준편차가 σ로 같고 평균만 Δμ 다르다. KL이 (Δμ)² / (2σ²)가 됨을 보이고, 이 값의 단위가 무엇인지 말하라. numpy로 σ = 5.8인 정규분포 표본을 뽑아 확인할 때 주의할 점도 적어라.

#### 함께 풀기

**이서연:** σ가 같으면 log(σ₂/σ₁)가 0이 되고, σ₁²/(2σ₂²)가 ½이라서 −½과 상쇄돼요. (Δμ)²/(2σ²)만 남아요.

**선생님:** 단위는요?

**이서연:** 단위는… cm²/cm²니까 없어요. 어, 그러면 KL 1이라는 게 cm로 몇 cm인지는 말할 수 없는 거네요?

**선생님:** 말할 수 없어요. 그리고 그게 장점이에요. 키를 mm로 재도, 인치로 재도 KL은 같아요. Δμ와 σ가 같은 비율로 바뀌니까요.

**이서연:** 유클리드 거리는 단위를 바꾸면 값이 바뀌는데, 이건 안 바뀌네요. 해석학 시간에 "척도 불변인 양을 찾아라"던 게 이런 거였구나.

〔M05〕 **김민준:** 근데 저 numpy로 확인했더니 안 맞았어요. np.random.normal(174, 5.8**2, n)으로 뽑아서 KL을 표본 평균으로 쟀는데 값이 한참 작게 나와요.

**선생님:** normal의 두 번째 인수(argument)가 뭐예요?

〔M08〕 **김민준:** scale… 표준편차요. 분산을 넣었네요. σ를 33.64로 뽑았으니 봉우리가 엄청 넓어져서 9cm 이동이 별거 아닌 게 된 거예요.

**선생님:** 도입부의 "전 연령 분포"를 우연히 다시 만든 셈이에요. 주의할 점 하나 적었네요.

## 피셔 정보: KL의 발밑에 숨은 대칭

KL은 비대칭이라 '진짜 거리'가 아니라고 했다. 그런데 아주 가까운 두 분포 사이에서는 대칭이 된다면? 그 '찰나의 대칭'은 도대체 무엇일까?

다시 한국 남성의 키 분포로 돌아가자. (174, 5.8)과 (174.01, 5.801). 거의 같은 분포다. 이 두 점 사이에서 KL(p‖q)와 KL(q‖p)를 계산하면 — 거의 같다. 비대칭이 사라진다.

### 찌그러진 그릇 — 바닥은 언제나 포물선

한쪽 벽은 가파르고 다른 쪽 벽은 완만한 그릇이 있다. 그릇 전체는 비대칭이다. 그러나 바닥에 구슬을 놓고 아주 조금만 흔들면, 구슬이 느끼는 바닥은 좌우가 똑같은 포물선이다. 매끄러운 함수는 최솟값 근처에서 언제나 이차식처럼 보이기 때문이다.

q를 움직이며 KL(p‖q)를 재면, q = p에서 0이 되는 그릇이 생긴다. 멀리서 보면 찌그러져 있지만, 바닥 근처는 대칭인 포물면이다. 그 포물면이 얼마나 가파르게 오므라드는지, 곧 KL을 두 번 미분한 값이 피셔 정보다.

### 식으로 — 제곱으로 사라지는 KL

모수 θ(분포를 정하는 숫자)로 정해지는 분포 p<sub>θ</sub>에서 θ를 dθ만큼 움직이면,

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}\\,\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta} + d\\textcolor{#2e9e6e}{\\theta}}) \\approx \\frac{1}{2}\\, d\\textcolor{#2e9e6e}{\\theta}^{\\top}\\, \\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{\\theta})\\, d\\textcolor{#2e9e6e}{\\theta} = \\frac{1}{2} \\sum_{j,k} \\textcolor{#0e8f8f}{I}_{jk}(\\textcolor{#2e9e6e}{\\theta})\\, d\\textcolor{#2e9e6e}{\\theta}_j\\, d\\textcolor{#2e9e6e}{\\theta}_k
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{모수 } \\theta \\text{ 가 정하는 분포 (모수로 이름 붙인 분포 가족의 한 점)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{분포의 모수 (예: } (\\mu, \\sigma) \\text{)} \\\\
d\\textcolor{#2e9e6e}{\\theta} & \\text{모수의 아주 작은 변화 (벡터)} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬, } I_{jk} \\text{ 는 그 성분} \\\\
j,\\ k & \\text{모수의 번호}
\\end{array}
\`\`\`

KL은 dθ의 제곱에 비례해서 0으로 간다. 1차 항이 없는 이유는 q = p가 KL의 최솟값이기 때문이다. 바닥에서는 기울기가 0이다. 그리고 p와 q를 바꿔서 잰 KL도 같은 이차식으로 간다. 두 방향의 차이는 dθ의 세제곱 크기라서, 제곱보다 훨씬 빨리 사라진다.

가장 간단한 예는 성공 확률이 θ인 베르누이 분포다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{\\theta}) = \\frac{1}{\\textcolor{#2e9e6e}{\\theta}(1 - \\textcolor{#2e9e6e}{\\theta})}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{베르누이 분포의 피셔 정보} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{성공 확률}
\\end{array}
\`\`\`

θ가 0이나 1에 가까우면 분모가 작아져 I가 커진다. 거의 확신에 찬 분포 근처에서는 θ를 조금만 움직여도 KL이 크게 변한다는 뜻이다. 지금은 피셔 정보를 "KL의 발밑에 숨은 행렬"이라는 얼굴로 기억해 두자.

{{viz: ch03/fisher-local}}

### 파이썬

\`\`\`python
import numpy as np

def kl_bern(a, b):
    return a * np.log(a / b) + (1 - a) * np.log((1 - a) / (1 - b))

theta = 0.3
I = 1 / (theta * (1 - theta))            # 베르누이의 피셔 정보

for eps in [1e-1, 1e-2, 1e-3, 1e-4]:
    fwd = kl_bern(theta, theta + eps)
    bwd = kl_bern(theta + eps, theta)
    quad = 0.5 * I * eps**2
    print(f"ε={eps:.0e}  KL→ {fwd:.3e}  KL← {bwd:.3e}  ½Iε² {quad:.3e}  "
          f"비율 KL→/½Iε² {fwd / quad:.4f}  KL→/KL← {fwd / bwd:.4f}")
# ε=1e-01  KL→ 2.160e-02  KL← 2.258e-02  ½Iε² 2.381e-02  비율 KL→/½Iε² 0.9072  KL→/KL← 0.9565
# ε=1e-02  KL→ 2.352e-04  KL← 2.366e-04  ½Iε² 2.381e-04  비율 KL→/½Iε² 0.9877  KL→/KL← 0.9939
# ε=1e-03  KL→ 2.378e-06  KL← 2.379e-06  ½Iε² 2.381e-06  비율 KL→/½Iε² 0.9987  KL→/KL← 0.9994
# ε=1e-04  KL→ 2.381e-08  KL← 2.381e-08  ½Iε² 2.381e-08  비율 KL→/½Iε² 0.9999  KL→/KL← 0.9999
\`\`\`

ε을 열 배 줄일 때마다 두 비율이 1에 열 배씩 가까워진다.

### 수확

"KL 발산의 발밑에는 대칭적인 거리가 숨어 있다. 그 거리를 만드는 행렬이 피셔 정보 행렬이다."

그런데 잠깐 — 우리는 아직 두 점 사이를 "걸어가는 방법"을 모른다. 거리를 재는 건 지도 위에 자를 대는 것이고, 걷는 건 실제로 발을 떼는 것이다. 같은 두 점을 잇는 길이 하나가 아니라면?

### 문제 4. KL은 삼각부등식을 깨는가 (킬러)

베르누이 분포 세 개 a = 0.1, b = 0.5, c = 0.9를 생각한다. (가) KL(a‖c)와 KL(a‖b) + KL(b‖c)를 비교해 KL이 삼각부등식을 깨는지 확인하라. (나) 그렇다면 KL은 거리로서 쓸모없는가? 유클리드 거리의 제곱과 비교해서 답하라. (다) θ = 0.3에서 KL(θ‖θ+ε) − KL(θ+ε‖θ)가 ε의 몇 제곱으로 줄어드는지 보여라.

#### 함께 풀기

**김민준:** (가)는 쉬워요. KL(a‖c)가 1.758이고, KL(a‖b) + KL(b‖c)가 0.368 + 0.511 = 0.879예요. 돌아가는 게 두 배나 짧아요. 삼각부등식 깨졌고요, 그러니까 (나)의 답은 "KL은 거리로는 못 쓴다"예요.

**선생님:** 서연 학생도 같은 생각이에요?

〔S05〕 **이서연:** 잠깐만요. 깨지는 건 맞는데… 그러면 이 장 절반이 쓸모없는 자를 쓴 거잖아요. 뭔가 이상해요. 저는 처음에 로그의 볼록성으로 삼각부등식을 증명하려고 했는데 안 되더라고요. 안 되는 게 당연했던 거죠.

**이서연:** 아니면 방향이 문제일지도 몰라요. 두 방향을 더해서 대칭으로 만들면 삼각부등식이 살아나지 않을까요?

**선생님:** 해 봐요. a와 c는 0.5를 사이에 둔 거울상이라 계산이 쉬울 거예요.

**김민준:** 대칭으로 만들면 a–c가 1.758 × 2 = 3.516이고, a–b랑 b–c가 둘 다 0.368 + 0.511 = 0.879예요. 돌아가도 1.758이라 여전히 절반이에요.

〔S06〕 **이서연:** 대칭으로 만들어도 안 되네요. 그럼 원인은 방향이 아니라 다른 데 있어요.

**선생님:** 좋은 의심이에요. 수직선 위의 점 1, 2, 3을 생각해 봐요. 유클리드 거리의 제곱으로 재면 1에서 3까지가 얼마예요?

**이서연:** 4요. 1에서 2가 1, 2에서 3이 1이니까 돌아가면 2고요.

〔S09〕 **이서연:** …제곱 거리도 삼각부등식을 깨요. KL은 발밑에서 ½ dθᵀ I dθ, 그러니까 제곱 거리처럼 생겼잖아요. 제곱 거리가 삼각부등식을 깨는 건 결함이 아니라 제곱이라서 그런 거예요.

**선생님:** 그래요. KL은 "거리"보다 "거리의 제곱의 절반"에 가까운 물건이에요. 제곱 거리가 쓸모없지 않듯 KL도 쓸모없지 않아요. 최소제곱법이 제곱 거리로 세상을 다 굴리잖아요.

〔M06〕 **김민준:** 그럼 (다)는요? 저 ε을 1e-9까지 줄여서 차이를 찍어 봤는데, 차이가 −3.8e-17이 나오고 KL 자체도 2e-17, 6e-17 이렇게 들쭉날쭉해요. 줄어드는 차수를 모르겠어요.

**선생님:** KL(θ‖θ+ε)의 진짜 값은 ε = 1e-9에서 얼마쯤이어야 해요?

**이서연:** ½ I ε²이니까 I가 4.76이면… 2.4e-18이요.

**김민준:** 그런데 제 코드는 2e-17이 나왔으니까… 값 자체가 틀렸네요. 로그 두 개를 빼는 과정에서 부동소수점 오차가 1e-16 근처에 깔려 있는데 진짜 값이 그 아래에 있어요.

**선생님:** 그래서 ε은 1e-1, 1e-2, 1e-3 정도로 봐야 해요. 그 범위에서 다시 찍어 봐요.

**김민준:** 차이가 9.8e-4, 1.4e-6, 1.5e-9예요. ε을 열 배 줄이면 천 배 줄어요.

〔M09〕 **김민준:** 세제곱이다! 그래서 KL 자체는 제곱으로 줄고 두 방향 차이는 세제곱으로 주니까, 가까워질수록 비대칭이 상대적으로 사라지는 거예요.

**이서연:** 테일러 전개로도 맞아. 두 방향을 ε에 대해 전개하면 2차 항은 둘 다 ½Iε²으로 같고, 3차 항부터 부호가 달라.

〔T13〕 **선생님:** 둘 다 같은 결론에 다른 길로 왔네요. 민준 학생은 숫자가 거짓말하는 구간을 피해서, 서연 학생은 식을 끝까지 밀어서. 이 장에서 가져갈 건 세 가지예요. KL은 방향이 있다. KL은 거리보다 제곱 거리를 닮았다. 그리고 아주 가까이에서는 그 제곱 거리가 피셔 정보라는 행렬로 쓰인다.

**이서연:** 수학 수업에서 "노름에서 나온 거리"와 "내적에서 나온 제곱 노름"을 구분하라고 그렇게 강조했던 이유를 이제 알겠어요. 둘은 쓰임새가 다르고, 둘 다 필요해요.
`,I4=`# 길

거리를 재는 자는 하나가 아니다. 그렇다면 두 점 사이를 "걸어가는 방법"은 하나인가?

유클리드 공간이라면 답은 간단하다. 두 점 사이의 곧은 길은 하나다. 그런데 확률분포의 공간에는 곧은 길이 두 종류 있다. 같은 양 끝점을 잇는데, 전혀 다른 곳을 지나간다.

## 조합 규칙: 섞을 것인가, 곱할 것인가

모델 A와 모델 B가 있다. 둘 다 쓸 만하다. 합쳐서 더 좋은 모델을 만들 수 있을까?

방법 1 — **섞는다**(앙상블):
  "60%의 확률로 A의 예측을 따르고, 40%의 확률로 B를 따르자."
  두 모델이 공존한다. 어느 쪽도 사라지지 않는다.

방법 2 — **곱한다**(베이즈 갱신과 같은 식):
  "A가 가능하다고 한 곳과 B가 가능하다고 한 곳이 겹치는 데에 무게를 몰아주자."
  베이즈 갱신은 사전분포에 우도(likelihood: 관측된 데이터에 그 가정이 준 확률)를 통째로 곱하고 다시 정규화한다(합이 1이 되도록 전체를 같은 수로 나눈다).
  이 장의 곱셈은 그 곱에 거듭제곱으로 비율을 매긴 것이다. A를 (1−t)제곱, B를 t제곱해서 곱한다.
  두 모델이 함께 인정하는 곳이 살아남는다.

섞으면 OR. 곱하면 AND. 이 두 연산이 각각 자기만의 길을 만든다.

같은 두 끝점을 잇는 길이 왜 두 개인가? 두 모델을 합치는 방법이 두 가지이기 때문이다.

### 비유 — 빛과 필터

![빛을 섞는다 vs 물감을 섞는다](/images/chapters/ch04-light-paint-mixing.svg)

빛의 삼원색과 물감의 삼원색 — 같은 "색을 섞는다"인데, 두 가지 전혀 다른 규칙이 있다.

그런데 잠깐 — 왜 하필 색인가? 색은 파장별 밝기의 분포다. 빨간 빛은 긴 파장 쪽이 높은 분포, 파란 빛은 짧은 파장 쪽이 높은 분포. "색을 섞는다"는 곧 "분포를 섞는다"다.

방법 1 — 빛을 섞는다 (가산혼합, OR):
  빨강 빛과 초록 빛을 합치면 노랑.
  전부 합치면 흰색. 더할수록 밝아진다.
  각 파장의 밝기를 더한다. 물리적으로 덧셈.
  두 빛이 공존하는 세계 — 아무것도 사라지지 않는다.

방법 2 — 필터를 겹친다 (감산혼합, AND):
  노랑 셀로판과 시안 셀로판을 겹쳐 빛에 비추면 초록.
  물감이나 셀로판은 특정 파장을 흡수하는 필터다.
  두 필터를 겹치면 각 파장의 투과율이 곱해진다.
  0.8 × 0.3 = 0.24. 물리적으로 곱셈.
  두 필터가 모두 통과시키는 파장만 살아남는 세계.

같은 두 색에서 출발하는데, 합치는 규칙이 다르면 결과가 다르다. 빛은 더하고, 필터는 곱한다.

하나 조심할 것이 있다. 모니터의 RGB 값 (R, G, B)는 그대로는 확률분포가 아니다. 세 값의 합이 1이 아니고, 밝기가 섞여 있다. 세 값을 합으로 나눈 색도 좌표 (R, G, B) / (R + G + B)가 합이 1인 세 숫자, 곧 심플렉스(합이 1인 숫자들이 사는 삼각형) 위의 점이다. 색도 삼각형은 밝기를 빼고 "어떤 색인가"만 남긴 심플렉스다.

### 확률로의 번역

색이 파장별 밝기의 분포였듯, 확률분포는 사건별 가능성의 분포다. 구조가 같으니 섞는 규칙도 그대로 옮겨진다.

이 책에서 p는 현실, q는 모형이다. 이 장의 두 끝점은 현실도 모형도 아닌 그냥 두 분포이니, a와 b라고 부르자. 결과 i에 a는 a<sub>i</sub>, b는 b<sub>i</sub>의 확률을 준다. t는 0에서 1까지 움직이는 비율이다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#e0504a}{r}^{\\mathrm{m}}_t(i) &= (1-t)\\, a_i + t\\, b_i \\\\
\\textcolor{#3b7de0}{r}^{\\mathrm{e}}_t(i) &= \\frac{a_i^{\\,1-t}\\, b_i^{\\,t}}{\\textcolor{#7d8a3a}{Z}_t},
\\qquad \\textcolor{#7d8a3a}{Z}_t = \\sum_j a_j^{\\,1-t}\\, b_j^{\\,t}
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#e0504a}{r}^{\\mathrm{m}}_t & \\text{덧셈의 길 (혼합, mixture) 위의 분포} \\\\
\\textcolor{#3b7de0}{r}^{\\mathrm{e}}_t & \\text{곱셈의 길 (지수, exponential) 위의 분포} \\\\
\\textcolor{#7d8a3a}{Z}_t & \\text{정규화 상수: 곱한 값들의 합을 1로 맞추려고 나누는 수} \\\\
a,\\ b & \\text{두 끝점 분포, } a_i \\text{ 는 결과 } i \\text{ 의 확률} \\\\
t & \\text{보간 비율, } t = 0 \\text{ 이면 } a,\\ t = 1 \\text{ 이면 } b \\\\
i,\\ j & \\text{결과의 번호}
\\end{array}
\`\`\`

OR = 혼합(mixture): 두 분포의 가중평균. 덧셈.
  두 봉우리가 다 살아 있다 — 빛이 밝아지듯.
AND = 곱(product): 두 분포의 가중 기하평균을 다시 정규화. 곱셈.
  두 분포가 함께 인정하는 곳으로 무게가 모인다 — 필터가 겹치듯.

곱셈 쪽에는 Z가 붙는다. 확률을 곱하고 거듭제곱하면 합이 1에서 벗어나기 때문이다. Z가 늘 1 이하라는 것은 다음 절의 문제 1에서 보인다.

덧셈 쪽을 m-길, 곱셈 쪽을 e-길이라 부른다. m은 mixture, e는 exponential의 머리글자다. m-길은 이 책에서 붉은색, e-길은 푸른색으로 칠한다.

### m-길 — 덧셈으로 걷기

"공정한 동전과 기운 동전의 '사이'에 있는 동전은 뭔가?"

공정한 동전 (0.5, 0.5)와 앞면이 90% 나오는 동전 (0.9, 0.1)이 있다. 주머니에 두 동전을 넣고, 확률 t로 기운 동전을, 1 − t로 공정한 동전을 꺼내 던진다고 하자. 앞면이 나올 확률은 (1 − t) × 0.5 + t × 0.9다. t를 0에서 1로 밀면 이 확률은 0.5에서 0.9까지 고르게 움직인다.

칵테일 — 진토닉과 마티니의 비율을 1−t : t로 바꾸면 중간에 무한히 많은 음료가 있다. 두 원재료는 그대로, 비율만 변한다. 어느 잔에서도 진토닉 맛과 마티니 맛은 각자 살아 있다.

결과가 셋이면 분포는 색도 삼각형 같은 심플렉스 위의 점이다. m-길 위의 점은 두 끝점을 잇는 선분 위를 같은 빠르기로 걷는다. 각 칸(결과 하나하나)의 확률이 t에 대해 일차식이기 때문이다. 확률 자체가 좌표인 지도에서 이 길은 곧은 선이다.

### 파이썬

\`\`\`python
import numpy as np

a = np.array([0.5, 0.5])          # 공정한 동전 (앞, 뒤)
b = np.array([0.9, 0.1])          # 기운 동전

for t in [0, 0.25, 0.5, 0.75, 1]:
    m = (1 - t) * a + t * b       # 덧셈의 길 (혼합)
    print(f"t={t:.2f}  앞면 {m[0]:.2f}  뒷면 {m[1]:.2f}  합 {m.sum():.2f}")
# t=0.00  앞면 0.50  뒷면 0.50  합 1.00
# t=0.25  앞면 0.60  뒷면 0.40  합 1.00
# t=0.50  앞면 0.70  뒷면 0.30  합 1.00
# t=0.75  앞면 0.80  뒷면 0.20  합 1.00
# t=1.00  앞면 0.90  뒷면 0.10  합 1.00
\`\`\`

덧셈의 길은 정규화가 필요 없다. 합이 1인 것 둘을 가중평균하면 합은 저절로 1이다.

### 수확

"조합에는 두 규칙이 있다. OR과 AND. 이것이 두 개의 길을 만드는 뿌리다."

"확률을 더하면, 확률 좌표에서 곧은 길이 된다."

## e-길: 곱셈으로 걷기

"같은 두 점을 잇는 다른 길이 있다?" 곱셈의 길이다. 그런데 곱셈에는 골치 아픈 데가 있다.

0.1퍼센트의 확률을 100번 곱하면 10⁻³⁰⁰이다. 컴퓨터가 쓰는 64비트 실수가 표현할 수 있는 바닥(약 10⁻³⁰⁸) 바로 위다. 몇 번만 더 곱하면 0이 되어 버린다. 그런데 log를 씌우면 곱이 덧셈이 된다.
log(a · b) = log a + log b.
10⁻³⁰⁰은 −690.8이라는 평범한 숫자가 된다. 곱셈의 세계에서 일어나는 일을 덧셈의 언어로 읽어주는 통역사 — 그것이 log다. 이 장의 두 번째 길은 이 통역사 위에 서 있다.

### 비유 — 리히터 규모와 데시벨

리히터 규모와 데시벨 —
  지진의 규모가 1 오르면 지진계에 찍히는 흔들림의 폭은 10배,
  풀려나는 에너지는 약 32배(10<sup>1.5</sup> ≈ 31.6) 커진다.
  소리의 에너지는 10배씩 커지는데, 데시벨은 10씩 올라간다.
  pH도 마찬가지. 수소이온 농도는 10배씩 변하는데
  pH는 1씩 변한다.
  이것들은 전부 같은 장치 — log.
  "곱으로 커지는 세계를 더하기로 느끼게 해주는 렌즈."

### 비유 — 겹친 슬라이드 필름

두 장의 슬라이드 필름을 겹쳐 비추기 — 필름 한 장은 자리마다 빛을 일정 비율만 통과시킨다. 두 장을 겹치면 자리마다 통과율이 곱해진다. 한쪽 필름이 어두운 자리는, 다른 필름이 아무리 밝아도 어둡다. 사진사들은 통과율 대신 농도(통과율의 −log)를 쓴다. 겹친 필름의 농도는 두 농도의 합이기 때문이다. 곱셈의 길은 "농도를 1−t : t로 섞은 필름"이다.

### 로그 좌표의 직선

곱셈의 길에 log를 씌우면

log r<sup>e</sup><sub>t</sub>(i) = (1 − t) log a<sub>i</sub> + t log b<sub>i</sub> − log Z<sub>t</sub>

가 된다. 앞의 두 항은 t에 대해 일차식이다. 걸리는 것은 −log Z<sub>t</sub> 하나다. 이 항은 모든 칸에 똑같이 붙는다. 그래서 두 칸의 로그 비를 좌표로 쓰면 Z가 사라진다. 결과가 n개일 때 마지막 칸을 기준으로 이렇게 잰다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#3b7de0}{\\theta}_i &= \\log \\frac{r_i}{r_n} \\\\
\\textcolor{#3b7de0}{\\theta}_i\\big(\\textcolor{#3b7de0}{r}^{\\mathrm{e}}_t\\big) &= (1-t)\\,\\textcolor{#3b7de0}{\\theta}_i(a) + t\\,\\textcolor{#3b7de0}{\\theta}_i(b)
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#3b7de0}{\\theta}_i & \\text{로그 비 좌표 (자연모수), } i = 1, \\dots, n-1 \\\\
\\textcolor{#3b7de0}{r}^{\\mathrm{e}}_t & \\text{곱셈의 길 위의 분포} \\\\
r_i & \\text{아무 분포의 결과 } i \\text{ 확률} \\\\
a,\\ b & \\text{두 끝점 분포} \\\\
t & \\text{보간 비율} \\\\
n & \\text{결과의 개수}
\\end{array}
\`\`\`

"로그 공간의 직선"이란 정확히 이 뜻이다. log p 자체가 아니라 로그 비 θ의 좌표에서 곧다. 정규화 상수 Z가 비를 잴 때 약분되어 나가기 때문이다. 확률 좌표에서는 휘어 보이던 길이, 이 좌표에서는 곧은 선이 된다. 이 좌표 θ를 자연모수(natural parameter)라 부른다. 모수는 분포를 정하는 숫자이고, '자연'은 곱셈의 길이 곧게 보이는 좌표라는 뜻이다.

{{viz: ch04/two-paths}}

### 파이썬

\`\`\`python
import numpy as np

a = np.array([0.6, 0.3, 0.1])
b = np.array([0.1, 0.2, 0.7])

def e_path(a, b, t):
    r = a**(1 - t) * b**t              # 가중 기하평균 (정규화 전)
    Z = r.sum()                        # 정규화 상수
    return r / Z, Z

def theta(p):                          # θ_i = log(p_i / p_n), 마지막 칸 기준
    return np.log(p[:-1] / p[-1])

for t in [0, 0.25, 0.5, 0.75, 1]:
    e, Z = e_path(a, b, t)
    straight = (1 - t) * theta(a) + t * theta(b)
    print(f"t={t:.2f}  e_t={np.round(e, 3)}  Z={Z:.3f}  θ(e_t)={np.round(theta(e), 3)}"
          f"  직선과 같은가? {np.allclose(theta(e), straight)}")
# t=0.00  e_t=[0.6 0.3 0.1]  Z=1.000  θ(e_t)=[1.792 1.099]  직선과 같은가? True
# t=0.25  e_t=[0.469 0.332 0.199]  Z=0.817  θ(e_t)=[0.857 0.511]  직선과 같은가? True
# t=0.50  e_t=[0.325 0.325 0.351]  Z=0.754  θ(e_t)=[-0.077 -0.077]  직선과 같은가? True
# t=0.75  e_t=[0.194 0.274 0.532]  Z=0.808  θ(e_t)=[-1.011 -0.665]  직선과 같은가? True
# t=1.00  e_t=[0.1 0.2 0.7]  Z=1.000  θ(e_t)=[-1.946 -1.253]  직선과 같은가? True
\`\`\`

같은 a, b의 m-중간점은 (0.35, 0.25, 0.4)다. e-중간점 (0.325, 0.325, 0.351)과 다르다. Z는 양 끝에서 1이고 가운데에서 가장 작다.

### 수확

"곱셈을 덧셈으로 바꾸는 렌즈가 있다. 그것이 log다. 곱셈의 길은 로그 비 좌표 θ에서 곧은 길이다."

### 문제 1. 4와 16, 그리고 Z

(가) 4와 16의 산술평균과 기하평균을 구하고, 양수 u, v에 대해 가중 산술-기하 부등식(무게를 준 기하평균 ≤ 무게를 준 산술평균) u<sup>1−t</sup>v<sup>t</sup> ≤ (1−t)u + tv (0 ≤ t ≤ 1)를 받아들이자. (나) 이 부등식으로 곱셈의 길의 정규화 상수 Z<sub>t</sub> = Σ a<sub>i</sub><sup>1−t</sup> b<sub>i</sub><sup>t</sup> 가 모든 t에서 1 이하임을 보여라. 등호는 언제 성립하는가? (다) a = (0.6, 0.3, 0.1), b = (0.1, 0.2, 0.7)에서 Z<sub>0.5</sub>를 구하라.

#### 함께 풀기

**이서연:** (가)는 10이랑 8이에요. (다)는 √(0.6·0.1) + √(0.3·0.2) + √(0.1·0.7)이니까 0.245 + 0.245 + 0.265, 합이 0.754예요.

**선생님:** 그럼 e-중간점은 뭐예요?

**이서연:** (0.245, 0.245, 0.265)요. 기하평균 그대로요.

**김민준:** 서연아, 그거 더하면 0.754잖아. 확률이 아니야.

〔S04〕 **이서연:** …아. 기하평균은 한 칸씩 계산하니까 칸들끼리 합을 맞춰 줄 장치가 없네요. Z로 나눠야 (0.325, 0.325, 0.351)이 돼요.

**선생님:** 그래요. 산술평균은 합이 1인 것끼리 섞으면 합이 저절로 1인데, 기하평균은 아니에요. (나)는요?

**김민준:** 저 이미 확인했어요. 랜덤 분포 쌍 천 개를 뽑아서 t = 0.5로 Z를 쟀는데 전부 1 이하였어요.

**선생님:** t = 0.3이면요?

**김민준:** …안 돌려 봤어요. 0.5만 넣었어요.

**이서연:** 칸마다 부등식을 쓰면 돼요. a<sub>i</sub><sup>1−t</sup>b<sub>i</sub><sup>t</sup> ≤ (1−t)a<sub>i</sub> + t b<sub>i</sub>. 이걸 i에 대해 다 더하면 오른쪽은 (1−t)·1 + t·1 = 1이에요. t가 뭐든 상관없어요.

**선생님:** 등호는요?

**이서연:** 가중 산술-기하 부등식은 두 수가 같을 때만 등호니까, 모든 칸에서 a<sub>i</sub> = b<sub>i</sub>, 곧 a = b일 때만요. 끝점 t = 0, 1은 빼고요.

〔M07〕 **김민준:** 그러니까 Z가 1보다 작다는 건 두 분포가 다르다는 신호고, 얼마나 작은지가 얼마나 다른지네요. 천 개 뽑아서 확인한 건 t = 0.5 하나에 대한 증거였고요.

**김민준:** 조교님이 과제 채점할 때 "예시 입력 하나 통과했다고 다 맞은 거 아니다"라고 하던 거랑 같네요. 이번엔 t라는 입력 하나만 넣은 셈이에요.

**선생님:** 그래요. 증명은 모든 t를 한 번에 다뤄요. 서연 학생은 부등식을 칸마다 쓰고 더했죠. 그게 기하평균에서 분포로 넘어가는 다리예요.

### 문제 2. 가우시안 두 개의 곱셈 길

a = N(0, 1²), b = N(4, 2²)라 하자. (가) 곱셈의 길 위의 분포 r<sup>e</sup><sub>t</sub> ∝ a<sup>1−t</sup>b<sup>t</sup> 가 다시 정규분포임을 보이고, 평균과 분산을 t로 써라. (나) t = 0.5에서 평균과 표준편차를 구하라.

#### 함께 풀기

**이서연:** 곱하면 지수끼리 더해지니까 x에 대한 이차식이 나와요. 이차식의 지수니까 정규분포 맞아요. (나)는 평균이 (1−t)·0 + t·4 = 2, 표준편차가 (1−t)·1 + t·2 = 1.5요.

**김민준:** 나는 다르게 나왔어. 1 간격 격자에 올려서 계산했더니 평균 0.800, 표준편차 1.265야. 근데 막대그래프가 울퉁불퉁해서 정규분포 같지도 않아. 격자를 촘촘히 하면 서연이 값으로 가지 않을까?

**선생님:** 두 사람 다 한 가지씩 확인해 봐요. 민준 학생, 격자에서 log e<sub>i</sub>의 2차 차분(이웃 칸끼리 차이의 차이)을 찍어 봐요.

〔M06〕 **김민준:** −0.625, −0.625, −0.625… 전부 똑같아요. 2차 차분이 상수면 log가 정확히 이차식이란 거고, 그럼 격자 위에서도 정확히 가우시안 모양이네요. 울퉁불퉁한 건 칸이 성긴 거지 모양이 틀린 게 아니었어요.

**선생님:** 그래요. 격자를 촘촘히 해도 평균 0.8, 표준편차 1.265에서 안 움직여요. 그럼 서연 학생의 2와 1.5는 어디서 틀렸을까요?

〔S05〕 **이서연:** 제가 지수를 대충 봤어요. 다시 써 볼게요. log a<sup>1−t</sup>b<sup>t</sup> = −(1−t)x²/2 − t(x−4)²/8 + 상수. x²의 계수가 −½[(1−t)/1 + t/4]예요.

〔S08〕 **이서연:** 그러니까 선형으로 보간되는 건 σ가 아니라 1/σ², 분산의 역수인 정밀도(precision)예요. 분류의 정밀도와는 다른 말이에요. 1/σ<sub>t</sub>² = (1−t)/σ<sub>a</sub>² + t/σ<sub>b</sub>². t = 0.5면 0.625, σ = 1.265. 평균도 정밀도로 가중해서 (0.5·0.25·4)/0.625 = 0.8이에요.

**선생님:** 맞아요. 곱셈의 길에서 곧게 움직이는 건 로그 밀도의 계수들이에요. 정규분포라면 μ/σ²와 1/σ²이죠. 이 둘을 정규분포의 자연모수 θ라 불러요.

**이서연:** 선형대수에서 "기저를 바꾸면 선형 결합의 계수가 바뀐다"던 게 이거네요. σ 좌표에서 보간하는 거랑 1/σ² 좌표에서 보간하는 건 다른 길이에요.

**김민준:** 확신이 강한 쪽, 폭이 좁은 a 쪽으로 평균이 끌려가는 것도 말이 되네요. 조별 과제에서 확실히 아는 사람 의견이 더 세게 반영되는 거랑 같아요.

### 문제 3. 리히터 규모의 두 렌즈

규모 5 지진과 규모 7 지진이 있다. (가) 지진계에 찍히는 흔들림의 폭(진폭)은 몇 배 차이인가? (나) 풀려나는 에너지는 몇 배 차이인가? 규모가 1 오를 때 에너지는 10<sup>1.5</sup>배라고 하자. (다) 진폭과 에너지를 모두 log로 재면 두 눈금은 어떤 관계인가?

#### 함께 풀기

**이서연:** 규모가 2 차이니까 10² = 100배요. 진폭도 에너지도 100배요.

**김민준:** (나)에 10<sup>1.5</sup>라고 써 있잖아. 에너지는 10<sup>1.5×2</sup> = 10³, 천 배야.

**이서연:** 아, 진폭과 에너지를 같은 양으로 봤어요. 규모는 진폭의 로그로 정의한 눈금이라서, 에너지는 다른 기울기로 따라와요.

**선생님:** 그럼 (다)는요? log 진폭과 log 에너지는 어떤 관계예요?

**이서연:** log E = 1.5 log A + 상수요. 로그를 씌운 두 눈금이 상수배만큼 기울기가 달라요. 에너지가 진폭의 1.5제곱에 비례하는 셈이고요.

**김민준:** 둘 다 "곱을 덧셈으로" 바꾸는 렌즈인데, 렌즈마다 눈금 간격이 다르네요.

**선생님:** 그래요. 로그는 밑을 바꿔도 상수배만 달라져요. 정보량을 잴 때 쓰는 bit(밑 2 로그)와 nat(자연로그)도 바로 그 상수배의 차이예요.

**이서연:** 해석학 시간에 로그 눈금 그래프에서 기울기가 거듭제곱의 지수라고 배웠는데, 이게 그 기울기 1.5였네요.

## 중간점: 두 길은 다른 곳을 지나간다

"두 길의 중간점은 각각 뭘 의미하는가?"

### 비유 — 산술평균과 기하평균

산술평균과 기하평균 — 4와 16의 산술평균은 10, 기하평균은 √(4 × 16) = 8. 같은 "가운데"인데 다르다. 기하평균은 언제나 산술평균 이하다. 이 부등식이 곱셈의 길에 Z가 필요한 이유다(앞 절의 문제 1).

### 봉우리 두 개

차이를 가장 잘 보여 주는 무대는 칸이 많은 분포다. 한 줄로 늘어선 49칸 위에 봉우리를 하나씩 가진 두 분포를 놓는다. a는 −2 근처에, b는 +2 근처에 봉우리가 있다. 폭은 둘 다 1이다.

m-중간점(덧셈의 중간)은 두 봉우리가 다 살아 있다.
  "왼쪽일 수도 있고 오른쪽일 수도 있다" — OR.
e-중간점(곱셈의 중간)은 봉우리가 하나다. 자리는 0, 폭은 그대로 1이다.
  a와 b가 둘 다 "있을 만하다"고 인정하는 곳은 두 봉우리 사이의 가운데뿐이다.
  "개이면서 동시에 고양이처럼 보이는 것만 남는다" — AND.

그런데 정규화 상수 Z<sub>1/2</sub>는 0.135다. 기하평균을 낸 값을 다 더해도 0.135밖에 안 된다는 뜻이다. 두 분포가 함께 인정하는 영역이 원래 좁았다. 곱셈은 그 좁은 영역을 7배 넘게 부풀려 한 분포로 만든다. Z는 두 분포가 얼마나 겹치는지 재는 숫자이기도 하다. 두 분포가 같으면 1, 겹치는 곳이 없으면 0이다.

{{viz: ch04/midpoint}}

한 가지 조심할 것이 있다. "e-중간점은 언제나 m-중간점보다 뾰족하다"는 봉우리 두 개인 이 무대에서만 맞다. 결과가 셋뿐인 분포에서는 자주 뒤집힌다. 앞 절의 a, b가 그렇다. 엔트로피(분포가 얼마나 고르게 퍼졌는지 재는 값, −Σ p log p)가 m-중간점은 1.081, e-중간점은 1.098이다. e-중간점이 더 평평하다. 어느 쪽이 더 퍼지는지는 곱셈이 어느 칸을 깎느냐에 달렸다. 아래 문제 4에서 끝까지 따라간다.

### 직선이 두 개라는 것

유클리드 공간이라면 두 점 사이의 곧은 길은 하나뿐이다. 그랬다면 정보기하학은 필요 없었을 것이다.

곧은 길이 두 개라는 것이 곧 공간이 휘었다는 뜻은 아니다. 심플렉스는 확률 좌표에서 보면 평평하다. m-길이 곧은 선이다. 로그 비 좌표 θ에서 보아도 평평하다. e-길이 곧은 선이다. 두 눈 각각에게 평평한 공간, 이것을 쌍대평탄(dually flat)이라 부른다. 직선이 두 개라는 건 "무엇을 곧다고 부를지" 정하는 규칙이 두 개라는 신호다. 이 규칙을 접속(connection)이라 부른다.

거리를 재는 자는 여전히 하나다. 피셔 정보(분포를 조금 움직였을 때 확률이 얼마나 민감하게 바뀌는지 재는 양)가 만드는, 어느 쪽에서 재든 값이 같은 대칭인 자다. 그 자로 잰 최단 경로는 m-길도 e-길도 아닌 세 번째 길이다. e-길과 m-길은 "가장 짧은 길"이 아니라 각자의 규칙에서 "방향을 바꾸지 않고 곧게 가는 길"이다.

### 파이썬

\`\`\`python
import numpy as np

x = np.linspace(-6, 6, 49)                     # 한 줄로 늘어선 49칸

def bump(mu, s):                               # 칸 위의 가우시안 봉우리
    r = np.exp(-(x - mu)**2 / (2 * s**2))
    return r / r.sum()

def H(p):
    return -np.sum(p * np.log(p))

a, b = bump(-2, 1), bump(2, 1)
m = 0.5 * a + 0.5 * b                          # m-중간점 (산술평균)
r = np.sqrt(a * b); Z = r.sum(); e = r / Z     # e-중간점 (기하평균 / Z)

print(f"끝점 엔트로피  H(a)={H(a):.3f}  H(b)={H(b):.3f}")
print(f"m-중간점       H={H(m):.3f}   봉우리 위치 {x[np.argmax(m)]:+.1f}")
print(f"e-중간점       H={H(e):.3f}   평균 {np.round(np.sum(x * e), 6) + 0.0:+.2f}  표준편차 {np.sqrt(np.sum(x**2 * e)):.2f}")
print(f"Z = {Z:.4f}   exp(-2) = {np.exp(-2):.4f}")
# 끝점 엔트로피  H(a)=2.805  H(b)=2.805
# m-중간점       H=3.438   봉우리 위치 -2.0
# e-중간점       H=2.805   평균 +0.00  표준편차 1.00
# Z = 0.1353   exp(-2) = 0.1353
\`\`\`

e-중간점은 끝점과 같은 모양의 봉우리를 가운데로 옮긴 것이다. 엔트로피도 끝점과 같다. m-중간점은 봉우리 둘을 품느라 엔트로피가 0.63 더 크다. Z = e⁻² 는 우연이 아니다. 폭이 σ로 같고 중심이 Δμ만큼 떨어진 두 가우시안이면 Z<sub>1/2</sub> = exp(−Δμ² / 8σ²)이다.

### 수확

"산술평균은 혼합(앙상블)의 씨앗이고, 기하평균은 곱셈(베이즈 갱신)의 씨앗이다. 곧은 길이 둘인 것은 공간이 휘어서가 아니라, 곧음의 규칙이 둘이기 때문이다."

### 문제 4. e-중간점은 언제 더 평평한가 (킬러)

결과가 셋인 두 분포 a, b와 t = ½의 두 중간점 m = (a + b)/2, e ∝ √(a·b)를 생각한다. (가) a = (0.6, 0.3, 0.1), b = (0.1, 0.2, 0.7)에서 H(m)과 H(e)를 비교하라. (나) 심플렉스에서 고르게 뽑은 쌍 가운데 H(e) > H(m)인 쌍의 비율을 추정하라. (다) 다음 항등식을 증명하고, 역전이 일어나기 위한 필요조건을 말하라.
H(e) − H(m) = −(E<sub>e</sub>[log m] − E<sub>m</sub>[log m]) − KL(e‖m)
여기서 KL(e‖m) = Σ e log(e/m)은 e와 m이 얼마나 다른지 재는 KL 발산이다. (라) 봉우리 하나짜리 가우시안 두 개라면 왜 역전이 없는가?

#### 함께 풀기

**김민준:** (가)는 H(m) = 1.081, H(e) = 1.098이에요. 뒤집혔어요. 그런데 이건 운 나쁜 예외 같아요. 시드 0으로 랜덤 쌍 열 개를 뽑았는데 열 개 전부 H(e)가 더 작았거든요. 그러니까 "거의 항상" e-중간점이 더 뾰족하다고 봐도 될 것 같아요.

〔S05〕 **이서연:** 저는 반대로 증명을 해 보려고 했어요. 엔트로피는 오목함수니까 H(m) ≥ ½H(a) + ½H(b)가 성립해요. 그런데 거기서 H(e)로 넘어가는 다리가 안 놓여요.

**선생님:** 서연 학생의 부등식은 m을 누구와 비교하고 있어요?

**이서연:** a와 b의 엔트로피 평균이요. e는 아예 안 나와요. 오목성은 "섞으면 퍼진다"만 말해 줘요. 곱셈 쪽에 대해선 아무 말도 안 하네요.

**선생님:** 민준 학생, 열 개로 "거의 항상"을 말하려면 역전이 몇 % 이하여야 할까요?

**김민준:** 역전 비율이 18%만 돼도 열 개 연속으로 안 나올 확률이 0.82¹⁰ ≈ 0.14니까… 열 개로는 못 가르네요. 백만 쌍으로 다시 돌릴게요.

〔M05〕 **김민준:** 0.182예요. 다섯 쌍에 한 쌍 가까이 뒤집혀요. 예외가 아니에요.

**선생님:** 그럼 어떤 쌍이 뒤집히는지 봐야겠죠. e를 m으로 표현해 봐요. a = m + d, b = m − d로 두면요?

**이서연:** √(ab) = √(m² − d²) = m·√(1 − (d/m)²)예요. 그러니까 e<sub>i</sub>는 m<sub>i</sub>에 s<sub>i</sub> = √(1 − (d<sub>i</sub>/m<sub>i</sub>)²)를 곱하고 다시 정규화한 거예요. 두 분포가 크게 어긋나는 칸일수록 s가 작아서 많이 깎여요.

**선생님:** 좋아요. e가 m을 칸마다 다시 가중한 분포라는 것만 쓰면 (다)가 나와요.

**이서연:** H(e) = −Σ e log e이고, log e = log m + log(e/m)이니까 H(e) = −E<sub>e</sub>[log m] − Σ e log(e/m) = −E<sub>e</sub>[log m] − KL(e‖m)이요. 여기서 H(m) = −E<sub>m</sub>[log m]을 빼면 항등식이에요. a, b와도 상관없이 성립하네요.

〔S09〕 **이서연:** KL(e‖m) ≥ 0이니까, H(e)가 H(m)보다 크려면 첫째 항이 양수여야 해요. E<sub>e</sub>[log m] < E<sub>m</sub>[log m]. e가 m 기준으로 "확률이 작은 칸" 쪽으로 무게를 옮겨야 해요. 그러려면 깎이는 칸이 원래 큰 칸이어야 하고요.

**김민준:** (가)에서 보면 s가 (0.70, 0.98, 0.66)이에요. m = (0.35, 0.25, 0.4)에서 큰 두 칸, 1번과 3번이 깎이고 제일 작은 2번 칸은 거의 안 깎여요. 그러니 평평해진 거네요. 백만 쌍에서도 역전인데 첫째 항이 음수가 아닌 쌍은 0개예요.

**선생님:** 필요조건이지 충분조건은 아니에요. 첫째 항이 양수여도 KL(e‖m)이 더 크면 역전이 안 일어나요. 그럼 (라)는요?

〔M08〕 **김민준:** 봉우리 두 개 무대에서는 가운데 칸이 m에선 작은데, 거기가 두 분포가 제일 잘 맞는 곳이라 안 깎여요. 대신 두 봉우리 바깥 꼬리는 한쪽만 있어서 거의 다 깎이고요. 필요조건만으론 이게 어느 쪽으로 갈지 딱 안 나오네요.

**이서연:** 가우시안이면 식으로 끝낼 수 있어요. 문제 2에서 1/σ<sub>e</sub>² = ½(1/σ<sub>a</sub>² + 1/σ<sub>b</sub>²)였으니 σ<sub>e</sub>²는 σ<sub>a</sub>²과 σ<sub>b</sub>²의 조화평균이에요. 조화평균 ≤ 기하평균이라 σ<sub>e</sub> ≤ √(σ<sub>a</sub>σ<sub>b</sub>), 그래서 H(e) ≤ ½H(a) + ½H(b)예요. 오른쪽은 제가 처음 쓴 오목성 부등식으로 H(m) 이하고요.

〔S10〕 **이서연:** 처음에 막혔던 다리가 가우시안에서만 놓이는 거예요. 곱셈이 가우시안 모양을 보존해 주니까요. 칸이 셋뿐이면 그런 보장이 없어요.

〔T13〕 **선생님:** 그래요. "e-중간점은 겹치는 부분만 남아서 뾰족하다"는 그림은 봉우리가 뚜렷한 분포의 이야기예요. 일반적으로 곱셈이 하는 일은 "두 분포가 어긋나는 칸을 깎는다"이고, 그 칸이 큰 칸이면 오히려 평평해져요. 민준 학생은 표본을 늘려 반례의 크기를 쟀고, 서연 학생은 항등식으로 어디가 깎이는지 봤어요.

**김민준:** 기말 성적을 두 교수님 채점의 기하평균으로 매긴다고 생각하면 되겠네요. 두 분 점수가 크게 갈리는 학생만 깎이는데, 그게 상위권이면 반 전체 점수가 오히려 고르게 돼요.

**이서연:** 해석학에서 "반례 하나로 명제는 죽지만 반례가 어디 사는지 알아야 명제를 고칠 수 있다"던 말이 이거였어요.

## 호기심 상자: 색공간에서 보는 세 개의 "중간"

첫 절에서 우리는 빛(덧셈)과 필터(곱셈)를 보았다. 그런데 질문이 하나 더 있다. 색을 표현하는 좌표계도 하나가 아니다.

### 두 좌표계

RGB — 빨강, 초록, 파랑의 밝기.
  컴퓨터 모니터가 쓰는 좌표.
  (255, 0, 0)은 빨강, (0, 255, 0)은 초록.
HSV — 색상(Hue), 채도(Saturation), 명도(Value).
  화가가 쓰는 좌표.
  "빨간색을 좀 탁하게" = 채도를 낮추는 것.

같은 색이다. 그런데 주소가 다르다. 서울시 강남구 역삼동 123 = 37.5°N, 127.0°E.

하나 더. 모니터의 0~255 값은 빛의 밝기 그대로가 아니다. 사람 눈에 맞추느라 한 번 구부려(감마 보정) 저장한 값이다. 빛을 더하거나 필터를 곱하는 물리 계산은 구부림을 편 "선형 RGB"에서 해야 한다.

### 세 개의 보간

같은 양 끝 색 두 개를 고르고, 세 가지 방법으로 중간색을 만든다.

① 덧셈 — 선형 RGB에서 직선 보간. 두 빛을 섞는 것.
  (1−t)·RGB₁ + t·RGB₂
② 곱셈 — 선형 RGB에서 채널별 가중 기하평균. 필터를 겹치는 것.
  RGB₁^(1−t) · RGB₂^t
③ HSV 덧셈 — HSV 좌표에서 직선 보간.
  색상(Hue)은 원형이라 짧은 호를 따라 돈다.

HSV에는 곱셈이 없다. 색상은 각도라서 "각도의 기하평균"은 뜻이 없기 때문이다. 연산은 그것이 뜻을 갖는 좌표에서만 쓸 수 있다. log가 양수에만 쓰이는 것과 같은 이야기다.

세 경로의 중간색이 다르다. 노랑 ↔ 시안: 덧셈은 연한 초록 (188, 255, 188), 곱셈은 순수한 초록 (0, 255, 0).
  노랑과 시안이 둘 다 가진 채널은 초록뿐이다. 곱셈은 공통 채널만 남긴다. AND 그대로다.
빨강 ↔ 초록: 덧셈은 탁한 황토색, HSV 덧셈은 밝은 노랑을 거친다. 곱셈은 한가운데서 검정이 된다.
  둘이 함께 가진 채널이 하나도 없으니 살아남는 것이 없다.
빨강 ↔ 파랑: 덧셈도 HSV 덧셈도 보라를 거친다. HSV 쪽이 더 밝고 선명한 자홍이다.

{{viz: ch04/color-interpolation}}

### 파이썬

\`\`\`python
import numpy as np

def to_linear(c):     # sRGB(0~255) → 빛의 밝기(선형 RGB, 0~1)
    c = np.asarray(c) / 255
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)

def to_srgb(l):       # 선형 RGB → sRGB(0~255)
    s = np.where(l <= 0.0031308, 12.92 * l, 1.055 * l ** (1 / 2.4) - 0.055)
    return np.round(s * 255).astype(int)

pairs = {"노랑↔시안": ([255, 255, 0], [0, 255, 255]),
         "빨강↔초록": ([255, 0, 0], [0, 255, 0]),
         "빨강↔파랑": ([255, 0, 0], [0, 0, 255])}

for name, (c1, c2) in pairs.items():
    l1, l2 = to_linear(c1), to_linear(c2)
    add = to_srgb(0.5 * l1 + 0.5 * l2)          # 덧셈: 두 빛을 반씩
    mul = to_srgb(np.sqrt(l1 * l2))             # 곱셈: 채널별 기하평균
    naive = np.round(0.5 * np.array(c1) + 0.5 * np.array(c2)).astype(int)  # 감마 값을 그대로 평균
    print(f"{name}  덧셈 {add}  곱셈 {mul}  (감마 값 그대로 평균 {naive})")
# 노랑↔시안  덧셈 [188 255 188]  곱셈 [  0 255   0]  (감마 값 그대로 평균 [128 255 128])
# 빨강↔초록  덧셈 [188 188   0]  곱셈 [0 0 0]  (감마 값 그대로 평균 [128 128   0])
# 빨강↔파랑  덧셈 [188   0 188]  곱셈 [0 0 0]  (감마 값 그대로 평균 [128   0 128])
\`\`\`

감마 값을 그대로 평균하면 (128, 128, 0), 칙칙한 갈색에 가까운 올리브가 나온다. 빛을 제대로 섞으면 (188, 188, 0)으로 더 밝다. 좌표계를 잘못 고르면 같은 "덧셈"도 다른 색을 낸다.

### 이것이 왜 중요한가

"같은 두 점 사이의 '중간'이 좌표계에 따라 다르고, 연산에 따라 다르다." 이 장에서 우리는 연산이 다르면 중간이 다르다는 것을 보았다. 여기서 한 층 더: 좌표계가 달라도 중간이 다르다. 좌표계 × 연산 = 기하학. 앞에서 확률 좌표의 직선(m-길)과 로그 비 좌표의 직선(e-길)이 다른 곳을 지나간 것도 같은 이야기다.

### 수확

"연산 × 좌표계 — 이 두 선택이 '곧은 길'을 결정한다."

---

> ### 인물 이야기 — Amari Shun-ichi와 "두 개의 접속"
>
> ![Amari Shun-ichi](/images/portraits/amari.jpg)
>
> 1958년 무렵, 도쿄 대학. 수리공학 석사과정의 아마리 슌이치(甘利俊一)는 통계 세미나에서 Kullback의 정보와 통계에 관한 책을 읽고 있었다. 모리구치 시게이치 교수가 한 가지를 귀띔했다. 분포들의 공간에 피셔 정보로 리만 계량(곳마다 작은 걸음의 길이를 재는 규칙)을 줄 수 있다는 것. Rao가 1945년에 제안한 생각이었다.
>
> 젊은 Amari는 정규분포 N(μ, σ²)의 공간에서 그 계량을 계산해 보았다. 곡률이 어디서나 같은 음수였다. 푸앵카레 반평면, 쌍곡기하의 교과서적인 모형이 정규분포 안에 숨어 있었다. 아름다운 구조였다. 그런데 통계에서 무슨 뜻인지는 알 수 없었다. Amari는 이 물음을 접어 두고 네트워크의 연결 구조(위상, topology), 재료 속 결함의 기하학, 신경망과 학습 이론으로 옮겨 갔다.
>
> 물음을 다시 연 것은 1975년 Bradley Efron의 논문이었다. Efron은 "통계적 곡률"(모형 가족이 지수족에서 얼마나 휘어져 벗어났는지 재는 양)을 정의하고, 추정이 얼마나 어려운지가 그 곡률과 관련된다는 것을 보였다. 같은 학술지 호에 함께 실린 토론에서 A. P. Dawid는 Efron이 암묵적으로 쓴 "곧음의 규칙"이 리만 계량이 주는 것과 다른 접속이라는 점을 짚었다. 지수(exponential) 접속이었다. Dawid는 그 짝으로 혼합(mixture) 접속도 제시했다.
>
> Amari는 이 논문과 토론에 자극받아 연구를 재개했다. 그리고 두 접속을 잇는 한 가족을 세웠다. α라는 숫자 하나로 매겨지는 α-접속이다. α = 1이 e-접속, α = −1이 m-접속, α = 0이 계량 자신의 접속(레비-치비타)이다. α와 −α는 서로 쌍대(dual)인 짝이다. 이 장에서 본 "곱셈의 길"과 "덧셈의 길"이 바로 α = ±1, 평탄한 특별한 짝이 만드는 곧은 길이다.
>
> 뒤에 Amari는 소련의 N. N. Chentsov가 1972년 책에서 같은 가족에 이미 도달했음을 알게 되었다. Chentsov는 충분통계량(데이터에서 모수에 관한 정보를 빠짐없이 담은 요약값)을 바꿔도 변하지 않는 "자연스러운" 계량과 접속을 모두 찾았다. 계량은 피셔 정보 하나(상수배 제외), 접속은 α-가족이었다.
>
> 결정적인 정리는 1982년에 왔다. Amari는 곡지수족(지수족, 곧 log p가 자연모수의 일차식에서 정규화 항을 뺀 꼴인 분포 모임 안에 휘어져 들어앉은 작은 가족)의 곡률과 정보 손실에 관한 논문을 *Annals of Statistics*에 실었고, 제자 나가오카 히로시와 함께 쌍대 접속과 피타고라스 정리를 정리했다. 이 작업은 1985년 저서 *Differential-Geometrical Methods in Statistics*로 결정화되었다. 이 책이 "정보기하학(information geometry)"이라는 분야에 체계를 준 것이다. 1998년 Amari는 이 기하학을 신경망 학습으로 되가져와 자연 기울기(natural gradient)를 내놓는다. 석사과정 때 접어 둔 물음이 반세기에 걸쳐 확률, 기하학, 학습을 관통하는 이론이 되었다.
`,B4=`# 같은 세계, 다른 눈

---

여기까지 우리는 확률분포의 공간을 걸어다녔다.

점이 있었다. 분포 하나가 삼각형 위의 점 하나였다. 자가 있었다. 같은 두 점인데 어느 쪽에서 재느냐에 따라 값이 달랐다. 그래서 그 자를 거리가 아니라 발산이라 불렀다. 길이 두 개 있었다. 같은 양 끝점을 잇는데, 하나는 더하면서 걷고, 하나는 곱하면서 걸었다.

그런데 이 공간의 높낮이를 아직 모른다.

어디가 높고 어디가 낮은지. 왜 어떤 분포가 다른 분포보다 특별한지. 심플렉스(분포들이 사는 그 삼각형)의 한가운데가 왜 꼭짓점과 다른지. 균등분포가 뭔가 "많아" 보이는 이유가 뭔지.

그 높낮이를 읽으려면 새로운 눈이 필요하다.

기하학의 눈은 공간과 길을 보았다. 이제 열리는 눈은 그 위에 새겨진 숫자를 읽는다. 놀라움이라는 숫자. 정보라는 숫자.

완전히 다른 출발점에서 시작한다. 기하학 편에서 쌓은 도구를 잠시 내려놓자. 이제 던질 첫 질문은 기하학과 무관한, 독립적인 질문이다.

"예상 밖의 일이 일어났을 때, 그 놀라움을 숫자로 쓸 수 있는가?"

---
`,P4=`# 놀라움과 정보

KL 발산이라는 "비대칭 거리"가 있다. 현실 p와 모형 q에 대해 KL(p‖q) = Σ p<sub>i</sub> log(p<sub>i</sub>/q<sub>i</sub>)는 숫자를 내뱉는다. 그런데 그 숫자가 정확히 무엇을 재는가? KL의 수식 안에는 log가 들어 있다. 왜 하필 log인가? 왜 KL은 늘 0 이상인가? 답은 "놀라움"이라는 개념에서 시작한다.

## 놀라움: 예상 밖의 일은 정보가 크다

"해가 뜨는 건 뉴스가 안 되는데 일식은 뉴스가 된다. 놀라움을 숫자로 쓸 수 있나?"

![놀라움: 드물수록 놀랍다](/images/chapters/ch05-surprise-news.svg)

### 비유 — 뉴스 가치

뉴스 가치 — 흔한 사건은 뉴스가 안 된다. "개가 사람을 물면 뉴스가 안 되고, 사람이 개를 물면 뉴스가 된다." 기자가 무의식중에 재는 것은 사건의 확률이다.

### 왜 −log인가

놀라움을 확률 p의 함수로 쓰고 싶다. 확률이 작을수록 커져야 하니 후보는 많아 보인다. 1/p도 되고, 1 − p도 될 것 같다.

그런데 한 가지 약속을 더하면 후보가 거의 다 떨어진다. 독립인 사건 두 개가 함께 일어나면, 놀라움은 더해져야 한다. '오늘 동전 앞면이 나왔다'와 '오늘 주사위 6이 나왔다'는 서로 아무 상관이 없다. 두 소식을 한꺼번에 들은 놀라움은 따로 들은 놀라움의 합이어야 한다. 그런데 독립이면 확률은 곱해진다. P(A∩B) = P(A)·P(B).

확률이 0.1인 독립 사건 두 개로 시험해 보자. 함께 일어날 확률은 0.01이다. 1/p는 따로 더하면 10 + 10 = 20인데, 함께는 1/0.01 = 100이다. 1 − p는 따로 더하면 0.9 + 0.9 = 1.8인데, 함께는 0.99다. 둘 다 탈락이다.

곱을 덧셈으로 바꾸는 함수가 필요하다. 연속이고 확률이 작을수록 커진다는 조건 아래에서, 그런 함수는 −c·log p 꼴뿐이다. c는 양의 상수이고, c를 고르는 것은 로그의 밑을 고르는 것과 같다. 이 유일성은 아래 문제 1에서 증명한다.

### 정의

\`\`\`latex
\\textcolor{#9467bd}{h}(x) = -\\log \\textcolor{#d6479f}{p}(x)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{h}(x) & \\text{결과 } x \\text{ 의 놀라움 (자기정보량)} \\\\
\\textcolor{#d6479f}{p}(x) & \\text{현실에서 결과 } x \\text{ 가 나올 확률} \\\\
x & \\text{일어난 결과} \\\\
\\log & \\text{로그. 밑이 2 면 단위는 bit, 밑이 } e \\text{ 면 nat}
\\end{array}
\`\`\`

밑에 따라 단위가 붙는다. log₂를 쓰면 bit다. 동전 앞면(p = ½)의 놀라움이 정확히 1 bit다. 자연로그 ln을 쓰면 nat이다. 수학 계산이 깔끔해서 이 책의 식은 대부분 nat이다. 둘은 상수배 차이다. 1 nat = 1/ln 2 ≈ 1.443 bit, 1 bit = ln 2 ≈ 0.693 nat. numpy의 np.log는 자연로그다. bit가 필요하면 np.log2를 쓴다.

### 이것이 왜 기계학습과 관련되는가?

좋은 모델은 현실에서 흔히 일어나는 일에 놀라지 않는다. "비가 온다"에 대해 모델이 "그럴 리가!" 하고 놀란다면, 그 모델은 현실을 잘 모르는 것이다. 모델의 놀라움이 클수록 모델이 나쁘다. 이 감각이 곧 손실함수로 이어진다.

{{viz: ch05/surprise}}

### 파이썬

\`\`\`python
import numpy as np

events = {"동전 앞면": 0.5, "주사위 6": 1/6, "생일이 오늘": 1/365, "동전 앞면 10번 연속": 0.5**10}
for name, p in events.items():
    print(f"{name}: p={p:.5f}  놀라움 {-np.log2(p):6.2f} bit  {-np.log(p):6.2f} nat")

# 독립인 두 사건: 확률은 곱해지고 놀라움은 더해진다
p1, p2 = 0.1, 0.1
for name, f in {"-log2 p": lambda p: -np.log2(p), "1/p": lambda p: 1 / p, "1-p": lambda p: 1 - p}.items():
    print(f"{name}: 따로 더하기 {f(p1) + f(p2):7.3f}   함께 {f(p1 * p2):7.3f}")
# 동전 앞면: p=0.50000  놀라움   1.00 bit    0.69 nat
# 주사위 6: p=0.16667  놀라움   2.58 bit    1.79 nat
# 생일이 오늘: p=0.00274  놀라움   8.51 bit    5.90 nat
# 동전 앞면 10번 연속: p=0.00098  놀라움  10.00 bit    6.93 nat
# -log2 p: 따로 더하기   6.644   함께   6.644
# 1/p: 따로 더하기  20.000   함께 100.000
# 1-p: 따로 더하기   1.800   함께   0.990
\`\`\`

동전 앞면 10번 연속은 정확히 10 bit다. 1 bit짜리 놀라움 열 개가 더해진 것이다.

### 수확

"놀라움 = −log(확률). 곱해지는 확률을 더해지는 놀라움으로 바꾸는 유일한 자."

### 문제 1. 놀라움은 왜 −log인가 (킬러)

놀라움 I(p)가 (0, 1]에서 정의되고 다음을 만족한다고 하자.
① 가법성: 모든 p, q에 대해 I(pq) = I(p) + I(q).
② 단조성: p가 작을수록 I(p)가 크다.
I(p) = −c log p (c > 0)임을 증명하라. 상수 c는 무엇을 뜻하는가?

#### 함께 풀기

**김민준:** 코드로 확인했어요. I(p) = −log p에 p = 0.1, 0.2, 0.5를 넣어 보니 I(0.1 × 0.5) = I(0.1) + I(0.5)가 맞아요. 다른 조합도 다 맞고요.

**선생님:** 민준 학생이 확인한 건 어느 방향이에요?

**김민준:** −log가 조건을 만족한다는 거요. 문제는 조건을 만족하는 게 −log밖에 없다는 거고요. 방향이 반대네요.

**이서연:** 그건 제가 해 볼게요. p = e<sup>−x</sup>로 두고 g(x) = I(e<sup>−x</sup>)라 하면 가법성이 g(x + y) = g(x) + g(y)가 돼요. 코시 방정식이요.

**이서연:** 정수에서는 g(n) = n·g(1). g(1) = g(n·(1/n)) = n·g(1/n)이니까 g(1/n) = g(1)/n. 합치면 모든 양의 유리수 r에서 g(r) = r·g(1)이에요. c = g(1)로 두면 g(x) = cx, 곧 I(p) = −c log p예요. 끝이요.

**선생님:** x가 √2면요?

**이서연:** √2도 유리수로 한없이 가까이 갈 수 있으니까 g(√2) = √2·c죠.

**선생님:** 그 "가까이 가면 값도 가까이 간다"는 어디서 왔어요?

〔S05〕 **이서연:** …연속성이요. 그런데 조건에는 연속성이 없고 단조성만 있어요. 그리고 제가 그걸 안 쓰고 넘어갔어요.

**선생님:** 단조성을 빼면 어떻게 돼요?

**이서연:** 코시 방정식은 연속성 같은 조건이 없으면 유리수 위에서만 선형이고, 실수 전체에서는 이상한 해가 있어요. 실수를 유리수 위의 벡터공간으로 보고 기저를 잡아서 만드는 해요. 그래프가 평면 어디에나 빽빽하게 퍼지는 함수라서, 어느 구간에서도 단조일 수 없어요.

〔S08〕 **이서연:** 그래서 단조성이 필요해요. g가 증가함수면 유리수 r < x < r′에 대해 cr = g(r) ≤ g(x) ≤ g(r′) = cr′예요. r과 r′를 x로 조여 가면 g(x) = cx. 단조성이 유리수에서 실수로 건너가는 다리예요.

〔M05〕 **김민준:** 잠깐, 그럼 c가 음수여도 되는 거 아니에요? cx도 가법적이잖아요.

**이서연:** 단조성의 방향이 정해 줘. p가 작을수록, 곧 x가 클수록 I가 커야 하니까 c > 0.

**선생님:** 그래요. 그러면 c는 무엇을 뜻해요?

〔M08〕 **김민준:** −c log p = −log<sub>b</sub> p가 되게 밑을 고르는 거요. c = 1이면 nat, c = 1/ln 2면 bit. 앞에서 본 bit와 nat의 그 상수배예요. 공리가 정할 수 없는 건 단위뿐이에요.

〔T13〕 **선생님:** 그래요. 가법성이 log 꼴을 정하고, 단조성이 유리수에서 실수로 넘어가는 다리와 부호를 정하고, 남은 상수는 단위예요. 민준 학생은 "만족한다"와 "그것뿐이다"를 구분했고, 서연 학생은 증명에서 조건 하나가 어디에 쓰이는지 찾았어요.

**김민준:** 보고서 쓸 때 가정 목록에 쓴 가정이 본문 어디서 쓰였는지 표시하라던 조교님 말이 이제 이해돼요. 안 쓰인 가정이 있으면 증명이 어딘가 비어 있다는 거네요.

**이서연:** 해석학 시간에 코시 방정식 괴물 해를 보여 주시면서 "연속성 한 줄이 이 괴물들을 다 쫓아낸다"고 하셨는데, 단조성도 같은 일을 하네요.

## 엔트로피: 평균 놀라움

"분포 전체가 얼마나 불확실한지를 숫자 하나로?"

결과마다 놀라움이 있다. 그 결과가 나오는 빈도로 평균을 내면 된다.

\`\`\`latex
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}) = -\\sum_i \\textcolor{#d6479f}{p}_i \\log \\textcolor{#d6479f}{p}_i = \\sum_i \\textcolor{#d6479f}{p}_i\\, \\textcolor{#9467bd}{h}(i)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}) & \\text{분포 } p \\text{ 의 엔트로피 (평균 놀라움)} \\\\
\\textcolor{#d6479f}{p}_i & \\text{결과 } i \\text{ 의 확률} \\\\
\\textcolor{#9467bd}{h}(i) & \\text{결과 } i \\text{ 의 놀라움 } -\\log p_i \\\\
i & \\text{결과의 번호 (확률이 0 인 결과는 빼고 더한다)}
\\end{array}
\`\`\`

확률이 0인 결과는 일어나지 않으니 평균에 들어가지 않는다. 0 × log 0 = 0으로 약속한다.

### 비유 — 스무고개

스무고개 — 예/아니오 질문을 스무 번까지 던져 상대가 생각한 물건을 맞히는 놀이다. 질문 하나가 후보를 절반으로 줄이면, 20번으로 2²⁰ ≈ 100만 개 후보를 가를 수 있다. 후보가 8개이고 모두 같은 확률이면 정확히 3번이 필요하다. 엔트로피가 3 bit다. 후보가 (½, ¼, ⅛, ⅛)의 확률이면 "첫 번째 것이냐"부터 묻는 게 낫다. 평균 1.75번이면 맞힌다. 엔트로피도 1.75 bit다.

일반적으로 가장 잘 짠 질문 전략의 평균 질문 수 L은
H ≤ L < H + 1 (bit)
을 만족한다. 엔트로피는 평균 질문 수의 바닥이다. 하나가 거의 확실하면 질문은 거의 필요 없고, 엔트로피도 0에 가깝다.

### 퍼진 분포와 뾰족한 분포

정규분포의 모양은 평균 μ와 표준편차 σ 두 숫자로 정해진다. σ가 크면 분포가 넓게 퍼져 있다 — 불확실하다 — 엔트로피가 높다. σ가 작으면 뾰족하다 — 확실하다 — 엔트로피가 낮다.

다만 연속분포에서는 조심할 것이 있다. 연속분포에는 합 대신 적분으로 정의한 미분 엔트로피(differential entropy)를 쓴다. 엔트로피를 미분한 값이 아니라, 연속분포용 엔트로피의 이름이다. 정규분포라면 이렇다.

\`\`\`latex
\\textcolor{#9467bd}{H} = \\frac{1}{2} \\log\\!\\big(2\\pi e\\, \\textcolor{#2e9e6e}{\\sigma}^2\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H} & \\text{정규분포의 미분 엔트로피 (nat)} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차} \\\\
e & \\text{자연로그의 밑 } 2.718\\ldots
\\end{array}
\`\`\`

σ가 커질수록 커지는 건 같다. 그런데 σ < 1/√(2πe) ≈ 0.242이면 음수가 된다. 이산 엔트로피는 늘 0 이상인데 미분 엔트로피는 그렇지 않다. 미분 엔트로피는 확률이 아니라 확률밀도의 로그를 평균하기 때문이다. 밀도는 1보다 클 수 있다. 그래서 미분 엔트로피는 "질문 수" 같은 절대적인 뜻이 없고, 단위(cm냐 mm냐)를 바꾸면 값이 바뀐다. 두 분포의 엔트로피 차이, 그리고 뒤에 나올 KL은 이런 문제가 없다.

{{viz: ch05/entropy-simplex}}

### 파이썬

\`\`\`python
import numpy as np

def H(p, base=2):
    p = np.asarray(p, dtype=float)
    p = p[p > 0]                        # 0 log 0 = 0 으로 약속
    return -np.sum(p * np.log(p)) / np.log(base)

print(f"물건 8개, 고르게      H = {H(np.ones(8) / 8):.3f} bit")
print(f"(1/2, 1/4, 1/8, 1/8)  H = {H([0.5, 0.25, 0.125, 0.125]):.3f} bit")
print(f"(0.97, 0.01, 0.01, 0.01) H = {H([0.97, 0.01, 0.01, 0.01]):.3f} bit")
print(f"세 결과 균등          H = {H(np.ones(3) / 3):.3f} bit = {H(np.ones(3) / 3, np.e):.3f} nat")

# 연속분포: 정규분포의 미분 엔트로피 ½ log(2πeσ²) (nat)
for s in [2.0, 1.0, 0.242, 0.1]:
    print(f"σ={s:5.3f}  미분 엔트로피 {0.5 * np.log(2 * np.pi * np.e * s**2):+.3f} nat")
# 물건 8개, 고르게      H = 3.000 bit
# (1/2, 1/4, 1/8, 1/8)  H = 1.750 bit
# (0.97, 0.01, 0.01, 0.01) H = 0.242 bit
# 세 결과 균등          H = 1.585 bit = 1.099 nat
# σ=2.000  미분 엔트로피 +2.112 nat
# σ=1.000  미분 엔트로피 +1.419 nat
# σ=0.242  미분 엔트로피 +0.000 nat
# σ=0.100  미분 엔트로피 -0.884 nat
\`\`\`

### 수확

"엔트로피는 심플렉스(확률들이 사는 삼각형) 위의 높이 지도. 한가운데(균등)가 가장 높다."

### 문제 2. 주사위의 엔트로피, bit와 nat

공정한 주사위의 엔트로피를 bit와 nat으로 각각 구하라. numpy로 계산할 때 어느 함수를 쓰는지, 두 단위를 어떻게 바꾸는지 적어라.

#### 함께 풀기

**김민준:** 코드로 했어요. -np.sum(p * np.log(p))가 1.792예요. 1.792 bit요.

**이서연:** 나는 bit로 바꿔 봤어. ln 2 = 0.693을 곱하면 1.242 bit야.

**선생님:** 두 사람 숫자가 다르네요. 스무고개로 생각해 봐요. 눈이 여섯 개인데 예/아니오 질문을 몇 번 하면 맞힐 수 있어요?

**김민준:** 반씩 가르면 두 번으로는 네 개밖에 못 가르고, 세 번이면 여덟 개니까… 두 번과 세 번 사이요.

〔M04〕 **김민준:** 그럼 1.792 bit는 너무 작네요. np.log는 자연로그였어요. 1.792는 nat이에요.

〔S06〕 **이서연:** 제 1.242는 더 작아요. 방향을 거꾸로 했네요. 1 nat이 1/ln 2 ≈ 1.443 bit니까 곱할 게 아니라 나눠야 해요. 1.792 / 0.693 = 2.585 bit. 두 번과 세 번 사이 맞아요.

**선생님:** 그래요. log₂ 6 = 2.585 bit = ln 6 = 1.792 nat. 같은 양을 다른 자로 잰 거예요.

**이서연:** 로그의 밑 바꾸기 공식 log₂ x = ln x / ln 2를 거꾸로 쓴 거예요. 해석학 첫 주에 배운 건데.

**김민준:** 과제 채점표에 단위 안 쓰면 감점이던 게 이래서였네요. 숫자만 보고는 cm인지 inch인지 모르는 거랑 같아요.

### 문제 3. 평균이 정해진 주사위

결과가 1, 2, 3인 분포 p = (p₁, p₂, p₃)가 있다. (가) 아무 조건이 없을 때 엔트로피가 가장 큰 분포는? (나) 평균이 2.5여야 한다면 엔트로피가 가장 큰 분포는? 라그랑주 승수법으로 풀고, 답이 정말 최댓값인지도 확인하라.

#### 함께 풀기

**김민준:** (가)는 균등분포요. (나)는 격자 탐색으로 풀었어요. 평균이 2.5면 p₃ − p₁ = 0.5라서 p₁ 하나만 0.01 간격으로 돌리면 돼요. (0.12, 0.26, 0.62)에서 엔트로피 0.901 nat이 최대예요.

**선생님:** 0.01 간격 사이에 더 큰 값은 없어요?

**김민준:** 없을 것 같은데… 장담은 못 해요. 간격을 줄이면 소수 셋째 자리가 움직일 수도 있고요.

**이서연:** 라그랑주로 하면 정확히 나와요. −Σp<sub>i</sub> log p<sub>i</sub> − α(Σp<sub>i</sub> − 1) − λ(Σ i·p<sub>i</sub> − 2.5)를 p<sub>i</sub>로 미분하면 −log p<sub>i</sub> − 1 − α − λi = 0. 그러니까 p<sub>i</sub> ∝ r<sup>i</sup> 꼴, 이웃한 확률의 비가 일정해요.

**이서연:** 비를 r이라 하면 p₁(r² − 1) = 0.5, p₁(1 + r + r²) = 1이라서 r² − r − 3 = 0, r = (1 + √13)/2 ≈ 2.303이에요. p ≈ (0.116, 0.268, 0.616), 엔트로피 0.901 nat이요.

**선생님:** 민준 학생 격자 답이 거의 맞았네요. 그런데 서연 학생, 미분이 0인 점을 찾았어요. 그게 최댓값이라는 건요?

〔S06〕 **이서연:** 엔트로피가 오목함수니까… 아, 조건이 걸린 영역에 경계가 있어요. p₁ = 0이면 (0, 0.5, 0.5), p₂ = 0이면 (0.25, 0, 0.75). 라그랑주는 경계에서의 최댓값을 못 봐요.

**이서연:** 경계 값을 재 보면 0.693, 0.562예요. 안쪽 0.901보다 작아요. 사실 −p log p를 p로 미분하면 −log p − 1이라서 p → 0에서 +∞예요. 경계에서 조금만 안으로 들어와도 엔트로피가 늘어나니까 경계는 최대가 될 수 없어요.

〔M07〕 **김민준:** p<sub>i</sub> ∝ r<sup>i</sup>면 p<sub>i</sub> ∝ exp(λ′·i)잖아요. 이거 softmax 모양이에요. 평균 조건 하나 걸었더니 softmax가 나왔네요.

**선생님:** 그래요. 제약 아래 엔트로피를 가장 크게 하면 지수 꼴이 나와요. 지수족이라 부르는 분포 가족의 출발점이에요. log p가 자연모수와 통계량의 곱에서 정규화 항을 뺀 꼴인 분포들이죠.

**김민준:** 격자 탐색은 조교님이 "답 근처에 있다는 증거"라고 하던 거랑 같네요. 답이라는 증명은 아니고요.

**이서연:** 최적화 수업에서 "안쪽의 기울기가 0인 점과 경계를 둘 다 확인하라"는 말을 귀에 못이 박히게 들었는데, 막상 제가 빠뜨렸네요.

## 교차엔트로피: 잘못된 부호표

"엔트로피와 KL 발산은 무슨 관계인가?"

### 비유 — 외국어 사전

외국어 사전 — 한국어 빈도에 맞춘 약어 사전은 효율적이다. 자주 쓰는 말에 짧은 약어를 주었으니까. 그런데 영어 빈도에 맞춘 사전으로 한국어를 쓰면, 자주 쓰는 말에 긴 약어가 붙어 있어 비효율이 생긴다. 그 비용 전체가 교차엔트로피, 순수한 낭비분만 떼어내면 KL 발산이다. 이런 사전을 정보이론에서는 부호표(결과마다 붙인 0·1 부호의 목록)라 부른다.

### 정의

현실이 p인데 모형 q가 매긴 놀라움 −log q<sub>i</sub>로 평균을 내면 교차엔트로피다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}, \\textcolor{#7f8f10}{q}) &= -\\sum_i \\textcolor{#d6479f}{p}_i \\log \\textcolor{#7f8f10}{q}_i \\\\
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) &= \\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}, \\textcolor{#7f8f10}{q}) - \\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}) = \\sum_i \\textcolor{#d6479f}{p}_i \\log \\frac{\\textcolor{#d6479f}{p}_i}{\\textcolor{#7f8f10}{q}_i}
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}, \\textcolor{#7f8f10}{q}) & \\text{교차엔트로피: 현실 } p \\text{ 에서 모형 } q \\text{ 의 평균 놀라움} \\\\
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}) & \\text{현실 자신의 엔트로피} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#d6479f}{p}_i & \\text{현실에서 결과 } i \\text{ 의 확률 (평균을 내는 무게)} \\\\
\\textcolor{#7f8f10}{q}_i & \\text{모형이 결과 } i \\text{ 에 준 확률} \\\\
i & \\text{결과의 번호}
\\end{array}
\`\`\`

KL의 정의가 여기서 뜻을 얻는다.
log(p<sub>i</sub>/q<sub>i</sub>) = (−log q<sub>i</sub>) − (−log p<sub>i</sub>).
결과 i가 일어났을 때 모형의 놀라움에서 현실 자신의 놀라움을 뺀 것, "괜히 더 놀란 양"이다. KL은 그 초과 놀라움을 현실의 빈도로 평균 낸 것이다. 그리고 H(p, q) = H(p) + KL(p‖q). 교차엔트로피는 현실의 몫과 모형의 낭비로 나뉜다.

단위는 log의 밑을 따른다. 세 양 모두 nat이면 nat, bit이면 bit다. q<sub>i</sub> = 0인데 p<sub>i</sub> > 0인 결과가 있으면 −log q<sub>i</sub> = ∞다. 교차엔트로피도 KL도 무한대가 된다. 현실에서 일어나는 일을 "불가능"이라 한 모형은 무한히 놀란다.

### 학습이 줄이는 것

딥러닝을 해본 사람이라면 cross-entropy loss라는 이름을 본 적이 있을 것이다. 바로 이것이다. 현실이 p인데 모델이 q라고 주장하면, 그 주장의 비용이 H(p, q). 모델을 학습한다는 건 이 비용을 줄이는 것이다. H(p)는 현실 자체의 불확실성이라 모델이 바꿀 수 없고, 줄일 수 있는 건 KL(p‖q) 부분뿐이다. 그래서 모델이 내놓는 q에 대해 cross-entropy를 최소화하는 것과 KL을 최소화하는 것은 같은 일이다.

그런데 우리는 p를 모른다. 가진 것은 p에서 나온 표본 x₁, …, x<sub>N</sub>뿐이다. 표본마다 1/N의 확률을 준 분포를 경험분포 p̂라 부른다. p 자리에 p̂를 넣으면 교차엔트로피가 우리에게 익숙한 식이 된다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#9467bd}{H}(\\hat{\\textcolor{#d6479f}{p}}, \\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}}) &= -\\frac{1}{N} \\sum_{n=1}^{N} \\log \\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_n) \\\\
&= -\\frac{1}{N}\\, \\textcolor{#b58a00}{\\ell}(\\textcolor{#2e9e6e}{\\theta})
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H} & \\text{교차엔트로피} \\\\
\\hat{\\textcolor{#d6479f}{p}} & \\text{경험분포 (표본마다 } 1/N \\text{ 의 확률)} \\\\
\\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{모수(분포를 정하는 숫자) } \\theta \\text{ 로 정해지는 모형} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모형의 모수} \\\\
\\textcolor{#6f8fa6}{x}_n & n \\text{ 번째 표본} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{로그우도 } \\sum_n \\log q_\\theta(x_n) \\text{ (우도 = 모형이 관측에 준 확률)} \\\\
N & \\text{표본 수}
\\end{array}
\`\`\`

평균 음의 로그우도(NLL)가 곧 경험분포와의 교차엔트로피다. 그러니 최대우도추정(MLE)은 KL(p̂‖q<sub>θ</sub>)를 가장 작게 만드는 θ를 찾는 일이다. H(p̂)는 θ와 무관하기 때문이다. "내 모델이 현실에서 얼마나 먼가"라는 질문의 답이 여기 있다. 학습은 데이터가 그려 준 현실 p̂에서 모델이 내놓은 분포 q<sub>θ</sub>까지의 KL을 줄이는 과정이다.

{{viz: ch05/cross-entropy}}

### 파이썬

\`\`\`python
import numpy as np

p = np.array([0.5, 0.3, 0.2])          # 현실
q = np.array([0.25, 0.25, 0.5])        # 모형

H_p  = -np.sum(p * np.log(p))
H_pq = -np.sum(p * np.log(q))
KL   =  np.sum(p * np.log(p / q))
print(f"H(p) = {H_p:.4f}   H(p,q) = {H_pq:.4f}   KL(p‖q) = {KL:.4f}")
print(f"H(p) + KL = {H_p + KL:.4f}")

# 경험분포와 최대우도: 교차엔트로피 = 평균 음의 로그우도
rng = np.random.default_rng(0)
x = rng.choice(3, size=1000, p=p)                 # 현실에서 1000개 관측
p_hat = np.bincount(x, minlength=3) / len(x)      # 경험분포
nll = -np.mean(np.log(q[x]))                      # 모형 q 의 평균 음의 로그우도
print(f"경험분포 {p_hat}   평균 NLL {nll:.4f}   H(p̂,q) {-np.sum(p_hat * np.log(q)):.4f}")
# H(p) = 1.0297   H(p,q) = 1.2477   KL(p‖q) = 0.2180
# H(p) + KL = 1.2477
# 경험분포 [0.473 0.315 0.212]   평균 NLL 1.2393   H(p̂,q) 1.2393
\`\`\`

평균 NLL과 H(p̂, q)는 계산 순서만 다른 같은 숫자다.

### 수확

"KL = 교차엔트로피 − 엔트로피. 모형 탓에 괜히 더 놀란 양의 평균." "최대우도추정은 경험분포에서 모형까지의 KL을 줄이는 일이다."

### 문제 4. 교차엔트로피를 쪼개기

(가) 모든 i에서 p<sub>i</sub> > 0, q<sub>i</sub> > 0일 때 H(p, q) = H(p) + KL(p‖q)임을 보여라. (나) p = (0.5, 0.5), q = (0.9, 0.1)로 세 양을 계산하라. (다) q에 0인 칸이 있으면 어떻게 되는가? p에 0인 칸이 있으면?

#### 함께 풀기

**김민준:** (나)부터 했어요. H(p,q) = 1.204, H(p) = 0.693, KL = 0.511. 더하면 1.204. 맞으니까 (가)도 성립해요.

**선생님:** 그건 (가)의 증명이에요, 예시예요?

**김민준:** …예시네요. 숫자 하나 맞는 걸로는 모든 p, q를 말 못 하죠.

**이서연:** 식으로 하면 한 줄이에요. −log q<sub>i</sub> = −log p<sub>i</sub> + log(p<sub>i</sub>/q<sub>i</sub>)를 p<sub>i</sub>로 가중해서 더하면 끝이에요. (다)도 같은 식이니까 그냥 성립하겠죠.

**선생님:** p = (0.5, 0.5), q = (1, 0)을 넣어 봐요.

〔S05〕 **이서연:** −log q₂ = −log 0이라… 무한대요. 로그를 쪼개는 단계에서 log 0을 유한한 수처럼 다뤘어요. 양쪽이 둘 다 ∞라서 "∞ = 0.693 + ∞" 꼴이 되긴 하는데, 그건 증명이 아니라 약속이에요.

**선생님:** 그래요. q<sub>i</sub> = 0이고 p<sub>i</sub> > 0인 칸이 있으면 교차엔트로피도 KL도 무한대로 정의해요. 반대로 p<sub>i</sub> = 0인 칸은요?

**이서연:** 그 칸은 0 × log 0 = 0으로 약속했으니 합에서 빠져요. q가 거기에 뭘 주든 상관없어요. 현실에서 안 일어나는 일이니까요.

**김민준:** 그래서 분류 모델 출력에 softmax를 쓰는 거네요. softmax는 어떤 클래스에도 정확히 0을 안 주니까 loss가 무한대로 안 가요.

**이서연:** 해석학에서 "식이 성립한다"는 말 앞에 늘 "정의되는 범위에서"가 붙던 게 이런 이유였어요.

## KL ≥ 0: 볼록함수 하나에서 나오는 부등식

"H(p, q) = H(p) + KL(p‖q)라면, KL이 음수가 되어 모형이 현실 자신보다 싸게 부호화할(결과를 더 짧은 0·1 부호로 적을) 수도 있을까?"

KL이 늘 0 이상이고, 0이면 두 분포가 같다는 것을 지금 증명한다.

### 한 줄 증명

−log는 아래로 볼록한 함수다. 곡선 위 두 점을 이은 선분은 늘 곡선보다 위에 있다. 점이 여럿이어도 같다. 곡선 위 점들에 무게를 주고 무게중심을 잡으면, 그 무게중심은 곡선보다 위에 있다. 이것이 젠센 부등식이다. 여기서는 이 그림 하나만 쓴다.

점들의 가로 좌표를 q<sub>i</sub>/p<sub>i</sub>, 무게를 p<sub>i</sub>로 잡는다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) &= \\sum_i \\textcolor{#d6479f}{p}_i \\left(-\\log \\frac{\\textcolor{#7f8f10}{q}_i}{\\textcolor{#d6479f}{p}_i}\\right) \\\\
&\\ge -\\log \\sum_i \\textcolor{#d6479f}{p}_i \\frac{\\textcolor{#7f8f10}{q}_i}{\\textcolor{#d6479f}{p}_i} = -\\log \\sum_i \\textcolor{#7f8f10}{q}_i \\\\
&\\ge -\\log 1 = 0
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#d6479f}{p}_i & \\text{현실의 확률, 여기서는 점들의 무게} \\\\
\\textcolor{#7f8f10}{q}_i & \\text{모형의 확률, } q_i/p_i \\text{ 가 점의 가로 좌표} \\\\
i & \\text{결과의 번호, } p_i > 0 \\text{ 인 것만 더한다}
\\end{array}
\`\`\`

왼쪽은 곡선 위 점들의 무게중심 높이다. 오른쪽 −log Σq<sub>i</sub>는 무게중심의 가로 좌표에서 잰 곡선의 높이다. 합은 p<sub>i</sub> > 0인 결과만 도니 Σq<sub>i</sub> ≤ 1이고, −log는 감소함수라 마지막 부등식이 나온다.

등호는 언제인가. 첫 부등식은 모든 점이 한 자리에 모일 때만 등호다. q<sub>i</sub>/p<sub>i</sub>가 모두 같다는 뜻이다. 둘째 부등식은 Σq<sub>i</sub> = 1일 때 등호다. 둘을 합치면 q = p. KL = 0이면 두 분포가 같다.

H(p, q) ≥ H(p)도 따라 나온다. 현실의 빈도를 정확히 아는 부호표보다 싸게 부호화하는 방법은 없다. 이것을 깁스 부등식이라 부른다.

{{viz: ch05/convexity-kl}}

### 파이썬

\`\`\`python
import numpy as np

p = np.array([0.5, 0.3, 0.2]); q = np.array([0.25, 0.25, 0.5])
x = q / p                                          # 곡선 위 점들의 가로 좌표
print("점의 x 좌표 q/p:", np.round(x, 3), "  p로 낸 무게중심 x:", round(np.sum(p * x), 10))
print("무게중심 높이 Σ p·(-log x) =", round(np.sum(p * -np.log(x)), 4), "= KL(p‖q)")

rng = np.random.default_rng(1)
P = rng.dirichlet(np.ones(5), 100_000)
Q = rng.dirichlet(np.ones(5), 100_000)
KL = np.sum(P * np.log(P / Q), axis=1)
print(f"무작위 10만 쌍에서 KL 의 최솟값 {KL.min():.4f}")
# 점의 x 좌표 q/p: [0.5   0.833 2.5  ]   p로 낸 무게중심 x: 1.0
# 무게중심 높이 Σ p·(-log x) = 0.218 = KL(p‖q)
# 무작위 10만 쌍에서 KL 의 최솟값 0.0007
\`\`\`

무게중심의 가로 좌표는 늘 정확히 1이다. 그 자리의 곡선 높이는 −log 1 = 0이다. KL은 무게중심이 곡선보다 얼마나 높이 떠 있는지다.

### f-발산 — 볼록함수 하나에 발산 하나

"KL ≥ 0의 증명에 쓴 것은 −log가 볼록하다는 것뿐이었다. 그렇다면 다른 볼록함수로도 같은 증명이 되지 않을까?"

KL 발산 하나만으로 충분하지 않을까? 충분하지 않다. GAN(생성적 적대 신경망)의 원래 판별자 목적함수는 KL 대신 젠센–섀넌 발산을 줄이고, 뒤이은 Wasserstein GAN은 흙을 옮기는 비용으로 재는 바서슈타인 거리를 쓴다. 스코어 매칭은 데이터에 대한 로그밀도의 기울기(데이터에 대한 스코어)끼리 비교하는 피셔 발산을 줄인다. 디퓨전 모델의 학습 목표인 증거 하한(ELBO, evidence lower bound)은 여러 단계 KL의 합으로 쓰이지만, 실제로는 스코어 매칭 꼴로 바꾸어 계산한다. 어떤 자를 쓰느냐에 따라 학습이 무엇에 민감해지는지가 달라진다.

KL의 증명을 그대로 일반화한 가족이 있다.

\`\`\`latex
\\textcolor{#c2398a}{D}_{\\textcolor{#5b6fe0}{f}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) = \\sum_i \\textcolor{#7f8f10}{q}_i\\, \\textcolor{#5b6fe0}{f}\\!\\left(\\frac{\\textcolor{#d6479f}{p}_i}{\\textcolor{#7f8f10}{q}_i}\\right)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{D}_{\\textcolor{#5b6fe0}{f}} & f\\text{-발산} \\\\
\\textcolor{#5b6fe0}{f} & \\text{발산을 정하는 볼록함수, } f(1) = 0 \\\\
\\textcolor{#d6479f}{p}_i,\\ \\textcolor{#7f8f10}{q}_i & \\text{현실과 모형의 확률} \\\\
i & \\text{결과의 번호}
\\end{array}
\`\`\`

증명은 KL 때와 같다. f가 볼록이니 무게 q<sub>i</sub>로 낸 무게중심이 곡선 위에 있고, D<sub>f</sub> ≥ f(Σ q<sub>i</sub> · p<sub>i</sub>/q<sub>i</sub>) = f(1) = 0이다.

f(x) = x log x를 넣으면 KL(p‖q)가 나온다. f(x) = −log x를 넣으면 방향이 뒤집힌 KL(q‖p)가 나온다. f(x) = (x − 1)²를 넣으면 카이제곱 발산 χ² = Σ(p<sub>i</sub> − q<sub>i</sub>)²/q<sub>i</sub>가 나온다. 젠센–섀넌 발산과 헬링거 거리도 이 가족이다. 바서슈타인 거리와 피셔 발산은 이 가족이 아니다. 자는 f-발산보다 더 많다.

### 비유 — 망치와 공구함

망치와 공구함 — −log는 좋은 망치다. 못을 잘 박는다. f-발산은 같은 손잡이(볼록성)에 머리만 바꿔 끼우는 공구 세트다.

### 파이썬

\`\`\`python
import numpy as np

p = np.array([0.5, 0.3, 0.2])
q = np.array([0.25, 0.25, 0.5])

def D_f(f, p, q):                       # D_f(p‖q) = Σ q f(p/q)
    return np.sum(q * f(p / q))

fs = {
    "KL      f(x)=x log x":      lambda x: x * np.log(x),
    "역방향KL f(x)=-log x":       lambda x: -np.log(x),
    "χ²      f(x)=(x-1)²":       lambda x: (x - 1)**2,
    "헬링거² f(x)=(√x-1)²":       lambda x: (np.sqrt(x) - 1)**2,
}
for name, f in fs.items():
    print(f"{name}  D_f = {D_f(f, p, q):.4f}")
print(f"확인: KL(p‖q)={np.sum(p*np.log(p/q)):.4f}  KL(q‖p)={np.sum(q*np.log(q/p)):.4f}  Σ(p-q)²/q={np.sum((p-q)**2/q):.4f}")
# KL      f(x)=x log x  D_f = 0.2180
# 역방향KL f(x)=-log x  D_f = 0.2393
# χ²      f(x)=(x-1)²  D_f = 0.4400
# 헬링거² f(x)=(√x-1)²  D_f = 0.1127
# 확인: KL(p‖q)=0.2180  KL(q‖p)=0.2393  Σ(p-q)²/q=0.4400
\`\`\`

볼록함수마다 발산이 하나씩 태어나고, 모두 0 이상이다.

### 수확

"KL ≥ 0은 −log가 볼록하다는 사실 하나에서 나온다."

"−log는 강력하다. 그러나 하나의 사례일 뿐이다. 볼록함수의 세계 전체를 열면 더 많은 것이 보인다."

---

> ### 인물 이야기 — Shannon, Boltzmann, 그리고 "정보를 재는 법"
>
> ![Claude Shannon](/images/portraits/claude-shannon.jpg)
>
> 1948년, 벨 연구소. Claude Shannon이 "A Mathematical Theory of Communication"을 발표했다. 이 논문이 풀고자 한 문제는 순수하게 공학적이었다. 잡음이 섞이는 전화선 하나로 메시지를 최대 얼마나 빨리, 틀리지 않게 보낼 수 있는가?
>
> 이 질문에 답하려면 먼저 "메시지의 양"을 재야 했다. 그런데 메시지의 양이란 무엇인가? 글자 수? 아니다. "AAAA"는 "정보"가 적고 "XQZW"는 많다. 예측 가능한 것에는 정보가 적고, 예측 불가능한 것에는 정보가 많다.
>
> Shannon은 이 직관을 수학으로 만들었다. 확률이 p인 사건의 정보량은 −log(p). 분포 전체의 평균 정보량 — 엔트로피 — 은 H = −Σ p log p. 그리고 전화선의 용량은 보내는 쪽 분포를 바꿔 가며 얻을 수 있는 상호정보량(받은 신호가 보낸 신호에 대해 알려 주는 정보의 양)의 최댓값으로 표현된다.
>
> 여기서 기묘한 일이 일어났다. Shannon이 이 양에 이름을 붙이려고 할 때, 수학자 John von Neumann이 조언했다고 전해진다. 1971년 Myron Tribus가 Shannon에게서 들었다며 옮긴 이야기다. "엔트로피라고 부르게. 두 가지 이유가 있네. 첫째, 자네의 불확실성 함수는 통계역학에서 이미 그 이름으로 쓰이고 있으니까. 둘째, 더 중요한 건, 아무도 엔트로피가 정확히 뭔지 모르니까, 논쟁에서 항상 유리할 걸세."
>
> 농담 반 진담 반이었지만, "같은 형태"라는 부분은 정확했다. 70년 전, Ludwig Boltzmann은 전혀 다른 문제를 풀고 있었다. 1877년, 오스트리아 그라츠. 기체 분자가 셀 수 없이 많이 상자 안에서 날아다닌다. 각 분자의 속도를 하나하나 추적하는 것은 불가능하다. 대신 "분자들이 어떤 속도 분포를 가지고 있는가"를 묻는다.
>
> Boltzmann의 질문은 이것이었다. 분자들이 주어진 총 에너지를 나눠 가지는 방법은 몇 가지인가? 그 "방법의 수"의 로그가 엔트로피다. S = k log W — 뒤에 Planck가 이 꼴로 정리했고, 빈에 있는 볼츠만의 묘비에 새겨졌다. W는 미시 상태(분자 하나하나의 위치와 속도까지 다 정한 상태)의 수, k는 볼츠만 상수.
>
> 전화선의 용량을 재는 공학자와 기체 분자의 무질서를 재는 물리학자. 두 사람이 70년의 간격을 두고 같은 수학에 도달했다. 우연이 아니었다. 두 문제 모두 "가능한 경우의 수를 세는" 문제였고, 경우의 수가 곱으로 커지는 세계에서 합으로 잴 수 있는 척도를 원했기 때문이다. 곱을 합으로 바꾸는 함수 — log — 가 두 문제에서 같은 이유로 등장한 것이다.
>
> 두 분야가 같은 식에 닿은 것이 우연이 아니라 필연이었다는 것은 1957년 E.T. Jaynes가 명시적으로 보여주었다. 통계역학과 정보이론이 같은 원리의 두 응용이라는 것을.
`,O4=`# 볼록함수의 쌍대

−log는 볼록함수다. 그리고 그 볼록성 하나에서 KL 발산(두 분포가 얼마나 다른지 재는 양, Σ p log(p/q))이 늘 0 이상이라는 사실이 나온다. 하지만 −log는 하나의 볼록함수일 뿐이다. 볼록함수 자체가 가진 구조를 이해하면, 훨씬 더 많은 것이 보인다.

## 젠센 부등식: 볼록한 그릇이 주는 부등식

"왜 구슬은 그릇 바닥을 찾는데 물결 모양 바닥에선 엉뚱한 데 멈추나?"

### 볼록 — 그릇의 기하학

그릇 vs 물결 — 그릇에 구슬을 놓으면 어디서 놓든 같은 바닥으로 굴러간다. 물결 모양 바닥에 놓으면 가장 가까운 골에 멈춘다. 그 골이 가장 깊은 골이라는 보장은 없다.

그릇의 성질을 식으로 쓰면 이렇다. 곡선 위의 두 점을 줄로 이으면, 줄은 곡선보다 아래로 내려가지 않는다.

\`\`\`latex
\\textcolor{#5b6fe0}{f}\\big((1-t)\\,a + t\\,b\\big) \\le (1-t)\\,\\textcolor{#5b6fe0}{f}(a) + t\\,\\textcolor{#5b6fe0}{f}(b), \\qquad 0 \\le t \\le 1
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5b6fe0}{f} & \\text{볼록함수} \\\\
a,\\ b & \\text{정의역의 두 점} \\\\
t & \\text{두 점 사이의 보간 비율}
\\end{array}
\`\`\`

왼쪽은 곡선의 높이, 오른쪽은 줄의 높이다. 두 번 미분할 수 있는 함수라면 f″(x) ≥ 0 과 같은 말이다. x², eˣ, −log x, x log x는 모두 이 시험을 통과한다. sin x나 x⁴ − 2x²는 통과하지 못한다. 줄이 곡선 아래로 파고드는 구간이 있다.

볼록이 주는 선물은 정확히 이것이다. **골짜기가 여러 개일 수 없다.** 국소 최소는 곧 전역 최소다. 구슬이 멈춘 곳이 어디든, 그보다 낮은 곳은 없다.

"답이 하나"까지 말하려면 조건이 두 개 더 필요하다. 상수함수 f(x) = 0 도 볼록이다. 그런데 모든 점이 최소라서 답이 무수히 많다. eˣ 도 볼록이다. 그런데 왼쪽으로 한없이 내려가기만 하고 바닥이 없다. **엄격 볼록**(줄이 두 끝점 말고는 곡선에 닿지 않음)이고 **최솟값이 존재하면**, 그때 최소점이 하나다.

{{viz: ch06/convexity}}

### 파이썬

\`\`\`python
import numpy as np

funcs = {
    "x²":       lambda x: x**2,
    "eˣ":       np.exp,
    "x⁴":       lambda x: x**4,
    "sin x":    np.sin,
    "x⁴ − 2x²": lambda x: x**4 - 2 * x**2,
}

rng = np.random.default_rng(0)
a, b = rng.uniform(-2, 2, (2, 100_000))
t = rng.uniform(0, 1, 100_000)

for name, f in funcs.items():
    gap = (1 - t) * f(a) + t * f(b) - f((1 - t) * a + t * b)   # 줄 높이 − 곡선 높이
    print(f"{name:9s} 가장 작은 (줄 − 곡선) = {gap.min():+.4f}   볼록? {gap.min() >= -1e-12}")
# x²        가장 작은 (줄 − 곡선) = +0.0000   볼록? True
# eˣ        가장 작은 (줄 − 곡선) = +0.0000   볼록? True
# x⁴        가장 작은 (줄 − 곡선) = +0.0000   볼록? True
# sin x     가장 작은 (줄 − 곡선) = -0.5128   볼록? False
# x⁴ − 2x²  가장 작은 (줄 − 곡선) = -0.9980   볼록? False
\`\`\`

sin x와 x⁴ − 2x²만 음수가 나온다. 줄이 곡선 아래로 들어간 쌍이 있다는 뜻이다.

### 젠센 부등식 — 평균의 함수 vs 함수의 평균

"왜 들쭉날쭉함은 볼록한 비용을 늘리는가?"

### 비유 — 누진세

누진세 — 세금 T(소득)은 볼록함수다. 많이 벌수록 한 단위에 붙는 세율이 오른다. 5천만 원까지는 10%, 그 위로는 30%라고 하자.

두 사람이 합쳐 1억을 번다. 반반 5천씩 벌면 세금은 500만 + 500만 = 1,000만 원. 2천과 8천으로 갈리면 200만 + 1,400만 = 1,600만 원. 총소득은 같은데, 고르지 않을수록 세금 총액이 커진다. "두 사람의 세금 평균(800만) ≥ 평균 소득의 세금(500만)." 이것이 젠센 부등식이다.

(「소득을 합쳐 한 사람 이름으로 내면 더 많이 낸다」는 말도 누진세에서 참이지만, 그것은 f(a + b) ≥ f(a) + f(b) 라는 다른 성질(초가법성)이다. 젠센은 합치기가 아니라 고르기에 대한 말이다.)

\`\`\`latex
\\textcolor{#5b6fe0}{f}\\big(\\mathbb{E}[\\textcolor{#6f8fa6}{X}]\\big) \\le \\mathbb{E}\\big[\\textcolor{#5b6fe0}{f}(\\textcolor{#6f8fa6}{X})\\big]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5b6fe0}{f} & \\text{볼록함수} \\\\
\\textcolor{#6f8fa6}{X} & \\text{확률변수 (예: 한 사람의 소득)} \\\\
\\mathbb{E}[\\cdot] & \\text{기댓값 (평균)}
\\end{array}
\`\`\`

왜 성립하는가. X가 두 값만 가지면 이것은 앞에서 본 「줄이 곡선 위에 있다」 그 자체다. 값이 여럿이면 줄 대신 여러 점의 무게중심을 쓰면 된다. 무게중심도 곡선 위쪽(볼록한 쪽의 안)에 있다. 두 변의 차이를 **젠센 갭**이라 부른다. X가 한 값에 몰려 있으면 갭은 0이고, 퍼질수록 커진다.

f(x) = x²이면 갭이 바로 분산이다: E[X²] − (E[X])² = Var(X) ≥ 0. KL 발산이 늘 0 이상이라는 증명도 같은 부등식을 f = −log 에 적용한 것이다.

{{viz: ch06/jensen}}

### 파이썬

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
X = rng.normal(3, 2, 1_000_000)          # 평균 3, 표준편차 2

for name, f in [("x²", lambda x: x**2), ("e^(x/4)", lambda x: np.exp(x / 4))]:
    print(f"{name:8s} f(E[X]) = {f(X.mean()):.4f}   E[f(X)] = {f(X).mean():.4f}   갭 = {f(X).mean() - f(X.mean()):.4f}")
print(f"분산 = {X.var():.4f}")
# x²       f(E[X]) = 9.0120   E[f(X)] = 13.0174   갭 = 4.0054
# e^(x/4)  f(E[X]) = 2.1181   E[f(X)] = 2.4004   갭 = 0.2824
# 분산 = 4.0054
\`\`\`

x²의 갭이 분산과 소수 넷째 자리까지 같다(둘 다 4.0054, 표본을 뽑아 온 정규분포 자체의 분산인 모분산은 4).

### 수확

"볼록하면 골짜기가 하나다. 바닥이 한 점인지는 엄격 볼록과 최솟값의 존재가 정한다."

"볼록성이 부등식을 만든다" → 정보이론 부등식들의 뿌리

### 문제 1. 젠센 갭은 분산이다

f(x) = x² 에 대해 젠센 갭 E[X²] − (E[X])² 가 분산임을 보여라. 평균 3, 표준편차 2 인 정규분포에서 표본 10개를 뽑아 갭을 계산하고 분산과 비교하라. 갭이 0이 되는 것은 언제인가?

#### 함께 풀기

〔M06〕 **김민준:** 표본 10개로 갭이 2.1977 나왔어요. 그런데 np.var(X, ddof=1) 은 2.4419 예요. 안 맞아요. 젠센 갭이 분산이라는 게 근사인가요?

**선생님:** 민준 학생이 갭을 계산할 때 E는 무엇으로 계산했어요?

**김민준:** np.mean 이요. 10으로 나눴어요.

**선생님:** ddof=1 은 무엇으로 나눠요?

**김민준:** 9요. 아, 표본분산은 모분산을 추정하려고 n−1로 나누는 거고, 젠센 갭은 "이 10개 점의 분포"에 대한 기댓값이니까 n으로 나눠야 해요. np.var(X) 는 2.1977 로 딱 맞아요.

**선생님:** 젠센 부등식은 어떤 분포에도 성립해요. 표본 10개로 만든 경험분포도 그중 하나고요. 갭이 0이 되는 건요?

**이서연:** x² 는 엄격 볼록이라 X가 한 값에 몰려 있을 때만이에요. 분산 0 이랑 같은 말이고요.

**김민준:** 조교가 성적 평균 낼 때 결석생까지 분모에 넣었는지 안 넣었는지로 반 전체가 헷갈렸던 적 있어요. 분모가 무엇을 세는지부터 확인해야 하는 거네요.

## 르장드르 변환: 그림자로 원본 복원하기

"볼록하면 좋다는 건 알겠다. 부등식도 나온다. 그런데 볼록함수를 '다른 언어로 다시 쓰는' 게 왜 필요한가?"

### 비유 — 극좌표

극좌표 — 원의 넓이를 직교좌표 (x, y)로 적분하면 경계가 제곱근 안에 들어가 번거롭다. 극좌표 (r, φ)로 옮기면 경계가 그냥 "r ≤ R"이다. 적분이 한 줄로 끝난다. 문제가 바뀐 게 아니다. 좌표가 바뀌었을 뿐이다.

푸리에 변환(시간 → 주파수)과 라플라스 변환(미분 → 곱셈)도 같은 전략이다. **여기서 어려운 문제를 저기로 보내서 풀고, 답을 다시 가져온다.**

### 볼록함수에서의 번역

볼록함수 F(θ)를 "각 θ에서의 높이"로 보는 것이 원래 세계다. 같은 함수를 "각 기울기 η의 접선"으로 보는 것이 다른 세계다.

어떤 질문이 쉬워지는가. "기울기가 η인 점은 어디인가?"를 원래 세계에서 물으면 방정식 F′(θ) = η 를 풀어야 한다. 기울기 세계에서는 η가 곧 좌표이니, 그 질문은 읽기만 하면 된다. 확률분포를 다룰 때 이 차이가 실감 난다. 데이터의 평균을 맞추는 분포를 찾는 일이 θ 좌표에서는 방정식 풀기이고, η 좌표에서는 표본 평균을 그대로 적는 일이 된다.

번역이 되돌려지려면 조건이 있다. F가 **엄격 볼록이고 매끄러우면** 기울기 F′이 계속 커지기만 하므로, 점과 기울기가 일대일로 짝지어진다. 볼록하지 않으면 한 기울기에 여러 점이 대응한다. 그때 두 번 번역하면 원래 함수가 아니라 그 함수를 아래에서 받치는 가장 큰 볼록함수(볼록포)가 돌아온다. 곡선의 오목한 굴곡이 지워진다.

그래서 "볼록하면 좋다"에 두 번째 이유가 추가된다.
- 첫 번째: 볼록하면 국소 최소가 전역 최소다 (최적화).
- **두 번째: 볼록하면 번역이 되돌려진다 (쌍대성).** 쌍대성(duality)은 한쪽이 정해지면 다른 쪽이 정해지는 짝 관계다.

### 왜 하필 르장드르인가

극좌표, 푸리에, 라플라스, 르장드르. 전부 번역기다. 르장드르는 두 가지가 다르다.

**재료가 다르다.** 푸리에와 라플라스는 함수를 적분해서 번역한다. 르장드르 변환의 정의는 최댓값 찾기(sup)다. 기울기 η 하나에 대해 모든 θ를 훑어 가장 큰 값을 고른다. 정의 자체는 전역적이다. 그런데 F가 매끄럽고 엄격 볼록이면 그 최댓값이 F′(θ) = η 인 한 점에서 잡힌다. 그때는 그 한 점의 접선 하나로 답을 읽을 수 있다.

**변환 자체가 역변환이다.** 푸리에 변환은 역변환 공식이 따로 있다(부호와 상수가 다르다). 르장드르 변환은 두 번 적용하면 원래 함수가 돌아온다: (F*)* = F. 단 F가 볼록하고 끊김 없이 닫혀 있을 때(닫힌 볼록함수) 이야기다. 이것은 원본과 번역본이 **대등하다**는 뜻이다. 한쪽이 "진짜"이고 다른 쪽이 "그림자"가 아니다. 이 대칭이 곧 만날 θ와 η의 관계다. θ에서 η로 가는 것과 η에서 θ로 돌아오는 것이 같은 연산이다.

그리고 확률의 핵심 함수가 볼록이다. −log가 볼록하고, 지수족, 곧 log p(x) = θ·t(x) − F(θ) 꼴로 쓰이는 분포 가족(t(x)는 데이터에서 모수에 관한 정보를 빠짐없이 담은 요약값, 곧 충분통계량)에서 F(θ)는 확률의 합을 1로 맞추는 정규화 상수의 로그(로그정규화자)인데, 이것도 볼록하다. 르장드르 변환은 그 볼록 구조 위에서 태어난 번역기다.

### 접선의 모음 — 번역기는 어떻게 작동하는가

"번역기가 존재한다고 했다. 어떻게 작동하는가? 함수를 '점의 모음'이 아니라 '접선의 모음'으로 보면 된다."

### 비유 — 울타리와 그림자

울타리와 그림자 — 볼록한 울타리 아래로, 여러 각도의 곧은 막대를 대어 본다. 각도(기울기) η를 정하면 울타리에 딱 닿는 막대가 하나 있다. 그 막대가 세로축과 만나는 곳이 원점에서 얼마나 **아래로** 내려가 있는지를 적는다. 기울기마다 그 깊이를 적은 표가 르장드르 변환 F*(η)다. 표만 있으면, 막대들을 다시 세워 그 위를 감싸는 선으로 울타리를 되살릴 수 있다.

### 정의

\`\`\`latex
\\textcolor{#c0622f}{F^*}(\\textcolor{#e0504a}{\\eta}) = \\sup_{\\textcolor{#3b7de0}{\\theta}} \\big( \\textcolor{#3b7de0}{\\theta}\\,\\textcolor{#e0504a}{\\eta} - \\textcolor{#5b6fe0}{F}(\\textcolor{#3b7de0}{\\theta}) \\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c0622f}{F^*} & \\text{르장드르 변환 (볼록 켤레, 쌍대 함수)} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기울기 변수 (접선의 기울기)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{원래 변수} \\\\
\\textcolor{#5b6fe0}{F} & \\text{볼록함수 (원본)} \\\\
\\sup & \\text{가장 큰 값 (최댓값이 없으면 상한)}
\\end{array}
\`\`\`

읽는 법은 이렇다. 기울기 η인 직선 θη를 긋고, 곡선 F(θ)가 그 직선보다 가장 많이 아래에 있는 곳을 찾는다. 그 최대 간격이 F*(η)다. F가 매끄럽고 엄격 볼록이면 간격이 가장 큰 곳은 기울기가 같아지는 곳, F′(θ) = η 인 점이다. 그 점의 접선은 y = ηθ − F*(η) 이다. y절편이 −F*(η), 곧 비유의 「아래로 내려간 깊이」다.

### 손으로 한 번 — F(θ) = eᶿ

\`\`\`latex
\\frac{d}{d\\textcolor{#3b7de0}{\\theta}}\\big(\\textcolor{#3b7de0}{\\theta}\\,\\textcolor{#e0504a}{\\eta} - e^{\\textcolor{#3b7de0}{\\theta}}\\big) = \\textcolor{#e0504a}{\\eta} - e^{\\textcolor{#3b7de0}{\\theta}} = 0 \\;\\Rightarrow\\; \\textcolor{#3b7de0}{\\theta} = \\log \\textcolor{#e0504a}{\\eta}, \\qquad \\textcolor{#c0622f}{F^*}(\\textcolor{#e0504a}{\\eta}) = \\textcolor{#e0504a}{\\eta} \\log \\textcolor{#e0504a}{\\eta} - \\textcolor{#e0504a}{\\eta}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#3b7de0}{\\theta} & \\text{원래 변수, 여기서는 간격이 가장 큰 점} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기울기 변수 } (\\eta > 0) \\\\
\\textcolor{#c0622f}{F^*} & e^{\\theta} \\text{ 의 르장드르 변환}
\\end{array}
\`\`\`

η > 0 일 때의 답이다. 정의역도 따로 봐야 한다. η = 0 이면 θη − eᶿ = −eᶿ 이고, θ를 한없이 왼쪽으로 보내면 0에 다가가므로 F*(0) = 0 (η log η 의 극한과 같다). η < 0 이면 θ → −∞ 에서 θη 가 한없이 커지므로 F*(η) = +∞ 다.

### 기울기의 역함수는 쌍대의 기울기

접선 한 개가 두 세계를 잇는다. θ에서의 기울기가 η이면, 거꾸로 F*의 η에서의 기울기가 θ다.

\`\`\`latex
\\textcolor{#e0504a}{\\eta} = \\textcolor{#5b6fe0}{F}'(\\textcolor{#3b7de0}{\\theta}) \\iff \\textcolor{#3b7de0}{\\theta} = (\\textcolor{#c0622f}{F^*})'(\\textcolor{#e0504a}{\\eta}), \\qquad (\\textcolor{#5b6fe0}{F}')^{-1} = (\\textcolor{#c0622f}{F^*})'
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5b6fe0}{F}' & \\text{원본의 기울기: } \\theta \\mapsto \\eta \\\\
(\\textcolor{#c0622f}{F^*})' & \\text{쌍대의 기울기: } \\eta \\mapsto \\theta \\\\
\\textcolor{#3b7de0}{\\theta},\\ \\textcolor{#e0504a}{\\eta} & \\text{같은 접선이 가리키는 두 좌표}
\\end{array}
\`\`\`

eᶿ로 확인하면, F′(θ) = eᶿ 의 역함수는 log η 이고, (η log η − η)′ = log η 다. 맞는다. 기울기를 한 번 더 미분하면 두 번 미분한 값끼리도 짝이 맞는다: F″(θ) · (F*)″(η) = 1. 원본이 가파르게 휘는 곳에서 쌍대는 완만하게 휜다.

{{viz: ch06/legendre}}

### 파이썬

\`\`\`python
import numpy as np

theta = np.linspace(-10, 5, 30001)                 # θ 격자 (e^θ 의 sup 이 격자 안에 들도록 넓게)
eta = np.linspace(0.05, 20, 400)

F = np.exp(theta)
Fstar = np.max(eta[:, None] * theta[None, :] - F[None, :], axis=1)      # F*(η) = sup(θη − F)
exact = eta * np.log(eta) - eta
print(f"F* 수치 vs η log η − η : 최대 오차 {np.max(np.abs(Fstar - exact)):.2e}")

th_back = np.linspace(-2, 2, 5)
Fss = np.max(th_back[:, None] * eta[None, :] - Fstar[None, :], axis=1)  # F**(θ) = sup(θη − F*)
for t, v in zip(th_back, Fss):
    print(f"θ = {t:+.1f}   F**(θ) = {v:.4f}   e^θ = {np.exp(t):.4f}")
# F* 수치 vs η log η − η : 최대 오차 5.39e-07
# θ = -2.0   F**(θ) = 0.1346   e^θ = 0.1353
# θ = -1.0   F**(θ) = 0.3674   e^θ = 0.3679
# θ = +0.0   F**(θ) = 1.0000   e^θ = 1.0000
# θ = +1.0   F**(θ) = 2.7182   e^θ = 2.7183
# θ = +2.0   F**(θ) = 7.3890   e^θ = 7.3891
\`\`\`

왕복한 값이 eᶿ로 돌아온다. θ = −2 에서 조금 어긋나는 것은 η 격자 간격(0.05)이 그 점의 기울기 e⁻² ≈ 0.135 에 비해 거칠기 때문이다. 딱 맞는 기울기의 받침 직선이 격자에 없어서, 이웃 기울기의 직선이 조금 낮게 받친다.

### 수확

"어려운 문제를 다른 언어로 번역해서 풀고 돌아오는 전략이 있다. 볼록함수의 세계에서 그 번역기가 르장드르 변환이다. 닫힌 볼록함수라면 변환을 두 번 하면 원본이 돌아온다. 원본과 번역본이 대등하다 — 쌍대성의 뿌리다."

"하나의 볼록함수 = 두 좌표계에서 본 같은 정보. 점의 모음으로 보면 F, 접선의 모음으로 보면 F*."

---

> ### 인물 이야기 — Legendre, Gauss, 그리고 빼앗긴 우선권
>
> ![Adrien-Marie Legendre](/images/portraits/legendre.jpg)
>
> 1805년, 파리. 1752년생인 Adrien-Marie Legendre는 쉰셋을 앞둔 수학자였다. 부유한 집안에서 났지만 1793년 혁명의 소용돌이 속에서 재산을 잃었다. 수학만은 놓지 않았다. 이 해에 그는 *Nouvelles méthodes pour la détermination des orbites des comètes*를 출판했다. 혜성의 궤도를 관측 데이터에서 결정하는 방법에 관한 책이다.
>
> 문제는 이것이었다. 천문학자가 혜성의 위치를 여러 번 관측한다. 관측에는 오차가 있다. 어떤 궤도가 이 관측들과 "가장 잘 맞는가"?
>
> Legendre의 답은 책 끝의 부록에 있었다. 관측값과 예측값의 차이를 제곱해서 합한 것을 최소화하라. 오늘날 우리가 "최소제곱법"이라 부르는 것이다. 기계학습에서 가장 기본적인 손실함수 — MSE — 의 원형.
>
> 1809년. Carl Friedrich Gauss가 천체 운동에 관한 책에 같은 방법을 실으며 1795년부터 이 방법을 써 왔다고 밝혔다. 출판은 Legendre가 먼저였다. Gauss가 앞서 썼다는 근거는 개인 기록과 편지뿐이었다. Legendre는 이에 항의했고, 우선권 다툼은 오래 남았다. 오늘날 교과서는 대체로 둘 모두의 이름을 적는다.
>
> 그런데 Legendre에게는 최소제곱법보다 먼저 만든 것이 있다. 이 장의 주인공인 르장드르 변환이다. 1787년, 그는 편미분방정식의 적분에 관한 논문에서 몽주가 다루던 최소곡면 문제를 풀다가 이 변환을 썼다. 이번에는 이름이 제대로 붙었다.
>
> 한 세대 뒤인 1830년대, William Rowan Hamilton이 역학을 새로 쓰면서 같은 변환이 라그랑지안(속도의 장부)에서 해밀토니안(운동량의 장부)으로 가는 다리가 되었다. 그 뒤 열역학에서 핵심이 되었다. 내부 에너지, 엔탈피, 헬름홀츠 자유에너지, 깁스 자유에너지 — 열역학의 네 퍼텐셜(상황에 따라 골라 쓰는 에너지 장부)은 르장드르 변환으로 서로 이어진다. 같은 물리를 다른 변수로 볼 때마다 르장드르 변환이 번역기가 된다.
>
> 그리고 이제 정보기하학에서 같은 변환이 또 한 번 쓰인다. 모수(분포를 정하는 숫자) 가운데 자연모수 θ(로그 확률 안에서 곱해지는 계수)에서 기대모수 η(충분통계량의 평균으로 매긴 좌표)로의 번역. 로그정규화자 F(θ)에서 음의 엔트로피(엔트로피 −Σ p log p에 음수를 붙인 것) F*(η)로의 번역. 200년 넘은 도구가 확률분포의 기하학에서 양쪽 좌표계를 잇는 다리로 살아 있다.

### 문제 2. 세 함수의 르장드르 변환

다음 세 볼록함수의 르장드르 변환 F*(η)를 손으로 구하고, F*가 유한한 η의 범위(정의역)를 밝혀라. (가) F(θ) = eᶿ  (나) F(θ) = θ log θ (θ > 0)  (다) F(θ) = −log θ (θ > 0) 그리고 θ ∈ [−5, 5] 격자에서 sup를 수치로 찾아 (가)의 답과 비교하라.

#### 함께 풀기

**이서연:** (다)부터 할게요. θη + log θ 를 θ로 미분하면 η + 1/θ = 0, θ = −1/η. 넣으면 F*(η) = −1 − log(−η). 끝이요.

**선생님:** η = 0.5 이면 얼마예요?

**이서연:** −1 − log(−0.5)… 로그 안이 음수네요.

**선생님:** 그럼 η = 0.5 에서 sup이 뭔지 정의로 돌아가서 봐요.

〔S06〕 **이서연:** 0.5θ + log θ 요. θ가 커지면 둘 다 커지니까… 끝없이 커져요. 그러면 θ = −1/η = −2 라는 답은 θ > 0 밖이라서 애초에 후보가 아니었네요. η ≥ 0 이면 F* = +∞, η < 0 일 때만 −1 − log(−η) 예요.

**선생님:** 미분해서 0 놓기는 "후보가 정의역 안에 있을 때"만 답을 줘요. (나)는요?

**이서연:** η − log θ − 1 = 0, θ = exp(η−1) 이고 F*(η) = exp(η−1). 이건 θ가 항상 양수라 모든 η에서 돼요.

〔M05〕 **김민준:** (가)는 제가 격자로 돌렸는데요, η = 2 에서는 −0.6137 로 η log η − η 랑 딱 맞아요. 근데 η = 200 에서는 격자가 851.59, 식이 859.66 이에요. 그리고 η = −1 에서는 격자가 4.99 를 줘요. 식은 +∞ 라는데요.

**선생님:** η = 200 에서 sup이 잡히는 θ는 어디예요?

〔M07〕 **김민준:** θ = log 200 ≈ 5.30 이요. 격자는 5 에서 끝나니까 진짜 최고점을 못 보고 끝에서 멈췄어요. η = −1 도 θ를 왼쪽으로 끝없이 보내야 커지는데 −5 에서 잘렸고요.

**선생님:** 격자 sup는 언제나 진짜 sup 이하예요. 격자 끝에서 최댓값이 나오면 경고로 받아들여야 해요.

**김민준:** 채점 스크립트가 점수 상한을 100점으로 잘라 놓아서 가산점 받은 사람들이 다 100점으로 찍힌 적이 있어요. 끝에 몰린 값은 의심하라는 거네요.

## 펜셸–영 부등식: F와 F*가 맞물리는 곳

"르장드르 변환이 추상적인 장난감인가, 실제로 쓰이는가?"

### 용수철 — 역학 속의 르장드르 변환

용수철에 매달린 공 — 공이 진동한다. 매 순간 속도 v가 있다. 속도에 질량을 곱하면 운동량 p = mv. 같은 운동을 적는 두 가지 방식이다.

라그랑지안 L은 "속도로 쓴 에너지 장부"이고, 해밀토니안 ℋ는 "운동량으로 쓴 에너지 장부"다. 위치 x는 그대로 두고, 속도 v에 대해서만 르장드르 변환을 한다.

\`\`\`latex
\\textcolor{#5b6fe0}{L}(v) = \\tfrac{1}{2} m v^2 - V(x), \\qquad \\textcolor{#e0504a}{p} = \\frac{\\partial \\textcolor{#5b6fe0}{L}}{\\partial v} = m v, \\qquad \\textcolor{#c0622f}{\\mathcal{H}}(\\textcolor{#e0504a}{p}) = \\textcolor{#e0504a}{p}\\, v - \\textcolor{#5b6fe0}{L} = \\frac{\\textcolor{#e0504a}{p}^2}{2m} + V(x)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5b6fe0}{L} & \\text{라그랑지안 (속도의 볼록함수, 원본 자리)} \\\\
\\textcolor{#e0504a}{p} & \\text{운동량 = } L \\text{ 의 기울기 (쌍대 기울기 변수)} \\\\
\\textcolor{#c0622f}{\\mathcal{H}} & \\text{해밀토니안 (} L \\text{ 의 르장드르 변환)} \\\\
v & \\text{속도 (원래 변수)} \\\\
m & \\text{질량} \\\\
V(x) & \\text{위치 } x \\text{ 에서의 위치에너지 (용수철이면 } \\tfrac12 k x^2 \\text{)}
\\end{array}
\`\`\`

기울기가 새 좌표가 되고(p = ∂L/∂v), 새 함수는 "기울기 × 변수 − 원래 함수"다. 앞 절의 정의에서 sup이 잡히는 점을 대입한 것과 똑같다.

실제 운동에서는 p를 언제나 mv로 정의하므로, 매 순간 L(v) + ℋ(p) = pv 가 성립한다. 그러나 이것은 p가 v에서의 기울기일 때만이다. p와 v를 따로 고르면 ½mv² + p²/2m ≥ pv 이고(산술–기하 평균), 등호는 p = mv 일 때뿐이다. 이 부등식이 일반 볼록함수에서 어떻게 생겼는지 아래에서 본다.

질량 m을 키우면 L = ½mv² 를 두 번 미분한 값 m이 커지고, ℋ = p²/2m 을 두 번 미분한 값 1/m은 작아진다. 앞 절의 F″ · (F*)″ = 1 이 여기서 m · (1/m) = 1 이다.

### 파이썬

\`\`\`python
import numpy as np

m, k = 2.0, 8.0                        # 질량, 용수철 상수
dt, steps = 1e-3, 3000
x, v = 1.0, 0.0

print("   t       v        p       L+ℋ      pv")
for n in range(steps + 1):
    p = m * v                                  # 운동량 = L 의 기울기
    L = 0.5 * m * v**2 - 0.5 * k * x**2
    H = p**2 / (2 * m) + 0.5 * k * x**2
    if n % 750 == 0:
        print(f"{n * dt:5.2f}  {v:+.4f}  {p:+.4f}  {L + H:.4f}  {p * v:.4f}")
    v += -k / m * x * dt                       # 속도를 먼저 바꾸고 그 속도로 위치를 옮긴다(반암시적 오일러)
    x += v * dt

v, p = 1.0, 3.0                                # p 를 mv(=2) 와 다르게 고르면
print(f"p≠mv : L+ℋ−pv = {0.5 * m * v**2 + p**2 / (2 * m) - p * v:.4f}  (> 0)")
#    t       v        p       L+ℋ      pv
#  0.00  +0.0000  +0.0000  0.0000  0.0000
#  0.75  -1.9950  -3.9900  7.9600  7.9600
#  1.50  -0.2822  -0.5645  0.1593  0.1593
#  2.25  +1.9551  +3.9101  7.6445  7.6445
#  3.00  +0.5588  +1.1177  0.6246  0.6246
# p≠mv : L+ℋ−pv = 0.2500  (> 0)
\`\`\`

### 펜셸–영 부등식 — 합은 언제나 θη 이상

![볼록함수와 접선 사이의 간격](/images/chapters/ch06-legendre-seesaw.svg)

"원본과 쌍대의 합은 언제나 θη 인가?"

아니다. 정의에서 바로 부등식이 나온다. F*(η)는 모든 θ에 대한 θη − F(θ) 중 가장 큰 값이다. 그러니 아무 θ를 하나 골라도 F*(η) ≥ θη − F(θ) 이다. 옮기면 끝이다.

\`\`\`latex
\\textcolor{#5b6fe0}{F}(\\textcolor{#3b7de0}{\\theta}) + \\textcolor{#c0622f}{F^*}(\\textcolor{#e0504a}{\\eta}) \\ge \\textcolor{#3b7de0}{\\theta}\\,\\textcolor{#e0504a}{\\eta}, \\qquad \\text{등호} \\iff \\textcolor{#e0504a}{\\eta} = \\textcolor{#5b6fe0}{F}'(\\textcolor{#3b7de0}{\\theta})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5b6fe0}{F} & \\text{볼록함수 (미분 가능하다고 둔다)} \\\\
\\textcolor{#c0622f}{F^*} & \\text{그 르장드르 변환} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{원래 변수 (아무 값)} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기울기 변수 (아무 값)}
\\end{array}
\`\`\`

이것을 **펜셸–영 부등식**이라 부른다. 등호는 sup이 바로 그 θ에서 잡힐 때, 곧 η = F′(θ) 일 때 성립한다. F가 미분 불가능한 꺾인 점에서는 그 점을 받치는 기울기가 여러 개라서, 등호를 만드는 η도 여럿이다(아래 문제 3).

### 비유 — 퍼즐 조각

퍼즐 조각 — θ 조각과 η 조각을 아무렇게나 가져와 붙이면 틈이 생긴다: F + F* − θη > 0. η가 θ에서의 기울기일 때만 조각이 딱 맞물리고 틈이 0이 된다.

"한쪽이 커지면 다른 쪽이 작아지는 시소"로 생각하면 틀린다. F = θ²/2 이면 F* = η²/2 이고, 맞물린 짝 η = θ 에서 둘 다 θ²/2 다. 함께 커지고 함께 작아진다. 합이 θη로 고정되는 것은 맞물린 짝 위에서뿐이고, 그 θη도 θ를 따라 변한다.

틈의 크기는 그 자체로 쓸모가 있다. θ′ 을 η = F′(θ′) 인 점이라 하면, 틈은 F(θ) − F(θ′) − F′(θ′)(θ − θ′), 곧 θ′ 의 접선과 곡선 사이의 θ에서의 높이 차다. 그림의 「간격」이 바로 이것이다. 이 간격을 브레그만 발산이라 부른다.

{{viz: ch06/fenchel-young}}

### 파이썬

\`\`\`python
import numpy as np

pairs = {
    "e^θ":          (np.exp, np.exp, lambda e: e * np.log(e) - e, (0.01, 20)),
    "log(1+e^θ)":   (lambda t: np.log1p(np.exp(t)), lambda t: 1 / (1 + np.exp(-t)),
                     lambda e: e * np.log(e) + (1 - e) * np.log(1 - e), (0.001, 0.999)),
    "θ²/2":         (lambda t: t**2 / 2, lambda t: t, lambda e: e**2 / 2, (-5, 5)),
}
rng = np.random.default_rng(0)
for name, (F, dF, Fs, (lo, hi)) in pairs.items():
    th, et = rng.uniform(-3, 3, 100_000), rng.uniform(lo, hi, 100_000)
    gap = F(th) + Fs(et) - th * et                           # 아무 짝
    t0 = rng.uniform(-3, 3, 5)
    tight = np.abs(F(t0) + Fs(dF(t0)) - t0 * dF(t0)).max()    # 맞물린 짝 η = F'(θ)
    print(f"{name:11s} 아무 짝의 최소 틈 {gap.min():.1e}   맞물린 짝의 틈 {tight:.1e}")
# e^θ         아무 짝의 최소 틈 2.7e-08   맞물린 짝의 틈 5.6e-17
# log(1+e^θ)  아무 짝의 최소 틈 1.6e-10   맞물린 짝의 틈 2.2e-16
# θ²/2        아무 짝의 최소 틈 6.3e-10   맞물린 짝의 틈 0.0e+00
\`\`\`

아무 짝에서는 틈이 음수로 내려가지 않고, 맞물린 짝에서는 부동소수점 오차 수준으로 0이다.

### 수확

"역학의 라그랑지안 → 해밀토니안도 르장드르 변환이다. L + ℋ = pv 는 p가 v에서의 기울기일 때만 성립하는 등식이다."

"원본과 쌍대의 합은 언제나 θη 이상이다. 기울기로 맞물린 짝에서만 등호가 된다. 그 틈이 곧 발산이다."

### 문제 3. 펜셸–영과 꺾인 점

(가) 정의에서 F(θ) + F*(η) ≥ θη 를 증명하라. (나) F(θ) = |θ| 의 F*를 구하고, 등호가 성립하는 (θ, η) 쌍을 모두 찾아라.

#### 함께 풀기

**김민준:** (가)는 확인했어요. eᶿ 에서 θ를 다섯 개 골라 η = eᶿ 를 넣으니까 F + F* − θη 가 다 1e-16 이에요. 성립해요.

**선생님:** 민준 학생이 넣은 η는 전부 어떤 η였어요?

〔M04〕 **김민준:** …전부 기울기로 맞물린 η네요. 등호가 되는 경우만 넣었어요. 부등식은 다른 η에 대한 주장인데.

**이서연:** 증명은 한 줄이야. F*(η)는 sup이니까 어떤 θ를 넣은 θη − F(θ)보다도 크거나 같아. 그걸 옮기면 돼. 등호는 η = F′(θ) 일 때만이고.

**선생님:** (나)에서도 그래요?

**이서연:** |θ| 는 θ > 0 이면 기울기 1, θ < 0 이면 −1. F*(η) = sup(θη − |θ|) 는 |η| ≤ 1 이면 0, 넘으면 +∞ 예요. 등호는 θ > 0, η = 1 이거나 θ < 0, η = −1 이에요.

**선생님:** θ = 0 은요?

**이서연:** F′(0) 이 없으니까 등호가 안… 잠깐, F(0) + F*(η) = 0 + 0 = 0 이고 θη 도 0 이에요. |η| ≤ 1 이면 전부 등호예요.

〔S08〕 **이서연:** 꺾인 점에서는 그 점을 받치는 직선이 기울기 −1부터 1까지 전부라서, 맞물리는 η가 구간 하나 통째로예요. "η = F′(θ) 일 때만"은 미분 가능한 점에서만 맞는 말이었어요.

**선생님:** 그 구간을 부분기울기(subgradient)라고 불러요. 편미분과는 상관없고, 받치는 직선의 기울기 모음이라는 뜻이에요. 매끄러운 점에서는 부분기울기가 보통 기울기 하나로 줄어들죠.

**이서연:** 해석학에서 좌미분과 우미분이 다른 점이 생각나요. 그 사이의 기울기가 전부 "받치는 직선"이 되는 거네요.

### 문제 4. 오목한 굴곡을 가진 함수 (킬러)

F(θ) = θ⁴ − 2θ² 는 볼록이 아니다(|θ| < 1/√3 에서 F″ < 0). (가) F*(0) 과, 그 sup이 잡히는 θ를 모두 구하라. (나) F**(θ) = (F*)*(θ) 를 수치로 구해 F와 비교하라. 어디서 다르고, F**는 어떤 함수인가? (다) 이것을 속도 v의 라그랑지안 L(v) = v⁴ − 2v² 라고 하자. v = 0.5 에서 p = L′(v) 로 두면 L(v) + ℋ(p) = pv 가 성립하는가? 어떤 속도에서 이 등식이 성립할 수 있는가?

#### 함께 풀기

**선생님:** (가)부터요.

**이서연:** F*(0) = sup(−θ⁴ + 2θ²) 예요. 미분하면 −4θ³ + 4θ = 0, θ = 0, ±1. θ = ±1 에서 1 이니까 F*(0) = 1, 잡히는 점은 두 개예요.

**선생님:** 기울기 0인 받침 직선이 곡선에 두 군데서 닿는다는 거예요. 볼록함수에서 그런 일이 있었어요?

**이서연:** 엄격 볼록이면 한 기울기에 한 점이었어요. 여기선 일대일이 깨졌어요.

〔M05〕 **김민준:** (나)는 돌려 봤는데 버그가 있어요. F*를 격자로 구하고 그걸 다시 변환했는데, θ = 0 에서 F**가 −1 이 나와요. F(0) 은 0 인데요. θ = 0.5 에서도 F는 −0.4375 인데 F**는 −1 이에요.

**선생님:** θ = 1.5 와 2 는요?

**김민준:** 거기선 0.5625, 8.0 으로 똑같아요. 틀린 건 |θ| < 1 에서만이에요. 격자 문제인가 싶어서 촘촘하게 해도 −1 이 그대로예요.

**선생님:** 구간 [−1, 1] 에서 F**는 어떤 모양이에요?

**김민준:** 전부 −1 이에요. 평평해요.

**선생님:** F(±1) = −1 이에요. 두 점을 줄로 이으면요?

〔M08〕 **김민준:** 높이 −1 인 수평선이요. F**는 가운데 솟은 혹을 그 줄로 덮어 버린 거예요. 버그가 아니라, 두 번 변환하면 원래 함수가 아니라 아래에서 받치는 가장 큰 볼록함수가 나오는 거네요.

**선생님:** 볼록포라고 불러요. 접선의 모음은 볼록한 부분만 기억할 수 있어요. 혹 부분에는 곡선 아래에서 닿는 직선이 없으니까요.

**김민준:** 조별 보고서를 요약본만 보고 다시 쓰면, 요약에 안 들어간 곁가지는 사라지는 것 같아요. 요약이 기억하는 것만 돌아와요.

**선생님:** 서연 학생, (다)요.

**이서연:** p = L′(0.5) = 4(0.125) − 2 = −1.5 예요. ℋ(−1.5) = sup(−1.5v − v⁴ + 2v²) 를 구하면 2.621 이고, v ≈ −1.151 에서 잡혀요. L(0.5) = −0.4375, pv = −0.75 니까 L + ℋ − pv = −0.4375 + 2.621 + 0.75 = 2.934 예요. 0이 아니에요.

〔S05〕 **이서연:** 그런데 이상해요. 용수철에서는 L + ℋ = pv 가 매 순간 성립한다고 했잖아요. 운동하는 공은 v = 0.5 를 지날 수 있는데, 그 순간에는 등식이 깨지는 건가요? 물리가 깨지는 건 아니잖아요.

**선생님:** 용수철에서 등식이 성립한 이유가 뭐였죠?

**이서연:** p = mv 가 v에서의 기울기이고, ½mv² 가 볼록이라 그 기울기에서 sup이 v 한 점에서 잡혔기 때문이에요.

**선생님:** 여기서 p = −1.5 가 되는 v는 몇 개예요?

**이서연:** 4v³ − 4v = −1.5 를 풀면… −1.151, 0.5, 0.651 세 개요. 그중 sup이 잡히는 건 −1.151 뿐이에요.

〔S09〕 **이서연:** 운동량 −1.5 하나에 속도가 셋이에요. 해밀토니안은 운동량만 보고 에너지를 적는 장부인데, 그 장부에는 −1.151 만 기록되고 0.5 와 0.651 은 적힐 자리가 없어요. 물리가 깨진 게 아니라, 이 라그랑지안은 운동량의 언어로 번역이 안 되는 거예요. 등식이 성립하는 속도는 L 이 볼록포와 겹치는 곳, |v| ≥ 1 뿐이에요.

〔T13〕 **선생님:** 그래서 역학에서는 라그랑지안이 속도에 대해 볼록해야 해밀턴 형식으로 넘어갈 수 있다는 조건을 둬요. 르장드르 조건이라고 해요. 오늘 두 사람이 다른 문으로 같은 방에 들어왔어요. 민준 학생은 F**가 볼록포라는 걸 숫자로, 서연 학생은 그 볼록포 밖의 속도가 운동량 장부에서 사라진다는 걸 물리로요.

**이서연:** 선형대수에서 역행렬이 없는 행렬을 만나면 "정보가 사라지는 방향"을 찾으라고 배웠어요. 여기서는 오목한 굴곡이 그 방향이에요.
`,H4=`# 두 눈을 동시에

---

기하학의 눈으로 우리는 공간과 길을 보았다. 점이 있고, 거리가 있고, 같은 두 점을 잇는 길이 두 개 있었다.

정보의 눈으로 우리는 놀라움과 볼록성을 보았다. 놀라움이 숫자가 되었고, 그 숫자가 부등식을 만들었고, 볼록함수를 접선의 언어로 다시 쓸 수 있었다.

지금까지 두 눈은 따로 떠 있었다. 기하학은 기하학대로, 정보는 정보대로.

이제 두 눈을 동시에 뜨면, 풍경이 달라진다.

정규분포, 푸아송 분포, 베르누이 분포. 겉모양이 전혀 다른 이 분포들 밑에 같은 골격이 숨어 있다. 그 골격의 한가운데에 볼록함수 하나가 앉아 있고, 그 볼록함수가 좌표를 만들고, 좌표가 두 개의 길을 만든다.

기하학의 좌표와 정보의 볼록성이 하나의 대상 안에서 만나는 지점.

그것이 지수족이다.

여기서부터는 기하학과 정보 양쪽을 동시에 사용한다. 한쪽 눈만으로는 보이지 않던 구조가 보이기 시작한다.

---
`,j4=`# 지수족

볼록함수 F가 있으면 그 기울기를 새 좌표로 삼을 수 있다. 기울기로 맞물린 짝에서는 F와 그 쌍대 F*(F가 정해지면 따라 정해지는 짝 함수)의 합이 두 좌표의 곱이 된다. 역학에서도, 최적화에서도 이 구조가 되풀이해 나타난다.

그렇다면 이렇게 물을 수 있다. 만약 F가 확률분포에서 태어난 함수라면? 만약 θ가 분포의 모양을 결정하는 모수(분포를 정하는 숫자)라면?

그 질문의 답이 이 장에 있다. 정규분포, 푸아송 분포, 베르누이 분포 — 겉모양이 전혀 다른 이 분포들이 전부 같은 골격을 공유한다. 그 골격의 한가운데에 볼록함수 F(θ)가 앉아 있다. 기울기와 쌍대라는 추상적 등식이 여기서 구체적 의미를 얻는다.

![최대 엔트로피 원리와 지수족](/images/chapters/ch07-thermos-maxent.svg)

## 지수족: 네 부품으로 짜인 분포의 가족

베르누이, 푸아송, 가우시안. 동전, 한 시간에 걸려 오는 전화 수, 키의 분포. 이것들은 세상에서 하는 일이 전혀 다르다. 그런데 수학자들은 이 셋을 같은 가족이라고 부른다. 어디가 같다는 걸까?

### 레고 — 뒤집어 보면 같은 결합부

성, 우주선, 자동차. 겉모양은 완전히 다르다. 그런데 뒤집어 보면 결합부가 같다. 같은 돌기와 홈. 같은 규격.

지수족 분포도 그렇다. 겉모양(종 모양, 계단 모양, L자 모양)은 다르지만 뒤집어 보면 네 개의 부품이 같은 규칙으로 끼워져 있다.

\`\`\`latex
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}(\\textcolor{#6f8fa6}{x}) = \\exp\\!\\big(\\textcolor{#3b7de0}{\\theta} \\cdot \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) + \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}} & \\text{자연모수 } \\theta \\text{ 가 정하는 분포 (가족의 한 명)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 한 개} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수 — 분포의 성격을 정하는 손잡이} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량 — 데이터에서 뽑아내는 요약} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 — 전체 확률이 1이 되게 맞추는 균형추} \\\\
\\textcolor{#0e93b0}{k} & \\text{캐리어 (기저측도) — } \\theta \\text{ 와 무관하게 } x \\text{ 마다 붙는 바탕 무게}
\\end{array}
\`\`\`

균형추 F는 나머지 세 부품이 정한다. 모든 x에 대해 더해서 1이 되어야 하므로,

\`\`\`latex
\\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\log \\sum_{\\textcolor{#6f8fa6}{x}} \\exp\\!\\big(\\textcolor{#3b7de0}{\\theta} \\cdot \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}) + \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 (연속이면 합 대신 적분)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수} \\\\
\\textcolor{#0e93b0}{t},\\ \\textcolor{#0e93b0}{k} & \\text{충분통계량, 캐리어} \\\\
\\textcolor{#6f8fa6}{x} & \\text{가능한 모든 데이터 값}
\\end{array}
\`\`\`

이 합이 유한한 θ들만 쓸 수 있다. 그 범위를 자연모수 공간이라 부른다.

### 손으로 한 번 — 베르누이

동전의 앞면 확률이 μ이면 p(x) = μˣ(1 − μ)¹⁻ˣ (x는 0 또는 1)이다. 로그를 씌워 x에 대해 정리한다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#2e9e6e}{\\mu}^{\\textcolor{#6f8fa6}{x}}(1-\\textcolor{#2e9e6e}{\\mu})^{1-\\textcolor{#6f8fa6}{x}} &= \\exp\\!\\Big(\\textcolor{#6f8fa6}{x} \\log\\frac{\\textcolor{#2e9e6e}{\\mu}}{1-\\textcolor{#2e9e6e}{\\mu}} + \\log(1-\\textcolor{#2e9e6e}{\\mu})\\Big) \\\\
\\textcolor{#3b7de0}{\\theta} &= \\log\\frac{\\textcolor{#2e9e6e}{\\mu}}{1-\\textcolor{#2e9e6e}{\\mu}}, \\qquad \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}) = \\textcolor{#6f8fa6}{x} \\\\
\\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) &= \\log(1 + e^{\\textcolor{#3b7de0}{\\theta}}), \\qquad \\textcolor{#0e93b0}{k} = 0
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{\\mu} & \\text{앞면 확률 (익숙한 모수)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{던진 결과, 앞면 1 · 뒷면 0} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수 = 로그 오즈, 앞면 대 뒷면 확률 비의 로그 (로짓)} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#0e93b0}{k} & \\text{캐리어 (여기서는 0)}
\\end{array}
\`\`\`

log(1 − μ) = −log(1 + eᶿ) 이므로 F가 저렇게 나온다. θ는 기계학습의 로짓이다. 시그모이드는 θ에서 μ로 돌아가는 길이다.

### 세 가족의 부품

- 베르누이(μ): θ = log(μ/(1−μ)), t(x) = x, F(θ) = log(1 + eᶿ), k(x) = 0
- 푸아송(λ): θ = log λ, t(x) = x, F(θ) = eᶿ, k(x) = −log x!
- 가우시안(μ, σ²): θ = (μ/σ², −1/(2σ²)), t(x) = (x, x²), F(θ) = −θ₁²/(4θ₂) + ½ log(−π/θ₂), k(x) = 0

푸아송의 캐리어를 보라. λˣexp(−λ)/x! 에서 1/x! 은 θ와 아무 상관 없이 x마다 붙는다. 이것을 빼먹고 exp(θx − eᶿ)만 쓰면 확률의 합이 1이 아니라 무한대로 간다. 그러니 "θ, t, F만 바꿔 끼우면 전부 나온다"는 말은 반만 맞다. 부품은 넷이다.

{{viz: ch07/flashcards}}

### 파이썬

\`\`\`python
import numpy as np
from math import lgamma

def expfam(theta, t, F, k, xs):
    """p(x) = exp(θ·t(x) − F(θ) + k(x)) — 부품 넷을 끼우는 함수 하나"""
    return np.exp(theta * t(xs) - F(theta) + k(xs))

xs_b = np.array([0, 1])
mu = 0.3
pb = expfam(np.log(mu / (1 - mu)), lambda x: x, lambda th: np.log1p(np.exp(th)), lambda x: 0 * x, xs_b)
print("베르누이", np.round(pb, 4), " 합", pb.sum())

xs_p = np.arange(0, 60)
logfact = np.array([lgamma(x + 1) for x in xs_p])
lam = 3.0
pp = expfam(np.log(lam), lambda x: x, np.exp, lambda x: -logfact, xs_p)
print("푸아송  ", np.round(pp[:5], 4), " 합", round(pp.sum(), 6), " 평균", round((xs_p * pp).sum(), 6))

no_k = expfam(np.log(lam), lambda x: x, np.exp, lambda x: 0 * x, xs_p)
print(f"캐리어를 뺀 푸아송의 합 (x < 60) = {no_k.sum():.3e}")
# 베르누이 [0.7 0.3]  합 1.0
# 푸아송   [0.0498 0.1494 0.224  0.224  0.168 ]  합 1.0  평균 3.0
# 캐리어를 뺀 푸아송의 합 (x < 60) = 1.055e+27
\`\`\`

### 충분통계량 — 데이터를 요약하는 부품

네 부품 가운데 t(x)는 데이터에서 무엇을 뽑아내는 자리일까? 데이터 100만 개를 숫자 세 개로 요약해도 정보 손실이 없다고 하면, 직관적으로는 말이 안 된다. 어떻게 가능할까?

야구 타자의 기록 — 시즌 전체의 모든 타석을 영상으로 가지고 있다고 하자. 하지만 타율을 계산하려면 두 숫자면 된다: 안타 수와 타석 수. 영상을 지워도 타율에 관해서는 아무것도 잃지 않는다. 타석 수를 빼먹으면 안 된다는 점도 보라. 안타 수만으로는 타율을 모른다.

독립인 데이터 n개의 로그우도(모형이 관측된 데이터에 준 확률의 로그)를 지수족 골격으로 쓰면 이렇다.

\`\`\`latex
\\sum_{i=1}^{n} \\log \\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}(\\textcolor{#6f8fa6}{x}_i) = \\textcolor{#3b7de0}{\\theta} \\cdot \\sum_{i=1}^{n} \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}_i) - n\\,\\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) + \\sum_{i=1}^{n} \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x}_i)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}} & \\text{지수족의 한 분포} \\\\
\\textcolor{#6f8fa6}{x}_i & i\\text{ 번째 데이터} \\\\
n & \\text{데이터 개수} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수} \\\\
\\textcolor{#0e93b0}{t},\\ \\textcolor{#0e93b0}{k} & \\text{충분통계량, 캐리어} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자}
\\end{array}
\`\`\`

θ가 데이터와 만나는 곳은 첫 항 하나뿐이고, 거기서 데이터는 합 Σt(xᵢ)로만 등장한다. 둘째 항은 개수 n만 안다. 셋째 항은 θ와 상관이 없다. 그러니 θ에 대해 알아낼 수 있는 모든 것은 (n, Σt(xᵢ)) 안에 있다. 가우시안이면 t(x) = (x, x²) 이므로 (n, Σx, Σx²), 숫자 세 개다. 수십만 명의 키를 평균과 표준편차 (174, 5.8) 한 쌍으로 요약해도 되는 것이 이 때문이다.

### 고정된 크기의 요약 — 지수족만의 성질

모든 분포족에 충분통계량이 있긴 하다. 최악의 경우 데이터 전체(순서만 버린 것)가 그것이다. 지수족에서는 n이 아무리 커져도 요약의 크기가 고정된다.

거꾸로도 거의 맞다. 분포가 0이 아닌 범위(받침)가 모수에 따라 변하지 않는 매끄러운 족에서, 표본 크기와 상관없이 고정된 개수의 충분통계량을 갖는 것은 지수족뿐이다. 1935–36년에 Darmois, Koopman, Pitman이 각각 보인 결과라 세 사람의 이름을 붙여 부른다.

조건이 빠지면 틀린다. 균등분포 U(0, θ)는 최댓값 max xᵢ 하나가 충분통계량이지만 지수족이 아니다. θ가 바뀌면 분포가 0이 아닌 구간 자체가 바뀌기 때문이다.

### 파이썬 — 충분통계량만 남기기

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
data = rng.normal(174, 5.8, 1_000_000)

n, s1, s2 = len(data), data.sum(), (data**2).sum()     # 충분통계량 (n, Σx, Σx²)
del data                                                # 원본은 버린다

mu = s1 / n
sigma = np.sqrt(s2 / n - mu**2)
print(f"(n, Σx, Σx²) 만으로 복원: μ̂ = {mu:.4f}, σ̂ = {sigma:.4f}")

# 같은 (n, Σx, Σx²) 를 가진 두 데이터셋은 어떤 (μ, σ) 에서도 로그우도가 같다
x1 = np.array([1.0, 2.0, 6.0])
c = x1.mean(); r = np.sqrt(((x1 - c)**2).sum())
u = np.array([1, -2, 1]) / np.sqrt(6)                  # 합이 0 인 단위벡터
x2 = c + r * u                                           # 같은 Σx, Σx² 를 갖는 다른 셋
loglik = lambda x, m, s: np.sum(-0.5 * ((x - m) / s)**2 - np.log(s * np.sqrt(2 * np.pi)))
print("두 셋:", x1, np.round(x2, 4))
for m, s in [(0, 1), (3, 2), (5, 0.7)]:
    print(f"  μ={m}, σ={s}: {loglik(x1, m, s):.4f}  {loglik(x2, m, s):.4f}")
# (n, Σx, Σx²) 만으로 복원: μ̂ = 174.0058, σ̂ = 5.8039
# 두 셋: [1. 2. 6.] [ 4.5275 -0.0551  4.5275]
#   μ=0, σ=1: -23.2568  -23.2568
#   μ=3, σ=2: -6.5863  -6.5863
#   μ=5, σ=0.7: -28.2174  -28.2174
\`\`\`

### 수확

"지수족 = 같은 골격(θ, t(x), F, k)을 공유하는 분포의 가족. 표준 꼴(정준형): p(x) = exp(θ·t(x) − F(θ) + k(x))."

"지수족이 특별한 이유 = 표본이 늘어도 크기가 고정된 충분통계량 (n, Σt(xᵢ)). 받침이 모수와 무관하다는 조건 아래에서는 그런 족이 지수족뿐이다."

### 문제 1. 푸아송의 네 번째 부품

푸아송 분포 p(x) = λˣexp(−λ)/x! 를 정준형 exp(θ·t(x) − F(θ) + k(x)) 로 쓰고 네 부품을 밝혀라. 캐리어를 빼면 무엇이 잘못되는지 수치로 보여라.

#### 함께 풀기

**김민준:** λˣ = exp(x log λ) 니까 θ = log λ, t(x) = x, F(θ) = eᶿ 요. p(x) = exp(θx − eᶿ). 끝이요.

**선생님:** λ = 3 에서 그 식을 x = 0부터 59까지 더해 봐요.

〔M05〕 **김민준:** 1.06 × 10²⁷ 이요… 확률의 합이요? x를 늘리면 더 커져요. 3ˣ 이 끝없이 커지니까요. x! 을 빼먹었어요.

**이서연:** x! 은 θ랑 상관없으니까 F에 넣으면 되지 않아? F(θ) = eᶿ + log x! 이렇게.

**선생님:** 서연 학생, F는 무엇의 함수여야 하죠?

〔S06〕 **이서연:** θ만의 함수요. 전체 확률을 1로 맞추는, θ마다 숫자 하나인 균형추니까… log x! 을 넣으면 x마다 균형추가 달라져요. 그건 균형추가 아니에요.

**이서연:** 그리고 F에 x가 섞이면 ∇F = E[t] 도 성립할 수가 없어요. F를 θ로 미분한 것이 데이터마다 달라지잖아요. 그래서 x에만 의존하는 조각은 따로 k(x) 자리가 있는 거네요.

**선생님:** 맞아요. 이 자리를 캐리어, 또는 기저측도라고 해요. θ가 무엇이든 x마다 깔려 있는 바탕 무게예요.

**김민준:** 과제 채점표에서 기본 출석 점수는 과제 점수가 몇이든 따로 붙는 것 같은 거네요. 그걸 과제 점수 계산식에 넣으면 식이 꼬여요.

## 자연모수 θ: 지수 안에 들어앉는 좌표

같은 정규분포를 (μ, σ)로도 쓸 수 있고 다른 방식으로도 쓸 수 있다면, 어떤 방식이 분포의 '진짜 주소'일까?

### 집 주소 — 행정 구역의 언어

"서울시 강남구 역삼동 123" 이 주소는 행정 구역의 언어다. 주소를 보면 "강남구에 있구나"는 바로 알지만, "역삼역에서 몇 미터인가"는 바로 안 보인다.

θ는 지수족의 "행정 주소"다. 골격 exp(θ·t(x) − F(θ) + k(x))에서 θ는 지수 안에 직접 들어앉는 좌표다. 그래서 자연모수(natural parameter)라 부른다.

### 손잡이의 느낌

가우시안의 θ = (μ/σ², −1/(2σ²)) 를 거꾸로 풀면 이렇다.

\`\`\`latex
\\textcolor{#2e9e6e}{\\sigma}^2 = -\\frac{1}{2\\textcolor{#3b7de0}{\\theta}_2}, \\qquad \\textcolor{#2e9e6e}{\\mu} = \\textcolor{#3b7de0}{\\theta}_1 \\textcolor{#2e9e6e}{\\sigma}^2 = -\\frac{\\textcolor{#3b7de0}{\\theta}_1}{2\\textcolor{#3b7de0}{\\theta}_2}, \\qquad \\textcolor{#3b7de0}{\\theta}_2 < 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{\\mu},\\ \\textcolor{#2e9e6e}{\\sigma} & \\text{평균, 표준편차} \\\\
\\textcolor{#3b7de0}{\\theta}_1 & \\text{자연모수 첫 성분 } (x \\text{ 의 계수)} \\\\
\\textcolor{#3b7de0}{\\theta}_2 & \\text{자연모수 둘째 성분 } (x^2 \\text{ 의 계수, 음수여야 적분이 유한)}
\\end{array}
\`\`\`

θ₁만 움직이면 σ는 그대로이고 평균만 μ = θ₁σ² 로 움직인다. θ₂를 움직이면 폭이 바뀐다. 그런데 θ₁ ≠ 0 이면 평균도 함께 끌려간다. μ = −θ₁/(2θ₂) 에 θ₂가 들어 있기 때문이다. (μ, σ)에서 "평균만", "폭만"이었던 손잡이가 θ에서는 다르게 묶여 있다.

θ가 직관적이지 않은 대신 얻는 것이 있다. 두 분포의 로그를 섞은 뒤 합이 1이 되게 다시 나누는(정규화) 길, 곧 곱셈의 길이 θ 좌표에서 직선이 된다. log p와 log q를 (1−t) : t 로 섞으면 지수 안의 θ가 그대로 (1−t)θ_p + tθ_q 로 섞이기 때문이다.

{{viz: ch07/two-handles}}

### 파이썬

\`\`\`python
import numpy as np

def to_theta(mu, sigma):
    return mu / sigma**2, -1 / (2 * sigma**2)

def from_theta(t1, t2):
    s2 = -1 / (2 * t2)
    return float(t1 * s2), float(np.sqrt(s2))

for mu, sigma in [(0, 1), (3, 2), (174, 5.8)]:
    t1, t2 = to_theta(mu, sigma)
    print(f"(μ, σ) = ({mu}, {sigma})  →  θ = ({t1:.4f}, {t2:.4f})  →  {tuple(round(v, 4) for v in from_theta(t1, t2))}")

t1, t2 = to_theta(3, 2)
print("θ₁ 만 두 배:", tuple(round(v, 4) for v in from_theta(2 * t1, t2)))
print("θ₂ 만 두 배:", tuple(round(v, 4) for v in from_theta(t1, 2 * t2)))
# (μ, σ) = (0, 1)  →  θ = (0.0000, -0.5000)  →  (0.0, 1.0)
# (μ, σ) = (3, 2)  →  θ = (0.7500, -0.1250)  →  (3.0, 2.0)
# (μ, σ) = (174, 5.8)  →  θ = (5.1724, -0.0149)  →  (174.0, 5.8)
# θ₁ 만 두 배: (6.0, 2.0)
# θ₂ 만 두 배: (1.5, 1.4142)
\`\`\`

θ₁을 두 배로 하면 σ는 그대로 2이고 평균만 6이 된다. θ₂를 두 배로 하면 σ가 1.414로 줄면서 평균도 1.5로 끌려간다.

### 수확

"θ는 지수족의 골격에 맞춘 좌표. 곱셈의 길이 직선이 되는 좌표. 손잡이가 (μ, σ)와 다르게 묶여 있다."

---

> ### 인물 이야기 — E.T. Jaynes와 "확률은 논리다"
>
> ![E.T. Jaynes](/images/portraits/et-jaynes.jpg)
>
> 1957년, 캘리포니아. 스탠퍼드 대학교. 서른네 살의 물리학자 Edwin Thompson Jaynes가 *Physical Review*에 두 편의 논문을 발표했다. 제목은 "Information Theory and Statistical Mechanics." 이 논문이 던진 질문은 도발적이었다.
>
> 통계역학의 기초는 무엇인가? Boltzmann 이래로 답은 "역학"이었다. 분자들이 충돌하고 튕기는 역학적 과정의 결과로 맥스웰-볼츠만 분포가 나온다는 것. 에르고딕 가설, 분자 혼돈 가설 — 물리적 가정들이 필요했다.
>
> Jaynes의 답은 완전히 달랐다. 물리가 아니라 추론이다. 에너지의 평균값만 알고 나머지는 모를 때, "가장 치우치지 않은 추측"이 무엇인가를 묻는다면 — 엔트로피(결과를 얼마나 모르는지, 분포가 얼마나 고르게 퍼졌는지 재는 양)를 최대화하는 분포를 선택해야 한다. 그 결과가 바로 볼츠만 분포다.
>
> 이것이 최대 엔트로피 원리(MaxEnt)다. 그리고 이 원리가 지수족과 직접 연결된다. 충분통계량의 기댓값을 제약으로 걸고 엔트로피를 최대화하면, 해가 있을 때 그 해는 지수족 분포다. 제약마다 붙는 라그랑주 승수(제약을 목적식에 더할 때 곱하는 계수)가 자연모수 θ가 된다. 지수족은 "주어진 정보만 반영하고 나머지에 대해 최대한 무지한" 분포다.
>
> 이 관점은 격렬한 논쟁을 불렀다. 빈도주의 통계학자들은 확률이 객관적 빈도라고 믿었다. Jaynes는 확률이 지식 상태의 표현이라고 주장했다.
>
> 1960년, 그는 세인트루이스의 워싱턴 대학교로 자리를 옮겨 남은 생을 그곳에서 보냈다. 생전에 완성하지 못한 저서 *Probability Theory: The Logic of Science*는 1998년 그가 세상을 떠난 뒤, 제자 Larry Bretthorst가 원고를 정리해 2003년에 출판되었다. 부제가 말하듯 이 책은 확률론을 논리의 확장으로 세운다. 그 주장은 지금도 논란의 대상이지만, MaxEnt 원리 자체는 기계학습, 통계물리학, 정보기하학의 교차점에서 살아 있다.
>
> Boltzmann의 엔트로피와 Shannon의 엔트로피는 같은 꼴의 식이다. Jaynes는 그것이 우연이 아님을 명시적으로 보여준 사람이다. 그리고 그 연결의 매듭이 바로 이 장의 주인공 — 지수족 — 이다.

## 기대모수 η: 데이터에서 바로 읽히는 좌표

θ가 '행정 주소'라면, 같은 분포를 데이터에서 바로 읽어 낼 수 있는 좌표는 없을까?

### 집의 GPS — 평균 낼 수 있는 좌표

"37.5°N, 127.0°E" GPS 좌표는 물리적 위치를 직접 가리킨다. 그리고 두 집의 GPS를 평균 내면 두 집의 중간 지점이 된다.

η는 분포의 "GPS 좌표"다. 충분통계량의 기댓값이다. 가우시안이면 η = (E[x], E[x²]) = (μ, μ² + σ²). 데이터의 평균과 이차모멘트. 데이터를 보면 바로 계산할 수 있다.

### F의 기울기가 η다

정규화 조건 Σ p_θ(x) = 1 을 θ로 미분하면 한 줄로 나온다. Σ (t(x) − ∇F(θ)) p_θ(x) = 0, 곧 ∇F(θ) = E[t(x)]. 한 번 더 미분하면 공분산이 나온다.

\`\`\`latex
\\nabla \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\mathbb{E}_{\\textcolor{#3b7de0}{\\theta}}\\big[\\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x})\\big] = \\textcolor{#e0504a}{\\eta}, \\qquad \\nabla^2 \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\mathrm{Cov}_{\\textcolor{#3b7de0}{\\theta}}\\big[\\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x})\\big] = \\textcolor{#0e8f8f}{I}(\\textcolor{#3b7de0}{\\theta}) \\succeq 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수 (자연모수 공간의 안쪽 점)} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기대모수} \\\\
\\mathbb{E}_{\\theta},\\ \\mathrm{Cov}_{\\theta} & p_\\theta \\text{ 아래의 평균과 공분산} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬} \\\\
\\succeq 0 & \\text{양의 준정부호 (어느 방향으로도 휘어짐이 음수가 아님)}
\\end{array}
\`\`\`

두 번째 식은 F가 볼록함수라는 것을 보장한다. 공분산 행렬은 음수 방향이 없기 때문이다. 한 가지 조건이 있다. 미분과 합(적분)의 순서를 바꾸었으므로, θ가 자연모수 공간의 안쪽에 있어야 한다(아래 문제 2). F의 헤시안이 곧 θ 좌표의 피셔 정보(모수를 조금 움직일 때 분포가 얼마나 민감하게 변하는지 재는 행렬)라는 것도 여기서 한 번 봐 두자.

### η를 평균 내면 무엇이 되나

두 가우시안의 η를 반씩 평균 내면, 그것은 두 분포를 반반 섞은 혼합분포의 E[t(x)]와 같다. 기댓값은 섞으면 섞인 대로 평균 나기 때문이다. 그러나 혼합분포 자체는 가우시안이 아니다. 봉우리가 둘일 수도 있다. 가우시안 가족 안에서 그 η를 주소로 갖는 한 명은, **혼합과 같은 평균·이차모멘트를 가진 가우시안**이다. 이 가우시안 q는 KL 발산 KL(혼합 ‖ q)(두 분포가 얼마나 다른지 재는 비대칭의 양)를 가장 작게 한다. 혼합분포에서 가우시안 가족 위의 가장 가까운 점으로 내린 것이라, 이것을 m-사영(m = 혼합, mixture)이라 부른다(모멘트 일치).

결과가 유한한 범주분포(확률표) 전체에서는 사정이 다르다. 확률표끼리는 섞어도 확률표이므로, 거기서는 η-직선이 곧 혼합의 길이다. 가족이 섞기에 닫혀 있지 않으면, η-직선 위의 점은 혼합을 대신하는 한 명이다.

{{viz: ch07/moment-match}}

### 파이썬

\`\`\`python
import numpy as np

mu, s = 1.0, 2.0
t1, t2 = mu / s**2, -1 / (2 * s**2)
F = lambda a, b: -a * a / (4 * b) + 0.5 * np.log(-np.pi / b)

h = 1e-5
g = [(F(t1 + h, t2) - F(t1 - h, t2)) / (2 * h), (F(t1, t2 + h) - F(t1, t2 - h)) / (2 * h)]
print(f"∇F(θ) 수치미분 = ({g[0]:.4f}, {g[1]:.4f})   (μ, μ²+σ²) = ({mu}, {mu**2 + s**2})")

x = np.random.default_rng(0).normal(mu, s, 2_000_000)
print("Cov[(x, x²)] 표본:\\n", np.round(np.cov(np.vstack([x, x**2])), 2))
print("정확한 값: [[σ², 2μσ²], [2μσ², 4μ²σ² + 2σ⁴]] =", [[s**2, 2 * mu * s**2], [2 * mu * s**2, 4 * mu**2 * s**2 + 2 * s**4]])

# η 의 평균 = 혼합의 모멘트 → 모멘트를 맞춘 가우시안
rng = np.random.default_rng(1)
mix = rng.normal(0, 1, 2_000_000) + rng.choice([-2, 2], 2_000_000)
print(f"½N(−2,1)+½N(2,1) 의 η = ({mix.mean():.3f}, {(mix**2).mean():.3f})  → 같은 η 의 가우시안 N(0, 5)")
# ∇F(θ) 수치미분 = (1.0000, 5.0000)   (μ, μ²+σ²) = (1.0, 5.0)
# Cov[(x, x²)] 표본:
#  [[ 4.    8.02]
#  [ 8.02 48.1 ]]
# 정확한 값: [[σ², 2μσ²], [2μσ², 4μ²σ² + 2σ⁴]] = [[4.0, 8.0], [8.0, 48.0]]
# ½N(−2,1)+½N(2,1) 의 η = (0.000, 4.995)  → 같은 η 의 가우시안 N(0, 5)
\`\`\`

### 수확

"η는 데이터에서 바로 읽히는 좌표이고, F의 기울기다. F의 헤시안은 t(x)의 공분산이라서 F는 볼록하다. η를 평균 낸 점은 혼합분포가 아니라, 혼합과 모멘트가 같은 가족의 한 명이다."

### 문제 2. 기울기는 평균, 휘어짐은 공분산

(가) 정규화 조건을 미분해 ∇F(θ) = E[t(x)], ∇²F(θ) = Cov[t(x)] 를 보여라. (나) 베르누이 F(θ) = log(1 + eᶿ) 에서 F″(θ) 를 수치로 구해 μ(1−μ) 와 비교하라. (다) 이 유도가 성립하려면 어떤 조건이 필요한가?

#### 함께 풀기

**이서연:** (가)는 Σ exp(θ·t − F + k) = 1 을 θ로 미분하면 Σ (t − ∇F) p = 0 이라 ∇F = E[t] 예요. 한 번 더 미분하면 Σ (t − ∇F)(t − ∇F)ᵀ p − ∇²F = 0 이라 ∇²F = Cov[t]. 이건 언제나 돼요. 공분산이니까 F는 언제나 볼록이고요.

〔M06〕 **김민준:** (나)에서 이상한 게 나왔어요. θ = 2 에서 h = 1e-8 로 이차 차분을 했더니 F″ 이 −4.44 예요. 공분산이 음수라니, 그럼 F가 볼록이 아닌 거 아니에요?

**선생님:** 참값은 얼마예요?

**김민준:** μ = 시그모이드(2) = 0.881, μ(1−μ) = 0.105 요. h = 1e-7 로 하면 0.044, 3e-8 이면 −0.49… h를 줄일수록 더 엉망이에요.

**선생님:** 분자 F(θ+h) − 2F(θ) + F(θ−h) 는 얼마나 작아요?

**김민준:** 0.105 × 10⁻¹⁶ 정도요. 그런데 F 자체가 2.13 이라 부동소수점 반올림 오차가 10⁻¹⁶ 쯤 깔려 있어요. 그걸 h² = 10⁻¹⁶ 으로 나누니까 오차가 1 크기로 부풀었어요. 음수는 반올림 오차예요.

**선생님:** 이차 차분은 h = 1e-4 근처가 적당해요. 부호가 이상하면 식보다 먼저 숫자를 의심해요.

**선생님:** 서연 학생, (다)요. "언제나 된다"고 했는데, 미분을 합 안으로 넣은 건 언제나 괜찮아요?

**이서연:** 베르누이는 합이 두 항이라 괜찮은데… 적분이면 조건이 필요해요. 이런 가족은 어때요? x ≥ 0 에서 exp(θx)/(1 + x²). θ ≤ 0 이면 적분이 유한하고 θ > 0 이면 무한이에요.

**선생님:** θ = 0 에서 E[x] 는요?

〔S08〕 **이서연:** (2/π) ∫ x/(1+x²) dx 인데… 무한대로 가요. F(0) = log(π/2) 로 유한한데 평균은 무한대예요. θ = 0 은 자연모수 공간의 끝점이라, 오른쪽으로 미분할 수가 없어요. 제가 "언제나"라고 한 건 θ가 자연모수 공간의 안쪽에 있을 때만 맞아요.

**선생님:** 그래요. 안쪽에서는 지수족의 적분이 넉넉하게 수렴해서 미분과 적분을 바꿀 수 있어요. 끝점에서는 보장이 없어요.

**이서연:** 해석학에서 "균등수렴이면 극한과 적분을 바꿔도 된다"를 조건 없이 쓰다가 감점당한 기억이 나요.

### 문제 3. η의 평균은 혼합인가

두 가우시안 N(−2, 1), N(2, 1) 의 η 를 반씩 평균 낸 점을 구하라. 그 점에 해당하는 가우시안은 무엇이고, ½N(−2,1) + ½N(2,1) 과 같은 분포인가?

#### 함께 풀기

**김민준:** η 는 (−2, 5) 와 (2, 5) 니까 평균은 (0, 5). 확률표에서는 η 좌표의 직선이 혼합의 길이였으니까 이게 곧 혼합분포예요.

**선생님:** 혼합분포를 그리면 봉우리가 몇 개예요?

〔M06〕 **김민준:** 두 개요, −2 와 2 에. 그런데 η = (0, 5) 인 가우시안은 봉우리가 하나잖아요. 같은 분포일 수가 없어요. 가우시안 둘을 섞으면 가우시안이 아니에요.

**이서연:** 그럼 같은 η의 가우시안을 구하면 되겠네. 평균은 0이고, 분산은… 두 성분의 분산이 둘 다 1 이니까 1. N(0, 1).

**선생님:** 그 가우시안의 E[x²] 는요?

〔S06〕 **이서연:** 1 이요. 그런데 η₂ 는 5 였어요. 아, 각 성분의 E[x²] 는 분산 1 에 평균의 제곱 4 를 더한 5 예요. 혼합의 분산에는 성분 평균들이 퍼진 정도가 들어가요. 같은 η 의 가우시안은 N(0, 5) 예요.

**선생님:** 두 후보로 KL(혼합 ‖ q) 를 재 봐요.

**김민준:** N(0, 1) 은 1.367, N(0, 5) 는 0.172 예요. 분산을 4 나 6 으로 바꾸면 0.185, 0.180 이라 5 가 가장 작아요.

**선생님:** 가우시안 가족 안에서 혼합에 가장 가까운(KL(혼합 ‖ q) 최소) 한 명이 모멘트가 같은 N(0, 5) 예요. 이것을 m-사영이라고 불러요. η 직선 위의 점은 혼합 자체가 아니라 혼합을 대신하는 한 명이에요.

**김민준:** 두 조의 발표를 한 슬라이드로 합칠 때, 두 결론을 붙여 놓는 게 혼합이고, 평균 낸 결론 하나로 쓰는 게 모멘트 일치네요. 평균 결론은 두 조 누구의 주장과도 다를 수 있고요.

## 쌍대 퍼텐셜 F*: θ와 η를 잇는 르장드르 짝

θ에서 η로 가는 길은 기울기 하나, η = ∇F(θ) 였다. 그렇다면 η에서 θ로 돌아오는 길도 어떤 함수의 기울기일까? 그리고 그 함수는 분포에 대해 무엇을 말해 줄까?

### 르장드르 변환 — 기울기를 새 좌표로

볼록함수 F가 있으면 기울기 η = ∇F(θ) 를 새 좌표로 삼고, 새 함수 F*(η) = θ·η − F(θ) 를 만들 수 있다. 이것을 르장드르 변환이라 부르고, F*를 F의 쌍대, 또는 쌍대 퍼텐셜이라고 한다. 퍼텐셜은 F처럼 기울기를 내놓는 바탕 함수를 부르는 말이다. 역학에서 속도 v에서 운동량 p = ∂L/∂v (L은 운동 에너지에서 위치 에너지를 뺀 라그랑지안) 로 넘어갈 때 쓰는 것도 같은 변환이다. 기울기가 새 좌표가 된다. F가 볼록이라는 것은 앞 절에서 보았으니, 이 변환을 지수족에 그대로 쓸 수 있다.

### F*는 음의 엔트로피다

η = ∇F(θ) 인 맞물린 짝에서 F*(η) = θ·η − F(θ) 이다. 이 값에 이름이 있다. θ·η = E[θ·t(x)] 이므로, 기댓값 안에 골격을 다시 모으면 이렇다.

\`\`\`latex
\\textcolor{#c0622f}{F^*}(\\textcolor{#e0504a}{\\eta}) = \\textcolor{#3b7de0}{\\theta} \\cdot \\textcolor{#e0504a}{\\eta} - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\mathbb{E}\\big[\\log \\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}(\\textcolor{#6f8fa6}{x}) - \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big] = -\\textcolor{#9467bd}{H}(\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}) - \\mathbb{E}\\big[\\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c0622f}{F^*} & \\text{쌍대 퍼텐셜 (}F \\text{ 의 르장드르 변환)} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기대모수 } = \\nabla F(\\theta) \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}} & \\text{기대모수가 } \\eta \\text{ 인 가족의 한 명} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터} \\\\
\\textcolor{#0e93b0}{k} & \\text{캐리어} \\\\
\\textcolor{#9467bd}{H} & \\text{섀넌 엔트로피} \\\\
\\mathbb{E} & p_\\theta \\text{ 아래의 기댓값}
\\end{array}
\`\`\`

캐리어가 0인 가족(베르누이, 가우시안)에서는 F*가 정확히 음의 엔트로피다. 베르누이: F*(η) = η log η + (1−η) log(1−η). 가우시안: F*(η) = −½ log(2πe(η₂ − η₁²)), 곧 −½ log(2πeσ²). 푸아송은 캐리어 −log x! 때문에 E[log x!] 만큼 다르다. F*(η) = η log η − η 이다. F(θ) = eᶿ 를 손으로 르장드르 변환해도 같은 함수가 나온다.

르장드르 짝에는 펜셸–영 부등식 F(θ) + F*(η) ≥ θ·η 가 따라온다. 여기서는 그것이 등호로 쓰인다. θ와 η가 같은 분포의 두 주소이면 언제나 η = ∇F(θ) 이므로, F(θ) + F*(η) = θ·η. θ와 η를 서로 다른 분포에서 가져오면 부등식이 되고, 그 틈이 다음 절의 주인공이다. 그리고 르장드르 짝에서는 기울기의 역함수가 쌍대의 기울기다, (F′)⁻¹ = (F*)′. 여기서는 그것이 θ = ∇F*(η) 가 된다. η에서 θ로 돌아가는 길도 기울기 하나다.

### 파이썬

\`\`\`python
import numpy as np
from math import lgamma

# 가우시안 μ=1, σ=2
mu, s = 1.0, 2.0
th = np.array([mu / s**2, -1 / (2 * s**2)])
eta = np.array([mu, mu**2 + s**2])
F = -th[0]**2 / (4 * th[1]) + 0.5 * np.log(-np.pi / th[1])
Fs = -0.5 * np.log(2 * np.pi * np.e * (eta[1] - eta[0]**2))
print(f"가우시안  F = {F:.4f}  F* = {Fs:.4f}  F+F* = {F + Fs:.4f}  θ·η = {th @ eta:.4f}")

# 푸아송 λ=3: F*(η) = η log η − η  vs  −H − E[k]
lam = 3.0
xs = np.arange(0, 80)
k = -np.array([lgamma(x + 1) for x in xs])
logp = xs * np.log(lam) - lam + k
p = np.exp(logp)
H = -(p * logp).sum()
print(f"푸아송   η log η − η = {lam * np.log(lam) - lam:.4f}   −H − E[k] = {-H - (p * k).sum():.4f}   −H 만 = {-H:.4f}")
# 가우시안  F = 1.7371  F* = -2.1121  F+F* = -0.3750  θ·η = -0.3750
# 푸아송   η log η − η = 0.2958   −H − E[k] = 0.2958   −H 만 = -1.9315
\`\`\`

### 수확

"추상적 볼록함수가 지수족에서 구체적 의미를 얻었다. F는 로그정규화자, 그 기울기는 기대모수, 그 쌍대는 음의 엔트로피(캐리어가 없을 때). 역학에서 속도와 운동량을 잇던 르장드르 변환이 여기서는 분포의 두 주소를 잇는다."

### 문제 4. 가우시안의 네 좌표

μ = 1, σ = 2 인 가우시안에 대해 θ, η, F(θ), F*(η) 를 구하고 F(θ) + F*(η) = θ·η 를 검산하라. 자연모수 공간은 어디인가?

#### 함께 풀기

**김민준:** θ = (0.25, −0.125), η = (1, 5) 요. θ·η = 0.25 − 0.625 = −0.375. F = −θ₁²/(4θ₂) + ½ log(−1/θ₂) = 0.125 + 1.0397 = 1.1647. F* = −½ log(2πe · 4) = −2.1121. 더하면 −0.947 이에요. −0.375 랑 안 맞아요.

**선생님:** F를 어디서 가져왔어요?

**김민준:** 정규화 상수 1/√(2πσ²) 에서 로그를 씌웠는데… ½ log(2πσ²) = ½ log(−π/θ₂) 예요. 2σ² = −1/θ₂ 라서 π가 남아요. 제가 ½ log π = 0.572 를 빼먹었어요. 넣으면 F = 1.7371, F + F* = −0.375. 맞아요.

**이서연:** 대칭성도 보려고 θ = (0.25, +0.125) 로도 해 봤는데 log(−π/θ₂) 가 정의가 안 돼.

**선생님:** θ₂ > 0 이면 분포가 어떻게 생겼어요?

**이서연:** exp(0.25x + 0.125x²) 요. x가 커지면 한없이 커져서 적분이 무한대예요. 정규화가 안 되니까 분포가 아니에요. 자연모수 공간은 θ₁ 은 아무 실수, θ₂ < 0 인 반평면이에요. θ₂ 가 −1/(2σ²) 에서 왔으니 당연했는데, 기호만 보고 아무 실수나 되는 줄 알았어요.

**선생님:** 좌표가 어디까지 살아 있는지부터 적어 두는 습관이 좋아요. 로그정규화자가 유한한 곳이 곧 그 좌표의 땅이에요.

**이서연:** 함수를 정의할 때 정의역을 먼저 쓰라는 게 이래서였어요.

## 브레그만 발산: 접선이 만드는 높이 차

앞 절에서, θ와 η를 서로 다른 분포에서 가져오면 펜셸–영 부등식에 틈이 생긴다고 했다. 그 틈은 볼록한 곡선과 접선 사이의 높이 차다. 한편 분포 사이의 차이를 재는 비대칭의 양으로 우리는 KL 발산을 알고 있다. 둘은 혹시 같은 것 아닐까?

### 절벽 위의 판자 — 왜 비대칭인가

볼록한 절벽 위 한 지점에 서서, 그 지점의 기울기대로 곧은 판자를 쭉 뻗는다. 판자는 어디서나 실제 절벽보다 아래에 있다(볼록하니까). 내 발밑에서 판자와 절벽의 높이 차는 0이고, 멀어질수록 커진다. 이 "절벽과 판자 사이의 높이 차"가 브레그만 발산이다. 판자를 어디에 댔느냐에 따라 값이 다르다. 그래서 비대칭이다.

### KL = 브레그만 발산

\`\`\`latex
\\textcolor{#c2398a}{B_F}(\\textcolor{#3b7de0}{\\theta} : \\textcolor{#3b7de0}{\\theta}') = \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}') - \\nabla \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}') \\cdot (\\textcolor{#3b7de0}{\\theta} - \\textcolor{#3b7de0}{\\theta}')
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{B_F} & \\text{브레그만 발산 (판자는 뒤 칸 } \\theta' \\text{ 에 댄다)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{높이 차를 재는 점} \\\\
\\textcolor{#3b7de0}{\\theta}' & \\text{판자(접선)를 댄 점} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 (볼록함수)}
\\end{array}
\`\`\`

KL을 지수족 골격으로 풀면 이 모양이 그대로 나온다. log p_θ₁ − log p_θ₂ = (θ₁ − θ₂)·t(x) − F(θ₁) + F(θ₂) 이고(캐리어는 상쇄된다), p_θ₁ 아래에서 평균 내면 t(x) 자리에 η₁이 들어간다.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_1} \\,\\|\\, \\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_2}) = \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}_2) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}_1) - \\textcolor{#e0504a}{\\eta}_1 \\cdot (\\textcolor{#3b7de0}{\\theta}_2 - \\textcolor{#3b7de0}{\\theta}_1) = \\textcolor{#c2398a}{B_F}(\\textcolor{#3b7de0}{\\theta}_2 : \\textcolor{#3b7de0}{\\theta}_1) = \\textcolor{#c2398a}{B_{F^*}}(\\textcolor{#e0504a}{\\eta}_1 : \\textcolor{#e0504a}{\\eta}_2)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_1},\\ \\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_2} & \\text{같은 가족의 두 분포} \\\\
\\textcolor{#3b7de0}{\\theta}_1,\\ \\textcolor{#3b7de0}{\\theta}_2 & \\text{두 분포의 자연모수} \\\\
\\textcolor{#e0504a}{\\eta}_1,\\ \\textcolor{#e0504a}{\\eta}_2 & \\text{두 분포의 기대모수, } \\eta_1 = \\nabla F(\\theta_1) \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#c2398a}{B_F},\\ \\textcolor{#c2398a}{B_{F^*}} & F \\text{ 와 } F^* \\text{ 로 만든 브레그만 발산}
\\end{array}
\`\`\`

**앞 칸과 뒤 칸의 순서에 주의하라.** KL(p_θ₁ ‖ p_θ₂) 에서 판자는 앞의 분포 θ₁ 에 대고, 높이 차는 뒤의 θ₂ 에서 잰다. θ 좌표로는 B_F(θ₂ : θ₁), 순서가 뒤집힌다. η 좌표로 쓰면 B_F*(η₁ : η₂), 순서가 그대로다. 헷갈리면 숫자로 확인한다: θ₁ = 0.5, θ₂ = −1 인 두 베르누이에서 KL(p₁‖p₂) = 0.2729, KL(p₂‖p₁) = 0.2574 이다. B_F(θ₂ : θ₁) = 0.2729, B_F(θ₁ : θ₂) = 0.2574. 순서를 거꾸로 쓰면 다른 방향의 KL이 나온다.

{{viz: ch07/bregman}}

### ML에서: 고정된 판자와 움직이는 모형

학습은 교차엔트로피를, 곧 KL(현실 ‖ 모형)을 줄이는 과정이다. 현실이 가족의 한 명 p_θ* 이고 모형이 q_θ 라면, 판자는 현실 θ* 에 고정되어 있다. 학습은 모형의 θ를 옮겨, 그 고정된 판자와 곡선 사이의 높이 차 B_F(θ : θ*) 를 줄여 가는 일이다.

### 파이썬

\`\`\`python
import numpy as np

F = lambda t: np.log1p(np.exp(t))                  # 베르누이의 로그정규화자
dF = lambda t: 1 / (1 + np.exp(-t))                # η = 시그모이드(θ)
B = lambda a, b: F(a) - F(b) - dF(b) * (a - b)     # B_F(a : b), 판자는 b 에
kl = lambda p, q: p * np.log(p / q) + (1 - p) * np.log((1 - p) / (1 - q))
Fs = lambda e: e * np.log(e) + (1 - e) * np.log(1 - e)
BFs = lambda e1, e2: Fs(e1) - Fs(e2) - np.log(e2 / (1 - e2)) * (e1 - e2)   # ∇F*(η) = θ

t1, t2 = 0.5, -1.0
p1, p2 = dF(t1), dF(t2)
print(f"KL(p1‖p2) = {kl(p1, p2):.4f}   B_F(θ2:θ1) = {B(t2, t1):.4f}   B_F*(η1:η2) = {BFs(p1, p2):.4f}")
print(f"KL(p2‖p1) = {kl(p2, p1):.4f}   B_F(θ1:θ2) = {B(t1, t2):.4f}")

for t in [0.0, 5.0]:
    print(f"θ = {t}: θ 를 0.1 옮긴 KL = {kl(dF(t), dF(t + 0.1)):.3e}   F''(θ) = {dF(t) * (1 - dF(t)):.4f}")
# KL(p1‖p2) = 0.2729   B_F(θ2:θ1) = 0.2729   B_F*(η1:η2) = 0.2729
# KL(p2‖p1) = 0.2574   B_F(θ1:θ2) = 0.2574
# θ = 0.0: θ 를 0.1 옮긴 KL = 1.249e-03   F''(θ) = 0.2500
# θ = 5.0: θ 를 0.1 옮긴 KL = 3.217e-05   F''(θ) = 0.0066
\`\`\`

### 한 걸음 더 — θ의 한 칸은 곳곳에서 크기가 다르다

θ를 0.1만큼 바꾸는 것이 어디서나 같은 크기의 변화를 만드는가? 방금 파이썬 출력이 답한다. 베르누이에서 θ = 0 의 한 걸음은 KL 1.25 × 10⁻³ 인데, θ = 5 의 한 걸음은 3.2 × 10⁻⁵ 이다. 약 39배 차이다. F가 휘는 정도 F″(θ)가 곳곳에서 다르기 때문이다. 그렇다면 θ 좌표의 한 칸은 곳곳에서 다른 크기의 변화다.

### 수확

"KL 발산은 '로그정규화자와 그 접선 사이의 높이 차'였다. KL 발산의 비대칭, 볼록함수의 접선과 르장드르 변환, 지수족의 θ 좌표 — 세 갈래가 여기서 하나로 합류한다."

### 문제 5. KL은 어느 쪽 판자인가 (킬러)

지수족에서 다음을 증명하라.
KL(p_θ₁ ‖ p_θ₂) = B_F(θ₂ : θ₁) = B_F*(η₁ : η₂)
그리고 θ₁ = 0.5, θ₂ = −1 인 베르누이로 세 값을 수치로 확인하라.

#### 함께 풀기

〔M05〕 **김민준:** 수치부터 했어요. B_F(θ₁ : θ₂) = F(θ₁) − F(θ₂) − F′(θ₂)(θ₁ − θ₂) 가 0.2574, KL(p₁‖p₂) 가 0.2729 예요. 6% 차이니까 대충 비슷하고, 수치 오차 같아요.

**선생님:** 그 코드는 몇 자리까지 정확해요?

**김민준:** 로그랑 지수 몇 번이니까 10⁻¹⁵ 쯤이요. 6% 는… 수치 오차가 아니에요.

**선생님:** KL(p₂‖p₁) 은요?

〔M08〕 **김민준:** 0.2574 요. 제가 계산한 B_F(θ₁ : θ₂) 는 반대 방향 KL 이었어요. 앞 칸과 뒤 칸을 뒤집어 넣은 거예요. B_F(θ₂ : θ₁) 로 하면 0.2729, KL(p₁‖p₂) 와 소수 넷째 자리까지 똑같아요.

**선생님:** 두 점이 가까우면 두 방향 KL이 거의 같아지죠. 그러니 가까운 점으로만 확인하면 순서를 틀려도 "대충 맞는" 숫자가 나와요. 서연 학생, 증명은요?

**이서연:** 첫 번째 등호는 됐어요. log p₁ − log p₂ = (θ₁ − θ₂)·t − F(θ₁) + F(θ₂), p₁ 로 평균 내면 (θ₁ − θ₂)·η₁ − F(θ₁) + F(θ₂). η₁ = ∇F(θ₁) 이니까 F(θ₂) − F(θ₁) − ∇F(θ₁)·(θ₂ − θ₁) = B_F(θ₂ : θ₁). 판자가 θ₁ 에 있어요.

〔S05〕 **이서연:** 두 번째가 막혀요. B_F*(η₁ : η₂) = F*(η₁) − F*(η₂) − ∇F*(η₂)·(η₁ − η₂) 인데, ∇F*(η₂) 를 뭘로 바꿔야 할지 모르겠어요. F* 는 엔트로피니까 엔트로피를 η로 미분해야 하나요?

**선생님:** 앞 절에서 르장드르 짝의 기울기의 역함수에 대해 뭐라고 했죠?

**이서연:** (F′)⁻¹ = (F*)′ … θ 에서의 기울기가 η 면, η 에서의 F* 의 기울기는 θ 예요.

〔S09〕 **이서연:** 그러면 ∇F*(η₂) = θ₂ 예요. 엔트로피를 미분할 필요가 없었어요. F*(η) = θ·η − F(θ) 도 넣으면
θ₁·η₁ − F(θ₁) − θ₂·η₂ + F(θ₂) − θ₂·(η₁ − η₂)
= F(θ₂) − F(θ₁) − η₁·(θ₂ − θ₁).
첫 번째 줄이랑 똑같아요. θ 좌표에서는 판자를 θ₁ 에 대고 θ₂ 에서 재는데, η 좌표에서는 판자를 η₂ 에 대고 η₁ 에서 재요. 좌표를 바꾸면 앞 칸과 뒤 칸이 뒤집혀요.

**김민준:** 수치로도 B_F*(η₁ : η₂) 가 0.2729 예요. 세 개가 같아요.

〔T13〕 **선생님:** 이 장에서 가져갈 건 이거예요. KL 은 로그정규화자의 접선 높이 차이고, θ 로 쓰면 순서가 뒤집히고 η 로 쓰면 그대로예요. 그 사이를 잇는 게 르장드르 짝의 한 줄, 기울기의 역함수는 쌍대의 기울기라는 사실이었어요.

**이서연:** 선형대수에서 전치행렬로 옮기면 곱의 순서가 뒤집히던 것 같아요. (AB)ᵀ = BᵀAᵀ. 쌍대로 건너가면 순서가 뒤집히는 게 규칙처럼 느껴져요.
`,V4=`# 구부러진 땅

질문 하나에서 시작하자. θ를 한 걸음 옮기는 것이 어디서나 같은 크기의 변화를 만드는가? σ가 작을 때의 한 걸음과 σ가 클 때의 한 걸음이 같은가?

같지 않다. 뒤에서 숫자로 확인한다. 그런데 여기서 곧장 "그러니 이 공간은 휘었다"고 말하고 싶어진다. 그 결론은 서두른 것이다. 종이 위에 극좌표를 그려도 바깥쪽 한 칸은 안쪽 한 칸보다 길다. 그래도 종이는 평평하다.

그러면 "휘었다"는 말은 대체 무엇을 기준으로 하는가. 이 장은 그 질문을 따라간다. 먼저 좌표를 붙일 수 있는 공간, 매니폴드에서 시작한다.

## 매니폴드: 가까이서는 평면인 공간

θ를 움직이면 분포가 바뀌고 η를 움직여도 분포가 바뀐다. 두 좌표계가 르장드르 변환으로 연결된다는 건 알겠다. 그런데 이 좌표들이 사는 공간은 대체 어떤 모양인가? 평평한가? 둥근가? 어딘가에 구석이 있을까?

### 지구본과 세계지도 — 가까이서는 평면, 멀리서는 곡면

![메르카토르 도법의 왜곡 — 적도의 원과 극지방의 원이 같은 크기인데 지도에서는 다르다](/images/chapters/tissot-mercator.png)
지구는 구면이다. 그런데 우리는 평면 지도로 산다. 서울 근처에서는 지도가 꽤 정확하다. 택시 타고 강남에서 종로까지 가는 데 지구가 둥글다는 사실은 아무 상관이 없다. 그런데 서울에서 뉴욕까지의 최단경로를 찾으려면? 평면 지도 위의 직선은 최단경로가 아니다. 지구 중심을 지나는 큰 원, 곧 지구본 위의 대원(great circle)이 최단경로다.

매니폴드는 이런 공간이다. 가까이서 보면 유클리드 공간 — 좌표를 붙이고 덧셈 뺄셈을 할 수 있다. 멀리서 보면 평면과 다를 수 있다 — 지도 위의 직선이 땅 위의 직선이 아닐 수 있다.

정리하면, 매니폴드란 "국소적으로는 평면처럼 좌표를 붙일 수 있지만, 전체적으로는 평면과 다른 모양일 수 있는 공간"이다.

![국소적 평면, 전체적 곡면](/images/chapters/ch08-local-flat-global-curved.svg)

![측지선과 좌표선의 차이](/images/chapters/ch08-geodesic-vs-coordinate.svg)

### θ와 η — 같은 땅의 두 지도

지수족(log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포의 모임)의 두 좌표, 자연모수 θ와 기대모수 η(t(x)의 기댓값)를 떠올려 보자. 모수는 분포를 정하는 숫자다. 이것은 같은 지구본에 메르카토르 도법과 다른 도법(예: 정거원추도법)을 각각 입힌 것과 같다. 같은 땅인데 지도가 다르다. 두 지도가 겹치는 영역에서의 좌표 변환 규칙 — 그것이 η = ∇F(θ), 르장드르 변환이다. θ에서 η로 건너간 일은 결국 좌표 변환이었다.

### 귤과 종이 두루마리 — 펼 수 있는 휨, 펼 수 없는 휨

귤 껍질을 벗겨 책상 위에 눌러 펴 보자. 완전히 평평하게는 안 된다. 어딘가 찢어지거나 겹친다. 종이 두루마리는 다르다. 바깥에서 보면 둥글게 말려 있지만, 풀면 그대로 평평한 종이다. 찢을 필요도, 늘일 필요도 없다.

둘 다 "휘어 보인다". 그런데 하나는 펼 수 있고 하나는 펼 수 없다. 이 차이가 뒤에서 볼 내재적 곡률의 주제다. 어느 쪽이 "진짜로" 휜 것인지는 바깥에서 본 모양이 아니라 안에서 잰 길이와 각도가 정한다.

### 파이썬

서울과 뉴욕을 잇는 두 길의 길이를 잰다. 하나는 대원, 하나는 (위도, 경도) 좌표에서 곧게 그은 선이다.

\`\`\`python
import numpy as np

R = 6371.0                                   # 지구 반지름 (km)

def to_xyz(lat, lon):
    la, lo = np.radians(lat), np.radians(lon)
    return np.stack([np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)], -1)

seoul, nyc = (37.57, 126.98), (40.71, -74.01 + 360)   # 태평양을 건너도록 경도를 이어 붙인다

# (1) 대원: 두 점 사이 중심각 × 반지름
A, B = to_xyz(*seoul), to_xyz(*nyc)
great = R * np.arccos(A @ B)

# (2) (위도, 경도) 좌표에서 곧은 선을 지구 위에 올려 놓고 길이를 잰다
t = np.linspace(0, 1, 100_001)[:, None]
path = to_xyz(seoul[0] + (nyc[0] - seoul[0]) * t[:, 0], seoul[1] + (nyc[1] - seoul[1]) * t[:, 0])
straight = R * np.sum(np.arccos(np.clip(np.sum(path[1:] * path[:-1], 1), -1, 1)))

# 대원이 가장 북쪽으로 올라가는 위도
n = np.cross(A, B); n /= np.linalg.norm(n)
print(f"대원 {great:,.0f} km   위경도 직선 {straight:,.0f} km   비율 {straight / great:.2f}")
print(f"대원의 최고 위도 {np.degrees(np.arccos(abs(n[2]))):.1f}°")
# 대원 11,052 km   위경도 직선 13,716 km   비율 1.24
# 대원의 최고 위도 77.4°
\`\`\`

지도 위의 곧은 선은 24% 돌아가는 길이다. 대원은 북위 77도 가까이, 북극권 깊숙이 올라갔다 내려온다. 비행기가 알래스카 쪽으로 도는 이유다.

### ML에서: 매니폴드 가설 — 실제 데이터는 저차원에 산다

ML에서는 데이터가 저차원 매니폴드 위에 산다는 말을 자주 듣는다. CNN 같은 신경망이 접힌 시트를 펼친다는 설명도 그 하나다. 이제 매니폴드가 무엇인지 — "국소적으로 좌표를 붙일 수 있는 공간" — 를 알았으니, 그 말에 뜻을 붙일 수 있다.

### 매니폴드 가설이란

실제 데이터는 고차원 공간 전체에 퍼져 있지 않고, 그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다.

### 종이비행기 — 접힌 2차원

A4 용지는 2차원 평면이다. 접으면 3차원 공간 속에 존재하는 2차원 표면이 된다. 용지 위의 개미는 여전히 2차원을 걷는다. 데이터는 이 접힌 종이 위의 점이다. 종이 밖의 3차원 공간 대부분은 비어 있다.

### 관절 인형 — 자유도의 수

관절 인형의 자세는 3차원 공간에서 펼쳐지지만, 따로따로 움직일 수 있는 방향의 수(자유도)는 관절의 수뿐이다. 관절이 10개면 자유도는 10. 고차원 공간 속에 묻힌 10차원 매니폴드다.

### 언어 모델의 분포 — 심플렉스의 좁은 구석

어휘가 5만 개인 "다음 토큰" 분포는 심플렉스, 곧 합이 1인 확률 5만 개가 사는 49,999차원 초삼각형 위의 한 점이다. 그 위에 고르게 찍은 점은 거의 다 비슷한 모습이었다. 모든 칸이 1/n 근처이고, 가장 큰 칸도 (ln n)/n 정도라 어느 꼭짓점과도 멀며, 가장 작은 칸 하나가 1/n² 정도로 작아 경계의 면 가까이에 있다(고차원에서 고르게 뽑은 점이 거의 모두 이런 모습이 되는 현상, 측도의 집중).

실제 언어 모델이 내놓는 분포는 이런 "전형적인 점"과 전혀 닮지 않았다. 몇 개의 토큰에 확률이 몰린, 꼭짓점 쪽으로 치우친 분포가 흔하다. 매니폴드 가설은 그 위에 한 걸음 더 나아간 주장이다: 의미 있는 분포는 심플렉스 전체가 아니라 특정 구조를 가진 좁은 부분영역에 모여 있다. 고르게 뽑은 점들이 사는 곳과는 다른 곳에.

### LoRA — 좁은 방향에 거는 베팅

여기서부터는 비유다. LoRA의 낮은 랭크(rank)는 가중치 변화 행렬의 랭크이고, 엄밀히 말해 매니폴드의 차원과 같은 개념은 아니다. 그래도 발상은 닮았다. "쓸모 있는 변화는 전체 파라미터 공간의 아주 좁은 부분에 산다"는 베팅. 이 베팅이 놀라울 정도로 자주 맞는다는 것이 매니폴드 가설이 가리키는 방향과 같다.

### 파이썬 — 스위스 롤

스위스 롤은 평평한 띠를 나선으로 만 것이다. 안쪽 층과 바깥쪽 층은 3차원에서는 가깝지만, 띠를 따라가면 멀다.

\`\`\`python
import numpy as np

# 스위스 롤: 평면 띠 (s, h)를 나선으로 말아 3차원에 넣는다
def roll(s, h):
    return np.stack([s * np.cos(s), h, s * np.sin(s)], -1)

def arc_len(s1, s2, n=100_000):            # 나선을 따라 잰 길이 (띠 위의 거리)
    s = np.linspace(s1, s2, n)
    return np.trapezoid(np.sqrt(1 + s**2), s)

s1, s2 = 1.5 * np.pi, 3.5 * np.pi          # 한 바퀴 차이 나는 두 점, 같은 높이
p, q = roll(s1, 0.0), roll(s2, 0.0)
print(f"3차원 직선 거리 {np.linalg.norm(p - q):.2f}")
print(f"띠를 따라 잰 거리 {arc_len(s1, s2):.2f}")
# 3차원 직선 거리 6.28
# 띠를 따라 잰 거리 49.77
\`\`\`

여덟 배 차이다. 바깥 공간의 자로 재면 두 점은 이웃이고, 데이터가 사는 띠 위에서 재면 멀리 떨어져 있다. 그리고 이 띠는 원기둥처럼 "말렸을 뿐" 안에서는 평평하다. 바깥에서 휘어 보이는 것과 안에서 휜 것은 다르다 — 뒤에서 볼 내재적 곡률의 이야기가 벌써 여기 있다.

### 수확

"매니폴드 = 국소적으로 좌표를 붙일 수 있는 공간. 좌표는 지도일 뿐이다. 지도는 여러 장 있을 수 있다. θ와 η는 같은 곡면에 붙인 두 장의 지도였다."

## 계량: 한 걸음의 크기를 재는 자

KL 발산(두 분포가 얼마나 다른지 재는 비대칭의 양)은 멀리 떨어진 두 분포도 한 번에 비교한다. 그런데 매니폴드 위를 걸어가면서 한 걸음 한 걸음의 크기를 재려면? 좌표의 한 칸은 어디서나 같은 거리일까?

### 등산 지도의 등고선 — 지도 위 1cm의 실제 거리

등산 지도에서 등고선이 빽빽한 곳은 경사가 급하다. 지도 위에서 1cm를 가도 실제로는 거의 못 간다. 등고선이 성긴 곳은 완만하다. 지도 위에서 1cm가 실제로도 넉넉한 거리다. 같은 "지도 위 1cm"인데 실제 거리가 다르다.

그러니까 등산 지도를 제대로 읽으려면 각 지점에서 "여기서의 1cm는 실제로 몇 미터인가"를 알아야 한다. 그 정보가 등고선 간격에 들어 있다.

파라미터 공간도 마찬가지다. θ를 0.01만큼 바꾸는 것이 어떤 곳에서는 분포를 확 바꾸고 어떤 곳에서는 거의 안 바꾼다. "좌표 지도의 등고선 간격"을 알아야 한 걸음의 진짜 크기를 알 수 있다.

이 자의 그림자는 KL 발산에 이미 있다. KL 발산을 무한히 가까운 두 점 사이에서 전개하면 대칭적인 이차형식(dθᵀ A dθ 꼴)이 되고, 그 이차형식을 만드는 행렬 A가 피셔 정보 행렬이다. 피셔 정보 행렬이 바로 이 "국소적 자"다. 각 지점에서 "한 걸음이 분포를 얼마나 바꾸는가"를 알려주는 행렬. 수학은 이런 국소적 자를 계량(metric)이라 부른다.

### 자를 식으로 쓰면

좌표 u¹, u², … 를 조금씩 움직일 때 실제 거리 ds는 이렇게 잰다.

\`\`\`latex
ds^2 = \\sum_{i,j} \\textcolor{#0e8f8f}{g}_{ij}(\\textcolor{#2e9e6e}{u})\\, d\\textcolor{#2e9e6e}{u}^i\\, d\\textcolor{#2e9e6e}{u}^j
\`\`\`

\`\`\`latex
\\begin{array}{ll}
ds & \\text{실제 한 걸음의 길이} \\\\
\\textcolor{#0e8f8f}{g} & \\text{계량 (자), } g_{ij} \\text{ 는 그 성분, 위치마다 다른 대칭 행렬} \\\\
\\textcolor{#2e9e6e}{u} & \\text{좌표 (지도 위의 주소), } du^i \\text{ 는 좌표의 작은 변화} \\\\
i,\\ j & \\text{좌표의 번호}
\\end{array}
\`\`\`

지도 위에서 같은 du라도 g가 크면 실제 걸음은 크고, g가 작으면 실제 걸음은 작다. 등고선 간격이 곧 g다. 그리고 이 자는 한 공간에 하나다. 확률분포의 공간에는 피셔 계량이라는 자 하나가 자연스럽게 놓인다.

### 경로의 길이 — 모양과 걸음의 비용

두 분포를 잇는 길에는 덧셈의 길(확률을 섞는 길)과 곱셈의 길(로그를 섞은 뒤 합이 1이 되게 다시 나누는 길, 곧 정규화하는 길)이 있었다. 두 길의 "길이"를 비교하고 싶다면? 그러려면 각 지점에서 한 걸음의 크기를 알아야 한다. 같은 두 점 사이를 걸어가는데, 경로의 길이가 다른 이유는 두 가지다:
  ① 경로의 모양이 다르다
  ② 걷는 곳마다 한 걸음의 "비용"이 다르다 (여기서 본다)
자(ruler)가 있어야 경로의 길이를 잴 수 있고, 길이를 알아야 "더 짧은 길"을 물을 수 있다. 가장 짧은 길을 측지선(geodesic)이라 부른다.

### 측지선 — 자가 결정하는 "가장 짧은 길"

평면에서 두 점 사이의 가장 짧은 길은 직선이다. 곡면에서는? 평면의 직선이 없다. 대신 "가능한 모든 경로 중에서 길이가 가장 짧은 것"을 고른다.

지구 위에서 서울과 뉴욕을 잇는 가장 짧은 경로는 첫 절에서 잰 대원이다 — 비행기가 북극 쪽으로 돌아가는 이유.

가장 짧은 길은 **자(계량)가 정한다.** 같은 좌표 위에서도 자를 바꾸면 가장 짧은 길이 달라진다. 유클리드 자를 쓰면 직선이 가장 짧다. 피셔 자를 쓰면 다른 곡선이 가장 짧다.

가우시안 분포의 (μ, σ) 공간에서 이것을 보자. 피셔 자 아래에서 두 가우시안을 잇는 가장 짧은 길은 σ가 큰 쪽으로 불룩 올라가는 반타원이다. μ를 √2로 나눈 좌표로 다시 그리면 정확한 반원이 된다. 유클리드 직선과 전혀 다른 경로. "좌표에서 가까운 것"과 "분포로서 가까운 것"이 다르기 때문이다.

그러면 앞에서 말한 두 길, 덧셈의 길과 곱셈의 길은 무엇인가? 이 둘은 피셔 자로 잰 가장 짧은 길이 **아니다.** 자는 하나이고, 그 자가 정하는 가장 짧은 길도 하나다. 두 길은 다른 종류의 "곧음"을 따른다. 길이를 줄이는 대신, 방향을 바꾸지 않고 곧게 나아가는 길. 무엇을 "방향을 바꾸지 않는다"고 부를지 정하는 규칙이 따로 있고, 그 규칙이 둘이어서 곧은 길도 둘이다. 이 장의 마지막 절에서 그 규칙, 접속(connection)을 만난다.

왜 이것이 중요한가? 경사하강법은 "한 걸음씩 내려가는 것"이다. 한 걸음의 크기를 어떤 자로 재느냐에 따라 "가장 가파른 내리막"의 방향이 달라진다. 자연 기울기(natural gradient)는 피셔 자로 잰 같은 크기의 한 걸음 가운데 손실을 가장 많이 줄이는 방향으로 걷는 것이다. 유클리드 자로 한 걸음을 재는 보통의 경사하강법과는 다른 방향을, 다른 보폭으로 걸어간다.

지금은 한 가지만 기억하자: **자는 하나다. 자가 가장 짧은 길을 정한다. 정보기하학에서 "둘"인 것은 자가 아니라 곧음의 규칙이다.**

### 볼록성이 주는 자 — 그릇이 오므라드는 정도

지수족의 로그정규화자 F(θ)는 볼록함수, 곧 "그릇"이다. 그릇이 얼마나 가파르게 오므라드는지(두 번 미분한 값)는 어디서나 같은가? 바닥이 넓은 그릇과 바닥이 좁은 그릇이 다르듯, F(θ)를 두 번 미분한 값도 θ에 따라 다르다. 그리고 F(θ)를 두 번 미분한 행렬(헤시안)이 바로 θ 좌표의 자, 곧 피셔 정보 행렬이다. 한 가지만 미리 짚자. 그릇이 오므라드는 정도는 자의 눈금이지, 공간의 곡률이 아니다. 둘을 가르는 것이 다음 절이다.

### 파이썬

가우시안의 (μ, σ) 공간에서 μ를 똑같이 0.1씩 옮긴다. σ = 0.5 근처와 σ = 5 근처에서 KL 발산이 얼마나 다른지 본다.

\`\`\`python
import numpy as np

def kl_gauss(m1, s1, m2, s2):
    return np.log(s2 / s1) + (s1**2 + (m1 - m2)**2) / (2 * s2**2) - 0.5

for s in [0.5, 5.0]:
    print(f"σ = {s}:  Δμ = 0.1 이 만드는 KL = {kl_gauss(0, s, 0.1, s):.5f}")
# σ = 0.5:  Δμ = 0.1 이 만드는 KL = 0.02000
# σ = 5.0:  Δμ = 0.1 이 만드는 KL = 0.00020
\`\`\`

같은 좌표 한 칸인데 KL이 100배 다르다. KL은 (Δμ)²/(2σ²)이니, σ가 10배 커지면 100배 작아진다. "좌표의 한 칸이 어디서나 같은 거리가 아니다."

### 수확

"매니폴드 위에서 한 걸음의 크기를 재려면 자가 필요하다. 자의 눈금은 위치마다 다르다."

---

> ### 인물 이야기 — Riemann, Gauss, 그리고 "기하학의 기초에 대하여"
>
> ![Bernhard Riemann](/images/portraits/bernhard-riemann.jpg)
>
> 1854년 6월 10일, 괴팅겐 대학. 스물일곱 살의 Bernhard Riemann이 교수 자격을 얻기 위한 시험 강연을 해야 했다. 후보자가 주제 세 개를 내면, 교수진이 그중 하나를 고르는 것이 관례였다. 고르는 사람은 Carl Friedrich Gauss — 일흔일곱의 노대가.
>
> Riemann은 전기에 관한 주제 두 개를 자신 있게 준비하고, 세 번째로 기하학을 적어 넣었다. "기하학의 기초를 이루는 가설에 대하여(Über die Hypothesen, welche der Geometrie zu Grunde liegen)." Riemann의 예상과 달리, Gauss는 기하학을 골랐다.
>
> Riemann은 몇 주 동안 고통스럽게 강연을 준비했다. 수식은 거의 쓰지 않고, 개념만으로 말해야 했다. 청중은 수학자만이 아니라 전체 철학부 교수진이었기 때문이다.
>
> 이 강연 한 편이 기하학의 역사를 갈랐다.
>
> Riemann이 한 일의 핵심은 이것이었다. 유클리드 이래 2000년 동안, 기하학은 "공간이 평평하다"는 가정 위에 서 있었다. 평행선 공리를 의심한 사람들(Lobachevsky, Bolyai)이 있었지만, 그들은 유클리드를 부정하면서도 여전히 "균일한 곡률"의 공간만 다루었다. Riemann은 그 한계마저 깨뜨렸다. **곡률이 점마다 다를 수 있는 공간.** 어떤 곳은 평평하고, 어떤 곳은 볼록하고, 어떤 곳은 안장처럼 굽는 공간. 그리고 그런 공간에서 거리를 재려면 — 각 점에서 "여기서의 한 걸음은 이만큼"을 알려주는 계량 텐서(점마다 놓인 대칭 행렬, PyTorch의 tensor와는 이름만 같다)가 필요하다.
>
> 이것이 리만 계량이다. 우리가 "자(ruler)가 필요하다"고 했던 것의 정확한 수학적 실체. 그리고 Riemann의 공간은 처음부터 바깥 공간을 전제하지 않는다.
>
> Riemann의 아이디어는 Gauss의 작업 위에 서 있었다. Gauss는 이미 1827년에 곡면의 내재적 기하학을 세워 두었다. Theorema Egregium("놀라운 정리") — 곡면의 곡률은 곡면 위에서만 측정할 수 있는 양이다. 바깥에서 곡면을 바라볼 필요가 없다. 개미가 곡면 위를 기어다니면서, 삼각형의 내각의 합이 180도가 아니라는 것을 발견하면 — 그것만으로 자기가 휘어진 면 위에 있다는 것을 알 수 있다.
>
> Gauss가 2차원 곡면에서 한 것을 Riemann이 임의 차원으로 확장했다. n차원 공간에서 점마다 달라지는 계량. 이것이 리만 기하학이다.
>
> 강연이 끝난 뒤 교수 회의로 돌아가던 Gauss는, 뒤에 Dedekind가 남긴 기록에 따르면, 동료 Wilhelm Weber에게 Riemann이 보인 생각의 깊이를 드물게 들뜬 목소리로 크게 칭찬했다.
>
> Riemann은 1866년, 서른아홉에 결핵으로 죽었다. 60년쯤 뒤, Einstein이 일반상대론을 쓸 때 필요했던 수학이 바로 리만 기하학이었다. 그리고 1945년, 젊은 C. R. Rao가 확률분포의 공간에 피셔 정보로 리만 계량을 입혔다. 1980년대에 Amari가 그 위에 여러 접속을 얹어 정보기하학의 틀을 세웠다. 같은 도구가 세 번째 생을 살기 시작했다.

## 내재적 곡률: 안에서 재는 휨

좌표의 한 칸이 위치마다 다른 거리라는 것, 그것이 곧 공간이 휘었다는 뜻일까?

빛은 휘어진 시공간을 따라 간다고들 한다. 그런데 공간 자체가 휘었다는 건 무엇을 기준으로 한 말인가? 휘어짐을 재려면 그 바깥에 곧은 무언가가 있어야 하는 것 아닌가?

곡률을 처음 만나는 사람이 거의 예외 없이 걸려 넘어지는 질문이다. 결론부터 말하면, 바깥 기준은 필요 없다.

### 종이 두루마리와 귤 껍질 — 바깥의 휨과 안의 휨

종이를 둥글게 말면 우리는 바깥에서 그것이 휘었음을 본다. 이때 기준은 종이를 담고 있는 3차원 공간이다. 이런 휨을 **외재적 곡률**이라 부른다.

그런데 종이 위에 사는 개미를 생각하자. 개미는 종이 밖을 볼 수 없다. 자와 각도기만 있다. 종이를 말기 전과 후에, 종이 위에 그린 삼각형의 변 길이, 각도, 넓이는 하나도 변하지 않는다. 개미는 자기 세계가 말려 있는지 알아챌 방법이 없다. 원기둥은 외재적으로는 휘었지만 **내재적으로는 평평하다.**

귤 껍질은 다르다. 지구 표면을 찢거나 늘이지 않고 평평하게 펴는 것은 불가능하고, 지도 제작자들은 이 사실 때문에 수백 년간 고생해 왔다. 구면 위의 개미는 안에서만 재도 자기 세계가 휘었다는 것을 알아낼 수 있다. 이것이 **내재적 곡률**이다.

### 가우스의 놀라운 정리

가우스(1827)는 곡면의 휨을 두 가지 방법으로 계산했다.

하나는 바깥을 쓰는 방법이다. 곡면 위 한 점에서 바깥으로 수직선(법선)을 세우고, 그 법선을 품은 평면들로 곡면을 잘라 단면 곡선들의 휨을 본다. 가장 크게 휜 값과 가장 작게 휜 값을 주곡률이라 하고, 둘을 곱한다.

\`\`\`latex
\\textcolor{#5d9c2f}{K} = \\textcolor{#5d9c2f}{\\kappa}_1\\, \\textcolor{#5d9c2f}{\\kappa}_2
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#5d9c2f}{K} & \\text{가우스 곡률} \\\\
\\textcolor{#5d9c2f}{\\kappa} & \\text{주곡률 (첨자 1, 2는 가장 큰 휨과 가장 작은 휨)}
\\end{array}
\`\`\`

반지름 a인 원기둥은 둘레 방향으로 1/a만큼 휘었고, 길이 방향으로는 전혀 안 휘었다. 곱하면 K = (1/a) × 0 = 0이다. 반지름 a인 구는 모든 방향으로 1/a만큼 휘었다. K = 1/a².

다른 하나는 안에서만 재는 방법이다. 곡면 위에 자를 대고 잰 계량 g와 그 도함수만 가지고 계산한다. 가우스가 발견한 것은 두 결과가 **항상 같다**는 사실이었다. 그는 이것을 *Theorema Egregium*, 놀라운 정리라 불렀다.

> 가우스 곡률 K는 계량 g와 그 도함수만으로 결정된다. 따라서 곡면을 찢거나 늘이지 않고 구부리는 한, K는 변하지 않는다.

왜 놀라운가. 정의상 바깥을 봐야 하는 양이, 실은 안에서만 재도 결정된다는 뜻이기 때문이다. 바깥 공간은 계산의 편의였을 뿐 곡률의 **기준이 아니었다.** 종이를 말아도 K = 0은 그대로다. 그래서 원기둥은 펼 수 있다. 귤 껍질은 K > 0이다. 평면은 K = 0이다. 안에서 잰 양이 다르니 찢지 않고는 펼 수 없다.

### 한 칸의 크기는 기준이 아니다

이 장의 첫머리로 돌아가자. "좌표 한 칸이 곳마다 다른 거리이면 휘었다"는 생각은 틀렸다. 평면에 극좌표를 붙여 보면 안다.

\`\`\`latex
ds^2 = d\\textcolor{#2e9e6e}{r}^2 + \\textcolor{#2e9e6e}{r}^2\\, d\\textcolor{#2e9e6e}{\\phi}^2
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{r} & \\text{원점에서의 거리 (좌표)} \\\\
\\textcolor{#2e9e6e}{\\phi} & \\text{각도 (좌표)} \\\\
ds & \\text{실제 한 걸음의 길이}
\\end{array}
\`\`\`

각도 φ를 한 칸(0.1 라디안) 옮기면, r = 1에서는 0.1만큼, r = 10에서는 1만큼 걷는다. 열 배 차이다. 계량 성분 r²이 위치마다 다르다. 그래도 이것은 그냥 평면이다. K = 0. 한 칸의 크기가 달라진 것은 공간이 아니라 지도(좌표)를 그리는 방식 때문이다.

1차원은 더 극적이다. 구불구불한 곡선 위의 개미에게는 앞뒤로 잰 길이밖에 없다. 어떤 좌표를 붙여도 길이를 따라 다시 매기면 평범한 수직선이 된다. 1차원 매니폴드의 내재적 곡률은 언제나 0이다. 바깥에서 아무리 휘어 보여도.

그러니 "한 걸음이 어디서나 같은 크기인가"라는 질문에 "아니다"라고 답했다고 해서, 그것만으로 파라미터 공간이 휘었다고 말할 수는 없다. 휨을 말하려면 안에서 재는 시험이 필요하다.

### 점에서는 언제나 평평하다

그러면 무엇이 기준인가. 답은 **각 점에서의 평평함**이다.

서울 지도를 떠올리자. 지구가 둥글어도, 서울 근처만 그린 지도는 아주 정확하다. 어느 도시를 가운데 두고 지도를 그려도 마찬가지다. 수학으로 말하면, 어느 점 p에서든 좌표를 잘 고르면 이렇게 만들 수 있다.

\`\`\`latex
\\textcolor{#0e8f8f}{g}_{ij}(p) = \\delta_{ij}, \\qquad \\frac{\\partial \\textcolor{#0e8f8f}{g}_{ij}}{\\partial \\textcolor{#2e9e6e}{u}^k}(p) = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{g} & \\text{계량, } g_{ij} \\text{ 는 그 성분} \\\\
\\textcolor{#2e9e6e}{u} & \\text{점 } p \\text{ 근처에 잘 고른 좌표 (리만 정규좌표, 정규분포와 무관)} \\\\
\\delta_{ij} & \\text{단위행렬 (평면의 자)} \\\\
p & \\text{기준으로 삼은 한 점}
\\end{array}
\`\`\`

한 점에서 자를 평면의 자와 똑같이, 그리고 자가 변하는 기울기까지 0으로 만들 수 있다. 물리에서는 이것을 자유낙하하는 엘리베이터 안에서 중력이 사라지는 일로 만난다.

여기서 멈추면 "공간은 언제나 평평하다"가 되어 버린다. 그러나 한 단계 더 가면 막힌다. **자의 2차 미분은 어떤 좌표변환으로도 전부 없앨 수 없다.** 지워지지 않는 그 잔여분이 정확히 곡률이다.

곡률의 기준은 바깥 공간이 아니라, 한 점에서의 평평함을 이웃으로 넓히려 할 때 생기는 실패의 양이다. 기준은 밖이 아니라 점에 있다.

### 한 걸음 더 — 좌표로 지워지지 않는 20개의 수

아인슈타인의 일반상대론에서 "시공간이 휘었다"고 할 때의 휨은 내재적 곡률이다. 우주를 담는 더 큰 공간은 이론에 등장하지 않고, 필요하지도 않다. 물리학자들이 곡률을 세는 방식에서도 같은 논지를 확인할 수 있다.

"한 점에서는 자의 1차 미분까지 지울 수 있지만 2차 미분은 못 지운다"를 4차원 시공간에서 직접 세어 볼 수 있다. 점 p 근처에서 좌표변환을 테일러 전개하고, 각 차수에서 없애야 할 성분 수와 쓸 수 있는 변환 계수의 수를 비교한다.

| 차수 | 없애야 할 것 | 성분 수 | 쓸 수 있는 변환 계수 | 남는 것 |
|---|---|---|---|---|
| 0차 | 계량 g(p) | 10 | 1차 계수 16개 | 0 (여유 6개 = 로런츠 변환: 공간 회전 3 + 속도 바꾸기 3) |
| 1차 | g의 1차 미분 | 40 | 2차 계수 40개 | 0 |
| 2차 | g의 2차 미분 | 100 | 3차 계수 80개 | **20** |

남는 20개는 4차원 리만 곡률 텐서의 독립 성분 수와 정확히 같다. 좌표를 아무리 영리하게 골라도 지워지지 않는 20개의 수, 그것이 시공간의 곡률이다. 2차원 곡면에서 같은 셈을 하면 1개가 남는다. 가우스 곡률 K 하나다.

### 수확

"곡률은 안에서 잰다. 바깥에서 휘어 보이는 것(원기둥)도, 좌표 한 칸이 곳마다 다른 것(극좌표)도 곡률이 아니다. 점에서의 평평함을 넓히려 할 때 남는 실패, 그것이 곡률이다."

### 문제 1. 극좌표와 원기둥은 휘었는가

(가) 평면의 극좌표 계량 ds² = dr² + r²dφ²에서 φ를 0.1만큼 옮기는 한 걸음의 길이를 r = 1과 r = 10에서 구하라. (나) 반지름 a인 원기둥의 계량을 (φ, h) 좌표로 쓰고 가우스 곡률을 구하라. (다) 두 결과로 "좌표 한 칸이 곳마다 다르면 휘었다"와 "원기둥은 보기에 휘었으니 휘었다"를 각각 판정하라.

#### 함께 풀기

**김민준:** (가)는 바로 나와요. r = 1이면 0.1, r = 10이면 1이요. 열 배 차이니까 극좌표 공간은 바깥으로 갈수록 휘어 있는 거죠.

**선생님:** 극좌표 공간이라는 게 따로 있어요? 무슨 종이 위에 그린 좌표예요?

〔M04〕 **김민준:** …평면이요. 모눈종이에 원이랑 방사선을 그린 거요. 아, 종이는 그대로인데 제가 지도만 바꿨네요.

**이서연:** 그러니까 한 칸의 크기는 좌표를 어떻게 그리느냐에 딸린 거야. (나)도 같아. 원기둥을 (φ, h)로 쓰면 ds² = a²dφ² + dh²인데, u = aφ로 바꾸면 ds² = du² + dh², 그냥 평면이야. K = 0.

**선생님:** 좋아요. 그럼 서연 학생, 좌표를 잘 바꾸면 휜 것처럼 보이던 게 평평해진다는 얘기네요. 구면도 좌표를 잘 고르면 평평해질까요?

**이서연:** 그렇겠죠. 결국 휨이란 게 전부 좌표 효과라면요. 정규좌표도 어느 점에서나 평평하게 만들 수 있다고 했잖아요.

**선생님:** 정규좌표가 평평하게 만드는 건 어디까지였죠?

〔S06〕 **이서연:** 한 점에서, 자와 그 1차 미분까지요. 2차 미분은 못 지워요. …그러면 한 점이 아니라 동네 전체를 평면 자로 만들 수 있는지가 진짜 질문이네요.

**선생님:** 그걸 좌표 없이 판정하는 방법이 있어요. 원기둥 위에 반지름 r인 원을 그려서 둘레를 재 봐요.

**이서연:** 원기둥을 펴면 평면이니까 2πr이요. r이 원기둥 둘레의 반, πa를 넘기 전까지는요. 구면이면 2πa sin(r/a)라서 2πr보다 모자라요. 이건 좌표를 어떻게 잡든 줄자로 잰 값이라 안 바뀌어요.

〔S07〕 **이서연:** 아, 원기둥이 휘어 보이는 건 3차원에 넣은 방식이고, 극좌표의 한 칸이 커지는 건 지도를 그린 방식이에요. 둘 다 안에서 재는 곡률이 아니에요.

**김민준:** 과제 채점표에서 점수를 100점 만점으로 매기든 5점 만점으로 매기든 등수는 안 바뀌는 거랑 비슷하네. 눈금이 다른 거지 실력이 달라진 게 아니고.

**선생님:** 그래요. (다)의 답은 둘 다 "아니다"예요. 휨을 말하려면 좌표와 바깥을 모두 빼고 남는 것, 둘레나 각도나, 화살표를 한 바퀴 옮겨 돌아왔을 때의 모습을 봐야 해요.

## 곡률 재기: 개미의 줄자

곡률이 한 점의 평평함을 이웃으로 넓히려다 생기는 실패의 양이라면, 그 실패는 실제로 어떻게 잴까? 공간 밖으로 나갈 수 없는 개미에게 남은 도구는 자와 각도기뿐이다.

### 안에서 재는 네 가지 방법

바깥을 보지 않고도 곡률을 잴 수 있다. 아래 넷은 모두 그 공간 안에 사는 개미가 할 수 있는 실험이다.

① 화살표를 방향을 지키며 고리를 따라 한 바퀴 옮긴다. 돌아왔을 때 화살표가 돌아가 있으면 휘었다. (다음 절)
② 나란히 출발한 두 개미가 똑바로 걷는다. 서로 벌어지거나 좁혀지는 정도가 곡률이다. (아래 「한 걸음 더」)
③ 가장 짧은 길 셋으로 삼각형을 만들고 내각을 더한다. 180도보다 크면 K > 0, 작으면 K < 0. 넘치거나 모자란 양은 삼각형 안의 곡률을 넓이에 대해 합한 값이다.
④ 한 점에서 거리 r인 점들을 이어 원을 만들고 줄자로 둘레를 잰다.

넷째가 가장 손에 잡힌다.

\`\`\`latex
C(r) = 2\\pi r \\left(1 - \\frac{\\textcolor{#5d9c2f}{K}}{6}\\, r^2 + \\cdots\\right)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
C(r) & \\text{중심에서 (가장 짧은 길로 잰) 거리 } r \\text{ 인 점들이 이루는 원의 둘레} \\\\
r & \\text{반지름 (곡면 위에서 잰 거리)} \\\\
\\textcolor{#5d9c2f}{K} & \\text{중심점의 가우스 곡률} \\\\
\\cdots & r^4 \\text{ 이상의 작은 항}
\\end{array}
\`\`\`

평면이면 둘레는 정확히 2πr이다. 구면(K > 0)이면 둘레가 모자라고, 안장 모양(K < 0)이면 둘레가 남는다. **줄자 하나면 된다.**

{{viz: ch08/circle-deficit}}

### 파이썬

계량만 넣고 곡률을 계산한다. 바깥 3차원 좌표는 한 번도 쓰지 않는다.

\`\`\`python
import sympy as sp

def gauss_K(E, G, u, v, W=None):
    """ds² = E du² + G dv² (직교 좌표)의 가우스 곡률. 계량과 그 미분만 쓴다."""
    W = sp.sqrt(E * G) if W is None else W        # W = √(EG)
    return sp.simplify(-(sp.diff(sp.diff(G, u) / W, u) + sp.diff(sp.diff(E, v) / W, v)) / (2 * W))

r, phi, h, vt, a = sp.symbols("r phi h vartheta a", positive=True)
print("극좌표 평면 K =", gauss_K(1 + 0 * r, r**2, r, phi))
print("원기둥     K =", gauss_K(a**2 + 0 * phi, 1 + 0 * h, phi, h))
print("구면       K =", gauss_K(a**2 + 0 * vt, a**2 * sp.sin(vt)**2, vt, phi, W=a**2 * sp.sin(vt)))

# 구면의 측지 원: 북극에서 거리 r 인 점들의 둘레
C = 2 * sp.pi * a * sp.sin(r / a)
print("둘레 전개  C(r) =", sp.series(C, r, 0, 5).removeO().expand())
# 극좌표 평면 K = 0
# 원기둥     K = 0
# 구면       K = a**(-2)
# 둘레 전개  C(r) = 2*pi*r - pi*r**3/(3*a**2)
\`\`\`

극좌표의 r²도, 원기둥의 a²도 곡률을 만들지 못했다. 구면의 둘레 전개 2πr − πr³/(3a²)를 2πr(1 − Kr²/6)과 맞춰 보면 K = 1/a²이다. 바깥에서 잰 주곡률의 곱과 같다. 가우스가 본 일치다.

### 한 걸음 더 — 조석력, 두 입자가 벌어지는 정도

자유낙하하는 엘리베이터 안에서 중력은 사라진다. 하지만 완전히는 아니다. 나란히 떨어지는 두 공은 지구 중심을 향하므로 조금씩 가까워진다. 나란히 출발한 두 측지선 사이의 간격 ξ가 벌어지거나 좁혀지는 가속도가 곡률이다.

\`\`\`latex
\\frac{D^2 \\xi^{a}}{d\\tau^2} = -\\sum_{b,c,d} \\textcolor{#5d9c2f}{R}^{a}{}_{bcd}\\, u^{b}\\, \\xi^{c}\\, u^{d}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\xi & \\text{이웃한 두 측지선 사이의 간격 벡터} \\\\
u & \\text{측지선을 따라 가는 속도 (4-속도)} \\\\
\\textcolor{#5d9c2f}{R} & \\text{리만 곡률 텐서} \\\\
D^2/d\\tau^2 & \\text{입자의 시계로 잰 시간(고유시간) } \\tau \\text{ 로 시공간을 따라 두 번 미분한 것} \\\\
a,\\ b,\\ c,\\ d & \\text{시공간 좌표의 번호}
\\end{array}
\`\`\`

입자 하나의 중력은 좌표를 바꿔 지울 수 있지만, 두 입자의 상대 가속도는 지울 수 없다. 밀물과 썰물, 그리고 LIGO가 잡아낸 중력파가 모두 이 항을 잰 것이다.

### 수확

"곡률은 그 공간 안의 도구, 줄자와 각도기와 화살표로 잰다. 원의 둘레가 2πr보다 모자라면 K > 0, 남으면 K < 0. 계량만으로 계산한 곡률이 바깥에서 잰 주곡률의 곱과 같다."

### 문제 2. 줄자로 잰 지구의 곡률

반지름 a인 구면에서 북극을 중심으로 (구면 위에서 잰) 거리 r인 원의 둘레가 C(r) = 2πa sin(r/a)임을 보이고, C(r) = 2πr(1 − Kr²/6 + …)과 비교해 K = 1/a²임을 확인하라. 지구(a = 6371 km)에서 r = 1000 km인 원을 잰다면 둘레는 2πr보다 몇 퍼센트 모자라는가? 이 공식을 r = πa/2(적도)와 r = πa(남극)에 그대로 써도 되는가?

#### 함께 풀기

**이서연:** 북극에서 거리 r인 점은 극각 r/a에 있어요. 그 위도선의 반지름이 a sin(r/a)니까 둘레가 2πa sin(r/a). 전개하면 2πr − πr³/(3a²)이라 K = 1/a²이에요.

**김민준:** 숫자도 돌렸어요. r = 1000 km면 C = 6257.4 km, 2πr은 6283.2 km. 0.41% 모자라요.

**선생님:** 그 0.41%로 지구 반지름을 거꾸로 구할 수 있어요?

**김민준:** K ≈ 6(1 − C/2πr)/r²으로 두면… 반지름 6375 km가 나와요. 진짜가 6371이니 거의 맞아요. r = 100 km로 줄이면 6371.04 km고요.

**이서연:** 그럼 이 공식으로 더 멀리 재도 되겠네요. r을 키우면 모자라는 비율이 커지니까 오히려 더 잘 보일 거예요. 적도까지 r = πa/2로 넣으면…

〔S05〕 **이서연:** 이상해요. 공식은 37,021 km라는데 적도 둘레는 40,030 km예요. 남극까지 r = πa를 넣으면 둘레가 −81,106 km로 음수가 나와요.

**선생님:** 전개식에 붙어 있던 점 세 개는 뭐였죠?

〔S08〕 **이서연:** r⁴ 이상의 항이요. r이 a에 비해 작을 때만 버릴 수 있어요. 이 공식은 한 점 근처의 곡률을 재는 국소 공식이지 큰 원의 둘레 공식이 아니에요. 큰 원은 정확한 식 2πa sin(r/a)를 써야 해요.

**선생님:** 그리고 민준 학생 계산은 반대 방향으로 조심해야 해요. r을 너무 작게 하면 어떻게 될까요?

**김민준:** 모자라는 비율이 r²에 비례하니까, r = 10 km면 0.00004%예요. 실제로 줄자로 재면 측정 오차에 묻히겠네요. 조별 과제에서 차이가 너무 작으면 채점 오차랑 구분이 안 되는 거랑 같네요.

**선생님:** 그래서 곡률은 "너무 작지도 크지도 않은" 원으로 재요. 곡률이 정의되는 건 한 점에서지만, 재는 건 늘 적당한 크기의 이웃에서예요.

### 문제 3. 모든 대원을 직선으로 그리는 지도

첫 절의 파이썬에서 서울–뉴욕의 대원은 11,052 km, (위도, 경도) 좌표의 직선은 13,716 km였다. (가) 왜 위경도 지도의 직선은 가장 짧은 길이 아닌가? (나) 대원이 모두 직선으로 보이는 지도를 만들면 그 지도 위에서 거리까지 맞출 수 있는가?

#### 함께 풀기

**김민준:** (가)는 지도에서 경도 한 칸이 위도에 따라 달라서요. 고위도에서 경도 1도는 짧으니까, 북쪽으로 올라가서 경도를 많이 건너는 게 이득이에요. 대원은 그래서 북위 77도까지 올라가요.

**이서연:** 그럼 (나)는 쉬워. 대원이 전부 직선이 되는 지도가 실제로 있어. 지구 중심에 전구를 두고, 지구에 한 점에서 닿는 평면(접평면)에 그림자를 비추는 심사도법. 대원을 품은 평면이 지구 중심을 지나니까, 그 그림자는 직선이야. 그 지도에서 자로 재면 되는 거 아냐?

**선생님:** 심사도법 지도에서 서울 근처 1 cm와 지도 가장자리 1 cm가 같은 거리예요?

**이서연:** 가장자리로 갈수록 그림자가 늘어나니까… 달라요. 직선은 맞는데 눈금이 틀려요.

〔S06〕 **이서연:** 그럼 눈금까지 맞춰서, 직선도 맞고 거리도 맞는 지도를 만들면요? 좌표만 잘 고르면 될 것 같은데요.

**선생님:** 그런 지도가 있다면 지구 표면의 자를 평면의 자로 그대로 옮긴 거예요. 그러면 그 지도 위에 그린 원의 둘레는요?

〔S09〕 **이서연:** 평면이니까 2πr이어야 하는데, 지구 위에서 잰 둘레는 2πa sin(r/a)예요. 둘레는 좌표와 상관없는 값이니까 모순이에요. 가우스의 정리가 막는 거네요. 곡률이 0이 아니면 거리를 보존하는 평면 지도는 없어요.

**김민준:** 모든 지도가 뭔가를 포기한다는 게 이거구나. 메르카토르는 각도를, 심사도법은 직선을 지키고 거리를 버리고.

**선생님:** 그래요. (나)의 답은 "직선은 되지만 거리는 안 된다"예요. 곧음과 길이, 둘 다 지키는 평면 지도는 휜 땅에서는 불가능해요.

## 접속: 곧음을 정하는 규칙

자가 있으면 '크기'를 잴 수 있다. 그런데 '방향'은? 그리고 가장 짧은 길 말고, '곧은 길'은 무엇일까?

### 서울의 북쪽, 부산의 북쪽 — 방향은 옮겨야 비교된다

서울에서 "북쪽"이라고 하면 종로 방향이다. 부산에서 "북쪽"이라고 하면 대구 방향이다. 둘 다 "북쪽"인데, 지구본 위에서 보면 두 화살표는 같은 방향이 아니다. 곡면 위에서는 떨어진 두 점의 방향을 직접 비교할 수 없다.

비교하려면 하나의 화살표를 곡면을 따라 조심스럽게 옮겨와야 한다. 매 걸음 "방향을 바꾸지 않는다"는 것이 무엇인지 정해 주는 규칙, 그것이 접속이다. 접속을 따라 옮기는 것을 평행이동(parallel transport)이라 부른다. 그래프를 모양 그대로 밀어 옮기는 것과 달리, 곡면 위에서 방향을 지키며 옮기는 것이다.

### 옮기는 길에 따라 결과가 다르다

지구본 위에서 직접 해 보자. 적도 위의 한 점에서 북쪽을 가리키는 화살표를 든다. 경선을 따라 북극까지 올라간다. 화살표는 계속 진행 방향, 북쪽을 가리킨다. 북극에서 화살표 방향을 그대로 두고, 경도가 90도 다른 경선을 따라 적도로 내려온다. 이번에는 화살표가 진행 방향의 옆을 가리킨 채 내려온다. 적도를 따라 처음 자리로 돌아온다.

화살표는 처음보다 90도 돌아가 있다. 한 번도 "돌리지" 않았는데.

평면에서는 이런 일이 없다. 어느 고리를 돌아도 화살표는 제자리다. 원기둥도 마찬가지다. 안에서는 평평하니까. 구면에서는 돌아온 각이 고리가 감싼 넓이에 곡률을 곱한 값과 같다. 북극과 적도의 두 점이 만든 삼각형은 구 전체 넓이의 8분의 1, 곧 반지름이 1이면 π/2다. 그래서 90도다. 이것이 곡률을 안에서 재는 첫째 방법, 평행이동의 불일치(홀로노미)다.

{{viz: ch08/holonomy}}

### 곧은 길 — 측지선의 두 번째 얼굴

앞에서 측지선을 "가장 짧은 길"로 만났다. 측지선에는 얼굴이 하나 더 있다. **자기 진행 방향을 평행이동하며 가는 길**, 곧 한 번도 방향을 틀지 않는 길이다.

\`\`\`latex
\\frac{d^2 \\textcolor{#2e9e6e}{u}^k}{dt^2} + \\sum_{i,j} \\textcolor{#8f7a5a}{\\Gamma}^k_{ij}\\, \\frac{d\\textcolor{#2e9e6e}{u}^i}{dt}\\, \\frac{d\\textcolor{#2e9e6e}{u}^j}{dt} = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{u} & \\text{좌표, } u^k(t) \\text{ 는 시각 } t \\text{ 의 위치} \\\\
\\textcolor{#8f7a5a}{\\Gamma} & \\text{크리스토펠 기호 (접속을 좌표로 적은 것)} \\\\
t & \\text{길을 따라가는 시간} \\\\
i,\\ j,\\ k & \\text{좌표의 번호}
\\end{array}
\`\`\`

Γ가 모두 0이면 좌표 위의 직선이다. Γ가 무엇이냐에 따라 "곧다"의 뜻이 달라진다. 이 식은 Γ, 곧 접속이 주어져야 비로소 의미를 가진다.

리만 기하학은 여기서 관례 하나를 둔다. 자를 옮겨도 자가 망가지지 않고(평행이동이 길이와 각을 지킨다), 비틀림(작은 평행사변형을 옮겨 그렸을 때 닫히지 않고 벌어지는 정도)이 없는 접속은 딱 하나뿐이다. 레비-치비타 접속이다. 이 접속을 고르면 "곧은 길"과 "가장 짧은 길"이 일치한다. 구면의 대원은 둘 다다.

**그러나 이것은 정리가 아니라 선택이다.**

### 정보기하학은 접속을 여럿 쓴다

확률분포의 공간에는 피셔 자가 하나 놓인다. 그 자 위에 얹을 수 있는 자연스러운 접속은 하나가 아니다. α라는 수 하나로 줄 세운 한 가족이 있다. 그 가운데 셋이 특별하다.

- α = 0 : 레비-치비타 접속. 곧은 길 = 피셔 자로 잰 가장 짧은 길.
- α = +1 : e-접속(e = 지수, exponential). θ 좌표(자연모수)에서 곧은 길이 직선이다. 곱셈의 길.
- α = −1 : m-접속(m = 혼합, mixture). η 좌표(기대모수)에서 곧은 길이 직선이다. 덧셈의 길.

같은 두 점을 잇는 곧은 길이 곱셈의 길과 덧셈의 길, 두 개인 이유가 이것이다. 자가 둘이어서가 아니다. 자는 하나다. "곧음"의 규칙, 접속이 둘이어서다. e-측지선과 m-측지선은 곧은 길이지 가장 짧은 길이 아니다.

### 곡률은 (공간, 접속) 쌍의 성질이다

접속이 바뀌면 평행이동이 바뀌고, 고리를 돈 화살표가 돌아가는 각도 바뀐다. 그러니 곡률도 바뀐다. 정확한 말은 이렇다. **곡률은 공간 혼자의 성질이 아니라, 공간과 접속 쌍의 성질이다.**

가장 선명한 실물이 1차원 정규분포족 N(μ, σ²)이다. 이 공간의 피셔 자는 다음과 같다.

\`\`\`latex
ds^2 = \\frac{d\\textcolor{#2e9e6e}{\\mu}^2 + 2\\, d\\textcolor{#2e9e6e}{\\sigma}^2}{\\textcolor{#2e9e6e}{\\sigma}^2}, \\qquad \\textcolor{#5d9c2f}{K} = -\\frac{1}{2}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{\\mu} & \\text{평균 (좌표)} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차 (좌표)} \\\\
ds & \\text{피셔 자로 잰 한 걸음} \\\\
\\textcolor{#5d9c2f}{K} & \\text{이 자의 레비-치비타 접속이 주는 가우스 곡률 (어디서나 같다)}
\\end{array}
\`\`\`

레비-치비타 접속으로 보면 이 공간은 곡률이 −1/2로 일정한, 안장처럼 휜 쌍곡 평면이다. 그런데 같은 공간이 e-접속으로 보면 평평하다. θ 좌표에서 e-곧은 길이 모두 직선이고, 고리를 돌아도 화살표가 돌아가지 않는다. m-접속으로 보아도 평평하다. 짝을 이룬 두 접속 모두에서 평평하다는 뜻으로, 이것을 쌍대평탄(dually flat)이라 부른다.

공간도 같고 자도 같다. 바꾼 것은 "무엇을 곧다고 부를 것인가" 하나뿐인데, 공간이 평평해지기도 하고 휘어지기도 한다. 그래서 이 책에서 "곡률"이라고 쓸 때는 어느 접속의 곡률인지 밝힌다.

### 파이썬

지구본 실험을 계산으로 한다. 대원 호를 따라가는 평행이동은 그 대원의 축을 중심으로 한 회전이다.

\`\`\`python
import numpy as np

def to_xyz(lat, lon):
    la, lo = np.radians(lat), np.radians(lon)
    return np.array([np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)])

def transport(v, P, Q):
    """대원 호 P→Q 를 따라 접벡터 v 를 평행이동: 호의 축을 중심으로 한 회전"""
    k = np.cross(P, Q); s = np.linalg.norm(k); k /= s
    ang = np.arctan2(s, P @ Q)
    Kx = np.array([[0, -k[2], k[1]], [k[2], 0, -k[0]], [-k[1], k[0], 0]])
    return (np.eye(3) + np.sin(ang) * Kx + (1 - np.cos(ang)) * Kx @ Kx) @ v

def excess(A, B, C):                            # 내각의 합 − 180°
    def angle(P, Q, R):
        u, w = Q - (Q @ P) * P, R - (R @ P) * P
        return np.arccos(u @ w / np.linalg.norm(u) / np.linalg.norm(w))
    return np.degrees(angle(A, B, C) + angle(B, C, A) + angle(C, A, B)) - 180

N = np.array([0.0, 0.0, 1.0])
for dlon in [90, 60, 30]:
    A, B = to_xyz(0, 0), to_xyz(0, dlon)        # 적도 위 두 점, 꼭짓점 하나는 북극
    v0 = N - (N @ A) * A                         # A 에서 북쪽을 가리키는 화살표
    v = transport(transport(transport(v0, A, N), N, B), B, A)
    turn = np.degrees(np.arccos(np.clip(v @ v0, -1, 1)))
    print(f"경도차 {dlon:2d}°  화살표 회전 {turn:5.1f}°  내각합−180° {excess(A, N, B):5.1f}°")
# 경도차 90°  화살표 회전  90.0°  내각합−180°  90.0°
# 경도차 60°  화살표 회전  60.0°  내각합−180°  60.0°
# 경도차 30°  화살표 회전  30.0°  내각합−180°  30.0°
\`\`\`

돌아간 각, 내각이 180도를 넘는 양, 반지름 1인 구 위의 넓이(라디안). 셋이 같은 수다. 안에서 재는 서로 다른 두 실험이 같은 곡률을 가리킨다.

### 한 걸음 더 — 곡률 0인 중력, 텔레패럴 중력

일반상대론은 레비-치비타 접속을 골랐다. 다른 접속을 고르면 어떻게 될까. 바이첸뵈크(Weitzenböck) 접속을 쓰는 텔레패럴 중력은 곡률을 0으로 두고, 대신 비틀림(torsion)에 중력의 역할을 맡긴다. 그러면서도 운동방정식이 일반상대론과 같아서, 관측 가능한 예측도 같다.

그러니 "시공간은 휘어 있다"는 자연이 강제한 유일한 서술이라기보다, 레비-치비타 접속이라는 가장 편리한 관례를 택했을 때 나오는 서술이다. 정규분포족이 e-접속으로는 평평하고 레비-치비타 접속으로는 휘었던 것과 같은 이야기다. 빛은 휘지 않는다. 빛은 언제나 곧게 간다. 다만 우리가 "곧다"고 부르기로 한 그 길이, 멀리서 보면 예상한 자리에 있지 않을 뿐이다.

### 수확

"측지선에는 두 얼굴이 있다. 자가 정하는 가장 짧은 길, 접속이 정하는 곧은 길. 정보기하학에서 자는 하나, 접속은 여럿이다. 곡률은 공간과 접속이 함께 정한다. 같은 정규분포족이 e-접속으로는 평평하고, 피셔 자의 레비-치비타 접속으로는 K = −1/2로 휘었다."

이제 이 장 첫머리의 질문에 답할 수 있다. 한 걸음의 크기가 곳마다 다른 것은 자의 눈금 이야기다. 휘었는지는 어느 접속으로 보느냐에 따라 다르다.

### 문제 4. 고리를 돈 화살표 (킬러)

구면 위의 삼각형을 따라 화살표를 평행이동하면 돌아간 각이 "삼각형의 넓이 × 곡률"과 같다(반지름 1이면 넓이 그 자체). (가) 북극과 적도 위의 두 점(경도차 90°)으로 만든 삼각형에서 이를 확인하라. (나) 꼭짓점이 (30°N, 0°), (30°N, 10°E), (40°N, 5°E)인 작은 삼각형에서 수치로 확인하라. (다) 이 회전이 "3차원에서 접평면이 기울어서" 생긴 외재적 효과가 아님을 보여라. (라) 같은 실험을 정규분포족의 피셔 자 위에서 한다면 화살표는 어느 쪽으로 도는가?

#### 함께 풀기

**김민준:** (가)는 파이썬 절 그대로예요. 90도 돌고, 삼각형 넓이는 구의 8분의 1이라 π/2, 90도예요.

**김민준:** (나)는 제가 짠 코드로 했어요. 변마다 점을 몇 개 찍고, 한 점씩 옮기면서 화살표를 그 점의 접평면에 사영하고 길이를 1로 맞추는 방식이요. 변마다 한 걸음씩만 가면 회전이 0.737도인데, 내각합−180°는 0.751도예요.

〔M05〕 **김민준:** 2% 가까이 차이 나요. 그러니까 "회전각 = 넓이"는 큰 삼각형에서만 맞는 근사 법칙이고, 작은 삼각형에서는 곡률이 넓이 말고 다른 데서도 새어 들어오는 것 같아요.

**선생님:** 변마다 걸음 수를 늘려 봐요. 법칙이 틀렸다면 차이가 그대로 남아야겠죠.

**김민준:** 10걸음이면 0.7496, 1000걸음이면 0.75057이에요. 내각합−180°는 0.75058이고요.

〔M08〕 **김민준:** 걸음을 늘릴수록 붙어요. 새어 들어온 건 곡률이 아니라 제 코드가 대원을 뚝뚝 끊어 간 오차였어요.

**이서연:** 그건 됐는데, 나는 (다)가 걸려요. 민준이 코드도 결국 3차원에서 접평면에 사영하는 거잖아요. 화살표는 3차원에서 보면 매 순간 가능한 한 안 돌았는데, 접평면이 계속 기울어서 결과적으로 돈 거예요. 그러면 이건 바깥에서 본 휨, 외재적 효과 아닌가요?

**선생님:** 그 논리대로면 접평면이 기울기만 하면 화살표가 돌아야겠네요. 접평면이 기울지만 안에서는 평평한 곡면이 있었죠?

**이서연:** 원기둥이요. 원기둥 둘레를 따라가면 접평면이 계속 돌아가니까, 제 말대로면 원기둥에서도 화살표가 돌아야 해요.

**김민준:** 같은 코드로 원기둥 위 삼각형을 돌려 볼게. 꼭짓점을 펼친 좌표로 (0, 0), (π/2, 0), (π/4, 1)로 잡고… 2걸음부터 1000걸음까지 전부 0.0도야.

〔S08〕 **이서연:** 접평면은 똑같이 기울었는데 안 돌아요. 그러니까 회전은 접평면의 기울기가 아니라 곡면 안의 곡률에서 와요. 구면에서 3차원 사영을 쓴 건 계산 수단일 뿐이었어요.

**선생님:** 맞아요. 평행이동은 곡면 위의 자만 알면 정해져요. 가우스의 정리와 같은 이야기예요. 그럼 (라)는요?

**이서연:** 정규분포족의 피셔 자는 레비-치비타 접속으로 K = −1/2예요. 곡률이 음수니까 내각의 합이 180도보다 작고, 화살표도 반대쪽으로 돌 거예요. 돌아간 각은 넓이의 절반이고요.

〔S10〕 **이서연:** 그런데 e-접속으로 옮기면 곡률이 0이니까, 같은 고리를 돌아도 화살표는 그대로 돌아와요. 고리도 같고 자도 같은데, 옮기는 규칙만 바꿨더니 결과가 달라요. 곡률이 접속의 성질이라는 게 이 말이었어요.

**김민준:** 조별 과제 파일을 조원들 사이로 한 바퀴 돌리는 거랑 비슷하네. 각자 "안 고치고 넘겼다"고 해도, 무엇을 "안 고쳤다"로 치느냐에 따라 돌아온 파일이 다른 거지. 서식만 안 건드리는 규칙이면 내용이 바뀌어 오고, 내용을 안 건드리는 규칙이면 서식이 바뀌어 오고.

〔T13〕 **선생님:** 오늘 두 사람 다 같은 함정의 양쪽을 봤어요. 민준 학생은 계산 오차를 곡률로 읽을 뻔했고, 서연 학생은 곡률을 바깥의 효과로 읽을 뻔했어요. 곡률은 그 둘을 다 걷어낸 뒤에 남는 것, 공간과 접속이 함께 정하는 안쪽의 양이에요.
`,$4=`# 파라미터 공간의 곡률

좌표의 한 칸은 어디서나 같은 거리가 아니다. 그리고 그것만으로는 공간이 휘었다고 말할 수 없다. 한 칸의 크기는 자(ruler)의 눈금이고, 곡률은 그 자와 접속(connection, 무엇을 곧은 길로 볼지 정하는 규칙)이 함께 정하는 안쪽의 양이다.

그러니 먼저 자가 필요하다. 확률분포의 공간에 놓을, 공정한 자.

그 자의 정체가 이 장에 있다. 제목은 "곡률"이지만 이 장의 주인공은 자, 피셔 계량(곳마다 작은 걸음의 길이를 재는 규칙)이다. 곡률은 그 자에서 계산되는 한 가지 결과로 장 뒤쪽에서 나온다.

## 피셔 정보: 분포가 모수의 떨림을 느끼는 정도

같은 크기만큼 모수(분포를 정하는 숫자)를 바꿔도, 어떤 분포는 거의 안 변하고 어떤 분포는 확 변한다. 이 '민감도'를 숫자로 쓸 수 있을까?

### 볼륨 다이얼 — 같은 1mm, 다른 변화

볼륨 다이얼을 1mm 돌렸을 때, 조용한 클래식 곡에서는 거의 차이가 안 들린다. 하지만 베이스가 꽉 찬 힙합 곡에서는 같은 1mm가 온 방을 울린다. 다이얼의 물리적 회전량은 같은데, 음악이 느끼는 변화의 크기가 다르다. 그 "느끼는 크기"가 피셔 정보다.

### 이퀄라이저 — 방향마다 다른 민감도

이퀄라이저의 저음 슬라이더를 올리면 힙합은 폭발하지만 피아노 독주는 별 차이 없다. 고음 슬라이더는 반대다. "어느 방향으로 흔들었느냐"에 따라 민감도가 다르다 — 모수가 여러 개일 때 피셔 정보가 스칼라가 아니라 행렬이 되는 이유다.

![같은 한 걸음, 다른 민감도](/images/chapters/ch09-ruler-sensitivity.svg)

### 왜 log p의 기울기인가

연봉 3000만원의 300만원 인상과 3억의 300만원 인상이 다르듯, 확률 0.01의 0.01 변화와 확률 0.5의 0.01 변화는 다르다. ∇log p = ∇p / p 가 이 상대적 변화를 잡아낸다. 이 장 마지막 절에서 이 질문을 따로 다룬다.

데이터 x 하나를 보고, 모수 θ를 살짝 움직였을 때 log p(x|θ)가 얼마나 변하는지(∇_θ log p)를 모수에 대한 스코어(score)라 부른다. 디퓨전 모형이 쓰는 데이터에 대한 스코어 ∇ₓ log p와는 미분하는 대상이 다르다. 이 장의 스코어는 모두 모수에 대한 스코어다. 피셔 정보는 이 스코어가 얼마나 크게 흔들리는지, 곧 스코어의 분산이다. 모수가 하나일 때는 스칼라다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{\\theta}) = \\mathbb{E}\\!\\left[\\left(\\frac{\\partial \\textcolor{#b58a00}{\\ell}}{\\partial \\textcolor{#2e9e6e}{\\theta}}\\right)^{2}\\right], \\qquad \\textcolor{#b58a00}{\\ell}(\\textcolor{#2e9e6e}{\\theta}) = \\log \\textcolor{#7f8f10}{p}(\\textcolor{#6f8fa6}{x} \\mid \\textcolor{#2e9e6e}{\\theta})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{분포의 모수 (이 장에서는 일반 모수, 예: } \\mu,\\ \\sigma \\text{)} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{로그우도 (모형이 관측 } x \\text{ 에 준 확률의 로그), } \\partial\\ell/\\partial\\theta \\text{ 가 스코어} \\\\
\\textcolor{#7f8f10}{p} & \\text{모수 } \\theta \\text{ 가 정하는 분포 (모형)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 한 개} \\\\
\\mathbb{E} & \\text{모형 } p(x\\mid\\theta) \\text{ 에서 뽑은 } x \\text{ 에 대한 평균}
\\end{array}
\`\`\`

모수가 여러 개일 때(예: μ와 σ)는 각 방향의 스코어가 서로 얽힌 행렬이 된다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}_{jk}(\\textcolor{#2e9e6e}{\\theta}) = \\mathbb{E}\\!\\left[\\frac{\\partial \\textcolor{#b58a00}{\\ell}}{\\partial \\textcolor{#2e9e6e}{\\theta}_j}\\, \\frac{\\partial \\textcolor{#b58a00}{\\ell}}{\\partial \\textcolor{#2e9e6e}{\\theta}_k}\\right]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬, } I_{jk} \\text{ 는 그 성분} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모수 벡터, } \\theta_j \\text{ 는 } j \\text{ 번째 성분} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{로그우도} \\\\
j,\\ k & \\text{모수의 번호}
\\end{array}
\`\`\`

스칼라의 제곱이 벡터의 바깥곱(열벡터 × 행벡터 = 행렬, ggᵀ)으로 확장된 것이다. 이것이 이 장 뒤에서 만날 피셔 정보 "행렬"의 정체다.

### 왜 분산인가?

스코어의 평균은 언제나 0이다. 증명은 한 줄이다.

\`\`\`latex
\\mathbb{E}\\!\\left[\\frac{\\partial \\textcolor{#b58a00}{\\ell}}{\\partial \\textcolor{#2e9e6e}{\\theta}}\\right] = \\int \\textcolor{#7f8f10}{p}\\, \\frac{\\partial_{\\textcolor{#2e9e6e}{\\theta}} \\textcolor{#7f8f10}{p}}{\\textcolor{#7f8f10}{p}}\\, d\\textcolor{#6f8fa6}{x} = \\frac{\\partial}{\\partial \\textcolor{#2e9e6e}{\\theta}} \\int \\textcolor{#7f8f10}{p}\\, d\\textcolor{#6f8fa6}{x} = \\frac{\\partial}{\\partial \\textcolor{#2e9e6e}{\\theta}}\\, 1 = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#b58a00}{\\ell} & \\text{로그우도 } \\log p(x\\mid\\theta) \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모수} \\\\
\\textcolor{#7f8f10}{p} & \\text{모형 분포 } p(x\\mid\\theta) \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 (적분 변수)}
\\end{array}
\`\`\`

확률은 어떤 θ에서든 합이 1이다. 1은 θ를 움직여도 변하지 않는다. 그래서 스코어는 평균적으로 0 주위를 오르내린다. 둘째 등호에서 미분과 적분의 순서를 바꿨다. 이것이 허락되지 않는 분포도 있다(아래 문제 1).

평균이 0인 양의 "크기"를 재려면 제곱 평균 = 분산을 쓰는 것이 자연스럽다. 분산이 크면 → 데이터가 모수에 대해 할 말이 많다. 분산이 작으면 → 데이터가 모수에 대해 무심하다.

정규분포 N(μ, σ²)에서 계산하면 μ 방향은 1/σ², σ 방향은 2/σ²이다(다음 절의 문제 2). 둘 다 σ가 작을수록 커진다. 뾰족한 분포는 모수 변화에 예민하다.

{{viz: ch09/sensitivity}}

### 파이썬

정규분포에서 표본을 뽑아 스코어를 계산하고, 그 평균과 분산을 이론값과 비교한다.

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
mu, N = 0.0, 1_000_000
print(" σ    E[score_μ]   Var[score_μ]  1/σ²    Var[score_σ]  2/σ²")
for sigma in [0.5, 1.0, 2.0, 4.0]:
    x = rng.normal(mu, sigma, N)
    s_mu = (x - mu) / sigma**2                          # ∂ log p / ∂μ
    s_sig = -1 / sigma + (x - mu)**2 / sigma**3         # ∂ log p / ∂σ
    print(f"{sigma:4.1f}  {s_mu.mean():+.4f}      {s_mu.var():8.4f}   {1/sigma**2:6.4f}   {s_sig.var():8.4f}   {2/sigma**2:6.4f}")
#  σ    E[score_μ]   Var[score_μ]  1/σ²    Var[score_σ]  2/σ²
#  0.5  +0.0020        4.0054   4.0000     8.0286   8.0000
#  1.0  +0.0008        0.9980   1.0000     1.9965   2.0000
#  2.0  -0.0007        0.2498   0.2500     0.5002   0.5000
#  4.0  -0.0003        0.0625   0.0625     0.1256   0.1250
\`\`\`

스코어의 평균은 0 근처, 분산은 이론값과 셋째 자리까지 맞는다. σ를 절반으로 줄이면 피셔 정보는 네 배가 된다.

### ML에서: 조심함의 정도

학습은 KL 발산(모형 분포가 데이터 분포와 얼마나 다른지 재는 비대칭의 양)을 줄이는 과정이다. KL을 줄이려면 파라미터를 바꿔야 한다. 그런데 얼마나 바꿔야 하는가? 민감한 영역에서는 조금만 바꿔도 분포가 크게 변한다 — 조심해야 한다. 둔감한 영역에서는 많이 바꿔도 분포가 별로 안 변한다 — 과감해도 된다. 피셔 정보는 이 "조심함의 정도"를 알려준다. 이것이 나중에 자연 기울기(natural gradient)의 핵심이 된다.

### 수확

"피셔 정보 = 모수에 대한 분포의 민감도
= 스코어의 분산
= 데이터가 모수에 대해 가진 정보량"

### 문제 1. 스코어의 평균은 왜 0인가

(가) 정규분포 N(μ, σ²)에서 μ에 대한 스코어의 평균이 0임을 보여라. (나) 일반적으로 E[∂ℓ/∂θ] = 0을 증명하고, 증명의 어느 단계에 조건이 필요한지 밝혀라. (다) 균등분포 U(0, θ)에서 스코어의 평균을 구하라.

#### 함께 풀기

**김민준:** (가)는 코드로 봤어요. σ = 2에서 표본 100개로 스코어 평균이 0.041, 1000개로 −0.028, 10만 개로 −0.00001이에요. 0으로 가니까 증명 끝이죠.

**선생님:** 표본 평균이 0 근처라는 건, 참값이 0이라는 것과 같은 말이에요?

**김민준:** …아니요. 0.00001일 수도 있고, 표본을 백만 개 뽑아야 보이는 작은 값일 수도 있어요. 수치는 확인이지 증명이 아니네요.

**이서연:** (가)는 식으로 바로 돼. 스코어가 (x − μ)/σ²이고 E[x] = μ니까 0이야. (나)는 ∫ p · (∂p/∂θ)/p dx = ∂/∂θ ∫ p dx = ∂/∂θ 1 = 0. 모든 분포에서 성립해요.

**선생님:** 그럼 (다)도 0이겠네요. 계산해 봐요.

**이서연:** p = 1/θ (0 ≤ x ≤ θ)니까 log p = −log θ, 스코어는 −1/θ예요. x와 상관없는 상수라서 평균도 −1/θ… 0이 아니에요.

〔S05〕 **이서연:** 제 증명의 어디가 틀렸죠? ∫p dx = 1은 θ가 뭐든 맞는데요.

**선생님:** 적분 구간을 적어 봐요.

〔S07〕 **이서연:** ∫₀^θ p dx예요. θ가 적분 구간 끝에도 들어 있어요. 이걸 미분하면 적분 안을 미분한 것 말고 경계 항 p(θ; θ) = 1/θ가 더 붙어요. 1/θ − 1/θ = 0이라 전체는 0이지만, 적분 안만 미분한 E[스코어]는 −1/θ예요. 미분과 적분을 바꿀 수 있으려면 분포의 받침(분포가 0이 아닌 범위)이 θ에 따라 움직이지 않아야 해요.

**선생님:** 맞아요. 이런 분포에서는 피셔 정보의 성질도 여러 개가 깨져요. 이 책의 지수족은 받침이 고정돼 있어서 안전하고요.

**이서연:** 해석학 시간에 "미분과 적분의 순서를 바꾸기 전에 조건을 확인하라"를 귀에 못이 박히게 들었는데, 반례가 이렇게 생긴 거였네요.

## 피셔 계량: 파라미터 공간의 자

파라미터 공간에서 한 걸음은 어디서나 같은 크기일까? 아니라면, '진짜 거리'는 어떻게 잴까?

KL 발산을 아주 가까운 두 분포 사이에서 전개하면 비대칭이 사라지고 대칭인 이차형식(dθᵀ A dθ 꼴)이 드러난다. 그 이차형식을 만드는 행렬이 피셔 정보 행렬이다. 이 절에서는 그 행렬이 파라미터 공간 전체에 놓이는 "자(ruler)", 곧 리만 계량이 됨을 본다.

그리고 하나 더. 볼록함수 F(θ)와 접선 사이의 높이 차이가 브레그만 발산이고, 지수족(log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포의 모임)에서는 그것이 KL과 일치한다. 브레그만 발산에서도 같은 일이 일어난다 — 두 점이 가까워지면, 높이 차이의 2차 근사는 ½ dθᵀ · ∇²F(θ) · dθ 가 된다. ∇²F(θ) — 볼록함수를 두 번 미분한 것.

같은 행렬에 세 갈래 길로 올라왔다. 첫째, KL의 발밑에서 만나는 이차형식. 둘째, 브레그만 발산의 발밑, 지수족의 자연모수에서 본 ∇²F. 셋째, 앞 절의 스코어의 분산. 세 길이 한 지점, 피셔 정보 행렬에서 합류한다.

### 메르카토르 지도 — 곳마다 다른 축척

메르카토르 지도에서 그린란드는 아프리카만큼 커 보인다. 실제로는 아프리카의 1/14이다. 지도 위의 1cm가 적도에서는 100km이지만 극지방에서는 10km다. 같은 "지도 위 한 걸음"이 실제 거리로는 다르다.

파라미터 공간도 그렇다. 키 분포를 예로 들자. 한국 남성 (174, 5.8)에서 σ를 1만큼 바꾸는 것과, σ = 30인 아주 넓은 분포에서 σ를 1만큼 바꾸는 것. 좌표 위에서는 같은 한 걸음이다. 하지만 σ = 5.8일 때 분포의 모양 변화는 극적이고, σ = 30일 때 변화는 거의 눈에 띄지 않는다. "파라미터 공간의 메르카토르 왜곡."

리만 계량은 지도의 각 지점에서 "여기서의 1cm는 실제로 몇 km인가"를 알려주는 축척이다. 피셔 정보 행렬이 바로 그 축척이다.

### 고무판 위의 격자 — 늘어나고 찌그러진 칸

고무판에 정사각형 격자를 그린다. 고무판을 늘리면 어떤 곳은 격자가 벌어지고 어떤 곳은 찌그러진다. 벌어진 곳에서의 한 칸은 "큰 거리", 찌그러진 곳에서의 한 칸은 "작은 거리". 피셔 행렬은 각 지점에서 격자가 얼마나 늘어나고 찌그러졌는지를 기록한 것이다.

### 정규분포족의 자

정규분포족 N(μ, σ²)에 이 자를 대면 한 걸음의 길이는 이렇다.

\`\`\`latex
ds^2 = \\textcolor{#0e8f8f}{I}_{\\mu\\mu}\\, d\\textcolor{#2e9e6e}{\\mu}^2 + \\textcolor{#0e8f8f}{I}_{\\sigma\\sigma}\\, d\\textcolor{#2e9e6e}{\\sigma}^2 = \\frac{d\\textcolor{#2e9e6e}{\\mu}^2 + 2\\, d\\textcolor{#2e9e6e}{\\sigma}^2}{\\textcolor{#2e9e6e}{\\sigma}^2}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
ds & \\text{피셔 자로 잰 한 걸음의 길이} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬의 대각 성분 } (I_{\\mu\\mu} = 1/\\sigma^2,\\ I_{\\sigma\\sigma} = 2/\\sigma^2,\\ I_{\\mu\\sigma} = 0) \\\\
\\textcolor{#2e9e6e}{\\mu} & \\text{평균 (좌표)} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차 (좌표)}
\\end{array}
\`\`\`

σ가 작은 곳에서는 같은 dμ, dσ가 긴 걸음이다. 각 점에서 "피셔 자로 잰 길이가 같은 걸음들"을 모으면 작은 타원이 된다. μ 방향 반지름은 σ에 비례하고, σ 방향 반지름은 그 1/√2이다.

{{viz: ch09/metric-ellipse}}

### 자와 곡률은 다르다

위 그림에서 타원은 아래로 갈수록 작아진다. 이것을 "공간이 아래쪽에서 심하게 휘었다"로 읽고 싶어진다. 평면에 극좌표를 그리면 바깥쪽 한 칸이 안쪽 한 칸보다 길어도 평면은 평평하다는 것을 떠올리자. 타원의 크기가 곳마다 다른 것은 자의 눈금 이야기다. 곡률은 이 자에서 따로 계산해야 한다.

계산하면 놀라운 답이 나온다. 이 자의 레비-치비타 접속(곧은 길이 곧 가장 짧은 길이 되는 접속)이 주는 가우스 곡률은 어디서나 −1/2이다(다음 절에서 계산한다). 타원은 σ에 따라 수십 배로 커지고 작아지는데, 곡률은 모든 점에서 똑같다. 그리고 같은 공간을 e-접속(자연모수 θ의 직선을 곧은 길로 보는 접속, e = 지수)으로 보면 곡률은 0이다(다음 절의 문제 4). "곡률"이라고 쓸 때는 어느 접속의 곡률인지 밝혀야 하는 이유다.

### 왜 피셔 정보가 "유일한" 자연스러운 계량인가

모수에 이름을 다시 붙여도 — θ 대신 φ(θ)를 써도 — 분포 자체는 안 변한다. 좋은 자라면 좌표를 바꿔도 재는 거리가 같아야 한다. 그런데 이것은 피셔 계량만의 자랑이 아니다. 어떤 리만 계량이든 좌표를 바꿀 때 성분을 야코비안으로 함께 바꿔 쓰면 재는 거리가 그대로다. 모든 자가 가진 성질이다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}_{\\textcolor{#2e9e6e}{\\varphi}} = J^{\\top}\\, \\textcolor{#0e8f8f}{I}_{\\textcolor{#2e9e6e}{\\theta}}\\, J, \\qquad J = \\frac{\\partial \\textcolor{#2e9e6e}{\\theta}}{\\partial \\textcolor{#2e9e6e}{\\varphi}}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{피셔 행렬 (첨자는 어느 좌표로 적었는지)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{원래 모수} \\\\
\\textcolor{#2e9e6e}{\\varphi} & \\text{새 모수 (같은 분포에 다른 이름)} \\\\
J & \\text{야코비안, 새 좌표의 한 칸이 옛 좌표로 몇 칸인지}
\\end{array}
\`\`\`

피셔 계량을 특별하게 만드는 조건은 따로 있다. 데이터를 충분통계량으로 요약해도 — 모수에 대한 정보를 하나도 잃지 않는 가공을 해도 — 두 분포 사이의 거리가 그대로여야 한다는 조건이다. 설문지 원본 천 장으로 재든, 정보를 하나도 잃지 않은 요약표 한 장으로 재든, 두 가설이 얼마나 다른지는 같아야 한다.

Čencov(첸초프)는 1972년에 이것을 정리로 보였다. 표본 공간(x가 가질 수 있는 값의 모임)이 유한할 때, 이런 가공(칸을 합치거나 확률적으로 나누는 변환, 마르코프 사상)에 대해 불변인 리만 계량은 상수배를 빼면 피셔 계량뿐이다. "이것은 선택이 아니다. 조건을 받아들이면 답은 하나다."

### 지수족에서의 아름다운 사실

지수족에는 로그정규화자 F(θ)(확률의 합이 1이 되게 나누는 수의 로그)가 있다. 자연모수 θ에서 피셔 정보 행렬은 F의 헤시안이다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}(\\textcolor{#3b7de0}{\\theta}) = \\nabla^2 \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\mathrm{Cov}\\big[\\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x})\\big]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자, } \\nabla^2 F \\text{ 는 그 헤시안} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터}
\\end{array}
\`\`\`

앞 절에서 스코어의 분산으로 정의한 피셔 정보가, 지수족에서는 로그정규화자를 두 번 미분한 것이고 충분통계량의 공분산이다. 지수족의 스코어가 t(x) − E[t(x)]라서 그렇다.

이것은 우연이 아니다. F(θ)가 볼록함수이므로 헤시안은 양의 준정부호다. 충분통계량 성분들 사이에 군더더기가 없으면(최소 지수족이면) 어느 방향으로도 분산이 0이 아니므로 헤시안은 양의 정부호(positive definite)가 된다. 양의 정부호 행렬이어야 내적을 정의한다. 모든 0 아닌 걸음에 양의 길이를 준다. 내적이 있으면 거리를 잴 수 있다. "F의 볼록성이 파라미터 공간에 자를 선물한다."

### 파이썬

(μ, σ) = (1, 0.5)인 정규분포에서 스코어 벡터의 바깥곱을 평균 내어 피셔 행렬을 만든다.

\`\`\`python
import numpy as np
np.set_printoptions(suppress=True)

rng = np.random.default_rng(1)
mu, sigma, N = 1.0, 0.5, 1_000_000
x = rng.normal(mu, sigma, N)
score = np.stack([(x - mu) / sigma**2, -1 / sigma + (x - mu)**2 / sigma**3])   # 2 × N

I_mc = score @ score.T / N                       # E[score scoreᵀ]
I_th = np.diag([1 / sigma**2, 2 / sigma**2])
print("표본으로 잰 I:\\n", I_mc.round(3))
print("식 diag(1/σ², 2/σ²):\\n", I_th)
print("고유값:", np.linalg.eigvalsh(I_mc).round(3), "→ 둘 다 양수 (양의 정부호)")
# 표본으로 잰 I:
#  [[ 3.988 -0.003]
#  [-0.003  8.006]]
# 식 diag(1/σ², 2/σ²):
#  [[4. 0.]
#  [0. 8.]]
# 고유값: [3.988 8.006] → 둘 다 양수 (양의 정부호)
\`\`\`

비대각 성분은 0 근처다. μ와 σ의 스코어는 서로 얽히지 않는다. σ = 0.5에서 σ 방향이 μ 방향보다 두 배 민감하다.

### 수확

"피셔 정보 행렬은 파라미터 공간의 축척이다. 충분통계량으로 요약해도 변하지 않는 자는 이것 하나다. 지수족에서는 이 자가 F(θ)의 볼록성에서 태어난다. 자의 눈금과 공간의 곡률은 다른 것이다."

그런데 자로 크기를 잴 수 있게 되었다고 해서 끝이 아니다. 크기 말고 방향도 있다. 떨어진 두 점의 방향을 비교하려면 "옮기는 규칙", 접속이 필요하고, 이 자 위에 얹을 수 있는 접속은 하나가 아니다.

### 문제 2. 정규분포의 피셔 행렬과 좌표 바꾸기

(가) N(μ, σ²)의 피셔 행렬이 diag(1/σ², 2/σ²)임을 유도하라. (나) 좌표를 (μ, s = log σ)로 바꾸면 피셔 행렬은 어떻게 되는가? (다) (나)의 결과를 보고 "σ 방향은 이제 평평해졌다"고 말할 수 있는가?

#### 함께 풀기

**이서연:** (가)부터 할게요. log p = −log σ − (x−μ)²/(2σ²) + 상수. μ 스코어는 (x−μ)/σ², 분산이 σ²/σ⁴ = 1/σ². σ 스코어는 −1/σ + (x−μ)²/σ³이고, z = (x−μ)/σ로 두면 (z² − 1)/σ라서 분산이 Var(z²)/σ² = 2/σ². 두 스코어의 곱은 z³, z 같은 홀수 차수라서 평균이 0이고요.

**김민준:** (나)는 야코비안만 곱하면 돼요. σ = eˢ니까 ∂σ/∂s = σ, J = diag(1, σ). I·J = diag(1/σ², 2/σ)예요.

**선생님:** 새 좌표에서 σ 방향 성분이 2/σ인데, ds²에 그대로 넣어 봐요. 걸음 dσ = σ ds를 원래 식에 넣은 것과 같아요?

**김민준:** 원래 식에 넣으면 2dσ²/σ² = 2σ²ds²/σ² = 2ds². 제 행렬로는 2ds²/σ… 달라요.

〔M08〕 **김민준:** 야코비안을 한쪽에만 곱했어요. 한 걸음 길이는 dθ가 두 번 들어가니까 양쪽에 곱해야 해요. JᵀIJ = diag(1/σ², 2). 조교가 과제에서 "행렬 크기만 맞으면 곱셈이 맞는 건 아니다"라고 빨간 펜으로 쓴 게 이거였어요.

**이서연:** 그러면 (다)는 쉬워요. s 방향 성분이 상수 2니까 s 방향으로는 눈금이 어디서나 같아요. 좌표를 잘 바꿔서 공간이 σ 방향으로는 평평해진 거예요. 곡률도 줄었겠죠.

**선생님:** 곡률은 좌표를 바꾸면 변하는 양이었어요?

〔S06〕 **이서연:** 아니요, 안에서 재는 양이라 좌표와 무관해요. 그런데 성분 하나가 상수가 됐잖아요.

**선생님:** 나머지 성분도 봐요. μ 방향은요?

**이서연:** 1/σ² = e^(−2s)예요. 여전히 s에 따라 변해요. μ 방향 걸음의 값어치가 s에 따라 달라지고… ds² = e^(−2s)dμ² + 2ds². 이걸로 곡률을 계산하면 −1/2가 그대로 나와요.

〔S08〕 **이서연:** 성분 하나를 상수로 만든 건 평면 극좌표에서 반지름 방향이 상수인 것과 같아요. 눈금 하나를 정리했을 뿐, 공간의 휨은 그대로예요. JᵀIJ는 맞게 계산했는데 해석을 거꾸로 했어요.

**선생님:** 좋아요. (μ, log σ)는 실제로 학습에서 많이 쓰는 좌표예요. σ 방향 걸음이 어디서나 같은 값어치를 갖게 되니 편하죠. 편해지는 건 눈금이지 곡률이 아니에요.

## 쌍곡 평면: 가우시안들이 사는 땅

피셔 자를 정규분포족에 대면 한 걸음의 길이가 ds² = (dμ² + 2dσ²)/σ² 였다. 이 자가 그리는 땅은 어떤 모양일까? 평면일까, 구면일까, 아니면 그 어느 쪽도 아닐까?

### 푸앵카레 상반평면 — 에셔가 그린 세계

피셔 계량을 가우시안에 적용하면 ds² = (dμ² + 2dσ²)/σ² 였다. μ를 √2로 나눈 좌표 u = μ/√2를 쓰면

\`\`\`latex
ds^2 = 2\\, \\frac{d\\textcolor{#2e9e6e}{u}^2 + d\\textcolor{#2e9e6e}{\\sigma}^2}{\\textcolor{#2e9e6e}{\\sigma}^2}, \\qquad \\textcolor{#2e9e6e}{u} = \\frac{\\textcolor{#2e9e6e}{\\mu}}{\\sqrt{2}}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
ds & \\text{피셔 자로 잰 한 걸음} \\\\
\\textcolor{#2e9e6e}{u} & \\text{평균을 } \\sqrt{2} \\text{ 로 나눈 좌표} \\\\
\\textcolor{#2e9e6e}{\\mu} & \\text{평균} \\\\
\\textcolor{#2e9e6e}{\\sigma} & \\text{표준편차}
\\end{array}
\`\`\`

괄호 안은 푸앵카레 상반평면의 계량 (du² + dσ²)/σ² 그대로다. 그 계량은 곡률이 −1인 쌍곡 평면(어디서나 말안장처럼 휜 면)이다. 앞의 2배 때문에 거리가 √2배로 늘어나고, 곡률은 1/2배가 된다. 가우시안들의 공간은 곡률이 어디서나 −1/2인 쌍곡 평면이다.

쌍곡 평면에서는:
- σ가 작을수록(아래로 갈수록) 거리가 길어진다.
- 두 점을 잇는 가장 짧은 길(측지선)은 (u, σ) 좌표에서 σ = 0 위에 중심을 둔 반원이다.
  원래의 (μ, σ) 좌표로 돌아오면 가로로 √2배 늘어난 반타원이다.
- 평균이 같은 두 분포 사이는 σ 축을 따라 곧게 올라가는 길이 가장 짧다.
- 에셔의 판화 「원형 극한(Circle Limit)」이 그린 세계, 곡률만 절반으로 줄인 것이다.

"가우시안 분포들의 세계는 에셔의 그림이다." 이것은 비유가 아니라 수학적 사실이다.

### 두 점 사이의 정확한 거리

유한하게 떨어진 두 점 사이의 거리는 √(ΔθᵀIΔθ)가 아니다. 그것은 한 점의 자를 끝까지 그대로 쓴 근사이고, 두 점이 가까울 때만 맞는다. 정확한 피셔–라오 거리는 쌍곡 평면의 거리 공식에서 나온다.

\`\`\`latex
d = \\sqrt{2}\\; \\operatorname{arccosh}\\!\\left(1 + \\frac{(\\textcolor{#2e9e6e}{\\mu}_1 - \\textcolor{#2e9e6e}{\\mu}_2)^2/2 + (\\textcolor{#2e9e6e}{\\sigma}_1 - \\textcolor{#2e9e6e}{\\sigma}_2)^2}{2\\, \\textcolor{#2e9e6e}{\\sigma}_1 \\textcolor{#2e9e6e}{\\sigma}_2}\\right)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
d & \\text{피셔–라오 거리 (측지선을 따라 잰 길이)} \\\\
\\textcolor{#2e9e6e}{\\mu}_1,\\ \\textcolor{#2e9e6e}{\\sigma}_1 & \\text{첫 번째 정규분포의 평균과 표준편차} \\\\
\\textcolor{#2e9e6e}{\\mu}_2,\\ \\textcolor{#2e9e6e}{\\sigma}_2 & \\text{두 번째 정규분포의 평균과 표준편차} \\\\
\\operatorname{arccosh} & \\text{쌍곡 코사인의 역함수}
\\end{array}
\`\`\`

평균이 같으면 d = √2 · |log(σ₂/σ₁)|로 줄어든다. σ를 두 배로 늘리는 것은 어디서 하든 같은 거리, √2 log 2 ≈ 0.980이다. 그리고 이 거리는 대칭이다. KL과 달리 방향이 없다. 리만 거리는 늘 그렇다.

{{viz: ch09/fisher-rao-distance}}

### 파이썬

sympy로 곡률을 계산하고, 세 가지 "거리"를 비교한다.

\`\`\`python
import numpy as np
import sympy as sp

# (1) 피셔 계량 ds² = (dμ² + 2dσ²)/σ² 의 가우스 곡률 (레비-치비타)
m, s = sp.symbols("mu sigma", positive=True)
E, G = 1 / s**2, 2 / s**2
W = sp.sqrt(2) / s**2                                     # √(EG)
K = -(sp.diff(sp.diff(G, m) / W, m) + sp.diff(sp.diff(E, s) / W, s)) / (2 * W)
print("K =", sp.simplify(K))

# (2) 두 분포 사이의 세 가지 "거리"
def fisher_rao(m1, s1, m2, s2):
    return np.sqrt(2) * np.arccosh(1 + ((m1 - m2)**2 / 2 + (s1 - s2)**2) / (2 * s1 * s2))

def local(m1, s1, m2, s2):                                # 출발점의 자를 끝까지 그대로 쓴 근사
    return np.sqrt((m1 - m2)**2 / s1**2 + 2 * (s1 - s2)**2 / s1**2)

def along_straight(m1, s1, m2, s2, n=200_001):            # (μ,σ) 직선을 따라 피셔 자로 잰 길이
    t = np.linspace(0, 1, n)
    return np.trapezoid(np.sqrt((m2 - m1)**2 + 2 * (s2 - s1)**2) / (s1 + (s2 - s1) * t), t)

for pair in [(0, 1, 0.1, 1), (174, 5.8, 183, 7.1), (-2, 0.5, 2, 0.5)]:
    print(pair, f"국소근사 {local(*pair):.3f}  직선길이 {along_straight(*pair):.3f}  측지거리 {fisher_rao(*pair):.3f}")
# K = -1/2
# (0, 1, 0.1, 1) 국소근사 0.100  직선길이 0.100  측지거리 0.100
# (174, 5.8, 183, 7.1) 국소근사 1.584  직선길이 1.429  측지거리 1.376
# (-2, 0.5, 2, 0.5) 국소근사 8.000  직선길이 8.000  측지거리 4.986
\`\`\`

가까운 두 점에서는 셋이 같다. 한국 남성과 네덜란드 남성 사이에서는 국소 근사가 15% 부풀린다. 좁은 두 분포가 멀리 떨어진 마지막 경우, 측지선은 σ가 큰 쪽으로 돌아가며 길이를 40% 가까이 줄인다. 좁은 분포끼리 곧장 옆으로 가는 것보다, 일단 넓어졌다가 옮겨 가서 다시 좁아지는 편이 "분포로서" 더 가깝다.

### 문제 3. 동전의 자를 곧게 펴기

베르누이 분포(성공 확률 p)의 피셔 정보는 I(p) = 1/(p(1−p))이다. (가) 새 좌표 φ = arcsin√p에서 피셔 정보가 상수 4임을 보여라. (나) p = 0.1과 p = 0.5 사이의 피셔–라오 거리를 구하라.

#### 함께 풀기

**김민준:** (가)는 I(φ) = I(p) · (dφ/dp)²으로 했어요. dφ/dp = 1/(2√(p(1−p)))니까 I(φ) = 1/(4p²(1−p)²). 상수가 아닌데요?

**이서연:** 방향이 반대야. 새 좌표의 한 칸이 옛 좌표로 몇 칸인지, 곧 dp/dφ를 곱해야 해. 문제 2의 J가 ∂θ/∂φ였잖아. (dp/dφ)² = 4p(1−p)니까 I(φ) = 4.

〔M07〕 **김민준:** 새 걸음을 옛 걸음으로 바꿔서 옛 자로 재는 거니까 dp/dφ구나. 이번엔 한쪽이 아니라 아예 뒤집었네요.

**이서연:** (나)는 자가 상수 4니까 거리가 √4 · |Δφ| = 2|arcsin√0.5 − arcsin√0.1|. 0.927이에요. 적분 ∫ dp/√(p(1−p))를 직접 해도 같아요.

**이서연:** 그림으로 보면 더 재밌어요. (√p, √(1−p))는 반지름 1인 원 위의 점이고 φ는 그 각도예요. 동전의 공간은 사분원이고, 피셔 거리는 그 호의 길이의 두 배예요.

**선생님:** 그래서 1차원에서는 좌표를 잘 바꾸면 자가 늘 상수가 돼요. 1차원은 곡률이 없어요. 그게 이렇게 보여요.

### 문제 4. 평평하면서 휜 공간?

(가) N(μ, σ²)의 피셔 계량 ds² = (dμ² + 2dσ²)/σ²의 가우스 곡률이 −1/2임을 보여라. (나) 같은 분포족을 자연모수 θ = (μ/σ², −1/(2σ²))로 쓰면 e-접속의 크리스토펠 기호(접속을 좌표로 적은 수, 모두 0이면 좌표의 직선이 곧은 길)가 모두 0임을 보여라. (다) 두 결과는 모순인가?

#### 함께 풀기

**이서연:** (가)는 앞의 sympy 계산 그대로 −1/2예요.

**김민준:** (나)는 이렇게 했어요. e-접속의 크리스토펠 기호는 E[∂ᵢ∂ⱼℓ · ∂ₖℓ]인데, 지수족에서 log p = θ₁x + θ₂x² − F(θ)라서 ∂ᵢ∂ⱼℓ = −∂ᵢ∂ⱼF예요. x가 없는 상수니까 밖으로 나오고, 남는 E[∂ₖℓ]은 문제 1에서 0이었어요. 그래서 전부 0.

\`\`\`latex
\\textcolor{#8f7a5a}{\\Gamma}^{(e)}_{ij,k} = \\mathbb{E}\\!\\left[\\partial_i \\partial_j \\textcolor{#b58a00}{\\ell}\\; \\partial_k \\textcolor{#b58a00}{\\ell}\\right] = -\\,\\partial_i \\partial_j \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta})\\; \\mathbb{E}\\!\\left[\\partial_k \\textcolor{#b58a00}{\\ell}\\right] = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#8f7a5a}{\\Gamma} & \\text{e-접속의 크리스토펠 기호 (자연모수 좌표)} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{로그우도, } \\partial_i = \\partial/\\partial\\theta_i \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수}
\\end{array}
\`\`\`

〔M05〕 **김민준:** 그런데 Γ가 0이면 곡률도 0이잖아요. (가)는 −1/2라면서요. 둘 중 하나는 계산이 틀린 거예요. 제 건 간단하니까 (가)의 sympy가 의심스러워요.

**이서연:** 나는 반대로 생각해. 곡률은 좌표와 상관없는 양이라고 했잖아. (μ, σ)에서 −1/2이면 θ 좌표로 가도 −1/2여야 해. 그러니까 θ 좌표에서 Γ가 0이 나온 (나)가 틀렸어.

**선생님:** 둘 다 "곡률"이라고 했는데, (가)의 곡률은 어느 접속의 곡률이에요?

**이서연:** (가)는 계량만 넣고 계산했으니까… 레비-치비타 접속이요.

**선생님:** (나)는요?

〔S09〕 **이서연:** e-접속이요. 다른 접속이에요. 곡률이 좌표에 무관한 건 맞지만, 접속을 바꾸면 곡률이 바뀌어요. 같은 공간, 같은 자 위에 서로 다른 두 "곧음"을 얹은 거예요. 모순이 아니에요.

**김민준:** 그럼 θ 좌표에서 레비-치비타의 Γ를 구하면 0이 아니어야겠네요. 돌려 볼게요. Γ¹₁₂ = −(θ₁² + θ₂)/(2θ₂²). 0이 아니에요. 그리고 그 Γ로 곡률을 내면 θ 좌표에서도 −1/2이 나와요.

**김민준:** 같은 좌표계 안에서 두 접속을 나란히 놓으니까 보이네요. 제 Γ = 0은 틀린 게 아니라 다른 질문의 답이었어요.

**선생님:** 한 줄로 말하면, 곡률은 (공간, 접속) 쌍의 성질이에요. 정규분포족은 e-접속으로 평평하고, m-접속으로도 평평하고, 레비-치비타로는 −1/2로 휘었어요.

**김민준:** 같은 코드를 채점해도 조교가 "스타일 기준"으로 보면 만점이고 "성능 기준"으로 보면 감점인 거랑 비슷하네요. 코드는 하나인데 기준이 바뀌면 점수가 바뀌는.

### 문제 5. 좁은 두 분포 사이의 가장 짧은 길 (킬러)

두 정규분포 N(−2, 0.5²)과 N(2, 0.5²)가 있다. (가) 두 분포 사이의 피셔–라오 거리를 구하라. (나) (μ, σ) 평면에서 측지선을 그려라. 가장 높이 올라가는 σ는 얼마인가? (다) √(ΔθᵀIΔθ)로 잰 값과, (μ, σ)에서 그린 반원을 따라 잰 길이는 각각 얼마이고, 왜 (가)와 다른가?

#### 함께 풀기

**김민준:** (가)는 발밑의 자로 재면 돼요. Δμ = 4, Δσ = 0, I = diag(1/0.25, 2/0.25)니까 √(16 × 4) = 8이에요.

**이서연:** 그건 자를 한 점에서만 잰 거잖아. 가장 짧은 길은 쌍곡 평면에서 반원이니까, (μ, σ) 평면에 μ = 0을 중심으로 두 점을 지나는 반원을 그리면 돼. 반지름이 √(2² + 0.5²) = 2.06이고, 그 위에서 피셔 길이를 적분하면… 5.163이야.

**선생님:** 두 사람 답이 8과 5.163. 둘 다 거리라면 어느 쪽이 더 짧은 길을 찾은 거예요?

**김민준:** 서연 쪽이 짧아요. 그럼 제 8은 가장 짧은 길이 아니네요. 근데 8이 어떤 길의 길이이긴 해요?

**선생님:** σ = 0.5인 가로 직선을 따라가면 자가 어디서나 같아요. 그 직선의 피셔 길이는요?

〔M06〕 **김민준:** 계속 σ = 0.5니까 자가 안 변해서… 정확히 8이에요. 제 "국소 근사"는 우연히 직선을 따라 잰 길이와 같았던 거예요. 가장 짧은 길인지는 전혀 확인 안 했고요.

**선생님:** 그럼 서연 학생의 반원은 가장 짧은 길이에요?

〔S05〕 **이서연:** 쌍곡 평면의 측지선은 반원이니까요. …아닌가요? 앞의 쌍곡 평면 설명을 다시 볼게요. 반원인 건 (u, σ) 좌표, u = μ/√2에서예요. 저는 (μ, σ)에서 반원을 그렸어요.

**이서연:** 다시 할게요. u로 바꾸면 두 점이 u = ±√2, σ = 0.5. 중심은 u = 0이고 반지름은 √(2 + 0.25) = 1.5. 가장 높은 σ는 1.5예요. (μ, σ)로 돌아오면 가로 반지름이 1.5 × √2 = 2.12, 세로 반지름이 1.5인 반타원이에요.

**김민준:** 거리 공식에 넣으면 √2 · arccosh(1 + (16/2)/(2 × 0.25)) = √2 · arccosh(17) = 4.986. 반타원을 따라 수치 적분해도 4.986이에요.

〔S09〕 **이서연:** 그래서 제 반원 5.163은 가장 짧은 길보다 3.6% 길어요. 반원 모양이라는 결론은 맞았는데, 그 반원이 사는 좌표를 놓쳤어요. 계량 앞의 2를 무시하고 푸앵카레 평면이라고 불렀던 거예요.

〔M10〕 **김민준:** 그리고 제 8은 가장 짧은 길보다 60%나 길어요. 좁은 두 분포는 옆으로 곧장 가는 것보다, σ = 1.5까지 넓어졌다가 건너가서 다시 좁아지는 게 훨씬 가까워요. 두 분포가 거의 안 겹치는데, 중간에 넓은 분포들을 거치면 한 걸음 한 걸음이 싸져요.

**선생님:** (다)의 "왜"를 한 줄로 정리해 봐요.

**이서연:** √(ΔθᵀIΔθ)는 한 점의 자를 끝까지 들고 간 근사라서 두 점이 가까울 때만 맞아요. 반원은 μ를 √2로 나누는 것을 빠뜨려서 측지선이 아니었어요. 정확한 답은 (u, σ)의 반원, 곧 (μ, σ)의 반타원을 따라 잰 4.986이에요.

**김민준:** 서울에서 부산 갈 때 서울 시내 지도의 축척을 끝까지 쓰면 안 되는 거랑 같네요. 동네 축척은 동네에서만 맞아요.

〔T13〕 **선생님:** 오늘 두 사람의 실수가 이 장의 두 교훈이에요. 민준 학생은 자가 위치마다 다르다는 것, 그래서 유한한 거리는 길을 따라 적분해야 한다는 것을 봤어요. 서연 학생은 가장 짧은 길의 모양이 어느 좌표에서 그리느냐에 따라 달라 보인다는 것을 봤고요. 반원이든 반타원이든 같은 길이에요. 길이는 좌표를 바꿔도 4.986이고요.

## 로그 기울기: 모든 경사에 log가 붙는 이유

강화학습의 정책 경사에서 왜 ∇log π이지, 왜 그냥 ∇π가 아닐까?

### 연봉 인상률 — 절대 변화와 상대 변화

연봉이 3000만원인 사람의 300만원 인상과 3억인 사람의 300만원 인상은 같은 300만원이지만 의미가 완전히 다르다. 절대 변화량(∇p)이 아니라 상대 변화율(∇p/p = ∇log p)이 "진짜 변화의 크기"다.

\`\`\`latex
\\nabla_{\\textcolor{#2e9e6e}{\\theta}} \\log \\textcolor{#7f8f10}{p}(\\textcolor{#6f8fa6}{x} \\mid \\textcolor{#2e9e6e}{\\theta}) = \\frac{\\nabla_{\\textcolor{#2e9e6e}{\\theta}}\\, \\textcolor{#7f8f10}{p}(\\textcolor{#6f8fa6}{x} \\mid \\textcolor{#2e9e6e}{\\theta})}{\\textcolor{#7f8f10}{p}(\\textcolor{#6f8fa6}{x} \\mid \\textcolor{#2e9e6e}{\\theta})}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{\\theta} & \\text{모수} \\\\
\\textcolor{#7f8f10}{p} & \\text{모형 분포 (정책이면 } \\pi(a\\mid s) \\text{)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 (정책이면 행동 } a \\text{)} \\\\
\\nabla_{\\theta} & \\text{모수에 대한 기울기}
\\end{array}
\`\`\`

### ML에서: 정책 경사와 기준값

스코어 함수 ∇_θ log p(x|θ):
  "파라미터를 살짝 바꿨을 때,
  이 데이터가 나올 확률이 비율적으로 얼마나 변하는가"
정책 경사 ∇_θ log π(a|s):
  π(a|s) = 0.001인 희귀 행동이 큰 보상을 줬을 때,
  ∇π로는 신호가 묻히지만
  ∇log π = ∇π / π 에서는 작은 π로 나눠지면서
  신호가 증폭된다.
  "희귀하지만 좋았던 행동을 놓치지 않는 장치."

그리고 첫 절의 증명이 여기서 한 번 더 일한다. 스코어의 평균이 0이므로, 보상에서 상수(기준값)를 빼도 기울기의 평균은 변하지 않는다. 강화학습이 분산을 줄이려고 기준값을 빼는 근거가 이것이다.

### 파이썬

행동이 둘인 밴딧(한 번 고르고 보상을 받는 가장 단순한 강화학습 문제)에서 softmax 정책의 한 로짓 z만 움직인다. 희귀한 행동일수록 ∇π는 사라지고 ∇log π는 1 근처에 남는다.

\`\`\`python
import numpy as np

# 2-행동 밴딧, softmax 정책. 행동 1의 로짓 z 만 파라미터로 본다.
for z in [0.0, -3.0, -6.9]:
    pi1 = 1 / (1 + np.exp(-z))                 # π(행동1) = e^z / (e^z + e^0)
    d_pi = pi1 * (1 - pi1)                     # ∂π/∂z
    d_logpi = 1 - pi1                          # ∂log π/∂z = (∂π/∂z) / π
    print(f"π = {pi1:.4f}   ∂π/∂z = {d_pi:.4f}   ∂log π/∂z = {d_logpi:.4f}   비율 {d_logpi / d_pi:7.1f}")
# π = 0.5000   ∂π/∂z = 0.2500   ∂log π/∂z = 0.5000   비율     2.0
# π = 0.0474   ∂π/∂z = 0.0452   ∂log π/∂z = 0.9526   비율    21.1
# π = 0.0010   ∂π/∂z = 0.0010   ∂log π/∂z = 0.9990   비율   993.3
\`\`\`

π = 0.001인 행동에서 두 신호의 차이는 약 천 배, 곧 1/π다.

### 정보기하학과의 연결

이 장에서 우리는 ∇log p의 분산이 피셔 정보임을 보았다. 피셔 정보 행렬 = E[∇log p · ∇log pᵀ]. "∇log p가 재료라면, 그 재료로 만든 분산이 파라미터 공간의 자, 곧 계량이 된다." 그리고 이 자로 잰 같은 크기의 한 걸음 가운데 손실을 가장 많이 줄이는 방향으로 걷는 것이 자연 기울기(natural gradient)다.

### 수확

"피셔 정보가 자이고, ∇log p가 재료다. 자로 크기를 재고, ∇log p로 방향을 안다. 이 자로 덧셈의 길(확률을 섞는 길)과 곱셈의 길(로그를 섞는 길)의 길이를 재면 보통은 같지 않고, 둘 다 측지선보다 길다. 두 길은 가장 짧은 길이 아니라 각자의 접속에서 곧은 길이기 때문이다."

---

> ### 인물 이야기 — R.A. Fisher와 "한 사람이 만든 도구함"
>
> ![R.A. Fisher](/images/portraits/ra-fisher.jpg)
>
> 1890년, 런던. Ronald Aylmer Fisher는 극심한 근시를 안고 태어났다. 그래서 수학을 종이와 연필 없이 머릿속으로 배웠다고 전해진다. 수식을 눈으로 따라가는 대신, 공간을 상상했다.
>
> 이 습관이 20세기 통계학의 지형을 결정했다.
>
> Fisher가 풀고자 한 문제는 생물학에서 왔다. 케임브리지에서 수학을 전공한 뒤 그는 유전학에 빠져들었다. 멘델의 유전법칙과 다윈의 자연선택이 모순되는 것처럼 보이던 시절. Fisher는 1918년 논문에서 이 모순을 해소했다 — 여러 유전자가 함께 작용하면 연속적인 변이가 나온다는 것. 이 논문에서 그는 "분산(variance)"이라는 말을 도입하고 그것을 원인별로 나누었다. 이듬해 로댐스테드 농업시험장으로 옮긴 뒤, 그 생각을 분산분석(ANOVA)으로 완성했다.
>
> 그런데 유전 데이터를 분석하려면 통계적 도구가 필요했고, 당시의 도구는 부족했다. 그래서 Fisher는 도구를 직접 만들었다.
>
> 최대우도추정(MLE) — 데이터가 나올 가능성을 최대화하는 모수를 고르라. 충분통계량 — 데이터에서 모수에 대한 정보를 하나도 잃지 않는 요약. 피셔 정보 — 데이터가 모수에 대해 가진 정보의 양. 그리고 이 정보에 기반한 추정의 하한 — 크라메르-라오 부등식의 핵심 재료.
>
> 이 도구들 사이에는 숨겨진 연결이 있었다. MLE는 충분통계량에 의존하고, 충분통계량으로 요약해도 피셔 정보는 줄지 않으며, 피셔 정보가 추정의 정밀도 한계를 결정한다. Fisher는 이 연결을 감지하고 있었지만, 그것을 "기하학"이라는 언어로 쓰지는 않았다.
>
> 그 일을 한 것이 1945년의 Rao였고, 그 뒤를 이은 것이 1980년대의 Amari였다. Fisher가 만든 도구함의 각 도구들이 사실은 하나의 기하학적 구조의 여러 면이었다는 것을 밝혀내는 데 반세기가 더 걸린 것이다. 이 장에서 본 Čencov의 정리가 그 연결을 가장 짧게 말한다. 충분통계량으로 요약해도 변하지 않는 자는 피셔 정보 하나뿐이라는 것.
>
> Fisher는 성격이 격렬한 사람이었다. Karl Pearson과의 갈등은 학문적 논쟁을 넘어 개인적 원한이 되었다. Jerzy Neyman과도 충돌했고, 말년에는 담배와 폐암의 관계를 부정하는 바람에 평판이 훼손되었다.
>
> 그러나 도구는 성격과 무관하게 살아남는다. 피셔 정보는 이 장에서 파라미터 공간의 자가 되었고, 그 자 위에서 정보기하학 전체가 펼쳐진다. 한 사람의 도구함이 한 학문의 기초가 된 드문 사례다.
`,U4=`# 무지와 확신

우리 손에는 피셔 정보라는 자가 하나 있다. 분포를 정하는 숫자, 곧 모수를 조금 움직일 때 분포가 얼마나 달라지는지 재는 양이다. 자는 하나다. 그리고 대칭이다. p에서 q로 재나 q에서 p로 재나, 발밑의 거리는 같다.

그런데 두 점 사이에는 길이 둘 있다. 덧셈의 길과 곱셈의 길. 자가 하나인데 길은 왜 둘인가. 길을 정하는 것은 자가 아니라 「무엇을 곧다고 부를지」의 규칙이기 때문이다. 그 규칙을 접속이라 부른다. 확률의 세계에는 자연스러운 곧음이 둘 있다. 섞어서 곧은 것과, 곱해서 곧은 것. 두 곧음은 하나의 피셔 계량(곳마다 작은 걸음의 길이를 재는 규칙, 곧 이 자)을 사이에 두고 쌍대로, 한쪽이 정해지면 다른 쪽이 정해지는 짝으로 마주 선다.

이 장은 그 두 곧음을 확률의 말로 읽는다. 하나는 무지의 방향이고, 하나는 확신의 방향이다.

![무지에서 확신으로 — 사전분포와 사후분포](/images/chapters/ch10-prior-posterior.svg)

## 혼합: 무지의 고백

세 전문가의 의견을 하나로 모아야 한다. 섞을 수도 있고, 합성할 수도 있다. 둘은 무엇이 다른가? 섞는다는 것은 아직 누가 맞는지 모른다는 뜻이 아닌가?

### 의사의 아침 — 세 의견을 섞다

환자가 두통을 호소한다. 아침 회진. 신경과 의사는 「편두통일 가능성이 있다」라고 한다 — 분포 A. 안과 의사는 「녹내장일 가능성이 있다」라고 한다 — 분포 B. 내과 의사는 「고혈압일 가능성이 있다」라고 한다 — 분포 C.

아직 검사를 하지 않았다. 세 의사 중 누가 맞는지 모른다. 주치의는 세 의견을 「섞는다」.
0.4·A + 0.3·B + 0.3·C.
이것은 세 의견의 혼합(mixture)이다.

혼합분포의 모양을 보면 봉우리가 세 개다. 세 가능성이 전부 살아 있다. 아무것도 버려지지 않았다 — 아직 모르니까.

### 이미지 생성의 와일드카드 — 가능성을 넓히다

Stable Diffusion으로 그림을 그린다고 하자. 프롬프트를 쓴다.
     {1girl | 1boy | 1cat}
중괄호와 파이프(|)는 와일드카드다. 「셋 중 하나를 랜덤으로 골라라」는 뜻.

이것은 정확히 혼합분포다. 소녀의 이미지 분포, 소년의 이미지 분포, 고양이의 이미지 분포를 균등하게 섞는 것. 생성할 때마다 셋 중 하나가 나온다. 세 가능성이 공존한다 — 아직 뭘 그릴지 정하지 않았으니까.

와일드카드를 추가할수록 가능성이 넓어진다.
     {1girl | 1boy | 1cat | landscape | food}
선택지가 늘어난다. 표본 공간에서 분포가 차지하는 영역이 팽창하는 방향.

### 식으로

성분 분포 p<sub>1</sub>, …, p<sub>K</sub>를 혼합 비중 w로 섞으면 혼합분포가 된다.

\`\`\`latex
\\textcolor{#d6479f}{p}_{\\textcolor{#2e9e6e}{w}}(\\textcolor{#6f8fa6}{x}) = \\sum_{k} \\textcolor{#2e9e6e}{w}_k\\, \\textcolor{#d6479f}{p}_k(\\textcolor{#6f8fa6}{x}), \\qquad \\textcolor{#2e9e6e}{w}_k \\ge 0,\\ \\ \\sum_k \\textcolor{#2e9e6e}{w}_k = 1
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_{\\textcolor{#2e9e6e}{w}} & \\text{혼합분포} \\\\
\\textcolor{#d6479f}{p}_k & k \\text{ 번째 성분 분포 (의사 한 명의 의견)} \\\\
\\textcolor{#2e9e6e}{w} & \\text{혼합 비중 벡터, 심플렉스 위의 한 점} \\\\
\\textcolor{#6f8fa6}{x} & \\text{표본 (진단, 이미지 등)} \\\\
k & \\text{성분의 번호}
\\end{array}
\`\`\`

혼합 비중 (0.4, 0.3, 0.3)은 심플렉스(합이 1인 음 아닌 수들이 이루는 영역. 수가 셋이면 삼각형) 위의 점이다. 와일드카드를 추가하면 심플렉스의 차원이 올라간다. 혼합 비중을 바꾸면 심플렉스 위를 걷는다.

두 혼합 p<sub>0</sub>, p<sub>1</sub> 사이를 혼합 비중의 직선으로 걸으면, 그 길은 밀도를 그대로 섞는 길이다.

\`\`\`latex
\\textcolor{#d6479f}{p}_t(\\textcolor{#6f8fa6}{x}) = (1 - t)\\, \\textcolor{#d6479f}{p}_0(\\textcolor{#6f8fa6}{x}) + t\\, \\textcolor{#d6479f}{p}_1(\\textcolor{#6f8fa6}{x}), \\qquad 0 \\le t \\le 1
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_0,\\ \\textcolor{#d6479f}{p}_1 & \\text{양 끝의 두 분포} \\\\
\\textcolor{#d6479f}{p}_t & \\text{길 위의 분포} \\\\
\\textcolor{#6f8fa6}{x} & \\text{표본} \\\\
t & \\text{보간 비율}
\\end{array}
\`\`\`

이것이 m-측지선(m은 mixture, 혼합. 덧셈의 길)이다. 「최단 경로」라는 뜻이 아니다. m-접속의 규칙으로 「곧게」 가는 길이라는 뜻이다. 성분을 고정한 혼합들의 모임에서는 혼합 비중 w가 바로 이 곧음의 좌표다. 그래서 혼합 비중을 바꾸는 일은 파라미터 공간에서 덧셈으로 걷는 일이다.

한 가지 조심할 곳이 있다. 이 말은 「성분을 고정한 혼합들의 모임」 안에서만 그대로 맞다. 가우시안족 안에서 기대모수 η(평균 E[x]와 제곱의 평균 E[x²]를 좌표로 쓴 것)의 직선을 따라 걸으면, 그 중간점은 가우시안이다. 그런데 두 가우시안의 혼합은 가우시안이 아니다. η-직선의 중간점은 혼합 그 자체가 아니라 혼합과 평균·분산이 같은 가우시안이다. 이 차이는 뒤의 문제 4에서 숫자로 본다.

### 섞으면 얼마나 모르게 되는가

엔트로피는 「평균적 놀라움」이다. 섞으면 평균적 놀라움이 커지는가? 정확히 말하면 이렇다.

\`\`\`latex
\\sum_k \\textcolor{#2e9e6e}{w}_k\\, \\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}_k) \\;\\le\\; \\textcolor{#9467bd}{H}\\Big(\\sum_k \\textcolor{#2e9e6e}{w}_k\\, \\textcolor{#d6479f}{p}_k\\Big) \\;\\le\\; \\sum_k \\textcolor{#2e9e6e}{w}_k\\, \\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}_k) + \\textcolor{#9467bd}{H}(\\textcolor{#2e9e6e}{w})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}_k) & \\text{성분 하나의 엔트로피} \\\\
\\textcolor{#9467bd}{H}\\big(\\sum_k \\textcolor{#2e9e6e}{w}_k \\textcolor{#d6479f}{p}_k\\big) & \\text{혼합분포의 엔트로피} \\\\
\\textcolor{#9467bd}{H}(\\textcolor{#2e9e6e}{w}) & \\text{혼합 비중 벡터 자체의 엔트로피, } -\\sum_k w_k \\log w_k \\\\
\\textcolor{#2e9e6e}{w}_k & \\text{혼합 비중} \\\\
\\textcolor{#d6479f}{p}_k & \\text{성분 분포}
\\end{array}
\`\`\`

왼쪽 부등식은 엔트로피의 오목성(섞은 것의 값이 값들의 평균보다 작지 않은 성질)이다. 혼합의 불확실성은 성분 불확실성의 평균보다 작지 않다. 오른쪽 끝의 H(w)가 「누가 맞는지 모른다」의 몫이다. 성분들이 서로 멀리 떨어져 있으면 혼합의 엔트로피는 위쪽 끝에 붙는다.

여기서 흔한 오해 하나를 짚고 가자. 「혼합 비중이 균등할 때, 즉 삼각형 한가운데서 혼합의 엔트로피가 최대다」는 일반적으로 틀리다. 균등에서 최대인 것은 혼합 비중 벡터 자체의 엔트로피 H(w)다. 혼합의 엔트로피는 성분의 모양에 따라 다르다. 좁은 성분 둘과 넓은 성분 하나를 섞으면 최대점은 넓은 성분 쪽으로 쏠린다.

{{viz: ch10/mixture-entropy}}

### 파이썬

\`\`\`python
import numpy as np

x = np.linspace(-15, 25, 400001)
dx = x[1] - x[0]

def normal(m, s):
    return np.exp(-0.5 * ((x - m) / s)**2) / (s * np.sqrt(2 * np.pi))

def H(p):                                   # 미분 엔트로피: 연속분포의 엔트로피, 엔트로피를 미분한 값이 아니다 (적분을 합으로)
    p = np.maximum(p, 1e-300)
    return -np.sum(p * np.log(p)) * dx

comps = [normal(-5, 0.3), normal(0, 0.3), normal(5, 3)]   # 좁은 둘, 넓은 하나

for w in [(1/3, 1/3, 1/3), (0.2, 0.2, 0.6)]:
    w = np.array(w)
    mix = sum(wk * pk for wk, pk in zip(w, comps))
    avg = sum(wk * H(pk) for wk, pk in zip(w, comps))
    Hw = -np.sum(w * np.log(w))
    print(f"w={np.round(w, 2)}  H(혼합) {H(mix):.3f}  ΣwH {avg:.3f}  ΣwH+H(w) {avg + Hw:.3f}")
print(f"넓은 성분 하나의 H {H(comps[2]):.3f}")
# w=[0.33 0.33 0.33]  H(혼합) 2.010  ΣwH 0.982  ΣwH+H(w) 2.081
# w=[0.2 0.2 0.6]  H(혼합) 2.456  ΣwH 1.597  ΣwH+H(w) 2.547
# 넓은 성분 하나의 H 2.518
\`\`\`

균등 혼합 비중(2.010)보다 넓은 성분에 무게를 더 준 쪽(2.456)이 엔트로피가 크다. 두 경우 모두 샌드위치 부등식은 지켜진다.

### 수확

「혼합하면 불확실성은 성분들의 평균보다 커진다. 와일드카드를 추가하는 것이 혼합이다. 파라미터 공간에서는 덧셈의 길(m-측지선)을 걷는다.」

### 문제 1. 한가운데가 가장 모르는 곳인가

성분 세 개 N(−5, 0.3²), N(0, 0.3²), N(5, 3²)를 섞는다. (가) 혼합 비중이 (⅓, ⅓, ⅓)일 때와 (0.2, 0.2, 0.6)일 때 혼합의 엔트로피를 비교하라. (나) 혼합의 엔트로피가 성분 엔트로피의 가중평균 이상임을 보이고, 혼합 비중 (0.2, 0.2, 0.6)에서 이 부등식을 확인하라. (다) 혼합의 엔트로피는 가장 넓은 성분 N(5, 3²) 하나의 엔트로피보다 언제나 큰가?

#### 함께 풀기

**김민준:** 이건 금방 했어요. 처음엔 폭이 전부 1인 성분으로 해 봤는데 한가운데가 최대였어요. 그래서 (가)는 균등이 크다, 끝.

**선생님:** 문제의 성분으로 돌려 봤어요?

〔M04〕 **김민준:** …돌렸더니 균등이 2.010이고 (0.2, 0.2, 0.6)이 2.456이에요. 균등이 더 작아요.

**선생님:** 폭이 같을 때는 왜 한가운데가 최대였을까요?

**김민준:** 셋이 대칭이라서요. 어느 성분도 특별하지 않으니까 최대점도 대칭인 자리, 한가운데에 있어야 하고. 여기서는 넓은 성분 하나가 특별하니까 거기로 쏠리고요.

**김민준:** 조별 과제에서 셋이 같은 분량을 나누면 공평한데, 한 명 파트가 세 배 크면 균등 배분이 공평한 게 아닌 거랑 비슷하네요.

**이서연:** (나)는 엔트로피가 오목하니까 바로 나와요. H(Σw p) ≥ Σ w H(p). 숫자로는 2.456 ≥ 1.597이에요.

**이서연:** 그러니까 (다)의 답은 「예」예요. 섞으면 성분보다 더 모르게 되니까, 혼합은 가장 넓은 성분보다도 엔트로피가 커요.

**선생님:** 부등식의 오른쪽이 뭐였죠?

〔S06〕 **이서연:** 가중평균이요. 평균이니까… 가장 큰 성분보다 작을 수 있어요. 넓은 성분 하나는 2.518인데 (0.2, 0.2, 0.6) 혼합은 2.456이네요. 넓은 성분만 쓰는 게 더 모르는 상태예요.

**선생님:** 그래요. 그럼 부등식이 말하는 「무지」는 정확히 뭘까요?

**이서연:** 차이 H(혼합) − Σ w H(p)가 얼마인지 봐야겠네요. 2.456 − 1.597 = 0.859. 이게 H(w) = 0.950보다 작아요.

〔S08〕 **이서연:** 아, 이 차이가 「표본 하나를 봤을 때 그게 어느 성분에서 왔는지 모르는 정도」예요. 성분들이 완전히 떨어져 있으면 표본만 보고 성분을 맞힐 수 있으니 이 몫이 H(w) 전부가 되고, 겹칠수록 줄어요. 오목성은 「누가 맞는지 모름」이 얹힌다는 말이지, 무조건 가장 넓은 성분보다 넓어진다는 말이 아니에요.

**선생님:** 정확해요. 그 차이는 성분 번호와 표본 사이의 상호정보량이에요. 「누가 맞는지 모른다」가 정확히 그만큼의 엔트로피예요.

**이서연:** 해석학에서 젠센 부등식을 쓸 때 교수님이 「평균과 비교하는 거지 최댓값과 비교하는 게 아니다」라고 몇 번이나 적으셨는데, 그 말이 여기서 걸리네요.

## 베이즈 갱신: 곱셈으로 걷는 길

베이즈 업데이트에서는 사전분포에 우도(가설이 맞을 때 관측이 나올 확률)를 곱한다. 왜 덧셈이 아니라 곱셈인가? 섞는 것이 「모른다」의 표현이었다면, 곱하는 것은 무엇의 표현인가?

### 의사의 낮 — 검사 결과를 곱하다

오후. MRI 결과가 나왔다. MRI는 녹내장에는 반응하지 않고, 편두통과 고혈압에만 특정 패턴을 보인다. 이 정보(우도)를 아침의 믿음(사전분포)에 곱한다.

곱셈이 하는 일. 녹내장 가능성은 우도가 0에 가까우므로 눌린다. 편두통과 고혈압만 살아남는다. 세 봉우리가 두 봉우리로 줄었다. 「겹치는 영역만 살아남는다」.

혈액검사가 추가로 나오면 또 곱한다. 고혈압의 증거가 약하면 그것도 눌린다. 마지막에 편두통 하나만 남는다. 이 이야기에서는 곱할 때마다 봉우리가 줄고, 분포가 좁아진다. 「곱셈은 확신의 기록이다.」

다만 「이 이야기에서는」이라는 단서를 붙여 두자. 곱셈이 언제나 분포를 좁히지는 않는다. 다음 절에서 반례를 본다.

### 이미지 생성의 프롬프트 확장 — 가능성을 좁히다

다시 Stable Diffusion. 이번에는 와일드카드가 아니라 쉼표(,)로 조건을 추가한다.
     1girl
에서
     1girl, smiling
로 프롬프트를 확장한다.

「smiling」은 필터다. 웃는 소녀의 이미지만 통과시키고 나머지는 눌린다. 이것은 곱셈이다.
     p(image | 「1girl」) × p(「smiling」 | image)
두 조건이 겹치는 영역만 살아남는다.

프롬프트를 더 추가하면
     1girl, smiling, red hair, school uniform, cherry blossom
매 조건이 필터로 곱해지고, 가능한 이미지의 범위가 점점 좁아진다.

각 조건은 로그 공간에서 더해진다. log p(image | 모든 조건) = log p(image | 1girl) + log p(smiling | ·) + log p(red hair | ·) + … − log Z. 곱셈이 로그 공간의 덧셈이 된다. 마지막의 log Z는 전체 확률을 1로 되돌리는 정규화 상수다.

### 식으로

두 분포 p<sub>0</sub>, p<sub>1</sub>을 곱해서 잇는 길은 기하평균 보간이다.

\`\`\`latex
\\textcolor{#d6479f}{p}_t(\\textcolor{#6f8fa6}{x}) = \\frac{\\textcolor{#d6479f}{p}_0(\\textcolor{#6f8fa6}{x})^{1-t}\\, \\textcolor{#d6479f}{p}_1(\\textcolor{#6f8fa6}{x})^{t}}{\\textcolor{#7d8a3a}{Z}(t)}, \\qquad \\log \\textcolor{#d6479f}{p}_t = (1-t) \\log \\textcolor{#d6479f}{p}_0 + t \\log \\textcolor{#d6479f}{p}_1 - \\log \\textcolor{#7d8a3a}{Z}(t)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_0,\\ \\textcolor{#d6479f}{p}_1 & \\text{양 끝의 두 분포} \\\\
\\textcolor{#d6479f}{p}_t & \\text{길 위의 분포} \\\\
\\textcolor{#7d8a3a}{Z}(t) & \\text{정규화 상수, } \\sum_x p_0(x)^{1-t} p_1(x)^t \\\\
\\textcolor{#6f8fa6}{x} & \\text{표본} \\\\
t & \\text{보간 비율}
\\end{array}
\`\`\`

로그를 씌우면 직선이다. 이것이 e-측지선(e는 exponential, 지수. 곱셈의 길)이다. m-측지선이 밀도를 더하는 직선이었다면, e-측지선은 로그 밀도를 더하는 직선이다.

베이즈 갱신은 바로 이 길 위에 있다.

\`\`\`latex
\\textcolor{#7f8f10}{\\pi}(h \\mid y) = \\frac{\\textcolor{#139696}{\\pi}(h)\\, \\textcolor{#b58a00}{L}(y \\mid h)}{\\sum_{h'} \\textcolor{#139696}{\\pi}(h')\\, \\textcolor{#b58a00}{L}(y \\mid h')}, \\qquad \\textcolor{#7f8f10}{\\pi}_t(h) \\propto \\textcolor{#139696}{\\pi}(h)\\, \\textcolor{#b58a00}{L}(y \\mid h)^{t}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#139696}{\\pi}(h) & \\text{사전분포: 가설 } h \\text{ 에 대한 아침의 믿음} \\\\
\\textcolor{#b58a00}{L}(y \\mid h) & \\text{우도: 가설 } h \\text{ 가 맞을 때 검사 결과 } y \\text{ 가 나올 확률} \\\\
\\textcolor{#7f8f10}{\\pi}(h \\mid y) & \\text{사후분포: 결과를 본 뒤의 믿음} \\\\
\\textcolor{#7f8f10}{\\pi}_t(h) & \\text{우도를 } t \\text{ 제곱만 반영한 중간 믿음 } (t = 0 \\text{ 사전, } t = 1 \\text{ 사후}) \\\\
h,\\ h' & \\text{가설 (편두통, 녹내장, 고혈압)} \\\\
y & \\text{검사 결과}
\\end{array}
\`\`\`

우도를 조금씩(t만큼) 반영하며 사전에서 사후로 가는 길 π<sub>t</sub>는 사전과 사후를 잇는 기하평균 보간과 정확히 같은 곡선이다. 사후 ∝ 사전 × 우도이므로, 사전<sup>1−t</sup> × 사후<sup>t</sup> ∝ 사전 × 우도<sup>t</sup>이기 때문이다. 베이즈 갱신은 e-측지선을 따라 걷는 일이다.

### 수확

「프롬프트에 쉼표를 추가하는 것이 곱셈이다. 곱셈의 길은 로그 밀도를 더하는 직선(e-측지선)이고, 베이즈 갱신은 이 길을 걷는다.」

곱셈이 로그의 덧셈이므로, 로그 밀도의 기울기 ∇log p도 곱셈을 따라 더해진다. ∇log(사전 × 우도) = ∇log 사전 + ∇log 우도. 무지와 확신의 쌍대가 경사 계산에도 그대로 들어 있다.

### 문제 2. 우도를 반만 믿으면

사전 (0.4, 0.3, 0.3), MRI 우도 (1, 0.05, 1)이다. (가) 우도를 t = 0.5 제곱만 반영한 중간 믿음 π<sub>0.5</sub>를 구하라. (나) 사전과 사후의 확률을 그대로 평균한 점, 그리고 기하평균을 정규화한 점과 비교하라. π<sub>0.5</sub>는 어느 쪽과 같은가?

#### 함께 풀기

**김민준:** 중간이니까 사전이랑 사후를 반씩 더했어요. 사후가 (0.559, 0.021, 0.420)이니까 평균은 (0.480, 0.160, 0.360)이에요.

**이서연:** 문제는 우도에 0.5 제곱을 한 거야. 0.4 × 1, 0.3 × √0.05, 0.3 × 1을 정규화하면 (0.521, 0.087, 0.391)이야. 네 답이랑 달라.

**김민준:** 둘 다 「중간」인데 왜 달라요?

**선생님:** 사전과 사후의 기하평균을 정규화해 볼래요?

**김민준:** √(0.4 × 0.559) 이런 식으로… (0.521, 0.087, 0.391)이요. 서연이 답이랑 같아요.

〔M07〕 **김민준:** 사후가 사전 × 우도니까, 기하평균에는 우도의 제곱근이 들어가는 거네요. 우도를 반만 믿는 건 곱셈의 길로 반 가는 거고, 제가 한 건 덧셈의 길로 반 간 거예요.

**선생님:** 그래요. 녹내장 확률을 봐요. 덧셈의 길은 0.160, 곱셈의 길은 0.087이에요. 곱셈의 길은 우도가 누르는 곳을 더 빨리 눌러요.

**김민준:** 보고서 두 개를 합칠 때 문단을 반반 섞는 거랑, 한 사람 첨삭을 반쯤 반영하는 거랑 다른 것 같은 거네요.

## 조건부 엔트로피: 관측이 지키는 평균의 약속

앞 절의 이야기에서는 곱할 때마다 봉우리가 줄고 분포가 좁아졌다. 곱하면 언제나 좁아지는가?

### 반례 — 확신을 부정하는 검사

아니다. 거의 확신하던 믿음 (0.9, 0.05, 0.05)에 그 확신을 부정하는 검사 결과가 나왔다고 하자. 우도가 (0.01, 1, 1)이면 사후는 (0.083, 0.459, 0.459)다. 엔트로피는 0.394에서 0.921로 오히려 커진다. 확신이 무너지고, 다시 모르게 되었다.

그래도 「관측은 불확실성을 줄인다」는 말에는 정확한 형태가 있다. 결과를 보기 전에, 나올 수 있는 결과 전부에 대해 평균을 내면 줄어든다.

\`\`\`latex
\\sum_{y} P(y)\\; \\textcolor{#9467bd}{H}\\big(\\pi(\\cdot \\mid y)\\big) \\;\\le\\; \\textcolor{#9467bd}{H}(\\textcolor{#139696}{\\pi})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H} & \\text{엔트로피} \\\\
\\textcolor{#139696}{\\pi} & \\text{사전분포} \\\\
\\pi(\\cdot \\mid y) & \\text{결과 } y \\text{ 를 본 뒤의 사후분포} \\\\
P(y) & \\text{결과 } y \\text{ 가 나올 확률, } \\sum_h \\pi(h) L(y \\mid h)
\\end{array}
\`\`\`

정보이론에서는 H(X|Y) ≤ H(X)라고 쓴다. 한 번의 관측은 확신을 무너뜨릴 수 있다. 그러나 평균적으로는, 검사를 한다고 더 모르게 되지는 않는다. 「곱셈은 확신의 기록이다」라는 말은 이 평균의 뜻으로 읽어야 한다.

{{viz: ch10/bayes-path}}

### 파이썬

\`\`\`python
import numpy as np

def H(p):
    p = p[p > 0]
    return -np.sum(p * np.log(p)) + 0.0     # -0.0 을 0.0 으로

def update(prior, lik, t=1.0):              # 사전 × 우도^t, 정규화
    u = prior * lik**t
    return u / u.sum()

# 아침의 믿음: 편두통, 녹내장, 고혈압.  MRI: 녹내장에는 반응 없음
prior = np.array([0.4, 0.3, 0.3])
mri = np.array([1.0, 0.05, 1.0])
for t in [0, 0.5, 1]:
    q = update(prior, mri, t)
    print(f"t={t:<3}  {np.round(q, 3)}  H {H(q):.3f}")

# 반례: 거의 확신하던 믿음에 그 확신을 부정하는 검사 결과
prior = np.array([0.9, 0.05, 0.05])
pos = np.array([0.01, 1.0, 1.0])            # 양성일 확률 P(양성 | 가설)
post = update(prior, pos)
print(f"사전 H {H(prior):.3f}  →  양성 뒤 H {H(post):.3f}  {np.round(post, 3)}")

# 결과를 보기 전의 평균: 양성·음성 두 경우를 확률로 가중
p_pos = np.sum(prior * pos)
post_neg = update(prior, 1 - pos)
print(f"P(양성) {p_pos:.3f}  음성 뒤 H {H(post_neg):.3f}  평균 H {p_pos * H(post) + (1 - p_pos) * H(post_neg):.3f}")
# t=0    [0.4 0.3 0.3]  H 1.089
# t=0.5  [0.521 0.087 0.391]  H 0.920
# t=1    [0.559 0.021 0.42 ]  H 0.770
# 사전 H 0.394  →  양성 뒤 H 0.921  [0.083 0.459 0.459]
# P(양성) 0.109  음성 뒤 H 0.000  평균 H 0.100
\`\`\`

양성이 나오면 엔트로피가 0.394에서 0.921로 커진다. 하지만 양성은 열 번에 한 번꼴로만 나오고, 음성이면 완전히 확신하게 된다. 평균 엔트로피는 0.100으로, 사전의 0.394보다 작다.

### 대응표

| 와일드카드 (OR) | 쉼표 (AND) |
|---|---|
| {A \\| B \\| C} | A, B, C |
| 혼합(mixture) | 곱(product) |
| 가능성을 넓힌다 | 가능성을 좁힌다 |
| 엔트로피가 성분 평균보다 크다 | 엔트로피가 평균적으로 준다 |
| 무지의 방향 | 확신의 방향 |
| 덧셈의 길 (m-측지선) | 곱셈의 길 (e-측지선) |
| 밀도를 더하는 직선 (기대모수 η 좌표에서 직선) | 로그 밀도를 더하는 직선 (자연모수 θ 좌표에서 직선) |

### 그리고 이것이 정보기하학의 심장이다

표본 공간에서 분포를 섞고 곱하는 두 연산이 파라미터 공간에서 두 접속(m-접속과 e-접속)으로 번역된다. 아마리가 밝힌 것의 핵심은 이 두 접속이 대등한 지위로 마주 서 있다는 것이다. 하나가 다른 하나의 「그림자」다. 무지와 확신, 덧셈과 곱셈이 하나의 피셔 계량을 사이에 두고 쌍대다. 계량이 둘인 것이 아니다. 자는 하나이고, 「곧음」의 규칙이 둘이다.

### 수확

「한 번의 관측은 확신을 무너뜨릴 수 있다. 그러나 나올 수 있는 결과 전부에 대해 평균하면 불확실성은 줄어든다. 무지(OR)와 확신(AND)은 쌍대다.」

---

> ### 인물 이야기 — Thomas Bayes와 「역방향 확률」
>
> ![Thomas Bayes](/images/portraits/thomas-bayes.gif)
>
> 1730년대, 잉글랜드 턴브리지웰스. Thomas Bayes는 이곳 마운트 시온 예배당의 장로교 목사였다(1752년까지). 직업 수학자는 아니었다. 생전에 낸 수학 저작은 익명의 소책자 하나뿐이었다. 1736년, Berkeley의 비판에 맞서 뉴턴의 유율법(미적분)을 변호한 글이다. 그래도 수학 실력은 알려져 있었던지, 1742년 왕립학회 회원이 되었다.
>
> 그가 남긴 문제는 이것이었다. 무언가가 일어난 횟수와 일어나지 않은 횟수만 알 때, 그 일이 일어날 확률이 어느 범위에 있다고 말할 수 있는가? 논문은 이 문제를 당구대 비유로 푼다. 탁자 위에 공 하나를 굴려 멈춘 자리를 모른 채, 다른 공들을 굴려 그 왼쪽에 몇 번 멈췄는지만 센다. 그 횟수로 첫 공의 자리를 거꾸로 추론한다.
>
> 설명을 위해 더 익숙한 예로 바꿔 보자(Bayes의 원래 예는 아니다). 동전을 열 번 던져서 앞면이 일곱 번 나왔다. 순방향은 쉽다. 앞면 확률이 0.7인 동전이 열 번 중 일곱 번 앞면을 낼 확률은 계산할 수 있다. 역방향은 어렵다. 일곱 번의 앞면을 본 뒤, 앞면 확률이 얼마인지를 역으로 추론하는 것.
>
> 답의 핵심은 「사전 확률(prior)」이다. 던지기 전에 앞면 확률에 대해 이미 갖고 있는 믿음이 있다. 그 믿음에 데이터의 우도를 곱해서 업데이트하면 새로운 믿음(사후 확률, posterior)이 된다.
>
> 사전 × 우도 → 사후. 이것이 베이즈 정리다. 그리고 이 「곱한다」는 연산이 바로 이 장의 주제다.
>
> 곱한다는 것은 AND다. 사전 믿음이 「이 동전은 대체로 공정할 것이다」이고 데이터가 「앞면이 많이 나왔다」이면, 두 정보가 함께 지지하는 곳만 살아남는다. 대개는 사전보다 좁아진다. 확신의 방향이다. 다만 「언제나」는 아니라는 것을 이 장에서 보았다.
>
> Bayes는 1761년 4월에 세상을 떠났다. 친구 Richard Price가 유고에서 이 논문을 찾아 1763년 왕립학회에 보냈다. Price는 서문과 부록을 붙이며 상당한 편집과 보충을 했다. 「Bayes의 정리」에는 사실 Price의 기여가 적지 않다.
>
> 그리고 1774년, 프랑스에서 Laplace가 같은 아이디어를 독립적으로, 그리고 훨씬 더 체계적으로 발전시켰다. 오늘 우리가 「베이즈적」이라 부르는 넓은 해석을 펼치고 퍼뜨린 사람은 오히려 Laplace였다.
>
> 이 장에서 「곱셈이 확신이다」라고 했다. Bayes와 Laplace가 연 문은 정확히 이것이다 — 새로운 증거를 곱하며 믿음을 고쳐 가는 과정. 그 과정이 파라미터 공간에서 e-측지선을 따라 걷는 것임이 기하학의 말로 쓰이기까지는 200년이 넘게 걸렸다.

### 문제 3. 검사를 했더니 더 모르게 되었다

세 가설에 대한 사전 믿음이 (0.9, 0.05, 0.05)다. 검사가 양성일 확률이 가설별로 (0.01, 1, 1)이다. (가) 양성이 나왔을 때의 사후분포와 엔트로피를 구하라. (나) 음성이 나왔을 때도 구하고, 결과를 보기 전의 평균 엔트로피를 사전 엔트로피와 비교하라.

#### 함께 풀기

**김민준:** (가) 계산했는데 엔트로피가 0.394에서 0.921로 올라갔어요. 곱하면 줄어야 하잖아요. 제 코드 어딘가 틀린 것 같아서 한참 봤어요.

**이서연:** 코드는 맞을 거야. 그래도 이상해. H(X|Y) ≤ H(X)가 정리니까, 관측하면 엔트로피는 줄어야 해.

**선생님:** 서연 학생, H(X|Y)의 정의를 써 볼래요?

〔S04〕 **이서연:** Σ<sub>y</sub> P(y) H(X|Y=y)요. …결과 y 전부에 대한 평균이네요. 양성 하나만 본 게 아니라.

**선생님:** 그럼 (나)를 해 봐요.

**김민준:** 양성일 확률이 0.9 × 0.01 + 0.05 + 0.05 = 0.109예요. 음성이면 첫 가설 말고는 음성이 나올 수가 없으니까 사후가 (1, 0, 0), 엔트로피 0이에요.

**이서연:** 평균은 0.109 × 0.921 + 0.891 × 0 = 0.100. 사전 0.394보다 작아.

〔M07〕 **김민준:** 아, 드물게 나오는 양성이 확신을 깨는 거고, 대부분은 음성이 나와서 확신이 더 굳어지는 거네요.

**선생님:** 정리는 평균에 대한 약속이에요. 결과 하나하나에 대한 약속이 아니고요.

**김민준:** 조교님이 중간고사 끝나고 「평균적으로 공부하면 점수가 오른다」고 하셨는데, 제가 딱 그 시험만 망친 거랑 비슷하네요.

**이서연:** 수업에서 「조건부 기댓값에 대한 부등식을 한 표본에 쓰지 마라」라고 했던 게 이거구나.

## 사영: 지수족 밖의 분포를 모형 위로

지수족 안에서는 모든 것이 아름답다. 지수족은 가우시안·베르누이처럼 log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포 모임이다. θ는 자연모수, t(x)는 충분통계량(모형이 데이터에서 보는 요약값), η = E[t(x)]는 기대모수, F는 합이 1이 되게 맞추는 로그정규화자다. 그 안에서 θ와 η가 르장드르 변환(볼록함수의 기울기를 새 좌표로 삼는 변환)으로 연결되고, F(θ)의 볼록성이 브레그만 발산(볼록함수와 그 접선 사이의 틈으로 두 분포의 다름을 재는 양)을 선물하고, e-측지선과 m-측지선이 각각 θ와 η 좌표의 직선이 된다.

그런데 실제 세계의 분포는 대부분 지수족이 아니다.

실제 데이터는 고차원 공간의 저차원 매니폴드 위에 산다. 그 매니폴드의 모양은 지수족이 그리는 깔끔한 곡면보다 훨씬 복잡하다. 이미지 Diffusion 모델이 만들어내는 이미지 분포는 지수족이 아니다. 신경망이 표현하는 분포는 파라미터가 수억 개이고, 지수족의 깔끔한 골격을 따르지 않는다. 자연어의 토큰 분포도, 단백질의 구조 분포도 마찬가지다.

그러면 지수족 위에 쌓아올린 도구들은 쓸모없는 것인가?

아니다. 전략을 바꾸면 된다. 복잡한 분포를 직접 다루는 대신, 다루기 쉬운 모형 안에서 「가장 가까운 점」을 찾는 것이다. 현실(p)을 지도(q)에 옮기는 것이다. 가까움은 KL 발산(Kullback–Leibler divergence, 한 분포를 다른 분포로 대신할 때 치르는 손해)으로 잰다.

여기서 KL의 비대칭이 문제가 된다. KL(p‖q)와 KL(q‖p)는 다르다. 이 비대칭은 발산이라는 척도 자체의 성질이다. 자(계량)가 비대칭이라는 뜻이 아니다. 발밑에서는 두 방향이 같은 피셔 이차식으로 줄어든다. 비대칭은 두 점이 멀리 떨어져 있을 때 드러나는 전역적인 성질이다.

이제 남은 질문은 하나다. 그 「가장 가까운 점」을 KL의 어느 방향으로 재느냐에 따라 답이 달라지지 않는가?

달라진다. 출발점은 하나 — 모형 밖의 복잡한 분포 p. 모형이라는 곡면 위에 가장 가까운 점을 찍는 것이 사영이다.

KL(p‖q)를 최소화하면 — p가 심판이다. p가 높은 곳에서 q가 낮으면 벌이 크다. q는 p의 봉우리를 빠짐없이 덮으려 한다. 넓게 덮는 쪽으로 내려찍는다 — m-사영. p에서 착지점까지의 m-측지선이 모형과 직각으로 만난다.

KL(q‖p)를 최소화하면 — q가 심판이다. q가 높은 곳에서 p가 낮으면 벌이 크다. q는 p가 거의 0인 곳에 확률을 걸지 않으려 한다. 봉우리들이 충분히 떨어져 있으면, q는 봉우리 하나에 집중하는 좁은 답을 고른다 — e-사영. 그런데 이 답은 하나가 아닐 수 있다. 봉우리가 둘이면 어느 봉우리를 고르느냐에 따라 국소 최솟값(local minimum)이 여럿 생기고, 봉우리들이 가까우면 오히려 가운데에 걸친 넓은 답이 최적이다. 어느 쪽이 되는지는 봉우리 사이의 간격이 정한다.

같은 곡면 위에 내려찍는데, 사영 방식에 따라 도착점이 다르다. 무지와 확신의 쌍대가 여기서 「두 종류의 추론」이 된다. 「빠뜨리지 않겠다」(m-사영)와 「틀린 곳에 걸지 않겠다」(e-사영). 어느 쪽이 올바른 추론인가? — 올바른 쪽은 없다. 각각이 다른 질문에 답한다.

### 문제 4. 두 가우시안을 섞으면 가우시안인가 (킬러)

p<sub>0</sub> = N(−2, 1), p<sub>1</sub> = N(2, 1)이다. (가) 반반 혼합 ½p<sub>0</sub> + ½p<sub>1</sub>의 평균과 분산을 구하라. (나) 가우시안족의 기대모수 η = (E[x], E[x²]) 좌표에서 두 점의 중간점을 구하라. 어떤 가우시안인가? (다) (가)의 혼합과 (나)의 가우시안은 같은 분포인가? x = 0과 x = 2에서 밀도를 비교하고, KL(혼합‖(나)의 가우시안)을 구하라. (라) 자연모수 θ 좌표의 중간점(e-측지선의 중간점)은 무엇인가?

#### 함께 풀기

**김민준:** (가)는 평균 0, 분산은 1 + 4 = 5요. 확인하려고 N(−2, 1)에서 5만 개, N(2, 1)에서 5만 개 뽑아서 합치고 가우시안을 적합(fit)했어요. 평균 −0.001, 표준편차 2.235. √5가 2.236이니까 딱 맞아요. 그러니까 혼합은 N(0, 5)예요.

**이서연:** (나)도 같아. η<sub>0</sub> = (−2, 5), η<sub>1</sub> = (2, 5)이니까 중간점은 (0, 5), 곧 N(0, 5). 앞에서 혼합이 m-측지선이고 m-측지선은 η 좌표의 직선이라고 했으니까, η 직선의 중간점이 곧 혼합이야. (다)는 「같다」.

**선생님:** 두 사람이 다른 길로 같은 답에 왔네요. 그럼 (다)의 밀도를 재 봐요. x = 0에서요.

**김민준:** 혼합은 0.5 × N(0; −2, 1) + 0.5 × N(0; 2, 1)이니까… 0.054요. N(0, 5)는 0.178이에요.

〔M05〕 **김민준:** 세 배 넘게 차이 나요. x = 2에서는 혼합이 0.200, 가우시안이 0.120이고요. 같은 분포가 아니에요. 그런데 적합은 그렇게 잘 맞았는데요?

**선생님:** 민준 학생이 적합으로 맞춘 건 뭐였어요?

**김민준:** 평균이랑 표준편차요. …아, 가우시안을 적합하면 가우시안이 나오는 게 당연하네요. 혼합이 가우시안이라서 맞은 게 아니라, 제가 가우시안 중에서 제일 가까운 걸 고른 거예요. 모양은 확인을 안 했어요.

**선생님:** 모양을 한 숫자로 확인할 방법은요?

**김민준:** 첨도(봉우리가 얼마나 뾰족하고 꼬리가 두꺼운지 재는 수)를 쟀더니 혼합은 1.72, 가우시안이면 3이어야 해요. 혼합은 봉우리가 둘이라 가운데가 꺼져 있어요.

〔S05〕 **이서연:** 그럼 제 논리가 어디서 틀린 거죠? 혼합은 m-측지선이고, 지수족에서 m-측지선은 η의 직선이잖아요.

**선생님:** 그 두 문장 각각은 어느 공간에서 한 말이에요?

**이서연:** 첫 문장은… 모든 분포의 공간, 아니면 성분을 고정한 혼합들의 모임에서요. 거기서는 밀도를 더하는 길이 곧은 길이에요. 두 번째 문장은 가우시안족 안에서요.

〔S06〕 **이서연:** 그런데 두 가우시안의 혼합은 가우시안족 밖으로 나가요. 큰 공간의 m-측지선이 가우시안족 안에 머물지 않는 거예요. 가우시안족은 밀도를 더하는 연산에 대해 닫혀 있지 않으니까요.

**선생님:** 그래요. 그럼 가우시안족 안의 η 직선 중간점은 혼합과 무슨 관계예요?

**이서연:** 평균과 분산이 혼합과 같아요. 혼합에서 가우시안족으로, KL(혼합‖q)가 가장 작은 q를 찾으면 모멘트(평균·분산 같은 기댓값)가 맞는 가우시안이 나오니까… 혼합을 가우시안족에 m-사영한 점이에요.

〔S09〕 **이서연:** 큰 공간에서 혼합을 만들고, 그걸 가우시안족으로 내려찍은 그림자가 η 중간점이에요. 두 개가 겹쳐 보인 건 그림자와 물체를 같은 것으로 본 거고요.

**김민준:** KL(혼합‖N(0, 5))를 쟀더니 0.172예요. 0이 아니에요. 제 샘플 합치기도 결국 같은 그림자를 만든 거네요. 적합이 곧 사영이니까.

**선생님:** (라)도 해 봐요.

**이서연:** θ = (μ/σ², −1/(2σ²))이니까 θ<sub>0</sub> = (−2, −½), θ<sub>1</sub> = (2, −½), 중간점은 (0, −½), 곧 N(0, 1)이에요. 두 밀도의 기하평균을 정규화해도 exp(−(x+2)²/4 − (x−2)²/4) ∝ exp(−x²/2)라서 N(0, 1)이 맞아요.

**김민준:** 곱셈의 중간은 분산 1, 덧셈의 그림자는 분산 5. 같은 두 끝점인데 중간이 다섯 배 차이네요.

〔T13〕 **선생님:** 오늘 두 사람 다 한 번씩 그림자에 속았어요. 민준 학생은 적합한 결과를 원래 분포로 봤고, 서연 학생은 큰 공간의 정리를 작은 족 안으로 그대로 가져왔어요. 가져갈 것은 하나예요. 곱셈의 길은 지수족 안에 머물지만, 덧셈의 길은 지수족 밖으로 나간다. 그래서 지수족 안에서 덧셈의 결과를 보려면 사영이 필요하다.

**이서연:** 선형대수에서 부분공간 밖의 벡터와 그 정사영을 구분하라고 배웠는데, 여기서는 그 부분공간이 「가우시안족」이었네요.
`,G4=`# 추론의 기하학

모형 밖의 복잡한 분포 p를 모형 위의 한 점으로 옮기고 싶다. 그런데 「가장 가까운 점」을 KL 발산(한 분포를 다른 분포로 대신할 때 치르는 손해. 재는 방향에 따라 값이 다르다)의 어느 방향으로 재느냐에 따라 답이 달라지지 않는가?

달라진다. 한쪽은 넓게 덮고, 한쪽은 틀린 곳에 걸지 않으려 좁아진다. 어느 쪽도 그것만으로 「올바른」 추론은 아니다.

그러면 어떻게 해야 하는가? 그 물음에 답하기 전에, 먼저 사영이란 무엇인지를 정확히 하자. 어디에 내려찍히는지, 왜 거기인지, 그리고 내려찍힌 자리에서 무엇이 직각인지.

![추론 = 모형 공간 위로의 사영](/images/chapters/ch11-projection.svg)

## 사영: 큰 세계를 작은 세계에 옮기기

실제 분포가 지수족에 속하지 않으면 어떻게 하나? 지수족은 가우시안·이항분포처럼 log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포 모임이다. 지수족 위에서 쌓은 도구를 분포에 그대로 쓸 수 없다면, 분포 쪽을 다루기 쉬운 모형 위로 옮겨 오는 수밖에 없다.

### 그림자 — 비추는 각도가 모양을 정한다

3D 물체의 2D 그림자를 떠올리자. 그림자를 찍는 각도에 따라 모양이 다르듯 사영의 방향에 따라 결과가 다르다.

### 정의

모형 M은 우리가 다룰 수 있는 분포들의 모임이다. 가우시안족, 이항분포족 같은 것. 현실 p는 M 밖에 있다. M 안에서 p에 「가장 가까운」 점을 고르는 방법이 KL의 방향에 따라 둘이다.

\`\`\`latex
\\textcolor{#7f8f10}{q}_{\\mathrm{m}} = \\arg\\min_{\\textcolor{#7f8f10}{q} \\in M} \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}), \\qquad \\textcolor{#7f8f10}{q}_{\\mathrm{e}} = \\arg\\min_{\\textcolor{#7f8f10}{q} \\in M} \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{q}\\,\\|\\,\\textcolor{#d6479f}{p})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} & \\text{현실 분포 (모형 밖)} \\\\
\\textcolor{#7f8f10}{q} & \\text{모형 } M \\text{ 안의 분포} \\\\
\\textcolor{#7f8f10}{q}_{\\mathrm{m}} & \\text{m-사영점: 현실이 심판하는 KL 을 최소로} \\\\
\\textcolor{#7f8f10}{q}_{\\mathrm{e}} & \\text{e-사영점: 모형이 심판하는 KL 을 최소로} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
M & \\text{모형 (분포들의 모임)}
\\end{array}
\`\`\`

이름의 m과 e는 어디서 왔을까. p에서 착지점까지 그은 길이 무엇이냐에서 왔다. m-사영에서는 p와 q<sub>m</sub>을 잇는 m-측지선(m은 mixture. 혼합, 곧 덧셈의 길)이 모형과 직각으로 만난다. e-사영에서는 p와 q<sub>e</sub>를 잇는 e-측지선(e는 exponential. 지수, 곧 곱셈의 길)이 모형과 직각으로 만난다. 측지선은 정해진 규칙으로 가장 곧게 가는 길이다. 「직각」은 피셔 계량(곳마다 작은 걸음의 길이와 각도를 재는 규칙)으로 잰 직각이다. 이 이야기는 세 번째 절에서 한다.

### 최대우도추정은 사영이다

데이터 x<sub>1</sub>, …, x<sub>n</sub>이 있다. 각 값이 나온 비율을 그대로 적은 분포를 경험분포 p̂라 부른다. 로그우도(우도, 곧 모형이 관측에 준 확률의 로그)의 평균을 경험분포로 다시 쓰면 이렇다.

\`\`\`latex
\\frac{1}{n} \\sum_{i=1}^{n} \\log \\textcolor{#7f8f10}{q}(\\textcolor{#6f8fa6}{x}_i) = -\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{\\hat p}) - \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{\\hat p}\\,\\|\\,\\textcolor{#7f8f10}{q})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{q} & \\text{모형 안의 분포} \\\\
\\textcolor{#6f8fa6}{x}_i & i \\text{ 번째 데이터} \\\\
\\textcolor{#d6479f}{\\hat p} & \\text{경험분포: 각 값이 데이터에 나온 비율} \\\\
\\textcolor{#9467bd}{H} & \\text{엔트로피 (모형과 무관한 상수)} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
n & \\text{데이터 개수}
\\end{array}
\`\`\`

H(p̂)는 경험분포의 엔트로피(평균적 놀라움)로, 모형과 상관없는 상수다. 그러니 로그우도를 최대로 하는 것은 KL(p̂‖q)를 최소로 하는 것과 같다. 최대우도추정(MLE)은 경험분포의 m-사영이다.

모형이 지수족이면 m-사영에는 이름이 하나 더 붙는다. 모멘트 일치(평균 같은 기댓값을 데이터와 맞추기, moment matching)다.

\`\`\`latex
\\textcolor{#e0504a}{\\eta}(\\textcolor{#7f8f10}{q}_{\\mathrm{m}}) = \\mathbb{E}_{\\textcolor{#7f8f10}{q}_{\\mathrm{m}}}\\big[\\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x})\\big] = \\frac{1}{n} \\sum_{i=1}^{n} \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}_i)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#e0504a}{\\eta} & \\text{기대모수} \\\\
\\textcolor{#7f8f10}{q}_{\\mathrm{m}} & \\text{m-사영점 = 최대우도 추정된 분포} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량} \\\\
\\textcolor{#6f8fa6}{x},\\ \\textcolor{#6f8fa6}{x}_i & \\text{표본, } i \\text{ 번째 데이터}
\\end{array}
\`\`\`

모형이 기대하는 충분통계량 t(x)(모형이 데이터에서 보는 요약값)의 평균을 데이터의 평균에 맞추면 그것이 답이다. 이 평균 η가 기대모수다. 모수는 분포를 정하는 숫자이고, 기대모수는 그 숫자를 기댓값으로 매긴 것이다. 가우시안이면 평균과 분산을, 이항분포면 성공 횟수의 평균을 맞춘다. 이 조건은 지수족일 때의 이야기다. 지수족이 아닌 모형에서는 MLE가 여전히 m-사영이지만, 평균이 맞는다는 보장은 없다(아래 문제 1).

### 파이썬

\`\`\`python
import numpy as np

def q(th):                                  # 모형: 이항분포 B(2, θ), 결과 k = 0, 1, 2
    return np.array([(1 - th)**2, 2 * th * (1 - th), th**2])

def kl(a, b):
    return np.sum(a * np.log(a / b))

counts = np.array([50, 10, 40])             # 데이터 100개의 개수
p_hat = counts / counts.sum()               # 경험분포
ths = np.linspace(0.001, 0.999, 9981)

loglik = [np.sum(counts * np.log(q(t))) for t in ths]
m_proj = [kl(p_hat, q(t)) for t in ths]
print(f"로그우도 최대   θ = {ths[np.argmax(loglik)]:.3f}")
print(f"KL(p̂‖q) 최소   θ = {ths[np.argmin(m_proj)]:.3f}")
print(f"모멘트 일치     θ = 평균 k / 2 = {p_hat @ [0, 1, 2] / 2:.3f}")
# 로그우도 최대   θ = 0.450
# KL(p̂‖q) 최소   θ = 0.450
# 모멘트 일치     θ = 평균 k / 2 = 0.450
\`\`\`

세 가지 방법이 같은 점에 떨어진다.

### 수확

「추론 = 사영. 최대우도추정은 경험분포를 모형 위로 m-사영하는 일이다.」

### 문제 1. 최대우도는 평균을 맞추는가

결과가 0, 1, 2인 데이터 100개가 각각 50, 10, 40번 나왔다. (가) 이항 모형 B(2, θ)의 최대우도 추정값을 구하고, 그것이 경험분포의 m-사영임을 확인하라. (나) KL(q‖p̂)를 최소로 하는 θ도 구해 비교하라. (다) 모형을 q(θ) = (1 − θ − θ², θ, θ²)로 바꾸면 최대우도 추정된 분포의 평균이 데이터 평균 0.9와 같은가?

#### 함께 풀기

**김민준:** 사영이 KL 최소화라고 해서 scipy로 KL을 최소화했어요. θ = 0.181, 분포는 (0.671, 0.297, 0.033)이요.

**이서연:** 그건 평균이 0.36밖에 안 되잖아. 데이터 평균은 0.9인데. 이항분포는 지수족이니까 MLE는 평균을 맞춰야 해. θ = 0.9 / 2 = 0.45.

**선생님:** 민준 학생, KL의 두 칸에 뭘 넣었어요?

〔M04〕 **김민준:** kl(q(θ), p_hat)이요. …반대네요. 로그우도가 Σ p̂ log q니까 p̂가 앞에 와야 해요. 고쳐서 돌리면 0.450이에요. 로그우도를 직접 최대화해도 0.450이고요.

**선생님:** 0.181은 뭐였을까요?

**김민준:** e-사영이요. 모형이 심판하니까, 데이터에 10%밖에 없는 1이 모형에서 크게 나오는 걸 피하려고 한쪽으로 쏠린 거예요.

**김민준:** 조교님이 채점 기준 두 개를 헷갈려서 올리신 적 있는데, 점수가 다 이상하게 나왔거든요. 그거랑 같네요. 기준이 바뀌면 답이 바뀌어요.

**이서연:** (다)는 쉬워요. MLE는 언제나 평균을 맞추니까 평균 0.9예요.

**선생님:** 계산해 봤어요?

〔S06〕 **이서연:** …MLE는 θ = 0.412이고, 분포는 (0.418, 0.412, 0.170)이에요. 평균이 0.752예요. 안 맞아요.

**선생님:** 평균을 맞추는 θ는요?

**이서연:** θ + 2θ² = 0.9를 풀면 θ = 0.466이에요. 그런데 거기서는 로그우도가 MLE보다 2.79 낮아요. 평균을 맞추는 게 최대우도가 아니에요.

〔S07〕 **이서연:** 아, 모멘트 일치는 지수족이라서 나온 거예요. 로그우도를 θ로 미분하면 충분통계량이 튀어나오는 건 log q가 θ에 대해 선형일 때뿐이고요. 이 모형은 θ²가 섞여서 지수족이 아니에요. MLE가 m-사영이라는 건 그대로지만, m-사영이 평균을 맞춘다는 건 지수족 위로 사영할 때만이에요.

**이서연:** 선형대수에서 「정사영의 좌표는 내적으로 구한다」가 정규직교 기저일 때만 맞는 것과 비슷해요. 성질이 사영 자체에서 오는 게 아니라 기저에서 와요.

## 두 가지 사영: 같은 분포, 두 개의 답

같은 분포를 같은 모형에 맞추는데, 답이 왜 두 개인가?

### 의사의 저녁 — 가우시안 하나로 요약하기

세 의사의 의견을 섞고, 검사 결과를 곱했다. 이번에는 그 결과를 가우시안 하나로 요약해야 한다. 현실(여러 봉우리 분포)은 가우시안이 아니다. 가장 가까운 가우시안을 찾는 것이 사영이다. 그런데 「가장 가까운」의 기준이 m인지 e인지에 따라 넓은 가우시안이 나올 수도, 좁은 가우시안이 나올 수도 있다.

### p와 q의 역할

(되새김) p는 현실(진짜 분포), q는 지도(모형).

m-사영: KL(p‖q) 최소화 — 현실 p의 눈으로 심판한다.
   p가 높은 곳에서 q가 낮으면 벌이 크다.
   q는 p의 봉우리를 빠짐없이 덮으려 한다.
   가우시안족에서는 평균과 분산을 맞춘 가우시안이 답이다. 늘 하나다.
   결과: q가 넓어진다 — 「빠뜨리지 않겠다.」

e-사영: KL(q‖p) 최소화 — 모형 q의 눈으로 심판한다.
   q가 높은 곳에서 p가 낮으면 벌이 크다.
   q는 p가 거의 0인 골짜기에 확률을 걸지 않으려 한다.
   결과는 봉우리 사이의 거리에 달려 있다.

표준편차(폭)가 1인 봉우리 두 개를 간격 d로 반반 섞은 p를 생각하자. 간격이 좁으면 골짜기가 얕다. e-사영도 가운데에 걸친 가우시안 하나를 고른다. 간격이 봉우리 폭의 약 4.8배를 넘으면, 봉우리 하나에 앉는 좁은 가우시안이 국소해(그 둘레에서만 가장 좋은 답, local minimum)로 새로 생긴다. 그래도 한동안은 가운데 해가 더 낫다. 간격이 약 5.6배를 넘어야 봉우리 하나에 앉는 해가 전역 최적이 된다. 그때도 해는 하나가 아니다. 왼쪽 봉우리와 오른쪽 봉우리, 대칭인 둘이 똑같이 좋다.

e-사영은 유일하지 않을 수 있다. 어느 해에 닿는지는 출발점이 정한다.

{{viz: ch11/gauss-fit}}

### 파이썬

\`\`\`python
import numpy as np

x = np.linspace(-15, 15, 3001)
dx = x[1] - x[0]

def normal(m, s):
    return np.exp(-0.5 * ((x - m) / s)**2) / (s * np.sqrt(2 * np.pi))

def fits(d):
    p = 0.5 * normal(-d / 2, 1) + 0.5 * normal(d / 2, 1)     # 두 봉우리, 폭 1, 간격 d
    # m-사영: KL(p‖q) 최소 = 평균과 분산을 맞춘 가우시안
    m_sd = np.sqrt(np.sum(x**2 * p) * dx)
    # e-사영: KL(q‖p) 를 (μ, σ) 격자 위에서 전부 재고, 국소 최소를 모두 찾는다
    mus, sds = np.arange(-4, 4.001, 0.02), np.arange(0.5, 4.001, 0.02)
    logp = np.log(p)
    K = np.array([[np.sum((q := normal(m, s)) * (np.log(q + 1e-300) - logp)) * dx for s in sds] for m in mus])
    mins = [(mus[i], sds[j], K[i, j]) for i in range(1, len(mus) - 1) for j in range(1, len(sds) - 1)
            if K[i, j] == K[i - 1:i + 2, j - 1:j + 2].min()]
    return m_sd, mins

for d in [3, 5, 6]:
    m_sd, mins = fits(d)
    sols = "  ".join(f"N({m:+.2f}, {s:.2f}²) KL {k:.3f}" for m, s, k in mins)
    print(f"간격 {d}:  m-사영 N(0, {m_sd:.2f}²)  |  e-사영 국소해  {sols}")
# 간격 3:  m-사영 N(0, 1.80²)  |  e-사영 국소해  N(+0.00, 1.72²) KL 0.074
# 간격 5:  m-사영 N(0, 2.69²)  |  e-사영 국소해  N(-2.38, 1.14²) KL 0.666  N(+0.00, 2.40²) KL 0.481  N(+2.38, 1.14²) KL 0.666
# 간격 6:  m-사영 N(0, 3.16²)  |  e-사영 국소해  N(-2.98, 1.02²) KL 0.689  N(+0.00, 2.74²) KL 0.841  N(+2.98, 1.02²) KL 0.689
\`\`\`

간격 3에서는 e-사영도 가운데에 앉는다. m-사영보다 조금 좁을 뿐이다. 간격 5에서는 국소해가 셋이지만 가운데가 여전히 가장 좋다. 간격 6에서야 봉우리 하나에 앉는 두 해가 이긴다. 「e-사영은 봉우리 하나를 고른다」는 말은 봉우리가 충분히 떨어져 있을 때만 맞다.

### 수확

「어떻게 사영하느냐 = 어떤 종류의 추론을 하느냐. m-사영은 늘 하나이고, e-사영은 여럿일 수 있다.」

### 문제 2. 봉우리를 고르는 순간

표준편차(폭)가 1인 두 봉우리를 간격 d로 반반 섞은 p에 가우시안 q를 KL(q‖p)로 맞춘다. (가) d = 5와 d = 6에서 e-사영의 해를 모두 구하라. (나) 해가 봉우리 하나에 앉기 시작하는 간격과, 그 해가 전역 최적이 되는 간격을 구하라.

#### 함께 풀기

**김민준:** 왼쪽 봉우리에서 출발해서 최적화했어요. d = 5에서 N(−2.38, 1.14²), KL 0.666. 봉우리 하나를 골랐으니 이게 e-사영이에요.

**이서연:** 문제가 좌우 대칭이잖아. 대칭인 문제의 최적해가 유일하면 그 해도 대칭이어야 하니까 μ = 0이야. 그러니까 봉우리 하나를 고르는 해는 있을 수 없어. d가 얼마든 답은 가운데.

**선생님:** 민준 학생, 출발점을 가운데로 옮겨 봐요.

〔M05〕 **김민준:** N(0, 2.40²)이 나와요. KL 0.481이요. 제 답보다 작아요. 제가 찾은 건 국소해였네요. 출발점 하나만 보고 끝냈어요.

**선생님:** 서연 학생은 d = 6에서도 돌려 봐요.

〔S05〕 **이서연:** 가운데 해는 N(0, 2.74²), KL 0.841이에요. 그런데 봉우리에 앉은 해 N(±2.98, 1.02²)는 KL 0.689로 더 작아요. 대칭인데 가운데가 최적이 아니에요.

**선생님:** 서연 학생의 논증에서 어느 가정이 깨졌어요?

〔S08〕 **이서연:** 「최적해가 유일하면」이요. 해가 두 개면 대칭은 두 해를 서로 바꿔 줄 뿐이고, 각각은 대칭일 필요가 없어요. 대칭인 문제가 비대칭인 해 한 쌍을 가질 수 있어요.

**선생님:** 물리에서는 그걸 대칭 깨짐이라고 불러요. 그럼 (나)는요?

**김민준:** 이번에는 출발점을 셋 두고 d를 촘촘히 훑었어요. 약 4.8에서 봉우리 쪽 국소해가 처음 생기고, 약 5.6에서 가운데 해와 KL이 같아져요. 그 뒤로는 봉우리 해가 이겨요.

**이서연:** 가운데 해는 그 뒤에도 국소해로 남아 있고요. 그러니까 d = 6에는 해가 셋이에요.

**김민준:** 팀플에서 제가 처음 낸 안을 아무도 반박 안 해서 최선인 줄 알았는데, 다른 사람이 처음부터 다시 짜 보니 더 나은 게 있던 거랑 같네요.

**이서연:** 해석학에서 극값 판정할 때 「임계점을 전부 찾고 비교해라」던 게 이래서였네요. 대칭은 후보를 줄여 줄 뿐 답을 정해 주지 않아요.

## 사영의 피타고라스: 직각으로 떨어지는 점

가장 가까운 점이라는 것은 알겠다. 그 점에는 무슨 특별한 모양이 있는가?

평면에서 점 하나를 직선에 내려찍으면, 내려온 선분이 직선과 직각이다. 그리고 직선 위의 다른 점까지의 거리가 피타고라스로 나뉜다. 정보기하학의 사영에도 같은 두 가지가 있다. 다만 「직각」을 재는 자가 피셔 계량이고, 「거리의 제곱」 자리에 KL이 들어간다.

### 직교

모형 M 위의 곡선을 따라 움직이는 방향을 ∂<sub>i</sub>라 하자. q<sub>m</sub>이 KL(p‖q)의 최소점이면, 그 점에서 KL을 ∂<sub>i</sub> 방향으로 미분한 값이 0이다. 그 조건을 풀어 쓰면 이렇다.

\`\`\`latex
\\sum_{\\textcolor{#6f8fa6}{x}} \\big(\\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}) - \\textcolor{#7f8f10}{q}_{\\mathrm{m}}(\\textcolor{#6f8fa6}{x})\\big)\\, \\partial_i \\log \\textcolor{#7f8f10}{q}(\\textcolor{#6f8fa6}{x}) \\Big|_{\\textcolor{#7f8f10}{q} = \\textcolor{#7f8f10}{q}_{\\mathrm{m}}} = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} - \\textcolor{#7f8f10}{q}_{\\mathrm{m}} & \\text{p 에서 } q_{\\mathrm{m}} \\text{ 으로 가는 m-측지선의 방향} \\\\
\\partial_i \\log \\textcolor{#7f8f10}{q} & \\text{모형을 따라 움직이는 방향 (모수에 대한 스코어)} \\\\
\\textcolor{#d6479f}{p} & \\text{현실 분포} \\\\
\\textcolor{#7f8f10}{q},\\ \\textcolor{#7f8f10}{q}_{\\mathrm{m}} & \\text{모형 안의 분포, m-사영점} \\\\
\\textcolor{#6f8fa6}{x} & \\text{표본 공간의 값} \\\\
i & \\text{모형 모수의 번호}
\\end{array}
\`\`\`

두 방향 u, v의 피셔 내적은 Σ u(x) v(x) / q(x)이다. u = p − q<sub>m</sub>, v = ∂<sub>i</sub>q를 넣으면 바로 위의 식이 된다. 「최소점이다」와 「p에서 온 m-측지선이 모형과 피셔 직교한다」는 같은 말이다. 유클리드 직교가 아니다. 심플렉스(결과가 셋인 분포를 점으로 찍는 삼각형) 그림 위에서 눈으로 보면 비스듬하다.

쌍대, 곧 m과 e를 바꾸고 KL의 앞 칸과 뒤 칸을 바꾼 짝도 그대로다. q<sub>e</sub>가 KL(q‖p)의 기울기가 0인 점(정류점)이면, p와 q<sub>e</sub>를 잇는 e-측지선이 모형과 피셔 직교한다.

### 언제 하나인가

직교 조건을 만족하는 점이 하나뿐이라는 보장은 모형의 모양에 달려 있다.

- m-사영은 모형이 e-평탄할 때(지수족처럼 자연모수 θ 좌표에서 평평할 때) 유일하다.
- e-사영은 모형이 m-평탄할 때(혼합족, 곧 성분을 고정하고 비중만 바꾼 혼합들의 모임처럼 기대모수 η 좌표에서 평평할 때) 유일하다.

가우시안족은 e-평탄하다. 그래서 m-사영(모멘트 일치)은 늘 하나였다. 가우시안족은 m-평탄하지 않다. 그래서 e-사영에는 보장이 없고, 앞 절에서 실제로 여럿이었다. 사영의 이름과 모형의 평탄함이 엇갈려야 유일하다는 것, 이것이 쌍대 구조가 일하는 방식이다.

### 피타고라스

유일한 사영점에서는 KL이 두 조각으로 깔끔하게 나뉜다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{r}) &= \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}_{\\mathrm{m}}) + \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{q}_{\\mathrm{m}}\\,\\|\\,\\textcolor{#7f8f10}{r}) && (M \\text{ 이 e-평탄, } \\textcolor{#7f8f10}{r} \\in M) \\\\
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{r}\\,\\|\\,\\textcolor{#d6479f}{p}) &= \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{r}\\,\\|\\,\\textcolor{#7f8f10}{q}_{\\mathrm{e}}) + \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{q}_{\\mathrm{e}}\\,\\|\\,\\textcolor{#d6479f}{p}) && (M \\text{ 이 m-평탄, } \\textcolor{#7f8f10}{r} \\in M)
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} & \\text{현실 분포 (모형 밖)} \\\\
\\textcolor{#7f8f10}{q}_{\\mathrm{m}} & \\text{e-평탄 모형 위로의 m-사영점} \\\\
\\textcolor{#7f8f10}{q}_{\\mathrm{e}} & \\text{m-평탄 모형 위로의 e-사영점} \\\\
\\textcolor{#7f8f10}{r} & \\text{모형 위의 아무 점} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
M & \\text{모형}
\\end{array}
\`\`\`

첫 줄을 읽어 보자. 현실 p에서 모형 위의 아무 점 r까지의 KL은 「p에서 사영점까지」와 「사영점에서 r까지」의 합이다. 직각삼각형의 빗변이 두 변으로 나뉘듯이. KL의 앞 칸과 뒤 칸에 무엇을 넣느냐가 중요하다. p는 언제나 앞 칸, r은 언제나 뒤 칸이다. 순서를 바꾸면 등식이 깨진다(아래 문제 3).

이 등식에서 두 가지가 바로 나온다. KL(q<sub>m</sub>‖r) ≥ 0이므로 q<sub>m</sub>이 정말로 최소점이다. 그리고 r이 사영점에서 멀어질수록 얼마나 손해인지가 정확히 KL(q<sub>m</sub>‖r)이다. EM 알고리즘(기댓값 계산 Expectation과 최대화 Maximization을 번갈아 하는 알고리즘)은 이 분해를 한 걸음마다 쓴다.

{{viz: ch11/simplex-projection}}

### 파이썬

\`\`\`python
import numpy as np

def q(th):                                  # 모형 M: 이항분포 B(2, θ) — 지수족, e-평탄
    return np.array([(1 - th)**2, 2 * th * (1 - th), th**2])

def dq(th):                                 # 모형 곡선의 접벡터(곡선을 따라가는 방향) dq/dθ
    return np.array([-2 * (1 - th), 2 - 4 * th, 2 * th])

def kl(a, b):
    return np.sum(a * np.log(a / b))

p = np.array([0.6, 0.1, 0.3])               # 모형 밖의 현실
th_m = (p @ [0, 1, 2]) / 2                  # m-사영점 = 평균 k 를 맞춘 θ
q_m = q(th_m)

u = p - q_m                                 # p 에서 q_m 으로 가는 m-측지선의 방향
print(f"θ_m = {th_m:.3f}   q_m = {np.round(q_m, 4)}")
print(f"유클리드 내적 {u @ dq(th_m):+.4f}   피셔 내적 {np.sum(u * dq(th_m) / q_m):+.1e}")

for th_r in [0.1, 0.7, 0.9]:
    r = q(th_r)
    lhs, rhs = kl(p, r), kl(p, q_m) + kl(q_m, r)
    print(f"r=B(2,{th_r}):  KL(p‖r) {lhs:.6f}   KL(p‖q_m)+KL(q_m‖r) {rhs:.6f}   잔차 {lhs - rhs:+.1e}")
# θ_m = 0.350   q_m = [0.4225 0.455  0.1225]
# 유클리드 내적 -0.3195   피셔 내적 +0.0e+00
# r=B(2,0.1):  KL(p‖r) 0.781518   KL(p‖q_m)+KL(q_m‖r) 0.781518   잔차 +1.1e-16
# r=B(2,0.7):  KL(p‖r) 0.847577   KL(p‖q_m)+KL(q_m‖r) 0.847577   잔차 +0.0e+00
# r=B(2,0.9):  KL(p‖r) 2.099853   KL(p‖q_m)+KL(q_m‖r) 2.099853   잔차 +0.0e+00
\`\`\`

유클리드 자로는 직교하지 않는다(−0.32). 피셔 자로는 정확히 직교한다. 피타고라스의 잔차는 부동소수점의 바닥, 10<sup>−16</sup> 크기다.

### 수확

「사영점에서는 p로 가는 길이 모형과 피셔 직교한다. 그래서 KL이 피타고라스처럼 두 조각으로 나뉜다.」

### 문제 3. 피타고라스를 증명하라 (킬러)

모형 M은 이항분포족 B(2, θ)이고, p = (0.6, 0.1, 0.3)이다. (가) m-사영점 q<sub>m</sub>을 구하고, r = B(2, 0.7)에 대해 KL(p‖r) = KL(p‖q<sub>m</sub>) + KL(q<sub>m</sub>‖r)를 수치로 확인하라. (나) KL의 앞 칸과 뒤 칸을 모두 뒤집은 등식 KL(r‖p) = KL(r‖q<sub>m</sub>) + KL(q<sub>m</sub>‖p)도 성립하는가? (다) 모형이 지수족 p<sub>θ</sub>(x) = exp(θ·t(x) − F(θ))일 때(F는 합이 1이 되게 맞추는 로그정규화자) (가)의 등식을 증명하라.

#### 함께 풀기

**김민준:** q<sub>m</sub>은 평균을 맞추면 되니까 θ = 0.35, (0.4225, 0.455, 0.1225)예요. 좌변 0.8476, 우변 0.3276 + 0.5199 = 0.8476. 맞아요.

**김민준:** (나)도 KL이니까 당연히 돼요. 저는 처음에 이쪽으로 짰거든요. 그런데… KL(r‖p) = 0.6724이고, 우변은 0.5065 + 0.4315 = 0.9380이에요. 안 맞아요.

**김민준:** 코드에 버그가 있나 해서 세 번 봤어요. 같은 KL인데 왜 한쪽만 되죠?

**선생님:** 등식의 세 KL에서 p는 늘 어느 칸에 있었어요?

**김민준:** (가)에서는 p가 늘 왼쪽이에요. p‖r, p‖q<sub>m</sub>. 그리고 q<sub>m</sub>‖r에서는 사영점이 왼쪽이고요.

**선생님:** q<sub>m</sub>은 어떤 KL을 최소로 한 점이었죠?

〔M07〕 **김민준:** KL(p‖·)요. p를 왼쪽에 두고 최소화한 점이니까, 그 점에서 나뉘는 것도 p가 왼쪽인 KL이에요. 뒤집은 등식은 KL(·‖p)를 최소화한 e-사영점에서, 그것도 m-평탄한 모형에서나 기대할 수 있는 거네요.

**선생님:** 그래요. (다)로 가죠. 서연 학생?

**이서연:** 직교를 쓰면 될 것 같아요. p − q<sub>m</sub>이 모형의 접벡터와 직교하고, q<sub>m</sub> − r도 모형을 따라가니까, 유클리드 공간의 피타고라스 ‖p − r‖² = ‖p − q<sub>m</sub>‖² + ‖q<sub>m</sub> − r‖²를 KL로 옮기면…

**선생님:** 그 직교, 유클리드 내적으로 재 봤어요?

**이서연:** (p − q<sub>m</sub>)·dq/dθ = −0.32예요. 0이 아니에요. 피셔 내적으로는 0이고요. 그리고 모형이 심플렉스 안에서 휘어 있으니까 q<sub>m</sub> − r가 접벡터 방향도 아니에요. 게다가 KL은 제곱 노름이 아니니까 전개가 애초에 안 맞아요.

〔S06〕 **이서연:** 그럼 어디서 시작해야 하죠? 기하 그림으로는 확실한데 식이 안 따라와요.

**선생님:** 그림은 잠깐 내려놓고, 좌변에서 우변을 빼 봐요. 로그가 어떻게 모이는지만 봐요.

**이서연:** KL(p‖r) − KL(p‖q<sub>m</sub>) − KL(q<sub>m</sub>‖r)… log p 항은 지워지고, Σ p log(q<sub>m</sub>/r) − Σ q<sub>m</sub> log(q<sub>m</sub>/r)이 남아요. 합치면 Σ (p − q<sub>m</sub>) log(q<sub>m</sub>/r).

**선생님:** 지수족이면 log(q<sub>m</sub>/r)는 뭐예요?

〔S08〕 **이서연:** log q<sub>m</sub> − log r = (θ<sub>m</sub> − θ<sub>r</sub>)·t(x) − F(θ<sub>m</sub>) + F(θ<sub>r</sub>). 상수항은 Σ(p − q<sub>m</sub>) = 0 때문에 사라지고, 남는 건 (θ<sub>m</sub> − θ<sub>r</sub>)·(E<sub>p</sub>[t] − E<sub>q<sub>m</sub></sub>[t])예요.

〔S09〕 **이서연:** 그리고 q<sub>m</sub>은 모멘트 일치점이니까 E<sub>p</sub>[t] = E<sub>q<sub>m</sub></sub>[t]. 뒤 괄호가 0이에요. 끝이에요. θ의 차이와 η의 차이가 곱해지는데, η 쪽이 0이라서 사라지는 거예요.

**김민준:** 숫자로 보면 θ<sub>m</sub> − θ<sub>r</sub> = −0.619 − 0.847 = −1.466이고, 평균 k는 p도 q<sub>m</sub>도 0.7이에요. 곱이 0이에요.

**선생님:** 그 증명에서 「직교」는 어디 있었어요?

**이서연:** θ의 차이와 η의 차이의 곱이 0이라는 것, 그게 직교예요. 한쪽 좌표는 e-측지선을 따라 재고, 다른 쪽은 m-측지선을 따라 재요. 유클리드 직교가 아니라 두 좌표를 짝지은 직교예요.

〔T13〕 **선생님:** 두 사람 다 한 번씩 그림에 속았어요. 민준 학생은 KL이 대칭인 것처럼 칸을 바꿨고, 서연 학생은 심플렉스 그림의 직각을 유클리드 직각으로 읽었어요. 가져갈 것은 셋이에요. 피타고라스는 사영의 방향과 KL 칸의 순서가 맞을 때만 성립한다. 직교는 피셔 자로 잰다. 그리고 지수족에서는 그 직교가 θ의 차이와 η의 차이의 곱으로 쓰인다.

**이서연:** 선형대수에서 쌍대 기저를 배울 때, 한 기저로 잰 좌표와 다른 기저로 잰 좌표를 곱해야 내적이 된다는 게 이해가 안 됐는데요. 이게 그거였네요. θ와 η가 서로의 쌍대 기저예요.

## α-접속: 곧음의 규칙은 두 개뿐인가

덧셈의 길과 곱셈의 길. 왜 하필 둘인가. 셋째는 없는가?

두 점 사이의 길을 정하는 규칙을 접속이라 부른다. 자(피셔 계량)는 하나이고, 둘인 것은 「곧음」의 규칙이다.

그런데 곧음의 규칙은 둘뿐이 아니다. 분포를 섞기 전에 먼저 어떤 모양으로 바꿔 두느냐가 길을 정한다. 확률 그대로 섞으면 덧셈의 길이다. 로그를 씌워 섞으면 곱셈의 길이다. 그 사이에 제곱근을 씌워 섞는 길도 있고, 다른 거듭제곱도 있다.

### 식으로

거듭제곱의 지수를 α로 매긴 표현을 α-표현이라 한다.

\`\`\`latex
\\ell_{\\textcolor{#8f7a5a}{\\alpha}}(\\textcolor{#d6479f}{p}) = \\begin{cases} \\dfrac{2}{1-\\textcolor{#8f7a5a}{\\alpha}}\\, \\textcolor{#d6479f}{p}^{(1-\\textcolor{#8f7a5a}{\\alpha})/2} & \\textcolor{#8f7a5a}{\\alpha} \\ne 1 \\\\[2mm] \\log \\textcolor{#d6479f}{p} & \\textcolor{#8f7a5a}{\\alpha} = 1 \\end{cases}
\\qquad
\\textcolor{#d6479f}{p}_t \\propto \\ell_{\\textcolor{#8f7a5a}{\\alpha}}^{-1}\\Big((1-t)\\, \\ell_{\\textcolor{#8f7a5a}{\\alpha}}(\\textcolor{#d6479f}{p}_0) + t\\, \\ell_{\\textcolor{#8f7a5a}{\\alpha}}(\\textcolor{#d6479f}{p}_1)\\Big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#8f7a5a}{\\alpha} & \\text{접속의 지수} \\\\
\\ell_{\\textcolor{#8f7a5a}{\\alpha}} & \\alpha\\text{-표현: 섞기 전에 확률에 씌우는 모양} \\\\
\\ell_{\\textcolor{#8f7a5a}{\\alpha}}^{-1} & \\text{그 모양을 되돌리는 함수} \\\\
\\textcolor{#d6479f}{p},\\ \\textcolor{#d6479f}{p}_0,\\ \\textcolor{#d6479f}{p}_1 & \\text{분포, 양 끝의 두 분포} \\\\
\\textcolor{#d6479f}{p}_t & \\text{길 위의 분포 (합이 1 이 되게 정규화)} \\\\
t & \\text{보간 비율}
\\end{array}
\`\`\`

α = −1이면 표현이 p 그대로다. 확률을 섞는 덧셈의 길, m-측지선. α = 1이면 표현이 log p다. 로그를 섞는 곱셈의 길, e-측지선. α = 0이면 표현이 2√p다. 제곱근을 섞는 길이다.

### 가족의 구조

α마다 접속이 하나씩 있다. α-접속이라 부른다. 이 가족에는 세 가지 구조가 있다.

- α와 −α는 피셔 계량에 대해 쌍대 짝이다. e(+1)와 m(−1)은 그 짝의 하나다.
- α = ±1인 짝은 특별하다. 지수족 위에서 둘 다 평탄하다. 좌표만 잘 고르면 길이 직선이 된다. 사영이 유일하고 피타고라스가 성립하는 것은 이 평탄함 덕분이다.
- α = 0은 자기 자신과 짝이다. 이것이 피셔 계량의 레비-치비타 접속(길이를 재는 규칙 하나만으로 정해지는 표준 곧음 규칙)이고, 그 측지선이 피셔 거리로 잰 최단 경로다.

심플렉스에서 α = 0의 길은 눈에 보이는 모양이 있다. √p를 좌표로 쓰면 심플렉스는 구면의 한 조각이 된다. 그 위의 최단 경로는 대원(구의 중심을 지나는 원. 지구의 적도나 경선)의 호다. e-측지선도 m-측지선도 최단 경로가 아니다. 각자의 규칙으로 「곧게」 갈 뿐이다.

조금 조심할 곳이 있다. α = ±1과 0에서는 위의 보간이 심플렉스 위의 측지선과 같은 곡선을 그린다. 다른 α에서는 합이 1이 되게 정규화하는 단계 때문에 심플렉스 위의 α-측지선과 정확히 같지는 않다. 여기서는 α가 바뀔 때 길이 어떻게 연속적으로 휘는지만 본다.

### 무지개 — 연속된 가족의 두 끝

덧셈과 곱셈, 두 연산이 특별한 것은 세 번째가 없어서가 아니다. 길이 곧게 펴지는 좌표가 있다는 것, 평탄하다는 것이 둘을 특별하게 만든다. 무지개에 빨강과 보라만 있는 것이 아니듯, 접속도 연속된 가족이다. 다만 양 끝의 두 색으로만 깨끗한 지도가 그려진다.

{{viz: ch11/alpha-paths}}

### 파이썬

\`\`\`python
import numpy as np

def alpha_path(p0, p1, a, n=20001):
    """α-보간: α-표현에서 직선으로 섞고 정규화"""
    t = np.linspace(0, 1, n)[:, None]
    if np.isclose(a, 1):
        u = np.exp((1 - t) * np.log(p0) + t * np.log(p1))       # e: 로그에서 직선
    else:
        b = (1 - a) / 2
        u = ((1 - t) * p0**b + t * p1**b)**(1 / b)               # α = −1 이면 그냥 혼합
    return u / u.sum(axis=1, keepdims=True)

def fisher_length(path):                    # 피셔 길이 = 2 × (√p 곡선의 유클리드 길이)
    s = np.sqrt(path)
    return 2 * np.sum(np.linalg.norm(np.diff(s, axis=0), axis=1))

p0 = np.array([0.8, 0.1, 0.1])
p1 = np.array([0.1, 0.1, 0.8])
for a in [-3, -1, 0, 1, 3]:
    path = alpha_path(p0, p1, a)
    print(f"α={a:+d}  중간점 {np.round(path[len(path) // 2], 3)}  피셔 길이 {fisher_length(path):.4f}")
print(f"대원 호의 길이 2·arccos(Σ√(p0·p1)) = {2 * np.arccos(np.sum(np.sqrt(p0 * p1))):.4f}")
# α=-3  중간점 [0.46  0.081 0.46 ]  피셔 길이 1.7080
# α=-1  중간점 [0.45 0.1  0.45]  피셔 길이 1.6908
# α=+0  중간점 [0.44 0.12 0.44]  피셔 길이 1.6848
# α=+1  중간점 [0.425 0.15  0.425]  피셔 길이 1.6965
# α=+3  중간점 [0.39 0.22 0.39]  피셔 길이 1.7806
# 대원 호의 길이 2·arccos(Σ√(p0·p1)) = 1.6848
\`\`\`

α = 0의 길이만 대원 호의 길이와 같다. m(−1)과 e(+1)은 그보다 조금 길다. α가 −1에서 +1로 갈수록 중간점의 가운데 칸(두 번째 결과)의 확률이 0.10에서 0.15로 부푼다. 곱셈의 길이 양 끝이 함께 인정하는 결과에 더 무게를 준다.

### ML에서: 모델 병합 — 무엇을 평균 내느냐

LoRA(큰 행렬 대신 작은 행렬 두 개만 학습하는 미세조정) 병합이나 모델 수프(같은 출발점에서 따로 미세조정한 모델 여러 개의 가중치를 평균 내는 방법)는 두 모델의 파라미터를 평균 내서 하나로 합친다. 파라미터를 평균 내면 왜 되는가? 같은 두 점도 어떤 공간에 놓느냐에 따라 가까움과 멂이 달라진다. 그러면 질문을 정확히 바꿀 수 있다. 파라미터 공간에서의 평균은 분포 공간에서 어떤 길의 어떤 중간점인가? 「왜 되고 왜 안 되지?」가 「파라미터 공간의 직선이 분포 공간에서는 어떤 모양의 길이었는가?」로 바뀐다.

분류기의 마지막 층이 내는 로짓을 생각하자. 두 모델의 로짓을 평균 내고 softmax를 씌우면, 그것은 e-측지선의 중간점이다. 로짓이 자연모수 θ이기 때문이다. 두 모델의 출력 확률을 평균 내면 m-측지선의 중간점이다. 같은 두 모델인데 「무엇을 평균 내느냐」가 곧 「어느 길을 걷느냐」다.

진짜 신경망의 가중치는 로짓보다 훨씬 깊은 곳에 있다. 가중치를 평균 낸 직선은 e도 m도 아닌, 파라미터를 어떻게 매겼느냐(파라미터화)가 정하는 제3의 곡선이 된다.

### 파이썬 — 세 가지 중간점

\`\`\`python
import numpy as np

def softmax(z):
    e = np.exp(z - z.max())
    return e / e.sum()

def kl(a, b):
    return np.sum(a * np.log(a / b))

za = np.array([2.0, 0.0, -1.0])            # 모델 A 의 로짓
for zb in [np.array([1.8, 0.2, -0.9]), np.array([-1.0, 0.0, 2.0])]:
    pa, pb = softmax(za), softmax(zb)
    e_mid = softmax((za + zb) / 2)          # 로짓 평균 = e-측지선 중간점
    m_mid = (pa + pb) / 2                   # 확률 평균 = m-측지선 중간점
    s = (np.sqrt(pa) + np.sqrt(pb)) / 2
    o_mid = s**2 / np.sum(s**2)             # √확률 평균 = α=0 중간점
    print(f"KL(A‖B) {kl(pa, pb):.3f}")
    print(f"  로짓 평균 {np.round(e_mid, 3)}  확률 평균 {np.round(m_mid, 3)}  √확률 평균 {np.round(o_mid, 3)}")
    print(f"  KL(확률 평균‖로짓 평균) {kl(m_mid, e_mid):.1e}")
# KL(A‖B) 0.010
#   로짓 평균 [0.818 0.135 0.047]  확률 평균 [0.816 0.137 0.047]  √확률 평균 [0.817 0.136 0.047]
#   KL(확률 평균‖로짓 평균) 1.0e-05
# KL(A‖B) 2.405
#   로짓 평균 [0.384 0.233 0.384]  확률 평균 [0.443 0.114 0.443]  √확률 평균 [0.423 0.153 0.423]
#   KL(확률 평균‖로짓 평균) 4.6e-02
\`\`\`

두 모델이 가까우면(KL 0.010) 세 중간점이 소수 둘째 자리까지 같다. 발밑에서는 모든 길이 하나의 피셔 이차식으로 모이기 때문이다. 두 모델이 멀면(KL 2.405) 세 중간점이 눈에 띄게 갈라진다. 파라미터 평균이 잘 통하는 곳은, 무엇보다 두 모델이 분포로서 가까운 곳이다.

그러면 LoRA 병합이 잘 되는 조건은 무엇일까. 여기서부터는 증명이 아니라 추측이다. 두 LoRA가 거의 직교하는 부분공간을 점유하고, 그 영역에서 파라미터화가 분포 공간의 자연스러운 기하학과 크게 어긋나지 않으며, 합친 결과가 두 원래 모델 모두와 분포로서 가까울 때 잘 될 것이다. 이 조건들이 실제로 성능을 가르는지는 실험으로 확인할 일이다. 정보기하학은 답을 바로 주지 않지만, 「왜 되고 왜 안 되는가」를 정확한 질문으로 바꿔준다.

### 수확

「접속은 α 하나로 이어진 가족이다. α와 −α가 쌍대이고, ±1은 평탄한 짝, 0은 최단 경로의 접속이다. 모델을 합칠 때 무엇을 평균 내느냐가 곧 어느 길을 걷느냐다.」

---

> ### 인물 이야기 — Imre Csiszár와 「발산의 통일」
>
> ![Imre Csiszár](/images/portraits/imre-csiszar.jpg)
>
> 1960년대, 부다페스트. 헝가리 과학원 수학연구소의 젊은 수학자 Imre Csiszár는 정보이론과 확률론의 경계에서 일하고 있었다. 연구소장 Alfréd Rényi는 1961년 논문에서 이미 비슷한 양을 다룬 적이 있었다. 냉전 시대, 철의 장막 너머의 수학자들이 서방과 독립적으로 같은 문제들을 풀고 있던 시절이다.
>
> 문제는 이것이었다. KL 발산이 있다. χ² 발산도 있다. 헬링거 거리도 있다. 분포 사이의 「다름」을 재는 양이 여러 개인데, 이것들 사이에 체계가 있는가? 아니면 각각이 별개의 발명인가?
>
> 1963년, Csiszár는 마르코프 사슬의 에르고딕성(오래 돌리면 모든 상태를 고르게 지나는 성질)을 다룬 논문에서 이 양들을 하나의 가족 — f-발산(f-divergence) — 으로 묶었다. 볼록함수 f 하나를 고르면 발산 하나가 나온다. f(x) = x log x이면 KL, f(x) = (x−1)²이면 χ², f(x) = (√x − 1)²이면 헬링거(의 제곱). 「볼록함수마다 발산이 하나씩 태어난다」는 말의 정확한 형태가 이것이다.
>
> 같은 1963년, 일본 교토 대학의 물리학자 Tetsuzo Morimoto가 마르코프 과정과 H-정리(엔트로피가 시간이 갈수록 늘어난다는 볼츠만의 정리)를 다루며 같은 형태에 닿았다. 1966년에는 영국 왕립통계학회지에 S. M. Ali와 S. D. Silvey가 같은 가족을 통계학의 언어로 정리했다. 그래서 이 발산은 Csiszár–Morimoto 발산, Ali–Silvey 거리라고도 불린다. 문제가 무르익으면 다른 곳에서 같은 답이 나온다.
>
> Csiszár의 기여는 거기서 멈추지 않았다. 1975년, 그는 KL 발산(그의 말로는 I-divergence)을 제곱 거리처럼 다루는 기하학을 썼다. 볼록 집합 위로 분포를 사영하는 문제, 그 사영점의 존재와 유일성, 그리고 사영점에서 성립하는 피타고라스형 관계. 이 장의 사영과 피타고라스가 서 있는 기초 가운데 하나다.
>
> 1984년에는 Gábor Tusnády와 함께 두 집합 사이를 번갈아 최소화하는 절차를 같은 기하학으로 분석했다. EM 알고리즘도 이 교대 최소화로 다시 읽힌다. 이 틀이 보장하는 것은 목적함수가 매 단계 줄어든다는 것이다. 언제나 전역 최적에 닿는다는 보장은 아니다.
>
> 그가 놓은 기초 — f-발산과 I-사영(KL 발산을 최소로 하는 사영) — 는 정보기하학에서 Amari의 쌍대 구조와 만나 사영과 교대 최소화의 기하학을 관통하는 뼈대가 되었다.

### 문제 4. 제곱근으로 섞기

p<sub>0</sub> = (0.8, 0.1, 0.1), p<sub>1</sub> = (0.1, 0.1, 0.8)이다. (가) α = 0 보간의 중간점, 곧 (√p<sub>0</sub> + √p<sub>1</sub>)/2를 제곱해 정규화한 분포를 구하라. (나) 이 길의 피셔 길이가 2·arccos(Σ√(p<sub>0</sub>p<sub>1</sub>))와 같음을 확인하라.

#### 함께 풀기

**김민준:** 제곱근을 평균 내고 제곱하면 (0.366, 0.1, 0.366)이에요.

**이서연:** 더하면 0.833이야. 분포가 아니잖아.

**김민준:** 아, 정규화를 빼먹었어요. 0.833으로 나누면 (0.440, 0.120, 0.440)이에요.

**선생님:** 왜 합이 1보다 작아졌을까요?

**김민준:** √p를 벡터로 보면 길이가 1인 구면 위의 점이잖아요. 두 점을 이은 현의 중간은 구 안쪽으로 들어가니까 길이가 1보다 짧아져요. 정규화는 그걸 다시 구면으로 밀어내는 거고요.

**이서연:** 그러면 정규화된 점들은 두 점을 지나는 대원 위에 있어. 그러니까 이 길은 대원의 호야. 길이는 반지름 2인 구에서 사잇각의 두 배, 2·arccos(0.666) = 1.685.

**김민준:** 코드로 길을 잘게 잘라 재도 1.6848이에요. m-측지선은 1.6908, e-측지선은 1.6965고요.

**선생님:** 차이는 작지만 순서는 분명하죠. 최단 경로는 α = 0이에요.

**김민준:** 과제 두 개를 합칠 때 결과물만 붙이면 안 되고 마지막에 분량을 다시 맞춰야 하는 거랑 비슷하네요. 섞고 나서 정규화.
`,W4=`# 수렴

질문 하나로 시작하자. e-사영(e는 exponential. 곱셈의 길을 따라 모형 위로 내려찍기)을 하고, 그 결과를 보고, 다시 m-사영(m은 mixture. 덧셈의 길을 따라 내려찍기)을 하고, 또 그 결과를 보고 — 이 교대를 반복하면 어디에 도달하는가? 수렴하는가? 수렴한다면, 왜?

답은 "목적함수의 값은 수렴한다"이다. 그리고 그 이유는 놀랍도록 단순하다. 두 스텝이 같은 목적함수 하나를, 변수 하나씩 번갈아 최소화하기 때문이다. 어느 스텝도 값을 올리지 않는다.

그러면 기하학은 무엇을 하는가. 기하학은 한 스텝이 값을 "얼마나" 내렸는지를 정확히 잰다. 그 자가 정보기하학의 피타고라스 정리다.

이 장은 그 자를 먼저 만들고, 그 자로 하나의 알고리즘 — EM(기댓값 계산과 최대화를 번갈아 하는 알고리즘) — 을 재어 본다. 그리고 무엇이 수렴하고 무엇이 수렴하지 않는지를 구분한다. 그 구분이 이 교재의 도구들이 합류하는 지점이다.

![EM = e-사영과 m-사영의 교대 반복](/images/chapters/ch12-em-zigzag.svg)

## 피타고라스 정리: KL이 직각으로 나뉠 때

KL 발산(한 분포를 다른 분포로 대신할 때 치르는 손해)은 대칭도 아니고 삼각부등식도 깨진다. 그런 양이 어떻게 피타고라스 정리를 따르는가? 그리고 그게 왜 쓸모가 있는가?

### 직각삼각형의 빗변 — 발끝이 가장 가깝다

빗변의 제곱은 두 변의 제곱으로 나뉜다.

     c² = a² + b²

직각이기 때문에 성립한다. 비스듬하면 성립하지 않는다. 그리고 이 식이 쓸모 있는 이유는 하나다. 발끝(수선의 발)이 직선 위의 모든 점 가운데 가장 가깝다는 것을, 그리고 얼마나 더 먼지를, 식 하나가 동시에 말해 준다.

산꼭대기에서 평평한 들판까지 내려가는 길을 생각해도 좋다. 들판에 수직으로 내려선 발끝이 있다. 그 발끝에서 들판 위의 다른 마을까지 걷는다. 두 구간이 직각이면, 꼭대기에서 그 마을까지의 "제곱 거리"는 두 구간의 제곱 거리의 합이다. 들판 위의 어느 마을을 골라도 그렇다.

KL은 "거리"보다 "거리의 제곱의 절반"에 가깝다. 그래서 KL이 따르는 것도 제곱 거리의 피타고라스다.

### 정리

현실 p가 있고, 모형들의 집합 M이 있다. M은 e-평탄하다고 하자. 자연모수 θ로 보면 곧은 면이라는 뜻이다(지수족). 지수족은 log p = θ·t(x) − F(θ) 꼴로 쓰이는 분포 모임이고, 자연모수 θ는 t(x) 앞에 곱하는 모수(분포를 정하는 숫자), t(x)는 충분통계량(모형이 데이터에서 보는 요약값), F는 합이 1이 되게 맞추는 로그정규화자다. M 위에서 KL(p‖q)를 가장 작게 만드는 점을 q<sub>m</sub>이라 부른다. p의 m-사영점이다. 지수족에서는 충분통계량의 기댓값을 p와 맞추는 점이다.

그러면 M 위의 모든 q에 대해 다음이 정확히 성립한다.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) = \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}_m) + \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{q}_m\\,\\|\\,\\textcolor{#7f8f10}{q}) \\qquad (\\textcolor{#7f8f10}{q} \\in \\mathcal{M})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#d6479f}{p} & \\text{현실 분포 (M 밖에 있어도 된다)} \\\\
\\textcolor{#7f8f10}{q}_m & p \\text{ 의 m-사영점: } \\mathcal{M} \\text{ 위에서 KL}(p\\|\\cdot) \\text{ 이 가장 작은 모형} \\\\
\\textcolor{#7f8f10}{q} & \\mathcal{M} \\text{ 위의 아무 모형} \\\\
\\mathcal{M} & \\text{e-평탄한 모형 집합 (지수족)}
\\end{array}
\`\`\`

빗변은 p에서 q까지. 한 변은 p에서 발끝 q<sub>m</sub>까지. 다른 변은 발끝에서 M 위를 따라 q까지. 오른쪽 둘째 항은 0 이상이므로, 이 식은 "q<sub>m</sub>이 M 위에서 p와 가장 가깝다"는 것과 "다른 q는 정확히 KL(q<sub>m</sub>‖q)만큼 더 멀다"는 것을 한꺼번에 말한다.

KL의 앞 칸과 뒤 칸을 눈여겨보자. 첫째 항과 빗변은 p가 앞 칸에 있다. 둘째 항은 q<sub>m</sub>이 앞 칸에 있다. 순서를 하나라도 바꾸면 등식이 깨진다.

쌍대인 짝(한쪽이 정해지면 다른 쪽이 정해지는 짝. 여기서는 m과 e, KL의 앞 칸과 뒤 칸을 바꾼 짝)도 있다. m-평탄한 집합(혼합으로 닫힌 집합) 위로 KL(·‖p)를 최소화하는 점, 곧 e-사영점에서도 같은 모양의 피타고라스가 성립한다. 이번에는 두 칸의 자리가 뒤집힌다. EM의 E-스텝에서 이 짝을 쓴다.

### 직각은 어디에 있나

직교하는 것은 "두 사영"이 아니다. p에서 q<sub>m</sub>으로 내려오는 m-측지선(덧셈의 규칙으로 가장 곧게 가는 길)이, q<sub>m</sub>에서 M과 직교한다. 각도는 피셔 계량(곳마다 작은 걸음의 길이와 각도를 재는 규칙)으로 잰다. 하나뿐인 피셔 계량이 두 방향의 내적을 0으로 만든다.

그림 위에서 눈으로 재는 각은 90°가 아니다. 심플렉스(결과가 셋인 분포를 점으로 찍는 삼각형)를 평면에 그린 그림은 피셔 자가 아니라 유클리드 자로 그린 것이기 때문이다. 아래 파이썬에서는 피셔 내적이 0인데, 확률 좌표에서 유클리드 자로 잰 각도는 75°다.

### 왜 KL에서 피타고라스가 성립하는가

지수족 안의 KL은 브레그만 발산(볼록함수와, 한 점에서 그은 접선 사이의 높이 차이)이다. 브레그만 발산에는 세 점 사이의 정확한 항등식이 있다. 근사가 아니다. 1차 근사의 오차 같은 것이 아니라, 항 하나 빼지 않은 등식이다.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) = \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{r}) + \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{r}\\,\\|\\,\\textcolor{#7f8f10}{q}) - (\\textcolor{#3b7de0}{\\theta}_{q} - \\textcolor{#3b7de0}{\\theta}_{r}) \\cdot (\\textcolor{#e0504a}{\\eta}_{p} - \\textcolor{#e0504a}{\\eta}_{r})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#d6479f}{p} & \\text{현실 분포} \\\\
\\textcolor{#7f8f10}{q},\\ \\textcolor{#7f8f10}{r} & \\text{같은 지수족 안의 두 분포 (} r \\text{ 가 꼭짓점 자리)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수, 첨자는 어느 분포의 좌표인지} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기대모수 } E[t(x)] \\text{, 첨자는 어느 분포의 좌표인지}
\\end{array}
\`\`\`

마지막 항이 "교차항"이다. 유클리드의 c² = a² + b² − 2ab cos C 에서 코사인 항에 해당한다. r을 q<sub>m</sub>으로 두면 이 항이 사라진다.

- q와 q<sub>m</sub>이 둘 다 e-평탄한 M 위에 있으니, θ<sub>q</sub> − θ<sub>r</sub>는 M을 따라가는 방향이다.
- q<sub>m</sub>은 m-사영점이라 M의 방향으로 재면 η<sub>p</sub>와 η<sub>r</sub>가 같다(모멘트 일치).

한쪽은 θ 좌표의 벡터, 한쪽은 η 좌표의 벡터다. θ와 η는 서로의 쌍대 좌표다. 그 짝지음으로 잰 내적이 0이다. 이것이 "쌍대 직교"이고, 피셔 계량으로 잰 직교와 같은 말이다.

"거리도 아닌 것"인 KL이 피타고라스 정리를 품고 있었다. 거리가 아니어서 쓸모없는 줄 알았는데, 볼록함수 F(θ)(로그정규화자)에서 태어난 발산이기 때문에 오히려 이 분해가 가능하다. 볼록함수의 그릇과 그 접선이 여기서 삼각형이 된다.

{{viz: ch12/pythagoras}}

### 파이썬

결과가 셋인 분포 위에, 곡선 하나로 된 e-평탄 모형 q<sub>θ</sub>(i) ∝ exp(θ·t(i)), t = (0, 1, 2)를 놓는다. 아무 p나 뽑아 m-사영하고, M 위의 아무 q로 등식을 확인한다.

\`\`\`python
import numpy as np

t = np.array([0.0, 1.0, 2.0])               # 충분통계량 t(i)

def q_of(theta):                            # M 위의 점: q_θ(i) ∝ exp(θ·t(i))
    w = np.exp(theta * t)
    return w / w.sum()

def kl(a, b):
    return np.sum(a * np.log(a / b))

def m_project(p):                           # KL(p‖q_θ) 최소 ⇔ E_q[t] = E_p[t]
    lo, hi = -30.0, 30.0                    # E_q[t] 는 θ 에 대해 증가하므로 이분법(구간을 반씩 줄여 찾기)
    for _ in range(200):
        mid = (lo + hi) / 2
        lo, hi = (mid, hi) if q_of(mid) @ t < p @ t else (lo, mid)
    return q_of(mid)

rng = np.random.default_rng(1)
worst = 0.0
for _ in range(1000):
    p = rng.dirichlet([1, 1, 1])            # 아무 현실 p
    qm = m_project(p)
    q = q_of(rng.normal(0, 2))              # M 위의 아무 점 q
    worst = max(worst, abs(kl(p, q) - kl(p, qm) - kl(qm, q)))
print(f"p 1000개, 피타고라스 잔차의 최댓값 {worst:.1e}")

p = np.array([0.6, 0.1, 0.3])
qm = m_project(p)
dq = qm * (t - qm @ t)                      # q_m 에서 M 의 접벡터
fisher = np.sum(dq * (p - qm) / qm)         # 피셔 내적 ⟨dq, p − q_m⟩
cos = dq @ (p - qm) / np.linalg.norm(dq) / np.linalg.norm(p - qm)
print("q_m =", np.round(qm, 3))
print(f"피셔 내적 {fisher:.1e}   유클리드 각도 {np.degrees(np.arccos(abs(cos))):.0f}°")
# p 1000개, 피타고라스 잔차의 최댓값 2.7e-15
# q_m = [0.495 0.31  0.195]
# 피셔 내적 8.3e-17   유클리드 각도 75°
\`\`\`

잔차는 부동소수점의 바닥에 붙어 있다. 근사가 아니라 등식이다.

### 수확

"e-평탄한 모형 위로 m-사영하면 KL이 두 조각으로 정확히 나뉜다. 직교하는 것은 p에서 내려오는 m-측지선과 모형 M이다. 이 등식은 '가장 가까운 점'과 '얼마나 더 먼가'를 함께 잰다."

### 문제 1. 피타고라스를 코드로 확인하기

결과가 셋인 분포 위에 모형 M = {q<sub>θ</sub>(i) ∝ exp(θ·t(i)) : t = (0, 1, 2)}가 있다. 현실은 p = (0.6, 0.1, 0.3)이다. (가) p의 m-사영점 q<sub>m</sub>을 구하라. (힌트: 모멘트 일치) (나) q = q<sub>θ=0</sub>(균등분포)로 두고 피타고라스 등식을 수치로 확인하라.

#### 함께 풀기

**김민준:** (가)는 E<sub>p</sub>[t] = 0.1 + 0.6 = 0.7이니까, E<sub>q</sub>[t] = 0.7이 되는 θ를 이분법으로 찾았어요. θ = −0.466, q<sub>m</sub> = (0.495, 0.310, 0.195)요.

**선생님:** 좋아요. (나)는요?

〔M05〕 **김민준:** 그게… 인터넷에서 찾은 강의 노트의 식 KL(p‖m) = KL(p‖e) + KL(e‖m)을 그대로 짰어요. e-사영점 q<sub>e</sub>도 따로 구해서 넣었고요. 그런데 차이가 −0.023이 나와요. 부동소수점 오차겠죠? float가 원래 그렇잖아요.

**선생님:** 부동소수점 오차는 보통 몇 자리쯤에서 생겨요?

**김민준:** 1e-16 근처요. …0.023은 열네 자리나 크네요. 그건 오차가 아니라 식이 틀린 거예요.

**선생님:** 그래요. 그 노트의 식에는 e-사영점이 끼어 있었어요. 피타고라스에 필요한 발끝은 하나뿐이에요. p에서 M으로 m-사영한 q<sub>m</sub>이요.

**이서연:** 그럼 KL(p‖q) = KL(p‖q<sub>m</sub>) + KL(q‖q<sub>m</sub>)으로 해 볼게요. 발끝에서 q까지니까요.

**이서연:** 0.2007 대 0.1320 + 0.0712 = 0.2032. 차이가 −0.0025예요. 작긴 한데… 민준이 말대로라면 이것도 1e-16보다 한참 커요.

**선생님:** 두 번째 항의 두 칸 순서를 봐요. 어느 쪽이 앞이에요?

〔S07〕 **이서연:** q가 앞이에요. 식에서는 q<sub>m</sub>이 앞이어야 해요. KL(q<sub>m</sub>‖q) = 0.0687로 바꾸면 0.1320 + 0.0687 = 0.2007, 잔차 5.6e-17이에요.

**이서연:** 대칭인 거리였다면 순서가 상관없었을 텐데, KL이라서 "발끝에서 본 q"와 "q에서 본 발끝"이 다른 거네요.

**김민준:** 나는 식을 의심 안 하고 컴퓨터를 의심했네. 조교님이 채점 스크립트 버그라고 우기다가 내 코드가 틀린 걸로 끝나는 거랑 똑같다.

**선생님:** 잔차의 크기가 단서예요. 1e-16이면 컴퓨터, 1e-2면 식이에요.

## EM의 목적함수: EM이 줄이는 것

EM은 "로그우도를 올린다"고 배웠다(우도는 모형이 관측에 준 확률이다). 정보기하학은 "KL을 줄인다"고 말한다. 둘은 같은 이야기인가, 다른 이야기인가?

같은 이야기다. 다만 무대를 한 칸 넓혀야 보인다.

### 반쯤 지워진 출석부 — 채우고 다시 계산하기

조교가 받은 출석부에는 학생 이름(x)만 있고, 분반 번호(z)가 지워져 있다. 분반별 평균 점수를 내야 한다. 조교는 두 일을 번갈아 한다. 지금 알고 있는 분반별 특징으로, 각 학생이 어느 분반일지 확률을 적어 넣는다. 그 확률로 채운 "완성된 출석부"로 분반별 특징을 다시 계산한다.

지워진 칸을 채운 출석부는 여러 가지가 가능하다. 단 하나의 조건은, 분반 칸을 무시하고 이름만 보면 원래 받은 출석부와 같아야 한다는 것이다.

### 무대: 두 개의 면

관측은 x뿐이고, 잠재변수 z는 보이지 않는다. 혼합 가우시안이라면 z는 "이 점이 몇 번째 봉우리에서 왔는가"다.

무대는 (x, z)의 결합분포들이 사는 공간이다. 여기에 면이 두 개 있다.

- **데이터 면 D** — x-주변분포(조건을 모두 합쳐 버린, 곧 z를 모두 더해 없앤 x만의 분포)가 경험분포 p̂(x)와 같은 결합분포 q(x, z)들. 지워진 칸을 채운 출석부들이다. q(x, z) = p̂(x)·q(z|x) 꼴이고, q(z|x)는 마음대로 고를 수 있다.
- **모형 면 M** — 모형 p<sub>θ</sub>(x, z)들. 혼합 가우시안이면 p<sub>θ</sub>(x, z=k) = w<sub>k</sub>·N(x; μ<sub>k</sub>, σ<sub>k</sub>²)이다.

D는 m-평탄하다. D의 두 원소를 섞어도 x-주변분포는 여전히 p̂(x)이므로, 혼합에 대해 닫혀 있다. M은 완전데이터(z까지 다 보인다고 친 데이터)의 모형이 지수족이면 e-평탄하다. 혼합 가우시안의 완전데이터 모형은 지수족이다.

### 목적함수

두 면 사이의 KL을 목적함수로 둔다.

\`\`\`latex
\\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#7f8f10}{q}, \\textcolor{#2e9e6e}{\\theta}) = \\textcolor{#c2398a}{\\mathrm{KL}}\\big(\\textcolor{#7f8f10}{q}(\\textcolor{#6f8fa6}{x}, \\textcolor{#8a7fb0}{z})\\,\\big\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}, \\textcolor{#8a7fb0}{z})\\big), \\qquad \\textcolor{#7f8f10}{q} \\in \\mathcal{D}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c05080}{\\mathcal{L}} & \\text{EM의 목적함수 (두 변수의 함수)} \\\\
\\textcolor{#7f8f10}{q} & \\text{데이터 면 위의 결합분포, } q(x,z) = \\hat{p}(x)\\,q(z|x) \\\\
\\textcolor{#7f8f10}{p} & \\text{모형 면 위의 결합분포 (첨자 } \\theta \\text{ 가 정함)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모형의 모수 (혼합 가우시안이면 } w_k, \\mu_k, \\sigma_k \\text{)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{관측되는 데이터} \\\\
\\textcolor{#8a7fb0}{z} & \\text{보이지 않는 잠재변수} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\mathcal{D} & \\text{데이터 면: x-주변분포가 경험분포와 같은 결합분포들}
\\end{array}
\`\`\`

q에 대해 먼저 최소화해 보자. 결합분포를 x와 z|x로 쪼개면 KL이 두 조각이 된다. x 부분은 KL(p̂(x)‖p<sub>θ</sub>(x))이고 q와 무관하다. z|x 부분은 KL(q(z|x)‖p<sub>θ</sub>(z|x))의 평균이고, q(z|x) = p<sub>θ</sub>(z|x)일 때 0이 된다. 그러니 q를 최선으로 고른 뒤 남는 값은 KL(p̂(x)‖p<sub>θ</sub>(x))다.

그리고 경험분포에서 잰 이 KL은 "−평균 로그우도 + 상수"다. 상수는 p̂의 엔트로피(평균적 놀라움)이고 θ와 무관하다.

\`\`\`latex
\\min_{\\textcolor{#7f8f10}{q} \\in \\mathcal{D}} \\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#7f8f10}{q}, \\textcolor{#2e9e6e}{\\theta}) = -\\textcolor{#b58a00}{\\ell}(\\textcolor{#2e9e6e}{\\theta}) + \\text{상수}, \\qquad \\textcolor{#b58a00}{\\ell}(\\textcolor{#2e9e6e}{\\theta}) = \\frac{1}{N} \\sum_{i=1}^{N} \\log \\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_i)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c05080}{\\mathcal{L}} & \\text{EM의 목적함수} \\\\
\\textcolor{#7f8f10}{q} & \\text{데이터 면 위의 결합분포} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모형의 모수} \\\\
\\textcolor{#b58a00}{\\ell} & \\text{평균 로그우도} \\\\
\\textcolor{#7f8f10}{p} & \\text{모형 (여기서는 x-주변분포)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{관측 데이터, } x_i \\text{ 는 i번째 표본} \\\\
N & \\text{표본 수}
\\end{array}
\`\`\`

그래서 두 이야기는 하나다. 𝓛을 줄이는 것과 로그우도를 올리는 것은, q를 최선으로 골라 두는 한 같은 일이다.

q를 최선이 아닌 것으로 두면 어떻게 되는가. 그때의 −𝓛(에서 상수를 뺀 것)이 ELBO다(Evidence Lower BOund, 증거 하한: 로그우도보다 늘 작거나 같은 아래 경계). 데이터 한 점에 대해 쓰면 이렇다.

\`\`\`latex
\\log \\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}) - \\textcolor{#b58a00}{\\mathrm{ELBO}}(\\textcolor{#7f8f10}{q}, \\textcolor{#2e9e6e}{\\theta}) = \\textcolor{#c2398a}{\\mathrm{KL}}\\big(\\textcolor{#7f8f10}{q}(\\textcolor{#8a7fb0}{z}|\\textcolor{#6f8fa6}{x})\\,\\big\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#8a7fb0}{z}|\\textcolor{#6f8fa6}{x})\\big) \\ \\ge\\ 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{p} & \\text{모형: } p_\\theta(x) \\text{ 는 증거(주변우도), } p_\\theta(z|x) \\text{ 는 사후분포} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모형의 모수} \\\\
\\textcolor{#6f8fa6}{x} & \\text{관측 데이터 한 점} \\\\
\\textcolor{#8a7fb0}{z} & \\text{잠재변수} \\\\
\\textcolor{#b58a00}{\\mathrm{ELBO}} & \\text{증거 하한, } \\textstyle\\sum_z q(z|x) \\log \\frac{p_\\theta(x,z)}{q(z|x)} \\\\
\\textcolor{#7f8f10}{q} & \\text{잠재변수에 대한 추측 } q(z|x) \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산 (갭)}
\\end{array}
\`\`\`

ELBO는 로그우도의 하한이고, 갭은 추측 q(z|x)와 진짜 사후분포 사이의 KL이다. 갭이 0이 되는 것은 q(z|x)가 사후분포와 같을 때뿐이다.

### 수확

"EM의 목적함수는 데이터 면과 모형 면 사이의 KL이다. q를 최선으로 두면 그것은 −로그우도 + 상수다. KL을 줄이는 이야기와 로그우도를 올리는 이야기는 같은 이야기다."

---

> ### 인물 이야기 — Dempster, Laird, Rubin과 "불완전 데이터의 문제"
>
> ![Arthur Dempster](/images/portraits/arthur-dempster.jpg)
>
> 1977년. Arthur P. Dempster, Nan Laird, Donald Rubin이 *Journal of the Royal Statistical Society* (Series B)에 논문을 발표했다. 세 사람은 소속으로 하버드 대학과 교육평가원(ETS)을 적었다.
> "Maximum Likelihood from Incomplete Data via the EM Algorithm."
> 이 논문이 이름을 붙인 것 — EM 알고리즘.
>
> 사실 EM의 아이디어 자체는 이 논문 이전에 이미 여러 곳에서 각각 다른 이름으로 쓰이고 있었다. 유전학에서, 의학 통계에서 — "보이지 않는 변수가 있을 때 모수를 추정하는 방법"을 사람들은 사례마다 따로 알고 있었다. 모르는 것을 추측하고(E-스텝), 그 추측 위에서 최적화하고(M-스텝), 다시 추측하고, 다시 최적화하고 — 이 교대를 반복하면 답에 가까워졌다.
>
> DLR(Dempster-Laird-Rubin) 논문이 한 일은 이 직관에 이름과 구조를 준 것이다. 흩어져 있던 사례들을 하나의 알고리즘으로 통일하고, 매 스텝 우도가 줄지 않는다는 것을 보였고, 수렴 속도가 빠진 정보의 비율로 정해진다는 것도 밝혔다.
>
> 그런데 수렴 증명에는 구멍이 있었다. 1983년, C. F. Jeff Wu가 *Annals of Statistics*에서 그 결함을 짚고 올바른 증명을 다시 썼다. 우도의 값이 수렴한다는 것과, 모수의 수열이 수렴한다는 것과, 그 도착점이 국소 최댓값인지 기울기가 0인 점(정류점)일 뿐인지는 서로 다른 질문이었다. Wu는 그 셋을 갈라 각각에 필요한 조건을 적었다. 이 장 뒤쪽의 「수렴하는 것과 수렴하지 않는 것」은 그 구분을 따른 것이다.
>
> 기하학적 그림은 따로 자랐다. Csiszár와 Tusnády(1984)는 EM을 두 집합 사이 KL의 교대 최소화로 썼고, Amari(1995)는 그것을 e-사영과 m-사영의 교대로 그렸다. 두 사영의 피타고라스는 매 스텝의 감소량을 정확히 재 준다. 수렴을 "만드는" 것은 교대 최소화이고, 기하학은 그 과정을 "보이게" 만든다.
>
> Dempster가 이름 붙인 알고리즘의 한 스텝 안에 이 교재의 많은 풍경이 접혀 있다.

### 문제 2. ELBO의 갭은 KL이다

한 점 x에 대해 다음을 증명하라.
log p<sub>θ</sub>(x) − ELBO(q, θ) = KL(q(z|x)‖p<sub>θ</sub>(z|x)).
그리고 w = (0.5, 0.5), μ = (0, 3), σ = (1, 1), x = 1에서 q = (0.5, 0.5)일 때와 q = 사후분포일 때의 갭을 계산하라.

#### 함께 풀기

**이서연:** 젠센으로 풀었어요. log p(x) = log Σ<sub>z</sub> q(z) · p(x,z)/q(z) ≥ Σ<sub>z</sub> q(z) log(p(x,z)/q(z)) = ELBO. 로그가 오목하니까요. 그래서 log p(x) ≥ ELBO, 끝이요.

**선생님:** 문제는 부등식이었어요, 등식이었어요?

〔S04〕 **이서연:** 등식이요. 젠센은 "크거나 같다"까지만 말해 주고, 얼마나 큰지는 안 말해 줘요. 등호 조건도 안 봤어요.

**김민준:** 저는 그냥 빼 봤어요. log p(x) − Σ q log(p(x,z)/q) = Σ q [log p(x) − log p(x,z) + log q]이고, p(x,z) = p(x)p(z|x)니까 Σ q log(q / p(z|x))예요. KL이에요.

**이서연:** 아, Σ q = 1이라서 log p(x)를 합 안으로 넣을 수 있는 거네요. 그러면 젠센의 등호 조건도 바로 보여요. KL이 0일 때, 곧 q가 사후분포와 같을 때만 등호예요.

**김민준:** 숫자는 사후분포가 (0.818, 0.182), log p(x) = −1.911이에요. q = (0.5, 0.5)면 ELBO = −2.169, 갭 0.258이고, KL(q‖사후)도 0.258이요. q = 사후분포면 갭 0이요.

〔T13〕 **선생님:** 둘이 합쳐서 한 증명이 됐네요. 서연 학생의 젠센은 방향을, 민준 학생의 뺄셈은 크기를 줬어요. E-스텝이 하는 일이 바로 이 갭을 0으로 만드는 거예요.

**이서연:** 부등식만 증명하고 넘어가면 "얼마나 틀렸는지"를 잃어버리네요. 수업에서 코시-슈바르츠를 배울 때 등호 조건까지 쓰라고 한 이유가 이거였어요.

**김민준:** 점수가 만점보다 낮다는 것만 알려 주는 채점표랑, 몇 점 깎였고 왜 깎였는지 알려 주는 채점표의 차이네요.

## EM: 두 사영의 교대

목적함수 하나를 두 변수에 대해 번갈아 줄인다는 것은 알았다. 그 두 번의 줄이기는 기하학으로 보면 무엇인가? 그리고 왜 값은 한 번도 올라가지 않는가?

### 이름의 우연에 대하여

EM 알고리즘의 E는 Expectation(기댓값 계산), M은 Maximization(최대화)이다. 정보기하학의 e-사영은 exponential, m-사영은 mixture에서 온 이름이다. 이니셜이 같은 것은 우연이다.

그런데 E-스텝이 e-사영이고 M-스텝이 m-사영이라는 대응은 우연이 아니다. Dempster, Laird, Rubin이 "기댓값을 계산하고 최대화한다"고 이름 붙인 절차를, Csiszár와 Tusnády(1984)는 KL의 교대 최소화로 읽었고, Amari(1995)는 e-사영과 m-사영의 교대(em 알고리즘)로 읽었다. 두 그림이 정확히 겹치는 것은 완전데이터 모형이 지수족일 때다. 그때 M-스텝이 기대 충분통계량(책임도로 가중해 낸 충분통계량의 평균)을 맞추는 m-사영이 된다. 일반 모형에서는 EM과 em이 어긋날 수 있다.

| | EM 알고리즘 | 정보기하학 | 착지하는 면 |
|---|---|---|---|
| E | Expectation (기댓값 계산) | e-사영: 𝓛(·, θ)를 q에 대해 최소화 | 데이터 면 D (m-평탄) |
| M | Maximization (최대화) | m-사영: 𝓛(q, ·)를 θ에 대해 최소화 | 모형 면 M (e-평탄) |

사영의 이름과 착지하는 면의 평탄함이 엇갈린다는 것을 눈여겨보자. e-사영은 m-평탄한 면에 내려앉고, m-사영은 e-평탄한 면에 내려앉는다. 피타고라스가 성립하는 짝이 바로 이 엇갈린 짝이다.

### 왜 값이 내려가기만 하는가

k번째 사이클을 두 스텝으로 쓴다.

\`\`\`latex
\\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#7f8f10}{q}_{k}, \\textcolor{#2e9e6e}{\\theta}_{k}) \\ \\ge\\ \\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#7f8f10}{q}_{k+1}, \\textcolor{#2e9e6e}{\\theta}_{k}) \\ \\ge\\ \\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#7f8f10}{q}_{k+1}, \\textcolor{#2e9e6e}{\\theta}_{k+1})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c05080}{\\mathcal{L}} & \\text{EM의 목적함수} \\\\
\\textcolor{#7f8f10}{q} & \\text{데이터 면 위의 점, 첨자 } k \\text{ 는 사이클 번호} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{모형의 모수, 첨자 } k \\text{ 는 사이클 번호}
\\end{array}
\`\`\`

첫 부등호는 E-스텝이다. θ를 두고 q를 최선으로 바꿨으니 값이 올라갈 수 없다. 둘째 부등호는 M-스텝이다. q를 두고 θ를 최선으로 바꿨으니 역시 올라갈 수 없다.

이것이 단조감소의 이유 전부다. 직교도, 곡률도 필요 없다. "한 변수씩 최소화한다"는 사실 하나면 된다. 좌표 하강법과 같은 논리다.

### 피타고라스가 재는 것

그러면 기하학은 무엇을 더하는가. 감소량을 정확히 잰다.

M-스텝의 감소량은, 모형 면 위의 피타고라스(p 자리에 q<sub>k+1</sub>)에서 나온다.
𝓛(q<sub>k+1</sub>, θ<sub>k</sub>) − 𝓛(q<sub>k+1</sub>, θ<sub>k+1</sub>) = KL(p<sub>θ<sub>k+1</sub></sub>‖p<sub>θ<sub>k</sub></sub>).
새 모형과 옛 모형 사이의 KL이다.

E-스텝의 감소량은, 데이터 면 위의 쌍대 피타고라스에서 나온다.
𝓛(q<sub>k</sub>, θ<sub>k</sub>) − 𝓛(q<sub>k+1</sub>, θ<sub>k</sub>) = KL(q<sub>k</sub>‖q<sub>k+1</sub>).
그리고 이 값은 E-스텝 직전의 ELBO 갭과 같다. E-스텝은 갭을 닫는다.

피타고라스는 수렴의 원인이 아니다. 수렴하는 동안 매 걸음의 보폭을 잴 수 있게 해 주는 자다. 아래 파이썬에서 두 감소량이 두 KL과 소수 다섯째 자리까지 같다.

### 넓히기와 좁히기, 다시 보기

섞기(OR)는 가능성을 넓히고, 곱하기(AND)는 좁힌다. EM에도 넓히고 좁히는 리듬이 있다. 다만 그 리듬을 e/m의 이름에 억지로 붙이면 헷갈린다. 풀어서 보자.

E-스텝은 보이지 않던 칸을 연다. 관측 x만 있던 세계를 (x, z)의 세계로 넓히고, "이 점이 봉우리 A에서 왔을 확률은 0.7, B는 0.3"이라고 가능성을 열어 둔 채 적어 넣는다. 기하학적으로는 KL(·‖p<sub>θ</sub>)를 데이터 면 위에서 최소화하는 것, 곧 e-사영이다. 이름은 e-사영인데 하는 일은 "열어 두기"다. 착지하는 면이 혼합으로 닫힌 m-평탄 면이기 때문이다.

M-스텝은 그 열린 칸을 바탕으로 봉우리의 모수를 확정한다. "그렇다면 봉우리 A의 평균은 여기, B의 평균은 저기." KL(q‖·)를 모형 면 위에서 최소화하는 것, 곧 m-사영이고, 기대 충분통계량(가중 평균, 가중 분산, 가중 비율)을 맞추는 일이다.

### 지그재그의 오해를 풀자

"넓혔다 좁혔다를 반복하면 제자리 아닌가?" 심플렉스 위의 지그재그만 보면 그렇게 보일 수 있다. 그러나 두 스텝은 서로 다른 변수를 움직인다.

혼합 가우시안을 생각하자. 데이터에 봉우리가 세 개 있다. 모형에도 가우시안 세 개를 놓는다. 처음에는 세 가우시안이 엉뚱한 곳에 놓여 있다.

E-스텝: 각 데이터 포인트가 어떤 봉우리에서 왔을지 책임도(responsibility, 그 점이 그 봉우리에서 왔을 확률)를 계산한다. 데이터 100개 × 봉우리 3개 = 300개의 숫자가 생긴다. 한 점의 세 확률은 합이 1이므로 자유롭게 움직이는 것은 200개다. "가능성을 넓힌다"는 것은 이 칸들을 연다는 뜻이다.

M-스텝: 그 책임도를 고정한 채로 각 봉우리의 평균, 분산, 혼합 비중을 업데이트한다. 봉우리 A에 소속된 데이터들의 가중 평균 → A의 새 중심. 봉우리 B에 소속된 데이터들의 가중 분산 → B의 새 폭.

매 사이클이 끝나면, 세 봉우리는 데이터의 세 군집에 조금 더 가까이 옮겨져 있다. 적어도 로그우도는 한 번도 내려가지 않는다.

### 파이썬

봉우리 두 개, 데이터 100개의 혼합 가우시안. 매 사이클에서 E-스텝과 M-스텝이 ELBO를 얼마나 올렸는지 재고, 그 값을 피타고라스가 말하는 두 KL과 나란히 놓는다.

\`\`\`python
import numpy as np

rng = np.random.default_rng(0)
x = np.concatenate([rng.normal(-2, 1, 60), rng.normal(3, 0.7, 40)])   # 데이터 100개

def logN(x, mu, s):
    return -0.5 * ((x - mu) / s)**2 - np.log(s * np.sqrt(2 * np.pi))

def joint(w, mu, s):                  # log p_θ(x_i, z=k), 모양 (100, 2)
    return np.log(w) + logN(x[:, None], mu, s)

def loglik(th):                       # 평균 로그우도 ℓ(θ)
    return np.mean(np.logaddexp.reduce(joint(*th), axis=1))

def elbo(g, th):                      # 평균 ELBO(q, θ),  q(z=k|x_i) = g[i, k]
    return np.mean(np.sum(g * (joint(*th) - np.log(g)), axis=1))

def e_step(th):                       # q(z|x) ← p_θ(z|x)            (e-사영)
    lj = joint(*th)
    return np.exp(lj - np.logaddexp.reduce(lj, axis=1, keepdims=True))

def m_step(g):                        # 기대 충분통계량 맞추기        (m-사영)
    Nk = g.sum(0)
    mu = (g * x[:, None]).sum(0) / Nk
    s = np.sqrt((g * (x[:, None] - mu)**2).sum(0) / Nk)
    return Nk / len(x), mu, s

def kl_joint(a, b):                   # KL(p_a(x,z) ‖ p_b(x,z)), 완전데이터 모형끼리
    (wa, ma, sa), (wb, mb, sb) = a, b
    kl_n = np.log(sb / sa) + (sa**2 + (ma - mb)**2) / (2 * sb**2) - 0.5
    return np.sum(wa * np.log(wa / wb)) + np.sum(wa * kl_n)

th = (np.array([0.5, 0.5]), np.array([0.0, 1.0]), np.array([1.0, 1.0]))
g = e_step(th)
th = m_step(g)                        # 첫 사이클은 표 밖에서
print(" k    ℓ(θ)    E-스텝 이득  = 갭      M-스텝 이득  = KL(p_θ'‖p_θ)")
for k in range(1, 6):
    gap = loglik(th) - elbo(g, th)            # E-스텝 직전의 갭
    g_new = e_step(th)
    gain_e = elbo(g_new, th) - elbo(g, th)
    th_new = m_step(g_new)
    gain_m = elbo(g_new, th_new) - elbo(g_new, th)
    print(f"{k:2d}  {loglik(th):.4f}   {gain_e:.5f}   {gap:.5f}    {gain_m:.5f}    {kl_joint(th_new, th):.5f}")
    g, th = g_new, th_new
print(f"최종 ℓ = {loglik(th):.4f},  E-스텝 직후 갭 = {loglik(th) - elbo(e_step(th), th):.1e}")
#  k    ℓ(θ)    E-스텝 이득  = 갭      M-스텝 이득  = KL(p_θ'‖p_θ)
#  1  -2.1681   0.06647   0.06647    0.11191    0.11191
#  2  -1.9939   0.06230   0.06230    0.05723    0.05723
#  3  -1.9144   0.02222   0.02222    0.00962    0.00962
#  4  -1.9044   0.00040   0.00040    0.00001    0.00001
#  5  -1.9044   0.00000   0.00000    0.00000    0.00000
# 최종 ℓ = -1.9044,  E-스텝 직후 갭 = 0.0e+00
\`\`\`

한 사이클의 로그우도 증가는 두 이득의 합이다. 1행에서 2행으로 ℓ이 0.1742 올랐다. 1행의 M-스텝 이득 0.11191과 2행의 갭 0.06230을 더한 값이다.

### ML에서: 변분추론 — e-사영을 포기할 때

EM의 E-스텝은 사후분포 p<sub>θ</sub>(z|x)를 정확히 계산한다. 그래서 E-스텝 직후 ELBO의 갭이 0이 되고, 데이터 면 위의 피타고라스가 감소량을 정확히 잰다.

그런데 현실의 많은 모델에서는 사후분포를 정확히 계산할 수 없다. 잠재 변수의 구조가 너무 복잡하거나, 적분이 해석적으로 풀리지 않거나.

변분추론(variational inference)은 이 상황의 차선책이다. 정확한 사후분포 대신, 다루기 쉬운 가족 𝒬 — 예컨대 "각 변수가 독립인 분포들의 집합"(평균장 근사) — 에서 KL(q‖p<sub>θ</sub>(z|x))가 가장 작은 q를 찾는다.

정보기하학의 눈으로 보면 차이는 착지하는 면의 모양이다.

| | EM | 변분추론 (평균장) |
|---|---|---|
| E-스텝의 착지 면 | 데이터 면 전체 (m-평탄) | 데이터 면 중 독립인 것들만 (m-평탄이 아님) |
| E-스텝의 사영 | 정확한 e-사영, 답이 하나 | KL(·‖p) 최소화지만 국소해가 여럿일 수 있다 |
| E-스텝의 피타고라스 | 성립 | 깨진다 |
| ELBO의 갭 | E-스텝 직후에만 0 | 일반적으로 0이 되지 않는다 |

평균장 가족은 곱으로 된 분포들이라 e-평탄하다. e-사영의 피타고라스가 필요로 하는 것은 m-평탄한 착지 면인데, 정반대의 평탄함을 가진 면에 내려앉는 셈이다. 그래서 "근사적으로 성립한다"가 아니라 "깨진다"고 말하는 것이 정직하다. 남는 것은 교대 최소화의 단조성뿐이다. ELBO는 여전히 한 스텝씩 오르기만 한다.

그리고 남은 갭 자체가 KL 발산이다. 앞 절의 식 log p<sub>θ</sub>(x) − ELBO = KL(q(z|x)‖p<sub>θ</sub>(z|x)) 그대로다. KL이 여기서도 "근사의 대가"를 재는 자로 쓰인다.

역으로, EM은 변분추론의 특수한 경우다. 𝒬가 충분히 넓어서 정확한 사후분포를 포함하면 E-스텝 직후의 갭이 0이 되고, 변분추론은 EM이 된다.

"변분추론은 EM에서 정확성을 포기하고 실용성을 얻은 것이다. 포기한 것의 정체 — 착지 면의 m-평탄함과 그 위의 피타고라스 — 를 알면, 무엇을 잃고 무엇을 얻는지를 정직하게 볼 수 있다."

### 수확

"E-스텝(e-사영, 데이터 면으로)과 M-스텝(m-사영, 모형 면으로)의 교대. 매 스텝이 같은 목적함수를 한 변수씩 최소화하므로 값은 내려가기만 한다. 피타고라스는 그 감소량을 정확히 잰다."

### 문제 3. E-스텝과 M-스텝 유도

1차원 두 성분 혼합 가우시안 p<sub>θ</sub>(x) = w₁N(x; μ₁, σ₁²) + w₂N(x; μ₂, σ₂²)에서 (가) E-스텝의 책임도 γ<sub>ik</sub>를 쓰라. (나) M-스텝에서 w<sub>k</sub>, μ<sub>k</sub>, σ<sub>k</sub>의 갱신식을 유도하라. (다) 파이썬 절의 데이터와 초기값에서 첫 M-스텝을 계산하라.

#### 함께 풀기

**이서연:** (가)는 베이즈 정리예요. γ<sub>ik</sub> = w<sub>k</sub>N(x<sub>i</sub>; μ<sub>k</sub>, σ<sub>k</sub>²) / Σ<sub>j</sub> w<sub>j</sub>N(x<sub>i</sub>; μ<sub>j</sub>, σ<sub>j</sub>²).

**이서연:** (나)는 Σ<sub>i</sub>Σ<sub>k</sub> γ<sub>ik</sub>[log w<sub>k</sub> + log N(x<sub>i</sub>; μ<sub>k</sub>, σ<sub>k</sub>²)]을 미분해요. w<sub>k</sub>로 미분하면 Σ<sub>i</sub> γ<sub>ik</sub> / w<sub>k</sub> = 0 이고…

〔S05〕 **이서연:** 어, 이건 0이 될 수가 없어요. γ가 양수니까 w<sub>k</sub>를 키울수록 계속 커져요.

**선생님:** w<sub>k</sub>를 한없이 키우면 그건 아직 확률인가요?

**이서연:** 아니요. w₁ + w₂ = 1이 빠졌어요. 라그랑주 승수 λ를 붙이면 Σ<sub>i</sub> γ<sub>ik</sub> / w<sub>k</sub> = λ, 양변을 더하면 λ = N이고, w<sub>k</sub> = N<sub>k</sub> / N이에요. N<sub>k</sub> = Σ<sub>i</sub> γ<sub>ik</sub>.

**이서연:** 제약 없는 극값 문제로 풀면 답이 없는 게 당연하네요. 해석학 시험에서 "구 위에서의 최댓값"을 구하라는데 구 조건을 빼먹고 기울기를 0으로 놓은 거랑 같아요.

**김민준:** μ<sub>k</sub>는 가중 평균, σ<sub>k</sub>²는 가중 분산이요. 짰어요. 첫 M-스텝에서 w = (0.571, 0.429), μ = (−1.719, 2.451), σ = (2.218, 2.255)가 나와요.

**선생님:** 파이썬 절의 첫 행과 로그우도를 맞춰 봐요.

**김민준:** 파이썬 절은 첫 사이클 뒤 ℓ = −2.1681인데, 제 건 −2.3447이에요. σ가 이상하게 커요.

**선생님:** σ를 계산할 때 x에서 뭘 뺐어요?

〔M07〕 **김민준:** 초기 μ = (0, 1)이요. 루프 안에서 mu 변수를 갱신하기 전에 sigma를 먼저 계산했어요. 새 μ로 빼면 σ = (1.403, 1.726)이고 ℓ = −2.1681, 맞아요.

**선생님:** 옛 μ로 잰 분산은 새 μ로 잰 분산보다 항상 커요. 가중 제곱합은 가중 평균에서 잴 때 가장 작으니까요. 그래서 M-스텝의 "최선"이 아니게 되고, ELBO도 덜 올라가요.

**김민준:** 보고서에서 표 1을 고치고 나서 그림 1을 옛 표로 다시 그린 셈이네요. 순서만 틀려도 숫자가 조용히 틀려요.

## EM의 수렴: 값은 멈춰도 답은 하나가 아니다

값이 내려가기만 한다면 EM은 어딘가에 도착한다. 그런데 무엇이 도착하는가? 값인가, 모수인가? 그리고 그 도착점은 가장 좋은 답인가?

### 수렴하는 것과 수렴하지 않는 것

단조감소하는 수열이 아래로 유계이면(어떤 값 밑으로는 내려가지 않으면) 수렴한다. x가 이산이면 𝓛 = KL ≥ 0이 하한이다. 그래서 목적함수의 "값"은 수렴한다.

여기서 조심할 것이 세 가지다.

첫째, 수렴하는 것은 값이지 모수가 아니다. 값이 멈췄다고 모수가 한 점으로 모인다는 보장은 없다. 모수의 수렴은 추가 조건 아래에서 따로 증명해야 한다(Wu, 1983).

둘째, 도착하는 곳은 전역해가 아니라 정류점이다. 대개는 국소 최댓값이지만, 드물게 안장점에 멈출 수도 있다. 초기값에 따라 다른 곳에 도착한다. 아래 위젯에서 리셋을 눌러 보면 바로 보인다.

셋째, x가 연속이면 "KL ≥ 0"이라는 하한이 공짜로 오지 않는다. 경험분포는 밀도가 없어서, 앞 절 식의 상수 부분이 무한대가 된다. 남는 것은 −평균 로그우도뿐이고, 이것은 아래로 유계가 아닐 수 있다. 아래 문제 5에서 이 틈을 들여다본다.

속도에 대해서도 한마디. EM이 해 근처에서 얼마나 빨리 다가가는지는 "빠진 정보의 비율"이 정한다(DLR, 1977). 완전데이터가 가졌을 피셔 정보(모수를 조금 움직일 때 분포가 얼마나 달라지는지 재는 양) 가운데 z를 못 봐서 잃은 몫이다. 봉우리들이 많이 겹쳐 z를 추측하기 어려울수록 이 비율이 1에 가까워지고, EM은 느려진다.

{{viz: ch12/em-convergence}}

### 한 사이클 안의 풍경

EM의 한 사이클 안에 이 교재의 많은 것이 들어 있다.

- 분포가 점이고, 결합분포의 공간이 무대다.
- 목적함수가 KL이다.
- 두 길(혼합/지수)이 두 면의 평탄함이 된다.
- F(θ)의 볼록성 덕에 M-스텝의 답이 하나다.
- 완전데이터 모형이 지수족이면 M-스텝은 모멘트 일치다.
- 데이터 면과 모형 면이 마주 선다.
- 수렴 속도는 빠진 피셔 정보의 비율이 정한다.
- 열어 두기(E)와 확정하기(M)가 번갈아 온다.
- 두 걸음은 e-사영과 m-사영이다.
- 피타고라스가 매 스텝의 감소량을 잰다.

M-스텝의 답이 하나인 것과 EM 전체의 답이 하나인 것은 다르다. 한 스텝 안의 문제는 볼록하지만, 두 변수를 함께 보면 볼록하지 않다. 그래서 국소해가 생긴다.

한 알고리즘의 한 스텝을 정직하게 이해하려면 이만큼의 풍경이 필요했다.

### 수확

"EM에서 수렴하는 것은 값이지 모수가 아니고, 도착하는 곳은 초기값이 정하는 정류점이다. 값의 수렴도 목적함수가 아래로 유계일 때만 보장된다."

### 문제 4. 초기값이 도착지를 정한다

세 봉우리 데이터(평균 −3, 0.5, 3.5) 200개에 세 성분 혼합 가우시안을 EM으로 맞춘다. 초기 평균은 데이터에서 무작위로 세 점을 뽑고, σ = 1, 혼합 비중은 1/3로 둔다. 시드 200개로 200번씩 반복했을 때 최종 평균 로그우도는 어떻게 분포하는가? EM의 답이 하나라고 말할 수 있는가?

#### 함께 풀기

**김민준:** 시드 0으로 돌렸더니 ℓ = −2.280, 평균이 (−3.84, −2.83, 1.53)이에요. 이게 답이요.

**선생님:** 봉우리가 −3, 0.5, 3.5에 있다고 했는데, 평균 셋이 어디에 있어요?

**김민준:** 둘이 −3 근처에 몰렸고 하나가 1.5에 있어요. 0.5랑 3.5를 하나가 같이 덮고 있네요.

**이서연:** 시드 탓 아니야? 혼합 가우시안의 로그우도는 로그 안에 가우시안이 있으니까 오목할 것 같아요. 오목하면 극댓값이 곧 최댓값이고 하나뿐이잖아요. 시드를 바꿔도 같은 데로 가야 해요.

**선생님:** 서연 학생, 성분 1과 성분 2의 이름표를 바꿔 달면 로그우도가 달라져요?

**이서연:** 안 달라져요. 합이니까 순서가 상관없어요.

**선생님:** 그러면 최댓값을 주는 모수가 몇 개예요?

〔S08〕 **이서연:** 이름표 바꾸기만으로 3! = 6개요. 엄격하게 오목한 함수는 최댓값을 주는 점이 하나여야 하는데 여섯 개니까… 오목할 수가 없어요. 로그 안에 합이 있어서 log-sum이 오목성을 깨요.

**김민준:** 시드 200개를 다 돌려 봤어요. 172번은 ℓ = −2.208, 평균 (−3.18, 0.61, 3.61)이에요. 20번은 −2.280, 나머지 8번은 그 사이 여러 값이요.

**선생님:** 172번 쪽이 더 높네요. 시드 0은 운이 나빴던 거예요. 그래도 EM 입장에서는 둘 다 "수렴"이에요. 값이 더는 안 오르니까요.

**김민준:** 조별 과제에서 첫 회의 때 역할을 잘못 나누면, 매주 조금씩 나아져도 끝까지 그 구조로 가는 거랑 비슷해요. 중간에 판을 다시 짜지는 않으니까.

**이서연:** 수학 수업에서 "기울기가 0인 점은 후보일 뿐"이라고 했던 게 이거네요. EM의 단조성은 후보에 도착한다는 것까지만 말해 줘요.

**선생님:** 그래서 실전에서는 여러 초기값으로 돌려 가장 높은 것을 고르거나, k-means 같은 것으로 초기값을 잘 잡아요.

### 문제 5. 무한대로 가는 우도 (킬러)

문제 3의 데이터 100개에 두 성분 혼합 가우시안을 맞춘다. 성분 1의 평균을 데이터 한 점 x₁ 위에 놓고 σ₁ → 0으로 보낸다(w₁ = 0.01, 성분 2는 전체 데이터의 평균과 표준편차). (가) 평균 로그우도 ℓ은 어떻게 되는가? (나) 이것은 "EM에서 KL은 단조감소하고 KL ≥ 0이므로 수렴한다"는 본문의 논리와 모순인가? (다) 성분 1을 x₁ 위에 σ₁ = 0.01, w₁ = 0.01로 놓고 EM을 돌리면 어디로 가는가?

#### 함께 풀기

**김민준:** (가) 계산했어요. σ₁ = 0.1이면 ℓ = −2.358, 1e-5면 −2.296, 1e-20이면 −1.950, 1e-100이면 −0.108이요.

**선생님:** 파이썬 절에서 EM이 찾은 "좋은 해"는 ℓ이 얼마였어요?

〔M05〕 **김민준:** −1.904요. 1e-100짜리 바늘 하나 꽂은 게 그것보다 높아요. 이러면 최대우도 추정이 바늘이 되는 거예요?

**이서연:** 한 점 위에 폭 σ₁인 가우시안을 세우면 그 점의 밀도가 1/σ₁에 비례하니까, log가 −log σ₁로 무한히 커져요. 다른 99개 점은 성분 2가 받쳐 주니까 유한하고요. 그래서 ℓ의 상한이 없어요. 최댓값이 존재하지 않아요.

**김민준:** 그럼 σ에 하한 0.1을 걸면 해결이죠. 위젯 코드에도 그런 거 있던데요.

**선생님:** 하한을 1e-20으로 걸면요?

**김민준:** …그러면 −1.950이라 여전히 좋은 해 −1.904보다 조금 낮지만, 1e-50쯤이면 넘어가겠네요. 하한을 어디에 거느냐에 따라 답이 바뀌어요. 해결이 아니라 문제를 하한 뒤로 숨긴 거예요.

**이서연:** 그래도 (나)는 모순 아니에요? 본문은 KL이 단조감소하고 0 이상이니까 수렴한다고 했잖아요. 단조감소하고 아래로 유계인 수열은 수렴하니까, EM이 만드는 모수는 어딘가로 수렴해야 하고, 그럼 바늘로 무한히 가는 일은 없어야 해요.

**선생님:** 두 개를 물을게요. 그 수열은 무엇의 수열이에요? 그리고 여기서 KL ≥ 0이 정말 하한이에요?

**이서연:** 수열은… 목적함수 값의 수열이에요. 모수가 아니고요. 값이 수렴해도 모수가 모인다는 말은 아니에요. 그건 제가 섞었어요.

**이서연:** 그리고 하한은… 본문에서 x가 연속이면 상수가 무한대라고 했어요. KL(p̂‖p<sub>θ</sub>)에서 p̂는 점들 위의 경험분포라 밀도가 없어요. 실제로 줄이는 건 −ℓ뿐이고, 방금 −ℓ은 −∞까지 내려갈 수 있다는 걸 봤어요.

〔S09〕 **이서연:** 그러니까 "KL ≥ 0이니까 유계"라는 전제가 연속 데이터에서는 없었던 거예요. 모순이 아니라 전제가 빠진 거예요. 이산 데이터였으면 p̂(x)에 밀도가 필요 없으니 KL ≥ 0이 진짜 하한이고요.

**선생님:** 그래요. 그러면 (다)로 가 봐요. 실제 EM은 바늘로 빠져요?

**김민준:** 돌려 봤어요. 8사이클이면 멈춰요. σ₁ = 0.0127, w₁ = 0.0236, ℓ = −2.343이요. 무한대로 안 가고 x₁ 근처 점 두어 개를 붙잡은 좁은 성분으로 멈췄어요.

**이서연:** 근처에 다른 점이 있으니까 σ₁을 더 줄이면 그 점들을 놓쳐서 손해인 거예요. 거기가 정류점이고요. 좋은 해 −1.904보다 한참 낮은데 EM은 거기서 "수렴"했어요.

〔M09〕 **김민준:** 결국 세 가지가 다 다른 말이네요. 값이 수렴한다. 모수가 수렴한다. 좋은 데로 수렴한다. 본문의 단조성은 첫 번째만, 그것도 하한이 있을 때만 말해 줘요.

〔T14〕 **선생님:** 그게 Wu가 1983년에 가른 세 질문이에요. 실전에서는 σ에 사전분포를 주거나(사후확률 최대화, MAP), 한 점으로 쪼그라든(퇴화한) 성분이 생기면 다시 초기화하는 식으로 이 틈을 막아요. 하한을 걸더라도 "문제를 숨겼다"는 걸 알고 거는 것과 모르고 거는 것은 달라요.

**김민준:** 과제 채점 스크립트가 "에러 없이 끝남"을 통과로 치는 거랑 비슷해요. 끝났다고 맞은 건 아니죠.

**이서연:** 해석학 수업의 단조수렴정리가 "단조 + 유계"라고 두 조건을 따로 적는 이유를 이제 알겠어요. 유계는 공짜가 아니에요.
`,X4=`# 전체 지도

앞에서 줄곧 눈에 밟히는 것이 있었다. log가 곱을 합으로 바꿀 때 나오고, 놀라움을 잴 때 나오고, 지수족의 골격에서도, 민감도를 잴 때도 나왔다. 데이터로 모형을 맞출 때는 로그우도(모형이 데이터에 준 확률, 곧 우도의 로그)로 또 나왔다. 매번 다른 이름으로. 매번 다른 이유로. 왜 같은 함수가 이렇게 많은 문을 열고 있는가? 우연인가, 필연인가?

필연이다. 이 장에서 그것을 확인한다.

## log: 곱을 합으로 바꾸는 하나의 곡선

log가 나온 자리를 하나씩 다시 적어 보면, 그 자리들 사이에 무엇이 공통일까? 이 교재에서 log가 나온 여섯 자리는 모두 「곱을 합으로 바꾼다」는 한 성질에서 나온다. 먼저 여섯 자리를 늘어놓고, 그 뒤에 한 겹씩 벗겨 보자.

![log의 여섯 얼굴](/images/chapters/ch13-log-six-faces.svg)

### 여섯 자리

지금 기억을 더듬어보자.

**① 곱을 합으로.** 우리는 곱셈을 덧셈으로 바꾸는 렌즈를 만났다.

\`\`\`latex
\\log(a\\,b) = \\log a + \\log b
\`\`\`

\`\`\`latex
\\begin{array}{ll}
a,\\ b & \\text{양수 (확률, 에너지, 소리의 크기 무엇이든)} \\\\
\\log & \\text{자연로그}
\\end{array}
\`\`\`

리히터 규모, 데시벨, pH — 곱으로 커지는 세계를 더하기로 느끼게 해주는 번역기. 그때는 그것이 "두 번째 길"을 열어주는 도구였다. 두 분포를 곱한 뒤 합이 1이 되게 다시 나누는(정규화) 길이, log를 씌우면 덧셈의 길이 되었다.

**② 놀라움의 척도.** 독립사건의 놀라움이 더해지려면 곱을 합으로 바꾸는 함수가 필요했다. 연속이고 단조인 함수 가운데 그런 것은 log(의 상수배)뿐이었다. 그래서 −log p가 놀라움이 되었다. 그때는 log가 정보량의 단위를 만드는 도구였다.

**③ 부등식의 원천.** −log는 볼록하다. 곡선 위 두 점을 잇는 선분(할선)이 항상 곡선 위에 있다는 간단한 사실(젠센 부등식)에서 KL 발산(한 분포를 다른 분포로 대신할 때 치르는 손해) ≥ 0이 나왔다. 그때는 log가 부등식의 원천이었다.

**④ 골격의 심장.** 지수족은 log를 씌우면 θ에 대해 1차식이 되는 가족이었다. θ는 자연모수, 곧 분포를 정하는 숫자(모수)의 하나다.

\`\`\`latex
\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}(\\textcolor{#6f8fa6}{x}) = \\exp\\!\\big(\\textcolor{#3b7de0}{\\theta} \\cdot \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) + \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big), \\qquad \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}) = \\log \\sum_{\\textcolor{#6f8fa6}{x}} \\exp\\!\\big(\\textcolor{#3b7de0}{\\theta} \\cdot \\textcolor{#0e93b0}{t}(\\textcolor{#6f8fa6}{x}) + \\textcolor{#0e93b0}{k}(\\textcolor{#6f8fa6}{x})\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{p} & \\text{지수족의 한 분포 (첨자 } \\theta \\text{ 가 정함)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 (연속이면 합 대신 적분)} \\\\
\\textcolor{#0e93b0}{t} & \\text{충분통계량 } t(x) \\text{ (모형이 데이터에서 보는 요약값)} \\\\
\\textcolor{#0e93b0}{k} & \\text{캐리어 } k(x) \\text{ (} \\theta \\text{ 와 무관한 바탕 무게)} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 (log-partition)}
\\end{array}
\`\`\`

로그정규화자 F(θ)는 "지수들의 합의 log"이고, 그래서 볼록하다. 그 볼록성이 쌍대 좌표(θ가 정해지면 함께 정해지는 짝 좌표) η = ∇F(θ)를 선물했다. 그때는 log가 분포의 골격을 만드는 도구였다.

**⑤ 민감도의 재료.** 우리는 모수로 미분한 ∇<sub>θ</sub>log p를 만났다. 모수에 대한 스코어다. ∇<sub>θ</sub>log p = ∇<sub>θ</sub>p / p 이므로, 이것은 확률의 변화를 절대량이 아니라 비율로 읽는다. 연봉 3000만원의 300만원 인상과 3억의 300만원 인상이 다르듯. 그 비율의 분산이 피셔 정보였다. 그때는 log가 민감도를 공정하게 재는 도구였다.

**⑥ 추론의 목적함수.** 독립인 데이터 N개의 우도는 곱이다. log를 씌우면 합이 되고, N으로 나누면 평균이 된다. 그 평균에는 KL이 숨어 있다.

\`\`\`latex
\\frac{1}{N} \\sum_{i=1}^{N} \\log \\textcolor{#7f8f10}{q}(\\textcolor{#6f8fa6}{x}_i) = -\\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{\\hat{p}}) - \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{\\hat{p}}\\,\\|\\,\\textcolor{#7f8f10}{q})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{q} & \\text{모형} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터, } x_i \\text{ 는 i번째 표본} \\\\
N & \\text{표본 수} \\\\
\\textcolor{#9467bd}{H} & \\text{엔트로피: 평균적 놀라움 (모형과 무관한 상수)} \\\\
\\textcolor{#d6479f}{\\hat{p}} & \\text{경험분포 (결과가 이산일 때)} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산}
\\end{array}
\`\`\`

로그우도를 올리는 것은, 데이터가 만든 경험분포에서 모형까지의 KL을 줄이는 것이다. 현실 p를 모르고 표본만 가지고도 KL을 줄일 수 있는 이유가 log에 있다. 그때는 log가 추론의 목적함수를 만드는 도구였다.

### 곡선은 하나

여섯 번. 여섯 번의 등장에서, 매번 log는 다른 이름을 가지고 있었다. 번역기, 놀라움의 척도, 부등식의 원천, 골격의 심장, 민감도의 재료, 추론의 목적함수.

그런데 곡선은 하나다.
y = log x.
종이 위에 그리면 하나의 매끄러운 곡선.

그 곡선이 여섯 개의 얼굴을 가지고 있었던 것이다. 여섯 개의 맥락에서, 여섯 개의 필연성으로 등장했다.

1. 곱을 합으로 바꿔야 했기 때문에.
2. 독립사건의 놀라움이 더해져야 했기 때문에.
3. KL 발산이 0 이상이어야 했기 때문에.
4. 지수족이 θ에 대해 곧은 뼈대를 가져야 했기 때문에.
5. 확률의 변화를 비율로 공정하게 재야 했기 때문에.
6. 표본만으로 KL을 줄일 수 있어야 했기 때문에.

그리고 여섯 개의 "~해야 했기 때문에"를 한 겹 벗기면, 모두 첫 번째로 돌아간다. 독립은 곱이다. 정규화는 나눗셈이다. 확률의 세계는 곱으로 움직인다. 그 곱을 더하기로 옮겨야 평균을 내고, 미분하고, 부등식을 쓸 수 있다. 그 번역기가 log 하나뿐이었다.

### ML에서: 확률을 곱하지 않고 로그를 더한다

언어 모델이 문장 하나에 매기는 확률은 토큰마다의 확률을 곱한 것이다. 토큰 200개가 각각 0.01의 확률을 받았다면 곱은 10<sup>−400</sup>이다. 64비트 부동소수점이 나타낼 수 있는 가장 작은 양수는 약 5 × 10<sup>−324</sup>이라, 컴퓨터에서 이 곱은 그냥 0이 된다. 로그를 더하면 200 × log 0.01 = −921.03으로 아무 문제 없이 계산된다. 그래서 학습 코드는 확률 대신 로그 확률을 주고받고, 소프트맥스도 log-softmax로 바로 계산한다. 곱을 합으로 바꾸는 성질이 이론에서만이 아니라 숫자가 사라지지 않게 지키는 데에도 쓰인다.

### 수확

"log의 여섯 얼굴은 하나의 성질 — 곱을 합으로 — 에서 나온다. 확률이 곱으로 움직이는 한, log는 어디에나 나타난다."

## 거리의 세 얼굴: KL·브레그만·피셔는 볼록함수 하나에서 나온다

log의 여섯 얼굴이 하나의 성질로 모였다. 그렇다면 분포 사이의 "거리"에 붙었던 세 이름 — KL 발산, 브레그만 발산, 피셔 계량 — 도 하나의 구조를 가리키고 있지 않을까? 지수족 안에서는 그렇다. 셋은 하나의 볼록함수 F가 보여주는 세 얼굴이다.

![거리의 세 층위](/images/chapters/ch13-distance-hierarchy.svg)

### 세 얼굴

KL 발산부터 다시 적자. "현실 p로 살면서 지도 q를 믿을 때 치르는 추가 비용." 비대칭 발산. 어떤 두 분포 사이에서도 정의된다.

브레그만 발산은 "볼록함수와 접선 사이의 높이 차이." F(θ)의 그릇에서 접선까지의 간격. 그리고 지수족 안에서는 이것이 KL과 같았다. 두 칸의 순서를 뒤집어서.

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_1}\\,\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}_2}) = \\textcolor{#c2398a}{B}_{\\textcolor{#7d8a3a}{F}}(\\textcolor{#3b7de0}{\\theta}_2 : \\textcolor{#3b7de0}{\\theta}_1) = \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}_2) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta}_1) - \\textcolor{#e0504a}{\\eta}_1 \\cdot (\\textcolor{#3b7de0}{\\theta}_2 - \\textcolor{#3b7de0}{\\theta}_1) = \\textcolor{#c2398a}{B}_{\\textcolor{#c0622f}{F^*}}(\\textcolor{#e0504a}{\\eta}_1 : \\textcolor{#e0504a}{\\eta}_2)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#7f8f10}{p} & \\text{지수족의 한 분포 (첨자가 정함)} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수, 첨자 1, 2 는 두 분포} \\\\
\\textcolor{#c2398a}{B} & \\text{브레그만 발산, } B_F(a:b) = F(a) - F(b) - \\nabla F(b)\\cdot(a-b) \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자} \\\\
\\textcolor{#e0504a}{\\eta} & \\text{기대모수, } \\eta_1 = \\nabla F(\\theta_1) = E_{\\theta_1}[t] \\\\
\\textcolor{#c0622f}{F^*} & \\text{F 의 짝 함수 (르장드르 변환: 기울기 } \\eta \\text{ 를 새 변수로 다시 쓴 볼록함수, 값은 음의 엔트로피)}
\\end{array}
\`\`\`

KL에서 앞에 선 p<sub>θ₁</sub>이, 브레그만에서는 접선을 긋는 자리(뒤)로 간다. η 좌표로 옮기면 순서가 다시 제자리로 온다. 지수족을 벗어나면 이 등식은 없다. KL은 여전히 있지만, 그것을 낳는 F가 없다.

피셔 계량(곳마다 작은 걸음의 길이를 재는 규칙)은 "두 점이 가까워지면 비대칭이 사라지며 드러나는 대칭 거리."

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta}}\\,\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#3b7de0}{\\theta} + d\\textcolor{#3b7de0}{\\theta}}) \\approx \\frac{1}{2}\\, d\\textcolor{#3b7de0}{\\theta}^{\\top}\\, \\textcolor{#0e8f8f}{I}(\\textcolor{#3b7de0}{\\theta})\\, d\\textcolor{#3b7de0}{\\theta}, \\qquad \\textcolor{#0e8f8f}{I}(\\textcolor{#3b7de0}{\\theta}) = \\nabla^2 \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#7f8f10}{p} & \\text{지수족의 한 분포} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수, } d\\theta \\text{ 는 아주 작은 변화} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬 (계량)} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자, } \\nabla^2 F \\text{ 는 그 헤세 행렬 (Hessian, 두 번 미분한 값들의 행렬)}
\\end{array}
\`\`\`

KL의 발밑에서, 그리고 브레그만의 발밑에서, 같은 행렬이 나타난다. F의 두 번째 미분, 그릇의 휘어짐이다.

세 갈래로 올라온 길이 한 지점에서 합류한다. KL과 브레그만은 떨어진 두 점 사이의 발산이고, 피셔는 한 점 둘레의 국소적 계량이다. 전역에서 국소로 내려가면 — 발밑을 보면 — 셋이 하나가 된다.

그리고 이 구조는 피타고라스 정리를 품고 있다. 교대 최소화에서 "거리도 아닌 것"이 매 스텝의 감소량을 정확히 재는 자가 될 수 있는 것은 세 얼굴이 하나의 볼록함수 F에서 태어났기 때문이다.

{{viz: ch13/three-faces}}

### 수확

"KL은 어디서나, 브레그만은 볼록함수가 있는 곳에서, 피셔는 발밑에서. 지수족 안에서는 셋이 F 하나의 세 얼굴이다. KL과 브레그만이 같다고 말할 때는 언제나 두 칸의 순서를 함께 말한다."

### 문제 1. 브레그만과 KL, 순서까지

베르누이 분포는 t(x) = x, F(θ) = log(1 + e<sup>θ</sup>), η = F′(θ) = 성공 확률인 지수족이다. 성공 확률 0.2인 분포 p₁과 0.6인 분포 p₂에 대해 (가) KL(p₁‖p₂)를 정의대로 계산하라. (나) B<sub>F</sub>(θ₂ : θ₁)와 B<sub>F</sub>(θ₁ : θ₂)를 계산해 (가)와 비교하라. (다) F*(η) = η log η + (1 − η) log(1 − η)로 B<sub>F*</sub>(η₁ : η₂)를 계산하라.

#### 함께 풀기

**김민준:** (가)는 0.2 log(0.2/0.6) + 0.8 log(0.8/0.4) = 0.3348이요.

**김민준:** (나)는 θ₁ = log(0.2/0.8) = −1.386, θ₂ = log(0.6/0.4) = 0.405로 바꿔서, 브레그만을 B<sub>F</sub>(θ₁ : θ₂)로 짰어요. KL의 앞 칸이 p₁이니까 θ₁이 먼저요. 0.3819가 나와요.

〔M06〕 **김민준:** 0.3348이랑 안 맞아요. 앞에서 KL이 브레그만이라고 한 거, 틀린 거 아니에요?

**선생님:** 0.3819라는 숫자, 이 문제 어딘가에서 본 적 없어요?

**김민준:** KL(p₂‖p₁)을 계산해 보면… 0.3819요. 제가 계산한 게 반대 방향 KL이네요.

**선생님:** 브레그만 B<sub>F</sub>(a : b)에서 접선은 어느 점에 그어요?

〔M07〕 **김민준:** 뒤의 b요. KL(p₁‖p₂)는 p₁의 눈으로 평균을 내니까, 접선을 θ₁에 긋고 θ₂에서 높이를 재야 해요. 그러니 B<sub>F</sub>(θ₂ : θ₁) = 0.3348. 맞아요.

**이서연:** (다)는 제가 했어요. F*에 θ₁ = −1.386을 넣었더니 log(−1.386)이 나와서 nan이에요.

**선생님:** F*는 무슨 좌표의 함수예요?

〔S07〕 **이서연:** η요. F는 θ의 함수고 F*는 η의 함수예요. 둘 다 "F"라서 같은 자리에 같은 걸 넣으면 되는 줄 알았어요. η₁ = 0.2, η₂ = 0.6을 넣으면 0.3348이고, 이번엔 순서가 KL과 같아요.

**이서연:** θ 쪽에서는 순서가 뒤집히고 η 쪽에서는 그대로네요. 선형대수에서 쌍대공간의 벡터를 원래 공간의 벡터 자리에 넣으면 안 되는 거랑 같아요. 넣을 수는 있어도 뜻이 없어요.

**김민준:** 보고서 표의 열 이름만 보고 단위를 확인 안 한 거랑 비슷하네요. 같은 "F"여도 들어가는 게 달라요.

## 첸초프의 정리: 정보를 잃지 않는 옮기기가 피셔 계량을 고른다

세 얼굴이 모두 발밑에서 피셔 계량으로 모였다. 우연일까? 다른 자를 골랐어도 이 모든 이야기가 성립했을까, 아니면 피셔 말고는 애초에 고를 자가 없었던 걸까? 이 물음에 답한 사람이 있다.

---

> ### 인물 이야기 — Nikolai Chentsov과 "유일성의 증명"
>
> 1960년대, 모스크바. 니콜라이 니콜라예비치 첸초프(Николай Николаевич Ченцов, 1930–1992)는 모스크바에서 확률론과 수리통계를 연구하던 수학자였다. 그의 관심사는 충분통계량과 통계적 결정의 기하학이었다. 1964년에 그는 마르코프 사상(확률을 다른 결과 위로 옮겨 적는 변환)들을 한 틀로 묶어 통계적 결정을 보는 방법을 내놓았다.
>
> 첸초프가 풀고자 한 문제는 근본적이었다. 확률분포의 공간에 "거리"를 정의하는 방법은 무한히 많다. 리만 계량(점마다 작은 걸음의 길이를 재는 규칙을 하나씩 붙인 것)을 하나 골라서 거리를 재면 된다. 그런데 어떤 계량을 골라야 하는가? 취향의 문제인가? 아니면 자연스러운 선택이 있는가?
>
> 첸초프의 답은 놀라웠다. **피셔 정보 계량이 유일하다.** 더 정확히 말하면: 결과가 유한개인 표본 공간 위에서, 마르코프 사상(충분통계량으로 옮기는 것과 같은, 정보를 잃지 않는 쪼개기·옮기기)에 대해 변하지 않는(불변인) 리만 계량은 상수배를 빼면 피셔 계량뿐이다.
>
> 이것은 선택의 문제가 아니었다. 유일한 답이었다.
>
> 이 결과는 1972년 모스크바의 나우카 출판사에서 나온 저서 『통계적 결정 규칙과 최적 추론』에 실렸다. 러시아어로. 미국수학회의 영어 번역(*Statistical Decision Rules and Optimal Inference*)은 1982년에야 나왔다. 서방의 수학자들은 이 결과를 한참 뒤에야 알게 되었다.
>
> "왜 피셔 정보가 유일한 자연스러운 계량인가"라는 질문의 답이 "Čencov의 정리"라고 불리는 바로 이 정리다. 이 교재 전체에서 피셔 정보가 특권적 위치를 차지하는 것 — 거리를 재고, 곡률을 정의하고, 사영의 직교를 재는 것 — 의 수학적 정당화가 첸초프에게서 나온다.
>
> 이 정리에는 뒷이야기가 둘 있다. 하나는 "단조성"으로 바꿔 말한 버전이다. 정보를 뭉개는 변환을 거치면 거리가 줄어들어야 한다는 조건이다. 고전 확률에서는 이것도 피셔를 가리키지만, 양자 상태의 공간으로 가면 이 조건을 만족하는 계량이 무수히 많다. Morozova와 첸초프가 후보들을 내놓았고, Petz(1996)가 그것들을 모두 분류했다. 다른 하나는 무한차원이다. 결과가 무한히 많은 표본 공간으로의 확장은 Ay, Jost, Lê, Schwachhöfer(2015)와 Bauer, Bruveris, Michor(2016)의 몫이었다. 첸초프의 유한한 증명이 일반적인 모습을 갖추기까지 40년이 걸린 셈이다.
>
> 첸초프의 작업에는 계량뿐 아니라 접속(무엇을 곧은 길로 볼지 정하는 규칙)에 대한 결과도 있었다. 같은 불변성 조건을 만족하는 접속들은 α-접속이라는, 숫자 α 하나로 이어진 가족을 이룬다는 것. Amari가 1980년대에 쌍대 접속의 구조로 발전시킨 α-접속이 이미 첸초프의 틀 안에 있었던 것이다.
>
> 첸초프는 1992년에 세상을 떠났다. 그의 이름은 서방에서 Čencov, Chentsov, Cencov 등 여러 철자로 표기되어 검색조차 어렵다. 정보기하학의 기초를 놓은 사람 중 하나이면서도 가장 덜 알려진 인물이다. 이 장이 "전체 지도"라면, 그 지도의 자가 하나뿐임을 증명한 사람이 첸초프다.

정리가 말하는 「정보를 잃지 않는 옮기기」와 「잃는 옮기기」가 KL 값에 어떻게 드러나는지, 결과 칸을 합쳐 보며 숫자로 확인하자.

### 문제 2. 뭉개면 줄어든다

A = (0.5, 0.3, 0.2), C = (0.25, 0.25, 0.5)에서 결과 2와 3을 하나로 합친다. (가) 합치기 전과 후의 KL(A‖C)를 비교하라. (나) C를 (0.25, 0.45, 0.30)으로 바꾸면 어떻게 되는가? 합쳐도 KL이 줄지 않는 조건은? (다) 이것이 첸초프의 정리와 어떻게 이어지는가?

#### 함께 풀기

**김민준:** 합치는 건 정보를 버리는 게 아니라 묶기만 하는 거니까 KL은 그대로일 것 같아요. 그래도 계산은 했어요. 합치기 전 0.218, 합친 뒤 (0.5, 0.5)와 (0.25, 0.75) 사이 KL은 0.144예요.

〔M04〕 **김민준:** 줄었네요. 묶기만 했는데요.

**선생님:** 합친 뒤에 "결과 2였는지 3이었는지"를 물으면 답할 수 있어요?

**김민준:** 없어요. 그게 버려진 정보예요. 두 분포를 가르던 단서 일부가 그 칸 안에 있었고요.

**이서연:** 그럼 KL이 그대로인 건 A = C일 때뿐이겠네요. 버리는 정보가 늘 있으니까요.

**선생님:** (나)의 C로 해 봐요.

〔S06〕 **이서연:** 합치기 전 0.144, 합친 뒤 0.144… 같아요. A와 C가 다른데도요.

**선생님:** 결과 2와 3 사이의 비율을 A와 C에서 각각 봐요.

〔S08〕 **이서연:** A는 0.3 : 0.2, C는 0.45 : 0.30. 둘 다 3 : 2예요. 합친 칸 안에서 두 분포가 똑같이 나뉘니까, 그 칸 안에는 둘을 가를 단서가 애초에 없었어요. 버린 게 없으니 KL도 그대로예요.

**선생님:** 그게 "충분통계량"이에요. 합친 뒤의 결과가 두 분포를 가르는 데 충분하면 KL도 피셔도 그대로고, 아니면 줄어요. 첸초프는 거꾸로 물었어요. 이렇게 칸을 합치는 변환에 대해 변하지 않는 계량이 무엇이냐고. 답이 피셔 하나였고요.

**김민준:** 조별 과제 점수를 조 평균으로만 공개하는 거랑 비슷해요. 조원끼리 점수가 똑같았으면 잃은 게 없고, 달랐으면 누가 잘했는지를 잃는 거죠.

**이서연:** 해석학 수업에서 조건부 기댓값을 취하면 분산이 줄어드는 것과 같은 모양이에요. 등호는 원래 그 조건 안에서 이미 결정돼 있을 때만이고요.

## 지도 완성: 지수족 하나를 다루는 한 벌의 연장

자리마다 따로 만든 도구들을 한 상자에 담으면, 정말로 서로 맞물릴까? 지금까지의 도구는 지수족 하나를 다루는 한 벌의 연장이어야 한다. 코드로 확인하는 것이 가장 정직하다. 한 클래스 안에 F, η, 피셔, F*, 브레그만, KL을 넣고, 장마다 따로 증명했던 등식들이 한 번에 성립하는지 본다.

### 파이썬

결과가 셋인 분포를 지수족으로 쓴다. t(x)는 앞의 두 결과를 가리키는 원-핫이고, 셋째 결과가 기준이다.

\`\`\`python
import numpy as np

class ExponentialFamily:
    """유한 표본 공간 위의 지수족  p_θ(x) = exp(θ·t(x) − F(θ) + k(x))"""

    def __init__(self, t, k=None):
        self.t = np.asarray(t, float)                    # 모양 (표본 수, 모수 수)
        self.k = np.zeros(len(self.t)) if k is None else np.asarray(k, float)

    def F(self, th):                                     # 로그정규화자
        return np.log(np.sum(np.exp(self.t @ th + self.k)))

    def prob(self, th):
        return np.exp(self.t @ th + self.k - self.F(th))

    def eta(self, th):                                   # η = ∇F(θ) = E[t]
        return self.prob(th) @ self.t

    def fisher(self, th):                                # I(θ) = ∇²F(θ) = Cov[t]
        p, e = self.prob(th), self.eta(th)
        d = self.t - e
        return (d * p[:, None]).T @ d

    def theta_of(self, eta, th=None):                    # η → θ (뉴턴법)
        th = np.zeros(self.t.shape[1]) if th is None else th
        for _ in range(50):
            th = th - np.linalg.solve(self.fisher(th), self.eta(th) - eta)
        return th

    def Fstar(self, eta):                                # 르장드르 쌍대 F*(η) = θ·η − F(θ)
        th = self.theta_of(eta)
        return th @ eta - self.F(th)

    def bregman(self, a, b):                             # B_F(a : b)
        return self.F(a) - self.F(b) - self.eta(b) @ (a - b)

    def kl(self, th1, th2):                              # KL(p_θ1 ‖ p_θ2) = B_F(θ2 : θ1)
        return self.bregman(th2, th1)


fam = ExponentialFamily(t=[[1, 0], [0, 1], [0, 0]])     # 결과 셋, 셋째를 기준으로
th1, th2 = np.array([0.9, 0.4]), np.array([-0.3, 1.1])
p1, p2 = fam.prob(th1), fam.prob(th2)
e1, e2 = fam.eta(th1), fam.eta(th2)

print("p1 =", np.round(p1, 4), "  p2 =", np.round(p2, 4))
print(f"KL 정의대로     {np.sum(p1 * np.log(p1 / p2)):.6f}")
print(f"B_F(θ2:θ1)      {fam.kl(th1, th2):.6f}")
print(f"B_F(θ1:θ2)      {fam.bregman(th1, th2):.6f}   ← 순서를 바꾸면 KL(p2‖p1)")
Bs = fam.Fstar(e1) - fam.Fstar(e2) - fam.theta_of(e2) @ (e1 - e2)
print(f"B_F*(η1:η2)     {Bs:.6f}")
print(f"F*(η1) = −H(p1) {fam.Fstar(e1):.6f}  {np.sum(p1 * np.log(p1)):.6f}")
print("피셔 = Cov[t]\\n", np.round(fam.fisher(th1), 4))
d = 1e-3 * np.array([1.0, -2.0])
print(f"KL(θ‖θ+dθ) {fam.kl(th1, th1 + d):.4e}   ½dθᵀI dθ {0.5 * d @ fam.fisher(th1) @ d:.4e}")
# p1 = [0.4967 0.3013 0.202 ]   p2 = [0.1561 0.6331 0.2107]
# KL 정의대로     0.342603
# B_F(θ2:θ1)      0.342603
# B_F(θ1:θ2)      0.298423   ← 순서를 바꾸면 KL(p2‖p1)
# B_F*(η1:η2)     0.342603
# F*(η1) = −H(p1) -1.032088  -1.032088
# 피셔 = Cov[t]
#  [[ 0.25   -0.1497]
#  [-0.1497  0.2105]]
# KL(θ‖θ+dθ) 8.4513e-07   ½dθᵀI dθ 8.4536e-07
\`\`\`

KL = 브레그만(순서를 뒤집어서), 르장드르 쌍대, 음의 엔트로피, 피셔 = Cov[t], 발밑 이차식이 한 객체 안에서 동시에 맞는다. 클래스에 새 t(x)와 k(x)만 넣으면 같은 연장이 다른 지수족에서도 그대로 돈다.

### 수확

"이 모든 것이 덧셈과 곱셈이었다. 덧셈은 무지의 방향이고, 곱셈은 확신의 방향이다. p에서 내려오는 m-측지선(m은 mixture. 덧셈의 규칙으로 가장 곧게 가는 길)이 e-평탄한(e는 exponential. 곱셈의 길이 곧게 펴지는) 모형과 직교해 KL이 피타고라스처럼 나뉘고, 교대 최소화가 목적함수의 값을 내려 보낸다. 그리고 그 사이를 번역한 것이 log였다."

지도가 완성되었다. 키 분포를 점 하나로 놓았을 때 시작된 여행이 여기서 하나의 그림이 된다. 마지막으로, 이 지도 위의 자가 좌표를 바꿔도 같은 자인지 손으로 확인해 보자.

### 문제 3. KL의 헤세 행렬은 좌표를 바꿔도 피셔인가 (킬러)

현실 p = (0.5, 0.3, 0.2)로 두고 모형 q를 움직여 KL(p‖q)를 q의 함수로 본다. (가) 좌표 ξ = (q₁, q₂)에서 q = p일 때의 헤세 행렬을 유한차분(작은 간격 h만큼 옮긴 값의 차로 미분을 어림하기)으로 구하고, 피셔 행렬 g<sub>ij</sub> = δ<sub>ij</sub>/p<sub>i</sub> + 1/p₃와 비교하라. (나) 자연모수 θ<sub>i</sub> = log(q<sub>i</sub>/q₃)에서도 같은 일을 하라. θ 좌표의 피셔 행렬은 Cov[t] = diag(p₁, p₂) − (p₁, p₂)(p₁, p₂)ᵀ이다. (다) 두 행렬이 "같은 계량"이라는 것을 좌표 변환으로 보여라.

#### 함께 풀기

**김민준:** (가)부터요. 유한차분 간격 h = 0.1로 했는데 inf가 나와요.

**선생님:** q₁과 q₂를 둘 다 0.1씩 늘리면 q₃는 얼마예요?

**김민준:** 0.2 − 0.2 = 0이요. 심플렉스, 곧 합이 1인 확률들의 영역 밖으로 나갔네요. h = 0.05로 줄였더니 [[7.79, 5.75], [5.75, 9.29]]가 나와요. 이론값은 [[7, 5], [5, 8.33]]이고요. 10%쯤 안 맞아요.

〔M05〕 **김민준:** 그럼 KL의 헤세가 피셔라는 건 근사라서 이 정도는 틀리는 거 아니에요?

**선생님:** 발밑의 이차식이라는 건 어느 범위에서의 이야기였어요?

**김민준:** dθ가 작을 때요. h = 0.05면 p₃ = 0.2에 비해 작지가 않네요. h = 1e-3이면 [[7.0003, 5.0003], [5.0003, 8.3337]], 1e-4면 소수 넷째 자리까지 [[7, 5], [5, 8.3333]]이요.

**선생님:** 더 줄이면요?

〔M08〕 **김민준:** 1e-7에서는 [[6.9985, 4.9998], ...]로 다시 벗어나요. 전에 봤던 부동소수점 바닥이에요. 간격이 너무 크면 3차 항이, 너무 작으면 반올림 오차가 끼어요. 중간에 좋은 구간이 있어요.

**이서연:** (나)는 θ 좌표 헤세가 [[0.25, −0.15], [−0.15, 0.21]]로 Cov[t]와 맞아요. 그런데 (가)의 [[7, 5], [5, 8.33]]과는 숫자가 전혀 달라요. 같은 계량이면 같아야 하지 않나요?

**선생님:** 극좌표에서 계량 성분이 직교좌표와 같게 나와요?

**이서연:** 아니요, dr² + r²dφ²이니까 달라요. 좌표를 바꾸면 성분도 바뀌어요. 그러면 야코비안 J = ∂ξ/∂θ를 곱하면 되겠네요. J를 계산하면 [[0.25, −0.15], [−0.15, 0.21]]이고, G<sub>ξ</sub>J를 하면…

〔S05〕 **이서연:** 단위행렬이 나와요. θ 좌표의 피셔가 단위행렬이라는 건 말이 안 되는데요.

**선생님:** 계량은 벡터를 몇 개 받아서 숫자를 내요?

〔S09〕 **이서연:** 두 개요. g(u, v). 그러니까 벡터 두 개가 각각 좌표 변환을 거쳐야 해요. J를 한 번이 아니라 양쪽에 곱해야 해요. JᵀG<sub>ξ</sub>J = [[0.25, −0.15], [−0.15, 0.21]]. θ 좌표의 피셔와 정확히 같아요.

**이서연:** 그리고 제가 잘못 곱한 G<sub>ξ</sub>J가 단위행렬이었던 것도 우연이 아니에요. J = ∂η/∂θ가 θ 좌표의 피셔 자체고, η 좌표의 피셔는 그 역행렬이니까요. 틀린 계산이 쌍대성을 보여 준 거예요.

〔T13〕 **선생님:** 둘이 이 장 전체를 다시 한 셈이에요. 민준 학생은 "발밑"이 얼마나 좁은지를 숫자로 찾았고, 서연 학생은 계량이 좌표가 아니라 기하의 것이라는 걸 확인했어요. 성분은 좌표마다 다르고, 계량은 하나예요.

**김민준:** 과제에서 cm와 m를 섞으면 숫자가 달라 보여도 같은 길이인 거랑 같네요. 넓이를 바꿀 때는 단위 변환을 두 번 곱해야 하는 것까지요.

**이서연:** 선형대수에서 이차형식은 PᵀAP로 바뀐다고 외웠는데, 그게 왜 양쪽인지 이제 몸으로 알겠어요.
`,Z4=`# 전환 ③: 도구를 들고 세계로

지도가 완성되었다.

심플렉스(합이 1인 확률들의 영역) 위의 점에서 출발해, 두 개의 길을 걷고, 놀라움을 재고, 볼록함수의 쌍대(한쪽이 정해지면 다른 쪽이 정해지는 짝)를 넘어 지수족에 도달하고, 사영의 교대로 수렴을 보았다. 하나의 곡선이 여섯 개의 얼굴을 가지고 있었고, 거리의 세 이름이 하나의 구조를 가리키고 있었다. 이 도구들은 지수족 안에서 완벽하게 작동한다.

그런데 세상의 분포는 대부분 지수족이 아니다.

신경망이 표현하는 분포, 이미지의 분포, 언어의 분포 — 이것들은 지수족의 깔끔한 골격을 따르지 않는다. 파라미터가 수억 개이고, F(θ)가 닫힌꼴(식 하나)로 쓰이지 않는다. θ와 η가 공간 전체에서 서로를 비추는 전역 쌍대평탄 구조, 곧 θ 직선과 η 직선이 어디서나 둘 다 곧은 길이 되는 구조도 없다. 피셔 계량(곳마다 작은 걸음의 길이를 재는 규칙)은 여전히 정의되지만, 신경망에서는 퇴화한다. 서로 다른 파라미터가 같은 분포를 내놓는 방향이 많아서, 피셔 행렬이 역행렬을 갖지 않는 점이 흔하다. Watanabe가 "특이 모형"이라 부르며 따로 이론을 세운 세계다.

그러면 우리가 배운 것이 쓸모없는가?

아니다. 지도 전체가 아니라 연장 하나하나를 들고 가면 된다. 정확한 등식 몇 개는 두고 가야 하지만, 다음 연장들은 지수족 밖에서도 살아남는다.

| 연장 | 지수족 밖에서 | 쓰이는 곳 |
|---|---|---|
| KL 발산 | 한 분포를 다른 분포로 대신할 때 치르는 손해라서, 어떤 두 분포 사이에서도 그대로 정의된다. 방향의 의미(누구의 눈으로 재는가)도 그대로다. | 디퓨전의 학습 목표, RLHF(사람 피드백으로 하는 강화학습)의 KL 벌칙 |
| m-사영 = 최대우도 | 우도(모형이 데이터에 준 확률)를 키우는 교차엔트로피 학습은 여전히 KL(p̂‖q)를 줄이는 m-사영(m은 mixture. 덧셈의 길로 내려찍기)이다. 다만 답이 하나라는 보장은 사라진다. | 사전학습, SFT(지도 미세조정) |
| e-사영 = 봉우리(모드) 찾기 | KL(q‖p)를 줄이는 e-사영(e는 exponential. 곱셈의 길로 내려찍기)은 여전히 봉우리 하나를 고르는 경향이 있다. | 변분추론, 정책 최적화 |
| 피셔 계량 | 국소적으로는 여전히 KL의 발밑이다. 퇴화한 방향을 조심하며, 근사(대각, 블록)로 쓴다. | 자연 기울기(피셔 계량으로 보정한 경사하강), 최적화기 설계 |
| 데이터에 대한 스코어 ∇ₓlog p | 정규화 상수(합이 1이 되게 나누는 수)를 몰라도 계산된다. log의 기울기가 주인공이 된다. | 스코어 매칭과 디퓨전 |
| 지수 기울이기 | 기준 분포에 exp(보상/β)를 곱하고 합이 1이 되게 다시 나누는 한 줄은 어떤 기준 분포에서도 성립한다. | 보상 최적 정책의 닫힌꼴 |

두고 가야 하는 것도 적어 둔다. 피타고라스의 정확한 등식은 착지하는 면이 평탄할 때만 성립한다. KL = 브레그만은 F가 있는 곳에서만 성립한다. 볼록성이 주던 "답은 하나"라는 보장은 대부분 사라진다.

전략을 바꾸면 된다. 정확한 답 대신 올바른 질문을 던지는 것. "이 문제를 정보기하학의 관점에서 보면 무엇이 보이는가?"

이 한 마디는 마법처럼 작동한다. 이제 그것을 실제 문제 앞에서 확인할 차례다.
`,Q4=`# 생성의 기하학

지도는 여행이 아니다. 지도를 들고 실제 세계를 걸어봐야 한다.

여기서부터가 그 걸음이다.

추론은 "이미 있는 데이터에서 숨겨진 구조를 찾는" 것이었다. 그런데 "아무것도 없는 곳에서 데이터를 만들어내는" 생성은? 생성의 기하학에도 우리가 배운 도구들이 작동한다.

시간 t의 방향을 먼저 적어 둔다. 이 장에서는 디퓨전 문헌의 관례를 따라 t = 0이 데이터, t가 커질수록 노이즈다. 문헌에 따라서는 방향이 반대(t = 0이 노이즈, t = 1이 데이터)인 경우도 있으니, 식을 옮겨 올 때 조심하자.

---

![안개 속 레이더 — 스코어 함수가 방향을 알려준다](/images/chapters/ch14-fog-radar.svg)

## 스코어: 로그 밀도의 기울기라는 레이더

노이즈에서 이미지가 태어난다. 이건 마법인가, 아니면 우리가 배운 것들의 조합인가? 답을 찾으려면 먼저 이미지가 어디에 사는지부터 보아야 한다.

### 매니폴드 가설 — 의미 있는 데이터는 좁은 곳에 모여 있다

매니폴드 가설이란: 실제 데이터는 고차원 공간 전체에 퍼져 있지 않고, 그 안의 저차원 매니폴드 위에 집중되어 있다는 경험적 주장이다. 사진을 생각해보자. 256×256 픽셀 컬러 이미지는 약 20만 차원의 공간에 산다. 그런데 "의미 있는 이미지" — 고양이, 풍경, 얼굴 — 는 그 20만 차원 공간의 극히 작은 부분에 모여 있다. 랜덤으로 20만 개의 숫자를 뽑으면 거의 확실하게 노이즈가 된다.

![디퓨전 — 노이즈에서 이미지로, 이미지에서 노이즈로](/images/chapters/diffusion-process.png)

![순방향 디퓨전 — 단계별로 노이즈가 쌓인다](/images/chapters/diffusion-noisy-steps.png)

이 가설은 곁가지처럼 들릴 수 있다. 이 장에서는 그 곁가지가 핵심이 된다. 랜덤한 숫자 덩어리에서 출발해 그 좁은 곳까지 어떻게 걸어갈 것인가?

### 드래곤볼 찾기 — 레이더만 보고 걸어라

드래곤볼 찾기 대회. 넓은 평야에 드래곤볼 7개가 숨겨져 있다. 참가자 수천 명이 평야의 아무 지점에 랜덤으로 떨어진다. 주최 측은 각 참가자에게 드래곤 레이더를 하나씩 나눠준다. 규칙은 하나 — 레이더 바늘만 보고 걸어라.

### 전파 지형 — 봉우리가 일곱 개인 밀도

각 드래곤볼이 전파를 내보낸다. 한 개의 볼이 만드는 신호 강도는 거리에 따라 가우시안 모양으로 약해진다. 가까우면 강하고, 멀면 약하다. 7개의 신호가 합쳐지면 땅 위에 전파 강도 지도가 만들어진다. 봉우리가 7개인 지형.

이것은 혼합분포(mixture)다. 7개 가우시안의 가중합. 전파 강도 지도 = 확률밀도 p(x).

### 레이더의 원리 — 로그 밀도의 기울기

레이더 바늘이 가리키는 방향은 "여기서 신호가 가장 빠르게 세지는 방향"이다. 다만 신호 자체가 아니라 신호의 로그가 가장 빠르게 세지는 방향이다.

\`\`\`latex
\\textcolor{#b0892a}{s}(\\textcolor{#6f8fa6}{x}) = \\nabla_{x} \\log \\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#b0892a}{s} & \\text{스코어 함수 (레이더 바늘)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{평야 위의 한 점 (데이터 공간의 점)} \\\\
\\textcolor{#d6479f}{p} & \\text{데이터 분포의 밀도 (전파 강도 지도)} \\\\
\\nabla_{x} & \\text{데이터 좌표 } x \\text{ 에 대한 기울기}
\\end{array}
\`\`\`

"스코어"라는 이름은 모수(분포를 정하는 숫자, 예: 가우시안의 평균과 분산) 쪽에서도 쓰인다. 이름은 같지만 미분하는 변수가 다르다. 모수에 대한 스코어 ∇<sub>θ</sub> log p<sub>θ</sub>(x)는 모수 θ를 흔들어 보는 기울기다. 분포족(모수만 바꾼 분포들의 모임) 안에서 어느 쪽으로 움직이면 이 데이터가 더 그럴듯해지는가. 여기의 스코어, 곧 데이터에 대한 스코어 ∇ₓ log p(x)는 분포는 그대로 두고 점 x를 움직여 보는 기울기다. 평야 위에서 어느 쪽으로 걸으면 더 그럴듯한 곳에 닿는가. 둘 다 "로그를 미분한다"는 같은 가족이다. 이 장에서 스코어라고 하면 늘 ∇ₓ 쪽이다.

### 왜 log인가

가장 중요한 이유부터. 실제 문제에서 우리는 밀도를 상수배까지만 안다. p(x) = p̃(x) / Z 에서 p̃는 계산할 수 있지만, 정규화 상수 Z(전체 합이 1이 되게 나눠 주는 수)는 온 평야에 걸친 적분이라 계산할 수 없다. 그런데 로그를 씌우고 x로 미분하면 Z가 사라진다.

\`\`\`latex
\\nabla_{x} \\log \\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}) = \\nabla_{x} \\log \\tilde{\\textcolor{#d6479f}{p}}(\\textcolor{#6f8fa6}{x}) - \\nabla_{x} \\log \\textcolor{#7d8a3a}{Z} = \\nabla_{x} \\log \\tilde{\\textcolor{#d6479f}{p}}(\\textcolor{#6f8fa6}{x})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p} & \\text{정규화된 밀도} \\\\
\\tilde{\\textcolor{#d6479f}{p}} & \\text{정규화하지 않은 밀도 (계산 가능)} \\\\
\\textcolor{#7d8a3a}{Z} & \\text{정규화 상수} = \\int \\tilde{p}(x)\\,dx \\text{ (계산 불가능, } x \\text{ 와 무관)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{평야 위의 점}
\\end{array}
\`\`\`

Z는 x와 무관한 상수라서 기울기가 0이다. 레이더는 전체 지도의 총량을 몰라도 만들 수 있다. log p = θ·t(x) − F(θ) 꼴의 분포 모임(지수족)에서도 합을 1로 맞추는 F(θ)(로그정규화자)를 계산하는 것이 늘 가장 어려운 일이다. 이것을 생각하면 얼마나 큰 해방인지 알 수 있다. 디퓨전 모델이 밀도 대신 스코어를 배우는 첫째 이유가 이것이다.

두 번째 이유는 비율이다. 신호가 0.001인 벌판 한가운데서 0.0001만큼 세지는 것과, 신호가 0.5인 볼 근처에서 0.0001만큼 세지는 것은 의미가 다르다. 벌판에서의 미세한 변화를 놓치면 참가자는 영원히 허허벌판을 헤맨다. 비율로 봐야 한다. 그래서 ∇log p = ∇p / p.

연봉 3000만원의 300만원 인상과 3억의 300만원 인상은 다르다. 드래곤 레이더는 이 구분을 할 줄 아는 기기다.

### 혼합의 스코어

전파 지형이 가우시안 혼합이면 레이더 바늘을 손으로 계산할 수 있다.

\`\`\`latex
\\begin{aligned} \\textcolor{#b0892a}{s}(\\textcolor{#6f8fa6}{x}) &= \\sum_{k} \\gamma_k(\\textcolor{#6f8fa6}{x})\\, \\frac{\\textcolor{#2e9e6e}{\\mu}_k - \\textcolor{#6f8fa6}{x}}{s^2} \\\\ \\gamma_k(\\textcolor{#6f8fa6}{x}) &= \\frac{\\pi_k\\, \\mathcal{N}(\\textcolor{#6f8fa6}{x};\\, \\textcolor{#2e9e6e}{\\mu}_k, s^2 I)}{\\sum_j \\pi_j\\, \\mathcal{N}(\\textcolor{#6f8fa6}{x};\\, \\textcolor{#2e9e6e}{\\mu}_j, s^2 I)} \\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#b0892a}{s} & \\text{혼합분포의 스코어} \\\\
\\textcolor{#6f8fa6}{x} & \\text{평야 위의 점} \\\\
\\textcolor{#2e9e6e}{\\mu}_k & k \\text{ 번째 드래곤볼의 위치 (성분 평균)} \\\\
s & \\text{봉우리 하나의 폭 (표준편차)} \\\\
\\pi_k & \\text{혼합 비중 (볼 } k \\text{ 의 신호 크기)} \\\\
\\gamma_k & \\text{책임도: 지금 이 신호가 볼 } k \\text{ 에서 왔을 사후확률} \\\\
\\mathcal{N} & \\text{정규분포 밀도}, \\; I \\text{ 는 단위행렬}
\\end{array}
\`\`\`

읽는 법은 이렇다. 볼 하나만 있으면 바늘은 곧장 그 볼을 가리킨다. (μ<sub>k</sub> − x)/s². 볼이 여럿이면 바늘은 각 볼을 향한 방향의 가중평균이고, 그 무게가 책임도 γ<sub>k</sub>, 곧 지금 이 신호가 볼 k에서 왔을 사후확률이다. 가까운 볼일수록, 신호가 센 볼일수록 무게가 크다.

{{viz: ch14/score-field}}

### 파이썬

\`\`\`python
import numpy as np

mu = np.array([[-2.5, -1.5], [1.5, -2.0], [-1.0, 2.0], [2.5, 1.5],
               [0.0, 0.0], [-2.0, 0.5], [1.0, -0.5]])       # 봉우리 7개
w = np.array([.18, .14, .16, .14, .12, .13, .13])            # 혼합 비중 (합 1)
s = 0.4                                                       # 봉우리 폭

def p_tilde(x):          # 정규화 안 한 밀도: 상수 1/(2π s²) 를 일부러 뺐다
    d2 = ((x - mu)**2).sum(1)
    return (w * np.exp(-d2 / (2 * s**2))).sum()

def score(x):            # 책임도 가중 평균: Σ γ_k (μ_k − x)/s²
    d2 = ((x - mu)**2).sum(1)
    lg = np.log(w) - d2 / (2 * s**2)
    g = np.exp(lg - lg.max()); g /= g.sum()
    return (g[:, None] * (mu - x)).sum(0) / s**2

def fd(f, x, h=1e-5):    # 유한차분 기울기
    return np.array([(f(x + h * e) - f(x - h * e)) / (2 * h) for e in np.eye(2)])

x = np.array([0.6, 0.9])
print("해석식 스코어       ", score(x).round(4))
print("log p̃ 유한차분      ", fd(lambda u: np.log(p_tilde(u)), x).round(4))
print("log(p̃/Z) 유한차분   ", fd(lambda u: np.log(p_tilde(u) / 123.4), x).round(4))
for x in [np.array([0.6, 0.9]), np.array([3.5, -3.5])]:
    print(x, "|∇p̃| =", f"{np.linalg.norm(fd(p_tilde, x)):.1e}",
          " |∇log p| =", f"{np.linalg.norm(score(x)):.2f}")
# 해석식 스코어        [-3.4203 -5.7833]
# log p̃ 유한차분       [-3.4203 -5.7833]
# log(p̃/Z) 유한차분    [-3.4203 -5.7833]
# [0.6 0.9] |∇p̃| = 2.2e-02  |∇log p| = 6.72
# [ 3.5 -3.5] |∇p̃| = 7.2e-09  |∇log p| = 15.63
\`\`\`

Z를 아무 값(여기서는 123.4)으로 바꿔도 스코어는 한 자리도 변하지 않는다. 구석 (3.5, −3.5)에서 밀도의 기울기는 10⁻⁹ 수준으로 사라지지만, 스코어는 오히려 더 크다.

### 수확

"레이더 바늘은 ∇ₓ log p다. 정규화 상수를 몰라도 만들 수 있고, 벌판에서도 꺼지지 않는다."

### 문제 1. 두 봉우리의 레이더

1차원 혼합 p(x) = 0.8·N(x; 2, 1) + 0.2·N(x; −2, 1)을 생각한다. (가) 스코어 ∇log p(x)를 책임도로 쓴 식으로 유도하고, x = 0에서의 값을 구하라. (나) x = 45에서 log p를 유한차분으로 미분하면 무엇이 나오는가? 해석식은 얼마를 주는가?

#### 함께 풀기

**이서연:** (가)는 금방이에요. 두 가우시안을 더한 것의 로그를 미분하면 각 성분 스코어의 가중평균이에요. x = 0은 두 봉우리의 한가운데니까 (2 − 0)과 (−2 − 0)이 반반 섞여서 0이에요.

**선생님:** 가운데에서 바늘이 멈춘다는 말이네요. 그럼 x = 0에서 걷기 시작한 참가자는 어디로 가요?

**이서연:** 아무 데도요. 기울기가 0인 점(정류점)이니까요.

**김민준:** 근데 위젯에서 비슷한 걸 해 보면 가운데서도 무거운 쪽으로 바늘이 기울던데.

**선생님:** 서연 학생, 가중평균의 무게를 다시 써 봐요. 무게가 N₁/(N₁ + N₂)였어요?

〔S04〕 **이서연:** 아… π가 빠졌어요. γ₁ = 0.8·N₁ / (0.8·N₁ + 0.2·N₂)예요. x = 0에서 N₁ = N₂라서 γ₁ = 0.8이에요. 스코어는 0.8 × 2 + 0.2 × (−2) = 1.2예요.

**이서연:** 가운데는 정류점이 아니에요. 신호가 센 볼 쪽으로 기울어요. 로그의 합을 미분한 게 아니라 합의 로그를 미분한 거라, 비중이 분자와 분모에 같이 남아요.

**선생님:** 그래요. 로그가 곱은 풀어 주지만 합은 못 풀어요. 그래서 비중이 책임도 안에 살아남아요. 민준 학생은 (나)를 해 봤어요?

〔M05〕 **김민준:** 네, 그런데 이상해요. x = 5에서는 −3.000, x = 30에서는 −28.000이 깔끔하게 나오는데, x = 45에서는 nan이 나와요. 스코어가 거기서 정의가 안 되는 건가요?

**선생님:** x = 45에서 p(x) 자체는 얼마쯤이에요?

**김민준:** (45 − 2)²/2가 924.5니까 e^−924.5… 아, float64의 가장 작은 수가 10^−324쯤이니까 0으로 뭉개졌어요. log 0이 −inf고, −inf 빼기 −inf가 nan이에요.

**선생님:** 스코어는 멀쩡해요. 해석식으로는요?

**김민준:** 거기선 γ₁이 사실상 1이니까 (2 − 45)/1 = −43이요. 멀어질수록 직선으로 커지기만 해요. 망가진 건 스코어가 아니라 밀도를 먼저 계산한 제 순서였네요.

**김민준:** 조별 과제 점수를 곱해서 평균 내다가 0점이 하나 끼면 다 날아가는 거랑 같네요. 로그로 먼저 바꿔서 더했어야 했는데.

**선생님:** 실제 코드도 그래서 log-sum-exp로 계산해요. 이 장의 파이썬도 책임도를 로그에서 최댓값을 빼고 계산했어요.

## 순방향 과정: 노이즈가 지형을 뭉갠다

노이즈에서 이미지로 가는 길을 알려면, 거꾸로 이미지가 노이즈가 되는 길부터 알아야 하지 않을까? 데이터에 노이즈를 더하면 분포는 어떻게 변할까? 뭉개진다. 이 뭉개짐을 거꾸로 되돌리는 것이 생성이다.

### 안개의 단계 — 노이즈 스케줄

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

### SDE로 쓰기 — 안개를 짙게 하기

forward process = 안개를 짙게 하는 것. 데이터 한 점 x₀에서 출발해, 매 순간 작은 무작위 발걸음을 더한다. 이것을 확률미분방정식(SDE)으로 쓴다.

\`\`\`latex
d\\textcolor{#6f8fa6}{x} = \\textcolor{#d07a12}{f}(\\textcolor{#6f8fa6}{x}, t)\\, dt + g(t)\\, dW
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x} & \\text{시간 } t \\text{ 의 위치 } x_t \\text{ (} t=0 \\text{ 이 데이터)} \\\\
\\textcolor{#d07a12}{f} & \\text{표류항: 무작위 없이 끌려가는 방향} \\\\
g(t) & \\text{확산(디퓨전) 계수: 안개가 짙어지는 빠르기} \\\\
dW & \\text{브라운 운동의 증분 (작은 한 걸음, 평균 0, 분산 } dt \\text{ 인 가우시안)} \\\\
t & \\text{시간 (클수록 노이즈)}
\\end{array}
\`\`\`

가장 단순한 선택은 표류 없이(f = 0) 노이즈만 쌓는 것이다. 그러면 시간 t의 점은 x<sub>t</sub> = x₀ + σ<sub>t</sub> z, z ~ N(0, I) 이고, σ<sub>t</sub>² 는 그때까지 쌓인 g² 의 합이다. 표류 f = −½β(t)x 를 넣어 원점 쪽으로 줄이면서 노이즈를 더하는 DDPM(잡음 제거 디퓨전 확률 모델, Ho 외 2020) 방식도 같은 틀 안에 있다.

점 하나가 아니라 분포 전체를 보자. x₀ ~ p 에 독립인 가우시안 노이즈를 더했으니, x<sub>t</sub>의 밀도는 p와 가우시안 커널의 합성곱이다.

\`\`\`latex
\\textcolor{#d6479f}{p}_t(\\textcolor{#6f8fa6}{x}) = \\int \\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}_0)\\, \\mathcal{N}(\\textcolor{#6f8fa6}{x};\\, \\textcolor{#6f8fa6}{x}_0, \\sigma_t^2 I)\\, d\\textcolor{#6f8fa6}{x}_0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_t & \\text{안개 수준 } t \\text{ 의 주변분포 (원래 점 } x_0 \\text{ 의 조건을 모두 합쳐 버린 분포)} \\\\
\\textcolor{#d6479f}{p} & \\text{데이터 분포} = p_0 \\\\
\\textcolor{#6f8fa6}{x}_0 & \\text{안개 없는 데이터 점} \\\\
\\textcolor{#6f8fa6}{x} & \\text{안개 낀 점} \\\\
\\sigma_t & \\text{시간 } t \\text{ 까지 쌓인 노이즈의 표준편차}
\\end{array}
\`\`\`

드래곤볼 지형이면 계산이 간단하다. 가우시안과 가우시안의 합성곱은 가우시안이고, 분산이 더해진다. 폭 s였던 봉우리는 폭 √(s² + σ<sub>t</sub>²)가 된다. 볼들 사이 간격보다 이 폭이 커지면 일곱 봉우리가 하나의 언덕으로 합쳐진다.

충분히 더하면 순수한 가우시안 — 완전한 안개. 분포를 넓게 섞는 쪽, 무지의 방향이다. 가능성이 넓어지고, 불확실성이 커진다.

{{viz: ch14/noise-annealing}}

### 트위디 공식 — 안개 속 레이더가 가리키는 곳

안개 낀 지형의 레이더 ∇log p<sub>t</sub>는 무엇을 가리킬까. 답이 놀랍도록 깔끔하다.

\`\`\`latex
\\mathbb{E}[\\textcolor{#6f8fa6}{x}_0 \\mid \\textcolor{#6f8fa6}{x}_t = \\textcolor{#6f8fa6}{x}] = \\textcolor{#6f8fa6}{x} + \\sigma_t^2\\, \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\mathbb{E}[\\,\\cdot \\mid \\cdot\\,] & \\text{조건부 기댓값} \\\\
\\textcolor{#6f8fa6}{x}_0 & \\text{안개 없는 원래 점} \\\\
\\textcolor{#6f8fa6}{x}_t & \\text{안개 낀 관측 (여기서는 값 } x \\text{)} \\\\
\\sigma_t & \\text{안개의 표준편차} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{안개 낀 지형의 스코어}
\\end{array}
\`\`\`

트위디 공식이다. Herbert Robbins가 1956년 논문에서 Maurice Tweedie에게 공을 돌리며 소개했고, Bradley Efron이 2011년에 다시 널리 알렸다. 안개 낀 점 x에서 스코어 방향으로 σ<sub>t</sub>² 만큼 걸어가면, "안개가 걷혔을 때 볼이 있었을 법한 위치의 평균"에 닿는다. 레이더 바늘은 노이즈를 걷어낸 추정치를 가리키고 있다. (표류가 있는 DDPM식 x<sub>t</sub> = α<sub>t</sub>x₀ + σ<sub>t</sub>z 이면 좌변이 α<sub>t</sub> E[x₀ | x<sub>t</sub>]로 바뀔 뿐이다.)

증명은 한 줄이다. p<sub>t</sub>(x) = ∫ p(x₀) N(x; x₀, σ<sub>t</sub>²) dx₀ 를 x로 미분하면 가우시안 커널의 미분 −(x − x₀)/σ<sub>t</sub>² 가 적분 안으로 들어오고, p<sub>t</sub>로 나누면 사후 평균 E[x₀ − x | x] / σ<sub>t</sub>² 가 남는다.

### 매니폴드 가설과의 연결

안개가 완전히 걷힌 상태에서 참가자가 도달하는 곳 — 드래곤볼의 위치 — 이 데이터 매니폴드다. 안개 속에서는 매니폴드를 벗어나 있었지만, 걷는 과정이 매니폴드 위로 되돌려준다.

forward process = 매니폴드를 떠남 (노이즈 추가) reverse process = 매니폴드로 귀환 (스코어를 따라 걸음)

"곁가지라고 생각했던 것이 핵심이었다."

### 파이썬

\`\`\`python
import numpy as np
rng = np.random.default_rng(0)

# 데이터: 두 점 ±1 (반반).  안개: x_σ = x + σ z
sigma, n = 0.5, 4_000_000
x = rng.choice([-1.0, 1.0], n)
xs = x + sigma * rng.normal(size=n)

def score(y):            # p_σ = ½N(−1,σ²) + ½N(1,σ²) 의 스코어
    return (np.tanh(y / sigma**2) - y) / sigma**2

for y in [0.3, 0.8, 1.5]:
    near = np.abs(xs - y) < 0.01
    print(f"y={y}:  E[x|y] 표본 {x[near].mean():.3f}   트위디 y+σ²∇log p {y + sigma**2 * score(y):.3f}")
# y=0.3:  E[x|y] 표본 0.832   트위디 y+σ²∇log p 0.834
# y=0.8:  E[x|y] 표본 0.997   트위디 y+σ²∇log p 0.997
# y=1.5:  E[x|y] 표본 1.000   트위디 y+σ²∇log p 1.000
\`\`\`

안개 낀 점 0.3을 본 사람은 "원래 +1이었을 가능성이 크지만 확신은 못 한다"고 말한다. 그 망설임까지 담은 평균 0.83을 스코어 한 번으로 얻는다.

### 수확

"노이즈를 더하면 분포는 가우시안과 합성곱된다. 그 뭉개진 지형의 스코어는 '안개를 걷어낸 평균 위치'를 가리킨다."

### 문제 2. 안개 낀 가우시안

데이터가 x₀ ~ N(0, 1)이고, 안개 σ = 2를 더해 x = x₀ + 2z를 관측했다. (가) 안개 낀 분포의 스코어를 구하라. (나) 트위디 공식으로 x = 3일 때 E[x₀ | x]를 구하고, 베이즈 정리로 직접 구한 값과 비교하라.

#### 함께 풀기

**이서연:** 데이터가 N(0, 1)이니까 스코어는 −x예요. 트위디에 넣으면 E[x₀ | x = 3] = 3 + 4 × (−3) = −9예요.

**선생님:** 관측이 +3인데 원래 값의 평균이 −9라고요?

**이서연:** …그러네요. 데이터는 거의 [−3, 3] 안에 사는데 −9는 말이 안 돼요. 공식은 맞게 썼는데요.

**김민준:** 나는 시뮬레이션으로 뽑아서 x가 3 근처인 것만 모아 x₀ 평균을 냈는데 0.60이 나왔어.

**선생님:** 트위디 공식의 스코어는 어느 분포의 스코어였어요?

〔S08〕 **이서연:** p<sub>t</sub>, 안개 낀 분포요. 저는 데이터 p₀의 스코어를 넣었어요. 안개 낀 분포는 N(0, 1)과 N(0, 4)의 합성곱이라 N(0, 5)예요. 스코어는 −x/5, x = 3에서 −0.6이에요. 그러면 3 + 4 × (−0.6) = 0.6이에요.

**이서연:** 베이즈로 해도 사후평균은 1/(1 + 4) × 3 = 0.6이에요. 세 값이 다 맞아요.

**선생님:** 분산이 더해진다는 것, 안개 위젯의 √(s₀² + σ²)와 같은 이야기예요.

**이서연:** 확률론 수업에서 독립 합의 분산을 계산할 때는 절대 안 틀리는데, 기호가 p<sub>t</sub>로 바뀌니까 t를 떼어 먹었어요. 해석학에서 f와 f∘g의 도함수를 섞는 실수랑 같은 종류예요.

## 역방향 SDE: 안개를 거꾸로 걷는 데 필요한 재료

안개를 짙게 하는 식은 알았다. 그 식을 시간을 거꾸로 돌려 풀 수 있을까? 거꾸로 돌리려면 무엇이 더 있어야 할까?

### 역방향 SDE

1982년 Brian Anderson은 순방향 확산에 짝이 되는 역방향 식을 보였다. 시간 T(짙은 안개)에서 0(데이터)으로 거슬러 가며 다음을 풀면, 매 순간의 분포가 순방향의 p<sub>t</sub>와 정확히 같다.

\`\`\`latex
d\\textcolor{#6f8fa6}{x} = \\big[\\textcolor{#d07a12}{f}(\\textcolor{#6f8fa6}{x}, t) - g(t)^2\\, \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})\\big]\\, dt + g(t)\\, d\\bar{W}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x} & \\text{거꾸로 걷는 참가자의 위치} \\\\
\\textcolor{#d07a12}{f} & \\text{순방향의 표류항} \\\\
g(t) & \\text{순방향의 확산 계수} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{안개 수준 } t \\text{ 의 스코어 (레이더)} \\\\
dt & \\text{음수 (시간을 } T \\text{ 에서 } 0 \\text{ 으로 거슬러 간다)} \\\\
d\\bar{W} & \\text{역방향 브라운 운동 (바람)}
\\end{array}
\`\`\`

dt가 음수라는 것을 놓치면 안 된다. −g²∇log p<sub>t</sub> dt 는 실제로는 +g² × (스코어) × |dt|, 곧 레이더 방향으로의 걸음이다. 걸음 폭 g²|dt|는 안개가 그만큼 걷히는 양이다. 그리고 순방향과 같은 크기 g의 바람이 분다.

### 바람 — 역방향 노이즈

참가자는 레이더 방향으로 걸으면서 바람에 비틀거린다. 이 비틀거림을 그냥 없애 버리면 어떻게 될까.

레이더를 따라 같은 보폭으로 걷되 바람만 끄면, 모든 참가자가 필요 이상으로 끌려간다. 가운데 가까이 있는 볼 몇 개에 몰리고, 각 볼 안에서도 한 점으로 뭉친다. 아래 위젯의 세 번째 버튼이 그 결과다. 일곱 볼 중 가운데 볼에 64%가 몰렸다.

그런데 주최 측에는 다른 방법이 있다. 바람을 끄는 대신 보폭을 절반으로 줄이는 것이다.

\`\`\`latex
d\\textcolor{#6f8fa6}{x} = \\big[\\textcolor{#d07a12}{f}(\\textcolor{#6f8fa6}{x}, t) - \\tfrac{1}{2}\\, g(t)^2\\, \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})\\big]\\, dt
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x} & \\text{참가자의 위치} \\\\
\\textcolor{#d07a12}{f} & \\text{순방향의 표류항} \\\\
g(t) & \\text{순방향의 확산 계수} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{안개 수준 } t \\text{ 의 스코어}
\\end{array}
\`\`\`

확률흐름 ODE(probability flow ODE)다(Song 외, 2021). 무작위가 전혀 없는 결정론적 식인데도, 매 순간의 분포가 역방향 SDE와 똑같이 p<sub>t</sub>다. 바람이 하던 "퍼뜨리는 일"을 보폭의 절반이 대신 해 주기 때문이다. DDIM(잡음 제거 디퓨전 암묵적 모델)이라는 빠른 샘플러가 이 ODE를 시간을 잘게 끊어 푸는(이산화) 한 방식이다.

그러면 다양성은 어디서 오는가. ODE에서는 출발점이 도착점을 완전히 정한다. 다양성은 출발점, 곧 짙은 안개 속에 흩어진 초기 노이즈에서 온다. 수천 명이 서로 다른 곳에서 출발하니 서로 다른 볼에, 올바른 비율로 도착한다. 바람은 다양성의 원천이 아니라, 같은 분포에 이르는 또 하나의 걸음 방식이다.

"다양성은 출발점의 흩어짐에서 온다. 비틀거림은 그 위에 얹을 수 있는 선택이다."

### 바람이 꼭 필요한 경우 — 랑주뱅

그렇다고 노이즈가 언제나 선택인 것은 아니다. 안개가 걷히는 과정 없이, 고정된 지형 p 하나 위에서 샘플을 뽑는 랑주뱅 동역학을 보자.

\`\`\`latex
d\\textcolor{#6f8fa6}{x} = \\textcolor{#b0892a}{\\nabla_{x} \\log p}(\\textcolor{#6f8fa6}{x})\\, dt + \\sqrt{2}\\, dW
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x} & \\text{걷는 점의 위치} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p} & \\text{고정된 지형의 스코어} \\\\
dW & \\text{브라운 운동의 증분} \\\\
\\sqrt{2} & \\text{정상분포(시간이 지나도 변하지 않는 분포, 정규분포와 다름)가 정확히 } p \\text{ 가 되게 하는 계수}
\\end{array}
\`\`\`

오래 걸으면 점들의 분포가 p에 수렴한다. 여기서 노이즈를 끄면 그냥 경사 상승이라, 모두 가까운 봉우리 꼭대기에 멈춘다. 샘플링이 아니라 봉우리 찾기다. 노이즈의 계수도 √2여야 한다. 1로 바꾸면 분산이 절반인 엉뚱한 분포에 머문다(아래 문제 3). Song과 Ermon(2019)의 첫 스코어 기반 생성 모델은 이 랑주뱅을 안개 수준별로 차례로 돌렸다. 안개가 짙은 지형에서 몇 걸음, 조금 걷힌 지형에서 몇 걸음. annealed Langevin dynamics다.

{{viz: ch14/reverse-diffusion}}

### 파이썬

\`\`\`python
import numpy as np

mu = np.array([[-2.5, -1.5], [1.5, -2.0], [-1.0, 2.0], [2.5, 1.5],
               [0.0, 0.0], [-2.0, 0.5], [1.0, -0.5]])
w = np.array([.18, .14, .16, .14, .12, .13, .13]); s0 = 0.4

def score(x, var):                        # 안개 낀 혼합의 스코어 (봉우리 분산 s0²+σ²)
    d = mu[None] - x[:, None]
    lg = np.log(w) - (d**2).sum(-1) / (2 * var)
    g = np.exp(lg - lg.max(1, keepdims=True)); g /= g.sum(1, keepdims=True)
    return (g[..., None] * d).sum(1) / var

def walk(rule, n=4000, N=500, smax=8.0, smin=0.01, seed=1):
    r = np.random.default_rng(seed)
    x = r.normal(size=(n, 2)) * np.sqrt(smax**2 + s0**2)   # 출발: 짙은 안개 속 노이즈
    sig = np.geomspace(smax, smin, N + 1)
    for i in range(N):
        d = sig[i]**2 - sig[i + 1]**2                        # 이번 걸음에 걷히는 안개 (g² dt)
        sc = score(x, s0**2 + sig[i]**2)
        if rule == "SDE":      x = x + d * sc + np.sqrt(d) * r.normal(size=x.shape)
        if rule == "ODE":      x = x + 0.5 * d * sc
        if rule == "바람만 끔": x = x + d * sc
    k = np.argmin(((x[:, None] - mu[None])**2).sum(-1), 1)
    frac = np.bincount(k, minlength=7) / n
    spread = np.sqrt(((x - mu[k])**2).sum(1).mean() / 2)
    return frac, spread

print("참 비중     ", w)
for rule in ["SDE", "ODE", "바람만 끔"]:
    f, sp = walk(rule)
    print(f"{rule:8s}", f.round(2), f"퍼짐 {sp:.2f}", f"총변동 {0.5 * abs(f - w).sum():.3f}")
# 참 비중      [0.18 0.14 0.16 0.14 0.12 0.13 0.13]
# SDE      [0.17 0.14 0.17 0.15 0.12 0.12 0.13] 퍼짐 0.39 총변동 0.017
# ODE      [0.17 0.15 0.16 0.14 0.13 0.12 0.13] 퍼짐 0.39 총변동 0.019
# 바람만 끔    [0.01 0.   0.02 0.   0.64 0.13 0.2 ] 퍼짐 0.24 총변동 0.586
\`\`\`

SDE와 ODE는 봉우리 비율도, 봉우리 안의 퍼짐(참값 0.4)도 맞춘다. 바람만 끈 걸음은 둘 다 틀린다. 총변동은 두 비율 표의 차이 절댓값을 더해 반으로 나눈 값이고, 0이면 두 표가 똑같다.

### 수확

"역방향 SDE에 필요한 새 재료는 스코어 하나다. 바람을 끄고 보폭을 절반으로 줄이면 결정론적인 확률흐름 ODE가 되고, 그래도 분포는 같다. 다양성은 초기 노이즈에서 온다."

### 문제 3. 바람을 끄면

(가) 1차원 표준정규 p = N(0, 1) 위의 랑주뱅 dx = −x dt + √2 dW를 오래 돌리면 분포는? 노이즈를 끄면? 노이즈 계수를 √2 대신 1로 하면? (나) 이번에는 안개가 걷히는 흐름을 생각한다. 데이터 N(0, 1)에 표류 없이 노이즈를 쌓아 p<sub>t</sub> = N(0, 1 + t)가 되게 했다. 확률흐름 ODE를 t = 3에서 0까지 거꾸로 풀면 N(0, 4)에서 뽑은 출발점이 어떤 분포로 가는가?

#### 함께 풀기

〔M05〕 **김민준:** (가)부터 돌렸어요. √2일 때 분산 1.004, 노이즈 끄면 분산 0이에요. 전부 0에 모여요. 그러니까 (나)도 뻔해요. ODE는 노이즈가 없으니까 똑같이 한 점으로 무너져요. 결정론적인 걸로는 샘플링이 안 돼요.

**이서연:** 계수 1인 경우는 나는 안 돌려 봤는데, 노이즈가 있긴 하니까 결국 N(0, 1)로 가지 않을까? 노이즈 크기는 수렴 속도만 바꿀 것 같아.

**선생님:** 둘 다 확인해 봐요. 민준 학생, 계수 1은 얼마 나왔어요?

**김민준:** 0.503이요. 절반이에요.

**이서연:** 속도만이 아니네요. 정상분포 자체가 바뀌어요.

**선생님:** 분포가 시간에 따라 안 변하려면, 표류가 안으로 끄는 힘과 노이즈가 밖으로 퍼뜨리는 힘이 맞아야 해요. 포커-플랑크 방정식(점들의 분포가 시간에 따라 어떻게 흐르는지 적은 식)이 그 균형을 써요. dx = −a x dt + b dW의 정상분포는 N(0, b²/2a)예요.

〔S09〕 **이서연:** a = 1, b = √2면 분산 1이고 b = 1이면 ½이에요. √2는 장식이 아니라 p를 정상분포로 만드는 유일한 값이에요. 노이즈가 있다는 것만으로 목표 분포가 정해지지는 않아요. 계수까지 맞아야 해요.

**선생님:** 이제 (나)예요. 민준 학생, 확률흐름 ODE를 써 봐요.

**김민준:** f = 0, g² = 1이니까 dx/dt = −½ ∇log p<sub>t</sub>(x) = x / (2(1 + t))예요. 풀면 x(t) ∝ √(1 + t)네요. t = 3에서 0으로 오면 x(0) = x(3) × √(1/4) = x(3)/2예요.

〔M09〕 **김민준:** N(0, 4)를 반으로 줄이면 N(0, 1)이에요. 무너지지 않아요. 노이즈 없이도 정확히 데이터 분포로 가요.

**선생님:** 랑주뱅에서 노이즈를 끈 것과 뭐가 달라요?

**김민준:** 랑주뱅은 지형이 하나로 고정돼 있어서 노이즈를 끄면 모두 꼭대기로 가요. 확률흐름 ODE는 지형이 매 순간 바뀌고, 보폭도 절반이에요. 출발점이 N(0, 4)로 흩어져 있으니까 그 흩어짐이 그대로 줄어들 뿐 사라지지 않아요.

**김민준:** 발표 순서 정할 때 제비뽑기를 한 번 하고 나면 그 뒤는 정해진 규칙대로만 가도 되잖아요. 무작위는 처음 한 번이면 충분한 거예요.

**선생님:** 좋은 비유예요. "노이즈를 끄면 무너진다"는 고정된 지형 위의 랑주뱅에 대한 말이에요. 디퓨전의 역방향에는 노이즈 없는 길이 따로 있어요.

### 문제 4. 거꾸로 도는 OU (킬러)

순방향으로 오른슈타인–울렌벡(OU) 과정 dx = −x dt + √2 dW를 쓴다. 데이터는 x₀ ~ N(3, 0.5²)이다. (가) p<sub>t</sub>의 평균과 분산을 구하라. t = 5에서 p<sub>t</sub>는 무엇에 가까운가? (나) 역방향 SDE를 쓰고, 역방향 시간 τ = T − t로 바꿔 시뮬레이션할 식을 적어라. (다) x<sub>5</sub> ~ N(0, 1)에서 출발해 거꾸로 풀어, 데이터 분포가 복원되는지 확인하라.

#### 함께 풀기

**이서연:** (가)는 선형이라 쉬워요. 평균은 3e^−t, 분산은 0.25e^−2t + (1 − e^−2t)예요. t = 5면 평균 0.020, 분산 0.99997이라 거의 N(0, 1)이에요.

**선생님:** 좋아요. (나)는요?

**이서연:** 역방향은 표류를 뒤집으면 돼요. 순방향이 −x니까 τ로 바꾸면 dx = x dτ + √2 dW예요.

**김민준:** 나는 Anderson 식대로 썼어. dx = [f − g²∇log p<sub>t</sub>] dt + g dW̄ 에 f = −x, g² = 2를 넣으면 dx = [−x − 2∇log p<sub>t</sub>] dt + √2 dW̄. 이걸 그대로 dt = +0.005로 돌렸어.

**선생님:** 둘 다 (다)를 돌려 봤어요?

**이서연:** 제 식은 끝에서 평균 0.15, 표준편차 206이 나왔어요. 데이터는 3 ± 0.5인데요.

〔M05〕 **김민준:** 제 건 평균 −115, 표준편차 800이에요. 더 심해요.

**선생님:** 서연 학생 식부터 봐요. 표류만 뒤집으면 순방향 식을 그대로 시간 반대로 돌린 거예요. 206이라는 숫자에서 뭐가 보여요?

**이서연:** dx = x dτ면 x가 e^τ배로 커져요. e⁵이 148이고, 노이즈까지 불어나니까 200대가 나오는 게 맞아요. 제 식은 흩어지게만 하고 모으는 힘이 없어요.

〔S08〕 **이서연:** 순방향에서 노이즈는 분포를 퍼뜨리는데, 표류를 뒤집어도 노이즈는 여전히 퍼뜨려요. 그걸 되돌리려면 퍼진 것을 도로 모으는 항이 따로 있어야 해요. 그게 −g²∇log p<sub>t</sub>예요. 노이즈의 부호는 못 뒤집으니까 스코어가 그 대가를 치르는 거네요.

**선생님:** 그래요. 이제 민준 학생 식은 항은 다 있어요. 무엇이 틀렸을까요?

**김민준:** Anderson 식에서 dt는… 시간을 거슬러 가니까 음수예요. 저는 양수로 넣었으니까 표류 전체의 부호가 뒤집혔어요. 스코어 항이 모으는 대신 밀어냈고요. 그래서 서연이보다 더 크게 터졌어요.

**김민준:** τ = T − t로 바꾸면 dt = −dτ니까 dx = [x + 2∇log p<sub>T−τ</sub>(x)] dτ + √2 dW예요. 스코어는 가우시안이라 −(x − 3e^−t)/v<sub>t</sub>로, 식 하나로 바로 적히는 꼴(닫힌꼴)이고요.

〔M10〕 **김민준:** 다시 돌렸어요. 평균 2.996, 표준편차 0.505예요. 3과 0.5가 돌아왔어요!

**이서연:** 확인해 보면 τ 쪽 표류 x + 2∇log p에서, 앞의 x는 순방향 표류를 뒤집은 것이고 뒤의 2∇log p는 노이즈를 되감는 것이야. 둘 중 하나만 있으면 안 돼.

**김민준:** 보고서 수정 이력을 거꾸로 되돌릴 때랑 같네요. 지운 문장은 되살릴 수 있는데, 누가 커피 쏟아서 번진 부분은 "원래 뭐였을지" 추측하는 도구가 따로 있어야 하잖아요. 스코어가 그 추측 도구고요.

〔T14〕 **선생님:** 이 문제에 이 장이 다 들어 있어요. 역방향에 필요한 새 재료는 스코어 하나라는 것, 그 스코어가 노이즈의 퍼뜨림을 되감는다는 것, 그리고 시간을 거슬러 갈 때 부호를 지키는 것. 신경망은 여기서 닫힌꼴로 쓴 스코어를 대신 배울 뿐이에요.

**이서연:** 편미분방정식 수업에서 열방정식은 앞으로는 잘 풀리는데 시간을 거꾸로 풀면 불량조건 문제가 된다고 배웠어요. 번진 것을 되돌리는 건 식만 뒤집어서는 안 되는 일이라서, 스코어라는 추가 정보가 붙어야 하는 거네요.

## 잡음 제거 스코어 매칭: 노이즈를 섞은 기록으로 레이더를 만든다

역방향 식에 필요한 새 재료는 각 안개 수준의 스코어 하나였다. 그런데 우리는 진짜 스코어를 모른다. 모르는 것을 신경망 s<sub>θ</sub>(x, t)에게 어떻게 흉내 내라고 가르칠까? 노이즈를 직접 섞어 본 기록만으로 그렇게 할 수 있다.

### 레이더 제작법 — 과거 대회의 기록

진짜 문제는 드래곤볼의 정확한 위치를 모른다는 것이다. 가진 건 과거 대회의 기록뿐이다:
  "이 볼에서 출발해 안개 속으로 이만큼 떠밀려 간 사람이
  이 지점에 서 있었다."
그 사람에게 "돌아가는 방향"은 분명하다. 자기가 떠나온 볼 쪽이다. 이 기록들로 신경망을 훈련시킨다. 임의의 (지점, 안개 수준) 쌍에서 "레이더가 가리켜야 할 방향"을 추정하게 만든다.

### 잡음 제거 스코어 매칭

기록 하나는 (x₀, z, t) 세 개로 이루어진다. 볼 x₀, 노이즈 z, 안개 수준 t. 그 사람이 서 있던 곳은 x<sub>t</sub> = x₀ + σ<sub>t</sub>z 이고, 그 한 사람에게 맞는 레이더 방향은 가우시안 커널의 스코어다.

\`\`\`latex
\\mathcal{L}(\\textcolor{#2e9e6e}{\\theta}) = \\mathbb{E}_{t,\\, \\textcolor{#6f8fa6}{x}_0,\\, \\textcolor{#8a7fb0}{z}} \\Big\\| \\textcolor{#b0892a}{s}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_t, t) - \\Big(-\\frac{\\textcolor{#6f8fa6}{x}_t - \\textcolor{#6f8fa6}{x}_0}{\\sigma_t^2}\\Big) \\Big\\|^2, \\qquad \\textcolor{#6f8fa6}{x}_t = \\textcolor{#6f8fa6}{x}_0 + \\sigma_t \\textcolor{#8a7fb0}{z}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\mathcal{L} & \\text{훈련 손실 (보조 기호)} \\\\
\\textcolor{#b0892a}{s}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{신경망이 만든 레이더} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{신경망의 가중치} \\\\
\\textcolor{#6f8fa6}{x}_0 & \\text{데이터 점 (떠나온 볼)} \\\\
\\textcolor{#6f8fa6}{x}_t & \\text{안개 속에 선 위치} \\\\
\\textcolor{#8a7fb0}{z} & \\text{표준정규 노이즈} \\\\
\\sigma_t & \\text{안개의 표준편차} \\\\
-(x_t - x_0)/\\sigma_t^2 & \\text{조건부 스코어 } = -z/\\sigma_t \\text{ (한 사람에게 맞는 방향)}
\\end{array}
\`\`\`

여기서 조심할 것이 있다. 타깃 −(x<sub>t</sub> − x₀)/σ<sub>t</sub>² 는 조건부 스코어다. "이 사람은 볼 x₀에서 왔다"를 알 때의 방향이다. 그런데 신경망은 x₀를 보지 못한다. 보는 것은 x<sub>t</sub>와 t뿐이다. 같은 지점에 서로 다른 볼에서 온 사람들이 겹쳐 서 있으면, 신경망은 그들의 방향을 하나로 답할 수밖에 없다. 제곱 오차를 최소로 하는 하나의 답은 평균, 곧 조건부 기댓값이다.

\`\`\`latex
\\textcolor{#b0892a}{s}^{*}(\\textcolor{#6f8fa6}{x}, t) = \\mathbb{E}\\Big[-\\frac{\\textcolor{#6f8fa6}{x}_t - \\textcolor{#6f8fa6}{x}_0}{\\sigma_t^2} \\,\\Big|\\, \\textcolor{#6f8fa6}{x}_t = \\textcolor{#6f8fa6}{x}\\Big] = \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#b0892a}{s}^{*} & \\text{손실을 최소로 하는 레이더} \\\\
\\textcolor{#6f8fa6}{x}_t,\\ \\textcolor{#6f8fa6}{x}_0 & \\text{안개 속 위치, 떠나온 볼} \\\\
\\textcolor{#6f8fa6}{x} & \\text{신경망이 보는 위치} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{주변 스코어 (어느 볼에서 왔는지 모르는 채 모두 합친 분포의 스코어, 진짜 레이더)}
\\end{array}
\`\`\`

두 번째 등호가 앞에서 본 트위디 공식이다. 조건부 방향들의 평균이 주변 스코어다. 그래서 진짜 스코어를 한 번도 보지 않고도, 노이즈를 섞어 본 기록만으로 진짜 레이더를 배운다. Pascal Vincent(2011)가 보인 잡음 제거 스코어 매칭이다. Ho 외(2020)의 DDPM은 같은 것을 노이즈 z를 맞히는 문제 ‖ε<sub>θ</sub> − z‖²로 쓴다. 둘 사이는 ε<sub>θ</sub> = −σ<sub>t</sub> s<sub>θ</sub> 로 옮겨진다.

### 이 사영은 무엇으로 재는가

제곱 오차의 최솟값이 조건부 기댓값이라는 사실은 "x<sub>t</sub>의 함수들이 이루는 공간 위로의 직교사영"이라는 기하학적 사실이다. 분포를 모형 위로 옮기는 사영과 모양이 같다. 큰 세계의 대상을 작은 세계의 가장 가까운 점으로 옮긴다. 다만 자가 다르다. 분포를 모형 위로 옮기는 두 사영, 곧 KL(q‖p)을 줄이는 e-사영과 KL(p‖q)을 줄이는 m-사영은 KL 발산(두 분포가 같은 사건에 매기는 확률이 얼마나 다른지 재는 양)으로 가까움을 잰다. 스코어 매칭은 두 스코어 필드의 제곱 차이를 p<sub>t</sub>로 평균 낸 양, 피셔 발산으로 잰다.

\`\`\`latex
\\textcolor{#c2398a}{D}_{F}(\\textcolor{#d6479f}{p}_t \\,\\|\\, \\textcolor{#7f8f10}{q}_t) = \\mathbb{E}_{\\textcolor{#d6479f}{p}_t} \\big\\| \\nabla_{x} \\log \\textcolor{#d6479f}{p}_t(\\textcolor{#6f8fa6}{x}) - \\nabla_{x} \\log \\textcolor{#7f8f10}{q}_t(\\textcolor{#6f8fa6}{x}) \\big\\|^2
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{D}_{F} & \\text{피셔 발산} \\\\
\\textcolor{#d6479f}{p}_t & \\text{안개 낀 데이터 분포} \\\\
\\textcolor{#7f8f10}{q}_t & \\text{신경망 레이더가 정하는 모형 분포 (같은 안개)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 공간의 점}
\\end{array}
\`\`\`

그러면 KL과는 아무 관계가 없을까. 있다. 그것도 아주 깊이. p와 q에 똑같이 안개를 더해 가면 둘은 점점 구분이 안 되고, KL은 줄어든다. 그 줄어드는 속도가 정확히 피셔 발산의 절반이다.

\`\`\`latex
\\begin{aligned} \\frac{d}{d\\tau}\\, \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}_\\tau \\,\\|\\, \\textcolor{#7f8f10}{q}_\\tau) &= -\\frac{1}{2}\\, \\textcolor{#c2398a}{D}_{F}(\\textcolor{#d6479f}{p}_\\tau \\,\\|\\, \\textcolor{#7f8f10}{q}_\\tau) \\\\ \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p} \\,\\|\\, \\textcolor{#7f8f10}{q}) &= \\frac{1}{2} \\int_0^\\infty \\textcolor{#c2398a}{D}_{F}(\\textcolor{#d6479f}{p}_\\tau \\,\\|\\, \\textcolor{#7f8f10}{q}_\\tau)\\, d\\tau \\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\tau & \\text{더한 노이즈의 분산 } (\\sigma^2) \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#c2398a}{D}_{F} & \\text{피셔 발산} \\\\
\\textcolor{#d6479f}{p}_\\tau,\\ \\textcolor{#7f8f10}{q}_\\tau & \\text{분산 } \\tau \\text{ 의 가우시안 노이즈를 더한 데이터·모형 분포}
\\end{array}
\`\`\`

드 브루인 항등식(엔트로피, 곧 분포의 평균 놀라움이 노이즈에 따라 변하는 속도가 피셔 정보, 곧 스코어 크기의 제곱을 평균 낸 값이라는 식)의 KL판이다(Lyu, 2009). 두 번째 식은 첫 번째를 τ = 0부터 ∞까지 적분한 것이다. 안개가 무한히 짙으면 둘 다 같은 흐린 가우시안이 되어 KL이 0이다. 모든 안개 수준에서 스코어 매칭을 알맞은 비중으로 합하면, 그것이 곧 KL을 줄이는 일, 최대우도(모형이 데이터에 주는 확률을 가장 크게 하기)가 된다. 안개 수준 하나의 스코어 매칭은 KL로 재는 사영과 자가 다르지만, 모든 안개 수준을 합치면 같은 KL로 돌아온다.

### 변분추론으로 보기 — DDPM의 ELBO

Ho 외(2020)는 같은 모델을 변분추론으로 유도했다. 데이터의 로그 우도가 넘을 수 없는 아래 경계인 ELBO(증거 하한, evidence lower bound)를 올리는 방식이다. 순방향 과정 x₀ → x₁ → … → x<sub>T</sub>를 잠재변수로 보고, 역방향 모형 q<sub>θ</sub>(x<sub>t−1</sub> | x<sub>t</sub>)를 학습한다. (문헌에서는 순방향을 q, 모형을 p<sub>θ</sub>로 쓴다. 이 책은 p = 현실, q = 모형을 지키므로 이름을 바꿨다.)

\`\`\`latex
\\begin{aligned} \\log \\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_0) \\ge \\textcolor{#b58a00}{\\mathrm{ELBO}} = \\mathbb{E}\\Big[&\\log \\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_0 \\mid \\textcolor{#6f8fa6}{x}_1) \\\\ &- \\sum_{t=2}^{T} \\textcolor{#c2398a}{\\mathrm{KL}}\\big(\\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}_{t-1} \\mid \\textcolor{#6f8fa6}{x}_t, \\textcolor{#6f8fa6}{x}_0) \\,\\|\\, \\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_{t-1} \\mid \\textcolor{#6f8fa6}{x}_t)\\big) \\\\ &- \\textcolor{#c2398a}{\\mathrm{KL}}\\big(\\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}_T \\mid \\textcolor{#6f8fa6}{x}_0) \\,\\|\\, \\textcolor{#139696}{\\pi}(\\textcolor{#6f8fa6}{x}_T)\\big)\\Big] \\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{q}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{역방향 모형 (신경망)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{신경망의 가중치} \\\\
\\textcolor{#b58a00}{\\mathrm{ELBO}} & \\text{증거 하한} \\\\
\\textcolor{#d6479f}{p}(x_{t-1} \\mid x_t, x_0) & \\text{원래 볼 } x_0 \\text{ 를 알 때의 한 걸음 역방향 (가우시안, 닫힌꼴)} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#139696}{\\pi} & \\text{출발 분포 } N(0, I) \\text{ (사전분포)} \\\\
\\textcolor{#6f8fa6}{x}_0, \\dots, \\textcolor{#6f8fa6}{x}_T & \\text{데이터에서 노이즈까지의 사슬}
\\end{array}
\`\`\`

변분추론과 같은 구조다. 잠재변수의 사후분포를 정확히 못 구하니, 하한을 올린다. 가운데 KL 항들은 가우시안끼리의 KL이라 평균의 차이만 남고, 정리하면 앞의 잡음 제거 스코어 매칭(노이즈 맞히기)에 시간별 비중을 붙인 것이 된다. Ho 외는 그 비중을 떼어 낸 단순한 손실이 더 좋은 그림을 만든다는 것을 실험으로 보였다. Kingma와 Gao(2023)는 여러 디퓨전 손실이 모두 "노이즈 수준별 ELBO의 가중 적분"으로 읽힌다는 것을 보였다. 앞의 KL 적분식과 같은 이야기를 변분추론 쪽에서 한 것이다.

### 파이썬

\`\`\`python
import numpy as np
rng = np.random.default_rng(0)

# (1) 잡음 제거 스코어 매칭의 최소해 = 주변 스코어
#     데이터 ±1, 안개 σ=0.5. 조건부 타깃 −(x_σ − x)/σ² 를 x_σ 구간별로 평균낸다.
sigma, n = 0.5, 4_000_000
x = rng.choice([-1.0, 1.0], n)
xs = x + sigma * rng.normal(size=n)
target = -(xs - x) / sigma**2
for y in [0.0, 0.3, 1.0]:
    near = np.abs(xs - y) < 0.02
    print(f"y={y}: 조건부 타깃 평균 {target[near].mean():6.3f}   "
          f"주변 스코어 {(np.tanh(y / sigma**2) - y) / sigma**2:6.3f}")

# (2) 드 브루인 꼴: 안개가 짙어질 때 KL 이 줄어드는 속도 = −½ × 피셔 발산
#     p = N(0,1), q = N(1,4) 에 똑같이 분산 τ 의 노이즈를 더한다.
def kl(m1, v1, m2, v2):
    return 0.5 * (np.log(v2 / v1) + (v1 + (m1 - m2)**2) / v2 - 1)
tau, h = 0.5, 1e-4
dkl = (kl(0, 1 + tau + h, 1, 4 + tau + h) - kl(0, 1 + tau - h, 1, 4 + tau - h)) / (2 * h)
y = rng.normal(0, np.sqrt(1 + tau), n)
fisher_div = np.mean((-y / (1 + tau) + (y - 1) / (4 + tau))**2)
print(f"dKL/dτ = {dkl:.4f}   −½·피셔 발산 = {-0.5 * fisher_div:.4f}")
# y=0.0: 조건부 타깃 평균 -0.028   주변 스코어  0.000
# y=0.3: 조건부 타깃 평균  2.112   주변 스코어  2.135
# y=1.0: 조건부 타깃 평균 -0.003   주변 스코어 -0.003
# dKL/dτ = -0.1728   −½·피셔 발산 = -0.1725
\`\`\`

y = 0.3의 조건부 타깃은 +2.8(볼 +1에서 온 사람)과 −5.2(볼 −1에서 온 사람) 둘뿐인데, 평균은 2.1이다. 구간 폭 0.02 때문에 생기는 작은 치우침을 빼면 주변 스코어와 맞는다.

### 대응표

| 드래곤볼 찾기 | 디퓨전 모델 | 닮은 개념 |
|---|---|---|
| 드래곤볼 7개 | 데이터 분포의 봉우리(모드)들 | 매니폴드 가설 (볼이 놓인 곳) |
| 전파 강도 지도 | 확률밀도 p(x) | 혼합분포 |
| 전파가 약해지는 모양 | 가우시안 커널 | — |
| 레이더 바늘 방향 | 스코어 ∇ₓ log p | 모수에 대한 스코어 ∇<sub>θ</sub> log p의 사촌 (미분 변수가 다르다) |
| 신호 총량을 몰라도 되는 레이더 | 정규화 상수 Z의 소거 | 지수족의 로그정규화자 |
| 안개의 농도 | 노이즈 수준 σ<sub>t</sub>, 합성곱 | 무지의 방향 |
| 레이더가 가리키는 곳 | 트위디 공식 E[x₀ ∣ x<sub>t</sub>] | EM(숨은 변수와 모수를 번갈아 추정하는 알고리즘) E-step의 책임도 |
| 안개를 거꾸로 걷기 | 역방향 SDE (Anderson) | — |
| 바람 | 역방향 SDE의 노이즈 (확률흐름 ODE에는 없음) | — |
| 과거 기록으로 레이더 제작 | 잡음 제거 스코어 매칭 = 피셔 발산 최소화 | 사영 (자는 KL이 아니라 L²) |
| 모든 안개 수준의 합 | 가중 스코어 매칭 = KL, ELBO | 변분추론 |
| 참가자의 출발점 | x<sub>T</sub> ~ N(0, σ<sub>max</sub>² I) (다양성의 원천) | — |
| 볼에 도착 | 생성된 샘플 | — |

### 수확

"디퓨전 모델은 마법이 아니다. 혼합분포의 전파 지형에 안개를 입혔다가, 스코어 함수가 가리키는 방향을 따라 안개를 거꾸로 걷는다(매니폴드로의 귀환). 그 레이더는 노이즈를 섞어 본 기록으로 만든 조건부 방향의 평균이고, 모든 안개 수준을 합치면 최대우도로 돌아온다."

### 문제 5. 조건부 타깃과 주변 스코어

데이터가 두 점 ±1(반반)이고 안개 σ = 0.5를 더한다. (가) x<sub>σ</sub> = 0.3에 선 사람의 조건부 타깃 −(x<sub>σ</sub> − x₀)/σ² 는 어떤 값들을 가질 수 있는가? (나) 잡음 제거 스코어 매칭을 완벽하게 풀었을 때 신경망이 x = 0.3에서 내놓는 값은?

#### 함께 풀기

**김민준:** (가)는 x₀가 +1이면 −(0.3 − 1)/0.25 = 2.8, −1이면 −(0.3 + 1)/0.25 = −5.2예요. (나)는 둘 중 하나를 맞히는 문제니까, +1일 확률이 크면 2.8을 내놓겠죠.

**선생님:** 신경망은 이 사람이 어느 볼에서 왔는지 보고 답해요?

**김민준:** 아니요, x = 0.3만 봐요.

**선생님:** 그럼 같은 입력 0.3에 대해 정답이 2.8일 때도 있고 −5.2일 때도 있어요. 제곱 오차를 최소로 하는 한 값은요?

〔M08〕 **김민준:** 평균이요. 둘 중 하나를 고르는 게 아니라 섞어야 해요. +1에서 왔을 사후확률이 (1 + tanh(0.3/0.25))/2 = 0.917이니까 0.917 × 2.8 + 0.083 × (−5.2) = 2.13이에요.

**이서연:** 주변 스코어 (tanh(y/σ²) − y)/σ²에 넣어도 2.135야. 트위디 공식을 거꾸로 쓴 거네.

**김민준:** 팀 과제에서 누가 쓴 문단인지 모르는 채로 「이 문단 고칠 방향」을 한 줄만 적어야 하면, 팀원 각자가 원하는 방향을 그럴듯한 만큼 섞어 적는 게 제일 덜 틀리잖아요. 그거네요.

**선생님:** 그래요. 한 사람에게 맞는 방향과 신경망이 배우는 방향은 달라요.
`,Y4=`# 플로우 매칭 — 길을 통째로 배우기

디퓨전 모델은 매 지점의 방향(데이터에 대한 스코어 ∇ₓ log p, 곧 로그 밀도의 기울기)을 배운다. 안개 속에서 레이더를 보며 한 걸음씩 걷는 참가자와 같다. 안개(노이즈 수준)가 바뀔 때마다 레이더를 재조정해야 한다.

그런데 생각해보면 우회하는 느낌이 있다. 우리가 진짜 원하는 건 "노이즈에서 데이터로 가는 것"이다. 매 순간의 방향을 배우는 대신, 출발점에서 도착점까지의 흐름을 통째로 배우면 안 되나?

이 장의 시간 t는 플로우 매칭 문헌의 관례를 따른다. t = 0이 노이즈, t = 1이 데이터다. 디퓨전 문헌(t = 0이 데이터)과는 방향이 반대다.


![노이즈에서 데이터로 — 직선으로 흐르는 강물](/images/chapters/ch15-flow-straight.svg)

## 속도장: 노이즈를 데이터로 실어 나르는 흐름

디퓨전이 매 순간 나침반을 보고 걷는 것이라면, 경로 전체를 미리 알 수는 없는가?

### 철새의 이주 — 흩어진 출발점, 제각각의 도착지

![두루미의 이주 — 출발점은 제각각이지만, 속도장을 따라 모두 도착한다](/images/chapters/crane-migration.jpg)

가을이 온다. 시베리아의 툰드라(노이즈)에 흩어져 있던 수천 마리의 새들이 한반도의 습지(데이터)로 날아간다.

각 새는 제각각의 출발점에서 출발한다. 시베리아 동쪽 끝의 새도 있고 서쪽 끝의 새도 있다. 도착지도 제각각이다. 천수만으로 가는 새도 있고 순천만으로 가는 새도 있다.

![순천만 습지 — 철새들의 도착지](/images/chapters/suncheon-bay.jpg)

그런데 모든 새가 안전하게 도착한다.

어떻게?

새는 매 순간 나침반을 보지 않는다. 유전자에 각인된 비행 프로그램이 있다. "이 위도에서는 이 방향으로, 이 속도로." 시간과 위치의 함수로 정해진 속도장. 새는 이 속도장을 따라 흐를 뿐이다.

플로우 매칭은 매 지점의 방향이 아니라, 이렇게 노이즈에서 데이터로 흘러가는 속도장(velocity field)을 직접 학습한다.

### 속도장이 분포를 옮긴다

새 한 마리는 속도장을 따라 dx/dt = v(x, t)로 난다. 새 떼 전체의 밀도 p<sub>t</sub>는 그 흐름에 실려 옮겨 간다. 어느 작은 구역의 새 수가 변하는 양은, 그 구역 경계로 드나드는 새의 수와 같다. 새가 도중에 생기거나 사라지지 않으니까.

\`\`\`latex
\\frac{\\partial \\textcolor{#d6479f}{p}_t}{\\partial t} + \\nabla \\cdot \\big(\\textcolor{#d6479f}{p}_t\\, \\textcolor{#d07a12}{v}\\big) = 0
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}_t & \\text{시간 } t \\text{ 의 새 떼 밀도 (} p_0 = \\text{노이즈}, \\; p_1 = \\text{데이터)} \\\\
\\textcolor{#d07a12}{v} & \\text{속도장 } v(x, t) \\\\
\\nabla \\cdot & \\text{벡터장의 발산 (divergence, 구역 밖으로 나가는 흐름의 양. KL 발산과 이름만 같다)} \\\\
t & \\text{시간}
\\end{array}
\`\`\`

연속방정식이다. 플로우 매칭의 목표는 이 식을 만족하면서 p₀ = 노이즈를 p₁ = 데이터로 옮기는 v를 찾는 것이다. 그런 v를 알면 노이즈 한 점을 뽑아 ODE를 풀기만 하면 샘플이 된다.

### 디퓨전과의 차이

디퓨전의 안개 속 참가자는 레이더를 매 순간 확인했다. 레이더는 "지금 여기서 로그 밀도가 가장 빠르게 커지는 방향"을 알려준다. 그 방향으로 얼마나, 어떤 바람과 함께 걸을지는 역방향 SDE나 확률흐름 ODE라는 규칙이 따로 정했다.

철새의 비행 프로그램은 "시간 t에 위치 x에 있다면, 속도는 v(x, t)이다"를 바로 준다. 여기에도 시간이 들어 있다는 데 주의하자. 디퓨전의 스코어가 안개 수준마다 달랐듯, 속도장도 시간마다 다르다. 안개 수준을 신경 쓸 필요가 없어지는 것이 아니라, 시간이 처음부터 프로그램의 입력으로 들어가 있는 것이다.

### 핵심 아이디어를 정리하면

디퓨전: 매 지점, 매 안개 수준의 스코어 ∇ₓ log p<sub>t</sub>(x)를 배운다. 플로우 매칭: 매 지점, 매 시간의 속도 v(x, t)를 배운다. 스코어는 "어디로 끌리는가"이고, 속도는 "어디로 흘러가는가"이다. 끌림에서 흐름을 만들려면 규칙이 하나 더 필요하고, 흐름은 그 자체로 규칙이다. 뒤에서 보겠지만, 둘은 한 식으로 서로 옮겨진다.

### 직선 비행 — 가장 단순한 경로

그렇다면 어떤 속도장을 배워야 할까? 가장 단순한 것부터 보자. 조건부 플로우 매칭(conditional flow matching, CFM)의 가장 기본 형태는 노이즈 점 z와 데이터 점 x를 짝지어 직선으로 잇는 것이다.

시베리아에서 한반도까지 가장 단순한 경로는 출발점과 도착점을 잇는 직선이다. 바람도 무시하고, 지형도 무시하고, 일정한 속도로 직진.

\`\`\`latex
\\textcolor{#6f8fa6}{x}_t = (1 - t)\\, \\textcolor{#8a7fb0}{z} + t\\, \\textcolor{#6f8fa6}{x}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x}_t & \\text{시간 } t \\text{ 에서 새의 위치} \\\\
\\textcolor{#8a7fb0}{z} & \\text{출발점 (노이즈 표본, } z \\sim N(0, I) \\text{)} \\\\
\\textcolor{#6f8fa6}{x} & \\text{도착점 (데이터 표본)} \\\\
t & \\text{시간, 0 이면 출발점, 1 이면 도착점}
\\end{array}
\`\`\`

시간 t에서의 위치는 출발점 z와 도착점 x의 가중평균이다. t = 0이면 출발점(노이즈), t = 1이면 도착점(데이터).

(1 − t)·z + t·x 는 두 점의 볼록 결합이다. 두 점을 잇는 선분 위의 점. 볼록 결합이 "사이"를 정의하듯, 여기서도 노이즈 한 점과 데이터 한 점 "사이"를 정의한다.

### 밀도 혼합 — 닮았지만 다른 길

잠깐. 이 수식은 두 분포를 섞는 식과 모양이 같다.
(1 − t)·p₁ + t·p₂
두 분포의 가중평균. 덧셈의 길(두 분포의 확률을 그대로 섞는 가장 곧은 길, m-측지선).

모양이 똑같다. 그런데 섞는 대상이 다르다. 덧셈의 길은 밀도를 섞는다. "확률 t로 데이터, 1 − t로 노이즈에서 뽑는다." 여기서는 표본을 섞는다. "노이즈 한 점과 데이터 한 점을 뽑아 그 사이의 점을 취한다." 표본을 섞으면 분포는 섞이지 않는다. 합성곱이 된다.

가우시안으로 보면 차이가 선명하다. z ~ N(0, 1), x ~ N(m, s²)이면

\`\`\`latex
\\begin{aligned} &\\text{표본 보간:} && (1-t)\\,\\textcolor{#8a7fb0}{z} + t\\,\\textcolor{#6f8fa6}{x} \\sim \\mathcal{N}\\big(t m,\\; (1-t)^2 + t^2 s^2\\big) \\\\ &\\text{밀도 혼합:} && (1-t)\\,\\mathcal{N}(0, 1) + t\\,\\mathcal{N}(m, s^2) \\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#8a7fb0}{z} & \\text{노이즈 표본} \\\\
\\textcolor{#6f8fa6}{x} & \\text{데이터 표본} \\\\
m,\\ s & \\text{데이터의 평균과 표준편차} \\\\
t & \\text{보간 비율}
\\end{array}
\`\`\`

m = 4, s = 0.5, t = ½이면 표본 보간은 봉우리 하나짜리 N(2, 0.3125)다. 새 떼가 통째로 중간 지점을 날고 있다. 밀도 혼합은 0과 4에 봉우리가 둘인 분포이고 분산은 4.625다. 절반은 아직 시베리아에, 절반은 이미 한반도에 있다. 평균은 둘 다 2지만 전혀 다른 분포다.

짝을 최적 수송으로 지으면 표본 보간의 분포는 McCann(1997)의 변위 보간(displacement interpolation)이 된다. 와서스타인 거리가 재는 기하학의 측지선이다. 분포 공간의 두 길(확률을 섞는 덧셈의 길, 확률을 곱해 섞는 곱셈의 길)과 나란히 놓이는, 세 번째 종류의 "사이"다. 덧셈의 길의 그 직선이 쓰이는 것이 아니라, 모양이 닮은 다른 직선이 쓰인다.

### 수확

"디퓨전이 매 순간의 나침반이라면, 플로우 매칭은 유전자에 각인된 비행 프로그램이다. 둘 다 시간에 따라 바뀌는 방향의 지도(벡터장)다."

### 문제 1. 표본을 섞으면

z ~ N(0, 1), x ~ N(4, 0.5²)이 독립이다. t = ½로 한다. (가) x<sub>½</sub> = ½z + ½x의 분포를 구하라. (나) 덧셈의 길 ½N(0, 1) + ½N(4, 0.5²)과 비교하라. 둘은 같은가?

#### 함께 풀기

**김민준:** 둘 다 평균이 2예요. 방금 표본 백만 개로 둘 다 뽑아서 평균을 찍어 봤는데 2.001이랑 1.998이에요. 식도 (1 − t)·a + t·b로 똑같고요. 같은 거예요.

**선생님:** 평균 말고 분산은요?

〔M04〕 **김민준:** …0.3127이랑 4.6251이요. 열다섯 배 차이네요. 평균만 보고 같다고 했어요.

**이서연:** 나는 식으로 해 볼게. x<sub>½</sub>의 밀도는 합성곱이니까 ((1 − t)p<sub>z</sub>) * (t p<sub>x</sub>) 를 계산하면…

**선생님:** 그 식을 전체 구간에서 적분하면 얼마예요?

〔S04〕 **이서연:** (1 − t) × t × 1 × 1이니까 0.25예요. 확률밀도가 아니네요. 뭔가 섞였어요.

**이서연:** 아, 알겠어요. 확률변수에 ½을 곱하는 건 밀도에 ½을 곱하는 게 아니에요. ½z의 밀도는 2p<sub>z</sub>(2y)예요. 변수의 배율과 밀도의 배율은 역수로 움직여요. 그걸 제대로 하면 N(0, ¼)과 N(2, 1/16)의 합성곱이라 N(2, 0.3125)예요.

**이서연:** 덧셈의 길은 확률변수를 섞는 게 아니라 "어느 쪽에서 뽑을지"를 섞어요. 그래서 0과 4에 봉우리가 둘이고 분산은 0.5 × 1 + 0.5 × 0.25 + 0.25 × 16 = 4.625예요.

**김민준:** 조별 과제 점수를 두 사람 평균으로 매기는 거랑, 동전 던져서 한 사람 점수를 가져가는 거랑 같네요. 평균은 둘 다 같은데, 첫 번째는 다들 중간 점수고 두 번째는 잘하거나 망하거나예요.

**선생님:** 그래요. 식의 모양이 같아도 무엇을 섞는지가 다르면 다른 길이에요.

## 조건부 플로우 매칭: 짝의 직선들로 주변 속도장을 배운다

짝 하나의 직선 위에서 새는 일정한 속도로 난다. 그렇다면 신경망에게 그 직선 속도를 그대로 가르치면 될까? 직선인 것은 짝 하나의 길이고, 신경망이 배우는 속도장은 그 직선들의 평균이다.

### 조건부 속도와 주변 속도

짝 (z, x) 하나의 직선에서 속도는 일정하다.

v<sub>조건부</sub> = x − z.

그런데 신경망이 보는 것은 지금의 위치 x<sub>t</sub>와 시간 t뿐이다. 어떤 짝이 이 점을 지나고 있는지는 모른다. 한 점을 여러 짝의 직선이 지나가면, 그 점에서 신경망이 내놓을 수 있는 속도는 하나뿐이다.

\`\`\`latex
\\textcolor{#d07a12}{v}(\\textcolor{#6f8fa6}{y}, t) = \\mathbb{E}\\big[\\textcolor{#6f8fa6}{x} - \\textcolor{#8a7fb0}{z} \\,\\big|\\, \\textcolor{#6f8fa6}{x}_t = \\textcolor{#6f8fa6}{y}\\big]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d07a12}{v} & \\text{주변 속도장 (그 점을 지나는 모든 짝의 조건을 합쳐 버린 평균 속도, 신경망이 배우는 것)} \\\\
\\textcolor{#6f8fa6}{y} & \\text{하늘의 한 점} \\\\
\\textcolor{#6f8fa6}{x},\\ \\textcolor{#8a7fb0}{z} & \\text{그 점을 지나는 짝의 도착점과 출발점} \\\\
\\textcolor{#6f8fa6}{x}_t & \\text{짝의 시간 } t \\text{ 위치} \\\\
\\mathbb{E}[\\,\\cdot \\mid \\cdot\\,] & \\text{그 점을 지나는 모든 짝에 대한 평균}
\\end{array}
\`\`\`

이 주변 속도장이 연속방정식을 만족하며 노이즈를 데이터로 옮긴다(Lipman 외, 2022). 그리고 이것은 상수가 아니다. t = 0에서는 x<sub>0</sub> = z라 z가 정해지면 x는 아무것이나 될 수 있다. v(y, 0) = E[x] − y, 모두 데이터의 평균 쪽을 향한다. t가 1에 가까워지면 한 점을 지나는 짝은 거의 한 봉우리 것뿐이라, 각자 가까운 봉우리를 향한다. 속도장은 위치와 시간에 따라 모양을 바꾼다.

### 조건부 목표로 주변 속도를 배운다

주변 속도장을 직접 계산하려면 데이터 분포 전체가 필요하다. 대신 짝마다 아는 조건부 목표 x − z에 맞추도록 훈련한다.

\`\`\`latex
\\mathcal{L}(\\textcolor{#2e9e6e}{\\theta}) = \\mathbb{E}_{t,\\, \\textcolor{#8a7fb0}{z},\\, \\textcolor{#6f8fa6}{x}} \\big\\| \\textcolor{#d07a12}{v}_{\\textcolor{#2e9e6e}{\\theta}}(\\textcolor{#6f8fa6}{x}_t, t) - (\\textcolor{#6f8fa6}{x} - \\textcolor{#8a7fb0}{z}) \\big\\|^2, \\qquad \\textcolor{#d07a12}{v}_{\\textcolor{#2e9e6e}{\\theta}}^{*} = \\textcolor{#d07a12}{v}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\mathcal{L} & \\text{조건부 플로우 매칭 손실 (보조 기호)} \\\\
\\textcolor{#d07a12}{v}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{신경망이 만든 속도장} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{신경망의 가중치} \\\\
\\textcolor{#8a7fb0}{z},\\ \\textcolor{#6f8fa6}{x} & \\text{짝지은 노이즈와 데이터} \\\\
\\textcolor{#6f8fa6}{x}_t & \\text{짝의 시간 } t \\text{ 위치} \\\\
\\textcolor{#d07a12}{v}_{\\textcolor{#2e9e6e}{\\theta}}^{*} & \\text{손실을 최소로 하는 속도장} = \\text{주변 속도장 } v
\\end{array}
\`\`\`

같은 입력에 여러 정답이 오면 제곱 오차를 최소로 하는 한 값은 평균, 곧 조건부 기댓값이다. x<sub>t</sub>의 함수들이 이루는 공간 위로의 직교사영이다. 분포를 모형 위로 옮기는 사영과 모양이 같고, 자는 KL 발산(두 분포가 같은 사건에 매기는 확률이 얼마나 다른지 재는 양)이 아니라 제곱 거리(L²)다. 디퓨전의 잡음 제거 스코어 매칭과 완전히 같은 구조다. 조건부 타깃으로 훈련하면 주변 타깃을 배운다.

{{viz: ch15/velocity-field}}

### 파이썬

\`\`\`python
import numpy as np
rng = np.random.default_rng(0)

# (1) 표본 보간의 분포 vs 밀도의 혼합: z ~ N(0,1), x ~ N(4, 0.5²), t = 0.5
t, n = 0.5, 1_000_000
z = rng.normal(0, 1, n); x = rng.normal(4, 0.5, n)
xt = (1 - t) * z + t * x                                   # 표본을 섞는다
mix = np.where(rng.random(n) < t, x, z)                     # 밀도를 섞는다 (덧셈의 m-길)
print(f"표본 보간: 평균 {xt.mean():.3f} 분산 {xt.var():.4f}")
print(f"밀도 혼합: 평균 {mix.mean():.3f} 분산 {mix.var():.4f}")

# (2) 조건부 타깃 x − z 의 평균 = 주변 속도장.  데이터 ±1, z ~ N(0,1)
x = rng.choice([-1.0, 1.0], 4 * n); z = rng.normal(size=4 * n); y = 0.5
for t in [0.2, 0.5, 0.8]:
    xt = (1 - t) * z + t * x
    near = np.abs(xt - y) < 0.01
    v = (np.tanh(t * y / (1 - t)**2) - y) / (1 - t)                  # 닫힌꼴
    s = (t * np.tanh(t * y / (1 - t)**2) - y) / (1 - t)**2           # ∇log p_t
    print(f"t={t}: 표본평균 E[x−z|x_t=0.5] {(x - z)[near].mean():.3f}   "
          f"닫힌꼴 v {v:.3f}   y/t + (1−t)/t·∇log p_t {y / t + (1 - t) / t * s:.3f}")
# 표본 보간: 평균 2.001 분산 0.3127
# 밀도 혼합: 평균 1.998 분산 4.6251
# t=0.2: 표본평균 E[x−z|x_t=0.5] -0.428   닫힌꼴 v -0.431   y/t + (1−t)/t·∇log p_t -0.431
# t=0.5: 표본평균 E[x−z|x_t=0.5] 0.521   닫힌꼴 v 0.523   y/t + (1−t)/t·∇log p_t 0.523
# t=0.8: 표본평균 E[x−z|x_t=0.5] 2.499   닫힌꼴 v 2.500   y/t + (1−t)/t·∇log p_t 2.500
\`\`\`

같은 점 0.5에서 속도가 t = 0.2에는 −0.43(가운데 쪽), t = 0.8에는 +2.5(봉우리 +1 쪽)다. 조건부 목표 x − z는 짝마다 일정하지만, 주변 속도장은 시간에 따라 부호까지 바뀐다.

(2)의 마지막 칸 y/t + (1−t)/t·∇log p<sub>t</sub> 는 스코어로 속도를 만드는 식이다. 왜 맞아떨어지는지는 뒤에서 본다.

### 문제 2. 두 점으로 가는 속도장

데이터가 두 점 ±1(반반), 노이즈가 z ~ N(0, 1)이다. 선형 경로 x<sub>t</sub> = (1 − t)z + tx에서 (가) x<sub>t</sub> = y를 본 뒤 x = +1일 사후확률을 구하고, 주변 속도장 v(y, t)의 닫힌꼴을 구하라. (나) v(0.5, 0.5)를 계산하라.

#### 함께 풀기

**김민준:** 이건 쉬워요. 직선 경로의 속도는 x − z로 상수라고 했으니까, 그걸 그대로 쓰면…

**선생님:** y = 0.5, t = 0.5에 있는 새의 x − z가 얼마예요?

**김민준:** x = +1이면 z = (0.5 − 0.5)/0.5 = 0이라 x − z = 1이고, x = −1이면 z = (0.5 + 0.5)/0.5 = 2라 x − z = −3이에요. …같은 점에 두 가지 속도가 있네요.

〔M06〕 **김민준:** 그럼 상수라는 게 뭐였어요? 짝 하나의 속도가 상수라는 거였구나. 신경망은 이 점에서 하나만 말해야 하니까 1과 −3의 가중평균이에요.

**이서연:** 섞는 비율은 내가 구할게. x = +1일 때 x<sub>t</sub> = (1 − t)z + t라서 y가 나올 우도(그 x가 이 y를 낼 확률밀도)는 exp(−(y − t)²/2)예요. 그래서 사후확률은 (1 + tanh(ty))/2, E[x | y] = tanh(ty)예요.

**선생님:** 그걸로 (나)를 계산하면요?

**이서연:** v = (E[x | y] − y)/(1 − t) = (tanh(0.25) − 0.5)/0.5 = −0.51이에요. 가운데 쪽으로 가요.

**김민준:** 이상한데. y = 0.5는 +1 쪽에 가까운데 절반 왔을 때 오히려 0 쪽으로 돌아간다고? 위젯에서 t = 0.5쯤 되면 화살표가 벌써 봉우리 쪽을 보던데.

〔S06〕 **이서연:** 우도를 다시 볼게요. z에 (1 − t)가 곱해져 있으니까 y의 조건부 분포는 N(tx, (1 − t)²)예요. 저는 분산을 1로 썼어요. 확률변수의 배율을 밀도에 반영 안 한, 문제 1이랑 같은 실수예요.

**이서연:** 고치면 E[x | y] = tanh(ty/(1 − t)²), v(y, t) = (tanh(ty/(1 − t)²) − y)/(1 − t)예요. (나)는 (tanh(1) − 0.5)/0.5 = 0.523이에요. 사후확률로는 +1이 0.88이라 (1과 −3을 0.88 : 0.12로 섞으면) 0.52가 나와요. 맞아요.

**선생님:** 파이썬 절에서 표본으로 잰 값도 0.521이었어요.

**이서연:** 확률론 수업의 변수변환 공식이 딱 이 자리에서 필요한 거였네요. 야코비안을 잊으면 분산이 틀리고, 분산이 틀리면 방향까지 뒤집혀요.

## 최적 수송: 얽히지 않게 짝짓기

직선 비행이 항상 최선인가? 새들의 길이 서로 얽히면? 길은 여전히 직선이다. 바뀌는 것은 어느 출발점을 어느 도착점과 짝지을지다.

### 철새의 항로 배정 — 얽히지 않는 짝

수천 마리의 새가 동시에 출발한다. 출발점과 도착지를 제비뽑기로 짝지으면 길이 얽힌다. 시베리아 동쪽의 새가 한반도 서쪽으로, 시베리아 서쪽의 새가 한반도 동쪽으로 가면 중간에서 길이 교차한다.

자연은 더 영리하다. 시베리아 동쪽의 새는 한반도 동쪽으로, 시베리아 서쪽의 새는 한반도 서쪽으로. 길이 얽히지 않는다. 총 비행 비용이 최소가 된다.

이것이 최적 수송(optimal transport, OT)이다.

### 얽힌 길이 왜 문제인가

앞 절에서 보았듯, 한 점을 여러 짝의 직선이 지나면 그 점의 속도는 평균이 된다. 그런데 주변 속도장을 따르는 실제 궤적은 ODE의 해라서 서로 교차할 수 없다. 한 점에서 속도는 하나뿐이니까. 그래서 조건부 직선들이 얽혀 있으면, 실제 궤적은 교차점 근처에서 평균된 속도를 따라 휜다. 앞에서 본 속도장 위젯의 실선이 휘는 이유가 이것이다. 휜 궤적은 ODE를 적은 스텝으로 풀면 크게 틀린다. 뒤의 파이썬에서 보듯, 직선 조건부 경로로 훈련한 속도장도 2스텝으로 풀면 봉우리 비율이 크게 어긋난다.

짝을 잘 지어 조건부 직선들이 덜 얽히면, 평균된 속도도 덜 흔들리고 궤적도 곧아진다. 두 가지 방법이 널리 쓰인다. 미니배치 최적 수송(Tong 외, 2023; Pooladian 외, 2023): 훈련 배치 안에서 노이즈와 데이터를 최적 수송으로 짝짓는다. 정류 흐름(rectified flow, Liu·Gong·Liu, 2022): 한 번 학습한 흐름으로 노이즈를 데이터까지 보내고, 그 (출발, 도착) 짝으로 다시 학습한다(reflow). 반복할수록 궤적이 곧아져 한 스텝 생성에 가까워진다.

### 와서스타인 거리와의 연결

KL 발산은 "두 분포가 같은 사건에 얼마나 다른 확률을 매기는가"를 묻는다. 와서스타인 거리는 전혀 다른 질문을 한다 — "한 분포를 다른 분포로 옮기려면 흙을 얼마나 날라야 하는가?"

\`\`\`latex
\\textcolor{#c2398a}{W}_2^2(\\textcolor{#d6479f}{p}_0, \\textcolor{#d6479f}{p}_1) = \\min_{\\Pi} \\; \\mathbb{E}_{(\\textcolor{#8a7fb0}{z}, \\textcolor{#6f8fa6}{x}) \\sim \\Pi} \\|\\textcolor{#6f8fa6}{x} - \\textcolor{#8a7fb0}{z}\\|^2
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{W}_2 & \\text{2-와서스타인 거리} \\\\
\\textcolor{#d6479f}{p}_0,\\ \\textcolor{#d6479f}{p}_1 & \\text{노이즈 분포, 데이터 분포} \\\\
\\Pi & \\text{짝짓기: } (z, x) \\text{ 짝의 결합분포. } z \\text{ 만 모으면(주변분포) } p_0, \\ x \\text{ 만 모으면 } p_1 \\\\
\\textcolor{#8a7fb0}{z},\\ \\textcolor{#6f8fa6}{x} & \\text{짝지은 출발점과 도착점}
\\end{array}
\`\`\`

KL은 확률의 비율을 본다. 같은 위치에서의 차이. 와서스타인은 확률의 이동을 본다. 한 곳에서 다른 곳으로의 운반. KL과 달리 대칭이고 삼각부등식도 지키는, 진짜 거리다.

비용을 무엇으로 재는지도 중요하다. 거리 |x − z|를 더하면 W₁, 제곱거리 |x − z|²를 더하면 W₂다. 표준 OT-CFM은 제곱거리를 쓴다. W₁은 한 줄 위에서 짝을 어떻게 바꿔도 총비용이 같아지는 경우가 있어 최적 짝이 하나로 정해지지 않는다(아래 문제 3). 제곱거리는 순서를 지키는 짝 하나만 남기고, 그 짝의 직선들은 서로 교차하지 않는다.

플로우 매칭에서: 랜덤 짝 + 직선 = 각 새가 제비뽑기한 목적지로 직진 (쉽지만 길이 얽힌다). OT 짝 + 직선 = 새들의 출발-도착 짝을 최적화 (길이 덜 얽히고, 궤적이 곧다).

{{viz: ch15/ot-matching}}

### 파이썬

\`\`\`python
import numpy as np
from scipy.optimize import linear_sum_assignment
rng = np.random.default_rng(1)

n = 256
z = rng.normal(size=(n, 2))                                         # 노이즈 출발점
x = rng.normal(size=(n, 2)) * 0.3 + rng.choice([-2.0, 2.0], (n, 1)) * [1, 0]  # 두 덩어리 데이터

def total(perm):
    d = x[perm] - z
    return np.linalg.norm(d, axis=1).sum(), (d**2).sum()

rand = rng.permutation(n)
_, ot2 = linear_sum_assignment(((z[:, None] - x[None])**2).sum(-1))    # 제곱거리 (W₂)
_, ot1 = linear_sum_assignment(np.linalg.norm(z[:, None] - x[None], axis=2))  # 거리 (W₁)
for name, p in [("랜덤 짝", rand), ("W₁ 최적 짝", ot1), ("W₂ 최적 짝", ot2)]:
    c1, c2 = total(p)
    print(f"{name:8s} Σ|x−z| {c1:7.1f}   Σ|x−z|² {c2:7.1f}")

# 1차원 한 줄: z = {0,1,2,3}, x = {4,5,6,7}
z1, x1 = np.arange(4.0), np.arange(4.0) + 4
for perm in [(0, 1, 2, 3), (3, 2, 1, 0)]:
    d = x1[list(perm)] - z1
    print(perm, "W₁ 비용", abs(d).sum(), " W₂ 비용", (d**2).sum(), " t=½ 위치", (z1 + x1[list(perm)]) / 2)
# 랜덤 짝     Σ|x−z|   585.0   Σ|x−z|²  1551.6
# W₁ 최적 짝  Σ|x−z|   360.2   Σ|x−z|²   589.7
# W₂ 최적 짝  Σ|x−z|   361.4   Σ|x−z|²   537.2
# (0, 1, 2, 3) W₁ 비용 16.0  W₂ 비용 64.0  t=½ 위치 [2. 3. 4. 5.]
# (3, 2, 1, 0) W₁ 비용 16.0  W₂ 비용 84.0  t=½ 위치 [3.5 3.5 3.5 3.5]
\`\`\`

두 최적 짝은 서로 다르다. 각자 자기 비용에서 이긴다. 마지막 두 줄에서 W₁은 두 짝을 구별하지 못하지만, 거꾸로 짝지은 쪽은 t = ½에 네 마리가 한 점(3.5)에 모인다.

### 수확

"OT는 길을 바꾸지 않는다. 짝을 바꾼다. 짝이 덜 얽히면 평균된 속도장이 덜 휘고, 적은 스텝으로 풀 수 있다. KL이 '확률의 비율'을 보는 자라면, 와서스타인은 '확률의 이동'을 보는 자다."

### 문제 3. 한 줄 위의 네 마리

한 줄 위에 출발점 z = {0, 1, 2, 3}, 도착점 x = {4, 5, 6, 7}이 있다. (가) 순서대로 짝(0→4, 1→5, …)과 거꾸로 짝(0→7, 1→6, …)의 총비용을 거리(W₁)와 제곱거리(W₂)로 각각 구하라. (나) 두 짝에서 t = ½의 위치들을 비교하라. 출발점·도착점 분포가 같으면 중간 분포도 같은가?

#### 함께 풀기

**김민준:** norm으로 비용 행렬 만들어서 헝가리안 알고리즘(최적 짝을 찾는 표준 방법) 돌렸어요. 순서대로 짝이 16, 거꾸로 짝도 16이에요. 모든 24가지 짝이 다 16이에요. 그러니까 이 문제에서는 OT가 의미가 없어요. 아무렇게나 짝지어도 돼요.

**선생님:** 모든 짝의 비용이 같은 이유가 뭐예요?

**김민준:** 모든 도착점이 모든 출발점보다 오른쪽이라 |x − z| = x − z고, 더하면 Σx − Σz = 22 − 6 = 16으로 짝과 상관없어요.

**선생님:** 그럼 제곱거리로 재면요?

〔M07〕 **김민준:** 순서대로는 4² × 4 = 64, 거꾸로는 49 + 25 + 9 + 1 = 84예요. 달라요. 제가 쓴 np.linalg.norm이 W₁ 비용이었고, OT-CFM이 보통 쓰는 건 제곱이에요.

**이서연:** (나)는 쉬워. 출발 분포도 같고 도착 분포도 같으니까 중간 분포도 같지. 짝은 누가 누구랑 가느냐일 뿐이고.

**선생님:** t = ½의 위치를 직접 써 봐요.

〔S06〕 **이서연:** 순서대로면 2, 3, 4, 5예요. 거꾸로면 3.5, 3.5, 3.5, 3.5요. 네 마리가 한 점에 모여요. 중간 분포가 완전히 달라요.

**이서연:** 양 끝의 주변분포는 짝짓기의 제약일 뿐이고, 중간은 결합분포 전체가 정해요. 확률론에서 주변분포가 같아도 결합분포는 여러 개일 수 있다는 걸, 제가 여기서 잊었어요.

**선생님:** 그리고 네 마리가 한 점에 모인 그곳에서 신경망은 무슨 속도를 배워야 해요?

**김민준:** 속도가 +7, +5, +3, +1인 새가 다 거기 있으니까 평균 +4요. 그 점을 떠나는 새들을 다시 갈라놓을 방법이 없어요. 그래서 실제 흐름은 거꾸로 짝을 흉내 낼 수 없고, 궤적이 휘어야 해요.

**김민준:** 발표 순서 정할 때 다들 같은 시간에 몰려서 "앞 사람 끝나면" 하고 줄 서는 거랑 같네요. 순서를 처음부터 잘 정해 두면 줄이 안 생기고요.

## 속도와 스코어의 다리: 트위디 공식으로 서로 옮겨진다

디퓨전은 스코어를 배우고, 플로우 매칭은 속도를 배운다. 둘은 전혀 다른 것을 배우는 걸까?

디퓨전 쪽의 짝도 정확히 써 두자. x<sub>t</sub> = α<sub>t</sub>x + σ<sub>t</sub>z 꼴의 경로에서 조건부 스코어 타깃은 α<sub>t</sub>를 빼먹으면 안 된다.

\`\`\`latex
\\nabla_{x_t} \\log \\textcolor{#d6479f}{p}(\\textcolor{#6f8fa6}{x}_t \\mid \\textcolor{#6f8fa6}{x}) = -\\frac{\\textcolor{#6f8fa6}{x}_t - \\alpha_t \\textcolor{#6f8fa6}{x}}{\\sigma_t^2} = -\\frac{\\textcolor{#8a7fb0}{z}}{\\sigma_t}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d6479f}{p}(x_t \\mid x) & \\text{데이터 } x \\text{ 가 주어졌을 때 } x_t \\text{ 의 분포 } N(\\alpha_t x, \\sigma_t^2 I) \\\\
\\textcolor{#6f8fa6}{x}_t,\\ \\textcolor{#6f8fa6}{x} & \\text{노이즈 섞인 점, 데이터 점} \\\\
\\textcolor{#8a7fb0}{z} & \\text{섞인 노이즈} \\\\
\\alpha_t,\\ \\sigma_t & \\text{스케줄: 신호의 비율, 노이즈의 크기}
\\end{array}
\`\`\`

이것도 조건부 타깃이다. 위치와 시간에 따라 변하지만, 그 점에서 플로우 매칭의 x − z와 다를 바 없다. 둘 다 신경망이 실제로 배우는 것은 그 평균, 주변 필드다.

### 두 필드를 잇는 다리

플로우 매칭의 직선 경로는 α<sub>t</sub> = t, σ<sub>t</sub> = 1 − t인 가우시안 경로다. 그러면 주변 속도장과 주변 스코어가 한 식으로 이어진다.

\`\`\`latex
\\textcolor{#d07a12}{v}(\\textcolor{#6f8fa6}{x}, t) = \\frac{\\textcolor{#6f8fa6}{x}}{t} + \\frac{1-t}{t}\\, \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d07a12}{v} & \\text{선형 경로 } x_t = (1-t)z + tx \\text{ 의 주변 속도장} \\\\
\\textcolor{#6f8fa6}{x} & \\text{하늘의 한 점} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{같은 경로의 주변 스코어} \\\\
t & \\text{시간 } (0 < t < 1)
\\end{array}
\`\`\`

유도는 아래 문제 4에서 한다. 재료는 트위디 공식 하나다. 노이즈 섞인 관측 x<sub>t</sub> = α<sub>t</sub>x + σ<sub>t</sub>z에서 α<sub>t</sub>E[x | x<sub>t</sub>] = x<sub>t</sub> + σ<sub>t</sub>²∇log p<sub>t</sub>(x<sub>t</sub>), 곧 안개 낀 점에서 스코어 방향으로 σ<sub>t</sub>²만큼 걸으면 원래 점의 (α<sub>t</sub>배 된) 사후 평균에 닿는다. 속도장을 배우면 스코어를 얻고, 스코어를 배우면 속도장을 얻는다. 가우시안 경로에서 플로우 매칭과 디퓨전은 같은 것을 다른 변수로 적은(매개화한) 것이다. Kingma와 Gao(2023)는 여러 디퓨전 손실을 한 틀(노이즈 수준별 가중 ELBO. ELBO는 로그 우도의 아래 경계인 증거 하한)로 묶었고, Gao 외(2024, 「Diffusion Meets Flow Matching: Two Sides of the Same Coin」)는 DDIM(잡음 제거 디퓨전 암묵적 모델) 샘플러와 플로우 매칭의 오일러 샘플러가 같다는 것을 보였다. 그래서 "플로우 매칭의 타깃이 더 단순해서 학습이 더 안정적"이라는 말은 조심해야 한다. 실제로 차이를 만드는 것은 어떤 경로(노이즈 스케줄)를 쓰는지, 신경망이 무엇을 예측하는지(노이즈, 데이터, 속도), 시간마다 손실에 어떤 비중을 주는지다. 직선 경로와 속도 예측은 그 선택지 중 실전에서 잘 작동한 조합이다.

### 수확

"직선인 것은 짝 하나의 길이다. 신경망이 배우는 주변 속도장은 그 직선들의 평균이라 위치와 시간에 따라 변하고, 표본 보간의 분포는 밀도의 혼합이 아니라 합성곱이다. 가우시안 경로에서 속도장과 스코어는 한 식으로 서로 옮겨진다."

### 문제 4. 속도장과 스코어를 잇는 다리 (킬러)

선형 경로 x<sub>t</sub> = (1 − t)z + tx, z ~ N(0, I)에서 (가) 주변 속도장이 v(y, t) = y/t + ((1 − t)/t)∇log p<sub>t</sub>(y)임을 증명하라. (나) 이 식은 t → 0에서 어떻게 되는가? 정의 v(y, 0) = E[x − z | z = y]와 모순이 없는지 확인하라.

#### 함께 풀기

**이서연:** v = E[x − z | x<sub>t</sub> = y]에서 시작할게요. x<sub>t</sub> = y이면 z = (y − tx)/(1 − t)라서 x − z = (x − y)/(1 − t)예요. 그러니까 v = (E[x | y] − y)/(1 − t)예요.

**선생님:** 좋아요. 이제 E[x | y]를 스코어로 쓰면 끝나요.

〔S05〕 **이서연:** 거기서 막혀요. p<sub>t</sub>(y) = ∫ p(x) N(y; tx, (1 − t)²) dx를 y로 미분해 봤는데, E[x | y]가 따로 떨어져 나오지를 않아요. 적분 안에 x가 남아요.

**선생님:** 디퓨전에서 "안개 낀 점에서 스코어 방향으로 걸으면 어디에 닿는다"고 했죠?

〔S08〕 **이서연:** 트위디 공식이요! 안개 낀 관측 y = αx + σz에서 αE[x | y] = y + σ²∇log p<sub>t</sub>(y)예요. 여기서는 α = t, σ = 1 − t예요.

**이서연:** 그러면 E[x | y] = (y + (1 − t)²∇log p<sub>t</sub>)/t예요. 넣으면 v = [(y + (1 − t)²s)/t − y]/(1 − t) = [y(1 − t)/t + (1 − t)²s/t]/(1 − t) = y/t + ((1 − t)/t)s예요. 됐어요.

**이서연:** 제가 막힌 곳이 트위디 증명의 한가운데였어요. 가우시안 커널을 미분하면 (tx − y)/(1 − t)²가 나오고, 거기서 x가 남는 걸 "사후 평균"으로 읽으면 끝나는 거였어요.

**김민준:** (나)는 제가 할게요. t = 0을 넣으면 y/0이라 무한대로 가요. 코드로 확인했어요. 두 점 ±1 데이터에서 t = 0을 넣으니 nan이 나와요. 그러니까 플로우 매칭 속도장은 출발 순간에 무한대고, 그래서 실제 코드에서 t를 0.001부터 시작하는 거예요.

**선생님:** 정의대로 t = 0에서 계산하면요? x<sub>0</sub> = z예요.

**김민준:** z = y면 x는 z와 독립이니까 E[x − z | z = y] = E[x] − y… 두 점 ±1이면 −y예요. y = 0.3이면 −0.3이요. 유한해요.

〔M06〕 **김민준:** 그런데 식은 무한대로 가는데요?

**선생님:** t가 작을 때 p<sub>t</sub>는 무엇에 가까워요? 그 스코어를 넣어 봐요.

**김민준:** p₀ = N(0, 1)이니까 스코어 ≈ −y예요. 그러면 y/t + ((1 − t)/t)(−y) = y/t − y/t + y… 1/t끼리 지워져요. 그런데 남는 게 +y예요. 정의로는 −y인데 부호가 반대예요.

**이서연:** 스코어를 −y로만 쓰면 안 돼. 앞에 1/t가 곱해지니까 스코어의 t 1차 항이 살아남아. p<sub>t</sub>의 평균이 t·E[x], 분산이 (1 − t)² + t²Var[x] ≈ 1 − 2t라서 s ≈ −y + t(E[x] − 2y) + O(t²)이야. (1 − t)/t를 곱하면 −y/t + E[x] − y + O(t)이고, y/t를 더하면 v(y, 0) = E[x] − y. 정의와 정확히 같아.

**김민준:** 숫자로도 찍어 볼게요. y = 0.3에서 t = 10⁻³이면 −0.2999994, 10⁻⁸이면 −0.2999999970, 10⁻¹²이면 −0.29993, 10⁻¹⁵이면 −0.3125예요. 직접식 (tanh(ty/(1 − t)²) − y)/(1 − t)는 전부 −0.3이고요.

〔M09〕 **김민준:** 극한은 −0.3이 맞아요. t를 너무 줄였을 때 틀어진 건 10¹⁴이 넘는 두 수를 빼면서 자릿수를 다 잃어서예요. 특이점은 식의 표기에만 있고 속도장에는 없어요.

**김민준:** 기말 보고서에 "조교 점수 = 총점 ÷ 과제 수 × 과제 수"라고 쓴 식을 과제 수 0에서 계산하면 0/0이 되는 거랑 같네요. 식이 멍청한 거지 점수가 없는 게 아니에요.

〔T14〕 **선생님:** 이 문제가 이 장을 요약해요. 플로우 매칭이 배우는 속도장과 디퓨전이 배우는 스코어는 트위디 공식 하나로 이어진 같은 정보예요. 그리고 식이 보여 주는 특이점을 곧이곧대로 믿기 전에, 정의로 돌아가서 극한을 확인하는 습관. 실제 구현이 t 근처를 조심하는 건 속도장이 무한대여서가 아니라, 이런 식을 그대로 쓰면 자릿수를 잃기 때문이에요.

**이서연:** 해석학 수업에서 제거 가능한 특이점을 배울 때 sin x / x를 봤는데, 딱 그 모양이네요. 식으로는 0/0처럼 보여도 함수는 거기서 멀쩡해요.

## 바람의 크기: 같은 흐름을 지나는 샘플러 가족

속도장을 배웠으면 ODE를 따라 흘러가면 된다. 그런데 디퓨전에서는 바람을 맞으며 비틀거리는 역방향 SDE도 같은 분포에 닿았다. 속도장을 배운 뒤에도 바람을 넣을 수 있을까? 같은 주변분포 p<sub>t</sub>의 흐름을, 바람 없이 흐를 수도 있고 바람을 맞으며 걸을 수도 있다.

### 바람 크기를 고르는 식

디퓨전의 역방향 SDE와 확률흐름 ODE는 같은 p<sub>t</sub>를 지난다. 플로우 매칭의 시간 방향(0 = 노이즈)으로 쓰면, 그 사이에 한 줄로 늘어선 가족이 있다.

\`\`\`latex
d\\textcolor{#6f8fa6}{x} = \\Big[\\textcolor{#d07a12}{v}(\\textcolor{#6f8fa6}{x}, t) + \\frac{g(t)^2}{2}\\, \\textcolor{#b0892a}{\\nabla_{x} \\log p_t}(\\textcolor{#6f8fa6}{x})\\Big]\\, dt + g(t)\\, dW
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#6f8fa6}{x} & \\text{새의 위치} \\\\
\\textcolor{#d07a12}{v} & \\text{주변 속도장 (플로우 매칭이 배운 것)} \\\\
\\textcolor{#b0892a}{\\nabla_{x} \\log p_t} & \\text{같은 경로의 주변 스코어} \\\\
g(t) & \\text{바람의 크기 (아무 값이나 고를 수 있다)} \\\\
dW & \\text{브라운 운동의 증분, } dt > 0
\\end{array}
\`\`\`

g = 0이면 플로우 매칭의 ODE다. g > 0이면 바람이 퍼뜨리는 만큼 스코어 항이 도로 모아서, 매 순간의 분포는 여전히 p<sub>t</sub>다. 포커-플랑크 방정식(분포가 시간에 따라 어떻게 흐르는지 적은 식)에 넣어 보면 g² 항이 서로 지워지는 것을 확인할 수 있다. 그리고 앞 절의 다리 공식 덕분에, v만 배워도 스코어를 얻으니 이 가족 전체를 쓸 수 있다.

{{viz: ch15/comparison}}

### 파이썬

\`\`\`python
import numpy as np

mu = np.array([[-2.5, -1.5], [1.5, -2.0], [-1.0, 2.0], [2.5, 1.5],
               [0.0, 0.0], [-2.0, 0.5], [1.0, -0.5]])
w = np.array([.18, .14, .16, .14, .12, .13, .13]); s0 = 0.4

def fields(y, t):
    """선형 경로 x_t=(1−t)z+tx 의 주변 속도 v 와 스코어 ∇log p_t (닫힌꼴)."""
    V = (1 - t)**2 + t**2 * s0**2                      # 성분별 분산
    d = t * mu[None] - y[:, None]
    lg = np.log(w) - (d**2).sum(-1) / (2 * V)
    g = np.exp(lg - lg.max(1, keepdims=True)); g /= g.sum(1, keepdims=True)
    score = (g[..., None] * d).sum(1) / V
    Ex = (g[..., None] * (mu[None] + t * s0**2 / V * (y[:, None] - t * mu[None]))).sum(1)
    return (Ex - y) / (1 - t), score

def sample(gs, N=200, n=4000, seed=1):
    r = np.random.default_rng(seed)
    y = r.normal(size=(n, 2))                          # 출발: z ~ N(0, I)
    ts = np.linspace(0, 0.999, N + 1)
    for i in range(N):
        t, dt = ts[i], ts[i + 1] - ts[i]
        v, sc = fields(y, t); g = gs * (1 - t)
        y = y + (v + 0.5 * g**2 * sc) * dt + g * np.sqrt(dt) * r.normal(size=y.shape)
    k = np.argmin(((y[:, None] - mu[None])**2).sum(-1), 1)
    return np.bincount(k, minlength=7) / n

print("참 비중", w)
for gs in [0.0, 1.0, 2.0]:
    f = sample(gs)
    print(f"g={gs}    ", f.round(2), f"총변동 {0.5 * abs(f - w).sum():.3f}")
for N in [2, 4, 8]:
    f = sample(0.0, N=N)
    print(f"ODE {N}스텝", f.round(2), f"총변동 {0.5 * abs(f - w).sum():.3f}")
# 참 비중 [0.18 0.14 0.16 0.14 0.12 0.13 0.13]
# g=0.0     [0.18 0.15 0.16 0.13 0.13 0.13 0.12] 총변동 0.014
# g=1.0     [0.18 0.15 0.16 0.13 0.12 0.13 0.13] 총변동 0.010
# g=2.0     [0.18 0.14 0.16 0.14 0.13 0.13 0.14] 총변동 0.014
# ODE 2스텝 [0.05 0.02 0.08 0.02 0.47 0.14 0.23] 총변동 0.454
# ODE 4스텝 [0.12 0.08 0.13 0.07 0.25 0.15 0.19] 총변동 0.217
# ODE 8스텝 [0.15 0.12 0.15 0.1  0.18 0.14 0.16] 총변동 0.102
\`\`\`

바람 크기를 바꿔도 도착 비율은 그대로다. 총변동은 두 비율 표의 차이 절댓값을 더해 반으로 나눈 값이고, 0이면 두 표가 똑같다. 반면 ODE를 몇 스텝으로 푸느냐는 결과를 크게 바꾼다. 조건부 길은 직선이어도 주변 궤적이 휘어 있기 때문이다. 앞에서 본 OT 짝짓기와 reflow가 겨냥하는 것이 바로 이 스텝 수다.

### 대응표

| 드래곤볼 찾기 (디퓨전) | 철새의 이주 (플로우 매칭) |
|---|---|
| 레이더 (∇ₓ log p<sub>t</sub>) | 비행 프로그램 (v(x, t)) |
| 끌리는 방향 + 걷는 규칙(SDE/ODE) | 흐르는 속도 그 자체 |
| 안개 수준마다 다른 레이더 | 시간마다 다른 속도장 |
| 조건부 타깃 −(x<sub>t</sub> − α<sub>t</sub>x)/σ<sub>t</sub>² 의 평균 | 조건부 타깃 x − z 의 평균 |
| 역방향 SDE의 비틀거림 (g > 0) | ODE의 매끈한 궤적 (g = 0) — 두 방법 모두 두 샘플러를 다 쓸 수 있다 |
| 스코어 매칭 (L² 사영) | 속도장 학습 (L² 사영) |
| v = x/t + ((1 − t)/t)∇log p<sub>t</sub> 로 서로 옮겨짐 | 〃 |

### ML에서: 매니폴드만 바꾸면 — 비디오, 3D, 로보틱스

플로우 매칭의 틀은 "어떤 공간 위에서든" 노이즈에서 데이터로의 흐름을 설계할 수 있게 한다. 이미지(픽셀 공간의 매니폴드)는 하나의 사례일 뿐이다.

이미 큰 모델들이 이 틀을 쓴다. Stable Diffusion 3의 논문(Esser 외, 2024)은 노이즈와 데이터를 직선으로 잇는 정류 흐름 방식으로 이미지 생성 모델을 키웠다. Black Forest Labs의 FLUX.1도 스스로를 "rectified flow transformer"라고 소개한다. 로봇 쪽에서는 Physical Intelligence의 π0(Black 외, 2024)가 비전-언어 모델 위에 플로우 매칭으로 행동을 만드는 부분을 얹었다.

### 철새 비유의 확장

이미지 생성 = 픽셀들이 이루는 하늘을 나는 새. 비디오 생성 = 시간 축이 추가된 하늘을 나는 새. 3D 생성 = 3D 공간을 나는 새. 로봇 동작 = 관절 각도 공간을 나는 새.

"하늘의 차원이 달라져도 비행 프로그램의 구조는 같다."

### 관절 인형 — 비유가 실제가 되는 곳

매니폴드를 설명할 때 흔히 드는 비유가 관절 인형이다. "관절이 10개면 자유도는 10. 모든 가능한 자세는 고차원 공간 속의 10차원 매니폴드." 보통은 "매니폴드의 예시"로만 받아들이고 지나간다.

여기서 그 비유가 실제가 된다. 로봇 팔의 동작 생성이 정확히 이 문제다. 관절 각도 공간 위에서, 무작위로 뽑은 노이즈 동작에서 목표 동작(데이터)으로의 플로우를 학습한다. π0는 앞으로 할 동작을 몇 스텝 묶음으로 한꺼번에 만든다.

비유였던 것이 실제가 되는 순간.

| 영역 | 매니폴드 | 닮은 개념 |
|------|---------|------------|
| 이미지 | 픽셀 공간의 부분매니폴드 | 매니폴드 가설 |
| 비디오 | 시공간 매니폴드 | 좌표 패치 (매니폴드 한 조각에 붙인 좌표) |
| 3D | radiance field의 매니폴드 | 좌표 패치 |
| 로봇 동작 | 관절 각도 공간 | **관절 인형** |

### 수확

"디퓨전은 매 순간의 나침반, 플로우 매칭은 유전자의 비행 프로그램. 가우시안 경로 위에서 둘은 한 식으로 서로 옮겨지고, 바람의 크기는 우리가 고르는 샘플러의 선택이다. 같은 양 끝 분포, 같은 중간 분포, 다른 한 마리의 길."

"플로우 매칭의 틀은 공간에 무관하다. 하늘의 차원만 바꾸면 같은 비행 프로그램이 작동한다. 비유였던 관절 인형이 여기서 실제가 된다."

<!--
집필 노트: 15장의 비유 체계

중심 비유: 철새의 이주.

선택 이유:
1. 14장 드래곤볼(탐색/수렴)과 감각적으로 구별됨. 드래곤볼은 정적 풍경에서의 하강. 철새는 동적 흐름.
2. 속도장의 감각과 자연스럽게 맞음. 바람(벡터장)을 타고 흐르는 새. "비행 프로그램" = 학습된 속도장.
3. OT와의 연결이 자연스러움. 경로가 꼬이지 않는 최적 항로 배정 = 최적 수송(짝짓기).
4. 매니폴드 확장이 쉬움. "하늘의 차원만 바꾸면" = 다른 매니폴드.

비유 대응:
| 철새의 이주 | 플로우 매칭 | 교재 연결 |
|---|---|---|
| 시베리아 (여름 서식지) | 노이즈 분포 | — |
| 한반도 (겨울 서식지) | 데이터 분포 | — |
| 비행 프로그램 | 주변 속도장 v(x, t) | — |
| 직선 비행 | 조건부 직선 (1-t)z + tx | 4장 덧셈의 길과 대비(합성곱), 6장 볼록 결합 |
| 최적 항로 배정 | OT 짝짓기 | — |
| 경로 교차 방지 | W₂ 최적 짝 | 3장 거리 (다른 종류) |
| 유전자 각인 | 신경망 학습 (L² 사영) | 11장 사영과 같은 모양 |
| 다른 차원의 하늘 | 다른 매니폴드 | 8장 |
-->
`,J4=`# 넓히기와 좁히기 — 언어모델이 배우는 두 방향

넓게 배운 분포에는 좋은 것도 나쁜 것도 섞여 있다. 그래서 넓게 배운 것을 다시 좁혀야 한다.

분포를 바꾸는 방향은 두 가지다. 프롬프트의 와일드카드 {전투 | 일상 | 로맨스} 는 가능성을 넓히고(OR), 쉼표로 이어 붙인 조건 "존댓말, 세 문장 이내" 는 가능성을 좁힌다(AND). 넓히기는 분포를 섞는 덧셈(혼합)이고, 좁히기는 조건을 곱하는 곱셈이다. 분포의 공간에서 두 방향은 각각 덧셈의 길과 곱셈의 길, m-측지선과 e-측지선이 된다. 측지선은 그 공간에서 가장 곧은 길이고, m(혼합)은 확률을 그대로 섞는 길, e(지수)는 로그 확률을 섞는, 곧 확률을 곱하는 길이다.

이 장에서 그 두 방향이 언어모델 훈련의 실제 단계가 된다.

![넓히기(OR)와 좁히기(AND)](/images/chapters/ch16-or-and.svg)

언어모델이 태어나서 쓸모 있는 존재가 되기까지의 여정 — 프리트레인, SFT(지도 미세조정), 강화학습. 이 단계들은 차례로 한 번씩 지나간다. 그 각 단계가 무엇을 넓히고 무엇을 좁히는지, 그리고 그 넓힘과 좁힘이 분포의 공간에서 어떤 길인지를 이 교재의 도구로 읽을 수 있다.

미리 한 가지를 못 박아 둔다. 이 장에서 기하학을 읽는 곳은 신경망의 파라미터 공간이 아니라 **출력 분포의 공간**이다. 수십억 개의 가중치는 θ 좌표도 η 좌표도 아니다. log p = θ·t(x) − F(θ) 꼴의 분포 모임(지수족)에는 θ(자연모수. 모수는 분포를 정하는 숫자)와 η(통계량 t의 평균, 기대모수)라는 두 좌표가 있고, 둘은 한쪽이 정해지면 다른 쪽이 정해지는 짝(쌍대 좌표)이다. 이런 좌표는 지수족 위에서만 정의된다. 언어모델의 가중치 공간에는 그런 좌표가 없다. 그래서 "파라미터가 η 직선을 따라 걷는다" 같은 말은 하지 않는다. 대신 모델이 내놓는 분포 π(y) 가 어디로 가는지를 본다.


## 프리트레인: 교차엔트로피는 넓게 덮는 m-사영

"GPT가 셰익스피어처럼 쓸 수도 있고 레딧 댓글처럼 쓸 수도 있고 논문처럼 쓸 수도 있는 이유는 무엇인가? 이 세 능력이 어떻게 한 모델 안에 공존하는가?"

### 비유

라디오의 전 주파수대 스캔 —

![AM/FM 주파수 다이얼 — 모든 주파수대를 훑는다](/images/chapters/radio-dial.jpg)

라디오를 처음 켜면 아무 방송도 안 잡힌다. 전 주파수대를 스캔한다. AM, FM, 단파, 장파 — 모든 주파수를 훑는다. 클래식 방송도 잡히고, 뉴스도 잡히고, 외국어 방송도 잡히고, 잡음도 잡힌다. 스캔이 끝나면 라디오는 "어디에 뭐가 있는지" 안다. 아직 어떤 방송을 들을지 정하지 않았다. 모든 채널이 프리셋에 저장되어 있다.

프리트레인이 이것이다. 인터넷의 모든 텍스트를 본다. 셰익스피어도 보고, 레딧도 보고, 논문도 보고, 레시피도 본다. 각 데이터가 하나의 방송국이다. 모델은 이 모든 방송국의 위치를 파라미터 안에 기록한다.

### 와일드카드로 쓰면

이것은 와일드카드다. {셰익스피어 | 레딧 | 논문 | 레시피 | 코드 | 시 | 법률문서 | ...} 가능성을 넓히는 방향. 혼합. OR.

### 교재 도구와의 연결

프리트레인의 손실은 다음 토큰의 교차엔트로피다. 교차엔트로피는 엔트로피(분포의 평균 놀라움)와 KL 발산(두 분포가 같은 사건에 매기는 확률이 얼마나 다른지 재는 양)으로 쪼개진다.

\`\`\`latex
\\begin{aligned}
\\textcolor{#c05080}{\\mathcal{L}}_{\\mathrm{CE}}(\\textcolor{#7f8f10}{q}) &= -\\sum_y \\textcolor{#d6479f}{p}(y)\\log \\textcolor{#7f8f10}{q}(y) \\\\
&= \\textcolor{#9467bd}{H}(\\textcolor{#d6479f}{p}) + \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q})
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c05080}{\\mathcal{L}}_{\\mathrm{CE}} & \\text{교차엔트로피 손실} \\\\
\\textcolor{#d6479f}{p} & \\text{데이터 분포 (현실)} \\\\
\\textcolor{#7f8f10}{q} & \\text{모형의 출력 분포} \\\\
y & \\text{다음 토큰 (또는 문장)} \\\\
\\textcolor{#9467bd}{H} & \\text{엔트로피, 모형과 무관한 상수} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산}
\\end{array}
\`\`\`

H(p) 는 모형이 어쩔 수 없는 상수다. 그러니 교차엔트로피를 줄이는 것은 KL(p‖q) 를 줄이는 것과 같다. KL(p‖q) 는 현실 p의 눈으로 본 지도 q의 부정확함이다. 모형이 될 수 있는 분포들(모형족) 가운데 KL(p‖q) 가 가장 작은 q 를 고르는 일을 m-사영이라 부른다. 최대우도 추정(MLE, 모형이 데이터에 주는 확률을 가장 크게 하는 추정)이 바로 데이터의 경험분포(모은 표본 하나하나에 같은 확률을 준 분포)를 모형족으로 m-사영하는 일이다.

평균을 내는 무게가 p 쪽에 있다. 그래서 데이터에 조금이라도 있는 것을 모형이 0에 가깝게 두면 큰 벌점을 받는다. 빠뜨리는 것을 싫어하는 사영. 데이터가 여러 봉우리를 가지면, 모형은 봉우리를 모두 덮으려 한다.

분포는 심플렉스(합이 1인 확률들이 사는 삼각형) 위의 점이다. 데이터가 넓게 퍼져 있으면, 그 m-사영도 넓게 퍼진 곳에 앉는다. 어느 한 꼭짓점(하나의 확정된 답)에 치우치지 않는 점. 넓음은 사영의 방향이 만드는 것이 아니라 데이터가 넓어서 생긴다는 것을 기억해 두자. 다음 절에서 이 구분이 중요해진다.

### 파이썬

다섯 방송국의 비율 p 를 가진 데이터에, 처음에는 셰익스피어에 쏠린 모형을 교차엔트로피로 학습시킨다. 로짓에 대한 교차엔트로피의 기울기는 q − p 다.

\`\`\`python
import numpy as np

names = ["셰익스피어", "논문", "코드", "레딧", "레시피"]
p = np.array([0.10, 0.20, 0.25, 0.35, 0.10])     # 데이터 속 비율 (현실 p)
z = np.array([3.0, -1.0, 0.0, -2.0, 0.0])         # 처음 모형의 로짓: 셰익스피어에 쏠림

def softmax(z):
    e = np.exp(z - z.max()); return e / e.sum()
H = lambda q: -np.sum(q * np.log(q))

for step in range(301):
    q = softmax(z)
    ce = -np.sum(p * np.log(q))                   # 교차엔트로피 = H(p) + KL(p‖q)
    if step in (0, 30, 300):
        print(f"{step:3d}  q={np.round(q, 3)}  CE={ce:.3f}  KL={ce - H(p):.4f}  H(q)={H(q):.3f}")
    z -= 1.0 * (q - p)                            # ∂CE/∂z = q − p
print(f"H(p) = {H(p):.3f}")
#   0  q=[0.889 0.016 0.044 0.006 0.044]  CE=3.717  KL=2.2210  H(q)=0.478
#  30  q=[0.103 0.198 0.249 0.349 0.101]  CE=1.496  KL=0.0001  H(q)=1.500
# 300  q=[0.1  0.2  0.25 0.35 0.1 ]  CE=1.496  KL=0.0000  H(q)=1.496
# H(p) = 1.496
\`\`\`

한쪽에 쏠려 있던 모형(엔트로피 0.478)이 데이터의 다섯 봉우리를 모두 되살리며 넓어진다(1.496). 교차엔트로피는 H(p) = 1.496 아래로 내려가지 않는다. 남은 몫이 KL이다.

### 호기심 상자: 에피플렉시티 — 모든 방송이 같은 가치는 아니다

프리트레인이 OR이라면, 무엇을 OR할 것인가?

드문 일이 일어나면 놀랍다. 그 놀라움을 −log(확률)로 재면, 엔트로피는 "평균 놀라움"이다. 그런데 질문이 하나 있다. 누구의 놀라움인가?

섀넌의 정보이론은 계산 능력에 제한이 없는 관찰자를 가정한다. 그런 관찰자에게 의사난수 생성기의 출력은 짧은 시드 하나만큼의 정보밖에 없다 — 시드에서 결정론적으로 나오니까. 그런데 계산 시간이 제한된 관찰자, 예컨대 신경망에게는? 완벽한 노이즈로 보인다. 아무리 학습해도 패턴을 찾을 수 없다.

반대의 사례도 있다. 체스 기보는 규칙에서 나온 결정론적 기록에 가깝지만, 신경망에게는 배울 만한 구조가 가득하다. 수를 하나하나 예측하려면 깊은 전략적 이해가 필요하다.

Marc Finzi, Andrew Gordon Wilson 등은 2026년 1월 논문 "From Entropy to Epiplexity"에서 이 직관을 정의로 만들었다. 시간 제한 T 안에 돌아가는 프로그램(모형)만 쓸 수 있는 관찰자가 데이터를 가장 짧게 적으려 한다고 하자. 적는 길이(description length)는 두 부분이다. 모형 자체를 적는 길이와, 그 모형으로 데이터를 부호화한 길이. 그 합을 최소로 하는 모형이 정해지면, 정보가 두 조각으로 나뉜다.

① 시간 제한 엔트로피(time-bounded entropy) — 가장 좋은 모형으로도 남는 부호화 길이.
     그 관찰자에게는 끝까지 노이즈인 부분. 의사난수열, 해시값, 암호화된 데이터.
② 에피플렉시티(epiplexity) — 가장 좋은 모형 자체를 적는 길이.
     관찰자가 데이터에서 실제로 뽑아낼 수 있는 구조의 양.

논문은 의사난수 생성기의 출력이 시간 제한 엔트로피는 거의 최대이면서 에피플렉시티는 거의 상수임을 정리로 보였다.

### 실용적 측정

논문이 제시한 간단한 추정법은 학습 곡선에서 나온다. 데이터를 차례로 보며 학습할 때 i번째 표본에서의 손실을 𝓛<sub>i</sub>, 학습이 끝난 모형의 손실을 𝓛<sub>M</sub> 이라 하면,

\`\`\`latex
S \\approx \\sum_{i} \\big(\\textcolor{#c05080}{\\mathcal{L}}_i - \\textcolor{#c05080}{\\mathcal{L}}_M\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
S & \\text{에피플렉시티 추정값} \\\\
\\textcolor{#c05080}{\\mathcal{L}}_i & i\\text{번째 표본을 처음 볼 때의 손실} \\\\
\\textcolor{#c05080}{\\mathcal{L}}_M & \\text{학습을 마친 모형의 손실}
\\end{array}
\`\`\`

학습 곡선 아래 면적 전체가 아니라, **최종 손실보다 위쪽**의 면적이다. 최종 손실 아래 깔린 부분은 끝까지 줄지 않는 몫, 곧 시간 제한 엔트로피 쪽이다. 손실이 크게 떨어졌다면 → 배운 구조가 많다 → 에피플렉시티가 크다. 손실이 처음부터 끝까지 그대로면 → 곡선 위쪽 면적이 0 → 배울 구조가 없었다. (논문은 이 방식이 간단하지만 어림셈이라고 밝히고, 교사–학생 모형의 KL을 더하는 더 엄밀한 추정법도 함께 제시한다.)

### 프리트레인 데이터 선택에 대한 함의

논문은 텍스트 데이터의 에피플렉시티가 이미지 데이터보다 훨씬 크다고 측정했고, 텍스트로 프리트레인한 모델이 더 넓게 전이되는 이유 가운데 하나로 이것을 들었다. 데이터를 고를 때 퍼플렉시티(엔트로피 H의 지수값 e<sup>H</sup>)가 아니라 배울 수 있는 구조의 양을 기준으로 삼자는 것이 그 제안이다.

우리 식의 예를 하나 들면 이렇다. 랜덤 API 키와 설정 파일로 가득한 코드 →
     엔트로피는 높지만 배울 구조가 적다.
알고리즘의 내부 작동을 보여주는 잘 짜인 코드 →
     엔트로피는 적당하지만 배울 구조가 많다.

−log가 재는 놀라움에는 두 종류가 있는 셈이다. 배울 수 있는 놀라움과 배울 수 없는 놀라움. 프리트레인이 OR을 할 때, 배울 수 있는 놀라움을 많이 품은 데이터를 고르는 것이 현명하다.

### 수확

"프리트레인은 OR이다. 교차엔트로피는 KL(p‖q), 곧 m-사영이다. 데이터가 넓으니 모형도 넓어진다. 모든 봉우리를 살려두는 사영."

"같은 엔트로피라도 모든 정보가 같은 가치는 아니다. 계산이 제한된 관찰자에게는 학습 가능한 구조(에피플렉시티)와 학습 불가능한 잡음(시간 제한 엔트로피)이 구분된다. 에피플렉시티는 학습 곡선에서 최종 손실 위쪽의 면적으로 어림할 수 있다."


## SFT: 좁은 데이터 위로의 m-사영

"프리트레인된 모델은 뭐든 할 수 있지만 뭘 해야 할지 모른다. 질문에 답하는 대신 질문을 이어 붙이기도 한다. '정확하고 도움이 되는 답변'으로 좁히는 과정은 분포의 공간에서 무슨 일인가?"

### 비유

라디오의 튜닝 — 전 주파수대 스캔이 끝났다. 이제 듣고 싶은 방송을 고른다.

SFT = 주파수대 필터.
     "뉴스 채널 근처로 좁혀라."
     AM 주파수대의 뉴스 주파수 근처로 범위를 줄인다.
     아직 정확한 주파수는 아니다.
     근처의 몇 개 채널이 겹쳐 들린다.

     와일드카드에 쉼표로 조건을 붙이기 시작.
     {도움이 되는 답변}, {정중한 톤}.

RLVR = 정밀 다이얼.
     RLVR은 "검증 가능한 보상으로 하는 강화학습"이다.
     답이 맞았는지 프로그램이 확인할 수 있는 문제(수학, 코드)에서 쓴다.
     정확히 하나의 주파수에 맞춘다.
     잡음이 사라지고 선명한 시그널이 나온다.
     "주어진 수학 문제에 대해,
     검증 가능한 정답에 도달하라."

     매 조건이 필터로 곱해진다:
     수학 문제 × 정확한 답 × 검증 통과.
     쉼표가 추가될 때마다 겹치는 영역만 살아남는다.

### SFT는 m-사영이다 — 좁아진 것은 데이터다

비유만 믿으면 SFT도 "곱셈의 길"처럼 보인다. 식을 보면 그렇지 않다. SFT의 손실도 프리트레인과 똑같은 교차엔트로피다. 바뀐 것은 p 뿐이다. 인터넷 전체 대신, 사람이 쓴 모범 답변들의 분포 p<sub>SFT</sub> 로.

그러니 SFT는 여전히 KL(p<sub>SFT</sub>‖q) 를 줄이는 m-사영이다. 빠뜨리는 것을 싫어하는 사영 그대로다. 모범 답변들이 좁은 영역에 모여 있으니, 그것을 덮는 모형도 좁아진다. **좁아지는 것은 데이터이지, 사영의 방향이 아니다.**

### 순서 — 교대가 아니라 차례

프리트레인 → SFT → 강화학습은 한 번씩 차례로 지나가는 파이프라인이다. 숨은 변수를 추정하는 EM 알고리즘처럼 두 단계를 여러 번 번갈아 되풀이하는 것이 아니다. 그리고 강화학습 단계도 두 종류가 있다. InstructGPT(Ouyang 외 2022)가 정착시킨 RLHF(사람 피드백 강화학습)는 사람의 선호를 배운 보상 모델을 쓴다. RLVR은 정답 검사기가 보상을 준다. 보상의 출처가 다를 뿐, "보상을 올리되 참조에서 너무 멀어지지 말라"는 뼈대는 같다.

### 호기심 상자: 당신은 이미 EM을 하고 있다

프리트레인과 강화학습은 상당한 비용이 드는 대규모 작업이다. 그런데 넓히기와 좁히기는 거대한 모델 훈련만의 이야기가 아니다.

실리태번(SillyTavern)의 채팅 프리셋을 만들어본 적이 있는가? 스테이블 디퓨전의 프롬프트 와일드카드를 다듬어본 적이 있는가? 그렇다면 당신은 EM과 닮은 일을 이미 하고 있었던 것이다.

### 프리셋은 분포를 조각하는 도구다

혼동하지 않게 확실히 해두자. 프리셋 하나는 하나의 대상을 만드는 도구가 아니다. 그 프리셋으로 실행할 수 있는 무수한 채팅 세션들의 **분포**를 조각하는 도구다.

와일드카드도 마찬가지다. 하나의 이미지를 만드는 것이 아니라, 그 와일드카드로 생성할 수 있는 무수한 이미지들의 **집합**을 디자인하는 것이다.

분포 전체를 점 하나로 보듯, 프리셋 하나가 분포 하나다. 프리셋을 고치는 것은 그 점을 옮기는 것이다.

### 넓히기 — 가능성을 연다

캐릭터를 추가한다. 배경 설정을 확장한다. 와일드카드에 선택지를 넣는다.

     {전투 | 일상 | 로맨스 | 미스터리}

이것은 와일드카드 — OR — 그 자체다. 봉우리가 늘어난다. 가능한 세션의 범위가 팽창한다. 엔트로피가 올라간다. 혼합의 방향. m-측지선.

### 좁히기 — 가능성을 다듬는다

"이 어휘는 절대 쓰지 마." "항상 존댓말로." "전투 장면에서는 3문장 이내로." "NSFW는 안됩니다."

매 조건이 필터로 곱해진다. 쉼표로 붙인 조건 — AND. 겹치는 영역만 살아남는다. 가능한 세션의 범위가 수축한다. 곱셈의 방향. e-측지선.

### 교대 — 그리고 멈춤

프리셋 제작자는 이 두 조작을 번갈아 한다.

캐릭터를 추가하고(OR), 결과를 돌려보고, 원치 않는 패턴이 나오면 제약을 추가하고(AND), 다시 돌려보고, 너무 좁으면 다시 풀어주고(OR), 다시 돌려보고, 또 다듬고(AND).

넓히고, 좁히고, 넓히고, 좁히고.

EM 알고리즘도 두 단계를 번갈아 한다. E-스텝(숨은 변수의 가능성을 열어두기)과 M-스텝(파라미터를 확정하기)의 교대. 물론 이것은 비유다. 프리셋 제작자는 KL을 재지 않고, 매 교대가 무언가를 줄인다는 보장도 없다. 닮은 것은 "두 조작을 번갈아 하며 고정점을 찾는다"는 모양이다.

### 좋은 프리셋이 멈춘 프리셋이다

EM이 매번 목적함수를 줄이는 이유는 교대 최소화 자체에 있다. 각 단계가 한쪽을 고정하고 다른 쪽에서 최선을 고르니, 값이 나빠질 수 없다. 사영한 점을 사이에 두면 KL이 직각삼각형의 변처럼 나뉜다는 성질(KL의 피타고라스 관계)이 그 감소량을 정확히 재 준다.

프리셋 제작에는 그런 보장이 없다. 캐릭터를 추가했더니 톤이 깨졌다 — 넓히기가 좁히기의 성과를 되돌려버린 것. 이런 일이 반복되면 제작자는 같은 곳을 맴돈다. 그렇다고 "두 조작이 직교하지 않아서 수렴하지 않는다"고 단정할 근거는 없다. 맴도는 이유는 대개 더 단순하다. 조작이 서로 무엇을 건드리는지 모른 채 고치기 때문이다.

성공적인 프리셋은 표현하고 싶은 것들이 등장할 수 있게 하면서도(OR의 성과가 살아 있고) 등장하지 말아야 할 것들은 안 나오게 하는(AND의 성과가 살아 있는) 지점에서 멈춘 것이다. 넓힘과 좁힘이 더 이상 서로를 되돌리지 않는 지점. EM에서 KL이 더 이상 줄지 않는 점(정류점)과 닮은 모양이다.

### 수확

"SFT는 좁은 데이터 위로의 m-사영이다. 좁아진 것은 데이터다. 강화학습은 데이터 없이 보상으로 좁힌다. 그 좁힘이 정말 곱셈의 길인지는, 목적식을 풀어 보면 안다."

"프리트레인과 강화학습만이 넓히기와 좁히기가 아니다. 프리셋을 다듬는 사람, 와일드카드를 조합하는 사람도 이 두 조작을 손으로 번갈아 하고 있다. EM과 달리 그 교대에는 감소 보장이 없다는 것까지가 이 비유의 정직한 크기다."


## 기울이기: KL로 묶은 보상 최대화의 닫힌꼴

"보상을 올리라고만 하면 모형은 한 답에 몰빵한다. 참조에서 멀어지지 말라고만 하면 아무것도 배우지 않는다. 둘을 저울질한 최적의 분포는 어떤 모양인가?"

RLVR은 SFT와 사정이 다르다. 정답 데이터가 주어지지 않는다. 모형이 직접 답을 내고, 보상 r 이 점수를 매긴다. 그리고 모형이 원래 모습에서 너무 멀어지지 않도록 참조 모형 π<sub>ref</sub> 와의 KL로 묶는다. 이 목적식과 그 닫힌꼴 해가 이 장 기하학의 핵심이다.

### 목적식

RLHF와 RLVR이 공통으로 쓰는 목적식은 이렇다.

\`\`\`latex
\\max_{\\textcolor{#7f8f10}{\\pi}}\\ \\ \\mathbb{E}_{y\\sim\\textcolor{#7f8f10}{\\pi}}\\big[\\textcolor{#d0721f}{r}(y)\\big] - \\textcolor{#9c6b52}{\\beta}\\,\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{\\pi}\\,\\|\\,\\textcolor{#139696}{\\pi_{\\mathrm{ref}}})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{\\pi} & \\text{학습하는 정책 (답변 } y \\text{ 의 분포)} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책 (보통 SFT 모형)} \\\\
\\textcolor{#d0721f}{r} & \\text{보상} \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{KL 계수, 클수록 참조에 단단히 묶임} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
y & \\text{답변 하나}
\\end{array}
\`\`\`

KL 안에서 평균을 내는 무게가 π 쪽에 있다. π 가 참조가 0을 준 답에 확률을 두면 log(π/π<sub>ref</sub>) 가 무한대로 간다. 그러니 이 벌칙은 **참조가 불가능하다고 본 답을 새로 지어내는 것**을 막는다. 반대로 참조가 가진 답 몇 개를 π 가 버리는 것에는 너그럽다. (그 답에서는 π = 0 이라 무게 자체가 0이다.) 0을 강요하는(zero-forcing) 벌칙이다.

### 닫힌꼴 해

π 가 어떤 분포든 될 수 있다면, 이 문제는 손으로 풀린다. 목적식을 이렇게 고쳐 쓰면 된다.

\`\`\`latex
\\begin{aligned}
&\\textcolor{#7f8f10}{\\pi^{*}}(y) = \\frac{\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)\\, e^{\\textcolor{#d0721f}{r}(y)/\\textcolor{#9c6b52}{\\beta}}}{\\textcolor{#7d8a3a}{Z}} \\\\[6pt]
&\\mathbb{E}_{\\textcolor{#7f8f10}{\\pi}}[\\textcolor{#d0721f}{r}] - \\textcolor{#9c6b52}{\\beta}\\,\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{\\pi}\\,\\|\\,\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}) \\\\
&\\quad = \\textcolor{#9c6b52}{\\beta}\\log \\textcolor{#7d8a3a}{Z} - \\textcolor{#9c6b52}{\\beta}\\,\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{\\pi}\\,\\|\\,\\textcolor{#7f8f10}{\\pi^{*}})
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{\\pi^{*}} & \\text{최적 정책} \\\\
\\textcolor{#7d8a3a}{Z} & \\text{정규화 상수 (합이 1이 되게 나누는 수) } \\sum_y \\pi_{\\mathrm{ref}}(y)\\, e^{r(y)/\\beta} \\\\
\\textcolor{#7f8f10}{\\pi} & \\text{학습하는 정책} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책} \\\\
\\textcolor{#d0721f}{r} & \\text{보상} \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{KL 계수} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산}
\\end{array}
\`\`\`

확인은 한 줄이다. E<sub>π</sub>[r] − β Σ π log(π/π<sub>ref</sub>) = −β Σ π log(π / (π<sub>ref</sub> e<sup>r/β</sup>)) 이고, π<sub>ref</sub> e<sup>r/β</sup> = Z·π* 를 넣으면 위 식이 된다. β log Z 는 π 와 무관하고, KL(π‖π*) 는 π = π* 에서만 0이다. 그러니 최적해는 π* 하나다.

이 식을 두고 두 가지를 확인해 두자. 첫째, 보상이 없으면(r = 0) π* = π<sub>ref</sub> 다. KL 벌칙만 있는 문제에서는 어느 방향의 KL을 쓰든 답이 참조 그 자체다. 어떤 KL을 골랐느냐가 "한 봉우리로 몰린다"를 만들지는 않는다. 그것은 다음 절에서 다시 따진다. 둘째, 좁히기를 만드는 것은 보상 항이다. 보상이 높은 답의 확률이 e<sup>r/β</sup> 배로 불어난다.

### 곱셈의 길 — e-측지선

π* 의 모양을 지수족의 눈으로 보자. 지수족은 기준 분포에 exp(θ × 통계량)을 곱하고 정규화한 분포들의 모임이다.

\`\`\`latex
\\begin{gathered}
\\textcolor{#7f8f10}{\\pi}_{\\textcolor{#3b7de0}{\\theta}}(y) = \\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)\\, \\exp\\!\\big(\\textcolor{#3b7de0}{\\theta}\\, \\textcolor{#d0721f}{r}(y) - \\textcolor{#7d8a3a}{F}(\\textcolor{#3b7de0}{\\theta})\\big) \\\\
\\textcolor{#3b7de0}{\\theta} = 1/\\textcolor{#9c6b52}{\\beta}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{\\pi}_{\\textcolor{#3b7de0}{\\theta}} & \\text{기울인 정책들의 족} \\\\
\\textcolor{#3b7de0}{\\theta} & \\text{자연모수 (온도의 역수, 역온도 } 1/\\beta \\text{)} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책 (캐리어 자리)} \\\\
\\textcolor{#d0721f}{r} & \\text{보상 (충분통계량 자리)} \\\\
\\textcolor{#7d8a3a}{F} & \\text{로그정규화자 } \\log Z \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{KL 계수}
\\end{array}
\`\`\`

보상 r 이 충분통계량(분포가 답변에서 보는 유일한 값), π<sub>ref</sub> 가 캐리어(기준 분포), θ = 1/β 가 자연모수인 1차원 지수족이다. θ 좌표에서 직선 — 곧 이 족 전체가 π<sub>ref</sub> 에서 출발하는 e-측지선이다. 로그를 씌우면 log π<sub>θ</sub> = log π<sub>ref</sub> + θ r − F(θ). 로그 확률에 보상을 **더하는** 것, 확률에는 **곱하는** 것. β를 줄이는 것은 이 e-측지선을 따라 참조에서 멀어지는 것이다.

보상이 0 또는 1인 이진 보상(RLVR의 정답 검사)이면 그림이 더 선명해진다. 정답들의 확률은 모두 e<sup>1/β</sup> 배, 오답들은 그대로. 그다음 정규화. β → 0 이면 오답의 몫이 0으로 가고,

\`\`\`latex
\\textcolor{#7f8f10}{\\pi^{*}}(y) \\;\\xrightarrow{\\ \\textcolor{#9c6b52}{\\beta}\\to 0\\ }\\; \\textcolor{#139696}{\\pi_{\\mathrm{ref}}}\\big(y \\,\\big|\\, \\textcolor{#d0721f}{r}(y) = 1\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#7f8f10}{\\pi^{*}} & \\text{최적 정책} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(\\cdot \\mid r=1) & \\text{정답으로 조건부화한 참조} \\\\
\\textcolor{#d0721f}{r} & \\text{이진 보상 (정답이면 1)} \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{KL 계수}
\\end{array}
\`\`\`

참조 정책에 "정답일 것"이라는 조건을 거는 것 — 참조 분포에 정답이면 1, 아니면 0인 함수(지시함수)를 곱하고 정규화하는 것이다. 쉼표로 조건을 붙이는 것, AND 그 자체다. 정답들 사이의 상대 비율은 참조가 준 그대로 남는다는 점도 눈여겨보자. 강화학습은 참조가 모르던 정답을 새로 만들지 않는다. 참조가 이미 가진 정답을 추려낼 뿐이다. (적어도 이 이상적인 최적해에서는 그렇다. 실제 학습은 모형족과 최적화의 한계 때문에 이 해에 정확히 가지 못한다.)

{{viz: ch16/tilt}}

### DPO — 보상을 정책 안에 숨기기

닫힌꼴을 뒤집어 읽으면 보상이 정책으로 표현된다.

\`\`\`latex
\\textcolor{#d0721f}{r}(y) = \\textcolor{#9c6b52}{\\beta}\\log\\frac{\\textcolor{#7f8f10}{\\pi^{*}}(y)}{\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)} + \\textcolor{#9c6b52}{\\beta}\\log \\textcolor{#7d8a3a}{Z}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#d0721f}{r} & \\text{보상} \\\\
\\textcolor{#9c6b52}{\\beta} & \\text{KL 계수} \\\\
\\textcolor{#7f8f10}{\\pi^{*}} & \\text{최적 정책} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책} \\\\
\\textcolor{#7d8a3a}{Z} & \\text{정규화 상수 (답변과 무관)}
\\end{array}
\`\`\`

Rafailov 외(2023)의 DPO(Direct Preference Optimization)는 이 식에서 출발한다. 두 답변 중 사람이 어느 쪽을 더 좋아했는지만 비교하면 β log Z 가 상쇄된다. 그래서 보상 모델을 따로 학습하지 않고, β log(π/π<sub>ref</sub>) 를 "암묵적 보상"으로 삼아 정책을 곧바로 학습한다. 논문의 부제가 이것을 한 줄로 말한다. "당신의 언어모델은 사실 보상 모델이다."

### 파이썬

참조가 다섯 답변에 확률을 나눠 주고, 그중 둘(답 1, 답 3)이 정답이다.

\`\`\`python
import numpy as np

ref = np.array([0.30, 0.25, 0.20, 0.15, 0.10])   # 참조 정책 π_ref
r = np.array([0, 1, 0, 1, 0.])                   # 이진 보상: 답 1, 답 3이 정답

for beta in [2, 1, 0.5, 0.2, 0.05]:
    w = ref * np.exp(r / beta)
    pi = w / w.sum()                             # π* ∝ π_ref · exp(r/β)
    kl = np.sum(pi * np.log(pi / ref))
    obj = pi @ r - beta * kl
    print(f"β={beta:<4} π*={np.round(pi, 3)}  E[r]={pi @ r:.3f}  KL={kl:.3f}  "
          f"목적={obj:.4f}  βlogZ={beta * np.log(w.sum()):.4f}")
print("정답으로 조건부화한 π_ref:", ref * r / (ref @ r))
# β=2    π*=[0.238 0.327 0.159 0.196 0.079]  E[r]=0.524  KL=0.031  목적=0.4614  βlogZ=0.4614
# β=1    π*=[0.178 0.403 0.119 0.242 0.059]  E[r]=0.644  KL=0.121  목적=0.5231  βlogZ=0.5231
# β=0.5  π*=[0.084 0.52  0.056 0.312 0.028]  E[r]=0.831  KL=0.394  목적=0.6343  βlogZ=0.6343
# β=0.2  π*=[0.005 0.619 0.003 0.371 0.002]  E[r]=0.990  KL=0.856  목적=0.8188  βlogZ=0.8188
# β=0.05 π*=[0.    0.625 0.    0.375 0.   ]  E[r]=1.000  KL=0.916  목적=0.9542  βlogZ=0.9542
# 정답으로 조건부화한 π_ref: [0.    0.625 0.    0.375 0.   ]
\`\`\`

최적해에서 목적식의 값은 정확히 β log Z 다(KL(π*‖π*) = 0 이니까). β가 작아질수록 두 정답의 비율은 0.25 : 0.15 = 0.625 : 0.375 로 모인다. 참조가 준 비율 그대로다. KL은 log(1/0.40) = 0.916 에서 멈춘다. 정답 집합의 참조 확률이 0.40 이었으니까.

### 수확

"KL로 묶은 보상 최대화의 해는 π<sub>ref</sub>·e<sup>r/β</sup> 이다. 참조 분포를 보상 방향으로 기울인 지수족, β가 움직이는 e-측지선. 이진 보상에서 β → 0 이면 정답 집합으로 조건부화한 참조 — AND. 곱셈의 길은 SFT가 아니라 여기에 있었다."


### 문제 1. 보상과 KL 사이의 최적 정책

답변 y 가 유한 개인 상황에서 E<sub>π</sub>[r] − β KL(π‖π<sub>ref</sub>) 를 최대화하는 π 를 라그랑주 승수로 구하라. 정규화 제약 Σπ = 1 을 빼먹으면 어떤 답이 나오는지도 확인하라.

#### 함께 풀기

**선생님:** 변수는 π(y) 들이에요. 미분부터 해 봐요.

**이서연:** π(y) 로 미분하면 r(y) − β(log π(y) − log π<sub>ref</sub>(y) + 1) 이에요. 0으로 두면 π(y) = π<sub>ref</sub>(y)·e<sup>r(y)/β − 1</sup> 이요.

**선생님:** 답이 확률분포예요?

**이서연:** 더해 보면… π<sub>ref</sub> 가 0.3, 0.7 이고 보상이 1, 0, β = 1 이면 0.3·e⁰ + 0.7·e⁻¹ = 0.558 이네요. 1이 아니에요.

**김민준:** 합이 1이 아닌 걸 그냥 나누면 되잖아. 코드에서는 늘 그렇게 해.

**선생님:** 결과는 맞아요. 그런데 서연 학생의 식이 왜 틀렸는지는 짚고 가요. 무엇을 빼먹었죠?

**이서연:** 제약이요. π 가 확률분포여야 한다는 조건 없이 최대화하면, 목적식이 π 의 크기까지 마음대로 고르게 돼요. 라그랑주 항 λ(Σπ − 1) 을 넣으면 −1 자리에 λ 가 붙어서, 상수 인자가 정규화 상수 Z 로 정해져요.

**선생님:** 그래서 π*(y) = π<sub>ref</sub>(y)e<sup>r(y)/β</sup>/Z. 방금 숫자로는요?

**김민준:** 정규화 전 값이 0.3e = 0.815, 0.7 이니까 Z = 1.515, π* = (0.538, 0.462) 요.

〔S07〕 **이서연:** 정규화 상수가 그냥 나누기가 아니라 승수에서 나오는 거였네요. 해석학 시간에 구면 위에서 최댓값 찾을 때, 제약을 빼고 풀면 원점에서 무한대로 도망가던 것과 같은 실수예요.

**김민준:** 조교가 "합계가 100점이 되게 배점하라"는 조건을 안 읽고 문제마다 점수를 매긴 거네. 나중에 비율로 맞추면 되긴 하는데, 조건이 왜 있는지는 모르는 거고.

### 문제 2. β → 0 과 조건부화

π<sub>ref</sub> = (0.30, 0.25, 0.20, 0.15, 0.10), 정답은 답 1과 답 3(0부터 셈)이다. 이진 보상에서 β → 0 일 때 π* 의 극한을 구하고, 최적해의 KL(π*‖π<sub>ref</sub>) 극한값을 구하라.

#### 함께 풀기

**김민준:** β → 0 이면 e<sup>1/β</sup> 가 폭발하니까, 확률이 전부 가장 좋은 답 하나로 가요. 답 1이 0.25 로 정답 중에 제일 크니까 (0, 1, 0, 0, 0).

**선생님:** 답 1과 답 3의 보상은 각각 얼마예요?

〔M04〕 **김민준:** 둘 다 1이요. 아… 둘 다 똑같이 e<sup>1/β</sup> 배가 되니까 둘 사이의 비율은 안 변해요.

**이서연:** 그러면 극한은 정답 둘에 0.25 : 0.15 로 나눈 (0, 0.625, 0, 0.375, 0) 이에요. 참조를 "정답이다"라는 사건으로 조건부화한 거예요.

**선생님:** KL은요?

**이서연:** π* 가 정답 집합 안에서 π<sub>ref</sub> 에 비례하니까 log(π*/π<sub>ref</sub>) 가 어디서나 log(1/0.40) 이에요. 그래서 0.916 이요.

**선생님:** 민준 학생의 답은 어떤 보상이었으면 맞았을까요?

**김민준:** 보상이 답마다 다 달랐으면요. 가장 큰 보상 하나로 몰리는 건 동점이 없을 때 얘기네요.

**김민준:** 조별 과제에서 A+ 받은 조가 두 개면 둘 다 A+지, 인원 많은 조 하나만 A+가 되는 게 아니잖아요.


## KL의 방향: 모형족이 좁을 때만 갈린다

"같은 '좁히기'인데 결과가 다르다면, 그 차이는 어디에서 오는가?"

### 비유

라디오 다이얼의 두 가지 방식 —

방식 1 — 시그널 중심 튜닝, KL(π‖목표):
     "내가 잡은 주파수에서 잡음이 없도록."
     한 채널에 완벽하게 맞추고,
     바로 옆 채널은 과감히 놓친다.
     평균을 내는 무게가 모형 π 쪽에 있어서,
     목표가 거의 0인 곳에 π 가 확률을 두면 큰 벌칙을 받는다.
     π 가 목표의 봉우리 일부를 버리는 것은 벌하지 않는다.
     → 모형이 다 덮을 수 없을 때, 봉우리 하나에 몰린다. mode-seeking.

방식 2 — 주파수대 커버 튜닝, KL(목표‖π):
     "목표가 확률을 주는 모든 곳을 놓치지 않도록."
     여러 채널을 동시에 약하게 수신.
     평균을 내는 무게가 목표 쪽에 있어서,
     목표가 가진 곳을 π 가 0에 가깝게 두면 큰 벌칙을 받는다.
     → 모형이 다 덮을 수 없을 때, 봉우리들 사이로 넓게 퍼진다. mode-covering.

### 방향이 차이를 만드는 조건

여기서 조심할 것이 있다. π 가 어떤 분포든 될 수 있다면, 두 KL 모두 π = 목표에서 0이 되고 거기서 최소다. 방향은 아무 차이도 만들지 않는다. 앞 절에서 보상이 없으면 π* = π<sub>ref</sub> 였던 것도 같은 이야기다.

방향이 차이를 만드는 것은 **모형족이 목표를 담지 못할 때**다. 봉우리 둘인 목표를 봉우리 하나짜리 모형으로 근사해야 할 때, KL(목표‖π) 는 둘 사이에 넓게 걸치고, KL(π‖목표) 는 한쪽을 고른다. KL(목표‖π) 를 줄이는 것이 m-사영, KL(π‖목표) 를 줄이는 것이 e-사영이다. 두 사영의 차이가 바로 이것이다.

언어모델에서 모형족의 제한은 어디서 올까. 유한한 신경망, 유한한 학습 스텝, 그리고 무엇보다 보상 항이다. 앞 절의 목적식은 KL(π‖π*) 를 줄이는 것과 같았다. π* 자체가 보상 쪽으로 기울어 있고, π 가 π* 를 정확히 표현하지 못하면 π 는 π* 의 봉우리 일부로 몰리는 쪽으로 틀린다.

### α-발산 — 두 방향 사이를 걷는 다이얼

"KL(π‖목표)는 너무 좁히고 KL(목표‖π)는 너무 넓히면, 그 사이를 걸을 수 없는가?"

라디오의 수신 폭 조절 다이얼 — 지금까지 라디오에는 두 가지 수신 방식만 있었다: 전 주파수대 수신(넓음)과 단일 주파수 수신(좁음). 그런데 수신 폭 다이얼이 하나 더 있다면? 다이얼을 돌려서 수신 폭을 조절. 넓으면 여러 채널이 겹쳐 들리고(mode-covering), 좁으면 하나만 선명하게 들린다(mode-seeking). 이 다이얼이 α다.

### α-발산의 정의 — 아마리의 규약

아마리의 규약을 쓴다. α = +1 이 e 쪽, α = −1 이 m 쪽이다.

\`\`\`latex
\\textcolor{#c2398a}{D}_{\\textcolor{#8f7a5a}{\\alpha}}(\\textcolor{#d6479f}{p}\\,\\|\\,\\textcolor{#7f8f10}{q}) = \\frac{4}{1-\\textcolor{#8f7a5a}{\\alpha}^2}\\Big(1 - \\sum_y \\textcolor{#d6479f}{p}(y)^{\\frac{1-\\textcolor{#8f7a5a}{\\alpha}}{2}}\\, \\textcolor{#7f8f10}{q}(y)^{\\frac{1+\\textcolor{#8f7a5a}{\\alpha}}{2}}\\Big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{D}_{\\textcolor{#8f7a5a}{\\alpha}} & \\alpha\\text{-발산} \\\\
\\textcolor{#8f7a5a}{\\alpha} & \\text{발산 지수} \\\\
\\textcolor{#d6479f}{p} & \\text{목표 (현실) 분포} \\\\
\\textcolor{#7f8f10}{q} & \\text{모형}
\\end{array}
\`\`\`

α → −1 이면 KL(p‖q): 목표 쪽에 무게, m-사영, mode-covering. α → +1 이면 KL(q‖p): 모형 쪽에 무게, e-사영, mode-seeking. α = 0 이면 2 Σ(√p − √q)², 헬링거 거리 제곱의 네 배 꼴로 대칭이다. α-발산은 "무엇을 곧은 길로 볼지"를 정하는 규칙(접속)도 ±α 한 쌍으로 만든다. 그래서 이 다이얼은 발산의 다이얼이면서 동시에 곧음의 다이얼이기도 하다. α = 0 의 접속은 피셔 계량(곳마다 작은 걸음의 길이를 분포가 달라지는 정도로 재는 규칙)이 정하는 보통의 곧은 길, 레비-치비타 접속이다.

봉우리 둘인 목표를 가우시안 하나로 근사하면서 α를 돌려 보자. α가 −1에서 올라가는 동안 근사는 두 봉우리 사이에 넓게 걸쳐 있다가, 어느 지점에서 한쪽 봉우리로 **뛰어넘는다**. 연속적인 다이얼인데 결과는 연속적이지 않을 수 있다. 두 극소점이 경쟁하다가 순위가 바뀌는 순간이다.

{{viz: ch16/alpha-fit}}

### α를 스케줄링한다면

강화학습 초기에는 α를 m 쪽에 두어 다양성을 지키고, 후기에는 e 쪽으로 옮겨 정답 경로에 집중하는 설계를 생각해 볼 수 있다. "처음에는 넓게 듣다가, 점점 좁혀간다." 다만 뒤의 엔트로피 붕괴 절에서 보듯이, 실제 붕괴를 미는 힘은 KL 방향보다 보상 쪽에 있다. 발산의 모양을 바꾸는 것만으로 다양성이 지켜진다고 기대하면 안 된다.

### 파이썬

봉우리 둘(무게 0.6, 0.4)인 목표에 가우시안 하나를 격자 탐색으로 맞춘다.

\`\`\`python
import numpy as np

x = np.linspace(-8, 8, 401); dx = x[1] - x[0]
N = lambda m, s: np.exp(-0.5 * ((x - m) / s)**2) / (s * np.sqrt(2 * np.pi))
p = 0.6 * N(-2.5, 0.8) + 0.4 * N(2.5, 0.8)       # 봉우리 둘인 목표

def D(p, q, a):
    p, q = p + 1e-300, q + 1e-300
    if a <= -0.999: return np.sum(p * np.log(p / q)) * dx          # KL(p‖q)
    if a >= 0.999:  return np.sum(q * np.log(q / p)) * dx          # KL(q‖p)
    return 4 / (1 - a * a) * (1 - np.sum(p**((1 - a) / 2) * q**((1 + a) / 2)) * dx)

mus, ss = np.linspace(-4, 4, 161), np.linspace(0.3, 4, 75)
for a in [-1, -0.2, 0.2, 0.4, 1]:
    d, m, s = min((D(p, N(m, s), a), m, s) for m in mus for s in ss)
    print(f"α={a:+.1f}  평균 {m:+.2f}  표준편차 {s:.2f}")
# α=-1.0  평균 -0.50  표준편차 2.60
# α=-0.2  평균 -0.50  표준편차 2.50
# α=+0.2  평균 -0.45  표준편차 2.45
# α=+0.4  평균 -2.50  표준편차 0.80
# α=+1.0  평균 -2.50  표준편차 0.80
\`\`\`

α = −1 의 답은 목표의 평균(−0.5)과 표준편차(2.58)를 맞춘 것, 곧 평균과 분산을 맞춘 것(모멘트 일치)이다. α = 0.2 와 0.4 사이에서 답이 큰 봉우리로 뛰어넘는다.

### 수확

"KL의 방향은 모형이 목표를 다 담지 못할 때 차이를 만든다. KL(π‖목표)는 목표가 없는 곳을 싫어하고, KL(목표‖π)는 목표가 있는 곳을 놓치기 싫어한다."

"두 KL은 α-발산 한 족의 양 끝이다. 규약은 α = +1 이 e 쪽, α = −1 이 m 쪽. α는 발산의 다이얼이면서 접속의 다이얼이다. 연속적인 다이얼이 불연속적인 답을 낼 수 있다."

### 문제 3. 봉우리 둘, 봉우리 하나짜리 족

p = (0.45, 0.1, 0.45) 는 양 끝에 봉우리가 있는 분포다. 모형족을 이항분포 Bin(2, m), 곧 q = ((1−m)², 2m(1−m), m²) 로 제한한다. KL(p‖q) 와 KL(q‖p) 를 각각 최소화하는 q 를 구하라.

#### 함께 풀기

**김민준:** 쉽네요. 두 KL 다 q = p 에서 0이니까 답은 둘 다 (0.45, 0.1, 0.45) 요.

**선생님:** 그 q 가 이항분포예요?

〔M05〕 **김민준:** (1−m)² = 0.45 면 m = 0.33, 그러면 m² = 0.108… 0.45가 안 나와요. 족 안에 p 가 없어요. 그럼 둘 다 어디로 가는 거죠?

**이서연:** KL(p‖q) 쪽은 m-사영이야. 이항분포가 지수족이니까 충분통계량의 평균을 맞추면 돼. E<sub>p</sub>[x] = 0.1 + 0.9 = 1.0 이고 이항은 평균이 2m 이니까 m = 0.5, q = (0.25, 0.5, 0.25).

**김민준:** 가운데에 0.5? p 가 제일 싫어하는 곳에 제일 많이 줬네. 이게 넓게 덮는 거야?

**선생님:** 이 족은 봉우리 둘을 못 만들어요. 양쪽을 다 안 놓치려면 가운데 불룩한 모양밖에 없어요. 다른 쪽은요?

**이서연:** KL(q‖p) 는 q 가 가운데를 싫어하게 만드니까… 한쪽 끝으로 완전히 몰릴 거예요. m = 1, q = (0, 0, 1).

**김민준:** 계산해 보면 m = 1 에서 KL(q‖p) 는 log(1/0.45) = 0.799 야. 격자로 훑으니까 최소는 m ≈ 0.75, q = (0.063, 0.375, 0.562), KL = 0.498 이고. m = 0.5 에서는 0.511.

〔S06〕 **이서연:** 한쪽으로 기울긴 했는데 가운데에 0.375 나 남았네요. 몰림이 끝까지 안 가요.

**선생님:** m 을 1로 밀면 무엇을 잃죠?

**이서연:** q 가 한 점이 되면 엔트로피가 0이 돼요. KL(q‖p) = −H(q) − E<sub>q</sub>[log p] 니까 엔트로피 항이 퍼지라고 밀고, log p 항이 봉우리로 가라고 밀어요. 두 힘이 m = 0.75 에서 만나는 거예요.

〔S09〕 **이서연:** 그러니까 mode-seeking 은 "봉우리 하나에 딱 붙는다"가 아니라, 족이 허락하는 안에서 한쪽 봉우리 편을 드는 거예요. 그리고 족이 p 를 담을 수 있었다면 두 방향 다 p 로 갔을 거고요.

**선생님:** 민준 학생의 첫 답이 틀린 이유도 거기 있어요. 방향의 차이는 제약이 있을 때만 보여요.

**김민준:** 수강 신청이랑 비슷하네요. 듣고 싶은 과목 두 개가 월요일 1교시, 금요일 5교시인데 시간표를 하루에 몰아야 하면, 수요일에 둘 다 반쯤 비슷한 과목을 듣거나 한쪽을 포기하거나.


## GRPO의 KL 항: 값과 기울기가 다른 KL을 가리킨다

"식에 KL(π‖π<sub>ref</sub>) 라고 적어 두면, 학습은 정말 그 KL을 줄이는가?"

앞 절에서 KL의 방향이 결과를 바꿀 수 있음을 보았다. 그렇다면 실제 구현이 어느 방향의 KL을 줄이고 있는지가 중요해진다. 그런데 그것은 식에 적힌 것과 다를 수 있다.

### GRPO에서의 실현

DeepSeekMath(Shao 외 2024)가 제안한 GRPO(한 문제에 답을 여러 개 뽑아 서로 비교해 보상을 매기는 강화학습)는 보상에 KL을 섞지 않고 손실에 KL 항을 직접 더한다. 표본 하나로 KL(π‖π<sub>ref</sub>) 를 추정하는 데는 Schulman이 소개한 추정량(흔히 k3)을 쓴다.

\`\`\`latex
\\begin{gathered}
k_3(y) = \\frac{\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)}{\\textcolor{#7f8f10}{\\pi}(y)} - \\log\\frac{\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)}{\\textcolor{#7f8f10}{\\pi}(y)} - 1 \\\\
\\mathbb{E}_{y\\sim\\textcolor{#7f8f10}{\\pi}}[k_3] = \\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{\\pi}\\,\\|\\,\\textcolor{#139696}{\\pi_{\\mathrm{ref}}})
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
k_3 & \\text{표본 하나로 만든 KL 추정량 (항상 0 이상)} \\\\
\\textcolor{#7f8f10}{\\pi} & \\text{학습하는 정책} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
y & \\text{정책에서 뽑은 답변}
\\end{array}
\`\`\`

값으로서는 흠이 없다. π 에서 뽑은 표본으로 평균 내면 정확히 KL(π‖π<sub>ref</sub>) 다. 문제는 이 값을 **손실로 두고 미분할 때** 생긴다. 표본을 뽑은 분포는 미분하지 않고(표본은 이미 뽑혔으니까) k3 만 미분하면, ρ = π<sub>ref</sub>/π 라 할 때 ∇k3 = (1 − ρ)∇log π 이고, 그 기댓값은

\`\`\`latex
\\begin{aligned}
&\\mathbb{E}_{y\\sim\\textcolor{#7f8f10}{\\pi}}\\big[(1-\\rho)\\,\\nabla\\log\\textcolor{#7f8f10}{\\pi}(y)\\big] \\\\
&= -\\sum_y \\textcolor{#139696}{\\pi_{\\mathrm{ref}}}(y)\\,\\nabla\\log\\textcolor{#7f8f10}{\\pi}(y) \\\\
&= \\nabla\\,\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#139696}{\\pi_{\\mathrm{ref}}}\\,\\|\\,\\textcolor{#7f8f10}{\\pi})
\\end{aligned}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\rho & \\pi_{\\mathrm{ref}}(y)/\\pi(y) \\\\
\\nabla & \\text{정책 파라미터에 대한 기울기} \\\\
\\textcolor{#7f8f10}{\\pi} & \\text{학습하는 정책 (표본도 여기서 뽑음)} \\\\
\\textcolor{#139696}{\\pi_{\\mathrm{ref}}} & \\text{참조 정책} \\\\
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산}
\\end{array}
\`\`\`

첫 등호는 E<sub>π</sub>[∇log π] = Σ ∇π = 0 을 쓴 것이다. 값은 KL(π‖π<sub>ref</sub>) 를 재면서, 기울기는 KL(π<sub>ref</sub>‖π) 를 줄이는 쪽으로 민다. Tang과 Munos(2025)가 이 함정을 정리했다. "KL 추정값을 손실로 두고 미분하면 대개 KL의 올바른 기울기가 나오지 않는다." 같은 논문에 따르면 ½(log ρ)² 를 손실로 쓰면 KL(π‖π<sub>ref</sub>) 의 올바른 기울기가 나온다. 그리고 실제 GRPO는 이전 정책 π<sub>old</sub> 에서 뽑은 표본을 쓰므로, 중요도 가중치 없이는 이 등식조차 근사다(Zhang 외 2025).

이 차이가 작아 보이지만, 우리 교재의 언어로는 사영 방향의 차이다. 식에 적힌 것은 π 쪽에 무게를 둔 KL, 실제로 미는 방향은 참조 쪽에 무게를 둔 KL.

한 가지 덧붙인다. 2025년의 RLVR 연구 여럿은 이 KL 항을 아예 뺀다. DAPO(Yu 외 2025)는 긴 추론을 학습하는 동안 모형이 초기 모형에서 크게 벗어나는 것이 자연스러우니 이 제약이 필요 없다고 했다. Dr. GRPO(Liu 외 2025)도 규칙 기반 검증기를 쓰는 상황에서 β = 0 으로 두었다. 그러면 기울이기 절의 닫힌꼴은 β → 0 극한, 정답 집합으로의 조건부화 쪽으로 간다.

### 파이썬

세 답변 위의 소프트맥스 정책으로 k3 손실의 기울기 기댓값을 직접 계산한다.

\`\`\`python
import numpy as np

def softmax(z): e = np.exp(z - z.max()); return e / e.sum()
theta = np.array([1.0, 0.0, -0.5])               # 정책 로짓
ref = np.array([0.2, 0.5, 0.3])                  # 참조 정책
pi = softmax(theta)
J = np.eye(3) - pi[None, :]                      # J[y] = ∇ log π(y)  (로짓에 대한 기울기)
rho = ref / pi

print("E[k3]        ", np.sum(pi * (rho - np.log(rho) - 1)).round(4),
      " KL(π‖ref)", np.sum(pi * np.log(pi / ref)).round(4))
print("k3 손실 기울기 ", ((pi * (1 - rho)) @ J).round(4))
print("∇KL(ref‖π)    ", (-(ref @ J)).round(4))
print("∇KL(π‖ref)    ", ((pi * np.log(pi / ref)) @ J).round(4))
# E[k3]         0.4347  KL(π‖ref) 0.4347
# k3 손실 기울기  [ 0.4285 -0.2688 -0.1598]
# ∇KL(ref‖π)     [ 0.4285 -0.2688 -0.1598]
# ∇KL(π‖ref)     [ 0.4465 -0.2788 -0.1676]
\`\`\`

값은 KL(π‖ref) 와 같고, 기울기는 KL(ref‖π) 의 것과 같다.

### 수확

"추정량의 값과 기울기는 서로 다른 KL을 가리킬 수 있다. GRPO의 k3 항은 값으로는 KL(π‖π<sub>ref</sub>) 를 재지만, 손실로 미분하면 KL(π<sub>ref</sub>‖π) 를 줄이는 쪽으로 민다."

### 문제 4. GRPO의 KL 항은 어느 KL을 줄이는가 (킬러)

정책 π = softmax(θ), θ = (1, 0, −0.5), 참조 π<sub>ref</sub> = (0.2, 0.5, 0.3). GRPO는 표본 y 에 대해 k3(y) = ρ − log ρ − 1 (ρ = π<sub>ref</sub>(y)/π(y)) 를 손실에 더한다. (가) E<sub>y∼π</sub>[k3] 가 KL(π‖π<sub>ref</sub>) 임을 보여라. (나) 표본을 고정하고 k3 을 θ 로 미분한 기울기의 기댓값이 어느 KL의 기울기인지 구하라. (다) 표본을 π 가 아닌 π<sub>old</sub> 에서 뽑으면 어떻게 되는가?

#### 함께 풀기

**김민준:** (가)는 바로 나와요. E<sub>π</sub>[ρ] = Σ π<sub>ref</sub> = 1 이니까 1 − E<sub>π</sub>[log ρ] − 1 = E<sub>π</sub>[log π/π<sub>ref</sub>]. 숫자로도 둘 다 0.4347 이요.

**김민준:** 그럼 (나)는 끝났죠. 기댓값이 KL(π‖π<sub>ref</sub>) 니까, 그걸 미분하면 그 KL의 기울기예요.

**선생님:** 미분과 기댓값의 순서를 바꿔도 되는지 봐요. 기댓값은 어떤 분포로 냈어요?

〔M05〕 **김민준:** π 요… 그리고 π 는 θ 에 의존하고요. 그런데 코드에서는 표본을 먼저 뽑고 k3 만 미분해요. 표본을 뽑은 분포는 미분 안 해요.

**이서연:** 그럼 직접 해 보자. ∇ρ = −ρ∇log π 니까 ∇k3 = ∇ρ − ∇ρ/ρ = (−ρ + 1)∇log π. 부호는… (ρ − 1)∇log π 인가?

**선생님:** 한 단계씩 다시 써 봐요.

〔S04〕 **이서연:** ∇ρ − ∇ρ/ρ = ∇ρ(1 − 1/ρ) = −ρ∇log π·(1 − 1/ρ) = −(ρ − 1)∇log π = (1 − ρ)∇log π. 제가 부호를 뒤집었네요.

**이서연:** 이제 π 로 평균 내면 E<sub>π</sub>[∇log π] = 0 이고, E<sub>π</sub>[ρ∇log π] = Σ π<sub>ref</sub>∇log π. 그러니까 −Σ π<sub>ref</sub>∇log π, 이건 교차엔트로피 −Σ π<sub>ref</sub> log π 의 기울기예요.

〔S08〕 **이서연:** KL(π<sub>ref</sub>‖π) 의 기울기예요. 값은 KL(π‖π<sub>ref</sub>) 를 재는데, 기울기는 반대 방향 KL을 줄여요.

**김민준:** 숫자로 확인했어요. k3 손실 기울기 (0.4285, −0.2688, −0.1598), ∇KL(π<sub>ref</sub>‖π) 도 똑같고, ∇KL(π‖π<sub>ref</sub>) 는 (0.4465, −0.2788, −0.1676) 이에요. 비슷하지만 달라요.

**선생님:** 비슷한 이유는요?

**이서연:** 두 분포가 가까우면 두 KL 모두 ½ dθᵀI dθ(I 는 피셔 정보 행렬, 모수에 대한 스코어의 공분산)로 가니까요. 가까운 곳에서는 KL이 대칭이 돼요. 멀어질수록 차이가 커져요.

**김민준:** 그럼 (다)는 제가 놓친 거네요. 실제 GRPO는 이전 정책 π<sub>old</sub> 에서 뽑잖아요. π<sub>old</sub> = softmax(0.5, 0.5, 0) 으로 하면 기댓값이 (0.5441, −0.342, −0.202) 로 둘 다와 달라요.

**이서연:** E<sub>π<sub>old</sub></sub>[∇log π] 가 이제 0이 아니니까요. 첫 등호가 무너져요. π/π<sub>old</sub> 중요도 가중치를 곱해 줘야 (나)의 결과로 돌아가요.

〔T13〕 **선생님:** 둘 다 잘 왔어요. 이 문제에서 가져갈 건 세 가지예요. 추정량이 치우침이 없다(불편, unbiased)는 것은 값에 대한 말이지 기울기에 대한 말이 아니다. 표본을 뽑은 분포도 θ 에 의존한다는 걸 잊으면 KL의 방향이 바뀐다. 그리고 표본이 다른 정책에서 왔으면 중요도 가중치로 다시 맞춰야 한다.

**김민준:** 보고서 분량을 "평균 10쪽"으로 맞춰 놓고, 채점은 가장 짧은 보고서 기준으로 하는 거랑 비슷하네요. 평균은 맞는데 미는 방향이 다른 거.

**이서연:** 수학 수업에서 "적분 기호 안으로 미분을 넣으려면 적분 영역이 변수에 의존하지 않아야 한다"고 했던 것과 같아요. 여기서는 적분의 무게 π 가 θ 에 의존하는데 그걸 빼고 미분한 거예요.


## 엔트로피 붕괴: 너무 좁히면 드문 정답을 잃는다

"한 번에 맞히는 비율(Pass@1)은 올라가는데, 아주 많이 뽑아 보면 오히려 베이스 모델이 더 많은 문제를 푼다. 하나의 답을 잘 내는 모델이 왜 여러 번 시도할 기회를 주면 베이스보다 못하게 되는가?"

### 비유

라디오 다이얼을 너무 좁히면 — 하나의 주파수에 완벽하게 맞췄다. 수신 품질은 최고다. 그런데 다른 채널이 잡히던 자리가 조용해졌다. 전에는 스캔을 오래 돌리면 가끔 잡히던 먼 방송이 이제는 아무리 돌려도 안 잡힌다.

### 원인 — 정책경사의 엔트로피 동역학

Cui 외(2025)는 추론 언어모델의 강화학습에서 이 현상을 정리했다. 정책 엔트로피는 훈련 초반에 급격히 떨어지고, 그 뒤의 성능은 떨어진 엔트로피로 거의 결정된다(경험식 R = −a·e<sup>H</sup> + b). 엔트로피가 왜 떨어지는지도 식으로 보였다. 자연 정책경사 한 스텝에서는

\`\`\`latex
\\Delta \\textcolor{#9467bd}{H}(\\textcolor{#7f8f10}{\\pi}) \\approx -\\,\\mathrm{lr}\\cdot \\mathrm{Cov}_{y\\sim\\textcolor{#7f8f10}{\\pi}}\\big(\\log \\textcolor{#7f8f10}{\\pi}(y),\\ A(y)\\big)
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#9467bd}{H} & \\text{정책의 엔트로피} \\\\
\\textcolor{#7f8f10}{\\pi} & \\text{정책} \\\\
\\mathrm{lr} & \\text{학습률} \\\\
A & \\text{어드밴티지 (평균보다 얼마나 좋은 답인가)}
\\end{array}
\`\`\`

이미 확률이 높은 답이 보상도 높으면 공분산이 양수이고, 엔트로피가 준다. 강화학습에서는 대개 그렇다. 모형이 잘하는 답을 더 자주 내니까. 주목할 점은 이 논문의 실험이 KL 계수를 **0으로** 두었다는 것이다. KL 벌칙이 없어도 엔트로피는 무너진다. 그러니 "reverse KL(모형 쪽에 무게를 둔 KL(π‖π<sub>ref</sub>))이 봉우리를 눌러서"는 원인 설명으로 맞지 않다. KL(π‖π<sub>ref</sub>) 는 오히려 π 를 넓은 참조 쪽으로 붙잡아 두는 항이다. 붕괴를 미는 힘은 보상 쪽에 있다.

기울이기 절의 닫힌꼴로도 같은 것이 보인다. β를 줄일수록 π* 는 e-측지선을 따라 참조에서 멀어지고, 엔트로피는 정답 집합의 조건부 엔트로피까지 내려간다. KL 항을 빼는 것은 β = 0, 그 끝으로 곧장 가는 것이다.

### Pass@k — 정확히 무엇을 재는가

문제 하나에서 모형의 정답 확률이 s 라고 하자. k번 독립으로 뽑아 하나라도 맞으면 성공이다.

\`\`\`latex
\\begin{gathered}
\\mathrm{pass@}k = 1 - (1-s)^k \\ \\ \\ge\\ \\ s = \\mathrm{pass@}1 \\\\
\\widehat{\\mathrm{pass@}k} = 1 - \\frac{\\binom{n-c}{k}}{\\binom{n}{k}}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
s & \\text{한 문제에서 한 번 뽑아 맞을 확률} \\\\
k & \\text{시도 횟수} \\\\
n & \\text{실제로 뽑은 표본 수 } (n \\ge k) \\\\
c & \\text{그중 맞은 수} \\\\
\\widehat{\\mathrm{pass@}k} & \\text{불편추정량 (Chen 외 2021)}
\\end{array}
\`\`\`

같은 모형에서 pass@k 는 k가 커질수록 줄어들 수 없다. 늘 pass@1 이상이다. 그러니 "한 모형의 Pass@1 곡선과 Pass@k 곡선이 교차한다"는 일은 일어나지 않는다. 교차하는 것은 **두 모형**의 pass@k 곡선이다.

Yue 외(2025)의 관찰이 그것이다. "RLVR로 학습한 모형은 작은 k(예: k = 1)에서 베이스 모형을 이기지만, k가 클 때는 베이스 모형이 더 높은 pass@k 를 얻는다." 강화학습이 베이스가 가끔 풀던 문제의 정답 확률을 0 가까이 눌러 버렸기 때문이다. 기울이기 절의 조건부화 그림 그대로다. 참조에 없던 정답은 생기지 않고, 참조에 드물던 정답은 더 드물어질 수 있다.

두 가지를 구분해 두자. pass@k 는 "k번 기회를 주면 풀 수 있는 문제의 비율"이다. 답변의 다양성 자체를 재는 지표가 아니다. 다양성이 줄면 큰 k의 pass@k 가 떨어지기 쉽다는 관계가 있을 뿐이다. 그리고 이것은 catastrophic forgetting(새 과제를 배우며 옛 과제 성능을 잃는 것)과도 다르다. 같은 과제 안에서 드문 정답이 더 드물어지는 일이다.

{{viz: ch16/pass-at-k}}

### Best-of-N과의 연결

Best-of-N 샘플링은 "N번 생성해서 가장 좋은 것을 고른다." N번 생성 = OR (다양한 가능성을 열어둠). 가장 좋은 것을 선택 = AND (조건을 충족하는 것만). 정답 검사기가 있으면 Best-of-N의 성공률이 곧 pass@N 이다. 그래서 강화학습 뒤에 Best-of-N을 붙이려면, 강화학습이 드문 정답을 지우지 않았는지가 중요해진다.

### 파이썬

\`\`\`python
import numpy as np
from math import comb

# 불편추정량 1 − C(n−c,k)/C(n,k) 와 순진한 추정량 1 − (1 − c/n)^k 비교
n, k, s = 16, 4, 0.2
rng = np.random.default_rng(0)
c = rng.binomial(n, s, size=20000)
unbiased = np.mean([1 - comb(n - ci, k) / comb(n, k) for ci in c])
naive = np.mean(1 - (1 - c / n)**k)
print(f"참값 {1 - (1 - s)**k:.4f}  불편추정량 {unbiased:.4f}  순진한 추정량 {naive:.4f}")
# 참값 0.5904  불편추정량 0.5924  순진한 추정량 0.5548

# 두 모형의 pass@k: 베이스와, 정답 확률의 로짓을 0.1 기준으로 두 배 벌린 "RL 모형"
lg = lambda x: np.log(x) - np.log1p(-x)
from scipy.stats import beta as Beta
s_base = Beta.ppf((np.arange(50) + 0.5) / 50, 0.4, 1.2)          # 문제 50개의 정답 확률
s_rl = 1 / (1 + np.exp(-(2 * (lg(s_base) - lg(0.1)) + lg(0.1))))
for kk in [1, 4, 8, 16, 64, 256]:
    print(f"k={kk:<3}  베이스 {np.mean(1 - (1 - s_base)**kk):.3f}  RL {np.mean(1 - (1 - s_rl)**kk):.3f}")
# k=1    베이스 0.250  RL 0.381
# k=4    베이스 0.485  RL 0.529
# k=8    베이스 0.594  RL 0.587
# k=16   베이스 0.686  RL 0.638
# k=64   베이스 0.817  RL 0.722
# k=256  베이스 0.894  RL 0.788
\`\`\`

순진한 추정량은 참값보다 작게 나온다(1 − x 의 k제곱이 볼록이라서). 장난감 RL 모형은 k = 1 에서 베이스를 크게 앞서지만, k = 8 근처에서 역전된다.

### 병합 — OR의 질이 AND의 가능성을 결정한다

"왜 어떤 미세조정은 병합이 잘 되고 어떤 미세조정은 병합이 안 되는가?"

강화학습은 베이스가 이미 가진 정답을 추려낼 뿐이었다. 그렇다면 프리트레인(OR)이 깔아 둔 풍경의 질은 다른 좁히기에도 영향을 줄까? 모델 병합이 좋은 시험대다. 두 모델의 가중치 "중간"을 취하면 두 능력이 합쳐지는 경우가 있고, 갑자기 무너지는 경우가 있다. "잘 되는 병합"과 "안 되는 병합"의 차이는 어디에 있는가?

### 보고된 발견

Rahamim 외(2026)는 LoRA(가중치 변화를 작은 행렬 둘의 곱으로 제한하는 미세조정) 업데이트들을 대상으로 한 실험에서 "베이스 모델이 과제나 미세조정 데이터를 더 잘 알수록 병합 가능성이 높다"고 보고했다. 그리고 병합 가능성은 무엇과 함께 병합하느냐보다 LoRA 업데이트 자체의 성질에 주로 달려 있다고 했다. Yadav 외(2024)도 제로샷 성능이 좋은 강한 베이스 모델에서 만든 전문가 모델일수록 병합이 잘 된다고 보고했다. 반론도 있다. 병합 가능성이 병합 방법과 함께 묶는 과제에 따라 달라진다는 연구도 나왔다. 아직 정리된 법칙이라기보다 경향이다.

### 교재의 도구로 읽기

프리트레인(OR)이 해당 영역의 봉우리를 이미 품고 있으면, 미세조정은 그 봉우리 근처에서 좁히는 것이다. 파라미터 변화가 작고, 출력 분포의 변화도 작다. 피셔 계량(파라미터를 바꿀 때 출력 분포가 얼마나 달라지는지로 재는 자)으로 재면 "가까운" 거리.

가중치끼리 평균하는 것은 파라미터 공간의 직선 보간이다. 이것을 m-측지선(분포의 혼합)과 헷갈리지 말자. 가중치끼리의 평균이 만드는 분포는 두 분포의 혼합이 아니다. 신경망의 가중치는 θ 좌표도 η 좌표도 아니어서, 가중치 직선은 e-측지선도 m-측지선도 아니다.

비교가 되는 것은 지수족이다. 지수족에서 자연모수 θ 를 평균하면 그것이 e-측지선의 중간점이고, 분포로는 두 분포의 정규화된 기하평균이다. 언어모델의 마지막 층(소프트맥스 로짓)만 놓고 보면 이 그림에 조금 가깝다. 로짓을 평균하면 확률은 기하평균이 된다.

두 미세조정이 모두 베이스 근처에 있으면, 어느 직선을 따라가든 분포 공간에서 크게 벗어나지 않는다. 짧은 구간에서는 곡선과 직선의 차이가 작기 때문이다. 반대로 베이스 모델이 모르는 과제는 파라미터를 멀리 끌고 가야 하고, 먼 두 점을 잇는 가중치 직선의 중간은 분포 공간에서 엉뚱한 곳에 착지할 수 있다.

### 피셔로 가중한 병합

피셔 계량을 병합에 직접 쓰는 방법도 있다. Matena와 Raffel(2022)의 피셔 가중 평균이다. 각 모형의 가중치를 그 모형의 (대각) 피셔 정보에 비례한 비중으로 평균한다.

\`\`\`latex
\\textcolor{#2e9e6e}{w}^{\\star} = \\Big(\\sum_i \\textcolor{#0e8f8f}{I}_i\\Big)^{-1} \\sum_i \\textcolor{#0e8f8f}{I}_i\\, \\textcolor{#2e9e6e}{w}_i
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{w}_i & i\\text{번째 모형의 가중치} \\\\
\\textcolor{#0e8f8f}{I}_i & i\\text{번째 모형의 피셔 정보 (대각 근사)} \\\\
\\textcolor{#2e9e6e}{w}^{\\star} & \\text{병합한 가중치}
\\end{array}
\`\`\`

어떤 가중치가 모형 A의 출력 분포에 민감하면(피셔가 크면) 병합에서 A의 값을 더 따른다. 각 모형의 사후분포를 피셔로 만든 가우시안으로 근사하고, 그 곱을 최대화한 결과라는 해석이 붙는다. 가우시안의 곱 — 여기서도 곱셈이다.

### 수확

"엔트로피 붕괴를 미는 힘은 보상을 올리는 정책경사다. KL 없이도 일어난다. pass@k 는 k가 커질수록 줄지 않는다. 교차하는 것은 두 모형의 곡선이다. 강화학습은 참조가 가진 정답을 추려낼 뿐, 드문 정답은 오히려 잃을 수 있다."

"프리트레인의 OR이 깔아놓은 풍경의 질이 이후 AND의 가능성에 영향을 준다. 베이스가 이미 아는 곳의 미세조정은 짧은 걸음이라 병합이 쉽다는 보고가 있다. 가중치끼리의 평균은 m-측지선이 아니다. 피셔로 가중하면 분포 공간의 자를 병합에 들일 수 있다."

### 문제 5. pass@k 는 줄어들 수 없다

(가) 한 모형에서 pass@k 가 k에 대해 줄지 않음을 보여라. (나) n = 16개 중 c = 3개가 맞았을 때 pass@4 를 추정하라. 1 − (1 − c/n)<sup>k</sup> 를 쓰면 왜 안 되는가?

#### 함께 풀기

**이서연:** (가)는 문제마다 1 − (1−s)<sup>k</sup> 이고 0 ≤ 1−s ≤ 1 이니까 (1−s)<sup>k</sup> 가 k에 대해 줄어요. 평균을 내도 그대로고요. 그런데 논문에서 RL 모형은 k가 크면 pass@k 가 떨어진다고 하지 않았어요?

**선생님:** 무엇보다 낮아진다고 했죠?

**이서연:** 베이스 모형보다요. 아, 같은 모형의 곡선이 내려가는 게 아니라, 두 모형 곡선이 교차하는 거네요.

**김민준:** (나)는 c/n = 3/16 을 넣으면 1 − (13/16)⁴ = 0.564 요.

**선생님:** 그 추정량을 여러 번 뽑아서 평균 내면 참값이 나와요?

**김민준:** 시뮬레이션해 봤어요. s = 0.2, n = 16, k = 4 로 2만 번. 참값 0.590 인데 제 방식은 0.555 요. 계속 낮게 나와요.

〔M06〕 **김민준:** c/n 은 치우침이 없는데 왜 그걸 넣은 결과는 치우치죠?

**이서연:** 1 − (1−x)<sup>k</sup> 가 x 에 대해 오목하니까. 옌센 부등식으로 E[f(c/n)] ≤ f(E[c/n]) 이야. 치우침 없는 걸 비선형 함수에 넣으면 치우침이 생겨.

**선생님:** 그래서 Chen 외(2021)는 16개 중 4개를, 한 번 고른 것은 다시 고르지 않고(비복원) 고를 때 전부 틀릴 확률을 정확히 셌어요. C(13, 4)/C(16, 4).

**김민준:** 715/1820 = 0.393 이니까 pass@4 추정값은 0.607 이요. 시뮬레이션에서도 이 방식은 0.592 로 참값에 붙어요.

**김민준:** 뽑은 16개를 "모집단"으로 보고 거기서 4개를 뽑는 거네요. 조교가 채점할 때 제출물 전부에서 네 개를 무작위로 골라 검사하는 것처럼.


---

<!--
집필 노트

## 집필 노트: 16장의 위치와 서사적 역할

이 장은 교재의 도구가 가장 큰 무대에서 작동하는 것을 보여주는 장이다.
12장 EM에서 "하나의 알고리즘 안에 모든 도구"를 보여줬다면,
16장은 "하나의 훈련 파이프라인 안에 모든 도구"를 보여준다.

10장의 무지(OR)와 확신(AND)의 쌍대가 여기서 최종 회수된다.
11장의 e-사영과 m-사영이 여기서 현실의 설계 결정이 된다.
1장의 모델 병합 질문이 여기서 한 걸음 더 정직한 답을 얻는다.
5장의 엔트로피가 여기서 에피플렉시티로 확장된다.

회수 대응표:
| 이 장의 절 | 회수되는 장 |
|---|---|
| 스펙트럼 (프리트레인은 OR, 교차엔트로피 = m-사영) | 4장 혼합, 5장 교차엔트로피, 10장 무지, 11장 m-사영 |
| 에피플렉시티 | 5장 엔트로피 |
| 시그널 (SFT = 좁은 데이터의 m-사영) | 11장 m-사영, MLE |
| 기울이기 (π* ∝ π_ref·e^{r/β}) | 7장 지수족, 4장 곱셈(e-측지선), 10장 확신(AND) |
| 당신은 이미 EM을 하고 있다 | 2장 분포=점, 10장 OR/AND, 12장 EM |
| 다이얼의 방향 | 3장 KL 비대칭, 11장 두 가지 사영 |
| entropy collapse | 10장 쌍대의 긴장, 5장 엔트로피 |
| OR의 질 → AND의 가능성 | 1장 모델 병합, 9장 피셔 계량 |
| α-발산 | 11장 α-접속, 에필로그 |
-->
`,e5=`# 스케일링 — 폭이 달라져도 한 걸음이 같으려면

학습률 0.01이 좁은 모델에서는 적당한 걸음인데 넓은 모델에서는 끝없이 커지는 도약이 된다면 — 눈금 자체를 다시 그려야 한다.

그 눈금이 무엇인지를 묻는 것이 이 장이다. 이 장에서 학습률은 lr 로 쓴다. η 는 이 책에서 기대모수의 이름이다. 모수는 분포를 정하는 숫자이고, 기대모수 η 는 log p = θ·t(x) − F(θ) 꼴의 분포 모임(지수족)을 통계량 t의 평균으로 적은 좌표다.

![일반 기울기 vs 자연 기울기](/images/chapters/ch17-compass-natural-gradient.svg)

## 폭과 학습률: 좌표의 한 칸이 같은 거리가 아니다

"왜 작은 모델에서 찾은 학습률이 큰 모델에서는 안 되는가? 매번 다시 찾아야 하는가?"

### 비유

레시피와 냄비 크기 — 4인분 레시피의 소금 1큰술. 40인분으로 늘리면 소금 10큰술? 비례하지 않는다. 냄비가 커지면 증발량, 열전도, 대류가 달라진다. 같은 "간"을 내려면 단순 비례가 아니라 냄비의 물리학을 이해해야 한다.

신경망도 마찬가지다. 폭(한 층의 뉴런 수)이 10배 커지면, 같은 학습률 0.01이 출력에 전혀 다른 크기의 변화를 만든다.

### 무엇이 관찰되는가

Greg Yang 등의 Tensor Programs V(2022)는 이것을 한 장의 그림으로 보였다. 표준 설정(SP, standard parametrization: 초기화와 학습률을 폭에 따라 어떻게 붙이는지의 규칙)으로 폭만 바꿔 가며 학습률을 훑으면, 폭마다 가장 좋은 학습률이 다른 곳에 있다. 넓힐수록 최적 학습률이 작은 쪽으로 밀려난다. 그들이 제안한 μP(maximal update parametrization, 폭이 달라져도 각 층의 특징이 같은 크기로 변하게 하는 설정)에서는 최적 학습률이 폭과 상관없이 제자리에 있다. 그래서 좁은 모형에서 찾은 학습률을 넓은 모형에 그대로 옮겨 쓸 수 있다. 이것을 μTransfer라 부른다. 이 장의 나머지는 왜 그런지를 읽는 일이다.

### 손실 지형의 그림 한 쌍

![ResNet-56의 매끄러운 loss landscape](/images/chapters/loss-landscape-resnet56.png)
![skip connection을 뺀 ResNet-56-noshort의 혼돈적인 loss landscape](/images/chapters/loss-landscape-vgg56.png)

손실 지형 그림으로 자주 인용되는 이 한 쌍은 Li 외(2018)의 것이다. 주의할 것은, 이 두 그림이 **폭이 아니라 skip connection**의 차이를 보인다는 점이다. 왼쪽은 ResNet-56, 오른쪽은 같은 망에서 지름길 연결만 뺀 ResNet-56-noshort 이다. 같은 논문은 따로 폭도 다뤘다. Wide-ResNet의 폭을 늘리면 극소점 주변이 더 평평하고 볼록해 보이는 영역이 넓어졌다고 보고했다. 지형의 모양은 구조에 따라 달라진다. 이 장이 따지는 것은 그 지형 위에서 **한 걸음의 크기**다.

같은 학습률이 폭에 따라 왜 다른 뜻을 갖는가? 좌표의 한 칸이 어디서나 같은 거리가 아니기 때문이다. 그 불균등함을 재는 자가 피셔 정보 행렬(파라미터를 조금 바꿀 때 출력 분포가 얼마나 달라지는지를 방향마다 적은 행렬)이다. 가장 작은 예부터 보자.

### 가장 작은 예

폭 n 인 층 하나를 생각한다. 출력은 y = w·x 하나, 입력 x 의 좌표는 ±1 이다. 손실 ½(y − t)² 의 기울기는 (y − t)x 이다. 경사하강 한 스텝 뒤 출력의 변화는

\`\`\`latex
\\Delta y = -\\,\\mathrm{lr}\\,(y - t)\\,\\|\\textcolor{#6f8fa6}{x}\\|^2 = -\\,\\mathrm{lr}\\,(y - t)\\, n
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\Delta y & \\text{한 스텝 뒤 출력의 변화} \\\\
\\mathrm{lr} & \\text{학습률} \\\\
y,\\ t & \\text{출력과 목표값} \\\\
\\textcolor{#6f8fa6}{x} & \\text{입력 벡터 (좌표마다 크기 1)} \\\\
n & \\text{폭 (입력 차원)}
\\end{array}
\`\`\`

기울기의 각 좌표는 작아도, 그 변화가 입력과 **같은 방향으로 정렬되어** n 개가 한꺼번에 더해진다. 그래서 출력 변화가 n 에 비례한다. n 개의 무작위 부호를 더한 것처럼 √n 으로 자라는 것이 아니다. lr·n > 2 이면 이 문제에서 출력이 목표를 매번 더 크게 넘어가 끝없이 커진다. 폭을 4배로 늘리면 같은 효과를 내는 학습률은 4분의 1이다.

### 피셔 계량으로 읽기

계량은 곳마다 작은 걸음의 길이를 재는 규칙이고, 피셔 계량은 그 길이를 분포가 달라지는 정도로 잰다. 이 층이 평균 y, 분산 σ² 인 가우시안을 낸다고 보자. 가중치 공간의 피셔 정보는 출력 공간의 피셔(1/σ²)를 가중치로 끌어온 것이다.

\`\`\`latex
\\begin{gathered}
\\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{w}) = \\frac{1}{\\sigma^2}\\,\\mathbb{E}\\big[\\textcolor{#6f8fa6}{x}\\textcolor{#6f8fa6}{x}^{\\top}\\big] \\\\
d\\textcolor{#2e9e6e}{w}^{\\top}\\,\\textcolor{#0e8f8f}{I}\\,d\\textcolor{#2e9e6e}{w} = \\frac{\\mathbb{E}\\big[(\\textcolor{#6f8fa6}{x}\\cdot d\\textcolor{#2e9e6e}{w})^2\\big]}{\\sigma^2}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I} & \\text{가중치 공간의 피셔 정보} \\\\
\\textcolor{#2e9e6e}{w} & \\text{가중치} \\\\
\\textcolor{#6f8fa6}{x} & \\text{입력} \\\\
\\sigma^2 & \\text{출력 가우시안의 분산 (상수)}
\\end{array}
\`\`\`

오른쪽 식이 말하는 것은 단순하다. 피셔로 잰 걸음의 길이는 "출력이 얼마나 움직였나"를 출력의 눈금으로 잰 것이다. 경사 한 스텝 dw = −lr(y − t)x 에서 x·dw 가 n 에 비례하니, 피셔 길이도 n 에 비례한다. 유클리드 길이 ‖dw‖ 는 √n 에 비례할 뿐이다. 유클리드 자와 피셔 자가 폭에 따라 서로 다른 속도로 벌어진다.

"같은 숫자의 학습률이, 폭에 따라 다른 크기의 분포 변화를 만든다."

### 파이썬

\`\`\`python
import numpy as np
rng = np.random.default_rng(0)
for n in [64, 256, 1024, 4096]:
    x = rng.choice([-1.0, 1.0], n)              # 입력: 좌표마다 크기 1
    w = rng.standard_normal(n) / np.sqrt(n)     # 표준 초기화
    y, target, lr = w @ x, 1.0, 0.01
    g = (y - target) * x                        # ½(y−t)² 의 기울기
    y_new = (w - lr * g) @ x
    print(f"n={n:5d}  출력 변화 {y_new - y:+.3f}  = −lr·(y−t)·n = {-lr * (y - target) * n:+.3f}   폭주 경계 lr = 2/n = {2 / n:.5f}")
# n=   64  출력 변화 -0.707  = −lr·(y−t)·n = -0.707   폭주 경계 lr = 2/n = 0.03125
# n=  256  출력 변화 +2.189  = −lr·(y−t)·n = +2.189   폭주 경계 lr = 2/n = 0.00781
# n= 1024  출력 변화 +9.973  = −lr·(y−t)·n = +9.973   폭주 경계 lr = 2/n = 0.00195
# n= 4096  출력 변화 +38.057  = −lr·(y−t)·n = +38.057   폭주 경계 lr = 2/n = 0.00049
\`\`\`

같은 lr = 0.01 이 n = 64 에서는 목표 쪽으로 알맞게 가고, n = 4096 에서는 38만큼 튀어 나간다.

### 수확

"같은 크기의 가중치 변화가 폭이 넓을수록 출력을 더 크게 바꾼다. 표준 설정에서 한 스텝이 만드는 출력 변화는 폭에 비례해서 커진다. 그래서 최적 학습률이 폭을 따라 움직인다."


## 자연 기울기: 피셔 계량을 따라 걷기

"폭마다 학습률을 손으로 다시 맞추는 대신, 한 걸음의 크기를 처음부터 분포의 눈금으로 잴 수는 없는가?"

### 정의

보통의 경사하강법은 파라미터 공간의 유클리드 거리를 쓴다. Amari(1998)의 자연 기울기는 피셔 계량 아래에서 가장 가파른 방향으로 간다.

\`\`\`latex
\\textcolor{#2e9e6e}{w} \\leftarrow \\textcolor{#2e9e6e}{w} - \\mathrm{lr}\\cdot \\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{w})^{-1}\\, \\nabla \\textcolor{#c05080}{\\mathcal{L}}(\\textcolor{#2e9e6e}{w})
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{w} & \\text{가중치} \\\\
\\mathrm{lr} & \\text{학습률} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬} \\\\
\\textcolor{#c05080}{\\mathcal{L}} & \\text{손실}
\\end{array}
\`\`\`

평평한 바닥에서의 한 걸음과 가파른 비탈에서의 한 걸음을 같은 크기로 만드는 장치 — 그것이 자연 기울기다. 앞 절의 예에서는 I 가 n 에 비례하는 방향을 가지므로, I⁻¹ 이 그 방향의 걸음을 1/n 로 줄인다. 폭에 맞춘 학습률 조정이 저절로 들어 있다.

### 하나뿐인 자, 그러나 파라미터 위에서는

첸초프의 정리에 따르면, 분포의 공간에서 충분통계량 변환(데이터를 요약해도 정보를 잃지 않는 변환) 아래에서 바뀌지 않는 계량은 (상수배를 빼면) 피셔 하나뿐이다. 하지만 신경망의 파라미터 공간은 분포의 공간이 아니다. 뉴런의 순서를 바꾸거나 ReLU 앞뒤로 크기를 옮기는 것처럼, 서로 다른 가중치가 똑같은 분포를 내는 일이 흔하다(비식별성). 그래서 파라미터 위의 피셔 행렬은 대개 특이하고(역행렬이 없고), 거기에 첸초프의 유일성은 그대로 적용되지 않는다. 정확한 말은 이렇다. 파라미터 위의 피셔는 **분포 공간의 자를 파라미터로 끌어온(pullback) 것**이다. 실제 구현은 I 에 작은 값 εI 를 더해 역을 구한다.

### 너무 큰 행렬 — K-FAC

그런데 피셔 정보 행렬은 아름답지만 거대하다. 파라미터가 수억 개인 모델에서는 행렬 자체를 저장할 수 없다. Martens와 Grosse(2015)의 K-FAC은 층마다 한 블록만 남기고, 그 블록을 두 작은 행렬의 크로네커 곱(한 행렬의 원소마다 다른 행렬 전체를 곱해 큰 블록 행렬을 만드는 곱)으로 근사한다.

\`\`\`latex
\\textcolor{#0e8f8f}{I}_{\\text{층}} = \\mathbb{E}\\big[a a^{\\top} \\otimes g g^{\\top}\\big] \\;\\approx\\; \\mathbb{E}\\big[a a^{\\top}\\big] \\otimes \\mathbb{E}\\big[g g^{\\top}\\big]
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#0e8f8f}{I}_{\\text{층}} & \\text{한 층의 피셔 블록} \\\\
a & \\text{층에 들어오는 활성값} \\\\
g & \\text{역전파 신호 (로그우도의 출력에 대한 기울기. 우도 = 모형이 관측에 준 확률)} \\\\
\\otimes & \\text{크로네커 곱}
\\end{array}
\`\`\`

근사의 근거는 지수족의 구조가 아니다. **활성값끼리의 곱과 역전파 신호끼리의 곱이 통계적으로 독립**이라는 가정이다. 저자들 스스로 "현실적인 가정 아래서 정확해지지 않을 큰 근사"라고 적었지만, 실제로는 잘 맞는다. 크로네커 곱의 역은 두 작은 행렬의 역의 크로네커 곱이라, 역을 구하는 비용이 확 줄어든다.

### 계보 — 자연 기울기에서 Muon까지

K-FAC의 곱해진 두 조각은 한 층의 기울기 행렬 G 의 "왼쪽 공분산"과 "오른쪽 공분산"을 닮았다. Shampoo(Gupta 외 2018)는 여기서 한 걸음 더 단순해진다. 기울기 G 로 두 조각을 직접 누적하고, 각각의 −1/4 제곱을 양쪽에 곱한다.

\`\`\`latex
\\begin{gathered}
\\textcolor{#2e9e6e}{W} \\leftarrow \\textcolor{#2e9e6e}{W} - \\mathrm{lr}\\cdot L^{-1/4}\\, \\textcolor{#c05080}{G}\\, R^{-1/4} \\\\
L = \\sum_{s} \\textcolor{#c05080}{G}_s \\textcolor{#c05080}{G}_s^{\\top},\\quad R = \\sum_{s} \\textcolor{#c05080}{G}_s^{\\top} \\textcolor{#c05080}{G}_s
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{W} & \\text{한 층의 가중치 행렬} \\\\
\\textcolor{#c05080}{G} & \\text{그 층의 기울기 행렬 (첨자 } s \\text{ 는 스텝)} \\\\
L,\\ R & \\text{왼쪽·오른쪽 전조건 행렬 (기울기를 방향별로 늘이고 줄이는 행렬)} \\\\
\\mathrm{lr} & \\text{학습률}
\\end{array}
\`\`\`

누적을 끄고 이번 스텝의 G 하나만 쓰면 놀라운 일이 생긴다. G 의 특이값 분해를 G = UΣVᵀ 라 하면 L = UΣ²Uᵀ, R = VΣ²Vᵀ 이고,
L<sup>−1/4</sup> G R<sup>−1/4</sup> = UΣ<sup>−1/2</sup>·Σ·Σ<sup>−1/2</sup>Vᵀ = UVᵀ.
특이값이 모두 1로 바뀐 기울기다. 이것이 뒤에 볼 Muon의 업데이트다. 자연 기울기 → K-FAC(층별 크로네커 피셔) → Shampoo(기울기로 만든 크로네커 전조건) → Muon(누적 없는 Shampoo). Shampoo는 2024년 MLCommons AlgoPerf 대회의 외부 튜닝 부문에서 1위를 했고, SOAP(Vyas 외 2024)는 Shampoo의 고유기저 안에서 Adam을 돌리는 방식으로 이 계보를 이었다.

### Adam은 자연 기울기인가

Adam을 "피셔 대각 근사로 한 자연 기울기"라고 부르는 설명을 자주 본다. 두 군데가 어긋난다. 첫째, Adam이 나누는 것은 기울기 제곱 평균의 **제곱근**이다. 자연 기울기라면 제곱근 없이 나눠야 한다. 둘째, 기울기 제곱 평균은 모형에서 뽑은 정답이 아니라 데이터의 정답으로 만든 "경험적 피셔"다. Kunstner 외(2019)는 경험적 피셔가 일반적으로 두 번 미분한 값의 정보(이차 정보)를 담지 못하며, Adam류를 이차 방법과 잇는 논증도 이 때문에 흔들린다고 보였다. Bernstein과 Newhouse(2024)의 읽기가 더 들어맞는다. 지수이동평균을 끄면 Adam의 업데이트는 기울기의 부호, −lr·sign(g) 가 된다. 부호 하강은 ℓ<sub>∞</sub> 노름(좌표별 최댓값) 아래의 가장 가파른 내리막(최급강하)이다. Adam은 "피셔를 따라 걷기"보다 "좌표마다 같은 크기로 걷기"에 가깝다.

### 수확

"자연 기울기는 피셔 자로 잰 한 걸음이다. 파라미터 위의 피셔는 분포 공간의 자를 끌어온 것이라 특이할 수 있다. K-FAC은 활성값과 역전파 신호의 독립을 가정한 크로네커 근사, Shampoo를 누적 없이 쓰면 Muon의 UVᵀ 가 된다. Adam은 자연 기울기가 아니라 부호 하강에 가깝다."


## μP: 폭이 달라져도 특징이 같은 속도로 배우게

"폭에 무관하게 '같은 크기의 걸음'을 보장할 수 있는가?"

### 원래의 유도

Yang과 Hu(2021), Yang 외(2022)의 유도는 피셔 계량에서 출발하지 않는다. 출발점은 이런 요구다. 폭을 무한대로 보내도, 학습 한 스텝이 각 층의 특징(은닉 활성값)을 폭과 무관한 크기(Θ(1))만큼 바꿔야 한다. 너무 작으면 특징이 사실상 얼어붙어 신경망이 초기값 근처의 선형 모델처럼 움직이고(커널 영역), 너무 크면 폭발한다. 이 장 첫 절의 예가 그 계산의 한 조각이다. 정렬된 합 때문에 변화가 입력 차원(fan_in)배로 커지니, 학습률을 1/fan_in 로 줄인다.

Tensor Programs V의 표 3이 Adam과 SGD에 대한 처방이다(괄호 안은 표준 설정).

| | 입력층 가중치와 모든 편향 | 은닉층 가중치 | 출력층 가중치 |
|---|---|---|---|
| 초기화 분산 | 1/fan_in | 1/fan_in | 1/fan_in² (표준 1/fan_in) |
| Adam 학습률 | 1 | 1/fan_in (표준 1) | 1/fan_in (표준 1) |
| SGD 학습률 | fan_out (표준 1) | 1 | 1/fan_in (표준 1) |

같은 논문의 표 8은 출력층에 1/fan_in 곱셈 계수를 달고 초기화 분산을 1, Adam 학습률을 1로 두는 동등한 형태를 준다. 두 표의 항목을 섞어 쓰면 안 된다. 어느 형태로 쓰는지 정하고 그 표를 통째로 따른다. SGD와 Adam의 처방이 다른 것도 앞 절에서 이유가 보인다. SGD의 한 스텝은 기울기 크기에 비례하고, Adam의 한 스텝은 좌표마다 크기가 lr 정도로 맞춰져 있다. 같은 "특징 변화 Θ(1)"을 맞추는 데 필요한 lr 의 폭 의존성이 달라진다.

Yang, Simon, Bernstein(2023)은 이 조건을 스펙트럼 노름 하나로 묶었다.

\`\`\`latex
\\begin{gathered}
\\|\\textcolor{#2e9e6e}{W}\\|_{2} = \\Theta\\!\\left(\\sqrt{\\frac{\\text{fan\\_out}}{\\text{fan\\_in}}}\\right) \\\\
\\|\\Delta \\textcolor{#2e9e6e}{W}\\|_{2} = \\Theta\\!\\left(\\sqrt{\\frac{\\text{fan\\_out}}{\\text{fan\\_in}}}\\right)
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#2e9e6e}{W} & \\text{한 층의 가중치 행렬} \\\\
\\Delta \\textcolor{#2e9e6e}{W} & \\text{한 스텝의 업데이트} \\\\
\\|\\cdot\\|_2 & \\text{스펙트럼 노름 (최대 특이값)} \\\\
\\text{fan\\_in},\\ \\text{fan\\_out} & \\text{그 층의 입력·출력 차원}
\\end{array}
\`\`\`

스펙트럼 노름은 "벡터를 최대 몇 배로 늘리는가"다. 입력 벡터가 크기 √fan_in 이고 출력 벡터가 크기 √fan_out 이어야 한다면(좌표마다 Θ(1)), 가중치와 그 업데이트가 늘리는 배율이 √(fan_out/fan_in) 이면 된다.

### 피셔 계량과의 관계 — 해석

μP를 "피셔 거리를 일정하게 만드는 처방"이라고 말하고 싶어진다. 이것은 원래 유도가 아니라 **해석**이다. 앞 절에서 본 대로 가중치 위의 피셔는 출력 공간의 자를 끌어온 것이고, "출력(과 각 층의 특징)이 한 스텝에 폭과 무관한 크기만큼 변한다"는 μP의 요구는 "그 끌어온 자로 잰 한 걸음이 폭과 무관하다"에 가깝다. 정확히 같은 말은 아니다. μP는 출력만이 아니라 모든 은닉층의 특징 변화를 맞춘다.

### μTransfer를 눈으로

2층 은닉 MLP(ReLU)를 Adam으로 300스텝 학습한다. 폭 32, 128, 512에서 학습률을 2<sup>−14</sup>부터 2<sup>−4</sup>까지 훑었다. μP 쪽은 표 3대로 은닉·출력층 학습률과 출력 초기화를 폭 32 기준으로 줄였다.

{{viz: ch17/lr-transfer}}

### 파이썬

위젯의 곡선을 만든 코드다(학습률 구간만 줄였다). CPU로 몇 분 걸린다.

\`\`\`python
import numpy as np
d, base, B, steps = 16, 32, 128, 300
g = np.random.default_rng(0)
X = g.standard_normal((1024, d))
Y = np.tanh(X @ g.standard_normal((d, 32)) / 4) @ g.standard_normal(32) / 2

def train(n, lr, mup):
    r = np.random.default_rng(1)
    W = [r.standard_normal((d, n)) / np.sqrt(d),         # 입력층
         r.standard_normal((n, n)) / np.sqrt(n),         # 은닉층
         r.standard_normal(n) / np.sqrt(n)]              # 출력층
    s = base / n if mup else 1.0
    if mup: W[2] *= s                                    # μP: 출력 초기화 분산 ∝ 1/fan_in²
    lrs = [lr, lr * s, lr * s]                           # μP(Adam): 은닉·출력 lr ∝ 1/fan_in
    m = [np.zeros_like(w) for w in W]; v = [np.zeros_like(w) for w in W]
    for t in range(1, steps + 1):
        i = r.integers(0, len(X), B); x, y = X[i], Y[i]
        h1 = np.maximum(x @ W[0], 0); h2 = np.maximum(h1 @ W[1], 0); e = h2 @ W[2] - y
        g2 = h2.T @ e * 2 / B
        d2 = np.outer(e, W[2]) * (h2 > 0) * 2 / B
        g1 = h1.T @ d2
        d1 = d2 @ W[1].T * (h1 > 0)
        g0 = x.T @ d1
        for k, gk in enumerate([g0, g1, g2]):
            m[k] = 0.9 * m[k] + 0.1 * gk; v[k] = 0.999 * v[k] + 0.001 * gk**2
            W[k] -= lrs[k] * (m[k] / (1 - 0.9**t)) / (np.sqrt(v[k] / (1 - 0.999**t)) + 1e-8)
        if not np.isfinite(e).all() or np.abs(e).max() > 1e6: return np.nan
    out = np.maximum(np.maximum(X @ W[0], 0) @ W[1], 0) @ W[2]
    return float(np.mean((out - Y)**2))

widths = [32, 128, 512]
ks = list(range(-10, -3))
for mup in [0, 1]:
    for n in widths:
        row = [train(n, 2.0**k, mup) for k in ks]
        best = ks[int(np.nanargmin(row))]
        print('μP' if mup else 'SP', n, best, [None if not np.isfinite(v) else round(v, 4) for v in row], flush=True)
# SP 32 -6 [0.2174, 0.1626, 0.1189, 0.0715, 0.0588, 0.075, 0.114]
# SP 128 -7 [0.0539, 0.0154, 0.0053, 0.0052, 0.0184, 0.0385, 0.088]
# SP 512 -9 [0.001, 0.0008, 0.001, 0.0098, 0.0362, 0.0949, 0.2646]
# μP 32 -6 [0.2174, 0.1626, 0.1189, 0.0715, 0.0588, 0.075, 0.114]
# μP 128 -6 [0.1783, 0.1153, 0.0423, 0.0106, 0.006, 0.0216, 0.0322]
# μP 512 -6 [0.1624, 0.1094, 0.0326, 0.0057, 0.0019, 0.0057, 0.0131]
\`\`\`

SP에서 최적 log₂ lr 은 −6, −7, −9 로 폭을 넓힐수록 왼쪽으로 밀린다. μP에서는 세 폭 모두 −6 이고, 넓을수록 같은 학습률에서 손실이 더 낮다.

### 수확

"표준 설정에서는 최적 학습률이 폭을 따라 움직이고, μP에서는 제자리에 있다. μP의 원래 유도는 '특징이 Θ(1)로 변하게'이고, 스펙트럼 조건 ‖ΔW‖₂ ∝ √(fan_out/fan_in) 으로 요약된다. '피셔 거리를 일정하게'는 그것을 이 교재의 눈으로 본 해석이다."

### 문제 1. 폭 n 층의 한 걸음

y = w·x (w, x ∈ ℝⁿ, xᵢ = ±1), 손실 ½(y − t)² 에 SGD 한 스텝을 적용한다. 출력 변화 Δy 가 n 에 대해 어떻게 자라는지 구하고, 끝없이 커지지 않는 lr 의 범위를 구하라.

#### 함께 풀기

**김민준:** 기울기가 (y − t)x 니까 Δw = −lr(y − t)x. 기울기 좌표 하나하나는 n 과 무관해요. 그러니까 출력 변화도 n 과 무관하죠.

**이서연:** 아니지, 출력 변화는 x·Δw 야. 그런데 좌표가 n 개니까… 무작위 합이면 √n 으로 자라겠네.

**선생님:** x·Δw 를 그대로 써 봐요.

**이서연:** −lr(y − t)·x·x = −lr(y − t)·Σxᵢ² = −lr(y − t)·n. 아, 무작위 합이 아니에요. Δw 가 x 와 같은 방향이라 항이 전부 같은 부호예요.

**이서연:** 정렬된 합이라서 n 에 비례해요. 중심극한정리를 쓸 자리가 아니었어요. 서로 독립인 항을 더할 때만 √n 이 나와요.

**김민준:** 그럼 y 의 오차는 매 스텝 (1 − lr·n) 배가 되니까 |1 − lr·n| < 1, lr < 2/n 이네요. n = 4096 이면 0.00049.

**선생님:** μP의 처방과 어떻게 이어져요?

**김민준:** 이건 fan_in = n 인 출력층이니까 SGD 학습률 1/fan_in 이요. 표랑 맞아요.

**김민준:** 조원이 n 명인데 다들 같은 방향으로 한 줄씩만 고쳐도, 보고서 전체로는 n 줄이 한쪽으로 바뀌는 거죠. 조장은 조원 수만큼 수정 폭을 줄여야 하고요.


## Muon: 스펙트럼 노름 아래 가장 가파른 걸음

"μP는 학습률과 초기화를 폭에 맞춰 조정했다. 그런데 한 층의 기울기 행렬 안에서도 방향마다 크기가 다르다면? 어떤 방향은 기울기가 거대하고 어떤 방향은 미미하다면, 학습률 하나로는 그 불균형을 못 고치지 않나?"

### 비유

등산과 등고선 — μP는 "지도의 축척을 보정하는 것"이었다. 지도 위 1cm가 폭과 상관없이 같은 실제 변화가 되도록. Muon은 다른 접근이다. "한 걸음이 모든 주된 방향으로 같은 크기가 되게 하는 것."

산을 오르는데 동쪽은 절벽이고 서쪽은 완만하다. 보통의 경사하강법은 절벽(기울기가 큰 방향)으로 확 쏠린다. Adam은 좌표마다 크기를 맞춰 쏠림을 줄이지만, 좌표축이 아닌 방향의 상관은 보지 못한다. Muon은 행렬 전체의 주된 방향(특이 방향)마다 같은 크기로 간다.

### 수학적 핵심

한 층의 기울기 행렬 G 가 있을 때, 스펙트럼 노름으로 크기를 제한한 걸음 가운데 손실을 가장 빨리 줄이는 것은

\`\`\`latex
\\begin{gathered}
\\underset{\\|\\Delta \\textcolor{#2e9e6e}{W}\\|_2 \\le 1}{\\arg\\min}\\ \\langle \\textcolor{#c05080}{G},\\, \\Delta \\textcolor{#2e9e6e}{W} \\rangle = -\\,U V^{\\top} \\\\
\\min = -\\|\\textcolor{#c05080}{G}\\|_{*} \\\\
\\textcolor{#c05080}{G} = U\\Sigma V^{\\top}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c05080}{G} & \\text{한 층의 기울기 행렬} \\\\
\\Delta \\textcolor{#2e9e6e}{W} & \\text{업데이트} \\\\
\\langle A, B\\rangle & \\mathrm{tr}(A^{\\top}B)\\ \\text{(행렬 내적)} \\\\
U\\Sigma V^{\\top} & \\text{특이값 분해 (컴팩트형)} \\\\
\\|\\cdot\\|_2,\\ \\|\\cdot\\|_{*} & \\text{스펙트럼 노름, 핵노름 (특이값의 합)}
\\end{array}
\`\`\`

특이값 Σ를 전부 1로 바꾼 것이다. 기울기의 "방향 정보"만 남기고 "크기 정보"를 지운다. 스펙트럼 노름과 핵노름이 서로 쌍대(한쪽이 정해지면 다른 쪽이 정해지는 짝)라서 최솟값이 −‖G‖<sub>*</sub> 로 나온다.

### μP와의 관계

같은 질문의 두 면이다.

μP: 폭에 따라 학습률과 초기화를 스케일링. "특징이 폭과 무관하게 Θ(1)로 변하도록." 처방적(prescriptive) — 규칙을 미리 정한다.

Muon: 업데이트의 특이값을 모두 1로. "스펙트럼 노름에서의 한 걸음을 일정하게." 매 스텝의 기울기 방향에 반응한다.

Jeremy Bernstein과 Laker Newhouse는 이 둘을 한 틀에 넣었다. "Old Optimizer, New Norm"(2024)에서 그들은 지수이동평균을 끈 Adam, Shampoo 등이 각각 특정한 노름 아래의 최급강하로 읽힌다고 보였다. "Modular Duality in Deep Learning"(2024)에서는 기울기를 "쌍대 벡터"로 보고, 층마다 그 층이 하는 일에 맞는 노름을 정해 기울기를 쌍대화(dualize)하자고 제안했다. 선형층에 스펙트럼 노름을 붙이고 fan_out/fan_in 배율을 넣으면 μP의 스펙트럼 스케일링이 나오고, 쌍대화 변환은 G ↦ UVᵀ, 곧 누적 없는 Shampoo가 된다. 그들은 μP와 Shampoo를 이 쌍대화 변환의 부분적 근사라고 불렀다. (Muon 블로그도 Bernstein이 "스펙트럼 노름 아래의 최급강하"를 먼저 이야기했다고 적었다.)

"왜 자가 필요한가"를 아는 사람에게 μP와 Muon은 같은 질문의 두 가지 답이다: "파라미터 공간에서 공정한 한 걸음이란 무엇인가?" 그리고 그 답은 "어떤 노름으로 재느냐"를 먼저 정해야 나온다. 피셔 계량은 그 노름 후보 가운데 분포 공간이 직접 주는 하나다.

### 더 나아간 시도

Muon은 모든 특이값을 1로 만든다 — 등방적(isotropic)이다. 그런데 피셔 계량은 방향마다 눈금이 다른 자다. 이퀄라이저의 슬라이더마다 소리를 바꾸는 민감도가 다르듯이. 정규분포 N(μ, σ²) 만 해도 I = diag(1/σ², 2/σ²) 로, μ 방향과 σ 방향의 눈금이 다르고 σ 가 작을수록 두 눈금이 함께 촘촘해진다.

FISMO(Xu, Yan, Zhang, 2026년 1월)는 이 지점을 겨눈다. Muon의 엄격한 등방성이 손실을 두 번 미분한 값(방향마다 다른 가파름)의 정보를 버린다는 문제의식에서, 크로네커 인자로 만든 피셔 계량 아래의 신뢰 영역 문제로 업데이트를 세우고 모멘텀 직교화와 피셔 구조의 전조건을 결합했다. "피셔 계량 + Muon의 직교화"의 결합이다.

이 방향은 아직 활발히 연구 중이다. 우리가 배운 도구 — 피셔 계량, 스펙트럼 구조, 자연 기울기 — 가 최신 옵티마이저 연구의 뼈대에 깔려 있다는 것이 이 장의 메시지다.

### 수확

"μP는 스케일링 규칙으로, Muon은 직교화로, 같은 질문에 답한다: '파라미터 공간에서 공정한 한 걸음이란 무엇인가?' 답은 어떤 노름으로 재느냐에 달려 있고, 피셔 계량은 그 노름을 분포 공간에서 가져오는 방법이다."

폭이 바뀌면 같은 걸음이 출력에 만드는 변화가 바뀐다. μP는 층마다 그 변화를 폭과 무관하게 맞추는 처방이고, Muon은 스펙트럼 노름으로 잰 걸음을 일정하게 만드는 처방이다. 분포의 공간에서 가져온 자(ruler)가 현실의 문제에서 작동한다.

### 문제 2. 스펙트럼 노름 아래 가장 가파른 걸음

기울기 행렬 G = UΣVᵀ 가 주어졌다. ‖ΔW‖₂ ≤ 1 인 ΔW 가운데 ⟨G, ΔW⟩ = tr(GᵀΔW) 를 최소로 하는 것을 구하라.

#### 함께 풀기

**김민준:** 벡터였으면 −G/‖G‖ 잖아요. 행렬도 똑같이 ΔW = −G/‖G‖₂ 로 하면 되지 않아요?

**선생님:** 그 ΔW 로 내적 값을 계산해 봐요.

**김민준:** ⟨G, −G/‖G‖₂⟩ = −‖G‖<sub>F</sub>²/σ<sub>max</sub> = −Σσᵢ²/σ₁ 이요.

**이서연:** −UVᵀ 를 넣으면 −tr(VΣUᵀUVᵀ) = −tr(Σ) = −Σσᵢ 야. σ₁ ≥ σᵢ 니까 Σσᵢ ≥ Σσᵢ²/σ₁. −UVᵀ 가 더 작아.

〔M04〕 **김민준:** 아, 벡터의 ℓ₂ 공에서만 −G 방향이 최선이었던 거네요. 공 모양이 바뀌면 답도 바뀌고.

**선생님:** 서연 학생, −UVᵀ 가 최소라는 건 어떻게 보장해요?

**이서연:** 음… ΔW 의 특이값이 다 1 이하면 tr(GᵀΔW) ≥ −Σσᵢ 라는 걸 보여야 하는데요. 코시–슈바르츠로 하면 |tr(GᵀΔW)| ≤ ‖G‖<sub>F</sub>‖ΔW‖<sub>F</sub> 인데, ‖ΔW‖<sub>F</sub> 가 √(랭크)까지 커질 수 있어서 경계가 느슨해요.

**이서연:** 이 방식으로는 Σσᵢ 가 안 나와요.

**선생님:** 대각합을 G 의 특이 기저로 풀어 써 봐요.

**이서연:** tr(GᵀΔW) = tr(VΣUᵀΔW) = Σᵢ σᵢ·(uᵢᵀΔW vᵢ). 그리고 |uᵢᵀΔW vᵢ| ≤ ‖ΔW‖₂ ≤ 1 이니까 Σᵢ σᵢ·(…) ≥ −Σσᵢ. 등호는 uᵢᵀΔW vᵢ = −1 일 때, ΔW = −UVᵀ 이면 돼요.

〔S08〕 **이서연:** 스펙트럼 노름의 쌍대가 핵노름이라는 대각합 쌍대성이 바로 이거네요. 선형대수 시간에 "ℓ∞ 의 쌍대는 ℓ₁"을 행렬 특이값에 옮긴 것.

**김민준:** 조별 과제 점수를 나눌 때 "한 사람당 최대 1점까지만"이라는 규칙이면, 제일 잘한 사람한테 몰아주는 게 아니라 기여한 사람마다 1점씩 주는 게 총점이 크다, 뭐 그런 거네요.


## Newton–Schulz: 행렬 곱만으로 직교화하기

"UVᵀ 를 얻으려면 매 스텝, 층마다 특이값 분해를 해야 하는가?"

### 실제 구현 — Newton–Schulz

Keller Jordan(2024)이 공개한 Muon은 매 스텝 SVD를 하지 않는다. 대신 행렬 곱만으로 UVᵀ 에 다가가는 Newton–Schulz 반복을 쓴다.

\`\`\`latex
\\begin{gathered}
X_{k+1} = a\\,X_k + b\\,(X_k X_k^{\\top})\\,X_k \\\\
\\qquad\\quad + c\\,(X_k X_k^{\\top})^2 X_k \\\\
X_0 = \\frac{\\textcolor{#c05080}{M}}{\\|\\textcolor{#c05080}{M}\\|_F}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
X_k & k\\text{번째 반복의 행렬} \\\\
\\textcolor{#c05080}{M} & \\text{모멘텀을 누적한 기울기 행렬} \\\\
\\|\\cdot\\|_F & \\text{프로베니우스 노름} \\ (\\ge \\|\\cdot\\|_2) \\\\
a,\\ b,\\ c & \\text{Muon: } (3.4445,\\ -4.7750,\\ 2.0315) \\\\
 & \\text{고전 3차: } (1.5,\\ -0.5,\\ 0)
\\end{array}
\`\`\`

각 반복은 특이벡터는 그대로 두고 특이값 σ 만 다항식 aσ + bσ³ + cσ⁵ 로 옮긴다. 고전적인 3차 반복(1.5σ − 0.5σ³)은 σ 를 정확히 1로 보내지만 작은 σ 에서 느리다. Muon의 5차 계수는 작은 특이값을 빨리 끌어올리는 대신 1 근처(대략 0.7~1.2)에서 멈추도록 고른 것이다. 다섯 번 정도 반복한다. 그리고 Muon이 직교화하는 것은 날것의 기울기가 아니라 **(네스테로프) 모멘텀을 누적한 업데이트**다.

적용 범위도 정해져 있다. Muon은 은닉층의 2차원 가중치 행렬에만 쓴다. 임베딩, 출력 헤드, 편향 같은 스칼라·벡터 파라미터는 AdamW로 학습한다.

{{viz: ch17/newton-schulz}}

### 규모를 키우면

Moonshot AI의 "Muon is Scalable for LLM Training"(Liu 외 2025)은 가중치 감쇠를 더하고 업데이트의 RMS를 AdamW와 맞추는 조정을 넣어, 계산 최적 학습에서 AdamW 대비 약 2배의 계산 효율을 보고했다. 같은 회사의 Kimi K2(2025)는 총 1조 파라미터 가운데 토큰 하나에 실제로 쓰이는 것은 320억인 전문가 혼합(mixture of experts, 입력마다 일부 하위 신경망만 쓰는 구조) 모델을 Muon에 QK-Clip(어텐션 로짓 폭주를 막는 장치)을 더한 MuonClip으로 15.5조 토큰 동안 손실 스파이크 없이 학습했다고 밝혔다.

### 파이썬

특이값이 10, 1, 0.05 로 들쭉날쭉한 4×3 기울기를 두 방식으로 직교화한다.

\`\`\`python
import numpy as np
rng = np.random.default_rng(0)
Uq, _ = np.linalg.qr(rng.standard_normal((4, 3)))
Vq, _ = np.linalg.qr(rng.standard_normal((3, 3)))
G = Uq @ np.diag([10.0, 1.0, 0.05]) @ Vq.T
U, s, Vt = np.linalg.svd(G, full_matrices=False)

def newton_schulz(M, steps, a, b, c):
    X = M / np.linalg.norm(M)                   # 프로베니우스 노름으로 나눠 특이값을 1 아래로
    for _ in range(steps):
        A = X @ X.T
        X = a * X + (b * A + c * A @ A) @ X
    return X

for name, coef in [("3차 (1.5, −0.5)", (1.5, -0.5, 0.0)), ("Muon 5차", (3.4445, -4.7750, 2.0315))]:
    for k in [5, 10]:
        X = newton_schulz(G, k, *coef)
        print(f"{name:14s} {k:2d}회  특이값 {np.linalg.svd(X, compute_uv=False).round(3)}")
print("UVᵀ 의 특이값        ", np.linalg.svd(U @ Vt, compute_uv=False).round(3))
# 3차 (1.5, −0.5)  5회  특이값 [1.    0.656 0.038]
# 3차 (1.5, −0.5) 10회  특이값 [1.    1.    0.281]
# Muon 5차         5회  특이값 [1.157 0.709 0.702]
# Muon 5차        10회  특이값 [1.117 1.105 0.694]
# UVᵀ 의 특이값         [1. 1. 1.]
\`\`\`

프로베니우스 노름으로 나누면 특이값이 (0.995, 0.0995, 0.005) 에서 출발한다. 3차 반복은 열 번을 돌려도 가장 작은 특이값을 0.28 까지밖에 못 올린다. Muon의 5차 반복은 다섯 번 만에 셋 모두를 0.7~1.2 사이로 모은다. 정확한 UVᵀ 는 아니지만, 모든 방향이 비슷한 크기로 움직이기에는 충분하다.

### 수확

"Newton–Schulz 반복은 특이벡터는 그대로 두고 특이값만 다항식으로 옮겨, 행렬 곱만으로 UVᵀ 에 다가간다. 고전 3차 반복은 정확하지만 작은 특이값에서 느리고, Muon의 5차 계수는 정확히 1에 앉는 대신 빨리 0.7~1.2 사이로 모은다."

### 문제 3. Newton–Schulz를 세 번

G = U·diag(3, 1)·Vᵀ 인 2×2 행렬에 고전적 3차 Newton–Schulz X ← 1.5X − 0.5XXᵀX 를 세 번 적용해 UVᵀ 를 얻으려 한다. 시작 행렬 X₀ 를 어떻게 잡아야 하는가? 세 번이면 충분한가?

#### 함께 풀기

**김민준:** X₀ = G 로 넣고 세 번 돌렸는데 값이 10²¹ 까지 가요.

**선생님:** 특이값 하나만 따라가 봐요. σ = 3 이면 한 번 뒤에 얼마예요?

**김민준:** 1.5·3 − 0.5·27 = −9. 그다음 351, 그다음 −2천만… 폭발이네요.

〔M06〕 **김민준:** 반복이 UVᵀ 로 가는 거라면서요. 왜 멀어져요?

**이서연:** f(σ) = 1.5σ − 0.5σ³ 이 1로 끌어당기는 범위가 정해져 있어. 0 < σ < √3 이면 1로 가고, σ 가 √3 을 넘으면 부호가 바뀌면서 튕겨 나가.

**선생님:** 그래서 X₀ 를 어떻게 잡아요?

**김민준:** 가장 큰 특이값으로 나누면 되는데… 그러려면 SVD를 해야 하잖아요. 그걸 피하려고 반복을 쓰는 건데.

**이서연:** 프로베니우스 노름으로 나누면 돼. ‖G‖<sub>F</sub> = √(Σσᵢ²) ≥ σ₁ 이니까 모든 특이값이 1 아래로 들어가. 여기서는 √10 으로 나눠서 (0.949, 0.316).

**이서연:** 그러면 둘 다 √3 안이니까 세 번이면 둘 다 1이에요.

**선생님:** 계산해 봐요.

〔S06〕 **이서연:** 0.949 는 0.996, 1.000 으로 금방 가는데, 0.316 은 0.459, 0.640, 0.829 예요. 세 번으로는 0.83 에서 멈춰요. 다섯 번은 돌려야 0.997 이에요.

**선생님:** 수렴 범위 안에 있다는 것과 몇 번 안에 도착하는지는 다른 질문이에요. 작은 σ 근처에서 f(σ) ≈ 1.5σ 라 한 번에 1.5배밖에 안 커져요.

〔S07〕 **이서연:** 그래서 Muon은 5차 다항식으로 작은 σ 에서의 기울기를 3.4 배쯤으로 키운 거군요. 대신 정확히 1에 앉지 않고 0.7~1.2 사이에서 출렁이게 두고요.

**김민준:** 과제 채점을 "정답에 가까울수록 1.5배 가산"으로 하면, 이미 잘한 사람은 금방 만점인데 거의 안 한 사람은 몇 번을 돌려도 안 따라온다… 그런 느낌이요.

### 문제 4. 누적 없는 Shampoo는 UVᵀ 다 (킬러)

(가) G = UΣVᵀ (Σ 가역)일 때 (GGᵀ)<sup>−1/4</sup> G (GᵀG)<sup>−1/4</sup> = UVᵀ 임을 보여라. (나) G 가 4×3 이라 GGᵀ 가 특이할 때 이 식은 무슨 뜻인가? (다) 수치로 계산할 때 무엇을 조심해야 하는가?

#### 함께 풀기

**이서연:** (가)는 GGᵀ = UΣ²Uᵀ 라서 (GGᵀ)<sup>−1/4</sup> = UΣ<sup>−1/2</sup>Uᵀ, 같은 식으로 (GᵀG)<sup>−1/4</sup> = VΣ<sup>−1/2</sup>Vᵀ. 곱하면 UΣ<sup>−1/2</sup>·Σ·Σ<sup>−1/2</sup>Vᵀ = UVᵀ.

**선생님:** 여기서 U 는 몇 × 몇이에요?

〔S04〕 **이서연:** U 가 정사각 직교행렬이라고 가정했어요. G 가 4×3 이면… GGᵀ 는 4×4 인데 랭크가 3 이하라 고유값 하나가 0이에요. 0의 −1/4 제곱은 없으니까, (나)의 답은 "정의되지 않는다, 세로로 긴 행렬에는 못 쓴다"예요.

**선생님:** 그 0 고유값의 고유벡터는 G 와 어떤 관계예요?

**이서연:** GGᵀ 의 영공간이니까 G 의 열공간에 수직이에요. 아… G 의 열은 그 방향 성분이 아예 없어요. 그럼 그 방향에 무엇을 곱하든 G 에는 안 닿아요.

〔S09〕 **이서연:** 0 고유값을 그냥 버리는 유사역(pseudo-inverse) −1/4 제곱을 쓰면 되네요. 결과는 컴팩트 SVD 의 U<sub>r</sub>V<sub>r</sub>ᵀ 이고요. 못 쓰는 게 아니라, 뜻을 "G 가 사는 부분공간 위에서"로 좁히면 돼요.

**김민준:** 코드로 해 봤는데요. 고유값 분해해서 w**−0.25 를 하니까 결과가 전부 nan 이에요.

**선생님:** 고유값을 찍어 봐요.

〔M05〕 **김민준:** [−1.23e−15, 0.0025, 1.0, 100.0]. 0이어야 할 게 음수로 나왔어요. 반올림 오차로요. 음수의 −1/4 제곱이라 nan 이고요.

**김민준:** 절댓값을 씌우면 nan 은 사라지는데, 1.2e−15 의 −1/4 제곱이면 5천 배가 넘게 증폭돼요. 이번엔 그 방향 성분이 1e−16 쯤이라 티가 안 났지만, 성분이 조금만 커도 잡음이 수천 배로 튀어요.

**선생님:** 그럼 어떻게 해요?

**김민준:** 문턱 이하 고유값은 버리면 돼요. 1e−10 아래를 0으로 두니까 UVᵀ 와 차이가 1.9e−12 예요.

**이서연:** 실제 Shampoo 는 L + εI 처럼 작은 값을 더하지. 그런데 그러면 정확히 UVᵀ 가 아니야.

**김민준:** 확인했어요. ε = 1e−6 이면 특이값이 (1, 1, 0.9998) 인데, ε = 0.01 이면 (1, 0.995, 0.447) 이에요. 특이값 0.05 인 방향은 σ² = 0.0025 가 ε 보다 작아서 거의 안 펴져요.

〔M09〕 **김민준:** ε 이 "이보다 작은 특이값은 믿지 않겠다"는 문턱이네요. 그 아래 방향은 직교화하지 않고 원래 크기 쪽에 남겨 두는 거예요.

〔T13〕 **선생님:** 둘 다 같은 식의 다른 구멍을 찾았어요. 서연 학생은 성립 조건을, 민준 학생은 수치를. 정리하면 이래요. 누적 없는 Shampoo는 G 가 사는 부분공간 위에서 정확히 UVᵀ 다. 0 고유값은 버려야 하고, 반올림이 그것을 음수나 아주 작은 양수로 만들기 때문에 문턱이나 작은 값 더하기가 필요하다. 그리고 더한 값 ε 의 크기가 어떤 특이값까지 펴 줄지를 정한다. Newton–Schulz는 이 모든 것을 행렬 곱만으로, 고유값 분해 없이 해낸다는 데 값어치가 있어요.

**이서연:** 해석학에서 "역함수는 치역 위에서만 정의된다"를 매번 강조하던 이유를 알겠어요. 정의역을 좁히는 게 반칙이 아니라 정의의 일부예요.

**김민준:** 조교가 "제출 안 한 과제는 0점 처리가 아니라 평균에서 제외"라고 하던 거랑 같네요. 없는 걸 0으로 나누지 말고 빼 두는 거.
`,t5=`# 에필로그: 지도의 가장자리에서

이론의 지도를 완성했고, 응용의 풍경을 네 곳에서 보았다. 디퓨전에서 데이터 공간의 스코어 ∇ₓ log p 가 안개 속의 레이더가 되었고, 플로우 매칭에서 노이즈와 데이터를 잇는 직선이 생성의 경로가 되었다 — 4장의 덧셈의 길과 모양은 닮았지만 다른 길이었다. 넓히기와 좁히기에서 프리트레인은 데이터 위로의 m-사영(KL(p‖q)을 가장 작게 하는 q로 내리기)이었고, KL 발산(두 분포의 확률이 얼마나 다른지 재는 양)으로 묶은 강화학습의 최적해는 참조 분포를 보상으로 기울인 지수족(log p = θ·t(x) − F(θ) 꼴의 분포 모임), 곧 곱셈의 길이었다. 스케일링에서 피셔 계량(곳마다 작은 걸음의 길이를 분포가 달라지는 정도로 재는 규칙)과 그 친척 노름들이 한 걸음의 크기를 재는 것을 보았고, 이 교재가 시작된 원점으로 돌아왔다.

그래도 가장자리는 있다. 지도 너머 더 먼 땅이 있다.

## α-접속의 일반론

![α-접속의 연속체](/images/chapters/chA-alpha-connection.svg)

이 교재에서 우리는 α = ±1 을 중심으로 보았다. e-접속(α = +1)과 m-접속(α = −1). 접속은 무엇을 곧은 길로 볼지 정하는 규칙이다. 곱셈의 길과 덧셈의 길. 16장에서는 α-발산의 다이얼을 −1에서 +1까지 돌리며 KL(p‖q) 와 KL(q‖p) 사이를 보간해 보았다. 그런데 α는 이보다 더 넓은 연속 파라미터다. 불변인 접속은 α-족 전체이고, (α, −α) 가 서로 쌍대인 짝이다. α = 0 이면 자기쌍대인 레비-치비타 접속 — 피셔 계량의 리만 기하학이 나타난다. α = ±1 은 지수족과 혼합족 위에서 평탄해지는 특별한 짝이었다. 그 밖의 α에서는 대개 곡률이 0이 아니고, 측지선(가장 곧은 길)이 달라지고, 사영의 방식이 달라진다. 16장에서 맛본 것은 이 풍경의 입구였다.

## 양자 정보기하학

양자 상태는 밀도 행렬로 표현된다. 밀도 행렬의 공간에도 피셔 계량에 해당하는 것을 정의할 수 있다. 그런데 양자 세계에서는 그것이 하나가 아니다 — 고전 세계에서의 유일성 정리(첸초프 정리)가 양자에서는 그대로 성립하지 않는다. Dénes Petz(1996)는 양자 채널 아래에서 줄어드는(단조인) 계량이 작용소 단조 함수 하나마다 하나씩, 무한히 많이 있음을 보였다. 그 각각이 다른 기하학을 정의한다. 우리가 배운 유일성의 아름다움이 양자에서는 어떻게 변주되는지 — 그것은 이 지도 너머의 풍경이다.

## 정보기하학과 열역학

르장드르 변환은 6장과 7장에서 쌍대 좌표를 연결하는 다리였다. 이름의 주인 Adrien-Marie Legendre는 1787년, 최소곡면 문제에서 나온 편미분방정식을 풀다가 이 변환을 썼다. 그 변환이 가장 유명하게 자리 잡은 곳이 열역학이다.

열역학에서 짝을 이루는 것은 온도와 엔트로피 (T, S), 압력과 부피 (P, V) 같은 켤레 변수다. 내부에너지 U 에서 엔트로피를 온도로 바꿔 쥐는 것이 르장드르 변환이다.

\`\`\`latex
\\begin{gathered}
F_{\\mathrm{H}} = U - T S \\\\
T = \\frac{\\partial U}{\\partial S}
\\end{gathered}
\`\`\`

\`\`\`latex
\\begin{array}{ll}
F_{\\mathrm{H}} & \\text{헬름홀츠 자유에너지} \\\\
U & \\text{내부에너지 (엔트로피와 부피의 함수)} \\\\
T,\\ S & \\text{온도와 엔트로피, 켤레 짝} \\\\
\\partial U / \\partial S & \\text{부피를 고정한 편미분}
\\end{array}
\`\`\`

7장의 F(θ) 와 F*(η) 사이의 관계와 같은 모양이다. 기울기가 새 변수가 된다. 그리고 이것은 닮음 이상이다. 볼츠만 분포 p(x) ∝ e<sup>−E(x)/T</sup> 는 에너지를 충분통계량(분포가 데이터에서 보는 유일한 값)으로 하는 지수족이고, 그 로그정규화자(합을 1로 맞추는 수의 로그) log Z 가 곧 자유에너지(에 −1/T 를 곱한 것)다. 16장의 π* ∝ π<sub>ref</sub> e<sup>r/β</sup> 에서 β 를 "온도"라 부르는 것도 우연이 아니다.

학습을 열역학의 언어로 끝까지 읽을 수 있을까. 16장의 에피플렉시티는 "계산이 제한된 관찰자"라는 제약을 정보의 정의 안에 넣은 시도였다. 그 제약을 에너지와 비가역성의 언어로 밀고 나가면 어떤 풍경이 나올지는 아직 이 지도에 적혀 있지 않다.

---

## 원점으로 돌아오다

이 이름들은 우리가 그린 지도의 가장자리에 적힌 표지판이다. 각각이 하나의 새로운 여행이 될 수 있다. 하지만 그 여행을 시작하기 전에, 돌아보자.

저자가 처음 아마리를 알게 된 것은 μP(폭이 달라져도 학습률을 그대로 옮겨 쓰게 하는 설정)에 대해 알아보다가였다. 피셔 정보 행렬이라는 이름이 논문에서 반복되는데 그것이 뭔지 모르니까 읽히지 않았다. 검색하다가 아마리에 도달했고, 정보기하학이라는 풍경을 발견했다.

그리고 지금, Muon을 둘러싼 논문들에서도 같은 이름들이 나타난다. 피셔 정보 행렬. 자연 기울기. 스펙트럼 구조. 2년 전에 읽히지 않던 문장이 지금은 그림이 된다. 이 교재는 그 발견에서 시작되었고, 여기서 원점으로 돌아왔다.

돌아보자. 우리가 걸어온 길의 모든 갈림목에는 같은 선택이 있었다 — 더할 것인가, 곱할 것인가. 그리고 그 선택은 추상이 아니었다. 프리트레인이 넓혔고, 강화학습이 좁혔다. 디퓨전이 방향을 배웠고, 플로우 매칭이 경로를 배웠다. 피셔 계량이 한 걸음의 크기를 재었고, Muon이 모든 방향의 크기를 1로 맞췄다. 덧셈의 길과 곱셈의 길 사이를 번역하는 하나의 함수 — log — 가 있었다. 그리고 그 번역기의 너머에, 아직 우리가 이름 붙이지 못한 풍경이 있다. 지도는 계속된다.
`,ke=(a,t)=>Q.lazy(()=>a().then(r=>({default:r[t]}))),Hn=[{id:"00",title:"서문",slug:"preface",md:N4,vizMap:{}},{id:"01",title:"왜 정보기하학인가",slug:"why-infogeo",md:R4,vizMap:{"ch01/softmax":ke(()=>we(()=>import("./ch01-why-Dp_g0P51.js"),__vite__mapDeps([0,1])),"SoftmaxTab"),"ch01/cramer-rao":ke(()=>we(()=>import("./ch01-why-Dp_g0P51.js"),__vite__mapDeps([0,1])),"CramerRaoTab")}},{id:"02",title:"점",slug:"point",md:K4,vizMap:{"ch02/mu-sigma":ke(()=>we(()=>import("./ch02-point-nsRFPZRA.js"),__vite__mapDeps([2,1])),"MuSigmaTab"),"ch02/simplex":ke(()=>we(()=>import("./ch02-point-nsRFPZRA.js"),__vite__mapDeps([2,1])),"SimplexTab")}},{id:"03",title:"거리",slug:"distance",md:D4,vizMap:{"ch03/euclidean-vs-kl":ke(()=>we(()=>import("./ch03-distance-1cKcjAy5.js"),__vite__mapDeps([3,1,4,5,6,7])),"EuclideanVsKLTab"),"ch03/asymmetry":ke(()=>we(()=>import("./ch03-distance-1cKcjAy5.js"),__vite__mapDeps([3,1,4,5,6,7])),"AsymmetryTab"),"ch03/fisher-local":ke(()=>we(()=>import("./ch03-distance-1cKcjAy5.js"),__vite__mapDeps([3,1,4,5,6,7])),"FisherLocalTab")}},{id:"04",title:"길",slug:"paths",md:I4,vizMap:{"ch04/two-paths":ke(()=>we(()=>import("./ch04-paths-Cu5eD91d.js"),__vite__mapDeps([8,1])),"TwoPathsTab"),"ch04/midpoint":ke(()=>we(()=>import("./ch04-paths-Cu5eD91d.js"),__vite__mapDeps([8,1])),"MidpointTab"),"ch04/color-interpolation":ke(()=>we(()=>import("./ch04-paths-Cu5eD91d.js"),__vite__mapDeps([8,1])),"ColorInterpolationTab")}},{id:"04z",title:"전환 — 같은 세계, 다른 눈",slug:"transition-1",md:B4,vizMap:{}},{id:"05",title:"놀라움과 정보",slug:"surprise",md:P4,vizMap:{"ch05/surprise":ke(()=>we(()=>import("./ch05-surprise-and-information-B9oFo2p1.js"),__vite__mapDeps([9,1])),"SurpriseTab"),"ch05/entropy-simplex":ke(()=>we(()=>import("./ch05-surprise-and-information-B9oFo2p1.js"),__vite__mapDeps([9,1])),"EntropySimplexTab"),"ch05/cross-entropy":ke(()=>we(()=>import("./ch05-surprise-and-information-B9oFo2p1.js"),__vite__mapDeps([9,1])),"CrossEntropyTab"),"ch05/convexity-kl":ke(()=>we(()=>import("./ch05-surprise-and-information-B9oFo2p1.js"),__vite__mapDeps([9,1])),"ConvexityTab")}},{id:"06",title:"볼록함수의 쌍대",slug:"convex-duality",md:O4,vizMap:{"ch06/convexity":ke(()=>we(()=>import("./ch06-convex-duality-gsLGhJOY.js"),__vite__mapDeps([10,1,4,6])),"ConvexityTab"),"ch06/jensen":ke(()=>we(()=>import("./ch06-convex-duality-gsLGhJOY.js"),__vite__mapDeps([10,1,4,6])),"JensenTab"),"ch06/legendre":ke(()=>we(()=>import("./ch06-convex-duality-gsLGhJOY.js"),__vite__mapDeps([10,1,4,6])),"LegendreTab"),"ch06/fenchel-young":ke(()=>we(()=>import("./ch06-convex-duality-gsLGhJOY.js"),__vite__mapDeps([10,1,4,6])),"FenchelYoungTab")}},{id:"06z",title:"전환 — 두 눈을 동시에",slug:"transition-2",md:H4,vizMap:{}},{id:"07",title:"지수족",slug:"exponential-family",md:j4,vizMap:{"ch07/flashcards":ke(()=>we(()=>import("./ch07-exponential-family-flashcards-CvtvEXyV.js"),__vite__mapDeps([11,1,4,12,6])),"FlashcardsTab"),"ch07/two-handles":ke(()=>we(()=>import("./ch07-exponential-family-flashcards-CvtvEXyV.js"),__vite__mapDeps([11,1,4,12,6])),"TwoHandlesTab"),"ch07/moment-match":ke(()=>we(()=>import("./ch07-exponential-family-flashcards-CvtvEXyV.js"),__vite__mapDeps([11,1,4,12,6])),"MomentMatchTab"),"ch07/bregman":ke(()=>we(()=>import("./ch07-exponential-family-flashcards-CvtvEXyV.js"),__vite__mapDeps([11,1,4,12,6])),"BregmanTab")}},{id:"08",title:"구부러진 땅",slug:"curved-land",md:V4,vizMap:{"ch08/circle-deficit":ke(()=>we(()=>import("./ch08-curved-land-DnyFJy-7.js"),__vite__mapDeps([13,1,6,12])),"CircleDeficitTab"),"ch08/holonomy":ke(()=>we(()=>import("./ch08-curved-land-DnyFJy-7.js"),__vite__mapDeps([13,1,6,12])),"HolonomyTab")}},{id:"09",title:"파라미터 공간의 곡률",slug:"fisher-information",md:$4,vizMap:{"ch09/sensitivity":ke(()=>we(()=>import("./ch09-fisher-information-QD5bkcvL.js"),__vite__mapDeps([14,1,4,6])),"SensitivityTab"),"ch09/fisher-rao-distance":ke(()=>we(()=>import("./ch09-fisher-information-QD5bkcvL.js"),__vite__mapDeps([14,1,4,6])),"FisherRaoDistanceTab"),"ch09/metric-ellipse":ke(()=>we(()=>import("./ch09-fisher-information-QD5bkcvL.js"),__vite__mapDeps([14,1,4,6])),"MetricEllipseTab")}},{id:"10",title:"무지와 확신",slug:"ignorance",md:U4,vizMap:{"ch10/mixture-entropy":ke(()=>we(()=>import("./ch10-ignorance-confidence-C9n-dO3e.js"),__vite__mapDeps([15,1])),"MixtureEntropyTab"),"ch10/bayes-path":ke(()=>we(()=>import("./ch10-ignorance-confidence-C9n-dO3e.js"),__vite__mapDeps([15,1])),"BayesPathTab")}},{id:"11",title:"추론의 기하학",slug:"geometry-of-inference",md:G4,vizMap:{"ch11/gauss-fit":ke(()=>we(()=>import("./ch11-geometry-of-inference-TPeHqIAS.js"),__vite__mapDeps([16,1])),"GaussFitTab"),"ch11/simplex-projection":ke(()=>we(()=>import("./ch11-geometry-of-inference-TPeHqIAS.js"),__vite__mapDeps([16,1])),"SimplexProjectionTab"),"ch11/alpha-paths":ke(()=>we(()=>import("./ch11-geometry-of-inference-TPeHqIAS.js"),__vite__mapDeps([16,1])),"AlphaPathsTab")}},{id:"12",title:"수렴",slug:"convergence",md:W4,vizMap:{"ch12/pythagoras":ke(()=>we(()=>import("./ch12-convergence-B7X1pRlw.js"),__vite__mapDeps([17,1,6,12])),"PythagorasTab"),"ch12/em-convergence":ke(()=>we(()=>import("./ch12-convergence-B7X1pRlw.js"),__vite__mapDeps([17,1,6,12])),"EMConvergenceTab")}},{id:"13",title:"전체 지도",slug:"full-map",md:X4,vizMap:{"ch13/three-faces":ke(()=>we(()=>import("./ch13-full-map-BaZp5sWS.js"),__vite__mapDeps([18,1,12,6])),"ThreeFacesTab")}},{id:"13z",title:"전환 — 도구를 들고 세계로",slug:"transition-3",md:Z4,vizMap:{}},{id:"14",title:"디퓨전",slug:"diffusion",md:Q4,vizMap:{"ch14/score-field":ke(()=>we(()=>import("./ch14-diffusion-BlnsNwjY.js"),__vite__mapDeps([19,1])),"ScoreFieldTab"),"ch14/reverse-diffusion":ke(()=>we(()=>import("./ch14-diffusion-BlnsNwjY.js"),__vite__mapDeps([19,1])),"ReverseDiffusionTab"),"ch14/noise-annealing":ke(()=>we(()=>import("./ch14-diffusion-BlnsNwjY.js"),__vite__mapDeps([19,1])),"NoiseAnnealingTab")}},{id:"15",title:"플로우 매칭",slug:"flow-matching",md:Y4,vizMap:{"ch15/velocity-field":ke(()=>we(()=>import("./ch15-flow-matching-BNbdGnNu.js"),__vite__mapDeps([20,1,19])),"VelocityFieldTab"),"ch15/ot-matching":ke(()=>we(()=>import("./ch15-flow-matching-BNbdGnNu.js"),__vite__mapDeps([20,1,19])),"OTMatchingTab"),"ch15/comparison":ke(()=>we(()=>import("./ch15-flow-matching-BNbdGnNu.js"),__vite__mapDeps([20,1,19])),"ComparisonTab")}},{id:"16",title:"넓히기와 좁히기",slug:"broadening-narrowing",md:J4,vizMap:{"ch16/tilt":ke(()=>we(()=>import("./ch16-broadening-narrowing-ANh-SHKq.js"),__vite__mapDeps([21,1,6,7,5,12])),"TiltTab"),"ch16/pass-at-k":ke(()=>we(()=>import("./ch16-broadening-narrowing-ANh-SHKq.js"),__vite__mapDeps([21,1,6,7,5,12])),"PassAtKTab"),"ch16/alpha-fit":ke(()=>we(()=>import("./ch16-broadening-narrowing-ANh-SHKq.js"),__vite__mapDeps([21,1,6,7,5,12])),"AlphaFitTab")}},{id:"17",title:"스케일링",slug:"scaling",md:e5,vizMap:{"ch17/lr-transfer":ke(()=>we(()=>import("./ch17-scaling-H6LWbEyY.js"),__vite__mapDeps([22,1,6,5])),"LRTransferTab"),"ch17/newton-schulz":ke(()=>we(()=>import("./ch17-scaling-H6LWbEyY.js"),__vite__mapDeps([22,1,6,5])),"NewtonSchulzTab")}},{id:"A",title:"에필로그",slug:"epilogue",md:t5,vizMap:{}}];function vo(a){const t=a.split(`
`),r=[];let o=[],i=!1,u=!1;for(const p of t)!u&&/^\s*```/.test(p)&&(i=!i),i||(!u&&p.includes("<!--")&&!p.includes("-->",p.indexOf("<!--"))?u=!0:u&&p.includes("-->")&&(u=!1)),!i&&!u&&/^## /.test(p)&&o.length>0?(r.push(o.join(`
`)),o=[p]):o.push(p);return o.length>0&&r.push(o.join(`
`)),r}function yu(a){var x;if(!a)return{title:null,vizKeys:[],prose:""};const t=a.split(`
`),r=[],o=[];let i=!1,u=!1;for(const g of t){if(/^\s*```/.test(g)&&(u=!u),!u&&/^### JSX/.test(g)){i=!0;continue}if(i)if(!u&&/^#{2,3}\s/.test(g))i=!1;else{const y=g.match(/^viz:\s*(.+)/);y&&r.push(y[1].trim());continue}o.push(g)}const p=(x=t[0])==null?void 0:x.match(/^## (.+)/);return{title:p?p[1]:null,vizKeys:[...new Set(r)],prose:o.join(`
`)}}function wu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Xr=wu();function o2(a){Xr=a}var $r={exec:()=>null};function qe(a,t=""){let r=typeof a=="string"?a:a.source,o={replace:(i,u)=>{let p=typeof u=="string"?u:u.source;return p=p.replace(Nt.caret,"$1"),r=r.replace(i,p),o},getRegex:()=>new RegExp(r,t)};return o}var n5=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Nt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}>`)},r5=/^(?:[ \t]*(?:\n|$))+/,a5=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,l5=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Da=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o5=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ku=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,i2=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,s2=qe(i2).replace(/bull/g,ku).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),i5=qe(i2).replace(/bull/g,ku).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Su=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,s5=/^[^\n]+/,_u=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,u5=qe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",_u).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),c5=qe(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ku).getRegex(),bo="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Lu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,p5=qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Lu).replace("tag",bo).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),u2=qe(Su).replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex(),f5=qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",u2).getRegex(),zu={blockquote:f5,code:a5,def:u5,fences:l5,heading:o5,hr:Da,html:p5,lheading:s2,list:c5,newline:r5,paragraph:u2,table:$r,text:s5},Qp=qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex(),d5={...zu,lheading:i5,table:Qp,paragraph:qe(Su).replace("hr",Da).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Qp).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",bo).getRegex()},h5={...zu,html:qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Lu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:$r,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:qe(Su).replace("hr",Da).replace("heading",` *#{1,6} *[^
]`).replace("lheading",s2).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},m5=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,x5=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,c2=/^( {2,}|\\)\n(?!\s*$)/,g5=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,yo=/[\p{P}\p{S}]/u,Eu=/[\s\p{P}\p{S}]/u,p2=/[^\s\p{P}\p{S}]/u,v5=qe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Eu).getRegex(),f2=/(?!~)[\p{P}\p{S}]/u,b5=/(?!~)[\s\p{P}\p{S}]/u,y5=/(?:[^\s\p{P}\p{S}]|~)/u,d2=/(?![*_])[\p{P}\p{S}]/u,w5=/(?![*_])[\s\p{P}\p{S}]/u,k5=/(?:[^\s\p{P}\p{S}]|[*_])/u,S5=qe(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",n5?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),h2=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,_5=qe(h2,"u").replace(/punct/g,yo).getRegex(),L5=qe(h2,"u").replace(/punct/g,f2).getRegex(),m2="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",z5=qe(m2,"gu").replace(/notPunctSpace/g,p2).replace(/punctSpace/g,Eu).replace(/punct/g,yo).getRegex(),E5=qe(m2,"gu").replace(/notPunctSpace/g,y5).replace(/punctSpace/g,b5).replace(/punct/g,f2).getRegex(),M5=qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,p2).replace(/punctSpace/g,Eu).replace(/punct/g,yo).getRegex(),T5=qe(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,d2).getRegex(),q5="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",A5=qe(q5,"gu").replace(/notPunctSpace/g,k5).replace(/punctSpace/g,w5).replace(/punct/g,d2).getRegex(),F5=qe(/\\(punct)/,"gu").replace(/punct/g,yo).getRegex(),C5=qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),N5=qe(Lu).replace("(?:-->|$)","-->").getRegex(),R5=qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",N5).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),uo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,K5=qe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",uo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),x2=qe(/^!?\[(label)\]\[(ref)\]/).replace("label",uo).replace("ref",_u).getRegex(),g2=qe(/^!?\[(ref)\](?:\[\])?/).replace("ref",_u).getRegex(),D5=qe("reflink|nolink(?!\\()","g").replace("reflink",x2).replace("nolink",g2).getRegex(),Yp=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Mu={_backpedal:$r,anyPunctuation:F5,autolink:C5,blockSkip:S5,br:c2,code:x5,del:$r,delLDelim:$r,delRDelim:$r,emStrongLDelim:_5,emStrongRDelimAst:z5,emStrongRDelimUnd:M5,escape:m5,link:K5,nolink:g2,punctuation:v5,reflink:x2,reflinkSearch:D5,tag:R5,text:g5,url:$r},I5={...Mu,link:qe(/^!?\[(label)\]\((.*?)\)/).replace("label",uo).getRegex(),reflink:qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",uo).getRegex()},Gs={...Mu,emStrongRDelimAst:E5,emStrongLDelim:L5,delLDelim:T5,delRDelim:A5,url:qe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Yp).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:qe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Yp).getRegex()},B5={...Gs,br:qe(c2).replace("{2,}","*").getRegex(),text:qe(Gs.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Zl={normal:zu,gfm:d5,pedantic:h5},La={normal:Mu,gfm:Gs,breaks:B5,pedantic:I5},P5={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jp=a=>P5[a];function Sn(a,t){if(t){if(Nt.escapeTest.test(a))return a.replace(Nt.escapeReplace,Jp)}else if(Nt.escapeTestNoEncode.test(a))return a.replace(Nt.escapeReplaceNoEncode,Jp);return a}function ef(a){try{a=encodeURI(a).replace(Nt.percentDecode,"%")}catch{return null}return a}function tf(a,t){var u;let r=a.replace(Nt.findPipe,(p,d,x)=>{let g=!1,y=d;for(;--y>=0&&x[y]==="\\";)g=!g;return g?"|":" |"}),o=r.split(Nt.splitPipe),i=0;if(o[0].trim()||o.shift(),o.length>0&&!((u=o.at(-1))!=null&&u.trim())&&o.pop(),t)if(o.length>t)o.splice(t);else for(;o.length<t;)o.push("");for(;i<o.length;i++)o[i]=o[i].trim().replace(Nt.slashPipe,"|");return o}function za(a,t,r){let o=a.length;if(o===0)return"";let i=0;for(;i<o&&a.charAt(o-i-1)===t;)i++;return a.slice(0,o-i)}function O5(a,t){if(a.indexOf(t[1])===-1)return-1;let r=0;for(let o=0;o<a.length;o++)if(a[o]==="\\")o++;else if(a[o]===t[0])r++;else if(a[o]===t[1]&&(r--,r<0))return o;return r>0?-2:-1}function H5(a,t=0){let r=t,o="";for(let i of a)if(i==="	"){let u=4-r%4;o+=" ".repeat(u),r+=u}else o+=i,r++;return o}function nf(a,t,r,o,i){let u=t.href,p=t.title||null,d=a[1].replace(i.other.outputLinkReplace,"$1");o.state.inLink=!0;let x={type:a[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:p,text:d,tokens:o.inlineTokens(d)};return o.state.inLink=!1,x}function j5(a,t,r){let o=a.match(r.other.indentCodeCompensation);if(o===null)return t;let i=o[1];return t.split(`
`).map(u=>{let p=u.match(r.other.beginningSpace);if(p===null)return u;let[d]=p;return d.length>=i.length?u.slice(i.length):u}).join(`
`)}var co=class{constructor(a){je(this,"options");je(this,"rules");je(this,"lexer");this.options=a||Xr}space(a){let t=this.rules.block.newline.exec(a);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(a){let t=this.rules.block.code.exec(a);if(t){let r=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:za(r,`
`)}}}fences(a){let t=this.rules.block.fences.exec(a);if(t){let r=t[0],o=j5(r,t[3]||"",this.rules);return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(a){let t=this.rules.block.heading.exec(a);if(t){let r=t[2].trim();if(this.rules.other.endingHash.test(r)){let o=za(r,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(r=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(a){let t=this.rules.block.hr.exec(a);if(t)return{type:"hr",raw:za(t[0],`
`)}}blockquote(a){let t=this.rules.block.blockquote.exec(a);if(t){let r=za(t[0],`
`).split(`
`),o="",i="",u=[];for(;r.length>0;){let p=!1,d=[],x;for(x=0;x<r.length;x++)if(this.rules.other.blockquoteStart.test(r[x]))d.push(r[x]),p=!0;else if(!p)d.push(r[x]);else break;r=r.slice(x);let g=d.join(`
`),y=g.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${g}`:g,i=i?`${i}
${y}`:y;let k=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(y,u,!0),this.lexer.state.top=k,r.length===0)break;let L=u.at(-1);if((L==null?void 0:L.type)==="code")break;if((L==null?void 0:L.type)==="blockquote"){let E=L,K=E.raw+`
`+r.join(`
`),C=this.blockquote(K);u[u.length-1]=C,o=o.substring(0,o.length-E.raw.length)+C.raw,i=i.substring(0,i.length-E.text.length)+C.text;break}else if((L==null?void 0:L.type)==="list"){let E=L,K=E.raw+`
`+r.join(`
`),C=this.list(K);u[u.length-1]=C,o=o.substring(0,o.length-L.raw.length)+C.raw,i=i.substring(0,i.length-E.raw.length)+C.raw,r=K.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:u,text:i}}}list(a){var r,o;let t=this.rules.block.list.exec(a);if(t){let i=t[1].trim(),u=i.length>1,p={type:"list",raw:"",ordered:u,start:u?+i.slice(0,-1):"",loose:!1,items:[]};i=u?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=u?i:"[*+-]");let d=this.rules.other.listItemRegex(i),x=!1;for(;a;){let y=!1,k="",L="";if(!(t=d.exec(a))||this.rules.block.hr.test(a))break;k=t[0],a=a.substring(k.length);let E=H5(t[2].split(`
`,1)[0],t[1].length),K=a.split(`
`,1)[0],C=!E.trim(),F=0;if(this.options.pedantic?(F=2,L=E.trimStart()):C?F=t[1].length+1:(F=E.search(this.rules.other.nonSpaceChar),F=F>4?1:F,L=E.slice(F),F+=t[1].length),C&&this.rules.other.blankLine.test(K)&&(k+=K+`
`,a=a.substring(K.length+1),y=!0),!y){let P=this.rules.other.nextBulletRegex(F),V=this.rules.other.hrRegex(F),Z=this.rules.other.fencesBeginRegex(F),re=this.rules.other.headingBeginRegex(F),ue=this.rules.other.htmlBeginRegex(F),ce=this.rules.other.blockquoteBeginRegex(F);for(;a;){let me=a.split(`
`,1)[0],ge;if(K=me,this.options.pedantic?(K=K.replace(this.rules.other.listReplaceNesting,"  "),ge=K):ge=K.replace(this.rules.other.tabCharGlobal,"    "),Z.test(K)||re.test(K)||ue.test(K)||ce.test(K)||P.test(K)||V.test(K))break;if(ge.search(this.rules.other.nonSpaceChar)>=F||!K.trim())L+=`
`+ge.slice(F);else{if(C||E.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Z.test(E)||re.test(E)||V.test(E))break;L+=`
`+K}C=!K.trim(),k+=me+`
`,a=a.substring(me.length+1),E=ge.slice(F)}}p.loose||(x?p.loose=!0:this.rules.other.doubleBlankLine.test(k)&&(x=!0)),p.items.push({type:"list_item",raw:k,task:!!this.options.gfm&&this.rules.other.listIsTask.test(L),loose:!1,text:L,tokens:[]}),p.raw+=k}let g=p.items.at(-1);if(g)g.raw=g.raw.trimEnd(),g.text=g.text.trimEnd();else return;p.raw=p.raw.trimEnd();for(let y of p.items){if(this.lexer.state.top=!1,y.tokens=this.lexer.blockTokens(y.text,[]),y.task){if(y.text=y.text.replace(this.rules.other.listReplaceTask,""),((r=y.tokens[0])==null?void 0:r.type)==="text"||((o=y.tokens[0])==null?void 0:o.type)==="paragraph"){y.tokens[0].raw=y.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),y.tokens[0].text=y.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let L=this.lexer.inlineQueue.length-1;L>=0;L--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[L].src)){this.lexer.inlineQueue[L].src=this.lexer.inlineQueue[L].src.replace(this.rules.other.listReplaceTask,"");break}}let k=this.rules.other.listTaskCheckbox.exec(y.raw);if(k){let L={type:"checkbox",raw:k[0]+" ",checked:k[0]!=="[ ]"};y.checked=L.checked,p.loose?y.tokens[0]&&["paragraph","text"].includes(y.tokens[0].type)&&"tokens"in y.tokens[0]&&y.tokens[0].tokens?(y.tokens[0].raw=L.raw+y.tokens[0].raw,y.tokens[0].text=L.raw+y.tokens[0].text,y.tokens[0].tokens.unshift(L)):y.tokens.unshift({type:"paragraph",raw:L.raw,text:L.raw,tokens:[L]}):y.tokens.unshift(L)}}if(!p.loose){let k=y.tokens.filter(E=>E.type==="space"),L=k.length>0&&k.some(E=>this.rules.other.anyLine.test(E.raw));p.loose=L}}if(p.loose)for(let y of p.items){y.loose=!0;for(let k of y.tokens)k.type==="text"&&(k.type="paragraph")}return p}}html(a){let t=this.rules.block.html.exec(a);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(a){let t=this.rules.block.def.exec(a);if(t){let r=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:o,title:i}}}table(a){var p;let t=this.rules.block.table.exec(a);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let r=tf(t[1]),o=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=(p=t[3])!=null&&p.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===o.length){for(let d of o)this.rules.other.tableAlignRight.test(d)?u.align.push("right"):this.rules.other.tableAlignCenter.test(d)?u.align.push("center"):this.rules.other.tableAlignLeft.test(d)?u.align.push("left"):u.align.push(null);for(let d=0;d<r.length;d++)u.header.push({text:r[d],tokens:this.lexer.inline(r[d]),header:!0,align:u.align[d]});for(let d of i)u.rows.push(tf(d,u.header.length).map((x,g)=>({text:x,tokens:this.lexer.inline(x),header:!1,align:u.align[g]})));return u}}lheading(a){let t=this.rules.block.lheading.exec(a);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(a){let t=this.rules.block.paragraph.exec(a);if(t){let r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(a){let t=this.rules.block.text.exec(a);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(a){let t=this.rules.inline.escape.exec(a);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(a){let t=this.rules.inline.tag.exec(a);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(a){let t=this.rules.inline.link.exec(a);if(t){let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let u=za(r.slice(0,-1),"\\");if((r.length-u.length)%2===0)return}else{let u=O5(t[2],"()");if(u===-2)return;if(u>-1){let p=(t[0].indexOf("!")===0?5:4)+t[1].length+u;t[2]=t[2].substring(0,u),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let o=t[2],i="";if(this.options.pedantic){let u=this.rules.other.pedanticHrefTitle.exec(o);u&&(o=u[1],i=u[3])}else i=t[3]?t[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),nf(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(a,t){let r;if((r=this.rules.inline.reflink.exec(a))||(r=this.rules.inline.nolink.exec(a))){let o=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[o.toLowerCase()];if(!i){let u=r[0].charAt(0);return{type:"text",raw:u,text:u}}return nf(r,i,r[0],this.lexer,this.rules)}}emStrong(a,t,r=""){let o=this.rules.inline.emStrongLDelim.exec(a);if(!(!o||o[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(o[1]||o[2])||!r||this.rules.inline.punctuation.exec(r))){let i=[...o[0]].length-1,u,p,d=i,x=0,g=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,t=t.slice(-1*a.length+i);(o=g.exec(t))!=null;){if(u=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!u)continue;if(p=[...u].length,o[3]||o[4]){d+=p;continue}else if((o[5]||o[6])&&i%3&&!((i+p)%3)){x+=p;continue}if(d-=p,d>0)continue;p=Math.min(p,p+d+x);let y=[...o[0]][0].length,k=a.slice(0,i+o.index+y+p);if(Math.min(i,p)%2){let E=k.slice(1,-1);return{type:"em",raw:k,text:E,tokens:this.lexer.inlineTokens(E)}}let L=k.slice(2,-2);return{type:"strong",raw:k,text:L,tokens:this.lexer.inlineTokens(L)}}}}codespan(a){let t=this.rules.inline.code.exec(a);if(t){let r=t[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(r),i=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return o&&i&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:t[0],text:r}}}br(a){let t=this.rules.inline.br.exec(a);if(t)return{type:"br",raw:t[0]}}del(a,t,r=""){let o=this.rules.inline.delLDelim.exec(a);if(o&&(!o[1]||!r||this.rules.inline.punctuation.exec(r))){let i=[...o[0]].length-1,u,p,d=i,x=this.rules.inline.delRDelim;for(x.lastIndex=0,t=t.slice(-1*a.length+i);(o=x.exec(t))!=null;){if(u=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!u||(p=[...u].length,p!==i))continue;if(o[3]||o[4]){d+=p;continue}if(d-=p,d>0)continue;p=Math.min(p,p+d);let g=[...o[0]][0].length,y=a.slice(0,i+o.index+g+p),k=y.slice(i,-i);return{type:"del",raw:y,text:k,tokens:this.lexer.inlineTokens(k)}}}}autolink(a){let t=this.rules.inline.autolink.exec(a);if(t){let r,o;return t[2]==="@"?(r=t[1],o="mailto:"+r):(r=t[1],o=r),{type:"link",raw:t[0],text:r,href:o,tokens:[{type:"text",raw:r,text:r}]}}}url(a){var r;let t;if(t=this.rules.inline.url.exec(a)){let o,i;if(t[2]==="@")o=t[0],i="mailto:"+o;else{let u;do u=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(u!==t[0]);o=t[0],t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:o,href:i,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(a){let t=this.rules.inline.text.exec(a);if(t){let r=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:r}}}},mn=class Ws{constructor(t){je(this,"tokens");je(this,"options");je(this,"state");je(this,"inlineQueue");je(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Xr,this.options.tokenizer=this.options.tokenizer||new co,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Nt,block:Zl.normal,inline:La.normal};this.options.pedantic?(r.block=Zl.pedantic,r.inline=La.pedantic):this.options.gfm&&(r.block=Zl.gfm,this.options.breaks?r.inline=La.breaks:r.inline=La.gfm),this.tokenizer.rules=r}static get rules(){return{block:Zl,inline:La}}static lex(t,r){return new Ws(r).lex(t)}static lexInline(t,r){return new Ws(r).inlineTokens(t)}lex(t){t=t.replace(Nt.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let o=this.inlineQueue[r];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,r=[],o=!1){var i,u,p;for(this.options.pedantic&&(t=t.replace(Nt.tabCharGlobal,"    ").replace(Nt.spaceLine,""));t;){let d;if((u=(i=this.options.extensions)==null?void 0:i.block)!=null&&u.some(g=>(d=g.call({lexer:this},t,r))?(t=t.substring(d.raw.length),r.push(d),!0):!1))continue;if(d=this.tokenizer.space(t)){t=t.substring(d.raw.length);let g=r.at(-1);d.raw.length===1&&g!==void 0?g.raw+=`
`:r.push(d);continue}if(d=this.tokenizer.code(t)){t=t.substring(d.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+d.raw,g.text+=`
`+d.text,this.inlineQueue.at(-1).src=g.text):r.push(d);continue}if(d=this.tokenizer.fences(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.heading(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.hr(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.blockquote(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.list(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.html(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.def(t)){t=t.substring(d.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+d.raw,g.text+=`
`+d.raw,this.inlineQueue.at(-1).src=g.text):this.tokens.links[d.tag]||(this.tokens.links[d.tag]={href:d.href,title:d.title},r.push(d));continue}if(d=this.tokenizer.table(t)){t=t.substring(d.raw.length),r.push(d);continue}if(d=this.tokenizer.lheading(t)){t=t.substring(d.raw.length),r.push(d);continue}let x=t;if((p=this.options.extensions)!=null&&p.startBlock){let g=1/0,y=t.slice(1),k;this.options.extensions.startBlock.forEach(L=>{k=L.call({lexer:this},y),typeof k=="number"&&k>=0&&(g=Math.min(g,k))}),g<1/0&&g>=0&&(x=t.substring(0,g+1))}if(this.state.top&&(d=this.tokenizer.paragraph(x))){let g=r.at(-1);o&&(g==null?void 0:g.type)==="paragraph"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+d.raw,g.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):r.push(d),o=x.length!==t.length,t=t.substring(d.raw.length);continue}if(d=this.tokenizer.text(t)){t=t.substring(d.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+d.raw,g.text+=`
`+d.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):r.push(d);continue}if(t){let g="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return this.state.top=!0,r}inline(t,r=[]){return this.inlineQueue.push({src:t,tokens:r}),r}inlineTokens(t,r=[]){var x,g,y,k,L;let o=t,i=null;if(this.tokens.links){let E=Object.keys(this.tokens.links);if(E.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)E.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,i.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let u;for(;(i=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)u=i[2]?i[2].length:0,o=o.slice(0,i.index+u)+"["+"a".repeat(i[0].length-u-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);o=((g=(x=this.options.hooks)==null?void 0:x.emStrongMask)==null?void 0:g.call({lexer:this},o))??o;let p=!1,d="";for(;t;){p||(d=""),p=!1;let E;if((k=(y=this.options.extensions)==null?void 0:y.inline)!=null&&k.some(C=>(E=C.call({lexer:this},t,r))?(t=t.substring(E.raw.length),r.push(E),!0):!1))continue;if(E=this.tokenizer.escape(t)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.tag(t)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.link(t)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(E.raw.length);let C=r.at(-1);E.type==="text"&&(C==null?void 0:C.type)==="text"?(C.raw+=E.raw,C.text+=E.text):r.push(E);continue}if(E=this.tokenizer.emStrong(t,o,d)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.codespan(t)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.br(t)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.del(t,o,d)){t=t.substring(E.raw.length),r.push(E);continue}if(E=this.tokenizer.autolink(t)){t=t.substring(E.raw.length),r.push(E);continue}if(!this.state.inLink&&(E=this.tokenizer.url(t))){t=t.substring(E.raw.length),r.push(E);continue}let K=t;if((L=this.options.extensions)!=null&&L.startInline){let C=1/0,F=t.slice(1),P;this.options.extensions.startInline.forEach(V=>{P=V.call({lexer:this},F),typeof P=="number"&&P>=0&&(C=Math.min(C,P))}),C<1/0&&C>=0&&(K=t.substring(0,C+1))}if(E=this.tokenizer.inlineText(K)){t=t.substring(E.raw.length),E.raw.slice(-1)!=="_"&&(d=E.raw.slice(-1)),p=!0;let C=r.at(-1);(C==null?void 0:C.type)==="text"?(C.raw+=E.raw,C.text+=E.text):r.push(E);continue}if(t){let C="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(C);break}else throw new Error(C)}}return r}},po=class{constructor(a){je(this,"options");je(this,"parser");this.options=a||Xr}space(a){return""}code({text:a,lang:t,escaped:r}){var u;let o=(u=(t||"").match(Nt.notSpaceStart))==null?void 0:u[0],i=a.replace(Nt.endingNewline,"")+`
`;return o?'<pre><code class="language-'+Sn(o)+'">'+(r?i:Sn(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:Sn(i,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}def(a){return""}heading({tokens:a,depth:t}){return`<h${t}>${this.parser.parseInline(a)}</h${t}>
`}hr(a){return`<hr>
`}list(a){let t=a.ordered,r=a.start,o="";for(let p=0;p<a.items.length;p++){let d=a.items[p];o+=this.listitem(d)}let i=t?"ol":"ul",u=t&&r!==1?' start="'+r+'"':"";return"<"+i+u+`>
`+o+"</"+i+`>
`}listitem(a){return`<li>${this.parser.parse(a.tokens)}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let t="",r="";for(let i=0;i<a.header.length;i++)r+=this.tablecell(a.header[i]);t+=this.tablerow({text:r});let o="";for(let i=0;i<a.rows.length;i++){let u=a.rows[i];r="";for(let p=0;p<u.length;p++)r+=this.tablecell(u[p]);o+=this.tablerow({text:r})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+o+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){let t=this.parser.parseInline(a.tokens),r=a.header?"th":"td";return(a.align?`<${r} align="${a.align}">`:`<${r}>`)+t+`</${r}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${Sn(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:t,tokens:r}){let o=this.parser.parseInline(r),i=ef(a);if(i===null)return o;a=i;let u='<a href="'+a+'"';return t&&(u+=' title="'+Sn(t)+'"'),u+=">"+o+"</a>",u}image({href:a,title:t,text:r,tokens:o}){o&&(r=this.parser.parseInline(o,this.parser.textRenderer));let i=ef(a);if(i===null)return Sn(r);a=i;let u=`<img src="${a}" alt="${Sn(r)}"`;return t&&(u+=` title="${Sn(t)}"`),u+=">",u}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:Sn(a.text)}},Tu=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}checkbox({raw:a}){return a}},xn=class Xs{constructor(t){je(this,"options");je(this,"renderer");je(this,"textRenderer");this.options=t||Xr,this.options.renderer=this.options.renderer||new po,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Tu}static parse(t,r){return new Xs(r).parse(t)}static parseInline(t,r){return new Xs(r).parseInline(t)}parse(t){var o,i;let r="";for(let u=0;u<t.length;u++){let p=t[u];if((i=(o=this.options.extensions)==null?void 0:o.renderers)!=null&&i[p.type]){let x=p,g=this.options.extensions.renderers[x.type].call({parser:this},x);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(x.type)){r+=g||"";continue}}let d=p;switch(d.type){case"space":{r+=this.renderer.space(d);break}case"hr":{r+=this.renderer.hr(d);break}case"heading":{r+=this.renderer.heading(d);break}case"code":{r+=this.renderer.code(d);break}case"table":{r+=this.renderer.table(d);break}case"blockquote":{r+=this.renderer.blockquote(d);break}case"list":{r+=this.renderer.list(d);break}case"checkbox":{r+=this.renderer.checkbox(d);break}case"html":{r+=this.renderer.html(d);break}case"def":{r+=this.renderer.def(d);break}case"paragraph":{r+=this.renderer.paragraph(d);break}case"text":{r+=this.renderer.text(d);break}default:{let x='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(x),"";throw new Error(x)}}}return r}parseInline(t,r=this.renderer){var i,u;let o="";for(let p=0;p<t.length;p++){let d=t[p];if((u=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&u[d.type]){let g=this.options.extensions.renderers[d.type].call({parser:this},d);if(g!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)){o+=g||"";continue}}let x=d;switch(x.type){case"escape":{o+=r.text(x);break}case"html":{o+=r.html(x);break}case"link":{o+=r.link(x);break}case"image":{o+=r.image(x);break}case"checkbox":{o+=r.checkbox(x);break}case"strong":{o+=r.strong(x);break}case"em":{o+=r.em(x);break}case"codespan":{o+=r.codespan(x);break}case"br":{o+=r.br(x);break}case"del":{o+=r.del(x);break}case"text":{o+=r.text(x);break}default:{let g='Token with "'+x.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return o}},ao,Ea=(ao=class{constructor(a){je(this,"options");je(this,"block");this.options=a||Xr}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}emStrongMask(a){return a}provideLexer(){return this.block?mn.lex:mn.lexInline}provideParser(){return this.block?xn.parse:xn.parseInline}},je(ao,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),je(ao,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),ao),V5=class{constructor(...a){je(this,"defaults",wu());je(this,"options",this.setOptions);je(this,"parse",this.parseMarkdown(!0));je(this,"parseInline",this.parseMarkdown(!1));je(this,"Parser",xn);je(this,"Renderer",po);je(this,"TextRenderer",Tu);je(this,"Lexer",mn);je(this,"Tokenizer",co);je(this,"Hooks",Ea);this.use(...a)}walkTokens(a,t){var o,i;let r=[];for(let u of a)switch(r=r.concat(t.call(this,u)),u.type){case"table":{let p=u;for(let d of p.header)r=r.concat(this.walkTokens(d.tokens,t));for(let d of p.rows)for(let x of d)r=r.concat(this.walkTokens(x.tokens,t));break}case"list":{let p=u;r=r.concat(this.walkTokens(p.items,t));break}default:{let p=u;(i=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&i[p.type]?this.defaults.extensions.childTokens[p.type].forEach(d=>{let x=p[d].flat(1/0);r=r.concat(this.walkTokens(x,t))}):p.tokens&&(r=r.concat(this.walkTokens(p.tokens,t)))}}return r}use(...a){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(r=>{let o={...r};if(o.async=this.defaults.async||o.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){let u=t.renderers[i.name];u?t.renderers[i.name]=function(...p){let d=i.renderer.apply(this,p);return d===!1&&(d=u.apply(this,p)),d}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=t[i.level];u?u.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),o.extensions=t),r.renderer){let i=this.defaults.renderer||new po(this.defaults);for(let u in r.renderer){if(!(u in i))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let p=u,d=r.renderer[p],x=i[p];i[p]=(...g)=>{let y=d.apply(i,g);return y===!1&&(y=x.apply(i,g)),y||""}}o.renderer=i}if(r.tokenizer){let i=this.defaults.tokenizer||new co(this.defaults);for(let u in r.tokenizer){if(!(u in i))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let p=u,d=r.tokenizer[p],x=i[p];i[p]=(...g)=>{let y=d.apply(i,g);return y===!1&&(y=x.apply(i,g)),y}}o.tokenizer=i}if(r.hooks){let i=this.defaults.hooks||new Ea;for(let u in r.hooks){if(!(u in i))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let p=u,d=r.hooks[p],x=i[p];Ea.passThroughHooks.has(u)?i[p]=g=>{if(this.defaults.async&&Ea.passThroughHooksRespectAsync.has(u))return(async()=>{let k=await d.call(i,g);return x.call(i,k)})();let y=d.call(i,g);return x.call(i,y)}:i[p]=(...g)=>{if(this.defaults.async)return(async()=>{let k=await d.apply(i,g);return k===!1&&(k=await x.apply(i,g)),k})();let y=d.apply(i,g);return y===!1&&(y=x.apply(i,g)),y}}o.hooks=i}if(r.walkTokens){let i=this.defaults.walkTokens,u=r.walkTokens;o.walkTokens=function(p){let d=[];return d.push(u.call(this,p)),i&&(d=d.concat(i.call(this,p))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,t){return mn.lex(a,t??this.defaults)}parser(a,t){return xn.parse(a,t??this.defaults)}parseMarkdown(a){return(t,r)=>{let o={...r},i={...this.defaults,...o},u=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&o.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(i.hooks&&(i.hooks.options=i,i.hooks.block=a),i.async)return(async()=>{let p=i.hooks?await i.hooks.preprocess(t):t,d=await(i.hooks?await i.hooks.provideLexer():a?mn.lex:mn.lexInline)(p,i),x=i.hooks?await i.hooks.processAllTokens(d):d;i.walkTokens&&await Promise.all(this.walkTokens(x,i.walkTokens));let g=await(i.hooks?await i.hooks.provideParser():a?xn.parse:xn.parseInline)(x,i);return i.hooks?await i.hooks.postprocess(g):g})().catch(u);try{i.hooks&&(t=i.hooks.preprocess(t));let p=(i.hooks?i.hooks.provideLexer():a?mn.lex:mn.lexInline)(t,i);i.hooks&&(p=i.hooks.processAllTokens(p)),i.walkTokens&&this.walkTokens(p,i.walkTokens);let d=(i.hooks?i.hooks.provideParser():a?xn.parse:xn.parseInline)(p,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(p){return u(p)}}}onError(a,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,a){let o="<p>An error occurred:</p><pre>"+Sn(r.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(r);throw r}}},Gr=new V5;function Pe(a,t){return Gr.parse(a,t)}Pe.options=Pe.setOptions=function(a){return Gr.setOptions(a),Pe.defaults=Gr.defaults,o2(Pe.defaults),Pe};Pe.getDefaults=wu;Pe.defaults=Xr;Pe.use=function(...a){return Gr.use(...a),Pe.defaults=Gr.defaults,o2(Pe.defaults),Pe};Pe.walkTokens=function(a,t){return Gr.walkTokens(a,t)};Pe.parseInline=Gr.parseInline;Pe.Parser=xn;Pe.parser=xn.parse;Pe.Renderer=po;Pe.TextRenderer=Tu;Pe.Lexer=mn;Pe.lexer=mn.lex;Pe.Tokenizer=co;Pe.Hooks=Ea;Pe.parse=Pe;Pe.options;Pe.setOptions;Pe.use;Pe.walkTokens;Pe.parseInline;xn.parse;mn.lex;class U extends Error{constructor(t,r){var o="KaTeX parse error: "+t,i,u,p=r&&r.loc;if(p&&p.start<=p.end){var d=p.lexer.input;i=p.start,u=p.end,i===d.length?o+=" at end of input: ":o+=" at position "+(i+1)+": ";var x=d.slice(i,u).replace(/[^]/g,"$&̲"),g;i>15?g="…"+d.slice(i-15,i):g=d.slice(0,i);var y;u+15<d.length?y=d.slice(u,u+15)+"…":y=d.slice(u),o+=g+x+y}super(o),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,U.prototype),this.position=i,i!=null&&u!=null&&(this.length=u-i),this.rawMessage=t}}var $5=/([A-Z])/g,U5=a=>a.replace($5,"-$1").toLowerCase(),G5={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},W5=/[&><"']/g,Tt=a=>String(a).replace(W5,t=>G5[t]),oo=a=>a.type==="ordgroup"||a.type==="color"?a.body.length===1?oo(a.body[0]):a:a.type==="font"?oo(a.body):a,X5=new Set(["mathord","textord","atom"]),$n=a=>X5.has(oo(a).type),Z5=a=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(a);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},Zs={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:a=>"#"+a},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(a,t)=>(t.push(a),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:a=>Math.max(0,a),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:a=>Math.max(0,a),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:a=>Math.max(0,a),cli:"-e, --max-expand <n>",cliProcessor:a=>a==="Infinity"?1/0:parseInt(a)},globalGroup:{type:"boolean",cli:!1}};function Q5(a){if(typeof a!="string")return a.enum[0];switch(a){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function Y5(a){if(Object.prototype.hasOwnProperty.call(a,"default")&&a.default!==void 0)return a.default;var t=Array.isArray(a.type)?a.type[0]:a.type;return Q5(t)}function J5(a,t,r,o){var i=Object.prototype.hasOwnProperty.call(r,t)?r[t]:void 0,u=Object.prototype.hasOwnProperty.call(o,"processor")?o.processor:void 0;a[t]=i!==void 0?u?u(i):i:Y5(o)}class qu{constructor(t){t===void 0&&(t={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r of Object.keys(Zs)){var o=Zs[r];o&&J5(this,r,t,o)}}reportNonstrict(t,r,o){var i=this.strict;if(typeof i=="function"&&(i=i(t,r,o)),!(!i||i==="ignore")){if(i===!0||i==="error")throw new U("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),o);i==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,o){var i=this.strict;if(typeof i=="function")try{i=i(t,r,o)}catch{i="error"}return!i||i==="ignore"?!1:i===!0||i==="error"?!0:i==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+i+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if("url"in t&&t.url&&!t.protocol){var r=Z5(t.url);if(r==null)return!1;t.protocol=r}var o=typeof this.trust=="function"?this.trust(t):this.trust;return!!o}}class mr{constructor(t,r,o){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=o}sup(){return _n[e3[this.id]]}sub(){return _n[t3[this.id]]}fracNum(){return _n[n3[this.id]]}fracDen(){return _n[r3[this.id]]}cramp(){return _n[a3[this.id]]}text(){return _n[l3[this.id]]}isTight(){return this.size>=2}}var Au=0,fo=1,_0=2,On=3,Fa=4,ln=5,L0=6,Rt=7,_n=[new mr(Au,0,!1),new mr(fo,0,!0),new mr(_0,1,!1),new mr(On,1,!0),new mr(Fa,2,!1),new mr(ln,2,!0),new mr(L0,3,!1),new mr(Rt,3,!0)],e3=[Fa,ln,Fa,ln,L0,Rt,L0,Rt],t3=[ln,ln,ln,ln,Rt,Rt,Rt,Rt],n3=[_0,On,Fa,ln,L0,Rt,L0,Rt],r3=[On,On,ln,ln,Rt,Rt,Rt,Rt],a3=[fo,fo,On,On,ln,ln,Rt,Rt],l3=[Au,fo,_0,On,_0,On,_0,On],Se={DISPLAY:_n[Au],TEXT:_n[_0],SCRIPT:_n[Fa],SCRIPTSCRIPT:_n[L0]},Qs=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function o3(a){for(var t=0;t<Qs.length;t++)for(var r=Qs[t],o=0;o<r.blocks.length;o++){var i=r.blocks[o];if(a>=i[0]&&a<=i[1])return r.name}return null}var io=[];Qs.forEach(a=>a.blocks.forEach(t=>io.push(...t)));function v2(a){for(var t=0;t<io.length;t+=2)if(a>=io[t]&&a<=io[t+1])return!0;return!1}var gt=a=>a+" "+a,S0=80,i3=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},s3=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},u3=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},c3=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},p3=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},f3=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},d3=function(t,r,o){var i=o-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+i+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},h3=function(t,r,o){r=1e3*r;var i="";switch(t){case"sqrtMain":i=i3(r,S0);break;case"sqrtSize1":i=s3(r,S0);break;case"sqrtSize2":i=u3(r,S0);break;case"sqrtSize3":i=c3(r,S0);break;case"sqrtSize4":i=p3(r,S0);break;case"sqrtTall":i=d3(r,S0,o)}return i},m3=function(t,r){switch(t){case"⎜":return gt("M291 0 H417 V"+r+" H291z");case"∣":return gt("M145 0 H188 V"+r+" H145z");case"∥":return gt("M145 0 H188 V"+r+" H145z")+gt("M367 0 H410 V"+r+" H367z");case"⎟":return gt("M457 0 H583 V"+r+" H457z");case"⎢":return gt("M319 0 H403 V"+r+" H319z");case"⎥":return gt("M263 0 H347 V"+r+" H263z");case"⎪":return gt("M384 0 H504 V"+r+" H384z");case"⏐":return gt("M312 0 H355 V"+r+" H312z");case"‖":return gt("M257 0 H300 V"+r+" H257z")+gt("M478 0 H521 V"+r+" H478z");default:return""}},rf={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:gt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:gt("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:gt("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:gt("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:gt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:gt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:gt("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:gt("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},x3=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 v84 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function g3(a){return"toText"in a}class q0{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){return this.children.map(t=>{if(g3(t))return t.toText();throw new Error("Expected MathDomNode with toText, got "+t.constructor.name)}).join("")}}var Ys={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},v3={ex:!0,em:!0,mu:!0},b2=function(t){return typeof t!="string"&&(t=t.unit),t in Ys||t in v3||t==="ex"},nt=function(t,r){var o;if(t.unit in Ys)o=Ys[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")o=r.fontMetrics().cssEmPerMu;else{var i;if(r.style.isTight()?i=r.havingStyle(r.style.text()):i=r,t.unit==="ex")o=i.fontMetrics().xHeight;else if(t.unit==="em")o=i.fontMetrics().quad;else throw new U("Invalid unit: '"+t.unit+"'");i!==r&&(o*=i.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*o,r.maxSize)},X=function(t){return+t.toFixed(4)+"em"},kr=function(t){return t.filter(r=>r).join(" ")},Fu=function(t){var r="";for(var o of Object.keys(t)){var i=t[o];i!==void 0&&(r+=U5(o)+":"+i+";")}return r},y2=function(t,r,o){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=o||{},r){r.style.isTight()&&this.classes.push("mtight");var i=r.getColor();i&&(this.style.color=i)}},w2=function(t){var r=document.createElement(t);r.className=kr(this.classes),Object.assign(r.style,this.style);for(var o of Object.keys(this.attributes))r.setAttribute(o,this.attributes[o]);for(var i=0;i<this.children.length;i++)r.appendChild(this.children[i].toNode());return r},b3=/[\s"'>/=\x00-\x1f]/,k2=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Tt(kr(this.classes))+'"');var o=Fu(this.style);o&&(r+=' style="'+Tt(o)+'"');for(var i of Object.keys(this.attributes)){if(b3.test(i))throw new U("Invalid attribute name '"+i+"'");r+=" "+i+'="'+Tt(this.attributes[i])+'"'}r+=">";for(var u=0;u<this.children.length;u++)r+=this.children[u].toMarkup();return r+="</"+t+">",r};class A0{constructor(t,r,o,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,y2.call(this,t,o,i),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return w2.call(this,"span")}toMarkup(){return k2.call(this,"span")}}class wo{constructor(t,r,o,i){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,y2.call(this,r,i),this.children=o||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return w2.call(this,"a")}toMarkup(){return k2.call(this,"a")}}class y3{constructor(t,r,o){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=o}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");return t.src=this.src,t.alt=this.alt,t.className="mord",Object.assign(t.style,this.style),t}toMarkup(){var t='<img src="'+Tt(this.src)+'"'+(' alt="'+Tt(this.alt)+'"'),r=Fu(this.style);return r&&(t+=' style="'+Tt(r)+'"'),t+="'/>",t}}var w3={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Xt{constructor(t,r,o,i,u,p,d,x){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=o||0,this.italic=i||0,this.skew=u||0,this.width=p||0,this.classes=d||[],this.style=x||{},this.maxFontSize=0;var g=o3(this.text.charCodeAt(0));g&&this.classes.push(g+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=w3[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=X(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=kr(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Tt(kr(this.classes)),r+='"');var o="";this.italic>0&&(o+="margin-right:"+X(this.italic)+";"),o+=Fu(this.style),o&&(t=!0,r+=' style="'+Tt(o)+'"');var i=Tt(this.text);return t?(r+=">",r+=i,r+="</span>",r):i}}class jn{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var o of Object.keys(this.attributes))r.setAttribute(o,this.attributes[o]);for(var i=0;i<this.children.length;i++)r.appendChild(this.children[i].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Tt(this.attributes[r])+'"';t+=">";for(var o=0;o<this.children.length;o++)t+=this.children[o].toMarkup();return t+="</svg>",t}}class Sr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",rf[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Tt(this.alternate)+'"/>':'<path d="'+Tt(rf[this.pathName])+'"/>'}}class Js{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var o of Object.keys(this.attributes))r.setAttribute(o,this.attributes[o]);return r}toMarkup(){var t="<line";for(var r of Object.keys(this.attributes))t+=" "+r+'="'+Tt(this.attributes[r])+'"';return t+="/>",t}}function k3(a){if(a instanceof Xt)return a;throw new Error("Expected symbolNode but got "+String(a)+".")}function S3(a){if(a instanceof A0)return a;throw new Error("Expected span<HtmlDomNode> but got "+String(a)+".")}var _3=a=>a instanceof A0||a instanceof wo||a instanceof q0,Ln={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},zs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},af={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function L3(a,t){Ln[a]=t}function Cu(a,t,r){if(!Ln[t])throw new Error("Font metrics not found for font: "+t+".");var o=a.charCodeAt(0),i=Ln[t][o];if(!i&&a[0]in af&&(o=af[a[0]].charCodeAt(0),i=Ln[t][o]),!i&&r==="text"&&v2(o)&&(i=Ln[t][77]),i)return{depth:i[0],height:i[1],italic:i[2],skew:i[3],width:i[4]}}var Es={};function z3(a){var t;if(a>=5?t=0:a>=3?t=1:t=2,!Es[t]){var r=Es[t]={cssEmPerMu:zs.quad[t]/18};for(var o of Object.keys(zs))r[o]=zs[o][t]}return Es[t]}var Xe={math:{},text:{}};function f(a,t,r,o,i,u){Xe[a][i]={font:t,group:r,replace:o},u&&o&&(Xe[a][o]=Xe[a][i])}var m="math",B="text",v="main",_="ams",Ze="accent-token",ne="bin",Kt="close",F0="inner",he="mathord",ht="op-token",Zt="open",Ia="punct",z="rel",Un="spacing",T="textord";f(m,v,z,"≡","\\equiv",!0);f(m,v,z,"≺","\\prec",!0);f(m,v,z,"≻","\\succ",!0);f(m,v,z,"∼","\\sim",!0);f(m,v,z,"⊥","\\perp");f(m,v,z,"⪯","\\preceq",!0);f(m,v,z,"⪰","\\succeq",!0);f(m,v,z,"≃","\\simeq",!0);f(m,v,z,"∣","\\mid",!0);f(m,v,z,"≪","\\ll",!0);f(m,v,z,"≫","\\gg",!0);f(m,v,z,"≍","\\asymp",!0);f(m,v,z,"∥","\\parallel");f(m,v,z,"⋈","\\bowtie",!0);f(m,v,z,"⌣","\\smile",!0);f(m,v,z,"⊑","\\sqsubseteq",!0);f(m,v,z,"⊒","\\sqsupseteq",!0);f(m,v,z,"≐","\\doteq",!0);f(m,v,z,"⌢","\\frown",!0);f(m,v,z,"∋","\\ni",!0);f(m,v,z,"∝","\\propto",!0);f(m,v,z,"⊢","\\vdash",!0);f(m,v,z,"⊣","\\dashv",!0);f(m,v,z,"∋","\\owns");f(m,v,Ia,".","\\ldotp");f(m,v,Ia,"⋅","\\cdotp");f(m,v,Ia,"⋅","·");f(B,v,T,"⋅","·");f(m,v,T,"#","\\#");f(B,v,T,"#","\\#");f(m,v,T,"&","\\&");f(B,v,T,"&","\\&");f(m,v,T,"ℵ","\\aleph",!0);f(m,v,T,"∀","\\forall",!0);f(m,v,T,"ℏ","\\hbar",!0);f(m,v,T,"∃","\\exists",!0);f(m,v,T,"∇","\\nabla",!0);f(m,v,T,"♭","\\flat",!0);f(m,v,T,"ℓ","\\ell",!0);f(m,v,T,"♮","\\natural",!0);f(m,v,T,"♣","\\clubsuit",!0);f(m,v,T,"℘","\\wp",!0);f(m,v,T,"♯","\\sharp",!0);f(m,v,T,"♢","\\diamondsuit",!0);f(m,v,T,"ℜ","\\Re",!0);f(m,v,T,"♡","\\heartsuit",!0);f(m,v,T,"ℑ","\\Im",!0);f(m,v,T,"♠","\\spadesuit",!0);f(m,v,T,"§","\\S",!0);f(B,v,T,"§","\\S");f(m,v,T,"¶","\\P",!0);f(B,v,T,"¶","\\P");f(m,v,T,"†","\\dag");f(B,v,T,"†","\\dag");f(B,v,T,"†","\\textdagger");f(m,v,T,"‡","\\ddag");f(B,v,T,"‡","\\ddag");f(B,v,T,"‡","\\textdaggerdbl");f(m,v,Kt,"⎱","\\rmoustache",!0);f(m,v,Zt,"⎰","\\lmoustache",!0);f(m,v,Kt,"⟯","\\rgroup",!0);f(m,v,Zt,"⟮","\\lgroup",!0);f(m,v,ne,"∓","\\mp",!0);f(m,v,ne,"⊖","\\ominus",!0);f(m,v,ne,"⊎","\\uplus",!0);f(m,v,ne,"⊓","\\sqcap",!0);f(m,v,ne,"∗","\\ast");f(m,v,ne,"⊔","\\sqcup",!0);f(m,v,ne,"◯","\\bigcirc",!0);f(m,v,ne,"∙","\\bullet",!0);f(m,v,ne,"‡","\\ddagger");f(m,v,ne,"≀","\\wr",!0);f(m,v,ne,"⨿","\\amalg");f(m,v,ne,"&","\\And");f(m,v,z,"⟵","\\longleftarrow",!0);f(m,v,z,"⇐","\\Leftarrow",!0);f(m,v,z,"⟸","\\Longleftarrow",!0);f(m,v,z,"⟶","\\longrightarrow",!0);f(m,v,z,"⇒","\\Rightarrow",!0);f(m,v,z,"⟹","\\Longrightarrow",!0);f(m,v,z,"↔","\\leftrightarrow",!0);f(m,v,z,"⟷","\\longleftrightarrow",!0);f(m,v,z,"⇔","\\Leftrightarrow",!0);f(m,v,z,"⟺","\\Longleftrightarrow",!0);f(m,v,z,"↦","\\mapsto",!0);f(m,v,z,"⟼","\\longmapsto",!0);f(m,v,z,"↗","\\nearrow",!0);f(m,v,z,"↩","\\hookleftarrow",!0);f(m,v,z,"↪","\\hookrightarrow",!0);f(m,v,z,"↘","\\searrow",!0);f(m,v,z,"↼","\\leftharpoonup",!0);f(m,v,z,"⇀","\\rightharpoonup",!0);f(m,v,z,"↙","\\swarrow",!0);f(m,v,z,"↽","\\leftharpoondown",!0);f(m,v,z,"⇁","\\rightharpoondown",!0);f(m,v,z,"↖","\\nwarrow",!0);f(m,v,z,"⇌","\\rightleftharpoons",!0);f(m,_,z,"≮","\\nless",!0);f(m,_,z,"","\\@nleqslant");f(m,_,z,"","\\@nleqq");f(m,_,z,"⪇","\\lneq",!0);f(m,_,z,"≨","\\lneqq",!0);f(m,_,z,"","\\@lvertneqq");f(m,_,z,"⋦","\\lnsim",!0);f(m,_,z,"⪉","\\lnapprox",!0);f(m,_,z,"⊀","\\nprec",!0);f(m,_,z,"⋠","\\npreceq",!0);f(m,_,z,"⋨","\\precnsim",!0);f(m,_,z,"⪹","\\precnapprox",!0);f(m,_,z,"≁","\\nsim",!0);f(m,_,z,"","\\@nshortmid");f(m,_,z,"∤","\\nmid",!0);f(m,_,z,"⊬","\\nvdash",!0);f(m,_,z,"⊭","\\nvDash",!0);f(m,_,z,"⋪","\\ntriangleleft");f(m,_,z,"⋬","\\ntrianglelefteq",!0);f(m,_,z,"⊊","\\subsetneq",!0);f(m,_,z,"","\\@varsubsetneq");f(m,_,z,"⫋","\\subsetneqq",!0);f(m,_,z,"","\\@varsubsetneqq");f(m,_,z,"≯","\\ngtr",!0);f(m,_,z,"","\\@ngeqslant");f(m,_,z,"","\\@ngeqq");f(m,_,z,"⪈","\\gneq",!0);f(m,_,z,"≩","\\gneqq",!0);f(m,_,z,"","\\@gvertneqq");f(m,_,z,"⋧","\\gnsim",!0);f(m,_,z,"⪊","\\gnapprox",!0);f(m,_,z,"⊁","\\nsucc",!0);f(m,_,z,"⋡","\\nsucceq",!0);f(m,_,z,"⋩","\\succnsim",!0);f(m,_,z,"⪺","\\succnapprox",!0);f(m,_,z,"≆","\\ncong",!0);f(m,_,z,"","\\@nshortparallel");f(m,_,z,"∦","\\nparallel",!0);f(m,_,z,"⊯","\\nVDash",!0);f(m,_,z,"⋫","\\ntriangleright");f(m,_,z,"⋭","\\ntrianglerighteq",!0);f(m,_,z,"","\\@nsupseteqq");f(m,_,z,"⊋","\\supsetneq",!0);f(m,_,z,"","\\@varsupsetneq");f(m,_,z,"⫌","\\supsetneqq",!0);f(m,_,z,"","\\@varsupsetneqq");f(m,_,z,"⊮","\\nVdash",!0);f(m,_,z,"⪵","\\precneqq",!0);f(m,_,z,"⪶","\\succneqq",!0);f(m,_,z,"","\\@nsubseteqq");f(m,_,ne,"⊴","\\unlhd");f(m,_,ne,"⊵","\\unrhd");f(m,_,z,"↚","\\nleftarrow",!0);f(m,_,z,"↛","\\nrightarrow",!0);f(m,_,z,"⇍","\\nLeftarrow",!0);f(m,_,z,"⇏","\\nRightarrow",!0);f(m,_,z,"↮","\\nleftrightarrow",!0);f(m,_,z,"⇎","\\nLeftrightarrow",!0);f(m,_,z,"△","\\vartriangle");f(m,_,T,"ℏ","\\hslash");f(m,_,T,"▽","\\triangledown");f(m,_,T,"◊","\\lozenge");f(m,_,T,"Ⓢ","\\circledS");f(m,_,T,"®","\\circledR");f(B,_,T,"®","\\circledR");f(m,_,T,"∡","\\measuredangle",!0);f(m,_,T,"∄","\\nexists");f(m,_,T,"℧","\\mho");f(m,_,T,"Ⅎ","\\Finv",!0);f(m,_,T,"⅁","\\Game",!0);f(m,_,T,"‵","\\backprime");f(m,_,T,"▲","\\blacktriangle");f(m,_,T,"▼","\\blacktriangledown");f(m,_,T,"■","\\blacksquare");f(m,_,T,"⧫","\\blacklozenge");f(m,_,T,"★","\\bigstar");f(m,_,T,"∢","\\sphericalangle",!0);f(m,_,T,"∁","\\complement",!0);f(m,_,T,"ð","\\eth",!0);f(B,v,T,"ð","ð");f(m,_,T,"╱","\\diagup");f(m,_,T,"╲","\\diagdown");f(m,_,T,"□","\\square");f(m,_,T,"□","\\Box");f(m,_,T,"◊","\\Diamond");f(m,_,T,"¥","\\yen",!0);f(B,_,T,"¥","\\yen",!0);f(m,_,T,"✓","\\checkmark",!0);f(B,_,T,"✓","\\checkmark");f(m,_,T,"ℶ","\\beth",!0);f(m,_,T,"ℸ","\\daleth",!0);f(m,_,T,"ℷ","\\gimel",!0);f(m,_,T,"ϝ","\\digamma",!0);f(m,_,T,"ϰ","\\varkappa");f(m,_,Zt,"┌","\\@ulcorner",!0);f(m,_,Kt,"┐","\\@urcorner",!0);f(m,_,Zt,"└","\\@llcorner",!0);f(m,_,Kt,"┘","\\@lrcorner",!0);f(m,_,z,"≦","\\leqq",!0);f(m,_,z,"⩽","\\leqslant",!0);f(m,_,z,"⪕","\\eqslantless",!0);f(m,_,z,"≲","\\lesssim",!0);f(m,_,z,"⪅","\\lessapprox",!0);f(m,_,z,"≊","\\approxeq",!0);f(m,_,ne,"⋖","\\lessdot");f(m,_,z,"⋘","\\lll",!0);f(m,_,z,"≶","\\lessgtr",!0);f(m,_,z,"⋚","\\lesseqgtr",!0);f(m,_,z,"⪋","\\lesseqqgtr",!0);f(m,_,z,"≑","\\doteqdot");f(m,_,z,"≓","\\risingdotseq",!0);f(m,_,z,"≒","\\fallingdotseq",!0);f(m,_,z,"∽","\\backsim",!0);f(m,_,z,"⋍","\\backsimeq",!0);f(m,_,z,"⫅","\\subseteqq",!0);f(m,_,z,"⋐","\\Subset",!0);f(m,_,z,"⊏","\\sqsubset",!0);f(m,_,z,"≼","\\preccurlyeq",!0);f(m,_,z,"⋞","\\curlyeqprec",!0);f(m,_,z,"≾","\\precsim",!0);f(m,_,z,"⪷","\\precapprox",!0);f(m,_,z,"⊲","\\vartriangleleft");f(m,_,z,"⊴","\\trianglelefteq");f(m,_,z,"⊨","\\vDash",!0);f(m,_,z,"⊪","\\Vvdash",!0);f(m,_,z,"⌣","\\smallsmile");f(m,_,z,"⌢","\\smallfrown");f(m,_,z,"≏","\\bumpeq",!0);f(m,_,z,"≎","\\Bumpeq",!0);f(m,_,z,"≧","\\geqq",!0);f(m,_,z,"⩾","\\geqslant",!0);f(m,_,z,"⪖","\\eqslantgtr",!0);f(m,_,z,"≳","\\gtrsim",!0);f(m,_,z,"⪆","\\gtrapprox",!0);f(m,_,ne,"⋗","\\gtrdot");f(m,_,z,"⋙","\\ggg",!0);f(m,_,z,"≷","\\gtrless",!0);f(m,_,z,"⋛","\\gtreqless",!0);f(m,_,z,"⪌","\\gtreqqless",!0);f(m,_,z,"≖","\\eqcirc",!0);f(m,_,z,"≗","\\circeq",!0);f(m,_,z,"≜","\\triangleq",!0);f(m,_,z,"∼","\\thicksim");f(m,_,z,"≈","\\thickapprox");f(m,_,z,"⫆","\\supseteqq",!0);f(m,_,z,"⋑","\\Supset",!0);f(m,_,z,"⊐","\\sqsupset",!0);f(m,_,z,"≽","\\succcurlyeq",!0);f(m,_,z,"⋟","\\curlyeqsucc",!0);f(m,_,z,"≿","\\succsim",!0);f(m,_,z,"⪸","\\succapprox",!0);f(m,_,z,"⊳","\\vartriangleright");f(m,_,z,"⊵","\\trianglerighteq");f(m,_,z,"⊩","\\Vdash",!0);f(m,_,z,"∣","\\shortmid");f(m,_,z,"∥","\\shortparallel");f(m,_,z,"≬","\\between",!0);f(m,_,z,"⋔","\\pitchfork",!0);f(m,_,z,"∝","\\varpropto");f(m,_,z,"◀","\\blacktriangleleft");f(m,_,z,"∴","\\therefore",!0);f(m,_,z,"∍","\\backepsilon");f(m,_,z,"▶","\\blacktriangleright");f(m,_,z,"∵","\\because",!0);f(m,_,z,"⋘","\\llless");f(m,_,z,"⋙","\\gggtr");f(m,_,ne,"⊲","\\lhd");f(m,_,ne,"⊳","\\rhd");f(m,_,z,"≂","\\eqsim",!0);f(m,v,z,"⋈","\\Join");f(m,_,z,"≑","\\Doteq",!0);f(m,_,ne,"∔","\\dotplus",!0);f(m,_,ne,"∖","\\smallsetminus");f(m,_,ne,"⋒","\\Cap",!0);f(m,_,ne,"⋓","\\Cup",!0);f(m,_,ne,"⩞","\\doublebarwedge",!0);f(m,_,ne,"⊟","\\boxminus",!0);f(m,_,ne,"⊞","\\boxplus",!0);f(m,_,ne,"⋇","\\divideontimes",!0);f(m,_,ne,"⋉","\\ltimes",!0);f(m,_,ne,"⋊","\\rtimes",!0);f(m,_,ne,"⋋","\\leftthreetimes",!0);f(m,_,ne,"⋌","\\rightthreetimes",!0);f(m,_,ne,"⋏","\\curlywedge",!0);f(m,_,ne,"⋎","\\curlyvee",!0);f(m,_,ne,"⊝","\\circleddash",!0);f(m,_,ne,"⊛","\\circledast",!0);f(m,_,ne,"⋅","\\centerdot");f(m,_,ne,"⊺","\\intercal",!0);f(m,_,ne,"⋒","\\doublecap");f(m,_,ne,"⋓","\\doublecup");f(m,_,ne,"⊠","\\boxtimes",!0);f(m,_,z,"⇢","\\dashrightarrow",!0);f(m,_,z,"⇠","\\dashleftarrow",!0);f(m,_,z,"⇇","\\leftleftarrows",!0);f(m,_,z,"⇆","\\leftrightarrows",!0);f(m,_,z,"⇚","\\Lleftarrow",!0);f(m,_,z,"↞","\\twoheadleftarrow",!0);f(m,_,z,"↢","\\leftarrowtail",!0);f(m,_,z,"↫","\\looparrowleft",!0);f(m,_,z,"⇋","\\leftrightharpoons",!0);f(m,_,z,"↶","\\curvearrowleft",!0);f(m,_,z,"↺","\\circlearrowleft",!0);f(m,_,z,"↰","\\Lsh",!0);f(m,_,z,"⇈","\\upuparrows",!0);f(m,_,z,"↿","\\upharpoonleft",!0);f(m,_,z,"⇃","\\downharpoonleft",!0);f(m,v,z,"⊶","\\origof",!0);f(m,v,z,"⊷","\\imageof",!0);f(m,_,z,"⊸","\\multimap",!0);f(m,_,z,"↭","\\leftrightsquigarrow",!0);f(m,_,z,"⇉","\\rightrightarrows",!0);f(m,_,z,"⇄","\\rightleftarrows",!0);f(m,_,z,"↠","\\twoheadrightarrow",!0);f(m,_,z,"↣","\\rightarrowtail",!0);f(m,_,z,"↬","\\looparrowright",!0);f(m,_,z,"↷","\\curvearrowright",!0);f(m,_,z,"↻","\\circlearrowright",!0);f(m,_,z,"↱","\\Rsh",!0);f(m,_,z,"⇊","\\downdownarrows",!0);f(m,_,z,"↾","\\upharpoonright",!0);f(m,_,z,"⇂","\\downharpoonright",!0);f(m,_,z,"⇝","\\rightsquigarrow",!0);f(m,_,z,"⇝","\\leadsto");f(m,_,z,"⇛","\\Rrightarrow",!0);f(m,_,z,"↾","\\restriction");f(m,v,T,"‘","`");f(m,v,T,"$","\\$");f(B,v,T,"$","\\$");f(B,v,T,"$","\\textdollar");f(m,v,T,"%","\\%");f(B,v,T,"%","\\%");f(m,v,T,"_","\\_");f(B,v,T,"_","\\_");f(B,v,T,"_","\\textunderscore");f(m,v,T,"∠","\\angle",!0);f(m,v,T,"∞","\\infty",!0);f(m,v,T,"′","\\prime");f(m,v,T,"△","\\triangle");f(m,v,T,"Γ","\\Gamma",!0);f(m,v,T,"Δ","\\Delta",!0);f(m,v,T,"Θ","\\Theta",!0);f(m,v,T,"Λ","\\Lambda",!0);f(m,v,T,"Ξ","\\Xi",!0);f(m,v,T,"Π","\\Pi",!0);f(m,v,T,"Σ","\\Sigma",!0);f(m,v,T,"Υ","\\Upsilon",!0);f(m,v,T,"Φ","\\Phi",!0);f(m,v,T,"Ψ","\\Psi",!0);f(m,v,T,"Ω","\\Omega",!0);f(m,v,T,"A","Α");f(m,v,T,"B","Β");f(m,v,T,"E","Ε");f(m,v,T,"Z","Ζ");f(m,v,T,"H","Η");f(m,v,T,"I","Ι");f(m,v,T,"K","Κ");f(m,v,T,"M","Μ");f(m,v,T,"N","Ν");f(m,v,T,"O","Ο");f(m,v,T,"P","Ρ");f(m,v,T,"T","Τ");f(m,v,T,"X","Χ");f(m,v,T,"¬","\\neg",!0);f(m,v,T,"¬","\\lnot");f(m,v,T,"⊤","\\top");f(m,v,T,"⊥","\\bot");f(m,v,T,"∅","\\emptyset");f(m,_,T,"∅","\\varnothing");f(m,v,he,"α","\\alpha",!0);f(m,v,he,"β","\\beta",!0);f(m,v,he,"γ","\\gamma",!0);f(m,v,he,"δ","\\delta",!0);f(m,v,he,"ϵ","\\epsilon",!0);f(m,v,he,"ζ","\\zeta",!0);f(m,v,he,"η","\\eta",!0);f(m,v,he,"θ","\\theta",!0);f(m,v,he,"ι","\\iota",!0);f(m,v,he,"κ","\\kappa",!0);f(m,v,he,"λ","\\lambda",!0);f(m,v,he,"μ","\\mu",!0);f(m,v,he,"ν","\\nu",!0);f(m,v,he,"ξ","\\xi",!0);f(m,v,he,"ο","\\omicron",!0);f(m,v,he,"π","\\pi",!0);f(m,v,he,"ρ","\\rho",!0);f(m,v,he,"σ","\\sigma",!0);f(m,v,he,"τ","\\tau",!0);f(m,v,he,"υ","\\upsilon",!0);f(m,v,he,"ϕ","\\phi",!0);f(m,v,he,"χ","\\chi",!0);f(m,v,he,"ψ","\\psi",!0);f(m,v,he,"ω","\\omega",!0);f(m,v,he,"ε","\\varepsilon",!0);f(m,v,he,"ϑ","\\vartheta",!0);f(m,v,he,"ϖ","\\varpi",!0);f(m,v,he,"ϱ","\\varrho",!0);f(m,v,he,"ς","\\varsigma",!0);f(m,v,he,"φ","\\varphi",!0);f(m,v,ne,"∗","*",!0);f(m,v,ne,"+","+");f(m,v,ne,"−","-",!0);f(m,v,ne,"⋅","\\cdot",!0);f(m,v,ne,"∘","\\circ",!0);f(m,v,ne,"÷","\\div",!0);f(m,v,ne,"±","\\pm",!0);f(m,v,ne,"×","\\times",!0);f(m,v,ne,"∩","\\cap",!0);f(m,v,ne,"∪","\\cup",!0);f(m,v,ne,"∖","\\setminus",!0);f(m,v,ne,"∧","\\land");f(m,v,ne,"∨","\\lor");f(m,v,ne,"∧","\\wedge",!0);f(m,v,ne,"∨","\\vee",!0);f(m,v,T,"√","\\surd");f(m,v,Zt,"⟨","\\langle",!0);f(m,v,Zt,"∣","\\lvert");f(m,v,Zt,"∥","\\lVert");f(m,v,Kt,"?","?");f(m,v,Kt,"!","!");f(m,v,Kt,"⟩","\\rangle",!0);f(m,v,Kt,"∣","\\rvert");f(m,v,Kt,"∥","\\rVert");f(m,v,z,"=","=");f(m,v,z,":",":");f(m,v,z,"≈","\\approx",!0);f(m,v,z,"≅","\\cong",!0);f(m,v,z,"≥","\\ge");f(m,v,z,"≥","\\geq",!0);f(m,v,z,"←","\\gets");f(m,v,z,">","\\gt",!0);f(m,v,z,"∈","\\in",!0);f(m,v,z,"","\\@not");f(m,v,z,"⊂","\\subset",!0);f(m,v,z,"⊃","\\supset",!0);f(m,v,z,"⊆","\\subseteq",!0);f(m,v,z,"⊇","\\supseteq",!0);f(m,_,z,"⊈","\\nsubseteq",!0);f(m,_,z,"⊉","\\nsupseteq",!0);f(m,v,z,"⊨","\\models");f(m,v,z,"←","\\leftarrow",!0);f(m,v,z,"≤","\\le");f(m,v,z,"≤","\\leq",!0);f(m,v,z,"<","\\lt",!0);f(m,v,z,"→","\\rightarrow",!0);f(m,v,z,"→","\\to");f(m,_,z,"≱","\\ngeq",!0);f(m,_,z,"≰","\\nleq",!0);f(m,v,Un," ","\\ ");f(m,v,Un," ","\\space");f(m,v,Un," ","\\nobreakspace");f(B,v,Un," ","\\ ");f(B,v,Un," "," ");f(B,v,Un," ","\\space");f(B,v,Un," ","\\nobreakspace");f(m,v,Un,"","\\nobreak");f(m,v,Un,"","\\allowbreak");f(m,v,Ia,",",",");f(m,v,Ia,";",";");f(m,_,ne,"⊼","\\barwedge",!0);f(m,_,ne,"⊻","\\veebar",!0);f(m,v,ne,"⊙","\\odot",!0);f(m,v,ne,"⊕","\\oplus",!0);f(m,v,ne,"⊗","\\otimes",!0);f(m,v,T,"∂","\\partial",!0);f(m,v,ne,"⊘","\\oslash",!0);f(m,_,ne,"⊚","\\circledcirc",!0);f(m,_,ne,"⊡","\\boxdot",!0);f(m,v,ne,"△","\\bigtriangleup");f(m,v,ne,"▽","\\bigtriangledown");f(m,v,ne,"†","\\dagger");f(m,v,ne,"⋄","\\diamond");f(m,v,ne,"⋆","\\star");f(m,v,ne,"◃","\\triangleleft");f(m,v,ne,"▹","\\triangleright");f(m,v,Zt,"{","\\{");f(B,v,T,"{","\\{");f(B,v,T,"{","\\textbraceleft");f(m,v,Kt,"}","\\}");f(B,v,T,"}","\\}");f(B,v,T,"}","\\textbraceright");f(m,v,Zt,"{","\\lbrace");f(m,v,Kt,"}","\\rbrace");f(m,v,Zt,"[","\\lbrack",!0);f(B,v,T,"[","\\lbrack",!0);f(m,v,Kt,"]","\\rbrack",!0);f(B,v,T,"]","\\rbrack",!0);f(m,v,Zt,"(","\\lparen",!0);f(m,v,Kt,")","\\rparen",!0);f(B,v,T,"<","\\textless",!0);f(B,v,T,">","\\textgreater",!0);f(m,v,Zt,"⌊","\\lfloor",!0);f(m,v,Kt,"⌋","\\rfloor",!0);f(m,v,Zt,"⌈","\\lceil",!0);f(m,v,Kt,"⌉","\\rceil",!0);f(m,v,T,"\\","\\backslash");f(m,v,T,"∣","|");f(m,v,T,"∣","\\vert");f(B,v,T,"|","\\textbar",!0);f(m,v,T,"∥","\\|");f(m,v,T,"∥","\\Vert");f(B,v,T,"∥","\\textbardbl");f(B,v,T,"~","\\textasciitilde");f(B,v,T,"\\","\\textbackslash");f(B,v,T,"^","\\textasciicircum");f(m,v,z,"↑","\\uparrow",!0);f(m,v,z,"⇑","\\Uparrow",!0);f(m,v,z,"↓","\\downarrow",!0);f(m,v,z,"⇓","\\Downarrow",!0);f(m,v,z,"↕","\\updownarrow",!0);f(m,v,z,"⇕","\\Updownarrow",!0);f(m,v,ht,"∐","\\coprod");f(m,v,ht,"⋁","\\bigvee");f(m,v,ht,"⋀","\\bigwedge");f(m,v,ht,"⨄","\\biguplus");f(m,v,ht,"⋂","\\bigcap");f(m,v,ht,"⋃","\\bigcup");f(m,v,ht,"∫","\\int");f(m,v,ht,"∫","\\intop");f(m,v,ht,"∬","\\iint");f(m,v,ht,"∭","\\iiint");f(m,v,ht,"∏","\\prod");f(m,v,ht,"∑","\\sum");f(m,v,ht,"⨂","\\bigotimes");f(m,v,ht,"⨁","\\bigoplus");f(m,v,ht,"⨀","\\bigodot");f(m,v,ht,"∮","\\oint");f(m,v,ht,"∯","\\oiint");f(m,v,ht,"∰","\\oiiint");f(m,v,ht,"⨆","\\bigsqcup");f(m,v,ht,"∫","\\smallint");f(B,v,F0,"…","\\textellipsis");f(m,v,F0,"…","\\mathellipsis");f(B,v,F0,"…","\\ldots",!0);f(m,v,F0,"…","\\ldots",!0);f(m,v,F0,"⋯","\\@cdots",!0);f(m,v,F0,"⋱","\\ddots",!0);f(m,v,T,"⋮","\\varvdots");f(B,v,T,"⋮","\\varvdots");f(m,v,Ze,"ˊ","\\acute");f(m,v,Ze,"ˋ","\\grave");f(m,v,Ze,"¨","\\ddot");f(m,v,Ze,"~","\\tilde");f(m,v,Ze,"ˉ","\\bar");f(m,v,Ze,"˘","\\breve");f(m,v,Ze,"ˇ","\\check");f(m,v,Ze,"^","\\hat");f(m,v,Ze,"⃗","\\vec");f(m,v,Ze,"˙","\\dot");f(m,v,Ze,"˚","\\mathring");f(m,v,he,"","\\@imath");f(m,v,he,"","\\@jmath");f(m,v,T,"ı","ı");f(m,v,T,"ȷ","ȷ");f(B,v,T,"ı","\\i",!0);f(B,v,T,"ȷ","\\j",!0);f(B,v,T,"ß","\\ss",!0);f(B,v,T,"æ","\\ae",!0);f(B,v,T,"œ","\\oe",!0);f(B,v,T,"ø","\\o",!0);f(B,v,T,"Æ","\\AE",!0);f(B,v,T,"Œ","\\OE",!0);f(B,v,T,"Ø","\\O",!0);f(B,v,Ze,"ˊ","\\'");f(B,v,Ze,"ˋ","\\`");f(B,v,Ze,"ˆ","\\^");f(B,v,Ze,"˜","\\~");f(B,v,Ze,"ˉ","\\=");f(B,v,Ze,"˘","\\u");f(B,v,Ze,"˙","\\.");f(B,v,Ze,"¸","\\c");f(B,v,Ze,"˚","\\r");f(B,v,Ze,"ˇ","\\v");f(B,v,Ze,"¨",'\\"');f(B,v,Ze,"˝","\\H");f(B,v,Ze,"◯","\\textcircled");var S2={"--":!0,"---":!0,"``":!0,"''":!0};f(B,v,T,"–","--",!0);f(B,v,T,"–","\\textendash");f(B,v,T,"—","---",!0);f(B,v,T,"—","\\textemdash");f(B,v,T,"‘","`",!0);f(B,v,T,"‘","\\textquoteleft");f(B,v,T,"’","'",!0);f(B,v,T,"’","\\textquoteright");f(B,v,T,"“","``",!0);f(B,v,T,"“","\\textquotedblleft");f(B,v,T,"”","''",!0);f(B,v,T,"”","\\textquotedblright");f(m,v,T,"°","\\degree",!0);f(B,v,T,"°","\\degree");f(B,v,T,"°","\\textdegree",!0);f(m,v,T,"£","\\pounds");f(m,v,T,"£","\\mathsterling",!0);f(B,v,T,"£","\\pounds");f(B,v,T,"£","\\textsterling",!0);f(m,_,T,"✠","\\maltese");f(B,_,T,"✠","\\maltese");var lf='0123456789/@."';for(var Ms=0;Ms<lf.length;Ms++){var of=lf.charAt(Ms);f(m,v,T,of,of)}var sf='0123456789!@*()-=+";:?/.,';for(var Ts=0;Ts<sf.length;Ts++){var uf=sf.charAt(Ts);f(B,v,T,uf,uf)}var ho="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var qs=0;qs<ho.length;qs++){var Ql=ho.charAt(qs);f(m,v,he,Ql,Ql),f(B,v,T,Ql,Ql)}f(m,_,T,"C","ℂ");f(B,_,T,"C","ℂ");f(m,_,T,"H","ℍ");f(B,_,T,"H","ℍ");f(m,_,T,"N","ℕ");f(B,_,T,"N","ℕ");f(m,_,T,"P","ℙ");f(B,_,T,"P","ℙ");f(m,_,T,"Q","ℚ");f(B,_,T,"Q","ℚ");f(m,_,T,"R","ℝ");f(B,_,T,"R","ℝ");f(m,_,T,"Z","ℤ");f(B,_,T,"Z","ℤ");f(m,v,he,"h","ℎ");f(B,v,he,"h","ℎ");var ve;for(var Ft=0;Ft<ho.length;Ft++){var ot=ho.charAt(Ft);ve=String.fromCharCode(55349,56320+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56372+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56424+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56580+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56684+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56736+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56788+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56840+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56944+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),Ft<26&&(ve=String.fromCharCode(55349,56632+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve),ve=String.fromCharCode(55349,56476+Ft),f(m,v,he,ot,ve),f(B,v,T,ot,ve))}ve="𝕜";f(m,v,he,"k",ve);f(B,v,T,"k",ve);for(var jr=0;jr<10;jr++){var xr=jr.toString();ve=String.fromCharCode(55349,57294+jr),f(m,v,he,xr,ve),f(B,v,T,xr,ve),ve=String.fromCharCode(55349,57314+jr),f(m,v,he,xr,ve),f(B,v,T,xr,ve),ve=String.fromCharCode(55349,57324+jr),f(m,v,he,xr,ve),f(B,v,T,xr,ve),ve=String.fromCharCode(55349,57334+jr),f(m,v,he,xr,ve),f(B,v,T,xr,ve)}var eu="ÐÞþ";for(var As=0;As<eu.length;As++){var Yl=eu.charAt(As);f(m,v,he,Yl,Yl),f(B,v,T,Yl,Yl)}var tu={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},cf={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},pf={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},E3={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},Ur={mathClass:"",textClass:"",font:""},ff={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},df={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},hf={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},nu={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},ru={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},mf={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},au={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},xf=[tu,tu,cf,cf,pf,pf,E3,Ur,Ur,Ur,ff,ff,df,df,hf,hf,nu,nu,ru,ru,mf,mf,Ur,Ur,au,au],M3=[tu,Ur,nu,ru,au],T3=a=>{var t=a.charCodeAt(0),r=a.charCodeAt(1),o=(t-55296)*1024+(r-56320)+65536;if(119808<=o&&o<120484){var i=Math.floor((o-119808)/26);return xf[i]}else if(120782<=o&&o<=120831){var u=Math.floor((o-120782)/10);return M3[u]}else{if(o===120485||o===120486)return xf[0];if(120486<o&&o<120782)return Ur;throw new U("Unsupported character: "+a)}},ko=function(t,r,o){if(Xe[o][t]){var i=Xe[o][t].replace;i&&(t=i)}return{value:t,metrics:Cu(t,r,o)}},Ct=function(t,r,o,i,u){var p=ko(t,r,o),d=p.metrics;t=p.value;var x;if(d){var g=d.italic;(o==="text"||i&&i.font==="mathit")&&(g=0),x=new Xt(t,d.height,d.depth,g,d.skew,d.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+o+"'")),x=new Xt(t,0,0,0,0,0,u);if(i){x.maxFontSize=i.sizeMultiplier,i.style.isTight()&&x.classes.push("mtight");var y=i.getColor();y&&(x.style.color=y)}return x},Nu=function(t,r,o,i){return i===void 0&&(i=[]),o.font==="boldsymbol"&&ko(t,"Main-Bold",r).metrics?Ct(t,"Main-Bold",r,o,i.concat(["mathbf"])):t==="\\"||Xe[r][t].font==="main"?Ct(t,"Main-Regular",r,o,i):Ct(t,"AMS-Regular",r,o,i.concat(["amsrm"]))},q3=function(t,r,o){return o!=="textord"&&ko(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},So=function(t,r){var o=t.type==="mathord"?"mathord":"textord",i=t.mode,u=t.text,p=["mord"],d=r.font,x=r.fontFamily,g=r.fontWeight,y=r.fontShape,k=i==="math"||i==="text"&&!!d,L=k?d:x,E="",K="";if(u.charCodeAt(0)===55349){var C=T3(u);E=C.font,K=C[i+"Class"]}if(E)return Ct(u,E,i,r,p.concat(K));if(L){var F,P;if(L==="boldsymbol"){var V=q3(u,i,o);F=V.fontName,P=[V.fontClass]}else k?(F=lu[d].fontName,P=[d]):(F=Jl(x,g,y),P=[x,g,y]);if(ko(u,F,i).metrics)return Ct(u,F,i,r,p.concat(P));if(Object.prototype.hasOwnProperty.call(S2,u)&&F.slice(0,10)==="Typewriter"){for(var Z=[],re=0;re<u.length;re++)Z.push(Ct(u[re],F,i,r,p.concat(P)));return Gn(Z)}}if(o==="mathord")return Ct(u,"Math-Italic",i,r,p.concat(["mathnormal"]));if(o==="textord"){var ue=Xe[i][u]&&Xe[i][u].font;if(ue==="ams"){var ce=Jl("amsrm",g,y);return Ct(u,ce,i,r,p.concat("amsrm",g,y))}else if(ue==="main"||!ue){var me=Jl("textrm",g,y);return Ct(u,me,i,r,p.concat(g,y))}else{var ge=Jl(ue,g,y);return Ct(u,ge,i,r,p.concat(ge,g,y))}}else throw new Error("unexpected type: "+o+" in makeOrd")},A3=(a,t)=>{if(kr(a.classes)!==kr(t.classes)||a.skew!==t.skew||a.maxFontSize!==t.maxFontSize||a.italic!==0&&a.hasClass("mathnormal"))return!1;if(a.classes.length===1){var r=a.classes[0];if(r==="mbin"||r==="mord")return!1}for(var o of Object.keys(a.style))if(a.style[o]!==t.style[o])return!1;for(var i of Object.keys(t.style))if(a.style[i]!==t.style[i])return!1;return!0},_2=a=>{for(var t=0;t<a.length-1;t++){var r=a[t],o=a[t+1];r instanceof Xt&&o instanceof Xt&&A3(r,o)&&(r.text+=o.text,r.height=Math.max(r.height,o.height),r.depth=Math.max(r.depth,o.depth),r.italic=o.italic,a.splice(t+1,1),t--)}return a},Ru=function(t){for(var r=0,o=0,i=0,u=0;u<t.children.length;u++){var p=t.children[u];p.height>r&&(r=p.height),p.depth>o&&(o=p.depth),p.maxFontSize>i&&(i=p.maxFontSize)}t.height=r,t.depth=o,t.maxFontSize=i},j=function(t,r,o,i){var u=new A0(t,r,o,i);return Ru(u),u},_r=(a,t,r,o)=>new A0(a,t,r,o),z0=function(t,r,o){var i=j([t],[],r);return i.height=Math.max(o||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),i.style.borderBottomWidth=X(i.height),i.maxFontSize=1,i},F3=function(t,r,o,i){var u=new wo(t,r,o,i);return Ru(u),u},Gn=function(t){var r=new q0(t);return Ru(r),r},E0=function(t,r){return t instanceof q0?j([],[t],r):t},C3=function(t){if(t.positionType==="individualShift"){for(var r=t.children,o=[r[0]],i=-r[0].shift-r[0].elem.depth,u=i,p=1;p<r.length;p++){var d=-r[p].shift-u-r[p].elem.depth,x=d-(r[p-1].elem.height+r[p-1].elem.depth);u=u+d,o.push({type:"kern",size:x}),o.push(r[p])}return{children:o,depth:i}}var g;if(t.positionType==="top"){for(var y=t.positionData,k=0;k<t.children.length;k++){var L=t.children[k];y-=L.type==="kern"?L.size:L.elem.height+L.elem.depth}g=y}else if(t.positionType==="bottom")g=-t.positionData;else{var E=t.children[0];if(E.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")g=-E.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")g=-E.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:g}},Ie=function(t,r){for(var o=C3(t),i=o.children,u=o.depth,p=0,d=0;d<i.length;d++){var x=i[d];if(x.type==="elem"){var g=x.elem;p=Math.max(p,g.maxFontSize,g.height)}}p+=2;var y=j(["pstrut"],[]);y.style.height=X(p);for(var k=[],L=u,E=u,K=u,C=0;C<i.length;C++){var F=i[C];if(F.type==="kern")K+=F.size;else{var P=F.elem,V=F.wrapperClasses||[],Z=F.wrapperStyle||{},re=j(V,[y,P],void 0,Z);re.style.top=X(-p-K-P.depth),F.marginLeft&&(re.style.marginLeft=F.marginLeft),F.marginRight&&(re.style.marginRight=F.marginRight),k.push(re),K+=P.height+P.depth}L=Math.min(L,K),E=Math.max(E,K)}var ue=j(["vlist"],k);ue.style.height=X(E);var ce;if(L<0){var me=j([],[]),ge=j(["vlist"],[me]);ge.style.height=X(-L);var Ee=j(["vlist-s"],[new Xt("​")]);ce=[j(["vlist-r"],[ue,Ee]),j(["vlist-r"],[ge])]}else ce=[j(["vlist-r"],[ue])];var Ae=j(["vlist-t"],ce);return ce.length===2&&Ae.classes.push("vlist-t2"),Ae.height=E,Ae.depth=-L,Ae},L2=(a,t)=>{var r=j(["mspace"],[],t),o=nt(a,t);return r.style.marginRight=X(o),r},Jl=(a,t,r)=>{var o,i;switch(a){case"amsrm":o="AMS";break;case"textrm":o="Main";break;case"textsf":o="SansSerif";break;case"texttt":o="Typewriter";break;default:o=a}return t==="textbf"&&r==="textit"?i="BoldItalic":t==="textbf"?i="Bold":r==="textit"?i="Italic":i="Regular",o+"-"+i},lu={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},z2={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},E2=function(t,r){var o=z2[t],i=o[0],u=o[1],p=o[2],d=new Sr(i),x=new jn([d],{width:X(u),height:X(p),style:"width:"+X(u),viewBox:"0 0 "+1e3*u+" "+1e3*p,preserveAspectRatio:"xMinYMin"}),g=_r(["katex-overlay"],[x],r);return g.height=p,g.style.height=X(p),g.style.width=X(u),g},tt={number:3,unit:"mu"},Vr={number:4,unit:"mu"},Bn={number:5,unit:"mu"},N3={mord:{mop:tt,mbin:Vr,mrel:Bn,minner:tt},mop:{mord:tt,mop:tt,mrel:Bn,minner:tt},mbin:{mord:Vr,mop:Vr,mopen:Vr,minner:Vr},mrel:{mord:Bn,mop:Bn,mopen:Bn,minner:Bn},mopen:{},mclose:{mop:tt,mbin:Vr,mrel:Bn,minner:tt},mpunct:{mord:tt,mop:tt,mrel:Bn,mopen:tt,mclose:tt,mpunct:tt,minner:tt},minner:{mord:tt,mop:tt,mbin:Vr,mrel:Bn,mopen:tt,mpunct:tt,minner:tt}},R3={mord:{mop:tt},mop:{mord:tt,mop:tt},mbin:{},mrel:{},mopen:{},mclose:{mop:tt},mpunct:{},minner:{mop:tt}},M2={},Ca={},Na={};function ee(a){for(var t=a.type,r=a.names,o=a.htmlBuilder,i=a.mathmlBuilder,u=0;u<r.length;++u)M2[r[u]]=a;t&&(o&&(Ca[t]=o),i&&(Na[t]=i))}function Zr(a){var t=a.type,r=a.htmlBuilder,o=a.mathmlBuilder;r&&(Ca[t]=r),o&&(Na[t]=o)}var Ra=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},ft=function(t){return t.type==="ordgroup"?t.body:[t]},K3=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),D3=new Set(["rightmost","mrel","mclose","mpunct"]),I3={display:Se.DISPLAY,text:Se.TEXT,script:Se.SCRIPT,scriptscript:Se.SCRIPTSCRIPT},B3={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},vt=function(t,r,o,i){i===void 0&&(i=[null,null]);for(var u=[],p=0;p<t.length;p++){var d=Ke(t[p],r);if(d instanceof q0){var x=d.children;u.push(...x)}else u.push(d)}if(_2(u),!o)return u;var g=r;if(t.length===1){var y=t[0];y.type==="sizing"?g=r.havingSize(y.size):y.type==="styling"&&(g=r.havingStyle(I3[y.style]))}var k=j([i[0]||"leftmost"],[],r),L=j([i[1]||"rightmost"],[],r),E=o==="root";return ou(u,(K,C)=>{var F=C.classes[0],P=K.classes[0];F==="mbin"&&D3.has(P)?C.classes[0]="mord":P==="mbin"&&K3.has(F)&&(K.classes[0]="mord")},{node:k},L,E),ou(u,(K,C)=>{var F,P,V=su(C),Z=su(K),re=V&&Z?K.hasClass("mtight")?(F=R3[V])==null?void 0:F[Z]:(P=N3[V])==null?void 0:P[Z]:null;if(re)return L2(re,g)},{node:k},L,E),u},ou=function(t,r,o,i,u){i&&t.push(i);for(var p=0;p<t.length;p++){var d=t[p],x=T2(d);if(x){ou(x.children,r,o,null,u);continue}var g=!d.hasClass("mspace");if(g){var y=r(d,o.node);y&&(o.insertAfter?o.insertAfter(y):(t.unshift(y),p++))}g?o.node=d:u&&d.hasClass("katex-newline")&&(o.node=j(["leftmost"])),o.insertAfter=(k=>L=>{t.splice(k+1,0,L),p++})(p)}i&&t.pop()},T2=function(t){return t instanceof q0||t instanceof wo||t instanceof A0&&t.hasClass("enclosing")?t:null},iu=function(t,r){var o=T2(t);if(o){var i=o.children;if(i.length){if(r==="right")return iu(i[i.length-1],"right");if(r==="left")return iu(i[0],"left")}}return t},su=function(t,r){if(!t)return null;r&&(t=iu(t,r));var o=t.classes[0];return B3[o]||null},Ka=function(t,r){var o=["nulldelimiter"].concat(t.baseSizingClasses());return j(r.concat(o))},Ke=function(t,r,o){if(!t)return j();if(Ca[t.type]){var i=Ca[t.type](t,r);if(o&&r.size!==o.size){i=j(r.sizingClasses(o),[i],r);var u=r.sizeMultiplier/o.sizeMultiplier;i.height*=u,i.depth*=u}return i}else throw new U("Got group of unknown type: '"+t.type+"'")};function eo(a,t){var r=j(["katex-base"],a,t),o=j(["katex-strut"]);return o.style.height=X(r.height+r.depth),r.depth&&(o.style.verticalAlign=X(-r.depth)),r.children.unshift(o),r}function uu(a,t){var r=null;a.length===1&&a[0].type==="tag"&&(r=a[0].tag,a=a[0].body);var o=vt(a,t,"root"),i;o.length===2&&o[1].hasClass("katex-tag")&&(i=o.pop());for(var u=[],p=[],d=0;d<o.length;d++)if(p.push(o[d]),o[d].hasClass("mbin")||o[d].hasClass("mrel")||o[d].hasClass("allowbreak")){for(var x=!1;d<o.length-1&&o[d+1].hasClass("mspace")&&!o[d+1].hasClass("katex-newline");)d++,p.push(o[d]),o[d].hasClass("nobreak")&&(x=!0);x||(u.push(eo(p,t)),p=[])}else o[d].hasClass("katex-newline")&&(p.pop(),p.length>0&&(u.push(eo(p,t)),p=[]),u.push(o[d]));p.length>0&&u.push(eo(p,t));var g;r?(g=eo(vt(r,t,!0),t),g.classes=["katex-tag"],u.push(g)):i&&u.push(i);var y=j(["katex-html"],u);if(y.setAttribute("aria-hidden","true"),g){var k=g.children[0];k.style.height=X(y.height+y.depth),y.depth&&(k.style.verticalAlign=X(-y.depth))}return y}function q2(a){return new q0(a)}class G{constructor(t,r,o){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=o||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r of Object.entries(this.attributes)){var o=r[0],i=r[1];t.setAttribute(o,i)}this.classes.length>0&&(t.className=kr(this.classes));for(var u=0;u<this.children.length;u++)if(this.children[u]instanceof dt&&this.children[u+1]instanceof dt){for(var p=this.children[u].toText()+this.children[++u].toText();this.children[u+1]instanceof dt;)p+=this.children[++u].toText();t.appendChild(new dt(p).toNode())}else t.appendChild(this.children[u].toNode());return t}toMarkup(){var t="<"+this.type;for(var r of Object.entries(this.attributes)){var o=r[0],i=r[1];t+=" "+o+'="',t+=Tt(i),t+='"'}this.classes.length>0&&(t+=' class ="'+Tt(kr(this.classes))+'"'),t+=">";for(var u=0;u<this.children.length;u++)t+=this.children[u].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class dt{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Tt(this.toText())}toText(){return this.text}}class A2{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",X(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+X(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var P3=new Set(["\\imath","\\jmath"]),O3=new Set(["mrow","mtable"]),on=function(t,r,o){var i,u;return Xe[r][t]&&Xe[r][t].replace&&t.charCodeAt(0)!==55349&&!(Object.prototype.hasOwnProperty.call(S2,t)&&((o==null||(i=o.fontFamily)==null?void 0:i.slice(4,6))==="tt"||(o==null||(u=o.font)==null?void 0:u.slice(4,6))==="tt"))&&(t=Xe[r][t].replace),new dt(t)},Ku=function(t){return t.length===1?t[0]:new G("mrow",t)},H3={mathit:"italic",boldsymbol:a=>a.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Du=(a,t)=>{if(a.mode==="text"){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold"}var r=t.font;if(!r||r==="mathnormal")return null;var o=a.mode,i=H3[r];if(i)return typeof i=="function"?i(a):i;var u=a.text;if(P3.has(u))return null;if(Xe[o][u]){var p=Xe[o][u].replace;p&&(u=p)}var d=lu[r].fontName;return Cu(u,d,o)?lu[r].variant:null};function Fs(a){if(!a)return!1;if(a.type==="mi"&&a.children.length===1){var t=a.children[0];return t instanceof dt&&t.text==="."}else if(a.type==="mo"&&a.children.length===1&&a.getAttribute("separator")==="true"&&a.getAttribute("lspace")==="0em"&&a.getAttribute("rspace")==="0em"){var r=a.children[0];return r instanceof dt&&r.text===","}else return!1}var Qt=function(t,r,o){if(t.length===1){var i=Ve(t[0],r);return o&&i instanceof G&&i.type==="mo"&&(i.setAttribute("lspace","0em"),i.setAttribute("rspace","0em")),[i]}for(var u=[],p,d=0;d<t.length;d++){var x=Ve(t[d],r);if(x instanceof G&&p instanceof G){if(x.type==="mtext"&&p.type==="mtext"&&x.getAttribute("mathvariant")===p.getAttribute("mathvariant")){p.children.push(...x.children);continue}else if(x.type==="mn"&&p.type==="mn"){p.children.push(...x.children);continue}else if(Fs(x)&&p.type==="mn"){p.children.push(...x.children);continue}else if(x.type==="mn"&&Fs(p))x.children=[...p.children,...x.children],u.pop();else if((x.type==="msup"||x.type==="msub")&&x.children.length>=1&&(p.type==="mn"||Fs(p))){var g=x.children[0];g instanceof G&&g.type==="mn"&&(g.children=[...p.children,...g.children],u.pop())}else if(p.type==="mi"&&p.children.length===1){var y=p.children[0];if(y instanceof dt&&y.text==="̸"&&(x.type==="mo"||x.type==="mi"||x.type==="mn")){var k=x.children[0];k instanceof dt&&k.text.length>0&&(k.text=k.text.slice(0,1)+"̸"+k.text.slice(1),u.pop())}}}u.push(x),p=x}return u},Lr=function(t,r,o){return Ku(Qt(t,r,o))},Ve=function(t,r){if(!t)return new G("mrow");if(Na[t.type])return Na[t.type](t,r);throw new U("Got group of unknown type: '"+t.type+"'")};function gf(a,t,r,o,i){var u=Qt(a,r),p;u.length===1&&u[0]instanceof G&&O3.has(u[0].type)?p=u[0]:p=new G("mrow",u);var d=new G("annotation",[new dt(t)]);d.setAttribute("encoding","application/x-tex");var x=new G("semantics",[p,d]),g=new G("math",[x]);g.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),o&&g.setAttribute("display","block");var y=i?"katex":"katex-mathml";return j([y],[g])}var j3=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],vf=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],bf=function(t,r){return r.size<2?t:j3[t-1][r.size-1]};class Pn{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Pn.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=vf[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,t),new Pn(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:bf(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:vf[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=bf(Pn.BASESIZE,t);return this.size===r&&this.textSize===Pn.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["katex-sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Pn.BASESIZE?["katex-sizing","reset-size"+this.size,"size"+Pn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=z3(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Pn.BASESIZE=6;var F2=function(t){return new Pn({style:t.displayMode?Se.DISPLAY:Se.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},C2=function(t,r){if(r.displayMode){var o=["katex-display"];r.leqno&&o.push("leqno"),r.fleqn&&o.push("fleqn"),t=j(o,[t])}return t},V3=function(t,r,o){var i=F2(o),u;if(o.output==="mathml")return gf(t,r,i,o.displayMode,!0);if(o.output==="html"){var p=uu(t,i);u=j(["katex"],[p])}else{var d=gf(t,r,i,o.displayMode,!1),x=uu(t,i);u=j(["katex"],[d,x])}return C2(u,o)},$3=function(t,r,o){var i=F2(o),u=uu(t,i),p=j(["katex"],[u]);return C2(p,o)},U3={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},_o=function(t){var r=new G("mo",[new dt(U3[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},G3={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},W3=new Set(["widehat","widecheck","widetilde","utilde"]),Lo=function(t,r){function o(){var x=4e5,g=t.label.slice(1);if(W3.has(g)&&"base"in t){var y=t.base.type==="ordgroup"?t.base.body.length:1,k,L,E;if(y>5)g==="widehat"||g==="widecheck"?(k=420,x=2364,E=.42,L=g+"4"):(k=312,x=2340,E=.34,L="tilde4");else{var K=[1,1,2,2,3,3][y];g==="widehat"||g==="widecheck"?(x=[0,1062,2364,2364,2364][K],k=[0,239,300,360,420][K],E=[0,.24,.3,.3,.36,.42][K],L=g+K):(x=[0,600,1033,2339,2340][K],k=[0,260,286,306,312][K],E=[0,.26,.286,.3,.306,.34][K],L="tilde"+K)}var C=new Sr(L),F=new jn([C],{width:"100%",height:X(E),viewBox:"0 0 "+x+" "+k,preserveAspectRatio:"none"});return{span:_r([],[F],r),minWidth:0,height:E}}else{var P=[],V=G3[g];if(!V)throw new Error('No SVG data for "'+g+'".');var Z=V[0],re=V[1],ue=V[2],ce=ue/1e3,me=Z.length,ge,Ee;if(me===1){if(V.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+g+'".');ge=["hide-tail"],Ee=[V[3]]}else if(me===2)ge=["halfarrow-left","halfarrow-right"],Ee=["xMinYMin","xMaxYMin"];else if(me===3)ge=["brace-left","brace-center","brace-right"],Ee=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+me+" children.");for(var Ae=0;Ae<me;Ae++){var it=new Sr(Z[Ae]),Be=new jn([it],{width:"400em",height:X(ce),viewBox:"0 0 "+x+" "+ue,preserveAspectRatio:Ee[Ae]+" slice"}),Qe=_r([ge[Ae]],[Be],r);if(me===1)return{span:Qe,minWidth:re,height:ce};Qe.style.height=X(ce),P.push(Qe)}return{span:j(["katex-stretchy"],P,r),minWidth:re,height:ce}}}var i=o(),u=i.span,p=i.minWidth,d=i.height;return u.height=d,u.style.height=X(d),p>0&&(u.style.minWidth=X(p)),u},X3=function(t,r,o,i,u){var p,d=t.height+t.depth+o+i;if(/fbox|color|angl/.test(r)){if(p=j(["katex-stretchy",r],[],u),r==="fbox"){var x=u.color&&u.getColor();x&&(p.style.borderColor=x)}}else{var g=[];/^[bx]cancel$/.test(r)&&g.push(new Js({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&g.push(new Js({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var y=new jn(g,{width:"100%",height:X(d)});p=_r([],[y],u)}return p.height=d,p.style.height=X(d),p},Z3=["bin","close","inner","open","punct","rel"],Q3=["accent-token","mathord","op-token","spacing","textord"],Y3=new Set(Z3),J3=new Set(Q3);function e6(a){return Y3.has(a)}function ze(a,t){if(!a||a.type!==t)throw new Error("Expected node of type "+t+", but got "+(a?"node of type "+a.type:String(a)));return a}function zo(a){var t=Eo(a);if(!t)throw new Error("Expected node of symbol group type, but got "+(a?"node of type "+a.type:String(a)));return t}function Eo(a){return a.type==="atom"||J3.has(a.type)?a:null}function Iu(a,t,r){var o="";for(var i of a.body)if(i.type==="textord")o+=i.text;else if(r&&i.type==="spacing"&&i.text===" ")o+=" ";else throw new U(t,a);return o}var N2=a=>{if(a instanceof Xt)return a;if(_3(a)&&a.children.length===1)return N2(a.children[0])},R2=(a,t)=>{var r,o,i;a&&a.type==="supsub"?(o=ze(a.base,"accent"),r=o.base,a.base=r,i=S3(Ke(a,t)),a.base=o):(o=ze(a,"accent"),r=o.base);var u=Ke(r,t.havingCrampedStyle()),p=o.isShifty&&$n(r),d=0;if(p){var x,g;d=(x=(g=N2(u))==null?void 0:g.skew)!=null?x:0}var y=o.label==="\\c",k=y?u.height+u.depth:Math.min(u.height,t.fontMetrics().xHeight),L;if(o.isStretchy)L=Lo(o,t),L=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:L,wrapperClasses:["svg-align"],wrapperStyle:d>0?{width:"calc(100% - "+X(2*d)+")",marginLeft:X(2*d)}:void 0}]});else{var E,K;o.label==="\\vec"?(E=E2("vec",t),K=z2.vec[1]):(E=So({type:"textord",mode:o.mode,text:o.label},t),E=k3(E),E.italic=0,K=E.width,y&&(k+=E.depth)),L=j(["accent-body"],[E]);var C=o.label==="\\textcircled";C&&(L.classes.push("accent-full"),k=u.height);var F=d;C||(F-=K/2),L.style.left=X(F),o.label==="\\textcircled"&&(L.style.top=".2em"),L=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-k},{type:"elem",elem:L}]})}var P=j(["mord","katex-accent"],[L],t);return i?(i.children[0]=P,i.height=Math.max(P.height,i.height),i.classes[0]="mord",i):P},t6=(a,t)=>{var r=a.isStretchy?_o(a.label):new G("mo",[on(a.label,a.mode)]),o=new G("mover",[Ve(a.base,t),r]);return o.setAttribute("accent","true"),o},n6=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(a=>"\\"+a).join("|"));ee({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(a,t)=>{var r=Ra(t[0]),o=!n6.test(a.funcName),i=!o||a.funcName==="\\widehat"||a.funcName==="\\widetilde"||a.funcName==="\\widecheck";return{type:"accent",mode:a.parser.mode,label:a.funcName,isStretchy:o,isShifty:i,base:r}},htmlBuilder:R2,mathmlBuilder:t6});ee({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(a,t)=>{var r=t[0],o=a.parser.mode;return o==="math"&&(a.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+a.funcName+" works only in text mode"),o="text"),{type:"accent",mode:o,label:a.funcName,isStretchy:!1,isShifty:!0,base:r}}});ee({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=t[0];return{type:"accentUnder",mode:r.mode,label:o,base:i}},htmlBuilder:(a,t)=>{var r=Ke(a.base,t),o=Lo(a,t),i=a.label==="\\utilde"?.12:0,u=Ie({positionType:"top",positionData:r.height,children:[{type:"elem",elem:o,wrapperClasses:["svg-align"]},{type:"kern",size:i},{type:"elem",elem:r}]});return j(["mord","accentunder"],[u],t)},mathmlBuilder:(a,t)=>{var r=_o(a.label),o=new G("munder",[Ve(a.base,t),r]);return o.setAttribute("accentunder","true"),o}});var to=a=>{var t=new G("mpadded",a?[a]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};ee({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(a,t,r){var o=a.parser,i=a.funcName;return{type:"xArrow",mode:o.mode,label:i,body:t[0],below:r[0]}},htmlBuilder(a,t){var r=t.style,o=t.havingStyle(r.sup()),i=E0(Ke(a.body,o,t),t),u=a.label.slice(0,2)==="\\x"?"x":"cd";i.classes.push(u+"-arrow-pad");var p;a.below&&(o=t.havingStyle(r.sub()),p=E0(Ke(a.below,o,t),t),p.classes.push(u+"-arrow-pad"));var d=Lo(a,t),x=-t.fontMetrics().axisHeight+.5*d.height,g=-t.fontMetrics().axisHeight-.5*d.height-.111;(i.depth>.25||a.label==="\\xleftequilibrium")&&(g-=i.depth);var y;if(p){var k=-t.fontMetrics().axisHeight+p.height+.5*d.height+.111;y=Ie({positionType:"individualShift",children:[{type:"elem",elem:i,shift:g},{type:"elem",elem:d,shift:x,wrapperClasses:["svg-align"]},{type:"elem",elem:p,shift:k}]})}else y=Ie({positionType:"individualShift",children:[{type:"elem",elem:i,shift:g},{type:"elem",elem:d,shift:x,wrapperClasses:["svg-align"]}]});return j(["mrel","x-arrow"],[y],t)},mathmlBuilder(a,t){var r=_o(a.label);r.setAttribute("minsize",a.label.charAt(0)==="x"?"1.75em":"3.0em");var o;if(a.body){var i=to(Ve(a.body,t));if(a.below){var u=to(Ve(a.below,t));o=new G("munderover",[r,u,i])}else o=new G("mover",[r,i])}else if(a.below){var p=to(Ve(a.below,t));o=new G("munder",[r,p])}else o=to(),o=new G("mover",[r,o]);return o}});function r6(a,t){var r=vt(a.body,t,!0);return j([a.mclass],r,t)}function a6(a,t){var r,o=Qt(a.body,t);return a.mclass==="minner"?r=new G("mpadded",o):a.mclass==="mord"?a.isCharacterBox?(r=o[0],r.type="mi"):r=new G("mi",o):(a.isCharacterBox?(r=o[0],r.type="mo"):r=new G("mo",o),a.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):a.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):(a.mclass==="mopen"||a.mclass==="mclose")&&(r.attributes.lspace="0em",r.attributes.rspace="0em")),r}ee({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(a,t){var r=a.parser,o=a.funcName,i=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+o.slice(5),body:ft(i),isCharacterBox:$n(i)}},htmlBuilder:r6,mathmlBuilder:a6});var Mo=a=>{var t=a.type==="ordgroup"&&a.body.length?a.body[0]:a;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};ee({type:"mclass",names:["\\@binrel"],numArgs:2,handler(a,t){var r=a.parser;return{type:"mclass",mode:r.mode,mclass:Mo(t[0]),body:ft(t[1]),isCharacterBox:$n(t[1])}}});ee({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(a,t){var r=a.parser,o=a.funcName,i=t[1],u=t[0],p;o!=="\\stackrel"?p=Mo(i):p="mrel";var d={type:"op",mode:i.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:o!=="\\stackrel",body:ft(i)},x=o==="\\underset"?{type:"supsub",mode:u.mode,base:d,sub:u}:{type:"supsub",mode:u.mode,base:d,sup:u};return{type:"mclass",mode:r.mode,mclass:p,body:[x],isCharacterBox:$n(x)}}});ee({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(a,t){var r=a.parser;return{type:"pmb",mode:r.mode,mclass:Mo(t[0]),body:ft(t[0])}},htmlBuilder(a,t){var r=vt(a.body,t,!0),o=j([a.mclass],r,t);return o.style.textShadow="0.02em 0.01em 0.04px",o},mathmlBuilder(a,t){var r=Qt(a.body,t),o=new G("mstyle",r);return o.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),o}});var l6={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},yf=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),wf=a=>a.type==="textord"&&a.text==="@",o6=(a,t)=>(a.type==="mathord"||a.type==="atom")&&a.text===t;function i6(a,t,r){var o=l6[a];switch(o){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(o,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var i=r.callFunction("\\\\cdleft",[t[0]],[]),u={type:"atom",text:o,mode:"math",family:"rel"},p=r.callFunction("\\Big",[u],[]),d=r.callFunction("\\\\cdright",[t[1]],[]),x={type:"ordgroup",mode:"math",body:[i,p,d]};return r.callFunction("\\\\cdparent",[x],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var g={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[g],[])}default:return{type:"textord",text:" ",mode:"math"}}}function s6(a){var t=[];for(a.gullet.beginGroup(),a.gullet.macros.set("\\cr","\\\\\\relax"),a.gullet.beginGroup();;){t.push(a.parseExpression(!1,"\\\\")),a.gullet.endGroup(),a.gullet.beginGroup();var r=a.fetch().text;if(r==="&"||r==="\\\\")a.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new U("Expected \\\\ or \\cr or \\end",a.nextToken)}for(var o=[],i=[o],u=0;u<t.length;u++){for(var p=t[u],d=yf(),x=0;x<p.length;x++)if(!wf(p[x]))d.body.push(p[x]);else{o.push(d),x+=1;var g=zo(p[x]).text,y=new Array(2);if(y[0]={type:"ordgroup",mode:"math",body:[]},y[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(g))if("<>AV".includes(g))for(var k=0;k<2;k++){for(var L=!0,E=x+1;E<p.length;E++){if(o6(p[E],g)){L=!1,x=E;break}if(wf(p[E]))throw new U("Missing a "+g+" character to complete a CD arrow.",p[E]);y[k].body.push(p[E])}if(L)throw new U("Missing a "+g+" character to complete a CD arrow.",p[x])}else throw new U('Expected one of "<>AV=|." after @',p[x]);var K=i6(g,y,a),C={type:"styling",body:[K],mode:"math",style:"display",resetFont:!0};o.push(C),d=yf()}u%2===0?o.push(d):o.shift(),o=[],i.push(o)}a.gullet.endGroup(),a.gullet.endGroup();var F=new Array(i[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:i,arraystretch:1,addJot:!0,rowGaps:[null],cols:F,colSeparationType:"CD",hLinesBeforeRow:new Array(i.length+1).fill([])}}ee({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(a,t){var r=a.parser,o=a.funcName;return{type:"cdlabel",mode:r.mode,side:o.slice(4),label:t[0]}},htmlBuilder(a,t){var r=t.havingStyle(t.style.sup()),o=E0(Ke(a.label,r,t),t);return o.classes.push("cd-label-"+a.side),o.style.bottom=X(.8-o.depth),o.height=0,o.depth=0,o},mathmlBuilder(a,t){var r=new G("mrow",[Ve(a.label,t)]);return r=new G("mpadded",[r]),r.setAttribute("width","0"),a.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new G("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ee({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(a,t){var r=a.parser;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(a,t){var r=E0(Ke(a.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(a,t){return new G("mrow",[Ve(a.fragment,t)])}});ee({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(a,t){var r=a.parser,o=ze(t[0],"ordgroup"),i=Iu(o,"\\@char has non-numeric argument"),u=parseInt(i),p;if(isNaN(u))throw new U("\\@char has non-numeric argument "+i);if(u<0||u>1114111)throw new U("\\@char with invalid code point "+i);return u<=65535?p=String.fromCharCode(u):(u-=65536,p=String.fromCharCode((u>>10)+55296,(u&1023)+56320)),{type:"textord",mode:r.mode,text:p}}});var u6=(a,t)=>{var r=vt(a.body,t.withColor(a.color),!1);return Gn(r)},c6=(a,t)=>{var r=Qt(a.body,t.withColor(a.color)),o=new G("mstyle",r);return o.setAttribute("mathcolor",a.color),o};ee({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(a,t){var r=a.parser,o=ze(t[0],"color-token").color,i=t[1];return{type:"color",mode:r.mode,color:o,body:ft(i)}},htmlBuilder:u6,mathmlBuilder:c6});ee({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(a,t){var r=a.parser,o=a.breakOnTokenText,i=ze(t[0],"color-token").color;r.gullet.macros.set("\\current@color",i);var u=r.parseExpression(!0,o);return{type:"color",mode:r.mode,color:i,body:u}}});ee({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(a,t,r){var o=a.parser,i=o.gullet.future().text==="["?o.parseSizeGroup(!0):null,u=!o.settings.displayMode||!o.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:o.mode,newLine:u,size:i&&ze(i,"size").value}},htmlBuilder(a,t){var r=j(["mspace"],[],t);return a.newLine&&(r.classes.push("katex-newline"),a.size&&(r.style.marginTop=X(nt(a.size,t)))),r},mathmlBuilder(a,t){var r=new G("mspace");return a.newLine&&(r.setAttribute("linebreak","newline"),a.size&&r.setAttribute("height",X(nt(a.size,t)))),r}});var cu={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},K2=a=>{var t=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new U("Expected a control sequence",a);return t},p6=a=>{var t=a.gullet.popToken();return t.text==="="&&(t=a.gullet.popToken(),t.text===" "&&(t=a.gullet.popToken())),t},D2=(a,t,r,o)=>{var i=a.gullet.macros.get(r.text);i==null&&(r.noexpand=!0,i={tokens:[r],numArgs:0,unexpandable:!a.gullet.isExpandable(r.text)}),a.gullet.macros.set(t,i,o)};ee({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(a){var t=a.parser,r=a.funcName;t.consumeSpaces();var o=t.fetch();if(cu[o.text])return(r==="\\global"||r==="\\\\globallong")&&(o.text=cu[o.text]),ze(t.parseFunction(),"internal");throw new U("Invalid token after macro prefix",o)}});ee({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(a){var t=a.parser,r=a.funcName,o=t.gullet.popToken(),i=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(i))throw new U("Expected a control sequence",o);for(var u=0,p,d=[[]];t.gullet.future().text!=="{";)if(o=t.gullet.popToken(),o.text==="#"){if(t.gullet.future().text==="{"){p=t.gullet.future(),d[u].push("{");break}if(o=t.gullet.popToken(),!/^[1-9]$/.test(o.text))throw new U('Invalid argument number "'+o.text+'"');if(parseInt(o.text)!==u+1)throw new U('Argument number "'+o.text+'" out of order');u++,d.push([])}else{if(o.text==="EOF")throw new U("Expected a macro definition");d[u].push(o.text)}var x=t.gullet.consumeArg(),g=x.tokens;return p&&g.unshift(p),(r==="\\edef"||r==="\\xdef")&&(g=t.gullet.expandTokens(g),g.reverse()),t.gullet.macros.set(i,{tokens:g,numArgs:u,delimiters:d},r===cu[r]),{type:"internal",mode:t.mode}}});ee({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(a){var t=a.parser,r=a.funcName,o=K2(t.gullet.popToken());t.gullet.consumeSpaces();var i=p6(t);return D2(t,o,i,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});ee({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(a){var t=a.parser,r=a.funcName,o=K2(t.gullet.popToken()),i=t.gullet.popToken(),u=t.gullet.popToken();return D2(t,o,u,r==="\\\\globalfuture"),t.gullet.pushToken(u),t.gullet.pushToken(i),{type:"internal",mode:t.mode}}});var Ma=function(t,r,o){var i=Xe.math[t]&&Xe.math[t].replace,u=Cu(i||t,r,o);if(!u)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return u},Bu=function(t,r,o,i){var u=o.havingBaseStyle(r),p=j(i.concat(u.sizingClasses(o)),[t],o),d=u.sizeMultiplier/o.sizeMultiplier;return p.height*=d,p.depth*=d,p.maxFontSize=u.sizeMultiplier,p},I2=function(t,r,o){var i=r.havingBaseStyle(o),u=(1-r.sizeMultiplier/i.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=X(u),t.height-=u,t.depth+=u},f6=function(t,r,o,i,u,p){var d=Ct(t,"Main-Regular",u,i),x=Bu(d,r,i,p);return I2(x,i,r),x},d6=function(t,r,o,i){return Ct(t,"Size"+r+"-Regular",o,i)},B2=function(t,r,o,i,u,p){var d=d6(t,r,u,i),x=Bu(j(["delimsizing","size"+r],[d],i),Se.TEXT,i,p);return o&&I2(x,i,Se.TEXT),x},Cs=function(t,r,o){var i;r==="Size1-Regular"?i="delim-size1":i="delim-size4";var u=j(["delimsizinginner",i],[j([],[Ct(t,r,o)])]);return{type:"elem",elem:u}},Ns=function(t,r,o){var i=Ln["Size4-Regular"][t.charCodeAt(0)]?Ln["Size4-Regular"][t.charCodeAt(0)][4]:Ln["Size1-Regular"][t.charCodeAt(0)][4],u=new Sr("inner",m3(t,Math.round(1e3*r))),p=new jn([u],{width:X(i),height:X(r),style:"width:"+X(i),viewBox:"0 0 "+1e3*i+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),d=_r([],[p],o);return d.height=r,d.style.height=X(r),d.style.width=X(i),{type:"elem",elem:d}},pu=.008,no={type:"kern",size:-1*pu},h6=new Set(["|","\\lvert","\\rvert","\\vert"]),m6=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),P2=function(t,r,o,i,u,p){var d,x,g,y,k="",L=0;d=g=y=t,x=null;var E="Size1-Regular";t==="\\uparrow"?g=y="⏐":t==="\\Uparrow"?g=y="‖":t==="\\downarrow"?d=g="⏐":t==="\\Downarrow"?d=g="‖":t==="\\updownarrow"?(d="\\uparrow",g="⏐",y="\\downarrow"):t==="\\Updownarrow"?(d="\\Uparrow",g="‖",y="\\Downarrow"):h6.has(t)?(g="∣",k="vert",L=333):m6.has(t)?(g="∥",k="doublevert",L=556):t==="["||t==="\\lbrack"?(d="⎡",g="⎢",y="⎣",E="Size4-Regular",k="lbrack",L=667):t==="]"||t==="\\rbrack"?(d="⎤",g="⎥",y="⎦",E="Size4-Regular",k="rbrack",L=667):t==="\\lfloor"||t==="⌊"?(g=d="⎢",y="⎣",E="Size4-Regular",k="lfloor",L=667):t==="\\lceil"||t==="⌈"?(d="⎡",g=y="⎢",E="Size4-Regular",k="lceil",L=667):t==="\\rfloor"||t==="⌋"?(g=d="⎥",y="⎦",E="Size4-Regular",k="rfloor",L=667):t==="\\rceil"||t==="⌉"?(d="⎤",g=y="⎥",E="Size4-Regular",k="rceil",L=667):t==="("||t==="\\lparen"?(d="⎛",g="⎜",y="⎝",E="Size4-Regular",k="lparen",L=875):t===")"||t==="\\rparen"?(d="⎞",g="⎟",y="⎠",E="Size4-Regular",k="rparen",L=875):t==="\\{"||t==="\\lbrace"?(d="⎧",x="⎨",y="⎩",g="⎪",E="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(d="⎫",x="⎬",y="⎭",g="⎪",E="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(d="⎧",y="⎩",g="⎪",E="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(d="⎫",y="⎭",g="⎪",E="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(d="⎧",y="⎭",g="⎪",E="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(d="⎫",y="⎩",g="⎪",E="Size4-Regular");var K=Ma(d,E,u),C=K.height+K.depth,F=Ma(g,E,u),P=F.height+F.depth,V=Ma(y,E,u),Z=V.height+V.depth,re=0,ue=1;if(x!==null){var ce=Ma(x,E,u);re=ce.height+ce.depth,ue=2}var me=C+Z+re,ge=Math.max(0,Math.ceil((r-me)/(ue*P))),Ee=me+ge*ue*P,Ae=i.fontMetrics().axisHeight;o&&(Ae*=i.sizeMultiplier);var it=Ee/2-Ae,Be=[];if(k.length>0){var Qe=Ee-C-Z,rt=Math.round(Ee*1e3),at=x3(k,Math.round(Qe*1e3)),Ye=new Sr(k,at),Oe=X(L/1e3),Y=X(rt/1e3),pe=new jn([Ye],{width:Oe,height:Y,viewBox:"0 0 "+L+" "+rt}),J=_r([],[pe],i);J.height=rt/1e3,J.style.width=Oe,J.style.height=Y,Be.push({type:"elem",elem:J})}else{if(Be.push(Cs(y,E,u)),Be.push(no),x===null){var A=Ee-C-Z+2*pu;Be.push(Ns(g,A,i))}else{var I=(Ee-C-Z-re)/2+2*pu;Be.push(Ns(g,I,i)),Be.push(no),Be.push(Cs(x,E,u)),Be.push(no),Be.push(Ns(g,I,i))}Be.push(no),Be.push(Cs(d,E,u))}var xe=i.havingBaseStyle(Se.TEXT),_e=Ie({positionType:"bottom",positionData:it,children:Be});return Bu(j(["delimsizing","mult"],[_e],xe),Se.TEXT,i,p)},Rs=80,Ks=.08,Ds=function(t,r,o,i,u){var p=h3(t,i,o),d=new Sr(t,p),x=new jn([d],{width:"400em",height:X(r),viewBox:"0 0 400000 "+o,preserveAspectRatio:"xMinYMin slice"});return _r(["hide-tail"],[x],u)},x6=function(t,r){var o=r.havingBaseSizing(),i=$2("\\surd",t*o.sizeMultiplier,V2,o),u=o.sizeMultiplier,p=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),d,x,g,y,k;return i.type==="small"?(y=1e3+1e3*p+Rs,t<1?u=1:t<1.4&&(u=.7),x=(1+p+Ks)/u,g=(1+p)/u,d=Ds("sqrtMain",x,y,p,r),d.style.minWidth="0.853em",k=.833/u):i.type==="large"?(y=(1e3+Rs)*Ta[i.size],g=(Ta[i.size]+p)/u,x=(Ta[i.size]+p+Ks)/u,d=Ds("sqrtSize"+i.size,x,y,p,r),d.style.minWidth="1.02em",k=1/u):(x=t+p+Ks,g=t+p,y=Math.floor(1e3*t+p)+Rs,d=Ds("sqrtTall",x,y,p,r),d.style.minWidth="0.742em",k=1.056),d.height=g,d.style.height=X(x),{span:d,advanceWidth:k,ruleWidth:(r.fontMetrics().sqrtRuleThickness+p)*u}},O2=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),g6=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),H2=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Ta=[0,1.2,1.8,2.4,3],j2=function(t,r,o,i,u){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),O2.has(t)||H2.has(t))return B2(t,r,!1,o,i,u);if(g6.has(t))return P2(t,Ta[r],!1,o,i,u);throw new U("Illegal delimiter: '"+t+"'")},v6=[{type:"small",style:Se.SCRIPTSCRIPT},{type:"small",style:Se.SCRIPT},{type:"small",style:Se.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],b6=[{type:"small",style:Se.SCRIPTSCRIPT},{type:"small",style:Se.SCRIPT},{type:"small",style:Se.TEXT},{type:"stack"}],V2=[{type:"small",style:Se.SCRIPTSCRIPT},{type:"small",style:Se.SCRIPT},{type:"small",style:Se.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],y6=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";var r=t.type;throw new Error("Add support for delim type '"+r+"' here.")},$2=function(t,r,o,i){for(var u=Math.min(2,3-i.style.size),p=u;p<o.length;p++){var d=o[p];if(d.type==="stack")break;var x=Ma(t,y6(d),"math"),g=x.height+x.depth;if(d.type==="small"){var y=i.havingBaseStyle(d.style);g*=y.sizeMultiplier}if(g>r)return d}return o[o.length-1]},fu=function(t,r,o,i,u,p){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var d;H2.has(t)?d=v6:O2.has(t)?d=V2:d=b6;var x=$2(t,r,d,i);return x.type==="small"?f6(t,x.style,o,i,u,p):x.type==="large"?B2(t,x.size,o,i,u,p):P2(t,r,o,i,u,p)},Is=function(t,r,o,i,u,p){var d=i.fontMetrics().axisHeight*i.sizeMultiplier,x=901,g=5/i.fontMetrics().ptPerEm,y=Math.max(r-d,o+d),k=Math.max(y/500*x,2*y-g);return fu(t,k,!0,i,u,p)},kf={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},w6=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Sf(a){return"isMiddle"in a}function To(a,t){var r=Eo(a);if(r&&w6.has(r.text))return r;throw r?new U("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",a):new U("Invalid delimiter type '"+a.type+"'",a)}ee({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(a,t)=>{var r=To(Ra(t[0]),a);return{type:"delimsizing",mode:a.parser.mode,size:kf[a.funcName].size,mclass:kf[a.funcName].mclass,delim:r.text}},htmlBuilder:(a,t)=>a.delim==="."?j([a.mclass]):j2(a.delim,a.size,t,a.mode,[a.mclass]),mathmlBuilder:a=>{var t=[];a.delim!=="."&&t.push(on(a.delim,a.mode));var r=new G("mo",t);a.mclass==="mopen"||a.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var o=X(Ta[a.size]);return r.setAttribute("minsize",o),r.setAttribute("maxsize",o),r}});function _f(a){if(!a.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ee({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(a,t)=>{var r=a.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new U("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:a.parser.mode,delim:To(t[0],a).text,color:r}}});ee({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(a,t)=>{var r=To(t[0],a),o=a.parser;++o.leftrightDepth;var i=o.parseExpression(!1);--o.leftrightDepth,o.expect("\\right",!1);var u=ze(o.parseFunction(),"leftright-right");return{type:"leftright",mode:o.mode,body:i,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(a,t)=>{_f(a);for(var r=vt(a.body,t,!0,["mopen","mclose"]),o=0,i=0,u=!1,p=0;p<r.length;p++){var d=r[p];Sf(d)?u=!0:(o=Math.max(r[p].height,o),i=Math.max(r[p].depth,i))}o*=t.sizeMultiplier,i*=t.sizeMultiplier;var x;if(a.left==="."?x=Ka(t,["mopen"]):x=Is(a.left,o,i,t,a.mode,["mopen"]),r.unshift(x),u)for(var g=1;g<r.length;g++){var y=r[g];if(Sf(y)){var k=y.isMiddle;r[g]=Is(k.delim,o,i,k.options,a.mode,[])}}var L;if(a.right===".")L=Ka(t,["mclose"]);else{var E=a.rightColor?t.withColor(a.rightColor):t;L=Is(a.right,o,i,E,a.mode,["mclose"])}return r.push(L),j(["minner"],r,t)},mathmlBuilder:(a,t)=>{_f(a);var r=Qt(a.body,t);if(a.left!=="."){var o=new G("mo",[on(a.left,a.mode)]);o.setAttribute("fence","true"),r.unshift(o)}if(a.right!=="."){var i=new G("mo",[on(a.right,a.mode)]);i.setAttribute("fence","true"),a.rightColor&&i.setAttribute("mathcolor",a.rightColor),r.push(i)}return Ku(r)}});ee({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(a,t)=>{var r=To(t[0],a);if(!a.parser.leftrightDepth)throw new U("\\middle without preceding \\left",r);return{type:"middle",mode:a.parser.mode,delim:r.text}},htmlBuilder:(a,t)=>{var r;return a.delim==="."?r=Ka(t,[]):(r=j2(a.delim,1,t,a.mode,[]),r.isMiddle={delim:a.delim,options:t}),r},mathmlBuilder:(a,t)=>{var r=a.delim==="\\vert"||a.delim==="|"?on("|","text"):on(a.delim,a.mode),o=new G("mo",[r]);return o.setAttribute("fence","true"),o.setAttribute("lspace","0.05em"),o.setAttribute("rspace","0.05em"),o}});var k6=(a,t)=>{var r=E0(Ke(a.body,t),t),o=a.label.slice(1),i=t.sizeMultiplier,u,p,d=$n(a.body);if(o==="sout")u=j(["katex-stretchy","katex-sout"]),u.height=t.fontMetrics().defaultRuleThickness/i,p=-.5*t.fontMetrics().xHeight;else if(o==="phase"){var x=nt({number:.6,unit:"pt"},t),g=nt({number:.35,unit:"ex"},t),y=t.havingBaseSizing();i=i/y.sizeMultiplier;var k=r.height+r.depth+x+g;r.style.paddingLeft=X(k/2+x);var L=Math.floor(1e3*k*i),E=f3(L),K=new jn([new Sr("phase",E)],{width:"400em",height:X(L/1e3),viewBox:"0 0 400000 "+L,preserveAspectRatio:"xMinYMin slice"});u=_r(["hide-tail"],[K],t),u.style.height=X(k),p=r.depth+x+g}else{/cancel/.test(o)?d||r.classes.push("cancel-pad"):o==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var C,F,P=0;/box/.test(o)?(P=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),C=t.fontMetrics().fboxsep+(o==="colorbox"?0:P),F=C):o==="angl"?(P=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),C=4*P,F=Math.max(0,.25-r.depth)):(C=d?.2:0,F=C),u=X3(r,o,C,F,t),/fbox|boxed|fcolorbox/.test(o)?(u.style.borderStyle="solid",u.style.borderWidth=X(P)):o==="angl"&&P!==.049&&(u.style.borderTopWidth=X(P),u.style.borderRightWidth=X(P)),p=r.depth+F,a.backgroundColor&&(u.style.backgroundColor=a.backgroundColor,a.borderColor&&(u.style.borderColor=a.borderColor))}var V;if(a.backgroundColor)V=Ie({positionType:"individualShift",children:[{type:"elem",elem:u,shift:p},{type:"elem",elem:r,shift:0}]});else{var Z=/cancel|phase/.test(o)?["svg-align"]:[];V=Ie({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:p,wrapperClasses:Z}]})}return/cancel/.test(o)&&(V.height=r.height,V.depth=r.depth),/cancel/.test(o)&&!d?j(["mord","cancel-lap"],[V],t):j(["mord"],[V],t)},S6=(a,t)=>{var r,o=new G(a.label.includes("colorbox")?"mpadded":"menclose",[Ve(a.body,t)]);switch(a.label){case"\\cancel":o.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":o.setAttribute("notation","downdiagonalstrike");break;case"\\phase":o.setAttribute("notation","phasorangle");break;case"\\sout":o.setAttribute("notation","horizontalstrike");break;case"\\fbox":o.setAttribute("notation","box");break;case"\\angl":o.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,o.setAttribute("width","+"+2*r+"pt"),o.setAttribute("height","+"+2*r+"pt"),o.setAttribute("lspace",r+"pt"),o.setAttribute("voffset",r+"pt"),a.label==="\\fcolorbox"){var i=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);o.setAttribute("style","border: "+X(i)+" solid "+a.borderColor)}break;case"\\xcancel":o.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return a.backgroundColor&&o.setAttribute("mathbackground",a.backgroundColor),o};ee({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(a,t,r){var o=a.parser,i=a.funcName,u=ze(t[0],"color-token").color,p=t[1];return{type:"enclose",mode:o.mode,label:i,backgroundColor:u,body:p}},htmlBuilder:k6,mathmlBuilder:S6});ee({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(a,t,r){var o=a.parser,i=a.funcName,u=ze(t[0],"color-token").color,p=ze(t[1],"color-token").color,d=t[2];return{type:"enclose",mode:o.mode,label:i,backgroundColor:p,borderColor:u,body:d}}});ee({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(a,t){var r=a.parser;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});ee({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(a,t){var r=a.parser,o=a.funcName,i=t[0];return{type:"enclose",mode:r.mode,label:o,body:i}}});ee({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(a,t){var r=a.parser,o=a.funcName;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var i=t[0];return{type:"enclose",mode:r.mode,label:o,body:i}}});ee({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(a,t){var r=a.parser;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var U2={};function zn(a){for(var t=a.type,r=a.names,o=a.props,i=a.handler,u=a.htmlBuilder,p=a.mathmlBuilder,d={type:t,numArgs:o.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:i},x=0;x<r.length;++x)U2[r[x]]=d;u&&(Ca[t]=u),p&&(Na[t]=p)}var G2={};function w(a,t){G2[a]=t}class jt{constructor(t,r,o){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=o}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new jt(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class Wt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new Wt(r,jt.range(this,t))}}function Lf(a){var t=[];a.consumeSpaces();var r=a.fetch().text;for(r==="\\relax"&&(a.consume(),a.consumeSpaces(),r=a.fetch().text);r==="\\hline"||r==="\\hdashline";)a.consume(),t.push(r==="\\hdashline"),a.consumeSpaces(),r=a.fetch().text;return t}var qo=a=>{var t=a.parser.settings;if(!t.displayMode)throw new U("{"+a.envName+"} can be used only in display mode.")},_6=new Set(["gather","gather*"]);function Pu(a){if(!a.includes("ed"))return!a.includes("*")}function Er(a,t,r){var o=t.hskipBeforeAndAfter,i=t.addJot,u=t.cols,p=t.arraystretch,d=t.colSeparationType,x=t.autoTag,g=t.singleRow,y=t.emptySingleRow,k=t.maxNumCols,L=t.leqno;if(a.gullet.beginGroup(),g||a.gullet.macros.set("\\cr","\\\\\\relax"),!p){var E=a.gullet.expandMacroAsText("\\arraystretch");if(E==null)p=1;else if(p=parseFloat(E),!p||p<0)throw new U("Invalid \\arraystretch: "+E)}a.gullet.beginGroup();var K=[],C=[K],F=[],P=[],V=x!=null?[]:void 0;function Z(){x&&a.gullet.macros.set("\\@eqnsw","1",!0)}function re(){V&&(a.gullet.macros.get("\\df@tag")?(V.push(a.subparse([new Wt("\\df@tag")])),a.gullet.macros.set("\\df@tag",void 0,!0)):V.push(!!x&&a.gullet.macros.get("\\@eqnsw")==="1"))}for(Z(),P.push(Lf(a));;){var ue=a.parseExpression(!1,g?"\\end":"\\\\");a.gullet.endGroup(),a.gullet.beginGroup();var ce={type:"ordgroup",mode:a.mode,body:ue};r&&(ce={type:"styling",mode:a.mode,style:r,resetFont:!0,body:[ce]}),K.push(ce);var me=a.fetch().text;if(me==="&"){if(k&&K.length===k){if(g||d)throw new U("Too many tab characters: &",a.nextToken);a.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}a.consume()}else if(me==="\\end"){re(),K.length===1&&ce.type==="styling"&&ce.body.length===1&&ce.body[0].type==="ordgroup"&&ce.body[0].body.length===0&&(C.length>1||!y)&&!Array.isArray(V==null?void 0:V[V.length-1])&&!(x&&(V==null?void 0:V[V.length-1])===!0)&&C.pop(),P.length<C.length+1&&P.push([]);break}else if(me==="\\\\"){a.consume();var ge=void 0;a.gullet.future().text!==" "&&(ge=a.parseSizeGroup(!0)),F.push(ge?ge.value:null),re(),P.push(Lf(a)),K=[],C.push(K),Z()}else throw new U("Expected & or \\\\ or \\cr or \\end",a.nextToken)}return a.gullet.endGroup(),a.gullet.endGroup(),{type:"array",mode:a.mode,addJot:i,arraystretch:p,body:C,cols:u,rowGaps:F,hskipBeforeAndAfter:o,hLinesBeforeRow:P,colSeparationType:d,tags:V,leqno:L}}function Ou(a){return a.slice(0,1)==="d"?"display":"text"}var En=function(t,r){var o,i,u=t.body.length,p=t.hLinesBeforeRow,d=0,x=new Array(u),g=[],y=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),k=1/r.fontMetrics().ptPerEm,L=5*k;if(t.colSeparationType&&t.colSeparationType==="small"){var E=r.havingStyle(Se.SCRIPT).sizeMultiplier;L=.2778*(E/r.sizeMultiplier)}var K=t.colSeparationType==="CD"?nt({number:3,unit:"ex"},r):12*k,C=3*k,F=t.arraystretch*K,P=.7*F,V=.3*F,Z=0;function re(qn){for(var Tr=0;Tr<qn.length;++Tr)Tr>0&&(Z+=.25),g.push({pos:Z,isDashed:qn[Tr]})}for(re(p[0]),o=0;o<t.body.length;++o){var ue=t.body[o],ce=P,me=V;d<ue.length&&(d=ue.length);var ge={cells:new Array(ue.length),height:0,depth:0,pos:0};for(i=0;i<ue.length;++i){var Ee=Ke(ue[i],r);me<Ee.depth&&(me=Ee.depth),ce<Ee.height&&(ce=Ee.height),ge.cells[i]=Ee}var Ae=t.rowGaps[o],it=0;Ae&&(it=nt(Ae,r),it>0&&(it+=V,me<it&&(me=it),it=0)),t.addJot&&o<t.body.length-1&&(me+=C),ge.height=ce,ge.depth=me,Z+=ce,ge.pos=Z,Z+=me+it,x[o]=ge,re(p[o+1])}var Be=Z/2+r.fontMetrics().axisHeight,Qe=t.cols||[],rt=[],at,Ye,Oe=[];if(t.tags&&t.tags.some(qn=>qn))for(o=0;o<u;++o){var Y=x[o],pe=Y.pos-Be,J=t.tags[o],A=void 0;J===!0?A=j(["eqn-num"],[],r):J===!1?A=j([],[],r):A=j([],vt(J,r,!0),r),A.depth=Y.depth,A.height=Y.height,Oe.push({type:"elem",elem:A,shift:pe})}for(i=0,Ye=0;i<d||Ye<Qe.length;++i,++Ye){for(var I,xe=Qe[Ye],_e=!0;((Me=xe)==null?void 0:Me.type)==="separator";){var Me;if(_e||(at=j(["arraycolsep"],[]),at.style.width=X(r.fontMetrics().doubleRuleSep),rt.push(at)),xe.separator==="|"||xe.separator===":"){var Te=xe.separator==="|"?"solid":"dashed",Fe=j(["vertical-separator"],[],r);Fe.style.height=X(Z),Fe.style.borderRightWidth=X(y),Fe.style.borderRightStyle=Te,Fe.style.margin="0 "+X(-y/2);var Ne=Z-Be;Ne&&(Fe.style.verticalAlign=X(-Ne)),rt.push(Fe)}else throw new U("Invalid separator type: "+xe.separator);Ye++,xe=Qe[Ye],_e=!1}if(!(i>=d)){var De=void 0;if(i>0||t.hskipBeforeAndAfter){var _t,Mr;De=(_t=(Mr=xe)==null?void 0:Mr.pregap)!=null?_t:L,De!==0&&(at=j(["arraycolsep"],[]),at.style.width=X(De),rt.push(at))}var C0=[];for(o=0;o<u;++o){var Tn=x[o],Wn=Tn.cells[i];if(Wn){var Ba=Tn.pos-Be;Wn.depth=Tn.depth,Wn.height=Tn.height,C0.push({type:"elem",elem:Wn,shift:Ba})}}var Pa=Ie({positionType:"individualShift",children:C0}),N0=j(["col-align-"+(((I=xe)==null?void 0:I.align)||"c")],[Pa]);if(rt.push(N0),i<d-1||t.hskipBeforeAndAfter){var R0,Qr;De=(R0=(Qr=xe)==null?void 0:Qr.postgap)!=null?R0:L,De!==0&&(at=j(["arraycolsep"],[]),at.style.width=X(De),rt.push(at))}}}var gn=j(["mtable"],rt);if(g.length>0){for(var Xn=z0("katex-hline",r,y),K0=z0("katex-hdashline",r,y),Yr=[{type:"elem",elem:gn,shift:0}];g.length>0;){var D0=g.pop(),I0=D0.pos-Be;D0.isDashed?Yr.push({type:"elem",elem:K0,shift:I0}):Yr.push({type:"elem",elem:Xn,shift:I0})}gn=Ie({positionType:"individualShift",children:Yr})}if(Oe.length===0)return j(["mord"],[gn],r);var Oa=Ie({positionType:"individualShift",children:Oe}),B0=j(["katex-tag"],[Oa],r);return Gn([gn,B0])},L6={c:"center ",l:"left ",r:"right "},Mn=function(t,r){for(var o=[],i=new G("mtd",[],["mtr-glue"]),u=new G("mtd",[],["mml-eqn-num"]),p=0;p<t.body.length;p++){for(var d=t.body[p],x=[],g=0;g<d.length;g++)x.push(new G("mtd",[Ve(d[g],r)]));t.tags&&t.tags[p]&&(x.unshift(i),x.push(i),t.leqno?x.unshift(u):x.push(u)),o.push(new G("mtr",x))}var y=new G("mtable",o),k=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);y.setAttribute("rowspacing",X(k));var L="",E="";if(t.cols&&t.cols.length>0){var K=t.cols,C="",F=!1,P=0,V=K.length;K[0].type==="separator"&&(L+="top ",P=1),K[K.length-1].type==="separator"&&(L+="bottom ",V-=1);for(var Z=P;Z<V;Z++){var re=K[Z];re.type==="align"?(E+=L6[re.align],F&&(C+="none "),F=!0):re.type==="separator"&&F&&(C+=re.separator==="|"?"solid ":"dashed ",F=!1)}y.setAttribute("columnalign",E.trim()),/[sd]/.test(C)&&y.setAttribute("columnlines",C.trim())}if(t.colSeparationType==="align"){for(var ue=t.cols||[],ce="",me=1;me<ue.length;me++)ce+=me%2?"0em ":"1em ";y.setAttribute("columnspacing",ce.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?y.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?y.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?y.setAttribute("columnspacing","0.5em"):y.setAttribute("columnspacing","1em");var ge="",Ee=t.hLinesBeforeRow;L+=Ee[0].length>0?"left ":"",L+=Ee[Ee.length-1].length>0?"right ":"";for(var Ae=1;Ae<Ee.length-1;Ae++)ge+=Ee[Ae].length===0?"none ":Ee[Ae][0]?"dashed ":"solid ";return/[sd]/.test(ge)&&y.setAttribute("rowlines",ge.trim()),L!==""&&(y=new G("menclose",[y]),y.setAttribute("notation",L.trim())),t.arraystretch&&t.arraystretch<1&&(y=new G("mstyle",[y]),y.setAttribute("scriptlevel","1")),y},W2=function(t,r){t.envName.includes("ed")||qo(t);var o=[],i=t.envName==="split",u=Er(t.parser,{cols:o,addJot:!0,autoTag:i?void 0:Pu(t.envName),emptySingleRow:!0,colSeparationType:t.envName.includes("at")?"alignat":"align",maxNumCols:i?2:void 0,leqno:t.parser.settings.leqno},"display"),p=0,d=0,x={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){var g="Number of columns should be a positive integer",y=Iu(r[0],g);if(!/^[0-9]+$/.test(y)||Number(y)<1)throw new U(g,r[0]);p=Number(y),d=p*2}var k=!d;u.body.forEach(function(C){for(var F=1;F<C.length;F+=2){var P=ze(C[F],"styling"),V=ze(P.body[0],"ordgroup");V.body.unshift(x)}if(k)d<C.length&&(d=C.length);else{var Z=C.length/2;if(p<Z)throw new U("Too many math in a row: "+("expected "+p+", but got "+Z),C[0])}});for(var L=0;L<d;++L){var E="r",K=0;L%2===1?E="l":L>0&&k&&(K=1),o[L]={type:"align",align:E,pregap:K,postgap:0}}return u.colSeparationType=k?"align":"alignat",u};zn({type:"array",names:["array","darray"],props:{numArgs:1},handler(a,t){var r=Eo(t[0]),o=r?[t[0]]:ze(t[0],"ordgroup").body,i=o.map(function(p){var d=zo(p),x=d.text;if("lcr".includes(x))return{type:"align",align:x};if(x==="|")return{type:"separator",separator:"|"};if(x===":")return{type:"separator",separator:":"};throw new U("Unknown column alignment: "+x,p)}),u={cols:i,hskipBeforeAndAfter:!0,maxNumCols:i.length};return Er(a.parser,u,Ou(a.envName))},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(a){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[a.envName.replace("*","")],r="c",o={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(a.envName.charAt(a.envName.length-1)==="*"){var i=a.parser;if(i.consumeSpaces(),i.fetch().text==="["){if(i.consume(),i.consumeSpaces(),r=i.fetch().text,!"lcr".includes(r))throw new U("Expected l or c or r",i.nextToken);i.consume(),i.consumeSpaces(),i.expect("]"),i.consume(),o.cols=[{type:"align",align:r}]}}var u=Er(a.parser,o,Ou(a.envName)),p=Math.max(0,...u.body.map(d=>d.length));return u.cols=new Array(p).fill({type:"align",align:r}),t?{type:"leftright",mode:a.mode,body:[u],left:t[0],right:t[1],rightColor:void 0}:u},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(a){var t={arraystretch:.5},r=Er(a.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["subarray"],props:{numArgs:1},handler(a,t){var r=Eo(t[0]),o=r?[t[0]]:ze(t[0],"ordgroup").body,i=o.map(function(d){var x=zo(d),g=x.text;if("lc".includes(g))return{type:"align",align:g};throw new U("Unknown column alignment: "+g,d)});if(i.length>1)throw new U("{subarray} can contain only one column");var u={cols:i,hskipBeforeAndAfter:!1,arraystretch:.5},p=Er(a.parser,u,"script");if(p.body.length>0&&p.body[0].length>1)throw new U("{subarray} can contain only one column");return p},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(a){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Er(a.parser,t,Ou(a.envName));return{type:"leftright",mode:a.mode,body:[r],left:a.envName.includes("r")?".":"\\{",right:a.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:W2,htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(a){_6.has(a.envName)&&qo(a);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Pu(a.envName),emptySingleRow:!0,leqno:a.parser.settings.leqno};return Er(a.parser,t,"display")},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:W2,htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(a){qo(a);var t={autoTag:Pu(a.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:a.parser.settings.leqno};return Er(a.parser,t,"display")},htmlBuilder:En,mathmlBuilder:Mn});zn({type:"array",names:["CD"],props:{numArgs:0},handler(a){return qo(a),s6(a.parser)},htmlBuilder:En,mathmlBuilder:Mn});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");ee({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(a,t){throw new U(a.funcName+" valid only within array environment")}});var zf=U2;ee({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(a,t){var r=a.parser,o=a.funcName,i=t[0];if(i.type!=="ordgroup")throw new U("Invalid environment name",i);var u=Iu(i,"Environment name should contain only text characters and spaces",!0);if(o==="\\begin"){if(!Object.prototype.hasOwnProperty.call(zf,u))throw new U("No such environment: "+u,i);var p=zf[u],d=r.parseArguments("\\begin{"+u+"}",p),x=d.args,g=d.optArgs,y={mode:r.mode,envName:u,parser:r},k=p.handler(y,x,g);r.expect("\\end",!1);var L=r.nextToken,E=ze(r.parseFunction(),"environment");if(E.name!==u)throw new U("Mismatch: \\begin{"+u+"} matched by \\end{"+E.name+"}",L);return k}return{type:"environment",mode:r.mode,name:u,nameGroup:i}}});var z6=(a,t)=>{var r=a.font,o=t.withFont(r);return Ke(a.body,o)},E6=(a,t)=>{var r=a.font,o=t.withFont(r);return Ve(a.body,o)},Ef={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};ee({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=Ra(t[0]),u=o in Ef?Ef[o]:o;return{type:"font",mode:r.mode,font:u.slice(1),body:i}},htmlBuilder:z6,mathmlBuilder:E6});ee({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(a,t)=>{var r=a.parser,o=t[0];return{type:"mclass",mode:r.mode,mclass:Mo(o),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:o}],isCharacterBox:$n(o)}}});ee({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=a.breakOnTokenText,u=r.mode,p=r.parseExpression(!0,i);return{type:"font",mode:u,font:"math"+o.slice(1),body:{type:"ordgroup",mode:r.mode,body:p}}}});var M6=(a,t)=>{var r=t.style,o=r.fracNum(),i=r.fracDen(),u;u=t.havingStyle(o);var p=Ke(a.numer,u,t);if(a.continued){var d=8.5/t.fontMetrics().ptPerEm,x=3.5/t.fontMetrics().ptPerEm;p.height=p.height<d?d:p.height,p.depth=p.depth<x?x:p.depth}u=t.havingStyle(i);var g=Ke(a.denom,u,t),y,k,L;a.hasBarLine?(a.barSize?(k=nt(a.barSize,t),y=z0("frac-line",t,k)):y=z0("frac-line",t),k=y.height,L=y.height):(y=null,k=0,L=t.fontMetrics().defaultRuleThickness);var E,K,C;r.size===Se.DISPLAY.size?(E=t.fontMetrics().num1,k>0?K=3*L:K=7*L,C=t.fontMetrics().denom1):(k>0?(E=t.fontMetrics().num2,K=L):(E=t.fontMetrics().num3,K=3*L),C=t.fontMetrics().denom2);var F;if(y){var V=t.fontMetrics().axisHeight;E-p.depth-(V+.5*k)<K&&(E+=K-(E-p.depth-(V+.5*k))),V-.5*k-(g.height-C)<K&&(C+=K-(V-.5*k-(g.height-C)));var Z=-(V-.5*k);F=Ie({positionType:"individualShift",children:[{type:"elem",elem:g,shift:C},{type:"elem",elem:y,shift:Z},{type:"elem",elem:p,shift:-E}]})}else{var P=E-p.depth-(g.height-C);P<K&&(E+=.5*(K-P),C+=.5*(K-P)),F=Ie({positionType:"individualShift",children:[{type:"elem",elem:g,shift:C},{type:"elem",elem:p,shift:-E}]})}u=t.havingStyle(r),F.height*=u.sizeMultiplier/t.sizeMultiplier,F.depth*=u.sizeMultiplier/t.sizeMultiplier;var re;r.size===Se.DISPLAY.size?re=t.fontMetrics().delim1:r.size===Se.SCRIPTSCRIPT.size?re=t.havingStyle(Se.SCRIPT).fontMetrics().delim2:re=t.fontMetrics().delim2;var ue,ce;return a.leftDelim==null?ue=Ka(t,["mopen"]):ue=fu(a.leftDelim,re,!0,t.havingStyle(r),a.mode,["mopen"]),a.continued?ce=j([]):a.rightDelim==null?ce=Ka(t,["mclose"]):ce=fu(a.rightDelim,re,!0,t.havingStyle(r),a.mode,["mclose"]),j(["mord"].concat(u.sizingClasses(t)),[ue,j(["mfrac"],[F]),ce],t)},T6=(a,t)=>{var r=new G("mfrac",[Ve(a.numer,t),Ve(a.denom,t)]);if(!a.hasBarLine)r.setAttribute("linethickness","0px");else if(a.barSize){var o=nt(a.barSize,t);r.setAttribute("linethickness",X(o))}if(a.leftDelim!=null||a.rightDelim!=null){var i=[];if(a.leftDelim!=null){var u=new G("mo",[new dt(a.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),i.push(u)}if(i.push(r),a.rightDelim!=null){var p=new G("mo",[new dt(a.rightDelim.replace("\\",""))]);p.setAttribute("fence","true"),i.push(p)}return Ku(i)}return r},X2=(a,t)=>{if(!t)return a;var r={type:"styling",mode:a.mode,style:t,body:[a]};return r};ee({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=t[0],u=t[1],p,d=null,x=null;switch(o){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":p=!0;break;case"\\\\atopfrac":p=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":p=!1,d="(",x=")";break;case"\\\\bracefrac":p=!1,d="\\{",x="\\}";break;case"\\\\brackfrac":p=!1,d="[",x="]";break;default:throw new Error("Unrecognized genfrac command")}var g=o==="\\cfrac",y=null;return g||o.startsWith("\\d")?y="display":o.startsWith("\\t")&&(y="text"),X2({type:"genfrac",mode:r.mode,numer:i,denom:u,continued:g,hasBarLine:p,leftDelim:d,rightDelim:x,barSize:null},y)},htmlBuilder:M6,mathmlBuilder:T6});ee({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(a){var t=a.parser,r=a.funcName,o=a.token,i;switch(r){case"\\over":i="\\frac";break;case"\\choose":i="\\binom";break;case"\\atop":i="\\\\atopfrac";break;case"\\brace":i="\\\\bracefrac";break;case"\\brack":i="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:i,token:o}}});var Mf=["display","text","script","scriptscript"],Tf=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};ee({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(a,t){var r=a.parser,o=t[4],i=t[5],u=Ra(t[0]),p=u.type==="atom"&&u.family==="open"?Tf(u.text):null,d=Ra(t[1]),x=d.type==="atom"&&d.family==="close"?Tf(d.text):null,g=ze(t[2],"size"),y,k=null;g.isBlank?y=!0:(k=g.value,y=k.number>0);var L=null,E=t[3];if(E.type==="ordgroup"){if(E.body.length>0){var K=ze(E.body[0],"textord");L=Mf[Number(K.text)]}}else E=ze(E,"textord"),L=Mf[Number(E.text)];return X2({type:"genfrac",mode:r.mode,numer:o,denom:i,continued:!1,hasBarLine:y,barSize:k,leftDelim:p,rightDelim:x},L)}});ee({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(a,t){var r=a.parser;a.funcName;var o=a.token;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ze(t[0],"size").value,token:o}}});ee({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(a,t)=>{var r=a.parser;a.funcName;var o=t[0],i=ze(t[1],"infix").size;if(!i)throw new Error("\\\\abovefrac expected size, but got "+String(i));var u=t[2],p=i.number>0;return{type:"genfrac",mode:r.mode,numer:o,denom:u,continued:!1,hasBarLine:p,barSize:i,leftDelim:null,rightDelim:null}}});var Z2=(a,t)=>{var r=t.style,o,i;a.type==="supsub"?(o=a.sup?Ke(a.sup,t.havingStyle(r.sup()),t):Ke(a.sub,t.havingStyle(r.sub()),t),i=ze(a.base,"horizBrace")):i=ze(a,"horizBrace");var u=Ke(i.base,t.havingBaseStyle(Se.DISPLAY)),p=Lo(i,t),d;if(i.isOver?d=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:p,wrapperClasses:["svg-align"]}]}):d=Ie({positionType:"bottom",positionData:u.depth+.1+p.height,children:[{type:"elem",elem:p,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:u}]}),o){var x=j(["minner",i.isOver?"mover":"munder"],[d],t);i.isOver?d=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:x},{type:"kern",size:.2},{type:"elem",elem:o}]}):d=Ie({positionType:"bottom",positionData:x.depth+.2+o.height+o.depth,children:[{type:"elem",elem:o},{type:"kern",size:.2},{type:"elem",elem:x}]})}return j(["minner",i.isOver?"mover":"munder"],[d],t)},q6=(a,t)=>{var r=_o(a.label);return new G(a.isOver?"mover":"munder",[Ve(a.base,t),r])};ee({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(a,t){var r=a.parser,o=a.funcName;return{type:"horizBrace",mode:r.mode,label:o,isOver:o.includes("\\over"),base:t[0]}},htmlBuilder:Z2,mathmlBuilder:q6});ee({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=t[1],i=ze(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:i})?{type:"href",mode:r.mode,href:i,body:ft(o)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(a,t)=>{var r=vt(a.body,t,!1);return F3(a.href,[],r,t)},mathmlBuilder:(a,t)=>{var r=Lr(a.body,t);return r instanceof G||(r=new G("mrow",[r])),r.setAttribute("href",a.href),r}});ee({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=ze(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:o}))return r.formatUnsupportedCmd("\\url");for(var i=[],u=0;u<o.length;u++){var p=o[u];p==="~"&&(p="\\textasciitilde"),i.push({type:"textord",mode:"text",text:p})}var d={type:"text",mode:r.mode,font:"\\texttt",body:i};return{type:"href",mode:r.mode,href:o,body:ft(d)}}});ee({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(a,t){var r=a.parser;return{type:"hbox",mode:r.mode,body:ft(t[0])}},htmlBuilder(a,t){var r=vt(a.body,t.withFont(""),!1);return Gn(r)},mathmlBuilder(a,t){return new G("mrow",Qt(a.body,t.withFont("")))}});ee({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=a.funcName;a.token;var i=ze(t[0],"raw").string,u=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var p,d={};switch(o){case"\\htmlClass":d.class=i,p={command:"\\htmlClass",class:i};break;case"\\htmlId":d.id=i,p={command:"\\htmlId",id:i};break;case"\\htmlStyle":d.style=i,p={command:"\\htmlStyle",style:i};break;case"\\htmlData":{for(var x="{,}",g=[],y="",k=0;k<i.length;k++)i.startsWith(x,k)?(y+=",",k+=x.length-1):i[k]===","?(g.push(y),y=""):y+=i[k];g.push(y);for(var L=0;L<g.length;L++){var E=g[L],K=E.indexOf("=");if(K<0)throw new U("\\htmlData key/value '"+E+"' missing equals sign");var C=E.slice(0,K),F=E.slice(K+1);d["data-"+C.trim()]=F}p={command:"\\htmlData",attributes:d};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(p)?{type:"html",mode:r.mode,attributes:d,body:ft(u)}:r.formatUnsupportedCmd(o)},htmlBuilder:(a,t)=>{var r=vt(a.body,t,!1),o=["enclosing"];a.attributes.class&&o.push(...a.attributes.class.trim().split(/\s+/));var i=j(o,r,t);for(var u of Object.entries(a.attributes)){var p=u[0],d=u[1];p!=="class"&&i.setAttribute(p,d)}return i},mathmlBuilder:(a,t)=>Lr(a.body,t)});ee({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(a,t)=>{var r=a.parser;return{type:"htmlmathml",mode:r.mode,html:ft(t[0]),mathml:ft(t[1])}},htmlBuilder:(a,t)=>{var r=vt(a.html,t,!1);return Gn(r)},mathmlBuilder:(a,t)=>Lr(a.mathml,t)});var Bs=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new U("Invalid size: '"+t+"' in \\includegraphics");var o={number:+(r[1]+r[2]),unit:r[3]};if(!b2(o))throw new U("Invalid unit: '"+o.unit+"' in \\includegraphics.");return o};ee({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(a,t,r)=>{var o=a.parser,i={number:0,unit:"em"},u={number:.9,unit:"em"},p={number:0,unit:"em"},d="";if(r[0])for(var x=ze(r[0],"raw").string,g=x.split(","),y=0;y<g.length;y++){var k=g[y].split("=");if(k.length===2){var L=k[1].trim();switch(k[0].trim()){case"alt":d=L;break;case"width":i=Bs(L);break;case"height":u=Bs(L);break;case"totalheight":p=Bs(L);break;default:throw new U("Invalid key: '"+k[0]+"' in \\includegraphics.")}}}var E=ze(t[0],"url").url;return d===""&&(d=E,d=d.replace(/^.*[\\/]/,""),d=d.substring(0,d.lastIndexOf("."))),o.settings.isTrusted({command:"\\includegraphics",url:E})?{type:"includegraphics",mode:o.mode,alt:d,width:i,height:u,totalheight:p,src:E}:o.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(a,t)=>{var r=nt(a.height,t),o=0;a.totalheight.number>0&&(o=nt(a.totalheight,t)-r);var i=0;a.width.number>0&&(i=nt(a.width,t));var u={height:X(r+o)};i>0&&(u.width=X(i)),o>0&&(u.verticalAlign=X(-o));var p=new y3(a.src,a.alt,u);return p.height=r,p.depth=o,p},mathmlBuilder:(a,t)=>{var r=new G("mglyph",[]);r.setAttribute("alt",a.alt);var o=nt(a.height,t),i=0;if(a.totalheight.number>0&&(i=nt(a.totalheight,t)-o,r.setAttribute("valign",X(-i))),r.setAttribute("height",X(o+i)),a.width.number>0){var u=nt(a.width,t);r.setAttribute("width",X(u))}return r.setAttribute("src",a.src),r}});ee({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(a,t){var r=a.parser,o=a.funcName,i=ze(t[0],"size");if(r.settings.strict){var u=o[1]==="m",p=i.value.unit==="mu";u?(p||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" supports only mu units, "+("not "+i.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" works only in math mode")):p&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+o+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:i.value}},htmlBuilder(a,t){return L2(a.dimension,t)},mathmlBuilder(a,t){var r=nt(a.dimension,t);return new A2(r)}});ee({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=t[0];return{type:"lap",mode:r.mode,alignment:o.slice(5),body:i}},htmlBuilder:(a,t)=>{var r;a.alignment==="clap"?(r=j([],[Ke(a.body,t)]),r=j(["katex-inner"],[r],t)):r=j(["katex-inner"],[Ke(a.body,t)]);var o=j(["katex-fix"],[]),i=j([a.alignment],[r,o],t),u=j(["katex-strut"]);return u.style.height=X(i.height+i.depth),i.depth&&(u.style.verticalAlign=X(-i.depth)),i.children.unshift(u),i=j(["katex-thinbox"],[i],t),j(["mord","katex-vbox"],[i],t)},mathmlBuilder:(a,t)=>{var r=new G("mpadded",[Ve(a.body,t)]);if(a.alignment!=="rlap"){var o=a.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",o+"width")}return r.setAttribute("width","0px"),r}});ee({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(a,t){var r=a.funcName,o=a.parser,i=o.mode;o.switchMode("math");var u=r==="\\("?"\\)":"$",p=o.parseExpression(!1,u);return o.expect(u),o.switchMode(i),{type:"styling",mode:o.mode,style:"text",resetFont:!0,body:p}}});ee({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(a,t){throw new U("Mismatched "+a.funcName)}});var qf=(a,t)=>{switch(t.style.size){case Se.DISPLAY.size:return a.display;case Se.TEXT.size:return a.text;case Se.SCRIPT.size:return a.script;case Se.SCRIPTSCRIPT.size:return a.scriptscript;default:return a.text}};ee({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(a,t)=>{var r=a.parser;return{type:"mathchoice",mode:r.mode,display:ft(t[0]),text:ft(t[1]),script:ft(t[2]),scriptscript:ft(t[3])}},htmlBuilder:(a,t)=>{var r=qf(a,t),o=vt(r,t,!1);return Gn(o)},mathmlBuilder:(a,t)=>{var r=qf(a,t);return Lr(r,t)}});var Q2=(a,t,r,o,i,u,p)=>{a=j([],[a]);var d=r&&$n(r),x,g;if(t){var y=Ke(t,o.havingStyle(i.sup()),o);g={elem:y,kern:Math.max(o.fontMetrics().bigOpSpacing1,o.fontMetrics().bigOpSpacing3-y.depth)}}if(r){var k=Ke(r,o.havingStyle(i.sub()),o);x={elem:k,kern:Math.max(o.fontMetrics().bigOpSpacing2,o.fontMetrics().bigOpSpacing4-k.height)}}var L;if(g&&x){var E=o.fontMetrics().bigOpSpacing5+x.elem.height+x.elem.depth+x.kern+a.depth+p;L=Ie({positionType:"bottom",positionData:E,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:x.elem,marginLeft:X(-u)},{type:"kern",size:x.kern},{type:"elem",elem:a},{type:"kern",size:g.kern},{type:"elem",elem:g.elem,marginLeft:X(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else if(x){var K=a.height-p;L=Ie({positionType:"top",positionData:K,children:[{type:"kern",size:o.fontMetrics().bigOpSpacing5},{type:"elem",elem:x.elem,marginLeft:X(-u)},{type:"kern",size:x.kern},{type:"elem",elem:a}]})}else if(g){var C=a.depth+p;L=Ie({positionType:"bottom",positionData:C,children:[{type:"elem",elem:a},{type:"kern",size:g.kern},{type:"elem",elem:g.elem,marginLeft:X(u)},{type:"kern",size:o.fontMetrics().bigOpSpacing5}]})}else return a;var F=[L];if(x&&u!==0&&!d){var P=j(["mspace"],[],o);P.style.marginRight=X(u),F.unshift(P)}return j(["mop","op-limits"],F,o)},Y2=new Set(["\\smallint"]),J2=(a,t)=>{var r,o,i=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=ze(a.base,"op"),i=!0):u=ze(a,"op");var p=t.style,d=!1;p.size===Se.DISPLAY.size&&u.symbol&&!Y2.has(u.name)&&(d=!0);var x,g;if(u.symbol){var y=d?"Size2-Regular":"Size1-Regular",k="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(k=u.name.slice(1),u.name=k==="oiint"?"\\iint":"\\iiint"),x=Ct(u.name,y,"math",t,["mop","op-symbol",d?"large-op":"small-op"]),g=x.italic,k.length>0){var L=E2(k+"Size"+(d?"2":"1"),t);x=Ie({positionType:"individualShift",children:[{type:"elem",elem:x,shift:0},{type:"elem",elem:L,shift:d?.08:0}]}),u.name="\\"+k,x.classes.unshift("mop"),x.italic=g}}else if(u.body){var E=vt(u.body,t,!0);E.length===1&&E[0]instanceof Xt?(x=E[0],x.classes[0]="mop"):x=j(["mop"],E,t)}else{for(var K=[],C=1;C<u.name.length;C++)K.push(Nu(u.name[C],u.mode,t));x=j(["mop"],K,t)}var F=0,P=0;if((x instanceof Xt||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift){var V;F=(x.height-x.depth)/2-t.fontMetrics().axisHeight,P=(V=x.italic)!=null?V:0}return i?Q2(x,r,o,t,p,P,F):(F&&(x.style.position="relative",x.style.top=X(F)),x)},A6=(a,t)=>{var r;if(a.symbol)r=new G("mo",[on(a.name,a.mode)]),Y2.has(a.name)&&r.setAttribute("largeop","false");else if(a.body)r=new G("mo",Qt(a.body,t));else{r=new G("mi",[new dt(a.name.slice(1))]);var o=new G("mo",[on("⁡","text")]);a.parentIsSupSub?r=new G("mrow",[r,o]):r=q2([r,o])}return r},F6={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ee({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=o;return i.length===1&&(i=F6[i]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:J2,mathmlBuilder:A6});ee({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(a,t)=>{var r=a.parser,o=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:ft(o)}}});var C6={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ee({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(a){var t=a.parser,r=a.funcName;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}}});ee({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(a){var t=a.parser,r=a.funcName;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}}});ee({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(a){var t=a.parser,r=a.funcName,o=r;return o.length===1&&(o=C6[o]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:o}}});var ed=(a,t)=>{var r,o,i=!1,u;a.type==="supsub"?(r=a.sup,o=a.sub,u=ze(a.base,"operatorname"),i=!0):u=ze(a,"operatorname");var p;if(u.body.length>0){for(var d=u.body.map(k=>{var L="text"in k?k.text:void 0;return typeof L=="string"?{type:"textord",mode:k.mode,text:L}:k}),x=vt(d,t.withFont("mathrm"),!0),g=0;g<x.length;g++){var y=x[g];y instanceof Xt&&(y.text=y.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}p=j(["mop"],x,t)}else p=j(["mop"],[],t);return i?Q2(p,r,o,t,t.style,0,0):p},N6=(a,t)=>{for(var r=Qt(a.body,t.withFont("mathrm")),o=!0,i=0;i<r.length;i++){var u=r[i];if(!(u instanceof A2))if(u instanceof G)switch(u.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var p=u.children[0];u.children.length===1&&p instanceof dt?p.text=p.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):o=!1;break}default:o=!1}else o=!1}if(o){var d=r.map(y=>y.toText()).join("");r=[new dt(d)]}var x=new G("mi",r);x.setAttribute("mathvariant","normal");var g=new G("mo",[on("⁡","text")]);return a.parentIsSupSub?new G("mrow",[x,g]):q2([x,g])};ee({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(a,t)=>{var r=a.parser,o=a.funcName,i=t[0];return{type:"operatorname",mode:r.mode,body:ft(i),alwaysHandleSupSub:o==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:ed,mathmlBuilder:N6});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Zr({type:"ordgroup",htmlBuilder(a,t){return a.semisimple?Gn(vt(a.body,t,!1)):j(["mord"],vt(a.body,t,!0),t)},mathmlBuilder(a,t){return Lr(a.body,t,!0)}});ee({type:"overline",names:["\\overline"],numArgs:1,handler(a,t){var r=a.parser,o=t[0];return{type:"overline",mode:r.mode,body:o}},htmlBuilder(a,t){var r=Ke(a.body,t.havingCrampedStyle()),o=z0("overline-line",t),i=t.fontMetrics().defaultRuleThickness,u=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*i},{type:"elem",elem:o},{type:"kern",size:i}]});return j(["mord","katex-overline"],[u],t)},mathmlBuilder(a,t){var r=new G("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new G("mover",[Ve(a.body,t),r]);return o.setAttribute("accent","true"),o}});ee({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=t[0];return{type:"phantom",mode:r.mode,body:ft(o)}},htmlBuilder:(a,t)=>{var r=vt(a.body,t.withPhantom(),!1);return Gn(r)},mathmlBuilder:(a,t)=>{var r=Qt(a.body,t);return new G("mphantom",r)}});w("\\hphantom","\\smash{\\phantom{#1}}");ee({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(a,t)=>{var r=a.parser,o=t[0];return{type:"vphantom",mode:r.mode,body:o}},htmlBuilder:(a,t)=>{var r=j(["katex-inner"],[Ke(a.body,t.withPhantom())]),o=j(["katex-fix"],[]);return j(["mord","rlap"],[r,o],t)},mathmlBuilder:(a,t)=>{var r=Qt(ft(a.body),t),o=new G("mphantom",r),i=new G("mpadded",[o]);return i.setAttribute("width","0px"),i}});ee({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(a,t){var r=a.parser,o=ze(t[0],"size").value,i=t[1];return{type:"raisebox",mode:r.mode,dy:o,body:i}},htmlBuilder(a,t){var r=Ke(a.body,t),o=nt(a.dy,t);return Ie({positionType:"shift",positionData:-o,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,t){var r=new G("mpadded",[Ve(a.body,t)]),o=a.dy.number+a.dy.unit;return r.setAttribute("voffset",o),r}});var td=(a,t)=>{var r=a.parser;return{type:"reflectbox",mode:r.mode,body:t[0]}};ee({type:"reflectbox",names:["\\reflectbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler:td,htmlBuilder(a,t){return j(["mord","reflectbox"],[Ke(a.body,t)],t)},mathmlBuilder(a,t){return Ve(a.body,t)}});ee({type:"reflectbox",names:["\\mathreflectbox"],numArgs:1,argTypes:["math"],handler:td});ee({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(a){var t=a.parser;return{type:"internal",mode:t.mode}}});ee({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(a,t,r){var o=a.parser,i=r[0],u=ze(t[0],"size"),p=ze(t[1],"size");return{type:"rule",mode:o.mode,shift:i&&ze(i,"size").value,width:u.value,height:p.value}},htmlBuilder(a,t){var r=j(["mord","katex-rule"],[],t),o=nt(a.width,t),i=nt(a.height,t),u=a.shift?nt(a.shift,t):0;return r.style.borderRightWidth=X(o),r.style.borderTopWidth=X(i),r.style.bottom=X(u),r.width=o,r.height=i+u,r.depth=-u,r.maxFontSize=i*1.125*t.sizeMultiplier,r},mathmlBuilder(a,t){var r=nt(a.width,t),o=nt(a.height,t),i=a.shift?nt(a.shift,t):0,u=t.color&&t.getColor()||"black",p=new G("mspace");p.setAttribute("mathbackground",u),p.setAttribute("width",X(r)),p.setAttribute("height",X(o));var d=new G("mpadded",[p]);return i>=0?d.setAttribute("height",X(i)):(d.setAttribute("height",X(i)),d.setAttribute("depth",X(-i))),d.setAttribute("voffset",X(i)),d}});function nd(a,t,r){for(var o=vt(a,t,!1),i=t.sizeMultiplier/r.sizeMultiplier,u=0;u<o.length;u++){var p=o[u].classes.indexOf("katex-sizing");p<0?Array.prototype.push.apply(o[u].classes,t.sizingClasses(r)):o[u].classes[p+1]==="reset-size"+t.size&&(o[u].classes[p+1]="reset-size"+r.size),o[u].height*=i,o[u].depth*=i}return Gn(o)}var Af=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],R6=(a,t)=>{var r=t.havingSize(a.size);return nd(a.body,r,t)};ee({type:"sizing",names:Af,numArgs:0,allowedInText:!0,handler:(a,t)=>{var r=a.breakOnTokenText,o=a.funcName,i=a.parser,u=i.parseExpression(!1,r);return{type:"sizing",mode:i.mode,size:Af.indexOf(o)+1,body:u}},htmlBuilder:R6,mathmlBuilder:(a,t)=>{var r=t.havingSize(a.size),o=Qt(a.body,r),i=new G("mstyle",o);return i.setAttribute("mathsize",X(r.sizeMultiplier)),i}});ee({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(a,t,r)=>{var o=a.parser,i=!1,u=!1,p=r[0]&&ze(r[0],"ordgroup");if(p)for(var d,x=0;x<p.body.length;++x){var g=p.body[x];if(d=zo(g).text,d==="t")i=!0;else if(d==="b")u=!0;else{i=!1,u=!1;break}}else i=!0,u=!0;var y=t[0];return{type:"smash",mode:o.mode,body:y,smashHeight:i,smashDepth:u}},htmlBuilder:(a,t)=>{var r=j([],[Ke(a.body,t)]);if(!a.smashHeight&&!a.smashDepth)return r;if(a.smashHeight&&(r.height=0),a.smashDepth&&(r.depth=0),a.smashHeight&&a.smashDepth)return j(["mord","katex-smash"],[r],t);if(r.children)for(var o=0;o<r.children.length;o++)a.smashHeight&&(r.children[o].height=0),a.smashDepth&&(r.children[o].depth=0);var i=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return j(["mord"],[i],t)},mathmlBuilder:(a,t)=>{var r=new G("mpadded",[Ve(a.body,t)]);return a.smashHeight&&r.setAttribute("height","0px"),a.smashDepth&&r.setAttribute("depth","0px"),r}});ee({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(a,t,r){var o=a.parser,i=r[0],u=t[0];return{type:"sqrt",mode:o.mode,body:u,index:i}},htmlBuilder(a,t){var r=Ke(a.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=E0(r,t);var o=t.fontMetrics(),i=o.defaultRuleThickness,u=i;t.style.id<Se.TEXT.id&&(u=t.fontMetrics().xHeight);var p=i+u/4,d=r.height+r.depth+p+i,x=x6(d,t),g=x.span,y=x.ruleWidth,k=x.advanceWidth,L=g.height-y;L>r.height+r.depth+p&&(p=(p+L-r.height-r.depth)/2);var E=g.height-r.height-p-y;r.style.paddingLeft=X(k);var K=Ie({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+E)},{type:"elem",elem:g},{type:"kern",size:y}]});if(a.index){var C=t.havingStyle(Se.SCRIPTSCRIPT),F=Ke(a.index,C,t),P=.6*(K.height-K.depth),V=Ie({positionType:"shift",positionData:-P,children:[{type:"elem",elem:F}]}),Z=j(["katex-root"],[V]);return j(["mord","sqrt"],[Z,K],t)}else return j(["mord","sqrt"],[K],t)},mathmlBuilder(a,t){var r=a.body,o=a.index;return o?new G("mroot",[Ve(r,t),Ve(o,t)]):new G("msqrt",[Ve(r,t)])}});var du={display:Se.DISPLAY,text:Se.TEXT,script:Se.SCRIPT,scriptscript:Se.SCRIPTSCRIPT};function K6(a){return a in du}ee({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(a,t){var r=a.breakOnTokenText,o=a.funcName,i=a.parser,u=i.parseExpression(!0,r),p=o.slice(1,o.length-5);if(!K6(p))throw new Error("Unknown style: "+p);return{type:"styling",mode:i.mode,style:p,body:u}},htmlBuilder(a,t){var r=du[a.style],o=t.havingStyle(r);return a.resetFont&&(o=o.withFont("")),nd(a.body,o,t)},mathmlBuilder(a,t){var r=du[a.style],o=t.havingStyle(r);a.resetFont&&(o=o.withFont(""));var i=Qt(a.body,o),u=new G("mstyle",i),p={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},d=p[a.style];return u.setAttribute("scriptlevel",d[0]),u.setAttribute("displaystyle",d[1]),u}});var D6=function(t,r){var o=t.base;if(o)if(o.type==="op"){var i=o.limits&&(r.style.size===Se.DISPLAY.size||o.alwaysHandleSupSub);return i?J2:null}else if(o.type==="operatorname"){var u=o.alwaysHandleSupSub&&(r.style.size===Se.DISPLAY.size||o.limits);return u?ed:null}else{if(o.type==="accent")return $n(o.base)?R2:null;if(o.type==="horizBrace"){var p=!t.sub;return p===o.isOver?Z2:null}else return null}else return null};Zr({type:"supsub",htmlBuilder(a,t){var r=D6(a,t);if(r)return r(a,t);var o=a.base,i=a.sup,u=a.sub,p=Ke(o,t),d,x,g=t.fontMetrics(),y=0,k=0,L=o&&$n(o);if(i){var E=t.havingStyle(t.style.sup());d=Ke(i,E,t),L||(y=p.height-E.fontMetrics().supDrop*E.sizeMultiplier/t.sizeMultiplier)}if(u){var K=t.havingStyle(t.style.sub());x=Ke(u,K,t),L||(k=p.depth+K.fontMetrics().subDrop*K.sizeMultiplier/t.sizeMultiplier)}var C;t.style===Se.DISPLAY?C=g.sup1:t.style.cramped?C=g.sup3:C=g.sup2;var F=t.sizeMultiplier,P=X(.5/g.ptPerEm/F),V=null;if(x){var Z=a.base&&a.base.type==="op"&&a.base.name&&(a.base.name==="\\oiint"||a.base.name==="\\oiiint");if(p instanceof Xt||Z){var re;V=X(-((re=p.italic)!=null?re:0))}}var ue;if(d&&x){y=Math.max(y,C,d.depth+.25*g.xHeight),k=Math.max(k,g.sub2);var ce=g.defaultRuleThickness,me=4*ce;if(y-d.depth-(x.height-k)<me){k=me-(y-d.depth)+x.height;var ge=.8*g.xHeight-(y-d.depth);ge>0&&(y+=ge,k-=ge)}var Ee=[{type:"elem",elem:x,shift:k,marginRight:P,marginLeft:V},{type:"elem",elem:d,shift:-y,marginRight:P}];ue=Ie({positionType:"individualShift",children:Ee})}else if(x){k=Math.max(k,g.sub1,x.height-.8*g.xHeight);var Ae=[{type:"elem",elem:x,marginLeft:V,marginRight:P}];ue=Ie({positionType:"shift",positionData:k,children:Ae})}else if(d)y=Math.max(y,C,d.depth+.25*g.xHeight),ue=Ie({positionType:"shift",positionData:-y,children:[{type:"elem",elem:d,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var it=su(p,"right")||"mord";return j([it],[p,j(["msupsub"],[ue])],t)},mathmlBuilder(a,t){var r=!1,o,i;a.base&&a.base.type==="horizBrace"&&(i=!!a.sup,i===a.base.isOver&&(r=!0,o=a.base.isOver)),a.base&&(a.base.type==="op"||a.base.type==="operatorname")&&(a.base.parentIsSupSub=!0);var u=[Ve(a.base,t)];a.sub&&u.push(Ve(a.sub,t)),a.sup&&u.push(Ve(a.sup,t));var p;if(r)p=o?"mover":"munder";else if(a.sub)if(a.sup){var g=a.base;g&&g.type==="op"&&g.limits&&t.style===Se.DISPLAY||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(t.style===Se.DISPLAY||g.limits)?p="munderover":p="msubsup"}else{var x=a.base;x&&x.type==="op"&&x.limits&&(t.style===Se.DISPLAY||x.alwaysHandleSupSub)||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(x.limits||t.style===Se.DISPLAY)?p="munder":p="msub"}else{var d=a.base;d&&d.type==="op"&&d.limits&&(t.style===Se.DISPLAY||d.alwaysHandleSupSub)||d&&d.type==="operatorname"&&d.alwaysHandleSupSub&&(d.limits||t.style===Se.DISPLAY)?p="mover":p="msup"}return new G(p,u)}});Zr({type:"atom",htmlBuilder(a,t){return Nu(a.text,a.mode,t,["m"+a.family])},mathmlBuilder(a,t){var r=new G("mo",[on(a.text,a.mode)]);if(a.family==="bin"){var o=Du(a,t);o==="bold-italic"&&r.setAttribute("mathvariant",o)}else a.family==="punct"?r.setAttribute("separator","true"):(a.family==="open"||a.family==="close")&&r.setAttribute("stretchy","false");return r}});var rd={mi:"italic",mn:"normal",mtext:"normal"};Zr({type:"mathord",htmlBuilder(a,t){return So(a,t)},mathmlBuilder(a,t){var r=new G("mi",[on(a.text,a.mode,t)]),o=Du(a,t)||"italic";return o!==rd[r.type]&&r.setAttribute("mathvariant",o),r}});Zr({type:"textord",htmlBuilder(a,t){return So(a,t)},mathmlBuilder(a,t){var r=on(a.text,a.mode,t),o=Du(a,t)||"normal",i;return a.mode==="text"?i=new G("mtext",[r]):/[0-9]/.test(a.text)?i=new G("mn",[r]):a.text==="\\prime"?i=new G("mo",[r]):i=new G("mi",[r]),o!==rd[i.type]&&i.setAttribute("mathvariant",o),i}});var Ff=new Map([["\\nobreak","nobreak"],["\\allowbreak","allowbreak"]]),Cf=new Map([[" ",{}],["\\ ",{}],["~",{className:"nobreak"}],["\\space",{}],["\\nobreakspace",{className:"nobreak"}]]);Zr({type:"spacing",htmlBuilder(a,t){var r=Cf.get(a.text),o=Ff.get(a.text);if(r){var i=r.className||"";if(a.mode==="text"){var u=So(a,t);return u.classes.push(i),u}else return j(["mspace",i],[Nu(a.text,a.mode,t)],t)}else{if(o)return j(["mspace",o],[],t);throw new U('Unknown type of space "'+a.text+'"')}},mathmlBuilder(a,t){var r;if(Cf.has(a.text))r=new G("mtext",[new dt(" ")]);else{if(Ff.has(a.text))return new G("mspace");throw new U('Unknown type of space "'+a.text+'"')}return r}});var Nf=()=>{var a=new G("mtd",[]);return a.setAttribute("width","50%"),a};Zr({type:"tag",mathmlBuilder(a,t){var r=new G("mtable",[new G("mtr",[Nf(),new G("mtd",[Lr(a.body,t)]),Nf(),new G("mtd",[Lr(a.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Rf={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Kf={"\\textbf":"textbf","\\textmd":"textmd"},I6={"\\textit":"textit","\\textup":"textup"},Df=(a,t)=>{var r=a.font;if(r){if(Rf[r])return t.withTextFontFamily(Rf[r]);if(Kf[r])return t.withTextFontWeight(Kf[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(I6[r])};ee({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(a,t){var r=a.parser,o=a.funcName,i=t[0];return{type:"text",mode:r.mode,body:ft(i),font:o}},htmlBuilder(a,t){var r=Df(a,t),o=vt(a.body,r,!0);return j(["mord","text"],o,r)},mathmlBuilder(a,t){var r=Df(a,t);return Lr(a.body,r)}});ee({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(a,t){var r=a.parser;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(a,t){var r=Ke(a.body,t),o=z0("underline-line",t),i=t.fontMetrics().defaultRuleThickness,u=Ie({positionType:"top",positionData:r.height,children:[{type:"kern",size:i},{type:"elem",elem:o},{type:"kern",size:3*i},{type:"elem",elem:r}]});return j(["mord","katex-underline"],[u],t)},mathmlBuilder(a,t){var r=new G("mo",[new dt("‾")]);r.setAttribute("stretchy","true");var o=new G("munder",[Ve(a.body,t),r]);return o.setAttribute("accentunder","true"),o}});ee({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(a,t){var r=a.parser;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(a,t){var r=Ke(a.body,t),o=t.fontMetrics().axisHeight,i=.5*(r.height-o-(r.depth+o));return Ie({positionType:"shift",positionData:i,children:[{type:"elem",elem:r}]})},mathmlBuilder(a,t){var r=new G("mpadded",[Ve(a.body,t)],["vcenter"]);return new G("mrow",[r])}});ee({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(a,t,r){throw new U("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(a,t){for(var r=If(a),o=[],i=t.havingStyle(t.style.text()),u=0;u<r.length;u++){var p=r[u];p==="~"&&(p="\\textasciitilde"),o.push(Ct(p,"Typewriter-Regular",a.mode,i,["mord","texttt"]))}return j(["mord","text"].concat(i.sizingClasses(t)),_2(o),i)},mathmlBuilder(a,t){var r=new dt(If(a)),o=new G("mtext",[r]);return o.setAttribute("mathvariant","monospace"),o}});var If=a=>a.body.replace(/ /g,a.star?"␣":" "),br=M2,ad=`[ \r
	]`,B6="\\\\[a-zA-Z@]+",P6="\\\\[^\uD800-\uDFFF]",O6="("+B6+")"+ad+"*",H6=`\\\\(
|[ \r	]+
?)[ \r	]*`,hu="[̀-ͯ]",j6=new RegExp(hu+"+$"),V6="("+ad+"+)|"+(H6+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(hu+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(hu+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+O6)+("|"+P6+")");class Bf{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(V6,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new Wt("EOF",new jt(this,r,r));var o=this.tokenRegex.exec(t);if(o===null||o.index!==r)throw new U("Unexpected character: '"+t[r]+"'",new Wt(t[r],new jt(this,r,r+1)));var i=o[6]||o[3]||(o[2]?"\\ ":" ");if(this.catcodes[i]===14){var u=t.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Wt(i,new jt(this,r,this.tokenRegex.lastIndex))}}class $6{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new U("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r of Object.keys(t))t[r]===void 0?delete this.current[r]:this.current[r]=t[r]}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return Object.prototype.hasOwnProperty.call(this.current,t)||Object.prototype.hasOwnProperty.call(this.builtins,t)}get(t){return Object.prototype.hasOwnProperty.call(this.current,t)?this.current[t]:Object.prototype.hasOwnProperty.call(this.builtins,t)?this.builtins[t]:void 0}set(t,r,o){if(o===void 0&&(o=!1),o){for(var i=0;i<this.undefStack.length;i++)delete this.undefStack[i][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!Object.prototype.hasOwnProperty.call(u,t)&&(u[t]=Object.prototype.hasOwnProperty.call(this.current,t)?this.current[t]:void 0)}r==null?delete this.current[t]:this.current[t]=r}}var U6=G2;w("\\noexpand",function(a){var t=a.popToken();return a.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(a){var t=a.popToken();return a.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(a){var t=a.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(a){var t=a.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(a){var t=a.consumeArgs(3);a.consumeSpaces();var r=a.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(a){var t=a.consumeArgs(2);return a.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Pf={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(a){var t=a.popToken(),r,o=0;if(t.text==="'")r=8,t=a.popToken();else if(t.text==='"')r=16,t=a.popToken();else if(t.text==="`")if(t=a.popToken(),t.text[0]==="\\")o=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new U("\\char` missing argument");o=t.text.charCodeAt(0)}else r=10;if(r){if(o=Pf[t.text],o==null||o>=r)throw new U("Invalid base-"+r+" digit "+t.text);for(var i;(i=Pf[a.future().text])!=null&&i<r;)o*=r,o+=i,a.popToken()}return"\\@char{"+o+"}"});var Hu=(a,t,r,o)=>{var i=a.consumeArg().tokens;if(i.length!==1)throw new U("\\newcommand's first argument must be a macro name");var u=i[0].text,p=a.isDefined(u);if(p&&!t)throw new U("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!p&&!r)throw new U("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var d=0;if(i=a.consumeArg().tokens,i.length===1&&i[0].text==="["){for(var x="",g=a.expandNextToken();g.text!=="]"&&g.text!=="EOF";)x+=g.text,g=a.expandNextToken();if(!x.match(/^\s*[0-9]+\s*$/))throw new U("Invalid number of arguments: "+x);d=parseInt(x),i=a.consumeArg().tokens}return p&&o||a.macros.set(u,{tokens:i,numArgs:d}),""};w("\\newcommand",a=>Hu(a,!1,!0,!1));w("\\renewcommand",a=>Hu(a,!0,!1,!1));w("\\providecommand",a=>Hu(a,!0,!0,!0));w("\\message",a=>{var t=a.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});w("\\errmessage",a=>{var t=a.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});w("\\show",a=>{var t=a.popToken(),r=t.text;return console.log(t,a.macros.get(r),br[r],Xe.math[r],Xe.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Of={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},G6=new Set(["bin","rel"]);w("\\dots",function(a){var t="\\dotso",r=a.expandAfterFuture().text;return r in Of?t=Of[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&G6.has(Xe.math[r].group))&&(t="\\dotsb"),t});var ju={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(a){var t=a.future().text;return t in ju?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(a){var t=a.future().text;return t in ju&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(a){var t=a.future().text;return t in ju?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",a=>{if(a.macros.get("\\df@tag"))throw new U("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var ld=X(Ln["Main-Regular"][84][1]-.7*Ln["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+ld+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+ld+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("↤","\\mapsfrom");w("\\mapsfrom","\\html@mathml{\\mathrel{\\mathreflectbox{\\mapsto}}}{\\mathrel{\\char`↤}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var od=a=>t=>{var r=t.consumeArg().tokens,o=t.consumeArg().tokens,i=t.consumeArg().tokens,u=t.consumeArg().tokens,p=t.macros.get("|"),d=t.macros.get("\\|");t.macros.beginGroup();var x=k=>L=>{a&&(L.macros.set("|",p),i.length&&L.macros.set("\\|",d));var E=k;if(!k&&i.length){var K=L.future();K.text==="|"&&(L.popToken(),E=!0)}return{tokens:E?i:o,numArgs:0}};t.macros.set("|",x(!1)),i.length&&t.macros.set("\\|",x(!0));var g=t.consumeArg().tokens,y=t.expandTokens([...u,...g,...r]);return t.macros.endGroup(),{tokens:y.reverse(),numArgs:0}};w("\\bra@ket",od(!1));w("\\bra@set",od(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var id={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class W6{constructor(t,r,o){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new $6(U6,r.macros),this.mode=o,this.stack=[]}feed(t){this.lexer=new Bf(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,o,i;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken();var u=this.consumeArg(["]"]);i=u.tokens,o=u.end}else{var p=this.consumeArg();i=p.tokens,r=p.start,o=p.end}return this.pushToken(new Wt("EOF",o.loc)),this.pushTokens(i),new Wt("",jt.range(r,o))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],o=t&&t.length>0;o||this.consumeSpaces();var i=this.future(),u,p=0,d=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++p;else if(u.text==="}"){if(--p,p===-1)throw new U("Extra }",u)}else if(u.text==="EOF")throw new U("Unexpected end of input in a macro argument, expected '"+(t&&o?t[d]:"}")+"'",u);if(t&&o)if((p===0||p===1&&t[d]==="{")&&u.text===t[d]){if(++d,d===t.length){r.splice(-d,d);break}}else d=0}while(p!==0||o);return i.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:i,end:u}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new U("The length of delimiters doesn't match the number of args!");for(var o=r[0],i=0;i<o.length;i++){var u=this.popToken();if(o[i]!==u.text)throw new U("Use of the macro doesn't match its definition",u)}}for(var p=[],d=0;d<t;d++)p.push(this.consumeArg(r&&r[d+1]).tokens);return p}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new U("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),o=r.text,i=r.noexpand?null:this._getExpansion(o);if(i==null||t&&i.unexpandable){if(t&&i==null&&o[0]==="\\"&&!this.isDefined(o))throw new U("Undefined control sequence: "+o);return this.pushToken(r),!1}this.countExpansion(1);var u=i.tokens,p=this.consumeArgs(i.numArgs,i.delimiters);if(i.numArgs){u=u.slice();for(var d=u.length-1;d>=0;--d){var x=u[d];if(x.text==="#"){if(d===0)throw new U("Incomplete placeholder at end of macro body",x);if(x=u[--d],x.text==="#")u.splice(d+1,1);else if(/^[1-9]$/.test(x.text))u.splice(d,2,...p[+x.text-1]);else throw new U("Not a valid argument number",x)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}}expandMacro(t){return this.macros.has(t)?this.expandTokens([new Wt(t)]):void 0}expandTokens(t){var r=[],o=this.stack.length;for(this.pushTokens(t);this.stack.length>o;)if(this.expandOnce(!0)===!1){var i=this.stack.pop();i.treatAsRelax&&(i.noexpand=!1,i.treatAsRelax=!1),r.push(i)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(o=>o.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var o=this.lexer.catcodes[t];if(o!=null&&o!==13)return}var i=typeof r=="function"?r(this):r;if(typeof i=="string"){var u=0;if(i.includes("#"))for(var p=i.replace(/##/g,"");p.includes("#"+(u+1));)++u;for(var d=new Bf(i,this.settings),x=[],g=d.lex();g.text!=="EOF";)x.push(g),g=d.lex();x.reverse();var y={tokens:x,numArgs:u};return y}return i}isDefined(t){return this.macros.has(t)||Object.prototype.hasOwnProperty.call(br,t)||Object.prototype.hasOwnProperty.call(Xe.math,t)||Object.prototype.hasOwnProperty.call(Xe.text,t)||Object.prototype.hasOwnProperty.call(id,t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Object.prototype.hasOwnProperty.call(br,t)&&!br[t].primitive}}var Hf=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ro=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Ps={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},jf={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ao{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new W6(t,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new U("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Wt("}")),this.gullet.pushTokens(t);var o=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,o}parseExpression(t,r){for(var o=[];;){this.mode==="math"&&this.consumeSpaces();var i=this.fetch();if(Ao.endOfExpression.has(i.text)||r&&i.text===r||t&&br[i.text]&&br[i.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;o.push(u)}return this.mode==="text"&&this.formLigatures(o),this.handleInfixNodes(o)}handleInfixNodes(t){for(var r=-1,o,i=0;i<t.length;i++){var u=t[i];if(u.type==="infix"){if(r!==-1)throw new U("only one infix operator per group",u.token);r=i,o=u.replaceWith}}if(r!==-1&&o){var p,d,x=t.slice(0,r),g=t.slice(r+1);x.length===1&&x[0].type==="ordgroup"?p=x[0]:p={type:"ordgroup",mode:this.mode,body:x},g.length===1&&g[0].type==="ordgroup"?d=g[0]:d={type:"ordgroup",mode:this.mode,body:g};var y;return o==="\\\\abovefrac"?y=this.callFunction(o,[p,t[r],d],[]):y=this.callFunction(o,[p,d],[]),[y]}else return t}handleSupSubscript(t){var r=this.fetch(),o=r.text;this.consume(),this.consumeSpaces();var i;do{var u;i=this.parseGroup(t)}while(((u=i)==null?void 0:u.type)==="internal");if(!i)throw new U("Expected group after '"+o+"'",r);return i}formatUnsupportedCmd(t){for(var r=[],o=0;o<t.length;o++)r.push({type:"textord",mode:"text",text:t[o]});var i={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[i]};return u}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var o,i;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op")r.limits=u.text==="\\limits",r.alwaysHandleSupSub=!0;else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new U("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(o)throw new U("Double superscript",u);o=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(i)throw new U("Double subscript",u);i=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(o)throw new U("Double superscript",u);var p={type:"textord",mode:this.mode,text:"\\prime"},d=[p];for(this.consume();this.fetch().text==="'";)d.push(p),this.consume();this.fetch().text==="^"&&d.push(this.handleSupSubscript("superscript")),o={type:"ordgroup",mode:this.mode,body:d}}else if(ro[u.text]){var x=Hf.test(u.text),g=[];for(g.push(new Wt(ro[u.text])),this.consume();;){var y=this.fetch().text;if(!ro[y]||Hf.test(y)!==x)break;g.unshift(new Wt(ro[y])),this.consume()}var k=this.subparse(g);x?i={type:"ordgroup",mode:"math",body:k}:o={type:"ordgroup",mode:"math",body:k}}else break}return o&&i?{type:"supsub",mode:this.mode,base:r,sup:o,sub:i}:o?{type:"supsub",mode:this.mode,base:r,sup:o}:i?{type:"supsub",mode:this.mode,base:r,sub:i}:r}parseFunction(t,r){var o=this.fetch(),i=o.text,u=br[i];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new U("Got function '"+i+"' with no arguments"+(r?" as "+r:""),o);if(this.mode==="text"&&!u.allowedInText)throw new U("Can't use function '"+i+"' in text mode",o);if(this.mode==="math"&&u.allowedInMath===!1)throw new U("Can't use function '"+i+"' in math mode",o);var p=this.parseArguments(i,u),d=p.args,x=p.optArgs;return this.callFunction(i,d,x,o,t)}callFunction(t,r,o,i,u){var p={funcName:t,parser:this,token:i,breakOnTokenText:u},d=br[t];if(d&&d.handler)return d.handler(p,r,o);throw new U("No function handler for "+t)}parseArguments(t,r){var o,i=(o=r.numOptionalArgs)!=null?o:0,u=r.numArgs+i;if(u===0)return{args:[],optArgs:[]};for(var p=[],d=[],x=0;x<u;x++){var g,y=(g=r.argTypes)==null?void 0:g[x],k=x<i;("primitive"in r&&r.primitive&&y==null||r.type==="sqrt"&&x===1&&d[0]==null)&&(y="primitive");var L=this.parseGroupOfType("argument to '"+t+"'",y,k);if(k)d.push(L);else if(L!=null)p.push(L);else throw new U("Null argument, please report this as a bug")}return{args:p,optArgs:d}}parseGroupOfType(t,r,o){switch(r){case"color":return this.parseColorGroup(o);case"size":return this.parseSizeGroup(o);case"url":return this.parseUrlGroup(o);case"math":case"text":return this.parseArgumentGroup(o,r);case"hbox":{var i=this.parseArgumentGroup(o,"text");return i!=null?{type:"styling",mode:i.mode,body:[i],style:"text",resetFont:!0}:null}case"raw":{var u=this.parseStringGroup(o);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(o)throw new U("A primitive argument cannot be optional");var p=this.parseGroup(t);if(p==null)throw new U("Expected group as "+t,this.fetch());return p}case"original":case void 0:return this.parseArgumentGroup(o);default:throw new U("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t){var r=this.gullet.scanArgument(t);if(r==null)return null;for(var o="",i;(i=this.fetch()).text!=="EOF";)o+=i.text,this.consume();return this.consume(),r.text=o,r}parseRegexGroup(t,r){for(var o=this.fetch(),i=o,u="",p;(p=this.fetch()).text!=="EOF"&&t.test(u+p.text);)i=p,u+=i.text,this.consume();if(u==="")throw new U("Invalid "+r+": '"+o.text+"'",o);return o.range(i,u)}parseColorGroup(t){var r=this.parseStringGroup(t);if(r==null)return null;var o=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!o)throw new U("Invalid color: '"+r.text+"'",r);var i=o[0];return/^[0-9a-f]{6}$/i.test(i)&&(i="#"+i),{type:"color-token",mode:this.mode,color:i}}parseSizeGroup(t){var r,o=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup(t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",o=!0);var i=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!i)throw new U("Invalid size: '"+r.text+"'",r);var u={number:+(i[1]+i[2]),unit:i[3]};if(!b2(u))throw new U("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:o}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup(t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var o=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:o}}parseArgumentGroup(t,r){var o=this.gullet.scanArgument(t);if(o==null)return null;var i=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var p={type:"ordgroup",mode:this.mode,loc:o.loc,body:u};return r&&this.switchMode(i),p}parseGroup(t,r){var o=this.fetch(),i=o.text,u;if(i==="{"||i==="\\begingroup"){this.consume();var p=i==="{"?"}":"\\endgroup";this.gullet.beginGroup();var d=this.parseExpression(!1,p),x=this.fetch();this.expect(p),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:jt.range(o,x),body:d,semisimple:i==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,t)||this.parseSymbol(),u==null&&i[0]==="\\"&&!Object.prototype.hasOwnProperty.call(id,i)){if(this.settings.throwOnError)throw new U("Undefined control sequence: "+i,o);u=this.formatUnsupportedCmd(i),this.consume()}return u}formLigatures(t){for(var r=t.length-1,o=0;o<r;++o){var i=t[o];if(i.type==="textord"){var u=i.text,p=t[o+1];if(!(!p||p.type!=="textord")){if(u==="-"&&p.text==="-"){var d=t[o+2];o+1<r&&d&&d.type==="textord"&&d.text==="-"?(t.splice(o,3,{type:"textord",mode:"text",loc:jt.range(i,d),text:"---"}),r-=2):(t.splice(o,2,{type:"textord",mode:"text",loc:jt.range(i,p),text:"--"}),r-=1)}(u==="'"||u==="`")&&p.text===u&&(t.splice(o,2,{type:"textord",mode:"text",loc:jt.range(i,p),text:u+u}),r-=1)}}}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var o=r.slice(5),i=o.charAt(0)==="*";if(i&&(o=o.slice(1)),o.length<2||o.charAt(0)!==o.slice(-1))throw new U(`\\verb assertion failed --
                    please report what input caused this bug`);return o=o.slice(1,-1),{type:"verb",mode:"text",body:o,star:i}}Object.prototype.hasOwnProperty.call(jf,r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=jf[r[0]]+r.slice(1));var u=j6.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var p;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&eu.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var d=Xe[this.mode][r].group,x=jt.range(t),g;e6(d)?g={type:"atom",mode:this.mode,family:d,loc:x,text:r}:g={type:d,mode:this.mode,loc:x,text:r},p=g}else if(r.charCodeAt(0)>=128)this.settings.strict&&(v2(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),p={type:"textord",mode:"text",loc:jt.range(t),text:r};else return null;if(this.consume(),u)for(var y=0;y<u[0].length;y++){var k=u[0][y];if(!Ps[k])throw new U("Unknown accent ' "+k+"'",t);var L=Ps[k][this.mode]||Ps[k].text;if(!L)throw new U("Accent "+k+" unsupported in "+this.mode+" mode",t);p={type:"accent",mode:this.mode,loc:jt.range(t),label:L,isStretchy:!1,isShifty:!0,base:p}}return p}}Ao.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Vu=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var o=new Ao(t,r);delete o.gullet.macros.current["\\df@tag"];var i=o.parse();if(delete o.gullet.macros.current["\\current@color"],delete o.gullet.macros.current["\\color"],o.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new U("\\tag works only in display equations");i=[{type:"tag",mode:"text",body:i,tag:o.subparse([new Wt("\\df@tag")])}]}return i},sd=function(t,r,o){r.textContent="";var i=$u(t,o).toNode();r.appendChild(i)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),sd=function(){throw new U("KaTeX doesn't work in quirks mode.")});var X6=function(t,r){var o=$u(t,r).toMarkup();return o},Z6=function(t,r){var o=new qu(r);return Vu(t,o)},ud=function(t,r,o){if(o.throwOnError||!(t instanceof U))throw t;var i=j(["katex-error"],[new Xt(r)]);return i.setAttribute("title",t.toString()),i.setAttribute("style","color:"+o.errorColor),i},$u=function(t,r){var o=new qu(r);try{var i=Vu(t,o);return V3(i,t,o)}catch(u){return ud(u,t,o)}},Q6=function(t,r){var o=new qu(r);try{var i=Vu(t,o);return $3(i,t,o)}catch(u){return ud(u,t,o)}},Y6="0.18.9",J6={Span:A0,Anchor:wo,SymbolNode:Xt,SvgNode:jn,PathNode:Sr,LineNode:Js},ex={version:Y6,render:sd,renderToString:X6,ParseError:U,SETTINGS_SCHEMA:Zs,__parse:Z6,__renderToDomTree:$u,__renderToHTMLTree:Q6,__setFontMetrics:L3,__defineSymbol:f,__defineFunction:ee,__defineMacro:w,__domTree:J6};const tx={p:{hex:"#d6479f",concept:"현실·데이터 분포",symbols:"p, p(x), p̂(경험분포), p_t(디퓨전 주변분포)"},q:{hex:"#7f8f10",concept:"모형·근사 분포, 정책, 사후분포",symbols:"q, q_θ, π, π_θ, π*, 사후분포 π(h∣y)"},ref:{hex:"#139696",concept:"기준·사전 분포",symbols:"π_ref, 사전분포"},theta:{hex:"#3b7de0",concept:"자연모수 (e-계열)",symbols:"θ(6장 볼록함수의 변수, 7장 이후 자연모수), e-측지선·e-사영·∇⁽ᵉ⁾"},eta:{hex:"#e0504a",concept:"기대모수 (m-계열), 쌍대 기울기 변수",symbols:"η, m-측지선·m-사영·∇⁽ᵐ⁾, 6장 운동량 p"},xi:{hex:"#2e9e6e",concept:"일반 모수·좌표",symbols:"μ, σ, 일반 모수 θ(1–3·9장), 가중치 w, W"},F:{hex:"#7d8a3a",concept:"로그정규화자",symbols:"F(θ), Z"},Fstar:{hex:"#c0622f",concept:"쌍대 퍼텐셜 (르장드르 변환)",symbols:"F*(η), f*, 6장 해밀토니안 ℋ"},f:{hex:"#5b6fe0",concept:"일반 볼록함수",symbols:"f, 6장 라그랑지안 L"},t:{hex:"#0e93b0",concept:"충분통계량·캐리어",symbols:"t(x), k(x)"},H:{hex:"#9467bd",concept:"엔트로피 계열",symbols:"H(p), H(p,q)"},D:{hex:"#c2398a",concept:"발산",symbols:"KL, D_f, B_F, D_α"},I:{hex:"#0e8f8f",concept:"피셔 정보·계량",symbols:"I(θ), g_ij"},alpha:{hex:"#8f7a5a",concept:"접속·발산 지수, 일반 접속",symbols:"α, ∇⁽ᵅ⁾, 레비-치비타 접속 ∇, 크리스토펠 기호 Γ"},curv:{hex:"#5d9c2f",concept:"곡률",symbols:"가우스 곡률 K, 리만 곡률 R, 주곡률 κ"},x:{hex:"#6f8fa6",concept:"데이터 표본",symbols:"x, x_t"},z:{hex:"#8a7fb0",concept:"잠재변수·노이즈 표본",symbols:"z, ε(표준정규 노이즈)"},v:{hex:"#d07a12",concept:"속도장·표류",symbols:"v(x,t), SDE 표류항 f(x,t)"},score:{hex:"#b0892a",concept:"스코어",symbols:"∇ₓ log p, s_θ"},r:{hex:"#d0721f",concept:"보상",symbols:"r"},beta:{hex:"#9c6b52",concept:"온도·KL 계수",symbols:"β"},ell:{hex:"#b58a00",concept:"우도·로그우도·ELBO",symbols:"우도 L(y∣h), ℓ(θ), log p(x), ELBO"},loss:{hex:"#c05080",concept:"손실과 그 기울기",symbols:"𝓛, 기울기 G = ∇𝓛"}},qx=Object.fromEntries(Object.entries(tx).map(([a,t])=>[a,t.hex])),nx={T:{name:"선생님",color:"#243b61",tint:"#7f9cc9"},M:{name:"김민준",color:"#8d939a",tint:"#a9aeb4"},S:{name:"이서연",color:"#4f8a5f",tint:"#6fae80"}};Pe.setOptions({breaks:!0,gfm:!0});const cd="/infogeo-book/",rx=/^(`{3,})(\w*)[^\n]*\n([\s\S]*?)\n\1[ \t]*$/gm,ax=/^\{\{viz:\s*([^}]+?)\s*\}\}\s*$/;function lx(a){let t=!1;return a.split(`
`).map(r=>/^\s*```/.test(r)?(t=!t,r.replace(/^ {1,5}/,"")):t?r:r.replace(/^ {1,5}/,"")).join(`
`)}function ox(a){const t=/^\s*\\begin\{array\}/.test(a);let r;try{r=ex.renderToString(a,{displayMode:!0,throwOnError:!1,strict:"ignore"})}catch{r=`<pre>${a}</pre>`}return`<div class="${t?"math-legend":"math-display"}">${r}</div>`}function ix(a){return a.replace(/(<h2[^>]*>(?:[^<]*호기심 상자[^<]*)<\/h2>)([\s\S]*?)(?=<h2[ >]|<hr[ />]|$)/g,'<div class="curiosity-box">$1$2</div>').replace(/(<h3[^>]*>(?:[^<]*호기심 상자[^<]*)<\/h3>)([\s\S]*?)(?=<h[23][ >]|<hr[ />]|<div class="curiosity-box">|$)/g,'<div class="curiosity-box">$1$2</div>')}function sx(a){return a.replace(/(<img\s[^>]*src=")\/images\//g,`$1${cd}images/`)}const pd=Object.fromEntries(Object.entries(nx).map(([a,t])=>[t.name,a])),ux=Object.keys(pd).join("|");function cx(a){return a.replace(new RegExp(`<p>(?:〔([TMS])(\\d{2})〕\\s*)?<strong>(${ux}):</strong>\\s*([\\s\\S]*?)</p>`,"g"),(t,r,o,i,u)=>{const p=pd[i],d=o||"01",x=`<figure class="cast cast-${p}"><span class="cast-img"><span class="cast-code">${p}${d}</span><img src="${cd}images/faces/${p}${d}.svg" alt="${i} ${p}${d}" loading="lazy" onerror="this.remove()"></span><figcaption>${i}</figcaption></figure>`;return`<div class="turn turn-${p} has-cast">${x}<div class="turn-body"><p>${u}</p></div></div>`})}const Os=/<h([23])[^>]*>\s*(?:문제\s*\d+\s*[.．]|연습문제\s*\d+)[\s\S]*?<\/h\1>/g,px=/<h[3-6][^>]*>\s*함께 풀기\s*<\/h[3-6]>/;function fx(a){let t="",r=0;Os.lastIndex=0;let o;for(;o=Os.exec(a);){const i=+o[1],u=o.index+o[0].length,p=new RegExp(`<h[2-${i}][ >]`,"g");p.lastIndex=u;const d=p.exec(a),x=d?d.index:a.length;let g=a.slice(u,x);const y=g.search(px),k=g.indexOf('<div class="turn'),L=y>=0?y:k>=0?k:g.length,E=g.slice(0,L).trim();E&&(g=`<div class="problem-statement">${E}</div>
`+g.slice(L)),t+=a.slice(r,o.index)+`<div class="dialogue">${o[0]}${g}</div>`,r=x,Os.lastIndex=x}return t+a.slice(r)}function dx(a){const t=[],r=lx(a).replace(rx,(i,u,p,d)=>p!=="latex"?i:(t.push(d),`
@@MATH${t.length-1}@@
`));let o=Pe.parse(r);return o=o.replace(/<p>@@MATH(\d+)@@<\/p>/g,(i,u)=>ox(t[+u])),sx(fx(cx(ix(o))))}function hx(a){const t=[];let r=[],o=!1;for(const i of a.split(`
`)){/^\s*```/.test(i)&&(o=!o);const u=!o&&i.match(ax);u?(r.length&&t.push({type:"prose",md:r.join(`
`)}),t.push({type:"viz",key:u[1]}),r=[]):r.push(i)}return r.length&&t.push({type:"prose",md:r.join(`
`)}),t}function mx({markdown:a}){const t=Q.useMemo(()=>dx(a),[a]);return oe.jsx("div",{className:"prose-content",dangerouslySetInnerHTML:{__html:t}})}function xx({component:a}){return oe.jsxs("div",{style:{margin:"40px -24px",borderTop:`1px solid ${ye.border}`,borderBottom:`1px solid ${ye.border}`,background:ye.bg},children:[oe.jsx("div",{style:{padding:"12px 24px 4px",fontSize:11,color:ye.accentDim,fontFamily:an.mono,letterSpacing:1,textTransform:"uppercase"},children:"인터랙티브 시각화"}),oe.jsx(Q.Suspense,{fallback:oe.jsx("div",{style:{padding:40,textAlign:"center",color:ye.textDim,fontFamily:an.mono,fontSize:12},children:"불러오는 중…"}),children:oe.jsx(a,{})})]})}function gx(){const a=[];for(let t=0;t<Hn.length;t++){const r=Hn[t],o=vo(r.md);for(let i=0;i<o.length;i++)a.push({chapterIdx:t,sectionIdx:i,slug:r.slug})}return a}let Hs=null;function vx(){return Hs||(Hs=gx()),Hs}function fd(a,t){const r=vx(),o=r.findIndex(p=>p.slug===a.slug&&p.sectionIdx===t),i=o>0?r[o-1]:null,u=o<r.length-1?r[o+1]:null;return{prev:i,next:u}}function mo(a){if(!a)return"";const t=Hn[a.chapterIdx],r=vo(t.md),{title:o}=yu(r[a.sectionIdx]||"");return o||"들어가며"}function bx({chapter:a,sectionIdx:t,totalSections:r}){const{prev:o,next:i}=fd(a,t),u={color:ye.textDim,textDecoration:"none",transition:"color 0.2s"},p=o?Hn[o.chapterIdx]:null,d=i?Hn[i.chapterIdx]:null;return oe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",marginTop:40,borderTop:`1px solid ${ye.border}`,fontFamily:an.mono,fontSize:12},children:[o?oe.jsxs(wr,{to:`/${o.slug}/${o.sectionIdx}`,style:u,children:["← ",p.id!==a.id?`${p.id}. ${p.title} · `:"",mo(o)]}):oe.jsx("span",{}),i?oe.jsxs(wr,{to:`/${i.slug}/${i.sectionIdx}`,style:u,children:[d.id!==a.id?`${d.id}. ${d.title} · `:"",mo(i)," →"]}):oe.jsx("span",{})]})}function yx({chapter:a,sectionIdx:t}){const{prev:r,next:o}=fd(a,t),i=r?Hn[r.chapterIdx]:null,u=o?Hn[o.chapterIdx]:null;return oe.jsxs(oe.Fragment,{children:[r&&oe.jsx(wr,{to:`/${r.slug}/${r.sectionIdx}`,className:"side-arrow side-arrow-left",title:`${i.id!==a.id?`${i.id}. ${i.title} · `:""}${mo(r)}`,"aria-label":"이전 페이지",children:"‹"}),o&&oe.jsx(wr,{to:`/${o.slug}/${o.sectionIdx}`,className:"side-arrow side-arrow-right",title:`${u.id!==a.id?`${u.id}. ${u.title} · `:""}${mo(o)}`,"aria-label":"다음 페이지",children:"›"})]})}function wx({chapter:a}){const{sectionIdx:t}=Jm(),r=parseInt(t,10)||0;Q.useEffect(()=>{window.scrollTo(0,0)},[a.slug,r]);const o=Q.useMemo(()=>vo(a.md),[a.md]),{title:i,vizKeys:u,prose:p}=Q.useMemo(()=>yu(o[r]||""),[o,r]),d=Q.useMemo(()=>[...hx(p),...u.map(g=>({type:"viz",key:g}))],[p,u]),x=r===0;return oe.jsxs("div",{style:{minHeight:"100vh",background:ye.bg,color:ye.text},children:[oe.jsx(yx,{chapter:a,sectionIdx:r}),oe.jsx("div",{style:{padding:"60px 24px 24px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)"},children:oe.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[oe.jsxs("div",{style:{fontSize:13,color:ye.accentDim,fontFamily:an.mono,marginBottom:8,letterSpacing:1},children:[a.id!=="A"?`제${a.id}장`:"부록",!x&&` · ${r} / ${o.length-1}`]}),oe.jsx("h1",{style:{fontFamily:an.serif,fontSize:x?32:26,color:ye.accent,margin:0,letterSpacing:1,lineHeight:1.3},children:x?a.title:i||a.title})]})}),oe.jsx("div",{style:{padding:"24px 24px 48px"},children:oe.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[d.map((g,y)=>{var L;if(g.type==="prose")return oe.jsx(mx,{markdown:g.md},y);const k=(L=a.vizMap)==null?void 0:L[g.key];return k?oe.jsx(xx,{component:k},y):null}),oe.jsx(bx,{chapter:a,sectionIdx:r,totalSections:o.length})]})})]})}function kx(){return oe.jsx("div",{style:{minHeight:"100vh",background:ye.bg,display:"flex",alignItems:"center",justifyContent:"center",color:ye.textDim,fontFamily:an.mono,fontSize:13},children:"불러오는 중…"})}function Sx(){const[a,t]=Q.useState({}),[r,o]=Q.useState(null),i=(u,p)=>{p.preventDefault(),p.stopPropagation(),t(d=>({...d,[u]:!d[u]}))};return oe.jsxs("div",{style:{minHeight:"100vh",background:ye.bg,color:ye.text,fontFamily:an.mono},children:[oe.jsxs("div",{style:{padding:"60px 24px 32px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)",textAlign:"center"},children:[oe.jsx("h1",{style:{fontFamily:an.serif,fontSize:36,color:ye.accent,marginBottom:6,letterSpacing:2},children:"情報幾何學"}),oe.jsx("p",{style:{color:ye.textDim,fontSize:13,marginBottom:4},children:"정보기하학 — 확률분포의 기하학적 구조"}),oe.jsx("p",{style:{color:ye.textMuted,fontSize:11},children:"인터랙티브 교재 · Interactive Textbook"})]}),oe.jsx("div",{style:{padding:"0 24px 48px"},children:oe.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:oe.jsx("div",{style:{display:"grid",gap:8},children:Hn.map((u,p)=>{const d=u.id.includes("z"),x=u.id==="A",g=vo(u.md),y=g.length>1,k=a[u.slug],L=Object.keys(u.vizMap||{}).length>0;return oe.jsxs("div",{children:[oe.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:d?"10px 20px 10px 40px":"12px 20px",borderRadius:k?"8px 8px 0 0":8,background:r===p?ye.cardHover:d?"transparent":ye.card,border:`1px solid ${r===p?ye.accentDim:d?"transparent":ye.border}`,borderBottom:k?"none":void 0,transition:"all 0.2s",cursor:"pointer"},onMouseEnter:()=>o(p),onMouseLeave:()=>o(null),children:[oe.jsx("span",{style:{fontSize:d?14:18,fontWeight:700,color:d?ye.dual:x?ye.textDim:ye.accent,fontFamily:an.serif,minWidth:d?32:40,textAlign:"center"},children:d?"∿":u.id}),oe.jsx(wr,{to:`/${u.slug}/0`,style:{flex:1,textDecoration:"none",fontSize:d?12:14,color:r===p?ye.accent:d?ye.textDim:ye.text,fontWeight:d?400:600,fontStyle:d?"italic":"normal"},children:u.title}),L&&oe.jsx("span",{style:{fontSize:9,color:ye.accentDim,fontFamily:an.mono,padding:"2px 6px",borderRadius:4,background:ye.accentSoft},children:"VIZ"}),y&&oe.jsx("span",{onClick:E=>i(u.slug,E),style:{fontSize:14,color:r===p?ye.accent:ye.textMuted,transition:"all 0.2s",transform:k?"rotate(90deg)":"none",cursor:"pointer",userSelect:"none",padding:"0 4px"},children:"→"}),!y&&oe.jsx(wr,{to:`/${u.slug}/0`,style:{fontSize:14,color:r===p?ye.accent:ye.textMuted,textDecoration:"none",transition:"all 0.2s",transform:r===p?"translateX(3px)":"none"},children:"→"})]}),k&&y&&oe.jsx("div",{style:{background:ye.card,border:`1px solid ${ye.border}`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:"4px 0 8px"},children:g.map((E,K)=>{var V;const{title:C,vizKey:F}=yu(E),P=F&&((V=u.vizMap)==null?void 0:V[F]);return oe.jsxs(wr,{to:`/${u.slug}/${K}`,style:{display:"flex",alignItems:"center",gap:10,padding:"6px 20px 6px 74px",textDecoration:"none",fontSize:12,color:ye.textDim,transition:"color 0.15s"},onMouseEnter:Z=>Z.currentTarget.style.color=ye.accent,onMouseLeave:Z=>Z.currentTarget.style.color=ye.textDim,children:[oe.jsx("span",{style:{color:ye.textMuted,fontSize:10,minWidth:16},children:K===0?"·":`${K}`}),oe.jsx("span",{style:{flex:1},children:K===0?"들어가며":C||`절 ${K}`}),P&&oe.jsx("span",{style:{fontSize:8,color:ye.accentDim,fontFamily:an.mono,padding:"1px 4px",borderRadius:3,background:ye.accentSoft},children:"VIZ"})]},K)})})]},u.slug)})})})})]})}function _x(){const a=T0(),t={position:"fixed",top:12,left:12,zIndex:1e3,padding:"6px 14px",borderRadius:6,background:`${ye.card}e6`,border:`1px solid ${ye.border}`,color:ye.textDim,fontSize:11,fontFamily:an.mono,textDecoration:"none",backdropFilter:"blur(8px)",transition:"color 0.2s"};return a.pathname==="/"?oe.jsx("a",{href:"/",style:t,children:"← 전체 교재"}):oe.jsx(wr,{to:"/",style:t,children:"← 목차"})}function Lx(){const[a,t]=Q.useState(E4);return Q.useEffect(()=>l2(t),[]),oe.jsx("button",{className:"theme-toggle",onClick:T4,title:a==="dark"?"라이트 모드로":"다크 모드로",children:a==="dark"?"☀":"☾"})}function zx(){const[,a]=Q.useState(0);return Q.useEffect(()=>l2(()=>a(t=>t+1)),[]),oe.jsxs(S4,{children:[oe.jsx(_x,{}),oe.jsx(Lx,{}),oe.jsx(Q.Suspense,{fallback:oe.jsx(kx,{}),children:oe.jsxs(x4,{children:[oe.jsx(lo,{path:"/",element:oe.jsx(Sx,{})}),Hn.map(t=>oe.jsxs(Q.Fragment,{children:[oe.jsx(lo,{path:`/${t.slug}`,element:oe.jsx(h4,{to:`/${t.slug}/0`,replace:!0})}),oe.jsx(lo,{path:`/${t.slug}/:sectionIdx`,element:oe.jsx(wx,{chapter:t})})]},t.slug))]})})]})}ym.createRoot(document.getElementById("root")).render(oe.jsx(zx,{}));export{ye as C,qx as S,Mx as c,an as f,Tx as i,oe as j,ex as k,Q as r};
