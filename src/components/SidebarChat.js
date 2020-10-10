// React
import React, { useEffect, useState } from "react";

// Material-ui
import { Avatar } from "@material-ui/core";

// timeago.js
import * as timeago from "timeago.js";

// Redux
import { useDispatch } from "react-redux";
import { setChat } from "../features/chatSlice";

// Firebase
import db from "../firebase";

// CSS
import "./SidebarChat.css";

const SidebarChat = ({ id, chatName }) => {
  const dispatch = useDispatch();

  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  const selectChat = () => {
    dispatch(
      setChat({
        chatId: id,
        chatName: chatName,
      })
    );
  };

  return (
    <div className="sidebarChat" onClick={selectChat}>
      <Avatar src={chatInfo[0]?.photo} />

      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {timeago.format(
            new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()
          )}
        </small>
      </div>
    </div>
  );
};

export default SidebarChat;
