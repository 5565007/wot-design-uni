import{_ as a,G as t,o as n,c as o,L as l,U as p}from"./chunks/framework.68c4918c.js";const u=JSON.parse('{"title":"NoticeBar 通知栏","description":"","frontmatter":{},"headers":[],"relativePath":"component/notice-bar.md","filePath":"component/notice-bar.md","lastUpdated":1710473143000}'),e={name:"component/notice-bar.md"},c=p(`<h1 id="noticebar-通知栏" tabindex="-1">NoticeBar 通知栏 <a class="header-anchor" href="#noticebar-通知栏" aria-label="Permalink to &quot;NoticeBar 通知栏&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>设置 <code>text</code> 文本内容和 <code>prefix</code> 左侧图标。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn-bold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="类型修改" tabindex="-1">类型修改 <a class="header-anchor" href="#类型修改" aria-label="Permalink to &quot;类型修改&quot;">​</a></h2><p>设置 <code>type</code> 可修改通知类型，通知类型共有三种 <code>info</code>|<code>warning</code>|<code>danger</code>，默认值为<code>warning</code>。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn-bold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">space</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check-outline</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">custom-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">space</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wifi-error</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">space</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="插槽演示" tabindex="-1">插槽演示 <a class="header-anchor" href="#插槽演示" aria-label="Permalink to &quot;插槽演示&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#prefix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">prefix</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">warn-bold</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">占位符</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  通知被禁或时段内消息屏蔽可能造成消…</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">#suffix</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color: #4d80f0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">查看</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:deep(</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">prefix</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding-right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="多行展示" tabindex="-1">多行展示 <a class="header-anchor" href="#多行展示" aria-label="Permalink to &quot;多行展示&quot;">​</a></h2><p>设置 <code>wrapable</code> 属性为 <code>true</code> 且同时禁止滚动 <code>scrollable</code> 即可开启多行展示。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">wrapable</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:scrollable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="可关闭的" tabindex="-1">可关闭的 <a class="header-anchor" href="#可关闭的" aria-label="Permalink to &quot;可关闭的&quot;">​</a></h2><p>设置 <code>closable</code> 属性，使通知栏可以关闭。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">closable</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="自定义颜色" tabindex="-1">自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to &quot;自定义颜色&quot;">​</a></h2><p>设置 <code>color</code> 修改文字和图标颜色，设置 <code>background-color</code> 修改背景颜色。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-notice-bar</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">prefix</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">check-outline</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">closable</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#34D19D</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">background-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#f0f9eb</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>text</td><td>设置通知栏文案</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>type</td><td>设置通知栏类型</td><td>string</td><td>info / warning / danger</td><td>warning</td><td>-</td></tr><tr><td>prefix</td><td>设置左侧图标，使用 icon 章节中的图标名</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>scrollable</td><td>是否可以滚动</td><td>boolean</td><td>-</td><td>true</td><td>-</td></tr><tr><td>delay</td><td>滚动动画初始延时，单位 秒(s)</td><td>number</td><td>-</td><td>1</td><td>-</td></tr><tr><td>speed</td><td>滚动速度，单位 px/s</td><td>number</td><td>-</td><td>50</td><td>-</td></tr><tr><td>closable</td><td>是否可以关闭</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>wrapable</td><td>是否换行展示</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>color</td><td>文字、图标颜色</td><td>string</td><td>-</td><td>-</td><td>-</td></tr><tr><td>background-color</td><td>背景颜色</td><td>string</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>close</td><td>关闭按钮点击时</td><td>-</td><td>-</td></tr></tbody></table><h2 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-label="Permalink to &quot;Slot&quot;">​</a></h2><table><thead><tr><th>name</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>prefix</td><td>前置图标</td><td>-</td></tr><tr><td>suffix</td><td>后置插槽</td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr></tbody></table>`,28);function r(D,F,d,y,i,h){const s=t("frame");return n(),o("div",null,[l(s),c])}const b=a(e,[["render",r]]);export{u as __pageData,b as default};
