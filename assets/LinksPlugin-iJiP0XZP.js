function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-B8HAYyHa.js","assets/BgParticles-B69ptIL1.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css","assets/CanvasUtils-BOZE1hX8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-G_Oc5hU8.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-B8HAYyHa.js"),__vite__mapDeps([0,1,2,3,4]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
