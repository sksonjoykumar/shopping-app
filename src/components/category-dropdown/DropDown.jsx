import React, { useState } from "react";
import {
  IoTvOutline,
  IoHeadsetOutline,
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoWatchOutline,
  IoGameControllerOutline,
  IoCameraOutline,
} from "react-icons/io5"; // Importing icons
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "TV & Audio", icon: <IoTvOutline /> },
    { name: "TV Box", icon: <IoTvOutline /> },
    { name: "Power Tools", icon: <IoTvOutline /> }, // Replace with actual icons as needed
    { name: "Headphones", icon: <IoHeadsetOutline /> },
    { name: "Cell Phones", icon: <IoPhonePortraitOutline /> },
    { name: "Smart Watches", icon: <IoWatchOutline /> },
    { name: "Game & Video", icon: <IoGameControllerOutline /> },
    { name: "Cameras & Photos", icon: <IoCameraOutline /> },
    { name: "Computers & Laptop", icon: <IoLaptopOutline /> },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-[#1D2A35] text-white py-2 px-4 md:px-9 rounded-lg flex items-center border border-gray-500 shadow-sm"
      >
        Select Category
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul className="absolute -right-11  md:right-0 mt-2 w-56 bg-[#1D2A35] rounded-lg shadow-lg overflow-hidden">
          {categories.map((category, index) => (
            <Link to={"shop"} key={index}>
              <li
                key={index}
                className="flex items-center px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
