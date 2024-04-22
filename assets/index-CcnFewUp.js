function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CkNccS1j.js","assets/index-0VwCQDd0.js","assets/index-BN3FdIuf.css","assets/index-o4pol2Ph.js","assets/index-BdQoOSgR.js","assets/index-BPc9djGS.js","assets/index-CanZKLWa.js","assets/index-DbJhTX8b.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-0VwCQDd0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CkNccS1j.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-o4pol2Ph.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BdQoOSgR.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BPc9djGS.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CanZKLWa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DbJhTX8b.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
