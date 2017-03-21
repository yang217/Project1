
$(function(){
var res=/^[a-zA-Z]\w{5,17}$/;

$("#change").click(function(){
 	
  if($("#ypwd").val().length==0){
  	
  	$("#ytext").html("请输入原密码");//当原密码是空时候显示这个
  		
  }else{//不为空的时候
  	$("#ytext").html("")//先把原密码那两的提示清空
  	 if($("#xpwd").val().length==0){
  	 	$("#xtext").html("新密码不符合规则，6～16位，建议使用字母、数字、特殊字符组合")
  	 }if(res.test($("#xpwd").val())){//新密码符合这个正则的时候
  	 		console.log($("#ypwd").val())
  	 		console.log($("#xpwd").val())
  	 		if($("#ypwd").val()==$("#xpwd").val()){//如果新密码和旧密码相同的时候
  	 			$("#xtext").html("新密码和旧密码不能相同")
  	 			$("#xtext").show();
  	 		}else{
  	 			$("#xtext").html("")
  	 			 if($("#xpwd").val()!=$("#rpwd").val()){//确认的密码和新密码不一致的时候
  	 	 		
  	 	 		console.log($("#rpwd").val())
  	 	 		$("#rtext").html("两次密码不一致")
  	 	 	}else{
  	 	 		location.href="registersucess.html"
  	 	 	}
  	 	
  	 		}
  	 		
  	 	
  	 	
  	 }
  	
  	
  	
  	
  	
  	
  	
  	
  	
  	
  }

       















           })//点击事件结尾
 	
 })//准备函数的结尾