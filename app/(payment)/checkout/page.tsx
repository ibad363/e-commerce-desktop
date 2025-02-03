"use client"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import BgImage from '../../components/BgImage';
import DeliveryInfo from '../../components/DeliveryInfo';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { useForm, SubmitHandler } from "react-hook-form";
import { CheckoutForm } from '../../utils/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import CheckOutComponent from '../components/payment/Checkout';

const Checkout = () => {
  let {cartItems,clearCart} = useCart()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + (Number(item.price) * item.quantity)
    , 0);
  };
  
  const GST = () => {
    return (calculateTotal() * 10/100);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutForm>({
    defaultValues: {
      paymentMethod: "cod", // default payment method
    },
  });

    // Watch the payment method field to conditionally render the button text
    const selectedPaymentMethod = watch("paymentMethod", "cod");

    
  const onSubmit: SubmitHandler<CheckoutForm> = async (data) => {
    setLoading(true);

    const orderPayload = {
      addCart: cartItems,
      billingDetails: {
        fullName: data.name,
        email: data.email,
        country: data.country,
        streetAddress: data.streetAddress,
        city: data.city,
        zipCode: data.zipCode,
        phone: data.phone,
      },
      paymentMethod: data.paymentMethod,
    };

    if(orderPayload.addCart.length === 0){
      alert("Cart is empty");
      setTimeout(() => {
        router.push("/shop");
      }, 1000);

    }else{
      if (data.paymentMethod === "card") {
        try {
          const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderPayload),
          });
  
          const result = await res.json();
  
          if (result.url) {
            // Redirect to Stripe Checkout
            window.location.href = result.url;
          } else {
            console.error("Failed to create Stripe session", result.error);
          }
        } catch (error) {
          console.error("Error creating checkout session", error);
        }
      } else {
        // Handle COD order: process order, clear cart, redirect to thank-you page
        router.push("/success");
      }
    }
    setLoading(false);
  };
    
  return (
    <div className='max-w-[1440px] mx-auto font-Poppins'>
      {/* Background Image */}
      <BgImage pageName="Checkout"/>

      {/* Content */}
      <div className='flex md:flex-row flex-col gap-6 max-w-[1240px] mx-auto mt-[63px] min-h-screen'>

        {/* Billing Details */}
        <div className="max-w-[608px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px] py-9">
          <h1 className="text-4xl font-semibold">Billing Details</h1>

          <form className="space-y-6 mt-9" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <Label htmlFor="first-name">Full Name</Label>
              <Input id="first-name" type="text" placeholder="Enter your full name" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6'
                {...register("name", {
                  required: "Full name is required",
                  minLength: { value: 2, message: "Minimum 2 characters required" },
                })}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            {/* Company Name */}
            <div>
              <Label htmlFor="company-name">Company Name (Optional)</Label>
              <Input id="company-name" type="text" placeholder="Enter your company name" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("companyName")}/>
            </div>

            {/* Country / Region */}
            <div>
              <Label htmlFor="country">Country / Region</Label>
              <Select>
                <SelectTrigger id="country" className="border border-[#9F9F9F] rounded-[10px] py-6"
                >
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className='bg-white rounded-[6px] ' 
                {...register("country", 
                  // { required: "Country is required" }
                )}
                >
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                </SelectContent>
              </Select>
              {errors.country && <p className="text-red-500">{errors.country.message}</p>}
            </div>
            
            {/* Street Address */}
            <div>
              <Label htmlFor="street-address">Street Address</Label>
              <Input id="street-address" type="text" placeholder="Enter your street address" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("streetAddress", { required: "Street address is required" })}/>
              {errors.streetAddress && <p className="text-red-500">{errors.streetAddress.message}</p>}
            </div>

            {/* Town / City */}
            <div>
              <Label htmlFor="city">Town / City</Label>
              <Input id="city" type="text" placeholder="Enter your town or city" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("city", { required: "City is required" })}/>
              {errors.city && <p className="text-red-500">{errors.city.message}</p>}
            </div>

            {/* Province */}
            <div>
              <Label htmlFor="province">Province</Label>
              <Select>
                <SelectTrigger id="province" className="border border-[#9F9F9F] rounded-[10px] py-6">
                  <SelectValue placeholder="Enter your Province" />
                </SelectTrigger>
                <SelectContent className='bg-white rounded-[6px] ' 
                {...register("province", 
                  // { required: "Province is required" }
                )}
                >
                  <SelectItem value="sindh">Sindh</SelectItem>
                  <SelectItem value="punjab">Punjab</SelectItem>
                  <SelectItem value="balochistan">Balochistan</SelectItem>
                  <SelectItem value="kpk">KPK</SelectItem>
                </SelectContent>
              </Select>
              {errors.province && <p className="text-red-500">{errors.province.message}</p>}
            </div>

            {/* ZIP code */}
            <div>
              <Label htmlFor="code">ZIP code</Label>
              <Input id="code" type="text" placeholder="Enter your ZIP Code" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("zipCode", {
              required: "ZIP Code is required",
              pattern: { value: /^[0-9]{5}$/, message: "Enter a valid 5-digit ZIP Code" },
              })}
              />
              {errors.zipCode && <p className="text-red-500">{errors.zipCode.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="number" placeholder="Enter your Phone Number" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10,12}$/, message: "Enter a valid phone number" },
              })}
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}  
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your Email Address" className='border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6' 
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Enter a valid email address" },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            {/* Payment Options */}
            <div className="mt-4">
                <label className="flex items-center text-gray-700 mb-2">
                  <input
                    type="radio"
                    value="card"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    className="mr-2"
                  />
                  Card Payment
                </label>
                <label className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    value="cod"
                    {...register("paymentMethod", {
                      required: "Please select a payment method",
                    })}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentMethod.message}
                  </p>
                )}
              </div>

            {/* Payment Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#fbebb5] hover:bg-[#B88E2F] text-black py-3 rounded shadow font-bold transition-all duration-300"
              >
                {loading
                  ? "Processing..."
                  : selectedPaymentMethod === "card"
                    ? "Proceed to Payment"
                    : "Place Order"}
              </button>
            </div>
          </form>
        </div>

        {/* Place Order Section*/}
        <div className="max-w-[608px] w-full mx-auto py-[87px] px-2 sm:px-[37px] md:px-4 lg:px-[37px]">

          {/* Heading */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-[#B88E2F]">Product</h2>
            <h2 className="text-2xl font-semibold text-[#B88E2F]">Subtotal</h2>
          </div>

          {/* Product Details */}
          <div className="space-y-5 mt-[14px]">
            {cartItems.map((item =>
              <div className='flex justify-between'>
                <p className="text-[#4e4e4e]">{item.name} <span className='text-black mx-2'>X</span>{item.quantity}</p>
                <span className="font-light">$ {Number(item.price) * item.quantity}</span>
              </div>
            ))}
         
            <div className="flex justify-between">
              <p>Subtotal</p>
              <span className="font-light">$ {(calculateTotal()).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <p>GST (10%)</p>
              <span className="font-light">$ {(GST()).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <p className='text-2xl font-bold'>Total</p>
              <span className="text-2xl text-[#B88E2F] font-bold">
                Rs. {(calculateTotal() + GST()).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Delivery Info*/}
      <DeliveryInfo/>
    </div>
  )
}

export default Checkout