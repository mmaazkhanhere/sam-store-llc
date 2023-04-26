import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function WishListItem() {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/*Image Starts */}
      <div className="aspect-square w-[50px] md:w-[150px]">
        <Image src={"/Product_1.jpg"} alt={""} width={150} height={150} />
      </div>
      {/*Image Ends */}
      {/*Product Detail Box Starts */}
      <div className="flex w-full flex-col">
        {/*Product Name and Price */}
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex font-playfair flex-col font-semibold text-black/[0.8] md:flex-row">
            Philips 3200 Series Fully Automatic Expresso Machine w/LatteGo
          </div>
          <div className="md:text-md block font-quickSand text-sm font-medium text-black/[0.5] md:hidden">
            Indulge in the Richness of Perfectly Brewed Expressor with Encore
            Maker
          </div>
          <div className="md:text-md mt-2 text-sm font-bold font-playfair text-black/[0.5]">
            $ 781.73
          </div>
        </div>
        {/*Product Subtitles displayed when in large screen below the name */}
        <div className="md:text-md hidden font-medium font-quickSand text-black/[0.5] md:block">
          Indulge in the Richness of Perfectly Brewed Expressor with Encore
          Maker
        </div>
        {/*Quantity Selectoin */}
        <div className="mt-4 flex items-center justify-between">
          <div className="items-center md:text-md flex gap-2 text-sm text-black/[0.5] md:gap-10"></div>
          <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black text-[16px]" />
        </div>
      </div>
    </div>
  );
}
