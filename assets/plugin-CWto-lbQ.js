function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-iJiP0XZP.js","assets/index-G_Oc5hU8.js","assets/index-BN3FdIuf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-G_Oc5hU8.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-iJiP0XZP.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
