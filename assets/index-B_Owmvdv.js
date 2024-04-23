function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DyeJihin.js","assets/index-BTUtrqe6.js","assets/index-D7pTrO4-.css","assets/index-DGYwMaHB.js","assets/index-Cqa7vusB.js","assets/index-BTHM0Kc2.js","assets/index-Bkkm3d2D.js","assets/index-Bu9NgR_R.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BTUtrqe6.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DyeJihin.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DGYwMaHB.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cqa7vusB.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BTHM0Kc2.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bkkm3d2D.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bu9NgR_R.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
