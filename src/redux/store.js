import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import dataReducer from "./dataSlice";

// Reducers ko ek object me alag se define karna maintainability ke liye better hai
const rootReducer = {
  counter: counterReducer,
  data: dataReducer,
};

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
