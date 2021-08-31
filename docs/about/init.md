# 使用vue-press <Badge type="tip" text="v2" vertical="top" />搭建静态网站
[官方文档](https://v2.vuepress.vuejs.org/zh/)   --- 使用的是最新版本，目前社区关于V2的资源还是比较少的，但是总有点强迫症，版本要用最新的，那就开始踩坑吧

## 项目初始化

- [Node.js v12+](https://nodejs.org/en/) (也可使用yarn，自行安装使用)

一般来说我们都是创建一个新的文件来作为文档/博客网站

1. 初始化

```shell
mkdir my-site
cd my-site
```
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn init
yarn add -D vuepress@next
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm init
npm install -D vuepress@next
```

  </CodeGroupItem>
</CodeGroup>

2. 在package.json总添加一些scripts:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress 14-build docs"
  }
}
```

3. 将默认的临时目录和缓存目录添加到`.gitignore`文件中

```shell
// 此处的.temp，.cache是vue-press默认的文件夹，可在配置文件中修改
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

4. 创建一篇文档并启动本地服务

```shell
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

5. 在Terminal中启动服务
  <CodeGroup>
    <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>
然后在浏览器中访问localhost:8080 //也可在配置文件中自定义

6. 上传github仓库
7. vercel部署我们的程序

## 项目结构 

```shell
目录结构：
- docs
	- .vuepress
		- .chache
		- .temp
		- configs
			- navbar
				- index.ts
				- zh.ts
			- sidebar
				- index.ts
				- zh.ts
			- index.ts
		- dist
		- public
		- config.ts
	- README.md
- package.json
```

### - docs

### -- .vuepress

#### --- .cache

#### --- .temp

#### --- configs

##### ---- navbar

###### ----- Index.ts

###### ----- zh.ts

##### ---- sidebar

###### ----- Index.ts

###### ----- zh.ts

##### ----Index.ts

#### --- dist

#### --- public

#### --- config.ts

### -- README.md

### -- package.json








---



[CodeGroup](https://v2.vuepress.vuejs.org/zh/reference/default-theme/components.html#codegroup):vue-press的内部组件

