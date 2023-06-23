import { createStore } from "redux";

import counterReducer from "../services/reduces/counterReducer";

const store = createStore(counterReducer);

export default store;