import { useState } from "react";
import Finished from "./pages/Finished";
import { initialBooks } from "./models/Book";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";


export default function App() {
    const [books, setBook] = useState(initialBooks);
    const [isHome, setIsHome] = useState(true);

    return (
        <div className="container">
            <Navbar setIsHome={setIsHome} />
            {isHome ? <Home books={books} /> : <Finished books={books} />}
            <Footer />
        </div>
    );
}