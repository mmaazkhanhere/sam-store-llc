import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Link
      href={"/product/1"}
      className="transform overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <Image width={500} height={500} alt="Women Bag" src={"/product_1.jpg"} />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">Umbro Kaixi Handbag</h2>
        <div className="flex items-center justify-center">
          <p className="mr-2 text-lg font-semibold">$ 45.99</p>
          <p className="line-through font-medium text-sm">$ 50.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            12% off
          </p>
        </div>
      </div>
    </Link>
  );
}
