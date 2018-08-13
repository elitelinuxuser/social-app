import React, { Component } from "react";

//MDB React
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { ConfigureStore } from "./reducers/configureStore.js";
//Social App Component
import SocialApp from "./components/SocialApp";

//Redux
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <SocialApp />
        </div>
      </Provider>
    );
  }
}

export default App;
