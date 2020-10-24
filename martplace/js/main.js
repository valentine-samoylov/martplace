$(function(){
// rateYo
$(".product-card__rating").rateYo({
	normalFill: "#ececec",
	ratedFill: "#ffc000",
	starWidth: "15px",
	spacing: "3px",
	rating: 4.5,
	readOnly: true,
});

$(".newest__filter-btn").click(function () {
	$(".newest__dropdown").slideToggle("slow", function () {});
});

// Mixitup
var mixer = mixitup(".js-newest-mixitup");

// Weekly Product
var featuredProducts = new Swiper(".js-featured-slider", {
	loop: true,
	effect: "flip",
	navigation: {
		prevEl: ".section__slider-btn--fuchsia.section__slider-btn--prev",
		nextEl: ".section__slider-btn--fuchsia.section__slider-btn--next",
	},
});

// Followers Feed
var followersFeed = new Swiper(".js-feed-slider", {
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
var reviews = new Swiper(".js-reviews-slider", {
	loop: true,
	slidesPerView: 2,
	slidesPerScroll: 1,
	spaceBetween: 30,
	navigation: {
		prevEl: ".reviews__slider-btn--prev",
		nextEl: ".reviews__slider-btn--next",
	},
});

});