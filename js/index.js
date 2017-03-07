var $body = $("body")
var $header = $(".header")

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

//===========头部按钮=============
var $btnimg = $(".btnUl li img")
$btnimg.on("click",function(){
	$(this).attr("src","images1/btn_01.png")
	$(this).parent().siblings().find($btnimg).attr("src","images1/btn_02.png")
})
$btnimg.eq(0).on("click",function(){
	$header.css("backgroundImage","url(images1/banner.jpg)")
})
$btnimg.eq(1).on("click",function(){
	$header.css("backgroundImage","url(images1/hd13.jpg)")
})
$btnimg.eq(2).on("click",function(){
	$header.css("backgroundImage","url(images1/hd11.jpg)")
})
$btnimg.eq(3).on("click",function(){
	$header.css("backgroundImage","url(images1/hdd.jpg)")
})
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

//====part2里面换图片=====
var $part2_ul = $(".servi_item")
var $changeImg = $(".changeImg")
var $part2_lis = $(".servi_item li")

$part2_lis.eq(3).hover(function(){
	$(this).find($changeImg).attr("src","images1/s_item44.jpg")
},function(){
	$(this).find($changeImg).attr("src","images1/s_item4.jpg")
})
$part2_lis.eq(2).hover(function(){
	$(this).find($changeImg).attr("src","images1/s_item33.jpg")
},function(){
	$(this).find($changeImg).attr("src","images1/s_item3.jpg")
})
$part2_lis.eq(1).hover(function(){
	$(this).find($changeImg).attr("src","images1/s_item22.jpg")
},function(){
	$(this).find($changeImg).attr("src","images1/s_item2.jpg")
})
$part2_lis.eq(0).hover(function(){
	$(this).find($changeImg).attr("src","images1/s_item11.jpg")
},function(){
	$(this).find($changeImg).attr("src","images1/s_item1.jpg")
})
// var $part2_ulH =  $part2_ul.offset().top;

//======当下拉事件的时候才触发=====
var $part4_li_l = $(".part4_ul li").eq(0)
var $part4_li_r = $(".part4_ul li").eq(2)

$(window).on("scroll",function(){	
	var $scrollTop = $body.scrollTop()
	// console.log($scrollTop)
	if($scrollTop > 520){
		$part2_ul.animate({
		"top":"-50px"
		},1500)
	}
	if($scrollTop > 1600){
		$part4_li_l.animate({
			"left":0
		},1000)
		$part4_li_r.animate({
			"right":0
		},1000)
	}
	if($scrollTop > 2750){
		timerFn();
	}
})
//======part2=========

//======计时器========
var index1 = 0,index2=0,index3=0,index4=0,index5=0,index6=0,index7 = 0;
var timer1,timer2,timer3,timer4,timer5,timer6,timer7 = null;
var $numFont = $(".numFont")

function timerFn(){
	timer1 = setInterval(function(){
		if(index1 > 1000){
			clearInterval(timer1)
		}else{
			$numFont.eq(0).text(index1);
			index1+=10
		}
	},40)
	timer2 = setInterval(function(){
		if(index2 > 6){
			clearInterval(timer2)
		}else{
			$numFont.eq(1).text(index2);
			index2+=1
		}
	},555)
	timer3 = setInterval(function(){
		if(index3 > 76){
			clearInterval(timer3)
		}else{
			$numFont.eq(2).text(index3);
			index3+=1
		}
	},50)
	timer4 = setInterval(function(){
		if(index4 > 48){
			clearInterval(timer4)
		}else{
			$numFont.eq(3).text(index4);
			index4+=1
		}
	},80)
	timer5 = setInterval(function(){
		if(index5 > 16000){
			clearInterval(timer5)
		}else{
			$numFont.eq(4).text(index5);
			index5+=100
		}
	},25)
	timer6 = setInterval(function(){
		if(index6 > 24){
			clearInterval(timer6)
		}else{
			$numFont.eq(5).text(index6);
			index6+=1
		}
	},150)
	timer7 = setInterval(function(){
		if(index7 > 180){
			clearInterval(timer7)
		}else{
			$numFont.eq(6).text(index7);
			index7+=2
		}
	},40)
}
