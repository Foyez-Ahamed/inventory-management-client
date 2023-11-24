import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import logo from "../../assets/logo/logo.png"

const Navbar = () => {

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
            to="/contact"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A] " : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium ml-4">Create Store</li>
          </NavLink>
    
          <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium  ml-4">Watch Demo</li>
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive, isPending }) =>
              isActive ? "text-[#B68C5A]" : isPending ? "pending" : ""
            }
          >
            <li className="text-[16px] font-medium  ml-4">Register</li>
          </NavLink>

    
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
        <div className="navbar rounded-md">
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

            <button>Login</button>

            {/* <div className="mr-4">
               <Link to='/dashboard/cart'>
               <button className="flex">
                 <FaCartShopping className="text-2xl"></FaCartShopping>
                <div className="badge badge-secondary -mt-3">+{cart.length}</div>
              </button>
               </Link>
            </div> */}
  
            {/* <div>
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
                    isActive ? "text-[#EEFF25]" : isPending ? "pending" : ""
                  }
                >
                  <button className="text-[16px] font-medium">SIGN IN</button>
                </NavLink>
              )}
            </div> */}

          </div>
        </div>
      </div>
    );
};

export default Navbar;