(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{705:function(s,a,t){"use strict";t.r(a);var r=t(25),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[s._v("#")]),s._v(" Window")]),s._v(" "),a("h2",{attrs:{id:"window-bat-批处理命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-bat-批处理命令"}},[s._v("#")]),s._v(" window bat 批处理命令")]),s._v(" "),a("ul",[a("li",[s._v("读取文件并输出")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delims=*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\techo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("要读取第二行只需要设置一个行数 flag，在行数为 2 的时候就输出文件内容")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" setlocal enabledelayedexpansion\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" lineFlag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delims=*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("txt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a lineFlag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("lineFlag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" lineContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i\n    echo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("lineContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("ul",[a("li",[s._v("读取文件到新文件中")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" setlocal enabledelayedexpansion\nchcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 直接在代码中声明编码，"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65001")]),s._v("是UTF"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("的编码\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" lineIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" lineContent"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" filePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22111517")]),s._v("_ECOM_P00000130_IN_100_20221115_1511"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csv\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delims=*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("filePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\techo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.csv"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("字符串截取")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" setlocal\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 倒数第"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("位开始，取"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("位\necho "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("字符串替换")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" setlocal\nchcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("This "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\necho "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n\necho 替换前：str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\necho 空格换"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("：str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("文件读取并替换")])]),s._v(" "),a("div",{staticClass:"language-vb line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),s._v("echo off "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" setlocal enabledelayedexpansion\nchcp "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" filePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22111517")]),s._v("_ECOM_P00000130_IN_100_20221115_1511"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("csv\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"delims=*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("filePath"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("i\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("add"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\techo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.csv"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\npause\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);