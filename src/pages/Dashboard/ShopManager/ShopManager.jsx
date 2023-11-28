import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const ShopManager = () => {

    const {user} = useAuth();

    console.log(user);

    return (
        <div>

            <h1 className="text-[19px] font-bold"> Hey, {user?.displayName} ! Welcome here , Please manage your shop here <Link to='/dashboard/productManagement'><span className="text-blue-600"> Product Management </span></Link> </h1>

            <div className="flex justify-center items-center mt-10">
            <img className="w-[200px] h-[200px] rounded-full" src={user?.photoURL} alt="" />
            </div>
            
        </div>
    );
};

export default ShopManager;