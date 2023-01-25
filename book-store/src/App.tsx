import { useGetBooksBySubjectQuery } from "./store/books/booksSlice";

const App = () => {
  const { data, error, isLoading } = useGetBooksBySubjectQuery("love");
  console.log(data, error, isLoading);
  return <h1>BOOK STORE</h1>;
};

export default App;
