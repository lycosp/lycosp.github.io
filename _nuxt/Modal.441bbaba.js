import{u as b,J as D}from"./ui.config.b5e24142.js";import{_ as V,m as H,n as c,f as T,q as g,h as y,s as l,o as v,y as C,w as s,b as u,D as p,a as d,x as r,I as k,A as $}from"./entry.e8912faf.js";import{U as O,G as P,S as R,h as S}from"./transition.eb9c81b8.js";import"./dom.830acfb6.js";import"./hidden.be29a0f1.js";import"./focus-management.657c83ef.js";import"./use-root-containers.23a246ef.js";import"./use-outside-click.8fdffb9f.js";import"./micro-task.89dcd6af.js";import"./open-closed.3e574d28.js";import"./disposables.57da4964.js";const A=H(c.ui.strategy,c.ui.modal,D),N=T({components:{HDialog:O,HDialogPanel:P,TransitionRoot:R,TransitionChild:S},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:a}){const{ui:t,attrs:f}=b("modal",g(e,"ui"),A,g(e,"class")),i=y({get(){return e.modelValue},set(o){a("update:modelValue",o)}}),m=y(()=>e.transition?{...t.value.transition}:{});function n(o){i.value=o,a("close")}return{ui:t,attrs:f,isOpen:i,transitionClass:m,close:n}}});function U(e,a,t,f,i,m){const n=l("TransitionChild"),o=l("HDialogPanel"),h=l("HDialog"),B=l("TransitionRoot");return v(),C(B,{appear:e.appear,show:e.isOpen,as:"template"},{default:s(()=>[u(h,p({class:e.ui.wrapper},e.attrs,{onClose:a[0]||(a[0]=w=>!e.preventClose&&e.close(w))}),{default:s(()=>[e.overlay?(v(),C(n,p({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:s(()=>[d("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):k("",!0),d("div",{class:r(e.ui.inner)},[d("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(n,p({as:"template",appear:e.appear},e.transitionClass),{default:s(()=>[u(o,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?"w-screen":e.ui.width,e.fullscreen?"h-screen":e.ui.height,e.fullscreen?"rounded-none":e.ui.rounded,e.fullscreen?"m-0":e.ui.margin])},{default:s(()=>[$(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class"])]),_:3},8,["appear","show"])}const Q=V(N,[["render",U]]);export{Q as default};
