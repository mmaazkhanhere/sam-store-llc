import RelatedProductsCarousel from "@/Components/RelatedProductsCarousel";
import Image from "next/image";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

export default function Product() {
  return (
    <div>
      <section className="mx-auto max-w-[1200px] mb-[30px] md:mb-[50px]">
        <div className="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px] mt-[50px]">
          <div className="lg:sticky mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full overflow-hidden">
            <Image
              src="/product_1.jpg"
              width={700}
              height={700}
              alt=""
              className="hover:scale-150 "
            />
          </div>

          <div className="flex-[1] py-3">
            <div className="mb-2 text-[34px] font-semibold leading-tight">
              Coccinele Handbag
            </div>
            <div className="mb-5 text-lg font-semibold">
              The Perfect Accessory for Everyday Use
            </div>
            <div className="flex items-center justify-center">
              <p className="mr-2 text-lg font-semibold">$ 45.99</p>
              <p className="text-sm font-medium line-through">$ 50.00</p>
              <p className="ml-auto text-base font-medium text-green-500">
                12% off
              </p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md mb-20 font-medium text-black/[0.5]">{`(Also includes all applicable duties)`}</div>
            <button className="w-full rounded-full border bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95">
              Add To Cart
            </button>
            <button
              className="w-full py-4 rounded-full border border-black text-lg 
                    font-medium hover:bg-red-600 hover:text-white transition-transform active:scale-95 flex items-center justify-center 
                    gap-2 mb-10 hover:opacity-75"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="mb-5 text-lg font-bold">Product Details</div>
              <div className="markdown text-mb mb-5 text-justify">
                This handbag is a stylish and elegant accessory perfect for
                adding a touch of sophistication to any outfit. Made of black
                leather, it features the brand name "Coccinelle" written across
                it in a subtle yet eye-catching way. The handbag is small in
                size and has a unique heart-shaped bottom, adding a playful
                touch to its overall design. Whether for a night out or a
                special occasion, this handbag is sure to turn heads and make a
                statement.
              </div>
            </div>
          </div>
        </div>
        <RelatedProductsCarousel />
      </section>
    </div>
  );
}
