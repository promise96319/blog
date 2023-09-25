import{_ as a,o as e,c as t,Q as r}from"./chunks/framework.c610f10c.js";const f=JSON.parse('{"title":"布隆过滤器","description":"","frontmatter":{},"headers":[],"relativePath":"data-structures/布隆过滤器.md","filePath":"data-structures/布隆过滤器.md","lastUpdated":1695631559000}'),o={name:"data-structures/布隆过滤器.md"},i=r('<h1 id="布隆过滤器" tabindex="-1">布隆过滤器 <a class="header-anchor" href="#布隆过滤器" aria-label="Permalink to &quot;布隆过滤器&quot;">​</a></h1><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>布隆过滤器的原理是，当一个元素被加入集合时，通过K个散列函数将这个元素映射成一个位数组中的K个点，把它们置为1。检索时，我们只要看看这些点是不是都是1就（大约）知道集合中有没有它了：如果这些点有任何一个0，则被检元素一定不在；如果都是1，则被检元素很可能在。这就是布隆过滤器的基本思想。</p><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><p>相比于其它的数据结构，布隆过滤器在空间和时间方面都有巨大的优势。布隆过滤器存储空间和插入/查询时间都是常数<code>O(k)</code>。</p><p>另外，散列函数相互之间没有关系，方便由硬件并行实现。布隆过滤器不需要存储元素本身，在某些对保密要求非常严格的场合有优势。</p><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><p>随着存入的元素数量增加，误算率随之增加。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8" target="_blank" rel="noreferrer">wikipedia - 布隆过滤器</a></li></ul>',10),s=[i];function d(l,n,c,h,_,p){return e(),t("div",null,s)}const m=a(o,[["render",d]]);export{f as __pageData,m as default};
