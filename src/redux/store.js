import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import dataReducer from "./dataSlice";
import { apiSlice } from "./apiSlice";

// Reducers ko ek object me alag se define karna maintainability ke liye better hai
const rootReducer = {
  counter: counterReducer,
  data: dataReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
};

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default Store;
