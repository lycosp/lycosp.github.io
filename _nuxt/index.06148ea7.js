import{aj as b,am as h,an as g,r as v,ah as S,U as y}from"./entry.9800581d.js";function p(e){return b()?(h(e),!0):!1}function f(e){return typeof e=="function"?e():g(e)}const m=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const j=Object.prototype.toString,P=e=>j.call(e)==="[object Object]",W=()=>+Date.now(),d=()=>{},x=O();function O(){var e;return m&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function I(e,n){function o(...t){return new Promise((u,i)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(u).catch(i)})}return o}function T(e,n={}){let o,t,u=d;const i=r=>{clearTimeout(r),u(),u=d};return r=>{const l=f(e),a=f(n.maxWait);return o&&i(o),l<=0||a!==void 0&&a<=0?(t&&(i(t),t=null),Promise.resolve(r())):new Promise((s,w)=>{u=n.rejectOnCancel?w:s,a&&!t&&(t=setTimeout(()=>{o&&i(o),t=null,s(r())},a)),o=setTimeout(()=>{t&&i(t),t=null,s(r())},l)})}}function A(e,n=200,o={}){return I(T(n,o),e)}function C(e,n=1e3,o={}){const{immediate:t=!0,immediateCallback:u=!1}=o;let i=null;const c=v(!1);function r(){i&&(clearInterval(i),i=null)}function l(){c.value=!1,r()}function a(){const s=f(n);s<=0||(c.value=!0,u&&e(),r(),i=setInterval(e,s))}if(t&&m&&a(),S(n)||typeof n=="function"){const s=y(n,()=>{c.value&&m&&a()});p(s)}return p(l),{isActive:c,pause:l,resume:a}}export{f as a,m as b,P as c,W as d,C as e,x as i,d as n,p as t,A as u};
