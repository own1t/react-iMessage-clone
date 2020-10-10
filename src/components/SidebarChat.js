// React
import React from "react";

// Material-ui
import { Avatar } from "@material-ui/core";

// CSS
import "./SidebarChat.css";

const SidebarChat = ({ id, chatName }) => {
  return (
    <div className="sidebarChat">
      <Avatar />

      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>Last Message sent</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
