import { useContext } from "react";
import { BookContext } from "../BookContext";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import BookCardChakra from "../components/BookCardChakra";
import Navbar from "../components/NavbarChakra";
import "bootstrap/dist/css/bootstrap.css";
import { Book } from "../models/Book";

export default function Home() {
  const booksContext = useContext(BookContext).books;
  console.log(booksContext);
  return (
    <ChakraProvider>
      <div className="container">
        <Navbar />
        <h1 className="text-center">To read</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4"  style={{marginTop: '5px'}}>
          {booksContext
            .filter((book: Book) => !book.finished)
            .map((book: Book) => (
              <BookCardChakra book={book} key={book.id}/>
            ))}
        </div>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
