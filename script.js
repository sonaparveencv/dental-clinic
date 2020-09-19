// Owl-Carousel settings (staff on homepage)
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:3
            },
            1000:{
                items:4
            }
        }
  })
});

// Year in footer
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
  });
