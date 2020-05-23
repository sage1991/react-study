import React from "react";
import "./App.css";
import Blog from "./containers/Blog/Blog";
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <BrowserRouter basename="/reactapp">
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
}

export default App;
