function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D7A26ohr.js","assets/index-DQ7_yS-F.js","assets/index-D7pTrO4-.css","assets/index-Cbzsmzau.js","assets/index-BUrYmrIJ.js","assets/index-CpPdz3ZR.js","assets/index-obPe1BpB.js","assets/index-BzQIzvQY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DQ7_yS-F.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D7A26ohr.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Cbzsmzau.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BUrYmrIJ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CpPdz3ZR.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-obPe1BpB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BzQIzvQY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
