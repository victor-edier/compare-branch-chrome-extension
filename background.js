chrome.action.onClicked.addListener(tab => {
  const url = new URL(tab.url);
  if (url.hostname == 'github.com') {
    if (url.pathname && url.pathname.search('/tree/')) {
      let newUrl = url.href.replace('/tree/', '/compare/')
      chrome.tabs.update(tab.id, { url: newUrl });
    }
  }
});