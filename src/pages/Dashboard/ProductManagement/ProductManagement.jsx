import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductManagement = () => {
  const [products] = useProducts();

  // const [products, setProducts] = useState([]);

  return (
    <div>
      {products.length > 0 && (
        <div className="flex justify-between border p-3">
          <div>
            <h1 className="text-[18px] font-bold">
              Total Product : {products.length}
            </h1>
          </div>

          <div>
            <Link to="/dashboard/addProduct">
              <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold ">
                {" "}
                Add Product{" "}
              </button>
            </Link>
          </div>
        </div>
      )}

      {products.length === 0 && (
        <div className="text-center space-y-4">
          <h1 className="text-[18px] font-bold">
            You do not add product yet !
          </h1>
          <div>
            <Link to="/dashboard/addProduct">
              <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold ">
                {" "}
                Add Product{" "}
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* product show in tabular format */}
      <section className="mt-8">
        <div>
          <h1 className="text-[18px] font-bold">See All Products</h1>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#BB8506] text-white font-bold">
                <tr>
                  <th>#</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Sale Count</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.productImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm">
                        {product.productName}
                      </span>
                    </td>

                    <td>{product.productQuantity}</td>

                    <td>{product.saleCount}</td>

                    <th>
                      <Link to={`/dashboard/updateItems/${product._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          <FaEdit className="text-xl text-[#BB8506]"></FaEdit>
                        </button>
                      </Link>
                    </th>

                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                      >
                        <FaTrashAlt className="text-xl text-[#BB8506]"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductManagement;
