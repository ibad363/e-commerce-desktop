import Image from "next/image"
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import BgImage from "../components/BgImage";
import DeliveryInfo from "../components/DeliveryInfo";

const Shop = () => {

    const productDetail = [
        {imagePath: "/assets/products/1.webp" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/2.webp" , name: "Granite dining table with dining chair", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/3.webp" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/4.webp" , name: "Plain console with teak mirror", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/5.webp" , name: "Grain coffee table", price: "Rs. 15,000.00"},
        {imagePath: "/assets/products/6.webp" , name: "Kent coffee table", price: "Rs. 225,000.00"},
        {imagePath: "/assets/products/7.webp" , name: "Round coffee table_color 2", price: "Rs. 251,000.00"},
        {imagePath: "/assets/products/8.webp" , name: "Reclaimed teak coffee table", price: "Rs. 25,200.00"},
        {imagePath: "/assets/products/9.webp" , name: "Plain console_", price: "Rs. 258,200.00"},
        {imagePath: "/assets/products/10.webp" , name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00"},
        {imagePath: "/assets/products/11.webp" , name: "SJP_0825", price: "Rs. 200,000.00"},
        {imagePath: "/assets/products/122.webp" , name: "Bella chair and table", price: "Rs. 100,000.00"},
        {imagePath: "/assets/products/13.webp" , name: "Granite square side table", price: "Rs. 100,000.00"},
        {imagePath: "/assets/products/14.webp" , name: "Asgaard sofa", price: "Rs. 250,000.00"},
        {imagePath: "/assets/products/15.webp" , name: "Maya sofa three seater", price: "Rs. 115,000.00"},
        {imagePath: "/assets/products/16.webp" , name: "Outdoor sofa set", price: "Rs. 244,000.00"},
    ]

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Background Image */}
        <BgImage pageName="Shop"/>

        {/* Filter Tab */}
        <div className="mt-[47px]">
            
        </div>

        {/* Products */}
        <div className="mt-[17px] max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
            {productDetail.map((item, i) => {
                return (<>
                <Link href="/productdetail"><ProductCard key={i} name={item.name} price={item.price} imagePath={item.imagePath} /></Link>
                </>)
            })}
        </div>

        {/* Page Number Section */}
        <div className="flex flex-wrap gap-[38px] justify-center mt-[117px]">
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">1</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">2</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">3</button>
            <button className="bg-[#FFF9E5] hover:bg-[#FBEBB5] text-xl px-7 py-[15px] rounded-[10px] duration-300 transition-colors">Next</button>
        </div>

    {/* Delivery Info*/}
    <DeliveryInfo/>
    </div>
  )
}

export default Shop