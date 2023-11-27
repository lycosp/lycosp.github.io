import{b as ue}from"./index.646e1870.js";import{u as ie,G as oe}from"./ui.config.b5e24142.js";import{f as x,r as h,M as D,h as g,g as W,i as B,U as te,k as de,F as q,j as ae,l as M,_ as pe,m as ve,n as K,q as J,s as H,o as E,y as V,w as F,b as Q,x as O,P as ce,a as L,c as X,v as Y,A as Z,t as _,d as fe,D as be}from"./entry.e8912faf.js";import{o as m,H as N,T as me,t as le,N as ee,u as j,a as S}from"./dom.830acfb6.js";import{O as C,T as R,m as ge,P as A,N as $}from"./focus-management.657c83ef.js";import{b as he}from"./use-resolve-button-type.126a7b3e.js";import{a as ye,f as ne}from"./hidden.be29a0f1.js";import{t as Te}from"./micro-task.89dcd6af.js";import"./index.02471eec.js";let Ie=x({props:{onFocus:{type:Function,required:!0}},setup(e){let o=h(!0);return()=>o.value?D(ne,{as:"button",type:"button",features:ye.Focusable,onFocus(v){v.preventDefault();let d,s=50;function a(){var r;if(s--<=0){d&&cancelAnimationFrame(d);return}if((r=e.onFocus)!=null&&r.call(e)){o.value=!1,cancelAnimationFrame(d);return}d=requestAnimationFrame(a)}d=requestAnimationFrame(a)}}):null}});var Pe=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Pe||{}),Se=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Se||{});let se=Symbol("TabsContext");function z(e){let o=M(se,null);if(o===null){let v=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(v,z),v}return o}let U=Symbol("TabsSSRContext"),$e=x({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:o,attrs:v,emit:d}){var s;let a=h((s=e.selectedIndex)!=null?s:e.defaultIndex),r=h([]),p=h([]),c=g(()=>e.selectedIndex!==null),f=g(()=>c.value?e.selectedIndex:a.value);function i(l){var t;let u=C(n.tabs.value,m),y=C(n.panels.value,m),k=u.filter(I=>{var P;return!((P=m(I))!=null&&P.hasAttribute("disabled"))});if(l<0||l>u.length-1){let I=j(a.value===null?0:Math.sign(l-a.value),{[-1]:()=>1,0:()=>j(Math.sign(l),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),P=j(I,{0:()=>u.indexOf(k[0]),1:()=>u.indexOf(k[k.length-1])});P!==-1&&(a.value=P),n.tabs.value=u,n.panels.value=y}else{let I=u.slice(0,l),P=[...u.slice(l),...I].find(re=>k.includes(re));if(!P)return;let G=(t=u.indexOf(P))!=null?t:n.selectedIndex.value;G===-1&&(G=n.selectedIndex.value),a.value=G,n.tabs.value=u,n.panels.value=y}}let n={selectedIndex:g(()=>{var l,t;return(t=(l=a.value)!=null?l:e.defaultIndex)!=null?t:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:r,panels:p,setSelectedIndex(l){f.value!==l&&d("change",l),c.value||i(l)},registerTab(l){var t;if(r.value.includes(l))return;let u=r.value[a.value];r.value.push(l),r.value=C(r.value,m);let y=(t=r.value.indexOf(u))!=null?t:a.value;y!==-1&&(a.value=y)},unregisterTab(l){let t=r.value.indexOf(l);t!==-1&&r.value.splice(t,1)},registerPanel(l){p.value.includes(l)||(p.value.push(l),p.value=C(p.value,m))},unregisterPanel(l){let t=p.value.indexOf(l);t!==-1&&p.value.splice(t,1)}};W(se,n);let b=h({tabs:[],panels:[]}),T=h(!1);B(()=>{T.value=!0}),W(U,g(()=>T.value?null:b.value));let w=g(()=>e.selectedIndex);return B(()=>{te([w],()=>{var l;return i((l=e.selectedIndex)!=null?l:e.defaultIndex)},{immediate:!0})}),de(()=>{if(!c.value||f.value==null||n.tabs.value.length<=0)return;let l=C(n.tabs.value,m);l.some((t,u)=>m(n.tabs.value[u])!==m(t))&&n.setSelectedIndex(l.findIndex(t=>m(t)===m(n.tabs.value[f.value])))}),()=>{let l={selectedIndex:a.value};return D(q,[r.value.length<=0&&D(Ie,{onFocus:()=>{for(let t of r.value){let u=m(t);if((u==null?void 0:u.tabIndex)===0)return u.focus(),!0}return!1}}),N({theirProps:{...v,...me(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:l,slots:o,attrs:v,name:"TabGroup"})])}}}),ke=x({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:o,slots:v}){let d=z("TabList");return()=>{let s={selectedIndex:d.selectedIndex.value},a={role:"tablist","aria-orientation":d.orientation.value};return N({ourProps:a,theirProps:e,slot:s,attrs:o,slots:v,name:"TabList"})}}}),we=x({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-tabs-tab-${le()}`}},setup(e,{attrs:o,slots:v,expose:d}){let s=z("Tab"),a=h(null);d({el:a,$el:a}),B(()=>s.registerTab(a)),ae(()=>s.unregisterTab(a));let r=M(U),p=g(()=>{if(r.value){let t=r.value.tabs.indexOf(e.id);return t===-1?r.value.tabs.push(e.id)-1:t}return-1}),c=g(()=>{let t=s.tabs.value.indexOf(a);return t===-1?p.value:t}),f=g(()=>c.value===s.selectedIndex.value);function i(t){var u;let y=t();if(y===R.Success&&s.activation.value==="auto"){let k=(u=ge(a))==null?void 0:u.activeElement,I=s.tabs.value.findIndex(P=>m(P)===k);I!==-1&&s.setSelectedIndex(I)}return y}function n(t){let u=s.tabs.value.map(y=>m(y)).filter(Boolean);if(t.key===S.Space||t.key===S.Enter){t.preventDefault(),t.stopPropagation(),s.setSelectedIndex(c.value);return}switch(t.key){case S.Home:case S.PageUp:return t.preventDefault(),t.stopPropagation(),i(()=>A(u,$.First));case S.End:case S.PageDown:return t.preventDefault(),t.stopPropagation(),i(()=>A(u,$.Last))}if(i(()=>j(s.orientation.value,{vertical(){return t.key===S.ArrowUp?A(u,$.Previous|$.WrapAround):t.key===S.ArrowDown?A(u,$.Next|$.WrapAround):R.Error},horizontal(){return t.key===S.ArrowLeft?A(u,$.Previous|$.WrapAround):t.key===S.ArrowRight?A(u,$.Next|$.WrapAround):R.Error}}))===R.Success)return t.preventDefault()}let b=h(!1);function T(){var t;b.value||(b.value=!0,!e.disabled&&((t=m(a))==null||t.focus({preventScroll:!0}),s.setSelectedIndex(c.value),Te(()=>{b.value=!1})))}function w(t){t.preventDefault()}let l=he(g(()=>({as:e.as,type:o.type})),a);return()=>{var t;let u={selected:f.value},{id:y,...k}=e,I={ref:a,onKeydown:n,onMousedown:w,onClick:T,id:y,role:"tab",type:l.value,"aria-controls":(t=m(s.panels.value[c.value]))==null?void 0:t.id,"aria-selected":f.value,tabIndex:f.value?0:-1,disabled:e.disabled?!0:void 0};return N({ourProps:I,theirProps:k,slot:u,attrs:o,slots:v,name:"Tab"})}}}),xe=x({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:o,attrs:v}){let d=z("TabPanels");return()=>{let s={selectedIndex:d.selectedIndex.value};return N({theirProps:e,ourProps:{},slot:s,attrs:v,slots:o,name:"TabPanels"})}}}),Oe=x({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-tabs-panel-${le()}`},tabIndex:{type:Number,default:0}},setup(e,{attrs:o,slots:v,expose:d}){let s=z("TabPanel"),a=h(null);d({el:a,$el:a}),B(()=>s.registerPanel(a)),ae(()=>s.unregisterPanel(a));let r=M(U),p=g(()=>{if(r.value){let i=r.value.panels.indexOf(e.id);return i===-1?r.value.panels.push(e.id)-1:i}return-1}),c=g(()=>{let i=s.panels.value.indexOf(a);return i===-1?p.value:i}),f=g(()=>c.value===s.selectedIndex.value);return()=>{var i;let n={selected:f.value},{id:b,tabIndex:T,...w}=e,l={ref:a,id:b,role:"tabpanel","aria-labelledby":(i=m(s.tabs.value[c.value]))==null?void 0:i.id,tabIndex:f.value?T:-1};return!f.value&&e.unmount&&!e.static?D(ne,{as:"span",...l}):N({ourProps:l,theirProps:w,slot:n,attrs:o,slots:v,features:ee.Static|ee.RenderStrategy,visible:f.value,name:"TabPanel"})}}});const Ae=ve(K.ui.strategy,K.ui.tabs,oe),He=x({components:{HTabGroup:$e,HTabList:ke,HTab:we,HTabPanels:xe,HTabPanel:Oe},inheritAttrs:!1,props:{modelValue:{type:Number,default:void 0},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},defaultIndex:{type:Number,default:0},items:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:v,attrs:d}=ie("tabs",J(e,"ui"),Ae,J(e,"class")),s=h(),a=h([]),r=h(),p=h(e.modelValue||e.defaultIndex);function c(i){var b;const n=(b=a.value[i])==null?void 0:b.$el;n&&(r.value.style.top=`${n.offsetTop}px`,r.value.style.left=`${n.offsetLeft}px`,r.value.style.width=`${n.offsetWidth}px`,r.value.style.height=`${n.offsetHeight}px`)}function f(i){p.value=i,o("change",i),e.modelValue!==void 0&&o("update:modelValue",i),c(i)}return ue(s,()=>{c(p.value)}),te(()=>e.modelValue,i=>{p.value=i,c(i)}),B(()=>c(p.value)),{ui:v,attrs:d,listRef:s,itemRefs:a,markerRef:r,selectedIndex:p,onChange:f}}}),Ee={class:"truncate"};function Fe(e,o,v,d,s,a){const r=H("HTab"),p=H("HTabList"),c=H("HTabPanel"),f=H("HTabPanels"),i=H("HTabGroup");return E(),V(i,be({vertical:e.orientation==="vertical","selected-index":e.selectedIndex,as:"div",class:e.ui.wrapper},e.attrs,{onChange:e.onChange}),{default:F(()=>[Q(p,{ref:"listRef",class:O([e.ui.list.base,e.ui.list.background,e.ui.list.rounded,e.ui.list.shadow,e.ui.list.padding,e.ui.list.width,e.orientation==="horizontal"&&e.ui.list.height,e.orientation==="horizontal"&&"inline-grid items-center"]),style:ce([e.orientation==="horizontal"&&`grid-template-columns: repeat(${e.items.length}, minmax(0, 1fr))`])},{default:F(()=>[L("div",{ref:"markerRef",class:O(e.ui.list.marker.wrapper)},[L("div",{class:O([e.ui.list.marker.base,e.ui.list.marker.background,e.ui.list.marker.rounded,e.ui.list.marker.shadow])},null,2)],2),(E(!0),X(q,null,Y(e.items,(n,b)=>(E(),V(r,{key:b,ref_for:!0,ref:"itemRefs",disabled:n.disabled,as:"template"},{default:F(({selected:T,disabled:w})=>[L("button",{class:O([e.ui.list.tab.base,e.ui.list.tab.background,e.ui.list.tab.height,e.ui.list.tab.padding,e.ui.list.tab.size,e.ui.list.tab.font,e.ui.list.tab.rounded,e.ui.list.tab.shadow,T?e.ui.list.tab.active:e.ui.list.tab.inactive])},[Z(e.$slots,"default",{item:n,index:b,selected:T,disabled:w},()=>[L("span",Ee,_(n.label),1)])],2)]),_:2},1032,["disabled"]))),128))]),_:3},8,["class","style"]),Q(f,{class:O(e.ui.container)},{default:F(()=>[(E(!0),X(q,null,Y(e.items,(n,b)=>(E(),V(c,{key:b,class:O(e.ui.base),tabindex:"-1"},{default:F(({selected:T})=>[Z(e.$slots,n.slot||"item",{item:n,index:b,selected:T},()=>[fe(_(n.content),1)])]),_:2},1032,["class"]))),128))]),_:3},8,["class"])]),_:3},16,["vertical","selected-index","class","onChange"])}const Ve=pe(He,[["render",Fe]]);export{Ve as default};
