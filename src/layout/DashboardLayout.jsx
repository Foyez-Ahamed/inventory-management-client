import { FaHome } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdDiscount, MdManageAccounts, MdPayment, MdSummarize } from "react-icons/md";
import { BsFillCollectionFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import { CiLogout } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../pages/Shared/Footer";


const DashboardLayout = () => {

  const {userLogout} = useAuth();

  const navigate = useNavigate();
  
  const handleLogout = () => {
    userLogout()
    .then(() => {
      toast.success('Logged out successfully');
      navigate('/');
    })
    .catch();

 }

  return (
    <div>
       <Toaster/>

      <section className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="lg:w-64 min-h-screen bg-[#B68C5A] py-4">

          <ul className="menu space-y-2 font-bold text-white">


            <li>
              <NavLink
               to="/dashboard/productManagement"
               className={({ isActive, isPending }) =>
               isActive ? "text-gray-800" : isPending ? "pending" : ""
            }
               >
                {" "}
                <MdManageAccounts className="text-xl"></MdManageAccounts> Product Management
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/offers"
               className={({ isActive, isPending }) =>
               isActive ? "text-gray-800" : isPending ? "pending" : ""
               }
              >
                {" "}
                <MdDiscount></MdDiscount> Offers and Coupon
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/payment"
               className={({ isActive, isPending }) =>
               isActive ? "text-gray-800" : isPending ? "pending" : ""
             }
              >
                {" "}
                <MdPayment></MdPayment> Payment and Subscription
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/salesCollection"
              className={({ isActive, isPending }) =>
              isActive ? "text-gray-800" : isPending ? "pending" : ""
            }
              >
                {" "}
                <BsFillCollectionFill></BsFillCollectionFill> Sales Collection
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/salesSummary"
               className={({ isActive, isPending }) =>
               isActive ? "text-gray-800" : isPending ? "pending" : ""
            }
              >
                {" "}
                <MdSummarize></MdSummarize> Sales Summary
              </NavLink>
            </li>


            <div className="divider text-white"></div>

            <li>
              <NavLink to="/"
               className={({ isActive, isPending }) =>
               isActive ? "text-gray-800" : isPending ? "pending" : ""
            }
              >
                {" "}
                <FaHome className="text-xl"></FaHome> Home
              </NavLink>
            </li>

            
            <li onClick={handleLogout}><button> <CiLogout className="text-xl"></CiLogout> Logout</button></li>

            

          </ul>

        </div>

        <div className="flex-1 p-7">
          <Outlet></Outlet>

          <div className="mt-10">
          <Footer></Footer>
          </div>
        </div>
      </section>


    </div>
  );
};

export default DashboardLayout;
