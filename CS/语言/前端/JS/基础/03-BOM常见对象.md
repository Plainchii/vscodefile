
# 什么是BOM

BOM：Browser Object Model，浏览器对象模型。

**BOM的结构图：**

![](http://img.smyhvae.com/20180201_2052.png)

从上图也可以看出：

- **window对象是BOM的顶层(核心)对象**，所有对象都是通过它延伸出来的，也可以称为window的子对象。

- DOM越是BOM的一部分。

**window对象：**

- **window对象是JavaScript中的顶级对象**。

- 全局变量、自定义函数也是window对象的属性和方法。

- window对象下的属性和方法调用时，可以省略window。

# 常见的 BOM 对象以及对象方法

BOM可以让我们通过JS来操作浏览器。BOM中为我们提供了一些对象，来完成对浏览器相关的操作。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。

- Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。

- History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。

- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。

备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 `window.location.href`，也可以直接使用 `location.href`，二者是等价的。

备注2：不要忘了，之前学习过的`document`也是在`window`中保存的。

## window

### 弹出系统对话框

比如说，`alert(1)`是`window.alert(1)`的简写，因为它是window的子方法。

系统对话框有三种：

```javascript
	alert();	//不同浏览器中的外观是不一样的
	confirm();  //兼容不好
	prompt();	//不推荐使用

```

### 打开窗口、关闭窗口

1、打开窗口：

```
	window.open(url,target,param)
```

**参数解释：**

- url：要打开的地址。

- target：新窗口的位置。可以是：`_blank` 、`_self`、 `_parent` 父框架。

- param：新窗口的一些设置。

- 返回值：新窗口的句柄。

**param**这个参数，可以填各种各样的参数（），比如：

- name：新窗口的名称，可以为空

- features：属性控制字符串，在此控制窗口的各种属性，属性之间以逗号隔开。

- fullscreen= { yes/no/1/0 } 是否全屏，默认no

- channelmode= { yes/no/1/0 } 是否显示频道栏，默认no

- toolbar= { yes/no/1/0 } 是否显示工具条，默认no

- location= { yes/no/1/0 } 是否显示地址栏，默认no。（有的浏览器不一定支持）

- directories = { yes/no/1/0 } 是否显示转向按钮，默认no

- status= { yes/no/1/0 } 是否显示窗口状态条，默认no

- menubar= { yes/no/1/0 } 是否显示菜单，默认no

- scrollbars= { yes/no/1/0 } 是否显示滚动条，默认yes

- resizable= { yes/no/1/0 } 是否窗口可调整大小，默认no

- width=number 窗口宽度（像素单位）

- height=number 窗口高度（像素单位）

- top=number 窗口离屏幕顶部距离（像素单位）

- left=number 窗口离屏幕左边距离（像素单位）

各个参数之间用逗号隔开就行，但我们最好是把它们统一放到json里。

2、关闭窗口：window.close()

（1）和（2）的代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<a href="javascript:;">点击我打开一个新的页面</a>
<a href="javascript:;">点击我关闭本页面</a>
<script>
    //新窗口 = window.open(地址,是否开新窗口,新窗口的各种参数);
    var a1 = document.getElementsByTagName("a")[0];
    var a2 = document.getElementsByTagName("a")[1];
    a1.onclick = function () {
//举例1： window.open("http://www.jx.com","_blank");
        var json = {
            "name": "helloworld",
            "fullscreen": "no",
            "location": "no",
            "width": "100px",
            "height": "100px",
            "top": "100px",
            "left": "100px"
        };
        window.open("http://www.baidu.com", "_blank", json); //举例2
    }

    //关闭本页面
    a2.onclick = function () {
        window.close();
    }
</script>
</body>
</html>
```

3、新窗口相关：

- 新窗口.moveTo(5,5)

- 新窗口.moveBy()

- 新窗口.resizeTo()

- window.resizeBy()

代码举例：

```javascript
        var newWin = window.open("demo.html", "_blank", json);
        newWin.moveTo(500, 500);
```

## Navigator 和 `navigator.userAgent`

`Navigator`代表当前浏览器的信息，通过该对象可以识别不同的浏览器。

由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器了。

**一般我们只会使用`navigator.userAgent`来获取浏览器的信息**。


userAgent 的值是一个字符串，简称 **UA**，这个字符串中包含了用来描述浏览器信息的内容，不同的浏览器会有不同的userAgent。

**代码举例**：（获取当前浏览器的UA）

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
            var ua = navigator.userAgent; // 获取当前浏览器的 userAgent

            console.log('qianguyihao 当前浏览器的UA是：' + ua);

            if (/firefox/i.test(ua)) {
                alert('是火狐浏览器');
            } else if (/chrome/i.test(ua)) {
                alert('是Chrome浏览器');
            } else if (/msie/i.test(ua)) {
                alert('是IE浏览器');
            } else if ('ActiveXObject' in window) {
                alert('是 IE11 浏览器');
            }
        </script>
    </body>
</html>
```

#### navigator对象

window.navigator 的一些属性可以获取客户端的一些信息。

- userAgent：系统，浏览器)

- platform：浏览器支持的系统，win/mac/linux

举例：

```javascript
    console.log(navigator.userAgent);
    console.log(navigator.platform);
```

效果如下：

![](http://img.smyhvae.com/20180201_2140.png)

### 在电脑上模拟移动端浏览器

不同浏览器（包括微信内置的浏览器）的 userAgent 信息，是不一样的，我们可以根据 `navigator.userAgent`属性来获取。

比如说，我们在电脑浏览器上，按F12，然后在控制台输入`navigator.userAgent`，如下：

![](http://img.smyhvae.com/20180425_1656.png)

上图显示，MacOS上的Chrome浏览器的 userAgent 是：

```
"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
```

我们还可以在电脑浏览器的控制台里可以添加很多设备，通过这种方式，可以模拟移动端浏览器的场景，非常有用，请务必掌握。操作如下：

（1）需要点击 edit，手动添加：

![](http://img.smyhvae.com/20191127_1903.png)

（2）添加时，根据 User agent 来识别不同的浏览器：

![](http://img.smyhvae.com/20191127_1918.png)


### 不同浏览器的 userAgent

iOS 版微信浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E233 MicroMessenger/6.3.15 NetType/WIFI Language/zh_CN
```

Android 版微信浏览器：

```
Mozilla/5.0 (Linux; Android 5.0.1; GT-I9502 Build/LRX22C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 MicroMessenger/6.1.0.78_r1129455.543 NetType/WIFI
```

iOS 版本QQ浏览器：

```
Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_2 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C202 QQ/7.3.5.473 V1_IPH_SQ_7.3.5_1_APP_A Pixel/1125 Core/UIWebView Device/Apple(iPhone X) NetType/WIFI QBWebViewType/1
```

Android 版 QQ浏览器：

```
Mozilla/5.0 (Linux; Android 4.4.2; PE-TL20 Build/HuaweiPE-TL20; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 V1_AND_SQ_7.3.2_762_YYB_D QQ/7.3.2.3350 NetType/WIFI WebP/0.3.0 Pixel/1080
```



## History 对象

History对象：可以用来操作浏览器的向前或向后翻页。

### History对象的属性

```javascript
history.length
```

解释：获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。

### History对象的方法

**方法1**：

```
history.back();
```

解释：用来回退到上一个页面，作用和浏览器的「回退按钮」一样。

**方法2**：

```javascript
history.forward();
```

解释：用来跳转下一个页面，作用和浏览器的「前进按钮」一样。

**方法3**：

```javascript
history.go( int n);  // 需要整数作为参数

// 代码举例：
history.go( 1 ); // 向前跳转一个页面，相当于 history.forward()

history.go( 2 ); // 表示向前跳转两个页面

history.go( 0 ); // 刷新当前页面

history.go( -1 ); // 向后跳转一个页面，相当于 history.back()

history.go( -2 ); // 向后跳转两个页面

```

解释：向前/向后跳转 n 个页面。

备注：浏览器的前进按钮、后退按钮，在这个位置：

![](http://img.smyhvae.com/20180201_2146.png)


## Location 对象

Location 对象：封装了浏览器地址栏的 URL 信息。

下面介绍一些常见的属性和方法。

## location对象

`window.location`可以简写成location。location相当于浏览器地址栏，可以将url解析成独立的片段。

### location对象的属性

- **href**：跳转

- hash   返回url中#后面的内容，包含#

- host    主机名，包括端口

- hostname   主机名

- pathname     url中的路径部分

- protocol    协议 一般是http、https

- search	     查询字符串

**location.href属性举例**：

**举例1：**点击盒子时，进行跳转。

```html
<body>
<div>smyhvae</div>
<script>

    var div = document.getElementsByTagName("div")[0];

    div.onclick = function () {
        location.href = "http://www.baidu.com";   //点击div时，跳转到指定链接
 //     window.open("http://www.baidu.com","_blank");  //方式二
    }

</script>
</body>
```

**举例2：5秒后自动跳转到百度**。

有时候，当我们访问一个不存在的网页时，会提示5秒后自动跳转到指定页面，此时就可以用到location。举例：

```html
<script>

    setTimeout(function () {
        location.href = "http://www.baidu.com";
    }, 5000);
</script>
```


### location对象的方法

- location.assign()：改变浏览器地址栏的地址，并记录到历史中

设置location.href  就会调用assign()。一般使用location.href 进行页面之间的跳转。

- location.replace()：替换浏览器地址栏的地址，不会记录到历史中

- location.reload()：重新加载

### Location 对象的属性：location.href

```
location.href

location.href = 'https://xxx';
```

解释：获取当前页面的 url 路径（或者设置 url 路径）；或者跳转到指定路径。

举例1：

```javascript
console.log(location.href); // 获取当前页面的url 路径

```

举例2：

```javascript
    location.href = 'www.baidu.com'; // 跳转到指定的页面链接。通俗理解就是：跳转到其他的页面
```

从上方的**举例2**中可以看出：如果直接将`location.href`属性修改为一个绝对路径（或相对路径），则页面会自动跳转到该路径，并生成相应的历史记录。

**window.location.href 是异步代码：**

需要特别注意的是：window.location.href的赋值，并不会中断Javascript的执行立即进行页面跳转。因为 LocationChange 行为在浏览器内核中是起定时器异步执行的。异步执行的好处是为了防止代码调用过深，导致栈溢出，另外也是为了防止递归进入加载逻辑，导致状态紊乱，保证导航请求是顺序执行的。

解决办法：在 location.href 的下一行，加上 return 即可。意思是，执行了 location.href 之后，就不要再继续往下执行了。

参考链接：[location.href的异步机制](https://juejin.cn/post/6844904040518647815)


### Location 对象的方法

**方法1**：

```javascript
    location.assign(str);
```

解释：用来跳转到其他的页面，作用和直接修改`location.href`一样。

**方法2**：

```javascript
    location.reload();
```

解释：用于重新加载当前页面，作用和刷新按钮一样。

代码举例：

```javascript
    location.reload(); // 重新加载当前页面。
    location.reload(true); // 在方法的参数中传递一个true，则会强制清空缓存刷新页面。

```

**方法3**：

```javascript

    location.replace();
```

解释：使用一个新的页面替换当前页面，调用完毕也会跳转页面。但不会生成历史记录，不能使用「后退按钮」后退。
