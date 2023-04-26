import React from "react";
import WishListItem from "@/Components/WishListItem";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Wishlist() {
  const { listItems } = useSelector((state) => state.wishlist);
  return (
    <div className="w-full md:py-20">
      <section className="max-w-[1400px] mx-auto">
        {listItems.length > 0 && (
          <>
            <div
              className="mx-auto mt-8 max-w-[800px] text-center md:mt-0 mb-5 text-[28px] font-playfair font-semibold 
        leading-tight md:text-[34px]"
            >
              Wishlist
            </div>
            <div className="flex flex-col gap-12 py-10 lg:flex-row">
              {/*Left Side Box */}
              <div className="flex-[2]">
                <div className="text-lg font-bold font-playfair">
                  Cart Items
                </div>
                {listItems.map((item) => (
                  <WishListItem key={item.id} data={item} />
                ))}
              </div>
            </div>
          </>
        )}{" "}
        {/*Empty Wishlist Message */}
        {listItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <Image
              src={"/empty-wishlist.png"}
              width={700}
              height={700}
              alt="empty cart"
              className="w-[500px] md:w-[700px]"
            />
            <span className="text-xl md:text-3xl text-center font-bold md:mt-7">
              Don't just window-shop, add to your empty wishlist and feel like a
              boss with nothing to buy!
            </span>
            <span className="text-center text-[16px] md:text-[20px] mt-4">
              Go ahead and explore our products
            </span>
            <Link
              href={"/"}
              className="py-2 md:py-4 px-4 md:px-8 rounded-full bg-black text-white text-md md:text-xl font-medium transition-transform
          active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
