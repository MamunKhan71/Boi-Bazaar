import {useEffect, useState} from "react";
import Book from "./book.jsx";

const Books = () => {
    const [getBooks, setBooks] = useState([]);
    useEffect(() => {
        fetch("book_data.json")
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, []);
    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
                {getBooks.map((book) => (
                    <Book book={book} key={book.bookId}></Book>
                ))}
            </div>
        </div>
    );
};

export default Books;