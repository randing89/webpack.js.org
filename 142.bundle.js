(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{436:function(n,s,a){"use strict";a.r(s),s.default='<p>Node-Zopfli plugin for Webpack.</p>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> i -D zopfli-webpack-plugin</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-javascript"><span class="token keyword">var</span> ZopfliPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"zopfli-webpack-plugin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tplugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token keyword">new</span> <span class="token class-name">ZopfliPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\t\tasset<span class="token punctuation">:</span> <span class="token string">"[path].gz[query]"</span><span class="token punctuation">,</span>\n\t\t\talgorithm<span class="token punctuation">:</span> <span class="token string">"zopfli"</span><span class="token punctuation">,</span>\n\t\t\ttest<span class="token punctuation">:</span> <span class="token regex">/\\.(js|html)$/</span><span class="token punctuation">,</span>\n\t\t\tthreshold<span class="token punctuation">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>\n\t\t\tminRatio<span class="token punctuation">:</span> <span class="token number">0.8</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<h2 id="arguments">Arguments<a href="#arguments" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li><code>asset</code>: The target asset name. <code>[file]</code> is replaced with the original asset. <code>[path]</code> is replaced with the path of the original asset and <code>[query]</code> with the query. Defaults to <code>"[path].gz[query]"</code>.</li>\n<li><code>filename</code>: A <code>function(asset)</code> which receives the asset name (after processing <code>asset</code> option) and returns the new asset name. Defaults to <code>false</code>.</li>\n<li><code>algorithm</code>: Can be a <code>function(buf, callback)</code> or a string. For a string the algorithm is taken from <code>zopfli</code>.</li>\n<li><code>test</code>: All assets matching this RegExp are processed. Defaults to every asset.</li>\n<li><code>threshold</code>: Only assets bigger than this size are processed. In bytes. Defaults to <code>0</code>.</li>\n<li><code>minRatio</code>: Only assets that compress better that this ratio are processed. Defaults to <code>0.8</code>.</li>\n<li><code>deleteOriginalAssets</code>: Whether to delete the original assets or not. Defaults to <code>false</code>.</li>\n</ul>\n<h2 id="option-arguments">Option Arguments<a href="#option-arguments" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<ul>\n<li>verbose: Default: false,</li>\n<li>verbose_more: Default: false,</li>\n<li>numiterations: Default: 15,</li>\n<li>blocksplitting: Default: true,</li>\n<li>blocksplittinglast: Default: false,</li>\n<li>blocksplittingmax: Default: 15</li>\n</ul>\n<h2 id="maintainers">Maintainers<a href="#maintainers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<table>\n  <tbody>\n    <tr>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/166921?v=3&s=150">\n        </br>\n        <a href="https://github.com/bebraw">Juho Vepsäläinen</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars2.githubusercontent.com/u/8420490?v=3&s=150">\n        </br>\n        <a href="https://github.com/d3viant0ne">Joshua Wiens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/533616?v=3&s=150">\n        </br>\n        <a href="https://github.com/SpaceK33z">Kees Kluskens</a>\n      </td>\n      <td align="center">\n        <img width="150" height="150"\n        src="https://avatars3.githubusercontent.com/u/3408176?v=3&s=150">\n        </br>\n        <a href="https://github.com/TheLarkInn">Sean Larkin</a>\n      </td>\n    </tr>\n  <tbody>\n</table>\n'}}]);