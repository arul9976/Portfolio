function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-LQ8cj741.js","assets/BgParticles-CqpnizZ6.js","assets/index-CcsQaCFI.js","assets/index-BN3FdIuf.css","assets/Ranges-BGJAmByg.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CcsQaCFI.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-LQ8cj741.js"),__vite__mapDeps([0,1,2,3,4,5]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};