import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPricePercetange } from "@/utils/helper";

export default function ProductCard({ data: { attributes: p, id } }) {
  //attributes of the product is assigned to p with an id
  return (
    <Link
      href={`/product/${p.slug}`} //dynamically genereted URL that includes the slug of the produc that is being displayed
      className="transform overflow-hidden bg-white transition duration-300 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url} //fetched from API
        layout="responsive"
        alt={p.name} //name of the product displayed if the image cannot be loaded
      />
      <div className=" mt-6 mb-[50px] text-black/[0.9]">
        {" "}
        {/*Product details */}
        <h2 className="text-[16px] font-medium font-playfair">{p.name}</h2>
        <div className="flex items-center text-black/[0.8]">
          <p className="mr-2 mt-4 text-[20px] font-semibold font-quickSand">{`$ ${p.price}`}</p>

          {p.original_price /* a function to calculate the discount offers. The  following styles are applied only if original price (i.e discount is offered) 
          is available*/ && (
            <>
              <p className="text-[12px] mt-4 font-medium text-black/[0.5] line-through font-quickSand">{`$ ${p.original_price}`}</p>
              <p className="ml-auto text-base font-medium text-green-500 font-quickSand">
                {getDiscountedPricePercetange(p.original_price, p.price)} % off{" "}
                {/*percentage calculator function is called */}
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
