function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-PZWAghRb.js","assets/BgParticles-DTZs_1y3.js","assets/index-DQ7_yS-F.js","assets/index-D7pTrO4-.css","assets/Ranges-BinphTg-.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DQ7_yS-F.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-PZWAghRb.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
