import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {toast} from "react-toastify";
import BooksContext from "../Components/Books/BooksContext.jsx";

const ListedBooks = () => {
    const getBooks = useLoaderData()
    const [tabChange, setTabChange] = useState(0)
    const [getReadBooks, setReadBooks] = useState([])
    const [getWishBooks, setWishBooks] = useState([])
    const [filteredReadBooks, setFilteredReadBooks] = useState([])
    const [filteredWishedBooks, setFilteredWishBooks] = useState([])
    useEffect(() => {
        setFilteredWishBooks(getBooks.filter(book => getWishBooks.includes(book.bookId) && !getReadBooks.includes(book.bookId)))
    }, [getWishBooks]);
    useEffect(() => {
        setFilteredReadBooks(getBooks.filter(book => getReadBooks.includes(book.bookId)))
    }, [getReadBooks]);
    useEffect(() => {
        const localRead = localStorage.getItem('read')
        const localWishlist = localStorage.getItem('wishlist')
        if(localWishlist && localRead){
            if(JSON.parse(localRead).includes(JSON.parse(localWishlist))) {
                toast.warning("Already Completed Reading the book!")
            }
            else{
                const readingList = JSON.parse(localRead)
                setReadBooks(readingList)
            }
        }else if(localRead){
            const readingList = JSON.parse(localRead)
            setReadBooks(readingList)
        }
    }, []);


    useEffect(() => {
        try{
            const localWish = localStorage.getItem('wishlist')
            if(localWish){
                const WishingList = JSON.parse(localWish)
                setWishBooks(WishingList)
            }else{
                localStorage.setItem('wishlist',[])
                setWishBooks([])
            }
        }catch (e) {
            console.log(e)
        }
    }, []);

    const handleFilter = (filterType) => {
        if(tabChange === 0){
            if(filterType === 'rating'){
                setFilteredReadBooks((filteredReadBooks.toSorted((a,b) => a.rating - b.rating)).reverse())
            }else if(filterType === 'pages'){
                setFilteredReadBooks((filteredReadBooks.toSorted((a,b) => a.totalPages - b.totalPages)).reverse())
            }else if(filterType === 'year'){
                setFilteredReadBooks((filteredReadBooks.toSorted((a,b) => a.yearOfPublishing - b.yearOfPublishing)).reverse())
            }
        }else if(tabChange === 1){
            if(filterType === 'rating'){
                setFilteredWishBooks((filteredWishedBooks.toSorted((a,b) => a.rating - b.rating)).reverse())
            }else if(filterType === 'pages'){
                setFilteredWishBooks((filteredWishedBooks.toSorted((a,b) => a.totalPages - b.totalPages)).reverse())
            }else if(filterType === 'year'){
                setFilteredWishBooks((filteredWishedBooks.toSorted((a,b) => a.yearOfPublishing - b.yearOfPublishing)).reverse())
            }
        }
    }

    return (
        <>
            <div className="space-y-6">
                <div>
                    <div
                        className="w-full bg-[#1313130d] py-8 text-center rounded-2xl text-[#131313] text-3xl font-bold workSans">
                        <h1>Books</h1>
                    </div>
                </div>
                <div className="flex justify-center py-8">
                    <details className="dropdown relative">
                        <summary className="m-1 btn bg-primaryColor font-semibold text-white text-lg px-5">Sort By
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none">
                                <path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="white" strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"/>
                            </svg></summary>
                        <ul className="absolute left-1/2 flex items-center justify-center -translate-x-1/2 p-2 shadow menu dropdown-content z-[1] bg-gray-100 rounded-box w-52">
                            <li><a onClick={()=> handleFilter('rating')} className="text-lg font-semibold">Rating</a></li>
                            <li><a onClick={()=> handleFilter('pages')} className="text-lg font-semibold">Number of pages</a></li>
                            <li><a onClick={()=> handleFilter('year')} className="text-lg font-semibold">Published year</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <Tabs onSelect={index => setTabChange(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel className="mt-4 lg:mt-8">
                    <>
                        <div className="grid grid-cols-1 gap-6">
                            {
                                filteredReadBooks.map(book => <BooksContext book={book}/>)
                            }
                        </div>
                    </>
                </TabPanel>
                <TabPanel>
                    <>
                        <div className="grid grid-cols-1 gap-6">
                            {
                                filteredWishedBooks.map(book => <BooksContext book={book}/>)
                            }
                        </div>
                    </>
                </TabPanel>
            </Tabs>
        </>
    )

};

export default ListedBooks;