export interface IProduct {
  _id: string,
  id: number,
  title: string,
  price: number,
}

export interface CartItem {
  title: string;
  price: number;
  product_id: number;
  quantity: number;
}
