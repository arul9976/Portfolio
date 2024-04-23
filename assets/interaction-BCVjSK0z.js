function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DZLXTHR5.js","assets/Ranges-5C6X4xVl.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css","assets/index-Vl94DMDR.js","assets/OptionsColor-SFyh2Yu2.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BTUtrqe6.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DZLXTHR5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new n(a)},r)}export{o as loadLinksInteraction};
