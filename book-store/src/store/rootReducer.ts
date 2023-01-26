import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./books/booksSlice";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(booksApi.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
