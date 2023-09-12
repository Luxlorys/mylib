import { createContext, useReducer } from "react";
import { initialBooks } from "./models/Book";


export const BookContext = createContext(initialBooks);