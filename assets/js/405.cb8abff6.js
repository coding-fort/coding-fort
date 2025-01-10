(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{733:function(t,s,n){"use strict";n.r(s);var a=n(25),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("h3",{attrs:{id:"_1-描述一下对-vue-生命周期的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-描述一下对-vue-生命周期的理解"}},[t._v("#")]),t._v(" 1. 描述一下对 Vue 生命周期的理解")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" Vue 实例从创建到销毁的过程，称为生命周期。\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" Vue 的生命周期包括以下阶段：\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 创建阶段（4 个）\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" beforeCreate：组件实例刚刚被创建，此时组件的 data 和 methods 还没有初始化\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" created：组件实例已经创建完成，此时组件的 data 和 methods 已经初始化\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" beforeMount：组件刚刚被挂载到 DOM 上，此时组件的模板还没有被渲染\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" mounted：组件已经被挂载到 DOM 上，此时组件的模板已经被渲染\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 更新阶段（2 个）\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" beforeUpdate：组件刚刚被更新，此时组件的 data 已经更新，但是模板还没有被渲染\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" updated：组件已经被更新，此时组件的 data 已经更新，模板已经被渲染\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 销毁阶段（2 个）\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" beforeDestroy：组件刚刚被销毁，此时组件的 data 和 methods 还没有销毁\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" destroyed：组件已经被销毁，此时组件的 data 和 methods 已经销毁\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" keep-alive（2 个）\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" activated：组件被激活时调用\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" deactivated：组件被失活时调用\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 异常捕获（1 个）\n     "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" errorCaptured：当捕获到后代组件的错误时调用\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" Vue 3 组合式 API\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" onBeforeMount: 相当于 beforeMount。\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" onMounted: 相当于 mounted。\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" onBeforeUpdate: 相当于 beforeUpdate。\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" onUpdated: 相当于 updated。\n   "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" onBeforeUnmount: 相当于 beforeUnmount。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);