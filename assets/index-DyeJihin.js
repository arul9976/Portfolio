function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D4-dWxhY.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BTUtrqe6.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D4-dWxhY.js"),__vite__mapDeps([0,1,2,3]));return new o},e)}export{_ as loadBaseMover};
