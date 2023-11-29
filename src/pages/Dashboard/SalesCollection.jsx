import { FaCartArrowDown } from "react-icons/fa";
import useProducts from "../../hooks/useProducts";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SalesCollection = () => {

    const [products] = useProducts();

    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();

    const [searchProduct, setSearchProduct] = useState([]);

    const [search, setSearch] = useState(false);

    const handleForm = e => {
        e.preventDefault();

        setSearch(true)
        
        const filter = products?.filter(product => product._id === e.target.searchId.value);

        if(filter) {
            setSearchProduct(filter)
        }
    }

    const handleAddToCart = (id) => {
      
      const present = products?.find(product => product._id === id )

      // console.log(present);


       const addCartInfo = {
         
          productId : id,
          productName : present?.productName,
          productImage : present?.productImage,
          quantity : present?.productQuantity,
          discount : present?.discount,
          sellingPrice : present?.sellingPrice,
          manager : user?.email,
          shopId : products[0].shopId


       }

       axiosSecure.post('/api/v1/createCarts', addCartInfo)
       .then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Product added to cart successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
       })

    }

  return (
    <div>
      <form onSubmit={handleForm}>
        
          <input
            name="searchId"
            className="input input-bordered join-item lg:w-[400px]"
            placeholder="Search by id"
          />
          <button className="btn join-item bg-[#B68C5A] text-white">Search</button>
       
      </form>

      <section className="mt-8">
        <div>
          <h1 className="text-[18px] font-bold">All Shop Products</h1>
        </div>

        <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#BB8506] text-white font-bold">
                <tr>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Id</th>
                  <th>Quantity</th>
                  <th>Discount</th>
                  <th>Selling Price</th>
                  <th>Check Out</th>

                </tr>
              </thead>

              <tbody>
                {/*  */}
                {
                    search ? searchProduct?.map((product) => (
                        <tr key={product._id}>
                         
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
    
                        <td>{product._id}</td>
    
                        <td>{product.productQuantity}</td>
    
                        <th>
                          {product.discount}
                        </th>
    
                        <th>
                          {product.sellingPrice} 
                        </th>

                        
                        <th>
                          <button> <FaCartArrowDown className="text-xl text-[#BB8506]"></FaCartArrowDown> </button>
                        </th>
                        </tr>
                      ))

                      :

                      products.map((product) => (
                        <tr key={product._id}>
                         
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
      
                          <td>{product._id}</td>
      
                          <td>{product.productQuantity}</td>
      
                          <th>
                            {product.discount}
                          </th>
      
                          <th>
                            {product.sellingPrice} 
                          </th>

                          
                          <th>
                            <button onClick={() => handleAddToCart(product._id)}> <FaCartArrowDown className="text-xl text-[#BB8506]"></FaCartArrowDown> </button>
                          </th>
                        </tr>
                      ))
                }
                {/*  */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    

    </div>
  );
};

export default SalesCollection;
