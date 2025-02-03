'use client'
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
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { Trash } from "lucide-react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + (Number(item.price) * item.quantity)
    , 0);
  };

  const GST = () => {
    return calculateTotal() * 10 / 100;
  };
  
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins mt-16">
      <div className="max-w-[1240px] mx-auto flex gap-7 flex-col xl:flex-row items-center xl:items-start px-3">
        {/* Product Table */}
        <div className="max-w-[1040px] xl:max-w-[817px] w-full">

          <Table className="md:inline-table hidden">
            <TableHeader className="text-lg font-medium bg-[#fbebb5]">
              <TableRow className="py-10">
                <TableHead className="text-center py-4">Product</TableHead>
                <TableHead className="py-4">Price</TableHead>
                <TableHead className="py-4">Quantity</TableHead>
                <TableHead className="py-4">Subtotal</TableHead>
                <TableHead className="py-4"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {cartItems.map((item) => (
                <TableRow className="mt-14" key={item._id}>
                  <TableCell className="flex  items-center gap-2 sm:gap-4 ">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-[4px] w-[70px] h-[70px] bg-[#fbebb5]"
                    ></Image>
                    <p className="break-words">{item.name}</p>
                  </TableCell>
                  <TableCell>Rs. {item.price}.00</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black  cursor-pointer px-2"
                        onClick={() =>
                          updateQuantity(
                            item._id,
                            Math.max(0, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </Button>
                      <span>
                        {item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black  cursor-pointer px-2"
                        onClick={() =>
                          updateQuantity(item._id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    Rs. {Number(item.price) * item.quantity}
                  </TableCell>
                  <TableCell>
                    <button onClick={() => removeFromCart(item._id)}>
                      <Trash className="hover:bg-[#f0d786] p-2 rounded" size={40}/>
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table className="inline-table md:hidden">
            <TableBody>
              {cartItems.map((item) => (
                <TableRow>
                  <TableCell className="flex flex-col items-center gap-1 ">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={70}
                      height={70}
                      className="rounded-[4px] w-[70px] h-[70px] bg-[#fbebb5]"
                    ></Image>
                    <p className="text-center">{item.name}</p>
                    <span>Rs. {item.price}.00</span>
                    <div className="flex items-center gap-2">
                    <Button variant="ghost" className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black cursor-pointer px-2"
                      onClick={() => updateQuantity(item._id, Math.max(0, item.quantity - 1)
                      )}>-</Button>

                      <span>
                        {item.quantity}
                      </span>

                      <Button
                        variant="ghost"
                        className="rounded-[5px] text-black hover:bg-[#f0d786] hover:text-black  cursor-pointer px-2"
                        onClick={() =>updateQuantity(item._id, item.quantity + 1)}
                      >+</Button>
                    </div>
                    <span className="flex items-center gap-6">
                      <span className="text-base">Rs. {Number(item.price) * item.quantity}</span>
                      <span>
                        <button onClick={() => removeFromCart(item._id)}>
                          <Trash className="hover:bg-[#f0d786] p-2 rounded" size={40}/>
                        </button>
                      </span>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Cart Totals */}
        <div className="max-w-[540px] xl:max-w-[393px] w-full bg-[#fbebb5] rounded-[4px] px-4 sm:px-[75px]">
          <h2 className="text-[32px] font-bold mt-4 text-center">
            Cart Totals
          </h2>
          <div className="flex justify-between mt-14">
            <span className="font-medium">Subtotal</span>
            <span className="#9F9F9F">Rs. {(calculateTotal()).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-medium">GST</span>
            <span className="#9F9F9F">10% ({(GST()).toFixed(2)})</span>
          </div>
          <div className="flex justify-between mt-8">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-[#B88E2F]">
              Rs. {(calculateTotal() + GST()).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-center">
            <Button
              variant={"outline"}
              className="my-10 rounded-[10px] text-xl py-7 hover:bg-black hover:text-white duration-500 transition-colors w-[180px] sm:w-[222px]"
            >
              <Link href={"/checkout"}>Check Out</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Delivery Info*/}
      <DeliveryInfo />
    </div>
  );
};

export default CartPage;
