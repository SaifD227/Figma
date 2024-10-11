import React, { useEffect, useState } from "react"; // Import useState
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa6";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
    else if (theme === "light") setDarkMode(false); // Add handling for light theme
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Fixed classList usage
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Fixed classList usage
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1" // Fixed typo in class name
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" // Changed dark:bg-medium to a valid Tailwind class
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      >
        <BsSunFill className="ml-auto text-yellow-400" size={18} />
      </div>
    </div>
  );
};

export default ThemeToggle;
