import ProductCard from "@/Components/ProductCard";
import React from "react";

export default function index() {
  return (
    <div class="w-full md:py-20 relative  flex justify-center">
      {/*Whole Section */}
      <section class="max-w-[1200px] ">
        {/*Heading Section */}
        <div
          class="text-[28px] md:text-[34px] max-w-[800px] mt-8 md:mt-0 text-center  mx-auto mb-5 
        font-semibold leading-tight"
        >
          Home Appliances
        </div>
        {/*Product Section */}
        <div
          class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 justify-center 
        items-center"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
}
