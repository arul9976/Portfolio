function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BKh7g9SJ.js","assets/index-BRn6VxO2.js","assets/index-BN3FdIuf.css","assets/index-CIVB69wG.js","assets/index-C6IeZkVh.js","assets/index-StaLPkdu.js","assets/index-H3gwBAWo.js","assets/index-DVgqGrGx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BRn6VxO2.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BKh7g9SJ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CIVB69wG.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C6IeZkVh.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-StaLPkdu.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-H3gwBAWo.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DVgqGrGx.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
