## 事件对象

当事件的响应函数被触发时，会产生一个事件对象`event`。浏览器每次都会将这个事件`event`作为实参传进之前的响应函数。

这个对象中包含了与当前事件相关的一切信息。比如鼠标的坐标、键盘的哪个按键被按下、鼠标滚轮滚动的方向等。

### 获取 event 对象（兼容性问题）

所有浏览器都支持event对象，但支持的方式不同。如下。

（1）普通浏览器的写法是 `event`。比如：

![](http://img.smyhvae.com/20180203_1735.png)

（2）ie 678 的写法是 `window.event`。此时，事件对象 event 是作为window对象的属性保存的。

于是，我们可以采取一种兼容性的写法。如下：

```javascript
    event = event || window.event; // 兼容性写法
```

代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    //点击页面的任何部分
    document.onclick = function (event) {
        event = event || window.event; ////兼容性写法

        console.log(event);
        console.log(event.timeStamp);
        console.log(event.bubbles);
        console.log(event.button);
        console.log(event.pageX);
        console.log(event.pageY);
        console.log(event.screenX);
        console.log(event.screenY);
        console.log(event.target);
        console.log(event.type);
        console.log(event.clientX);
        console.log(event.clientY);
    }
</script>
</body>
</html>
```

### event 属性

event 有很多属性，比如：

![](http://img.smyhvae.com/20180203_1739.png)

由于pageX 和 pageY的兼容性不好，我们可以这样做：

- 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。

## Event举例

### 举例1：使 div 跟随鼠标移动

代码实现：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title></title>
    <style type="text/css">
      #box1 {
        width: 100px;
        height: 100px;
        background-color: red;
        /*
        * 开启box1的绝对定位
        */
        position: absolute;
      }
    </style>

    <script type="text/javascript">
      window.onload = function() {
        /*
         * 使div可以跟随鼠标移动
         */

        //获取box1
        var box1 = document.getElementById("box1");

        //给整个页面绑定：鼠标移动事件
        document.onmousemove = function(event) {
          //兼容的方式获取event对象
          event = event || window.event;

          // 鼠标在页面的位置 = 滚动条滚动的距离 + 可视区域的坐标。
          var pagex = event.pageX || scroll().left + event.clientX;
          var pagey = event.pageY || scroll().top + event.clientY;

          //   设置div的偏移量（相对于整个页面）
          // 注意，如果想通过 style.left 来设置属性，一定要给 box1开启绝对定位。
          box1.style.left = pagex + "px";
          box1.style.top = pagey + "px";
        };
      };

      // scroll 函数封装
      function scroll() {
        return {
          //此函数的返回值是对象
          left: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
          right:
            window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
        };
      }
    </script>
  </head>
  <body style="height: 1000px;width: 2000px;">
    <div id="box1"></div>
  </body>
</html>
```

### 举例2：获取鼠标距离所在盒子的距离

关键点：

```
    鼠标距离所在盒子的距离 = 鼠标在整个页面的位置 - 所在盒子在整个页面的位置
```

代码演示：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            padding-top: 100px;
            background-color: pink;
            margin: 100px;
            text-align: center;
            font: 18px/30px "simsun";
            cursor: pointer;
        }
    </style>
</head>
<body>
<div class="box">

</div>

<script src="animate.js"></script>
<script>
    //需求：鼠标进入盒子之后只要移动，哪怕1像素，随时显示鼠标在盒子中的坐标。
    //技术点：新事件，onmousemove：在事件源上，哪怕鼠标移动1像素也会触动这个事件。
    //一定程度上，模拟了定时器
    //步骤：
    //1.老三步和新五步
    //2.获取鼠标在整个页面的位置
    //3.获取盒子在整个页面的位置
    //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。

    //1.老三步和新五步
    var div = document.getElementsByTagName("div")[0];

    div.onmousemove = function (event) {

        event = event || window.event;
        //2.获取鼠标在整个页面的位置
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        //3.获取盒子在整个页面的位置
        // var xx =
        // var yy =
        //4.用鼠标的位置减去盒子的位置赋值给盒子的内容。
        var targetx = pagex - div.offsetLeft;
        var targety = pagey - div.offsetTop;
        this.innerHTML = "鼠标在盒子中的X坐标为：" + targetx + "px;<br>鼠标在盒子中的Y坐标为：" + targety + "px;"
    }

</script>
</body>
</html>
```

实现效果：

![](http://img.smyhvae.com/20180203_1828.gif)

### 举例3：商品放大镜

代码实现：

（1）index.html:

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 350px;
            height: 350px;
            margin: 100px;
            border: 1px solid #ccc;
            position: relative;
        }

        .big {
            width: 400px;
            height: 400px;
            position: absolute;
            top: 0;
            left: 360px;
            border: 1px solid #ccc;
            overflow: hidden;
            display: none;
        }

        /*mask的中文是：遮罩*/
        .mask {
            width: 175px;
            height: 175px;
            background: rgba(255, 255, 0, 0.4);
            position: absolute;
            top: 0;
            left: 0;
            cursor: move;
            display: none;
        }

        .small {
            position: relative;
        }

        img {
            vertical-align: top;
        }
    </style>

    <script src="tools.js"></script>
    <script>
        window.onload = function () {
            //需求：鼠标放到小盒子上，让大盒子里面的图片和我们同步等比例移动。
            //技术点：onmouseenter==onmouseover 第一个不冒泡
            //技术点：onmouseleave==onmouseout  第一个不冒泡
            //步骤：
            //1.鼠标放上去显示盒子，移开隐藏盒子。
            //2.老三步和新五步（黄盒子跟随移动）
            //3.右侧的大图片，等比例移动。

            //0.获取相关元素
            var box = document.getElementsByClassName("box")[0];
            var small = box.firstElementChild || box.firstChild;
            var big = box.children[1];
            var mask = small.children[1];
            var bigImg = big.children[0];

            //1.鼠标放上去显示盒子，移开隐藏盒子。(为小盒子绑定事件)
            small.onmouseenter = function () {
                //封装好方法调用：显示元素
                show(mask);
                show(big);
            }
            small.onmouseleave = function () {
                //封装好方法调用：隐藏元素
                hide(mask);
                hide(big);
            }

            //2.老三步和新五步（黄盒子跟随移动）
            //绑定的事件是onmousemove，而事件源是small(只要在小盒子上移动1像素，黄盒子也要跟随)
            small.onmousemove = function (event) {
                //新五步
                event = event || window.event;

                //想要移动黄盒子，必须要知道鼠标在small小图中的位置。
                var pagex = event.pageX || scroll().left + event.clientX;
                var pagey = event.pageY || scroll().top + event.clientY;

                //x：mask的left值，y：mask的top值。
                var x = pagex - box.offsetLeft - mask.offsetWidth / 2; //除以2，可以保证鼠标mask的中间
                var y = pagey - box.offsetTop - mask.offsetHeight / 2;

                //限制换盒子的范围
                //left取值为大于0，小盒子的宽-mask的宽。
                if (x < 0) {
                    x = 0;
                }
                if (x > small.offsetWidth - mask.offsetWidth) {
                    x = small.offsetWidth - mask.offsetWidth;
                }
                //top同理。
                if (y < 0) {
                    y = 0;
                }
                if (y > small.offsetHeight - mask.offsetHeight) {
                    y = small.offsetHeight - mask.offsetHeight;
                }

                //移动黄盒子
                console.log(small.offsetHeight);
                mask.style.left = x + "px";
                mask.style.top = y + "px";

                //3.右侧的大图片，等比例移动。
                //如何移动大图片？等比例移动。
                //    大图片/大盒子 = 小图片/mask盒子
                //    大图片走的距离/mask走的距离 = （大图片-大盒子）/（小图片-黄盒子）
//                var bili = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-mask.offsetWidth);

                //大图片走的距离/mask盒子都的距离 = 大图片/小图片
                var bili = bigImg.offsetWidth / small.offsetWidth;

                var xx = bili * x;  //知道比例，就可以移动大图片了
                var yy = bili * y;

                bigImg.style.marginTop = -yy + "px";
                bigImg.style.marginLeft = -xx + "px";
            }
        }
    </script>
</head>
<body>
<div class="box">
    <div class="small">
        <img src="images/001.jpg" alt=""/>
        <div class="mask"></div>
    </div>
    <div class="big">
        <img src="images/0001.jpg" alt=""/>
    </div>
</div>
</body>
</html>
```

（2）tools.js:

```javascript
/**
 * Created by smyhvae on 2018/02/03.
 */

//显示和隐藏
function show(ele) {
    ele.style.display = "block";
}

function hide(ele) {
    ele.style.display = "none";
}

function scroll() {  // 开始封装自己的scrollTop
    if (window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if (document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

```

效果演示：

![](http://img.smyhvae.com/20180203_1920.gif)
