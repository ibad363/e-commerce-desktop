"use client"
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ProductCard from '../components/ProductCard';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const ProductDetail = () => {

    const sheetTrigger = useRef<HTMLButtonElement>(null);
    const handleMenuClick = () => {
      if (sheetTrigger.current) {
        sheetTrigger.current.click();
      }
    };

    const productDetail = [
        {imagePath: "/assets/products/1.svg" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/2.svg" , name: "Granite dining table with dining chair", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/3.svg" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00"},
        {imagePath: "/assets/products/4.svg" , name: "Plain console with teak mirror", price: "Rs. 25,000.00"},
    ]

    const [active,setActive] = useState(0)

    const images = [
        "/assets/product-detail/1.svg",
        "/assets/product-detail/2.svg",
        "/assets/product-detail/3.svg",
        "/assets/product-detail/4.svg",
    ];

    return (
    <div className="max-w-[1440px] mx-auto font-Poppins">

        {/* Top Section */}
        <div className="max-w-[1240px] mx-auto py-[38px] flex">
            <p className="text-[#9F9F9F]">Home</p>
            <ChevronRight className='ml-[14px] mr-[24px]' />
            <p className="text-[#9F9F9F]">Shop</p>
            <ChevronRight className='ml-[21px] mr-[25px]' />
            <div className='w-[1px] h-[1px] bg-[#9F9F9F]'></div>
            <p className='border-l border-[#9F9F9F] pl-[34px] hover:underline cursor-pointer'>Asgaard sofa</p>
        </div>

        {/* Images & Name */}
        <div className='max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[82px] items-center lg:items-start'>

            {/* Image Section */}
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-[31px]'>
                {/* Four Image */}
                <div className='w-[150px] h-[100px] flex flex-col gap-8'>
                    {images.map((key, i) => (
                        <div
                            key={i}
                            className={`w-full bg-[#FFF9E5] flex p-3 justify-center items-center rounded ${active === i ? "border-2 border-black" : ""} `}
                            onClick={() => { setActive(i); } }>
                            <Image src={key} alt='Product Image' width={121} height={114}></Image>
                        </div>
                    ))}

                </div>

                {/* Full Image */}
                <div className='bg-[#FFF9E5] max-w-[423px] h-[500px] w-[300px] sm:w-full flex justify-center items-center'>
                    <Image src={images[active]} width={450} height={315} alt='Product Image'  />
                </div>
            </div>

            {/* Product Details */}
            <div className='flex flex-col max-w-[424px] p-4 sm:p-0'>
                <div className='flex flex-col'>

                    {/* Product Name */}
                    <h3 className={`text-[42px] tracking-wide`}>Asgaard sofa</h3>

                    {/* Price */}
                    <p className={`text-2xl font-medium`}>Rs. 250,000.00</p>

                    {/* Rating & Reviews */}
                    <div className='flex items-center flex-wrap mt-[15px]'>
                        <div className='text-[#FFAD33] text-2xl mr-4'>★★★★<span className='text-black opacity-25'>★</span></div>
                        <p className='opacity-50 text-[14px] text-[#9F9F9F] font-normal mr-4 border-l-[#9F9F9F] border-l pl-4'>5 Customer Review</p>

                    </div>
                </div>

                {/* Product Description */}
                <p className='text-[13px] mt-[18px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                {/* Size */}
                <div className='flex flex-col gap-[12px] mt-[22px]'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Size</p>
                    <div className='flex items-center gap-4 flex-wrap'>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>L</div>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>XL</div>
                        <div className='py-1 w-8 flex justify-center bg-[#FAF4F4] rounded font-medium hover:bg-[#FBEBB5] cursor-pointer'>XS</div>
                    </div>
                </div>

                {/* Colors */}
                <div className='flex flex-col gap-3 mt-[18px]'>
                    <p className='text-[14px] text-[#9F9F9F] tracking-wide'>Color</p>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#816DFA] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-black w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                        <div className='bg-[#CDBA7B] w-[30px] h-[30px] rounded-full hover:border-2 hover:border-black'></div>
                    </div>
                </div>

                {/* add to cart */}
                <div className='flex flex-wrap gap-4 mt-[32px]'>
                    <div className='w-[123px] rounded-[10px] border border-[#00000080] flex justify-between overflow-hidden'>
                        <button className='w-[40px] flex items-center justify-center hover:text-black hover:bg-[#FBEBB5] py-5'>-</button>
                        <p className='text-xl font-medium w-[80px] flex items-center justify-center '>2</p>
                        <button className='w-[40px] flex items-center justify-center hover:text-black hover:bg-[#FBEBB5] py-5'>+</button>
                    </div>

                    <div className='flex justify-center'>
                        <button className='border-[1px] border-black px-12 py-[17px] rounded-[10px] flex items-center justify-center hover:text-black hover:bg-[#FBEBB5] hover:border-0' onClick={handleMenuClick}>Add To Cart</button>
                    </div>
                </div>

                {/* Line */}
                <div className='h-[1px] bg-[#D9D9D9] mt-[60px]'></div>

                {/* SKU */}
                <div className='mt-[41px] text-[#9F9F9F] space-y-3'>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>SKU</p>
                        <span className='mr-[12px]'>:</span>
                        <p>SS001</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Category</p>
                        <span className='mr-[12px]'>:</span>
                        <p>Sofas</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Tags</p>
                        <span className='mr-[12px]'>:</span>
                        <p>Sofa, Chair, Home, Shop</p>
                    </div>
                    <div className='flex'>
                        <p className='w-[85px] ml-[16px]'>Share</p>
                        <span className='mr-[12px]'>:</span>
                        <p className='flex gap-[25px]'>
                            <img src="/assets/product-detail/fb.svg" alt="fb" />
                            <img src="/assets/product-detail/link.svg" alt="linkedin" />
                            <img src="/assets/product-detail/twitter.svg" alt="twitter" />
                        </p>
                    </div>
                
                </div>
                
            </div>
        </div>

        {/* Description */}
        <div className='mt-[54px] border-t border-[#D9D9D9] pt-12'>
            <div className='flex flex-wrap gap-3 md:gap-[53px] justify-center'>
                <p className='text-black text-2xl'>Description</p>
                <p className='text-[#9F9F9F] text-2xl'>Additional Information</p>
                <p className='text-[#9F9F9F] text-2xl'>Reviews [5]</p>
            </div>

            <div className='max-w-[1026px] mx-auto text-[#9F9F9F] space-y-[30px] py-[37px] p-4 sm:p-0 border-b border-[#D9D9D9]'>
                <p className='mt-[37px]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className='pb-[36px]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>

            <div className='max-w-[1240px] mx-auto px-2 mt-[36px] flex flex-col lg:flex-row items-center gap-[29px]'>
                <div className='bg-[#f3e4b5] rounded-[10px] max-w-[605px] h-[250px] sm:h-[348px]'>
                    <Image src={"/assets/product-detail/s1.svg"} alt="Sofa Image" width={400} height={400} className='object-contain w-full h-full'></Image>
                </div>
                <div className='bg-[#f3e4b5] rounded-[10px] max-w-[605px] h-[250px] sm:h-[348px]'>
                    <Image src={"/assets/product-detail/s2.svg"} alt="Sofa Image" width={400} height={400} className='object-contain w-full h-full'></Image>
                </div>
            </div>

            {/* Line */}
            <div className='w-full h-[1px] bg-[#D9D9D9] my-[60px]'></div>
        </div>



        {/* Related Products */}
        <div className=''>
            <p className='text-4xl font-medium mt-[26px] text-center'>Related Products</p>
            <div className='flex flex-wrap justify-center gap-[30px]'>
                {productDetail.map((item, i) => {
                    return( <ProductCard key={i} name={item.name} price={item.price} imagePath={item.imagePath}/>)
                })}
            </div>

            {/* View More Button*/}
            <div className="flex justify-center mt-[93px] mb-[103px]">
                <button className="w-[84px] hover:border-b border-black">View More</button>
            </div>
        </div>

        {/* cart option */}
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
                                    <Image src={images[active]} width={121} height={114} alt='Product Image' className='w-full bg-[#FFF9E5] flex p-3 justify-center items-center rounded' />
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
    </div>
)}

export default ProductDetail