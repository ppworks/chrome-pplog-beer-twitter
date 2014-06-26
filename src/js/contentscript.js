$(function() {
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    userName = $('.profile-details').data('screen-name');
    sendResponse({userName: userName});
  });
});
