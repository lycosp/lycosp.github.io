import{_ as u,m as c,n as l,f as d,q as f,h as g,H as v,o as b,c as p,A as m,D as y,d as j,t as O}from"./entry.2a5111f6.js";import{t as S}from"./tw-merge.d0ae1a6f.js";import{u as k,f as z}from"./ui.config.f959c0ad.js";const t=c(l.ui.strategy,l.ui.badge,z),C=d({inheritAttrs:!1,props:{size:{type:String,default:()=>t.default.size,validator(e){return Object.keys(t.size).includes(e)}},color:{type:String,default:()=>t.default.color,validator(e){return[...l.ui.colors,...Object.keys(t.color)].includes(e)}},variant:{type:String,default:()=>t.default.variant,validator(e){return[...Object.keys(t.variant),...Object.values(t.color).flatMap(a=>Object.keys(a))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:o}=k("badge",f(e,"ui"),t),n=g(()=>{var s,i;const r=((i=(s=a.value.color)==null?void 0:s[e.color])==null?void 0:i[e.variant])||a.value.variant[e.variant];return S(v(a.value.base,a.value.font,a.value.rounded,a.value.size[e.size],r==null?void 0:r.replaceAll("{color}",e.color)),e.class)});return{attrs:o,badgeClass:n}}});function _(e,a,o,n,r,s){return b(),p("span",y({class:e.badgeClass},e.attrs),[m(e.$slots,"default",{},()=>[j(O(e.label),1)])],16)}const B=u(C,[["render",_]]);export{B as default};
