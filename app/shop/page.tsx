import Image from "next/image"
import ProductCard from "../components/ProductCard";
import Link from "next/link";

const Shop = () => {

    const productDetail = [
        {imagePath: "/assets/products/1.svg" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/2.svg" , name: "Granite dining table with dining chair", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/3.svg" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/4.svg" , name: "Plain console with teak mirror", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/5.svg" , name: "Grain coffee table", price: "Rs. 15,000.00"},
        {imagePath: "/assets/products/6.svg" , name: "Kent coffee table", price: "Rs. 225,000.00"},
        {imagePath: "/assets/products/7.svg" , name: "Round coffee table_color 2", price: "Rs. 251,000.00"},
        {imagePath: "/assets/products/8.svg" , name: "Reclaimed teak coffee table", price: "Rs. 25,200.00"},
        {imagePath: "/assets/products/9.svg" , name: "Plain console_", price: "Rs. 258,200.00"},
        {imagePath: "/assets/products/10.svg" , name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00"},
        {imagePath: "/assets/products/11.svg" , name: "SJP_0825", price: "Rs. 200,000.00"},
        {imagePath: "/assets/products/12.svg" , name: "Bella chair and table", price: "Rs. 100,000.00"},
        {imagePath: "/assets/products/13.svg" , name: "Granite square side table", price: "Rs. 100,000.00"},
        {imagePath: "/assets/products/14.svg" , name: "Asgaard sofa", price: "Rs. 250,000.00"},
        {imagePath: "/assets/products/15.svg" , name: "Maya sofa three seater", price: "Rs. 115,000.00"},
        {imagePath: "/assets/products/16.svg" , name: "Outdoor sofa set", price: "Rs. 244,000.00"},
    ]

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Background Image */}
        <div className="relative mb-2 h-[330px] ">
        <Image
          src="/assets/blog/Rectangle 1.svg"
          alt="background image"
          className="object-cover"
          fill
        ></Image>
        <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
          <Image
            src="/assets/blog/Meubel House_Logos-05.svg"
            alt=""
            width={60}
            height={60}
          />
          <h1 className="text-4xl font-bold m-0 p-0">Shop</h1>
          <div className="flex items-center gap-4">
            <span>Home</span>
            <Image
              src="/assets/blog/vector.svg"
              alt=""
              width={10}
              height={10}
            />

            <span>Shop</span>
          </div>
        </div>
        </div>

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

        {/* Delivery Section*/}
        <div className="mt-[92px] max-w-[1440px] mx-auto bg-[#FAF4F4] ">
            <div className="py-[96px] max-w-[1240px] mx-auto flex">
                {/* Free Delivery */}
                <div>
                    <h4 className="text-[32px] font-medium">Free Delivery</h4>
                    <p className="text-xl text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
                </div>

                {/* 90 Days Return */}
                <div>
                    <h4 className="text-[32px] font-medium">90 Days Return</h4>
                    <p className="text-xl text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
                </div>

                {/* Secure Payment */}
                <div>
                    <h4 className="text-[32px] font-medium">Secure Payment</h4>
                    <p className="text-xl text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop