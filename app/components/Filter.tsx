import { CardData } from "../utils/types";
import React, { useState } from "react"; // Importing React
import { BiFilterAlt } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";

interface FilterProps {
  onCategoryChange: (category: string) => void;
  onItemsPerPageChange: (items: number) => void;
  onSortChange: (sortBy: string) => void;
  FilteredData: CardData[];
}

export default function Filter({
  onCategoryChange,
  onItemsPerPageChange,
  onSortChange,
  FilteredData,
}: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [sortBy, setSortBy] = useState("default");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const items = parseInt(e.target.value);
    setItemsPerPage(items);
    onItemsPerPageChange(items);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setSortBy(sortValue);
    onSortChange(sortValue);
  };

  const uniqueCategories = [
    "All Product",
    ...Array.from(new Set(FilteredData.map((product) => product.category))),
  ];

  return (
    <div className="bg-[#FAF4F4] flex justify-center items-center w-full">
      <div className="md:h-[90px] h-[50px] gap-24 flex max-w-7xl justify-between items-center md:px-20 px-8 mt-6 md:mt-10">
        <div className="flex justify-center items-center gap-2 md:gap-4 text-[16px]">
          <BiFilterAlt />
          <p className="text-[10px] md:text-[16px]">Filter</p>
          <BsGridFill />
          <BsViewList />
          <p>|</p>
          <p className="text-[10px] md:text-[16px]">
            Showing 1–{itemsPerPage} of 32 results
          </p>
        </div>

        <div className="hidden md:flex justify-center items-center gap-2 md:gap-4 text-[10px] md:text-[16px] font-medium">
          <p>Show</p>
          <select
            className="text-[#9F9F9F] bg-white px-4 py-3"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {[8, 16, 32].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <p>Sort By</p>
          <select
            className="text-[#9F9F9F] bg-white px-10 py-2 text-left w-max"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="default">Default</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
          </select>

          <p>Category</p>
          <select
            className="text-[#9F9F9F] bg-white px-4 py-3"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            {uniqueCategories.map((product) => {
              if (product === "All Product") {
                return<option value={""}>All Products</option>;
              }else{
              return<option value={product}>{product}</option>;
            }
            })}
            {/* <option value="">All</option>
            <option value="furniture">Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="appliances">Appliances</option> */}
            {/* Add more categories as needed */}
          </select>
        </div>
      </div>
    </div>
  );
}
