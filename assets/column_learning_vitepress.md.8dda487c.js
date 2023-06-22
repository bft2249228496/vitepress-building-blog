import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5e191eb6.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"title":["vitepress笔记"],"date":"2023-05-14T02:30:45.000Z","tags":null},"headers":[],"relativePath":"column/learning/vitepress.md","filePath":"column/learning/vitepress.md"}'),p={name:"column/learning/vitepress.md"},o=l(`<h2 id="vitepress-部署到-github-任意仓库详细步骤" tabindex="-1">vitepress 部署到 github 任意仓库详细步骤 <a class="header-anchor" href="#vitepress-部署到-github-任意仓库详细步骤" aria-label="Permalink to &quot;vitepress 部署到 github 任意仓库详细步骤&quot;">​</a></h2><p>1.将 vitepress 项目发布到 github 的公开仓库，设定该项目命名为 vitepress-blog 2.从 vscode 中创建新分支 gh-pages,发布该分支到 github 上 3.切回 main 分支,在项目根目录下创建脚本文件.deploy.sh,内容如下:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 构建</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入生成的构建文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 此处作用是在本地dist目录下初始化一个新的git仓库,进行添加和提交操作,此仓库默认分支为master</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 此处作用为将dist目录master分支下的文件合并到远程源码仓库即vitepress-blog的gh-pages分支下</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:bft2249228496/vitepress-blog.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回到原目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span></code></pre></div><p>4.在 github 上的 vitepress-blog 仓库中进行操作:点击 setting，点击 pages，找到 Branch 项,修改分支为 gh-pages,根目录为/(root)，点击 save 5.修改.vitepress/config.ts,添加 base 属性和值</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/vitepress-blog/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>6.打开 git bash,执行命令:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将.deploy.sh 文件设置为可执行文件</span></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.deploy.sh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行脚本文件.deploy.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">./.deploy.sh</span></span></code></pre></div><p>7.可选操作: 在 vscode 中新建一个 building 文件仓库,如 vitepress-building-blog,发布到 github 上,新建 gh-pages 分支,再发布到 github 上,将原来的 vitepress-blog 仓库设置成私密仓库，对新的 vitepress-building-blog 仓库进行第 4 步操作，修改.deploy.sh 文件</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 构建</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入生成的构建文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:bft2249228496/vitepress-building-blog.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span></code></pre></div><p>修改.vitepress/config.ts,修改 base的值,然后执行第6步操作</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/vitepress-building-blog/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,11),e=[o];function t(c,i,r,y,C,D){return n(),a("div",null,e)}const F=s(p,[["render",t]]);export{g as __pageData,F as default};
