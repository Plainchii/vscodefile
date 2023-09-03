
## CSS 概述

CSS：Cascading Style Sheet，层叠样式表。CSS 的作用就是给 HTML 页面标签添加各种样式，**定义网页的显示效果**。简单一句话：CSS 将网页**内容和显示样式进行分离**，提高了显示功能。

css 的最新版本是 css3，**我们目前学习的是 css2.1**。 因为 css3 和 css2.1 不矛盾，必须先学 2.1 然后学 3。

接下来我们要讲一下为什么要使用 CSS。

**HTML 的缺陷：**

1. 不能够适应多种设备
2. 要求浏览器必须智能化足够庞大
3. 数据和显示没有分开
4. 功能不够强大

**CSS 优点：**

1. 使数据和显示分开
2. 降低网络流量
3. 使整个网站视觉效果一致
4. 使开发效率提高了（耦合性降低，一个人负责写 html，一个人负责写 css）

比如说，有一个样式需要在一百个页面上显示，如果是 html 来实现，那要写一百遍，现在有了 css，只要写一遍。现在，html 只提供数据和一些控件，完全交给 css 提供各种各样的样式。

## CSS 语法

**语法格式：**（其实就是键值对）

```html
选择器{ 属性名: 属性值;}
```

或者可以写成：

```css
选择器 {
    k: v;
    k: v;
}
```

**解释：**

-   选择器代表页面上的某类元素，选择器后一定是大括号。
-   属性名后必须用冒号隔开，属性值后用分号（最后一个属性可以不用分号，但最好还是加上分号）。
-   冒号和属性值之间可以留一个空格（编程习惯的经验）。
-   如果一个属性有多个值的话，那么多个值用**空格**隔开。

**举例：**

```css
p {
    color: red;
}
```

**完整版代码举例：**

```html
<style type="text/css">
    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>

<body>
    <p>洗白白</p>
    <p>你懂得</p>
    <p>我不会就这样轻易的狗带</p>
</body>
```

效果：

![](http://img.smyhvae.com/2015-10-03-css-01.png)

### css 代码的注释

**格式：**

```html
<style type="text/css">
    /*
		具体的注释
	*/

    p {
        font-weight: bold;
        font-style: italic;
        color: red;
    }
</style>
```



## CSS 的一些简单常见的属性


以下属性值中，括号中的内容表示 sublime 中的快捷键。

**字体颜色：**（c）

```html
color:red;
```

color 属性的值，可以是英语单词，比如 red、blue、yellow 等等；也可以是 rgb、十六进制(后期详细讲)。

**字号大小：**（fos）

```html
font-size:40px;
```

font 就是“字体”，size 就是“尺寸”。px 是“像素”。单位必须加，不加不行。

**背景颜色：**（bgc）

```html
background-color: blue;
```

background 就是“背景”。

**加粗：**（fwb）

```html
font-weight: bold;
```

font 是“字体” weight 是“重量”的意思，bold 粗。

**不加粗：**（fwn）

```html
font-weight: normal;
```

normal 就是正常的意思。

**斜体：**（fsi）

```html
font-style: italic;
```

italic 就是“斜体”。

**不斜体：**（fsn）

```html
font-style: normal;
```

**下划线：**（tdu）

```html
text-decoration: underline;
```

decoration 就是“装饰”的意思。

**没有下划线：**（tdn）

```html
text-decoration:none;
```


## CSS的单位

html中的单位只有一种，那就是像素px，所以单位是可以省略的，但是在CSS中不一样。
<font color="#0000FF">**CSS中的单位是必须要写的**，因为它没有默认单位。</font>

### 绝对单位

1 `in`=2.54`cm`=25.4`mm`=72`pt`=6`pc`。

各种单位的含义：

- `in`：英寸Inches (1 英寸 = 2.54 厘米)
- `cm`：厘米Centimeters
- `mm`：毫米Millimeters
- `pt`：点Points，或者叫英镑 (1点 = 1/72英寸)
- `pc`：皮卡Picas (1 皮卡 = 12 点)

### 相对单位

`px`：像素
`em`：印刷单位相当于12个点
`%`：百分比，相对周围的文字的大小

为什么说像素px是一个相对单位呢，这也很好理解。比如说，电脑屏幕的的尺寸是不变的，但是我们可以让其显示不同的分辨率，在不同的分辨率下，单个像素的长度肯定是不一样的啦。