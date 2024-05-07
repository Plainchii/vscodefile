
错误弹窗
let showTipErrorSwal = function (err) {
    showSwal(err, {icon: 'error'});
}

let showSwal = function (content, option) {
    divTips.innerHTML = content;
    option.content = divTips;
    if (!option.hasOwnProperty('button')) {
        option.button = '朕 知 道 了'
    }
    swal(option);
}
showSwal(content, {
    button: '关 闭',
    closeOnClickOutside: false
});




//下载面板
let showDownloadDialog = function (fileList, fileStat) {
    let theFile = fileList[0];
    // console.log(theFile);
    let content = `
        <div id="downloadDialog">
            
            <div id="dialogMiddle">
                <div id="dialogLeft">
                    <div id="dialogLeftTips">
                        <div id="dialogLeftTips1">
                            
                            <div class="dialogLeftTipsLink">
                                <a href="${getAppSettingData().idmCourseUrl}" target="_blank">配置</a>
                            </div>
                        </div>
                    </div>
                    <div id="dialogQr">
                        <img id="dialogQrImg"  />
                    </div>
                </div>
                <div id="dialogRight">
                    <div id="dialogContent">
                        <input id="dialogBtnGetUrl" type="button" value="点击获取直链地址" class="btnInterface" />
                        <div id="dialogRemark">
                            
                        </div>
                        <div id="dialogOpTips"></div>
                        <div id="dialogVaptchaCode">
                            <div id="dialogVaptchaCodeInput">
                                <span id="dialogVaptchaCodeTips"></span>
                                <input id="dialogCode" type="text" value="${getConfig().code}" />
                            </div>
                            <div id="dialogCodeRemark"></div>
                        </div>
                        <div id="dialogOpButtons">
                            <input id="dialogBtnIdm" type="button" data-clipboard-text="" value="复制直链地址" class="btnInterface btnGreen" />
                            <div id="dialogOpTipsIdm"></div>
                            <input id="dialogBtnAria" type="button" value="发送至Aria2" class="btnInterface btnGreen" />
                            <div id="dialogOpTipsAria"></div>
                            <div id="dialogDivSavePath">
                                保存路径：<input type="text" id="dialogTxtSavePath" value="${getConfig().savePath}" style="width: 170px;" />
                                <span id="dialogAriaConfigClick">配置Aria2>></span>
                                <div id="dialogAriaConfig">
                                    <input type="text" id="dialogAriaRPC" value="${getConfig().jsonRpc}" title="RPC地址" placeholder="RPC地址" style="width: 240px;" />
                                    <input type="text" id="dialogAriaToken" value="${getConfig().token}" title="token" placeholder="token" style="width: 77px;" />
                                    <br />
                                    <input type="checkbox" id="dialogAriaMine" value="checked" ${getConfig().mine}> 我使用自己的Aria2（如不懂，勿勾选）
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dialogClear"></div>
            <div id="dialogBottom"></div>
        </div>
    `;