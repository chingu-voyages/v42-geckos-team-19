import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type AuthorBySubject = {
  key: string;
  name?: string;
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

export type BooksBySearch = {};
export const booksApi = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (builder) => ({
    getBooksBySubject: builder.query<BooksBySubject, string>({
      query: (name) => `subjects/${name}.json`,
    }),
    // change this type
    getBooksBySearch: builder.query<BooksBySubject, string>({
      query: (name) => `search.json?q=${name}`,
    }),
  }),
});

export const { useGetBooksBySubjectQuery, useGetBooksBySearchQuery } = booksApi;
