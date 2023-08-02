import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

type payload = {
  payload: {
    username: string;
    password: string;
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }: payload) => ({
      ...state,
      username: payload.username,
      password: payload.password,
    }),
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
