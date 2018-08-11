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

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createStore, applyMiddleware, combineReducers } from "redux";

import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    posts: postReducer,
    user: userReducer
  })
);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));

let persistor = persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <SocialApp />
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
