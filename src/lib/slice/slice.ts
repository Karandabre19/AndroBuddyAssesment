import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
};

export const blinkItReducer = createSlice({
  name: "blinkitState",
  initialState,
  reducers: {
    setCartButtonState: (state, action) => {
      state.cartOpen = action.payload;
    },
  },
});

export const {} = blinkItReducer.actions;

export default blinkItReducer.reducer;