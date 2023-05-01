import ProductCard from "@/Components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

const maxResult = 3;

export default function HomeAppliance({ category, products, slug }) {
  const [pageIndex, setPageIndex] =
    useState(
      1
    ); /*declares a state variable called pageIndex which is set to 1 and a function called
  setPageIndex to update its value */
  const { query } =
    useRouter(); /*uses the useRouter hook of Next.js to access the current query parameters from the URl. The 'query'
  variable is an object that contains key-value pairs representing the query parameters */

  useEffect(() => {
    /*defines a side effect that runs after the component has been mounted and whenever the query variable changes. It 
  sets the setPageIndex to 1 */
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
    /*useSWR is hook function of 'swr' library which is used for data fetching and caching. It returns three
  properties
  'data' is the data fetched from the API
  'error' is an error object if the API call fails
  'isLoading' is a boolean value that indicates whether the API call is currently in progress. It is used to display a loading spinner with the company logo
  while waiting for the data to load. */
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi, //a callback function that is executed when data needs to be fetched
    {
      //an options object that can include additional configuration options for the hooks.
      fallbackData:
        products /*fallback option is specified to provide some inital data to display before the API data is fetched, which is useful
      for improving the precieved performance of the component by showing some content immediately while waiting for the data to load */,
    }
  );

  return (
    <div className="w-full md:py-20 relative">
      {/*Whole Section */}
      <section className="text-center max-w-[1000px] mx-auto mt-8 md:mt-0">
        {/*Heading Section */}
        <div className="text-[32px] md:text-[44px] mb-10 font-semibold leading-tight font-playfair">
          {category?.data?.[0]?.attributes?.name}{" "}
          {/*Displays the name of the category */}
        </div>
        {/*Product Grid Starts */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[60px] md:mt-[90px] lg:grid-cols-3 gap-[100px] my-14 px-5 md:px-0">
          {data?.data?.map(
            (
              product /*Iterates over the data array. It takes a single parameter 'product' which represents each element 
          in the data array */
            ) => (
              <ProductCard
                key={product?.id}
                data={product}
              /> /*key prop is set to the produc id to keep track which items in a list have changed
            been added or been removed. The ProductCard component is being passsed the 'data' prop that contains the 'product' object iterated over
            in the .map function, which allows the component to access the data it needs to display the product card */
            )
          )}
        </div>
        {/*Product Grid Ends */}
        {/*Pagination buttons */}
        {data?.meta?.pagination?.total >
          maxResult /*checks if the total property of the 'pagination' object inside the 'data' prop is greater than
        maxResult (number of items to be displayed) */ && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
              disabled={pageIndex === 1} //the button will be disabled when the pageIndex is 1 (i.e it is on the first page)
              onClick={() => setPageIndex(pageIndex - 1)} //when clicked on the button, the pageIndex will be set with a value previous of current page index (moves to previous page)
            >
              Previous
            </button>
            {/*Page Number */}
            <span className="font-bold">
              {`${pageIndex} of ${data && data.meta.pagination.pageCount}`}{" "}
              {/*Displays current page index */}
            </span>

            {/*Next Button */}
            <button
              className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
              disabled={pageIndex === (data && data.meta.pagination.pageCount)} //the button will be disabled when on the last page
              onClick={() =>
                setPageIndex(pageIndex + 1)
              } /*when clicked on it, pageIndex will be set to the next value (moves to the next page) */
            >
              Next
            </button>
          </div>
        )}
        {/*Pagination button ends */}

        {
          //Loading logo and spinner
          isLoading && (
            <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
              <Image
                src="/Loading.png"
                width={150}
                height={150}
                alt="Sam Store Logo"
              />
              <span className="text-2xl font-medium">Loading...</span>
            </div>
          )
        }
      </section>
    </div>
  );
}
export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
  /*getStaticPaths is used in Next.js framework for pre-generating static pages at build time.
  - fetchDataFromApi is called to retrieve data from an API endpoint that returns a list of categories with attributes and wati while the fetching is complete
  - The return data is stored in the cateogry variable
  - Once the category data is fetched from the API, the map function is used to transform each category object into an object with a param property that 
  has a slug attribute. The resulting array of objects is assigned to the 'paths' constant variable
  - The optional chaining operator (?.) is used to safely access the data property of the category object. If category is 'undefined' or 'null', the
  value of the paths will be 'undefined'
  - The 'map' function is called on the 'category.data' array to transform each category  object into an objects with a params property 
  that contain a slug property. This creates an array of objects that can be used as the 'paths' parameter for the 'getStaticProps' function.
  - The 'fallback' property is set to 'false', which means that any request for a path that is not in the 'paths' array will result a 404 error */
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products =
    await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&
  /api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page1]=1&pagination[pageSize]=${maxResult}`);

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
/*getStaticProps exports an object with the properties necessary for Server-Side Rendering (SSR) in Next.js.
- fetchDataFromApi is called twice. The first call to API uses the slug value to fetch a single category object the matches the slug value
- Second call to it uses the 'slug' value to fethc an array of products that belong top the category with the value slug
- Three properties are returned: categories, products, and slug */
