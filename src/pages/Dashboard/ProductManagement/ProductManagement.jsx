import { Link } from "react-router-dom";


const ProductManagement = () => {


    return (
        <div>

            <div className="flex justify-between">
                <div>
                    <h1 className="text-[18px] font-bold">Total Product</h1>
                </div>

                <div>
                    <Link to='/dashboard/addProduct'><button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold "> Add Product </button></Link>
                </div>
            </div>
           
        </div>
    );
};

export default ProductManagement;