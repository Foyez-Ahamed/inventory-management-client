import { Link } from "react-router-dom";
import errorPic from "../../../src/assets/ErrorPage/errorpage.png";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img src={errorPic} alt="errorPic" />
        <Link to='/'><p className="text-center text-[18px] shadow-xl w-[100px] mx-auto text-blue-500 underline">Go Home </p></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
