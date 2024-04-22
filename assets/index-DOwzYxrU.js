function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-YUp6Bmp8.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/BgParticles-Bvdj2IwX.js","assets/index-BRn6VxO2.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BRn6VxO2.js";import{s as r}from"./BgParticles-Bvdj2IwX.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function c(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await o(()=>import("./Remover-YUp6Bmp8.js"),__vite__mapDeps([0,1,2,3,4]));return new a(e)},t)}export{u as Remove,c as loadExternalRemoveInteraction};
