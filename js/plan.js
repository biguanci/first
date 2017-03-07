var $body = $("body")

//============回到顶部====
var $top = $("#top")
$(window).on("scroll",function(){
	var $scrollTop = $body.scrollTop()
	if($scrollTop > 500){
		$top.css("display","block")
	}else{
		$top.css("display","none")
	}
})
$top.on("click",function(){
	$body.animate({
		"scrollTop":0
	},2000)
})
//============回到顶部====

//=========导航栏=========
var $nav = $("#nav")
var $nav_lis = $("#nav li")

$nav_lis.hover(function(){	
	$(this).addClass("border_bottom")
},function(){	
	$(this).removeClass("border_bottom")
})
//========导航栏===========

//=========子导航栏========
var $navLogo = $("#navLogo")
var $subnav = $("#subnav")

$navLogo.on("click",function(){
	$subnav.stop().slideToggle()
})
//=========子导航栏========

//====分辨率改变=====
navChangeFn();
function navChangeFn(){
	if($body.width()<1500){
		$nav.css("display","none");
		$navLogo.css("display","block")
	}else{
		$nav.css("display","block");
		$navLogo.css("display","none")
	}
}
$(window).on("resize",function(){
	navChangeFn();
})

//====分辨率改变=====

//======跳转=======
var clickBol = true;
var $jump_lis = $("#jump li")
var $jump_div = $(".jump_div")
var $close = $(".close")

$jump_lis.on("click",function(){
	if(clickBol){
	$(this).css("backgroundColor","#fff")
	$(this).siblings().css("backgroundColor","#ccc")
	$(this).find($jump_div).css("display","block");
	$(this).siblings().find($jump_div).css("display","none");
}else{
	$(this).find($jump_div).css("display","none");	
}
	clickBol = !clickBol
})

$close.on("click",function(){
	$jump_div.fadeOut()
})
//======跳转=======