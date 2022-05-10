import{_ as a,c as n,o as s,a as t}from"./app.d322b2e6.js";var p="/assets/chrome-source-code.b344ef7b.png";const v='{"title":"\u6E90\u7801\u8C03\u8BD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u62C9\u53D6Vue3\u6E90\u7801","slug":"_1-\u62C9\u53D6vue3\u6E90\u7801"},{"level":2,"title":"2. \u5B89\u88C5\u4F9D\u8D56","slug":"_2-\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"3. \u79FB\u9664 git \u76F8\u5173\u5185\u5BB9","slug":"_3-\u79FB\u9664-git-\u76F8\u5173\u5185\u5BB9"},{"level":2,"title":"4. \u4FEE\u6539\u914D\u7F6E","slug":"_4-\u4FEE\u6539\u914D\u7F6E"},{"level":2,"title":"5. \u7F16\u8BD1","slug":"_5-\u7F16\u8BD1"},{"level":2,"title":"6. \u5F15\u7528\u7F16\u8BD1\u597D\u7684\u4EE3\u7801","slug":"_6-\u5F15\u7528\u7F16\u8BD1\u597D\u7684\u4EE3\u7801"},{"level":2,"title":"7. \u8C03\u8BD5","slug":"_7-\u8C03\u8BD5"}],"relativePath":"vue3/\u6E90\u7801\u8C03\u8BD5.md","lastUpdated":1652199210000}',e={},o=t(`<h1 id="\u6E90\u7801\u8C03\u8BD5" tabindex="-1">\u6E90\u7801\u8C03\u8BD5 <a class="header-anchor" href="#\u6E90\u7801\u8C03\u8BD5" aria-hidden="true">#</a></h1><h2 id="_1-\u62C9\u53D6vue3\u6E90\u7801" tabindex="-1">1. \u62C9\u53D6Vue3\u6E90\u7801 <a class="header-anchor" href="#_1-\u62C9\u53D6vue3\u6E90\u7801" aria-hidden="true">#</a></h2><p><a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">Vue3\u6E90\u7801 github\u5730\u5740</a></p><div class="language-bash"><pre><code><span class="token function">git</span> clone https://github.com/vuejs/vue-next.git
</code></pre></div><h2 id="_2-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">2. \u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#_2-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">yarn</span>
</code></pre></div><h2 id="_3-\u79FB\u9664-git-\u76F8\u5173\u5185\u5BB9" tabindex="-1">3. \u79FB\u9664 git \u76F8\u5173\u5185\u5BB9 <a class="header-anchor" href="#_3-\u79FB\u9664-git-\u76F8\u5173\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u627E\u5230<code>scripts/dev.js</code>\u6587\u4EF6\uFF0C\u6CE8\u91CA<code>git</code>\u76F8\u5173\u4EE3\u7801\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">// const commit = execa.sync(&#39;git&#39;, [&#39;rev-parse&#39;, &#39;HEAD&#39;]).stdout.slice(0, 7)</span>

<span class="token operator">...</span>

<span class="token comment">// \`COMMIT:\${commit}\`,</span>
</code></pre></div><h2 id="_4-\u4FEE\u6539\u914D\u7F6E" tabindex="-1">4. \u4FEE\u6539\u914D\u7F6E <a class="header-anchor" href="#_4-\u4FEE\u6539\u914D\u7F6E" aria-hidden="true">#</a></h2><p>\u4FEE\u6539<code>package.json</code>\u6587\u4EF6\u4E2D\u7684<code>dev</code>\u914D\u7F6E\uFF1A</p><div class="language-javascript"><pre><code><span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/dev.js&quot;</span>
\u6539\u4E3A
<span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/dev.js --sourcemap&quot;</span>
</code></pre></div><h2 id="_5-\u7F16\u8BD1" tabindex="-1">5. \u7F16\u8BD1 <a class="header-anchor" href="#_5-\u7F16\u8BD1" aria-hidden="true">#</a></h2><p>\u8FD0\u884C<code>dev</code>\u547D\u4EE4\uFF1A</p><div class="language-bash"><pre><code><span class="token function">yarn</span> run dev
</code></pre></div><p>\u4F1A\u5728<code>packages/vue/dist</code>\u76EE\u5F55\u4E0B\u751F\u6210\u4E24\u4E2A\u6587\u4EF6\uFF1A</p><div class="language-javascript"><pre><code>vue<span class="token punctuation">.</span>global<span class="token punctuation">.</span>js
vue<span class="token punctuation">.</span>global<span class="token punctuation">.</span>js<span class="token punctuation">.</span>map
</code></pre></div><h2 id="_6-\u5F15\u7528\u7F16\u8BD1\u597D\u7684\u4EE3\u7801" tabindex="-1">6. \u5F15\u7528\u7F16\u8BD1\u597D\u7684\u4EE3\u7801 <a class="header-anchor" href="#_6-\u5F15\u7528\u7F16\u8BD1\u597D\u7684\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u5EFA\u7ACB\u4E00\u4E2A<code>html</code>\u6587\u4EF6\uFF0C\u5F15\u5165\u7F16\u8BD1\u597D\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vue3.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    {{ name }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../packages/vue/dist/vue.global.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>

    <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Silence&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="_7-\u8C03\u8BD5" tabindex="-1">7. \u8C03\u8BD5 <a class="header-anchor" href="#_7-\u8C03\u8BD5" aria-hidden="true">#</a></h2><p>\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u8BE5<code>html</code>\u6587\u4EF6\uFF0C\u5373\u53EF\u5728<code>source</code>\u4E2D\u8C03\u8BD5\u4EE3\u7801\uFF1A</p><p><img src="`+p+'" alt=""></p>',23),c=[o];function l(u,i,r,k,d,g){return s(),n("div",null,c)}var _=a(e,[["render",l]]);export{v as __pageData,_ as default};
