import { ClothesItem } from "../sliceClothes";

export const evaluateTotal = (items: ClothesItem[]): number => {
  return items.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(",", "."));
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0);
};

export const formatTotal = (total: number): string =>
  total > 0 ? `R$ ${total},00` : `R$ 00,00`;

export const getTotalOfItens = (items: ClothesItem[]) => {
  return items.reduce((acc, item) => {
    if (item.quantity) {
      acc += item.quantity;
    }
    return acc;
  }, 0);
};
