import React from "react";
import ChartComponent from "../../components/MyCharts/ChartComponent";

import LargeAreaChart from "../../components/MyCharts/LargeAreaChart";


const TotalInvestment = () => {
  return (
    <div className="flex flex-col md:flex-row mx-2 mt-4 items-start gap-8">
      <div className="w-full md:w-1/2 h-full">
        <div className="mb-4">
          <h1 className="text-blue-950 text-xl  mb-6">
            Yearly Total Investment
          </h1>
        </div>
        <div className="bg-white rounded shadow-lg h-full ">
          <ChartComponent />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full">
        <div className="mb-4">
          <h1 className="text-blue-950 text-xl mb-6 ">
            Monthly Revenue
          </h1>
        </div>
        <div className="bg-white rounded shadow-lg p-4 h-5/6">
          <LargeAreaChart />
        </div>
      </div>
    </div>
  );
};

export default TotalInvestment;
