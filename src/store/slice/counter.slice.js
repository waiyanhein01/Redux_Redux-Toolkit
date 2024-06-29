import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
        console.log("I'm increase")
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increasePayload: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, increasePayload } = counterSlice.actions;
export default counterSlice.reducer;
