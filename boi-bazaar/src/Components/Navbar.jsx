import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const NavLinks = <>
    <NavLink className={({ isActive }) =>
        isActive ? "text-base lg:text-lg btn bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/">Home</NavLink>
    <NavLink className={({ isActive }) =>
        isActive ? "btn text-base lg:text-lg  bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/listed-books">Listed Books</NavLink>
    <NavLink className={({ isActive }) =>
        isActive ? "text-base lg:text-lg btn bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/pages-to-read">Pages to Read</NavLink>
    <NavLink className={({ isActive }) =>
        isActive ? "btn text-base lg:text-lg  bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/faq">FAQ</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 workSans my-4 lg:my-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {
                                NavLinks
                            }
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-base lg:text-lg btn" : "btn bg-blue-600 text-white shadow-none border-none hover:bg-[#23BE0A] text-base lg:text-lg "
                            } to="/sign-in">Sign In</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "text-base lg:text-lg btn" : "btn bg-primaryColor text-white shadow-none border-none hover:bg-[#23BE0A] text-base lg:text-lg "
                            } to="/sign-up">Sign Up</NavLink>
                        </div>
                    </ul>
                </div>
                <Link to="/" className="text-2xl lg:text-3xl font-bold">Boi<span className="bg-300% text-2xl lg:text-3xl font-bold bg-gradient-to-r from-black via-green-500 to-green-950 text-transparent bg-clip-text animate-gradient">Bazaar</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {
                            NavLinks
                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end gap-4 hidden lg:flex">
                <NavLink to="/sign-in" className="btn bg-[#23BE0A] rounded-full lg:rounded-xl font-semibold text-white lg:px-7 text-base lg:text-lg ">Sign In</NavLink>
                <NavLink to="/sign-up" className="btn bg-[#59C6D2] rounded-full lg:rounded-xl font-semibold text-white lg:px-7 text-base lg:text-lg ">Sign Up</NavLink>
            </div>
        </div>
    );
};

export default Navbar;