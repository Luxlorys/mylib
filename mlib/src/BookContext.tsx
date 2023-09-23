import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { Book, initialBooks } from "./models/Book";


const BookContext = createContext<{ books: Book[] }>({ books: initialBooks });
const BookDispatcherContext = createContext<Dispatch<Actions>>(() => {});

interface Props {
    children: ReactNode
}

type Actions =
  | { type: "added"; payload: Book }
  | { type: "deleted"; payload: string };

type State = {
  books: Book[];
};

export default function BooksProvider({ children }: Props) {
    
    const initialBooksState = { books: initialBooks };
    const [booksState, dispatch] = useReducer(reducer, initialBooksState);

    return (
        <BookContext.Provider value={{ books: booksState.books }}>
          <BookDispatcherContext.Provider value={dispatch}>
            { children }
          </BookDispatcherContext.Provider>
        </BookContext.Provider>
    );
}

export function useBooks() {
  return useContext(BookContext).books;
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
      console.log('nothing');
      return state;
  }
} 