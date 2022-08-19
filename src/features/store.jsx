import { configureStore } from "@reduxjs/toolkit";
import functionReducer from "./functionalities/functionSlice";

export const store = configureStore({
  reducer: {
    function: functionReducer,
  },
});
