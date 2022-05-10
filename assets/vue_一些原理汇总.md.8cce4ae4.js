import{_ as n,c as s,o as a,a as t}from"./app.d322b2e6.js";const f='{"title":"\u4E00\u4E9B\u539F\u7406\u6C47\u603B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6574\u4F53\u6D41\u7A0B","slug":"\u6574\u4F53\u6D41\u7A0B"},{"level":2,"title":"diff\u7B97\u6CD5","slug":"diff\u7B97\u6CD5"},{"level":2,"title":"$nextTick\u539F\u7406","slug":"nexttick\u539F\u7406"},{"level":2,"title":"\u6279\u91CF\u66F4\u65B0(queueWatcher)\u539F\u7406","slug":"\u6279\u91CF\u66F4\u65B0-queuewatcher-\u539F\u7406"}],"relativePath":"vue/\u4E00\u4E9B\u539F\u7406\u6C47\u603B.md","lastUpdated":1652195166000}',p={},o=t(`<h1 id="\u4E00\u4E9B\u539F\u7406\u6C47\u603B" tabindex="-1">\u4E00\u4E9B\u539F\u7406\u6C47\u603B <a class="header-anchor" href="#\u4E00\u4E9B\u539F\u7406\u6C47\u603B" aria-hidden="true">#</a></h1><h2 id="\u6574\u4F53\u6D41\u7A0B" tabindex="-1">\u6574\u4F53\u6D41\u7A0B <a class="header-anchor" href="#\u6574\u4F53\u6D41\u7A0B" aria-hidden="true">#</a></h2><ol><li>\u521B\u5EFA<code>Vue</code>\u6784\u9020\u51FD\u6570\uFF1A\u5728\u6784\u9020\u51FD\u6570\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u9759\u6001\u5C5E\u6027\u65B9\u6CD5\uFF0C\u5E76\u5B50\u554A\u539F\u578B\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u65B9\u6CD5\u5C5E\u6027\u3002</li><li>\u5B9E\u4F8B\u5316<code>Vue</code>\u5F62\u6210\u7EC4\u4EF6\u5B9E\u4F8B\uFF1A\u9996\u5148\u4F1A\u5C06<code>Vue.options</code>\u4E0E\u4F20\u5165\u7684\u7EC4\u4EF6\u914D\u7F6E\u8FDB\u884C\u5408\u5E76\uFF0C\u5F97\u5230\u6700\u7EC8\u7684\u7EC4\u4EF6<code>options</code>\u3002</li><li>\u7EE7\u7EED\u5728\u539F\u578B\u4E0A\u6DFB\u52A0\u4E00\u4E9B\u5C5E\u6027\u65B9\u6CD5\uFF0C\u5982\u4E8B\u4EF6\u65B9\u6CD5\uFF0C\u751F\u547D\u5468\u671F\u65B9\u6CD5\u7B49\u7B49\u3002\u4E0E\u6B64\u540C\u65F6\uFF0C\u8FD8\u4F1A\u5C06<code>options</code>\u91CC\u7684<code>data,method,props</code>\u7B49\u7B49\u5168\u90E8\u6DFB\u52A0\u5230<code>vue</code>\u5B9E\u4F8B\u4E0A\uFF0C\u5E76\u5BF9\u4ED6\u4EEC\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406\u3002</li><li>\u968F\u540E\u5F00\u59CB\u5BF9\u6A21\u677F\u8FDB\u884C\u7F16\u8BD1\u3002 <ol><li>\u9996\u5148\u89E3\u6790<code>template</code>\u5B57\u7B26\u4E32\uFF0C\u5F62\u6210<code>ast</code>\u6811\u3002</li><li>\u5176\u6B21\u5BF9<code>ast</code>\u8FDB\u884C\u4F18\u5316\uFF0C\u5C06\u4E00\u4E9B\u9759\u6001\u8282\u70B9\u505A\u6807\u8BB0\u3002</li><li><code>ast</code>\u751F\u6210\u65B0\u7684\u4EE3\u7801\uFF0C\u8FD9\u4E9B\u4EE3\u7801\u6267\u884C\u540E\u53EF\u4EE5\u751F\u6210<code>Vnode</code>\u3002</li></ol></li><li>\u5B9E\u4F8B\u5316<code>renderWatcher</code>\uFF0C\u5F00\u59CB\u66F4\u65B0\uFF1A <ol><li>\u9996\u5148\u6267\u884C\u751F\u6210\u7684\u4EE3\u7801\uFF0C\u5F97\u5230<code>vnode</code>\u3002</li><li>\u7136\u540E\u5C06<code>vnode</code>\u4E0E\u8001\u7684<code>vm._vnode</code>\u8FDB\u884C<code>diff</code>\u3002</li><li>\u6700\u540E\u6839\u636E<code>diff</code>\u7ED3\u679C\u8FDB\u884C\u589E\u5220\u8282\u70B9\u3001\u66F4\u65B0\u5C5E\u6027\u7B49\u64CD\u4F5C\u3002</li></ol></li></ol><h2 id="diff\u7B97\u6CD5" tabindex="-1">diff\u7B97\u6CD5 <a class="header-anchor" href="#diff\u7B97\u6CD5" aria-hidden="true">#</a></h2><p><code>diff</code>\u7B97\u6CD5\u5904\u4E8E<code>patch</code>\u9636\u6BB5\uFF0C\u6B64\u65F6\u5DF2\u7ECF\u751F\u6210\u4E86\u65B0\u7684<code>Vnode</code>\u3002\u5982\u679C\u65B0\u8001<code>Vnode</code>\u5904\u4E8E\u540C\u5C42\u7EA7\uFF0C\u5E76\u4E14<code>Vnode</code>\u90FD\u5B58\u5728\uFF0C\u90A3\u4E48\u9700\u8981\u5C06\u65B0\u8001<code>Vnode</code>\u8FDB\u884C\u5BF9\u6BD4\u3002\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p><ul><li><p>\u65B0\u8282\u70B9\u7B2C\u4E00\u4E2A\u8282\u70B9 vs \u8001\u8282\u70B9\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF1A</p><ul><li>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u76F8\u540C\uFF0C\u8C03\u7528<code>patchVnode</code>\u9012\u5F52\u66F4\u65B0\u3002\u65B0\u8001\u8282\u70B9<code>index</code>\u79FB\u52A8\uFF08\u540E\u7EED\u4E5F\u4F1A\u79FB\u52A8\uFF09\u3002</li></ul></li><li><p>\u65B0\u8282\u70B9\u6700\u540E\u4E00\u4E2A\u8282\u70B9 vs \u8001\u8282\u70B9\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF1A</p><ul><li>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u76F8\u540C\uFF0C\u8C03\u7528<code>patchVnode</code>\u9012\u5F52\u66F4\u65B0\u3002</li></ul></li><li><p>\u65B0\u8282\u70B9\u6700\u540E\u4E00\u4E2A\u8282\u70B9 vs \u8001\u8282\u70B9\u7B2C\u4E00\u4E2A\u8282\u70B9\uFF1A</p><ul><li>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u76F8\u540C\uFF0C\u8C03\u7528<code>patchVnode</code>\u9012\u5F52\u66F4\u65B0\u3002\u5E76\u4E14\u5C06\u8001<code>Vnode</code>\u5BF9\u5E94\u7684\u771F\u5B9E\u8282\u70B9\u63D2\u5165\u5230\u6700\u540E\u4E00\u4E2A\u65B0\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u4E4B\u524D\u3002</li></ul></li><li><p>\u65B0\u8282\u70B9\u7B2C\u4E00\u4E2A\u8282\u70B9 vs \u8001\u8282\u70B9\u6700\u540E\u4E00\u4E2A\u8282\u70B9\uFF1A</p><ul><li>\u5982\u679C\u8282\u70B9\u7C7B\u578B\u76F8\u540C\uFF0C\u8C03\u7528<code>patchVnode</code>\u9012\u5F52\u66F4\u65B0\u3002\u5E76\u4E14\u5C06\u8001<code>Vnode</code>\u5BF9\u5E94\u7684\u771F\u5B9E\u8282\u70B9\u63D2\u5165\u5230\u7B2C\u4E00\u4E2A\u8001\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u5144\u5F1F\u8282\u70B9\u4E4B\u524D\u3002</li></ul></li><li><p>\u5982\u679C\u4EE5\u4E0A\u90FD\u4E0D\u7B26\u5408\uFF1A</p><ul><li><p>\u5C06\u8001\u8282\u70B9\u7684<code>key</code>\u4E0E\u8282\u70B9\u7684<code>index</code>\u5F62\u6210\u952E\u503C\u5BF9\u5F62\u5F0F<code>{ key: index }</code>\u3002</p></li><li><p>\u901A\u8FC7\u65B0\u8282\u70B9\u7684<code>key</code>\u53BB\u67E5\u627E\u662F\u5426\u5B58\u5728\u5BF9\u5E94\u7684\u8001\u8282\u70B9\uFF1A</p><ul><li>\u5982\u679C\u5B58\u5728\uFF0C\u4E14\u7C7B\u578B\u76F8\u540C\uFF0C\u5C06\u5BF9\u5E94\u7684\u8001\u8282\u70B9\uFF08\u771F\u5B9E\u8282\u70B9\uFF09\u63D2\u5165\u5230\u7B2C\u4E00\u4E2A\u8001\u8282\u70B9\u4E4B\u524D\u3002</li><li>\u5426\u5219\u76F4\u63A5\u521B\u5EFA\u65B0\u7684\u771F\u5B9E\u8282\u70B9\u3002</li></ul></li><li><p>\u6700\u540E\u65B0\u8282\u70B9<code>index</code>\u5411\u540E\u79FB\u52A8\u4E00\u6B65\u3002</p></li></ul></li><li><p>\u5BF9\u6BD4\u5B8C\u6210\u540E\uFF0C\u5982\u679C\u8001\u8282\u70B9\u8FD8\u6709\u5269\u4F59\uFF0C\u5220\u9664\u5BF9\u5E94\u7684\u771F\u5B9E\u8282\u70B9\u3002\u5982\u679C\u65B0\u8282\u70B9\u8FD8\u6709\u6CA1\u6709\u590D\u7528\u7684\uFF0C\u521B\u5EFA\u65B0\u7684\u771F\u5B9E\u8282\u70B9\u3002</p></li></ul><p><code>Vnode</code>\u4E4B\u6240\u4EE5\u63D0\u5347\u6027\u80FD\uFF0C\u662F\u56E0\u4E3A\u5B83\u7684\u8BA1\u7B97\u76F8\u8F83\u4E8E\u76F4\u63A5\u5BF9<code>DOM</code>\u7684\u64CD\u4F5C\u7684\u5F00\u9500\u8981\u5C0F\u5F97\u591A\uFF1A</p><div class="language-javascript"><pre><code>\u4E0D\u4F7F\u7528\u865A\u62DF<span class="token constant">DOM</span>\u7684\u5F00\u9500 <span class="token operator">=</span> \u6240\u6709\u771F\u5B9E\u8282\u70B9\u7684\u64CD\u4F5C
\u4F7F\u7528\u865A\u62DF<span class="token constant">DOM</span>\u7684\u5F00\u9500 <span class="token operator">=</span> Vnode\u7684\u521B\u5EFA <span class="token operator">+</span> diff\u5F00\u9500 <span class="token operator">+</span> \u5FC5\u8981\u7684\u771F\u5B9E\u8282\u70B9\u64CD\u4F5C
</code></pre></div><h2 id="nexttick\u539F\u7406" tabindex="-1">$nextTick\u539F\u7406 <a class="header-anchor" href="#nexttick\u539F\u7406" aria-hidden="true">#</a></h2><p><code>$nextTick</code>\u539F\u7406\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u5F53\u524D\u7684<code>callback</code>\u6536\u96C6\u8D77\u6765\uFF0C\u7136\u540E\u5229\u7528\u5FAE\u4EFB\u52A1/\u5B8F\u4EFB\u52A1\u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u65F6\u6267\u884C\u3002</p><div class="language-javascript"><pre><code><span class="token comment">// timerFunc \u5176\u5B9E\u662F \u5FAE\u4EFB\u52A1 or \u5B8F\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u505A\u4E86\u517C\u5BB9\u5904\u7406</span>
<span class="token comment">// Promise =\u300B MutationObserver =\u300B setImmediate =\u300B setTimeout</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function-variable function">timerFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u65F6\uFF0C\u6267\u884C\u6240\u6709\u7684 callback</span>
  p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>flushCallbacks<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isIOS<span class="token punctuation">)</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>noop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">nextTick</span> <span class="token punctuation">(</span><span class="token parameter">cb<span class="token operator">?</span><span class="token operator">:</span> Function<span class="token punctuation">,</span> ctx<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> _resolve
  <span class="token comment">// \u6536\u96C6 callback</span>
  callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">handleError</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> ctx<span class="token punctuation">,</span> <span class="token string">&#39;nextTick&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>_resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">_resolve</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5982\u679C\u5DF2\u7ECF\u542F\u52A8\u6267\u884C\uFF0C\u90A3\u4E48\u5C31\u4E0D\u518D\u542F\u52A8\u3002</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pending <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token function">timerFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// $flow-disable-line</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> Promise <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      _resolve <span class="token operator">=</span> resolve
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6279\u91CF\u66F4\u65B0-queuewatcher-\u539F\u7406" tabindex="-1">\u6279\u91CF\u66F4\u65B0(queueWatcher)\u539F\u7406 <a class="header-anchor" href="#\u6279\u91CF\u66F4\u65B0-queuewatcher-\u539F\u7406" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">flushSchedulerQueue</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  currentFlushTimestamp <span class="token operator">=</span> <span class="token function">getNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// \u5F53\u524D\u5DF2\u7ECF\u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E86</span>
  flushing <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">let</span> watcher<span class="token punctuation">,</span> id

  <span class="token comment">// 1. \u7236\u7EC4\u4EF6 \u4F18\u5148\u4E8E \u5B50\u7EC4\u4EF6</span>
  <span class="token comment">// 2. $watch \u4F18\u5148\u4E8E renderWatcher</span>
  <span class="token comment">// 3. \u5982\u679C\u5B50\u7EC4\u4EF6\u88AB\u9500\u6BC1\u4E86\uFF0C\u5B83\u7684watcher\u4F1A\u88AB\u8DF3\u8FC7</span>
  queue<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>id <span class="token operator">-</span> b<span class="token punctuation">.</span>id<span class="token punctuation">)</span>

  <span class="token comment">// \u904D\u5386\u6267\u884C</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    watcher <span class="token operator">=</span> queue<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>watcher<span class="token punctuation">.</span>before<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token comment">// \u6267\u884C watcher</span>
    watcher<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">queueWatcher</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">watcher</span><span class="token operator">:</span> Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> watcher<span class="token punctuation">.</span>id
  <span class="token comment">// \u5982\u679C watcher \u5DF2\u7ECF\u5B58\u5728\uFF0C\u90A3\u4E48\u4E0D\u518D\u6DFB\u52A0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    has<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token comment">// \u5982\u679C\u8FD8\u672A\u542F\u52A8\u6267\u884C\uFF0C\u76F4\u63A5\u8FFD\u52A0 watcher</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flushing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\uFF0C\u6B64\u65F6watcher\u6B63\u5728\u6267\u884C\u3002</span>
      <span class="token comment">// \u5982\u679C\u8FC7\u4E86\u8FD9\u4E2Aid\u5E94\u8BE5\u65E9\u5C31\u6267\u884C\uFF0C\u4F46\u662F\u9519\u8FC7\u4E86\uFF0C</span>
      <span class="token comment">// \u6B64\u65F6\u4F1A\u901A\u8FC7 while \u5FAA\u73AF\u76F8\u5F53\u4E8E\u63D2\u961F\uFF0C\u5C06\u5B83\u7F6E\u4E8E\u6700\u524D\u9762\u4E86\u3002</span>
      <span class="token comment">// \u4E0B\u4E00\u4E2A\u5C31\u4F1A\u6267\u884C\u5B83</span>
      <span class="token keyword">let</span> i <span class="token operator">=</span> queue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> index <span class="token operator">&amp;&amp;</span> queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">&gt;</span> watcher<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i<span class="token operator">--</span>
      <span class="token punctuation">}</span>
      queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> watcher<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// \u5982\u679C\u6CA1\u6709\u5F00\u59CB\u6267\u884C\uFF0C\u90A3\u4E48\u542F\u52A8\u6267\u884C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>waiting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      waiting <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token function">nextTick</span><span class="token punctuation">(</span>flushSchedulerQueue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6279\u91CF\u66F4\u65B0\u7684\u5B9E\u8D28\u4E0E<code>$nextTick</code>\u4E00\u81F4\uFF0C\u9996\u5148\u6536\u96C6<code>watchers</code>\uFF0C\u7136\u540E\u5728\u4E0B\u4E00\u8F6E\u4E8B\u4EF6\u5FAA\u73AF\u65F6\u6279\u91CF<code>run</code>\u3002</p>`,14),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{f as __pageData,m as default};
