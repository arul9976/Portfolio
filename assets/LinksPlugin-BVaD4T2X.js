function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-BjxjVidr.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css","assets/CanvasUtils-DIooCoGc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BTUtrqe6.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-BjxjVidr.js"),__vite__mapDeps([0,1,2,3,4]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
