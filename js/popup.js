$('.toggle').click(function() {
  $('.share').toggleClass('active');
  $('.close').toggleClass('active');
});
$('.close').click(function() {
  $('.close').toggleClass('active');
  $('.share').toggleClass('active');
});