import { FaHome } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  MdDiscount,
  MdManageAccounts,
  MdPayment,
  MdSummarize,
} from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import { CiLogout } from "react-icons/ci";
import Footer from "../pages/Shared/Footer";
import logo from "../../src/assets/logo/logo.png";
import Swal from "sweetalert2";
import useAdmin from "../hooks/useAdmin";
import useManager from "../hooks/useManager";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  const { userLogout } = useAuth();

  const [isAdmin] = useAdmin();

  const [isManager] = useManager();

  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "User logged out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch();
  };

  return (
    <div>
      <Helmet>
        <title>King Gallery | Dashboard</title>
      </Helmet>

      <section className="flex flex-col lg:flex-row justify-center gap-6">
        <div className="lg:w-64 min-h-screen bg-[#B68C5A] py-4">
          <div className="flex justify-center items-center">
            <img src={logo} className="w-[140px]" alt="" />
          </div>

          <ul className="menu space-y-2 font-bold text-white">
            {/* admin related route */}

            {isAdmin && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/systemAdmin"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdManageAccounts className="text-xl"></MdManageAccounts>{" "}
                    Admin Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/manageShop"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    {" "}
                    <FaShop></FaShop> Manage Shop
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/adminSalesSummary"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdSummarize></MdSummarize>{" "}
                    Sales Summary
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <FaUserShield></FaUserShield>{" "}
                    All Users
                  </NavLink>
                </li>

              </>
            )}

            {/* admin related route */}

            {/* shop manager related route */}
            {isManager && (
              <>
                <li>
                  <NavLink
                    to="/dashboard/shopManager"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdManageAccounts className="text-xl"></MdManageAccounts>{" "}
                    Manager Profile
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/productManagement"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdManageAccounts className="text-xl"></MdManageAccounts>{" "}
                    Product Management
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/offers"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdDiscount></MdDiscount> Offers and Coupon
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdPayment></MdPayment> Payment and Subscription
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/salesCollection"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <BsFillCollectionFill></BsFillCollectionFill> Sales
                    Collection
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/dashboard/salesSummary"
                    className={({ isActive, isPending }) =>
                      isActive ? "text-gray-800" : isPending ? "pending" : ""
                    }
                  >
                    {" "}
                    <MdSummarize></MdSummarize> Sales Summary
                  </NavLink>
                </li>
              </>
            )}
            {/* shop manager related route */}

            <div className="divider text-white"></div>

            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-gray-800" : isPending ? "pending" : ""
                }
              >
                {" "}
                <FaHome className="text-xl"></FaHome> Home
              </NavLink>
            </li>

            <li onClick={handleLogout}>
              <button>
                {" "}
                <CiLogout className="text-xl"></CiLogout> Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-7">
          <Outlet></Outlet>

          <div className="mt-36">
            <Footer></Footer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
