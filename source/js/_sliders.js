// Weekly Product
var weeklyProduct = new Swiper(".swiper-container", {
	loop: true,
	effect: "flip",
	coverflowEffect: {
		rotate: 10,
		slideShadows: false,
	},

	navigation: {
		prevEl: ".section__slider-btn--prev",
		nextEl: ".section__slider-btn--next",
	},
});
