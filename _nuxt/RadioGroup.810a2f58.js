import R from"./Radio.76aadcb1.js";import{u as b,r as B,l as k,n as l}from"./ui.config.3f8724c1.js";import{u as z}from"./useFormGroup.10b83128.js";import{_ as G,m as h,n as o,f as U,q as s,g as j,h as F,o as r,c as i,a as N,x as v,A as y,I as w,F as _,v as I,B as A,C,d as P,t as T,y as q,w as D}from"./entry.25dad13e.js";import"./tw-merge.5df04c32.js";import"./uid.12f507af.js";import"./index.1ec31925.js";const d=h(o.ui.strategy,o.ui.radioGroup,B),E=h(o.ui.strategy,o.ui.radio,k),L=U({components:{URadio:R},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return o.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},uiRadio:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:n}){const{ui:m,attrs:c}=b("radioGroup",s(e,"ui"),d,s(e,"class")),{ui:p}=b("radio",s(e,"uiRadio"),E),{emitFormChange:g,color:u,name:t}=z(e,d);j("radio-group",{color:u,name:t});const f=a=>{n("update:modelValue",a),n("change",a),g()},O=a=>l(a,e.valueAttribute,l(a,e.optionAttribute)),S=a=>l(a,e.optionAttribute,l(a,e.valueAttribute)),V=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:O(a),label:S(a)},$=F(()=>e.options.map(a=>V(a)));return{ui:m,uiRadio:p,attrs:c,normalizedOptions:$,onUpdate:f}}});function H(e,n,m,c,p,g){const u=R;return r(),i("div",{class:v(e.ui.wrapper)},[N("fieldset",A(C(e.attrs)),[e.legend||e.$slots.legend?(r(),i("legend",{key:0,class:v(e.ui.legend)},[y(e.$slots,"legend",{},()=>[P(T(e.legend),1)])],2)):w("",!0),(r(!0),i(_,null,I(e.normalizedOptions,t=>(r(),q(u,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,disabled:e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:D(()=>[y(e.$slots,"label",A(C({option:t})))]),_:2},1032,["label","model-value","value","disabled","ui","onChange"]))),128))],16)],2)}const Z=G(L,[["render",H]]);export{Z as default};