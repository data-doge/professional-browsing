chrome.extension.onMessage.addListener(function(request) {

  var operation = request.operation;

  switch (operation) {
    case 'diglett':
      initiateDiglettFuckdown();
      break;
    case 'rotator':
      initiateRotator();
      break;
    case 'scrambler':
      initiateScrambler();
      break;
  }

});

