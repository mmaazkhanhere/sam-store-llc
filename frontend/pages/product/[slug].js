import RelatedProductsCarousel from "@/Components/RelatedProductsCarousel";
import Image from "next/image";
import React from "react";

import { addToCart } from "@/store/cartSlice";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercetange } from "@/utils/helper";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import "react-toastify/dist/ReactToastify.css";

export default function Product({ product, products }) {
  const p = product?.data?.[0]?.attributes;
  const dispatch = useDispatch();
  const notify = () => {
    toast.success(
      "Item added! Your credit card is feeling loved and accepted",
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  return (
    <div>
      <section className="mx-auto max-w-[1200px] mb-[30px] md:mb-[50px]">
        <ToastContainer />
        <div className="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px] mt-[50px]">
          <div className="lg:sticky mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
            <Image
              src={p.thumbnail.data.attributes.url}
              width={700}
              height={700}
              alt={p.name}
              className="lg:hover:scale-150 "
            />
          </div>

          <div className="flex-[1] py-3 p-4 mt-[5px]">
            <div className="mb-2 text-[26px] md:text-[34px] font-playfair font-semibold leading-tight">
              {p.name}
            </div>
            <div className="mb-5 text-lg font-semibold font-playfair ">
              {p.subtitle}
            </div>
            <div className="flex items-center justify-center">
              <p className="mr-2 text-lg font-playfair font-semibold">
                $ {p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-sm font-medium line-through">
                    $ {p.original_price}
                  </p>

                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercetange(p.original_price, p.price)} %
                    off
                  </p>
                </>
              )}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md mb-20 font-medium text-black/[0.5]">{`(Also includes all applicable duties)`}</div>
            <button
              className="w-full rounded-full border bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
              onClick={() => {
                dispatch(
                  addToCart({
                    ...product?.data?.[0],
                    oneQuantityPrice: p.price,
                  })
                );
                notify();
              }}
            >
              Add To Cart
            </button>
            <button
              className="w-full py-4 rounded-full border border-black text-lg 
                    font-medium hover:bg-red-600 hover:text-white transition-transform active:scale-95 flex items-center justify-center 
                    gap-2 mb-10 hover:opacity-75"
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="mb-5 text-lg font-bold">Product Details</div>
              <div className="markdown text-mb mb-5 text-justify">
                <ReactMarkdown className="m-[20px] list-disc">
                  {p.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
        <RelatedProductsCarousel products={products} />
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  //used to generate a list of valid paths for dynamic pages at build time
  const products = await fetchDataFromApi("/api/products?populate=*"); //getting all product data
  const paths = products?.data?.map((p) => ({
    //creates an array of object that contain paths parameter for the getStaticProps function
    params: {
      slug: p.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false, // any request for a path that is not in the 'paths' array will result a 404 error
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );
  return {
    // Passed to the page component as props
    props: {
      product,
      products,
    },
  };
}
