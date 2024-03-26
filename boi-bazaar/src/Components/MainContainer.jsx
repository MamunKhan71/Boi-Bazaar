import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

const MainContainer = () => {
    return (
        <div className="container mx-auto mb-24">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainContainer;