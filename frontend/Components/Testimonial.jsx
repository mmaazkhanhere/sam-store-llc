import React from "react";
import Image from "next/image";

import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay";

export default function Testimonial() {
  return (
    <div className="mb-[30px] md:mb-[50px]">
      <div
        className="flex flex-col items-center justify-center max-w-[800px] mx-auto pt-[30px] md:pt-[50px]
      "
      >
        {" "}
        {/*Heading div */}
        <h1 className=" text-2xl md:text-4xl underline font-bold font-playfair">
          Customer Feedback
        </h1>
        <p className="text-md font-medium text-center md:mt-6 mt-2">
          We place high value on strong relationships and have seen the benefit
          they bring to our business. Customer feedback is vital in helping us
          to get it right
        </p>
      </div>
      <div className=" max-w-[700px] mx-auto mt-6 bg-slate-200 rounded-lg ">
        {" "}
        {/*Carousel Div */}
        <Swiper
          modules={[
            Navigation,
            Pagination,
            A11y,
            Autoplay,
          ]} /*an array of additional swiper modules that provide extra
          functionality to the swiper */
          slidesPerView={1} //only one slide shown for view
          onSwiper={(swiper) =>
            console.log(swiper)
          } /*a callback function that is executed when the swiper is intialised and 
          returns the swiper instances */
          onSlideChange={() =>
            console.log("slide change")
          } /*A callback function that is executed when the active slide in the
          swiper changes */
          autoplay={{
            //an object that contains the autoplay configuration options for the swiper.
            delay: 2500, //specifies a delay of 2.5 sec before slide is changed
            disableOnInteraction: false, //the autoplay will not be disabled when interacted with the swiper
          }}
        >
          {/*Slide 1 */}
          <SwiperSlide>
            <section className="flex flex-col items-center justify-center p-10 max-w-[500px] mx-auto ">
              <Image
                src={"/test_1.jpg"}
                height={200}
                width={200}
                alt="People"
                className="rounded-full object-cover"
              />
              <p className="text-[15px] text-justify md:mt-10 mt-6 text-black/[0.7] font-quickSand">
                I recently purchased a product from Sam Store and I couldn't be
                happier with my experience. The website was easy to navigate and
                find what I was looking for. The checkout process was quick and
                simple, and I received my product faster than I expected. The
                quality of the product was outstanding and it exceeded my
                expectations. I also appreciated the excellent customer service
                I received when I had a question about my order. Overall, I
                highly recommend Sam Store for anyone looking for high-quality
                products and outstanding customer service
              </p>
              <p className="md:mt-6 mt-2 font-bold font">Samantha</p>
            </section>
          </SwiperSlide>

          {/*Slide 2 */}
          <SwiperSlide>
            <section className="flex flex-col items-center justify-center p-10 max-w-[500px] mx-auto">
              <Image
                src={"/test_2.jpg"}
                height={200}
                width={200}
                alt="People"
                className="rounded-full object-cover"
              />
              <p className="text-[15px] text-justify md:mt-10 mt-6 text-black/[0.7] font-quickSand">
                I recently purchased a pair of shoes from Sam Store and I
                couldn't be happier with my experience. The checkout process was
                quick and easy, and my order arrived right on time. The shoes
                were exactly as described and the quality exceeded my
                expectations. I also appreciated the personalized thank you note
                included in the package. It's clear that this store takes pride
                in providing excellent customer service and I will definitely be
                a repeat customer in the future. Thank you for a great shopping
                experience
              </p>
              <p className="md:mt-6 mt-2 font-bold font">Will Jack</p>
            </section>
          </SwiperSlide>

          {/*Slide 3 */}
          <SwiperSlide>
            <section className="flex flex-col items-center justify-center p-10 max-w-[500px] mx-auto">
              <Image
                src={"/test_3.jpg"}
                height={200}
                width={200}
                alt="People"
                className="rounded-full object-cover"
              />
              <p className="text-[15px] text-justify md:mt-10 mt-6 text-black/[0.7] font-quickSand">
                I am happy to share my positive experience with Sam Store. From
                start to finish, my shopping experience was fantastic. The
                website was easy to navigate, and I found exactly what I was
                looking for quickly. The checkout process was seamless, and my
                order arrived earlier than expected. The product I received was
                of excellent quality and matched the description on the website
                perfectly. I also appreciated the attention to detail in the
                packaging, which showed that the store truly cares about their
                customers' satisfaction.
              </p>
              <p className="md:mt-6 mt-2 font-bold font">Emily James</p>
            </section>
          </SwiperSlide>

          {/*Slide 4 */}
          <SwiperSlide>
            <section className="flex flex-col items-center justify-center p-10 max-w-[500px] mx-auto">
              <Image
                src={"/test_6.jpg"}
                height={200}
                width={200}
                alt="People"
                className="rounded-full object-cover"
              />
              <p className="text-[15px] text-justify md:mt-6 mt-2 text-black/[0.7] font-quickSand">
                I recently made a purchase from Sam Store and I must say, I am
                thoroughly impressed! The ordering process was seamless and easy
                to navigate. The product arrived well-packaged and in perfect
                condition. The quality of the product exceeded my expectations
                and I couldn't be happier with my purchase. The customer service
                team was also very helpful and responsive to my inquiries. I
                will definitely be a repeat customer and highly recommend Sam
                Store to anyone looking for a reliable and high-quality online
                shopping experience.
              </p>
              <p className="md:mt-6 mt-2 font-bold font">Will Smith</p>
            </section>
          </SwiperSlide>

          {/*Slide 5 */}
          <SwiperSlide>
            <section className="flex flex-col items-center justify-center p-10 max-w-[500px] mx-auto">
              <Image
                src={"/test_5.jpg"}
                height={200}
                width={200}
                alt="People"
                className="rounded-full object-cover"
              />
              <p className="text-[15px] text-justify md:mt-6 mt-2 text-black/[0.7] font-quickSand">
                I found exactly what I was looking for quickly and easily, and
                the checkout process was a breeze. Your team also kept me
                updated throughout the shipping process, which made me feel
                confident that my order was in good hands. When my order
                arrived, I was thrilled with the high quality of the products,
                and I could tell that great care had been taken to ensure they
                arrived in perfect condition. Overall, my experience with your
                ecommerce store was fantastic, and I will definitely be
                recommending Sam Store to friends and family.
              </p>
              <p className="md:mt-6 mt-2 font-bold font">Lucy Lu</p>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
