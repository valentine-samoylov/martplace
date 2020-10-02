// Weekly Product
var weeklyProduct = new Swiper(".js-weekly-slider", {
	loop: true,
	effect: "flip",
	navigation: {
		prevEl: ".section__slider-btn--fuchsia.section__slider-btn--prev",
		nextEl: ".section__slider-btn--fuchsia.section__slider-btn--next",
	},
});

var followersFeed = new Swiper(".js-feed-slider", {
	slidesPerView: 3,
	slidesPerScroll: 1,
	spaceBetween: 30,
	loop: true,
	slideShadows: true,

	navigation: {
		prevEl: ".section__slider-btn--prev",
		nextEl: ".section__slider-btn--next",
	},
});

var reviews = new Swiper(".js-reviews-slider", {
	slidesPerView: 2,
	slidesPerScroll: 1,
	spaceBetween: 30,
	loop: true,
	slideShadows: true,
	fadeEffect: {
		crossFade: true,
	},

	navigation: {
		prevEl: ".reviews__slider-btn--prev",
		nextEl: ".reviews__slider-btn--next",
	},
});
