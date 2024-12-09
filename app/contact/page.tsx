import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import BgImage from "../components/BgImage";

const Contact = () => {
  return (
    <div className="max-w-1440px mx-auto font-Poppins ">
      {/* Background Image */}
      <BgImage pageName="Contact"/>

      <div className="flex flex-wrap items-start justify-center gap-8 p-6 lg:p-12">
        {/* Contact Details Section */}
        <div className="max-w-[400px] w-full flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-600">
            For more information about our product & services, please feel free
            to drop us an email. Our staff is always there to help you out, do
            not hesitate!
          </p>

          <div className="flex items-start gap-4">
            <span className="text-xl text-blue-500">📍</span>
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-600">
                123 5th St Avenue, New York, NY 10001, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-xl text-blue-500">📞</span>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-600">Mobile: +1 (646) 568-3789</p>
              <p className="text-gray-600">Hotline: +1 (646) 568-9780</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-xl text-blue-500">🕒</span>
            <div>
              <h3 className="text-lg font-semibold">Working Time</h3>
              <p className="text-gray-600">Monday–Friday: 9:00–22:00</p>
              <p className="text-gray-600">Saturday–Sunday: 9:00–18:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-[600px] w-full flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
          <Input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg py-3 px-4 placeholder:text-gray-500"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg py-3 px-4 placeholder:text-gray-500"
          />
          <Input
            type="text"
            placeholder="Subject (This is optional)"
            className="border border-gray-300 rounded-lg py-3 px-4 placeholder:text-gray-500"
          />
          <Textarea
            placeholder="Message"
            className="border border-gray-300 rounded-lg py-3 px-4 placeholder:text-gray-500"
          />
          <Button className="bg-black text-white py-3 rounded-lg w-full font-medium">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;