import { CardData } from "@/app/utils/types";
import ProductCard from "../ProductCard"
import Link from "next/link";

const  TopPicks = ({products}: {products:CardData[]}) => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins font-medium">
        {/* Tables */}
        <div className="bg-[#FAF4F4] py-[51px] flex flex-col md:flex-row items-center justify-center gap-[30px] p-4">
            {/* 1st Table */}
            <div className="max-w-[550px] h-[320px] xs:h-[375px] sm:h-[400px] md:h-[500px] w-full flex items-end justify-start md:pl-[105px] md:pb-[50px] p-4 relative">
                <img src="/assets/homepage/top-picks/1.png" alt="Table" className="  absolute right-4 top-2"/>
                <div className="relative">
                    <h4 className="text-4xl">Side table</h4>
                    <Link href={"/shop/2c91c390-4ec6-4c0d-a1d5-083f834cd0c9"}><button className="text-2xl font-medium hover:border-b hover:border-black w-[124px] mt-4">View More</button></Link>
                </div>
            </div>
            {/* 2nd Table */}
            <div className="max-w-[550px] h-[320px] xs:h-[375px] sm:h-[400px] md:h-[500px] w-full flex items-end justify-start md:pl-[105px] md:pb-[50px] p-4 relative">
                <img src="/assets/homepage/top-picks/2.png" alt="Table" className="  absolute right-4 top-2"/>
                <div className="relative">
                    <h4 className="text-4xl">Side table</h4>
                    <Link href={"/shop/8bebc7ab-9cfa-4d83-9629-e75b1bf343c8"}><button className="text-2xl font-medium hover:border-b hover:border-black w-[124px] mt-4">View More</button></Link>
                </div>
            </div>


        </div>

        {products && (
            <>
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
                    {products?.map((product: any) => (
                        <ProductCard
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            imagePath={product.imageUrl}
                            link={product._id}
                            stockCount={product.stockLevel}
                        />))}
                </div>

                {/* View More Button*/}
                <div className="flex justify-center mt-[69px]">
                    <Link href={"/shop"} className="w-[84px] hover:border-b border-black">View More</Link>
                </div>
            </>
        )}
    </div>
  )
}

export default TopPicks