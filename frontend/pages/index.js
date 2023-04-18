/* eslint-disable @next/next/no-img-element */

import React from "react";
import HeroBanner from "@/Components/HeroBanner";
import Testimonial from "@/Components/Testimonial";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
import { MdDiscount, MdOutlineStorefront } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function App() {
  return (
    <div>
      <HeroBanner />
      {/*Carousel */}
      <div className="relative text-white w-full max-w-[1300px] mx-auto ">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          autoFocus={true}
          showThumbs={true}
          showIndicators={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute md:right-[60px] right-[35px] bottom-1 md:bottom-5 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black flex items-center justify-center cursor-pointer
              hover:opacity-90 z-20"
            >
              <BiArrowBack className="text-sm md:text-lg" />
            </div>
          )}
          /* a custom function to render the 'previous' arrow button for the Carousel and takes two arguments (1)'clickHandler' is a function that can be called to trigger
        the previous slide (2)'hasPrev' is a boolean value indicating whether there is a previous slide to display. The function returns a react component that represent a 
        previous arrow button. When the button is clicked, it triggers the 'clickHandler' function to go to the previous slides*/
          renderArrowNext={(clickHandler, hasNext) => (
            <div
              onClick={clickHandler}
              className="absolute right-0  bottom-1 md:bottom-5 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black flex items-center
            justify-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg rotate-180" />
            </div>
          )}
        >
          {/*1st Product */}
          <div>
            <img src={"/Product_1.jpg"} alt="Woman Handbag" className="" />
            <div
              className="px-[15px] md:px-[40px] border border-black py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
          {/*2nd Product */}
          <div>
            <img
              src={"/Product_2.jpg"}
              alt="Woman Handbag"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] border-black md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
          {/*3rd Product */}
          <div>
            <img
              src={"/Product_3.jpg"}
              alt="Woman Handbag"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] border-black md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
          {/*4 Product */}
          <div>
            <img
              src={"/Product_4.jpg"}
              alt="Woman Handbag"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] border-black md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
          {/*5 Product */}
          <div>
            <img
              src={"/Product_5.jpg"}
              alt="Woman Handbag"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] border-black md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
        </Carousel>
      </div>
      {/*Carousel End */}

      {/*Discount section */}
      <div
        class="bg-shopping flex h-[500px] items-center justify-start bg-cover bg-fixed bg-no-repeat 
      bg-center pt-[30px] md:pt-[50px] max-w-[1400px] mx-auto"
      >
        <div class="inset-0 flex items-center justify-end pl-8">
          <div class="py-4 px-8 bg-black  opacity-75 text-white">
            <h2 class="text-3xl md:text-4xl font-bold font-playfair">
              30% off on all items
            </h2>
            <p class="text-md md:text-xl font-quickSand">
              Use code SAMSTORE23 at checkout
            </p>
          </div>
        </div>
      </div>
      {/*Discount section End */}

      {/*Features Start */}
      <div className=" grid md:flex pt-[30px] md:pt-[50px] p-6 md:p-10 justify-center items-center">
        {/*Features End */}
        <div className="flex flex-col items-center justify-center  max-w-sm p-6 md:p-10">
          <BsGlobeAmericas className="text-3xl md:text-4xl" />
          <h1 className="font-bold font-playfair text-lg md:text-xl pt-2 md:pt-6 font-">
            Worldwide Shipping
          </h1>
          <p className="pt-0 md:pt-6 text-center font-quickSand text-[14px] md:text-[18px]">
            Get your order delivered to your doorstep, anywhere in the world
          </p>
        </div>
        {/*2 feature */}
        <div className="flex flex-col items-center justify-center  max-w-sm p-6 md:p-10">
          <MdOutlineStorefront className="text-3xl md:text-4xl" />
          <h1 className="font-bold font-playfair text-lg md:text-xl pt-0 md:pt-6">
            In-store Pickup
          </h1>
          <p className="pt-0 md:pt-6 text-center font-quickSand text-[14px] md:text-[18px]">
            Shop online, pick up in-store today
          </p>
        </div>
        {/*3 feature */}
        <div className="flex flex-col items-center justify-center  max-w-sm p-6 md:p-10">
          <MdDiscount className="text-3xl md:text-4xl" />
          <h1 className="font-bold font-playfair text-lg md:text-xl pt-0 md:pt-6">
            Best Offers
          </h1>
          <p className="pt-0 md:pt-6 text-center font-quickSand text-[14px] md:text-[18px]">
            Amazing Deals: Save Big with Our Discounts!
          </p>
        </div>
        {/*4 feature */}
        <div className="flex flex-col items-center justify-center  max-w-sm p-6 md:p-10">
          <RiSecurePaymentLine className="text-3xl md:text-4xl" />
          <h1 className="font-bold font-playfair text-lg md:text-xl pt-0 md:pt-6">
            Secure Payments
          </h1>
          <p className="pt-0 md:pt-6 text-center font-quickSand text-[14px] md:text-[18px]">
            Securely Pay for Your Purchases with Ease
          </p>
        </div>
      </div>
      {/*features end */}
      {/*Testimonial */}
      <Testimonial />
    </div>
  );
}
