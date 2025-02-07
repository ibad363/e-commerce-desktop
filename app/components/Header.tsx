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
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";
import SignInButtonComponent from "./auth/loginButton";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const {isSignedIn } = useUser();

    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);
    };

  return (
    <header className="w-full mx-auto bg-white sticky top-0 font-Poppins border-b-[1px] border-black z-20 shadow-xl">

      <div className="max-w-[1240px] mx-auto h-[80px] flex items-center justify-between p-3">
        {/* Logo */}
        <div className="items-center hidden sm:flex">
          <Link href={"/"}><Image src="/assets/main-logo.svg" alt="Logo" width={80} height={80}></Image></Link>
          <Link href={"/"}><h1 className="text-xl font-extrabold">Furniro</h1></Link>
        </div>

        {/* Navbar */}
        <nav className="font-medium flex flex-1 justify-center">
        <ul className="hidden md:flex gap-10">
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
        <div className="flex items-center gap-4 sm:gap-8">
          <SearchBar/>
          {/* <Link href={"/"}><Heart className="hover:bg-[#f0d786] p-[6px] rounded" size={37}/></Link> */}
          <button onClick={()=> setIsCartOpen(true)}><ShoppingCart className="hover:bg-[#f0d786] p-[6px] rounded" size={37}/></button>
          <Menu className="md:hidden cursor-pointer" onClick={()=> setIsNavbarOpen(true)} size={25}/>
          {!isSignedIn ? (
            <SignInButtonComponent  />
          ) : (
            <div className="flex justify-center items-center gap-2">
              <UserButton />
            </div>
          )}
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
        <SheetContent className="w-[300px] sm:w-[540px] bg-white max-h-screen flex flex-col">
          <SheetHeader>
            <SheetTitle className='text-2xl font-semibold'>Shopping Cart</SheetTitle>
              <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>
          </SheetHeader>

              {/* Cart Items */}
              <div className="flex flex-col flex-grow overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item._id} className='flex flex-col sm:flex-row sm:gap-4 items-center justify-start mt-[12px]'>
                    {/* Image with delete button */}
                    <div className='max-w-[100px] w-full relative'>
                      <Image
                        src={urlFor(item.image).url()}
                        width={120}
                        height={95}
                        alt={item.name}
                        className='w-full h-full object-contain bg-[#fbebb5] flex p-1 justify-center items-center rounded'
                      />
                        <button onClick={() => removeFromCart(item._id)} className="-top-1 -right-2 absolute">
                          <img src="/assets/product-detail/discard.svg" alt="Remove item" />
                        </button>
                    </div>

                    {/* Details */}
                    <div className='flex flex-col gap-1'>
                      {/* Product Title */}
                      <p>{item.name}</p>
                      {/* Quantity & Price */}
                      <div>
                        {item.quantity} X <span className='ml-[2px] text-[#B88E2F]'>${item.price}</span>
                      </div>
                    {/* Plus, Minus Button */}
                    <div>
                      <Button
                        variant="ghost"
                        className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black cursor-pointer px-3"
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >+</Button>
                      <Button variant="ghost" className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black cursor-pointer px-3"
                        onClick={() => updateQuantity(item._id, Math.max(0, item.quantity - 1)
                      )}>-</Button>
                    </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary & Button */}
              <div>
                {/* Cart Summary */}
                <div className='flex justify-between mt-2'>
                  <p>Subtotal</p>
                  <p className='text-[#B88E2F] font-semibold'>Rs. {(calculateSubtotal()).toFixed(2)}</p>
                </div>
                <div className='h-[1px] bg-[#D9D9D9] mt-4'></div>

                {/* Buttons */}
                <div className='mt-[26px] flex justify-between gap-3'>
                  <button className='px-4 sm:px-[37px] py-3 border-black border rounded-[50px]'><Link href={"/cart"} className="hover:underline">View Cart</Link></button>
                  <button className='px-4 sm:px-[37px] py-3 border-black border rounded-[50px]'><Link href={"/checkout"} className="hover:underline">Checkout</Link></button>
                </div>
              </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header