import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/Navbar';
import { books } from '../models/Book';

export default function Finished() {
    return (
        <div className="container">
        <Navbar />
        <h1>Finished</h1>
        {books.filter(book => book.finished).map((book) => (
                <div>
                    <h1>{book.name}</h1>
                    <h6>{book.desctiption}</h6>
                    <h6>{book.priority}</h6>
                    <h6>{book.finished}</h6>
                </div>
            ))}
    </div>
    );
}