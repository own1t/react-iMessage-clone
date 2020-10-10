// React
import React, { forwardRef } from "react";

// Material-ui
import { Avatar } from "@material-ui/core";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

// CSS
import "./Message.css";

const Message = forwardRef(
  (
    { id, content: { timestamp, displayName, email, photo, uid, message } },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        className={`message ${user.email === email && "message__sender"}`}
        ref={ref}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Message;
