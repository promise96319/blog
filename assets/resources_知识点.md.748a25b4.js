import{_ as s,c as l,o as a,a as e}from"./app.da177e40.js";const n="/assets/image-20220519235256312.d6a0064b.png",u=JSON.parse('{"title":"知识点","description":"","frontmatter":{},"headers":[{"level":2,"title":"前端埋点","slug":"前端埋点","link":"#前端埋点","children":[]},{"level":2,"title":"DSL","slug":"dsl","link":"#dsl","children":[]}],"relativePath":"resources/知识点.md","lastUpdated":1677323371000}'),o={name:"resources/知识点.md"},p=e(`<h1 id="知识点" tabindex="-1">知识点 <a class="header-anchor" href="#知识点" aria-hidden="true">#</a></h1><ul><li><p><a href="https://www.npmjs.com/package/mlly" target="_blank" rel="noreferrer">mlly</a>：<code>esm</code> 相关工具方法，包括解析导入导出变量等。</p></li><li><p><a href="https://www.npmjs.com/package/webpack-virtual-modules" target="_blank" rel="noreferrer">Webpack Virtual Modules</a>：在内存中生成“虚拟module”，支持监测文件变化。</p></li><li><p><code>swr</code> (全称 <code>stale-while-revalidate</code>)</p><ul><li>使用：<code>Cache-Control: max-age=600, stale-while-revalidate=30</code></li><li>作用：当资源请求时，浏览器会查找相关缓存。 <ul><li>如果缓存未过期，则发起请求时将直接从本地拿取数据。</li><li>如果缓存过期，但过期时长未超出 <code>stale-while-revalidate</code> 设定的值（600 + 30），发起请求时浏览器仍然会从本地拿取数据，但是同时它会异步发出重新校验（<code>revalidate</code>)请求。重新校验请求所返回的响应值将为替代之前的响应缓存存于本地，并刷新缓存计时器。</li><li>如果缓存过期，且过期时长超出 <code>stale-while-revalidate</code> 设定的值，浏览器发起请求时会直接请求服务端拿取最新响应数据并刷新本地缓存。</li></ul></li><li>应用： <ul><li>针对不需要不断刷新但可接受一定程度的延迟的信息服务。</li><li>在同一页面的不同组件多次发起相同的请求，<code>React Query</code> 能 <code>Dedupe</code> 成一个，其他请求的数据均由缓存返回。</li></ul></li></ul></li><li><p><a href="https://github.com/shikijs/shiki" target="_blank" rel="noreferrer">Shiki</a> 语法高亮库</p></li><li><p><a href="https://webpack.github.io/analyse/" target="_blank" rel="noreferrer">Webpack analyse</a> 包分析工具，来自<a href="https://zhuanlan.zhihu.com/p/370980997" target="_blank" rel="noreferrer">这里</a></p></li><li><p>yarn pnp</p><ul><li><a href="https://loveky.github.io/2019/02/11/yarn-pnp/" target="_blank" rel="noreferrer">https://loveky.github.io/2019/02/11/yarn-pnp/</a></li><li>不在 node_modules 里安装依赖，而是映射到缓存中，安装速度更快。</li></ul></li><li><p><a href="http://unpkg.com" target="_blank" rel="noreferrer">unpkg.com</a><a href="https://unpkg.com/" target="_blank" rel="noreferrer">unpkg.com</a>： 通过 <code>cdn</code> 的方式获取 <code>npm</code> 包及文件。</p></li><li><p>stub 概念 <a href="https://antfu.me/posts/publish-esm-and-cjs" target="_blank" rel="noreferrer">来自 antfu</a> 参见 <code>jiti</code> 包：通常情况下，运行一个文件比如 <code>ts</code> 文件，需要先打包然后再运行。而 <code>stub</code> 相当于去除了直接打包的步骤，在程序需要运行时，再将代码编译执行。</p></li><li><p>员工与公司的关系</p></li></ul><blockquote><p>员工与公司的关系就像种子与土壤的关系。员工是种子，公司是土壤。种子没有一块好的土壤，难以生根发芽，茁壮成长。土壤没有种子，就失去了生命力。</p></blockquote><h2 id="前端埋点" tabindex="-1">前端埋点 <a class="header-anchor" href="#前端埋点" aria-hidden="true">#</a></h2><p><a href="https://github.com/x-orpheus/blog/blob/master/content/blog/web-track.md" target="_blank" rel="noreferrer">来自网易云</a></p><ul><li>元素点击埋点：</li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TrackerClick</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">namespace.click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">handleClick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">点击坑位</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TrackerClick</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>元素曝光埋点： 借助 <code>IntersectionObservers</code> <code>api</code> 监听元素进入或离开视口的事件。</li></ul><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">TrackerExposure</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pagination.impress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">extra</span><span style="color:#89DDFF;">={{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">modulePosition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">addRef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">addRef</span><span style="color:#89DDFF;">}&gt;{</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">TrackerExposure</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><ul><li>页面曝光埋点： 封装 <code>track</code> 方法，手动在生命周期里记录页面曝光。同理也可以手动记录事件回调。</li></ul><h2 id="dsl" tabindex="-1">DSL <a class="header-anchor" href="#dsl" aria-hidden="true">#</a></h2><p>特定领域语言（<code>Domain Specific Language</code>） <a href="https://github.com/x-orpheus/blog/blob/master/content/blog/dsl/index.md" target="_blank" rel="noreferrer">来自网易云博客</a></p><h4 id="内部-dsl" tabindex="-1">内部 DSL <a class="header-anchor" href="#内部-dsl" aria-hidden="true">#</a></h4><blockquote><p>它是建立在其它宿主语言之上（一般为 GPPL）的特殊 DSL，它与宿主语言共享编译与调试工具等基础设施，学习成本更低，也更容易被集成。他在语法上与宿主语言同源，但在运行时上需要做额外的封装。</p></blockquote><ul><li>级联方法</li><li>级联管道</li><li>级联属性</li><li>嵌套函数</li><li>对象字面量</li><li>动态代理</li><li>Lambda 表达式</li><li>自然语言抽象</li></ul><p><img src="`+n+'" alt="image-20220519235256312"></p><p>缺点：</p><ul><li>不友好的异常，但是可以通过 <code>Proxy</code> 进行代理处理异常情况。</li><li><code>DSL</code> 的设计对底层领域模型的封装要求较高。</li><li>编辑器可能存在对 <code>DSL</code> 的排版格式化高亮问题。</li></ul>',18),t=[p];function r(c,i,d,D,y,F){return a(),l("div",null,t)}const C=s(o,[["render",r]]);export{u as __pageData,C as default};
