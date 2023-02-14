import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  WorksBySubject,
  WorksBySearch,
  Edition,
  Work,
  BookRatings,
  BookAuthor,
  getBooksBySubjectOptions,
} from "./types";

export const booksApi = createApi({
  reducerPath: "booksAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org/",
  }),
  endpoints: (builder) => ({
    getWorksBySubject: builder.query<WorksBySubject, getBooksBySubjectOptions>({
      query: (options) =>
        `subjects/${options.subject}.json?limit=${options.limit}&offset=${options.offset}`,
    }),
    getWorksBySearch: builder.query<WorksBySearch, string>({
      query: (queryTerm) => `search.json?q=${queryTerm}`,
    }),
    getEditionById: builder.query<Edition, string>({
      query: (editionId) => `books/${editionId}.json`,
    }),
    getWorkById: builder.query<Work, string>({
      query: (workId) => `works/${workId}.json`,
    }),
    getRatingsByWorkId: builder.query<BookRatings, string>({
      query: (workId) => `works/${workId}/ratings.json`,
    }),
    getAuthorById: builder.query<BookAuthor, string>({
      query: (authorId) => `authors/${authorId}.json`,
    }),
    // Book Cover https://covers.openlibrary.org/b/$key/$value-$size.jpg
    // key ISBN (isbn_13) or id (cover)
    // value is the cover id
    // S, M , L sizes
  }),
});

export const {
  useGetWorksBySubjectQuery,
  useGetWorksBySearchQuery,
  useGetEditionByIdQuery,
  useGetWorkByIdQuery,
  useGetRatingsByWorkIdQuery,
  useGetAuthorByIdQuery,
} = booksApi;
