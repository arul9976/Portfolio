const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Connector-C0pe6JNk.js","assets/CanvasUtils-D87cHcuA.js","assets/BgParticles-BC28E-fP.js","assets/index-BI7VlWe3.js","assets/index-W-_6wcIe.css","assets/ExternalInteractorBase-CIi3zRdK.js"])))=>i.map(i=>d[i]);
import{_ as o}from"./index-BI7VlWe3.js";class r{constructor(){this.opacity=.5}load(n){n&&n.opacity!==void 0&&(this.opacity=n.opacity)}}class a{constructor(){this.distance=80,this.links=new r,this.radius=60}load(n){n&&(n.distance!==void 0&&(this.distance=n.distance),this.links.load(n.links),n.radius!==void 0&&(this.radius=n.radius))}}async function u(i,n=!0){await i.addInteractor("externalConnect",async t=>{const{Connector:e}=await o(async()=>{const{Connector:s}=await import("./Connector-C0pe6JNk.js");return{Connector:s}},__vite__mapDeps([0,1,2,3,4,5]));return new e(t)},n)}export{a as Connect,r as ConnectLinks,u as loadExternalConnectInteraction};