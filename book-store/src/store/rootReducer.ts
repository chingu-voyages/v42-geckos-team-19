import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { booksApi } from "./books/booksSlice";
import userReducer from "./user/userSlice";
import cartReducer from "./cart/cartSlice";

const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  [booksApi.reducerPath]: booksApi.reducer,
})

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(booksApi.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
