import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoreContext } from "../../global-context/GlobalContext";
import FadeLoader from "react-spinners/FadeLoader";
import { IoEyeOutline, IoStarOutline } from "react-icons/io5";
import AllProducts from "../top-selling-products/AllProducts";


function ProductDetails() {
  const { id } = useParams();
  const { selectedProduct, setSelectedProduct, products } =
    useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState("");
  const [color, setColor] = useState("");

  //   useNavigate
  const navigate = useNavigate();
  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((p) => p._id === id);
      if (product) {
        setSelectedProduct(product);
        setImages(product.images[0]); // Set the first image as the selected image
        setColor(product.colors[0]); // Set the first color as the selected color
      }
      setLoading(false);
    }

    if (selectedProduct) {
      setImages(selectedProduct.images[0]);
      setColor(selectedProduct.colors[0]);
    } else if (!selectedProduct) {
      setImages(null);
      setColor(null);
    }
  }, [id, products, setSelectedProduct]);

  // products slice
  const [currentItems, setCurrentItems] = useState(products.slice(0, 10));

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader
          color="#826DDC"
          cssOverride={{}}
          loading
          margin={8}
          radius={2}
          speedMultiplier={1}
        />
      </div>
    );
  }

  // No product found
  if (!selectedProduct) {
    return <div>No Product Selected</div>;
  }

  return (
    <div className="px-6 md:px-20">
      <div className="main-wrapper mt-5">
        <div className="flex flex-wrap justify-center items-center md:flex-nowrap md:justify-start md:items-start  gap-5 md:gap-10 ">
          <div className="left flex flex-row md:flex-col gap-2 md:gap-0 ">
            {selectedProduct.images?.map((img, index) => (
              <div key={index}>
                <img
                  className={`w-48 my-1 cursor-pointer rounded-md hover:scale-105 transition-all duration-200 ${images === img && "border border-gray-400"}`}
                  src={img}
                  alt="product-img"
                  onClick={() => setImages(img)}
                />
              </div>
            ))}
          </div>
          <div className="center mt-2 w-full">
            <img
              src={images}
              alt="product-img"
              className=" h-[460px] w-full object-contain cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="right w-full">
            <div className="">
              <h1 className="text-xl xl:text-3xl font-semibold text-[#1D2A35]">
                {selectedProduct?.name}
              </h1>

              <div className="mt-3 xl:flex justify-between">
                <div className="space-x-2">
                  <del className="text-[1.4rem] text-gray-600">
                    ${selectedProduct?.discountedPrice}.00
                  </del>
                  <span className="text-xl md:text-2xl font-semibold text-[#826DDC]">
                    ${selectedProduct?.regularPrice}.00
                  </span>
                </div>
                <div className="flex gap-1 items-center mt-2 md:mt-0">
                  <IoStarOutline color="grey" />
                  <IoStarOutline color="grey" />
                  <IoStarOutline color="grey" />
                  <IoStarOutline color="grey" />
                  <IoStarOutline color="grey" />
                  <span className="text-gray-800 text-md font-semibold">
                    ({selectedProduct?.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-md text-gray-800">
                Brand:{" "}
                <span className="font-semibold">{selectedProduct?.brand}</span>
              </p>
            </div>
            <div className="mt-2">
              <p className="text-md text-gray-800">
                Category:{" "}
                <span className="font-semibold">
                  {selectedProduct?.category}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <IoEyeOutline size={22} />
              <p className="text-md text-gray-800">
                {selectedProduct?.reviews} people are viewing
              </p>
            </div>
            <div className="mt-2">
              <p className="text-md text-gray-800">
                You are saving{" "}
                <span className="font-semibold text-[#29903B]">
                  $
                  {selectedProduct?.regularPrice -
                    selectedProduct?.discountedPrice}
                  .00
                </span>{" "}
                upon purchase
              </p>
            </div>
            <div className="mt-4 ">
              <p className="text-md text-gray-800 font-semibold">
                Color:{" "}
                <span className={"capitalize"} style={{ color }}>
                  {color}
                </span>
              </p>
              <div className="flex gap-1 md:gap-3 mt-3">
                {selectedProduct?.colors.map((item) => (
                  <div
                    key={item}
                    className={`${color === item ? "border border-black p-1 rounded-full" : "border-transparent"}`}
                  >
                    <div
                      className="w-10 h-10 rounded-full cursor-pointer border"
                      style={{ backgroundColor: item }}
                      onClick={() => setColor(item)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="uppercase py-3 bg-[#1D2A35] rounded-3xl text-white w-full text-md font-semibold border-none outline-none"
                onClick={() => navigate("/order")}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AllProducts products={currentItems} heading={"Similar Product"} />
      </div>
    </div>
  );
}

export default ProductDetails;
