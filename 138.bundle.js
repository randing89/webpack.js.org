(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{432:function(n,s,a){"use strict";a.r(s),s.default='<p>Speed up development by <b>automatically installing &#x26; saving dependencies</b> with Webpack.</p>\n<p>It is inefficient to <kbd>Ctrl-C</kbd> your\nbuild script &#x26; server just to install\na dependency you didn\'t know you needed until now.</p>\n<p>Instead, use <code>require</code> or <code>import</code> how you normally would and <code>npm install</code>\nwill happen <strong>automatically to install &#x26; save missing dependencies</strong> while you work!</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash">$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev npm-install-webpack-plugin</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In your <code>webpack.config.js</code>:</p>\n<pre><code class="hljs language-js">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">NpmInstallPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span></code></pre>\n<p><strong>This is equivalent to</strong>:</p>\n<pre><code class="hljs language-js">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">NpmInstallPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// Use --save or --save-dev</span>\n    dev<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// Install missing peerDependencies</span>\n    peerDependencies<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// Reduce amount of console logging</span>\n    quiet<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// npm command used inside company, yarn is not supported yet</span>\n    npm<span class="token punctuation">:</span> <span class="token string">\'tnpm\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span></code></pre>\n<p>You can provide a <code>Function</code> to the <code>dev</code> to make it dynamic:</p>\n<pre><code class="hljs language-js">plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token keyword">new</span> <span class="token class-name">NpmInstallPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    dev<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">[</span>\n        <span class="token string">"babel-preset-react-hmre"</span><span class="token punctuation">,</span>\n        <span class="token string">"webpack-dev-middleware"</span><span class="token punctuation">,</span>\n        <span class="token string">"webpack-hot-middleware"</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span></code></pre>\n<h2 id="demo">Demo<a href="#demo" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><img src="https://cloud.githubusercontent.com/assets/15182/12540538/6a4e8f1a-c2d0-11e5-97ee-4ddaf6892645.gif" alt="npm-install-webpack-plugin demo"></p>\n<h2 id="features">Features<a href="#features" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Works with both Webpack <code>^v1.12.0</code> and <code>^2.1.0-beta.0</code>.</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Auto-installs <code>.babelrc</code> plugins &#x26; presets.</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports both ES5 &#x26; ES6 Modules.\n(e.g. <code>require</code>, <code>import</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports Namespaced packages.\n(e.g. <code>@cycle/dom</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports Dot-delimited packages.\n(e.g. <code>lodash.capitalize</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports CSS imports.\n(e.g. <code>@import "~bootstrap"</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports Webpack loaders.\n(e.g. <code>babel-loader</code>, <code>file-loader</code>, etc.)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports inline Webpack loaders.\n(e.g. <code>require("bundle?lazy!./App"</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Auto-installs missing <code>peerDependencies</code>.\n(e.g. <code>@cycle/core</code> will automatically install <code>rx@*</code>)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Supports Webpack\'s <code>resolve.alias</code> &#x26; <code>resolve.root</code> configuration.\n(e.g. <code>require("react")</code> can alias to <code>react-lite</code>)</li>\n</ul>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/15182?v=3&s=150">\n        </br>\n        <a href="https://github.com/ericclemmons">Eric Clemmons</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/226692?v=3&s=150">\n        </br>\n        <a href="https://github.com/insin">Jonny Buchanan</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);