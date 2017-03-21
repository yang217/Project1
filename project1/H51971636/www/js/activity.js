
$(function(){
	
	
	
	
	
	
	/*------------倒计时部分--------------------*/
function getDiff(start,end){
			// 剩余多少分钟零多少秒零多少毫秒
			var sMs = start.getTime(); //起始时间的总毫秒数
			var eMs = end.getTime(); //结束时间的总毫秒数
			var temp = eMs-sMs;  //两个时间的总毫秒差值
			//1s = 1000ms    
			var ms = temp%1000; //剩余的毫秒数
			var totalSeconds = parseInt(temp/1000); //转换后的总秒数
			var ss = totalSeconds%60; //剩余的秒
			var totalMinutes = parseInt(totalSeconds/60) //剩余的总分钟
			var mm = totalMinutes%60;  //剩余的分钟
			var totalHours = parseInt(totalMinutes/60); //表示剩余的总小时
			var  hh=totalHours%24;//剩余的小时
			var  totalday=parseInt(totalHours/24)
			return  {ms:ms,ss:ss,mm:mm,hh:hh,totalday:totalday};

		}
		
	     	var res= $(".being .bxs")
			var eTime = new Date("2016/11/11");
		setInterval(function(){
			
			
			var sTime = new Date();
			var obj = getDiff(sTime,eTime)
			var desc = "剩余" +"<i>"+obj.totalday+"</i>"+"天"+"<i>"+obj.hh+"</i>" + "小时" + "<i>"+obj.mm+"</i>" + "分钟" + "<i>"+obj.ss+"</i>" + "秒";
			$(".being .bxs").html("剩余" +"<i>"+obj.totalday+"</i>"+"天"+"<i>"+obj.hh+"</i>" + "小时" + "<i>"+obj.mm+"</i>" + "分钟" + "<i>"+obj.ss+"</i>" + "秒")
			
		},1);
	//倒计时一个判断
	
	/*$(".end dl").hover(function(){$(".mask").show()},
	function(){
		
	$(".mask").hide()
		
	}
	
	
	)*/
	
/*$(".end dl").mouseover(function(){
	
	

	$(".end .mask").eq($(this).index).show();
		console.log($(".end .mask").eq($(this).index))
	
})*/
//var masks=$(".mask");
//var end=$("#end")
//console.log(masks)
//var dls=$("dl");
/*for(i=0;i<dls.length;i++){
	dls[i].index=i;
	
	dls[i].onmouseover=function(){
		for(j=0;j<dls.length;j++){
			masks.className="mask"
		}
	
	masks[this.index].className="mask active"
		
	}
	
	dls[i].onmouseout=function(){
		masks[this.index].className="mask"
	}
	
}
	*/
	
	$("dl").each(function(){
		
		$(this).mouseover(function(){
			index=$(this).index()-1;
		$(".mask").eq(index).addClass("active").siblings().removeClass("active")
			
		})
		$(this).mouseout(function(){
			index=$(this).index();
		$(".mask").removeClass("active")
			
		})
		
	})
	
	
	
	
	
	
	
	
	
	
	
})

