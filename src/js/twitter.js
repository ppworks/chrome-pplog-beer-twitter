$(function() {
  function clicked(tab) {

    if (m = tab.url.match(/^http(?:s)?:\/\/twitter\.com\/(\w+)/)) {
      redirectToPoem(tab, m[1]);
    } else if (m = tab.url.match(/^http(?:s)?:\/\/(?:www\.)?pplog\.net\/u\/(\w+)/)) {
      redirectToTwitter(tab, m[1]);
    }
  }

  function redirectToPoem(tab, userName) {
    chrome.tabs.update(tab.id, {url: "https://pplog.net/u/" + userName});
  }

  function redirectToTwitter(tab, userName) {
    chrome.tabs.update(tab.id, {url: "https://twitter.com/" + userName});
  }

  chrome.browserAction.onClicked.addListener(clicked);
});
