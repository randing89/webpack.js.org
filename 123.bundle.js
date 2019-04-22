(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{417:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/val-loader"><img src="https://img.shields.io/npm/v/val-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/val-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/val-loader"><img src="https://david-dm.org/webpack-contrib/val-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/val-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/val-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>A webpack loader which executes a given module, and returns the result of the\nexecution at build-time, when the module is required in the bundle. In this way,\nthe loader changes a module from code to a result.</p>\n<p>Another way to view <code>val-loader</code>, is that it allows a user a way to make their\nown custom loader logic, without having to write a custom loader.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>val-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install val-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// target-file.js</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">\'module.exports = 42;\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/target-file.js$/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`val-loader`</span></span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// src/entry.js</span>\n<span class="token keyword">const</span> answer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'test-file\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="return-object-properties">Return Object Properties<a href="#return-object-properties" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Targeted modules of this loader must export either a <code>Function</code> or <code>Promise</code>\nthat returns an object containing a <code>code</code> property at a minimum, but can\ncontain any number of additional properties.</p>\n<h3 id="code"><code>code</code><a href="#code" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String|Buffer</code>\nDefault: <code>undefined</code>\n<em>Required</em></p>\n<p>Code passed along to webpack or the next loader that will replace the module.</p>\n<h3 id="sourcemap"><code>sourceMap</code><a href="#sourcemap" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Object</code>\nDefault: <code>undefined</code></p>\n<p>A source map passed along to webpack or the next loader.</p>\n<h3 id="ast"><code>ast</code><a href="#ast" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[Object]</code>\nDefault: <code>undefined</code></p>\n<p>An <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">Abstract Syntax Tree</a>\nthat will be passed to the next loader. Useful to speed up the build time if the\nnext loader uses the same AST.</p>\n<h3 id="dependencies"><code>dependencies</code><a href="#dependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[String]</code>\nDefault: <code>[]</code></p>\n<p>An array of absolute, native paths to file dependencies that should be watched\nby webpack for changes.</p>\n<h3 id="contextdependencies"><code>contextDependencies</code><a href="#contextdependencies" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[String]</code>\nDefault: <code>[]</code></p>\n<p>An array of absolute, native paths to directory dependencies that should be\nwatched by webpack for changes.</p>\n<h3 id="cacheable"><code>cacheable</code><a href="#cacheable" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>false</code></p>\n<p>If <code>true</code>, specifies that the code can be re-used in watch mode if none of the\n<code>dependencies</code> have changed.</p>\n<h2 id="examples">Examples<a href="#examples" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In this example the loader is configured to operator on a file name of\n<code>years-in-ms.js</code>, execute the code, and store the result in the bundle as the\nresult of the execution. This example passes <code>years</code> as an <code>option</code>, which\ncorresponds to the <code>years</code> parameter in the target module exported function:</p>\n<pre><code class="hljs language-js"><span class="token comment">// years-in-ms.js</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">yearsInMs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> years <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value <span class="token operator">=</span> years <span class="token operator">*</span> <span class="token number">365</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>\n  <span class="token comment">// NOTE: this return value will replace the module in the bundle</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token punctuation">:</span> <span class="token string">\'module.exports = \'</span> <span class="token operator">+</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src/years-in-ms.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token string">\'val-loader\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n              years<span class="token punctuation">:</span> <span class="token number">10</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>In the bundle, requiring the module then returns:</p>\n<pre><code class="hljs language-js"><span class="token comment">// ... bundle code ...</span>\n\n  <span class="token keyword">const</span> tenYearsMs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'years-in-ms\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 315360000000</span>\n\n<span class="token comment">// ... bundle code ...</span></code></pre>\n<p>require("val-loader!tenyearsinms") == 315360000000</p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/val-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);