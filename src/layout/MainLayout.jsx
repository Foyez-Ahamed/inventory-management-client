import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

             <Outlet></Outlet>

             <div className="mt-5">
             <Footer></Footer>
             </div>
        </div>
    );
};

export default MainLayout;