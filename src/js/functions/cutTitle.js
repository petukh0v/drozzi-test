export const cutTitle = () => {
	const titleLinks = document.querySelectorAll('.card__title-link');
	titleLinks.forEach((title) => {
		let oldTitle = title.innerText;
		let length = title.parentNode.dataset.length;
		if(oldTitle.length > length) {
			let newTitle = title.innerText.slice(0, length);
			title.innerText = `${newTitle}...`;
		}
	});
}
