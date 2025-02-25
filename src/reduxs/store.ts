import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";

const store = configureStore({
  // 1
  reducer: {
    authReducer,
  },
});

export default store;
