import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-6 font-Poppins">
      <div className="flex gap-2 lg:flex-row flex-col">
        {/* Product Table */}
        <div className="flex flex-wrap">
          <table className="w-full border border-[#F5F5DC] text-left">
            <thead className="bg-[#FDF3DC] text-[#9F9F9F] uppercase">
              <tr className="flex flex-wrap sm:flex-nowrap">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Quantity</th>
                <th className="py-4 px-6">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#F5F5DC] flex flex-wrap">
                <td className="py-6 px-6">
                  <div className="flex items-center gap-4">
                    <img
                      src="/assets/cart/Mask group.svg"
                      alt="Asgaard Sofa"
                      className="w-[70px] h-[70px] rounded-lg bg-[#FDF3DC]"
                    />
                    <span>Asgaard Sofa</span>
                  </div>
                </td>
                <td className="py-6 px-6">Rs. 250,000.00</td>
                <td className="py-6 px-6">
                  <div className="flex items-center border border-[#00000080] rounded-md">
                    <Button
                      variant="ghost"
                      className="w-8 flex items-center justify-center py-2 hover:bg-[#FBEBB5]"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value="1"
                      readOnly
                      className="w-12 text-center border-none focus:ring-0"
                    />
                    <Button
                      variant="ghost"
                      className="w-8 flex items-center justify-center py-2 hover:bg-[#FBEBB5]"
                    >
                      +
                    </Button>
                  </div>
                </td>
                <td className="py-6 px-6">Rs. 250,000.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="p-6 bg-[#FFF6E3] rounded-md">
          <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
          <div className="flex justify-between text-xl">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between text-xl mt-4">
            <span>Total</span>
            <span className="font-bold text-[#F29100]">Rs. 250,000.00</span>
          </div>
          <Button className="w-full mt-6 py-3 bg-black text-white rounded-md hover:bg-[#F29100]">
            <Link href={"/checkout"}>Check Out</Link>
          </Button>
        </div>

    </div>
        {/* Delivery Section*/}
        <div className="mt-[92px] max-w-[1440px] mx-auto bg-[#FAF4F4] ">
          <div className="py-[96px] max-w-[1240px] mx-auto flex">
            {/* Free Delivery */}
            <div>
              <h4 className="text-[32px] font-medium">Free Delivery</h4>
              <p className="text-xl text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
            </div>

            {/* 90 Days Return */}
            <div>
              <h4 className="text-[32px] font-medium">90 Days Return</h4>
              <p className="text-xl text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
            </div>

            {/* Secure Payment */}
            <div>
              <h4 className="text-[32px] font-medium">Secure Payment</h4>
              <p className="text-xl text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CartPage;
