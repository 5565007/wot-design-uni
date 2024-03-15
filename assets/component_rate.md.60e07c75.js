import{_ as s,G as a,o,c as l,L as n,U as e}from"./chunks/framework.68c4918c.js";const C=JSON.parse('{"title":"Rate 评分","description":"","frontmatter":{},"headers":[],"relativePath":"component/rate.md","filePath":"component/rate.md","lastUpdated":1710473143000}'),p={name:"component/rate.md"},r=e(`<h1 id="rate-评分" tabindex="-1">Rate 评分 <a class="header-anchor" href="#rate-评分" aria-label="Permalink to &quot;Rate 评分&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>设置<code>v-model</code>分数，设置<code>num</code>总分数，默认为5分。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@change</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleChange</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeValue</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="只读" tabindex="-1">只读 <a class="header-anchor" href="#只读" aria-label="Permalink to &quot;只读&quot;">​</a></h2><p>设置 <code>readonly</code> 属性。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="禁用" tabindex="-1">禁用 <a class="header-anchor" href="#禁用" aria-label="Permalink to &quot;禁用&quot;">​</a></h2><p>设置 <code>disabled</code> 属性和<code>disabled-color</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:modelValue</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="修改颜色" tabindex="-1">修改颜色 <a class="header-anchor" href="#修改颜色" aria-label="Permalink to &quot;修改颜色&quot;">​</a></h2><p>可以通过 <code>color</code> 属性修改未选中的颜色，<code>active-color</code> 修改选中的颜色。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">active-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:active-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)&#39;, &#39;linear-gradient(315deg, rgba(245,34,34,1) 0%,rgba(255,117,102,1) 100%)&#39;]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="修改icon" tabindex="-1">修改icon <a class="header-anchor" href="#修改icon" aria-label="Permalink to &quot;修改icon&quot;">​</a></h2><p>可以通过 <code>icon</code> 属性修改未选中的图标，<code>active-icon</code> 修改选中的图标。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wd-icon-dong</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">active-icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wd-icon-dong</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">active-color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#4D80F0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="修改大小、间隔" tabindex="-1">修改大小、间隔 <a class="header-anchor" href="#修改大小、间隔" aria-label="Permalink to &quot;修改大小、间隔&quot;">​</a></h2><p>可以通过 <code>size</code> 属性修改图标的大小，<code>space</code> 修改图标之间的间隔。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-rate</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">30px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">space</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>v-model</td><td>当前分数</td><td>number</td><td>-</td><td>-</td><td>-</td></tr><tr><td>num</td><td>评分最大值</td><td>number</td><td>-</td><td>5</td><td>-</td></tr><tr><td>readonly</td><td>是否只读</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>size</td><td>图标大小</td><td>string</td><td>-</td><td>16px</td><td>-</td></tr><tr><td>space</td><td>图标间距</td><td>string</td><td>-</td><td>4px</td><td>-</td></tr><tr><td>color</td><td>未选中的图标颜色</td><td>string</td><td>-</td><td>#E8E8E8</td><td>-</td></tr><tr><td>active-color</td><td>选中的图标颜色(支持传颜色数组，共有 2 个元素，为 2 个分段所对应的颜色)</td><td>string/array</td><td>-</td><td>linear-gradient(180deg, rgba(255,238,0,1) 0%,rgba(250,176,21,1) 100%)</td><td>-</td></tr><tr><td>icon</td><td>未选中的图标类名</td><td>string</td><td>-</td><td>wd-icon-star-on</td><td>-</td></tr><tr><td>active-icon</td><td>选中的图标类名</td><td>string</td><td>-</td><td>wd-icon-star-on</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>-</td><td>false</td><td>-</td></tr><tr><td>disabled-color</td><td>禁用的图标颜色</td><td>string</td><td>-</td><td>linear-gradient(315deg, rgba(177,177,177,1) 0%,rgba(199,199,199,1) 100%)</td><td>-</td></tr><tr><td>name</td><td>form 表单中的字段名</td><td>string</td><td>-</td><td>-</td><td>-</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名称</th><th>说明</th><th>参数</th><th>最低版本</th></tr></thead><tbody><tr><td>change</td><td>点击icon，修改分值事件</td><td><code>{ value }</code></td><td>-</td></tr></tbody></table><h2 id="外部样式类" tabindex="-1">外部样式类 <a class="header-anchor" href="#外部样式类" aria-label="Permalink to &quot;外部样式类&quot;">​</a></h2><table><thead><tr><th>类名</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>custom-class</td><td>根节点样式</td><td>-</td></tr></tbody></table>`,26);function d(c,D,F,i,y,h){const t=a("frame");return o(),l("div",null,[n(t),r])}const g=s(p,[["render",d]]);export{C as __pageData,g as default};
