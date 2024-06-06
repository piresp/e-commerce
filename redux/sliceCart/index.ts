import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const sliceCart = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.value++)
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

export const { increment, decrement } = sliceCart.actions;

export default sliceCart.reducer;