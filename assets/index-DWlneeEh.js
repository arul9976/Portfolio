function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-CDe0i5q0.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/BgParticles-B69ptIL1.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-G_Oc5hU8.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-CDe0i5q0.js"),__vite__mapDeps([0,1,2,3,4]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
