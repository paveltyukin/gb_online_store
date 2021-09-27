//#region State
import {IProduct} from "@/types";

export type ProductState = {
  products: IProduct[];
};

export const state: ProductState = {
  products: []
};
//#endregion