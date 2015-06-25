chrome.extension.onMessage.addListener(function(request) {
  alert(request.greeting)
});