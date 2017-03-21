
$(function(){
	
	
	
	




//变化验证码
var changyzm=$("#forgetpwd .yzm");
$(changyzm).click(function(){
	
 var arr=[1,2,3,4,5,6,7,8,9,0]
 var str="";
 for(i=0;i<4;i++){
 	var index=parseInt(Math.random()*arr.length);
 	var str=str+arr[index]
 	
 	
 }
 changyzm.html(str)	
	console.log(usevalue)
	
}    ); 

//用于判断输入的内容  
//总结 点击的时候获取框的值

$("#xyb").click(function(){
var usename=$("#forgetpwd .inputstyle")	;
var usevalue=usename.val();
var yzm=$("#yzm");

var yzmval=yzm.val();
var changeval=changyzm.html();

	
	if(usevalue.length==0){
		alert("请输入用户名")
	}else {

		if(yzmval.length==0){
		
		  alert("请输入验证码");
		  
		}else if(yzmval!=changeval){
			$("#forgetpwd i").show();
			
		}
		else{
			location.href="changepassword.html"
		}
		

		
		
		
		
	}
	
	
	
	
})

	
})



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

