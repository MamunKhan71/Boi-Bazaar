import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-[#1313130d] rounded-3xl">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-20 py-6 lg:py-20 px-8 lg:px-28">
                <img src="images/header.png" alt="header image"
                     className="max-w-xs lg:max-w-sm"/>
                <div className="space-y-4 lg:space-y-12 flex flex-col items-center lg:items-start justify-center lg:justify-start">
                    <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold playFair text-[#131313] leading-[54px] lg:leading-[84px]">Books to freshen up your bookshelf</h1>
                    <Link to="/listed-books" className="btn bg-primaryColor font-bold text-white px-7">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;