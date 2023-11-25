import { FcGoogle } from "react-icons/fc";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-6 mt-6">

        {/* <button>
          {" "}
          <FaFacebook className="text-xl text-blue-700"></FaFacebook>{" "}
        </button>
        <button>
          {" "}
          <FaLinkedin className="text-xl text-blue-700"></FaLinkedin>{" "}
        </button> */}

        <button>
          {" "}
          <FcGoogle className="text-xl"></FcGoogle>{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
