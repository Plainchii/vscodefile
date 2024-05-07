登录，单文件（！文件夹），我的文件页面，


let au = getJquery()('#dialogQrImg').attr('src');
params.append('au', au.indexOf(globalData.paramDomain2) == 0 ? '' : au);


//分享成功后，开始手势验证
let vaptchaValidate = function () {
    loadVaptchaSdk(function () {
        vaptcha({
            vid: "5fc5252656181ea89f9ead2e", // 验证单元id
            type: "invisible", // 显示类型 隐藏式
            scene: 1, // 场景值 默认0
            offline_server: "", //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
        }).then(function (vaptchaObj) {
            vaptchaAll = vaptchaObj; //将VAPTCHA验证实例保存到全局变量中
            console.log(vaptchaAll);

            //验证通过时触发
            vaptchaAll.listen("pass", function () {
                // 验证成功进行后续操作
                let token = vaptchaAll.getToken();
                console.log(token);
                let t = getTmpData();
                getDownloadUrl(t.response, t.pwd, t.fs_id, token);
            });

            //关闭验证弹窗时触发
            vaptchaAll.listen("close", function () {
                showTipInfo('通过验证才可以取直链！点击上面按钮重新开始。');
                setShareCompleteState()
            });

            //开始手势验证
            vaptchaAll.validate();
        });
    });
}



let getPageType = function () {
    if (isOldHomePage()) return 'old';
    if (isNewHomePage()) return 'new';
    if (isSharePage()) return 'share';
    return '';
}

let isOldHomePage = function () {
    let url = location.href;
    if (url.indexOf(".baidu.com/disk/home") > 0) {
        return true;
    } else {
        return false;
    }
};

let isNewHomePage = function () {
    let url = location.href;
    if (url.indexOf(".baidu.com/disk/main") > 0) {
        return true;
    } else {
        return false;
    }
};

let isSharePage = function () {
    let path = location.pathname.replace('/disk/', '');
    if (/^\/(s|share)\//.test(path)) {
        return true;
    } else {
        return false;
    }
}