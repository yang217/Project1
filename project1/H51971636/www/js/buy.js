$(function(){
	
	$("#buy").click(function(){
		
		location.href="goshop.html"
	})
	
	loadCart();
	function loadCart(){
		
			var cartStr = $.cookie("cart") ? $.cookie("cart") : "{}";//这个cookie名是cart
			var cartObj=JSON.parse(cartStr);
			var total=0;
			for(var goodid in cartObj){
		        total=total+cartObj[goodid].num;
			}
		 $('#buy').html("购物车(" + total + ")");;
		   
		   $(".addToCart").click(function(e){
		   	var goodid=$(this).parent().attr("data-good-id");
		   	var spid=$(this).siblings(".spid").html();
		   	var goodname=$(this).siblings(".goodName").html();
		   
		   	var goodweight= $(this).siblings(".goodWeight").children().html();
		  
		   	var no5price=$(this).siblings(".no5price").children().html();
		   	
		   	var scprice=$(this).siblings(".scprice").children().html();
	
		   	
		   
		   	
		   	var cartStr = $.cookie("cart") ? $.cookie("cart") : "{}";
	        var cartObj=JSON.parse(cartStr);
	    if(goodid in cartObj){
		     cartObj[goodid].num+=1;
	           }else{
		         cartObj[goodid]={
			 
			name:goodname,
			weight:goodweight,
			no5p:no5price,
			scp:scprice,
			num:1
		}
		   	
		   }
		    
		/*
		{
			"p1":{
				spid:8888,
				name:"Evian 依云矿泉水喷雾 300ml",
				noprice:88,
				scprice:99,
				num:1
				
			}
			
		}
		
		
		
		*/
		//克隆图片
		
		// 克隆一个图片
					var cloneImg = $(this).siblings('img').clone();
					// 改一下初始宽高
					cloneImg.css({width:50,height:50});
					cloneImg.fly({
					    start:{
					      left: e.clientX,  //开始位置（必填）#fly元素会被设置成position: fixed
					      top: e.clientY,  //开始位置（必填）
					    },
					    end:{
					      left: $('#buy').offset().left - $(window).scrollTop(), //结束位置（必填）
					      top: $('#buy').offset().top - $(window).scrollTop(),  //结束位置（必填）
					      width: 0, //结束时高度
					      height: 0, //结束时高度
					    },
					    autoPlay: true, //是否直接运动,默认true
					    onEnd: function(){
					    	cloneImg.remove();
					    	// 更新购物车按钮上的总数
							
							var total = parseInt($('#buy').html().match(/\D*(\d+)\D*/)[1]);
							$('#buy').html("购物车(" + (total + 1) + ")");
					    } //结束回调
					});
					
		
		 //更新cookie数据
		 cartStr=JSON.stringify(cartObj);
		 $.cookie("cart",cartStr,{expires:7,path:"/"})
		
	
	}
		   )
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
