$(document).on('click', 'a', function (e) {
  e.preventDefault();
  var operation = $(e.target).attr('id');
  trigger(operation);
})

function trigger (operation) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {operation: operation})
  });
}