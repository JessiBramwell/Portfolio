(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  var timer
  $("#gif").on({
    "mouseenter": function () {
      timer = setTimeout(function () {
        $("#gif").attr("src", "img/gif-selection.png")
      }, 300);
    },
    "mouseout": function () {
      $(this).attr("src", "img/gif-tv.png")
      clearTimeout(timer)
    }
  });
  $("#hike").on({
    "mouseenter": function () {
      timer = setTimeout(function () {
        $("#hike").attr("src", "img/hike-register.png")
      }, 300);
    },
    "mouseout": function () {
      $(this).attr("src", "img/hike-login.png")
      clearTimeout(timer)
    }
  });
  $("#train").on({
    "mouseenter": function () {
      timer = setTimeout(function () {
        $("#train").attr("src", "img/train-edit.png")
      }, 300);
    },
    "mouseout": function () {
      $(this).attr("src", "img/train-home.png")
      clearTimeout(timer)
    }
  });

})(jQuery); // End of use strict
