"use client";
import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductImages = ({ images }: any) => {
    const [active, setActive] = useState(0);

    return (
        <>
            {/* Four Image */}
            <div className='flex flex-row lg:flex-col justify-between gap-2 lg:gap-8'>
                {images.map((key: any, i: number) => (
                    <div
                        key={i}
                        className={`w-[100px] sm:h-[100px] bg-[#FBEBB5] flex p-[2px] justify-center items-center rounded ${active === i && "border-2 border-black"}`}
                        onClick={() => { setActive(i); }}>
                        <Image src={urlFor(key).url()} alt='Product Image' width={120} height={120} className='object-cover w-full h-full'></Image>
                    </div>
                ))}

            </div>

            {/* Full Image */}
            <div className='bg-[#FBEBB5] max-w-[750px] w-full h-[280px] xs:h-[400px] lg:h-[500px] flex justify-center items-center rounded-xl'>
                <Image src={urlFor(images[active]).url()} width={450} height={320} alt='Product Image' className='object-cover w-full h-full p-1 rounded-xl' />
            </div>
        </>
    );
};

export default ProductImages;