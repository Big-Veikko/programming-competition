import { createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  error: null as any,
  user: {},
  userToken,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.user = {};
      state.userToken = null;
      state.success = false;
    },
    setCredentials: (state, { payload }) => {
      state.user = payload;
    }
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;
