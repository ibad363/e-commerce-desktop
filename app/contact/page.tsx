import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {MapPin,Phone,Clock} from "lucide-react"
import BgImage from "../components/BgImage";
import { Label } from "@/components/ui/label";
import DeliveryInfo from "../components/DeliveryInfo";

const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Poppin ">
      {/* Background Image */}
      <BgImage pageName="Contact"/>

      {/* Heading */}
      <div className="space-y-3 mt-10 md:mt-[98px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F] max-w-[644px] mx-auto text-center">
          For more information about our product & services, please feel free
          to drop us an email. Our staff is always there to help you out, do
          not hesitate!
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-start justify-center gap-8 pt-10 px-4 sm:px-[75px] md:px-4 lg:px-24 xl:px-[191px]">
        {/* Contact Details Section */}
        <div className="flex flex-col items-start justify-center gap-4 max-w-[393px] w-full mx-auto px-4 sm:px-[34px] md:px-4 lg:px-[34px] mt-6 md:mt-0">
          <div className="flex items-center gap-3 sm:gap-6">
            <span><MapPin /></span>
            <div>
              <h3 className="text-2xl font-semibold">Address</h3>
              <p>
                123 5th St Avenue, New York, NY 10001, United States
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <span><Phone /></span>
            <div>
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <span><Clock /></span>
            <div>
              <h3 className="text-2xl font-semibold">Working Time</h3>
              <p>Monday–Friday: 9:00–22:00</p>
              <p>Saturday–Sunday: 9:00–21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col gap-6 max-w-[635px] w-full mx-auto px-4 sm:px-[75px] md:px-4 lg:px-[75px]">
          <div>
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your Name"
              className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
            />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="This is an optional"
              className="border border-[#9F9F9F] rounded-[10px] placeholder:text-[#9F9F9F] py-6 w-full mt-2"
            />
          </div>
          <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Hi! i’d like to ask about"
            className="border border-[#9F9F9F] rounded-[10px] py-3 px-4 placeholder:text-gray-500 resize-none mt-2"
            rows={4}
          />
          </div>
          <Button variant={"outline"} className="rounded-[10px] text-xl py-7 hover:bg-black hover:text-white duration-500 transition-colors w-[237px] mt-5 mx-auto md:mx-0">Submit</Button>
        </div>
      </div>

      {/* Delivery Info*/}
      <DeliveryInfo/>
    </div>
  );
};

export default Contact;