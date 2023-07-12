import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import counterReducer from "../services/reduces/counterReducer";
import layoutReducer from "../services/reduces/layoutReducer";

// combine
const rootreducer = combineReducers({
    counterReducer: counterReducer,
    layoutReducer: layoutReducer
});

// const store = createStore(counterReducer);
const store = createStore(
    rootreducer,
    applyMiddleware(thunk));

export default store;