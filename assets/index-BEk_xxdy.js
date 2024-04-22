function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-CLO4Visl.js","assets/BgParticles-B69ptIL1.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-G_Oc5hU8.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CLO4Visl.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
