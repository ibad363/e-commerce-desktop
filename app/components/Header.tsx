"use client"
import { Search, Menu, ShoppingCart, Heart,UserCheck } from "lucide-react";
import { useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const Header = () => {

  const sheetTrigger = useRef<HTMLButtonElement>(null);
  const handleMenuClick = () => {
    if (sheetTrigger.current) {
      sheetTrigger.current.click();
    }
  };

  return (
    <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">

      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3">
        {/* Navbar */}
        <nav className="font-medium flex flex-1 justify-center">
        <ul className="hidden sm:flex gap-10">
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/shop">Shop</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/blog">Blog</Link>
            
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <Link href={"/account"}><UserCheck /></Link>
          <Search />
          <Heart />
          <button onClick={handleMenuClick}><ShoppingCart /></button>
          <Menu className="sm:hidden cursor-pointer" onClick={handleMenuClick}/>
        </div>

      </div>

      {/* Mobile Header */}
      <div className="hidden">
        <Sheet>
          <SheetTrigger ref={sheetTrigger}></SheetTrigger>
          <SheetContent className="bg-white w-[15rem]" side={"left"}>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-10">
                  <li>
                    <Link href="/"  className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Home</Link>
                  </li>
                  <li>
                    <Link href="/shop" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Shop</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Blog</Link>

                  </li>
                  <li>
                    <Link href="/contact" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Cart */}
        <Sheet>
          <SheetTrigger ref={sheetTrigger}></SheetTrigger>
          <SheetContent className="w-[300px] sm:w-[540px] bg-white h-[746px]">
            <SheetHeader>
              <SheetTitle className='text-2xl font-semibold'>Shopping Cart</SheetTitle>
              <SheetDescription>
                <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>

                <div className='flex gap-4 items-center mt-[42px]'>
                  <div className='w-[120px] h-[100px]'>
                    <Image src={"/assets/products/14.webp"} width={121} height={114} alt='Product Image' className='w-full bg-[#FFF9E5] flex p-3 justify-center items-center rounded' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <p>Asgaard sofa</p>
                    <div>
                      1 X <span className='ml-[2px] text-[#B88E2F]'>Rs. 250,000.00</span>
                    </div>
                  </div>
                  <div><img src="/assets/product-detail/discard.svg" alt="" /></div>
                </div>

                <div className='flex justify-between mt-16'>
                  <p>Subtotal</p>
                  <p className='text-[#B88E2F] font-semibold'>Rs. 250,000.00</p>
                </div>

                <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>

                <div className='mt-[26px] flex gap-3'>
                  <button className='px-[37px] py-3 border-black border rounded-[50px]'>View Cart</button>
                  <button className='px-[37px] py-3 border-black border rounded-[50px]'>Checkout</button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>

    </header>
  )
}

export default Header