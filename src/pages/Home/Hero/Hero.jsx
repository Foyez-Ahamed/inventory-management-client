import { Link } from "react-router-dom";
import heroPic from "../../../assets/Hero/hero2.png"

const Hero = () => {
    return (
        <div>

            <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">

                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl font-bold">Create Your Own <br /> <span className="text-[#B68C5A]"> Shop Here!</span></h1>
                    <p className="text-[18px]">To add new items, log in to your account, navigate to the Product Management section, and select Add New Item. Fill in the required details such as product name, description, category, quantity, and price. You can also upload images for a visual representation.</p>

                    <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold "><Link to='/watchDemo'>See Details</Link></button>
                </div>

                <div className="flex-1">
                    <img src={heroPic} alt="heroPic" />
                </div>
            </section>
            
        </div>
    );
};

export default Hero;