import RelatedProductsCarousel from "@/Components/RelatedProductsCarousel";
import React from "react";

export default function Product() {
  return (
    <div>
      <section class="mx-auto max-w-[1200px]">
        <div class="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px]">
          <div class="lg:sticky top-[50px] mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
            <img
              src="https://www.efootwear.eu/media/catalog/product/cache/image/650x650/8/0/8059978380159_03_az.jpg"
              alt=""
              class="hover:scale-150"
            />
          </div>

          <div class="flex-[1] py-3">
            <div class="mb-2 text-[34px] font-semibold leading-tight">
              Coccinele Handbag
            </div>
            <div class="mb-5 text-lg font-semibold">
              The Perfect Accessory for Everyday Use
            </div>
            <div class="flex items-center justify-center">
              <p class="mr-2 text-lg font-semibold">$ 45.99</p>
              <p class="text-sm font-medium line-through">$ 50.00</p>
              <p class="ml-auto text-base font-medium text-green-500">
                12% off
              </p>
            </div>
            <div class="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div class="text-md mb-20 font-medium text-black/[0.5]">{`(Also includes all applicable duties)`}</div>
            <button class="w-full rounded-full border bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95">
              Add To Cart
            </button>
            <button class="mb-[30px] w-full rounded-full border border-black py-4 text-lg font-medium text-black transition-transform hover:bg-red-600 hover:text-white hover:opacity-75 active:scale-95 md:mb-[50px]">
              Wishlist
            </button>
            <div>
              <div class="mb-5 text-lg font-bold">Product Details</div>
              <div class="markdown text-mb mb-5 text-justify">
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
