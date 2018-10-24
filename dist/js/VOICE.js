



$(function(){
		new TabSwitch("Vc2");

	
	// 	$("#Voimg1").click = function(){
	// 		$("#Voimg2").style.border = "1px solid #eee";
	// 		$("#Voimg1").style.border = "1px solid gold";
	// }
	// 	$("#Voimg2").click = function(){
	// 		$("#Voimg1").style.border = "1px solid #eee";
	// 		$("#Voimg2").style.border = "1px solid gold";
	// }
	var oVoimg1 = document.getElementById('Voimg1');
	var oVoimg2 = document.getElementById('Voimg2');
	oVoimg1.onclick = function(){
		oVoimg1.style.border = "1px solid gold";
		oVoimg2.style.border = "1px solid #eee";
	}
	oVoimg2.onclick = function(){
		oVoimg1.style.border = "1px solid #eee";
		oVoimg2.style.border = "1px solid gold";
	}

	var oSd1 = document.getElementById("sd1");
	var oSd2 = document.getElementById("sd2");
	var oSd3 = document.getElementById("sd3");
	oSd1.onclick = function(){
		oSd2.innerHTML--;
		if (oSd2.innerHTML <= 1) {
			oSd2.innerHTML =1;
		}
	}
	oSd3.onclick = function(){
		oSd2.innerHTML++;
		 
	}
	
	
	var oimgbox = document.getElementById('imgbox');
	drag(oimgbox);
})





function drag(node){
	var offsetX = 0;
	var offsetY = 0;  //用于记录相对距离
	
	var oimgbox1 = document.getElementById('imgbox1');
	var oVcimg2 = document.getElementById('Vcimg2');
	//1、按下
	node.onmousedown = function(ev){
		var e = ev || window.event;
		offsetX = e.clientX - this.offsetLeft;
		offsetY = e.clientY - this.offsetTop;
		// oimgbox.style.display ="block"; 
		//2、移动
		document.onmousemove = function(ev){
			oimgbox1.style.display = "block";
			var e = ev || window.event;
			node.style.left = e.clientX - offsetX + 'px';
			node.style.top = e.clientY - offsetY + 'px';
			oVcimg2.style.left  =	-(e.clientX - offsetX)*3 + "px";  
			oVcimg2.style.top  = -(e.clientY - offsetY) * 3+ "px";
			if(e.clientX - offsetX <= 0){
				node.style.left = 0 + 'px';
				 oVcimg2.style.left = 0 + "px";
			}else if(e.clientX - offsetX >= 286){
				node.style.left = 286+ 'px'; 
				oVcimg2.style.left = -286 * 3 + "px";
			}
			if(e.clientY - offsetY <= 0){
				node.style.top = 0 + 'px';
				 oVcimg2.style.top = 0 + "px";
			}
			else if(e.clientY - offsetY >= 286){
				node.style.top = 286+ 'px';
				
				  oVcimg2.style.top = -286 * 3 + "px";
			}
		     
		}
		//3、抬起
		document.onmouseup = function(){
			document.onmousemove = null;
			oimgbox1.style.display = "none";
		}
	}
}


function TabSwitch(id){
				var oDiv = document.getElementById(id);
				var oDiv111 = document.getElementById("Vc21");
				var oDiv211 = document.getElementById("Vc22");
				this.aBtns = oDiv111.getElementsByTagName("span");
				this.aDivs = oDiv211.getElementsByTagName("ul");

				for(var i = 0; i < this.aBtns.length; i++){
					this.aBtns[i].index = i;
					var obj = this;
					this.aBtns[i].onclick = function(){
						obj.tab(this);
					};
				}
			}

			TabSwitch.prototype.tab = function(oBtn){
				
				for(var j = 0; j < this.aBtns.length; j++){
					this.aBtns[j].className = "";
					this.aDivs[j].style.display = "none";
				}

				oBtn.className = "active";
				this.aDivs[oBtn.index].style.display = 'block';
			}


