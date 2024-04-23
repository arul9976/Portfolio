function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DwC6_V2C.js","assets/BgParticles-DTZs_1y3.js","assets/index-DQ7_yS-F.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DQ7_yS-F.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DwC6_V2C.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
