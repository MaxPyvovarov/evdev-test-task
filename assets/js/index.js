window.addEventListener('DOMContentLoaded', () => {
	//Mobile Backdrop
	const backdrop = document.querySelector('.backdrop');
	backdrop.addEventListener('click', () => {
		toggleMobileMenu();
	});

	//Mobile menu
	const hamburger = document.querySelector('.header__hamburger-menu');
	const mobileMenu = document.querySelector('.header__mobile-menu');
	hamburger.addEventListener('click', () => {
		toggleMobileMenu();
	});

	function toggleMobileMenu() {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		backdrop.classList.toggle('mobile-open');
		document.querySelector('body').classList.toggle('backdrop-opened');
	}

	const swiper = new Swiper('.hero__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 20,
		centeredSlides: true,
		breakpoints: {
			700: {
				centeredSlides: false,
				slidesPerView: 3,
			},
		},
	});

	window.addEventListener('resize', () => {
		swiper.update();
	});
});
