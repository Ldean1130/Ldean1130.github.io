
//nav bar will change colors on scroll

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();
console.log('The distance scrolled is: ' + distanceScrolled);
if (distanceScrolled > 50) {
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

    $contentObj.__speed = ($contentObj.data('speed') || 3);
    $contentObj.__fgOffset = $contentObj.offset().top;
    $contents.push($contentObj);
  });

  // for each of background parallax element
  $('[data-type="background"]').each(function() {
    var $backgroundObj = $(this);

    $backgroundObj.__speed = ($backgroundObj.data('speed') || 4);
    $backgroundObj.__fgOffset = $backgroundObj.offset().top;
    $backgrounds.push($backgroundObj);
  });

  // update positions
  $fwindow.on('scroll resize', function() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    $contents.forEach(function($contentObj) {
      var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

      $contentObj.css('top', yPos);
    });

    $backgrounds.forEach(function($backgroundObj) {
      var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

      $backgroundObj.css({
        backgroundPosition: '50% ' + yPos + 'px'
      });
    });
  });

  // triggers winodw scroll for refresh
  $fwindow.trigger('scroll');
}

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
/* Scroll to Top */
$(window).scroll(function() {
    if ($(this).scrollTop() >= 70) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
/*
show more/ show less
---------------------*/
$(document).ready(function() {
  // Configure/customize these variables.
  var showChar = 150;  // How many characters are shown by default
  var ellipsestext = "...";
  var moretext = "Tell me more...";
  var lesstext = "Nah, I'm good, close it...";
$('.more').each(function() {
  var content = $(this).html();
  if(content.length > showChar) {
  var c = content.substr(0, showChar);
  var h = content.substr(showChar, content.length - showChar);
  var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
  $(this).html(html);
      }
  });
 $(".morelink").click(function(){
      if($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
      } else {
          $(this).addClass("less");
          $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });
});






/* KONAMI
-----------------*/
/*var kkeys = [];
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
*/
