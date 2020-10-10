// React
import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";

// Views
import Messenger from "./views/Messenger";
import Login from "./views/Login";

// Components

// Firebase
import { auth } from "./firebase";

// CSS
import "./App.css";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    // BEM naming convention
    <div className="app">{user ? <Messenger /> : <Login />}</div>
  );
}

export default App;
