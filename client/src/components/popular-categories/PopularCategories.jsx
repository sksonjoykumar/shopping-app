import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { categories } from "../../database/database";

function PopularCategories() {
  return (
    <div className="mt-10">
      <div className="heading flex justify-between border-b pb-2">
        <h1 className=" text-xl md:text-3xl font-bold text-gray-800">
          Popular categories
        </h1>
        <div className="flex items-center hover:text-[#0EADB8] font-semibold transition-all duration-200">
          <Link to={"shop"} className="text-md ">
            View All Categories
          </Link>
          <IoIosArrowRoundForward size={30} />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-10">
        {categories.map((item) => (
          <Link to={"/shop"} key={item?._id} className="relative text-center">
            <img
              src={item?.image}
              alt=""
              className="rounded-md cursor-pointer transition-transform duration-300 group hover:scale-105"
            />
            <span className="text-md font-semibold absolute bottom-5 left-10">
              {item?.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
