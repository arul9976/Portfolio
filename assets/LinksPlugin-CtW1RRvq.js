function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-B6R42fEX.js","assets/BgParticles-Bu-K_LVS.js","assets/index-BzR7jQ-D.js","assets/index-mu8I-M3P.css","assets/CanvasUtils-CVZTiIc0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BzR7jQ-D.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-B6R42fEX.js"),__vite__mapDeps([0,1,2,3,4]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
