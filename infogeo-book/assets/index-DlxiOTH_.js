const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ch03-distance-XD7gMh7b.js","assets/components-BInSxCOM.js","assets/log-DsKyiG9m.js","assets/continuous-D95oaVnR.js","assets/linear-vNx_t4yF.js","assets/ch04-paths-BodYCZhS.js","assets/ch05-surprise-and-information-IAn8aJ6l.js","assets/ch06-convex-duality-CaHLN2uC.js","assets/ch07-exponential-family-flashcards-rSDB2PsF.js","assets/ch09-fisher-information-CyaUN2Px.js","assets/ch11-geometry-of-inference-CVhEo7g2.js","assets/ch12-convergence-BgOIWYd1.js","assets/ch14-diffusion-CnRNhTs6.js","assets/ch15-flow-matching-dUiXq1TS.js","assets/ch16-broadening-narrowing-CY-cH0I2.js","assets/ch17-scaling-Dm_WF73i.js"])))=>i.map(i=>d[i]);
var o2=Object.defineProperty;var u2=(l,n,r)=>n in l?o2(l,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[n]=r;var He=(l,n,r)=>u2(l,typeof n!="symbol"?n+"":n,r);function c2(l,n){for(var r=0;r<n.length;r++){const i=n[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in l)){const u=Object.getOwnPropertyDescriptor(i,s);u&&Object.defineProperty(l,s,u.get?u:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function h2(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var wo={exports:{}},zl={},ko={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function d2(){if(Lh)return Se;Lh=1;var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.iterator;function T(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,F={};function D(R,O,ve){this.props=R,this.context=O,this.refs=F,this.updater=ve||A}D.prototype.isReactComponent={},D.prototype.setState=function(R,O){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,O,"setState")},D.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function q(){}q.prototype=D.prototype;function $(R,O,ve){this.props=R,this.context=O,this.refs=F,this.updater=ve||A}var Q=$.prototype=new q;Q.constructor=$,I(Q,D.prototype),Q.isPureReactComponent=!0;var re=Array.isArray,ue=Object.prototype.hasOwnProperty,ce={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function ge(R,O,ve){var be,Ee={},Ae=null,Le=null;if(O!=null)for(be in O.ref!==void 0&&(Le=O.ref),O.key!==void 0&&(Ae=""+O.key),O)ue.call(O,be)&&!me.hasOwnProperty(be)&&(Ee[be]=O[be]);var Fe=arguments.length-2;if(Fe===1)Ee.children=ve;else if(1<Fe){for(var Ie=Array(Fe),Tn=0;Tn<Fe;Tn++)Ie[Tn]=arguments[Tn+2];Ee.children=Ie}if(R&&R.defaultProps)for(be in Fe=R.defaultProps,Fe)Ee[be]===void 0&&(Ee[be]=Fe[be]);return{$$typeof:l,type:R,key:Ae,ref:Le,props:Ee,_owner:ce.current}}function Te(R,O){return{$$typeof:l,type:R.type,key:O,ref:R.ref,props:R.props,_owner:R._owner}}function Ce(R){return typeof R=="object"&&R!==null&&R.$$typeof===l}function on(R){var O={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ve){return O[ve]})}var Oe=/\/+/g;function Qe(R,O){return typeof R=="object"&&R!==null&&R.key!=null?on(""+R.key):O.toString(36)}function rn(R,O,ve,be,Ee){var Ae=typeof R;(Ae==="undefined"||Ae==="boolean")&&(R=null);var Le=!1;if(R===null)Le=!0;else switch(Ae){case"string":case"number":Le=!0;break;case"object":switch(R.$$typeof){case l:case n:Le=!0}}if(Le)return Le=R,Ee=Ee(Le),R=be===""?"."+Qe(Le,0):be,re(Ee)?(ve="",R!=null&&(ve=R.replace(Oe,"$&/")+"/"),rn(Ee,O,ve,"",function(Tn){return Tn})):Ee!=null&&(Ce(Ee)&&(Ee=Te(Ee,ve+(!Ee.key||Le&&Le.key===Ee.key?"":(""+Ee.key).replace(Oe,"$&/")+"/")+R)),O.push(Ee)),1;if(Le=0,be=be===""?".":be+":",re(R))for(var Fe=0;Fe<R.length;Fe++){Ae=R[Fe];var Ie=be+Qe(Ae,Fe);Le+=rn(Ae,O,ve,Ie,Ee)}else if(Ie=T(R),typeof Ie=="function")for(R=Ie.call(R),Fe=0;!(Ae=R.next()).done;)Ae=Ae.value,Ie=be+Qe(Ae,Fe++),Le+=rn(Ae,O,ve,Ie,Ee);else if(Ae==="object")throw O=String(R),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Le}function ln(R,O,ve){if(R==null)return R;var be=[],Ee=0;return rn(R,be,"","",function(Ae){return O.call(ve,Ae,Ee++)}),be}function Ye(R){if(R._status===-1){var O=R._result;O=O(),O.then(function(ve){(R._status===0||R._status===-1)&&(R._status=1,R._result=ve)},function(ve){(R._status===0||R._status===-1)&&(R._status=2,R._result=ve)}),R._status===-1&&(R._status=0,R._result=O)}if(R._status===1)return R._result.default;throw R._result}var je={current:null},Y={transition:null},he={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Y,ReactCurrentOwner:ce};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:ln,forEach:function(R,O,ve){ln(R,function(){O.apply(this,arguments)},ve)},count:function(R){var O=0;return ln(R,function(){O++}),O},toArray:function(R){return ln(R,function(O){return O})||[]},only:function(R){if(!Ce(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},Se.Component=D,Se.Fragment=r,Se.Profiler=s,Se.PureComponent=$,Se.StrictMode=i,Se.Suspense=v,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Se.act=Z,Se.cloneElement=function(R,O,ve){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var be=I({},R.props),Ee=R.key,Ae=R.ref,Le=R._owner;if(O!=null){if(O.ref!==void 0&&(Ae=O.ref,Le=ce.current),O.key!==void 0&&(Ee=""+O.key),R.type&&R.type.defaultProps)var Fe=R.type.defaultProps;for(Ie in O)ue.call(O,Ie)&&!me.hasOwnProperty(Ie)&&(be[Ie]=O[Ie]===void 0&&Fe!==void 0?Fe[Ie]:O[Ie])}var Ie=arguments.length-2;if(Ie===1)be.children=ve;else if(1<Ie){Fe=Array(Ie);for(var Tn=0;Tn<Ie;Tn++)Fe[Tn]=arguments[Tn+2];be.children=Fe}return{$$typeof:l,type:R.type,key:Ee,ref:Ae,props:be,_owner:Le}},Se.createContext=function(R){return R={$$typeof:h,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:u,_context:R},R.Consumer=R},Se.createElement=ge,Se.createFactory=function(R){var O=ge.bind(null,R);return O.type=R,O},Se.createRef=function(){return{current:null}},Se.forwardRef=function(R){return{$$typeof:f,render:R}},Se.isValidElement=Ce,Se.lazy=function(R){return{$$typeof:w,_payload:{_status:-1,_result:R},_init:Ye}},Se.memo=function(R,O){return{$$typeof:g,type:R,compare:O===void 0?null:O}},Se.startTransition=function(R){var O=Y.transition;Y.transition={};try{R()}finally{Y.transition=O}},Se.unstable_act=Z,Se.useCallback=function(R,O){return je.current.useCallback(R,O)},Se.useContext=function(R){return je.current.useContext(R)},Se.useDebugValue=function(){},Se.useDeferredValue=function(R){return je.current.useDeferredValue(R)},Se.useEffect=function(R,O){return je.current.useEffect(R,O)},Se.useId=function(){return je.current.useId()},Se.useImperativeHandle=function(R,O,ve){return je.current.useImperativeHandle(R,O,ve)},Se.useInsertionEffect=function(R,O){return je.current.useInsertionEffect(R,O)},Se.useLayoutEffect=function(R,O){return je.current.useLayoutEffect(R,O)},Se.useMemo=function(R,O){return je.current.useMemo(R,O)},Se.useReducer=function(R,O,ve){return je.current.useReducer(R,O,ve)},Se.useRef=function(R){return je.current.useRef(R)},Se.useState=function(R){return je.current.useState(R)},Se.useSyncExternalStore=function(R,O,ve){return je.current.useSyncExternalStore(R,O,ve)},Se.useTransition=function(){return je.current.useTransition()},Se.version="18.3.1",Se}var Rh;function pu(){return Rh||(Rh=1,ko.exports=d2()),ko.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function f2(){if(Dh)return zl;Dh=1;var l=pu(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,v,g){var w,b={},T=null,A=null;g!==void 0&&(T=""+g),v.key!==void 0&&(T=""+v.key),v.ref!==void 0&&(A=v.ref);for(w in v)i.call(v,w)&&!u.hasOwnProperty(w)&&(b[w]=v[w]);if(f&&f.defaultProps)for(w in v=f.defaultProps,v)b[w]===void 0&&(b[w]=v[w]);return{$$typeof:n,type:f,key:T,ref:A,props:b,_owner:s.current}}return zl.Fragment=r,zl.jsx=h,zl.jsxs=h,zl}var Fh;function p2(){return Fh||(Fh=1,wo.exports=f2()),wo.exports}var ie=p2(),Xa={},bo={exports:{}},Hn={},So={exports:{}},zo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nh;function m2(){return Nh||(Nh=1,(function(l){function n(Y,he){var Z=Y.length;Y.push(he);e:for(;0<Z;){var R=Z-1>>>1,O=Y[R];if(0<s(O,he))Y[R]=he,Y[Z]=O,Z=R;else break e}}function r(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var he=Y[0],Z=Y.pop();if(Z!==he){Y[0]=Z;e:for(var R=0,O=Y.length,ve=O>>>1;R<ve;){var be=2*(R+1)-1,Ee=Y[be],Ae=be+1,Le=Y[Ae];if(0>s(Ee,Z))Ae<O&&0>s(Le,Ee)?(Y[R]=Le,Y[Ae]=Z,R=Ae):(Y[R]=Ee,Y[be]=Z,R=be);else if(Ae<O&&0>s(Le,Z))Y[R]=Le,Y[Ae]=Z,R=Ae;else break e}}return he}function s(Y,he){var Z=Y.sortIndex-he.sortIndex;return Z!==0?Z:Y.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;l.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();l.unstable_now=function(){return h.now()-f}}var v=[],g=[],w=1,b=null,T=3,A=!1,I=!1,F=!1,D=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(Y){for(var he=r(g);he!==null;){if(he.callback===null)i(g);else if(he.startTime<=Y)i(g),he.sortIndex=he.expirationTime,n(v,he);else break;he=r(g)}}function re(Y){if(F=!1,Q(Y),!I)if(r(v)!==null)I=!0,Ye(ue);else{var he=r(g);he!==null&&je(re,he.startTime-Y)}}function ue(Y,he){I=!1,F&&(F=!1,q(ge),ge=-1),A=!0;var Z=T;try{for(Q(he),b=r(v);b!==null&&(!(b.expirationTime>he)||Y&&!on());){var R=b.callback;if(typeof R=="function"){b.callback=null,T=b.priorityLevel;var O=R(b.expirationTime<=he);he=l.unstable_now(),typeof O=="function"?b.callback=O:b===r(v)&&i(v),Q(he)}else i(v);b=r(v)}if(b!==null)var ve=!0;else{var be=r(g);be!==null&&je(re,be.startTime-he),ve=!1}return ve}finally{b=null,T=Z,A=!1}}var ce=!1,me=null,ge=-1,Te=5,Ce=-1;function on(){return!(l.unstable_now()-Ce<Te)}function Oe(){if(me!==null){var Y=l.unstable_now();Ce=Y;var he=!0;try{he=me(!0,Y)}finally{he?Qe():(ce=!1,me=null)}}else ce=!1}var Qe;if(typeof $=="function")Qe=function(){$(Oe)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,ln=rn.port2;rn.port1.onmessage=Oe,Qe=function(){ln.postMessage(null)}}else Qe=function(){D(Oe,0)};function Ye(Y){me=Y,ce||(ce=!0,Qe())}function je(Y,he){ge=D(function(){Y(l.unstable_now())},he)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(Y){Y.callback=null},l.unstable_continueExecution=function(){I||A||(I=!0,Ye(ue))},l.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<Y?Math.floor(1e3/Y):5},l.unstable_getCurrentPriorityLevel=function(){return T},l.unstable_getFirstCallbackNode=function(){return r(v)},l.unstable_next=function(Y){switch(T){case 1:case 2:case 3:var he=3;break;default:he=T}var Z=T;T=he;try{return Y()}finally{T=Z}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=function(){},l.unstable_runWithPriority=function(Y,he){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var Z=T;T=Y;try{return he()}finally{T=Z}},l.unstable_scheduleCallback=function(Y,he,Z){var R=l.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?R+Z:R):Z=R,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=Z+O,Y={id:w++,callback:he,priorityLevel:Y,startTime:Z,expirationTime:O,sortIndex:-1},Z>R?(Y.sortIndex=Z,n(g,Y),r(v)===null&&Y===r(g)&&(F?(q(ge),ge=-1):F=!0,je(re,Z-R))):(Y.sortIndex=O,n(v,Y),I||A||(I=!0,Ye(ue))),Y},l.unstable_shouldYield=on,l.unstable_wrapCallback=function(Y){var he=T;return function(){var Z=T;T=he;try{return Y.apply(this,arguments)}finally{T=Z}}}})(zo)),zo}var Ph;function v2(){return Ph||(Ph=1,So.exports=m2()),So.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function g2(){if(Ih)return Hn;Ih=1;var l=pu(),n=v2();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function u(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(s[e]=t,e=0;e<t.length;e++)i.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},b={};function T(e){return v.call(b,e)?!0:v.call(w,e)?!1:g.test(e)?b[e]=!0:(w[e]=!0,!1)}function A(e,t,a,o){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,t,a,o){if(t===null||typeof t>"u"||A(e,t,a,o))return!0;if(o)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function F(e,t,a,o,c,p,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=c,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=x}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new F(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new F(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new F(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new F(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new F(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new F(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new F(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new F(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new F(e,5,!1,e.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(q,$);D[t]=new F(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(q,$);D[t]=new F(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(q,$);D[t]=new F(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new F(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new F("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new F(e,1,!1,e.toLowerCase(),null,!0,!0)});function Q(e,t,a,o){var c=D.hasOwnProperty(t)?D[t]:null;(c!==null?c.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I(t,a,c,o)&&(a=null),o||c===null?T(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):c.mustUseProperty?e[c.propertyName]=a===null?c.type===3?!1:"":a:(t=c.attributeName,o=c.attributeNamespace,a===null?e.removeAttribute(t):(c=c.type,a=c===3||c===4&&a===!0?"":""+a,o?e.setAttributeNS(o,t,a):e.setAttribute(t,a))))}var re=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ce=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),ge=Symbol.for("react.strict_mode"),Te=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),on=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),Qe=Symbol.for("react.suspense"),rn=Symbol.for("react.suspense_list"),ln=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Y=Symbol.iterator;function he(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,R;function O(e){if(R===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);R=t&&t[1]||""}return`
`+R+e}var ve=!1;function be(e,t){if(!e||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(B){var o=B}Reflect.construct(e,[],t)}else{try{t.call()}catch(B){o=B}e.call(t.prototype)}else{try{throw Error()}catch(B){o=B}e()}}catch(B){if(B&&o&&typeof B.stack=="string"){for(var c=B.stack.split(`
`),p=o.stack.split(`
`),x=c.length-1,S=p.length-1;1<=x&&0<=S&&c[x]!==p[S];)S--;for(;1<=x&&0<=S;x--,S--)if(c[x]!==p[S]){if(x!==1||S!==1)do if(x--,S--,0>S||c[x]!==p[S]){var M=`
`+c[x].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=x&&0<=S);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?O(e):""}function Ee(e){switch(e.tag){case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return e=be(e.type,!1),e;case 11:return e=be(e.type.render,!1),e;case 1:return e=be(e.type,!0),e;default:return""}}function Ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case me:return"Fragment";case ce:return"Portal";case Te:return"Profiler";case ge:return"StrictMode";case Qe:return"Suspense";case rn:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case on:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case Oe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ln:return t=e.displayName||null,t!==null?t:Ae(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Ae(e(t))}catch{}}return null}function Le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(t);case 8:return t===ge?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Fe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tn(e){var t=Ie(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,p=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(x){o=""+x,p.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Tn(e))}function F0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=Ie(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Ct(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wt(e,t){var a=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function _l(e,t){var a=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;a=Fe(t.value!=null?t.value:a),e._wrapperState={initialChecked:o,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ql(e,t){t=t.checked,t!=null&&Q(e,"checked",t,!1)}function N0(e,t){ql(e,t);var a=Fe(t.value),o=t.type;if(a!=null)o==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qr(e,t.type,a):t.hasOwnProperty("defaultValue")&&Qr(e,t.type,Fe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function P0(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Qr(e,t,a){(t!=="number"||Ct(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var gt=Array.isArray;function Xt(e,t,a,o){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Fe(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function I0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yr(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(r(92));if(gt(a)){if(1<a.length)throw Error(r(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Fe(a)}}function B0(e,t){var a=Fe(t.value),o=Fe(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),o!=null&&(e.defaultValue=""+o)}function O0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lt,Cr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,o,c){MSApp.execUnsafeLocalFunction(function(){return e(t,a,o,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lt=Lt||document.createElement("div"),Lt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function q0(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var j0={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},df=["Webkit","ms","Moz","O"];Object.keys(j0).forEach(function(e){df.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),j0[t]=j0[e]})});function Vu(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||j0.hasOwnProperty(e)&&j0[e]?(""+t).trim():t+"px"}function Uu(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var o=a.indexOf("--")===0,c=Vu(a,t[a],o);a==="float"&&(a="cssFloat"),o?e.setProperty(a,c):e[a]=c}}var ff=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(ff[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function Ni(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,Zr=null,e0=null;function Gu(e){if(e=ul(e)){if(typeof Pi!="function")throw Error(r(280));var t=e.stateNode;t&&(t=ca(t),Pi(e.stateNode,e.type,t))}}function Wu(e){Zr?e0?e0.push(e):e0=[e]:Zr=e}function Xu(){if(Zr){var e=Zr,t=e0;if(e0=Zr=null,Gu(e),t)for(e=0;e<t.length;e++)Gu(t[e])}}function Ju(e,t){return e(t)}function Qu(){}var Ii=!1;function Yu(e,t,a){if(Ii)return e(t,a);Ii=!0;try{return Ju(e,t,a)}finally{Ii=!1,(Zr!==null||e0!==null)&&(Qu(),Xu())}}function K0(e,t){var a=e.stateNode;if(a===null)return null;var o=ca(a);if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,t,typeof a));return a}var Bi=!1;if(f)try{var H0={};Object.defineProperty(H0,"passive",{get:function(){Bi=!0}}),window.addEventListener("test",H0,H0),window.removeEventListener("test",H0,H0)}catch{Bi=!1}function pf(e,t,a,o,c,p,x,S,M){var B=Array.prototype.slice.call(arguments,3);try{t.apply(a,B)}catch(K){this.onError(K)}}var $0=!1,Kl=null,Hl=!1,Oi=null,mf={onError:function(e){$0=!0,Kl=e}};function vf(e,t,a,o,c,p,x,S,M){$0=!1,Kl=null,pf.apply(mf,arguments)}function gf(e,t,a,o,c,p,x,S,M){if(vf.apply(this,arguments),$0){if($0){var B=Kl;$0=!1,Kl=null}else throw Error(r(198));Hl||(Hl=!0,Oi=B)}}function Lr(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function e1(e){if(Lr(e)!==e)throw Error(r(188))}function yf(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(r(188));return t!==e?null:e}for(var a=e,o=t;;){var c=a.return;if(c===null)break;var p=c.alternate;if(p===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===a)return e1(c),e;if(p===o)return e1(c),t;p=p.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=p;else{for(var x=!1,S=c.child;S;){if(S===a){x=!0,a=c,o=p;break}if(S===o){x=!0,o=c,a=p;break}S=S.sibling}if(!x){for(S=p.child;S;){if(S===a){x=!0,a=p,o=c;break}if(S===o){x=!0,o=p,a=c;break}S=S.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:t}function n1(e){return e=yf(e),e!==null?t1(e):null}function t1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=t1(e);if(t!==null)return t;e=e.sibling}return null}var r1=n.unstable_scheduleCallback,l1=n.unstable_cancelCallback,xf=n.unstable_shouldYield,wf=n.unstable_requestPaint,un=n.unstable_now,kf=n.unstable_getCurrentPriorityLevel,_i=n.unstable_ImmediatePriority,a1=n.unstable_UserBlockingPriority,$l=n.unstable_NormalPriority,bf=n.unstable_LowPriority,i1=n.unstable_IdlePriority,Vl=null,yt=null;function Sf(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Vl,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Ef,zf=Math.log,Tf=Math.LN2;function Ef(e){return e>>>=0,e===0?32:31-(zf(e)/Tf|0)|0}var Ul=64,Gl=4194304;function V0(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wl(e,t){var a=e.pendingLanes;if(a===0)return 0;var o=0,c=e.suspendedLanes,p=e.pingedLanes,x=a&268435455;if(x!==0){var S=x&~c;S!==0?o=V0(S):(p&=x,p!==0&&(o=V0(p)))}else x=a&~c,x!==0?o=V0(x):p!==0&&(o=V0(p));if(o===0)return 0;if(t!==0&&t!==o&&(t&c)===0&&(c=o&-o,p=t&-t,c>=p||c===16&&(p&4194240)!==0))return t;if((o&4)!==0&&(o|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)a=31-ot(t),c=1<<a,o|=e[a],t&=~c;return o}function Af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mf(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,p=e.pendingLanes;0<p;){var x=31-ot(p),S=1<<x,M=c[x];M===-1?((S&a)===0||(S&o)!==0)&&(c[x]=Af(S,t)):M<=t&&(e.expiredLanes|=S),p&=~S}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function s1(){var e=Ul;return Ul<<=1,(Ul&4194240)===0&&(Ul=64),e}function ji(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function U0(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=a}function Cf(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<a;){var c=31-ot(a),p=1<<c;t[c]=0,o[c]=-1,e[c]=-1,a&=~p}}function Ki(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-ot(a),c=1<<o;c&t|e[o]&t&&(e[o]|=t),a&=~c}}var Ke=0;function o1(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var u1,Hi,c1,h1,d1,$i=!1,Xl=[],Jt=null,Qt=null,Yt=null,G0=new Map,W0=new Map,Zt=[],Lf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function f1(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Yt=null;break;case"pointerover":case"pointerout":G0.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":W0.delete(t.pointerId)}}function X0(e,t,a,o,c,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:p,targetContainers:[c]},t!==null&&(t=ul(t),t!==null&&Hi(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Rf(e,t,a,o,c){switch(t){case"focusin":return Jt=X0(Jt,e,t,a,o,c),!0;case"dragenter":return Qt=X0(Qt,e,t,a,o,c),!0;case"mouseover":return Yt=X0(Yt,e,t,a,o,c),!0;case"pointerover":var p=c.pointerId;return G0.set(p,X0(G0.get(p)||null,e,t,a,o,c)),!0;case"gotpointercapture":return p=c.pointerId,W0.set(p,X0(W0.get(p)||null,e,t,a,o,c)),!0}return!1}function p1(e){var t=Rr(e.target);if(t!==null){var a=Lr(t);if(a!==null){if(t=a.tag,t===13){if(t=Zu(a),t!==null){e.blockedOn=t,d1(e.priority,function(){c1(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ui(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Fi=o,a.target.dispatchEvent(o),Fi=null}else return t=ul(a),t!==null&&Hi(t),e.blockedOn=a,!1;t.shift()}return!0}function m1(e,t,a){Jl(e)&&a.delete(t)}function Df(){$i=!1,Jt!==null&&Jl(Jt)&&(Jt=null),Qt!==null&&Jl(Qt)&&(Qt=null),Yt!==null&&Jl(Yt)&&(Yt=null),G0.forEach(m1),W0.forEach(m1)}function J0(e,t){e.blockedOn===t&&(e.blockedOn=null,$i||($i=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Df)))}function Q0(e){function t(c){return J0(c,e)}if(0<Xl.length){J0(Xl[0],e);for(var a=1;a<Xl.length;a++){var o=Xl[a];o.blockedOn===e&&(o.blockedOn=null)}}for(Jt!==null&&J0(Jt,e),Qt!==null&&J0(Qt,e),Yt!==null&&J0(Yt,e),G0.forEach(t),W0.forEach(t),a=0;a<Zt.length;a++)o=Zt[a],o.blockedOn===e&&(o.blockedOn=null);for(;0<Zt.length&&(a=Zt[0],a.blockedOn===null);)p1(a),a.blockedOn===null&&Zt.shift()}var n0=re.ReactCurrentBatchConfig,Ql=!0;function Ff(e,t,a,o){var c=Ke,p=n0.transition;n0.transition=null;try{Ke=1,Vi(e,t,a,o)}finally{Ke=c,n0.transition=p}}function Nf(e,t,a,o){var c=Ke,p=n0.transition;n0.transition=null;try{Ke=4,Vi(e,t,a,o)}finally{Ke=c,n0.transition=p}}function Vi(e,t,a,o){if(Ql){var c=Ui(e,t,a,o);if(c===null)us(e,t,o,Yl,a),f1(e,o);else if(Rf(c,e,t,a,o))o.stopPropagation();else if(f1(e,o),t&4&&-1<Lf.indexOf(e)){for(;c!==null;){var p=ul(c);if(p!==null&&u1(p),p=Ui(e,t,a,o),p===null&&us(e,t,o,Yl,a),p===c)break;c=p}c!==null&&o.stopPropagation()}else us(e,t,o,null,a)}}var Yl=null;function Ui(e,t,a,o){if(Yl=null,e=Ni(o),e=Rr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Zu(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yl=e,null}function v1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kf()){case _i:return 1;case a1:return 4;case $l:case bf:return 16;case i1:return 536870912;default:return 16}default:return 16}}var er=null,Gi=null,Zl=null;function g1(){if(Zl)return Zl;var e,t=Gi,a=t.length,o,c="value"in er?er.value:er.textContent,p=c.length;for(e=0;e<a&&t[e]===c[e];e++);var x=a-e;for(o=1;o<=x&&t[a-o]===c[p-o];o++);return Zl=c.slice(e,1<o?1-o:void 0)}function ea(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function na(){return!0}function y1(){return!1}function Vn(e){function t(a,o,c,p,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=p,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?na:y1,this.isPropagationStopped=y1,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),t}var t0={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Vn(t0),Y0=Z({},t0,{view:0,detail:0}),Pf=Vn(Y0),Xi,Ji,Z0,ta=Z({},Y0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Z0&&(Z0&&e.type==="mousemove"?(Xi=e.screenX-Z0.screenX,Ji=e.screenY-Z0.screenY):Ji=Xi=0,Z0=e),Xi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),x1=Vn(ta),If=Z({},ta,{dataTransfer:0}),Bf=Vn(If),Of=Z({},Y0,{relatedTarget:0}),Qi=Vn(Of),_f=Z({},t0,{animationName:0,elapsedTime:0,pseudoElement:0}),qf=Vn(_f),jf=Z({},t0,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kf=Vn(jf),Hf=Z({},t0,{data:0}),w1=Vn(Hf),$f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uf[e])?!!t[e]:!1}function Yi(){return Gf}var Wf=Z({},Y0,{key:function(e){if(e.key){var t=$f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ea(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?ea(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ea(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xf=Vn(Wf),Jf=Z({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k1=Vn(Jf),Qf=Z({},Y0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yi}),Yf=Vn(Qf),Zf=Z({},t0,{propertyName:0,elapsedTime:0,pseudoElement:0}),ep=Vn(Zf),np=Z({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tp=Vn(np),rp=[9,13,27,32],Zi=f&&"CompositionEvent"in window,el=null;f&&"documentMode"in document&&(el=document.documentMode);var lp=f&&"TextEvent"in window&&!el,b1=f&&(!Zi||el&&8<el&&11>=el),S1=" ",z1=!1;function T1(e,t){switch(e){case"keyup":return rp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var r0=!1;function ap(e,t){switch(e){case"compositionend":return E1(t);case"keypress":return t.which!==32?null:(z1=!0,S1);case"textInput":return e=t.data,e===S1&&z1?null:e;default:return null}}function ip(e,t){if(r0)return e==="compositionend"||!Zi&&T1(e,t)?(e=g1(),Zl=Gi=er=null,r0=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return b1&&t.locale!=="ko"?null:t.data;default:return null}}var sp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function A1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sp[e.type]:t==="textarea"}function M1(e,t,a,o){Wu(o),t=sa(t,"onChange"),0<t.length&&(a=new Wi("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var nl=null,tl=null;function op(e){U1(e,0)}function ra(e){var t=o0(e);if(F0(t))return e}function up(e,t){if(e==="change")return t}var C1=!1;if(f){var es;if(f){var ns="oninput"in document;if(!ns){var L1=document.createElement("div");L1.setAttribute("oninput","return;"),ns=typeof L1.oninput=="function"}es=ns}else es=!1;C1=es&&(!document.documentMode||9<document.documentMode)}function R1(){nl&&(nl.detachEvent("onpropertychange",D1),tl=nl=null)}function D1(e){if(e.propertyName==="value"&&ra(tl)){var t=[];M1(t,tl,e,Ni(e)),Yu(op,t)}}function cp(e,t,a){e==="focusin"?(R1(),nl=t,tl=a,nl.attachEvent("onpropertychange",D1)):e==="focusout"&&R1()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ra(tl)}function dp(e,t){if(e==="click")return ra(t)}function fp(e,t){if(e==="input"||e==="change")return ra(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:pp;function rl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!v.call(t,c)||!ut(e[c],t[c]))return!1}return!0}function F1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function N1(e,t){var a=F1(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=F1(a)}}function P1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?P1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I1(){for(var e=window,t=Ct();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ct(e.document)}return t}function ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mp(e){var t=I1(),a=e.focusedElem,o=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&P1(a.ownerDocument.documentElement,a)){if(o!==null&&ts(a)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=a.textContent.length,p=Math.min(o.start,c);o=o.end===void 0?p:Math.min(o.end,c),!e.extend&&p>o&&(c=o,o=p,p=c),c=N1(a,p);var x=N1(a,o);c&&x&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),p>o?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vp=f&&"documentMode"in document&&11>=document.documentMode,l0=null,rs=null,ll=null,ls=!1;function B1(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ls||l0==null||l0!==Ct(o)||(o=l0,"selectionStart"in o&&ts(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ll&&rl(ll,o)||(ll=o,o=sa(rs,"onSelect"),0<o.length&&(t=new Wi("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=l0)))}function la(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var a0={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},as={},O1={};f&&(O1=document.createElement("div").style,"AnimationEvent"in window||(delete a0.animationend.animation,delete a0.animationiteration.animation,delete a0.animationstart.animation),"TransitionEvent"in window||delete a0.transitionend.transition);function aa(e){if(as[e])return as[e];if(!a0[e])return e;var t=a0[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in O1)return as[e]=t[a];return e}var _1=aa("animationend"),q1=aa("animationiteration"),j1=aa("animationstart"),K1=aa("transitionend"),H1=new Map,$1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){H1.set(e,t),u(t,[e])}for(var is=0;is<$1.length;is++){var ss=$1[is],gp=ss.toLowerCase(),yp=ss[0].toUpperCase()+ss.slice(1);nr(gp,"on"+yp)}nr(_1,"onAnimationEnd"),nr(q1,"onAnimationIteration"),nr(j1,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(K1,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function V1(e,t,a){var o=e.type||"unknown-event";e.currentTarget=a,gf(o,t,void 0,e),e.currentTarget=null}function U1(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var p=void 0;if(t)for(var x=o.length-1;0<=x;x--){var S=o[x],M=S.instance,B=S.currentTarget;if(S=S.listener,M!==p&&c.isPropagationStopped())break e;V1(c,S,B),p=M}else for(x=0;x<o.length;x++){if(S=o[x],M=S.instance,B=S.currentTarget,S=S.listener,M!==p&&c.isPropagationStopped())break e;V1(c,S,B),p=M}}}if(Hl)throw e=Oi,Hl=!1,Oi=null,e}function Ue(e,t){var a=t[ms];a===void 0&&(a=t[ms]=new Set);var o=e+"__bubble";a.has(o)||(G1(t,e,2,!1),a.add(o))}function os(e,t,a){var o=0;t&&(o|=4),G1(a,e,o,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function il(e){if(!e[ia]){e[ia]=!0,i.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||os(a,!1,e),os(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,os("selectionchange",!1,t))}}function G1(e,t,a,o){switch(v1(t)){case 1:var c=Ff;break;case 4:c=Nf;break;default:c=Vi}a=c.bind(null,t,a,e),c=void 0,!Bi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function us(e,t,a,o,c){var p=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var S=o.stateNode.containerInfo;if(S===c||S.nodeType===8&&S.parentNode===c)break;if(x===4)for(x=o.return;x!==null;){var M=x.tag;if((M===3||M===4)&&(M=x.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;x=x.return}for(;S!==null;){if(x=Rr(S),x===null)return;if(M=x.tag,M===5||M===6){o=p=x;continue e}S=S.parentNode}}o=o.return}Yu(function(){var B=p,K=Ni(a),V=[];e:{var j=H1.get(e);if(j!==void 0){var ne=Wi,ae=e;switch(e){case"keypress":if(ea(a)===0)break e;case"keydown":case"keyup":ne=Xf;break;case"focusin":ae="focus",ne=Qi;break;case"focusout":ae="blur",ne=Qi;break;case"beforeblur":case"afterblur":ne=Qi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=x1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=Yf;break;case _1:case q1:case j1:ne=qf;break;case K1:ne=ep;break;case"scroll":ne=Pf;break;case"wheel":ne=tp;break;case"copy":case"cut":case"paste":ne=Kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=k1}var se=(t&4)!==0,cn=!se&&e==="scroll",N=se?j!==null?j+"Capture":null:j;se=[];for(var L=B,P;L!==null;){P=L;var W=P.stateNode;if(P.tag===5&&W!==null&&(P=W,N!==null&&(W=K0(L,N),W!=null&&se.push(sl(L,W,P)))),cn)break;L=L.return}0<se.length&&(j=new ne(j,ae,null,a,K),V.push({event:j,listeners:se}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",j&&a!==Fi&&(ae=a.relatedTarget||a.fromElement)&&(Rr(ae)||ae[Rt]))break e;if((ne||j)&&(j=K.window===K?K:(j=K.ownerDocument)?j.defaultView||j.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=B,ae=ae?Rr(ae):null,ae!==null&&(cn=Lr(ae),ae!==cn||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=B),ne!==ae)){if(se=x1,W="onMouseLeave",N="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(se=k1,W="onPointerLeave",N="onPointerEnter",L="pointer"),cn=ne==null?j:o0(ne),P=ae==null?j:o0(ae),j=new se(W,L+"leave",ne,a,K),j.target=cn,j.relatedTarget=P,W=null,Rr(K)===B&&(se=new se(N,L+"enter",ae,a,K),se.target=P,se.relatedTarget=cn,W=se),cn=W,ne&&ae)n:{for(se=ne,N=ae,L=0,P=se;P;P=i0(P))L++;for(P=0,W=N;W;W=i0(W))P++;for(;0<L-P;)se=i0(se),L--;for(;0<P-L;)N=i0(N),P--;for(;L--;){if(se===N||N!==null&&se===N.alternate)break n;se=i0(se),N=i0(N)}se=null}else se=null;ne!==null&&W1(V,j,ne,se,!1),ae!==null&&cn!==null&&W1(V,cn,ae,se,!0)}}e:{if(j=B?o0(B):window,ne=j.nodeName&&j.nodeName.toLowerCase(),ne==="select"||ne==="input"&&j.type==="file")var oe=up;else if(A1(j))if(C1)oe=fp;else{oe=hp;var de=cp}else(ne=j.nodeName)&&ne.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(oe=dp);if(oe&&(oe=oe(e,B))){M1(V,oe,a,K);break e}de&&de(e,j,B),e==="focusout"&&(de=j._wrapperState)&&de.controlled&&j.type==="number"&&Qr(j,"number",j.value)}switch(de=B?o0(B):window,e){case"focusin":(A1(de)||de.contentEditable==="true")&&(l0=de,rs=B,ll=null);break;case"focusout":ll=rs=l0=null;break;case"mousedown":ls=!0;break;case"contextmenu":case"mouseup":case"dragend":ls=!1,B1(V,a,K);break;case"selectionchange":if(vp)break;case"keydown":case"keyup":B1(V,a,K)}var fe;if(Zi)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else r0?T1(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(b1&&a.locale!=="ko"&&(r0||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&r0&&(fe=g1()):(er=K,Gi="value"in er?er.value:er.textContent,r0=!0)),de=sa(B,xe),0<de.length&&(xe=new w1(xe,e,null,a,K),V.push({event:xe,listeners:de}),fe?xe.data=fe:(fe=E1(a),fe!==null&&(xe.data=fe)))),(fe=lp?ap(e,a):ip(e,a))&&(B=sa(B,"onBeforeInput"),0<B.length&&(K=new w1("onBeforeInput","beforeinput",null,a,K),V.push({event:K,listeners:B}),K.data=fe))}U1(V,t)})}function sl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function sa(e,t){for(var a=t+"Capture",o=[];e!==null;){var c=e,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=K0(e,a),p!=null&&o.unshift(sl(e,p,c)),p=K0(e,t),p!=null&&o.push(sl(e,p,c))),e=e.return}return o}function i0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function W1(e,t,a,o,c){for(var p=t._reactName,x=[];a!==null&&a!==o;){var S=a,M=S.alternate,B=S.stateNode;if(M!==null&&M===o)break;S.tag===5&&B!==null&&(S=B,c?(M=K0(a,p),M!=null&&x.unshift(sl(a,M,S))):c||(M=K0(a,p),M!=null&&x.push(sl(a,M,S)))),a=a.return}x.length!==0&&e.push({event:t,listeners:x})}var wp=/\r\n?/g,kp=/\u0000|\uFFFD/g;function X1(e){return(typeof e=="string"?e:""+e).replace(wp,`
`).replace(kp,"")}function oa(e,t,a){if(t=X1(t),X1(e)!==t&&a)throw Error(r(425))}function ua(){}var cs=null,hs=null;function ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,J1=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof J1<"u"?function(e){return J1.resolve(null).then(e).catch(zp)}:fs;function zp(e){setTimeout(function(){throw e})}function ps(e,t){var a=t,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){e.removeChild(c),Q0(t);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);Q0(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Q1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var s0=Math.random().toString(36).slice(2),xt="__reactFiber$"+s0,ol="__reactProps$"+s0,Rt="__reactContainer$"+s0,ms="__reactEvents$"+s0,Tp="__reactListeners$"+s0,Ep="__reactHandles$"+s0;function Rr(e){var t=e[xt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Rt]||a[xt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Q1(e);e!==null;){if(a=e[xt])return a;e=Q1(e)}return t}e=a,a=e.parentNode}return null}function ul(e){return e=e[xt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function o0(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function ca(e){return e[ol]||null}var vs=[],u0=-1;function rr(e){return{current:e}}function Ge(e){0>u0||(e.current=vs[u0],vs[u0]=null,u0--)}function Ve(e,t){u0++,vs[u0]=e.current,e.current=t}var lr={},En=rr(lr),On=rr(!1),Dr=lr;function c0(e,t){var a=e.type.contextTypes;if(!a)return lr;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in a)c[p]=t[p];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function _n(e){return e=e.childContextTypes,e!=null}function ha(){Ge(On),Ge(En)}function Y1(e,t,a){if(En.current!==lr)throw Error(r(168));Ve(En,t),Ve(On,a)}function Z1(e,t,a){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return a;o=o.getChildContext();for(var c in o)if(!(c in t))throw Error(r(108,Le(e)||"Unknown",c));return Z({},a,o)}function da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lr,Dr=En.current,Ve(En,e),Ve(On,On.current),!0}function ec(e,t,a){var o=e.stateNode;if(!o)throw Error(r(169));a?(e=Z1(e,t,Dr),o.__reactInternalMemoizedMergedChildContext=e,Ge(On),Ge(En),Ve(En,e)):Ge(On),Ve(On,a)}var Dt=null,fa=!1,gs=!1;function nc(e){Dt===null?Dt=[e]:Dt.push(e)}function Ap(e){fa=!0,nc(e)}function ar(){if(!gs&&Dt!==null){gs=!0;var e=0,t=Ke;try{var a=Dt;for(Ke=1;e<a.length;e++){var o=a[e];do o=o(!0);while(o!==null)}Dt=null,fa=!1}catch(c){throw Dt!==null&&(Dt=Dt.slice(e+1)),r1(_i,ar),c}finally{Ke=t,gs=!1}}return null}var h0=[],d0=0,pa=null,ma=0,Zn=[],et=0,Fr=null,Ft=1,Nt="";function Nr(e,t){h0[d0++]=ma,h0[d0++]=pa,pa=e,ma=t}function tc(e,t,a){Zn[et++]=Ft,Zn[et++]=Nt,Zn[et++]=Fr,Fr=e;var o=Ft;e=Nt;var c=32-ot(o)-1;o&=~(1<<c),a+=1;var p=32-ot(t)+c;if(30<p){var x=c-c%5;p=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Ft=1<<32-ot(t)+c|a<<c|o,Nt=p+e}else Ft=1<<p|a<<c|o,Nt=e}function ys(e){e.return!==null&&(Nr(e,1),tc(e,1,0))}function xs(e){for(;e===pa;)pa=h0[--d0],h0[d0]=null,ma=h0[--d0],h0[d0]=null;for(;e===Fr;)Fr=Zn[--et],Zn[et]=null,Nt=Zn[--et],Zn[et]=null,Ft=Zn[--et],Zn[et]=null}var Un=null,Gn=null,We=!1,ct=null;function rc(e,t){var a=lt(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function lc(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Un=e,Gn=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Un=e,Gn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Fr!==null?{id:Ft,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=lt(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Un=e,Gn=null,!0):!1;default:return!1}}function ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(We){var t=Gn;if(t){var a=t;if(!lc(e,t)){if(ws(e))throw Error(r(418));t=tr(a.nextSibling);var o=Un;t&&lc(e,t)?rc(o,a):(e.flags=e.flags&-4097|2,We=!1,Un=e)}}else{if(ws(e))throw Error(r(418));e.flags=e.flags&-4097|2,We=!1,Un=e}}}function ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Un=e}function va(e){if(e!==Un)return!1;if(!We)return ac(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ds(e.type,e.memoizedProps)),t&&(t=Gn)){if(ws(e))throw ic(),Error(r(418));for(;t;)rc(e,t),t=tr(t.nextSibling)}if(ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Gn=tr(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Gn=null}}else Gn=Un?tr(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Gn;e;)e=tr(e.nextSibling)}function f0(){Gn=Un=null,We=!1}function bs(e){ct===null?ct=[e]:ct.push(e)}var Mp=re.ReactCurrentBatchConfig;function cl(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(r(309));var o=a.stateNode}if(!o)throw Error(r(147,e));var c=o,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(x){var S=c.refs;x===null?delete S[p]:S[p]=x},t._stringRef=p,t)}if(typeof e!="string")throw Error(r(284));if(!a._owner)throw Error(r(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function oc(e){function t(N,L){if(e){var P=N.deletions;P===null?(N.deletions=[L],N.flags|=16):P.push(L)}}function a(N,L){if(!e)return null;for(;L!==null;)t(N,L),L=L.sibling;return null}function o(N,L){for(N=new Map;L!==null;)L.key!==null?N.set(L.key,L):N.set(L.index,L),L=L.sibling;return N}function c(N,L){return N=fr(N,L),N.index=0,N.sibling=null,N}function p(N,L,P){return N.index=P,e?(P=N.alternate,P!==null?(P=P.index,P<L?(N.flags|=2,L):P):(N.flags|=2,L)):(N.flags|=1048576,L)}function x(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,L,P,W){return L===null||L.tag!==6?(L=po(P,N.mode,W),L.return=N,L):(L=c(L,P),L.return=N,L)}function M(N,L,P,W){var oe=P.type;return oe===me?K(N,L,P.props.children,W,P.key):L!==null&&(L.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ye&&sc(oe)===L.type)?(W=c(L,P.props),W.ref=cl(N,L,P),W.return=N,W):(W=ja(P.type,P.key,P.props,null,N.mode,W),W.ref=cl(N,L,P),W.return=N,W)}function B(N,L,P,W){return L===null||L.tag!==4||L.stateNode.containerInfo!==P.containerInfo||L.stateNode.implementation!==P.implementation?(L=mo(P,N.mode,W),L.return=N,L):(L=c(L,P.children||[]),L.return=N,L)}function K(N,L,P,W,oe){return L===null||L.tag!==7?(L=Kr(P,N.mode,W,oe),L.return=N,L):(L=c(L,P),L.return=N,L)}function V(N,L,P){if(typeof L=="string"&&L!==""||typeof L=="number")return L=po(""+L,N.mode,P),L.return=N,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ue:return P=ja(L.type,L.key,L.props,null,N.mode,P),P.ref=cl(N,null,L),P.return=N,P;case ce:return L=mo(L,N.mode,P),L.return=N,L;case Ye:var W=L._init;return V(N,W(L._payload),P)}if(gt(L)||he(L))return L=Kr(L,N.mode,P,null),L.return=N,L;ga(N,L)}return null}function j(N,L,P,W){var oe=L!==null?L.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return oe!==null?null:S(N,L,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return P.key===oe?M(N,L,P,W):null;case ce:return P.key===oe?B(N,L,P,W):null;case Ye:return oe=P._init,j(N,L,oe(P._payload),W)}if(gt(P)||he(P))return oe!==null?null:K(N,L,P,W,null);ga(N,P)}return null}function ne(N,L,P,W,oe){if(typeof W=="string"&&W!==""||typeof W=="number")return N=N.get(P)||null,S(L,N,""+W,oe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ue:return N=N.get(W.key===null?P:W.key)||null,M(L,N,W,oe);case ce:return N=N.get(W.key===null?P:W.key)||null,B(L,N,W,oe);case Ye:var de=W._init;return ne(N,L,P,de(W._payload),oe)}if(gt(W)||he(W))return N=N.get(P)||null,K(L,N,W,oe,null);ga(L,W)}return null}function ae(N,L,P,W){for(var oe=null,de=null,fe=L,xe=L=0,bn=null;fe!==null&&xe<P.length;xe++){fe.index>xe?(bn=fe,fe=null):bn=fe.sibling;var Ne=j(N,fe,P[xe],W);if(Ne===null){fe===null&&(fe=bn);break}e&&fe&&Ne.alternate===null&&t(N,fe),L=p(Ne,L,xe),de===null?oe=Ne:de.sibling=Ne,de=Ne,fe=bn}if(xe===P.length)return a(N,fe),We&&Nr(N,xe),oe;if(fe===null){for(;xe<P.length;xe++)fe=V(N,P[xe],W),fe!==null&&(L=p(fe,L,xe),de===null?oe=fe:de.sibling=fe,de=fe);return We&&Nr(N,xe),oe}for(fe=o(N,fe);xe<P.length;xe++)bn=ne(fe,N,xe,P[xe],W),bn!==null&&(e&&bn.alternate!==null&&fe.delete(bn.key===null?xe:bn.key),L=p(bn,L,xe),de===null?oe=bn:de.sibling=bn,de=bn);return e&&fe.forEach(function(pr){return t(N,pr)}),We&&Nr(N,xe),oe}function se(N,L,P,W){var oe=he(P);if(typeof oe!="function")throw Error(r(150));if(P=oe.call(P),P==null)throw Error(r(151));for(var de=oe=null,fe=L,xe=L=0,bn=null,Ne=P.next();fe!==null&&!Ne.done;xe++,Ne=P.next()){fe.index>xe?(bn=fe,fe=null):bn=fe.sibling;var pr=j(N,fe,Ne.value,W);if(pr===null){fe===null&&(fe=bn);break}e&&fe&&pr.alternate===null&&t(N,fe),L=p(pr,L,xe),de===null?oe=pr:de.sibling=pr,de=pr,fe=bn}if(Ne.done)return a(N,fe),We&&Nr(N,xe),oe;if(fe===null){for(;!Ne.done;xe++,Ne=P.next())Ne=V(N,Ne.value,W),Ne!==null&&(L=p(Ne,L,xe),de===null?oe=Ne:de.sibling=Ne,de=Ne);return We&&Nr(N,xe),oe}for(fe=o(N,fe);!Ne.done;xe++,Ne=P.next())Ne=ne(fe,N,xe,Ne.value,W),Ne!==null&&(e&&Ne.alternate!==null&&fe.delete(Ne.key===null?xe:Ne.key),L=p(Ne,L,xe),de===null?oe=Ne:de.sibling=Ne,de=Ne);return e&&fe.forEach(function(s2){return t(N,s2)}),We&&Nr(N,xe),oe}function cn(N,L,P,W){if(typeof P=="object"&&P!==null&&P.type===me&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:e:{for(var oe=P.key,de=L;de!==null;){if(de.key===oe){if(oe=P.type,oe===me){if(de.tag===7){a(N,de.sibling),L=c(de,P.props.children),L.return=N,N=L;break e}}else if(de.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===Ye&&sc(oe)===de.type){a(N,de.sibling),L=c(de,P.props),L.ref=cl(N,de,P),L.return=N,N=L;break e}a(N,de);break}else t(N,de);de=de.sibling}P.type===me?(L=Kr(P.props.children,N.mode,W,P.key),L.return=N,N=L):(W=ja(P.type,P.key,P.props,null,N.mode,W),W.ref=cl(N,L,P),W.return=N,N=W)}return x(N);case ce:e:{for(de=P.key;L!==null;){if(L.key===de)if(L.tag===4&&L.stateNode.containerInfo===P.containerInfo&&L.stateNode.implementation===P.implementation){a(N,L.sibling),L=c(L,P.children||[]),L.return=N,N=L;break e}else{a(N,L);break}else t(N,L);L=L.sibling}L=mo(P,N.mode,W),L.return=N,N=L}return x(N);case Ye:return de=P._init,cn(N,L,de(P._payload),W)}if(gt(P))return ae(N,L,P,W);if(he(P))return se(N,L,P,W);ga(N,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,L!==null&&L.tag===6?(a(N,L.sibling),L=c(L,P),L.return=N,N=L):(a(N,L),L=po(P,N.mode,W),L.return=N,N=L),x(N)):a(N,L)}return cn}var p0=oc(!0),uc=oc(!1),ya=rr(null),xa=null,m0=null,Ss=null;function zs(){Ss=m0=xa=null}function Ts(e){var t=ya.current;Ge(ya),e._currentValue=t}function Es(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function v0(e,t){xa=e,Ss=m0=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(qn=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ss!==e)if(e={context:e,memoizedValue:t,next:null},m0===null){if(xa===null)throw Error(r(308));m0=e,xa.dependencies={lanes:0,firstContext:e}}else m0=m0.next=e;return t}var Pr=null;function As(e){Pr===null?Pr=[e]:Pr.push(e)}function cc(e,t,a,o){var c=t.interleaved;return c===null?(a.next=a,As(t)):(a.next=c.next,c.next=a),t.interleaved=a,Pt(e,o)}function Pt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ir=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Re&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,Pt(e,a)}return c=o.interleaved,c===null?(t.next=t,As(o)):(t.next=c.next,c.next=t),o.interleaved=t,Pt(e,a)}function wa(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ki(e,a)}}function dc(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var x={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?c=p=x:p=p.next=x,a=a.next}while(a!==null);p===null?c=p=t:p=p.next=t}else c=p=t;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:o.shared,effects:o.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function ka(e,t,a,o){var c=e.updateQueue;ir=!1;var p=c.firstBaseUpdate,x=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var M=S,B=M.next;M.next=null,x===null?p=B:x.next=B,x=M;var K=e.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==x&&(S===null?K.firstBaseUpdate=B:S.next=B,K.lastBaseUpdate=M))}if(p!==null){var V=c.baseState;x=0,K=B=M=null,S=p;do{var j=S.lane,ne=S.eventTime;if((o&j)===j){K!==null&&(K=K.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=e,se=S;switch(j=t,ne=a,se.tag){case 1:if(ae=se.payload,typeof ae=="function"){V=ae.call(ne,V,j);break e}V=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=se.payload,j=typeof ae=="function"?ae.call(ne,V,j):ae,j==null)break e;V=Z({},V,j);break e;case 2:ir=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,j=c.effects,j===null?c.effects=[S]:j.push(S))}else ne={eventTime:ne,lane:j,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(B=K=ne,M=V):K=K.next=ne,x|=j;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;j=S,S=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);if(K===null&&(M=V),c.baseState=M,c.firstBaseUpdate=B,c.lastBaseUpdate=K,t=c.shared.interleaved,t!==null){c=t;do x|=c.lane,c=c.next;while(c!==t)}else p===null&&(c.shared.lanes=0);Or|=x,e.lanes=x,e.memoizedState=V}}function fc(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],c=o.callback;if(c!==null){if(o.callback=null,o=a,typeof c!="function")throw Error(r(191,c));c.call(o)}}}var hl={},wt=rr(hl),dl=rr(hl),fl=rr(hl);function Ir(e){if(e===hl)throw Error(r(174));return e}function Cs(e,t){switch(Ve(fl,t),Ve(dl,e),Ve(wt,hl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_0(t,e)}Ge(wt),Ve(wt,t)}function g0(){Ge(wt),Ge(dl),Ge(fl)}function pc(e){Ir(fl.current);var t=Ir(wt.current),a=_0(t,e.type);t!==a&&(Ve(dl,e),Ve(wt,a))}function Ls(e){dl.current===e&&(Ge(wt),Ge(dl))}var Ze=rr(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=[];function Ds(){for(var e=0;e<Rs.length;e++)Rs[e]._workInProgressVersionPrimary=null;Rs.length=0}var Sa=re.ReactCurrentDispatcher,Fs=re.ReactCurrentBatchConfig,Br=0,en=null,vn=null,wn=null,za=!1,pl=!1,ml=0,Cp=0;function An(){throw Error(r(321))}function Ns(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function Ps(e,t,a,o,c,p){if(Br=p,en=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sa.current=e===null||e.memoizedState===null?Fp:Np,e=a(o,c),pl){p=0;do{if(pl=!1,ml=0,25<=p)throw Error(r(301));p+=1,wn=vn=null,t.updateQueue=null,Sa.current=Pp,e=a(o,c)}while(pl)}if(Sa.current=Aa,t=vn!==null&&vn.next!==null,Br=0,wn=vn=en=null,za=!1,t)throw Error(r(300));return e}function Is(){var e=ml!==0;return ml=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?en.memoizedState=wn=e:wn=wn.next=e,wn}function tt(){if(vn===null){var e=en.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var t=wn===null?en.memoizedState:wn.next;if(t!==null)wn=t,vn=e;else{if(e===null)throw Error(r(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},wn===null?en.memoizedState=wn=e:wn=wn.next=e}return wn}function vl(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=tt(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=vn,c=o.baseQueue,p=a.pending;if(p!==null){if(c!==null){var x=c.next;c.next=p.next,p.next=x}o.baseQueue=c=p,a.pending=null}if(c!==null){p=c.next,o=o.baseState;var S=x=null,M=null,B=p;do{var K=B.lane;if((Br&K)===K)M!==null&&(M=M.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),o=B.hasEagerState?B.eagerState:e(o,B.action);else{var V={lane:K,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};M===null?(S=M=V,x=o):M=M.next=V,en.lanes|=K,Or|=K}B=B.next}while(B!==null&&B!==p);M===null?x=o:M.next=S,ut(o,t.memoizedState)||(qn=!0),t.memoizedState=o,t.baseState=x,t.baseQueue=M,a.lastRenderedState=o}if(e=a.interleaved,e!==null){c=e;do p=c.lane,en.lanes|=p,Or|=p,c=c.next;while(c!==e)}else c===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Os(e){var t=tt(),a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,p=t.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do p=e(p,x.action),x=x.next;while(x!==c);ut(p,t.memoizedState)||(qn=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),a.lastRenderedState=p}return[p,o]}function mc(){}function vc(e,t){var a=en,o=tt(),c=t(),p=!ut(o.memoizedState,c);if(p&&(o.memoizedState=c,qn=!0),o=o.queue,_s(xc.bind(null,a,o,e),[e]),o.getSnapshot!==t||p||wn!==null&&wn.memoizedState.tag&1){if(a.flags|=2048,gl(9,yc.bind(null,a,o,c,t),void 0,null),kn===null)throw Error(r(349));(Br&30)!==0||gc(a,t,c)}return c}function gc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=en.updateQueue,t===null?(t={lastEffect:null,stores:null},en.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function yc(e,t,a,o){t.value=a,t.getSnapshot=o,wc(t)&&kc(e)}function xc(e,t,a){return a(function(){wc(t)&&kc(e)})}function wc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function kc(e){var t=Pt(e,1);t!==null&&pt(t,e,1,-1)}function bc(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:e},t.queue=e,e=e.dispatch=Dp.bind(null,en,e),[t.memoizedState,e]}function gl(e,t,a,o){return e={tag:e,create:t,destroy:a,deps:o,next:null},t=en.updateQueue,t===null?(t={lastEffect:null,stores:null},en.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e)),e}function Sc(){return tt().memoizedState}function Ta(e,t,a,o){var c=kt();en.flags|=e,c.memoizedState=gl(1|t,a,void 0,o===void 0?null:o)}function Ea(e,t,a,o){var c=tt();o=o===void 0?null:o;var p=void 0;if(vn!==null){var x=vn.memoizedState;if(p=x.destroy,o!==null&&Ns(o,x.deps)){c.memoizedState=gl(t,a,p,o);return}}en.flags|=e,c.memoizedState=gl(1|t,a,p,o)}function zc(e,t){return Ta(8390656,8,e,t)}function _s(e,t){return Ea(2048,8,e,t)}function Tc(e,t){return Ea(4,2,e,t)}function Ec(e,t){return Ea(4,4,e,t)}function Ac(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,a){return a=a!=null?a.concat([e]):null,Ea(4,4,Ac.bind(null,t,e),a)}function qs(){}function Cc(e,t){var a=tt();t=t===void 0?null:t;var o=a.memoizedState;return o!==null&&t!==null&&Ns(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Lc(e,t){var a=tt();t=t===void 0?null:t;var o=a.memoizedState;return o!==null&&t!==null&&Ns(t,o[1])?o[0]:(e=e(),a.memoizedState=[e,t],e)}function Rc(e,t,a){return(Br&21)===0?(e.baseState&&(e.baseState=!1,qn=!0),e.memoizedState=a):(ut(a,t)||(a=s1(),en.lanes|=a,Or|=a,e.baseState=!0),t)}function Lp(e,t){var a=Ke;Ke=a!==0&&4>a?a:4,e(!0);var o=Fs.transition;Fs.transition={};try{e(!1),t()}finally{Ke=a,Fs.transition=o}}function Dc(){return tt().memoizedState}function Rp(e,t,a){var o=hr(e);if(a={lane:o,action:a,hasEagerState:!1,eagerState:null,next:null},Fc(e))Nc(t,a);else if(a=cc(e,t,a,o),a!==null){var c=Dn();pt(a,e,o,c),Pc(a,t,o)}}function Dp(e,t,a){var o=hr(e),c={lane:o,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Nc(t,c);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var x=t.lastRenderedState,S=p(x,a);if(c.hasEagerState=!0,c.eagerState=S,ut(S,x)){var M=t.interleaved;M===null?(c.next=c,As(t)):(c.next=M.next,M.next=c),t.interleaved=c;return}}catch{}finally{}a=cc(e,t,c,o),a!==null&&(c=Dn(),pt(a,e,o,c),Pc(a,t,o))}}function Fc(e){var t=e.alternate;return e===en||t!==null&&t===en}function Nc(e,t){pl=za=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Pc(e,t,a){if((a&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,Ki(e,a)}}var Aa={readContext:nt,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},Fp={readContext:nt,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:zc,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Ta(4194308,4,Ac.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ta(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ta(4,2,e,t)},useMemo:function(e,t){var a=kt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var o=kt();return t=a!==void 0?a(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Rp.bind(null,en,e),[o.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:bc,useDebugValue:qs,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=bc(!1),t=e[0];return e=Lp.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var o=en,c=kt();if(We){if(a===void 0)throw Error(r(407));a=a()}else{if(a=t(),kn===null)throw Error(r(349));(Br&30)!==0||gc(o,t,a)}c.memoizedState=a;var p={value:a,getSnapshot:t};return c.queue=p,zc(xc.bind(null,o,p,e),[e]),o.flags|=2048,gl(9,yc.bind(null,o,p,a,t),void 0,null),a},useId:function(){var e=kt(),t=kn.identifierPrefix;if(We){var a=Nt,o=Ft;a=(o&~(1<<32-ot(o)-1)).toString(32)+a,t=":"+t+"R"+a,a=ml++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Cp++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Np={readContext:nt,useCallback:Cc,useContext:nt,useEffect:_s,useImperativeHandle:Mc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:Lc,useReducer:Bs,useRef:Sc,useState:function(){return Bs(vl)},useDebugValue:qs,useDeferredValue:function(e){var t=tt();return Rc(t,vn.memoizedState,e)},useTransition:function(){var e=Bs(vl)[0],t=tt().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:vc,useId:Dc,unstable_isNewReconciler:!1},Pp={readContext:nt,useCallback:Cc,useContext:nt,useEffect:_s,useImperativeHandle:Mc,useInsertionEffect:Tc,useLayoutEffect:Ec,useMemo:Lc,useReducer:Os,useRef:Sc,useState:function(){return Os(vl)},useDebugValue:qs,useDeferredValue:function(e){var t=tt();return vn===null?t.memoizedState=e:Rc(t,vn.memoizedState,e)},useTransition:function(){var e=Os(vl)[0],t=tt().memoizedState;return[e,t]},useMutableSource:mc,useSyncExternalStore:vc,useId:Dc,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function js(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ma={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var o=Dn(),c=hr(e),p=It(o,c);p.payload=t,a!=null&&(p.callback=a),t=sr(e,p,c),t!==null&&(pt(t,e,c,o),wa(t,e,c))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=Dn(),c=hr(e),p=It(o,c);p.tag=1,p.payload=t,a!=null&&(p.callback=a),t=sr(e,p,c),t!==null&&(pt(t,e,c,o),wa(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Dn(),o=hr(e),c=It(a,o);c.tag=2,t!=null&&(c.callback=t),t=sr(e,c,o),t!==null&&(pt(t,e,o,a),wa(t,e,o))}};function Ic(e,t,a,o,c,p,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,p,x):t.prototype&&t.prototype.isPureReactComponent?!rl(a,o)||!rl(c,p):!0}function Bc(e,t,a){var o=!1,c=lr,p=t.contextType;return typeof p=="object"&&p!==null?p=nt(p):(c=_n(t)?Dr:En.current,o=t.contextTypes,p=(o=o!=null)?c0(e,c):lr),t=new t(a,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ma,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=p),t}function Oc(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&Ma.enqueueReplaceState(t,t.state,null)}function Ks(e,t,a,o){var c=e.stateNode;c.props=a,c.state=e.memoizedState,c.refs={},Ms(e);var p=t.contextType;typeof p=="object"&&p!==null?c.context=nt(p):(p=_n(t)?Dr:En.current,c.context=c0(e,p)),c.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(js(e,t,p,a),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&Ma.enqueueReplaceState(c,c.state,null),ka(e,a,c,o),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function y0(e,t){try{var a="",o=t;do a+=Ee(o),o=o.return;while(o);var c=a}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:c,digest:null}}function Hs(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Ip=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,a){a=It(-1,a),a.tag=3,a.payload={element:null};var o=t.value;return a.callback=function(){Pa||(Pa=!0,ao=o),$s(e,t)},a}function qc(e,t,a){a=It(-1,a),a.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var c=t.value;a.payload=function(){return o(c)},a.callback=function(){$s(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){$s(e,t),typeof o!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),a}function jc(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ip;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(a)||(c.add(a),e=Jp.bind(null,e,t,a),t.then(e,e))}function Kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hc(e,t,a,o,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=It(-1,1),t.tag=2,sr(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var Bp=re.ReactCurrentOwner,qn=!1;function Rn(e,t,a,o){t.child=e===null?uc(t,null,a,o):p0(t,e.child,a,o)}function $c(e,t,a,o,c){a=a.render;var p=t.ref;return v0(t,c),o=Ps(e,t,a,o,p,c),a=Is(),e!==null&&!qn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Bt(e,t,c)):(We&&a&&ys(t),t.flags|=1,Rn(e,t,o,c),t.child)}function Vc(e,t,a,o,c){if(e===null){var p=a.type;return typeof p=="function"&&!fo(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=p,Uc(e,t,p,o,c)):(e=ja(a.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&c)===0){var x=p.memoizedProps;if(a=a.compare,a=a!==null?a:rl,a(x,o)&&e.ref===t.ref)return Bt(e,t,c)}return t.flags|=1,e=fr(p,o),e.ref=t.ref,e.return=t,t.child=e}function Uc(e,t,a,o,c){if(e!==null){var p=e.memoizedProps;if(rl(p,o)&&e.ref===t.ref)if(qn=!1,t.pendingProps=o=p,(e.lanes&c)!==0)(e.flags&131072)!==0&&(qn=!0);else return t.lanes=e.lanes,Bt(e,t,c)}return Vs(e,t,a,o,c)}function Gc(e,t,a){var o=t.pendingProps,c=o.children,p=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(w0,Wn),Wn|=a;else{if((a&1073741824)===0)return e=p!==null?p.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ve(w0,Wn),Wn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=p!==null?p.baseLanes:a,Ve(w0,Wn),Wn|=o}else p!==null?(o=p.baseLanes|a,t.memoizedState=null):o=a,Ve(w0,Wn),Wn|=o;return Rn(e,t,c,a),t.child}function Wc(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Vs(e,t,a,o,c){var p=_n(a)?Dr:En.current;return p=c0(t,p),v0(t,c),a=Ps(e,t,a,o,p,c),o=Is(),e!==null&&!qn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Bt(e,t,c)):(We&&o&&ys(t),t.flags|=1,Rn(e,t,a,c),t.child)}function Xc(e,t,a,o,c){if(_n(a)){var p=!0;da(t)}else p=!1;if(v0(t,c),t.stateNode===null)La(e,t),Bc(t,a,o),Ks(t,a,o,c),o=!0;else if(e===null){var x=t.stateNode,S=t.memoizedProps;x.props=S;var M=x.context,B=a.contextType;typeof B=="object"&&B!==null?B=nt(B):(B=_n(a)?Dr:En.current,B=c0(t,B));var K=a.getDerivedStateFromProps,V=typeof K=="function"||typeof x.getSnapshotBeforeUpdate=="function";V||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==o||M!==B)&&Oc(t,x,o,B),ir=!1;var j=t.memoizedState;x.state=j,ka(t,o,x,c),M=t.memoizedState,S!==o||j!==M||On.current||ir?(typeof K=="function"&&(js(t,a,K,o),M=t.memoizedState),(S=ir||Ic(t,a,S,o,j,M,B))?(V||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=M),x.props=o,x.state=M,x.context=B,o=S):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{x=t.stateNode,hc(e,t),S=t.memoizedProps,B=t.type===t.elementType?S:ht(t.type,S),x.props=B,V=t.pendingProps,j=x.context,M=a.contextType,typeof M=="object"&&M!==null?M=nt(M):(M=_n(a)?Dr:En.current,M=c0(t,M));var ne=a.getDerivedStateFromProps;(K=typeof ne=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==V||j!==M)&&Oc(t,x,o,M),ir=!1,j=t.memoizedState,x.state=j,ka(t,o,x,c);var ae=t.memoizedState;S!==V||j!==ae||On.current||ir?(typeof ne=="function"&&(js(t,a,ne,o),ae=t.memoizedState),(B=ir||Ic(t,a,B,o,j,ae,M)||!1)?(K||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(o,ae,M),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(o,ae,M)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=ae),x.props=o,x.state=ae,x.context=M,o=B):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),o=!1)}return Us(e,t,a,o,p,c)}function Us(e,t,a,o,c,p){Wc(e,t);var x=(t.flags&128)!==0;if(!o&&!x)return c&&ec(t,a,!1),Bt(e,t,p);o=t.stateNode,Bp.current=t;var S=x&&typeof a.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&x?(t.child=p0(t,e.child,null,p),t.child=p0(t,null,S,p)):Rn(e,t,S,p),t.memoizedState=o.state,c&&ec(t,a,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?Y1(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Y1(e,t.context,!1),Cs(e,t.containerInfo)}function Qc(e,t,a,o,c){return f0(),bs(c),t.flags|=256,Rn(e,t,a,o),t.child}var Gs={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yc(e,t,a){var o=t.pendingProps,c=Ze.current,p=!1,x=(t.flags&128)!==0,S;if((S=x)||(S=e!==null&&e.memoizedState===null?!1:(c&2)!==0),S?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Ve(Ze,c&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=o.children,e=o.fallback,p?(o=t.mode,p=t.child,x={mode:"hidden",children:x},(o&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=x):p=Ka(x,o,0,null),e=Kr(e,o,a,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=Ws(a),t.memoizedState=Gs,e):Xs(t,x));if(c=e.memoizedState,c!==null&&(S=c.dehydrated,S!==null))return Op(e,t,x,o,S,c,a);if(p){p=o.fallback,x=t.mode,c=e.child,S=c.sibling;var M={mode:"hidden",children:o.children};return(x&1)===0&&t.child!==c?(o=t.child,o.childLanes=0,o.pendingProps=M,t.deletions=null):(o=fr(c,M),o.subtreeFlags=c.subtreeFlags&14680064),S!==null?p=fr(S,p):(p=Kr(p,x,a,null),p.flags|=2),p.return=t,o.return=t,o.sibling=p,t.child=o,o=p,p=t.child,x=e.child.memoizedState,x=x===null?Ws(a):{baseLanes:x.baseLanes|a,cachePool:null,transitions:x.transitions},p.memoizedState=x,p.childLanes=e.childLanes&~a,t.memoizedState=Gs,o}return p=e.child,e=p.sibling,o=fr(p,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=a),o.return=t,o.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=o,t.memoizedState=null,o}function Xs(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,a,o){return o!==null&&bs(o),p0(t,e.child,null,a),e=Xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Op(e,t,a,o,c,p,x){if(a)return t.flags&256?(t.flags&=-257,o=Hs(Error(r(422))),Ca(e,t,x,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=o.fallback,c=t.mode,o=Ka({mode:"visible",children:o.children},c,0,null),p=Kr(p,c,x,null),p.flags|=2,o.return=t,p.return=t,o.sibling=p,t.child=o,(t.mode&1)!==0&&p0(t,e.child,null,x),t.child.memoizedState=Ws(x),t.memoizedState=Gs,p);if((t.mode&1)===0)return Ca(e,t,x,null);if(c.data==="$!"){if(o=c.nextSibling&&c.nextSibling.dataset,o)var S=o.dgst;return o=S,p=Error(r(419)),o=Hs(p,o,void 0),Ca(e,t,x,o)}if(S=(x&e.childLanes)!==0,qn||S){if(o=kn,o!==null){switch(x&-x){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(o.suspendedLanes|x))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,Pt(e,c),pt(o,e,c,-1))}return ho(),o=Hs(Error(r(421))),Ca(e,t,x,o)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=Qp.bind(null,e),c._reactRetry=t,null):(e=p.treeContext,Gn=tr(c.nextSibling),Un=t,We=!0,ct=null,e!==null&&(Zn[et++]=Ft,Zn[et++]=Nt,Zn[et++]=Fr,Ft=e.id,Nt=e.overflow,Fr=t),t=Xs(t,o.children),t.flags|=4096,t)}function Zc(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Es(e.return,t,a)}function Js(e,t,a,o,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=a,p.tailMode=c)}function eh(e,t,a){var o=t.pendingProps,c=o.revealOrder,p=o.tail;if(Rn(e,t,o.children,a),o=Ze.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,a,t);else if(e.tag===19)Zc(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ve(Ze,o),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&ba(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),Js(t,!1,c,a,p);break;case"backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ba(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Js(t,!0,a,null,p);break;case"together":Js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function La(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Or|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,a=fr(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=fr(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function _p(e,t,a){switch(t.tag){case 3:Jc(t),f0();break;case 5:pc(t);break;case 1:_n(t.type)&&da(t);break;case 4:Cs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,c=t.memoizedProps.value;Ve(ya,o._currentValue),o._currentValue=c;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Ve(Ze,Ze.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?Yc(e,t,a):(Ve(Ze,Ze.current&1),e=Bt(e,t,a),e!==null?e.sibling:null);Ve(Ze,Ze.current&1);break;case 19:if(o=(a&t.childLanes)!==0,(e.flags&128)!==0){if(o)return eh(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ve(Ze,Ze.current),o)break;return null;case 22:case 23:return t.lanes=0,Gc(e,t,a)}return Bt(e,t,a)}var nh,Qs,th,rh;nh=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qs=function(){},th=function(e,t,a,o){var c=e.memoizedProps;if(c!==o){e=t.stateNode,Ir(wt.current);var p=null;switch(a){case"input":c=Wt(e,c),o=Wt(e,o),p=[];break;case"select":c=Z({},c,{value:void 0}),o=Z({},o,{value:void 0}),p=[];break;case"textarea":c=I0(e,c),o=I0(e,o),p=[];break;default:typeof c.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ua)}Ri(a,o);var x;a=null;for(B in c)if(!o.hasOwnProperty(B)&&c.hasOwnProperty(B)&&c[B]!=null)if(B==="style"){var S=c[B];for(x in S)S.hasOwnProperty(x)&&(a||(a={}),a[x]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(s.hasOwnProperty(B)?p||(p=[]):(p=p||[]).push(B,null));for(B in o){var M=o[B];if(S=c!=null?c[B]:void 0,o.hasOwnProperty(B)&&M!==S&&(M!=null||S!=null))if(B==="style")if(S){for(x in S)!S.hasOwnProperty(x)||M&&M.hasOwnProperty(x)||(a||(a={}),a[x]="");for(x in M)M.hasOwnProperty(x)&&S[x]!==M[x]&&(a||(a={}),a[x]=M[x])}else a||(p||(p=[]),p.push(B,a)),a=M;else B==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,S=S?S.__html:void 0,M!=null&&S!==M&&(p=p||[]).push(B,M)):B==="children"?typeof M!="string"&&typeof M!="number"||(p=p||[]).push(B,""+M):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(s.hasOwnProperty(B)?(M!=null&&B==="onScroll"&&Ue("scroll",e),p||S===M||(p=[])):(p=p||[]).push(B,M))}a&&(p=p||[]).push("style",a);var B=p;(t.updateQueue=B)&&(t.flags|=4)}},rh=function(e,t,a,o){a!==o&&(t.flags|=4)};function yl(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Mn(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&14680064,o|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function qp(e,t,a){var o=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(t),null;case 1:return _n(t.type)&&ha(),Mn(t),null;case 3:return o=t.stateNode,g0(),Ge(On),Ge(En),Ds(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(va(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(oo(ct),ct=null))),Qs(e,t),Mn(t),null;case 5:Ls(t);var c=Ir(fl.current);if(a=t.type,e!==null&&t.stateNode!=null)th(e,t,a,o,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(r(166));return Mn(t),null}if(e=Ir(wt.current),va(t)){o=t.stateNode,a=t.type;var p=t.memoizedProps;switch(o[xt]=t,o[ol]=p,e=(t.mode&1)!==0,a){case"dialog":Ue("cancel",o),Ue("close",o);break;case"iframe":case"object":case"embed":Ue("load",o);break;case"video":case"audio":for(c=0;c<al.length;c++)Ue(al[c],o);break;case"source":Ue("error",o);break;case"img":case"image":case"link":Ue("error",o),Ue("load",o);break;case"details":Ue("toggle",o);break;case"input":_l(o,p),Ue("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!p.multiple},Ue("invalid",o);break;case"textarea":Yr(o,p),Ue("invalid",o)}Ri(a,p),c=null;for(var x in p)if(p.hasOwnProperty(x)){var S=p[x];x==="children"?typeof S=="string"?o.textContent!==S&&(p.suppressHydrationWarning!==!0&&oa(o.textContent,S,e),c=["children",S]):typeof S=="number"&&o.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&oa(o.textContent,S,e),c=["children",""+S]):s.hasOwnProperty(x)&&S!=null&&x==="onScroll"&&Ue("scroll",o)}switch(a){case"input":Mr(o),P0(o,p,!0);break;case"textarea":Mr(o),O0(o);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(o.onclick=ua)}o=c,t.updateQueue=o,o!==null&&(t.flags|=4)}else{x=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jl(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=x.createElement(a,{is:o.is}):(e=x.createElement(a),a==="select"&&(x=e,o.multiple?x.multiple=!0:o.size&&(x.size=o.size))):e=x.createElementNS(e,a),e[xt]=t,e[ol]=o,nh(e,t,!1,!1),t.stateNode=e;e:{switch(x=Di(a,o),a){case"dialog":Ue("cancel",e),Ue("close",e),c=o;break;case"iframe":case"object":case"embed":Ue("load",e),c=o;break;case"video":case"audio":for(c=0;c<al.length;c++)Ue(al[c],e);c=o;break;case"source":Ue("error",e),c=o;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),c=o;break;case"details":Ue("toggle",e),c=o;break;case"input":_l(e,o),c=Wt(e,o),Ue("invalid",e);break;case"option":c=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},c=Z({},o,{value:void 0}),Ue("invalid",e);break;case"textarea":Yr(e,o),c=I0(e,o),Ue("invalid",e);break;default:c=o}Ri(a,c),S=c;for(p in S)if(S.hasOwnProperty(p)){var M=S[p];p==="style"?Uu(e,M):p==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Cr(e,M)):p==="children"?typeof M=="string"?(a!=="textarea"||M!=="")&&q0(e,M):typeof M=="number"&&q0(e,""+M):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?M!=null&&p==="onScroll"&&Ue("scroll",e):M!=null&&Q(e,p,M,x))}switch(a){case"input":Mr(e),P0(e,o,!1);break;case"textarea":Mr(e),O0(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Fe(o.value));break;case"select":e.multiple=!!o.multiple,p=o.value,p!=null?Xt(e,!!o.multiple,p,!1):o.defaultValue!=null&&Xt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=ua)}switch(a){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Mn(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(r(166));if(a=Ir(fl.current),Ir(wt.current),va(t)){if(o=t.stateNode,a=t.memoizedProps,o[xt]=t,(p=o.nodeValue!==a)&&(e=Un,e!==null))switch(e.tag){case 3:oa(o.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oa(o.nodeValue,a,(e.mode&1)!==0)}p&&(t.flags|=4)}else o=(a.nodeType===9?a:a.ownerDocument).createTextNode(o),o[xt]=t,t.stateNode=o}return Mn(t),null;case 13:if(Ge(Ze),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&Gn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ic(),f0(),t.flags|=98560,p=!1;else if(p=va(t),o!==null&&o.dehydrated!==null){if(e===null){if(!p)throw Error(r(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[xt]=t}else f0(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Mn(t),p=!1}else ct!==null&&(oo(ct),ct=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ze.current&1)!==0?gn===0&&(gn=3):ho())),t.updateQueue!==null&&(t.flags|=4),Mn(t),null);case 4:return g0(),Qs(e,t),e===null&&il(t.stateNode.containerInfo),Mn(t),null;case 10:return Ts(t.type._context),Mn(t),null;case 17:return _n(t.type)&&ha(),Mn(t),null;case 19:if(Ge(Ze),p=t.memoizedState,p===null)return Mn(t),null;if(o=(t.flags&128)!==0,x=p.rendering,x===null)if(o)yl(p,!1);else{if(gn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=ba(e),x!==null){for(t.flags|=128,yl(p,!1),o=x.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=a,a=t.child;a!==null;)p=a,e=o,p.flags&=14680066,x=p.alternate,x===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=x.childLanes,p.lanes=x.lanes,p.child=x.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=x.memoizedProps,p.memoizedState=x.memoizedState,p.updateQueue=x.updateQueue,p.type=x.type,e=x.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return Ve(Ze,Ze.current&1|2),t.child}e=e.sibling}p.tail!==null&&un()>k0&&(t.flags|=128,o=!0,yl(p,!1),t.lanes=4194304)}else{if(!o)if(e=ba(x),e!==null){if(t.flags|=128,o=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),yl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!We)return Mn(t),null}else 2*un()-p.renderingStartTime>k0&&a!==1073741824&&(t.flags|=128,o=!0,yl(p,!1),t.lanes=4194304);p.isBackwards?(x.sibling=t.child,t.child=x):(a=p.last,a!==null?a.sibling=x:t.child=x,p.last=x)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=un(),t.sibling=null,a=Ze.current,Ve(Ze,o?a&1|2:a&1),t):(Mn(t),null);case 22:case 23:return co(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(Wn&1073741824)!==0&&(Mn(t),t.subtreeFlags&6&&(t.flags|=8192)):Mn(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function jp(e,t){switch(xs(t),t.tag){case 1:return _n(t.type)&&ha(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return g0(),Ge(On),Ge(En),Ds(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ls(t),null;case 13:if(Ge(Ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));f0()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(Ze),null;case 4:return g0(),null;case 10:return Ts(t.type._context),null;case 22:case 23:return co(),null;case 24:return null;default:return null}}var Ra=!1,Cn=!1,Kp=typeof WeakSet=="function"?WeakSet:Set,le=null;function x0(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(o){an(e,t,o)}else a.current=null}function Ys(e,t,a){try{a()}catch(o){an(e,t,o)}}var lh=!1;function Hp(e,t){if(cs=Ql,e=I1(),ts(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,p=o.focusNode;o=o.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var x=0,S=-1,M=-1,B=0,K=0,V=e,j=null;n:for(;;){for(var ne;V!==a||c!==0&&V.nodeType!==3||(S=x+c),V!==p||o!==0&&V.nodeType!==3||(M=x+o),V.nodeType===3&&(x+=V.nodeValue.length),(ne=V.firstChild)!==null;)j=V,V=ne;for(;;){if(V===e)break n;if(j===a&&++B===c&&(S=x),j===p&&++K===o&&(M=x),(ne=V.nextSibling)!==null)break;V=j,j=V.parentNode}V=ne}a=S===-1||M===-1?null:{start:S,end:M}}else a=null}a=a||{start:0,end:0}}else a=null;for(hs={focusedElem:e,selectionRange:a},Ql=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var ae=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var se=ae.memoizedProps,cn=ae.memoizedState,N=t.stateNode,L=N.getSnapshotBeforeUpdate(t.elementType===t.type?se:ht(t.type,se),cn);N.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var P=t.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(W){an(t,t.return,W)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return ae=lh,lh=!1,ae}function xl(e,t,a){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&e)===e){var p=c.destroy;c.destroy=void 0,p!==void 0&&Ys(t,a,p)}c=c.next}while(c!==o)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var o=a.create;a.destroy=o()}a=a.next}while(a!==t)}}function Zs(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function ah(e){var t=e.alternate;t!==null&&(e.alternate=null,ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ol],delete t[ms],delete t[Tp],delete t[Ep])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ih(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ih(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eo(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ua));else if(o!==4&&(e=e.child,e!==null))for(eo(e,t,a),e=e.sibling;e!==null;)eo(e,t,a),e=e.sibling}function no(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(no(e,t,a),e=e.sibling;e!==null;)no(e,t,a),e=e.sibling}var Sn=null,dt=!1;function or(e,t,a){for(a=a.child;a!==null;)oh(e,t,a),a=a.sibling}function oh(e,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Vl,a)}catch{}switch(a.tag){case 5:Cn||x0(a,t);case 6:var o=Sn,c=dt;Sn=null,or(e,t,a),Sn=o,dt=c,Sn!==null&&(dt?(e=Sn,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):Sn.removeChild(a.stateNode));break;case 18:Sn!==null&&(dt?(e=Sn,a=a.stateNode,e.nodeType===8?ps(e.parentNode,a):e.nodeType===1&&ps(e,a),Q0(e)):ps(Sn,a.stateNode));break;case 4:o=Sn,c=dt,Sn=a.stateNode.containerInfo,dt=!0,or(e,t,a),Sn=o,dt=c;break;case 0:case 11:case 14:case 15:if(!Cn&&(o=a.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){c=o=o.next;do{var p=c,x=p.destroy;p=p.tag,x!==void 0&&((p&2)!==0||(p&4)!==0)&&Ys(a,t,x),c=c.next}while(c!==o)}or(e,t,a);break;case 1:if(!Cn&&(x0(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=a.memoizedProps,o.state=a.memoizedState,o.componentWillUnmount()}catch(S){an(a,t,S)}or(e,t,a);break;case 21:or(e,t,a);break;case 22:a.mode&1?(Cn=(o=Cn)||a.memoizedState!==null,or(e,t,a),Cn=o):or(e,t,a);break;default:or(e,t,a)}}function uh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Kp),t.forEach(function(o){var c=Yp.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}}function ft(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];try{var p=e,x=t,S=x;e:for(;S!==null;){switch(S.tag){case 5:Sn=S.stateNode,dt=!1;break e;case 3:Sn=S.stateNode.containerInfo,dt=!0;break e;case 4:Sn=S.stateNode.containerInfo,dt=!0;break e}S=S.return}if(Sn===null)throw Error(r(160));oh(p,x,c),Sn=null,dt=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(B){an(c,t,B)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ch(t,e),t=t.sibling}function ch(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),bt(e),o&4){try{xl(3,e,e.return),Da(3,e)}catch(se){an(e,e.return,se)}try{xl(5,e,e.return)}catch(se){an(e,e.return,se)}}break;case 1:ft(t,e),bt(e),o&512&&a!==null&&x0(a,a.return);break;case 5:if(ft(t,e),bt(e),o&512&&a!==null&&x0(a,a.return),e.flags&32){var c=e.stateNode;try{q0(c,"")}catch(se){an(e,e.return,se)}}if(o&4&&(c=e.stateNode,c!=null)){var p=e.memoizedProps,x=a!==null?a.memoizedProps:p,S=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&ql(c,p),Di(S,x);var B=Di(S,p);for(x=0;x<M.length;x+=2){var K=M[x],V=M[x+1];K==="style"?Uu(c,V):K==="dangerouslySetInnerHTML"?Cr(c,V):K==="children"?q0(c,V):Q(c,K,V,B)}switch(S){case"input":N0(c,p);break;case"textarea":B0(c,p);break;case"select":var j=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var ne=p.value;ne!=null?Xt(c,!!p.multiple,ne,!1):j!==!!p.multiple&&(p.defaultValue!=null?Xt(c,!!p.multiple,p.defaultValue,!0):Xt(c,!!p.multiple,p.multiple?[]:"",!1))}c[ol]=p}catch(se){an(e,e.return,se)}}break;case 6:if(ft(t,e),bt(e),o&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,p=e.memoizedProps;try{c.nodeValue=p}catch(se){an(e,e.return,se)}}break;case 3:if(ft(t,e),bt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Q0(t.containerInfo)}catch(se){an(e,e.return,se)}break;case 4:ft(t,e),bt(e);break;case 13:ft(t,e),bt(e),c=e.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(lo=un())),o&4&&uh(e);break;case 22:if(K=a!==null&&a.memoizedState!==null,e.mode&1?(Cn=(B=Cn)||K,ft(t,e),Cn=B):ft(t,e),bt(e),o&8192){if(B=e.memoizedState!==null,(e.stateNode.isHidden=B)&&!K&&(e.mode&1)!==0)for(le=e,K=e.child;K!==null;){for(V=le=K;le!==null;){switch(j=le,ne=j.child,j.tag){case 0:case 11:case 14:case 15:xl(4,j,j.return);break;case 1:x0(j,j.return);var ae=j.stateNode;if(typeof ae.componentWillUnmount=="function"){o=j,a=j.return;try{t=o,ae.props=t.memoizedProps,ae.state=t.memoizedState,ae.componentWillUnmount()}catch(se){an(o,a,se)}}break;case 5:x0(j,j.return);break;case 22:if(j.memoizedState!==null){fh(V);continue}}ne!==null?(ne.return=j,le=ne):fh(V)}K=K.sibling}e:for(K=null,V=e;;){if(V.tag===5){if(K===null){K=V;try{c=V.stateNode,B?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=V.stateNode,M=V.memoizedProps.style,x=M!=null&&M.hasOwnProperty("display")?M.display:null,S.style.display=Vu("display",x))}catch(se){an(e,e.return,se)}}}else if(V.tag===6){if(K===null)try{V.stateNode.nodeValue=B?"":V.memoizedProps}catch(se){an(e,e.return,se)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;K===V&&(K=null),V=V.return}K===V&&(K=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:ft(t,e),bt(e),o&4&&uh(e);break;case 21:break;default:ft(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(ih(a)){var o=a;break e}a=a.return}throw Error(r(160))}switch(o.tag){case 5:var c=o.stateNode;o.flags&32&&(q0(c,""),o.flags&=-33);var p=sh(e);no(e,p,c);break;case 3:case 4:var x=o.stateNode.containerInfo,S=sh(e);eo(e,S,x);break;default:throw Error(r(161))}}catch(M){an(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,a){le=e,hh(e)}function hh(e,t,a){for(var o=(e.mode&1)!==0;le!==null;){var c=le,p=c.child;if(c.tag===22&&o){var x=c.memoizedState!==null||Ra;if(!x){var S=c.alternate,M=S!==null&&S.memoizedState!==null||Cn;S=Ra;var B=Cn;if(Ra=x,(Cn=M)&&!B)for(le=c;le!==null;)x=le,M=x.child,x.tag===22&&x.memoizedState!==null?ph(c):M!==null?(M.return=x,le=M):ph(c);for(;p!==null;)le=p,hh(p),p=p.sibling;le=c,Ra=S,Cn=B}dh(e)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,le=p):dh(e)}}function dh(e){for(;le!==null;){var t=le;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Cn||Da(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Cn)if(a===null)o.componentDidMount();else{var c=t.elementType===t.type?a.memoizedProps:ht(t.type,a.memoizedProps);o.componentDidUpdate(c,a.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&fc(t,p,o);break;case 3:var x=t.updateQueue;if(x!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}fc(t,x,a)}break;case 5:var S=t.stateNode;if(a===null&&t.flags&4){a=S;var M=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&a.focus();break;case"img":M.src&&(a.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var B=t.alternate;if(B!==null){var K=B.memoizedState;if(K!==null){var V=K.dehydrated;V!==null&&Q0(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Cn||t.flags&512&&Zs(t)}catch(j){an(t,t.return,j)}}if(t===e){le=null;break}if(a=t.sibling,a!==null){a.return=t.return,le=a;break}le=t.return}}function fh(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var a=t.sibling;if(a!==null){a.return=t.return,le=a;break}le=t.return}}function ph(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Da(4,t)}catch(M){an(t,a,M)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var c=t.return;try{o.componentDidMount()}catch(M){an(t,c,M)}}var p=t.return;try{Zs(t)}catch(M){an(t,p,M)}break;case 5:var x=t.return;try{Zs(t)}catch(M){an(t,x,M)}}}catch(M){an(t,t.return,M)}if(t===e){le=null;break}var S=t.sibling;if(S!==null){S.return=t.return,le=S;break}le=t.return}}var Vp=Math.ceil,Fa=re.ReactCurrentDispatcher,to=re.ReactCurrentOwner,rt=re.ReactCurrentBatchConfig,Re=0,kn=null,dn=null,zn=0,Wn=0,w0=rr(0),gn=0,wl=null,Or=0,Na=0,ro=0,kl=null,jn=null,lo=0,k0=1/0,Ot=null,Pa=!1,ao=null,ur=null,Ia=!1,cr=null,Ba=0,bl=0,io=null,Oa=-1,_a=0;function Dn(){return(Re&6)!==0?un():Oa!==-1?Oa:Oa=un()}function hr(e){return(e.mode&1)===0?1:(Re&2)!==0&&zn!==0?zn&-zn:Mp.transition!==null?(_a===0&&(_a=s1()),_a):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:v1(e.type)),e)}function pt(e,t,a,o){if(50<bl)throw bl=0,io=null,Error(r(185));U0(e,a,o),((Re&2)===0||e!==kn)&&(e===kn&&((Re&2)===0&&(Na|=a),gn===4&&dr(e,zn)),Kn(e,o),a===1&&Re===0&&(t.mode&1)===0&&(k0=un()+500,fa&&ar()))}function Kn(e,t){var a=e.callbackNode;Mf(e,t);var o=Wl(e,e===kn?zn:0);if(o===0)a!==null&&l1(a),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(a!=null&&l1(a),t===1)e.tag===0?Ap(vh.bind(null,e)):nc(vh.bind(null,e)),Sp(function(){(Re&6)===0&&ar()}),a=null;else{switch(o1(o)){case 1:a=_i;break;case 4:a=a1;break;case 16:a=$l;break;case 536870912:a=i1;break;default:a=$l}a=zh(a,mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function mh(e,t){if(Oa=-1,_a=0,(Re&6)!==0)throw Error(r(327));var a=e.callbackNode;if(b0()&&e.callbackNode!==a)return null;var o=Wl(e,e===kn?zn:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=qa(e,o);else{t=o;var c=Re;Re|=2;var p=yh();(kn!==e||zn!==t)&&(Ot=null,k0=un()+500,qr(e,t));do try{Wp();break}catch(S){gh(e,S)}while(!0);zs(),Fa.current=p,Re=c,dn!==null?t=0:(kn=null,zn=0,t=gn)}if(t!==0){if(t===2&&(c=qi(e),c!==0&&(o=c,t=so(e,c))),t===1)throw a=wl,qr(e,0),dr(e,o),Kn(e,un()),a;if(t===6)dr(e,o);else{if(c=e.current.alternate,(o&30)===0&&!Up(c)&&(t=qa(e,o),t===2&&(p=qi(e),p!==0&&(o=p,t=so(e,p))),t===1))throw a=wl,qr(e,0),dr(e,o),Kn(e,un()),a;switch(e.finishedWork=c,e.finishedLanes=o,t){case 0:case 1:throw Error(r(345));case 2:jr(e,jn,Ot);break;case 3:if(dr(e,o),(o&130023424)===o&&(t=lo+500-un(),10<t)){if(Wl(e,0)!==0)break;if(c=e.suspendedLanes,(c&o)!==o){Dn(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=fs(jr.bind(null,e,jn,Ot),t);break}jr(e,jn,Ot);break;case 4:if(dr(e,o),(o&4194240)===o)break;for(t=e.eventTimes,c=-1;0<o;){var x=31-ot(o);p=1<<x,x=t[x],x>c&&(c=x),o&=~p}if(o=c,o=un()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Vp(o/1960))-o,10<o){e.timeoutHandle=fs(jr.bind(null,e,jn,Ot),o);break}jr(e,jn,Ot);break;case 5:jr(e,jn,Ot);break;default:throw Error(r(329))}}}return Kn(e,un()),e.callbackNode===a?mh.bind(null,e):null}function so(e,t){var a=kl;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=qa(e,t),e!==2&&(t=jn,jn=a,t!==null&&oo(t)),e}function oo(e){jn===null?jn=e:jn.push.apply(jn,e)}function Up(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var o=0;o<a.length;o++){var c=a[o],p=c.getSnapshot;c=c.value;try{if(!ut(p(),c))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t){for(t&=~ro,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-ot(t),o=1<<a;e[a]=-1,t&=~o}}function vh(e){if((Re&6)!==0)throw Error(r(327));b0();var t=Wl(e,0);if((t&1)===0)return Kn(e,un()),null;var a=qa(e,t);if(e.tag!==0&&a===2){var o=qi(e);o!==0&&(t=o,a=so(e,o))}if(a===1)throw a=wl,qr(e,0),dr(e,t),Kn(e,un()),a;if(a===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,jn,Ot),Kn(e,un()),null}function uo(e,t){var a=Re;Re|=1;try{return e(t)}finally{Re=a,Re===0&&(k0=un()+500,fa&&ar())}}function _r(e){cr!==null&&cr.tag===0&&(Re&6)===0&&b0();var t=Re;Re|=1;var a=rt.transition,o=Ke;try{if(rt.transition=null,Ke=1,e)return e()}finally{Ke=o,rt.transition=a,Re=t,(Re&6)===0&&ar()}}function co(){Wn=w0.current,Ge(w0)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,bp(a)),dn!==null)for(a=dn.return;a!==null;){var o=a;switch(xs(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ha();break;case 3:g0(),Ge(On),Ge(En),Ds();break;case 5:Ls(o);break;case 4:g0();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:Ts(o.type._context);break;case 22:case 23:co()}a=a.return}if(kn=e,dn=e=fr(e.current,null),zn=Wn=t,gn=0,wl=null,ro=Na=Or=0,jn=kl=null,Pr!==null){for(t=0;t<Pr.length;t++)if(a=Pr[t],o=a.interleaved,o!==null){a.interleaved=null;var c=o.next,p=a.pending;if(p!==null){var x=p.next;p.next=c,o.next=x}a.pending=o}Pr=null}return e}function gh(e,t){do{var a=dn;try{if(zs(),Sa.current=Aa,za){for(var o=en.memoizedState;o!==null;){var c=o.queue;c!==null&&(c.pending=null),o=o.next}za=!1}if(Br=0,wn=vn=en=null,pl=!1,ml=0,to.current=null,a===null||a.return===null){gn=1,wl=t,dn=null;break}e:{var p=e,x=a.return,S=a,M=t;if(t=zn,S.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var B=M,K=S,V=K.tag;if((K.mode&1)===0&&(V===0||V===11||V===15)){var j=K.alternate;j?(K.updateQueue=j.updateQueue,K.memoizedState=j.memoizedState,K.lanes=j.lanes):(K.updateQueue=null,K.memoizedState=null)}var ne=Kc(x);if(ne!==null){ne.flags&=-257,Hc(ne,x,S,p,t),ne.mode&1&&jc(p,B,t),t=ne,M=B;var ae=t.updateQueue;if(ae===null){var se=new Set;se.add(M),t.updateQueue=se}else ae.add(M);break e}else{if((t&1)===0){jc(p,B,t),ho();break e}M=Error(r(426))}}else if(We&&S.mode&1){var cn=Kc(x);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Hc(cn,x,S,p,t),bs(y0(M,S));break e}}p=M=y0(M,S),gn!==4&&(gn=2),kl===null?kl=[p]:kl.push(p),p=x;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var N=_c(p,M,t);dc(p,N);break e;case 1:S=M;var L=p.type,P=p.stateNode;if((p.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ur===null||!ur.has(P)))){p.flags|=65536,t&=-t,p.lanes|=t;var W=qc(p,S,t);dc(p,W);break e}}p=p.return}while(p!==null)}wh(a)}catch(oe){t=oe,dn===a&&a!==null&&(dn=a=a.return);continue}break}while(!0)}function yh(){var e=Fa.current;return Fa.current=Aa,e===null?Aa:e}function ho(){(gn===0||gn===3||gn===2)&&(gn=4),kn===null||(Or&268435455)===0&&(Na&268435455)===0||dr(kn,zn)}function qa(e,t){var a=Re;Re|=2;var o=yh();(kn!==e||zn!==t)&&(Ot=null,qr(e,t));do try{Gp();break}catch(c){gh(e,c)}while(!0);if(zs(),Re=a,Fa.current=o,dn!==null)throw Error(r(261));return kn=null,zn=0,gn}function Gp(){for(;dn!==null;)xh(dn)}function Wp(){for(;dn!==null&&!xf();)xh(dn)}function xh(e){var t=Sh(e.alternate,e,Wn);e.memoizedProps=e.pendingProps,t===null?wh(e):dn=t,to.current=null}function wh(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=qp(a,t,Wn),a!==null){dn=a;return}}else{if(a=jp(a,t),a!==null){a.flags&=32767,dn=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gn=6,dn=null;return}}if(t=t.sibling,t!==null){dn=t;return}dn=t=e}while(t!==null);gn===0&&(gn=5)}function jr(e,t,a){var o=Ke,c=rt.transition;try{rt.transition=null,Ke=1,Xp(e,t,a,o)}finally{rt.transition=c,Ke=o}return null}function Xp(e,t,a,o){do b0();while(cr!==null);if((Re&6)!==0)throw Error(r(327));a=e.finishedWork;var c=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var p=a.lanes|a.childLanes;if(Cf(e,p),e===kn&&(dn=kn=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ia||(Ia=!0,zh($l,function(){return b0(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=rt.transition,rt.transition=null;var x=Ke;Ke=1;var S=Re;Re|=4,to.current=null,Hp(e,a),ch(a,e),mp(hs),Ql=!!cs,hs=cs=null,e.current=a,$p(a),wf(),Re=S,Ke=x,rt.transition=p}else e.current=a;if(Ia&&(Ia=!1,cr=e,Ba=c),p=e.pendingLanes,p===0&&(ur=null),Sf(a.stateNode),Kn(e,un()),t!==null)for(o=e.onRecoverableError,a=0;a<t.length;a++)c=t[a],o(c.value,{componentStack:c.stack,digest:c.digest});if(Pa)throw Pa=!1,e=ao,ao=null,e;return(Ba&1)!==0&&e.tag!==0&&b0(),p=e.pendingLanes,(p&1)!==0?e===io?bl++:(bl=0,io=e):bl=0,ar(),null}function b0(){if(cr!==null){var e=o1(Ba),t=rt.transition,a=Ke;try{if(rt.transition=null,Ke=16>e?16:e,cr===null)var o=!1;else{if(e=cr,cr=null,Ba=0,(Re&6)!==0)throw Error(r(331));var c=Re;for(Re|=4,le=e.current;le!==null;){var p=le,x=p.child;if((le.flags&16)!==0){var S=p.deletions;if(S!==null){for(var M=0;M<S.length;M++){var B=S[M];for(le=B;le!==null;){var K=le;switch(K.tag){case 0:case 11:case 15:xl(8,K,p)}var V=K.child;if(V!==null)V.return=K,le=V;else for(;le!==null;){K=le;var j=K.sibling,ne=K.return;if(ah(K),K===B){le=null;break}if(j!==null){j.return=ne,le=j;break}le=ne}}}var ae=p.alternate;if(ae!==null){var se=ae.child;if(se!==null){ae.child=null;do{var cn=se.sibling;se.sibling=null,se=cn}while(se!==null)}}le=p}}if((p.subtreeFlags&2064)!==0&&x!==null)x.return=p,le=x;else e:for(;le!==null;){if(p=le,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:xl(9,p,p.return)}var N=p.sibling;if(N!==null){N.return=p.return,le=N;break e}le=p.return}}var L=e.current;for(le=L;le!==null;){x=le;var P=x.child;if((x.subtreeFlags&2064)!==0&&P!==null)P.return=x,le=P;else e:for(x=L;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Da(9,S)}}catch(oe){an(S,S.return,oe)}if(S===x){le=null;break e}var W=S.sibling;if(W!==null){W.return=S.return,le=W;break e}le=S.return}}if(Re=c,ar(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Vl,e)}catch{}o=!0}return o}finally{Ke=a,rt.transition=t}}return!1}function kh(e,t,a){t=y0(a,t),t=_c(e,t,1),e=sr(e,t,1),t=Dn(),e!==null&&(U0(e,1,t),Kn(e,t))}function an(e,t,a){if(e.tag===3)kh(e,e,a);else for(;t!==null;){if(t.tag===3){kh(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ur===null||!ur.has(o))){e=y0(a,e),e=qc(t,e,1),t=sr(t,e,1),e=Dn(),t!==null&&(U0(t,1,e),Kn(t,e));break}}t=t.return}}function Jp(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),t=Dn(),e.pingedLanes|=e.suspendedLanes&a,kn===e&&(zn&a)===a&&(gn===4||gn===3&&(zn&130023424)===zn&&500>un()-lo?qr(e,0):ro|=a),Kn(e,t)}function bh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Gl,Gl<<=1,(Gl&130023424)===0&&(Gl=4194304)));var a=Dn();e=Pt(e,t),e!==null&&(U0(e,t,a),Kn(e,a))}function Qp(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),bh(e,a)}function Yp(e,t){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(r(314))}o!==null&&o.delete(t),bh(e,a)}var Sh;Sh=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||On.current)qn=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return qn=!1,_p(e,t,a);qn=(e.flags&131072)!==0}else qn=!1,We&&(t.flags&1048576)!==0&&tc(t,ma,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;La(e,t),e=t.pendingProps;var c=c0(t,En.current);v0(t,a),c=Ps(null,t,o,e,c,a);var p=Is();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_n(o)?(p=!0,da(t)):p=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,Ms(t),c.updater=Ma,t.stateNode=c,c._reactInternals=t,Ks(t,o,e,a),t=Us(null,t,o,!0,p,a)):(t.tag=0,We&&p&&ys(t),Rn(null,t,c,a),t=t.child),t;case 16:o=t.elementType;e:{switch(La(e,t),e=t.pendingProps,c=o._init,o=c(o._payload),t.type=o,c=t.tag=e2(o),e=ht(o,e),c){case 0:t=Vs(null,t,o,e,a);break e;case 1:t=Xc(null,t,o,e,a);break e;case 11:t=$c(null,t,o,e,a);break e;case 14:t=Vc(null,t,o,ht(o.type,e),a);break e}throw Error(r(306,o,""))}return t;case 0:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:ht(o,c),Vs(e,t,o,c,a);case 1:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:ht(o,c),Xc(e,t,o,c,a);case 3:e:{if(Jc(t),e===null)throw Error(r(387));o=t.pendingProps,p=t.memoizedState,c=p.element,hc(e,t),ka(t,o,null,a);var x=t.memoizedState;if(o=x.element,p.isDehydrated)if(p={element:o,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){c=y0(Error(r(423)),t),t=Qc(e,t,o,a,c);break e}else if(o!==c){c=y0(Error(r(424)),t),t=Qc(e,t,o,a,c);break e}else for(Gn=tr(t.stateNode.containerInfo.firstChild),Un=t,We=!0,ct=null,a=uc(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(f0(),o===c){t=Bt(e,t,a);break e}Rn(e,t,o,a)}t=t.child}return t;case 5:return pc(t),e===null&&ks(t),o=t.type,c=t.pendingProps,p=e!==null?e.memoizedProps:null,x=c.children,ds(o,c)?x=null:p!==null&&ds(o,p)&&(t.flags|=32),Wc(e,t),Rn(e,t,x,a),t.child;case 6:return e===null&&ks(t),null;case 13:return Yc(e,t,a);case 4:return Cs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=p0(t,null,o,a):Rn(e,t,o,a),t.child;case 11:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:ht(o,c),$c(e,t,o,c,a);case 7:return Rn(e,t,t.pendingProps,a),t.child;case 8:return Rn(e,t,t.pendingProps.children,a),t.child;case 12:return Rn(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(o=t.type._context,c=t.pendingProps,p=t.memoizedProps,x=c.value,Ve(ya,o._currentValue),o._currentValue=x,p!==null)if(ut(p.value,x)){if(p.children===c.children&&!On.current){t=Bt(e,t,a);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var S=p.dependencies;if(S!==null){x=p.child;for(var M=S.firstContext;M!==null;){if(M.context===o){if(p.tag===1){M=It(-1,a&-a),M.tag=2;var B=p.updateQueue;if(B!==null){B=B.shared;var K=B.pending;K===null?M.next=M:(M.next=K.next,K.next=M),B.pending=M}}p.lanes|=a,M=p.alternate,M!==null&&(M.lanes|=a),Es(p.return,a,t),S.lanes|=a;break}M=M.next}}else if(p.tag===10)x=p.type===t.type?null:p.child;else if(p.tag===18){if(x=p.return,x===null)throw Error(r(341));x.lanes|=a,S=x.alternate,S!==null&&(S.lanes|=a),Es(x,a,t),x=p.sibling}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===t){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}Rn(e,t,c.children,a),t=t.child}return t;case 9:return c=t.type,o=t.pendingProps.children,v0(t,a),c=nt(c),o=o(c),t.flags|=1,Rn(e,t,o,a),t.child;case 14:return o=t.type,c=ht(o,t.pendingProps),c=ht(o.type,c),Vc(e,t,o,c,a);case 15:return Uc(e,t,t.type,t.pendingProps,a);case 17:return o=t.type,c=t.pendingProps,c=t.elementType===o?c:ht(o,c),La(e,t),t.tag=1,_n(o)?(e=!0,da(t)):e=!1,v0(t,a),Bc(t,o,c),Ks(t,o,c,a),Us(null,t,o,!0,e,a);case 19:return eh(e,t,a);case 22:return Gc(e,t,a)}throw Error(r(156,t.tag))};function zh(e,t){return r1(e,t)}function Zp(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,o){return new Zp(e,t,a,o)}function fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e2(e){if(typeof e=="function")return fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Oe)return 11;if(e===ln)return 14}return 2}function fr(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function ja(e,t,a,o,c,p){var x=2;if(o=e,typeof e=="function")fo(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case me:return Kr(a.children,c,p,t);case ge:x=8,c|=8;break;case Te:return e=lt(12,a,t,c|2),e.elementType=Te,e.lanes=p,e;case Qe:return e=lt(13,a,t,c),e.elementType=Qe,e.lanes=p,e;case rn:return e=lt(19,a,t,c),e.elementType=rn,e.lanes=p,e;case je:return Ka(a,c,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:x=10;break e;case on:x=9;break e;case Oe:x=11;break e;case ln:x=14;break e;case Ye:x=16,o=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=lt(x,a,t,c),t.elementType=e,t.type=o,t.lanes=p,t}function Kr(e,t,a,o){return e=lt(7,e,o,t),e.lanes=a,e}function Ka(e,t,a,o){return e=lt(22,e,o,t),e.elementType=je,e.lanes=a,e.stateNode={isHidden:!1},e}function po(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function mo(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n2(e,t,a,o,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ji(0),this.expirationTimes=ji(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ji(0),this.identifierPrefix=o,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function vo(e,t,a,o,c,p,x,S,M){return e=new n2(e,t,a,S,M),t===1?(t=1,p===!0&&(t|=8)):t=0,p=lt(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:o,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(p),e}function t2(e,t,a){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:o==null?null:""+o,children:e,containerInfo:t,implementation:a}}function Th(e){if(!e)return lr;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_n(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var a=e.type;if(_n(a))return Z1(e,a,t)}return t}function Eh(e,t,a,o,c,p,x,S,M){return e=vo(a,o,!0,e,c,p,x,S,M),e.context=Th(null),a=e.current,o=Dn(),c=hr(a),p=It(o,c),p.callback=t??null,sr(a,p,c),e.current.lanes=c,U0(e,c,o),Kn(e,o),e}function Ha(e,t,a,o){var c=t.current,p=Dn(),x=hr(c);return a=Th(a),t.context===null?t.context=a:t.pendingContext=a,t=It(p,x),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=sr(c,t,x),e!==null&&(pt(e,c,x,p),wa(e,c,x)),x}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function go(e,t){Ah(e,t),(e=e.alternate)&&Ah(e,t)}function r2(){return null}var Mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function yo(e){this._internalRoot=e}Va.prototype.render=yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));Ha(e,t,null,null)},Va.prototype.unmount=yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){Ha(null,e,null,null)}),t[Rt]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=h1();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Zt.length&&t!==0&&t<Zt[a].priority;a++);Zt.splice(a,0,e),a===0&&p1(e)}};function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ch(){}function l2(e,t,a,o,c){if(c){if(typeof o=="function"){var p=o;o=function(){var B=$a(x);p.call(B)}}var x=Eh(t,o,e,0,null,!1,!1,"",Ch);return e._reactRootContainer=x,e[Rt]=x.current,il(e.nodeType===8?e.parentNode:e),_r(),x}for(;c=e.lastChild;)e.removeChild(c);if(typeof o=="function"){var S=o;o=function(){var B=$a(M);S.call(B)}}var M=vo(e,0,!1,null,null,!1,!1,"",Ch);return e._reactRootContainer=M,e[Rt]=M.current,il(e.nodeType===8?e.parentNode:e),_r(function(){Ha(t,M,a,o)}),M}function Ga(e,t,a,o,c){var p=a._reactRootContainer;if(p){var x=p;if(typeof c=="function"){var S=c;c=function(){var M=$a(x);S.call(M)}}Ha(t,x,e,c)}else x=l2(a,t,e,c,o);return $a(x)}u1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=V0(t.pendingLanes);a!==0&&(Ki(t,a|1),Kn(t,un()),(Re&6)===0&&(k0=un()+500,ar()))}break;case 13:_r(function(){var o=Pt(e,1);if(o!==null){var c=Dn();pt(o,e,1,c)}}),go(e,1)}},Hi=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var a=Dn();pt(t,e,134217728,a)}go(e,134217728)}},c1=function(e){if(e.tag===13){var t=hr(e),a=Pt(e,t);if(a!==null){var o=Dn();pt(a,e,t,o)}go(e,t)}},h1=function(){return Ke},d1=function(e,t){var a=Ke;try{return Ke=e,t()}finally{Ke=a}},Pi=function(e,t,a){switch(t){case"input":if(N0(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var c=ca(o);if(!c)throw Error(r(90));F0(o),N0(o,c)}}}break;case"textarea":B0(e,a);break;case"select":t=a.value,t!=null&&Xt(e,!!a.multiple,t,!1)}},Ju=uo,Qu=_r;var a2={usingClientEntryPoint:!1,Events:[ul,o0,ca,Wu,Xu,uo]},Sl={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i2={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=n1(e),e===null?null:e.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||r2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{Vl=Wa.inject(i2),yt=Wa}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2,Hn.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xo(t))throw Error(r(200));return t2(e,t,null,a)},Hn.createRoot=function(e,t){if(!xo(e))throw Error(r(299));var a=!1,o="",c=Mh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=vo(e,1,!1,null,null,a,!1,o,c),e[Rt]=t.current,il(e.nodeType===8?e.parentNode:e),new yo(t)},Hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=n1(t),e=e===null?null:e.stateNode,e},Hn.flushSync=function(e){return _r(e)},Hn.hydrate=function(e,t,a){if(!Ua(t))throw Error(r(200));return Ga(null,e,t,!0,a)},Hn.hydrateRoot=function(e,t,a){if(!xo(e))throw Error(r(405));var o=a!=null&&a.hydratedSources||null,c=!1,p="",x=Mh;if(a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(x=a.onRecoverableError)),t=Eh(t,null,e,1,a??null,c,!1,p,x),e[Rt]=t.current,il(e),o)for(e=0;e<o.length;e++)a=o[e],c=a._getVersion,c=c(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,c]:t.mutableSourceEagerHydrationData.push(a,c);return new Va(t)},Hn.render=function(e,t,a){if(!Ua(t))throw Error(r(200));return Ga(null,e,t,!1,a)},Hn.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(r(40));return e._reactRootContainer?(_r(function(){Ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},Hn.unstable_batchedUpdates=uo,Hn.unstable_renderSubtreeIntoContainer=function(e,t,a,o){if(!Ua(a))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Ga(e,t,a,!1,o)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Bh;function K4(){if(Bh)return bo.exports;Bh=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(n){console.error(n)}}return l(),bo.exports=g2(),bo.exports}var Oh;function y2(){if(Oh)return Xa;Oh=1;var l=K4();return Xa.createRoot=l.createRoot,Xa.hydrateRoot=l.hydrateRoot,Xa}var x2=y2(),J=pu();const w2=h2(J),k2=c2({__proto__:null,default:w2},[J]);K4();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign?Object.assign.bind():function(l){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(l[i]=r[i])}return l},Ll.apply(this,arguments)}var gr;(function(l){l.Pop="POP",l.Push="PUSH",l.Replace="REPLACE"})(gr||(gr={}));const _h="popstate";function b2(l){l===void 0&&(l={});function n(s,u){let{pathname:h="/",search:f="",hash:v=""}=Wr(s.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Ko("",{pathname:h,search:f,hash:v},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(s,u){let h=s.document.querySelector("base"),f="";if(h&&h.getAttribute("href")){let v=s.location.href,g=v.indexOf("#");f=g===-1?v:v.slice(0,g)}return f+"#"+(typeof u=="string"?u:oi(u))}function i(s,u){mi(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return z2(n,r,i,l)}function hn(l,n){if(l===!1||l===null||typeof l>"u")throw new Error(n)}function mi(l,n){if(!l){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function S2(){return Math.random().toString(36).substr(2,8)}function qh(l,n){return{usr:l.state,key:l.key,idx:n}}function Ko(l,n,r,i){return r===void 0&&(r=null),Ll({pathname:typeof l=="string"?l:l.pathname,search:"",hash:""},typeof n=="string"?Wr(n):n,{state:r,key:n&&n.key||i||S2()})}function oi(l){let{pathname:n="/",search:r="",hash:i=""}=l;return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function Wr(l){let n={};if(l){let r=l.indexOf("#");r>=0&&(n.hash=l.substr(r),l=l.substr(0,r));let i=l.indexOf("?");i>=0&&(n.search=l.substr(i),l=l.substr(0,i)),l&&(n.pathname=l)}return n}function z2(l,n,r,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:u=!1}=i,h=s.history,f=gr.Pop,v=null,g=w();g==null&&(g=0,h.replaceState(Ll({},h.state,{idx:g}),""));function w(){return(h.state||{idx:null}).idx}function b(){f=gr.Pop;let D=w(),q=D==null?null:D-g;g=D,v&&v({action:f,location:F.location,delta:q})}function T(D,q){f=gr.Push;let $=Ko(F.location,D,q);r&&r($,D),g=w()+1;let Q=qh($,g),re=F.createHref($);try{h.pushState(Q,"",re)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;s.location.assign(re)}u&&v&&v({action:f,location:F.location,delta:1})}function A(D,q){f=gr.Replace;let $=Ko(F.location,D,q);r&&r($,D),g=w();let Q=qh($,g),re=F.createHref($);h.replaceState(Q,"",re),u&&v&&v({action:f,location:F.location,delta:0})}function I(D){let q=s.location.origin!=="null"?s.location.origin:s.location.href,$=typeof D=="string"?D:oi(D);return $=$.replace(/ $/,"%20"),hn(q,"No window.location.(origin|href) available to create URL for href: "+$),new URL($,q)}let F={get action(){return f},get location(){return l(s,h)},listen(D){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(_h,b),v=D,()=>{s.removeEventListener(_h,b),v=null}},createHref(D){return n(s,D)},createURL:I,encodeLocation(D){let q=I(D);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:T,replace:A,go(D){return h.go(D)}};return F}var jh;(function(l){l.data="data",l.deferred="deferred",l.redirect="redirect",l.error="error"})(jh||(jh={}));function T2(l,n,r){return r===void 0&&(r="/"),E2(l,n,r)}function E2(l,n,r,i){let s=typeof n=="string"?Wr(n):n,u=mu(s.pathname||"/",r);if(u==null)return null;let h=H4(l);A2(h);let f=null;for(let v=0;f==null&&v<h.length;++v){let g=_2(u);f=I2(h[v],g)}return f}function H4(l,n,r,i){n===void 0&&(n=[]),r===void 0&&(r=[]),i===void 0&&(i="");let s=(u,h,f)=>{let v={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};v.relativePath.startsWith("/")&&(hn(v.relativePath.startsWith(i),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(i.length));let g=wr([i,v.relativePath]),w=r.concat(v);u.children&&u.children.length>0&&(hn(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),H4(u.children,n,w,g)),!(u.path==null&&!u.index)&&n.push({path:g,score:N2(g,u.index),routesMeta:w})};return l.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))s(u,h);else for(let v of $4(u.path))s(u,h,v)}),n}function $4(l){let n=l.split("/");if(n.length===0)return[];let[r,...i]=n,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(i.length===0)return s?[u,""]:[u];let h=$4(i.join("/")),f=[];return f.push(...h.map(v=>v===""?u:[u,v].join("/"))),s&&f.push(...h),f.map(v=>l.startsWith("/")&&v===""?"/":v)}function A2(l){l.sort((n,r)=>n.score!==r.score?r.score-n.score:P2(n.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const M2=/^:[\w-]+$/,C2=3,L2=2,R2=1,D2=10,F2=-2,Kh=l=>l==="*";function N2(l,n){let r=l.split("/"),i=r.length;return r.some(Kh)&&(i+=F2),n&&(i+=L2),r.filter(s=>!Kh(s)).reduce((s,u)=>s+(M2.test(u)?C2:u===""?R2:D2),i)}function P2(l,n){return l.length===n.length&&l.slice(0,-1).every((i,s)=>i===n[s])?l[l.length-1]-n[n.length-1]:0}function I2(l,n,r){let{routesMeta:i}=l,s={},u="/",h=[];for(let f=0;f<i.length;++f){let v=i[f],g=f===i.length-1,w=u==="/"?n:n.slice(u.length)||"/",b=B2({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},w),T=v.route;if(!b)return null;Object.assign(s,b.params),h.push({params:s,pathname:wr([u,b.pathname]),pathnameBase:$2(wr([u,b.pathnameBase])),route:T}),b.pathnameBase!=="/"&&(u=wr([u,b.pathnameBase]))}return h}function B2(l,n){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[r,i]=O2(l.path,l.caseSensitive,l.end),s=n.match(r);if(!s)return null;let u=s[0],h=u.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((g,w,b)=>{let{paramName:T,isOptional:A}=w;if(T==="*"){let F=f[b]||"";h=u.slice(0,u.length-F.length).replace(/(.)\/+$/,"$1")}const I=f[b];return A&&!I?g[T]=void 0:g[T]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:l}}function O2(l,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),mi(l==="*"||!l.endsWith("*")||l.endsWith("/*"),'Route path "'+l+'" will be treated as if it were '+('"'+l.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+l.replace(/\*$/,"/*")+'".'));let i=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,v)=>(i.push({paramName:f,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return l.endsWith("*")?(i.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),i]}function _2(l){try{return l.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return mi(!1,'The URL path "'+l+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),l}}function mu(l,n){if(n==="/")return l;if(!l.toLowerCase().startsWith(n.toLowerCase()))return null;let r=n.endsWith("/")?n.length-1:n.length,i=l.charAt(r);return i&&i!=="/"?null:l.slice(r)||"/"}const q2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,j2=l=>q2.test(l);function K2(l,n){n===void 0&&(n="/");let{pathname:r,search:i="",hash:s=""}=typeof l=="string"?Wr(l):l,u;if(r)if(j2(r))u=r;else{if(r.includes("//")){let h=r;r=r.replace(/\/\/+/g,"/"),mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(h+" -> "+r))}r.startsWith("/")?u=Hh(r.substring(1),"/"):u=Hh(r,n)}else u=n;return{pathname:u,search:V2(i),hash:U2(s)}}function Hh(l,n){let r=n.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function To(l,n,r,i){return"Cannot include a '"+l+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H2(l){return l.filter((n,r)=>r===0||n.route.path&&n.route.path.length>0)}function vu(l,n){let r=H2(l);return n?r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function gu(l,n,r,i){i===void 0&&(i=!1);let s;typeof l=="string"?s=Wr(l):(s=Ll({},l),hn(!s.pathname||!s.pathname.includes("?"),To("?","pathname","search",s)),hn(!s.pathname||!s.pathname.includes("#"),To("#","pathname","hash",s)),hn(!s.search||!s.search.includes("#"),To("#","search","hash",s)));let u=l===""||s.pathname==="",h=u?"/":s.pathname,f;if(h==null)f=r;else{let b=n.length-1;if(!i&&h.startsWith("..")){let T=h.split("/");for(;T[0]==="..";)T.shift(),b-=1;s.pathname=T.join("/")}f=b>=0?n[b]:"/"}let v=K2(s,f),g=h&&h!=="/"&&h.endsWith("/"),w=(u||h===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(g||w)&&(v.pathname+="/"),v}const wr=l=>l.join("/").replace(/\/\/+/g,"/"),$2=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),V2=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,U2=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function G2(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}const V4=["post","put","patch","delete"];new Set(V4);const W2=["get",...V4];new Set(W2);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(l){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(l[i]=r[i])}return l},Rl.apply(this,arguments)}const yu=J.createContext(null),X2=J.createContext(null),Er=J.createContext(null),vi=J.createContext(null),$t=J.createContext({outlet:null,matches:[],isDataRoute:!1}),U4=J.createContext(null);function J2(l,n){let{relative:r}=n===void 0?{}:n;M0()||hn(!1);let{basename:i,navigator:s}=J.useContext(Er),{hash:u,pathname:h,search:f}=X4(l,{relative:r}),v=h;return i!=="/"&&(v=h==="/"?i:wr([i,h])),s.createHref({pathname:v,search:f,hash:u})}function M0(){return J.useContext(vi)!=null}function C0(){return M0()||hn(!1),J.useContext(vi).location}function G4(l){J.useContext(Er).static||J.useLayoutEffect(l)}function W4(){let{isDataRoute:l}=J.useContext($t);return l?cm():Q2()}function Q2(){M0()||hn(!1);let l=J.useContext(yu),{basename:n,future:r,navigator:i}=J.useContext(Er),{matches:s}=J.useContext($t),{pathname:u}=C0(),h=JSON.stringify(vu(s,r.v7_relativeSplatPath)),f=J.useRef(!1);return G4(()=>{f.current=!0}),J.useCallback(function(g,w){if(w===void 0&&(w={}),!f.current)return;if(typeof g=="number"){i.go(g);return}let b=gu(g,JSON.parse(h),u,w.relative==="path");l==null&&n!=="/"&&(b.pathname=b.pathname==="/"?n:wr([n,b.pathname])),(w.replace?i.replace:i.push)(b,w.state,w)},[n,i,h,u,l])}function Y2(){let{matches:l}=J.useContext($t),n=l[l.length-1];return n?n.params:{}}function X4(l,n){let{relative:r}=n===void 0?{}:n,{future:i}=J.useContext(Er),{matches:s}=J.useContext($t),{pathname:u}=C0(),h=JSON.stringify(vu(s,i.v7_relativeSplatPath));return J.useMemo(()=>gu(l,JSON.parse(h),u,r==="path"),[l,h,u,r])}function Z2(l,n){return em(l,n)}function em(l,n,r,i){M0()||hn(!1);let{navigator:s}=J.useContext(Er),{matches:u}=J.useContext($t),h=u[u.length-1],f=h?h.params:{};h&&h.pathname;let v=h?h.pathnameBase:"/";h&&h.route;let g=C0(),w;if(n){var b;let D=typeof n=="string"?Wr(n):n;v==="/"||(b=D.pathname)!=null&&b.startsWith(v)||hn(!1),w=D}else w=g;let T=w.pathname||"/",A=T;if(v!=="/"){let D=v.replace(/^\//,"").split("/");A="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let I=T2(l,{pathname:A}),F=am(I&&I.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:wr([v,s.encodeLocation?s.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:wr([v,s.encodeLocation?s.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),u,r,i);return n&&F?J.createElement(vi.Provider,{value:{location:Rl({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:gr.Pop}},F):F}function nm(){let l=um(),n=G2(l)?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),r=l instanceof Error?l.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},n),r?J.createElement("pre",{style:s},r):null,null)}const tm=J.createElement(nm,null);class rm extends J.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?J.createElement($t.Provider,{value:this.props.routeContext},J.createElement(U4.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lm(l){let{routeContext:n,match:r,children:i}=l,s=J.useContext(yu);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),J.createElement($t.Provider,{value:n},i)}function am(l,n,r,i){var s;if(n===void 0&&(n=[]),r===void 0&&(r=null),i===void 0&&(i=null),l==null){var u;if(!r)return null;if(r.errors)l=r.matches;else if((u=i)!=null&&u.v7_partialHydration&&n.length===0&&!r.initialized&&r.matches.length>0)l=r.matches;else return null}let h=l,f=(s=r)==null?void 0:s.errors;if(f!=null){let w=h.findIndex(b=>b.route.id&&(f==null?void 0:f[b.route.id])!==void 0);w>=0||hn(!1),h=h.slice(0,Math.min(h.length,w+1))}let v=!1,g=-1;if(r&&i&&i.v7_partialHydration)for(let w=0;w<h.length;w++){let b=h[w];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(g=w),b.route.id){let{loaderData:T,errors:A}=r,I=b.route.loader&&T[b.route.id]===void 0&&(!A||A[b.route.id]===void 0);if(b.route.lazy||I){v=!0,g>=0?h=h.slice(0,g+1):h=[h[0]];break}}}return h.reduceRight((w,b,T)=>{let A,I=!1,F=null,D=null;r&&(A=f&&b.route.id?f[b.route.id]:void 0,F=b.route.errorElement||tm,v&&(g<0&&T===0?(hm("route-fallback"),I=!0,D=null):g===T&&(I=!0,D=b.route.hydrateFallbackElement||null)));let q=n.concat(h.slice(0,T+1)),$=()=>{let Q;return A?Q=F:I?Q=D:b.route.Component?Q=J.createElement(b.route.Component,null):b.route.element?Q=b.route.element:Q=w,J.createElement(lm,{match:b,routeContext:{outlet:w,matches:q,isDataRoute:r!=null},children:Q})};return r&&(b.route.ErrorBoundary||b.route.errorElement||T===0)?J.createElement(rm,{location:r.location,revalidation:r.revalidation,component:F,error:A,children:$(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):$()},null)}var J4=(function(l){return l.UseBlocker="useBlocker",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l})(J4||{}),Q4=(function(l){return l.UseBlocker="useBlocker",l.UseLoaderData="useLoaderData",l.UseActionData="useActionData",l.UseRouteError="useRouteError",l.UseNavigation="useNavigation",l.UseRouteLoaderData="useRouteLoaderData",l.UseMatches="useMatches",l.UseRevalidator="useRevalidator",l.UseNavigateStable="useNavigate",l.UseRouteId="useRouteId",l})(Q4||{});function im(l){let n=J.useContext(yu);return n||hn(!1),n}function sm(l){let n=J.useContext(X2);return n||hn(!1),n}function om(l){let n=J.useContext($t);return n||hn(!1),n}function Y4(l){let n=om(),r=n.matches[n.matches.length-1];return r.route.id||hn(!1),r.route.id}function um(){var l;let n=J.useContext(U4),r=sm(),i=Y4();return n!==void 0?n:(l=r.errors)==null?void 0:l[i]}function cm(){let{router:l}=im(J4.UseNavigateStable),n=Y4(Q4.UseNavigateStable),r=J.useRef(!1);return G4(()=>{r.current=!0}),J.useCallback(function(s,u){u===void 0&&(u={}),r.current&&(typeof s=="number"?l.navigate(s):l.navigate(s,Rl({fromRouteId:n},u)))},[l,n])}const $h={};function hm(l,n,r){$h[l]||($h[l]=!0)}function dm(l,n){l==null||l.v7_startTransition,l==null||l.v7_relativeSplatPath}function fm(l){let{to:n,replace:r,state:i,relative:s}=l;M0()||hn(!1);let{future:u,static:h}=J.useContext(Er),{matches:f}=J.useContext($t),{pathname:v}=C0(),g=W4(),w=gu(n,vu(f,u.v7_relativeSplatPath),v,s==="path"),b=JSON.stringify(w);return J.useEffect(()=>g(JSON.parse(b),{replace:r,state:i,relative:s}),[g,b,s,r,i]),null}function ai(l){hn(!1)}function pm(l){let{basename:n="/",children:r=null,location:i,navigationType:s=gr.Pop,navigator:u,static:h=!1,future:f}=l;M0()&&hn(!1);let v=n.replace(/^\/*/,"/"),g=J.useMemo(()=>({basename:v,navigator:u,static:h,future:Rl({v7_relativeSplatPath:!1},f)}),[v,f,u,h]);typeof i=="string"&&(i=Wr(i));let{pathname:w="/",search:b="",hash:T="",state:A=null,key:I="default"}=i,F=J.useMemo(()=>{let D=mu(w,v);return D==null?null:{location:{pathname:D,search:b,hash:T,state:A,key:I},navigationType:s}},[v,w,b,T,A,I,s]);return F==null?null:J.createElement(Er.Provider,{value:g},J.createElement(vi.Provider,{children:r,value:F}))}function mm(l){let{children:n,location:r}=l;return Z2(Ho(n),r)}new Promise(()=>{});function Ho(l,n){n===void 0&&(n=[]);let r=[];return J.Children.forEach(l,(i,s)=>{if(!J.isValidElement(i))return;let u=[...n,s];if(i.type===J.Fragment){r.push.apply(r,Ho(i.props.children,u));return}i.type!==ai&&hn(!1),!i.props.index||!i.props.children||hn(!1);let h={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Ho(i.props.children,u)),r.push(h)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(l){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(l[i]=r[i])}return l},$o.apply(this,arguments)}function vm(l,n){if(l==null)return{};var r={},i=Object.keys(l),s,u;for(u=0;u<i.length;u++)s=i[u],!(n.indexOf(s)>=0)&&(r[s]=l[s]);return r}function gm(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function ym(l,n){return l.button===0&&(!n||n==="_self")&&!gm(l)}const xm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],wm="6";try{window.__reactRouterVersion=wm}catch{}const km="startTransition",Vh=k2[km];function bm(l){let{basename:n,children:r,future:i,window:s}=l,u=J.useRef();u.current==null&&(u.current=b2({window:s,v5Compat:!0}));let h=u.current,[f,v]=J.useState({action:h.action,location:h.location}),{v7_startTransition:g}=i||{},w=J.useCallback(b=>{g&&Vh?Vh(()=>v(b)):v(b)},[v,g]);return J.useLayoutEffect(()=>h.listen(w),[h,w]),J.useEffect(()=>dm(i),[i]),J.createElement(pm,{basename:n,children:r,location:f.location,navigationType:f.action,navigator:h,future:i})}const Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kr=J.forwardRef(function(n,r){let{onClick:i,relative:s,reloadDocument:u,replace:h,state:f,target:v,to:g,preventScrollReset:w,viewTransition:b}=n,T=vm(n,xm),{basename:A}=J.useContext(Er),I,F=!1;if(typeof g=="string"&&zm.test(g)&&(I=g,Sm))try{let Q=new URL(window.location.href),re=g.startsWith("//")?new URL(Q.protocol+g):new URL(g),ue=mu(re.pathname,A);re.origin===Q.origin&&ue!=null?g=ue+re.search+re.hash:F=!0}catch{}let D=J2(g,{relative:s}),q=Tm(g,{replace:h,state:f,target:v,preventScrollReset:w,relative:s,viewTransition:b});function $(Q){i&&i(Q),Q.defaultPrevented||q(Q)}return J.createElement("a",$o({},T,{href:I||D,onClick:F||u?i:$,ref:r,target:v}))});var Uh;(function(l){l.UseScrollRestoration="useScrollRestoration",l.UseSubmit="useSubmit",l.UseSubmitFetcher="useSubmitFetcher",l.UseFetcher="useFetcher",l.useViewTransitionState="useViewTransitionState"})(Uh||(Uh={}));var Gh;(function(l){l.UseFetcher="useFetcher",l.UseFetchers="useFetchers",l.UseScrollRestoration="useScrollRestoration"})(Gh||(Gh={}));function Tm(l,n){let{target:r,replace:i,state:s,preventScrollReset:u,relative:h,viewTransition:f}=n===void 0?{}:n,v=W4(),g=C0(),w=X4(l,{relative:h});return J.useCallback(b=>{if(ym(b,r)){b.preventDefault();let T=i!==void 0?i:oi(g)===oi(w);v(l,{replace:T,state:s,preventScrollReset:u,relative:h,viewTransition:f})}},[g,v,w,i,s,r,l,u,h,f])}const Z4={bg:"#0a0e17",card:"#111827",cardHover:"#1a2332",surface:"#0f1623",accent:"#f59e0b",accentDim:"#b45309",accentSoft:"rgba(245,158,11,0.08)",theta:"#3b82f6",thetaSoft:"rgba(59,130,246,0.12)",eta:"#ef4444",etaSoft:"rgba(239,68,68,0.12)",dual:"#8b5cf6",dualSoft:"rgba(139,92,246,0.08)",green:"#10b981",greenSoft:"rgba(16,185,129,0.12)",cyan:"#06b6d4",cyanSoft:"rgba(6,182,212,0.12)",text:"#e5e7eb",textDim:"#6b7280",textMuted:"#374151",border:"#1f2937"},ed={bg:"#f8f9fa",card:"#ffffff",cardHover:"#f0f1f3",surface:"#f1f3f5",accent:"#d97706",accentDim:"#92400e",accentSoft:"rgba(217,119,6,0.08)",theta:"#2563eb",thetaSoft:"rgba(37,99,235,0.10)",eta:"#dc2626",etaSoft:"rgba(220,38,38,0.10)",dual:"#7c3aed",dualSoft:"rgba(124,58,237,0.06)",green:"#059669",greenSoft:"rgba(5,150,105,0.10)",cyan:"#0891b2",cyanSoft:"rgba(8,145,178,0.10)",text:"#1f2937",textDim:"#6b7280",textMuted:"#d1d5db",border:"#e5e7eb"};let yr=localStorage.getItem("theme")||"dark",nd=yr==="light"?{...ed}:{...Z4};const Vo=new Set;function td(){const l=yr==="light"?ed:Z4;Object.assign(nd,l);const n=document.documentElement;for(const[r,i]of Object.entries(l))n.style.setProperty(`--c-${r}`,i);n.setAttribute("data-theme",yr),localStorage.setItem("theme",yr),Vo.forEach(r=>r(yr))}td();function Em(){return yr}function Am(l){yr=l,td()}function Mm(){Am(yr==="dark"?"light":"dark")}function rd(l){return Vo.add(l),()=>Vo.delete(l)}const we=nd,at={mono:"'JetBrains Mono', 'Fira Code', monospace",serif:"'Playfair Display', Georgia, serif"},b7={get background(){return we.card},borderRadius:10,get border(){return`1px solid ${we.border}`}};function S7(l,n,r){const i=l.current;if(!i)return null;const s=i.getContext("2d"),u=window.devicePixelRatio||1;return i.width=n*u,i.height=r*u,s.scale(u,u),s.clearRect(0,0,n,r),s}function z7(l,n,r){const i=l.createLinearGradient(0,n,0,r);return i.addColorStop(0,"rgba(245,158,11,0.25)"),i.addColorStop(1,"rgba(245,158,11,0.01)"),i}const Cm="modulepreload",Lm=function(l){return"/infogeo-book/"+l},Wh={},De=function(n,r,i){let s=Promise.resolve();if(r&&r.length>0){let h=function(g){return Promise.all(g.map(w=>Promise.resolve(w).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),v=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));s=h(r.map(g=>{if(g=Lm(g),g in Wh)return;Wh[g]=!0;const w=g.endsWith(".css"),b=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${b}`))return;const T=document.createElement("link");if(T.rel=w?"stylesheet":Cm,w||(T.as="script"),T.crossOrigin="",T.href=g,v&&T.setAttribute("nonce",v),document.head.appendChild(T),w)return new Promise((A,I)=>{T.addEventListener("load",A),T.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return s.then(h=>{for(const f of h||[])f.status==="rejected"&&u(f.reason);return n().catch(u)})},Rm=`# 서문

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
`,Dm=`# 왜 정보기하학인가

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
`,Fm=`# 점

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
`,Nm=`# 거리

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

같은 9cm를 다른 곳에서 움직여 보자.
성인 남성의 키 분포는 σ가 5.8cm쯤이다.
평균을 174에서 183으로 옮기면 봉우리가 자기 폭의 1.5배를 이동한다.
두 분포는 겹치는 부분보다 어긋나는 부분이 더 많아진다.

이번에는 아이부터 노인까지 모든 연령의 키를 모은 분포를 생각한다.
평균은 150cm쯤이고 σ는 30cm 가까이 된다.
여기서 평균을 9cm 옮기면, 넓게 퍼진 언덕이 제 폭의 3분의 1도 안 되게 조금 밀려날 뿐이다.
두 분포는 거의 포개진다.

유클리드 자는 두 경우 모두 9라고 말한다.
하지만 분포의 관점에서 앞의 것은 큰 변화이고 뒤의 것은 작은 변화다.
같은 9cm라도 σ가 얼마인지에 따라 뜻이 달라지는데,
유클리드 자는 μ의 차이와 σ의 차이를 좌표 그대로 더할 뿐 이 맥락을 모른다.

이 장 뒤에서 만날 KL 발산이라는 자로 재면
앞의 이동은 1.20, 뒤의 이동은 0.045다. 약 27배 차이다.

확률분포의 공간에서 유클리드 거리가 통했다면,
정보기하학이라는 학문은 필요하지 않았을 것이다.
다른 자가 필요하다.

## 거리에도 종류가 있다

### 한 개념

같은 두 점 사이에도 재는 방법이 여럿이다

### 왜

"공정한 주사위와 약간 기운 주사위는 얼마나 다른가?"

결과가 셋인 분포 세 개를 심플렉스 위에 놓는다.
A = (0.5, 0.3, 0.2), B = (0.6, 0.39, 0.01), C = (0.25, 0.25, 0.5).

유클리드 거리로 재면 A–B는 0.233, A–C는 0.394다. A는 B에 더 가깝다.
그런데 나중에 배울 KL 발산이라는 다른 자를 A에서 대면
A–B는 0.429, A–C는 0.218이다. 이번에는 C가 더 가깝다.
같은 세 점인데, 자를 바꿨을 뿐이다.

무엇이 순위를 뒤집었을까.
B는 결과 3에 겨우 1%를 준다. A는 그 결과에 20%를 준다.
유클리드 자에게 0.2와 0.01의 차이는 0.19라는 작은 좌표 차이일 뿐이다.
KL 자에게는 "현실에서 다섯 번에 한 번 일어나는 일을 모형이 백 번에 한 번이라고 우긴다"는 심각한 착오다.

2장에서 "어떤 공간에 놓느냐"가 중요하다고 했다.
같은 공간 안에서도 "어떤 자를 쓰느냐"에 따라
보이는 구조가 달라진다.
공간을 바꾸는 것과 자를 바꾸는 것은 같은 동전의 양면이다.

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

### 비유

무빙워크(moving walkway) —
공항에서 무빙워크를 타고 가면 3분,
거슬러 걸어오면 11분. 같은 두 지점인데 방향에 따라
"걸리는 시간"이 다르다.
복도 곳곳에 지점을 찍고 서로 간의 시간을 표로 만들면,
그 표는 대각선을 기준으로 접었을 때 포개지지 않는다.

비대칭은 공간이 휘어서 생기는 것이 아니다.
복도는 곧고 평평하다. 달라진 것은 재는 방식이다.
걸음 수 대신 걸린 시간으로 재기로 했고,
그 재는 방식 안에 방향이 들어 있다.

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

### 수확

"비대칭 거리는 이상한 게 아니라 방향이 있는 거리"

## KL 발산 — 확률의 무빙워크

![무빙워크: 방향에 따라 다른 거리](/images/chapters/ch03-moving-walkway.svg)

### 한 개념

확률분포 사이의 구체적인 비대칭 거리 하나를 배운다

### 왜

"확률분포의 세계에서 무빙워크는 어느 방향으로 깔려있나?"

### 정의

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

읽는 법은 이렇다.
결과마다 "현실의 확률 ÷ 모형의 확률"에 로그를 씌우고,
그 값을 현실에서 그 결과가 일어나는 빈도로 가중평균한다.
모형이 현실과 똑같으면 모든 비가 1이고 로그가 0이라서 KL도 0이다.
모형이 현실에서 흔한 결과를 드물다고 하면 그 결과의 비가 커지고, 현실이 그 결과에 준 가중치만큼 벌점이 붙는다.

이 식이 왜 하필 로그인지, 왜 항상 0 이상인지는 아직 말하지 않는다.
"놀라움"을 세는 법을 배운 5장에서 답한다.

정규분포끼리는 이 합이 닫힌 식이 된다.

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

두 σ가 같으면 앞의 로그와 −½이 상쇄되고 (Δμ)² / (2σ²)만 남는다.
도입부의 두 숫자가 여기서 나온다. 81 / (2 × 5.8²) ≈ 1.20, 81 / (2 × 30²) = 0.045.
평균의 차이를 σ로 나눈다는 것, 그것이 유클리드 자에게 없던 맥락이다.

### 비유

무빙워크를 확률에 깔아 보자.
넓게 퍼진 현실 p를 좁은 모형 q로 설명하려는 방향은 거슬러 걷는 쪽이다.
현실이 자주 내놓는 결과 상당수를 모형은 거의 불가능하다고 여기기 때문이다.
반대로 좁은 현실을 넓은 모형으로 설명하는 방향은 무빙워크를 탄 쪽이다.
모형이 다소 흐릿할 뿐, 현실에서 일어나는 일을 불가능하다고 하지는 않는다.

숫자로 확인하면 이렇다.
p = N(0, 2²), q = N(0, 1²)이면 KL(p‖q) = 0.807이다.
둘을 바꾸면 KL(q‖p) = 0.318이다. 같은 두 분포인데 2.5배 차이다.

### p와 q의 역할

이 교재에서 p는 항상 "현실"(진짜 분포), q는 항상 "지도"(모형)다.
KL(p‖q)는 "현실 p의 눈으로 본, 지도 q의 부정확함".
평균을 내는 무게가 p라서, 현실에서 흔한 곳의 오차가 크게 잡힌다.
KL(q‖p)는 "지도 q의 눈으로 본, 현실 p와의 괴리".
이번에는 무게가 q라서, 모형이 확신하는 곳의 오차가 크게 잡힌다.
같은 두 분포인데, 누구의 눈으로 보느냐에 따라 거리가 다르다.

### 왜 "거리"가 아니라 "발산"인가

KL은 거리의 네 약속 중 첫 두 개는 지킨다.
항상 0 이상이고, 0이면 두 분포가 같다(증명은 5장).
하지만 대칭이 아니고, 연습문제에서 보겠지만 삼각부등식도 깨진다.
그래서 수학자들은 이것을 거리(distance)라 부르지 않고 발산(divergence)이라 부른다.
"한 점에서 다른 점으로 벌어져 나가는 정도"라는 뜻이다.
이 책에서 "KL 거리"라고 말할 때도 속뜻은 늘 발산이다.

{{viz: ch03/asymmetry}}

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

마지막 줄은 닫힌 식 0.807과 소수 둘째 자리까지 맞는다.
표본을 늘릴수록 더 가까워진다.

### 수확

"KL은 확률 세계의 무빙워크 거리"
KL이 정확히 무엇을 재는지 — 로그가 왜 거기 있는지는 아직 말하지 않았다.
"놀라움"을 세는 법을 배운 뒤에야 답할 수 있다.
5장에서.

## 발밑의 평탄함 — KL이 숨기고 있던 대칭

### 한 개념

두 분포가 무한히 가까워지면,
비대칭적인 KL 발산이 대칭적인 이차식으로 변한다.
그 이차식을 만드는 행렬이 피셔 정보다.

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

찌그러진 그릇 —
한쪽 벽은 가파르고 다른 쪽 벽은 완만한 그릇이 있다.
그릇 전체는 비대칭이다.
그러나 바닥에 구슬을 놓고 아주 조금만 흔들면,
구슬이 느끼는 바닥은 좌우가 똑같은 포물선이다.
매끄러운 함수는 최솟값 근처에서 언제나 이차식처럼 보이기 때문이다.

q를 움직이며 KL(p‖q)를 재면, q = p에서 0이 되는 그릇이 생긴다.
멀리서 보면 찌그러져 있지만, 바닥 근처는 대칭인 포물면이다.
그 포물면의 곡률이 피셔 정보다.

### 식으로

모수 θ로 정해지는 분포 p<sub>θ</sub>에서 θ를 dθ만큼 움직이면,

\`\`\`latex
\\textcolor{#c2398a}{\\mathrm{KL}}(\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}}\\,\\|\\,\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta} + d\\textcolor{#2e9e6e}{\\theta}}) \\approx \\frac{1}{2}\\, d\\textcolor{#2e9e6e}{\\theta}^{\\top}\\, \\textcolor{#0e8f8f}{I}(\\textcolor{#2e9e6e}{\\theta})\\, d\\textcolor{#2e9e6e}{\\theta} = \\frac{1}{2} \\sum_{j,k} \\textcolor{#0e8f8f}{I}_{jk}(\\textcolor{#2e9e6e}{\\theta})\\, d\\textcolor{#2e9e6e}{\\theta}_j\\, d\\textcolor{#2e9e6e}{\\theta}_k
\`\`\`

\`\`\`latex
\\begin{array}{ll}
\\textcolor{#c2398a}{\\mathrm{KL}} & \\text{KL 발산} \\\\
\\textcolor{#7f8f10}{p}_{\\textcolor{#2e9e6e}{\\theta}} & \\text{모수 } \\theta \\text{ 가 정하는 분포 (분포족의 한 점)} \\\\
\\textcolor{#2e9e6e}{\\theta} & \\text{분포의 모수 (예: } (\\mu, \\sigma) \\text{)} \\\\
d\\textcolor{#2e9e6e}{\\theta} & \\text{모수의 아주 작은 변화 (벡터)} \\\\
\\textcolor{#0e8f8f}{I} & \\text{피셔 정보 행렬, } I_{jk} \\text{ 는 그 성분} \\\\
j,\\ k & \\text{모수의 번호}
\\end{array}
\`\`\`

KL은 dθ의 제곱에 비례해서 0으로 간다.
1차 항이 없는 이유는 q = p가 KL의 최솟값이기 때문이다. 바닥에서는 기울기가 0이다.
그리고 p와 q를 바꿔서 잰 KL도 같은 이차식으로 간다.
두 방향의 차이는 dθ의 세제곱 크기라서, 제곱보다 훨씬 빨리 사라진다.

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

θ가 0이나 1에 가까우면 분모가 작아져 I가 커진다.
거의 확신에 찬 분포 근처에서는 θ를 조금만 움직여도 KL이 크게 변한다는 뜻이다.
피셔 정보가 무엇이고 왜 이런 모양인지는 9장에서 제대로 다룬다.
지금은 "KL의 발밑에 숨은 행렬"이라는 얼굴만 기억해 두자.

{{viz: ch03/fisher-local}}

### 파이썬

\`\`\`python
import numpy as np

def kl_bern(a, b):
    return a * np.log(a / b) + (1 - a) * np.log((1 - a) / (1 - b))

theta = 0.3
I = 1 / (theta * (1 - theta))            # 베르누이의 Fisher 정보

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
> 1930년, 워싱턴 D.C.
> 뉴욕 시립대학에서 수학을 공부한 Solomon Kullback은
> 공무원 시험을 거쳐 미 육군 신호정보국(Signal Intelligence Service)에 들어갔다.
> William Friedman이 처음 뽑은 세 명의 암호분석가 중 하나였다.
> 낮에는 암호를 풀고, 그 사이 조지워싱턴 대학에서 수학 박사학위(1934)를 받았다.
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
> 같은 시기 대서양 건너 블레츨리 파크에서는 Alan Turing과 I. J. Good이
> 관측 하나가 한 가설을 얼마나 편드는지를 로그 우도비, 곧 "증거의 무게"로 재고 있었다.
> 그 무게를 현실의 빈도로 평균 내면 — 그것이 뒤에 KL이라 불릴 양이다.
>
> 전쟁이 끝나고 미국의 암호 기관들은 하나로 합쳐졌다(1949년 군 보안국, 1952년 국가안보국 NSA).
> 그 통합 기관에서 Kullback은 일리노이 대학 박사 출신의 수학자 Richard Leibler와 동료가 되었다.
> 두 사람이 1951년에 발표한 논문
> "On Information and Sufficiency"가 이 양에 이름과 체계를 주었다.
> 논문의 핵심 아이디어는 간단했다.
> 가설 1이 맞다고 믿을 때, 가설 2에서의 놀라움과
> 가설 1에서의 놀라움의 차이를 평균 내면 —
> 그것이 두 가설 사이의 "정보"다.
>
> 이 양은 대칭이 아니었다.
> "독일어라고 믿고 일본어 가설을 평가하는 것"과
> "일본어라고 믿고 독일어 가설을 평가하는 것"은 다르다.
> 비대칭은 버그가 아니라 본질이었다.
> 암호해독에서 "내가 서 있는 가설"이 무엇인가에 따라
> 증거의 무게가 달라지는 것은 자연스러운 일이니까.
>
> 뿌리는 더 깊다.
> 통계역학의 Gibbs는 이미 1902년에 이 양이 0 이상이라는 부등식을 쓰고 있었고,
> Harold Jeffreys는 1946년에 두 방향을 더해 대칭으로 만든 버전을 썼다.
> 하지만 "두 분포 사이의 정보"라는 관점에서
> 이 양을 정의하고 성질을 체계적으로 분석한 것은
> Kullback과 Leibler가 처음이었다.
>
> Kullback은 1962년 NSA 수석 과학자로 은퇴할 때까지
> 30년 넘게 암호 기관에서 일하며 통계적 암호분석의 기초를 놓았다.
> 그의 이름이 붙은 KL 발산은
> 기계학습에서 손실함수의 핵심 재료가 되었고,
> 정보기하학에서는 공간의 구조를 결정하는 자가 되었다.
> 암호해독가의 실용적 질문이 수학의 근본 개념이 된 셈이다.

## 연습문제 1 — 두 동전, 두 방향

공정한 동전 (0.5, 0.5)과 기운 동전 (0.9, 0.1)이 있다.
KL(공정‖기운)과 KL(기운‖공정)을 각각 구하라. 어느 쪽이 더 크고, 왜 그런가?

### 함께 풀기

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

## 연습문제 2 — 모형 자리에 선 A

「거리에도 종류가 있다」의 세 분포 A, B, C를 다시 쓴다.
이번에는 A를 모형 자리에 두고 KL(B‖A)와 KL(C‖A)를 비교하라.
A와 더 가까운 점은 여전히 C인가?

### 함께 풀기

**김민준:** 이건 위젯에서 봤어요. C가 더 가까워요. KL은 B를 싫어해요, B가 결과 3에 1%밖에 안 주니까.

**선생님:** 위젯 버튼은 어느 쪽에 놓여 있었어요?

〔M04〕 **김민준:** …KL(A‖·)요. 아, 문제는 KL(·‖A)네요.

**이서연:** 계산해 보면 KL(B‖A)가 0.182, KL(C‖A)가 0.239야. 이번엔 B가 더 가까워.

**선생님:** 왜 다시 뒤집혔을까요?

**이서연:** 이번엔 무게를 B가 쥐어요. B는 결과 3을 거의 안 보니까, A가 거기에 20%를 줬든 말든 신경을 안 써요. 1% 곱하기 로그라서 작아요.

〔S07〕 **이서연:** 그러니까 "A와 가장 가까운 점"이라는 질문 자체가 방향을 정해야 성립하는 질문이네요.

**김민준:** 팀플 동료평가 같네. 내가 조원들을 매긴 순위랑 조원들이 나를 기준으로 매긴 순위가 다른 것처럼.

**선생님:** 그래요. 유클리드 자에서는 "가까운 점"이 하나지만, KL에서는 누가 현실이고 누가 모형인지 먼저 정해야 해요.

## 연습문제 3 — σ로 나눈 거리

두 정규분포의 표준편차가 σ로 같고 평균만 Δμ 다르다.
KL이 (Δμ)² / (2σ²)가 됨을 보이고, 이 값의 단위가 무엇인지 말하라.
numpy로 σ = 5.8인 정규분포 표본을 뽑아 확인할 때 주의할 점도 적어라.

### 함께 풀기

**이서연:** σ가 같으면 log(σ₂/σ₁)가 0이 되고, σ₁²/(2σ₂²)가 ½이라서 −½과 상쇄돼요. (Δμ)²/(2σ²)만 남아요.

**선생님:** 단위는요?

**이서연:** 단위는… cm²/cm²니까 없어요. 어, 그러면 KL 1이라는 게 cm로 몇 cm인지는 말할 수 없는 거네요?

**선생님:** 말할 수 없어요. 그리고 그게 장점이에요. 키를 mm로 재도, 인치로 재도 KL은 같아요. Δμ와 σ가 같은 비율로 바뀌니까요.

**이서연:** 유클리드 거리는 단위를 바꾸면 값이 바뀌는데, 이건 안 바뀌네요. 해석학 시간에 "척도 불변인 양을 찾아라"던 게 이런 거였구나.

〔M05〕 **김민준:** 근데 저 numpy로 확인했더니 안 맞았어요. np.random.normal(174, 5.8**2, n)으로 뽑아서 KL을 표본 평균으로 쟀는데 값이 한참 작게 나와요.

**선생님:** normal의 두 번째 인자가 뭐예요?

〔M08〕 **김민준:** scale… 표준편차요. 분산을 넣었네요. σ를 33.64로 뽑았으니 봉우리가 엄청 넓어져서 9cm 이동이 별거 아닌 게 된 거예요.

**선생님:** 도입부의 "전 연령 분포"를 우연히 다시 만든 셈이에요. 주의할 점 하나 적었네요.

## 연습문제 4 — KL은 삼각부등식을 깨는가 (킬러)

베르누이 분포 세 개 a = 0.1, b = 0.5, c = 0.9를 생각한다.
(가) KL(a‖c)와 KL(a‖b) + KL(b‖c)를 비교해 KL이 삼각부등식을 깨는지 확인하라.
(나) 그렇다면 KL은 거리로서 쓸모없는가? 유클리드 거리의 제곱과 비교해서 답하라.
(다) θ = 0.3에서 KL(θ‖θ+ε) − KL(θ+ε‖θ)가 ε의 몇 제곱으로 줄어드는지 보여라.

### 함께 풀기

**김민준:** (가)는 쉬워요. KL(a‖c)가 1.758이고, KL(a‖b) + KL(b‖c)가 0.368 + 0.511 = 0.879예요. 돌아가는 게 두 배나 짧아요. 삼각부등식 깨졌고요, 그러니까 (나)의 답은 "KL은 거리로는 못 쓴다"예요.

**선생님:** 서연 학생도 같은 생각이에요?

〔S05〕 **이서연:** 잠깐만요. 깨지는 건 맞는데… 그러면 3장 절반이 쓸모없는 자를 쓴 거잖아요. 뭔가 이상해요. 저는 처음에 로그의 볼록성으로 삼각부등식을 증명하려고 했는데 안 되더라고요. 안 되는 게 당연했던 거죠.

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
`,Pm=`# 길

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
`,Im=`# 같은 세계, 다른 눈

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
`,Bm=`# 놀라움과 정보

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
`,Om=`# 볼록함수의 쌍대

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
`,_m=`# 두 눈을 동시에

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
`,qm=`# 지수족

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
`,jm=`# 구부러진 땅

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
`,Km=`# 파라메터 공간의 곡률

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
`,Hm=`# 무지와 확신

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
`,$m=`# 추론의 기하학

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
`,Vm=`# 수렴

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
`,Um=`# 전체 지도

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
`,Gm=`# 전환 ③: 도구를 들고 세계로

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
`,Wm=`# 생성의 기하학

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
`,Xm=`# 플로우 매칭 — 길을 통째로 배우기

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
`,Jm=`# 넓히기와 좁히기 — 언어모델이 배우는 두 방향

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
`,Qm=`# 스케일링 — 폭이 달라져도 한 걸음이 같으려면

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
`,Ym=`# 에필로그: 지도의 가장자리에서

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
`,_e=(l,n)=>J.lazy(()=>l().then(r=>({default:r[n]}))),Kt=[{id:"00",title:"서문",slug:"preface",md:Rm,vizMap:{}},{id:"01",title:"왜 정보기하학인가",slug:"why-infogeo",md:Dm,vizMap:{}},{id:"02",title:"점",slug:"point",md:Fm,vizMap:{}},{id:"03",title:"거리",slug:"distance",md:Nm,vizMap:{"ch03/euclidean-vs-kl":_e(()=>De(()=>import("./ch03-distance-XD7gMh7b.js"),__vite__mapDeps([0,1,2,3,4])),"EuclideanVsKLTab"),"ch03/asymmetry":_e(()=>De(()=>import("./ch03-distance-XD7gMh7b.js"),__vite__mapDeps([0,1,2,3,4])),"AsymmetryTab"),"ch03/fisher-local":_e(()=>De(()=>import("./ch03-distance-XD7gMh7b.js"),__vite__mapDeps([0,1,2,3,4])),"FisherLocalTab")}},{id:"04",title:"길",slug:"paths",md:Pm,vizMap:{"ch04/two-paths":_e(()=>De(()=>import("./ch04-paths-BodYCZhS.js"),__vite__mapDeps([5,1])),"TwoPathsTab"),"ch04/midpoint":_e(()=>De(()=>import("./ch04-paths-BodYCZhS.js"),__vite__mapDeps([5,1])),"MidpointTab"),"ch04/color-interpolation":_e(()=>De(()=>import("./ch04-paths-BodYCZhS.js"),__vite__mapDeps([5,1])),"ColorInterpolationTab")}},{id:"04z",title:"전환 — 같은 세계, 다른 눈",slug:"transition-1",md:Im,vizMap:{}},{id:"05",title:"놀라움과 정보",slug:"surprise",md:Bm,vizMap:{"ch05/surprise":_e(()=>De(()=>import("./ch05-surprise-and-information-IAn8aJ6l.js"),__vite__mapDeps([6,1,4,3])),"SurpriseTab"),"ch05/entropy-simplex":_e(()=>De(()=>import("./ch05-surprise-and-information-IAn8aJ6l.js"),__vite__mapDeps([6,1,4,3])),"EntropySimplexTab"),"ch05/cross-entropy":_e(()=>De(()=>import("./ch05-surprise-and-information-IAn8aJ6l.js"),__vite__mapDeps([6,1,4,3])),"CrossEntropyTab"),"ch05/convexity-kl":_e(()=>De(()=>import("./ch05-surprise-and-information-IAn8aJ6l.js"),__vite__mapDeps([6,1,4,3])),"ConvexityTab")}},{id:"06",title:"볼록함수의 쌍대",slug:"convex-duality",md:Om,vizMap:{"ch06/convexity":_e(()=>De(()=>import("./ch06-convex-duality-CaHLN2uC.js"),__vite__mapDeps([7,1,4,3])),"ConvexityTab"),"ch06/jensen":_e(()=>De(()=>import("./ch06-convex-duality-CaHLN2uC.js"),__vite__mapDeps([7,1,4,3])),"JensenTab"),"ch06/legendre":_e(()=>De(()=>import("./ch06-convex-duality-CaHLN2uC.js"),__vite__mapDeps([7,1,4,3])),"LegendreTab"),"ch06/duality-identity":_e(()=>De(()=>import("./ch06-convex-duality-CaHLN2uC.js"),__vite__mapDeps([7,1,4,3])),"DualityIdentityTab")}},{id:"06z",title:"전환 — 두 눈을 동시에",slug:"transition-2",md:_m,vizMap:{}},{id:"07",title:"지수족",slug:"exponential-family",md:qm,vizMap:{"ch07/flashcards":J.lazy(()=>De(()=>import("./ch07-exponential-family-flashcards-rSDB2PsF.js"),__vite__mapDeps([8,1,4,3]))),"ch07/legendre":J.lazy(()=>De(()=>import("./ch07-exponential-family-flashcards-rSDB2PsF.js"),__vite__mapDeps([8,1,4,3]))),"ch07/overview":J.lazy(()=>De(()=>import("./ch07-exponential-family-flashcards-rSDB2PsF.js"),__vite__mapDeps([8,1,4,3])))}},{id:"08",title:"구부러진 땅",slug:"curved-land",md:jm,vizMap:{}},{id:"09",title:"파라메터 공간의 곡률",slug:"fisher-information",md:Km,vizMap:{"ch09/sensitivity":_e(()=>De(()=>import("./ch09-fisher-information-CyaUN2Px.js"),__vite__mapDeps([9,1,4,3])),"SensitivityTab"),"ch09/fisher-matrix":_e(()=>De(()=>import("./ch09-fisher-information-CyaUN2Px.js"),__vite__mapDeps([9,1,4,3])),"FisherMatrixTab"),"ch09/metric-ellipse":_e(()=>De(()=>import("./ch09-fisher-information-CyaUN2Px.js"),__vite__mapDeps([9,1,4,3])),"MetricEllipseTab")}},{id:"10",title:"무지와 확신",slug:"ignorance",md:Hm,vizMap:{}},{id:"11",title:"추론의 기하학",slug:"geometry-of-inference",md:$m,vizMap:{"ch11/projection-concept":_e(()=>De(()=>import("./ch11-geometry-of-inference-CVhEo7g2.js"),__vite__mapDeps([10,1,4,3])),"ProjectionConceptTab"),"ch11/simplex-projection":_e(()=>De(()=>import("./ch11-geometry-of-inference-CVhEo7g2.js"),__vite__mapDeps([10,1,4,3])),"SimplexProjectionTab")}},{id:"12",title:"수렴",slug:"convergence",md:Vm,vizMap:{"ch12/pythagoras":_e(()=>De(()=>import("./ch12-convergence-BgOIWYd1.js"),__vite__mapDeps([11,1,4,3])),"PythagorasTab"),"ch12/em-convergence":_e(()=>De(()=>import("./ch12-convergence-BgOIWYd1.js"),__vite__mapDeps([11,1,4,3])),"EMConvergenceTab")}},{id:"13",title:"전체 지도",slug:"full-map",md:Um,vizMap:{}},{id:"13z",title:"전환 — 도구를 들고 세계로",slug:"transition-3",md:Gm,vizMap:{}},{id:"14",title:"디퓨전",slug:"diffusion",md:Wm,vizMap:{"ch14/score-field":_e(()=>De(()=>import("./ch14-diffusion-CnRNhTs6.js"),__vite__mapDeps([12,1,4,3])),"ScoreFieldTab"),"ch14/reverse-diffusion":_e(()=>De(()=>import("./ch14-diffusion-CnRNhTs6.js"),__vite__mapDeps([12,1,4,3])),"ReverseDiffusionTab"),"ch14/noise-annealing":_e(()=>De(()=>import("./ch14-diffusion-CnRNhTs6.js"),__vite__mapDeps([12,1,4,3])),"NoiseAnnealingTab")}},{id:"15",title:"플로우 매칭",slug:"flow-matching",md:Xm,vizMap:{"ch15/velocity-field":_e(()=>De(()=>import("./ch15-flow-matching-dUiXq1TS.js"),__vite__mapDeps([13,1,4,3])),"VelocityFieldTab"),"ch15/comparison":_e(()=>De(()=>import("./ch15-flow-matching-dUiXq1TS.js"),__vite__mapDeps([13,1,4,3])),"ComparisonTab")}},{id:"16",title:"넓히기와 좁히기",slug:"broadening-narrowing",md:Jm,vizMap:{"ch16/spectrum":_e(()=>De(()=>import("./ch16-broadening-narrowing-CY-cH0I2.js"),__vite__mapDeps([14,1,4,3])),"SpectrumTab"),"ch16/trajectory":_e(()=>De(()=>import("./ch16-broadening-narrowing-CY-cH0I2.js"),__vite__mapDeps([14,1,4,3])),"TrajectoryTab")}},{id:"17",title:"스케일링",slug:"scaling",md:Qm,vizMap:{"ch17/coordinate-vs-fisher":_e(()=>De(()=>import("./ch17-scaling-Dm_WF73i.js"),__vite__mapDeps([15,1,2,3])),"CoordinateVsFisherTab"),"ch17/stability":_e(()=>De(()=>import("./ch17-scaling-Dm_WF73i.js"),__vite__mapDeps([15,1,2,3])),"StabilityTab")}},{id:"A",title:"에필로그",slug:"epilogue",md:Ym,vizMap:{}}];function gi(l){const n=l.split(`
`),r=[];let i=[],s=!1;for(const u of n)/^\s*```/.test(u)&&(s=!s),!s&&/^## /.test(u)&&i.length>0?(r.push(i.join(`
`)),i=[u]):i.push(u);return i.length>0&&r.push(i.join(`
`)),r}function xu(l){var v;if(!l)return{title:null,vizKeys:[],prose:""};const n=l.split(`
`),r=[],i=[];let s=!1,u=!1;for(const g of n){if(/^\s*```/.test(g)&&(u=!u),!u&&/^### JSX/.test(g)){s=!0;continue}if(s)if(!u&&/^#{2,3}\s/.test(g))s=!1;else{const w=g.match(/^viz:\s*(.+)/);w&&r.push(w[1].trim());continue}i.push(g)}const h=(v=n[0])==null?void 0:v.match(/^## (.+)/);return{title:h?h[1]:null,vizKeys:[...new Set(r)],prose:i.join(`
`)}}function wu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Xr=wu();function ld(l){Xr=l}var Vr={exec:()=>null};function Me(l,n=""){let r=typeof l=="string"?l:l.source,i={replace:(s,u)=>{let h=typeof u=="string"?u:u.source;return h=h.replace(Pn.caret,"$1"),r=r.replace(s,h),i},getRegex:()=>new RegExp(r,n)};return i}var Zm=(()=>{try{return!!new RegExp("(?<=1)(?<!1)")}catch{return!1}})(),Pn={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:l=>new RegExp(`^( {0,3}${l})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}#`),htmlBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}<(?:[a-z].*>|!--)`,"i"),blockquoteBeginRegex:l=>new RegExp(`^ {0,${Math.min(3,l-1)}}>`)},e3=/^(?:[ \t]*(?:\n|$))+/,n3=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,t3=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Bl=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,r3=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ku=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ad=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,id=Me(ad).replace(/bull/g,ku).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),l3=Me(ad).replace(/bull/g,ku).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),bu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,a3=/^[^\n]+/,Su=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,i3=Me(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Su).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),s3=Me(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ku).getRegex(),yi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",zu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,o3=Me("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",zu).replace("tag",yi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),sd=Me(bu).replace("hr",Bl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),u3=Me(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",sd).getRegex(),Tu={blockquote:u3,code:n3,def:i3,fences:t3,heading:r3,hr:Bl,html:o3,lheading:id,list:s3,newline:e3,paragraph:sd,table:Vr,text:a3},Xh=Me("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Bl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex(),c3={...Tu,lheading:l3,table:Xh,paragraph:Me(bu).replace("hr",Bl).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Xh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",yi).getRegex()},h3={...Tu,html:Me(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",zu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Vr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Me(bu).replace("hr",Bl).replace("heading",` *#{1,6} *[^
]`).replace("lheading",id).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},d3=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,f3=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,od=/^( {2,}|\\)\n(?!\s*$)/,p3=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,xi=/[\p{P}\p{S}]/u,Eu=/[\s\p{P}\p{S}]/u,ud=/[^\s\p{P}\p{S}]/u,m3=Me(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Eu).getRegex(),cd=/(?!~)[\p{P}\p{S}]/u,v3=/(?!~)[\s\p{P}\p{S}]/u,g3=/(?:[^\s\p{P}\p{S}]|~)/u,hd=/(?![*_])[\p{P}\p{S}]/u,y3=/(?![*_])[\s\p{P}\p{S}]/u,x3=/(?:[^\s\p{P}\p{S}]|[*_])/u,w3=Me(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Zm?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),dd=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,k3=Me(dd,"u").replace(/punct/g,xi).getRegex(),b3=Me(dd,"u").replace(/punct/g,cd).getRegex(),fd="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",S3=Me(fd,"gu").replace(/notPunctSpace/g,ud).replace(/punctSpace/g,Eu).replace(/punct/g,xi).getRegex(),z3=Me(fd,"gu").replace(/notPunctSpace/g,g3).replace(/punctSpace/g,v3).replace(/punct/g,cd).getRegex(),T3=Me("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ud).replace(/punctSpace/g,Eu).replace(/punct/g,xi).getRegex(),E3=Me(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,hd).getRegex(),A3="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",M3=Me(A3,"gu").replace(/notPunctSpace/g,x3).replace(/punctSpace/g,y3).replace(/punct/g,hd).getRegex(),C3=Me(/\\(punct)/,"gu").replace(/punct/g,xi).getRegex(),L3=Me(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),R3=Me(zu).replace("(?:-->|$)","-->").getRegex(),D3=Me("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",R3).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ui=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,F3=Me(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ui).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pd=Me(/^!?\[(label)\]\[(ref)\]/).replace("label",ui).replace("ref",Su).getRegex(),md=Me(/^!?\[(ref)\](?:\[\])?/).replace("ref",Su).getRegex(),N3=Me("reflink|nolink(?!\\()","g").replace("reflink",pd).replace("nolink",md).getRegex(),Jh=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Au={_backpedal:Vr,anyPunctuation:C3,autolink:L3,blockSkip:w3,br:od,code:f3,del:Vr,delLDelim:Vr,delRDelim:Vr,emStrongLDelim:k3,emStrongRDelimAst:S3,emStrongRDelimUnd:T3,escape:d3,link:F3,nolink:md,punctuation:m3,reflink:pd,reflinkSearch:N3,tag:D3,text:p3,url:Vr},P3={...Au,link:Me(/^!?\[(label)\]\((.*?)\)/).replace("label",ui).getRegex(),reflink:Me(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ui).getRegex()},Uo={...Au,emStrongRDelimAst:z3,emStrongLDelim:b3,delLDelim:E3,delRDelim:M3,url:Me(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Jh).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Me(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Jh).getRegex()},I3={...Uo,br:Me(od).replace("{2,}","*").getRegex(),text:Me(Uo.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ja={normal:Tu,gfm:c3,pedantic:h3},Tl={normal:Au,gfm:Uo,breaks:I3,pedantic:P3},B3={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qh=l=>B3[l];function St(l,n){if(n){if(Pn.escapeTest.test(l))return l.replace(Pn.escapeReplace,Qh)}else if(Pn.escapeTestNoEncode.test(l))return l.replace(Pn.escapeReplaceNoEncode,Qh);return l}function Yh(l){try{l=encodeURI(l).replace(Pn.percentDecode,"%")}catch{return null}return l}function Zh(l,n){var u;let r=l.replace(Pn.findPipe,(h,f,v)=>{let g=!1,w=f;for(;--w>=0&&v[w]==="\\";)g=!g;return g?"|":" |"}),i=r.split(Pn.splitPipe),s=0;if(i[0].trim()||i.shift(),i.length>0&&!((u=i.at(-1))!=null&&u.trim())&&i.pop(),n)if(i.length>n)i.splice(n);else for(;i.length<n;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(Pn.slashPipe,"|");return i}function El(l,n,r){let i=l.length;if(i===0)return"";let s=0;for(;s<i&&l.charAt(i-s-1)===n;)s++;return l.slice(0,i-s)}function O3(l,n){if(l.indexOf(n[1])===-1)return-1;let r=0;for(let i=0;i<l.length;i++)if(l[i]==="\\")i++;else if(l[i]===n[0])r++;else if(l[i]===n[1]&&(r--,r<0))return i;return r>0?-2:-1}function _3(l,n=0){let r=n,i="";for(let s of l)if(s==="	"){let u=4-r%4;i+=" ".repeat(u),r+=u}else i+=s,r++;return i}function e4(l,n,r,i,s){let u=n.href,h=n.title||null,f=l[1].replace(s.other.outputLinkReplace,"$1");i.state.inLink=!0;let v={type:l[0].charAt(0)==="!"?"image":"link",raw:r,href:u,title:h,text:f,tokens:i.inlineTokens(f)};return i.state.inLink=!1,v}function q3(l,n,r){let i=l.match(r.other.indentCodeCompensation);if(i===null)return n;let s=i[1];return n.split(`
`).map(u=>{let h=u.match(r.other.beginningSpace);if(h===null)return u;let[f]=h;return f.length>=s.length?u.slice(s.length):u}).join(`
`)}var ci=class{constructor(l){He(this,"options");He(this,"rules");He(this,"lexer");this.options=l||Xr}space(l){let n=this.rules.block.newline.exec(l);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(l){let n=this.rules.block.code.exec(l);if(n){let r=n[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?r:El(r,`
`)}}}fences(l){let n=this.rules.block.fences.exec(l);if(n){let r=n[0],i=q3(r,n[3]||"",this.rules);return{type:"code",raw:r,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(l){let n=this.rules.block.heading.exec(l);if(n){let r=n[2].trim();if(this.rules.other.endingHash.test(r)){let i=El(r,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(r=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(l){let n=this.rules.block.hr.exec(l);if(n)return{type:"hr",raw:El(n[0],`
`)}}blockquote(l){let n=this.rules.block.blockquote.exec(l);if(n){let r=El(n[0],`
`).split(`
`),i="",s="",u=[];for(;r.length>0;){let h=!1,f=[],v;for(v=0;v<r.length;v++)if(this.rules.other.blockquoteStart.test(r[v]))f.push(r[v]),h=!0;else if(!h)f.push(r[v]);else break;r=r.slice(v);let g=f.join(`
`),w=g.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${g}`:g,s=s?`${s}
${w}`:w;let b=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(w,u,!0),this.lexer.state.top=b,r.length===0)break;let T=u.at(-1);if((T==null?void 0:T.type)==="code")break;if((T==null?void 0:T.type)==="blockquote"){let A=T,I=A.raw+`
`+r.join(`
`),F=this.blockquote(I);u[u.length-1]=F,i=i.substring(0,i.length-A.raw.length)+F.raw,s=s.substring(0,s.length-A.text.length)+F.text;break}else if((T==null?void 0:T.type)==="list"){let A=T,I=A.raw+`
`+r.join(`
`),F=this.list(I);u[u.length-1]=F,i=i.substring(0,i.length-T.raw.length)+F.raw,s=s.substring(0,s.length-A.raw.length)+F.raw,r=I.substring(u.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:u,text:s}}}list(l){var r,i;let n=this.rules.block.list.exec(l);if(n){let s=n[1].trim(),u=s.length>1,h={type:"list",raw:"",ordered:u,start:u?+s.slice(0,-1):"",loose:!1,items:[]};s=u?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=u?s:"[*+-]");let f=this.rules.other.listItemRegex(s),v=!1;for(;l;){let w=!1,b="",T="";if(!(n=f.exec(l))||this.rules.block.hr.test(l))break;b=n[0],l=l.substring(b.length);let A=_3(n[2].split(`
`,1)[0],n[1].length),I=l.split(`
`,1)[0],F=!A.trim(),D=0;if(this.options.pedantic?(D=2,T=A.trimStart()):F?D=n[1].length+1:(D=A.search(this.rules.other.nonSpaceChar),D=D>4?1:D,T=A.slice(D),D+=n[1].length),F&&this.rules.other.blankLine.test(I)&&(b+=I+`
`,l=l.substring(I.length+1),w=!0),!w){let q=this.rules.other.nextBulletRegex(D),$=this.rules.other.hrRegex(D),Q=this.rules.other.fencesBeginRegex(D),re=this.rules.other.headingBeginRegex(D),ue=this.rules.other.htmlBeginRegex(D),ce=this.rules.other.blockquoteBeginRegex(D);for(;l;){let me=l.split(`
`,1)[0],ge;if(I=me,this.options.pedantic?(I=I.replace(this.rules.other.listReplaceNesting,"  "),ge=I):ge=I.replace(this.rules.other.tabCharGlobal,"    "),Q.test(I)||re.test(I)||ue.test(I)||ce.test(I)||q.test(I)||$.test(I))break;if(ge.search(this.rules.other.nonSpaceChar)>=D||!I.trim())T+=`
`+ge.slice(D);else{if(F||A.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||Q.test(A)||re.test(A)||$.test(A))break;T+=`
`+I}F=!I.trim(),b+=me+`
`,l=l.substring(me.length+1),A=ge.slice(D)}}h.loose||(v?h.loose=!0:this.rules.other.doubleBlankLine.test(b)&&(v=!0)),h.items.push({type:"list_item",raw:b,task:!!this.options.gfm&&this.rules.other.listIsTask.test(T),loose:!1,text:T,tokens:[]}),h.raw+=b}let g=h.items.at(-1);if(g)g.raw=g.raw.trimEnd(),g.text=g.text.trimEnd();else return;h.raw=h.raw.trimEnd();for(let w of h.items){if(this.lexer.state.top=!1,w.tokens=this.lexer.blockTokens(w.text,[]),w.task){if(w.text=w.text.replace(this.rules.other.listReplaceTask,""),((r=w.tokens[0])==null?void 0:r.type)==="text"||((i=w.tokens[0])==null?void 0:i.type)==="paragraph"){w.tokens[0].raw=w.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),w.tokens[0].text=w.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let T=this.lexer.inlineQueue.length-1;T>=0;T--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[T].src)){this.lexer.inlineQueue[T].src=this.lexer.inlineQueue[T].src.replace(this.rules.other.listReplaceTask,"");break}}let b=this.rules.other.listTaskCheckbox.exec(w.raw);if(b){let T={type:"checkbox",raw:b[0]+" ",checked:b[0]!=="[ ]"};w.checked=T.checked,h.loose?w.tokens[0]&&["paragraph","text"].includes(w.tokens[0].type)&&"tokens"in w.tokens[0]&&w.tokens[0].tokens?(w.tokens[0].raw=T.raw+w.tokens[0].raw,w.tokens[0].text=T.raw+w.tokens[0].text,w.tokens[0].tokens.unshift(T)):w.tokens.unshift({type:"paragraph",raw:T.raw,text:T.raw,tokens:[T]}):w.tokens.unshift(T)}}if(!h.loose){let b=w.tokens.filter(A=>A.type==="space"),T=b.length>0&&b.some(A=>this.rules.other.anyLine.test(A.raw));h.loose=T}}if(h.loose)for(let w of h.items){w.loose=!0;for(let b of w.tokens)b.type==="text"&&(b.type="paragraph")}return h}}html(l){let n=this.rules.block.html.exec(l);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(l){let n=this.rules.block.def.exec(l);if(n){let r=n[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=n[2]?n[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:r,raw:n[0],href:i,title:s}}}table(l){var h;let n=this.rules.block.table.exec(l);if(!n||!this.rules.other.tableDelimiter.test(n[2]))return;let r=Zh(n[1]),i=n[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(h=n[3])!=null&&h.trim()?n[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],u={type:"table",raw:n[0],header:[],align:[],rows:[]};if(r.length===i.length){for(let f of i)this.rules.other.tableAlignRight.test(f)?u.align.push("right"):this.rules.other.tableAlignCenter.test(f)?u.align.push("center"):this.rules.other.tableAlignLeft.test(f)?u.align.push("left"):u.align.push(null);for(let f=0;f<r.length;f++)u.header.push({text:r[f],tokens:this.lexer.inline(r[f]),header:!0,align:u.align[f]});for(let f of s)u.rows.push(Zh(f,u.header.length).map((v,g)=>({text:v,tokens:this.lexer.inline(v),header:!1,align:u.align[g]})));return u}}lheading(l){let n=this.rules.block.lheading.exec(l);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(l){let n=this.rules.block.paragraph.exec(l);if(n){let r=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:r,tokens:this.lexer.inline(r)}}}text(l){let n=this.rules.block.text.exec(l);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(l){let n=this.rules.inline.escape.exec(l);if(n)return{type:"escape",raw:n[0],text:n[1]}}tag(l){let n=this.rules.inline.tag.exec(l);if(n)return!this.lexer.state.inLink&&this.rules.other.startATag.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(l){let n=this.rules.inline.link.exec(l);if(n){let r=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let u=El(r.slice(0,-1),"\\");if((r.length-u.length)%2===0)return}else{let u=O3(n[2],"()");if(u===-2)return;if(u>-1){let h=(n[0].indexOf("!")===0?5:4)+n[1].length+u;n[2]=n[2].substring(0,u),n[0]=n[0].substring(0,h).trim(),n[3]=""}}let i=n[2],s="";if(this.options.pedantic){let u=this.rules.other.pedanticHrefTitle.exec(i);u&&(i=u[1],s=u[3])}else s=n[3]?n[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i=i.slice(1):i=i.slice(1,-1)),e4(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(l,n){let r;if((r=this.rules.inline.reflink.exec(l))||(r=this.rules.inline.nolink.exec(l))){let i=(r[2]||r[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=n[i.toLowerCase()];if(!s){let u=r[0].charAt(0);return{type:"text",raw:u,text:u}}return e4(r,s,r[0],this.lexer,this.rules)}}emStrong(l,n,r=""){let i=this.rules.inline.emStrongLDelim.exec(l);if(!(!i||i[3]&&r.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[2])||!r||this.rules.inline.punctuation.exec(r))){let s=[...i[0]].length-1,u,h,f=s,v=0,g=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,n=n.slice(-1*l.length+s);(i=g.exec(n))!=null;){if(u=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!u)continue;if(h=[...u].length,i[3]||i[4]){f+=h;continue}else if((i[5]||i[6])&&s%3&&!((s+h)%3)){v+=h;continue}if(f-=h,f>0)continue;h=Math.min(h,h+f+v);let w=[...i[0]][0].length,b=l.slice(0,s+i.index+w+h);if(Math.min(s,h)%2){let A=b.slice(1,-1);return{type:"em",raw:b,text:A,tokens:this.lexer.inlineTokens(A)}}let T=b.slice(2,-2);return{type:"strong",raw:b,text:T,tokens:this.lexer.inlineTokens(T)}}}}codespan(l){let n=this.rules.inline.code.exec(l);if(n){let r=n[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(r),s=this.rules.other.startingSpaceChar.test(r)&&this.rules.other.endingSpaceChar.test(r);return i&&s&&(r=r.substring(1,r.length-1)),{type:"codespan",raw:n[0],text:r}}}br(l){let n=this.rules.inline.br.exec(l);if(n)return{type:"br",raw:n[0]}}del(l,n,r=""){let i=this.rules.inline.delLDelim.exec(l);if(i&&(!i[1]||!r||this.rules.inline.punctuation.exec(r))){let s=[...i[0]].length-1,u,h,f=s,v=this.rules.inline.delRDelim;for(v.lastIndex=0,n=n.slice(-1*l.length+s);(i=v.exec(n))!=null;){if(u=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!u||(h=[...u].length,h!==s))continue;if(i[3]||i[4]){f+=h;continue}if(f-=h,f>0)continue;h=Math.min(h,h+f);let g=[...i[0]][0].length,w=l.slice(0,s+i.index+g+h),b=w.slice(s,-s);return{type:"del",raw:w,text:b,tokens:this.lexer.inlineTokens(b)}}}}autolink(l){let n=this.rules.inline.autolink.exec(l);if(n){let r,i;return n[2]==="@"?(r=n[1],i="mailto:"+r):(r=n[1],i=r),{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(l){var r;let n;if(n=this.rules.inline.url.exec(l)){let i,s;if(n[2]==="@")i=n[0],s="mailto:"+i;else{let u;do u=n[0],n[0]=((r=this.rules.inline._backpedal.exec(n[0]))==null?void 0:r[0])??"";while(u!==n[0]);i=n[0],n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(l){let n=this.rules.inline.text.exec(l);if(n){let r=this.lexer.state.inRawBlock;return{type:"text",raw:n[0],text:n[0],escaped:r}}}},mt=class Go{constructor(n){He(this,"tokens");He(this,"options");He(this,"state");He(this,"inlineQueue");He(this,"tokenizer");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Xr,this.options.tokenizer=this.options.tokenizer||new ci,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let r={other:Pn,block:Ja.normal,inline:Tl.normal};this.options.pedantic?(r.block=Ja.pedantic,r.inline=Tl.pedantic):this.options.gfm&&(r.block=Ja.gfm,this.options.breaks?r.inline=Tl.breaks:r.inline=Tl.gfm),this.tokenizer.rules=r}static get rules(){return{block:Ja,inline:Tl}}static lex(n,r){return new Go(r).lex(n)}static lexInline(n,r){return new Go(r).inlineTokens(n)}lex(n){n=n.replace(Pn.carriageReturn,`
`),this.blockTokens(n,this.tokens);for(let r=0;r<this.inlineQueue.length;r++){let i=this.inlineQueue[r];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,r=[],i=!1){var s,u,h;for(this.options.pedantic&&(n=n.replace(Pn.tabCharGlobal,"    ").replace(Pn.spaceLine,""));n;){let f;if((u=(s=this.options.extensions)==null?void 0:s.block)!=null&&u.some(g=>(f=g.call({lexer:this},n,r))?(n=n.substring(f.raw.length),r.push(f),!0):!1))continue;if(f=this.tokenizer.space(n)){n=n.substring(f.raw.length);let g=r.at(-1);f.raw.length===1&&g!==void 0?g.raw+=`
`:r.push(f);continue}if(f=this.tokenizer.code(n)){n=n.substring(f.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+f.raw,g.text+=`
`+f.text,this.inlineQueue.at(-1).src=g.text):r.push(f);continue}if(f=this.tokenizer.fences(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.heading(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.hr(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.blockquote(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.list(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.html(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.def(n)){n=n.substring(f.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="paragraph"||(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+f.raw,g.text+=`
`+f.raw,this.inlineQueue.at(-1).src=g.text):this.tokens.links[f.tag]||(this.tokens.links[f.tag]={href:f.href,title:f.title},r.push(f));continue}if(f=this.tokenizer.table(n)){n=n.substring(f.raw.length),r.push(f);continue}if(f=this.tokenizer.lheading(n)){n=n.substring(f.raw.length),r.push(f);continue}let v=n;if((h=this.options.extensions)!=null&&h.startBlock){let g=1/0,w=n.slice(1),b;this.options.extensions.startBlock.forEach(T=>{b=T.call({lexer:this},w),typeof b=="number"&&b>=0&&(g=Math.min(g,b))}),g<1/0&&g>=0&&(v=n.substring(0,g+1))}if(this.state.top&&(f=this.tokenizer.paragraph(v))){let g=r.at(-1);i&&(g==null?void 0:g.type)==="paragraph"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+f.raw,g.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):r.push(f),i=v.length!==n.length,n=n.substring(f.raw.length);continue}if(f=this.tokenizer.text(n)){n=n.substring(f.raw.length);let g=r.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=(g.raw.endsWith(`
`)?"":`
`)+f.raw,g.text+=`
`+f.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=g.text):r.push(f);continue}if(n){let g="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return this.state.top=!0,r}inline(n,r=[]){return this.inlineQueue.push({src:n,tokens:r}),r}inlineTokens(n,r=[]){var v,g,w,b,T;let i=n,s=null;if(this.tokens.links){let A=Object.keys(this.tokens.links);if(A.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)A.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let u;for(;(s=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)u=s[2]?s[2].length:0,i=i.slice(0,s.index+u)+"["+"a".repeat(s[0].length-u-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=((g=(v=this.options.hooks)==null?void 0:v.emStrongMask)==null?void 0:g.call({lexer:this},i))??i;let h=!1,f="";for(;n;){h||(f=""),h=!1;let A;if((b=(w=this.options.extensions)==null?void 0:w.inline)!=null&&b.some(F=>(A=F.call({lexer:this},n,r))?(n=n.substring(A.raw.length),r.push(A),!0):!1))continue;if(A=this.tokenizer.escape(n)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.tag(n)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.link(n)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(A.raw.length);let F=r.at(-1);A.type==="text"&&(F==null?void 0:F.type)==="text"?(F.raw+=A.raw,F.text+=A.text):r.push(A);continue}if(A=this.tokenizer.emStrong(n,i,f)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.codespan(n)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.br(n)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.del(n,i,f)){n=n.substring(A.raw.length),r.push(A);continue}if(A=this.tokenizer.autolink(n)){n=n.substring(A.raw.length),r.push(A);continue}if(!this.state.inLink&&(A=this.tokenizer.url(n))){n=n.substring(A.raw.length),r.push(A);continue}let I=n;if((T=this.options.extensions)!=null&&T.startInline){let F=1/0,D=n.slice(1),q;this.options.extensions.startInline.forEach($=>{q=$.call({lexer:this},D),typeof q=="number"&&q>=0&&(F=Math.min(F,q))}),F<1/0&&F>=0&&(I=n.substring(0,F+1))}if(A=this.tokenizer.inlineText(I)){n=n.substring(A.raw.length),A.raw.slice(-1)!=="_"&&(f=A.raw.slice(-1)),h=!0;let F=r.at(-1);(F==null?void 0:F.type)==="text"?(F.raw+=A.raw,F.text+=A.text):r.push(A);continue}if(n){let F="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(F);break}else throw new Error(F)}}return r}},hi=class{constructor(l){He(this,"options");He(this,"parser");this.options=l||Xr}space(l){return""}code({text:l,lang:n,escaped:r}){var u;let i=(u=(n||"").match(Pn.notSpaceStart))==null?void 0:u[0],s=l.replace(Pn.endingNewline,"")+`
`;return i?'<pre><code class="language-'+St(i)+'">'+(r?s:St(s,!0))+`</code></pre>
`:"<pre><code>"+(r?s:St(s,!0))+`</code></pre>
`}blockquote({tokens:l}){return`<blockquote>
${this.parser.parse(l)}</blockquote>
`}html({text:l}){return l}def(l){return""}heading({tokens:l,depth:n}){return`<h${n}>${this.parser.parseInline(l)}</h${n}>
`}hr(l){return`<hr>
`}list(l){let n=l.ordered,r=l.start,i="";for(let h=0;h<l.items.length;h++){let f=l.items[h];i+=this.listitem(f)}let s=n?"ol":"ul",u=n&&r!==1?' start="'+r+'"':"";return"<"+s+u+`>
`+i+"</"+s+`>
`}listitem(l){return`<li>${this.parser.parse(l.tokens)}</li>
`}checkbox({checked:l}){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:l}){return`<p>${this.parser.parseInline(l)}</p>
`}table(l){let n="",r="";for(let s=0;s<l.header.length;s++)r+=this.tablecell(l.header[s]);n+=this.tablerow({text:r});let i="";for(let s=0;s<l.rows.length;s++){let u=l.rows[s];r="";for(let h=0;h<u.length;h++)r+=this.tablecell(u[h]);i+=this.tablerow({text:r})}return i&&(i=`<tbody>${i}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+i+`</table>
`}tablerow({text:l}){return`<tr>
${l}</tr>
`}tablecell(l){let n=this.parser.parseInline(l.tokens),r=l.header?"th":"td";return(l.align?`<${r} align="${l.align}">`:`<${r}>`)+n+`</${r}>
`}strong({tokens:l}){return`<strong>${this.parser.parseInline(l)}</strong>`}em({tokens:l}){return`<em>${this.parser.parseInline(l)}</em>`}codespan({text:l}){return`<code>${St(l,!0)}</code>`}br(l){return"<br>"}del({tokens:l}){return`<del>${this.parser.parseInline(l)}</del>`}link({href:l,title:n,tokens:r}){let i=this.parser.parseInline(r),s=Yh(l);if(s===null)return i;l=s;let u='<a href="'+l+'"';return n&&(u+=' title="'+St(n)+'"'),u+=">"+i+"</a>",u}image({href:l,title:n,text:r,tokens:i}){i&&(r=this.parser.parseInline(i,this.parser.textRenderer));let s=Yh(l);if(s===null)return St(r);l=s;let u=`<img src="${l}" alt="${St(r)}"`;return n&&(u+=` title="${St(n)}"`),u+=">",u}text(l){return"tokens"in l&&l.tokens?this.parser.parseInline(l.tokens):"escaped"in l&&l.escaped?l.text:St(l.text)}},Mu=class{strong({text:l}){return l}em({text:l}){return l}codespan({text:l}){return l}del({text:l}){return l}html({text:l}){return l}text({text:l}){return l}link({text:l}){return""+l}image({text:l}){return""+l}br(){return""}checkbox({raw:l}){return l}},vt=class Wo{constructor(n){He(this,"options");He(this,"renderer");He(this,"textRenderer");this.options=n||Xr,this.options.renderer=this.options.renderer||new hi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Mu}static parse(n,r){return new Wo(r).parse(n)}static parseInline(n,r){return new Wo(r).parseInline(n)}parse(n){var i,s;let r="";for(let u=0;u<n.length;u++){let h=n[u];if((s=(i=this.options.extensions)==null?void 0:i.renderers)!=null&&s[h.type]){let v=h,g=this.options.extensions.renderers[v.type].call({parser:this},v);if(g!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(v.type)){r+=g||"";continue}}let f=h;switch(f.type){case"space":{r+=this.renderer.space(f);break}case"hr":{r+=this.renderer.hr(f);break}case"heading":{r+=this.renderer.heading(f);break}case"code":{r+=this.renderer.code(f);break}case"table":{r+=this.renderer.table(f);break}case"blockquote":{r+=this.renderer.blockquote(f);break}case"list":{r+=this.renderer.list(f);break}case"checkbox":{r+=this.renderer.checkbox(f);break}case"html":{r+=this.renderer.html(f);break}case"def":{r+=this.renderer.def(f);break}case"paragraph":{r+=this.renderer.paragraph(f);break}case"text":{r+=this.renderer.text(f);break}default:{let v='Token with "'+f.type+'" type was not found.';if(this.options.silent)return console.error(v),"";throw new Error(v)}}}return r}parseInline(n,r=this.renderer){var s,u;let i="";for(let h=0;h<n.length;h++){let f=n[h];if((u=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&u[f.type]){let g=this.options.extensions.renderers[f.type].call({parser:this},f);if(g!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(f.type)){i+=g||"";continue}}let v=f;switch(v.type){case"escape":{i+=r.text(v);break}case"html":{i+=r.html(v);break}case"link":{i+=r.link(v);break}case"image":{i+=r.image(v);break}case"checkbox":{i+=r.checkbox(v);break}case"strong":{i+=r.strong(v);break}case"em":{i+=r.em(v);break}case"codespan":{i+=r.codespan(v);break}case"br":{i+=r.br(v);break}case"del":{i+=r.del(v);break}case"text":{i+=r.text(v);break}default:{let g='Token with "'+v.type+'" type was not found.';if(this.options.silent)return console.error(g),"";throw new Error(g)}}}return i}},li,Al=(li=class{constructor(l){He(this,"options");He(this,"block");this.options=l||Xr}preprocess(l){return l}postprocess(l){return l}processAllTokens(l){return l}emStrongMask(l){return l}provideLexer(){return this.block?mt.lex:mt.lexInline}provideParser(){return this.block?vt.parse:vt.parseInline}},He(li,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens","emStrongMask"])),He(li,"passThroughHooksRespectAsync",new Set(["preprocess","postprocess","processAllTokens"])),li),j3=class{constructor(...l){He(this,"defaults",wu());He(this,"options",this.setOptions);He(this,"parse",this.parseMarkdown(!0));He(this,"parseInline",this.parseMarkdown(!1));He(this,"Parser",vt);He(this,"Renderer",hi);He(this,"TextRenderer",Mu);He(this,"Lexer",mt);He(this,"Tokenizer",ci);He(this,"Hooks",Al);this.use(...l)}walkTokens(l,n){var i,s;let r=[];for(let u of l)switch(r=r.concat(n.call(this,u)),u.type){case"table":{let h=u;for(let f of h.header)r=r.concat(this.walkTokens(f.tokens,n));for(let f of h.rows)for(let v of f)r=r.concat(this.walkTokens(v.tokens,n));break}case"list":{let h=u;r=r.concat(this.walkTokens(h.items,n));break}default:{let h=u;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[h.type]?this.defaults.extensions.childTokens[h.type].forEach(f=>{let v=h[f].flat(1/0);r=r.concat(this.walkTokens(v,n))}):h.tokens&&(r=r.concat(this.walkTokens(h.tokens,n)))}}return r}use(...l){let n=this.defaults.extensions||{renderers:{},childTokens:{}};return l.forEach(r=>{let i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){let u=n.renderers[s.name];u?n.renderers[s.name]=function(...h){let f=s.renderer.apply(this,h);return f===!1&&(f=u.apply(this,h)),f}:n.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let u=n[s.level];u?u.unshift(s.tokenizer):n[s.level]=[s.tokenizer],s.start&&(s.level==="block"?n.startBlock?n.startBlock.push(s.start):n.startBlock=[s.start]:s.level==="inline"&&(n.startInline?n.startInline.push(s.start):n.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(n.childTokens[s.name]=s.childTokens)}),i.extensions=n),r.renderer){let s=this.defaults.renderer||new hi(this.defaults);for(let u in r.renderer){if(!(u in s))throw new Error(`renderer '${u}' does not exist`);if(["options","parser"].includes(u))continue;let h=u,f=r.renderer[h],v=s[h];s[h]=(...g)=>{let w=f.apply(s,g);return w===!1&&(w=v.apply(s,g)),w||""}}i.renderer=s}if(r.tokenizer){let s=this.defaults.tokenizer||new ci(this.defaults);for(let u in r.tokenizer){if(!(u in s))throw new Error(`tokenizer '${u}' does not exist`);if(["options","rules","lexer"].includes(u))continue;let h=u,f=r.tokenizer[h],v=s[h];s[h]=(...g)=>{let w=f.apply(s,g);return w===!1&&(w=v.apply(s,g)),w}}i.tokenizer=s}if(r.hooks){let s=this.defaults.hooks||new Al;for(let u in r.hooks){if(!(u in s))throw new Error(`hook '${u}' does not exist`);if(["options","block"].includes(u))continue;let h=u,f=r.hooks[h],v=s[h];Al.passThroughHooks.has(u)?s[h]=g=>{if(this.defaults.async&&Al.passThroughHooksRespectAsync.has(u))return(async()=>{let b=await f.call(s,g);return v.call(s,b)})();let w=f.call(s,g);return v.call(s,w)}:s[h]=(...g)=>{if(this.defaults.async)return(async()=>{let b=await f.apply(s,g);return b===!1&&(b=await v.apply(s,g)),b})();let w=f.apply(s,g);return w===!1&&(w=v.apply(s,g)),w}}i.hooks=s}if(r.walkTokens){let s=this.defaults.walkTokens,u=r.walkTokens;i.walkTokens=function(h){let f=[];return f.push(u.call(this,h)),s&&(f=f.concat(s.call(this,h))),f}}this.defaults={...this.defaults,...i}}),this}setOptions(l){return this.defaults={...this.defaults,...l},this}lexer(l,n){return mt.lex(l,n??this.defaults)}parser(l,n){return vt.parse(l,n??this.defaults)}parseMarkdown(l){return(n,r)=>{let i={...r},s={...this.defaults,...i},u=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&i.async===!1)return u(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return u(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return u(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=l),s.async)return(async()=>{let h=s.hooks?await s.hooks.preprocess(n):n,f=await(s.hooks?await s.hooks.provideLexer():l?mt.lex:mt.lexInline)(h,s),v=s.hooks?await s.hooks.processAllTokens(f):f;s.walkTokens&&await Promise.all(this.walkTokens(v,s.walkTokens));let g=await(s.hooks?await s.hooks.provideParser():l?vt.parse:vt.parseInline)(v,s);return s.hooks?await s.hooks.postprocess(g):g})().catch(u);try{s.hooks&&(n=s.hooks.preprocess(n));let h=(s.hooks?s.hooks.provideLexer():l?mt.lex:mt.lexInline)(n,s);s.hooks&&(h=s.hooks.processAllTokens(h)),s.walkTokens&&this.walkTokens(h,s.walkTokens);let f=(s.hooks?s.hooks.provideParser():l?vt.parse:vt.parseInline)(h,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(h){return u(h)}}}onError(l,n){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,l){let i="<p>An error occurred:</p><pre>"+St(r.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(r);throw r}}},Gr=new j3;function qe(l,n){return Gr.parse(l,n)}qe.options=qe.setOptions=function(l){return Gr.setOptions(l),qe.defaults=Gr.defaults,ld(qe.defaults),qe};qe.getDefaults=wu;qe.defaults=Xr;qe.use=function(...l){return Gr.use(...l),qe.defaults=Gr.defaults,ld(qe.defaults),qe};qe.walkTokens=function(l,n){return Gr.walkTokens(l,n)};qe.parseInline=Gr.parseInline;qe.Parser=vt;qe.parser=vt.parse;qe.Renderer=hi;qe.TextRenderer=Mu;qe.Lexer=mt;qe.lexer=mt.lex;qe.Tokenizer=ci;qe.Hooks=Al;qe.parse=qe;qe.options;qe.setOptions;qe.use;qe.walkTokens;qe.parseInline;vt.parse;mt.lex;class U extends Error{constructor(n,r){var i="KaTeX parse error: "+n,s,u,h=r&&r.loc;if(h&&h.start<=h.end){var f=h.lexer.input;s=h.start,u=h.end,s===f.length?i+=" at end of input: ":i+=" at position "+(s+1)+": ";var v=f.slice(s,u).replace(/[^]/g,"$&̲"),g;s>15?g="…"+f.slice(s-15,s):g=f.slice(0,s);var w;u+15<f.length?w=f.slice(u,u+15)+"…":w=f.slice(u),i+=g+v+w}super(i),this.name="ParseError",this.position=void 0,this.length=void 0,this.rawMessage=void 0,Object.setPrototypeOf(this,U.prototype),this.position=s,s!=null&&u!=null&&(this.length=u-s),this.rawMessage=n}}var K3=/([A-Z])/g,H3=l=>l.replace(K3,"-$1").toLowerCase(),$3={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},V3=/[&><"']/g,Ln=l=>String(l).replace(V3,n=>$3[n]),ii=l=>l.type==="ordgroup"||l.type==="color"?l.body.length===1?ii(l.body[0]):l:l.type==="font"?ii(l.body):l,U3=new Set(["mathord","textord","atom"]),Vt=l=>U3.has(ii(l).type),G3=l=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(l);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},Xo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:l=>"#"+l},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(l,n)=>(n.push(l),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:l=>Math.max(0,l),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:l=>Math.max(0,l),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:l=>Math.max(0,l),cli:"-e, --max-expand <n>",cliProcessor:l=>l==="Infinity"?1/0:parseInt(l)},globalGroup:{type:"boolean",cli:!1}};function W3(l){if(typeof l!="string")return l.enum[0];switch(l){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{};default:throw new Error("Unexpected schema type; settings must declare an explicit default.")}}function X3(l){if(Object.prototype.hasOwnProperty.call(l,"default")&&l.default!==void 0)return l.default;var n=Array.isArray(l.type)?l.type[0]:l.type;return W3(n)}function J3(l,n,r,i){var s=Object.prototype.hasOwnProperty.call(r,n)?r[n]:void 0,u=Object.prototype.hasOwnProperty.call(i,"processor")?i.processor:void 0;l[n]=s!==void 0?u?u(s):s:X3(i)}class Cu{constructor(n){n===void 0&&(n={}),this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r of Object.keys(Xo)){var i=Xo[r];i&&J3(this,r,n,i)}}reportNonstrict(n,r,i){var s=this.strict;if(typeof s=="function"&&(s=s(n,r,i)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new U("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),i);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,i){var s=this.strict;if(typeof s=="function")try{s=s(n,r,i)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if("url"in n&&n.url&&!n.protocol){var r=G3(n.url);if(r==null)return!1;n.protocol=r}var i=typeof this.trust=="function"?this.trust(n):this.trust;return!!i}}class mr{constructor(n,r,i){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=i}sup(){return zt[Q3[this.id]]}sub(){return zt[Y3[this.id]]}fracNum(){return zt[Z3[this.id]]}fracDen(){return zt[e5[this.id]]}cramp(){return zt[n5[this.id]]}text(){return zt[t5[this.id]]}isTight(){return this.size>=2}}var Lu=0,di=1,z0=2,jt=3,Dl=4,it=5,T0=6,In=7,zt=[new mr(Lu,0,!1),new mr(di,0,!0),new mr(z0,1,!1),new mr(jt,1,!0),new mr(Dl,2,!1),new mr(it,2,!0),new mr(T0,3,!1),new mr(In,3,!0)],Q3=[Dl,it,Dl,it,T0,In,T0,In],Y3=[it,it,it,it,In,In,In,In],Z3=[z0,jt,Dl,it,T0,In,T0,In],e5=[jt,jt,it,it,In,In,In,In],n5=[di,di,jt,jt,it,it,In,In],t5=[Lu,di,z0,jt,z0,jt,z0,jt],ke={DISPLAY:zt[Lu],TEXT:zt[z0],SCRIPT:zt[Dl],SCRIPTSCRIPT:zt[T0]},Jo=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function r5(l){for(var n=0;n<Jo.length;n++)for(var r=Jo[n],i=0;i<r.blocks.length;i++){var s=r.blocks[i];if(l>=s[0]&&l<=s[1])return r.name}return null}var si=[];Jo.forEach(l=>l.blocks.forEach(n=>si.push(...n)));function vd(l){for(var n=0;n<si.length;n+=2)if(l>=si[n]&&l<=si[n+1])return!0;return!1}var yn=l=>l+" "+l,S0=80,l5=function(n,r){return"M95,"+(622+n+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+n/2.075+" -"+n+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+n)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},a5=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},i5=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},s5=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},o5=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},u5=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},c5=function(n,r,i){var s=i-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},h5=function(n,r,i){r=1e3*r;var s="";switch(n){case"sqrtMain":s=l5(r,S0);break;case"sqrtSize1":s=a5(r,S0);break;case"sqrtSize2":s=i5(r,S0);break;case"sqrtSize3":s=s5(r,S0);break;case"sqrtSize4":s=o5(r,S0);break;case"sqrtTall":s=c5(r,S0,i)}return s},d5=function(n,r){switch(n){case"⎜":return yn("M291 0 H417 V"+r+" H291z");case"∣":return yn("M145 0 H188 V"+r+" H145z");case"∥":return yn("M145 0 H188 V"+r+" H145z")+yn("M367 0 H410 V"+r+" H367z");case"⎟":return yn("M457 0 H583 V"+r+" H457z");case"⎢":return yn("M319 0 H403 V"+r+" H319z");case"⎥":return yn("M263 0 H347 V"+r+" H263z");case"⎪":return yn("M384 0 H504 V"+r+" H384z");case"⏐":return yn("M312 0 H355 V"+r+" H312z");case"‖":return yn("M257 0 H300 V"+r+" H257z")+yn("M478 0 H521 V"+r+" H478z");default:return""}},n4={doubleleftarrow:`M262 157
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
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:yn("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),leftbracketunder:yn("M0 0 h120 V290 H399995 v120 H0z"),leftbracketover:yn("M0 440 h120 V150 H399995 v-120 H0z"),leftmapsto:yn("M40 281 V448H0V74H40V241H400000v40z"),leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:yn("M0 50 h400000 v40H0z m0 194h40000v40H0z"),midbrace:`M200428 334
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
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:yn("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),rightbracketunder:yn("M399995 0 h-120 V290 H0 v120 H400000z"),rightbracketover:yn("M399995 440 h-120 V150 H0 v-120 H399995z"),rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},f5=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 v84 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};function p5(l){return"toText"in l}class L0{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){return this.children.map(n=>{if(p5(n))return n.toText();throw new Error("Expected MathDomNode with toText, got "+n.constructor.name)}).join("")}}var Qo={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},m5={ex:!0,em:!0,mu:!0},gd=function(n){return typeof n!="string"&&(n=n.unit),n in Qo||n in m5||n==="ex"},tn=function(n,r){var i;if(n.unit in Qo)i=Qo[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")i=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,n.unit==="ex")i=s.fontMetrics().xHeight;else if(n.unit==="em")i=s.fontMetrics().quad;else throw new U("Invalid unit: '"+n.unit+"'");s!==r&&(i*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*i,r.maxSize)},X=function(n){return+n.toFixed(4)+"em"},br=function(n){return n.filter(r=>r).join(" ")},Ru=function(n){var r="";for(var i of Object.keys(n)){var s=n[i];s!==void 0&&(r+=H3(i)+":"+s+";")}return r},yd=function(n,r,i){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=i||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},xd=function(n){var r=document.createElement(n);r.className=br(this.classes),Object.assign(r.style,this.style);for(var i of Object.keys(this.attributes))r.setAttribute(i,this.attributes[i]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r},v5=/[\s"'>/=\x00-\x1f]/,wd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Ln(br(this.classes))+'"');var i=Ru(this.style);i&&(r+=' style="'+Ln(i)+'"');for(var s of Object.keys(this.attributes)){if(v5.test(s))throw new U("Invalid attribute name '"+s+"'");r+=" "+s+'="'+Ln(this.attributes[s])+'"'}r+=">";for(var u=0;u<this.children.length;u++)r+=this.children[u].toMarkup();return r+="</"+n+">",r};class R0{constructor(n,r,i,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,this.italic=void 0,yd.call(this,n,i,s),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return xd.call(this,"span")}toMarkup(){return wd.call(this,"span")}}class wi{constructor(n,r,i,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,yd.call(this,r,s),this.children=i||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return xd.call(this,"a")}toMarkup(){return wd.call(this,"a")}}class g5{constructor(n,r,i){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=i}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");return n.src=this.src,n.alt=this.alt,n.className="mord",Object.assign(n.style,this.style),n}toMarkup(){var n='<img src="'+Ln(this.src)+'"'+(' alt="'+Ln(this.alt)+'"'),r=Ru(this.style);return r&&(n+=' style="'+Ln(r)+'"'),n+="'/>",n}}var y5={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class Jn{constructor(n,r,i,s,u,h,f,v){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=i||0,this.italic=s||0,this.skew=u||0,this.width=h||0,this.classes=f||[],this.style=v||{},this.maxFontSize=0;var g=r5(this.text.charCodeAt(0));g&&this.classes.push(g+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=y5[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;return this.italic>0&&(r=document.createElement("span"),r.style.marginRight=X(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=br(this.classes)),Object.keys(this.style).length>0&&(r=r||document.createElement("span"),Object.assign(r.style,this.style)),r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Ln(br(this.classes)),r+='"');var i="";this.italic>0&&(i+="margin-right:"+X(this.italic)+";"),i+=Ru(this.style),i&&(n=!0,r+=' style="'+Ln(i)+'"');var s=Ln(this.text);return n?(r+=">",r+=s,r+="</span>",r):s}}class Ht{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var i of Object.keys(this.attributes))r.setAttribute(i,this.attributes[i]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r of Object.keys(this.attributes))n+=" "+r+'="'+Ln(this.attributes[r])+'"';n+=">";for(var i=0;i<this.children.length;i++)n+=this.children[i].toMarkup();return n+="</svg>",n}}class Sr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",n4[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Ln(this.alternate)+'"/>':'<path d="'+Ln(n4[this.pathName])+'"/>'}}class Yo{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var i of Object.keys(this.attributes))r.setAttribute(i,this.attributes[i]);return r}toMarkup(){var n="<line";for(var r of Object.keys(this.attributes))n+=" "+r+'="'+Ln(this.attributes[r])+'"';return n+="/>",n}}function x5(l){if(l instanceof Jn)return l;throw new Error("Expected symbolNode but got "+String(l)+".")}function w5(l){if(l instanceof R0)return l;throw new Error("Expected span<HtmlDomNode> but got "+String(l)+".")}var k5=l=>l instanceof R0||l instanceof wi||l instanceof L0,Tt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Eo={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},t4={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function b5(l,n){Tt[l]=n}function Du(l,n,r){if(!Tt[n])throw new Error("Font metrics not found for font: "+n+".");var i=l.charCodeAt(0),s=Tt[n][i];if(!s&&l[0]in t4&&(i=t4[l[0]].charCodeAt(0),s=Tt[n][i]),!s&&r==="text"&&vd(i)&&(s=Tt[n][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var Ao={};function S5(l){var n;if(l>=5?n=0:l>=3?n=1:n=2,!Ao[n]){var r=Ao[n]={cssEmPerMu:Eo.quad[n]/18};for(var i of Object.keys(Eo))r[i]=Eo[i][n]}return Ao[n]}var Xe={math:{},text:{}};function d(l,n,r,i,s,u){Xe[l][s]={font:n,group:r,replace:i},u&&i&&(Xe[l][i]=Xe[l][s])}var m="math",_="text",y="main",z="ams",Je="accent-token",te="bin",Bn="close",D0="inner",pe="mathord",mn="op-token",Qn="open",Ol="punct",E="rel",Ut="spacing",C="textord";d(m,y,E,"≡","\\equiv",!0);d(m,y,E,"≺","\\prec",!0);d(m,y,E,"≻","\\succ",!0);d(m,y,E,"∼","\\sim",!0);d(m,y,E,"⊥","\\perp");d(m,y,E,"⪯","\\preceq",!0);d(m,y,E,"⪰","\\succeq",!0);d(m,y,E,"≃","\\simeq",!0);d(m,y,E,"∣","\\mid",!0);d(m,y,E,"≪","\\ll",!0);d(m,y,E,"≫","\\gg",!0);d(m,y,E,"≍","\\asymp",!0);d(m,y,E,"∥","\\parallel");d(m,y,E,"⋈","\\bowtie",!0);d(m,y,E,"⌣","\\smile",!0);d(m,y,E,"⊑","\\sqsubseteq",!0);d(m,y,E,"⊒","\\sqsupseteq",!0);d(m,y,E,"≐","\\doteq",!0);d(m,y,E,"⌢","\\frown",!0);d(m,y,E,"∋","\\ni",!0);d(m,y,E,"∝","\\propto",!0);d(m,y,E,"⊢","\\vdash",!0);d(m,y,E,"⊣","\\dashv",!0);d(m,y,E,"∋","\\owns");d(m,y,Ol,".","\\ldotp");d(m,y,Ol,"⋅","\\cdotp");d(m,y,Ol,"⋅","·");d(_,y,C,"⋅","·");d(m,y,C,"#","\\#");d(_,y,C,"#","\\#");d(m,y,C,"&","\\&");d(_,y,C,"&","\\&");d(m,y,C,"ℵ","\\aleph",!0);d(m,y,C,"∀","\\forall",!0);d(m,y,C,"ℏ","\\hbar",!0);d(m,y,C,"∃","\\exists",!0);d(m,y,C,"∇","\\nabla",!0);d(m,y,C,"♭","\\flat",!0);d(m,y,C,"ℓ","\\ell",!0);d(m,y,C,"♮","\\natural",!0);d(m,y,C,"♣","\\clubsuit",!0);d(m,y,C,"℘","\\wp",!0);d(m,y,C,"♯","\\sharp",!0);d(m,y,C,"♢","\\diamondsuit",!0);d(m,y,C,"ℜ","\\Re",!0);d(m,y,C,"♡","\\heartsuit",!0);d(m,y,C,"ℑ","\\Im",!0);d(m,y,C,"♠","\\spadesuit",!0);d(m,y,C,"§","\\S",!0);d(_,y,C,"§","\\S");d(m,y,C,"¶","\\P",!0);d(_,y,C,"¶","\\P");d(m,y,C,"†","\\dag");d(_,y,C,"†","\\dag");d(_,y,C,"†","\\textdagger");d(m,y,C,"‡","\\ddag");d(_,y,C,"‡","\\ddag");d(_,y,C,"‡","\\textdaggerdbl");d(m,y,Bn,"⎱","\\rmoustache",!0);d(m,y,Qn,"⎰","\\lmoustache",!0);d(m,y,Bn,"⟯","\\rgroup",!0);d(m,y,Qn,"⟮","\\lgroup",!0);d(m,y,te,"∓","\\mp",!0);d(m,y,te,"⊖","\\ominus",!0);d(m,y,te,"⊎","\\uplus",!0);d(m,y,te,"⊓","\\sqcap",!0);d(m,y,te,"∗","\\ast");d(m,y,te,"⊔","\\sqcup",!0);d(m,y,te,"◯","\\bigcirc",!0);d(m,y,te,"∙","\\bullet",!0);d(m,y,te,"‡","\\ddagger");d(m,y,te,"≀","\\wr",!0);d(m,y,te,"⨿","\\amalg");d(m,y,te,"&","\\And");d(m,y,E,"⟵","\\longleftarrow",!0);d(m,y,E,"⇐","\\Leftarrow",!0);d(m,y,E,"⟸","\\Longleftarrow",!0);d(m,y,E,"⟶","\\longrightarrow",!0);d(m,y,E,"⇒","\\Rightarrow",!0);d(m,y,E,"⟹","\\Longrightarrow",!0);d(m,y,E,"↔","\\leftrightarrow",!0);d(m,y,E,"⟷","\\longleftrightarrow",!0);d(m,y,E,"⇔","\\Leftrightarrow",!0);d(m,y,E,"⟺","\\Longleftrightarrow",!0);d(m,y,E,"↦","\\mapsto",!0);d(m,y,E,"⟼","\\longmapsto",!0);d(m,y,E,"↗","\\nearrow",!0);d(m,y,E,"↩","\\hookleftarrow",!0);d(m,y,E,"↪","\\hookrightarrow",!0);d(m,y,E,"↘","\\searrow",!0);d(m,y,E,"↼","\\leftharpoonup",!0);d(m,y,E,"⇀","\\rightharpoonup",!0);d(m,y,E,"↙","\\swarrow",!0);d(m,y,E,"↽","\\leftharpoondown",!0);d(m,y,E,"⇁","\\rightharpoondown",!0);d(m,y,E,"↖","\\nwarrow",!0);d(m,y,E,"⇌","\\rightleftharpoons",!0);d(m,z,E,"≮","\\nless",!0);d(m,z,E,"","\\@nleqslant");d(m,z,E,"","\\@nleqq");d(m,z,E,"⪇","\\lneq",!0);d(m,z,E,"≨","\\lneqq",!0);d(m,z,E,"","\\@lvertneqq");d(m,z,E,"⋦","\\lnsim",!0);d(m,z,E,"⪉","\\lnapprox",!0);d(m,z,E,"⊀","\\nprec",!0);d(m,z,E,"⋠","\\npreceq",!0);d(m,z,E,"⋨","\\precnsim",!0);d(m,z,E,"⪹","\\precnapprox",!0);d(m,z,E,"≁","\\nsim",!0);d(m,z,E,"","\\@nshortmid");d(m,z,E,"∤","\\nmid",!0);d(m,z,E,"⊬","\\nvdash",!0);d(m,z,E,"⊭","\\nvDash",!0);d(m,z,E,"⋪","\\ntriangleleft");d(m,z,E,"⋬","\\ntrianglelefteq",!0);d(m,z,E,"⊊","\\subsetneq",!0);d(m,z,E,"","\\@varsubsetneq");d(m,z,E,"⫋","\\subsetneqq",!0);d(m,z,E,"","\\@varsubsetneqq");d(m,z,E,"≯","\\ngtr",!0);d(m,z,E,"","\\@ngeqslant");d(m,z,E,"","\\@ngeqq");d(m,z,E,"⪈","\\gneq",!0);d(m,z,E,"≩","\\gneqq",!0);d(m,z,E,"","\\@gvertneqq");d(m,z,E,"⋧","\\gnsim",!0);d(m,z,E,"⪊","\\gnapprox",!0);d(m,z,E,"⊁","\\nsucc",!0);d(m,z,E,"⋡","\\nsucceq",!0);d(m,z,E,"⋩","\\succnsim",!0);d(m,z,E,"⪺","\\succnapprox",!0);d(m,z,E,"≆","\\ncong",!0);d(m,z,E,"","\\@nshortparallel");d(m,z,E,"∦","\\nparallel",!0);d(m,z,E,"⊯","\\nVDash",!0);d(m,z,E,"⋫","\\ntriangleright");d(m,z,E,"⋭","\\ntrianglerighteq",!0);d(m,z,E,"","\\@nsupseteqq");d(m,z,E,"⊋","\\supsetneq",!0);d(m,z,E,"","\\@varsupsetneq");d(m,z,E,"⫌","\\supsetneqq",!0);d(m,z,E,"","\\@varsupsetneqq");d(m,z,E,"⊮","\\nVdash",!0);d(m,z,E,"⪵","\\precneqq",!0);d(m,z,E,"⪶","\\succneqq",!0);d(m,z,E,"","\\@nsubseteqq");d(m,z,te,"⊴","\\unlhd");d(m,z,te,"⊵","\\unrhd");d(m,z,E,"↚","\\nleftarrow",!0);d(m,z,E,"↛","\\nrightarrow",!0);d(m,z,E,"⇍","\\nLeftarrow",!0);d(m,z,E,"⇏","\\nRightarrow",!0);d(m,z,E,"↮","\\nleftrightarrow",!0);d(m,z,E,"⇎","\\nLeftrightarrow",!0);d(m,z,E,"△","\\vartriangle");d(m,z,C,"ℏ","\\hslash");d(m,z,C,"▽","\\triangledown");d(m,z,C,"◊","\\lozenge");d(m,z,C,"Ⓢ","\\circledS");d(m,z,C,"®","\\circledR");d(_,z,C,"®","\\circledR");d(m,z,C,"∡","\\measuredangle",!0);d(m,z,C,"∄","\\nexists");d(m,z,C,"℧","\\mho");d(m,z,C,"Ⅎ","\\Finv",!0);d(m,z,C,"⅁","\\Game",!0);d(m,z,C,"‵","\\backprime");d(m,z,C,"▲","\\blacktriangle");d(m,z,C,"▼","\\blacktriangledown");d(m,z,C,"■","\\blacksquare");d(m,z,C,"⧫","\\blacklozenge");d(m,z,C,"★","\\bigstar");d(m,z,C,"∢","\\sphericalangle",!0);d(m,z,C,"∁","\\complement",!0);d(m,z,C,"ð","\\eth",!0);d(_,y,C,"ð","ð");d(m,z,C,"╱","\\diagup");d(m,z,C,"╲","\\diagdown");d(m,z,C,"□","\\square");d(m,z,C,"□","\\Box");d(m,z,C,"◊","\\Diamond");d(m,z,C,"¥","\\yen",!0);d(_,z,C,"¥","\\yen",!0);d(m,z,C,"✓","\\checkmark",!0);d(_,z,C,"✓","\\checkmark");d(m,z,C,"ℶ","\\beth",!0);d(m,z,C,"ℸ","\\daleth",!0);d(m,z,C,"ℷ","\\gimel",!0);d(m,z,C,"ϝ","\\digamma",!0);d(m,z,C,"ϰ","\\varkappa");d(m,z,Qn,"┌","\\@ulcorner",!0);d(m,z,Bn,"┐","\\@urcorner",!0);d(m,z,Qn,"└","\\@llcorner",!0);d(m,z,Bn,"┘","\\@lrcorner",!0);d(m,z,E,"≦","\\leqq",!0);d(m,z,E,"⩽","\\leqslant",!0);d(m,z,E,"⪕","\\eqslantless",!0);d(m,z,E,"≲","\\lesssim",!0);d(m,z,E,"⪅","\\lessapprox",!0);d(m,z,E,"≊","\\approxeq",!0);d(m,z,te,"⋖","\\lessdot");d(m,z,E,"⋘","\\lll",!0);d(m,z,E,"≶","\\lessgtr",!0);d(m,z,E,"⋚","\\lesseqgtr",!0);d(m,z,E,"⪋","\\lesseqqgtr",!0);d(m,z,E,"≑","\\doteqdot");d(m,z,E,"≓","\\risingdotseq",!0);d(m,z,E,"≒","\\fallingdotseq",!0);d(m,z,E,"∽","\\backsim",!0);d(m,z,E,"⋍","\\backsimeq",!0);d(m,z,E,"⫅","\\subseteqq",!0);d(m,z,E,"⋐","\\Subset",!0);d(m,z,E,"⊏","\\sqsubset",!0);d(m,z,E,"≼","\\preccurlyeq",!0);d(m,z,E,"⋞","\\curlyeqprec",!0);d(m,z,E,"≾","\\precsim",!0);d(m,z,E,"⪷","\\precapprox",!0);d(m,z,E,"⊲","\\vartriangleleft");d(m,z,E,"⊴","\\trianglelefteq");d(m,z,E,"⊨","\\vDash",!0);d(m,z,E,"⊪","\\Vvdash",!0);d(m,z,E,"⌣","\\smallsmile");d(m,z,E,"⌢","\\smallfrown");d(m,z,E,"≏","\\bumpeq",!0);d(m,z,E,"≎","\\Bumpeq",!0);d(m,z,E,"≧","\\geqq",!0);d(m,z,E,"⩾","\\geqslant",!0);d(m,z,E,"⪖","\\eqslantgtr",!0);d(m,z,E,"≳","\\gtrsim",!0);d(m,z,E,"⪆","\\gtrapprox",!0);d(m,z,te,"⋗","\\gtrdot");d(m,z,E,"⋙","\\ggg",!0);d(m,z,E,"≷","\\gtrless",!0);d(m,z,E,"⋛","\\gtreqless",!0);d(m,z,E,"⪌","\\gtreqqless",!0);d(m,z,E,"≖","\\eqcirc",!0);d(m,z,E,"≗","\\circeq",!0);d(m,z,E,"≜","\\triangleq",!0);d(m,z,E,"∼","\\thicksim");d(m,z,E,"≈","\\thickapprox");d(m,z,E,"⫆","\\supseteqq",!0);d(m,z,E,"⋑","\\Supset",!0);d(m,z,E,"⊐","\\sqsupset",!0);d(m,z,E,"≽","\\succcurlyeq",!0);d(m,z,E,"⋟","\\curlyeqsucc",!0);d(m,z,E,"≿","\\succsim",!0);d(m,z,E,"⪸","\\succapprox",!0);d(m,z,E,"⊳","\\vartriangleright");d(m,z,E,"⊵","\\trianglerighteq");d(m,z,E,"⊩","\\Vdash",!0);d(m,z,E,"∣","\\shortmid");d(m,z,E,"∥","\\shortparallel");d(m,z,E,"≬","\\between",!0);d(m,z,E,"⋔","\\pitchfork",!0);d(m,z,E,"∝","\\varpropto");d(m,z,E,"◀","\\blacktriangleleft");d(m,z,E,"∴","\\therefore",!0);d(m,z,E,"∍","\\backepsilon");d(m,z,E,"▶","\\blacktriangleright");d(m,z,E,"∵","\\because",!0);d(m,z,E,"⋘","\\llless");d(m,z,E,"⋙","\\gggtr");d(m,z,te,"⊲","\\lhd");d(m,z,te,"⊳","\\rhd");d(m,z,E,"≂","\\eqsim",!0);d(m,y,E,"⋈","\\Join");d(m,z,E,"≑","\\Doteq",!0);d(m,z,te,"∔","\\dotplus",!0);d(m,z,te,"∖","\\smallsetminus");d(m,z,te,"⋒","\\Cap",!0);d(m,z,te,"⋓","\\Cup",!0);d(m,z,te,"⩞","\\doublebarwedge",!0);d(m,z,te,"⊟","\\boxminus",!0);d(m,z,te,"⊞","\\boxplus",!0);d(m,z,te,"⋇","\\divideontimes",!0);d(m,z,te,"⋉","\\ltimes",!0);d(m,z,te,"⋊","\\rtimes",!0);d(m,z,te,"⋋","\\leftthreetimes",!0);d(m,z,te,"⋌","\\rightthreetimes",!0);d(m,z,te,"⋏","\\curlywedge",!0);d(m,z,te,"⋎","\\curlyvee",!0);d(m,z,te,"⊝","\\circleddash",!0);d(m,z,te,"⊛","\\circledast",!0);d(m,z,te,"⋅","\\centerdot");d(m,z,te,"⊺","\\intercal",!0);d(m,z,te,"⋒","\\doublecap");d(m,z,te,"⋓","\\doublecup");d(m,z,te,"⊠","\\boxtimes",!0);d(m,z,E,"⇢","\\dashrightarrow",!0);d(m,z,E,"⇠","\\dashleftarrow",!0);d(m,z,E,"⇇","\\leftleftarrows",!0);d(m,z,E,"⇆","\\leftrightarrows",!0);d(m,z,E,"⇚","\\Lleftarrow",!0);d(m,z,E,"↞","\\twoheadleftarrow",!0);d(m,z,E,"↢","\\leftarrowtail",!0);d(m,z,E,"↫","\\looparrowleft",!0);d(m,z,E,"⇋","\\leftrightharpoons",!0);d(m,z,E,"↶","\\curvearrowleft",!0);d(m,z,E,"↺","\\circlearrowleft",!0);d(m,z,E,"↰","\\Lsh",!0);d(m,z,E,"⇈","\\upuparrows",!0);d(m,z,E,"↿","\\upharpoonleft",!0);d(m,z,E,"⇃","\\downharpoonleft",!0);d(m,y,E,"⊶","\\origof",!0);d(m,y,E,"⊷","\\imageof",!0);d(m,z,E,"⊸","\\multimap",!0);d(m,z,E,"↭","\\leftrightsquigarrow",!0);d(m,z,E,"⇉","\\rightrightarrows",!0);d(m,z,E,"⇄","\\rightleftarrows",!0);d(m,z,E,"↠","\\twoheadrightarrow",!0);d(m,z,E,"↣","\\rightarrowtail",!0);d(m,z,E,"↬","\\looparrowright",!0);d(m,z,E,"↷","\\curvearrowright",!0);d(m,z,E,"↻","\\circlearrowright",!0);d(m,z,E,"↱","\\Rsh",!0);d(m,z,E,"⇊","\\downdownarrows",!0);d(m,z,E,"↾","\\upharpoonright",!0);d(m,z,E,"⇂","\\downharpoonright",!0);d(m,z,E,"⇝","\\rightsquigarrow",!0);d(m,z,E,"⇝","\\leadsto");d(m,z,E,"⇛","\\Rrightarrow",!0);d(m,z,E,"↾","\\restriction");d(m,y,C,"‘","`");d(m,y,C,"$","\\$");d(_,y,C,"$","\\$");d(_,y,C,"$","\\textdollar");d(m,y,C,"%","\\%");d(_,y,C,"%","\\%");d(m,y,C,"_","\\_");d(_,y,C,"_","\\_");d(_,y,C,"_","\\textunderscore");d(m,y,C,"∠","\\angle",!0);d(m,y,C,"∞","\\infty",!0);d(m,y,C,"′","\\prime");d(m,y,C,"△","\\triangle");d(m,y,C,"Γ","\\Gamma",!0);d(m,y,C,"Δ","\\Delta",!0);d(m,y,C,"Θ","\\Theta",!0);d(m,y,C,"Λ","\\Lambda",!0);d(m,y,C,"Ξ","\\Xi",!0);d(m,y,C,"Π","\\Pi",!0);d(m,y,C,"Σ","\\Sigma",!0);d(m,y,C,"Υ","\\Upsilon",!0);d(m,y,C,"Φ","\\Phi",!0);d(m,y,C,"Ψ","\\Psi",!0);d(m,y,C,"Ω","\\Omega",!0);d(m,y,C,"A","Α");d(m,y,C,"B","Β");d(m,y,C,"E","Ε");d(m,y,C,"Z","Ζ");d(m,y,C,"H","Η");d(m,y,C,"I","Ι");d(m,y,C,"K","Κ");d(m,y,C,"M","Μ");d(m,y,C,"N","Ν");d(m,y,C,"O","Ο");d(m,y,C,"P","Ρ");d(m,y,C,"T","Τ");d(m,y,C,"X","Χ");d(m,y,C,"¬","\\neg",!0);d(m,y,C,"¬","\\lnot");d(m,y,C,"⊤","\\top");d(m,y,C,"⊥","\\bot");d(m,y,C,"∅","\\emptyset");d(m,z,C,"∅","\\varnothing");d(m,y,pe,"α","\\alpha",!0);d(m,y,pe,"β","\\beta",!0);d(m,y,pe,"γ","\\gamma",!0);d(m,y,pe,"δ","\\delta",!0);d(m,y,pe,"ϵ","\\epsilon",!0);d(m,y,pe,"ζ","\\zeta",!0);d(m,y,pe,"η","\\eta",!0);d(m,y,pe,"θ","\\theta",!0);d(m,y,pe,"ι","\\iota",!0);d(m,y,pe,"κ","\\kappa",!0);d(m,y,pe,"λ","\\lambda",!0);d(m,y,pe,"μ","\\mu",!0);d(m,y,pe,"ν","\\nu",!0);d(m,y,pe,"ξ","\\xi",!0);d(m,y,pe,"ο","\\omicron",!0);d(m,y,pe,"π","\\pi",!0);d(m,y,pe,"ρ","\\rho",!0);d(m,y,pe,"σ","\\sigma",!0);d(m,y,pe,"τ","\\tau",!0);d(m,y,pe,"υ","\\upsilon",!0);d(m,y,pe,"ϕ","\\phi",!0);d(m,y,pe,"χ","\\chi",!0);d(m,y,pe,"ψ","\\psi",!0);d(m,y,pe,"ω","\\omega",!0);d(m,y,pe,"ε","\\varepsilon",!0);d(m,y,pe,"ϑ","\\vartheta",!0);d(m,y,pe,"ϖ","\\varpi",!0);d(m,y,pe,"ϱ","\\varrho",!0);d(m,y,pe,"ς","\\varsigma",!0);d(m,y,pe,"φ","\\varphi",!0);d(m,y,te,"∗","*",!0);d(m,y,te,"+","+");d(m,y,te,"−","-",!0);d(m,y,te,"⋅","\\cdot",!0);d(m,y,te,"∘","\\circ",!0);d(m,y,te,"÷","\\div",!0);d(m,y,te,"±","\\pm",!0);d(m,y,te,"×","\\times",!0);d(m,y,te,"∩","\\cap",!0);d(m,y,te,"∪","\\cup",!0);d(m,y,te,"∖","\\setminus",!0);d(m,y,te,"∧","\\land");d(m,y,te,"∨","\\lor");d(m,y,te,"∧","\\wedge",!0);d(m,y,te,"∨","\\vee",!0);d(m,y,C,"√","\\surd");d(m,y,Qn,"⟨","\\langle",!0);d(m,y,Qn,"∣","\\lvert");d(m,y,Qn,"∥","\\lVert");d(m,y,Bn,"?","?");d(m,y,Bn,"!","!");d(m,y,Bn,"⟩","\\rangle",!0);d(m,y,Bn,"∣","\\rvert");d(m,y,Bn,"∥","\\rVert");d(m,y,E,"=","=");d(m,y,E,":",":");d(m,y,E,"≈","\\approx",!0);d(m,y,E,"≅","\\cong",!0);d(m,y,E,"≥","\\ge");d(m,y,E,"≥","\\geq",!0);d(m,y,E,"←","\\gets");d(m,y,E,">","\\gt",!0);d(m,y,E,"∈","\\in",!0);d(m,y,E,"","\\@not");d(m,y,E,"⊂","\\subset",!0);d(m,y,E,"⊃","\\supset",!0);d(m,y,E,"⊆","\\subseteq",!0);d(m,y,E,"⊇","\\supseteq",!0);d(m,z,E,"⊈","\\nsubseteq",!0);d(m,z,E,"⊉","\\nsupseteq",!0);d(m,y,E,"⊨","\\models");d(m,y,E,"←","\\leftarrow",!0);d(m,y,E,"≤","\\le");d(m,y,E,"≤","\\leq",!0);d(m,y,E,"<","\\lt",!0);d(m,y,E,"→","\\rightarrow",!0);d(m,y,E,"→","\\to");d(m,z,E,"≱","\\ngeq",!0);d(m,z,E,"≰","\\nleq",!0);d(m,y,Ut," ","\\ ");d(m,y,Ut," ","\\space");d(m,y,Ut," ","\\nobreakspace");d(_,y,Ut," ","\\ ");d(_,y,Ut," "," ");d(_,y,Ut," ","\\space");d(_,y,Ut," ","\\nobreakspace");d(m,y,Ut,"","\\nobreak");d(m,y,Ut,"","\\allowbreak");d(m,y,Ol,",",",");d(m,y,Ol,";",";");d(m,z,te,"⊼","\\barwedge",!0);d(m,z,te,"⊻","\\veebar",!0);d(m,y,te,"⊙","\\odot",!0);d(m,y,te,"⊕","\\oplus",!0);d(m,y,te,"⊗","\\otimes",!0);d(m,y,C,"∂","\\partial",!0);d(m,y,te,"⊘","\\oslash",!0);d(m,z,te,"⊚","\\circledcirc",!0);d(m,z,te,"⊡","\\boxdot",!0);d(m,y,te,"△","\\bigtriangleup");d(m,y,te,"▽","\\bigtriangledown");d(m,y,te,"†","\\dagger");d(m,y,te,"⋄","\\diamond");d(m,y,te,"⋆","\\star");d(m,y,te,"◃","\\triangleleft");d(m,y,te,"▹","\\triangleright");d(m,y,Qn,"{","\\{");d(_,y,C,"{","\\{");d(_,y,C,"{","\\textbraceleft");d(m,y,Bn,"}","\\}");d(_,y,C,"}","\\}");d(_,y,C,"}","\\textbraceright");d(m,y,Qn,"{","\\lbrace");d(m,y,Bn,"}","\\rbrace");d(m,y,Qn,"[","\\lbrack",!0);d(_,y,C,"[","\\lbrack",!0);d(m,y,Bn,"]","\\rbrack",!0);d(_,y,C,"]","\\rbrack",!0);d(m,y,Qn,"(","\\lparen",!0);d(m,y,Bn,")","\\rparen",!0);d(_,y,C,"<","\\textless",!0);d(_,y,C,">","\\textgreater",!0);d(m,y,Qn,"⌊","\\lfloor",!0);d(m,y,Bn,"⌋","\\rfloor",!0);d(m,y,Qn,"⌈","\\lceil",!0);d(m,y,Bn,"⌉","\\rceil",!0);d(m,y,C,"\\","\\backslash");d(m,y,C,"∣","|");d(m,y,C,"∣","\\vert");d(_,y,C,"|","\\textbar",!0);d(m,y,C,"∥","\\|");d(m,y,C,"∥","\\Vert");d(_,y,C,"∥","\\textbardbl");d(_,y,C,"~","\\textasciitilde");d(_,y,C,"\\","\\textbackslash");d(_,y,C,"^","\\textasciicircum");d(m,y,E,"↑","\\uparrow",!0);d(m,y,E,"⇑","\\Uparrow",!0);d(m,y,E,"↓","\\downarrow",!0);d(m,y,E,"⇓","\\Downarrow",!0);d(m,y,E,"↕","\\updownarrow",!0);d(m,y,E,"⇕","\\Updownarrow",!0);d(m,y,mn,"∐","\\coprod");d(m,y,mn,"⋁","\\bigvee");d(m,y,mn,"⋀","\\bigwedge");d(m,y,mn,"⨄","\\biguplus");d(m,y,mn,"⋂","\\bigcap");d(m,y,mn,"⋃","\\bigcup");d(m,y,mn,"∫","\\int");d(m,y,mn,"∫","\\intop");d(m,y,mn,"∬","\\iint");d(m,y,mn,"∭","\\iiint");d(m,y,mn,"∏","\\prod");d(m,y,mn,"∑","\\sum");d(m,y,mn,"⨂","\\bigotimes");d(m,y,mn,"⨁","\\bigoplus");d(m,y,mn,"⨀","\\bigodot");d(m,y,mn,"∮","\\oint");d(m,y,mn,"∯","\\oiint");d(m,y,mn,"∰","\\oiiint");d(m,y,mn,"⨆","\\bigsqcup");d(m,y,mn,"∫","\\smallint");d(_,y,D0,"…","\\textellipsis");d(m,y,D0,"…","\\mathellipsis");d(_,y,D0,"…","\\ldots",!0);d(m,y,D0,"…","\\ldots",!0);d(m,y,D0,"⋯","\\@cdots",!0);d(m,y,D0,"⋱","\\ddots",!0);d(m,y,C,"⋮","\\varvdots");d(_,y,C,"⋮","\\varvdots");d(m,y,Je,"ˊ","\\acute");d(m,y,Je,"ˋ","\\grave");d(m,y,Je,"¨","\\ddot");d(m,y,Je,"~","\\tilde");d(m,y,Je,"ˉ","\\bar");d(m,y,Je,"˘","\\breve");d(m,y,Je,"ˇ","\\check");d(m,y,Je,"^","\\hat");d(m,y,Je,"⃗","\\vec");d(m,y,Je,"˙","\\dot");d(m,y,Je,"˚","\\mathring");d(m,y,pe,"","\\@imath");d(m,y,pe,"","\\@jmath");d(m,y,C,"ı","ı");d(m,y,C,"ȷ","ȷ");d(_,y,C,"ı","\\i",!0);d(_,y,C,"ȷ","\\j",!0);d(_,y,C,"ß","\\ss",!0);d(_,y,C,"æ","\\ae",!0);d(_,y,C,"œ","\\oe",!0);d(_,y,C,"ø","\\o",!0);d(_,y,C,"Æ","\\AE",!0);d(_,y,C,"Œ","\\OE",!0);d(_,y,C,"Ø","\\O",!0);d(_,y,Je,"ˊ","\\'");d(_,y,Je,"ˋ","\\`");d(_,y,Je,"ˆ","\\^");d(_,y,Je,"˜","\\~");d(_,y,Je,"ˉ","\\=");d(_,y,Je,"˘","\\u");d(_,y,Je,"˙","\\.");d(_,y,Je,"¸","\\c");d(_,y,Je,"˚","\\r");d(_,y,Je,"ˇ","\\v");d(_,y,Je,"¨",'\\"');d(_,y,Je,"˝","\\H");d(_,y,Je,"◯","\\textcircled");var kd={"--":!0,"---":!0,"``":!0,"''":!0};d(_,y,C,"–","--",!0);d(_,y,C,"–","\\textendash");d(_,y,C,"—","---",!0);d(_,y,C,"—","\\textemdash");d(_,y,C,"‘","`",!0);d(_,y,C,"‘","\\textquoteleft");d(_,y,C,"’","'",!0);d(_,y,C,"’","\\textquoteright");d(_,y,C,"“","``",!0);d(_,y,C,"“","\\textquotedblleft");d(_,y,C,"”","''",!0);d(_,y,C,"”","\\textquotedblright");d(m,y,C,"°","\\degree",!0);d(_,y,C,"°","\\degree");d(_,y,C,"°","\\textdegree",!0);d(m,y,C,"£","\\pounds");d(m,y,C,"£","\\mathsterling",!0);d(_,y,C,"£","\\pounds");d(_,y,C,"£","\\textsterling",!0);d(m,z,C,"✠","\\maltese");d(_,z,C,"✠","\\maltese");var r4='0123456789/@."';for(var Mo=0;Mo<r4.length;Mo++){var l4=r4.charAt(Mo);d(m,y,C,l4,l4)}var a4='0123456789!@*()-=+";:?/.,';for(var Co=0;Co<a4.length;Co++){var i4=a4.charAt(Co);d(_,y,C,i4,i4)}var fi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Lo=0;Lo<fi.length;Lo++){var Qa=fi.charAt(Lo);d(m,y,pe,Qa,Qa),d(_,y,C,Qa,Qa)}d(m,z,C,"C","ℂ");d(_,z,C,"C","ℂ");d(m,z,C,"H","ℍ");d(_,z,C,"H","ℍ");d(m,z,C,"N","ℕ");d(_,z,C,"N","ℕ");d(m,z,C,"P","ℙ");d(_,z,C,"P","ℙ");d(m,z,C,"Q","ℚ");d(_,z,C,"Q","ℚ");d(m,z,C,"R","ℝ");d(_,z,C,"R","ℝ");d(m,z,C,"Z","ℤ");d(_,z,C,"Z","ℤ");d(m,y,pe,"h","ℎ");d(_,y,pe,"h","ℎ");var ye;for(var Fn=0;Fn<fi.length;Fn++){var sn=fi.charAt(Fn);ye=String.fromCharCode(55349,56320+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56372+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56424+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56580+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56684+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56736+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56788+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56840+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56944+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),Fn<26&&(ye=String.fromCharCode(55349,56632+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye),ye=String.fromCharCode(55349,56476+Fn),d(m,y,pe,sn,ye),d(_,y,C,sn,ye))}ye="𝕜";d(m,y,pe,"k",ye);d(_,y,C,"k",ye);for(var Hr=0;Hr<10;Hr++){var vr=Hr.toString();ye=String.fromCharCode(55349,57294+Hr),d(m,y,pe,vr,ye),d(_,y,C,vr,ye),ye=String.fromCharCode(55349,57314+Hr),d(m,y,pe,vr,ye),d(_,y,C,vr,ye),ye=String.fromCharCode(55349,57324+Hr),d(m,y,pe,vr,ye),d(_,y,C,vr,ye),ye=String.fromCharCode(55349,57334+Hr),d(m,y,pe,vr,ye),d(_,y,C,vr,ye)}var Zo="ÐÞþ";for(var Ro=0;Ro<Zo.length;Ro++){var Ya=Zo.charAt(Ro);d(m,y,pe,Ya,Ya),d(_,y,C,Ya,Ya)}var eu={mathClass:"mathbf",textClass:"textbf",font:"Main-Bold"},s4={mathClass:"mathnormal",textClass:"textit",font:"Math-Italic"},o4={mathClass:"boldsymbol",textClass:"boldsymbol",font:"Main-BoldItalic"},z5={mathClass:"mathscr",textClass:"textscr",font:"Script-Regular"},Ur={mathClass:"",textClass:"",font:""},u4={mathClass:"mathfrak",textClass:"textfrak",font:"Fraktur-Regular"},c4={mathClass:"mathbb",textClass:"textbb",font:"AMS-Regular"},h4={mathClass:"mathboldfrak",textClass:"textboldfrak",font:"Fraktur-Regular"},nu={mathClass:"mathsf",textClass:"textsf",font:"SansSerif-Regular"},tu={mathClass:"mathboldsf",textClass:"textboldsf",font:"SansSerif-Bold"},d4={mathClass:"mathitsf",textClass:"textitsf",font:"SansSerif-Italic"},ru={mathClass:"mathtt",textClass:"texttt",font:"Typewriter-Regular"},f4=[eu,eu,s4,s4,o4,o4,z5,Ur,Ur,Ur,u4,u4,c4,c4,h4,h4,nu,nu,tu,tu,d4,d4,Ur,Ur,ru,ru],T5=[eu,Ur,nu,tu,ru],E5=l=>{var n=l.charCodeAt(0),r=l.charCodeAt(1),i=(n-55296)*1024+(r-56320)+65536;if(119808<=i&&i<120484){var s=Math.floor((i-119808)/26);return f4[s]}else if(120782<=i&&i<=120831){var u=Math.floor((i-120782)/10);return T5[u]}else{if(i===120485||i===120486)return f4[0];if(120486<i&&i<120782)return Ur;throw new U("Unsupported character: "+l)}},ki=function(n,r,i){if(Xe[i][n]){var s=Xe[i][n].replace;s&&(n=s)}return{value:n,metrics:Du(n,r,i)}},Nn=function(n,r,i,s,u){var h=ki(n,r,i),f=h.metrics;n=h.value;var v;if(f){var g=f.italic;(i==="text"||s&&s.font==="mathit")&&(g=0),v=new Jn(n,f.height,f.depth,g,f.skew,f.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+i+"'")),v=new Jn(n,0,0,0,0,0,u);if(s){v.maxFontSize=s.sizeMultiplier,s.style.isTight()&&v.classes.push("mtight");var w=s.getColor();w&&(v.style.color=w)}return v},Fu=function(n,r,i,s){return s===void 0&&(s=[]),i.font==="boldsymbol"&&ki(n,"Main-Bold",r).metrics?Nn(n,"Main-Bold",r,i,s.concat(["mathbf"])):n==="\\"||Xe[r][n].font==="main"?Nn(n,"Main-Regular",r,i,s):Nn(n,"AMS-Regular",r,i,s.concat(["amsrm"]))},A5=function(n,r,i){return i!=="textord"&&ki(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},bi=function(n,r){var i=n.type==="mathord"?"mathord":"textord",s=n.mode,u=n.text,h=["mord"],f=r.font,v=r.fontFamily,g=r.fontWeight,w=r.fontShape,b=s==="math"||s==="text"&&!!f,T=b?f:v,A="",I="";if(u.charCodeAt(0)===55349){var F=E5(u);A=F.font,I=F[s+"Class"]}if(A)return Nn(u,A,s,r,h.concat(I));if(T){var D,q;if(T==="boldsymbol"){var $=A5(u,s,i);D=$.fontName,q=[$.fontClass]}else b?(D=lu[f].fontName,q=[f]):(D=Za(v,g,w),q=[v,g,w]);if(ki(u,D,s).metrics)return Nn(u,D,s,r,h.concat(q));if(Object.prototype.hasOwnProperty.call(kd,u)&&D.slice(0,10)==="Typewriter"){for(var Q=[],re=0;re<u.length;re++)Q.push(Nn(u[re],D,s,r,h.concat(q)));return Gt(Q)}}if(i==="mathord")return Nn(u,"Math-Italic",s,r,h.concat(["mathnormal"]));if(i==="textord"){var ue=Xe[s][u]&&Xe[s][u].font;if(ue==="ams"){var ce=Za("amsrm",g,w);return Nn(u,ce,s,r,h.concat("amsrm",g,w))}else if(ue==="main"||!ue){var me=Za("textrm",g,w);return Nn(u,me,s,r,h.concat(g,w))}else{var ge=Za(ue,g,w);return Nn(u,ge,s,r,h.concat(ge,g,w))}}else throw new Error("unexpected type: "+i+" in makeOrd")},M5=(l,n)=>{if(br(l.classes)!==br(n.classes)||l.skew!==n.skew||l.maxFontSize!==n.maxFontSize||l.italic!==0&&l.hasClass("mathnormal"))return!1;if(l.classes.length===1){var r=l.classes[0];if(r==="mbin"||r==="mord")return!1}for(var i of Object.keys(l.style))if(l.style[i]!==n.style[i])return!1;for(var s of Object.keys(n.style))if(l.style[s]!==n.style[s])return!1;return!0},bd=l=>{for(var n=0;n<l.length-1;n++){var r=l[n],i=l[n+1];r instanceof Jn&&i instanceof Jn&&M5(r,i)&&(r.text+=i.text,r.height=Math.max(r.height,i.height),r.depth=Math.max(r.depth,i.depth),r.italic=i.italic,l.splice(n+1,1),n--)}return l},Nu=function(n){for(var r=0,i=0,s=0,u=0;u<n.children.length;u++){var h=n.children[u];h.height>r&&(r=h.height),h.depth>i&&(i=h.depth),h.maxFontSize>s&&(s=h.maxFontSize)}n.height=r,n.depth=i,n.maxFontSize=s},H=function(n,r,i,s){var u=new R0(n,r,i,s);return Nu(u),u},zr=(l,n,r,i)=>new R0(l,n,r,i),E0=function(n,r,i){var s=H([n],[],r);return s.height=Math.max(i||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=X(s.height),s.maxFontSize=1,s},C5=function(n,r,i,s){var u=new wi(n,r,i,s);return Nu(u),u},Gt=function(n){var r=new L0(n);return Nu(r),r},A0=function(n,r){return n instanceof L0?H([],[n],r):n},L5=function(n){if(n.positionType==="individualShift"){for(var r=n.children,i=[r[0]],s=-r[0].shift-r[0].elem.depth,u=s,h=1;h<r.length;h++){var f=-r[h].shift-u-r[h].elem.depth,v=f-(r[h-1].elem.height+r[h-1].elem.depth);u=u+f,i.push({type:"kern",size:v}),i.push(r[h])}return{children:i,depth:s}}var g;if(n.positionType==="top"){for(var w=n.positionData,b=0;b<n.children.length;b++){var T=n.children[b];w-=T.type==="kern"?T.size:T.elem.height+T.elem.depth}g=w}else if(n.positionType==="bottom")g=-n.positionData;else{var A=n.children[0];if(A.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")g=-A.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")g=-A.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:g}},Be=function(n,r){for(var i=L5(n),s=i.children,u=i.depth,h=0,f=0;f<s.length;f++){var v=s[f];if(v.type==="elem"){var g=v.elem;h=Math.max(h,g.maxFontSize,g.height)}}h+=2;var w=H(["pstrut"],[]);w.style.height=X(h);for(var b=[],T=u,A=u,I=u,F=0;F<s.length;F++){var D=s[F];if(D.type==="kern")I+=D.size;else{var q=D.elem,$=D.wrapperClasses||[],Q=D.wrapperStyle||{},re=H($,[w,q],void 0,Q);re.style.top=X(-h-I-q.depth),D.marginLeft&&(re.style.marginLeft=D.marginLeft),D.marginRight&&(re.style.marginRight=D.marginRight),b.push(re),I+=q.height+q.depth}T=Math.min(T,I),A=Math.max(A,I)}var ue=H(["vlist"],b);ue.style.height=X(A);var ce;if(T<0){var me=H([],[]),ge=H(["vlist"],[me]);ge.style.height=X(-T);var Te=H(["vlist-s"],[new Jn("​")]);ce=[H(["vlist-r"],[ue,Te]),H(["vlist-r"],[ge])]}else ce=[H(["vlist-r"],[ue])];var Ce=H(["vlist-t"],ce);return ce.length===2&&Ce.classes.push("vlist-t2"),Ce.height=A,Ce.depth=-T,Ce},Sd=(l,n)=>{var r=H(["mspace"],[],n),i=tn(l,n);return r.style.marginRight=X(i),r},Za=(l,n,r)=>{var i,s;switch(l){case"amsrm":i="AMS";break;case"textrm":i="Main";break;case"textsf":i="SansSerif";break;case"texttt":i="Typewriter";break;default:i=l}return n==="textbf"&&r==="textit"?s="BoldItalic":n==="textbf"?s="Bold":r==="textit"?s="Italic":s="Regular",i+"-"+s},lu={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},zd={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Td=function(n,r){var i=zd[n],s=i[0],u=i[1],h=i[2],f=new Sr(s),v=new Ht([f],{width:X(u),height:X(h),style:"width:"+X(u),viewBox:"0 0 "+1e3*u+" "+1e3*h,preserveAspectRatio:"xMinYMin"}),g=zr(["katex-overlay"],[v],r);return g.height=h,g.style.height=X(h),g.style.width=X(u),g},nn={number:3,unit:"mu"},$r={number:4,unit:"mu"},_t={number:5,unit:"mu"},R5={mord:{mop:nn,mbin:$r,mrel:_t,minner:nn},mop:{mord:nn,mop:nn,mrel:_t,minner:nn},mbin:{mord:$r,mop:$r,mopen:$r,minner:$r},mrel:{mord:_t,mop:_t,mopen:_t,minner:_t},mopen:{},mclose:{mop:nn,mbin:$r,mrel:_t,minner:nn},mpunct:{mord:nn,mop:nn,mrel:_t,mopen:nn,mclose:nn,mpunct:nn,minner:nn},minner:{mord:nn,mop:nn,mbin:$r,mrel:_t,mopen:nn,mpunct:nn,minner:nn}},D5={mord:{mop:nn},mop:{mord:nn,mop:nn},mbin:{},mrel:{},mopen:{},mclose:{mop:nn},mpunct:{},minner:{mop:nn}},Ed={},Fl={},Nl={};function ee(l){for(var n=l.type,r=l.names,i=l.htmlBuilder,s=l.mathmlBuilder,u=0;u<r.length;++u)Ed[r[u]]=l;n&&(i&&(Fl[n]=i),s&&(Nl[n]=s))}function Jr(l){var n=l.type,r=l.htmlBuilder,i=l.mathmlBuilder;r&&(Fl[n]=r),i&&(Nl[n]=i)}var Pl=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},fn=function(n){return n.type==="ordgroup"?n.body:[n]},F5=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),N5=new Set(["rightmost","mrel","mclose","mpunct"]),P5={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT},I5={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},xn=function(n,r,i,s){s===void 0&&(s=[null,null]);for(var u=[],h=0;h<n.length;h++){var f=Pe(n[h],r);if(f instanceof L0){var v=f.children;u.push(...v)}else u.push(f)}if(bd(u),!i)return u;var g=r;if(n.length===1){var w=n[0];w.type==="sizing"?g=r.havingSize(w.size):w.type==="styling"&&(g=r.havingStyle(P5[w.style]))}var b=H([s[0]||"leftmost"],[],r),T=H([s[1]||"rightmost"],[],r),A=i==="root";return au(u,(I,F)=>{var D=F.classes[0],q=I.classes[0];D==="mbin"&&N5.has(q)?F.classes[0]="mord":q==="mbin"&&F5.has(D)&&(I.classes[0]="mord")},{node:b},T,A),au(u,(I,F)=>{var D,q,$=su(F),Q=su(I),re=$&&Q?I.hasClass("mtight")?(D=D5[$])==null?void 0:D[Q]:(q=R5[$])==null?void 0:q[Q]:null;if(re)return Sd(re,g)},{node:b},T,A),u},au=function(n,r,i,s,u){s&&n.push(s);for(var h=0;h<n.length;h++){var f=n[h],v=Ad(f);if(v){au(v.children,r,i,null,u);continue}var g=!f.hasClass("mspace");if(g){var w=r(f,i.node);w&&(i.insertAfter?i.insertAfter(w):(n.unshift(w),h++))}g?i.node=f:u&&f.hasClass("katex-newline")&&(i.node=H(["leftmost"])),i.insertAfter=(b=>T=>{n.splice(b+1,0,T),h++})(h)}s&&n.pop()},Ad=function(n){return n instanceof L0||n instanceof wi||n instanceof R0&&n.hasClass("enclosing")?n:null},iu=function(n,r){var i=Ad(n);if(i){var s=i.children;if(s.length){if(r==="right")return iu(s[s.length-1],"right");if(r==="left")return iu(s[0],"left")}}return n},su=function(n,r){if(!n)return null;r&&(n=iu(n,r));var i=n.classes[0];return I5[i]||null},Il=function(n,r){var i=["nulldelimiter"].concat(n.baseSizingClasses());return H(r.concat(i))},Pe=function(n,r,i){if(!n)return H();if(Fl[n.type]){var s=Fl[n.type](n,r);if(i&&r.size!==i.size){s=H(r.sizingClasses(i),[s],r);var u=r.sizeMultiplier/i.sizeMultiplier;s.height*=u,s.depth*=u}return s}else throw new U("Got group of unknown type: '"+n.type+"'")};function ei(l,n){var r=H(["katex-base"],l,n),i=H(["katex-strut"]);return i.style.height=X(r.height+r.depth),r.depth&&(i.style.verticalAlign=X(-r.depth)),r.children.unshift(i),r}function ou(l,n){var r=null;l.length===1&&l[0].type==="tag"&&(r=l[0].tag,l=l[0].body);var i=xn(l,n,"root"),s;i.length===2&&i[1].hasClass("katex-tag")&&(s=i.pop());for(var u=[],h=[],f=0;f<i.length;f++)if(h.push(i[f]),i[f].hasClass("mbin")||i[f].hasClass("mrel")||i[f].hasClass("allowbreak")){for(var v=!1;f<i.length-1&&i[f+1].hasClass("mspace")&&!i[f+1].hasClass("katex-newline");)f++,h.push(i[f]),i[f].hasClass("nobreak")&&(v=!0);v||(u.push(ei(h,n)),h=[])}else i[f].hasClass("katex-newline")&&(h.pop(),h.length>0&&(u.push(ei(h,n)),h=[]),u.push(i[f]));h.length>0&&u.push(ei(h,n));var g;r?(g=ei(xn(r,n,!0),n),g.classes=["katex-tag"],u.push(g)):s&&u.push(s);var w=H(["katex-html"],u);if(w.setAttribute("aria-hidden","true"),g){var b=g.children[0];b.style.height=X(w.height+w.depth),w.depth&&(b.style.verticalAlign=X(-w.depth))}return w}function Md(l){return new L0(l)}class G{constructor(n,r,i){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=i||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r of Object.entries(this.attributes)){var i=r[0],s=r[1];n.setAttribute(i,s)}this.classes.length>0&&(n.className=br(this.classes));for(var u=0;u<this.children.length;u++)if(this.children[u]instanceof pn&&this.children[u+1]instanceof pn){for(var h=this.children[u].toText()+this.children[++u].toText();this.children[u+1]instanceof pn;)h+=this.children[++u].toText();n.appendChild(new pn(h).toNode())}else n.appendChild(this.children[u].toNode());return n}toMarkup(){var n="<"+this.type;for(var r of Object.entries(this.attributes)){var i=r[0],s=r[1];n+=" "+i+'="',n+=Ln(s),n+='"'}this.classes.length>0&&(n+=' class ="'+Ln(br(this.classes))+'"'),n+=">";for(var u=0;u<this.children.length;u++)n+=this.children[u].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class pn{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Ln(this.toText())}toText(){return this.text}}class Cd{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",X(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+X(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var B5=new Set(["\\imath","\\jmath"]),O5=new Set(["mrow","mtable"]),st=function(n,r,i){var s,u;return Xe[r][n]&&Xe[r][n].replace&&n.charCodeAt(0)!==55349&&!(Object.prototype.hasOwnProperty.call(kd,n)&&((i==null||(s=i.fontFamily)==null?void 0:s.slice(4,6))==="tt"||(i==null||(u=i.font)==null?void 0:u.slice(4,6))==="tt"))&&(n=Xe[r][n].replace),new pn(n)},Pu=function(n){return n.length===1?n[0]:new G("mrow",n)},_5={mathit:"italic",boldsymbol:l=>l.type==="textord"?"bold":"bold-italic",mathbf:"bold",mathbb:"double-struck",mathsfit:"sans-serif-italic",mathfrak:"fraktur",mathscr:"script",mathcal:"script",mathsf:"sans-serif",mathtt:"monospace"},Iu=(l,n)=>{if(l.mode==="text"){if(n.fontFamily==="texttt")return"monospace";if(n.fontFamily==="textsf")return n.fontShape==="textit"&&n.fontWeight==="textbf"?"sans-serif-bold-italic":n.fontShape==="textit"?"sans-serif-italic":n.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(n.fontShape==="textit"&&n.fontWeight==="textbf")return"bold-italic";if(n.fontShape==="textit")return"italic";if(n.fontWeight==="textbf")return"bold"}var r=n.font;if(!r||r==="mathnormal")return null;var i=l.mode,s=_5[r];if(s)return typeof s=="function"?s(l):s;var u=l.text;if(B5.has(u))return null;if(Xe[i][u]){var h=Xe[i][u].replace;h&&(u=h)}var f=lu[r].fontName;return Du(u,f,i)?lu[r].variant:null};function Do(l){if(!l)return!1;if(l.type==="mi"&&l.children.length===1){var n=l.children[0];return n instanceof pn&&n.text==="."}else if(l.type==="mo"&&l.children.length===1&&l.getAttribute("separator")==="true"&&l.getAttribute("lspace")==="0em"&&l.getAttribute("rspace")==="0em"){var r=l.children[0];return r instanceof pn&&r.text===","}else return!1}var Yn=function(n,r,i){if(n.length===1){var s=$e(n[0],r);return i&&s instanceof G&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var u=[],h,f=0;f<n.length;f++){var v=$e(n[f],r);if(v instanceof G&&h instanceof G){if(v.type==="mtext"&&h.type==="mtext"&&v.getAttribute("mathvariant")===h.getAttribute("mathvariant")){h.children.push(...v.children);continue}else if(v.type==="mn"&&h.type==="mn"){h.children.push(...v.children);continue}else if(Do(v)&&h.type==="mn"){h.children.push(...v.children);continue}else if(v.type==="mn"&&Do(h))v.children=[...h.children,...v.children],u.pop();else if((v.type==="msup"||v.type==="msub")&&v.children.length>=1&&(h.type==="mn"||Do(h))){var g=v.children[0];g instanceof G&&g.type==="mn"&&(g.children=[...h.children,...g.children],u.pop())}else if(h.type==="mi"&&h.children.length===1){var w=h.children[0];if(w instanceof pn&&w.text==="̸"&&(v.type==="mo"||v.type==="mi"||v.type==="mn")){var b=v.children[0];b instanceof pn&&b.text.length>0&&(b.text=b.text.slice(0,1)+"̸"+b.text.slice(1),u.pop())}}}u.push(v),h=v}return u},Tr=function(n,r,i){return Pu(Yn(n,r,i))},$e=function(n,r){if(!n)return new G("mrow");if(Nl[n.type])return Nl[n.type](n,r);throw new U("Got group of unknown type: '"+n.type+"'")};function p4(l,n,r,i,s){var u=Yn(l,r),h;u.length===1&&u[0]instanceof G&&O5.has(u[0].type)?h=u[0]:h=new G("mrow",u);var f=new G("annotation",[new pn(n)]);f.setAttribute("encoding","application/x-tex");var v=new G("semantics",[h,f]),g=new G("math",[v]);g.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),i&&g.setAttribute("display","block");var w=s?"katex":"katex-mathml";return H([w],[g])}var q5=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],m4=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],v4=function(n,r){return r.size<2?n:q5[n-1][r.size-1]};class qt{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||qt.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=m4[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(r,n),new qt(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:v4(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:m4[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=v4(qt.BASESIZE,n);return this.size===r&&this.textSize===qt.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["katex-sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==qt.BASESIZE?["katex-sizing","reset-size"+this.size,"size"+qt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=S5(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}qt.BASESIZE=6;var Ld=function(n){return new qt({style:n.displayMode?ke.DISPLAY:ke.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},Rd=function(n,r){if(r.displayMode){var i=["katex-display"];r.leqno&&i.push("leqno"),r.fleqn&&i.push("fleqn"),n=H(i,[n])}return n},j5=function(n,r,i){var s=Ld(i),u;if(i.output==="mathml")return p4(n,r,s,i.displayMode,!0);if(i.output==="html"){var h=ou(n,s);u=H(["katex"],[h])}else{var f=p4(n,r,s,i.displayMode,!1),v=ou(n,s);u=H(["katex"],[f,v])}return Rd(u,i)},K5=function(n,r,i){var s=Ld(i),u=ou(n,s),h=H(["katex"],[u]);return Rd(h,i)},H5={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",underbracket:"⎵",overbracket:"⎴",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Si=function(n){var r=new G("mo",[new pn(H5[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},$5={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overbracket:[["leftbracketover","rightbracketover"],1.6,440],underbracket:[["leftbracketunder","rightbracketunder"],1.6,410],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},V5=new Set(["widehat","widecheck","widetilde","utilde"]),zi=function(n,r){function i(){var v=4e5,g=n.label.slice(1);if(V5.has(g)&&"base"in n){var w=n.base.type==="ordgroup"?n.base.body.length:1,b,T,A;if(w>5)g==="widehat"||g==="widecheck"?(b=420,v=2364,A=.42,T=g+"4"):(b=312,v=2340,A=.34,T="tilde4");else{var I=[1,1,2,2,3,3][w];g==="widehat"||g==="widecheck"?(v=[0,1062,2364,2364,2364][I],b=[0,239,300,360,420][I],A=[0,.24,.3,.3,.36,.42][I],T=g+I):(v=[0,600,1033,2339,2340][I],b=[0,260,286,306,312][I],A=[0,.26,.286,.3,.306,.34][I],T="tilde"+I)}var F=new Sr(T),D=new Ht([F],{width:"100%",height:X(A),viewBox:"0 0 "+v+" "+b,preserveAspectRatio:"none"});return{span:zr([],[D],r),minWidth:0,height:A}}else{var q=[],$=$5[g];if(!$)throw new Error('No SVG data for "'+g+'".');var Q=$[0],re=$[1],ue=$[2],ce=ue/1e3,me=Q.length,ge,Te;if(me===1){if($.length!==4)throw new Error('Expected 4-tuple for single-path SVG data "'+g+'".');ge=["hide-tail"],Te=[$[3]]}else if(me===2)ge=["halfarrow-left","halfarrow-right"],Te=["xMinYMin","xMaxYMin"];else if(me===3)ge=["brace-left","brace-center","brace-right"],Te=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+me+" children.");for(var Ce=0;Ce<me;Ce++){var on=new Sr(Q[Ce]),Oe=new Ht([on],{width:"400em",height:X(ce),viewBox:"0 0 "+v+" "+ue,preserveAspectRatio:Te[Ce]+" slice"}),Qe=zr([ge[Ce]],[Oe],r);if(me===1)return{span:Qe,minWidth:re,height:ce};Qe.style.height=X(ce),q.push(Qe)}return{span:H(["katex-stretchy"],q,r),minWidth:re,height:ce}}}var s=i(),u=s.span,h=s.minWidth,f=s.height;return u.height=f,u.style.height=X(f),h>0&&(u.style.minWidth=X(h)),u},U5=function(n,r,i,s,u){var h,f=n.height+n.depth+i+s;if(/fbox|color|angl/.test(r)){if(h=H(["katex-stretchy",r],[],u),r==="fbox"){var v=u.color&&u.getColor();v&&(h.style.borderColor=v)}}else{var g=[];/^[bx]cancel$/.test(r)&&g.push(new Yo({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&g.push(new Yo({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var w=new Ht(g,{width:"100%",height:X(f)});h=zr([],[w],u)}return h.height=f,h.style.height=X(f),h},G5=["bin","close","inner","open","punct","rel"],W5=["accent-token","mathord","op-token","spacing","textord"],X5=new Set(G5),J5=new Set(W5);function Q5(l){return X5.has(l)}function ze(l,n){if(!l||l.type!==n)throw new Error("Expected node of type "+n+", but got "+(l?"node of type "+l.type:String(l)));return l}function Ti(l){var n=Ei(l);if(!n)throw new Error("Expected node of symbol group type, but got "+(l?"node of type "+l.type:String(l)));return n}function Ei(l){return l.type==="atom"||J5.has(l.type)?l:null}function Bu(l,n,r){var i="";for(var s of l.body)if(s.type==="textord")i+=s.text;else if(r&&s.type==="spacing"&&s.text===" ")i+=" ";else throw new U(n,l);return i}var Dd=l=>{if(l instanceof Jn)return l;if(k5(l)&&l.children.length===1)return Dd(l.children[0])},Fd=(l,n)=>{var r,i,s;l&&l.type==="supsub"?(i=ze(l.base,"accent"),r=i.base,l.base=r,s=w5(Pe(l,n)),l.base=i):(i=ze(l,"accent"),r=i.base);var u=Pe(r,n.havingCrampedStyle()),h=i.isShifty&&Vt(r),f=0;if(h){var v,g;f=(v=(g=Dd(u))==null?void 0:g.skew)!=null?v:0}var w=i.label==="\\c",b=w?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),T;if(i.isStretchy)T=zi(i,n),T=Be({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:T,wrapperClasses:["svg-align"],wrapperStyle:f>0?{width:"calc(100% - "+X(2*f)+")",marginLeft:X(2*f)}:void 0}]});else{var A,I;i.label==="\\vec"?(A=Td("vec",n),I=zd.vec[1]):(A=bi({type:"textord",mode:i.mode,text:i.label},n),A=x5(A),A.italic=0,I=A.width,w&&(b+=A.depth)),T=H(["accent-body"],[A]);var F=i.label==="\\textcircled";F&&(T.classes.push("accent-full"),b=u.height);var D=f;F||(D-=I/2),T.style.left=X(D),i.label==="\\textcircled"&&(T.style.top=".2em"),T=Be({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-b},{type:"elem",elem:T}]})}var q=H(["mord","katex-accent"],[T],n);return s?(s.children[0]=q,s.height=Math.max(q.height,s.height),s.classes[0]="mord",s):q},Y5=(l,n)=>{var r=l.isStretchy?Si(l.label):new G("mo",[st(l.label,l.mode)]),i=new G("mover",[$e(l.base,n),r]);return i.setAttribute("accent","true"),i},Z5=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(l=>"\\"+l).join("|"));ee({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],numArgs:1,handler:(l,n)=>{var r=Pl(n[0]),i=!Z5.test(l.funcName),s=!i||l.funcName==="\\widehat"||l.funcName==="\\widetilde"||l.funcName==="\\widecheck";return{type:"accent",mode:l.parser.mode,label:l.funcName,isStretchy:i,isShifty:s,base:r}},htmlBuilder:Fd,mathmlBuilder:Y5});ee({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"],handler:(l,n)=>{var r=n[0],i=l.parser.mode;return i==="math"&&(l.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+l.funcName+" works only in text mode"),i="text"),{type:"accent",mode:i,label:l.funcName,isStretchy:!1,isShifty:!0,base:r}}});ee({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],numArgs:1,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=n[0];return{type:"accentUnder",mode:r.mode,label:i,base:s}},htmlBuilder:(l,n)=>{var r=Pe(l.base,n),i=zi(l,n),s=l.label==="\\utilde"?.12:0,u=Be({positionType:"top",positionData:r.height,children:[{type:"elem",elem:i,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return H(["mord","accentunder"],[u],n)},mathmlBuilder:(l,n)=>{var r=Si(l.label),i=new G("munder",[$e(l.base,n),r]);return i.setAttribute("accentunder","true"),i}});var ni=l=>{var n=new G("mpadded",l?[l]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};ee({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],numArgs:1,numOptionalArgs:1,handler(l,n,r){var i=l.parser,s=l.funcName;return{type:"xArrow",mode:i.mode,label:s,body:n[0],below:r[0]}},htmlBuilder(l,n){var r=n.style,i=n.havingStyle(r.sup()),s=A0(Pe(l.body,i,n),n),u=l.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(u+"-arrow-pad");var h;l.below&&(i=n.havingStyle(r.sub()),h=A0(Pe(l.below,i,n),n),h.classes.push(u+"-arrow-pad"));var f=zi(l,n),v=-n.fontMetrics().axisHeight+.5*f.height,g=-n.fontMetrics().axisHeight-.5*f.height-.111;(s.depth>.25||l.label==="\\xleftequilibrium")&&(g-=s.depth);var w;if(h){var b=-n.fontMetrics().axisHeight+h.height+.5*f.height+.111;w=Be({positionType:"individualShift",children:[{type:"elem",elem:s,shift:g},{type:"elem",elem:f,shift:v,wrapperClasses:["svg-align"]},{type:"elem",elem:h,shift:b}]})}else w=Be({positionType:"individualShift",children:[{type:"elem",elem:s,shift:g},{type:"elem",elem:f,shift:v,wrapperClasses:["svg-align"]}]});return H(["mrel","x-arrow"],[w],n)},mathmlBuilder(l,n){var r=Si(l.label);r.setAttribute("minsize",l.label.charAt(0)==="x"?"1.75em":"3.0em");var i;if(l.body){var s=ni($e(l.body,n));if(l.below){var u=ni($e(l.below,n));i=new G("munderover",[r,u,s])}else i=new G("mover",[r,s])}else if(l.below){var h=ni($e(l.below,n));i=new G("munder",[r,h])}else i=ni(),i=new G("mover",[r,i]);return i}});function e6(l,n){var r=xn(l.body,n,!0);return H([l.mclass],r,n)}function n6(l,n){var r,i=Yn(l.body,n);return l.mclass==="minner"?r=new G("mpadded",i):l.mclass==="mord"?l.isCharacterBox?(r=i[0],r.type="mi"):r=new G("mi",i):(l.isCharacterBox?(r=i[0],r.type="mo"):r=new G("mo",i),l.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):l.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):(l.mclass==="mopen"||l.mclass==="mclose")&&(r.attributes.lspace="0em",r.attributes.rspace="0em")),r}ee({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],numArgs:1,primitive:!0,handler(l,n){var r=l.parser,i=l.funcName,s=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+i.slice(5),body:fn(s),isCharacterBox:Vt(s)}},htmlBuilder:e6,mathmlBuilder:n6});var Ai=l=>{var n=l.type==="ordgroup"&&l.body.length?l.body[0]:l;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};ee({type:"mclass",names:["\\@binrel"],numArgs:2,handler(l,n){var r=l.parser;return{type:"mclass",mode:r.mode,mclass:Ai(n[0]),body:fn(n[1]),isCharacterBox:Vt(n[1])}}});ee({type:"mclass",names:["\\stackrel","\\overset","\\underset"],numArgs:2,handler(l,n){var r=l.parser,i=l.funcName,s=n[1],u=n[0],h;i!=="\\stackrel"?h=Ai(s):h="mrel";var f={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:i!=="\\stackrel",body:fn(s)},v=i==="\\underset"?{type:"supsub",mode:u.mode,base:f,sub:u}:{type:"supsub",mode:u.mode,base:f,sup:u};return{type:"mclass",mode:r.mode,mclass:h,body:[v],isCharacterBox:Vt(v)}}});ee({type:"pmb",names:["\\pmb"],numArgs:1,allowedInText:!0,handler(l,n){var r=l.parser;return{type:"pmb",mode:r.mode,mclass:Ai(n[0]),body:fn(n[0])}},htmlBuilder(l,n){var r=xn(l.body,n,!0),i=H([l.mclass],r,n);return i.style.textShadow="0.02em 0.01em 0.04px",i},mathmlBuilder(l,n){var r=Yn(l.body,n),i=new G("mstyle",r);return i.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),i}});var t6={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},g4=()=>({type:"styling",body:[],mode:"math",style:"display",resetFont:!0}),y4=l=>l.type==="textord"&&l.text==="@",r6=(l,n)=>(l.type==="mathord"||l.type==="atom")&&l.text===n;function l6(l,n,r){var i=t6[l];switch(i){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(i,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:i,mode:"math",family:"rel"},h=r.callFunction("\\Big",[u],[]),f=r.callFunction("\\\\cdright",[n[1]],[]),v={type:"ordgroup",mode:"math",body:[s,h,f]};return r.callFunction("\\\\cdparent",[v],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var g={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[g],[])}default:return{type:"textord",text:" ",mode:"math"}}}function a6(l){var n=[];for(l.gullet.beginGroup(),l.gullet.macros.set("\\cr","\\\\\\relax"),l.gullet.beginGroup();;){n.push(l.parseExpression(!1,"\\\\")),l.gullet.endGroup(),l.gullet.beginGroup();var r=l.fetch().text;if(r==="&"||r==="\\\\")l.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new U("Expected \\\\ or \\cr or \\end",l.nextToken)}for(var i=[],s=[i],u=0;u<n.length;u++){for(var h=n[u],f=g4(),v=0;v<h.length;v++)if(!y4(h[v]))f.body.push(h[v]);else{i.push(f),v+=1;var g=Ti(h[v]).text,w=new Array(2);if(w[0]={type:"ordgroup",mode:"math",body:[]},w[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(g))if("<>AV".includes(g))for(var b=0;b<2;b++){for(var T=!0,A=v+1;A<h.length;A++){if(r6(h[A],g)){T=!1,v=A;break}if(y4(h[A]))throw new U("Missing a "+g+" character to complete a CD arrow.",h[A]);w[b].body.push(h[A])}if(T)throw new U("Missing a "+g+" character to complete a CD arrow.",h[v])}else throw new U('Expected one of "<>AV=|." after @',h[v]);var I=l6(g,w,l),F={type:"styling",body:[I],mode:"math",style:"display",resetFont:!0};i.push(F),f=g4()}u%2===0?i.push(f):i.shift(),i=[],s.push(i)}l.gullet.endGroup(),l.gullet.endGroup();var D=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:D,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}ee({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],numArgs:1,handler(l,n){var r=l.parser,i=l.funcName;return{type:"cdlabel",mode:r.mode,side:i.slice(4),label:n[0]}},htmlBuilder(l,n){var r=n.havingStyle(n.style.sup()),i=A0(Pe(l.label,r,n),n);return i.classes.push("cd-label-"+l.side),i.style.bottom=X(.8-i.depth),i.height=0,i.depth=0,i},mathmlBuilder(l,n){var r=new G("mrow",[$e(l.label,n)]);return r=new G("mpadded",[r]),r.setAttribute("width","0"),l.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new G("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ee({type:"cdlabelparent",names:["\\\\cdparent"],numArgs:1,handler(l,n){var r=l.parser;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(l,n){var r=A0(Pe(l.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(l,n){return new G("mrow",[$e(l.fragment,n)])}});ee({type:"textord",names:["\\@char"],numArgs:1,allowedInText:!0,handler(l,n){var r=l.parser,i=ze(n[0],"ordgroup"),s=Bu(i,"\\@char has non-numeric argument"),u=parseInt(s),h;if(isNaN(u))throw new U("\\@char has non-numeric argument "+s);if(u<0||u>1114111)throw new U("\\@char with invalid code point "+s);return u<=65535?h=String.fromCharCode(u):(u-=65536,h=String.fromCharCode((u>>10)+55296,(u&1023)+56320)),{type:"textord",mode:r.mode,text:h}}});var i6=(l,n)=>{var r=xn(l.body,n.withColor(l.color),!1);return Gt(r)},s6=(l,n)=>{var r=Yn(l.body,n.withColor(l.color)),i=new G("mstyle",r);return i.setAttribute("mathcolor",l.color),i};ee({type:"color",names:["\\textcolor"],numArgs:2,allowedInText:!0,argTypes:["color","original"],handler(l,n){var r=l.parser,i=ze(n[0],"color-token").color,s=n[1];return{type:"color",mode:r.mode,color:i,body:fn(s)}},htmlBuilder:i6,mathmlBuilder:s6});ee({type:"color",names:["\\color"],numArgs:1,allowedInText:!0,argTypes:["color"],handler(l,n){var r=l.parser,i=l.breakOnTokenText,s=ze(n[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var u=r.parseExpression(!0,i);return{type:"color",mode:r.mode,color:s,body:u}}});ee({type:"cr",names:["\\\\"],numArgs:0,numOptionalArgs:0,allowedInText:!0,handler(l,n,r){var i=l.parser,s=i.gullet.future().text==="["?i.parseSizeGroup(!0):null,u=!i.settings.displayMode||!i.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:i.mode,newLine:u,size:s&&ze(s,"size").value}},htmlBuilder(l,n){var r=H(["mspace"],[],n);return l.newLine&&(r.classes.push("katex-newline"),l.size&&(r.style.marginTop=X(tn(l.size,n)))),r},mathmlBuilder(l,n){var r=new G("mspace");return l.newLine&&(r.setAttribute("linebreak","newline"),l.size&&r.setAttribute("height",X(tn(l.size,n)))),r}});var uu={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Nd=l=>{var n=l.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new U("Expected a control sequence",l);return n},o6=l=>{var n=l.gullet.popToken();return n.text==="="&&(n=l.gullet.popToken(),n.text===" "&&(n=l.gullet.popToken())),n},Pd=(l,n,r,i)=>{var s=l.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!l.gullet.isExpandable(r.text)}),l.gullet.macros.set(n,s,i)};ee({type:"internal",names:["\\global","\\long","\\\\globallong"],numArgs:0,allowedInText:!0,handler(l){var n=l.parser,r=l.funcName;n.consumeSpaces();var i=n.fetch();if(uu[i.text])return(r==="\\global"||r==="\\\\globallong")&&(i.text=uu[i.text]),ze(n.parseFunction(),"internal");throw new U("Invalid token after macro prefix",i)}});ee({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var n=l.parser,r=l.funcName,i=n.gullet.popToken(),s=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new U("Expected a control sequence",i);for(var u=0,h,f=[[]];n.gullet.future().text!=="{";)if(i=n.gullet.popToken(),i.text==="#"){if(n.gullet.future().text==="{"){h=n.gullet.future(),f[u].push("{");break}if(i=n.gullet.popToken(),!/^[1-9]$/.test(i.text))throw new U('Invalid argument number "'+i.text+'"');if(parseInt(i.text)!==u+1)throw new U('Argument number "'+i.text+'" out of order');u++,f.push([])}else{if(i.text==="EOF")throw new U("Expected a macro definition");f[u].push(i.text)}var v=n.gullet.consumeArg(),g=v.tokens;return h&&g.unshift(h),(r==="\\edef"||r==="\\xdef")&&(g=n.gullet.expandTokens(g),g.reverse()),n.gullet.macros.set(s,{tokens:g,numArgs:u,delimiters:f},r===uu[r]),{type:"internal",mode:n.mode}}});ee({type:"internal",names:["\\let","\\\\globallet"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var n=l.parser,r=l.funcName,i=Nd(n.gullet.popToken());n.gullet.consumeSpaces();var s=o6(n);return Pd(n,i,s,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});ee({type:"internal",names:["\\futurelet","\\\\globalfuture"],numArgs:0,allowedInText:!0,primitive:!0,handler(l){var n=l.parser,r=l.funcName,i=Nd(n.gullet.popToken()),s=n.gullet.popToken(),u=n.gullet.popToken();return Pd(n,i,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(s),{type:"internal",mode:n.mode}}});var Ml=function(n,r,i){var s=Xe.math[n]&&Xe.math[n].replace,u=Du(s||n,r,i);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Ou=function(n,r,i,s){var u=i.havingBaseStyle(r),h=H(s.concat(u.sizingClasses(i)),[n],i),f=u.sizeMultiplier/i.sizeMultiplier;return h.height*=f,h.depth*=f,h.maxFontSize=u.sizeMultiplier,h},Id=function(n,r,i){var s=r.havingBaseStyle(i),u=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=X(u),n.height-=u,n.depth+=u},u6=function(n,r,i,s,u,h){var f=Nn(n,"Main-Regular",u,s),v=Ou(f,r,s,h);return Id(v,s,r),v},c6=function(n,r,i,s){return Nn(n,"Size"+r+"-Regular",i,s)},Bd=function(n,r,i,s,u,h){var f=c6(n,r,u,s),v=Ou(H(["delimsizing","size"+r],[f],s),ke.TEXT,s,h);return i&&Id(v,s,ke.TEXT),v},Fo=function(n,r,i){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var u=H(["delimsizinginner",s],[H([],[Nn(n,r,i)])]);return{type:"elem",elem:u}},No=function(n,r,i){var s=Tt["Size4-Regular"][n.charCodeAt(0)]?Tt["Size4-Regular"][n.charCodeAt(0)][4]:Tt["Size1-Regular"][n.charCodeAt(0)][4],u=new Sr("inner",d5(n,Math.round(1e3*r))),h=new Ht([u],{width:X(s),height:X(r),style:"width:"+X(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),f=zr([],[h],i);return f.height=r,f.style.height=X(r),f.style.width=X(s),{type:"elem",elem:f}},cu=.008,ti={type:"kern",size:-1*cu},h6=new Set(["|","\\lvert","\\rvert","\\vert"]),d6=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Od=function(n,r,i,s,u,h){var f,v,g,w,b="",T=0;f=g=w=n,v=null;var A="Size1-Regular";n==="\\uparrow"?g=w="⏐":n==="\\Uparrow"?g=w="‖":n==="\\downarrow"?f=g="⏐":n==="\\Downarrow"?f=g="‖":n==="\\updownarrow"?(f="\\uparrow",g="⏐",w="\\downarrow"):n==="\\Updownarrow"?(f="\\Uparrow",g="‖",w="\\Downarrow"):h6.has(n)?(g="∣",b="vert",T=333):d6.has(n)?(g="∥",b="doublevert",T=556):n==="["||n==="\\lbrack"?(f="⎡",g="⎢",w="⎣",A="Size4-Regular",b="lbrack",T=667):n==="]"||n==="\\rbrack"?(f="⎤",g="⎥",w="⎦",A="Size4-Regular",b="rbrack",T=667):n==="\\lfloor"||n==="⌊"?(g=f="⎢",w="⎣",A="Size4-Regular",b="lfloor",T=667):n==="\\lceil"||n==="⌈"?(f="⎡",g=w="⎢",A="Size4-Regular",b="lceil",T=667):n==="\\rfloor"||n==="⌋"?(g=f="⎥",w="⎦",A="Size4-Regular",b="rfloor",T=667):n==="\\rceil"||n==="⌉"?(f="⎤",g=w="⎥",A="Size4-Regular",b="rceil",T=667):n==="("||n==="\\lparen"?(f="⎛",g="⎜",w="⎝",A="Size4-Regular",b="lparen",T=875):n===")"||n==="\\rparen"?(f="⎞",g="⎟",w="⎠",A="Size4-Regular",b="rparen",T=875):n==="\\{"||n==="\\lbrace"?(f="⎧",v="⎨",w="⎩",g="⎪",A="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(f="⎫",v="⎬",w="⎭",g="⎪",A="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(f="⎧",w="⎩",g="⎪",A="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(f="⎫",w="⎭",g="⎪",A="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(f="⎧",w="⎭",g="⎪",A="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(f="⎫",w="⎩",g="⎪",A="Size4-Regular");var I=Ml(f,A,u),F=I.height+I.depth,D=Ml(g,A,u),q=D.height+D.depth,$=Ml(w,A,u),Q=$.height+$.depth,re=0,ue=1;if(v!==null){var ce=Ml(v,A,u);re=ce.height+ce.depth,ue=2}var me=F+Q+re,ge=Math.max(0,Math.ceil((r-me)/(ue*q))),Te=me+ge*ue*q,Ce=s.fontMetrics().axisHeight;i&&(Ce*=s.sizeMultiplier);var on=Te/2-Ce,Oe=[];if(b.length>0){var Qe=Te-F-Q,rn=Math.round(Te*1e3),ln=f5(b,Math.round(Qe*1e3)),Ye=new Sr(b,ln),je=X(T/1e3),Y=X(rn/1e3),he=new Ht([Ye],{width:je,height:Y,viewBox:"0 0 "+T+" "+rn}),Z=zr([],[he],s);Z.height=rn/1e3,Z.style.width=je,Z.style.height=Y,Oe.push({type:"elem",elem:Z})}else{if(Oe.push(Fo(w,A,u)),Oe.push(ti),v===null){var R=Te-F-Q+2*cu;Oe.push(No(g,R,s))}else{var O=(Te-F-Q-re)/2+2*cu;Oe.push(No(g,O,s)),Oe.push(ti),Oe.push(Fo(v,A,u)),Oe.push(ti),Oe.push(No(g,O,s))}Oe.push(ti),Oe.push(Fo(f,A,u))}var ve=s.havingBaseStyle(ke.TEXT),be=Be({positionType:"bottom",positionData:on,children:Oe});return Ou(H(["delimsizing","mult"],[be],ve),ke.TEXT,s,h)},Po=80,Io=.08,Bo=function(n,r,i,s,u){var h=h5(n,s,i),f=new Sr(n,h),v=new Ht([f],{width:"400em",height:X(r),viewBox:"0 0 400000 "+i,preserveAspectRatio:"xMinYMin slice"});return zr(["hide-tail"],[v],u)},f6=function(n,r){var i=r.havingBaseSizing(),s=Hd("\\surd",n*i.sizeMultiplier,Kd,i),u=i.sizeMultiplier,h=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),f,v,g,w,b;return s.type==="small"?(w=1e3+1e3*h+Po,n<1?u=1:n<1.4&&(u=.7),v=(1+h+Io)/u,g=(1+h)/u,f=Bo("sqrtMain",v,w,h,r),f.style.minWidth="0.853em",b=.833/u):s.type==="large"?(w=(1e3+Po)*Cl[s.size],g=(Cl[s.size]+h)/u,v=(Cl[s.size]+h+Io)/u,f=Bo("sqrtSize"+s.size,v,w,h,r),f.style.minWidth="1.02em",b=1/u):(v=n+h+Io,g=n+h,w=Math.floor(1e3*n+h)+Po,f=Bo("sqrtTall",v,w,h,r),f.style.minWidth="0.742em",b=1.056),f.height=g,f.style.height=X(v),{span:f,advanceWidth:b,ruleWidth:(r.fontMetrics().sqrtRuleThickness+h)*u}},_d=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),p6=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),qd=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Cl=[0,1.2,1.8,2.4,3],jd=function(n,r,i,s,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),_d.has(n)||qd.has(n))return Bd(n,r,!1,i,s,u);if(p6.has(n))return Od(n,Cl[r],!1,i,s,u);throw new U("Illegal delimiter: '"+n+"'")},m6=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],v6=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"stack"}],Kd=[{type:"small",style:ke.SCRIPTSCRIPT},{type:"small",style:ke.SCRIPT},{type:"small",style:ke.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],g6=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";var r=n.type;throw new Error("Add support for delim type '"+r+"' here.")},Hd=function(n,r,i,s){for(var u=Math.min(2,3-s.style.size),h=u;h<i.length;h++){var f=i[h];if(f.type==="stack")break;var v=Ml(n,g6(f),"math"),g=v.height+v.depth;if(f.type==="small"){var w=s.havingBaseStyle(f.style);g*=w.sizeMultiplier}if(g>r)return f}return i[i.length-1]},hu=function(n,r,i,s,u,h){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var f;qd.has(n)?f=m6:_d.has(n)?f=Kd:f=v6;var v=Hd(n,r,f,s);return v.type==="small"?u6(n,v.style,i,s,u,h):v.type==="large"?Bd(n,v.size,i,s,u,h):Od(n,r,i,s,u,h)},Oo=function(n,r,i,s,u,h){var f=s.fontMetrics().axisHeight*s.sizeMultiplier,v=901,g=5/s.fontMetrics().ptPerEm,w=Math.max(r-f,i+f),b=Math.max(w/500*v,2*w-g);return hu(n,b,!0,s,u,h)},x4={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},y6=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function w4(l){return"isMiddle"in l}function Mi(l,n){var r=Ei(l);if(r&&y6.has(r.text))return r;throw r?new U("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",l):new U("Invalid delimiter type '"+l.type+"'",l)}ee({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],numArgs:1,argTypes:["primitive"],handler:(l,n)=>{var r=Mi(Pl(n[0]),l);return{type:"delimsizing",mode:l.parser.mode,size:x4[l.funcName].size,mclass:x4[l.funcName].mclass,delim:r.text}},htmlBuilder:(l,n)=>l.delim==="."?H([l.mclass]):jd(l.delim,l.size,n,l.mode,[l.mclass]),mathmlBuilder:l=>{var n=[];l.delim!=="."&&n.push(st(l.delim,l.mode));var r=new G("mo",n);l.mclass==="mopen"||l.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var i=X(Cl[l.size]);return r.setAttribute("minsize",i),r.setAttribute("maxsize",i),r}});function k4(l){if(!l.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ee({type:"leftright-right",names:["\\right"],numArgs:1,primitive:!0,handler:(l,n)=>{var r=l.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new U("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:l.parser.mode,delim:Mi(n[0],l).text,color:r}}});ee({type:"leftright",names:["\\left"],numArgs:1,primitive:!0,handler:(l,n)=>{var r=Mi(n[0],l),i=l.parser;++i.leftrightDepth;var s=i.parseExpression(!1);--i.leftrightDepth,i.expect("\\right",!1);var u=ze(i.parseFunction(),"leftright-right");return{type:"leftright",mode:i.mode,body:s,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(l,n)=>{k4(l);for(var r=xn(l.body,n,!0,["mopen","mclose"]),i=0,s=0,u=!1,h=0;h<r.length;h++){var f=r[h];w4(f)?u=!0:(i=Math.max(r[h].height,i),s=Math.max(r[h].depth,s))}i*=n.sizeMultiplier,s*=n.sizeMultiplier;var v;if(l.left==="."?v=Il(n,["mopen"]):v=Oo(l.left,i,s,n,l.mode,["mopen"]),r.unshift(v),u)for(var g=1;g<r.length;g++){var w=r[g];if(w4(w)){var b=w.isMiddle;r[g]=Oo(b.delim,i,s,b.options,l.mode,[])}}var T;if(l.right===".")T=Il(n,["mclose"]);else{var A=l.rightColor?n.withColor(l.rightColor):n;T=Oo(l.right,i,s,A,l.mode,["mclose"])}return r.push(T),H(["minner"],r,n)},mathmlBuilder:(l,n)=>{k4(l);var r=Yn(l.body,n);if(l.left!=="."){var i=new G("mo",[st(l.left,l.mode)]);i.setAttribute("fence","true"),r.unshift(i)}if(l.right!=="."){var s=new G("mo",[st(l.right,l.mode)]);s.setAttribute("fence","true"),l.rightColor&&s.setAttribute("mathcolor",l.rightColor),r.push(s)}return Pu(r)}});ee({type:"middle",names:["\\middle"],numArgs:1,primitive:!0,handler:(l,n)=>{var r=Mi(n[0],l);if(!l.parser.leftrightDepth)throw new U("\\middle without preceding \\left",r);return{type:"middle",mode:l.parser.mode,delim:r.text}},htmlBuilder:(l,n)=>{var r;return l.delim==="."?r=Il(n,[]):(r=jd(l.delim,1,n,l.mode,[]),r.isMiddle={delim:l.delim,options:n}),r},mathmlBuilder:(l,n)=>{var r=l.delim==="\\vert"||l.delim==="|"?st("|","text"):st(l.delim,l.mode),i=new G("mo",[r]);return i.setAttribute("fence","true"),i.setAttribute("lspace","0.05em"),i.setAttribute("rspace","0.05em"),i}});var x6=(l,n)=>{var r=A0(Pe(l.body,n),n),i=l.label.slice(1),s=n.sizeMultiplier,u,h,f=Vt(l.body);if(i==="sout")u=H(["katex-stretchy","katex-sout"]),u.height=n.fontMetrics().defaultRuleThickness/s,h=-.5*n.fontMetrics().xHeight;else if(i==="phase"){var v=tn({number:.6,unit:"pt"},n),g=tn({number:.35,unit:"ex"},n),w=n.havingBaseSizing();s=s/w.sizeMultiplier;var b=r.height+r.depth+v+g;r.style.paddingLeft=X(b/2+v);var T=Math.floor(1e3*b*s),A=u5(T),I=new Ht([new Sr("phase",A)],{width:"400em",height:X(T/1e3),viewBox:"0 0 400000 "+T,preserveAspectRatio:"xMinYMin slice"});u=zr(["hide-tail"],[I],n),u.style.height=X(b),h=r.depth+v+g}else{/cancel/.test(i)?f||r.classes.push("cancel-pad"):i==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var F,D,q=0;/box/.test(i)?(q=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),F=n.fontMetrics().fboxsep+(i==="colorbox"?0:q),D=F):i==="angl"?(q=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),F=4*q,D=Math.max(0,.25-r.depth)):(F=f?.2:0,D=F),u=U5(r,i,F,D,n),/fbox|boxed|fcolorbox/.test(i)?(u.style.borderStyle="solid",u.style.borderWidth=X(q)):i==="angl"&&q!==.049&&(u.style.borderTopWidth=X(q),u.style.borderRightWidth=X(q)),h=r.depth+D,l.backgroundColor&&(u.style.backgroundColor=l.backgroundColor,l.borderColor&&(u.style.borderColor=l.borderColor))}var $;if(l.backgroundColor)$=Be({positionType:"individualShift",children:[{type:"elem",elem:u,shift:h},{type:"elem",elem:r,shift:0}]});else{var Q=/cancel|phase/.test(i)?["svg-align"]:[];$=Be({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:h,wrapperClasses:Q}]})}return/cancel/.test(i)&&($.height=r.height,$.depth=r.depth),/cancel/.test(i)&&!f?H(["mord","cancel-lap"],[$],n):H(["mord"],[$],n)},w6=(l,n)=>{var r,i=new G(l.label.includes("colorbox")?"mpadded":"menclose",[$e(l.body,n)]);switch(l.label){case"\\cancel":i.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":i.setAttribute("notation","downdiagonalstrike");break;case"\\phase":i.setAttribute("notation","phasorangle");break;case"\\sout":i.setAttribute("notation","horizontalstrike");break;case"\\fbox":i.setAttribute("notation","box");break;case"\\angl":i.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,i.setAttribute("width","+"+2*r+"pt"),i.setAttribute("height","+"+2*r+"pt"),i.setAttribute("lspace",r+"pt"),i.setAttribute("voffset",r+"pt"),l.label==="\\fcolorbox"){var s=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);i.setAttribute("style","border: "+X(s)+" solid "+l.borderColor)}break;case"\\xcancel":i.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return l.backgroundColor&&i.setAttribute("mathbackground",l.backgroundColor),i};ee({type:"enclose",names:["\\colorbox"],numArgs:2,allowedInText:!0,argTypes:["color","hbox"],handler(l,n,r){var i=l.parser,s=l.funcName,u=ze(n[0],"color-token").color,h=n[1];return{type:"enclose",mode:i.mode,label:s,backgroundColor:u,body:h}},htmlBuilder:x6,mathmlBuilder:w6});ee({type:"enclose",names:["\\fcolorbox"],numArgs:3,allowedInText:!0,argTypes:["color","color","hbox"],handler(l,n,r){var i=l.parser,s=l.funcName,u=ze(n[0],"color-token").color,h=ze(n[1],"color-token").color,f=n[2];return{type:"enclose",mode:i.mode,label:s,backgroundColor:h,borderColor:u,body:f}}});ee({type:"enclose",names:["\\fbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler(l,n){var r=l.parser;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});ee({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\phase"],numArgs:1,handler(l,n){var r=l.parser,i=l.funcName,s=n[0];return{type:"enclose",mode:r.mode,label:i,body:s}}});ee({type:"enclose",names:["\\sout"],numArgs:1,allowedInText:!0,handler(l,n){var r=l.parser,i=l.funcName;r.mode==="math"&&r.settings.reportNonstrict("mathVsSout","LaTeX's \\sout works only in text mode");var s=n[0];return{type:"enclose",mode:r.mode,label:i,body:s}}});ee({type:"enclose",names:["\\angl"],numArgs:1,argTypes:["hbox"],allowedInText:!1,handler(l,n){var r=l.parser;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var $d={};function Et(l){for(var n=l.type,r=l.names,i=l.props,s=l.handler,u=l.htmlBuilder,h=l.mathmlBuilder,f={type:n,numArgs:i.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},v=0;v<r.length;++v)$d[r[v]]=f;u&&(Fl[n]=u),h&&(Nl[n]=h)}var Vd={};function k(l,n){Vd[l]=n}class $n{constructor(n,r,i){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=i}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new $n(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Xn{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Xn(r,$n.range(this,n))}}function b4(l){var n=[];l.consumeSpaces();var r=l.fetch().text;for(r==="\\relax"&&(l.consume(),l.consumeSpaces(),r=l.fetch().text);r==="\\hline"||r==="\\hdashline";)l.consume(),n.push(r==="\\hdashline"),l.consumeSpaces(),r=l.fetch().text;return n}var Ci=l=>{var n=l.parser.settings;if(!n.displayMode)throw new U("{"+l.envName+"} can be used only in display mode.")},k6=new Set(["gather","gather*"]);function _u(l){if(!l.includes("ed"))return!l.includes("*")}function Ar(l,n,r){var i=n.hskipBeforeAndAfter,s=n.addJot,u=n.cols,h=n.arraystretch,f=n.colSeparationType,v=n.autoTag,g=n.singleRow,w=n.emptySingleRow,b=n.maxNumCols,T=n.leqno;if(l.gullet.beginGroup(),g||l.gullet.macros.set("\\cr","\\\\\\relax"),!h){var A=l.gullet.expandMacroAsText("\\arraystretch");if(A==null)h=1;else if(h=parseFloat(A),!h||h<0)throw new U("Invalid \\arraystretch: "+A)}l.gullet.beginGroup();var I=[],F=[I],D=[],q=[],$=v!=null?[]:void 0;function Q(){v&&l.gullet.macros.set("\\@eqnsw","1",!0)}function re(){$&&(l.gullet.macros.get("\\df@tag")?($.push(l.subparse([new Xn("\\df@tag")])),l.gullet.macros.set("\\df@tag",void 0,!0)):$.push(!!v&&l.gullet.macros.get("\\@eqnsw")==="1"))}for(Q(),q.push(b4(l));;){var ue=l.parseExpression(!1,g?"\\end":"\\\\");l.gullet.endGroup(),l.gullet.beginGroup();var ce={type:"ordgroup",mode:l.mode,body:ue};r&&(ce={type:"styling",mode:l.mode,style:r,resetFont:!0,body:[ce]}),I.push(ce);var me=l.fetch().text;if(me==="&"){if(b&&I.length===b){if(g||f)throw new U("Too many tab characters: &",l.nextToken);l.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}l.consume()}else if(me==="\\end"){re(),I.length===1&&ce.type==="styling"&&ce.body.length===1&&ce.body[0].type==="ordgroup"&&ce.body[0].body.length===0&&(F.length>1||!w)&&!Array.isArray($==null?void 0:$[$.length-1])&&!(v&&($==null?void 0:$[$.length-1])===!0)&&F.pop(),q.length<F.length+1&&q.push([]);break}else if(me==="\\\\"){l.consume();var ge=void 0;l.gullet.future().text!==" "&&(ge=l.parseSizeGroup(!0)),D.push(ge?ge.value:null),re(),q.push(b4(l)),I=[],F.push(I),Q()}else throw new U("Expected & or \\\\ or \\cr or \\end",l.nextToken)}return l.gullet.endGroup(),l.gullet.endGroup(),{type:"array",mode:l.mode,addJot:s,arraystretch:h,body:F,cols:u,rowGaps:D,hskipBeforeAndAfter:i,hLinesBeforeRow:q,colSeparationType:f,tags:$,leqno:T}}function qu(l){return l.slice(0,1)==="d"?"display":"text"}var At=function(n,r){var i,s,u=n.body.length,h=n.hLinesBeforeRow,f=0,v=new Array(u),g=[],w=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),b=1/r.fontMetrics().ptPerEm,T=5*b;if(n.colSeparationType&&n.colSeparationType==="small"){var A=r.havingStyle(ke.SCRIPT).sizeMultiplier;T=.2778*(A/r.sizeMultiplier)}var I=n.colSeparationType==="CD"?tn({number:3,unit:"ex"},r):12*b,F=3*b,D=n.arraystretch*I,q=.7*D,$=.3*D,Q=0;function re(Lt){for(var Cr=0;Cr<Lt.length;++Cr)Cr>0&&(Q+=.25),g.push({pos:Q,isDashed:Lt[Cr]})}for(re(h[0]),i=0;i<n.body.length;++i){var ue=n.body[i],ce=q,me=$;f<ue.length&&(f=ue.length);var ge={cells:new Array(ue.length),height:0,depth:0,pos:0};for(s=0;s<ue.length;++s){var Te=Pe(ue[s],r);me<Te.depth&&(me=Te.depth),ce<Te.height&&(ce=Te.height),ge.cells[s]=Te}var Ce=n.rowGaps[i],on=0;Ce&&(on=tn(Ce,r),on>0&&(on+=$,me<on&&(me=on),on=0)),n.addJot&&i<n.body.length-1&&(me+=F),ge.height=ce,ge.depth=me,Q+=ce,ge.pos=Q,Q+=me+on,v[i]=ge,re(h[i+1])}var Oe=Q/2+r.fontMetrics().axisHeight,Qe=n.cols||[],rn=[],ln,Ye,je=[];if(n.tags&&n.tags.some(Lt=>Lt))for(i=0;i<u;++i){var Y=v[i],he=Y.pos-Oe,Z=n.tags[i],R=void 0;Z===!0?R=H(["eqn-num"],[],r):Z===!1?R=H([],[],r):R=H([],xn(Z,r,!0),r),R.depth=Y.depth,R.height=Y.height,je.push({type:"elem",elem:R,shift:he})}for(s=0,Ye=0;s<f||Ye<Qe.length;++s,++Ye){for(var O,ve=Qe[Ye],be=!0;((Ee=ve)==null?void 0:Ee.type)==="separator";){var Ee;if(be||(ln=H(["arraycolsep"],[]),ln.style.width=X(r.fontMetrics().doubleRuleSep),rn.push(ln)),ve.separator==="|"||ve.separator===":"){var Ae=ve.separator==="|"?"solid":"dashed",Le=H(["vertical-separator"],[],r);Le.style.height=X(Q),Le.style.borderRightWidth=X(w),Le.style.borderRightStyle=Ae,Le.style.margin="0 "+X(-w/2);var Fe=Q-Oe;Fe&&(Le.style.verticalAlign=X(-Fe)),rn.push(Le)}else throw new U("Invalid separator type: "+ve.separator);Ye++,ve=Qe[Ye],be=!1}if(!(s>=f)){var Ie=void 0;if(s>0||n.hskipBeforeAndAfter){var Tn,Mr;Ie=(Tn=(Mr=ve)==null?void 0:Mr.pregap)!=null?Tn:T,Ie!==0&&(ln=H(["arraycolsep"],[]),ln.style.width=X(Ie),rn.push(ln))}var F0=[];for(i=0;i<u;++i){var Ct=v[i],Wt=Ct.cells[s];if(Wt){var _l=Ct.pos-Oe;Wt.depth=Ct.depth,Wt.height=Ct.height,F0.push({type:"elem",elem:Wt,shift:_l})}}var ql=Be({positionType:"individualShift",children:F0}),N0=H(["col-align-"+(((O=ve)==null?void 0:O.align)||"c")],[ql]);if(rn.push(N0),s<f-1||n.hskipBeforeAndAfter){var P0,Qr;Ie=(P0=(Qr=ve)==null?void 0:Qr.postgap)!=null?P0:T,Ie!==0&&(ln=H(["arraycolsep"],[]),ln.style.width=X(Ie),rn.push(ln))}}}var gt=H(["mtable"],rn);if(g.length>0){for(var Xt=E0("katex-hline",r,w),I0=E0("katex-hdashline",r,w),Yr=[{type:"elem",elem:gt,shift:0}];g.length>0;){var B0=g.pop(),O0=B0.pos-Oe;B0.isDashed?Yr.push({type:"elem",elem:I0,shift:O0}):Yr.push({type:"elem",elem:Xt,shift:O0})}gt=Be({positionType:"individualShift",children:Yr})}if(je.length===0)return H(["mord"],[gt],r);var jl=Be({positionType:"individualShift",children:je}),_0=H(["katex-tag"],[jl],r);return Gt([gt,_0])},b6={c:"center ",l:"left ",r:"right "},Mt=function(n,r){for(var i=[],s=new G("mtd",[],["mtr-glue"]),u=new G("mtd",[],["mml-eqn-num"]),h=0;h<n.body.length;h++){for(var f=n.body[h],v=[],g=0;g<f.length;g++)v.push(new G("mtd",[$e(f[g],r)]));n.tags&&n.tags[h]&&(v.unshift(s),v.push(s),n.leqno?v.unshift(u):v.push(u)),i.push(new G("mtr",v))}var w=new G("mtable",i),b=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);w.setAttribute("rowspacing",X(b));var T="",A="";if(n.cols&&n.cols.length>0){var I=n.cols,F="",D=!1,q=0,$=I.length;I[0].type==="separator"&&(T+="top ",q=1),I[I.length-1].type==="separator"&&(T+="bottom ",$-=1);for(var Q=q;Q<$;Q++){var re=I[Q];re.type==="align"?(A+=b6[re.align],D&&(F+="none "),D=!0):re.type==="separator"&&D&&(F+=re.separator==="|"?"solid ":"dashed ",D=!1)}w.setAttribute("columnalign",A.trim()),/[sd]/.test(F)&&w.setAttribute("columnlines",F.trim())}if(n.colSeparationType==="align"){for(var ue=n.cols||[],ce="",me=1;me<ue.length;me++)ce+=me%2?"0em ":"1em ";w.setAttribute("columnspacing",ce.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?w.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?w.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?w.setAttribute("columnspacing","0.5em"):w.setAttribute("columnspacing","1em");var ge="",Te=n.hLinesBeforeRow;T+=Te[0].length>0?"left ":"",T+=Te[Te.length-1].length>0?"right ":"";for(var Ce=1;Ce<Te.length-1;Ce++)ge+=Te[Ce].length===0?"none ":Te[Ce][0]?"dashed ":"solid ";return/[sd]/.test(ge)&&w.setAttribute("rowlines",ge.trim()),T!==""&&(w=new G("menclose",[w]),w.setAttribute("notation",T.trim())),n.arraystretch&&n.arraystretch<1&&(w=new G("mstyle",[w]),w.setAttribute("scriptlevel","1")),w},Ud=function(n,r){n.envName.includes("ed")||Ci(n);var i=[],s=n.envName==="split",u=Ar(n.parser,{cols:i,addJot:!0,autoTag:s?void 0:_u(n.envName),emptySingleRow:!0,colSeparationType:n.envName.includes("at")?"alignat":"align",maxNumCols:s?2:void 0,leqno:n.parser.settings.leqno},"display"),h=0,f=0,v={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){var g="Number of columns should be a positive integer",w=Bu(r[0],g);if(!/^[0-9]+$/.test(w)||Number(w)<1)throw new U(g,r[0]);h=Number(w),f=h*2}var b=!f;u.body.forEach(function(F){for(var D=1;D<F.length;D+=2){var q=ze(F[D],"styling"),$=ze(q.body[0],"ordgroup");$.body.unshift(v)}if(b)f<F.length&&(f=F.length);else{var Q=F.length/2;if(h<Q)throw new U("Too many math in a row: "+("expected "+h+", but got "+Q),F[0])}});for(var T=0;T<f;++T){var A="r",I=0;T%2===1?A="l":T>0&&b&&(I=1),i[T]={type:"align",align:A,pregap:I,postgap:0}}return u.colSeparationType=b?"align":"alignat",u};Et({type:"array",names:["array","darray"],props:{numArgs:1},handler(l,n){var r=Ei(n[0]),i=r?[n[0]]:ze(n[0],"ordgroup").body,s=i.map(function(h){var f=Ti(h),v=f.text;if("lcr".includes(v))return{type:"align",align:v};if(v==="|")return{type:"separator",separator:"|"};if(v===":")return{type:"separator",separator:":"};throw new U("Unknown column alignment: "+v,h)}),u={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return Ar(l.parser,u,qu(l.envName))},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(l){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[l.envName.replace("*","")],r="c",i={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(l.envName.charAt(l.envName.length-1)==="*"){var s=l.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new U("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),i.cols=[{type:"align",align:r}]}}var u=Ar(l.parser,i,qu(l.envName)),h=Math.max(0,...u.body.map(f=>f.length));return u.cols=new Array(h).fill({type:"align",align:r}),n?{type:"leftright",mode:l.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(l){var n={arraystretch:.5},r=Ar(l.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["subarray"],props:{numArgs:1},handler(l,n){var r=Ei(n[0]),i=r?[n[0]]:ze(n[0],"ordgroup").body,s=i.map(function(f){var v=Ti(f),g=v.text;if("lc".includes(g))return{type:"align",align:g};throw new U("Unknown column alignment: "+g,f)});if(s.length>1)throw new U("{subarray} can contain only one column");var u={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5},h=Ar(l.parser,u,"script");if(h.body.length>0&&h.body[0].length>1)throw new U("{subarray} can contain only one column");return h},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(l){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Ar(l.parser,n,qu(l.envName));return{type:"leftright",mode:l.mode,body:[r],left:l.envName.includes("r")?".":"\\{",right:l.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Ud,htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(l){k6.has(l.envName)&&Ci(l);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:_u(l.envName),emptySingleRow:!0,leqno:l.parser.settings.leqno};return Ar(l.parser,n,"display")},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Ud,htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(l){Ci(l);var n={autoTag:_u(l.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:l.parser.settings.leqno};return Ar(l.parser,n,"display")},htmlBuilder:At,mathmlBuilder:Mt});Et({type:"array",names:["CD"],props:{numArgs:0},handler(l){return Ci(l),a6(l.parser)},htmlBuilder:At,mathmlBuilder:Mt});k("\\nonumber","\\gdef\\@eqnsw{0}");k("\\notag","\\nonumber");ee({type:"text",names:["\\hline","\\hdashline"],numArgs:0,allowedInText:!0,allowedInMath:!0,handler(l,n){throw new U(l.funcName+" valid only within array environment")}});var S4=$d;ee({type:"environment",names:["\\begin","\\end"],numArgs:1,argTypes:["text"],handler(l,n){var r=l.parser,i=l.funcName,s=n[0];if(s.type!=="ordgroup")throw new U("Invalid environment name",s);var u=Bu(s,"Environment name should contain only text characters and spaces",!0);if(i==="\\begin"){if(!Object.prototype.hasOwnProperty.call(S4,u))throw new U("No such environment: "+u,s);var h=S4[u],f=r.parseArguments("\\begin{"+u+"}",h),v=f.args,g=f.optArgs,w={mode:r.mode,envName:u,parser:r},b=h.handler(w,v,g);r.expect("\\end",!1);var T=r.nextToken,A=ze(r.parseFunction(),"environment");if(A.name!==u)throw new U("Mismatch: \\begin{"+u+"} matched by \\end{"+A.name+"}",T);return b}return{type:"environment",mode:r.mode,name:u,nameGroup:s}}});var S6=(l,n)=>{var r=l.font,i=n.withFont(r);return Pe(l.body,i)},z6=(l,n)=>{var r=l.font,i=n.withFont(r);return $e(l.body,i)},z4={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak"};ee({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],numArgs:1,allowedInArgument:!0,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=Pl(n[0]),u=i in z4?z4[i]:i;return{type:"font",mode:r.mode,font:u.slice(1),body:s}},htmlBuilder:S6,mathmlBuilder:z6});ee({type:"mclass",names:["\\boldsymbol","\\bm"],numArgs:1,handler:(l,n)=>{var r=l.parser,i=n[0];return{type:"mclass",mode:r.mode,mclass:Ai(i),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:i}],isCharacterBox:Vt(i)}}});ee({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],numArgs:0,allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=l.breakOnTokenText,u=r.mode,h=r.parseExpression(!0,s);return{type:"font",mode:u,font:"math"+i.slice(1),body:{type:"ordgroup",mode:r.mode,body:h}}}});var T6=(l,n)=>{var r=n.style,i=r.fracNum(),s=r.fracDen(),u;u=n.havingStyle(i);var h=Pe(l.numer,u,n);if(l.continued){var f=8.5/n.fontMetrics().ptPerEm,v=3.5/n.fontMetrics().ptPerEm;h.height=h.height<f?f:h.height,h.depth=h.depth<v?v:h.depth}u=n.havingStyle(s);var g=Pe(l.denom,u,n),w,b,T;l.hasBarLine?(l.barSize?(b=tn(l.barSize,n),w=E0("frac-line",n,b)):w=E0("frac-line",n),b=w.height,T=w.height):(w=null,b=0,T=n.fontMetrics().defaultRuleThickness);var A,I,F;r.size===ke.DISPLAY.size?(A=n.fontMetrics().num1,b>0?I=3*T:I=7*T,F=n.fontMetrics().denom1):(b>0?(A=n.fontMetrics().num2,I=T):(A=n.fontMetrics().num3,I=3*T),F=n.fontMetrics().denom2);var D;if(w){var $=n.fontMetrics().axisHeight;A-h.depth-($+.5*b)<I&&(A+=I-(A-h.depth-($+.5*b))),$-.5*b-(g.height-F)<I&&(F+=I-($-.5*b-(g.height-F)));var Q=-($-.5*b);D=Be({positionType:"individualShift",children:[{type:"elem",elem:g,shift:F},{type:"elem",elem:w,shift:Q},{type:"elem",elem:h,shift:-A}]})}else{var q=A-h.depth-(g.height-F);q<I&&(A+=.5*(I-q),F+=.5*(I-q)),D=Be({positionType:"individualShift",children:[{type:"elem",elem:g,shift:F},{type:"elem",elem:h,shift:-A}]})}u=n.havingStyle(r),D.height*=u.sizeMultiplier/n.sizeMultiplier,D.depth*=u.sizeMultiplier/n.sizeMultiplier;var re;r.size===ke.DISPLAY.size?re=n.fontMetrics().delim1:r.size===ke.SCRIPTSCRIPT.size?re=n.havingStyle(ke.SCRIPT).fontMetrics().delim2:re=n.fontMetrics().delim2;var ue,ce;return l.leftDelim==null?ue=Il(n,["mopen"]):ue=hu(l.leftDelim,re,!0,n.havingStyle(r),l.mode,["mopen"]),l.continued?ce=H([]):l.rightDelim==null?ce=Il(n,["mclose"]):ce=hu(l.rightDelim,re,!0,n.havingStyle(r),l.mode,["mclose"]),H(["mord"].concat(u.sizingClasses(n)),[ue,H(["mfrac"],[D]),ce],n)},E6=(l,n)=>{var r=new G("mfrac",[$e(l.numer,n),$e(l.denom,n)]);if(!l.hasBarLine)r.setAttribute("linethickness","0px");else if(l.barSize){var i=tn(l.barSize,n);r.setAttribute("linethickness",X(i))}if(l.leftDelim!=null||l.rightDelim!=null){var s=[];if(l.leftDelim!=null){var u=new G("mo",[new pn(l.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),s.push(u)}if(s.push(r),l.rightDelim!=null){var h=new G("mo",[new pn(l.rightDelim.replace("\\",""))]);h.setAttribute("fence","true"),s.push(h)}return Pu(s)}return r},Gd=(l,n)=>{if(!n)return l;var r={type:"styling",mode:l.mode,style:n,body:[l]};return r};ee({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],numArgs:2,allowedInArgument:!0,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=n[0],u=n[1],h,f=null,v=null;switch(i){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":h=!0;break;case"\\\\atopfrac":h=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":h=!1,f="(",v=")";break;case"\\\\bracefrac":h=!1,f="\\{",v="\\}";break;case"\\\\brackfrac":h=!1,f="[",v="]";break;default:throw new Error("Unrecognized genfrac command")}var g=i==="\\cfrac",w=null;return g||i.startsWith("\\d")?w="display":i.startsWith("\\t")&&(w="text"),Gd({type:"genfrac",mode:r.mode,numer:s,denom:u,continued:g,hasBarLine:h,leftDelim:f,rightDelim:v,barSize:null},w)},htmlBuilder:T6,mathmlBuilder:E6});ee({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],numArgs:0,infix:!0,handler(l){var n=l.parser,r=l.funcName,i=l.token,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:s,token:i}}});var T4=["display","text","script","scriptscript"],E4=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};ee({type:"genfrac",names:["\\genfrac"],numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"],handler(l,n){var r=l.parser,i=n[4],s=n[5],u=Pl(n[0]),h=u.type==="atom"&&u.family==="open"?E4(u.text):null,f=Pl(n[1]),v=f.type==="atom"&&f.family==="close"?E4(f.text):null,g=ze(n[2],"size"),w,b=null;g.isBlank?w=!0:(b=g.value,w=b.number>0);var T=null,A=n[3];if(A.type==="ordgroup"){if(A.body.length>0){var I=ze(A.body[0],"textord");T=T4[Number(I.text)]}}else A=ze(A,"textord"),T=T4[Number(A.text)];return Gd({type:"genfrac",mode:r.mode,numer:i,denom:s,continued:!1,hasBarLine:w,barSize:b,leftDelim:h,rightDelim:v},T)}});ee({type:"infix",names:["\\above"],numArgs:1,argTypes:["size"],infix:!0,handler(l,n){var r=l.parser;l.funcName;var i=l.token;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:ze(n[0],"size").value,token:i}}});ee({type:"genfrac",names:["\\\\abovefrac"],numArgs:3,argTypes:["math","size","math"],handler:(l,n)=>{var r=l.parser;l.funcName;var i=n[0],s=ze(n[1],"infix").size;if(!s)throw new Error("\\\\abovefrac expected size, but got "+String(s));var u=n[2],h=s.number>0;return{type:"genfrac",mode:r.mode,numer:i,denom:u,continued:!1,hasBarLine:h,barSize:s,leftDelim:null,rightDelim:null}}});var Wd=(l,n)=>{var r=n.style,i,s;l.type==="supsub"?(i=l.sup?Pe(l.sup,n.havingStyle(r.sup()),n):Pe(l.sub,n.havingStyle(r.sub()),n),s=ze(l.base,"horizBrace")):s=ze(l,"horizBrace");var u=Pe(s.base,n.havingBaseStyle(ke.DISPLAY)),h=zi(s,n),f;if(s.isOver?f=Be({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:h,wrapperClasses:["svg-align"]}]}):f=Be({positionType:"bottom",positionData:u.depth+.1+h.height,children:[{type:"elem",elem:h,wrapperClasses:["svg-align"]},{type:"kern",size:.1},{type:"elem",elem:u}]}),i){var v=H(["minner",s.isOver?"mover":"munder"],[f],n);s.isOver?f=Be({positionType:"firstBaseline",children:[{type:"elem",elem:v},{type:"kern",size:.2},{type:"elem",elem:i}]}):f=Be({positionType:"bottom",positionData:v.depth+.2+i.height+i.depth,children:[{type:"elem",elem:i},{type:"kern",size:.2},{type:"elem",elem:v}]})}return H(["minner",s.isOver?"mover":"munder"],[f],n)},A6=(l,n)=>{var r=Si(l.label);return new G(l.isOver?"mover":"munder",[$e(l.base,n),r])};ee({type:"horizBrace",names:["\\overbrace","\\underbrace","\\overbracket","\\underbracket"],numArgs:1,handler(l,n){var r=l.parser,i=l.funcName;return{type:"horizBrace",mode:r.mode,label:i,isOver:i.includes("\\over"),base:n[0]}},htmlBuilder:Wd,mathmlBuilder:A6});ee({type:"href",names:["\\href"],numArgs:2,argTypes:["url","original"],allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=n[1],s=ze(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:fn(i)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(l,n)=>{var r=xn(l.body,n,!1);return C5(l.href,[],r,n)},mathmlBuilder:(l,n)=>{var r=Tr(l.body,n);return r instanceof G||(r=new G("mrow",[r])),r.setAttribute("href",l.href),r}});ee({type:"href",names:["\\url"],numArgs:1,argTypes:["url"],allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=ze(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:i}))return r.formatUnsupportedCmd("\\url");for(var s=[],u=0;u<i.length;u++){var h=i[u];h==="~"&&(h="\\textasciitilde"),s.push({type:"textord",mode:"text",text:h})}var f={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:i,body:fn(f)}}});ee({type:"hbox",names:["\\hbox"],numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0,handler(l,n){var r=l.parser;return{type:"hbox",mode:r.mode,body:fn(n[0])}},htmlBuilder(l,n){var r=xn(l.body,n.withFont(""),!1);return Gt(r)},mathmlBuilder(l,n){return new G("mrow",Yn(l.body,n.withFont("")))}});ee({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],numArgs:2,argTypes:["raw","original"],allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=l.funcName;l.token;var s=ze(n[0],"raw").string,u=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,f={};switch(i){case"\\htmlClass":f.class=s,h={command:"\\htmlClass",class:s};break;case"\\htmlId":f.id=s,h={command:"\\htmlId",id:s};break;case"\\htmlStyle":f.style=s,h={command:"\\htmlStyle",style:s};break;case"\\htmlData":{for(var v="{,}",g=[],w="",b=0;b<s.length;b++)s.startsWith(v,b)?(w+=",",b+=v.length-1):s[b]===","?(g.push(w),w=""):w+=s[b];g.push(w);for(var T=0;T<g.length;T++){var A=g[T],I=A.indexOf("=");if(I<0)throw new U("\\htmlData key/value '"+A+"' missing equals sign");var F=A.slice(0,I),D=A.slice(I+1);f["data-"+F.trim()]=D}h={command:"\\htmlData",attributes:f};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:f,body:fn(u)}:r.formatUnsupportedCmd(i)},htmlBuilder:(l,n)=>{var r=xn(l.body,n,!1),i=["enclosing"];l.attributes.class&&i.push(...l.attributes.class.trim().split(/\s+/));var s=H(i,r,n);for(var u of Object.entries(l.attributes)){var h=u[0],f=u[1];h!=="class"&&s.setAttribute(h,f)}return s},mathmlBuilder:(l,n)=>Tr(l.body,n)});ee({type:"htmlmathml",names:["\\html@mathml"],numArgs:2,allowedInArgument:!0,allowedInText:!0,handler:(l,n)=>{var r=l.parser;return{type:"htmlmathml",mode:r.mode,html:fn(n[0]),mathml:fn(n[1])}},htmlBuilder:(l,n)=>{var r=xn(l.html,n,!1);return Gt(r)},mathmlBuilder:(l,n)=>Tr(l.mathml,n)});var _o=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new U("Invalid size: '"+n+"' in \\includegraphics");var i={number:+(r[1]+r[2]),unit:r[3]};if(!gd(i))throw new U("Invalid unit: '"+i.unit+"' in \\includegraphics.");return i};ee({type:"includegraphics",names:["\\includegraphics"],numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1,handler:(l,n,r)=>{var i=l.parser,s={number:0,unit:"em"},u={number:.9,unit:"em"},h={number:0,unit:"em"},f="";if(r[0])for(var v=ze(r[0],"raw").string,g=v.split(","),w=0;w<g.length;w++){var b=g[w].split("=");if(b.length===2){var T=b[1].trim();switch(b[0].trim()){case"alt":f=T;break;case"width":s=_o(T);break;case"height":u=_o(T);break;case"totalheight":h=_o(T);break;default:throw new U("Invalid key: '"+b[0]+"' in \\includegraphics.")}}}var A=ze(n[0],"url").url;return f===""&&(f=A,f=f.replace(/^.*[\\/]/,""),f=f.substring(0,f.lastIndexOf("."))),i.settings.isTrusted({command:"\\includegraphics",url:A})?{type:"includegraphics",mode:i.mode,alt:f,width:s,height:u,totalheight:h,src:A}:i.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(l,n)=>{var r=tn(l.height,n),i=0;l.totalheight.number>0&&(i=tn(l.totalheight,n)-r);var s=0;l.width.number>0&&(s=tn(l.width,n));var u={height:X(r+i)};s>0&&(u.width=X(s)),i>0&&(u.verticalAlign=X(-i));var h=new g5(l.src,l.alt,u);return h.height=r,h.depth=i,h},mathmlBuilder:(l,n)=>{var r=new G("mglyph",[]);r.setAttribute("alt",l.alt);var i=tn(l.height,n),s=0;if(l.totalheight.number>0&&(s=tn(l.totalheight,n)-i,r.setAttribute("valign",X(-s))),r.setAttribute("height",X(i+s)),l.width.number>0){var u=tn(l.width,n);r.setAttribute("width",X(u))}return r.setAttribute("src",l.src),r}});ee({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0,handler(l,n){var r=l.parser,i=l.funcName,s=ze(n[0],"size");if(r.settings.strict){var u=i[1]==="m",h=s.value.unit==="mu";u?(h||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" works only in math mode")):h&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(l,n){return Sd(l.dimension,n)},mathmlBuilder(l,n){var r=tn(l.dimension,n);return new Cd(r)}});ee({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],numArgs:1,allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=n[0];return{type:"lap",mode:r.mode,alignment:i.slice(5),body:s}},htmlBuilder:(l,n)=>{var r;l.alignment==="clap"?(r=H([],[Pe(l.body,n)]),r=H(["katex-inner"],[r],n)):r=H(["katex-inner"],[Pe(l.body,n)]);var i=H(["katex-fix"],[]),s=H([l.alignment],[r,i],n),u=H(["katex-strut"]);return u.style.height=X(s.height+s.depth),s.depth&&(u.style.verticalAlign=X(-s.depth)),s.children.unshift(u),s=H(["katex-thinbox"],[s],n),H(["mord","katex-vbox"],[s],n)},mathmlBuilder:(l,n)=>{var r=new G("mpadded",[$e(l.body,n)]);if(l.alignment!=="rlap"){var i=l.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",i+"width")}return r.setAttribute("width","0px"),r}});ee({type:"styling",names:["\\(","$"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(l,n){var r=l.funcName,i=l.parser,s=i.mode;i.switchMode("math");var u=r==="\\("?"\\)":"$",h=i.parseExpression(!1,u);return i.expect(u),i.switchMode(s),{type:"styling",mode:i.mode,style:"text",resetFont:!0,body:h}}});ee({type:"text",names:["\\)","\\]"],numArgs:0,allowedInText:!0,allowedInMath:!1,handler(l,n){throw new U("Mismatched "+l.funcName)}});var A4=(l,n)=>{switch(n.style.size){case ke.DISPLAY.size:return l.display;case ke.TEXT.size:return l.text;case ke.SCRIPT.size:return l.script;case ke.SCRIPTSCRIPT.size:return l.scriptscript;default:return l.text}};ee({type:"mathchoice",names:["\\mathchoice"],numArgs:4,primitive:!0,handler:(l,n)=>{var r=l.parser;return{type:"mathchoice",mode:r.mode,display:fn(n[0]),text:fn(n[1]),script:fn(n[2]),scriptscript:fn(n[3])}},htmlBuilder:(l,n)=>{var r=A4(l,n),i=xn(r,n,!1);return Gt(i)},mathmlBuilder:(l,n)=>{var r=A4(l,n);return Tr(r,n)}});var Xd=(l,n,r,i,s,u,h)=>{l=H([],[l]);var f=r&&Vt(r),v,g;if(n){var w=Pe(n,i.havingStyle(s.sup()),i);g={elem:w,kern:Math.max(i.fontMetrics().bigOpSpacing1,i.fontMetrics().bigOpSpacing3-w.depth)}}if(r){var b=Pe(r,i.havingStyle(s.sub()),i);v={elem:b,kern:Math.max(i.fontMetrics().bigOpSpacing2,i.fontMetrics().bigOpSpacing4-b.height)}}var T;if(g&&v){var A=i.fontMetrics().bigOpSpacing5+v.elem.height+v.elem.depth+v.kern+l.depth+h;T=Be({positionType:"bottom",positionData:A,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:X(-u)},{type:"kern",size:v.kern},{type:"elem",elem:l},{type:"kern",size:g.kern},{type:"elem",elem:g.elem,marginLeft:X(u)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else if(v){var I=l.height-h;T=Be({positionType:"top",positionData:I,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:v.elem,marginLeft:X(-u)},{type:"kern",size:v.kern},{type:"elem",elem:l}]})}else if(g){var F=l.depth+h;T=Be({positionType:"bottom",positionData:F,children:[{type:"elem",elem:l},{type:"kern",size:g.kern},{type:"elem",elem:g.elem,marginLeft:X(u)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else return l;var D=[T];if(v&&u!==0&&!f){var q=H(["mspace"],[],i);q.style.marginRight=X(u),D.unshift(q)}return H(["mop","op-limits"],D,i)},Jd=new Set(["\\smallint"]),Qd=(l,n)=>{var r,i,s=!1,u;l.type==="supsub"?(r=l.sup,i=l.sub,u=ze(l.base,"op"),s=!0):u=ze(l,"op");var h=n.style,f=!1;h.size===ke.DISPLAY.size&&u.symbol&&!Jd.has(u.name)&&(f=!0);var v,g;if(u.symbol){var w=f?"Size2-Regular":"Size1-Regular",b="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(b=u.name.slice(1),u.name=b==="oiint"?"\\iint":"\\iiint"),v=Nn(u.name,w,"math",n,["mop","op-symbol",f?"large-op":"small-op"]),g=v.italic,b.length>0){var T=Td(b+"Size"+(f?"2":"1"),n);v=Be({positionType:"individualShift",children:[{type:"elem",elem:v,shift:0},{type:"elem",elem:T,shift:f?.08:0}]}),u.name="\\"+b,v.classes.unshift("mop"),v.italic=g}}else if(u.body){var A=xn(u.body,n,!0);A.length===1&&A[0]instanceof Jn?(v=A[0],v.classes[0]="mop"):v=H(["mop"],A,n)}else{for(var I=[],F=1;F<u.name.length;F++)I.push(Fu(u.name[F],u.mode,n));v=H(["mop"],I,n)}var D=0,q=0;if((v instanceof Jn||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift){var $;D=(v.height-v.depth)/2-n.fontMetrics().axisHeight,q=($=v.italic)!=null?$:0}return s?Xd(v,r,i,n,h,q,D):(D&&(v.style.position="relative",v.style.top=X(D)),v)},M6=(l,n)=>{var r;if(l.symbol)r=new G("mo",[st(l.name,l.mode)]),Jd.has(l.name)&&r.setAttribute("largeop","false");else if(l.body)r=new G("mo",Yn(l.body,n));else{r=new G("mi",[new pn(l.name.slice(1))]);var i=new G("mo",[st("⁡","text")]);l.parentIsSupSub?r=new G("mrow",[r,i]):r=Md([r,i])}return r},C6={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ee({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],numArgs:0,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=i;return s.length===1&&(s=C6[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Qd,mathmlBuilder:M6});ee({type:"op",names:["\\mathop"],numArgs:1,primitive:!0,handler:(l,n)=>{var r=l.parser,i=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:fn(i)}}});var L6={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ee({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],numArgs:0,handler(l){var n=l.parser,r=l.funcName;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}}});ee({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],numArgs:0,handler(l){var n=l.parser,r=l.funcName;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}}});ee({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],numArgs:0,allowedInArgument:!0,handler(l){var n=l.parser,r=l.funcName,i=r;return i.length===1&&(i=L6[i]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:i}}});var Yd=(l,n)=>{var r,i,s=!1,u;l.type==="supsub"?(r=l.sup,i=l.sub,u=ze(l.base,"operatorname"),s=!0):u=ze(l,"operatorname");var h;if(u.body.length>0){for(var f=u.body.map(b=>{var T="text"in b?b.text:void 0;return typeof T=="string"?{type:"textord",mode:b.mode,text:T}:b}),v=xn(f,n.withFont("mathrm"),!0),g=0;g<v.length;g++){var w=v[g];w instanceof Jn&&(w.text=w.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}h=H(["mop"],v,n)}else h=H(["mop"],[],n);return s?Xd(h,r,i,n,n.style,0,0):h},R6=(l,n)=>{for(var r=Yn(l.body,n.withFont("mathrm")),i=!0,s=0;s<r.length;s++){var u=r[s];if(!(u instanceof Cd))if(u instanceof G)switch(u.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var h=u.children[0];u.children.length===1&&h instanceof pn?h.text=h.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):i=!1;break}default:i=!1}else i=!1}if(i){var f=r.map(w=>w.toText()).join("");r=[new pn(f)]}var v=new G("mi",r);v.setAttribute("mathvariant","normal");var g=new G("mo",[st("⁡","text")]);return l.parentIsSupSub?new G("mrow",[v,g]):Md([v,g])};ee({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],numArgs:1,handler:(l,n)=>{var r=l.parser,i=l.funcName,s=n[0];return{type:"operatorname",mode:r.mode,body:fn(s),alwaysHandleSupSub:i==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Yd,mathmlBuilder:R6});k("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");Jr({type:"ordgroup",htmlBuilder(l,n){return l.semisimple?Gt(xn(l.body,n,!1)):H(["mord"],xn(l.body,n,!0),n)},mathmlBuilder(l,n){return Tr(l.body,n,!0)}});ee({type:"overline",names:["\\overline"],numArgs:1,handler(l,n){var r=l.parser,i=n[0];return{type:"overline",mode:r.mode,body:i}},htmlBuilder(l,n){var r=Pe(l.body,n.havingCrampedStyle()),i=E0("overline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Be({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:i},{type:"kern",size:s}]});return H(["mord","katex-overline"],[u],n)},mathmlBuilder(l,n){var r=new G("mo",[new pn("‾")]);r.setAttribute("stretchy","true");var i=new G("mover",[$e(l.body,n),r]);return i.setAttribute("accent","true"),i}});ee({type:"phantom",names:["\\phantom"],numArgs:1,allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=n[0];return{type:"phantom",mode:r.mode,body:fn(i)}},htmlBuilder:(l,n)=>{var r=xn(l.body,n.withPhantom(),!1);return Gt(r)},mathmlBuilder:(l,n)=>{var r=Yn(l.body,n);return new G("mphantom",r)}});k("\\hphantom","\\smash{\\phantom{#1}}");ee({type:"vphantom",names:["\\vphantom"],numArgs:1,allowedInText:!0,handler:(l,n)=>{var r=l.parser,i=n[0];return{type:"vphantom",mode:r.mode,body:i}},htmlBuilder:(l,n)=>{var r=H(["katex-inner"],[Pe(l.body,n.withPhantom())]),i=H(["katex-fix"],[]);return H(["mord","rlap"],[r,i],n)},mathmlBuilder:(l,n)=>{var r=Yn(fn(l.body),n),i=new G("mphantom",r),s=new G("mpadded",[i]);return s.setAttribute("width","0px"),s}});ee({type:"raisebox",names:["\\raisebox"],numArgs:2,argTypes:["size","hbox"],allowedInText:!0,handler(l,n){var r=l.parser,i=ze(n[0],"size").value,s=n[1];return{type:"raisebox",mode:r.mode,dy:i,body:s}},htmlBuilder(l,n){var r=Pe(l.body,n),i=tn(l.dy,n);return Be({positionType:"shift",positionData:-i,children:[{type:"elem",elem:r}]})},mathmlBuilder(l,n){var r=new G("mpadded",[$e(l.body,n)]),i=l.dy.number+l.dy.unit;return r.setAttribute("voffset",i),r}});var Zd=(l,n)=>{var r=l.parser;return{type:"reflectbox",mode:r.mode,body:n[0]}};ee({type:"reflectbox",names:["\\reflectbox"],numArgs:1,argTypes:["hbox"],allowedInText:!0,handler:Zd,htmlBuilder(l,n){return H(["mord","reflectbox"],[Pe(l.body,n)],n)},mathmlBuilder(l,n){return $e(l.body,n)}});ee({type:"reflectbox",names:["\\mathreflectbox"],numArgs:1,argTypes:["math"],handler:Zd});ee({type:"internal",names:["\\relax"],numArgs:0,allowedInText:!0,allowedInArgument:!0,handler(l){var n=l.parser;return{type:"internal",mode:n.mode}}});ee({type:"rule",names:["\\rule"],numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"],handler(l,n,r){var i=l.parser,s=r[0],u=ze(n[0],"size"),h=ze(n[1],"size");return{type:"rule",mode:i.mode,shift:s&&ze(s,"size").value,width:u.value,height:h.value}},htmlBuilder(l,n){var r=H(["mord","katex-rule"],[],n),i=tn(l.width,n),s=tn(l.height,n),u=l.shift?tn(l.shift,n):0;return r.style.borderRightWidth=X(i),r.style.borderTopWidth=X(s),r.style.bottom=X(u),r.width=i,r.height=s+u,r.depth=-u,r.maxFontSize=s*1.125*n.sizeMultiplier,r},mathmlBuilder(l,n){var r=tn(l.width,n),i=tn(l.height,n),s=l.shift?tn(l.shift,n):0,u=n.color&&n.getColor()||"black",h=new G("mspace");h.setAttribute("mathbackground",u),h.setAttribute("width",X(r)),h.setAttribute("height",X(i));var f=new G("mpadded",[h]);return s>=0?f.setAttribute("height",X(s)):(f.setAttribute("height",X(s)),f.setAttribute("depth",X(-s))),f.setAttribute("voffset",X(s)),f}});function ef(l,n,r){for(var i=xn(l,n,!1),s=n.sizeMultiplier/r.sizeMultiplier,u=0;u<i.length;u++){var h=i[u].classes.indexOf("katex-sizing");h<0?Array.prototype.push.apply(i[u].classes,n.sizingClasses(r)):i[u].classes[h+1]==="reset-size"+n.size&&(i[u].classes[h+1]="reset-size"+r.size),i[u].height*=s,i[u].depth*=s}return Gt(i)}var M4=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],D6=(l,n)=>{var r=n.havingSize(l.size);return ef(l.body,r,n)};ee({type:"sizing",names:M4,numArgs:0,allowedInText:!0,handler:(l,n)=>{var r=l.breakOnTokenText,i=l.funcName,s=l.parser,u=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:M4.indexOf(i)+1,body:u}},htmlBuilder:D6,mathmlBuilder:(l,n)=>{var r=n.havingSize(l.size),i=Yn(l.body,r),s=new G("mstyle",i);return s.setAttribute("mathsize",X(r.sizeMultiplier)),s}});ee({type:"smash",names:["\\smash"],numArgs:1,numOptionalArgs:1,allowedInText:!0,handler:(l,n,r)=>{var i=l.parser,s=!1,u=!1,h=r[0]&&ze(r[0],"ordgroup");if(h)for(var f,v=0;v<h.body.length;++v){var g=h.body[v];if(f=Ti(g).text,f==="t")s=!0;else if(f==="b")u=!0;else{s=!1,u=!1;break}}else s=!0,u=!0;var w=n[0];return{type:"smash",mode:i.mode,body:w,smashHeight:s,smashDepth:u}},htmlBuilder:(l,n)=>{var r=H([],[Pe(l.body,n)]);if(!l.smashHeight&&!l.smashDepth)return r;if(l.smashHeight&&(r.height=0),l.smashDepth&&(r.depth=0),l.smashHeight&&l.smashDepth)return H(["mord","katex-smash"],[r],n);if(r.children)for(var i=0;i<r.children.length;i++)l.smashHeight&&(r.children[i].height=0),l.smashDepth&&(r.children[i].depth=0);var s=Be({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return H(["mord"],[s],n)},mathmlBuilder:(l,n)=>{var r=new G("mpadded",[$e(l.body,n)]);return l.smashHeight&&r.setAttribute("height","0px"),l.smashDepth&&r.setAttribute("depth","0px"),r}});ee({type:"sqrt",names:["\\sqrt"],numArgs:1,numOptionalArgs:1,handler(l,n,r){var i=l.parser,s=r[0],u=n[0];return{type:"sqrt",mode:i.mode,body:u,index:s}},htmlBuilder(l,n){var r=Pe(l.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=A0(r,n);var i=n.fontMetrics(),s=i.defaultRuleThickness,u=s;n.style.id<ke.TEXT.id&&(u=n.fontMetrics().xHeight);var h=s+u/4,f=r.height+r.depth+h+s,v=f6(f,n),g=v.span,w=v.ruleWidth,b=v.advanceWidth,T=g.height-w;T>r.height+r.depth+h&&(h=(h+T-r.height-r.depth)/2);var A=g.height-r.height-h-w;r.style.paddingLeft=X(b);var I=Be({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+A)},{type:"elem",elem:g},{type:"kern",size:w}]});if(l.index){var F=n.havingStyle(ke.SCRIPTSCRIPT),D=Pe(l.index,F,n),q=.6*(I.height-I.depth),$=Be({positionType:"shift",positionData:-q,children:[{type:"elem",elem:D}]}),Q=H(["katex-root"],[$]);return H(["mord","sqrt"],[Q,I],n)}else return H(["mord","sqrt"],[I],n)},mathmlBuilder(l,n){var r=l.body,i=l.index;return i?new G("mroot",[$e(r,n),$e(i,n)]):new G("msqrt",[$e(r,n)])}});var du={display:ke.DISPLAY,text:ke.TEXT,script:ke.SCRIPT,scriptscript:ke.SCRIPTSCRIPT};function F6(l){return l in du}ee({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],numArgs:0,allowedInText:!0,primitive:!0,handler(l,n){var r=l.breakOnTokenText,i=l.funcName,s=l.parser,u=s.parseExpression(!0,r),h=i.slice(1,i.length-5);if(!F6(h))throw new Error("Unknown style: "+h);return{type:"styling",mode:s.mode,style:h,body:u}},htmlBuilder(l,n){var r=du[l.style],i=n.havingStyle(r);return l.resetFont&&(i=i.withFont("")),ef(l.body,i,n)},mathmlBuilder(l,n){var r=du[l.style],i=n.havingStyle(r);l.resetFont&&(i=i.withFont(""));var s=Yn(l.body,i),u=new G("mstyle",s),h={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},f=h[l.style];return u.setAttribute("scriptlevel",f[0]),u.setAttribute("displaystyle",f[1]),u}});var N6=function(n,r){var i=n.base;if(i)if(i.type==="op"){var s=i.limits&&(r.style.size===ke.DISPLAY.size||i.alwaysHandleSupSub);return s?Qd:null}else if(i.type==="operatorname"){var u=i.alwaysHandleSupSub&&(r.style.size===ke.DISPLAY.size||i.limits);return u?Yd:null}else{if(i.type==="accent")return Vt(i.base)?Fd:null;if(i.type==="horizBrace"){var h=!n.sub;return h===i.isOver?Wd:null}else return null}else return null};Jr({type:"supsub",htmlBuilder(l,n){var r=N6(l,n);if(r)return r(l,n);var i=l.base,s=l.sup,u=l.sub,h=Pe(i,n),f,v,g=n.fontMetrics(),w=0,b=0,T=i&&Vt(i);if(s){var A=n.havingStyle(n.style.sup());f=Pe(s,A,n),T||(w=h.height-A.fontMetrics().supDrop*A.sizeMultiplier/n.sizeMultiplier)}if(u){var I=n.havingStyle(n.style.sub());v=Pe(u,I,n),T||(b=h.depth+I.fontMetrics().subDrop*I.sizeMultiplier/n.sizeMultiplier)}var F;n.style===ke.DISPLAY?F=g.sup1:n.style.cramped?F=g.sup3:F=g.sup2;var D=n.sizeMultiplier,q=X(.5/g.ptPerEm/D),$=null;if(v){var Q=l.base&&l.base.type==="op"&&l.base.name&&(l.base.name==="\\oiint"||l.base.name==="\\oiiint");if(h instanceof Jn||Q){var re;$=X(-((re=h.italic)!=null?re:0))}}var ue;if(f&&v){w=Math.max(w,F,f.depth+.25*g.xHeight),b=Math.max(b,g.sub2);var ce=g.defaultRuleThickness,me=4*ce;if(w-f.depth-(v.height-b)<me){b=me-(w-f.depth)+v.height;var ge=.8*g.xHeight-(w-f.depth);ge>0&&(w+=ge,b-=ge)}var Te=[{type:"elem",elem:v,shift:b,marginRight:q,marginLeft:$},{type:"elem",elem:f,shift:-w,marginRight:q}];ue=Be({positionType:"individualShift",children:Te})}else if(v){b=Math.max(b,g.sub1,v.height-.8*g.xHeight);var Ce=[{type:"elem",elem:v,marginLeft:$,marginRight:q}];ue=Be({positionType:"shift",positionData:b,children:Ce})}else if(f)w=Math.max(w,F,f.depth+.25*g.xHeight),ue=Be({positionType:"shift",positionData:-w,children:[{type:"elem",elem:f,marginRight:q}]});else throw new Error("supsub must have either sup or sub.");var on=su(h,"right")||"mord";return H([on],[h,H(["msupsub"],[ue])],n)},mathmlBuilder(l,n){var r=!1,i,s;l.base&&l.base.type==="horizBrace"&&(s=!!l.sup,s===l.base.isOver&&(r=!0,i=l.base.isOver)),l.base&&(l.base.type==="op"||l.base.type==="operatorname")&&(l.base.parentIsSupSub=!0);var u=[$e(l.base,n)];l.sub&&u.push($e(l.sub,n)),l.sup&&u.push($e(l.sup,n));var h;if(r)h=i?"mover":"munder";else if(l.sub)if(l.sup){var g=l.base;g&&g.type==="op"&&g.limits&&n.style===ke.DISPLAY||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(n.style===ke.DISPLAY||g.limits)?h="munderover":h="msubsup"}else{var v=l.base;v&&v.type==="op"&&v.limits&&(n.style===ke.DISPLAY||v.alwaysHandleSupSub)||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(v.limits||n.style===ke.DISPLAY)?h="munder":h="msub"}else{var f=l.base;f&&f.type==="op"&&f.limits&&(n.style===ke.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||n.style===ke.DISPLAY)?h="mover":h="msup"}return new G(h,u)}});Jr({type:"atom",htmlBuilder(l,n){return Fu(l.text,l.mode,n,["m"+l.family])},mathmlBuilder(l,n){var r=new G("mo",[st(l.text,l.mode)]);if(l.family==="bin"){var i=Iu(l,n);i==="bold-italic"&&r.setAttribute("mathvariant",i)}else l.family==="punct"?r.setAttribute("separator","true"):(l.family==="open"||l.family==="close")&&r.setAttribute("stretchy","false");return r}});var nf={mi:"italic",mn:"normal",mtext:"normal"};Jr({type:"mathord",htmlBuilder(l,n){return bi(l,n)},mathmlBuilder(l,n){var r=new G("mi",[st(l.text,l.mode,n)]),i=Iu(l,n)||"italic";return i!==nf[r.type]&&r.setAttribute("mathvariant",i),r}});Jr({type:"textord",htmlBuilder(l,n){return bi(l,n)},mathmlBuilder(l,n){var r=st(l.text,l.mode,n),i=Iu(l,n)||"normal",s;return l.mode==="text"?s=new G("mtext",[r]):/[0-9]/.test(l.text)?s=new G("mn",[r]):l.text==="\\prime"?s=new G("mo",[r]):s=new G("mi",[r]),i!==nf[s.type]&&s.setAttribute("mathvariant",i),s}});var C4=new Map([["\\nobreak","nobreak"],["\\allowbreak","allowbreak"]]),L4=new Map([[" ",{}],["\\ ",{}],["~",{className:"nobreak"}],["\\space",{}],["\\nobreakspace",{className:"nobreak"}]]);Jr({type:"spacing",htmlBuilder(l,n){var r=L4.get(l.text),i=C4.get(l.text);if(r){var s=r.className||"";if(l.mode==="text"){var u=bi(l,n);return u.classes.push(s),u}else return H(["mspace",s],[Fu(l.text,l.mode,n)],n)}else{if(i)return H(["mspace",i],[],n);throw new U('Unknown type of space "'+l.text+'"')}},mathmlBuilder(l,n){var r;if(L4.has(l.text))r=new G("mtext",[new pn(" ")]);else{if(C4.has(l.text))return new G("mspace");throw new U('Unknown type of space "'+l.text+'"')}return r}});var R4=()=>{var l=new G("mtd",[]);return l.setAttribute("width","50%"),l};Jr({type:"tag",mathmlBuilder(l,n){var r=new G("mtable",[new G("mtr",[R4(),new G("mtd",[Tr(l.body,n)]),R4(),new G("mtd",[Tr(l.tag,n)])])]);return r.setAttribute("width","100%"),r}});var D4={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},F4={"\\textbf":"textbf","\\textmd":"textmd"},P6={"\\textit":"textit","\\textup":"textup"},N4=(l,n)=>{var r=l.font;if(r){if(D4[r])return n.withTextFontFamily(D4[r]);if(F4[r])return n.withTextFontWeight(F4[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(P6[r])};ee({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0,handler(l,n){var r=l.parser,i=l.funcName,s=n[0];return{type:"text",mode:r.mode,body:fn(s),font:i}},htmlBuilder(l,n){var r=N4(l,n),i=xn(l.body,r,!0);return H(["mord","text"],i,r)},mathmlBuilder(l,n){var r=N4(l,n);return Tr(l.body,r)}});ee({type:"underline",names:["\\underline"],numArgs:1,allowedInText:!0,handler(l,n){var r=l.parser;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(l,n){var r=Pe(l.body,n),i=E0("underline-line",n),s=n.fontMetrics().defaultRuleThickness,u=Be({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:i},{type:"kern",size:3*s},{type:"elem",elem:r}]});return H(["mord","katex-underline"],[u],n)},mathmlBuilder(l,n){var r=new G("mo",[new pn("‾")]);r.setAttribute("stretchy","true");var i=new G("munder",[$e(l.body,n),r]);return i.setAttribute("accentunder","true"),i}});ee({type:"vcenter",names:["\\vcenter"],numArgs:1,argTypes:["original"],allowedInText:!1,handler(l,n){var r=l.parser;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(l,n){var r=Pe(l.body,n),i=n.fontMetrics().axisHeight,s=.5*(r.height-i-(r.depth+i));return Be({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(l,n){var r=new G("mpadded",[$e(l.body,n)],["vcenter"]);return new G("mrow",[r])}});ee({type:"verb",names:["\\verb"],numArgs:0,allowedInText:!0,handler(l,n,r){throw new U("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(l,n){for(var r=P4(l),i=[],s=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var h=r[u];h==="~"&&(h="\\textasciitilde"),i.push(Nn(h,"Typewriter-Regular",l.mode,s,["mord","texttt"]))}return H(["mord","text"].concat(s.sizingClasses(n)),bd(i),s)},mathmlBuilder(l,n){var r=new pn(P4(l)),i=new G("mtext",[r]);return i.setAttribute("mathvariant","monospace"),i}});var P4=l=>l.body.replace(/ /g,l.star?"␣":" "),xr=Ed,tf=`[ \r
	]`,I6="\\\\[a-zA-Z@]+",B6="\\\\[^\uD800-\uDFFF]",O6="("+I6+")"+tf+"*",_6=`\\\\(
|[ \r	]+
?)[ \r	]*`,fu="[̀-ͯ]",q6=new RegExp(fu+"+$"),j6="("+tf+"+)|"+(_6+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(fu+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(fu+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+O6)+("|"+B6+")");class I4{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(j6,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Xn("EOF",new $n(this,r,r));var i=this.tokenRegex.exec(n);if(i===null||i.index!==r)throw new U("Unexpected character: '"+n[r]+"'",new Xn(n[r],new $n(this,r,r+1)));var s=i[6]||i[3]||(i[2]?"\\ ":" ");if(this.catcodes[s]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Xn(s,new $n(this,r,this.tokenRegex.lastIndex))}}class K6{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new U("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r of Object.keys(n))n[r]===void 0?delete this.current[r]:this.current[r]=n[r]}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return Object.prototype.hasOwnProperty.call(this.current,n)||Object.prototype.hasOwnProperty.call(this.builtins,n)}get(n){return Object.prototype.hasOwnProperty.call(this.current,n)?this.current[n]:Object.prototype.hasOwnProperty.call(this.builtins,n)?this.builtins[n]:void 0}set(n,r,i){if(i===void 0&&(i=!1),i){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!Object.prototype.hasOwnProperty.call(u,n)&&(u[n]=Object.prototype.hasOwnProperty.call(this.current,n)?this.current[n]:void 0)}r==null?delete this.current[n]:this.current[n]=r}}var H6=Vd;k("\\noexpand",function(l){var n=l.popToken();return l.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});k("\\expandafter",function(l){var n=l.popToken();return l.expandOnce(!0),{tokens:[n],numArgs:0}});k("\\@firstoftwo",function(l){var n=l.consumeArgs(2);return{tokens:n[0],numArgs:0}});k("\\@secondoftwo",function(l){var n=l.consumeArgs(2);return{tokens:n[1],numArgs:0}});k("\\@ifnextchar",function(l){var n=l.consumeArgs(3);l.consumeSpaces();var r=l.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});k("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");k("\\TextOrMath",function(l){var n=l.consumeArgs(2);return l.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var B4={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};k("\\char",function(l){var n=l.popToken(),r,i=0;if(n.text==="'")r=8,n=l.popToken();else if(n.text==='"')r=16,n=l.popToken();else if(n.text==="`")if(n=l.popToken(),n.text[0]==="\\")i=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new U("\\char` missing argument");i=n.text.charCodeAt(0)}else r=10;if(r){if(i=B4[n.text],i==null||i>=r)throw new U("Invalid base-"+r+" digit "+n.text);for(var s;(s=B4[l.future().text])!=null&&s<r;)i*=r,i+=s,l.popToken()}return"\\@char{"+i+"}"});var ju=(l,n,r,i)=>{var s=l.consumeArg().tokens;if(s.length!==1)throw new U("\\newcommand's first argument must be a macro name");var u=s[0].text,h=l.isDefined(u);if(h&&!n)throw new U("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!h&&!r)throw new U("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var f=0;if(s=l.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var v="",g=l.expandNextToken();g.text!=="]"&&g.text!=="EOF";)v+=g.text,g=l.expandNextToken();if(!v.match(/^\s*[0-9]+\s*$/))throw new U("Invalid number of arguments: "+v);f=parseInt(v),s=l.consumeArg().tokens}return h&&i||l.macros.set(u,{tokens:s,numArgs:f}),""};k("\\newcommand",l=>ju(l,!1,!0,!1));k("\\renewcommand",l=>ju(l,!0,!1,!1));k("\\providecommand",l=>ju(l,!0,!0,!0));k("\\message",l=>{var n=l.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});k("\\errmessage",l=>{var n=l.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});k("\\show",l=>{var n=l.popToken(),r=n.text;return console.log(n,l.macros.get(r),xr[r],Xe.math[r],Xe.text[r]),""});k("\\bgroup","{");k("\\egroup","}");k("~","\\nobreakspace");k("\\lq","`");k("\\rq","'");k("\\aa","\\r a");k("\\AA","\\r A");k("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");k("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");k("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");k("ℬ","\\mathscr{B}");k("ℰ","\\mathscr{E}");k("ℱ","\\mathscr{F}");k("ℋ","\\mathscr{H}");k("ℐ","\\mathscr{I}");k("ℒ","\\mathscr{L}");k("ℳ","\\mathscr{M}");k("ℛ","\\mathscr{R}");k("ℭ","\\mathfrak{C}");k("ℌ","\\mathfrak{H}");k("ℨ","\\mathfrak{Z}");k("\\Bbbk","\\Bbb{k}");k("\\llap","\\mathllap{\\textrm{#1}}");k("\\rlap","\\mathrlap{\\textrm{#1}}");k("\\clap","\\mathclap{\\textrm{#1}}");k("\\mathstrut","\\vphantom{(}");k("\\underbar","\\underline{\\text{#1}}");k("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');k("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");k("\\ne","\\neq");k("≠","\\neq");k("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");k("∉","\\notin");k("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");k("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");k("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");k("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");k("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");k("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");k("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");k("⟂","\\perp");k("‼","\\mathclose{!\\mkern-0.8mu!}");k("∌","\\notni");k("⌜","\\ulcorner");k("⌝","\\urcorner");k("⌞","\\llcorner");k("⌟","\\lrcorner");k("©","\\copyright");k("®","\\textregistered");k("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');k("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');k("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');k("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');k("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");k("⋮","\\vdots");k("\\varGamma","\\mathit{\\Gamma}");k("\\varDelta","\\mathit{\\Delta}");k("\\varTheta","\\mathit{\\Theta}");k("\\varLambda","\\mathit{\\Lambda}");k("\\varXi","\\mathit{\\Xi}");k("\\varPi","\\mathit{\\Pi}");k("\\varSigma","\\mathit{\\Sigma}");k("\\varUpsilon","\\mathit{\\Upsilon}");k("\\varPhi","\\mathit{\\Phi}");k("\\varPsi","\\mathit{\\Psi}");k("\\varOmega","\\mathit{\\Omega}");k("\\substack","\\begin{subarray}{c}#1\\end{subarray}");k("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");k("\\boxed","\\fbox{$\\displaystyle{#1}$}");k("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");k("\\implies","\\DOTSB\\;\\Longrightarrow\\;");k("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");k("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");k("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var O4={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},$6=new Set(["bin","rel"]);k("\\dots",function(l){var n="\\dotso",r=l.expandAfterFuture().text;return r in O4?n=O4[r]:(r.slice(0,4)==="\\not"||r in Xe.math&&$6.has(Xe.math[r].group))&&(n="\\dotsb"),n});var Ku={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};k("\\dotso",function(l){var n=l.future().text;return n in Ku?"\\ldots\\,":"\\ldots"});k("\\dotsc",function(l){var n=l.future().text;return n in Ku&&n!==","?"\\ldots\\,":"\\ldots"});k("\\cdots",function(l){var n=l.future().text;return n in Ku?"\\@cdots\\,":"\\@cdots"});k("\\dotsb","\\cdots");k("\\dotsm","\\cdots");k("\\dotsi","\\!\\cdots");k("\\dotsx","\\ldots\\,");k("\\DOTSI","\\relax");k("\\DOTSB","\\relax");k("\\DOTSX","\\relax");k("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");k("\\,","\\tmspace+{3mu}{.1667em}");k("\\thinspace","\\,");k("\\>","\\mskip{4mu}");k("\\:","\\tmspace+{4mu}{.2222em}");k("\\medspace","\\:");k("\\;","\\tmspace+{5mu}{.2777em}");k("\\thickspace","\\;");k("\\!","\\tmspace-{3mu}{.1667em}");k("\\negthinspace","\\!");k("\\negmedspace","\\tmspace-{4mu}{.2222em}");k("\\negthickspace","\\tmspace-{5mu}{.277em}");k("\\enspace","\\kern.5em ");k("\\enskip","\\hskip.5em\\relax");k("\\quad","\\hskip1em\\relax");k("\\qquad","\\hskip2em\\relax");k("\\tag","\\@ifstar\\tag@literal\\tag@paren");k("\\tag@paren","\\tag@literal{({#1})}");k("\\tag@literal",l=>{if(l.macros.get("\\df@tag"))throw new U("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});k("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");k("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");k("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");k("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");k("\\newline","\\\\\\relax");k("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var rf=X(Tt["Main-Regular"][84][1]-.7*Tt["Main-Regular"][65][1]);k("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+rf+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");k("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+rf+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");k("\\hspace","\\@ifstar\\@hspacer\\@hspace");k("\\@hspace","\\hskip #1\\relax");k("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");k("\\ordinarycolon",":");k("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");k("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');k("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');k("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');k("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');k("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');k("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');k("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');k("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');k("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');k("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');k("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');k("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');k("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');k("∷","\\dblcolon");k("∹","\\eqcolon");k("≔","\\coloneqq");k("≕","\\eqqcolon");k("⩴","\\Coloneqq");k("\\ratio","\\vcentcolon");k("\\coloncolon","\\dblcolon");k("\\colonequals","\\coloneqq");k("\\coloncolonequals","\\Coloneqq");k("\\equalscolon","\\eqqcolon");k("\\equalscoloncolon","\\Eqqcolon");k("\\colonminus","\\coloneq");k("\\coloncolonminus","\\Coloneq");k("\\minuscolon","\\eqcolon");k("\\minuscoloncolon","\\Eqcolon");k("\\coloncolonapprox","\\Colonapprox");k("\\coloncolonsim","\\Colonsim");k("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");k("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");k("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");k("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");k("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");k("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");k("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");k("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");k("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");k("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");k("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");k("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");k("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");k("\\nleqq","\\html@mathml{\\@nleqq}{≰}");k("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");k("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");k("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");k("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");k("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");k("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");k("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");k("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");k("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");k("\\imath","\\html@mathml{\\@imath}{ı}");k("\\jmath","\\html@mathml{\\@jmath}{ȷ}");k("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");k("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");k("⟦","\\llbracket");k("⟧","\\rrbracket");k("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");k("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");k("↤","\\mapsfrom");k("\\mapsfrom","\\html@mathml{\\mathrel{\\mathreflectbox{\\mapsto}}}{\\mathrel{\\char`↤}}");k("⦃","\\lBrace");k("⦄","\\rBrace");k("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");k("⦵","\\minuso");k("\\darr","\\downarrow");k("\\dArr","\\Downarrow");k("\\Darr","\\Downarrow");k("\\lang","\\langle");k("\\rang","\\rangle");k("\\uarr","\\uparrow");k("\\uArr","\\Uparrow");k("\\Uarr","\\Uparrow");k("\\N","\\mathbb{N}");k("\\R","\\mathbb{R}");k("\\Z","\\mathbb{Z}");k("\\alef","\\aleph");k("\\alefsym","\\aleph");k("\\Alpha","\\mathrm{A}");k("\\Beta","\\mathrm{B}");k("\\bull","\\bullet");k("\\Chi","\\mathrm{X}");k("\\clubs","\\clubsuit");k("\\cnums","\\mathbb{C}");k("\\Complex","\\mathbb{C}");k("\\Dagger","\\ddagger");k("\\diamonds","\\diamondsuit");k("\\empty","\\emptyset");k("\\Epsilon","\\mathrm{E}");k("\\Eta","\\mathrm{H}");k("\\exist","\\exists");k("\\harr","\\leftrightarrow");k("\\hArr","\\Leftrightarrow");k("\\Harr","\\Leftrightarrow");k("\\hearts","\\heartsuit");k("\\image","\\Im");k("\\infin","\\infty");k("\\Iota","\\mathrm{I}");k("\\isin","\\in");k("\\Kappa","\\mathrm{K}");k("\\larr","\\leftarrow");k("\\lArr","\\Leftarrow");k("\\Larr","\\Leftarrow");k("\\lrarr","\\leftrightarrow");k("\\lrArr","\\Leftrightarrow");k("\\Lrarr","\\Leftrightarrow");k("\\Mu","\\mathrm{M}");k("\\natnums","\\mathbb{N}");k("\\Nu","\\mathrm{N}");k("\\Omicron","\\mathrm{O}");k("\\plusmn","\\pm");k("\\rarr","\\rightarrow");k("\\rArr","\\Rightarrow");k("\\Rarr","\\Rightarrow");k("\\real","\\Re");k("\\reals","\\mathbb{R}");k("\\Reals","\\mathbb{R}");k("\\Rho","\\mathrm{P}");k("\\sdot","\\cdot");k("\\sect","\\S");k("\\spades","\\spadesuit");k("\\sub","\\subset");k("\\sube","\\subseteq");k("\\supe","\\supseteq");k("\\Tau","\\mathrm{T}");k("\\thetasym","\\vartheta");k("\\weierp","\\wp");k("\\Zeta","\\mathrm{Z}");k("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");k("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");k("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");k("\\bra","\\mathinner{\\langle{#1}|}");k("\\ket","\\mathinner{|{#1}\\rangle}");k("\\braket","\\mathinner{\\langle{#1}\\rangle}");k("\\Bra","\\left\\langle#1\\right|");k("\\Ket","\\left|#1\\right\\rangle");var lf=l=>n=>{var r=n.consumeArg().tokens,i=n.consumeArg().tokens,s=n.consumeArg().tokens,u=n.consumeArg().tokens,h=n.macros.get("|"),f=n.macros.get("\\|");n.macros.beginGroup();var v=b=>T=>{l&&(T.macros.set("|",h),s.length&&T.macros.set("\\|",f));var A=b;if(!b&&s.length){var I=T.future();I.text==="|"&&(T.popToken(),A=!0)}return{tokens:A?s:i,numArgs:0}};n.macros.set("|",v(!1)),s.length&&n.macros.set("\\|",v(!0));var g=n.consumeArg().tokens,w=n.expandTokens([...u,...g,...r]);return n.macros.endGroup(),{tokens:w.reverse(),numArgs:0}};k("\\bra@ket",lf(!1));k("\\bra@set",lf(!0));k("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");k("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");k("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");k("\\angln","{\\angl n}");k("\\blue","\\textcolor{##6495ed}{#1}");k("\\orange","\\textcolor{##ffa500}{#1}");k("\\pink","\\textcolor{##ff00af}{#1}");k("\\red","\\textcolor{##df0030}{#1}");k("\\green","\\textcolor{##28ae7b}{#1}");k("\\gray","\\textcolor{gray}{#1}");k("\\purple","\\textcolor{##9d38bd}{#1}");k("\\blueA","\\textcolor{##ccfaff}{#1}");k("\\blueB","\\textcolor{##80f6ff}{#1}");k("\\blueC","\\textcolor{##63d9ea}{#1}");k("\\blueD","\\textcolor{##11accd}{#1}");k("\\blueE","\\textcolor{##0c7f99}{#1}");k("\\tealA","\\textcolor{##94fff5}{#1}");k("\\tealB","\\textcolor{##26edd5}{#1}");k("\\tealC","\\textcolor{##01d1c1}{#1}");k("\\tealD","\\textcolor{##01a995}{#1}");k("\\tealE","\\textcolor{##208170}{#1}");k("\\greenA","\\textcolor{##b6ffb0}{#1}");k("\\greenB","\\textcolor{##8af281}{#1}");k("\\greenC","\\textcolor{##74cf70}{#1}");k("\\greenD","\\textcolor{##1fab54}{#1}");k("\\greenE","\\textcolor{##0d923f}{#1}");k("\\goldA","\\textcolor{##ffd0a9}{#1}");k("\\goldB","\\textcolor{##ffbb71}{#1}");k("\\goldC","\\textcolor{##ff9c39}{#1}");k("\\goldD","\\textcolor{##e07d10}{#1}");k("\\goldE","\\textcolor{##a75a05}{#1}");k("\\redA","\\textcolor{##fca9a9}{#1}");k("\\redB","\\textcolor{##ff8482}{#1}");k("\\redC","\\textcolor{##f9685d}{#1}");k("\\redD","\\textcolor{##e84d39}{#1}");k("\\redE","\\textcolor{##bc2612}{#1}");k("\\maroonA","\\textcolor{##ffbde0}{#1}");k("\\maroonB","\\textcolor{##ff92c6}{#1}");k("\\maroonC","\\textcolor{##ed5fa6}{#1}");k("\\maroonD","\\textcolor{##ca337c}{#1}");k("\\maroonE","\\textcolor{##9e034e}{#1}");k("\\purpleA","\\textcolor{##ddd7ff}{#1}");k("\\purpleB","\\textcolor{##c6b9fc}{#1}");k("\\purpleC","\\textcolor{##aa87ff}{#1}");k("\\purpleD","\\textcolor{##7854ab}{#1}");k("\\purpleE","\\textcolor{##543b78}{#1}");k("\\mintA","\\textcolor{##f5f9e8}{#1}");k("\\mintB","\\textcolor{##edf2df}{#1}");k("\\mintC","\\textcolor{##e0e5cc}{#1}");k("\\grayA","\\textcolor{##f6f7f7}{#1}");k("\\grayB","\\textcolor{##f0f1f2}{#1}");k("\\grayC","\\textcolor{##e3e5e6}{#1}");k("\\grayD","\\textcolor{##d6d8da}{#1}");k("\\grayE","\\textcolor{##babec2}{#1}");k("\\grayF","\\textcolor{##888d93}{#1}");k("\\grayG","\\textcolor{##626569}{#1}");k("\\grayH","\\textcolor{##3b3e40}{#1}");k("\\grayI","\\textcolor{##21242c}{#1}");k("\\kaBlue","\\textcolor{##314453}{#1}");k("\\kaGreen","\\textcolor{##71B307}{#1}");var af={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class V6{constructor(n,r,i){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new K6(H6,r.macros),this.mode=i,this.stack=[]}feed(n){this.lexer=new I4(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,i,s;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken();var u=this.consumeArg(["]"]);s=u.tokens,i=u.end}else{var h=this.consumeArg();s=h.tokens,r=h.start,i=h.end}return this.pushToken(new Xn("EOF",i.loc)),this.pushTokens(s),new Xn("",$n.range(r,i))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],i=n&&n.length>0;i||this.consumeSpaces();var s=this.future(),u,h=0,f=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++h;else if(u.text==="}"){if(--h,h===-1)throw new U("Extra }",u)}else if(u.text==="EOF")throw new U("Unexpected end of input in a macro argument, expected '"+(n&&i?n[f]:"}")+"'",u);if(n&&i)if((h===0||h===1&&n[f]==="{")&&u.text===n[f]){if(++f,f===n.length){r.splice(-f,f);break}}else f=0}while(h!==0||i);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new U("The length of delimiters doesn't match the number of args!");for(var i=r[0],s=0;s<i.length;s++){var u=this.popToken();if(i[s]!==u.text)throw new U("Use of the macro doesn't match its definition",u)}}for(var h=[],f=0;f<n;f++)h.push(this.consumeArg(r&&r[f+1]).tokens);return h}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new U("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),i=r.text,s=r.noexpand?null:this._getExpansion(i);if(s==null||n&&s.unexpandable){if(n&&s==null&&i[0]==="\\"&&!this.isDefined(i))throw new U("Undefined control sequence: "+i);return this.pushToken(r),!1}this.countExpansion(1);var u=s.tokens,h=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){u=u.slice();for(var f=u.length-1;f>=0;--f){var v=u[f];if(v.text==="#"){if(f===0)throw new U("Incomplete placeholder at end of macro body",v);if(v=u[--f],v.text==="#")u.splice(f+1,1);else if(/^[1-9]$/.test(v.text))u.splice(f,2,...h[+v.text-1]);else throw new U("Not a valid argument number",v)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Xn(n)]):void 0}expandTokens(n){var r=[],i=this.stack.length;for(this.pushTokens(n);this.stack.length>i;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(i=>i.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var i=this.lexer.catcodes[n];if(i!=null&&i!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var u=0;if(s.includes("#"))for(var h=s.replace(/##/g,"");h.includes("#"+(u+1));)++u;for(var f=new I4(s,this.settings),v=[],g=f.lex();g.text!=="EOF";)v.push(g),g=f.lex();v.reverse();var w={tokens:v,numArgs:u};return w}return s}isDefined(n){return this.macros.has(n)||Object.prototype.hasOwnProperty.call(xr,n)||Object.prototype.hasOwnProperty.call(Xe.math,n)||Object.prototype.hasOwnProperty.call(Xe.text,n)||Object.prototype.hasOwnProperty.call(af,n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Object.prototype.hasOwnProperty.call(xr,n)&&!xr[n].primitive}}var _4=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ri=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),qo={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},q4={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Li{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new V6(n,r,this.mode),this.settings=r,this.leftrightDepth=0,this.nextToken=null}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new U("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Xn("}")),this.gullet.pushTokens(n);var i=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,i}parseExpression(n,r){for(var i=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(Li.endOfExpression.has(s.text)||r&&s.text===r||n&&xr[s.text]&&xr[s.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;i.push(u)}return this.mode==="text"&&this.formLigatures(i),this.handleInfixNodes(i)}handleInfixNodes(n){for(var r=-1,i,s=0;s<n.length;s++){var u=n[s];if(u.type==="infix"){if(r!==-1)throw new U("only one infix operator per group",u.token);r=s,i=u.replaceWith}}if(r!==-1&&i){var h,f,v=n.slice(0,r),g=n.slice(r+1);v.length===1&&v[0].type==="ordgroup"?h=v[0]:h={type:"ordgroup",mode:this.mode,body:v},g.length===1&&g[0].type==="ordgroup"?f=g[0]:f={type:"ordgroup",mode:this.mode,body:g};var w;return i==="\\\\abovefrac"?w=this.callFunction(i,[h,n[r],f],[]):w=this.callFunction(i,[h,f],[]),[w]}else return n}handleSupSubscript(n){var r=this.fetch(),i=r.text;this.consume(),this.consumeSpaces();var s;do{var u;s=this.parseGroup(n)}while(((u=s)==null?void 0:u.type)==="internal");if(!s)throw new U("Expected group after '"+i+"'",r);return s}formatUnsupportedCmd(n){for(var r=[],i=0;i<n.length;i++)r.push({type:"textord",mode:"text",text:n[i]});var s={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var i,s;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op")r.limits=u.text==="\\limits",r.alwaysHandleSupSub=!0;else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new U("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(i)throw new U("Double superscript",u);i=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(s)throw new U("Double subscript",u);s=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(i)throw new U("Double superscript",u);var h={type:"textord",mode:this.mode,text:"\\prime"},f=[h];for(this.consume();this.fetch().text==="'";)f.push(h),this.consume();this.fetch().text==="^"&&f.push(this.handleSupSubscript("superscript")),i={type:"ordgroup",mode:this.mode,body:f}}else if(ri[u.text]){var v=_4.test(u.text),g=[];for(g.push(new Xn(ri[u.text])),this.consume();;){var w=this.fetch().text;if(!ri[w]||_4.test(w)!==v)break;g.unshift(new Xn(ri[w])),this.consume()}var b=this.subparse(g);v?s={type:"ordgroup",mode:"math",body:b}:i={type:"ordgroup",mode:"math",body:b}}else break}return i&&s?{type:"supsub",mode:this.mode,base:r,sup:i,sub:s}:i?{type:"supsub",mode:this.mode,base:r,sup:i}:s?{type:"supsub",mode:this.mode,base:r,sub:s}:r}parseFunction(n,r){var i=this.fetch(),s=i.text,u=xr[s];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new U("Got function '"+s+"' with no arguments"+(r?" as "+r:""),i);if(this.mode==="text"&&!u.allowedInText)throw new U("Can't use function '"+s+"' in text mode",i);if(this.mode==="math"&&u.allowedInMath===!1)throw new U("Can't use function '"+s+"' in math mode",i);var h=this.parseArguments(s,u),f=h.args,v=h.optArgs;return this.callFunction(s,f,v,i,n)}callFunction(n,r,i,s,u){var h={funcName:n,parser:this,token:s,breakOnTokenText:u},f=xr[n];if(f&&f.handler)return f.handler(h,r,i);throw new U("No function handler for "+n)}parseArguments(n,r){var i,s=(i=r.numOptionalArgs)!=null?i:0,u=r.numArgs+s;if(u===0)return{args:[],optArgs:[]};for(var h=[],f=[],v=0;v<u;v++){var g,w=(g=r.argTypes)==null?void 0:g[v],b=v<s;("primitive"in r&&r.primitive&&w==null||r.type==="sqrt"&&v===1&&f[0]==null)&&(w="primitive");var T=this.parseGroupOfType("argument to '"+n+"'",w,b);if(b)f.push(T);else if(T!=null)h.push(T);else throw new U("Null argument, please report this as a bug")}return{args:h,optArgs:f}}parseGroupOfType(n,r,i){switch(r){case"color":return this.parseColorGroup(i);case"size":return this.parseSizeGroup(i);case"url":return this.parseUrlGroup(i);case"math":case"text":return this.parseArgumentGroup(i,r);case"hbox":{var s=this.parseArgumentGroup(i,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text",resetFont:!0}:null}case"raw":{var u=this.parseStringGroup(i);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(i)throw new U("A primitive argument cannot be optional");var h=this.parseGroup(n);if(h==null)throw new U("Expected group as "+n,this.fetch());return h}case"original":case void 0:return this.parseArgumentGroup(i);default:throw new U("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n){var r=this.gullet.scanArgument(n);if(r==null)return null;for(var i="",s;(s=this.fetch()).text!=="EOF";)i+=s.text,this.consume();return this.consume(),r.text=i,r}parseRegexGroup(n,r){for(var i=this.fetch(),s=i,u="",h;(h=this.fetch()).text!=="EOF"&&n.test(u+h.text);)s=h,u+=s.text,this.consume();if(u==="")throw new U("Invalid "+r+": '"+i.text+"'",i);return i.range(s,u)}parseColorGroup(n){var r=this.parseStringGroup(n);if(r==null)return null;var i=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!i)throw new U("Invalid color: '"+r.text+"'",r);var s=i[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(n){var r,i=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup(n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",i=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new U("Invalid size: '"+r.text+"'",r);var u={number:+(s[1]+s[2]),unit:s[3]};if(!gd(u))throw new U("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:i}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup(n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var i=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:i}}parseArgumentGroup(n,r){var i=this.gullet.scanArgument(n);if(i==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var h={type:"ordgroup",mode:this.mode,loc:i.loc,body:u};return r&&this.switchMode(s),h}parseGroup(n,r){var i=this.fetch(),s=i.text,u;if(s==="{"||s==="\\begingroup"){this.consume();var h=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var f=this.parseExpression(!1,h),v=this.fetch();this.expect(h),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:$n.range(i,v),body:f,semisimple:s==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&s[0]==="\\"&&!Object.prototype.hasOwnProperty.call(af,s)){if(this.settings.throwOnError)throw new U("Undefined control sequence: "+s,i);u=this.formatUnsupportedCmd(s),this.consume()}return u}formLigatures(n){for(var r=n.length-1,i=0;i<r;++i){var s=n[i];if(s.type==="textord"){var u=s.text,h=n[i+1];if(!(!h||h.type!=="textord")){if(u==="-"&&h.text==="-"){var f=n[i+2];i+1<r&&f&&f.type==="textord"&&f.text==="-"?(n.splice(i,3,{type:"textord",mode:"text",loc:$n.range(s,f),text:"---"}),r-=2):(n.splice(i,2,{type:"textord",mode:"text",loc:$n.range(s,h),text:"--"}),r-=1)}(u==="'"||u==="`")&&h.text===u&&(n.splice(i,2,{type:"textord",mode:"text",loc:$n.range(s,h),text:u+u}),r-=1)}}}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var i=r.slice(5),s=i.charAt(0)==="*";if(s&&(i=i.slice(1)),i.length<2||i.charAt(0)!==i.slice(-1))throw new U(`\\verb assertion failed --
                    please report what input caused this bug`);return i=i.slice(1,-1),{type:"verb",mode:"text",body:i,star:s}}Object.prototype.hasOwnProperty.call(q4,r[0])&&!Xe[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=q4[r[0]]+r.slice(1));var u=q6.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var h;if(Xe[this.mode][r]){this.settings.strict&&this.mode==="math"&&Zo.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var f=Xe[this.mode][r].group,v=$n.range(n),g;Q5(f)?g={type:"atom",mode:this.mode,family:f,loc:v,text:r}:g={type:f,mode:this.mode,loc:v,text:r},h=g}else if(r.charCodeAt(0)>=128)this.settings.strict&&(vd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),h={type:"textord",mode:"text",loc:$n.range(n),text:r};else return null;if(this.consume(),u)for(var w=0;w<u[0].length;w++){var b=u[0][w];if(!qo[b])throw new U("Unknown accent ' "+b+"'",n);var T=qo[b][this.mode]||qo[b].text;if(!T)throw new U("Accent "+b+" unsupported in "+this.mode+" mode",n);h={type:"accent",mode:this.mode,loc:$n.range(n),label:T,isStretchy:!1,isShifty:!0,base:h}}return h}}Li.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Hu=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var i=new Li(n,r);delete i.gullet.macros.current["\\df@tag"];var s=i.parse();if(delete i.gullet.macros.current["\\current@color"],delete i.gullet.macros.current["\\color"],i.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new U("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:i.subparse([new Xn("\\df@tag")])}]}return s},sf=function(n,r,i){r.textContent="";var s=$u(n,i).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),sf=function(){throw new U("KaTeX doesn't work in quirks mode.")});var U6=function(n,r){var i=$u(n,r).toMarkup();return i},G6=function(n,r){var i=new Cu(r);return Hu(n,i)},of=function(n,r,i){if(i.throwOnError||!(n instanceof U))throw n;var s=H(["katex-error"],[new Jn(r)]);return s.setAttribute("title",n.toString()),s.setAttribute("style","color:"+i.errorColor),s},$u=function(n,r){var i=new Cu(r);try{var s=Hu(n,i);return j5(s,n,i)}catch(u){return of(u,n,i)}},W6=function(n,r){var i=new Cu(r);try{var s=Hu(n,i);return K5(s,n,i)}catch(u){return of(u,n,i)}},X6="0.18.9",J6={Span:R0,Anchor:wi,SymbolNode:Jn,SvgNode:Ht,PathNode:Sr,LineNode:Yo},Q6={version:X6,render:sf,renderToString:U6,ParseError:U,SETTINGS_SCHEMA:Xo,__parse:G6,__renderToDomTree:$u,__renderToHTMLTree:W6,__setFontMetrics:b5,__defineSymbol:d,__defineFunction:ee,__defineMacro:k,__domTree:J6};const Y6={p:{hex:"#d6479f",concept:"현실·데이터 분포",symbols:"p, p(x), p̂(경험분포), p_t(디퓨전 주변분포)"},q:{hex:"#7f8f10",concept:"모형·근사 분포, 정책",symbols:"q, q_θ, π, π_θ, π*"},ref:{hex:"#139696",concept:"기준·사전 분포",symbols:"π_ref, 사전분포"},theta:{hex:"#3b7de0",concept:"자연모수 (e-계열)",symbols:"θ(7장 이후 자연모수), e-측지선·e-사영·∇⁽ᵉ⁾"},eta:{hex:"#e0504a",concept:"기대모수 (m-계열), 쌍대 기울기 변수",symbols:"η, m-측지선·m-사영·∇⁽ᵐ⁾, 6장 운동량 p"},xi:{hex:"#2e9e6e",concept:"일반 모수·좌표",symbols:"μ, σ, 일반 모수 θ(1–3·9장), 가중치 w, W"},F:{hex:"#7d8a3a",concept:"로그정규화자",symbols:"F(θ), Z"},Fstar:{hex:"#c0622f",concept:"쌍대 퍼텐셜 (르장드르 변환)",symbols:"F*(η), f*, 6장 해밀토니안 ℋ"},f:{hex:"#5b6fe0",concept:"일반 볼록함수",symbols:"f, 6장 라그랑지안 L"},t:{hex:"#0e93b0",concept:"충분통계량·캐리어",symbols:"t(x), k(x)"},H:{hex:"#9467bd",concept:"엔트로피 계열",symbols:"H(p), H(p,q)"},D:{hex:"#c2398a",concept:"발산",symbols:"KL, D_f, B_F, D_α"},I:{hex:"#0e8f8f",concept:"Fisher 정보·계량",symbols:"I(θ), g_ij"},alpha:{hex:"#8f7a5a",concept:"접속·발산 지수",symbols:"α"},x:{hex:"#6f8fa6",concept:"데이터 표본",symbols:"x, x_t"},z:{hex:"#8a7fb0",concept:"잠재변수·노이즈 표본",symbols:"z, ε(표준정규 노이즈)"},v:{hex:"#d07a12",concept:"속도장",symbols:"v(x,t)"},score:{hex:"#b0892a",concept:"스코어",symbols:"∇ₓ log p, s_θ"},r:{hex:"#d0721f",concept:"보상",symbols:"r"},beta:{hex:"#9c6b52",concept:"온도·KL 계수",symbols:"β"},ell:{hex:"#b58a00",concept:"로그우도·ELBO",symbols:"ℓ(θ), log p(x), ELBO"},loss:{hex:"#c05080",concept:"손실",symbols:"𝓛"}},T7=Object.fromEntries(Object.entries(Y6).map(([l,n])=>[l,n.hex])),Z6={T:{name:"선생님",color:"#243b61",tint:"#7f9cc9"},M:{name:"김민준",color:"#8d939a",tint:"#a9aeb4"},S:{name:"이서연",color:"#4f8a5f",tint:"#6fae80"}};qe.setOptions({breaks:!0,gfm:!0});const uf="/infogeo-book/",e7=/^(`{3,})(\w*)[^\n]*\n([\s\S]*?)\n\1[ \t]*$/gm,n7=/^\{\{viz:\s*([^}]+?)\s*\}\}\s*$/;function t7(l){let n=!1;return l.split(`
`).map(r=>/^\s*```/.test(r)?(n=!n,r.replace(/^ {1,5}/,"")):n?r:r.replace(/^ {1,5}/,"")).join(`
`)}function r7(l){const n=/^\s*\\begin\{array\}/.test(l);let r;try{r=Q6.renderToString(l,{displayMode:!0,throwOnError:!1,strict:"ignore"})}catch{r=`<pre>${l}</pre>`}return`<div class="${n?"math-legend":"math-display"}">${r}</div>`}function l7(l){return l.replace(/(<h2[^>]*>(?:[^<]*호기심 상자[^<]*)<\/h2>)([\s\S]*?)(?=<h2[ >]|<hr[ />]|$)/g,'<div class="curiosity-box">$1$2</div>')}function a7(l){return l.replace(/(<img\s[^>]*src=")\/images\//g,`$1${uf}images/`)}const cf=Object.fromEntries(Object.entries(Z6).map(([l,n])=>[n.name,l])),j4=Object.keys(cf).join("|");function i7(l){return l=l.replace(new RegExp(`<p>〔([TMS])(\\d{2})〕\\s*(<strong>(?:${j4}):</strong>)`,"g"),(n,r,i,s)=>`<p class="dlg dlg-${r} has-face"><span class="face-slot face-${r}" aria-hidden="true"><span class="face-code">${r}${i}</span><img src="${uf}images/faces/${r}${i}.png" alt="" loading="lazy" onerror="this.remove()"></span>${s}`),l=l.replace(new RegExp(`<p>(<strong>(${j4}):</strong>)`,"g"),(n,r,i)=>`<p class="dlg dlg-${cf[i]}">${r}`),l}function s7(l){const n=[],r=t7(l).replace(e7,(s,u,h,f)=>h!=="latex"?s:(n.push(f),`
@@MATH${n.length-1}@@
`));let i=qe.parse(r);return i=i.replace(/<p>@@MATH(\d+)@@<\/p>/g,(s,u)=>r7(n[+u])),a7(i7(l7(i)))}function o7(l){const n=[];let r=[],i=!1;for(const s of l.split(`
`)){/^\s*```/.test(s)&&(i=!i);const u=!i&&s.match(n7);u?(r.length&&n.push({type:"prose",md:r.join(`
`)}),n.push({type:"viz",key:u[1]}),r=[]):r.push(s)}return r.length&&n.push({type:"prose",md:r.join(`
`)}),n}function u7({markdown:l}){const n=J.useMemo(()=>s7(l),[l]);return ie.jsx("div",{className:"prose-content",dangerouslySetInnerHTML:{__html:n}})}function c7({component:l}){return ie.jsxs("div",{style:{margin:"40px -24px",borderTop:`1px solid ${we.border}`,borderBottom:`1px solid ${we.border}`,background:we.bg},children:[ie.jsx("div",{style:{padding:"12px 24px 4px",fontSize:11,color:we.accentDim,fontFamily:at.mono,letterSpacing:1,textTransform:"uppercase"},children:"인터랙티브 시각화"}),ie.jsx(J.Suspense,{fallback:ie.jsx("div",{style:{padding:40,textAlign:"center",color:we.textDim,fontFamily:at.mono,fontSize:12},children:"불러오는 중…"}),children:ie.jsx(l,{})})]})}function h7(){const l=[];for(let n=0;n<Kt.length;n++){const r=Kt[n],i=gi(r.md);for(let s=0;s<i.length;s++)l.push({chapterIdx:n,sectionIdx:s,slug:r.slug})}return l}let jo=null;function d7(){return jo||(jo=h7()),jo}function hf(l,n){const r=d7(),i=r.findIndex(h=>h.slug===l.slug&&h.sectionIdx===n),s=i>0?r[i-1]:null,u=i<r.length-1?r[i+1]:null;return{prev:s,next:u}}function pi(l){if(!l)return"";const n=Kt[l.chapterIdx],r=gi(n.md),{title:i}=xu(r[l.sectionIdx]||"");return i||"들어가며"}function f7({chapter:l,sectionIdx:n,totalSections:r}){const{prev:i,next:s}=hf(l,n),u={color:we.textDim,textDecoration:"none",transition:"color 0.2s"},h=i?Kt[i.chapterIdx]:null,f=s?Kt[s.chapterIdx]:null;return ie.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"24px 0",marginTop:40,borderTop:`1px solid ${we.border}`,fontFamily:at.mono,fontSize:12},children:[i?ie.jsxs(kr,{to:`/${i.slug}/${i.sectionIdx}`,style:u,children:["← ",h.id!==l.id?`${h.id}. ${h.title} · `:"",pi(i)]}):ie.jsx("span",{}),s?ie.jsxs(kr,{to:`/${s.slug}/${s.sectionIdx}`,style:u,children:[f.id!==l.id?`${f.id}. ${f.title} · `:"",pi(s)," →"]}):ie.jsx("span",{})]})}function p7({chapter:l,sectionIdx:n}){const{prev:r,next:i}=hf(l,n),s=r?Kt[r.chapterIdx]:null,u=i?Kt[i.chapterIdx]:null;return ie.jsxs(ie.Fragment,{children:[r&&ie.jsx(kr,{to:`/${r.slug}/${r.sectionIdx}`,className:"side-arrow side-arrow-left",title:`${s.id!==l.id?`${s.id}. ${s.title} · `:""}${pi(r)}`,"aria-label":"이전 페이지",children:"‹"}),i&&ie.jsx(kr,{to:`/${i.slug}/${i.sectionIdx}`,className:"side-arrow side-arrow-right",title:`${u.id!==l.id?`${u.id}. ${u.title} · `:""}${pi(i)}`,"aria-label":"다음 페이지",children:"›"})]})}function m7({chapter:l}){const{sectionIdx:n}=Y2(),r=parseInt(n,10)||0;J.useEffect(()=>{window.scrollTo(0,0)},[l.slug,r]);const i=J.useMemo(()=>gi(l.md),[l.md]),{title:s,vizKeys:u,prose:h}=J.useMemo(()=>xu(i[r]||""),[i,r]),f=J.useMemo(()=>[...o7(h),...u.map(g=>({type:"viz",key:g}))],[h,u]),v=r===0;return ie.jsxs("div",{style:{minHeight:"100vh",background:we.bg,color:we.text},children:[ie.jsx(p7,{chapter:l,sectionIdx:r}),ie.jsx("div",{style:{padding:"60px 24px 24px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)"},children:ie.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[ie.jsxs("div",{style:{fontSize:13,color:we.accentDim,fontFamily:at.mono,marginBottom:8,letterSpacing:1},children:[l.id!=="A"?`제${l.id}장`:"부록",!v&&` · ${r} / ${i.length-1}`]}),ie.jsx("h1",{style:{fontFamily:at.serif,fontSize:v?32:26,color:we.accent,margin:0,letterSpacing:1,lineHeight:1.3},children:v?l.title:s||l.title})]})}),ie.jsx("div",{style:{padding:"24px 24px 48px"},children:ie.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[f.map((g,w)=>{var T;if(g.type==="prose")return ie.jsx(u7,{markdown:g.md},w);const b=(T=l.vizMap)==null?void 0:T[g.key];return b?ie.jsx(c7,{component:b},w):null}),ie.jsx(f7,{chapter:l,sectionIdx:r,totalSections:i.length})]})})]})}function v7(){return ie.jsx("div",{style:{minHeight:"100vh",background:we.bg,display:"flex",alignItems:"center",justifyContent:"center",color:we.textDim,fontFamily:at.mono,fontSize:13},children:"불러오는 중…"})}function g7(){const[l,n]=J.useState({}),[r,i]=J.useState(null),s=(u,h)=>{h.preventDefault(),h.stopPropagation(),n(f=>({...f,[u]:!f[u]}))};return ie.jsxs("div",{style:{minHeight:"100vh",background:we.bg,color:we.text,fontFamily:at.mono},children:[ie.jsxs("div",{style:{padding:"60px 24px 32px",background:"linear-gradient(180deg, rgba(245,158,11,0.06) 0%, transparent 100%)",textAlign:"center"},children:[ie.jsx("h1",{style:{fontFamily:at.serif,fontSize:36,color:we.accent,marginBottom:6,letterSpacing:2},children:"情報幾何學"}),ie.jsx("p",{style:{color:we.textDim,fontSize:13,marginBottom:4},children:"정보기하학 — 확률분포의 기하학적 구조"}),ie.jsx("p",{style:{color:we.textMuted,fontSize:11},children:"인터랙티브 교재 · Interactive Textbook"})]}),ie.jsx("div",{style:{padding:"0 24px 48px"},children:ie.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:ie.jsx("div",{style:{display:"grid",gap:8},children:Kt.map((u,h)=>{const f=u.id.includes("z"),v=u.id==="A",g=gi(u.md),w=g.length>1,b=l[u.slug],T=Object.keys(u.vizMap||{}).length>0;return ie.jsxs("div",{children:[ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:f?"10px 20px 10px 40px":"12px 20px",borderRadius:b?"8px 8px 0 0":8,background:r===h?we.cardHover:f?"transparent":we.card,border:`1px solid ${r===h?we.accentDim:f?"transparent":we.border}`,borderBottom:b?"none":void 0,transition:"all 0.2s",cursor:"pointer"},onMouseEnter:()=>i(h),onMouseLeave:()=>i(null),children:[ie.jsx("span",{style:{fontSize:f?14:18,fontWeight:700,color:f?we.dual:v?we.textDim:we.accent,fontFamily:at.serif,minWidth:f?32:40,textAlign:"center"},children:f?"∿":u.id}),ie.jsx(kr,{to:`/${u.slug}/0`,style:{flex:1,textDecoration:"none",fontSize:f?12:14,color:r===h?we.accent:f?we.textDim:we.text,fontWeight:f?400:600,fontStyle:f?"italic":"normal"},children:u.title}),T&&ie.jsx("span",{style:{fontSize:9,color:we.accentDim,fontFamily:at.mono,padding:"2px 6px",borderRadius:4,background:we.accentSoft},children:"VIZ"}),w&&ie.jsx("span",{onClick:A=>s(u.slug,A),style:{fontSize:14,color:r===h?we.accent:we.textMuted,transition:"all 0.2s",transform:b?"rotate(90deg)":"none",cursor:"pointer",userSelect:"none",padding:"0 4px"},children:"→"}),!w&&ie.jsx(kr,{to:`/${u.slug}/0`,style:{fontSize:14,color:r===h?we.accent:we.textMuted,textDecoration:"none",transition:"all 0.2s",transform:r===h?"translateX(3px)":"none"},children:"→"})]}),b&&w&&ie.jsx("div",{style:{background:we.card,border:`1px solid ${we.border}`,borderTop:"none",borderRadius:"0 0 8px 8px",padding:"4px 0 8px"},children:g.map((A,I)=>{var $;const{title:F,vizKey:D}=xu(A),q=D&&(($=u.vizMap)==null?void 0:$[D]);return ie.jsxs(kr,{to:`/${u.slug}/${I}`,style:{display:"flex",alignItems:"center",gap:10,padding:"6px 20px 6px 74px",textDecoration:"none",fontSize:12,color:we.textDim,transition:"color 0.15s"},onMouseEnter:Q=>Q.currentTarget.style.color=we.accent,onMouseLeave:Q=>Q.currentTarget.style.color=we.textDim,children:[ie.jsx("span",{style:{color:we.textMuted,fontSize:10,minWidth:16},children:I===0?"·":`${I}`}),ie.jsx("span",{style:{flex:1},children:I===0?"들어가며":F||`절 ${I}`}),q&&ie.jsx("span",{style:{fontSize:8,color:we.accentDim,fontFamily:at.mono,padding:"1px 4px",borderRadius:3,background:we.accentSoft},children:"VIZ"})]},I)})})]},u.slug)})})})})]})}function y7(){return C0().pathname==="/"?null:ie.jsx(kr,{to:"/",style:{position:"fixed",top:12,left:12,zIndex:1e3,padding:"6px 14px",borderRadius:6,background:`${we.card}e6`,border:`1px solid ${we.border}`,color:we.textDim,fontSize:11,fontFamily:at.mono,textDecoration:"none",backdropFilter:"blur(8px)",transition:"color 0.2s"},children:"← 목차"})}function x7(){const[l,n]=J.useState(Em);return J.useEffect(()=>rd(n),[]),ie.jsx("button",{className:"theme-toggle",onClick:Mm,title:l==="dark"?"라이트 모드로":"다크 모드로",children:l==="dark"?"☀":"☾"})}function w7(){const[,l]=J.useState(0);return J.useEffect(()=>rd(()=>l(n=>n+1)),[]),ie.jsxs(bm,{children:[ie.jsx(y7,{}),ie.jsx(x7,{}),ie.jsx(J.Suspense,{fallback:ie.jsx(v7,{}),children:ie.jsxs(mm,{children:[ie.jsx(ai,{path:"/",element:ie.jsx(g7,{})}),Kt.map(n=>ie.jsxs(J.Fragment,{children:[ie.jsx(ai,{path:`/${n.slug}`,element:ie.jsx(fm,{to:`/${n.slug}/0`,replace:!0})}),ie.jsx(ai,{path:`/${n.slug}/:sectionIdx`,element:ie.jsx(m7,{chapter:n})})]},n.slug))]})})]})}x2.createRoot(document.getElementById("root")).render(ie.jsx(w7,{}));export{we as C,T7 as S,z7 as a,b7 as c,at as f,S7 as i,ie as j,Q6 as k,J as r};
