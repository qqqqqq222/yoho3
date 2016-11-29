$(document).ready(function(){

	// 控制"YOHO有货"显示隐藏
	$("#slider").hover(function(){
		$("#hidden").css("display","block");
	});
	$("#hidden").mouseleave(function() {
		$("#hidden").css("display","none");
	});

	// 二维码的显示隐藏
	$("#phonesao").hover(function(){
		$("#er2").css("display","block");	
	});
	$("#er2").mouseleave(function() {
		$("#er2").css("display","none");
	});


	// 回到顶部

	$("#return").click(function(){
		$("html,body").animate({"scrollTop":0},500);
		return false;
	})


})