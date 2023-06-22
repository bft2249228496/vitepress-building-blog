import{_ as s,o as n,c as a,O as l}from"./chunks/framework.5e191eb6.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{"title":["vitepress笔记"],"date":"2023-05-14T02:30:45.000Z","tags":null},"headers":[],"relativePath":"column/learning/vitepress.md","filePath":"column/learning/vitepress.md"}'),p={name:"column/learning/vitepress.md"},e=l(`<h2 id="vitepress部署到github任意仓库详细步骤" tabindex="-1">vitepress部署到github任意仓库详细步骤 <a class="header-anchor" href="#vitepress部署到github任意仓库详细步骤" aria-label="Permalink to &quot;vitepress部署到github任意仓库详细步骤&quot;">​</a></h2><p>1.将vitepress项目发布到github的公开仓库，设定该项目命名为vitepress-blog 2.从vscode中创建新分支gh-pages,发布该分支到github上 3.切回main分支,在项目根目录下创建脚本文件.deploy.sh,内容如下:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
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
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span></code></pre></div><p>4.在github上的vitepress-blog仓库中进行操作:点击setting，点击pages，找到Branch项,修改分支为gh-pages,根目录为/(root)，点击save 5.修改.vitepress/config.ts,添加base属性和值</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vitepress-blog/</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>6.打开git bash,执行命令:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 将.deploy.sh 文件设置为可执行文件</span></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">+x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.deploy.sh</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 运行脚本文件.deploy.sh</span></span>
<span class="line"><span style="color:#FFCB6B;">./.deploy.sh</span></span></code></pre></div>`,7),t=[e];function o(c,i,r,y,C,D){return n(),a("div",null,t)}const d=s(p,[["render",o]]);export{g as __pageData,d as default};
