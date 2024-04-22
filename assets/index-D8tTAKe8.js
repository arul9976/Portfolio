function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DUJXGXcD.js","assets/BgParticles-CLee-rkQ.js","assets/index-C0J7fmCP.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C0J7fmCP.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DUJXGXcD.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
