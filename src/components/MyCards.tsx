
import React from "react";
import CreditCardIcons from "../../public/icons/CreditCardIcons";
import PaypalIcon from "../../public/icons/PaypalIcon";
import CoinIcon from "../../public/icons/CoinIcon";
import WeeklyActivity from "./WeeklyActivity";
import EmployesTotal from "./EmployesTotal";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";

const MyCards = () => {
  return (
    <div>
      <div className="">
        <div className="h- bg-gray-100 dark:bg-medium top-24 left-0 w-full z-10 md:left-60 md:w-[calc(100%-15rem)]  absolute">
          <div className="flex flex-col md:flex-row  ">
            <div className="2Card flex mt-10 mx-5 gap-12">

              <Card1/>

              <Card2/>
            </div>

            <div className="recent-transaction mt-10  ">
              <h1 className="text-lg text-blue-950 py-4">
                Recent Transactions
              </h1>
              <div className="border-black rounded-3xl mx-8 bg-white min-w-[250px] flex-none">
                <div className="flex justify-between p-2  items-center">
                  <div className="flex items-center gap-3">
                    <CreditCardIcons className="bg-pink-100 rounded-full text-4xl p-2 flex items-center justify-center" />
                    <div>
                      <h6 className="text-md">Deposit from my Card</h6>
                      <p className="text-md text-blue-200">25 January 2021</p>
                    </div>
                  </div>
                  <div className="text-red-500">
                    <p className="text-right">- $500</p>
                  </div>
                </div>

                <div className="flex justify-between p-3 gap-20 items-center">
                  <div className="flex items-center gap-3">
                    <PaypalIcon className="bg-blue-100 rounded-full text-4xl p-2" />
                    <div>
                      <h6 className="text-md">Deposit Paypal</h6>
                      <p className="text-md text-blue-200">25 January 2021</p>
                    </div>
                  </div>
                  <div className="text-green-400">
                    <p className="text-right">+ $500</p>
                  </div>
                </div>

                <div className="flex justify-between p-3 gap-20 items-center">
                  <div className="flex items-center gap-3">
                    <CoinIcon className="bg-green-100 rounded-full text-4xl p-2" />
                    <div>
                      <h6 className="text-md">Jemi Wilson</h6>
                      <p className="text-md text-blue-200">25 January 2021</p>
                    </div>
                  </div>
                  <div className="text-green-400">
                    <p className="text-right">+ $500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WeeklyActivity />
          <EmployesTotal />
        </div>
      </div>
    </div>
  );
};

export default MyCards;
