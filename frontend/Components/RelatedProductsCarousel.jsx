import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

export default function RelatedProductsCarousel({ products }) {
  const responsive = {
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
  }; //copied from the website. Also install react multi carousel

  return (
    <div class="mt-[30px] md:mt-[50px] mb-[30px] mb:mt-[50px] font-playfair">
      <div class="text-xl md:text-4xl font-bold mb-10">You May Also Like</div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
      >
        {products?.data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </Carousel>
    </div>
  );
}
