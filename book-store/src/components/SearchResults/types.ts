import { useSearchParams } from 'react-router-dom';
import { useGetWorksBySearchQuery } from "../../store/books/booksSlice";

export interface props {
    setSearchParams: ReturnType<typeof useSearchParams>[1];
    searchRes: ReturnType<typeof useGetWorksBySearchQuery>;
    queryTerm: string;
    offset: number;
}