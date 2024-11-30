// content.js

// Function to extract the email content from a Gmail page
function extractEmailContent() {
    const emailBody = document.querySelector('.ii.gt')?.innerText;  // Class selector for email body in Gmail
    if (emailBody) {
      return emailBody;
    }
    return null; // Return null if no email body is found
  }
  
  // Listen for messages from the popup or background script
  // eslint-disable-next-line no-undef
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getEmailContent") {
      const emailContent = extractEmailContent(); // Extract email content
      if (emailContent) {
        sendResponse({ content: emailContent });  // Send the content back to the background
      } else {
        sendResponse({ content: "No email found" }); // If no email content is found
      }
    }
    return true;  // Keep the message channel open for async response
  });
  