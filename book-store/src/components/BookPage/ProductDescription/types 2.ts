export interface props {
  description: string | {
    [key: string]: string;
  };
  bio: string | {
    [key: string]: string;
  };
  reviews: string;
}