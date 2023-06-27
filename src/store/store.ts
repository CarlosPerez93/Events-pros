import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import authSlice from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    auth: authSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
