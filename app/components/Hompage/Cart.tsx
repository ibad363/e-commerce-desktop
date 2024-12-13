import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useRef,} from 'react';


const Cart = () => {

    const sheetTrigger = useRef<HTMLButtonElement>(null);
    const handleMenuClick = () => {
      if (sheetTrigger.current) {
        sheetTrigger.current.click();
      }
    };


  return (
        <div>
            <Sheet>
                <SheetTrigger ref={sheetTrigger}></SheetTrigger>
                <SheetContent className="w-[300px] sm:w-[540px] bg-white h-[746px]">
                    <SheetHeader>
                        <SheetTitle className='text-2xl font-semibold'>Shopping Cart</SheetTitle>
                        <SheetDescription>
                            <div className='h-[1px] bg-[#D9D9D9] mt-[26px]'></div>

                            <div className='flex gap-4 items-center mt-[42px]'>
                                <div className='w-[120px] h-[100px]'>
                                    <Image src={"/products/14.webp"} width={121} height={114} alt='Product Image' className='w-full bg-[#FFF9E5] flex p-3 justify-center items-center rounded' />
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
  )
}

export default Cart