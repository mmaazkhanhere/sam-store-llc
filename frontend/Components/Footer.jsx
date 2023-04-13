import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/*Main Menu */}
      <div className="max-w-[1300px] grid grid-cols-2 md:flex justify-center gap-[0] md:gap-[200px] mx-auto pt-0 md:pt-[30px] pb-0 md:pb-7">
        {/*Membership Menu */}
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
          <Link href="/" className="uppercase font-medium pt-6 md:pt-0">
            Membership
          </Link>
          <Link
            href="/contact"
            className="font-medium hover:text-white text-white/[0.5] "
          >
            Become A Partner
          </Link>
          <Link
            href="/contact"
            className="font-medium hover:text-white text-white/[0.5] "
          >
            For Supplier
          </Link>
          <Link
            href="/contact"
            className="font-medium hover:text-white text-white/[0.5] "
          >
            Send Us Feedback
          </Link>
          <Link
            href="/"
            className="font-medium hover:text-white text-white/[0.5] "
          >
            Members Mark
          </Link>
        </div>
        {/*Shipping and Delievery Menu */}
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start pt-6 md:pt-0 ">
          <p className="uppercase font-medium ">Shipping & Delievery</p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Order Status
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Pickup
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Returns & Refunds
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Payment Optoins
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Shipping FAQs
          </p>
        </div>
        {/*About Us Menu */}
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start pt-6 md:pt-0 pb-6 md:pb-0">
          <Link href="/about" className="uppercase font-medium ">
            About Sam Store
          </Link>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            News
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Careers
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Investors
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Exports
          </p>
        </div>
        {/*Help Menu */}
        <div className="flex flex-col gap-2 md:gap-4 items-center md:items-start pt-6 md:pt-0 pb-6 md:pb-0">
          <p href="/" className="uppercase font-medium ">
            Help
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Help Center
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Product Recalls
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            My Account
          </p>
          <p className="hover:text-white text-white/[0.5] cursor-pointer ">
            Affiliate Program
          </p>
        </div>
      </div>
      {/*Main Menu Ends */}
      {/*Icons Start */}
      <div className="flex gap-6 justify-center mt-3">
        <Link
          href="https://m.facebook.com/people/Sam-Store-LLC/100087236820452/"
          target="_blank"
        >
          <div className="w-10 h-10 flex justify-center items-center bg-white/[0.25] rounded-full hover:bg-white/[0.5]">
            <FaFacebookF size={20} />
          </div>
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <div className="w-10 h-10 flex justify-center items-center bg-white/[0.25] rounded-full hover:bg-white/[0.5]">
            <FaTwitter size={20} />
          </div>
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <div className="w-10 h-10 flex justify-center items-center bg-white/[0.25] rounded-full hover:bg-white/[0.5]">
            <FaYoutube size={20} />
          </div>
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <div className="w-10 h-10 flex justify-center items-center bg-white/[0.25] rounded-full hover:bg-white/[0.5]">
            <FaInstagram size={20} />
          </div>
        </Link>
      </div>
      {/*Icons End */}
      {/*Copyright */}
      <div className="flex text-center items-center justify-center">
        <BiCopyright /> Sam Store, Inc. All Rights Reserved
      </div>
      {/*Copyright end */}
    </footer>
  );
}
