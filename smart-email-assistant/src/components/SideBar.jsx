// import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#summary">Summarize Email</a></li>
          <li><a href="#replies">Generate Replies</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
