// // import React from "react";
import "./App.scss";
import { useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/SideBar";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

// const App = () => {
//   const [emailContent, setEmailContent] = useState("");
//   const [summary, setSummary] = useState("");

//   const handleSummarize = () => {
//     // eslint-disable-next-line no-undef
//     chrome.runtime.sendMessage(
//       { action: "summarizeEmail", content: emailContent },
//       (response) => {
//         setSummary(response.summary);
//       }
//     );
//   };


//   return (
//     <>
//     <div className="app">
//     <Header />
//     <div className="popup-container">
//       <h1>Smart Email Assistant</h1>
//       <input
//         type="text"
//         placeholder="Paste email content here"
//         value={emailContent}
//         onChange={(e) => setEmailContent(e.target.value)}
//       />
//       <button onClick={handleSummarize}>Summarize Email</button>
//       {summary && <div className="summary-box">{summary}</div>}
//     </div>
//       <div className="app-body">
//         {/* <Sidebar /> */}
//         {/* <MainContent /> */}
//       </div>
//       {/* <Footer /> */}
//     </div>
//    </>
//   );
// };

// export default App;

// App.jsx

const App = () => {
  const [emailContent, setEmailContent] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    console.log('Sumarizing start');
/* eslint-disable no-undef */
if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.sendMessage(
    { action: "summarizeEmail", content: emailContent },
    (response) => {
      setSummary(response.summary); // Update the state with the summary received from background
    }
  );
}
/* eslint-enable no-undef */ 
    else {
      // console.warn("chrome.runtime not available.");
      console.log('failed')
    }
  };

  return (
    <div className="popup-container">
      <h1>Smart Email Assistant</h1>
      <input
        type="text"
        placeholder="Paste email content here"
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
      />
      <button onClick={handleSummarize}>Summarize Email</button>
      {summary && <div className="summary-box">{summary}</div>}
           {/* <Sidebar />  */}
        {/* <MainContent />  */}
        {/* <Footer /> */}
    </div>
  );
};

export default App;