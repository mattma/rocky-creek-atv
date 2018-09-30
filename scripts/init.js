$(document).ready(function(){
				Cufon.now();
			
				$.localScroll.defaults.axis = 'xy';
				
				$.localScroll.hash({
					target: '#content', queue: true, duration: 1500
				});
				
				$('#mainNav').localScroll({
					target: '#content', queue: true, hash: true, duration: 1500
				});
				$('.subNav').localScroll({
					target: '#content', queue: true, hash: true, duration: 1500
				});
				$('#homeEvent').localScroll({
					target: '#content', queue: true, hash: true, duration: 1500
				});
				$('#header').localScroll({
					target: '#content', queue: true, hash: true, duration: 1500
				});
				
				
				Cufon.replace('#nav ul>li', {fontFamily: 'Museo Slab', 'font-weight': '800', 'font-size': '14px', hover: true}); 
				Cufon.replace('.navFont', {fontFamily: 'Museo Slab', 'font-weight': '800', 'font-size': '14px'}); 
				Cufon.replace('.footerText', {fontFamily: 'Museo Slab', 'font-size': '12px', color: '#9f9f9f'});
				Cufon.replace('.footerText2', {fontFamily: 'Colaborate-Regular', 'font-size': '12px', color: '#cecece', hover: true});
				Cufon.replace('.subTitle, #aboutUsText2 h3', {fontFamily: 'ChunkFive', 'textShadow': '1px 1px #f1f1f1'});
				Cufon.replace('#aboutUsText2 p', {fontFamily: 'ChunkFive', 'textShadow': '1px 1px #ccc'});
				Cufon.replace('.moreVideos', {fontFamily: 'ChunkFive', 'textShadow': '1px 1px #313131', hover: true});
				Cufon.replace('#homeFrame div h3', {fontFamily: 'ChunkFive'});
				
				function overFunction(event){
					$(this).find('ul').eq(0).css('visibility', 'visible');
				}
				
				function outFunction(event){
					$(this).find('ul').eq(0).css('visibility', 'hidden');
				}
				
				$('#nav ul>li').hoverIntent( {
					over: overFunction,
					timeout: 350,
					out: outFunction,
					interval: 300
				});
				
				//direction page hover details
				function overDiv(event){ 
						if(!$(event.target).is('.atlanta')){$('.atlanta').fadeTo(200, 0.25);
						$(this).addClass('toggle').parent().find('.toggle').fadeTo('slow', 1); 
					}
				}
				
				function outDiv(event) {	
					if(!$(event.target).is('.atlanta')){
						$(this).parent().find('.toggle').fadeTo('slow', 0.25).removeClass('toggle');
						$('.atlanta').fadeTo(350, 1);
					}
				}
				
				$('.atlanta').css('opacity', '1');
				
				$('#direction div.fromWhere').hoverIntent({
					over: overDiv,
					timeout: 400,
					out: outDiv,
					interval: 400
				}); 			
		/*-------------------- Contact Page --- FAQ page -------------*/
			Cufon.replace('#contact3 h3', {fontFamily: 'Museo Slab', 'color': 'black','textShadow': '-1px -1px #000', 'textShadow': '1px 1px #ccc'});
			
			$('p.answers').hide();
			
			$('.showAnswer').click(function(event){
				$(this).parent().prev().effect('fold', {horizFirst: true, mode: 'show', size: '10%'}, 'slow');
			});
			
			$('.hideAnswer').click(function(event){
				$(this).parent().prev().effect('fold', {horizFirst: true,  size: '10%'}, 'slow');
			});
			
		/*-------------------- Contact Page --- About us page -------------*/	
			Cufon.replace('#contact1 ul li', {fontFamily: 'Museo Slab', 'textShadow': '1px 1px #f1f1f1'});
			
		/*-------------------- Contact Page, EventPage, GalleryPage flag subnav control -------------*/	
			$('#contactPage .subNav a.top, #eventPage .subNav a.top, #galleryPage .subNav a.top').hover(function(){
				$(this).children().attr('src', '_images/top_flag_over.gif');},
				function(){$(this).children().attr('src', '_images/top_flag.gif');}
			)
			$('#contactPage .subNav a.bottom, #eventPage .subNav a.bottom, #galleryPage .subNav a.bottom').hover(function(){
				$(this).children().attr('src', '_images/bottom_flag_over.gif');},
				function(){$(this).children().attr('src', '_images/bottom_flag.gif');}
			)
		/*-------------------- Gallery Page, youtube video lightbox effect -------------*/
				$('.youtube').click(function(){
				$.fancybox({
							"padding": 0, 
							"autoScale": false, 
							"transitionIn":"fade", 
							"transitionOut": "fade",
							 speedIn: 500, 
							 speedOut: 500, 
							 overlayShow: true, 
							 overlayOpacity: 0.6,
							"title": this.title,   
							"href": this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
							"type": "swf", "swf": {"wmode": "transparent", "allowfullscreen": "true"
							}
						});
					return false;
				});
				
				$('.bigFrame, .smallFrame, .bookPhoto').hover(function(){
					$(this).fadeTo(300, 0.65);}, 
					function(){$(this).fadeTo(300, 1);}
				);
		
		/*-------------------- Gallery Page, Books lightbox effect -------------*/		
				$('.bookInline').fancybox({
					"transitionIn":"fade", 
					"transitionOut": "fade",
					speedIn: 500, 
					speedOut: 500, 
					overlayShow: true, 
					titlePosition: 'inside', 
					padding: 20, 
					"autoScale": false
				});
				
				function changeBgColor(event) {
					$(this).parents('.books').animate({'background-color': '#313131'}, 2000);
				}
				
				function changeOriColor(event) {
					$(this).parents('.books').animate({'background-color': '#616161'}, 2000);
				}
				
				$('#gallery3 .bookDesc').hoverIntent({
					over: changeBgColor,
					timeout: 350,
					out: changeOriColor,
					interval: 350
				}); 
		
		/*-------------------- Event Page, Slideshow effect -------------*/
			  function slideSwitch() {
					var $active = $('#slideshow img.active');
				
					if ( $active.length == 0 ) $active = $('#slideshow img:last');
					// use this to pull the images in the order they appear in the markup
					var $next =  $active.next().length ? $active.next()
						: $('#slideshow img:first');
					//the 3 lines below to pull the images in random order
					var $sibs  = $active.siblings();
					var rndNum = Math.floor(Math.random() * $sibs.length );
					var $next  = $( $sibs[ rndNum ] );
				
					$active.addClass('last-active');
					$next.css({opacity: 0.0})
					   .addClass('active')
					   .animate({opacity: 1.0}, 1000, function() {
					   $active.removeClass('active last-active');
				});
		}
			  setInterval(function(){slideSwitch();}, 5000 );
		/*-------------------- Event Page --- second event page -------------*/
		
		Cufon.replace('#eventText h3', {fontFamily: 'Museo Slab', 'textShadow': '1px 1px #ccc' });
		
		$('#festInclude p:nth-child(odd)').css({'background-color': 'rgba(247, 243, 204, 0.5)'});
		$('#festInclude p:nth-child(even)').css({'background-color': 'rgba(51, 51, 51, 0.5)', 'color': '#f1f1f1'});
		
			  function slideSwitch1() {
				var $active = $('#slideshow1 img.active');
			
				if ( $active.length == 0 ) $active = $('#slideshow1 img:last');
				// use this to pull the images in the order they appear in the markup
				var $next =  $active.next().length ? $active.next()
					: $('#slideshow1 img:first');
				//the 3 lines below to pull the images in random order
				var $sibs  = $active.siblings();
				var rndNum = Math.floor(Math.random() * $sibs.length );
				var $next  = $( $sibs[ rndNum ] );
			
				$active.addClass('last-active');
				$next.css({opacity: 0.0})
				   .addClass('active')
				   .animate({opacity: 1.0}, 1000, function() {
				   $active.removeClass('active last-active');
				});
			  }
			  setInterval(function(){slideSwitch1();}, 5000 );

});
	