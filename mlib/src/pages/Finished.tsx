import "bootstrap/dist/css/bootstrap.css";
import { initialBooks } from "../models/Book";
import BookCard from "../components/BookCard";


export default function Finished() {
  return (
    <div className="container">
      <h1>Finished</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {initialBooks
          .filter((book) => book.finished)
          .map((book) => (
            <BookCard book={book} />
          ))}
      </div>
    </div>
  );
}
