// $(function() {
// 	$(".pic ul li").mouseover(function() {
// 			$(this).stop(true).animate({
// 					width: "800px"
// 			}, 500).siblings().stop(true).animate({
// 					width: "100px"
// 			}, 500);
// 	});
// });
$(function() {
	///随屏幕滚动显隐头部导航
	var inde = location.href;
	if(inde.indexOf("index") == -1){
	$(window).on('scroll',function(){
		if($(window).scrollTop() > 50){
		    $('.topBar').fadeOut(300);
		}else{
		    $('.topBar').fadeIn(300);
		}
	    /* showMain();*/
	});
	}
	$(".suolue ul li").eq(1).addClass('suolueActive');
	$(".suolue ul li").click(function() {
			$(this).addClass('suolueActive')
			$(this).siblings().removeClass("suolueActive");
		//	alert($(this).children("img").attr("num"));
			$(".bimian").eq($(this).children("img").attr("num"))
			.addClass("on-1").siblings()
			.removeClass("on-1");
	});
});
$(".pic ul li").hover(function(){
	$(this).stop(true).animate({width:"600px"},1000).siblings().stop(true).animate({width:"100px"},1000);
});

$(function () {
	$('.topPick ul li').click(function(){ 
	// console.log(index)
	$(this).addClass("active").siblings().removeClass("active");
	var topIndex = $('.topPick ul li').index(this)
	console.log($('.firstPack').children().eq(topIndex).show().siblings().hide());
	console.log($('#weizhi').offset().top);
	$('html,body').animate({scrollTop: 500}, 300); 

}); 
})


$(function(){
	var banOffTop=$(".topPick").offset().top;//获取到距离顶部的垂直距离
	// console.log(banOffTop)
	var scTop=0;//初始化垂直滚动的距离
	$(document).scroll(function(){
			scTop=$(this).scrollTop();//获取到滚动条拉动的距离
			// 查看滚动时，垂直方向上，滚动条滚动的距离
			// console.log(scTop);
			if(scTop>=banOffTop){
				// console.log(555555)
			//核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
					$(".topPick").addClass("fixDiv");
			}else{
					$(".topPick").removeClass("fixDiv");
			}

	})
})

