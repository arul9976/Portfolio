function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-B87d5S1q.js","assets/BgParticles-Dnp78owH.js","assets/index-0VwCQDd0.js","assets/index-BN3FdIuf.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-0VwCQDd0.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-B87d5S1q.js"),__vite__mapDeps([0,1,2,3,4]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
