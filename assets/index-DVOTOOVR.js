const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OutOfCanvasUpdater-E3NtNuHs.js","assets/BgParticles-DRH0UKc0.js","assets/index-DQR74Eb-.js","assets/index-W-_6wcIe.css"])))=>i.map(i=>d[i]);
import{_ as n}from"./index-DQR74Eb-.js";async function s(t,a=!0){await t.addParticleUpdater("outModes",async r=>{const{OutOfCanvasUpdater:e}=await n(async()=>{const{OutOfCanvasUpdater:o}=await import("./OutOfCanvasUpdater-E3NtNuHs.js");return{OutOfCanvasUpdater:o}},__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{s as loadOutModesUpdater};