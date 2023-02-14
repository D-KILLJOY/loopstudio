const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

navOpen.addEventListener("click", () => {
	navMenu.classList.add("nav-active");
	body.classList.add("no-scroll");
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("nav-active");
	body.classList.remove("no-scroll");
});

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("nv")) {
		navMenu.classList.remove("nav-active");
		body.classList.remove("no-scroll");
	}
});
