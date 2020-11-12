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
