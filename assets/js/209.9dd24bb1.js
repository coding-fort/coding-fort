(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{533:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开发基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发基础"}},[t._v("#")]),t._v(" 开发基础")]),t._v(" "),s("h2",{attrs:{id:"页面组件-wxml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面组件-wxml"}},[t._v("#")]),t._v(" 页面组件（WXML）")]),t._v(" "),s("p",[t._v("小程序中使用"),s("PRIB",[t._v("WXML(weiXin Markup Language)")]),t._v(" 来实现页面结构。")],1),t._v(" "),s("h3",{attrs:{id:"_1-常见页面组件-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见页面组件-标签"}},[t._v("#")]),t._v(" 1. 常见页面组件（标签）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("标签")]),t._v(" "),s("th",[t._v("功能")]),t._v(" "),s("th",[t._v("标签")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("<view>")]),t._v(" "),s("td",[t._v("视图容器")]),t._v(" "),s("td",[t._v("<icon>")]),t._v(" "),s("td",[t._v("图标文件")])]),t._v(" "),s("tr",[s("td",[t._v("<text>")]),t._v(" "),s("td",[t._v("文本域")]),t._v(" "),s("td",[t._v("<checkbox>")]),t._v(" "),s("td",[t._v("复选框")])]),t._v(" "),s("tr",[s("td",[t._v("<button>")]),t._v(" "),s("td",[t._v("按钮")]),t._v(" "),s("td",[t._v("<radio>")]),t._v(" "),s("td",[t._v("单选框")])]),t._v(" "),s("tr",[s("td",[t._v("<image>")]),t._v(" "),s("td",[t._v("图片")]),t._v(" "),s("td",[t._v("<input>")]),t._v(" "),s("td",[t._v("输入框")])]),t._v(" "),s("tr",[s("td",[t._v("<form>")]),t._v(" "),s("td",[t._v("表单")]),t._v(" "),s("td",[t._v("<progress>")]),t._v(" "),s("td",[t._v("进度条")])])])]),t._v(" "),s("bqw",[t._v("\ninput 组件的type 属性："),s("br"),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("text")]),t._v(" "),s("td",[t._v("文本输入键盘")])]),t._v(" "),s("tr",[s("td",[t._v("number")]),t._v(" "),s("td",[t._v("数字输入键盘")])]),t._v(" "),s("tr",[s("td",[t._v("idcard")]),t._v(" "),s("td",[t._v("身份证输入键盘")])]),t._v(" "),s("tr",[s("td",[t._v("digit")]),t._v(" "),s("td",[t._v("带小数点数字输入键盘")])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-include-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-include-标签"}},[t._v("#")]),t._v(" 2. <include> 标签")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("wxml")]),t._v(" 文件中，可以使用"),s("SUCB",[t._v("<include>")]),t._v(" 标签引用其他文件中的代码（"),s("errb",[t._v("纯 WXMl 代码")]),t._v("）。")],1),t._v(" "),s("ul",[s("li",[t._v("当一个"),s("code",[t._v("wxml")]),t._v(" 页面中的代码过多时，利用"),s("code",[t._v("\\<include>")]),t._v(" 将代码拆分到多个文件中，方便查找代码。")]),t._v(" "),s("li",[t._v("当多个"),s("code",[t._v("wxml")]),t._v(" 页面中有相同的部分时，可以将公共部分抽离出来，保存到单独的"),s("code",[t._v("wxml")]),t._v(" 文件中，再通过"),s("code",[t._v("\\<include>")]),t._v(" 引入，减少重复代码。")])]),t._v(" "),s("h2",{attrs:{id:"页面样式-wxss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面样式-wxss"}},[t._v("#")]),t._v(" 页面样式（WXSS）")]),t._v(" "),s("p",[t._v("WXSS（WeiXin Style Sheets） 用于描述 WXML 的组件样式。WXSS 具有 CSS 大部分特性。")]),t._v(" "),s("h3",{attrs:{id:"_1-尺寸单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-尺寸单位"}},[t._v("#")]),t._v(" 1. 尺寸单位")]),t._v(" "),s("p",[t._v("微信小程序在 WXSS 中加入了新的尺寸单位 rpx（responsive pixel，响应式像素）。")]),t._v(" "),s("p",[t._v("为了方便换算，rpx 单位规定了任何手机屏幕的宽度都为 750rpx（逻辑像素），由小程序内部负责将逻辑像素转换成当前手机中的物理像素。")]),t._v(" "),s("h3",{attrs:{id:"_2-样式导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-样式导入"}},[t._v("#")]),t._v(" 2. 样式导入")]),t._v(" "),s("p",[t._v("在 WXSS 中可以使用"),s("PRIB",[t._v("@import")]),t._v(" 语句导入外联样式表。")],1),t._v(" "),s("div",{staticClass:"language-CSS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" index.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-全局样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-全局样式"}},[t._v("#")]),t._v(" 3. 全局样式")]),t._v(" "),s("p",[t._v("可以在项目根目录下创建全局样式文件"),s("PRIB",[t._v("app.wxss")]),t._v("，将公共样式卸载全局样式文件中。")],1),t._v(" "),s("bqw",[t._v("\n注意：当公共样式文件（app.wxss） 和页面样式文件（pages/index/index.wxss） 发生样式冲突时，页面样式的优先级更高，会覆盖公共样式。\n")]),t._v(" "),s("h2",{attrs:{id:"配置文件-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-json"}},[t._v("#")]),t._v(" 配置文件（*.json）")]),t._v(" "),s("p",[t._v("页面配置分为页面级和应用级，pages 目录下的页面均可以使用 json 文件对页面效果进行配置，而 app.json 是应用级配置文件。")]),t._v(" "),s("h3",{attrs:{id:"_1-页面级配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-页面级配置文件"}},[t._v("#")]),t._v(" 1. 页面级配置文件")]),t._v(" "),s("p",[t._v("在页面级配置文件中，可以修改页面的导航样式，控制页面是否允许上下滚动等。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("navigationBarBackgroundColor")]),t._v(" "),s("td",[t._v("导航栏背景颜色，默认为#000000")])]),t._v(" "),s("tr",[s("td",[t._v("navigationBarTextStyle")]),t._v(" "),s("td",[t._v("导航栏标题颜色，仅支持 black、white（默认）")])]),t._v(" "),s("tr",[s("td",[t._v("navigationBarTitleText")]),t._v(" "),s("td",[t._v("导航栏的标题内容")])]),t._v(" "),s("tr",[s("td",[t._v("backgroundColor")]),t._v(" "),s("td",[t._v("窗口的背景颜色，默认为#ffffff")])]),t._v(" "),s("tr",[s("td",[t._v("backgroundTextStyle")]),t._v(" "),s("td",[t._v("下拉 loading 的样式，仅支持 dark（默认）、light")])]),t._v(" "),s("tr",[s("td",[t._v("enablePullDownRefresh")]),t._v(" "),s("td",[t._v("是否全局开启下拉刷新，默认为 false")])]),t._v(" "),s("tr",[s("td",[t._v("onReachBottomDistance")]),t._v(" "),s("td",[t._v("页面上拉触底事件触发时距页面底部距离（单位 rpx），默认 50")])]),t._v(" "),s("tr",[s("td",[t._v("disableScroll")]),t._v(" "),s("td",[t._v("默认为 false。设置为 true 时，页面整体不能上下滚动")])])])]),t._v(" "),s("bqe",[t._v("\n注意："),s("br"),t._v("\n1. enablePullDownRefresh 设置true，页面可以下拉刷新，当操作诗，会触发下拉刷新时间"),s("PRIB",[t._v("onPullDownRefresh")]),t._v("。"),s("br"),t._v("\n2. onReachBottomDistance 主要用于开发自动加载更多的功能。值越大，加载的时机越提前。如果达到设定值，会触发上拉触底时间"),s("PRIB",[t._v("onReachBottom")]),t._v("。"),s("br")],1),t._v(" "),s("h3",{attrs:{id:"_2-应用级配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-应用级配置文件"}},[t._v("#")]),t._v(" 2. 应用级配置文件")]),t._v(" "),s("p",[t._v("项目根目录下的 app.json 为应用级配置文件。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pages")]),t._v(" "),s("td",[t._v("页面路径列表")])]),t._v(" "),s("tr",[s("td",[t._v("window")]),t._v(" "),s("td",[t._v("全局默认窗口表现")])]),t._v(" "),s("tr",[s("td",[t._v("tabBar")]),t._v(" "),s("td",[t._v("底部 tab 栏的表现")])]),t._v(" "),s("tr",[s("td",[t._v("networkTimeout")]),t._v(" "),s("td",[t._v("网络超时时间")])]),t._v(" "),s("tr",[s("td",[t._v("debug")]),t._v(" "),s("td",[t._v("是否开启调试模式，默认为 false")])]),t._v(" "),s("tr",[s("td",[t._v("requireBackgroundModes")]),t._v(" "),s("td",[t._v("需要在后台使用的能力，如音乐播放")])]),t._v(" "),s("tr",[s("td",[t._v("plugins")]),t._v(" "),s("td",[t._v("使用到的插件")])])])]),t._v(" "),s("p",[t._v("实例")]),t._v(" "),s("div",{staticClass:"language-JSON line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/index/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/logs/logs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/form/form"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarTitleText"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"比较两个数字大小"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"navigationBarBackgroundColor"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#369"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"networkTimeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"页面逻辑-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面逻辑-js"}},[t._v("#")]),t._v(" 页面逻辑（*.js）")]),t._v(" "),s("p",[t._v("页面逻辑分为页面级和应用级，pages 目录下的页面均可以使用 js 文件对页面逻辑进行控制，而 app.js 是应用级页面逻辑文件。")]),t._v(" "),s("h3",{attrs:{id:"_1-页面逻辑文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-页面逻辑文件"}},[t._v("#")]),t._v(" 1. 页面逻辑文件")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/index/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面初始化数据")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期函数")]),t._v("\n    onLoad： "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("页面逻辑通过"),s("errb",[t._v("Page()")]),t._v(" 函数来注册一个页面，通过该对象可以指定页面的初始数据、生命周期函数、事件处理函数等。")],1),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("页面的初始数据")])]),t._v(" "),s("tr",[s("td",[t._v("onLoad")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("生命周期回调函数，监听页面加载，一个页面只会触发一次")])]),t._v(" "),s("tr",[s("td",[t._v("onReady")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("生命周期回调函数，监听页面初次渲染完成，一个页面只会触发一次，可交互")])]),t._v(" "),s("tr",[s("td",[t._v("onShow")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("生命周期回调函数，监听页面显示，例：从后台切入前台时触发")])]),t._v(" "),s("tr",[s("td",[t._v("onHide")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("生命周期回调函数，监听页面隐藏，例：从前台切入后台时触发")])]),t._v(" "),s("tr",[s("td",[t._v("onUnload")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("生命周期回调函数，监听页面卸载，例：使用"),s("errb",[t._v("wx.redirectTo()")]),t._v(" 和"),s("errb",[t._v("wx.navigateBack() ")])],1)]),t._v(" "),s("tr",[s("td",[t._v("onPullDownRefresh")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("页面事件处理函数，监听用户下拉动作")])]),t._v(" "),s("tr",[s("td",[t._v("onReachBottom")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("页面事件处理函数，监听上拉触底")])]),t._v(" "),s("tr",[s("td",[t._v("onShareAppMessage")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("页面事件处理函数，用户单击右上角的分享按钮")])]),t._v(" "),s("tr",[s("td",[t._v("onPageScroll")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("页面事件处理函数，页面滚动会连续触发")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("Any")]),t._v(" "),s("td",[t._v("开发者可以添加任意的函数或者数据，在页面的函数中可以通过"),s("ERRB",[t._v("this.*")]),t._v(" 来访问")],1)])])]),t._v(" "),s("h3",{attrs:{id:"_2-组件事件处理函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件事件处理函数"}},[t._v("#")]),t._v(" 2. 组件事件处理函数")]),t._v(" "),s("h4",{attrs:{id:"对比-e-target-和-e-currenttarget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比-e-target-和-e-currenttarget"}},[t._v("#")]),t._v(" 对比 e.target 和 e.currentTarget")]),t._v(" "),s("ul",[s("li",[t._v("e.target 获取的是子元素的属性值集合")]),t._v(" "),s("li",[t._v("e.currentTarget 获取的是父元素的属性值集合")])]),t._v(" "),s("h4",{attrs:{id:"常用冒泡事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用冒泡事件"}},[t._v("#")]),t._v(" 常用冒泡事件")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件类型")]),t._v(" "),s("th",[t._v("触发条件")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("touchstart")]),t._v(" "),s("td",[t._v("手指触摸动作开始")])]),t._v(" "),s("tr",[s("td",[t._v("touchmove")]),t._v(" "),s("td",[t._v("手指触摸后移动")])]),t._v(" "),s("tr",[s("td",[t._v("touchcancel")]),t._v(" "),s("td",[t._v("手指触摸动作被打断，如来电提醒、弹窗")])]),t._v(" "),s("tr",[s("td",[t._v("touchend")]),t._v(" "),s("td",[t._v("手指触摸动作结束")])]),t._v(" "),s("tr",[s("td",[t._v("tap")]),t._v(" "),s("td",[t._v("手指触摸后马上离开")])]),t._v(" "),s("tr",[s("td",[t._v("longpress")]),t._v(" "),s("td",[t._v("手指触摸后，超过 350ms 再离开。如果指定了事件回调函数并触发了这个事件，tap 事件将不会被触发")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h4",{attrs:{id:"事件绑定与冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定与冒泡"}},[t._v("#")]),t._v(" 事件绑定与冒泡")]),t._v(" "),s("p",[t._v("为组件绑定事件有两种方式，bind 事件绑定、catch 事件绑定。")]),t._v(" "),s("ul",[s("li",[t._v("bind 事件绑定特点是，不会阻止冒泡事件向上冒泡")]),t._v(" "),s("li",[t._v("catch 事件绑定特点是，可以阻止冒泡事件向上冒泡")])]),t._v(" "),s("h3",{attrs:{id:"_3-应用级逻辑-注册程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-应用级逻辑-注册程序"}},[t._v("#")]),t._v(" 3. 应用级逻辑（注册程序）")]),t._v(" "),s("p",[t._v("在项目根目录下 app.js 文件中可以使用 App() 函数来实现注册小程序，以及小程序启动、显示、隐藏等操作。")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期回调函数，小程序初始化完成时触发，全局只执行一次")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLaunch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onHide")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误监听函数，小程序发生脚本错误，或API 调用失败时触发")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面不存在监听函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPageNotFound")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("利用 App() 函数还可以保存一些所有页面中的共享数据，页面中可以通过"),s("prib",[t._v("getApp()")]),t._v(" 获取小程序实例后拿到这些共享数据。")],1),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("txt")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pages/index/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onReady")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'hello world'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);