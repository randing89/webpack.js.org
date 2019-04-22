(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{396:function(n,a,s){"use strict";s.r(a),a.default='<p><a href="https://npmjs.com/package/jshint-loader"><img src="https://img.shields.io/npm/v/jshint-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/jshint-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/jshint-loader"><img src="https://david-dm.org/webpack-contrib/jshint-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/jshint-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/jshint-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>A JSHint loader module for webpack. Runs <a href="http://jshint.com/">JSHint</a> on\nJavaScript files in a bundle at build-time.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>jshint-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install jshint-loader --save-dev\n</code></pre>\n<p>Then add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/.js/</span><span class="token punctuation">,</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            loader<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`jshint-loader`</span></span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token operator">...</span>options<span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>All valid JSHint options are valid on this object, in addition to the custom\nloader options listed below:</p>\n<p>delete options.;\ndelete options.;\ndelete options.;</p>\n<h3 id="emiterrors"><code>emitErrors</code><a href="#emiterrors" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>undefined</code></p>\n<p>Instructs the loader to emit all JSHint warnings and errors as webpack errors.</p>\n<h3 id="failonhint"><code>failOnHint</code><a href="#failonhint" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Boolean</code>\nDefault: <code>undefined</code></p>\n<p>Instructs the loader to cause the webpack build to fail on all JSHint warnings\nand errors.</p>\n<h3 id="reporter"><code>reporter</code><a href="#reporter" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Function</code>\nDefault: <code>undefined</code></p>\n<p>A function used to format and emit JSHint warnings and errors.</p>\n<h2 id="custom-reporter">Custom Reporter<a href="#custom-reporter" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>By default, <code>jshint-loader</code> will provide a default reporter.</p>\n<p>However, if you prefer a custom reporter, pass a function under the <code>reporter</code>\nproperty in <code>jshint</code> options. (see <em>usage</em> above)</p>\n<p>The reporter function will be passed an array of errors/warnings produced by\nJSHint with the following structure:</p>\n<pre><code class="hljs language-js"><span class="token punctuation">[</span>\n<span class="token punctuation">{</span>\n    id<span class="token punctuation">:</span>        <span class="token punctuation">[</span>string<span class="token punctuation">,</span> usually <span class="token string">\'(error)\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    code<span class="token punctuation">:</span>      <span class="token punctuation">[</span>string<span class="token punctuation">,</span> error<span class="token operator">/</span>warning code<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    reason<span class="token punctuation">:</span>    <span class="token punctuation">[</span>string<span class="token punctuation">,</span> error<span class="token operator">/</span>warning message<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    evidence<span class="token punctuation">:</span>  <span class="token punctuation">[</span>string<span class="token punctuation">,</span> a piece <span class="token keyword">of</span> code that generated <span class="token keyword">this</span> error<span class="token punctuation">]</span>\n    line<span class="token punctuation">:</span>      <span class="token punctuation">[</span>number<span class="token punctuation">]</span>\n    character<span class="token punctuation">:</span> <span class="token punctuation">[</span>number<span class="token punctuation">]</span>\n    scope<span class="token punctuation">:</span>     <span class="token punctuation">[</span>string<span class="token punctuation">,</span> message scope<span class="token punctuation">;</span>\n                usually <span class="token string">\'(main)\'</span> unless the code was eval\'ed<span class="token punctuation">]</span>\n\n    <span class="token punctuation">[</span><span class="token operator">+</span> a few other legacy fields that you don\'t need to worry about<span class="token punctuation">.</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token comment">// ...</span>\n<span class="token comment">// more errors/warnings</span>\n<span class="token punctuation">]</span></code></pre>\n<p>The reporter function will be excuted with the loader context as <code>this</code>. You may\nemit messages using <code>this.emitWarning(...)</code> or <code>this.emitError(...)</code>. See\n<a href="/api/loaders/#the-loader-context">webpack docs on loader context</a>.</p>\n<p><em>Note: JSHint reporters are <strong>not compatible</strong> with JSHint-loader!\nThis is due to the fact that reporter input is only processed from one file; not\nmultiple files. Error reporting in this manner differs from\n<a href="http://www.jshint.com/docs/reporters/">traditional reporters</a> for JSHint\nsince the loader plugin (i.e. JSHint-loader) is executed for each source file;\nand thus the reporter is executed for each file.</em></p>\n<p>The output in webpack CLI will usually be:</p>\n<pre><code class="hljs language-js"><span class="token operator">...</span>\n<span class="token constant">WARNING</span> <span class="token keyword">in</span> <span class="token punctuation">.</span><span class="token operator">/</span>path<span class="token operator">/</span>to<span class="token operator">/</span>file<span class="token punctuation">.</span>js\n<span class="token operator">&#x3C;</span>reporter output<span class="token operator">></span>\n<span class="token operator">...</span></code></pre>\n<p>`</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/jshint-loader/blob/master/.github/CONTRIBUTING">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/jshint-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}}]);