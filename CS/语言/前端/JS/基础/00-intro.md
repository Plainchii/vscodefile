<a href ="#id"> 跳转到节点部分</a>

## JavaScript 历史和发展

Web 前端有三层：

-   HTML：从语义的角度，描述页面**结构**

-   CSS：从审美的角度，描述**样式**（美化页面）

-   JavaScript（简称 JS）：从交互的角度，描述**行为**（实现业务逻辑和页面控制）


补充：

> JavaScript 是世界上用的最多的**脚本语言**。

> Java 和 JavaScript 的关系，就好比：雷锋和雷峰塔的关系、老婆和老婆饼的关系、北大和北大青鸟的关系。



## JavaScript 介绍

### JavaScript 入门易学性

-   JavaScript 对初学者比较友好。可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。

-   JavaScript 是有界面效果的（相比之下，C 语言只有白底黑字）。

-   JavaScript 的入门较简单（进阶不易）。比如，JS 是**弱变量类型**的语言，变量只需要用 var/let/const 来声明。而 Java 中变量的声明，要根据变量的类型来定义。

Java 中需要这样定义变量：

```java
int a;
float a;
double a;
String a;
boolean a;
```

而 JS 中，只需要用一种方式来定义：

```JavaScript
// ES5 写法
var a;

// ES6 写法
const a;
let a;
```

### JavaScript 既是前端语言，又是后端语言

当 JavaScript 运行在用户的终端网页，而不是运行在服务器上的时候，我们称之为“**前端语言**”。前端语言是服务于页面的显示和交互，不能直接操作数据库。

**后端语言**是运行在服务器上的，比如 Java、C++、PHP 等等，这些语言都能够操作数据库（对数据库进行“增删改查”），并在后台执行各种任务。

另外，Node.js 是用 JavaScript 开发的，我们也可以用 Node.js 技术进行服务器端编程。

### JavaScript 的组成

JavaScript 基础分为三个部分：

-   **ECMAScript**：JavaScript 的**语法标准**。包括变量、表达式、运算符、函数、if 语句、for 语句等。

-   **DOM**：Document Object Model（文档对象模型），JS 操作**页面上的元素**（标签）的 API。比如让盒子移动、变色、改变大小、轮播图等等。

-   **BOM**：Browser Object Model（浏览器对象模型），JS 操作**浏览器部分功能**的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等。

通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API。

### 节点
<div id="id"></div>
**节点**（Node）：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如：html标签、属性、文本、注释、整个文档等都是一个节点。

虽然都是节点，但是实际上他们的具体类型是不同的。常见节点分为四类：

- 文档节点（文档）：整个 HTML 文档。整个 HTML 文档就是一个文档节点。

- 元素节点（标签）：HTML标签。

- 属性节点（属性）：元素的属性。

- 文本节点（文本）：HTML标签中的文本内容（包括标签之间的空格、换行）。

节点的类型不同，属性和方法也都不尽相同。所有的节点都是Object。

## JavaScript 的特点

### 特点 1：解释型语言

JavaScript 简称 JS，是前端开发的一门脚本语言（解释型语言）。

**解释型语言**的意思是：程序执行之前，不需要事先被翻译为机器码；而是在运行时，边翻译边执行（翻译一行，执行一行）。关于解释型语言的详细介绍，上一篇文章有介绍。

为什么 JS 是解释型语言呢？这和浏览器的工作原理有关。浏览器中有一个专门的“JS 解析器”可以让 JS 边解析边执行。

由于少了事先编译这一步骤，所以解释型语言开发起来尤为方便，但是解释型语言运行较慢也是它的劣势。不过解释型语言中使用了 JIT 技术，使得运行速度得以改善。

### 特点 2：单线程

### 特点 3：ECMAScript 标准

ECMAScript 是一种由 ECMA 国际（前身为欧洲计算机制造商协会,英文名称是 European Computer Manufacturers Association）制定和发布的脚本语言规范。

JavaScript 是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个 ECMA 的组织，牵头制定 JavaScript 的标准，取名为 ECMAScript。

简单来说，**ECMAScript 不是一门语言，而是一个标准**。ECMAScript 规定了 JS 的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套 JS 语法工业标准。

ECMAScript 在 2015 年 6 月，发布了 ECMAScript 6 版本（ES6），语言的能力更强，包含了很多新特性），但也要考虑它的浏览器兼容性问题。

ECMA 赋予了 JavaScript 新的能力和活力。

## 开始写第一行 JavaScript：hello world

JS 代码书写位置

1. **行内式**：写在标签内部。

2. **内嵌式**（内联式）：写在 head 标签中。

3. **外链式**：引入外部 JS 文件。

### 方式 1：行内式

**代码举例**：

```javascript
<input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
```

完整的可执行代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="点我点我" onclick="alert('千古壹号 Hello 方式1')" />
    </body>
</html>
```

**分析**：

-   可以将单行或少量 JS 代码写在 HTML 标签的事件属性中（以 on 开头的属性），比如放在上面的 `onclick`点击事件中。

-   这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS 代码时，很难维护；引号多层嵌套时，也容易出错。

-   关于代码中的「引号」，在 HTML 标签中，我们推荐使用双引号，JS 中我们推荐使用单引号。

### 方式 2、内嵌式（内联式）

我们可以在 HTML 页面的 `<body>` 标签里放入`<script type=”text/javascript”></script>`标签对，并在`<script>`里书写 JavaScript 代码：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <script type="text/javascript">
            // 在这里写 js 代码
            alert('千古壹号 hello 方式2');
            console.log('qianguyihao hello 方式2');
        </script>
    </body>
</html>
```

**分析**：

-   text 表示纯文本，因为 JavaScript 代码本身就是纯文本。

-   可以将多行 JS 代码写到 `<script>` 标签中。

-   内嵌式 JS 是学习时常用的方式。

### 方式 3：外链式

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
    </head>
    <body>
        <!-- 外链式：引入外部的 js 文件：这个 utils.js 文件与当前的 html 文件，处于同一级目录 -->
        <script src="utils.js"></script>
    </body>
</html>
```

**分析**：

-   上面这段代码，依然是放到 body 标签里，可以和内嵌的 JS 代码并列。
-   上方代码的 script 标签已经引入了外部 JS 文件，所以这个标签里面，不可以再写 JS 代码。

**总结**：

我们在实战开发中，基本都是采用方式 3，因为将 html 文件和 js 文件分开的方式，有利于代码的结构化和复用，符合高内聚、低耦合的思想。很少会有人把一大堆 JS 代码塞到 html 文件里。

### 关于 window.onload：先加载，最后执行

上面的三种方式，有个共同的地方是：JS 代码都是写在`</body>`中的，准确来说，是在页面标签元素的后面，在 body**结束标签**的前面。

为什么一般是按这样的顺序来写呢？这是因为：浏览器默认会**从上至下**解析网页（这句话很重要）。当你**需要通过 JS 来操作界面上的标签元素**的时候，假如将 JS 代码、`<script>`标签写到`<head>`标签中，或者写在页面标签元素的前面，那么这样的 JS 是无效的，因为标签元素在此时都还没来得及加载，自然无法操作这个元素。

**重点来了：**

当你**需要通过 JS 来操作界面上的标签元素**的时候，如果实在想把 JS 写到`<head>`标签中，那么就必须用 window.onload 将 JS 代码进行包裹。代码格式如下：

```html
<head>
  window.onload = function(){
    // 这里可以写操作界面元素的JS代码，等页面加载完毕后再执行
    ...
  }
</head>
```

**window.onload**的含义是：等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行`{}`中的代码。做到了**先加载，最后执行**，也就是：**等页面加载完毕后再执行**。

当然，我们可以根据具体需求，将 window.onload 写在 `<head>`标签中，或者写在`<script>`标签中。