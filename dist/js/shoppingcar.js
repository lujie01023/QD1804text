function oSd111 (){
	var oSd11 = document.getElementById("sc4221");
	var oSd22 = document.getElementById("sc4222");
	var oSd33 = document.getElementById("sc4223");
		oSd11.onclick = function(){
		oSd22.innerHTML--;

		if (oSd22.innerHTML <= 1) {
			oSd22.innerHTML =1;
		}
		var oh2 = document.getElementById('sc421');
					  var oh22 = document.getElementById('sc4222');
	 				 oh2.innerHTML ="￥"+ oh22.innerHTML *799 + ".00";

	}
	oSd33.onclick = function(){
		oSd22.innerHTML++;
		 var oh2 = document.getElementById('sc421');
					  var oh22 = document.getElementById('sc4222');
	 				 oh2.innerHTML ="￥"+ oh22.innerHTML *799 + ".00";

	}


}
function removeCookie(name){
				document.cookie = encodeURIComponent(name) + "=;expires=" + new Date(0);
			}

