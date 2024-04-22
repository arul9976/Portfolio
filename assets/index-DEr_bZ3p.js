function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BGsTYfgP.js","assets/BgParticles-Dnp78owH.js","assets/index-0VwCQDd0.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-0VwCQDd0.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BGsTYfgP.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
