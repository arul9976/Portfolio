function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-wR_IjZos.js","assets/Ranges-Buc9wDYk.js","assets/BgParticles-B69ptIL1.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css","assets/index-Dbc6bPNm.js","assets/OptionsColor-DdbnZ9Fc.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-G_Oc5hU8.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-wR_IjZos.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new n(a)},r)}export{o as loadLinksInteraction};
