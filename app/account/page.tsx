import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import BgImage from "../components/BgImage";
import Link from "next/link";
import DeliveryInfo from "../components/DeliveryInfo";

const Account = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins">
        {/* Background Image */}
        <BgImage pageName="Account"/>

        {/* Login / signup */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center mt-[63px]">

            {/* Sign in */}
            <div className="flex flex-col gap-7 max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
                <h2 className="text-4xl font-bold">Log In</h2>
                <div>
                    <Label htmlFor="email">Username or Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
                    />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Checkbox id="remember" className="border-[#9F9F9F] rounded-[5px] w-7 h-7"/>
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-7">
                    <Button variant={"outline"} className="rounded-[10px] text-xl py-6 hover:bg-black hover:text-white duration-500 transition-colors w-[215px]">Log In</Button>
                    <Link href="" className="font-light hover:underline">
                        Lost Your Password?
                    </Link>
                </div>
            </div>

            {/* Register */}
            <div className="flex flex-col gap-7 max-w-[608px] w-full mx-auto py-9 px-2 sm:px-[37px] md:px-4 lg:px-[37px]">
                <h2 className="text-4xl font-bold">Register</h2>
                <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
                    />
                </div>
                <div className="font-light space-y-4">
                    <p>A link to set a new password will be sent to your email address.</p>
                    <p className="text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href={""} className="font-bold cursor-pointer">privacy policy.</Link></p>
                </div>
                <Button variant={"outline"} className="rounded-[10px] text-xl py-6 hover:bg-black hover:text-white duration-500 transition-colors w-[215px] mt-5 mx-auto md:mx-0">Register</Button>
            </div>
        </div>


        {/* Delivery Info*/}
        <DeliveryInfo/>
    </div>
  )
}

export default Account