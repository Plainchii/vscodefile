// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
'use strict';
var videoSite = window.location.href; // 获取当前网页的URL

//正则表达式，用于匹配不同的音乐网站URL
var reWY = /163(.*)song/i; // 匹配网易云音乐

// 定义一个HTML字符串，用于表示"一键免费下载"的按钮
var vipBtn = '<a target="_blank" id="VipMusicBtn" style="margin:10px 0;display:inline-block;padding:0 5px;height:22px;border:1px solid red;color:red;vertical-align:bottom;text-decoration:none;font-size:17px;line-height:22px;cursor:pointer;">一键免费下载</a>';

// 网易云音乐
if (reWY.test(videoSite)) {
    // 查找页面上类名为'u-icn-37'的元素，通常表示音乐标题
    var Title = $('.u-icn-37');
    // 在标题元素的父元素中插入"一键免费下载"的按钮
    Title.parent('.hd').after(vipBtn);
    // 设置按钮的链接，将当前页面的URL编码后添加到链接中
    $('#VipMusicBtn').attr('href', 'http://www.jbsou.cn/?url=' + encodeURIComponent(window.location.href.replace('http://music.163.com', "http://music.163.com/#")));
}

// 定义一个名为addNoticeDom的JavaScript函数
function addNoticeDom() {
    // 使用jQuery的$函数创建一个新的DOM元素wrap，并指定其HTML结构和属性
    var wrap = $(`
      <div id="noticeWrap1122">
        <div id="title" style="height: 150px;display: flex;">
          <div class="left" style="width:50px; flex-shrink:0; background: rgb(247, 96, 62);font-size: 28px;font-weight: bold;text-align:center;padding-top:30px; line-height: 28px;border-top-left-radius: 10px;color:#fff; font-size: 18px;cursor: pointer;">查看全文详情</div>
          <div style="flex: 1; padding: 4px 6px; position: relative; font-size: 12px;">
            <div id="msg" style="font-size: 14px;font-weight: bold; margin-bottom: 4px;">说明</div>
            <ul>
              <li>1、资源来自网络搜索</li>
              <li>2、仅支持WORD，其它格式勿尝试</li>
              <li>3、仅供学习交流，禁止挪用</li>
              <li>4、服务器资源有限，勿滥用</li>
              <li>5、脚本作者保留解释权</li>
            </ul>
            <div id="btn1122" style="position: absolute;bottom: 6px; height: 26px;line-height: 24px;box-sizing: border-box;padding: 0 6px;font-size: 14px;border-radius: 3px;text-align: center;background-color: #f7603e;border: 1px solid #f7603e;color: #fff;cursor: pointer">点我查看全文</div>
          </div>
          <div style="padding: 8px 8px;border-left: dashed 1px #ccc;">
            <div style="font-size: 18px;font-weight: bold; margin-bottom: 4px;text-align: center;">爱发电支持</div>
            <img style="width: 100px; height: 100px;" src="https://i.ibb.co/rwCxdXd/1-416846149-171-85-3-730681014-e24a4f18d9fc8c80ded57955bc097323.png"/>
          </div>
          <div style="padding: 8px 8px;border-left: dashed 1px #ccc;">
            <div style="font-size: 18px;font-weight: bold; margin-bottom: 4px;text-align: center;">反馈QQ群</div>
            <img style="width: 100px; height: 100px;" src="https://i.ibb.co/9G55yWs/wecom-temp-33536f12607ebd9674724c4fce758dc5.jpg"/>
          </div>
        </div>
        <div class="content" style="height: 500px;overflow-y:scroll;color:#222;border-bottom-left-radius: 10px;padding:12px;border: dashed 1px #ccc;">服务器资源有限，欢迎打赏支持，长治久安。爱发电项目 <b><a href="https://afdian.net/a/json2doc" target="_blank">json2doc(https://afdian.net/a/json2doc)</a></b></div>
        <div id="toggle" style="position: absolute; left:5px;top:5px;cursor: pointer;"></div></div>`)
  
    // 设置wrap元素的CSS样式
    $(wrap).css({
      "position": "fixed",
      "right": "-450px",
      "top": "66px",
      "width": "500px",
      "background-color": "#fff",
      "background-color": "#f6f6f6",
      "border-bottom-left-radius": "10px",
      "box-sizing": "border-box"
    })
  
    // 将wrap元素添加到HTML文档中
    $('html').append(wrap)
  
    // 给id为noticeWrap1122的元素下的.left子元素绑定点击事件处理函数，点击时调用toggleNotice函数
    $('#noticeWrap1122 .left').on('click', () => {
      toggleNotice();
    })
  }


  这段代码创建了一个名为addNoticeDom的函数，该函数用于在HTML文档中添加一个包含通知内容的DOM元素。这个DOM元素具有一些内部结构和样式，并且具有一些事件处理逻辑。注释提供了对代码中各个部分的详细解释。





