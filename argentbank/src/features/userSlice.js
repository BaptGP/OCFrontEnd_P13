import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: "disconnect",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loading = "connect"
    },
    logout: (state) => {
      state.user = null;
      state.loading = "disconnect"
      localStorage.removeItem("token");
    },
    loading: (state, action) => {
      state.loading = "loading"
    }
  },
});

export const { login, logout, loading } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectState = (state) => state.user;

export default userSlice.reducer;
