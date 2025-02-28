import { createSlice } from "@reduxjs/toolkit";
import { localDataNames } from "../../constants/appInfos";
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
    },
    removeAuth: (state, action) => {
      state.data = initialState;
      syncLocalStorage({ data: initialState });
    },
  },
});

const syncLocalStorage = (state: { data: AuthState }) => {
  localStorage.setItem(localDataNames.authData, JSON.stringify(state));
};

export const authReducer = authSlice.reducer;
export const { addAuth, removeAuth } = authSlice.actions;

export const authSelector = (state: { authReducer: { data: AuthState } }) =>
  state.authReducer.data;
