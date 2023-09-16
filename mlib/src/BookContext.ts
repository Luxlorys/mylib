import { createContext, useReducer } from "react";
import { Book, initialBooks } from "./models/Book";

export const BookContext = createContext<{ books: Book[] }>({ books: initialBooks });
export const BookDispatcherContext = createContext({});
