const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ParallaxMover-Bp49E8QX.js","assets/BgParticles-BC28E-fP.js","assets/index-BI7VlWe3.js","assets/index-W-_6wcIe.css"])))=>i.map(i=>d[i]);
import{_ as e}from"./index-BI7VlWe3.js";async function n(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await e(async()=>{const{ParallaxMover:t}=await import("./ParallaxMover-Bp49E8QX.js");return{ParallaxMover:t}},__vite__mapDeps([0,1,2,3]));return new o},r)}export{n as loadParallaxMover};