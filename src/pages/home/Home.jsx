import React, { useContext, useState } from "react";
import BannerSlider from "../../components/banner-slider/BannerSlider";
import ProductCard from "../../components/product-card/ProductCard";
import PopularCategories from "../../components/popular-categories/PopularCategories";
import Pagination from "../../components/pagination/Pagination";
import { StoreContext } from "../../global-context/GlobalContext";
import TopSearchProducts from "../../components/popular-brands/PopularBrands";
import BlogsPosts from "../../components/blogs-posts/BlogsPosts";

import AllProducts from "../../components/top-selling-products/AllProducts";

function Home() {
  const { products } = useContext(StoreContext);
  const [currentItems, setCurrentItems] = useState(products.slice(0, 20));

  // Product pagination function
  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };

  return (
    <div className=" px-6 md:px-20">
      <BannerSlider />
      <ProductCard />
      <PopularCategories />
      <AllProducts products={currentItems} heading={"Best Selling Products"} />
      <Pagination products={products} onPageChange={handlePageChange} />
      <BlogsPosts />
      <TopSearchProducts />
    </div>
  );
}

export default Home;
