import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialLogin = () => {

    const axiosPublic = useAxiosPublic();

    const {googleLogin} = useAuth();

    const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {

        googleLogin()
        .then(result => {

            const userInfo = {

                name : result.user?.displayName,
                email : result.user?.email,
                image: result.user?.photoURL

            }

            axiosPublic.post('/api/v1/createUser', userInfo)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    console.log('user added to the database');
                    toast.success('Successfully sign up');
                    navigate('/createStore')
                    // navigate(from, {replace:true});
                }
            })

        })
        .then();

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
