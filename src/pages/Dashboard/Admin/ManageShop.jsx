import useShops from "../../../hooks/useShops";
import { MdEmail } from "react-icons/md";

const ManageShop = () => {
  const [shops] = useShops();

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-[18px] font-bold">All Shop : {shops.length}</h1>
      </div>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#BB8506] text-white font-bold">
              <tr>
                <th>#</th>
                <th>Shop Logo</th>
                <th>Shop Name</th>
                <th>Product Limit</th>
                <th>Description</th>
                <th>Send Notice</th>
              </tr>
            </thead>

            <tbody>
              {shops.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.shopLogo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {product.shopName}
                    </span>
                  </td>

                  <td>{product.limit}</td>

                  <td>{product.shopInfo}</td>

                  <th>
                    <p className="text-blue-500 cursor-pointer flex justify-center items-center gap-2">Check Mail <MdEmail className="text-xl"></MdEmail></p>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default ManageShop;
