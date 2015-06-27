chrome.extension.onMessage.addListener(function(request) {

  var operation = request.operation;

  switch (operation) {
    case 'diglett':
      initiateDiglettFuckdown();
      break;
    case 'rotator':
      alert('rotator')
      break;
    case 'scrambler':
      alert('scrambler');
      break;
  }

});

