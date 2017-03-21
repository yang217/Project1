window.onload = function (){
	
	
	
	
	
	
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
				var allData = null;
				var sele1 = document.getElementById('sele1');
				var sele2 = document.getElementById('sele2');
				var sele3 = document.getElementById('sele3');
			
				
					
					ajax("GET", "data/allCity.json", function (data){
						
						allData = JSON.parse(data);
					
						loadProvince();
					});
			
				
				function loadProvince(){
					
					var provs = allData.regions;
				
					sele1.innerHTML = '<option value="">请选择省份</option>';
				
					for(var i = 0; i < provs.length; i++){
					
						var provName = provs[i].name;
						
						var opt = document.createElement('option');
						opt.innerHTML = provName;
					
						sele1.appendChild(opt);
					}
					
					sele1.onchange = function (){
						sele3.innerHTML = '<option value="">请选择区县</option>';
						loadCities(this.value);
					}
				}
				
				function loadCities(provName){
					
					sele2.innerHTML = '<option value="">请选择地市</option>';
					if(!provName){
						return;
					}
				
					var provs = allData.regions;
					
					for(var i = 0; i < provs.length; i++){
						if(provs[i].name == provName && provs[i].regions){ 
							
							var cities = provs[i].regions;
						
							for(var j = 0; j < cities.length; j++){
								
								var opt = document.createElement('option');
								
								opt.innerHTML = cities[j].name;
								
								sele2.appendChild(opt);
							}
							
							break;
						}
					}
					
					
					sele2.onchange = function (){
						
						loadCounties(provName, this.value);
					};
				}
				
				function loadCounties(provName, cityName){
					
					sele3.innerHTML = '<option value="">请选择区县</option>';
					if(!provName || !cityName){
						return;
					}
					var provs = allData.regions;
					
					for(var i = 0; i < provs.length; i++){
						if(provName == provs[i].name){ 
							var cities = provs[i].regions;
							for(var j = 0; j < cities.length; j++){
								if(cities[j].name == cityName){
									var counties = cities[j].regions;
									
									for(var k = 0; k < counties.length; k++){
										
										var opt = document.createElement("option");
										opt.innerHTML = counties[k].name;
										
										sele3.appendChild(opt);
									}
									break;
								}
							}
							break;
						}
					}
				}
				
			};