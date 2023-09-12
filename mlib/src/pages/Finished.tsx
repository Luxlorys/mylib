import { useContext } from "react";
import { BookContext } from "../BookContext";
import Footer from "../components/Footer";
import BookCardChakra from "../components/BookCardChakra";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/NavbarChakra";
import "bootstrap/dist/css/bootstrap.css";


export default function Finished() {
  const booksContext = useContext(BookContext);

  return (
    <ChakraProvider>
    <div className="container">
      <Navbar />
      <h1 className="text-center">Finished</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {booksContext
          .filter((book) => book.finished)
          .map((book) => (
            <BookCardChakra book={book} key={book.id}/>
          ))}
      </div>
      <Footer />
    </div>
    </ChakraProvider>
  );
}
