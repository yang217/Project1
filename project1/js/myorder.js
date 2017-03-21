$(function(){
	
	$(".list1 li").click(function(){
       	index=$(this).index();
		$(this).removeClass("active").siblings().addClass("active");
		
		//$(".myorder_r .itemo").eq(index).show();
		//$(".myorder_r .itemo").eq(index)
		$(".myorder_r .itemo").eq(index).removeClass("active").siblings().addClass("active")
		console.log($(".myorder_r .item"))
		
		//总结 	index=$(this).index(); 后面需要有括号
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
