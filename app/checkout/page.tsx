import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import BgImage from '../components/BgImage';
import DeliveryInfo from '../components/DeliveryInfo';

const Checkout = () => {
    
  return (
    <div className='max-w-[1440px] mx-auto font-Poppins'>
      {/* Background Image */}
      <BgImage pageName="Checkout"/>

      {/* Content */}
      <div className='flex md:flex-row flex-col gap-6 max-w-[1240px] mx-auto mt-[63px]'>

        {/* Billing Details */}
        <div className="max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
          <h1 className="text-4xl font-semibold">Billing Details</h1>

          <form className="space-y-6 mt-9">
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" type="text" placeholder="Enter your first name" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text" placeholder="Enter your last name" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <Label htmlFor="company-name">Company Name (Optional)</Label>
              <Input id="company-name" type="text" placeholder="Enter your company name" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Country / Region */}
            <div>
              <Label htmlFor="country">Country / Region</Label>
              <Select>
                <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-6">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className='bg-white rounded-[6px] '>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Street Address */}
            <div>
              <Label htmlFor="street-address">Street Address</Label>
              <Input id="street-address" type="text" placeholder="Enter your street address" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Town / City */}
            <div>
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" type="text" placeholder="Enter your town or city" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Province */}
            <div>
              <Label htmlFor="province">Province</Label>
              <Select>
                <SelectTrigger id="province" className="border border-[#9F9F9F] rounded-[10px] py-6">
                  <SelectValue placeholder="Enter your Province" />
                </SelectTrigger>
                <SelectContent className='bg-white rounded-[6px] '>
                  <SelectItem value="sindh">Sindh</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="balochistan">Balochistan</SelectItem>
                  <SelectItem value="kpk">KPK</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ZIP code */}
            <div>
              <Label htmlFor="code">ZIP code</Label>
              <Input id="code" type="text" placeholder="Enter your ZIP Code" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="number" placeholder="Enter your Phone Number" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your Email Address" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' />
            </div>

            {/* Additional Info */}
            <Input id="email" type="text" placeholder="Additional Information" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 mt-2' />

          </form>
        </div>

        {/* Place Order Section*/}
        <div className="max-w-[608px] w-full mx-auto py-[87px] px-2 sm:px-[37px] md:px-4 lg:px-[37px]">

          {/* Heading */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Product</h2>
            <h2 className="text-2xl font-semibold">Subtotal</h2>
          </div>

          {/* Product Details */}
          <div className="space-y-5 mt-[14px]">
            <div className='flex justify-between'>
              <p className="text-[#9F9F9F]">Asgaard sofa <span className='text-black'> X 1</span></p>
              <span className="font-light">Rs. 250,000.00</span>
            </div>
         
            <div className="flex justify-between">
              <p>Subtotal</p>
              <span className="font-light">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <span className="text-2xl text-[#B88E2F] font-bold">Rs. 250,000.00</span>
            </div>
          </div>
          <hr className='mt-10'/>

          {/* Payment Details */}
          <div className="mt-[22px]">
            <div className='flex items-center gap-4'>
              <div className='bg-black h-4 w-4 rounded-full'></div>
              <p className="font-medium">Direct Bank Transfer</p>
            </div>

            <p className='text-[#9F9F9F] font-light mt-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

            <div className='flex items-center gap-2 text-[#9F9F9F] mt-6'>
              <Input type="radio" id="bank-transfer" name='payment-method' className="w-min" />
              <Label htmlFor='bank-transfer' className='cursor-pointer text-lg'>Direct Bank Transfer</Label>
            </div>

            <div className='flex items-center gap-2 text-[#9F9F9F] mt-5'>
              <Input type="radio" id="cod" name='payment-method' className="w-min" />
              <Label htmlFor='cod' className='cursor-pointer text-lg'>Cash On Delivery</Label>
            </div>

            <p className="font-light mt-5 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy</span>.</p>
          </div>

          {/* <!-- Place Order Button --> */}
          <div className='flex justify-center items-center mt-10'>
            <Button
              className="w-[318px] h-[64px] border border-[#000000] font-semibold rounded-[15px]">
              Place order
            </Button>
          </div>
        </div>

      </div>

      {/* Delivery Info*/}
      <DeliveryInfo/>
    </div>
  )
}

export default Checkout