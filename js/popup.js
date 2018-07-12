const shared = getEl('.share');
const closed = getEl('.close');

$('.toggle').click(function() {
  shared.toggleClass('active');
  closed.toggleClass('active');
});
closed.click(function() {
  closed.toggleClass('active');
  shared.toggleClass('active');

});