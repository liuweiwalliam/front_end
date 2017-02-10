<!DOCTYPE html>
<html lang="en">
<?//php include_once '../public/head.php'?>
    <title>充值</title>
<body class="bgf6 color4a ff">
<div class="page">
    <div class="page-body">
        <!--单日契约金-->
        <div class="weui-cells__title tit">单日契约金</div>
        <div class="weui-cells color6" style="position: relative;">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <i class="w28 h31 fl mt10" style="background: url('../img/pm.png') no-repeat center;"></i>
                    <div class="weui-slider-box h40" style="position:relative;margin:0 13px 26px 45px;">
                        <div class="weui-slider" style="padding:0;">
                            <div id="sliderInner" class="weui-slider__inner">
                                <div id="sliderTrack" style="width: 50%;" class="weui-slider__track green"></div>
                                <div id="sliderHandler" style="left: 50%;z-index:100;" class="weui-slider__handler"></div>
                            </div>
                        </div>
                        <div id="sliderValue" class="weui-slider-box__value hide">50</div>
                        <ul>
                            <li>1</li>
                            <li>5</li>
                            <li>10</li>
                            <li>20</li>
                            <li>30</li>
                            <li>40</li>
                            <li>50元</li>
                        </ul>
                    </div>
                    <p class="fs12 pl20" style="letter-spacing: -0.5px;">
                        <i class="inlineblock h12 w12" style="background: url('../img/warn.png') no-repeat center;"></i>
                        滑动可增加或减少金额，申请提现可直接退出游戏
                    </p>
                </div>

            </div>
        </div>

        <!--连续签到-->
        <div class="weui-cells__title tit">连续签到</div>
        <div class="weui-cells">
            <div class="weui-cells_form">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">早起计划</div>
                    <div class="weui-cell__ft">
                        <input class="weui-switch switch" type="checkbox"/>
                    </div>
                </div>
            </div>
            <a class="weui-cell weui-cell_access showPicker hide" href="javascript:;">
                <div class="weui-cell__bd">
                    <p>选择天数</p>
                </div>
                <div class="weui-cell__ft"><span class="day">请选择</span></div>
            </a>
        </div>

        <!--订单详情-->
        <div class="weui-cells__title tit">订单详情</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>起止时间</p>
                </div>
                <div class="weui-cell__ft color6 fs14" style="letter-spacing: -0.1px;"><span class="period">若不断签便会一直参加</span></div>
            </div>

            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>钱包余额</p>
                </div>
                <div class="weui-cell__ft f20 ffs">¥<span>140.00</span></div>
            </div>

            <div class="weui-cell hide">
                <div class="weui-cell__bd">
                    <p>额外支付</p>
                </div>
                <div class="weui-cell__ft fs20 ffs"><span class="red">+70</span></div>
            </div>
        </div>


        <!--阅读条款-->
        <label class="weui-agree" style="margin:11px auto;">
            <span class="weui-agree__text fs14 color4a">
                    查看并阅读<a href="javascript:void(0)" class="ruler-a" style="color:#4a90e2;">《起呗霸王条款》</a>
            </span>
        </label>

        <!--提交订单按钮-->
        <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:;" id="showTooltips">提交订单</a>
        </div>
    </div>
<!--    规则弹窗-->
    <div class="weui-dialog-ruler js_dialog hide ffgb" >
        <div class="weui-mask"></div>
        <div class="weui-dialog radius8">
            <div class="weui-dialog__bd" style="padding:13px 24px 13px 33px;">
                <p class="fs22 text-l lh42 color34">契约规则：</p>
                <section class="fs14 text-l lh29 color34" style="letter-spacing: 0.2px;">
                    <p>1.每人支付1~50元做为当天契约金奖池；</p>
                    <p>2.早上5:00-7:59通过公众号完成打卡；</p>
                    <p>3.当天没有打卡不返还当日契约金，当日完成打卡退回当日契约金并获得没有打卡用户的契约金；</p>
                    <p>打卡用户获得的金额=今日契约金池总额÷当天打卡用户的契约金总额×你当天的契约金</p>
                    <p>备注：简单的说就是没打卡损失当天契约金，打卡用户返还当天契约金并获得对应奖励。</p>
                    <p>4.早上9:00-12:00系统清算当天奖池至打卡用户的余额里。</p>
                </section>
                <p class="read fs14 lh28 text-r"><a href="javascript:void(0);" class="green">朕已阅</a></p>
            </div>
        </div>
    </div>
</div>
<script src="../public/js/zepto.min.js"></script>
<script src="../public/js/weui.min.js"></script>

<script>
    $(function(){
        var $showPicker=$(".showPicker");
        var $day=$(".day");
        var $period=$(".period");

//        规则弹窗的控制
        $(".ruler-a").click(function(){
            $(".js_dialog").fadeIn(200);
        });
        $('.read').on('click', function(){
            $(this).parents('.js_dialog').fadeOut(200);
        });

//        是否连续签到
        $('.switch').click(function(){
            $showPicker.toggleClass("hide");
            if($showPicker.is(".hide")){
//        单日签到
                $period.removeClass("fs20").addClass("fs14");
                $period.html("若不断签便会一直参加");
            }else
    //        连续签到
            {
                $day.html(localStorage.seriesday);
                $period.removeClass("fs14").addClass("fs20");
                $period.html("8.15-8.22");
            }
        });

//        选择连续天数
        $showPicker.on('click', function () {
            weui.picker([{
                label: '7天',
                value: '7天',
                fontSize:24
            }, {
                label: '14天',
                value: '14天'
            }, {
                label: '21天',
                value:  '21天'
            },{
                label: '28天',
                value:  '28天'
            }], {
                onChange: function (result) {
                    $day.html(result);
//                    localStorage.seriesday=result;
                },
                onConfirm: function (result) {
                    localStorage.seriesday=result;
                    $day.html(result);
                }
            });
        });


//        滑动条
        var $sliderTrack = $('#sliderTrack'),
            $sliderHandler = $('#sliderHandler'),
            $sliderValue = $('#sliderValue');

        var totalLen = $('#sliderInner').width(),
            startLeft = 0,
            startX = 0;

        $sliderHandler
            .on('touchstart', function (e) {
                startLeft = parseInt($sliderHandler.css('left')) * totalLen / 100;
                startX = e.changedTouches[0].clientX;
            })
            .on('touchmove', function(e){
                var dist = startLeft + e.changedTouches[0].clientX - startX,
                    percent;
                dist = dist < 0 ? 0 : dist > totalLen ? totalLen : dist;
                percent =  parseInt(dist / totalLen * 100);
                $sliderTrack.css('width', percent + '%');
                $sliderHandler.css('left', percent + '%');
                percent_to_int(percent);
                $sliderValue.text(percent);
                console.log($sliderValue.text());

                e.preventDefault();
            });
    });
    function percent_to_int(percent){
           if(0<percent&&percent<=8){
               return percent==1;
           }else if(8<percent&&percent<=25){
                return  percent==5;
            }else if(25<percent&&percent<=42){
                return percent==10;
            }else if(42<percent&&percent<=58){
                return  percent==20;
            }else if(58<percent&&percent<=75){
                return  percent==30;
            }else if(75<percent&&percent<=92){
                return  percent==40;
            }else if(92<percent&&percent<=100){
                return  percent==50;
            }
        }

//    function percent_to_int(num){
//        if(92<num && num<=100){
//            return num === 50;
//        }else if(75<num && num<=92){
//            return num === 40;
//        }else if(58<num && num<=75){
//            return num === 30;
//        }else if(42<num && num<=58){
//            return num === 20;
//        }else if(25<num && num<=42){
//            return num === 10;
//        }else if(8<num && num<=25){
//            return num === 5;
//        }else if(0<num && num<=8){
//            return  num === 1;
//        }
//    }

</script>

</body>
</html>