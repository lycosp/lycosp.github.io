import O from"./Kbd.a85420b0.js";import{_ as h,m as C,n as c,f as D,q as y,h as N,O as $,r as B,o as s,c as n,A as g,x as u,b as j,w as b,a as f,I as i,d as p,t as k,F as A,v as L,y as S,D as T,T as V}from"./entry.2a5111f6.js";import{u as z,O as U}from"./ui.config.f959c0ad.js";import{u as F}from"./usePopper.47c9a107.js";import"./tw-merge.d0ae1a6f.js";import"./index.73c4a044.js";import"./index.fc6a0546.js";const I=C(c.ui.strategy,c.ui.tooltip,U),K=D({components:{UKbd:O},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:r,attrs:d}=z("tooltip",y(e,"ui"),I,y(e,"class")),l=N(()=>$({},e.popper,r.value.popper)),[m,v]=F(l.value),a=B(!1);let o=null,t=null;function w(){t&&(clearTimeout(t),t=null),!a.value&&(o=o||setTimeout(()=>{a.value=!0,o=null},e.openDelay))}function M(){o&&(clearTimeout(o),o=null),a.value&&(t=t||setTimeout(()=>{a.value=!1,t=null},e.closeDelay))}return{ui:r,attrs:d,popper:l,trigger:m,container:v,open:a,onMouseOver:w,onMouseLeave:M}}}),P=f("span",{class:"mx-1 text-gray-700 dark:text-gray-200"},"·",-1);function q(e,r,d,l,m,v){const a=O;return s(),n("div",T({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseover:r[0]||(r[0]=(...o)=>e.onMouseOver&&e.onMouseOver(...o)),onMouseleave:r[1]||(r[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[g(e.$slots,"default",{open:e.open},()=>[p(" Hover ")]),e.open&&!e.prevent?(s(),n("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[j(V,T({appear:""},e.ui.transition),{default:b(()=>{var o;return[f("div",null,[e.popper.arrow?(s(),n("div",{key:0,"data-popper-arrow":"",class:u(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):i("",!0),f("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[g(e.$slots,"text",{},()=>[p(k(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(s(),n("span",{key:0,class:u(e.ui.shortcuts)},[P,(s(!0),n(A,null,L(e.shortcuts,t=>(s(),S(a,{key:t,size:"xs"},{default:b(()=>[p(k(t),1)]),_:2},1024))),128))],2)):i("",!0)],2)])]}),_:3},16)],2)):i("",!0)],16)}const X=h(K,[["render",q]]);export{X as default};
