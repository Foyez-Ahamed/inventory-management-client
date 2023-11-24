import { AiFillPhone, AiTwotoneMail, AiFillHome } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <>
        <footer className="rounded-md shadow-lg p-1">
          <section className="flex flex-col md:flex-row lg:flex-row  justify-between p-4 lg:p-0 md:p-4 space-y-5">
            <div className="mt-5">
              <img className="w-[100px] object-cover" src={logo} alt="" />
              <p>
                <div className="flex gap-4 mt-7">
                  <a href="">
                    {" "}
                    <span className="text-2xl">
                      <FaFacebook className="text-[#1877f2]"></FaFacebook>
                    </span>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <span className="text-2xl">
                      <FaTwitter className="text-[#1da1f2]"></FaTwitter>
                    </span>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <span className="text-2xl">
                      <FaLinkedin className="text-[#2867B2]"></FaLinkedin>
                    </span>{" "}
                  </a>
                </div>
              </p>
            </div>

            <div>
              <h1 className="font-bold">Contact Info</h1>
              <ul className="mt-4">
                <li className="flex items-center gap-2">
                  {" "}
                  <AiFillHome></AiFillHome> New market, Chittagong
                </li>
                <li className="flex items-center gap-2">
                  <AiFillPhone></AiFillPhone> +88016122
                </li>
                <li className="flex items-center gap-2">
                  <AiTwotoneMail></AiTwotoneMail>king1gallery@gmail.com
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold">Quick Links</h1>
              <nav>
                <ul className="mt-2">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#B68C5A] underline"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    <li className="text-[16px] mb-2">Home</li>
                  </NavLink>
                  <NavLink
                    to="/watchDemo"
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-[#B68C5A] underline"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    <li className="text-[16px] mb-2">Watch Demo</li>
                  </NavLink>
                </ul>
              </nav>
            </div>

            <div className="flex gap-4">
              <div className="form-control">
                <h1 className="font-bold text-[#B68C5A]">Find Your Product</h1>
                <div className="input-group mt-3">
                  <div className="join">
                    <input
                      className="input input-bordered join-item"
                      placeholder="Search Here"
                    />
                    <button className="btn join-item rounded-r-full hover:bg-[#B68C5A] hover:text-white">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <h1 className="text-center py-3 px-2">
            {" "}
            <p>Copyright © 2023 - All right reserved by @kingGallery</p>
          </h1>
        </footer>
      </>
    </div>
  );
};

export default Footer;
