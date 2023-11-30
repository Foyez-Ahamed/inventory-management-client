import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-2">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#008000]">$10</h2>
            <p>Increase the limit 200</p>
            <div className="card-actions justify-end">
            <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold ">
            <Link>Purchase</Link>
          </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#008000]">$20</h2>
            <p>Increase the limit 450</p>
            <div className="card-actions justify-end">
            <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold ">
            <Link>Purchase</Link>
          </button>
            </div>
          </div>
        </div>


        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-[#008000]">$50</h2>
            <p>Increase the limit 1500</p>
            <div className="card-actions justify-end">
            <button className="px-6 py-2 rounded-md bg-[#B68C5A]  text-white font-bold ">
            <Link>Purchase</Link>
          </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payment;
