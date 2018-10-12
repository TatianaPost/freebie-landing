(function () {
  "use strict";
  // go-top button
  var pzTopDirection = function () {
    var pxShow = 500,         // height on which the button will show
      fadeInTime = 400,         // how slow/fast you want the button to show
      fadeOutTime = 400,         // how slow/fast you want the button to hide
      scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
      goTopButton = $("#go-top");
    // Show or hide the sticky footer button
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= pxShow) {
        goTopButton.fadeIn(fadeInTime);
      } else {
        goTopButton.fadeOut(fadeOutTime);
      }
    });
  };
  // carousel
  var callOwlCarousel = function () {
    var carousel = $('.owl-carousel');
    carousel.owlCarousel({
      items: 1,
      loop: true,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 3000,
      autoplayHoverPause: false,
      animateOut: 'fadeOut'
    });
  };
  // call functions
  $(function () {
    pzTopDirection();
    callOwlCarousel();
  });
}());
// nav scrolling highlighting
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu-center ul li a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
});
// waypoint animation
$(document).ready(function(){
  $('.animation-left').css('opacity', 0).waypoint(function() {
    $('.animation-left').addClass('fadeInLeft');
  }, { offset: '50%' });
  $('.animation-right').css('opacity', 0).waypoint(function() {
    $('.animation-right').addClass('fadeInRight');
  }, { offset: '50%' });
  $('.animation-fade').css('opacity', 0).waypoint(function() {
    $('.animation-fade').addClass('fadeInDown');
  }, { offset: '75%' });
});