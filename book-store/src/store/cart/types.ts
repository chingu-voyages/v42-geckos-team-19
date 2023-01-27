export type CartItem = {
  title: string;
  author: string;
  imageUrl: string;
  id: string;
  quantity: number;
  price: number;
};

export type CartState = {
  readonly cartItems: CartItem[];
  readonly isCartOpen: boolean;
};
