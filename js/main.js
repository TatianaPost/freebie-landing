(function () {
  var callOwlCarousel = function() {
    $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      center: true,
      // stagePadding: -100,
      // nav: true,
      // autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
    });
  };
  // call functions
  $(function () {
    callOwlCarousel();
  });
}());