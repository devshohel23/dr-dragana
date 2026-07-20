document.addEventListener("DOMContentLoaded", function () {

    // Scroll to Top
    const scrollToTop = document.querySelector(".scrolltotop");

    if (scrollToTop) {
        scrollToTop.addEventListener("click", function (e) {
            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Scroll Events
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;

        // Show/Hide Scroll To Top Button
        if (scrollToTop) {
            if (scrollTop > 500) {
                scrollToTop.style.display = "block";
                scrollToTop.style.opacity = "1";
            } else {
                scrollToTop.style.opacity = "0";
                setTimeout(() => {
                    if (window.scrollY <= 500) {
                        scrollToTop.style.display = "none";
                    }
                }, 300);
            }
        }

        // Sticky Header
        const headerMenu = document.querySelector(".header-menu");

        if (headerMenu) {
            if (scrollTop > 0) {
                headerMenu.classList.add("menu-sticky");
            } else {
                headerMenu.classList.remove("menu-sticky");
            }
        }
    });


	// Mega dropdown menu behaviour (click to open, tabs inside Face) 
	(function () {
				var triggers = document.querySelectorAll('.dropdown-trigger');

				function closeAll(except) {
					triggers.forEach(function (t) {
						if (t !== except) {
							t.parentElement.classList.remove('dropdown-open');
						}
					});
				}

				triggers.forEach(function (trigger) {
					trigger.addEventListener('click', function (e) {
						e.preventDefault();
						e.stopPropagation();
						var parentLi = trigger.parentElement;
						var isOpen = parentLi.classList.contains('dropdown-open');
						closeAll(trigger);
						parentLi.classList.toggle('dropdown-open', !isOpen);
					});
				});

				document.addEventListener('click', function () {
					closeAll(null);
				});

				document.querySelectorAll('.mega-dropdown').forEach(function (dd) {
					dd.addEventListener('click', function (e) {
						e.stopPropagation();
					});
				});

				document.querySelectorAll('.tab-link').forEach(function (tab) {
					tab.addEventListener('click', function () {
						var dropdown = tab.closest('.mega-dropdown-inner');
						dropdown.querySelectorAll('.tab-link').forEach(function (t) {
							t.classList.remove('active');
						});
						dropdown.querySelectorAll('.dropdown-panel').forEach(function (p) {
							p.classList.remove('active');
						});
						tab.classList.add('active');
						document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
					});
				});
			})();


			// Mobile offcanvas + accordion behaviour (Bootstrap 5)
			(function () {
				var toggleBtn = document.querySelector('.mobile-menu-toggle');
				var offcanvasEl = document.getElementById('mobileOffcanvas');

				if (toggleBtn && offcanvasEl && window.bootstrap) {
					offcanvasEl.addEventListener('show.bs.offcanvas', function () {
						toggleBtn.classList.add('active');
					});
					offcanvasEl.addEventListener('hidden.bs.offcanvas', function () {
						toggleBtn.classList.remove('active');
					});
				}
			})();


	// home page marque area 
	(function () {
		var track = document.getElementById('marqueeTrack');
		if (!track) return;

		// Duplicate the row once — translateX(-50%) on a doubled track
		// always loops perfectly, no matter how long the content is.
		track.insertAdjacentHTML('beforeend', track.innerHTML);

		// Keep scroll speed constant regardless of content length.
		var pixelsPerSecond = 55;

		function setSpeed() {
			var singleSetWidth = track.scrollWidth / 2;
			var duration = singleSetWidth / pixelsPerSecond;
			track.style.animationDuration = duration + 's';
			track.classList.add('is-playing');
		}

		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(setSpeed);
		} else {
			setSpeed();
		}
		window.addEventListener('resize', setSpeed);
	})();


	var swiper = new Swiper(".after-before-silder", {
		loop: true,
		centeredSlides: true,
		spaceBetween: 12,
		speed: 5000,

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},

		breakpoints: {
			// Mobile
			0: {
				slidesPerView: 0.8,
			},

			576: {
				slidesPerView: 1.8,
			}
		}
	});


	// featured section slider js
	const featuredInSwiper = new Swiper('.featured-in-slider', {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		centeredSlides: false,
		speed: 700,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		breakpoints: {
			576: {
				slidesPerView: 1.6,
			},
			992: {
				slidesPerView: 1.8,
			},
		},
	});



});