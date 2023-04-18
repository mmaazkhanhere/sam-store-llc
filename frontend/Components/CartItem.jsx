import { updateCart, removeFromCart } from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function CartItem({ data }) {
  const p = data.attributes;
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/*Image Starts */}
      <div className="aspect-square w-[50px] md:w-[150px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={150}
          height={150}
        />
      </div>
      {/*Image Ends */}
      {/*Product Detail Box Starts */}
      <div className="flex w-full flex-col">
        {/*Product Name and Price */}
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex font-playfair flex-col font-semibold text-black/[0.8] md:flex-row">
            {p.name}
          </div>
          <div className="md:text-md block font-quickSand text-sm font-medium text-black/[0.5] md:hidden">
            {p.subtitle}
          </div>
          <div className="md:text-md mt-2 text-sm font-bold font-playfair text-black/[0.5]">
            $ {p.price}
          </div>
        </div>
        {/*Product Subtitles displayed when in large screen below the name */}
        <div className="md:text-md hidden font-medium font-quickSand text-black/[0.5] md:block">
          {p.subtitle}
        </div>
        {/*Quantity Selectoin */}
        <div className="mt-4 flex items-center justify-between">
          <div className="itens-center md:text-md flex gap-2 text-sm text-black/[0.5] md:gap-10">
            <div className="flex items-center gap-1">
              {/*Quantity selectoin */}
              <div className="font-semibold font-quickSand">Quantity:</div>
              <select
                name=""
                id=""
                className="hover:text-black"
                onChange={(e) =>
                  updateCartItem(e, "quantity")
                } /*an onChange event listener is added to the select element, which calls the updateCartItem function and passes the event object
                and a akey argument of quantity, which tells the function to update the quantity value in the 'data' object with the selected value from dropdown*/
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  /*am array of 10 elements, each representing a quantity is created. The  map funciton is used to iterate over each
                element in the array, and for each element a 'kry' and 'value' are generated for the corresponding o[tion element in the select dropdown*/
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/*Quantity Selection ends */}
          {/*Delete Button */}
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px]"
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
}
