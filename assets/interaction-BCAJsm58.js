function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DsWBUibS.js","assets/Ranges-D7syFtT0.js","assets/BgParticles-Bvdj2IwX.js","assets/index-BRn6VxO2.js","assets/index-BN3FdIuf.css","assets/index-CKq8yDyO.js","assets/OptionsColor-BCdmegsv.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BRn6VxO2.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DsWBUibS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new n(a)},r)}export{o as loadLinksInteraction};
