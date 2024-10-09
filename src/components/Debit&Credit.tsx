import Chart from "../components/MyCharts/Chart";
import React from "react";
import { RiAppleLine, RiAccountCircleLine } from "react-icons/ri";

const DebitCredit = () => {
  return (
    <div className="mt-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 p-4">
      {/* Debit & Credit Overview Section */}
      <div className="w-full lg:w-3/5">
        <div className="flex flex-col h-full">
          <h1 className="text-xl font-semibold mb-4">
            Debit & Credit Overview
          </h1>
          <div className="bg-white shadow-lg rounded-lg p-4 flex-grow">
            <Chart />
          </div>
        </div>
      </div>

      {/* Invoice Section */}
      <div className="w-full lg:w-2/5">
        <div className="flex flex-col h-full">
          <h1 className="text-lg font-semibold mb-4">Invoice Sent</h1>
          <div className="bg-white shadow-lg rounded-lg p-6 h-auto lg:h-full overflow-auto flex-grow">
            {/* Invoice Item 1 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="bg-blue-200 p-3 rounded-full">
                  <RiAppleLine className="text-3xl text-black" />
                </div>
                <div className="ml-4">
                  <h1 className="font-medium">Apple Store</h1>
                  <p className="text-gray-500">5h ago</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">$450</p>
              </div>
            </div>

            {/* Invoice Item 2 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="bg-red-200 p-3 rounded-full">
                  <RiAccountCircleLine className="text-3xl text-black" />
                </div>
                <div className="ml-4">
                  <h1 className="font-medium">Apple Store</h1>
                  <p className="text-gray-500">5h ago</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">$450</p>
              </div>
            </div>

            {/* Invoice Item 3 */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <div className="bg-yellow-200 p-3 rounded-full">
                  <RiAppleLine className="text-3xl text-black" />
                </div>
                <div className="ml-4">
                  <h1 className="font-medium">Apple Store</h1>
                  <p className="text-gray-500">5h ago</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">$450</p>
              </div>
            </div>

            {/* Invoice Item 4 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-orange-200 p-3 rounded-full">
                  <RiAccountCircleLine className="text-3xl text-black" />
                </div>
                <div className="ml-4">
                  <h1 className="font-medium">Apple Store</h1>
                  <p className="text-gray-500">5h ago</p>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">$450</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCredit;
