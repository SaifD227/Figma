import React from "react";
import PieChart from "../../components/MyCharts/PieChart";
import CreditCardIcon from "../../../public/icons/CreditCardIcon";

const CardExpensestatistics = () => {
  const cardData = [
    {
      color: "red",
      bank: "DBL Bank",
      cardNumber: "*********5600",
      name: "William",
    },
    {
      color: "blue",
      bank: "BRC Bank",
      cardNumber: "*********4300",
      name: "Michel",
    },
    {
      color: "orange",
      bank: "ABM Bank",
      cardNumber: "*********6600",
      name: "Edward",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row mt-6 mx-4 gap-6">
      <div className="flex-grow flex flex-col h-full">
        <h1 className="text-xl text-blue-950 mb-6">Card Expense Statistics</h1>
        <div className="flex-grow h-80 flex items-center justify-center">
          <PieChart />
        </div>
      </div>

      <div className="mx-2 flex-shrink-0 flex flex-col">
        <h1 className="mb-6 text-xl text-blue-950">Card List</h1>
        <div className="flex-grow space-y-5 md:space-y-8">
          {cardData.map((card) => (
            <div
              key={card.cardNumber}  // Using card number as the unique key
              className="flex flex-col md:flex-row items-center gap-4 p-5 bg-white rounded-lg shadow h-auto"
            >
              <div className={`bg-${card.color}-500 p-2 rounded-full`}>
                <CreditCardIcon className="text-white w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h1 className="font-semibold">Card Type</h1>
                <p className="text-gray-500">Secondary</p>
              </div>
              <div className="flex-grow">
                <h1 className="font-semibold">Bank</h1>
                <p className="text-gray-500">{card.bank}</p>
              </div>
              <div className="flex-grow">
                <h1 className="font-semibold">Card Number</h1>
                <p className="text-gray-500">{card.cardNumber}</p>
              </div>
              <div className="flex-grow">
                <h1 className="font-semibold">Name on Card</h1>
                <p className="text-gray-500">{card.name}</p>
              </div>
              <div>
                <p className="text-blue-700 cursor-pointer">View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardExpensestatistics;
