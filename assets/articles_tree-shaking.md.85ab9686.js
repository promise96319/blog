import{_ as e,c as a,o as r,a as t}from"./app.19e07002.js";const k=JSON.parse('{"title":"Tree Shaking \u548C \u6309\u9700\u52A0\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"side effects","slug":"side-effects"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"articles/tree-shaking.md","lastUpdated":1661335148000}'),s={name:"articles/tree-shaking.md"},o=t('<h1 id="tree-shaking-\u548C-\u6309\u9700\u52A0\u8F7D" tabindex="-1">Tree Shaking \u548C \u6309\u9700\u52A0\u8F7D <a class="header-anchor" href="#tree-shaking-\u548C-\u6309\u9700\u52A0\u8F7D" aria-hidden="true">#</a></h1><h2 id="side-effects" tabindex="-1">side effects <a class="header-anchor" href="#side-effects" aria-hidden="true">#</a></h2><ul><li>package.json side effects <ul><li>\u5F15\u5165\u5916\u90E8\u6A21\u5757 <code>import &#39;test&#39;</code> \u4F1A\u67E5\u627E\u5916\u90E8\u6A21\u5757\u7684 <code>package.json</code> \u770B\u662F\u5426\u6709 <code>sideEffects</code>\u3002</li><li>\u5F15\u5165\u6CA1\u6709\u5BFC\u51FA\uFF1A<code>import &#39;./index.js&#39;</code> \u4F1A\u67E5\u627E\u81EA\u8EAB <code>package.json</code> \u770B\u662F\u5426\u6709 <code>sideEffects</code> \u3002</li><li>\u5BFC\u51FA\u4E86\u4F46\u662F\u6CA1\u6709\u4F7F\u7528\uFF1A<code>export { xx } from &#39;xxx&#39;</code> \u4F1A\u67E5\u627E\u81EA\u8EAB <code>package.json</code> \u770B\u662F\u5426\u6709 <code>sideEffects</code>\u3002</li><li>\u5982\u679C\u5BFC\u51FA\u88AB\u4F7F\u7528\u6216\u8005\u6709 <code>sideEffects</code> \u7684\u6587\u4EF6\u4F1A\u88AB\u8BA1\u7B97\u5206\u6790\u3002</li></ul></li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://www.npmjs.com/package/lodash-es" target="_blank" rel="noopener noreferrer">lodash-es</a></li><li><a href="https://webpack.js.org/guides/tree-shaking/" target="_blank" rel="noopener noreferrer">webpack tree shaking</a></li><li><a href="https://jishuin.proginn.com/p/763bfbd6d79a" target="_blank" rel="noopener noreferrer">\u4ECE Tree Shaking \u6765\u8D70\u8FDB Babel \u63D2\u4EF6\u5F00\u53D1\u8005\u7684\u4E16\u754C</a></li><li><a href="https://github.com/SunshowerC/blog/issues/8" target="_blank" rel="noopener noreferrer">package.json \u4E2D \u4F60\u8FD8\u4E0D\u6E05\u695A\u7684 browser\uFF0Cmodule\uFF0Cmain \u5B57\u6BB5\u4F18\u5148\u7EA7</a></li><li><a href="https://www.webpackjs.com/plugins/module-concatenation-plugin/" target="_blank" rel="noopener noreferrer">webpack concatenated module</a></li><li><a href="https://babeljs.io/docs/en/babel-preset-env#modules" target="_blank" rel="noopener noreferrer">@babel/preset-env</a></li><li><a href="https://github.com/jht6/blogs/issues/63" target="_blank" rel="noopener noreferrer">package.json \u522B\u540D</a></li><li><a href="https://blog.csdn.net/u012961419/article/details/107094056" target="_blank" rel="noopener noreferrer">side effects</a></li><li><a href="https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free" target="_blank" rel="noopener noreferrer">webpack mark-the-file-as-side-effect-free</a></li></ul>',5),i=[o];function n(l,c,d,h,f,p){return r(),a("div",null,i)}var _=e(s,[["render",n]]);export{k as __pageData,_ as default};
