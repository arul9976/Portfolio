const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PolygonDrawer-Ct4jZLyf.js","assets/PolygonDrawerBase-DySnynTK.js","assets/BgParticles-DRH0UKc0.js","assets/index-DQR74Eb-.js","assets/index-W-_6wcIe.css","assets/TriangleDrawer-tZ58EQP1.js"])))=>i.map(i=>d[i]);
import{_ as r}from"./index-DQR74Eb-.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(async()=>{const{PolygonDrawer:n}=await import("./PolygonDrawer-Ct4jZLyf.js");return{PolygonDrawer:n}},__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(async()=>{const{TriangleDrawer:n}=await import("./TriangleDrawer-tZ58EQP1.js");return{TriangleDrawer:n}},__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function c(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,c as loadPolygonShape,i as loadTriangleShape};