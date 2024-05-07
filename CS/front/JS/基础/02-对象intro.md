---
title: 13-对象简介
---

<ArticleTopAd></ArticleTopAd>

## 对象简介

### 对象的概念

在 JavaScript 中，对象是一组**无序**的相关属性和方法的集合。

**对象的作用是：封装信息**。比如 Student 类里可以封装学生的姓名、年龄、成绩等。

对象具有**特征**（属性）和**行为**（方法）。

### 对象包括哪些数据类型

我们知道，JS 中的数据类型，包括以下几种：

-   **基本数据类型（值类型）**：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。

-   **引用数据类型（引用类型）**：Object 对象。

只要不是那七种基本数据类型，就全都是对象。对象属于一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。

### 对象的分类

1、内置对象：

-   由 ES 标准中定义的对象，在任何的 ES 的实现中都可以使用。

-   比如：Object、Math、Date、String、Array、Number、Boolean、Function 等。

2、宿主对象：

-   由 JS 的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。

-   比如 BOM、DOM，比如`console`、`document`。

3、自定义对象：

-   由开发人员自己创建的对象。

通过 new 关键字创建出来的对象实例，都是属于对象类型。

## 自定义对象

### 为什么需要自定义对象

保存一个值时，可以使用**变量**，保存多个值（一组值）时，可以使用**数组**。

比如，如果要保存一个人的信息，通过数组的方式可以这样保存：

```javascript
const arr = ['王二', 35, '男', '180'];
```

上面这种表达方式比较乱。而如果用 JS 中的**自定义对象**来表达，**结构会更清晰**。如下：

```javascript
const person = {
    name: 'qianguyihao',
    age: 30,
    sex: '男',
    favor: ['阅读', '羽毛球'],
    sayHi: function () {
        console.log('qianguyihao');
    },
};
```

由此可见，自定义对象里面的属性均是**键值对（key: value）**，表示属性和值的映射关系：

-   键/属性：属性名。

-   值：属性值，可以是任意类型的值（数字类型、字符串类型、布尔类型，函数类型等）。

### 自定义对象的语法

语法如下：

```js
const obj = {
    key: value,
    key: value,
    key: value,
};
```

key 和 value 之间用冒号分隔，每组 key:vaue 之间用逗号分隔，最后一对 key:value 的末尾可以写逗号，也可以不写逗号。

问：对象的属性名是否需要加引号？

答：如果属性名不符合 JS 标识符的命名规范，则需要用引号包裹。比如：

```js
const person = {
    'my-name': 'qianguyihao',
};
```

补充：其实，JS 的内置对象、宿主对象，底层也是通过自定义对象的形式（也就是键值对的形式）进行封装的。

## 对象的属性值补充

### 什么叫对象的方法【重要】

对象的属性值可以是任意的数据类型，也可以是个**函数**（也称之为方法）。换而言之，**如果对象的属性值是函数，则这个函数可被称之为对象的“方法”**。

```javascript
const obj = new Object();
obj.sayName = function () {
    console.log('qianguyihao');
};

// 没加括号，就是获取方法
console.log(obj.sayName);
console.log('-----------');
// 加了括号，就是调用方法。即：执行函数内容，并执行函数体的内容
console.log(obj.sayName());
```

打印结果：

![](https://img.smyhvae.com/20221014_1130.png)

### 对象中的属性值，也可以是一个对象

举例：

```javascript
//创建对象 obj1
var obj1 = new Object();
obj1.test = undefined;

//创建对象 obj2
var obj2 = new Object();
obj2.name = 'qianguyihao';

//将整个 obj2 对象，设置为 obj1 的属性
obj1.test = obj2;

console.log(obj1.test.name);
```

打印结果为：qianguyihao


## 基本包装类型

### 介绍

我们都知道，JS 中的数据类型包括以下几种。

-   基本数据类型：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。

-   引用数据类型：Object 对象。

### 绑定属性和方法

属性和方法只能添加给对象，不能添加给基本数据类型。我们拿字符串来举例。

**1、基本数据类型：**

基本数据类型`string`是**无法绑定属性和方法**的。

```javascript
var str = 'qianguyihao';

str.aaa = 12;
console.log(typeof str); //打印结果为：string
console.log(str.aaa); //打印结果为：undefined
```

上方代码中，当我们尝试打印`str.aaa`的时候，会发现打印结果为：undefined。也就是说，不能给 `string` 绑定属性和方法。

当然，我们可以打印 str.length、str.indexOf("m")等等。因为这两个方法的底层做了数据类型转换（**临时**将 `string` 字符串转换为 `String` 对象，然后再调用内置方法），也就是我们在下一段将要讲到的**包装类**。

**2、引用数据类型：**

引用数据类型`String`是可以绑定属性和方法的。

内置对象 Number 也有一些自带的方法，比如：

-   Number.MAX_VALUE;

-   Number.MIN_VALUE;

内置对象 Boolean 也有一些自带的方法，但是用的不多。

### 三个基本包装类
JS 为我们提供了三个**基本包装类**：

-   String()：将基本数据类型字符串，转换为 String 对象。

-   Number()：将基本数据类型的数字，转换为 Number 对象。

-   Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象。

通过上面这这三个包装类，我们可以**将基本数据类型的数据转换为对象**。

代码举例：

```javascript
let str1 = 'qianguyihao';
let str2 = new String('qianguyihao');

let num = new Number(3);

let bool = new Boolean(true);

console.log(typeof str1); // 打印结果：string
console.log(typeof str2); // 注意，打印结果：object
```

**需要注意的是**：我们在实际应用中一般不会使用基本数据类型的**对象**。如果使用基本数据类型的对象，在做一些比较时可能会带来一些**不可预期**的结果。

比如说：

```javascript
var boo1 = new Boolean(true);
var boo2 = new Boolean(true);

console.log(boo1 === boo2); // 打印结果竟然是：false
```

再比如说：

```javascript
var boo3 = new Boolean(false);

if (boo3) {
    console.log('qianguyihao'); // 这行代码竟然执行了
}
```

### 基本包装类型的作用

当我们对一些基本数据类型的值去调用属性和方法时，JS引擎会**临时使用包装类将基本数据类型转换为引用数据类型**（即“隐式类型转换”），这样的话，基本数据类型就有了属性和方法，然后再调用对象的属性和方法；调用完以后，再将其转换为基本数据类型。

举例：

```js
var str = 'qianguyihao';
console.log(str.length); // 打印结果：11
```

比如，上面的代码，执行顺序是这样的：

```js
// 步骤（1）：把简单数据类型 string 转换为 引用数据类型  String，保存到临时变量中
var temp = new String('qianguyihao');

// 步骤（2）：把临时变量的值 赋值给 str
str = temp;

//  步骤（3）：销毁临时变量
temp = null;

```
## js三种对象
> JavaScript 中的对象分为3种：自定义对象、内置对象、浏览器对象。

> 前面两种对象：是JS的基础内容，属于 ECMAScript； 第三个浏览器对象：属于JS独有，即 JS 内置的API。

>**内置对象**：就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用或者基本而必要的功能（属性和方法）。

### 内置对象简介

内置对象最大的优点就是帮助我们快速开发。

**JavaScript的内置对象**：

| 内置对象 | 对象说明 |
|:-------------|:-------------|
|  Arguments | 函数参数集合|
|  Array | 数组|
|  Boolean | 布尔对象|
|  Math | 数学对象|
|  Date | 日期时间|
|  Error | 异常对象|
|  Function | 函数构造器|
|  Number | 数值对象|
|  Object | 基础对象|
|  RegExp | 正则表达式对象|
|  String | 字符串对象|