(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{416:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/url-loader"><img src="https://img.shields.io/npm/v/url-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/url-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/url-loader"><img src="https://david-dm.org/webpack-contrib/url-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/url-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/url-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=url-loader"><img src="https://packagephobia.now.sh/badge?p=url-loader" alt="size"></a></p>\n<p>A loader for webpack which transforms files into base64 URIs.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>url-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install url-loader --save-dev\n</code></pre>\n<p><code>url-loader</code> works like\n<a href="/loaders/file-loader/"><code>file-loader</code></a>, but can return\na DataURL if the file is smaller than a byte limit.</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> img <span class="token keyword">from</span> <span class="token string">\'./image.png\'</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.(png|jpg|gif)$/i</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              limit<span class="token punctuation">:</span> <span class="token number">8192</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="fallback"><code>fallback</code><a href="#fallback" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>\'file-loader\'</code></p>\n<p>Specifies an alternative loader to use when a target file\'s size exceeds the\nlimit set in the <code>limit</code> option.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fallback<span class="token punctuation">:</span> <span class="token string">\'responsive-loader\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>The fallback loader will receive the same configuration options as url-loader.</p>\n<p>For example, to set the quality option of a responsive-loader above use:</p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    fallback<span class="token punctuation">:</span> <span class="token string">\'responsive-loader\'</span><span class="token punctuation">,</span>\n    quality<span class="token punctuation">:</span> <span class="token number">85</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="limit"><code>limit</code><a href="#limit" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Number</code>\nDefault: <code>undefined</code></p>\n<p>A <code>Number</code> specifying the maximum size of a file in bytes. If the file is\ngreater than the limit,\n<a href="/loaders/file-loader/"><code>file-loader</code></a> is used by\ndefault and all query parameters are passed to it. Using an alternative to\n<code>file-loader</code> is enabled via the <code>fallback</code> option.</p>\n<p>The limit can be specified via loader options and defaults to no limit.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    limit<span class="token punctuation">:</span> <span class="token number">8192</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="mimetype"><code>mimetype</code><a href="#mimetype" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>(file extension)</code></p>\n<p>Sets the MIME type for the file to be transformed. If unspecified the file\nextensions will be used to lookup the MIME type.</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'url-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mimetype<span class="token punctuation">:</span> <span class="token string">\'image/png\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/url-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/url-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);