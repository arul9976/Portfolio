function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DV5BCDRj.js","assets/Ranges-R_SOtnPr.js","assets/BgParticles-Bu-K_LVS.js","assets/index-BzR7jQ-D.js","assets/index-mu8I-M3P.css","assets/index-CpUiGcJA.js","assets/OptionsColor-_g6afaEZ.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BzR7jQ-D.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DV5BCDRj.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new n(a)},r)}export{o as loadLinksInteraction};
