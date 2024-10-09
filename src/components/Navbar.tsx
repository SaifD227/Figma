'use client'
import React, { useState } from "react";
import { IoSearchOutline, IoSettingsOutline, IoMenu } from "react-icons/io5";
import { LuBellDot } from "react-icons/lu";
import { GiMoon } from "react-icons/gi";
import Image from "next/image";
import image from "../../public/assets/avatar-CDT9_MFd.jpg";

interface NavbarProps {
  toggleSidebar?: () => void;
  setDashboardColor?: (color: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  toggleSidebar,
  setDashboardColor,
}) => {
  const [isSettingsActive, setIsSettingsActive] = useState(false);

  const handleSettingsClick = () => {
    const newActiveState = !isSettingsActive;
    setIsSettingsActive(newActiveState);
    if (setDashboardColor) {
      setDashboardColor(newActiveState);
    }
  };

  return (
    <div className="bg-white shadow-md py-8 fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center md:left-60 md:w-[calc(100%-14rem)]">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="flex items-center">
          <button
            className="md:hidden"
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
          >
            <LuBellDot className="text-red-600 text-2xl" />
          </button>
          <Image
            src={image}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
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
            {isSettingsActive ? (
              <GiMoon className="text-red-600 text-2xl" />
            ) : (
              <IoSettingsOutline className="text-gray-500 text-2xl" />
            )}
          </button>

          <button
            className="bg-gray-100 p-2 rounded-full relative"
            aria-label="Notifications"
          >
            <LuBellDot className="text-red-600 text-2xl" />
          </button>
          <Image
            src={image}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
