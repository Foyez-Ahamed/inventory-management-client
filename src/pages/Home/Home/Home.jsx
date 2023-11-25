import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div>

           <div className="mt-8 lg:mt-0">
             <Hero></Hero>
           </div>

           <div className="mt-10">
           <Banner></Banner>
           </div>

            <div className="mt-16">
            <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;