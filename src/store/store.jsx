import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../reducers/contactReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

store.subscribe(() => {
  console.log("state", store.getState());
});

export default store;
