import { Button } from '@/components/ui/button'
import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import Image from 'next/image';

const Checkout = () => {
    
  return (

    <div className='max-w-[1440px] mx-auto font-Poppins flex flex-col gap-3'>
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
          <h1 className="text-4xl font-bold m-0 p-0">Checkout</h1>
          <div className="flex items-center gap-4">
            <span>Home</span>
            <Image
              src="/assets/blog/vector.svg"
              alt=""
              width={10}
              height={10}
            />

            <span>Checkout</span>
          </div>
        </div>
      </div>

    <div className='flex md:flex-row flex-col gap-2 max-w-[1200px] mx-auto my-3 '>
  

    <div className=" mx-auto p-4 flex-1">
      <h1 className="text-2xl font-bold mb-6">Billing Details</h1>

      <form className="space-y-4">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" type="text" placeholder="Enter your first name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          </div>
          <div>
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" type="text" placeholder="Enter your last name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          </div>
        </div>

        {/* Company Name */}
        <div>
          <Label htmlFor="company-name">Company Name (Optional)</Label>
          <Input id="company-name" type="text" placeholder="Enter your company name" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>

        {/* Country / Region */}
        <div>
          <Label htmlFor="country">Country / Region</Label>
          <Select>
            <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-5">
              <SelectValue placeholder="Select country" className='placeholder:text-[#9F9F9F]' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
              <SelectItem value="pakistan">Pakistan</SelectItem>
              <SelectItem value="india">India</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Street Address */}
        <div>
          <Label htmlFor="street-address">Street Address</Label>
          <Input id="street-address" type="text" placeholder="Enter your street address" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>

        {/* Town / City */}
        <div>
          <Label htmlFor="city">Town / City</Label>
          <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
        {/* Province */}
        <div>
          <Label htmlFor="city">Province</Label>
          <Input id="city" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
        {/* ZIP code */}
        <div>
          <Label htmlFor="code">ZIP code</Label>
          <Input id="code" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="number" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
        </div>
        {/* Email */}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5' />
          <Input id="email" type="text" placeholder="Enter your town or city" className='bg-transparent border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-5 mt-2' />
        </div>
      </form>
    </div>

        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg flex-1">


  
  <div className="flex justify-between mb-4">
  <h2 className="text-2xl font-semibold mb-4">Product</h2>
  <h2 className="text-2xl font-semibold mb-4">Subtotal</h2>
  </div>
  <div className="flex justify-between mb-4">
    <span className="font-medium text-[#9F9F9F]">Asgaard sofa × 1</span>
    <span className="font-medium">Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-4">
    <span className="font-medium">Subtotal</span>
    <span className="font-medium">Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-6">
    <span className="font-medium">Total</span>
    <span className=" text-xl text-[#B88E2F] font-semibold">Rs. 250,000.00</span>
  </div>
  <hr />

 
  <div className="mb-6 mt-2">
    <div className='flex gap-2 items-center'>
        <span className='bg-black h-3 w-3 rounded-full'></span>
    <span className="font-medium mb-2">Direct Bank Transfer</span>
    </div>
    <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
    <div className='flex items-center gap-2 text-[#9F9F9F]'>

      <Input type="radio" name="payment-method" className="w-min"/>
      <span>Direct Bank Transfer</span>
    </div>
    <div className='flex items-center gap-2 text-[#9F9F9F]'>

      <Input type="radio" name="payment-method" className="w-min"/>
      <span> Cash On Delivery</span>
      </div>
     
    <p className="text-sm text-gray-500 mt-2">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy</span>.</p>
  </div>

  

  {/* <!-- Place Order Button --> */}
  <div className='flex justify-center items-center'>

  <Button
 className="w-[318px] h-[64px] bg-transparent border border-[#000000] font-semibold rounded-[15px] ">
    Place order
  </Button>
     </div>
</div>

    </div>
    </div>
  )
}

export default Checkout