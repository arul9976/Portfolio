function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-D94joj7T.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BTUtrqe6.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-D94joj7T.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
