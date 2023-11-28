import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ProductManagement = () => {

  const [products, refetch] = useProducts();

  const axiosSecure = useAxiosSecure();

  const handleDeleteProduct = id => {
    
      Swal.fire({
        title: "Are you sure?",
        text: "Want to delete product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/api/v1/deleteProduct/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0) {
                axiosSecure.patch(`/api/v1/decreaseProduct/${products[0].shopId}`)
                .then(res => {
                    if(res.data.modifiedCount > 0) {

                        axiosSecure.patch(`/api/v1/increaseLimit/${products[0].shopId}`)
                        .then(res => {
                            if(res.data.modifiedCount > 0){
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Product has been deleted.",
                                    icon: "success"
                                  });
                                  refetch();
                            }
                        })
                       
                    }
                })
            }
          })
        }
      });

  }


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
                      <Link to={`/dashboard/updateProduct/${product._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          <FaEdit className="text-xl text-[#BB8506]"></FaEdit>
                        </button>
                      </Link>
                    </th>

                    <th>
                      <button
                       onClick={ () => handleDeleteProduct(product._id)}
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
