function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Pusher-sVkIIOUG.js","assets/BgParticles-CqpnizZ6.js","assets/index-CcsQaCFI.js","assets/index-BN3FdIuf.css","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CcsQaCFI.js";import{s}from"./BgParticles-CqpnizZ6.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function f(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await r(()=>import("./Pusher-sVkIIOUG.js"),__vite__mapDeps([0,1,2,3,4]));return new u(e)},t)}export{a as Push,f as loadExternalPushInteraction};