import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c610f10c.js";const p="/assets/core.c7fcd734.png",e="/assets/parse.24c23c1f.png",o="/assets/traverse.d0e11d1b.png",m=JSON.parse('{"title":"概览","description":"","frontmatter":{},"headers":[],"relativePath":"babel/guide/overview.md","filePath":"babel/guide/overview.md","lastUpdated":1695631559000}'),r={name:"babel/guide/overview.md"},t=l('<h1 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>babel 是一个代码转译工具，专门用于 js 相关的代码转换。虽然平时开发中很少会直接使用 babel 去进行代码转换，但是代码转换这个过程却存在前端日常开发的各个环节，比如：</p><ul><li>ts/react，jsx/vue，template/esnext 等语法转换到目标环境的代码，支持我们用高级语法去开发项目。</li><li>lint 工具对代码进行规范化，减少格式化问题。</li><li>按需加载、tree shaking、代码压缩等，优化代码体积。</li><li>自动国际化、自动埋点等。</li><li>…</li></ul><p>因此，熟悉 babel 的工作原理，对于我们日常开发是非常有帮助的。</p><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><ul><li>parse：将源码转换为抽象语法树（AST）。</li><li>transform：遍历 AST，通过各种插件修改 AST。</li><li>generate：根据新的 AST 生成目标代码，并生产 sourcemap。</li></ul><p><img src="'+p+'" alt="transform"></p><h3 id="parse-阶段" tabindex="-1">parse 阶段 <a class="header-anchor" href="#parse-阶段" aria-label="Permalink to &quot;parse 阶段&quot;">​</a></h3><p>parse 阶段将源码转换为抽象语法树主要包含两部分，以 let name = “guang” 为例：</p><ul><li>词法分析：首先会将源码解析为 let，name， = ， “guang” 一个个的 token。</li><li>语法分析：将生成的 token 进行组装，生成 AST。</li></ul><p><img src="'+e+`" alt="parse 阶段"></p><p>通俗来讲，parse 过程相当于将字符串解析成树结构，这个树结构能够表示源码的语法信息。 我们可以通过 <a href="https://astexplorer.net/" target="_blank" rel="noreferrer">ast explorer</a> 网站查看解析后的 AST，如果想要了解具体如何解析为AST的，可以看看 <a href="https://github.com/vuejs/core/blob/main/packages/compiler-core/src/parse.ts" target="_blank" rel="noreferrer">vue 对模板中 html 的解析过程</a>。</p><p>babel 将 parse 过程封装成了 @babel/parser 库，如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parse } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/parser&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;const a = 1&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(source)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parse } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/parser&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;const a = 1&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(source)</span></span></code></pre></div><h3 id="transform-阶段" tabindex="-1">transform 阶段 <a class="header-anchor" href="#transform-阶段" aria-label="Permalink to &quot;transform 阶段&quot;">​</a></h3><p>transform 阶段将 parse 阶段得到的 AST 进行转换，此时会遍历 AST，然后通过 visitor 对 AST 进行修改，返回新的 AST。</p><p><img src="`+o+`" alt="transform"></p><p>babel 将遍历的过程封装成了 @babel/traverse 库，专门用于遍历 AST。比如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parse } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/parser&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> traverse </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/traverse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;const a = 1&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ast</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(source)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">traverse</span><span style="color:#E1E4E8;">(ast, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">enter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">path</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">state</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (path.node.type </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;VariableDeclaration&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">      path.node.kind </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;var&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parse } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/parser&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> traverse </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/traverse&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;const a = 1&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ast</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(source)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">traverse</span><span style="color:#24292E;">(ast, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">enter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">path</span><span style="color:#24292E;">, </span><span style="color:#E36209;">state</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (path.node.type </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;VariableDeclaration&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">      path.node.kind </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;var&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="generate-阶段" tabindex="-1">generate 阶段 <a class="header-anchor" href="#generate-阶段" aria-label="Permalink to &quot;generate 阶段&quot;">​</a></h3><p>当 AST 修改完成后，就可以遍历新的 AST 生成目标代码，该过程在 babel 中对应 @babel/generator 库：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> generator </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@babel/generator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">code</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generator</span><span style="color:#E1E4E8;">(ast, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  sourceMaps: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 经过转换后生成的目标代码为为：</span></span>
<span class="line"><span style="color:#6A737D;">// var a = 1;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> generator </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@babel/generator&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">code</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generator</span><span style="color:#24292E;">(ast, {</span></span>
<span class="line"><span style="color:#24292E;">  sourceMaps: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 经过转换后生成的目标代码为为：</span></span>
<span class="line"><span style="color:#6A737D;">// var a = 1;</span></span></code></pre></div><p>由于 ast 转换前后都记录了每个 token 在文件中的具体位置，在生成代码的时候可以生成 sourcemap，记录代码生成前和生产后的token 之间的映射关系，从而方便我们快速定位源代码位置。对 sourcemap 的生成原理感兴趣的话可以看看 <a href="https://juejin.cn/post/7071193028051861518" target="_blank" rel="noreferrer">这篇文章</a>，比较有意思。</p><h2 id="工具库" tabindex="-1">工具库 <a class="header-anchor" href="#工具库" aria-label="Permalink to &quot;工具库&quot;">​</a></h2><p>babel 的工作流程已经比较清晰，上面也介绍了一些 babel 相关的库，总结一下 babel 的一些基础工具库：</p><ul><li>@babel/parser：用于将代码解析成 AST。</li><li>@babel/traverse：用于遍历 AST。</li><li>@babel/types：用于遍历时判断 AST 节点类型，创建AST节点等。</li><li>@babel/template：根据模板快速生成对应的 AST。</li><li>@babel/generator：将 AST 生成为目标代码，并生成 sourcemap。</li><li>@babel/core：将 parse，traverse，generator流程整合在一起，并且实现了插件机制，允许外部控制代码转换过程。</li><li>@babel/code-frame：用于解析出错时生成一些标记错误位置信息的代码。类似于 vscode eslint 报错位置信息。</li><li>@babel/helper-module-imports：用于在 AST 中添加 import 语句。</li></ul>`,27),c=[t];function i(y,E,b,d,h,F){return a(),n("div",null,c)}const g=s(r,[["render",i]]);export{m as __pageData,g as default};
