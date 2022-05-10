import{_ as n,c as s,o as a,a as p}from"./app.d322b2e6.js";const f='{"title":"\u6D41\u7A0B\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5165\u53E3","slug":"\u5165\u53E3"},{"level":2,"title":"run\u65B9\u6CD5","slug":"run\u65B9\u6CD5"},{"level":2,"title":"compile\u65B9\u6CD5","slug":"compile\u65B9\u6CD5"},{"level":2,"title":"onCompiled\u65B9\u6CD5","slug":"oncompiled\u65B9\u6CD5"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"webpack/\u6D41\u7A0B\u5F00\u59CB.md","lastUpdated":1652199210000}',t={},o=p(`<h1 id="\u6D41\u7A0B\u5F00\u59CB" tabindex="-1">\u6D41\u7A0B\u5F00\u59CB <a class="header-anchor" href="#\u6D41\u7A0B\u5F00\u59CB" aria-hidden="true">#</a></h1><h2 id="\u5165\u53E3" tabindex="-1">\u5165\u53E3 <a class="header-anchor" href="#\u5165\u53E3" aria-hidden="true">#</a></h2><p><code>webpack</code>\u8FDB\u884C\u6253\u5305\u65F6\uFF0C\u4F1A\u6839\u636E\u547D\u4EE4\u627E\u5230\u6253\u5305\u7684\u771F\u5B9E\u5165\u53E3\uFF1A<code>node_modules/webpack/lib/webpack.js</code>\u6587\u4EF6\u4E0B\u7684<code>webpack</code>\u51FD\u6570\uFF0C\u5176\u4E3B\u8981\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">webpack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    compiler <span class="token operator">=</span> <span class="token function">createCompiler</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchOptions <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> compiler<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>options</code>\u662F<code>webpack</code>\u914D\u7F6E\u6587\u4EF6\u548C\u547D\u4EE4\u53C2\u6570\u5408\u5E76\u540E\u7684\u914D\u7F6E\u3002<code>create</code>\u65B9\u6CD5\u901A\u8FC7<code>createCompiler</code>\u521B\u5EFA\u4E00\u4E2A<code>Compiler</code>\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u7BA1\u7406\u6574\u4E2A\u6253\u5305\u8FC7\u7A0B\u7684\u4E3B\u6D41\u7A0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">createCompiler</span> <span class="token operator">=</span> <span class="token parameter">rawOptions</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 1. \u521B\u5EFA Compiler \u5BF9\u8C61</span>
  <span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Compiler</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  compiler<span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span>
  <span class="token comment">// 2. \u7528\u6237\u5728 webpack \u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u63D2\u4EF6\u8FDB\u884C\u5E94\u7528</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> plugin <span class="token keyword">of</span> options<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> plugin <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>compiler<span class="token punctuation">,</span> compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">plugin</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">applyWebpackOptionsDefaults</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">environment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">afterEnvironment</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 3. \u5185\u7F6E\u63D2\u4EF6\u5E94\u7528</span>
  <span class="token keyword">new</span> <span class="token class-name">WebpackOptionsApply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> compiler<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u83B7\u53D6\u4E86<code>Compiler</code>\u5BF9\u8C61\u540E\uFF0C\u5F00\u59CB\u5E94\u7528\u7528\u6237\u81EA\u5B9A\u4E49\u63D2\u4EF6\u548C<code>webpack</code>\u5185\u7F6E\u63D2\u4EF6\u3002\u5E76\u4E14\u6B64\u65F6\u5185\u7F6E\u7684<code>EntryOptionPlugin</code>\u76D1\u542C\u7684<code>entryOptions</code>\u94A9\u5B50\u4F1A\u88AB\u7ACB\u5373\u8C03\u7528\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">new</span> <span class="token class-name">EntryOptionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">;</span>
compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">entryOption</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>context<span class="token punctuation">,</span> options<span class="token punctuation">.</span>entry<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>EntryOptionPlugin</code>\u63D2\u4EF6\u4F1A\u5728\u540E\u7EED\u5904\u7406<code>entry</code>\u65F6\u8D77\u5230\u5173\u952E\u4F5C\u7528\uFF0C\u56E0\u6B64\u9700\u8981\u7559\u610F\u3002</p><h2 id="run\u65B9\u6CD5" tabindex="-1">run\u65B9\u6CD5 <a class="header-anchor" href="#run\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5728\u83B7\u53D6\u5230<code>compiler</code>\u5BF9\u8C61\u540E\uFF0C\u4F1A\u8C03\u7528\u5176<code>run</code>\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u51C6\u786E\u7684\u8C03\u7528\u4F4D\u7F6E\u5728<code>webpack-cli</code>\u5305\u5F53\u4E2D\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> cli <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebpackCLI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cli<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC\u7684<code>cli</code>\u5C31\u662F\u8FD4\u56DE\u7684<code>compiler</code>\u5BF9\u8C61\u3002\u5728<code>webpack/lib/Compiler.js</code>\u4E2D\u627E\u5230<code>run</code>\u65B9\u6CD5\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeRun<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">readRecords</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>onCompiled<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9996\u5148\u4F1A\u6267\u884C<code>beforeRun/run</code>\u94A9\u5B50\uFF0C\u8FD9\u4E9B\u4E0D\u662F\u5F88\u91CD\u8981\uFF0C\u53EF\u4EE5\u6682\u4E14\u5FFD\u7565\u3002\u73B0\u5728\u7740\u91CD\u770B\u4E00\u4E0B<code>compile</code>\u65B9\u6CD5\u3002</p><h2 id="compile\u65B9\u6CD5" tabindex="-1">compile\u65B9\u6CD5 <a class="header-anchor" href="#compile\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>compile</code>\u65B9\u6CD5\u7CBE\u7B80\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">compile</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newCompilationParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>beforeCompile<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> compilation <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newCompilation</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>make<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>finishMake<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          compilation<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            compilation<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>afterCompile<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> compilation<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u6211\u4EEC\u5927\u6982\u53EF\u4EE5\u77E5\u9053\u7F16\u8BD1\u7684\u4E3B\u8981\u6D41\u7A0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token parameter">beforeCompile</span> <span class="token operator">=&gt;</span> <span class="token parameter">compile</span> <span class="token operator">=&gt;</span> <span class="token parameter">make</span> <span class="token operator">=&gt;</span> <span class="token parameter">finishMake</span> <span class="token operator">=&gt;</span> <span class="token parameter">finish</span> <span class="token operator">=&gt;</span> <span class="token parameter">seal</span> <span class="token operator">=&gt;</span> <span class="token parameter">afterCompile</span> <span class="token operator">=&gt;</span> \u6267\u884C\u56DE\u8C03
</code></pre></div><p>\u5176\u4E2D<code>make</code>\u9636\u6BB5\u662F\u7F16\u8BD1\u9636\u6BB5\uFF0C\u5904\u7406\u4F9D\u8D56\u548C\u6A21\u5757\u5173\u7CFB\u4EE5\u53CA\u6A21\u5757\u7684\u7F16\u8BD1\u3002\u800C<code>seal</code>\u9636\u6BB5\u4E3B\u8981\u662F\u5904\u7406<code>module</code>\u548C<code>chunk</code>\u7684\u5173\u7CFB\u3002\u8FD9\u4E24\u4E2A\u9636\u6BB5\u90FD\u6BD4\u8F83\u91CD\u8981\uFF0C\u540E\u9762\u4F1A\u5355\u72EC\u8BB2\u89E3\u3002\u73B0\u5728\u56DE\u5230<code>compile</code>\u65B9\u6CD5\u7684\u7B2C\u4E00\u884C\u4EE3\u7801\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newCompilationParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9E\u4F8B\u5316\u4E24\u4E2A\u53C2\u6570</span>
<span class="token function">newCompilationParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">normalModuleFactory</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createNormalModuleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">contextModuleFactory</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createContextModuleFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> params<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E86<code>normalModuleFactory</code>\u548C<code>contextModuleFactory</code>\u4E24\u4E2A\u5DE5\u5382\u51FD\u6570\u3002\u5176\u4E2D<code>normalModuleFactory</code>\u5904\u7406\u666E\u901A\u6A21\u5757\u7684\u521B\u5EFA\uFF0C\u5982<code>import A from &#39;./a.js&#39;</code>\u3002\u800C<code>contextModuleFactory</code>\u5904\u7406\u5982<code>import &#39;./a.js&#39;</code>\u6A21\u5757\u7684\u521B\u5EFA\u3002</p><p>\u63A5\u4E0B\u6765\u662F\u5B9E\u4F8B\u5316\u4E00\u4E2A<code>compilation</code>\u5BF9\u8C61\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// \u5B9E\u4F8B\u5316 compilation</span>
<span class="token keyword">const</span> compilation <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">newCompilation</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">newCompilation</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> compilation <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createCompilation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  compilation<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  compilation<span class="token punctuation">.</span>records <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>records<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">thisCompilation</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">compilation</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> compilation<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6B64\u65F6\u4F1A\u89E6\u53D1<code>thisCompilation</code>\u548C<code>compilation</code>\u4E24\u4E2A\u94A9\u5B50\uFF0C\u7528\u4E8E\u76D1\u542C\u6253\u5305\u8FC7\u7A0B\u4E2D\u5904\u7406<code>compilation</code>\u7684\u4E8B\u4EF6\u56DE\u8C03\u3002</p><h2 id="oncompiled\u65B9\u6CD5" tabindex="-1">onCompiled\u65B9\u6CD5 <a class="header-anchor" href="#oncompiled\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5F85\u7F16\u8BD1\u5B8C\u6210\u4E4B\u540E\uFF0C\u4F1A\u6267\u884C<code>callback</code>\uFF0C\u5373<code>onCompiled</code>\u65B9\u6CD5\uFF0C\u7CBE\u7B80\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">onCompiled</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitAssets</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emitRecords</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>stats<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">storeBuildDependencies</span><span class="token punctuation">(</span>
          compilation<span class="token punctuation">.</span>buildDependencies<span class="token punctuation">,</span>
          <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">finalCallback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">finalCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">afterDone</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>stats<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8BE5\u65B9\u6CD5\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u901A\u8FC7<code>emitAssets</code>\u65B9\u6CD5\u5C06\u6253\u5305\u540E\u7684<code>chunk</code>\u6B63\u786E\u7684\u8F93\u51FA\u6210\u6587\u4EF6\u5F62\u5F0F\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">emitAssets</span><span class="token punctuation">(</span><span class="token parameter">compilation<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">emitFiles</span> <span class="token operator">=</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>emit<span class="token punctuation">.</span><span class="token function">callAsync</span><span class="token punctuation">(</span>compilation<span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    outputPath <span class="token operator">=</span> compilation<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>outputPath<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">mkdirp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>outputFileSystem<span class="token punctuation">,</span> outputPath<span class="token punctuation">,</span> emitFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6700\u7EC8\u8C03\u7528\u7684\u4E3B\u8981\u94A9\u5B50\u4E3A\uFF1A</p><div class="language-javascript"><pre><code><span class="token parameter">emit</span> <span class="token operator">=&gt;</span> <span class="token parameter">done</span> <span class="token operator">=&gt;</span> afterDone
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p><code>webpack</code>\u6E90\u7801\u4E2D\u6709\u51E0\u4E2A\u6838\u5FC3\u7684\u6982\u5FF5\uFF1A<code>Compiler</code>\u3001<code>Compilation</code>\u548C\u63D2\u4EF6\u3002</p><p><code>Compiler</code>\u5BF9\u8C61\u4E3B\u8981\u7528\u4E8E\u63A7\u5236\u6253\u5305\u8FC7\u7A0B\u7684\u6574\u4E2A\u6D41\u7A0B\uFF0C\u5982\uFF1A</p><ol><li>run =&gt; \u5F00\u59CB\u542F\u52A8\u7F16\u8BD1\u8FC7\u7A0B</li><li>make =&gt; \u8FDB\u884C\u7F16\u8BD1</li><li>seal =&gt; \u7F16\u8BD1\u5B8C\u6210\uFF0C\u5F62\u6210chunk</li><li>emit =&gt; \u8F93\u51FA\u6587\u4EF6</li></ol><p>\u800C<code>Compilation</code>\u5BF9\u8C61\u4EE3\u8868\u5728\u8FD9\u4E2A\u6253\u5305\u8FC7\u7A0B\u4E2D\u7684\u6253\u5305\u4EA7\u7269\uFF0C\u7528\u4E8E\u8BB0\u5F55\u6253\u5305\u8FC7\u7A0B\u4E2D\u7684\u5185\u5BB9\uFF0C\u5982<code>dependencies/modules/chunks</code>\u7B49\u7B49\u3002</p><p>\u57FA\u4E8E\u4E3B\u6253\u5305\u6D41\u7A0B\u548C\u6253\u5305\u4EA7\u7269\u3002\u63D2\u4EF6\u5219\u662F\u76D1\u542C\u6253\u5305\u8FC7\u7A0B\u4E2D\u7684\u67D0\u4E00\u4E2A\u6216\u591A\u4E2A\u8FC7\u7A0B\uFF0C\u7136\u540E\u5BF9<code>compilation</code>\u7B49\u5185\u5BB9\u8FDB\u884C\u52A0\u5DE5\u5904\u7406\uFF0C\u6700\u7EC8\u5F97\u5230\u6253\u5305\u597D\u7684\u5185\u5BB9\u3002</p>`,39),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var h=n(t,[["render",e]]);export{f as __pageData,h as default};
