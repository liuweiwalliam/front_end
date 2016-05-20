$(function(){
	Kunyi.imageResize("div.Canvas .canvasBg img");	
	$("div.next,div.previous").hover(function(){
		$(this).find("img").stop(false,true).fadeIn({duration:388, easing:"easeInOutQuad"});
	},function(){
		$(this).find("img").stop(false,true).fadeOut({duration:388, easing:"easeInOutQuad"});
	});
});
$__W.load(function(){
	if($OldBrower){
	$("div.wrap").loopedSlider({
		container : 'Container',
		slideClass: 'BContent',
		autoHeight: false,
		slideSpeed: 880
	});
	}else{
	 $("div.wrap").loopedSlider({
		container : 'Container',
		slideClass: 'BContent',
		autoHeight: false,
		slideSpeed: 1080,
		easing:"easeInOutExpo"
	  });
	}
});