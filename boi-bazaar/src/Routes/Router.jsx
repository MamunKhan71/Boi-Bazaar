import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import React from "react";
import MainContainer from "../Components/MainContainer.jsx";
import ListedBooks from "../Pages/ListedBooks.jsx";
import PagesToRead from "../Pages/PagesToRead.jsx";
import BookDetails from "../Components/Books/BookDetails.jsx";
// import ReadBooks from "../Components/Books/ReadBooks.jsx";
// import WishList from "../Components/Books/WishList.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import SignIn from "../Pages/SignIn.jsx";
import SignUp from "../Pages/SignUp.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainContainer />,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/listed-books",
                loader: () => fetch('/book_data.json'),
                element: <ListedBooks />,
                // children: [
                //     {
                //         path: 'read-books',
                //         loader: () => fetch('/book_data.json'),
                //         element: <ReadBooks></ReadBooks>,
                //     },
                //     {
                //         path: 'wish-list',
                //         loader: () => fetch('/book_data.json'),
                //         element: <WishList></WishList>,
                //     }
                // ]
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
            },
            {
                path: '/sign-in',
                element: <SignIn/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            }
        ]
    },

]);