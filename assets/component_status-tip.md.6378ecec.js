import{_ as a,G as t,o,c as n,L as l,U as p}from"./chunks/framework.68c4918c.js";const m=JSON.parse('{"title":"StatusTip 缺省提示","description":"","frontmatter":{},"headers":[],"relativePath":"component/status-tip.md","filePath":"component/status-tip.md","lastUpdated":1710473143000}'),e={name:"component/status-tip.md"},c=p(`<h1 id="statustip-缺省提示" tabindex="-1">StatusTip 缺省提示 <a class="header-anchor" href="#statustip-缺省提示" aria-label="Permalink to &quot;StatusTip 缺省提示&quot;">​</a></h1><p>一般用于兜底占位展示。</p><blockquote><p>本组件使用图片均为外链，推荐将图片下载到开发者的服务器后通过自定义图片<code>URL</code>使用。</p></blockquote><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>设置 <code>image</code> 修改展示缺省图片类型，默认为 <code>network</code>，可选值 <code>search</code>, <code>network</code>, <code>content</code>, <code>collect</code>, <code>comment</code>, <code>halo</code>, <code>message</code>。可设置 <code>tip</code> 来控制展示提示文案。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当前搜索无结果</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">network</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">该页面暂时无法访问</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">暂无内容</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">collect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">暂无收藏</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">comment</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当前没有联系人名单哦～</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">halo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">支付失败，请重新订购</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已订阅全部消息</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="自定义大小" tabindex="-1">自定义大小 <a class="header-anchor" href="#自定义大小" aria-label="Permalink to &quot;自定义大小&quot;">​</a></h2><p>通过 <code>image-size</code> 属性图片的大小。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">search</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">当前搜索无结果</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="自定义图片" tabindex="-1">自定义图片 <a class="header-anchor" href="#自定义图片" aria-label="Permalink to &quot;自定义图片&quot;">​</a></h2><p>需要自定义图片时，可以在 <code>image</code> 属性中传入任意图片 URL。</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-status-tip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">image</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://img.wot-design-uni.cn/static/1.jpg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">查看我的头像</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th><th>最低版本</th></tr></thead><tbody><tr><td>image</td><td>缺省图片类型，支持传入图片 URL</td><td>string</td><td>search / network / content / collect / comment / halo / message</td><td>network</td><td>-</td></tr><tr><td>image-size</td><td>图片大小，默认单位为 <code>px</code></td><td><code>string</code>/<code>number</code></td><td>-</td><td>-</td><td>-</td></tr><tr><td>tip</td><td>提示文案</td><td>string</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>`,14);function r(D,F,y,d,i,u){const s=t("frame");return o(),n("div",null,[l(s),c])}const q=a(e,[["render",r]]);export{m as __pageData,q as default};
