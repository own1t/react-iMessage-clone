// React
import React, { useEffect, useState } from "react";

// Material-ui
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

// Firebase
import db, { auth } from "../firebase";

// Components
import SidebarChat from "./SidebarChat";

// CSS
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatName = prompt("Please Enter a Chat Name");
    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    }
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__avatar"
          src={user.photo}
          onClick={handleSignOut}
        />

        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton
          className="sidebar__inputButton"
          variant="outlined"
          onClick={addChat}
        >
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
