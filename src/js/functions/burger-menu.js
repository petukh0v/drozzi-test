export const burgerMenu = () => {

	const body = document.querySelector('body');
	const stopScroll = () => {
		body.classList.add('stop-scroll');
	}
	const startScroll = () => {
		body.classList.remove('stop-scroll');
	}

	const burger = document.querySelector('.burger-link');
	const menu = document.querySelector('.main-menu');
	const nav = document.querySelector('.main-nav');
	const container = document.querySelector('.header-container');

	const menuItem = document.querySelectorAll('.main-menu__item');
	const logoLink = document.querySelector('.logo-link');

	const toggleMenu = () => {
		menu.classList.toggle('invisible');
		nav.classList.toggle('mob');
		container.classList.toggle('mob-container');
		stopScroll();
	}
	const closeMenu = () => {
		menu.classList.remove('invisible');
		nav.classList.remove('mob');
		container.classList.remove('mob-container');
		startScroll();
	}

	burger.addEventListener('click', () => {
			toggleMenu();
		});

	const burgerDisplay = window.getComputedStyle(burger).display;

	if(burgerDisplay == "block") {
		logoLink.addEventListener('click', () => {
			closeMenu();
		});
		menuItem.forEach((item) => {
			item.addEventListener('click', () => {
				closeMenu();
			})
		});
	}
};
