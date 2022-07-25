import { createStore, combineReducers } from "redux";
import cartReducer from "./Cart/cartReducer";
import { userReducer } from "./User/userReducer";

const rootReducer = combineReducers({ cart: cartReducer, user: userReducer });
const store = createStore(rootReducer);

export default store;
