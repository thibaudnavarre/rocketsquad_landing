(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var i = 0;
  var speed = 50;
  var txt = 'Boost your development.<Launch your ideas.';
  var outputText = ''
  $('document').ready(function typeWriter() {
    if (i < txt.length && txt.charAt(i)!='<') {
      outputText += txt.charAt(i);
      $('.typewritten').html(outputText);
      i++;      
      setTimeout(typeWriter, speed);
    } else if (i < txt.length){
      outputText += '<br>';
      $('.typewritten').html(outputText);
      i++;      
      setTimeout(typeWriter, speed);
    }
  })
})(jQuery); // End of use strict
