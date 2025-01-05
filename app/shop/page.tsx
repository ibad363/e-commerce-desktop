import ProductCard from "../components/ProductCard";
import BgImage from "../components/BgImage";
import DeliveryInfo from "../components/DeliveryInfo";
import { client } from "@/sanity/lib/client";

const Shop = async () => {

    const products = await client.fetch(`*[_type == "product"]{
        productTitle,
        price,
        images,
        _id
    }`,{}, {cache: "no-store"});

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Background Image */}
        <BgImage pageName="Shop"/>

        {/* Filter Tab */}
        <div className="mt-[47px]">
            
        </div>

        {/* Products */}
        <div className="mt-[17px] max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
            {products.map((product :any)=>(
                <ProductCard 
                key={product._id}
                name={product.productTitle}
                price={product.price}
                imagePath={product.images[0]}
                link={product._id}
                />
            ))}
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