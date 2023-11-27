import{f as L,q as R,h as a,K as V,L as D,H as p,M as d,m as B,n as g}from"./entry.2266861b.js";import k from"./Icon.4b65a0f5.js";import{u as A,m as F,i as Q}from"./ui.config.9ee23051.js";const x=B(g.ui.strategy,g.ui.meter,F),T=B(g.ui.strategy,g.ui.meterGroup,Q),Z=L({components:{UIcon:k},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>x.default.size,validator(t){return Object.keys(x.meter.bar.size).includes(t)}},indicator:{type:Boolean,default:!1},icon:{type:String,default:"i-heroicons-minus"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(t,{slots:m}){const{ui:n,attrs:I}=A("meterGroup",R(t,"ui"),T),{ui:l}=A("meter",void 0,x);if(!m.default)throw new Error("Meter Group has no Meter children.");const P=a(()=>t.min>t.max?t.max:t.min),U=a(()=>t.max<t.min?t.min:t.max),v=a(()=>V(m)),M=a(()=>({"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}})[n.value.rounded]);function q(r,u,e){if(u==e)return r<u?0:100;u>e&&(e=[u,u=e][0]);const o=(r-u)/(e-u)*100;return Math.max(0,Math.min(100,o))}const z=a(()=>v.value.map(r=>r.props.label)),h=a(()=>v.value.map(r=>q(r.props.value,t.min,t.max))),b=a(()=>Math.max(0,Math.max(h.value.reduce((r,u)=>r+u,0)))),f=a(()=>v.value.map((r,u)=>{var i,s,c,C,w,y,$,G,j,N,S,O,_;const e={};e.style={width:`${h.value[u]}%`},e.size=t.size,e.min=P.value,e.max=U.value,e.ui=((i=r.props)==null?void 0:i.ui)||{},e.ui.wrapper=((c=(s=r.props)==null?void 0:s.ui)==null?void 0:c.wrapper)||"",e.ui.wrapper+=[(w=(C=r.props)==null?void 0:C.ui)==null?void 0:w.wrapper,(($=(y=t.ui)==null?void 0:y.meter)==null?void 0:$.background)||n.value.background,n.value.transition].filter(Boolean).join(" "),e.ui.meter=((j=(G=r.props)==null?void 0:G.ui)==null?void 0:j.meter)||{},e.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,e.ui.meter.rounded="rounded-none",e.ui.meter.bar=((O=(S=(N=r.props)==null?void 0:N.ui)==null?void 0:S.meter)==null?void 0:O.bar)||{},u===0&&(e.ui.meter.rounded=`${M.value.left} rounded-e-none`),u===v.value.length-1&&(e.ui.meter.rounded=`${M.value.right} rounded-s-none`),z.value[u]=r.props.label;const o=D(r,e);return(_=o.children)==null||delete _.label,delete o.props.indicator,delete o.props.label,o})),E=a(()=>p(n.value.base,n.value.background,n.value.rounded,n.value.shadow,l.value.meter.size[t.size])),H=a(()=>p(l.value.indicator.container)),J=a(()=>p(l.value.indicator.text,l.value.indicator.size[t.size])),K=a(()=>{const r=[void 0,d("div",{class:E.value},f.value),void 0];return t.indicator?r[0]=d("div",{class:H.value},[d("div",{class:J.value,style:{width:`${b.value}%`}},Math.round(b.value)+"%")]):m.indicator&&(r[0]=m.indicator({percent:b.value})),r[2]=d("ol",{class:"list-disc list-inside"},z.value.map((u,e)=>{var i;const o=a(()=>{var s,c;return p(l.value.label.base,l.value.label.text,l.value.color[(s=f.value[e])==null?void 0:s.props.color]??l.value.label.color.replaceAll("{color}",((c=f.value[e])==null?void 0:c.props.color)??l.value.default.color),l.value.label.size[t.size])});return d("li",{class:o.value},[d(k,{name:((i=f.value[e])==null?void 0:i.props.icon)??t.icon}),`${u} (${Math.round(h.value[e])}%)`])})),r});return()=>d("div",{class:n.value.wrapper,...I.value},K.value)}});export{Z as default};
