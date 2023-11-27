import{L as O,M as E,F as A}from"./entry.9800581d.js";function b(e,t,...o){if(e in t){let n=t[e];return typeof n=="function"?n(...o):n}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}var k=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(k||{}),$=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))($||{});function R({visible:e=!0,features:t=0,ourProps:o,theirProps:r,...n}){var s;let i=j(r,o),u=Object.assign(n,{props:i});if(e||t&2&&i.static)return m(u);if(t&1){let f=(s=i.unmount)==null||s?0:1;return b(f,{0(){return null},1(){return m({...n,props:{...i,hidden:!0,style:{display:"none"}}})}})}return m(u)}function m({props:e,attrs:t,slots:o,slot:r,name:n}){var s,i;let{as:u,...f}=P(e,["unmount","static"]),l=(s=o.default)==null?void 0:s.call(o,r),y={};if(r){let c=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(c=!0),p===!0&&h.push(d);c&&(y["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(l=w(l??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!S(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(a=>a.trim()).filter((a,g,v)=>v.indexOf(a)===g).sort((a,g)=>a.localeCompare(g)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=j((i=c.props)!=null?i:{},f),p=O(c,d);for(let a in d)a.startsWith("on")&&(p.props||(p.props={}),p.props[a]=d[a]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return E(u,Object.assign({},f,y),{default:()=>l})}function w(e){return e.flatMap(t=>t.type===A?w(t.children):[t])}function j(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},o={};for(let r of e)for(let n in r)n.startsWith("on")&&typeof r[n]=="function"?(o[n]!=null||(o[n]=[]),o[n].push(r[n])):t[n]=r[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(o).map(r=>[r,void 0])));for(let r in o)Object.assign(t,{[r](n,...s){let i=o[r];for(let u of i){if(n instanceof Event&&n.defaultPrevented)return;u(n,...s)}}});return t}function N(e){let t=Object.assign({},e);for(let o in t)t[o]===void 0&&delete t[o];return t}function P(e,t=[]){let o=Object.assign({},e);for(let r of t)r in o&&delete o[r];return o}function S(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let T=0;function D(){return++T}function L(){return D()}var H=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(H||{});function x(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}export{R as H,N as K,k as N,$ as S,P as T,H as a,x as o,L as t,b as u};
