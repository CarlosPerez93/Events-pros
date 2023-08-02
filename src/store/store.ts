import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import authReducer from "./slices/auth.slice";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    auth: authReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
