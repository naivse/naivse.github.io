"use strict";

$(document).ready(function () {
    $(".hero-slider").owlCarousel({
        items: 1,
        dots: true
    });
    $(".popular-brands-slider").owlCarousel({
        items: 6,
        dots: true,
        margin: 30
    });
    $('.dropdown-menu a').click(function (e) {
        e.stopPropagation();
        $(this).tab('show');
    });

    $(".search-form").each(function () {
        var classes = $(this).attr("class"),
            id = $(this).attr("id"),
            name = $(this).attr("name");
        var template = '<div class="' + classes + '">';
        template += '<span class="search-form-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function () {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="search-form-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function () {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function () {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".search-form-trigger").on("click", function () {
        $('html').one('click', function () {
            $(".search-form").removeClass("opened");
        });
        $(this).parents(".search-form").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
        $(this).parents(".search-form-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".search-form").removeClass("opened");
        $(this).parents(".search-form").find(".search-form-trigger").text($(this).text());
    });
});

$(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double"

});