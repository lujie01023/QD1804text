$(function(){
					ajax({
						url: "data/goods1.json",
						success: function(arr){
							// alert(arr);
								var oDiv1 = document.getElementById('s1_top');
							var oSpan =  oDiv1.getElementsByTagName("span");	
							var oI =  oDiv1.getElementsByTagName('i');
							var oImg =  oDiv1.getElementsByTagName('img');
							for(var i = 0; i < arr.length; i++){
							
								oSpan.innerHTML = arr[i].Manufacturer;
								oI.innerHTML = arr[i].price;
								oImg.src = arr[i].img;
								
								

							}
						}
					})
				
			}) 