import{S as r,J as a,r as d,ad as l,ae as u}from"./BgParticles-BC28E-fP.js";import"./index-BI7VlWe3.js";const m=1;class h{constructor(o){this.container=o}init(o){var s;const e=this.container,n=o.options,t=r(n.stroke,o.id,n.reduceDuplicates);o.strokeWidth=a(t.width)*e.retina.pixelRatio,o.strokeOpacity=a(t.opacity??m),o.strokeAnimation=(s=t.color)==null?void 0:s.animation;const i=d(t.color)??o.getFillColor();i&&(o.strokeColor=l(i,o.strokeAnimation,e.retina.reduceFactor))}isEnabled(o){const e=o.strokeAnimation,{strokeColor:n}=o;return!o.destroyed&&!o.spawning&&!!e&&((n==null?void 0:n.h.value)!==void 0&&n.h.enable||(n==null?void 0:n.s.value)!==void 0&&n.s.enable||(n==null?void 0:n.l.value)!==void 0&&n.l.enable)}update(o,e){this.isEnabled(o)&&u(o.strokeColor,e)}}export{h as StrokeColorUpdater};
