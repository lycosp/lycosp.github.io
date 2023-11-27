import j from"./Button.f2792e2d.js";import{u as S,F as U,b as q}from"./ui.config.f959c0ad.js";import{_ as D,m as M,n as B,f as E,q as L,h as m,o as f,c as $,A as k,F as W,v as R,D as c,y as b,I as g}from"./entry.2a5111f6.js";import"./Icon.5a279be1.js";import"./Link.fdea91c0.js";import"./nuxt-link.91b71fb9.js";import"./tw-merge.d0ae1a6f.js";const l=M(B.ui.strategy,B.ui.pagination,U),X=M(B.ui.strategy,B.ui.button,q),H=E({components:{UButton:j},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(X.size).includes(e)}},activeButton:{type:Object,default:()=>l.default.activeButton},inactiveButton:{type:Object,default:()=>l.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>l.default.firstButton},lastButton:{type:Object,default:()=>l.default.lastButton},prevButton:{type:Object,default:()=>l.default.prevButton},nextButton:{type:Object,default:()=>l.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue"],setup(e,{emit:h}){const{ui:y,attrs:z}=S("pagination",L(e,"ui"),l,L(e,"class")),i=m({get(){return e.modelValue},set(n){h("update:modelValue",n)}}),p=m(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(n,s)=>s+1)),r=m(()=>{const n=p.value.length,s=i.value,P=Math.max(e.max,5),o=Math.floor((Math.min(P,n)-5)/2),O=s-o,C=s+o,N=O-1>1,F=C+1<n,t=[];if(n<=P){for(let a=1;a<=n;a++)t.push(a);return t}if(t.push(1),N&&t.push(e.divider),!F){const a=s+o+2-n;for(let d=s-o-a;d<=s-o-1;d++)t.push(d)}for(let a=Math.max(2,O);a<=Math.min(n,C);a++)t.push(a);if(!N){const a=1-(s-o-2);for(let d=s+o+1;d<=s+o+a;d++)t.push(d)}return F&&t.push(e.divider),C<n&&t.push(n),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}),u=m(()=>i.value>1),v=m(()=>i.value<p.value.length);function A(){u.value&&(i.value=1)}function G(){v.value&&(i.value=p.value.length)}function V(n){typeof n!="string"&&(i.value=n)}function w(){u.value&&i.value--}function I(){v.value&&i.value++}return{ui:y,attrs:z,currentPage:i,pages:p,displayedPages:r,canGoLastOrNext:v,canGoFirstOrPrev:u,onClickPrev:w,onClickNext:I,onClickPage:V,onClickFirst:A,onClickLast:G}}});function J(e,h,y,z,i,p){const r=j;return f(),$("div",c({class:e.ui.wrapper},e.attrs),[k(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(f(),b(r,c({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton,...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):g("",!0)]),k(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(f(),b(r,c({key:0,size:e.size,disabled:!e.canGoFirstOrPrev,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton,...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):g("",!0)]),(f(!0),$(W,null,R(e.displayedPages,(u,v)=>(f(),b(r,c({key:`${u}-${v}`,size:e.size,label:`${u}`},u===e.currentPage?{...e.ui.default.activeButton,...e.activeButton}:{...e.ui.default.inactiveButton,...e.inactiveButton},{class:[{"pointer-events-none":typeof u=="string","z-[1]":u===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(u)}),null,16,["size","label","class","onClick"]))),128)),k(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(f(),b(r,c({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton,...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):g("",!0)]),k(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(f(),b(r,c({key:0,size:e.size,disabled:!e.canGoLastOrNext,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton,...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):g("",!0)])],16)}const ee=D(H,[["render",J]]);export{ee as default};
