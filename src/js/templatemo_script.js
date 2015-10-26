jQuery(function ($) {
  $(window).load(function () {
    $('.external-link').unbind('click');
  });

  $(document).ready(function () {
    // scroll spy to auto active the nav item
    var topMenu = $('.templatemo-top-menu');
    $('body').scrollspy({ target: '#templatemo-nav-bar', offset: topMenu.height() + 40 });
    $('.external-link').unbind('click');
    
    // scroll to top
    $('#btn-back-to-top').click(function (e) {
      e.preventDefault();
      scrollTo('#templatemo-top');
    });    


    // scroll to specific id when click on menu
    $('.templatemo-top-menu .navbar-nav a').click(function (e) {
      e.preventDefault();
      var linkId = $(this).attr('href');
      scrollTo(linkId);      
      if ($('.navbar-toggle').is(":visible") == true) {
        $('.navbar-collapse').collapse('toggle');
      }
      
      $(this).blur();
      return false;
    });
    
    // to stick navbar on top
    $('.templatemo-top-menu').stickUp();    
  });
});

function initialize() {
}

// scroll animation 
function scrollTo(selectors) {
  if (!$(selectors).size()) return;
    
  var topMenu = $('.templatemo-top-menu') ;
  var selector_top = $(selectors).offset().top - 40;
  if(!topMenu.hasClass('isStuck')) {
    selector_top -= topMenu.height();
  }
  
  $('html,body').animate({ scrollTop: selector_top }, 'slow');
}
