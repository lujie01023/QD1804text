window.onload = function(){
			
			var oOl = document.getElementById("ol1");
			$("#li1").mouseover(function(){
				$("#ol1").css("display" , "block");
			})
			$("#li1").mouseout(function(){
				$("#ol1").css("display" , "none");
			})
			var oli2 = document.getElementById("liol");
			var oOll = document.getElementById("ol2");
			oli2.onmouseover = function(){
				$("#ol2").css("display" , "block");
			}
			oli2.onmouseout = function(){
					$("#ol2").css("display" , "none");
			}
			var oli3 = document.getElementById("liol3");
			var oOl3 = document.getElementById("ol3");
			oli3.onmouseover = function(){
					$("#ol3").css("display" , "block");
			}
			oli3.onmouseout = function(){
				$("#ol3").css("display" , "none");
			}


			
			var oli21 = document.getElementById("liol1");
			var oOll1 = document.getElementById("ol21");
			oli21.onmouseover = function(){
				$("#ol21").css("display" , "block");
			}
			oli21.onmouseout = function(){
				$("#ol21").css("display" , "none");
			}
			var oli31 = document.getElementById("liol31");
			var oOl31 = document.getElementById("ol31");
			oli31.onmouseover = function(){
				$("#ol31").css("display" , "block");
			}
			oli31.onmouseout = function(){
				$("#ol31").css("display" , "none");
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

			
			


			



		}

