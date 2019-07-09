(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{370:function(n,s,e){"use strict";e.r(s),s.default='<p><em>Tree shaking</em> is a term commonly used in the JavaScript context for dead-code elimination. It relies on the <a href="http://exploringjs.com/es6/ch_modules.html#static-module-structure">static structure</a> of ES2015 module syntax, i.e. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"><code>import</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"><code>export</code></a>. The name and concept have been popularized by the ES2015 module bundler <a href="https://github.com/rollup/rollup">rollup</a>.</p>\n<p>The webpack 2 release came with built-in support for ES2015 modules (alias <em>harmony modules</em>) as well as unused module export detection. The new webpack 4 release expands on this capability with a way to provide hints to the compiler via the <code>"sideEffects"</code> <code>package.json</code> property to denote which files in your project are "pure" and therefore safe to prune if unused.</p>\n<blockquote class="tip">\n<p>The remainder of this guide will stem from <a href="/guides/getting-started">Getting Started</a>. If you haven\'t read through that guide already, please do so now.</p>\n</blockquote>\n<h2 id="add-a-utility">Add a Utility<a href="#add-a-utility" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Let\'s add a new utility file to our project, <code>src/math.js</code>, that exports two functions:</p>\n<p><strong>project</strong></p>\n<pre><code class="hljs language-diff">webpack-demo\n|- package.json\n|- webpack.config.js\n|- /dist\n  |- bundle.js\n  |- index.html\n|- /src\n  |- index.js\n<span class="token inserted">+ |- math.js</span>\n|- /node_modules</code></pre>\n<p><strong>src/math.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Set the <code>mode</code> configuration option to <a href="/configuration/mode/#mode-development">development</a> to make sure that the bundle is not minified:</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'bundle.js\',\n    path: path.resolve(__dirname, \'dist\')\n<span class="token deleted">- }</span>\n<span class="token inserted">+ },</span>\n<span class="token inserted">+ mode: \'development\',</span>\n<span class="token inserted">+ optimization: {</span>\n<span class="token inserted">+   usedExports: true</span>\n<span class="token inserted">+ }</span>\n};</code></pre>\n<p>With that in place, let\'s update our entry script to utilize one of these new methods and remove <code>lodash</code> for simplicity:</p>\n<p><strong>src/index.js</strong></p>\n<pre><code class="hljs language-diff"><span class="token deleted">- import _ from \'lodash\';</span>\n<span class="token inserted">+ import { cube } from \'./math.js\';</span>\n\n  function component() {\n<span class="token deleted">-   const element = document.createElement(\'div\');</span>\n<span class="token inserted">+   const element = document.createElement(\'pre\');</span>\n\n<span class="token deleted">-   // Lodash, now imported by this script</span>\n<span class="token deleted">-   element.innerHTML = _.join([\'Hello\', \'webpack\'], \' \');</span>\n<span class="token inserted">+   element.innerHTML = [</span>\n<span class="token inserted">+     \'Hello webpack!\',</span>\n<span class="token inserted">+     \'5 cubed is equal to \' + cube(5)</span>\n<span class="token inserted">+   ].join(\'\\n\\n\');</span>\n\n    return element;\n  }\n\n  document.body.appendChild(component());</code></pre>\n<p>Note that we <strong>did not <code>import</code> the <code>square</code> method</strong> from the <code>src/math.js</code> module. That function is what\'s known as "dead code", meaning an unused <code>export</code> that should be dropped. Now let\'s run our npm script, <code>npm run build</code>, and inspect the output bundle:</p>\n<p><strong>dist/bundle.js (around lines 90 - 100)</strong></p>\n<pre><code class="hljs language-js"><span class="token comment">/* 1 */</span>\n<span class="token comment">/***/</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>module<span class="token punctuation">,</span> __webpack_exports__<span class="token punctuation">,</span> __webpack_require__<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token string">\'use strict\'</span><span class="token punctuation">;</span>\n  <span class="token comment">/* unused harmony export square */</span>\n  <span class="token comment">/* harmony export (immutable) */</span> __webpack_exports__<span class="token punctuation">[</span><span class="token string">\'a\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> cube<span class="token punctuation">;</span>\n  <span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">cube</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Note the <code>unused harmony export square</code> comment above. If you look at the code below it, you\'ll notice that <code>square</code> is not being imported, however, it is still included in the bundle. We\'ll fix that in the next section.</p>\n<h2 id="mark-the-file-as-side-effect-free">Mark the file as side-effect-free<a href="#mark-the-file-as-side-effect-free" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In a 100% ESM module world, identifying side effects is straightforward. However, we aren\'t there just yet, so in the mean time it\'s necessary to provide hints to webpack\'s compiler on the "pureness" of your code.</p>\n<p>The way this is accomplished is the <code>"sideEffects"</code> package.json property.</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-project"</span><span class="token punctuation">,</span>\n  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span></code></pre>\n<p>All the code noted above does not contain side effects, so we can simply mark the property as <code>false</code> to inform webpack that it can safely prune unused exports.</p>\n<blockquote class="tip">\n<p>A "side effect" is defined as code that performs a special behavior when imported, other than exposing one or more exports. An example of this are polyfills, which affect the global scope and usually do not provide an export.</p>\n</blockquote>\n<p>If your code did have some side effects though, an array can be provided instead:</p>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-project"</span><span class="token punctuation">,</span>\n  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"./src/some-side-effectful-file.js"</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>The array accepts relative, absolute, and glob patterns to the relevant files. It uses <a href="https://github.com/micromatch/micromatch#matching-features">micromatch</a> under the hood.</p>\n<blockquote class="tip">\n<p>Note that any imported file is subject to tree shaking. This means if you use something like <code>css-loader</code> in your project and import a CSS file, it needs to be added to the side effect list so it will not be unintentionally dropped in production mode:</p>\n</blockquote>\n<pre><code class="hljs language-json"><span class="token punctuation">{</span>\n  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-project"</span><span class="token punctuation">,</span>\n  <span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"./src/some-side-effectful-file.js"</span><span class="token punctuation">,</span>\n    <span class="token string">"*.css"</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>Finally, <code>"sideEffects"</code> can also be set from the <a href="/configuration/module/#module-rules"><code>module.rules</code> configuration option</a>.</p>\n<h2 id="clarifying-tree-shaking-and-sideeffects">Clarifying tree shaking and <code>sideEffects</code><a href="#clarifying-tree-shaking-and-sideeffects" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The <a href="/configuration/optimization/#optimizationsideeffects"><code>sideEffects</code></a> and <a href="/configuration/optimization/#optimizationusedexports"><code>usedExports</code></a> (more known as tree shaking) optimizations are two different things.</p>\n<p><strong><code>sideEffects</code> is much more effective</strong> since it allows to skip whole modules/files and the complete subtree.</p>\n<p><code>usedExports</code> relies on <a href="https://github.com/terser-js/terser">terser</a> to detect side effects in statements. It is a difficult task in JavaScript and not as effective as straighforward <code>sideEffects</code> flag. It also can\'t skip subtree/dependencies since the spec says that side effects need to be evaluated. While exporting function works fine, React\'s Higher Order Components (HOC) are problematic in this regard.</p>\n<p>Let\'s make an example:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@shopify/polaris\'</span><span class="token punctuation">;</span></code></pre>\n<p>The pre-bundled version looks like this:</p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> hoistStatics <span class="token keyword">from</span> <span class="token string">\'hoist-non-react-statics\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span>_ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> _final <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> _len <span class="token operator">=</span> arguments<span class="token punctuation">.</span>length<span class="token punctuation">,</span> objs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>_len<span class="token punctuation">)</span><span class="token punctuation">,</span> _key <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> _key <span class="token operator">&#x3C;</span> _len<span class="token punctuation">;</span> _key<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    objs<span class="token punctuation">[</span>_key<span class="token punctuation">]</span> <span class="token operator">=</span> arguments<span class="token punctuation">[</span>_key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> _i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> _objs <span class="token operator">=</span> objs<span class="token punctuation">;</span> _i <span class="token operator">&#x3C;</span> _objs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> _i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> obj <span class="token operator">=</span> _objs<span class="token punctuation">[</span>_i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token function">mergeRecursively</span><span class="token punctuation">(</span>_final<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> _final<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">withAppProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">addProvider</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> WithProvider <span class="token operator">=</span>\n    <span class="token comment">/*#__PURE__*/</span>\n    <span class="token keyword">function</span> <span class="token punctuation">(</span>_React$Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// ...</span>\n      <span class="token keyword">return</span> WithProvider<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    WithProvider<span class="token punctuation">.</span>contextTypes <span class="token operator">=</span> WrappedComponent<span class="token punctuation">.</span>contextTypes <span class="token operator">?</span> <span class="token function">merge</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">.</span>contextTypes<span class="token punctuation">,</span> polarisAppProviderContextTypes<span class="token punctuation">)</span> <span class="token punctuation">:</span> polarisAppProviderContextTypes<span class="token punctuation">;</span>\n    <span class="token keyword">var</span> FinalComponent <span class="token operator">=</span> <span class="token function">hoistStatics</span><span class="token punctuation">(</span>WithProvider<span class="token punctuation">,</span> WrappedComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> FinalComponent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> Button$<span class="token number">1</span> <span class="token operator">=</span> <span class="token function">withAppProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...,</span>\n  Button$<span class="token number">1</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>When <code>Button</code> is unused you can effectively remove the <code>export { Button$1 };</code> which leaves all the remaining code. So the question is "Does this code have any side effects or can it be safely removed?". Difficult to say, especially because of this line <code>withAppProvider()(Button)</code>. <code>withAppProvider</code> is called and the return value is also called. Are there any side effects when calling <code>merge</code> or <code>hoistStatics</code>? Are there side effects when assigning <code>WithProvider.contextTypes</code> (Setter?) or when reading <code>WrappedComponent.contextTypes</code> (Getter?).</p>\n<p>Terser actually tries to figure it out, but it doesn\'t know for sure in many cases. This doesn\'t mean that terser is not doing its job well because it can\'t figure it out. It\'s just too difficult to determine it reliably in a dynamic language like JavaScript.</p>\n<p>But we can help terser by using the <code>/*#__PURE__*/</code> annotation. It flags a statement as side effect free. So a simple change would make it possible to tree-shake the code:</p>\n<p><code>var Button$1 = /*#__PURE__*/ withAppProvider()(Button);</code></p>\n<p>This would allow to remove this piece of code. But there are still questions with the imports which need to be included/evaluated because they could contain side effects.</p>\n<p>To tackle this, we use <a href="/guides/tree-shaking/#mark-the-file-as-side-effect-free"><code>"sideEffects"</code></a> property in <code>package.json</code>.</p>\n<p>It similar to <code>/*#__PURE__*/</code> but on a module level instead of a statement level. It says (<code>"sideEffects"</code> property): "If no direct export from a module flagged with no-sideEffects is used, the bundler can skip evaluating the module for side effects.".</p>\n<p>In the Shopify\'s Polaris example original modules look like this:</p>\n<p><strong>index.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token keyword">import</span> <span class="token string">\'./configure\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">\'./types\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">\'./components\'</span><span class="token punctuation">;</span></code></pre>\n<p><strong>components/index.js</strong></p>\n<pre><code class="hljs language-javascript"><span class="token comment">// ...</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Breadcrumbs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./Breadcrumbs\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> Button<span class="token punctuation">,</span> buttonFrom<span class="token punctuation">,</span> buttonsFrom<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./Button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> ButtonGroup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./ButtonGroup\'</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span></code></pre>\n<p><strong>package.json</strong></p>\n<pre><code class="hljs language-json">// ...\n<span class="token property">"sideEffects"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n  <span class="token string">"**/*.css"</span><span class="token punctuation">,</span>\n  <span class="token string">"**/*.scss"</span><span class="token punctuation">,</span>\n  <span class="token string">"./esnext/index.js"</span><span class="token punctuation">,</span>\n  <span class="token string">"./esnext/configure.js"</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n// ...</code></pre>\n<p>For <code>import { Button } from "@shopify/polaris";</code> this has the following implications:</p>\n<ul>\n<li>include it: include the module, evaluate it and continue analysing dependencies</li>\n<li>skip over: don\'t include it, don\'t evaluate it but continue analysing dependencies</li>\n<li>exclude it: don\'t include it, don\'t evaluate it and don\'t analyse dependencies</li>\n</ul>\n<p>Specifically per matching resource(s):</p>\n<ul>\n<li><code>index.js</code>: No direct export is used, but flagged with sideEffects -> include it</li>\n<li><code>configure.js</code>: No export is used, but flagged with sideEffects -> include it</li>\n<li><code>types/index.js</code>: No export is used, not flagged with sideEffects -> exclude it</li>\n<li><code>components/index.js</code>: No direct export is used, not flagged with sideEffects, but reexported exports are used -> skip over</li>\n<li><code>components/Breadcrumbs.js</code>: No export is used, not flagged with sideEffects -> exclude it. This also excluded all dependencies like <code>components/Breadcrumbs.css</code> even if they are flagged with sideEffects.</li>\n<li><code>components/Button.js</code>: Direct export is used, not flagged with sideEffects -> include it</li>\n<li><code>components/Button.css</code>: No export is used, but flagged with sideEffects -> include it</li>\n</ul>\n<p>In this case only 4 modules are included into the bundle:</p>\n<ul>\n<li><code>index.js</code>: pretty much empty</li>\n<li><code>configure.js</code></li>\n<li><code>components/Button.js</code></li>\n<li><code>components/Button.css</code></li>\n</ul>\n<p>After this optimization, other optimizations can still apply. For example: <code>buttonFrom</code> and <code>buttonsFrom</code> exports from <code>Button.js</code> are unused too. <code>usedExports</code> optimization will pick it up and terser may be able to drop some statements from the module.</p>\n<p>Module Concatenation also applies. So that these 4 modules plus the entry module (and probably more dependencies) can be concatenated. <strong><code>index.js</code> has no code generated in the end</strong>.</p>\n<h2 id="minify-the-output">Minify the Output<a href="#minify-the-output" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>So we\'ve cued up our "dead code" to be dropped by using the <code>import</code> and <code>export</code> syntax, but we still need to drop it from the bundle. To do that set the <code>mode</code> configuration option to <a href="/configuration/mode/#mode-production"><code>production</code></a> configuration option.</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-diff">const path = require(\'path\');\n\nmodule.exports = {\n  entry: \'./src/index.js\',\n  output: {\n    filename: \'bundle.js\',\n    path: path.resolve(__dirname, \'dist\')\n  },\n<span class="token deleted">- mode: \'development\',</span>\n<span class="token deleted">- optimization: {</span>\n<span class="token deleted">-   usedExports: true</span>\n<span class="token deleted">- }</span>\n<span class="token inserted">+ mode: \'production\'</span>\n};</code></pre>\n<blockquote class="tip">\n<p>Note that the <code>--optimize-minimize</code> flag can be used to enable <code>TerserPlugin</code> as well.</p>\n</blockquote>\n<p>With that squared away, we can run another <code>npm run build</code> and see if anything has changed.</p>\n<p>Notice anything different about <code>dist/bundle.js</code>? Clearly the whole bundle is now minified and mangled, but, if you look carefully, you won\'t see the <code>square</code> function included but will see a mangled version of the <code>cube</code> function (<code>function r(e){return e*e*e}n.a=r</code>). With minification and tree shaking our bundle is now a few bytes smaller! While that may not seem like much in this contrived example, tree shaking can yield a significant decrease in bundle size when working on larger applications with complex dependency trees.</p>\n<blockquote class="tip">\n<p><a href="/plugins/module-concatenation-plugin">ModuleConcatenationPlugin</a> is needed for the tree shaking to work. It is added by <code>mode: "production"</code>. If you are not using it, remember to add the <a href="/plugins/module-concatenation-plugin">ModuleConcatenationPlugin</a> manually.</p>\n</blockquote>\n<h2 id="conclusion">Conclusion<a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>So, what we\'ve learned is that in order to take advantage of <em>tree shaking</em>, you must...</p>\n<ul>\n<li>Use ES2015 module syntax (i.e. <code>import</code> and <code>export</code>).</li>\n<li>Ensure no compilers transform your ES2015 module syntax into CommonJS modules (this is the default behavior of popular Babel preset @babel/preset-env - see <a href="https://babeljs.io/docs/en/babel-preset-env#modules">documentation</a> for more details).</li>\n<li>Add a <code>"sideEffects"</code> property to your project\'s <code>package.json</code> file.</li>\n<li>Use <a href="/configuration/mode/#mode-production"><code>production</code></a> <code>mode</code> configuration option to enable <a href="/configuration/mode/#usage">various optimizations</a> including minification and tree shaking.</li>\n</ul>\n<p>You can imagine your application as a tree. The source code and libraries you actually use represent the green, living leaves of the tree. Dead code represents the brown, dead leaves of the tree that are consumed by autumn. In order to get rid of the dead leaves, you have to shake the tree, causing them to fall.</p>\n<p>If you are interested in more ways to optimize your output, please jump to the next guide for details on building for <a href="/guides/production">production</a>.</p>\n'}}]);