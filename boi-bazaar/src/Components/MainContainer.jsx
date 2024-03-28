import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainContainer = () => {
    return (
        <div className="container mx-auto mb-24 px-4">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition: Flip
            />
        </div>
    );
};

export default MainContainer;