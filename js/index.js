$(document).ready(function(){
	//  ********* 轮播图开始 *********
	$.get("JSON/banner.json",function(data){
		$.each(data[0],function(index,value){
			$("<li><a href='' style='background:url("+value+") no-repeat center center'></a></li>").appendTo($(".mega ul"));
			$("<li><img src='"+value+"' alt='' /></li>").appendTo($(".thumbnail"))
		});
		var $ul = $(".mega ul");
		//克隆一个li放到ul的最后，起到过度的作用
		$(".mega li:first-child").clone().appendTo($ul);
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
			$ul.stop().animate({"margin-left":-perWidth*i});
			$(".thumbnail li").eq(i).addClass("active").siblings().removeClass();
		}
		//向左向右按钮
		$("#next").click(function(){
			clearInterval(timer);
			move();
			timer=setInterval(move,3000)
		});
		$("#prev").click(function(){
			clearInterval(timer);
			i=i-2;
			move();
			timer=setInterval(move,3000)
		});
		//光标滑过滑出触发的效果
		$(".thumbnail li").hover(function(){
			clearInterval(timer);
			i=$(this).index()-1;
			move();
		},function(){
			timer=setInterval(move,3000)
		})
		
	});
	
	// ********* 轮播图结束 **********

	// ********* 商品列表开始 ********

	// *** 人气单品 ***
	$.get("JSON/show.json",function(data){
		$.each(data[0],function(index,value){
			$("<li><a href='javascript:void(0)'><img src="+value.url+" alt=''></a></li>").appendTo($("#show"));
		})
	});

	// *** 优选品牌 ***
	
	$.get("JSON/pinpai.json",function(data){
		
		$.each(data[0],function(index,value){
			$("<li><a href='javascript:void(0)'><img src="+value+" alt='' /></a></li>").appendTo($("#slide"));
		})
		//克隆一个li放到ul的最后，起到过度的作用
		$("#slide>li").eq(0).clone().appendTo($("#slide"));
		$("#slide>li").eq(1).clone().appendTo($("#slide"));
		$("#slide>li").eq(2).clone().appendTo($("#slide"));

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
		
	});

	// 轮播end
	// ********* 商品列表开始 ********

	// *** 人气单品 ***
	$.get("JSON/show.json",function(data){
		console.log(data);
		$.each(data[0],function(index,value){
			$("<li><a href='javascript:void(0)'><img src="+value.url+" alt=''></a></li>").appendTo($("#show"));
		})
	});

	// *** 优选品牌 ***

	$.get("JSON/pinpai.json",function(data){

		$.each(data[0],function(index,value){
			$("<li><a href='javascript:void(0)'><img src="+value+" alt='' /></a></li>").appendTo($("#slide"));
		});
		//克隆一个li放到ul的最后，起到过度的作用
		$("#slide>li").eq(0).clone().appendTo($("#slide"));
		$("#slide>li").eq(1).clone().appendTo($("#slide"));
		$("#slide>li").eq(2).clone().appendTo($("#slide"));

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

	});

	// 轮播end


	// ********* 品牌列表**********
	$(".btnwula").click(function(){
		$(this).parent().parent().removeClass('zindex100');
		$(this).parent().parent().siblings('ul').addClass('zindex100')
	});

	// *** 最新速报 ***
	$.get("JSON/show.json",function(data){
		$(".newqq>h2").after($("<a href='javascript:void(0)' style='float:left;'><img src="+data[1].img01+" alt=''></a>"))
		$.each(data[1],function(index,value){
			var i=index.replace(/img0/,"");
			
			if(i>=2&&i<=7){
				
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#liiii"));
			}
		});
		$("#liiii").after($("<a href='javascript:void(0)' style='float:left;'><img src="+data[1].img08+" alt=''></a><a href='###' style='float:left;width:100%;height:auto;margin:8px 0;'><img style='width:100%;height:auto;' src="+data[1].img09+" alt=''></a>"))
	});

	// ********* 商品列表结束 ********

	// ******** 潮流服饰 ****** 

	// ******** 潮流上装 ****** 
	$.get("JSON/fashion.json",function(data){

		
		$("<li><a href='javascript:void(0)'><img src="+data[0].img01+" alt=''></a><a href='javascript:void(0)'><img src="+data[0].img02+" alt=''></a></li>").appendTo($("#one"));
		$.each(data[0],function(index,value){
			var k=index.replace(/img0/,"");
			var j = index.replace(/img/,"");
			if(k>=3 && k<7){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#one"));
			}else if(k>=7 && k<=9){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two"));
			}

			if(j==10){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two"));
			}else if(j>=11 && j<=15){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#three"));
			}
		})

		
	});


	// ******** 潮流下装 ****** 
	$.get("JSON/fashion.json",function(data){
		$("<li><a href='javascript:void(0)'><img src="+data[1].img01+" alt=''></a><a href='javascript:void(0)'><img src="+data[1].img02+" alt=''></a></li>").appendTo($("#one2"));
		$.each(data[1],function(index,value){
			var m=index.replace(/img0/,"");
			var n = index.replace(/img/,"");
			if(m>=3 && m<7){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#one2"));
			}else if(m>=7 && m<=9){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two2"));
			}

			if(n==10){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two2"));
			}else if(n>=11 && n<=15){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#three2"));
			}
		})

		
	});


	// ******** 时尚鞋履 ****** 
	$.get("JSON/fashion.json",function(data){
		$("<li><a href='javascript:void(0)'><img src="+data[2].img01+" alt=''></a><a href='###'><img src="+data[2].img02+" alt=''></a></li>").appendTo($("#one3"));
		$.each(data[2],function(index,value){
			var p=index.replace(/img0/,"");
			var q = index.replace(/img/,"");
			if(p>=3 && p<7){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#one3"));
			}else if(p>=7 && p<=9){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two3"));
			}

			if(q==10){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two3"));
			}else if(q>=11 && q<=15){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#three3"));
			}
		})

		
	});

	// ******** 潮人配饰 ****** 
	$.get("JSON/fashion.json",function(data){
		$("<li><a href='javascript:void(0)'><img src="+data[3].img01+" alt=''></a><a href='javascript:void(0)'><img src="+data[3].img02+" alt=''></a></li>").appendTo($("#one4"));
		$.each(data[3],function(index,value){
			var v=index.replace(/img0/,"");
			var u = index.replace(/img/,"");
			if(v>=3 && v<7){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#one4"));
			}else if(v>=7 && v<=9){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two4"));
			}

			if(u==10){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#two4"));
			}else if(u>=11 && u<=15){
				$("<li><a href='javascript:void(0)'><img src="+value+" alt=''></a></li>").appendTo($("#three4"));
			}
		})

		
	});



//  ******** 最新上架 ****** 
 $.get("JSON/new.json",function(data){

 	var str = "";
 	$.each(data,function(index,value){
 		$.each(value,function(i, el) {
 			$("<dl><dt><img src='"+el.url+"' alt=''></dt><dd><p>"+el.describe+"</p><span>"+el.price+"</span></dd></dl>").appendTo('#nownew')
 		});
 		
 		
 	})

 })

});










