import Link from "next/link";
import React from "react";

export default function failed() {
  return (
    <div className="min-h-[650px] flex items-center">
      <section className="max-w-[1400px] mx-auto">
        <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
          <div className="text-2xl font-bold">Payment failed!</div>
          <div className="text-base mt-5">
            Looks like your payment is as invisible as our product's cloak of
            invisibility! Please try again
          </div>
          <div className="text-base mt-5">
            For any product related query, drop an email to
          </div>
          <Link
            href="mailto:contact@samstorellc.com"
            className="underline hover:font-bold"
          >
            contact@samstorellc.com
          </Link>

          <Link href="/" className="font-bold mt-5">
            Continue Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
