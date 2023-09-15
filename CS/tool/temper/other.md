### 时间加速
首先来介绍一下时间加速的原理.一般情况下,都是使用setInterval来做定时器,我们只要把这个定时器的时间缩短,比如之前是1s触发一次,现在变成500ms触发一次,那么就相当于时间缩短了一倍.

怎么缩短呢?我们可以劫持setInterval这个函数,传入值为1000,我们把他变为500.代码类似下面这样:

>在脚本中也是类似的代码,不过如果使用//@grant unsafeWindow的话,window替换为unsafeWindow,

视频倍速
```
document.querySelector('video').playbackRate=2;
```

主要是设置脚本运行的时候.这里我们设置为:
// @run-at document-start 
希望脚本尽快的被注入,因为我们要抢在前端调用setInterval之前来替换掉setInterval函数.

```js
// @match        https://www.bilibili.com/video/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

let rate=4;//倍速

if(unsafeWindow.location.href.indexOf('time.tianqi.com')!=-1){
    //时间网站,用时间加速
    let hookSetInterval=unsafeWindow.setInterval;
    //将系统提供的setInterval保存
    unsafeWindow.setInterval=function(a,b){
        //将系统的setInterval替换为我们自己的
        return hookSetInterval(a,b/rate);
        //经过处理后再调用系统的setInterval
    }
}else{
    //bilibili用视频加速
    unsafeWindow.onload=function(){
        //在元素都加载完成后再监听video的播放时间,再进行倍速设置
        unsafeWindow.document.querySelector('video').onplay=function(){
            unsafeWindow.document.querySelector('video').playbackRate=rate;
        }
    }
}
```