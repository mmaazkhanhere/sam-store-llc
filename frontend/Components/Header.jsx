import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

export default function Header() {
  const [show, setShow] =
    useState(
      "translate-y-0"
    ); /*sets up the 'show' state variable and a corresponding function 'setShow' that can be used to update 
  its value. The initial value is set to 'translate-y-0' that will move the component vertically by 0 pixels */

  const [lastScrollY, setLastScrollY] =
    useState(
      0
    ); /*sets 'lastScrollY' state variable and an corresponding 'setLastScrollY' function, which can be 
  used to update its value*/

  const { cartItems } = useSelector(
    (state) => state.cart
  ); /*Extracts cartItems object from the 'cart' slice of the Redux store by passing a callback function
  to the useSelector hook, which takes in the entire state object and returns only the 'cartItems' object */
  const { listItems } = useSelector(
    (state) => state.wishlist
  ); /*extracts listItems object from the 'wishlist' slice of the Redux store by passing a callback function
  to the useSelector that takes in the entire state object and returns only the listItems object */

  const controlNavbar = () => {
    // a function that controls the behavior of a navigation bar. The navbar will appear whenever user scroll upwards
    if (window.scrollY > 200) {
      //first it checks whether the user has scrolled down more than 200px
      if (window.scrollY > lastScrollY) {
        //then it checks if the scroll direction is up or down by comparing the present scroll position with previous
        setShow("-translate-y-[80px] "); //if the scroll direction is down, the navbar will translate upward 80px thus hiding it
      } else {
        setShow("shadow-sm"); // if the scroll direction is upwards, the navabr is shown with small shadow
      }
    } else {
      //if the user has scroll less than 200px, it shows the header by setting 'show' to 'translate-y-0'
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY); //it updates the lastscroll to the current scroll position
  };

  useEffect(() => {
    /*sets up a side effect that adds and remove an event listener for the scroll event on the window object.EventListener are Javascript's procedure
  that waits for the occurence of an event */
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full md:h-[80px] z-20 sticky top-0 bg-white shadow-md transition-transform duration-300 ${show}`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between `}
      >
        <Link href={"/"}>
          <Image
            src="/Sam_Store.png"
            alt=""
            width={100}
            height={100}
            className="ml-6 scale-125"
          />
        </Link>{" "}
        {/*Logo of the store which will take to the home page when clicked upon */}
        <div className="flex">
          {" "}
          {/*Menu Options */}
          <div className="hidden md:flex gap-12 font-merriweather">
            <Link href="/category/home-appliances">Home Appliance</Link>
            <Link href="/category/women">Women</Link>
            <Link href="/category/men">Men</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          {/*Icons Start */}
          <div className="flex items-center gap-2">
            {/*Wishlist*/}
            <Link
              href="/wishlist"
              className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full ml-0 md:ml-10 "
            >
              <div className="flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <IoMdHeartEmpty className="text-[20px] md:text-[26px]" />
              </div>
              {listItems.length > 0 && ( //if any item is present in wishlist, the following styles will be applied
                <div
                  className="absolute bottom-3 md:bottom-4 left-4 md:left-6 flex min-w-[18px] items-center 
              justify-center rounded-full bg-red-600 text-[10px] text-white md:min-w-[20px] md:text-[14px]"
                >
                  {listItems.length}{" "}
                  {/*total number of cart items will be displayed */}
                </div>
              )}
            </Link>
            {/*Cart Icon */}
            <Link
              href="/cart"
              className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full 
              ml-2 md:ml-4 mr-4"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              {cartItems.length > 0 && ( //if any item is present in the cart, the following styles will be applied
                <div className="absolute bottom-3 left-5 flex min-w-[18px] items-center justify-center rounded-full bg-red-600 text-[10px] text-white md:min-w-[20px] md:text-[14px]">
                  {cartItems.length}{" "}
                  {/*Number of items present in the cart will be displayed */}
                </div>
              )}
            </Link>
          </div>
          <button className="group mr-4 flex md:mr-0 md:hidden">
            {" "}
            {/*The following menu will be displayed for the mobile screen only */}
            <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full hover:bg-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="absolute top-20 bg-white right-0 w-full opacity-0 transition-all duration-300 group-focus:right-0 group-focus:opacity-100">
              {/*Absolute: sets the element to position absolute within its container
                top-20 sets the top margin of the element to 20 units
                right-0 positions the element at the rightmost edge of its container,
                w-full: sets the width of the element to full of its container
                group-focus: right-0 :  When the parent element is in the focus, moves the right edge of the element to the right edge of the container
                group-focus: opacity-100: when the parent element is in focus, sets the opacity of the element to 100, making it visible
                transition all duration -300: adds a transisiton effect to the elements when menu is displayed and removed*/}

              <ul className="flex w-full cursor-pointer flex-col">
                <li className="border-b border-b-slate-300 py-3">
                  <Link href={"/category/home-appliances"}>
                    Home Appliances
                  </Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href={"/category/women"}>Women</Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href={"/category/men"}>Men</Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
