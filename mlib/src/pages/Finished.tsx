import "bootstrap/dist/css/bootstrap.css";
import Book from "../models/Book";
import BookCard from "../components/BookCard";


export default function Finished({ books }: {books: Book[]}) {
  return (
    <div className="container">
      <h1 className="text-center">Finished</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books
          .filter((book) => book.finished)
          .map((book) => (
            <BookCard book={book} />
          ))}
      </div>
    </div>
  );
}
