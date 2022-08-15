import{_ as s,c as n,o as a,a as o}from"./app.6d355226.js";var l="/assets/event-loop-callstack.3a273915.png",p="/assets/memory-overflowing.cfd2acd5.png",e="/assets/event-loop-overview.74d2993b.png",c="/assets/macrotask-microtask.9f41bfe2.png",t="/assets/browser-async-excute-animate.b91bcdb7.gif";const u=JSON.parse('{"title":"\u4E8B\u4EF6\u5FAA\u73AF\u3001\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9","slug":"\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9"},{"level":2,"title":"\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217","slug":"\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217"},{"level":2,"title":"\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236","slug":"\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236"},{"level":2,"title":"\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1","slug":"\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1"},{"level":2,"title":"node \u4E8B\u4EF6\u5FAA\u73AF","slug":"node-\u4E8B\u4EF6\u5FAA\u73AF"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"javascript/\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236.md","lastUpdated":1660526486000}'),r={name:"javascript/\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236.md"},F=o(`<h1 id="\u4E8B\u4EF6\u5FAA\u73AF\u3001\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF\u3001\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1 <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF\u3001\u5FAE\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1" aria-hidden="true">#</a></h1><p><strong>\u77E5\u8BC6\u8981\u70B9\uFF1A</strong></p><ul><li>\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9\uFF0C\u4EE5\u53CA\u4E3A\u4EC0\u4E48\u9700\u8981\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF1F</li><li>\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217\u662F\u600E\u6837\u7684\uFF1F</li><li>\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u7A76\u7ADF\u662F\u600E\u6837\u7684\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u9700\u8981\u5FAE\u4EFB\u52A1\uFF1F\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u5206\u522B\u662F\u600E\u6837\u7684\uFF1F</li><li>\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F\u662F\u600E\u6837\u7684\uFF1F</li></ul><h2 id="\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9" tabindex="-1">\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9 <a class="header-anchor" href="#\u5355\u7EBF\u7A0B\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a></h2><p><code>javascript</code>\u662F\u4E00\u95E8<strong>\u5355\u7EBF\u7A0B\u975E\u963B\u585E</strong>\u7684\u8BED\u8A00\u3002<strong>\u5355\u7EBF\u7A0B</strong>\u7684\u6700\u5927\u597D\u5904\u662F\u4E0D\u7528\u50CF\u591A\u7EBF\u7A0B\u7F16\u7A0B\u90A3\u6837\u5904\u5904\u5728\u610F\u72B6\u6001\u7684\u540C\u6B65\u95EE\u9898\u3002\u8BD5\u60F3\u4E00\u4E0B\uFF0C\u5982\u679C<code>js</code>\u662F\u591A\u7EBF\u7A0B\u8BED\u8A00\uFF0C\u90A3\u4E48\u540C\u65F6\u6709\u4E24\u4E2A\u6216\u591A\u4E2A\u7EBF\u7A0B\u5BF9\u4E00\u4E2A<code>DOM</code>\u8FDB\u884C\u5904\u7406\uFF0C<code>DOM</code>\u8BE5\u5982\u4F55\u5C55\u73B0\u5462\uFF1F\u56E0\u6B64\uFF0C\u4E3A\u4E86\u907F\u514D\u8FD9\u7C7B\u95EE\u9898\u7684\u51FA\u73B0\uFF0C<code>js</code>\u9009\u62E9\u91C7\u7528\u5355\u7EBF\u7A0B\u6765\u6267\u884C\u4EE3\u7801\uFF0C\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u7A0B\u5E8F\u7684\u4E00\u81F4\u6027\u4E86\u3002</p><p>\u4F46\u662F\u4F7F\u7528\u5355\u7EBF\u7A0B\u53C8\u4F1A\u5E26\u6765\u65B0\u7684\u9EBB\u70E6\uFF1A\u6BD4\u5982\u7531\u4E8E<code>js</code>\u548C<code>UI</code>\u5171\u7528\u4E00\u4E2A\u7EBF\u7A0B\uFF0C<code>js</code>\u4EE3\u7801\u5982\u679C\u957F\u65F6\u95F4\u6267\u884C\uFF0C\u52BF\u5FC5\u4F1A\u5BFC\u81F4<code>UI</code>\u4E00\u76F4\u65E0\u6CD5\u6E32\u67D3\uFF0C\u8FD9\u4F1A\u4E25\u91CD\u5730\u5F71\u54CD\u5230\u7528\u6237\u7684\u4F7F\u7528\u4F53\u9A8C\u3002</p><p>\u90A3\u4E48\uFF0C\u6709\u6CA1\u6709\u529E\u6CD5\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u7B54\u6848\u662F\u6709\u7684\uFF0C\u5C31\u662F\u901A\u8FC7<strong>\u5F02\u6B65\u56DE\u8C03</strong>\u7684\u65B9\u5F0F\u6765\u89E3\u51B3\u7EBF\u7A0B\u963B\u585E\u95EE\u9898\u3002\u800C\u8FD9\u5C31\u6D89\u53CA\u5230<code>js</code>\u4E2D\u4E00\u4E2A\u975E\u5E38\u6838\u5FC3\u7684\u77E5\u8BC6\u70B9\uFF1A\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF08<code>Event Loop</code>\uFF09\u3002</p><h2 id="\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217" tabindex="-1">\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217 <a class="header-anchor" href="#\u8C03\u7528\u6808\u548C\u4EFB\u52A1\u961F\u5217" aria-hidden="true">#</a></h2><p>\u5728\u8BB2\u4E8B\u4EF6\u5FAA\u73AF\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u719F\u6089\u4E00\u4E0B<strong>\u8C03\u7528\u6808</strong>\u548C<strong>\u4EFB\u52A1\u961F\u5217</strong>\u7684\u6982\u5FF5\u3002<strong>\u8C03\u7528\u6808</strong>\u662F\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u7BA1\u7406\u51FD\u6570\u7684\u8C03\u7528\u5173\u7CFB\u3002\u5982\u679C\u6211\u4EEC\u6267\u884C\u4E00\u4E2A\u51FD\u6570\uFF0C\u90A3\u4E48\u4F1A\u5C06\u8FD9\u4E2A\u51FD\u6570\u538B\u5165\u5230\u6808\u4E2D\uFF1B\u5982\u679C\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u4E86\uFF0C\u90A3\u4E48\u4F1A\u5C06\u8FD9\u4E2A\u51FD\u6570\u4ECE\u6808\u4E2D\u5F39\u51FA\u3002\u6BD4\u5982\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">multiply</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">printSquare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">multiply</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">printSquare</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u521A\u5F00\u59CB\u7684\u65F6\u5019\u8C03\u7528\u6808\u662F\u7A7A\u7684\uFF0C\u7D27\u63A5\u7740\u7684\u6267\u884C\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><p><img src="`+l+'" alt="img"></p><p>\u5F53\u6211\u4EEC\u65E0\u9650\u5FAA\u73AF\u8C03\u7528\u67D0\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u4E00\u76F4\u5411\u8C03\u7528\u6808\u5185\u6DFB\u52A0\u8C03\u7528\u7684\u51FD\u6570\u3002\u5F53\u8FBE\u5230\u4E00\u5B9A\u503C\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u8D85\u51FA\u6808\u7684\u5185\u5B58\uFF0C\u8FD9\u5C31\u662F<strong>\u6808\u6EA2\u51FA</strong>\u3002</p><p><img src="'+p+'" alt="img"></p><p>\u4EE5\u4E0A\u662F\u540C\u6B65\u6267\u884C\u4EE3\u7801\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u9047\u5230\u5F02\u6B65\u4EFB\u52A1\u4F1A\u53D1\u751F\u4EC0\u4E48\u5462\uFF1F\u6211\u4EEC\u5148\u770B\u4E00\u5F20\u56FE\uFF1A</p><p><img src="'+e+`" alt="img"></p><p><code>Call Stack</code>\u6307\u7684\u5C31\u662F\u8C03\u7528\u6808\u3002</p><p><code>Web APIs</code>\u4EE3\u8868\u7684<code>js</code>\u91CC\u7684\u5F02\u6B65\u4E8B\u4EF6\u3002</p><p><code>Callback Queue</code>\u5219\u662F\u7531\u56DE\u8C03\u51FD\u6570\u7EC4\u6210\u7684<strong>\u4EFB\u52A1\u961F\u5217</strong>\uFF0C\u7528\u4E8E\u5B58\u653E\u8981\u6267\u884C\u7684\u4EFB\u52A1\u3002</p><p>\u4EFB\u52A1\u961F\u5217\u7B26\u5408\u961F\u5217\u201C\u5148\u8FDB\u5148\u51FA\u201D\u7684\u7279\u70B9\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8981\u6DFB\u52A0\u4EFB\u52A1\u7684\u8BDD\uFF0C\u6DFB\u52A0\u5230\u961F\u5217\u7684\u5C3E\u90E8\uFF1B\u8981\u53D6\u51FA\u4EFB\u52A1\u7684\u8BDD\uFF0C\u4ECE\u961F\u5217\u5934\u90E8\u53BB\u53D6\u3002</p><p>\u4F46\u662F\u8C03\u7528\u6808\u3001Web APIs\u548C\u6D88\u606F\u961F\u5217\u4E4B\u95F4\u7684\u5173\u7CFB\u5230\u5E95\u662F\u600E\u6837\u7684\u5462\uFF1F\u8FD9\u5C31\u9700\u8981\u6211\u4EEC\u4E86\u89E3\u4E00\u4E0B\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u4E86\u3002</p><h2 id="\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" tabindex="-1">\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236 <a class="header-anchor" href="#\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236" aria-hidden="true">#</a></h2><p>\u5728<code>MDN</code>\u4E0A\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u63CF\u8FF0\u662F\u8FD9\u6837\u5BF9\u7684\uFF1A\u4E4B\u6240\u4EE5\u88AB\u79F0\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u662F\u56E0\u4E3A\u5B83\u7ECF\u5E38\u6309\u7167\u7C7B\u4F3C\u5982\u4E0B\u7684\u65B9\u5F0F\u5B9E\u73B0\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u5F85\u6D88\u606F\u5230\u6765</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#A6ACCD;"> (queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">waitForMessage</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5904\u7406\u6D88\u606F</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">processNextMessage</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u91CC\u7ED3\u5408\u4E0A\u9762\u63D0\u5230\u7684\u4EFB\u52A1\u961F\u5217\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\u5C31\u662F\u4E0D\u65AD\u7684\u4ECE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u51FA\u4EFB\u52A1\uFF0C\u7136\u540E\u6267\u884C\u4EFB\u52A1\uFF0C\u7B49\u5F85\u65B0\u4EFB\u52A1\u3002\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u5177\u4F53\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u9996\u5148\uFF0C\u8FD9\u6574\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u505A\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u7136\u540E\u4F1A\u88AB\u53D6\u51FA\u6765\u6267\u884C\uFF0C\u8FD9\u91CC\u53EB\u505A\u4EFB\u52A1A\u3002\u5F53\u9047\u5230<code>setTimeout</code>\u7684\u65F6\u5019\uFF08\u4E5F\u5C31\u662F\u8C03\u7528\u4E86<code>Web APIs</code>\uFF09\u7684\u65F6\u5019\uFF0C\u4F1A\u8FDB\u884C\u5F02\u6B65\u6267\u884C\u3002\u800C\u5F53\u524D\u4EFB\u52A1A\u4F1A\u4E0D\u4F1A\u7B49\u5F85<code>setTimeout</code>\u6267\u884C\uFF0C\u800C\u662F\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6BB5\u4EE3\u7801\uFF0C\u5F53\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u65F6\uFF0C\u4EFB\u52A1A\u5C31\u7B97\u6267\u884C\u5B8C\u6BD5\u4E86\u3002\u6B64\u65F6\u53C8\u4F1A\u4ECE\u4EFB\u52A1\u961F\u5217\u91CC\u53D6\u4EFB\u52A1\uFF0C\u53D1\u73B0\u6CA1\u6709\u4EFB\u52A1\uFF0C\u90A3\u4E48\u5C31\u5F00\u59CB\u7B49\u5F85\u3002\u5F53\u8FC7\u4E86\u4E00\u6BB5\u65F6\u95F4\uFF0C<code>setTimeout</code>\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u5C06\u56DE\u8C03\u51FD\u6570\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u91CC\u3002\u90A3\u4E48\u4E0B\u6B21\u4ECE\u4EFB\u52A1\u961F\u5217\u91CC\u53D6\u4EFB\u52A1\u65F6\uFF0C\u53D1\u73B0\u6709\u56DE\u8C03\u51FD\u6570\uFF0C\u5C31\u4F1A\u53D6\u51FA\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u8BB0\u505A\u4EFB\u52A1<code>B</code>\uFF0C\u7136\u540E\u6267\u884C\u4EFB\u52A1<code>B</code>\u3002\u4EE5\u6B64\u7C7B\u63A8...</p><p>\u56E0\u6B64\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u5C31\u662F\u4E00\u4E2A\u53D6\u4EFB\u52A1\uFF0C\u6267\u884C\u4EFB\u52A1\uFF0C\u7B49\u5F85\u4EFB\u52A1\u7684\u5FAA\u73AF\u8FC7\u7A0B\u3002</p><h2 id="\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" tabindex="-1">\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u6982\u5FF5\u5462\uFF1F\u56E0\u4E3A\u5728\u6211\u4EEC\u7684\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5176\u5B9E\u662F\u65E0\u6CD5\u533A\u5206\u4F18\u5148\u7EA7\u7684\uFF0C\u6240\u6709\u7684\u4EFB\u52A1\u90FD\u662F\u6309\u7167\u88AB\u6DFB\u52A0\u7684\u65F6\u95F4\u987A\u5E8F\u6765\u6392\u5217\uFF0C\u8FD9\u663E\u7136\u4E0D\u7B26\u5408\u4E00\u4E9B\u5B9E\u65F6\u6027\u8981\u6C42\u8F83\u9AD8\u7684\u60C5\u51B5\u3002\u56E0\u6B64\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5F15\u5165\u4E86\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u6982\u5FF5\uFF0C\u5C06\u4EFB\u52A1\u5212\u5206\u4E86\u4F18\u5148\u7EA7\u3002\u90A3\u4E48\u4EC0\u4E48\u662F\u5B8F\u4EFB\u52A1\u4EC0\u4E48\u662F\u5FAE\u4EFB\u52A1\u5462\uFF1F</p><p>\u8FD9\u91CC\u5177\u4F53\u7684\u5B9A\u4E49\u6682\u65F6\u662F\u6CA1\u6709\u7684\uFF0C\u4F46\u662F\u53EF\u4EE5\u6309\u7167\u5F02\u6B65\u51FD\u6570\u7684\u7C7B\u578B\u8FDB\u884C\u5927\u81F4\u5212\u5206\uFF1A</p><p><strong>\u5B8F\u4EFB\u52A1\uFF1A\u5305\u542B\u6267\u884C\u6574\u4F53\u7684js\u4EE3\u7801\uFF0C\u4E8B\u4EF6\u56DE\u8C03\uFF0CXHR\u56DE\u8C03\uFF0C\u5B9A\u65F6\u5668\uFF08setTimeout/setInterval/setImmediate\uFF09\uFF0CIO\u64CD\u4F5C\uFF0CUI render\u3002</strong></p><p><strong>\u5FAE\u4EFB\u52A1\uFF1A\u66F4\u65B0\u5E94\u7528\u7A0B\u5E8F\u72B6\u6001\u7684\u4EFB\u52A1\uFF0C\u5305\u62ECpromise\u56DE\u8C03\uFF0CMutationObserver\uFF0Cprocess.nextTick\uFF0CObject.observe\u3002</strong></p><p>\u63A5\u4E0B\u6765\u7740\u91CD\u4E86\u89E3\u4E0B\u5FAE\u4EFB\u52A1\uFF08<code>microTask</code>\uFF09\u548C\u5B8F\u4EFB\u52A1\uFF08<code>macroTask</code>\uFF09\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u8FD9\u91CC\u6709\u4E00\u5F20\u56FE\uFF1A</p><p><img src="`+c+`" alt="img"></p><p>\u8FD9\u91CC\u7684<code>macroTask</code>\u7EC4\u6210\u7684\u961F\u5217\u5C31\u662F\u4E0A\u9762\u6211\u4EEC\u4E86\u89E3\u7684\u4EFB\u52A1\u961F\u5217\u3002\u4ECE\u8FD9\u5F20\u56FE\u53EF\u4EE5\u770B\u51FA\uFF0C<strong>\u6BCF\u4E2A\u5B8F\u4EFB\u52A1\u4E4B\u95F4\u90FD\u4F1A\u6709\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217</strong>\u3002\u5728\u6267\u884C\u5B8C\u5F53\u524D\u5B8F\u4EFB\u52A1\u4E4B\u540E\uFF0C\u5728\u53D6\u5F97\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u4E4B\u524D\uFF0C\u5C31\u4F1A\u6267\u884C\u8FD9\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\u91CC\u7684\u6BCF\u4E00\u4E2A\u4EFB\u52A1\u3002\u4E0B\u9762\u6211\u4EEC\u7ED3\u5408\u5177\u4F53\u4F8B\u5B50\u8FDB\u884C\u8BF4\u660E\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">setTimeout</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">promise2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><ol><li><p>\u9996\u5148\uFF0C\u6211\u4EEC\u8FD8\u662F\u5C06\u8FD9\u6574\u6BB5\u4EE3\u7801\u770B\u4F5C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u53EB\u505A\u4EFB\u52A1<code>A</code>\uFF0C\u6267\u884C\u7684\u65F6\u5019\u6253\u5370<strong>start</strong>\uFF1B</p></li><li><p>\u5F53\u6267\u884C\u5230<code>setTimeout</code>\u7684\u65F6\u5019\uFF0C\u4EFB\u52A1<code>A</code>\u8DF3\u8FC7<code>setTimeout</code>\u7EE7\u7EED\u6267\u884C\u3002\u800C<code>setTimeout</code>\u4F1A\u5728\u65F6\u95F4\u5230\u671F\u540E\u5C06\u56DE\u8C03\u51FD\u6570\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\uFF0C\u8FD9\u91CC\u5C06\u56DE\u8C03\u51FD\u6570\u8BB0\u4E3A\u4EFB\u52A1<code>B</code>\uFF1B</p></li><li><p>\u5F53\u6267\u884C\u5230<code>Promise</code>\u7684\u65F6\u5019\uFF0C\u4EFB\u52A1<code>A</code>\u8DF3\u8FC7<code>Promise</code>\u7EE7\u7EED\u6267\u884C\u3002\u800C\u5C06<code>then1</code>\u6DFB\u52A0\u5230\u4EFB\u52A1<code>A</code>\u4E4B\u540E\u4EFB\u52A1<code>B</code>\u4E4B\u524D\u7684\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u8BB0\u505A\u5FAE\u4EFB\u52A1<code>C</code>\u3002</p></li><li><p>\u4EFB\u52A1<code>A</code>\u7EE7\u7EED\u6267\u884C\uFF0C\u6253\u5370<strong>end\u3002</strong></p></li><li><p>\u5F53\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u53BB\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u4EFB\u52A1\uFF0C\u56E0\u6B64\u62FF\u5230\u4E86\u4EFB\u52A1<code>C</code>\u5E76\u6267\u884C\uFF0C\u6253\u5370<strong>promise1</strong>\u3002\u6267\u884C\u7684\u65F6\u5019\u9047\u5230\u4E86<code>then2</code>\uFF0C\u56E0\u6B64\u5C06<code>then2</code>\u6DFB\u52A0\u5230\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u7684\u672B\u5C3E\uFF0C\u8BB0\u505A\u4EFB\u52A1<code>D</code>\u3002\u4EFB\u52A1<code>C\u6267\u884C\u5B8C\u6BD5</code>\u3002</p></li><li><p>\u7EE7\u7EED\u4ECE\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u4EFB\u52A1\uFF0C\u53D6\u5230\u4E86\u4EFB\u52A1<code>D</code>\u5E76\u6267\u884C\uFF0C\u6253\u5370**promise2\uFF0C**\u4EFB\u52A1<code>D</code>\u6267\u884C\u5B8C\u6BD5\u3002</p></li><li><p>\u7EE7\u7EED\u4ECE\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u4EFB\u52A1\uFF0C\u53D1\u73B0\u6CA1\u6709\u4EFB\u52A1\u3002\u968F\u540E\u53BB\u4EFB\u52A1\u961F\u5217\u4E2D\u53D6\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5F97\u5230\u4EFB\u52A1<code>B</code>\u5E76\u6267\u884C\uFF0C\u6253\u5370**setTimeout\uFF0C**\u4EFB\u52A1<code>B</code>\u6267\u884C\u5B8C\u6BD5\u3002</p></li><li><p>\u91CD\u590D\u4EE5\u4E0A\u6B65\u9AA4\u53D6\u5FAE\u4EFB\u52A1\u548C\u5B8F\u4EFB\u52A1\u3002</p></li></ol><p>\u56E0\u6B64\uFF0C\u6700\u7EC8\u7684\u6253\u5370\u7ED3\u679C\u662F\uFF1A</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">start</span></span>
<span class="line"><span style="color:#A6ACCD;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">promise1</span></span>
<span class="line"><span style="color:#A6ACCD;">promise2</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout</span></span>
<span class="line"></span></code></pre></div><p>\u901A\u8FC7<code>gif</code>\u56FE\u53EF\u4EE5\u66F4\u76F4\u89C2\u7684\u770B\u4E0B\u6574\u4E2A\u6267\u884C\u8FC7\u7A0B\uFF1A</p><p><img src="`+t+`" alt="img"></p><p>\u81F3\u6B64\uFF0C\u6D4F\u89C8\u5668\u91CC\u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u5C31\u5B66\u5F97\u5DEE\u4E0D\u591A\u4E86\u3002\u8FD9\u91CC\u9700\u8981\u5F15\u8D77\u6CE8\u610F\u7684\u4E00\u70B9\u662F\uFF0C<strong>\u6BCF\u6B21\u53D6\u7684\u662F\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u800C\u5B8F\u4EFB\u52A1\u4E0E\u5B8F\u4EFB\u52A1\u4E4B\u95F4\u662F\u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u53EF\u80FD\u5177\u6709\u591A\u4E2A\u5FAE\u4EFB\u52A1\u3002\u800C\u4E14\u5FAE\u4EFB\u52A1\u91CC\u5982\u679C\u6267\u884C\u4E86\u5FAE\u4EFB\u52A1\uFF0C\u540C\u6837\u4F1A\u5C06\u65B0\u7684\u5FAE\u4EFB\u52A1\u6DFB\u52A0\u5230\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\u6700\u540E\u9762\uFF0C\u6240\u4EE5\u65B0\u6DFB\u52A0\u7684\u5FAE\u4EFB\u52A1\u662F\u4F18\u5148\u4E8E\u4E0B\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u6267\u884C\u7684\u3002</strong></p><h2 id="node-\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">node \u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#node-\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h2><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> fs </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./file.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">9</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">setImmediate</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">8</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">6</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setImmediate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">7</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u7ED3\u679C\u4E3A<code>123456789</code>\u6216<code>234567819</code>\uFF1A \u4E8B\u4EF6\u5FAA\u73AF\u8FC7\u7A0B\u4E3A\uFF1A</p><ol><li>setTimeout\u961F\u5217 =&gt; IO callback\u961F\u5217 =&gt; setImmediate\u961F\u5217 =&gt; setTimeout\u961F\u5217 =&gt; ...</li><li>\u8FC7\u7A0B\u4E2D\u7A7F\u63D2 nextTick \u961F\u5217 =&gt; promise \u961F\u5217</li></ol><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="http://lynnelv.github.io/js-event-loop-browser" target="_blank" rel="noopener noreferrer">\u6DF1\u5165\u7406\u89E3js\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF08\u6D4F\u89C8\u5668\u7BC7\uFF09</a></li><li><a href="http://lynnelv.github.io/js-event-loop-nodejs" target="_blank" rel="noopener noreferrer">\u6DF1\u5165\u7406\u89E3js\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF08Node.js\u7BC7\uFF09</a></li><li><a href="https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/" target="_blank" rel="noopener noreferrer">Node.js\u5B98\u65B9\u6587\u6863</a></li><li><a href="https://weread.qq.com/web/reader/d1b32290718ff65fd1befcck02e32f0021b02e74f10ece8" target="_blank" rel="noopener noreferrer">\u300A\u6DF1\u5165\u6D45\u51FANode.js\u300B</a></li><li><a href="https://zhuanlan.zhihu.com/p/33058983" target="_blank" rel="noopener noreferrer">\u8BE6\u89E3JavaScript\u4E2D\u7684Event Loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF\uFF09\u673A\u5236</a></li><li><a href="https://time.geekbang.org/column/article/132931" target="_blank" rel="noopener noreferrer">\u6D4F\u89C8\u5668\u5DE5\u4F5C\u539F\u7406\u4E0E\u5B9E\u8DF5</a></li><li><a href="https://time.geekbang.org/column/article/227926" target="_blank" rel="noopener noreferrer">\u56FE\u89E3Google V8</a></li><li><a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" target="_blank" rel="noopener noreferrer">how does javascript actually work</a></li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop" target="_blank" rel="noopener noreferrer">MDN Event Loop</a></li></ul>`,49),y=[F];function D(i,A,C,d,g,h){return a(),n("div",null,y)}var v=s(r,[["render",D]]);export{u as __pageData,v as default};
