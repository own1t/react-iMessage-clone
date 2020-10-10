// React
import React from "react";

// Material-ui
import { Avatar } from "@material-ui/core";

// CSS
import "./Message.css";

const Message = ({ id, contents }) => {
  return (
    <div className="message">
      <Avatar />
      <p>Message</p>
      <small>timestamp</small>
    </div>
  );
};

export default Message;
