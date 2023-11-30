import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthorizationErrorPage = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div className="text-center lg:w-[500px] space-y-4">
        <h1 className="flex justify-center items-center">
          <FaLock className="text-4xl text-[#867b3e]"></FaLock>
        </h1>
        <h2 className="font-medium text-2xl text-red-500">Unauthorized Access !</h2>
        <p className="text-lg">You do not have permission to view this page</p>

        <Link to="/">
          <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold mt-6">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthorizationErrorPage;
