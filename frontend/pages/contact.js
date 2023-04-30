import React from "react";

export default function Contact() {
  return (
    <section class="mx-auto h-[800px] max-w-[1400px]">
      <div class="bg-contact mx-auto flex h-[500px] max-w-[1400px] items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat pt-[30px] md:pt-[50px]">
        <div class="inset-0 flex items-center justify-center border border-black">
          <div class="bg-white px-8 py-4 text-center text-black opacity-75">
            <h2 class="text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <p class="text-md font-quickSand md:text-xl">
              Want to get in touch? We would like to hear from you. Here's how
              you can reach us!
            </p>
          </div>
        </div>
      </div>
      <div class="absolute flex w-[1400px] items-center justify-around">
        <div class="-mt-12 flex max-w-[500px] flex-col items-center justify-center border border-black bg-white p-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-14 w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h1 class="mt-4 text-[22px] font-bold">
              Talk to Our Representative
            </h1>
            <p class="mt-4 text-center text-[16px]">
              Pickup your phone and connect with our represetative to provide
              valuable feedback to imporve our customer experience
            </p>
            <a
              href="tel:+1234567890"
              class="mt-4 text-[18px] font-medium text-blue-600 underline hover:font-bold"
            >
              +1 234 567 890
            </a>
          </div>
        </div>

        <div class="-mt-12 flex max-w-[500px] flex-col items-center justify-center border border-black bg-white p-8">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-14 w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h1 class="mt-4 text-[22px] font-bold">Email Us</h1>
            <p class="mt-4 text-center text-[16px]">
              Email us for product inquiries, refund, complaints, delievery
              status, wholesale inquiries and valubale user experience
              information
            </p>
            <a
              href="mailto:contact@samstorellc.com"
              class="mt-4 text-[18px] font-medium text-blue-600 underline hover:font-bold"
            >
              contact@samstorellc.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
