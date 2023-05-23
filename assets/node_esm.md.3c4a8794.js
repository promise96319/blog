import{_ as e,o,c as d,a}from"./app.f42e61e3.js";const p=JSON.parse('{"title":"ESM 模块","description":"","frontmatter":{},"headers":[{"level":2,"title":"导入","slug":"导入","link":"#导入","children":[]},{"level":2,"title":"i​mport.meta","slug":"import-meta","link":"#import-meta","children":[]},{"level":2,"title":"与 CJS 不同点","slug":"与-cjs-不同点","link":"#与-cjs-不同点","children":[]},{"level":2,"title":"试验阶段","slug":"试验阶段","link":"#试验阶段","children":[]}],"relativePath":"node/esm.md","lastUpdated":1684811674000}'),i={name:"node/esm.md"},t=a('<h1 id="esm-模块" tabindex="-1">ESM 模块 <a class="header-anchor" href="#esm-模块" aria-hidden="true">#</a></h1><h2 id="导入" tabindex="-1">导入 <a class="header-anchor" href="#导入" aria-hidden="true">#</a></h2><ul><li><code>file:URLs</code>：<code>import &#39;./foo.mjs?query=1&#39;</code>通过路径导入</li><li><code>data:imports</code>：<code>import &#39;data:text/javascript,console.log(&quot;hello!&quot;);&#39;;</code> 导入时指定数据类型（<code>assert</code> 处于试验阶段）</li><li><code>node:imports</code>：<code>import fs from &#39;node:fs/promises&#39;</code> 导入内置模块</li></ul><h2 id="import-meta" tabindex="-1">i<wbr>mport.meta <a class="header-anchor" href="#import-meta" aria-hidden="true">#</a></h2><ul><li><code>url</code>：文件的绝对路径，包含文件名称。</li><li><code>resolve</code>：(试验阶段)，返回路径的<code>Promise</code>。</li></ul><h2 id="与-cjs-不同点" tabindex="-1">与 CJS 不同点 <a class="header-anchor" href="#与-cjs-不同点" aria-hidden="true">#</a></h2><ul><li>没有 <code>require/exports/module.exports</code> 等内容，可以通过 <code>node:module</code> 里的 <code>createRequire</code> 来生成 <code>require</code>。</li><li>没有 <code>__filename/__dirname</code></li></ul><h2 id="试验阶段" tabindex="-1">试验阶段 <a class="header-anchor" href="#试验阶段" aria-hidden="true">#</a></h2><ul><li>引入 <code>json/wasm</code> 模块</li><li><code>https:/http:</code> 模块</li><li><code>Loaders</code> 类似于 <code>webpack loader</code></li></ul>',9),c=[t];function r(l,s,n,h,m,u){return o(),d("div",null,c)}const f=e(i,[["render",r]]);export{p as __pageData,f as default};
