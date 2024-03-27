import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className="flex items-center h-screen p-16">
            <div className="container flex flex-col items-center justify-center h-full px-5 mx-auto my-8">
                <div className="text-center">
                    <h2 className="mb-8 font-extrabold text-9xl">
                        <Link to="/" className="text-3xl font-bold"><span className="bg-300% text-9xl font-bold bg-gradient-to-r from-black via-green-500 to-green-950 text-transparent bg-clip-text animate-gradient">404</span></Link>
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our
                        homepage.</p>
                    <Link to="/"
                       className="btn px-8 font-semibold rounded-2xl text-white bg-primaryColor">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;