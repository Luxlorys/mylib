import { useState } from "react";
import { BookContext } from "./BookContext";
import { ChakraProvider } from "@chakra-ui/react";

import Finished from "./pages/Finished";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.css";
import { initialBooks } from "./models/Book";


export default function App() {
    const [booksState, setBook] = useState(initialBooks);

    return (
        <ChakraProvider>
            <div className="container">
                <BookContext.Provider value={booksState}>
                    <Home /> 
                    <Finished />
                </BookContext.Provider>
            </div>
        </ChakraProvider>
    );
}
