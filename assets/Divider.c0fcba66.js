import g from"./Icon.15518c94.js";import C from"./Avatar.bfbae913.js";import{_ as h,m as z,n as m,f as k,q as w,h as s,H as i,o as t,c as d,a as u,x as o,F as S,A as $,I as f,D as b,t as A,y}from"./entry.b2bb982d.js";import{t as U}from"./tw-merge.10f1fcf1.js";import{u as B,C as I}from"./ui.config.9ce86d91.js";const j=z(m.ui.strategy,m.ui.divider,I),D=k({components:{UIcon:g,UAvatar:C},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:c}=B("divider",w(e,"ui"),j),r=s(()=>e.orientation==="horizontal"),p=s(()=>U(i(a.value.wrapper.base,r.value?a.value.wrapper.horizontal:a.value.wrapper.vertical),e.class)),v=s(()=>i(a.value.container.base,r.value?a.value.container.horizontal:a.value.container.vertical)),l=s(()=>{const n={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[e.type];return i(a.value.border.base,r.value?a.value.border.horizontal:a.value.border.vertical,r.value?a.value.border.size.horizontal:a.value.border.size.vertical,n)});return{ui:a,attrs:c,wrapperClass:p,containerClass:v,borderClass:l}}});function O(e,a,c,r,p,v){const l=g,n=C;return t(),d("div",b({class:e.wrapperClass},e.attrs),[u("div",{class:o(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(t(),d(S,{key:0},[u("div",{class:o(e.containerClass)},[$(e.$slots,"default",{},()=>[e.label?(t(),d("span",{key:0,class:o(e.ui.label)},A(e.label),3)):e.icon?(t(),y(l,{key:1,name:e.icon,class:o(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(t(),y(n,b({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):f("",!0)])],2),u("div",{class:o(e.borderClass)},null,2)],64)):f("",!0)],16)}const E=h(D,[["render",O]]);export{E as default};
