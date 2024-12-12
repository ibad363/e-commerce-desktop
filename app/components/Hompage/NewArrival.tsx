import Image from "next/image"

const NewArrival = () => {
  return (
    <div className="mt-[36px] max-w-[1440px] mx-auto bg-[#FFF9E5] flex flex-col md:flex-row gap-6 p-4 font-Poppins">
        {/* Image */}
        <div className="max-w-[903px] w-full">
            <Image src={"/assets/homepage/new-arrival/1.webp"} alt="Sofa Image" width={500} height={500} className="object-contain w-full h-full"></Image>
        </div>

        {/* Description */}
        <div className="flex flex-col items-center justify-center">
            <h5 className="text-2xl font-medium">New Arrivals</h5>
            <h2 className="text-5xl font-bold text-center">Asgaard sofa</h2>
            <button className="border-black border text-xl px-10 xl:px-[74px] py-[17px] mt-8 hover:text-white hover:border-none hover:bg-black">Order Now</button>
        </div>
    </div>
  )
}

export default NewArrival