import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Marquee from "react-fast-marquee";

const ShopManager = () => {
  const { user } = useAuth();

  return (
    <div>
      <Marquee>
        <h1 className="text-[19px] font-bold">
          {" "}
          Hey, {user?.displayName} ! Welcome here , Please manage your shop here{" "}
          <Link to="/dashboard/productManagement">
            <span className="text-blue-600"> Product Management </span>
          </Link>{" "}
        </h1>
      </Marquee>

      <div
        className="flex justify-center items-center mt-10"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          className="w-[200px] h-[200px] rounded-full"
          src={user?.photoURL}
          alt=""
        />
      </div>
    </div>
  );
};

export default ShopManager;
