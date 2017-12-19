
//nav bar will change colors on scroll

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();
console.log('The distance scrolled is: ' + distanceScrolled);
if (distanceScrolled > 45) {
$('nav').addClass('scrolled');
} else {
$('nav').removeClass('scrolled');
  }
  });

 // Carousel-----------

 // First step is to Hide all images
$('.slider img').hide();
// Create a variable currentImage to hold the current image number displayed and set it to 0 initially
var currentImage = 0;
// Reveal first image only using the variable currentImage
$('.slider img').eq(currentImage).fadeIn(300);
//When user hits Next button:
$('#next').on('click', function() {
 //hide all images
$('.slider img').hide();

 if (currentImage<3) {
//set the currentImage to 0
 currentImage = 0;
 } else {
  //increment currentImage by 1 using ++
   currentImage +=1;
 }
   //fade in the image using currentImage as the value for the eq statement... i.e. eq(currentImage)
   $('.slider img').eq(currentImage).fadeIn(300);

});
$('#previous').on('click', function() {
  $('.slider img').hide();
 if ( currentImage<3) {
   currentImage = 0;
 } else {
   currentImage +=1;}
   $('.slider  img').eq(currentImage).fadeIn(300);
   $('#dots').on('click', function(e) {
     $('.slider img').hide();
    if (currentImage===3) {
      currentImage = 0;
    } else {
      currentImage +=1;}
      $('.slider img').eq(currentImage).fadeIn(300);
   });

});



// makes the parallax elements
function parallaxIt() {
  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var $contents = [];
  var $backgrounds = [];
console.log('check baby, check baby, 1,2,3,4... ' + $backgrounds );
  // for each of content parallax element
  $('[data-type="content"]').each(function(index, e) {
    var $contentObj = $(this);

    $contentObj.__speed = ($contentObj.data('speed') || 2);
    $contentObj.__fgOffset = $contentObj.offset().top;
    $contents.push($contentObj);
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 3);
    $backgroundObj.__fgOffset = $backgroundObj.offset().top;
    $backgrounds.push($backgroundObj);
  });

  // update positions
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $contents.forEach(function($contentObj) {
      var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

      $contentObj.css('top', yPos);
    })

    $backgrounds.forEach(function($backgroundObj) {
      var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

      $backgroundObj.css({
        backgroundPosition: '50% ' + yPos + 'px'
      });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
};

var windowWidth = $(window).innerWidth();
if (windowWidth > 700) {
    parallaxIt();
}

$(window).on('resize', function () {
  if (windowWidth > 700) {
      parallaxIt();
  }
});



/* Hamburger menu

----------------*/


$('.hamburger').on('click', function () {
  
  $('.page-links').toggleClass('menu-open');
});


/*-------------



/* nav
---------------*/
// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('html, body').animate({
    scrollTop: targetOffset
  }, 500);

});

/* KONAMI
-----------------*/
var kkeys = [];
var konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);

    // Add your own easter egg here!!
    //Fade in the image
$('body').fadeIn ('img/source.gif');
  }
});
