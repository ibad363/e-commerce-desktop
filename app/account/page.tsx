import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

import Image from "next/image"

const Account = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppins">
        {/* Background Image */}
        <div className="relative mb-2 h-[330px] ">
            <Image
                src="/assets/blog/Rectangle 1.svg"
                alt="background image"
                className="object-cover"
                fill
            ></Image>
            <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center">
                <Image
                    src="/assets/blog/Meubel House_Logos-05.svg"
                    alt=""
                    width={60}
                    height={60}
                />
                <h1 className="text-4xl font-bold m-0 p-0">My Account</h1>
                <div className="flex items-center gap-4">
                    <span>Home</span>
                    <Image
                        src="/assets/blog/vector.svg"
                        alt=""
                        width={10}
                        height={10}
                    />

                    <span>My Account</span>
                </div>
            </div>
        </div>
        {/* Login / signup */}
        <div className="flex flex-wrap gap-6 items-start justify-center p-6">

            {/* Sign in */}
            <div className="max-w-[608px] w-full flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Log In</h2>
                <div>
                    <Label htmlFor="email">Username or Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 w-full"
                    />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 w-full"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember-me" className="w-5 h-5" />
                    <Label htmlFor="remember-me">Remember me</Label>
                </div>
                <button className="bg-black text-white py-3 rounded-[10px] font-medium">
                    Log In
                </button>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                    Lost Your Password?
                </a>
            </div>

            {/* Register */}
            <div className="max-w-[608px] w-full flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Register</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                            id="first-name"
                            type="text"
                            placeholder="Enter your first name"
                            className="bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 w-full"
                        />
                    </div>
                    <div>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                            id="last-name"
                            type="text"
                            placeholder="Enter your last name"
                            className="bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 w-full"
                        />
                    </div>
                </div>
                <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 w-full"
                    />
                </div>
                <p className="text-sm text-[#9F9F9F]">
                    A link to set a new password will be sent to your email address.
                    Your personal data will be used to support your experience throughout this website,
                    to manage access to your account, and for other purposes described in our{" "}
                    <a href="#" className="text-blue-500 hover:underline">privacy policy</a>.
                </p>
                <button className="bg-black text-white py-3 rounded-[10px] font-medium">
                    Register
                </button>
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
  )
}

export default Account