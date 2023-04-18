import CartItem from "@/Components/CartItem";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react"; //caching a value so that it doesnt need to be recalculated
import { useSelector } from "react-redux";
export default function Cart() {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subtTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  return (
    <div className="w-fill md:py-20">
      <section className="mx-auto max-w-[1200px]">
        {cartItems.length > 0 && (
          <>
            {/*Heading Start */}
            <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0 mb-5 text-[28px] font-playfair font-semibold leading-tight md:text-[34px]">
              Shopping Cart
              {/*Heading End */}
            </div>
            <div className="flex flex-col gap-12 py-10 lg:flex-row">
              {/*Left Side Box */}
              <div className="flex-[2]">
                <div className="text-lg font-bold font-playfair">
                  Cart Items
                </div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
              {/*Left Side Box End */}
              {/*Right Box */}
              <div className="flex-[1]">
                {/*Summary Heading */}
                <div className="text-lg font-bold font-playfair">Summary</div>
                {/*Sumamry Box (Right Box) */}
                <div className="my-5 rounded-xl bg-black/[0.05] p-5">
                  {/*Subtotal and price */}
                  <div className="flex justify-between">
                    <div className="text-md font-medium uppercase font-playfair text-black md:text-lg">
                      Subtotal
                    </div>
                    <div className="text-md font-medium text-black md:text-lg font-playfair">
                      $ {subtTotal}
                    </div>
                  </div>
                  {/*Description */}
                  <div className="text-[14px] md:text-[16px] py-5 border-t mt-5 font-quickSand">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It doesnt include delievery costs and international
                    transaction fees.
                  </div>
                </div>
                {/*Summary Box Ends */}
                {/*Checkout Button */}
                <button
                  className="w-full py-4 font-playfair rounded-full bg-black text-white text-lg font-medium transition-transform active:sacle-95 mb-3 hover:opacity-75 
            flex items-center gap-2 justify-center"
                >
                  Checkout
                </button>
              </div>
              {/*Right Box ends */}
            </div>
          </>
        )}
        {/*Checkout Detail Ends */}
        {/*Empty Cart Page */}
        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <Image
              src={"/empty_cart.png"}
              width={700}
              height={700}
              alt="empty cart"
              className="w-[500px] md:w-[700px]"
            />
            <span className="text-xl font-bold">
              Looks like this cart is on a diet, it's empty!
            </span>
            <span className="text-center mt-4">
              Go ahead and explore our products
            </span>
            <Link
              href={"/"}
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform
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
