import f from"./Avatar.59be6bb7.js";import g from"./Icon.5a279be1.js";import b from"./Link.fdea91c0.js";import{_ as k,m as w,n as m,f as z,q as v,o as i,c as o,F as A,v as N,D as u,y as l,w as I,A as n,I as r,x as c,t as d,z as h}from"./entry.2a5111f6.js";import{u as B,o as L,H as S}from"./ui.config.f959c0ad.js";import"./tw-merge.d0ae1a6f.js";import"./nuxt-link.91b71fb9.js";const j=w(m.ui.strategy,m.ui.verticalNavigation,S),D=z({components:{UIcon:g,UAvatar:f,ULink:b},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(a){const{ui:t,attrs:p}=B("verticalNavigation",v(a,"ui"),j,v(a,"class"));return{ui:t,attrs:p,omit:L}}});function F(a,t,p,K,O,V){const y=f,C=g,$=b;return i(),o("nav",u({class:a.ui.wrapper},a.attrs),[(i(!0),o(A,null,N(a.links,(e,U)=>(i(),l($,u({key:U},a.omit(e,["label","icon","iconClass","avatar","badge","click"]),{class:[a.ui.base,a.ui.padding,a.ui.width,a.ui.ring,a.ui.rounded,a.ui.font,a.ui.size],"active-class":a.ui.active,"inactive-class":a.ui.inactive,onClick:e.click,onKeyup:t[0]||(t[0]=h(s=>s.target.blur(),["enter"]))}),{default:I(({isActive:s})=>[n(a.$slots,"avatar",{link:e,isActive:s},()=>[e.avatar?(i(),l(y,u({key:0},{size:a.ui.avatar.size,...e.avatar},{class:[a.ui.avatar.base]}),null,16,["class"])):r("",!0)]),n(a.$slots,"icon",{link:e,isActive:s},()=>[e.icon?(i(),l(C,{key:0,name:e.icon,class:c([a.ui.icon.base,s?a.ui.icon.active:a.ui.icon.inactive,e.iconClass])},null,8,["name","class"])):r("",!0)]),n(a.$slots,"default",{link:e,isActive:s},()=>[e.label?(i(),o("span",{key:0,class:c(a.ui.label)},d(e.label),3)):r("",!0)]),n(a.$slots,"badge",{link:e,isActive:s},()=>[e.badge?(i(),o("span",{key:0,class:c([a.ui.badge.base,s?a.ui.badge.active:a.ui.badge.inactive])},d(e.badge),3)):r("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],16)}const M=k(D,[["render",F]]);export{M as default};
