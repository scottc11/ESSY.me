// call function which causes the loading modal to a) remove loading bar immediately
// and b) increase the modals opacity to 'fade in' the background image, even though the
// background image will already be loaded 'underneath the modal', then when modal becomes
// %100 opaque, display the page content.


// fade out the modal when background image is loaded.
function backgroundReady() {

  $('#loader').attr('style', 'display: none;');
  $('#modal').addClass('fade-out');

  $('#modal').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', transitionBody());
}

$( window ).ready(
  function() {

    console.log("document READY");

  }
);

function transitionBody() {
  console.log("transitionBody() START");
  $('#page').attr('style', 'display: block;');

  

  console.log("transitionBody() END");
}


// Background Image Loading -------------------

var backgroundImage = new Image();

var backgroundSource = "../img/background_image_alt.jpg";

backgroundImage.onload = function() {
  console.log("setting background");
  $('body').attr("style", "background-image: url(" + backgroundSource + ")");
  // setTimeout(function() { backgroundReady() }, 1000);
  backgroundReady();
};

backgroundImage.src = backgroundSource;


// Background Image Loading -------------------
