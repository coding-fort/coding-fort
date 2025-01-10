(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{756:function(e,o,s){"use strict";s.r(o);var t=s(25),c=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_8-介绍一下-webpack-scope-hoisting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_8-介绍一下-webpack-scope-hoisting"}},[e._v("#")]),e._v(" 8_介绍一下 webpack scope hoisting")]),e._v(" "),o("p",[o("bwp"),e._v(" "),o("code",[e._v("scope hoisting")]),e._v(" 是 webpack 的内置优化，它是针对模块的优化，在生产环境打包时会自动开启。")],1),e._v(" "),o("p",[e._v("在未开启"),o("code",[e._v("scope hoisting")]),e._v(" 时，webpack 会将每个模块的代码放置在一个独立的函数环境中，这样是为了保证模块的作用域互不干扰。")]),e._v(" "),o("p",[o("code",[e._v("scope hoisting")]),e._v(" 是将多个模块的代码合并到一个函数环境中执行。在这一过程中，webpack 会按照顺序正确的合并模块代码，同时对涉及的标识符作适当的处理以避免重名。")]),e._v(" "),o("p",[e._v("这样做的好处是减少了函数的调用，对运行效率有一定的提升，同时也降低了打包体积。")]),e._v(" "),o("p",[e._v("但"),o("code",[e._v("scope hoisting")]),e._v(" 的启用是有前提的，如果遇到某些模块多次被其他模块引用，或者使用了动态导入的模块，或者是非 ESM 模块，都不会有"),o("code",[e._v("scope hoisting")])])])}),[],!1,null,null,null);o.default=c.exports}}]);