import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/*Image Starts */}
      <div className="aspect-square w-[50px] md:w-[150px]">
        <Image src="/product_1.jpg" alt="" width={150} height={150} />
      </div>
      {/*Image Ends */}
      {/*Product Detail Box Starts */}
      <div className="flex w-full flex-col">
        {/*Product Name and Price */}
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex font-playfair flex-col font-semibold text-black/[0.8] md:flex-row">
            Coccinele Handbag
          </div>
          <div className="md:text-md block font-quickSand text-sm font-medium text-black/[0.5] md:hidden">
            The Perfect Accessory for Everyday Use
          </div>
          <div className="md:text-md mt-2 text-sm font-bold font-playfair text-black/[0.5]">
            $ 45.99
          </div>
        </div>
        {/*Product Subtitles displayed when in large screen below the name */}
        <div className="md:text-md hidden font-medium font-quickSand text-black/[0.5] md:block">
          The Perfect Accessort for Everyday Use
        </div>
        {/*Quantity Selectoin */}
        <div className="mt-4 flex items-center justify-between">
          <div className="itens-center md:text-md flex gap-2 text-sm text-black/[0.5] md:gap-10">
            <div className="flex items-center gap-1">
              {/*Quantity selectoin */}
              <div className="font-semibold font-quickSand">Quantity:</div>
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
          {/*Quantity Selection ends */}
          {/*Delete Button */}
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px]" />
        </div>
      </div>
    </div>
  );
}
