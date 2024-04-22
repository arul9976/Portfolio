function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OpacityUpdater-EkZI1RBb.js","assets/BgParticles-Bvdj2IwX.js","assets/index-BRn6VxO2.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BRn6VxO2.js";async function p(t,a=!0){await t.addParticleUpdater("opacity",async r=>{const{OpacityUpdater:e}=await i(()=>import("./OpacityUpdater-EkZI1RBb.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{p as loadOpacityUpdater};
