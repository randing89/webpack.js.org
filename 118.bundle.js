(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{412:function(n,s,a){"use strict";a.r(s),s.default='<p>Adds CSS to the DOM by injecting a <code>&#x3C;style></code> tag</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> style-loader --save-dev</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>It\'s recommended to combine <code>style-loader</code> with the <a href="/loaders/css-loader/"><code>css-loader</code></a></p>\n<p><strong>component.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./file.css\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 id="locals-css-modules"><code>Locals (CSS Modules)</code><a href="#locals-css-modules" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>When using <a href="https://github.com/webpack/css-loader#css-scope">local scoped CSS</a> the module exports the generated identifiers (locals).</p>\n<p><strong>component.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./file.css\'</span><span class="token punctuation">;</span>\n\nstyle<span class="token punctuation">.</span>className <span class="token operator">===</span> <span class="token string">\'z849f98ca812\'</span><span class="token punctuation">;</span></code></pre>\n<h3 id="url"><code>Url</code><a href="#url" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>It\'s also possible to add a URL <code>&#x3C;link href="path/to/file.css" rel="stylesheet"></code> instead of inlining the CSS <code>{String}</code> with <code>&#x3C;style>&#x3C;/style></code> tag.</p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> url <span class="token keyword">from</span> <span class="token string">\'file.css\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'style-loader/url\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'file-loader\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/file.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n<blockquote>\n<p>ℹ️ Source maps and assets referenced with <code>url</code>: when style loader is used with <code>{ options: { sourceMap: true } }</code> option, the CSS modules will be generated as <code>Blob</code>s, so relative paths don\'t work (they would be relative to <code>chrome:blob</code> or <code>chrome:devtools</code>). In order for assets to maintain correct paths setting <code>output.publicPath</code> property of webpack configuration must be set, so that absolute paths are generated. Alternatively you can enable the <code>convertToAbsoluteUrls</code> option mentioned above.</p>\n</blockquote>\n<h3 id="useable"><code>Useable</code><a href="#useable" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>The <code>style-loader</code> injects the styles lazily making them useable on-demand via <code>style.use()</code> / <code>style.unuse()</code></p>\n<p>By convention the <code>Reference Counter API</code> should be bound to <code>.useable.css</code> and the <code>.css</code> should be loaded with basic <code>style-loader</code> usage.(similar to other file types, i.e. <code>.useable.less</code> and <code>.less</code>).</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/\\.useable\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">"style-loader"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">"css-loader"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.useable\\.css$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">"style-loader/useable"</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">"css-loader"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n<h4 id="reference-counter-api"><code>Reference Counter API</code><a href="#reference-counter-api" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>component.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./file.css\'</span><span class="token punctuation">;</span>\n\nstyle<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// = style.ref();</span>\nstyle<span class="token punctuation">.</span><span class="token function">unuse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// = style.unref();</span></code></pre>\n<p>Styles are not added on <code>import/require()</code>, but instead on call to <code>use</code>/<code>ref</code>. Styles are removed from page if <code>unuse</code>/<code>unref</code> is called exactly as often as <code>use</code>/<code>ref</code>.</p>\n<blockquote>\n<p>⚠️ Behavior is undefined when <code>unuse</code>/<code>unref</code> is called more often than <code>use</code>/<code>ref</code>. Don\'t do that.</p>\n</blockquote>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n<thead>\n<tr>\n<th align="center">Name</th>\n<th align="center">Type</th>\n<th align="center">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>hmr</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>true</code></td>\n<td align="left">Enable/disable Hot Module Replacement (HMR), if disabled no HMR Code will be added (good for non local development/production)</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>base</code></strong><p class="description mobile"><code>{Number}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Number}</code></td>\n<td align="center"><code>true</code></td>\n<td align="left">Set module ID base (DLLPlugin)</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>attrs</code></strong><p class="description mobile"><code>{Object}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Object}</code></td>\n<td align="center"><code>{}</code></td>\n<td align="left">Add custom attrs to \n<code>&#x3C;style>&#x3C;/style></code></td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>transform</code></strong><p class="description mobile"><code>{Function}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Function}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">Transform/Conditionally load CSS by passing a transform/condition function</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>insertAt</code></strong><p class="description mobile"><code>{String\\|Object}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String\\|Object}</code></td>\n<td align="center"><code>bottom</code></td>\n<td align="left">Inserts \n<code>&#x3C;style>&#x3C;/style></code>\n at the given position</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>insertInto</code></strong><p class="description mobile"><code>{String\\|Function}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{String\\|Function}</code></td>\n<td align="center"><code>&#x3C;head></code></td>\n<td align="left">Inserts \n<code>&#x3C;style>&#x3C;/style></code>\n into the given position</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>singleton</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>undefined</code></td>\n<td align="left">Reuses a single \n<code>&#x3C;style>&#x3C;/style></code>\n element, instead of adding/removing individual elements for each required module.</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>sourceMap</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">Enable/Disable Sourcemaps</td>\n</tr>\n<tr>\n<td align="center"><div class="title"><p>Name</p><p>Type</p><p>Default</p><p>Description</p></div>\n<div class="content"><p><strong><code>convertToAbsoluteUrls</code></strong><p class="description mobile"><code>{Boolean}</code></p></p></div></td>\n<td align="center" class="description desktop"><code>{Boolean}</code></td>\n<td align="center"><code>false</code></td>\n<td align="left">Converts relative URLs to absolute urls, when source maps are enabled</td>\n</tr>\n</tbody>\n</table>\n<h3 id="hmr"><code>hmr</code><a href="#hmr" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Enable/disable Hot Module Replacement (HMR), if disabled no HMR Code will be added.\nThis could be used for non local development and production.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    hmr<span class="token punctuation">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="base"><code>base</code><a href="#base" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>This setting is primarily used as a workaround for <a href="https://github.com/webpack-contrib/style-loader/issues/163">css clashes</a> when using one or more <a href="https://robertknight.github.io/posts/webpack-dll-plugins/">DllPlugin</a>\'s. <code>base</code> allows you to prevent either the <em>app</em>\'s css (or <em>DllPlugin2</em>\'s css) from overwriting <em>DllPlugin1</em>\'s css by specifying a css module id base which is greater than the range used by <em>DllPlugin1</em> e.g.:</p>\n<p><strong>webpack.dll1.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'css-loader\'</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>webpack.dll2.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span> base<span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">\'css-loader\'</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>webpack.app.config.js</strong></p>\n<pre><code>{\n  test: /\\.css$/,\n  use: [\n    { loader: \'style-loader\', options: { base: 2000 } },\n    \'css-loader\'\n  ]\n}\n</code></pre>\n<h3 id="attrs"><code>attrs</code><a href="#attrs" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If defined, style-loader will attach given attributes with their values on <code>&#x3C;style></code> / <code>&#x3C;link></code> element.</p>\n<p><strong>component.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">\'./file.css\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">\'id\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'css-loader\'</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>style</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>style</span><span class="token punctuation">></span></span></code></pre>\n<h4 id="url-1"><code>Url</code><a href="#url-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>component.js</strong></p>\n<pre><code class="hljs language-js"><span class="token keyword">import</span> link <span class="token keyword">from</span> <span class="token string">\'./file.css\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'style-loader/url\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token string">\'id\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">{</span> loader<span class="token punctuation">:</span> <span class="token string">\'file-loader\'</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="transform"><code>transform</code><a href="#transform" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>A <code>transform</code> is a function that can modify the css just before it is loaded into the page by the style-loader.\nThis function will be called on the css that is about to be loaded and the return value of the function will be loaded into the page instead of the original css.\nIf the return value of the <code>transform</code> function is falsy, the css will not be loaded into the page at all.</p>\n<blockquote>\n<p>⚠️ In case you are using ES Module syntax in <code>tranform.js</code> then, you <strong>need to transpile</strong> it or otherwise it will throw an <code>{Error}</code>.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    transform<span class="token punctuation">:</span> <span class="token string">\'path/to/transform.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>transform.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Here we can change the original css</span>\n  <span class="token keyword">const</span> transformed <span class="token operator">=</span> css<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'.classNameA\'</span><span class="token punctuation">,</span> <span class="token string">\'.classNameB\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> transformed<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="conditional"><code>Conditional</code><a href="#conditional" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    transform<span class="token punctuation">:</span> <span class="token string">\'path/to/conditional.js\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p><strong>conditional.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>css<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// If the condition is matched load [and transform] the CSS</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>css<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'something I want to check\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> css<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// If a falsy value is returned, the CSS won\'t be loaded</span>\n  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="insertat"><code>insertAt</code><a href="#insertat" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>By default, the style-loader appends <code>&#x3C;style></code> elements to the end of the style target, which is the <code>&#x3C;head></code> tag of the page unless specified by <code>insertInto</code>. This will cause CSS created by the loader to take priority over CSS already present in the target. To insert style elements at the beginning of the target, set this query parameter to \'top\', e.g</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    insertAt<span class="token punctuation">:</span> <span class="token string">\'top\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>A new <code>&#x3C;style></code> element can be inserted before a specific element by passing an object, e.g.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    insertAt<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        before<span class="token punctuation">:</span> <span class="token string">\'#id\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="insertinto"><code>insertInto</code><a href="#insertinto" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>By default, the style-loader inserts the <code>&#x3C;style></code> elements into the <code>&#x3C;head></code> tag of the page. If you want the tags to be inserted somewhere else you can specify a CSS selector for that element here. If you target an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement">IFrame</a> make sure you have sufficient access rights, the styles will be injected into the content document head.</p>\n<p>You can also pass function to override default behavior and insert styles in your container, e.g</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    insertInto<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#root"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Using function you can insert the styles into a <a href="https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot">ShadowRoot</a>, e.g</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    insertInto<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#root"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>shadowRoot<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="singleton"><code>singleton</code><a href="#singleton" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If defined, the style-loader will reuse a single <code>&#x3C;style>&#x3C;/style></code> element, instead of adding/removing individual elements for each required module.</p>\n<blockquote>\n<p>ℹ️ This option is on by default in IE9, which has strict limitations on the number of style tags allowed on a page. You can enable or disable it with the singleton option.</p>\n</blockquote>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    singleton<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="sourcemap"><code>sourceMap</code><a href="#sourcemap" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Enable/Disable source map loading</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h3 id="converttoabsoluteurls"><code>convertToAbsoluteUrls</code><a href="#converttoabsoluteurls" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>If convertToAbsoluteUrls and sourceMaps are both enabled, relative urls will be converted to absolute urls right before the css is injected into the page. This resolves <a href="https://github.com/webpack/style-loader/pull/96">an issue</a> where relative resources fail to load when source maps are enabled. You can enable it with the convertToAbsoluteUrls option.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js"><span class="token punctuation">{</span>\n  loader<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    sourceMap<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    convertToAbsoluteUrls<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/bebraw">\n          <img width="150" height="150" src="https://github.com/bebraw.png?v=3&s=150">\n          </br>\n          Juho Vepsäläinen\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/d3viant0ne">\n          <img width="150" height="150" src="https://github.com/d3viant0ne.png?v=3&s=150">\n          </br>\n          Joshua Wiens\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/sapegin">\n          <img width="150" height="150" src="https://github.com/sapegin.png?v=3&s=150">\n          </br>\n          Artem Sapegin\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/michael-ciniawsky">\n          <img width="150" height="150" src="https://github.com/michael-ciniawsky.png?v=3&s=150">\n          </br>\n          Michael Ciniawsky\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/evilebottnawi">\n          <img width="150" height="150" src="https://github.com/evilebottnawi.png?v=3&s=150">\n          </br>\n          Alexander Krasnoyarov\n        </a>\n      </td>\n    </tr>\n    <tr>\n      <td align="center">\n        <a href="https://github.com/sokra">\n          <img width="150" height="150" src="https://github.com/sokra.png?v=3&s=150">\n          </br>\n          Tobias Koppers\n        </a>\n      </td>\n      <td align="center">\n        <a href="https://github.com/SpaceK33z">\n          <img width="150" height="150" src="https://github.com/SpaceK33z.png?v=3&s=150">\n          </br>\n          Kees Kluskens\n        </a>\n      </td>\n    <tr>\n  <tbody>\n</table>\n'}}]);