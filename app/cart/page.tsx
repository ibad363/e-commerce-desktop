import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DeliveryInfo from "../components/DeliveryInfo";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";

const cart = [
   {image: "/assets/products/14.webp" , productName : "Asgaard Sofa", price: 250000 , quantity: 2},
   {image: "/assets/products/6.webp" , productName : "Kent Coffee table", price: 225000 , quantity: 1},
   {image: "/assets/products/14.webp" , productName : "Asgaard Sofa", price: 250000 , quantity: 3},
]

const CartPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins mt-16">
      <div className="max-w-[1240px] mx-auto flex gap-7 flex-col lg:flex-row items-center lg:items-start p-3 md:p-0">
        {/* Product Table */}
        <div className="max-w-[817px] w-full overflow-x-auto">
          <Table>
            <TableHeader className="text-lg font-medium bg-[#FFF9E5]">
              <TableRow className="py-10">
                <TableHead className="text-center py-4">Product</TableHead>
                <TableHead className="py-4">Price</TableHead>
                <TableHead className="py-4">Quantity</TableHead>
                <TableHead className="py-4">Subtotal</TableHead>
                <TableHead className="py-4"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((c, i) => (
                <TableRow className="mt-14" key={i}>
                  <TableCell className="flex flex-wrap items-center gap-2 sm:gap-9 text-[#9F9F9F]">
                    <Image src={c.image} alt={c.productName} width={70} height={70} className="rounded-[10px] w-[70px] h-[70px] bg-[#FDF3DC]"></Image>
                    <p>{c.productName}</p>
                  </TableCell>
                  <TableCell className="text-[#9F9F9F]">Rs. {c.price}.00</TableCell>
                  <TableCell>
                    <div className="flex">

                      <Button variant="ghost" className="rounded-[5px] text-black hover:bg-[#FBEBB5] hover:text-black  cursor-pointer">-</Button>

                      <Input type="number" value={c.quantity} readOnly className="w-12 border-none ml-2 " />

                      <Button variant="ghost" className="rounded-[5px] text-black hover:bg-[#FBEBB5] hover:text-black  cursor-pointer">+</Button>
                    </div>
                  </TableCell>
                  <TableCell>Rs. {c.price*c.quantity}.00</TableCell>
                  <TableCell><button><img src="/assets/others/delete.svg" alt="Delete Icon" /></button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
        </div>

        {/* Cart Totals */}
        <div className="max-w-[817px] lg:max-w-[393px] w-full bg-[#FFF9E5] rounded-[4px] px-8 sm:px-[75px]">
          <h2 className="text-[32px] font-bold mt-4 text-center">Cart Totals</h2>
          <div className="flex justify-between mt-14">
            <span className="font-medium">Subtotal</span>
            <span className="#9F9F9F">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mt-8">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-[#B88E2F]">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-center">
            <Button variant={"outline"} className="my-10 rounded-[10px] text-xl py-7 hover:bg-black hover:text-white duration-500 transition-colors w-[222px]">
              <Link href={"/checkout"}>Check Out</Link>
            </Button>
          </div>
        </div>
    </div>

      {/* Delivery Info*/}
      <DeliveryInfo/>
    </div>
  );
};

export default CartPage;
