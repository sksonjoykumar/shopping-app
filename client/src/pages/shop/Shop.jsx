import React, { useContext, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import Pagination from "../../components/pagination/Pagination";
import AllProducts from "../../components/top-selling-products/AllProducts";

function Shop() {
  const { products } = useContext(StoreContext);
  const [currentItems, setCurrentItems] = useState(products.slice(0, 20));

  // Product pagination function
  const handlePageChange = (newItems) => {
    setCurrentItems(newItems);
  };
  return (
    <div className="px-6 md:px-20">
      <AllProducts products={currentItems} heading={"All Products"} />
      <Pagination products={products} onPageChange={handlePageChange} />
    </div>
  );
}

export default Shop;
