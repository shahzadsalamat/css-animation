const shared = $('.share');
const closed = $('.close');

$('.toggle').click(function() {
  shared.toggleClass('active');
  closed.toggleClass('active');
});
closed.click(function() {
  closed.toggleClass('active');
  shared.toggleClass('active');

});