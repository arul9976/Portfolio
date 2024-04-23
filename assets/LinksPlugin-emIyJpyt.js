function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-BWykfzBS.js","assets/BgParticles-DTZs_1y3.js","assets/index-DQ7_yS-F.js","assets/index-D7pTrO4-.css","assets/CanvasUtils-C2XolOxI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DQ7_yS-F.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-BWykfzBS.js"),__vite__mapDeps([0,1,2,3,4]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
