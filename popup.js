$(document).on('click', '#diglett', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {operation: "diglett"})
  });
});

$(document).on('click', '#rotator', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {operation: "rotator"})
  });
});

$(document).on('click', '#scrambler', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {operation: "scrambler"})
  });
});
