import{m as d}from"./focus-management.8442804d.js";import{k as f,r as v}from"./entry.2a5111f6.js";function x(e){throw new Error("Unexpected object: "+e)}var p=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(p||{});function I(e,t){let n=t.resolveItems();if(n.length<=0)return null;let i=t.resolveActiveIndex(),s=i??-1,c=(()=>{switch(e.focus){case 0:return n.findIndex(r=>!t.resolveDisabled(r));case 1:{let r=n.slice().reverse().findIndex((l,a,o)=>s!==-1&&o.length-a-1>=s?!1:!t.resolveDisabled(l));return r===-1?r:n.length-1-r}case 2:return n.findIndex((r,l)=>l<=s?!1:!t.resolveDisabled(r));case 3:{let r=n.slice().reverse().findIndex(l=>!t.resolveDisabled(l));return r===-1?r:n.length-1-r}case 4:return n.findIndex(r=>t.resolveId(r)===e.id);case 5:return null;default:x(e)}})();return c===-1?i:c}function b({container:e,accept:t,walk:n,enabled:i}){f(()=>{let s=e.value;if(!s||i!==void 0&&!i.value)return;let c=d(e);if(!c)return;let r=Object.assign(a=>t(a),{acceptNode:t}),l=c.createTreeWalker(s,NodeFilter.SHOW_ELEMENT,r,!1);for(;l.nextNode();)n(l.currentNode)})}function u(e){return[e.screenX,e.screenY]}function g(){let e=v([-1,-1]);return{wasMoved(t){let n=u(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=u(t)}}}export{p as a,b as p,g as u,I as x};
