chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'http://localhost:3000' }); // Assuming React app runs on localhost:3000
});
