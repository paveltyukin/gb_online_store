export interface IProduct {
  _id: string,
  id: number,
  title: string,
  price: number,
}

export interface ICartItem {
  product_id: number,
  title: string,
  price: number,
  quantity: number,
}

export interface SetQuantityProduct {
  id: number;
  quantity: number;
}
