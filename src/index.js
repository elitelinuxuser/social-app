import React from "react";
import ReactDOM from "react-dom";

//MDB React Styles
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//Custom Styling
import "./styles/styles.scss";

//App entry
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//Rendering Components
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
