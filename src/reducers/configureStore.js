import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      posts: postReducer,
      user: userReducer
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
