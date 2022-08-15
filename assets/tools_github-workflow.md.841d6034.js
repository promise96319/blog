import{_ as s,c as n,o as a,a as l}from"./app.6d355226.js";const A=JSON.parse('{"title":"Github workflow","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u90E8\u7F72 vitepress","slug":"\u90E8\u7F72-vitepress"},{"level":2,"title":"Github actions","slug":"github-actions"},{"level":2,"title":"\u8BBE\u7F6E token","slug":"\u8BBE\u7F6E-token"},{"level":2,"title":"\u8BBE\u7F6E\u57DF\u540D","slug":"\u8BBE\u7F6E\u57DF\u540D"}],"relativePath":"tools/github-workflow.md","lastUpdated":1660526486000}'),o={name:"tools/github-workflow.md"},p=l(`<h1 id="github-workflow" tabindex="-1">Github workflow <a class="header-anchor" href="#github-workflow" aria-hidden="true">#</a></h1><h2 id="\u90E8\u7F72-vitepress" tabindex="-1">\u90E8\u7F72 vitepress <a class="header-anchor" href="#\u90E8\u7F72-vitepress" aria-hidden="true">#</a></h2><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u4EFB\u52A1\u540D\u79F0</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy blog</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4EFB\u52A1\u89E6\u53D1\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;"># \u6253\u5305\u548C\u90E8\u7F72\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># \u8FD0\u884C\u5728 ubuntu \u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># \u590D\u5236\u4E00\u4E2A\u65B0\u7684\u9879\u76EE</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout a new repository</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528 node \u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Node environment</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">16</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Install packages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm i</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># \u6253\u5305 vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build  site</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># \u5C06\u6253\u5305\u540E\u7684\u9759\u6001\u6587\u4EF6\u4E0A\u4F20\u5230 gp-pages \u5206\u652F\u4E0A</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Publish to github pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JamesIves/github-pages-deploy-action@v4.3.3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">folder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre></div><h2 id="github-actions" tabindex="-1">Github actions <a class="header-anchor" href="#github-actions" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u5728 <code>actions</code> \u5E02\u573A\u91CC\u67E5\u627E\u4E00\u4E9B\u5DF2\u6709\u7684 actions \u6765\u7B80\u5316\u90E8\u7F72\u6D41\u7A0B\u3002</p><ul><li><a href="https://github.com/marketplace?category=deployment&amp;query=github+pages+sort%3Apopularity-desc&amp;type=actions&amp;verification=" target="_blank" rel="noopener noreferrer">Github actions \u5E02\u573A</a></li></ul><h2 id="\u8BBE\u7F6E-token" tabindex="-1">\u8BBE\u7F6E token <a class="header-anchor" href="#\u8BBE\u7F6E-token" aria-hidden="true">#</a></h2><p>\u89E6\u53D1\u4E8B\u4EF6\u65F6\u9700\u8981\u8BBE\u7F6E <code>github token</code>\uFF0C\u5E76\u4E14 <code>token</code> \u9700\u8981\u6709 <code>workflow</code> \u6743\u9650\u3002</p><ul><li><a href="https://github.com/settings/tokens/674290866" target="_blank" rel="noopener noreferrer">\u8BBE\u7F6E\u63A8\u9001\u7684token</a></li></ul><h2 id="\u8BBE\u7F6E\u57DF\u540D" tabindex="-1">\u8BBE\u7F6E\u57DF\u540D <a class="header-anchor" href="#\u8BBE\u7F6E\u57DF\u540D" aria-hidden="true">#</a></h2><p>\u90E8\u7F72\u540E\uFF0C\u9ED8\u8BA4 <code>xxx.github.io</code> \u9879\u76EE\u7684 <code>gh-pages</code> \u5206\u652F\u5BF9\u5E94\u4E8E\u6839\u9879\u76EE\uFF0C\u5176\u4ED6\u4ED3\u5E93\u7684 <code>gh-pages</code> \u5206\u652F\u90E8\u7F72\u540E\u4E3A <code>xxx.github.io/repository_name/</code> \u8DEF\u5F84\u3002\u56E0\u6B64\u53EA\u9700\u8981\u8BBE\u7F6E <code>xxx.github.io</code> \u7684\u57DF\u540D\u6620\u5C04\u5373\u53EF\u3002</p><ul><li><a href="https://docs.github.com/cn/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages" target="_blank" rel="noopener noreferrer">\u57DF\u540D\u8BBE\u7F6E</a></li></ul>`,12),e=[p];function t(c,r,i,y,D,C){return a(),n("div",null,e)}var d=s(o,[["render",t]]);export{A as __pageData,d as default};
