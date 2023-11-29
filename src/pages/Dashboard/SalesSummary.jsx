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

        const totalProfitInt = totalProfit.toFixed(3)
        setTotalProfit(totalProfit)

        console.log(totalProfitInt);

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
          <div className="stat-title">{totalProfit}</div>
          <div className="stat-value text-secondary">{}</div>
         
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
    </div>
  );
};

export default SalesSummary;
