import {useLoaderData, useParams} from "react-router-dom";

const BookDetails = () => {
    const id = useParams().id;
    const books = useLoaderData();
    const {
        bookId,
        review,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
    } = books.find(book=> book.bookId === parseInt(id));
    return (
        <div className="flex gap-12 w-full">
            <div className="flex-1 bg-[#1313130d] p-16 items-center justify-center w-full">
                <img src={image} alt="Book Image"
                     className="max-h-[564px] rounded-2xl"/>
            </div>
            <div className="flex-1">
                <h1>{bookName}</h1>
                <p>By: {author}</p>
                <hr/>
                <p>{category}</p>
                <hr/>
                <p><strong>Review: </strong>{review}</p>
            </div>
        </div>
    );
};

export default BookDetails;