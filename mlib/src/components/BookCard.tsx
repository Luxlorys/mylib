import Book from "../models/Book";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={book.img}
        alt="img"
        width={100}
        height={278}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <div className="card-footer">
          <small className="text-muted">priority: {book.priority}</small>
        </div>
      </div>
    </div>
  );
}
