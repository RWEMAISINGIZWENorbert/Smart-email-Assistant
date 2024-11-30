console.log("Background script running...");

// Example: Listen for clicks on the extension's icon
// eslint-disable-next-line no-undef
chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked!", tab);
  // eslint-disable-next-line no-undef
  chrome.notifications.create({
    type: "basic",
    iconUrl: "icon.png",
    title: "Smart Email Assistant",
    message: "The extension is ready to assist you!"
  });
});

// Example: Handle messages from the popup
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received message:", message);
  if (message.action === "summarizeEmail") {
    // Process the email summarization logic
    sendResponse({ success: true, summary: "This is a sample summary." });
  }
});
