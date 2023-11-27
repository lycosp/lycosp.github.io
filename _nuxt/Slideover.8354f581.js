import{u as T,N as b}from"./ui.config.b5e24142.js";import{_ as D,m as V,n as f,f as w,q as m,h as c,s as l,o as g,y as v,w as o,b as i,D as p,a as H,x as y,I as S,A as k}from"./entry.e8912faf.js";import{U as $,G as N,S as O,h as P}from"./transition.eb9c81b8.js";import"./dom.830acfb6.js";import"./hidden.be29a0f1.js";import"./focus-management.657c83ef.js";import"./use-root-containers.23a246ef.js";import"./use-outside-click.8fdffb9f.js";import"./micro-task.89dcd6af.js";import"./open-closed.3e574d28.js";import"./disposables.57da4964.js";const R=V(f.ui.strategy,f.ui.slideover,b),j=w({components:{HDialog:$,HDialogPanel:N,TransitionRoot:O,TransitionChild:P},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:a}){const{ui:r,attrs:u}=T("slideover",m(e,"ui"),R,m(e,"class")),n=c({get(){return e.modelValue},set(t){a("update:modelValue",t)}}),d=c(()=>e.transition?{...r.value.transition,enterFrom:e.side==="left"?"-translate-x-full":"translate-x-full",enterTo:"translate-x-0",leaveFrom:"translate-x-0",leaveTo:e.side==="left"?"-translate-x-full":"translate-x-full"}:{});function s(t){n.value=t,a("close")}return{ui:r,attrs:u,isOpen:n,transitionClass:d,close:s}}});function A(e,a,r,u,n,d){const s=l("TransitionChild"),t=l("HDialogPanel"),C=l("HDialog"),h=l("TransitionRoot");return g(),v(h,{as:"template",appear:e.appear,show:e.isOpen},{default:o(()=>[i(C,p({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:a[0]||(a[0]=B=>!e.preventClose&&e.close(B))}),{default:o(()=>[e.overlay?(g(),v(s,p({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[H("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):S("",!0),i(s,p({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[i(t,{class:y([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:o(()=>[k(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class"])]),_:3},8,["appear","show"])}const Q=D(j,[["render",A]]);export{Q as default};
