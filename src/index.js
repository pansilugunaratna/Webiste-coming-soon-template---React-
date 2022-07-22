import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./components/Countdown/Timer";
import Preloader from "./components/Preloader/Preloader";
import Optin from "./components/Optin/Optin";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>#underconstruction</h3>
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Countdown />
        <Optin />

        <div className="grid-container">
          <div class="grid-item">
            <h5>Address:</h5>26985 Brighton Lane, Lake Forest, CA 92630.
          </div>
          <div class="grid-item">
            <h5>Telephone:</h5>+94 71 xxx xxxx
          </div>
          <div class="grid-item">
            <h5>Email:</h5>loremipsum@gmail.com
          </div>
        </div>

        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
