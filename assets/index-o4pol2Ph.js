function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-kOW_Vh6I.js","assets/BgParticles-Dnp78owH.js","assets/index-0VwCQDd0.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-0VwCQDd0.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-kOW_Vh6I.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
