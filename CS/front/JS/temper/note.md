
#### Math.round()  
“四舍五入”， 该函数返回的是一个四舍五入后的的整数
        double d = 3.1415926;
        double d2 = 18.58;
        double d3 = -15.23;
        double d4 = -16.85;
        long round1 = Math.round(d);    // 结果 3
        long round2 = Math.round(d2);   // 结果 19
        long round3 = Math.round(d3);   // 结果 -15
        long round4 = Math.round(d4);   // 结果 -17
        double d5 = -16.5;
        double d6 = 16.5;
        long round5 = Math.round(d5);   // 结果 -16
        long round6 = Math.round(d6);   // 结果 17


#### Math.ceil()  
“向上取整”， 即小数部分直接舍去，并向正数部分进1
        double d = 3.1415926;
        double d2 = 18.58;
        double d3 = -15.23;
        double d4 = -16.85;
        double d5 = -16.5;
        double d6 = 16.5;
        
        double ceil1 = Math.ceil(d);    // 结果 4.0
        double ceil2 = Math.ceil(d2);   // 结果 19.0
        double ceil3 = Math.ceil(d3);   // 结果 -15.0
        double ceil4 = Math.ceil(d4);   // 结果 -16.0
        double ceil5 = Math.ceil(d5);   // 结果 -16.0
        double ceil6 = Math.ceil(d6);   // 结果 17.0


#### Math.floor()  
“向下取整” ，即小数部分直接舍去
        double d = 3.1415926;
        double d2 = 18.58;
        double d3 = -15.23;
        double d4 = -16.85;
        double d5 = -16.5;
        double d6 = 16.5;
        
        double floor1 = Math.floor(d);    // 结果 3.0
        double floor2 = Math.floor(d2);   // 结果 18.0
        double floor3 = Math.floor(d3);   // 结果 -16.0
        double floor4 = Math.floor(d4);   // 结果 -17.0
        double floor5 = Math.floor(d5);   // 结果 -17.0
        double floor6 = Math.floor(d6);   // 结果 16.0
 
   【注】 Math.floor()容易出现精度问题，举个最简单例子:
 
         对小数 8.54 保留两位小数(虽然它已经保留了 2 位小数)：
 
         Math.floor(8.54*100)/100 // 输出结果为 8.53, 注意是 8.53 而不是 8.54。
 
         所以这种函数慎用。

#### Math.random()
系统随机选取大于等于 0.0 且小于 1.0 的伪随机 double 值

    int  num = (int)(Math.random()*2+1)
    //以上代码即设置一个随机1到3(取不到3)的变量num。

#### Window location.host
location.host 属性返回 URL 的主机（IP 地址或域名）和端口。

还可以设置 location.host 属性，导航到使用新主机和端口的相同 URL。

提示：如果 URL 中没有指定端口号，或者是默认端口（http 为 80）或（https 为 443），大多数浏览器将返回空字符串。

获取当前 URL 的主机和端口：
let host = location.host;

返回 host 属性：
location.host

设置 host 属性：
location.host = host:port(URL 的主机和端口号)


host:port	
类型	描述
字符串	URL 的主机（IP 

## 箭头函数(Lambda)
>构造函数方法
```js
    let func = (arg1, arg2, ..., argN) => expression;
    let func = function(arg1, arg2, ..., argN) {
    return expression;
    };

    let sum = (a, b) => a + b;
    let sum = function(a, b) {
    return a + b;
    };
    alert(sum(1, 2));//3

    let sayHi = () => alert("Hello!");
    sayHi();

    let age = prompt("What is your age?", 18);
    let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");
    welcome();//Greetings!

    let sum = (a, b) => {  // 花括号表示开始一个多行函数
    let result = a + b;
    return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
    };
    alert( sum(1, 2) ); // 3
```

## 构造方法
constructor 是一种用于创建和初始化class创建的对象的特殊方法

- 在一个类中只能有一个名为“constructor”的特殊方法。一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。

在一个构造方法中可以使用super关键字来调用一个父类的构造方法。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。




### 语法
constructor([arguments]) { ... }

如果不指定一个构造函数 (constructor) 方法，则使用一个默认的构造函数 (constructor)。

如果不指定一个构造函数 (constructor) 方法，则使用一个默认的构造函数 (constructor)。
    constructor() {}
    //基类

    constructor(...args) {
    super(...args);
    }
    //派生类



## time

### setTimeout
    setTimeout(要执行的代码, 等待的毫秒数)
    setTimeout(JavaScript 函数, 等待的毫秒数)







