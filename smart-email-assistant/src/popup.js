// popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarizeEmail') {
      document.getElementById('emailSummary').innerText = message.summary;
    }
  });
  