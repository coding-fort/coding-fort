const navConfig = require("./public/nav.config.json");
// 编程基础
const codingBasicNavConfig = require("../views/编程基础/nav.json");
// 工程开发
const engineeringDevelopmentNavConfig = require("../views/工程开发/nav.json");
// 类库框架
const classLibraryFrameworkNavConfig = require("../views/类库框架/nav.json");
// 计算机基础
const computerBasicNavConfig = require("../views/计算机基础/nav.json");
// 架构基础
const backendKnowledgeNavConfig = require("../views/架构基础/nav.json");
// 领域分支
const domainBranchNavConfig = require("../views/领域分支/nav.json");
// 软技能
const softSkillNavConfig = require("../views/软技能/nav.json");
// 社区发展
const communityDevelopmentNavConfig = require("../views/社区发展/nav.json");
// 实战示例
const codeDemoNavConfig = require("../views/实战示例/nav.json");

module.exports = {
  head: [["link", { rel: "stylesheet", href: "./styles/index.styl" }]],
  title: "CODING FORT | 前端知识框架",
  description: "前端知识框架",
  dest: "./dist",
  base: "/coding-fort/",
  port: 8080,
  plugins: [
    "@vuepress/back-to-top",
    "demo-container",
    "@vuepress/plugin-search",
    // [
    //   "vuepress-plugin-code-copy",
    //   {
    //     // selector: String,
    //     // align: "top",
    //     color: "#27b1ff",
    //     backgroundTransition: true,
    //     backgroundColor: "#0075b8",
    //     successText: "成功复制到剪贴板",
    //   },
    // ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码",
        tip: {
          content: "复制成功",
        },
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      ...navConfig.nav,
      ...codingBasicNavConfig.nav,
      ...engineeringDevelopmentNavConfig.nav,
      ...classLibraryFrameworkNavConfig.nav,
      ...computerBasicNavConfig.nav,
      ...backendKnowledgeNavConfig.nav,
      ...domainBranchNavConfig.nav,
      ...softSkillNavConfig.nav,
      ...communityDevelopmentNavConfig.nav,
      ...codeDemoNavConfig.nav,
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      ...navConfig.sidebar,
      ...codingBasicNavConfig.sidebar,
      ...engineeringDevelopmentNavConfig.sidebar,
      ...classLibraryFrameworkNavConfig.sidebar,
      ...computerBasicNavConfig.sidebar,
      ...backendKnowledgeNavConfig.sidebar,
      ...domainBranchNavConfig.sidebar,
      ...softSkillNavConfig.sidebar,
      ...communityDevelopmentNavConfig.sidebar,
      ...codeDemoNavConfig.sidebar,
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@packages": "../../packages",
      },
    },
  },
};