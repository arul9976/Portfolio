function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BKC_Lh-b.js","assets/PolygonDrawerBase-CeFXVFD7.js","assets/BgParticles-CqpnizZ6.js","assets/index-CcsQaCFI.js","assets/index-BN3FdIuf.css","assets/TriangleDrawer-CXoMh6HV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-CcsQaCFI.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BKC_Lh-b.js"),__vite__mapDeps([0,1,2,3,4]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CXoMh6HV.js"),__vite__mapDeps([5,1,2,3,4]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
