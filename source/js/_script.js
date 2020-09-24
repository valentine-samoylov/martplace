$(".product-card__rating").rateYo({
	normalFill: "#ececec",
	ratedFill: "#ffc000",
	starWidth: "15px",
	spacing: "3px",
	rating: 4.5,
});

$(".filter__btn").click(function () {
	$(".filter__dropdown").slideToggle("slow", function () {
	});
});

var mixer = mixitup('.newest-products__items');
