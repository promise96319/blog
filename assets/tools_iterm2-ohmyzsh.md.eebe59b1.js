import{_ as s,c as a,o as e,a as n}from"./app.6d355226.js";const u=JSON.parse('{"title":"Mac\u7EC8\u7AEF\uFF1Aiterm2 + oh my zsh","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D iterm2","slug":"\u4E0B\u8F7D-iterm2"},{"level":2,"title":"\u4E0B\u8F7D oh my zsh","slug":"\u4E0B\u8F7D-oh-my-zsh"},{"level":2,"title":"\u914D\u7F6E oh my zsh","slug":"\u914D\u7F6E-oh-my-zsh"},{"level":3,"title":"\u6253\u5F00\u914D\u7F6E\u6587\u4EF6","slug":"\u6253\u5F00\u914D\u7F6E\u6587\u4EF6"},{"level":3,"title":"\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9","slug":"\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9"},{"level":3,"title":"\u4F7F\u914D\u7F6E\u751F\u6548","slug":"\u4F7F\u914D\u7F6E\u751F\u6548"},{"level":2,"title":"\u914D\u7F6E\u4E3B\u9898","slug":"\u914D\u7F6E\u4E3B\u9898"},{"level":2,"title":"\u914D\u7F6E\u63D2\u4EF6","slug":"\u914D\u7F6E\u63D2\u4EF6"}],"relativePath":"tools/iterm2-ohmyzsh.md","lastUpdated":1660526486000}'),l={name:"tools/iterm2-ohmyzsh.md"},o=n(`<h1 id="mac\u7EC8\u7AEF\uFF1Aiterm2-oh-my-zsh" tabindex="-1">Mac\u7EC8\u7AEF\uFF1Aiterm2 + oh my zsh <a class="header-anchor" href="#mac\u7EC8\u7AEF\uFF1Aiterm2-oh-my-zsh" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D-iterm2" tabindex="-1">\u4E0B\u8F7D iterm2 <a class="header-anchor" href="#\u4E0B\u8F7D-iterm2" aria-hidden="true">#</a></h2><p><a href="https://iterm2.com/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51\u5730\u5740</a></p><p><code>iterm2</code> \u5305\u542B\u8BB8\u591A\u8BBE\u7F6E\u9879\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7EC8\u7AEF\u754C\u9762\u6837\u5F0F\u529F\u80FD\u7B49\u3002</p><h2 id="\u4E0B\u8F7D-oh-my-zsh" tabindex="-1">\u4E0B\u8F7D oh my zsh <a class="header-anchor" href="#\u4E0B\u8F7D-oh-my-zsh" aria-hidden="true">#</a></h2><p><a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51\u5730\u5740</a></p><p><code>Mac</code>\u4E0B\u8F7D\u547D\u4EE4\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sh -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E-oh-my-zsh" tabindex="-1">\u914D\u7F6E oh my zsh <a class="header-anchor" href="#\u914D\u7F6E-oh-my-zsh" aria-hidden="true">#</a></h2><h3 id="\u6253\u5F00\u914D\u7F6E\u6587\u4EF6" tabindex="-1">\u6253\u5F00\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#\u6253\u5F00\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u6253\u5F00\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">vim </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9" tabindex="-1">\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9 <a class="header-anchor" href="#\u914D\u7F6E\u4EE5\u4E0B\u5185\u5BB9" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u914D\u7F6E ZSH \u8DEF\u5F84</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ZSH=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/Users/(\u8FD9\u91CC\u9700\u8981\u66FF\u6362\u6210\u7528\u6237\u540D)/.oh-my-zsh</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ====== \u4EE5\u4E0B\u5728\u7ED3\u5C3E\u5904\u914D\u7F6E ====</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u9ED8\u8BA4\u7684 .bash_profile \u751F\u6548</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">HOME/bin:/usr/local/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.bash_profile</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F .zshrc \u751F\u6548</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">ZSH/oh-my-zsh.sh</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u914D\u7F6E\u751F\u6548" tabindex="-1">\u4F7F\u914D\u7F6E\u751F\u6548 <a class="header-anchor" href="#\u4F7F\u914D\u7F6E\u751F\u6548" aria-hidden="true">#</a></h3><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u5148\u4FDD\u5B58 .zshrc \u6587\u4EF6\uFF0C\u5728\u8FD0\u884C</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.zshrc</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E\u4E3B\u9898" tabindex="-1">\u914D\u7F6E\u4E3B\u9898 <a class="header-anchor" href="#\u914D\u7F6E\u4E3B\u9898" aria-hidden="true">#</a></h2><p><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes" target="_blank" rel="noopener noreferrer">\u4E3B\u9898\u5217\u8868</a></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u4F8B\u5982</span></span>
<span class="line"><span style="color:#A6ACCD;">ZSH_THEME=robbyrussell</span></span>
<span class="line"></span></code></pre></div><h2 id="\u914D\u7F6E\u63D2\u4EF6" tabindex="-1">\u914D\u7F6E\u63D2\u4EF6 <a class="header-anchor" href="#\u914D\u7F6E\u63D2\u4EF6" aria-hidden="true">#</a></h2><p><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins" target="_blank" rel="noopener noreferrer">\u63D2\u4EF6\u5217\u8868</a></p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># \u4F8B\u5982</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins=</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">nvm git yarn z zsh-syntax-highlighting zsh-autosuggestions</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,21),p=[o];function r(t,c,h,i,d,y){return e(),a("div",null,p)}var A=s(l,[["render",r]]);export{u as __pageData,A as default};
