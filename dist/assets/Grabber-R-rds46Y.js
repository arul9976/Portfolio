import{Grab as v}from"./index-Bn73bhiv.js";import{g as y}from"./CanvasUtils-D87cHcuA.js";import{o as k,u as L,M as O,a8 as h,a9 as C,U as M}from"./BgParticles-BC28E-fP.js";import{E as w}from"./ExternalInteractorBase-CIi3zRdK.js";import"./index-BI7VlWe3.js";import"./OptionsColor-B2qb1Guo.js";const D=0;function E(r,t,n,i,o,e){y(r,n,i),r.strokeStyle=k(o,e),r.lineWidth=t,r.stroke()}function G(r,t,n,i,o){r.canvas.draw(e=>{const s=t.getPosition();E(e,t.retina.linksWidth??D,s,o,n,i)})}const P="grab",q=0,H=0;class B extends w{constructor(t){super(t)}clear(){}init(){const t=this.container,n=t.actualOptions.interactivity.modes.grab;n&&(t.retina.grabModeDistance=n.distance*t.retina.pixelRatio)}interact(){var c;const t=this.container,n=t.actualOptions,i=n.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==L)return;const o=t.interactivity.mouse.position;if(!o)return;const e=t.retina.grabModeDistance;if(!e||e<q)return;const s=t.particles.quadTree.queryCircle(o,e,a=>this.isEnabled(a));for(const a of s){const f=a.getPosition(),l=O(f,o);if(l>e)continue;const b=i.modes.grab.links,d=b.opacity,g=d-l*d/e;if(g<=H)continue;const u=b.color??((c=a.options.links)==null?void 0:c.color);if(!t.particles.grabLineColor&&u){const p=i.modes.grab.links;t.particles.grabLineColor=h(u,p.blink,p.consent)}const m=C(a,void 0,t.particles.grabLineColor);m&&G(t,a,m,g,o)}}isEnabled(t){const n=this.container,i=n.interactivity.mouse,o=((t==null?void 0:t.interactivity)??n.actualOptions.interactivity).events;return o.onHover.enable&&!!i.position&&M(P,o.onHover.mode)}loadModeOptions(t,...n){t.grab||(t.grab=new v);for(const i of n)t.grab.load(i==null?void 0:i.grab)}reset(){}}export{B as Grabber};
