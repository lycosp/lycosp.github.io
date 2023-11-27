import{f as V,r as E,h as k,g as ie,k as Y,M as F,F as Z,i as J,j as pe,l as Q,_ as ye,m as Se,n as oe,q as te,O as he,s as R,o as G,y as $e,w as A,b as K,A as le,a as ne,c as ae,x as z,P as we,T as Ee,D as re,I as ue}from"./entry.2a5111f6.js";import{u as ke,M as Oe}from"./ui.config.f959c0ad.js";import{u as Be}from"./usePopper.47c9a107.js";import{o as n,u as C,H as X,t as N,N as se,a as T}from"./dom.f123a28b.js";import{m as x,E as _,w as Ie,h as Me,P as D,N as I,T as q}from"./focus-management.8442804d.js";import{c as Fe,l as L,p as Te}from"./open-closed.46cf267e.js";import{b as De}from"./use-resolve-button-type.34c4b05a.js";import{y as Ce}from"./use-outside-click.163f26c0.js";import{V as Ne,p as He,E as je,n as ve,d as M}from"./use-root-containers.aedb8b87.js";import{f as U,a as W}from"./hidden.f7bd78ae.js";import"./index.73c4a044.js";import"./index.fc6a0546.js";var Ae=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ae||{});let de=Symbol("PopoverContext");function ee(e){let P=Q(de,null);if(P===null){let S=new Error(`<${e} /> is missing a parent <${me.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,ee),S}return P}let Le=Symbol("PopoverGroupContext");function ce(){return Q(Le,null)}let fe=Symbol("PopoverPanelContext");function Ve(){return Q(fe,null)}let me=V({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:S,expose:O}){var t;let o=E(null);O({el:o,$el:o});let f=E(1),r=E(null),y=E(null),d=E(null),c=E(null),$=k(()=>x(o)),B=k(()=>{var l,u;if(!n(r)||!n(c))return!1;for(let j of document.querySelectorAll("body > *"))if(Number(j==null?void 0:j.contains(n(r)))^Number(j==null?void 0:j.contains(n(c))))return!0;let i=_(),w=i.indexOf(n(r)),H=(w+i.length-1)%i.length,be=(w+1)%i.length,Pe=i[H],ge=i[be];return!((l=n(c))!=null&&l.contains(Pe))&&!((u=n(c))!=null&&u.contains(ge))}),v={popoverState:f,buttonId:E(null),panelId:E(null),panel:c,button:r,isPortalled:B,beforePanelSentinel:y,afterPanelSentinel:d,togglePopover(){f.value=C(f.value,{0:1,1:0})},closePopover(){f.value!==1&&(f.value=1)},close(l){v.closePopover();let u=(()=>l?l instanceof HTMLElement?l:l.value instanceof HTMLElement?n(l):n(v.button):n(v.button))();u==null||u.focus()}};ie(de,v),Fe(k(()=>C(f.value,{0:L.Open,1:L.Closed})));let h={buttonId:v.buttonId,panelId:v.panelId,close(){v.closePopover()}},g=ce(),p=g==null?void 0:g.registerPopover,[b,s]=Ne(),a=He({mainTreeNodeRef:g==null?void 0:g.mainTreeNodeRef,portals:b,defaultContainers:[r,c]});function m(){var l,u,i,w;return(w=g==null?void 0:g.isFocusWithinPopoverGroup())!=null?w:((l=$.value)==null?void 0:l.activeElement)&&(((u=n(r))==null?void 0:u.contains($.value.activeElement))||((i=n(c))==null?void 0:i.contains($.value.activeElement)))}return Y(()=>p==null?void 0:p(h)),je((t=$.value)==null?void 0:t.defaultView,"focus",l=>{var u,i;l.target!==window&&l.target instanceof HTMLElement&&f.value===0&&(m()||r&&c&&(a.contains(l.target)||(u=n(v.beforePanelSentinel))!=null&&u.contains(l.target)||(i=n(v.afterPanelSentinel))!=null&&i.contains(l.target)||v.closePopover()))},!0),Ce(a.resolveContainers,(l,u)=>{var i;v.closePopover(),Ie(u,Me.Loose)||(l.preventDefault(),(i=n(r))==null||i.focus())},k(()=>f.value===0)),()=>{let l={open:f.value===0,close:v.close};return F(Z,[F(s,{},()=>X({theirProps:{...e,...S},ourProps:{ref:o},slot:l,slots:P,attrs:S,name:"Popover"})),F(a.MainTreeNode)])}}}),Re=V({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${N()}`}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:O}){let t=ee("PopoverButton"),o=k(()=>x(t.button));O({el:t.button,$el:t.button}),J(()=>{t.buttonId.value=e.id}),pe(()=>{t.buttonId.value=null});let f=ce(),r=f==null?void 0:f.closeOthers,y=Ve(),d=k(()=>y===null?!1:y.value===t.panelId.value),c=E(null),$=`headlessui-focus-sentinel-${N()}`;d.value||Y(()=>{t.button.value=c.value});let B=De(k(()=>({as:e.as,type:P.type})),c);function v(a){var m,l,u,i,w;if(d.value){if(t.popoverState.value===1)return;switch(a.key){case T.Space:case T.Enter:a.preventDefault(),(l=(m=a.target).click)==null||l.call(m),t.closePopover(),(u=n(t.button))==null||u.focus();break}}else switch(a.key){case T.Space:case T.Enter:a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover();break;case T.Escape:if(t.popoverState.value!==0)return r==null?void 0:r(t.buttonId.value);if(!n(t.button)||(i=o.value)!=null&&i.activeElement&&!((w=n(t.button))!=null&&w.contains(o.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),t.closePopover();break}}function h(a){d.value||a.key===T.Space&&a.preventDefault()}function g(a){var m,l;e.disabled||(d.value?(t.closePopover(),(m=n(t.button))==null||m.focus()):(a.preventDefault(),a.stopPropagation(),t.popoverState.value===1&&(r==null||r(t.buttonId.value)),t.togglePopover(),(l=n(t.button))==null||l.focus()))}function p(a){a.preventDefault(),a.stopPropagation()}let b=ve();function s(){let a=n(t.panel);if(!a)return;function m(){C(b.value,{[M.Forwards]:()=>D(a,I.First),[M.Backwards]:()=>D(a,I.Last)})===q.Error&&D(_().filter(l=>l.dataset.headlessuiFocusGuard!=="true"),C(b.value,{[M.Forwards]:I.Next,[M.Backwards]:I.Previous}),{relativeTo:n(t.button)})}m()}return()=>{let a=t.popoverState.value===0,m={open:a},{id:l,...u}=e,i=d.value?{ref:c,type:B.value,onKeydown:v,onClick:g}:{ref:c,id:l,type:B.value,"aria-expanded":t.popoverState.value===0,"aria-controls":n(t.panel)?t.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:v,onKeyup:h,onClick:g,onMousedown:p};return F(Z,[X({ourProps:i,theirProps:{...P,...u},slot:m,attrs:P,slots:S,name:"PopoverButton"}),a&&!d.value&&t.isPortalled.value&&F(U,{id:$,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Ge=V({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${N()}`}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:O}){let{focus:t}=e,o=ee("PopoverPanel"),f=k(()=>x(o.panel)),r=`headlessui-focus-sentinel-before-${N()}`,y=`headlessui-focus-sentinel-after-${N()}`;O({el:o.panel,$el:o.panel}),J(()=>{o.panelId.value=e.id}),pe(()=>{o.panelId.value=null}),ie(fe,o.panelId),Y(()=>{var p,b;if(!t||o.popoverState.value!==0||!o.panel)return;let s=(p=f.value)==null?void 0:p.activeElement;(b=n(o.panel))!=null&&b.contains(s)||D(n(o.panel),I.First)});let d=Te(),c=k(()=>d!==null?(d.value&L.Open)===L.Open:o.popoverState.value===0);function $(p){var b,s;switch(p.key){case T.Escape:if(o.popoverState.value!==0||!n(o.panel)||f.value&&!((b=n(o.panel))!=null&&b.contains(f.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(s=n(o.button))==null||s.focus();break}}function B(p){var b,s,a,m,l;let u=p.relatedTarget;u&&n(o.panel)&&((b=n(o.panel))!=null&&b.contains(u)||(o.closePopover(),((a=(s=n(o.beforePanelSentinel))==null?void 0:s.contains)!=null&&a.call(s,u)||(l=(m=n(o.afterPanelSentinel))==null?void 0:m.contains)!=null&&l.call(m,u))&&u.focus({preventScroll:!0})))}let v=ve();function h(){let p=n(o.panel);if(!p)return;function b(){C(v.value,{[M.Forwards]:()=>{var s;D(p,I.First)===q.Error&&((s=n(o.afterPanelSentinel))==null||s.focus())},[M.Backwards]:()=>{var s;(s=n(o.button))==null||s.focus({preventScroll:!0})}})}b()}function g(){let p=n(o.panel);if(!p)return;function b(){C(v.value,{[M.Forwards]:()=>{let s=n(o.button),a=n(o.panel);if(!s)return;let m=_(),l=m.indexOf(s),u=m.slice(0,l+1),i=[...m.slice(l+1),...u];for(let w of i.slice())if(w.dataset.headlessuiFocusGuard==="true"||a!=null&&a.contains(w)){let H=i.indexOf(w);H!==-1&&i.splice(H,1)}D(i,I.First,{sorted:!1})},[M.Backwards]:()=>{var s;D(p,I.Previous)===q.Error&&((s=n(o.button))==null||s.focus())}})}b()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{id:b,focus:s,...a}=e,m={ref:o.panel,id:b,onKeydown:$,onFocusout:t&&o.popoverState.value===0?B:void 0,tabIndex:-1};return X({ourProps:m,theirProps:{...P,...a},attrs:P,slot:p,slots:{...S,default:(...l)=>{var u;return[F(Z,[c.value&&o.isPortalled.value&&F(U,{id:r,ref:o.beforePanelSentinel,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}),(u=S.default)==null?void 0:u.call(S,...l),c.value&&o.isPortalled.value&&F(U,{id:y,ref:o.afterPanelSentinel,features:W.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g})])]}},features:se.RenderStrategy|se.Static,visible:c.value,name:"PopoverPanel"})}}});const Ke=Se(oe.ui.strategy,oe.ui.popover,Oe),ze=V({components:{HPopover:me,HPopoverButton:Re,HPopoverPanel:Ge},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:P,attrs:S}=ke("popover",te(e,"ui"),Ke,te(e,"class")),O=k(()=>he(e.mode==="hover"?{offsetDistance:0}:{},e.popper,P.value.popper)),[t,o]=Be(O.value),f=E(null),r=E(null);let y=null,d=null;J(()=>{var g;const v=(g=f.value)==null?void 0:g.$.provides;if(!v)return;const h=Object.getOwnPropertySymbols(v);r.value=h.length&&v[h[0]]});const c=k(()=>{var g,p;const h=`${((g=e.popper)==null?void 0:g.offsetDistance)||((p=P.value.popper)==null?void 0:p.offsetDistance)||8}px`;return e.mode==="hover"?{paddingTop:h,paddingBottom:h,paddingLeft:h,paddingRight:h}:{}});function $(){e.mode!=="hover"||!r.value||(d&&(clearTimeout(d),d=null),r.value.popoverState!==0&&(y=y||setTimeout(()=>{r.value.togglePopover&&r.value.togglePopover(),y=null},e.openDelay)))}function B(){e.mode!=="hover"||!r.value||(y&&(clearTimeout(y),y=null),r.value.popoverState!==1&&(d=d||setTimeout(()=>{r.value.closePopover&&r.value.closePopover(),d=null},e.closeDelay)))}return{ui:P,attrs:S,popover:f,popper:O,trigger:t,container:o,containerStyle:c,onMouseOver:$,onMouseLeave:B}}}),qe=["disabled"];function Ue(e,P,S,O,t,o){const f=R("HPopoverButton"),r=R("HPopoverPanel"),y=R("HPopover");return G(),$e(y,re({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:A(({open:d,close:c})=>[K(f,{ref:"trigger",as:"div",disabled:e.disabled,class:"inline-flex w-full",role:"button",onMouseover:e.onMouseOver},{default:A(()=>[le(e.$slots,"default",{open:e.open!==void 0?e.open:d,close:c},()=>[ne("button",{disabled:e.disabled}," Open ",8,qe)])]),_:2},1032,["disabled","onMouseover"]),(e.open!==void 0?e.open:d)?(G(),ae("div",{key:0,ref:"container",class:z([e.ui.container,e.ui.width]),style:we(e.containerStyle),onMouseover:P[0]||(P[0]=(...$)=>e.onMouseOver&&e.onMouseOver(...$))},[K(Ee,re({appear:""},e.ui.transition),{default:A(()=>[ne("div",null,[e.popper.arrow?(G(),ae("div",{key:0,"data-popper-arrow":"",class:z(["invisible before:visible before:block before:rotate-45 before:z-[-1]",Object.values(e.ui.arrow)])},null,2)):ue("",!0),K(r,{class:z([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:A(()=>[le(e.$slots,"panel",{open:e.open!==void 0?e.open:d,close:c})]),_:2},1032,["class"])])]),_:2},1040)],38)):ue("",!0)]),_:3},16,["class","onMouseleave"])}const no=ye(ze,[["render",Ue]]);export{no as default};
