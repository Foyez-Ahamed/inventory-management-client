import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { BsArrow90DegRight } from "react-icons/bs";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { Rating } from "@smastrom/react-rating";
import Marquee from "react-fast-marquee";

import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const axiosPublic = useAxiosPublic();

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/getReviews");
      return res.data;
    },
  });

  return (
    <div>
      <SectionHeading
        title={"See What Customers Say"}
        details={"Customers Review"}
      ></SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 shadow-xl image-full h-[400px]"
          >
            <figure>
              {" "}
              <img src={review.image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                {" "}
                <BsArrow90DegRight className="text-3xl"></BsArrow90DegRight>{" "}
                {review.details}
              </p>

              <Rating
                style={{ maxWidth: 120 }}
                value={review.rating}
                readOnly
              />

              <Marquee>
                <h2 className="card-title">{review.name}</h2>
              </Marquee>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
