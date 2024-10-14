import React from "react";
import { FaSackDollar } from "react-icons/fa6";
import TotalInvestment from "./TotalInvestment";
import InvestmentLast from "./InvestmentLast";

const Investments = () => {
  return (
    <div className="h- bg-gray-100 top-28 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)]  absolute ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 ">
        {/* Card 1: Total Invested Amount */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="bg-green-500 p-4 rounded-full">
            <FaSackDollar className="text-white text-4xl" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Total Invested Amount</h1>
            <p className="text-gray-600">$150,000</p>
          </div>
        </div>

        {/* Card 2: Number of Investments */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="bg-blue-500 p-4 rounded-full">
            <FaSackDollar className="text-white text-4xl" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Number of Investments</h1>
            <p className="text-gray-600">125</p>
          </div>
        </div>

        {/* Card 3: Rate of Return */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="bg-yellow-500 p-4 rounded-full">
            <FaSackDollar className="text-white text-4xl" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Rate of Return</h1>
            <p className="text-gray-600">+5.00%</p>
          </div>
        </div>
      </div>
      <div>
        <TotalInvestment />
        <InvestmentLast />
      </div>
    </div>
  );
};

export default Investments;
