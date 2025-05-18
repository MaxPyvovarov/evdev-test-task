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

	const mobileServices = document.querySelector('.mobile-services-dropdown');
	mobileServices.addEventListener('click', () => {
		mobileServices.classList.toggle('active');
	});

	function toggleMobileMenu() {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		backdrop.classList.toggle('mobile-open');
		document.querySelector('body').classList.toggle('backdrop-opened');
		mobileServices.classList.remove('active');
	}
});
