function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4Q1NZ90u.js","assets/index-C0J7fmCP.js","assets/index-BN3FdIuf.css","assets/index-CIGihwGF.js","assets/index-jXUyiAdo.js","assets/index-vK-aE22a.js","assets/index-CLzMzu9Q.js","assets/index-BLWcsGHd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C0J7fmCP.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-4Q1NZ90u.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CIGihwGF.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-jXUyiAdo.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-vK-aE22a.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CLzMzu9Q.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BLWcsGHd.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
