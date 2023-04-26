import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";

export default function Header() {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { listItems } = useSelector((state) => state.wishlist);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px] ");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
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
        </Link>
        <div className="flex">
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
              {listItems.length > 0 && (
                <div
                  className="absolute bottom-3 md:bottom-4 left-4 md:left-6 flex min-w-[18px] items-center 
              justify-center rounded-full bg-red-600 text-[10px] text-white md:min-w-[20px] md:text-[14px]"
                >
                  {listItems.length}
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
              {cartItems.length > 0 && (
                <div className="absolute bottom-3 left-5 flex min-w-[18px] items-center justify-center rounded-full bg-red-600 text-[10px] text-white md:min-w-[20px] md:text-[14px]">
                  {cartItems.length}
                </div>
              )}
            </Link>
          </div>
          <button className="group mr-4 flex md:mr-0 md:hidden">
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
            <div className="absolute border top-20 bg-white right-0 w-full opacity-0 transition-all duration-300 group-focus:right-0 group-focus:opacity-100">
              {/*Absolute: sets the element to position absolute within its container
                top-0: positions the top of the element at the top of its container
                -right-full: with this the menu comes from the right and closes by moving towards the right
                h-screen: sets the height of the element to height of the viewport
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
                  <Link href={"/category/contact"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
