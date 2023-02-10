import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BooksBySubject, BooksBySearch, BookBySeed, BookWorks, BookRatings, BookAuthors, getBooksBySubjectOptions } from "./types";

export const booksApi = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (builder) => ({
    getBooksBySubject: builder.query<BooksBySubject, getBooksBySubjectOptions>({
      query: (options) => `subjects/${options.subject}.json?limit=${options.limit}&offset=${options.offset}`,
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
    getBookRatings: builder.query<BookRatings, string>({
      query: (name) => `works/${name}/ratings.json`,
    }),
    getBookAuthors: builder.query<BookAuthors, string>({
      query: (name) => `authors/${name}.json`,
    }),
    // Book Cover https://covers.openlibrary.org/b/$key/$value-$size.jpg
    // key ISBN (isbn_13) or ID (cover)
    // S, M , L sizes
  }),
});

export const {
  useGetBooksBySubjectQuery,
  useGetBooksBySearchQuery,
  useGetBookBySeedQuery,
  useGetBookWorksQuery,
  useGetBookRatingsQuery,
  useGetBookAuthorsQuery
} = booksApi;
