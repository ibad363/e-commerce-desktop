import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins font-medium bg-[#FBEBB5]">
      
      <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center md:items-start w-full md:max-w-[440px] md:ml-[105px] pt-10 md:pt-0">
          <h1 className="text-5xl lg:text-[64px] tracking-wide text-center md:text-start">Rocket single seater</h1>
          <Link href={"/shop/f4e99e0a-0ec1-475b-a69f-6c3aa17b01ad"}><button className="mt-[35px] text-2xl hover:border-b hover:border-black w-[121px]">Shop Now</button></Link>
        </div>

        <div className="max-w-[600px] md:h-[580px] flex items-center">
          <Image src={"/assets/homepage/hero/Rocket single seater 1.webp"} alt="Sofa Image" width={600} height={440}></Image>
        </div>
      </div>
    </div>
  )
}

export default Hero