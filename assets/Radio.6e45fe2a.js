import{_ as C,m as k,n as p,f as V,q as g,l as q,h as b,H as B,o,c as r,a as u,E as $,R as A,D as N,A as j,x as s,I as n,t as y,d as w}from"./entry.2266861b.js";import{t as D}from"./tw-merge.56b3fbf2.js";import{u as O,l as R}from"./ui.config.9ee23051.js";import{u as E}from"./uid.12f507af.js";import{u as F}from"./useFormGroup.6d7b482c.js";import"./index.b873b1db.js";const d=k(p.ui.strategy,p.ui.radio,R),G=V({inheritAttrs:!1,props:{id:{type:String,default:()=>E()},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return p.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:l}){const{ui:a,attrs:m}=O("radio",g(e,"ui"),d,g(e,"class")),i=q("radio-group",null),{emitFormChange:f,color:t,name:v}=i??F(e,d),h=b({get(){return e.modelValue},set(c){l("update:modelValue",c),l("change",c),i||f()}}),S=b(()=>D(B(a.value.base,a.value.background,a.value.border,a.value.ring.replaceAll("{color}",t.value),a.value.color.replaceAll("{color}",t.value)),e.inputClass));return{ui:a,attrs:m,pick:h,name:v,inputClass:S}}}),I={class:"flex items-center h-5"},M=["id","name","required","value","disabled"],U={key:0,class:"ms-3 inline-flex items-center"},z=["for"];function H(e,l,a,m,i,f){return o(),r("div",{class:s(e.ui.wrapper)},[u("div",I,[$(u("input",N({id:e.id,"onUpdate:modelValue":l[0]||(l[0]=t=>e.pick=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:["form-radio",e.inputClass]},e.attrs),null,16,M),[[A,e.pick]])]),e.label||e.$slots.label?(o(),r("div",U,[u("label",{for:e.id,class:s(e.ui.label)},[j(e.$slots,"label",{},()=>[w(y(e.label),1)]),e.required?(o(),r("span",{key:0,class:s(e.ui.required)},"*",2)):n("",!0)],10,z),e.help?(o(),r("p",{key:0,class:s(e.ui.help)},y(e.help),3)):n("",!0)])):n("",!0)],2)}const W=C(G,[["render",H]]);export{W as default};
