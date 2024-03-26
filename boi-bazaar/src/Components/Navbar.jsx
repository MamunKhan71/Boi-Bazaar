import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    const NavLinks = <>
    <NavLink className={({ isActive }) =>
        isActive ? "text-lg btn bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/">Home</NavLink>
    <NavLink className={({ isActive }) =>
        isActive ? "btn text-lg  bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/listed-books">Listed Books</NavLink>
    <NavLink className={({ isActive }) =>
        isActive ? "text-lg btn bg-transparent border-[#23BE0A] text-[#23BE0A] font-bold" : "btn bg-transparent shadow-none border-none hover:bg-[#23BE0A] text-lg "
    } to="/pages-to-read">Pages to Read</NavLink>
    </>
    return (
        <div className="navbar bg-base-100 workSans my-8">
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
                        <div className="flex gap-4">
                            {
                                NavLinks
                            }
                        </div>
                    </ul>
                </div>
                <Link to="/" className="text-3xl font-bold">Boi<span className="bg-300% text-3xl font-bold bg-gradient-to-r from-black via-green-500 to-green-950 text-transparent bg-clip-text animate-gradient">Bazaar</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-4">
                        {
                            NavLinks
                        }
                    </div>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn bg-[#23BE0A] font-semibold text-white px-7 text-lg ">Sign In</button>
                <button className="btn bg-[#59C6D2] font-semibold text-white px-7 text-lg ">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;