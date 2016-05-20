/**
 * Created by Administrator on 2016/5/10.
 */

var dr = $("<div><p><a href='https://www.hao123.com/'>baidu</a></p><p><a href='https://www.baidu.com/'>google</a></p></div>");

$(".menu").click(function () {
    $("body").append(dr);
    $(dr).attr("class", "dr");
    $(".dr").css("height", window.innerHeight);
    $(".dr").css("margin-left", "-200px");
    $(".dr").animate({left: "200px"}, 1000);
    
})
$("body").click(
    function () {
        $(".dr").remove();
        console.log("ajlkhdf");
    });