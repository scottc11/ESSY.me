// call function which causes the loading modal to a) remove loading bar immediately
// and b) increase the modals opacity to 'fade in' the background image, even though the
// background image will already be loaded 'underneath the modal', then when modal becomes
// %100 opaque, display the page content.


function onReady() {

  $('#loader').attr('style', 'display: none;');
  $('#modal').addClass('fade-out');

  $('#modal').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function() {
      $('#page').attr('style', 'display: block;');
    });
}


// Background Image Loading -------------------

  var backgroundImage = new Image();

  var backgroundSource = "../img/background_image_alt.jpg";

  backgroundImage.onload = function() {
    $('body').attr("style", "background-image: url(" + backgroundSource + ")");
    setTimeout(function() { onReady() }, 1000);
  };

  backgroundImage.src = backgroundSource;


// Background Image Loading -------------------
