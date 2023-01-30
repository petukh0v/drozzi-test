export const setScrollOffset = () => {
	let navHeight = document.querySelector('.main-nav').offsetHeight;
	document.documentElement.style.setProperty('--scroll-offset', `${navHeight}px`);
}
