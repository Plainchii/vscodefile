
## JavaScript 一些简单的语法规则

学习程序，是有规律可循的，程序会有有相同的部分，这些部分就是一种规定，不能更改，我们称之为：语法。我们先来了解一个简单的语法规则。

1、JS 对换行、缩进、空格不敏感。每一条语句以分号结尾。

也就是说：

代码一：

```html
<script type="text/javascript">
    alert('今天蓝天白云');
    alert('我很高兴');
</script>
```

等价于代码二：

```html
<script type="text/javascript">
    alert('今天蓝天白云');alert('我很高兴');
</script>
```

2、每一条语句末尾要加上**分号**。虽然分号不是必须加的，但如果不写分号，浏览器会自动添加分号，导致消耗一些系统资源和性能，甚至有可能**添加错误**。

3、所有的符号，都是英文的。比如**括号**、引号、分号。

如果你用的是搜狗拼音，**建议不要用 shift 切换中英文**（可以在搜狗软件里进行设置），不然很容易输入中文的分号；建议用 ctrl+space 切换中英文输入法。

4、JS 严格区分大小写。

## 前端代码的注释

注释：即解释、注解。注释有利于提高代码的可读性，且有利于程序员之间的沟通。

注释可以用来解释某一段代码的功能和作用；通过注释，还可以补充代码中未体现出来的部分。

注释可以是任何文字，可以写中文。

**我们不要把 HTML、CSS、JavaScript 三者的注释格式搞混淆了**。

### HTML 的注释

格式：

```html
<!-- 我是 HTML 注释  -->
```

举例：

```html
<!--头部开始-->
<div class="header"></div>
<!--头部结束-->

<!--内容开始-->
<div class="main"></div>
<!--内容结束-->

<!--底部开始-->
<div class="footer"></div>
<!--底部结束-->
```

### CSS 的注释

举例：

```html
<style type="text/css">
    /* 我是 CSS 注释 */
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```

注意：CSS 只有`/* */`这种注释，没有`//`这种注释。而且注释要写在`<style>`标签里面才算生效。

### JavaScript 的注释

单行注释：

```js
// 我是注释
```

多行注释：

```js
/*
	多行注释1
	多行注释2
*/
```

#### 方法的注释

方法写完之后（注意，一定要先写完整），我们在方法的前面输入`/**`，然后回车，会发现，注释的格式会自动补齐。

比如：


```javascript
/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}
```

## JavaScript 输出语句

### 弹窗：alert()语句

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            alert('千古壹号');
        </script>
    </body>
</html>
```

**alert**（英文翻译为“警报”）的用途：**弹出“警告框”**。它会在弹窗中显示一条信息，并等待用户按下 “OK”。

`alert("")`弹窗的效果如下：

![](http://img.smyhvae.com/20180116_1735.gif)

这个弹窗，在 IE 浏览器中长这样：

![](http://img.smyhvae.com/20180116_1906.png)

上面的代码中，如果写了两个 alert()语句，则网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 弹窗：confirm()语句（含确认/取消）

代码举例如下：

```
var result = confirm('你听说过千古壹号吗？');
console.log(result);
```

代码运行后，页面上会显示一个弹窗。弹窗上有“确认”和“取消”两个按钮，点击“确定”返回 `true`，点击“取消”返回 `false`。

效果如下：

![20211031-1537](http://img.smyhvae.com/20211031-1537.gif)

### 弹出输入框：prompt()语句

`prompt()`就是专门弹出能够让用户输入的对话框。用得少，测试的时候偶尔会用。

JS 代码如下：

```javascript
var a = prompt('请随便输入点什么东西吧');
console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面，并在控制台打印出来。

效果如下：

![](http://img.smyhvae.com/20180116_2230.gif)

**alert()和 prompt()的区别：**

-   alert() 语句中可以输出数字和字符串，如果要输出字符串，则必须用引号括起来；prompt()语句中，用户不管输入什么内容，都是字符串。
-   prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

### 网页内容区域输出：document.write()语句

代码举例：

```
document.write('千古前端图文教程');
```

页面效果：

![20211031_1543](http://img.smyhvae.com/20211031_1543.png)

### 控制台输出：console.log() 打印日志

`console.log()`表示在控制台中输出。console 表示“控制台”，log 表示“输出”。括号里可以写字符串、数字、变量。

控制台是程序员调试程序的地方，比如使用 console 语句打印日志，测试程序是否运行正常。

在 Chrome 浏览器中，按 F12 即可打开控制台，选择「console」栏，即可看到打印的内容。

`console.log("")`效果如下：

![](http://img.smyhvae.com/20180116_2008.gif)

console 语句可以设置不同的打印等级：

```js
console.log('千古壹号1'); //普通打印
console.warn('千古壹号2'); //警告打印
console.error('千古壹号3'); //错误打印
```

效果如下：

![20211031_1552](https://img.smyhvae.com/20211031_1552.png)

上图中，不同的打印等级，区别不大，只是颜色背景上的区别，方便肉眼区分、过滤信息。

普通人是不会在意控制台的，但是有些网站另藏玄机。比如百度首页的控制台，悄悄地放了一段招聘信息的彩蛋，挺有意思：

![](http://img.smyhvae.com/20180116_2010.png)

做前端开发时需要经常使用控制台做调试，我们甚至可以直接在控制台输入 JS 语句，然后打印执行结果。

**总结**：alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。

