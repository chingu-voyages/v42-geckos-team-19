export type AuthorBySubject = {
  key: string;
  name: string;
};

export type BookBySubject = {
  key: string;
  title: string;
  cover_id: number;
  authors: AuthorBySubject[];
};

export type BooksBySubject = {
  work_count: number;
  works: BookBySubject[];
};

export type BooksBySearch = {
  numFound: number;
  docs: [seed: string[]];
};

export type BookBySeed = {
  title: string;
  covers: number[];
  isbn_13: string[];
};

export type BookWorksLinks = {
  url: string;
  title: string;
};
// TODO: flesh out authors type instead of using any
export type BookWorks = {
  title: string;
  description: string;
  authors: any;
  links: BookWorksLinks[];
};

export type BookAuthors = {
  name: string;
  bio: string;
};
