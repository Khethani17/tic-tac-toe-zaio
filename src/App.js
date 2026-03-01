// src/App.js

import React from "react";
import Provider from "./contexts";
import Router from "./Router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
