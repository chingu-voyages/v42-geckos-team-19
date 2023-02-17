import { CartItem } from "../../../store/cart/types";

export interface props {
  title: string;
  ratingsSummary: ratingsSummary;
  authors: string;
  coverId: coverId | null;
  cartItemObj: CartItem;
  price: string;
}

export interface ratingsSummary {
  average: number | null;
  count: number;
}

export interface coverId {
  [key: number]: string;
}
