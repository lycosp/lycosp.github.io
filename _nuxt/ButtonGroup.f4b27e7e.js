import{f as p,q as g,h as r,K as h,L as v,H as z,M as x,m as s,n}from"./entry.9800581d.js";import{t as y}from"./tw-merge.1bda6a2b.js";import{u as C,b as w,g as G}from"./ui.config.dfb3fb40.js";const M=s(n.ui.strategy,n.ui.button,w),S=s(n.ui.strategy,n.ui.buttonGroup,G),$=p({inheritAttrs:!1,props:{size:{type:String,default:null,validator(o){return Object.keys(M.size).includes(o)}},orientation:{type:String,default:"horizontal",validator(o){return["horizontal","vertical"].includes(o)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(o,{slots:f}){const{ui:e,attrs:c}=C("buttonGroup",g(o,"ui"),S),l=r(()=>h(f)),d=r(()=>({"rounded-none":{horizontal:{left:"rounded-s-none",right:"rounded-e-none"},vertical:{top:"rounded-t-none",bottom:"rounded-b-none"}},"rounded-sm":{horizontal:{left:"rounded-s-sm",right:"rounded-e-sm"},vertical:{top:"rounded-t-sm",bottom:"rounded-b-sm"}},rounded:{horizontal:{left:"rounded-s",right:"rounded-e"},vertical:{top:"rounded-t",bottom:"rounded-b"}},"rounded-md":{horizontal:{left:"rounded-s-md",right:"rounded-e-md"},vertical:{top:"rounded-t-md",bottom:"rounded-b-md"}},"rounded-lg":{horizontal:{left:"rounded-s-lg",right:"rounded-e-lg"},vertical:{top:"rounded-t-lg",bottom:"rounded-b-lg"}},"rounded-xl":{horizontal:{left:"rounded-s-xl",right:"rounded-e-xl"},vertical:{top:"rounded-t-xl",bottom:"rounded-b-xl"}},"rounded-2xl":{horizontal:{left:"rounded-s-2xl",right:"rounded-e-2xl"},vertical:{top:"rounded-t-2xl",bottom:"rounded-b-2xl"}},"rounded-3xl":{horizontal:{left:"rounded-s-3xl",right:"rounded-e-3xl"},vertical:{top:"rounded-t-3xl",bottom:"rounded-b-3xl"}},"rounded-full":{horizontal:{left:"rounded-s-full",right:"rounded-e-full"},vertical:{top:"rounded-t-full",bottom:"rounded-b-full"}}})[e.value.rounded][o.orientation]),b=r(()=>l.value.map((u,i)=>{var a;const t={};return o.size&&(t.size=o.size),t.ui=((a=u.props)==null?void 0:a.ui)||{},t.ui.rounded="rounded-none",t.ui.base="!shadow-none",i===0&&(t.ui.rounded+=` ${d.value.left||d.value.top}`),i===l.value.length-1&&(t.ui.rounded+=` ${d.value.right||d.value.bottom}`),v(u,t)})),m=r(()=>y(z(e.value.wrapper[o.orientation],e.value.rounded,e.value.shadow),o.class));return()=>x("div",{class:m.value,...c.value},b.value)}});export{$ as default};
