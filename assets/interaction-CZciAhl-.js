function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-ZtNroVQ5.js","assets/Ranges-BjioDlak.js","assets/BgParticles-Dnp78owH.js","assets/index-0VwCQDd0.js","assets/index-BN3FdIuf.css","assets/index-C16gLA6c.js","assets/OptionsColor-C7uCUKlG.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-0VwCQDd0.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-ZtNroVQ5.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new n(a)},r)}export{o as loadLinksInteraction};
