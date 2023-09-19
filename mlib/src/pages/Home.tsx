import { useBooks } from "../BookContext";
import { ChakraProvider } from "@chakra-ui/react";
import { Book } from "../models/Book";

import Footer from "../components/Footer";
import BookCardChakra from "../components/BookCardChakra";
import Navbar from "../components/NavbarChakra";
import "bootstrap/dist/css/bootstrap.css";


export default function Home() {
  const booksContext = useBooks();
  
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
