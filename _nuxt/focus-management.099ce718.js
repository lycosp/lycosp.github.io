import{o as N,u as w}from"./dom.c9325e82.js";import{N as p}from"./entry.25dad13e.js";var x=Object.defineProperty,F=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t,r)=>(F(e,typeof t!="symbol"?t+"":t,r),r);class S{constructor(){m(this,"current",this.detect()),m(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let I=new S;function v(e){if(I.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=N(e);if(t)return t.ownerDocument}return document}let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var O=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(O||{}),P=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(P||{}),A=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(A||{});function h(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var g=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(g||{});function L(e,t=0){var r;return e===((r=v(e))==null?void 0:r.body)?!1:w(t,{0(){return e.matches(f)},1(){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}function U(e){let t=v(e);p(()=>{t&&!L(t.activeElement,0)&&T(e)})}var M=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(M||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function T(e){e==null||e.focus({preventScroll:!0})}let _=["textarea","input"].join(",");function D(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,_))!=null?r:!1}function K(e,t=r=>r){return e.slice().sort((r,n)=>{let l=t(r),s=t(n);if(l===null||s===null)return 0;let c=l.compareDocumentPosition(s);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j(e,t){return k(h(),t,{relativeTo:e})}function k(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:l=[]}={}){var s;let c=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?s:document,u=Array.isArray(e)?r?K(e):e:h(e);l.length>0&&u.length>1&&(u=u.filter(i=>!l.includes(i))),n=n??c.activeElement;let E=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),y=t&32?{preventScroll:!0}:{},d=0,a=u.length,o;do{if(d>=a||d+a<=0)return 0;let i=b+d;if(t&16)i=(i+a)%a;else{if(i<0)return 3;if(i>=a)return 1}o=u[i],o==null||o.focus(y),d+=E}while(o!==c.activeElement);return t&6&&D(o)&&o.select(),2}export{h as E,O as N,K as O,k as P,T as S,P as T,U as _,I as c,g as h,v as m,j as v,L as w};