<!DOCTYPE html>
<html lang="en" class="hw100">
<?php include_once '../public/head.php'?>
    <title>提现</title>
<body class="h100 greybg ff">
<div class="page">
    <div class="page__bd pt17">
        <div class="weui-cells weui-cells_form mt0">
            <!--收款人姓名输入框-->
            <div class="weui-cell weui-cell_warn">
                <div class="weui-cell__hd"><label for="" class="weui-label grey fs15">收款人姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input grey fs15" type="text" pattern="[A-Za-z0-9_\-\u4e00-\u9fa5]+" value="" placeholder="请输入"/>
                </div>
                <div class="weui-cell__ft">
                    <i class="weui-icon-warn"></i>
                </div>
            </div>
        </div>

            <!--提现金额-->
        <div class="weui-cells weui-cells_form mt10">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label grey fs15">提现金额</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input grey fs15" id="wd-money" type="text" pattern="(0|[1-9]\d|100)" placeholder="最高可提100元"/>
                </div>
                <div class="weui-cell__ft">
                    <p class='notice fs15 grey'></p>
                </div>
            </div>
        </div>

            <!--最长所需时间-->
        <div class="weui-cells mt10">
            <div class="weui-cell">
                <div class="weui-cell__bd grey fs15">
                    <p>最长所需时间</p>
                </div>
                <div class="weui-cell__ft grey fs14">24小时</div>
            </div>
        </div>

            <!--提现说明-->
        <div class="weui-textarea mt29 grey">
            <p class="weui-msg__desc text-c">
                “提现成功后将直接通过微信打到您的零钱中”
            </p>
        </div>

        <div class="weui-btn-area mt29">
            <a href="javascript:;" class="weui-btn weui-btn_primary">确认提现</a>
        </div>
    </div>
</div>
<!--<script src="../public/js/zepto.min.js"></script>-->
<script>
    //$(function(){
    //
    //    var $wdmoney=$("#wd-money");
    //    var $num=$wdmoney.val();
    //    console.log($num);
    //    var $notice=$(".notice");
    //    $wdmoney.blur(function(){
    //       if(!($num<0 && $num>=100)){
    //           $notice.html("请输入0-100之间的数");
    //       }
    //    }).focus(function(){
    //        $wdmoney.val("");
    //        $notice.html("");
    //    });
    //});
    var wdmoney = document.getElementById("wd-money");
    var notice=document.getElementsByClassName("notice");
    wdmoney.addEventListener('blur',function(){
        var num = wdmoney.value;//取值的位置不对，应该放在这里
        if(!(num<0 && num>=100)){
            console.log(num);
            notice.innerHTML="请输入0-100之间的数";
        }
    },false);
    wdmoney.addEventListener('focus',function(){
        num='';
        notice.innerHTML='';
    },false);

</script>
</body>
</html>