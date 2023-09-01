import { createContext } from "react";
import { initialBooks } from "./models/Book";

export const bookContext = createContext(initialBooks);