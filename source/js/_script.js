// rateYo
$(".product-card__rating").rateYo({
	normalFill: "#ececec",
	ratedFill: "#ffc000",
	starWidth: "15px",
	spacing: "3px",
	rating: 4.5,
	readOnly: true,
});

$(".section-filter__btn").click(function () {
	$(".section-filter__dropdown").slideToggle("slow", function () {});
});

// Mixitup
var mixer = mixitup(".js-newest-mixitup");
