function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-C9YZ_Bvr.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BTUtrqe6.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-C9YZ_Bvr.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
