import{u as j,j as q}from"./ui.config.9ee23051.js";import{_ as G,m as I,n as v,f as A,q as S,l as F,h as d,r as N,g as O,o as r,c as s,x as l,a as B,A as i,B as a,D as o,F as n,d as t,t as p,I as f,C as P}from"./entry.2266861b.js";import{u as V}from"./uid.12f507af.js";const y=I(v.ui.strategy,v.ui.formGroup,q),w=A({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(y.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:h,attrs:b}=j("formGroup",S(e,"ui"),y,S(e,"class")),u=F("form-errors",null),m=d(()=>{var k,z;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(z=(k=u==null?void 0:u.value)==null?void 0:k.find(C=>C.path===e.name))==null?void 0:z.message}),g=d(()=>h.value.size[e.size??y.default.size]),$=N(V());return O("form-group",{error:m,inputId:$,name:d(()=>e.name),size:d(()=>e.size)}),{ui:h,attrs:b,inputId:$,size:g,error:m}}}),D=["for"];function R(e,h,b,u,m,g){return r(),s("div",o({class:e.ui.wrapper},e.attrs),[e.label||e.$slots.label?(r(),s("div",{key:0,class:l([e.ui.label.wrapper,e.size])},[B("label",{for:e.inputId,class:l([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?i(e.$slots,"label",a(o({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),s(n,{key:1},[t(p(e.label),1)],64))],10,D),e.hint||e.$slots.hint?(r(),s("span",{key:0,class:l([e.ui.hint])},[e.$slots.hint?i(e.$slots,"hint",a(o({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),s(n,{key:1},[t(p(e.hint),1)],64))],2)):f("",!0)],2)):f("",!0),e.description||e.$slots.description?(r(),s("p",{key:1,class:l([e.ui.description,e.size])},[e.$slots.description?i(e.$slots,"description",a(o({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),s(n,{key:1},[t(p(e.description),1)],64))],2)):f("",!0),B("div",{class:l([e.label?e.ui.container:""])},[i(e.$slots,"default",a(P({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(r(),s("p",{key:0,class:l([e.ui.error,e.size])},[e.$slots.error?i(e.$slots,"error",a(o({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),s(n,{key:1},[t(p(e.error),1)],64))],2)):e.help||e.$slots.help?(r(),s("p",{key:1,class:l([e.ui.help,e.size])},[e.$slots.help?i(e.$slots,"help",a(o({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),s(n,{key:1},[t(p(e.help),1)],64))],2)):f("",!0)],2)],16)}const H=G(w,[["render",R]]);export{H as default};
