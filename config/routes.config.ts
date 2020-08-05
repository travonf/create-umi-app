// import { IBestAFSRoute } from "@umijs/plugin-layout";

// const routes: IBestAFSRoute[] = [
const routes = [
  {
    path: "/",
    component: "@/pages/index",
    menu: { name: "首页", icon: "Home" }
  },
  {
    path: "/about",
    component: "@/pages/about",
    menu: { name: "关于", icon: "FileText" }
  },
  {
    path: "/pro-table",
    component: "@/pages/pro-table",
    menu: { name: "专业表格", icon: "Table" }
  }
];

export default routes;
