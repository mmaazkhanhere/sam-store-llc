import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getDiscountedPricePercetange } from "@/utils/helper";

export default function ProductCard({ data: { attributes: p, id } }) {
  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      {/*transform can be used to rotate, scale, or translate elements
        overfollow-hidden sets the element to hide any content that overflow its boundaries, which can be useful when working with element
        that have fixed sizes
        */}
      <Image
        width={500}
        height={500}
        src={p.thumbnail.data.attributes.url}
        alt={p.name}
      />
      <div className=" mt-6 mb-[50px] text-black/[0.9]">
        <h2 className="text-[16px] font-medium font-playfair">{p.name}</h2>
        <div className="flex items-center text-black/[0.8]">
          <p className="mr-2 mt-4 text-[20px] font-semibold font-quickSand">{`$ ${p.price}`}</p>

          {p.original_price && (
            <>
              <p className="text-[12px] mt-4 font-medium text-black/[0.5] line-through font-quickSand">{`$ ${p.original_price}`}</p>
              <p className="ml-auto text-base font-medium text-green-500 font-quickSand">
                {getDiscountedPricePercetange(p.original_price, p.price)} % off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
