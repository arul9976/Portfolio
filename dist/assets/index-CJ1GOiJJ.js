const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Attractor-BYsODy2_.js","assets/Ranges-BztP1VJJ.js","assets/BgParticles-BC28E-fP.js","assets/index-BI7VlWe3.js","assets/index-W-_6wcIe.css","assets/ExternalInteractorBase-CIi3zRdK.js"])))=>i.map(i=>d[i]);
import{_ as s}from"./index-BI7VlWe3.js";class c{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),t.duration!==void 0&&(this.duration=t.duration),t.easing!==void 0&&(this.easing=t.easing),t.factor!==void 0&&(this.factor=t.factor),t.maxSpeed!==void 0&&(this.maxSpeed=t.maxSpeed),t.speed!==void 0&&(this.speed=t.speed))}}async function d(e,t=!0){await e.addInteractor("externalAttract",async i=>{const{Attractor:n}=await s(async()=>{const{Attractor:r}=await import("./Attractor-BYsODy2_.js");return{Attractor:r}},__vite__mapDeps([0,1,2,3,4,5]));return new n(e,i)},t)}export{c as Attract,d as loadExternalAttractInteraction};
