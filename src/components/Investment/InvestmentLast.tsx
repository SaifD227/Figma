
import React from "react";
import MyInvestment from "./MyInvestment";
import TrendingStock from "./TrendingStock";

const InvestmentLast = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 gap-10 mt-4">
      <div className="w-full md:w-2/3">
        <MyInvestment />
      </div>
      <div className="w-full md:w-1/3">
        <TrendingStock />
      </div>
    </div>
  );
};

export default InvestmentLast;
