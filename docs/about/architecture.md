# 了解vue-press的架构

## 架构

### 概览

![vue-press-next 架构图](https://v2.vuepress.vuejs.org/images/guide/vuepress-architecture-overview.png)

上图是官方文档提供的简要架构图：

- Node App会生成临时文件，包括布局、页面、路由等等
- Bundler会将Client App和临时文件一起进行打包



### 核心流程与Hooks

![官方核心流程图](https://v2.vuepress.vuejs.org/images/guide/vuepress-core-process.png)

上图是官方文档提供的VuePress 的核心流程以及插件API的Hooks：

- 在**init**阶段：
  - 主题和插件会被加载。这意味着插件需要在初始化之前使用
  - 由于我们要使用`markdown-it`来解析`Markdown`文件，因此`extendsMarkdown`会在加载页面文件之前调用
  - 页面之间会被加载
    - `extendsPageOptions Hook`会被调用，用以创建页面
    - `extendsPageData Hook`会被调用，用以生成页面数据
- 在`prepare`阶段：
  - 临时文件会被生成，因此所有和客户端文件相关的Hooks会在此处调用
- 在`dev/build`阶段
  - Bundler会被加载。由于`alias`和`define`依赖于`Bundler`的配置，所以它们会在此处调用