$(function() {
  function clicked(tab) {

    if (m = tab.url.match(/^http(?:s)?:\/\/twitter\.com\/(\w+)/)) {
      redirectToPoem(tab, m[1]);
    } else if (m = tab.url.match(/^http(?:s)?:\/\/twitter\.com/)) {
      findUserName(tab);
    } else if (m = tab.url.match(/^http(?:s)?:\/\/(?:www\.)?pplog\.net\/u\/(\w+)/)) {
      redirectToTwitter(tab, m[1]);
    }
  }

  function findUserName(tab) {
    chrome.tabs.sendRequest(tab.id, {}, function(response) {
      redirectToPoem(tab, response.userName);
    });
  }

  function redirectToPoem(tab, userName) {
    if (userName) {
      chrome.tabs.update(tab.id, {url: "https://pplog.net/u/" + userName});
    }
  }

  function redirectToTwitter(tab, userName) {
    if (userName) {
      chrome.tabs.update(tab.id, {url: "https://twitter.com/" + userName});
    }
  }

  chrome.browserAction.onClicked.addListener(clicked);
});
