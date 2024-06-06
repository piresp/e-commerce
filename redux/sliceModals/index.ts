import { createSlice } from '@reduxjs/toolkit';
import { ReduxRootState } from '../store';

interface CounterState {
  modalSerch: boolean;
  modalCart: boolean
}

const initialState: CounterState = {
  modalSerch: false,
  modalCart: false
};

export const sliceModals = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    controllerModalSerch: (state) => {
      state.modalSerch = !state.modalSerch
    },
    controllerModalShopCart: (state) => {
      state.modalCart = !state.modalCart
    },
  },
});

export const selectModalControllers = (state: ReduxRootState) => state.modals

export const { controllerModalSerch, controllerModalShopCart } = sliceModals.actions;

export default sliceModals.reducer;
