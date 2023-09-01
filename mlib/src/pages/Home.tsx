import Book from "../models/Book";
import BookCard from "../components/BookCard";
import AddBook from "../components/AddBook";

export default function Home({ books }: {books: Book[]}) {

  return (
    <div className="container">
      <h1 className="text-center">To read</h1>
      <AddBook />
      <div className="row row-cols-1 row-cols-md-3 g-4"  style={{marginTop: '5px'}}>
        {books
          .filter((book) => !book.finished)
          .map((book) => (
            <BookCard book={book} />
          ))}
      </div>
    </div>
  );
}
