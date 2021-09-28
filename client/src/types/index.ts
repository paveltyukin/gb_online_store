export interface IProduct {
  _id: string,
  id: number,
  title: string,
  price: number,
}

export interface ICartItem {
  id: number,
  title: string,
  price: number,
  quantity: number,
}
