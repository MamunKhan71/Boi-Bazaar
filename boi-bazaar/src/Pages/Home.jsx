import Hero from "../Components/Hero.jsx";
import Books from "../Components/Books/books.jsx";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="mt-8 lg:mt-24">
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;