function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D1XsbC7u.js","assets/BgParticles-B69ptIL1.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-G_Oc5hU8.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D1XsbC7u.js"),__vite__mapDeps([0,1,2,3]));return new o},e)}export{_ as loadBaseMover};
