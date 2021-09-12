import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { categoryListReducer } from "./reducers/categoryReducers";
import { serviceListReducer } from "./reducers/serviceReducers";
import { bestsellerListReducer } from "./reducers/bestSellerReducers";

const reducer = combineReducers({
  categoryList: categoryListReducer,
  serviceList: serviceListReducer,
  bestsellerList: bestsellerListReducer,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
