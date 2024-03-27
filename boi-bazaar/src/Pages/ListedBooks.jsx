import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const handleTabChange = (index) => {
        setTabIndex(index)
    }
    return (
        <div className="space-y-12">
            <div className="w-full bg-[#1313130d] py-8 text-center rounded-2xl text-[#131313] text-3xl font-bold workSans">
                <h1>Books</h1>
            </div>
            <div className="flex justify-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-primaryColor font-semibold text-white text-lg px-5">Sort By
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                              viewBox="0 0 24 24" fill="none">
                        <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a className="text-lg font-semibold">Rating</a></li>
                        <li><a className="text-lg font-semibold">Number of pages</a></li>
                        <li><a className="text-lg font-semibold">Published year</a></li>
                    </ul>
                </details>
            </div>
            <div
                className="flex items-start sm:justify-start">
                <Link to="read-books" onClick={() => handleTabChange(0)}
                   className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0?'border border-b-0':'border-b'} rounded-t-lg border-gray-400 `}>
                    <span>Read Books</span>
                </Link>
                <Link to="wish-list" onClick={() => handleTabChange(1)}
                   className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1?'border border-b-0':'border-b'} rounded-t-lg border-gray-400`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ListedBooks;