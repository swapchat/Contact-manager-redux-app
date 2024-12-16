import { combineReducers, createStore } from "redux";
import contactReducer from "../reducers/contactReducer";

const store = createStore(
  combineReducers({
    contacts: contactReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("state", store.getState());
});

export default store;
