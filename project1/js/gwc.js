$(function(){

	 $("#buy").click(function(){
     window.location="goshop.html"
         })
	
  
           loadcart()//加载购物车信息
           function loadcart(){
	 var cartStr=$.cookie("cart")?$.cookie("cart"):{};//判断一下这个商品
	 var cartObj=JSON.parse(cartStr);
	 var total=0;
	 for(var goodid in cartObj){//把每个商品循环遍历，取出商品数量
	 	
	   total=total+cartObj[goodid].num;//获取总商品数量
	 }
	 $("#totalcount").html(total)//把商品总量显示出去
 }
	 $(".jg").click(function(){
	 	alert(1)
	 })
	 $(".jg").click(function(e){
	 	 
   	   var goodid=$(".bh").attr("pid");//取出商品编号
   	   var googname=$(".goodname").html();
   	   var goodguige=parseFloat($("#guige").html());//商品规格
   	   var goodnomalpricr=parseFloat($(".marprice").html()) ;//商品一般价
   	   var goodno5price= parseFloat($(".no5price").html());
   	   var goodcheap= parseFloat($(".cheapprice").html()) ;
   	     /*
   	       {
   	      	"sp1" :{
   	      	
   	         name:"Kiehl's 科颜氏(契尔氏)男士护唇膏(04598) 4.4g",
   	        guige:"4.4",
   	         zprice:85,
   	         nprice:79,
   	           num:1
   	            }
   	       */
   	     var cartStr=$.cookie("cart")?$.cookie("cart"):{};
   	    var cartObj=JSON.parse(cartStr);
   	     if(goodid in cartObj){
   	     	
   	     cartObj[goodid].num+=1;
   	           }else{
   	           	cartObj[goodid]={
   	           		
   	         name:"Kiehl's 科颜氏(契尔氏)男士护唇膏(04598) 4.4g",
   	         guige:"4.4",
   	         zprice:85,
   	         nprice:79,
   	         num:1
   	           		
   	           	 }
   	           	
   	           	
   	           }
   	     
   	    
   	              cartStr = JSON.stringify(cartObj);//更新cookie信息
					$.cookie('cart', cartStr, {expires:7,path:"/"});
   	
   })
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
