import{_ as e,c as a,o,a as t}from"./app.6d355226.js";const b=JSON.parse('{"title":"Tapable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hook\u7C7B\u578B\u4ECB\u7ECD","slug":"hook\u7C7B\u578B\u4ECB\u7ECD"}],"relativePath":"webpack/Tapable.md","lastUpdated":1660526486000}'),r={name:"webpack/Tapable.md"},n=t('<h1 id="tapable" tabindex="-1">Tapable <a class="header-anchor" href="#tapable" aria-hidden="true">#</a></h1><p><a href="https://github.com/webpack/tapable" target="_blank" rel="noopener noreferrer">github\u4ED3\u5E93\u5730\u5740</a></p><h2 id="hook\u7C7B\u578B\u4ECB\u7ECD" tabindex="-1">Hook\u7C7B\u578B\u4ECB\u7ECD <a class="header-anchor" href="#hook\u7C7B\u578B\u4ECB\u7ECD" aria-hidden="true">#</a></h2><ul><li><p><code>Basic hook</code>(\u6CA1\u6709<code>Waterfall/Bail/Loop</code>) - \u6309\u987A\u5E8F\u6267\u884C\u56DE\u8C03\u3002</p></li><li><p><strong>Waterfall</strong> - \u6309\u987A\u5E8F\u6267\u884C\u56DE\u8C03\u3002\u4E0D\u8FC7\u524D\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4F1A\u4F20\u7ED9\u4E0B\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p></li><li><p><strong>Bail</strong> - \u6309\u987A\u5E8F\u6267\u884C\u56DE\u8C03\u3002\u5982\u679C\u56DE\u8C03\u51FD\u6570\u6267\u884C\u540E\u6709\u8FD4\u56DE\u503C\uFF0C\u90A3\u4E48\u5C06\u4E0D\u4F1A\u6267\u884C\u4E0B\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p></li><li><p><strong>Loop</strong> - \u6309\u987A\u5E8F\u6267\u884C\u56DE\u8C03\u3002\u5982\u4F55\u67D0\u4E2A\u56DE\u8C03\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u975E<code>undefined</code>\u7684\u503C\uFF0C\u90A3\u4E48\u5C06\u4F1A\u4ECE\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u91CD\u65B0\u6267\u884C\uFF0C\u76F4\u5230\u6240\u6709\u7684\u56DE\u8C03\u51FD\u6570\u90FD\u8FD4\u56DE<code>undefined</code>\u3002</p></li><li><p><strong>Sync</strong> - \u53EA\u80FD\u4F7F\u7528<code>hook.tap()</code>\u76D1\u542C\u3002</p></li><li><p><strong>AsyncSeries</strong> - \u80FD\u88AB<code>hook.tap()/tapAsync()/tapPromise()</code>\u76D1\u542C\u3002<strong>\u6309\u987A\u5E8F\u6267\u884C\u5F02\u6B65\u56DE\u8C03</strong>\u3002</p></li><li><p><strong>AsyncParallel</strong> - \u80FD\u88AB<code>hook.tap()/tapAsync()/tapPromise()</code>\u76D1\u542C\u3002<strong>\u5E76\u5217\u6267\u884C\u5F02\u6B65\u56DE\u8C03</strong>\u3002</p></li></ul>',4),s=[n];function l(p,c,i,d,h,_){return o(),a("div",null,s)}var f=e(r,[["render",l]]);export{b as __pageData,f as default};
