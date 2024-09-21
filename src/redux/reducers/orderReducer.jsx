import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const orderReducer = createSlice({
  name: "orderReducer",
  initialState,
  reducers: {
    setOrderAction: (state, action) => {
      const { payload } = action;
      state.order = payload;
    },
  },
});

export const { setOrderAction } = orderReducer.actions;

export default orderReducer.reducer;
