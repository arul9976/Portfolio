function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-BG-8PSQY.js","assets/BgParticles-Bu-K_LVS.js","assets/index-BzR7jQ-D.js","assets/index-mu8I-M3P.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BzR7jQ-D.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BG-8PSQY.js"),__vite__mapDeps([0,1,2,3]));return new a(t)},o)}export{i as loadColorUpdater};
