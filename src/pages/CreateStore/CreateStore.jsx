import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const CreateStore = () => {

  const {user} = useAuth();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
