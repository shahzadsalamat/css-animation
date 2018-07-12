var $button = $('#submit');
var $reset = $('#reset');

$button.on('click', function(e) {
  e.preventDefault();
  setTimeout(function() {
     $button.addClass('clicked');
  }, 500);
  
  $button.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function() {
        // Do something once!
        $(this).addClass('submited');
  });
});



$reset.on('click', function(e) {
  e.preventDefault();
  $button.removeClass('clicked');
  $button.removeClass('submited');
  $button.off('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd');
});