import{_ as e,c as l,o as r,a}from"./app.d322b2e6.js";var t="/assets/red-black-tree-01.3b20064c.png",i="/assets/red-black-tree-02.205c08f6.png",s="/assets/red-black-tree-03.1e339ffc.png",o="/assets/red-black-tree-04.7bd7270c.png";const v='{"title":"\u7EA2\u9ED1\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EA2\u9ED1\u6811 vs AVL\u6811","slug":"\u7EA2\u9ED1\u6811-vs-avl\u6811"},{"level":2,"title":"\u6027\u8D28","slug":"\u6027\u8D28"},{"level":2,"title":"\u63D2\u5165","slug":"\u63D2\u5165"},{"level":2,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"}],"relativePath":"data-structures/\u7EA2\u9ED1\u6811.md","lastUpdated":1652199210000}',n={},h=a('<h1 id="\u7EA2\u9ED1\u6811" tabindex="-1">\u7EA2\u9ED1\u6811 <a class="header-anchor" href="#\u7EA2\u9ED1\u6811" aria-hidden="true">#</a></h1><h2 id="\u7EA2\u9ED1\u6811-vs-avl\u6811" tabindex="-1">\u7EA2\u9ED1\u6811 vs AVL\u6811 <a class="header-anchor" href="#\u7EA2\u9ED1\u6811-vs-avl\u6811" aria-hidden="true">#</a></h2><p>AVL\u662F\u4E25\u683C\u7684\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u65E0\u8BBA\u662F\u6267\u884C\u63D2\u5165\u8FD8\u662F\u5220\u9664\u53EA\u8981\u4E0D\u6EE1\u8DB3\u8981\u6C42\u90FD\u4F1A\u8FDB\u884C\u65CB\u8F6C\uFF0C\u800C\u65CB\u8F6C\u65F6\u975E\u5E38\u8017\u65F6\u7684\uFF0C\u6240\u4EE5AVL\u6811\u66F4\u9002\u5408\u63D2\u5165\u548C\u5220\u9664\u6BD4\u8F83\u5C11\u4F46\u67E5\u627E\u591A\u7684\u60C5\u51B5\u3002\u7EA2\u9ED1\u6811\u662F\u4E00\u79CD\u5F31\u5E73\u8861\u4E8C\u53C9\u6811\uFF0C\u4ED6\u7684\u65CB\u8F6C\u6B21\u6570\u8F83AVL\u5C11\u8BB8\u591A\uFF0C\u56E0\u6B64\u5E94\u7528\u573A\u666F\u4E5F\u76F8\u5BF9\u5E7F\u4E00\u4E9B\u3002</p><h2 id="\u6027\u8D28" tabindex="-1">\u6027\u8D28 <a class="header-anchor" href="#\u6027\u8D28" aria-hidden="true">#</a></h2><ol><li>\u6BCF\u4E2A\u7ED3\u70B9\u90FD\u662F\u7EA2\u8272\u7684\u6216\u662F\u9ED1\u8272\u7684</li><li>\u6839\u7ED3\u70B9\u662F\u9ED1\u8272\u7684</li><li>\u6BCF\u4E2A\u53F6\u7ED3\u70B9\u662F\u9ED1\u8272\u7684</li><li>\u5982\u679C\u4E00\u4E2A\u7ED3\u70B9\u662F\u7EA2\u8272\u7684\uFF0C\u5219\u5B83\u7684\u4E24\u4E2A\u5B50\u7ED3\u70B9\u90FD\u662F\u9ED1\u8272\u7684</li><li>\u5BF9\u4E8E\u6BCF\u4E2A\u7ED3\u70B9\uFF0C\u4ECE\u8BE5\u7ED3\u70B9\u5230\u5176\u6240\u6709\u540E\u4EE3\u53F6\u7ED3\u70B9\u7684\u7B80\u5355\u8DEF\u5F84\u4E0A\uFF0C\u5747\u5305\u542B\u76F8\u540C\u6570\u76EE\u7684\u9ED1\u8272\u8282\u70B9</li></ol><h2 id="\u63D2\u5165" tabindex="-1">\u63D2\u5165 <a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a></h2><ol><li>\u5982\u679C\u7236\u7ED3\u70B9\u4E3A\u9ED1\u8272\u7ED3\u70B9\uFF0C\u90A3\u4E48\u63D2\u5165\u7684\u7EA2\u8272\u7ED3\u70B9\u4E0D\u4F1A\u5F71\u54CD\u5E73\u8861\uFF0C\u8DF3\u8FC7\u3002</li><li>\u5982\u679C\u7236\u7ED3\u70B9\u4E3A\u7EA2\u8272\u7ED3\u70B9 <ol><li>\u5982\u679C\u53D4\u7ED3\u70B9\u4E3A\u7EA2\u8272\u7ED3\u70B9 <ol><li>\u7236\u7ED3\u70B9\u548C\u53D4\u7ED3\u70B9\u53D8\u4E3A\u9ED1\u8272\uFF0C\u7956\u7236\u7ED3\u70B9\u5982\u679C\u4E0D\u662F\u6839\u7ED3\u70B9\u5219\u53D8\u7EA2\u8272</li><li>\u5411\u4E0A\u9012\u5F52\uFF0C\u7EE7\u7EED\u5E73\u8861\u7956\u7236\u7ED3\u70B9</li></ol></li><li>\u5982\u679C\u53D4\u7ED3\u70B9\u4E0D\u5B58\u5728\u6216\u662F\u9ED1\u8272\u7ED3\u70B9 <ol><li>\u5148\u8FDB\u884C\u65CB\u8F6C\uFF08\u540C AVL \u68114\u79CD\u65CB\u8F6C\u65B9\u5F0F\uFF09</li><li>\u7236\u7ED3\u70B9\u548C\u7956\u7236\u8282\u70B9\u6362\u989C\u8272</li><li>\u5411\u4E0A\u9012\u5F52\uFF0C\u7EE7\u7EED\u5E73\u8861\u7956\u7236\u7ED3\u70B9</li></ol></li></ol></li></ol><h2 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h2><ol><li>\u627E\u5230<strong>\u66FF\u6362\u7ED3\u70B9</strong>\uFF1A\u5DE6\u5B50\u6811\u7684\u6700\u5927\u503C\u7ED3\u70B9 or \u53F3\u5B50\u6811\u7684\u6700\u5C0F\u503C\u7ED3\u70B9\uFF08\u7C7B\u4F3C\u4E8E\u4E8C\u53C9\u67E5\u627E\u6811\u7684\u5220\u9664\u7ED3\u70B9\uFF09</li><li><strong>\u60C5\u666F1</strong>\uFF1A\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u662F\u7EA2\u8272\uFF0C\u90A3\u4E48\u76F4\u63A5\u5C06\u66FF\u6362\u8282\u70B9\u503C\u8D4B\u7ED9\u5220\u9664\u7ED3\u70B9\uFF0C\u5E76\u5220\u9664\u66FF\u6362\u7ED3\u70B9\u3002</li><li>\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u662F\u9ED1\u8272\uFF1A <ol><li><strong>\u60C5\u666F2</strong>\uFF1A\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u662F\u5176\u7236\u7ED3\u70B9\u7684\u5DE6\u7ED3\u70B9 <ol><li><strong>\u60C5\u666F2.1</strong>\uFF1A\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u7684\u5144\u5F1F\u7ED3\u70B9\u662F\u7EA2\u8272\uFF0C\u5220\u9664\u9ED1\u7ED3\u70B9\u4F1A\u5BFC\u81F4\u5DE6\u4FA7\u9ED1\u8272\u7ED3\u70B9\u5C11\u4E00\uFF0C\u6B64\u65F6\u901A\u8FC7\u4EA4\u6362\u5144\u5F1F\u7ED3\u70B9\u548C\u7236\u7ED3\u70B9\u989C\u8272\u5E76\u5411\u5DE6\u65CB\u8F6C\u89E3\u51B3\u3002\uFF08\u7C7B\u4F3C\u4E8E\u53F3\u53F3\u7684\u7ED3\u70B9\u60C5\u51B5\uFF09<img src="'+t+'" alt=""></li><li><strong>\u60C5\u666F2.2</strong>\uFF1A\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u7684\u5144\u5F1F\u7ED3\u70B9\u662F\u9ED1\u8272\uFF0C\u5144\u5F1F\u7ED3\u70B9\u53F3\u7ED3\u70B9\u4E3A\u7EA2\u8272\uFF0C\u5DE6\u7ED3\u70B9\u4E3A\u4EFB\u610F\u989C\u8272\uFF0C\u6B64\u65F6\u4E0D\u80FD\u901A\u8FC7\u60C5\u666F2.1\u90A3\u6837\u5DE6\u65CB\u8FBE\u5230\u5E73\u8861\uFF0C\u800C\u662F\u9700\u8981\u5C06\u7EA2\u8272\u53F3\u5B50\u7ED3\u70B9\u201D\u501F\u201C\u8FC7\u6765\u3002\u5144\u5F1F\u7ED3\u70B9\u548C\u7236\u7ED3\u70B9\u989C\u8272\u5BF9\u8C03\uFF0C\u53F3\u5B50\u7ED3\u70B9\u53D8\u4E3A\u9ED1\u8272\uFF0C\u5E76\u8FDB\u884C\u5DE6\u65CB\u3002<img src="'+i+'" alt=""></li><li><strong>\u60C5\u666F2.3</strong>\uFF1A\u5144\u5F1F\u7ED3\u70B9\u53F3\u7ED3\u70B9\u4E3A\u9ED1\u8272\uFF0C\u5DE6\u7ED3\u70B9\u4E3A\u7EA2\u8272\u3002\u6B64\u65F6\u5DE6\u7ED3\u70B9\u4E0E\u5144\u5F1F\u7ED3\u70B9\u4EA4\u6362\u989C\u8272\uFF0C\u5E76\u53F3\u65CB\u3002\u518D\u8FDB\u884C\u60C5\u666F2.2<img src="'+s+'" alt=""></li><li><strong>\u60C5\u666F2.4</strong>\uFF1A\u5144\u5F1F\u7ED3\u70B9\u5B50\u7ED3\u70B9\u5747\u4E3A\u9ED1\u8272\u3002\u6B64\u65F6\u5144\u5F1F\u7ED3\u70B9\u6CA1\u6709\u7ED3\u70B9\u53EF\u4EE5\u501F\u4E86\uFF0C\u53EA\u80FD\u5411\u7236\u7ED3\u70B9\u501F\uFF0C\u628A\u5144\u5F1F\u7ED3\u70B9\u8BBE\u4E3A\u7EA2\u8272\uFF0C\u5C06\u7236\u7ED3\u70B9\u4F5C\u4E3A\u65B0\u7684\u66FF\u4EE3\u7ED3\u70B9\uFF0C\u81EA\u5E95\u5411\u4E0A\u5904\u7406\u3002 <img src="'+o+'" alt=""></li></ol></li><li><strong>\u60C5\u666F3</strong>\uFF1A\u5982\u679C\u66FF\u6362\u7ED3\u70B9\u662F\u5176\u7236\u7ED3\u70B9\u7684\u53F3\u7ED3\u70B9\uFF0C\u4E0E\u5DE6\u8282\u70B9\u60C5\u51B5\u955C\u50CF</li></ol></li></ol><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://segmentfault.com/a/1190000014037447" target="_blank" rel="noopener noreferrer">\u7EA2\u9ED1\u6811\u56FE\u793A</a></li><li><a href="https://github.com/mymmsc/books/blob/master/%E7%AE%97%E6%B3%95%E5%AF%BC%E8%AE%BA%E4%B8%AD%E6%96%87%E7%89%88.pdf" target="_blank" rel="noopener noreferrer">\u7B97\u6CD5\u5BFC\u8BBA-\u7EA2\u9ED1\u6811</a></li><li><a href="https://www.jianshu.com/p/e136ec79235c" target="_blank" rel="noopener noreferrer">30\u5F20\u56FE\u5E26\u4F60\u5F7B\u5E95\u7406\u89E3\u7EA2\u9ED1\u6811</a></li><li><a href="https://blog.csdn.net/u010899985/article/details/80981053" target="_blank" rel="noopener noreferrer">\u7EA2\u9ED1\u6811\u4E0EAVL\u5BF9\u6BD4</a></li><li><a href="https://oi-wiki.org/ds/llrbt/" target="_blank" rel="noopener noreferrer">oi-wiki</a></li><li><a href="https://segmentfault.com/a/1190000022278733" target="_blank" rel="noopener noreferrer">\u7EA2\u9ED1\u6811\u5220\u9664</a></li><li><a href="https://www.cs.usfca.edu/~galles/visualization/RedBlack.html" target="_blank" rel="noopener noreferrer">\u7EA2\u9ED1\u6811\u53EF\u89C6\u5316\u8FC7\u7A0B</a></li></ul>',11),c=[h];function d(_,g,p,f,u,b){return r(),l("div",null,c)}var k=e(n,[["render",d]]);export{v as __pageData,k as default};
