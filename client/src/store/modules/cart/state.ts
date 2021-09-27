//#region State
import { ICartItem } from "@/types";

export type CartState = {
  cartItems: ICartItem[];
};

export const state: CartState = {
  cartItems: []
};
//#endregion