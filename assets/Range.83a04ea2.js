import{_ as N,m as $,n as d,f as B,q as M,h as t,H as n,o as j,c as I,E as O,S as q,a as g,D,x as f,P as E}from"./entry.2266861b.js";import{t as b}from"./tw-merge.56b3fbf2.js";import{u as F,q as P}from"./ui.config.9ee23051.js";import{u as R}from"./useFormGroup.6d7b482c.js";import"./index.b873b1db.js";const o=$(d.ui.strategy,d.ui.range,P),U=B({inheritAttrs:!1,props:{modelValue:{type:Number,default:0},id:{type:String,default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return d.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:l}){const{ui:a,attrs:p}=F("range",M(e,"ui"),o),{emitFormChange:m,inputId:c,color:s,size:r,name:C}=R(e,o),y=t({get(){return e.modelValue},set(u){l("update:modelValue",u)}}),h=u=>{l("change",u),m()},k=t(()=>b(n(a.value.wrapper,a.value.size[r.value]),e.class)),V=t(()=>b(n(a.value.base,a.value.background,a.value.rounded,a.value.ring.replaceAll("{color}",s.value),a.value.size[r.value]),e.inputClass)),z=t(()=>n(a.value.thumb.base,a.value.thumb.color.replaceAll("{color}",s.value),a.value.thumb.ring,a.value.thumb.background,a.value.thumb.size[r.value])),S=t(()=>n(a.value.track.base,a.value.track.background,a.value.track.rounded,a.value.track.size[r.value])),w=t(()=>n(a.value.progress.base,a.value.progress.rounded,a.value.progress.background.replaceAll("{color}",s.value),a.value.progress.size[r.value])),A=t(()=>{const{modelValue:u,min:i,max:v}=e;return{width:`${(Math.max(i,Math.min(u,v))-i)/(v-i)*100}%`}});return{ui:a,attrs:p,name:C,inputId:c,value:y,wrapperClass:k,inputClass:V,thumbClass:z,trackClass:S,progressClass:w,progressStyle:A,onChange:h}}}),G=["id","name","min","max","disabled","step"];function H(e,l,a,p,m,c){return j(),I("div",{class:f(e.wrapperClass)},[O(g("input",D({id:e.inputId,ref:"input","onUpdate:modelValue":l[0]||(l[0]=s=>e.value=s),name:e.name,min:e.min,max:e.max,disabled:e.disabled,step:e.step,type:"range",class:[e.inputClass,e.thumbClass,e.trackClass]},e.attrs,{onChange:l[1]||(l[1]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,G),[[q,e.value,void 0,{number:!0}]]),g("span",{class:f(e.progressClass),style:E(e.progressStyle)},null,6)],2)}const Y=N(U,[["render",H]]);export{Y as default};
