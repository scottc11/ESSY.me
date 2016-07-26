
function showModal() {
  $('.projects-modal').addClass('show');
}

function hideModal() {
  $('.projects-modal').removeClass('show');
}


$('.projects-open-button').on('click', showModal);
$('.projects-modal').on('click', hideModal);
