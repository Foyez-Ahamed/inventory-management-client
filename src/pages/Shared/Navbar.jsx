import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../assets/logo/logo.png"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {

   const {user, userLogout} = useAuth();
   
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.form?.pathname || '/';

   const handleLogout = () => {
      userLogout()
      .then(() => {
        toast.success('Logged out successfully');
        navigate(from, {replace:true});
      })
      .catch();
   }

    const navItems = (
        <>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px]  font-medium ">Home</li>
          </NavLink>
    
          <NavLink
            to="/createStore"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A] " : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium ml-4">Create Store</li>
          </NavLink>
    
          <NavLink
            to="/watchDemo"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium  ml-4">Watch Demo</li>
          </NavLink>

         {
           !user && <NavLink
           to="/register"
           className={({ isActive, isPending }) =>
             isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
           }
         >
           <li className="text-[16px] font-medium  ml-4">Register</li>
         </NavLink>
         }

    
          {/* {
            user && isAdmin && <NavLink
            to="/dashboard/adminHome"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] uppercase font-medium ml-4">Dashboard</li>
          </NavLink>
          }
    
          {
            user && !isAdmin && <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] uppercase font-medium ml-4">Dashboard</li>
          </NavLink>
          } */}
    
        </>
      );

    return (
        <div>
        <div className="navbar rounded-md shadow-lg">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium text-black"
              >
                {navItems}
              </ul>
            </div>
  
            <div className="flex justify-center items-center">
              <Link to="/">
                <a className="cursor-pointer">
                  <img className="w-[100px]" src={logo} alt="" />
                </a>
              </Link>
            </div>
          </div>
  
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
  
          <div className="navbar-end">

            <div>
              {user?.email ? (
                <>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <a className="justify-between">{user.displayName}</a>
                      </li>
                      <li>
                        <a>{user.email}</a>
                      </li>
                      <li>
                        <a onClick={handleLogout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
                  }
                >
                  <button className="text-[16px] font-medium shadow-xl rounded-md px-4 py-1">Login</button>
                </NavLink>
              )}
            </div>

          </div>
        </div>
      </div>
    );
};

export default Navbar;