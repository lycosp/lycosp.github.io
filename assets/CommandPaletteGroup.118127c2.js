import U from"./Icon.5a279be1.js";import O from"./Avatar.59be6bb7.js";import B from"./Kbd.a85420b0.js";import{_ as H,f as w,h as z,s as N,o,c as t,x as s,t as u,I as l,a as b,F as A,v as q,y,w as S,A as v,D as P,P as j,d as L}from"./entry.2a5111f6.js";import{Y as M}from"./combobox.3a6c6f6c.js";import"./tw-merge.d0ae1a6f.js";import"./ui.config.f959c0ad.js";import"./dom.f123a28b.js";import"./use-tracked-pointer.2898c903.js";import"./focus-management.8442804d.js";import"./open-closed.46cf267e.js";import"./use-resolve-button-type.34c4b05a.js";import"./use-outside-click.163f26c0.js";import"./hidden.f7bd78ae.js";import"./use-controllable.8f7eb582.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";const T=w({components:{HComboboxOption:M,UIcon:U,UAvatar:O,UKbd:B},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const $=z(()=>{const n=e.group[e.groupAttribute];return typeof n=="function"?n(e.query):n});function C(n,{indices:I,value:g}){if(n===g)return"";let i="",d=0;I.forEach(p=>{const r=p[1]+1,k=r-p[0]>=e.query.length;i+=[g.substring(d,p[0]),k&&"<mark>",g.substring(p[0],r),k&&"</mark>"].filter(Boolean).join(""),d=r}),i+=g.substring(d);const h=i.indexOf("<mark>");return h>60&&(i=`...${i.substring(h-60)}`),i}return{label:$,highlight:C}}}),V=["aria-label"],D=["innerHTML"];function E(e,$,C,n,I,g){const i=U,d=O,h=B,p=N("HComboboxOption");return o(),t("div",{class:s(e.ui.group.wrapper),role:"option"},[e.label?(o(),t("h2",{key:0,class:s(e.ui.group.label)},u(e.label),3)):l("",!0),b("div",{class:s(e.ui.group.container),role:"listbox","aria-label":e.group[e.groupAttribute]},[(o(!0),t(A,null,q(e.group.commands,(r,k)=>(o(),y(p,{key:`${e.group.key}-${k}`,value:r,disabled:r.disabled,as:"template"},{default:S(({active:a,selected:c})=>[b("div",{class:s([e.ui.group.command.base,a?e.ui.group.command.active:e.ui.group.command.inactive,r.disabled?"cursor-not-allowed":"cursor-pointer"])},[b("div",{class:s(e.ui.group.command.container)},[v(e.$slots,`${e.group.key}-icon`,{group:e.group,command:r,active:a,selected:c},()=>[r.icon?(o(),y(i,{key:0,name:r.icon,class:s([e.ui.group.command.icon.base,a?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,r.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):r.avatar?(o(),y(d,P({key:1},{size:e.ui.group.command.avatar.size,...r.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):r.chip?(o(),t("span",{key:2,class:s(e.ui.group.command.chip.base),style:j({background:`#${r.chip}`})},null,6)):l("",!0)]),b("div",{class:s([e.ui.group.command.label,r.disabled&&e.ui.group.command.disabled])},[v(e.$slots,`${e.group.key}-command`,{group:e.group,command:r,active:a,selected:c},()=>{var m,f;return[r.prefix?(o(),t("span",{key:0,class:s(["flex-shrink-0",r.prefixClass||e.ui.group.command.prefix])},u(r.prefix),3)):l("",!0),b("span",{class:s(["truncate",{"flex-none":r.suffix||((m=r.matches)==null?void 0:m.length)}])},u(r[e.commandAttribute]),3),(f=r.matches)!=null&&f.length?(o(),t("span",{key:1,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(r[e.commandAttribute],r.matches[0])},null,10,D)):r.suffix?(o(),t("span",{key:2,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix])},u(r.suffix),3)):l("",!0)]})],2)],2),c?(o(),y(i,{key:0,name:e.selectedIcon,class:s(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):a&&(e.group.active||e.$slots[`${e.group.key}-active`])?v(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:r,active:a,selected:c},()=>[e.group.active?(o(),t("span",{key:0,class:s(e.ui.group.active)},u(e.group.active),3)):l("",!0)]):v(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:r,active:a,selected:c},()=>{var m;return[(m=r.shortcuts)!=null&&m.length?(o(),t("span",{key:0,class:s(e.ui.group.command.shortcuts)},[(o(!0),t(A,null,q(r.shortcuts,f=>(o(),y(h,{key:f},{default:S(()=>[L(u(f),1)]),_:2},1024))),128))],2)):!r.disabled&&e.group.inactive?(o(),t("span",{key:1,class:s(e.ui.group.inactive)},u(e.group.inactive),3)):l("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,V)],2)}const ie=H(T,[["render",E]]);export{ie as default};
