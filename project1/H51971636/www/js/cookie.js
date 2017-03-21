// 封装函数对cookie进行增删改查四项操作
function setCookie(name, value, expiresdays){
	// document.cookie
	// 设置cookie的时候只要给document.cookie这个属性
	// “赋值”一个固定格式的字符串
	// 固定格式：      "NAME=VALUE;expires=日期的GMT格式的字符串"
	var exp = new Date(); // 获取当前时间
	// 生成expiresdays天数之后的日期对象
	exp.setDate(exp.getDate() + expiresdays); 
	// 设置cookie
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString(); 
}

function getCookie(name){
	// 访问document.cookie属性拿到所有cookie的字符串
	var myCookie = document.cookie;
	// "test=123456; test2=abcde; test3=333333"
	// 用分号和空格将cookie字符串隔开，拿到每一对name和value
	var cookies = myCookie.split("; ");
	// 遍历这些name和value对
	for(var i = 0; i < cookies.length; i++){
		// 用=号分隔name和value
		var data = cookies[i].split("=");
		// 比较一下name是不是想要找的那个
		if(name == data[0]){
			return decodeURIComponent(data[1]);
		}
	}
	
	// 代码运行到这儿的话，说明没有所要查询的cookie
	return "";
}

function getCookie2(name){
	// "test=123456; test2=abcde; test3=333333"
	// /abcde|rfgh/   "abcde" "rfgh"
	// /abcd(e|r)gfh/ "abcdegfh" "abcdrgfh"
	var pattern = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	
	var myCookie = document.cookie;
	// match方法返回一个数组， 第一项是正则匹配到的整个内容
	// 从第二项开始，分别是第1个分组、第2个分组。。。的内容
	if(pattern.test(myCookie)){
		var res = myCookie.match(pattern)[2];
	
		return decodeURIComponent(res);
	} 
	return "";
}

function removeCookie(name){
	// 使cookie在当前时间之前过期，就可以将它删除
	setCookie(name, "", -1);
}