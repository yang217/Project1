/*-----------二级菜单--------------*/

window.onload=function(){
	var meau=document.getElementById("meau")
	var contain=document.getElementById("contain");
	var btns=meau.getElementsByClassName("item");
	var lis=contain.getElementsByClassName("list")
	
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
			
	}
	
/*------------------购物------------*/

	/*----------------轮播----------------*/
	var lunbo=document.getElementById("lunbo");
var con=document.getElementById("con");
var imgs=lunbo.getElementsByTagName("img");
var cons=con.getElementsByTagName("li");
var index=0;
var timper;

function setImg(ind){
	for(i=0;i<imgs.length;i++){
		imgs[i].className="";
	}
	imgs[ind].className="active";
}
function setBtn(ind){
	for(i=0;i<cons.length;i++){
		cons[i].className="";
	}
	cons[ind].className="active";
}
	setImg(0);
	setBtn(0)
function setCons(){
	index++
	if(index>=cons.length){
		index=0;
	}
	setImg(index);
	setBtn(index)
	
}

clearInterval(timper)
 timper=setInterval(function(){
	setCons()
},800)



for(var k=0;k<cons.length;k++){//注意ul的层机 在最上面点才有效果
	cons[k].index=k;
	cons[k].onmouseover=function(){
		
		clearInterval(timper);
		index=this.index;
		setImg(index);
		setBtn(index)
	  clearInterval(timper);
	}
	cons[k].onmouseout=function(){
		clearInterval(timper) 
	timper=setInterval(setCons,800)
	}
	
	
}
/*-------------------------notice------------------------------*/
var notice=document.getElementById("notice");
var p=notice.getElementsByTagName("p");

  notice.onclick=function(){
 	console.log(this)
	alert(1)
	
}


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
			return  {ms:ms,ss:ss,mm:mm,totalHours:totalHours};

		}
		var djs=document.getElementsByClassName("djs")
		var djs1=document.getElementById("djs1");
		console.log(djs1)
		var djs2=document.getElementById("djs2");
		console.log(djs2)
		var djs3=document.getElementById("djs3");
		var djs4=document.getElementById("djs4");
			var eTime = new Date("2016/11/11");
		setInterval(function(){
			var sTime = new Date();
			var obj = getDiff(sTime,eTime)
			var desc = "剩余" + obj.totalHours + "小时" + obj.mm + "分钟" + obj.ss + "秒";
			djs1.innerHTML = desc;
			djs2.innerHTML = desc;
			djs3.innerHTML = desc;
			djs4.innerHTML = desc;
		},1);
	

	

/*----------------tab操作----------------------*/
var tab=document.getElementById("tab");
var btn2s=tab.getElementsByTagName("li");

var item2s=document.getElementsByClassName("item2")
for(i=0;i<btn2s.length;i++){
	btn2s[i].index=i;
	btn2s[i].onmouseover=function(){
	  for(j=0;j<btn2s.length;j++){
	  	btn2s[j].className="";
	  	item2s[j].className="item2"
	  }
		this.className="active";
		item2s[this.index].className="item2 active"
		
	}
	btn2s[i].onmouseout=function(){
	   btn2s[i].className=""
		this.className="active";
	}
	
	
}
/*------------推销部分---------------*/
var hfr=document.getElementById("hfr");
var hflis=hfr.getElementsByTagName("li");
var hfdls=hfr.getElementsByTagName("dl");
for(i=0;i<hflis.length;i++){
	hflis[i].index=i;
	hflis[i].onmouseover=function(){
		for(j=0;j<hflis.length;j++){
			hflis[j].className="";
		
		}
		this.className="active";
		
	   
	}
	
	
}
/*----------------彩妆部分---------------------------*/
var czr=document.getElementById("czr");
var czlis=czr.getElementsByTagName("li");
var czls=czr.getElementsByTagName("dl");
for(i=0;i<czlis.length;i++){
	czlis[i].index=i;
	czlis[i].onmouseover=function(){
		for(j=0;j<czlis.length;j++){
			czlis[j].className="";
		
		}
		this.className="active";
		
	   
	}
	
	
}
/*--------------------香水部分---------------------------*/
var xsr=document.getElementById("xsr");
var xslis=xsr.getElementsByTagName("li");
var xsls=xsr.getElementsByTagName("dl");
for(i=0;i<xslis.length;i++){
	xslis[i].index=i;
	xslis[i].onmouseover=function(){
		for(j=0;j<xslis.length;j++){
			xslis[j].className="";
		
		}
		this.className="active";
		
	   
	}
	
	
}
/*----------------男士部分-----------------*/
var nsr=document.getElementById("nsr");
var nslis=nsr.getElementsByTagName("li");
var nsls=nsr.getElementsByTagName("dl");
for(i=0;i<nslis.length;i++){
	nslis[i].index=i;
	nslis[i].onmouseover=function(){
		for(j=0;j<nslis.length;j++){
			nslis[j].className="";
		
		}
		this.className="active";
		
	   
	}
	
	
}
/*------------------美体美发----------------*/
var mtr=document.getElementById("mtr");
var mtlis=mtr.getElementsByTagName("li");
var mtls=mtr.getElementsByTagName("dl");
for(i=0;i<mtlis.length;i++){
	mtlis[i].index=i;
	mtlis[i].onmouseover=function(){
		for(j=0;j<mtlis.length;j++){
			mtlis[j].className="";
		
		}
		this.className="active";
		
	   
	}
	
	
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
 /*-----------------------------      ------------------------------*/
 


}