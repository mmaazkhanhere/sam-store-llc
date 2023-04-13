import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between shadow-md ">
        <Image
          src="/Sam_Store.png"
          alt=""
          width={100}
          height={100}
          className="ml-6 scale-125"
        />
        <div className="flex">
          <div className="hidden md:flex gap-12 font-merriweather">
            <Link href="/homeAppliance">Home Appliance</Link>
            <Link href="/Women">Women</Link>
            <Link href="/Men">Men</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
          <Link
            href="/cart"
            className="relative flex cursor-pointer items-center justify-center gap-1 rounded-full ml-0 md:ml-10 "
          >
            <div className="mr-6 md:mr-10">
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
            <div className="absolute bottom-3 left-5 flex min-w-[18px] items-center justify-center rounded-full bg-red-600 text-[10px] text-white md:min-w-[20px] md:text-[14px]">
              10
            </div>
          </Link>
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
                  <Link href="">Home Appliances</Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href="">Women</Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href="">Men</Link>
                </li>
                <li className="border-b border-b-slate-300 py-2">
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}