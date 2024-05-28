import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./sliceCart";

// Define your state interface here
interface RootState {
  cart: ReturnType<typeof cartSlice.reducer>;
}

const initialState: RootState = {
  cart: cartSlice.getInitialState(),
};

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
  preloadedState: initialState,
});

export default store;
