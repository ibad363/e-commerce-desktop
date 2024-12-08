import Image from "next/image"
import Link from "next/link"

const ProductCard = (props: {name: string, price: string , imagePath: string}) => {

  return (
    <div className="max-w-[287px] h-[350px]">

        {/* Image */}
        <div className="h-[240px] w-[287px] p-2 flex flex-col items-center justify-center">
            <Image src={props.imagePath} alt="Product Image" width={300} height={300} className="object-contain w-full h-full"></Image>
        </div>

        {/* Product Detail */}
        <div className="flex flex-col p-2">
          <h3 className="cursor-pointer font-normal"><Link href={"/productdetail"}>{props.name}</Link></h3>
          <p className="text-2xl mt-4">${props.price}
          </p>
        </div>
    </div>
  )
}

export default ProductCard