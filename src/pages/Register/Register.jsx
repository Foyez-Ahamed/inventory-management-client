import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const [showPassIcon, setShowPassIcon] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>King Gallery | Register</title>
      </Helmet>

      <div className=" flex justify-center items-center mt-4 lg:mt-16">
        <div>
          <div className="shadow-xl p-8 w-full md:w-[450px] lg:w-[450px] rounded-xl bg-gray-100">
            <div>
              <h1 className="text-center font-medium text-3xl mb-6">
                Register Here
              </h1>
            </div>

            {/* form  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <div>
                  <label htmlFor="name">Name</label> <br />
                  <input
                    type="text"
                    placeholder="enter your name"
                    name="name"
                    {...register("name", { required: true })}
                    className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                  {errors.name && (
                    <span className="text-red-500">
                      Name Field is required !
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="photo">Photo URL</label> <br />
                  <input
                    type="text"
                    placeholder="enter your photoUrl"
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div>
                  <label htmlFor="email">Email address</label> <br />
                  <input
                    type="email"
                    placeholder="enter your email"
                    name="email"
                    {...register("email", { required: true })}
                    className=" mt-4 mb-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                  {errors.email && (
                    <span className="text-red-500">
                      Email Field is required!
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="password">Password</label> <br />
                  <input
                    type={showPassIcon ? "text" : "password"}
                    placeholder="enter your password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    })}
                    className="mt-4 input  w-full md:w-[390px] lg:w-[390px]"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      Password must be at least 6 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      password must have at least one capital letter and special
                      character!
                    </p>
                  )}
                </div>

                <span
                  onClick={() => setShowPassIcon(!showPassIcon)}
                  className="cursor-pointer absolute right-[10px] top-[368px]"
                >
                  {showPassIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <input
                  type="submit"
                  value="REGISTER"
                  className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#B68C5A] text-white hover:bg-gray-600"
                />
              </div>
            </form>

            <div className="mt-5 text-center">
              <p className="text-[#B68C5A]">
                {" "}
                Already registered? Go to log in{" "}
                <Link
                  to="/login"
                  className="text-bold text-blue-500 text-md uppercase underline"
                >
                  Login
                </Link>
              </p>
            </div>

            <div className="mt-8 text-center">
              <h1 className="font-bold"> Or Register with </h1>

              <SocialLogin></SocialLogin>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
