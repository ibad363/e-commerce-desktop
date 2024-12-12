import ProductCard from "../ProductCard"

const TopPicks = () => {
    const productDetail = [
        {imagePath: "/assets/products/1.webp" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/2.webp" , name: "Granite dining table with dining chair", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/3.webp" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/4.webp" , name: "Plain console with teak mirror", price: "Rs. 25,000.00"},
    ]
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins font-medium">
        {/* Tables */}
        <div className="bg-[#FAF4F4] py-[51px] flex flex-col md:flex-row items-center justify-center gap-[30px] p-4">
            {/* 1st Table */}
            <div className="max-w-[550px] h-[320px] xs:h-[375px] sm:h-[400px] md:h-[500px] w-full flex items-end justify-start md:pl-[105px] md:pb-[50px] p-4 relative">
                <img src="/assets/homepage/top-picks/1.png" alt="Table" className="  absolute right-4 top-2"/>
                <div className="relative">
                    <h4 className="text-4xl">Side table</h4>
                    <button className="text-2xl font-medium hover:border-b hover:border-black w-[124px] mt-4">View More</button>
                </div>
            </div>
            {/* 2nd Table */}
            <div className="max-w-[550px] h-[320px] xs:h-[375px] sm:h-[400px] md:h-[500px] w-full flex items-end justify-start md:pl-[105px] md:pb-[50px] p-4 relative">
                <img src="/assets/homepage/top-picks/2.png" alt="Table" className="  absolute right-4 top-2"/>
                <div className="relative">
                    <h4 className="text-4xl">Side table</h4>
                    <button className="text-2xl font-medium hover:border-b hover:border-black w-[124px] mt-4">View More</button>
                </div>
            </div>


        </div>

        {/* Top Picks */}
        <div className="mt-[55px] max-w-[1240px] mx-auto p-4">
            {/* description */}
            <div className="px-2">
                <h2 className="text-4xl text-center font-semibold">Top Picks For You</h2>
                <p className="text-[#9F9F9F] text-center mt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
        </div>

        {/* Products */}
        <div className="mt-[65px] max-w-[1240px] w-full mx-auto flex flex-wrap justify-center gap-[30px]">
            {productDetail.map((item, i) => {
                return( <ProductCard key={i} name={item.name} price={item.price} imagePath={item.imagePath}/>)
            })}
        </div>

        {/* View More Button*/}
        <div className="flex justify-center mt-[69px]">
            <button className="w-[84px] hover:border-b border-black">View More</button>
        </div>
    </div>
  )
}

export default TopPicks