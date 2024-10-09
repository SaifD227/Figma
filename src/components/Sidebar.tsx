"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import svg1 from "../../public/assets/bankdash.svg";
import LoanIcon from "../../public/icons/LoanIcon";
import HomeIcon from "../../public/icons/HomeIcon";
import UserIcon from "../../public/icons/UserIcon";
import CreditCardIcon from "../../public/icons/CreditCardIcon";
import SettingsIcon from "../../public/icons/SettingsIcon";
import InvestIcon from "../../public/icons/InvestIcon";
import TransferIcon from "../../public/icons/TransferIcon";
import { BsLightbulbOffFill } from "react-icons/bs";

interface SidebarProps {
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      style={{ zIndex: 99 }}
      className={`bg-white fixed text-lg h-screen w-60 shadow-lg flex flex-col transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center mx-3 gap-4 mb-8 mt-10">
        <Image
          src={svg1}
          alt="BankDash Logo"
          width={30}
          height={30}
          className="ml-6"
        />
        <h1 className="text-2xl font-bold text-blue-950">BankDash.</h1>
      </div>
      <ul className="overflow-y-auto flex-grow space-y-5">
        <li>
          <Link
            href="/"
            className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left"
          >
            <HomeIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
            <p className="ml-3 group-hover:text-blue-600">Dashboard</p>
          </Link>
        </li>
        <li>
          <Link
            href="/Transaction"
            className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left"
          >
            <TransferIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
            <p className="ml-2 group-hover:text-blue-600">Transactions</p>
          </Link>
        </li>

        <li>
          <Link href="/Accounts">
            <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
              <UserIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
              <p className="ml-2 group-hover:text-blue-600">Accounts</p>
            </button>
          </Link>
        </li>
        <li>
          <Link href="/Investment">
            <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
              <InvestIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
              <p className="ml-2 group-hover:text-blue-600">Investments</p>
            </button>
          </Link>
        </li>

        <li>
          <Link href="/CreditCards">
            <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
              <CreditCardIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
              <p className="ml-2 group-hover:text-blue-600">Credit Cards</p>
            </button>
          </Link>
        </li>
        <li>
          <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
            <LoanIcon className="w-6 h-6 ml-6 group-hover:text-blue-600" />
            <p className="ml-2 group-hover:text-blue-600">Loans</p>
          </button>
        </li>
        <li>
          <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
            <SettingsIcon className="w-5 h-5 ml-6 group-hover:text-blue-600" />
            <p className="ml-2 group-hover:text-blue-600">Settings</p>
          </button>
        </li>
        <li>
          <button className="flex gap-4 border-l-8 border-transparent hover:border-blue-600 p-2 items-center text-gray-600 cursor-pointer rounded group w-full text-left">
            <BsLightbulbOffFill className="w-5 h-5 ml-6 group-hover:text-blue-600" />
            <p className="ml-2 group-hover:text-blue-600">My Privilege</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
