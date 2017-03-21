/*------------------二级菜单-------------------------------*/
	window.onload=function(){
	
	
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
	

}