const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ColorUpdater-DV-O_8ic.js","assets/BgParticles-BC28E-fP.js","assets/index-BI7VlWe3.js","assets/index-W-_6wcIe.css"])))=>i.map(i=>d[i]);
import{_ as n}from"./index-BI7VlWe3.js";async function i(r,t=!0){await r.addParticleUpdater("color",async a=>{const{ColorUpdater:o}=await n(async()=>{const{ColorUpdater:e}=await import("./ColorUpdater-DV-O_8ic.js");return{ColorUpdater:e}},__vite__mapDeps([0,1,2,3]));return new o(a)},t)}export{i as loadColorUpdater};