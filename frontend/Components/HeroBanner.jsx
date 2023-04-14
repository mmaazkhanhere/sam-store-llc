import React from "react";

export default function HeroBanner() {
  return (
    <div>
      <div className="relative flex mx-auto items-center justify-center">
        <video className="" src={"/shopping.mp4"} autoPlay muted loop />
        <div className="absolute h-full max-w-5xl ">
          <h1 className="text-black font-bold text-center text-[16px] md:text-[44px] leading-tight font-playfair p-14 md:p-40 ">
            Shop now and elevate your style with our exclusive collection
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-black font-bold text-center text-[12px] md:text-[38px] leading-tight font-quickSand  p-8 md:p-32">
          Discover Your Signature Look: Shop Our Exclusive Collection and Step
          Up Your Style Game Today
        </h1>
      </div>
    </div>
  );
}
