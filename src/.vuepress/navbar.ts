import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "公告"  , icon: "article", link: "/public/readme.md",
  },
  { text: "Zotero 百科全书", icon: "article", link: "/user-guide/" },
  {
    text: "中文插件商店",
    icon: "config",
    link: "https://plugins.zotero-chinese.com/",
  },
  {
    text: "中文 CSL 样式",
    icon: "format",
    link: "https://github.com/redleafnew/Chinese-STD-GB-T-7714-related-csl/",
  },
  {
    text: "开发手册",
    icon: "code",
    children: [
      {
        text: "插件开发手册",
        icon: "code",
        link: "/plugin-dev-guide/",
      },
      {
        text: "CSL 中文文档",
        icon: "code",
        link: "/csl-dev-guide/",
      },
    ],
  },
  {
    text: "更多",
    icon: "more",
    children: [
      {
        text: "贡献指南",
        icon: "creative",
        link: "/about/contributing/CONTRIBUTING.md",
      },
      {
        text: "关于",
        icon: "about",
        link: "/about/",
      },
    ],
  },
]);
