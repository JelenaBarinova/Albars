var top_menu_height = 0;
jQuery(function ($) {
  $(window).load(function () {
    $('.external-link').unbind('click');
  });

  $(document).ready(function () {

console.log('templatemo script is running 1');

    top_menu_height = $('.templatemo-top-menu').height();
    // scroll spy to auto active the nav item
    $('body').scrollspy({ target: '#templatemo-nav-bar', offset: top_menu_height + 10 });
    $('.external-link').unbind('click');
    
console.log('templatemo script is running 2');

    // scroll to top
    $('#btn-back-to-top').click(function (e) {
      e.preventDefault();
      scrollTo('#templatemo-top');
    });
    
console.log('templatemo script is running 3');


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
    
console.log('templatemo script is running 4');


    // to stick navbar on top
    console.log($('.templatemo-top-menu'));
    $('.templatemo-top-menu').stickUp();
    
  });
});

function initialize() {
}

    
console.log('templatemo script is running 5');



// scroll animation 
function scrollTo(selectors) {

  if (!$(selectors).size()) return;
  var selector_top = $(selectors).offset().top - top_menu_height;
  $('html,body').animate({ scrollTop: selector_top }, 'slow');

}

    
console.log('templatemo script is running 6 the end');

