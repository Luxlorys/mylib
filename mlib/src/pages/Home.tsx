import { useBooks } from "../BookContext";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { Book } from "../models/Book";

import Footer from "../components/Footer";
import BookCardChakra from "../components/BookCardChakra";
import Navbar from "../components/NavbarChakra";
import "bootstrap/dist/css/bootstrap.css";


export default function Home() {
  const books = useBooks();
  
  return (
    <ChakraProvider>
      <div className="container">
        <Navbar />
        <h1 className="text-center">To read</h1>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
          {books
            .filter((book: Book) => !book.finished)
            .map((book: Book) => (
              <BookCardChakra book={book} key={book.id}/>
            ))}
          </SimpleGrid>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
