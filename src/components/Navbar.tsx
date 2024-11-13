"use client";
import React, { useState } from "react";
import { IoSearchOutline, IoSettingsOutline, IoMenu } from "react-icons/io5";
import { LuBellDot, LuDollarSign } from "react-icons/lu";
import { GiMoon } from "react-icons/gi";
import Image from "next/image";
import image from "../../public/assets/images (3).jpeg";
import ThemeToggle from "./ThemeToogle";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegUserCircle,FaRegCommentDots  } from "react-icons/fa";
import { FaSackDollar, FaRegUser, FaUserLarge } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { MdOutlineVerifiedUser } from "react-icons/md";

interface NavbarProps {
  toggleSidebar?: () => void;
  setDashboardColor?: (color: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  toggleSidebar,
  setDashboardColor,
}) => {
  const [isSettingsActive, setIsSettingsActive] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);

  const handleSettingsClick = () => {
    const newActiveState = isSettingsActive;
    setIsSettingsActive(newActiveState);
    if (setDashboardColor) {
      setDashboardColor(newActiveState);
    }
  };

  const toggleUserDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen((prev) => !prev);
  };
// 
  return (
    <div className="bg-white dark:bg-medium shadow-md py-8 fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center md:left-60 md:w-[calc(100%-14rem)]">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center">
          <button
            className="md:hidden "
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <IoMenu className="text-gray-500 text-2xl ml-4" />
          </button>
          <p className="text-2xl text-blue-950 font-semibold ml-4">Overview</p>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button
            className="bg-gray-100 p-2 rounded-full"
            onClick={handleSettingsClick}
            aria-pressed={isSettingsActive}
            aria-label="Settings"
          >
            {isSettingsActive ? (
              <GiMoon className="text-red-600 text-2xl" />
            ) : (
              <IoSettingsOutline className="text-gray-500 text-2xl" />
            )}
          </button>

          <button
            className="bg-gray-100 p-2 rounded-full relative"
            aria-label="Notifications"
            onClick={toggleNotificationDropdown}
          >
            <LuBellDot className="text-red-600 text-2xl" />
          </button>

          <Image
            src={image}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            onClick={toggleUserDropdown}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-12 items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div className="input w-full md:w-auto">
          <div className="flex items-center text-gray-500 bg-gray-100 rounded-full px-6 py-2">
            <IoSearchOutline className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for something"
              className="ml-2 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button
            className="bg-gray-100 p-2 rounded-full"
            onClick={handleSettingsClick}
            aria-pressed={isSettingsActive}
            aria-label="Settings"
          >
            <ThemeToggle />
          </button>
          <button
            className="bg-gray-100 p-2 rounded-full relative"
            aria-label="Notifications"
            onClick={toggleNotificationDropdown}
          >
            <LuBellDot className="text-red-600 text-2xl" />
          </button>

          <Image
            src={image}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover cursor-pointer"
            onClick={toggleUserDropdown}
          />
        </div>
      </div>

      {/* User Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-20 top-24 bg-white shadow-gray-200  shadow-2xl rounded-md w-72 z-50 p-4 h-72">
          <h1 className="text-xl text-blue-950 mb-2">User Profile</h1>
          <div className="flex items-center mb-4">
            <Image
              src={image}
              alt="avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-lg mr-2 cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out"
              onClick={toggleUserDropdown}
            />

            <div>
              <h2 className="text-lg text-blue-950">Saif Ali</h2>
              <p className="text-blue-400">BDM</p>
              <p className="text-blue-400 flex items-center">
                <HiOutlineMail className="mr-1" />
                saifaalii237@gmail.com
              </p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex items-center mb-4 gap-2">
            <div className="text-gray-500 bg-slate-200 text-2xl p-3 rounded-lg">
              <FaRegUserCircle />
            </div>
            <div>
              <h2 className="text-lg text-blue-950">My Profile</h2>
              <p className="text-blue-400">Account Settings</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="border border-red-300 text-red-600 py-2 px-20 rounded-full hover:bg-red-100 transition">
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Notifications Dropdown Menu */}
      {isNotificationDropdownOpen && (
  

<div className="fixed right-20 top-24 bg-white shadow-lg rounded-md w-72 h-96 z-50 flex flex-col">
  <h1 className="text-xl text-blue-950 mb-2 p-4">All Notifications</h1>
  <p className="text-gray-600 px-4">You have 3 unread messages</p>

  <div className="flex-grow overflow-y-scroll px-4 space-y-4 mt-2">
    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-blue-100 p-2 rounded-lg">
        <FaSackDollar className="text-blue-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">Transaction Successful</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 17, 2024 11:48 AM
        </p>
      </div>
    </div>

    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-green-100 p-2 rounded-lg">
        <FaRegUser className="text-green-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">User Profile Updated</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 18, 2024 11:48 AM
        </p>
      </div>
    </div>

    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-yellow-100 p-2 rounded-lg">
        <LuDollarSign className="text-yellow-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">Payment Received</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 19, 2024 11:48 AM
        </p>
      </div>
    </div>

    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-blue-100 p-2 rounded-lg">
        <FaRegCommentDots className="text-blue-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">Transaction Successful</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 20, 2024 11:48 AM
        </p>
      </div>
    </div>

    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-blue-100 p-2 rounded-lg">
        <MdOutlineVerifiedUser className="text-blue-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">Transaction Successful</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 21, 2024 11:48 AM
        </p>
      </div>
    </div>

    <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition">
      <div className="bg-blue-100 p-2 rounded-lg">
        <FaUserLarge className="text-blue-600" />
      </div>
      <div className="ml-3">
        <h1 className="text-lg">Transaction Successful</h1>
        <p className="text-gray-500 flex items-center">
          <GoClock className="mr-1" /> Oct 22, 2024 11:48 AM
        </p>
      </div>
    </div>
  </div>

  <div className="p-4">
    <p className="text-blue-500 cursor-pointer text-center">
      View All
    </p>
  </div>
</div>




      )}
    </div>
  );
};

export default Navbar;
