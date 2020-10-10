// React
import React, { useState } from "react";

// Material-ui
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

// CSS
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__body">
        <h2>message</h2>
      </div>

      <div className="chat__input">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="iMessage"
          />
          <button type="submit">Send</button>
        </form>

        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
