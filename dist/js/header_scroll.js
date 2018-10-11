// define(["jquery","startMove"],function($, startMove){
// 	function headerScroll(){
// 			var oDiv = document.getElementById('div1');
// 				var oUl = oDiv.getElementsByTagName('ul')[0];
// 				var aLis = oUl.getElementsByTagName('li');


// 				oUl.innerHTML += oUl.innerHTML;
// 				oUl.style.height = aLis.length * aLis[0].offsetHeight + "px";
// 				var timer = null;
// 				timer = setInterval(function(){
// 								startMove(oUl,{top:oUl.offsetTop - 34},function(){
// 									if (oUl.offsetTop <= -oUl.offsetHeight / 2) {
// 										oUl.style.top = "0px";
// 									}
// 								})

// 				}, 1000);
// 			}	
			
// 		}
// 		return {
// 				headerScroll: headerScroll
// 			}
// 	})

