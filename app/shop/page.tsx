"use client"
import ProductCard from "../components/ProductCard";
import BgImage from "../components/BgImage";
import DeliveryInfo from "../components/DeliveryInfo";
import Filter from "../components/Filter";
import { useEffect, useState } from "react";
import { CardData } from "../utils/types";


const Shop = () => {
  const [data, setData] = useState<CardData[]>([]);
  const [filteredData, setFilteredData] = useState<CardData[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product");
      const products:CardData[] = await response.json();
      setData(products);
      setFilteredData(products);
    };

    fetchProducts();
  }, []);

  // Handle Category Filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(category, itemsPerPage, sortBy);
  };

  // Handle Items per page
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    filterProducts(selectedCategory, items, sortBy);
  };

  // Handle Sorting
  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
    filterProducts(selectedCategory, itemsPerPage, sortBy);
  };


  const filterProducts = (category: string, itemsPerPage: number, sortBy: string) => {
    let filtered = [...data];

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Sort the data
    if (sortBy === "price-low-to-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-to-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Limit items to user-specified number
    filtered = filtered.slice(0, itemsPerPage);

    setFilteredData(filtered);
  };

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Background Image */}
        <BgImage pageName="Shop"/>

        {/* Filter Tab */}
        <div className="mt-[47px]">
          <Filter
            onCategoryChange={handleCategoryChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            onSortChange={handleSortChange}
            FilteredData={filteredData}
          />
      </div>

        {/* Products */}
        <div className="mt-[17px] min-h-screen max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
            {filteredData && (filteredData.map((product :CardData)=>(
                <ProductCard 
                key={product._id}
                name={product.name}
                price={product.price}
                imagePath={product.imageUrl}   
                link={product._id}
                stockCount={product.stockLevel}
                />
            )))
            }
        </div>

        {/* Page Number Section
        <div className="flex flex-wrap gap-[38px] justify-center mt-[117px]">
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">1</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">2</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">3</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">Next</button>
        </div> */}

        {/* Delivery Info*/}
        <DeliveryInfo/>
    </div>
  )
}

export default Shop