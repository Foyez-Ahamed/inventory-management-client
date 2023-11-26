import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Marquee from "react-fast-marquee";

const Categories = () => {
  const axiosPublic = useAxiosPublic();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/getCategories");
      return res.data;
    },
  });

  return (
   <>
   <Marquee>
   <div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
  {
      categories.map(category => <div key={category._id} className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={category.image}
          alt="Shoes"
          className="rounded-xl h-[50px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category.name}</h2>
      </div>
    </div>)
  }
</div>

</div>
   </Marquee>
   </>
  );
};

export default Categories;
