import React from "react";
import ReactDOM from "react-dom";
//Custom styles
import "./styles/styles.scss";

//Importing App
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
