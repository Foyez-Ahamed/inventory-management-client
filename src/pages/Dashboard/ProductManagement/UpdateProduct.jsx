import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const image_hosting = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const UpdateProduct = () => {

  const products = useLoaderData();

  const axiosPublic = useAxiosPublic();

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const { register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
      // image upload to image bb then get url // 
      const imageFile = {image : data.image[0]};

      const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
              'content-type' : 'multipart/form-data'
          }
      })

      if(res.data.success) {

        const productInfo = {

        productName : data.productName,
        productImage : res.data.data.display_url,
        productQuantity : parseFloat(data.quantity),
        location : data.productLocation,
        productionCost : parseFloat(data.cost),
        profitMargin : parseFloat(data.profitMargin),
        discount : parseFloat(data.discount),
        productDetails : data.details,

        }

        axiosSecure.patch(`/api/v1/updateProduct/${products._id}`, productInfo)
        .then(res => {
            if(res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Product updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/dashboard/productManagement')
            }
        })
        
      }

  }

    

    return (
        <div>

      <div className="mt-10 text-center font-bold text-3xl">
        <h1>Update Product</h1>
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
                    defaultValue={products?.productName}
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
                  {...register("image")}
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
                    defaultValue={products?.productQuantity}
                    {...register("quantity")}
                    placeholder="Product Quantity"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Product Location</label>
                  <input
                    type="text"
                    defaultValue={products?.location}
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
                    defaultValue={products?.productionCost}
                    {...register("cost")}
                    placeholder="Production cost"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Profit Margin %</label>
                  <input
                    type="text"
                    defaultValue={products?.profitMargin}
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
                    defaultValue={products?.discount}
                    {...register("discount")}
                    placeholder="Discount"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

               <div className="form-control">
                  <label>Product Details</label>
                  <textarea
                    name="details"
                    defaultValue={products?.productDetails}
                    {...register("details")}
                    className="textarea textarea-bordered mt-2  w-full md:w-[390px] lg:w-[390px]"
                    placeholder="Bio"
                  ></textarea>{" "}
                </div>
              </div>


              <button className=" mt-8 mb-6 w-full px-5 py-2 text-white font-bold rounded-md bg-[#B68C5A] hover:bg-[#111827] flex justify-center items-center gap-2">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    );
};

export default UpdateProduct;