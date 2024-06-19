import { createSlice } from "@reduxjs/toolkit";
import { ReduxRootState } from "../store";

interface CounterState {
  modalSerch: boolean;
  modalCart: boolean;
  modalFinishPurchase: boolean;
}

const initialState: CounterState = {
  modalSerch: false,
  modalCart: false,
  modalFinishPurchase: false,
};

export const sliceModals = createSlice({
  name: "modals",
  initialState,
  reducers: {
    controllerModalSerch: (state) => {
      state.modalSerch = !state.modalSerch;
    },
    controllerModalShopCart: (state) => {
      state.modalCart = !state.modalCart;
    },
    controllerModalFinishBuy: (state) => {
      state.modalFinishPurchase = !state.modalFinishPurchase;
    },
  },
});

export const selectModalControllers = (state: ReduxRootState) => state.modals;

export const {
  controllerModalSerch,
  controllerModalShopCart,
  controllerModalFinishBuy,
} = sliceModals.actions;

export default sliceModals.reducer;
