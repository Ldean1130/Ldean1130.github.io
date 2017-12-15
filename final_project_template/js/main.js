
//nav bar will change colors on scroll

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();
console.log('The distance scrolled is: ' + distanceScrolled);
if (distanceScrolled > 40) {
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
 if (currentImage===3) {
   currentImage = 0;
 } else {
   currentImage +=1;}
   $('.slider img').eq(currentImage).fadeIn(300);
});
// makes the parallax elements
function parallaxIt() {
  // create variables
  var $fwindow = $(window);
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var $contents = [];
  var $backgrounds = [];

  // for each of content parallax element
  $('[data-type="content"]').each(function(index, e) {
    var $contentObj = $(this);

    $contentObj.__speed = ($contentObj.data('speed') || 3);
    $contentObj.__fgOffset = $contentObj.offset().top;
    $contents.push($contentObj);
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 2);
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

parallaxIt();
