

		$().extend({
			size: function(){
				return this.elements.length;
			}
		})


		$(function(){
			//按钮
			var oBtns = $("#play").find("ol").find("li");
			var oUl = $("#play").find("ul");
			var aLi = oUl.find("li");


			var iNow = 0; //记录当前是第几张
			var timer = null; //设计记录定时器的标识


			timer = setInterval(timerInner, 2000);

			function timerInner(){
				iNow++;
				tab();
			}

			function tab(){
				// document.title = iNow;
				if(iNow == oBtns.size()){
					oBtns.attr("class", "");
					oBtns.eq(0).attr("class", "active");
				}else{
					oBtns.attr("class", "");
					oBtns.eq(iNow).attr("class", "active");
				}
				
				oUl.animate({left: iNow * -1440}, function(){
					if(iNow == oBtns.size()){
						iNow = 0;
						oUl.css("left", "0px");
					}
				});
			}


			oBtns.click(function(){
				iNow = $(this).index();
				tab();
			})

			$("#play").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner, 2000);
			})
		})
	

