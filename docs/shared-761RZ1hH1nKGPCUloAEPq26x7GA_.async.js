"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[914],{53771:function(e,t,r){let n=r(62435);let o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},c=n.useSyncExternalStore,u=n.useRef,a=n.useEffect,f=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){let s=u(null);if(null===s.current){var y={hasValue:!1,value:null};s.current=y}else y=s.current;s=f((function(){function e(e){if(!a){if(a=!0,c=e,e=n(e),void 0!==i&&y.hasValue){var t=y.value;if(i(t,e))return u=t}return u=e}if(t=u,o(c,e))return t;let r=n(e);return void 0!==i&&i(t,r)?t:(c=e,u=r)}var c,u,a=!1,f=void 0===r?null:r;return[function(){return e(t())},null===f?void 0:function(){return e(f())}]}),[t,r,n,i]);let b=c(e,s[0],s[1]);return a((function(){y.hasValue=!0,y.value=b}),[b]),l(b),b}},31103:function(e,t,r){e.exports=r(53771)},45007:function(e,t,r){r.d(t,{I0:function(){return p}});let n=r(62435),o=r(31103),c=n,u=Symbol.for("react-redux-context"),a="undefined"!==typeof globalThis?globalThis:{};function f(){if(!c.createContext)return{};const e=a[u]??(a[u]=new Map);let t=e.get(c.createContext);return t||(t=c.createContext(null),e.set(c.createContext,t)),t}let l=f();function i(e=l){return function(){return c.useContext(e)}}let s=i();Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.client.reference");!("undefined"===typeof window||void 0===window.document||void 0===window.document.createElement)?c.useLayoutEffect:c.useEffect;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;function y(e=l){const t=e===l?s:i(e),r=()=>{const{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}let b=y();function m(e=l){const t=e===l?b:y(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var S,p=m();S=o.useSyncExternalStoreWithSelector,(e=>{e})(n.useSyncExternalStore)}}]);