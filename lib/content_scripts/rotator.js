var deg = 0;
var $body = $('body');
var $elements = $('body *')

function rotate() {
  requestAnimationFrame(rotate);
  deg++;
  $elements.css({
    '-webkit-transform' : 'rotate(' + deg + 'deg)'
  });
}

function initiateRotator () {
  rotate();
}