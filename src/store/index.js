import rootReducer from "../redusers";

const { createStore } = require("redux");
const store = createStore(rootReducer);

export default store;
