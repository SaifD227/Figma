import React from "react";
import UserIcon from "../../public/icons/UserIcon";
import CreditCardIcon from "../../public/icons/CreditCardIcon";
import { FaDownload } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import LoanTable from "./LoanTable";

const Service = () => {
  return (
    <div className="bg-gray-100 top-28 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute">
      <div className="flex flex-col md:flex-row gap-6 mx-4 mt-4">
        {/* Card 1 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/4">
          <div className="bg-blue-500 p-3 rounded-full">
            <UserIcon className="text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-blue-600">
              Personal Loans
            </h1>
            <p className="text-gray-600">$5,000</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/4">
          <div className="bg-green-500 p-3 rounded-full">
            <CreditCardIcon className="text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-green-600">
              Corporate Loans
            </h1>
            <p className="text-gray-600">$100,000</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/4">
          <div className="bg-orange-500 p-3 rounded-full">
            <FaDownload className="text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-orange-600">
              Business Loans
            </h1>
            <p className="text-gray-600">$5,000,000</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 w-full md:w-1/4">
          <div className="bg-purple-500 p-3 rounded-full">
            <IoMdSettings className="text-white" />
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-purple-600">
              Custom Loans
            </h1>
            <p className="text-gray-600">Choose Money</p>
          </div>
        </div>
      </div>
      <LoanTable/>
    </div>
  );
};

export default Service;
