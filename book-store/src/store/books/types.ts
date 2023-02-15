export type AuthorBySubject = {
  key: string;
  name: string;
};

export type WorkBySubject = {
  key: string;
  title: string;
  cover_id: number;
  authors: AuthorBySubject[];
};

export type WorksBySubject = {
  work_count: number;
  works: WorkBySubject[];
};

export type getWorksBySubjectOptions = {
  subject: string;
  limit: number;
  offset: number;
}

export type WorksBySearch = {
  numFound: number;
  docs: {
    key: string; 
    type: string; 
    title: string; 
    authorKey: string[];
    author_name: string[];
    cover_i: string;
  }[];
};

export type getWorksBySearchOptions = {
  queryTerm: string;
  limit: number;
  offset: number;
}

export type Edition = {
  title: string;
  covers: number[];
  isbn_13: string[];
};

export type BookWorksLinks = {
  url: string;
  title: string;
};
// TODO: flesh out authors type instead of using any
export type Work = {
  title: string;
  description: string;
  authors: any;
  covers: { [key: number]: string };
  links: BookWorksLinks[];
};

export type BookRatings = {
  summary: {
    average: number;
    count: number;
    sortable: number;
  },
  counts: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  }
};

export type BookAuthor = {
  name: string;
  bio?: string;
};
