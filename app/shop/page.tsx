import ProductCard from "../components/ProductCard";
import BgImage from "../components/BgImage";
import DeliveryInfo from "../components/DeliveryInfo";
import { getAllProducts } from "@/sanity/queries/fetchProduct";
import Filter from "../components/Filter";

const Shop = async () => {

    const products:any = await getAllProducts()

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Background Image */}
        <BgImage pageName="Shop"/>

        {/* Filter Tab */}
        <div className="mt-[47px]">
            <Filter/>
        </div>

        {/* Products */}
        <div className="mt-[17px] max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
            {products.length > 0 ? (products.map((product :any)=>(
                <ProductCard 
                key={product._id}
                name={product.name}
                price={product.price}
                imagePath={product.imageUrl}   
                link={product._id}
                stockCount={product.stockLevel}
                />
            ))): <h1 className="text-center text-3xl">No Product Found</h1>
            }
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