## 函数预编译的步骤

#### 执行期上下文

当**函数执行**时（准确来说，是在函数发生预编译的前一刻），会创建一个执行期上下文的内部对象。一个执行期上下文定义了一个函数执行时的环境。

每调用一次函数，就会创建一个新的上下文对象，他们之间是相互独立且独一无二的。当函数执行完毕，它所产生的执行期上下文会被销毁。

#### 函数预编译，发生在函数执行的前一刻。

（1）创建AO对象。AO即 Activation Object 活跃对象，其实就是「执行期上下文」。

（2）找形参和变量声明，将形参名和变量作为 AO 的属性名，值为undefined。

（3）将实参值和形参统一，实参的值赋给形参。

（4）查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体。

这个地方比较难理解。但只有了解了函数的预编译，才能理解明白函数的执行顺序。

代码举例：

```javascript
function fn(a) {
    console.log(a);

    var a = 666;

    console.log(a);

    function a() {}

    console.log(a);

    var b = function() {};

    console.log(b);

    function c() {}
}

fn(1);
```

打印结果：

```
ƒ a() {}
666
666
ƒ () {}
```

## this

### this的作用

- this可以帮我们简化很多代码。比如`xiaoming.name`、`xiaoming.age`可以直接写成`this.name`、`this.age`。

- 特别是当我们不知道一个对象是什么，或者这个对象没有名字但又很想调用它的时候，就会使用到this对象。

**举例：**

- 遍历DOM对象，绑定click事件，调用当前点击的对象的id，而不是所有对象的id。

代码：

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: green;
            margin: 10px;
        }

    </style>
</head>
<body>
<script>
    window.onload = function () {
        var myDiv = document.getElementsByTagName('div');
        for (var i = 0; i < myDiv.length; i++) {
            myDiv[i].onclick = function () {
                console.log(i);
                console.log(this.id);
            }
        }

    }

</script>
<section>
    <div id="div0"> div0</div>
    <div id="div1"> div1</div>
    <div id="div2"> div2</div>
    <div id="div3"> div3</div>
    <div id="div4"> div4</div>
</section>


</body>
</html>

```


点击其中的任何一个元素后，`i`的打印结果是5。你可能会觉得很惊讶。我们来解释一下：

当代码执行完毕后，i已经等于5了。因为一旦运行程序，for循环已经执行完了，此时i等于5。

现在，我们尝试在 myDiv[i].onclick事件中写代码，如果打印：

```
	console.log(i);  //打印结果为5
```


如果打印：

```
	console.log(myDiv[i].id);
```

上方这行代码，打印会报错，因为i=5；如果想打印每个div的id，应该这样写：

```
	console.log(this.id);
```

你看，this的作用，就体现出来了。

PS：顺便提醒一下，上面的代码中，如果把`var i`改成`let i`，效果又完全不同了。参考链接：[let和var在for循环中的表现](http://blog.csdn.net/stopllL/article/details/64130664)

### 全局作用域中的this

当一段代码在浏览器中执行时，所有的全局变量和对象都是在window对象上定义的。换而言之，所有的全局变量和对象都属于window对象。

## this 指向

定律:this关键字永远指向函数（方法）运行时的**所有者**。

解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是 this，this 指向的是一个对象，这个对象我们称为函数执行的**上下文对象**。

### ES5 函数内 this 的指向

我们在《JavaScript 基础/函数.md》这篇文章讲过，函数的调用有**六种**形式。

在ES5语法中，根据函数的调用方式的不同，this 会指向不同的对象：

1、以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`

2、以方法的形式调用时，this 指向调用方法的那个对象

3、以构造函数的形式调用时，this 指向实例对象

4、以事件绑定函数的形式调用时，this 指向**绑定事件的对象**

5、使用 call 和 apply 调用时，this 指向指定的那个对象

以函数形式调用时，this永远都是window

**第 1 条的举例**：

```javascript
function fun() {
    console.log(this);
    console.log(this.name);
}

var obj1 = {
    name: 'smyh',
    sayName: fun,
};

var obj2 = {
    name: 'vae',
    sayName: fun,
};

var name = '全局的name属性';

//以函数形式调用，this是window
fun(); //可以理解成 window.fun()
```

打印结果：

```
    Window
    全局的name属性
```

上面的举例可以看出，this 指向的是 window 对象，所以 this.name 指的是全局的 name。

**第 2 条的举例**：

```javascript
function fun() {
    console.log(this);
    console.log(this.name);
}

var obj1 = {
    name: 'smyh',
    sayName: fun,
};

var obj2 = {
    name: 'vae',
    sayName: fun,
};

var name = '全局的name属性';

//以方法的形式调用，this是调用方法的对象
obj2.sayName();
```

打印结果：

```
    Object
    vae
```

上面的举例可以看出，this 指向的是 对象 obj2 ，所以 this.name 指的是 obj2.name。

### ES6 箭头函数中 this 的指向

ES6 中的箭头函数并不使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）。

### 解决闭包中的this指向问题


内部函数是可以访问到外部函数的变量的。

方式一：直接通过父函数的名字访问

方式二：如果不知道父函数的名字，在父函数里加一句`_this = this`，此时`_this`相当于父函数的名字。


## 改变函数内部的 this 指向

JS 专门为我们提供了一些方法来改变函数内部的 this 指向。常见的方法有 call()、apply()、bind() 方法。继续往下看。

### call()

call() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。

call() 方法的另一个应用：**可以实现继承**。之所以能实现继承，其实是利用了上面的作用。

语法：

```js
fn1.call(想要将this指向哪里, 函数实参1, 函数实参2);
```
备注：第一个参数中，如果不需要改变 this 指向，则传 null。

**举例 1**、通过 call() 调用函数：

```js
const obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};
function fn1() {
    console.log(this);
    console.log(this.nickName);
}
fn1.call(this); // this的指向并没有被改变，此时相当于 fn1();
```

上方代码的打印结果：

```
window
undefined
```

上面的代码，跟普通的函数调用 `fn1()` 没有区别。

**举例 2**、通过 call() 改变 this 指向：

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a, b) {
    console.log(this);
    console.log(this.nickName);
    console.log(a + b);
}

fn1.call(obj1, 2, 4); // 先将 this 指向 obj1，然后执行 fn1() 函数
```

上方代码的打印结果：

```
obj1
qianguyihao
6
```

**举例 3**、通过 call() 实现继承：

```js
// 给 Father 增加 name 和 age 属性
function Father(myName, myAge) {
    this.name = myName;
    this.age = myAge;
}

function Son(myName, myAge) {
    // 【下面这一行，重要代码】
    // 通过这一步，将 father 里面的 this 修改为 Son 里面的 this；另外，给 Son 加上相应的参数，让 Son 自动拥有 Father 里的属性。最终实现继承
    Father.call(this, myName, myAge);
}

const son1 = new Son('千古壹号', 28);
console.log(JSON.stringify(son1));
```

上方代码中，通过 call() 方法，让 Son 继承了 Father 里面的 name 和 age 属性。

打印结果：

```
{"myName":"千古壹号","myAge":28}
```

### apply() 方法

apply() 方法的作用：可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向。这一点，和 call()类似。

apply() 方法的应用： 由于 apply()需要传递**数组**，所以它有一些巧妙应用，稍后看接下来的应用举例就知道了。

语法：

```js
fn1.apply(想要将this指向哪里, [函数实参1, 函数实参2]);
```

备注：第一个参数中，如果不需要改变 this 指向，则传 null。

到这里可以看出， call() 和 apply() 方法的作用是相同的。唯一的区别在于，apply() 里面传入的**实参，必须是数组（或者伪数组）**。


**举例**、通过 apply() 改变 this 指向：

```js
var obj1 = {
    nickName: 'qianguyihao',
    age: 28,
};

function fn1(a) {
    console.log(this);
    console.log(this.nickName);
    console.log(a);
}

fn1.apply(obj1, ['hello']); // 先将 this 指向 obj1，然后执行 fn1() 函数
```

注意，上方代码中，apply() 里面传实参时，需要以数组的形式。即便是传一个实参，也需要传数组。

打印结果：

```
obj1
qianguyihao
hello
```

#### apply() 方法的巧妙应用：求数组的最大值

我们知道，如果想要求数组中元素的最大值，数组本身是没有自带方法的。那怎么办呢？

虽然数组里没有获取最大值的方法，但是数值里有 `Math.max(数字1，数字2，数字3)` 方法，可以获取**多个数值中的最大值**。 另外，由于 apply() 方法在传递实参时，传的刚好是**数组**，所以我们可以 通过 Math.max() 和 apply() 曲线救国。

**举例**：求数组中多个元素的最大值：

```js
const arr1 = [3, 7, 10, 8];

// 下面这一行代码的目的，无需改变 this 指向，所以：第一个参数填 null，或者填 Math，或者填 this 都可以。严格模式中，不让填null。
const maxValue = Math.max.apply(Math, arr1); // 求数组 arr1 中元素的最大值
console.log(maxValue);

const minValue = Math.min.apply(Math, arr1); // 求数组 arr1 中元素的最小值
console.log(minValue);
```

打印结果：

```
10
3
```

### bind() 方法

bind() 方法**不会调用函数**，但是可以改变函数内部的 this 指向。

把call()、apply()、bind()这三个方法做一下对比，你会发现：实际开发中， bind() 方法使用得最为频繁。如果有些函数，我们不需要立即调用，但是又想改变这个函数内部的this指向，此时用 bind() 是最为合适的。


语法：

```js
新函数 = fn1.bind(想要将this指向哪里, 函数实参1, 函数实参2);
```

参数：

- 第一个参数：在 fn1 函数运行时，指定 fn1 函数的this 指向。如果不需要改变 this 指向，则传 null。

- 其他参数：fn1 函数的实参。

解释：它不会调用 fn1 函数，但会返回 由指定this 和指定实参的**原函数拷贝**。可以看出， bind() 方法是有返回值的。


## call()和apply()

### 介绍

这两个方法都是函数对象的方法，需要通过函数对象来调用。

当函数调用call()和apply()时，函数都会立即**执行**。

- 都可以用来改变函数的this对象的指向。

- 第一个参数都是this要指向的对象（函数执行时，this将指向这个对象），后续参数用来传实参。

### 显式绑定this

JS提供的绝大多数函数以及我们自己创建的所有函数，都可以使用call 和apply方法。

它们的第一个参数是一个对象。因为你可以直接指定 this 绑定的对象，因此我们称之为显式绑定。

例1：

```javascript
    function foo() {
        console.log(this.a);
    }

    var obj = {
        a: 2
    };

    // 将 this 指向 obj
    foo.apply(obj); //打印结果：2
```

### 第一个参数的传递

1、thisObj不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。

2、传递一个别的函数名时，函数中的this将指向这个**函数的引用**。

3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。

4、传递一个对象时，函数中的this则指向传递的这个对象。


### call()和apply()的区别

call()和apply()方法都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个**数组**中统一传递（即使只有实参只有一个，也要放到数组中）。

比如针对下面这样的代码：

```javascript
    var persion1 = {
        name: "小王",
        gender: "男",
        age: 24,
        say: function (school, grade) {
            alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);
        }
    }
    var person2 = {
        name: "小红",
        gender: "女",
        age: 18
    }
```

如果是通过call的参数进行传参，是这样的：

```javascript
	persion1.say.call(persion2, "实验小学", "六年级");
```

如果是通过apply的参数进行传参，是这样的：

```javascript
	persion1.say.apply(persion2, ["实验小学", "六年级"]);
```

看到区别了吗，call后面的实参与say方法中是一一对应的，而apply传实参时，要封装成一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。

### call()和apply()的作用

- 改变this的指向

- 实现继承。Father.call(this)

## bind()

- 都能改变this的指向

- call()/apply()是**立即调用函数**

- bind()是将函数返回，因此后面还需要加`()`才能调用。

bind()传参的方式与call()相同。





