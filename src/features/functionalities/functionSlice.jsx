import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};

const functionSlice = createSlice({
  name: "function",
  initialState,
  reducers: {
    activeMenu: (state, action) => {
      state.active = action.payload;
    },
  },
  extraReducers: {},
});

export const { activeMenu } = functionSlice.actions;
export const getMenuStatus = (state) => state.function.active;

export default functionSlice.reducer;
