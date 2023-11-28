import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>

           <div className="mt-8 lg:mt-0">
             <Hero></Hero>
           </div>

           <div className="mt-8 mb-8">
            <Categories></Categories>
           </div>

           <div className="mt-16">
           <Banner></Banner>
           </div>

            <div className="mt-16">
            <Faq></Faq>
            </div>


            <div className="mt-16">
             <Reviews></Reviews>
            </div>


        </div>
    );
};

export default Home;