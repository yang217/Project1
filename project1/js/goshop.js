$(function(){
	$(".a2").click(function(){
		
		location.href="buy.html"
		
	})
     
	//取出商品信息
	var totalprice=0;
	
	var cartStr=$.cookie("cart")?$.cookie("cart"):"{}";
	console.log(cartStr)
	if(cartStr=='{}'){
		
		$(".czyh").hide();
	}else{
		$(".czyh").show();
		var cartObj=JSON.parse(cartStr);
		for(var goodid in cartObj){
		    totalprice=totalprice+cartObj[goodid].num*cartObj[goodid].no5p;
			}
		$(".pri i").html( totalprice)//更新总价格
		for(var id in cartObj){
			var info=cartObj[id];
		    	$('<ul class="goodInfo"  data-good-id="' + id + '">'  +
          	     
          	    '<li class="sencondli">'+info.name+"</li>"+
          	    '<li class="goodge">'+info.weight+'</li>'+
          	   '<li class="normalprice">'+ info.scp+'</li>'+
          	    '<li class="noprice">'+info.no5p+'</li>'+
          	   '<li class="goodcount">' +
          	    '<input type=text value=" '+info.num+' "/>'+"</li>"+
          	    '<li class="xj">'+info.num*info.no5p+'</li>'+
          	    '<li class="goodscj"><a>转入收藏夹</a></li>'+
          	    "<li><a class='del'>删除</a></li>"+
          	    
			'</ul>').appendTo("#goodlist")
			
		
		}
		
		
		$(".del ").click(function(){
			var totalprice=0;
			var goodid=$(this).parent().parent().remove().attr("data-good-id");
			var cartStr=$.cookie("cart")?$.cookie("cart"):"{}";
			var cartObj=JSON.parse(cartStr);
			var no5price=$(this).parent().siblings(".noprice").html()
			no5price=parseInt(no5price)
			for(var goodid in cartObj){
		    totalprice=totalprice+cartObj[goodid].num*cartObj[goodid].no5p;
			}
			var num=$(this).parent().siblings(".goodcount").children("input").val();
			delete cartObj[goodid];
			
			var cartStr=JSON.stringify(cartObj);
			$.cookie("cart",cartStr,{expires:7,path:"/"});
		    
		 
		 console.log(num)
		 console.log(totalprice)
		 console.log(totalprice-num*no5price)
		$(".pri i").html( totalprice-num*no5price)//更新总价格
			
			
			if(cartStr=='{}'){
		
		$(".pri i").html(0)
		   $(".czyh").hide();
	     }
			var cartStr=$.cookie("cart")?$.cookie("cart"):"{}";
			cartObj=JSON.parse(cartStr);
		
			
			
	   
		})
	}
	
	  $(".a1").click(function(){
	 
	 var goodid=$(".goodInfo").remove().attr("data-good-id");
	 var cartStr = $.cookie("cart") ? $.cookie("cart") : "{}";
	 var cartObj=JSON.parse(cartStr);
	 
	 if(goodid in cartObj){
	 	delete cartObj[goodid]
	 }
	cartObj[goodid].num=num;//保存一下当前的数量
		$(".pri i").html(0)//更新总价格
	  cartStr=JSON.stringify(cartObj);
			$.cookie("cart",cartStr,{expires:7,path:"/"});
			if(cartStr=='{}'){
		
		   $(".czyh").hide();
	     }	
	  	
	  	
	  })
	
	
	$("input").blur(function(){
	  var goodid=$(this).parent().parent().attr("data-good-id");
	  var num=$(this).val();
	  console.log(num)
	  var reg=/^\d+$/  //限定前后都是数字
		/*if(reg.test(num)){
			num=parseInt(num)
		}else{
			num=1;
		}*/
		$(this).val(num);
		num=parseInt(num)
		 
		var no5price=$(this).parent().siblings(".noprice").html();
		 no5price=parseInt(no5price)
		 console.log(no5price)
		  console.log(isNaN(no5price))
		 var  allprice=parseInt(no5price*num) 
		  console.log(allprice)
		  
		  $(this).parent().siblings(".xj").html(allprice)
		
		var cartStr=$.cookie("cart")?$.cookie("cart"):"{}";
		var cartObj=JSON.parse(cartStr);
		
		
		cartObj[goodid].num=num;//保存一下当前的数量
		for(var goodid in cartObj){
		    totalprice=totalprice+cartObj[goodid].num*cartObj[goodid].no5p;
			}
		$(".pri i").html( totalprice)//更新总价格
		cartObj[goodid].num=num;//保存一下当前的数量
		cartStr=JSON.stringify(cartObj)
		$.cookie("cart",cartStr,{expires:7,path:"/"})
	})

	
	
	
	
	
	
	
	
})
/**/