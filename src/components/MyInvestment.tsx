
import React from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { PiMotorcycleBold } from "react-icons/pi";

const MyInvestment = () => {
  return (
    <div>
      <h1 className="mb-6 text-xl text-blue-950">My Investment</h1>
      <div className="space-y-4">
        {/* Apple Store */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaApple className="text-blue-500 w-6 h-6" />
            </div>
            <div className="ml-3">
              <h1 className="font-semibold">Apple Store</h1>
              <p className="text-gray-600">E-commerce, Marketplace</p>
            </div>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="font-bold text-lg">$54,000</h1>
            <p className="text-gray-500">Investment Value</p>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="text-green-500 font-bold">+16%</h1>
            <p className="text-gray-500">Return Value</p>
          </div>
        </div>

        {/* Samsung Mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaGoogle className="text-blue-500 w-6 h-6" />
            </div>
            <div className="ml-3">
              <h1 className="font-semibold">Samsung Mobile</h1>
              <p className="text-gray-600">E-commerce, Marketplace</p>
            </div>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="font-bold text-lg">$25,000</h1>
            <p className="text-gray-500">Investment Value</p>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="text-red-500 font-bold">+4%</h1>
            <p className="text-gray-500">Return Value</p>
          </div>
        </div>

        {/* Motorcycle */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <PiMotorcycleBold className="text-blue-500 w-6 h-6" />
            </div>
            <div className="ml-3">
              <h1 className="font-semibold">Motorcycle Store</h1>
              <p className="text-gray-600">Automobile, Marketplace</p>
            </div>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="font-bold text-lg">$8,000</h1>
            <p className="text-gray-500">Investment Value</p>
          </div>
          <div className="text-center sm:text-right mt-2 sm:mt-0">
            <h1 className="text-green-500 font-bold">+25%</h1>
            <p className="text-gray-500">Return Value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInvestment;
