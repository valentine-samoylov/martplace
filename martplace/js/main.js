$(function(){
// rateYo
$(".product-card__rating").rateYo({
	normalFill: "#ececec",
	ratedFill: "#ffc000",
	starWidth: "15px",
	spacing: "3px",
	rating: 4.5,
});

$(".section-filter__btn").click(function () {
	$(".section-filter__dropdown").slideToggle("slow", function () {
	});
});

// Mixitup
var mixer = mixitup('.newest__items');

//<Counter>====================================================================================
// $(window).scroll(testScroll);
// var viewed = false;

// function isScrolledIntoView(elem) {
// 	var docViewTop = $(window).scrollTop();
// 	var docViewBottom = docViewTop + $(window).height();

// 	var elemTop = $(elem).offset().top;
// 	var elemBottom = elemTop + $(elem).height();

// 	return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }

// function testScroll() {
// 	if (isScrolledIntoView($(".stats")) && !viewed) {
// 		viewed = true;
// 		$(".stats__number").each(function () {
// 			$(this)
// 				.prop("Counter", 0)
// 				.animate(
// 					{
// 						Counter: $(this).text(),
// 					},
// 					{
// 						duration: 4000,
// 						easing: "swing",
// 						step: function (now) {
// 							$(this).text(Math.ceil(now));
// 						},
// 					}
// 				);
// 		});
// 	}
// }
//</Counter>===================================================================================

// Weekly Product
var weeklyProduct = new Swiper(".js-weekly-slider", {
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