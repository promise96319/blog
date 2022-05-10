import{_ as n,c as s,o as a,a as t}from"./app.d322b2e6.js";const w='{"title":"watch \u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u5355\u4F7F\u7528","slug":"\u7B80\u5355\u4F7F\u7528"},{"level":2,"title":"compiler.watch","slug":"compiler-watch"},{"level":2,"title":"Watching\u7C7B","slug":"watching\u7C7B"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"webpack/watch\u5B9E\u73B0.md","lastUpdated":1652199210000}',p={},o=t(`<h1 id="watch-\u5B9E\u73B0" tabindex="-1">watch \u5B9E\u73B0 <a class="header-anchor" href="#watch-\u5B9E\u73B0" aria-hidden="true">#</a></h1><p><a href="https://webpack.docschina.org/configuration/watch/" target="_blank" rel="noopener noreferrer">webpack watch \u914D\u7F6E</a></p><h2 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1">\u7B80\u5355\u4F7F\u7528 <a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// webpack.config.js \u4E2D\u914D\u7F6E</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u83B7\u53D6\u76F4\u63A5\u8FD0\u884C\u547D\u4EE4</span>
webpack watch
</code></pre></div><h2 id="compiler-watch" tabindex="-1">compiler.watch <a class="header-anchor" href="#compiler-watch" aria-hidden="true">#</a></h2><p>\u5F53<code>watch</code>\u4E3A<code>true</code>\u65F6\uFF0C\u6267\u884C\u7684\u662F<code>compiler</code>\u7684<code>watch</code>\u65B9\u6CD5\uFF0C\u800C\u4E0D\u662F<code>compiler.run</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  compiler<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>watchOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token parameter">err2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">callback</span><span class="token punctuation">(</span>err <span class="token operator">||</span> err2<span class="token punctuation">,</span> stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>compiler</code>\u7684<code>watch</code>\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">watch</span><span class="token punctuation">(</span><span class="token parameter">watchOptions<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>running<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ConcurrentCompilationError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>running <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>watchMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5B9E\u4F8B\u5316 Watching</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>watching <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Watching</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> watchOptions<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>watching<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u6838\u5FC3\u4EE3\u7801\u4E3A<code>new Watching()</code>\u3002</p><h2 id="watching\u7C7B" tabindex="-1">Watching\u7C7B <a class="header-anchor" href="#watching\u7C7B" aria-hidden="true">#</a></h2><p><code>Watching</code>\u7C7B\u5B9E\u4F8B\u5316\u65F6\uFF0C\u4F1A\u6267\u884C<code>_invalidate</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">class</span> <span class="token class-name">Watching</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">compiler<span class="token punctuation">,</span> watchOptions<span class="token punctuation">,</span> handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_initial<span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>_invalidate</code>\u53C8\u4F1A\u6267\u884C<code>_go</code>\u65B9\u6CD5\uFF0C\u7CBE\u7B80\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">_go</span><span class="token punctuation">(</span><span class="token parameter">fileTimeInfoEntries<span class="token punctuation">,</span> contextTimeInfoEntries<span class="token punctuation">,</span> changedFiles<span class="token punctuation">,</span> removedFiles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>watchRun<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token function-variable function">onCompiled</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">shouldEmit</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>compilation<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> compilation<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span><span class="token function">emitAssets</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span><span class="token function">emitRecords</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

              <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> compilation<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>onCompiled<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u51FA\u8FD9\u91CC\u7684\u4EE3\u7801\u4E0E<code>compiler.run</code>\u6267\u884C\u7684\u8FC7\u7A0B\u975E\u5E38\u76F8\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F\u6700\u540E\u56DE\u8C03\u6267\u884C\u7684\u662F<code>_done</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">_done</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> compilation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>stats<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">storeBuildDependencies</span><span class="token punctuation">(</span>
      compilation<span class="token punctuation">.</span>buildDependencies<span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>closed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>
              compilation<span class="token punctuation">.</span>fileDependencies<span class="token punctuation">,</span>
              compilation<span class="token punctuation">.</span>contextDependencies<span class="token punctuation">,</span>
              compilation<span class="token punctuation">.</span>missingDependencies
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> cb <span class="token keyword">of</span> cbs<span class="token punctuation">)</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">afterDone</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u4F1A\u5728<code>hooks.done</code>\u4E4B\u540E\uFF0C<code>hooks.afterDone</code>\u4E4B\u524D\u6267\u884C<code>this.watch</code>\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u6536\u96C6\u5230\u7684<code>dependencies</code>\u3002\u6B64\u65F6\u4EE3\u7801\u5DF2\u7ECF\u5B8C\u6210\u7F16\u8BD1\uFF0C\u4E14\u5DF2\u7ECF\u8F93\u51FA\u6210\u6587\u4EF6\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5F00\u59CB\u76D1\u542C\u8FD9\u4E9B\u6587\u4EF6\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">watch</span><span class="token punctuation">(</span><span class="token parameter">files<span class="token punctuation">,</span> dirs<span class="token punctuation">,</span> missing</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>pausedWatcher <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>watcher <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>compiler<span class="token punctuation">.</span>watchFileSystem<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>
    files<span class="token punctuation">,</span>
    dirs<span class="token punctuation">,</span>
    missing<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastWatcherStartTime<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>watchOptions<span class="token punctuation">,</span>
    <span class="token punctuation">(</span>
      <span class="token parameter">err<span class="token punctuation">,</span>
      fileTimeInfoEntries<span class="token punctuation">,</span>
      contextTimeInfoEntries<span class="token punctuation">,</span>
      changedFiles<span class="token punctuation">,</span>
      removedFiles</span>
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">fileName<span class="token punctuation">,</span> changeTime</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7<code>watchFileSystem.watch</code>\u65B9\u6CD5\u76D1\u542C<code>dependencies</code>\u6587\u4EF6\u53D8\u5316\uFF0C\u5982\u679C\u53D1\u751F\u53D8\u5316\uFF0C\u4F1A\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u9996\u5148\u6267\u884C\u53D8\u52A8\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570</span>
<span class="token punctuation">(</span><span class="token parameter">fileName<span class="token punctuation">,</span> changeTime</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u5176\u6B21\u6267\u884C\u91CD\u65B0\u6253\u5305\u7684\u56DE\u8C03\u51FD\u6570 this._invalidate</span>
<span class="token punctuation">(</span>
<span class="token parameter">err<span class="token punctuation">,</span>
 fileTimeInfoEntries<span class="token punctuation">,</span>
 contextTimeInfoEntries<span class="token punctuation">,</span>
 changedFiles<span class="token punctuation">,</span>
 removedFiles</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_invalidate</span><span class="token punctuation">(</span>
    fileTimeInfoEntries<span class="token punctuation">,</span>
    contextTimeInfoEntries<span class="token punctuation">,</span>
    changedFiles<span class="token punctuation">,</span>
    removedFiles
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_onChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u5F53\u6587\u4EF6\u6539\u53D8\u65F6\uFF0C\u91CD\u65B0\u8FDB\u884C\u6253\u5305\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>watch</code>\u7684\u5B9E\u73B0\u7684\u6838\u5FC3\u662F\u5728<code>hooks.done</code>\u4E4B\u540E\uFF0C\u4E5F\u5C31\u662F\u7F16\u8BD1\u540E\u7684\u4EE3\u7801\u751F\u6210\u6587\u4EF6\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u76D1\u542C\u6536\u96C6\u5230\u7684<code>dependencies</code>\u5BF9\u5E94\u7684\u6587\u4EF6\u3002\u5F53\u6587\u4EF6\u6539\u53D8\u65F6\uFF0C\u89E6\u53D1\u56DE\u8C03\uFF0C\u518D\u6B21\u8FDB\u884C<code>build</code>\u3002</p>`,24),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{w as __pageData,m as default};
