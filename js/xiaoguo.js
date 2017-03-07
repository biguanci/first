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

//=========瀑布流========
var maxH
var minHeight
var arrH = [];
var pic_sub = document.getElementsByClassName("pic_sub");
var pic_wrap = document.getElementsByClassName("pic_wrap")[0];
var pic_wrapH;
//改变div位置
changePosFn()
function changePosFn(){
	var divsW = pic_sub[0].offsetWidth;
	var windowW  = document.documentElement.offsetWidth
	var divNum = parseInt(windowW / divsW);
	for(var i = 0;i<pic_sub.length;i++){
		if(i<divNum){
			pic_sub[i].style.left = i * 33.3 + "%";
			pic_sub[i].style.top = 0;
			arrH[i] = pic_sub[i].offsetHeight;
		}else{
			minHeight = minHeightIndexFn();
			pic_sub[i].style.left = minHeight * 33.3 + "%";		 
			pic_sub[i].style.top = arrH[minHeight] + 'px';
			arrH[minHeight] += pic_sub[i].offsetHeight;
		}
	}
	pic_wrapH = arrH[minHeight]
	//累加到最后，数组的最小高度就是累加到最后一张的高度
	pic_wrap.style.height = pic_wrapH + "px";

}
//瀑布流的高度
	// console.log($pic_sub.last().height())
	// console.log($pic_sub.last().position().top)
	// var $sumH = $lastH + $lastT
	
	// console.log(pic_wrapH)
	// console.log($sumH) 


//获取最小高度的下标
function minHeightIndexFn(){
	var index = arrH.indexOf(Math.min(...arrH));
	return index;
}
//屏幕尺寸改变的时候  它的高度也一直在改变
window.onresize = function(){
	changePosFn();
}

//==========mask==========
var $pic_wrap = $(".pic_wrap")
var $pic_sub = $(".pic_sub");
var $mask = $(".mask")

$pic_sub.hover(function(){
	$(this).find($mask).css("display","block")

},function(){
	$(this).find($mask).css("display","none")
})
//==========mask==========

//==============fade==========

var $fade = $(".fade")
var $scale = $(".scale")
var $closePic = $(".closePic")
var $pic2 = $(".pic2")
var $pic1 = $(".pic_sub img")
var $newImg
var $index_pic; 
$pic_sub.on("click",function(){

	$scale.css({
		"width": 0,
		"height": 0,
	})

	$index_pic = $(this).index()
	$pic2.html("")
	$fade.css("display","block")
	var $pic_subW = $(this).width();
	var $pic_subH = $(this).height();
	$newImg = $("<img>")
	$newImg.attr("src",$(this).find($pic1).attr("src"))
	$pic2.append($newImg)
	// $scale.css({
	// 	"width": $pic_subW*1.2,
	// 	"height": $pic_subH*1.2,
	// })
	$scale.animate({
		"width": $pic_subW*1.2,
	    "height": $pic_subH*1.2,
	},500)
})
$closePic.on("click",function(){
	$fade.hide();
})
//right点击
var $rightPic = $(".rightPic")
var $leftPic = $(".leftPic")
$rightPic.on("click",function(){
	$index_pic++;
	$newImg.attr("src",$pic_sub.eq($index_pic).find($pic1).attr("src"))
	$pic2.html("")
	$pic2.append($newImg)
	var $pic_subW = $pic_sub.eq($index_pic).width();
	var $pic_subH = $pic_sub.eq($index_pic).height();
	$scale.css({
		"width": $pic_subW*1.2,
		"height": $pic_subH*1.2
	})
	// console.log($pic_sub.length)
	if($index_pic == $pic_sub.length-1){
		$index_pic = 0;
	}
	return false;	
})
//left点击
$leftPic.on("click",function(){
	$index_pic--;
	$newImg.attr("src",$pic_sub.eq($index_pic).find($pic1).attr("src"))
	$pic2.html("")
	$pic2.append($newImg)
	var $pic_subW = $pic_sub.eq($index_pic).width();
	var $pic_subH = $pic_sub.eq($index_pic).height();
	$scale.css({
		"width": $pic_subW*1.2,
		"height": $pic_subH*1.2
	})
	// console.log($pic_sub.length)
	if($index_pic == 0){
		$index_pic = $pic_sub.length-1;
	}	
})
//==============fade==========

//==================切换==============
var $fade_show;
var $changeTab = $(".select_item ul li") 
$changeTab.on("click",function(){
	var $index = $(this).index();
	$fade_show = $(".pic_sub[data=tab"+$index+"]")	
	$pic_sub.hide(); 
	// $fade_show.show()
	$fade_show.show().css({
		"left":0,
		"top":0,
	})
	$fade_show.each(function(i){
		$fade_show.eq(i).css({
			"top":0,
			"left":i*33.3+"%"			
		})
	})
	pic_wrap.style.height = $fade_show.first().height() + "px";
	if($index == 0){
		$pic_sub.show();
		changePosFn();
	}	
})
//==================切换==============
//