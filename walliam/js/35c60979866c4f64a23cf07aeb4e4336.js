(function(c){var b=c.screen,a=c.document.documentElement;
if(b.width>1200){a.className+=a.className.length?" root1200":"root1200"
}})(window);
var Util={printf:function(a){var b=arguments,c=1;
return a.replace(/%s/g,function(){return b[c]?b[c++]:""
})
},toClockStr:function(b){var e=Math.floor((b%(24*3600))/3600).toString(),a=Math.floor((b%3600)/(60)).toString(),c=Math.floor(b%60).toString();
e=e.length===1?"0"+e:e;
a=a.length===1?"0"+a:a;
c=c.length===1?"0"+c:c;
return e+":"+a+":"+c
},checkkey:function(b,a){b.value=b.value.replace(/[^\d.]/g,"");
b.value=b.value.replace(/^\./g,"");
b.value=b.value.replace(/\.{2,}/g,".");
b.value=b.value.replace(/^\d{1,10}\.\d{3}?$/g,b.value.substr(0,b.value.length-1));
b.value=b.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
},lazyload:function(a){$(window).scroll(function(){$(a).find("img").each(function(){if($(window).scrollTop()>$(this).offset().top-$(window).height()&&$(this).attr("src2")){$(this).attr("src",$(this).attr("src2")).removeAttr("src2")
}})
})
},alertBox:function(p){var f={id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",hasMask:true,submitRemove:false,iconType:"info",msg:""};
$("#attrWrongInfo").html("");
var a=$.extend({},f,p);
var l=document.getElementById(a.id);
var i=document.documentElement.scrollHeight;
var n=document.body.clientWidth;
var c=!!window.ActiveXObject;
var h=c&&!window.XMLHttpRequest;
var k=a.hasMask?0.7:0;
if($("#mask").length>0){$("#mask").remove()
}var o=document.createElement("div");
o.id="mask";
l.style.display="block";
var m=n/2-l.clientWidth/2;
var b=(document.body.scrollTop||document.documentElement.scrollTop)+window.screen.height/2-l.clientHeight/2-100;
o.style.cssText="position:absolute;top:0;left:0;background:#333;height:"+i+"px;width:"+n+"px;z-index:10010;opacity:"+k+";filter:alpha(opacity="+k*100+");";
document.body.appendChild(o);
if(h){var g=document.createElement("iframe");
g.style.position="absolute";
g.style.top=0;
g.style.left=0;
g.style.zIndex="10010";
g.style.height=i+"px";
g.style.width=n-10+"px";
g.style.filter="alpha(opacity=0)";
document.body.appendChild(g)
}l.style.zIndex="10011";
l.style.cssText=" ;display:block;left:"+m+"px;top:"+b+"px;z-index:10011;";
document.getElementById(a.closeId).onclick=e;
if(document.getElementById(a.submit)){document.getElementById(a.submit).onclick=function(){if(a.submitRemove){if($("#proPop").find(".msg").html().indexOf("此商品库存不足")!=-1||$("#proPop").find(".msg").html().indexOf("您购买的数量超过库存上限")!=-1){window.location.reload()
}e()
}}
}function e(){$("#attrWrongInfo").html("");
l.style.display="none";
o.parentNode.removeChild(o);
if(h){g.parentNode.removeChild(g)
}}var j=$(l).find(".tipIcon");
switch(a.iconType){case"ok":j.attr("class","tipIcon fl tipOK3");
break;
case"info":j.attr("class","tipIcon fl tipInfo3");
break;
case"false":j.attr("class","tipIcon fl tipFalse3");
break;
case"help":j.attr("class","tipIcon fl tipHelp3");
break
}if(a.msg){$(l).find(".msg").html(a.msg)
}},alertBoxForClose:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"help",submitRemove:true,msg:a});
sn.status=false;
if(sn.vendorCode==""){initProductPrice(sn.cityId)
}else{initCShopPrice(sn.cityId)
}},alertErrorBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"false",submitRemove:true,msg:a})
},alertHelpBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"help",submitRemove:true,msg:a})
},alertOkBox:function(a){this.alertBox({id:"proPop",closeId:"proPopCloseBtn",submit:"proPopSubmit",iconType:"ok",submitRemove:true,msg:a})
}};
var iFourth=iFourth||{ie6:!window.XMLHttpRequest,win:$(window),body:$("body"),mask:$("#J-overlay")};
iFourth.init=function(){iFourth.scrollToNav();
iFourth.body=$("body");
iFourth.mask=$("#J-overlay");
var a=new iFourth.Zoom("#imgZoom");
iFourth.breadcrumb();
iFourth.buyNum();
iFourth.attrChoose();
iFourth.servLabel();
iFourth.TZM.init();
iFourth.proSideIndex();
iFourth.showRating.start();
iFourth.bindShareList();
iFourth.listloop({wrap:"#J-slide1",loopBox:".proinfo-rec-list ul"});
iFourth.bindQRCode();
iFourth.listloop({wrap:"#J-slide2",loopBox:".nopro-rec-list ul",step:{wide:5,narrow:4},scrollWidth:{wide:775,narrow:580}});
iFourth.listloop({wrap:"#J-slide3",loopBox:".nopro-rec-list ul",step:{wide:5,narrow:4},scrollWidth:{wide:775,narrow:580}});
iFourth.priceFeedbackDialog();
iFourth.zitiPop();
iFourth.procon();
iFourth.Tab(".toppro-tab",".toppro-list",function(e,b,c){});
iFourth.Tab(".tiein-box .tabarea-items",".tiein-box .tabarea-content",function(e,b,c){});
iFourth.tiein();
iFourth.tieInRec();
iFourth.setMeal();
lazyelem.listen();
iFourth.floatBar({zIndex:11000,contents:$("#snSideTools"),align:"right",vertical:"bottom",css:{right:60,marginBottom:260}});
iFourth.overseDeliver()
};
iFourth.bookConNav=function(){var e=iFourth.win,f=$(".bookcon"),c=$(".bookcon-side");
var b=f.height(),a=c.height();
if(a>b){f.attr("style","min-height:"+a+"px;_height:"+a+"px")
}f.on("click",".bookcon-side ul li",function(){var g=$(this),h=$(g.attr("rel")).offset().top-45;
g.addClass("current").siblings().removeClass("current");
e.scrollTop(h)
});
e.scroll(function(){if(c.is(":visible")){var g=e.scrollTop(),i=f.offset().top,j=i-36,h=f[0].scrollHeight+i-400;
if(g>j&&g<h){c.css("top",g-i+36+"px")
}else{if(g>=h){c.css("top",h-i+"px")
}else{c.css("top","0")
}}}else{c.css("top","0")
}})
};
iFourth.floatBar=function(){var f={contents:null,align:"right",vertical:"middle",zIndex:7500,css:null,id:null,ieFixed:true};
var i=($.browser.msie)?parseInt($.browser.version):false;
if(arguments.length<1||!(arguments[0] instanceof Object)){return $.error("ECode.floatBar: 参数必须为JSON对象")
}$.extend(f,arguments[0]);
var b={position:"fixed",top:"-9999em",left:"-9999em"};
if(i&&i<=6){b.position="absolute"
}$('<div class="ECode-floatBar"></div>').css(b).appendTo("body");
var j=$("body").find(".ECode-floatBar:last");
j.append(f.contents);
var e=j.width(),a=j.height(),h={zIndex:f.zIndex};
if(f.id!=null){j.attr("id",f.id)
}switch(f.align){case"right":h.left="auto";
h.right=0;
break;
case"left":h.right="auto";
h.left=0;
break;
case"center":h.right="auto";
h.left="50%";
h.marginLeft=-e/2;
break
}switch(f.vertical){case"top":h.top=0;
break;
case"bottom":h.top="auto";
h.bottom=0;
break;
case"middle":h.top="50%";
h.marginTop=-a/2;
if(i&&i<=6){h.marginTop=0
}break
}j.css($.extend(h,f.css));
var c=function(){var o=$(document).scrollTop(),k=$(window).height(),l=$(document).width();
switch(f.vertical){case"top":j.stop().animate({top:o});
break;
case"bottom":var n=k+o-a;
if(f.css.marginBottom!=null){var m=parseInt(f.css.marginBottom);
if(m>=0){n-=m
}}j.css({marginTop:0}).stop().animate({top:n});
break;
case"middle":j.stop().animate({top:k/2+o-a/2});
break
}};
if(f.ieFixed&&i&&i<=6){c();
$(window).scroll(function(){c()
});
$(window).resize(function(){c()
})
}$(window).scroll(function(){var k=$(document).scrollTop();
var l=$("#gotop");
if(k>20){l.show()
}else{l.hide()
}});
var g;
$(".erweima").hover(function(){clearTimeout(g);
$("#ewmPic").show().find("img").attr("src",$("#ewmPic").show().find("img").attr("src3"))
},function(){clearTimeout(g);
g=setTimeout(function(){$("#ewmPic").hide()
},200)
})
};
iFourth.gotop=function(){$("html,body").scrollTop(0)
};
iFourth.lazyAjax=function(b,a){var e={},c=true,h,f,g=iFourth.win;
$(b).each(function(){var i=$(this);
e[i.attr("id")]={obj:i,url:i.attr("data-url"),type:i.attr("data-type"),handle:null,enable:true,_cache:true}
});
g.scroll(function(){if(c){for(f in e){(function(){var m=e[f],o=m.obj,j=m.url,k=m.type||"json",i=m.enable,l=m.handle,n=m.cache!=undefined&&!m.cache?false:true;
trigger=(g.scrollTop()+g.height())>(o.offset().top-50);
if(!i||!trigger){return false
}if(j){k=="jsonp"&&$.ajax({url:j,cache:n,dataType:"jsonp",jsonpCallback:l,error:function(p,q){a(o,j,{error:q?q:"unknown"})
}})||$.ajax({url:j,cache:n,type:"get",success:function(p){k=="json"&&a(o,j,p);
k=="html"&&o.html(p);
l(p)
},error:function(p,q){a(o,j,{error:q?q:"unknown"})
}});
e[f].enable=false
}if(k=="function"&&m.handle){m.handle();
e[f].enable=false
}})()
}c=false;
setTimeout(function(){c=true
},200)
}});
g.scroll();
return e
};
iFourth.listloop=function(b){var e={wrap:"",loopBox:"",triggerLeft:".prev",triggerRight:".next",curCount:".cur-count",totalCount:".total-count",step:{wide:4,narrow:4},scrollWidth:{wide:580,narrow:580},hasCount:true,isLoop:true,isLazyLoad:true,delay:0,hasLabel:false,labelObj:null,vertical:false};
$.extend(e,b);
var m=$(e.wrap),u=m.find(e.triggerLeft),a=m.find(e.triggerRight),w=m.find(e.loopBox),j=w.find("li:not(.hide)"),g=e.step.wide,p=e.scrollWidth.wide,y=Math.ceil(j.length/g),h=j.length,n=m.find(e.curCount),z=m.find(e.totalCount),x=0;
if(screen.width<1280){g=e.step.narrow;
p=e.scrollWidth.narrow;
var A=j.length%g;
y=Math.ceil(j.length/g);
y=y==0?1:y;
h=j.length-A
}e.hasCount&&z.html(y);
u.unbind().click(function(){s()
});
a.unbind().click(function(){t()
});
n.text("1");
if(!e.isLoop){u.addClass("prev-disable")
}if(y==1){a.addClass("next-disable")
}var q=b.labelObj,c="",k;
if(q){if(y<=1){q.hide()
}q.find(".prev").unbind().click(function(){s()
});
q.find(".next").unbind().click(function(){t()
});
for(k=0;
k<y;
k++){c+="<li></li>"
}q.find("ul").html(c).find("li").click(function(){x=$(this).index();
v(false,$(this).index())
}).first().addClass("current")
}function t(){if(y==1||w.is(":animated")){return false
}if(!e.isLoop){x++;
if(x>=y){x=y-1
}v(function(){if(x==y-1){a.addClass("next-disable")
}u.removeClass("prev-disable")
},x);
return
}if(x==y-1){for(var i=0;
i<g;
i++){if(e.vertical){j.eq(i).css({position:"relative",top:y*p+"px"})
}else{j.eq(i).css({position:"relative",left:y*p+"px"})
}}}x++;
v(function(){if(x==y){x=0;
j.removeAttr("style");
if(e.vertical){w.css("top",x*p)
}else{w.css("left",x*p)
}}},x)
}function s(){if(y==1||w.is(":animated")){return false
}if(!e.isLoop){x--;
if(x<=0){x=0
}v(function(){if(x==0){u.addClass("prev-disable")
}a.removeClass("next-disable")
},x);
return
}if(x==0){for(var i=1;
i<=g;
i++){if(e.vertical){j.eq(h-i).css({position:"relative",top:-y*p+"px"})
}else{j.eq(h-i).css({position:"relative",left:-y*p+"px"})
}}}x--;
v(function(){if(x==-1){x=y-1;
j.removeAttr("style");
if(e.vertical){w.css("top",-x*p)
}else{w.css("left",-x*p)
}}},x)
}function v(B,i){o();
if(e.hasCount){if(i>y-1){i=0
}if(i<0){i=y-1
}n.html(i+1)
}if(!B){B=function(){}
}if(e.vertical){w.stop().animate({top:-x*p},300,B)
}else{w.stop().animate({left:-x*p},300,B)
}r(x==y?0:x);
if(q){q.find("li").removeClass("current").eq(x==y?0:x).addClass("current")
}}function o(){if(!e.isLazyLoad){return
}for(var B=0;
B<g;
B++){var i=j.eq(x*g+B).find("img");
if(i.attr("src3")){i.attr("src",i.attr("src3")).removeAttr("src3").addClass("err-product")
}}}function l(){var C=[],B,D;
C.push('<ul class="pager">');
for(B=1;
B<=y;
B++){C.push("<li"+(B==1?' class="current"':"")+">"+B+"</li>")
}C.push("</ul>");
var i=$(C.join("")).appendTo(m);
i.find("li").hover(function(){var E=$(this).index();
D=setTimeout(function(){w.find("li").eq((E+1)*g).prevAll().andSelf().find("img[src3]").each(function(){var F=$(this);
F.attr("src",F.attr("src3")).removeAttr("src3").addClass("err-product")
});
w.stop().animate({left:-E*p},300);
r(E);
x=E
},100)
},function(){clearTimeout(D)
})
}function r(B){m.find(".pager li").removeClass("current").eq(B).addClass("current")
}if(e.hasLabel){l()
}if(e.delay){var f=setInterval(function(){t()
},e.delay);
m.hover(function(){clearInterval(f)
},function(){f=setInterval(function(){t()
},e.delay)
})
}};
iFourth.singleloop=function(c){var f={wrap:"",loopBox:"",triggerLeft:".prev",triggerRight:".next",curCount:".cur-count",totalCount:".total-count",loopWidth:180,prePageWide:5,prePageNarrow:4,isLoop:false};
$.extend(f,c);
var i=$(f.wrap),g=i.find(f.loopBox),m=i.find(f.triggerLeft),j=i.find(f.triggerRight),a=f.isLoop,n=i.find(f.totalCount),b=i.find(f.curCount),k;
if(screen.width>=1200){k=f.prePageWide
}else{k=f.prePageNarrow
}n.text(i.find("li").size());
b.text("1");
if(i.find("li").size()<=f.prePageWide){m.hide();
j.hide()
}function e(p){var o="+="+f.loopWidth+"px";
l(o,-1,p)
}function h(o){l("-="+f.loopWidth+"px",1,o)
}function l(o,s,r){var t=parseInt(b.html()),q=parseInt(n.html()),p=t+s;
if(parseInt(b.html())<=1){m.addClass("ctr-disabled");
j.removeClass("ctr-disabled")
}if(g.is(":animated")||r.is(".ctr-disabled")){return false
}g.stop().animate({left:o});
b.text(p);
if(!a){if(q-p<k){j.addClass("ctr-disabled");
m.removeClass("ctr-disabled")
}else{m.removeClass("ctr-disabled");
j.removeClass("ctr-disabled")
}}if(p<=1){m.addClass("ctr-disabled")
}}m.unbind().click(function(){e($(this))
});
j.unbind().click(function(){h($(this))
})
};
iFourth.breadcrumb=function(){var a=iFourth.body;
if(iFourth.ie6){$(".breadcrumb .dropdown").each(function(){var b=$(this);
b.css("width",b.width())
})
}$(".breadcrumb .dropdown-text a").click(function(b){b.stopPropagation()
});
a.on("click",".breadcrumb .dropdown",function(b){if($(this).find(".dropdown-option").size()==0){return false
}$(this).toggleClass("dropdown-active").siblings().removeClass("dropdown-active");
b.stopPropagation()
});
a.click(function(){$(".breadcrumb .dropdown").removeClass("dropdown-active")
})
};
iFourth.breadcrumbSize=function(b){var a=b.children().size();
a=a>6?6:a;
b.width(a*80)
};
iFourth.buyNum=function(){var g=$(".proinfo-num"),h=g.find(".minus"),f=g.find(".plus"),c=g.find("input:text"),a=parseInt(c.attr("max")||99),e=parseInt(c.val())||1;
a=a>99?99:a;
function b(){e==1&&h.addClass("minus-disable")||h.removeClass("minus-disable");
e==a&&f.addClass("plus-disable")||f.removeClass("plus-disable")
}h.unbind().click(function(){!$(this).is(".minus-disable")&&c.val(--e),b()
});
f.unbind().click(function(){!$(this).is(".plus-disable")&&c.val(++e),b()
});
c.unbind().on("keyup paste click drop",function(i){var j=parseInt(c.val());
j=j?j:1;
j=j>a?a:j;
if(i.type=="drop"){setTimeout(function(){c.val(e=j);
b()
},100)
}else{c.val(e=j);
b()
}});
b()
};
iFourth.servLabel=function(){var a;
$(".proinfo-serv span[tooltip], .mainbtns a[tooltip]").hover(function(f){if(f.target.className=="tooltip"){return false
}var c=$(this),b=c.attr("tooltip");
if(b){a=setTimeout(function(){$('<div class="tooltip"><i></i>'+b+"</div>").appendTo(c).fadeIn(100)
},100)
}},function(){clearTimeout(a);
$(this).find(".tooltip").fadeOut(100,function(){$(this).remove()
})
})
};
iFourth.attrChoose=function(){var b=$(".proattr-result"),a=b.find("dd .result-text");
function e(){var f="";
$(".proattr-radio li.selected, .proattr-check li.selected").each(function(){f+='"'+$(this).attr("title")+'" '
});
$(".proinfo-bangke input:checked").each(function(){f+='"'+$(this).next("label").text()+'" '
});
a.text(f);
(f==""&&$("#phonedl li.selected").size()==0)&&b.hide()||b.show()
}function c(){var f=true;
$("#J-TZM dl:visible dd input:hidden").each(function(){if($(this).val()==""){f=false
}});
f&&iFourth.TZM.hide()
}$(".proattr-radio").each(function(){var h=$(this),f=h.find("li:not(.disabled,.c-disabled)"),g=h.find("input:hidden");
f.click(function(){var j=$(this);
j.addClass("selected").siblings().removeClass("selected");
g.val(j.attr("data-id"));
if(sn.pageFlag!=undefined&&sn.pageFlag==1){var i=$(this).attr("sid");
gMain.initSubCss(i,$(this).index())
}e();
c()
})
});
$(".proattr-check").each(function(){var h=$(this),f=h.find("li:not(.disabled)"),g=h.find("input:hidden");
f.unbind("click").click(function(){var j=$(this),i=[];
j.toggleClass("selected");
h.find("li.selected").each(function(){i.push($(this).attr("data-id"))
});
g.val(i.join("|"));
e();
c()
})
});
$(".proinfo-bangke input").change(function(){e()
});
e()
};
iFourth.TZM={init:function(){var a=this,b=$(".tzm");
this.border=b.find(".tzm-border");
this.btnClose=b.find(".close");
this.btnClose.click(function(){a.hide()
})
},show:function(){this.border.show();
this.btnClose.show();
if($.browser.msie&&$.browser.version=="7.0"){this.border.css("zoom","1")
}},hide:function(){this.border.hide();
this.btnClose.hide()
}};
iFourth.proSideIndex=function(){var b=$(".proinfo-side"),a=$(".proinfo-main"),c=b.height(),e=a.height();
iFourth.mainHeight();
b.hover(function(){$(this).addClass("proinfo-side-hover")
},function(){$(this).removeClass("proinfo-side-hover")
});
$(".proinfo-side-switch").click(function(){var f=$(this),g=f.find("p");
if(b.is(".proinfo-side-show")){g.html("&lt;");
b.removeClass("proinfo-side-show").animate({width:0},300);
f.removeClass("proinfo-side-switch-unfold").animate({right:0},300)
}else{g.html("&gt;");
b.addClass("proinfo-side-show").animate({width:199},300);
f.addClass("proinfo-side-switch-unfold").animate({right:198},300)
}});
if(!$("html").is(".root1200")){b.append('<div class="temp-blank"></div>')
}};
iFourth.mainHeight=function(){var b=$(".proinfo-side").css("height","auto"),a=$(".proinfo-main").css("height","auto");
if(b[0]&&a[0]){var e=b[0].scrollHeight,f=a[0].scrollHeight,c=0;
if(f<e){c=e<430?430:e;
a.height(c-40);
b.height(c)
}else{c=f<430?430:f;
a.height(c-40);
b.height(c)
}}};
iFourth.priceFeedbackDialog=function(){$(".btn-price-feedback").unbind("click");
$(".btn-price-feedback").click(function(){$("body").AjaxLogin({success:function(){var f=sn.shopName;
$("#feedbackShopName").html(f);
var c=$(".address-placement span").eq(1).html();
if(c==""||c=="undefined"){var b=$(".address-placement span").eq(1).html();
$("#feedbackCity").attr("default",b)
}else{$("#feedbackCity").attr("default",c)
}var e=$("#feedback_image").val();
$("#feedBackImg").attr("src",e);
var a=sn.promotionPrice!=undefined?sn.promotionPrice:"";
if(sn.priceType=="0"){$("#feedback_price_name label").text("易购价：")
}else{if(sn.priceType=="1"){$("#feedback_price_name label").text("促销价：")
}else{if(sn.priceType=="4"&&PriceShow.serviceType=="2"){$("#feedback_price_name label").text("抢购价：")
}else{if(sn.priceType=="4"&&PriceShow.serviceType=="3"){$("#feedback_price_name label").text("团购价：")
}else{if(sn.priceType=="4"){$("#feedback_price_name label").text("大聚惠：")
}}}}}$("#feedbackPrice").html("<i>&yen;</i> "+a);
$("input[name=priceplace]:eq(0)").attr("checked","checked");
$(".price-feedback-text").each(function(){var h=$(this),g=h.attr("default");
h.val(g);
h.focus(function(){var i=$(this);
if(i.val()==g){i.val("");
i.addClass("price-feedback-text-dark")
}});
h.blur(function(){var i=$(this);
if(i.val()==""){i.val(g);
i.removeClass("price-feedback-text-dark")
}})
});
$("#foundDate").val(iFourth.getCurDate());
$.mDialog({title:"请告诉我们更低的价格？",message:$("#win_priceFeedback"),css:{width:"480px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true})
}});
$("#foundDate").click(function(){$("#J-calendar").click();
return false
});
ECode.calendar({inputBox:"#J-calendar",showbox:"#foundDate",pos:{right:0,top:-230},range:{mindate:null,maxdate:new Date()},notdate:[],isWeek:false,callback:function(){var a=document.getElementById("foundDate");
iFourth.checkFeedBackInput(a)
}})
});
$("input[name=priceplace]").die().live("click",function(){var a=parseInt($(this).val());
$(".price-feedback-form-item").hide().eq(a).show()
});
$(".price-feedback-button .btn-submit").die().live("click",function(){$("body").AjaxLogin({success:function(){iFourth.submitFeedBack()
}})
})
};
iFourth.addCartPop={elem:$("#addCartPop"),init:function(){var b=this,a=this.elem;
a.find(".close").click(function(){b.hide()
})
},hide:function(){this.elem.hide();
iFourth.mask.hide()
},show:function(){var c=this,b=this.elem,a=this.mask,e=$(window);
b.css({marginTop:(e.height()-b.outerHeight())/2,marginLeft:(e.width()-b.outerWidth())/2}).show();
iFourth.mask.show()
}};
iFourth.sideRec=function(){var f=$("#J-sideRec"),c=f.find(".more"),a=f.find(".si-rec-list li"),b=Math.ceil(a.size()/2),e=1;
c.click(function(){e=e==b?1:e+1;
var g=a.hide().eq((e-1)*2);
g.add(g.next().get(0)).show().find("img[src3]").each(function(){var h=$(this);
h.attr("src",h.attr("src3")).removeAttr("src3")
})
})
};
iFourth.procon=function(){var e=$(".procon"),b=$(".procon-toolbar"),c=$("#J-fixBar"),h=c.find(".area"),g=e.find(".proinfo-mini"),f=iFourth.win,a=0;
e.find(".tabarea-items li").click(function(){var i=e.offset().top;
if(f.scrollTop()>i){f.scrollTop(i)
}});
e.find(".handle").hover(function(){if(sn.pageFlag!=undefined&&sn.pageFlag==1){gMain.initMiniCartInfo()
}else{$(".proinfo-mini span.count em").html($(".proinfo-num input").val())
}g.stop().show(200)
},function(){g.stop().hide(200)
});
f.scroll(function(){var i=f.scrollTop(),j=e.offset().top;
if(i>=j&&a==0){b.children().appendTo(h);
c.show();
a=1
}if(i<j&&a==1){h.children().appendTo(b).find(".proinfo-mini").hide();
c.hide();
a=0
}})
};
iFourth.shareBtn=function(){var a=$(".share"),b=$(".share-btn");
b.click(function(c){a.toggleClass("share-active");
c.stopPropagation()
});
iFourth.body.click(function(){a.removeClass("share-active")
})
};
var cDown;
iFourth.countdown=function(b){var g=$(".proinfo-cd"),i=g.find(".d"),f=g.find(".h"),a=g.find(".m"),e=g.find(".s"),c=0;
remain=parseInt(g.find("input:hidden").val());
Time1=parseInt(remain/3600/24);
if(Time1>99){$(".proinfo-cd .d").addClass("d-three");
c=1
}function j(){if(remain>=1){remain--;
var l=remain;
var k=0;
var h=0;
var m=0;
m=parseInt(remain/3600/24);
h=parseInt(remain/3600%24);
k=parseInt(remain/60%60);
l=parseInt(remain%60);
l=l<10?"0"+l:l.toString();
k=k<10?"0"+k:k.toString();
h=h<10?"0"+h:h.toString();
if(m>=10&&c==1){m=m<100?"0"+m:m.toString()
}else{if(m>=10&&c==0){m=m
}else{if(m<10&&c==1){m="00"+m
}else{m="0"+m
}}}i.text(m);
f.text(h);
a.text(k);
e.text(l);
b(remain)
}cDown=setTimeout(arguments.callee,1000)
}j()
};
iFourth.putRight=function(a){$("#J-procon-param").on("mouseenter","tr",function(){$(this).find(".err").addClass("hover")
}).on("mouseleave","tr",function(){$(this).find(".err").removeClass("hover")
});
$("#J-procon-param").on("click",".err a",function(){var b=this;
$("body").AjaxLogin({success:function(){$.mDialog({title:"参数纠错",message:$("#paramWrongPop"),css:{width:"420px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true});
a&&a(b)
}})
});
$("#J-procon-param").on("click",".pro-para-help",function(){$(".pro-para-tip").hide();
$(".pro-para-tbl .name-inner").removeAttr("style");
$(this).siblings(".pro-para-tip").show().parent().css("z-index","11")
});
$("#J-procon-param").on("click",".pro-para-tip .close",function(){$(this).parent().hide().parent().removeAttr("style")
})
};
iFourth.zitiPop=function(){$(".btn-ziti").click(function(){$.mDialog({title:"现货门店列表",message:$("#win_ziti"),css:{width:"460px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true})
})
};
iFourth.zengpin=function(){var a=$("#zengpin-popimg"),b;
$(".zengpin tr").hover(function(){clearTimeout(b);
var c=$(this).find(".img img"),e=c.attr("src-large"),f=c.position();
b=setTimeout(function(){if(a.size()==0){a=$('<img style="position:absolute; width:200px; height:200px; border:solid 1px #EEE; z-index:6;"/>').css({left:f.left-205,top:f.top-105}).appendTo(".proinfo-main")
}a.attr("src",e).show().animate({top:f.top-85},200);
$(".proinfo-main").css("z-index",6)
},200)
},function(){clearTimeout(b);
b=setTimeout(function(){a.hide();
$(".proinfo-main").css("z-index",4)
},200)
})
};
iFourth.scodeHelp=function(){var a=$(".proinfo-main"),b;
$(".scode-help-icon").hover(function(){var c=$(this);
clearTimeout(b);
b=setTimeout(function(){var f=$('<div class="scode-help-tip"><i></i>'+c.attr("data-tip")+"</div>"),h=c.position(),g=h.left-50,e=587;
if(g+250>e){g=e-250
}f.css({position:"absolute",top:h.top+25,left:g}).find("i").css("left",h.left-g);
a.append(f)
},100)
},function(){clearTimeout(b);
b=setTimeout(function(){$(".scode-help-tip").remove()
},100)
})
};
iFourth.overseDeliver=function(){var a;
if(iFourth.ie6){$(".proinfo-deliver-oversea .process .bg").width($(".proinfo-deliver-oversea .process").outerWidth())
}$(".proinfo-deliver-oversea").find(".process, .process-dropdown").hover(function(){clearTimeout(a);
var b=$(this);
a=setTimeout(function(){b.parents(".proinfo-deliver-oversea").addClass("proinfo-deliver-oversea-unfold")
},100)
},function(){clearTimeout(a);
var b=$(this);
a=setTimeout(function(){b.parents(".proinfo-deliver-oversea").removeClass("proinfo-deliver-oversea-unfold")
},100)
})
};
iFourth.o2oPop={init:function(c){var b=this,a=$("#win_o2o");
$(".proinfo-o2o li:not(.item1) a").live("click",function(){var e=$(this).closest("li"),f=a.find(".title h3");
if(e.hasClass("item6")){f.text("体验店");
a.addClass("tiyandian")
}else{f.text("门店服务");
a.removeClass("tiyandian")
}$("#win_o2o .areas dd").removeClass("unfold");
b.show();
c(this)
});
iFourth.mask.click(function(){b.hide()
});
a.on("click",".close",function(){b.hide();
iFourth.mask.animate({opacity:0},200,function(){$(this).hide()
})
});
a.on("click",".areas .more",function(){$(this).parent().toggleClass("unfold")
});
a.on("mouseenter mouseleave",".o2o-service-main li",function(f){if(f.type=="mouseenter"){$(this).addClass("hover")
}if(f.type=="mouseleave"){$(this).removeClass("hover")
}})
},show:function(){var b=$("#win_o2o"),a=b.outerHeight();
b.fadeIn(200);
iFourth.mask.show().animate({opacity:0.3},200);
if(iFourth.ie6){b.css("top",iFourth.win.scrollTop()+(iFourth.win.height()-b.outerHeight())/2-20)
}else{b.css("margin-top",-a/2-20)
}},hide:function(){$("#win_o2o").fadeOut(200)
},updateFilter:function(){var a=$("#win_o2o .areas dd ul")[0].clientHeight;
if(iFourth.ie6){if(a>50){$("#win_o2o .areas dd").height(46)
}}if(a>50){$("#win_o2o .more").show()
}else{$("#win_o2o .more").hide()
}},updateContent:function(){var a=$("#win_o2o .o2o-service-main li:visible").size();
if(a<5){$("#win_o2o .watermark").height((5-a)*62)
}else{$("#win_o2o .watermark").height(0)
}}};
iFourth.showRating={setPosition:function(a){a.ele.stop().animate({top:a.val},400)
},setVal:function(a){a.ele1.stop().animate({width:a.val},300);
a.ele2.text(a.val)
},start:function(){var f=this;
var b=$(".store-more"),a=b.find(".more-info"),e=a.find(".star-val"),c=a.find(".good-val");
b.on("mouseenter",".si-main ul li",function(){var k=$(this),h=k.attr("rating"),j=k.position().top;
a.show();
k.addClass("hover");
var g={ele1:e,ele2:c,val:h};
var i={ele:a,val:j};
f.setVal(g);
f.setPosition(i)
});
b.on("mouseleave",".si-main ul li",function(){var g=$(this);
g.removeClass("hover");
a.hide()
})
}};
iFourth.Tab=function(b,c,a){$(b).children("li").click(function(){var f=$(this),e=$(f.attr("rel")),g=f.attr("data-url"),h=f.attr("data-type")||"json";
if(f.is(".current")){return false
}f.addClass("current").siblings().removeClass("current");
e.siblings(c).hide();
e.show().find("img[src3]").each(function(){var i=$(this);
i.attr("src",i.attr("src3")).removeAttr("src3")
});
if(g&&!f.attr("loaded")){h=="jsonp"&&$.ajax({url:g,dataType:"jsonp",jsonp:"jsonpcallback"})||$.get(g,function(i){h=="json"&&a(e,g,i);
h=="html"&&e.html(i)
});
f.attr("loaded","loaded")
}if(h=="function"){a(e)
}})
};
iFourth.tiein=function(){var a=$(".tiein");
a.on("mouseenter",".tiein-list li",function(){$(this).addClass("hover")
});
a.on("mouseleave",".tiein-list li",function(){$(this).removeClass("hover")
})
};
iFourth.wrapParam=function(){var l=$(".hover-liner"),m=$(".prods-param-list li"),h=$(".prods-param-list"),b=$(".prods-param-list .on"),i=b.index(),k=i,f=g*180,g=m.size(),a,e;
function j(n){l.stop().animate({left:n},200)
}function c(n,r){var q=$(".hover-liner").offset().left,p=$(".prods-param-list li").eq(n).offset().left;
var o=p-q;
if(o>0){o="+="+o+"px"
}else{o="-="+(-o)+"px"
}return o
}m.hover(function(){l.show();
var o=$(this),n=setTimeout(function(){var p=o.index();
a=c(p,k);
j(a);
k=p
},200)
},function(){clearTimeout(e)
});
h.mouseleave(function(){var n=b.offset().left,o=$(".list-wrapper").offset().left;
l.stop().animate({left:n-o},200,function(){l.hide()
});
k=b.index()
});
m.click(function(){$(this).siblings().removeClass("on");
$(this).addClass("on");
b=$(this);
var n=b.offset().left,o=$(".list-wrapper").offset().left;
k=b.index();
l.stop().animate({left:n-o},200);
var p=$(this).index();
$(".prods-show-rel").hide().eq(p).show()
}).first().click();
l.css("left",i*180+30+"px");
if(screen.width>=1200){if(g<5){$(".list-wrapper").css({width:f});
$(".prods-show .prev").hide();
$(".prods-show .next").hide()
}}else{if(g<4){$(".prods-show .prev").hide();
$(".prods-show .next").hide()
}}iFourth.singleloop({wrap:".prods-show",loopBox:".prods-param-list",triggerLeft:".prev",triggerRight:".next",loopWidth:180,prePageWide:5,prePageNarrow:4,isLoop:false})
};
iFourth.tieInRec=function(){iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
var e=$("#J-tieIn"),a=e.find(".tiein-nav a"),h=e.find(".tiein-list ul"),j=h.children("li"),f=j.find(".check"),b=e.find(".btn-addcart-mini"),g=e.find(".tiein-count .count em"),k=e.find(".price-total"),i=e.find(".price-diff"),l=i.parents("dl");
e.find(".btn-dir").click(function(){iFourth.tieInTZM.close()
});
function c(){f.filter(":checked").prop("checked",false).click().removeAttr("checked")
}a.click(function(){var q=$(this),o=q.attr("data-type");
if(q.is(".current")){return false
}q.addClass("current").siblings("a").removeClass("current");
var n,p=$(".tiein-main-empty"),m=e.find(".btn-dir");
if(parseInt(o)){n=j.addClass("hide").filter('[data-type="'+o+'"]').removeClass("hide")
}else{n=j.removeClass("hide")
}if(n.size()==0){p.show();
m.hide()
}else{p.hide();
m.show()
}h.css("left",0);
e.find(".next, .prev").unbind();
iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
});
f.click(function(){if($(".tiein-tzm-pop").is(":visible")){return false
}var n=$(this),w=n.parents("li"),m=parseFloat(w.find(".high").val()),u=parseFloat(w.find(".low").val()),q=w.index(),o=w.find("img"),p=o.offset();
var x=n.parents("li"),s=x.find(".tiein-list-tzm"),y=true;
if(iFourth.tieInTZM.enable&&w.find(".handle").size()>0){if(s.attr("loaded")){s.find("dl").each(function(){if($(this).find("li.selected").size()==0){y=false
}});
if(!y){iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.pop(x);
return false
}}else{iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.loadData(x);
return false
}}var v=n.is(":checked");
w[v?"addClass":"removeClass"]("selected");
var t=b.offset();
t.top=t.top-30;
t.left=t.left+37;
if(v){g.text(parseInt(g.text())+1);
k.text((parseFloat(k.text())+u).toFixed(2));
i.text((parseFloat(i.text())+m-u).toFixed(2));
parseFloat(i.text())>0&&l.show()||l.hide();
var r=$('<div><img src="'+o.attr("src")+'" /></div>').attr({id:"animateObj"+q,"class":"add-cart-animateObj"}).css({top:p.top,left:p.left}).appendTo("body");
r.animate({top:b.offset().top-30,left:t.left,width:30,height:30,opacity:1},600,function(){r.animate({top:"+=30px",height:0},400,function(){r.remove();
var z=$('<span class="icon-plusone"></span>').appendTo(b);
z.animate({bottom:"+=10px",opacity:0},600,function(){z.remove()
})
})
})
}else{g.text(parseInt(g.text())-1);
k.text((parseFloat(k.text())-u).toFixed(2));
i.text((parseFloat(i.text())-m+u).toFixed(2));
var r=$("#animateObj"+q);
r.stop().fadeOut(500,function(){r.remove()
});
parseFloat(i.text())>0&&l.show()||l.hide()
}});
e.find(".reset").click(function(){c()
});
j.find(".handle a").click(function(){var n=$(this).parents("li"),m=n.find(".check");
if(m.is(":checked")){m.prop("checked",false).click().removeAttr("checked")
}iFourth.tieInTZM.pop(n)
})
};
iFourth.tieInRec2={init:function(){iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
var e=$("#J-tieIn"),a=e.find(".tiein-nav a"),h=e.find(".tiein-list ul"),k=h.children("li"),f=k.find(".check"),b=e.find(".btn-addcart-mini"),g=e.find(".tiein-count .count em"),l=e.find(".price-total"),j=e.find(".price-diff"),m=j.parents("dl");
e.find(".btn-dir").click(function(){iFourth.tieInTZM.close()
});
this.box=e;
this.list=h;
function c(){e.find(".tiein-list li :checked").prop("checked",false).click().removeAttr("checked")
}var i=[];
k.each(function(){i.push($(this).attr("data-id"))
});
this.existent=i;
a.click(function(){var o=$(this),n=o.attr("data-type");
if(o.is(".current")){return false
}o.addClass("current").siblings("a").removeClass("current");
$(".tiein-main-empty").hide();
if(!n){h.children("li").addClass("hide").filter("[data-rec]").removeClass("hide");
iFourth.tieInRec2.update()
}else{if(o.attr("loaded")){iFourth.tieInRec2.showType(n);
iFourth.tieInRec2.update()
}else{h.children("li").addClass("hide")
}}});
e.on("click",".check",function(){if($(".tiein-tzm-pop").is(":visible")){return false
}var o=$(this),w=o.is(":checked"),x=o.parents("li"),n=parseFloat(x.find(".high").val()),v=parseFloat(x.find(".low").val()),r=x.index(),p=x.find("img"),q=p.offset();
var y=o.parents("li"),t=y.find(".tiein-list-tzm"),z=true;
if(iFourth.tieInTZM.enable&&x.find(".handle").size()>0){if(t.attr("loaded")){t.find("dl").each(function(){if($(this).find("li.selected").size()==0){z=false
}});
if(!z){iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.pop(y);
return false
}}else{iFourth.tieInTZM.addCart=true;
iFourth.tieInTZM.loadData(y);
return false
}}var w=o.is(":checked");
x[w?"addClass":"removeClass"]("selected");
var u=b.offset();
u.top=u.top-30;
u.left=u.left+37;
if(w){g.text(parseInt(g.text())+1);
l.text((parseFloat(l.text())+v).toFixed(2));
j.text((parseFloat(j.text())+n-v).toFixed(2));
parseFloat(j.text())>0&&m.show()||m.hide();
var s=$('<div><img src="'+p.attr("src")+'" /></div>').attr({id:"animateObj"+r,"class":"add-cart-animateObj"}).css({top:q.top,left:q.left}).appendTo("body");
s.animate({top:b.offset().top-30,left:u.left,width:30,height:30,opacity:1},600,function(){s.animate({top:"+=30px",height:0},400,function(){s.remove();
var A=$('<span class="icon-plusone"></span>').appendTo(b);
A.animate({bottom:"+=10px",opacity:0},600,function(){A.remove()
})
})
})
}else{g.text(parseInt(g.text())-1);
l.text((parseFloat(l.text())-v).toFixed(2));
j.text((parseFloat(j.text())-n+v).toFixed(2));
var s=$("#animateObj"+r);
s.stop().fadeOut(500,function(){s.remove()
});
parseFloat(j.text())>0&&m.show()||m.hide()
}});
e.find(".reset").click(function(){c()
});
k.find(".handle a").click(function(){var o=$(this).parents("li"),n=o.find(".check");
if(n.is(":checked")){n.prop("checked",false).click().removeAttr("checked")
}iFourth.tieInTZM.pop(o)
})
},update:function(){this.list.css("left",0);
this.box.find(".next, .prev").unbind();
iFourth.listloop({wrap:"#J-slide-tieIn",loopBox:".tiein-list ul",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
},showType:function(b){var a=this.list.children("li").addClass("hide").filter('[data-type="'+b+'"]').removeClass("hide");
if(a.size()==0){$(".tiein-main-empty").show()
}}};
iFourth.setMeal=function(){iFourth.listloop({wrap:"#J-slide-setMeal",loopBox:".tiein-list ul:not(.hide)",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}});
iFourth.listloop({wrap:"#J-setMeal-list",loopBox:".meal-list",triggerLeft:".prev",triggerRight:".next",step:{wide:4,narrow:3},scrollWidth:{wide:880,narrow:660}});
var e=$(".meal-list li").size();
if(screen.width>=1200){if(e<4){$(".meal-wrapper .prev").hide();
$(".meal-wrapper .next").hide()
}}var b=$("#J-setMeal"),a=b.find(".tiein-nav a"),c=b.find(".tiein-list ul"),f=c.children("li");
a.click(function(){var h=$(this),g=h.attr("data-group");
if(h.is(".current")){return false
}h.addClass("current").siblings("a").removeClass("current");
b.find(".tiein-list ul").addClass("hide").filter('[data-group="'+g+'"]').removeClass("hide");
b.find(".next, .prev").unbind();
c.css("left",0);
iFourth.listloop({wrap:"#J-slide-setMeal",loopBox:".tiein-list ul:not(.hide)",step:{wide:4,narrow:3},scrollWidth:{wide:768,narrow:561}})
})
};
iFourth.tieInTZM={enable:false,addCart:false,currentItem:null,loadData:null,init:function(e){var f=this,c=$(".tiein-tzm-pop");
f.enable=true;
f.loadData=e;
var g=$(this),a=g.find("li:not(.disabled,.c-disabled)"),b=g.find("input:hidden");
c.on("click",".main dl dd li:not(.disabled,.c-disabled)",function(){var n=$(this);
n.addClass("selected").siblings().removeClass("selected");
var m="已选择：",h="",k=[],l=[],j="",i="";
c.find(".main dl li.selected").each(function(){k.push($(this).attr("title"));
l.push($(this).attr("cid"))
});
m+=k.join("，");
h+=l.join("");
j=$(this).parents("dl").attr("pass");
if(typeof j!="undefined"&&j!=""){CommonFourPage.checkSub(j,this);
$.each(fitInfo,function(p,q){if(typeof q!="undefined"&&q.passPart==j){var o=q.subInfo[0][h];
if(typeof o!="undefined"){$('.tiein-list-tzm[pass="'+j+'"]').siblings(".fitPartNumber").val(o.partNumber);
$(".tiein-tzm-pop .btn-ok").attr("sub",o.partNumber);
$(".tiein-tzm-pop .btn-ok").attr("pass",j)
}}})
}c.find(".tip .normal").text(m).siblings().text("")
});
c.on("click",".btn-ok",function(){CommonFourPage.getSubFitPrice(this)
});
c.on("click",".close,.btn-cancel",function(){f.close()
})
},pop:function(b){if(b[0]==this.currentItem){return
}var a=b.find(".tiein-list-tzm");
if(a.attr("loaded")){iFourth.tieInTZM.show(b)
}else{iFourth.tieInTZM.loadData(b)
}},show:function(g){var f=g.find(".tiein-list-tzm"),i=f.html(),b=$(".tiein-tzm-pop");
f.attr("loaded","loaded");
this.currentItem=g[0];
var a=g.offset().left,c=$(".tiein-box").offset().left;
b.css("left",a-c+120).show().find(".main").html(i);
var h="已选择：",e=[];
b.find(".main dl li.selected").each(function(){e.push($(this).attr("title"))
});
if(e.length>0){h+=e.join("，");
b.find(".tip .normal").text(h).siblings().text("")
}},close:function(){this.currentItem=null;
this.addCart=false;
$(".tiein-tzm-pop").hide().find(".tip span").text("")
},select:function(){var e=this,c=$(".tiein-tzm-pop"),b=true,i=true,a=c.find(".tiein-tzm-color"),h=c.find(".tiein-tzm-buytype"),g=c.find(".tip .error");
if(a.size()>0&&a.find("li.selected").size()==0){b=false
}if(h.size()>0&&h.find("li.selected").size()==0){i=false
}if(!b||!i){g.text("请选择颜色和尺码");
if(b){g.text("请选尺码")
}if(i){g.text("请选择颜色")
}g.siblings().text("");
return
}var f=$(e.currentItem);
f.find(".tiein-list-tzm").html(c.find(".main").html());
if(e.addCart){iFourth.tieInTZM.close();
f.find("input.check").prop("checked",true).click().prop("checked",true)
}else{iFourth.tieInTZM.close()
}}};
iFourth.Zoom=function(a){var b=$(a);
this.box=b;
this.mainArea=b.find(".imgzoom-main");
this.popArea=b.find(".imgzoom-pop");
this.shot=b.find(".imgzoom-shot");
this.mainImg=this.mainArea.children("img");
this.largeImg=this.popArea.children("img");
this.thumbList=b.find(".imgzoom-thumb-main ul");
this.thumbItems=this.thumbList.children("li");
this.btnPrev=b.find(".prev");
this.btnNext=b.find(".next");
this.count=this.thumbItems.size();
this.page=1;
this.pageCount=this.count-4;
this.index=0;
this.srcMedium="";
this.srcLarge="";
this._init()
};
iFourth.Zoom.prototype={_init:function(){var a=this,c,b=this.thumbItems.find("img").first();
this.srcMedium=b.attr("src-medium");
this.srcLarge=b.attr("src-large");
this.thumbList.css("left",0);
this.btnPrev.addClass("prev-disable");
if(this.thumbItems.size()<=5){this.btnNext.addClass("next-disable")
}else{this.btnNext.removeClass("next-disable")
}this.thumbItems.hover(function(){var e=$(this);
c=setTimeout(function(){a.choose(e.index())
},100)
},function(){clearTimeout(c)
});
this.btnPrev.unbind().click(function(){!$(this).is(".prev-disable")&&a._paging(0)
});
this.btnNext.unbind().click(function(){!$(this).is(".next-disable")&&a._paging(1)
});
this._zoom();
this._video();
this._popInit();
this.choose(0)
},_paging:function(b){if(b){this.thumbList.animate({left:"-=67px"},200);
this.page++
}else{this.thumbList.animate({left:"+=67px"},200);
this.page--
}if(this.page==this.pageCount){this.btnNext.addClass("next-disable")
}else{this.btnNext.removeClass("next-disable")
}if(this.page==1){this.btnPrev.addClass("prev-disable")
}else{this.btnPrev.removeClass("prev-disable")
}var a=this.thumbItems.eq(this.page+3).find("img[src3]");
a.attr("src",a.attr("src3"))
},_zoom:function(){var a=this,b;
this.mainArea.hover(function(c){if(!a.srcLarge){return false
}a.mainArea.mousemove(function(f){a._shotPosition(f.pageX,f.pageY)
});
b=setTimeout(function(){a.largeImg.attr("src",a.srcLarge);
a.popArea.fadeIn(200);
a.shot.animate({opacity:".5"},200)
},100)
},function(){clearTimeout(b);
a.mainArea.unbind("mousemove");
a.popArea.fadeOut(200);
a.shot.animate({opacity:"0"},200)
})
},_shotPosition:function(g,c){var h=this.mainArea.offset(),f=this.shot;
var a=g-h.left,i=c-h.top,b=a-101,e=i-101;
if(a-101<=0){b=0
}if(a+101>=400){b=198
}if(i-101<=0){e=0
}if(i+101>=400){e=198
}f.css({left:b,top:e});
this.largeImg.css({top:-e/400*800,left:-b/400*800})
},_video:function(){var a=$(".imgzoom-video"),b=$("#videoHtml").html();
$(".imgzoom-video-play").unbind().click(function(){a.append(b).show()
});
a.find(".close").unbind().click(function(){$(this).next().remove();
a.hide()
})
},choose:function(b){var a=this.thumbItems.eq(b),c=this.box.find(".imgzoom-main img"),e=a.find("img");
this.srcMedium=e.attr("src-medium");
this.srcLarge=e.attr("src-large");
this.index=b;
a.addClass("current").siblings().removeClass("current");
c.attr("src",this.srcMedium)
},_popInit:function(){var j=this,k=$(".imgview"),q=k.find(".imgview-main img"),c=k.find(".mask-l"),e=k.find(".mask-r"),p=k.find(".imgview-count span"),g=k.find(".imgview-count em"),a=k.find(".imgview-thumb-main"),n=a.children("ul"),f=n.children("li"),s=k.find(".imgview-thumb .prev"),t=k.find(".imgview-thumb .next"),i=k.find("a.close"),h=1,r=6,m=Math.ceil(f.size()/6);
function o(u){var v=f.removeClass("current").eq(u).addClass("current");
q.attr("src",v.find("img").attr("src-large"));
j.index=u;
b(Math.ceil((u+1)/6));
g.text(j.index+1)
}function l(){j.choose(j.index);
k.fadeOut(300);
iFourth.mask.animate({opacity:0},300,function(){$(this).hide()
})
}function b(u){if(u==h){return false
}n.animate({top:-(u-1)*552},300);
h=u
}if(m>1){$(".imgview-thumb").removeClass("imgview-thumb-single")
}else{$(".imgview-thumb").addClass("imgview-thumb-single")
}n.css("top",0);
g.text(j.index+1);
p.text(j.count);
this.mainArea.unbind("click").click(function(){if(!j.srcLarge){return false
}o(j.index);
if(k.height()>iFourth.win.height()){k.css({position:"absolute",top:iFourth.win.scrollTop()+10+"px","margin-top":"0"})
}k.fadeIn(300).find("img[src3]").each(function(){$(this).attr("src",$(this).attr("src3")).removeAttr("src3")
});
iFourth.mask.show().animate({opacity:0.5},300)
});
i.unbind().click(function(){l()
});
iFourth.mask.click(function(){l()
});
f.click(function(){o($(this).index())
});
c.unbind().click(function(){var v=j.thumbItems.size(),u=j.index==0?(v-1):(j.index-1);
o(u)
});
e.unbind().click(function(){var v=j.thumbItems.size(),u=j.index==(v-1)?0:(j.index+1);
o(u)
});
s.unbind().click(function(){if(n.is(":animated")){return false
}b(h==1?m:h-1)
});
t.unbind().click(function(){if(n.is(":animated")){return false
}b(h==m?1:h+1)
})
}};
iFourth.submitFeedBack=function(){var m=$("input[name=priceplace]:checked").val();
var v="";
var a="";
var l="";
var c="";
var b="";
if(m==0){var h=$("#productNetAddr").val();
if(h==""||h=="请输入您发现的销售网址"){$("#productNetAddrTip").removeClass("hide");
$("#productNetAddr").addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入对方商品的网址");
return false
}else{$("#productNetAddrTip").addClass("hide");
$("#productNetAddr").removeClass("price-feedback-text-err")
}if(h.length>200){$("#productNetAddrTip").removeClass("hide");
$("#productNetAddr").addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入有效的网址");
return false
}else{$("#productNetAddrTip").addClass("hide");
$("#productNetAddr").removeClass("price-feedback-text-err")
}h=h.indexOf("#")!=-1?h.substr(0,h.indexOf("#")):h;
v=h;
var q=$("#feedbackPrice1").val()=="单位（元）"?"":$("#feedbackPrice1").val();
if(q==""){$("#feedbackPrice1Tip").removeClass("hide");
$("#feedbackPrice1").addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入对方商品的价格");
return false
}else{$("#feedbackPrice1Tip").addClass("hide");
$("#feedbackPrice1").removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($("#feedbackPrice1"))||q.length>10){$("#feedbackPrice1Tip").removeClass("hide");
$("#feedbackPrice1").addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入有效的金额");
return false
}else{$("#feedbackPrice1Tip").addClass("hide");
$("#feedbackPrice1").removeClass("price-feedback-text-err")
}a=q;
var j=$("#feedbackFreight").val()=="单位（元）"?"":$("#feedbackFreight").val();
if(j!=""){if(!iFourth.checkPrice($("#feedbackFreight"))||j.length>10){$("#feedbackFreightTip").removeClass("hide");
$("#feedbackFreight").addClass("price-feedback-text-err");
$("#feedbackFreightTip span").text("请输入有效的运费");
return false
}else{$("#feedbackFreightTip").addClass("hide");
$("#feedbackFreight").removeClass("price-feedback-text-err")
}}else{$("#feedbackFreightTip").addClass("hide");
$("#feedbackFreight").removeClass("price-feedback-text-err")
}l=j
}else{var f=$("#feedbackRealShopName").val()=="请输入实体店的名称"?"":$("#feedbackRealShopName").val();
if(f==""){$("#feedbackRealShopNameTip").removeClass("hide");
$("#feedbackRealShopName").addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入实体店的名称");
return false
}else{$("#feedbackRealShopNameTip").addClass("hide");
$("#feedbackRealShopName").removeClass("price-feedback-text-err")
}if(f.length>50){$("#feedbackRealShopNameTip").removeClass("hide");
$("#feedbackRealShopName").addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入有效的实体店名称");
return false
}else{$("#feedbackRealShopNameTip").addClass("hide");
$("#feedbackRealShopName").removeClass("price-feedback-text-err")
}v=f;
var q=$("#feedbackPrice2").val()=="单位（元）"?"":$("#feedbackPrice2").val();
if(q==""){$("#feedbackPrice2Tip").removeClass("hide");
$("#feedbackPrice2").addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入实体店商品的价格");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$("#feedbackPrice2").removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($("#feedbackPrice2"))||q.length>10){$("#feedbackPrice2Tip").removeClass("hide");
$("#feedbackPrice2").addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$("#feedbackPrice2").removeClass("price-feedback-text-err")
}a=q;
var s=$("#feedbackCity").val()=="请输入您发现的实体店城市"?"":$(".address-placement span").eq(1).html();
if(s.length>20){$("#feedbackCityTip").removeClass("hide");
$("#feedbackCity").addClass("price-feedback-text-err");
$("#feedbackCityTip span").text("请输入有效的城市");
return false
}else{$("#feedbackCityTip").addClass("hide");
$("#feedbackCity").removeClass("price-feedback-text-err")
}c=s;
var g=$("#foundDate").val();
if(g==""){$("#foundDateTip").removeClass("hide");
$("#foundDate").addClass("price-feedback-text-err")
}else{$("#foundDateTip").addClass("hide");
$("#foundDate").removeClass("price-feedback-text-err")
}b=g.split(" ")[0]
}var p="http://"+sn.domain+sn.context+"/SNFeedbackCmd?ftype="+m+"&catalog="+sn.catalogId;
if(typeof sn.categoryName1!="undefined"&&sn.categoryName1!=""){p+="&first="+sn.categoryName1
}if(typeof sn.categoryName2!="undefined"&&sn.categoryName2!=""){p+="&second="+sn.categoryName2
}if(typeof sn.categoryName3!="undefined"&&sn.categoryName3!=""){p+="&third="+sn.categoryName3
}if(typeof sn.categoryName4!="undefined"&&sn.categoryName4!=""){p+="&fouth="+sn.categoryName4
}if(typeof sn.categoryName5!="undefined"&&sn.categoryName5!=""){p+="&fifth="+sn.categoryName5
}p+="&partnumber="+$("#curPartNumber").val();
var x=sn.vendorCode==""?"0":"1";
p+="&vtype="+x;
var n=sn.vendorCode==""?"0000000000":sn.vendorCode;
p+="&vendorCode="+n;
var r=$("#itemDisplayName").html()==null?$("#productDisplayName").html():$("#itemDisplayName").html();
p+="&catName="+r;
var t=window.location.href;
t=t.indexOf("#")!=-1?t.substr(0,t.indexOf("#")):t;
p+="&pageUrl="+t;
var u=sn.priceType=="4"&&PriceShow.serviceType!="3"?sn.promotionPrice:"";
p+="&rushPrice="+u;
var o=sn.priceType=="4"&&PriceShow.serviceType=="3"?sn.promotionPrice:"";
p+="&groupPrice="+o;
var k=sn.priceType=="1"?sn.promotionPrice:"";
p+="&promotionPrice="+k;
var e=sn.priceType=="0"?sn.promotionPrice:"";
p+="&netPrice="+e;
var j=(sn.freight==-1||sn.freight=="免运费")?"":sn.freight;
p+="&freight="+j;
var i=$(".ui-city span").eq(1).html();
p+="&cityName="+i;
var w=d("idsEppLastLogin")!=null?d("idsEppLastLogin"):(d("logonUserIdLastTime")!=null?d("logonUserIdLastTime"):d("idsLoginUserIdLastTime"));
p+="&userNmae="+w;
p+="&compete="+v;
p+="&competePrice="+a;
p+="&competeFreight="+l;
p+="&competeCityname="+c;
p+="&competeTS="+b;
p=encodeURI(p);
$.ajax({url:p,type:"GET",cache:false,async:false,dataType:"jsonp",error:function(y,A,z){},success:function(y){$.unmDialog();
$.mDialog({title:"温馨提示",message:$("#win_success"),css:{width:"480px"},overlay:true,overlayCss:{background:"black",opacity:"0.3"},overlayClick:true})
}})
};
iFourth.checkFeedBackInput=function(f){var i=f;
if($(i).attr("id")=="productNetAddr"){var b=$(i).val();
if(b==""){$("#productNetAddrTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入对方商品的网址");
return
}else{$("#productNetAddrTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(b.length>200){$("#productNetAddrTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#productNetAddrTip span").text("请输入有效的网址");
return
}else{$("#productNetAddrTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackPrice1"){var c=$(i).val();
if(c==""||c=="单位（元）"){$("#feedbackPrice1Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入对方商品的价格");
return
}else{$("#feedbackPrice1Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($(i))||c.length>10){$("#feedbackPrice1Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice1Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice1Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackPrice2"){var c=$(i).val();
if(c==""||c=="单位（元）"){$("#feedbackPrice2Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入实体店商品的价格");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(!iFourth.checkPrice($(i))||c.length>10){$("#feedbackPrice2Tip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackPrice2Tip span").text("请输入有效的金额");
return
}else{$("#feedbackPrice2Tip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackFreight"){var a=$(i).val();
if(a!=""){if(!iFourth.checkPrice($(i))||a.length>10){$("#feedbackFreightTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackFreightTip span").text("请输入有效的运费");
return
}else{$("#feedbackFreightTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}else{$("#feedbackFreightTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackRealShopName"){var h=$(i).val()=="请输入实体店的名称"?"":$(i).val();
if(h==""){$("#feedbackRealShopNameTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入实体店的名称");
return
}else{$("#feedbackRealShopNameTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}if(h.length>50){$("#feedbackRealShopNameTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackRealShopNameTip span").text("请输入有效的实体店名称");
return
}else{$("#feedbackRealShopNameTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="feedbackCity"){var g=$(i).val();
if(g.length>20){$("#feedbackCityTip").removeClass("hide");
$(i).addClass("price-feedback-text-err");
$("#feedbackCityTip span").text("请输入有效的城市");
return
}else{$("#feedbackCityTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}if($(i).attr("id")=="foundDate"){var e=$(i).val();
if(e==""){$("#foundDateTip").removeClass("hide");
$(i).addClass("price-feedback-text-err")
}else{$("#foundDateTip").addClass("hide");
$(i).removeClass("price-feedback-text-err")
}}};
iFourth.getCurDate=function(){var h=new Date();
var e=h.getFullYear();
var f=iFourth.add_zero(h.getMonth()+1);
var i=iFourth.add_zero(h.getDate());
var a=iFourth.add_zero(h.getHours());
var c=iFourth.add_zero(h.getMinutes());
var g=iFourth.add_zero(h.getSeconds());
var b=e+"-"+f+"-"+i;
return b
};
iFourth.add_zero=function(a){if(a<10){return"0"+a
}else{return a
}};
iFourth.IsURL=function(c){var b="^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
var a=new RegExp(b);
if(a.test(c)){return(true)
}else{return(false)
}};
iFourth.checkPrice=function(b){var e=b.val();
var a=0;
if(e.length!=0){for(var c=0;
c<e.length;
c++){if((e.charAt(c)>"9"||e.charAt(c)<"0")&&e.charAt(c)!="."&&e.charAt(c)!=","){return(false)
}if(e.charAt(c)=="."){a++
}}if(a>1){return(false)
}}else{b.val("");
return false
}return true
};
iFourth.checkkey=function(b,a){b.value=b.value.replace(/[^\d.]/g,"");
b.value=b.value.replace(/^\./g,"");
b.value=b.value.replace(/\.{2,}/g,".");
b.value=b.value.replace(/^\d{1,10}\.\d{3}?$/g,b.value.substr(0,b.value.length-1));
b.value=b.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".")
};
iFourth.showQRCode=function(){var c=$(".proinfo-focus").eq(0),a=c.children(".qrcode-main,.qrcode-main-mobile");
if(a.is(":visible")){c.addClass("proinfo-focus-qrcode");
if(c.children("dl:visible").size()<3){c.addClass("proinfo-focus-qrcode-short")
}else{c.removeClass("proinfo-focus-qrcode-short")
}}else{c.removeClass("proinfo-focus-qrcode proinfo-focus-qrcode-short")
}var b=$(".qrcode-main-handle .dropdown");
var e=$(".qrcode-main-img");
var f=$.browser.msie&&$.browser.version<=8;
if(f){e.find("i").css("opacity",0)
}b.click(function(g){if(e.is(":animated")){return
}if(b.is(".dropdown-cur")){b.removeClass("dropdown-cur");
e.animate({top:50,opacity:0},200);
if(f){e.find("i").animate({opacity:0},200)
}}else{b.addClass("dropdown-cur");
e.animate({top:80,opacity:1},200);
if(f){e.find("i").animate({opacity:1},200)
}}g.stopPropagation()
});
$("body").click(function(){if(b.is(".dropdown-cur")){b.removeClass("dropdown-cur");
e.animate({top:50,opacity:0},200)
}})
};
iFourth.renxingfu=function(){$(".renxf-item").click(function(){var c=$(this);
var b=$("#buyNowAddCart");
if(c.parent().is(".renxf-list-disable")){return false
}if(c.is(".renxf-item-mianxi")&&!c.is(".current")){b.html("我要免息");
if(window.Renxf){Renxf.buttonId="rxfmx";
Renxf.buttonClass="btn-mianxi"
}}else{b.html("我要分期");
if(window.Renxf){Renxf.buttonId="rxffq";
Renxf.buttonClass="btn-fenqi"
}}c.toggleClass("current").siblings().removeClass("current");
if(c.hasClass("current")){if(!b.hasClass("btn-dark-buy")){b.addClass("btn-dark-buy")
}b.attr("href","javascript:Renxf.buyNowFreenessPay();")
}else{b.removeClass("btn-dark-buy");
var a="";
if(sn.prdType=="S"){a="javascript:gMain.buyNow();"
}else{a="javascript:Cart.buyNowTime();"
}b.html("<span>立即购买</span>").attr("href",a)
}$(".renxf-box .tzm-border").hide()
});
$(".renxf-btn .btn-fenqi").click(function(){if($(".renxf-list").find(".current").size()==0){$(".renxf-box .tzm-border").show();
return false
}})
};
iFourth.heyueji=function(a){$(".proinfo-hyj-rel dd li").click(function(){$(this).addClass("selected").siblings().removeClass("selected");
a(this);
iFourth.mainHeight()
});
$(".proinfo-hyj dd li").click(function(){var e=$(this),f=e.index(),c=$(".proinfo-hyj-rel"),g=$(".luoji-tip");
c.find("li.selected").removeClass("selected");
if(f==0){c.hide();
g.show();
a(this)
}else{g.hide();
c.show().find("dd ul").hide().eq(f-1).show().children("li:first").click()
}b();
iFourth.mainHeight()
});
function b(){var e=$(".proattr-result"),c=e.find("dd .result-text");
var f="";
$(".proattr-radio li.selected, .proattr-check li.selected").each(function(){f+='"'+$(this).attr("title")+'" '
});
$(".proinfo-bangke input:checked").each(function(){f+='"'+$(this).next("label").text()+'" '
});
c.text(f);
(f==""&&$("#phonedl li.selected").size()==0)&&e.hide()||e.show()
}};
iFourth.presell=function(){$(".presell-rule").unbind("click").click(function(a){$(this).find(".content").toggle(100);
a.stopPropagation()
});
$("body").unbind("click.presell").bind("click.presell",function(){$(".presell-rule .content").hide(100)
})
};
iFourth.hyjDialog={obj:"",callbackFun:function(b){var a=b.html;
obj.find(".content").html(a);
$(".m-dialog").css("top","20%")
},clickFun:function(){$("#phoneGoLook").click(function(){$.mDialog({css:{width:"692px"},http:function(a,b){obj=a;
$.ajax({url:sn.qkkUrl+"/fourPageLook/goLook.hs?phoneSku="+sn.ninePartNumber+"&provinceId="+sn.provinceCode+"&contractTypeCode="+sn.contractTypeCode+"&operatorId="+sn.operatorId+"&busiType=2&cityId="+sn.cityId,cache:false,dataType:"jsonp",jsonpCallback:"iFourth.hyjDialog.callbackFun",async:false,success:function(c){}})
},closeFn:function(){},title:"套餐变更",overlayClick:true,fadeIn:300,fadeOut:500})
})
}};
iFourth.bindShareList=function(){$(".share").click(function(a){if(a.stopPropagation){a.stopPropagation()
}else{window.event.cancelBubble=true
}$(this).find(".share-list").toggle();
$(this).toggleClass("ex-share")
});
$(document).click(function(){$(".share").removeClass("ex-share");
$(".share").find(".share-list").hide()
})
};
iFourth.bindZenPin=function(){var a=$(".proinfo-promo .zp-b-img");
$(".zengpin .zp-item .s-img").mouseenter(function(){var f=$(".proinfo-promo").offset();
var e=$(this).offset();
var c=e.top-f.top+40;
var b=e.left-f.left;
a.css({top:c,left:b});
a.show()
}).mouseout(function(){a.hide()
})
};
iFourth.bindPromo=function(){var a=$(".proinfo-promo .promo-list");
var b=a.find("li");
var e=$(".proinfo-promo .promo-closeup");
var f=$(".proinfo-promo .promo-show");
var g=$(".zengpin");
if(b.length>2){var c=b.eq(0).height()+b.eq(1).height();
a.css({overflow:"hidden",height:c});
g.hide();
e.show();
f.hide()
}else{e.hide();
f.hide()
}e.click(function(){e.toggle();
f.toggle();
a.css({height:"auto"});
g.show()
});
f.click(function(){e.toggle();
f.toggle();
a.css({height:c});
g.hide()
})
};
iFourth.bindRxf=function(){var a=$("#rx_charge_box");
$(".h-charge-info").mouseenter(function(){var c=$(this);
a.html(c.find(".rx-charge").html());
var b=a.width();
var f=c.position().top-35,e=c.position().left-b*0.5+c.width()*0.5-8;
a.css({top:f,left:e,width:b}).show()
}).mouseleave(function(){a.hide().removeAttr("style")
})
};
iFourth.bindColorEx=function(){$(".proinfo-color-ex .clr-item").click(function(){if($(this).hasClass("c-disabled")){return
}$(this).toggleClass("selected").siblings().removeClass("selected")
})
};
iFourth.bindQRCode=function(){var b=0;
var a=$(window).height();
$(".mainbtns").on("mouseenter",".qrcode-panel",function(){var e=$(this).offset().top,c=$(window).scrollTop();
var f=e-c+200;
b=f>a?1:0;
if(b){$(this).addClass("qrcode-panel-out").find(".qrc-wrapper").addClass(" extend-up").animate({height:"120","margin-top":"-120"},300)
}else{$(this).addClass("qrcode-panel-out").find(".qrc-wrapper").animate({height:"120"},300)
}}).on("mouseleave",".qrcode-panel",function(){var c=$(this);
if(b){$(this).find(".qrc-wrapper").animate({height:"0","margin-top":"0"},300,function(){c.removeClass("qrcode-panel-out").find(".qrc-wrapper").removeClass("extend-up")
})
}else{$(this).find(".qrc-wrapper").animate({height:"0"},300,function(){c.removeClass("qrcode-panel-out")
})
}})
};
iFourth.scrollToNav=function(){$(window).on("load",function(){window.setTimeout(function(){var a=$(".ng-nav-bar-chanel").offset().top;
$(window).scrollTop(a)
},200)
})
};
iFourth.customerRec=(function(){var j,i,p,b,n,a,o=0,l,k;
function h(r){if($(this).hasClass("next-disabled")){return
}o+=k;
m(o)
}function g(r){if($(this).hasClass("prev-disabled")){return
}o-=k;
m(o)
}function m(r){c();
i.find("ul").stop().animate({marginTop:-o*160+"px"},300)
}function c(){o+k<l?n.removeClass("next-disabled"):n.addClass("next-disabled");
o>0?a.removeClass("prev-disabled"):a.addClass("prev-disabled")
}function q(){b=$(".customer-rec-ctrl");
n=b.find(".btn-dir.next");
a=b.find(".btn-dir.prev");
b.on("click",".btn-dir.next",h).on("click",".btn-dir.prev",g);
e();
c()
}function f(){if(i.find("li").length<3){i.addClass("empty").find("ul").hide()
}else{i.removeClass("empty").find("ul").show()
}}function e(){i=$(".customer-rec-list");
b=$(".customer-rec-ctrl");
var s=$(".proinfo-main")[0].scrollHeight;
l=$(".customer-rec-list li").length;
var r=s<=76+160*4?3:s<=76+160*5?4:5;
if(l>r*2){l=r*2;
$(".customer-rec-list li").slice(l).remove()
}if(l<3||l<=r){b.hide()
}else{b.show()
}k=r;
f();
i[0].style.height=(160*k)+"px"
}return{init:q,resetHeight:e}
})();var CommonFourPage=CommonFourPage||{};
var Recommend=Recommend||{};
var sn_prd_reg=/^\w*?.suning.com$/;
var hostName=document.location.hostname;
var protocol=(("https:"==document.location.protocol)?"https://":"http://");
var server=getServer();
var paraCorrectInfo=paraCorrectInfo||{};
var fitInfo=[];
var fitSub=function(b,c,a){this.gType=b;
this.passPart=c;
this.subInfo=a
};
fitSub.prototype={gType:"",passPart:"",subInfo:null};
_tag="|";
function runAnalyseByClass(a){if(a==""){runAnalyseExpo()
}else{runAnalyseExpoCus(a)
}}var expoCusCount=0;
function runAnalyseExpoCus(a){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a",a)
}else{if(expoCusCount<10){setTimeout(function(){runAnalyseExpoCus(a)
},1000);
expoCusCount++
}}}var expoCount=0;
function runAnalyseExpo(){if(typeof _analyseExpoTags=="function"){_analyseExpoTags("a")
}else{if(expoCount<10){setTimeout(runAnalyseExpo,1000);
expoCount++
}}}function sendDatasIndex(g){var b=g.name;
var c=g.id;
var e=c+"|"+b;
var j=protocol+server+"/ajaxClick.gif";
var f=getOnlyIdIndex();
var h="_snck";
_addCookie4Index(h,f,"/","","");
var k=getCookieIndex("_snmp");
var i=f+_tag+k+_tag+e;
var a=j+"?_snmk="+i;
httpGifSendIndex(a)
}function getOnlyIdIndex(){var b=new Date();
var a=Math.round(100000*Math.random());
var c=b.getTime().toString().concat(a);
return c
}function getCookieIndex(b){var e=document.cookie.split("; ");
for(var c=0;
c<e.length;
c++){var a=e[c].split("=");
if(a[0]==b){return unescape(a[1])
}}}function httpGifSendIndex(c){var a=c;
var b=document.createElement("img");
b.src=a
}function getServer(){if(sn_prd_reg.test(hostName)){return"click.suning.cn/sa"
}else{return"clicksit.suning.cn/sa"
}}function _addCookie4Index(e,g,h,a,f){var i=e+"="+escape(g);
if(a!=""){var c=new Date();
c.setTime(c.getTime()+a);
i+=";expires="+c.toGMTString()
}if(h!=""){i+=";path="+h
}var b=hostName;
if(b.indexOf(".suning.com")!=-1){i+=";domain=.suning.com"
}else{if(b.indexOf(".cnsuning.com")!=-1){i+=";domain=.cnsuning.com"
}else{i+=";domain="+f
}}document.cookie=i
}function changeAttr(b){var a=new RegExp("-","g");
return b.indexOf("-")>0?b.replace(a,"%252D"):b
}function getRndArray(b){arr1=new Array();
len=b.length;
for(var a=0;
a<len;
a++){rnd=Math.floor(Math.random()*b.length);
arr1[a]=b[rnd];
b.splice(rnd,1)
}return arr1
}function aps_adboard_romancecpc(a){if(a!=null&&a.length>0){var b='<div class="area-head"><h3>云台推荐</h3></div><ul class="exprec">';
$.each(a,function(c,e){b+='<li><a target="_blank" href="'+e.apsClickUrl+'"><img src="'+e.adSrc+'" alt="'+e.title+'" class="image" /></a>';
b+='<p class="title"><a target="_blank" href="'+e.apsClickUrl+'" title="'+e.title+'">'+e.title+"</a></p>";
b+='<p class="price"><span><i>&yen;</i>'+parseFloat(cmdPrice).toFixed(2)+"</span></p></li>"
});
if(b!=""){$(".apsDIV").html(b).show()
}else{$(".apsDIV").html("").hide()
}}else{$(".apsDIV").html("").hide()
}}CommonFourPage.Recommend={getAPSInfo:function(){if(typeof lazyElems!="undefined"){apsAdboardObj.aps_adboard_loadAdCpc(sn.apsId,sn.categoryId,2,"");
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getAPSInfo()
},100)
}},getShopCategory:function(a,b){$.ajax({url:sn.shopPath+sn.shopMainPh+"/"+a+"/resources/query_category/"+b+".html",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
},getHotRank:function(a,b){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"&&typeof sn.promotionPrice!="undefined"){lazyElems.hotRank.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&catalogueId="+sn.categoryId+"&cityId="+sn.cityId+"&sceneIds=1-4&sceneIds=1-6&sceneIds=1-5&price="+sn.promotionPrice+"&count=10";
lazyElems.hotRank.enable=true;
lazyElems.hotRank.handle=b;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getHotRank(a,b)
},100)
}},getAlsoBuy:function(a,b){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){$("#view_Also_ViewProduct").remove();
$("#view_Also_BuyProduct").remove();
$("#buy_Also_BuyProduct").remove();
if(sn.catalogId=="22001"){lazyElems.buyAlsoBuy.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=1-7&sceneIds=10-2&count=5"
}else{lazyElems.buyAlsoBuy.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=1-1&sceneIds=1-2&count=5"
}lazyElems.buyAlsoBuy.enable=true;
lazyElems.buyAlsoBuy.handle=b;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getAlsoBuy(a,b)
},100)
}},historyRec:function(b,e){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){var c=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?";
if(SFE.base.d("logonStatus")!=null&&SFE.base.d("logonStatus")!=""){c+="&u="+SFE.base.d("custno")
}else{c+="&u="
}var a=SFE.base.d("_snma").split("|");
c+="&c="+(a.length>1?a[1]:"");
c+="&cityId="+sn.cityId+"&sceneIds=8-3&count=20";
lazyElems["J-historyRec"].url=c;
lazyElems["J-historyRec"].enable=true;
lazyElems["J-historyRec"].handle=e;
lazyElems["J-historyRec"].cache=false
}else{setTimeout(function(){CommonFourPage.Recommend.historyRec(b,e)
},100)
}},shopListItems:function(a,b){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=11-1&count=6&callback="+b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
},getOffSaleRecom:function(a,b){if(typeof sn.passPartNumber!="undefined"){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=10-1&count=8",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
}else{if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){lazyElems["J-slide1"].url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=10-1&count=8";
lazyElems["J-slide1"].enable=true;
lazyElems["J-slide1"].handle=b;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getOffSaleRecom(a,b)
},100)
}}},noPublishItems:function(a,b){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv3/scenesBiz.jsonp?parameter="+a+"&catalogueId="+sn.categoryId+"&cityId="+sn.cityId+"&sceneIds=11-2&sceneIds=10-1&count=10&callback="+b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
},getUniformHot:function(a){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){lazyElems.uniformHot.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+sn.thirdCategoryId+"&cityId="+sn.cityId+"&sceneIds=10-9&count=5";
lazyElems.uniformHot.enable=true;
lazyElems.uniformHot.handle=a;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getUniformHot(a)
},100)
}},getUniformNew:function(a,b){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){lazyElems.uniformNew.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=7-6&count=5";
lazyElems.uniformNew.enable=true;
lazyElems.uniformNew.handle=b;
iFourth.win.scroll()
}else{setTimeout(function(){CommonFourPage.Recommend.getUniformNew(a,b)
},100)
}},getShopRecom:function(a,b){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){$("#view_Also_BuyProduct").remove();
$("#buy_Also_BuyProduct").remove();
if($("#buyAlsoBuy").length>0){lazyElems.buyAlsoBuy.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=10-15&vendorId="+sn.vendorCode+"&count=6";
lazyElems.buyAlsoBuy.enable=true;
lazyElems.buyAlsoBuy.handle=b;
iFourth.win.scroll()
}}else{setTimeout(function(){CommonFourPage.Recommend.getShopRecom(a,b)
},100)
}},getShopViewAlsoView:function(a,b){if(typeof sn.cityId!="undefined"){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=10-14&vendorId="+sn.vendorCode+"&count=10&callback="+b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
}else{setTimeout(function(){CommonFourPage.Recommend.getShopViewAlsoView(a,b)
},100)
}},getShopRightRec:function(a,b){if(typeof sn.cityId!="undefined"&&sn.isPreBuy!=1){$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+a+"&priceSpread="+sn.promotionPrice+"&vendorId="+sn.vendorCode+"&cityId="+sn.cityId+"&sceneIds=6-27&count=10&callback="+b,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:b,success:function(c){}})
}else{setTimeout(function(){CommonFourPage.Recommend.getShopRightRec(a,b)
},100)
}},getShopHotSale:function(a,b){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){if($("#shopHot").length>0){lazyElems.shopHot.url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?parameter="+a+"&cityId="+sn.cityId+"&sceneIds=10-13&vendorId="+sn.vendorCode+"&count=5";
lazyElems.shopHot.enable=true;
lazyElems.shopHot.handle=b;
iFourth.win.scroll()
}}else{setTimeout(function(){CommonFourPage.Recommend.getShopHotSale(a,b)
},100)
}},getShopFavorite:function(a){if(typeof lazyElems!="undefined"&&typeof sn.cityId!="undefined"){if($("#shopCollection").length>0){lazyElems.shopCollection.url=sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?vendorId="+sn.vendorCode+"&cityId="+sn.cityId+"&sceneIds=6-25&count=5";
lazyElems.shopCollection.enable=true;
lazyElems.shopCollection.handle=a;
iFourth.win.scroll()
}}else{setTimeout(function(){CommonFourPage.Recommend.getShopFavorite(a)
},100)
}},getPromotionContent:function(a,b){if(typeof b=="undefined"){b=""
}if(a=="1"){return b+'<span class="label">大聚惠</span>'
}else{if(a=="2"){return b+'<span class="label">抢购</span>'
}else{if(a=="3"){return b+'<span class="label">团购</span>'
}else{if(a=="4"){return b+'<span class="label">闪购</span>'
}else{if(a=="8"){return b+'<span class="label">促</span>'
}}}}}return""
}};
CommonFourPage.Cart={itemLimit:function(c,e){var a=sn.vendorCode;
if(a.length==10&&a.substring(0,3)=="003"){a=""
}var b="http://"+sn.domain+sn.context+"/snpls_10052_"+sn.catalogId+"_"+c+"_"+a+"_"+sn.cityId+"_"+e+"_.html";
$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:e,success:function(f){}})
},getSunShine:function(c,f){if(typeof sn.yanbaoSet=="undefined"||sn.yanbaoSet==null||sn.yanbaoSet==""||sn.yanbaoSet.length<=0){return
}var a={};
var e=sn.yanbaoSet;
a.warrProductLst=e;
for(var b=0;
b<a.warrProductLst.length;
b++){a.warrProductLst[b].extendPrice=a.warrProductLst[b].warrantyPrice;
a.warrProductLst[b].warrPartnumber=a.warrProductLst[b].goodsCode;
a.warrProductLst[b].warrType=a.warrProductLst[b].goodsType;
a.warrProductLst[b].warrYearLimit=a.warrProductLst[b].timeLimit
}f(a)
}};
function getItemSaleStatus(f,g){sn.yanbaoSet="";
sn.priceLoad=false;
var a=sn.vendorCode;
if(sn.vendorCode=="-1"){a=""
}else{if(sn.shopType=="0"){a="0000000000"
}}var c="";
var e=sn.icpsFlag;
if(typeof e!="undefined"&&e!=""&&e=="1"){c="http://"+sn.domain+"/webapp/wcs/stores/ItemPrice/"+f+"_"+a+"_"+sn.cityId+"_"+sn.districtId+"_1.html"
}else{var b=sn.lesCityId+sn.lesDistrictId+"01";
c=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+f+"_"+a+"_"+sn.lesCityId+"_"+b+"_1_pc_showSaleStatus.vhtm"
}$.ajax({url:c,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:g,success:function(){}})
}function getPassItemStatus(f,g){sn.priceLoad=false;
var a=sn.shopType=="0"?"0000000000":sn.vendorCode;
var e="";
var c=sn.icpsFlag;
if(typeof c!="undefined"&&c!=""&&c=="1"){e="http://"+sn.domain+"/webapp/wcs/stores/GeneralPrice/"+f+"_"+a+"_"+sn.cityId+"_"+sn.districtId+"_1.html"
}else{var b=sn.lesCityId+sn.lesDistrictId+"01";
e=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+f+"_"+a+"_"+sn.lesCityId+"_"+b+"_1_pc_showSaleStatus.vhtm"
}$.ajax({url:e,cache:true,async:false,dataType:"jsonp",jsonpCallback:g,success:function(){}})
}function getMobileItemSaleStatus(f,h,g){var a=sn.vendorCode;
if(sn.vendorCode=="-1"){a=""
}else{if(sn.shopType=="0"){a="0000000000"
}}var c="";
var e=sn.icpsFlag;
if(typeof e!="undefined"&&e!=""&&e=="1"){c="http://"+sn.domain+"/webapp/wcs/stores/ItemPrice/"+f+"_"+a+"_"+sn.cityId+"_"+sn.districtId+"_2.html"
}else{var b=sn.lesCityId+sn.lesDistrictId+"01";
c=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+f+"_"+a+"_"+sn.lesCityId+"_"+b+"_2_pc_showSaleStatus.vhtm"
}$.ajax({url:c,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:h,success:function(){},error:function(){g()
}})
}function getMobilePassItemStatus(f,h,g){var a=sn.shopType=="0"?"0000000000":sn.vendorCode;
var e="";
var c=sn.icpsFlag;
if(typeof c!="undefined"&&c!=""&&c=="1"){e="http://"+sn.domain+"/webapp/wcs/stores/GeneralPrice/"+f+"_"+a+"_"+sn.cityId+"_"+sn.districtId+"_2.html"
}else{var b=sn.lesCityId+sn.lesDistrictId+"01";
e=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+f+"_"+a+"_"+sn.lesCityId+"_"+b+"_2_pc_showSaleStatus.vhtm"
}$.ajax({url:e,cache:true,async:false,dataType:"jsonp",jsonpCallback:h,success:function(){},error:function(){g()
}})
}function getSubscribeActionFlag(c,f,e){if(sn.reserveSwitch=="0"){var a=sn.vendorCode;
if(a!=undefined&&a.length==10&&a.substring(0,3)=="003"){a=""
}var b=sn.itemDomain+"/pds-web/ajax/scrice_"+c+"_"+a+".html";
$.ajax({url:b,type:"get",cache:true,dataType:"json",success:function(g){f(g)
},error:function(){e()
}})
}else{var a=sn.vendorCode;
if(a==""||(a!=undefined&&a.length==10&&a.substring(0,3)=="003")){a="0000000000"
}var b=sn.yushouDomain+"/jsonp/checkActionIsAppointOrBookForJsonp-"+c+"-"+a+"-scricedata.htm";
$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonpCallback:"scricedata",success:function(g){f(g)
},error:function(){e()
}})
}}sn.pssPrceFlag=true;
sn.isLoadPricePrice=false;
sn.waitPriceTime=10;
function getPSSPrice(c){sn.isLoadPricePrice=false;
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var b=sn.yushouDomain+"/jsonp/appoint/getGoodsPrice-"+c+"-"+a+"-"+preBuy.actionID+"-prcessPSSPrice.htm";
$.ajax({url:b,type:"get",async:false,cache:true,dataType:"jsonp",jsonpCallback:"prcessPSSPrice",success:function(){},error:function(){}})
}function prcessPSSPrice(b){if(b!=null){preBuy.type=1;
preBuy.priceType=2;
preBuy.isEffect=true;
if(b.priceType=="7-1"){preBuy.priceType=1
}if(preBuy.purchaseType.indexOf("P03")>=0){preBuy.type=2
}if(b.invStatus=="5"){preBuy.type=3
}if(b.invStatus=="6"){preBuy.isEffect=false
}preBuy.price=b.promotionPrice;
$(".proinfo-focus").eq(0).show();
$(".proinfo-focus").eq(1).hide();
$(".price-promo span.w3").html("预约价");
if(preBuy.priceType==2){$(".price-promo .mainprice").eq(0).html("<i>&yen;</i>"+parseInt(preBuy.price)+".<span>"+((preBuy.price+"").split(".")[1])+"</span>");
$(".price-promo .mainprice").next().html("预约").show();
sn.promotionPrice=preBuy.price;
sn.netPrice=sn.promotionPrice;
sn.priceType="0";
$("#shop"+sn.vendorCode+" .price").eq(0).siblings("i").remove();
$("#shop"+sn.vendorCode+" .price").eq(0).html("<i>¥</i><em>"+sn.promotionPrice+"</em>")
}else{if(preBuy.priceType==1&&preBuy.price!="暂无报价"){$(".price-promo .mainprice").eq(0).html("<i>&yen;</i>"+preBuy.price);
$(".price-promo .mainprice").next().html("预约").show();
$(".price-promo").show();
$("#allcuxiao").hide();
sn.promotionPrice=preBuy.price;
sn.netPrice=preBuy.price;
sn.priceType="0";
$("#shop"+sn.vendorCode+" .price").eq(0).siblings("i").remove();
$("#shop"+sn.vendorCode+" .price").eq(0).html("<i>¥</i><em>"+preBuy.price+"</em>")
}else{$(".proinfo-focus").eq(0).hide();
$(".proinfo-focus").eq(1).show();
$("#allcuxiao").hide();
preBuy.price="";
sn.promotionPrice="";
sn.netPrice="";
$("#shop"+sn.vendorCode+" .price").eq(0).siblings("i").remove();
$("#shop"+sn.vendorCode+" .price").eq(0).html("<i>¥</i><em></em>")
}}sn.proPriceBoxHtml=$("#proPriceBox").html()
}if(sn.promotionPrice==""){if(sn.prdType=="S"){$("#invInfo").html("暂不销售");
$("#noInven").html("建议您选购其它商品");
$("#shipInfo").html("").hide()
}else{$("#c_kucun").html("暂不销售");
$("#nowProduct").html("建议您选购其它商品")
}}if(sn.pssPrceFlag&&sn.prdType!="S"){sn.pssPrceFlag=false;
getItemSubscribeAction(sn.partNumber,YuShou.initPreBuy,initProductSale)
}else{if(sn.pssPrceFlag&&sn.prdType=="S"){sn.pssPrceFlag=false;
var a=null;
$.each(generalSub.saleInfo,function(e,c){if(c.partNumber==sn.curSubPartNumber){a=c
}});
if(a==null){a=a||{accountPlace:"",deptNo:"",factorySendFlag:"",invStatus:"",juId:"",manageInvFlag:"",netPrice:preBuy.price,ownerPlace:"",partNumber:sn.curSubPartNumber,priceType:"0",promotionPrice:preBuy.price,refPrice:"",salesOrg:"",sendAvalidTime:"",sendCityId:"",vendor:"",vendorCode:"",vendorType:""};
generalSub.saleInfo.push(a)
}else{a.promotionPrice=preBuy.price;
a.netPrice=preBuy.prce
}gMain.processSubSaleInfo();
if(sn.promotionPrice==""){$("#allcuxiao").hide()
}}}if(preBuy.priceType!=2&&(sn.vendorCode==""||sn.swlShopFlag)){if($(".ziti").parent().is(":visible")){$(".ziti").html('<i class="icon"></i>自提')
}$(".proinfo-serv .mian").hide();
$("#fare"+sn.vendorCode).hide()
}sn.isLoadPricePrice=true;
if(sn.prdType!="S"){FourPage.shareWb()
}else{gMain.shareWb()
}}var bookFirstFlag=false;
var bookInfo=bookInfo||{status:0,bookActionId:"",bookType:"","adapteTerminal;":"",noInventoryFlag:"",doubleIndemnityFlag:"",fullPaymentFlag:"",actionStartTime:"",actionEndTime:"",curTime:"",depositStartTime:"",depositEndTime:"",balanceStartTime:"",balanceEndTime:"",sendTime:"",vendorMobileNumber:"",parentPartNumber:"",totalGoodsNum:"",personBuyLimit:"",bookPrice:"",depositAmount:"",segmentType:"",realBookedCount:"",virtualBookedCount:"",bookRemain:"",cityStr:"",saleStatus:false};
var bookCountTime=0;
function processBookInfo(a){sn.bookData=a;
if(a!=null){bookInfo.bookActionId=a.bookActionId;
bookInfo.bookType=a.bookType;
bookInfo.adapteTerminal=a.adapteTerminal;
bookInfo.noInventoryFlag=a.noInventoryFlag;
bookInfo.doubleIndemnityFlag=a.doubleIndemnityFlag;
bookInfo.fullPaymentFlag=a.fullPaymentFlag;
bookInfo.actionStartTime=a.actionStartTime/1000;
bookInfo.actionEndTime=a.actionEndTime/1000;
bookInfo.curTime=a.curTime/1000;
bookInfo.depositStartTime=a.depositStartTime/1000;
bookInfo.depositEndTime=a.depositEndTime/1000;
bookInfo.balanceStartTime=a.balanceStartTime/1000;
bookInfo.balanceEndTime=a.balanceEndTime/1000;
bookInfo.sendTime=a.sendTime;
bookInfo.vendorMobileNumber=a.vendorMobileNumber;
bookInfo.parentPartNumber=a.parentPartNumber;
bookInfo.totalGoodsNum=a.totalGoodsNum;
bookInfo.personBuyLimit=a.personBuyLimit;
bookInfo.segmentType=a.segmentType;
bookInfo.realBookedCount=a.realBookedCount;
bookInfo.virtualBookedCount=a.virtualBookedCount;
bookInfo.bookRemain=a.bookRemain;
bookInfo.cityStr=a.cityStr;
bookInfo.flag=true;
if(sn.invStatus=="6"){bookInfo.flag=false
}else{bookInfo.flag=false;
if(typeof bookInfo.cityStr!="undefined"&&bookInfo.cityStr!=""){$.each(bookInfo.cityStr.split(","),function(b,c){if(sn.lesCityId==c){bookInfo.flag=true
}})
}else{bookInfo.flag=true
}}if(sn.prdType!="S"){sn.netPrice=sn.priceInvData.netPrice
}else{sn.netPrice=typeof sn.netPrice!="undefined"?sn.netPrice:""
}if(sn.netPrice==""){bookInfo.bookRemain="3"
}if(bookInfo.flag&&bookInfo.bookRemain!="3"){$("#preTime").show();
if(bookInfo.curTime<bookInfo.depositStartTime){bookInfo.status=1;
$("#preTime dt").html("预订开始");
$(".presell-process li").removeClass("current");
bookCountTime=parseInt(bookInfo.depositStartTime)-parseInt(bookInfo.curTime)
}else{if(bookInfo.curTime>=bookInfo.depositStartTime&&bookInfo.curTime<=bookInfo.depositEndTime){bookInfo.status=2;
$("#preTime dt").html("付定金结束");
$(".presell-process li").removeClass("current");
$(".step-1").addClass("current");
bookCountTime=parseInt(bookInfo.depositEndTime)-parseInt(bookInfo.curTime)
}else{if(bookInfo.curTime>bookInfo.depositEndTime&&bookInfo.curTime<bookInfo.balanceStartTime){if(bookInfo.bookType=="11"){$(".presell-process li").removeClass("current");
bookInfo.status=6;
bookCountTime=0
}else{bookInfo.status=3;
$("#preTime dt").html("付尾款开始 ");
$(".presell-process li").removeClass("current");
$(".step-2").addClass("current");
bookCountTime=parseInt(bookInfo.balanceStartTime)-parseInt(bookInfo.curTime)
}}else{if(bookInfo.curTime>=bookInfo.balanceStartTime&&bookInfo.curTime<=bookInfo.balanceEndTime){if(bookInfo.bookType=="11"){$(".presell-process li").removeClass("current");
bookInfo.status=6;
bookCountTime=0
}else{bookInfo.status=4;
$("#preTime dt").html("付尾款结束");
$(".presell-process li").removeClass("current");
$(".step-3").addClass("current");
bookCountTime=parseInt(bookInfo.balanceEndTime)-parseInt(bookInfo.curTime)
}}else{$("#preTime dt").html("距离结束");
$(".presell-process li").removeClass("current");
$(".step-4").addClass("current");
bookInfo.status=5;
bookCountTime=0
}}}}}processBookPrice();
processCart();
fillBookProcedure();
if(bookInfo.flag&&bookInfo.bookRemain!="3"){bookCount(bookCountTime)
}if(sn.prdType!="S"){initProductSale()
}iFourth.presell();
iFourth.mainHeight()
}else{if(sn.prdType!="S"){initProductSale()
}}if(sn.prdType!="S"){FourPage.shareWb()
}else{gMain.shareWb()
}}function psellAlterInfo(a){$("#psellBookMessage").html(a);
$.mDialog({title:"支付失败",message:$("#win_presell"),css:{width:"480px"},overlayClick:true})
}function resetBookCss(){if(sn.groupFlag){return
}processBookPrice();
processCart();
processOthers()
}function bookCount(a){$(".duration-time").val(a);
iFourth.countdown(function(b){if(b==0){if(bookInfo.status==1){bookInfo.status=2;
$("#preTime dt").html("付定金结束");
$(".presell-process li").removeClass("current");
$(".step-1").addClass("current");
remain=parseInt(bookInfo.depositEndTime)-parseInt(bookInfo.depositStartTime)
}else{if(bookInfo.status==2){if(bookInfo.bookType=="11"){bookInfo.status=6;
$(".presell-process li").removeClass("current");
remain=0
}else{bookInfo.status=3;
$(".presell-process li").removeClass("current");
$(".step-2").addClass("current");
$("#preTime dt").html("付尾款开始 ");
remain=parseInt(bookInfo.balanceStartTime)-parseInt(bookInfo.depositEndTime)
}}else{if(bookInfo.status==3){if(bookInfo.bookType=="11"){bookInfo.status=6;
$(".presell-process li").removeClass("current");
remain=0
}else{bookInfo.status=4;
$(".presell-process li").removeClass("current");
$(".step-3").addClass("current");
$("#preTime dt").html("付尾款结束");
remain=parseInt(bookInfo.balanceEndTime)-parseInt(bookInfo.balanceStartTime)
}}else{if(bookInfo.status==4){bookInfo.status=5;
$(".presell-process li").removeClass("current");
$(".step-4").addClass("current");
$("#preTime dt").html("距离结束 ");
remain=0
}}}}$("#preTime").show();
processBookPrice();
processCart()
}})
}function processBookPrice(){sn.promotionPrice=bookInfo.bookPrice;
$("#PriceNotice1").hide();
$("#c_yunfei").hide();
$("#yunfei").hide();
$("#shop"+sn.vendorCode+" .price em").html(sn.promotionPrice);
if((sn.netPrice==""&&bookInfo.bookPrice=="")||(bookInfo.bookPrice=="")){$(".proinfo-focus").eq(0).hide();
$(".proinfo-focus").eq(1).show();
$("#cart2Price").html("");
$("#miniPrice").html("");
if(bookInfo.status==4||(bookInfo.bookType=="11"&&bookInfo.status==2)){$("#c_kucun").html("暂不销售").show();
$("#nowProduct").addClass("red").html("建议您选购其它商品").show();
$("#invInfo").html("暂不销售").show();
$("#noInven").addClass("red").html("建议您选购其它商品").show();
$(".proinfo-deliver-time").show()
}else{$("#c_kucun").hide();
$("#nowProduct").hide();
$("#invInfo").hide();
$("#shipInfo").hide();
$("#noInven").hide();
$(".proinfo-deliver-time").hide()
}}else{if(sn.netPrice==""){$(".price-sn").hide();
$(".price-promo dt span.w3").html("预售价");
$(".mainprice").eq(0).html("<i>&yen;</i>"+parseInt(bookInfo.bookPrice)+".<span>"+((bookInfo.bookPrice+"").split(".")[1])+"</span>");
$(".mainprice").next().hide();
$(".mainprice").siblings("a.link").hide();
$(".price-promo").show();
$("#bookPrice em").html(parseFloat(bookInfo.depositAmount).toFixed(2));
$("#bookPrice").show();
$("#bookRule").show();
$(".proinfo-focus").eq(0).show();
$(".proinfo-focus").eq(1).hide();
$("#cart2Price").html(bookInfo.bookPrice);
$("#miniPrice").html(bookInfo.bookPrice);
yudingStatus();
if(bookInfo.status==4||(bookInfo.bookType=="11"&&bookInfo.status==2)){$("#c_kucun").html("无货").show();
$("#nowProduct").removeClass("red").html("本商品在该城市暂无货").show();
$("#invInfo").html("无货").show();
$("#shipInfo").removeClass("red").html("本商品在该城市暂无货").show();
$("#noInven").hide();
$(".proinfo-deliver-time").show()
}else{$("#c_kucun").hide();
$("#nowProduct").hide();
$("#invInfo").hide();
$("#shipInfo").hide();
$("#noInven").hide();
$(".proinfo-deliver-time").hide()
}}else{if(parseFloat(bookInfo.bookPrice)<parseFloat(sn.netPrice)){$(".price-sn dd").html("<del><i>&yen;</i> "+sn.netPrice+"</del>");
$(".price-sn").show()
}else{$(".price-sn").hide()
}$(".price-promo dt span.w3").html("预售价");
$(".mainprice").eq(0).html("<i>&yen;</i>"+parseInt(bookInfo.bookPrice)+".<span>"+((bookInfo.bookPrice+"").split(".")[1])+"</span>");
$(".mainprice").next().hide();
$(".price-promo").show();
$(".mainprice").siblings("a.link").hide();
$("#bookPrice em").html(parseFloat(bookInfo.depositAmount).toFixed(2));
$("#bookPrice").show();
$("#bookRule").show();
$(".proinfo-focus").eq(0).show();
$(".proinfo-focus").eq(1).hide();
$("#cart2Price").html(bookInfo.bookPrice);
$("#miniPrice").html(bookInfo.bookPrice);
yudingStatus();
if(bookInfo.status==4||(bookInfo.bookType=="11"&&bookInfo.status==2)){var a,b="";
if(((sn.invStatus!="1"&&sn.invStatus!="4")&&sn.vendorCode=="")||(sn.vendorCode!=""&&sn.invStatus!="1")){a="无货";
b="本商品在该城市暂无货";
bookInfo.saleStatus=false
}else{if(sn.vendorCode==""&&(typeof sn.shipOffSet=="undefined"||sn.shipOffSet=="-1")){a="暂不销售";
b="很抱歉，本商品在此地暂不支持配送";
bookInfo.saleStatus=false
}else{a="现货";
b="";
bookInfo.saleStatus=true
}}if(bookInfo.saleStatus){$("#c_kucun").html(a).show();
$("#nowProduct").removeClass("red").html(b).show();
$("#invInfo").html(a).show();
$("#shipInfo").removeClass("red").html(b).show();
$("#noInven").hide();
$(".proinfo-deliver-time").show()
}else{$("#c_kucun").html(a).show();
$("#nowProduct").addClass("red").html(b).show();
$("#invInfo").html(a).show();
$("#noInven").addClass("red").html(b).show();
$("#shipInfo").hide();
$(".proinfo-deliver-time").show()
}}else{$("#c_kucun").hide();
$("#nowProduct").hide();
$("#invInfo").hide();
$("#shipInfo").hide();
$("#noInven").hide();
$(".proinfo-deliver-time").hide()
}}}}function yudingStatus(){if(bookInfo.bookType=="10"){$(".price-promo dt span.w3").html("预订价");
if($("#yudingTips").length==0){$("#bookPrice").before('<span id="yudingTips" class="label">预订</span>')
}else{$("#yudingTips").html("预订")
}$("#yudingTips").show()
}else{if(bookInfo.bookType=="11"){$(".price-promo dt span.w3").html("团购价");
if($("#yudingTips").length==0){$("#bookPrice").before('<span id="yudingTips" class="label">定金团</span>')
}else{$("#yudingTips").html("定金团")
}$("#yudingTips").show()
}}}function processCart(){var a=parseInt(bookInfo.realBookedCount)+parseInt(bookInfo.virtualBookedCount);
var c="javascript:toDepositCart();";
var b="javascript:toBalanceCart();";
$("#tellMe").hide();
if(bookInfo.personBuyLimit!="0"&&bookInfo.personBuyLimit!=""&&typeof bookInfo.personBuyLimit!="undefined"){if(sn.prdType=="S"){$("#limitSale").html("每人限购<em>"+bookInfo.personBuyLimit+"</em>件");
$("#limitSale").show();
$("#limit").attr("max",bookInfo.personBuyLimit);
$(".proinfo-num").show()
}else{$("#productLimit").html("每人限购<em>"+bookInfo.personBuyLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",bookInfo.personBuyLimit);
$("#buycount").show()
}iFourth.buyNum()
}$("#buyNowAddCart").hide();
if(bookInfo.flag&&bookInfo.bookRemain!="3"){$("#preTime").show()
}if(sn.prdType=="S"){if(!bookInfo.flag){$("#invInfo").html("暂不销售").hide();
$("#noInven").addClass("red").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不参加预订").show();
$("#shipInfo").hide();
$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-payfirst-disable"><span>支付定金</span></a>'+ewmhtml);
$("#inerestBox").show();
$("#miniCart").removeClass().addClass("btn-payfirst-mini-disable");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#preTime").hide();
$(".proinfo-deliver-time").show();
$("#yushouCount1").hide()
}else{if(sn.invStatus=="7"||bookInfo.bookRemain=="3"){$("#invInfo").html("暂不销售").hide();
$("#noInven").addClass("red").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不支持预订").show();
$("#shipInfo").hide();
$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-payfirst-disable"><span>支付定金</span></a>'+ewmhtml);
$("#inerestBox").show();
$("#miniCart").removeClass().addClass("btn-payfirst-mini-disable");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#preTime").hide();
$(".proinfo-deliver-time").show();
$("#yushouCount1").hide()
}else{if(bookInfo.status==1){$(".mainbtns").html('<a id="addCart" tooltip="活动时间未到，请耐心等待"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-presell-wait"><span>等待预订</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-presell-mini-wait");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}else{if(bookInfo.status==2){if(bookInfo.bookType!="11"||bookInfo.saleStatus){if(parseInt(bookInfo.bookRemain)==1){$(".mainbtns").html('<a id="addCart" tooltip="稍等一小会儿，还有机会哦"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-presell-chance"><span>支付定金</span></a>'+ewmhtml);
$("#miniCart").removeClass().addClass("btn-presell-mini-chance");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}else{if(parseInt(bookInfo.bookRemain)==0){$(".mainbtns").html('<a id="addCart" tooltip="商品已被预订完了，下次早一点哦"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-presell-none"><span>支付定金</span></a>'+ewmhtml);
$("#miniCart").removeClass().addClass("btn-presell-mini-none");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}else{$(".mainbtns").html('<a id="addCart" name="item_'+sn.partNumber.substring(9,18)+'_gmq_zfdj" href="'+c+'" class="btn-payfirst"><span>支付定金</span></a>'+ewmhtml);
$("#miniCart").removeClass().addClass("btn-payfirst-mini");
$("#miniCart").attr("href",c).removeAttr("target","_blank")
}}}else{$(".mainbtns").html('<a id="addCart" name="item_'+sn.partNumber.substring(9,18)+'_gmq_zfdj" href="javascript:void(0);" class="btn-payfirst-disable"><span>支付定金</span></a>'+ewmhtml);
$("#miniCart").removeClass().addClass("btn-payfirst-mini-disable");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==3){$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-paylast-wait"><span>等待付尾款</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-paylast-mini-wait");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==4){if(bookInfo.saleStatus){$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_zfwk" href="'+b+'" class="btn-paylast"><span>支付尾款</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
if(typeof sn.shipOffSetText!="undefined"){$("#shipInfo").html(sn.shipOffSetText).show()
}$("#miniCart").removeClass().addClass("btn-paylast-mini");
$("#miniCart").attr("href",b).removeAttr("target","_blank")
}else{$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-paylast-disable"><span>支付尾款</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-paylast-mini-disable");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==6){$("#preTime").hide();
$(".mainbtns").html('<a id="addCart" name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-presell-none"><span>已订完</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-presell-mini-none");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">查看更多预售商品</a></span>')
}else{$("#preTime").hide();
$(".mainbtns").html('<a id="addCart" name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-presell-over"><span>活动已结束</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-presell-mini-over");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">查看更多预售商品</a></span>')
}}}}}}}}else{if(!bookInfo.flag){$("#c_kucun").hide();
$("#nowProduct").addClass("red").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不参加预订").show();
$("#shipInfo").hide();
$("#addCart").removeClass().addClass("btn-payfirst-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-payfirst-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#preTime").hide();
$(".proinfo-deliver-time").show();
$("#yushouCount1").hide()
}else{if(sn.invStatus=="7"||bookInfo.bookRemain=="3"){$("#c_kucun").hide();
$("#nowProduct").addClass("red").html("&nbsp;&nbsp;很抱歉，本商品在此地暂不支持预订").show();
$("#shipInfo").hide();
$("#addCart").removeClass().addClass("btn-payfirst-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-payfirst-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#preTime").hide();
$(".proinfo-deliver-time").show();
$("#yushouCount1").hide()
}else{if(bookInfo.status==1){$("#addCart").removeClass().addClass("btn-presell-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","活动时间未到，请耐心等待");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-presell-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount1").hide()
}else{if(bookInfo.status==2){if(bookInfo.bookType!="11"||bookInfo.saleStatus){if(parseInt(bookInfo.bookRemain)==1){$("#addCart").removeClass().addClass("btn-presell-chance");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","稍等一小会儿，还有机会哦");
$("#addCart2").removeClass().addClass("btn-presell-mini-chance");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(parseInt(bookInfo.bookRemain)==0){$("#addCart").removeClass().addClass("btn-presell-none");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").attr("tooltip","商品已被预订完了，下次早一点哦");
$("#addCart2").removeClass().addClass("btn-presell-mini-none");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{$("#addCart").removeClass().addClass("btn-payfirst");
$("#addCart").attr("href",c).removeAttr("target","_blank").removeAttr("tooltip");
$("#addCart2").removeClass().addClass("btn-payfirst-mini");
$("#addCart2").attr("href",c).removeAttr("target","_blank")
}}}else{$("#addCart").removeClass().addClass("btn-payfirst-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-payfirst-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==3){$("#addCart").removeClass().addClass("btn-paylast-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-paylast-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount1").hide();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==4){if(bookInfo.saleStatus){$("#addCart").removeClass().addClass("btn-paylast");
$("#addCart").attr("href",b).removeAttr("tooltip").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-paylast-mini");
$("#addCart2").attr("href",b).removeAttr("target","_blank");
if(typeof sn.shipOffSetText!="undefined"){$("#nowProduct").html(sn.shipOffSetText).show()
}$("#yushouCount1").hide()
}else{$("#addCart").removeClass().addClass("btn-paylast-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("tooltip").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-paylast-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#yushouCount1").hide()
}if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns #yushouCount1").remove();
$("#qrCode").before('<div id="yushouCount1" class="total" style=""><span>已成功预订</span><strong>'+a+"</strong><span>件</span></div>")
}else{if(bookInfo.status==6){$("#preTime").hide();
$("#addCart").removeClass().addClass("btn-presell-none");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-presell-mini-none");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount1").hide();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">查看更多预售商品</a></span>')
}else{$("#preTime").hide();
$("#addCart").removeClass().addClass("btn-presell-over");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target").removeAttr("tooltip");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-presell-mini-over");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount1").hide();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">查看更多预售商品</a></span>')
}}}}}}}}iFourth.buyNum();
iFourth.servLabel()
}function fillBookProcedure(){var a=$("#depositTime");
var e=$("#balanceTime");
c(a,bookInfo.depositStartTime*1000,bookInfo.depositEndTime*1000);
c(e,bookInfo.balanceStartTime*1000,bookInfo.balanceEndTime*1000);
var f=new Date(parseInt(bookInfo.sendTime));
var b="预计"+(f.getMonth()+1)+"月"+f.getDate()+"日发货";
$("#sendTime dd").eq(0).html(b);
$("#bookProcedure").show();
function c(j,g,h){var i=new Date(parseInt(g));
start="开始："+(i.getMonth()+1)+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒";
i=new Date(parseInt(h));
end="结束："+(i.getMonth()+1)+"月"+i.getDate()+"日"+i.getHours()+"时"+i.getMinutes()+"分"+i.getSeconds()+"秒";
j.find("dd").eq(0).html(start);
j.find("dd").eq(1).html(end)
}}function processOthers(){$(".ziti").parent().hide();
$(".returnOrChange").hide();
$(".rc3").show();
$("#returnCate").html('<a class="tui-disable no-link"><i class="icon"></i>不支持无理由退换货</a>');
$("#returnCate").attr("title","不支持无理由退换货");
$("#returnCate").show();
if(sn.prdType=="S"){$("#mianYF a").attr("title","");
$("#mianYF a").html('<i class="icon"></i>免运费');
$("#mianYF").show()
}else{$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().removeAttr("title");
$("#mianyunfei").show()
}$("#fare"+sn.vendorCode).html("<span>免运费</span>").show();
if(sn.prdType!="S"){CommonFourPage.Cart.getSunShine(sn.partNumber,Cart.sunShine)
}}function processErrorBookInfo(){if(sn.prdType!="S"){initProductSale()
}}function toDepositCart(){var b=sn.prdType!="S"?sn.partNumber:sn.curSubPartNumber;
var a=$(".proinfo-num input").val();
$("body").AjaxLogin({success:function(){if(sn.bookActionAddcartFlag=="0"){window.location.href=sn.yushouDomain+"/book/gotoBookOrderInfo.do?partNumber="+b+"&bookGoodsId="+sn.bookGoodsId+"&buyNum="+a
}else{buyNowFourPage(a,b,"15",preBuy.actionID,"","","","",function(){})
}},error:function(){}})
}function toBalanceCart(){var b=sn.prdType!="S"?sn.partNumber:sn.curSubPartNumber;
var c=sn.vendorCode==""?"0000000000":sn.vendorCode;
var a=sn.yushouDomain+"/book/outerIntf/validatePayBalanceByJsonp-"+preBuy.actionID+"-"+b+"-"+c+"-inits.do";
$("body").AjaxLogin({success:function(){$.ajax({url:a,cache:false,dataType:"jsonp",jsonpCallback:"inits",success:function(f){var e="";
if(f.resultFlag){if(f.resultCode=="100-01-00"){window.location.href="http://"+sn.memberDomain+"/emall/MyOrdersView?catalogId=10051&storeId=10052"
}else{if(f.resultCode=="100-01-01"){e="很抱歉，还未到支付尾款时间,请耐心等待哦！"
}else{if(f.resultCode=="100-01-02"){e="很抱歉，尾款支付时间已过，下次早点哦！"
}else{if(f.resultCode=="100-00-03"){e="很抱歉，此活动无效，请选购其他商品！"
}else{e="很抱歉，您目前没有符合付尾款条件的订单哦！";
if(sn.prdType=="S"){$(".mainbtns").html('<a id="addCart"  name="item_'+sn.partNumber.substring(9,18)+'_gmq_buy01" href="javascript:void(0);" class="btn-paylast-disable"><span>支付尾款</span></a>'+ewmhtml);
$("#inerestBox").show();
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount1").hide();
$("#miniCart").removeClass().addClass("btn-paylast-disable");
$("#miniCart").attr("href","javascript:void(0);").removeAttr("target","_blank")
}else{$("#addCart").removeClass().addClass("btn-paylast-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("tooltip").removeAttr("target","_blank");
if($(".qrcode-panel").siblings(".memo").length>0){$(".qrcode-panel").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-paylast-disable-mini");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target","_blank");
$("#yushouCount1").hide()
}}}}}}if(e!=""){psellAlterInfo(e)
}}})
},error:function(){}})
}function getDeliveryInfofunction(b,c,e){if((sn.vendorCode!=""&&!sn.swlShopFlag&&sn.cDeliveryFlag=="1")||(sn.vendorCode==""&&(sn.deliveryFlag=="1"||sn.cmmdtyType=="ZSRV"||sn.cmmdtyType=="ZSRW"))||(sn.swlShopFlag&&sn.deliveryFlag=="1")){if(sn.vendorCode!=""){if(sn.swlShopFlag==true){if(sn.prdType=="S"){getDeliveryInfoAble(b,cDeliveryInfoHtml,e)
}else{getDeliveryInfoAble(b,showDeliveryInfo,e)
}}else{if(sn.prdType=="S"){getCDelivery(b,cDeliveryInfoHtml,e)
}else{getCDelivery(b,showDeliveryInfo,e)
}}}else{getDeliveryInfoAble(b,showDeliveryInfo,e)
}}else{var a="";
if(sn.vendorCode!=""){if(sn.swlShopFlag==true){a="http://"+sn.domain+"/emall/swlship_10052_10051_swl_"+b+"_"+sn.vendorCode+"_"+sn.cityId+"_"+sn.districtId+"_"+sn.ownerPlace+"_"+c+"_.html"
}else{a="http://"+sn.domain+"/emall/cship_10052_10051_"+b+"_"+sn.vendorCode+"_"+sn.cityId+"_"+sn.ownerPlace+"_"+c+"_.html"
}}else{a="http://"+sn.domain+sn.context+"/ship_"+sn.storeId+"_"+sn.catalogId+"_"+b+"_"+sn.vendor+"_"+sn.cityId+"_"+sn.districtId+"_"+sn.deptNo+"_"+sn.salesOrg+"_"+sn.ownerPlace+"_"+sn.accountPlace+"_"+sn.factorySendFlag+"_"+sn.manageInvFlag+"_"+sn.sendAvalidTime+"_"+sn.invStatus+"_"+c+"_.html"
}$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:c,success:function(f){},error:function(){e()
}})
}}function getCDelivery(b,c,e){var a=sn.solpUrl+"/solp/http/SOLP10103_PDS_"+sn.ownerPlace+"_"+sn.lesCityId+"_"+sn.vendorCode+"_"+b+"_queryCccAging.htm";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:"showCccAging",success:function(f){if(f.successFlag=="Y"&&sn.invStatus=="1"){f.sendCityName=f.cityName;
f.shipOffSetText="";
var g=f.shortTime;
if(typeof g!="undefined"&&g!=""){f.shipOffSetText="&nbsp;";
getCShopDeliveryText(g)
}}else{f.sendCityName="";
f.shipOffSetText=""
}c(f)
},error:function(){e()
}})
}function getFreightList(c,e,f,b){if(sn.fimsFreightSwith=="0"){var a=sn.fimsDomain+"/fims/http/FIMS01_"+c+"_"+sn.lesCityId+"_02_queryFreightForPage.htm";
if(sn.prdType=="T"){a=sn.fimsDomain+"/fims/http/FIMS01_"+c+"_"+sn.lesCityId+"_01_queryFreightForPage.htm"
}$.ajax({url:a,cache:true,async:true,dataType:"jsonp",jsonpCallback:"queryFreightForPage",success:function(g){var h=new Array();
if(typeof g!="undefined"&&g.length>0){for(var j=0;
j<g.length;
j++){if(g[j].resultCode=="Y"){g[j].fare=g[j].freightFare;
g[j].partNumber=g[j].partnumber;
h.push(g[j])
}}}b(h)
},error:function(){f()
}})
}else{$.ajax({url:"http://"+sn.domain+sn.context+"/pfc_"+sn.storeId+"_"+sn.catalogId+"_"+c+"_"+sn.cityId+"_"+e+"_.html",cache:true,async:true,dataType:"jsonp",jsonpCallback:e,success:function(g){},error:function(){f()
}})
}}function getInstallType(a,c,b){$.ajax({url:"http://"+sn.domain+sn.context+"/service_"+sn.storeId+"_"+sn.catalogId+"_"+a+"_"+sn.catenIds+"_"+sn.brandId+"_"+sn.cityId+"_"+sn.districtId+"_"+c+"_.html",cache:true,async:true,dataType:"jsonp",jsonpCallback:c,success:function(e){},error:function(){b()
}})
}function getItemPromStatus(b,c){try{if(sn.priceType!="7-1"){var a=sn.cuxiaoType;
if(a=="1"){a="0"
}$.ajax({url:"http://"+sn.domain+"/emall/snsearchprom_10052_10051_1__"+sn.cityId+"_"+sn.provinceCode+"_"+b+"_"+sn.vendor+"_"+sn.netPrice+"_"+sn.promotionPrice+"__"+sn.salesOrg+"_"+c+"_"+a+"_.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){}})
}}catch(f){}}function getNewPromInfo(b,c){var g=sn.vendorCode==""?1:2;
var a=sn.cuxiaoType;
if(a=="1"){a="0"
}try{$.ajax({url:"http://"+sn.domain+"/emall/snshowpromtag_10052_10051_31_"+sn.cityId+"_"+b+"_"+g+"_"+sn.vendor+"_"+sn.netPrice+"_"+c+"_"+a+"_.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){}})
}catch(f){}}function getICPSPromInfo(f,g){var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var e=sn.cuxiaoType;
var b=sn.lesCityId+sn.lesDistrictId+"01";
var c=sn.icpsDomain+"/icps-web/getPromotionFourPage/"+f+"_"+a+"_"+sn.lesCityId+"_"+b+"_"+sn.netPrice+"_"+e+"_"+sn.liquanCount+"_1_pds_"+g+".vhtm";
$.ajax({url:c,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:g,success:function(h){}})
}function processNewPromInfo(c){if(c!=null&&c.result=="1"&&c.activityList.length>0){var b=0;
var a=false;
$.each(c.activityList,function(f,g){if(g.activityTypeId=="3"){$("#istuangouBox").html('团购中&nbsp<a class="b" target="_blank" href="'+g.activityLink+'">立即预订</a>');
$("#istuangouTitle").css("display","block");
$("#allcuxiao").show()
}else{if(g.activityTypeId=="4"){var e="";
if(g.activityLink!=""){e+=g.activityDescription+" <a href='"+g.activityLink+"' target='_blank' class='b'>活动详情</a>"
}else{e+=g.activityDescription
}if(!a){$("#voucherBox").html("");
$("#voucherBox").siblings(".promotion-content").remove();
a=true
}if($("#voucherBox").html()!=""){$("#voucherBox").after("<p class='promotion-content'>"+e+"</p>")
}else{$("#voucherBox").html(e)
}$("#lhvoucherTitle").css("display","none");
$("#voucherTitle").css("display","block");
$("#allcuxiao").show()
}else{if(g.activityTypeId=="5"){var e="";
if(g.activityLink!=""){e+=" <a href='"+g.activityLink+"' target='_blank' class='b'>"+g.activityDescription+"</a>"
}else{e+=g.activityDescription
}if($("#newcouponBox").html()!=""){$("#newcouponBox").after("<p class='promotion-content'>"+e+"</p>")
}else{$("#newcouponBox").html(e)
}$("#couponTitle").css("display","none");
$("#couponBox").siblings(".promotion-content").remove();
$("#couponBox").html("");
$("#newcouponTitle").css("display","block");
$("#allcuxiao").show()
}else{if(g.activityTypeId=="6"){if($("#isXYuanNItemBox").html()==""){$("#isXYuanNItemBox").html(g.activityDescription+' <a class="b" target="_blank" href="'+g.activityLink+'">查看详情</a>');
$("#isXYuanNItemTitle").css("display","block");
$("#allcuxiao").show()
}}else{if(g.activityTypeId=="8"){if(b<9){b++;
g.couponValue=g.salesPrice;
g.activityDesc=g.activityDescription;
freeCoupon.push(g)
}}else{if(g.activityTypeId=="9"){var e="";
if(g.activityLink!=""){e+=g.activityDescription+" <a href='"+g.activityLink+"' target='_blank' class='b'>活动详情</a>"
}$("#taogouyhBox").html(e);
$("#taogouyhTitle").css("display","block");
$("#lhvoucherTitle").css("display","none");
$("#voucherTitle").css("display","none");
$("#allcuxiao").show()
}else{if(g.activityTypeId=="7"){if(sn.vendorCode!=""){$("#freightfreeTitle").show();
$("#freightfreeBox").html(g.activityDescription);
$("#allcuxiao").show()
}}}}}}}}})
}if(freeCoupon.length>0){processFreeCouponInfo(freeCoupon)
}iFourth.mainHeight()
}function processFreeCouponInfo(k){try{var j="";
var b="";
var a="";
var o="";
var c=/^\d+$/;
if(k.length>0){if(k.length==1){var f=k[0];
b=f.couponValue;
a=f.activityDesc;
j+=b+"元&nbsp："+a.substring(0,35);
j+="<a class='b ml10' href='javascript:void(0);' onclick='javascript:window.open(lingquan(\""+f.activityLink+"\"))' name='item_"+sn.partNumber.substr(9,18)+"_gmq_lj00'>立即领取</a>"
}else{if(k.length>1){j+="您有"+k.length+"&nbsp;张券可领";
j+="<a class='b ml10 more-coupon' href='javascript:void(0)'>立即领取</a>";
var h=k.length>9?9:k.length;
var q="";
o="<div class='pop-coupon-win'><ul class='content clearfix'>";
for(var l=0;
l<h;
l++){b=k[l].couponValue;
a=k[l].activityDesc;
if((l+1)%3==0){q="5"
}else{if((l+1)%3==1){q="10"
}else{q="100"
}}var g=(b+"").split(".")[0];
var p=(b+"").split(".")[1];
stoken=getCookieBonus("_device_session_id");
o+="<li class='coupon-"+q+"'><a href='javascript:void(0);' onclick='javascript:window.open(lingquan(\""+k[l].activityLink+"\"))' name='item_"+sn.partNumber.substr(9,18)+"_gmq_lj0"+(l+1)+"'><span class='coupon-amount";
if(g.length>4){o+=" amount-large"
}if(p==undefined){p="00"
}else{if(p.length==1){p+="0"
}}o+="'><i>&yen;</i><em>"+(b+"").split(".")[0]+"</em><span class='yhq'>优惠券<br/><small>."+p+"</small></span></span>";
var m=a.indexOf("立");
if(m>=0){o+="<span>"+a.substring(0,m)+"</span><span>"+a.substring(m,a.length)+"</span>"
}else{o+="<span class='coupon-condition'>"+a+"</span><span>&nbsp</span>"
}o+="<span class='get-coupon'>立即领取</span></a></li>"
}o+="</ul></div>"
}}$("#freeCouponBox").html(j);
$("#freeCouponTitle").css("display","block");
$("#allcuxiao").show();
$(".more-coupon").click(function(){$.mDialog({title:"领券",css:{width:"552px"},http:function(i,r){i.find(".content").html(o)
},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300})
})
}}catch(n){}}function getShopInfoList(b,e){if(sn.pcShopListChange!="1"){var f=sn.lesCityId+sn.lesDistrictId+sn.icpsPriceStreetId;
var a=sn.icpsDomain+"/icps-web/getBizList/"+b+"_"+sn.lesCityId+"_"+f+"_1_"+sn.shoplistcacheSwitch+"_pds.htm";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:e,success:function(){}})
}else{var c=[{companyName:"",deliverSpeed:"0",dept:"",fare:"",giftCard:"",hwgType:"",inventoryInfo:"",isCShop:"1",priceType:"",productPrice:"",productSatisfy:"0",promoId:"0",promoPrice:"",salesOrg:"",salesStatus:"",secUrl:"",serviceAttitude:"0",shopGrade:"0",shopGradeInfo:null,shopName:"苏宁自营",shopStatus:"",shopType:"",telPhone:"",vendorCode:"0000000000",bizCode:""}];
if(sn.prdType!="S"){FourPage.showShopList(c)
}else{gMain.processShopList(c)
}}}function getShopScoreList(h){try{var f=sn.reviewNew+"ajax/getShopScore/";
var g=false;
var c=sn.shopList;
for(var b=0;
b<c.length;
b++){if(typeof c[b].vendorCode=="undefined"&&typeof c[b].bizCode!="undefined"){c[b].vendorCode=c[b].bizCode
}var a=c[b].vendorCode;
if(a==="0000000000"||a==""){f+="0000000000"
}else{f+=a
}if((c[b].vendorCode===sn.vendorCode)||((sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003")&&c[b].vendorCode=="0000000000")){g=true
}if(b!=c.length-1){f+="|"
}}if(!g){f+="|"+((sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003")?"0000000000":sn.vendorCode)
}f+="-"+h+".htm";
$.ajax({url:f,cache:false,async:true,dataType:"jsonp",jsonpCallback:h,success:function(e){},error:function(){}})
}catch(j){}}function getCurrentTimeForPreBuy(a,c){var b=sn.itemDomain+"/pds-web/curtime.html";
$.ajax({url:b,type:"get",cache:true,dataType:"json",success:function(e){if(e==null||e.curTime==""){c(a)
}else{if(a!=null){a.curTime=e.curTime
}c(a)
}},error:function(){c(a)
}})
}function getItemSubscribeAction(c,g,e){var a=(typeof sn.bookGoodsId!="undefined"&&sn.bookGoodsId!=null&&sn.bookGoodsId!="null")?sn.bookGoodsId:"";
var f=sn.vendorCode!=""?sn.vendorCode:(sn.isPreBuy==2?(sn.prdType!="S"?sn.priceInvData.vendor:sn.vendor):sn.vendorCode);
var b=sn.itemDomain+"/pds-web/ajax/getActionInfo_"+c+"_"+f+"_"+preBuy.actionID+"_"+a+".html";
$.ajax({url:b,type:"get",dataType:"json",cache:true,success:function(h){getCurrentTimeForPreBuy(h,g)
},error:function(){e()
}})
}function getVendorInfo(a){$.ajax({url:sn.itemDomain+"/pds-web/ajax/vendorInfo_"+sn.vendorCode+".html",type:"get",dataType:"json",cache:true,success:function(b){if(b.vendorCode=="SN_001"){b.vendorCode="0000000000"
}a(b)
}})
}function getCurrentTimeForPromotion(b,c){var a=sn.itemDomain+"/pds-web/curtime.html";
$.ajax({url:a,type:"get",cache:true,dataType:"json",success:function(f){if(f==null||f.curTime==""){c(b)
}else{if(b!=null&&b.length!=0&&b.commList!=null&&b.commList.length!=0){for(var e=0;
e<b.commList.length;
e++){b.commList[e].currentDate=f.curTime
}}c(b)
}},error:function(){c(b)
}})
}function getItemBigPolyAction(c,h,g){PriceShow.initFlag="-1";
PriceShow.promotionType="-1";
PriceShow.beginTime="0";
PriceShow.endTime="0";
PriceShow.warmUpTime="0";
PriceShow.remainNum="-1";
PriceShow.curTime="-1";
PriceShow.price="-1";
PriceShow.maxPerNum="1";
PriceShow.activityFlag="";
PriceShow.serviceType="";
PriceShow.isPhoneBind="";
PriceShow.isBrondPay="";
PriceShow.isLimitTake="";
var a=sn.vendorCode;
if(a==""||a==null||(a.length==10&&a.substring(0,3)=="003")){a="0000000000"
}try{var b=sn.itemDomain+"/pds-web/ajax/bigPolyItem_"+PriceShow.actionId+"_.html";
$.ajax({url:b,type:"get",cache:true,dataType:"json",success:function(e){getCurrentTimeForPromotion(e,h)
},error:function(){g()
}})
}catch(f){}}function getMobileBigPoly(c,h,g){PriceShow.initFlag="-1";
PriceShow.promotionType="-1";
PriceShow.beginTime="0";
PriceShow.endTime="0";
PriceShow.warmUpTime="0";
PriceShow.remainNum="-1";
PriceShow.curTime="-1";
PriceShow.price="-1";
PriceShow.maxPerNum="1";
PriceShow.activityFlag="";
PriceShow.serviceType="";
PriceShow.isPhoneBind="";
PriceShow.isBrondPay="";
PriceShow.isLimitTake="";
var a=sn.vendorCode;
if(a==""||a==null||(a.length==10&&a.substring(0,3)=="003")){a="0000000000"
}try{var b=sn.itemDomain+"/pds-web/ajax/bigPolyItemCom_"+c+"_"+a+"_.html";
$.ajax({url:b,type:"get",cache:true,dataType:"json",success:function(e){h(e)
},error:function(){g()
}})
}catch(f){}}function verifyBigPoly(){if(PriceShow.isPhoneBind=="1"||PriceShow.isBrondPay=="1"){var a="<dt>购买须知</dt><dd><span>购买此商品，您需要：</span>";
if(PriceShow.isPhoneBind=="1"&&PriceShow.isBrondPay!="1"){a+='<a id="isPhoneBind" href="'+sn.aqPhone+'" target="_blank" class="b">绑定手机号</a>'
}else{if(PriceShow.isPhoneBind!="1"&&PriceShow.isBrondPay=="1"){a+='<a id="isBrondPay" href="'+sn.paySuning+'" target="_blank" class="b">开通易付宝快捷支付</a>'
}else{if(PriceShow.isPhoneBind=="1"&&PriceShow.isBrondPay=="1"){a+='<a id="isPhoneBind" href="'+sn.aqPhone+'" target="_blank" class="b">绑定手机号</a>&nbsp&nbsp同时&nbsp&nbsp<a id="isBrondPay" href="'+sn.paySuning+'" target="_blank" class="b">开通易付宝快捷支付</a>'
}}}$("#bigPolyVerify").html(a);
$("#bigPolyVerify").show()
}else{$("#bigPolyVerify").hide()
}}function getGiftInfo(b,c){var a=sn.cuxiaoType;
if(a=="1"){a="0"
}$.ajax({url:"http://"+sn.domain+"/emall/proGift_10052_10051_"+b+"_"+sn.salesOrg+"_"+sn.vendorCode+"_"+sn.promotionPrice+"_"+sn.cityId+"_"+sn.deptNo+"_"+sn.ownerPlace+"_"+c+"_"+a+"_.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){}})
}function initHistoryCookie(c){var a=FourPage.getCookieBonus("smhst");
var e=(c).substring(9,18);
var b="a";
FourPage.updateHistory(a,e,b)
}var iDiggerTrackingCodes=function(c,f,a){var h=sn.vendorCode;
if(h==undefined||"undefined"==h||""==h||(h.length==10&&h.substring(0,3)=="003")){h="0000000000"
}var e=sn.categoryName1+":"+sn.categoryName2+":"+sn.categoryName3;
var i=sn.imageDomianDir+"/b2c/catentries/"+c+"_1_400x400.jpg";
var a=a||[];
var b=snga.productStatus?snga.productStatus:"";
var g="";
if(b.indexOf("1")!=-1){g=snga.shipOffset
}else{if(b.indexOf("2")!=-1){g="-1"
}else{if(b.indexOf("3")!=-1||b.indexOf("-99")!=-1){g="-2"
}else{g="-99"
}}}if(sn.vendorCode!=""){g="-99"
}snga.productStatus=sn.isPreBuy==1&&(sn.invStatus=="0"||sn.invStatus=="3"||sn.invStatus=="2")?"-99":snga.productStatus;
a.push(["db","ifc"],["sitecode","T-000130-01"]);
a.push(["gid",c.substring(9,18),"gcate",f,"supplierID",h,"gprice",sn.promotionPrice,"gcatename",e,"gimgurl",i,"gname",sn.itemDisplayName,"invent",g]);
a.push(["userid",d("custno")],["userflag",""]);
a.push(["_trackPoint"])
};
function getCloudDrill(a){$.ajax({url:sn.itemDomain+"/pds-web/ajax/getCalcPointInfo_"+sn.vendorCode+"_"+sn.catenIds+"_"+sn.promotionPrice+"_"+a+".html",type:"get",cache:true,dataType:"jsonp",jsonpCallback:a,success:function(){}})
}function processQcode(){if(sn.groupFlag){return
}var c;
if(sn.pageFlag!=undefined&&sn.pageFlag==1){c=sn.curSubPartNumber
}else{c=sn.partNumber
}if(typeof sn.mobilePrice!="undefined"&&sn.mobilePrice!=""){if(c!=""){var b='<div class="cli-buy txt">'+scmInfo.qrCode+"</div>";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
b+='<div class="q-cut txt">立减'+sn.mobilePrice+"元</div>";
$(".qrcode-panel .q-text").html(b);
$(".qrcode-panel .q-text").removeClass("one-row");
$(".qrcode-panel .b-img").attr("src",qrinit(a,c.substring(9,18)));
$("#qrCode").show()
}else{$("#qrCode").hide()
}}else{if(c!=""){var b='<div class="cli-buy txt">'+scmInfo.qrCode+"</div>";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
$(".qrcode-panel .q-text").addClass("one-row");
$(".qrcode-panel .q-text").html(b);
$(".qrcode-panel .b-img").attr("src",qrinit(a,c.substring(9,18)));
$("#qrCode").show()
}else{$("#qrCode").hide()
}}if(sn.isPreBuy==2){qCodeHide()
}if(typeof ewmhtml!="undefined"){var b='<div class="qrcode-panel" id="qrCode" ';
if($("#qrCode").is(":hidden")){b+='style="display: none;"'
}b+=' name="item_'+sn.ninePartNumber+'_gmq_saoma">'+$(".mainbtns .qrcode-panel").html()+"</div>";
ewmhtml=b
}iFourth.mainHeight()
}function qrinit(c,l){var f="http://code.suning.cn/2uyuGl";
f=encodeURIComponent(f);
var g="";
if(typeof sn.qrCodeBookLongUrl!="undefined"&&sn.catalogId=="22001"){g+=sn.qrCodeBookLongUrl;
g+="/dzs/landingpage/index_snbook.html?url=http://m.suning.com/product/"+c+"/"+l+".html&"
}else{g+=sn.qrCodeLongUrl;
g+="/project/landingpage/index_2.html?url=http://m.suning.com/product/"+c+"/"+l+".html&"
}g+="utm_source=qrcode&utm_medium=06&utm_content=4000&utm_term=02&utm_campaign=&adTypeCode=1013&adId="+l+"_"+c+"&";
g+="channeltype=06&store=4000_01_&haswake=1&downloadurl="+f;
var e="JPG";
var h="115";
var b="000000";
var m="";
var k="-1";
var a=conversionToString(g);
var j=conversionToString(m);
var i=sn.qrCodeDomainNew+"/qrcode/buildQrCodeUrlPCWap_"+a+"_"+e+"_"+h+"_"+b+"_"+j+"_"+k+".html";
return i
}function conversionToString(c){var e="";
if(null!=c&&""!=c.replace(/^\s*|\s*$/,"")){for(var b=0,a=c.length;
b<a;
b++){e+=c.charCodeAt(b).toString(16)+","
}if(null!=e&&""!=e.replace(/^\s*|\s*$/,"")){e=e.substring(0,e.length-1)
}}return e
}function qCodeHide(){$("#qrCode").hide();
$("#ziti").hide();
iFourth.mainHeight();
if(typeof ewmhtml!="undefined"){var a='<div class="qrcode-panel" id="qrCode" ';
if($("#qrCode").is(":hidden")){a+='style="display: none;"'
}a+=' name="item_'+sn.ninePartNumber+'_gmq_saoma">'+$(".mainbtns .qrcode-panel").html()+"</div>";
ewmhtml=a
}}function userCustom(a){$("#shopContent").html(unescape(a));
$("#shopContent img").each(function(){$(this).attr("src",$(this).attr("src2")).removeAttr("src2")
})
}function paramCorrect(a){$(".m-dialog textarea").val("");
paraCorrectInfo.paramType=$(a).parent().siblings(".name").find("span").html();
$(".param-wrong-title").next().html(paraCorrectInfo.paramType);
paraCorrectInfo.oldValue=$(a).parent().siblings(".val").html()
}function paramCorrectSubmit(){paraCorrectInfo.newValue=$(".m-dialog textarea").val();
paraCorrectInfo.divisionCode=sn.brandId!=undefined?sn.brandId.substring(0,5):"";
paraCorrectInfo.parameterName=$(".param-wrong-title").next().html();
paraCorrectInfo.memberId=d("custno");
if(paraCorrectInfo.newValue==""){$(".param-wrong-err").html("参数值不能为空").show()
}else{if(paraCorrectInfo.newValue.length>200){$(".param-wrong-err").html("请输入正确的参数值").show()
}else{var a="http://"+sn.domain+sn.context+"/SNFPParameterCmd?catalogId=10051&storeId=10052&partnumber="+sn.partNumber;
a+="&divisionCode="+paraCorrectInfo.divisionCode+"&parameterName="+paraCorrectInfo.parameterName+"&oldValue="+paraCorrectInfo.oldValue;
a+="&newValue="+paraCorrectInfo.newValue+"&memberId="+paraCorrectInfo.memberId;
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",success:function(b){$.unmDialog();
Util.alertOkBox("非常感谢您的反馈，我们会尽快核实和更正！")
},error:function(){$.unmDialog();
Util.alertOkBox("非常感谢您的反馈，我们会尽快核实和更正！")
}})
}}}CommonFourPage.FourPage={getFreightInsuranceFlag:function(){sn.yfxian="0";
if(sn.vendorCode!=""){var a=sn.itemDomain+"/pds-web/ajax/freIns_"+sn.vendorCode.substring(2,10)+".html";
$.ajax({url:a,type:"get",cache:true,dataType:"json",success:function(b){if(b!=null&&b.items.length!=0){$("#yfxian").hide();
$.each(b.items,function(c,e){if(e.supplierCode==sn.vendorCode.substring(2,10)&&e.flag=="Y"){$("#yfxian").show()
}})
}else{$("#yfxian").hide()
}},error:function(){$("#yfxian").hide()
}})
}else{$("#yfxian").hide()
}},initReturnOrChange:function(c,e){if(scmInfo.pcWlySwitch=="0"){var a=sn.vendorCode;
if(a==""){a="0000000000"
}var b=sn.assssDomain+"/assss-web/noreason/queryNoreason_"+sn.catenIds+"_"+sn.brandCode+"_"+c+"_"+a+"_"+sn.promotionPrice+"_"+e+".htm"
}else{var b="http://"+sn.domain+sn.context+"/ret_10052_10051_"+c+"_"+sn.vendorCode+"_"+sn.catenIds+"_"+e+"_.html"
}$.ajax({url:b,type:"get",cache:true,dataType:"jsonp",jsonpCallback:e,success:function(){}})
},qualityCSS:function(){if(sn.category1==""||sn.category2==""||sn.brandId==""||sn.modelName==""||sn.category1!="20358"||sn.qualitySwitch=="0"){$("#qualityTitle").hide()
}else{if(typeof gProduct!="undefined"&&gProduct.gors=="0"){$("#qualityTitle").hide()
}else{var a=sn.partNumber;
if(typeof sn.curSubPartNumber!="undefined"&&sn.curSubPartNumber!=""){a=sn.curSubPartNumber
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/qualityCheck_"+a+".html",cache:true,dataType:"json",success:function(b){if(b!=null&&typeof b.qualityFalg!="undefined"&&b.qualityFalg=="Y"){$("#qualityTitle").show()
}else{$("#qualityTitle").hide()
}},error:function(){$("#qualityTitle").hide()
}})
}}},getPromotiondesc:function(b,c){var a=sn.vendorCode;
if(a==""||a==null||(a.length==10&&a.substring(0,3)=="003")){a=""
}this.qualityCSS();
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemUniqueInfo_"+b+"_"+a+".html",cache:true,dataType:"json",success:function(f){var e="";
if(f!=null&&f.itemDetail!=null){e=f.itemDetail.service
}CommonFourPage.aftermarket(e);
c(f)
},error:function(){}})
},getItemDescInfo:function(b,c){var a=sn.vendorCode;
if(a==""||a==null||(a.length==10&&a.substring(0,3)=="003")){a=""
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getItemdesc_"+b+"_"+a+".html",cache:true,dataType:"json",success:function(e){c(e)
},error:function(){}})
},processItemdescInfo:function(a){sn.promItemDesc="";
sn.promotionDesc="";
if(a!=null&&a.length!=0){$.each(a,function(c,e){if(e!=null&&e.descType=="0"){sn.promItemDesc=typeof e.description!="undefined"?e.description:"";
sn.promUrl=typeof e.url!="undefined"?e.url:"";
var b="item_"+sn.ninePartNumber+"_gmp_cuxiaomd";
if(typeof sn.dstatus!="undefined"){b="citem_"+sn.ninePartNumber+"_gmp_cuxiaomd"
}if(sn.promUrl!=""){sn.promItemDesc='<a target="_blank" href="'+sn.promUrl+'" name="'+b+'" class="btn-prom-point">'+sn.promItemDesc+"</a>"
}}else{sn.promotionDesc=typeof e.description!="undefined"?e.description:""
}});
if(typeof sn.phoneFlag!="undefined"&&sn.phoneFlag=="Y"&&sn.vendorCode==""){$("#promotionDesc").html(sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc)
}else{$("#promotionDesc").html(sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc)
}if($("#promotionDesc").html()!=""){$("#promotionDesc").show()
}else{$("#promotionDesc").hide()
}}},getProductLablePricture:function(b,e){var c=sn.vendorCode;
if(c==undefined||"undefined"==c||""==c||(c.length==10&&c.substring(0,3)=="003")){c="0000000000"
}var a="http://"+sn.domain+sn.context+"/labpic_"+sn.storeId+"_"+sn.catalogId+"_"+c+"_"+b+"__"+e+"_.html";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:e,success:function(f){}})
},getItemInfo:function(a,b){$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfo_"+a+".html",type:"get",cache:true,async:false,dataType:"json",success:function(c){b(c)
}})
},getParameter:function(a,b){if(sn.getParameter==undefined||sn.getParameter!=true){sn.getParameter=true;
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemParameter_"+a+"_"+sn.catenIds+"_"+sn.catalogId+".html",type:"get",async:false,dataType:"json",success:function(c){b(c)
},error:function(){}})
}},getCommGroup:function(a,b){if(typeof lazyElems!="undefined"){if(a!=""){lazyElems.relClass.url=sn.itemDomain+"/pds-web/ajax/commGroup_"+a+".html";
lazyElems.relClass.enable=true;
lazyElems.relClass.handle=b;
iFourth.win.scroll()
}else{lazyElems.relClass.enable=false;
$("#relClass").html("").hide()
}}else{setTimeout(function(){CommonFourPage.FourPage.getCommGroup(a,b)
},100)
}},onShopSubmitSearch:function(){var i=$("#shopKeyWord");
var f=$("#slowPrice");
var e=$("#highPrice");
var g=$.trim(i.val());
var c=$.trim(f.val());
var a=$.trim(e.val());
var h=/^\d+$/;
if(g=="请输入关键字"||g==""){Util.alertErrorBox("请输入关键词！")
}else{if(c!=""&&a!=""){if(!h.test(c)||!h.test(a)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price="+c+"-"+a+"&page=1"
}}else{if(c!=""&&a==""){if(!h.test(c)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price="+c+"-100000000&page=1"
}}else{if(c==""&&a!=""){if(!h.test(a)){Util.alertErrorBox("请输入正确的价格！");
return
}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&price=0-"+a+"&page=1"
}}else{var b=sn.shopPath+sn.shopMainPh+"/"+sn.vendorCode.substring(2,10)+"/search?keyWord="+encodeURIComponent(g)+"&start=0&rows=100"
}}}window.location.href=b
}},initPriceSearch:function(){$("#slowPrice").keyup(function a(){var b=document.getElementById("slowPrice").value;
document.getElementById("slowPrice").value=b.replace(/[^0-9]/g,"")
});
$("#highPrice").keyup(function a(){var b=document.getElementById("highPrice").value;
document.getElementById("highPrice").value=b.replace(/[^0-9]/g,"")
})
}};
CommonFourPage.viewAlsoView=function(c){try{var b="";
var a="";
b="baoguang_reccviewviewn_1-";
a=sn.point+"_"+sn.ninePartNumber+"_reccviewviewn_1-";
$("#viewAlsoView").html("");
if(c!=""&&c.sugGoods!=undefined&&c.sugGoods!=""&&c.sugGoods.length>0){$.each(c.sugGoods,function(e,g){if(g.resCode!="02"){if(g.sceneId=="10-14"&&g.skus.length>0){var h="";
$.each(g.skus,function(j,k){if(j>9){return false
}h+="<li>";
h+='<a class="product-img" target="_blank" id="'+b+(j+1)+"_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" name="'+a+(j+1)+"_p_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" href="'+sn.elecProductDomain+"/detail_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+".html?src="+a+(j+1)+"_p_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'">';
h+='<img alt="'+k.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+k.sugGoodsCode+'_1_120x120.jpg" /></a>';
h+='<p><span class="price"><i>&yen;</i><em>'+k.price+'</em></span><a class="title" target="_blank" id="'+b+(j+1)+"_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" name="'+a+(j+1)+"_c_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+".html?src="+a+(j+1)+"_c_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'">';
h+=k.sugGoodsName;
h+="</a></p>"
});
if(h!==""){h="<ul>"+h+"</ul>";
$("#viewAlsoView").html(h)
}}}})
}$(".customer-rec-title").html("<h3><span>看了又看</span></h3>")
}catch(f){}if($("#viewAlsoView").find("li").length>0){$(".customer-rec-empty").hide();
$("#viewAlsoView").show()
}else{$(".customer-rec-empty").show();
$("#viewAlsoView").hide()
}iFourth.customerRec.resetHeight();
runAnalyseByClass("baoguang_reccviewviewn");
iFourth.customerRec.init();
iFourth.mainHeight()
};
CommonFourPage.rightRec=function(c){try{var b="";
var a="";
b="baoguang_recdtsn_1-";
a=sn.point+"_"+sn.ninePartNumber+"_recdtsn_1-";
$("#viewAlsoView").html("");
if(c!=""&&c.sugGoods!=undefined&&c.sugGoods!=""&&c.sugGoods.length>0){$.each(c.sugGoods,function(e,g){if(g.resCode!="02"){if(g.sceneId=="6-27"&&g.skus.length>2){var h="";
$.each(g.skus,function(j,k){if(j>9){return false
}h+="<li>";
h+='<a class="product-img" target="_blank" name="'+a+(j+1)+"_p_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" href="'+sn.elecProductDomain+"/detail_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+".html?src="+a+(j+1)+"_p_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'">';
h+='<img alt="'+k.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+k.sugGoodsCode+'_1_120x120.jpg" /></a>';
h+='<p><span class="price"><i>&yen;</i><em>'+k.price+'</em></span><a class="title" target="_blank" id="'+b+(j+1)+"_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" name="'+a+(j+1)+"_c_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+".html?src="+a+(j+1)+"_c_"+k.vendorId+"_"+(k.sugGoodsCode).substring(9,18)+"_"+k.handwork+'">';
h+=k.sugGoodsName;
h+="</a></p>"
});
if(h!==""){h="<ul>"+h+"</ul>";
$("#viewAlsoView").html(h)
}}}})
}$(".customer-rec-title").html("<h3><span>网友推荐</span></h3>")
}catch(f){}if($("#viewAlsoView").find("li").length>0){$(".customer-rec-empty").hide();
$("#viewAlsoView").show()
}else{$(".customer-rec-empty").show();
$("#viewAlsoView").hide()
}iFourth.customerRec.resetHeight();
runAnalyseByClass("baoguang_recdtsn");
iFourth.customerRec.init();
iFourth.mainHeight()
};
CommonFourPage.getRecomData=function(i){try{var g=i.sugGoods;
var c="";
var a="";
var f=[];
var b=[];
var j="";
$.each(g,function(k,m){if(m.resCode!="02"){if(m.sceneId=="10-15"){var e=CommonFourPage.getLiV9(m,2);
if(e!==""){if(sn.dstatus=="1"){c='<div class="area mt10" id="view_Also_BuyProduct">'
}else{c='<div class="template sea-pro editArea-abs mbt10" id="view_Also_BuyProduct">'
}if(sn.dstatus=="1"){c+='<div class="area-head"><h3>大家都在买</h3></div>'
}else{if(sn.templateCode==""||sn.templateCode=="T000"){c+='<h2 class="default">大家都在买</h2>'
}else{if(sn.templateCode=="T001"){c+='<h2 class="digital"><span class="ico"></span>大家都在买</h2>'
}else{if(sn.templateCode=="T002"){c+='<h2><span class="ico"></span>大家都在买</h2>'
}else{if(sn.templateCode=="T003"){c+='<h2 class="purple">大家都在买</h2>'
}}}}}c+='<div class="menu-con"><ul class="exprec" id="vab">'+e+"</ul></div></div>"
}}else{if(m.sceneId=="10-16"){var l=CommonFourPage.getLiV9(m,3);
if(l!==""){if(sn.dstatus=="1"){a='<div class="area mt10" id="buy_Also_BuyProduct">'
}else{a='<div class="template sea-pro editArea-abs mbt10" id="buy_Also_BuyProduct">'
}if(sn.dstatus=="1"){a+='<div class="area-head"><h3>掌柜为您推荐</h3></div>'
}else{if(sn.templateCode==""||sn.templateCode=="T000"){a+='<h2 class="default">掌柜为您推荐</h2>'
}else{if(sn.templateCode=="T001"){a+='<h2 class="digital"><span class="ico"></span>掌柜为您推荐</h2>'
}else{if(sn.templateCode=="T002"){a+='<h2><span class="ico"></span>掌柜为您推荐</h2>'
}else{if(sn.templateCode=="T003"){a+='<h2 class="purple">掌柜为您推荐</h2>'
}}}}}a+='<div class="menu-con"><ul class="exprec" id="bab">'+l+"</ul></div></div>"
}}}}});
j+=c;
j+=a;
$("#buyAlsoBuy").after(j);
$("#buyAlsoBuy").hide();
$("#view_Also_BuyProduct").show();
$("#buy_Also_BuyProduct").show()
}catch(h){}runAnalyseByClass("baoguang_reccviewbuyn");
runAnalyseByClass("baoguang_reccviewbuyn");
runAnalyseByClass("baoguang_reccbuybuyn");
iFourth.mainHeight()
};
CommonFourPage.getLiV9=function(f,a){var h="";
try{var c="";
var b="";
if(a==1){c="baoguang_reccviewviewn_1-";
b="item_"+(sn.partNumber).substring(9,18)+"_reccviewviewn_1-"
}else{if(a==2){c="baoguang_reccviewbuyn_1-";
b=sn.point+"_"+sn.ninePartNumber+"_reccviewbuyn_1-"
}else{if(a==3){c="baoguang_reccbuybuyn_1-";
b=sn.point+"_"+sn.ninePartNumber+"_reccbuybuyn_1-"
}}}$.each(f.skus,function(e,j){if(e>4){return false
}h+="<li>";
h+='<a target="_blank" name="'+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" href="'+sn.elecProductDomain+"/detail_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+".html?src="+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'">';
h+='<img class="image" alt="'+j.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+j.sugGoodsCode+'_1_120x120.jpg" /></a>';
h+='<p class="title"><a target="_blank" id="'+c+(e+1)+"_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" name="'+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+".html?src="+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'">';
h+=j.sugGoodsName;
h+=j.sugGoodsDes;
h+="</a></p>";
h+='<p class="price"><span><i>&yen; </i>'+j.price+"</span>"+CommonFourPage.Recommend.getPromotionContent(j.promotionType," ")+"</p></li>"
})
}catch(g){}return h
};
CommonFourPage.getShopHotData=function(g){try{var c=g.sugGoods;
var i="";
var h="";
var b=sn.point+"_"+sn.ninePartNumber+"_recdxln_1-";
var a="baoguang_recdxln_1-";
if(c!=""&&c!=undefined){$.each(c,function(e,j){if(j.resCode!="02"){if(j.sceneId=="10-13"&&j.skus.length>0){var k="";
$.each(j.skus,function(l,m){if(l>4){return false
}k+="<li>";
k+='<a target="_blank" name="'+b+(l+1)+"_p_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+".html?src="+b+(l+1)+"_p_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'">';
k+='<img class="image" alt="'+m.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+m.sugGoodsCode+'_1_120x120.jpg" /></a>';
k+='<p class="title"><a target="_blank" id="'+a+(l+1)+"_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" name="'+b+(l+1)+"_c_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+".html?src="+b+(l+1)+"_c_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'">';
k+=m.sugGoodsName;
k+='</a></p><p class="price"><i>&yen;</i>'+m.price+CommonFourPage.Recommend.getPromotionContent(m.promotionType," ")+"</p></li>"
});
if(k!=""){$("#shopHotList").html(k);
$("#shopHot").show()
}else{$("#shopHot").hide()
}}else{$("#shopHot").hide()
}}})
}runAnalyseByClass("baoguang_recdxln")
}catch(f){}};
CommonFourPage.getShopFavoriteData=function(g){try{var c=g.sugGoods;
var i="";
var h="";
var b=sn.point+"_"+sn.ninePartNumber+"_recdscn_1-";
var a="baoguang_recdscn_1-";
if(c!=""&&c!=undefined){$.each(c,function(e,j){if(j.resCode!="02"){if(j.sceneId=="6-25"&&j.skus.length>0){var k="";
$.each(j.skus,function(l,m){if(l>4){return false
}k+="<li>";
k+='<a target="_blank" name="'+b+(l+1)+"_p_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+".html?src="+b+(l+1)+"_p_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'">';
k+='<img class="image" alt="'+m.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+m.sugGoodsCode+'_1_120x120.jpg" /></a>';
k+='<p class="title"><a target="_blank" id="'+a+(l+1)+"_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" name="'+b+(l+1)+"_c_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'" title="'+m.sugGoodsName+'" href="'+sn.elecProductDomain+"/detail_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+".html?src="+b+(l+1)+"_c_"+m.vendorId+"_"+(m.sugGoodsCode).substring(9,18)+"_"+m.handwork+'">';
k+=m.sugGoodsName;
k+='</a></p><p class="price"><i>&yen;</i>'+m.price+CommonFourPage.Recommend.getPromotionContent(m.promotionType," ")+"</p></li>"
});
if(k!=""){$("#shopCollectionList").html(k);
$("#shopCollection").show()
}else{$("#shopCollection").hide()
}}else{$("#shopCollection").hide()
}}})
}runAnalyseByClass("baoguang_recdscn")
}catch(f){}};
CommonFourPage.hwgInitCss=function(){$(".oversea-logo").show();
$("#oversea").show();
$("#installment").hide();
$(".ziti").parent().hide();
$("#itHelp").hide();
$(".proinfo-deliver-oversea").show();
$("#productOverseaTitle").show();
$("#deliverName").html("送至");
$(".after-market").each(function(){$(this).hide()
});
$("#hwgService").show()
};
CommonFourPage.hwgDelivery=function(a){sn.hwgType="";
if(a){if(sn.ownerPlace.indexOf("H")==0){if(typeof sn.sendCityName!="undefined"&&sn.sendCityName!=""){$("#overSeaPlace").html("<span>由"+sn.sendCityName+'发货</span><span class="ml10">海外直邮</span>')
}else{$("#overSeaPlace").html("")
}$("#overSeaArea").html("国际物流配送流程");
$(".process-dropdown").html('<img src="'+sn.newResServer+sn.pdsRelationURl+'images/deliver-process1.jpg" width="465" height="70"/>');
$(".proinfo-deliver-oversea").show();
if($(".current-city").length>0){$(".current-city").hide()
}$("#tariff").show();
$(".pro-detail-oversea").show();
sn.hwgType="1";
iFourth.overseDeliver()
}else{if(sn.ownerPlace.indexOf("B")==0||sn.ownerPlace.indexOf("L")==0){if(typeof sn.sendCityName!="undefined"&&sn.sendCityName!=""){$("#overSeaPlace").html('<span id="itemSource">商品来源地：'+sn.itemSource+'</span><span class="ml10">由'+sn.sendCityName+"发货</span>")
}else{$("#overSeaPlace").html('<span id="itemSource">商品来源地：'+sn.itemSource+"</span>")
}$("#overSeaArea").html("保税区物流配送流程");
$(".process-dropdown").html('<img src="'+sn.newResServer+sn.pdsRelationURl+'images/deliver-process2.jpg" width="535" height="70"/>');
$(".proinfo-deliver-oversea").show();
$(".current-city").hide();
if($(".current-city").length>0){$(".current-city").hide()
}$("#tariff").show();
$(".pro-detail-oversea").show();
sn.hwgType="1";
iFourth.overseDeliver()
}else{sn.hwgType="0";
$(".proinfo-deliver-oversea").hide();
$(".pro-detail-oversea").hide();
$("#tariff").hide()
}}}else{$(".proinfo-deliver-oversea").hide()
}};
CommonFourPage.runInitCFittingReady=function(b,f){var a=typeof sn.passPartNumber!="undefined"?sn.curSubPartNumber:sn.partNumber;
if($("#J-tieIn").length>0&&sn.isPreBuy!=2){try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/accessoryRelation_"+sn.vendorCode+"_"+b+"_.html",type:"get",async:true,dataType:"json",success:function(e){f(e)
}})
}catch(c){}}else{$("#J-tieIn").html("");
$("#J-tieIn").hide();
$("li[rel=#J-tieIn]").hide()
}};
CommonFourPage.getPassInfo=function(c){var a=$(c).attr("pass");
try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/getPassInfo_"+a+".html",type:"get",async:true,dataType:"json",success:function(f){var g="";
if(f!=null){var e=new fitSub(f.passSubList.length,a,f.charPartNumbers);
fitInfo.push(e);
$.each(f.uniqueSubList,function(k,j){$.each(j,function(i,l){if(i.indexOf("颜色")>=0){g+='<dl pass="'+a+'" class="tiein-tzm-color"><dt>颜色：</dt><dd><ul>';
$.each(l,function(m,n){var o=sn.imageDomianDir+"/b2c/catentries/"+n.partNumber+"_1_30x30.jpg";
g+='<li data-id="'+(m+1)+'" sid="'+i+'" cid="'+n.characterValueId+'" title="'+n.characterValueDisplayName+'"><a href="javascript:void(0);"><img src="'+o+'" alt="'+n.characterValueDisplayName+'" /><i></i></a></li>'
});
g+="</ul></dd></dl>"
}})
});
$.each(f.uniqueSubList,function(k,j){$.each(j,function(i,l){if(i.indexOf("颜色")<0){g+='<dl pass="'+a+'" class="tiein-tzm-buytype"><dt>'+i+"：</dt><dd><ul>";
$.each(l,function(m,n){g+='<li data-id="'+(m+1)+'" sid="'+i+'" cid="'+n.characterValueId+'" title="'+n.characterValueDisplayName+'"><a href="javascript:void(0);">'+n.characterValueDisplayName+"<i></i></a></li>"
});
g+="</ul></dd></dl>"
}})
});
c.find(".tiein-list-tzm").attr("pass",a);
c.find(".tiein-list-tzm").html(g);
if(fitSub.gType=="1"){var h=c.find(".tiein-tzm-pop ul li");
$.each(h,function(j,l){var k=$(l).attr("cid");
if(typeof f.charPartNumbers[0][k]=="undefined"){if($(l).parents("dl").is(".tiein-tzm-color")){$(l).removeClass().addClass("c-disabled")
}else{$(l).removeClass().addClass("disabled")
}}});
$(".tiein-tzm-pop .main dl dd li").unbind("click")
}iFourth.tieInTZM.show(c)
}else{c.find(".tiein-list-tzm").html("")
}}})
}catch(b){}};
CommonFourPage.checkSub=function(b,c){var a=null;
$.each(fitInfo,function(h,g){if(g.passPart==b){a=g.subInfo;
if(g.gType=="2"){if($(c).attr("sid")=="0"){var e=$(c).parents(".tiein-tzm-pop");
var f=$(e).find("ul").eq(1).find("li");
var j=$(c).attr("cid");
$.each(f,function(l,k){var i=$(k).attr("cid");
if(typeof a[0][j+i]=="undefined"){if($(k).parents("dl").is(".tiein-tzm-color")){$(k).removeClass().addClass("c-disabled")
}else{$(k).removeClass().addClass("disabled")
}}})
}}}})
};
CommonFourPage.getSubFitPrice=function(i){var e=$(i).attr("sub");
var g=$(i).attr("pass");
var h=sn.imageDomianDir+"/b2c/catentries/"+e+"_1_60x60.jpg";
var b=sn.elecProductDomain+"/"+(sn.vendorCode==""?"0000000000":sn.vendorCode)+"/"+e.substring(9,18)+".html";
$("li[pass="+g+"] a").eq(0).find("img").attr("src",h);
$("li[pass="+g+"] a").eq(0).attr("href",b);
$("li[pass="+g+"] .title a").attr("href",b);
var f=typeof sn.passPartNumber!="undefined"?sn.curSubPartNumber:sn.partNumber;
var a=sn.lesCityId+sn.lesDistrictId+"01";
var c=sn.icpsDomain+"/icps-web/getAccessoriesPriceForPds/"+e+"_"+sn.vendorCode+"_"+sn.lesCityId+"_"+a+"_1_PC_getCFittingSubFitPrice.vhtm";
$.ajax({url:c,type:"get",async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getCFittingSubFitPrice",success:function(j){if(j!=null&&j.cmmdtys!=null&&j.cmmdtys.length>0){$.each(j.cmmdtys,function(l,p){if(e==p.cmmdtyCode){var k=p.accessoryPrice;
var o=typeof p.discount!="undefined"?p.discount:"0";
var n=(parseFloat(p.price)).toFixed(2);
var m=typeof p.accessoryId!="undefined"&&p.accessoryId!=""?p.accessoryId:"";
if(typeof k!="undefined"&&k!="0"&&k!=""){$(".fitPartNumber[value="+e+"]").siblings("input.high").val(n!=undefined?n:"");
$(".fitPartNumber[value="+e+"]").siblings("input.low").val(k!=undefined?k:"");
$(".fitPartNumber[value="+e+"]").siblings("p.price").html("<span>套餐价：</span><i>¥</i>"+k).show();
if(o!="0"){$(".fitPartNumber[value="+e+"]").siblings("span.label").html("已优惠 &yen;"+o).show()
}else{$(".fitPartNumber[value="+e+"]").siblings("span.label").hide()
}if(m!=""){$(".fitPartNumber[value="+e+"]").siblings("input.check").val(m);
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val(m)
}else{$(".fitPartNumber[value="+e+"]").siblings("input.check").val("");
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val("")
}}else{$(".fitPartNumber[value="+e+"]").siblings("p.price").hide();
$(".fitPartNumber[value="+e+"]").siblings("span.label").hide();
$(".fitPartNumber[value="+e+"]").siblings("input.check").val("");
$(".fitPartNumber[value="+e+"]").siblings("input.accessoryId").val("")
}}})
}iFourth.tieInTZM.select()
}})
};
CommonFourPage.getCFittingPrice=function(g){var b="";
var a="";
for(var f=0;
f<g.length;
f++){if(f<10){b+=g[f].partNumber;
a+=sn.vendorCode;
if(f!=g.length-1){b+=",";
a+=","
}}}var c=sn.lesCityId+sn.lesDistrictId+"01";
var e=sn.icpsDomain+"/icps-web/getAccessoriesPriceForPds/"+b+"_"+a+"_"+sn.lesCityId+"_"+c+"_1_PC_getCFittingPriceCallback.vhtm";
$.ajax({url:e,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"getCFittingPriceCallback",success:function(k){var h=true;
if(k&&k.cmmdtys&&k.cmmdtys.length>0){for(var m=0;
m<k.cmmdtys.length;
m++){var l=k.cmmdtys[m].cmmdtyCode;
var j=k.cmmdtys[m].accessoryPrice;
if(typeof j!="undefined"&&j!=""){$(".fitPartNumber[value="+l+"]").siblings("input.accessoryId").val(typeof k.cmmdtys[m].accessoryId=="undefined"?"":k.cmmdtys[m].accessoryId);
$(".fitPartNumber[value="+l+"]").siblings("input.check").val(typeof k.cmmdtys[m].accessoryId=="undefined"?"":k.cmmdtys[m].accessoryId);
$(".fitPartNumber[value="+l+"]").siblings("p.price").html("<span>套餐价：</span><i>&yen;</i>"+parseFloat(k.cmmdtys[m].accessoryPrice).toFixed(2));
$(".fitPartNumber[value="+l+"]").siblings("input.high").val(k.cmmdtys[m].price);
$(".fitPartNumber[value="+l+"]").siblings("input.low").val(k.cmmdtys[m].accessoryPrice);
if(parseFloat(k.cmmdtys[m].discount)>0){$(".fitPartNumber[value="+l+"]").siblings("span.label").html("已优惠&yen;"+parseFloat(k.cmmdtys[m].discount).toFixed(2)).show()
}else{$(".fitPartNumber[value="+l+"]").siblings("span.label").hide()
}$(".fitPartNumber[value="+l+"]").parent().show();
if(h){h=false;
if(sn.prdType=="S"){$("#J-tieIn").show();
$("#accessoryInfo").show();
if($("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#accessoryInfo").find("li[rel=#J-tieIn]").removeClass().addClass("current");
$("#J-setMeal").hide()
}iFourth.tieInTZM.init(function(i){CommonFourPage.getPassInfo(i)
})
}else{$("#J-tieIn").show();
$("li[rel=#J-tieIn]").show();
if($("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#listProContent").find("li[rel=#J-tieIn]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-setMeal]").removeClass().addClass("hide");
$("#J-setMeal").hide()
}$("#listProContent").find(".tabarea-items").length>0?$("#listProContent").show():$("#listProContent").hide();
iFourth.tieInTZM.init(function(i){CommonFourPage.getPassInfo(i)
})
}}}else{$(".fitPartNumber[value="+l+"]").parent().remove()
}}}iFourth.tieInRec()
}})
};
CommonFourPage.initCFitting=function(h){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}var a=false;
try{if(h!=""&&h.priceList!=undefined&&h.priceList.length>0){var c='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+h.mainPartNumber.substring(9,18)+'.html" target="_blank"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+h.mainPartNumber+'_1_120x120.jpg" alt="'+sn.itemDisplayName+'"/></a>';
c+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+h.mainPartNumber.substring(9,18)+'.html">'+sn.itemDisplayName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i>'+sn.promotionPrice+'</p><i class="plus"></i></div>';
c+='<div class="tiein-nav"><a name="item_'+sn.ninePartNumber+'_dapei_alldp" data-type="0" href="javascript:void(0);" class="current">全部搭配</a>';
c+='</div><div class="tiein-main" id="J-slide-tieIn">';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<div class="tiein-list"><ul id="dapei_slide">';
for(var f=0;
f<h.priceList.length;
f++){if(f<10){var g=h.priceList[f].partNumber;
var b=sn.elecProductDomain+"/"+h.priceList[f].vendorCode+"/"+g.substring(9,18)+".html";
c+='<li pass="'+g+'" class="" style="display: none;"><a name="item_'+sn.ninePartNumber+'_dapei_tj01p" target="_blank" href="'+b+'">';
if(h.priceList[f].type!="0"){c+='<img alt="'+h.priceList[f].itemDisplayName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+h.priceList[f].type+'_1_60x60.jpg" ></a>';
a=true
}else{c+='<img alt="'+h.priceList[f].itemDisplayName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+g+'_1_60x60.jpg" ></a>'
}c+='<p class="title"><a name="item_'+sn.ninePartNumber+'_dapei_tj01c" target="_blank" href="'+b+'">'+h.priceList[f].itemDisplayName+"</a></p>";
c+='<p class="price"><span>套餐价：</span><i>&yen;</i></p>';
c+='<span class="label" style="display:none;">已优惠&yen;</span>';
if(h.priceList[f].type!="0"){c+='<p pass="'+g+'" class="handle"><a href="javascript:void(0);">选择商品规格</a></p>'
}c+='<i class="plus"></i><input class="fitPartNumber" type="hidden" value="'+g+'"><input class="accessoryId" type="hidden" value=""><input class="high" type="hidden" value=""><input class="low" type="hidden" value=""><input name="item_'+sn.ninePartNumber+'_dapei_tj01p" class="check" value="" type="checkbox">';
if(h.priceList[f].type!="0"){c+='<div class="tiein-list-tzm"></div>'
}c+="</li>"
}}c+="</ul></div></div>";
c+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
c+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">'+sn.promotionPrice+'</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
c+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_dapei_buy02" href="javascript:Cart.addCartPJ();" class="btn-addcart-mini"></a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(c);
if(a){$("#J-tieIn").addClass("tiein-tzm")
}else{$("#J-tieIn").removeClass("tiein-tzm")
}$("#pro_jiage").html("<i>&yen</i>"+sn.promotionPrice);
$("#yuanjia").text(sn.promotionPrice);
CommonFourPage.getCFittingPrice(h.priceList)
}else{$("#J-tieIn").hide();
$("#J-setMeal").html("");
$("li[rel=#J-tieIn]").hide();
if($("#J-setMeal").length>0&&$("#J-setMeal").html()!=""){$("#listProContent").show()
}else{$("#listProContent").hide()
}}iFourth.win.scroll()
}catch(j){}};
CommonFourPage.initCsubFitting=function(h){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#accessoryInfo").hide();
iFourth.mainHeight();
return
}var a=false;
try{if(h!=""&&h.priceList!=undefined&&h.priceList.length>0){var c='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+sn.curSubPartNumber.substring(9,18)+'.html" target="_blank"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+sn.curSubPartNumber+'_1_120x120.jpg" alt="'+sn.productName+'"/></a>';
c+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/"+sn.vendorCode+"/"+sn.curSubPartNumber.substring(9,18)+'.html">'+sn.productName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i>'+sn.promotionPrice+'</p><i class="plus"></i></div>';
c+='<div class="tiein-nav"><a name="item_'+sn.ninePartNumber+'_dapei_alldp" data-type="0" href="javascript:void(0);" class="current">全部搭配</a>';
c+='</div><div class="tiein-main" id="J-slide-tieIn">';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<div class="tiein-list"><ul id="dapei_slide">';
for(var f=0;
f<h.priceList.length;
f++){if(f<10){var g=h.priceList[f].partNumber;
var b=sn.elecProductDomain+"/"+sn.vendorCode+"/"+g.substring(9,18)+".html";
c+='<li pass="'+g+'" class="" style="display: none;"><a name="item_'+sn.ninePartNumber+'_dapei_tj01p" target="_blank" href="'+b+'">';
if(h.priceList[f].type!="0"){c+='<img alt="'+h.priceList[f].itemDisplayName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+h.priceList[f].type+'_1_60x60.jpg" ></a>';
a=true
}else{c+='<img alt="'+h.priceList[f].itemDisplayName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+g+'_1_60x60.jpg" ></a>'
}c+='<p class="title"><a name="item_'+sn.ninePartNumber+'_dapei_tj01c" target="_blank" href="'+b+'">'+h.priceList[f].itemDisplayName+"</a></p>";
c+='<p class="price"><span>套餐价：</span><i>&yen;</i></p>';
c+='<span class="label" style="display:none;">已优惠&yen;</span>';
if(h.priceList[f].type!="0"){c+='<p pass="'+g+'" class="handle"><a href="javascript:void(0);">选择商品规格</a></p>'
}c+='<i class="plus"></i><input class="fitPartNumber" type="hidden" value="'+g+'"><input class="accessoryId" type="hidden" value=""><input class="high" type="hidden" value=""><input class="low" type="hidden" value=""><input name="item_'+sn.ninePartNumber+'_dapei_tj01p" class="check" value="" type="checkbox">';
if(h.priceList[f].type!="0"){c+='<div class="tiein-list-tzm"></div>'
}c+="</li>"
}}c+="</ul></div></div>";
c+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
c+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">'+sn.promotionPrice+'</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
c+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_dapei_buy02" href="javascript:gMain.addCartForPJ();" class="btn-addcart-mini"></a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(c);
$("#accessoryTitle").html('<li rel="#J-tieIn" class="current"><a name="item_'+sn.partNumber.substring(9,18)+'_dapei_tjdp" href="javascript:void(0);">推荐搭配</a></li>');
$("#accessoryTitle").show();
if(a){$("#J-tieIn").addClass("tiein-tzm")
}else{$("#J-tieIn").removeClass("tiein-tzm")
}CommonFourPage.getCFittingPrice(h.priceList)
}else{$("#J-tieIn").html("");
$("#accessoryTitle").hide();
$("#J-tieIn").hide();
$("li[rel=#J-tieIn]").hide();
if($("#J-setMeal").length>0&&$("#J-setMeal").html()!=""){$("#accessoryInfo").show()
}else{$("#accessoryInfo").hide()
}}iFourth.win.scroll()
}catch(j){}};
Recommend.initFittingReady=function(a,c){Recommend.fitPartNumber=a;
if(sn.isPreBuy!=2){try{$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+Recommend.fitPartNumber+"&vendorId="+(sn.vendorCode!=""?sn.vendorCode:"0000000000")+"&catGroupId="+sn.catenIds+"&cityId="+sn.cityId+"&sceneIds=8-10&count=12",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:c,success:function(e){iFourth.win.scroll()
}})
}catch(b){}}};
Recommend.callBackInitFittingReady=function(g){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}try{Recommend.fittingIndexs=[];
Recommend.fitingPartNumber=[];
var f=sn.vendorCode!=""?sn.vendorCode:"0000000000";
var l=g.sugGoods[0];
if(typeof l!="undefined"&&l.resCode!="02"&&l.skus.length>0){var a='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/"+sn.partNumber.substring(9,18)+'.html" target="_blank"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+sn.partNumber+'_1_120x120.jpg" alt="'+sn.itemDisplayName+'"/></a>';
a+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/"+sn.partNumber.substring(9,18)+'.html">'+sn.itemDisplayName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i></p><i class="plus"></i></div>';
a+='<div class="tiein-nav">';
a+='<a name="item_'+sn.ninePartNumber+'_rectjdpn_1-1_b_none_none_0" data-rec="true" href="javascript:void(0);" class="current">精选搭配</a><span>|</span>';
for(var h=0;
h<l.accCatgroups.length;
h++){a+='<a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(h+2)+'_b_none_none_0" data-type="'+(h+1)+'" href="javascript:Recommend.initCatFitting('+(h+1)+",'"+l.accCatgroups[h].accCatgroupId+"');\">"+l.accCatgroups[h].accCatgroupName+"</a>  ";
if(h!=l.accCatgroups.length-1){a+="<span>|</span>"
}}a+='</div><div class="tiein-main" id="J-slide-tieIn">';
a+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
a+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
a+='<div class="tiein-list"><ul id="dapei_slide">';
if(l.skus.length>0){for(var h=0;
h<l.skus.length;
h++){var n=l.skus[h].sugGoodsCode;
if($.inArray(n,Recommend.fitingPartNumber)<0){var c=l.skus[h].diffPrice;
var m=l.skus[h].accPrice;
if(m!=""&&m>0){var j=l.skus[h].accPrice;
if(c!=null&&c!=""&&m!=null&&m!=""){j=parseFloat(parseFloat(c)+parseFloat(m)).toFixed(2)
}Recommend.fitingPartNumber.push(n);
var b=sn.elecProductDomain+"/"+n.substring(9,18)+".html";
a+='<li class="" data-id="'+n+'" data-rec="true"><a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(h+1)+"_p_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'" id="baoguang_rectjdpn_1-'+(h+1)+"_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'" target="_blank" href="'+b+"?src=item_"+sn.ninePartNumber+"_rectjdpn_1-"+(h+1)+"_p_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'"><img title="'+l.skus[h].sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+n+'_1_60x60.jpg" ></a>';
a+='<p class="title" title="'+l.skus[h].sugGoodsName+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(h+1)+"_c_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'" target="_blank" href="'+b+"?src=item_"+sn.ninePartNumber+"_rectjdpn_1-"+(h+1)+"_c_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'">'+l.skus[h].sugGoodsName+"</a></p>";
a+='<p class="price"><span>套餐价：</span><i>&yen;</i>'+m+"</p>";
if(c!=""&&c>0){a+='<span class="label">已优惠&yen;'+c+"</span>"
}a+='<i class="plus"></i>';
a+='<input class="fitPartNumber" type="hidden" value="'+l.skus[h].sugGoodsCode+'">';
a+='<input class="accessoryId" type="hidden" value="'+l.skus[h].activityId+'">';
a+='<input type="hidden" value="'+j+'" class="high">';
a+='<input type="hidden" value="'+m+'" class="low">';
a+='<input name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(h+1)+"_e_0000000000_"+n.substring(9,18)+"_"+l.skus[h].handwork+'" class="check"  type="checkbox" value='+l.skus[h].activityId+"></li>"
}}}}a+='</ul></div><div class="tiein-main-empty"><i></i><span>抱歉，您选择的搭配商品已售完，欢迎您选择其他商品！</span></div></div>';
a+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
a+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">0.00</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
a+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_rectjdpn_1-1_b_0000000000_none_0" href="javascript:Cart.addCartPJ();" class="btn-addcart-mini"></a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(a);
$("#J-tieIn").show();
$("li[rel=#J-tieIn]").show();
$("#pro_jiage").html("<i>&yen</i>"+sn.promotionPrice);
$("#yuanjia").text(sn.promotionPrice);
if($("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#listProContent").find("li[rel=#J-tieIn]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-setMeal]").removeClass();
$("#J-setMeal").hide()
}else{$("#listProContent").find("li[rel=#J-setMeal]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-tieIn]").removeClass();
$("#J-setMeal").show()
}$("#listProContent").find(".tabarea-items").length>0?$("#listProContent").show():$("#listProContent").hide();
iFourth.tieInRec2.init();
runAnalyseByClass("baoguang_rectjdpn_1")
}else{$("#J-tieIn").hide();
$("#J-setMeal").html("");
$("li[rel=#J-tieIn]").hide();
if($("#J-setMeal").length>0&&$("#J-setMeal").html()!=""){$("#listProContent").show()
}else{$("#listProContent").hide()
}}}catch(k){}};
Recommend.subCallBackInitFittingReady=function(f){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#accessoryInfo").hide();
iFourth.mainHeight();
return
}Recommend.fittingIndexs=[];
Recommend.fitingPartNumber=[];
var j=f.sugGoods[0];
if(typeof j!="undefined"&&j.resCode!="02"&&j.skus.length>0){var a='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/"+sn.curSubPartNumber.substring(9,18)+'.html" target="_blank"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+sn.curSubPartNumber+'_1_120x120.jpg" alt="'+sn.itemDisplayName+'"/></a>';
a+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/"+sn.curSubPartNumber.substring(9,18)+'.html">'+sn.itemDisplayName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i></p><i class="plus"></i></div>';
a+='<div class="tiein-nav">';
var e=sn.vendorCode==""?"0000000000":sn.vendorCode;
a+='<a name="item_'+sn.ninePartNumber+'_rectjdpn_1-1_b_none_none_0" data-rec="true" href="javascript:void(0);" class="current">精选搭配</a><span>|</span>';
for(var g=0;
g<j.accCatgroups.length;
g++){a+='<a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(g+2)+'_b_none_none_0" data-type="'+(g+1)+'" href="javascript:Recommend.initCatFitting('+(g+1)+",'"+j.accCatgroups[g].accCatgroupId+"');\">"+j.accCatgroups[g].accCatgroupName+"</a>  ";
if(g!=j.accCatgroups.length-1){a+="<span>|</span>"
}}a+='</div><div class="tiein-main" id="J-slide-tieIn">';
a+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
a+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
a+='<div class="tiein-list"><ul id="dapei_slide">';
if(j.skus.length>0){for(var g=0;
g<j.skus.length;
g++){var l=j.skus[g].sugGoodsCode;
if($.inArray(l,Recommend.fitingPartNumber)<0){var c=j.skus[g].diffPrice;
var k=j.skus[g].accPrice;
if(k!=""&&k>0){var h=j.skus[g].accPrice;
if(c!=null&&c!=""&&k!=null&&k!=""){h=parseFloat(parseFloat(c)+parseFloat(k)).toFixed(2)
}Recommend.fitingPartNumber.push(l);
var b=sn.elecProductDomain+"/"+l.substring(9,18)+".html";
a+='<li class="" data-id="'+l+'" data-rec="true"><a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(g+1)+"_p_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'" id="baoguang_rectjdpn_1-'+(g+1)+"_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'" target="_blank" href="'+b+"?src=item_"+sn.ninePartNumber+"_rectjdpn_1-"+(g+1)+"_p_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'"><img title="'+j.skus[g].sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+l+'_1_60x60.jpg" ></a>';
a+='<p class="title" title="'+j.skus[g].sugGoodsName+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(g+1)+"_c_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'" target="_blank" href="'+b+"?src=item_"+sn.ninePartNumber+"_rectjdpn_1-"+(g+1)+"_c_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'">'+j.skus[g].sugGoodsName+"</a></p>";
a+='<p class="price"><span>套餐价：</span><i>&yen;</i>'+k+"</p>";
if(c!=""&&c>0){a+='<span class="label">已优惠&yen;'+c+"</span>"
}a+='<i class="plus"></i>';
a+='<input class="fitPartNumber" type="hidden" value="'+j.skus[g].sugGoodsCode+'">';
a+='<input class="accessoryId" type="hidden" value="'+j.skus[g].activityId+'">';
a+='<input type="hidden" value="'+h+'" class="high">';
a+='<input type="hidden" value="'+k+'" class="low">';
a+='<input name="item_'+sn.ninePartNumber+"_rectjdpn_1-"+(g+1)+"_e_0000000000_"+l.substring(9,18)+"_"+j.skus[g].handwork+'" class="check"  type="checkbox" value='+j.skus[g].activityId+"></li>"
}}}}a+='</ul></div><div class="tiein-main-empty"><i></i><span>抱歉，您选择的搭配商品已售完，欢迎您选择其他商品！</span></div></div>';
a+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
a+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">0.00</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
a+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_rectjdpn_1-1_b_0000000000_none_0" href="javascript:gMain.addCartForPJ();" class="btn-addcart-mini"></a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(a);
$("#pro_jiage").html("<i>&yen</i>"+sn.promotionPrice);
$("#yuanjia").text(sn.promotionPrice);
$("#accessoryTitle").html('<li rel="#J-tieIn" class="current"><a name="item_'+sn.partNumber.substring(9,18)+'_dapei_tjdp" href="javascript:void(0);">推荐搭配</a></li>');
$("#accessoryTitle").show();
$("#J-tieIn").show();
$("#accessoryInfo").show();
iFourth.tieInRec2.init();
runAnalyseByClass("baoguang_rectjdpn_1")
}else{$("#J-tieIn").html("");
$("#accessoryTitle").hide();
$("#J-tieIn").hide()
}};
CommonFourPage.getgroupCmmdtyRelation=function(f,b){var a=typeof sn.passPartNumber!="undefined"?sn.curSubPartNumber:sn.partNumber;
if(sn.vendorCode!=""){try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/groupCmmdtyRelation_"+a+"_"+sn.vendorCode+".html",type:"get",async:true,dataType:"json",success:function(e){f(e)
},error:function(){b()
}})
}catch(c){}}};
Recommend.initCatFitting=function(a,b){try{if($.inArray(a,Recommend.fittingIndexs)<0){Recommend.fittingIndexs.push(a);
$.ajax({url:sn.tuijianDomain+"/recommend-portal/recommend/paramsBiz.jsonp?parameter="+Recommend.fitPartNumber+"&vendorId="+(sn.vendorCode!=""?sn.vendorCode:"0000000000")+"&catGroupId="+sn.catenIds+"&accCatGroupId="+b+"&cityId="+sn.cityId+"&sceneIds=8-11&count=12",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"callBackinitCatFitting",success:function(h){var l=h.sugGoods[0];
if(l!=undefined&&l.resCode!="02"){if(l.skus.length>0){var e="";
for(var j=0;
j<l.skus.length;
j++){var o=l.skus[j].sugGoodsCode;
if($.inArray(o,Recommend.fitingPartNumber)<0){var g=l.skus[j].diffPrice;
var m=l.skus[j].accPrice;
if(m!=""&&m>0){var k=l.skus[j].accPrice;
if(g!=null&&g!=""&&m!=null&&m!=""){k=parseFloat(parseFloat(g)+parseFloat(m)).toFixed(2)
}Recommend.fitingPartNumber.push(o);
var f=sn.elecProductDomain+"/"+o.substring(9,18)+".html";
e+='<li class="" data-type="'+a+'" data-id="'+o+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(j+1)+"_p_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'" id="baoguang_rectjdpn_'+(a+1)+"-"+(j+1)+"_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'" target="_blank" href="'+f+"?src=item_"+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(j+1)+"_p_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'"><img title="'+l.skus[j].sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+o+'_1_60x60.jpg" ></a>';
e+='<p class="title" title="'+l.skus[j].sugGoodsName+'"><a name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(j+1)+"_c_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'" target="_blank" href="'+f+"?src=item_"+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(j+1)+"_c_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'">'+l.skus[j].sugGoodsName+"</a></p>";
e+='<p class="price"><span>套餐价：</span><i>&yen;</i>'+m+"</p>";
if(g!=""&&g>0){e+='<span class="label">已优惠&yen;'+g+"</span>"
}e+='<i class="plus"></i>';
e+='<input class="fitPartNumber" type="hidden" value="'+l.skus[j].sugGoodsCode+'">';
e+='<input class="accessoryId" type="hidden" value="'+l.skus[j].sugGoodsId+'">';
e+='<input type="hidden" value="'+k+'" class="high">';
e+='<input type="hidden" value="'+m+'" class="low">';
e+='<input name="item_'+sn.ninePartNumber+"_rectjdpn_"+(a+1)+"-"+(j+1)+"_e_0000000000_"+o.substring(9,18)+"_"+l.skus[j].handwork+'" class="check"  type="checkbox" value='+l.skus[j].activityId+"></li>"
}}else{var n=iFourth.tieInRec2.list.children("li").filter("'[data-id=\""+o+"\"]'");
if(n.length>0){$(n[0]).attr("data-type",a)
}}}$("#dapei_slide").append(e)
}}iFourth.tieInRec2.showType(a);
iFourth.tieInRec2.update();
runAnalyseByClass("baoguang_rectjdpn_"+(a+1))
}})
}else{iFourth.tieInRec2.showType(a);
iFourth.tieInRec2.update()
}}catch(c){}};
CommonFourPage.storeService={init:function(){var a=this;
sn.o2oNinePartNumber="";
iFourth.o2oPop.init(function(b){a.afterShowPopPage(b)
})
},hide:function(){$(".proinfo-o2o").hide();
iFourth.mainHeight()
},show:function(){if(sn.storeServiceList!=""){$(".proinfo-o2o").show()
}iFourth.mainHeight()
},jsdShow:function(){$("#btn_jsd").parent().show();
$(".proinfo-o2o").show();
iFourth.mainHeight()
},jsdHide:function(){$("#btn_jsd").parent().hide();
iFourth.mainHeight()
},getStroeServiceList:function(a,b){sn.o2oNinePartNumber=a;
sn.storeServiceList="";
var c=this;
sn.sgComplete=false,sn.vbComplete=false,sn.ffComplete=false;
this.judgeIsShowRealExperience(a);
if(b!="0"){c.judgeIsShowSpotGoods(a)
}else{$(".proinfo-o2o").find(".item2").hide();
sn.sgComplete=true
}c.judgeIsShowVBuy();
this.judgeIsShowFreeFilm()
},getGuideShop:function(){var a="";
if(sn.curSubPartNumber==undefined||sn.curSubPartNumber==""){a=sn.partNumber
}else{a=sn.curSubPartNumber
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getGuideShop_"+a+"_"+sn.vendorCode+"_"+sn.mdmCityId+"_.html",type:"get",cache:true,dataType:"json",success:function(b){if(b.errCode=="0"){$(".proinfo-o2o").find(".item6").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").hide();
$(".proinfo-o2o").find(".item6").hide()
}}})
},judgeIsShowRealExperience:function(a){$.ajax({url:sn.itemDomain+"/pds-web/ajax/isExsitPrototypeInfo_"+a+"_"+sn.cityId+".html",type:"get",async:false,dataType:"json",success:function(b){if(b&&b.isExsitPrototypeInfo){sn.storeServiceList+="realExperience|";
$(".proinfo-o2o").find(".item5").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").find(".item5").hide()
}iFourth.mainHeight()
}})
},judgeIsShowSpotGoods:function(a){$.ajax({url:"http://"+sn.domain+"/emall/mdjt_10052_10051_000000000"+a+"_"+sn.districtId+"_"+sn.vendor+"_CommonFourPage.storeService.processSpotGoods_.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"CommonFourPage.storeService.processSpotGoods",success:function(b){}})
},processSpotGoods:function(a){if(a.mdjtsupport=="1"){sn.storeServiceList+="spotGoods|";
$(".proinfo-o2o").find(".item2").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").find(".item2").hide()
}sn.sgComplete=true;
iFourth.mainHeight()
},judgeIsShowVBuy:function(){sn.selectedDistrictId=typeof sn.selectedDistrictId=="undefined"?"":sn.selectedDistrictId;
$.ajax({url:sn.storeServiceRoot+"pds/ajax/isSupportVStand-"+sn.cityId+"-"+sn.selectedDistrictId+"-"+sn.catenIds+"-CommonFourPage.storeService.vbuyCallBack.jsonp",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"CommonFourPage.storeService.vbuyCallBack",success:function(a){}})
},vbuyCallBack:function(a){if(a.resultCode=="Y"){sn.storeServiceList+="vBuy|";
$(".proinfo-o2o").find(".item3").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").find(".item3").hide()
}sn.vbComplete=true;
iFourth.mainHeight()
},judgeIsShowFreeFilm:function(){$.ajax({url:sn.storeServiceRoot+"pds/ajax/isSupportM-"+sn.cityId+"-"+sn.catenIds+"-CommonFourPage.storeService.freeFilmCallBack.jsonp",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"CommonFourPage.storeService.freeFilmCallBack",success:function(a){}})
},freeFilmCallBack:function(a){if(a.resultCode=="Y"){sn.storeServiceList+="freeFilm|";
$(".proinfo-o2o").find(".item4").show();
$(".proinfo-o2o").show()
}else{$(".proinfo-o2o").find(".item4").hide()
}sn.ffComplete=true;
iFourth.mainHeight()
},judgeIsShowStoreService:function(){if(sn.storeServiceList==""){$(".proinfo-o2o").hide()
}else{$(".proinfo-o2o").show()
}iFourth.mainHeight();
sn.sgComplete=false;
sn.vbComplete=false;
sn.ffComplete=false
},afterShowPopPage:function(a){fillInDistrictInfo(a);
initServiceTab($(a).parent().attr("class"));
refreshStoreList()
}};
function fillInDistrictInfo(b){$("#o2o_service_clone_li_districtId").siblings("li").remove();
sn.selectedDistrictId="";
sn.selectedDistrictName="";
var a=sn.ipServiceHost+"/districtList-"+sn.mdmCityId+"-districtListCallback.htm";
$.ajax({url:a,type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"districtListCallback",success:function(i){if(i&&i!=""&&i!=null){var g=i.districts;
for(var f=0;
f<g.length;
f++){var h=g[f];
var c=$("#o2o_service_clone_li_districtId").clone().removeAttr("style").removeAttr("id");
c.attr("districtId",h.commerceId);
c.find("a").text(h.name).attr("name","item_"+sn.ninePartNumber+"_mdfw_qu");
$("#o2o_service_clone_li_districtId").parent().append(c);
c.removeClass()
}iFourth.o2oPop.updateFilter()
}var e=$(b).parent().attr("class");
if(e=="item2"){$("#o2o_service_clone_li_districtId").removeClass("current").addClass("disable");
sn.selectedDistrictId=sn.districtId;
var j=$("#o2o_service_ul_districtList li:not(#o2o_service_clone_li_districtId)");
$.each(j,function(l,k){if($(k).attr("districtid")==sn.districtId){$(k).addClass("current").siblings().removeClass("current")
}})
}else{$("#o2o_service_clone_li_districtId").removeClass("disable").addClass("current");
sn.selectedDistrictId=""
}sn.selectedDistrictName=""
}});
$("#o2o_service_ul_districtList li").die().live("click",function(){var c=$("#o2o_service_store_service_ul li.current").attr("id");
if(!(c=="win_o2o_spotGoods"&&$(this).attr("id")=="o2o_service_clone_li_districtId")){$(this).addClass("current").siblings("li").removeClass("current");
sn.selectedDistrictId=$(this).attr("districtId");
sn.selectedDistrictName=$("#o2o_service_ul_districtList li.current a").html();
if(sn.selectedDistrictName=="全部"){sn.selectedDistrictName=""
}refreshStoreList()
}})
}function initServiceTab(a){var f=$(this);
var e=sn.storeServiceList;
if(e!=""){var c=e.split("|");
$("li[id^='win_o2o_']").hide();
for(var b in c){$("#win_o2o_"+c[b]).show()
}}$("#win_o2o_vBuy").parent().find("li").removeAttr("class");
if(a=="item2"){sn.selectedStoreService="spotGoods";
$("#win_o2o_spotGoods").attr("class","current")
}else{if(a=="item5"){sn.selectedStoreService="realExperience";
$("#win_o2o_realExperience").attr("class","current")
}else{if(a=="item3"){sn.selectedStoreService="vBuy";
$("#win_o2o_vBuy").attr("class","current")
}else{if(a=="item4"){sn.selectedStoreService="freeFilm";
$("#win_o2o_freeFilm").attr("class","current")
}else{if(a=="item6"){sn.selectedStoreService="guideShop";
$("#win_o2o_guideShop").attr("class","current");
$("#win_o2o_guideShop").show()
}else{sn.selectedStoreService=""
}}}}}$("#o2o_service_store_service_ul").find("li").unbind().bind("click",function(){$(this).attr("class","current");
$(this).siblings("li").removeAttr("class");
var g=$(this).attr("id");
if(g=="win_o2o_spotGoods"){sn.selectedStoreService="spotGoods";
$("#win_o2o_spotGoods").attr("class","current");
a="item2"
}else{if(g=="win_o2o_realExperience"){sn.selectedStoreService="realExperience";
$("#win_o2o_realExperience").attr("class","current");
a="item3"
}else{if(g=="win_o2o_vBuy"){sn.selectedStoreService="vBuy";
$("#win_o2o_vBuy").attr("class","current");
a="item4"
}else{if(g=="win_o2o_freeFilm"){sn.selectedStoreService="freeFilm";
$("#win_o2o_freeFilm").attr("class","current");
a="item4"
}else{if(g=="win_o2o_guideShop"){sn.selectedStoreService="guideShop";
$("#win_o2o_guideShop").attr("class","current");
a="item6";
$("#win_o2o_guideShop").show()
}else{sn.selectedStoreService=""
}}}}}if(a=="item2"&&sn.selectedDistrictId==""){$("#o2o_service_clone_li_districtId").removeClass("current").addClass("disable").siblings("li").removeClass("current");
var h=$("#o2o_service_ul_districtList li:not(#o2o_service_clone_li_districtId)");
$.each(h,function(k,j){if($(j).attr("districtid")==sn.districtId){$(j).addClass("current").siblings().removeClass("current")
}})
}else{if(a=="item2"){$("#o2o_service_clone_li_districtId").removeClass().addClass("disable")
}else{$("#o2o_service_clone_li_districtId").removeClass("disable")
}}refreshStoreList()
})
}function refreshStoreList(){var a=this;
$(".o2o-service-main").addClass("o2o-com-loading");
$("#o2o-service-clone-storeList-li").siblings("li").remove();
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show();
if(sn.selectedStoreService=="realExperience"){invokeRealExperience()
}else{if(sn.selectedStoreService=="spotGoods"){invokeShowSpotGoods()
}else{if(sn.selectedStoreService=="vBuy"){invokeVBuy()
}else{if(sn.selectedStoreService=="freeFilm"){invokeFreeFilm()
}else{if(sn.selectedStoreService=="guideShop"){invokeGuideShop()
}else{}}}}}}var guideShopMarker="";
function invokeGuideShop(){var a="";
if(sn.curSubPartNumber==undefined||sn.curSubPartNumber==""){a=sn.partNumber
}else{a=sn.curSubPartNumber
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getGuideShop_"+a+"_"+sn.vendorCode+"_"+sn.mdmCityId+"_"+encodeURIComponent(sn.selectedDistrictName)+".html",type:"get",cache:true,dataType:"json",success:function(f){if(f&&f.guideShopList&&f.guideShopList.length!=0){var g=f.guideShopList;
var b="";
for(var c=0;
c<g.length;
c++){$(".o2o-service-main").removeClass("o2o-com-loading");
var e=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
b+=g[c].storeCode+",";
e.attr("class","storeId_"+g[c].storeCode);
$("#o2o-service-clone-storeList-li").parent().append(e)
}if(b!=""){b=b.substring(0,b.length-1)
}guideShopMarker="Y";
fillStoreDetailInfoByCode(b,"很抱歉，该区域暂无门店支持到店试穿服务，正努力开放中。。。");
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-shop").text("很抱歉，该区域暂无门店支持到店试穿服务，正努力开放中。。。");
$("#win_o2o .no-shop").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}})
}function invokeRealExperience(){var a=sn.selectedDistrictId==""?"-1":sn.selectedDistrictId;
$.ajax({url:sn.itemDomain+"/pds-web/ajax/getPrototypeInfo_"+sn.o2oNinePartNumber+"_"+sn.cityId+"_"+a+".html",type:"get",async:false,dataType:"json",success:function(h){if(h&&h.storeInfoList&&h.storeInfoList.length!=0){var i=h.storeInfoList;
var f="";
for(var e in i){$(".o2o-service-main").removeClass("o2o-com-loading");
var g=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
if(i[e].custNum!=""){var b=sn.vendorCode==""?"0000000000":sn.vendorCode;
var c=sn.yxImRoot+"webChat.htm?cityId="+sn.cityId+"&clerkId="+i[e].custNum+"&productId="+sn.ninePartNumber;
g.find(".handle>a").html("咨询店员&gt;").attr("href",c).attr("name","item_"+sn.ninePartNumber+"_mdfw_yundaogou");
g.find(".handle").show()
}f+=i[e].storeCode+",";
g.attr("class","storeId_"+i[e].storeCode);
$("#o2o-service-clone-storeList-li").parent().append(g)
}if(f!=""){f=f.substring(0,f.length-1)
}fillStoreDetailInfoByCode(f,"很抱歉，该区域暂无门店有样机，正努力出样中•••");
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-shop").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-goods").text("很抱歉，该区域暂无门店有样机，正努力出样中•••");
$("#win_o2o .no-goods").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}})
}function invokeShowSpotGoods(){$.ajax({url:"http://"+sn.domain+"/emall/mdjtCmd?partnumber=000000000"+sn.o2oNinePartNumber+"&districtId="+sn.selectedDistrictId+"&oprType=1&price="+sn.promotionPrice,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"spotGoodsCallBack",success:function(a){}})
}function spotGoodsCallBack(e){if(e.rs&&e.rs.length!=0){var e=e.rs;
var b="";
for(var a in e){$(".o2o-service-main").removeClass("o2o-com-loading");
var c=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
c.find(".handle>a").html("马上自提&gt;").removeAttr("target").attr("href","javascript:Cart.spotGoods('"+e[a].storeId+"');").attr("name","item_"+sn.ninePartNumber+"_mdfw_mszt");
c.find(".handle").show();
b+=e[a].storeId+",";
c.attr("class","storeId_"+e[a].storeId);
$("#o2o-service-clone-storeList-li").parent().append(c)
}fillStoreDetailInfoByCode(b,"很抱歉，该区域暂无门店有货，正努力补货中•••");
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-shop").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-goods").text("很抱歉，该区域暂无门店有货，正努力补货中•••");
$("#win_o2o .no-goods").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}function invokeVBuy(){$.ajax({url:sn.storeServiceRoot+"pds/ajax/storeorderstand-"+sn.cityId+"-"+sn.selectedDistrictId+"-vbuyStoreDetailInfoCallback.jsonp",type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"vbuyStoreDetailInfoCallback",success:function(c){if(c.length!=0){for(var a in c){$(".o2o-service-main").removeClass("o2o-com-loading");
var b=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
b.find(".handle>a").html("预约V购&gt;").attr("href",sn.storeServiceRoot+"v.htm").attr("name","item_"+sn.ninePartNumber+"_mdfw_yuyuevgou");
b.find(".handle").show();
b.find("h5>a").text(c[a].storeName).attr("href",sn.storeServiceRoot+c[a].bwStoreNo+".htm").attr("name","item_"+sn.ninePartNumber+"_mdfw_store");
b.find("p").text("地址："+c[a].storeAddress).attr("title",c[a].storeAddress);
b.removeAttr("style");
$("#o2o-service-clone-storeList-li").parent().append(b)
}iFourth.o2oPop.updateContent();
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-shop").text("很抱歉，该区域暂无门店支持V购服务，正努力开放中•••");
$("#win_o2o .no-shop").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}})
}function invokeFreeFilm(){$.ajax({url:sn.storeServiceRoot+"pds/ajax/storeliststand-"+sn.cityId+"-"+sn.selectedDistrictId+"--freeFilmStoreDetailInfoCallback.jsonp",type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"freeFilmStoreDetailInfoCallback",success:function(c){if(c.length!=0){for(var a in c){$(".o2o-service-main").removeClass("o2o-com-loading");
var b=$("#o2o-service-clone-storeList-li").clone().removeAttr("id");
b.find("h5>a").text(c[a].storeName).attr("href",sn.storeServiceRoot+c[a].bwStoreNo+".htm").attr("name","item_"+sn.ninePartNumber+"_mdfw_store");
b.find("p").text("地址："+c[a].storeAddress).attr("title",c[a].storeAddress);
b.removeAttr("style");
$("#o2o-service-clone-storeList-li").parent().append(b)
}iFourth.o2oPop.updateContent();
$("#win_o2o .no-shop").hide();
$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").show()
}else{$("#win_o2o .no-goods").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-shop").text("很抱歉，该区域暂无门店支持贴膜服务，正努力开放中•••");
$("#win_o2o .no-shop").show()
}$(".o2o-service-main").removeClass("o2o-com-loading")
}})
}function fillStoreDetailInfoByCode(b,a){$.ajax({url:sn.storeServiceRoot+"pds/ajax/storeinfo-"+b+"-storeDetailInfoCallback.jsonp",type:"GET",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"storeDetailInfoCallback",success:function(e){for(var c in e){var f=$(".o2o-service-main").find("li.storeId_"+e[c].bwStoreNo);
if(guideShopMarker=="Y"){f.find("h5").html("<i class='icon'></i><span>"+e[c].storeName+"</span>")
}else{f.find("h5>a").text(e[c].storeName).attr("href",sn.storeServiceRoot+e[c].bwStoreNo+".htm").attr("name","item_"+sn.ninePartNumber+"_mdfw_store")
}f.find("p").text("地址："+e[c].storeAddress).attr("title",e[c].storeAddress);
f.removeAttr("style")
}guideShopMarker="";
if($(".o2o-service-main").find("li:visible").length==0){$("#win_o2o .no-shop").hide();
$("#win_o2o .o2o-service-main").hide();
$("#win_o2o .no-goods").text(a);
$("#win_o2o .no-goods").show()
}iFourth.o2oPop.updateContent()
}})
}var Renxf=Renxf||{};
Renxf.freenessInfo="";
Renxf.turnGrayFlag="N";
Renxf.loginFlag="N";
Renxf.buttonId="";
Renxf.buttonClass="";
Renxf.runFlag="N";
Renxf.freenessPay=function(){if((sn.isPreBuy!=2&&sn.renxfSwitch=="1")||sn.groupFlag){var a=sn.itemDomain+"/pds-web/ajax/getFreenessPayInfoNew_"+sn.promotionPrice+"_"+sn.vendorCode+"_"+sn.partNumber+".html";
if(sn.prdType=="S"){a=sn.itemDomain+"/pds-web/ajax/getFreenessPayInfoNew_"+sn.promotionPrice+"_"+sn.vendorCode+"_"+sn.curSubPartNumber+".html"
}if(sn.groupFlag){a=sn.itemDomain+"/pds-web/ajax/getFreenessPayInfoNew_"+sn.groupPromotionPrice+"_"+sn.vendorCode+"_"+sn.groupPartnumber+".html"
}if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){$.ajax({url:a,type:"get",async:false,dataType:"json",success:function(b){Renxf.freenessInfo=b;
$.ajax({type:"get",url:sn.rxfCompetency,cache:true,async:false,dataType:"jsonp",jsonpCallback:"Renxf.rxfCompetencyCallBack",success:function(){}})
},error:function(){$("#freenessPay").hide();
iFourth.mainHeight()
}})
},function(){$.ajax({url:a,type:"get",async:false,dataType:"json",success:function(b){Renxf.freenessInfo=b;
Renxf.haveNoFreeness(b)
},error:function(b){$("#freenessPay").hide();
iFourth.mainHeight()
}})
})
}}};
Renxf.haveFreeness=function(e){if(e!=null&&e!=""&&e.freenessPay!=undefined&&e.freenessPay!=""){var f=e.freenessPay;
var a="";
for(var b=0;
b<f.length;
b++){var c=f[b].payPeriods;
if(c!=""&&c.length==2&&c.substring(0,1)=="0"){c=c.substring(1,2)
}if(f[b].payAccrual==0){var g=c+"期";
if(c=="1"){g="30天免息";
a+='<li data-id="'+c+'" class="renxf-item renxf-item-mianxi"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+g+"<br><i></i></a></li>"
}else{g="¥"+f[b].payAmt+"×"+g;
a+='<li data-id="'+c+'" class="renxf-item h-charge-info rxf-hui"><em class="i-hui"></em><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+g+"<br><i></i></a>";
a+='<div class="rx-charge">0手续费<span class="tri-pointer"><i class="inner-tri"></i></span></div>';
a+="</li>"
}}else{var g="¥"+f[b].payAmt+"×"+c+"期";
a+='<li data-id="'+c+'" class="renxf-item h-charge-info"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_gmq_rxffqfs"+c+'">'+g+"<br><i></i></a>";
a+='<div class="rx-charge">含手续费：费率'+f[b].payRate*100+"%,¥"+f[b].payAccrual+"x"+c+'期<span class="tri-pointer"><i class="inner-tri"></i></span></div>';
a+="</li>"
}}if(a!=""){$("#freenessInfo").html(a);
$("#freenessInfo").show();
$("#freenessPay").show();
$("#freenessUnable").hide();
iFourth.renxingfu()
}}if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#freenessPay").hide()
}iFourth.bindRxf();
iFourth.mainHeight()
};
Renxf.haveNoFreeness=function(e){if(e!=null&&e!=""&&e.freenessPay!=undefined&&e.freenessPay!=""){var f=e.freenessPay;
var a="";
for(var b=0;
b<f.length;
b++){var c=f[b].payPeriods;
if(c!=""&&c.length==2&&c.substring(0,1)=="0"){c=c.substring(1,2)
}var g=c+"期";
if(c=="1"){g="30天免息";
a+='<li class="renxf-item renxf-item-mianxi"><a href="javascript:void(0);">'+g+"<br><i></i></a></li>"
}else{g="¥"+f[b].payAmt+"×"+g;
if(f[b].payAccrual==0){a+='<li class="renxf-item rxf-hui"><em class="i-hui"></em><a href="javascript:void(0);">'+g+"<br><i></i></a></li>"
}else{a+='<li class="renxf-item"><a href="javascript:void(0);">'+g+"<br><i></i></a></li>"
}}}if(a!=""){$("#freenessUnable").html(a);
$("#freenessUnable").show();
$("#freenessLogin").show();
$("#freenessOpen").hide();
$("#freenessInfo").hide();
$("#freenessPay").show();
iFourth.renxingfu()
}}if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#freenessPay").hide()
}iFourth.mainHeight()
};
Renxf.rxfCompetencyCallBack=function(a){if(a!=""&&a.accountState!=undefined){if(a.accountState=="00"){if(PriceShow.status!=undefined&&PriceShow.status==1){Renxf.turnGrayAtLogin()
}else{if(Renxf.turnGrayFlag!="S"){$("#freenessLogin").hide();
$("#freenessOpen").hide();
Renxf.haveFreeness(Renxf.freenessInfo);
if(Renxf.loginFlag=="Y"){Renxf.withoutFreight()
}if(Renxf.turnGrayFlag=="Y"){Renxf.turnGrayAtLogin()
}}}}else{if(a.accountState=="01"){Renxf.haveNoFreeness(Renxf.freenessInfo);
$("#freenessLogin").hide();
$("#freenessOpen").show()
}else{if(a.accountState=="02"){$("#freenessPay").hide()
}}}}else{$("#freenessPay").hide()
}iFourth.mainHeight()
};
Renxf.login=function(){$("body").AjaxLogin({success:function(){if(sn.isPreBuy!="1"&&sn.promotionPrice!=""&&sn.promotionPrice!=undefined){if(sn.invStatus=="0"||sn.invStatus=="2"||sn.invStatus=="3"){Renxf.turnGray()
}else{Renxf.loginFlag="Y";
Renxf.freenessPay()
}}}})
};
Renxf.turnGray=function(){if(Renxf.freenessInfo==""){Renxf.turnGrayFlag="Y"
}else{Renxf.turnGrayFlag="S";
Renxf.haveNoFreeness(Renxf.freenessInfo);
$("#freenessOpen").hide();
$("#freenessLogin").hide();
$("#freenessPay").hide()
}iFourth.mainHeight()
};
Renxf.turnGrayAtLogin=function(){Renxf.haveNoFreeness(Renxf.freenessInfo);
$("#freenessPay").hide();
$("#freenessLogin").hide();
$("#freenessPay").hide();
iFourth.mainHeight()
};
Renxf.withoutFreight=function(){if(sn.prdType=="S"){if(sn.vendorCode==""){if(sn.shipOffSet<0||typeof sn.shipOffSet=="undefined"){Renxf.turnGrayAtLogin()
}}else{if(sn.shippingCharge=="-1"||typeof sn.shippingCharge=="undefined"){Renxf.turnGrayAtLogin()
}}}else{if(sn.vendorCode==""){if(sn.shipOffSet<0||typeof sn.shipOffSet=="undefined"){Renxf.turnGrayAtLogin()
}}else{if(sn.freight=="-1"||typeof sn.freight=="undefined"){Renxf.turnGrayAtLogin()
}}}Renxf.loginFlag=="N"
};
CommonFourPage.aftermarket=function(a){if(sn.catalogId==22001){return
}var f="";
f+='<div class="after-market-hd" id="suningService"><h4>售后服务</h4></div>';
f+='<div class="after-market-cnt">';
f+='<div class="guarantees">';
f+='<p id="productService">'+a+"</#if></p>";
f+="<p>苏宁易购向您保证所售商品均为正品行货，与您亲临商场选购的商品享受相同的质量保证。本站为您提供具有竞争力的商品价格和服务保障，请放心购买！</p>";
f+="<p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p>";
f+="</div>";
f+="</div>";
f+='<div class="after-market-hd">';
f+='<h4>退换货流程</h4><span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
f+="</div>";
f+='<div class="after-market-cnt">';
f+='<div class="return-process"><img width="760" height="140" alt="退换货流程图" lazy-src="'+sn.amPdsRelation+'images/return-process.jpg"></div>';
f+="</div>";
f+='<div class="after-market-hd"><h4>温馨提示</h4></div>';
f+='<div class="after-market-cnt">';
f+='<div class="declare">';
f+="<p>1、网站为您提供的送货、安装、维修等服务可能需收取一定的服务费和远程费；</p>";
f+="<p>2、服务中可能涉及的材料费请以服务工程师出示的报价单为准；</p>";
f+='<p>3、亲爱的顾客，苏宁承诺所售产品均为正品，如您购物环节遇到任何问题，请第一时间<a target="_blank" href="http://online.suning.com/webchat/index.jsp?url=https%3A%2F%2Fmember.suning.com%2Femall%2FMyGiftTicket%3FstoreId%3D10052%26catalogId%3D10051%26URL%3DMyGiftTicket&h=%E8%B4%A6%E6%88%B7%E7%AE%A1%E7%90%86_%E6%88%91%E7%9A%84%E6%98%93%E8%B4%AD%E5%88%B8">联系客服人员</a>，我们会尽心为您处理问题。';
f+="<p>4、请您收货后与快递人员一起开箱验货，确保产品完好，生产日期认可。如有问题请当场拒收。</p>";
f+="</div>";
f+='<div class="after-market-hd">';
f+="<h4>特别声明</h4>";
f+="</div>";
f+='<div class="after-market-cnt">';
f+='<div class="declare"><p>本站商品信息均来自苏宁自营商品，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，我司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。网站商品的功能参数仅供参考，请以实物为准，我司只能确保网站经营商品均为原厂正品行货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，敬请谅解！</p></div>';
f+="</div>";
if($("#suningService").length==0){$("#snAftermarket").after(f)
}var c="";
c+='<div class="after-market-hd">';
c+="<h4>售后服务</h4>";
c+="</div>";
c+='<div class="after-market-cnt">';
c+='    <div class="guarantees">';
c+='        <p id="cProductService"></p>';
c+="    </div>";
c+="</div>";
c+='<div class="after-market-hd">';
c+="    <h4>退货流程</h4>";
c+='    <span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
c+="</div>";
c+='<div class="after-market-cnt">';
c+='    <div class="return-process">';
c+='        <img width="760" height="300" lazy-src="'+sn.amPdsRelation+'images/return-process-cd.jpg" alt="退换货流程图" />';
c+="    </div>";
c+="</div>";
c+='<div class="after-market-hd">';
c+="    <h4>温馨提示</h4>";
c+="</div>";
c+='<div class="after-market-cnt">';
c+='    <div class="declare">';
c+="        <p>亲爱的顾客，为保障您的权益，请您对配送商品查验确认合格后签收，如有问题，请及时与商家联系。如需退货，请将包装一并寄回哦。</p>";
c+="    </div>";
c+="</div>";
c+='<div class="after-market-hd">';
c+="    <h4>特别声明</h4>";
c+="</div>";
c+='<div class="after-market-cnt">';
c+='    <div class="declare">';
c+="        <p>本站商品信息均来自于苏宁云台商家，其真实性、准确性和合法性由信息发布者（商家）负责。本站不提供任何保证，并不承担任何法律责任。因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保客户收到的货物与网站图片、产地、附件说明完全一致，网站商品的功能参数仅供参考，请以实物为准。若本站没有及时更新，请您谅解！</p>";
c+="    </div>";
c+="</div>";
$("#cService").html(c);
var e="";
e+='<div class="after-market-hd" id="swlSuningService"><h4>售后服务</h4></div>';
e+='	<div class="after-market-cnt">';
e+='		<div class="guarantees">';
e+="		<p>本商家商品保证正品行货，严格按照国家三包政策提供售后服务，因质量问题或实物与描述不符产生的退换货服务运费由本店承担。</p>";
e+="        <p>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！</p>";
e+="	</div>";
e+="</div>";
e+='	<div class="after-market-hd">';
e+='		<h4>退换货流程</h4><span class="opt"><a href="'+sn.amDetailLink+'" target="_blank">'+sn.amDetail+"</a></span>";
e+="	</div>";
e+='<div class="after-market-cnt">';
e+='	<div class="return-process"><img width="760" height="140" alt="退换货流程图" lazy-src="'+sn.amPdsRelation+'images/return-process.jpg"></div>';
e+="</div>";
e+='<div class="after-market-hd"><h4>温馨提示</h4></div>';
e+='	<div class="after-market-cnt">';
e+='	<div class="declare">';
e+="	<p>1、网站为您提供的送货、安装、维修等服务可能需收取一定的服务费和远程费；</p>";
e+="	<p>2、服务中可能涉及的材料费请以服务工程师出示的报价单为准；</p>";
e+='	<p>3、如存在收费争议，可咨询<a target="_blank" href="http://online.suning.com/webchat/index.jsp?url=https%3A%2F%2Fmember.suning.com%2Femall%2FMyGiftTicket%3FstoreId%3D10052%26catalogId%3D10051%26URL%3DMyGiftTicket&h=%E8%B4%A6%E6%88%B7%E7%AE%A1%E7%90%86_%E6%88%91%E7%9A%84%E6%98%93%E8%B4%AD%E5%88%B8">在线客服</a>。</p></div>';
e+="</div>";
if($("#swlSuningService").length==0){$("#swlAftermarket").after(e)
}var b="";
b+='<div class="after-market-hd"><h4>售后服务</h4></div>';
b+='	<div class="after-market-cnt">';
b+='		<div class="guarantees">';
b+="		<p>本店商品享有正品保障，因质量问题或实物与描述不符产生的退换货服务运费由商家承担</p>";
b+="	</div>";
b+="</div>";
b+='	<div class="after-market-hd">';
b+='		<h4>退换货流程</h4><span class="opt"><a name="'+sn.amAbroadName+'" href="'+sn.amAbroadDetailLink+'" target="_blank">'+sn.amAbroadDetail+"</a></span>";
b+="	</div>";
b+='	<div class="after-market-cnt">';
b+='		<div class="return-process"><img width="760" height="250" alt="退换货流程图" lazy-src="'+sn.amPdsRelation+'images/return-process-oversea.jpg"></div>';
b+="	</div>";
b+='	<div class="after-market-hd"><h4>温馨提示</h4></div>';
b+='	<div class="after-market-cnt">';
b+='	    <div class="declare">';
b+="	<p>亲爱的顾客，为保障您的权益，请您对配送商品查验确认合格后签收，如有问题，请及时与商家联系。如需退货，请将包装一并寄回哦。</p>";
b+="	</div>";
b+="</div>";
b+='<div class="after-market-hd">';
b+="    <h4>特别声明</h4>";
b+="</div>";
b+='<div class="after-market-cnt">';
b+='    <div class="declare">';
b+="        <p>苏宁易购为第三方网络交易平台，苏宁海外购的商品信息均由海外购商家自行发布，其真实性、准确性和合法性由海外购商家负责。苏宁易购对此不提供任何保证，也不承担任何法律责任。苏宁易购提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过与商家沟通确认；如用户发现店铺内有任何违法信息，请向苏宁客服举报并提供有效依据。</p>";
b+="    </div>";
b+="</div>";
$("#hwgService").html(b);
lazyelem.listen()
};
function processShopCategory(b){if(b!=null&&b.ctype=="1"){var c="";
var a=sn.vendorCode;
$.each(b.categoryList,function(f,g){if(g.cgrade=="2"){c+=g.dshow=="0"?'<dl class="on">':"<dl>";
var h=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+g.cid+"_1.html";
var e=sn.point+"_"+sn.partNumber.substring(9)+"_cata_fcata"+((f+1)>10?(f+1):("0"+f));
if(typeof g.curl!="undefined"&&g.curl!=""){c+='<dt class="type-img"><a target="_blank" href="javascript:void(0);" class="folder"></a>';
c+='<a name="'+e+'" target="_blank" href="'+h+'">';
c+='<img src="'+g.curl+'" alt="'+g.cname+'"></a></dt>'
}else{c+='<dt><a href="javascript:void(0);" class="folder"></a>';
c+='<a name="'+e+'" target="_blank" href="'+h+'">'+g.cname+"</a></dt>"
}if(typeof g.curl!="undefined"&&g.curl!=""){c+='<dd class="type-img-detail"><ul class="type-list-img">';
$.each(b.categoryList,function(k,i){if(i.pid==g.pid&&(typeof i.curl!="undefined"&&i.curl!="")&&i.cgrade=="3"){var m=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+i.cid+"_1.html";
var l=sn.point+"_"+sn.partNumber.substring(9)+"_cata_fcata"+((k+1)>10?(k+1):("0"+k));
c+='<li><a name="'+l+'" title="'+i.cname+'" target="_blank" href="'+m+'">';
c+='<img src="'+i.curl+'" alt="'+i.cname+'"></a></li>'
}});
c+="</ul>"
}else{c+="<dd>"
}c+='<ul class="type-list">';
$.each(b.categoryList,function(j,i){if(i.pid==g.pid&&(typeof i.curl=="undefined"||i.curl=="")&&i.cgrade=="3"){var m=sn.shopPath+sn.shopMainPh+"/"+a.substring(2)+"/list_"+i.cid+"_1.html";
var l=sn.point+"_"+sn.partNumber.substring(9)+"_cata_fcata"+((j+1)>10?(j+1):("0"+j));
c+='<li><a name="'+l+'" title="'+i.cname+'" target="_blank" href="'+m+'">'+i.cname+"</a></li>"
}});
c+="</ul></dd></dl>"
}});
$(".sfsDIV .type-sort").after(c);
if(c!=""){$(".sfsDIV").attr("id","shopSort").show();
$(".searchDIV").attr("id","").hide();
iFourth.detailSide()
}else{$(".sfsDIV").attr("id","").hide();
$(".searchDIV").attr("id","shopSort").show()
}}else{$(".sfsDIV").attr("id","").hide();
$(".searchDIV").attr("id","shopSort").show()
}}Recommend.yushouSaPageView=function(a){};
Recommend.saPageView=function(){try{if(_saPageViewInit&&(typeof(_saPageViewInit)).toLowerCase()=="function"){_saPageViewInit()
}}catch(a){}};
function getDeliveryInstallfunction(b,e,c){var a="http://"+sn.cartHost+"/webapp/wcs/stores/servlet/disc_10052_10051_"+sn.cityId+"_"+sn.districtId+"_"+b+"_"+e+"_deliveryInstallList_.html";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:c,success:function(f){}})
}function deliveryInstall(b){var c=b.deliveryInstallList;
if(c!=undefined&&c.length>0){var e=c[0];
var a=e.flag;
if(a!=""&&a=="1"){$("#szyt").show()
}}}function getCookieBonus(c){var e=document.cookie.split(";");
for(var b=0;
b<e.length;
b++){var a=e[b].split("=");
if($.trim(a[0])==c){return a[1]
}}return null
}function lingquan(c){var b="";
var a="";
var e="";
if(typeof bd!="undefined"&&bd&&bd!="undefined"){b=bd.rst();
a=getCookieBonus("_device_session_id");
e="&detect="+b+"&token="+a
}return c+e
}function getConServationInfo(b,c){var a=sn.itemDomain+"/pds-web/ajax/getConServationInfo_"+b+"_"+sn.lesCityId+".html";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:c,success:function(e){}})
}function conServationInfoBack(a){var b=a.queryStat;
if(b!=undefined){if(b!=""&&b=="01"){$("#jnbtBox").html(scmInfo.jnbtDetail+"<a href='"+scmInfo.jnbtUrl+"' target='_blank' class='b'>  详情</a>");
$("#jnbtTitle").show();
$("#allcuxiao").show()
}}}function getOldForNew(g){var a=sn.oldForNewBrandIds;
var f=false;
if(typeof a!="undefined"&&a!=null&&a!=""){var e=a.split(",");
for(var c=0;
c<e.length;
c++){if(sn.brandId.indexOf(e[c])>=0){f=true;
break
}}}if(f){var b=sn.ecsDomain+"/fourstage/checkhx.do?brandId="+sn.brandId;
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:g,success:function(h){}})
}}function oldForNewShow(a){var b=a.msg;
if(typeof b!="undefined"&&b!=""&&b=="Y"){$("#yjhx").show()
}}function getDeliveryInfoAble(c,f,g){if(sn.cmmdtyType=="ZSRV"||sn.cmmdtyType=="ZSRW"){var e={};
e.shipOffSet="0";
e.inventoryText="";
e.shipOffSetText="&nbsp;";
if(sn.invStatus=="1"||sn.invStatus=="4"){getDeliveryInfoAging(c)
}f(e)
}else{if(sn.phoneFlag=="Y"&&sn.notSaleFlag){var e={};
e.shipOffSet="-1";
e.inventoryText="";
e.shipOffSetText="";
f(e)
}else{var a=getDeliveryProductInfo(c);
var b=sn.solpUrl+"/solp/http/SOLP10101_PDS_10_"+a+"_queryB2cDeliverable.htm";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:"showB2cDeliverable",success:function(h){var i={};
if(h&&h.successFlag=="Y"&&h.deliverableFlag=="Y"){i.shipOffSet="0";
i.inventoryText="";
i.shipOffSetText="&nbsp;";
if(sn.invStatus=="1"||sn.invStatus=="4"){getDeliveryInfoAging(c)
}}else{i.shipOffSet="-1";
i.inventoryText="";
i.shipOffSetText=""
}f(i)
},error:function(){g()
}})
}}}function getDeliveryInfoAging(c){var a=getDeliveryProductInfo(c,"1");
var b=sn.solpUrl+"/solp/http/SOLP10104_PDS_10_"+a+"_queryB2cAging.htm";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:"showB2cAging",success:function(e){if(e&&e.successFlag=="Y"){getDeliveryText(e)
}},error:function(){}})
}function getDeliveryProductInfo(k,i){var g="";
var a="1";
if(sn.manageInvFlag=="0"){a="0"
}if(sn.factorySendFlag=="1"){a="3"
}var j=sn.vendor;
if(j&&j.length==10){j=j.substring(2,10)
}if(typeof sn.accountPlace!="undefined"&&sn.accountPlace.substring(0,1)=="Z"){storeAddress1=sn.accountPlace;
storeAddress2=sn.ownerPlace
}else{storeAddress1=sn.ownerPlace;
if(sn.accountPlace==""){storeAddress2=sn.ownerPlace
}else{storeAddress2=sn.accountPlace
}}var l=sn.deptNo;
var m="";
if(sn.swlShopFlag){m=sn.nowDate;
accountPlace=sn.ownerPlace;
l="0001";
a="0"
}else{var c=new Date(parseInt(sn.sendAvalidTime.toString()));
var f=(c.getMonth()+1)>9?(c.getMonth()+1):"0"+(c.getMonth()+1);
var b=c.getDate()>9?c.getDate():"0"+c.getDate();
m=""+c.getFullYear()+f+b
}var e=sn.lesCityId+sn.lesDistrictId+"01";
if(i==1){var h="DEFU";
if(sn.cmmdtyType=="ZSRV"||sn.cmmdtyType=="ZSRW"){h=sn.cmmdtyType
}g=k+"_"+h+"_01_"+a+"_"+storeAddress1+"_"+storeAddress2+"_"+l+"_"+e+"_"+j+"_"+sn.lesCityId+"_"+m
}else{g=k+"_01_"+a+"_"+storeAddress1+"_"+storeAddress2+"_"+l+"_"+e+"_"+j+"_"+sn.lesCityId+"_"+m
}return g
}function getDeliveryText(a){if(a){var b=sn.itemDomain+"/pds-web/ajax/getLogisticsPrescriptionText_"+a.earliestArriveDate+"_"+a.earliestArriveTime+"_"+a.currentDayFlag+"_"+a.nearestCuttime+"_"+sn.invStatus+".html";
$.ajax({url:b,cache:true,dataType:"jsonp",jsonpCallback:"logisticsPrescription",success:function(e){if(e&&e.prescription&&sn.shipOffSetText=="&nbsp;"){sn.shipOffSetText=e.prescription.shipOffSetText;
sn.inventoryText=e.prescription.inventoryText;
$("#shipOffset").val(e.prescription.shipOffSet);
if(typeof initGetDeliveryText=="function"){initGetDeliveryText()
}else{if(sn.prdType=="S"){var c=$("#shipInfo").html();
if(c=="&nbsp;"){$("#invInfo").html(e.prescription.inventoryText);
$("#shipInfo").html(e.prescription.shipOffSetText)
}if(typeof gMain!="undefined"&&typeof gMain.runDapushWhenReady=="function"){gMain.runDapushWhenReady()
}}else{var c=$("#nowProduct").html();
if(c=="&nbsp;"){$("#c_kucun").html(e.prescription.inventoryText);
$("#nowProduct").html(e.prescription.shipOffSetText)
}if(typeof FourPage!="undefined"&&typeof FourPage.runDapushWhenReady=="function"){FourPage.runDapushWhenReady()
}}}}},error:function(){}})
}}function getCShopDeliveryText(b){if(b){var a=sn.itemDomain+"/pds-web/ajax/getCLogicText_"+b+".html";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonpCallback:"logisticsCShopPrescription",success:function(e){if(e&&e.shipOffSetText!="undefined"&&e.shipOffSetText!=""){if(sn.prdType=="S"){var c=$("#shipInfo").html();
if(c=="&nbsp;"){$("#shipInfo").html(e.shipOffSetText)
}}else{var c=$("#nowProduct").html();
if(c=="&nbsp;"){$("#nowProduct").html(e.shipOffSetText)
}}}},error:function(){}})
}}function qualityCheck(){if(sn.category1==""||sn.category2==""||sn.brandId==""||sn.modelName==""||sn.category1!="20358"){return
}var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var b=sn.qualityUrl+"/qualityCheck_"+sn.category1+"_"+sn.category2+"_"+sn.brandId+"_"+sn.modelName+"_"+a+".htm";
$.ajax({url:b,cache:true,async:false,dataType:"jsonp",jsonpCallback:"qCheckCallback",success:function(c){}})
}function qCheckCallback(a){if(a!=null){var b=a.qualityResult;
$("#qualityCheck").attr("src",b);
$("#J-procon-quality").show()
}}function cmsBanner(){var a=sn.cmsBannerUrl+"/api/cp/jsonp/pc_"+sn.category1+".jsonp";
$.ajax({url:a,type:"get",dataType:"jsonp",jsonp:"callback",jsonpCallback:"cmsCallback",error:function(b,e,c){},success:function(b){if(b.data&&b.data!=""&&b.data.length>0){var e=b.data[0];
if(e.tag&&typeof e.tag[0]!="undefined"&&e.tag[0].linkUrl!="undefined"&&e.tag[0].picUrl!="undefined"&&e.tag[0].linkUrl!=""&&e.tag[0].picUrl!=""){var c='<a target="_blank"  href="'+e.tag[0].linkUrl+'"><img  src="'+e.tag[0].picUrl+'"></a>';
$("#cmsActivityBar").html(c);
$("#cmsActivityBar").show()
}else{$("#cmsActivityBar").hide()
}}else{$("#cmsActivityBar").hide()
}}})
}function processIcpsPromInfo(c){$("#allcuxiao").find("ul li p:not(#pointBox,#yunzuan)").html("");
$("#allcuxiao").find("ul li:not(#pointTitle)").hide();
$("#allcuxiao").hide();
var a=[];
sn.giftInfo="";
var b=0;
var e=c.promotions;
var f={limitType:c.limitType,limitCount:c.limitCount,limitLabel:c.limitLabel};
icpsItemlimit(f);
if(e!=null&&e.length>0&&sn.promotionPrice!=""){$.each(e,function(j,l){if(l.activityType=="1"){var h="";
if(l.activityLink!=""){h+=l.activityDesc+" <a href='"+l.activityLink+"' target='_blank' class='b'>活动详情</a>"
}else{h+=l.activityDesc
}if($("#voucherBox").html()!=""){$("#voucherBox").after("<p class='promotion-content'>"+h+"</p>")
}else{$("#voucherBox").html(h)
}$("#voucherBox").html(h);
$("#voucherTitle").css("display","block");
$("#allcuxiao").show()
}else{if(l.activityType=="2"){var h="";
if(l.activityLink!=""){h+=" <a href='"+l.activityLink+"' target='_blank' class='b'>"+l.activityDesc+"</a>"
}else{h+=l.activityDesc
}if($("#newcouponBox").html()!=""){$("#newcouponBox").after("<p class='promotion-content'>"+h+"</p>")
}else{$("#newcouponBox").html(h)
}$("#couponTitle").css("display","none");
$("#couponBox").siblings(".promotion-content").remove();
$("#couponBox").html("");
$("#newcouponTitle").css("display","block");
$("#allcuxiao").show()
}else{if(l.activityType=="3"){var g=l.gifts;
if(g!=null&&g.length>0){var k=g.length>5?5:g.length;
var m="";
for(var j=0;
j<k;
j++){if(j==k-1){m+=g[j].giftCode
}else{m+=g[j].giftCode+"-"
}}getGiftName(m,g)
}}else{if(l.activityType=="4"){if(sn.vendorCode!=""){$("#freightfreeTitle").show();
$("#freightfreeBox").html(l.activityDesc);
$("#allcuxiao").show();
if(l.activityLink!=""&&l.activityLink=="1"){sn.cFreightFreeFlag=true;
$("#yunfei").html("");
$("#yunfei").hide()
}}}else{if(l.activityType=="5"){$("#isXYuanNItemBox").html(l.activityDesc+' <a class="b" target="_blank" href="'+l.activityLink+'">查看详情</a>');
$("#isXYuanNItemTitle").css("display","block");
$("#allcuxiao").show()
}else{if(l.activityType=="6"){var h="";
if(l.activityLink!=""){h+=l.activityDesc+" <a href='"+l.activityLink+"' target='_blank' class='b'>活动详情</a>"
}else{h+=l.activityDesc
}$("#taogouyhBox").html(h);
$("#taogouyhTitle").css("display","block");
$("#lhvoucherTitle").css("display","none");
$("#voucherTitle").css("display","none");
$("#allcuxiao").show()
}else{if(l.activityType=="7"){if(b<9){b++;
a.push(l)
}}}}}}}}});
if(a.length>0){processFreeCouponInfo(a)
}}}function getGiftName(b,a){if(b!=null&&b!=""){$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfoListJsonp_"+b+"_.html",type:"get",async:false,dataType:"json",success:function(f){if(f!=null&&typeof f.itemInfoList!="undefined"){if(f.itemInfoList!=null&&f.itemInfoList.length>0){var c=f.itemInfoList;
for(var e=0;
e<c.length;
e++){a[e].giftName=c[e].itemDisplayName
}processGiftContent(a)
}}}})
}}function processGiftContent(a){if(a!=null&&a.length>0){var f=a.length>5?5:a.length;
var h="<table><tbody>";
var e=0;
for(var c=0;
c<f;
c++){if(a[c].remainQty==0||a[c].invStatus!="0"){h+='<tr class="hide">'
}else{e=1;
h+="<tr>"
}h+='<td class="img"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+a[c].giftCode+'_1_30x30.jpg" src-large="'+sn.imageDomianDir+"/b2c/catentries/"+a[c].giftCode+'_1_200x200.jpg" alt=""></td>';
h+='<td class="title">';
if(a[c].giftType=="1"){if(a[c].giftCode!=""&&a[c].giftCode.length==18){var g=a[c].giftCode.substring(9,18);
h+='<a href="'+sn.elecProductDomain+"/"+g+'.html" target="_blank" name="item_'+sn.ninePartNumber+"_cuxiao_zengpin"+(c+1)+'">';
h+='<div title="'+a[c].giftName+'">'+a[c].giftName+"</div>";
h+="</a>"
}}else{h+='<div title="'+a[c].giftName+'">'+a[c].giftName+"</div>"
}h+="</td>";
if(a[c].remainQty!=0&&a[c].invStatus=="0"){if(sn.giftInfo==""){sn.giftInfo=[]
}var b={cmmdtyCode:a[c].giftCode,cmmdtyQty:a[c].onceQty};
sn.giftInfo.push(b);
h+='<td class="num">×'+a[c].onceQty+"</td>"
}if(a[c].giftPrice!=undefined&&a[c].giftPrice!=""){h+='<td class="price">&yen;'+parseFloat(a[c].giftPrice).toFixed(2)+"</td></tr>"
}else{h+='<td class="price"></td></tr>'
}}h+="</tbody></table>";
if(e==0||(sn.invStatus!="1"&&sn.invStatus!="4")){$("#giftTitle").hide()
}else{$("#giftBox").html(h);
iFourth.zengpin();
$("#giftTitle").css("display","block");
$("#allcuxiao").show()
}}}function addCartFourPage(h,j,g,a,c,f,i){var b=sn.vendorCode;
if(sn.vendorCode==""){b="0000000000"
}var e={cmmdtyCode:j,shopCode:b,activityType:g,cmmdtyQty:h};
if(typeof a!="undefined"&&a!=""){e.activityId=a
}if(sn.hwgShopFlag){e.overSeasFlag=sn.vendorType
}if(typeof c!="undefined"&&c.length>0){e.cmmdtyWarrantyVOList=c
}if(typeof f!="undefined"&&f.length>0){e.childCmmdtyVOList=f
}var k={provinceCode:sn.provinceCode,cityCode:sn.lesCityId,districtCode:sn.lesCityId+sn.lesDistrictId,cmmdtyVOList:[]};
k.cmmdtyVOList.push(e);
cart.normal.addCart(k,i)
}function buyNowFourPage(i,k,h,a,f,c,g,l,j){var b=sn.vendorCode;
if(sn.vendorCode==""){b="0000000000"
}var e={cmmdtyCode:k,shopCode:b,activityType:h,cmmdtyQty:i};
if(typeof a!="undefined"&&a!=""){e.activityId=a
}if(h=="02"&&PriceShow.serviceType=="10"){e.subActivityType="10"
}if(sn.hwgShopFlag){e.overSeasFlag=sn.vendorType
}if(typeof c!="undefined"&&c.length>0){e.cmmdtyWarrantyVOList=c
}if(typeof g!="undefined"&&g.length>0){e.childCmmdtyVOList=g
}if(typeof l!="undefined"&&l.length>0){e.giftVOList=l
}var m={provinceCode:sn.provinceCode,cityCode:sn.lesCityId,districtCode:sn.lesCityId+sn.lesDistrictId,cmmdtyVOList:[]};
if(typeof f!="undefined"&&f!=""){m.payPeriods=f
}m.cmmdtyVOList.push(e);
$("body").AjaxLogin({success:function(){cart.normal.buyNow(m,j)
}})
};var FourPage=FourPage||{};
var PriceShow=PriceShow||{};
var Recommend=Recommend||{};
var Cart=Cart||{};
var YuShou=YuShou||{};
var shopInfoList=shopInfoList||{};
sn.cFreightFreeFlag=false;
sn.saleStatus=0;
sn.groupType=0;
sn.chanCity=true;
sn.status=false;
sn.groupFlag=false;
sn.promoCount=0;
sn.ychf="";
sn.gjrw="";
sn.snslt=0;
sn.snsltFare=0;
sn.invStatus="";
sn.barePhoneDesc="";
sn.promotionDesc="";
sn.promItemDesc="";
sn.storeServiceList="";
sn.selectedDistrictId="";
sn.selectedStoreService="";
sn.itemSource="";
sn.isPavilion=false;
var phoneTyFlg=false;
var cshopHtml="";
var cshopDesc="";
var cshopList="";
var snShopFlag=false;
sn.TMFlag=false;
sn.priceLoad=false;
sn.hasGroupCmm=false;
sn.scodeType="0";
sn.scode=false;
var remain=0;
var isFareFree=0;
var isExistshop="";
var lazyElems;
FourPage.lazyElems=function(){lazyElems=iFourth.lazyAjax(".lazy-ajax",function(c,a,b){})
};
FourPage.lazyFunction=function(){if(!sn.donateFlag){if($("#J-tieIn").length>0){lazyElems["J-tieIn"].enable=false;
$("#J-tieIn").html('<div class=" loading-holder" ></div>')
}lazyElems.hotRank.enable=false;
$("#hotRank").html('<div class=" loading-holder" ></div>');
$("#hotRank").show();
lazyElems.buyAlsoBuy.enable=false;
$("#buyAlsoBuy").html('<div class=" loading-holder" ></div>');
$("#view_Also_ViewProduct").remove();
$("#view_Also_BuyProduct").remove();
$("#buy_Also_BuyProduct").remove();
if($("#J-slide1").length>0){lazyElems["J-slide1"].enable=false;
$("#J-slide1").html('<div class=" loading-holder" ></div>')
}lazyElems["J-historyList"].enable=false;
$("#J-historyList").html('<div class=" loading-holder" ></div>');
lazyElems["J-historyRec"].enable=false;
$("#J-historyRec").html('<div class=" loading-holder" ></div>')
}lazyElems.appraise.handle=FourPage.appraise;
lazyElems.consult.handle=FourPage.consult
};
FourPage.initialize=function(){FourPage.initCity();
FourPage.initCityButton();
FourPage.makeRightPara();
FourPage.commentJump();
CommonFourPage.storeService.init()
};
FourPage.Recommend=function(){CommonFourPage.Recommend.getHotRank(sn.partNumber,"Recommend.callbackFunp");
CommonFourPage.Recommend.getAlsoBuy(sn.partNumber,"Recommend.getRecomData");
lazyElems["J-historyList"].handle=FourPage.showMyHistory;
lazyElems["J-historyList"].enable=true
};
FourPage.initCity=function(){FourPage.getCity(function(a){sn.cityId=a.cityCommerceId;
sn.cityName=a.cityName;
sn.districtId=a.districtCommerceId;
sn.districtName=a.districtName;
sn.provinceCode=a.provinceCommerceId;
sn.provinceName=a.provinceName;
$("#mdmProvinceId").val(sn.provinceCode);
$("#mdmCityId").val(sn.cityId);
$("#mdmDistrictId").val(sn.districtId);
sn.mdmProvinceId=a.provinceMDMId;
sn.mdmCityId=a.cityMDMId;
sn.mdmDistrictId=a.districtMDMId;
sn.lesCityId=a.cityLESId;
sn.lesDistrictId=a.districtLESId;
if(sn.lesCityId==null||sn.lesCityId=="null"||sn.lesCityId==""||sn.lesDistrictId==null||sn.lesDistrictId=="null"||sn.lesDistrictId==""){sn.lesCityId="010";
sn.lesDistrictId="01"
}if(sn.simBuyType=="3"||sn.simBuyType=="4"){simInitialize()
}else{if(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize(sn.cityId)
}}}})
};
FourPage.initCityButton=function(){$("#sncity").mCity({used:true,cityCb:function(a){},distCb:function(a){clearTimeout(cDown);
sn.districtName=a.district.name;
sn.chanCity=false;
sn.provinceCode=a.province.id;
sn.districtId=a.district.cid;
sn.districtName=a.district.name;
$("#mdmProvinceId").val(sn.provinceCode);
$("#mdmCityId").val(sn.cityId);
$("#mdmDistrictId").val(sn.districtId);
sn.mdmProvinceId=a.province.id;
sn.mdmCityId=a.city.id;
sn.mdmDistrictId=a.district.id;
sn.lesCityId=a.city.lesId;
sn.lesDistrictId=a.district.lesId;
if(sn.shopType=="-1"){sn.vendorCode="";
sn.swlShopFlag=false;
sn.hwgShopFlag=false
}if(sn.simBuyType=="3"||sn.simBuyType=="4"){simInitialize()
}else{if(typeof scmInfo!="undefined"&&sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize(a.city.id)
}}}},getCity:function(a){},changeCb:function(a){clearTimeout(cDown);
sn.chanCity=false;
isFareFree=0;
sn.provinceCode=a.province.id;
sn.provinceName=a.province.name;
sn.cityId=a.city.cid;
sn.cityName=a.city.name;
sn.districtId=a.district.cid;
sn.districtName=a.district.name;
$("#mdmProvinceId").val(sn.provinceCode);
$("#mdmCityId").val(sn.cityId);
$("#mdmDistrictId").val(sn.districtId);
$("#shipOffset").val("-1");
sn.mdmProvinceId=a.province.id;
sn.mdmCityId=a.city.id;
sn.mdmDistrictId=a.district.id;
sn.lesCityId=a.city.lesId;
sn.lesDistrictId=a.district.lesId;
if(sn.shopType=="-1"){sn.vendorCode="";
sn.swlShopFlag=false;
sn.hwgShopFlag=false
}$(".proinfo-tip").hide();
$(".luoji-tip").hide();
if(sn.simBuyType=="3"||sn.simBuyType=="4"){simInitialize()
}else{if(sn.catenIds==scmInfo.broadBandId){initBroadBrand()
}else{if(sn.donateFlag){initDonate()
}else{initialize(a.city.cid)
}}}FourPage.lazyFunction();
if(!sn.donateFlag){FourPage.Recommend()
}}})
};
FourPage.getCity=function(b){var i=d("cityId");
var h=d("SN_CITY");
var e=d("districtId");
var j="";
var a="";
var c="";
if(h!=""&&h!=null){var g=h.split("_");
if(g.length>0){j=g[3];
c=g[4];
a=g[5]
}}if(i!=""&&h!=""&&i!=j){FourPage.IP(i,b)
}else{if(h){var f=FourPage.analyzeCookie(h);
if(typeof c=="undefined"||c.length!=2){FourPage.IP(i,b)
}else{if(e!=""&&a!=""&&e==a){if(typeof b=="function"){b(f)
}}else{if(typeof b=="function"){b(f)
}}}}else{FourPage.IP(i,b)
}}};
FourPage.IP=function(i,g){var c=/^(\w*)(pre)(\w*)(.cnsuning.com)$/;
var b=/^(\w*)(sit)(\w*)(.cnsuning.com)$/;
var f=/^(\w*)(dev)(\w*)(.cnsuning.com)$/;
var a=document.location.hostname;
var h="http://ipservice.suning.com";
if(c.test(a)){h="http://ipservicepre.cnsuning.com"
}else{if(b.test(a)){h="http://ipservicesit.cnsuning.com"
}else{if(f.test(a)){h="http://ipservicesit.cnsuning.com"
}}}var e=h+"/ipQuery.do";
if(i){e=h+"/ipQuery.do?cityId="+i
}$.ajax({type:"GET",url:e,cache:true,async:false,dataType:"jsonp",jsonpCallback:"cookieCallback1",success:function(j){i=j.cityCommerceId;
j.flag="2";
j.count=0;
var k=FourPage.cityInfoToString(j);
FourPage.SetCookie("SN_CITY",k);
FourPage.SetCookie("cityId",j.cityCommerceId);
FourPage.SetCookie("districtId",j.districtCommerceId);
if(typeof g=="function"){g(j)
}},error:function(){var j={provinceName:"北京",cityName:"北京",districtName:"东城区",provinceCommerceId:"10",cityCommerceId:"9017",districtCommerceId:"10106",provinceMDMId:"10",cityMDMId:"1000000",districtMDMId:"10000001",cityLESId:"010",districtLESId:"01"};
if(typeof g=="function"){g(j)
}}})
};
FourPage.analyzeCookie=function(e){var b=e.split("|");
var a=null;
if(b.length>0){var c=b[0].split("_");
a={};
a.provinceMDMId=c[0];
a.provinceCommerceId=c[0];
a.cityLESId=c[1];
a.cityMDMId=c[2];
a.cityCommerceId=c[3];
a.districtMDMId=c[4];
a.districtLESId=c[4];
a.districtCommerceId=c[5];
a.flag=c[6];
a.count=c[7]
}return a
};
FourPage.cityInfoToString=function(a){var b="";
b+=a.provinceMDMId;
b+="_";
b+=a.cityLESId;
b+="_";
b+=a.cityMDMId;
b+="_";
b+=a.cityCommerceId;
b+="_";
b+=a.districtLESId;
b+="_";
b+=a.districtCommerceId;
b+="_";
b+=a.flag;
b+="_";
b+=a.count;
return b
};
FourPage.SetCookie=function(c,a){var i=365;
var b=new Date;
b.setTime(b.getTime()+i*24*60*60*1000);
document.cookie=c+"="+escape(a)+";path=/;domain="+sn.cookieDomain+";expires="+b.toGMTString()
};
FourPage.itemMainTab=function(){iFourth.Tab(".procon .tabarea-items",".procon .tabarea-content",function(c,a,b){if(c.attr("id")=="J-procon-comment"||c.attr("id")=="J-procon-refer"){if(lazyElems.appraise.enable){FourPage.appraise();
lazyElems.appraise.enable=false
}if(lazyElems.consult.enable){FourPage.consult();
lazyElems.consult.enable=false
}$("#serviceArea").insertAfter($("#consult"));
if(c.attr("id")=="J-procon-comment"){$("#appraise").show();
$("#appAdv").show()
}else{$("#appraise").hide();
$("#appAdv").hide()
}}else{$("#serviceArea").insertBefore($("#appraise"))
}if(c.attr("id")=="J-procon-param"||c.attr("id")=="J-procon-desc"){if($("#itemParameter").length==0){FourPage.getParameter()
}}if(c.attr("id")=="J-procon-quality"){qualityCheck()
}lazyelem.detect()
})
};
FourPage.hash=function(){$(".totalReview").click(function(){$("#productCommTitle").click()
});
var c=$.trim(location.hash);
var a=["#pro_detail_tab"];
var b=["#productParTitle"];
if($.inArray(c,a)>-1){$("#productCommTitle").click()
}else{if($.inArray(c,b)>-1){$("#productParTitle").click()
}}};
FourPage.appraise=function(){var a=sn.reviewIsNew==1?(sn.newResServer+"/project/review/js/getreview.js"):(sn.newResServer+"/project/zone/newFourthPage/js/getreview.js");
$.getScript(a,function(){if(window.review){review.getContent($("#appraise"))
}})
};
FourPage.consult=function(){var a=sn.reviewIsNew==1?(sn.newResServer+"/project/review/js/getconsultation.js"):(sn.newResServer+"/project/zone/newFourthPage/js/getconsultation.js");
$.getScript(a,function(){if(window.consultation){consultation.getContent($("#consult"))
}})
};
function initBroadBrand(){sn.vendorCode="";
$(".proinfo-title").addClass("proinfo-title-short");
qCodeHide();
getBroadBandSalePointInfo(sn.partNumber,sn.provinceCode,sn.cityId,sn.districtId,broadBrandInfo);
CommonFourPage.FourPage.getPromotiondesc(sn.partNumber,FourPage.getPromotiondescCallBack);
sn.vendorCode="0000000000";
FourPage.getReview();
FourPage.getConsulation();
$("#returnCate").html('<a class="tui-disable no-link"><i class="icon"></i>不支持无理由退换货</a>');
$("#returnCate").attr("title","不支持无理由退换货");
$("#returnCate").show();
$("#shopName").html("由当地运营商确认预约信息并提供安装及售后服务").show();
iFourth.servLabel();
$("#hwgService").hide();
$(".rxf").parent().hide();
$("#installment").hide()
}function broadBrandInfo(e){$("#swlService").hide();
$("#cService").hide();
$("#snService").show();
$("#selectCB").hide();
$("#inerestBox").hide();
$(".proinfo-serv .zqfw").parent().hide();
if(sn.published=="1"){FourPage.initCss();
sn.promotionPrice="";
if(e!=null&&e.errorCode=="0"){sn.promotionPrice=e.broadbandPrice;
sn.broadbandSellPoint=e.broadbandSellPoint;
$("#c_kucun").html("现货").show();
$("#nowProduct").html("现在下单，即可进行预约").show();
$("#addCart").removeClass().addClass("btn-install").html("");
$("#addCart").attr("href","javascript:addBroadbandShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.cityId+"','"+sn.districtId+"')").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-install-mini");
$("#addCart2").attr("href","javascript:addBroadbandShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.cityId+"','"+sn.districtId+"')").removeAttr("target");
$("#addCart2").html("");
$("#cart2Price").html(sn.promotionPrice);
$("#proPriceBox").html("<span id='promotionPrice' class='mainprice'>"+FourPage.getDisPrice(sn.promotionPrice)+"</span><a id='PriceNotice2' class='btn-price-notice' href='javascript:FourPage.subscribePriceNotice();'>降价通知</a>");
$("#existPrice").show();
$("#noPrice").hide();
$("#promotionPriceBox").find("dt span").html("易购价");
$("#promotionPriceBox").show();
$("#addCart").show();
$("#addCart2").show()
}else{$("#noPrice").show();
$("#existPrice").hide();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#addCart").removeClass().addClass("btn-install-disable").html("");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#cart2Price").html("");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-install-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").html("");
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}var c="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
var b="findpassBrand2('','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','');";
$("#callme").attr("href","javascript:"+b);
$("#callmeSide").attr("href","javascript:"+b);
$("#callme").removeClass().addClass("btn-online ml10");
$("#callme").html("<img class='btn-online' src='"+sn.resRoot+"/images/online.gif' alt='在线客服' width='69' height='18'/>");
$("#cshopBox").hide();
$("#loginFeedBack").show();
$(".proinfo-container").addClass("proinfo-container-nopro")
}else{qCodeHide();
$(".proinfo-main").hide();
$(".proinfo-main").html("");
$(".nopro").show();
$("#cart2Price").html("");
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
CommonFourPage.Recommend.noPublishItems(sn.partNumber,"Recommend.noPublishItemsHtml")
}FourPage.initCluster();
FourPage.runDapushWhenReady();
iFourth.mainHeight()
}function initDonate(){getItemSaleStatus(sn.partNumber,"showSaleStatus")
}function initialize(a){$("#selectCB span.result-text").html("");
$("#selectCB span#phoneText").html("");
$("#phonedl ul").html("");
$("#phoned2 dd").html("");
sn.giftInfo="";
shopInfoList="";
sn.priceInvData="";
sn.shipOffSetText="";
sn.inventoryText="";
sn.mobilePrice="";
sn.freight="-1";
sn.groupType=0;
sn.isPreBuy=0;
sn.sendCityName="";
sn.shopList="";
sn.govPrice="";
sn.cuxiaoType="";
sn.silenceType="";
sn.silenceTip="";
sn.cuxiaoSoldOut="";
sn.proPriceBoxHtml="";
sn.cShopListFlag="";
$("#yudingTips").hide();
$("#cuxiaoEnd").hide();
$("#cuxiaoNoNum").hide();
$("#addCart").show();
sn.pssPrceFlag=true;
sn.hasGroupCmm=false;
sn.isPavilion=false;
sn.groupFlag=false;
$("#cshopBox").show();
$("#c_yunfei").html("").hide();
$("#c_kucun").html("");
$("#nowProduct").html("");
$("#bookPrice").hide();
$("#bookRule").hide();
$("#yushouCount1").hide();
$("#colorItemList a").attr("href","javascript:void(0);");
$("#versionItemList a").attr("href","javascript:void(0);");
$("#buyNum").val("1");
PriceShow.actionId="";
PriceShow.status="";
PriceShow.bkflag="0";
iFourth.buyNum();
$("#allcuxiao li:not(#scodeTitle) p").html("");
$("#allcuxiao li:not(#scodeTitle)").hide();
$("#allcuxiao").hide();
$(".proinfo-o2o").hide();
$("#groupItemList").remove();
Renxf.runFlag="N";
Renxf.freenessInfo="";
Renxf.loginFlag="N";
Renxf.turnGrayFlag="N";
$("#freenessPay").hide();
sn.cFreightFreeFlag=false;
sn.TMFlag=false;
CommonFourPage.storeService.jsdHide();
snShopFlag=false;
getItemSaleStatus(sn.partNumber,"showSaleStatus")
}function showSaleStatus(a){if(sn.isPreBuy==1){var c=a.saleInfo;
if(c!=undefined&&c.length>0){if(typeof c[0].promotionPrice=="undefined"||c[0].promotionPrice==""){sn.priceLoad=false;
clearTimeout(cDown);
initialize(sn.cityId)
}else{prcessPSSPrice(c[0])
}}}else{if(sn.groupFlag){var c=a.saleInfo;
if(c!=undefined&&c.length>0){initGroupCmmdtyPrice(c[0])
}}else{if(!sn.priceLoad){var b=a.saleInfo;
if(typeof b!="undefined"&&b.length>0){sn.yanbaoSet=b[0].warrantyList
}sn.priceLoad=true;
if(!sn.donateFlag){try{var c=a.saleInfo;
if(c!=undefined&&c.length>0){sn.priceInvData=c[0];
sn.promotionPrice=sn.priceInvData.promotionPrice;
sn.vendorType=sn.priceInvData.vendorType;
sn.ownerPlace=sn.priceInvData.ownerPlace;
sn.cuxiaoType=sn.priceInvData.priceType;
sn.invStatus=sn.priceInvData.invStatus;
sn.scodeType=(sn.priceInvData.priceType).indexOf("4-7")>=0?(sn.priceInvData.priceType.substring(2,3)):"0";
sn.scode=sn.scodeType=="7"?true:false;
sn.priceInvData.priceType=(sn.priceInvData.priceType).indexOf("4")>=0?"4":(sn.priceInvData.priceType);
if(sn.priceInvData.priceType=="9"){sn.priceInvData.priceType="0"
}if(sn.priceInvData.vendorType=="925SWL"){$("#vendorType").val(3);
sn.swlShopFlag=true
}else{if(sn.priceInvData.vendorType=="927HWG"||sn.priceInvData.vendorType=="927HWG1"){$("#vendorType").val(4);
sn.hwgShopFlag=true
}}}else{sn.priceInvData=""
}if(sn.shopType=="-1"){sn.vendorCode=sn.priceInvData.vendorCode
}if(sn.vendorCode!=undefined&&(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003")){$("#supplierID").val("0000000000")
}else{$("#supplierID").val(sn.vendorCode)
}}catch(f){}sn.isPreBuy=0;
if(typeof sn.promotionPrice=="undefined"||sn.promotionPrice==""){sn.isPreBuy=0
}else{if(sn.priceInvData.priceType.substring(0,1)=="7"){sn.isPreBuy=1
}else{if(sn.priceInvData.priceType.substring(0,1)=="8"){sn.isPreBuy=2
}}}if(sn.vendorCode==""||sn.vendorCode=="0000000000"){cmsBanner()
}FourPage.getSubscribeHtml()
}else{try{donateSaleStatus(a.saleInfo)
}catch(f){}}CommonFourPage.FourPage.getItemDescInfo(sn.partNumber,CommonFourPage.FourPage.processItemdescInfo);
CommonFourPage.FourPage.getPromotiondesc(sn.partNumber,FourPage.getPromotiondescCallBack);
if(sn.vendorCode==""&&sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.phoneFlag=="Y"){getSellPointByCity(sn.partNumber,sn.cityId,FourPage.processBarePhoneDesc)
}CommonFourPage.FourPage.getProductLablePricture(sn.partNumber,"sLablePicture");
if(!(sn.donateFlag&&sn.vendorCode=="")){getShopInfoList(sn.partNumber,"FourPage.showShopList")
}runAnalyseByClass("")
}else{showMobileSaleStatus(a)
}}}}function donateSaleStatus(a){donateCss();
donateSale(a);
FourPage.shareWb();
FourPage.getReview()
}function donateCss(){$("#netPriceBox").hide();
$(".price-promo .w3").html("捐&nbsp;赠");
$("#limitTime").hide();
$("#PriceNotice2").hide();
$("#c_yunfei").hide();
$("#nowProduct").hide();
$("#allcuxiao").hide();
$(".proinfo-o2o").hide();
$(".proinfo-serv").hide();
$("#yanbao").hide();
$("#preTime").hide();
$("#itHelp").hide();
$(".proinfo-memo").hide();
$("#hotRank").hide();
$("#buyAlsoBuy").hide();
$(".history").hide();
$(".proinfo-serv .zqfw").parent().hide();
qCodeHide();
$("#inerestBox").show();
$("#snService").hide();
$("#cService").show();
$("#swlService").hide();
$("#hwgService").hide();
$(".proinfo-deliver-oversea").hide();
$("#tariff").hide();
$(".oversea-logo").hide();
$("#productOverseaTitle").hide();
$("#productProconSaleTitle").hide();
$("#serviceArea").hide();
$(".pro-detail-oversea").hide();
$(".J-procon-sale").hide();
$(".after-market").each(function(){$(this).hide()
})
}function donateSale(c){if(c!=undefined&&c.length>0){sn.priceInvData=c[0];
var b=sn.priceInvData;
sn.promotionPrice=b.promotionPrice;
sn.vendorType=b.vendorType;
sn.invStatus=b.invStatus;
sn.productStatus=b.invStatus;
snga.productStatus=b.invStatus;
sn.priceType=b.priceType;
sn.vendorCode=b.vendorCode;
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassSupplier('"+sn.vendorCode+"','"+a+"','','');");
getSupplierState("#callme",sn.vendorCode);
if(sn.vendorCode==""){sn.promotionPrice="";
$(".proinfo-main").hide();
$(".proinfo-main").html("");
$(".nopro").show();
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#shopName").html('由"苏宁"发起捐助，并提供服务');
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#cart2Price").html("")
}else{if(sn.promotionPrice==""||sn.invStatus==""||sn.invStatus=="0"||sn.invStatus=="2"||sn.invStatus=="3"){if(sn.promotionPrice==""){$("#existPrice").hide();
$("#noPrice").show()
}else{$("#promotionPrice").html(FourPage.getDisPrice(sn.promotionPrice));
$("#existPrice").show();
$("#noPrice").hide()
}$("#c_kucun").html("无货");
if(sn.promotionPrice==""){$("#c_kucun").html("暂不销售")
}$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buycount").hide();
$("#buyNowAddCart").removeClass().addClass("btn-donate-disable").attr("href","javascript:void(0);").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#cart2Price").html(sn.promotionPrice)
}else{$("#promotionPrice").html(FourPage.getDisPrice(sn.promotionPrice));
$("#existPrice").show();
$("#noPrice").hide();
$("#c_kucun").html("现货");
$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#buycount").show();
$("#buyNowAddCart").removeClass().addClass("btn-donate").attr("href","javascript:Cart.buyNowTime();").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#cart2Price").html(sn.promotionPrice)
}}}else{$("#existPrice").hide();
$("#noPrice").show();
$("#c_kucun").html("暂不销售");
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buycount").hide();
$("#buyNowAddCart").removeClass().addClass("btn-donate-disable").attr("href","javascript:void(0);").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#cart2Price").html(sn.promotionPrice)
}}FourPage.getSubscribeHtml=function(){response=sn.priceInvData;
if(sn.isPreBuy!=1){FourPage.initCss()
}else{FourPage.yuShouCss()
}if(sn.hwgShopFlag){CommonFourPage.hwgInitCss()
}try{preBuy.actionID=response.bookActionID;
preBuy.purchaseType=response.purChaseType;
sn.bookGoodsId=response.bookGoodID;
if(sn.isPreBuy==1){prcessPSSPrice(response);
Recommend.yushouSaPageView("1")
}else{if(sn.isPreBuy==2){bookInfo.bookPrice=typeof response.promotionPrice!="undefined"&&response.promotionPrice!=""?parseFloat(response.promotionPrice).toFixed(2):"";
bookInfo.depositAmount=response.bookPrice;
getItemSubscribeAction(sn.partNumber,processBookInfo,processErrorBookInfo);
Recommend.yushouSaPageView("2")
}else{Recommend.yushouSaPageView();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}initProductSale()
}}if(sn.vendorCode==""||sn.vendorCode=="0000000000"){$("#itemNameZy").show()
}else{$("#itemNameZy").hide()
}}catch(a){initProductSale()
}};
function initProductSale(){try{if(sn.isPreBuy!=1&&sn.isPreBuy!=2){$("#scodeTitle").hide();
$("#preTime").hide();
$("#scode").hide()
}if(sn.vendorCode!=""&&sn.vendorCode!="undefined"&&sn.vendorCode!=undefined&&sn.vendorCode.substring(0,3)!="003"){sn.cflag="0";
$("#callme").html("");
getSupplierState("#callme",sn.vendorCode);
FourPage.initCShopPrice();
if(sn.swlShopFlag==true){$("#snService").hide();
$("#cService").hide();
$("#swlService").show();
$("#hwgService").hide();
$("#vendorType").val(3)
}else{if(sn.hwgShopFlag){$("#snService").hide();
$("#cService").hide();
$("#swlService").hide();
$("#hwgService").show();
$("#vendorType").val(4)
}else{$("#cService").show();
$("#snService").hide();
$("#swlService").hide();
$("#hwgService").hide()
}}FourPage.initCluster()
}else{if(sn.vendorCode!=undefined&&(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003")){sn.cflag="1";
$("#callme").html("<img class='btn-online' src='"+sn.resRoot+"/images/online.gif' alt='在线客服' width='69' height='18'/>");
FourPage.initProductPrice();
$("#swlService").hide();
$("#cService").hide();
$("#snService").show();
$("#hwgService").hide();
$("#vendorType").val(1)
}}if(sn.vendorCode!=""&&sn.reportFlag=="0"){$("#report").show()
}else{$("#report").hide()
}}catch(a){}FourPage.getReview();
FourPage.getConsulation();
iFourth.mainHeight();
iFourth.win.scroll()
}FourPage.initJSD=function(){CommonFourPage.storeService.jsdHide();
var a={partnumber:sn.partNumber,cityId:sn.cityId};
if(sn.isPreBuy!=1&&sn.isPreBuy!=2){JSD.base.initJsdLabel(a,CommonFourPage.storeService.jsdShow)
}else{CommonFourPage.storeService.jsdHide()
}};
FourPage.initProductPrice=function(){try{if($("#J-tieIn").length>0){$("#J-tieIn").html("")
}if((sn.isPreBuy==1&&(preBuy.status==1||preBuy.status==2||preBuy.status==3||preBuy.status==5||preBuy.status==7))){sn.published="1"
}if(sn.published=="1"){FourPage.initProductPriceProcess()
}else{sn.promotionPrice="";
$("#productStatus").val("0");
$("#shipOffset").val("-1");
$("#productStatusDesc").val("-1");
qCodeHide();
$(".proinfo-main").hide();
$(".proinfo-main").html("");
$(".nopro").show();
$("#bookProcedure").hide();
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+(sn.vendor==undefined?"":sn.vendor)+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
CommonFourPage.Recommend.noPublishItems(sn.partNumber,"Recommend.noPublishItemsHtml");
FourPage.runDapushWhenReady()
}FourPage.initCluster();
iFourth.mainHeight();
getOldForNew("oldForNewShow")
}catch(b){}};
FourPage.initProductPriceProcess=function(){try{var b=sn.priceInvData;
sn.promotionPrice=sn.isPreBuy==1?sn.promotionPrice:b.promotionPrice;
sn.invStatus=b.invStatus;
if(sn.isPreBuy!="1"&&sn.promotionPrice!=""&&sn.promotionPrice!=undefined&&sn.notSaleProductGroup!="Y"&&sn.scodeType!="7"&&(sn.invStatus=="1"||sn.invStatus=="4")){Renxf.freenessPay()
}else{$("#freenessPay").hide()
}sn.govPrice=b.govPrice;
sn.netPrice=b.netPrice;
sn.itemPrice=b.itemPrice;
sn.refPrice=b.refPrice;
sn.salesOrg=b.salesOrg;
sn.deptNo=b.deptNo;
sn.vendor=b.vendor;
sn.sendCityId=b.sendCityId;
sn.vendorType=b.vendorType;
sn.ownerPlace=b.ownerPlace;
sn.accountPlace=b.accountPlace;
sn.manageInvFlag=b.manageInvFlag;
sn.factorySendFlag=b.factorySendFlag;
sn.sendAvalidTime=b.sendAvalidTime;
sn.priceType=sn.isPreBuy==1?sn.priceType:b.priceType;
if(typeof b.manageInvFlag!="undefined"&&b.manageInvFlag!=""){$("#manageInvFlag").val(b.manageInvFlag)
}if(sn.isPreBuy!=1){sn.priceType=(b.priceType).indexOf("4")>=0?"4":(b.priceType)
}if(sn.notSaleProductGroup=="Y"){b.invStatus="0"
}sn.productStatus=b.invStatus;
snga.productStatus=sn.isPreBuy==1&&b.invStatus=="2"?"":b.invStatus;
PriceShow.actionId=b.juId;
sn.TMFlag=sn.vendorType=="928TM"?true:false;
if(sn.TMFlag&&sn.vendorCode==""){sn.invStatus="0";
sn.priceInvData.invStatus="0"
}$("#shopNetPrice"+sn.vendorCode).find(".price").html("<i>&yen;</i><em>"+sn.promotionPrice+"</em>");
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
if(sn.promotionPrice!=""&&sn.promotionPrice!=undefined){$("#existPrice").show();
$("#noPrice").hide();
if(typeof b.invStatus!="undefined"&&b.invStatus=="1"){$("#productStatus").val("1");
$("#productStatusDesc").val("-1")
}else{if(typeof b.invStatus!="undefined"&&b.invStatus=="0"){$("#productStatus").val("4");
$("#productStatusDesc").val("2")
}else{$("#productStatus").val("2")
}}PriceShow.setPrice(sn.priceType,sn.netPrice,sn.promotionPrice,sn.priceController);
$("#cart2Price").html(sn.promotionPrice);
if(sn.cuxiaoChaifen=="0"){getItemPromStatus(sn.partNumber,"FourPage.showPromStatus")
}else{getICPSPromInfo(sn.partNumber,"FourPage.promInfoCallback")
}}else{$("#noPrice").show();
$(".proinfo-deliver-oversea").hide();
$("#productStatus").val("3");
$("#productStatusDesc").val("1");
$("#shipOffset").val("-1");
if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}snga.productStatus="3";
sn.invStatus="";
saleStatusThree();
FourPage.runDapushWhenReady();
sn.shopName="苏宁";
sn.reviewShopName="苏宁"
}initServiceOffInstall();
getFreightList(sn.partNumber,"showFreightList",showFreightListErr,showFreightList);
CommonFourPage.FourPage.initReturnOrChange(sn.partNumber,"FourPage.showReturnOrchange");
setTimeout(setiDiggerTrackingCodes,1000)
}catch(c){}iFourth.mainHeight();
iFourth.servLabel()
};
FourPage.initProductSaleStatus=function(){try{$("#vendorType").val(1);
var a=sn.priceInvData;
sn.preBuyFlag=0;
if((sn.isPreBuy==1&&(preBuy.status==1||preBuy.status==2||preBuy.status==3||preBuy.status==5||preBuy.status==7))){sn.preBuyFlag=1
}if(sn.notSaleProductGroup=="Y"){a.invStatus="0"
}if(sn.preBuyFlag!=1){if(a.invStatus=="1"||a.invStatus=="4"){$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
if(sn.scodeType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#tabAddCart").show();
if(typeof a.invStatus!="undefined"&&a.invStatus=="1"){$("#productStatus").val("1");
$("#productStatusDesc").val("-1")
}else{if(typeof a.invStatus!="undefined"&&a.invStatus=="0"){$("#productStatus").val("4");
$("#productStatusDesc").val("2")
}else{$("#productStatus").val("2");
$("#productStatusDesc").val("-1")
}}sn.status=true;
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege")
}else{$("#addCart").removeClass().addClass("btn-rush");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini")
}$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#buyNowAddCart").hide();
if(preBuy.preLimit==1){$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}CommonFourPage.Cart.getSunShine(sn.partNumber,Cart.sunShine);
if(document.reflashForm.sellType.value==0){$("#buycount").show()
}else{$("#buycount").hide()
}if(a.factorySendFlag=="1"){$(".ziti").parent().hide();
sn.ziti=false
}else{if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}}if(sn.isPreBuy!=1&&sn.isPreBuy!=2){$("#itHelp").show()
}else{$("#itHelp").hide()
}$("#J-slide1").hide();
$("#tellMe").hide();
$("#inerestBox").show()
}else{if(a.invStatus=="2"){$("#productStatus").val("2");
$("#productStatusDesc").val("-1");
if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#netPrice").show();
$("#tellMe").show();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.isPreBuy!=1&&sn.isPreBuy!=2){FourPage.initPhoneCss()
}sn.shipOffSetText="暂无货&nbsp 点<a class='b' name='item_"+sn.ninePartNumber+"_gmq_daohuotz02' href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!";
$("#nowProduct").html("暂无货&nbsp 点<a class='b'  href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!");
$("#nowProduct").addClass("red");
$("#c_kucun").html("无货");
$("#c_yunfei").hide();
$("#listProContent").hide();
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
sn.shipOffSetText="本商品在该城市暂无货";
$("#nowProduct").html("本商品在该城市暂无货");
$("#nowProduct").removeClass("red");
$("#tellMe").hide()
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}sn.status=true;
CommonFourPage.storeService.jsdHide();
qCodeHide();
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods");
FourPage.runDapushWhenReady()
}else{if(a.shipOffSetText==""){$("#productStatus").val("3");
$("#productStatusDesc").val("3");
snga.productStatus="3";
sn.shipOffSetText="很抱歉，本商品在此地暂不支持配送";
$("#nowProduct").html("很抱歉，本商品在此地暂不支持配送");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售");
$("#c_yunfei").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.isPreBuy!=1&&sn.isPreBuy!=2){FourPage.initPhoneCss()
}sn.status=false;
$("#PriceNotice1").hide();
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods");
$("#listProContent").hide();
$("#nowProduct").addClass("red")
}else{snga.productStatus="3";
sn.shipOffSetText="建议您选购其它商品";
saleStatusThree()
}if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide()
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}qCodeHide();
CommonFourPage.storeService.jsdHide();
FourPage.runDapushWhenReady()
}}}else{if(a.invStatus=="1"||a.invStatus=="4"){if(a.invStatus=="1"||a.invStatus=="4"){$("#c_kucun").html(a.inventoryText);
$("#nowProduct").html(a.shipOffSetText);
$("#nowProduct").removeClass("red")
}if(a.factorySendFlag=="1"){$(".ziti").parent().hide();
sn.ziti=false
}else{if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}}$("#buycount").show()
}else{if(a.invStatus=="2"){$("#c_kucun").html("无货");
$("#nowProduct").html("本商品在该城市暂无货");
$("#nowProduct").removeClass("red");
$("#tellMe").hide();
if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}$("#buycount").hide();
qCodeHide()
}else{snga.productStatus="3";
if(a.shipOffSetText==""){$("#nowProduct").html("很抱歉，本商品在此地暂不支持配送");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售")
}else{$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售")
}if(sn.sizeAttr=="2"){sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}$("#buycount").hide();
qCodeHide()
}}CommonFourPage.Cart.getSunShine(sn.partNumber,Cart.sunShine);
$("#buyNowAddCart").hide();
$("#c_kucun").hide();
$("#nowProduct").hide();
if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}}getDeliveryInfofunction(sn.partNumber,"showDeliveryInfo",showDeliveryInfoErr);
sn.shopName="苏宁";
sn.reviewShopName="苏宁";
if(sn.isPreBuy==2){resetBookCss()
}}catch(c){}iFourth.mainHeight();
FourPage.shareWb()
};
function initServiceOffInstall(){var b=$("#shop_code").val();
var c=$("#shop_status").val();
var a=sn.shopPath+sn.shopMainPh+"/"+b.substring(2,10)+"/index.html";
if(sn.factorySendFlag=="1"){if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售，厂家发货，并享受售后服务')
}else{$("#shopName").html('由"<span>苏宁</span>"销售，厂家发货，并享受售后服务')
}}else{if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售和发货，并享受售后服务')
}else{$("#shopName").html('由"<span>苏宁</span>"销售和发货，并享受售后服务')
}}}function initServiceHtml(e){var b=$("#shop_code").val();
var c=$("#shop_status").val();
var a=sn.shopPath+sn.shopMainPh+"/"+b.substring(2,10)+"/index.html";
if(typeof e=="undefined"||e.installType=="0"){if(sn.factorySendFlag=="1"){if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售并提供售后服务，厂家直接发货')
}else{$("#shopName").html('由"<span>苏宁</span>"销售并提供售后服务，厂家直接发货')
}}else{if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"直接销售和发货，并提供售后服务')
}else{$("#shopName").html('由"<span>苏宁</span>"销售和发货，并提供售后服务')
}}}else{if(e.installType=="1"){if(sn.factorySendFlag=="1"){if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售和安装，并提供售后服务，厂家直接发货')
}else{$("#shopName").html('由"<span>苏宁</span>"销售和安装，并提供售后服务，厂家直接发货')
}}else{if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售发货和安装，并提供售后服务')
}else{$("#shopName").html('由"<span>苏宁</span>"销售发货和安装，并提供售后服务')
}}}else{if(e.installType=="2"){if(sn.factorySendFlag=="1"){if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售并提供售后服务，厂家提供发货和安装')
}else{$("#shopName").html('由"<span>苏宁</span>"销售并提供售后服务，厂家提供发货和安装')
}}else{if(b!=null&&b!=""&&c=="0"){$("#shopName").html('由"<span><a href='+a+' name="item_'+sn.ninePartNumber+'_gmq_dianpu01" target="_blank">苏宁</a></span>"销售和发货，厂家提供安装')
}else{$("#shopName").html('由"<span>苏宁</span>"销售和发货，厂家提供安装')
}}}}}}function showDeliveryInfo(a){if(sn.cuxiaoType=="4-10"){$("#addCart").show();
$("#addCart2").show()
}if(a!=null&&a!=""){snga.shipOffset=a.shipOffSet;
sn.shipOffSet=a.shipOffSet;
sn.shipOffSetText=a.shipOffSetText;
sn.inventoryText=a.inventoryText;
sn.sendCityName=a.sendCityName;
if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}}if(sn.cflag=="0"){try{$("#vendorType").val(2);
if(sn.swlShopFlag){$("#vendorType").val(3);
$("#shopName").html('由"苏宁"直接发货，并提供售后服务');
if(sn.shipOffSet==""||sn.shipOffSet<0){sn.shipOffSetText="很抱歉，本商品在此地暂不支持配送";
$("#nowProduct").html("很抱歉，本商品在此地暂不支持配送");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售");
$("#c_yunfei").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#productStatus").val("5");
$("#productStatusDesc").val("3");
if(sn.isPreBuy!=1){$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
$("#tabAddCart").show();
if(!(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"))&&sn.silenceType!="Y"){$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}$("#PriceNotice1").hide()
}else{if(sn.isPreBuy==1){if(preBuy.type==2&&preBuy.status==4){$("#addCart").removeClass().addClass("btn-privilege-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(preBuy.type==2&&preBuy.status==6){$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}}}}else{if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}$("#nowProduct").html(a.shipOffSetText);
if(typeof PriceShow.bkflag!="undefined"&&PriceShow.bkflag!=null&&PriceShow.bkflag!="1"&&sn.cuxiaoType=="4-10"){$("#addCart").hide();
$("#addCart2").hide()
}}}else{if(a.shipOffSetText!=undefined){$("#nowProduct").html(a.shipOffSetText)
}if(typeof PriceShow.bkflag!="undefined"&&PriceShow.bkflag!=null&&PriceShow.bkflag!="1"&&sn.cuxiaoType=="4-10"){$("#addCart").hide();
$("#addCart2").hide()
}}if(sn.preBuyFlag!=1&&!sn.groupFlag){if(!((sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10")&&sn.silenceType=="Y")&&!(sn.priceType=="4"&&PriceShow.status==1)){$("#nowProduct").show()
}$("#c_kucun").show();
if(a.sendCityName!=undefined&&a.sendCityName!=""&&(!sn.hwgShopFlag||(sn.hwgShopFlag&&(sn.ownerPlace.indexOf("H")!=0&&sn.ownerPlace.indexOf("B")!=0&&sn.ownerPlace.indexOf("L")!=0)))){if(typeof($("#cShopFlag").val())!=undefined&&$("#cShopFlag").val()=="1"){$("#shopName").html('由"<span>'+sn.shopName+'</span>"从&nbsp;&nbsp;'+a.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}else{$("#shopName").html('由"'+sn.shopName+'"从&nbsp;&nbsp;'+a.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}}}else{$("#nowProduct").hide()
}if(sn.isPreBuy==1&&!preBuy.isEffect&&!sn.groupFlag){$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show()
}if(!sn.swlShopFlag){CommonFourPage.hwgDelivery(sn.hwgShopFlag)
}if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"&&!sn.groupFlag&&(!sn.swlShopFlag||(typeof sn.shipOffSet!="undefined"&&sn.shipOffSet>=0))){processQcode();
FourPage.processCShopO2OInfo();
setTimeout(processQcode,500)
}else{FourPage.withoutProductNum();
qCodeHide()
}}catch(c){}FourPage.runDapushWhenReady()
}else{if(sn.phoneFlag=="Y"&&sn.notSaleFlag){sn.shipOffSet=-1;
sn.shipOffSetText=""
}if(sn.shipOffSet<0&&(sn.invStatus=="1"||sn.invStatus=="4")){$("#vendorType").val(1);
$("#bigPolyVerify").hide();
sn.shipOffSetText="很抱歉，本商品在此地暂不支持配送";
$("#nowProduct").html("很抱歉，本商品在此地暂不支持配送");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售");
$("#c_yunfei").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
if(sn.isPreBuy!=1){if((PriceShow.activityFlag!=undefined||typeof PriceShow.activityFlag!="undefined"||PriceShow.activityFlag=="2")&&PriceShow.status==1){$("#buyNowAddCart").hide();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#addCart").removeClass().addClass("btn-group-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-group-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}else{$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}}else{$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if((PriceShow.activityFlag!=undefined&&typeof PriceShow.activityFlag!="undefined"&&PriceShow.activityFlag=="2")&&PriceShow.status==1){$("#preTime").show()
}else{$("#preTime").hide()
}}if(sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.phoneFlag=="Y"){getTreatyInfo(sn.partNumber,sn.provinceCode,sn.cityId,sn.districtId,sn.mdmProvinceId,sn.mdmCityId,FourPage.initPhoneStatus)
}else{FourPage.initPhoneCss()
}sn.status=false;
$("#PriceNotice1").hide();
if(sn.sellType!=1){CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}$("#listProContent").hide();
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide()
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}$("#listProContent").hide();
CommonFourPage.storeService.jsdHide()
}else{if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}if(sn.invStatus=="1"||sn.invStatus=="4"){if(PriceShow.activityFlag!=undefined&&typeof PriceShow.activityFlag!="undefined"&&PriceShow.activityFlag=="2"&&PriceShow.status==2){verifyBigPoly()
}if(sn.isPreBuy!=1&&sn.isPreBuy!=2){if((PriceShow.activityFlag!=undefined&&typeof PriceShow.activityFlag!="undefined"&&PriceShow.activityFlag=="2")&&(PriceShow.status==1||(PriceShow.status==2&&!sn.hwgShopFlag))){if(sn.cuxiaoSoldOut!="Y"){$("#preTime").show()
}}if((PriceShow.activityFlag!=undefined||typeof PriceShow.activityFlag!="undefined"||PriceShow.activityFlag=="2")&&PriceShow.status==1){$("#buyNowAddCart").hide();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#addCart").removeClass().addClass("btn-group-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-group-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}else{$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}}else{if(sn.silenceType!="Y"&&sn.cuxiaoSoldOut!="Y"&&PriceShow.serviceType!="7"){$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}else{if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}}if(sn.cuxiaoType=="4-10"){$("#addCart").hide();
$("#addCart2").hide()
}else{if(!(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"))&&sn.silenceType!="Y"){$("#addCart").removeClass().addClass("btn-addcart").attr("href","javascript:Cart.addCart();");
$("#addCart2").removeClass().addClass("btn-addcart-mini").attr("href","javascript:Cart.addCart();")
}}}$("#c_kucun").html(a.inventoryText);
$("#c_yunfei").hide();
$("#nowProduct").html(a.shipOffSetText);
$("#nowProduct").removeClass("red");
if($("#J-tieIn").length>0){if($("#J-tieIn").length>0){lazyElems["J-tieIn"].handle=Recommend.initFittingReady(sn.partNumber,"Recommend.callBackInitFittingReady");
lazyElems["J-tieIn"].enable=true
}else{$("#J-tieIn").html("");
$("#J-tieIn").hide();
$("li[rel=#J-tieIn]").hide()
}if($("#J-setMeal").length>0){lazyElems["J-setMeal"].enable=false;
$("#listProContent").find("li[rel=#J-tieIn]").addClass("current")
}}else{if($("#J-setMeal").length>0){lazyElems["J-setMeal"].enable=false;
$("#listProContent").find("li[rel=#J-setMeal]").addClass("current")
}}}else{$("#c_kucun").html(a.inventoryText);
$("#c_yunfei").hide();
$("#nowProduct").html(a.shipOffSetText);
$("#nowProduct").removeClass("red")
}if(sn.isPreBuy!=1&&sn.isPreBuy!=2&&sn.phoneFlag=="Y"&&!sn.preBuyFlag){getTreatyInfo(sn.partNumber,sn.provinceCode,sn.cityId,sn.districtId,sn.mdmProvinceId,sn.mdmCityId,FourPage.initPhoneStatus)
}else{FourPage.initPhoneCss()
}FourPage.initJSD();
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege")
}else{$("#addCart").removeClass().addClass("btn-rush");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini")
}$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#buyNowAddCart").hide();
if(preBuy.preLimit==1){$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}getDeliveryInstallfunction(sn.partNumber,sn.shipOffSet,"deliveryInstall")
}}if(!((sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10")&&sn.silenceType=="Y")&&!(sn.priceType=="4"&&PriceShow.status==1)){if(sn.preBuyFlag!=1||(sn.isPreBuy==1&&!preBuy.isEffect)){$("#c_kucun").show();
$("#nowProduct").show()
}else{$("#c_kucun").hide();
$("#nowProduct").hide()
}}$("#c_yunfei").hide();
snItemFree();
FourPage.processO2OInfo();
if(sn.shipOffSet<0){FourPage.runDapushWhenReady()
}}if(sn.isPreBuy==2){resetBookCss()
}iFourth.mainHeight()
}function showDeliveryInfoErr(){snga.shipOffset="";
sn.shipOffset="";
sn.shipOffSetText="";
sn.inventoryText="";
showDeliveryInfo("");
if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}if(sn.isPreBuy==2){resetBookCss()
}}FourPage.initCShopPrice=function(){document.reflashForm.sellType.value="0";
FourPage.initPhoneCss();
sn.preheat=false;
$("#vendorType").val(2);
if($("#J-tieIn").length>0){$("#J-tieIn").html("")
}CommonFourPage.getgroupCmmdtyRelation(FourPage.initGroupCmmdtyRelation,initCShopPriceProcess)
};
FourPage.initGroupCmmdtyRelation=function(b){if(typeof b!="undefined"&&b.length>0&&$("#groupItemList").length==0){sn.hasGroupCmm=true;
var a='<dl id="groupItemList" class="proinfo-buytype proattr-radio">';
a+="<dt>选择套餐</dt><dd><ul>";
a+='<li title="官方标配"><a onclick="FourPage.changeGroupCmmdty(\'1\',this);return false;" href="javascript:void(0);">官方标配<i></i></a></li>';
$.each(b,function(c,e){if(c==0){a+='<li title="'+e.characterValueDesc+'" class="selected" disName="'+e.itemName+'" disCount="'+e.imageCount+'"><a onclick="FourPage.changeGroupCmmdty(\''+e.groupCmmdtyCode+'\',this);return false;" href="javascript:void(0);">'+e.characterValueDesc+"<i></i></a></li>"
}else{a+='<li title="'+e.characterValueDesc+'"  disName="'+e.itemName+'"><a onclick="FourPage.changeGroupCmmdty(\''+e.groupCmmdtyCode+'\',this);return false;" href="javascript:void(0);">'+e.characterValueDesc+"<i></i></a></li>"
}});
a+='</ul><input type="hidden"/><dd></dl>';
$("#J-TZM").before(a);
CommonFourPage.Recommend.shopListItems(sn.partNumber,"Recommend.shopListItemsHtml");
$("#groupItemList ul").find(".selected").find("a").click()
}else{initCShopPriceProcess()
}};
FourPage.changeGroupCmmdty=function(c,e){$(e).parent().addClass("selected").siblings().removeClass("selected");
if(c=="1"){if($("#cslpBox li").length>1){FourPage.cShopListStatus();
$("#J-sideRec").hide()
}else{if($("#tuijianShopList li").length>0){$("#J-sideRec").show();
$("#c_shop_list").hide()
}else{FourPage.cShopListStatus();
$("#J-sideRec").hide()
}}sn.groupFlag=false;
if(sn.groupType==0&&sn.isPreBuy!="1"){sn.groupType="1";
initCShopPriceProcess()
}else{initChangeGroupCmmdtyCss("2")
}}else{if($("#tuijianShopList li").length>0){$("#J-sideRec").show();
$("#c_shop_list").hide()
}else{FourPage.cShopListStatus();
$("#J-sideRec").hide()
}if(!sn.groupFlag){sn.proPriceBoxHtml=$("#proPriceBox").html()
}sn.groupFlag=true;
sn.groupPartnumber=c;
var a=$(e).parent().attr("disName");
var b=$(e).parent().attr("disCount");
sn.groupImageCount=b!="undefined"&&b!=""?b:0;
a=a!="undefined"&&a!=""?a:"";
$("#itemDisplayName").html(a);
getItemSaleStatus(c,"showSaleStatus")
}};
function initGroupCmmdtyPrice(b){try{sn.groupInvPrice=b;
sn.groupPromotionPrice=b.promotionPrice;
initChangeGroupCmmdtyCss(sn.groupPartnumber);
if((sn.vendorType=="921C店"||sn.vendorType=="925SWL")&&sn.catenIds!=sn.jypwCatenIds){$("#jypw").show()
}else{$("#jypw").hide()
}var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassSupplier('"+sn.vendorCode+"','"+a+"','','');");
$("#callmeSide").attr("href","javascript:findpassSupplier('"+sn.vendorCode+"','"+a+"','','');");
if(sn.groupPromotionPrice!=""&&typeof sn.groupPromotionPrice!="undefined"){$("#existPrice").show();
$("#cart2Price").html(sn.groupPromotionPrice);
if(typeof b.invStatus!="undefined"&&b.invStatus=="1"){$("#productStatus").val("1");
$("#productStatusDesc").val("-1")
}else{if(typeof b.invStatus!="undefined"&&b.invStatus=="0"){$("#productStatus").val("3");
$("#productStatusDesc").val("2")
}else{$("#productStatus").val("2");
$("#productStatusDesc").val("-1")
}}getFreightList(sn.partNumber,"showFreightList",showFreightListErr,showFreightList)
}else{$("#noPrice").find("dt span").html("易购价");
$("#noPrice").show();
$(".proinfo-deliver-oversea").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").show();
$("#buyNowAddCart").hide();
$("#c_kucun").html("暂不销售");
$("#c_kucun").show();
$("#mianyunfei").parent().hide();
$("#c_yunfei").hide();
$("#buycount").hide();
$("#nowProduct").html("建议您选购其它商品");
sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").addClass("red");
$("#nowProduct").show();
$("#cart2Price").html("");
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}if(sn.swlShopFlag&&sn.sizeAttr=="2"){$("#vendorType").val(3);
sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}if(sn.swlShopFlag){$("#shopName").html('由"苏宁"直接发货，并享受售后服务')
}else{if(sn.sendCityName!=undefined&&sn.sendCityName!=""&&(!sn.hwgShopFlag||(sn.hwgShopFlag&&(b.ownerPlace.indexOf("H")!=0&&b.ownerPlace.indexOf("B")!=0&&b.ownerPlace.indexOf("L")!=0)))){if(typeof($("#cShopFlag").val())!=undefined&&$("#cShopFlag").val()=="1"){$("#shopName").html('由"<span>'+sn.shopName+'</span>"从&nbsp;&nbsp;'+sn.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}else{$("#shopName").html('由"'+sn.shopName+'"从&nbsp;&nbsp;'+sn.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}}else{$("#shopName").html('由"'+sn.shopName+'"销售和发货，并提供售后服务')
}}CommonFourPage.FourPage.initReturnOrChange(sn.partNumber,"FourPage.showReturnOrchange");
setTimeout(setiDiggerTrackingCodes,1000);
qCodeHide()
}catch(c){}iFourth.mainHeight();
FourPage.shareWb()
}function processImageCss(f,a){var e="";
var c="";
var g=sn.imageDomianDir+"/b2c/catentries/"+f;
for(var b=0;
b<a;
b++){e+="<li ";
if(b==0){e+='class="current"'
}e+='><a href="javascript:void(0);"><img alt="" src-large="'+g+"_"+(b+1)+'_800x800.jpg"src-medium="'+g+"_"+(b+1)+'_400x400.jpg" src="'+g+"_"+(b+1)+'_60x60.jpg"></a></li>';
c+='<li><a href="javascript:void(0);"><img src="'+g+"_"+(b+1)+'_100x100.jpg" src-large="'+g+"_"+(b+1)+'_800x800.jpg" alt="" /></a></li>'
}$(".imgzoom-thumb-main").find("ul").html(e);
$("#partNum").html(f.substring(9,18));
$("#partNumberLable").html(f.substring(9,18));
$("#bigImage").attr("src",$(".imgzoom-thumb-main").find("li[class=current]").find("a img").attr("src-large"));
$("#bigPic").html(c);
$(".imgview-count span").html(a)
}function initChangeGroupCmmdtyCss(h){if(!sn.hasGroupCmm){return
}$("#freenessPay").hide();
$("#loginFeedBack").hide();
$("#buyNum").val(1);
$("#buyNum").attr("max",99);
$("#productLimit").hide();
$("#preTime").hide();
$("#noPrice").hide();
$("#existPrice").hide();
$("#c_yunfei").hide();
$("#nowProduct").html("");
$("#addCart").siblings().hide();
$("#inerestBox").show();
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#bookProcedure").hide();
$("#bigPolyVerify").hide();
if(h=="1"||h=="2"){$("#loginFeedBack").show();
if(sn.isPavilion){$("#itemDisplayName").html('<a href="http://china.suning.com/" target="_blank"><span class="tsg">特色馆</span></a>'+sn.itemDisplayName)
}else{$("#itemDisplayName").html(sn.itemDisplayName)
}$("#partNumberLable").html(sn.partNumber.substring(9,18))
}else{$("#partNumberLable").html(sn.groupPartnumber.substring(9,18))
}if(h=="1"){if($("#tuijianShopList").find("li").length==0){FourPage.cShopListStatus()
}if(sn.isPreBuy==1||sn.isPreBuy==2){FourPage.initGroupCmmdtyPreAction()
}}else{if(h=="2"){if(typeof sn.proPriceBoxHtml!="undefined"&&sn.proPriceBoxHtml!=""){$("#proPriceBox").html(sn.proPriceBoxHtml)
}FourPage.showServiceName();
var c=$("#allcuxiao .promotion-content");
$.each(c,function(j,k){if($(k).html()!=""){$("#allcuxiao").show()
}});
if($("#tuijianShopList").find("li").length==0){FourPage.cShopListStatus()
}if(typeof sn.promotionPrice!="undefined"&&sn.promotionPrice!=""){$("#noPrice").hide();
$("#existPrice").show();
$("#promotionPriceBox").show()
}else{$("#noPrice").show();
$("#existPrice").hide()
}if(sn.isPreBuy==1||sn.isPreBuy==2){processQcode();
FourPage.initGroupCmmdtyPreAction()
}else{if(sn.promotionPrice!=""&&typeof sn.promotionPrice!="undefined"){if(sn.invStatus=="1"){if(sn.scodeType!="7"){Renxf.freenessPay()
}else{$("#freenessPay").hide()
}processQcode();
if(PriceShow.activityFlag==undefined||typeof PriceShow.activityFlag=="undefined"||PriceShow.activityFlag==""){$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#buyNowAddCart").show();
$("#buycount").show();
$("#preTime").hide();
FourPage.initCProductSaleStatus()
}else{if(PriceShow.activityFlag!=undefined||typeof PriceShow.activityFlag!="undefined"||PriceShow.activityFlag=="2"){if($.trim($("#bigPolyVerify").find("dd").html())!=""){$("#bigPolyVerify").show()
}if(PriceShow.status==1){$("#limitTime").html("即将开始");
$("#limitTime").show();
PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
$("#beginOrEnd").html("抢购开始");
if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum();
$("#preTime").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
PriceShow.activityFlag="2"
}else{if(PriceShow.status==2){PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
$("#beginOrEnd").html("倒计时");
if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}$("#preTime").show();
iFourth.buyNum();
var b=(parseInt(PriceShow.endTime)-parseInt(PriceShow.curTime))/1000;
if(parseInt(PriceShow.endTime)>parseInt(PriceShow.curTime)){if((sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSetText!="")){$("#preTime").show();
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}if(PriceShow.serviceType=="2"||PriceShow.serviceType=="3"){$("#buyReminder").show()
}$("#addCart").removeClass().addClass("btn-addcart").attr("href","javascript:Cart.addCart();");
$("#addCart2").removeClass().addClass("btn-addcart-mini").attr("href","javascript:Cart.addCart();")
}else{if(sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSetText=="")){$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
if(sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"){$("#tellMe").show()
}}}$(".proinfo-cd").find("input:hidden").val(b)
}if(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10")){$("#cuxiaoNoNum").show();
$("#cuxiaoEnd").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#buyReminder").hide();
$("#preTime").show();
$("#buyReminder").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-rush-mini-no")
}}else{$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{if(sn.silenceType!="Y"){$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}}$("#buycount").show();
$("#preTime").hide();
var a=parseInt(PriceShow.endTime);
var g=parseInt(PriceShow.curTime);
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){var e=parseInt(PriceShow.silenceTime)
}if(typeof e!="undefined"&&e!=""){if(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"){if(g>a&&g<=e){sn.silenceType="Y";
$("#limitTime").show();
$("#cuxiaoEnd").show();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-presell-mini-over")
}}}}}}}if(sn.preheat){if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)!=-1){if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#promotionPriceBox").show()
}else{PriceShow.priceController()
}}else{if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)!=-1){if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#promotionPriceBox").show()
}else{PriceShow.priceController();
if(sn.priceType=="4"){$("#PriceNotice2").hide()
}}}getDeliveryInfofunction(sn.partNumber,"showDeliveryInfo",showDeliveryInfoErr)
}else{$("#buycount").hide();
if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"){$("#mianyunfei").parent().show()
}else{$("#mianyunfei").parent().hide()
}swlItemFree();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#nowProduct").html("暂无货&nbsp 点<a class='b' href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!");
$("#nowProduct").addClass("red");
$("#nowProduct").show();
$("#tellMe").show();
$("#c_kucun").html("无货");
$("#c_yunfei").hide();
$("#netPrice").show();
$("#buyNowAddCart").hide();
$(".proinfo-deliver-oversea").hide();
if(PriceShow.activityFlag!=undefined||typeof PriceShow.activityFlag!="undefined"||PriceShow.activityFlag=="2"){if(PriceShow.status==1){$("#limitTime").html("即将开始");
$("#limitTime").show();
PriceShow.activityFlag="2";
$("#beginOrEnd").html("抢购开始");
$("#preTime").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
PriceShow.activityFlag="2"
}else{if(PriceShow.status==2){PriceShow.activityFlag="2";
var b=(parseInt(PriceShow.endTime)-parseInt(PriceShow.curTime))/1000;
if(parseInt(PriceShow.endTime)>parseInt(PriceShow.curTime)){$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
if(sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"){$("#tellMe").show()
}}}else{$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
var a=parseInt(PriceShow.endTime);
var g=parseInt(PriceShow.curTime);
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){var e=parseInt(PriceShow.silenceTime)
}if(typeof e!="undefined"&&e!=""){if(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"){if(g>a&&g<=e){sn.silenceType="Y";
$("#limitTime").show();
$("#cuxiaoEnd").show();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-presell-mini-over")
}}}}}}else{if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var f="";
if(preBuy.type==2&&preBuy.status==4){f="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
f="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+f+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
sn.shipOffSetText="本商品在该城市暂无货";
$("#nowProduct").html("本商品在该城市暂无货");
$("#nowProduct").removeClass("red");
$("#tellMe").hide()
}else{$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}qCodeHide();
FourPage.withoutProductNum()
}}else{$("#noPrice").show();
$(".proinfo-deliver-oversea").hide();
$("#productStatus").val("3");
$("#productStatusDesc").val("1");
initCShopOffSaleStatus()
}}iFourth.mainHeight()
}else{if(h!="0"&&h!="1"){if($("#tuijianShopList").find("li").length>0){$("#tuijianShopList").show()
}FourPage.showServiceName();
$("#c_shop_list").hide();
$("#buyReminder").hide();
$("#bigPolyVerify").hide();
$("#listProContent").hide();
$("#allcuxiao").hide();
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").attr("name","'item_"+sn.groupPartnumber+"_gmq_buy01'");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();");
$("#addCart2").attr("name","'item_"+sn.groupPartnumber+"_gmq_buy01'").removeAttr("target");
$("#buyNowAddCart").show();
$("#buyNum").val(1);
$("#buyNum").attr("max",99);
$("#preTime").hide();
$("#inerestBox").show();
$("#qrCode").hide();
iFourth.buyNum()
}}}}FourPage.initGroupCmmdtyPreAction=function(){$("#buyNowAddCart").hide();
if(sn.isPreBuy==2){$("#bookProcedure").show();
iFourth.presell();
resetBookCss()
}else{if(sn.isPreBuy==1){if(!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide()
}else{if(preBuy.type==1){if(preBuy.status==1){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-order-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}else{if(preBuy.status==2){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",appointUrl);
$("#addCart").attr("target","_blank");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljyy");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",appointUrl);
$("#addCart2").attr("target","_blank")
}else{if(preBuy.status==3){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}}else{if(preBuy.status==4){$("#nowProduct").show();
$("#c_kucun").show();
if(data.preLimit==1){$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}else{$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#yushouCount").hide()
}}else{$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}}}}if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}if(preBuy.status==3&&preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#preTime").hide()
}else{$("#preTime").show()
}}else{if(preBuy.type=="2"){if(preBuy.status==1){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-order-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}else{if(preBuy.status==2){$("#preTime").find("dt").html("预约结束");
$(".duration-time").val((data.scheduleEndTime-data.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",appointUrl);
$("#addCart").attr("target","_blank");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",appointUrl);
$("#addCart2").attr("target","_blank")
}else{if(preBuy.status==3){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(preBuy.priorPurchaseStartTime==""&&preBuy.priorPurchaseEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}}else{if(preBuy.status==4){if(data.preLimit==1){$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}else{$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yytqgm");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#yushouCount").hide()
}}else{if(preBuy.status==5){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}}else{if(preBuy.status==6){if(data.preLimit==1){$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}else{$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljqg");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljqg");
$("#yushouCount").hide()
}}else{if(preBuy.status==7){$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide()
}}}}}}}if(preBuy.type==2&&preBuy.status<=4){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}else{if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}}if((preBuy.status==3&&data.priorPurchaseStartTime==""&&data.priorPurchaseEndTime=="")||(preBuy.status==5&&data.purStartTime==""&&data.purEndTime=="")){$("#preTime").hide()
}else{$("#preTime").show()
}}else{$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-mobile-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">该商品为移动专享，如需购买请扫上方二维码</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-mobile-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#preTime").show()
}}}}}};
FourPage.initGroupCmmdtySaleStatus=function(a){try{$("#netPriceBox").hide();
$("#promotionPriceBox").find("dt span").html("易购价");
$("#promotionPriceBox").show();
var b=sn.groupPromotionPrice+"";
var f=parseFloat(b).toFixed(2);
priceHtml="<i>&yen;</i>"+f.substring(0,f.indexOf("."))+".<span>"+f.substring(f.indexOf(".")+1)+"</span>";
$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+priceHtml+'</span><span id="limitTime" class="label hide"></span><a id="PriceNotice2" class="btn-price-notice" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>');
$("#netPriceBox").hide();
if(a.invStatus=="1"){if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}if(sn.freight!="-1"){Renxf.freenessPay();
if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"||sn.swlShopFlag){$("#c_kucun").html("现货");
$("#c_yunfei").hide();
$("#mianyunfei").parent().show()
}else{$("#c_kucun").html("现货");
$("#c_yunfei").html("运费 &yen;"+sn.freight);
$("#c_yunfei").show();
$("#mianyunfei").parent().hide();
if(sn.cFreightFreeFlag){$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}if(sn.isPreBuy!=1&&sn.isPreBuy!=2){if($("#J-tieIn").length>0){lazyElems["J-tieIn"].enable=true;
lazyElems["J-tieIn"].handle=CommonFourPage.runInitCFittingReady(sn.partNumber,CommonFourPage.initCFitting);
$("#listProContent").find("li[rel=#J-tieIn]").addClass("current")
}}swlItemFree();
$("#nowProduct").html("");
$("#nowProduct").removeClass("red");
getDeliveryInfofunction(sn.partNumber,"showDeliveryInfo",showDeliveryInfoErr);
$("#buycount").show();
$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").show();
$("#buyNowAddCart").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart2").show();
$("#netPriceBox").hide();
$("#promotionPriceBox").show();
$("#limitTime").hide();
$("#J-slide1").hide()
}else{$(".proinfo-deliver-oversea").hide();
$("#productStatus").val("3");
$("#productStatusDesc").val("4");
$("#nowProduct").html("建议您选购其它商品");
sn.shipOffSetText="建议您选购其它商品";
$("#c_kucun").html("暂不销售");
$("#c_kucun").show();
$("#nowProduct").addClass("red");
$("#nowProduct").show();
$("#cart2Price").html("");
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").show();
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}}else{if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"){$("#mianyunfei").parent().show()
}else{$("#mianyunfei").parent().hide()
}$("#productStatus").val("2");
$("#productStatusDesc").val("-1");
swlItemFree();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#nowProduct").html("暂无货&nbsp 点<a class='b' href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!");
$("#nowProduct").addClass("red");
$("#nowProduct").show();
$("#tellMe").show();
$("#c_kucun").html("无货");
$("#c_kucun").show();
$("#c_yunfei").hide();
$("#netPrice").show();
$("#buyNowAddCart").hide();
$(".proinfo-deliver-oversea").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
qCodeHide();
FourPage.withoutProductNum();
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}}catch(c){}iFourth.mainHeight()
};
function initCShopPriceProcess(){try{var b=sn.priceInvData;
sn.promotionPrice=sn.isPreBuy==1?sn.promotionPrice:b.promotionPrice;
if(sn.isPreBuy!="1"&&sn.promotionPrice!=""&&sn.promotionPrice!=undefined&&sn.scodeType!="7"){Renxf.freenessPay()
}else{$("#freenessPay").hide()
}sn.netPrice=b.netPrice;
sn.itemPrice=b.itemPrice;
sn.refPrice=b.refPrice;
sn.salesOrg=b.salesOrg;
sn.deptNo=b.deptNo;
sn.vendor=b.vendor;
sn.sendCityId=b.sendCityId;
sn.vendorType=b.vendorType;
sn.ownerPlace=b.ownerPlace;
sn.accountPlace=b.accountPlace;
sn.manageInvFlag=b.manageInvFlag;
sn.factorySendFlag=b.factorySendFlag;
sn.sendAvalidTime=b.sendAvalidTime;
sn.priceType=sn.isPreBuy==1?sn.priceType:b.priceType;
if(b.manageInvFlag!=""&&typeof b.manageInvFlag!="undefined"){$("#manageInvFlag").val(b.manageInvFlag)
}if(sn.isPreBuy!=1){sn.priceType=(b.priceType).indexOf("4")>=0?"4":(b.priceType)
}sn.invStatus=b.invStatus;
sn.productStatus=b.invStatus;
snga.productStatus=sn.isPreBuy==1&&b.invStatus=="2"?"":b.invStatus;
PriceShow.actionId=b.juId;
initChangeGroupCmmdtyCss("1");
if((sn.vendorType=="921C店"||sn.vendorType=="925SWL")&&sn.catenIds!=sn.jypwCatenIds){$("#jypw").show()
}else{$("#jypw").hide()
}var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"_"+sn.vendorCode+"_.html";
$("#callme").attr("href","javascript:findpassSupplier('"+sn.vendorCode+"','"+a+"','','');");
$("#callmeSide").attr("href","javascript:findpassSupplier('"+sn.vendorCode+"','"+a+"','','');");
getFreightList(sn.partNumber,"showFreightList",showFreightListErr,showFreightList);
$("#shopNetPrice"+sn.vendorCode).find(".price").html("<i>&yen;</i><em>"+sn.promotionPrice+"</em>");
if(sn.isPreBuy==1){$("#shop"+sn.vendorCode+" .price").eq(0).siblings("i").remove()
}if(sn.promotionPrice!=""&&typeof sn.promotionPrice!="undefined"){$("#existPrice").show();
$("#noPrice").hide();
$("#cart2Price").html(sn.promotionPrice);
if(typeof b.invStatus!="undefined"&&b.invStatus=="1"){$("#productStatus").val("1");
$("#productStatusDesc").val("-1")
}else{if(typeof b.invStatus!="undefined"&&b.invStatus=="0"){$("#productStatus").val("3");
$("#productStatusDesc").val("2")
}else{$("#productStatus").val("2");
$("#productStatusDesc").val("-1")
}}if(sn.cuxiaoChaifen=="0"){getItemPromStatus(sn.partNumber,"FourPage.showPromStatus")
}else{getICPSPromInfo(sn.partNumber,"FourPage.promInfoCallback")
}}else{$("#noPrice").show();
$(".proinfo-deliver-oversea").hide();
$("#productStatus").val("3");
$("#productStatusDesc").val("1");
initCShopOffSaleStatus()
}if(sn.swlShopFlag&&sn.sizeAttr=="2"){$("#vendorType").val(3);
sn.ziti=true;
$(".ziti").parent().show()
}else{sn.ziti=false;
$(".ziti").parent().hide()
}FourPage.showServiceName();
CommonFourPage.FourPage.initReturnOrChange(sn.partNumber,"FourPage.showReturnOrchange");
setTimeout(setiDiggerTrackingCodes,1000)
}catch(c){}if(!sn.hwgShopFlag){FourPage.getCShopAttr()
}if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}iFourth.mainHeight();
FourPage.shareWb()
}FourPage.initCProductSaleStatus=function(){try{var a=sn.priceInvData;
sn.preBuyFlag=0;
if((sn.isPreBuy==1&&(preBuy.status==1||preBuy.status==2||preBuy.status==3||preBuy.status==5||preBuy.status==7))){sn.preBuyFlag=1
}snga.productStatus=sn.isPreBuy==1&&a.invStatus=="2"?"":a.invStatus;
snga.shipOffset=a.shipOffSet;
sn.invStatus=a.invStatus;
if(typeof snga.productStatus!="undefined"&&snga.productStatus=="1"){$("#productStatus").val("1");
$("#productStatusDesc").val("-1")
}else{if(typeof snga.productStatus!="undefined"&&snga.productStatus=="0"){$("#productStatus").val("3");
$("#productStatusDesc").val("2")
}else{$("#productStatus").val("2");
$("#productStatusDesc").val("-1")
}}if(sn.preBuyFlag!=1){if(a.invStatus=="1"){if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}if(sn.freight!="-1"){if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"||sn.swlShopFlag){$("#c_kucun").html("现货");
$("#c_yunfei").hide();
$("#mianyunfei").parent().show()
}else{$("#c_kucun").html("现货");
$("#c_yunfei").html("运费 &yen;"+sn.freight);
$("#c_yunfei").show();
$("#mianyunfei").parent().hide();
if(sn.cFreightFreeFlag){$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}if(sn.isPreBuy!=1&&sn.isPreBuy!=2){if($("#J-tieIn").length>0){lazyElems["J-tieIn"].enable=true;
lazyElems["J-tieIn"].handle=CommonFourPage.runInitCFittingReady(sn.partNumber,CommonFourPage.initCFitting);
$("#listProContent").find("li[rel=#J-tieIn]").addClass("current")
}}swlItemFree();
$("#nowProduct").html("");
$("#nowProduct").removeClass("red");
getDeliveryInfofunction(sn.partNumber,"showDeliveryInfo",showDeliveryInfoErr);
$("#buycount").show();
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege")
}else{$("#addCart").removeClass().addClass("btn-rush");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini")
}$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#buyNowAddCart").hide();
if(preBuy.preLimit==1){$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}else{$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").show();
if(sn.scodeType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target")
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)==-1){PriceShow.priceController()
}else{if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#promotionPriceBox").show();
$("#limitTime").hide()
}$("#J-slide1").hide();
if(sn.swlShopFlag){$("#itHelp").show()
}if(sn.swlShopFlag){FourPage.initJSD()
}if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}}else{$(".proinfo-deliver-oversea").hide();
$("#productStatus").val("3");
$("#productStatusDesc").val("4");
initCShopOffSaleStatus();
FourPage.withoutProductNum()
}if(sn.catenIds==sn.footTickCatenIds){$("#addCart").hide();
$("#addCart2").hide();
qCodeHide()
}}else{if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"){$("#mianyunfei").parent().show()
}else{$("#mianyunfei").parent().hide()
}$("#productStatus").val("2");
$("#productStatusDesc").val("-1");
swlItemFree();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#nowProduct").html("暂无货&nbsp 点<a class='b' href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!");
$("#nowProduct").addClass("red");
$("#nowProduct").show();
$("#tellMe").show();
$("#c_kucun").html("无货");
$("#c_yunfei").hide();
$("#netPrice").show();
$("#buyNowAddCart").hide();
$(".proinfo-deliver-oversea").hide();
if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var b="";
if(preBuy.type==2&&preBuy.status==4){b="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
b="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+b+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
sn.shipOffSetText="本商品在该城市暂无货";
$("#nowProduct").html("本商品在该城市暂无货");
$("#nowProduct").removeClass("red");
$("#tellMe").hide()
}else{$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}qCodeHide();
FourPage.withoutProductNum();
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}}else{$("#buyNowAddCart").hide();
$("#buycount").show();
if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"){$("#mianyunfei").parent().show()
}else{$("#mianyunfei").parent().hide()
}if(sn.freight!="-1"){if(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费"||sn.swlShopFlag){$("#c_kucun").html("现货");
$("#c_yunfei").hide();
$("#mianyunfei").parent().show()
}else{$("#c_kucun").html("现货");
$("#c_yunfei").html("运费 &yen;"+sn.freight);
$("#c_yunfei").show();
$("#mianyunfei").parent().hide();
if(sn.cFreightFreeFlag){$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}}swlItemFree();
if(a.invStatus=="1"){if(sn.freight!="-1"){$("#c_kucun").html("现货");
sn.shipOffSetText="";
$("#nowProduct").html("");
$("#nowProduct").removeClass("red");
getDeliveryInfofunction(sn.partNumber,"showDeliveryInfo",showDeliveryInfoErr)
}else{snga.productStatus="3";
$("#c_kucun").html("暂不销售");
sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("red");
$(".proinfo-deliver-oversea").hide();
qCodeHide()
}}else{$("#c_kucun").html("无货");
sn.shipOffSetText="本商品在该城市暂无货";
$("#nowProduct").html("本商品在该城市暂无货");
$("#nowProduct").removeClass("red");
$("#tellMe").hide();
if(sn.preBuyFlag==1){$("#nowProduct").hide()
}else{$("#nowProduct").show()
}$(".proinfo-deliver-oversea").hide();
qCodeHide();
FourPage.withoutProductNum()
}$("#c_kucun").hide();
$("#nowProduct").hide();
if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}}}catch(c){}if(sn.isPreBuy==2){resetBookCss()
}FourPage.runDapushWhenReady();
iFourth.mainHeight()
};
function showFreightList(a){sn.fareList=a;
FourPage.fareHtml()
}function showFreightListErr(){try{if(sn.vendorCode==""||sn.swlShopFlag){var a=parseFloat(sn.snslt);
var b=parseFloat(sn.promotionPrice);
if(a<=0||sn.shipChargeLimitAmount==""||sn.shipChargeLimitAmount==undefined){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().removeAttr("title")
}else{if(sn.promotionPrice==""||sn.promotionPrice==undefined||b>=a){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().attr("title",a+"元以上订单免运费（限苏宁配送商品）")
}else{if(b<a){$("#mianyunfei").html('<i class="icon"></i>满'+sn.snslt+"元免运费");
$("#mianyunfei").parent().attr("title",a+"元以上订单免运费（限苏宁配送商品）")
}}}}else{sn.shippingCharge="-1";
sn.freight="-1";
PriceShow.setPrice(sn.priceType,sn.netPrice,sn.promotionPrice,sn.priceController)
}}catch(c){}}FourPage.fareHtml=function(h){try{var k=sn.fareList;
var a=false;
if(typeof k!="undefined"){if(h=="1"&&sn.shopList.length>0){var b="";
if(sn.shopList[0].vendorCode=="0000000000"||sn.shopList[0].vendorCode==""||sn.shopList[0].vendorCode=="undefined"){b=""
}else{b=sn.shopList[0].vendorCode
}if($("#fare"+b).html()==""){for(var c=0;
c<k.length;
c++){var g=k[c].vendorCode=="0000000000"?"":k[c].vendorCode;
var f=$("#shopNetPrice"+g+" em").html();
if(k[c].fare=="-1"){$("#fare"+g).hide()
}else{$("#fare"+g).show();
if(k[c].fare==""||k[c].fare=="0"||k[c].fare=="0.00"||k[c].fare==".00"||k[c].fare=="免运费"||typeof f=="undefined"||f==""){$("#fare"+g).html("<span>免运费</span>")
}else{$("#fare"+g).html('<span>运费:</span><span class="price"><i>&yen;</i><em>'+parseFloat(k[c].fare).toFixed(2)+"</em></span>")
}}if(k[c].vendorCode=="0000000000"&&(parseFloat(sn.shipChargeLimitAmount)<=parseFloat(f)||sn.promotionPrice=="")){$("#fare"+g).html("<span>免运费</span>")
}}snItemFree();
if(sn.cFreightFreeFlag&&sn.vendorCode!=""){$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}}else{for(var c=0;
c<k.length;
c++){if((k[c].vendorCode=="0000000000"&&(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003"||sn.swlShopFlag==true))||(k[c].vendorCode==sn.vendorCode)){sn.shippingCharge=sn.isPreBuy!=2?k[c].fare:"";
sn.freight=k[c].fare;
a=true
}if(k[c].vendorCode=="0000000000"){sn.snsltFare=k[c].fare;
sn.shipChargeLimitAmount=k[c].snslt!=undefined?k[c].snslt:"";
sn.snslt=sn.shipChargeLimitAmount
}var g=k[c].vendorCode=="0000000000"?"":k[c].vendorCode;
var f=$("#shopNetPrice"+g+" em").html();
if(k[c].fare=="-1"){$("#fare"+g).hide()
}else{$("#fare"+g).show();
if(k[c].fare==""||k[c].fare=="0"||k[c].fare=="0.00"||k[c].fare==".00"||k[c].fare=="免运费"||f==undefined||f==""){$("#fare"+g).html("<span>免运费</span>")
}else{$("#fare"+g).html('<span>运费:</span><span class="price"><i>&yen;</i><em>'+parseFloat(k[c].fare).toFixed(2)+"</em></span>")
}}if(k[c].vendorCode=="0000000000"&&(parseFloat(sn.shipChargeLimitAmount)<=parseFloat(f)||sn.promotionPrice=="")){$("#fare"+g).html("<span>免运费</span>")
}}if(!a){if(!(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003"||sn.swlShopFlag)){sn.freight="-1";
sn.shippingCharge="-1"
}else{sn.freight="免运费";
sn.shippingCharge="免运费"
}}if(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003"){snItemFree()
}else{if(sn.swlShopFlag){swlItemFree()
}if(sn.promotionPrice!=""){PriceShow.setPrice(sn.priceType,sn.netPrice,sn.promotionPrice,sn.priceController)
}}if(sn.groupFlag){FourPage.initGroupCmmdtySaleStatus(sn.groupInvPrice)
}}initShopListSWLFare();
if(sn.cFreightFreeFlag&&sn.vendorCode!=""){$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}if(!sn.groupFlag){if(sn.isPreBuy==2){sn.freight="0";
sn.shippingCharge="0";
shipChargeLimitAmount="0";
$("#fare"+sn.vendorCode).html("<span>免运费</span>").show();
$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().show()
}else{if(sn.vendorCode!=""&&typeof sn.freight!="undefined"&&sn.freight!=""&&sn.freight!="-1"&&!sn.swlShopFlag&&!(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费")){$("#c_yunfei").html("运费 &yen;"+sn.freight);
$("#c_yunfei").show()
}else{$("#c_yunfei").html();
$("#c_yunfei").show()
}}}}catch(j){}};
function initShopListSWLFare(){var e=sn.shopList;
if(e!=null&&e.length>0){for(var a=0;
a<e.length;
a++){if(e[a].shopType=="925SWL"){var b=e[a].vendorCode;
var c=e[a].productPrice==""?0:parseFloat(e[a].productPrice);
if(typeof sn.shipChargeLimitAmount=="undefined"||sn.shipChargeLimitAmount==""||parseFloat(sn.shipChargeLimitAmount)<=0||c>=parseFloat(sn.shipChargeLimitAmount)||sn.snsltFare==0){$("#fare"+b).html("<span>免运费</span>")
}else{$("#fare"+b).html('<span>运费:</span><span class="price"><i>&yen;</i><em>'+parseFloat(sn.snsltFare).toFixed(2)+"</em></span>")
}}}}}function snItemFree(){if(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003"){if(sn.isPreBuy==2){sn.snslt="0"
}var a=parseFloat(sn.snslt);
var b=parseFloat(sn.promotionPrice);
if(a<=0||sn.shipChargeLimitAmount==""||sn.shipChargeLimitAmount==undefined){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().removeAttr("title");
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}else{if(sn.promotionPrice==""||sn.promotionPrice==undefined||b>=a){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().attr("title",a+"元以上订单免运费（限苏宁配送商品）");
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}else{if(b<a){$("#mianyunfei").html('<i class="icon"></i>满'+sn.snslt+"元免运费");
$("#mianyunfei").parent().attr("title",a+"元以上订单免运费（限苏宁配送商品）");
$("#fare"+sn.vendorCode).html('<span>运费:</span><span class="price"><i>¥</i><em>'+parseFloat(sn.freight).toFixed(2)+"</em></span>");
if($(".ziti").parent().is(":visible")){$(".ziti").html('<i class="icon"></i>自提(免运费)')
}}}}}}function swlItemFree(){if(sn.swlShopFlag){if(sn.isPreBuy==2){sn.snslt="0"
}var a=parseFloat(sn.snslt);
var b=parseFloat(sn.promotionPrice);
if(a<=0||sn.shipChargeLimitAmount==""||sn.shipChargeLimitAmount==undefined){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().removeAttr("title");
$("#fare"+sn.vendorCode).html("<span>免运费</span>");
$("#mianyunfei").parent().show()
}else{if(sn.promotionPrice==""||sn.promotionPrice==undefined||b>=a){$("#mianyunfei").html('<i class="icon"></i>免运费');
$("#mianyunfei").parent().attr("title",sn.snslt+"元以上订单免运费（限苏宁配送商品）");
$("#fare"+sn.vendorCode).html("<span>免运费</span>");
$("#mianyunfei").parent().show()
}else{if(b<a){$("#mianyunfei").html('<i class="icon"></i>满'+sn.snslt+"元免运费");
$("#mianyunfei").parent().attr("title",sn.snslt+"元以上订单免运费（限苏宁配送商品）");
$("#fare"+sn.vendorCode).html('<span>运费:</span><span class="price"><i>¥</i><em>'+parseFloat(sn.freight).toFixed(2)+"</em></span>");
$("#mianyunfei").parent().show();
if($(".ziti").parent().is(":visible")){$(".ziti").html('<i class="icon"></i>自提(免运费)')
}}}}}}FourPage.showShopList=function(b){try{var t=false;
var v=b;
var l="";
var w="";
sn.brandHtml="";
var m="";
var a=$("#shop_code").val();
var u=$("#shop_name").val();
var j=$("#shop_status").val();
sn.brandShopCode=a;
sn.brandShopName=u;
sn.brandShopStatus=j;
if(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003")){if(a!=null&&a!=""){sn.brandHtml="si-wrap si-ultimate"
}else{sn.brandHtml="si-wrap si-own"
}}else{sn.brandHtml="si-wrap si-own"
}var g="";
if(a!=null&&a!=""){g=sn.shopPath+sn.shopMainPh+"/"+a.substring(2,10)+"/index.html"
}else{g=sn.brandDomain+"/"+a+"/index.html"
}sn.shopUrl=g;
if(v!=null&&v.length>0){m=sn.sellerDomain+sn.ninePartNumber+".html";
sn.shopCount=v.length;
var r="";
for(var n=0;
n<v.length;
n++){if(typeof v[n].shopType=="undefined"&&typeof v[n].bizType!="undefined"){if(v[n].bizType==1){v[n].shopType="925SWL"
}else{if(v[n].bizType==3){v[n].shopType="927HWG"
}else{v[n].shopType=v[n].bizType
}}}var c="";
if(v[n].bizCode=="0000000000"||v[n].bizCode==""||v[n].bizCode=="undefined"){c=""
}else{c=v[n].bizCode
}if(sn.shopType=="-1"&&(sn.vendorCode==v[n].bizCode||(sn.vendorCode==""&&v[n].bizCode=="0000000000"))){t=true;
r=v[n];
if(typeof sn.vendorType=="undefined"||sn.vendorType==""){sn.vendorType=c.shopType
}}if(n<5){var o="";
var k="";
try{var h=window.location.href.split("?")[1];
k=typeof h!="undefined"?("?"+h):""
}catch(p){}var q=k.indexOf("#");
if(q!=-1){k=k.substring(0,q)
}if(v[n].bizCode=="0000000000"||v[n].bizCode==""||v[n].bizCode=="undefined"){if(a!=null&&a!=""){l+='<li id="shop" rating="0%" class="'+(n==0?"first":"")+'">';
o=sn.itemDomain+"/0000000000/"+sn.partNumber.substring(9,18)+".html"+k;
l+='<a name="item_'+sn.ninePartNumber+"_shop_allshop010"+(n+1)+'" title="苏宁自营" href="'+o+'"><div class="si-name">苏宁自营</div>'
}else{l+='<li id="shop" rating="0%" class="'+(n==0?"first":"")+'">';
o=sn.itemDomain+"/0000000000/"+sn.partNumber.substring(9,18)+".html"+k;
l+='<a name="item_'+sn.ninePartNumber+"_shop_allshop010"+(n+1)+'" title="" href="'+o+'"><div class="si-name"></div>'
}}else{l+='<li id="shop'+v[n].bizCode+'" rating="0%" class="'+(n==0?"first":"")+'">';
o=sn.itemDomain+"/"+v[n].bizCode+"/"+sn.partNumber.substring(9,sn.partNumber.length)+".html"+k;
l+='<a name="item_'+sn.ninePartNumber+"_shop_allshop010"+(n+1)+'" title="" href="'+o+'"><div class="si-name"></div>'
}if(typeof v[n].priceType!="undefined"&&v[n].priceType!="1"&&v[n].priceType!=""){l+='<div class="si-main-info"><div id="shopNetPrice'+c+'" class="si-fl"><i class="tag tag-cu"></i><span class="price"><i>&yen;</i><em>'+((v[n].price!=""&&!isNaN(v[n].price))?(parseFloat(v[n].price).toFixed(2)):v[n].price)+"</em></span></div>"
}else{l+='<div class="si-main-info"><div id="shopNetPrice'+c+'" class="si-fl"><span class="price"><i>&yen;</i><em>'+((v[n].price!=""&&!isNaN(v[n].price))?(parseFloat(v[n].price).toFixed(2)):v[n].price)+"</em></span></div>"
}l+='<div class="trans-charge si-fr" id="fare'+c+'">';
l+="</div></div></a>";
l+="</li>"
}}}if(sn.shopType=="-1"&&!t){sn.shopCount+=1
}sn.shopList=v;
shopInfoList=v;
w+='<span class="si-role si-fl">更多商家</span><span class="si-name si-fr"><a name="item_'+sn.ninePartNumber+'_shop_allshop01" title="'+v.length+'家" target="_blank" href="'+m+'">'+v.length+"家</a></span>";
if(sn.shopType!="-1"&&sn.shopType=="0"){FourPage.brandShopInfoHtml();
var f=$("#curShop").html();
if(typeof f!="undefined"&&f!=null&&f!=""){cshopDesc=f
}}cshopList=w+l;
$("#moreShop").html(w);
$("#cslpBox").html(l);
$("#cshopBox").show();
if((sn.shopType=="0"||sn.shopType=="-1")&&sn.vendorCode==""&&$("#curShop").length<1){$("#cshopBox").html('<div class="proinfo-side-inner"><div id="curShop" class="si-wrap si-own">'+cshopDesc+'</div><div id="c_shop_list" class="si-wrap store-more"><h3 id="moreShop" class="si-head">'+w+'</h3><div class="si-main"><ul id="cslpBox" class="clearfix">'+l+'</ul><div class="more-info"><div class="info-row"><span class="row-name">评分：</span><span class="row-val star-bg"><i class="star-val"></i></span></div><div class="info-row"><span class="row-name">好评：</span><span class="row-val good-val">96%</span></div><i class="icon-arrow-right"></i></div></div></div><div id="J-sideRec" class="si-rec" style="display:none;"><div class="si-rec-head"><a name="item_'+sn.ninePartNumber+'_shop_next" class="more" href="javascript:void(0);">换一组</a><h3>同类推荐</h3></div><ul id="tuijianShopList" class="si-rec-list"><div class="loading-holder"></div></ul></div></div>')
}if(sn.shopType=="-1"){iFourth.showRating.start()
}FourPage.getVendorListInfo(sn.shopList);
if(v!=null&&v.length==1){snShopFlag=true;
$("#c_shop_list").hide();
if(sn.brandFlag==""&&!sn.donateFlag){CommonFourPage.Recommend.shopListItems(sn.partNumber,"Recommend.shopListItemsHtml")
}}else{FourPage.cShopListStatus();
$("#tuijianShopList").html('<div class="loading-holder"></div>');
$("#J-sideRec").hide()
}$("#shop"+sn.vendorCode).addClass("selected");
$("#shopNetPrice"+sn.vendorCode).find(".price").html("<i>&yen;</i><em>"+sn.promotionPrice+"</em>")
}catch(p){}FourPage.showServiceName();
getShopScoreList("shopReviewScore");
if(!sn.donateFlag){FourPage.fareHtml("1")
}FourPage.addShopListCss();
iFourth.mainHeight()
};
FourPage.getVendorListInfo=function(b){isExistshop=false;
var e=b.length;
if(e>0){var a="";
for(var c=0;
c<5;
c++){if(typeof b[c]!="undefined"&&b[c].bizCode!=""){a+=b[c].bizCode;
a+="-"
}}if(a!=""){a=a.substring(0,a.length-1)
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/getVendorListInfo_"+a+".html",type:"get",async:false,dataType:"json",success:function(j){if(typeof j.shopInfoList!="undefined"){var f=j.shopInfoList;
if(f!=""&&f.length>0){for(var g=0;
g<f.length;
g++){var h=f[g].vendorCode=="0000000000"?"":f[g].vendorCode;
$("#shop"+h+" .si-name").html(f[g].shopName);
if(sn.vendorCode==h){isExistshop=true;
if(sn.shopType=="-1"){var k=FourPage.showShopInfoHtml(f[g])
}$("#curShop").html(k);
FourPage.showServiceName();
FourPage.scoreHtml()
}}}}if($.trim($("#cshopBox").html()).length>0){cshopHtml=$("#cshopBox").html()
}if(sn.groupFlag){sn.cShopListFlag="1";
$("#c_shop_list").hide()
}if(!isExistshop&&sn.shopType=="-1"){getVendorInfo(showCurVendorInfo)
}iFourth.mainHeight()
},error:function(){if(sn.shopType=="-1"){getVendorInfo(showCurVendorInfo)
}}})
}};
FourPage.brandShopInfoHtml=function(){var a="";
if(sn.brandShopCode!=null&&sn.brandShopCode!=""){if(sn.brandFlag!=""){if(sn.brandShopStatus=="0"||sn.brandShopStatus==null||sn.brandShopStatus==""){$("#shopMain").html('<span class="si-role">商家：</span><span id="curShopName" class="si-name"><a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+sn.shopUrl+'">'+sn.brandShopName+'<i class="ie"></i></a></span>')
}else{$("#shopMain").html('<span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">'+sn.brandShopName+'</span><i class="ie"></i>')
}sn.reviewShopName=sn.brandShopName
}else{if(sn.brandShopStatus=="0"||sn.brandShopStatus==null||sn.brandShopStatus==""){$("#shopMain").html('<span class="si-role">商家：</span><span id="curShopName" class="si-name"><a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+sn.shopUrl+'">苏宁自营<i class="ie"></i></a></span>')
}else{$("#shopMain").html('<span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">苏宁自营</span><i class="ie"></i>')
}sn.reviewShopName=sn.brandShopName
}if(sn.brandShopStatus=="0"||sn.brandShopStatus==null||sn.brandShopStatus==""){a+='<div class="si-website"><a class="si-btn si-btn-yellow" target="_blank" name="item_'+sn.ninePartNumber+'_shop_jinru01" href='+sn.shopUrl+"><span>进入店铺</span></a></div>"
}else{a+='<div class="si-website"><span class="si-btn si-btn-disabled" title="店铺装修中">店铺装修中</span></div>'
}$("#satisfaction").siblings().remove();
$("#satisfaction").after(a);
$("#curShop").removeClass().addClass("si-wrap si-ultimate")
}else{if((sn.brandShopCode==null||sn.brandShopCode=="")&&(sn.vendorCode.substring(0,3)=="003")){$("#shopMain").html('<span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">苏宁自营</span>');
$("#curShop").removeClass().addClass("si-wrap si-own")
}else{$("#curShop").removeClass().addClass("si-wrap si-own")
}}};
FourPage.addShopListCss=function(){if(sn.hwgShopFlag){if($(".si-main-oversea").length<1){$("#curShop").find(".si-main").addClass("si-main-oversea")
}}else{$("#curShop").find(".si-main").removeClass("si-main-oversea")
}};
FourPage.showShopInfoHtml=function(b){var a="";
if(typeof b.vendorCode=="undefined"&&typeof b.bizCode!="undefined"){b.vendorCode=b.bizCode
}if(b.vendorCode=="SN_001"){b.vendorCode="0000000000"
}if(typeof b.shopName=="undefined"){b.shopName=""
}try{if(b.shopStatus!=undefined&&b.shopStatus=="0"&&b.vendorCode!=""&&b.vendorCode!="0000000000"&&b.vendorCode!="undefined"){if(b.secUrl!=undefined&&b.secUrl!=""){sn.secUrl=b.secUrl
}$("#curShop").removeClass().addClass("si-wrap si-own");
a+='<h3 id="shopMain" class="si-shopname"><span class="si-role">商家：</span><span id="curShopName" class="si-name"><a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+(b.secUrl!=undefined&&b.secUrl!=""?b.secUrl:(sn.shopPath+sn.shopMainPh+"/"+b.vendorCode.substring(2,10)+"/index.html"))+'">'+b.shopName+"</a></span></h3>"
}else{if(b.vendorCode==""||b.vendorCode=="0000000000"||b.vendorCode=="undefined"){if(sn.brandShopCode!=null&&sn.brandShopCode!=""){if(sn.brandShopStatus=="0"||sn.brandShopStatus==null||sn.brandShopStatus==""){a+='<h3 class="si-shopname"><span class="si-role">商家：</span><span id="curShopName" class="si-name"><a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+sn.shopUrl+'" title="苏宁自营">苏宁自营<i class="ie"></i></a></span></h3>'
}else{a+='<h3 class="si-shopname"><span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">苏宁自营</span><i class="ie"></i></h3>'
}$("#curShop").removeClass().addClass("si-wrap si-ultimate")
}else{a+='<h3 class="si-shopname"><span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">'+b.shopName+"</span></h3>";
$("#curShop").removeClass().addClass("si-wrap si-own")
}}else{a+='<h3 class="si-shopname"><span class="si-role fwn">商家：</span><span id="curShopName" class="si-name fwn">'+b.shopName+"</span></h3>";
$("#curShop").removeClass().addClass("si-wrap si-own")
}}sn.reviewShopName=b.shopName;
a+='<div class="si-main">';
a+='<ul class="clearfix"><li><div class="si-rating si-fl"><span class="rating-name">商家满意度</span><span class="rating-val"><em></em></span></div>';
a+='<div class="si-range si-range-title si-fr"><span>与同行业相比</span></div></li>';
a+='<li><div class="si-rating si-fl"><span class="rating-name">商品评分：</span><span class="rating-val"><em id="gSatisfy"></em>分</span></div>';
a+='<div class="si-range si-fr" id="gSatisfyP"></div></li>';
a+='<li><div class="si-rating si-fl"><span class="rating-name">服务态度：</span><span class="rating-val"><em id="sSatisfy"></em>分</span></div>';
a+='<div class="si-range si-fr" id="sSatisfyP"></div></li>';
a+='<li><div class="si-rating si-fl"><span class="rating-name">物流速度：</span><span class="rating-val"><em id="dSatisfy"></em>分</span></div>';
a+='<div class="si-range si-fr" id="dSatisfyP"></div></li></ul>';
if(sn.vendorCode==""||b.vendorCode=="0000000000"||b.vendorCode=="undefined"){sn.vendorCode="";
if(sn.brandShopCode!=null&&sn.brandShopCode!=""){if(sn.brandShopStatus=="0"){}if(sn.brandShopStatus=="1"){a+='<div class="si-website"><span class="si-btn si-btn-disabled" title="店铺装修中">店铺装修中</span></div></div>'
}else{a+='<div class="si-website"><a class="si-btn si-btn-yellow" target="_blank" name="item_'+sn.ninePartNumber+'_shop_jinru01" href='+sn.shopUrl+"><span>进入店铺</span></a></div></div>"
}}else{a+="</div>"
}}else{if(b.shopStatus=="0"){if((typeof b.companyName!="undefined"&&b.companyName!="")||(typeof b.telPhone!="undefined"&&b.telPhone!="")){a+='<div class="si-detail">';
if(typeof b.companyName!="undefined"&&b.companyName!=""){a+='<p><span class="detail-name">公司：</span><span class="detail-val">'+b.companyName+"</span></p>"
}if(typeof b.telPhone!="undefined"&&b.telPhone!=""){if((sn.shopType!=undefined&&sn.shopType=="3")||sn.vendorType=="927HWG1"||sn.vendorType=="927HWG"){a+='<p><span class="detail-name" style="letter-spacing: 2px;">服务电话：</span><span class="detail-val">'+b.telPhone+"</span></p>"
}else{a+='<p><span class="detail-name" style="letter-spacing: 2px;">TEL：</span><span class="detail-val">'+b.telPhone+"</span></p>"
}}a+="</div>"
}a+='<div class="si-website"><a name="item_'+sn.ninePartNumber+'_shop_jinru02" class="si-btn si-btn-yellow" title="进入店铺" target="_blank" href="'+(b.secUrl!=undefined&&b.secUrl!=""?b.secUrl:(sn.shopPath+sn.shopMainPh+"/"+b.vendorCode.substring(2,10)+"/index.html"))+'">进入店铺</a> <a name="item_'+sn.ninePartNumber+'_shop_shoucang02" class="si-btn" title="收藏店铺" href="javascript:FourPage.addShopFavorite();">收藏店铺</a></div></div>'
}else{a+='<div class="si-website"><span class="si-btn si-btn-disabled" title="店铺装修中">店铺装修中</span></div>'
}}if(sn.vendorType=="925SWL"){$("#vendorType").val(3);
sn.swlShopFlag=true;
a='<div  class="si-flag si-flag-fw"><a href="http://help.suning.com/page/id-494.htm" target="_blank" class="link"></a></div>'+a
}else{if(sn.vendorType=="927HWG"||sn.vendorType=="927HWG1"){sn.hwgShopFlag=true;
a='<div class="si-flag si-flag-oversea"></div>'+a
}else{if(sn.vendorCode!=""){a='<div  class="si-flag si-flag-sj"></div>'+a
}else{a='<div  class="si-flag si-flag-zy"></div>'+a
}}}cshopDesc=a
}catch(c){}if(sn.hwgShopFlag){CommonFourPage.hwgInitCss()
}return a
};
function showCurVendorInfo(b){var a=FourPage.showShopInfoHtml(b);
$("#curShop").html(a);
if($.trim($("#cshopBox").html()).length>0){cshopHtml=$("#cshopBox").html()
}FourPage.showServiceName();
FourPage.scoreHtml();
FourPage.addShopListCss();
iFourth.mainHeight()
}FourPage.showServiceName=function(){if($("#curShopName").html()!=null){sn.shopName=$("#curShopName").html()
}else{sn.shopName=""
}if(sn.donateFlag){$("#shopName").html('由"'+sn.shopName+'"发起捐助，并提供服务')
}else{if(sn.cflag=="0"){try{if(sn.swlShopFlag){$("#shopName").html('由"苏宁"直接发货，并享受售后服务')
}else{if(sn.sendCityName!=undefined&&sn.sendCityName!=""&&(!sn.hwgShopFlag||(sn.hwgShopFlag&&(sn.ownerPlace.indexOf("H")!=0&&sn.ownerPlace.indexOf("B")!=0&&sn.ownerPlace.indexOf("L")!=0)))){if(typeof($("#cShopFlag").val())!=undefined&&$("#cShopFlag").val()=="1"){$("#shopName").html('由"<span>'+sn.shopName+'</span>"从&nbsp;&nbsp;'+sn.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}else{$("#shopName").html('由"'+sn.shopName+'"从&nbsp;&nbsp;'+sn.sendCityName+"&nbsp;&nbsp;销售和发货，并提供售后服务")
}}else{$("#shopName").html('由"'+sn.shopName+'"销售和发货，并提供售后服务')
}}if(sn.shipOffSetText!=undefined&&sn.invStatus=="1"){$("#nowProduct").html(sn.shipOffSetText);
if(sn.isPreBuy==1&&!preBuy.isEffect){$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show()
}}}catch(a){}sn.reviewShopName=$("#cShopName").val()
}}};
function shopReviewScore(a){if(a.returnCode=="1"){sn.scoreList=a.shopReviewScoreList;
if(sn.vendorCode!="-1"){FourPage.scoreHtml()
}}}FourPage.scoreHtml=function(){try{var a=sn.scoreList;
if(a!=undefined){for(var b=0;
b<a.length;
b++){if((a[b].shopId=="0000000000"&&(sn.vendorCode==""||sn.vendorCode.substring(0,3)=="003"))||(a[b].shopId==sn.vendorCode)){$("#gSatisfy").html(parseFloat(a[b].qualityStar).toFixed(2));
$("#gSatisfyP").html(FourPage.scoreUtil(a[b].qualitySup));
$("#sSatisfy").html(parseFloat(a[b].attitudeStar).toFixed(2));
$("#sSatisfyP").html(FourPage.scoreUtil(a[b].attitudeSup));
$("#dSatisfy").html(parseFloat(a[b].deliverySpeedStar).toFixed(2));
$("#dSatisfyP").html(FourPage.scoreUtil(a[b].deliverySpeedSup))
}var c=a[b].shopId=="0000000000"?"":a[b].shopId;
var g=Math.round(a[b].shopStar*20)+"%";
$("#shop"+c).attr("rating",g)
}}}catch(f){}iFourth.showRating.start()
};
FourPage.scoreUtil=function(b){b=parseFloat(b).toFixed(2)+"%";
var a="";
if(parseFloat(b)>=0){a+='<i class="si-icon icon-upper"></i><span class="rating-val">'+(b)+"</span>"
}else{b=b.substring(1,b.length);
a+='<i class="si-icon icon-lower"></i><span class="rating-val">'+(b)+"</span>"
}return a
};
var freeCoupon=[];
FourPage.showPromStatus=function(a){try{freeCoupon=[];
var b=a.activityList;
if(b.length>0&&sn.promotionPrice!=""){$.each(b,function(f,h){if(h.activityTypeId=="3"){if(sn.isPreBuy!=1&&h.activityLink!=""){$("#istuangouBox").html('团购中&nbsp<a class="b" target="_blank" href="'+h.activityLink+'">立即预订</a>');
$("#istuangouTitle").css("display","block");
$("#allcuxiao").show()
}}else{if(h.activityTypeId=="4"){var g=h.voucherShopType;
var e="";
if(h.activityLink!=""){e+=h.activityDescription+" <a href='"+h.activityLink+"' target='_blank' class='b'>查看详情</a>"
}else{e+=h.activityDescription
}if(typeof g!="undefined"&&g!=""&&g=="1"){if(sn.vendorCode!=""&&sn.vendorCode!="undefined"&&sn.vendorCode!=undefined&&sn.vendorCode.substring(0,3)!="003"){if($("#lhvoucherBox").html()!=""){$("#lhvoucherBox").after("<p class='promotion-content'>"+e+"</p>")
}else{$("#lhvoucherBox").html(e)
}$("#lhvoucherTitle").css("display","block");
$("#allcuxiao").show()
}}else{if($("#voucherBox").html()!=""){$("#voucherBox").after("<p class='promotion-content'>"+e+"</p>")
}else{$("#voucherBox").html(e)
}if(typeof h.activityFlag!="undefined"&&h.activityFlag=="1"){$("#buyNum").val("2")
}else{$("#buyNum").val("1")
}iFourth.buyNum();
$("#voucherTitle").css("display","block");
$("#allcuxiao").show()
}}else{if(h.activityTypeId=="5"){var e="";
if(h.activityLink!=""){e+=h.activityDescription+" <a href='"+h.activityLink+"' target='_blank' class='b'>查看详情</a>"
}else{e+=h.activityDescription
}if($("#couponBox").html()!=""){$("#couponBox").after("<p class='promotion-content'>"+e+"</p>")
}else{$("#couponBox").html(e)
}$("#couponTitle").css("display","block");
$("#allcuxiao").show()
}else{if(h.activityTypeId=="6"&&sn.isPreBuy!=1){$("#isXYuanNItemBox").html(h.activityDescription+' <a class="b" target="_blank" href="'+h.activityLink+'">查看详情</a>');
$("#isXYuanNItemTitle").css("display","block");
$("#allcuxiao").show()
}else{if(h.activityTypeId=="7"){if(sn.vendorCode!=""){$("#freightfreeTitle").show();
$("#freightfreeBox").html(h.activityDescription);
$("#allcuxiao").show();
isFareFree=1;
if(h.activityLink!=""&&h.activityLink=="1"){sn.cFreightFreeFlag=true;
$("#c_yunfei").html("");
$("#c_yunfei").hide();
$("#fare"+sn.vendorCode).html("<span>免运费</span>")
}}}}}}}})
}}catch(c){}if(sn.cflag=="1"){getGiftInfo(sn.partNumber,"FourPage.callbackGiftInfo")
}if(!sn.hwgShopFlag||(sn.hwgShopFlag&&(sn.ownerPlace.indexOf("H")!=0&&sn.ownerPlace.indexOf("B")!=0&&sn.ownerPlace.indexOf("L")!=0))){getCloudDrill("FourPage.yunzuanCallbackFunp")
}if(sn.scodeType!="7"){FourPage.govPrice()
}if(sn.cflag=="1"&&sn.isPreBuy!=2){getConServationInfo(sn.partNumber,"conServationInfoBack")
}getNewPromInfo(sn.partNumber,"processNewPromInfo");
iFourth.mainHeight();
iFourth.servLabel()
};
FourPage.promInfoCallback=function(a){processIcpsPromInfo(a);
if(!sn.hwgShopFlag||(sn.hwgShopFlag&&(sn.ownerPlace.indexOf("H")!=0&&sn.ownerPlace.indexOf("B")!=0&&sn.ownerPlace.indexOf("L")!=0))){getCloudDrill("FourPage.yunzuanCallbackFunp")
}if(sn.scodeType!="7"){FourPage.govPrice()
}if(sn.cflag=="1"&&sn.isPreBuy!=2){getConServationInfo(sn.partNumber,"conServationInfoBack")
}iFourth.mainHeight();
iFourth.servLabel()
};
FourPage.govPrice=function(){if(sn.govPrice!=undefined&&sn.govPrice!=""&&parseFloat(sn.govPrice)<parseFloat(sn.promotionPrice)){if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){ms_memberOrgs.queryIsEnterprise(FourPage.govPriceHtmlBuild)
},function(){var a="";
a+="<label>政企特价</label>";
a+='<p class="promotion-content">企业会员';
a+='<a href="javascript:FourPage.govPriceLogin();" class="b" name="item_'+sn.ninePartNumber+'_zhengqi_login">登录</a>';
a+="查看会员专享价";
a+='<a name="item_'+sn.ninePartNumber+'_zhengqi_xq" href="http://b.suning.com" class="b ml10" target="_blank">查看详情</a>';
a+="</p>";
$("#govTitle").html(a);
$("#govTitle").css("display","block");
$("#allcuxiao").show()
})
}}else{$("#govTitle").hide()
}};
FourPage.govPriceLogin=function(){$("body").AjaxLogin({success:function(){ms_memberOrgs.queryIsEnterprise(FourPage.govPriceHtmlBuild)
}})
};
FourPage.govPriceHtmlBuild=function(b){if(b!=null&&b.status=="success"&&b.code=="true"){var a="";
a+="<label>政企特价</label>";
a+='<p class="promotion-content">企业会员专享价 ¥'+sn.govPrice+' <a name="item_'+sn.ninePartNumber+'_jifen_xq" href="http://b.suning.com" class="b ml10" target="_blank">查看详情</a></p>';
$("#govTitle").html(a);
$("#govTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#govTitle").hide()
}};
FourPage.yunzuanCallbackFunp=function(f){try{if(f.accountAmt!=null&&f.accountAmt!=""){var b=sn.vipDomain;
var a=Math.floor(f.accountAmt);
if(a>0){var c="";
c+="购买可返"+a+"云钻";
c+=' <a name="item_'+sn.ninePartNumber+'_jifen_xq" href="'+b+'" class="b ml10" target="_blank">看看能换啥</a>';
$("#pointBox").html(c);
$("#pointBox").show();
$("#pointTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#pointBox").hide();
$("#pointTitle").css("display","none")
}}else{$("#pointBox").hide();
$("#pointTitle").css("display","none")
}if(sn.priceType!="2"&&sn.priceType!="3"&&sn.priceType!="4"&&sn.isPreBuy!=1&&sn.isPreBuy!=2&&!sn.hwgShopFlag){cloudInfo.cloudDiamondInfo()
}else{$("#yunzuan").html("");
$("#yunzuan").hide()
}}catch(g){}iFourth.mainHeight()
};
cloudInfo={activityID:"",exchangeType:"",activityPrice:"",cdiamondPrice:"",addCartState:"0",state:"00",initCartState:function(){this.addCartState="0"
},cloudDiamondInfo:function(){$("#yunzuan").hide();
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemDiamondAction_"+sn.partNumber+"_"+sn.vendorCode+"_cloudInfo.initAct.html",cache:true,async:false,dataType:"jsonp",jsonpCallback:"cloudInfo.initAct",success:function(){}})
},initAct:function(b){cloudInfo.activityID=b.activityID;
cloudInfo.exchangeType=b.exchangeType;
cloudInfo.activityPrice=b.activityPrice;
cloudInfo.cdiamondPrice=b.cdiamondPrice;
if(this.activityID!=undefined&&this.activityID!=""){var a="";
if(this.exchangeType=="01"){a+='<span class="desc">'+this.cdiamondPrice+"云钻全额兑</span>";
a+='<a id="btn_yzuan" href="javascript:cloudInfo.activiteAddCart();" name="item_'+sn.partNumber.substr(9,18)+'_yunzu_dh" class="combtn">立即兑换</a>'
}else{if(this.exchangeType=="02"){a+='<span class="desc">'+this.cdiamondPrice+"云钻+"+this.activityPrice+"元购买</span>";
a+='<a id="btn_yzuan" href="javascript:cloudInfo.activiteAddCart();" name="item_'+sn.partNumber.substr(9,18)+'_yunzu_dh" class="combtn">立即兑换</a>'
}}$("#yunzuan").html(a);
this.getActivityStatus()
}else{$("#yunzuan").html("");
$("#yunzuan").hide()
}},getExchengeStatus:function(){if(!FourPage.checkSaleStatus()){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("立即兑换").removeClass().addClass("combtn-disable");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if((this.state=="00"||this.state=="02"||this.state=="05"||this.state=="06")&&(FourPage.checkSaleStatus())){$("#btn_yzuan").attr({href:"javascript:cloudInfo.activiteAddCart();"});
$("#btn_yzuan").html("立即兑换").removeClass().addClass("combtn");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if(this.state=="01"){$("#yunzuan").html("");
$("#yunzuan").hide()
}else{if(this.state=="03"){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("已兑光").removeClass().addClass("combtn-disable");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}else{if(this.state=="04"){$("#btn_yzuan").attr({href:"javascript:void(0);"});
$("#btn_yzuan").html("云钻不足").removeClass().addClass("combtn-disable");
$("#yunzuan").show();
$("#pointTitle").show();
$("#allcuxiao").show()
}}}}}},activiteAddCart:function(){$("body").AjaxLogin({success:function(){if(sn.cloudAddcartFlag=="1"){cloudInfo.cloudActionAddcart()
}else{cloudInfo.addCartState="1";
Cart.oldAddCart()
}}})
},getActivityStatus:function(){if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){if(SFE.base.d("logonStatus")!=null&&SFE.base.d("logonStatus")!=""){var b="";
var a="";
if(sn.salesOrg=="C"){b="00";
a=sn.vendorCode
}else{b="01";
a="0000000000"
}ajaxCrossDomain(sn.vipDomain+"/jsonp/checkQualify.do","activityCode="+cloudInfo.activityID+"&cmmdtyCode="+sn.partNumber+"&supplierCode="+a+"&purchaseNum=1&vendorFlag="+b,function(c){cloudInfo.state=c.state;
cloudInfo.getExchengeStatus()
},function(){cloudInfo.getExchengeStatus()
})
}else{cloudInfo.getExchengeStatus()
}},function(){cloudInfo.getExchengeStatus()
})
}else{setTimeout(cloudInfo.getActivityStatus,200)
}},cloudActionAddcart:function(){var a=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var b="";
if(cloudInfo.exchangeType=="01"){b="10"
}else{if(cloudInfo.exchangeType=="02"){b="09"
}}var c=cloudInfo.activityID;
buyNowFourPage(a,sn.partNumber,b,c,"","","","",function(){})
}};
iFourth.initFreeCoupon=function(k){try{var j="";
var b="";
var a="";
var o="";
var c=/^\d+$/;
if(k.length>0){if(k.length==1){var f=k[0];
b=f.salesPrice;
a=f.activityDescription;
j+=b+"元&nbsp："+a.substring(0,35);
j+="<a class='b ml10' target='_blank' href='"+f.activityLink+"' name='item_"+sn.partNumber.substr(9,18)+"_gmq_lj00'>立即领取</a>"
}else{if(k.length>1){j+="您有"+k.length+"&nbsp;张券可领";
j+="<a class='b ml10 more-coupon' href='javascript:void(0)'>立即领取</a>";
var h=k.length>9?9:k.length;
var q="";
o="<div class='pop-coupon-win'><ul class='content clearfix'>";
for(var l=0;
l<h;
l++){b=k[l].salesPrice;
a=k[l].activityDescription;
if((l+1)%3==0){q="5"
}else{if((l+1)%3==1){q="10"
}else{q="100"
}}var g=(b+"").split(".")[0];
var p=(b+"").split(".")[1];
o+="<li class='coupon-"+q+"'><a target='_blank' href='"+k[l].activityLink+"' name='item_"+sn.partNumber.substr(9,18)+"_gmq_lj0"+(l+1)+"'><span class='coupon-amount";
if(g.length>4){o+=" amount-large"
}if(p==undefined){p="00"
}else{if(p.length==1){p+="0"
}}o+="'><i>&yen;</i><em>"+(b+"").split(".")[0]+"</em><span class='yhq'>优惠券<br/><small>."+p+"</small></span></span>";
var m=a.indexOf("立");
if(m>=0){o+="<span>"+a.substring(0,m)+"</span><span>"+a.substring(m,a.length)+"</span>"
}else{o+="<span>"+a+"</span><span>&nbsp</span>"
}o+="<span class='get-coupon'>立即领取</span></a></li>"
}o+="</ul></div>"
}}$("#freeCouponBox").html(j);
$("#freeCouponTitle").css("display","block");
$("#allcuxiao").show();
$(".more-coupon").click(function(){$.mDialog({title:"领券",css:{width:"552px"},http:function(i,r){i.find(".content").html(o)
},overlayCss:{background:"black",opacity:"0.3"},overlayClick:true,fadeIn:300,fadeOut:300})
})
}}catch(n){}};
FourPage.checkSaleStatus=function(){if(sn.vendorCode==undefined||sn.vendorCode==""){if(sn.promotionPrice!=""&&(sn.invStatus=="1"||sn.invStatus=="4")&&sn.shipOffSet!="-1"){if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}return true
}else{return false
}}else{if(sn.swlShopFlag){if(sn.promotionPrice!=""&&sn.invStatus=="1"&&sn.shipOffSet!="-1"){if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}return true
}else{return false
}}else{if(sn.promotionPrice!=""&&sn.invStatus=="1"&&sn.shippingCharge!="-1"){if(sn.shipOffSet!=""&&sn.shipOffSet>=0){$("#shipOffset").val(sn.shipOffSet)
}return true
}else{return false
}}}};
function saleStatusThree(){sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("red");
$("#c_kucun").html("暂不销售");
$("#c_yunfei").hide();
$("#buycount").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#cart2Price").html("");
FourPage.initPhoneCss();
sn.status=false;
$("#listProContent").hide();
$("#buyNowAddCart").hide();
if(sn.isPreBuy!=1){$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var a="";
if(preBuy.type==2&&preBuy.status==4){a="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
a="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+a+"</p>");
$("#yushouCount").hide();
if(preBuy.type==2&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods");
if(sn.vendorCode==""){FourPage.processO2OInfo()
}if(sn.isPreBuy==2){resetBookCss()
}iFourth.mainHeight()
}FourPage.callbackGiftInfo=function(g){try{if(g!=undefined&&g!=""&&g.length>0){var f=g.length>5?5:g.length;
var k="<table><tbody>";
var c=0;
for(var b=0;
b<f;
b++){if(g[b].remainGiftNumber==0||g[b].invEnough!="0"){k+='<tr class="hide">'
}else{c=1;
k+="<tr>"
}k+='<td class="img"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+g[b].giftId+'_1_30x30.jpg" src-large="'+sn.imageDomianDir+"/b2c/catentries/"+g[b].giftId+'_1_200x200.jpg" alt=""></td>';
k+='<td class="title">';
if(g[b].giftProductType=="1"){if(g[b].giftId!=""&&g[b].giftId.length==18){var j=g[b].giftId.substring(9,18);
k+='<a href="'+sn.elecProductDomain+"/"+j+'.html" target="_blank" name="item_'+sn.ninePartNumber+"_cuxiao_zengpin"+(b+1)+'">';
k+='<div title="'+g[b].giftName+'">'+g[b].giftName+"</div>";
k+="</a>"
}}else{k+='<div title="'+g[b].giftName+'">'+g[b].giftName+"</div>"
}k+="</td>";
if(g[b].remainGiftNumber!=0&&g[b].invEnough=="0"){if(sn.giftInfo==""){sn.giftInfo=[]
}var a={cmmdtyCode:g[b].giftId,cmmdtyQty:g[b].giftNumberOnetime};
sn.giftInfo.push(a);
k+='<td class="num">×'+g[b].giftNumberOnetime+"</td>"
}if(g[b].giftPrice!=undefined&&g[b].giftPrice!=""){k+='<td class="price">&yen;'+g[b].giftPrice.toFixed(2)+"</td></tr>"
}else{k+='<td class="price"></td></tr>'
}}k+="</tbody></table>";
if(c==0||(sn.invStatus!="1"&&sn.invStatus!="4")){$("#giftTitle").hide();
return
}$("#giftBox").html(k);
iFourth.zengpin();
$("#giftTitle").css("display","block");
$("#allcuxiao").show();
iFourth.mainHeight()
}}catch(h){}};
function initCShopOffSaleStatus(){if(sn.isPreBuy!=1){$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}if(sn.isPreBuy==1&&(preBuy.status==4||preBuy.status==6)&&preBuy.isEffect){var a="";
if(preBuy.type==2&&preBuy.status==4){a="注：抢购仅限获取预约特权购资格的用户";
$("#addCart").removeClass().addClass("btn-privilege-disable")
}else{$("#addCart").removeClass().addClass("btn-rush-disable");
a="注：抢购仅限获取预约资格用户"
}$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">'+a+"</p>");
$("#yushouCount").hide();
if(preBuy.type=="2"&&preBuy.status==4){$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}else{$("#addCart2").removeClass().addClass("btn-rush-mini-disable")
}$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide()
}$("#buyNowAddCart").hide();
$("#c_kucun").html("暂不销售");
$("#mianyunfei").parent().hide();
$("#c_yunfei").hide();
$("#buycount").hide();
$("#nowProduct").html("建议您选购其它商品");
sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").addClass("red");
$("#cart2Price").html("");
if(sn.vendorCode!=""&&typeof sn.freight!="undefined"&&sn.freight!=""&&sn.freight!="-1"&&!sn.swlShopFlag&&!(sn.freight==""||sn.freight=="0"||sn.freight=="0.00"||sn.freight==".00"||sn.freight=="免运费")){$("#c_yunfei").html("运费 &yen;"+sn.freight);
$("#c_yunfei").show()
}else{$("#c_yunfei").html();
$("#c_yunfei").show()
}if(sn.isPreBuy==1&&!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide();
$("#tellMe").hide()
}if(sn.isPreBuy==2){resetBookCss()
}CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods");
iFourth.mainHeight();
FourPage.runDapushWhenReady()
}function simInitialize(){sn.vendorCode="";
$(".proinfo-title").addClass("proinfo-title-short");
qCodeHide();
getSimPrice(sn.partNumber,sn.cityId,sn.simBuyType,siminit);
CommonFourPage.FourPage.getPromotiondesc(sn.partNumber,FourPage.getPromotiondescCallBack);
sn.vendorCode="0000000000";
FourPage.getReview();
FourPage.getConsulation();
$("#returnCate").html('<a class="tui-disable no-link"><i class="icon"></i>不支持无理由退换货</a>');
$("#returnCate").attr("title","不支持无理由退换货");
$("#returnCate").show();
iFourth.servLabel()
}function siminit(g){try{$("#swlService").hide();
$("#cService").hide();
$("#snService").show();
$("#hwgService").hide();
$(".proinfo-serv .zqfw").parent().hide();
$("#selectCB").hide();
$("#inerestBox").hide();
if(sn.published=="1"){FourPage.initCss();
sn.promotionPrice="";
if(g.returnCode==0){sn.promotionPrice=g.simPrice;
$("#c_kucun").html("现货");
var c=$("#itemDisplayName").text();
if(c!=""&&c!=undefined&&c.indexOf("苏宁互联卡")!=-1){$("#nowProduct").html("现在下单 ，预计次日送达").removeClass("red")
}else{$("#nowProduct").html("现在下单 ，预计次日送达（月底3天不发货）").removeClass("red")
}if(sn.simBuyType=="3"){$("#addCart").removeClass().addClass("btn-tel2");
$("#addCart").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"',"+sn.cityId+",'"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-tel2-mini");
$("#addCart2").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"',"+sn.cityId+",'"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target")
}else{$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"',"+sn.cityId+",'"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:addSimShoppingCartCheck('"+sn.partNumber+"',"+sn.cityId+",'"+sn.simBuyType+"',function(obj){Util.alertErrorBox(obj)});").removeAttr("target")
}$("#cart2Price").html(g.simPrice);
$("#proPriceBox").html("<span id='promotionPrice' class='mainprice'>"+FourPage.getDisPrice(g.simPrice)+"</span><a id='PriceNotice2' class='btn-price-notice' href='javascript:FourPage.subscribePriceNotice();'>降价通知</a>");
$("#existPrice").show();
$("#promotionPriceBox").find("dt span").html("易购价");
$("#promotionPriceBox").show();
$("#addCart").show();
$("#addCart2").show()
}else{$("#noPrice").show();
$("#c_kucun").html("暂不销售");
sn.shipOffSetText="建议您选购其它商品";
$("#nowProduct").html("建议您选购其它商品");
$("#nowProduct").addClass("red");
$("#addCart").removeClass().addClass("btn-tel2-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-tel2-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
CommonFourPage.Recommend.getOffSaleRecom(sn.partNumber,"Recommend.callBackGetnoGoods")
}sn.shopName="苏宁";
sn.reviewShopName="苏宁";
$("#shopName").html('由"<span>苏宁</span>"销售和发货，并享受售后服务');
var f="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
var b="findpassBrand2('','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+f+"','');";
$("#callme").attr("href","javascript:"+b);
$("#callmeSide").attr("href","javascript:"+b);
$("#callme").removeClass().addClass("btn-online ml10");
$("#callme").html("<img class='btn-online' src='"+sn.resRoot+"/images/online.gif' alt='在线客服' width='69' height='18'/>");
$("#cshopBox").hide();
$("#loginFeedBack").show();
$(".proinfo-container").addClass("proinfo-container-nopro")
}else{qCodeHide();
$(".proinfo-main").hide();
$(".proinfo-main").html("");
$(".nopro").show();
var a="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+a+"','');");
$(".proinfo-container").addClass("proinfo-container-nopro");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
CommonFourPage.Recommend.noPublishItems(sn.partNumber,"Recommend.noPublishItemsHtml")
}}catch(h){}FourPage.initCluster();
FourPage.runDapushWhenReady();
iFourth.mainHeight()
}FourPage.getPromotiondescCallBack=function(a){try{var g=a.itemDetail;
$("#productService").html(g.service);
$("#cProductService").html(g.service);
sn.itemSource=g.itemSource!=undefined?g.itemSource:"";
var b=g.pavilion;
if(typeof b!="undefined"&&b!=""){sn.isPavilion=true;
$("#itemDisplayName").html('<a href="http://china.suning.com/" target="_blank"><span class="tsg">特色馆</span></a>'+sn.itemDisplayName)
}if(sn.newItemDesSwith!="0"||(sn.partNumber!="000000000109482053"&&sn.partNumber!="000000000109489150")){$("#productDetail").html(g.detailUrl)
}if(g&&typeof g.detailParkingList!="undefined"&&g.detailParkingList!=""){$("#bzqd_tag .val").html(g.detailParkingList);
$("#bzqd_tag").show()
}else{$("#bzqd_tag").hide()
}if(typeof a.comItemdetail.comitemDetailsList!="undefined"){var f=a.comItemdetail.comitemDetailsList;
if(f!=""&&f.length>0){for(var c=0;
c<f.length;
c++){if(f[c].orderCode=="30"){var h='<table border="0" cellpadding="1" cellspacing="1" style="width: 750px"><tbody><tr><td>';
h+='<object align="middle" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" height="420" width="750"><param name="play" value="false">';
h+='<param name="quality" value="high"><param name="wmode" value="transparent"><param name="allowScriptAccess" value="samedomain"><param name="flashvars" value="ap=0" /><param name="movie" value="';
h+=f[c].detailsUrl+'"><embed allowscriptaccess="samedomain" allowFullScreen="true" flashvars="ap=0" height="420" play="false" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="';
h+=f[c].detailsUrl;
h+='" type="application/x-shockwave-flash" width="750" wmode="transparent"></object>';
h+="</td></tr></tbody></table>";
$("#productDetail").prepend(h)
}}for(var c=0;
c<f.length;
c++){if(f[c].orderCode=="00"||f[c].orderCode=="01"){$("#productDetail").prepend(f[c].detailsUrl)
}else{if(f[c].orderCode=="20"||f[c].orderCode=="11"){$("#productDetail").append(f[c].detailsUrl)
}}}}}$("#itemSource").html("商品来源地："+sn.itemSource)
}catch(j){}$("img[src2]").Jlazyload({type:"image",placeholderClass:"err-product"})
};
FourPage.processBarePhoneDesc=function(a){if(a!=null&&a.returnCode=="0"&&a.sellPointInfo!=undefined&&a.sellPointInfo!=""){sn.barePhoneDesc=a.sellPointInfo
}else{sn.barePhoneDesc=""
}$("#promotionDesc").html(sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc)
};
FourPage.initPhoneStatus=function(f){if(f!=null&&typeof f.recommend!="undefined"&&f.recommend.recommendTitle!=""){var e=f.recommend;
sn.contractTypeCode=e.treatyCode;
sn.operatorId=e.buyTypeCode;
if(typeof f.treatyInfo!="undefined"&&typeof f.treatyInfo.buyTypeList!="undefined"&&f.treatyInfo.buyTypeList.length>0){if(e.busiType=="1"){$("#phonedl input").before('<div class="luoji-tip" style="display: block;" onclick="Cart.addShoppingCartCheck(\''+sn.partNumber+"','"+sn.provinceCode+"','"+sn.cityId+"','"+sn.districtId+"','"+sn.mdmProvinceId+"','"+sn.mdmCityId+"','"+e.buyTypeCode+"','"+e.treatyCode+"','"+sn.itemId+"','"+e.phoneSupplierCode+"','"+e.treatyParam+'\',function(obj){Util.alertErrorBox(obj)})" name="item_'+sn.ninePartNumber+'_ysc_gm0101"><span class="content">'+e.recommendTitle+'</span><a class="view" href="javascript:void(0);">去看看</a></div>')
}else{if(e.busiType=="2"){$("#phonedl input").before('<div class="luoji-tip" id="phoneGoLook" style="display: block;" name="item_'+sn.ninePartNumber+'_ysc_gm0101"><span class="content">'+e.recommendTitle+'</span><a class="view g-hyj-btn" href="javascript:void(0);">去看看</a></div>');
iFourth.hyjDialog.clickFun()
}}if(sn.saleStatus!="1"){$(".luoji-tip").hide()
}}else{if(e.busiType=="2"){$(".proinfo-num").before('<dl class="proinfo-tip"><div class="getTip" id="phoneGoLook"><span class="content">'+e.recommendTitle+'</span><a class="view g-hyj-btn" href="javascript:void(0);" name="item_'+sn.ninePartNumber+'_ysc_gm0101">去看看</a></div></dl>');
iFourth.hyjDialog.clickFun()
}if(sn.saleStatus!="1"){$(".proinfo-tip").hide()
}}}sn.treatyInfo=f.treatyInfo;
if(f!=null&&typeof f.treatyInfo!="undefined"&&typeof f.treatyInfo.buyTypeList!="undefined"&&f.treatyInfo.buyTypeList.length>0){var l="";
var k="";
if(sn.treatCode==""&&sn.buyCode==""){l+='<li data-id="1" title="裸机版" class="selected"><a href="javascript:void(0);">裸机<i></i></a></li>'
}else{l+='<li data-id="1" title="裸机版"><a href="javascript:void(0);">裸机<i></i></a></li>'
}var c=1;
for(var g=0;
g<f.treatyInfo.buyTypeList.length;
g++){var j=f.treatyInfo.buyTypeList[g];
if(j.treatyTypeList.length>0){l+="<li ";
l+=typeof sn.buyCode!="undefined"&&sn.buyCode===j.buyTypeCode?'class="selected"':"";
l+='title="'+j.buyTypeName+'" data-id="'+(g+2)+'" bt="'+j.buyTypeCode+'"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_ysc_gm"+((g+2)<10?("0"+(g+2)):(g+2))+'">'+j.buyTypeName+"<i></i></a></li>";
k+="<ul>";
$.each(j.treatyTypeList,function(m,n){c++;
k+="<li ";
k+=typeof sn.buyCode!="undefined"&&sn.buyCode==j.buyTypeCode&&typeof sn.treatCode!="undefined"&&sn.treatCode==n.treatyCode?'class="selected"':"";
k+=' title="'+n.treatyName+'" bt="'+j.buyTypeCode+'" tt="'+n.treatyCode+'"><a href="javascript:void(0);" name="item_'+sn.ninePartNumber+"_ysc_hy"+(c<10?("0"+c):c)+'">'+n.treatyName+"<i></i></a></li>"
});
k+="</ul>"
}}l+="</ul>";
$("#phonedl ul").html(l);
$("#phonedl").show();
$("#phoned2 dd").html(k);
if(sn.notSaleFlag){$(".proinfo-hyj dd li[data-id=1]").hide();
if(sn.treatCode==""&&sn.buyCode==""){$(".proinfo-hyj dd li[data-id=2]").addClass("selected").siblings().removeClass("selected");
$("#phoned2 li").eq(0).addClass("selected").siblings().removeClass("selected")
}}iFourth.attrChoose();
iFourth.heyueji(FourPage.changePhone);
var b=$("#phonedl ul li.selected");
var a=$("#phoned2 dd li.selected");
if(b&&b.index()>0){var h=b.index();
$("#phoned2 ul").eq(h-1).show().siblings().hide();
$("#phoned2").show()
}if(a&&a.index()>=0){a.parent().show().siblings().hide()
}else{if(!(b&&b.index()>0)){$("#phonedl li").eq(0).addClass("selected");
$("#phoned2").hide()
}}FourPage.changePhone(a)
}else{FourPage.initPhoneCss();
$("#phoneDetail").hide();
if(sn.priceType=="0"){if((sn.invStatus=="1"||sn.invStatus=="4")&&sn.shipOffSet>=0){$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#buyNowAddCart").show();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();").removeAttr("target")
}else{$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void();").removeAttr("target");
$("#buyNowAddCart").hide();
$("#tabAddCart").show();
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void();").removeAttr("target")
}}if(phoneTyFlg&&document.reflashForm.sellType.value!=0){CommonFourPage.FourPage.getItemInfo(sn.partNumber,FourPage.cateDetail);
CommonFourPage.FourPage.getPromotiondesc(sn.partNumber,FourPage.getPromotiondescCallBack)
}document.reflashForm.sellType.value=0;
if(sn.invStatus=="1"){$("#buycount").show()
}}iFourth.mainHeight()
};
FourPage.changePhone=function(o){var f,r,b,h,q,a,p,k,t,n;
t=sn.invStatus;
r=typeof($(o).attr("bt"))=="undefined"?"":($(o).attr("bt"));
b=typeof($(o).attr("tt"))=="undefined"?"":($(o).attr("tt"));
sn.phoneTypePromoDesc="";
sn.phonePrice="";
sn.phonePartNumber="";
var m,s,u;
if(r==""&&b==""){$("#promotionDesc").html(sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc);
document.reflashForm.sellType.value=0;
f=sn.sellType=0;
u=sn.promotionPrice;
k=sn.partNumber;
if(Renxf.freenessInfo!=""){$("#freenessPay").parent().show()
}}else{$("#freenessPay").parent().hide();
document.reflashForm.sellType.value=1;
f=sn.sellType=1;
$("#yanbao").find("li").each(function(){$(this).removeClass("selected")
});
$("#yanbao").hide();
$("#phonedl .luoji-tip").hide();
$.each(sn.treatyInfo.buyTypeList,function(w,v){if(r==v.buyTypeCode){$.each(v.treatyTypeList,function(x,y){if(b==y.treatyCode){m=y;
q=sn.ychf=typeof y.imageUrl!="undefined"&&y.imageUrl!="null"?y.imageUrl:"";
sn.phoneTypePromoDesc=y.sellPoint;
u=y.treatyPrice;
h=y.shipOffSetText;
a=y.phoneSupplierCode;
p=y.treatyParam;
n=y.spCartTextNum;
k="000000000"+y.treatyPartNumber
}})
}})
}sn.phonePrice=u;
sn.phonePartNumber=k;
$("#cart2Price").html(u);
$("#tellMe").hide();
$("#buyReminder").hide();
if(f==1){$("#bigPolyVerify").hide();
CommonFourPage.storeService.jsdHide();
$(".ziti").parent().hide();
if(null!=$("#labelPicture")&&"undefined"!=$("#labelPicture")&&$("#labelPicture").length>0&&$("#labelPicture b").attr("class")!=""){$("#labelPicture").hide()
}if($("#yanbao").html()!=""){$("#yanbao").hide()
}$("#listProContent").hide();
$("#allcuxiao").hide();
$("#loginFeedBack").hide();
$("#nowProduct").removeClass("red");
$("#nowProduct").html(h);
qCodeHide()
}else{if($.trim($("#bigPolyVerify").find("dd").html())!=""){$("#bigPolyVerify").show()
}JSD.base.showLabel();
if(sn.ziti){$(".ziti").parent().show()
}if(null!=$("#labelPicture")&&"undefined"!=$("#labelPicture")&&$("#labelPicture").length>0&&$("#labelPicture b").attr("class")!=""){$("#labelPicture").show()
}if($("#dapei_slide").find("li").length>0){$("#listProContent").show();
if(sn.scodeType=="7"){$("#listProContent").find("div ul li[rel=#J-setMeal]").hide();
$("#J-setMeal").hide();
if($("#J-tieIn").html()==""||$("#J-tieIn").html()==null){$("#listProContent").hide()
}}}CommonFourPage.Cart.getSunShine(sn.partNumber,Cart.sunShine);
$(".promotion-content").each(function(){var v=$.trim($(this).html());
if(v!=""){$("#allcuxiao").show()
}});
$("#loginFeedBack").show();
if((t=="1"||t=="4")){if(sn.shipOffSet>=0){$("#nowProduct").removeClass("red");
$("#nowProduct").html(sn.shipOffSetText);
processQcode()
}else{$("#nowProduct").addClass("red");
$("#nowProduct").html(sn.shipOffSetText);
qCodeHide()
}}else{if(t=="2"){$("#nowProduct").addClass("red");
$("#nowProduct").html("暂无货&nbsp 点<a class='b' name='item_"+sn.ninePartNumber+"_gmq_daohuotz02' href='javascript:FourPage.subscribeArrivalNotice();'>到货通知</a>，到货第一时间通知您!");
qCodeHide()
}else{$("#nowProduct").addClass("red");
$("#nowProduct").html("建议您选购其它商品");
qCodeHide()
}}}if(f==1){$("#promotionPriceBox").show();
$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><a id="PriceNotice2" class="btn-price-notice" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>');
$("#netPriceBox").hide();
if(n=="1"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-2");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-2-mini")
}else{if(n=="2"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-4");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-4-mini")
}else{if(n=="3"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-1");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-1-mini")
}else{if(n=="4"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-5");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-5-mini")
}else{if(n=="5"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-6");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-6-mini")
}else{if(n=="7"){$("#addCart").removeClass().addClass("btn-hyj btn-hyj-4");
$("#addCart2").removeClass().addClass("btn-hyj-mini btn-hyj-4-mini")
}else{$("#addCart").removeClass().addClass("btn-tel");
$("#addCart2").removeClass().addClass("btn-tel-mini")
}}}}}}$("#addCart").attr("href","javascript:Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.cityId+"','"+sn.districtId+"','"+sn.mdmProvinceId+"','"+sn.mdmCityId+"','"+r+"','"+b+"','"+sn.itemId+"','"+a+"','"+p+"',function(obj){Util.alertErrorBox(obj)});");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#addCart").show();
$("#cuxiaoEnd").hide();
$("#cuxiaoNoNum").hide();
$("#addCart2").attr("href","javascript:Cart.addShoppingCartCheck('"+sn.partNumber+"','"+sn.provinceCode+"','"+sn.cityId+"','"+sn.districtId+"','"+sn.mdmProvinceId+"','"+sn.mdmCityId+"','"+r+"','"+b+"','"+sn.itemId+"','"+a+"','"+p+"',function(obj){Util.alertErrorBox(obj)});");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#buyNowAddCart").hide();
$("#c_kucun").html('<span class="sale-state">现货</span>');
$("#buycount").hide();
$("#buyNum").val(1);
$("#buyNum").attr("max",99);
$("#preTime").hide();
$("#inerestBox").show();
iFourth.buyNum();
CommonFourPage.storeService.hide()
}else{if(f==0&&(t=="1"||t=="4")&&sn.shipOffSet>=0){if(PriceShow.activityFlag==undefined||typeof PriceShow.activityFlag=="undefined"||PriceShow.activityFlag==""){$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
$("#buyNowAddCart").show();
$("#buycount").show();
$("#preTime").hide()
}else{if(PriceShow.activityFlag!=undefined||typeof PriceShow.activityFlag!="undefined"||PriceShow.activityFlag=="2"){if(PriceShow.status==1){$("#limitTime").html("即将开始");
$("#limitTime").show();
PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
$("#beginOrEnd").html("抢购开始");
if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum();
$("#preTime").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
PriceShow.activityFlag="2"
}else{if(PriceShow.status==2){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}$("#limitTime").show();
PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
$("#beginOrEnd").html("倒计时");
if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}$("#preTime").show();
iFourth.buyNum();
var e=(parseInt(PriceShow.endTime)-parseInt(PriceShow.curTime))/1000;
if(parseInt(PriceShow.endTime)>parseInt(PriceShow.curTime)){if((sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSetText!="")){$("#preTime").show();
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}if(PriceShow.serviceType=="2"||PriceShow.serviceType=="3"){$("#buyReminder").show()
}if(PriceShow.serviceType=="10"){$("#addCart").hide();
$("#addCart2").hide()
}else{$("#addCart").removeClass().addClass("btn-addcart").attr("href","javascript:Cart.addCart();");
$("#addCart2").removeClass().addClass("btn-addcart-mini").attr("href","javascript:Cart.addCart();")
}}else{if(sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSetText=="")){$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
if(sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"){$("#tellMe").show()
}}}$(".proinfo-cd").find("input:hidden").val(e)
}if(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10")){$("#cuxiaoNoNum").show();
$("#cuxiaoEnd").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#buyReminder").hide();
$("#preTime").show();
$("#buyReminder").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-rush-mini-no")
}}else{$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:Cart.addCart();");
$("#addCart2").attr("name","'item_"+sn.ninePartNumber+"_gmq_buy01'").removeAttr("target");
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{if(sn.silenceType!="Y"){$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}}$("#buycount").show();
$("#preTime").hide();
if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}var g=parseInt(PriceShow.endTime);
var i=parseInt(PriceShow.curTime);
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){var l=parseInt(PriceShow.silenceTime)
}if(typeof l!="undefined"&&l!=""){if(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"){if(i>g&&i<=l){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}}}sn.silenceType="Y";
$("#limitTime").show();
$("#cuxiaoEnd").show();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide()
}}}}}}}if(sn.invStatus=="1"||sn.invStatus=="4"){$("#c_kucun").html(sn.inventoryText)
}if(sn.preheat){if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)!=-1){if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#promotionPriceBox").show()
}else{PriceShow.priceController()
}}else{if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)!=-1){if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#promotionPriceBox").show();
if(sn.priceType!="4"){$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><span id="limitTime" class="label hide"></span><a id="PriceNotice2" class="btn-price-notice" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>')
}else{if(sn.priceType=="4"&&PriceShow.status==1){$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><span id="limitTime" class="label">即将开始</span><a id="PriceNotice2" class="btn-price-notice hide" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>')
}else{var j="";
if(PriceShow.serviceType=="2"){j="抢购"
}else{if(PriceShow.serviceType=="3"){j="团购"
}else{if(PriceShow.serviceType=="7"){j="S码专享"
}else{if(PriceShow.serviceType=="4"){j="闪购"
}else{if(PriceShow.serviceType=="10"){j="爆款抢购"
}else{j="大聚惠"
}}}}}$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><span id="limitTime" class="label">'+j+'</span><a id="PriceNotice2" class="btn-price-notice hide" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>')
}}}else{PriceShow.priceController();
$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><span id="limitTime" class="label"></span><a id="PriceNotice2" class="btn-price-notice" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>');
if(sn.priceType=="1"){$("#limitTime").html("限时促销")
}else{if(sn.priceType=="2"){$("#limitTime").html("抢购价");
$("#PriceNotice2").hide()
}else{if(sn.priceType=="3"){$("#limitTime").html("团购价");
$("#PriceNotice2").hide()
}else{if(sn.priceType=="4"&&PriceShow.status==1){$("#limitTime").html("即将开始");
$("#PriceNotice2").hide()
}else{if(sn.priceType=="4"&&PriceShow.status==2){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}$("#PriceNotice2").hide()
}else{if(sn.priceType=="4"){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}$("#PriceNotice2").hide()
}}}}}}}}iFourth.mainHeight();
CommonFourPage.storeService.show()
}else{if(FourPage.comparePrice(sn.promotionPrice,sn.netPrice)!=-1){if(sn.refPrice!=undefined&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}$("#proPriceBox").html('<span id="promotionPrice" class="mainprice">'+FourPage.getDisPrice(u)+'</span><a id="PriceNotice2" class="btn-price-notice" href="javascript:FourPage.subscribePriceNotice();">降价通知</a>');
$("#promotionPriceBox").show()
}else{$("#netPrice").html("<del><i>&yen;</i>"+u+"</del>");
PriceShow.priceController()
}$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#buyNowAddCart").hide();
if(f==1){$("#tellMe").hide();
$("#c_kucun").html("无货")
}else{if(t=="2"){$("#tellMe").show();
$("#c_kucun").html("无货")
}else{$("#tellMe").hide();
$("#c_kucun").html("暂不销售")
}}CommonFourPage.storeService.show()
}}if(q!=""){s=q
}else{s=""
}if(s==""&&f==1){$("#cshopBox").html("");
$("#cshopBox").hide()
}else{if(s!=""&&(f==1)){$("#cshopBox").html("<img height='503' width='200' src='"+s+"'>");
$("#cshopBox").show()
}else{if(f==0){if(cshopHtml!=""){$("#cshopBox").html(cshopHtml)
}$("#cshopBox").show();
FourPage.fareHtml();
FourPage.scoreHtml();
$("#shop"+sn.vendorCode).addClass("cur");
var c="http://"+sn.domain+sn.context+"/sprdonline_"+sn.storeId+"_"+sn.catalogId+"_"+sn.itemId+"__.html";
$("#callme").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','');");
$("#callmeSide").attr("href","javascript:findpassBrand2('"+sn.vendor+"','"+sn.catenIds+"','"+sn.brandId+"','"+sn.categoryId+"','"+c+"','');");
$("#shopNetPrice"+sn.vendorCode).find(".price").html("<i>&yen;</i><em>"+sn.promotionPrice+"</em>");
$("#shopNetPrice"+sn.vendorCode).parents("li").addClass("selected");
if(snShopFlag){$("#c_shop_list").hide();
if(sn.brandFlag==""&&!sn.donateFlag){CommonFourPage.Recommend.shopListItems(sn.partNumber,"Recommend.shopListItemsHtml")
}}}}}if(f==0){if(sn.priceType=="1"||sn.priceType=="2"||sn.priceType=="3"||sn.priceType=="4"){$("#shopNetPrice"+sn.vendorCode).find(".tag-cu").remove();
$("#shopNetPrice"+sn.vendorCode).find(".price").before('<i class="tag tag-cu"></i>');
$("#promotionPriceBox").find("span.w3").html("促销价")
}else{if(sn.priceType.substring(0,1)=="7"||sn.priceType.substring(0,1)=="8"){$("#shopNetPrice"+sn.vendorCode).find(".tag-cu").remove();
$("#shopNetPrice"+sn.vendorCode).find(".price").before('<i class="tag tag-cu"></i>')
}else{$("#shopNetPrice"+sn.vendorCode).find(".tag-cu").remove();
$("#promotionPriceBox").find("span.w3").html("易购价")
}}}else{if(f==1){if($("#netPriceBox").is(":hidden")){$("#promotionPriceBox").find("span.w3").html("易购价")
}else{$("#netPriceBox").find("span.w3").html("易购价");
$("#promotionPriceBox").find("span.w3").html("促销价")
}}}CommonFourPage.FourPage.getItemInfo(k,getPhoneItemDesc);
CommonFourPage.FourPage.getPromotiondesc(k,getPhoneItemDetail);
if(f==0){$("#phoneDetail").hide()
}FourPage.addShopListCss();
iFourth.mainHeight()
};
function getPhoneItemDesc(c){try{if(c!=null){var a=(c.itemDisplayName!=""&&c.itemDisplayName!=null)?c.itemDisplayName:((c.itemName!=""&&c.itemName!=null)?c.itemName:"");
$("#productName").html(a.length>18?a.substring(0,18)+"...":a);
$(".proinfo-mini").find(".pro-name").html(a);
$(".proinfo-mini").find(".pro-img").attr("alt",a);
var b="<h1 title='"+a+"'><span class='zy' id='itemNameZy'>自营</span>"+a+"</h1><h2 id='promotionDesc'>";
if(sn.sellType==1&&typeof sn.phoneTypePromoDesc!="undefined"){b+=sn.phoneTypePromoDesc
}else{b+=sn.promotionDesc+(sn.promotionDesc!=""?"&nbsp;&nbsp;":"")+sn.promItemDesc+(sn.barePhoneDesc==""?"":"<br/>")+sn.barePhoneDesc
}b+="</h2>";
$(".proinfo-title").html(b)
}else{$("#productName").html("");
$(".proinfo-mini").find(".pro-name").html("");
$(".proinfo-mini").find(".pro-img").attr("alt","");
$(".proinfo-title").html("")
}}catch(f){}}function getPhoneItemDetail(a){try{if(a!=""){if(sn.sellType==1){$("#phoneDetail").html(typeof a.itemDetail.detailUrl=="undefined"?"":a.itemDetail.detailUrl);
$("#phoneDetail").show()
}$("img[src2]").Jlazyload({type:"image",placeholderClass:"err-product"})
}else{$("#phoneDetail").hide()
}iFourth.mainHeight()
}catch(b){}}PriceShow.setPrice=function(b,h,f,a){try{if(sn.groupFlag){return
}if(sn.isPreBuy!=1&&sn.isPreBuy!=2){if(sn.vendorCode==""&&sn.TMFlag){FourPage.showInvStatus()
}else{if(b=="2"||b=="3"||b=="4"){getItemBigPolyAction(sn.partNumber,showBigPoly,errShowBigPoly)
}else{getMobileBigPoly(sn.partNumber,showMobileBigPoly,errShowMobileBigPoly)
}}}else{FourPage.showInvStatus()
}var g=sn.vendorCode;
if(g.length==10&&g.substring(0,3)=="003"){g=""
}if(b=="0"){$("#promotionPriceBox").find("dt span").html("易购价");
$("#promotionPrice").html(FourPage.getDisPrice(f));
if(typeof sn.refPrice!="undefined"&&sn.refPrice!=""){PriceShow.priceController()
}else{$("#netPriceBox").hide()
}if(sn.isPreBuy==1){$("#limitTime").show();
$("#PriceNotice2").hide()
}else{$("#limitTime").hide();
$("#PriceNotice2").show()
}$("#promotionPriceBox").show();
if(sn.isPreBuy!=1&&sn.isPreBuy!=2){if(sn.cuxiaoChaifen=="0"){CommonFourPage.Cart.itemLimit(sn.partNumber,"Cart.itemLimitHtml")
}$("#shopNetPrice"+g).find(".tag-cu").remove();
$("#shopNetPrice"+g).find(".price").html("<i>&yen;</i><em>"+f+"</em>")
}}else{if(b=="1"){$("#promotionPriceBox").find("dt span").html("促销价");
$("#netPrice").html("<del><i>&yen;</i>"+h+"</del>");
PriceShow.priceController();
$("#promotionPrice").html(FourPage.getDisPrice(f));
$("#promotionPriceBox").show();
$("#limitTime").html("限时促销");
$("#limitTime").show();
if(sn.isPreBuy!=1){if(sn.cuxiaoChaifen=="0"){CommonFourPage.Cart.itemLimit(sn.partNumber,"Cart.itemLimitHtml")
}$("#shopNetPrice"+g).find(".tag-cu").remove();
$("#shopNetPrice"+g).find(".price").before('<i class="tag tag-cu"></i>');
$("#shopNetPrice"+g).find(".price").html("<i>&yen;</i><em>"+f+"</em>")
}}else{if(b=="4"){$("#promotionPriceBox").find("dt span").html("促销价");
$("#netPrice").html("<del><i>&yen;</i>"+h+"</del>");
PriceShow.priceController();
$("#promotionPrice").html(FourPage.getDisPrice(f));
$("#promotionPriceBox").show();
if(sn.vendorCode==""&&sn.TMFlag){$("#limitTime").html("大聚惠")
}else{$("#limitTime").html("")
}$("#limitTime").show();
if(sn.isPreBuy!=1){$("#shopNetPrice"+g).find(".tag-cu").remove();
$("#shopNetPrice"+g).find(".price").before('<i class="tag tag-cu"></i>');
$("#shopNetPrice"+g).find(".price").html("<i>&yen;</i><em>"+f+"</em>")
}}}}if(sn.isPreBuy==1){$("#limitTime").html("预约");
$("#promotionPriceBox").find("dt span").html("预约价")
}if(typeof sn.refPrice!="undefined"&&sn.refPrice!=""){$("#netPriceBox dt span").html("参考价");
$("#netPrice").html("<del><i>&yen;</i> "+sn.refPrice+"</del>")
}else{$("#netPriceBox dt span").html("易购价")
}if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"&&!sn.groupFlag){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}if(sn.isPreBuy==2){resetBookCss()
}iFourth.mainHeight()
}catch(c){}};
function showBigPoly(p){FourPage.showInvStatus();
PriceShow.activityFlag="2";
try{if(p!=null&&p.length!=0&&p.commList!=null&&p.commList.length!=0){var f=sn.priceInvData;
var a=p.commList.length;
var o=p.commList;
var b="0";
if(sn.priceType=="3"){b="1"
}else{if(sn.priceType=="4"){b="2"
}}for(var h=0;
h<a;
h++){PriceShow.isLimitTake=o[h].isLimitTake;
PriceShow.promotionType="2";
PriceShow.beginTime=o[h].gbBeginDate;
PriceShow.endTime=o[h].gbEndDate;
PriceShow.warmUpTime=o[h].gbWarmupDate;
PriceShow.curTime=o[h].currentDate;
PriceShow.price=o[h].gbPrice;
PriceShow.maxPerNum=o[h].limitBuyNum;
PriceShow.isPhoneBind=o[h].isPhoneBind;
PriceShow.isBrondPay=o[h].isBrondPay;
PriceShow.serviceType=o[h].serviceType;
PriceShow.silenceTime=o[h].gbQuietDate;
PriceShow.published=o[h].published
}var k=parseInt(PriceShow.warmUpTime);
var g=parseInt(PriceShow.beginTime);
var j=parseInt(PriceShow.endTime);
var c=parseInt(PriceShow.curTime);
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){var n=parseInt(PriceShow.silenceTime)
}if(sn.priceType=="4"&&PriceShow.promotionType=="2"){if(PriceShow.isLimitTake=="1"){sn.ziti=false;
$(".ziti").parent().hide()
}if(k<=c&&c<=g){PriceShow.bkflag=1;
PriceShow.status=1;
$("#limitTime").html("即将开始");
$("#limitTime").show();
PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#beginOrEnd").html("团购开始")
}else{if(PriceShow.serviceType=="10"){$("#beginOrEnd").html("距离开始")
}else{$("#beginOrEnd").html("抢购开始")
}}if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#addCart").removeClass().addClass("btn-group-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-group-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}else{$("#addCart").removeClass().addClass("btn-rush-wait").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-rush-mini-wait").attr("href","javascript:void(0);");
$("#tellMe").hide()
}$("#preTime").show();
$("#buyNowAddCart").hide();
PriceShow.activityFlag="2";
var l=(parseInt(g)-parseInt(c))/1000;
if(l>0){$(".proinfo-cd").find("input:hidden").val(l);
iFourth.countdown(BigPolyCountDown)
}$("#freenessPay").hide();
if((sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#nowProduct").hide()
}if(PriceShow.serviceType=="9"){$("#preTime").hide()
}}else{if(g<=c&&c<=j){PriceShow.status=2;
if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}$("#limitTime").show();
PriceShow.activityFlag="2";
$("#PriceNotice2").hide();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#beginOrEnd").html("团购结束")
}else{if(PriceShow.serviceType=="7"||PriceShow.serviceType=="10"){$("#beginOrEnd").html("距离结束")
}else{$("#beginOrEnd").html("抢购结束")
}}if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}$("#preTime").show();
iFourth.buyNum();
var l=(parseInt(j)-parseInt(c))/1000;
if(parseInt(j)>parseInt(c)){if(sn.promotionPrice!=""&&(sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#preTime").show();
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}if(PriceShow.serviceType=="2"||PriceShow.serviceType=="3"){$("#buyReminder").show()
}if(PriceShow.serviceType=="10"){$("#addCart").hide();
$("#addCart2").hide()
}else{$("#addCart").removeClass().addClass("btn-addcart").attr("href","javascript:Cart.addCart();");
$("#addCart2").removeClass().addClass("btn-addcart-mini").attr("href","javascript:Cart.addCart();")
}}else{if(sn.freight=="-1"||f.invStatus=="2"||f.invStatus=="3"||f.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet=="-1")){$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
if(f.invStatus=="2"||f.invStatus=="3"||f.invStatus=="0"){$("#tellMe").show()
}}}if(PriceShow.published=="2"&&(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10")){$("#cuxiaoNoNum").show();
$("#cuxiaoEnd").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#buyReminder").hide();
$("#preTime").show();
$("#buyReminder").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-rush-mini-no");
sn.cuxiaoSoldOut="Y"
}$(".proinfo-cd").find("input:hidden").val(l);
iFourth.countdown(BigPolyCountDown)
}if(PriceShow.serviceType=="9"){$("#limitTime").html("限时促销");
$("#preTime").hide()
}}else{if(typeof n!="undefined"&&n!=""){if(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"){if(c>j&&c<=n){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="9"){$("#limitTime").html("限时促销")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}}}}sn.silenceType="Y";
$("#limitTime").show();
$("#cuxiaoEnd").show();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#freenessPay").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-presell-mini-over")
}else{if(c>n){$("#limitTime").html("大聚惠")
}}}else{$("#limitTime").html("大聚惠")
}}else{$("#limitTime").html("大聚惠")
}}}FourPage.scodeCuxiaoTab(PriceShow.serviceType);
if(sn.promotionPrice!=""&&(sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){verifyBigPoly()
}}else{PriceShow.activityFlag=""
}}else{$("#limitTime").html("大聚惠")
}}catch(m){}FourPage.initmdjt();
iFourth.mainHeight()
}function BigPolyCountDown(){if(remain==0){if(PriceShow.status==1){sn.silenceTip="Y";
PriceShow.status=2;
if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="7"){$("#limitTime").html("S码专享")
}else{if(PriceShow.serviceType=="4"){$("#limitTime").html("闪购")
}else{if(PriceShow.serviceType=="9"){$("#limitTime").html("限时促销")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}else{$("#limitTime").html("大聚惠")
}}}}}}$("#limitTime").show();
PriceShow.activityFlag="2";
FourPage.scodeCuxiaoTab(PriceShow.serviceType);
$("#PriceNotice2").hide();
if(!sn.hwgShopFlag&&PriceShow.serviceType=="3"){$("#beginOrEnd").html("团购结束")
}else{if(PriceShow.serviceType=="7"||PriceShow.serviceType=="10"){$("#beginOrEnd").html("距离结束")
}else{$("#beginOrEnd").html("抢购结束")
}}if(PriceShow.maxPerNum!=0){$("#productLimit").html("正在促销，每人限购<em>"+PriceShow.maxPerNum+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",PriceShow.maxPerNum);
$("#buycount").show()
}else{$("#buycount").hide()
}iFourth.buyNum();
var a=(parseInt(PriceShow.endTime)-parseInt(PriceShow.curTime))/1000;
if(parseInt(PriceShow.endTime)>parseInt(PriceShow.curTime)){$(".proinfo-cd").find("input:hidden").val(a);
remain=a;
if((sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#nowProduct").show();
$("#preTime").show();
if(PriceShow.serviceType=="7"){FourPage.scodeBuyStyle();
$("#buyNowAddCart").show()
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow").show()
}if(PriceShow.serviceType=="2"||PriceShow.serviceType=="3"){$("#buyReminder").show()
}if(PriceShow.serviceType=="10"){$("#addCart").hide();
$("#addCart2").hide()
}else{$("#addCart").removeClass().addClass("btn-addcart").attr("href","javascript:Cart.addCart();");
$("#addCart2").removeClass().addClass("btn-addcart-mini").attr("href","javascript:Cart.addCart();")
}}else{if(sn.promotionPrice==""||sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet=="-1")){$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyReminder").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable").attr("href","javascript:void(0);");
$("#addCart2").removeClass().addClass("btn-addcart-mini-disable").attr("href","javascript:void(0);");
if(sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"){$("#tellMe").show()
}}}}if(typeof(probeAuthStatus)=="function"){probeAuthStatus(function(){$.ajax({type:"get",url:sn.rxfCompetency,cache:true,async:false,dataType:"jsonp",jsonpCallback:"Renxf.rxfCompetencyCallBack",success:function(){}})
},function(){})
}if(sn.scodeType=="7"){$("#freenessPay").parent().hide()
}}else{$(".d").text("00");
$(".h").text("00");
$(".m").text("00");
$(".s").text("00");
clearTimeout(cDown);
if(sn.hwgShopFlag){$("#preTime").hide()
}goToSilenceTime()
}if(PriceShow.serviceType=="9"){$("#preTime").hide()
}iFourth.mainHeight()
}}function goToSilenceTime(){var a=parseInt(PriceShow.endTime);
var c=parseInt(PriceShow.curTime);
if(typeof PriceShow.silenceTime!="undefined"&&PriceShow.silenceTime!=""){var b=parseInt(PriceShow.silenceTime)
}if(typeof b!="undefined"&&b!=""&&PriceShow.status==2&&sn.silenceTip!="Y"){if(sn.cuxiaoType=="4-2"||sn.cuxiaoType=="4-3"||sn.cuxiaoType=="4-10"){if(c<=b){if(PriceShow.serviceType=="2"){$("#limitTime").html("抢购")
}else{if(PriceShow.serviceType=="3"){$("#limitTime").html("团购")
}else{if(PriceShow.serviceType=="9"){$("#limitTime").html("限时促销")
}else{if(PriceShow.serviceType=="10"){$("#limitTime").html("爆款抢购")
}}}}sn.silenceType="Y";
$("#limitTime").show();
$("#cuxiaoEnd").show();
$("#c_kucun").hide();
$("#nowProduct").hide();
$("#c_yunfei").hide();
$("#cuxiaoNoNum").hide();
$("#buyNowAddCart").hide();
$("#addCart").hide();
$("#inerestBox").hide();
$("#buyReminder").hide();
$("#preTime").hide();
$("#freenessPay").hide();
$("#addCart2").removeClass().attr("href","javascript:void(0);").addClass("btn-presell-mini-over");
$("#listProContent").hide();
iFourth.mainHeight()
}}}}function errShowBigPoly(){$("#limitTime").html("大聚惠");
FourPage.showInvStatus()
}function showMobileBigPoly(c){try{if(c!=null&&c.length!=0&&c.commList!=null&&c.commList.length!=0){var b=c.commList.length;
var a=c.commList;
PriceShow.isLimitTake=a[0].isLimitTake;
if(PriceShow.isLimitTake=="1"){$(".ziti").hide();
$(".ziti").parent().hide();
sn.ziti=false
}if(b>0){getMobileItemSaleStatus(sn.partNumber,"showSaleStatus",errShowMobileSaleStatus)
}else{FourPage.showInvStatus()
}}else{FourPage.showInvStatus()
}}catch(f){}iFourth.mainHeight()
}function showMobileSaleStatus(b){var e=b.saleInfo;
if(typeof e!="undefined"&&e.length>0){var a=e[0];
sn.scodeType=(a.priceType).indexOf("4-7")>=0?(a.priceType.substring(2,3)):"0";
sn.scode=sn.scodeType=="7"?true:false;
var c=a.promotionPrice;
if(typeof c!="undefined"&&c!=""){if(parseFloat(c)<parseFloat(sn.promotionPrice)){sn.mobilePrice=(parseFloat(sn.promotionPrice)-parseFloat(c)).toFixed(2)
}}}FourPage.showInvStatus();
iFourth.mainHeight()
}function errShowMobileSaleStatus(){FourPage.showInvStatus();
iFourth.mainHeight()
}function errShowMobileBigPoly(a){FourPage.showInvStatus();
iFourth.mainHeight()
}FourPage.showInvStatus=function(){$("#addCart").show();
$("#addCart2").show();
if(sn.cflag=="0"){$("#vendorType").val(2);
FourPage.initCProductSaleStatus();
if(sn.vendorCode!=""&&sn.invStatus=="1"&&sn.freight!="-1"){processQcode();
setTimeout(processQcode,500)
}else{qCodeHide()
}CommonFourPage.storeService.hide()
}else{FourPage.initProductSaleStatus();
getOldForNew("oldForNewShow")
}};
FourPage.processO2OInfo=function(){if(sn.cflag=="0"){if(sn.promotionPrice==""||sn.invStatus=="0"){sn.saleStatus=0
}else{if(sn.invStatus=="2"||sn.invStatus=="3"){sn.saleStatus=2
}else{if(sn.freight=="-1"||typeof sn.freight=="undefined"){sn.saleStatus=4
}else{sn.saleStatus=1
}}}}else{if(sn.promotionPrice==""||sn.invStatus=="0"||sn.invStatus=="3"){sn.saleStatus=0
}else{if(sn.invStatus=="2"){sn.saleStatus=2
}else{if(sn.shipOffSet<0||typeof sn.shipOffSet=="undefined"){sn.saleStatus=3
}else{sn.saleStatus=1
}}}}if(sn.invStatus=="0"||sn.saleStatus=="2"||sn.saleStatus=="3"||sn.saleStatus=="4"){if(Renxf.runFlag=="N"){Renxf.turnGray();
Renxf.runFlag="Y"
}}if(sn.saleStatus=="1"){processQcode()
}else{qCodeHide()
}if(sn.isPreBuy!="1"&&sn.isPreBuy!="2"){CommonFourPage.storeService.getStroeServiceList(sn.ninePartNumber,sn.saleStatus)
}else{CommonFourPage.storeService.hide()
}if(sn.scodeType=="7"){$("#freenessPay").parent().hide()
}};
FourPage.processCShopO2OInfo=function(){if(sn.promotionPrice!=""&&sn.invStatus=="1"&&sn.freight!="-1"&&typeof sn.freight!="undefined"){CommonFourPage.storeService.getGuideShop()
}};
FourPage.withoutProductNum=function(){if(sn.invStatus=="0"||sn.invStatus=="2"||sn.invStatus=="3"||sn.freight=="-1"||typeof sn.freight=="undefined"||(sn.swlShopFlag&&(typeof sn.shipOffSet=="undefined"||sn.shipOffSet<0))){if(Renxf.runFlag=="N"){Renxf.turnGray();
Renxf.runFlag="Y"
}}};
PriceShow.fixTime=function(a,b){return(""+a).length<b?((new Array(b+1)).join("0")+a).slice(-b):""+a
};
PriceShow.getDetailDate=function(j,e){var h=new Date(j);
var a=new Date(e);
var f=h.getDate();
var i=a.getDate();
var g=true;
if(f!=i){g=false
}return g
};
PriceShow.priceController=function(){var a=$("#netPriceBox").html();
try{if(sn.controller!=[]&&sn.controller[0].PRICE_FLAG!=undefined){if(sn.controller[0].PRICE_FLAG=="0"&&(sn.refPrice!=""||(sn.priceType!="0"&&sn.netPrice!=""))){if(((parseFloat(sn.netPrice)>parseFloat(sn.promotionPrice)&&sn.refPrice=="")||(parseFloat(sn.refPrice)>parseFloat(sn.promotionPrice)&&sn.refPrice!=""))){$("#netPriceBox").show()
}else{$("#netPriceBox").hide()
}}else{$("#netPriceBox").hide()
}}else{$("#netPriceBox").show();
if(((parseFloat(sn.netPrice)>parseFloat(sn.promotionPrice)&&sn.refPrice=="")||(parseFloat(sn.refPrice)>parseFloat(sn.promotionPrice)&&sn.refPrice!=""))){$("#netPriceBox").show()
}else{$("#netPriceBox").hide()
}}if(sn.isPreBuy==1){$("#netPriceBox").hide()
}if(sn.controller!=[]&&sn.controller[0].REPORT_FLAG!=undefined){sn.reportFlag=sn.controller[0].REPORT_FLAG
}else{sn.reportFlag="1"
}}catch(b){}};
function sLablePicture(c){try{if(c!=null&&c.imageUrl!=""){var b=c.patternCss;
var a=c.imageUrl;
$(".g-sticker-80 b").attr("style","background-image:url("+a+")");
$(".g-sticker-80 b").attr("class",b);
$(".g-sticker-80").show()
}}catch(f){}}FourPage.cateDetail=function(a){try{$("#productName").html(a.itemDisplayName.length>18?a.itemDisplayName.substring(0,18)+"...":a.itemDisplayName);
var c=a.itemDisplayName;
if(sn.isPavilion){c='<a href="http://china.suning.com/" target="_blank"><span class="tsg">特色馆</span></a>'+c
}else{if(sn.vendorCode==""||sn.vendorCode=="0000000000"){c='<span class="zy" id="itemNameZy">自营</span>'+c
}}$("#itemDisplayName").html(c)
}catch(b){}};
FourPage.getParameter=function(){try{if(sn.getParameter==undefined||sn.getParameter!=true){sn.getParameter=true;
$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemParameter_"+sn.partNumber+"_"+sn.catenIds+"_"+sn.catalogId+".html",type:"get",async:false,dataType:"json",success:function(h){if(h!=null&&h!=""&&h.eleParameterList!=undefined&&h.eleParameterList!=""){var g=[];
var e='<table id="itemParameter" class="pro-para-tbl"><tbody>';
$.each(h.eleParameterList,function(k,j){$.each(j,function(i,l){e+='<tr><th colspan="3">'+i+"</th></tr>";
if(l!=""&&l.length>0){$.each(l,function(m,n){e+='<tr><td class="name">'+n.snparameterdesc+'</td><td class="val">'+n.snparameterVal+'</td><td class="err"></td></tr>';
if(n.coreFlag=="X"){g.push(n)
}})
}})
});
e+="</tbody></table>";
if($("#itemParameter").length<1){$(".procon-param").append(e)
}if(g.length>0){var b='<div class="hd"><h4>核心参数</h4>';
b+='<span class="opt"><a href="javascript:FourPage.productParTitleClick();">更多参数</a></span></div>';
b+='<ul class="cnt clearfix">';
var c=g.length>15?15:g.length;
for(var f=0;
f<c;
f++){b+='<li title="'+g[f].snparameterVal+'">'+g[f].snparameterdesc+"："+g[f].snparameterVal+"</li>"
}b+="</ul>";
$(".pro-detail-parameter").html(b);
$(".pro-detail-parameter").show()
}}},error:function(){}})
}}catch(a){}};
FourPage.productParTitleClick=function(){$("#productParTitle").click()
};
FourPage.showReturnOrchange=function(a){try{var b=a.returnFlag;
var f=a.dayLimitDescprition;
if((b=="3"||b=="1")&&sn.isPreBuy!=2){$("#returnCate").html('<a class="wly no-link" ><i class="icon"></i>'+f+"</a>");
$("#returnCate").attr("title",f);
$("#returnCate").show();
CommonFourPage.FourPage.getFreightInsuranceFlag()
}else{if(sn.isPreBuy==2){$("#returnCate").html('<a class="tui-disable no-link"><i class="icon"></i>不支持无理由退换货</a>');
$("#returnCate").attr("data-tip","不支持无理由退换货");
$("#returnCate").attr("data-link",scmInfo.hanBackLink);
$("#returnCate").show();
$("#yfxian").hide();
return
}$("#returnCate").html('<a class="tui-disable no-link"><i class="icon"></i>'+f+"</a>");
$("#returnCate").attr("title",f);
$("#returnCate").show();
$("#yfxian").hide()
}}catch(c){}iFourth.servLabel()
};
FourPage.initCluster=function(){try{if(typeof sn.clusterMap!="undefined"&&sn.clusterMap.length!=0){var a="";
$.each(sn.clusterMap,function(f,e){$.each(e.itemCuPartNumber,function(h,g){if(g.partNumber==sn.partNumber){a=g.versionId;
if($("#colorItemList").find("li.selected").length==0){$("li[colorid='"+e.color+"']").addClass("selected")
}}})
});
$("li[versionid='"+a+"']").addClass("selected");
$.each(sn.clusterMap,function(f,e){if(e.color==$("#colorItemList").find("li.selected").attr("colorid")){$.each(e.itemCuPartNumber,function(h,g){$("li[versionid='"+g.versionId+"']").removeClass("disabled")
})
}});
$("li[class=disabled]").each(function(){$(this).children("a").removeAttr("onclick")
})
}else{$("#versionItemList").find("li").each(function(){var e=$(this).attr("sku");
if(sn.partNumber==e){$(this).addClass("selected");
$(this).siblings().removeClass("selected")
}$(this).removeClass("disabled")
})
}var b="";
$(".proattr-radio").each(function(){var e=$(this);
e.find("li").each(function(){var f=$(this);
if(f.is(".selected")){b+='"'+f.attr("title")+'"&nbsp'
}})
});
if(b!=""){$("#selectCB").find(".result-text").html(b);
$("#selectCB").show()
}else{$("#selectCB").hide()
}iFourth.attrChoose()
}catch(c){}};
FourPage.changeVersion=function(j,h,g,b){var i="";
try{var k=window.location.href.split("?")[1];
i=typeof k!="undefined"?("?"+k):""
}catch(f){}try{var a="";
var c="";
if($(b).parent().attr("colorid")!=undefined){a=$(b).parent().attr("colorid");
c=$("#versionItemList").find("li.selected").attr("versionid")
}else{c=$(b).parent().attr("versionid");
a=$("#colorItemList").find("li.selected").attr("colorid")
}$.each(sn.clusterMap,function(l,e){if(e.color==a){$.each(e.itemCuPartNumber,function(n,m){if(m.versionId==c){h=m.partNumber
}})
}});
if(j==h){return false
}if(""!=h&&h.length>9){h=h.substr(9,h.length)
}if(sn.shopType=="-1"){window.location.href=sn.itemDomain+"/"+h+".html"+i
}else{if(""!=sn.vendorCode){window.location.href=sn.itemDomain+"/"+sn.vendorCode+"/"+h+".html"+i
}else{window.location.href=sn.itemDomain+"/0000000000/"+h+".html"+i
}}return false
}catch(f){}};
FourPage.selectIT=function(a){try{if(a.checked){if(a.id=="bk1"){$("#catEntryId_2").val(sn.itHelpOne)
}if(a.id=="bk2"){$("#catEntryId_3").val(sn.itHelpTwo)
}}else{if(a.id=="bk1"){$("#catEntryId_2").val("")
}if(a.id=="bk2"){$("#catEntryId_3").val("")
}}}catch(b){}};
FourPage.runInitFittingReady=function(){try{$.ajax({url:"http://"+sn.domain+sn.context+"/fit_10052_"+sn.catalogId+"_"+sn.partNumber+"_"+sn.vendorCode+"_"+sn.cityId+"_FourPage.initFitting_.html",type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"FourPage.initFitting",success:function(b){iFourth.win.scroll()
}})
}catch(a){}};
Recommend.initFittingPrice=function(a){try{if(a!=""){$.ajax({url:"http://"+sn.domain+"/webapp/wcs/stores/accessoryPrice/"+a+"_"+sn.itemId+"_getFittingPrice.html",type:"get",cache:true,dataType:"jsonp",jsonpCallback:"getFittingPrice",success:function(g){if(g.length>0){for(var f=0;
f<g.length;
f++){var c=iFourth.tieInRec2.list.children("li").filter("'[data-id=\""+g[f].partNumber+"\"]'");
if(g[f].massocceceId!=undefined&&g[f].massocceceId!=""){if(c.length>0){var h=$(c[0]);
if(h.find(".price").length<=0){var e='<p class="price"><span>套餐价：</span><i>&yen;</i>'+g[f].accessoryPrice+"</p>";
if(parseFloat(g[f].price)-parseFloat(g[f].accessoryPrice)>0){e+='<span class="label">已优惠&yen;'+parseFloat(parseFloat(g[f].price)-parseFloat(g[f].accessoryPrice)).toFixed(2)+"</span>"
}e+='<i class="plus"></i><input class="high" type="hidden" value="'+g[f].price+'"><input class="low" type="hidden" value="'+g[f].accessoryPrice+'">';
h.find(".check").val(g[f].massocceceId);
h.find(".check").before(e)
}}}else{c.remove()
}}iFourth.tieInRec2.update()
}}})
}}catch(b){}};
FourPage.initFitting=function(j){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}try{if(j!=""&&j.returnCode=="0"&&j.kitware2Components.length>0){var c='<div class="tiein-top"><a href="'+sn.elecProductDomain+"/0000000000/"+j.mainPartNumber.substring(9,18)+'.html" target="_blank"><img src="'+sn.imageDomianDir+"/b2c/catentries/"+sn.partNumber+'_1_120x120.jpg" alt="'+j.mainProductName+'"/></a>';
c+='<p class="title"><a target="_blank" href="'+sn.elecProductDomain+"/0000000000/"+j.mainPartNumber.substring(9,18)+'.html">'+j.mainProductName+'</a></p><p class="price" id="pro_jiage"><i>&yen</i></p><i class="plus"></i></div>';
c+='<div class="tiein-nav"><a name="item_'+sn.ninePartNumber+'_dapei_alldp" data-type="0" href="javascript:void(0);" class="current">全部搭配</a>  <span>|</span>';
if(j.kitware2Names.length>0){for(var f=0;
f<j.kitware2Names.length;
f++){c+='<a name="item_'+sn.ninePartNumber+"_dapei_group0"+(f+1)+'" data-type="'+j.kitware2Names[f].sequence+'" href="javascript:void(0);">'+j.kitware2Names[f].groupName+"</a>  ";
if(f!=j.kitware2Names.length-1){c+="<span>|</span>"
}}}c+='</div><div class="tiein-main" id="J-slide-tieIn">';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabup" class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<a name="item_'+sn.ninePartNumber+'_dapei_tabdown" class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
c+='<div class="tiein-list"><ul id="dapei_slide">';
if(j.kitware2Components.length>0){for(var f=0;
f<j.kitware2Components.length;
f++){var h=j.kitware2Components[f].partNumber;
var g=j.kitware2Components[f].productPrice.price;
var b=j.kitware2Components[f].productPrice.accessoryPrice;
if(b==null){b=""
}var a=sn.elecProductDomain+"/0000000000/"+h.substring(9,18)+".html";
c+='<li class="" data-type="'+j.kitware2Components[f].sequence+'"><a name="item_'+sn.ninePartNumber+'_dapei_tj01p" target="_blank" href="'+a+'"><img alt="'+j.kitware2Components[f].productName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+h+'_1_60x60.jpg" ></a>';
c+='<p class="title"><a name="item_'+sn.ninePartNumber+'_dapei_tj01c" target="_blank" href="'+a+'">'+j.kitware2Components[f].productName+"</a></p>";
c+='<p class="price"><span>套餐价：</span><i>&yen;</i>'+b+"</p>";
if(g!=null&&g!=""&&b!=null&&b!=""&&(parseFloat(g)-parseFloat(b)>0)){c+='<span class="label">已优惠&yen;'+parseFloat(parseFloat(g)-parseFloat(b)).toFixed(2)+"</span>"
}c+='<i class="plus"></i><input class="fitPartNumber" type="hidden" value="'+h+'"><input class="accessoryId" type="hidden" value="'+(j.kitware2Components[f].productPrice.accessoryId==undefined?"":j.kitware2Components[f].productPrice.accessoryId)+'"><input class="high" type="hidden" value="'+g+'"><input class="low" type="hidden" value="'+b+'"><input mas="'+j.kitware2Components[f].MASSOCCECE_ID+'" name="item_'+sn.ninePartNumber+'_dapei_tj01p" class="check" value="'+j.kitware2Components[f].MASSOCCECE_ID+'" type="checkbox"></li>'
}}c+='</ul></div><div class="tiein-main-empty"><i></i><span>抱歉，您选择的搭配商品已售完，欢迎您选择其他商品！</span></div></div>';
c+=' <div class="tiein-count"><p class="count">已搭配 <em>0</em> 件</p>';
c+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i>  <span id="yuanjia" class="price-total">0.00</span></dd></dl><dl style="display:none;"><dt>已优惠：</dt><dd class="price"><i>&yen;</i>  <span id="yhj" class="price-diff">0.00</span></dd></dl>';
c+='<div class="handle"><a name="item_'+sn.ninePartNumber+'_dapei_buy02" href="javascript:Cart.addCartPJ();" class="btn-addcart-mini"></a><a name="item_'+sn.ninePartNumber+'_dapei_delete" href="javascript:void(0);" class="reset">清除全部</a></div></div>';
$("#J-tieIn").html(c);
$("#J-tieIn").show();
$("li[rel=#J-tieIn]").show();
$("#pro_jiage").html("<i>&yen</i>"+sn.promotionPrice);
$("#yuanjia").text(sn.promotionPrice);
if($("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#listProContent").find("li[rel=#J-tieIn]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-setMeal]").removeClass();
$("#J-setMeal").hide()
}else{$("#listProContent").find("li[rel=#J-setMeal]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-tieIn]").removeClass();
$("#J-setMeal").show()
}$("#listProContent").find(".tabarea-items").length>0?$("#listProContent").show():$("#listProContent").hide();
if(sn.scodeType=="7"){$("#listProContent").find("div ul li[rel=#J-setMeal]").hide();
$("#J-setMeal").hide();
if($("#J-tieIn").html()==""||$("#J-tieIn").html()==null){$("#listProContent").hide()
}}iFourth.tieInRec()
}else{$("#J-tieIn").hide();
$("#J-setMeal").html("");
$("li[rel=#J-tieIn]").hide();
if($("#J-setMeal").length>0&&$("#J-setMeal").html()!=""){$("#listProContent").show();
if(sn.scodeType=="7"){$("#listProContent").find("div ul li[rel=#J-setMeal]").hide();
$("#J-setMeal").hide();
if($("#J-tieIn").html()==""||$("#J-tieIn").html()==null){$("#listProContent").hide()
}}}else{$("#listProContent").hide()
}}iFourth.win.scroll()
}catch(k){}};
FourPage.packageReady=function(){if(typeof(showComoboStatus)=="function"){if($("#J-setMeal").length>0){lazyElems["J-setMeal"].url="http://"+sn.domain+"/webapp/wcs/stores/comboPrice/"+sn.cityId+"_"+sn.virtualPartNumber+"_showComoboStatus.html";
lazyElems["J-setMeal"].handle=showComoboStatus;
lazyElems["J-setMeal"].enable=true;
setTimeout(function(){iFourth.win.scroll()
},500)
}}else{setTimeout(FourPage.packageReady,1000)
}};
function showComoboStatus(b){if(sn.silenceType=="Y"||sn.cuxiaoSoldOut=="Y"){$("#listProContent").hide();
iFourth.mainHeight();
return
}try{if(b!=""&&typeof b.combo!="undefined"&&typeof b.bundlePrice!="undefined"&&b.combo.length>0&&b.bundlePrice!=""){var f=b;
var a="";
var c=1;
var h="";
var i="";
a+='<div class="tiein-top"><a name="item_'+sn.ninePartNumber+'_dapei_tc01p" target="_blank" href="'+sn.elecProductDomain+"/"+sn.partNumber.substring(9,18)+'.html"><img alt="" src="'+sn.imageDomianDir+"/b2c/catentries/"+sn.partNumber+'_1_120x120.jpg"/></a>';
a+='<p class="title"><a name="item_'+sn.ninePartNumber+'_dapei_tc01c" target="_blank" href="'+sn.elecProductDomain+"/"+sn.partNumber.substring(9,18)+'.html">'+sn.itemDisplayName+'</a></p><i class="plus"></i></div>';
a+='<div class="tiein-nav"><a name="item_'+sn.ninePartNumber+'_dapei_taocan01" class="current" href="javascript:void(0);" data-group="1">组合套餐1</a></div>';
a+='<div id="J-slide-setMeal" class="tiein-main">';
if(f.combo.length>4){a+='<a class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>';
a+='<a class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">1</i></span><i class="arr"></i></a>'
}a+='<div class="tiein-list"><ul class="" data-group="1">';
$.each(f.combo,function(e,j){if(j.partNumber!=sn.partNumber){c++;
a+='<li class="" data-type="0">';
a+='<a name="item_'+sn.ninePartNumber+"_dapei_tc0"+(e+1)+'p" target="_blank" href="'+sn.elecProductDomain+"/"+j.partNumber.substring(9,18)+'.html"><img alt="'+j.productName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+j.partNumber+'_1_60x60.jpg"/></a><p class="title"><a name="item_'+sn.ninePartNumber+"_dapei_tc0"+(e+1)+'c" target="_blank" href="'+sn.elecProductDomain+"/"+j.partNumber.substring(9,18)+'.html">'+j.productName+'</a></p><i class="plus"></i></li>'
}h+=j.partNumber+",";
i+=j.productCount+","
});
h=h.substring(0,h.length-1);
i=i.substring(0,i.length-1);
a+="</ul></div></div>";
a+='<div class="tiein-count"><p class="count">已选择：<span>组合套餐1</span></p>';
a+='<dl><dt>套餐价：</dt><dd class="price"><i>&yen;</i><span class="price-total">'+(f.bundlePrice!=""?parseFloat(f.bundlePrice).toFixed(2):0)+"</span></dd></dl>";
if(f.pacTotalPrice!=""&&f.bundlePrice!=""&&parseFloat(f.pacTotalPrice-f.bundlePrice).toFixed(2)!=0){a+='<dl><dt>已优惠：</dt><dd class="price"><i>&yen;</i><span class="price-diff">'+parseFloat(f.pacTotalPrice-f.bundlePrice).toFixed(2)+"</span></dd></dl>"
}a+='<div class="handle"><a name="item_'+sn.ninePartNumber+"_dapei_gmtc\" class=\"btn-addcart-mini\" href=\"javascript:addCartForPackage('1','','"+sn.virtualPartNumber+"','"+h+"','','"+i+"','','','','');\"></a></div></div>";
$("#J-setMeal").html(a);
if($("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#listProContent").find("li[rel=#J-tieIn]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-setMeal]").removeClass();
$("#J-setMeal").hide()
}else{$("#listProContent").find("li[rel=#J-setMeal]").removeClass().addClass("current");
$("#listProContent").find("li[rel=#J-tieIn]").removeClass();
$("#listProContent").find("li[rel=#J-tieIn]").hide();
$("#J-setMeal").show()
}$("li[rel=#J-setMeal]").show();
$("#listProContent").show();
if(sn.scodeType=="7"){$("#listProContent").find("li[rel=#J-setMeal]").hide();
$("#J-setMeal").hide();
if($("#J-tieIn").html()==""||$("#J-tieIn").html()==null){$("#listProContent").hide()
}}iFourth.setMeal()
}else{$("#J-setMeal").hide();
$("#J-setMeal").html("");
$("li[rel=#J-setMeal]").hide();
if($("#J-tieIn").length&&$("#J-tieIn").html()!=""&&$("#J-tieIn").html()!=null){$("#listProContent").show();
if(sn.scodeType=="7"){$("#listProContent").find("div ul li[rel=#J-setMeal]").hide();
$("#J-setMeal").hide();
if($("#J-tieIn").html()==""||$("#J-tieIn").html()==null){$("#listProContent").hide()
}}}else{$("#listProContent").hide()
}}}catch(g){}}FourPage.getCShopAttr=function(){try{$.ajax({url:sn.itemDomain+"/pds-web/ajax/giftCard_"+sn.vendorCode+".html",type:"get",async:false,dataType:"json",success:function(b){if(b.giftCardVendor!=undefined&&b.giftCardVendor!=""){$("#giftCard").show()
}}})
}catch(a){}};
var browseHistory,currentProduct,SEPERATOR,count,productIds,historylen,cat,hisCount,myHistory="";
var skus,hisSkus=[];
FourPage.showMyHistory=function(){try{browseHistory=FourPage.getCookieBonus("smhst");
currentProduct=(sn.partNumber).substring(9,18);
SEPERATOR="a";
count=1;
hisCount=0;
productIds=FourPage.updateHistory(browseHistory,currentProduct,SEPERATOR);
historylen;
if(productIds==null||(productIds.length==1&&currentProduct==productIds[0])){historylen=1;
productIds=[];
productIds[0]=currentProduct;
skus=productIds
}else{skus=[];
historylen=productIds.length;
var b=0;
$.each(productIds,function(a,e){if(e!=currentProduct){skus[b+1]=e;
b++
}});
skus[0]=currentProduct;
historylen++
}myHistory='<a class="btn-dir prev prev-disable" href="javascript:void(0);"></a><div class="scroll-box" id=""><ul>';
FourPage.mysetHistoryValue(skus,count,sn.cityId,sn.imageDomianDir,sn.storeId,sn.catalogId,"-7",historylen);
var g=[];
if(skus.length>4){for(var c=0;
c<4;
c++){g[c]=skus[c]
}}else{g=skus
}CommonFourPage.Recommend.historyRec(g,"Recommend.historyRecHtml")
}catch(f){}};
function setiDiggerTrackingCodes(){var a="";
if(typeof sn.category1!="undefined"){a=sn.category1
}if(typeof sn.category2!="undefined"){a+="_"+sn.category2
}if(typeof sn.categoryId!="undefined"){a+="_"+sn.categoryId
}iDiggerTrackingCodes(sn.partNumber,a,_wmmq)
}FourPage.updateHistory=function(a,h,b){try{var g;
var c;
if(FourPage.isNotEmpty(h)){if(FourPage.isNotEmpty(a)){if(a.indexOf(h)<0){g=a.split(b);
if(g.length<20){c=h+b+a
}else{c=h+b+a.substring(0,a.lastIndexOf(b))
}}else{return a.split(b)
}}else{c=h
}FourPage.setCookieBonus("smhst",c,30);
if(a==null){return c.split(b)
}else{return a.split(b)
}}else{return a==null?null:a.split(b)
}}catch(f){}};
FourPage.isNotEmpty=function(a){return a!=null&&$.trim(a).length>0
};
FourPage.getCookieBonus=function(c){var e=document.cookie.split(";");
for(var b=0;
b<e.length;
b++){var a=e[b].split("=");
if($.trim(a[0])==c){return a[1]
}}return null
};
FourPage.setCookieBonus=function(b,e,a){var c=new Date();
c.setTime(c.getTime()+(a*1000*3600*24));
document.cookie=b+"="+e+((a==null)?"":"; expires="+c.toGMTString())+";path=/;domain="+sn.cookieDomain
};
FourPage.mysetHistoryValue=function(i,h,g,l,k,e,j,f){cat=i[h-1];
var c=cat;
if(cat!=""&&cat.length==9){c="000000000"+cat
}var b=sn.lesCityId+sn.lesDistrictId+"01";
var a=sn.icpsDomain+"/icps-web/getAllPriceFourPage/"+c+"__"+sn.lesCityId+"_"+b+"_1_pc_FourPage.getHisPrice.vhtm";
$.ajax({url:a,cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"FourPage.getHisPrice",success:function(m){}})
};
FourPage.getHisPrice=function(a){if(a!=null&&typeof a.saleInfo!="undefined"&&a.saleInfo.length>0){var b="";
if(typeof a.saleInfo[0].promotionPrice!="undefined"){b=a.saleInfo[0].promotionPrice
}$.ajax({url:sn.itemDomain+"/pds-web/ajax/itemInfo_"+cat+".html",type:"get",cache:true,async:false,dataType:"json",success:function(c){var e={partnum:c.partNumber,catalogId:sn.catalogId,price:b,name:c.itemDisplayName};
FourPage.histroyHtml(e)
}})
}};
FourPage.histroyHtml=function(a){try{if(a!=null&&a.price!=""&&typeof a.name!="undefined"){myHistory+='<li sku="'+cat+'"><a name="item_'+sn.ninePartNumber+"_llls_pic0"+count+'" target="_blank" href="'+sn.elecProductDomain+"/"+cat+'.html"><img alt="'+a.name+'" src="'+sn.imageDomianDir+"/b2c/catentries/000000000"+cat+'_1_160x160.jpg"/></a><p class="title"><a name="item_'+sn.ninePartNumber+"_llls_word0"+count+'" target="_blank" href="'+sn.elecProductDomain+"/"+cat+'.html">'+a.name+'</a></p><p class="price"><i>&yen;</i>'+(a.price==""?"":parseFloat(a.price).toFixed(2))+"</p></li>";
hisSkus[hisCount]=cat;
hisCount++
}if(count<skus.length){count=count+1;
FourPage.mysetHistoryValue(skus,count,sn.cityId,sn.imageDomain,sn.storeId,sn.catalogId,"-7",historylen)
}else{myHistory+='</ul></div><a class="btn-dir next" href="javascript:void(0);"></a>';
$("#J-historyList").html(myHistory);
if(hisCount==0){$("#historyListDiv").hide()
}else{$("#historyListDiv").show()
}if(hisCount<6){$("#J-historyList .prev").css("visibility","hidden");
$("#J-historyList .next").css("visibility","hidden")
}if($("#J-historyList").find("li").length>0){$("#historyListDiv").show();
iFourth.listloop({wrap:"#J-historyList",loopBox:".scroll-box ul",step:{wide:5,narrow:4},scrollWidth:{wide:900,narrow:720},labelObj:$("#J-historyList-pager"),delay:5000})
}else{$("#historyListDiv").hide()
}}}catch(b){}};
FourPage.initmdjt=function(){};
FourPage.getShopGrade=function(){var b=sn.vendorCode;
if("undefined"==b||""==b||(b.length==10&&b.substring(0,3)=="003")){b="0000000000"
}var a=sn.zoneDomain+"/review/ajax/supplierEval/"+b+"-FourPage.shopGrade.htm";
$.ajax({url:a,type:"get",cache:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"FourPage.shopGrade",success:function(c){}})
};
FourPage.shopGrade=function(a){};
FourPage.getReview=function(){var a="";
if(sn.reviewIsNew!=1){a=sn.zoneDomain+"/review/json/productscore_reviewcount/"+sn.partNumber+"--"+sn.prdType+"-"+sn.prdTypeVal+"---satisfy.html"
}else{a=FourPage.buildReviewUrl()
}$.ajax({url:a,cache:true,async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"satisfy",success:function(b){if(sn.reviewIsNew!=1){try{if(b.success==true){FourPage.productSatisfy(b.data.score,b.data.totalCount);
$("li[rel=#J-procon-comment]").html('<a name="item_'+sn.ninePartNumber+'_tab_pingjia" href="javascript:void(0);">评价（'+b.data.totalCount+"）</a>");
FourPage.hash()
}}catch(g){}}else{if(b.returnCode=="1"){var f=b.reviewCounts[0].qualityStar;
var c=b.reviewCounts[0].totalCount;
FourPage.productSatisfy(f,c);
$("li[rel=#J-procon-comment]").html('<a name="item_'+sn.ninePartNumber+'_tab_pingjia" href="javascript:void(0);">评价（'+c+"）</a>");
FourPage.hash()
}}}})
};
FourPage.buildReviewUrl=function(){var a="";
if(sn.vendorCode==""){a="0000000000"
}else{a=sn.vendorCode
}if(sn.shopType=="-1"){a=""
}var b=sn.reviewNew+"ajax/review_satisfy/general-"+sn.partNumber+"-"+a+"-----satisfy.htm";
return b
};
FourPage.judgeValue=function(a){if(a==undefined||a==null){a=""
}return a
};
FourPage.productSatisfy=function(c,b){var a=c;
if(a<=0.2){a=0
}else{if(a<=0.7){a=0.5
}else{if(a<=1.2){a=1
}else{if(a<=1.7){a=1.5
}else{if(a<=2.2){a=2
}else{if(a<=2.7){a=2.5
}else{if(a<=3.2){a=3
}else{if(a<=3.7){a=3.5
}else{if(a<=4.2){a=4
}else{if(a<=4.7){a=4.5
}else{if(a<=5){a=5
}}}}}}}}}}}if(a==3.5){a=Math.floor(a*20)+1
}else{if(a==4.5){a=Math.floor(a*20)+2
}else{a=Math.floor(a*20)
}}if(b>0){$(".proinfo-comments a").html(b);
$(".proinfo-comments").show()
}else{$(".proinfo-comments").hide()
}};
FourPage.getConsulation=function(){var a=sn.zoneDomain+"/review/ajax/wcs_consulation_rank/"+sn.partNumber+"-"+sn.vendorCode+"-false-"+sn.subcodeflag+"-FourPage.consulationCallback.html";
$.ajax({url:a,cache:true,async:true,dataType:"jsonp",jsonp:"callback",jsonpCallback:"FourPage.consulationCallback",success:function(){}})
};
FourPage.consulationCallback=function(a){try{if(a.returnCode=="0"){$("li[rel=#J-procon-refer]").html('<a name="item_'+sn.ninePartNumber+'_tab_zixun" href="javascript:void(0);">咨询（'+a.totalCount+"）</a>")
}}catch(b){}};
FourPage.shareWb=function(){sn.productShareName=$("#productName").text();
sn.productShareName=sn.productShareName.length>100?(sn.productShareName.substring(0,100)+"..."):sn.productShareName;
var h=window.location+"";
var n=h.substr(0,h.indexOf("htm"))+"html";
var c=encodeURI(n);
var q=encodeURI(sn.productShareName);
var e=encodeURI(sn.productShareName);
var l="";
var j="";
if(sn.promotionPrice!=null&&sn.promotionPrice!=""){l=sn.productShareName+"，易购价：￥"+sn.promotionPrice+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）";
j=sn.productShareName+"，易购价：¥"+sn.promotionPrice+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）"
}else{l=sn.productShareName+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）";
j=sn.productShareName+" 苏宁易购让您尽享购物乐趣（分享自 @苏宁易购）"
}q=encodeURI(l);
_ts=encodeURI(sn.productShareName);
$(".kaixin").attr("href","http://www.kaixin001.com/repaste/bshare.php?rtitle="+q+"&rurl="+c+"&from=maxthon");
$(".sina").attr("href","http://v.t.sina.com.cn/share/share.php?url="+c+"&appkey=400813291&title="+q+"&pic=");
var g="推荐苏宁电器网上商城(suning.cn) "+document.title+"价格便宜，评价也不错，快去看看详细介绍吧\n"+window.location+"\n苏宁承诺：所售商品均为正品行货，带发票，凭质保证书及发票可全国联保";
$(".douban").attr("href","http://www.douban.com/recommend/?url="+c+"&title="+_ts+"&comment="+encodeURI(g));
$(".renren").attr("href","http://share.renren.com/share/buttonshare.do?link="+c+"&title="+q);
var b=encodeURI("65e3731f449e42a484c25c668160b355");
var k=encodeURI(sn.pic);
var m=encodeURI("http://www.suning.com");
var o="http://v.t.qq.com/share/share.php?title="+q+"&url="+c+"&appkey="+b+"&site="+m+"&pic="+k;
$(".tengxun").attr("href",o);
$(".souhu").attr("href","http://t.sohu.com/third/post.jsp?&url="+c+"&title="+q+"&content=utf-8&pic=");
var a={url:location.href,desc:"",summary:"",title:j,site:"苏宁易购",pics:sn.pic};
var r=[];
for(var f in a){r.push(f+"="+encodeURIComponent(a[f]||""))
}$(".qzone").attr("href","http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+r.join("&"))
};
FourPage.loginFeedBackDialog=function(){$("body").AjaxLogin({success:function(){iFourth.priceFeedbackDialog()
}})
};
FourPage.subscribePriceNotice=function(){var b="0000000000";
if(sn.vendorCode!=""){b=sn.vendorCode
}partNumber=sn.partNumber;
var a=sn.promotionPrice;
if(sn.groupFlag){a=sn.groupPromotionPrice;
partNumber=sn.groupPartnumber
}else{if(sn.sellType==1&&typeof sn.phonePrice!="undefined"){a=sn.phonePrice;
partNumber=sn.phonePartNumber
}}mySuning.subscribePriceNotice(partNumber,b,a,"productDetail")
};
FourPage.addProductFavorite=function(){var a="0000000000";
if(sn.vendorCode!=""){a=sn.vendorCode
}mySuning.add2ProductFavorite(sn.partNumber,a,"productDetail","","prd_"+sn.itemId)
};
FourPage.addShopFavorite=function(){var a="0000000000";
if(sn.vendorCode!=""){a=sn.vendorCode
}mySuning.add2ShopFavorite(a,"productDetail")
};
FourPage.subscribeArrivalNotice=function(){var a="0000000000";
if(sn.vendorCode!=""){a=sn.vendorCode
}mySuning.subscribeArrivalNotice(sn.partNumber,a,"productDetail")
};
FourPage.runDapushWhenReady=function(){if(typeof(_dapush)=="function"){_dapush()
}else{setTimeout(FourPage.runDapushWhenReady,1000)
}};
FourPage.getDisPrice=function(b){var a="";
if(!(sn.isPreBuy==1&&preBuy.priceType!=2)){b+="";
var c=parseFloat(b).toFixed(2);
a="<i>&yen;</i>"+c.substring(0,c.indexOf("."))+".<span>"+c.substring(c.indexOf(".")+1)+"</span>"
}else{a="<i>&yen;</i>"+b
}return a
};
FourPage.comparePrice=function(a,c){var b=a==""?"0":a;
var c=c==""?"0":c;
if(parseFloat(a)==parseFloat(c)){return 0
}else{if(parseFloat(a)>parseFloat(c)){return 1
}else{return -1
}}};
FourPage.starUtil=function(a){if(a<=0.2){a=0
}else{if(a<=0.7){a=0.5
}else{if(a<=1.2){a=1
}else{if(a<=1.7){a=1.5
}else{if(a<=2.2){a=2
}else{if(a<=2.7){a=2.5
}else{if(a<=3.2){a=3
}else{if(a<=3.7){a=3.5
}else{if(a<=4.2){a=4
}else{if(a<=4.7){a=4.5
}else{if(a<=5){a=5
}}}}}}}}}}}a=Math.floor(a*13.8)+1;
return a
};
FourPage.makeRightPara=function(){var a=$(".pro-para-table").find("tr");
a.bind({mouseover:function(){$(this).find(".erro_recovery").show()
},mouseout:function(){$(this).find(".erro_recovery").hide()
}});
a.find(".erro_recovery").bind("click",function(){var b=$(this).parents().find("td").eq(0).find("span").text();
$("#seachtext").text(b);
SNProduct.Util.alertBox({id:"proWrongPop",closeId:"proWrongCloseBtn",submit:"proWrongSubmit"})
})
};
FourPage.commentJump=function(){$(".commentJump").each(function(){$(this).click(function(){$(".procon-toolbar").find("li[rel=#J-procon-comment]").click()
})
})
};
FourPage.changeCharacter=function(b){var a=new RegExp("-","g");
if(null!=b&&b.indexOf("-")>0){return b.replace(a,"%252D")
}else{return b
}};
FourPage.initPhoneCss=function(){$("#phonedl").hide();
$("#phoned2").hide();
$("#selectCB").hide();
$("#phonedl ul,#phoned2 ul").html("");
$("#phoneText").html("");
if($.trim($("#selectCB span.result-text").html())!=""||$.trim($("#selectCB span#phoneText").html())!=""){$("#selectCB").show()
}};
FourPage.initCss=function(){$(".proinfo-main").show();
$(".nopro").hide();
$(".proinfo-serv").show();
$(".mainbtns").show();
$("#existPrice").hide();
$("#noPrice").hide();
$("#netPriceBox").hide();
$("#promotionPriceBox").hide();
$("#cmsActivityBar").hide();
$("#allcuxiao").hide();
$("#itemNameZy").hide();
$("#istuangouTitle").css("display","none");
$("#voucherTitle").css("display","none");
$("#lhvoucherTitle").css("display","none");
$("#couponTitle").css("display","none");
$("#isXYuanNItemTitle").css("display","none");
$("#freightfreeTitle").css("display","none");
$("#pointTitle").css("display","none");
$("#giftTitle").css("display","none");
$("#rayBuyTitle").css("display","none");
$("#freeCouponTitle").css("display","none");
$("#newcouponTitle").css("display","none");
$("#jnbtTitle").css("display","none");
$("#couponBox").html("");
$("#newcouponBox").html("");
$("#voucherBox").html("");
$("#lhvoucherBox").html("");
$("#giftBox").html("");
$("#couponBox").siblings(".promotion-content").remove();
$("#newcouponBox").siblings(".promotion-content").remove();
$("#voucherBox").siblings(".promotion-content").remove();
$("#lhvoucherBox").siblings(".promotion-content").remove();
$("#jnbtBox").siblings(".promotion-content").remove();
$("#tellMe").hide();
$("#freeFare").hide();
$("#phonedl").hide();
$("#phoned2").hide();
$("#buycount").hide();
$("#productLimit").hide();
$(".ziti").parent().hide();
sn.ziti=false;
$("#szyt").hide();
$("#yanbao").hide();
$("#itHelp").hide();
$("#preTime").hide();
$("#buyNowAddCart").hide();
$("#buyNowAddCart").removeClass().addClass("btn-buynow").html("<span>立即购买</span>");
$("#buyNowAddCart").attr("href","javascript:Cart.buyNowTime();");
$("#buyReminder").hide();
$("#J-slide1").hide();
$("#yjhx").hide();
sn.promoCount=0;
if(sn.catenIds!="R0115001"&&sn.catenIds!="R0115003"){$("#loginFeedBack").show()
}if(sn.catenIds==sn.footTickCatenIds){$("#buycount").remove()
}$(".proinfo-container").removeClass("proinfo-container-nopro");
$("#listProContent").hide();
$("#inerestBox").show();
$("#nowProduct").removeClass("red");
$(".proinfo-deliver-oversea").hide();
$("#tariff").hide();
$(".oversea-logo").hide();
$("#productOverseaTitle").hide();
$(".pro-detail-oversea").hide();
if(sn.catenIds!=scmInfo.broadBandId&&sn.simBuyType!="3"&&sn.simBuyType!="4"){$(".after-market").each(function(){$(this).hide()
})
}$("#bigPolyVerify").hide();
$(".luoji-tip").remove();
$(".proinfo-tip").remove()
};
FourPage.yuShouCss=function(){$("#existPrice").hide();
$("#noPrice").hide();
$("#allcuxiao").hide();
$("#PriceNotice1").hide();
$("#istuangouTitle").css("display","none");
$("#voucherTitle").css("display","none");
$("#lhvoucherTitle").css("display","none");
$("#couponTitle").css("display","none");
$("#isXYuanNItemTitle").css("display","none");
$("#freightfreeTitle").css("display","none");
$("#pointTitle").css("display","none");
$("#rayBuyTitle").css("display","none");
$("#newcouponTitle").css("display","none");
$("#jnbtTitle").css("display","none");
$("#couponBox").html("");
$("#newcouponBox").html("");
$("#voucherBox").html("");
$("#couponBox").siblings(".promotion-content").remove();
$("#voucherBox").siblings(".promotion-content").remove();
$("#newcouponBox").siblings(".promotion-content").remove();
$("#jnbtBox").siblings(".promotion-content").remove();
$("#tellMe").hide();
$(".proinfo-deliver-oversea").hide();
$("#tariff").hide();
$(".oversea-logo").hide();
$("#productOverseaTitle").hide();
$(".pro-detail-oversea").hide();
$(".after-market").each(function(){$(this).hide()
})
};
Recommend.callBackGetnoGoods=function(f){try{var h="";
var a="";
var c=f.sugGoods[0];
if(c.resCode!="02"){if(c.skus.length>4){a+='<a class="btn-dir prev" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">2</i></span><i class="arr"></i></a>';
a+='<a class="btn-dir next" href="javascript:void(0);"><span class="screen-count"><em class="cur-count">1</em>/<i class="total-count">2</i></span><i class="arr"></i></a>'
}a+='<div class="proinfo-rec-list"><ul>';
var g=Recommend.getLiNoGoods(c,false);
if(g!==""){h="<h3>类似商品</h3>"+a+g+"</ul></div>";
$("#J-slide1").html(h);
$("#J-slide1").show();
iFourth.listloop({wrap:"#J-slide1",loopBox:".proinfo-rec-list ul"});
iFourth.mainHeight()
}setTimeout(function(){iFourth.win.scroll()
},500)
}}catch(b){}runAnalyseByClass("baoguang_recwhtjn");
iFourth.mainHeight()
};
Recommend.getLiNoGoods=function(b,a){var f="";
try{$.each(b.skus,function(e,g){if(e>7){return false
}f+='<li><a target="_blank" name="item_'+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_p_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" href="'+sn.elecProductDomain+"/"+g.vendorId+"/"+(g.sugGoodsCode).substring(9,18)+".html?src=item_"+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_p_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" title="'+g.sugGoodsName+'">';
f+='<img alt="'+g.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+g.sugGoodsCode+'_1_100x100.jpg"/></a>';
f+='<p class="title"><a target="_blank" id="baoguang_recwhtjn_1-'+(e+1)+"_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" name="item_'+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_c_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'" title="'+g.sugGoodsName+'" href="'+sn.elecProductDomain+"/"+g.vendorId+"/"+(g.sugGoodsCode).substring(9,18)+".html?src=item_"+(sn.partNumber).substring(9,18)+"_recwhtjn_1-"+(e+1)+"_c_"+g.vendorId+"_"+(g.sugGoodsCode).substring(9,18)+"_"+g.handwork+'">';
if((g.sugGoodsName).length<17){f+=g.sugGoodsName
}else{f+=(g.sugGoodsName).substring(0,16)+"..."
}f+="</a></p>";
f+='<p class="price"><i>&yen; </i>'+g.price+CommonFourPage.Recommend.getPromotionContent(g.promotionType," ")+"</p></li>"
})
}catch(c){}return f
};
Recommend.callbackFunp=function(j){try{var k="";
var o="";
var f="";
var m=false;
var i="";
var h=false;
var b="";
var c=false;
var n="";
var a='<div class="area-head"><h3>'+sn.categoryName3.substring(0,9)+"排行榜</h3></div>";
a+='<ul class="toppro-tab clearfix" id="hot_sort">';
var g=j.sugGoods;
g=$.grep(g,function(e,p){if(e.skus.length!=0&&e.skus.length>2){return true
}},false);
g.sort(function(p,e){var r=parseInt(p.order);
var q=parseInt(e.order);
if(r<q){return -1
}else{if(r>q){return 1
}}return 0
});
$.each(g,function(e,p){if(p.resCode!="02"&&p.skus.length>2){if(p.sceneId=="1-4"){k="baoguang_rectjwn_1-";
o="item_"+(sn.partNumber).substring(9,18)+"_rectjwn_1-";
f='<ul class="toppro-list" id="J-topPro-1" ';
if(e==0){f+=' style="display:block;" '
}else{f+=' style="display:none;" '
}f+=">";
$.each(p.skus,function(q,r){if(q>=6){return false
}f+="<li>";
f+='<a name="'+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'"><img alt="'+r.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+r.sugGoodsCode+'_1_60x60.jpg"></a>';
f+='<p class="title"><a id="'+k+(q+1)+"_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" name="'+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'">'+r.sugGoodsName+"</a></p>";
f+='<p class="price"><i>&yen;</i>'+r.price+CommonFourPage.Recommend.getPromotionContent(r.promotionType)+"</p>";
if(q>2){f+='<span class="num">'+(q+1)+"</span></li>"
}else{f+='<span class="num highlight">'+(q+1)+"</span></li>"
}});
f+="</ul>";
m=true;
a+='<li rel="#J-topPro-1"><a name="item_'+sn.ninePartNumber+'_tab_price" href="javascript:void(0);">同价位</a></li>';
n+=f
}else{if(p.sceneId=="1-5"){k="baoguang_rectppn_1-";
o="item_"+(sn.partNumber).substring(9,18)+"_rectppn_1-";
i='<ul class="toppro-list hide" id="J-topPro-2" ';
if(e==0){i+=' style="display:block;" '
}else{i+=' style="display:none;" '
}i+=">";
$.each(p.skus,function(q,r){if(q>=6){return false
}i+="<li>";
i+='<a name="'+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'"><img alt="'+r.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+r.sugGoodsCode+'_1_60x60.jpg"></a>';
i+='<p class="title"><a id="'+k+(q+1)+"_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" name="'+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'">'+r.sugGoodsName+"</a></p>";
i+='<p class="price"><i>&yen;</i>'+r.price+CommonFourPage.Recommend.getPromotionContent(r.promotionType)+"</p>";
if(q>2){i+='<span class="num">'+(q+1)+"</span></li>"
}else{i+='<span class="num highlight">'+(q+1)+"</span></li>"
}});
i+="</ul>";
h=true;
a+='<li rel="#J-topPro-2"><a name="item_'+sn.ninePartNumber+'_tab_pingpai" href="javascript:void(0);">同品牌</a></li>';
n+=i
}else{if(p.sceneId=="1-6"){k="baoguang_rectlbn_1-";
o="item_"+(sn.partNumber).substring(9,18)+"_rectlbn_1-";
b+='<ul class="toppro-list hide" id="J-topPro-3" ';
if(e==0){b+=' style="display:block;" '
}else{b+=' style="display:none;" '
}b+=">";
$.each(p.skus,function(q,r){if(q>=6){return false
}b+="<li>";
b+='<a name="'+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_p_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'"><img alt="'+r.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+r.sugGoodsCode+'_1_60x60.jpg"></a>';
b+='<p class="title"><a id="'+k+(q+1)+"_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" name="'+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'" title="'+r.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+r.vendorId+"/"+(r.sugGoodsCode).substring(9,18)+".html?src="+o+(q+1)+"_c_"+r.vendorId+"_"+(r.sugGoodsCode).substring(9,18)+"_"+r.handwork+'">'+r.sugGoodsName+"</a></p>";
b+='<p class="price"><i>&yen;</i>'+r.price+CommonFourPage.Recommend.getPromotionContent(r.promotionType)+"</p>";
if(q>2){b+='<span class="num">'+(q+1)+"</span></li>"
}else{b+='<span class="num highlight">'+(q+1)+"</span></li>"
}});
b+="</ul>";
a+='<li rel="#J-topPro-3"><a name="item_'+sn.ninePartNumber+'_tab_cata" href="javascript:void(0);">同类别</a></li>';
c=true;
n+=b
}}}}});
a=a.replace("<li rel=",'<li class="current" rel=')+"</ul>";
if(m||h||c){$("#hotRank").html(a+n);
if(m==false&&h==true&&c==true){$("#J-topPro-1").removeClass("pro-tab-box").addClass("hide");
$("#J-topPro-2").removeClass("hide").addClass("pro-tab-box")
}else{if(m==false&&h==true&&c==false){$("#J-topPro-2").removeClass("hide").addClass("pro-tab-box")
}else{if(m==false&&h==false&&c==true){$("#J-topPro-3").removeClass("hide").addClass("pro-tab-box")
}}}$("#hotRank").show();
iFourth.Tab(".toppro-tab",".toppro-list",function(q,e,p){})
}else{$("#hotRank").html("");
$("#hotRank").hide()
}if($("#hotRank .toppro-tab").find("li").length!=3){$("#hot_sort").addClass("toppro-tab-single")
}}catch(l){}runAnalyseByClass("baoguang_rectjwn");
runAnalyseByClass("baoguang_rectppn");
runAnalyseByClass("baoguang_rectlbn")
};
Recommend.getRecomData=function(f){try{var a=f.sugGoods;
var i="";
var g="";
var c="";
var j=[];
var k=[];
var b="";
$.each(a,function(e,l){if(l.resCode!="02"){if(l.sceneId=="1-1"){i=Recommend.getLiV9(l,1);
if(i!==""){i='<div class="area mt10 hide" id="view_Also_ViewProduct"><div class="area-head"><h3>看了还看</h3></div><ul class="exprec" id="vav">'+i+"</ul></div>"
}k[l.order]=i;
j.push(l.order)
}else{if(l.sceneId=="1-2"){g=Recommend.getLiV9(l,2);
if(g!==""){g='<div class="area mt10 hide" id="view_Also_BuyProduct"><div class="area-head"><h3>看了最终买</h3></div><ul class="exprec" id="vab">'+g+"</ul></div>"
}k[l.order]=g;
j.push(l.order)
}else{if(l.sceneId=="1-3"){c=Recommend.getLiV9(l,3);
if(c!==""){c='<div class="area mt10 hide" id="buy_Also_BuyProduct"><div class="area-head"><h3>买了还买</h3></div><ul class="exprec" id="bab">'+c+"</ul></div>"
}k[l.order]=c;
j.push(l.order)
}}}}});
j.sort(function(l,e){return l>e?1:-1
});
$.each(j,function(e,l){b+=k[l]
});
$("#buyAlsoBuy").after(b);
$("#buyAlsoBuy").hide();
$("#view_Also_ViewProduct").show();
$("#view_Also_BuyProduct").show();
$("#buy_Also_BuyProduct").show()
}catch(h){}runAnalyseByClass("baoguang_recviewviewn");
runAnalyseByClass("baoguang_recviewbuyn");
runAnalyseByClass("baoguang_recbuybuyn")
};
Recommend.getLiV9=function(f,a){var h="";
try{var c="";
var b="";
if(a==1){c="baoguang_recviewviewn_1-";
b="item_"+(sn.partNumber).substring(9,18)+"_recviewviewn_1-"
}else{if(a==2){c="baoguang_recviewbuyn_1-";
b="item_"+(sn.partNumber).substring(9,18)+"_recviewbuyn_1-"
}else{if(a==3){c="baoguang_recbuybuyn_1-";
b="item_"+(sn.partNumber).substring(9,18)+"_recbuybuyn_1-"
}}}$.each(f.skus,function(e,j){if(e>4){return false
}h+="<li>";
h+='<a target="_blank" name="'+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" href="'+sn.elecProductDomain+"/"+j.vendorId+"/"+(j.sugGoodsCode).substring(9,18)+".html?src="+b+(e+1)+"_p_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'">';
h+='<img class="image" alt="'+j.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+j.sugGoodsCode+'_1_120x120.jpg" /></a>';
h+='<p class="title"><a target="_blank" id="'+c+(e+1)+"_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" name="'+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'" href="'+sn.elecProductDomain+"/"+j.vendorId+"/"+(j.sugGoodsCode).substring(9,18)+".html?src="+b+(e+1)+"_c_"+j.vendorId+"_"+(j.sugGoodsCode).substring(9,18)+"_"+j.handwork+'">';
h+=j.sugGoodsName;
h+=j.sugGoodsDes;
h+="</a></p>";
h+='<p class="price"><span><i>&yen; </i>'+j.price+"</span>"+CommonFourPage.Recommend.getPromotionContent(j.promotionType," ")+"</p></li>"
})
}catch(g){}return h
};
Recommend.historyRecHtml=function(c){try{var a="";
if(c!=""&&c.sugGoods!=undefined){$.each(c.sugGoods,function(f,g){if((g.resCode=="01"||g.resCode=="03")&&g.sceneId=="8-3"){a+='<a class="btn-dir prev" href="javascript:void(0);"></a>';
a+='<div class="scroll-box"><ul>';
var e="";
var h="item_"+sn.partNumber.substring(9,18)+"_recllcnxhn_";
$.each(g.skus,function(j,k){e=Math.floor(j/5)+1;
a+='<li><a name="'+h+e+"-"+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+h+e+"-"+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'"><img alt="'+k.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+k.sugGoodsCode+'_1_160x160.jpg"></a><p class="title"><a name="'+h+e+"-"+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" id="baoguang_recllcnxhn_'+e+"-"+(j+1)+"_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+h+e+"-"+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'">'+k.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+k.price+CommonFourPage.Recommend.getPromotionContent(k.promotionType," ")+"</p></li>"
});
a+="</ul></div>";
a+='<a class="btn-dir next" href="javascript:void(0);"></a>';
if(g.skus.length>5){$("#J-historyRec").siblings(".area-head").find(".history-rec-pager").show()
}else{$("#J-historyRec").siblings(".area-head").find(".history-rec-pager").hide();
$("#J-historyRec .prev").css("visibility","hidden");
$("#J-historyRec .next").css("visibility","hidden")
}$("#J-historyRec").html(a);
iFourth.listloop({wrap:"#J-historyRec",loopBox:".scroll-box ul",step:{wide:5,narrow:4},scrollWidth:{wide:900,narrow:720},labelObj:$("#J-historyRec-pager"),delay:5000});
runAnalyseByClass("baoguang_recllcnxhn")
}else{$("#historyRecDiv").hide()
}});
if($("#J-historyRec").find("li").length>0){$("#historyRecDiv").show()
}else{$("#historyRecDiv").hide()
}}else{$("#historyRecDiv").hide()
}}catch(b){}};
Recommend.shopListItemsHtml=function(h){try{var c=h.sugGoods;
var b="";
if((c[0].resCode=="01"||c[0].resCode=="03")&&c[0].sceneId=="11-1"){var a="";
var g="item_"+sn.partNumber.substring(9)+"_recliken_";
$.each(c[0].skus,function(e,j){a="baoguang_recliken_"+(Math.floor(e/2)+1);
b+='<li><a name="'+g+(Math.floor(e/2)+1)+"-"+(e%2+1)+"_p_"+j.vendorId+"_"+j.sugGoodsCode.substring(9,18)+"_"+j.handwork+'" title="'+j.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+j.vendorId+"/"+j.sugGoodsCode.substring(9,18)+".html?src="+g+(Math.floor(e/2)+1)+"-"+(e%2+1)+"_p_"+j.vendorId+"_"+j.sugGoodsCode.substring(9,18)+"_"+j.handwork+'"><img alt="'+j.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+j.sugGoodsCode+'_1_60x60.jpg"></a><p class="title"><a name="'+g+(Math.floor(e/2)+1)+"-"+(e%2+1)+"_c_"+j.vendorId+"_"+j.sugGoodsCode.substring(9,18)+"_"+j.handwork+'" id="'+a+"-"+(e+1)+"_"+j.vendorId+"_"+j.sugGoodsCode.substring(9,18)+"_"+j.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+j.vendorId+"/"+j.sugGoodsCode.substring(9,18)+".html?src="+g+(Math.floor(e/2)+1)+"-"+(e%2+1)+"_c_"+j.vendorId+"_"+j.sugGoodsCode.substring(9,18)+"_"+j.handwork+'">'+j.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+j.price+CommonFourPage.Recommend.getPromotionContent(j.promotionType)+"</p></li>"
});
if(b!=""){$("#tuijianShopList").html(b);
$("#J-sideRec").show();
$("#c_shop_list").hide();
if(c[0].skus.length<3){$("#J-sideRec").find(".more").hide()
}else{$("#J-sideRec").find(".more").show()
}}else{$("#J-sideRec").hide();
if(sn.groupFlag){$("#c_shop_list").hide()
}else{FourPage.cShopListStatus()
}}iFourth.sideRec();
runAnalyseByClass("baoguang_recliken");
iFourth.mainHeight()
}else{$("#J-sideRec").hide();
FourPage.cShopListStatus()
}}catch(f){}iFourth.sideRec()
};
Recommend.noPublishItemsHtml=function(f){try{var a="";
var b="";
$.each(f.sugGoods,function(e,h){if((h.resCode=="01"||h.resCode=="03")&&h.sceneId=="11-2"){var g="item_"+sn.partNumber.substring(9,18)+"_recxjtj01n_1-";
$.each(h.skus,function(j,k){a+='<li><a name="'+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'"><img alt="'+k.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+k.sugGoodsCode+'_1_100x100.jpg"></a><p class="title"><a name="'+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" id="baoguang_recxjtj01n_1-'+(j+1)+"_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'">'+k.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+k.price+"</p></li>"
})
}else{if((h.resCode=="01"||h.resCode=="03")&&h.sceneId=="10-1"){var g="item_"+sn.partNumber.substring(9,18)+"_recxjtj02n_1-";
$.each(h.skus,function(j,k){b+='<li><a name="'+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" title="'+k.sugGoodsName+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+g+(j+1)+"_p_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'"><img alt="'+k.sugGoodsName+'" src="'+sn.imageDomianDir+"/b2c/catentries/"+k.sugGoodsCode+'_1_100x100.jpg"></a><p class="title"><a name="'+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" id="baoguang_recxjtj02n_1-'+(j+1)+"_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'" target="_blank" href="'+sn.elecProductDomain+"/"+k.vendorId+"/"+k.sugGoodsCode.substring(9,18)+".html?src="+g+(j+1)+"_c_"+k.vendorId+"_"+k.sugGoodsCode.substring(9,18)+"_"+k.handwork+'">'+k.sugGoodsName+'</a></p><p class="price"><i>&yen;</i>'+k.price+"</p></li>"
})
}}});
if(a!=""){$("#noPublish").html(a);
$("#J-slide2").show()
}if(b!=""){$("#noPublishLike").html(b);
$("#J-slide3").show()
}}catch(c){}runAnalyseByClass("baoguang_recxjtj01n");
iFourth.mainHeight()
};
Cart.itemLimitHtml=function(a){try{if(a.isSuccess=="1"&&a.isLimit=="1"&&a.limitDesc!=undefined){$("#buyNum").attr("max",a.limitQty);
$("#productLimit").html(a.limitDesc);
$("#productLimit").show()
}else{$("#buyNum").attr("max",99);
$("#productLimit").html("每人限购<em>99</em>件");
$("#productLimit").hide()
}}catch(b){}iFourth.buyNum()
};
function icpsItemlimit(a){if(sn.isPreBuy==1||sn.isPreBuy==2||sn.priceType=="2"||sn.priceType=="3"||sn.priceType=="4"){return
}try{if(a.limitCount!=""&&parseInt(a.limitCount)>0){$("#buyNum").attr("max",a.limitCount);
$("#productLimit").html(a.limitLabel);
$("#productLimit").show()
}else{$("#buyNum").attr("max",99);
$("#productLimit").html("每人限购<em>99</em>件");
$("#productLimit").hide()
}}catch(b){}iFourth.buyNum()
}Cart.sunShine=function(c){try{if(c.warrProductLst.length>0){var h="<dt>购买延保</dt><dd><ul>";
var b="";
var a="";
var g="";
$.each(c.warrProductLst,function(e,j){if(e<=2){if(j.warrType=="EXW"){b="延长保修";
a="icon1";
g="item_"+sn.ninePartNumber+"_gmq_yanchang01"
}else{if(j.warrType=="ADP"){b="意外保障";
a="icon4";
g="item_"+sn.ninePartNumber+"_gmq_yiwai02"
}else{if(j.warrType=="PRP"){b="货品替换";
a="icon3";
g="item_"+sn.ninePartNumber+"_gmq_tihuan03"
}else{if(j.warrType=="SPRP"){b="空调保内替换";
a="icon3";
g="item_"+sn.ninePartNumber+"_gmq_kongtiao04"
}else{if(j.warrType=="SPB"){b="碎屏保";
a="icon2";
g="item_"+sn.ninePartNumber+"_gmq_suiping05"
}else{if(j.warrType=="APRP"){b="意外替换";
a="icon3";
g="item_"+sn.ninePartNumber+"_gmq_yiwai06"
}else{if(j.warrType=="SPEW"){b="碎屏延保";
a="icon2";
g="item_"+sn.ninePartNumber+"_gmq_suiping07"
}else{if(j.warrType=="BNTH"){b="保内替换";
a="icon3";
g="item_"+sn.ninePartNumber+"_gmq_baonei08"
}}}}}}}}if(j.extendPrice!="0"){h+='<li data-id="'+j.warrPartnumber+'" data-vendor="'+j.goodsSupplyCode+'" title="'+b+j.warrYearLimit+j.limitUnit+" &yen;"+j.extendPrice+'"><a name="'+g+'" href="javascript:void(0);"><i class="'+a+'"></i>'+b+j.warrYearLimit+j.limitUnit+" &yen;"+j.extendPrice+'<i class="flag"></i></a></li>'
}}});
h+='</ul><a name="item_'+sn.ninePartNumber+'_gmq_ybxq" target="_blank" class="b link" href="'+scmInfo.yanbaoLink+'">详情&gt;</a><input type="hidden"/></dd>';
$("#yanbao").html(h);
if(sn.isPreBuy!=1&&sn.isPreBuy!=2){$("#yanbao").show()
}else{$("#yanbao").hide()
}iFourth.attrChoose();
iFourth.mainHeight()
}}catch(f){}};
Cart.spotGoods=function(c){var e=document.reflashForm.sellType.value;
var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var h=sn.partNumber;
var a=sn.vendorCode;
var g="";
if($("#catEntryId_2").val()==sn.itHelpOne){h+=","+sn.itHelpOne
}if($("#catEntryId_3").val()==sn.itHelpTwo){h+=","+sn.itHelpTwo
}var f="";
if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").each(function(){if(f!=""){f+=","+$(this).attr("data-id")+"-"+$(this).attr("data-vendor")
}else{f+=$(this).attr("data-id")+"-"+$(this).attr("data-vendor")
}})
}$("body").AjaxLogin({success:function(){buyNow(e,b,a,g,f,h,sn.priceType,PriceShow.actionId,sn.giftInfo,c,"","")
}})
};
Cart.buyNowTime=function(){if(sn.catenIds==sn.footTickCatenIds){var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var i=sn.ninePartNumber;
var a=sn.vendorCode;
Cart.buyNowForTicket(i,a,b)
}else{var g=document.reflashForm.sellType.value;
var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var i=sn.partNumber;
if(sn.groupFlag){i=sn.groupPartnumber
}var a=sn.vendorCode;
var h="";
if($("#catEntryId_2").val()==sn.itHelpOne){i+=","+sn.itHelpOne
}if($("#catEntryId_3").val()==sn.itHelpTwo){i+=","+sn.itHelpTwo
}var c="01";
var e="";
if(sn.priceType=="4"){c="02";
e=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){c="07";
e=preBuy.actionID
}var f=[];
if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").each(function(){var j={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:b};
f.push(j)
})
}if(!Cart.treatPhoneCheck()){return
}iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){FourPage.quickPress("0");
if(sn.groupFlag){buyNowFourPage(b,i,c,e,"",f,"",sn.giftInfo,FourPage.quickPress)
}else{buyNowFourPage(b,i,c,e,"",f,"",sn.giftInfo,FourPage.quickPress)
}}})
}};
Cart.buyNowForTicket=function(c,b,a){iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){fctCart2(c,b,sn.lesCityId,a,footTickCallback)
}})
};
function footTickCallback(a){if(a&&a.message){Util.alertErrorBox(a.message)
}else{Util.alertErrorBox("暂不销售")
}}Renxf.buyNowFreenessPay=function(){if(!Cart.treatPhoneCheck()){return
}var f="";
if($(".renxf-list li.current").attr("data-id")!=undefined){f=$(".renxf-list li.current").attr("data-id")
}else{return
}var a=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var h=sn.partNumber;
if(sn.groupFlag){h=sn.groupPartnumber
}var g="";
if($("#catEntryId_2").val()==sn.itHelpOne){h+=","+sn.itHelpOne
}if($("#catEntryId_3").val()==sn.itHelpTwo){h+=","+sn.itHelpTwo
}var b="01";
var c="";
if(sn.priceType=="4"){b="02";
c=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){b="07";
c=preBuy.actionID
}var e=[];
if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").each(function(){var i={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:a};
e.push(i)
})
}iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){FourPage.quickPress("0");
if(sn.groupFlag){buyNowFourPage(a,h,b,c,f,e,"",sn.giftInfo,FourPage.quickPress)
}else{buyNowFourPage(a,h,b,c,f,e,"",sn.giftInfo,FourPage.quickPress)
}}})
};
Cart.buyNowTime1=function(e,b,h,a,g,f,c){iFourth.addCartPop.hide();
$("body").AjaxLogin({success:function(){if(sn.groupFlag){buyNow(e,b,a,g,f,h,"0","","","",c,"")
}else{if(sn.cuxiaoType=="4-10"){buyNow(e,b,a,g,f,h,sn.priceType,PriceShow.actionId,sn.giftInfo,"",c,"10")
}else{buyNow(e,b,a,g,f,h,sn.priceType,PriceShow.actionId,sn.giftInfo,"",c,"")
}}}})
};
Cart.oldAddCart=function(){var c=document.reflashForm.sellType.value;
var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var h=sn.partNumber;
if(sn.groupFlag){h=sn.groupPartnumber
}var a=sn.vendorCode;
var g="";
if($("#catEntryId_2").val()==sn.itHelpOne){h+=","+sn.itHelpOne
}if($("#catEntryId_3").val()==sn.itHelpTwo){h+=","+sn.itHelpTwo
}var f="";
if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").each(function(){if(f!=""){f+=","+$(this).attr("data-id")+"-"+$(this).attr("data-vendor")
}else{f+=$(this).attr("data-id")+"-"+$(this).attr("data-vendor")
}})
}var i=sn.cityId;
var e=sn.isPreBuy;
if(sn.groupFlag){e="0"
}if(!Cart.treatPhoneCheck()){return
}if(sn.priceType=="4"&&!sn.groupFlag){$("body").AjaxLogin({success:function(){Cart.fourAddCart(c,b,a,g,f,i,e,h)
}})
}else{Cart.fourAddCart(c,b,a,g,f,i,e,h)
}};
Cart.addCart=function(){if(!Cart.treatPhoneCheck()){return
}var b="01";
var c="";
if(sn.priceType=="4"){b="02";
c=PriceShow.actionId
}if(sn.isPreBuy=="1"&&!sn.groupFlag){b="07";
c=preBuy.actionID
}var a=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var g=sn.partNumber;
if(sn.groupFlag){g=sn.groupPartnumber
}var f="";
if($("#catEntryId_2").val()==sn.itHelpOne){g+=","+sn.itHelpOne
}if($("#catEntryId_3").val()==sn.itHelpTwo){g+=","+sn.itHelpTwo
}var e=[];
if($("#yanbao").find("li[class='selected']").length>0){$("#yanbao").find("li[class='selected']").each(function(){var h={cmmdtyCode:$(this).attr("data-id"),supplierCode:$(this).attr("data-vendor"),cmmdtyQty:a};
e.push(h)
})
}if(sn.priceType=="4"){$("body").AjaxLogin({success:function(){FourPage.cartPress("0");
addCartFourPage(a,g,b,c,e,"",FourPage.cartPress)
}})
}else{FourPage.cartPress("0");
addCartFourPage(a,g,b,c,e,"",FourPage.cartPress)
}};
Cart.treatPhoneCheck=function(){var b=false;
if(sn.phoneFlag=="Y"&&$("#phonedl").is(":visible")){if(typeof $("#phonedl li.selected")!="undefined"){var c=$("#phonedl li.selected").index();
var a=$("#phoned2 ul").eq(c-1).find("li.selected").index();
if(c==0||(c!=0&&a>=0)){b=true
}}}else{b=true
}if(!b){iFourth.TZM.show()
}return b
};
Cart.addShoppingCartCheck=function(m,j,h,e,f,a,g,b,i,l,k,c){if(Cart.treatPhoneCheck()){addShoppingCartCheck(m,j,h,e,f,a,g,b,i,l,k,c)
}};
Cart.fourAddCart=function(c,b,a,g,f,i,e,h){iFourth.addCartPop.hide();
if(sn.groupFlag){add2Cart(c,b,a,g,f,i,e,h,"0","")
}else{add2Cart(c,b,a,g,f,i,e,h,sn.priceType,PriceShow.actionId)
}};
Cart.addCartPJ=function(){var i=0;
var b=$("#buyNum").val()==undefined?1:$("#buyNum").val();
var h=sn.partNumber;
var e=$("#J-slide-tieIn").find("input[class=check]");
var e=$.grep(e,function(k,j){if($(k).attr("checked")=="checked"){return true
}},false);
var a=sn.vendorCode;
if(sn.vendorCode==""){a="0000000000"
}var f=new Array();
var g={cmmdtyCode:sn.partNumber,cmmdtyQty:b,shopCode:a,accessoryRelationID:""};
f.push(g);
$.each(e,function(k,j){var l={cmmdtyCode:$(this).siblings(".fitPartNumber").val(),cmmdtyQty:b,shopCode:a,accessoryRelationID:$(this).siblings(".accessoryId").val()};
f.push(l);
i++
});
var c="04";
if(i!=0){if(sn.priceType=="4"){$("body").AjaxLogin({success:function(){addCartFourPage(b,h,c,"","",f,FourPage.cartPress)
}})
}else{addCartFourPage(b,h,c,"","",f,FourPage.cartPress)
}}else{Util.alertErrorBox("请选择你要购买的配件!")
}};
Cart.quickPress=function(a){if(a){$("#buyNowAddCart").removeClass().addClass("btn-buynow-loading")
}else{$("#buyNowAddCart").removeClass().addClass("btn-buynow")
}};
Cart.cartPress=function(a){if(a){$("#addCart").removeClass().addClass("btn-addcart-loading")
}else{$("#addCart").removeClass().addClass("btn-addcart")
}};
FourPage.quickPressData={};
FourPage.quickPress=function(a){if(a=="0"){if(sn.isPreBuy=="1"&&!sn.groupFlag){$("#addCart").removeClass().addClass("btn-addcart-loading")
}else{FourPage.quickPressData.itemClass=$("#buyNowAddCart").attr("class");
FourPage.quickPressData.html=$("#buyNowAddCart").html();
$("#buyNowAddCart").removeClass().addClass("btn-buynow-loading");
$("#buyNowAddCart").html("<span>立即购买</span>")
}}else{if(sn.isPreBuy=="1"&&!sn.groupFlag){$("#addCart").removeClass().addClass("btn-rush")
}else{if(a.result!="1"){$("#buyNowAddCart").removeClass().addClass(FourPage.quickPressData.itemClass);
$("#buyNowAddCart").html(FourPage.quickPressData.html)
}}}};
FourPage.cartPress=function(a){if(a=="0"){$("#addCart").removeClass().addClass("btn-addcart-loading")
}else{if(a.result!="1"){$("#addCart").removeClass().addClass("btn-addcart")
}}};
YuShou.initPreBuy=function(a){if(a!=null){preBuy.scheduleStartTime=a.scheduleStartTime/1000;
preBuy.scheduleEndTime=a.scheduleEndTime/1000;
preBuy.priorPurchaseStartTime=a.priorPurchaseStartTime/1000;
preBuy.priorPurchaseEndTime=a.priorPurchaseEndTime/1000;
preBuy.purStartTime=a.purStartTime/1000;
preBuy.purEndTime=a.purEndTime/1000;
preBuy.curTime=a.curTime/1000;
preBuy.disCityList=a.disCityList;
preBuy.appiontCount=a.appiontCount;
preBuy.preLimit=a.preLimit;
preBuy.personBuysLimit=a.personBuysLimit;
preBuy.adapteTerminal=a.adapteTerminal;
preBuy.recomText=a.recomText;
preBuy.recomUrl=a.recomUrl;
if(preBuy.disCityList!=null){$.each(preBuy.disCityList,function(g,h){if(h==sn.cityId){preBuy.isEffect=false
}})
}var f=sn.vendorCode==""?"0000000000":sn.vendorCode;
var e=sn.yushouDomain+"/appoint/gotoAppoint.do?partNumber="+sn.partNumber+"&actionId="+preBuy.actionID+"&purchaseType=P01";
var c=sn.yushouDomain+"/appointFront-web/scode/bindScodeNew.htm?actionId="+preBuy.actionID+"&partNumber="+sn.partNumber+"&vendorId="+f;
preBuy.scodeBindUrl=c;
$("#J-slide1").remove();
$("#listProContent").hide();
if(!preBuy.isEffect){$("#preTime").hide();
$("#nowProduct").html("该地区不参加预约活动").addClass("red").show();
$("#c_kucun").html("暂不销售").show();
$("#buyNowAddCart").hide();
$("#addCart").removeClass().addClass("btn-addcart-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-addcart-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
$("#buycount").hide()
}else{if(preBuy.type==1){if(a.curTime<a.scheduleStartTime){preBuy.status=1;
$("#preTime").find("dt").html("预约开始");
$(".duration-time").val((a.scheduleStartTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-order-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{if(a.curTime>=a.scheduleStartTime&&a.curTime<=a.scheduleEndTime){preBuy.status=2;
$("#preTime").find("dt").html("预约结束");
$(".duration-time").val((a.scheduleEndTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",e);
$("#addCart").attr("target","_blank");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljyy");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",e);
$("#addCart2").attr("target","_blank");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljyy");
YuShou.countdown(e)
}else{if((a.curTime>a.scheduleEndTime&&a.curTime<a.purStartTime)||(a.purStartTime==""&&a.purEndTime=="")){preBuy.status=3;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((a.purStartTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(a.purStartTime==""&&a.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}else{YuShou.countdown(e)
}}else{if(a.curTime>=a.purStartTime&&a.curTime<=a.purEndTime){if(a.preLimit<=0){preBuy.status=5;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{if(a.preLimit==1){preBuy.status=4;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.purEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{preBuy.status=4;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.purEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}}}else{preBuy.status=5;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}}}}if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}if(preBuy.status==3&&a.purStartTime==""&&a.purEndTime==""){$("#preTime").hide()
}else{$("#preTime").show()
}}else{if(preBuy.type=="2"){if(a.curTime<a.scheduleStartTime){preBuy.status=1;
$("#preTime").find("dt").html("预约开始");
$(".duration-time").val((a.scheduleStartTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#addCart2").removeClass().addClass("btn-order-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{if(a.curTime>=a.scheduleStartTime&&a.curTime<=a.scheduleEndTime){preBuy.status=2;
$("#preTime").find("dt").html("预约结束");
$(".duration-time").val((a.scheduleEndTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",e);
$("#addCart").attr("target","_blank");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",e);
$("#addCart2").attr("target","_blank");
YuShou.countdown(e)
}else{if((a.curTime>a.scheduleEndTime&&a.curTime<a.priorPurchaseStartTime)||(a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime=="")){preBuy.status=3;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((a.priorPurchaseStartTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}else{YuShou.countdown(e)
}}else{if(a.curTime>=a.priorPurchaseStartTime&&a.curTime<=a.priorPurchaseEndTime){if(a.preLimit<=0){preBuy.status=5;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((a.priorPurchaseEndTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{if(a.preLimit==1){preBuy.status=4;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.priorPurchaseEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{preBuy.status=4;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.priorPurchaseEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yytqgm");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yytqgm");
$("#yushouCount").hide();
YuShou.countdown(e)
}}}else{if((a.curTime>a.scheduleEndTime&&a.curTime<a.purStartTime)||(a.purStartTime==""&&a.purEndTime=="")){preBuy.status=5;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((a.purStartTime-a.curTime)/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
if(a.purStartTime==""&&a.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}else{YuShou.countdown(e)
}}else{if(a.curTime>=a.purStartTime&&a.curTime<=a.purEndTime){if(a.preLimit<=0){preBuy.status=7;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{if(a.preLimit==1){preBuy.status=6;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.purEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}else{preBuy.status=6;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((a.purEndTime-a.curTime)/1000);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljqg");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(0);").removeAttr("target");
$("#addCart2").attr("name","item_"+sn.ninePartNumber+"_gmq_yyljqg");
$("#yushouCount").hide();
YuShou.countdown(e)
}}}else{preBuy.status=7;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#yushouCount").hide();
YuShou.countdown(e)
}}}}}}if(preBuy.type==2&&preBuy.status<=4){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}else{if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}}if((preBuy.status==3&&a.priorPurchaseStartTime==""&&a.priorPurchaseEndTime=="")||(preBuy.status==5&&a.purStartTime==""&&a.purEndTime=="")){$("#preTime").hide()
}else{$("#preTime").show()
}}else{preBuy.status=1;
$("#preTime").find("dt").html("抢购结束");
var b=(a.purEndTime-a.curTime>0)?(a.purEndTime-a.curTime):0;
$(".duration-time").val(b/1000);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-mobile-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">该商品为移动专享，如需购买请扫上方二维码</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-mobile-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#preTime").show();
YuShou.countdown(e)
}}}initProductSale()
}else{sn.isPreBuy=0;
$("#preTime").hide();
$("#addCart").removeClass().addClass("btn-addcart");
$("#addCart").attr("href","javascript:Cart.addCart();").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
initProductSale()
}iFourth.mainHeight()
};
var countTotal=0;
YuShou.countdown=function(b){try{iFourth.countdown(function(c){$("#c_yunfei").show();
if(c==0){$("#addCart2").removeClass().addClass("btn-addcart-mini");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(preBuy.type=="1"){if(preBuy.status==1){getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
preBuy.status=2;
remain=preBuy.scheduleEndTime-preBuy.scheduleStartTime;
$("#preTime").find("dt").html("预约结束");
$(".duration-time").val((preBuy.scheduleEndTime-preBuy.curTime));
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",b);
$("#addCart").attr("target","_blank");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",b);
$("#addCart2").attr("target","_blank")
}},sn.waitPriceTime)
}else{if(preBuy.status==2){preBuy.status=3;
getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
remain=preBuy.purStartTime-preBuy.scheduleEndTime;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((preBuy.purStartTime-preBuy.curTime));
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if(preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}},sn.waitPriceTime)
}else{if(preBuy.status==3){getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
if(preBuy.preLimit<=0){preBuy.status=5;
remain=0;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(preBuy.preLimit==1){preBuy.status=4;
remain=preBuy.purEndTime-preBuy.purStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.purEndTime-preBuy.curTime));
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.promotionPrice==""||sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet=="-1")){$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}else{preBuy.status=4;
remain=preBuy.purEndTime-preBuy.purStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.purEndTime-preBuy.curTime));
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if(sn.promotionPrice!=""&&(sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>')
}else{if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}$("#nowProduct").show();
$("#c_kucun").show();
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide()
}}}},sn.waitPriceTime)
}else{if(preBuy.status==4){preBuy.status=5;
remain=0;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}}}if(preBuy.status==3&&preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#preTime").hide()
}else{$("#preTime").show()
}}else{if(preBuy.type=="2"){if(preBuy.status==1){getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
preBuy.status=2;
remain=preBuy.scheduleEndTime-preBuy.scheduleStartTime;
$("#preTime").find("dt").html("预约结束");
$(".duration-time").val((preBuy.scheduleEndTime-preBuy.curTime));
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-order");
$("#addCart").attr("href",b);
$("#addCart").attr("target","_blank");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$("#yushouCount").html("<span>已有</span><strong>"+preBuy.appiontCount+"</strong><span>人成功预约</span>");
$("#yushouCount").show();
$("#addCart2").removeClass().addClass("btn-order-mini");
$("#addCart2").attr("href",b);
$("#addCart2").attr("target","_blank")
}},sn.waitPriceTime)
}else{if(preBuy.status==2){preBuy.status=3;
getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
remain=preBuy.priorPurchaseStartTime-preBuy.scheduleEndTime;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val((preBuy.priorPurchaseStartTime-preBuy.curTime));
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if(preBuy.purStartTime==""&&preBuy.purEndTime==""){$("#qrCode").after('<span class="memo">抢购时间暂时未定，敬请关注</a></span>')
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}},sn.waitPriceTime)
}else{if(preBuy.status==3){getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
if(preBuy.preLimit<=0){preBuy.status=5;
remain=preBuy.priorPurchaseEndTime-preBuy.priorPurchaseStartTime;
$("#preTime").find("dt").html("抢购开始");
$(".duration-time").val(preBuy.priorPurchaseEndTime-preBuy.curTime);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush-wait");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-wait");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(preBuy.preLimit==1){preBuy.status=4;
remain=preBuy.priorPurchaseEndTime-preBuy.priorPurchaseStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.priorPurchaseEndTime-preBuy.curTime));
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.promotionPrice==""||sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet=="-1")){$("#addCart").removeClass().addClass("btn-privilege-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}else{preBuy.status=4;
remain=preBuy.priorPurchaseEndTime-preBuy.priorPurchaseStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.priorPurchaseEndTime-preBuy.curTime));
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if(sn.promotionPrice!=""&&(sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#addCart").removeClass().addClass("btn-privilege");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>')
}else{if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
$("#addCart").removeClass().addClass("btn-privilege-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}$("#nowProduct").show();
$("#c_kucun").show();
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>');
$("#yushouCount").hide()
}}}},sn.waitPriceTime)
}else{if(preBuy.status==4||preBuy.status==5){getItemSaleStatus(sn.partNumber,"showSaleStatus");
var e=setInterval(function(){if(sn.isLoadPricePrice){window.clearInterval(e);
if(preBuy.preLimit<=0){preBuy.status=7;
remain=0;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}else{if(preBuy.preLimit==1){preBuy.status=6;
remain=preBuy.purEndTime-preBuy.purStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.purEndTime-preBuy.curTime));
$("#nowProduct").show();
$("#c_kucun").show();
$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
if(sn.promotionPrice==""||sn.freight=="-1"||sn.invStatus=="2"||sn.invStatus=="3"||sn.invStatus=="0"||((sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet=="-1")){$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}else{preBuy.status=6;
remain=preBuy.purEndTime-preBuy.purStartTime;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val((preBuy.purEndTime-preBuy.curTime));
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}if(sn.promotionPrice!=""&&(sn.invStatus=="1"&&sn.vendorCode!=""&&sn.freight!="-1"&&sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)!="003")||((sn.invStatus=="4"||sn.invStatus=="1")&&(sn.vendorCode==""||(sn.vendorCode.length==10&&sn.vendorCode.substring(0,3)=="003"))&&sn.shipOffSet!="-1")){$("#addCart").removeClass().addClass("btn-rush");
$("#addCart").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini");
$("#addCart2").attr("href","javascript:YuShou.toPreBuy(1);").removeAttr("target");
$("#qrCode").after('<span class="memo">请在下单后15分钟之内完成支付</span>')
}else{if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}$("#nowProduct").show();
$("#c_kucun").show();
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide()
}}}},sn.waitPriceTime)
}else{if(preBuy.status==6){preBuy.status=7;
remain=0;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target")
}}}}}if((preBuy.status==3&&preBuy.priorPurchaseStartTime==""&&preBuy.priorPurchaseEndTime=="")||(preBuy.status==5&&preBuy.purStartTime==""&&preBuy.purEndTime=="")){$("#preTime").hide()
}else{$("#preTime").show()
}}else{if(preBuy.status==1){preBuy.status=2;
remain=0;
$("#preTime").find("dt").html("抢购结束");
$(".duration-time").val(0);
$("#nowProduct").hide();
$("#c_kucun").hide();
$("#addCart").removeClass().addClass("btn-mobile-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">该商品为移动专享，如需购买请扫上方二维码</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
$("#yushouCount").hide();
$("#addCart2").removeClass().addClass("btn-mobile-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#preTime").show()
}}}}if(preBuy.type!=3){if(preBuy.type==2&&preBuy.status<=4){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}else{if(preBuy.personBuysLimit!="0"&&preBuy.personBuysLimit!=""&&preBuy.personBuysLimit!=undefined){$("#productLimit").html("每人限购<em>"+preBuy.personBuysLimit+"</em>件");
$("#productLimit").show();
$("#buyNum").attr("max",preBuy.personBuysLimit);
$("#buycount").show();
iFourth.buyNum()
}}}countTotal++;
iFourth.mainHeight()
})
}catch(a){}};
YuShou.toPreBuy=function(a){$("body").AjaxLogin({success:function(){YuShou.isCanBuy(a,0)
},error:function(){}})
};
YuShou.isCanBuy=function(f,b){var c=preBuy.status==4&&preBuy.type==2?"P03":"P01";
var a=sn.vendorCode==""?"0000000000":sn.vendorCode;
var e=sn.yushouDomain+"/jsonp/appoint/checkQualificationStatus-"+preBuy.actionID+"-"+sn.partNumber+"-"+a+"-"+c+"-1-inits.do";
$.ajax({url:e,dataType:"jsonp",cache:false,jsonpCallback:"inits",success:function(g){if(g==0){Cart.buyNowTime()
}else{if(g==-1||g==3){Util.alertErrorBox("此商品抢购已结束，您可以尝试选购其他商品");
$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
remain=0;
$("#preTime .d").text("00");
$("#preTime .h").text("00");
$("#preTime .m").text("00");
$("#preTime .s").text("00")
}else{if(g==1){$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">非常抱歉！您之前未预约该商品或预约资格已用完，暂无抢购资格</span>');
if(c=="P03"){if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">非常抱歉，您暂无特权购资格或资格已用完，无法购买</span>');
$("#addCart").removeClass().addClass("btn-privilege-disable");
$("#addCart2").removeClass().addClass("btn-privilege-mini-disable")
}if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}if(c=="P03"){$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约特权购资格的用户</p>')
}else{$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>')
}if(f==0){if(c=="P03"){Util.alertErrorBox("非常抱歉，您暂无特权购资格或资格已用完，无法购买")
}else{Util.alertErrorBox("非常抱歉！您之前未预约该商品或预约资格已用完，暂无抢购资格")
}}}else{if(g==4){$("#addCart").removeClass().addClass("btn-rush-no");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-no");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="'+preBuy.recomUrl+'" name="item_'+sn.ninePartNumber+'_gmq_ckqtsp">'+preBuy.recomText+"</a></span>");
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>');
remain=0;
$("#preTime .d").text("00");
$("#preTime .h").text("00");
$("#preTime .m").text("00");
$("#preTime .s").text("00")
}else{if(g==5){$("#addCart").removeClass().addClass("btn-privilege-end");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-privilege-mini-end");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo"><a class="b" target="_blank" href="http://yushou.suning.com" name="item_'+sn.ninePartNumber+'_gmq_yycksp">查看更多预售商品</a></span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>')
}else{if(g==6){$("#addCart").removeClass().addClass("btn-rush-disable");
$("#addCart").attr("href","javascript:void(0);").removeAttr("target");
$("#addCart2").removeClass().addClass("btn-rush-mini-disable");
$("#addCart2").attr("href","javascript:void(0);").removeAttr("target");
$("#tabAddCart").show();
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">非常抱歉，您暂无特权购资格或资格已用完，无法购买</span>')
}else{if(g==7){Util.alertErrorBox("抱歉，系统繁忙，请稍后再试哦")
}else{Util.alertErrorBox("此商品抢购未开始，暂不支持购买");
if($("#qrCode").siblings(".memo").length>0){$("#qrCode").siblings(".memo").remove()
}$("#qrCode").after('<span class="memo">此商品抢购未开始，暂不支持购买</span>');
if($(".mainbtns").siblings("#jhsm").length>0){$(".mainbtns").siblings("#jhsm").remove()
}$(".mainbtns").after('<p id="jhsm" class="proinfo-memo">注：抢购仅限获取预约资格用户</p>')
}}}}}}}iFourth.mainHeight()
},error:function(){}})
};
FourPage.imgUrl=function(a){if(a==null||a==""){return""
}if(sn.imgHost==null||sn.imgHost==""){sn.imgHost="http://image?.suning.cn"
}if(sn.imgHostNumber==null||sn.imgHostNumber==""){sn.imgHostNumber=5
}if(sn.imgHostTag==null||sn.imgHostTag==""){sn.imgHostTag="?"
}var b=Math.abs(FourPage.hashCode(a))%sn.imgHostNumber;
b=b+1;
if(b<1||b>sn.imgHostNumber){b=1
}var c=sn.imgHost.replace(sn.imgHostTag,b);
var e=c+a;
return e
};
FourPage.hashCode=function(c){var b=0;
if(!(c==null||c.value=="")){for(var a=0;
a<c.length;
a++){b=b*31+c.charCodeAt(a);
b=FourPage.numToInt(b)
}}return b
};
FourPage.numToInt=function(a){var b=2147483647;
var c=-2147483648;
if(a>b||a<c){return a&=4294967295
}return a
};
FourPage.commGroup=function(){$(".breadcrumb .dropdown").click(function(){if($(this).find(".dropdown-option").length<=0){var a=$(this).find("span").attr("gid");
var b=$(this);
$.ajax({url:sn.itemDomain+"/pds-web/ajax/commGroup_"+a+".html",type:"get",async:false,dataType:"json",success:function(c){try{if(c!=""&&c.sameGroup!=""&&c.sameGroup.length>0){var g=c.sameGroup;
var f='<ul class="dropdown-option">';
$.each(g,function(e,j){f+='<li><a name="item_'+sn.ninePartNumber+'_mulu0"';
if(typeof j.categoryUrl!="undefined"&&j.categoryUrl!=""){f+='href="'+j.categoryUrl+'"'
}else{if(sn.catalogId=="14655"){f+='href="'+sn.listHost+"0-"+j.categoryId+"-0-1-0-"+sn.cityId+'-0-0-0-1.html"'
}else{if(sn.catalogId=="14656"){f+='href="'+sn.listHost+"0-"+j.categoryId+"-0-1-0-"+sn.cityId+'-0-0-0-2.html"'
}else{f+='href="'+sn.listHost+"0-"+j.categoryId+'-0.html"'
}}}f+='title="'+j.categoryName+'">';
if(j.categoryName.length>18){f+=j.categoryName.substring(0,18)+"...</a></li>"
}else{f+=j.categoryName+"</a></li>"
}});
f+="</ul>";
b.find("p").after(f);
iFourth.breadcrumbSize(b.find(".dropdown-option"))
}}catch(h){}},error:function(){}})
}else{iFourth.breadcrumbSize($(this).find(".dropdown-option"))
}})
};
FourPage.showRelClass=function(response){try{response=eval("("+response+")");
if(response!=""&&response.sameGroup!=""&&(response.sameGroup).length>0){var data=response.sameGroup;
var commGroup='<div class="area-head"><h3>相关分类</h3></div><ul class="procon-relate">';
commGroup+='<li><a name="item_'+sn.ninePartNumber+'_xgcata_cata01" target="_blank" title="'+sn.categoryName3+'" href="'+sn.listHost+"0-"+sn.categoryId+'-0.html">'+(sn.categoryName3.length<=10?sn.categoryName3:sn.categoryName3.substring(0,10))+"</a></li>";
var maidian="";
$.each(data,function(i,group){if(i<19){maidian=i<8?(i+2):(i+1);
commGroup+='<li><a name="item_'+sn.ninePartNumber+"_xgcata_cata"+maidian+'" target="_blank" title="'+group.categoryName+'"';
if(group.categoryUrl!=""){commGroup+='href="'+group.categoryUrl+'">'
}else{commGroup+='href="'+sn.listHost+"0-"+group.categoryId+'-0.html">'
}commGroup+=(group.categoryName.length<=10?group.categoryName:group.categoryName.substring(0,10))+"</a></li>"
}});
commGroup+="</ul>";
$("#relClass").html(commGroup);
$("#relClass").show()
}else{$("#relClass").hide()
}}catch(e){}};
FourPage.scodeCuxiaoTab=function(b){if(b=="7"){var a="";
a+="此商品仅限S码购买 ";
a+=' <a name="item_'+sn.ninePartNumber+'_jifen_xq" href="http://sma.suning.com/sma/self/toBind.htm" class="b ml10" target="_blank">查看详情</a>';
$("#scodeBox").html(a);
$("#scodeBox").show();
$("#scodeTitle").css("display","block");
$("#allcuxiao").show()
}else{$("#scodeBox").hide();
$("#scodeTitle").css("display","none")
}};
FourPage.scodeBuyStyle=function(){$("#buyNowAddCart").removeClass().addClass("btn-scode-buy2");
$("#buyNowAddCart").find("span").html("S码购买");
if(!sn.scode){sn.scode=true
}};
FourPage.cShopListStatus=function(){if(sn.cShopListFlag=="1"){$("#c_shop_list").hide();
sn.cShopListFlag="0"
}else{$("#c_shop_list").show()
}};
FourPage.getShopNameHtml=function(b){var a=b.shopName;
if(b.shopStatus!=undefined&&b.shopStatus=="0"&&b.vendorCode!=""&&b.vendorCode!="0000000000"&&b.vendorCode!="undefined"){if(b.secUrl!=undefined&&b.secUrl!=""){sn.secUrl=b.secUrl
}a='<a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+(b.secUrl!=undefined&&b.secUrl!=""?b.secUrl:(sn.shopPath+sn.shopMainPh+"/"+b.vendorCode.substring(2,10)+"/index.html"))+'">'+b.shopName+"</a>"
}else{if(b.vendorCode==""||b.vendorCode=="0000000000"||b.vendorCode=="undefined"){if(sn.brandShopCode!=null&&sn.brandShopCode!=""){if(sn.brandShopStatus=="0"||sn.brandShopStatus==null||sn.brandShopStatus==""){a='<a name="item_'+sn.ninePartNumber+'_shop_dianpu02" target="_blank" href="'+sn.shopUrl+'" title="苏宁自营">苏宁自营<i class="ie"></i></a>'
}else{a="苏宁自营"
}}else{a=b.shopName
}}else{a=b.shopName
}}return a
};var ECity=ECity||{};ECity.setting={};ECity.setting.data={cookie:{cookieKey:"SN_CITY",cookieVale:"",hostName:"",cityOuterSepatator:"|",cityInnerSeparator:"_",cookiePath:"",cookieTime:"",cookieDomain:"",oldCookieCityKey:"cityId",oldCookieDistrictKey:"districtId",oldCookieCityValue:"",oldCookieDistrictValue:"",hostDomain:"",protocol:"",port:"",root:"",protocolSepatator:"//",portSepatator:":",root:"/ip-web"},url:{cookieUrl:"",cityArrayUrl:"",districtArrayUrl:"",districtUrl:"",lesUrl:""},flag:{user:"1",sys:"2",sys_user:"3"},type:{pc:"pc",pcd:"pcd"},city:{cityArray:[],cityType:"",cityInfo:{}},init:function(f){var e=ECity.setting.data;var c=e.cookie;var b=e.url;var g=e.city;var d=e.type;c.hostName=document.location.hostname;c.hostDomain=document.location.hostname;c.protocol=document.location.protocol;c.port=document.location.port;var a=new Date();a.setFullYear(a.getFullYear()+1);c.cookieTime="; expires = "+a.toUTCString();c.cookiePath="; path = /";if(c.hostName.indexOf(".suning.com")!=-1){c.cookieDomain="; domain =.suning.com";c.hostName=c.protocol+"//ipservice.suning.com"}else{if(c.hostName.indexOf(".cnsuning.com")!=-1){c.cookieDomain="; domain =.cnsuning.com";if(c.hostName.indexOf("pre")!=-1){c.hostName=c.protocol+"//ipservicepre.cnsuning.com"}else{c.hostName=c.protocol+"//ipservicepre.cnsuning.com"}}else{c.cookieDomain+=c.hostName;c.hostName="http://ipservicepre.cnsuning.com/ip-web"}}b.cookieUrl=c.hostName+"/ipQuery.do?";b.provinceArrayUrl=c.hostName+"/provinceList-";b.cityArrayUrl=c.hostName+"/cityList-";b.districtArrayUrl=c.hostName+"/districtList-";b.districtUrl=c.hostName+"/districtDetail-";b.lesUrl=c.hostName+"/cityAndDistrict-";b.provinceAndCityUrl=c.hostName+"/provinceAndCity-";b.cityMapById=c.hostName+"/cityMapById-";g.cityType=f?d.pc:d.pcd}};ECity.setting.util={equalsByPCD:function(a,b){if(!a||!b){return false}if(a.provinceMDMId==b.provinceMDMId&&a.cityMDMId==b.cityMDMId&&a.districtCommerceId==b.districtCommerceId){return true}return false},equalsByPC:function(a,b){if(!a||!b){return false}if(a.provinceMDMId==b.provinceMDMId&&a.cityMDMId==b.cityMDMId){return true}return false},isEmpty:function(b){if(!b){return true}for(var a in b){if(typeof b[a]!="undefined"){return false}}return true},equalsByCD:function(d,c,a){if(!d){return null}if(!c){return null}if(!a||a.length==0){return null}for(var b in a){if(d===a[b].cityCommerceId&&c===a[b].districtCommerceId){return a[b]}}return null},equalsByC:function(c,a){if(!c){return null}if(!a||a.length==0){return null}for(var b in a){if(c===a[b].cityCommerceId){return a[b]}}return null},convertToOut:function(b){if(!b||this.isEmpty(b)){return null}var a={};a.province={};a.city={};a.district={};a.province.id=b.provinceMDMId;a.province.cid=b.provinceCommerceId;a.province.name=b.provinceName;a.city.id=b.cityMDMId;a.city.cid=b.cityCommerceId;a.city.lesId=b.cityLESId;a.city.name=b.cityName;a.district.id=b.districtMDMId;a.district.cid=b.districtCommerceId;a.district.lesId=b.districtLESId;a.district.name=b.districtName;return a},convertToIn:function(a){if(!a||this.isEmpty(a)){return null}var b={};if(a.province&&!this.isEmpty(a.province)){b.provinceMDMId=a.province.id;b.provinceCommerceId=a.province.cid;b.provinceName=a.province.name}if(a.city&&!this.isEmpty(a.city)){b.cityMDMId=a.city.id;b.cityCommerceId=a.city.cid;b.cityLESId=a.city.lesId;b.cityName=a.city.name}if(a.district&&!this.isEmpty(a.district)){b.districtMDMId=a.district.id;b.districtLESId=a.district.lesId;b.districtCommerceId=a.district.cid;b.districtName=a.district.name}return b}};ECity.IPCookie=(function(){var H=ECity.setting.data;var i=ECity.setting.util;var u=H.cookie;var w=H.flag;var K=H.type;var m=H.city;var c=H.url;var A=[];function F(L){A=A.concat(L)}var B=[];function l(L){B=B.concat(L)}var y=[];function x(L){y=y.concat(L)}var s=[];function E(L){s=s.concat(L)}var g=function(N){C();if(u.cookieValue){var M=u.cookieValue;var L=M.split(u.cityOuterSepatator);r(L,N)}else{G(N)}};var G=function(M){z();var L={};if(u.oldCookieCityValue){if(u.oldCookieDistrictValue){L=i.equalsByCD(u.oldCookieCityValue,u.oldCookieDistrictValue,m.cityArray);if(L){m.cityInfo=L;if(!i.equalsByPCD(L,m.cityArray[0])){b();p()}if(typeof M=="function"){M(i.convertToOut(m.cityInfo))}}else{e(M)}}else{L=i.equalsByC(u.oldCookieCityValue,m.cityArray);if(L){m.cityInfo=L;a();if(!i.equalsByPCD(L,m.cityArray[0])){b();p()}if(typeof M=="function"){M(i.convertToOut(m.cityInfo))}}else{e(M)}}}else{if(m.cityArray&&m.cityArray.length!=0){m.cityInfo=m.cityArray[0];a();if(typeof M=="function"){M(i.convertToOut(m.cityInfo))}}else{e(M)}}};var t=function(L,M){if(L&&!i.isEmpty(L)){m.cityInfo=i.convertToIn(L)}b();a();p();if(typeof M=="function"){M(i.convertToOut(m.cityInfo))}};var C=function(){var L=document.cookie;if(!L){return}var O=L.match(RegExp("(^| )"+u.oldCookieCityKey+"=([^;]*)(;|$)"));var N=L.match(RegExp("(^| )"+u.oldCookieDistrictKey+"=([^;]*)(;|$)"));var M=L.match(RegExp("(^| )"+u.cookieKey+"=([^;]*)(;|$)"));if(O&&O[2]&&O[2].length!=0){u.oldCookieCityValue=decodeURIComponent(O[2])
}if(N&&N[2]&&N[2].length!=0){u.oldCookieDistrictValue=decodeURIComponent(N[2])}if(M&&M[2]&&M[2].length!=0){u.cookieValue=decodeURIComponent(M[2])}};var e=function(L){F(L);if(A.length==1){d(L)}};var d=function(M){var L=c.cookieUrl;if(u.oldCookieCityValue){L+=u.oldCookieCityKey+"="+u.oldCookieCityValue;if(u.oldCookieDistrictValue){L+="&"+u.oldCookieDistrictKey+"="+u.oldCookieDistrictValue}}$.ajax({type:"GET",url:L,cache:true,async:false,dataType:"jsonp",jsonpCallback:"cookieCallback",success:function(N){var P=[];if(u.oldCookieCityValue){if(u.oldCookieDistrictValue){N.flag=w.user;N.count=1}else{N.flag=w.sys_user;N.count=0}}else{N.flag=w.sys;N.count=0}m.cityInfo=N;if(m.cityArray&&m.cityArray.length!=0){b()}else{P.push(N);m.cityArray=P}p();if(u.oldCookieCityValue&&u.oldCookieDistrictValue&&u.oldCookieDistrictValue!=N.districtCommerceId){a()}if(!u.oldCookieCityValue||!u.oldCookieDistrictValue){a()}if(typeof M=="function"){for(var O in A){A[O](i.convertToOut(m.cityInfo))}A=[]}}})};function n(){}var r=function(T,S){var M=[];var N=T[0].split(u.cityInnerSeparator);var P={};var O=N[0];var L=N[1];var Q=N[4];var R=c.cityMapById+O+"-"+L+"-"+Q+"-cityMapCallback.htm";$.ajax({type:"GET",url:R,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"cityMapCallback",success:function(X){if(X.returnCode=="1"){P.provinceMDMId=X.pMdmId;P.provinceLESId=X.pMdmId}else{P.provinceMDMId=N[0];P.provinceLESId=N[0]}P.provinceCommerceId="";P.provinceName=X.pName;if(X.returnCode=="2"){P.cityLESId=X.cLesId;P.cityMDMId=X.cMdmId;P.cityCommerceId=X.cCommerceId}else{P.cityLESId=N[1];P.cityMDMId=N[2];P.cityCommerceId=N[3]}P.cityName=X.cName;if(X.returnCode=="3"||X.returnCode=="2"){P.districtLESId=X.dLesId;P.districtCommerceId=X.dCommerceId}else{P.districtLESId=N[4];P.districtCommerceId=N[5]}P.districtMDMId="";P.districtName=X.dName;P.flag=N[6];P.count=N[7];var U=false;var W=m.cityArray.length;for(var V=0;V<W;V++){if(i.equalsByPCD(m.cityArray[V],P)){U=true}}if(!U){m.cityArray.push(P)}T.shift();if(X.returnCode!="0"){D();p()}if(m.cityArray.length==1&&X.returnCode!="0"){J();a()}if(T.length==0){G(S)}else{r(T,S)}}})};var D=function(){var L=new Date();L.setTime(L.getTime()-10000);cookieTemp=u.cookieKey+"="+encodeURIComponent("");cookieTemp+="; expires = "+L.toGMTString();cookieTemp+=u.cookiePath;cookieTemp+=u.cookieDomain;document.cookie=cookieTemp};var J=function(){var L=new Date();L.setTime(L.getTime()-10000);cookieCity=u.oldCookieCityKey+"="+encodeURIComponent("");cookieCity+="; expires = "+L.toGMTString();cookieCity+=u.cookiePath;cookieCity+=u.cookieDomain;document.cookie=cookieCity;u.oldCookieCityValue="";cookieDistrict=u.oldCookieDistrictKey+"="+encodeURIComponent("");cookieDistrict+="; expires = "+L.toGMTString();cookieDistrict+=u.cookiePath;cookieDistrict+=u.cookieDomain;document.cookie=cookieDistrict;u.oldCookieDistrictValue=""};var z=function(){var P=m.cityArray;if(!P||P.length==0){return}var N=P.length;for(var M=0;M<N;M++){var O=P[M];if(O.provinceMDMId==O.cityLESId||!O.cityLESId||O.cityLESId=="null"||typeof O.cityLESId=="undefined"||O.districtLESId=="null"||typeof O.districtLESId=="undefined"||typeof O.cityName=="undefined"||typeof O.districtName=="undefined"){if(u.cookieValue){var L=new Date();L.setTime(L.getTime()-10000);cookieTemp=u.cookieKey+"="+encodeURIComponent("");cookieTemp+="; expires = "+L.toGMTString();cookieTemp+=u.cookiePath;cookieTemp+=u.cookieDomain;document.cookie=cookieTemp;cookieCity=u.oldCookieCityKey+"="+encodeURIComponent("");cookieCity+="; expires = "+L.toGMTString();cookieCity+=u.cookiePath;cookieCity+=u.cookieDomain;document.cookie=cookieCity;u.oldCookieCityValue="";cookieDistrict=u.oldCookieDistrictKey+"="+encodeURIComponent("");cookieDistrict+="; expires = "+L.toGMTString();cookieDistrict+=u.cookiePath;cookieDistrict+=u.cookieDomain;document.cookie=cookieDistrict;u.oldCookieDistrictValue="";m.cityArray=null;break}}}};var a=function(){var M=m.cityArray;if(!M||M.length==0){return}u.oldCookieCityValue=M[0].cityCommerceId;u.oldCookieDistrictValue=M[0].districtCommerceId;var L="";var N="";L=u.oldCookieCityKey+"="+encodeURIComponent(u.oldCookieCityValue);L+=u.cookieTime;L+=u.cookiePath;L+=u.cookieDomain;document.cookie=L;N=u.oldCookieDistrictKey+"="+encodeURIComponent(u.oldCookieDistrictValue);N+=u.cookieTime;N+=u.cookiePath;N+=u.cookieDomain;document.cookie=N};var p=function(){var N=m.cityArray;var P="";var O="";if(!N||N.length==0){return}var M=N.length;for(var L=0;L!=M;L++){O+=N[L].provinceMDMId;O+=u.cityInnerSeparator;O+=N[L].cityLESId;O+=u.cityInnerSeparator;O+=N[L].cityMDMId;O+=u.cityInnerSeparator;O+=N[L].cityCommerceId;O+=u.cityInnerSeparator;O+=N[L].districtLESId;O+=u.cityInnerSeparator;O+=N[L].districtCommerceId;O+=u.cityInnerSeparator;O+=N[L].flag;O+=u.cityInnerSeparator;O+=N[L].count;if(L==M-1){break}O+=u.cityOuterSepatator}u.cookieValue=O;P=u.cookieKey+"="+encodeURIComponent(u.cookieValue);P+=u.cookieTime;P+=u.cookiePath;P+=u.cookieDomain;document.cookie=P};var b=function(){var R=m.cityArray;var O=m.cityType;
var Q=m.cityInfo;if(i.isEmpty(Q)||!R||i.isEmpty(R[0])){return}var N=[];var P=R[0];var M=R[1];var L=R[2];if(O==K.pc){if(P.flag==w.sys){Q.flag=w.sys_user;Q.count=0;N.push(Q);m.cityArray=N;return}if(P.flag==w.sys_user){if(i.equalsByPC(Q,P)){return}else{if(i.equalsByPC(Q,M)){N.push(M);if(!i.isEmpty(L)){N.push(L)}m.cityArray=N;return}else{if(i.equalsByPC(Q,L)){N.push(L);N.push(M);m.cityArray=N;return}else{Q.flag=w.sys_user;Q.count=0;N.push(Q);if(!i.isEmpty(M)){N.push(M);if(!i.isEmpty(L)){N.push(L)}}m.cityArray=N;return}}}}if(P.flag==w.user){if(i.equalsByPC(Q,P)){return}else{if(i.equalsByPC(Q,M)){N.push(M);N.push(P);if(!i.isEmpty(L)){N.push(L)}m.cityArray=N;return}else{if(i.equalsByPC(Q,L)){N.push(L);N.push(P);N.push(M);m.cityArray=N;return}else{Q.flag=w.sys_user;Q.count=0;N.push(Q);N.push(P);if(!i.isEmpty(M)){N.push(M)}m.cityArray=N;return}}}}}else{if(P.flag==w.sys){Q.flag=w.user;Q.count=1;N.push(Q);m.cityArray=N;return}if(P.flag==w.sys_user){if(i.equalsByPCD(Q,P)){P.count++;P.flag=w.user;return}else{if(i.equalsByPCD(Q,M)){M.count++;N.push(M);if(!i.isEmpty(L)){N.push(L)}m.cityArray=N;return}else{if(i.equalsByPCD(Q,L)){L.count++;N.push(L);N.push(M);m.cityArray=N;return}else{Q.flag=w.user;Q.count=1;N.push(Q);if(!i.isEmpty(M)){N.push(M);if(!i.isEmpty(L)){N.push(L)}}m.cityArray=N;return}}}}if(P.flag==w.user){if(i.equalsByPCD(Q,P)){P.count++;return}else{if(i.equalsByPCD(Q,M)){M.count++;N.push(M);N.push(P);if(!i.isEmpty(L)){N.push(L)}m.cityArray=N;return}else{if(i.equalsByPCD(Q,L)){L.count++;N.push(L);N.push(P);N.push(M);m.cityArray=N;return}else{Q.flag=w.user;Q.count=1;N.push(Q);N.push(P);if(!i.isEmpty(M)){N.push(M)}m.cityArray=N;return}}}}}};var j=function(L,M){x(M);if(y.length==1){f(L,M)}};var f=function(M,N){var L=c.cityArrayUrl+M+"_20150401-cityListCallback.htm";$.ajax({type:"GET",url:L,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"cityListCallback",success:function(T){var R=[];R=T.cities;var U=[];var S=R.length;for(var Q=0;Q!=S;Q++){var O={};O.name=R[Q].name;O.id=R[Q].mdmId;O.cid=R[Q].commerceId;O.lesId=R[Q].lesId;O.pinyin=R[Q].pinyin.charAt(0);O.defaultId=R[Q].defaultDistrictMdmId;U.push(O)}if(typeof N=="function"){for(var P in y){y[P](U)}y=[]}}})};var q=function(L,M){E(M);if(s.length==1){v(L,M)}};var v=function(M,N){var L=c.districtArrayUrl+M+"_20150401-districtListCallback.htm";$.ajax({type:"GET",url:L,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"districtListCallback",success:function(P){var S=[];S=P.districts;var U=[];var T=S.length;for(var R=0;R!=T;R++){var O={};O.name=S[R].name;O.id=S[R].mdmId;O.cid=S[R].commerceId;O.lesId=S[R].lesId;O.pinyin=S[R].pinyin.charAt(0);U.push(O)}if(typeof N=="function"){for(var Q in s){s[Q](U)}s=[]}}})};var h=function(L){l(L);if(B.length==1){I(L)}};var I=function(M){var L=c.provinceArrayUrl+"provinceListCallback.htm";$.ajax({type:"GET",url:L,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"provinceListCallback",success:function(Q){var R=[];R=Q.provinces;var T=[];var S=R.length;for(var P=0;P!=S;P++){var N={};N.name=R[P].name;N.id=R[P].mdmId;N.cid=R[P].commerceId;N.pinyin=R[P].pinyin.charAt(0);N.defaultId=R[P].defaultCityMdmId;T.push(N)}if(typeof M=="function"){for(var O in B){B[O](T)}B=[]}}})};var o=function(M,N){var L=c.districtUrl+M+"_20150401-districtCallback.htm";$.ajax({type:"GET",url:L,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"districtCallback",success:function(O){var P={};if(typeof N=="function"){P.id=O.mdmId;P.cid=O.commerceId;P.lesId=O.lesId;P.name=O.name;N(P)}}})};var k=function(N,M){var L=c.provinceAndCityUrl+N+"-provinceandcityCallBack.htm";$.ajax({type:"GET",url:L,cache:true,async:true,dataType:"jsonp",jsonp:false,jsonpCallback:"provinceandcityCallBack",success:function(Q){var P={};var O={};if(typeof M=="function"){O.pMdmId=Q.pMdmId;O.pName=Q.pName;O.cMdmId=Q.cMdmId;O.cCommerceId=Q.cCommerceId;O.cName=Q.cName;P.provinceAndCity=O;M(P)}}})};return{showCity:g,setCity:t,getRemoteDistrict:o,getRemoteDistrictArray:q,getRemoteCityArray:j,getRemoteProvinceArray:h,getProvinceAndCityByCityId:k}}());ECity.API={init:function(a){ECity.setting.data.init(a)},ipCookie:ECity.IPCookie,util:ECity.setting.util,getCity:function(a){this.ipCookie.showCity(a)},setCity:function(a,b){this.ipCookie.setCity(a,b)},getDataCity:function(){var b=ECity.setting.data.city.cityArray;var a={};if(b&&!this.util.isEmpty(b[0])){a=this.util.convertToOut(b[0])}return a},getLastUsedCities:function(){var c=ECity.setting.data.city.cityArray;var b=[];if(c){for(var a in c){b.push(this.util.convertToOut(c[a]))}}return b},getCityId:function(){var a=ECity.setting.data.city.cityArray;if(a&&!this.util.isEmpty(a[0])){return a[0].cityCommerceId}return""},getDistrictId:function(){var a=ECity.setting.data.city.cityArray;if(a&&!this.util.isEmpty(a[0])){return a[0].districtCommerceId}return""},getDistrict:function(a,b){this.ipCookie.getRemoteDistrict(a,b)},getDistrictList:function(b,a){this.ipCookie.getRemoteDistrictArray(b,a)},getCityList:function(a,b){this.ipCookie.getRemoteCityArray(a,b)
},getProvinceList:function(a){this.ipCookie.getRemoteProvinceArray(a)},getProvinceAndCityByCityId:function(b,a){this.ipCookie.getProvinceAndCityByCityId(b,a)}};(function(d){if(!jQuery){throw new Error("The plugin requires jQuery")}var i=function(){if(this instanceof i==false){return new i()}};i.prototype={init:function(k,j){this.eles=k;this.opts=j;this.flag=true;this.render()},render:function(){var j=this;this.setTemps(function(k){j.getCity(k)})},setTemps:function(n){var p=this;var j=this.eles;var o=this.opts;var m='<style id="ui-city-style">'+"ul,li,p,h3,h5,em,b,i,span,a{ margin: 0; padding: 0; }"+"ul,li { list-style: none; }"+'.clearfix:after{ content:"."; display:block; height:0; clear:both; visibility:hidden}'+".clearfix{ zoom:1}"+".ui-city a,"+".ui-city a:visited{ line-height:14px; color:#333; text-decoration: none; outline: none; cursor: pointer;}"+".ui-city a:hover { text-decoration:none; }"+".ui-city { display:inline-block;*dispplay:inline;*zoom:1; font-size: 12px; position: relative; z-index: 0}"+".ui-city .dn { display: none; }"+".ui-city .db { display: block; }"+".ui-city .dib { display: inline-block; }"+".ui-city .arr { display: inline-block; width: 0; height:0; border-color: #bbb transparent transparent; border-width: 5px; border-style: solid dashed dashed; font-size: 0; line-height: 0; overflow: hidden; }"+".ui-city a.ui-city-toggle:hover { color:#333;}"+".ui-city-toggle { display:inline-block; border: 1px solid #bbb; padding:6px 5px 6px 6px; color: #000;background: #fff; position: relative; z-index: 100}"+".ui-city-toggle .address-placement {font-style: normal; float: left;}"+".ui-city-toggle span { padding-right: 5px}"+".ui-city-toggle span:hover {color: #333;}"+".ui-city-toggle .arr { margin-right:5px;position: relative; top:5px; float: left;}"+".ui-city-group { display:none; position: absolute;background: #fff; left: 0; top:27px;border: 1px solid #ccc; margin-top:-1px; width: 420px; z-index: 99; box-shadow: 0 0 6px #ddd;padding-top:5px;}"+".ui-city-group .ui-city-close  { position: absolute;right: 0;top: 0;padding: 5px 10px;overflow: hidden;}"+".ui-city-group .ui-city-close i { font: 700 14px/1.5 simsun;margin-left:-4px; color: #aaa}"+".ui-city-group-header { padding-top: 10px;  }"+".ui-city-group-header p { padding-left:15px; margin-bottom: 10px; }"+".ui-city-group-header .address-title { }"+".ui-city-group-header .address-item {clear:both; }"+".ui-city-group-header .address-item a,"+".ui-city-group-header .address-item a:visited{ display: inline-block;zoom:1; padding-top: 4px; padding-left: 5px; padding-bottom: 4px; margin-right: 10px; border: 1px solid #bbb; }"+".ui-city-group-header .address-item a:hover {  background: #f90; color: #fff;border:1px solid #f90; }"+".ui-city-group-header .address-item a span { padding-right:5px}"+".ui-city-group-content { margin: 10px 10px 0 10px; background:#fff;}"+".ui-city-group-content .nav-tabs { padding-left: 6px  }"+".ui-city-group-content .nav-tabs li {float: left; position: relative; z-index:2;border: 1px solid #ccc; height: 26px;background:#fff;margin-right: 6px; margin-bottom:0; cursor: pointer; }"+".ui-city-group-content .nav-tabs li p { padding: 6px 10px 6px 10px;border:1px solid #fff; }"+".ui-city-group-content .nav-tabs li a,"+".ui-city-group-content .nav-tabs li a:visited{ color: #999;float: left}"+".ui-city-group-content .nav-tabs li .arr { position: relative; top: 3px;left: 5px;font-size: 0; line-height: 0;}"+".ui-city-group-content .nav-tabs li.current { border: 2px solid #ffb84e; border-bottom:none; z-index: 4;}"+".ui-city-group-content .nav-tabs li.current p { padding: 6px 10px 5px 10px; position: relative; z-index: 4; border:none; }"+".ui-city-group-content .nav-tabs li.current .arr { border-color:  transparent transparent #f90; border-style:  dashed dashed solid; top:-2px; }"+".ui-city-group-content .nav-tabs li.current a,"+".ui-city-group-content .nav-tabs li.current a:visited{ display:inline-block; color: #333; }"+".ui-city-group-content .nav-tabs li.active a,"+".ui-city-group-content .nav-tabs li.active a:visited{ display:inline-block; color: #333; }"+".ui-city-group-content .tab-content { border-top: 2px solid #ffb84e;top:-2px;  position: relative; z-index: 3}"+".ui-city-group-content .tab-content .tab-panel { display: none; padding-top: 3px; padding-bottom: 15px; background: #fff;padding-left: 8px }"+".ui-city-group-content .tab-content .tab-panel.active { display: block;}"+'.ui-city-group-content .tab-content li:after { content:"."; display:block; height:0; clear:both; visibility:hidden }'+".ui-city-group-content .tab-content li { *zoom:1;}"+".ui-city-group-content .tab-content li span {display:inline-block;width: 98px;}"+".ui-city-group-content .tab-content li a,"+".ui-city-group-content .tab-content li a:visited { display:inline-block; background:#fff;margin: 2px; padding: 5px; color:#000; }"+".ui-city-group-content .tab-content li a:hover { background: #f90; color: #fff;}"+".ui-city-group-content .tab-content li a.on,"+".ui-city-group-content .tab-content li a.on:visited { background: #f90;color: #fff; }"+".ui-city-group-content .tab-content .pr-panel li a{ }"+".ui-city.active { z-index: 10}"+".ui-city.active a.ui-city-toggle { border: 1px solid #ccc;background:#fff;border-bottom:none;box-shadow: 0 -1px 1px #ddd}"+".ui-city.active a.ui-city-toggle:hover { color: #333; background: #fff; text-decoration: none;}"+".ui-city.active a.ui-city-toggle .arr{ border-color:  transparent transparent #f90; border-style:  dashed dashed solid; top:0; }"+".ui-city.active .ui-city-group { display: block; }"+".ui-city .arr {transition:All .2s ease;-webkit-transition:All .2s ease;-moz-transition:All .2s ease;-o-transition:All .2s ease;-ms-transition:All .2s ease;}"+"</style>";
if(d("#ui-city-style").size()==0){d("body").prepend(d(m))}var l=d('<div class="ui-city"></div>');d("a",p.eles).live("click",function(){return false});var k;this.getInfo={};this.changeFlag=!0;this.queryInfo=function(q){if(o.cityId!=""&&o.cityId!=undefined){o.city=true;p.getAddressByDefault(function(){p.getInfoByCityid(o.cityId,function(r){q(r);setTimeout(function(){n(r)},10)})})}else{p.getAddressByDefault(function(r){q(r);setTimeout(function(){n(r)},10)})}};this.queryInfo(function(s){var q=s.province;var w=s.city;var u=s.district;var v=[q.id,q.cid,"",q.name].join(",");var t=[w.id,w.cid,u.lesId,w.name].join(",");var r=[u.id,u.cid,u.lesId,u.name].join(",");var x=q.id;p.getInfo=s;if(/^10$|^20$|^30$|^320$/.test(x)){if(!!o.city){k=d('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr dn"  role='+v+">"+q.name+'</span><span id="citybName" class="ct"  role='+t+">"+w.name+'</span></em><b class="arr"></b></a>')}else{k=d('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr dn"  role='+v+">"+s.province.name+'</span><span class="ct" id="citybName" role='+t+">"+w.name+'</span><span id="districtName" class="ds" role='+r+">"+u.name+'</span></em><b class="arr"></b></a>')}}else{if(!!o.city){k=d('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr"  role='+v+">"+q.name+'</span><span id="citybName" class="ct"  role='+t+">"+w.name+'</span></em><b class="arr"></b></a>')}else{k=d('<a name="item_none_dizhi_01" href="###" class="ui-city-toggle" hidefocus="true"><em class="address-placement"><span id="provinceName" class="pr"  role='+v+">"+q.name+'</span><span id="citybName" class="ct"  role='+t+">"+w.name+'</span><span id="districtName" class="ds" role='+r+">"+u.name+'</span></em><b class="arr"></b></a>')}}l.append(k);d(j).append(l);p.openPanel(o,s)})},openPanel:function(l,m){var k=this;var j=d(this.eles).find(".ui-city");j.one("click.open",function(o){var n=o||n;if(n){n.stopPropagation()}k.getAllDetail(l,m);d(this).addClass("active");return false})},closePanel:function(){var l=this;var j=d(this.eles).find(".ui-city");var k=d(this.eles).find(".ui-city-close");k.on("click.close",function(n){var m=n||m;if(m){m.stopPropagation()}j.removeClass("active");return false});d(document).not(this).on("click.close",function(){if(!j.hasClass("active")){return}j.removeClass("active");return false})},getAllDetail:function(r,E){var o=this;var v=this.eles;var j=E.province;var w=E.city;var u=E.district;var B=[j.id,j.cid,"",j.name,j.defaultId].join(",");var z=[w.id,w.cid,w.lesId,w.name,w.defaultId].join(",");var s=[u.id,u.cid,u.lesId,u.name].join(",");var t=j.id;var C=d(this.eles).find(".ui-city");var x=C.find(".ui-city-toggle");var D=d('<div class="ui-city-group"></div>');var m=d('<a name="item_none_dizhi_guanbi" class="ui-city-close" href="###"><i>&gt;</i><i>&lt;</i></a>');D.append(m);var A=d('<div class="ui-city-group-header"><p class="address-title">常用地址：</p></div>');var l=d('<p class="address-item"></p>');if(!!r.used&&!r.city){o.getUsedAddress(function(F){if(!F){return}d.each(F,function(I,H){if(I==0){return}if(H!=null){var G=H.province;var N=H.city;var L=H.district;var M=[G.id,G.cid,"",G.name,G.defaultId].join(",");var K=[N.id,N.cid,N.lesId,N.name,G.defaultId].join(",");var J=[L.id,L.cid,L.lesId,L.name].join(",");l.append(d('<a name="item_none_dizhi_chy0'+I+'" href="###"><span class="pr dn" role='+M+">"+G.name+'</span><span class="ct" role='+K+">"+N.name+'</span><span class="ds"  role='+J+">"+L.name+"</span></a>"))}});A.append(l);if(!!r.used&&!r.city&&F.length>1){D.prepend(A)}})}var n=d('<div class="ui-city-group-content"></div>');if(!r.city){var k=d('<ul class="nav-tabs clearfix"><li name="item_none_dizhi_02" id="provinceShow" class="active"  role='+B+'><p><a href="###">'+j.name+'</a><b class="arr"></b></p></li><li name="item_none_dizhi_03" id="citybShow" class="active"  role='+z+","+w.defaultId+'><p><a href="###">'+w.name+'</a><b class="arr"></b></p></li><li name="item_none_dizhi_04" id="districtShow" class="active current" role='+s+","+u.defaultId+'><p><a href="###">'+u.name+'</a><b class="arr"></b></p></li></ul>')}else{var k=d('<ul class="nav-tabs clearfix"><li name="item_none_dizhi_02" id="provinceShow" class="active" role='+B+'><p><a href="###">'+j.name+'</a><b class="arr"></b></p></li><li name="item_none_dizhi_03" id="citybShow" class="active current" role='+z+","+w.defaultId+'><p><a href="###">'+w.name+'</a><b class="arr"></b></p></li></ul>')}var y=d('<div class="tab-content"></div>');var q=d('<ul class="tab-panel pr-panel"></ul><ul class="tab-panel ct-panel"><li>正在加载中...</li></ul><ul class="tab-panel ds-panel active"><li></li></ul>');o.setInfo=o.getInfo;if(!!r.state){var p=d("<li></li>");q.eq(0).append(p);o.getProvinceList(function(F){d.each(F,function(H,G){var I=[G.id,G.cid,"",G.name,G.defaultId].join(",");
if(G.id==o.getInfo.province.id){q.children(":eq(0)").append('<span><a name="item_none_dizhi_sheng" href="###" class="on" role='+I+">"+G.name+"</a></span>")}else{q.children(":eq(0)").append('<span><a name="item_none_dizhi_sheng" href="###" role='+I+">"+G.name+"</a></span>")}});y.append(q);o.getProvinces(C,l,x,y,k,q,A,D,function(){return o.getCities(k,y,q,C,x,function(){return o.getDistricts(k,y,x,C,function(){return o.setDetailAddress(x,k,y,C)})})})})}else{}n.append(k);n.append(y);D.append(n);C.append(D);d(v).append(C);o.closePanel();k.find("li").each(function(F){d(this).on("click",function(G){if(d(this).hasClass("active")){d(this).addClass("current").siblings().removeClass("current");y.children(":eq("+F+")").addClass("active").siblings().removeClass("active")}return false})});if(!!r.used&&!r.city){o.setAddressByUsed(l,x,C,q,y,k,A,D)}},getProvinces:function(n,r,k,s,t,m,l,q,o){var p=this;var j=this.opts;n.on("click",function(u){if(u){u.stopPropagation()}d(this).addClass("active");if(typeof r!==undefined){r.html("")}p.getUsedAddress(function(v){if(!v){return}d.each(v,function(y,x){if(y==0){return}var w=x.province;var D=x.city;var B=x.district;var C=[w.id,w.cid,"",w.name,w.defaultId].join(",");var A=[D.id,D.cid,D.lesId,D.name,w.defaultId].join(",");var z=[B.id,B.cid,B.lesId,B.name].join(",");r.append(d('<a name="item_none_dizhi_chy0'+y+'" href="###"><span class="pr dn" role='+C+">"+w.name+'</span><span class="ct" role='+A+">"+D.name+'</span><span class="ds"  role='+z+">"+B.name+"</span></a>"))});l.append(r);if(!!j.used&&!j.city&&v.length>1){q.prepend(l)}});if(!!j.used&&!j.city){p.setAddressByUsed(r,k,n,m,s,t,l,q)}return false});o()},setAddressByUsed:function(q,k,n,m,r,s,l,p){var o=this;var j=this.opts;n.off("click.setDefaultAddress").on("click.setDefaultAddress",".address-item a",function(u){if(u){u.stopPropagation()}var E=d(this).clone();var t=E.find(".pr").attr("role");var C=E.find(".ct").attr("role");var y=E.find(".ds").attr("role");var G=t.split(",");var v=C.split(",");var H=y.split(",");if(!/^10\,|^20\,|^30,|^320\,/.test(t)){E.find("span:hidden").removeClass("dn")}o.setInfo.province={id:G[0],cid:G[1],name:G[3]};o.setInfo.city={id:v[0],cid:v[1],lesId:v[2],name:v[3]};o.setInfo.district={id:H[0],cid:H[1],lesId:H[2],name:H[3]};k.find("em").html(E.children());n.removeClass("active");o.setDefaultAddress(o.setInfo,function(J){if(d.type(j.changeCb)=="function"){return j.changeCb(J)}});var x=o.getInfo;var w=x.province;var z=x.city;var I=x.district;var A=[w.id,w.cid,"",w.name,w.defaultId].join(",");var D=[z.id,z.cid,z.lesId,z.name,z.defaultId].join(",");var B=[I.id,I.cid,I.lesId,I.name,I.defaultId].join(",");if(!j.city){s.html('<li class="active"  role='+A+'><p><a href="###">'+w.name+'</a><b class="arr"></b></p></li><li class="active"  role='+D+'><p><a href="###">'+z.name+'</a><b class="arr"></b></p></li><li class="active current" role='+B+'><p><a href="###">'+I.name+'</a><b class="arr"></b></p></li>')}else{s.html('<li class="active" role='+A+'><p><a href="###">'+w.name+'</a><b class="arr"></b></p></li><li class="active current" role='+D+'><p><a href="###">'+z.name+'</a><b class="arr"></b></p></li>')}m.removeClass("active").eq(2).addClass("active");if(!!j.state){var F=d("<li></li>");m.eq(0).html("").append(F);o.getProvinceList(function(J){d.each(J,function(L,K){var M=[K.id,K.cid,"",K.name,K.defaultId].join(",");if(K.id==w.id){m.children(":eq(0)").append('<span><a name="item_none_dizhi_sheng" href="###" class="on" role='+M+">"+K.name+"</a></span>")}else{m.children(":eq(0)").append('<span><a name="item_none_dizhi_sheng" href="###" role='+M+">"+K.name+"</a></span>")}});r.append(m);o.getProvinces(n,q,k,r,s,m,l,p,function(){return o.getCities(s,r,m,n,k,function(){return o.getDistricts(s,r,k,n,function(){return o.setDetailAddress(k,s,r,n)})})})})}else{}s.find("li").each(function(J){d(this).on("click",function(K){if(d(this).hasClass("active")){d(this).addClass("current").siblings().removeClass("current");r.children(":eq("+J+")").addClass("active").siblings().removeClass("active")}return false})});return false})},getCities:function(u,t,l,m,k,n){var p=this;var j=this.opts;var o=t.find(".ct-panel li");var r=t.find(".ds-panel li");t.find(".pr-panel a").on("click",function(y){if(y){y.stopPropagation()}u.children(":eq(1)").find("a").html("请选择市").end().end().children(":eq(2)").removeClass("active").find("a").html("请选择县区");d(this).addClass("on").parent().siblings().find("a").removeClass("on");var A=d(this).attr("role");var w=A.split(",");p.setInfo.province={id:w[0],cid:w[1],name:w[3],lesId:w[2]};var v=w[0];var x=w[4];var z=d(this).text();o.html("");p.getCityById(v,function(B){d.each(B,function(E,D){var F=[D.id,D.cid,D.lesId,D.name,D.defaultId].join(",");if(D.id==p.getInfo.city.id){o.append('<span><a name="item_none_dizhi_shi" href="###" class="on" role='+F+">"+D.name+"</a></span>")}else{o.append('<span><a name="item_none_dizhi_shi" href="###" role='+F+">"+D.name+"</a></span>")}});n();if(B.length!==1){u.children(":eq(1)").addClass("active current");
t.find(".pr-panel").removeClass("active").end().find(".ct-panel").addClass("active")}else{if(!!j.city){m.removeClass("active")}var C=[B[0].id+","+B[0].cid+","+B[0].name+","+B[0].defaultId].join(",");u.children(":eq(1)").attr("role",C).find("a").text(z);p.setInfo.city={id:B[0].id,cid:B[0].cid,name:B[0].name,lesId:B[0].lesId};p.getDefaultDistrict(B[0].defaultId,function(D){p.setInfo.district={id:D.id,cid:D.cid,name:D.name,lesId:D.lesId};if(!!j.city){p.setDefaultAddress(p.setInfo,function(F){var G=k.find("span:eq(0)");var E=k.find("span:eq(1)");G.attr("role",p.setInfo.province.id+","+p.setInfo.province.cid+","+p.setInfo.province.name).text(p.setInfo.province.name);E.attr("role",p.setInfo.city.id+","+p.setInfo.city.cid+","+p.setInfo.city.name+","+p.setInfo.province.lesId).text(p.setInfo.city.name);G.text()==E.text()&&d.trim(G)!="吉林"?k.find(".pr").addClass("dn"):k.find(".pr").removeClass("dn")})}if(d.type(j.cityCb)=="function"){j.cityCb(p.getInfo)}u.children(":eq(1)").removeClass("active")})}});if(/^10\,|^20\,|^30,|^320\,/.test(v+",")){p.changeFlag=!!0;if(!j.city){u.children().eq(1).removeClass("active current").end().eq(2).addClass("current");t.find(".pr-panel").removeClass("active").end().find(".ds-panel").addClass("active");p.getDistrictsById(x,function(B){r.html("");d.each(B,function(D,C){var E=[C.id,C.cid,C.lesId,C.name,C.defaultId].join(",");r.append('<span><a href="###" role='+E+">"+C.name+"</a></span>")});if(d.type(j.cityCb)=="function"){j.cityCb(p.getInfo)}p.setDetailAddress(k,u,t,m)});u.children(":eq(0)").addClass("active").removeClass("current")}}else{u.children(":eq(0)").removeClass("current")}u.children(":eq(0)").attr("role",A).find("a").text(z);return false});var s=p.getInfo.province.id;var q=p.getInfo.city.id;p.getCityById(s,function(v){o.html("");d.each(v,function(x,w){var y=[w.id,w.cid,w.lesId,w.name,w.defaultId].join(",");if(w.id==p.getInfo.city.id){o.append('<span><a name="item_none_dizhi_shi" href="###" class="on" role='+y+">"+w.name+"</a></span>")}else{o.append('<span><a name="item_none_dizhi_shi" href="###" role='+y+">"+w.name+"</a></span>")}});if(v.length==1){u.children().eq(1).removeClass("active current");u.children().eq(2).addClass("current");t.find(".pr-panel").removeClass("active").end().find(".ds-panel").addClass("active")}else{u.children(":eq(1)").addClass("active")}if(!!j.city){if(v.length==1){u.children(":eq(0)").addClass("active current").siblings().removeClass("active current");t.children(":eq(0)").addClass("active").siblings().removeClass("active")}else{t.children(":eq(1)").addClass("active").siblings().removeClass("active")}}n()});p.getDistrictsById(q,function(v){r.html("");d.each(v,function(x,w){var y=[w.id,w.cid,w.lesId,w.name,w.defaultId].join(",");if(w.id==p.getInfo.district.id){r.append('<span><a name="item_none_dizhi_qu" href="###" class="on" role='+y+">"+w.name+"</a></span>")}else{r.append('<span><a name="item_none_dizhi_qu" href="###" role='+y+">"+w.name+"</a></span>")}});p.setDetailAddress(k,u,t,m)})},getDistricts:function(q,m,k,l,j){var o=this;var n=this.opts;var p=m.find(".ds-panel li");m.find(".ct-panel a").on("click",function(s){o.changeFlag=!!0;if(s){s.stopPropagation()}d(this).addClass("on").parent().siblings().find("a").removeClass("on");var v=d(this).attr("role");o.setInfo.city={id:v.split(",")[0],cid:v.split(",")[1],lesId:v.split(",")[2],name:v.split(",")[3]};var r=v.split(",")[0];var t=d(this).text();if(!n.city){q.children(":eq(2)").find("a").html("请选择县区");p.html("");o.getDistrictsById(r,function(w){d.each(w,function(y,x){var z=[x.id,x.cid,x.lesId,x.name,x.defaultId].join(",");if(x.id==o.getInfo.district.id){p.append('<span><a name="item_none_dizhi_qu" href="###" class="on" role='+z+">"+x.name+"</a></span>")}else{p.append('<span><a name="item_none_dizhi_qu" href="###" role='+z+">"+x.name+"</a></span>")}});j();if(d.type(n.cityCb)=="function"){n.cityCb(o.getInfo)}});m.find(".ct-panel").removeClass("active").end().find(".ds-panel").addClass("active");q.children(":eq(1)").addClass("active").removeClass("current").attr("role",v).find("a").text(t).end().end().children(":eq(2)").addClass("active current")}else{var u=v.split(",")[4];o.getDefaultDistrict(u,function(y){l.removeClass("active");o.setInfo.district={id:y.id,cid:y.cid,name:y.name,lesId:y.lesId};q.children(":eq(1)").attr("role",v).find("a").text(t);var z=q.find("a:eq(0)").text();var w=q.find("a:eq(1)").text();var x=o.setInfo.district.name;z==w&&d.trim(z)!="吉林"?k.find(".pr").addClass("dn"):k.find(".pr").removeClass("dn");k.find(".pr").text(z).end().find(".ct").text(w);o.setDefaultAddress(o.setInfo,function(C){var H=k.find("span:eq(0)");var B=k.find("span:eq(1)");var E=o.setInfo;var A=E.province;var G=E.city;var F=[A.id,A.cid,A.name,""].join(",");var D=[G.id,G.cid,G.name,"",G.lesId].join(",");H.attr("role",F).text(A.name).removeClass("dn");B.attr("role",D).text(G.name)});if(d.type(n.cityCb)=="function"){n.cityCb(o.getInfo)}})}return false})},setDetailAddress:function(j,o,l,k){var n=this;var m=this.opts;l.find(".ds-panel a").on("click",function(q){if(q){q.stopPropagation()
}k.removeClass("active");d(this).addClass("on").parent().siblings().find("a").removeClass("on");var v=d(this).attr("role");var x=v.split(",");n.setInfo.district={id:x[0],cid:x[1],lesId:x[2],name:x[3]};var B=x[0];var D=d(this).text();var p=o.find("a:eq(0)").text();var z=o.find("a:eq(1)").text();var t=o.find("a:eq(2)").text();var s=n.getInfo;var r=s.province;var u=s.city;var C=s.district;var w=[r.id,r.cid,r.name].join(",");var A=[u.id,u.cid,u.name,"",u.lesId].join(",");var y=[C.id,C.cid,C.name,"",C.lesId].join(",");o.children(":eq(2)").attr("role",v).find("a").text(D);p==z&&d.trim(p)!="吉林"?j.find(".pr").addClass("dn"):j.find(".pr").removeClass("dn");j.find(".pr").attr("role",w).text(p).end().find(".ct").attr("role",A).text(z).end().find(".ds").attr("role",y).text(D);n.setDefaultAddress(n.setInfo,function(E){if(d.type(m.distCb)!="function"||d.type(m.changeCb)!="function"){return}if(n.changeFlag==false){m.changeCb(E);n.changeFlag=true}else{m.distCb(E)}});return false})},getAddressByDefault:function(j){ECity.API.getCity(function(k){return j(k)})},getUsedAddress:function(j){var k=ECity.API.getLastUsedCities();return j(k)},getProvinceList:function(j){ECity.API.getProvinceList(function(k){return j(k)})},getCityById:function(k,j){ECity.API.getCityList(k,function(l){return j(l)})},getDistrictsById:function(k,j){ECity.API.getDistrictList(k,function(l){return j(l)})},setDefaultAddress:function(k,j){ECity.API.setCity(k,function(l){return j(l)})},getDefaultDistrict:function(k,j){ECity.API.getDistrict(k,function(l){return j(l)})},getCity:function(k){var j=this;j.opts.getCity(k)},getInfoByCityid:function(k,j){ECity.API.getProvinceAndCityByCityId(k,function(m){var l=m.provinceAndCity;var n={};n.province={id:l.pMdmId,cid:l.pMdmId,name:l.pName};n.city={id:l.cMdmId,cid:l.cCommerceId,name:l.cName};n.district={id:"",cid:"",name:""};j(n)})}};window.mCity={};mCity.API={};mCity.API.getCity=function(j){ECity.API.getCity(function(k){return j(k)})};mCity.API.getCityId=function(){ECity.API.getCityId()};mCity.API.getDistrictId=function(){ECity.API.getDistrictId()};var c={city:false,state:true,used:true,cityCb:d.noop,distCb:d.noop,getCity:d.noop,changeCb:d.noop,cityId:""};var h=document.location.host;var e=document.location.hostname;var g=document.location.protocol;var b=document.location.port;var f="/ip-web";var a;if(/\.cnsuning\.com/ig.test(h)){if(h.indexOf("pre")!=-1){a=g+"//ipservicepre.cnsuning.com"}else{a=g+"//ipservicepre.cnsuning.com"}}else{if(/\.suning\.com/ig.test(h)){a=g+"//ipservice.suning.com"}else{a="http://ipservicepre.cnsuning.com/ip-web"}}d.fn.mCity=function(j){var k=this;try{ECity.API.init(j.city?j.city:c.city)}catch(l){}return k.each(function(){var m=d.extend({},c,j);i().init(this,m)})}})(jQuery);var firstCmmdty={};var recommendProductInfo="";var version="";var shoppingCartUrl="";var b2c_fc_authid="";var sa=sa||{};sa.bid="106";sa.maxLength=100;sa.openAPI=true;var cart=cart||{};cart.normal=(function($){var addToCart=function(jsonObj,callback){if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"0000000000";jsonObj.verifyCode="";jsonObj.uuid="";var targetUrl="http://shopping.suning.com/addCart.do?callback=?";var params={cartVO:cart.common.obj2string(jsonObj)};ajaxCrossDomain(targetUrl,$.param(params),function(data){cartSuccessCallBack(data,callback)},function(){cartFailCallBack(callback)},cart.common.passport_configs);if(cmmdtyVOList[0].activityType!="06"){cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode)}};var cartSuccessCallBack=function(respData,callerCallBack){var resp={};resp.analyticsType="Addcart";resp.result="0";var returnCode=respData.returnCode;if(null!=returnCode&&""!=returnCode&&"4000"==returnCode){resp.failCode=returnCode;resp.failMsg="您访问的太频繁， 网络拥堵，请您稍后再试！";cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}var result=respData.isSuccess;if(result=="Y"){var param={pid:firstCmmdty.cmmdtyCode,vid:firstCmmdty.shopCode,storeId:sn.storeId,catalogId:sn.catalogId,langId:"-7",cartFlag:"B"};shoppingCartUrl="http://shopping.suning.com/addToCart.do?"+$.param(param);resp.result="1";resp.url=shoppingCartUrl}else{var errorCode,errorMsg;if(respData.addCartErrorList!=undefined&&respData.addCartErrorList[0]!=undefined){errorCode=respData.addCartErrorList[0].errorCode;errorMsg=respData.addCartErrorList[0].errorMessage}if(errorCode=="017"){resp.failCode=errorCode;resp.failMsg="";resp.uuid=respData.uuid;cart.security.setNeedVerifyCodeVal(true)}else{if(errorCode=="018"){resp.failCode=errorCode;resp.failMsg=""}else{if(errorCode=="019"){resp.failCode=errorCode;resp.failMsg=""}else{if(errorCode=="015"||errorCode=="025"){resp.failCode=errorCode;resp.failMsg=""}else{if(errorCode=="024"){resp.failCode=errorCode;resp.failMsg="您的账号存在异常，请致电客服4008-365-365"}else{if(errorCode=="32"){resp.failCode=errorCode;resp.failMsg=errorMsg}else{if(errorMsg!=undefined&&errorMsg!=""){resp.failCode=errorCode;resp.failMsg=errorMsg}else{resp.failCode="001";resp.failMsg="网络报错，请重新点击！"}}}}}}}}cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};var cartFailCallBack=function(callerCallBack){var resp={};resp.analyticsType="Addcart";resp.result="0";resp.failCode="000";resp.failMsg="网络报错，请重新点击！";cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};var addCart=function(jsonObj,callback){if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"0000000000";jsonObj.verifyCode="";jsonObj.uuid="";var targetUrl="http://shopping.suning.com/addCart.do?callback=?";var params={cartVO:cart.common.obj2string(jsonObj)};ajaxCrossDomain(targetUrl,$.param(params),function(data){successCallBack("0",data,callback)},function(){failCallBack("0",callback)},cart.common.passport_configs);cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode)};var buyNow=function(jsonObj,callback){if(typeof(callback)!="function"){alert("未传入参数：回调函数callback！");return}var cmmdtyVOList=jsonObj.cmmdtyVOList;if(typeof(cmmdtyVOList)=="undefined"||cmmdtyVOList==null||cmmdtyVOList.length==0){alert("未传入参数：商品信息cmmdtyVOList！");return}firstCmmdty=cmmdtyVOList[0];cmmdtyVOList[0].activityType=cmmdtyVOList[0].activityType||"01";cmmdtyVOList[0].activityId=cmmdtyVOList[0].activityId||"";cmmdtyVOList[0].shopCode=cmmdtyVOList[0].shopCode||"0000000000";if(typeof(bd)!="undefined"){cart.common.setCookie("c2dt",bd.rst())}var verifyCode="";if(cart.security.getNeedVerifyCodeVal()){var tempVerifyCode=cart.security.getVerifyCodeVal();if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!="以下字符不区分大小写"){verifyCode=tempVerifyCode}else{b2c_fc_authid=""}cart.security.setNeedVerifyCodeVal(false)}jsonObj.verifyCode=verifyCode;jsonObj.uuid=cart.security.getUUID();var targetUrl="http://shopping.suning.com/nowBuy.do?callback=?";if(cmmdtyVOList[0].activityType==="02"&&cmmdtyVOList[0].subActivityType==="10"){targetUrl="http://ncart.suning.com/nowBuy.do?callback=?"}var params={cartVO:cart.common.obj2string(jsonObj),b2c_fc_authid:b2c_fc_authid};function buy(fcTokenId){params={cartVO:cart.common.obj2string(jsonObj),b2c_fc_authid:b2c_fc_authid,fcTokenId:fcTokenId};$.ajax({url:targetUrl,data:$.param(params),crossDomain:true,dataType:"jsonp",cache:false,success:function(data){successCallBack("1",data,callback)},error:function(){cartFailCallBack(callback)}})}ajaxCrossDomain(targetUrl,$.param(params),function(data){successCallBack("1",data,callback,buy)},function(){cartFailCallBack(callback)},cart.common.passport_configs);cart.analytics.savePageSaleInfo(cmmdtyVOList[0].cmmdtyCode,cmmdtyVOList[0].shopCode);cart.analytics.updatePageSaleInfo()};var successCallBack=function(operationType,respData,callerCallBack,buy){var resp={};resp.analyticsType="Addcart";if(operationType==="1"){resp.analyticsType="Buynow"}resp.result="0";var returnCode=respData.returnCode;if(null!=returnCode&&""!=returnCode&&"4000"==returnCode){resp.failCode=returnCode;resp.failMsg="您访问的太频繁， 网络拥堵，请您稍后再试！";Util.alertErrorBox(resp.failMsg);cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}if(null!=returnCode&&""!=returnCode&&"4001"==returnCode){resp.failCode=returnCode;resp.failMsg="您访问的太频繁， 网络拥堵，请您稍后再试！";b2c_fc_authid=respData.b2c_fc_authid;cart.security.setNeedVerifyCodeVal(true);cart.security.showMinos3(respData.uuid);cart.analytics.recordErrorMsg(resp);callerCallBack(resp);return}if(typeof buy!="undefined"){if(respData.fcFlag=="1"){var fc_config={fcWebUrl:"http://tspofc.suning.com",fcResUrl:"http://res.suning.cn/project/tspofc"};openB2cPopPage(respData,buy,fc_config);return}}var result=respData.isSuccess;if(result=="Y"){var param={pid:firstCmmdty.cmmdtyCode,vid:firstCmmdty.shopCode,storeId:sn.storeId,catalogId:sn.catalogId,langId:"-7",cartFlag:"B"};shoppingCartUrl="http://shopping.suning.com/addToCart.do?"+$.param(param);if(operationType==="1"){shoppingCartUrl="http://shopping.suning.com/order.do?cart2No="+respData.cart2No;if(firstCmmdty.activityType==="02"&&firstCmmdty.subActivityType==="10"){shoppingCartUrl="http://ncart.suning.com/order.do?cart2No="+respData.cart2No}}resp.result="1";resp.url=shoppingCartUrl;cart.recommended.toShoppingCart()}else{var errorCode,errorMsg;if(respData.addCartErrorList!=undefined&&respData.addCartErrorList[0]!=undefined&&operationType=="0"){errorCode=respData.addCartErrorList[0].errorCode;errorMsg=respData.addCartErrorList[0].errorMessage}else{if(respData.resultErrorList!=undefined&&respData.resultErrorList[0]!=undefined&&respData.resultErrorList[0][0]!=undefined&&operationType=="1"){errorCode=respData.resultErrorList[0][0].errorCode;errorMsg=respData.resultErrorList[0][0].errorMessage}}if(errorCode=="017"){resp.failCode=errorCode;resp.failMsg="";resp.uuid=respData.uuid;cart.security.setNeedVerifyCodeVal(true);cart.security.showMinos3(respData.uuid)}else{if(errorCode=="018"){resp.failCode=errorCode;resp.failMsg="";cart.security.showMinos2()}else{if(errorCode=="019"){resp.failCode=errorCode;resp.failMsg="";cart.security.showMinos1()}else{if(errorCode=="015"||errorCode=="025"){resp.failCode=errorCode;resp.failMsg="";aqSuning1.showMobilePopType(false)}else{if(errorCode=="024"){resp.failCode=errorCode;resp.failMsg="您的账号存在异常，请致电客服4008-365-365";Util.alertErrorBox(resp.failMsg)}else{if(errorCode=="32"){resp.failCode=errorCode;resp.failMsg=errorMsg;Util.alertErrorBox(errorMsg);location.replace(location)}else{if(errorMsg!=undefined&&errorMsg!=""){resp.failCode=errorCode;resp.failMsg=errorMsg;Util.alertErrorBox(errorMsg)}else{resp.failCode="001";resp.failMsg="网络报错，请重新点击！";Util.alertErrorBox(resp.failMsg)}}}}}}}}cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};var failCallBack=function(operationType,callerCallBack){var resp={};resp.analyticsType="Addcart";if(operationType==="1"){resp.analyticsType="Buynow"}resp.result="0";resp.failCode="000";resp.failMsg="网络报错，请重新点击！";Util.alertErrorBox(resp.failMsg);cart.analytics.recordErrorMsg(resp);callerCallBack(resp)};function add2Cart(sellType,buyNum,vendorCode,catEntryIds,warrentProducts,cityId,isPreBuy,partnumber,priceType,PriceShowActionId){commPartnumber=partnumber;if(isPreBuy!=1){cartPress(true)}alsoBuy(cityId);var _url="http://"+sn.cartPath+"/addMiniSoppingCart";var add2ShopCartData={ERROEVIEW:"miniShoppingCartView",URL:"miniShoppingCartView",quantity:buyNum,fullInventoryCheck:"0",inventoryCheckType:"0",fullVoucherCheck:"0",voucherCheckType:"0",inventoryRemoteCheck:"0",voucherRemoteCheck:"1",storeId:"10052",catalogId:"10051",orderId:".",partnumber:partnumber,sellType:sellType,supplierCode:vendorCode,priceType:priceType,promotionActiveId:PriceShowActionId};if(sellType!="0"){_url="SNTreatyProductAddCartCmd"}var warrentProduct=new Array();var tempWarrentProduct="";if(null!=warrentProducts&&""!=warrentProducts){var warrentProductsArray=warrentProducts.split(",");for(var i=0,len=warrentProductsArray.length;i<len;i++){var warProduct=warrentProductsArray[i].split("-");if(warProduct.length>1){warrentProduct[i]=warProduct[0]}else{warrentProduct[i]=warProduct}if(i==(len-1)){tempWarrentProduct=tempWarrentProduct+warrentProduct[i]}else{tempWarrentProduct=tempWarrentProduct+warrentProduct[i]+","}}}var buyPackPartNumber="";var buyPackQuantity="";var buyPackSort="";if(warrentProduct.length>buyNum){Util.alertErrorBox("延保商品数量必须小于等于商品数量!");if(isPreBuy!=1){cartPress(false)}return}else{for(i=0;i<warrentProduct.length;i++){if(buyPackPartNumber!=""){buyPackPartNumber=buyPackPartNumber+","+warrentProduct[i];buyPackQuantity=buyPackQuantity+",1"}else{buyPackPartNumber=warrentProduct[i];buyPackQuantity="1";buyPackSort=1}}}if(null!=buyPackSort&&buyPackSort!=""){add2ShopCartData.buyPackSort=buyPackSort}if(null!=tempWarrentProduct&&tempWarrentProduct!=""){add2ShopCartData.buyPackPartNumber_1=tempWarrentProduct}if(null!=buyPackQuantity&&buyPackQuantity!=""){add2ShopCartData.buyPackQuantity_1=buyPackQuantity}if(null!=catEntryIds&&""!=catEntryIds){var catentryId=catEntryIds.split(",");if(catentryId[0]!=null){add2ShopCartData.catEntryId_2=catentryId[0]}if(catentryId[1]!=null){add2ShopCartData.catEntryId_3=catentryId[1]}}if(isPreBuy==1){add2ShopCartData.promotionType="psell";if(typeof(bd)!="undefined"){setCookie("c2dt",bd.rst())}if(needVerifyCodeVal){var tempVerifyCode=verifyCodeVal;if(tempVerifyCode!=undefined&&tempVerifyCode!=""&&tempVerifyCode!="以下字符不区分大小写"){add2ShopCartData.verifyCode=tempVerifyCode;add2ShopCartData.uuid=v_uuid}needVerifyCodeVal=false}}if(cloudInfo.addCartState=="1"){add2ShopCartData.promotionType="cloud";add2ShopCartData.promotionActId=cloudInfo.activityID}$.ajax({url:_url,data:add2ShopCartData,cache:false,async:false,dataType:"jsonp",jsonp:"callback",success:function(response){if(response.userStatus!=""){Util.alertErrorBox("您的会员卡已冻结，请拨打4008-198-198或在线客服处理。")}else{var fourthURL=window.location.href;if(response.errorCode=="MINOSE_0001"){quickPress(false);showMinos1()}else{if(response.errorCode=="MINOSE_0002"){quickPress(false);showMinos2()}else{if(response.errorCode=="MINOSE_0003"){needVerifyCodeVal=true;quickPress(false);showMinos3(response.uuid)}else{if(response.errorCode=="pne"){Util.alertErrorBox("该优惠价库存不足，请修改数量！")}else{if(response.errorCode=="BLACKLISTERROR"){Util.alertErrorBox("抱歉，您暂无资格购买大聚惠商品，请选择其他商品购买。");quickPress(false)}else{if(response.errorCode=="GROUPTIMEOUT"||response.errorCode=="GROUPNUMOUT"||response.errorCode=="GROUPSIMPLENUMOUT"||response.errorCode=="GROUPPARAMERROR"||response.errorCode=="GROUPINPREHEAT"||response.errorCode=="GROUPHAVINGCHANCE"){Util.alertErrorBox(response.errorMessage);quickPress(false)}else{if(response.errorCode=="GROUPNOTBINDPHONE"){aqSuning1.showMobilePopType(false);quickPress(false)}else{if(response.errorCode=="GROUPUSERINFOERR"){Util.alertErrorBox("您的账号存在异常，请致电客服4008-365-365");quickPress(false)}else{if(response.errorCode=="GROUPNOTBRONDPAY"){Util.alertErrorBox("您需要进行<a href='"+getBrondPayUrl()+"'>易付宝快捷绑定</a>后才可以继续购买哦~");quickPress(false)}else{if(response.errorCode=="SCODE_NOT_ENOUGH"||response.errorCode=="SCODE_SYS_ERR"){Util.alertErrorBox(response.errorMessage);quickPress(false)}else{if(response.errorCode=="SCODE_NOT_BIND"){Util.alertErrorBox("您没有此商品的S码或S码还没有<a href='"+getBindScodeUrl()+"'  target='_Blank'>激活</a>");quickPress(false)}else{if(response.errorCode=="psellNotBuyTime"){Util.alertErrorBox(response.errorMessage)}else{if(response.isOverLimitCnt=="OVERLIMIT"){var url="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;Util.alertErrorBox("您的购物车商品清单种类已达50种上限，建议您立即<a href="+url+">清理购物车</a>")}else{if(response.errorCode=="NOTVALIDUSER"){Util.alertErrorBox("用户的会员卡状态不正确,请咨询客服！")}else{if(response.errorCode=="NOTSALE"){var url="http://"+sn.domain;Util.alertErrorBox("此商品暂不销售，您可以尝试选购其他商品<a href="+url+">选购其他商品</a>")}else{if(response.errorCode=="ITNOTSALE"){Util.alertErrorBox("对不起，该商品帮客服务暂不销售，请取消勾选后重新加入购物车。")}else{if(response.errorCode=="NOSALESORGITEM"){Util.alertErrorBox("对不起,此商品无销售组织，加入购物车失败")}else{if(response.errorCode=="limitShopping"){Util.alertErrorBox("此商品为限购商品，最多可购买"+response.limitCount+"件")}else{if(response.errorCode=="fql_0001"){Util.alertErrorBox("亲，您的操作过于频繁，请稍后再试哦！")}else{if(response.errorCode=="cloudTimeover"){Util.alertErrorBox("此商品的兑换活动已结束！");cloudInfo.state="01";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudInvNotEnough"){Util.alertErrorBox("您购买的数量超过可兑换量，请修改商品数量");cloudInfo.state="02";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="noInv"){Util.alertErrorBox("此商品已兑换光了，您可以选择以易购价购买！");cloudInfo.state="03";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudNotEnoughOne"){Util.alertErrorBox("您的云钻不足，暂不能兑换此商品！");cloudInfo.state="04";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="cloudNotEnoughMulti"){Util.alertErrorBox("云钻不足，请修改商品数量");cloudInfo.state="05";cloudInfo.getExchengeStatus()}else{if(response.errorCode=="wrongInput"){Util.alertErrorBox("网络报错，请重新点击！！");cloudInfo.state="06";cloudInfo.getExchengeStatus()}else{if(response.hasInventor==1&&response.treaph==0){if(isPreBuy==1||cloudInfo.addCartState=="1"){shoppingCartUrl="http://"+sn.cartPath+"/SNCart2ManageCmd?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;toShoppingCart()}else{if(response.addToCartAB=="A"){shoppingCartUrl="http://"+sn.cartPath+"/addToCart?pid="+partnumber+"&vid="+vendorCode+"&langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;toShoppingCart()}else{shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;shoppingCartPopBox(cityId);SFE.base.miniCartReload()}}}else{if(response.hasInventor==0&&response.invErrFlow==1){Util.alertErrorBox("此商品无货，您可以尝试选购其他商品！")}else{if(response.hasInventor==0&&response.invErrFlow==2){Util.alertErrorBox("您购买的数量超过库存上限，请修改商品数量")}else{if(response.hasInventor==0&&(response.invErrFlow==3||response.invErrFlow==0)){if(isPreBuy==1||cloudInfo.addCartState=="1"){shoppingCartUrl="http://"+sn.cartPath+"/SNCart2ManageCmd?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL;toShoppingCart()}else{if(response.addToCartAB=="A"){shoppingCartUrl="http://"+sn.cartPath+"/addToCart?pid="+partnumber+"&vid="+vendorCode+"&langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId;toShoppingCart()}else{shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&invErrSb="+response.invErrSb+"&returnURL="+fourthURL;shoppingCartPopBox(cityId);SFE.base.miniCartReload()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}if(typeof(cloudInfo.initCartState)=="function"){cloudInfo.initCartState()}if(isPreBuy!=1){cartPress(false)}},error:function(){Util.alertErrorBox("网络报错，请重新点击！");if(typeof(cloudInfo.initCartState)=="function"){cloudInfo.initCartState()}if(isPreBuy!=1){cartPress(false)}}})}return{addCart:addCart,buyNow:buyNow,addToCart:addToCart,add2Cart:add2Cart}})(jQuery);cart.common=(function($){var envType="PRD";var domain_pre_reg=/^(\w*)(pre)(\w*)(.cnsuning.com)$/;var domain_sit_reg=/^(\w*)(sit)(\w*)(.cnsuning.com)$/;var domain_dev_reg=/^(\w*)(dev)(\w*)(.cnsuning.com)$/;var _hostName=document.location.hostname;var protocol=window.location.protocol;if(domain_pre_reg.test(_hostName)){envType="PRE"}else{if(domain_sit_reg.test(_hostName)){envType="SIT"}else{if(domain_dev_reg.test(_hostName)){envType="DEV"}else{envType="PRD"}}}var passport_config={base:"/",loginTheme:"b2c_pop"};var getScriptDomain=function(){var scriptDomain="";scriptDomain=("https:"==protocol)?"https://imgssl.suning.com":"http://script.suning.cn";return scriptDomain};var getBindPhoneUrl=function(){return"https://aq.suning.com/asc/mobile/check.do"};var getBrondPayUrl=function(){var brondPayUrl="";brondPayUrl="https://passport.suning.com/ids/trustLogin?sysCode=epp&targetUrl=https://pay.suning.com/epp-epw/quickPay/quick-pay-contract!showBankList.action";return brondPayUrl};var getBindScodeUrl=function(){return"http://sma.suning.com/sma/self/toBind.htm"};var esjs=document.getElementsByTagName("script");var escss=document.getElementsByTagName("link");var isInclude=function(name,isJs){if(isJs){for(var i=0;i<esjs.length;i++){if(esjs[i][isJs?"src":"href"].indexOf(name)!=-1){return true}}return false}else{for(var i=0;i<escss.length;i++){if(escss[i][isJs?"src":"href"].indexOf(name)!=-1){return true}}return false}};var _loadAsyncJs=function(src){if(isInclude(src,true)){return}var _src=src;var _scripts=document.getElementsByTagName("script");for(var i=0;i<_scripts.length;i++){if(_scripts[i].src==_src){return}}var _script=document.createElement("script");_script.type="text/javascript";_script.async=true;_script.src=_src;var _s=_scripts[0];_s.parentNode.insertBefore(_script,_s)};var isEmpty=function(str){return str==null||str==undefined||str==""};var getUrlParam=function(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)","i");var r=window.location.search.substr(1).match(reg);if(r!=null){return decodeURI(r[2])}return""};var obj2string=function(o){var r=[];if(null==o||typeof(o)=="undefined"){return""}if(typeof o=="string"){return o}if(typeof o=="object"){if(!o.sort){for(var i in o){if("string"==typeof(o[i])){r.push('"'+i+'":"'+obj2string(o[i])+'"')}else{r.push('"'+i+'":'+obj2string(o[i]))}}if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){r.push("toString:"+o.toString.toString())}r="{"+r.join()+"}"}else{for(var i=0;i<o.length;i++){r.push(obj2string(o[i]))}r="["+r.join()+"]"}return r}return o.toString()};var setCookie=function(keyStr,valStr){var v3=window.location.href;v3=v3.substring(v3.indexOf("//")+2);v3=v3.substring(0,v3.indexOf("/"));if(v3.indexOf(".")>0){v3=v3.substring(v3.indexOf("."))}var domain=v3;var path="/";var str=keyStr+"="+encodeURIComponent(valStr)+";domain="+domain+";path="+path;document.cookie=str};return{getScriptDomain:getScriptDomain,getBindPhoneUrl:getBindPhoneUrl,getBrondPayUrl:getBrondPayUrl,getBindScodeUrl:getBindScodeUrl,isInclude:isInclude,_loadAsyncJs:_loadAsyncJs,isEmpty:isEmpty,getUrlParam:getUrlParam,setCookie:setCookie,obj2string:obj2string,passport_config:passport_config}})(jQuery);cart.security=(function($){var needVerifyCodeVal=false;var v_uuid="";var verifyCodeVal="";var gImgVerCdeErrorCount=0;var gLastImgValCode="";var setNeedVerifyCodeVal=function(_needVerifyCodeVal){needVerifyCodeVal=_needVerifyCodeVal};var getNeedVerifyCodeVal=function(){return needVerifyCodeVal};var getUUID=function(){return v_uuid};var getVerifyCodeVal=function(){return verifyCodeVal};var fun_getVcode=function(){gImgVerCdeErrorCount=0;$("#validateCode").removeClass("error-input");document.getElementById("vcodeimg1").src="http://vcs.suning.com/vcs/imageCode.htm?uuid="+v_uuid+"&yys="+new Date().getTime()};var onKeyUpForValidate=function(evt){evt=(evt)?evt:((window.event)?window.event:"");var keyCode=evt.keyCode?evt.keyCode:evt.which;if(keyCode==13){ajaxCheckVerifyCodeOrSubmit(true)}else{onBlurForValidate()}};var onBlurForValidate=function(){var code=$("#validateCode").val();if(code==null||code==""){return false}else{if(code.length==4){ajaxCheckVerifyCodeOrSubmit(false)}}};var ajaxCheckVerifyCodeOrSubmit=function(isSubmit){var code=$("#validateCode").val();if(!isSubmit&&isLastImgValCode(code)){return}var param={code:code,uuid:v_uuid,delFlag:0};$.ajax({type:"POST",url:"http://vcs.suning.com/vcs/validate_jsonp.htm",data:param,dataType:"jsonp",jsonp:"callback",success:function(data){if(data[0].result=="true"){result=true;$("#validateCode").removeClass("error-input");$("#imageVerifytip").addClass("tip-icon").show();$(".code-error").hide();if(isSubmit){verifyCodeVal=code;$.unmLionDialog()}}else{$("#validateCode").addClass("error-input");$("#imageVerifytip").hide();$(".code-error").show();gImgVerCdeErrorCount++;if(gImgVerCdeErrorCount>=3||isSubmit){fun_getVcode()}}}})};var isLastImgValCode=function(code){if(gLastImgValCode==code){return true}else{gLastImgValCode=code;return false}};var showMinos1=function(){$.mLionDialog({css:{width:"366px"},title:"",message:$("#J-boom"),overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300})};var showMinos2=function(){$.mLionDialog({css:{width:"366px"},title:"",message:$("#J-company-channel"),overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300})};var showMinos3=function(t_uuid){$("#J-identify-code").remove();v_uuid=t_uuid;verifyCodeVal="";var url="http://vcs.suning.com/vcs/imageCode.htm?uuid="+v_uuid+"&yys="+new Date().getTime();var errorMsg="<div id='J-identify-code' style=''><div class='identify-code'><p class='tips'>亲，很抱歉，您购买的宝贝销售异常火爆，让小苏措手不及，请稍后再试~</p><div class='code-input clearfix'><dl><dt class='l'>验证码</dt><dd class='l'><p class='item-ide'><input id='validateCode' autocomplete='off' class='ui-text l' type='text' value='以下字符不区分大小写'><i id='imageVerifytip' class='tip-icon tip-ok-16 tip-ok l' style='display:none;'></i><em class='code-error l' style='display:none;'>验证码错误</em></p><p class='item-ide'><img onclick='cart.security.fun_getVcode()' name='vcodeimg1' id='vcodeimg1' class='l' src='"+url+"' alt=''><span class='change l'>看不清楚？<a href='javascript:void(0);' onclick='cart.security.fun_getVcode()'>换一张</a></span></p><p class='item-ide'><a class='lion-btn certain' href='javascript:void(0);' onclick='cart.security.ajaxCheckVerifyCodeOrSubmit(true);return false;'>确定</a><a class='lion-btn close' href='javascript:void(0);'>关闭</a></p></dd></dl></div></div></div>";$.mLionDialog({css:{width:"448px"},title:"",message:errorMsg,overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300});var inputs=$(".m-lion-dialog input"),defaultValue="以下字符不区分大小写";inputs.blur(function(){if($(this).val()==""){$(this).val(defaultValue).css("color","#999");return}else{if($(this).val()!=defaultValue){$(this).css("color","#333")}}});inputs.focus(function(){if($(this).val()==defaultValue){$(this).val("").removeAttr("style").keyup();$(this).css("color","#333")}});$("#validateCode").keyup(cart.security.onKeyUpForValidate);$("#validateCode").blur(cart.security.onBlurForValidate)};return{setNeedVerifyCodeVal:setNeedVerifyCodeVal,getNeedVerifyCodeVal:getNeedVerifyCodeVal,getUUID:getUUID,getVerifyCodeVal:getVerifyCodeVal,onKeyUpForValidate:onKeyUpForValidate,onBlurForValidate:onBlurForValidate,showMinos1:showMinos1,showMinos2:showMinos2,showMinos3:showMinos3,fun_getVcode:fun_getVcode,ajaxCheckVerifyCodeOrSubmit:ajaxCheckVerifyCodeOrSubmit}})(jQuery);cart.analytics=(function($){var savePageSaleInfo=function(partnumber,vendorCode){vendorCode=cart.common.isEmpty(vendorCode)?"0000000000":vendorCode;partnumber=partnumber.length==18?partnumber.substring(9,19):partnumber;var productInfo=partnumber+"_"+vendorCode;var fromPoint=$.trim(cart.common.getUrlParam("srcpoint"));try{pageSaleCookieUtil.saveCookie(productInfo,fromPoint)}catch(e){}};var updatePageSaleInfo=function(){try{pageSaleCookieUtil.updateCustNo()}catch(e){}};var recordErrorMsg=function(resp){try{var reg=/^9/g;var errorType="1";if(reg.test(resp.failCode)||resp.failCode=="001"){errorType="0"}sa.openAPI.sendMessage(resp.analyticsType,resp.failCode+"&&"+errorType+"&&"+resp.failMsg+"&&"+getCookie("custno"))}catch(e){}};return{savePageSaleInfo:savePageSaleInfo,updatePageSaleInfo:updatePageSaleInfo,recordErrorMsg:recordErrorMsg}})(jQuery);cart.recommended=(function($){var shoppingCartPopBox=function(cityId){$.mDialog({css:{width:"460px"},http:function(e,o){if(recommendProductInfo==undefined||recommendProductInfo==""){var data='<div class="pop-car-win"><div class="pop-content">';data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>";data+="</div></div>";recommendProductInfo=data}e.find(".content").html(recommendProductInfo);try{runAnalyseExpo()}catch(e){}if(sn.catalogId=="22001"){e.find(".btn.close").attr("name","bprd_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_gwctk_guanbi")}else{e.find(".btn.close").attr("name","item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_gwctk_guanbi")}},overlayClick:true,overlayCss:{background:"black",opacity:"0.3"},fadeIn:300,fadeOut:300})};var toShoppingCart=function(){if(shoppingCartUrl==undefined||shoppingCartUrl==""){var fourthURL=window.location.href;shoppingCartUrl="http://"+sn.cartPath+"/OrderItemDisplay?langId=-7&storeId="+sn.storeId+"&catalogId="+sn.catalogId+"&returnURL="+fourthURL}hrefLink(shoppingCartUrl)};var alsoBuy=function(cityId){if(cityId=="undefined"){cityId="-7"}var u=getCookie("custno");if(typeof(u)=="undefined"){u=""}var c=getCookie("_snma");if(typeof(c)!="undefined"&&null!=c&&c!=""){c=c.split("|")[1]}else{c=""}var _url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?u="+u+"&c="+c+"&parameter="+firstCmmdty.cmmdtyCode+"&cityId="+cityId+"&sceneIds=10-11&count=5";var catalogId=sn.catalogId;if(catalogId=="22001"){_url=sn.tuijianDomain+"/recommend-portal/recommendv2/biz.jsonp?u="+u+"&c="+c+"&parameter="+firstCmmdty.cmmdtyCode+"&cityId="+cityId+"&sceneIds=10-12&count=5"}$.ajax({url:_url,cache:true,dataType:"jsonp",jsonpCallback:"cart.recommended.recommendData",success:function(){}})};var recommendData=function(jsondata){var sugGoodsList=jsondata.sugGoods;var bbData="";var recomData="";$.each(sugGoodsList,function(i,sugGoods){if(sugGoods.resCode!="02"){if(sugGoods.sceneId=="10-11"){recommendProductInit(sugGoods)}else{if(sugGoods.sceneId=="10-12"){recommendBookProductInit(sugGoods)}}}})};var recommendProductInit=function(item){var data='<div class="pop-car-win"><div class="pop-content">';if(item.skus!=undefined&&item.skus.length>=4){data+='<div class="pop-success"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+='<div class="pop-others"><p>买了该商品的顾客还买了</p><ul>';for(var i=0;i<4;i++){if(i==3){data+='<li class="last">'}else{data+="<li>"}data+='<a id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+(item.skus[i].sugGoodsCode).substring(9,18)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" class="picbox" target="_blank"><img src="'+sn.imageDomianDir+"/content/catentries/"+(item.skus[i].sugGoodsCode).substring(0,14)+"/"+item.skus[i].sugGoodsCode+"/"+item.skus[i].sugGoodsCode+'_ls.jpg"" alt="'+item.skus[i].sugGoodsName+'" /></a>';data+='<p id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" class="details"><a href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+(item.skus[i].sugGoodsCode).substring(9,18)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" target="_blank">'+item.skus[i].sugGoodsName+"</a></p>";data+='<span class="snPrice"><i>¥</i><em>'+item.skus[i].price+"</em></span>";data+="</li>"}data+="</ul></div>"}else{data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="item_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="item_'+(firstCmmdty.cmmdtyCode)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>"}data+="</div></div>";recommendProductInfo=data};var recommendBookProductInit=function(item){var data='<div class="pop-car-win"><div class="pop-content">';if(item.skus!=undefined&&item.skus.length>=4){data+='<div class="pop-success"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+='<div class="pop-others"><p>买了该商品的顾客还买了</p><ul>';for(var i=0;i<4;i++){if(i==3){data+='<li class="last">'}else{data+="<li>"}data+='<a id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+(item.skus[i].sugGoodsCode).substring(9,18)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_p_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" class="picbox" target="_blank"><img src="'+sn.imageDomianDir+"/content/catentries/"+(item.skus[i].sugGoodsCode).substring(0,14)+"/"+item.skus[i].sugGoodsCode+"/"+item.skus[i].sugGoodsCode+'_ls.jpg"" alt="'+item.skus[i].sugGoodsName+'" /></a>';data+='<p id="baoguang_recbuymore_1-'+(i+1)+"_"+item.skus[i].vendorId+"_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_"+item.skus[i].handwork+'" name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" class="details"><a href="'+sn.elecProductDomain+"/"+item.skus[i].vendorId+"/"+(item.skus[i].sugGoodsCode).substring(9,18)+".html?src=item_"+(firstCmmdty.cmmdtyCode).substring(9,18)+"_recbuymore_1-"+(i+1)+"_c_"+item.skus[i].vendorId+"_"+(item.skus[i].sugGoodsCode).substring(9,18)+"_"+item.skus[i].handwork+'" title="'+item.skus[i].sugGoodsName+'" target="_blank">'+item.skus[i].sugGoodsName+"</a></p>";data+='<span class="snPrice"><i>¥</i><em>'+item.skus[i].price+"</em></span>";data+="</li>"}data+="</ul></div>"}else{data+='<div class="pop-success no-products"><h4><b></b>添加成功！</h4>';data+='<div class="clearfix"><a name="bprd_'+(firstCmmdty.cmmdtyCode).substring(9,18)+'_gwctk_goshopping" href="javascript:void(0)" class="car-btn shopping-btn close l"><span>继续购物</span></a>';data+='<a name="bprd_'+(firstCmmdty.cmmdtyCode)+'_gwctk_gocart" href="javascript:cart.recommended.toShoppingCart();" class="car-btn account-btn close"><span>去购物车结算</span></a></div>';data+="</div>"}data+="</div></div>";recommendProductInfo=data};return{shoppingCartPopBox:shoppingCartPopBox,toShoppingCart:toShoppingCart,alsoBuy:alsoBuy}})(jQuery);$(function(){if(!cart.common.isInclude("jquery",true)){alert("请引入jQuery.js")}$("script").each(function(){if($(this).attr("src")!=undefined&&$(this).attr("src").indexOf("cart.js")!=-1){if($(this).attr("src").lastIndexOf("?")<=0){version=""}else{version=$(this).attr("src").substring($(this).attr("src").lastIndexOf("?"))}return false}});cart.common._loadAsyncJs(cart.common.getScriptDomain()+"??/javascript/SFE.dialog.js,/javascript/js_sn/shoppingCart/optimization/SFE.lion.dialog.js,/javascript/sn_da/da_opt.js,/javascript/sn_da/sa-analytics.js"+version);cart.common._loadAsyncJs("http://res.suning.cn/project/tspofc/js/fcPop.js"+version)});