$(function(){
// Perfect-scroll
$(".features__text, .item-card__text, .reason__text").overlayScrollbars({
	sizeAutoCapable: true,
	paddingAbsolute: true
});

// rateYo
$(".item-card__rating").rateYo({
	normalFill: "#ececec",
	ratedFill: "#ffc000",
	starWidth: "15px",
	spacing: "3px",
	rating: 4.5,
	readOnly: true,
});

// Newest filter-dropdown
let newestDropdown = $(".newest__dropdown"),
	dropdownTrigger = $(".newest__filter-btn")
	;

$(dropdownTrigger).click(function (e) {
	e.stopPropagation();
	$(newestDropdown).slideToggle("slow");
});

$(document).click(function (e) {
	if (!newestDropdown.is(e.target)
		&& newestDropdown.has(e.target).length === 0) {
		newestDropdown.slideUp();
	}
});

// Mixitup
var mixer = mixitup(".js-newest-mixitup");

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

});



