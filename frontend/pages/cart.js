import CartItem from "@/Components/CartItem";
import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react"; //caching a value so that it doesnt need to be recalculated
import { useSelector } from "react-redux";

const stripePromise = loadStripe(
  process.env
    .NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY /*'process.env' object is a global variable in Node.js that contains the user
  environment.
  NEXT_PUBLIC is a Next.js convention that makes the variable available in client-side code */
); //function from the Stripe library to asynchronously load the Stripe.js script and create a stripe instance and returns a promise that resolves to a stripe object

export default function Cart() {
  const [loading, setLoading] =
    useState(
      false
    ); /*initialises a 'loading' state variable to false and a 'setLoading' function to set
  update the value of loading variable */
  const { cartItems } = useSelector(
    (state) => state.cart
  ); /*useSelector is a hook that allows you to extract data from the Redux store
  state. Here, 'cartItems' property from the 'cart' slice is selected */

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, val) => total + val.attributes.price,
      0
    ); /*uses the reduce method to sum up the 'price' attribute of each
    item in the cartItems array. Reduce function takes two arguments
    - First argument is a function that accumulates the total value
    - Second argument is the intial value of the total value */
  }, [cartItems]); //uses the useMemo hook from React to memoize the result of a calculation based on the 'cartItems' array

  const handlePayment = async () => {
    try {
      setLoading(true); //sets the loading state to true indicating that the payment is being processed
      const stripe = await stripePromise; //uses stripePromise object to intialise the Stripe API client
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems, //sends a request to the server to create a new order with the list of products in the shopping cart
      });
      await stripe.redirectToCheckout({
        /*Redirects the user to Stripe checkout page, passing the sessionId of the Stripe session. */
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false); //sets the loading state back to 'false' after the payment request has been processed
      console.log(error);
    }
  };

  return (
    <div className="w-full md:py-20">
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
                {cartItems.map(
                  (
                    item /*uses map function to iterate over each item in the 'cartItems' array and perform an operation on each item */
                  ) => (
                    <CartItem
                      key={item.id}
                      data={item}
                    /> /*for each item, a CartItem component is rendered with two props
                  - key prop is passed to CartItem to identify each item uniquely
                  - data prop is passed with data for the item that is being rendered */
                  )
                )}
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
                      $ {subTotal}
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
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment} //when clicked on, handlePayment method is called to process the payment procedure
                >
                  Checkout
                  {loading && <Image src={"/spinner.svg"} alt="Loading" />}{" "}
                  {/*If loading is true, the Image component will be displayed showing the loading spinner Image  */}
                </button>
              </div>
              {/*Right Box ends */}
            </div>
          </>
        )}
        {/*Checkout Detail Ends */}
        {/*Empty Cart Page */}
        {cartItems.length < 1 && ( //if no items are present in the cart, the following code will run
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:mt-14">
            <Image
              src={"/empty_cart.png"}
              width={700}
              height={700}
              alt="empty cart"
              className="w-[500px] md:w-[700px]"
            />
            <span className="text-xl md:text-3xl text-center font-bold">
              Looks like this cart is on a diet, it's empty!
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
