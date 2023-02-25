import{_ as e,c as o,o as c,a as d}from"./app.da177e40.js";const s="/assets/react-Suspense.cd7d3fda.png",m=JSON.parse('{"title":"Suspense 实现","description":"","frontmatter":{},"headers":[],"relativePath":"react/Suspense实现.md","lastUpdated":1677323371000}'),i={name:"react/Suspense实现.md"},t=d('<h1 id="suspense-实现" tabindex="-1">Suspense 实现 <a class="header-anchor" href="#suspense-实现" aria-hidden="true">#</a></h1><p><img src="'+s+'" alt="Suspense 实现"></p><ol><li>在<code>beginWork</code>时，遇到<code>Suspense</code>，默认是正常显示组件：创建一个<code>OffScreenComponent</code>来表示，此时<code>visible</code>为<code>true</code>。</li><li>当加载到组件内部的<code>promise</code>时，由于第一次渲染，此时还未加载完成，会报错，抛出<code>promise</code>。</li><li><code>handleError</code>捕捉到错误，首先开始<code>throwException</code>： <ol><li>标记报错的<code>fiber.flags</code>为<code>Incomplete</code>。</li><li>向上查找，找到第一个<code>Suspense</code>。</li><li>在<code>Suspense.updateQueue</code>中添加报错信息（也就是抛出的<code>promise</code>）。</li><li>通过<code>attachPingListener</code>方法执行该<code>promise</code>，并在<code>then</code>回调里添加一个更新任务。</li><li>标记<code>Suspense fiber flags</code>为<code>ShouldCapture</code>。</li></ol></li><li>从报错的<code>fiber</code>开始，执行<code>completeWork</code>： <ol><li>向上找到<code>ShouldCapture</code>的<code>Suspense</code>，标记为<code>DidCapture</code>。</li><li>查找过程中遇到的<code>fiber</code>，标记为<code>Incomplete</code>。</li><li>返回最终的<code>fiber</code>：<code>Suspense</code>或者<code>HostRoot</code>（没找到<code>Suspense</code>）。</li></ol></li><li>对找到的<code>Suspense</code>重新开始<code>beginWork</code>。此时<code>DidCapture</code>为<code>true</code>，显示<code>fallback</code>。<code>Suspense</code>的<code>child</code>指向<code>OffScreenComponent</code>（内部包含主要的组件），<code>OffScreenComponent</code>的<code>sibling</code>指向<code>fallbackChildFragment</code>（占位组件）。而真正进行渲染的是<code>fallbackChildFragment</code>。</li><li>在<code>completeWork</code>的时候，对于<code>Suspense fiber</code>，检测到已经从显示<code>primary</code>（主组件）变为显示<code>fallback</code>（占位组件）。如果此时<code>updateQueue</code>存在，说明还有待更新的任务，标记<code>fiber</code>为<code>Update</code>。</li><li>在<code>commitWork</code>阶段，对于标记<code>Update</code>的<code>Suspense</code>，会调用<code>attachSuspenseRetryListeners</code>将所有异步任务的<code>then</code>添加更新任务，对应的<code>lane</code>为<code>retryLane</code>。(如果之前已经更新过了，那么不需要重复更新，这里只是作为保障)</li><li>等到<code>promise</code>加载完成，重新开始更新，此时就能正常的显示<code>primary</code>组件了。</li></ol>',3),l=[t];function r(n,a,p,u,_,S){return c(),o("div",null,l)}const h=e(i,[["render",r]]);export{m as __pageData,h as default};
