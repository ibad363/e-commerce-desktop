'use client'
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "../context/CartContext"

const ProductCard = ({name,price,imagePath,link}: {name: string, price: string , imagePath: string, link: string}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      _id: link,
      productTitle: name,
      price: price,
      image: imagePath,
      quantity: 1
    });
  }

  return (
    <div className="max-w-[287px]">

        {/* Image */}
        <div className="h-[240px] w-[287px] flex flex-col items-center justify-center relative group">
            <Link href={`/shop/${link}`}><Image src={urlFor(imagePath).url()} alt="Product Image" width={220} height={220} className="object-center w-full h-full rounded-[5px]"></Image>
            </Link>
            {/* add to cart */}
            <Button variant={"outline"} 
            className="absolute bottom-0 w-full bg-black text-white flex justify-center py-2 rounded-b-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 rounded-[3px]"
            onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col p-2 mt-4">
          <h3 className="cursor-pointer font-normal"><Link href={`/shop/${link}`}>{name}</Link></h3>
          <p className="text-2xl mt-4">Rs {price}.00
          </p>
        </div>
    </div>
  )
}

export default ProductCard