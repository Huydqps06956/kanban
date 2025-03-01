import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appInfos";
import { act } from "react";
export interface AuthState {
  token: string;
  _id: string;
  name: string;
  rule: number;
}
const initialState: AuthState = {
  token: "",
  _id: "",
  name: "",
  rule: 0,
};
const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = action.payload;
      syncLocalStorage(action.payload);
    },
    removeAuth: (state, action) => {
      state.data = initialState;
      syncLocalStorage({ data: initialState });
    },
    refreshToken: (state, action) => {
      state.data.token = action.payload;
      syncLocalStorage({ data: state.data });
    },
  },
});

const syncLocalStorage = (state: { data: AuthState }) => {
  console.log(state);
  localStorage.setItem(localDataNames.authData, JSON.stringify(state));
};

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth, refreshToken } = authSlice.actions;

export const authSelector = (state: { authReducer: { data: AuthState } }) =>
  state.authReducer.data;
