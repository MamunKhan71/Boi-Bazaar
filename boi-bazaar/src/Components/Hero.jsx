import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-[#1313130d] rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 py-20 px-28">
                <img src="images/header.png" alt="header image"
                     className="max-w-sm"/>
                <div className="space-y-12">
                    <h1 className="text-5xl font-bold playFair text-[#131313] leading-[84px]">Books to freshen up your bookshelf</h1>
                    <Link to="/listed-books" className="btn bg-primaryColor font-bold text-white px-7">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;