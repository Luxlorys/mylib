import { ChakraProvider } from "@chakra-ui/react";
import BooksProvider from "./BookContext";

import Finished from "./pages/Finished";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="container">
      <ChakraProvider>
        <BooksProvider>
          <Home />
          <Finished />
        </BooksProvider>
      </ChakraProvider>
    </div>
  );
}
