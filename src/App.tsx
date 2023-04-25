import { useEffect, useState } from "react";
import "./App.css";
import { Api, Book } from "./api/index";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    Api.book.apiV1BooksGet().then((res) => {
      setBooks(res);
    });
  }, []);

  return (
    <>
      <h1>Books API: </h1>
      {books.map((book) => (
        <article key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </article>
      ))}
    </>
  );
}

export default App;
