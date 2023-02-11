export interface props {
  title: string;
  ratingsSummary: ratingsSummary;
  authors: string;
  coverId: coverId | null;
}

export interface ratingsSummary {
  average: number | null;
  count: number;
}

export interface coverId {
  [key: number]: string 
}

