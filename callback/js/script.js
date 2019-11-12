$(document).ready(function(){
    $("#slider_container").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
            nav:false
        },
        575.98:{
            items: 2,
            nav:false
        },
        767.98:{
            items:2,
            nav:false
        },
        991.98:{
            items:3,
            nav:false,
            loop:false
        }
    }
});