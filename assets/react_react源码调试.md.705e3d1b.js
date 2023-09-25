import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.c610f10c.js";const l="/assets/react-source-code-test.b3ac9a48.jpg",F=JSON.parse('{"title":"react源码调试","description":"","frontmatter":{},"headers":[],"relativePath":"react/react源码调试.md","filePath":"react/react源码调试.md","lastUpdated":1695631559000}'),o={name:"react/react源码调试.md"},c=n('<h1 id="react源码调试" tabindex="-1">react源码调试 <a class="header-anchor" href="#react源码调试" aria-label="Permalink to &quot;react源码调试&quot;">​</a></h1><h3 id="_1-拉取react源码" tabindex="-1">1.拉取<code>react</code>源码 <a class="header-anchor" href="#_1-拉取react源码" aria-label="Permalink to &quot;1.拉取`react`源码&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/facebook/react.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/facebook/react.git</span></span></code></pre></div><h3 id="_2-安装依赖" tabindex="-1">2.安装依赖 <a class="header-anchor" href="#_2-安装依赖" aria-label="Permalink to &quot;2.安装依赖&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 切入到react源码所在文件夹</span></span>\n<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>\n<span class="line"><span style="color:#B392F0;">yarn</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 切入到react源码所在文件夹</span></span>\n<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-main</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>\n<span class="line"><span style="color:#6F42C1;">yarn</span></span></code></pre></div><h3 id="_3-打包react、scheduler、react-dom三个包为dev环境可以使用的cjs包" tabindex="-1">3.打包<code>react</code>、<code>scheduler</code>、<code>react-dom</code>三个包为<code>dev</code>环境可以使用的<code>cjs</code>包 <a class="header-anchor" href="#_3-打包react、scheduler、react-dom三个包为dev环境可以使用的cjs包" aria-label="Permalink to &quot;3.打包`react`、`scheduler`、`react-dom`三个包为`dev`环境可以使用的`cjs`包&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 执行打包命令</span></span>\n<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react/index,react/jsx,react-dom/index,scheduler</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--type=NODE</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 执行打包命令</span></span>\n<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react/index,react/jsx,react-dom/index,scheduler</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--type=NODE</span></span></code></pre></div><h3 id="_4-为react和react-dom创建yarn-link" tabindex="-1">4.为<code>react</code>和<code>react-dom</code>创建<code>yarn link</code> <a class="header-anchor" href="#_4-为react和react-dom创建yarn-link" aria-label="Permalink to &quot;4.为`react`和`react-dom`创建`yarn link`&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build/node_modules/react</span></span>\n<span class="line"><span style="color:#6A737D;"># 申明react指向</span></span>\n<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build/node_modules/react-dom</span></span>\n<span class="line"><span style="color:#6A737D;"># 申明react-dom指向</span></span>\n<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build/node_modules/react</span></span>\n<span class="line"><span style="color:#6A737D;"># 申明react指向</span></span>\n<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build/node_modules/react-dom</span></span>\n<span class="line"><span style="color:#6A737D;"># 申明react-dom指向</span></span>\n<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span></span></code></pre></div><p>如果之前<code>link</code>过<code>react</code>包，可在<code>~/.config/yarn/link</code>文件中进行删除后再<code>link</code>。</p><h3 id="_5-创建一个react项目" tabindex="-1">5.创建一个<code>react</code>项目 <a class="header-anchor" href="#_5-创建一个react项目" aria-label="Permalink to &quot;5.创建一个`react`项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-react-app</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-demo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-react-app</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-demo</span></span></code></pre></div><h3 id="_6-引入刚刚yarn-link的包" tabindex="-1">6.引入刚刚<code>yarn link</code>的包 <a class="header-anchor" href="#_6-引入刚刚yarn-link的包" aria-label="Permalink to &quot;6.引入刚刚`yarn link`的包&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">react-dom</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react</span><span style="color:#24292E;"> </span><span style="color:#032F62;">react-dom</span></span></code></pre></div><h3 id="_7-运行react项目" tabindex="-1">7.运行<code>react</code>项目 <a class="header-anchor" href="#_7-运行react项目" aria-label="Permalink to &quot;7.运行`react`项目&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre></div><h3 id="_8-在浏览器source目录中调试源码" tabindex="-1">8.在浏览器<code>source</code>目录中调试源码 <a class="header-anchor" href="#_8-在浏览器source目录中调试源码" aria-label="Permalink to &quot;8.在浏览器`source`目录中调试源码&quot;">​</a></h3><p><img src="'+l+'" alt="源码调试"></p>',18),p=[c];function t(r,d,i,y,h,E){return s(),e("div",null,p)}const g=a(o,[["render",t]]);export{F as __pageData,g as default};
