import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.actions";

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
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.user = payload?.userDetails;
      state.userToken = payload?.userDetails.token;
      state.success = true;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = { message: payload };
      state.success = false;
    });
  }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;
