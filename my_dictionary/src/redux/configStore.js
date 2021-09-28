import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import word from "./modules/word";

const Middlewares = [thunk];
const rootReducer = combineReducers({ word });
const enhancer = applyMiddleware(...Middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
