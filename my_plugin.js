
$(document).ready(function() {

$('.responsive_menu').click(function(){

  $('.menu').slideToggle();
});

  ///==============owl================/////
  new WOW().init();
  $('.owl-example').owlCarousel({
    singleItem: true,    
    autoPlay: true,
    stopOnHover: false,
    slideSpeed: 1000,
    navigation: false,
    pagination: false,
    navigationText: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  });
  
 

});

