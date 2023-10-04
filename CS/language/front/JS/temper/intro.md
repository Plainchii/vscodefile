
## 初始化

### @match
- @match https://www.baidu.com，表示在百度这个网址下运行。
- @match https://\*//* 表示在所有 https 下的网站都可以运行。
- https://*.taobao.com/*

### @require 
- // @require D:\document\1.js
添加本地的文件地址，这样当你在本地进行开发的代码，就可以直接在对应的网站上执行了。当然 @require标签还可以用来引入一些你开发时需要的第三方库，如 jQuery
- // @require https://code.jquery.com/jquery-2.1.4.min.js
- // @require tampermonkey://vendor/jquery.js
- // @require tampermonkey://vendor/jszip/jszip.js

### grant
这个属性可用来申请GM_*函数和unsafeWindow权限.相当于放在脚本header里面告诉油猴扩展,你需要用些什么东西,然后它就会给你相应的权限.

#### none和unsafeWindow

简单来说:none就是直接运行在前端页面中,否则就是运行在一个沙盒环境,需要使用unsafeWindow去操作前端的元素.

除了`GM_*`函数外,还有两个特殊的权限,就是none和unsafeWindow.默认的情况下,你的脚本运行在油猴给你创建的一个沙盒环境下,这个沙河环境无法访问到前端的页面,也就无法操作前端的一些元素等.如果在页面最前方声明:"//@grant none",那么油猴就会将你的脚本直接放在前端的上下文中执行,这是的脚本上下文(window)就是前端的上下文.但是这样的话就无法使用`GM_*`等函数,无法与油猴交互,使用一些更强的功能.

所以一般写脚本的时候是使用unsafeWindow与前端交互,而不使用"//@grant none",这样就可以使用grant去申请油猴的一些更强的函数功能.这时候的脚本上下文(window)是沙盒的上下文,而不是前端的上下文.

在沙盒环境中,有一些window的操作也无法处理,需要使用grant来获取,例如:"// @grant window.onurlchange"(TamperMonkey文档中的)
```js
// ==UserScript==

// @grant window.onurlchange
// ==/UserScript==

if (window.onurlchange === null) {
    // feature is supported
    window.addEventListener('urlchange', (info) => ...);
}
```
这样的作法是为了避免恶意网页可以直接的使用`GM_*`函数,也可以避免被网页检测到`GM_*`插件的存在
GM文档内容:
unsafeWindow绕过Greasemonkey的安全模型，该模型的存在是为了确保恶意网页不能以这样的方式修改对象，从而使用户脚本（比在网页中运行的普通JavaScript具有更高的权限执行）执行其作者或用户不想做的事情。



##

### 插入HTML

通过innerHTML
```js
function createHTML() {
    // 获取百度首页 logo 
    let logo = document.querySelector("#lg")
    // 创建一个自己的结构
    let example = document.createElement("div")
    // 给 example 这个 div 设置类名
    example.classList.add("wrap")
    example.innerHTML = `<div class="h1">标题</div>
                            <p class="des">这是一段描述</p>`
    logo.appendChild(example)

}

(function () {
    'use strict';
    console.log("learn_style")
    createHTML()
})();
```

### 设置CSS样式
```
@grant         GM_addStyle

function createHTML() {...}

function addStyle() {// 添加 css 样式
    let css = `
    .wrap{
        padding: 5px
    }
    
    .h1{
        font-size: 16px;
        color: green;
    }
    
    .des{
        font-size: 10px;
    }
    `

    GM_addStyle(css)
}

(function () {
    'use strict';
    console.log("learn_style")
    createHTML()
    addStyle()
})();

```

