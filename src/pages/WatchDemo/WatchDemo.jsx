import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { FaHandPointDown } from "react-icons/fa";

const WatchDemo = () => {

  const {user} = useAuth();

 return (
    <div>
      <Helmet>
        <title>King Gallery | Watch Demo</title>
      </Helmet>

      <div className="text-center mt-8 mb-8">
        <h1 className="text-3xl font-bold">Hello, {user?.displayName}, Welcome Here !</h1>
        <p className="mt-5 flex justify-center items-center text-[20px] gap-2 text-blue-600">See demo please <FaHandPointDown className="text-amber-400"></FaHandPointDown></p>
      </div>

      <div className="flex justify-center items-center mt-6">
      <iframe width="660" height="315" src="https://www.youtube.com/embed/PohSjXM5AW0?si=w1bQlK0fY8e6COQK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      

    </div>
  );
};

export default WatchDemo;
