// Replace Google's homepage content with your React app's root element
document.body.innerHTML = '<div id="root"></div>';
document.body.style.background = 'linear-gradient(to bottom left, black, white)';

// Inject the React app's bundled JavaScript file
const script = document.createElement('script');
script.src = chrome.runtime.getURL('static/js/main.js'); // Adjust the filename if necessary
document.body.appendChild(script);

// Inject the React app's bundled CSS file
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = chrome.runtime.getURL('static/css/main.css'); // Adjust the filename if necessary
document.head.appendChild(link);

const script = document.createElement('script');
script.src = 'https://platform.twitter.com/widgets.js';
script.async = true;
document.body.appendChild(script);

