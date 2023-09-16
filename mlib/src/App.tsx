import { useReducer, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Finished from "./pages/Finished";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.css";
import { Book, initialBooks } from "./models/Book";
import { BookContext, BookDispatcherContext } from "./BookContext";

type Actions = 
    | {type: 'added', payload: Book}
    | {type: 'deleted', payload: number}

type State = {
    books: Book[]
}

function reducer(state: State, action: Actions) {
    switch(action.type) {
      case 'added':
        return { ...state, books: [...state.books, action.payload] };
      case 'deleted':
        return { ...state, books: state.books.filter(book => book.id !== action.payload) };
      default:
        console.log('nothing');
        return state;
    }
  }


export default function App() {
    const initialBooksState = {
        books: initialBooks
    };

    const [booksState, dispatcher] = useReducer(reducer, initialBooksState);

    return (
        <ChakraProvider>
            <div className="container">
                <BookContext.Provider value={booksState.books}>
                    <BookDispatcherContext.Provider value={dispatcher}>
                        <Home /> 
                        <Finished />
                    </BookDispatcherContext.Provider>
                </BookContext.Provider>
            </div>
        </ChakraProvider>
    );
}