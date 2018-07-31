import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import SocialApp from "./components/SocialApp";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import postReducer from "./reducers/postReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { BrowserRouter } from "react-router-dom";
const store = createStore(
  combineReducers({ posts: postReducer }),
  applyMiddleware(thunk, logger)
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <SocialApp />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
