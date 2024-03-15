import{_ as a,G as n,o as t,c as o,L as l,U as e}from"./chunks/framework.68c4918c.js";const h=JSON.parse('{"title":"Transition 动画","description":"","frontmatter":{},"headers":[],"relativePath":"component/transition.md","filePath":"component/transition.md","lastUpdated":1710473143000}'),p={name:"component/transition.md"},c=e(`<h1 id="transition-动画" tabindex="-1">Transition 动画 <a class="header-anchor" href="#transition-动画" aria-label="Permalink to &quot;Transition 动画&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>将元素包裹在 <code>wd-transition</code> 标签中，并设置 <code>show</code> 来切换显隐，设置 <code>name</code> 选择动画。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fade</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-transition</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="动画类型" tabindex="-1">动画类型 <a class="header-anchor" href="#动画类型" aria-label="Permalink to &quot;动画类型&quot;">​</a></h2><p><code>wd-transition</code> 内置了常用的动画，如 <code>fade</code>、<code>slide</code>、<code>zoom-in</code> 等。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-transition</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">slide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">内容</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-transition</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="动画时间" tabindex="-1">动画时间 <a class="header-anchor" href="#动画时间" aria-label="Permalink to &quot;动画时间&quot;">​</a></h2><p>可以通过 <code>duration</code> 设置动画执行时间，动画拆分为 <code>enter</code> 进入动画和 <code>leave</code> 离开动画，<code>duration</code> 可以分别设置进入动画执行时间和离开动画执行时间： <code>{ enter: 300, leave: 500 }</code>。</p><h2 id="自定义动画" tabindex="-1">自定义动画 <a class="header-anchor" href="#自定义动画" aria-label="Permalink to &quot;自定义动画&quot;">​</a></h2><p>可以通过 <code>enter-class</code>、<code>enter-active-class</code>、<code>enter-to-class</code>、<code>leave-class</code>、<code>leave-active-class</code>、<code>leave-to-class</code> 设置自定义动画的类名。</p><p>在动画进入时，会给标签设置 <code>enter-class</code> 和 <code>enter-active-class</code> 样式，在下一帧切换为 <code>enter-to-class</code> 和 <code>enter-active-class</code> 样式，因此进入动画是从 <code>enter-class</code> 样式切换为 <code>enter-to-class</code> 样式状态，<code>enter-active-class</code> 设置 <code>transition</code> 相关属性。</p><p>在动画离开时，会给标签设置 <code>leave-class</code> 和 <code>leave-active-class</code> 样式，在下一帧切换为 <code>leave-to-class</code> 和 <code>leave-active-class</code> 样式，因此离开动画是从 <code>leave-class</code> 样式切换为 <code>leave-to-class</code> 样式状态，<code>leave-active-class</code> 设置 <code>transition</code> 相关属性。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-transition</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">customShow</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:duration</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{ enter: 700, leave: 1000 }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">enter-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-enter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">enter-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-enter-active</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">enter-to-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-enter-to</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">leave-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-leave</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">leave-active-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-leave-active</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">leave-to-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom-leave-to</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">custom-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">block</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#FFCB6B;">button</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">block</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">0083ff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-enter-active</span><span style="color:#A6ACCD;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-leave-active</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> background, </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-enter</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-180deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ff0000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">custom-leave-to</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">180deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ff0000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>show</td><td>是否展示组件</td><td>boolean</td><td>-</td><td>-</td><td>-</td></tr><tr><td>name</td><td>动画类型</td><td>string</td><td>fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in</td><td>-</td><td>-</td></tr><tr><td>duration</td><td>动画执行时间</td><td>number / boolean</td><td>-</td><td>300(ms)</td><td>-</td></tr><tr><td>custom-style</td><td>自定义样式</td><td>string</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>beforeenter</td><td>进入前触发</td><td>-</td><td>-</td></tr><tr><td>enter</td><td>进入时触发</td><td>-</td><td>-</td></tr><tr><td>afterenter</td><td>进入后触发</td><td>-</td><td>-</td></tr><tr><td>beforeleave</td><td>离开前触发</td><td>-</td><td>-</td></tr><tr><td>leave</td><td>离开时触发</td><td>-</td><td>-</td></tr><tr><td>afterleave</td><td>离开后触发</td><td>-</td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr><tr><td>enter-class</td><td>定义进入过渡的开始状态，在元素被插入前生效，在插入的下一帧移除</td><td>-</td></tr><tr><td>enter-active-class</td><td>定义动画执行期间的状态，在整个进入动画中应用；在元素被插入前生效，在动画结束后移除；可以定义 transition 相关属性</td><td>-</td></tr><tr><td>enter-to-class</td><td>定义进入过渡的结束状态，在元素被插入的下一帧生效，在动画结束后移除</td><td>-</td></tr><tr><td>leave-class</td><td>定义离开过渡的开始状态，在离开动画触发时立即生效，在下一帧移除</td><td>-</td></tr><tr><td>leave-active-class</td><td>定义动画执行期间的状态，在整个离开动画中应用；在离开动画触发时立即生效，在动画结束后移除；可以定义 transition 相关属性</td><td>-</td></tr><tr><td>leave-to-class</td><td>定义离开过渡的结束状态，在离开动画触发时的下一帧生效，在动画结束后移除</td><td>-</td></tr></tbody></table>`,21);function r(d,D,F,y,C,i){const s=n("frame");return t(),o("div",null,[l(s),c])}const u=a(p,[["render",r]]);export{h as __pageData,u as default};
