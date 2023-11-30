import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {

  const [showPassIcon, setShowPassIcon] = useState(false);

  const [error, setError] = useState(null);

  const {userLogin} = useAuth();

  const axiosSecure = useAxiosSecure();


  const navigate = useNavigate();

  const location = useLocation();


  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {

    const email =  data.email 
    const password = data.password

    try{
     
      await userLogin(email, password)

      const isManager = await axiosSecure.get(`/api/v1/user/manager/${email}`)
     
      reset();

      navigate( location?.state ? location.state : isManager.data ? '/dashboard/productManagement' : '/createStore');

      toast.success('Login successfully')

    } catch(error){
       console.log(error.message);
       setError('Invalid email or password')
    }
    
  };

  return (
    <div>
      <div className=" flex justify-center items-center mt-4 lg:mt-24">
        <div>
          <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100">
            <div>
              <h1 className="text-center font-medium text-3xl mb-6">
               Login Here
              </h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <div>
                  <label htmlFor="email">Email address</label> <br />
                  <input
                    type="email"
                    placeholder="enter your email..."
                    name="email"
                    {...register("email", {required : true})}
                    className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div>
                  <label htmlFor="password">Password</label> <br />
                  <input
                    type={showPassIcon ? "text" : "password"}
                    placeholder="enter your password"
                    {...register("password", {required : true})}
                    name="password"
                    className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <span
                  onClick={() => setShowPassIcon(!showPassIcon)}
                  className="cursor-pointer absolute right-[10px] top-[158px]"
                >
                  {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <input
                  type="submit"
                  value="LOGIN"
                  className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#B68C5A] text-white hover:bg-gray-600"
                />
              </div>
            </form>

            <div className="mt-5 text-center">
              <p className="text-[#B68C5A]">
                {" "}
                New here? Create a New Account{" "}
                <Link
                  to="/register"
                  className="text-bold text-blue-500 text-md uppercase underline"
                >
                  Register
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center">
              <h1 className="font-bold"> Or Login with </h1>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
