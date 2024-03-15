import{_ as e,G as t,o as c,c as r,k as a,a as s,L as o,w as p,U as n}from"./chunks/framework.68c4918c.js";const B=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick-use.md","filePath":"guide/quick-use.md","lastUpdated":1710473143000}'),i={name:"guide/quick-use.md"},y=n(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><p>本节介绍如何在<code>uni-app</code>项目中安装、配置并使用 <code>Wot Design Uni</code>。</p><div class="warning custom-block"><p class="custom-block-title">关于安装</p><p><code>Wot Design Uni</code>提供了<code>uni_modules</code>和<code>npm</code>两种安装方式，按需选择。</p><ul><li>使用<code>uni_modules</code>安装无需额外配置，即插即用，但是每次更新组件库需要处理代码差异（一般直接覆盖就可以）。</li><li>使用<code>npm</code>安装需要配置<code>easycom</code>，更新组件库时无需处理代码差异。</li></ul></div><h2 id="uni-modules-安装" tabindex="-1">uni_modules 安装 <a class="header-anchor" href="#uni-modules-安装" aria-label="Permalink to &quot;uni_modules 安装&quot;">​</a></h2><p><code>Wot Design Uni</code> 支持 <a href="https://uniapp.dcloud.net.cn/plugin/uni_modules.html#uni-modules" target="_blank" rel="noreferrer">uni_modules</a> 规范，已经上架到 uni-app 的插件市场，故我们推荐使用 uni_modules 的方式引入，方便更新。</p><p>在<code>uni-app插件市场</code>选择使用<code>HBuildX</code>导入，或者选择手动在src目录下创建uni_modules文件夹并将<code>Wot Design Uni</code>解压到uni_modules中，结构如下:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- uni_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">- - - wot-design-uni</span></span></code></pre></div><p>下载地址：<a href="https://ext.dcloud.net.cn/plugin?id=13889"><span>wot-design-uni</span></a></p><h2 id="npm-安装" tabindex="-1">npm 安装 <a class="header-anchor" href="#npm-安装" aria-label="Permalink to &quot;npm 安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-wy5DD" id="tab-dob2aqi" checked="checked"><label for="tab-dob2aqi">npm</label><input type="radio" name="group-wy5DD" id="tab-BBTxYLc"><label for="tab-BBTxYLc">yarn</label><input type="radio" name="group-wy5DD" id="tab-k12TAfw"><label for="tab-k12TAfw">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wot-design-uni</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wot-design-uni</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">wot-design-uni</span></span></code></pre></div></div></div>`,10),D={id:"配置easycom自动引入组件自动引入方案1",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#配置easycom自动引入组件自动引入方案1","aria-label":'Permalink to "配置easycom自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >自动引入方案1</el-tag>"'},"​",-1),F=n(`<p>传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。<code>easycom</code>将其精简为一步。<br> 只要组件路径符合规范（具体见<a href="https://uniapp.dcloud.net.cn/collocation/pages.html#easycom" target="_blank" rel="noreferrer">easycom</a>），就可以不用引用、注册，直接在页面中使用。</p><div class="tip custom-block"><p class="custom-block-title">提醒</p><ul><li>uni-app 考虑到编译速度，直接在<code>pages.json</code>内修改<code>easycom</code>不会触发重新编译，需要改动页面内容触发。</li><li>请确保您的pages.json中只有一个easycom字段，否则请自行合并多个引入规则。</li></ul></div><div class="language-JSON"><button title="Copy Code" class="copy"></button><span class="lang">JSON</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// pages.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">easycom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">autoscan</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">^wd-(.*)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wot-design-uni/components/wd-$1/wd-$1.vue</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">// 此为本身已有的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">pages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">// ......</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),C={id:"基于vite配置自动引入组件自动引入方案2",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#基于vite配置自动引入组件自动引入方案2","aria-label":'Permalink to "基于vite配置自动引入组件<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >自动引入方案2</el-tag>"'},"​",-1),A=n(`<p>如果不熟悉<code>easycom</code>，也可以通过<a href="https://github.com/uni-helper/vite-plugin-uni-components" target="_blank" rel="noreferrer">@uni-helper/vite-plugin-uni-components</a>实现组件的自动引入。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--FVgU" id="tab-PFXfhAV" checked="checked"><label for="tab-PFXfhAV">npm</label><input type="radio" name="group--FVgU" id="tab-445FNLS"><label for="tab-445FNLS">yarn</label><input type="radio" name="group--FVgU" id="tab-as3znwW"><label for="tab-as3znwW">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@uni-helper/vite-plugin-uni-components</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@uni-helper/vite-plugin-uni-components</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@uni-helper/vite-plugin-uni-components</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre></div></div></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.ts</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> uni </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@dcloudio/vite-plugin-uni</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Components</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">kebabCase</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@uni-helper/vite-plugin-uni-components</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">Components</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resolvers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">component</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">match</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">Wd</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">A-Z</span><span style="color:#89DDFF;">]/</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">compName</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">kebabCase</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">              from</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">wot-design-uni/components/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">compName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">compName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">.vue</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">uni</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="ui-组件类型提示" tabindex="-1">UI 组件类型提示 <a class="header-anchor" href="#ui-组件类型提示" aria-label="Permalink to &quot;UI 组件类型提示&quot;">​</a></h4><p>如果你使用 <code>pnpm</code> ，请在根目录下创建一个 <code>.npmrc</code> 文件，参见<a href="https://github.com/antfu/unplugin-vue-components/issues/389" target="_blank" rel="noreferrer">issue</a>。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// .npmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">public-hoist-pattern[]=@vue*</span></span>
<span class="line"><span style="color:#A6ACCD;">// or</span></span>
<span class="line"><span style="color:#A6ACCD;">// shamefully-hoist = true</span></span></code></pre></div><p>see more in <a href="https://github.com/antfu/unplugin-vue-components#installation" target="_blank" rel="noreferrer">unplugin-vue-components</a></p>`,7),m={id:"volar-支持推荐",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#volar-支持推荐","aria-label":'Permalink to "Volar 支持<el-tag type="primary" style="vertical-align: middle;margin-left:8px;" effect="dark" >推荐</el-tag>"'},"​",-1),h=n(`<p>如果您使用 <code>Volar</code>，请在 <code>tsconfig.json</code> 中通过 <code>compilerOptions.type</code> 指定全局组件类型。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>cli项目使用<code>uni_modules</code>安装无需配置，对<code>Volar</code>的支持自动生效，<code>HbuildX</code>项目不支持此配置，故此步骤仅在<code>cli</code>项目使用<code>npm</code>安装时需要配置。</p></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wot-design-uni/global.d.ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p><code>Wot Design Uni</code>安装、配置完成之后，支持组件自动引入，故可以直接在SFC中使用，无需在页面内import，也不需要在components内声明，即可在任意页面使用。值得注意的是，<code>uni-app</code>平台不支持全局挂载组件，所以<code>Message</code>、<code>Toast</code>等组件仍需在SFC中显式使用，例如:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">wd-toast</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">wd-toast</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>使用uni_modules 安装时<code>Wot Design Uni</code>的组件天然支持<code>easycom</code>规范，无需额外配置就可以自动引入组件，而使用npm安装需要自行配置<code>easycom</code>或<code>@uni-helper/vite-plugin-uni-components</code>。</p></div>`,7);function b(_,f,v,k,E,q){const l=t("el-tag");return c(),r("div",null,[y,a("h3",D,[s("配置easycom自动引入组件"),o(l,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:p(()=>[s("自动引入方案1")]),_:1}),s(),d]),F,a("h3",C,[s("基于vite配置自动引入组件"),o(l,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:p(()=>[s("自动引入方案2")]),_:1}),s(),u]),A,a("h2",m,[s("Volar 支持"),o(l,{type:"primary",style:{"vertical-align":"middle","margin-left":"8px"},effect:"dark"},{default:p(()=>[s("推荐")]),_:1}),s(),g]),h])}const w=e(i,[["render",b]]);export{B as __pageData,w as default};
