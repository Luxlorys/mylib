import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { Book, initialBooks } from "./models/Book";

export const BookContext = createContext<{ books: Book[] }>({ books: initialBooks });
export const BookDispatcherContext = createContext<Dispatch<Actions>>(() => {});

interface Props {
    children: ReactNode
}

export type Actions =
  | { type: "added"; payload: Book }
  | { type: "deleted"; payload: number };

type State = {
  books: Book[];
};

export default function BooksProvider(props: Props) {
    
    const initialBooksState = { books: initialBooks };
    const [booksState, dispatcher] = useReducer(reducer, initialBooksState);
    const { children } = props;

    return (
        <BookContext.Provider value={{ books: booksState.books }}>
          <BookDispatcherContext.Provider value={dispatcher}>
            { children }
          </BookDispatcherContext.Provider>
        </BookContext.Provider>
    );
}

export function useBooks() {
  return useContext(BookContext);
}

export function useDispatcher() {
  return useContext(BookDispatcherContext);
}


function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "added":
      return { ...state, books: [...state.books, action.payload] };
    case "deleted":
      return { ...state, books: state.books.filter(book => book.id !== action.payload) };
    default:
      return state;
  }
} 