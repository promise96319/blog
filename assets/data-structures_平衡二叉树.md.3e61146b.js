import{_ as n,c as a,o as s,a as t}from"./app.d322b2e6.js";const h='{"title":"\u5E73\u8861\u4E8C\u53C9\u6811\uFF08AVL\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB"},{"level":2,"title":"\u7ED3\u70B9\u4E3A\u5DE6\u5DE6","slug":"\u7ED3\u70B9\u4E3A\u5DE6\u5DE6"},{"level":2,"title":"\u7ED3\u70B9\u4E3A\u5DE6\u53F3","slug":"\u7ED3\u70B9\u4E3A\u5DE6\u53F3"},{"level":2,"title":"\u7ED3\u70B9\u4E3A\u53F3\u5DE6","slug":"\u7ED3\u70B9\u4E3A\u53F3\u5DE6"},{"level":2,"title":"\u7ED3\u70B9\u4E3A\u53F3\u53F3","slug":"\u7ED3\u70B9\u4E3A\u53F3\u53F3"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"data-structures/\u5E73\u8861\u4E8C\u53C9\u6811.md","lastUpdated":1652195166000}',p={},e=t(`<h1 id="\u5E73\u8861\u4E8C\u53C9\u6811\uFF08avl\uFF09" tabindex="-1">\u5E73\u8861\u4E8C\u53C9\u6811\uFF08AVL\uFF09 <a class="header-anchor" href="#\u5E73\u8861\u4E8C\u53C9\u6811\uFF08avl\uFF09" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>\u4E8C\u53C9\u67E5\u627E\u6811\u867D\u7136\u80FD\u591F\u8FDB\u884C\u5FEB\u901F\u67E5\u627E\uFF0C\u4F46\u662F\u67E5\u627E\u901F\u5EA6\u662F\u4E0D\u7A33\u5B9A\u7684\uFF0C\u5728\u6700\u574F\u60C5\u51B5\u4E0B\uFF0C\u4E8C\u53C9\u6811\u7684\u67E5\u627E\u76F8\u5F53\u4E8E\u5355\u5411\u94FE\u8868\u67E5\u627E\u3002</p><p>\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u6B64\u65F6\u5C31\u9700\u8981\u4FDD\u8BC1\u4E8C\u53C9\u6811\u7684\u5C42\u6570\u5C3D\u53EF\u80FD\u7684\u5C11\uFF0C\u53F6\u5B50\u7ED3\u70B9\u4E0E\u6839\u7ED3\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\u5C3D\u53EF\u80FD\u5E73\u5747\uFF0C\u8FD9\u5C31\u6D89\u53CA\u4E00\u4E2A\u6982\u5FF5 -- <strong>\u5E73\u8861\u56E0\u5B50</strong>\uFF08\u5DE6\u5B50\u6811\u548C\u53F3\u5B50\u6811\u7684\u9AD8\u5EA6\u5DEE\u503C\uFF09\u3002\u5E73\u8861\u4E8C\u53C9\u6811\u5728\u63D2\u5165\u7ED3\u70B9\u65F6\uFF0C\u4F1A\u5224\u65AD\u5E73\u8861\u56E0\u5B50\u662F\u5426\u7B26\u5408\u8981\u6C42\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\uFF0C\u5219\u4F1A\u8FDB\u884C\u76F8\u5E94\u5904\u7406\uFF08\u65CB\u8F6C\uFF09\uFF0C\u4FDD\u8BC1\u5DE6\u53F3\u5B50\u6811\u9AD8\u5EA6\u5E73\u8861\u3002\u4E0B\u9762\u5C06\u4ECB\u7ECD\u4E00\u4E0B\u56DB\u79CD\u65CB\u8F6C\u5E73\u8861\u7684\u65B9\u6CD5\u3002</p><h2 id="\u7ED3\u70B9\u4E3A\u5DE6\u5DE6" tabindex="-1">\u7ED3\u70B9\u4E3A\u5DE6\u5DE6 <a class="header-anchor" href="#\u7ED3\u70B9\u4E3A\u5DE6\u5DE6" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code>  <span class="token function">rotateLeftLeft</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u65AD\u5F00\u5DE6\u7ED3\u70B9\u4E0E\u7236\u7ED3\u70B9\u7684\u8054\u7CFB</span>
    <span class="token keyword">const</span> leftNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. \u5C06\u5DE6\u7ED3\u70B9\u4F5C\u4E3A\u63A5\u4E0B\u6765\u7684\u7236\u7ED3\u70B9</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>rootNode <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// If root node is root then make left node to be a new root.</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> leftNode<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 3. \u5982\u679C\u5DE6\u7ED3\u70B9\u6709\u53F3\u7ED3\u70B9\uFF0C\u90A3\u4E48\u5C06\u53F3\u7ED3\u70B9\u8BBE\u7F6E\u4E3A\u7236\u7ED3\u70B9\u7684\u5DE6\u7ED3\u70B9\uFF08\u56E0\u4E3A\u53F3\u7ED3\u70B9\u6BD4\u7236\u7ED3\u70B9\u5C0F\uFF09</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 4. \u5C06\u7236\u7ED3\u70B9\u8BBE\u7F6E\u4E3A\u5DE6\u7ED3\u70B9\u7684\u53F3\u7ED3\u70B9</span>
    leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7ED3\u70B9\u4E3A\u5DE6\u53F3" tabindex="-1">\u7ED3\u70B9\u4E3A\u5DE6\u53F3 <a class="header-anchor" href="#\u7ED3\u70B9\u4E3A\u5DE6\u53F3" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code>  <span class="token function">rotateLeftRight</span><span class="token punctuation">(</span><span class="token parameter">rootNode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. \u7236\u7ED3\u70B9\u548C\u5B50\u7ED3\u70B9\u65AD\u5F00\u8054\u7CFB</span>
    <span class="token keyword">const</span> leftNode <span class="token operator">=</span> rootNode<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 2. \u5C06\u5DE6\u7ED3\u70B9\u4E0E\u5176\u53F3\u7ED3\u70B9\u65AD\u5F00\u8054\u7CFB</span>
    <span class="token keyword">const</span> leftRightNode <span class="token operator">=</span> leftNode<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
    leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 3. \u5982\u679C\u5DE6\u53F3\u7ED3\u70B9\u6709\u5DE6\u7ED3\u70B9\uFF0C\u5C06\u5176\u6DFB\u52A0\u5230\u5DE6\u7ED3\u70B9\u7684\u53F3\u7ED3\u70B9\u4E0A</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>leftRightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      leftNode<span class="token punctuation">.</span><span class="token function">setRight</span><span class="token punctuation">(</span>leftRightNode<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
      leftRightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 4. \u5C06\u5DE6\u53F3\u7ED3\u70B9\u8BBE\u4E3A\u7236\u7ED3\u70B9\u7684\u5DE6\u7ED3\u70B9</span>
    rootNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftRightNode<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 5. \u5C06\u5DE6\u7ED3\u70B9\u8BBE\u7F6E\u4E3A\u5DE6\u53F3\u7ED3\u70B9\u7684\u5DE6\u7ED3\u70B9</span>
    leftRightNode<span class="token punctuation">.</span><span class="token function">setLeft</span><span class="token punctuation">(</span>leftNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 6. \u4EE5\u4E0A\u6B65\u9AA4\u5B9E\u8D28\u4E0A\u5C06\u7ED3\u70B9\u8F6C\u6362\u6210\u4E86\u5DE6\u5DE6\u7684\u60C5\u51B5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rotateLeftLeft</span><span class="token punctuation">(</span>rootNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7ED3\u70B9\u4E3A\u53F3\u5DE6" tabindex="-1">\u7ED3\u70B9\u4E3A\u53F3\u5DE6 <a class="header-anchor" href="#\u7ED3\u70B9\u4E3A\u53F3\u5DE6" aria-hidden="true">#</a></h2><p>\u4E0E\u8282\u70B9\u4E3A\u5DE6\u53F3\u7684\u65F6\u5019\uFF0C\u60C5\u51B5\u5BF9\u79F0\u3002</p><h2 id="\u7ED3\u70B9\u4E3A\u53F3\u53F3" tabindex="-1">\u7ED3\u70B9\u4E3A\u53F3\u53F3 <a class="header-anchor" href="#\u7ED3\u70B9\u4E3A\u53F3\u53F3" aria-hidden="true">#</a></h2><p>\u4E0E\u8282\u70B9\u4E3A\u5DE6\u5DE6\u7684\u65F6\u5019\uFF0C\u60C5\u51B5\u5BF9\u79F0\u3002</p><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/qa7OjMzGN0-Nd-ftZ977rA" target="_blank" rel="noopener noreferrer">\u4EC0\u4E48\u662FAVL\u6811\uFF1F</a></li><li><a href="https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree" target="_blank" rel="noopener noreferrer">avl tree</a></li></ul>`,14),o=[e];function c(l,u,i,k,r,d){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
