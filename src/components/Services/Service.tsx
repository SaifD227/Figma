import React from "react";
import { GiLifeTap } from "react-icons/gi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import BankServiceList from "./BankServiceList";

const Service = () => {
  return (
    <div className="bg-gray-100 top-28 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)] absolute py-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-4 flex-wrap">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 flex items-center transition-transform hover:scale-105">
          <div className="bg-blue-500 text-white p-4 rounded-full mr-4">
            <GiLifeTap size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Life Insurance</h1>
            <p className="text-lg text-gray-500">Unlimited Protection</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 flex items-center transition-transform hover:scale-105">
          <div className="bg-green-500 text-white p-4 rounded-full mr-4">
            <RiShoppingBagFill size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Shopping</h1>
            <p className="text-lg text-gray-500">Buy. Think. Grow</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80  flex items-center transition-transform hover:scale-105">
          <div className="bg-yellow-500 text-white p-4 rounded-full mr-4">
            <AiTwotoneSafetyCertificate size={40} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Safety</h1>
            <p className="text-lg text-gray-500">We are your allies</p>
          </div>
        </div>
      </div>
      <BankServiceList />
    </div>
  );
};

export default Service;
