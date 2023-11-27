import{_ as k,m as O,n as d,f as T,q as b,r as V,i as w,U as q,N,h as x,H as F,o as H,c as $,a as A,D,x as M}from"./entry.2a5111f6.js";import{t as R}from"./tw-merge.d0ae1a6f.js";import{u as U,v as E}from"./ui.config.f959c0ad.js";import{u as G}from"./useFormGroup.bbbdbc4a.js";import"./index.fc6a0546.js";const o=O(d.ui.strategy,d.ui.textarea,E),J=T({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...d.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:l,attrs:f}=U("textarea",b(e,"ui"),o,b(e,"class")),{emitFormBlur:c,emitFormInput:p,inputId:u,color:m,size:v,name:B}=G(e,o),r=V(null),y=()=>{var a;e.autofocus&&((a=r.value)==null||a.focus())},i=()=>{if(e.autoresize){if(!r.value)return;r.value.rows=e.rows;const a=window.getComputedStyle(r.value),s=parseInt(a.paddingTop),n=parseInt(a.paddingBottom),h=s+n,C=parseInt(a.lineHeight),{scrollHeight:j}=r.value,g=(j-h)/C;g>e.rows&&(r.value.rows=g)}},z=a=>{i(),t("update:modelValue",a.target.value),p()},I=a=>{t("blur",a),c()};w(()=>{setTimeout(()=>{y()},e.autofocusDelay)}),q(()=>e.modelValue,()=>{N(i)}),w(()=>{setTimeout(()=>{y(),i()},100)});const S=x(()=>{var s,n;const a=((n=(s=l.value.color)==null?void 0:s[m.value])==null?void 0:n[e.variant])||l.value.variant[e.variant];return R(F(l.value.base,l.value.rounded,l.value.placeholder,l.value.size[v.value],e.padded?l.value.padding[v.value]:"p-0",a==null?void 0:a.replaceAll("{color}",m.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:f,name:B,inputId:u,textarea:r,textareaClass:S,onInput:z,onBlur:I}}}),P=["id","value","name","rows","required","disabled","placeholder"];function K(e,t,l,f,c,p){return H(),$("div",{class:M(e.ui.wrapper)},[A("textarea",D({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:["form-textarea",e.textareaClass]},e.attrs,{onInput:t[0]||(t[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:t[1]||(t[1]=(...u)=>e.onBlur&&e.onBlur(...u))}),null,16,P)],2)}const Z=k(J,[["render",K]]);export{Z as default};
