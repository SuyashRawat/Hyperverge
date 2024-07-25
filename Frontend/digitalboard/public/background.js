chrome.runtime.onInstalled.addListener(() => {
    console.log('Chrome extension installed');
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  });
  
  chrome.runtime.onStartup.addListener(() => {
    console.log('Chrome extension started up');
    chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
  });
  