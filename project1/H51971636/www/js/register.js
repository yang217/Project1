$(function(){
	/*------------------------用户名校验-------------------------*/
	var flag=false;//代表所有 的数据都错的
function issucess(){
	$("#useName").focus(function(){
		$(this).parent().siblings().html("3~30位，由汉字，字母，数字，点等组成").show();
	    $(this).css("background-color","#78B5F4")
		flag=false;
		
		
	})
	$("#useName").blur(function(){
    var res=/^\w{3,30}$/;
	var usenameval=$("#useName").val();
		if(usenameval.length==0){//当用户名输入为0离开焦点时
			
			$(this).parent().siblings().html("用户名长度在3~30位之间！")
	        $(this).parent().siblings().css("color","red");
	        $(this).css("background-color","#FACE32");
	        flag=false;
		}else{//当输入不为0的时候
			if(res.test(usenameval)){//符合的正则
			$(this).parent().siblings().hide();
			$(this).css("background-color","#FFFFFF");
			flag=true;
			}else{//不符合正则的时候
				
			$(this).parent().siblings().html("用户名格式不对！")
	        $(this).parent().siblings().css("color","red");	
	        $(this).css("background-color","#FACE32");
	       flag=false;
			}
			
		}
	  
	
	})
/*-----------------------登陆密码校验-----------------------*/
 $("#pwd1").focus(function(){
 	
 	$(this).parent().siblings().html("6到16位，建议数字、字母、特殊字符组合！").show();
    $(this).css("background-color","#78B5F4");
    flag=false
 })
	
$("#pwd1").blur(function(){
	var pwd1val=$("#pwd1").val();
	var regpwd=/^.{6,20}$/;
	
	var existNum = /\d/;
					var existLower = /[a-z]/;
					var existUpper = /[A-Z]/;
					var existSymbol = /[^0-9a-zA-Z]/;
					
					var level = 0;
					if(existNum.test(pwd1val)){
						level += 1;
					}
					if(existLower.test(pwd1val)){
						level += 1;
					}
					if(existUpper.test(pwd1val)){
						level += 1;
					}
					if(existSymbol.test(pwd1val)){
						level += 1;
					}
					
	if(pwd1val.length==0){//当输入的密码为0的时候这种情况
		$(this).parent().siblings().html("密码长度应该在6~到16个字符之间！");
		 $(this).parent().siblings().css("color","red");
		 $(this).css("background-color","#FACE32");
		 flag=false
	}else{//不为0的情况下
		if(regpwd.test(pwd1val)){//符合正则的情况下
			if(level==1){
				$(this).parent().siblings().html("您输入的密码过于简单请重新设置");
				$(this).parent().siblings().css("color","red");
			flag=false;
			}else{
				$(this).parent().siblings().hide();
				$(this).css("background-color","#FFFFFF")
				flag=true;
			}
			
		}else{//密码不为0 也不符合6位的时候
			$(this).parent().siblings().html("密码长度应该在6~到16个字符之间！");
			$(this).parent().siblings().css("color","red");
			$(this).css("background-color","#FACE32");
			flag=false;
		}
		
		
	 }
	
	
}




 )

/*-------------------重复密码-----------------------*/
$("#pwd2").focus(function(){

	$(this).css("background-color","#78B5F4");
	flag=false;
})
$("#pwd2").focus(function(){
	var pwd2val=$("#pwd2").val();
	if(pwd2val.length==0){//当输入密码为0的时候
		$(this).parent().siblings().html("请您再输入一次密码").show();
		$(this).parent().siblings().css("color","red");
		$(this).css("background-color","#FACE32");
		flag=false;
		
		
	}else{
		
		if(pwd2val==$("#pwd1").val()){//当两次密码一样的时候
			
		$(this).parent().siblings().hide();
		$(this).css("background-color","#FFFFFF");
		flag=true;
		
		}else{//当2次密码不一样的时候
			$(this).parent().siblings().html("两次输入的密码不一样").show();
		$(this).parent().siblings().css("color","red");
		flag=false;
		}
		
	}
	
	
	
})
	
/*--------------------------电子邮件---------- var REG_EMAIL = /^\w+@\w+(\.\w+)+$/;*/	
$("#email").focus(function(){
	$(this).css("background-color","#78B5F4");
	flag=false;
})
	
 $("#email").blur(function(){
 	 var regemail=/^\w+@\w+(\.\w+)+$/
 	 var emailval=$("#email").val();
 	 if(emailval.length==0){
 	 	$(this).parent().siblings().html("请您输入邮箱地址").show();
		$(this).parent().siblings().css("color","red");
		$(this).css("background-color","#FACE32");
	flag=false;
 	 }else{
 	 	if(regemail.test(emailval)){
 	 		$(this).parent().siblings().hide()
		$(this).css("background-color","#FFFFFF")
	 flag=true;;
 	 	}else{
 	 		$(this).parent().siblings().html("请您输入邮箱地址格式不正确请重新输入").show();
		   $(this).parent().siblings().css("color","red");
		  $(this).css("background-color","#FACE32");
		flag=false;
 	 	}
 	 	
 	 }
 	
 	
 })
 /*------------------验证码部分------------------------*/
	$(".ma").click(function(){
       var arr=[0,1,2,3,4,5,6,7,8,9];
       var str="";
       for(i=0;i<4;i++){
       	var index=parseInt(Math.random()*arr.length);
       	str=str+arr[index]
       }
		$(".ma").html(str)
		
		
	})
	
	$("#yzm2").focus(function(){
		$(this).css("background-color","#78B5F4")
	flag=false;
		
	})
	$("#yzm2").blur(function(){
		var yzm2val=$("#yzm2").val();
		if(yzm2val.length==0){
			
			$(this).parent().siblings().html("请您输入验证码").show();
		   $(this).parent().siblings().css("color","red");
		  $(this).css("background-color","#FACE32");
		 flag=false;
		}else{//不为0的情况下
			if(yzm2val==$(".ma").html()){
				$(this).parent().siblings().hide();
				$(this).css("background-color","#FFFFFF");
			flag=true;
			}else{
				$(this).parent().siblings().html("请您输的验证码不正确请重新输入").show();
		       $(this).parent().siblings().css("color","red");
		      $(this).css("background-color","#FACE32");
		  flag=false;
			}
			
			
			
			
		}
		
		
	})
	return flag;
	 }
 var flag=issucess();
/*---------------------------用户协议部分--------------------------*/
	
	$("#zc").click(function(){
		var xy=document.getElementById("xy")
		console.log($(".xp input"))
	     if(xy.checked){
	    $("#xy").siblings($("span")).hide()
	    if(flag){
	    	location.href="registersucess.html"
	    }
	    
	    
		}else{
		   $("#xy").siblings().eq(1).html("[请同意协议]")
		    $("#xy").siblings().eq(1).css("color","red")
		    // $("#xy").parent().lastChild().css("color","red")
		}
		
	})
	
	//总结，使用开关思想，实现数据追踪

	
	
	/*----------------------使用cookie进行储存用户名-------------------*/
	     /*   var usn=$("#useName").val();
  			var pwd=$("#pwd1").val();
  			
  	
  			var useStr=$.cookie("resgisteruser")?$.cookie("resgisteruser"):"{}";
  			var useObj=JSON.parse(useStr);
  			if(usn in useObj){
  				alert("该用户已注册");
  				return;
  			}else{
  				useObj[usn]=pwd;
  				useStr=JSON.stringify(useObj);
  				$.cookie("resgisteruser",useStr,{expires:7,path:"/"});
  			
  				
  			}

  		
	
	
	*/
	
	
	
	
	
	
})
