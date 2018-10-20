'use strict';

$(document).ready(function() {
  //load up our good ol event listeners
  // bookmarksList.bindEventListeners();
  //upon first load, query the server for bookmark data, then add to the local store bookmark array

    pages.render();

});


const pages= (function(){


	const workPage = ()=>{

		return`
		<main class="main">
   
		<div class="view home" style="touch-action: none;">

		
			<!--sub-nav-->
			 <div class="home-nav">
			        <div class="home-nav-item active">
			            <span class="home-nav-title">Bored</span>
			            <span class="home-nav-bar base"></span>
			            <span class="home-nav-bar clone"></span></div>

			            <div class="home-nav-item">
			                <span class="home-nav-title">Slowjam</span>
			                <span class="home-nav-bar base"></span>
			                <span class="home-nav-bar clone"></span>
			            </div>


			            <div class="home-nav-item">
			                <span class="home-nav-title">Goodtimes</span>
			                <span class="home-nav-bar base"></span>
			                <span class="home-nav-bar clone"></span>
			            </div>

			            <div class="home-nav-item">
			                <span class="home-nav-title">Bunny Babble</span>
			                <span class="home-nav-bar base"></span>
			                <span class="home-nav-bar clone"></span>
			            </div>

			        
       			 </div>

 <!--SECTION-PROJECT-1-->
				<section class="intro" id="project-1">
					<div class="content">

				<!--image half-->
				    <div class="half home-pic">
					    <div class="mobile-overlay"></div>
					  
					
					     <div class="project-img">
					     	<img class="horizontal" src="./assets/images/bored.jpg" alt="Bored" title="Always Different, Always Bored" />
					     </div>
					 
					  
					</div>

				<div class="half home-content">
					<div class="home-date">Bored (2018)</div>
					<div class="home-type dark uppercase">2 Week Full-Stack Project</div>
					<div class="home-desc">
		
					<b class="home-desc-part-inner">Bored is a desktop web app for organizing images into visual collections of aesthetic inspiration - aka "moodboards." A key feature is the ability to drag and arrange images freely in a collage-like or scrapbooking fashion, which is something I've found missing from most online moodboarding applications. </b>
							
					</div>

					<div class="home-details">
						<div class="home-details-col mobile-hide">
							<div class="uppercase">
								<span class="dark">Tech:</span>

								<span class="text-split ">
								<span class="home-details-base"><span class="home-details-part">
									<b class="home-details-part-inner">PostgreSQL</b></span>

								   </span>
								   </span>

								</div>
								<div class="uppercase">


							   <span class="dark">Team:</span>


								<span class="text-split ">
									<span class="home-details-base">
									<span class="home-details-part"><b class="home-details-part-inner">Solo</b>
									</span>

								</span>
							</span>

							</div>
						</div>


						<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">React/Redux</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">Node/Express</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							</div>

							

								
						

								<a class="home-visit" target="_blank" href="http://github.com/goblincore">

								<span class="text-split "><span class="home-details-base">
								<span class="home-details-part">
									<b class="home-details-part-inner">Visit Project</b>
								</span>
								<span class="home-details-part whitespace"><b class="home-details-part-inner whitespace"> </b></span>

							    </span>
							</span>

								<span class="home-visit-arrow">
								<img class="home-visit-arrow-b clone" src="./assets/images/arrow.svg" role="presentation">
								<img class="home-visit-arrow-b" src="./assets/images/arrow.svg" role="presentation">
							    </span>
							</a>
						</div>
					</div>
				</section>
     		 <!--END PROJECT 1 SECTION -->

     		 <!--SECTION-PROJECT-2--->
				<section id="project-2">
					<div class="content">

				<!--image half-->
				    <div class="half home-pic">
					    <div class="mobile-overlay"></div>
					
					     <div class="project-img">
					     	<img class="vertical" src="https://github.com/thinkful-ei22/Donny-Playground/raw/master/screenshots/godsplan.gif" alt=":D" />
					     </div>
					 
					  
					</div>

				<!--project description half-->
				<div class="half home-content">
					<div class="home-date">Slowjam (2018)</div>
					<div class="home-type dark uppercase">1 Week React Native Project</div>
					<div class="home-desc">
				
					<b class="home-desc-part-inner">Slowjam is a music app for mobile devices that plays extracted audio streams from Youtube with the added twist that the audio played back is slowed and everything is pitched down. This has the effect of elevating the pathos of certain tracks to the level of epic tragicomedy! Inspired by DJ Screw (R.I.P.) </b>
						
					</div>

					<div class="home-details">
						<div class="home-details-col mobile-hide">
							<div class="uppercase">
								<span class="dark">Tech:</span>

								<span class="text-split ">
								<span class="home-details-base"><span class="home-details-part">
									<b class="home-details-part-inner">Youtube API</b></span>

								   </span>
								   </span>

								</div>
								<div class="uppercase">


							   <span class="dark">Team:</span>


								<span class="text-split ">
									<span class="home-details-base">
									<span class="home-details-part"><b class="home-details-part-inner">Solo</b>
									</span>

								</span>
							</span>

							</div>
						</div>


						<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">React Native + Expo</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">Node/Express</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							</div>

							

								
						

								<a class="home-visit" target="_blank" href="http://github.com/goblincore">

								<span class="text-split "><span class="home-details-base">
								<span class="home-details-part">
									<b class="home-details-part-inner">Visit Project</b>
								</span>
								<span class="home-details-part whitespace"><b class="home-details-part-inner whitespace"> </b></span>

							    </span>
							</span>

								<span class="home-visit-arrow">
								<img class="home-visit-arrow-b clone" src="./assets/images/arrow.svg" role="presentation">
								<img class="home-visit-arrow-b" src="./assets/images/arrow.svg" role="presentation">
							    </span>
							</a>
						</div>
					</div>
				</section>
     		 <!--END PROJECT 2 SECTION -->


     		  <!--SECTION-PROJECT-3--->
				<section id="project-3">
					<div class="content">

				<!--image half-->
				    <div class="half home-pic">
					    <div class="mobile-overlay"></div>
					    <h2 class="home-title">
					    </h2>

					
					     <div class="project-img">
					     	<img class="horizontal" src="./assets/images/goodtimes.png" alt="Goodtimes" />
					     </div>
					 
					  
					</div>

				<div class="half home-content">
					<div class="home-date">Goodtimes (2018)</div>
					<div class="home-type dark uppercase">3 Week Full-Stack Project</div>
					<div class="home-desc">
				
					<b class="home-desc-part-inner">Goodtimes is an app designed to streamline event planning for large groups of friends. It allows the user to create multiple-choice surveys by choosing from dates and times, places to eat, and events near them. The final survey can then be emailed directly to the user's friends directly from the website. </b>
						
					</div>

					<div class="home-details">
						<div class="home-details-col mobile-hide">
							<div class="uppercase">
								<span class="dark">Tech:</span>

								<span class="text-split ">
								<span class="home-details-base"><span class="home-details-part">
									<b class="home-details-part-inner">MongoDB</b></span>

								   </span>
								   </span>

								</div>
								<div class="uppercase">


							   <span class="dark">Team:</span>


								<span class="text-split ">
									<span class="home-details-base">
									<span class="home-details-part"><b class="home-details-part-inner">5 member Agile </b>
									</span>

								</span>
							</span>

							</div>
						</div>


						<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">React/Redux</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">Node/Express</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							</div>

							

								
						

								<a class="home-visit" target="_blank" href="http://github.com/goblincore">

								<span class="text-split "><span class="home-details-base">
								<span class="home-details-part">
									<b class="home-details-part-inner">Visit Project</b>
								</span>
								<span class="home-details-part whitespace"><b class="home-details-part-inner whitespace"> </b></span>

							    </span>
							</span>

								<span class="home-visit-arrow">
								<img class="home-visit-arrow-b clone" src="./assets/images/arrow.svg" role="presentation">
								<img class="home-visit-arrow-b" src="./assets/images/arrow.svg" role="presentation">
							    </span>
							</a>
						</div>
					</div>
				</section>
     		 <!--END PROJECT 3 SECTION -->


     		  <!--SECTION-PROJECT-4--->
				<section id="project-4">
					<div class="content">

				<!--image half-->
				    <div class="half home-pic">
					    <div class="mobile-overlay"></div>
			
					
					     <div class="project-img">
					     	<img class="horizontal" src="./assets/images/bunnybabble.png" alt="Goodtimes" />
					     </div>
					 
					  
					</div>

				<div class="half home-content">
					<div class="home-date">Bunny Babble (2018)</div>
					<div class="home-type dark uppercase">2 week Full-Stack Project</div>
					<div class="home-desc">
				
					<b class="home-desc-part-inner">Bunny Babble is a small app for learning Lapine, a fictitious language spoken by rabbits, invented by author Richard Adams for his 1972 novel Watership Down. It utilizes a spaced-repetition algorithm implemented via a linked list that adjusts the frequency of vocabulary words based on user accuracy. </b>
						
					</div>

					<div class="home-details">
						<div class="home-details-col mobile-hide">
							<div class="uppercase">
								<span class="dark">Tech:</span>

								<span class="text-split ">
								<span class="home-details-base"><span class="home-details-part">
									<b class="home-details-part-inner">MongoDB</b></span>

								   </span>
								   </span>

								</div>
								<div class="uppercase">


							   <span class="dark">Team:</span>


								<span class="text-split ">
									<span class="home-details-base">
									<span class="home-details-part"><b class="home-details-part-inner">Pair Project</b>
									</span>

								</span>
							</span>

							</div>
						</div>


						<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">React/Redux</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							<div class="home-details-col">
							<div class="uppercase">
								<span class="text-split ">
									<span class="home-details-base">
										<span class="home-details-part"><b class="home-details-part-inner">Node/Express</b>
										</span>
									  </span>
									</span>
									</div>
								</div>


							</div>

							

								
						

								<a class="home-visit" target="_blank" href="http://github.com/goblincore">

								<span class="text-split "><span class="home-details-base">
								<span class="home-details-part">
									<b class="home-details-part-inner">Visit Project</b>
								</span>
								<span class="home-details-part whitespace"><b class="home-details-part-inner whitespace"> </b></span>

							    </span>
							</span>

								<span class="home-visit-arrow">
								<img class="home-visit-arrow-b clone" src="./assets/images/arrow.svg" role="presentation">
								<img class="home-visit-arrow-b" src="./assets/images/arrow.svg" role="presentation">
							    </span>
							</a>
						</div>
					</div>
				</section>
     		 <!--END PROJECT 4 SECTION -->



	</main>



		`


	};


	const render = ()=>{

		$('.main').html(workPage)


	}



	return{

		render:render


		};
 };
}());
