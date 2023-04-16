import Link from "next/link";
import React from "react";

export default function success() {
  return (
    <div className="min-h-[650px] flex items-center">
      <section className="max-w-[1400px] mx-auto">
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">
            Thank you for shopping with us! We promise our products won't make
            you say 'I can't believe I bought this' like that regrettable tattoo
            you got in college
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <Link
            href="mailto:example@email.com"
            className="underline cursor-pointer hover:font-bold"
          >
            samstore@gmail.com
          </Link>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
