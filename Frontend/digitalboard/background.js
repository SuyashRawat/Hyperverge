chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension installed');
  chrome.tabs.create({ url: `http://localhost:3000` }, (tab) => {
    console.log('New tab created:', tab);
  });
});

chrome.runtime.onStartup.addListener(() => {
  console.log('Chrome extension started up');
  chrome.tabs.create({ url: `http://localhost:3000` }, (tab) => {
    console.log('New tab created on startup:', tab);
  });
});
