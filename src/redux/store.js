import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import counterReducer from "../services/reduces/counterReducer";
import layoutReducer from "../services/reduces/layoutReducer";

// const store = createStore(counterReducer);
const store = createStore(layoutReducer,
    applyMiddleware(thunk));

export default store;