// ==UserScript==
// @name              视频解析ver.1.0
// @version           3.2.7
// @description       
// @author            torey
// @icon              
// @namespace         https://greasyfork.org/users/665670
// @require           https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js
// @match             *://*.youku.com/*
// @match             *://*.iqiyi.com/*
// @match             *://*.iq.com/*
// @match             *://*.le.com/*
// @match             *://v.qq.com/*
// @match             *://m.v.qq.com/*
// @match             *://*.tudou.com/*
// @match             *://*.mgtv.com/*
// @match             *://tv.sohu.com/*
// @match             *://film.sohu.com/*
// @match             *://*.1905.com/*
// @match             *://*.bilibili.com/*
// @match             *://*.pptv.com/*
// @license           GPL License
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_download
// @grant             GM_registerMenuCommand
// ==/UserScript==

(function () {
    'use strict';
    var $ = $ || window.$;
    var log_count = 1;
    var host = location.host;
    var parseInterfaceList = [];
    var selectedInterfaceList = [];
    var originalInterfaceList = [
        {title:"综合/B站",type:"1",url:"https://jx.jsonplayer.com/player/?url="},
        {title:"M1907",type:"1",url:"https://z1.im1907.top/?&jx="},
        {title:"ckplayer",type:"1",url:"https://www.ckplayer.vip/jiexi/?url="},
        {title:"qqwtt",type:"1",url:"https://jx.qqwtt.com/?url="},
        {title:"剖元",type:"1",url:"https://www.pouyun.com/?url="},
        {title:"盘古",type:"1",url:"https://www.pangujiexi.com/jiexi/?url="},
        {title:"eptept",type:"1",url:"https://dmjx.m3u8.tv/?url="},
        {title:"BL",type:"1",url:"https://vip.bljiex.com/?v="},
        {title:"play",type:"1",url:"https://www.playm3u8.cn/jiexi.php?url="},
        {title:"夜幕",type:"1",url:"https://www.yemu.xyz/?url="},
        {title:"administratorw",type:"1",url:"https://www.administratorw.com/video.php?url="},
        {title:"[腾讯(芒果)]",type:"1",url:"https://jx.m3u8.tv/jiexi/?url="},
        {title:"冰豆",type:"1",url:"https://api.qianqi.net/vip/?url="},
        {title:"BL",type:"1",url:"https://vip.bljiex.com/?v="},
        {title:"云解析",type:"1",url:"https://yparse.ik9.cc/index.php?url="},
        {title:"夜幕",type:"1",url:"https://www.yemu.xyz/?url="},
        {title:"BL解析",type:"1",url:"https://vip.bljiex.cc/?v="},
        {title:"YT",type:"1",url:"https://jx.yangtu.top/?url="},
        {title:"JY",type:"1",url:"https://jx.playerjy.com/?url="},
        {title:'JY解析',type:"1",url:'https://jx.we-vip.com/?url=',},
        {title:"⑸号解析",type:"1",url:"https://www.8090g.cn/jiexi/?url="},
        {title:"8090g",type:"1",url:"https://www.8090g.cn/?url="},
        {title:"人人解析",type:"1",url:"https://vip.mpos.ren/v/?url="},
        {title:"ckmov",type:"1",url:"https://www.ckmov.com/?url="},
        {title:"Player-JY",type:"1",url:"https://jx.playerjy.com/?url="},
        {title:"虾米",type:"1",url:"https://jx.xmflv.com/?url="},
        {title:"yparse",type:"1",url:"https://jx.yparse.com/index.php?url="},
        {title:"m1907",type:"1",url:"https://im1907.top/?jx="},
        {title:"猪蹄",type:"1",url:"https://jx.iztyy.com/Bei/?url="},
        {title:"qianqi",type:"1",url:"https://api.qianqi.net/vip/?url="},

        {type:"1",url:"https://jx.m3u8.tv/jiexi/?url=",title:"⑤号接口"},
        {type:"1",url:"https://www.8090.la/8090/?url=",title:"全能vip②"},
        {type:"1",url:"https://www.mtosz.com/m3u8.php?url=",title:"Mao解析"},
        {type:"1",url:"https://movie.heheda.top/?v=",title:"风影阁"},
        //------------------------------------------------------------------------------
        {title:"M1907",type:"0",url:"https://z1.im1907.top/?jx="},
        {title:"yparse",type:"0",url:"https://jx.yparse.com/index.php?url="},
        {type:"0",url:"http://vip.wandhi.com/?v=",title:"玩的嗨"},

    ];

    //自定义 log 函数
    function mylog(param1, param2) {
        param1 = param1 ? param1 : "";
        param2 = param2 ? param2 : "";
        console.log("#" + log_count++ + "-VIP-log:", param1, param2);
    }

    //内嵌页内播放
    function innerParse(url) {
        $("#iframe-player").attr("src", url);
    }

    //视频播放控制
    function reomveVideo() {
        setInterval(() => {
            const videos = document.getElementsByTagName('video');
            for (let video of videos) {
                video.src = "";
                video.muted = true;
                video.load();
                video.pause();
            }
        }, 500);
    }

    //实时监听网址变化
    function urlChangeReload(){
        var oldURL = window.location.href;
        setInterval(() => {
            var currentURL = window.location.href;
            if (oldURL !== currentURL) {
                window.location.reload();
            }
        }, 500);
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMaddStyle(css) {
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        var doc = document.head || document.documentElement;
        doc.appendChild(myStyle);
    }
    //播放节点预处理
    var node = "";
    var player_Containers = [
        {
            host: "v.qq.com",
            container: "#mod_player,#player-container,.container-player",
            displayNodes: ["#mask_layer", ".mod_vip_popup", ".panel-tip-pay"]
        }
    ];

    //播放容器处理与弹出界面处理
    function playerNodes(){
        player_Containers.forEach((item, index) => {
            if (item.host == host) {
                node = item.container;
                setInterval(() => {
                    item.displayNodes.forEach((obj, index) => {
                        $(obj).css("display","none")
                    });
                }, 500);
            }
        })
    }

    var autoPlay = !!GM_getValue("autoPlayerKey_" + host, null) ? "开" : "关";

    var iframeDivCss = "width:100%;height:100%;z-index:999999;";
    var videoPlayer = $(`<div id='iframe-div' style='`+ iframeDivCss + `'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`);

    var sImgBase64=`
        `;

    // 视频解析预处理
    var innerList = [];
    var outerList = [];
    var innerli = "";
    var outerli = "";
    var num = "";
    originalInterfaceList.forEach((item, index) => {
        if (item.type == "1") {
            innerList.push(item);
            innerli += "<li>" + item.title + "</li>";
        }else{
            outerList.push(item);
            outerli += "<li>" + item.title + "</li>";
        }
    })

    parseInterfaceList = innerList.concat(outerList);

    //图片按钮定位
    var left = 0;
    var top = 100;
    var Position = GM_getValue("Position_" + host);
    if(!!Position){
        top = Position.top;
    }

    GMaddStyle(`
                #vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; right:0px; width:33px; z-index:99999; font-size:12px; text-align:left;}


                #vip_movie_box .selected_text {width:32px; padding:4px 0px; text-align:center; background-color:#FF4500;}
		        #vip_movie_box .selected_text img {width:22px; height:22px;display:inline-block; vertical-align:middle;}


                #vip_movie_box .vip_mod_box_selected {width:320px; max-height:450px;display:none; position:absolute; right:33px; top:0; text-align:center; backdrop-filter: saturate(1) blur(15px); background: rgba(255, 255, 255, 0.2); border:1px solid gray; overflow-y: auto;}


                #vip_movie_box .vip_mod_box_selected ul{list-style: none; margin:10px 10px;}
                #vip_movie_box .vip_mod_box_selected li{font-size:12px; color:#FFFFFF; text-align:center; width:calc(36% - 14px); line-height:21px; float:left; padding:4px 4px; margin:3px 3px;background: rgba(0,0,0,0.6);border-radius:2px;box-sizing:border-box;}
                #vip_movie_box .vip_mod_box_selected li:hover{color:#FFFFFF; background-color:#FF4500;}


		        #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar{width:5px; height:1px;}
                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
                #vip_movie_box .vip_mod_box_selected::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}


                #vip_movie_box .vip_mod_box_selected .selected{color:#FFFFFF; background-color:#FF4500;}


                #vip_movie_box .img_text {width:32px; text-align:center; padding:3px 0px; background-color:#FF4500; margin:1px 0px;}`);

   

    var html = $(`<div id='vip_movie_box'>
                    <div class='selected_text' >
                       <img src='`+ sImgBase64 +`' title='视频解析'/>
                       <div class='vip_mod_box_selected' >
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#ffffff;  line-height:21px; margin-top:10px;'>页内解析</div>
                             <ul>
                               ` + innerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#ffffff;  line-height:21px; margin-top:10px;'>页外解析</div>
                             <ul>
                               ` + outerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                       </div>
                    </div>
                    <div class="img_text"><div class="vip_auto" style="color:white; font-size:20px; font-weight:bold; line-height:23px; " title="自动解析开关">${autoPlay}</div></div>
                 </div>`);

    $("body").append(html);


    //视频解析事件处理
        $(".selected_text").on("mouseover", () => $(".vip_mod_box_selected").show());
        $(".selected_text").on("mouseout", () => $(".vip_mod_box_selected").hide());

    $(".vip_mod_box_selected li").each((index, item) => {
        item.addEventListener("click", function(){
            if (parseInterfaceList[index].type == "1") {
                $(this).siblings().removeClass("selected");
                $(this).addClass("selected");
                GM_setValue("autoPlayerValue_" + host, index);

                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    reomveVideo();
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }else {
                GM_openInTab(parseInterfaceList[index].url + location.href, false);
            }
        });
    });

    //自动解析视频事件处理
    $(".vip_auto").on("click", function () {
        if (!!GM_getValue("autoPlayerKey_" + host, null)) {
            GM_setValue("autoPlayerKey_" + host, null);
            $(this).html("关");
        } else {
            GM_setValue("autoPlayerKey_" + host, "true");
            $(this).html("开");
        }
        setTimeout(function () {
            window.location.reload();
        }, 200);
    });

    //检测自动播放是否开启
    function autoPlayer() {
        if (!!GM_getValue("autoPlayerKey_" + host, null)) {
            var index = GM_getValue("autoPlayerValue_" + host, 2);
            $(".vip_mod_box_selected li").eq(index).addClass("selected");
            $(".vip_auto").attr("title", `当前解析源：${parseInterfaceList[index].title}`);
            setTimeout(function () {
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    reomveVideo();
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }, 2500);
            urlChangeReload(); //实时监听网址变化
        }
    };

    window.onload = function () {
        playerNodes();
        autoPlayer();
    }

})();
