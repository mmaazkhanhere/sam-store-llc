import React from "react";

export default function Contact() {
  return (
    <section className="mx-auto h-[900px] max-w-[1400px]">
      <div className="bg-contact mx-auto flex h-[500px] max-w-[1400px] items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat pt-[30px] sm:h-[400px] md:pt-[50px]">
        <div className="inset-0 flex items-center justify-center ">
          <div className="bg-white text-center text-black opacity-75 md:px-4 md:py-2 lg:px-8 lg:py-4">
            <h2 className="sm:text-[25px] md:text-[30px] font-bold lg:text-[40px]">
              Get in Touch
            </h2>
            <p className="font-quickSand sm:text-[14px] md:text-[17px] lg:mt-3 lg:text-[20px]">
              Want to get in touch? We would like to hear from you. Here's how
              you can reach us!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute mx-auto flex items-center sm:justify-between md:justify-around  sm:w-[410px] md:w-[690px] lg:w-[1400px]">
        <div className="-mt-12 flex sm:h-[320px] sm:w-[200px] flex-col items-center justify-center border border-black bg-white sm:p-4 p-8 md:w-[300px] md:h-[340px] lg:w-[500px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="sm:h-8 sm:w-8 md:h-11 md:w-11 lg:h-14 lg:w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-4 text-center sm:text-[16px] font-bold md:text-[19px] lg:text-[22px]">
              Talk to Our Representative
            </h1>
            <p className="mt-4 text-center sm:text-[13px] md:text-[15px] lg:text-[16px]">
              Pickup your phone and connect with our represetative to provide
              valuable feedback to imporve our customer experience
            </p>
            <a
              href="tel:+1234567890"
              className="mt-4 sm:text-[14px] md:text-[16px] font-medium text-blue-600 underline hover:font-bold lg:text-[18px]"
            >
              +1 234 567 890
            </a>
          </div>
        </div>

        <div className="-mt-12 flex sm:h-[320px] sm:w-[200px] flex-col items-center justify-center border border-black bg-white sm:p-4 lg:p-8 lg:w-[500px] md:w-[300px] md:h-[340px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="sm:h-8 sm:w-8 md:h-11 md:w-11 lg:h-14 lg:w-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-4 text-center sm:text-[16px] font-bold md:text-[19px] lg:text-[22px]">
              Email Us
            </h1>
            <p className="mt-4 text-center sm:text-[13px] md:text-[15px] lg:text-[16px]">
              Email us for product inquiries, refund, complaints, delievery
              status, wholesale inquiries and valuable user experience
              information
            </p>
            <a
              href="mailto:contact@samstorellc.com"
              className="mt-4 sm:text-[14px] md:text-[16px] font-medium text-blue-600 underline hover:font-bold lg:text-[18px]"
            >
              contact@samstorellc.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
