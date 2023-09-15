
// ==UserScript==
// @name         百度文库｜wenku|VIP｜全文复制｜WORD|免费｜全文搜索｜文字复制｜欢迎反馈
// @version      0.1.6
// @description  百度文库，免费获取文库全文，支持全文复制；当前仅支持最普通的 WORD 格式，更多格式待开发；下载待开发；
// @author       You
// @match        *://wenku.baidu.com/view/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js
// @license      AGPL
// @grant        GM_xmlhttpRequest
// @connect      20.212.145.170
// @connect      101.43.232.152
// @namespace https://greasyfork.org/users/1052410
// ==/UserScript==
var NoticeType = {
    'SUCC': 'success',
    'ERR': 'error'
  }
  
  
  $(document).ready(function() {
  
    addNoticeDom();
    addNormalBtn();
  
    function getDocId() {
      return pageData.viewBiz.docInfo.showDocId
    }
  
    function getDocType() {
      return pageData.viewBiz.docInfo.fileType
    }
  
    function getDocName() {
      return pageData.viewBiz.docInfo.title
    }
  
    function addNormalBtn() {
  
      if ($('.tool-bar-wrap')) {
        var btn = $('<div id="searchBtn-666">查看全文</div>')
        $(btn).css({
          "float": "right",
          "margin-top": "7px",
          "margin-left": "12px",
          "font-weight": "500",
          "height": "46px",
          "line-height": "44px",
          "display": "inline-block",
          "box-sizing": "border-box",
          "padding": "0 17px",
          "font-size": "18px",
          "vertical-align": "middle",
          "border-radius": "6px",
          "transition-duration": ".25s",
          "transition-property": "background-color",
          "min-width": "168px",
          "text-align": "center",
          "background-color": "#f7603e",
          "border": "1px solid #f7603e",
          "color": "#fff",
          "cursor": "pointer"
        })
        $('.tool-bar-wrap').prepend(btn)
        addListener()
      } else {
        // TODO
      }
    }
  
    function addListener() {
      $('#searchBtn-666').on('click', function() {
  
        var id = getDocId();
        var docType = getDocType();
        var docName = getDocName();
  
        if (!id) {
          showNotice(NoticeType.ERR, '未获取到文档ID');
          return;
        }
  
        if (!docType || docType != 'word') {
          showNotice(NoticeType.ERR, '当前仅支持WORD格式');
          return;
        }
  
        if (!docName) {
          showNotice(NoticeType.ERR, '未获取到文档名称');
          return;
        }
  
        showNotice(NoticeType.SUCC, '正在加载...(服务器压力大，酌情使用)', true);
  
        getParams(
          id,
          docName
        );
  
      })
  
      $('#btn1122').on('click', function() {
  
        var id = getDocId();
        var docType = getDocType();
        var docName = getDocName();
  
        if (!id) {
          showNotice(NoticeType.ERR, '未获取到文档ID');
          return;
        }
  
        if (!docType || docType != 'word') {
          showNotice(NoticeType.ERR, '当前仅支持WORD格式');
          return;
        }
  
        if (!docName) {
          showNotice(NoticeType.ERR, '未获取到文档名称');
          return;
        }
  
        showNotice(NoticeType.SUCC, '正在加载...(服务器压力大，酌情使用)', true);
  
        getParams(
          id,
          docName
        );
  
      })
    }
  
    function getParams(id, docName) {
  
      GM.xmlHttpRequest({
        method: "GET",
        url: `http://101.43.232.152:4000?id=${id}&docName=${docName}`,
        onload: function(response) {
          showNotice(NoticeType.SUCC, response.responseText, true)
        }
      })
    }
  
    function addNoticeDom() {
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
      $('html').append(wrap)
      $('#noticeWrap1122 .left').on('click', () => {
        toggleNotice();
      })
    }
  
    function showNotice(type, content, keepOpen) {
  
      $('#noticeWrap1122 > .content').html(content || '');
  
      $('#noticeWrap1122').animate({right: '0px'});
  
      if (!keepOpen) {
        setTimeout(() => {
          hideNotice()
        }, 3000)
      }
    }
  
    function toggleNotice() {
      if ($('#noticeWrap1122').css('right') == '-450px') {
        $('#noticeWrap1122').animate({right: '0px'});
      } else {
        $('#noticeWrap1122').animate({right: '-450px'});
      }
    }
  
    function hideNotice() {
      $('#noticeWrap1122').animate({right: '-450px'}, 'fast', function() {
        $('#noticeWrap1122').css({
          "color": "#222",
          "background-color": "#f6f6f6",
        })
      });
    }
  })