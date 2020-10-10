// React
import React from "react";

// Material-ui
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";

// Redux
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

// Firebase
import { auth } from "../firebase";

// Components
import SidebarChat from "./SidebarChat";

// CSS
import "./Sidebar.css";

const Sidebar = () => {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="sidebar__avatar"
          src={user.photo}
          onClick={() => auth.signOut()}
        />

        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>

        <IconButton className="sidebar__inputButton" variant="outlined">
          <RateReviewOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
