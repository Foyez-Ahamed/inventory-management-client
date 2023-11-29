import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const AddProduct = () => {
  
  const [manager, setManager] = useState({});

  const {user} = useAuth();

  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
     axiosSecure.get(`http://localhost:5000/api/v1/getUsers/${user?.email}`)
     .then(res => {
       setManager(res.data)
     })

  },[axiosSecure, user?.email])

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {

     // image upload to image bb then get url // 
     const imageFile = {image : data.image[0]};

     const res = await axiosPublic.post(image_hosting_api, imageFile, {
         headers: {
             'content-type' : 'multipart/form-data'
         }
     })

    //  console.log(res.data.success, res.data.data.display_url);

    if(res.data.success) {

      const buyingPrice = parseFloat(data.cost) / parseFloat(data.quantity);
      const tax = (buyingPrice * 7.5) / 100;
      const profit = (buyingPrice * parseFloat(data.profitMargin)) / 100 ;

      const sellingPrice = buyingPrice + tax + profit;

      const profitPerUnit = sellingPrice - buyingPrice
      
      const productInfo = {

        productName : data.productName,
        productImage : res.data.data.display_url,
        productQuantity : parseFloat(data.quantity),
        location : data.productLocation,
        productionCost : parseFloat(data.cost),
        profitMargin : parseFloat(data.profitMargin),
        discount : parseFloat(data.discount),
        productDetails : data.details,
        shopId : manager.shopId,
        shopName : manager.shopName,
        manager : manager.email,
        productAddDate : new Date(),
        saleCount : 0,
        sellingPrice : sellingPrice,
        profitPerUnit : profitPerUnit

      }

      // console.log(productInfo);

      axiosSecure.post('/api/v1/createProduct', productInfo)
      .then(res => {
        console.log(res.data);
         if(res.data.insertedId) {
           axiosSecure.patch(`/api/v1/changeLimit/${productInfo.shopId}`)
           .then(res => {
             if(res.data.modifiedCount) {
              axiosSecure.patch(`/api/v1/increaseProduct/${productInfo.shopId}`)
              .then(res => {
                 if(res.data.modifiedCount){
                  Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 }
                 reset();
              })
             }
           })
         }

         else{
          Swal.fire({
            position: "top",
            icon: "error",
            title: "You already reach your product added limit ! Please subscription confirm then added product",
            showConfirmButton: false,
            timer: 1500
          });

          reset();
          navigate('/dashboard/payment')

         }

      })
      
      
    }

  };

  return (
    <div>

      <div className="mt-10 text-center font-bold text-3xl">
        <h1>Add Product</h1>
      </div>

      <section className="flex justify-center items-center w-full md:w-full shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
        <div>
          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Product Name</label>
                  <input
                    type="text"
                    {...register("productName")}
                    placeholder="Enter your product name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div>
                <label>Product Image</label>   
                <input
                  type="file"
                  {...register("image", {required:true})}
                  className="file-input file-input-ghost w-full max-w-xs"
                />
                </div>
               </div>
                
              </div>


              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">
                <div className="form-control">
                  <label> Product Quantity</label>
                  <input
                    type="text"
                    {...register("quantity")}
                    placeholder="Product Quantity"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Product Location</label>
                  <input
                    type="text"
                    {...register("productLocation")}
                    placeholder="Product Location"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">
                <div className="form-control">
                  <label>Production Cost</label>
                  <input
                    type="text"
                    {...register("cost")}
                    placeholder="Production cost"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Profit Margin %</label>
                  <input
                    type="text"
                    {...register("profitMargin")}
                    placeholder="Profit margin"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">
                <div className="form-control">
                  <label>Discount</label>
                  <input
                    type="text"
                    {...register("discount")}
                    placeholder="Discount"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

               <div className="form-control">
                  <label>Product Details</label>
                  <textarea
                    name="details"
                    {...register("details")}
                    className="textarea textarea-bordered mt-2  w-full md:w-[390px] lg:w-[390px]"
                    placeholder="Bio"
                  ></textarea>{" "}
                </div>
              </div>


              <button className=" mt-8 mb-6 w-full px-5 py-2 text-white font-bold rounded-md bg-[#B68C5A] hover:bg-[#111827] flex justify-center items-center gap-2">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
