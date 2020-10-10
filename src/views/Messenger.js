// React
import React from "react";

// Components
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

// CSS
import "./Messenger.css";

const Messenger = () => {
  return (
    <div className="messenger">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Messenger;
