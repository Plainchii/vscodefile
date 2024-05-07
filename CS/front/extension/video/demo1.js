// ==UserScript==
// @name              Video_
// @version           2.0.1
// @description
// @author            torey
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
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
// @match             *://*.bilibili.com/*
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
    var $ = $ || window.$;//确保 $ 变量指向 jQuery 对象，在没有加载 jQuery 库的情况下使用浏览器全局变量 window.$
    var host = location.host;



    //parseNodeSettle
    var parseInterfaceList = [];
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


    var InnerfaceList = [];
    var OuterfaceList = [];
    var innerli = "";
    var outerli = "";
    originalInterfaceList.forEach((item) => {
        if (item.type == "1") {
            InnerfaceList.push(item);
            innerli += "<li>" + item.title + "</li>";
        }else{
            OuterfaceList.push(item);
            outerli += "<li>" + item.title + "</li>";
        }
    })
    parseInterfaceList = InnerfaceList.concat(OuterfaceList);

    //playNodeSettle
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
            host: "www.acfun.cn",
            container: "#player",
            displayNodes: []
        }
    ];


    //确定播放网站&&关闭弹出界面
    function playerNodes(){
        player_Containers.forEach((item) => {
            if (item.host == host) {
                node = item.container;
                setInterval(() => {
                    item.displayNodes.forEach((obj) => {
                        $(obj).css("display","none")
                    });
                }, 500);
            }
        })
    }

    //播放器设置
    function innerPlay(url) {//内嵌页内播放
        $("#iframe-player").attr("src",url);
    }
    var iframeCss = "width:100%;height:100%;z-index:999999;";
    var videoPlayer = $(`<div id='iframe-div' style='`+ iframeCss + `'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>`);

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


    function GMaddStyle(css) {
        var myStyle = document.createElement('style');
        myStyle.textContent = css;
        document.head.appendChild(myStyle);
    }
    GMaddStyle(`
                #Button1 {cursor:pointer; position:fixed; top:100px; right:0px; width:33px; z-index:99999; font-size:12px; text-align:left;}


                #Button1 .appearence {width:32px; height:32px;padding:0px 0px;background-color:rgba(135,206,250, 0.1);}

                #Button1 .open-background {width:320px; max-height:450px;display:none; position:absolute; right:33px; top:0; text-align:center; backdrop-filter: saturate(1) blur(15px); background: rgba(135,206,250, 0.6); border:1px solid gray; overflow-y: auto;}


                #Button1 .open-background ul{list-style: none; margin:10px 10px;}
                #Button1 .open-background li{font-size:12px; color:#FFFFFF; text-align:center; width:calc(36% - 14px); line-height:21px; float:left; padding:4px 4px; margin:3px 3px;background: rgba(0,0,0,0.6);border-radius:10px;box-sizing:border-box;}
                #Button1 .open-background li:hover{color:rgba(135,206,250, 1); background-color:rgba(0,0,0,0.5);}

		        #Button1 .open-background::-webkit-scrollbar{width:5px; height:1px;}
                #Button1 .open-background::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#A8A8A8;}
                #Button1 .open-background::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#F1F1F1;}`);



    var html = $(`<div id='Button1'>
                    <div class='appearence' >
                       <div class='open-background' >
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
                 </div>`
                    );
    $("body").append(html);

    //mouseoverBox
    $(".appearence").on("mouseover", ()=> $(".open-background").show());
    $(".appearence").on("mouseout", ()=> $(".open-background").hide());

    //click-parse
    $(".open-background li").each((index, item) => {
        item.addEventListener("click", function(){//添加监听
            if (parseInterfaceList[index].type == "1") {//页内播放
                if (document.getElementById("iframe-player") == null) {
                    var player = $(node);
                    reomveVideo();
                    player.empty();
                    player.append(videoPlayer);
                }
                innerPlay(parseInterfaceList[index].url + location.href);
            }else {//新标签页播放
                GM_openInTab(parseInterfaceList[index].url + location.href, false);
            }
        });
    });

    window.onload = function () {
        playerNodes();
    }
})();