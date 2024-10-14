import React from "react";
import { CiInboxIn, CiLock } from "react-icons/ci";
import { TfiApple } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";

const AddNewCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mx-4 mt-10">
      {/* Expanded Add New Card Section */}
      <div className="flex-1">
        <h1 className="text-xl text-center mb-6 text-blue-950">Add New Card</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col h-full md:h-96">
          <p className="text-gray-600 text-sm mb-4 text-center">
            The Add New Card feature allows users to easily add a new payment or
            loyalty card by entering details like card number, expiration date,
            and security code. This information is securely stored, enabling
            users to quickly access their card for future payments or
            transactions.
          </p>

          <div className="space-y-8 flex-grow">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Type
                </label>
                <input
                  type="text"
                  placeholder="Classic"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name On Card
                </label>
                <input
                  type="text"
                  placeholder="My Cards"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="****************"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="25 Jun 2025"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-all">
              Add Card
            </button>
          </div>
        </div>
      </div>

      {/* Smaller Card Setting Section */}
      <div className="w-full md:w-1/3">
        <h1 className="text-xl text-center mb-6 text-blue-950">
          Card Settings
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col h-full md:h-96">
          <div className="space-y-2 flex-grow">
            {/* Block Card */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-4 rounded-full">
                <CiInboxIn className="text-blue-500 text-3xl" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Block Card</h1>
                <p className="text-gray-500">Instantly Block Your Card</p>
              </div>
            </div>

            {/* Change Pin Code */}
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-4 rounded-full">
                <CiLock className="text-red-500 text-3xl" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Change Pin Code</h1>
                <p className="text-gray-500">Choose another Pin code</p>
              </div>
            </div>

            {/* Add to Google Pay */}
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-4 rounded-full">
                <FaGoogle className="text-yellow-500 text-3xl" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Add to Google Pay</h1>
                <p className="text-gray-500">Withdraw with any card</p>
              </div>
            </div>

            {/* Add to Apple Store */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <TfiApple className="text-gray-500 text-3xl" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Add to Apple Store</h1>
                <p className="text-gray-500">Withdraw with any card</p>
              </div>
            </div>

            {/* Add to Apple Store Again */}
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-4 rounded-full">
                <TfiApple className="text-green-500 text-3xl" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Add to Apple Store</h1>
                <p className="text-gray-500">Withdraw with any card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
