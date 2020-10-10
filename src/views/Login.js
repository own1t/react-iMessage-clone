// React
import React from "react";

// Material-ui
import { Button } from "@material-ui/core";

// Firebase
import { auth, provider } from "../firebase";

// CSS
import "./Login.css";

const Login = () => {
  const handleSignIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png"
          alt="iMessage Logo"
        />
        <h1>iMessage</h1>
      </div>

      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default Login;
