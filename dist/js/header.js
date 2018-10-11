window.onload = function(){
			var oli1 = document.getElementById("li1");
			var oOl = document.getElementById("ol1");
			oli1.onmouseover = function(){
				oOl.style.display = "block";
			}
			oli1.onmouseout = function(){
				oOl.style.display = "none";
			}
			var oUl2 = document.getElementById("liol");
			var oOll = document.getElementById("ol2");
			oUl2.onmouseover = function(){
				oOll.style.display = "block";
			}
			oUl2.onmouseout = function(){
				oOll.style.display = "none";
			}
		}