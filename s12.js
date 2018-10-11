$(function(){
					ajax({
						url: "data/goods2.json",
						success: function(arr){
							 // alert(arr);
							for(var i = 0; i < arr.length; i++){
							
								$(`<li><a href=""><img src="${arr[i].img}" alt="">
									<h3>${arr[i].goods}</h3>
									<span>${arr[i].price}</span></a></li>`).appendTo($("body"));
								
								

							}

						}
					})
				
			}) 