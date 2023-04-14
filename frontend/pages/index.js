/* eslint-disable @next/next/no-img-element */

import React from "react";
import HeroBanner from "@/Components/HeroBanner";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";

export default function App() {
  return (
    <div className="h-[2000px]">
      <HeroBanner />
      <div className="relative text-white w-full max-w-[1300px] mx-auto">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          autoFocus={true}
          showThumbs={false}
        >
          {/*1st Product */}
          <div>
            <img src={"/Product_1.jpg"} alt="Woman Handbag" className="" />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
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
            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
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
            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
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
            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
          {/*5 Product */}
          <div>
            <img
              src={"/Product_5.avif"}
              alt="Woman Handbag"
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div
              className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9]
            text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
            >
              Shop Now
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
