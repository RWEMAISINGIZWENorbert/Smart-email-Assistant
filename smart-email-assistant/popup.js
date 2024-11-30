// popup.js
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarizeEmail') {
      document.getElementById('emailSummary').innerText = message.summary;
    }
  });
  