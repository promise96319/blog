import{_ as e,o as l,c as o,a as i}from"./app.f42e61e3.js";const _=JSON.parse('{"title":"packages","description":"","frontmatter":{},"headers":[{"level":2,"title":"决定使用何种 module","slug":"决定使用何种-module","link":"#决定使用何种-module","children":[]},{"level":2,"title":"加载","slug":"加载","link":"#加载","children":[]},{"level":2,"title":"入口","slug":"入口","link":"#入口","children":[]}],"relativePath":"node/package.md","lastUpdated":1684811674000}'),d={name:"node/package.md"},c=i('<h1 id="packages" tabindex="-1">packages <a class="header-anchor" href="#packages" aria-hidden="true">#</a></h1><h2 id="决定使用何种-module" tabindex="-1">决定使用何种 module <a class="header-anchor" href="#决定使用何种-module" aria-hidden="true">#</a></h2><ul><li>ESM <ul><li><code>.mjs</code> 后缀</li><li><code>.js</code> 后缀并且 <code>package.json</code> 的 <code>type</code> 为 <code>module</code>。</li><li>Strings passed in as an argument to --eval, or piped to node via STDIN, with the flag --input-type=module.</li></ul></li><li>CJS <ul><li><code>.cjs</code> 后缀</li><li><code>.js</code> 后缀并且 <code>package.json</code> 的 <code>type</code> 为 <code>commonjs</code>（或者不指定）。</li><li>Strings passed in as an argument to --eval or --print, or piped to node via STDIN, with the flag --input-type=commonjs.</li></ul></li></ul><h2 id="加载" tabindex="-1">加载 <a class="header-anchor" href="#加载" aria-hidden="true">#</a></h2><ul><li>CJS <ul><li>同步加载</li><li>支持将文件夹当做模块</li><li>支持加载 <code>.js/.json/.node</code> 文件</li><li><code>.json</code> 文件会被当做文本处理</li><li>可以缺省文件后缀</li></ul></li><li>ESM <ul><li>异步加载</li><li>文件路径必须完整</li><li>仅支持加载 <code>.js/.mjs/.cjs</code> 文件</li></ul></li></ul><h2 id="入口" tabindex="-1">入口 <a class="header-anchor" href="#入口" aria-hidden="true">#</a></h2><ul><li><code>main</code>： 指定 <code>package</code> 入口</li><li><code>exports</code>：指定多个入口 <ul><li>其他未指定的入口如果被其他项目引用则会报错。</li><li>可以通过 <code>import/require</code> 来指定不同的引入方式需要加载的文件。这样的特定属性包括： <ul><li><code>node-addons</code></li><li><code>node</code>：<code>node</code> 环境下加载</li><li><code>import</code>：<code>import/import()</code> 下加载</li><li><code>require</code>：<code>require</code> 下加载</li><li><code>default</code>：默认，比其他的加载方式优先级低</li></ul></li></ul></li><li><code>imports</code>：有点像包的别名，可以通过 <code>#pkgName</code> 的方式引入某个包的某些文件。</li></ul>',7),a=[c];function t(n,r,s,u,p,h){return l(),o("div",null,a)}const g=e(d,[["render",t]]);export{_ as __pageData,g as default};
