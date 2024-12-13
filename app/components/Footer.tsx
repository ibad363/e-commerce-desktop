import { Input } from "@/components/ui/input"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto text-black bg-white px-4 font-Poppins font-medium">
      <div className="max-w-[1240px] mx-auto">
        {/* Decription */}
        <div className="mt-[98px] flex flex-col sm:flex-row flex-wrap justify-center gap-8 lg:gap-[136px] px-4 sm:px-0">
          {/* address */}
          <div className="text-[#9F9F9F] font-normal max-w-[285px] flex flex-col justify-center">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links */}
          <div className="max-w-[68px] flex flex-col gap-[26px]">
            <p className="text-[#9F9F9F] mb-[9px]">Links</p>
            <Link href={"/"} className="hover:underline cursor-pointer">Home</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Shop</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">About</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Contact</Link>
          </div>

          {/* Help */}
          <div className="max-w-[140px] flex flex-col gap-[26px]">
            <p className="text-[#9F9F9F] mb-[9px]">Help</p>
            <Link href={"/ "} className="hover:underline cursor-pointe">Payment Options</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Returns</Link>
            <Link href={"/"} className="hover:underline cursor-pointer">Privacy Policies</Link>
          </div>

          {/* NewsLetter */}
          <div className="max-w-[300px]">
            <p className="text-[#9F9F9F] ">Links</p>
            <div className="flex flex-wrap xl:flex-nowrap gap-[11px] mt-9">
              <Input type="text" placeholder="Enter Your Email Address" className="placeholder:text-[#9F9F9F] py-6"/>
              <button className="hover:border-b hover:border-black">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="mt-[48px] w-full h-[1px] bg-[#D9D9D9]"></div>

        {/* Copyright */}
        <div className="py-[35px]">
          <p className="font-normal">2022 Meubel House. All rights reverved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer