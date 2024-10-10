import React from "react";
import LoanIcon from "../../public/icons/LoanIcon";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import CreditCardIcon from "../../public/icons/CreditCardIcon";
import { MdAccountBalance } from "react-icons/md";
import UserIcon from "../../public/icons/UserIcon";

const BankServiceList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bank Service List</h1>

      {/* Card 1 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
  <div className="flex items-center gap-4">
    <div className="bg-green-100 p-4 rounded-full">
      <LoanIcon className="w-12 h-12 text-red-600" /> {/* Changed color */}
    </div>
    <div>
      <h1 className="text-xl font-semibold">Business Loans</h1>
      <p className="text-blue-300">It is a long established</p>
    </div>
  </div>
  <div className="hidden lg:block">
    <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
    <p className="text-blue-300">Many Publishing</p>
  </div>
  <div className="hidden lg:block">
    <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
    <p className="text-blue-300">Many Publishing</p>
  </div>
  <div className="hidden lg:block">
    <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
    <p className="text-blue-300">Many Publishing</p>
  </div>
  <div>
    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
      View Details
    </button>
  </div>
</div>


      {/* Card 2 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <CreditCardIcon className="w-12 h-12 text-yellow-600" />{" "}
            {/* Changed color */}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Business Loans</h1>
            <p className="text-blue-300">It is a long established</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <MdAccountBalance className="w-12 h-12 text-green-600" />{" "}
            {/* Changed color */}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Business Loans</h1>
            <p className="text-blue-300">It is a long established</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <UserIcon className="w-12 h-12 text-purple-600" />{" "}
            {/* Changed color */}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Business Loans</h1>
            <p className="text-blue-300">It is a long established</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>

      {/* Card 5 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <AiOutlineSafetyCertificate className="w-12 h-12 text-orange-600" />{" "}
            {/* Changed color */}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Business Loans</h1>
            <p className="text-blue-300">It is a long established</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>

      {/* Card 6 */}
      <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <LoanIcon className="w-12 h-12 text-teal-600" />{" "}
            {/* Changed color */}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Business Loans</h1>
            <p className="text-blue-300">It is a long established</p>
          </div>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-xl font-semibold">Lorem Ipsum</h1>
          <p className="text-blue-300">Many Publishing</p>
        </div>
        <div>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankServiceList;
