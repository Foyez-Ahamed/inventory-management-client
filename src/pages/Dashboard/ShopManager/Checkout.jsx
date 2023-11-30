import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCarts from "../../../hooks/useCarts";

const Checkout = () => {
  const [carts, refetch] = useCarts();
  
  const { user } = useAuth();

    const [isDate, setIsDate] = useState(false)
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')

    const axiosSecure = useAxiosSecure()


    const handleGetPaid = () => {
        setIsDate(true)
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getSeconds().toString().padStart(2, '0');
        const date = `${year}-${month}-${day} `;
        setDate(date)
        const time = `${hours}:${minutes}:${seconds}`
        setTime(time)
        
        const salesInfo ={
           
            manager:user?.email,
            cartIds : carts?.map(item=>item._id),
            productIds: carts?.map(item=>item.productId),
            shopIds: carts?.map(item=>item.shopId),
            productName: carts?.map(item=>item.productName),
            productQuantity: carts?.map(item=>item.productQuantity),
            sellingPrice:carts?.map(item=>item.sellingPrice),
            date : date,
            time:time
        }
        console.log(salesInfo);
        axiosSecure.post('/sales',salesInfo)
        .then(res=>{

            if(res.data.deleteResult.deletedCount){
              carts?.map(item=>{
                axiosSecure.patch(`/updateSaleCount/${item?.productId}`)
                .then(res=>{
                    console.log(res.data);
                    refetch()
                    setIsDate(false)
                })
              })  
            }
        })

    }

  return (
    <div>
      <h2 className="text-lg font-semibold my-5">Check out from here </h2>

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
                  <th>Selling Price</th>

                </tr>
              </thead>

              <tbody>
                {/*  */}
                {
                      carts.map((product) => (
                        <tr key={product._id}>
                        
                          <td>
                            <span className="badge badge-ghost badge-sm">
                              {product.productName}
                            </span>
                          </td>
      
                          <td>{product._id}</td>
      
                          <td>{product?.quantity}</td>
      
                          <th>
                            {product.discount}
                          </th>
      
                          <th>
                            {product.sellingPrice} 
                          </th>
                        </tr>
                      ))
                }
                {/*  */}
              </tbody>
            </table>
          </div>
        </div>


      {isDate && (
        <div>
          <p>Date:{date} </p>
          <p>Time: {time} </p>
        </div>
      )}
      <div className="text-center my-5">
        {carts?.length > 0 && (
          <button onClick={handleGetPaid} className="btn ">
            GET PAID
          </button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
