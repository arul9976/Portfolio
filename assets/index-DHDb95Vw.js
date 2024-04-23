function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-63OT_fnv.js","assets/BgParticles-DTZs_1y3.js","assets/index-DQ7_yS-F.js","assets/index-D7pTrO4-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DQ7_yS-F.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-63OT_fnv.js"),__vite__mapDeps([0,1,2,3]));return new o},r)}export{l as loadParallaxMover};
