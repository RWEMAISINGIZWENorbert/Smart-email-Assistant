// import React from "react";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="summary">
        <h2>Summarized Email</h2>
        <p>No email selected. Please select an email to summarize.</p>
      </section>

      <section id="replies">
        <h2>Reply Suggestions</h2>
        <p>No suggestions available. Generate replies by clicking the button.</p>
      </section>
    </main>
  );
};

export default MainContent;
