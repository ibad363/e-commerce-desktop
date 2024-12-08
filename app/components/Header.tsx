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

const Header = () => {

  const sheetTrigger = useRef<HTMLButtonElement>(null);
  const handleMenuClick = () => {
    if (sheetTrigger.current) {
      sheetTrigger.current.click();
    }
  };

  return (
    <header className="max-w-[1440px] mx-auto bg-[#FBEBB5] sticky top-0 font-Poppins border-b-[1px] border-black">

      <div className="max-w-[1240px] mx-auto h-[100px] flex items-center justify-between p-3">
        {/* Navbar */}
        <nav className="font-medium flex flex-1 justify-center">
        <ul className="hidden sm:flex gap-10">
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/">Shop</Link>
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/">About</Link>
            
            </li>
            <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
            <Link href="/">Contact</Link>
            </li>
        </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-8">
          <UserCheck />
          <Search />
          <Heart />
          <ShoppingCart/>
          <Menu className="sm:hidden cursor-pointer" onClick={handleMenuClick}/>
        </div>

      </div>

      {/* Mobile Header */}
      <div className="hidden">
        <Sheet>
          <SheetTrigger ref={sheetTrigger}></SheetTrigger>
          <SheetContent className="bg-[#FBEBB5] w-[15rem]" side={"left"}>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>
                <ul className="flex flex-col gap-10">
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    <Link href="/">Shop</Link>
                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    <Link href="/">About</Link>

                  </li>
                  <li className="cursor-pointer hover:border-b-[#000000] hover:border-b-[0.5px] transition-all duration-300">
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

      </div>

    </header>
  )
}

export default Header