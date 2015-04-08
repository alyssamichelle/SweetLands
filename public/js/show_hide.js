$(function() {
  $('.button, .overlay').on('click', toggleForm);

  function toggleForm() {
    $('.form').toggleClass('show');
    $('.overlay').toggleClass('show');
  };
});
