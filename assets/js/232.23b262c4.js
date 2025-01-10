(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{558:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("h2",{attrs:{id:"浏览器进程模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程模型"}},[t._v("#")]),t._v(" 浏览器进程模型")]),t._v(" "),s("h3",{attrs:{id:"进程与线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[t._v("#")]),t._v(" 进程与线程")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("进程")]),t._v(" "),s("p",[t._v("进程，程序运行时的专属内存空间，每个应用至少有一个进程，进程间相互独立。")])]),t._v(" "),s("li",[s("p",[t._v("线程")]),t._v(" "),s("p",[t._v("线程，运行程序代码的对象。一个进程至少有一个线程。如果程序需要同时执行多块代码，主线程就会启动多个线程执行。")])])]),t._v(" "),s("h3",{attrs:{id:"浏览器进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器进程和线程"}},[t._v("#")]),t._v(" 浏览器进程和线程")]),t._v(" "),s("p",[t._v("浏览器是一个多进程多线程的应用程序。为了避免项目影响，减少连环崩溃的几率，在浏览器启动时，会自动启动多个进程。")]),t._v(" "),s("ul",[s("li",[t._v("浏览器进程")])]),t._v(" "),s("p",[t._v("主要负责界面显示、用户交互、子进程管理等。浏览器进程内部会启动多个线程处理不同的任务。")]),t._v(" "),s("ul",[s("li",[t._v("网络进程")])]),t._v(" "),s("p",[t._v("主要负责加载网络资源。网络进程内部会启动多个线程来处理不同的网络任务。")]),t._v(" "),s("ul",[s("li",[t._v("渲染进程")])]),t._v(" "),s("p",[t._v("渲染进程启动后，会开启一个渲染主线程，主线程负责执行 HTML、CSS、JS 代码。")]),t._v(" "),s("p",[t._v("默认情况下，浏览器会为每个标签页开启一个新的渲染进程，以保证不同标签页之间不相互影响。")]),t._v(" "),s("h2",{attrs:{id:"渲染主线是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染主线是如何工作的"}},[t._v("#")]),t._v(" 渲染主线是如何工作的")]),t._v(" "),s("p",[t._v("渲染主线程师浏览器中最繁忙的线程，主要任务包括但不限于：")]),t._v(" "),s("ul",[s("li",[t._v("解析 HTML")]),t._v(" "),s("li",[t._v("解析 CSS")]),t._v(" "),s("li",[t._v("计算样式")]),t._v(" "),s("li",[t._v("布局")]),t._v(" "),s("li",[t._v("处理图层")]),t._v(" "),s("li",[t._v("每秒把页面画 60 次")]),t._v(" "),s("li",[t._v("执行全局 JS 代码")]),t._v(" "),s("li",[t._v("执行事件处理函数")]),t._v(" "),s("li",[t._v("执行计时器的回掉函数")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("p",[s("bqs",[t._v("思考题：为什么渲染进程不适用多个线程来处理这些事情？")])],1),t._v(" "),s("p",[t._v("要处理这么多的任务，主线程遇到一个前所未有的难题：如何调度任务？")]),t._v(" "),s("p",[t._v("渲染主线程处理方案："),s("suc",[t._v("队列")]),t._v("。")],1),t._v(" "),s("ol",[s("li",[t._v("在最开始的时候，渲染主线程会进入一个无限循环。")]),t._v(" "),s("li",[t._v("每次循环会检查消息队列中是否有任务存在。如果有，就取出执行，执行完后再进入下一次循环。如果没有，就进入休眠。")]),t._v(" "),s("li",[t._v("其他所有线程（包括其他进程的线程）可能随时向消息队列添加任务。新任务会加到队列的末尾。在添加新任务时，如果主线程处于休眠，则主线程会被唤醒以进入循环。")])]),t._v(" "),s("h2",{attrs:{id:"若干解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#若干解释"}},[t._v("#")]),t._v(" 若干解释")]),t._v(" "),s("h3",{attrs:{id:"何为异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#何为异步"}},[t._v("#")]),t._v(" 何为异步")]),t._v(" "),s("p",[t._v("代码在执行过程中，会遇到一些无法立即执行的任务，比如：")]),t._v(" "),s("ul",[s("li",[t._v("计时器完成后需要执行的任务 -- setTimeou、setInterval")]),t._v(" "),s("li",[t._v("网络通信完成后需要执行的任务 -- XHR、Fetch")]),t._v(" "),s("li",[t._v("用户操作后需要执行的任务 -- addEventListener")])]),t._v(" "),s("p",[t._v("如果让渲染主线程等待这些任务的时机执行，就会导致主线程长期处于「阻塞」状态，从而导致浏览器「卡死」。")]),t._v(" "),s("p",[t._v("使用异步方式，渲染主线程永不阻塞。")]),t._v(" "),s("ol",[s("li",[t._v("主线程通知计时线程时，当前任务结束；")]),t._v(" "),s("li",[t._v("主线程从消息队列中获取下一个任务执行；")]),t._v(" "),s("li",[t._v("计时任务结束后，将回调函数放入消息队列末尾；")])]),t._v(" "),s("p",[s("bqs",[t._v("面试题：如何理解 JS 的异步？")]),t._v(" "),s("bqs",[t._v("参考答案："),s("br"),t._v("\nJS 是一门单线程语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。"),s("br"),t._v("\n而渲染主线程承担着诸多工作，渲染页面、执行 JS 都在其中执行。"),s("br"),t._v("\n如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。"),s("br"),t._v("\n所以浏览器采用异步方式来避免。具体做法是，当某些任务执行时（如计时器、网络、事件监听等），主线程将任务交个其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列末尾，等待主线程的调度。"),s("br"),t._v("\n在这种模式下，浏览器永不阻塞，从而最大限度保证单线程的流畅运行。\n")])],1),t._v(" "),s("h3",{attrs:{id:"js-为何会阻碍渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-为何会阻碍渲染"}},[t._v("#")]),t._v(" JS 为何会阻碍渲染？")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 死循环指定的时间")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按钮点击后，导致页面卡死3s 后再次渲染")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"button"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 执行一下代码，会往消息队列添加一个新的任务，用于渲染页面")]),t._v("\n  docuemnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 该任务在主线程中，等待循环结束后，才会再执行渲染页面任务")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("delay")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"任务优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务优先级"}},[t._v("#")]),t._v(" 任务优先级")]),t._v(" "),s("p",[t._v("任务没有优先级，在消息队列中先进先出。但消息队列是有优先级。")]),t._v(" "),s("p",[t._v("根据 W3C 解释：")]),t._v(" "),s("ul",[s("li",[t._v("每个任务都有一个任务类型，同一个类型的任务必须在一个队列中，不同类型的任务可以分属于不同的队列。在一次事件循环中，浏览器可以根据实际情况从不同的队列中取出任务执行。")]),t._v(" "),s("li",[t._v("浏览器必须准备好一个微队列，微队列中的任务优先所有其他任务执行。")])]),t._v(" "),s("bqs",[t._v("\n随着浏览器的复杂度急剧提升，W3C 不再使用宏队列的说法。\n")]),t._v(" "),s("p",[t._v("在目前 chrome 的实现中，至少包含下面的队列：")]),t._v(" "),s("ul",[s("li",[s("pri",[t._v("延时队列")]),t._v("：用于存放计时器到达后的回调任务，优先级「中」")],1),t._v(" "),s("li",[s("warn",[t._v("交互队列")]),t._v("：用于存放用户操作后产生的事件处理任务，优先级「高」")],1),t._v(" "),s("li",[s("err",[t._v("微队列")]),t._v("：用户存放需要最快执行的任务，优先级「最高」")],1)]),t._v(" "),s("bqs",[t._v("\n添加任务到微队列的主要方式是使用Promise、MutationObserver\n")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 立即添加函数到微队列")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Promise。resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[s("bqs",[t._v("面试题：阐述一下 JS 的事件循环")]),t._v(" "),s("bqs",[t._v("\n参考答案："),s("br"),t._v("\n事件循环又叫消息循环，是浏览器渲染主线程的工作方式。"),s("br"),t._v("\n在 chrome 源码中，它开启一个不会结束的 for 循环，每次循环从消息队列中取出第一个任务执行，而其他线程只需要在合适的时候将任务加入到消息队列的末尾即可。"),s("br"),t._v("\n过去把消息简单分为宏队列和微队列，这种说法目前已无法满足复杂的浏览器环境，取而代之的是一种更加灵活多变的处理方式。"),s("br"),t._v("\n根据 W3C 官方解释，每个任务有不同的类型，同类型的任务必须在同一个队列，不同的任务可以属于不同的队列。不同的任务队列有不同的优先级，在一次循环中，由浏览器局定取哪一个队列的任务。但浏览器必须有一个微队列，微队列的任务一定具有最高的优先级，必须优先调度执行。\n")])],1),t._v(" "),s("p",[s("bqs",[t._v("面试题：JS 中的计时器能做到精确计时吗？为什噩梦？")]),t._v(" "),s("bqs",[t._v("\n参考答案："),s("br"),t._v("\n不行，因为："),s("br"),t._v("\n1-计算机硬件没有原子钟，无法做到精确计时。"),s("br"),t._v("\n2-操作系统的计时函数本身就有少量偏差，由于 JS 的计时器最终调用的是操作系统的函数，也就携带了这些偏差。"),s("br"),t._v("\n3-按照 W3C 的标准，浏览器实现计时器时，如果嵌套层数超过 5 层，就会带有 4 ms 的最少时间，这样计时时间少于 4 ms 时又带来了偏差。"),s("br"),t._v("\n4-受事件循环的影响，计时器的回调函数只能在主线程空闲时执行，因此也带来了偏差。"),s("br")])],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);