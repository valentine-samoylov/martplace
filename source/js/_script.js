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
