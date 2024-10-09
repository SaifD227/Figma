
import React from "react";

const TrendingStock = () => {
  const stocks = [
    { name: "Apple", price: Math.floor(Math.random() * 100 + 1), returnValue: Math.floor(Math.random() * 10) },
    { name: "Google", price: Math.floor(Math.random() * 100 + 1), returnValue: Math.floor(Math.random() * 10) },
    { name: "Amazon", price: Math.floor(Math.random() * 100 + 1), returnValue: Math.floor(Math.random() * 10) },
    { name: "Microsoft", price: Math.floor(Math.random() * 100 + 1), returnValue: Math.floor(Math.random() * 10) },
    { name: "Tesla", price: Math.floor(Math.random() * 100 + 1), returnValue: Math.floor(Math.random() * 10) },
  ];

  return (
    <div className="">
      <h2 className="text-xl mb-6 text-blue-950">Trending Stocks</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 text-left text-gray-600 font-medium">Sl No</th>
              <th className="py-3 text-left text-gray-600 font-medium">Name</th>
              <th className="py-3 text-left text-gray-600 font-medium">Price</th>
              <th className="py-3 text-left text-gray-600 font-medium">Return</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock.name} className="hover:bg-blue-100 transition duration-150 ease-in-out">
                <td className="py-3 text-center border-b">{index + 1}</td>
                <td className="py-3 text-center border-b">{stock.name}</td>
                <td className="py-3 text-center border-b">$ {stock.price}</td>
                <td className="py-3 text-center border-b text-green-500 font-semibold">+{stock.returnValue}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingStock;
