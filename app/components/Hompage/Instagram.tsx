import Image from "next/image"

const Instagram = () => {
  return (
    <div className="mt-[54px] max-w-[1440px] h-[450px] mx-auto font-Poppins relative p-2">

        <Image src={"/assets/homepage/insta/bg.webp"} alt="background image" className="object-cover" fill></Image>

        <div className="flex flex-col justify-center items-center absolute inset-10">
            <h1 className="font-bold text-5xl sm:text-[60px] text-center">Our Instagram</h1>
            <p className="text-xl text-center mt-2">Follow our store on Instagram</p>
            <button className="mt-[18px] py-[17px] px-[20px] sm:px-[82px] text-xl bg-[#FAF4F4] rounded-[50px] hover:text-white hover:bg-black duration-300 transition-colors">Follow Us</button>
        </div>
    </div>
  )
}

export default Instagram