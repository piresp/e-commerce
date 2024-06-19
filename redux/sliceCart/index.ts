import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ClothesItem } from "../sliceClothes";
import { evaluateTotal, formatTotal, getTotalOfItens } from "./utils";
import { ReduxRootState } from "../store";

interface CartState {
  items: ClothesItem[];
  itemsShowed: ClothesItem[];
  numberOfItens: number;
  total: number;
  totalFormatted: string;
}

const initialState: CartState = {
  items: [],
  itemsShowed: [],
  numberOfItens: 0,
  total: 0,
  totalFormatted: "R$ 00,00",
};

export const selectCartSlice = (state: ReduxRootState) => state.cart;

export const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ClothesItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem)
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      else state.items = [...state.items, { ...action.payload, quantity: 1 }];

      state.total = evaluateTotal(state.items);
      state.totalFormatted = formatTotal(state.total);
      state.numberOfItens = getTotalOfItens(state.items);
    },
    removeFromCart: (state, action: PayloadAction<ClothesItem["id"]>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = evaluateTotal(state.items);
      state.totalFormatted = formatTotal(state.total);
      state.numberOfItens = getTotalOfItens(state.items);
    },
    increaseItemQuantity: (state, action: PayloadAction<ClothesItem["id"]>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      state.total = evaluateTotal(state.items);
      state.totalFormatted = formatTotal(state.total);
      state.numberOfItens = getTotalOfItens(state.items);
    },
    decreaseItemQuantity: (state, action: PayloadAction<ClothesItem["id"]>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== item.id);
        }
      }
      state.total = evaluateTotal(state.items);
      state.totalFormatted = formatTotal(state.total);
      state.numberOfItens = getTotalOfItens(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = sliceCart.actions;

export default sliceCart.reducer;
