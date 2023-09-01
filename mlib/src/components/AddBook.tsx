import Modal from "./Modal";

export default function AddBook() {

    function handleClick() {
        return console.log('clicked');
    }

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            + Add new book
        </button>
    );
}