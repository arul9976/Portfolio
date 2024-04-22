function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-Dy6aqCAj.js","assets/BgParticles-CLee-rkQ.js","assets/index-C0J7fmCP.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C0J7fmCP.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-Dy6aqCAj.js"),__vite__mapDeps([0,1,2,3]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
