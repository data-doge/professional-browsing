chrome.extension.onMessage.addListener(function(request) {

  var operation = request.operation;

  switch (operation) {
    case 'diglett':
      initiateDiglettFuckdown();
      break;
    case 'rotator':
      alert('rotator');
      break;
    case 'scrambler':
      alert('scrambler');
      break;
  }
  
});

function initiateDiglettFuckdown () {

  var diglettUrl = "https://fc06.deviantart.net/fs70/f/2010/165/9/4/050___Diglett_by_cammarin.png";

  $('img').attr('src', diglettUrl);
  $('a').text('DIGLETT');

  $('*').each(function(i, element) {
    var width = $(element).width();
    $(element).css({
      'backgroundImage' : 'url(' + diglettUrl + ')',
      'backgroundSize' : width / 10
    });
  });

}