import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { User } from "../../common/api.tpye";
import AuthService from "../../common/services/auth.service";
import { setMessage } from "./message.slice";

const userString = JSON.stringify(localStorage.getItem("user"));
const user = JSON.parse(userString);

export const register = createAsyncThunk(
  "/auth/register",
  async (props: User, thunkApi) => {
    try {
      const { email, username, password } = props;
      const response = await AuthService.register(email, username, password);
      thunkApi.dispatch(setMessage(response.data.message));
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (props: User, thunkAPI) => {
    const { username, password } = props;
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const logout = createAsyncThunk("/auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const fulfilledRegister = JSON.stringify(register.fulfilled);
const rejectedRegister = JSON.stringify(register.rejected);
const fulfilledLogin = JSON.stringify(login.fulfilled);
const rejectedLogin = JSON.stringify(login.rejected);
const fulfilledLogOut = JSON.stringify(logout.fulfilled);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [fulfilledRegister]: (state: any) => {
      state.isLoggedIn = false;
    },
    [rejectedRegister]: (state) => {
      state.isLoggedIn = false;
    },
    [fulfilledLogin]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [rejectedLogin]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [fulfilledLogOut]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  reducers: {},
});

const { reducer } = authSlice;
export default reducer;
