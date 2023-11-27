import{a as qt}from"./index.73c4a044.js";import{r as Ot,i as ve,k as de}from"./entry.2a5111f6.js";function T(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function J(t){var e=T(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=T(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pt(t){if(typeof ShadowRoot>"u")return!1;var e=T(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var G=Math.max,ht=Math.min,Q=Math.round;function Et(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Kt(){return!/^((?!chrome|android).)*safari/i.test(Et())}function Z(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),a=1,o=1;e&&L(t)&&(a=t.offsetWidth>0&&Q(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Q(n.height)/t.offsetHeight||1);var c=J(t)?T(t):window,i=c.visualViewport,s=!Kt()&&r,p=(n.left+(s&&i?i.offsetLeft:0))/a,f=(n.top+(s&&i?i.offsetTop:0))/o,d=n.width/a,h=n.height/o;return{width:d,height:h,top:f,right:p+d,bottom:f+h,left:p,x:p,y:f}}function Dt(t){var e=T(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function me(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function he(t){return t===T(t)||!L(t)?Dt(t):me(t)}function V(t){return t?(t.nodeName||"").toLowerCase():null}function q(t){return((J(t)?t.ownerDocument:t.document)||window.document).documentElement}function jt(t){return Z(q(t)).left+Dt(t).scrollLeft}function N(t){return T(t).getComputedStyle(t)}function Bt(t){var e=N(t),r=e.overflow,n=e.overflowX,a=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ge(t){var e=t.getBoundingClientRect(),r=Q(e.width)/t.offsetWidth||1,n=Q(e.height)/t.offsetHeight||1;return r!==1||n!==1}function ye(t,e,r){r===void 0&&(r=!1);var n=L(e),a=L(e)&&ge(e),o=q(e),c=Z(t,a,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(e)!=="body"||Bt(o))&&(i=he(e)),L(e)?(s=Z(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):o&&(s.x=jt(o))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function $t(t){var e=Z(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function gt(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(Pt(t)?t.host:null)||q(t)}function Qt(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:L(t)&&Bt(t)?t:Qt(gt(t))}function at(t,e){var r;e===void 0&&(e=[]);var n=Qt(t),a=n===((r=t.ownerDocument)==null?void 0:r.body),o=T(n),c=a?[o].concat(o.visualViewport||[],Bt(n)?n:[]):n,i=e.concat(c);return a?i:i.concat(at(gt(c)))}function be(t){return["table","td","th"].indexOf(V(t))>=0}function Xt(t){return!L(t)||N(t).position==="fixed"?null:t.offsetParent}function we(t){var e=/firefox/i.test(Et()),r=/Trident/i.test(Et());if(r&&L(t)){var n=N(t);if(n.position==="fixed")return null}var a=gt(t);for(Pt(a)&&(a=a.host);L(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function st(t){for(var e=T(t),r=Xt(t);r&&be(r)&&N(r).position==="static";)r=Xt(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?e:r||we(t)||e}var C="top",R="bottom",W="right",k="left",Ct="auto",ft=[C,R,W,k],_="start",it="end",xe="clippingParents",Zt="viewport",nt="popper",Oe="reference",Yt=ft.reduce(function(t,e){return t.concat([e+"-"+_,e+"-"+it])},[]),_t=[].concat(ft,[Ct]).reduce(function(t,e){return t.concat([e,e+"-"+_,e+"-"+it])},[]),Ee="beforeRead",Ae="read",Pe="afterRead",De="beforeMain",je="main",Be="afterMain",$e="beforeWrite",Ce="write",ke="afterWrite",Te=[Ee,Ae,Pe,De,je,Be,$e,Ce,ke];function Le(t){var e=new Map,r=new Set,n=[];t.forEach(function(o){e.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=e.get(i);s&&a(s)}}),n.push(o)}return t.forEach(function(o){r.has(o.name)||a(o)}),n}function Me(t){var e=Le(t);return Te.reduce(function(r,n){return r.concat(e.filter(function(a){return a.phase===n}))},[])}function Se(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function Re(t){var e=t.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function We(t,e){var r=T(t),n=q(t),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,i=0,s=0;if(a){o=a.width,c=a.height;var p=Kt();(p||!p&&e==="fixed")&&(i=a.offsetLeft,s=a.offsetTop)}return{width:o,height:c,x:i+jt(t),y:s}}function He(t){var e,r=q(t),n=Dt(t),a=(e=t.ownerDocument)==null?void 0:e.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),i=-n.scrollLeft+jt(t),s=-n.scrollTop;return N(a||r).direction==="rtl"&&(i+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:i,y:s}}function te(t,e){var r=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(r&&Pt(r)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function At(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ve(t,e){var r=Z(t,!1,e==="fixed");return r.top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r}function It(t,e,r){return e===Zt?At(We(t,r)):J(e)?Ve(e,r):At(He(q(t)))}function Ne(t){var e=at(gt(t)),r=["absolute","fixed"].indexOf(N(t).position)>=0,n=r&&L(t)?st(t):t;return J(n)?e.filter(function(a){return J(a)&&te(a,n)&&V(a)!=="body"}):[]}function Fe(t,e,r,n){var a=e==="clippingParents"?Ne(t):[].concat(e),o=[].concat(a,[r]),c=o[0],i=o.reduce(function(s,p){var f=It(t,p,n);return s.top=G(f.top,s.top),s.right=ht(f.right,s.right),s.bottom=ht(f.bottom,s.bottom),s.left=G(f.left,s.left),s},It(t,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function H(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function kt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ee(t){var e=t.reference,r=t.element,n=t.placement,a=n?H(n):null,o=n?tt(n):null,c=e.x+e.width/2-r.width/2,i=e.y+e.height/2-r.height/2,s;switch(a){case C:s={x:c,y:e.y-r.height};break;case R:s={x:c,y:e.y+e.height};break;case W:s={x:e.x+e.width,y:i};break;case k:s={x:e.x-r.width,y:i};break;default:s={x:e.x,y:e.y}}var p=a?kt(a):null;if(p!=null){var f=p==="y"?"height":"width";switch(o){case _:s[p]=s[p]-(e[f]/2-r[f]/2);break;case it:s[p]=s[p]+(e[f]/2-r[f]/2);break}}return s}function re(){return{top:0,right:0,bottom:0,left:0}}function ne(t){return Object.assign({},re(),t)}function ae(t,e){return e.reduce(function(r,n){return r[n]=t,r},{})}function Tt(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=n===void 0?t.placement:n,o=r.strategy,c=o===void 0?t.strategy:o,i=r.boundary,s=i===void 0?xe:i,p=r.rootBoundary,f=p===void 0?Zt:p,d=r.elementContext,h=d===void 0?nt:d,u=r.altBoundary,g=u===void 0?!1:u,m=r.padding,v=m===void 0?0:m,y=ne(typeof v!="number"?v:ae(v,ft)),x=h===nt?Oe:nt,E=t.rects.popper,l=t.elements[g?x:h],b=Fe(J(l)?l:l.contextElement||q(t.elements.popper),s,f,c),w=Z(t.elements.reference),O=ee({reference:w,element:E,strategy:"absolute",placement:a}),D=At(Object.assign({},E,O)),P=h===nt?D:w,A={top:b.top-P.top+y.top,bottom:P.bottom-b.bottom+y.bottom,left:b.left-P.left+y.left,right:P.right-b.right+y.right},j=t.modifiersData.offset;if(h===nt&&j){var M=j[a];Object.keys(A).forEach(function(B){var X=[W,R].indexOf(B)>=0?1:-1,Y=[C,R].indexOf(B)>=0?"y":"x";A[B]+=M[Y]*X})}return A}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ut(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qe(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,a=e.defaultOptions,o=a===void 0?zt:a;return function(i,s,p){p===void 0&&(p=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,o),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},d=[],h=!1,u={state:f,setOptions:function(y){var x=typeof y=="function"?y(f.options):y;m(),f.options=Object.assign({},o,f.options,x),f.scrollParents={reference:J(i)?at(i):i.contextElement?at(i.contextElement):[],popper:at(s)};var E=Me(Re([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(l){return l.enabled}),g(),u.update()},forceUpdate:function(){if(!h){var y=f.elements,x=y.reference,E=y.popper;if(Ut(x,E)){f.rects={reference:ye(x,st(E),f.options.strategy==="fixed"),popper:$t(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var b=f.orderedModifiers[l],w=b.fn,O=b.options,D=O===void 0?{}:O,P=b.name;typeof w=="function"&&(f=w({state:f,options:D,name:P,instance:u})||f)}}}},update:Se(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){m(),h=!0}};if(!Ut(i,s))return u;u.setOptions(p).then(function(v){!h&&p.onFirstUpdate&&p.onFirstUpdate(v)});function g(){f.orderedModifiers.forEach(function(v){var y=v.name,x=v.options,E=x===void 0?{}:x,l=v.effect;if(typeof l=="function"){var b=l({state:f,name:y,instance:u,options:E}),w=function(){};d.push(b||w)}})}function m(){d.forEach(function(v){return v()}),d=[]}return u}}var dt={passive:!0};function Xe(t){var e=t.state,r=t.instance,n=t.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,i=c===void 0?!0:c,s=T(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&p.forEach(function(f){f.addEventListener("scroll",r.update,dt)}),i&&s.addEventListener("resize",r.update,dt),function(){o&&p.forEach(function(f){f.removeEventListener("scroll",r.update,dt)}),i&&s.removeEventListener("resize",r.update,dt)}}const oe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xe,data:{}};function Ye(t){var e=t.state,r=t.name;e.modifiersData[r]=ee({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Ie={name:"popperOffsets",enabled:!0,phase:"read",fn:Ye,data:{}};var ze={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ue(t,e){var r=t.x,n=t.y,a=e.devicePixelRatio||1;return{x:Q(r*a)/a||0,y:Q(n*a)/a||0}}function Gt(t){var e,r=t.popper,n=t.popperRect,a=t.placement,o=t.variation,c=t.offsets,i=t.position,s=t.gpuAcceleration,p=t.adaptive,f=t.roundOffsets,d=t.isFixed,h=c.x,u=h===void 0?0:h,g=c.y,m=g===void 0?0:g,v=typeof f=="function"?f({x:u,y:m}):{x:u,y:m};u=v.x,m=v.y;var y=c.hasOwnProperty("x"),x=c.hasOwnProperty("y"),E=k,l=C,b=window;if(p){var w=st(r),O="clientHeight",D="clientWidth";if(w===T(r)&&(w=q(r),N(w).position!=="static"&&i==="absolute"&&(O="scrollHeight",D="scrollWidth")),w=w,a===C||(a===k||a===W)&&o===it){l=R;var P=d&&w===b&&b.visualViewport?b.visualViewport.height:w[O];m-=P-n.height,m*=s?1:-1}if(a===k||(a===C||a===R)&&o===it){E=W;var A=d&&w===b&&b.visualViewport?b.visualViewport.width:w[D];u-=A-n.width,u*=s?1:-1}}var j=Object.assign({position:i},p&&ze),M=f===!0?Ue({x:u,y:m},T(r)):{x:u,y:m};if(u=M.x,m=M.y,s){var B;return Object.assign({},j,(B={},B[l]=x?"0":"",B[E]=y?"0":"",B.transform=(b.devicePixelRatio||1)<=1?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",B))}return Object.assign({},j,(e={},e[l]=x?m+"px":"",e[E]=y?u+"px":"",e.transform="",e))}function Ge(t){var e=t.state,r=t.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,i=r.roundOffsets,s=i===void 0?!0:i,p={placement:H(e.placement),variation:tt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:a,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Gt(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Gt(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ie={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ge,data:{}};function Je(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},a=e.attributes[r]||{},o=e.elements[r];!L(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var i=a[c];i===!1?o.removeAttribute(c):o.setAttribute(c,i===!0?"":i)}))})}function Ke(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var a=e.elements[n],o=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),i=c.reduce(function(s,p){return s[p]="",s},{});!L(a)||!V(a)||(Object.assign(a.style,i),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const Qe={name:"applyStyles",enabled:!0,phase:"write",fn:Je,effect:Ke,requires:["computeStyles"]};var Ze=[oe,Ie,ie,Qe],_e={left:"right",right:"left",bottom:"top",top:"bottom"};function mt(t){return t.replace(/left|right|bottom|top/g,function(e){return _e[e]})}var tr={start:"end",end:"start"};function Jt(t){return t.replace(/start|end/g,function(e){return tr[e]})}function er(t,e){e===void 0&&(e={});var r=e,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,p=s===void 0?_t:s,f=tt(n),d=f?i?Yt:Yt.filter(function(g){return tt(g)===f}):ft,h=d.filter(function(g){return p.indexOf(g)>=0});h.length===0&&(h=d);var u=h.reduce(function(g,m){return g[m]=Tt(t,{placement:m,boundary:a,rootBoundary:o,padding:c})[H(m)],g},{});return Object.keys(u).sort(function(g,m){return u[g]-u[m]})}function rr(t){if(H(t)===Ct)return[];var e=mt(t);return[Jt(t),e,Jt(e)]}function nr(t){var e=t.state,r=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,p=r.padding,f=r.boundary,d=r.rootBoundary,h=r.altBoundary,u=r.flipVariations,g=u===void 0?!0:u,m=r.allowedAutoPlacements,v=e.options.placement,y=H(v),x=y===v,E=s||(x||!g?[mt(v)]:rr(v)),l=[v].concat(E).reduce(function(K,F){return K.concat(H(F)===Ct?er(e,{placement:F,boundary:f,rootBoundary:d,padding:p,flipVariations:g,allowedAutoPlacements:m}):F)},[]),b=e.rects.reference,w=e.rects.popper,O=new Map,D=!0,P=l[0],A=0;A<l.length;A++){var j=l[A],M=H(j),B=tt(j)===_,X=[C,R].indexOf(M)>=0,Y=X?"width":"height",$=Tt(e,{placement:j,boundary:f,rootBoundary:d,altBoundary:h,padding:p}),S=X?B?W:k:B?R:C;b[Y]>w[Y]&&(S=mt(S));var ct=mt(S),I=[];if(o&&I.push($[M]<=0),i&&I.push($[S]<=0,$[ct]<=0),I.every(function(K){return K})){P=j,D=!1;break}O.set(j,I)}if(D)for(var pt=g?3:1,yt=function(F){var rt=l.find(function(lt){var z=O.get(lt);if(z)return z.slice(0,F).every(function(bt){return bt})});if(rt)return P=rt,"break"},et=pt;et>0;et--){var ut=yt(et);if(ut==="break")break}e.placement!==P&&(e.modifiersData[n]._skip=!0,e.placement=P,e.reset=!0)}}const ar={name:"flip",enabled:!0,phase:"main",fn:nr,requiresIfExists:["offset"],data:{_skip:!1}};function or(t,e,r){var n=H(t),a=[k,C].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=o[0],i=o[1];return c=c||0,i=(i||0)*a,[k,W].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function ir(t){var e=t.state,r=t.options,n=t.name,a=r.offset,o=a===void 0?[0,0]:a,c=_t.reduce(function(f,d){return f[d]=or(d,e.rects,o),f},{}),i=c[e.placement],s=i.x,p=i.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[n]=c}const sr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ir};function fr(t){return t==="x"?"y":"x"}function ot(t,e,r){return G(t,ht(e,r))}function cr(t,e,r){var n=ot(t,e,r);return n>r?r:n}function pr(t){var e=t.state,r=t.options,n=t.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,p=r.rootBoundary,f=r.altBoundary,d=r.padding,h=r.tether,u=h===void 0?!0:h,g=r.tetherOffset,m=g===void 0?0:g,v=Tt(e,{boundary:s,rootBoundary:p,padding:d,altBoundary:f}),y=H(e.placement),x=tt(e.placement),E=!x,l=kt(y),b=fr(l),w=e.modifiersData.popperOffsets,O=e.rects.reference,D=e.rects.popper,P=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),j=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,M={x:0,y:0};if(w){if(o){var B,X=l==="y"?C:k,Y=l==="y"?R:W,$=l==="y"?"height":"width",S=w[l],ct=S+v[X],I=S-v[Y],pt=u?-D[$]/2:0,yt=x===_?O[$]:D[$],et=x===_?-D[$]:-O[$],ut=e.elements.arrow,K=u&&ut?$t(ut):{width:0,height:0},F=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:re(),rt=F[X],lt=F[Y],z=ot(0,O[$],K[$]),bt=E?O[$]/2-pt-z-rt-A.mainAxis:yt-z-rt-A.mainAxis,se=E?-O[$]/2+pt+z+lt+A.mainAxis:et+z+lt+A.mainAxis,wt=e.elements.arrow&&st(e.elements.arrow),fe=wt?l==="y"?wt.clientTop||0:wt.clientLeft||0:0,Lt=(B=j==null?void 0:j[l])!=null?B:0,ce=S+bt-Lt-fe,pe=S+se-Lt,Mt=ot(u?ht(ct,ce):ct,S,u?G(I,pe):I);w[l]=Mt,M[l]=Mt-S}if(i){var St,ue=l==="x"?C:k,le=l==="x"?R:W,U=w[b],vt=b==="y"?"height":"width",Rt=U+v[ue],Wt=U-v[le],xt=[C,k].indexOf(y)!==-1,Ht=(St=j==null?void 0:j[b])!=null?St:0,Vt=xt?Rt:U-O[vt]-D[vt]-Ht+A.altAxis,Nt=xt?U+O[vt]+D[vt]-Ht-A.altAxis:Wt,Ft=u&&xt?cr(Vt,U,Nt):ot(u?Vt:Rt,U,u?Nt:Wt);w[b]=Ft,M[b]=Ft-U}e.modifiersData[n]=M}}const ur={name:"preventOverflow",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"]};var lr=function(e,r){return e=typeof e=="function"?e(Object.assign({},r.rects,{placement:r.placement})):e,ne(typeof e!="number"?e:ae(e,ft))};function vr(t){var e,r=t.state,n=t.name,a=t.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,i=H(r.placement),s=kt(i),p=[k,W].indexOf(i)>=0,f=p?"height":"width";if(!(!o||!c)){var d=lr(a.padding,r),h=$t(o),u=s==="y"?C:k,g=s==="y"?R:W,m=r.rects.reference[f]+r.rects.reference[s]-c[s]-r.rects.popper[f],v=c[s]-r.rects.reference[s],y=st(o),x=y?s==="y"?y.clientHeight||0:y.clientWidth||0:0,E=m/2-v/2,l=d[u],b=x-h[f]-d[g],w=x/2-h[f]/2+E,O=ot(l,w,b),D=s;r.modifiersData[n]=(e={},e[D]=O,e.centerOffset=O-w,e)}}function dr(t){var e=t.state,r=t.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=e.elements.popper.querySelector(a),!a)||te(e.elements.popper,a)&&(e.elements.arrow=a))}const mr={name:"arrow",enabled:!0,phase:"main",fn:vr,effect:dr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},hr=qe({defaultModifiers:[...Ze,sr,ar,ur,ie,oe,mr]});function br({locked:t=!1,overflowPadding:e=8,offsetDistance:r=8,offsetSkid:n=0,gpuAcceleration:a=!0,adaptive:o=!0,scroll:c=!0,resize:i=!0,arrow:s=!1,placement:p,strategy:f},d){const h=Ot(null),u=Ot(null),g=Ot(null);return ve(()=>{de(m=>{if(!u.value||!h.value&&!(d!=null&&d.value))return;const v=qt(u),y=(d==null?void 0:d.value)||qt(h);if(!(v instanceof HTMLElement)||!y)return;const x={modifiers:[{name:"flip",enabled:!t},{name:"preventOverflow",options:{padding:e}},{name:"offset",options:{offset:[n,r]}},{name:"computeStyles",options:{adaptive:o,gpuAcceleration:a}},{name:"eventListeners",options:{scroll:c,resize:i}},{name:"arrow",enabled:s}]};p&&(x.placement=p),f&&(x.strategy=f),g.value=hr(y,v,x),m(g.value.destroy)})}),[h,u,g]}export{br as u};
