function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BBvXOPY4.js","assets/index-BzR7jQ-D.js","assets/index-mu8I-M3P.css","assets/index-QUIG5lrk.js","assets/index-Cm91EhIq.js","assets/index-BR8-ZLcq.js","assets/index-BD6r5LX2.js","assets/index-Aio37dFR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BzR7jQ-D.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BBvXOPY4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-QUIG5lrk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cm91EhIq.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BR8-ZLcq.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BD6r5LX2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Aio37dFR.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
