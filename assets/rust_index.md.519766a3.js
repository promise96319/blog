import{_ as s,c as a,o as e,a as n}from"./app.da177e40.js";const u=JSON.parse('{"title":"Rust","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"relativePath":"rust/index.md","lastUpdated":1677323371000}'),t={name:"rust/index.md"},l=n(`<h1 id="rust" tabindex="-1">Rust <a class="header-anchor" href="#rust" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><p>安装命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--proto</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">=https</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tlsv1.3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://sh.rustup.rs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-sSf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sh</span></span>
<span class="line"></span></code></pre></div><p>安装问题：</p><ul><li>无法使用 TLSv1.3： <a href="https://learnings.bolmaster2.com/posts/curl-openssl-tlsv1.3-on-macos.html" target="_blank" rel="noreferrer">Curl with TLSv1.3 and openSSL on macOS</a></li><li><code>.sh</code> 文件</li></ul>`,6),o=[l];function p(r,c,i,d,h,C){return e(),a("div",null,o)}const D=s(t,[["render",p]]);export{u as __pageData,D as default};
