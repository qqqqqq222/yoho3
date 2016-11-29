$(function(){

	//  ********* 轮播图开始 ********* 

	$.get("../JSON/banner.json",function(data){
		$.each(data[2],function(index,value){
			$("<li><a href='' style='background:url("+value+") no-repeat center center'></a></li>").appendTo($(".mega ul"));
			$("<li><img src='"+value+"' alt='' /></li>").appendTo($(".thumbnail"))
		})
		var $ul = $(".mega ul");
		//克隆一个li放到ul的最后，起到过度的作用
		$(".mega li:first-child").clone().appendTo($ul)

		var $li = $(".mega ul li");
		var len = $li.length;

		//perWidth是一个li的宽度
		var perWidth = $li.outerWidth();
		$ul.css("width",perWidth*len);
		$li.css("width",perWidth);

		$(".thumbnail li").eq(0).addClass("active");
		var i=0;
		var timer = setInterval(move,3000);

		//创建运动函数
		function move(){
			i++;
			if(i==-1){
				i=len-2;
				$ul.css("margin-left",-perWidth*(len-1));
			}
			if(i==len-1){
				$(".thumbnail li").eq(0).addClass("active").siblings().removeClass();
			}
			if(i==len){
				i = 1;
				$ul.css("margin-left",0);
			}
			//$ul.stop().animate()这一句表示执行动画前先停止上一次的所有动作
			$ul.stop().animate({"margin-left":-perWidth*i});
			$(".thumbnail li").eq(i).addClass("active").siblings().removeClass();
		}

		//向左向右按钮
		$("#next").click(function(){
			clearInterval(timer);
			move();
			timer=setInterval(move,3000)
		})
		$("#prev").click(function(){
			clearInterval(timer);
			i=i-2;
			move();
			timer=setInterval(move,3000)
		})
		//光标滑过滑出触发的效果
		$(".thumbnail li").hover(function(){
			clearInterval(timer);
			i=$(this).index()-1;
			move();
		},function(){
			timer=setInterval(move,3000)
		})
		
	})
	
	// ********* 轮播图结束 **********




	//  ********* 优选品牌 ********* 

	$.get("../JSON/women.json",function(data){
		$.each(data[2],function(index,value){
			$("<li><a href='' style='background:url("+value.url+") no-repeat center center'></a></li>").appendTo($("#slide"));
			
		})
		//克隆一个li放到ul的最后，起到过度的作用
		$("#slide>li").eq(0).clone().appendTo($("#slide"))
		$("#slide>li").eq(1).clone().appendTo($("#slide"))
		$("#slide>li").eq(2).clone().appendTo($("#slide"))

		var $li = $("#slide>li");
		var len = $li.length;

		//perWidth是一个li的宽度
		var perWidth = $li.outerWidth(true)+10;
		$("#slide").css("width",perWidth*len);
		$li.css("width",perWidth);

		var i=0;
		var timer2 = setInterval(move02,3000);

		//创建运动函数
		function move02(){
			i=i+3;
			if(i>=len){
				i = 3;
				$("#slide").css("margin-left",0);
			}
			//$ul.stop().animate()这一句表示执行动画前先停止上一次的所有动作
			$("#slide").stop().animate({"margin-left":-perWidth*i});
		}
		
	})



	$.get("../JSON/kids.json",function(data){
		$.each(data[0],function(index,value){
			var i=index.replace(/img/,"");
			if(i>0 && i<4){
				$("<li><a href='###'><img src='"+value.url+"' alt='' /></a></li>").appendTo($("#one"));
			}else{
				$("<li><a href='###'><img src='"+value.url+"' alt='' /></a></li>").appendTo($("#three"));
			}
		})

		$.each(data[1],function(index,value){
			$("<dl><dt><img src='"+value.url+"' alt=''></dt><dd><p>"+value.describe+"</p><span>"+value.price+"</span></dd></dl>").appendTo($("#boykids"));
			
		})
		
		$.each(data[2],function(index,value){
			$("<dl><dt><img src='"+value.url+"' alt=''></dt><dd><p>"+value.describe+"</p><span>"+value.price+"</span></dd></dl>").appendTo($("#girlkids"));
			
		})

		$.each(data[3],function(index,value){
			$("<dl><dt><img src='"+value.url+"' alt=''></dt><dd><p>"+value.describe+"</p><span>"+value.price+"</span></dd></dl>").appendTo($("#access"));
			
		})
		
		$.each(data[4],function(index,value){
			$("<dl><dt><img src='"+value.url+"' alt=''></dt><dd><p>"+value.describe+"</p><span>"+value.price+"</span></dd></dl>").appendTo($("#newarr"));
			
		})

	})


})