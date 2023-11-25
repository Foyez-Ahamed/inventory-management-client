import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {

    const location = useLocation();

    const withoutNavFooter = location.pathname.includes('register') || location.pathname.includes('login');


    return (
        <div>

            {withoutNavFooter || <Navbar></Navbar>}

             <Outlet></Outlet>

             <div className="mt-5">
             {withoutNavFooter || <Footer></Footer>}
             </div>

             <Toaster/>

        </div>
    );
};

export default MainLayout;