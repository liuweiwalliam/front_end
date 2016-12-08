<!doctype html>
<html>
<head>
    <?php require_once BASE_DIR . '/include/head.php'; ?>
</head>
<body>
<?php
use common\model\lebi\ModelMerchantBankCard;
$bankCardObj = new ModelMerchantBankCard(NULL);
$bankCardInfoFromMerId = $bankCardObj->getCardDataFromMerId($merchant_id);
$merPhone = $merObj->getOneFieldData("merchant_phone");
$merLebiPercent = $merObj->getMerchantLebiPercent();
$payMinLebi = ceil(1 / ((100 - $merLebiPercent) / 100));
?>
<?php require_once BASE_DIR . '/include/left_menu.php'; ?>
<div class="right">
    <?php require_once BASE_DIR . '/include/head_menu.php'; ?>
    <div class="route">
        <a href="/merchant">首页</a> / <a href="#">乐享币快捷支付</a>
    </div>
    <div class="content">
        <div class="rightsidebar round">
            <ul class="title">乐享币快捷支付</ul>
            <div class="info">
                <form id="J_Form" autocomplete="off" novalidate class="form form-horizontal pd20 w650 search-toolbar">
                    <input type="password" class="hide">
                    <?php if ($checkStatus == 4) { ?>
                        <div class="row cl">
                            <div class="formControls col-offset-3 col-9 red">
                                您与乐分商城的合作处于暂停中，请联系兑换中心！
                            </div>
                        </div>
                    <?php } ?>
                    <div class="row cl">
                        <label class="form-label col-3"><span class="c-red">*</span>卡号/手机号:</label>
                        <div class="formControls col-9">
                            <input type="tel" id="J_CardNum" class="input-text w200 radius" placeholder="请输入卡号或者手机号"/>
                            <small class="ml15" id="J_Info"></small>
                        </div>
                    </div>
                    <div class="row cl">
                        <label class="form-label col-3"><span class="c-red">*</span>支付乐享币:</label>
                        <div class="formControls col-9">
                            <input type="text" id="J_Count" class="input-text w200 radius" placeholder="请输入支付乐享币"/>
                        </div>
                    </div>
                    <div class="row cl">
                        <label class="form-label col-3"><span class="c-red">*</span>用户支付密码:</label>
                        <div class="formControls col-9">
                            <input type="password" id="payPwd" class="input-text w200 radius" placeholder="请输入用户支付密码"/>
                        </div>
                    </div>
                    <div class="row cl">
                        <div class="formControls col-5 col-offset-3">
                            <button class="btn btn-primary radius w200" type="submit">确定</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="/public/js/util.js"></script>
    <script src="/public/js/jquery.placeholder.js"></script>
    <script src="/public/js/jquery.md5.js"></script>
    <script src="/public/lib/layer/layer.js"></script>
    <script language="javascript">
        $(function () {
            var $form = $('#J_Form'),
                $cardNum = $('#J_CardNum'),
                $cardInfo = $('#J_Info'),
                $count = $('#J_Count'),
                $payPwd = $('#payPwd');
            var oUserInfo = {};
            $cardNum.keyup(function () {
                oUserInfo.isChecked = null;
                cardNumBlur();
            });
            $form.submit(formSubmit);
            function cardNumBlur() {
                var num = $cardNum.val();
                if (oUserInfo.cardNum == num) {
                    setUserInfo(oUserInfo);
                    return;
                }
                $cardInfo.text('');
                oUserInfo = {};
                if (checkCardNum(num)) {
                    getUserInfo();
                }
            }
            function beforeSubmit() {
                var num = $cardNum.val();
                if (!checkCardNum(num)) {
                    Util.showMsg('请输入正确的卡号或手机号');
                    $cardNum.focus();
                    return false;
                }
                if (oUserInfo.isChecked === false) {
                    $cardNum.focus();
                    Util.showMsg(oUserInfo.message);
                    return false;
                }
                if (!Verify.verifyContent($count.val(), Verify.PDeci, true)) {
                    Util.showMsg('支付乐享币数目为大于1的整数或小数（小数点后最多两位）');
                    $count.focus();
                    return false;
                }
                if (!/^\d{6,}$/.test($payPwd.val())) {
                    Util.showMsg('支付密码为纯数字，至少6位');
                    $payPwd.val('').focus();
                    return false;
                }
                return true;
            }
            function formSubmit(e) {
                e.preventDefault();
                if (!beforeSubmit()) {
                    return;
                }
                Util.ajax({
                    trigger: $form,
                    url: 'merchant.php?c=payLebiByCard',
                    data: {
                        accountNo: $cardNum.val(),
                        payLebi: $count.val(),
                        payMd5Pwd: $.md5($payPwd.val())
                    },
                    success: function (obj) {
                        if (obj.success) {
                            Util.showMsg(obj.message, 'success');
                            setTimeout('window.location.href="/merchant/page.php?c=lebi/lebiIncomeRecord";', 1500);
                        } else {
                            Util.showMsg(obj.message, 'error');
                        }
                    }
                });
            }
            function checkCardNum(num) {
                return Verify.verifyContent(num, Verify.Phone, true) || Verify.verifyContent(num, Verify.CardNum, true);
            }
            function getUserInfo() {
                var cardNum = $cardNum.val();
                Util.ajax({
                    loadingShow: false,
                    trigger: $cardNum,
                    url: 'merchant.php?c=getCardInfoFromUserInfo',
                    data: {
                        userInfo: cardNum
                    },
                    success: function (obj) {
                        oUserInfo = obj;
                        oUserInfo.cardNum = cardNum;
                        setUserInfo(oUserInfo);
                    }
                });
            }
            function setUserInfo(obj) {
                if (!obj.success) {
                    oUserInfo.isChecked = false;
                    $cardNum.focus();
                } else {
                    $cardInfo.text('用户名：' + obj.datas['cardNm'] + ', 乐享币余额：' + (obj.datas['cardLebi'] / 100).toFixed(2));
                }
            }
        });
    </script>
</div>
</body>
</html>