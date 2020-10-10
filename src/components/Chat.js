// React
import React, { useEffect, useState } from "react";

// Material-ui
import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";

// Redux
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../features/chatSlice";
import { selectUser } from "../features/userSlice";

// Firebase
import firebase from "firebase";
import db from "../firebase";

// Components
import Message from "./Message";

// CSS
import "./Chat.css";

const Chat = () => {
  const user = useSelector(selectUser);

  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      message: inputMessage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInputMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__body">
        {messages.map(({ id, data }) => (
          <Message key={id} content={data} />
        ))}
      </div>

      <div className="chat__input">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
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
