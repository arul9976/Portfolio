function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-Rt3BV38r.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/BgParticles-CqpnizZ6.js","assets/index-CcsQaCFI.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CcsQaCFI.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-Rt3BV38r.js"),__vite__mapDeps([0,1,2,3,4]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
