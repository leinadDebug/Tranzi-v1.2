/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Tranzi - Transportation & Logistics Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {


		/* ==================================================
		    # Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();

		/* ==================================================
		    # Wow active
		===============================================*/
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: "wow", // animated element css class (default is wow)
				animateClass: "animated", // animation css class (default is animated)
				mobile: true, // trigger animations on mobile devices (default is true)
				live: true // act on asynchronously loaded content (default is true)
			});
			wow.init();
		}


		/* ==================================================
		    # Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();


		/* ==================================================
		Nice Select Init
		===============================================*/
		$('select#transport_type, select#transport_type_2, select#transport_type_3').niceSelect();


		/* ==================================================
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
			$('.timer').countTo();
		}, {
			accY: -100
		});


		/* ==================================================
		    # Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
            # Hover Active Init
        ===============================================*/
		$('.hover-active-item').on('mouseenter', function() {
			var $this;
			$this = $(this);
			if ($this.hasClass('active')) {
				$this.addClass('active');
			} else {
				$this.addClass('active');
				$this.siblings().removeClass('active');
			}
		})


		/* ==================================================
            # Banner Carousel
         ===============================================*/
		 const bannerFade = new Swiper(".banner-fade", {
            // Optional parameters
            direction: "horizontal",
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
            // If we need pagination
            pagination: {
                el: '.baner-one-pagination',
                type: 'bullets',
                clickable: true,
            },

            // Navigation arrows
            navigation: {
                nextEl: ".banner-one-nav-next",
                prevEl: ".banner-one-nav-prev"
            }

            // And if we need scrollbar
            /*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
        });


		/* ==================================================
            # Banner Stage Carousel
         ===============================================*/
		 const bannerStageCarousel = new Swiper(".banner-stage-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".banner-stage-carousel-next",
				prevEl: ".banner-stage-carousel-prev"
			},
			breakpoints: {
				1367: {
					slidesPerView: 1.3,
					spaceBetween: 50,
				},
			},
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		 const testimonialOneCarousel = new Swiper(".testimonial-style-one-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 1000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".testimonial-style-one-next",
				prevEl: ".testimonial-style-one-prev"
			}
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		 const testimonialTwoCarousel = new Swiper(".testimonial-style-two-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			speed: 1000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".testimonial-style-two-next",
				prevEl: ".testimonial-style-two-prev"
			}
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		 const testimonialThreeCarousel = new Swiper(".testimonial-style-thee-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 1000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// If we need pagination
            pagination: {
                el: '.testimonial-style-thee-pagination',
                type: 'bullets',
                clickable: true,
            },
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		 const testimonialFourCarousel = new Swiper(".testimonial-style-four-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".testimonial-style-four-next",
				prevEl: ".testimonial-style-four-prev"
			}
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		 const testimonialFive = new Swiper(".testimonial-style-five-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".testimonial-style-five-next",
				prevEl: ".testimonial-style-five-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
		});


		/* ==================================================
            # Project Carousel
         ===============================================*/
		var projectOneCarousel = new Swiper('.project-style-one-carousel', {
			spaceBetween: 10,
			loop: true,
			loopedSlides: 4,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".project-one-next",
				prevEl: ".project-one-prev"
			},
		});
		var projectOneBullet = new Swiper('.project-style-one-carousel-bullet', {
			spaceBetween: 10,
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
			loop: true,
			loopedSlides: 3,
		});
		projectOneCarousel.controller.control = projectOneBullet;
		projectOneBullet.controller.control = projectOneCarousel;


		/* ==================================================
            # Brand Carousel
         ===============================================*/
		 const brandOne = new Swiper(".brand-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 50,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 80,
				}
			},
		});


		/* ==================================================
            # Project Carousel
         ===============================================*/
		 const projectStage = new Swiper(".project-center-stage-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".project-center-button-next",
				prevEl: ".project-center-button-prev"
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				1200: {
					slidesPerView: 2.5,
				},
				1800: {
					slidesPerView: 2.8,
				},
			},
		});


		/* ==================================================
            # Project Carousel
         ===============================================*/
		 const projectFourStage = new Swiper(".project-four-center-stage-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".project-four-center-button-next",
				prevEl: ".project-four-center-button-prev"
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
				1200: {
					slidesPerView: 2.5,
					spaceBetween: 0,
				},
				1800: {
					slidesPerView: 3.8,
					spaceBetween: 0,
				},
			},
		});


		/* ==================================================
            # Project Carousel
         ===============================================*/
		 const projectFiveStage = new Swiper(".project-five-center-stage-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".project-five-center-button-next",
				prevEl: ".project-five-center-button-prev"
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				1800: {
					slidesPerView: 2.1,
				},
			},
		});


		/* ==================================================
            # Services Carousel
         ===============================================*/
		 const servicesThreeCarousel = new Swiper(".services-style-three-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// If we need pagination
			pagination: {
				el: '.services-style-three-pagination',
				type: 'fraction',
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".services-style-three-next",
				prevEl: ".services-style-three-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1400: {
					slidesPerView: 3.6,
					spaceBetween: 50,
				},
			},
		});


		/* ==================================================
		    Splite Text
		================================================== */
		let text_split = document.querySelector(".split-text");
		if (text_split) {
			const animEls = document.querySelectorAll('.split-text');
			animEls.forEach(el => {
				var splitEl = new SplitText(el, {
					type: "lines, words",
					linesClass: "line"
				});
				var splitTl = gsap.timeline({
					duration: 0,
					ease: 'power4',
					scrollTrigger: {
						trigger: el,
						start: 'top 90%'
					}
				});

				splitTl.from(splitEl.words, {
					yPercent: "100",
					stagger: 0.025,
				});

			});
		}


		/* ==================================================
		    Hover Tab
		================================================== */
	


		let selectedIndex = 0;
		$('.service-tab-content-list li').on('mousemove', function (e) {
			$(this).addClass('active').siblings().removeClass('active');
			let arr = [...$('.service-tab-content-list li')];
			arr.forEach((value, index) => {
				if ($(value).hasClass('active')) {
					selectedIndex = index + 1;
				}
			});
			$('.service-tab-contents:nth-child(' + selectedIndex + ')').addClass('active').siblings().removeClass('active');
		});

		
		/* ==================================================
		    GSAP Element Scroll Animation
		================================================== */

		let upDown_Scroll = document.querySelector(".upDownScrol");
		if (upDown_Scroll) {
			gsap.set(".upDownScrol", {
				yPercent: 30
			});

			gsap.to(".upDownScrol", {
				yPercent: -30,
				ease: "none",
				scrollTrigger: {
					trigger: ".upDownScrol",
					end: "bottom center",
					scrub: 1
				},
			});
		}


		let leftRight_Scroll = document.querySelector(".leftRightScroll");
		if (leftRight_Scroll) {
			gsap.set(".leftRightScroll", {
				xPercent: -15
			});

			gsap.to(".leftRightScroll", {
				xPercent: 15,
				ease: "none",
				scrollTrigger: {
					trigger: ".leftRightScroll",
					end: "left center",
					scrub: 1
				},
			});
		}

		let rightLeft_Scroll = document.querySelector(".rightLeftScroll");
		if (rightLeft_Scroll) {
			gsap.set(".rightLeftScroll", {
				xPercent: 15
			});

			gsap.to(".rightLeftScroll", {
				xPercent: -15,
				ease: "none",
				scrollTrigger: {
					trigger: ".rightLeftScroll",
					end: "right center",
					scrub: 1
				},
			});
		}

		

		/* ==================================================
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							phone: $('#phone').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});

	}); // end document ready function

	/* ==================================================
        Preloader Init
     ===============================================*/
	 $(window).on('load', function(event) {
		$('#preloader').delay(500).fadeOut(500);
	});
	
})(jQuery); // End jQuery

