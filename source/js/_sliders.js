// Weekly Product
var featuredProducts = new Swiper(".js-featured-slider", {
	loop: true,
	effect: "flip",
	// spaceBetween: 30,
	navigation: {
		prevEl: ".section__slider-btn--fuchsia.section__slider-btn--prev",
		nextEl: ".section__slider-btn--fuchsia.section__slider-btn--next",
	},
});

// Followers Feed
var followersFeed = new Swiper(".js-followers-feed-slider", {
	loop: true,
	slidesPerView: 3,
	slidesPerScroll: 1,
	spaceBetween: 30,
	navigation: {
		prevEl: ".section__slider-btn--prev",
		nextEl: ".section__slider-btn--next",
	},
});

// Clients Feedback (Reviews)
var feedback = new Swiper(".js-feedback-slider", {
	loop: true,
	slidesPerView: 2,
	slidesPerScroll: 1,
	spaceBetween: 30,
	navigation: {
		prevEl: ".feedback__slider-btn--prev",
		nextEl: ".feedback__slider-btn--next",
	},
});
