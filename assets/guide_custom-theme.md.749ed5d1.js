import{_ as l,o,c as a,U as r}from"./chunks/framework.68c4918c.js";const v=JSON.parse('{"title":"自定义主题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/custom-theme.md","filePath":"guide/custom-theme.md","lastUpdated":1710473143000}'),s={name:"guide/custom-theme.md"},c=r('<h1 id="自定义主题" tabindex="-1">自定义主题 <a class="header-anchor" href="#自定义主题" aria-label="Permalink to &quot;自定义主题&quot;">​</a></h1><p>Wot Design Uni 每1个组件基本都有自定义类名 custom-class，可以在组件根节点加入你页面上的类名，进行样式修改。</p><h2 id="主题介绍" tabindex="-1">主题介绍 <a class="header-anchor" href="#主题介绍" aria-label="Permalink to &quot;主题介绍&quot;">​</a></h2><h3 id="主要变量介绍" tabindex="-1">主要变量介绍 <a class="header-anchor" href="#主要变量介绍" aria-label="Permalink to &quot;主要变量介绍&quot;">​</a></h3><p>以下样式变量在多个组件中被使用，通过修改这些主要变量，可以快速定义一套自定义主题。</p><p><strong>主题色</strong>为：</p><div class="style-block" style="background:#4D80F0;"><p>Theme Color</p><p>$-color-theme: #4D80F0</p></div><p><strong>主题品牌色-小渐变（按钮，渐变更弱）色</strong>：</p><div class="color-wrapper"><span class="style-block liner-color" style="background:linear-gradient(315deg, rgba(79,124,248,1) 0%,rgba(102,141,248,1) 100%);"><span class="a-dot"></span><span class="b-dot"></span></span><div class="demo-right"><i>渐变倾斜角度45度左上角较浅，右下角较深</i><ul><li>A: <span class="color-block" style="background:#668DF8;">#668DF8</span></li><li>B: <span class="color-block" style="background:#4F7CF8;">#4F7CF8</span></li></ul></div></div><p><strong>品牌色-大渐变（大面积背景色/插件icon底色，渐变更强）</strong>：</p><div class="color-wrapper"><span class="style-block liner-color liner-color1" style="background:linear-gradient(315deg, rgba(81,124,240,1) 0%,rgba(118,158,245,1) 100%);"><span class="a-dot"></span><span class="b-dot"></span></span><div class="demo-right"><i>渐变倾斜角度45度右上角较浅，左下角较深</i><ul><li>A: <span class="color-block" style="background:#769EF5;">#769EF5</span></li><li>B: <span class="color-block" style="background:#517CF0;">#517CF0</span></li></ul></div></div><p><strong>功能色</strong>：</p><div class="style-block" style="background:#4D80F0;"><p>Theme Color</p><p>$-color-theme: #4D80F0</p></div><div class="style-block" style="background:#34d19d;"><p>Success Color</p><p>$-color-success: #34d19d</p></div><div class="style-block" style="background:#f0883a;"><p>Warning Color</p><p>$-color-warning: #f0883a</p></div><div class="style-block" style="background:#fa4350;"><p>Danger Color</p><p>$-color-danger: #fa4350</p></div><p><strong>辅助色</strong>：</p><div class="style-block" style="background:#8268de;"><p>#8268de</p></div><div class="style-block" style="background:#fa4350;"><p>#fa4350</p></div><div class="style-block" style="background:#f0883a;"><p>#f0883a</p></div><div class="style-block" style="background:#f0cf1d;"><p>#f0cf1d</p></div><div class="style-block" style="background:#34d19d;"><p>#34d19d</p></div><div class="style-block" style="background:#2bb3ed;"><p>#2bb3ed</p></div><h3 id="中性色" tabindex="-1">中性色 <a class="header-anchor" href="#中性色" aria-label="Permalink to &quot;中性色&quot;">​</a></h3><p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p><ul class="color-group"><li class="color-group-line" style="background:rgba(0,0,0,1);color:#fff;">100%<div>重要文字</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.85);color:#fff;">85%<div>普通文字</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.65);color:#fff;">65%<div>遮罩、次要文字<br>仅在层级复杂时使用</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.45);color:#fff;">45%<div>辅助文字、次级按钮边框线</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.25);color:rgba(0,0,0,0.65);">25%<div>失效、默认提示文字</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.15);color:rgba(0,0,0,0.65);">15%<div>控件边框线</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.09);color:rgba(0,0,0,0.65);">9%<div>若交叉使用则为实色#E8E8E8</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.04);color:rgba(0,0,0,0.65);">4%<div>背景色、禁用填充色</div></li><li class="color-group-line" style="background:rgba(0,0,0,0.02);color:rgba(0,0,0,0.65);">2%<div>表头填充色</div></li></ul><ul class="color-group dark"><li class="color-group-line" style="background:rgba(255,255,255,1);color:rgba(0,0,0,0.65);">100%<div>重要文字</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.85);color:rgba(0,0,0,0.65);">85%<div>普通文字</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.65);color:rgba(0,0,0,0.65);">65%<div>遮罩、次要文字<br>仅在层级复杂时使用</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.45);color:rgba(255,255,255,0.65);">45%<div>辅助文字、次级按钮边框线</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.25);color:rgba(255,255,255,0.65);">25%<div>失效、默认提示文字</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.65);">15%<div>控件边框线</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.09);color:rgba(255,255,255,0.65);">9%<div>若交叉使用则为实色#E8E8E8</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.65);">4%<div>背景色、禁用填充色</div></li><li class="color-group-line" style="background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.65);">2%<div>表头填充色</div></li></ul><h2 id="定制主题" tabindex="-1">定制主题 <a class="header-anchor" href="#定制主题" aria-label="Permalink to &quot;定制主题&quot;">​</a></h2><p>我们为每个组件提供了<code>css 变量</code>，可以参考<a href="./../component/config-provider.html">config-provider</a>组件的使用介绍来定制主题。</p>',29),i=[c];function e(d,n,t,g,p,b){return o(),a("div",null,i)}const k=l(s,[["render",e]]);export{v as __pageData,k as default};
