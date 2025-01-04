"use client"
import { Search, Menu, ShoppingCart, Heart,UserCheck } from "lucide-react";
import { useRef, useState } from "react";
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
import { useCart } from "../context/CartContext"; // Cart context import karen
import { urlFor } from "@/sanity/lib/image";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

    // Cart context se functions aur data get karen
    const { cartItems, removeFromCart } = useCart();

    // Cart ka total calculate karne ke liye
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
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
          <button onClick={()=> setIsCartOpen(true)}><ShoppingCart /></button>
          <Menu className="sm:hidden cursor-pointer" onClick={()=> setIsNavbarOpen(true)}/>
        </div>

      </div>

      {/* Mobile Header */}
      <Sheet open={isNavbarOpen} onOpenChange={setIsNavbarOpen}>
        <SheetContent className="bg-white w-[15rem]" side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col gap-10">
                <li>
                  <Link href="/" className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">Home</Link>
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
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-[300px] sm:w-[540px] bg-white h-[746px]">
          <SheetHeader>
            <SheetTitle className='text-2xl font-semibold'>Shopping Cart</SheetTitle>
            <SheetDescription>
              <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>

              {cartItems.map((item) => (
                <div key={item._id} className='flex gap-4 items-center mt-[42px]'>
                  <div className='w-[120px] h-[100px]'>
                    <Image
                      src={urlFor(item.images[0]).url()}
                      width={121}
                      height={114}
                      alt={item.productTitle}
                      className='w-full bg-[#FFF9E5] flex p-3 justify-center items-center rounded'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <p>{item.productTitle}</p>
                    <div>
                      {item.quantity} X <span className='ml-[2px] text-[#B88E2F]'>Rs. {item.price}.00</span>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item._id)}>
                    <img src="/assets/product-detail/discard.svg" alt="Remove item" />
                  </button>
                </div>
              ))}

              {/* Cart Summary */}
              <div className='flex justify-between mt-16'>
                <p>Subtotal</p>
                <p className='text-[#B88E2F] font-semibold'>Rs. {calculateSubtotal()}.00</p>
              </div>


              <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>

              <div className='mt-[26px] flex gap-3'>
                <button className='px-[37px] py-3 border-black border rounded-[50px]'><Link href={"/cart"}>View Cart</Link></button>
                <button className='px-[37px] py-3 border-black border rounded-[50px]'><Link href={"/checkout"}>Checkout</Link></button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header