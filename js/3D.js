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

//========调整右边的高度==========
var $h = $(".bus4");
var $kb_r = $(".kb_r");
var $kb_l = $(".kb_l")
$kb_r.height($h.height());
$(window).on("resize",function(){

	$kb_r.height($h.height());
})

//=========图片左右切换======
var $right = $(".right")
var $left = $(".left")
var $img = $(".sub_kb_l img")
var $sub_kb_l = $(".sub_kb_l")


var $index = 0;
$right.on("click",function(){
	var $divL =  $sub_kb_l.eq($rIndex)
	var $img1 = $divL.find($img);
	//console.log($img1.length)       第一为4个
	$index++;
	$img1.hide();
	$img1.eq($index).show()
	if($index>$img1.length-1){
		$index = 0;
		$img1.hide();
		$img1.eq($index).show()
	}
})
$left.on("click",function(){
	var $divL =  $sub_kb_l.eq($rIndex)
	var $img1 = $divL.find($img);
	$index--;
	$img1.hide()
	$img1.eq($index).show()
	if($index<0){
		$index = $img1.length - 1;
		$img1.hide()
		$img1.eq($index).show()
	}
})
//=========图片左右切换======

//===========右边的点击========
var $rIndex = 0;   
//右边index的下标,一开始先为0,一开始没有点击右边的时候也能执行
//===========1======
var $kb_l1 = $(".bus1 .kb_l")
var $r_lis1 = $(".busli1 li") 
$r_lis1.on("click",function(){		
	$rIndex = $(this).index()
	$kb_l1.hide();
	$kb_l1.eq($rIndex).show();
})
//===========2============
var $kb_l2 = $(".bus2 .kb_l")
var $r_lis2 = $(".busli2 li")
 $r_lis2.on("click",function(){
	$rIndex = $(this).index()
	$kb_l2.hide();
	$kb_l2.eq($rIndex).show();
 })
//============3===============
var $kb_l3 = $(".bus3 .kb_l")
var $r_lis3 = $(".busli3 li")
 $r_lis3.on("click",function(){
	$rIndex = $(this).index()
	$kb_l3.hide();
	$kb_l3.eq($rIndex).show();
 })



//==========右边的点击=========

//==========大块切换===========
var $wrap_bus = $(".wrap_bus")
var $tab_lis = $(".select_item li")
var $tab_index = 0;
$tab_lis.on("click",function(){
	$tab_index = $(this).index();
	console.log($tab_index)
	$wrap_bus.hide();
	$wrap_bus.eq($tab_index).show();
})
//==========大块切换===========

//=======动画1========
var $ul_intr = $(".work_intr ul")
var $span = $(".work_intr span")
var $ul_good = $(".goodness ul")
var move = $span.offset().top/2;
var move2 = $span.offset().top;
// var scrollTop = $body.scrollTop();

$(window).on("scroll",function(){
	var scrollTop = $body.scrollTop();
	if(scrollTop > move){
		$ul_intr.animate({
			"top":"-20px"
		},1000)
	}
	if(scrollTop > move2){
		$ul_good.animate({
			"top":"-20px"
		},1000)
	}
})


