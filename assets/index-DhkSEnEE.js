function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-11Je_Jc4.js","assets/CanvasUtils-DIooCoGc.js","assets/BgParticles-DvD1xul-.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-SFyh2Yu2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BTUtrqe6.js";import{O as s}from"./OptionsColor-SFyh2Yu2.js";import"./BgParticles-DvD1xul-.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class a{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function u(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-11Je_Jc4.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new t(o)},i)}export{a as Grab,r as GrabLinks,u as loadExternalGrabInteraction};