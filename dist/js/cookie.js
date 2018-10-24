$(function(){
	
	





	
	 sc_msg();
	  sc_car();
	  
	  
	$("#addspc").on("click", ".spc_span" ,function(){

			// ballMove(this);
			
			//获取到当前加入购物车按钮所在的商品id
			var id = this.id;
			
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);

					$.cookie('goods', cookieStr, {expires: 7});
				}
			}
			sc_car();
			 sc_msg();
			

		})


	$(".sc4").on("click", ".sc44" ,function(){
		
		var id = this.id;
		
	
		id  = parseInt(id);
		var str = $.cookie('goods');
				var arr = eval(str);
				 // alert(arr[i].id);
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过

						//1 2
						   // 0 1
						arr.splice(i,1); 
						
						var cookieStr = JSON.stringify(arr);
							
						$.cookie('goods', cookieStr, {expires: 7});
						
						break;
					}

				}
			
				var oh21 = document.getElementById('sc4211');
					  	var oh221 = document.getElementById('sc42221');
						var oh22 = document.getElementById('sc4212');
						var oh222 = document.getElementById('sc42222');
						var oTotal = document.getElementById('Total');
	 					var oTotal1 = document.getElementById('Total1');
	 					if(oh22  && oh21 ){
							 oh21.innerHTML ="￥"+ oh221.innerHTML *799 + ".00";
							 oh22.innerHTML ="￥"+ oh222.innerHTML *799 + ".00";
							oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  (parseInt(oh221.innerHTML) *799 + parseInt(oh222.innerHTML) *799)+".00";
			 				  oTotal1.innerHTML="￥"+  (parseInt(oh221.innerHTML) *799 + parseInt(oh222.innerHTML) *799 -130)+".00";
					}
						
	 					 else 	if(oh21){
	 				 oh21.innerHTML ="￥"+ oh221.innerHTML *799 + ".00";
	 				oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  ( parseInt(oh221.innerHTML) *799)+".00";
			 				  oTotal1.innerHTML="￥"+  ( parseInt(oh221.innerHTML) *799 -130)+".00";				
			 				}
			 		  else  if(oh22){
					  	 oh22.innerHTML ="￥"+ oh222.innerHTML *799 + ".00"; 
					  	 oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  (parseInt(oh222.innerHTML) *799 )+".00";
			 			 oTotal1.innerHTML="￥"+  ( parseInt(oh222.innerHTML) *799 -130)+".00";

					}else{
						oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+0+".00";
			 			 oTotal1.innerHTML="￥"+  0+".00";

					}



				 
				


					sc_car();
					
					if(id == 1){
					var oid = document.getElementById("11");	
				}else if(id ==2){
					var oid = document.getElementById("21");	

				}
				
				
				oid.style.display = "none";
				var oid1 = document.getElementById("11");
				var oid2 = document.getElementById("21");
				if($.cookie("goods") ==[]){
						 clearAllCookie();
					
					}
					
				})
})
	


function sc_car(){
			var str = $.cookie("goods");
		// alert(str);
			if(str){
				var arr = eval(str);

				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					 // sum = parseInt(arr[i].num) + parseInt($("#sd2").html()) ;
					sum += arr[i].num;
				}

			
				$(".cirle1").html(sum);
				$(".cirle").html(sum);
				// alert(arr[i].num);		
				 // alert($("#sd2").html());
				 // alert(sum);
				 $("#sd2").html(1) ;
			}
		}



		function sc_msg(){
			$.ajax({
				url: 'data/good4.json',
				success: function(arr){
					$(".sc4").html("");
					//在所有商品信息里面找出，加入购物车的商品信息
					var cookie_arr = eval($.cookie('goods'));
				// alert(cookie_arr.length);

					for(var i = 0; i < cookie_arr.length; i++){
						$(`<div class="sc40" id = "${cookie_arr[i].id}1">
						
					
						<input type="checkbox" >
						<img src="http://yanxuan.nosdn.127.net/d6532bec6af1e3961f0200584d9f96b5.png?quality=95&thumbnail=200x200&imageView" alt="">
						<div class="sc41"><span>${arr[i].goods}</span>
						<select name="" id=""><option value="">黑色</option>
						<option value="">白色</option></select>
						</div>
						<h1>${arr[i].price}</h1>
						<div class="sc42">
							<div id = "sc4221">-</div>
							<div id="sc4222${cookie_arr[i].id}">${cookie_arr[i].num}</div>
							<div id="sc4223">+</div>
						</div>
						<h2 id="sc421${cookie_arr[i].id}">0.00</h2>
						<div class="sc43">
						<h3><a href="">移入收藏夹</a></h3>
						<h4  class="sc44" id = "${cookie_arr[i].id}">删除</h4>
						</div>
					</div>`).appendTo($(".sc4"));


					}var oh21 = document.getElementById('sc4211');
					  	var oh221 = document.getElementById('sc42221');
						var oh22 = document.getElementById('sc4212');
						var oh222 = document.getElementById('sc42222');
						var oTotal = document.getElementById('Total');
	 					var oTotal1 = document.getElementById('Total1');
	 					if(oh22  && oh21 ){
							 oh21.innerHTML ="￥"+ oh221.innerHTML *799 + ".00";
							 oh22.innerHTML ="￥"+ oh222.innerHTML *799 + ".00";
							oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  (parseInt(oh221.innerHTML) *799 + parseInt(oh222.innerHTML) *799)+".00";
			 				  oTotal1.innerHTML="￥"+  (parseInt(oh221.innerHTML) *799 + parseInt(oh222.innerHTML) *799 -130)+".00";
					}
						
	 					 else 	if(oh21){
	 				 oh21.innerHTML ="￥"+ oh221.innerHTML *799 + ".00";
	 				oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  ( parseInt(oh221.innerHTML) *799)+".00";
			 				  oTotal1.innerHTML="￥"+  ( parseInt(oh221.innerHTML) *799 -130)+".00";				
			 				}
			 		  else  if(oh22){
					  	 oh22.innerHTML ="￥"+ oh222.innerHTML *799 + ".00"; 
					  	 oTotal.innerHTML="商品合计&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥"+  (parseInt(oh222.innerHTML) *799 )+".00";
			 			 oTotal1.innerHTML="￥"+  ( parseInt(oh222.innerHTML) *799 -130)+".00";

					}
						
					
					
	 				 	
	 				
	 				
	 				
	 				  // oSd111();
	 				
	 				  /*var osd44 = document.getElementById("sc44");
						 osd44.onclick = function(){
						 	document.cookie = encodeURIComponent(goods) + "=;expires=" + new Date(0);
						 }*/
					

				}
			})
		}

		function clearAllCookie() {
				var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
				if(keys) {
					for(var i = keys.length; i--;)
						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
				}
			}

				
	