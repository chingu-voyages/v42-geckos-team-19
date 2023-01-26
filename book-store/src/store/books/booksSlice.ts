import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BooksBySubject, BooksBySearch, BookBySeed, BookWorks } from "./types";

export const booksApi = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (builder) => ({
    getBooksBySubject: builder.query<BooksBySubject, string>({
      query: (name) => `subjects/${name}.json`,
    }),
    getBooksBySearch: builder.query<BooksBySearch, string>({
      query: (name) => `search.json?q=${name}`,
    }),
    getBookBySeed: builder.query<BookBySeed, string>({
      query: (name) => `books/${name}.json`,
    }),
    getBookWorks: builder.query<BookWorks, string>({
      query: (name) => `works/${name}.json`,
    }),
    // Book Cover https://covers.openlibrary.org/b/$key/$value-$size.jpg
    // key ISBN (isbn_13) or ID (cover)
    // S, M , L sizes
  }),
});

export const { useGetBooksBySubjectQuery, useGetBooksBySearchQuery } = booksApi;
