$(document).ready(function() {
  $('.nav__list-link').on('click', function() {
      var scrollAnchor = $(this).attr('data-scroll'),
          scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top;
      $('body,html').animate({
          scrollTop: scrollPoint
      }, 500);
      return false;
  });

  $(window).scroll(function() {
  var windscroll = $(window).scrollTop();
    $('.out section').each(function(i){
      if($(this).position().top <= windscroll +100) {
        $('.nav__list-link.is-active').removeClass('is-active');
        $('.nav__list-link').eq(i).addClass('is-active');
      }
    });
  }).scroll();
});