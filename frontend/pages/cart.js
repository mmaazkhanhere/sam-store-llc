import React from "react";

export default function cart() {
  return (
    <div className="w-full md:py-20">
      <section className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] font-semibold mb-5 leading-tight">
            Shopping Cart
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 py-12">
          <div className="flex-[2]">
            <div className="text-lg font-semibold">Cart Items</div>
          </div>
        </div>
      </section>
    </div>
  );
}
