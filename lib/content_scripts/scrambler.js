var windowWidth = $(window).width();
var windowHeight = $(window).height();

function initiateScrambler () {
  $(document).on('mousemove', function () {
    scramble();
  });
}

function scramble () {
  $('body *').each(function (index, element) {
    var position = randPosition();
    $(element).css({
      'position' : 'fixed',
      'top' : position.y,
      'left' : position.x
    });
  });
}

function randPosition () {
  return {
    x : Math.random() * windowWidth,
    y : Math.random() * windowHeight
  };
}