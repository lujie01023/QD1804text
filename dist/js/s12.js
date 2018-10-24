$(function(){
					ajax({
						url: "data/goods2.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<li><a href=""><img src="${obj[i].img}" al"">
									<h3>${obj[i].goods}</h3>
									<span>${obj[i].price}</span></a></li>`).appendTo($("#goods2_ul"));
								
								

							}

						}
					})





					ajax({
						url: "data/goods1.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<div class="s1_bottom_left"><a href="">
							<span>${obj[i].Manufacturer}</span><i>${obj[i].price}</i>
						<img src="${obj[i].img}" alt=""></a></div>
						<div class="s1_bottom_center"><a href="">
							<span>${obj[i].Manufacturer}</span><i>${obj[i].price}</i>
						<img src="${obj[i].img}" alt=""></a></div>
						<div class="s1_bottom_right">
							<div class="s1_bottom_right_top"><a href="">
								<span>${obj[i].Manufacturer}</span><i>${obj[i].price}</i>
							<img src="${obj[i].img3}" alt=""></a></div>
							<div class="s1_bottom_right_bottom"><a href="">
								<span>${obj[i].Manufacturer}</span><i>${obj[i].price}</i>
							<img src="${obj[i].img3}" alt=""></a></div></div>`).appendTo($(".s1_bottom"));
								

							}

						}
					})





					ajax({
						url: "data/goods3.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<div class="s2">
					<div class="s2_top">
						<h1>${obj[i].title}</h1>
						<p>${obj[i].content}</p>
					</div>
					<div class="s2_center">
					<img src="${obj[i].img}" alt="">
					</div>
					<div  class="s2_bottom">
						<ul>
						<li><a href=""><img src="${obj[i].img2}" alt=""><h2>${obj[i].goods}</h2><span>${obj[i].price}<i>${obj[i].oldprice}</i></span></a></li>
						<li><a href=""><img src="${obj[i].img2}" alt=""><h2>${obj[i].goods}</h2><span>${obj[i].price}<i>${obj[i].oldprice}</i></span></a></li>
						<li><a href=""><img src="${obj[i].img2}" alt=""><h2>${obj[i].goods}</h2><span>${obj[i].price}<i>${obj[i].oldprice}</i></span></a></li>
						<li><a href=""><img src="${obj[i].img2}" alt=""><h2>${obj[i].goods}</h2><span>${obj[i].price}<i>${obj[i].oldprice}</i></span></a></li></ul>
					</div>`).appendTo($("#s02"));
								
								

							}

						}
					})












					ajax({
						url: "data/navli1.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<ol class="ol2" id="${obj[i].id}"> 
							<li><dl><dt><a href="">${obj[i].type1}</a></dt><dd>${obj[i].type11}</dd>
							<dd>${obj[i].type12}</dd>
							</dl></li>
							<li><dl><dt><a href="">${obj[i].type2}</a></dt><dd>${obj[i].type21}</dd>
							<dd>${obj[i].type22}</dd>
							<dd>${obj[i].type23}</dd><dd>${obj[i].type24}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type3}</a></dt><dd>${obj[i].type31}</dd>
							<dd>${obj[i].type32}</dd>
							<dd>${obj[i].type33}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type4}</a></dt><dd>${obj[i].type41}</dd>
							<dd>${obj[i].type42}</dd>
							</dl></li>
						</ol>`).appendTo($("#liol"));
								
								

							}

						}
					})



					ajax({
						url: "data/navli2.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<ol class="ol2" id="${obj[i].id}"> 
							<li><dl><dt><a href="">${obj[i].type1}</a></dt><dd>${obj[i].type11}</dd>
							<dd>${obj[i].type12}</dd>
							</dl></li>
							<li><dl><dt><a href="">${obj[i].type2}</a></dt><dd>${obj[i].type21}</dd>
							<dd>${obj[i].type22}</dd>
							<dd>${obj[i].type23}</dd><dd>${obj[i].type24}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type3}</a></dt><dd>${obj[i].type31}</dd>
							<dd>${obj[i].type32}</dd>
							<dd>${obj[i].type33}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type4}</a></dt><dd>${obj[i].type41}</dd>
							<dd>${obj[i].type42}</dd>
							</dl></li>
						</ol>`).appendTo($("#liol3"));
								
								

							}

						}
					})


					ajax({
						url: "data/navli11.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<ol class="ol2" id="${obj[i].id}"> 
							<li><dl><dt><a href="">${obj[i].type1}</a></dt><dd>${obj[i].type11}</dd>
							<dd>${obj[i].type12}</dd>
							</dl></li>
							<li><dl><dt><a href="">${obj[i].type2}</a></dt><dd>${obj[i].type21}</dd>
							<dd>${obj[i].type22}</dd>
							<dd>${obj[i].type23}</dd><dd>${obj[i].type24}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type3}</a></dt><dd>${obj[i].type31}</dd>
							<dd>${obj[i].type32}</dd>
							<dd>${obj[i].type33}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type4}</a></dt><dd>${obj[i].type41}</dd>
							<dd>${obj[i].type42}</dd>
							</dl></li>
						</ol>`).appendTo($("#liol1"));
								
								

							}

						}
					})



					ajax({
						url: "data/navli21.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<ol class="ol2" id="${obj[i].id}"> 
							<li><dl><dt><a href="">${obj[i].type1}</a></dt><dd>${obj[i].type11}</dd>
							<dd>${obj[i].type12}</dd>
							</dl></li>
							<li><dl><dt><a href="">${obj[i].type2}</a></dt><dd>${obj[i].type21}</dd>
							<dd>${obj[i].type22}</dd>
							<dd>${obj[i].type23}</dd><dd>${obj[i].type24}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type3}</a></dt><dd>${obj[i].type31}</dd>
							<dd>${obj[i].type32}</dd>
							<dd>${obj[i].type33}</dd></dl></li>
							<li><dl><dt><a href="">${obj[i].type4}</a></dt><dd>${obj[i].type41}</dd>
							<dd>${obj[i].type42}</dd>
							</dl></li>
						</ol>`).appendTo($("#liol31"));
								
								

							}

						}
					})








					ajax({
						url: "data/good4.json",
						success: function(arr){
							

							  if((typeof arr=='object')&&arr.constructor==Object){
				                 obj=arr;
				             }else{
				                 obj  = eval("("+arr+")");
				             }
				    //           alert(obj);
							 // alert(obj.length);
							for(var i = 0; i < obj.length; i++){
							
								$(`<li id = "${obj[i].id}"><a href="${obj[i].path}">
							<img src="${obj[i].img}" alt="">
							
								<h2>${obj[i].goods}</h2>
								<h4>${obj[i].price}</h4>
							<div class="pt"></div>
							<h5>${obj[i].text}</h5>
						</a></li>`).appendTo($("#product"));
								
								

							}

						}
					})
					




					





			})



