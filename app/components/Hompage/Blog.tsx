import Image from "next/image"
import Link from "next/link"

const Blog = () => {
  return (
    <div className="mt-[55px] max-w-[1440px] mx-auto font-Poppins">
        {/* Heading */}
        <div>
            <h2 className="text-4xl text-center font-semibold">Our Blogs</h2>
            <p className="text-[#9F9F9F] font-medium text-center mt-4">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        <div className="mt-[65px] max-w-[1260px] mx-auto flex flex-col md:flex-row items-center gap-[31px] justify-center p-2">
            {/* 1st Blog */}
            <div className="flex flex-col items-center  max-w-[393px]">
                <Image src={"assets/homepage/blog/1.svg"} alt="Blog Image" width={400} height={400}></Image>
                <Link href={"/blog"}><p className="text-xl mt-[20px] text-center">Going all-in with millennial design</p></Link>
                <button className="text-2xl border-b border-black w-f mt-[10px]">Read More</button>
                {/* Time and Date */}
                <div className="flex gap-[19px] mt-[19px]">
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/clock.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">5 min</p>
                    </div>
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/calendar.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">12 <sup>th</sup> Oct 2022</p>
                    </div>
                </div>
            </div>

            {/* 2nd Blog */}
            <div className="flex flex-col items-center max-w-[393px]">
                <Image src={"assets/homepage/blog/2.svg"} alt="Blog Image" width={400} height={400}></Image>
                <Link href={"/blog"}><p className="text-xl mt-[20px] text-center">Going all-in with millennial design</p></Link>
                <button className="text-2xl border-b border-black w-f mt-[10px]">Read More</button>
                {/* Time and Date */}
                <div className="flex gap-[19px] mt-[19px]">
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/clock.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">5 min</p>
                    </div>
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/calendar.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">12 <sup>th</sup> Oct 2022</p>
                    </div>
                </div>
            </div>

            {/* 3rd Blog */}
            <div className="flex flex-col items-center max-w-[393px]">
                <Image src={"assets/homepage/blog/3.svg"} alt="Blog Image" width={400} height={400}></Image>
                <Link href={"/blog"}><p className="text-xl mt-[20px] text-center">Going all-in with millennial design</p></Link>
                <button className="text-2xl border-b border-black w-f mt-[10px]">Read More</button>
                {/* Time and Date */}
                <div className="flex gap-[19px] mt-[19px]">
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/clock.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">5 min</p>
                    </div>
                    <div className="flex items-center">
                        <img src="assets/homepage/blog/calendar.svg" alt="Clock Icon" />
                        <p className="font-light ml-[10px]">12 <sup>th</sup> Oct 2022</p>
                    </div>
                </div>
            </div>
        </div>

        {/* View All Post*/}
        <div className="flex justify-center mt-[75px]">
            <Link href={"/blog"}><button className="w-[104px] hover:border-b border-black">View All Post</button></Link>
        </div>
    </div>
  )
}

export default Blog