import {useEffect, useState} from "react";
import Book from "./book.jsx";

const Books = () => {
    const [getBooks, setBooks] = useState([]);
    useEffect(() => {
        fetch("/book_data.json")
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, []);

    return (
        <div>
            <h1 className="text-center text-[#131313] text-4xl font-bold playFair my-9">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {getBooks.map((book) => (
                    <Book book={book} key={book.bookId}></Book>
                ))}
            </div>
        </div>
    );
};

export default Books;