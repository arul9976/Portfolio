function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CBKptriT.js","assets/index-CcsQaCFI.js","assets/index-BN3FdIuf.css","assets/index-CvnHq3v0.js","assets/index-CqMpUWJ8.js","assets/index-BizHecSd.js","assets/index-D5CKPz5S.js","assets/index-DLxiITGg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CcsQaCFI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CBKptriT.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CvnHq3v0.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CqMpUWJ8.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BizHecSd.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D5CKPz5S.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DLxiITGg.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
