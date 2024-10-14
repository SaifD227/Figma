import React from "react";
import { CiBellOff } from "react-icons/ci";
import UserIcon from "../../../public/icons/UserIcon";
import SettingsIcon from "../../../public/icons/SettingsIcon";
import Card3 from "../../components/Cards/Card3";

const LastTransaction = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mx-4 items-start">
      <div className="flex-1">
        <div className="mx-4 mb-6">
          <h1 className="text-lg text-blue-950">Last Transaction</h1>
        </div>
        <div className="bg-white rounded-lg shadow p-5 mx-4 w-full">
          <div className="space-y-5">
            {/* Transaction 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-3 rounded-full bg-green-200">
                  <CiBellOff className="text-4xl text-gray-600" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">
                    Shopify Subscription
                  </h1>
                  <p className="text-xs text-gray-500">25 Jun 2021</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className="text-md text-blue-300">Shopping</h1>
                <h1 className="text-md text-blue-300">1234 ****</h1>
                <p className="text-xs text-yellow-500">Pending</p>
                <p className="text-sm text-red-600">-$150</p>
              </div>
            </div>

            {/* Transaction 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-3 rounded-full bg-green-200">
                  <SettingsIcon className="text-4xl text-gray-600" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Mobile Service</h1>
                  <p className="text-xs text-gray-500">25 Jun 2021</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className="text-md text-blue-300">Service</h1>
                <h1 className="text-md text-blue-300">1234 ****</h1>
                <p className="text-xs text-yellow-500">Completed</p>
                <p className="text-sm text-red-600">-$340</p>
              </div>
            </div>

            {/* Transaction 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-3 rounded-full bg-green-200">
                  <UserIcon className="text-4xl text-gray-600" />
                </div>
                <div>
                  <h1 className="text-sm font-semibold">Emilly Vision</h1>
                  <p className="text-xs text-gray-500">25 Jun 2021</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <h1 className="text-md text-blue-300">Transfer</h1>
                <h1 className="text-md text-blue-300">1234 ****</h1>
                <p className="text-xs text-yellow-500">Completed</p>
                <p className="text-sm text-red-600">-$780</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-96 mx-4">
        <Card3 />
      </div>
    </div>
  );
};

export default LastTransaction;
