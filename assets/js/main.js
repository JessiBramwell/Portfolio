
(function ($) {

  $(document).on("scroll", onScroll);

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.scroll').each(function () {

      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (scrollPos < 300) {
        $('.scroll:first-child').addClass("active");
      }
      else if (refElement.position().top <= (scrollPos + 300) && refElement.position().top + refElement.height() > (scrollPos + 200)) {
        $('a').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    });
  }


  const $window = $(window);
  const $header = $('.skills-list h4');
  const $ul = $('.skills-list_ul');
  const $contact = $('#contact');

  $ul.on('show.bs.collapse', toggleChevronList);
  $ul.on('hide.bs.collapse', toggleChevronList);
  $('.contact').on('show.bs.collapse', toggleChevronNav);
  $('.contact').on('hide.bs.collapse', toggleChevronNav);

  function resize() {
    if ($window.width() < 769) {
      $contact.addClass('show')
    }
    else {
      $contact.removeClass('show')
    }

    if ($window.width() < 992) {
      $ul.addClass('collapse');
      $header.attr('data-toggle', 'collapse');
      checkShow();
    }
    else {
      $header.removeAttr('data-toggle');
      $ul.removeClass('collapse hide');
    }
  }

  function toggleChevronList(e) {
    $(e.target)
      .siblings('h4')
      .children('.chevron')
      .children('.fas')
      .toggleClass('fa-chevron-right fa-chevron-down');
  }

  function toggleChevronNav(e) {
    console.log(e.target);

    $('.icon-title')
      .children('i')
      .toggleClass('fa-chevron-right fa-chevron-down');
  }

  function checkShow() {
    if ($ul.hasClass('show')) {
      $ul.each(function () {
        if ($(this).hasClass('show')) {

          $(this)
            .siblings('h4')
            .children('.chevron')
            .children('.fas')
            .removeClass('fa-chevron-right')
            .addClass('fa-chevron-down');
        }
      })
    }
  }


  $window
    .resize(resize)
    .trigger('resize');
})(jQuery);



