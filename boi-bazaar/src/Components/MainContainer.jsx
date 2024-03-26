import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

const MainContainer = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainContainer;