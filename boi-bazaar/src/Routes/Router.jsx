import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home.jsx";
import React from "react";
import MainContainer from "../Components/MainContainer.jsx";
import ListedBooks from "../Pages/ListedBooks.jsx";
import PagesToRead from "../Pages/PagesToRead.jsx";
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
            },
            {
                path: "/pages-to-read",
                element: <PagesToRead></PagesToRead>,
            }
        ]
    },

]);