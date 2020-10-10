// React
import React from "react";

// Views
import Messenger from "./views/Messenger";

// Components

// CSS
import "./App.css";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <h1>Hello World</h1>

      <Messenger />
    </div>
  );
}

export default App;
