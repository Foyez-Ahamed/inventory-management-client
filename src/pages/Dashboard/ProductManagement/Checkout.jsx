import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";

const Checkout = () => {
  const [carts, refetch] = useCarts();

  const { user } = useAuth();

  const [isDate, setIsDate] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const axiosSecure = useAxiosSecure();

  const handleGetPaid = () => {
    setIsDate(true);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const date = `${year}-${month}-${day} `;
    setDate(date);
    const time = `${hours}:${minutes}:${seconds}`;
    setTime(time);

    const salesInfo = {
      manager: user?.email,
      cartIds: carts?.map((item) => item._id),
      productIds: carts?.map((item) => item.productId),
      shopIds: carts?.map((item) => item.shopId),
      productName: carts?.map((item) => item.productName),
      productQuantity: carts?.map((item) => item.quantity),
      sellingPrice: carts?.map((item) => item.sellingPrice),
      date: date,
      time: time,
    };

    axiosSecure.post("/api/v1/createSales", salesInfo).then((res) => {
      console.log(res.data);
      if (res.data.deleteCartResult.deletedCount) {
        carts?.map((cart) => {
          axiosSecure
            .patch(`/api/v1/increaseSalesCount/${cart?.productId}`)
            .then((res) => {
             
              if(res.data.modifiedCount) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Paid Successfully! Thanks",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }  

              refetch();
              setIsDate(false);
            });
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-[18px] font-bold text-center uppercase text-[#BB8506]">
        Check out here{" "}
      </h2>

      {!carts.length && (
        <div className="mt-10">
          <Marquee>
            {" "}
            <h1 className="text-red-500 text-xl "> Empty Checkout ! </h1>
          </Marquee>
        </div>
      )}

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#BB8506] text-white font-bold">
              <tr>
                <th>Product Name</th>
                <th>Product Id</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Sales Count</th>
                <th>Selling Price</th>
              </tr>
            </thead>

            <tbody>
              {/*  */}
              {carts.map((cart) => (
                <tr key={cart._id}>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {cart.productName}
                    </span>
                  </td>

                  <td>{cart._id}</td>

                  <td>{cart?.quantity}</td>

                  <th>{cart.discount}</th>

                  <th>{cart.saleCount}</th>

                  <th>{cart.sellingPrice}</th>
                </tr>
              ))}
              {/*  */}
            </tbody>
          </table>
        </div>
      </div>

      {isDate && (
        <div className="space-y-2 mt-4">
          <p className="text-blue-600">Date : {date} </p>
          <p className="text-blue-600">Time : {time} </p>
        </div>
      )}
      <div className="text-center my-5  flex justify-end">
        {carts?.length > 0 && (
          <button
            className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold"
            onClick={handleGetPaid}
          >
            GET PAID
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
