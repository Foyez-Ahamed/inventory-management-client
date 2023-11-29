import Marquee from "react-fast-marquee";
import useAuth from "../../hooks/useAuth";
import useSales from "../../hooks/useSales";
import useProducts from "../../hooks/useProducts";
import { useEffect, useState } from "react";

const SalesSummary = () => {

    const { user } = useAuth();
    const [products] = useProducts();
    const [sales] = useSales();

    
    const [totalInvest, setTotalInvest] = useState()

    const [totalProfit, setTotalProfit] = useState()

    useEffect(() => {

        const totalInvest = products?.reduce((total, product) => total + product.productionCost, 0)
        setTotalInvest(totalInvest)

        const totalProfit = products?.reduce((total, product) => total + (product.saleCount * product.profitPerUnit), 0)

        const totalProfitInt = totalProfit.toFixed(2)

        setTotalProfit(totalProfitInt)

    },[products])


 
  return (
    <div>

      <div className="text-center">
        <Marquee>
          {" "}
          <h1 className="text-[#B68C5A] text-xl font-bold uppercase">
            {" "}
            See Sales Summary{" "}
          </h1>
        </Marquee>
      </div>

      <div className="stats shadow mt-10 flex flex-col lg:flex-row">

        <div className="stat">
          <div className="stat-title">Total Sale</div>
          <div className="stat-value text-primary">{sales.length}</div>
        </div>

         
        <div className="stat">
          <div className="stat-title">Total Invest</div>
          <div className="stat-value text-primary">{totalInvest}</div>
        
        </div>

        <div className="stat">
          <div className="stat-title">Total Profit</div>
          <div className="stat-value text-secondary">{totalProfit}</div>
         
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-desc text-secondary">{user?.displayName}</div>
        </div>
      </div>


      <div className="text-center mt-16">
        <Marquee>
          {" "}
          <h1 className="text-[#B68C5A] text-xl font-bold uppercase">
            {" "}
            See Sales History{" "}
          </h1>
        </Marquee>
      </div>


      <div className="mt-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#BB8506] text-white font-bold">
                <tr>
                  <th>Product Name</th>
                  <th>Selling Date</th>
                </tr>
              </thead>

              <tbody>
                        {sales?.map((sale, saleIndex) => (
                            sale.productName.map((product, productIndex) => (
                                <tr key={`${saleIndex}-${productIndex}`} className={`${productIndex === sale.productName.length - 1 ? '' : 'border-gray-300'}`}>
                                    <td>
                                        {product}
                                    </td>
                                    <td>{sale.date}</td> 
                                </tr>
                            ))
                        ))}
                    </tbody>

            </table>
          </div>
        </div>
    </div>
  );
};

export default SalesSummary;
