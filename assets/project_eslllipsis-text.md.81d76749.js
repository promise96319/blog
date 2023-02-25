import{_ as s,c as l,o as n,a}from"./app.da177e40.js";const F=JSON.parse('{"title":"Ellipsis 组件开发心得","description":"","frontmatter":{},"headers":[],"relativePath":"project/eslllipsis-text.md","lastUpdated":1677323371000}'),o={name:"project/eslllipsis-text.md"},p=a(`<h1 id="ellipsis-组件开发心得" tabindex="-1">Ellipsis 组件开发心得 <a class="header-anchor" href="#ellipsis-组件开发心得" aria-hidden="true">#</a></h1><p><strong>目标</strong>：多行文本省略，需要支持末尾尾随<code>展开</code>和<code>收起</code>按钮。</p><p><strong>思路</strong>：分为两种情况，一种情况为普通文本省略，可以通过 <code>css</code> 属性来设置。另一种情况是需要支持末尾<code>展开</code>按钮，需要计算文本宽度是否超出已有宽度。</p><p><strong>实现</strong>：</p><ul><li>普通文本省略：</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 单行省略</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">single-line-ellipsis</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">// 多行省略</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">multiple-line-ellipsis</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> --webkit-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   --webkit-line-clamp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> // 行数</span></span>
<span class="line"><span style="color:#A6ACCD;">   --webkit-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><p>文本尾随<code>展开</code>按钮省略：</p><ol><li>首先，需要计算文本是否超过了宽度<code>width</code>。 <ol><li>计算文本渲染的高度：通过一个“隐藏”的 span 标签 <strong>自由换行</strong> 加载文本，加载完成后得到文本高度。</li><li>计算单行文本渲染高度。通过一个“隐藏”的 span 标签 <strong>不换行</strong> 加载文本，加载完成后得到文本高度。</li><li>通过用户提供的行数<code>rows</code>判断 <code>行数 * 单行高度 是否大于 多行高度 </code>，如果大于则说明 <strong>文本超出</strong>。</li></ol></li><li>文本超出后，切割文本。 <ol><li>计算文本总长度，如果非字符串和数字，当做一个字符，记录长度为1。</li><li>通过二分法切割文本。</li><li>将切割后的文本通过步骤 1 进行渲染。看是否满足要求。</li></ol></li><li>响应式处理。 <ol><li>监听文本变化，当文本或宽度等发生变化时，判断是否需要重新计算省略内容。</li></ol></li></ol></li></ul><p><strong>注意点</strong>：</p><ul><li>获取元素高度时，通过<code>offsetHeight</code>获取的高度为<code>height + padding + border</code>，并且为整数。因此在行高不为整数时，会出现计算上的一些误差。</li></ul>`,9),e=[p];function t(c,i,r,D,C,d){return n(),l("div",null,e)}const A=s(o,[["render",t]]);export{F as __pageData,A as default};
