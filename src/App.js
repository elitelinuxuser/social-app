import React, { Component } from "react";

//MDB React
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//Social App Component
import SocialApp from "./components/SocialApp";

//Redux
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import postReducer from "./reducers/postReducer";
import userReducer from "./reducers/userReducer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";

import { createStore, applyMiddleware, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    posts: postReducer,
    user: userReducer
  }),
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
