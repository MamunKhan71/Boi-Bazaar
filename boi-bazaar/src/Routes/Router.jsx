import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import React from "react";
import MainContainer from "../Components/MainContainer.jsx";
import ListedBooks from "../Pages/ListedBooks.jsx";
import PagesToRead from "../Pages/PagesToRead.jsx";
import BookDetails from "../Components/Books/BookDetails.jsx";
import ReadBooks from "../Components/Books/ReadBooks.jsx";
import WishList from "../Components/Books/WishList.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainContainer />,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/listed-books",
                element: <ListedBooks />,
                children: [
                    {
                        path: 'read-books',
                        loader: () => fetch('/book_data.json'),
                        element: <ReadBooks></ReadBooks>
                    },
                    {
                        path: 'wish-list',
                        loader: () => fetch('/book_data.json'),
                        element: <WishList></WishList>,
                    }
                ]
            },
            {
                path: "/pages-to-read",
                loader: () => fetch('/book_data.json'),
                element: <PagesToRead></PagesToRead>,
            },
            {
                path: "/books/:id",
                loader: () => fetch('/book_data.json'),
                element: <BookDetails></BookDetails>,
            }
        ]
    },

]);