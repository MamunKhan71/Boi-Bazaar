import {useLoaderData, useParams} from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BookDetails = () => {
    const id = useParams().id;
    const books = useLoaderData();
    const {
        bookId,
        totalPages,
        publisher,
        yearOfPublishing,
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
            <div className="flex flex-1 bg-[#1313130d] rounded-2xl p-16 items-center justify-center w-full">
                <img src={image} alt="Book Image"
                     className="h-[564px] rounded-2xl"/>
            </div>
            <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold text-p[#131313] playFair">{bookName}</h1>
                <p className="workSans text-xl font-medium text-[#131313cc]">By: {author}</p>
                <hr/>
                <p>{category}</p>
                <hr/>
                <p> <Markdown rehypePlugins={[rehypeRaw]}
                                                      className="text-justify">{review}</Markdown></p>
                <div className="flex gap-3 workSans items-center">
                    <h1 className="font-bold workSans text-[#131313]">Tags</h1>
                    {
                        tags.map((tag) => (
                            <button key={tag}
                                    className="bg-[#23be0a0d] py-2 px-4 text-primaryColor rounded-full font-medium">#{tag}</button>
                        ))
                    }
                </div>
                <hr/>
                <div className="flex gap-4">
                    <div className="space-y-3">
                        <p className="">Number of Pages: </p>
                        <p className="">Publisher: </p>
                        <p className="">Year of Publishing: </p>
                        <p className="">Rating: </p>
                    </div>
                    <div className="space-y-3">
                        <p><strong>{totalPages}</strong></p>
                        <p><strong>{publisher}</strong></p>
                        <p><strong>{yearOfPublishing}</strong></p>
                        <p><strong>{rating}</strong></p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="btn font-semibold px-7 border border-[#1313134d] bg-transparent text-black text-lg workSans">Read</button>
                    <button className="btn bg-[#50B1C9] font-semibold text-white px-7 text-lg ">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;