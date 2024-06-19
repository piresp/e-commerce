import { configureStore } from "@reduxjs/toolkit";
import { sliceCart } from "./sliceCart";
import { sliceModals } from "./sliceModals";
import { sliceClothes } from "./sliceClothes";

export interface ReduxRootState {
  cart: ReturnType<typeof sliceCart.reducer>;
  modals: ReturnType<typeof sliceModals.reducer>;
  clothes: ReturnType<typeof sliceClothes.reducer>;
}

const initialState: ReduxRootState = {
  cart: sliceCart.getInitialState(),
  modals: sliceModals.getInitialState(),
  clothes: sliceClothes.getInitialState(),
};

const store = configureStore({
  reducer: {
    cart: sliceCart.reducer,
    modals: sliceModals.reducer,
    clothes: sliceClothes.reducer,
  },
  preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
