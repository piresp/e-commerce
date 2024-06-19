import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ReduxRootState } from "../store";

export interface ClothesItem {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  img: string;
  quantity?: number;
}

export interface ClothesState {
  items: ClothesItem[];
  itemsFiltered: ClothesItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ClothesState = {
  items: [],
  itemsFiltered: [],
  status: "idle",
  error: null,
};

export const fetchClothes = createAsyncThunk(
  "clothes/fetchClothes",
  async () => {
    const response = await axios.get("http://localhost:3001/clothes");
    return response.data as ClothesItem[];
  }
);

export const sliceClothes = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    filterClothesByTitle: (state, action: PayloadAction<string>) => {
      const filteredItems = state.items.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.itemsFiltered = filteredItems;
    },
    clearFilter: (state) => {
      state.itemsFiltered = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClothes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchClothes.fulfilled,
        (state, action: PayloadAction<ClothesItem[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchClothes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { filterClothesByTitle, clearFilter } = sliceClothes.actions;

export const selectClothes = (state: ReduxRootState) => state.clothes;

export default sliceClothes.reducer;
