var variance = 20;
var $body = $('body');

function initiateShaker () {
  $body.css({
    'position' : 'absolute'
  });
  shake();
}

function shake () {
  requestAnimationFrame(shake);
  var position = $body.position();
  var currentX = position.left;
  var currentY = position.top;
  $body.css({
    top : randCloseNumber(currentY, variance),
    left : randCloseNumber(currentX, variance)
  });
}

function randCloseNumber (number, range) {
  var sign = Math.random() > 0.5 ? 1 : -1;
  return sign * Math.random() * range + number;
}