import{_ as s,c as a,o as n,a as l}from"./app.788a9091.js";const e="/assets/core.c7fcd734.png",p="/assets/parse.24c23c1f.png",o="/assets/traverse.d0e11d1b.png",h=JSON.parse('{"title":"概览","description":"","frontmatter":{},"headers":[{"level":2,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":2,"title":"流程","slug":"流程","link":"#流程","children":[{"level":3,"title":"parse 阶段","slug":"parse-阶段","link":"#parse-阶段","children":[]},{"level":3,"title":"transform 阶段","slug":"transform-阶段","link":"#transform-阶段","children":[]},{"level":3,"title":"generate 阶段","slug":"generate-阶段","link":"#generate-阶段","children":[]}]},{"level":2,"title":"工具库","slug":"工具库","link":"#工具库","children":[]}],"relativePath":"babel/guide/overview.md","lastUpdated":1677397522000}'),t={name:"babel/guide/overview.md"},r=l('<h1 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-hidden="true">#</a></h1><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-hidden="true">#</a></h2><p>babel 是一个代码转译工具，专门用于 js 相关的代码转换。虽然平时开发中很少会直接使用 babel 去进行代码转换，但是代码转换这个过程却存在前端日常开发的各个环节，比如：</p><ul><li>ts/react，jsx/vue，template/esnext 等语法转换到目标环境的代码，支持我们用高级语法去开发项目。</li><li>lint 工具对代码进行规范化，减少格式化问题。</li><li>按需加载、tree shaking、代码压缩等，优化代码体积。</li><li>自动国际化、自动埋点等。</li><li>…</li></ul><p>因此，熟悉 babel 的工作原理，对于我们日常开发是非常有帮助的。</p><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-hidden="true">#</a></h2><ul><li>parse：将源码转换为抽象语法树（AST）。</li><li>transform：遍历 AST，通过各种插件修改 AST。</li><li>generate：根据新的 AST 生成目标代码，并生产 sourcemap。</li></ul><p><img src="'+e+'" alt="transform"></p><h3 id="parse-阶段" tabindex="-1">parse 阶段 <a class="header-anchor" href="#parse-阶段" aria-hidden="true">#</a></h3><p>parse 阶段将源码转换为抽象语法树主要包含两部分，以 let name = “guang” 为例：</p><ul><li>词法分析：首先会将源码解析为 let，name， = ， “guang” 一个个的 token。</li><li>语法分析：将生成的 token 进行组装，生成 AST。</li></ul><p><img src="'+p+`" alt="parse 阶段"></p><p>通俗来讲，parse 过程相当于将字符串解析成树结构，这个树结构能够表示源码的语法信息。 我们可以通过 <a href="https://astexplorer.net/" target="_blank" rel="noreferrer">ast explorer</a> 网站查看解析后的 AST，如果想要了解具体如何解析为AST的，可以看看 <a href="https://github.com/vuejs/core/blob/main/packages/compiler-core/src/parse.ts" target="_blank" rel="noreferrer">vue 对模板中 html 的解析过程</a>。</p><p>babel 将 parse 过程封装成了 @babel/parser 库，如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/parser</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">const a = 1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ast </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(source)</span></span>
<span class="line"></span></code></pre></div><h3 id="transform-阶段" tabindex="-1">transform 阶段 <a class="header-anchor" href="#transform-阶段" aria-hidden="true">#</a></h3><p>transform 阶段将 parse 阶段得到的 AST 进行转换，此时会遍历 AST，然后通过 visitor 对 AST 进行修改，返回新的 AST。</p><p><img src="`+o+`" alt="transform"></p><p>babel 将遍历的过程封装成了 @babel/traverse 库，专门用于遍历 AST。比如：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">parse</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/parser</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> traverse </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/traverse</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> source </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">const a = 1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> ast </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parse</span><span style="color:#A6ACCD;">(source)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">traverse</span><span style="color:#A6ACCD;">(ast</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">enter</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">VariableDeclaration</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">kind</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">var</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="generate-阶段" tabindex="-1">generate 阶段 <a class="header-anchor" href="#generate-阶段" aria-hidden="true">#</a></h3><p>当 AST 修改完成后，就可以遍历新的 AST 生成目标代码，该过程在 babel 中对应 @babel/generator 库：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> generator </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@babel/generator</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">generator</span><span style="color:#A6ACCD;">(ast</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">sourceMaps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 经过转换后生成的目标代码为为：</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var a = 1;</span></span>
<span class="line"></span></code></pre></div><p>由于 ast 转换前后都记录了每个 token 在文件中的具体位置，在生成代码的时候可以生成 sourcemap，记录代码生成前和生产后的token 之间的映射关系，从而方便我们快速定位源代码位置。对 sourcemap 的生成原理感兴趣的话可以看看 <a href="https://juejin.cn/post/7071193028051861518" target="_blank" rel="noreferrer">这篇文章</a>，比较有意思。</p><h2 id="工具库" tabindex="-1">工具库 <a class="header-anchor" href="#工具库" aria-hidden="true">#</a></h2><p>babel 的工作流程已经比较清晰，上面也介绍了一些 babel 相关的库，总结一下 babel 的一些基础工具库：</p><ul><li>@babel/parser：用于将代码解析成 AST。</li><li>@babel/traverse：用于遍历 AST。</li><li>@babel/types：用于遍历时判断 AST 节点类型，创建AST节点等。</li><li>@babel/template：根据模板快速生成对应的 AST。</li><li>@babel/generator：将 AST 生成为目标代码，并生成 sourcemap。</li><li>@babel/core：将 parse，traverse，generator流程整合在一起，并且实现了插件机制，允许外部控制代码转换过程。</li><li>@babel/code-frame：用于解析出错时生成一些标记错误位置信息的代码。类似于 vscode eslint 报错位置信息。</li><li>@babel/helper-module-imports：用于在 AST 中添加 import 语句。</li></ul>`,27),c=[r];function i(D,y,F,A,C,d){return n(),a("div",null,c)}const m=s(t,[["render",i]]);export{h as __pageData,m as default};
