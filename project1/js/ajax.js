function ajax(method, url, sucFn, data){
	var xhr = null;
	if(window.XMLHttpRequest){ 
		xhr = new XMLHttpRequest();
	} else {
		xhr = ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				sucFn(xhr.responseText);
			} else {
				alert("服务器出错，错误码是：" + xhr.status);
			}
		}
	};
	
	// data参数作为可选项（可传可不传）
	data = data ? data : "";
	if(method.toUpperCase() == "GET"){
		xhr.open(method, url + "?" + data, true);
		xhr.send();
	} else {
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}	
}