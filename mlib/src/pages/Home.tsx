import BookCard from "../components/BookCard";
import AddBook from "../components/AddBook";

import { useContext } from "react";
import { bookContext } from "../BookContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const booksContext = useContext(bookContext);
  return (
    <div className="container">
      <Navbar />
      <h1 className="text-center">To read</h1>
      <AddBook />
      <div className="row row-cols-1 row-cols-md-3 g-4"  style={{marginTop: '5px'}}>
        {booksContext
          .filter((book) => !book.finished)
          .map((book) => (
            <BookCard book={book} key={book.id}/>
          ))}
      </div>
      <Footer />
    </div>
  );
}
