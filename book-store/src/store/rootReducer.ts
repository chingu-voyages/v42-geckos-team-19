import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
