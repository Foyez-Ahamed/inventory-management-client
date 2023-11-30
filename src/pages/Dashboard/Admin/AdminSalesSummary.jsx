
import useAllProducts from "../../../hooks/useAllProducts";


const AdminSalesSummary = () => {

  const [allProducts] = useAllProducts();

  const totalSale = allProducts?.reduce((total, product) => total + product.saleCount , 0)


  return (
    <div>

      <section>

        <div>
          <h1 className="text-xl font-bold text-[#B68C5A]"> Sales view </h1>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-6 mt-10">

          
          <div className="card bg-neutral text-neutral-content w-[200px] text-center">
            <div className="p-4">
              <h2 className="text-xl font-bold">Total Income</h2>
              <p>${0}</p>
            </div>
          </div>

          <div className="card bg-neutral text-neutral-content w-[200px] text-center">
            <div className="p-4">
              <h2 className="text-xl font-bold">Total Product</h2>
              <p>{allProducts.length}</p>
            </div>
          </div>

         
          <div className="card bg-neutral text-neutral-content w-[200px] text-center">
            <div className="p-4">
              <h2 className="text-xl font-bold">Total Sale</h2>
              <p>{totalSale}</p>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
};

export default AdminSalesSummary;
