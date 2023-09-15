// 创建一个自执行函数并将其结果赋值给superVip常量
const superVip = (function () {

    // 定义一个名为_CONFIG_的常量对象，用于存储配置信息
    const _CONFIG_ = {
        // 检测是否为移动设备的正则表达式
        isMobile: navigator.userAgent.match(/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i),
        // 当前播放器节点
        currentPlayerNode: null,
        // VIP框的唯一标识
        vipBoxId: 'vip_jx_box' + Math.ceil(Math.random() * 100000000),
        // 标志
        flag: "flag_vip",
        // 自动播放的键名
        autoPlayerKey: "auto_player_key" + window.location.host,
        // 自动播放的值名
        autoPlayerVal: "auto_player_value_" + window.location.host,
        // 视频解析源列表
        videoParseList: [
            {"name": "综合/B站", "type": "1,3", "url": "https://jx.jsonplayer.com/player/?url="},
        ],
        // 不同网站的播放器容器配置
        playerContainers: [
            {
                host: "v.qq.com",
                container: "#mod_player,#player-container,.container-player",
                name: "Default",
                displayNodes: ["#mask_layer", ".mod_vip_popup", "#mask_layer", ".panel-tip-pay"]
            },
        ]
    };

    // 定义一个BaseConsumer类
    class BaseConsumer {
        constructor() {
            // 构造函数中定义了一个匿名函数parse
            this.parse = () => {
                // 使用util.findTargetEle查找页面中的元素并进行一系列操作
                util.findTargetEle('body')
                    .then((container) => this.preHandle(container))
                    .then((container) => this.generateElement(container))
                    .then((container) => this.bindEvent(container))
                    .then((container) => this.autoPlay(container))
                    .then((container) => this.postHandle(container));
            }
        }

        // 预处理函数
        preHandle(container) {
            // 遍历当前播放器节点的displayNodes并隐藏对应的元素
            _CONFIG_.currentPlayerNode.displayNodes.forEach((item, index) => {
                util.findTargetEle(item)
                    .then((obj) => obj.style.display = 'none')
                    .catch(e => console.warn("不存在元素", e));
            });
            return new Promise((resolve, reject) => resolve(container));
        }

        // 生成元素函数
        generateElement(container) {
            // 使用GM_addStyle添加一些样式
            GM_addStyle(`
                #${_CONFIG_.vipBoxId} {cursor:pointer; position:fixed; top:120px; left:0px; z-index:9999999; text-align:left;}
                // ... 还有其他样式的定义
            `);

            // 根据解析源列表生成相应的HTML元素
            // ...

            return new Promise((resolve, reject) => resolve(container));
        }

        // 绑定事件函数
        bindEvent(container) {
            // 为VIP框的元素绑定事件处理函数
            // ...

            return new Promise((resolve, reject) => resolve(container));
        }

        // 自动播放函数
        autoPlay(container) {
            // 为自动播放按钮绑定点击事件
            // ...

            // 如果自动播放已启用，则选择对应的播放器
            if (!!GM_getValue(_CONFIG_.autoPlayerKey, null)) {
                this.selectPlayer(container);
            }

            return new Promise((resolve, reject) => resolve(container));
        }

        // 选择播放器函数
        selectPlayer(container) {
            // 根据配置选择相应的播放器
            // ...

            // 延迟一段时间后显示播放器窗口
            // ...
        }

        // 显示播放器窗口函数
        showPlayerWindow(videoObj) {
            // 使用util.findTargetEle查找页面中的元素并进行一系列操作
            // ...
        }

        // 后处理函数
        postHandle(container) {
            // 根据是否启用自动播放和页面URL的变化，进行不同的后处理
            // ...

        }
    }

    // 定义一个DefaultConsumer类，继承自BaseConsumer
    class DefaultConsumer extends BaseConsumer {
    }

    // 返回一个对象，包含启动函数start
    return {
        start: () => {
            // 初始化标志
            GM_setValue(_CONFIG_.flag, null);
            let mallCase = 'Default';
            let playerNode = _CONFIG_.playerContainers.filter(value => value.host === window.location.host);
            if (playerNode === null || playerNode.length <= 0) {
                console.warn(window.location.host + "该网站暂不支持，请联系作者，作者将会第一时间处理（注意：请记得提供有问题的网址）");
                return;
            }
            _CONFIG_.currentPlayerNode = playerNode[0];
            mallCase = _CONFIG_.currentPlayerNode.name;
            const targetConsumer = eval(`new ${mallCase}Consumer`);
            targetConsumer.parse();
        }
    }

})();