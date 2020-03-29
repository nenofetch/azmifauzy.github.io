$(document).ready(function() {

  // SCROLL SPY
  $('.scroll-pg').click(function(e) {

    var href = $(this).attr('href');
    var to = $(href);
    
    $('html, body').animate({
      scrollTop: to.offset().top - 60
    });

    e.preventDefault();
  });


  // MIXITUP
  var mixer = mixitup('.projects'); 

  // WINDOW SCROLL NAVBAR
  $(window).scroll(function() {
    if(window.pageYOffset > 0 ) {
      $('.navbar').addClass('bg-white border-bottom');
    } else {
      $('.navbar').removeClass('bg-white border-bottom');
    }
  });
});