export const input = () => {
	let els = document.querySelectorAll(".form__input");
	els.forEach((el) => {
		el.addEventListener("keyup", () => {
		el.setAttribute("value", el.value);
		})
	});
}
