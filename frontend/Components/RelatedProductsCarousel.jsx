import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

export default function RelatedProductsCarousel({ products }) {
  const responsive = {
    //copied from the react-multi-carousel website
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <div class="mt-[30px] md:mt-[50px] mb-[30px] mb:mt-[50px] font-playfair">
      <div class="text-xl md:text-4xl font-bold mb-10">You May Also Like</div>
      <Carousel
        responsive={responsive} //defines the responsive behavior of the carousel slider
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {products?.data?.map(
          (
            product /* a JSX code that generates individual product cards within the carousel slider. It uses a map function to iterate
        over the 'data' array of the 'products' objects and generate a ProductCard component for each item in the array*/
          ) => (
            <ProductCard key={product.id} data={product} /> //the key property is used to uniquely indentify each component
          )
        )}
      </Carousel>
    </div>
  );
}
