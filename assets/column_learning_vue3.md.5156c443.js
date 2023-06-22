import{_ as s,o as a,c as n,O as l}from"./chunks/framework.5e191eb6.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{"title":["vue3笔记"],"date":"2023-05-14T02:47:41.000Z","tags":null},"headers":[],"relativePath":"column/learning/vue3.md","filePath":"column/learning/vue3.md"}'),o={name:"column/learning/vue3.md"},p=l(`<h2 id="vue3报错-找不到模块或其相应的类型声明。-vue-3-can-not-find-module" tabindex="-1">vue3报错:找不到模块或其相应的类型声明。（Vue 3 can not find module） <a class="header-anchor" href="#vue3报错-找不到模块或其相应的类型声明。-vue-3-can-not-find-module" aria-label="Permalink to &quot;vue3报错:找不到模块或其相应的类型声明。（Vue 3 can not find module）&quot;">​</a></h2><p>如果是自定义页面组件路径报错,在src目录下新建global.d.ts文件</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ComponentOptions</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">componentOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">ComponentOptions</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">componentOptions</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果是第三方插件报错，在src或者根目录下新建global.d.ts文件:写入如下代码,xxx为模块名。如果有多个模块报类似错误,则写多段以下代码</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">content</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="vue3-vite项目中-实现自动注册路由" tabindex="-1">vue3+vite项目中,实现自动注册路由 <a class="header-anchor" href="#vue3-vite项目中-实现自动注册路由" aria-label="Permalink to &quot;vue3+vite项目中,实现自动注册路由&quot;">​</a></h2><p>1.下载vite-plugin-pages</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D vite</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">pages</span></span></code></pre></div><p>2.在vite.config.ts-&gt;defineConfig-&gt;plugins里面写入</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">// 如果写成Pages()，则等价于Pages({pagesDir: &#39;src/pages&#39;});另外此处src不能写成@</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">Pages</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#F07178;">pagesDir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/views</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span></code></pre></div><p>3.在router/index.ts中写入</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createRouter</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createWebHistory</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">RouteRecordRaw</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue-router</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> routes </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">virtual:generated-pages</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//关键代码</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRouter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">history</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createWebHistory</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">routes</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> routes </span><span style="color:#676E95;font-style:italic;">//关键代码</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> router</span></span></code></pre></div>`,12),e=[p];function t(c,r,y,D,i,F){return a(),n("div",null,e)}const u=s(o,[["render",t]]);export{A as __pageData,u as default};
