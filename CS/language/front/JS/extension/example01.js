// ==UserScript==
// @name              VIP 视频解析
// @version           3.2.7
// @description       支持腾讯视频、爱奇艺、优酷、土豆、芒果TV、搜狐视频、乐视视频、PPTV、风行、华数TV、哔哩哔哩等，支持多个解析接口切换，支持视频自由选集，自动解析视频，支持自定义拖拽位置，支持视频广告跳过，支持页内页外解析，支持 Tampermonkey、Violentmonkey、Greasemonkey
// @author            sign
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
// 右键拖拽功能 - 防止与其他脚本干扰
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
    function GMopenInTab(url, open_in_background) {
        if (typeof GM_openInTab === "function") {
            GM_openInTab(url, open_in_background);
        } else {
            GM.openInTab(url, open_in_background);
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMgetValue(name, value) {
        if (typeof GM_getValue === "function") {
            return GM_getValue(name, value);
        } else {
            return GM.getValue(name, value);
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMsetValue(name, value) {
        if (typeof GM_setValue === "function") {
            GM_setValue(name, value);
        } else {
            GM.setValue(name, value);
        }
    }

    //兼容 Tampermonkey | Violentmonkey | Greasymonkey 4.0+
    function GMxmlhttpRequest(obj) {
        if (typeof GM_xmlhttpRequest === "function") {
            GM_xmlhttpRequest(obj);
        } else {
            GM.xmlhttpRequest(obj);
        }
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
        }, {
            host: "m.v.qq.com",
            container: ".mod_player,#player",
            displayNodes: [".mod_vip_popup", "[class^=app_],[class^=app-],[class*=_app_],[class*=-app-],[class$=_app],[class$=-app]", "div[dt-eid=open_app_bottom]", "div.video_function.video_function_new", "a[open-app]", "section.mod_source", "section.mod_box.mod_sideslip_h.mod_multi_figures_h,section.mod_sideslip_privileges,section.mod_game_rec", ".at-app-banner"]
        }, {
            host: "w.mgtv.com",
            container: "#mgtv-player-wrap",
            displayNodes: []
        }, {
            host: "www.mgtv.com",
            container: "#mgtv-player-wrap",
            displayNodes: []
        }, {
            host: "m.mgtv.com",
            container: ".video-area",
            displayNodes: ["div[class^=mg-app]", ".video-area-bar", ".open-app-popup"]
        }, {
            host: "www.bilibili.com",
            container: "#player_module,#bilibiliPlayer,#bilibili-player",
            displayNodes: ["[class^=playerPop_wrap]"]
        }, {
            host: "m.bilibili.com",
            container: ".player-wrapper,.player-container,.mplayer",
            displayNodes: []
        }, {
            host: "www.iqiyi.com",
            container: "#flashbox",
            displayNodes: ["#playerPopup", "div[class^=qy-header-login-pop]", "section[class^=modal-cover_]", ".toast"]
        }, {
            host: "m.iqiyi.com",
            container: ".m-video-player-wrap",
            displayNodes: ["div.m-iqyGuide-layer", "a[down-app-android-url]", "[name=m-extendBar]", "[class*=ChannelHomeBanner]", "section.m-hotWords-bottom"]
        }, {
            host: "www.iq.com",
            container: ".intl-video-wrap",
            displayNodes: []
        }, {
            host: "v.youku.com",
            container: "#ykplayer,#player",
            displayNodes: ["#iframaWrapper", "#checkout_counter_mask", "#checkout_counter_popup"]
        }, {
            host: "m.youku.com",
            container: "#player,.h5-detail-player",
            displayNodes: [".callEnd_box", ".h5-detail-guide", ".h5-detail-vip-guide"]
        }, {
            host: "tv.sohu.com",
            container: "#player",
            displayNodes: []
        }, {
            host: "film.sohu.com",
            container: "#playerWrap",
            displayNodes: []
        }, {
            host: "www.le.com",
            container: "#le_playbox",
            displayNodes: []
        }, {
            host: "video.tudou.com",
            container: ".td-playbox",
            displayNodes: []
        }, {
            host: "v.pptv.com",
            container: "#pptv_playpage_box",
            displayNodes: []
        }, {
            host: "vip.pptv.com",
            container: ".w-video",
            displayNodes: []
        }, {
            host: "www.wasu.cn",
            container: "#flashContent",
            displayNodes: []
        }, {
            host: "www.acfun.cn",
            container: "#player",
            displayNodes: []
        }, {
            host: "vip.1905.com",
            container: "#player,#vodPlayer",
            displayNodes: []
        }, {
            host: "www.1905.com",
            container: "#player,#vodPlayer",
            displayNodes: []
        },
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

    var autoPlay = !!GMgetValue("autoPlayerKey_" + host, null) ? "开" : "关";
    var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)

    var iframeDivCss = "width:100%;height:100%;z-index:999999;";
    var videoPlayer = $(`<div id='iframe-div' style='`+ iframeDivCss + `'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`);

    var ImgBase64 =`
        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAgUlEQVR42t3UQQqAIBAF0EahE3S1buFtPEY3jGr8QgxEm5D5Cc7GlfP8jigTsVR1ESZQaxxAcF+Xa2ORgEUtAQB1BsQSpJRCzvmkAffqmsAgRt
        M+AHXIYwCsGgj4c8j1y4iNfW1vl2e6OgPbA2DVC0CS2ALjxMcnwD0BTjxD31lAAVVYNypdDsbLAAAAAElFTkSuQmCC`;

    var sImgBase64=`
        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAgUlEQVR42t3UQQqAIBAF0EahE3S1buFtPEY3jGr8QgxEm5D5Cc7GlfP8jigTsVR1ESZQaxxAcF+Xa2ORgEUtAQB1BsQSpJRCzvmkAffqmsAgRt
        M+AHXIYwCsGgj4c8j1y4iNfW1vl2e6OgPbA2DVC0CS2ALjxMcnwD0BTjxD31lAAVVYNypdDsbLAAAAAElFTkSuQmCC`;

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
    var Position = GMgetValue("Position_" + host);
    if(!!Position){
        top = Position.top;
    }

    GMaddStyle(`
                #vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; right:0px; width:33px; z-index:99999; font-size:12px; text-align:left;}

                #vip_movie_box .item_text {width:32px; padding:4px 0px; text-align:center; background-color:#FF4500; margin:1px 0px;}
		        #vip_movie_box .item_text img {width:22px; height:22px; display:inline-block; vertical-align:middle;}

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

    if (isMobile) {
        GMaddStyle(`#vip_movie_box {top:300px;}`);
    }

    var html = $(`<div id='vip_movie_box'>
                    <div class='item_text'><img src='`+ ImgBase64 +`' title='快速解析'/></div>
                    <div class='selected_text' >
                       <img src='`+ sImgBase64 +`' title='视频解析'/>
                       <div class='vip_mod_box_selected' >
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500;  line-height:21px; margin-top:10px;'>页内解析</div>
                             <ul>
                               ` + innerli + `
                               <div style='clear:both;'></div>
                             </ul>
                           </div>
                           <div>
                             <div style='font-size:16px; font-weight:bold; text-align:center; color:#FF4500;  line-height:21px; margin-top:10px;'>页外解析</div>
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

    //快速解析事件处理
    $(".item_text").on("click", () => {
        GMopenInTab("http://vip.wandhi.com/?v=" + location.href, false);
    });

    //视频解析事件处理
    if (isMobile) {
        $(".selected_text").on("click", () => $(".vip_mod_box_selected").toggle());
    } else {
        $(".selected_text").on("mouseover", () => $(".vip_mod_box_selected").show());
        $(".selected_text").on("mouseout", () => $(".vip_mod_box_selected").hide());
    }
    $(".vip_mod_box_selected li").each((index, item) => {
        item.addEventListener("click", function(){
            if (parseInterfaceList[index].type == "1") {
                $(this).siblings().removeClass("selected");
                $(this).addClass("selected");
                GMsetValue("autoPlayerValue_" + host, index);
                if (isMobile) {
                    iframeDivCss = "width:100%;height:220px;z-index:999999;";
                }
                if (isMobile && window.location.href.indexOf("iqiyi.com") !== -1) {
                    iframeDivCss = "width:100%;height:220px;z-index:999999;margin-top:-56.25%;";
                }
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    reomveVideo();
                    player.empty();
                    player.append(videoPlayer);
                }
                innerParse(parseInterfaceList[index].url + location.href);
            }else {
                GMopenInTab(parseInterfaceList[index].url + location.href, false);
            }
        });
    });

    //自动解析视频事件处理
    $(".vip_auto").on("click", function () {
        if (!!GMgetValue("autoPlayerKey_" + host, null)) {
            GMsetValue("autoPlayerKey_" + host, null);
            $(this).html("关");
        } else {
            GMsetValue("autoPlayerKey_" + host, "true");
            $(this).html("开");
        }
        setTimeout(function () {
            window.location.reload();
        }, 200);
    });

    //检测自动播放是否开启
    function autoPlayer() {
        if (!!GMgetValue("autoPlayerKey_" + host, null)) {
            var index = GMgetValue("autoPlayerValue_" + host, 2);
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

    // 右键拖拽功能 - 防止与其他脚本干扰
    var movie_box = $("#vip_movie_box");
    movie_box.mousedown(function(e) {
        // 1 = 鼠标左键; 2 = 鼠标中键; 3 = 鼠标右键
        if (e.which == 3) {
            e.preventDefault() // 阻止默认行为
            movie_box.css("cursor", "move");//设置样式
            var positionDiv = $(this).offset();
            var distenceX = e.pageX - positionDiv.left;
            var distenceY = e.pageY - positionDiv.top;
            // 计算移动后的左偏移量 和 顶部的偏移量(防止超出边界)
            $(document).mousemove(function(e) {
                var x = e.pageX - distenceX;
                var y = e.pageY - distenceY;
                if (x < 0) {
                    x = 0;
                } else if (x > $(document).width() - movie_box.outerWidth(true)) {
                    x = $(document).width() - movie_box.outerWidth(true);
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(document).height() - movie_box.outerHeight(true)) {
                    y = $(document).height() - movie_box.outerHeight(true);
                }
                // 更新样式
                movie_box.css("top", y);
                GMsetValue("Position_" + host,{"top":y});
            });
            $(document).mouseup(function() {
                $(document).off('mousemove');
                movie_box.css("cursor", "pointer");// 还原样式
            });
            $(document).contextmenu(function(e) {
                e.preventDefault();// 阻止右键菜单默认行为
            })
        }
    });

    window.onload = function () {
        playerNodes();
        autoPlayer();
    }

})();
