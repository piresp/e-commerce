import { configureStore } from "@reduxjs/toolkit";
import { sliceCart } from "./sliceCart";
import { sliceModals } from "./sliceModals";

// Define your state interface here
export interface ReduxRootState {
  cart: ReturnType<typeof sliceCart.reducer>;
  modals: ReturnType<typeof sliceModals.reducer>;
}

const initialState: ReduxRootState = {
  cart: sliceCart.getInitialState(),
  modals: sliceModals.getInitialState(),
};

const store = configureStore({
  reducer: {
    cart: sliceCart.reducer,
    modals: sliceModals.reducer
  },
  preloadedState: initialState,
});

export default store;
