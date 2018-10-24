window.onload = function(){
				var oOl = document.getElementById("ol1");
			$("#li1").mouseover(function(){
				oOl.style.display = "block";
			})
			$("#li1").mouseout(function(){
				oOl.style.display = "none";
			})
			var oli2 = document.getElementById("liol");
			var oOll = document.getElementById("ol2");
			oli2.onmouseover = function(){
				oOll.style.display = "block";
			}
			oli2.onmouseout = function(){
				oOll.style.display = "none";
			}
			var oli3 = document.getElementById("liol3");
			var oOl3 = document.getElementById("ol3");
			oli3.onmouseover = function(){
				oOl3.style.display = "block";
			}
			oli3.onmouseout = function(){
				oOl3.style.display = "none";
			}


			
			var oli21 = document.getElementById("liol1");
			var oOll1 = document.getElementById("ol21");
			oli21.onmouseover = function(){
				oOll1.style.display = "block";
			}
			oli21.onmouseout = function(){
				oOll1.style.display = "none";
			}
			var oli31 = document.getElementById("liol31");
			var oOl31 = document.getElementById("ol31");
			oli31.onmouseover = function(){
				oOl31.style.display = "block";
			}
			oli31.onmouseout = function(){
				oOl31.style.display = "none";
			}



			var onav1 = document.getElementById("nav1");
			window.onscroll = function(){
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (osTop > 190) {
				  onav1.style.display = 'block';
	        }else{         //否则隐藏
	             onav1.style.display = 'none';

				}
				 
			}



				var ologin1 = document.getElementById('login1');
				var ologin2 = document.getElementById("login2");
				var obigbox = document.getElementById('bigbox');
				var oadX = document.getElementById("adX");
				var oadX1 = document.getElementById("adX1");
				
			
				oadX .onclick = function(){
					ologinMsg .style.display = 'none';
					oregisterMsg.style.display = 'none';
					obigbox.style.display = "none";
					ologin1.innerHTML = "登录";
					 ologin2.innerHTML = "注册";
				}
				oadX1 .onclick = function(){
					ologinMsg .style.display = 'none';
					oregisterMsg.style.display = 'none';
					obigbox.style.display = "none";
					ologin1.innerHTML = "登录";
					 ologin2.innerHTML = "注册";
				
				}

				ologin1.onclick = function(){
					ologinMsg .style.display = 'block';
					obigbox.style.display = "block";
					 
				}
				ologin2.onclick = function(){
					oregisterMsg.style.display = 'block';
					obigbox.style.display = "block";
					 
				}
				var oLogin = document.getElementById('login');
				var oRegister = document.getElementById("register");
				var olog1 = document.getElementById('log1');
				var oreg1 = document.getElementById('reg1');
				var ologinMsg = document.getElementById('loginMsg');
				var oregisterMsg = document.getElementById('registerMsg');


				
				//立即注册
				olog1.onclick = function(ev){
					var e = ev || window.event;
					preDef(e);
					
					ologinMsg .style.display = 'none';
					oregisterMsg.style.display = 'block';
				}
				//立即登陆
				oreg1.onclick = function(ev){
					
					var e = ev || window.event;
					preDef(e);
					ologinMsg .style.display = 'block';
					oregisterMsg.style.display = 'none';
				}


				



				//登陆
				oLogin.onclick = function(){
					var usern = document.getElementsByName("username")[0];
					var passw = document.getElementsByName("password")[0];
					var str = `username=${usern.value}&password=${passw.value}`;
					alert( str);

					ajax({
						method: "post",
						url: "php/test.php?type=login",
						data: str, 
						success: function(data){
							alert(data);
							if(data =="登陆成功"){
								ologinMsg .style.display = 'none';
								obigbox.style.display = "none";
								 ologin1.innerHTML = "您好";
								 ologin2.innerHTML = "已登陆";
							}
						},
						error: function(msg){
							alert(msg);
						}
					})
				}


				//注册
				oRegister.onclick = function(){
					var usern = document.getElementsByName("username")[1];
					var passw = document.getElementsByName("password")[1];
					var repassw = document.getElementsByName("repassword")[0];
					var str = `username=${usern.value}&password=${passw.value}&repassword=${repassw.value}`;
					// var str = `username=${$("name=username")[1].value}&password=${$("name=password")[1].value}&repassword=${$("name=repassword")[0].value}`;
					alert(str);
					ajax({
						method: "post",
						url: "php/test.php?type=register",
						data: str,
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					})
				}
}