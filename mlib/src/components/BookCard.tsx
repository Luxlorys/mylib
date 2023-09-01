import Book from "../models/Book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="card" key={book.id}>
      <img
        className="card-img-top mx-auto"
        src={book.img}
        alt="img"
        style={{padding: '10px', height: '200px', width: '140px'}}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{book.title}</h5>
        <div className="card-footer">
          <small className="text-muted">Priority: {book.priority}</small>
        </div>
        <div className="card-footer">
          <small className="text-muted">Added: date</small>
        </div>
      </div>
    </div>
  );
}
