import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic();

    const axiosSecure = useAxiosSecure();

    const {googleLogin} = useAuth();

    const navigate = useNavigate();

    const location = useLocation();

    const handleGoogleLogin = async () => {

        try {

         const result = await googleLogin()

         const userInfo = {

          name : result.user?.displayName,
          email : result.user?.email,
          image: result.user?.photoURL
      }

      const isManager = await axiosSecure.get(`/api/v1/user/manager/${userInfo?.email}`)

      axiosPublic.post('/api/v1/createUser', userInfo)
      .then(res => {
          console.log(res.data);
      })

      navigate( location?.state ? location.state : isManager.data ? '/dashboard/shopManager' : '/createStore');

      toast.success('Login successfully')
         
        } catch(error) {
          console.log(error);
        }

    }

  return (
    <div>
      <div className="flex items-center justify-center gap-6 mt-6">

        <button onClick={handleGoogleLogin}>
          {" "}
          <FcGoogle className="text-xl"></FcGoogle>{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
