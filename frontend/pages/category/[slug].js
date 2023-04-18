import ProductCard from "@/Components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";

const maxResult = 3;

export default function HomeAppliance({ category, products, slug }) {
  const [pageIndex, setPageIndex] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    setPageIndex(1);
  }, [query]);

  const { data, error, isLoading } = useSWR(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`,
    fetchDataFromApi,
    {
      fallbackData: products,
    }
  );

  return (
    <div className="w-full md:py-20 relative">
      {/*Whole Section */}
      <section className="text-center max-w-[1000px] mx-auto mt-8 md:mt-0">
        {/*Heading Section */}
        <div className="text-[32px] md:text-[44px] mb-10 font-semibold leading-tight font-playfair">
          {category?.data?.[0]?.attributes?.name}
        </div>
        {/*Product Grid Starts */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[60px] md:mt-[90px] lg:grid-cols-3 gap-[100px] my-14 px-5 md:px-0">
          {data?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        {/*Product Grid Ends */}
        {/*Pagination buttons */}
        {data?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>
            {/*Page Number */}
            <span className="font-bold">
              {`${pageIndex} of ${data && data.meta.pagination.pageCount}`}
            </span>

            {/*Next Button */}
            <button
              className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
              disabled={pageIndex === (data && data.meta.pagination.pageCount)}
              onClick={() => setPageIndex(pageIndex + 1)}
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
  /*getStaticPaths is typically used in Nextjs to generate a list of valid paths for dynamic pages at build time
  - fetchDataFromApi is called to retrieve data from an API endpoint that returns a list of categories with attributes and wati while the fetching is complete
  - The return data is stored in the cateogry variable
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
/*getStaticProps is used in Nextjs to fetch data at build time and pass it as props to a page component
- fetchDataFromApi is called twice. The first call to API uses the slug value to fetch a single category object the mathces the slug value
- Second call to it uses the 'slug' value to fethc an array of products that belong top the category with the value slug
- Three properties are returned: categories, products, and slug */
