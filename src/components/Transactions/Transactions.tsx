import React from "react";
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import MonthChart from "../../components/MyCharts/MonthChart";
import PaginatedTable from "./PaginatedTable";

const Transactions = () => {
  return (
    <div className="h-auto dark:bg-medium bg-gray-100 top-24 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute">
      {/* first container */}
      <div className="flex dark:bg-medium flex-wrap justify-between gap-4 mx-4">
        <div className="flex-1 min-w-[280px] p-2 w-full md:w-1/3 dark:bg-medium">
          <Card1 />
        </div>

        <div className="flex-1 dark:bg-medium min-w-[280px] p-2 w-full md:w-1/3">
          <Card2 />
        </div>

        <div className="flex-1 min-w-[280px] p-2 w-full md:w-1/3">
          <div className="mt-5 text-blue-950 text-lg">
            <h1>My Expense</h1>
          </div>
          <div className="mt-3">
            <MonthChart />
          </div>
        </div>
      </div>

      {/* second container */}
      <div className="mt-8">
        <PaginatedTable />
      </div>
    </div>
  );
};

export default Transactions;
