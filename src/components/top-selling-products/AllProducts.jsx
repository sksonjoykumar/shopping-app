import React, { useContext, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link } from "react-router-dom";

function AllProducts({ products, heading }) {
  const {
    addToCart,
    removeFromCart,
    isInCart,
    favorite,
    setFavorite,
    handleProductClick,
  } = useContext(StoreContext);

  // Add to favorite
  const addFavorite = (item) => {
    setFavorite((prevItems) => [...prevItems, item]);
  };

  // Remove from favorite
  const removeFavorite = (itemId) => {
    setFavorite((prevItems) => prevItems.filter((item) => item._id !== itemId));
  };

  // Check if item is in favorite list
  const isFavorite = (itemId) => favorite.some((item) => item._id === itemId);

  return (
    <div className="mt-10">
      <>
        <h2 className="text-3xl font-bold mb-5">{heading}</h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10">
          {products.map((item) => (
            <div
              key={item._id}
              className="border rounded-md shadow-sm hover:border hover:border-[#0eadb8] hover:rounded-md hover:cursor-pointer p-4 relative hover:item-block"
            >
              <div className="relative">
                <Link to={`/productdetails/${item._id}`}>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="rounded-md hover:scale-105 transition-all w-full"
                    onClick={() => handleProductClick(item._id)}
                  />
                </Link>

                <div className="absolute -top-2 -left-2">
                  <span className="bg-[#1D2A35] rounded-md text-[#32BDE8] text-[.75rem] px-1.5 py-1">
                    {(
                      ((item.regularPrice - item.discountedPrice) /
                        item.regularPrice) *
                      100
                    ).toFixed(0)}
                    % Save
                  </span>
                </div>
              </div>

              <Link
                to={`/productdetails/${item._id}`}
                className="mt-3"
                onClick={() => handleProductClick(item._id)}
              >
                <p className="uppercase text-gray-500 text-[.75rem]">
                  {item.overView}
                </p>
                <p className="text-md font-semibold text-gray-800 mt-1.5 leading-tight">
                  {item.name.slice(0, 60)}...
                </p>
                <div className="flex my-1.5">
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                </div>
                <div className="flex gap-2.5 my-2">
                  <del className="text-md font-semibold text-gray-500">
                    ${item.discountedPrice}
                  </del>
                  <span className="text-md font-semibold text-[#0EADC6]">
                    ${item.regularPrice}.00
                  </span>
                </div>
              </Link>

              <div className="mt-4 mb-1">
                <button
                  type="button"
                  className="w-full border rounded-3xl py-2.5 transition-all duration-200 hover:text-white text-md hover:bg-[#845DB6]"
                  onClick={() =>
                    isInCart(item._id)
                      ? removeFromCart(item._id)
                      : addToCart(item)
                  }
                >
                  {isInCart(item._id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>

              <div className="item absolute top-4 right-4 space-y-1">
                {/* Toggle favorite and change icon */}
                {isFavorite(item._id) ? (
                  <IoHeartSharp
                    size={25}
                    onClick={() => removeFavorite(item._id)}
                    color="#EF4444"
                    className="cursor-pointer"
                  />
                ) : (
                  <IoHeartOutline
                    size={25}
                    onClick={() => addFavorite(item)}
                    style={{ color: "black" }}
                    className="cursor-pointer"
                  />
                )}

                <MdOutlineRemoveRedEye size={25} />
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default AllProducts;
