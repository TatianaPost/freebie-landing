(function () {
  "use strict";

  // carousel
  var callOwlCarousel = function () {
    var carousel = $('.owl-carousel');
    carousel.owlCarousel({
      items: 1,
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      animateOut: 'fadeOut'
    });
  };
  // call functions
  $(function () {
    callOwlCarousel();
  });
}());