//#region State
import { IProduct } from '@/types';

export type ProductState = {
  products : {
    all: IProduct[];
    filtered: IProduct[];
  }
};

export const state: ProductState = {
  products : {
    all: [],
    filtered: [],
  }
};
//#endregion
