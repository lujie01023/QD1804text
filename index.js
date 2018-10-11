/*console.log("加载完成index");


require.config({
	paths: {
		"jquery": "js/jquery-1.11.3",
		"header_scroll": "js/header_scroll",
		"startMove":"js/startMove"
	}
})

define(["jquery","header_scroll","startMove"], function( $,header_scroll, startMove){

	
	function main(){

	headerScroll();


		
	}
	return {
		main: main
	}
})
*/

window.onload = function(){
			var oUl2 = document.getElementById("#li_ol");
			var oOl = document.getElementById("ol2");
			oUl2.onmouseover = function(){
				oOl.style.display = "block";
			}
			oUl2.onmouseout = function(){
				oOl.style.display = "none";
			}
		}