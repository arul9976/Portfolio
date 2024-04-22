function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-azRu644K.js","assets/BgParticles-Bvdj2IwX.js","assets/index-BRn6VxO2.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BRn6VxO2.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-azRu644K.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
