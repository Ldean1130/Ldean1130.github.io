// Make it rain!
//nav bar will change colors on scroll
//carousel
//image will become larger with mouse hover
//title of cookie will appear bolder with mouse hover
$(window).on('scroll', function () {
  	// Step 1: Google $(window).scrollTop();
  	var distanceScrolled = $(window).scrollTop();

  	console.log('The distance scrolled is: ' + distanceScrolled);

  	// Step 2: Write Rest of JS here
  	if (distanceScrolled > 40) {
  		$('nav').addClass('scrolled');
  	} else {
  		$('nav').removeClass('scrolled');
    }
 });
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
 //if currentImage = 3
 if (currentImage===3) {
 // set the currentImage to 0
   currentImage = 0;
 } else {
     // increment currentImage by 1 using ++
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
// Create a variable to store the imageNumber and set it to 0
  // Hide all imgs
  // Show img(0) on load

// When the user clicks the next button
  // Hide all images
  // Show img(imagenumber ++)
  // If imageNumber = 3
    // Then
    // imageNumber = 0
    // show img(imageNumber)

// When the user clicks the previous button
  // Hide all images
  // Show img(imagenumber --)
  // If imageNumber = 0
    // Then
    // imageNumber = 3
    // show img(imageNumber)
