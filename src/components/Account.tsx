import React from "react";
import LoanIcon from "../../public/icons/LoanIcon";
import { BsCalendar3WeekFill } from "react-icons/bs";
import { FaSackDollar, FaCircleDollarToSlot } from "react-icons/fa6";
import LastTransaction from "./LastTransaction";
import DebitCredit from "./Debit&Credit";


const Account = () => {
  return (
    <div className="bg-gray-100 top-28 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute">
      <div className="flex flex-wrap gap-6 p-6 justify-around">
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-60">
          <div className="bg-green-200 p-3 rounded-full">
            <FaSackDollar className="text-4xl text-green-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">My Balance</h1>
            <p className="text-gray-500">$12,750</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-60">
          <div className="bg-blue-200 p-3 rounded-full">
            <LoanIcon className="text-4xl text-blue-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Income</h1>
            <p className="text-gray-500">$5,600</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-60">
          <div className="bg-red-200 p-3 rounded-full">
            <BsCalendar3WeekFill className="text-4xl text-red-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Expense</h1>
            <p className="text-gray-500">$3,640</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-4 w-60">
          <div className="bg-yellow-200 p-3 rounded-full">
            <FaCircleDollarToSlot className="text-4xl text-yellow-600" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Total Saving</h1>
            <p className="text-gray-500">$7,920</p>
          </div>
        </div>
      </div>
      <div>
        <LastTransaction />
      </div>
      <div>
        <DebitCredit />
    
      </div>
    </div>
  );
};

export default Account;
