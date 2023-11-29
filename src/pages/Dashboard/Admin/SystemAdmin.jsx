import useAuth from "../../../hooks/useAuth";
import Marquee from "react-fast-marquee";

const SystemAdmin = () => {

    const {user} = useAuth();

    return (
        <div>

           <Marquee>
           <h1 className="text-[19px] font-bold text-[#B68C5A]"> Hey, {user?.displayName} ! Welcome here !</h1>
           </Marquee>

            <div className="flex justify-center items-center mt-10">
            <img className="w-[200px] h-[200px] rounded-full" src={user?.photoURL} alt="" />
            </div>
            
        </div>
    );
};

export default SystemAdmin;