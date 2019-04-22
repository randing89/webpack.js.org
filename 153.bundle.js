(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{447:function(n,a,s){"use strict";s.r(a),a.default='<p>The <a href="https://github.com/jantimon/html-webpack-plugin"><code>HtmlWebpackPlugin</code></a> simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using <a href="https://lodash.com/docs#template">lodash templates</a>, or use your own <a href="/loaders">loader</a>.</p>\n<h2 id="installation">Installation<a href="#installation" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin</code></pre>\n<h2 id="basic-usage">Basic Usage<a href="#basic-usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The plugin will generate an HTML5 file for you that includes all your webpack\nbundles in the body using <code>script</code> tags. Just add the plugin to your webpack\nconfig as follows:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'html-webpack-plugin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'index.js\'</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'index_bundle.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>This will generate a file <code>dist/index.html</code> containing the following:</p>\n<pre><code class="hljs language-html"><span class="token doctype">&#x3C;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>title</span><span class="token punctuation">></span></span>webpack App<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>index_bundle.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&#x3C;/</span>html</span><span class="token punctuation">></span></span></code></pre>\n<p>If you have multiple webpack entry points, they will all be included with <code>script</code>\ntags in the generated HTML.</p>\n<p>If you have any CSS assets in webpack\'s output (for example, CSS extracted\nwith the <a href="/plugins/mini-css-extract-plugin/">MiniCssExtractPlugin</a>)\nthen these will be included with <code>&#x3C;link></code> tags in the HTML head.</p>\n<h2 id="configuration">Configuration<a href="#configuration" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>For all configuration options, please see the <a href="https://github.com/jantimon/html-webpack-plugin#options">plugin documentation</a>.</p>\n<h2 id="third-party-addons">Third party addons<a href="#third-party-addons" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The plugin supports addons. For a list see the <a href="https://github.com/jantimon/html-webpack-plugin#plugins">documentation</a>.</p>\n'}}]);