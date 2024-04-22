function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4if5Gmfw.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css","assets/index-BEk_xxdy.js","assets/index-BThpz21I.js","assets/index-Bplfzrrx.js","assets/index-BA9jCzTO.js","assets/index-Cbjo4yjE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-G_Oc5hU8.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-4if5Gmfw.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BEk_xxdy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BThpz21I.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bplfzrrx.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BA9jCzTO.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cbjo4yjE.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
