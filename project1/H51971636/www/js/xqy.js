window.onload=function(){
	/*------------------二级菜单-------------------------------*/
	
	
	
	var meau=document.getElementById("meau")
	var contain=document.getElementById("contain");
	var btns=meau.getElementsByClassName("item");
	var lis=contain.getElementsByClassName("list");
	var p1=document.getElementById("p1");
	p1.onmouseover=function(){
	  contain.style.display="block";
	}
	
	for(i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onmouseover=function(){
			for(j=0;j<btns.length;j++ ){
				
				btns[j].className="item";
				lis[j].className="list"
			}
			 this.className="item active";
			 lis[this.index].className="list active";
			 lis[this.index].style.top=this.index*70+"px"
			 
			 
			
		}
		
		
		
		
	}
	contain.onmouseleave=function(){
			for(j=0;j<btns.length;j++ ){
				
				btns[j].className="item";
				lis[j].className="list"
				
			}
			contain.style.display="none";
		
			
	}
	
/*--------------------------放大镜部分-------------------------方案1--
var smllbox=document.getElementById("smallbox");
var fdl=document.getElementById("fdl");
var imgs=fdl.getElementsByTagName("img");


var box=document.getElementById("box");
var tool=document.getElementById("tool");
var bigimg=box.getElementsByTagName("img")
console.log(bigimg)
	for(i=0;i<imgs.length;i++){
		imgs[i].index=i+1;
		imgs[i].onmouseover=function(){
			console.log(this)
			smllbox.innerHTML='<img src="' + "imagexq/fdj" +this.index+ '.jpg" />';
			box.innerHTML='<img src="' + "imagexq/fdj" +this.index+ '.jpg" />';
		}
		
		
		
	}
	
	
	
	*/
	var btn=document.getElementById("fdl");
	var btns=btn.getElementsByTagName("img");
	
	var smallbox=document.getElementById("smallbox");
	var simgs=smallbox.getElementsByTagName("img");
	
	var box=document.getElementById("box");
	
	var bigimg=document.getElementById("bigimg");
	
	console.log(bigimg)
	var tool=document.getElementById("tool")
	for(i=0;i<btns.length;i++){
		btns[i].index=i;
		btns[i].onmouseover=function(){
		for(j=0;j<btns.length;j++){
			simgs[j].className="";
		}
		simgs[this.index].className="active";
		box.innerHTML='<img src="' + "imagexq/fdj" +(this.index+1)+ '.jpg" />';
		
			
	   smallbox.onmousemove=function(e){
		 evt=e||window.event;
		 l=evt.clientX-smallbox.offsetLeft-tool.offsetWidth/2;
		 t=evt.clientY-smallbox.offsetTop-tool.offsetHeight/2;
		if(l<0){
			l=0
		}if(l>smallbox.offsetWidth-tool.offsetWidth){
			l=smallbox.offsetWidth-tool.offsetWidth
		}if(t<0){
			t=0
		}if(t>smallbox.offsetHeight-tool.offsetHeight){
			t=smallbox.offsetHeight-tool.offsetHeight
		}
		
		//tool.style.left=l+"px";
		//tool.style.top=t+"px";
		
		var  a=-4*l+"px";
		var b=-4*t+"px";
		//console.log(a)
		$("#tool").css("left",l+"px")
		$("#tool").css("top",t+"px")
		$("#box img").css("left",a)
		$("#box img").css("top",b)
		//bigimg.style.left=-4*l+"px";
		
		//bigimg.style.top=-4*t+"px";

	}
	

	
	
		
		
		
		
	}
	
	}
   smallbox.onmouseover=function(){
		console.log(1)
		tool.className="tool active";
		box.className="box active";
		
		
		
	}
   
	smallbox.onmouseout=function(){
		tool.className="tool";
		box.className="box";
		//console.log(2)
		
		
		
	}
/*----------------------------详情页tab切换部分------------------*/
   //var res= $("#main_r li");
   //console.log(res)
	//var res= $("#main_r .item");
	//console.log(res)
	
	$("#main_r li").mouseover(function(){
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		
		
		
		
	})
	$("#main_r li").click(function(){
		
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$("#main_r .item").eq(index).addClass("active").siblings().removeClass("active");
		
	})
	/*----------------------------------购物车js---------------------------------*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

/*-------------------回到顶部js部分------------------------------------*/
var side=document.getElementById("side");
var db=document.getElementById("db");
 console.log(db)

 db.onclick=function(){
  move(0)
}
 var timper;
 
 var isSrolling=true;//代表正则滚动
 function move(target) {//封装一个回到顶部的函数
 	clearInterval(timper)
 	timper=setInterval(function(){
 		
 	var st=document.documentElement.scrollTop || document.body.scrollTop;
 	console.log(st)
 		var speed=(target-st)/8
 		speed=speed>0?Math.ceil(speed):Math.floor(speed);
 		if(target==st){
 			clearInterval(timper)
 			return;
 		}
 	  	document.documentElement.scrollTop=st+speed;
 	  	document.body.scrollTop=st+speed;
 	  	isSrolling=true;
 	  },30)
 	
 	
 	
 	
 }
 
 window.onscroll=function(){//滚动的时候
 	var st=document.documentElement.scrollTop || document.body.scrollTop;
 		if(st<=300){
 		db.className="db hide"
 		console.log(1)
 		}else{
 				db.className="db active"
 			console.log(2)
 		}
 		if(!isSrolling){
 			clearInterval(timper);
 			return;
 			
 		}
 		isSrolling=false;//因为move的滚动每次都是把issrolling变成true的,
 		//但是设置的一滚动看是false，如果此时变为false说明是非move也就是鼠标滚轮造成的，这个定时器也会随之停止
 }
 
 /*---------------------------列表顶在浏览器顶端效果--------------------------------------*/


var mainul=document.getElementById("mainul")
var res=mainul.offsetTop;
var lastli= mainul.getElementsByClassName("last");

window.onscroll=function(){

	var st=document.documentElement.scrollTop||document.body.scrollTop;
	if(st>res){
		mainul.style.position="fixed"
		mainul.style.top=0;
	   $("#main_r .last").show()
		
	}else{
		mainul.style.position="absolute"
		mainul.style.top=res+"px";
		  $("#main_r .last").hide()
	}
	
	
	
	
}

//http://www.no5.com.cn/product/31180.html
	
}
