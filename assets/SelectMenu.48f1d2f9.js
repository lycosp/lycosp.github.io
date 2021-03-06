import pe from"./Icon.4b65a0f5.js";import ve from"./Avatar.2391a564.js";import{f as X,r as P,h as s,g as he,i as ne,U as oe,M as ue,F as ce,j as Oe,k as Se,N as E,l as Me,V as T,_ as Ie,m as be,n as F,q as le,O as ke,H as G,s as we,o as m,y as j,w as Q,c as B,I as D,Q as J,A as U,a as q,D as te,x as y,b as x,t as W,T as Ce,v as Le,P as Re,d as Ae}from"./entry.2266861b.js";import{c as Ve}from"./index.30512323.js";import{t as Be}from"./tw-merge.56b3fbf2.js";import{u as re,s as Pe,t as Te}from"./ui.config.9ee23051.js";import{u as He}from"./usePopper.d5f07b94.js";import{u as De}from"./useFormGroup.6d7b482c.js";import{J as Ne,G as je,X as qe,Y as ze,Q as $e}from"./combobox.5cb1b0cd.js";import{u as z,o as C,K as Ue,H as ee,T as Ee,t as ie,N as se,a as I}from"./dom.bec56b3d.js";import{x as Fe,a as L,u as Qe}from"./use-tracked-pointer.7e5c98dd.js";import{c as We,l as _,p as Ke}from"./open-closed.b07d8f1a.js";import{b as Ge}from"./use-resolve-button-type.704af356.js";import{w as Je,h as Xe,O as Ye}from"./focus-management.1c1274fc.js";import{y as Ze}from"./use-outside-click.3f340fda.js";import{f as xe,a as _e}from"./hidden.8eb6b135.js";import{d as ea,e as aa}from"./use-controllable.5d5b887b.js";import{p as la}from"./use-text-value.f14bea48.js";import{u as ta}from"./index.b873b1db.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";function na(e,v){return e===v}var oa=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(oa||{}),ia=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ia||{}),ua=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ua||{});function ra(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let fe=Symbol("ListboxContext");function ae(e){let v=Me(fe,null);if(v===null){let w=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(w,ae),w}return v}let sa=X({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>na},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:v,attrs:w,emit:i}){let a=P(1),h=P(null),b=P(null),O=P(null),f=P([]),t=P(""),l=P(null),S=P(1);function c(n=o=>o){let o=l.value!==null?f.value[l.value]:null,u=Ye(n(f.value.slice()),k=>C(k.dataRef.domRef)),p=o?u.indexOf(o):null;return p===-1&&(p=null),{options:u,activeOptionIndex:p}}let d=s(()=>e.multiple?1:0),[R,M]=ea(s(()=>e.modelValue),n=>i("update:modelValue",n),s(()=>e.defaultValue)),V=s(()=>R.value===void 0?z(d.value,{1:[],0:void 0}):R.value),r={listboxState:a,value:V,mode:d,compare(n,o){if(typeof e.by=="string"){let u=e.by;return(n==null?void 0:n[u])===(o==null?void 0:o[u])}return e.by(n,o)},orientation:s(()=>e.horizontal?"horizontal":"vertical"),labelRef:h,buttonRef:b,optionsRef:O,disabled:s(()=>e.disabled),options:f,searchQuery:t,activeOptionIndex:l,activationTrigger:S,closeListbox(){e.disabled||a.value!==1&&(a.value=1,l.value=null)},openListbox(){e.disabled||a.value!==0&&(a.value=0)},goToOption(n,o,u){if(e.disabled||a.value===1)return;let p=c(),k=Fe(n===L.Specific?{focus:L.Specific,id:o}:{focus:n},{resolveItems:()=>p.options,resolveActiveIndex:()=>p.activeOptionIndex,resolveId:$=>$.id,resolveDisabled:$=>$.dataRef.disabled});t.value="",l.value=k,S.value=u??1,f.value=p.options},search(n){if(e.disabled||a.value===1)return;let o=t.value!==""?0:1;t.value+=n.toLowerCase();let u=(l.value!==null?f.value.slice(l.value+o).concat(f.value.slice(0,l.value+o)):f.value).find(k=>k.dataRef.textValue.startsWith(t.value)&&!k.dataRef.disabled),p=u?f.value.indexOf(u):-1;p===-1||p===l.value||(l.value=p,S.value=1)},clearSearch(){e.disabled||a.value!==1&&t.value!==""&&(t.value="")},registerOption(n,o){let u=c(p=>[...p,{id:n,dataRef:o}]);f.value=u.options,l.value=u.activeOptionIndex},unregisterOption(n){let o=c(u=>{let p=u.findIndex(k=>k.id===n);return p!==-1&&u.splice(p,1),u});f.value=o.options,l.value=o.activeOptionIndex,S.value=1},theirOnChange(n){e.disabled||M(n)},select(n){e.disabled||M(z(d.value,{0:()=>n,1:()=>{let o=T(r.value.value).slice(),u=T(n),p=o.findIndex(k=>r.compare(u,T(k)));return p===-1?o.push(u):o.splice(p,1),o}}))}};Ze([b,O],(n,o)=>{var u;r.closeListbox(),Je(o,Xe.Loose)||(n.preventDefault(),(u=C(b))==null||u.focus())},s(()=>a.value===0)),he(fe,r),We(s(()=>z(a.value,{0:_.Open,1:_.Closed})));let g=s(()=>{var n;return(n=C(b))==null?void 0:n.closest("form")});return ne(()=>{oe([g],()=>{if(!g.value||e.defaultValue===void 0)return;function n(){r.theirOnChange(e.defaultValue)}return g.value.addEventListener("reset",n),()=>{var o;(o=g.value)==null||o.removeEventListener("reset",n)}},{immediate:!0})}),()=>{let{name:n,modelValue:o,disabled:u,form:p,...k}=e,$={open:a.value===0,disabled:u,value:V.value};return ue(ce,[...n!=null&&V.value!=null?aa({[n]:V.value}).map(([Y,Z])=>ue(xe,Ue({features:_e.Hidden,key:Y,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:p,name:Y,value:Z}))):[],ee({ourProps:{},theirProps:{...w,...Ee(k,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:$,slots:v,attrs:w,name:"Listbox"})])}}}),da=X({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${ie()}`}},setup(e,{attrs:v,slots:w,expose:i}){let a=ae("ListboxButton");i({el:a.buttonRef,$el:a.buttonRef});function h(t){switch(t.key){case I.Space:case I.Enter:case I.ArrowDown:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=C(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(L.First)});break;case I.ArrowUp:t.preventDefault(),a.openListbox(),E(()=>{var l;(l=C(a.optionsRef))==null||l.focus({preventScroll:!0}),a.value.value||a.goToOption(L.Last)});break}}function b(t){switch(t.key){case I.Space:t.preventDefault();break}}function O(t){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),E(()=>{var l;return(l=C(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(t.preventDefault(),a.openListbox(),ra(()=>{var l;return(l=C(a.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let f=Ge(s(()=>({as:e.as,type:v.type})),a.buttonRef);return()=>{var t,l;let S={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{id:c,...d}=e,R={ref:a.buttonRef,id:c,type:f.value,"aria-haspopup":"listbox","aria-controls":(t=C(a.optionsRef))==null?void 0:t.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(l=C(a.labelRef))==null?void 0:l.id,c].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:h,onKeyup:b,onClick:O};return ee({ourProps:R,theirProps:d,slot:S,attrs:v,slots:w,name:"ListboxButton"})}}}),pa=X({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${ie()}`}},setup(e,{attrs:v,slots:w,expose:i}){let a=ae("ListboxOptions"),h=P(null);i({el:a.optionsRef,$el:a.optionsRef});function b(t){switch(h.value&&clearTimeout(h.value),t.key){case I.Space:if(a.searchQuery.value!=="")return t.preventDefault(),t.stopPropagation(),a.search(t.key);case I.Enter:if(t.preventDefault(),t.stopPropagation(),a.activeOptionIndex.value!==null){let l=a.options.value[a.activeOptionIndex.value];a.select(l.dataRef.value)}a.mode.value===0&&(a.closeListbox(),E(()=>{var l;return(l=C(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case z(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Next);case z(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Previous);case I.Home:case I.PageUp:return t.preventDefault(),t.stopPropagation(),a.goToOption(L.First);case I.End:case I.PageDown:return t.preventDefault(),t.stopPropagation(),a.goToOption(L.Last);case I.Escape:t.preventDefault(),t.stopPropagation(),a.closeListbox(),E(()=>{var l;return(l=C(a.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case I.Tab:t.preventDefault(),t.stopPropagation();break;default:t.key.length===1&&(a.search(t.key),h.value=setTimeout(()=>a.clearSearch(),350));break}}let O=Ke(),f=s(()=>O!==null?(O.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var t,l,S,c;let d={open:a.listboxState.value===0},{id:R,...M}=e,V={"aria-activedescendant":a.activeOptionIndex.value===null||(t=a.options.value[a.activeOptionIndex.value])==null?void 0:t.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(c=(l=C(a.labelRef))==null?void 0:l.id)!=null?c:(S=C(a.buttonRef))==null?void 0:S.id,"aria-orientation":a.orientation.value,id:R,onKeydown:b,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:V,theirProps:M,slot:d,attrs:v,slots:w,features:se.RenderStrategy|se.Static,visible:f.value,name:"ListboxOptions"})}}}),va=X({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${ie()}`}},setup(e,{slots:v,attrs:w,expose:i}){let a=ae("ListboxOption"),h=P(null);i({el:h,$el:h});let b=s(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===e.id:!1),O=s(()=>z(a.mode.value,{0:()=>a.compare(T(a.value.value),T(e.value)),1:()=>T(a.value.value).some(r=>a.compare(T(r),T(e.value)))})),f=s(()=>z(a.mode.value,{1:()=>{var r;let g=T(a.value.value);return((r=a.options.value.find(n=>g.some(o=>a.compare(T(o),T(n.dataRef.value)))))==null?void 0:r.id)===e.id},0:()=>O.value})),t=la(h),l=s(()=>({disabled:e.disabled,value:e.value,get textValue(){return t()},domRef:h}));ne(()=>a.registerOption(e.id,l)),Oe(()=>a.unregisterOption(e.id)),ne(()=>{oe([a.listboxState,O],()=>{a.listboxState.value===0&&O.value&&z(a.mode.value,{1:()=>{f.value&&a.goToOption(L.Specific,e.id)},0:()=>{a.goToOption(L.Specific,e.id)}})},{immediate:!0})}),Se(()=>{a.listboxState.value===0&&b.value&&a.activationTrigger.value!==0&&E(()=>{var r,g;return(g=(r=C(h))==null?void 0:r.scrollIntoView)==null?void 0:g.call(r,{block:"nearest"})})});function S(r){if(e.disabled)return r.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),E(()=>{var g;return(g=C(a.buttonRef))==null?void 0:g.focus({preventScroll:!0})}))}function c(){if(e.disabled)return a.goToOption(L.Nothing);a.goToOption(L.Specific,e.id)}let d=Qe();function R(r){d.update(r)}function M(r){d.wasMoved(r)&&(e.disabled||b.value||a.goToOption(L.Specific,e.id,0))}function V(r){d.wasMoved(r)&&(e.disabled||b.value&&a.goToOption(L.Nothing))}return()=>{let{disabled:r}=e,g={active:b.value,selected:O.value,disabled:r},{id:n,value:o,disabled:u,...p}=e,k={id:n,ref:h,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":O.value,disabled:void 0,onClick:S,onFocus:c,onPointerenter:R,onMouseenter:R,onPointermove:M,onMousemove:M,onPointerleave:V,onMouseleave:V};return ee({ourProps:k,theirProps:p,slot:g,attrs:w,slots:v,name:"ListboxOption"})}}});const H=be(F.ui.strategy,F.ui.select,Pe),de=be(F.ui.strategy,F.ui.selectMenu,Te),ca=X({components:{HCombobox:Ne,HComboboxButton:je,HComboboxOptions:qe,HComboboxOption:ze,HComboboxInput:$e,HListbox:sa,HListboxButton:da,HListboxOptions:pa,HListboxOption:va,UIcon:pe,UAvatar:ve},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>H.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>H.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>de.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(H.size).includes(e)}},color:{type:String,default:()=>H.default.color,validator(e){return[...F.ui.colors,...Object.keys(H.color)].includes(e)}},variant:{type:String,default:()=>H.default.variant,validator(e){return[...Object.keys(H.variant),...Object.values(H.color).flatMap(v=>Object.keys(v))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0},uiMenu:{type:Object,default:void 0}},emits:["update:modelValue","open","close","change"],setup(e,{emit:v,slots:w}){const{ui:i,attrs:a}=re("select",le(e,"ui"),H,le(e,"class")),{ui:h}=re("selectMenu",le(e,"uiMenu"),de),b=s(()=>ke({},e.popper,h.value.popper)),[O,f]=He(b.value),{emitFormBlur:t,emitFormChange:l,inputId:S,color:c,size:d,name:R}=De(e,H),M=P(""),V=P(),r=s(()=>{var N,K;const A=((K=(N=i.value.color)==null?void 0:N[c.value])==null?void 0:K[e.variant])||i.value.variant[e.variant];return Be(G(i.value.base,i.value.rounded,"text-left cursor-default",i.value.size[d.value],i.value.gap[d.value],e.padded?i.value.padding[d.value]:"p-0",A==null?void 0:A.replaceAll("{color}",c.value),(g.value||w.leading)&&i.value.leading.padding[d.value],(n.value||w.trailing)&&i.value.trailing.padding[d.value],"inline-flex items-center"),e.selectClass)}),g=s(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),n=s(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),o=s(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),u=s(()=>e.loading&&!g.value?e.loadingIcon:e.trailingIcon||e.icon),p=s(()=>G(i.value.icon.leading.wrapper,i.value.icon.leading.pointer,i.value.icon.leading.padding[d.value])),k=s(()=>G(i.value.icon.base,F.ui.colors.includes(c.value)&&i.value.icon.color.replaceAll("{color}",c.value),i.value.icon.size[d.value],e.loading&&"animate-spin")),$=s(()=>G(i.value.icon.trailing.wrapper,i.value.icon.trailing.pointer,i.value.icon.trailing.padding[d.value])),Y=s(()=>G(i.value.icon.base,F.ui.colors.includes(c.value)&&i.value.icon.color.replaceAll("{color}",c.value),i.value.icon.size[d.value],e.loading&&!g.value&&"animate-spin")),Z=typeof e.searchable=="function"?ta(e.searchable,e.debounce):void 0,me=Ve(async()=>e.searchable&&Z?await Z(M.value):M.value===""?e.options:e.options.filter(A=>{var N;return((N=e.searchAttributes)!=null&&N.length?e.searchAttributes:[e.optionAttribute]).some(K=>["string","number"].includes(typeof A)?A.toString().search(new RegExp(M.value,"i"))!==-1:A[K]&&A[K].search(new RegExp(M.value,"i"))!==-1)})),ge=s(()=>M.value===""?null:{[e.optionAttribute]:M.value});oe(f,A=>{A?v("open"):(v("close"),t())});function ye(A){var N;M.value&&((N=V.value)!=null&&N.$el)&&(M.value="",V.value.$el.value=""),v("update:modelValue",A),v("change",A),l()}return{ui:i,uiMenu:h,attrs:a,name:R,inputId:S,popper:b,trigger:O,container:f,isLeading:g,isTrailing:n,selectClass:r,leadingIconName:o,leadingIconClass:k,leadingWrapperIconClass:p,trailingIconName:u,trailingIconClass:Y,trailingWrapperIconClass:$,filteredOptions:me,queryOption:ge,query:M,onUpdate:ye}}}),ba=["value","required"],fa=["id","disabled"],ma={key:0,class:"block truncate"},ga={key:1,class:"block truncate"},ya={class:"truncate"},ha={class:"block truncate"};function Oa(e,v,w,i,a,h){const b=pe,O=we("HComboboxInput"),f=ve;return m(),j(J(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled||e.loading,as:"div",class:y(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:Q(({open:t})=>[e.required?(m(),B("input",{key:0,value:e.modelValue,required:e.required,class:"absolute inset-0 w-px opacity-0 cursor-default",tabindex:"-1","aria-hidden":"true"},null,8,ba)):D("",!0),(m(),j(J(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:"inline-flex w-full"},{default:Q(()=>[U(e.$slots,"default",{open:t,disabled:e.disabled,loading:e.loading},()=>[q("button",te({id:e.inputId,class:e.selectClass,disabled:e.disabled||e.loading,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(m(),B("span",{key:0,class:y(e.leadingWrapperIconClass)},[U(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[x(b,{name:e.leadingIconName,class:y(e.leadingIconClass)},null,8,["name","class"])])],2)):D("",!0),U(e.$slots,"label",{},()=>[e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length?(m(),B("span",ma,W(e.modelValue.length)+" selected",1)):!e.multiple&&e.modelValue?(m(),B("span",ga,W(["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]),1)):(m(),B("span",{key:2,class:y(["block truncate",e.uiMenu.placeholder])},W(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(m(),B("span",{key:1,class:y(e.trailingWrapperIconClass)},[U(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[x(b,{name:e.trailingIconName,class:y(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):D("",!0)],16,fa)])]),_:2},1536)),t?(m(),B("div",{key:1,ref:"container",class:y([e.uiMenu.container,e.uiMenu.width])},[x(Ce,te({appear:""},e.uiMenu.transition),{default:Q(()=>[q("div",null,[e.popper.arrow?(m(),B("div",{key:0,"data-popper-arrow":"",class:y(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.uiMenu.arrow)])},null,2)):D("",!0),(m(),j(J(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:y([e.uiMenu.base,e.uiMenu.divide,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:Q(()=>[e.searchable?(m(),j(O,{key:0,ref:"searchInput","display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:y(e.uiMenu.input),onChange:v[0]||(v[0]=l=>e.query=l.target.value)},null,8,["display-value","placeholder","class"])):D("",!0),(m(!0),B(ce,null,Le(e.filteredOptions,(l,S)=>(m(),j(J(e.searchable?"HComboboxOption":"HListboxOption"),{key:S,as:"template",value:e.valueAttribute?l[e.valueAttribute]:l,disabled:l.disabled},{default:Q(({active:c,selected:d,disabled:R})=>[q("li",{class:y([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,c?e.uiMenu.option.active:e.uiMenu.option.inactive,d&&e.uiMenu.option.selected,R&&e.uiMenu.option.disabled])},[q("div",{class:y(e.uiMenu.option.container)},[U(e.$slots,"option",{option:l,active:c,selected:d},()=>[l.icon?(m(),j(b,{key:0,name:l.icon,class:y([e.uiMenu.option.icon.base,c?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,l.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):l.avatar?(m(),j(f,te({key:1},{size:e.uiMenu.option.avatar.size,...l.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):l.chip?(m(),B("span",{key:2,class:y(e.uiMenu.option.chip.base),style:Re({background:`#${l.chip}`})},null,6)):D("",!0),q("span",ya,W(["string","number"].includes(typeof l)?l:l[e.optionAttribute]),1)])],2),d?(m(),B("span",{key:0,class:y([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[x(b,{name:e.selectedIcon,class:y(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):D("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.queryOption&&!e.filteredOptions.length?(m(),j(J(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.queryOption,as:"template"},{default:Q(({active:l,selected:S})=>[q("li",{class:y([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,l?e.uiMenu.option.active:e.uiMenu.option.inactive])},[q("div",{class:y(e.uiMenu.option.container)},[U(e.$slots,"option-create",{option:e.queryOption,active:l,selected:S},()=>[q("span",ha,'Create "'+W(e.queryOption[e.optionAttribute])+'"',1)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!e.filteredOptions.length?(m(),B("p",{key:2,class:y(e.uiMenu.option.empty)},[U(e.$slots,"option-empty",{query:e.query},()=>[Ae(' No results for "'+W(e.query)+'". ',1)])],2)):D("",!0)]),_:3},8,["class"]))])]),_:3},16)],2)):D("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const Ea=Ie(ca,[["render",Oa]]);export{Ea as default};
