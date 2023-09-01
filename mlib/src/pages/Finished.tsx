import "bootstrap/dist/css/bootstrap.css";

import BookCard from "../components/BookCard";

import { useContext } from "react";
import { bookContext } from "../BookContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Finished() {
  const booksContext = useContext(bookContext);

  return (
    <div className="container">
      <Navbar />
      <h1 className="text-center">Finished</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {booksContext
          .filter((book) => book.finished)
          .map((book) => (
            <BookCard book={book} key={book.id}/>
          ))}
      </div>
      <Footer />
    </div>
  );
}
