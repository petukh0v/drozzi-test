export const popup = () => {

	const body = document.querySelector('body');
	const stopScroll = () => {
		body.classList.toggle('stop-scroll');
	}

	const popupBlock = document.querySelector('.popup');
	const popup = document.querySelector('.popup__img');
	const close = document.querySelector('.popup__close');

	const images = document.querySelectorAll('.card__image');

	const closePopup = () => {
		popupBlock.classList.add('hide');
		popupBlock.classList.remove('show');
		stopScroll();
	}

	const openPopup = () => {
		popupBlock.classList.add('show');
		popupBlock.classList.remove('hide');
		stopScroll();
	}

	images.forEach(image => {
		image.addEventListener('click', () => {
			popup.setAttribute('src', image.getAttribute('src'));
			openPopup();
		});
	});

	close.addEventListener('click', () => {
		popup.setAttribute('src', '');
		closePopup();
	});
};
