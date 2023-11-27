import S from"./Icon.4b65a0f5.js";import z from"./Link.6af43be1.js";import{_ as N,m as O,n as y,f as h,q,h as l,H as r,o as s,y as c,w,A as g,x as f,I as m,c as U,t as A,D as L}from"./entry.2266861b.js";import{t as _}from"./tw-merge.56b3fbf2.js";import{u as D,b as M}from"./ui.config.9ee23051.js";import"./nuxt-link.ae0da28c.js";const n=O(y.ui.strategy,y.ui.button,M),T=h({components:{UIcon:S,ULink:z},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>n.default.size,validator(e){return Object.keys(n.size).includes(e)}},color:{type:String,default:()=>n.default.color,validator(e){return[...y.ui.colors,...Object.keys(n.color)].includes(e)}},variant:{type:String,default:()=>n.default.variant,validator(e){return[...Object.keys(n.variant),...Object.values(n.color).flatMap(i=>Object.keys(i))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>n.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:i}){const{ui:a,attrs:b}=D("button",q(e,"ui"),n),o=l(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),v=l(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),t=l(()=>e.square||!i.default&&!e.label),u=l(()=>{var I,k;const d=((k=(I=a.value.color)==null?void 0:I[e.color])==null?void 0:k[e.variant])||a.value.variant[e.variant];return _(r(a.value.base,a.value.font,a.value.rounded,a.value.size[e.size],a.value.gap[e.size],e.padded&&a.value[t.value?"square":"padding"][e.size],d==null?void 0:d.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),C=l(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),B=l(()=>e.loading&&!o.value?e.loadingIcon:e.trailingIcon||e.icon),j=l(()=>r(a.value.icon.base,a.value.icon.size[e.size],e.loading&&"animate-spin")),$=l(()=>r(a.value.icon.base,a.value.icon.size[e.size],e.loading&&!o.value&&"animate-spin"));return{attrs:b,isLeading:o,isTrailing:v,isSquare:t,buttonClass:u,leadingIconName:C,trailingIconName:B,leadingIconClass:j,trailingIconClass:$}}});function E(e,i,a,b,o,v){const t=S,u=z;return s(),c(u,L({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:w(()=>[g(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(s(),c(t,{key:0,name:e.leadingIconName,class:f(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)]),g(e.$slots,"default",{},()=>[e.label?(s(),U("span",{key:0,class:f([e.truncate?"text-left break-all line-clamp-1":""])},A(e.label),3)):m("",!0)]),g(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(s(),c(t,{key:0,name:e.trailingIconName,class:f(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)])]),_:3},16,["type","disabled","class"])}const G=N(T,[["render",E]]);export{G as default};
