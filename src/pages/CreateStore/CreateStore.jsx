import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateStore = () => {

  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    
    const shopInfo = {
      
       shopName : data.shopName,
       shopLogo : data.shopLogo,
       shopInfo : data.shopInfo,
       location : data.shopLocation,
       ownerName : data.name,
       ownerEmail : data.email,
       productsCount : 0
    }

    axiosSecure.post('/api/v1/createShop', shopInfo)
    .then(res => {
      if(res?.data?.insertedId){
        const updateUserInfo = {
          role : 'manager',
          shopName : shopInfo.shopName,
          shopLogo : shopInfo.shopLogo,
          shopId : res?.data?.insertedId,
        } 

        axiosSecure.patch(`/api/v1/updateUserInfo/${user.email}`, updateUserInfo )
        .then(res => {
          if(res.data.modifiedCount > 0){
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Shop created successfully and you are manager now ! ",
              showConfirmButton: false,
              timer: 1500
            });
          }
          reset();
          navigate('/dashboard/productManagement')
          
        })

      } else{
        Swal.fire({
          position: "top",
          icon: "error",
          title: "You already create a shop!",
          showConfirmButton: false,
          timer: 1500
        });

        reset();
        navigate('/dashboard/shopManager')

      }
    })

  };

  return (
    <div>
      <Helmet>
        <title>King Gallery | Create Store</title>
      </Helmet>

      <div className="mt-10 text-center font-bold text-3xl">
        <h1>Create Your Shop</h1>
      </div>

      <section className="flex justify-center items-center w-full md:w-full shadow-xl rounded-xl p-3 mx-auto bg-slate-100 mt-10">
        <div>
          <div className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>


              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Shop Name</label>
                  <input
                    type="text"
                    {...register("shopName")}
                    placeholder="Enter your shop name"
                    name="shopName"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Shop Logo</label>
                  <input
                    type="text"
                    {...register("shopLogo")}
                    placeholder="Enter your shop logo"
                    name="shopLogo"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>


              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">
                <div className="form-control">
                  <label>Shop Info</label>
                  <input
                    type="text"
                    {...register("shopInfo")}
                    placeholder="Shop info"
                    name="shopInfo"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Shop Location</label>
                  <input
                    type="text"
                    {...register("shopLocation")}
                    placeholder="shopLocation"
                    name="shopLocation"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-6">

              <div className="form-control">
                  <label>Your Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your name"
                    defaultValue={user.displayName}
                    readOnly
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Your Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Your email"
                    defaultValue={user.email}
                    readOnly
                    name="email"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />{" "}
                </div>

              </div>

              <button className=" mt-8 mb-6 w-full px-5 py-2 text-white font-bold rounded-md bg-[#B68C5A] hover:bg-[#111827] flex justify-center items-center gap-2">
                Create Store
              </button>

            </form>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default CreateStore;
