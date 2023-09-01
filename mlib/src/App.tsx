import { useContext, useState } from "react";
import { bookContext } from "./BookContext";

import Finished from "./pages/Finished";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.css";


export default function App() {
    const books = useContext(bookContext);

    return (
        <div className="container">
            <bookContext.Provider value={books}>
                <Home /> 
                <Finished />
            </bookContext.Provider>
        </div>
    );
}