import { IBestAFSRoute } from "@umijs/plugin-layout";

const routes: IBestAFSRoute[] = [
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
    path: "/pro-skeleton",
    component: "@/pages/pro-skeleton",
    menu: { name: "专业骨架屏", icon: "Border" },
    routes: [
      {
        path: "list",
        component: "@/pages/pro-skeleton/list",
        menu: { name: "列表页", icon: "UnorderedList" }
      },
      {
        path: "descriptions",
        component: "@/pages/pro-skeleton/descriptions",
        menu: { name: "详情页", icon: "Border" }
      },
      {
        path: "result",
        component: "@/pages/pro-skeleton/result",
        menu: { name: "结果页", icon: "Border" }
      }
    ]
  },
  {
    path: "/pro-card",
    component: "@/pages/pro-card",
    menu: { name: "专业卡片", icon: "Border" },
    routes: [
      {
        path: "list",
        component: "@/pages/pro-card/split",
        menu: { name: "卡片切分", icon: "Border" }
      }
    ]
  },
  {
    path: "/pro-table",
    component: "@/pages/pro-table",
    menu: { name: "专业表格", icon: "Table" }
  }
];

export default routes;
