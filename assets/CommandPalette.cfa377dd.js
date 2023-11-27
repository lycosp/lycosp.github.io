import Me from"./Icon.4b65a0f5.js";import Se from"./Button.eb845893.js";import{r as V,U as q,h as T,_ as Oe,m as Re,n as ae,f as $e,q as le,i as ue,O as xe,H as Ne,s as W,o as P,y as H,w as Y,E as Pe,a as J,x as F,I as z,b as Fe,D as he,G as Te,c as Be,F as je,v as de,ao as He,A as fe,B as De,C as Ve,t as Ke}from"./entry.2266861b.js";import{a as $,u as Ue}from"./index.b873b1db.js";import We from"./CommandPaletteGroup.04f553b9.js";import{u as ze,E as Ge}from"./ui.config.9ee23051.js";import{J as Qe,Q as Ye,X as Je}from"./combobox.5cb1b0cd.js";import"./Link.6af43be1.js";import"./nuxt-link.ae0da28c.js";import"./tw-merge.56b3fbf2.js";import"./Avatar.2391a564.js";import"./Kbd.c370c436.js";import"./dom.bec56b3d.js";import"./use-tracked-pointer.7e5c98dd.js";import"./focus-management.1c1274fc.js";import"./open-closed.b07d8f1a.js";import"./use-resolve-button-type.704af356.js";import"./use-outside-click.3f340fda.js";import"./hidden.8eb6b135.js";import"./use-controllable.5d5b887b.js";import"./disposables.57da4964.js";import"./micro-task.89dcd6af.js";function O(e){return Array.isArray?Array.isArray(e):Ee(e)==="[object Array]"}const Xe=1/0;function qe(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Xe?"-0":t}function Ze(e){return e==null?"":qe(e)}function k(e){return typeof e=="string"}function ve(e){return typeof e=="number"}function et(e){return e===!0||e===!1||tt(e)&&Ee(e)=="[object Boolean]"}function Ie(e){return typeof e=="object"}function tt(e){return Ie(e)&&e!==null}function I(e){return e!=null}function X(e){return!e.trim().length}function Ee(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const st="Incorrect 'index' type",nt=e=>`Invalid value for key ${e}`,rt=e=>`Pattern length exceeds max of ${e}.`,ot=e=>`Missing ${e} property in key`,it=e=>`Property 'weight' in key '${e}' must be a positive integer`,pe=Object.prototype.hasOwnProperty;class ct{constructor(t){this._keys=[],this._keyMap={};let s=0;t.forEach(n=>{let o=Ae(n);s+=o.weight,this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ae(e){let t=null,s=null,n=null,o=1,r=null;if(k(e)||O(e))n=e,t=me(e),s=Z(e);else{if(!pe.call(e,"name"))throw new Error(ot("name"));const i=e.name;if(n=i,pe.call(e,"weight")&&(o=e.weight,o<=0))throw new Error(it(i));t=me(i),s=Z(i),r=e.getFn}return{path:t,id:s,weight:o,src:n,getFn:r}}function me(e){return O(e)?e:e.split(".")}function Z(e){return O(e)?e.join("."):e}function at(e,t){let s=[],n=!1;const o=(r,i,c)=>{if(I(r))if(!i[c])s.push(r);else{let a=i[c];const l=r[a];if(!I(l))return;if(c===i.length-1&&(k(l)||ve(l)||et(l)))s.push(Ze(l));else if(O(l)){n=!0;for(let u=0,h=l.length;u<h;u+=1)o(l[u],i,c+1)}else i.length&&o(l,i,c+1)}};return o(e,k(t)?t.split("."):t,0),n?s:s[0]}const lt={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ut={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},ht={location:0,threshold:.6,distance:100},dt={useExtendedSearch:!1,getFn:at,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var d={...ut,...lt,...ht,...dt};const ft=/[^ ]+/g;function pt(e=1,t=3){const s=new Map,n=Math.pow(10,t);return{get(o){const r=o.match(ft).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*e),c=parseFloat(Math.round(i*n)/n);return s.set(r,c),c},clear(){s.clear()}}}class oe{constructor({getFn:t=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){this.norm=pt(s,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,k(this.docs[0])?this.docs.forEach((t,s)=>{this._addString(t,s)}):this.docs.forEach((t,s)=>{this._addObject(t,s)}),this.norm.clear())}add(t){const s=this.size();k(t)?this._addString(t,s):this._addObject(t,s)}removeAt(t){this.records.splice(t,1);for(let s=t,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(t,s){return t[this._keysMap[s]]}size(){return this.records.length}_addString(t,s){if(!I(t)||X(t))return;let n={v:t,i:s,n:this.norm.get(t)};this.records.push(n)}_addObject(t,s){let n={i:s,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(t):this.getFn(t,o.path);if(I(i)){if(O(i)){let c=[];const a=[{nestedArrIndex:-1,value:i}];for(;a.length;){const{nestedArrIndex:l,value:u}=a.pop();if(I(u))if(k(u)&&!X(u)){let h={v:u,i:l,n:this.norm.get(u)};c.push(h)}else O(u)&&u.forEach((h,f)=>{a.push({nestedArrIndex:f,value:h})})}n.$[r]=c}else if(k(i)&&!X(i)){let c={v:i,n:this.norm.get(i)};n.$[r]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function we(e,t,{getFn:s=d.getFn,fieldNormWeight:n=d.fieldNormWeight}={}){const o=new oe({getFn:s,fieldNormWeight:n});return o.setKeys(e.map(Ae)),o.setSources(t),o.create(),o}function mt(e,{getFn:t=d.getFn,fieldNormWeight:s=d.fieldNormWeight}={}){const{keys:n,records:o}=e,r=new oe({getFn:t,fieldNormWeight:s});return r.setKeys(n),r.setIndexRecords(o),r}function G(e,{errors:t=0,currentLocation:s=0,expectedLocation:n=0,distance:o=d.distance,ignoreLocation:r=d.ignoreLocation}={}){const i=t/e.length;if(r)return i;const c=Math.abs(n-s);return o?i+c/o:c?1:i}function gt(e=[],t=d.minMatchCharLength){let s=[],n=-1,o=-1,r=0;for(let i=e.length;r<i;r+=1){let c=e[r];c&&n===-1?n=r:!c&&n!==-1&&(o=r-1,o-n+1>=t&&s.push([n,o]),n=-1)}return e[r-1]&&r-n>=t&&s.push([n,r-1]),s}const B=32;function yt(e,t,s,{location:n=d.location,distance:o=d.distance,threshold:r=d.threshold,findAllMatches:i=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,includeMatches:a=d.includeMatches,ignoreLocation:l=d.ignoreLocation}={}){if(t.length>B)throw new Error(rt(B));const u=t.length,h=e.length,f=Math.max(0,Math.min(n,h));let p=r,g=f;const S=c>1||a,L=S?Array(h):[];let E;for(;(E=e.indexOf(t,g))>-1;){let M=G(t,{currentLocation:E,expectedLocation:f,distance:o,ignoreLocation:l});if(p=Math.min(M,p),g=E+u,S){let A=0;for(;A<u;)L[E+A]=1,A+=1}}g=-1;let R=[],_=1,j=u+h;const m=1<<u-1;for(let M=0;M<u;M+=1){let A=0,y=j;for(;A<y;)G(t,{errors:M,currentLocation:f+y,expectedLocation:f,distance:o,ignoreLocation:l})<=p?A=y:j=y,y=Math.floor((j-A)/2+A);j=y;let w=Math.max(1,f-y+1),N=i?h:Math.min(f+y,h)+u,C=Array(N+2);C[N+1]=(1<<M)-1;for(let v=N;v>=w;v-=1){let U=v-1,ce=s[e.charAt(U)];if(S&&(L[U]=+!!ce),C[v]=(C[v+1]<<1|1)&ce,M&&(C[v]|=(R[v+1]|R[v])<<1|1|R[v+1]),C[v]&m&&(_=G(t,{errors:M,currentLocation:U,expectedLocation:f,distance:o,ignoreLocation:l}),_<=p)){if(p=_,g=U,g<=f)break;w=Math.max(1,2*f-g)}}if(G(t,{errors:M+1,currentLocation:f,expectedLocation:f,distance:o,ignoreLocation:l})>p)break;R=C}const b={isMatch:g>=0,score:Math.max(.001,_)};if(S){const M=gt(L,c);M.length?a&&(b.indices=M):b.isMatch=!1}return b}function bt(e){let t={};for(let s=0,n=e.length;s<n;s+=1){const o=e.charAt(s);t[o]=(t[o]||0)|1<<n-s-1}return t}class Ce{constructor(t,{location:s=d.location,threshold:n=d.threshold,distance:o=d.distance,includeMatches:r=d.includeMatches,findAllMatches:i=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(f,p)=>{this.chunks.push({pattern:f,alphabet:bt(f),startIndex:p})},h=this.pattern.length;if(h>B){let f=0;const p=h%B,g=h-p;for(;f<g;)u(this.pattern.substr(f,B),f),f+=B;if(p){const S=h-B;u(this.pattern.substr(S),S)}}else u(this.pattern,0)}searchIn(t){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(t=t.toLowerCase()),this.pattern===t){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,t.length-1]]),g}const{location:o,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:a,ignoreLocation:l}=this.options;let u=[],h=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:S,startIndex:L})=>{const{isMatch:E,score:R,indices:_}=yt(t,g,S,{location:o+L,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:l});E&&(f=!0),h+=R,E&&_&&(u=[...u,..._])});let p={isMatch:f,score:f?h/this.chunks.length:1};return f&&n&&(p.indices=u),p}}class x{constructor(t){this.pattern=t}static isMultiMatch(t){return ge(t,this.multiRegex)}static isSingleMatch(t){return ge(t,this.singleRegex)}search(){}}function ge(e,t){const s=e.match(t);return s?s[1]:null}class Mt extends x{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const s=t===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class St extends x{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class vt extends x{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const s=t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class It extends x{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const s=!t.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class Et extends x{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const s=t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class At extends x{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const s=!t.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,t.length-1]}}}class ke extends x{constructor(t,{location:s=d.location,threshold:n=d.threshold,distance:o=d.distance,includeMatches:r=d.includeMatches,findAllMatches:i=d.findAllMatches,minMatchCharLength:c=d.minMatchCharLength,isCaseSensitive:a=d.isCaseSensitive,ignoreLocation:l=d.ignoreLocation}={}){super(t),this._bitapSearch=new Ce(t,{location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:l})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Le extends x{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let s=0,n;const o=[],r=this.pattern.length;for(;(n=t.indexOf(this.pattern,s))>-1;)s=n+r,o.push([n,s-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const ee=[Mt,Le,vt,It,At,Et,St,ke],ye=ee.length,wt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ct="|";function kt(e,t={}){return e.split(Ct).map(s=>{let n=s.trim().split(wt).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const c=n[r];let a=!1,l=-1;for(;!a&&++l<ye;){const u=ee[l];let h=u.isMultiMatch(c);h&&(o.push(new u(h,t)),a=!0)}if(!a)for(l=-1;++l<ye;){const u=ee[l];let h=u.isSingleMatch(c);if(h){o.push(new u(h,t));break}}}return o})}const Lt=new Set([ke.type,Le.type]);class _t{constructor(t,{isCaseSensitive:s=d.isCaseSensitive,includeMatches:n=d.includeMatches,minMatchCharLength:o=d.minMatchCharLength,ignoreLocation:r=d.ignoreLocation,findAllMatches:i=d.findAllMatches,location:c=d.location,threshold:a=d.threshold,distance:l=d.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:c,threshold:a,distance:l},this.pattern=s?t:t.toLowerCase(),this.query=kt(this.pattern,this.options)}static condition(t,s){return s.useExtendedSearch}searchIn(t){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;t=o?t:t.toLowerCase();let r=0,i=[],c=0;for(let a=0,l=s.length;a<l;a+=1){const u=s[a];i.length=0,r=0;for(let h=0,f=u.length;h<f;h+=1){const p=u[h],{isMatch:g,indices:S,score:L}=p.search(t);if(g){if(r+=1,c+=L,n){const E=p.constructor.type;Lt.has(E)?i=[...i,...S]:i.push(S)}}else{c=0,r=0,i.length=0;break}}if(r){let h={isMatch:!0,score:c/r};return n&&(h.indices=i),h}}return{isMatch:!1,score:1}}}const te=[];function Ot(...e){te.push(...e)}function se(e,t){for(let s=0,n=te.length;s<n;s+=1){let o=te[s];if(o.condition(e,t))return new o(e,t)}return new Ce(e,t)}const Q={AND:"$and",OR:"$or"},ne={PATH:"$path",PATTERN:"$val"},re=e=>!!(e[Q.AND]||e[Q.OR]),Rt=e=>!!e[ne.PATH],$t=e=>!O(e)&&Ie(e)&&!re(e),be=e=>({[Q.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function _e(e,t,{auto:s=!0}={}){const n=o=>{let r=Object.keys(o);const i=Rt(o);if(!i&&r.length>1&&!re(o))return n(be(o));if($t(o)){const a=i?o[ne.PATH]:r[0],l=i?o[ne.PATTERN]:o[a];if(!k(l))throw new Error(nt(a));const u={keyId:Z(a),pattern:l};return s&&(u.searcher=se(l,t)),u}let c={children:[],operator:r[0]};return r.forEach(a=>{const l=o[a];O(l)&&l.forEach(u=>{c.children.push(n(u))})}),c};return re(e)||(e=be(e)),n(e)}function xt(e,{ignoreFieldNorm:t=d.ignoreFieldNorm}){e.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:r,score:i})=>{const c=o?o.weight:null;n*=Math.pow(i===0&&c?Number.EPSILON:i,(c||1)*(t?1:r))}),s.score=n})}function Nt(e,t){const s=e.matches;t.matches=[],I(s)&&s.forEach(n=>{if(!I(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),t.matches.push(i)})}function Pt(e,t){t.score=e.score}function Ft(e,t,{includeMatches:s=d.includeMatches,includeScore:n=d.includeScore}={}){const o=[];return s&&o.push(Nt),n&&o.push(Pt),e.map(r=>{const{idx:i}=r,c={item:t[i],refIndex:i};return o.length&&o.forEach(a=>{a(r,c)}),c})}class K{constructor(t,s={},n){this.options={...d,...s},this.options.useExtendedSearch,this._keyStore=new ct(this.options.keys),this.setCollection(t,n)}setCollection(t,s){if(this._docs=t,s&&!(s instanceof oe))throw new Error(st);this._myIndex=s||we(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){I(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,o-=1,s.push(r))}return s}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:c}=this.options;let a=k(t)?k(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return xt(a,{ignoreFieldNorm:c}),r&&a.sort(i),ve(s)&&s>-1&&(a=a.slice(0,s)),Ft(a,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(t){const s=se(t,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:c})=>{if(!I(r))return;const{isMatch:a,score:l,indices:u}=s.searchIn(r);a&&o.push({item:r,idx:i,matches:[{score:l,value:r,norm:c,indices:u}]})}),o}_searchLogical(t){const s=_e(t,this.options),n=(c,a,l)=>{if(!c.children){const{keyId:h,searcher:f}=c,p=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(a,h),searcher:f});return p&&p.length?[{idx:l,item:a,matches:p}]:[]}const u=[];for(let h=0,f=c.children.length;h<f;h+=1){const p=c.children[h],g=n(p,a,l);if(g.length)u.push(...g);else if(c.operator===Q.AND)return[]}return u},o=this._myIndex.records,r={},i=[];return o.forEach(({$:c,i:a})=>{if(I(c)){let l=n(s,c,a);l.length&&(r[a]||(r[a]={idx:a,item:c,matches:[]},i.push(r[a])),l.forEach(({matches:u})=>{r[a].matches.push(...u)}))}}),i}_searchObjectList(t){const s=se(t,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:c})=>{if(!I(i))return;let a=[];n.forEach((l,u)=>{a.push(...this._findMatches({key:l,value:i[u],searcher:s}))}),a.length&&r.push({idx:c,item:i,matches:a})}),r}_findMatches({key:t,value:s,searcher:n}){if(!I(s))return[];let o=[];if(O(s))s.forEach(({v:r,i,n:c})=>{if(!I(r))return;const{isMatch:a,score:l,indices:u}=n.searchIn(r);a&&o.push({score:l,key:t,value:r,idx:i,norm:c,indices:u})});else{const{v:r,n:i}=s,{isMatch:c,score:a,indices:l}=n.searchIn(r);c&&o.push({score:a,key:t,value:r,norm:i,indices:l})}return o}}K.version="6.6.2";K.createIndex=we;K.parseIndex=mt;K.config=d;K.parseQuery=_e;Ot(_t);function Tt(e,t,s){const n=()=>{var i,c;return new K((i=$(t))!=null?i:[],(c=$(s))==null?void 0:c.fuseOptions)},o=V(n());q(()=>{var i;return(i=$(s))==null?void 0:i.fuseOptions},()=>{o.value=n()},{deep:!0}),q(()=>$(t),i=>{o.value.setCollection(i)},{deep:!0});const r=T(()=>{const i=$(s);if(i!=null&&i.matchAllWhenSearchEmpty&&!$(e))return $(t).map((a,l)=>({item:a,refIndex:l}));const c=i==null?void 0:i.resultLimit;return o.value.search($(e),c?{limit:c}:void 0)});return{fuse:o,results:r}}const D=Re(ae.ui.strategy,ae.ui.commandPalette,Ge),Bt=$e({components:{HCombobox:Qe,HComboboxInput:Ye,HComboboxOptions:Je,UIcon:Me,UButton:Se,CommandPaletteGroup:We},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:null},by:{type:String,default:"id"},multiple:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},groups:{type:Array,default:()=>[]},icon:{type:String,default:()=>D.default.icon},loadingIcon:{type:String,default:()=>D.default.loadingIcon},selectedIcon:{type:String,default:()=>D.default.selectedIcon},closeButton:{type:Object,default:()=>D.default.closeButton},emptyState:{type:Object,default:()=>D.default.emptyState},placeholder:{type:String,default:"Search..."},groupAttribute:{type:String,default:"label"},commandAttribute:{type:String,default:"label"},autoselect:{type:Boolean,default:!0},autoclear:{type:Boolean,default:!0},debounce:{type:Number,default:200},fuse:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:t,expose:s}){const{ui:n,attrs:o}=ze("commandPalette",le(e,"ui"),D,le(e,"class")),r=V(""),i=V(),c=V(null),a=V(!1);ue(()=>{e.autoselect&&R()}),ue(()=>{setTimeout(()=>{var M;const m=(M=i.value)==null?void 0:M.$.provides;if(!m)return;const b=Object.getOwnPropertySymbols(m);c.value=b.length&&m[b[0]]},200)});const l=T(()=>xe({},e.fuse,{fuseOptions:{keys:[e.commandAttribute]},resultLimit:12,matchAllWhenSearchEmpty:!0})),u=T(()=>{const m=[];for(const b of e.groups)b.search||m.push(...b.commands.map(M=>({...M,group:b.key})));return m}),h=V({}),{results:f}=Tt(r,u,l),p=T(()=>{var M,A;const m=[],b={};for(const y of f.value)b[M=y.item.group]||(b[M]=[]),b[y.item.group].push(y);for(const y in b){const w=e.groups.find(C=>C.key===y);let N=b[y].map(C=>{const{item:ie,...v}=C;return{...ie,...v}});w.filter&&typeof w.filter=="function"&&(N=w.filter(r.value,N)),m.push({...w,commands:N.slice(0,l.value.resultLimit)})}for(const y of e.groups)if(y.search&&((A=h.value[y.key])!=null&&A.length)){let w=h.value[y.key]||[];y.filter&&typeof y.filter=="function"&&(w=y.filter(r.value,w)),m.push({...y,commands:w.slice(0,l.value.resultLimit)})}return m}),g=Ue(async()=>{const m=e.groups.filter(b=>!!b.search);m.length&&(a.value=!0,await Promise.all(m.map(async b=>{h.value[b.key]=await b.search(r.value)})),a.value=!1)},e.debounce);q(r,()=>{g(),setTimeout(()=>{var m;(m=i.value)==null||m.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"PageUp"}))},0)});const S=T(()=>(e.loading||a.value)&&e.loadingIcon?e.loadingIcon:e.icon),L=T(()=>Ne(n.value.input.icon.base,n.value.input.icon.size,(e.loading||a.value)&&e.loadingIcon&&"animate-spin")),E=T(()=>({...n.value.default.emptyState,...e.emptyState}));function R(){setTimeout(()=>{var m;(m=i.value)==null||m.$el.dispatchEvent(new KeyboardEvent("keydown",{key:"ArrowDown"}))},0)}function _(m){t("update:modelValue",m,{query:r.value}),e.autoclear&&setTimeout(()=>{r.value=""},0)}function j(){r.value?r.value="":t("close")}return s({query:r,updateQuery:m=>{r.value=m},comboboxApi:c,results:f}),{ui:n,attrs:o,groups:p,comboboxInput:i,query:r,iconName:S,iconClass:L,emptyState:E,onSelect:_,onClear:j}}});function jt(e,t,s,n,o,r){const i=Me,c=W("HComboboxInput"),a=Se,l=W("CommandPaletteGroup"),u=W("HComboboxOptions"),h=W("HCombobox");return P(),H(h,he({by:e.by,"model-value":e.modelValue,multiple:e.multiple,nullable:e.nullable,class:e.ui.wrapper},e.attrs,{as:"div","onUpdate:modelValue":e.onSelect}),{default:Y(()=>[Pe(J("div",{class:F(e.ui.input.wrapper)},[e.iconName?(P(),H(i,{key:0,name:e.iconName,class:F(e.iconClass),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),Fe(c,{ref:"comboboxInput",value:e.query,class:F([e.ui.input.base,e.ui.input.size,e.ui.input.height,e.ui.input.padding,e.icon&&e.ui.input.icon.padding]),placeholder:e.placeholder,"aria-label":e.placeholder,autocomplete:"off",onChange:t[0]||(t[0]=f=>e.query=f.target.value)},null,8,["value","class","placeholder","aria-label"]),e.closeButton?(P(),H(a,he({key:1,"aria-label":"Close"},{...e.ui.default.closeButton,...e.closeButton},{class:e.ui.input.closeButton,onClick:e.onClear}),null,16,["class","onClick"])):z("",!0)],2),[[Te,e.searchable]]),e.groups.length?(P(),H(u,{key:0,static:"",hold:"",as:"div","aria-label":"Commands",class:F(e.ui.container)},{default:Y(()=>[(P(!0),Be(je,null,de(e.groups,f=>(P(),H(l,{key:f.key,query:e.query,group:f,"group-attribute":e.groupAttribute,"command-attribute":e.commandAttribute,"selected-icon":e.selectedIcon,ui:e.ui},He({_:2},[de(e.$slots,(p,g)=>({name:g,fn:Y(S=>[fe(e.$slots,g,De(Ve(S)))])}))]),1032,["query","group","group-attribute","command-attribute","selected-icon","ui"]))),128))]),_:3},8,["class"])):e.emptyState?fe(e.$slots,"empty-state",{key:1},()=>[J("div",{class:F(e.ui.emptyState.wrapper)},[e.emptyState.icon?(P(),H(i,{key:0,name:e.emptyState.icon,class:F(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),J("p",{class:F(e.query?e.ui.emptyState.queryLabel:e.ui.emptyState.label)},Ke(e.query?e.emptyState.queryLabel:e.emptyState.label),3)],2)]):z("",!0)]),_:3},16,["by","model-value","multiple","nullable","class","onUpdate:modelValue"])}const as=Oe(Bt,[["render",jt]]);export{as as default};