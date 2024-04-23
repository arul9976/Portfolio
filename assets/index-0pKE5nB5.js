function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-BCt2uEa5.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-BTUtrqe6.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-BCt2uEa5.js"),__vite__mapDeps([0,1,2,3,4]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
